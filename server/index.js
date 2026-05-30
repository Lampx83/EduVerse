import express from 'express';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { db, insertAttempt, getLeaderboard, getStats, getRecent, getAllAttempts, getHistogram, getConfusion, getAchievements, unlockAchievement, createClass, getClassByCode, listClasses, getClassMembers, getClassAttempts, getPlayerAttempts, createRequest, listRequests, voteRequest, setRequestStatus, getRequestStats } from './db.js';
import { attachRoom } from './room.js';
import { attachAi, aiReviewRequest } from './ai.js';
import { attachAppProxies } from './app-proxy.js';
import { attachAssets } from './assets.js';
import { attachAdaptive } from './adaptive.js';
import { attachLessons } from './lessons.js';
import { attachUser, makeAuthGate, requireAuth, attachAuth } from './contexts/identity/auth.js';
import { attachOAuth, listEnabledProviders } from './contexts/identity/oauth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
const MEDIAPIPE_DIR = path.resolve(ROOT_DIR, 'node_modules', '@mediapipe', 'tasks-vision');
const PORT = Number(process.env.PORT) || 8041;
const HOST = process.env.HOST || '0.0.0.0';
// Optional path prefix when deployed behind a reverse proxy at a sub-path
// e.g. https://limio.vn/ps/* → set BASE_PATH=/ps so all routes work under /ps.
const BASE_PATH = (process.env.BASE_PATH || '').replace(/\/$/, '');

const VALID_VERSIONS = new Set([
  '2d-arcade', '3d-shelf', 'quiz', 'metaverse', 'time-attack', 'race',
  'sac-ky-2d', 'sac-ky-3d', 'sac-ky-vr-web', 'sac-ky-quiz', 'sac-ky-meta',
  'compounding-lab',
]);

// Module L1–L5 scenario IDs từ engine (format "L<year>.<idx>-<slug>") đều hợp lệ.
// Cho phép qua bằng regex để khỏi phải liệt kê 38 module.
const SCENARIO_ID_PATTERN = /^L[1-5]\.\d+(-[a-z0-9-]+)?$/;
function isValidVersion(v) {
  return VALID_VERSIONS.has(v) || SCENARIO_ID_PATTERN.test(v);
}

// Badge definitions used by both backend (auto-unlock) and frontend (display)
const BADGES = [
  { id: 'first-play',     icon: '🎮', label: 'Lần đầu chơi',         desc: 'Hoàn thành lượt đầu tiên' },
  { id: 'perfect-1',      icon: '🎯', label: 'Perfect đầu tay',      desc: 'Đạt 100% lần đầu' },
  { id: 'perfect-5',      icon: '⭐', label: '5 lần Perfect',         desc: 'Đạt 100% năm lần' },
  { id: 'speed-demon',    icon: '⚡', label: 'Tốc độ ánh sáng',       desc: 'Hoàn thành < 20 giây' },
  { id: 'all-modes',      icon: '🏆', label: 'Bậc thầy đa mode',     desc: 'Chơi đủ cả 4 mode chính' },
  { id: 'hard-perfect',   icon: '👑', label: 'Vua khó nhằn',         desc: 'Perfect ở chế độ Khó (8 loại)' },
  { id: 'metaverse-host', icon: '🌐', label: 'Cư dân Metaverse',     desc: 'Tham gia phòng metaverse' },
  // Sắc ký TLC badges
  { id: 'tlc-first',      icon: '🧪', label: 'Nhà phân tích TLC',    desc: 'Hoàn thành lượt sắc ký đầu tiên' },
  { id: 'tlc-perfect-rf', icon: '🎯', label: 'Rf hoàn hảo',          desc: 'Đo cả 3 Rf chính xác trong ±0.05' },
  { id: 'tlc-speed',      icon: '⚡', label: 'Tốc độ sắc ký',         desc: 'Hoàn thành TLC dưới 60 giây' },
  { id: 'tlc-all-modes',  icon: '🏅', label: 'Đa nền tảng TLC',      desc: 'Chơi đủ 5 phiên bản web Sắc ký' },
  { id: 'tlc-meta-host',  icon: '🌐', label: 'Học viên Meta-Sắc-ký', desc: 'Tham gia phòng Metaverse Sắc ký' },
];

