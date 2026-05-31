// ============================================================
// Campus layout context — override 2.5D map config từ DB
// ============================================================
// b-iso-canvas.html hardcode CAMPUSES[domain] làm default. Super-admin có thể
// đè qua /admin/campus-editor → POST /api/admin/campus-layout/:domain để lưu.
// View page (mọi user, kể cả guest) đọc qua GET /api/campus-layout/:domain.
//
// Lưu vào bảng campus_layouts (domain PK, layout JSON text, updated_at ms).
// Bảng được CREATE IF NOT EXISTS lúc module load — không cần migration riêng.
// ============================================================

import { db } from '../../db.js';

// Tạo bảng nếu chưa có — idempotent, chạy mỗi khi server start.
db.exec(`
  CREATE TABLE IF NOT EXISTS campus_layouts (
    domain      TEXT    PRIMARY KEY,
    layout      TEXT    NOT NULL,
    updated_at  INTEGER NOT NULL
  )
`);

const stmtGet    = db.prepare(`SELECT layout FROM campus_layouts WHERE domain = ?`);
const stmtUpsert = db.prepare(`
  INSERT INTO campus_layouts (domain, layout, updated_at)
  VALUES (?, ?, ?)
  ON CONFLICT(domain) DO UPDATE SET layout = excluded.layout, updated_at = excluded.updated_at
`);
const stmtDelete = db.prepare(`DELETE FROM campus_layouts WHERE domain = ?`);

// Whitelist domain để tránh injection qua :domain
const ALLOWED_DOMAINS = new Set(['preschool', 'primary', 'secondary', 'it', 'pharmacy']);

// Whitelist key cấp 1 — body chỉ giữ đúng các field này.
// Bám theo schema CAMPUSES trong public/campus-proto/b-iso-canvas.html.
const ALLOWED_KEYS = new Set([
  'title', 'credit', 'grass', 'vroads', 'hroads', 'autoPaths',
  'buildings', 'facilities', 'fields', 'playthings', 'critters',
  'trees', 'cars', 'props', 'walkways', 'tints', 'sportTargets',
]);

function sanitize(input) {
  if (!input || typeof input !== 'object') return null;
  const out = {};
  for (const k of Object.keys(input)) {
    if (ALLOWED_KEYS.has(k)) out[k] = input[k];
  }
  return Object.keys(out).length ? out : null;
}

function readLayout(domain) {
  const row = stmtGet.get(domain);
  if (!row) return null;
  try { return JSON.parse(row.layout); } catch { return null; }
}

export function attachCampusLayout(r, requireAdmin) {
  // GET public — view page fetch để override default
  r.get('/api/campus-layout/:domain', (req, res) => {
    const domain = String(req.params.domain || '').toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) return res.status(404).json({ error: 'unknown_domain' });
    try {
      const layout = readLayout(domain);
      res.json({ domain, layout });
    } catch (e) {
      res.status(500).json({ error: 'read_failed', message: e.message });
    }
  });

  // POST super-admin — lưu đè
  r.post('/api/admin/campus-layout/:domain', requireAdmin, (req, res) => {
    const domain = String(req.params.domain || '').toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) return res.status(400).json({ error: 'unknown_domain' });
    const clean = sanitize(req.body?.layout);
    if (!clean) return res.status(400).json({ error: 'invalid_body', message: 'Cần {layout:{...}}' });
    try {
      stmtUpsert.run(domain, JSON.stringify(clean), Date.now());
      res.json({ ok: true, domain });
    } catch (e) {
      res.status(500).json({ error: 'write_failed', message: e.message });
    }
  });

  // DELETE super-admin — xoá override (về default hardcoded)
  r.delete('/api/admin/campus-layout/:domain', requireAdmin, (req, res) => {
    const domain = String(req.params.domain || '').toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) return res.status(400).json({ error: 'unknown_domain' });
    try {
      const info = stmtDelete.run(domain);
      res.json({ ok: true, domain, deleted: info.changes > 0 });
    } catch (e) {
      res.status(500).json({ error: 'delete_failed', message: e.message });
    }
  });

  // GET list (admin only) — xem tất cả override đang có
  r.get('/api/admin/campus-layouts', requireAdmin, (_req, res) => {
    const rows = db.prepare(`SELECT domain, updated_at FROM campus_layouts ORDER BY domain`).all();
    res.json({ layouts: rows });
  });

  console.log('[campus-layout] routes mounted (DB backend): GET /api/campus-layout/:domain · POST/DELETE /api/admin/campus-layout/:domain');
}
