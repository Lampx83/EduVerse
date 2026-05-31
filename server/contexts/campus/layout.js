// ============================================================
// Campus layout context — override 2.5D map config từ DB/file
// ============================================================
// b-iso-canvas.html hardcode CAMPUSES[domain] làm default. Super-admin có thể
// đè qua /admin/campus-editor → POST /api/admin/campus-layout/:domain để lưu.
// View page (mọi user, kể cả guest) đọc qua GET /api/campus-layout/:domain.
//
// Lưu file (không bảng SQL): server/data/campus-layouts/<domain>.json
// — đủ nhẹ cho 5 domain × 1 file, dễ backup, dễ git ignore.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.resolve(__dirname, '..', '..', '..', 'data');
const LAYOUT_DIR = path.join(DATA_DIR, 'campus-layouts');

// Whitelist domain để tránh path traversal qua :domain
const ALLOWED_DOMAINS = new Set(['preschool', 'primary', 'secondary', 'it', 'pharmacy']);

// Whitelist key cấp 1 — body chỉ giữ đúng các field này, drop hết phần khác.
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
  return out;
}

async function ensureDir() { await fs.mkdir(LAYOUT_DIR, { recursive: true }); }
function pathFor(domain) { return path.join(LAYOUT_DIR, `${domain}.json`); }

async function readLayout(domain) {
  try {
    const buf = await fs.readFile(pathFor(domain), 'utf8');
    return JSON.parse(buf);
  } catch (e) {
    if (e.code === 'ENOENT') return null;
    throw e;
  }
}

export function attachCampusLayout(r, requireAdmin) {
  // GET public — view page fetch để override default
  r.get('/api/campus-layout/:domain', async (req, res) => {
    const domain = String(req.params.domain || '').toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) return res.status(404).json({ error: 'unknown_domain' });
    try {
      const layout = await readLayout(domain);
      res.json({ domain, layout });
    } catch (e) {
      res.status(500).json({ error: 'read_failed', message: e.message });
    }
  });

  // POST super-admin — lưu đè
  r.post('/api/admin/campus-layout/:domain', requireAdmin, async (req, res) => {
    const domain = String(req.params.domain || '').toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) return res.status(400).json({ error: 'unknown_domain' });
    const clean = sanitize(req.body?.layout);
    if (!clean) return res.status(400).json({ error: 'invalid_body', message: 'Cần {layout:{...}}' });
    try {
      await ensureDir();
      await fs.writeFile(pathFor(domain), JSON.stringify(clean, null, 2), 'utf8');
      res.json({ ok: true, domain });
    } catch (e) {
      res.status(500).json({ error: 'write_failed', message: e.message });
    }
  });

  // DELETE super-admin — xoá override (về default)
  r.delete('/api/admin/campus-layout/:domain', requireAdmin, async (req, res) => {
    const domain = String(req.params.domain || '').toLowerCase();
    if (!ALLOWED_DOMAINS.has(domain)) return res.status(400).json({ error: 'unknown_domain' });
    try {
      await fs.unlink(pathFor(domain));
      res.json({ ok: true, domain });
    } catch (e) {
      if (e.code === 'ENOENT') return res.json({ ok: true, domain, note: 'no_override' });
      res.status(500).json({ error: 'delete_failed', message: e.message });
    }
  });

  console.log('[campus-layout] routes mounted: GET /api/campus-layout/:domain · POST/DELETE /api/admin/campus-layout/:domain');
}