function checkAndUnlockBadges(playerName, attempt) {
  const newly = [];
  const tryUnlock = (badgeId) => {
    if (unlockAchievement(playerName, badgeId)) {
      newly.push(BADGES.find(b => b.id === badgeId));
    }
  };
  tryUnlock('first-play');
  if (attempt.correct === attempt.total && attempt.total > 0) {
    tryUnlock('perfect-1');
    const allPerfect = db.prepare(`
      SELECT COUNT(*) AS c FROM attempts
      WHERE player_name = ? AND correct = total AND total > 0
    `).get(playerName);
    if ((allPerfect?.c ?? 0) >= 5) tryUnlock('perfect-5');
    if (attempt.total >= 8) tryUnlock('hard-perfect');
  }
  if (attempt.durationMs && attempt.durationMs < 20000) tryUnlock('speed-demon');
  const distinct = db.prepare(`
    SELECT COUNT(DISTINCT version) AS c FROM attempts WHERE player_name = ?
  `).get(playerName);
  if ((distinct?.c ?? 0) >= 4) tryUnlock('all-modes');
  if (attempt.version === 'metaverse') tryUnlock('metaverse-host');

  // === Sắc ký TLC badges ===
  const SACKY_VERSIONS = ['sac-ky-2d', 'sac-ky-3d', 'sac-ky-vr-web', 'sac-ky-quiz', 'sac-ky-meta'];
  if (SACKY_VERSIONS.includes(attempt.version)) {
    tryUnlock('tlc-first');
    if (attempt.version === 'sac-ky-meta') tryUnlock('tlc-meta-host');
    // Perfect Rf: parse details — at least 3 measurements within ±0.05
    try {
      const lastRow = db.prepare(`SELECT details FROM attempts WHERE id = last_insert_rowid()`).get();
      if (lastRow?.details) {
        const d = JSON.parse(lastRow.details);
        if (Array.isArray(d.samples)) {
          const allClose = d.samples.length >= 3 && d.samples.every(s =>
            s.measuredRf != null && Math.abs(s.measuredRf - s.trueRf) <= 0.05
          );
          if (allClose) tryUnlock('tlc-perfect-rf');
        }
      }
    } catch {}
    if (attempt.durationMs && attempt.durationMs < 60000) tryUnlock('tlc-speed');
    // All 5 sắc ký versions
    const sackyDistinct = db.prepare(`
      SELECT COUNT(DISTINCT version) AS c FROM attempts
      WHERE player_name = ? AND version IN ('sac-ky-2d', 'sac-ky-3d', 'sac-ky-vr-web', 'sac-ky-quiz', 'sac-ky-meta')
    `).get(playerName);
    if ((sackyDistinct?.c ?? 0) >= 5) tryUnlock('tlc-all-modes');
  }
  return newly;
}

const app = express();
app.disable('x-powered-by');

// Đăng nhập là điều kiện tiên quyết để dùng EduVerse.
// attachUser luôn gắn req.user (nullable). makeAuthGate redirect HTML chưa login về /login.html
// và trả 401 cho /api/* (trừ /api/auth/*, /api/health). Phải nằm TRƯỚC attachAppProxies để
// các app anh em (/scoreup, /codelab, …) cũng được gate trên cùng origin.
app.use((req, _res, next) => { attachUser(req, _res, next); });
app.use(makeAuthGate({ basePath: BASE_PATH }));

