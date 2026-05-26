import express from 'express';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { db, insertAttempt, getLeaderboard, getStats, getRecent, getAllAttempts, getHistogram, getConfusion, getAchievements, unlockAchievement, createClass, getClassByCode, listClasses, getClassMembers, getClassAttempts, getPlayerAttempts } from './db.js';
import { attachRoom } from './room.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
const MEDIAPIPE_DIR = path.resolve(ROOT_DIR, 'node_modules', '@mediapipe', 'tasks-vision');
const PORT = Number(process.env.PORT) || 8041;
const HOST = process.env.HOST || '0.0.0.0';

const VALID_VERSIONS = new Set(['2d-arcade', '3d-shelf', 'quiz', 'metaverse', 'time-attack', 'race']);

// Badge definitions used by both backend (auto-unlock) and frontend (display)
const BADGES = [
  { id: 'first-play',     icon: '🎮', label: 'Lần đầu chơi',         desc: 'Hoàn thành lượt đầu tiên' },
  { id: 'perfect-1',      icon: '🎯', label: 'Perfect đầu tay',      desc: 'Đạt 100% lần đầu' },
  { id: 'perfect-5',      icon: '⭐', label: '5 lần Perfect',         desc: 'Đạt 100% năm lần' },
  { id: 'speed-demon',    icon: '⚡', label: 'Tốc độ ánh sáng',       desc: 'Hoàn thành < 20 giây' },
  { id: 'all-modes',      icon: '🏆', label: 'Bậc thầy đa mode',     desc: 'Chơi đủ cả 4 mode chính' },
  { id: 'hard-perfect',   icon: '👑', label: 'Vua khó nhằn',         desc: 'Perfect ở chế độ Khó (8 loại)' },
  { id: 'metaverse-host', icon: '🌐', label: 'Cư dân Metaverse',     desc: 'Tham gia phòng metaverse' },
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
    // Check 5-perfect
    const allPerfect = db.prepare(`
      SELECT COUNT(*) AS c FROM attempts
      WHERE player_name = ? AND correct = total AND total > 0
    `).get(playerName);
    if ((allPerfect?.c ?? 0) >= 5) tryUnlock('perfect-5');
    if (attempt.total >= 8) tryUnlock('hard-perfect');
  }
  if (attempt.durationMs && attempt.durationMs < 20000) tryUnlock('speed-demon');
  // all-modes
  const distinct = db.prepare(`
    SELECT COUNT(DISTINCT version) AS c FROM attempts WHERE player_name = ?
  `).get(playerName);
  if ((distinct?.c ?? 0) >= 4) tryUnlock('all-modes');
  if (attempt.version === 'metaverse') tryUnlock('metaverse-host');
  return newly;
}

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'pharmacysim', port: PORT, time: Date.now() });
});

app.post('/api/attempts', (req, res) => {
  const b = req.body ?? {};
  const version = String(b.version || '');
  if (!VALID_VERSIONS.has(version)) {
    return res.status(400).json({ error: `version must be one of ${[...VALID_VERSIONS].join(', ')}` });
  }
  const score   = Number.isFinite(b.score)   ? Math.floor(b.score)   : null;
  const correct = Number.isFinite(b.correct) ? Math.floor(b.correct) : null;
  const total   = Number.isFinite(b.total)   ? Math.floor(b.total)   : null;
  if (score === null || correct === null || total === null) {
    return res.status(400).json({ error: 'score, correct, total are required numbers' });
  }
  const playerName = (typeof b.playerName === 'string' && b.playerName.trim())
    ? b.playerName.trim().slice(0, 40)
    : 'Ẩn danh';
  const durationMs = Number.isFinite(b.durationMs) ? Math.floor(b.durationMs) : null;
  const details = b.details != null ? JSON.stringify(b.details).slice(0, 4000) : null;
  const classCode = (typeof b.classCode === 'string' && b.classCode.trim())
    ? b.classCode.trim().slice(0, 16) : null;
  const levelN = Number.isFinite(b.level) ? Math.floor(b.level) : null;

  const result = insertAttempt({
    version,
    player_name: playerName,
    score, correct, total,
    duration_ms: durationMs,
    details,
    created_at: Date.now(),
    class_code: classCode,
    level_n: levelN,
  });
  // Auto-unlock badges based on the attempt
  const newBadges = checkAndUnlockBadges(playerName, { version, score, correct, total, durationMs });
  res.json({ ...result, newBadges });
});

app.get('/api/leaderboard', (req, res) => {
  const version = String(req.query.version || '');
  if (!VALID_VERSIONS.has(version)) {
    return res.status(400).json({ error: 'invalid version' });
  }
  const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 100);
  res.json(getLeaderboard(version, limit));
});

