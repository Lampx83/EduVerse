// ============================================================
// negotiation-vn.js — LOGIC ONLY (data trong DB).
// ============================================================
// Kịch bản đàm phán lưu ở content_datasets collection 'negotiation'
// (seed từ _data/negotiation.js). Trang negotiation.html gọi loadNegotiation().
// ============================================================

let _cache = null;

export async function loadNegotiation() {
  if (_cache) return _cache;
  let scenarios = [];
  try {
    const r = await fetch('/api/content/negotiation', { credentials: 'same-origin' });
    if (r.ok) scenarios = (await r.json()).items || [];
  } catch { /* offline */ }
  const index = scenarios.map(n => ({
    id: n.id, title: n.title, audience: n.audience, domain: n.domain,
    icon: n.icon, color: n.color, youAre: n.youAre, npcRole: n.npcRole,
  }));
  const byId = Object.fromEntries(scenarios.map(n => [n.id, n]));
  _cache = { scenarios, index, getById: (id) => byId[id] || null };
  return _cache;
}