// Integrated sibling apps — each reverse-proxied under its own sub-path so the
// whole suite is reachable on EduVerse's single origin (iframe + cookie/auth
// friendly). Targets are configurable per deployment via *_TARGET env vars;
// *_PUBLIC_PATH only when the upstream was built with a basePath != its mount.
// Apps that aren't running degrade to a graceful "chưa chạy" page. Surfaced to
// users via public/apps.html. MUST stay before express.json (stream POST bodies).
attachAppProxies(app, [
  {
    id: 'scoreup', label: 'ScoreUp', mount: `${BASE_PATH}/scoreup`,
    target: process.env.SCOREUP_TARGET || 'http://127.0.0.1:3000',
    publicPath: process.env.SCOREUP_PUBLIC_PATH || undefined,
    startHint: 'cd ScoreUp && ./scripts/dev.sh up',
  },
  {
    id: 'codelab', label: 'Codelab (NEU OJ)', mount: `${BASE_PATH}/codelab`,
    target: process.env.CODELAB_TARGET || 'http://127.0.0.1:8024',
    publicPath: process.env.CODELAB_PUBLIC_PATH || undefined,
    startHint: 'cd Codelab && docker compose up -d',
  },
  {
    id: 'smartdoc', label: 'Smartdoc', mount: `${BASE_PATH}/smartdoc`,
    target: process.env.SMARTDOC_TARGET || 'http://127.0.0.1:8017',
    publicPath: process.env.SMARTDOC_PUBLIC_PATH || undefined,
    startHint: 'cd Smartdoc && docker compose up -d',
  },
  {
    id: 'feedback', label: 'FeedBackMe', mount: `${BASE_PATH}/feedback`,
    target: process.env.FEEDBACK_TARGET || 'http://127.0.0.1:3300',
    publicPath: process.env.FEEDBACK_PUBLIC_PATH || undefined,
    startHint: 'cd FeedBackMe && pnpm db:up && pnpm dev',
  },
].map((c) => ({ ...c, publicPath: c.publicPath || c.mount, backHref: `${BASE_PATH || ''}/apps.html` })));

app.use(express.json({ limit: '64kb' }));

// All routes attached to this Router. The Router is then mounted at
// BASE_PATH (defaults to '/') so the same code serves either at root
// or under a sub-path like /ps.
const r = express.Router();

r.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'eduverse', port: PORT, basePath: BASE_PATH, time: Date.now() });
});

// Đăng ký / đăng nhập / logout / me
attachAuth(r);
// SSO/OAuth providers (Google/Microsoft/GitHub). Chỉ bật những provider có env CLIENT_ID/SECRET.
attachOAuth(r, { basePath: BASE_PATH });

r.post('/api/attempts', requireAuth, (req, res) => {
  const b = req.body ?? {};
  const version = String(b.version || '');
  if (!isValidVersion(version)) {
    return res.status(400).json({ error: `version must be one of ${[...VALID_VERSIONS].join(', ')}` });
  }
  const score   = Number.isFinite(b.score)   ? Math.floor(b.score)   : null;
  const correct = Number.isFinite(b.correct) ? Math.floor(b.correct) : null;
  const total   = Number.isFinite(b.total)   ? Math.floor(b.total)   : null;
  if (score === null || correct === null || total === null) {
    return res.status(400).json({ error: 'score, correct, total are required numbers' });
  }
  // playerName lấy từ session — client không thể giả mạo. Không login → 401 ở requireAuth.
  const playerName = String(req.user.display_name || req.user.username || 'Ẩn danh').slice(0, 60);
  const durationMs = Number.isFinite(b.durationMs) ? Math.floor(b.durationMs) : null;
  const details = b.details != null ? JSON.stringify(b.details).slice(0, 4000) : null;
  const classCode = (typeof b.classCode === 'string' && b.classCode.trim())
    ? b.classCode.trim().slice(0, 16) : null;
  const levelN = Number.isFinite(b.level) ? Math.floor(b.level) : null;
  const result = insertAttempt({
    version, player_name: playerName, score, correct, total,
    duration_ms: durationMs, details, created_at: Date.now(),
    class_code: classCode, level_n: levelN,
  });
  const newBadges = checkAndUnlockBadges(playerName, { version, score, correct, total, durationMs });
  res.json({ ...result, newBadges });
});

r.get('/api/leaderboard', (req, res) => {
  const version = String(req.query.version || '');
  if (!isValidVersion(version)) return res.status(400).json({ error: 'invalid version' });
  const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 100);
  res.json(getLeaderboard(version, limit));
});

