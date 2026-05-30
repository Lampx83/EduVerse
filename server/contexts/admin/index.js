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

import { db } from '../../db.js';

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
  users: db.prepare(`SELECT id, username, display_name, role, school_id, email, created_at, last_login
    FROM users WHERE (@school_id IS NULL OR school_id=@school_id) ORDER BY created_at DESC LIMIT @limit`),
  setUserRole: db.prepare(`UPDATE users SET role=@role WHERE id=@id`),
  requests: db.prepare(`SELECT id, school_id, domain, type, title, status, votes, student, created_at
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

  console.log('[admin] routes mounted: /api/admin/* (cross-tenant, role=admin)');
}
