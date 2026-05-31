// ============================================================
// Admin context — trang quản trị TOÀN HỆ THỐNG (xuyên tenant)
// ============================================================
// Super-admin (role='admin') quản trị MỌI trường: số liệu tổng, trường, người dùng,
// góp ý, quyết định AI (audit), học liệu (kiểm duyệt), gói cước. KHÁC với teacher
// (chỉ trong 1 trường) — admin BỎ QUA tenant isolation, thấy tất cả.
//
// Bảo mật: requireAdmin gate role='admin'. Admin KHÔNG tự đăng ký được (register chỉ
// cho pupil/student/teacher) — phải promote qua env ADMIN_PROMOTE_USERNAME hoặc SQL.
// Đây là foundation; UI ở public/admin.html.
// ============================================================

import { scryptSync, randomBytes } from 'node:crypto';
import { db, createNotification, setUserPlan, createUser, getUserById, getUserByUsername, updateUserEditable } from '../../db.js';
import { VALID_USER_PLANS, expiresAtFor } from '../billing/user-plans.js';
import { listAiPromptsForSchool, listAiPromptsForUser } from '../../ai-quota.js';

// Scrypt hash — đồng bộ format với contexts/identity/auth.js (scrypt$salt$hash)
function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(String(password), salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}
const USERNAME_RE = /^[a-z0-9_.-]{3,32}$/i;
const DEFAULT_SCHOOL_ID = 1; // tizia-default — không cho xoá

// ── Bootstrap admin từ env (an toàn: chỉ promote user đã tồn tại) ──
export function ensureAdminBootstrap() {
  const uname = process.env.ADMIN_PROMOTE_USERNAME;
  if (!uname) return;
  try {
    const info = db.prepare(`UPDATE users SET role='admin' WHERE username = ? COLLATE NOCASE`).run(String(uname));
    if (info.changes > 0) console.log(`[admin] promoted '${uname}' → admin`);
    else console.log(`[admin] ADMIN_PROMOTE_USERNAME='${uname}' chưa tồn tại (đăng ký trước rồi restart)`);
  } catch (e) { console.warn('[admin] bootstrap lỗi:', e?.message); }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'forbidden', message: 'Cần quyền quản trị hệ thống (admin).' });
  }
  next();
}

// ── Cross-tenant queries (KHÔNG lọc school_id) ──
const Q = {
  overview: db.prepare(`SELECT
    (SELECT COUNT(*) FROM schools) AS schools,
    (SELECT COUNT(*) FROM users) AS users,
    (SELECT COUNT(*) FROM attempts) AS attempts,
    (SELECT COUNT(*) FROM requests) AS requests,
    (SELECT COUNT(*) FROM requests WHERE status='pending') AS requests_pending`),
  schools: db.prepare(`SELECT s.id, s.code, s.name, s.domain, s.created_at,
    (SELECT COUNT(*) FROM users u WHERE u.school_id=s.id) AS users,
    (SELECT COUNT(*) FROM attempts a WHERE a.school_id=s.id) AS attempts,
    (SELECT COUNT(*) FROM requests r WHERE r.school_id=s.id) AS requests
    FROM schools s ORDER BY s.id`),
  createSchool: db.prepare(`INSERT INTO schools (code,name,domain,created_at) VALUES (@code,@name,@domain,@t)`),
  // LEFT JOIN user_wallets để admin nhìn được level/XP/coin/streak — wallet là
  // nguồn chân lý cho game-state. Row chưa có wallet → các field NULL → FE
  // hiển thị "—" / Lv1 mặc định.
  users: db.prepare(`
    SELECT u.id, u.username, u.display_name, u.role, u.school_id, u.email,
           u.plan, u.plan_expires_at, u.billing_cycle, u.created_at, u.last_login,
           w.xp, w.coins, w.streak, w.longest_streak, w.last_visit_day,
           w.quizzes_passed, w.updated_at AS wallet_updated_at
    FROM users u
    LEFT JOIN user_wallets w ON w.user_id = u.id
    WHERE (@school_id IS NULL OR u.school_id=@school_id)
    ORDER BY u.created_at DESC LIMIT @limit
  `),
  // Wallet chi tiết của 1 user (achievements + modules_by_day + daily). FE
  // dùng cho modal "xem ví của HS/SV" trong admin.
  userWalletDetail: db.prepare(`
    SELECT u.id, u.username, u.display_name, u.role,
           w.coins, w.xp, w.streak, w.longest_streak, w.streak_shields,
           w.last_visit_day, w.achievements, w.vr_sessions, w.meta_sessions,
           w.quizzes_passed, w.modules_by_day, w.daily, w.quests_claimed,
           w.updated_at
    FROM users u
    LEFT JOIN user_wallets w ON w.user_id = u.id
    WHERE u.id = ?
  `),
  setUserRole: db.prepare(`UPDATE users SET role=@role WHERE id=@id`),
  requests: db.prepare(`SELECT id, school_id, domain, type, title, detail, status, votes, student, admin_note, created_at, updated_at
    FROM requests ORDER BY created_at DESC LIMIT @limit`),
  setRequestStatus: db.prepare(`UPDATE requests SET status=@status, admin_note=@note, updated_at=@t WHERE id=@id`),
};