app.get('/api/stats', (req, res) => {
  const version = String(req.query.version || '');
  if (!VALID_VERSIONS.has(version)) {
    return res.status(400).json({ error: 'invalid version' });
  }
  res.json(getStats(version));
});

app.get('/api/recent', (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
  res.json(getRecent(limit));
});

app.get('/api/histogram', (req, res) => {
  const version = String(req.query.version || '');
  if (!VALID_VERSIONS.has(version)) return res.status(400).json({ error: 'invalid version' });
  res.json(getHistogram(version));
});

app.get('/api/confusion', (req, res) => {
  const version = String(req.query.version || '');
  if (!VALID_VERSIONS.has(version)) return res.status(400).json({ error: 'invalid version' });
  res.json(getConfusion(version));
});

app.get('/api/badges', (_req, res) => {
  res.json(BADGES);
});

// ============================================================
// CLASS MANAGEMENT
// ============================================================
function genCode(len = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // no easily confused chars
  let s = '';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

app.post('/api/classes', (req, res) => {
  const name = String(req.body?.name || '').trim().slice(0, 60);
  const teacherName = String(req.body?.teacherName || 'GV').trim().slice(0, 40);
  if (!name) return res.status(400).json({ error: 'name required' });
  // Try a few codes in case of collision
  let code = null;
  for (let i = 0; i < 8; i++) {
    const c = genCode(6);
    if (!getClassByCode(c)) { code = c; break; }
  }
  if (!code) return res.status(500).json({ error: 'could not generate code' });
  const result = createClass({ code, name, teacher_name: teacherName });
  res.json({ id: result.id, code, name, teacherName });
});

app.get('/api/classes', (_req, res) => {
  res.json(listClasses());
});

app.get('/api/classes/:code', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).json({ error: 'class not found' });
  res.json(cls);
});

app.get('/api/classes/:code/members', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).json({ error: 'class not found' });
  res.json(getClassMembers(req.params.code));
});

app.get('/api/classes/:code/attempts', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).json({ error: 'class not found' });
  const limit = Math.min(Math.max(Number(req.query.limit) || 100, 1), 500);
  res.json(getClassAttempts(req.params.code, limit));
});

app.get('/api/classes/:code/export.csv', (req, res) => {
  const cls = getClassByCode(req.params.code);
  if (!cls) return res.status(404).send('class not found');
  const rows = getClassAttempts(req.params.code, 5000);
  const esc = v => v == null ? '' : (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g,'""')}"` : String(v));
  const lines = ['id,version,level,player_name,score,correct,total,duration_ms,created_at_iso'];
  for (const r of rows) {
    lines.push([r.id, r.version, r.level_n ?? '', esc(r.player_name), r.score, r.correct, r.total, r.duration_ms ?? '', new Date(r.created_at).toISOString()].join(','));
  }
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="class-${cls.code}-${new Date().toISOString().slice(0,10)}.csv"`);
  res.send('﻿' + lines.join('\n'));
});

// Per-player drill-down for dashboard
app.get('/api/players/:name/attempts', (req, res) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
  res.json(getPlayerAttempts(req.params.name, limit));
});

app.get('/api/achievements', (req, res) => {
  const player = String(req.query.player || '').trim();
  if (!player) return res.status(400).json({ error: 'player required' });
  const rows = getAchievements(player);
  res.json(rows.map(r => ({ ...r, badge: BADGES.find(b => b.id === r.badge_id) })));
});

app.get('/api/export.csv', (_req, res) => {
  const rows = getAllAttempts();
  const esc = v => {
    if (v == null) return '';
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = ['id,version,player_name,score,correct,total,duration_ms,created_at_iso,details'];
  for (const r of rows) {
    lines.push([
      r.id, r.version, esc(r.player_name), r.score, r.correct, r.total,
      r.duration_ms ?? '', new Date(r.created_at).toISOString(), esc(r.details),
    ].join(','));
  }
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="pharmacysim-attempts-${new Date().toISOString().slice(0,10)}.csv"`);
  res.send('﻿' + lines.join('\n'));   // BOM for Excel UTF-8
});

// Vendored MediaPipe — served locally so app không phụ thuộc jsdelivr/unpkg
app.use('/vendor/mediapipe', express.static(MEDIAPIPE_DIR, {
  maxAge: '7d',
  setHeaders: (res, p) => {
    if (p.endsWith('.wasm')) res.setHeader('Content-Type', 'application/wasm');
    if (p.endsWith('.mjs'))  res.setHeader('Content-Type', 'application/javascript');
  },
}));

// Static frontend (public/) — served last so /api/* wins on conflicts
app.use(express.static(PUBLIC_DIR, { extensions: ['html'] }));

app.use((_req, res) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

const httpServer = http.createServer(app);
attachRoom(httpServer);
httpServer.listen(PORT, HOST, () => {
  console.log(`[pharmacysim] listening on http://${HOST}:${PORT}`);
});
