// ============================================================
// math2-fun.js — LOGIC ONLY (data trong DB).
// ============================================================
// Chủ đề Toán lớp 2 lưu ở content_datasets collection 'math2-topics'
// (seed từ _data/math2-fun.js). Trang math-fun.html gọi loadMath2Topics().
// ============================================================

let _cache = null;

export async function loadMath2Topics() {
  if (_cache) return _cache;
  let topics = [];
  try {
    const r = await fetch('/api/content/math2-topics', { credentials: 'same-origin' });
    if (r.ok) topics = (await r.json()).items || [];
  } catch { /* offline */ }
  const index = topics.map(t => ({
    id: t.id, title: t.title, mascot: t.mascot, color: t.color,
    icon: t.icon, difficulty: t.difficulty, intro: t.intro,
    questionCount: (t.questions || []).length, mode: t.mode || 'quiz',
  }));
  const byId = Object.fromEntries(topics.map(t => [t.id, t]));
  _cache = { topics, index, getById: (id) => byId[id] || null };
  return _cache;
}