r.get('/api/stats', (req, res) => {
  const version = String(req.query.version || '');
  if (!isValidVersion(version)) return res.status(400).json({ error: 'invalid version' });
  res.json(getStats(version));
});

r.get('/api/recent', (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
  res.json(getRecent(limit));
});

r.get('/api/histogram', (req, res) => {
  const version = String(req.query.version || '');
  if (!isValidVersion(version)) return res.status(400).json({ error: 'invalid version' });
  res.json(getHistogram(version));
});

r.get('/api/confusion', (req, res) => {
  const version = String(req.query.version || '');
  if (!isValidVersion(version)) return res.status(400).json({ error: 'invalid version' });
  res.json(getConfusion(version));
});

r.get('/api/badges', (_req, res) => res.json(BADGES));

// ============================================================
// AI TUTOR — Claude API endpoints (grade-soap, patient-turn, evaluate-roleplay, tutor-chat)
// ============================================================
attachAi(r);

// ============================================================
// ASSET LIBRARY (GAP 4) — quét tự động 3D model, trả JSON catalogue
// ============================================================
attachAssets(r, PUBLIC_DIR);

// ============================================================
// ADAPTIVE QUIZ (GAP 11) — BKT-lite + Limio passthrough
// ============================================================
attachAdaptive(r);

// ============================================================
// LESSON BUILDER + MARKETPLACE (GAP 3 + 5)
// ============================================================
attachLessons(r);

// ============================================================
// CLASS MANAGEMENT
// ============================================================
function genCode(len = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

r.post('/api/classes', (req, res) => {
  const name = String(req.body?.name || '').trim().slice(0, 60);
  const teacherName = String(req.body?.teacherName || 'GV').trim().slice(0, 40);
  if (!name) return res.status(400).json({ error: 'name required' });
  let code = null;
  for (let i = 0; i < 8; i++) {
    const c = genCode(6);
    if (!getClassByCode(c)) { code = c; break; }
  }
  if (!code) return res.status(500).json({ error: 'could not generate code' });
  const result = createClass({ code, name, teacher_name: teacherName });
  res.json({ id: result.id, code, name, teacherName });
});

r.get('/api/classes', (_req, res) => res.json(listClasses()));

r.get('/api/classes/:code', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).json({ error: 'class not found' });
  res.json(cls);
});

r.get('/api/classes/:code/members', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).json({ error: 'class not found' });
  res.json(getClassMembers(req.params.code));
});

r.get('/api/classes/:code/attempts', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).json({ error: 'class not found' });
  const limit = Math.min(Math.max(Number(req.query.limit) || 100, 1), 500);
  res.json(getClassAttempts(req.params.code, limit));
});

