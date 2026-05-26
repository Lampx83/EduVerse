import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { insertAttempt, getLeaderboard, getStats, getRecent } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const PORT = Number(process.env.PORT) || 8041;
const HOST = process.env.HOST || '0.0.0.0';

const VALID_VERSIONS = new Set(['2d-arcade', '3d-shelf']);

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

  const result = insertAttempt({
    version,
    player_name: playerName,
    score, correct, total,
    duration_ms: durationMs,
    details,
    created_at: Date.now(),
  });
  res.json(result);
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

// Static frontend (public/) — served last so /api/* wins on conflicts
app.use(express.static(PUBLIC_DIR, { extensions: ['html'] }));

app.use((_req, res) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`[pharmacysim] listening on http://${HOST}:${PORT}`);
});
