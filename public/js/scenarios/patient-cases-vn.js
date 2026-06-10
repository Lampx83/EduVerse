// ============================================================
// patient-cases-vn.js — LOGIC ONLY (data trong DB).
// ============================================================
// Ca lâm sàng lưu ở content_datasets collection 'patient-cases'
// (seed từ _data/patient-cases.js). Trang patient-sim.html gọi loadPatientCases().
// ============================================================

let _cache = null;

export async function loadPatientCases() {
  if (_cache) return _cache;
  let cases = [];
  try {
    const r = await fetch('/api/content/patient-cases', { credentials: 'same-origin' });
    if (r.ok) cases = (await r.json()).items || [];
  } catch { /* offline */ }
  const index = cases.map(c => ({
    id: c.id, title: c.title, domain: c.domain, difficulty: c.difficulty,
    icon: c.icon, color: c.color, audience: c.audience, chiefComplaint: c.chiefComplaint,
  }));
  const byId = Object.fromEntries(cases.map(c => [c.id, c]));
  _cache = { cases, index, getById: (id) => byId[id] || null };
  return _cache;
}