r.get('/api/classes/:code/export.csv', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).send('class not found');
  const rows = getClassAttempts(req.params.code, 5000);
  const esc = v => v == null ? '' : (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g,'""')}"` : String(v));
  const lines = ['id,version,level,player_name,score,correct,total,duration_ms,created_at_iso'];
  for (const row of rows) {
    lines.push([row.id, row.version, row.level_n ?? '', esc(row.player_name), row.score, row.correct, row.total, row.duration_ms ?? '', new Date(row.created_at).toISOString()].join(','));
  }
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="class-${cls.code}-${new Date().toISOString().slice(0,10)}.csv"`);
  res.send('﻿' + lines.join('\n'));
});

r.get('/api/players/:name/attempts', (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
  res.json(getPlayerAttempts(req.params.name, limit));
});

r.get('/api/achievements', (req, res) => {
  // Mặc định trả huy hiệu của user đang đăng nhập; cho phép override ?player=
  // (giáo viên xem học sinh — sau có thể gate theo role).
  const player = String(req.query.player || req.user?.display_name || '').trim();
  if (!player) return res.status(400).json({ error: 'player required' });
  const rows = getAchievements(player);
  res.json(rows.map(row => ({ ...row, badge: BADGES.find(b => b.id === row.badge_id) })));
});

// ── Requests — "Ban điều hành AI" inbox ──
r.post('/api/requests', (req, res) => {
  const b = req.body ?? {};
  const domain = String(b.domain || '').trim();
  const title = String(b.title || '').trim();
  if (!domain) return res.status(400).json({ error: 'domain required' });
  if (title.length < 4) return res.status(400).json({ error: 'title quá ngắn (≥4 ký tự)' });
  const row = createRequest({
    domain, type: b.type, title, detail: b.detail, student: b.student,
  });
  res.json({ ok: true, ...row });

  // Ban điều hành AI xem xét ngay (nền, không chặn response). Cập nhật
  // admin_note + status khi xong; client tự reload để thấy phản hồi.
  aiReviewRequest({ domain, type: b.type, title, detail: b.detail })
    .then(r => setRequestStatus(row.id, r.status, r.note))
    .catch(err => console.warn('[requests] AI review failed:', err?.message || err));
});

r.get('/api/requests', (req, res) => {
  const domain = String(req.query.domain || '').trim();
  if (!domain) return res.status(400).json({ error: 'domain required' });
  const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
  res.json({ items: listRequests(domain, limit), stats: getRequestStats(domain) });
});

r.post('/api/requests/:id/vote', (req, res) => {
  const ok = voteRequest(req.params.id);
  res.json({ ok });
});

// Admin (AI board) — đổi trạng thái khi đã xử lý. Để mở; sau có thể gate teacher.
r.post('/api/requests/:id/status', (req, res) => {
  const b = req.body ?? {};
  const ok = setRequestStatus(req.params.id, String(b.status || ''), b.note);
  res.json({ ok });
});

r.get('/api/export.csv', (_req, res) => {
  const rows = getAllAttempts();
  const esc = v => {
    if (v == null) return '';
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = ['id,version,player_name,score,correct,total,duration_ms,created_at_iso,details'];
  for (const row of rows) {
    lines.push([
      row.id, row.version, esc(row.player_name), row.score, row.correct, row.total,
      row.duration_ms ?? '', new Date(row.created_at).toISOString(), esc(row.details),
    ].join(','));
  }
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="eduverse-attempts-${new Date().toISOString().slice(0,10)}.csv"`);
  res.send('﻿' + lines.join('\n'));
});

// Vendored MediaPipe (mounted as relative path inside the Router)
r.use('/vendor/mediapipe', express.static(MEDIAPIPE_DIR, {
  maxAge: '7d',
  setHeaders: (res, p) => {
    if (p.endsWith('.wasm')) res.setHeader('Content-Type', 'application/wasm');
    if (p.endsWith('.mjs'))  res.setHeader('Content-Type', 'application/javascript');
  },
}));

// Static frontend (served last so /api/* wins on conflicts)
r.use(express.static(PUBLIC_DIR, { extensions: ['html'] }));

// 404 fallback → serve landing (so deep links to non-existent paths still render)
r.use((_req, res) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// Mount the Router. With BASE_PATH='/ps', all routes serve under /ps.
// With BASE_PATH='', all routes serve at root (default behavior).
if (BASE_PATH) {
  app.use(BASE_PATH, r);
  // Optional: 301 redirect root to BASE_PATH/ so bare domain still works
  app.get('/', (_req, res) => res.redirect(BASE_PATH + '/'));
} else {
  app.use(r);
}

const httpServer = http.createServer(app);
attachRoom(httpServer, BASE_PATH);
httpServer.listen(PORT, HOST, () => {
  console.log(`[eduverse] listening on http://${HOST}:${PORT}${BASE_PATH ? ' (BASE_PATH=' + BASE_PATH + ')' : ''}`);
  const oauthList = listEnabledProviders();
  if (oauthList.length) {
    console.log(`[oauth] enabled providers: ${oauthList.map(p => p.label).join(', ')}`);
  } else {
    console.log('[oauth] no providers configured (set GOOGLE_/MICROSOFT_/GITHUB_CLIENT_ID+SECRET to enable)');
  }
});