function tableExists(name) {
  return !!db.prepare(`SELECT 1 FROM sqlite_master WHERE type='table' AND name=?`).get(name);
}

export function attachAdmin(r) {
  ensureAdminBootstrap();

  r.get('/api/admin/overview', requireAdmin, (_req, res) => {
    const base = Q.overview.get();
    // số liệu từ context có-thể-chưa-tạo-bảng (analytics/billing/ai_decisions)
    const extra = {};
    if (tableExists('ai_decisions')) extra.ai_decisions = db.prepare(`SELECT COUNT(*) c FROM ai_decisions`).get().c;
    if (tableExists('analytics_events')) extra.events = db.prepare(`SELECT COUNT(*) c FROM analytics_events`).get().c;
    if (tableExists('subscriptions')) extra.paid_schools = db.prepare(`SELECT COUNT(*) c FROM subscriptions WHERE plan<>'free' AND status='active'`).get().c;
    if (tableExists('ai_lesson_content')) extra.ai_content = db.prepare(`SELECT COUNT(*) c FROM ai_lesson_content`).get().c;
    res.json({ ...base, ...extra });
  });

  // Trường — xem tất cả + tạo mới
  r.get('/api/admin/schools', requireAdmin, (_req, res) => res.json({ schools: Q.schools.all() }));
  r.post('/api/admin/schools', requireAdmin, (req, res) => {
    const code = String(req.body?.code || '').trim().slice(0, 40);
    const name = String(req.body?.name || '').trim().slice(0, 120);
    if (!code || !name) return res.status(400).json({ error: 'code + name required' });
    try {
      const info = Q.createSchool.run({ code, name, domain: req.body?.domain ? String(req.body.domain).toLowerCase().slice(0, 80) : null, t: Date.now() });
      res.json({ ok: true, id: info.lastInsertRowid });
    } catch (e) { res.status(409).json({ error: 'duplicate_or_invalid', detail: String(e.message) }); }
  });

  // Người dùng — xuyên tenant, lọc tuỳ chọn theo trường; đổi vai trò
  r.get('/api/admin/users', requireAdmin, (req, res) => {
    const school_id = req.query.school_id ? Number(req.query.school_id) : null;
    const limit = Math.min(Math.max(Number(req.query.limit) || 100, 1), 500);
    res.json({ users: Q.users.all({ school_id, limit }) });
  });
  r.post('/api/admin/users/:id/role', requireAdmin, (req, res) => {
    const role = String(req.body?.role || '');
    if (!['pupil', 'student', 'teacher', 'admin'].includes(role)) return res.status(400).json({ error: 'invalid_role' });
    Q.setUserRole.run({ id: Number(req.params.id), role });
    res.json({ ok: true });
  });

  // GET /api/admin/users/:id/wallet — chi tiết ví game của 1 HS/SV. Parse JSON
  // string achievements/modules_by_day/daily/quests_claimed về object để FE
  // không phải parse 2 lần. Null nếu user chưa từng có wallet row.
  r.get('/api/admin/users/:id/wallet', requireAdmin, (req, res) => {
    const row = Q.userWalletDetail.get(Number(req.params.id));
    if (!row) return res.status(404).json({ error: 'user_not_found' });
    const parse = (s, fb) => { try { return JSON.parse(s || ''); } catch { return fb; } };
    res.json({
      user: { id: row.id, username: row.username, display_name: row.display_name, role: row.role },
      wallet: row.xp == null ? null : {
        coins: row.coins, xp: row.xp,
        streak: row.streak, longest_streak: row.longest_streak, streak_shields: row.streak_shields,
        last_visit_day: row.last_visit_day,
        achievements: parse(row.achievements, []),
        vr_sessions: row.vr_sessions, meta_sessions: row.meta_sessions,
        quizzes_passed: row.quizzes_passed,
        modules_by_day: parse(row.modules_by_day, {}),
        daily: parse(row.daily, {}),
        quests_claimed: parse(row.quests_claimed, {}),
        updated_at: row.updated_at,
      },
    });
  });

  // PATCH /api/admin/users/:id/wallet — admin chỉnh ví thủ công (vd khôi phục
  // XP user mất do bug, thưởng coin cho sự kiện, reset streak). Chỉ field nào
  // truyền lên mới update; field còn lại giữ nguyên. Clamp ≥0 để chống nhập âm.
  const ALLOWED_WALLET_FIELDS = ['xp', 'coins', 'streak', 'longest_streak', 'streak_shields',
                                  'vr_sessions', 'meta_sessions', 'quizzes_passed'];
  r.patch('/api/admin/users/:id/wallet', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const cur = Q.userWalletDetail.get(id);
    if (!cur) return res.status(404).json({ error: 'user_not_found' });
    const patch = req.body || {};
    const sets = [], vals = { id, updated_at: Date.now() };
    for (const f of ALLOWED_WALLET_FIELDS) {
      if (patch[f] != null) {
        sets.push(`${f} = @${f}`);
        vals[f] = Math.max(0, Math.floor(Number(patch[f])) || 0);
      }
    }
    if (!sets.length) return res.status(400).json({ error: 'no_fields' });
    // Wallet row có thể chưa tồn tại → INSERT trước với defaults rồi UPDATE.
    if (cur.xp == null) {
      db.prepare(`INSERT INTO user_wallets (user_id, updated_at) VALUES (?, ?)`).run(id, Date.now());
    }
    db.prepare(`UPDATE user_wallets SET ${sets.join(', ')}, updated_at = @updated_at WHERE user_id = @id`).run(vals);
    res.json({ ok: true, wallet: Q.userWalletDetail.get(id) });
  });

  // Admin set gói cước thủ công (cấp/gia hạn/huỷ). cycle 'month'|'year'|null;
  // null + plan 'free' → vĩnh viễn. days override để cấp thử (vd trial 7 ngày).
  r.post('/api/admin/users/:id/plan', requireAdmin, (req, res) => {
    const plan = String(req.body?.plan || '').toLowerCase();
    if (!VALID_USER_PLANS.has(plan)) return res.status(400).json({ error: 'invalid_plan' });
    const cycle = ['month', 'year'].includes(req.body?.cycle) ? req.body.cycle : null;
    const days = Number(req.body?.days) || 0;
    let expires_at = null;
    if (plan !== 'free' && plan !== 'guest') {
      if (days > 0) expires_at = Date.now() + days * 24 * 3600 * 1000;
      else if (cycle) expires_at = expiresAtFor(cycle);
      else expires_at = expiresAtFor('month');
    }
    setUserPlan(Number(req.params.id), { plan, expires_at, cycle });
    res.json({ ok: true, plan, expires_at, cycle });
  });

  // Góp ý — xuyên tenant (giám sát Ban điều hành AI) + can thiệp status
  r.get('/api/admin/requests', requireAdmin, (req, res) => {
    const limit = Math.min(Math.max(Number(req.query.limit) || 100, 1), 500);
    res.json({ requests: Q.requests.all({ limit }) });
  });
  r.post('/api/admin/requests/:id/status', requireAdmin, (req, res) => {
    const status = String(req.body?.status || '');
    if (!['pending', 'reviewing', 'done', 'rejected'].includes(status)) return res.status(400).json({ error: 'invalid_status' });
    Q.setRequestStatus.run({ id: Number(req.params.id), status, note: req.body?.note ? String(req.body.note).slice(0, 500) : null, t: Date.now() });
    res.json({ ok: true });
  });

  // Đóng góp ý + GỬI PHẢN HỒI cá nhân cho HS. Khác /status: bắt buộc message,
  // gửi notification vào hộp thư của HS (key theo display_name). Dùng khi đã xử
  // lý xong yêu cầu — UI bell ở HS sẽ kêu báo.
  const getRequestForReply = db.prepare(`SELECT id, school_id, student, title, domain FROM requests WHERE id = ?`);
  // Ghi audit trail vào ai_decisions với decided_by='human' để admin override trùng
  // schema với AI auto-decision — bảng audit chỉ có 1 nguồn sự thật.
  const insertHumanDecision = db.prepare(`
    INSERT INTO ai_decisions (school_id, request_id, decided_by, action, status_applied, reason, public_note, priority_score, confidence, created_at)
    VALUES (@school_id, @request_id, 'human', @action, @status, @reason, @public_note, 100, 1.0, @t)
  `);
  const ACTION_BY_STATUS = { done: 'approve', rejected: 'reject', reviewing: 'approve' };

  r.post('/api/admin/requests/:id/reply', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const status = String(req.body?.status || 'done');
    if (!['done', 'rejected', 'reviewing'].includes(status)) return res.status(400).json({ error: 'invalid_status' });
    const message = String(req.body?.message || '').trim();
    if (message.length < 4) return res.status(400).json({ error: 'message_too_short' });

    const reqRow = getRequestForReply.get(id);
    if (!reqRow) return res.status(404).json({ error: 'request_not_found' });

    Q.setRequestStatus.run({ id, status, note: message.slice(0, 500), t: Date.now() });

    insertHumanDecision.run({
      school_id: reqRow.school_id || 1, request_id: id,
      action: ACTION_BY_STATUS[status],
      status, reason: `[admin] ${req.user.username} → ${status}`,
      public_note: message.slice(0, 500), t: Date.now(),
    });

    const titleByStatus = {
      done:      'Yêu cầu của bạn đã hoàn thành ✓',
      rejected:  'Phản hồi về yêu cầu của bạn',
      reviewing: 'Yêu cầu của bạn đang được xử lý',
    };
    const notif = createNotification({
      user_display_name: reqRow.student,
      request_id: id,
      kind: 'reply',
      title: titleByStatus[status],
      body: `「${reqRow.title}」 — ${message}`,
      url: `/space.html?domain=${encodeURIComponent(reqRow.domain || '')}#requests`,
      school_id: reqRow.school_id || 1,
    });
    res.json({ ok: true, status, notified: !!notif, notification_id: notif?.id || null });
  });

  // Audit quyết định AI — xuyên tenant (minh bạch "AI điều hành")
  r.get('/api/admin/ai-decisions', requireAdmin, (req, res) => {
    if (!tableExists('ai_decisions')) return res.json({ decisions: [] });
    const limit = Math.min(Math.max(Number(req.query.limit) || 100, 1), 500);
    res.json({ decisions: db.prepare(`SELECT id, school_id, request_id, decided_by, action, status_applied, confidence, reason, created_at FROM ai_decisions ORDER BY created_at DESC LIMIT ?`).all(limit) });
  });

  // Kiểm duyệt học liệu AI sinh — gắn/bỏ cờ nội dung sai
  r.get('/api/admin/content', requireAdmin, (req, res) => {
    if (!tableExists('ai_lesson_content')) return res.json({ content: [] });
    const limit = Math.min(Math.max(Number(req.query.limit) || 100, 1), 500);
    res.json({ content: db.prepare(`SELECT id, school_id, week_id, subject, kind, stem, flagged, created_at FROM ai_lesson_content ORDER BY created_at DESC LIMIT ?`).all(limit) });
  });
  r.post('/api/admin/content/:id/flag', requireAdmin, (req, res) => {
    if (!tableExists('ai_lesson_content')) return res.status(404).json({ error: 'no_content_table' });
    const flagged = req.body?.flagged ? 1 : 0;
    db.prepare(`UPDATE ai_lesson_content SET flagged=? WHERE id=?`).run(flagged, Number(req.params.id));
    res.json({ ok: true, flagged: !!flagged });
  });

  // Gói cước — xuyên tenant
  r.get('/api/admin/billing', requireAdmin, (_req, res) => {
    if (!tableExists('subscriptions')) return res.json({ subscriptions: [] });
    res.json({ subscriptions: db.prepare(`SELECT s.school_id, sc.name AS school, s.plan, s.status, s.current_period_end FROM subscriptions s LEFT JOIN schools sc ON sc.id=s.school_id ORDER BY s.school_id`).all() });
  });

  // ─────────────────────────────────────────────────────────────
  // Dashboard endpoints (single-page admin)
  // ─────────────────────────────────────────────────────────────

  // GET /api/admin/timeseries?days=30
  // Trả về [{date:'2026-05-31', attempts, users, requests, ai_tokens}] cho dashboard line/bar charts.
  // Lấp ngày trống = 0 để chart không gãy.
  r.get('/api/admin/timeseries', requireAdmin, (req, res) => {
    const days = Math.min(Math.max(Number(req.query.days) || 30, 1), 90);
    const now = Date.now();
    const startMs = now - days * 86400_000;
    const bucket = (tbl, col = 'created_at') => {
      if (!tableExists(tbl)) return new Map();
      const rows = db.prepare(`SELECT date(${col}/1000,'unixepoch','+7 hours') AS d, COUNT(*) AS n
                               FROM ${tbl} WHERE ${col} >= ? GROUP BY d`).all(startMs);
      return new Map(rows.map(r => [r.d, r.n]));
    };
    const attempts = bucket('attempts');
    const users = bucket('users');
    const requests = bucket('requests');
    let aiTokens = new Map();
    if (tableExists('ai_token_usage')) {
      const rows = db.prepare(`SELECT date(created_at/1000,'unixepoch','+7 hours') AS d,
                                      SUM(prompt_tokens + completion_tokens) AS n
                               FROM ai_token_usage WHERE created_at >= ? GROUP BY d`).all(startMs);
      aiTokens = new Map(rows.map(r => [r.d, r.n || 0]));
    }
    const series = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now - i * 86400_000);
      d.setUTCHours(d.getUTCHours() + 7); // +07 VN
      const key = d.toISOString().slice(0, 10);
      series.push({
        date: key,
        attempts: attempts.get(key) || 0,
        users: users.get(key) || 0,
        requests: requests.get(key) || 0,
        ai_tokens: aiTokens.get(key) || 0,
      });
    }
    res.json({ days, series });
  });

  // GET /api/admin/ai-tokens-by-model?days=30 — breakdown tokens by model (bar/donut chart)
  r.get('/api/admin/ai-tokens-by-model', requireAdmin, (req, res) => {
    if (!tableExists('ai_token_usage')) return res.json({ models: [] });
    const days = Math.min(Math.max(Number(req.query.days) || 30, 1), 90);
    const startMs = Date.now() - days * 86400_000;
    const rows = db.prepare(`SELECT model, provider,
        SUM(prompt_tokens) AS pin, SUM(completion_tokens) AS pout,
        COUNT(*) AS calls, SUM(cost_usd_micros) AS cost_micros
      FROM ai_token_usage WHERE created_at >= ? GROUP BY model, provider ORDER BY (pin+pout) DESC`).all(startMs);
    res.json({ days, models: rows });
  });

  // GET /api/admin/top?metric=schools|students&limit=10
  r.get('/api/admin/top', requireAdmin, (req, res) => {
    const metric = String(req.query.metric || 'schools');
    const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 50);
    if (metric === 'schools') {
      const rows = db.prepare(`SELECT s.id, s.code, s.name,
          (SELECT COUNT(*) FROM users u WHERE u.school_id=s.id) AS users,
          (SELECT COUNT(*) FROM attempts a WHERE a.school_id=s.id) AS attempts,
          (SELECT COUNT(*) FROM requests r WHERE r.school_id=s.id) AS requests
        FROM schools s ORDER BY attempts DESC, users DESC LIMIT ?`).all(limit);
      return res.json({ metric, rows });
    }
    if (metric === 'students') {
      // Top theo lượt học (link attempts ↔ users qua player_name = display_name; fallback school_id)
      const rows = db.prepare(`SELECT u.id, u.username, u.display_name, u.role, u.school_id,
          COUNT(a.id) AS attempts, COALESCE(SUM(a.score), 0) AS total_score, MAX(a.created_at) AS last_played
        FROM users u LEFT JOIN attempts a ON a.player_name = u.display_name AND a.school_id = u.school_id
        WHERE u.role IN ('pupil','student')
        GROUP BY u.id ORDER BY attempts DESC, total_score DESC LIMIT ?`).all(limit);
      return res.json({ metric, rows });
    }
    res.status(400).json({ error: 'unknown_metric' });
  });

  // GET /api/admin/system — runtime info (uptime, memory, db size, node version)
  r.get('/api/admin/system', requireAdmin, async (_req, res) => {
    const mem = process.memoryUsage();
    let dbSize = null;
    try {
      const { statSync } = await import('node:fs');
      const dbPath = process.env.DATA_DIR ? `${process.env.DATA_DIR}/tizia.db` : null;
      if (dbPath) dbSize = statSync(dbPath).size;
    } catch {}
    res.json({
      uptime_seconds: Math.floor(process.uptime()),
      memory: { rss: mem.rss, heap_used: mem.heapUsed, heap_total: mem.heapTotal },
      node_version: process.version,
      platform: process.platform,
      db_size_bytes: dbSize,
      now_ms: Date.now(),
    });
  });

  // GET /api/admin/activity?limit=50 — feed gom new users, attempts, requests, analytics events
  r.get('/api/admin/activity', requireAdmin, (req, res) => {
    const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
    const items = [];
    db.prepare(`SELECT id, username, display_name, role, school_id, created_at AS t
                FROM users ORDER BY created_at DESC LIMIT ?`).all(limit).forEach(u => {
      items.push({ kind: 'user_register', t: u.t, user_id: u.id, school_id: u.school_id,
                   label: `@${u.username} (${u.display_name}) · ${u.role}` });
    });
    db.prepare(`SELECT id, player_name, version, score, total, correct, school_id, created_at AS t
                FROM attempts ORDER BY created_at DESC LIMIT ?`).all(limit).forEach(a => {
      items.push({ kind: 'attempt', t: a.t, school_id: a.school_id,
                   label: `${a.player_name} · ${a.version} · ${a.score}đ (${a.correct}/${a.total})` });
    });
    db.prepare(`SELECT id, student, title, status, domain, school_id, created_at AS t
                FROM requests ORDER BY created_at DESC LIMIT ?`).all(limit).forEach(r => {
      items.push({ kind: 'request', t: r.t, school_id: r.school_id,
                   label: `${r.student} · ${r.domain} · ${r.title}`.slice(0, 120), meta: { status: r.status } });
    });
    if (tableExists('analytics_events')) {
      db.prepare(`SELECT id, name, user_id, school_id, path, ts AS t
                  FROM analytics_events ORDER BY ts DESC LIMIT ?`).all(limit).forEach(e => {
        items.push({ kind: 'event', t: e.t, user_id: e.user_id, school_id: e.school_id,
                     label: `${e.name}${e.path ? ' · ' + e.path : ''}` });
      });
    }
    items.sort((a, b) => (b.t || 0) - (a.t || 0));
    res.json({ items: items.slice(0, limit) });
  });

  // GET /api/admin/overview2 — extend overview với delta 24h (không break /overview cũ)
  r.get('/api/admin/overview2', requireAdmin, (_req, res) => {
    const base = Q.overview.get();
    const now = Date.now();
    const t24 = now - 86400_000;
    const t48 = now - 2 * 86400_000;
    const count = (sql, ...args) => { try { return db.prepare(sql).get(...args)?.c || 0; } catch { return 0; } };
    const delta = {
      users_24h: count(`SELECT COUNT(*) c FROM users WHERE created_at >= ?`, t24),
      users_prev_24h: count(`SELECT COUNT(*) c FROM users WHERE created_at >= ? AND created_at < ?`, t48, t24),
      attempts_24h: count(`SELECT COUNT(*) c FROM attempts WHERE created_at >= ?`, t24),
      attempts_prev_24h: count(`SELECT COUNT(*) c FROM attempts WHERE created_at >= ? AND created_at < ?`, t48, t24),
      requests_24h: count(`SELECT COUNT(*) c FROM requests WHERE created_at >= ?`, t24),
      requests_prev_24h: count(`SELECT COUNT(*) c FROM requests WHERE created_at >= ? AND created_at < ?`, t48, t24),
    };
    const extra = {};
    if (tableExists('ai_decisions')) extra.ai_decisions = count(`SELECT COUNT(*) c FROM ai_decisions`);
    if (tableExists('analytics_events')) extra.events = count(`SELECT COUNT(*) c FROM analytics_events`);
    if (tableExists('subscriptions')) extra.paid_schools = count(`SELECT COUNT(*) c FROM subscriptions WHERE plan<>'free' AND status='active'`);
    if (tableExists('ai_lesson_content')) extra.ai_content = count(`SELECT COUNT(*) c FROM ai_lesson_content`);
    if (tableExists('ai_token_usage')) {
      extra.ai_tokens_total = count(`SELECT SUM(prompt_tokens + completion_tokens) c FROM ai_token_usage`);
      extra.ai_tokens_24h = count(`SELECT SUM(prompt_tokens + completion_tokens) c FROM ai_token_usage WHERE created_at >= ?`, t24);
    }
    extra.active_sessions = count(`SELECT COUNT(*) c FROM sessions WHERE expires_at > ?`, now);
    res.json({ ...base, ...extra, delta });
  });

  // ─────────────────────────────────────────────────────────────
  // CRUD: Users (thêm Create / Edit / Reset password / Delete)
  // ─────────────────────────────────────────────────────────────

  // POST /api/admin/users — tạo user mới (admin có thể chọn mọi role kể cả admin)
  r.post('/api/admin/users', requireAdmin, (req, res) => {
    const b = req.body ?? {};
    const username = String(b.username || '').trim();
    const password = String(b.password || '');
    const display_name = String(b.display_name || b.displayName || username).trim().slice(0, 60);
    const role = ['pupil', 'student', 'teacher', 'admin'].includes(b.role) ? b.role : 'student';
    const age = b.age != null && Number.isFinite(Number(b.age)) ? Math.floor(Number(b.age)) : null;
    const school_id = Number(b.school_id) || DEFAULT_SCHOOL_ID;
    const email = b.email ? String(b.email).trim().toLowerCase() : null;

    if (!USERNAME_RE.test(username)) return res.status(400).json({ error: 'invalid_username', message: 'username 3–32 ký tự a-z0-9_.- (case-insensitive)' });
    if (password.length < 6) return res.status(400).json({ error: 'weak_password', message: 'password tối thiểu 6 ký tự' });
    if (!display_name) return res.status(400).json({ error: 'missing_display_name' });
    if (getUserByUsername(username)) return res.status(409).json({ error: 'username_exists' });
    if (age != null && (age < 3 || age > 100)) return res.status(400).json({ error: 'invalid_age', message: 'tuổi 3–100' });

    try {
      // createUser() chỉ cho role pupil/student/teacher → tạo trước rồi promote nếu cần admin.
      const safeRole = ['pupil','student','teacher'].includes(role) ? role : 'student';
      const { id } = createUser({
        username, display_name, password_hash: hashPassword(password),
        role: safeRole, age, school_id,
      });
      if (role === 'admin') db.prepare(`UPDATE users SET role='admin' WHERE id=?`).run(id);
      if (email) db.prepare(`UPDATE users SET email=? WHERE id=?`).run(email, id);
      res.json({ ok: true, id, username, display_name, role, school_id });
    } catch (e) { res.status(500).json({ error: 'create_failed', detail: String(e.message) }); }
  });

  // PATCH /api/admin/users/:id — sửa thông tin partial (display_name/email/age/school_id)
  // Dùng dynamic SQL thay vì updateUserEditable() vì cái kia yêu cầu nguyên trường profile.
  r.patch('/api/admin/users/:id', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const u = getUserById(id);
    if (!u) return res.status(404).json({ error: 'user_not_found' });
    const sets = [], vals = {};
    if (req.body?.display_name != null) {
      const v = String(req.body.display_name).trim().slice(0, 60);
      if (!v) return res.status(400).json({ error: 'empty_display_name' });
      sets.push('display_name = @display_name'); vals.display_name = v;
    }
    if (req.body?.email != null) {
      sets.push('email = @email');
      vals.email = req.body.email ? String(req.body.email).trim().toLowerCase().slice(0, 120) : null;
    }
    if (req.body?.age != null) {
      const a = Number(req.body.age);
      if (req.body.age === '' || a === 0) { sets.push('age = NULL'); }
      else if (!Number.isFinite(a) || a < 3 || a > 100) return res.status(400).json({ error: 'invalid_age', message: 'tuổi 3–100' });
      else { sets.push('age = @age'); vals.age = Math.floor(a); }
    }
    if (req.body?.school_id != null) {
      const sid = Number(req.body.school_id);
      if (!Number.isFinite(sid) || sid < 1) return res.status(400).json({ error: 'invalid_school_id' });
      const exists = db.prepare(`SELECT 1 FROM schools WHERE id = ?`).get(sid);
      if (!exists) return res.status(400).json({ error: 'school_not_exist' });
      sets.push('school_id = @school_id'); vals.school_id = sid;
    }
    if (!sets.length) return res.status(400).json({ error: 'no_changes' });
    vals.id = id;
    try {
      db.prepare(`UPDATE users SET ${sets.join(', ')} WHERE id = @id`).run(vals);
      res.json({ ok: true, user: getUserById(id) });
    } catch (e) { res.status(500).json({ error: 'update_failed', detail: String(e.message) }); }
  });

  // POST /api/admin/users/:id/password — reset mật khẩu (admin override)
  r.post('/api/admin/users/:id/password', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const password = String(req.body?.password || '');
    if (password.length < 6) return res.status(400).json({ error: 'weak_password', message: 'password tối thiểu 6 ký tự' });
    const u = getUserById(id);
    if (!u) return res.status(404).json({ error: 'user_not_found' });
    db.prepare(`UPDATE users SET password_hash = ? WHERE id = ?`).run(hashPassword(password), id);
    // Invalidate mọi session hiện tại của user → buộc login lại
    db.prepare(`DELETE FROM sessions WHERE user_id = ?`).run(id);
    res.json({ ok: true, message: 'password đã đổi, đã invalidate mọi session' });
  });

  // DELETE /api/admin/users/:id — xoá user (cascade sessions + oauth_identities)
  // Bảo vệ: không cho admin tự xoá; không cho xoá admin cuối cùng.
  r.delete('/api/admin/users/:id', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const u = getUserById(id);
    if (!u) return res.status(404).json({ error: 'user_not_found' });
    if (id === req.user.id) return res.status(400).json({ error: 'cannot_delete_self', message: 'không thể xoá chính mình' });
    if (u.role === 'admin') {
      const adminCount = db.prepare(`SELECT COUNT(*) c FROM users WHERE role='admin'`).get().c;
      if (adminCount <= 1) return res.status(400).json({ error: 'last_admin', message: 'không thể xoá admin cuối cùng' });
    }
    const tx = db.transaction((uid, displayName) => {
      db.prepare(`DELETE FROM sessions WHERE user_id = ?`).run(uid);
      if (tableExists('oauth_identities')) db.prepare(`DELETE FROM oauth_identities WHERE user_id = ?`).run(uid);
      // notifications dùng user_display_name (chuỗi), không user_id — xoá theo display_name
      if (tableExists('notifications') && displayName) {
        db.prepare(`DELETE FROM notifications WHERE user_display_name = ?`).run(displayName);
      }
      // subscriptions là school-level (UNIQUE school_id), KHÔNG xoá theo user.
      // attempts/achievements link bằng player_name=display_name, để lại làm thống kê lịch sử.
      db.prepare(`DELETE FROM users WHERE id = ?`).run(uid);
    });
    try { tx(id, u.display_name); res.json({ ok: true, deleted: u.username }); }
    catch (e) { res.status(500).json({ error: 'delete_failed', detail: String(e.message) }); }
  });

  // ─────────────────────────────────────────────────────────────
  // CRUD: Schools (thêm Edit / Delete; Create đã có ở trên)
  // ─────────────────────────────────────────────────────────────

  // PATCH /api/admin/schools/:id — đổi name/domain/code
  r.patch('/api/admin/schools/:id', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const cur = db.prepare(`SELECT * FROM schools WHERE id = ?`).get(id);
    if (!cur) return res.status(404).json({ error: 'school_not_found' });
    const sets = [], vals = {};
    if (req.body?.name != null) { sets.push('name = @name'); vals.name = String(req.body.name).trim().slice(0, 120); }
    if (req.body?.domain != null) { sets.push('domain = @domain'); vals.domain = req.body.domain ? String(req.body.domain).toLowerCase().slice(0, 80) : null; }
    if (req.body?.code != null) { sets.push('code = @code'); vals.code = String(req.body.code).trim().slice(0, 40); }
    if (!sets.length) return res.status(400).json({ error: 'no_changes' });
    vals.id = id;
    try {
      db.prepare(`UPDATE schools SET ${sets.join(', ')} WHERE id = @id`).run(vals);
      res.json({ ok: true, school: db.prepare(`SELECT * FROM schools WHERE id = ?`).get(id) });
    } catch (e) { res.status(400).json({ error: 'update_failed', detail: String(e.message) }); }
  });

  // DELETE /api/admin/schools/:id — xoá trường (cấm xoá tizia-default; cấm khi còn user)
  r.delete('/api/admin/schools/:id', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    if (id === DEFAULT_SCHOOL_ID) return res.status(400).json({ error: 'protected_default', message: 'không thể xoá trường mặc định Tizia (id=1)' });
    const cur = db.prepare(`SELECT * FROM schools WHERE id = ?`).get(id);
    if (!cur) return res.status(404).json({ error: 'school_not_found' });
    const uCount = db.prepare(`SELECT COUNT(*) c FROM users WHERE school_id = ?`).get(id).c;
    if (uCount > 0) return res.status(400).json({ error: 'has_users', message: `trường còn ${uCount} user — chuyển họ qua trường khác trước khi xoá` });
    try {
      db.prepare(`DELETE FROM schools WHERE id = ?`).run(id);
      res.json({ ok: true, deleted: cur.code });
    } catch (e) { res.status(500).json({ error: 'delete_failed', detail: String(e.message) }); }
  });

  // ─────────────────────────────────────────────────────────────
  // CRUD: Requests + Content — chỉ thêm DELETE (status/reply đã có)
  // ─────────────────────────────────────────────────────────────

  r.delete('/api/admin/requests/:id', requireAdmin, (req, res) => {
    const id = Number(req.params.id);
    const cur = db.prepare(`SELECT id FROM requests WHERE id = ?`).get(id);
    if (!cur) return res.status(404).json({ error: 'request_not_found' });
    const tx = db.transaction((rid) => {
      if (tableExists('ai_decisions')) db.prepare(`DELETE FROM ai_decisions WHERE request_id = ?`).run(rid);
      db.prepare(`DELETE FROM requests WHERE id = ?`).run(rid);
    });
    try { tx(id); res.json({ ok: true, deleted: id }); }
    catch (e) { res.status(500).json({ error: 'delete_failed', detail: String(e.message) }); }
  });

  r.delete('/api/admin/content/:id', requireAdmin, (req, res) => {
    if (!tableExists('ai_lesson_content')) return res.status(404).json({ error: 'no_content_table' });
    const id = Number(req.params.id);
    const info = db.prepare(`DELETE FROM ai_lesson_content WHERE id = ?`).run(id);
    if (info.changes === 0) return res.status(404).json({ error: 'content_not_found' });
    res.json({ ok: true, deleted: id });
  });

  // Trục 2: log prompt AI của HS — GV xem trong trường mình, admin xem cross-tenant.
  // GET /api/teacher/ai-prompts → role=teacher/admin trong cùng school_id thấy được;
  // ?blocked=1 lọc các prompt đã bị filter chặn (để GV chú ý ngay).
  // GET /api/admin/ai-prompts → admin xem tất cả school; nhận thêm ?school_id=.
  r.get('/api/teacher/ai-prompts', (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'unauthorized' });
    if (!['teacher', 'admin'].includes(req.user.role)) {
      return res.status(403).json({ error: 'forbidden', message: 'Chỉ giảng viên hoặc admin xem được' });
    }
    const schoolId = req.user.role === 'admin' && req.query.school_id
      ? Number(req.query.school_id) : (req.user.school_id || 1);
    const blockedOnly = req.query.blocked === '1' || req.query.blocked === 'true';
    const limit = Number(req.query.limit) || 50;
    res.json({ logs: listAiPromptsForSchool(schoolId, { blockedOnly, limit }) });
  });

  r.get('/api/admin/ai-prompts', requireAdmin, (req, res) => {
    const schoolId = req.query.school_id ? Number(req.query.school_id) : null;
    const blockedOnly = req.query.blocked === '1';
    const limit = Number(req.query.limit) || 100;
    if (schoolId) {
      return res.json({ logs: listAiPromptsForSchool(schoolId, { blockedOnly, limit }) });
    }
    // Cross-school: query trực tiếp, không filter school_id
    const rows = db.prepare(`
      SELECT l.id, l.school_id, l.user_id, l.role, l.endpoint, l.prompt_text,
             l.blocked, l.block_reason, l.block_category, l.created_at,
             u.username, u.display_name, u.grade
      FROM ai_prompt_log l LEFT JOIN users u ON u.id = l.user_id
      WHERE (? = 0 OR l.blocked = 1)
      ORDER BY l.created_at DESC LIMIT ?
    `).all(blockedOnly ? 1 : 0, Math.min(Math.max(limit, 1), 500));
    res.json({ logs: rows });
  });

  // GET /api/me/ai-prompts — chính user xem log của mình (HS xem lại câu mình hỏi
  // hôm qua, hoặc cùng PH coi). Không có phân quyền chéo.
  r.get('/api/me/ai-prompts', (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'unauthorized' });
    const limit = Number(req.query.limit) || 50;
    res.json({ logs: listAiPromptsForUser(req.user.id, limit) });
  });

  console.log('[admin] routes mounted: /api/admin/* (cross-tenant, role=admin) + dashboard + CRUD + ai-prompt logs');
}
