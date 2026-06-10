// ============================================================
// history-characters-vn.js — LOGIC ONLY (data trong DB).
// ============================================================
// Data nhân vật lịch sử lưu ở content_datasets collection 'history-characters'
// (seed từ _data/history-characters.js). Trang history-vn.html gọi
// loadHistoryCharacters() — fetch DB, build index + getById như cũ.
//
// Nguồn seed gốc: ./_data/history-characters.js (chỉ seed-content.mjs import).
// ============================================================

let _cache = null;

export async function loadHistoryCharacters() {
  if (_cache) return _cache;
  let characters = [];
  try {
    const r = await fetch('/api/content/history-characters', { credentials: 'same-origin' });
    if (r.ok) characters = (await r.json()).items || [];
  } catch { /* offline → rỗng, trang tự hiện trạng thái trống */ }
  const index = characters.map(c => ({
    id: c.id, name: c.name, era: c.era, role: c.role,
    avatar: c.avatar, color: c.color, portrait: c.portrait,
    grade: c.grade, subject: c.subject,
    suggestedOpener: c.suggestedOpener,
  }));
  const byId = Object.fromEntries(characters.map(c => [c.id, c]));
  _cache = { characters, index, getById: (id) => byId[id] || null };
  return _cache;
}
