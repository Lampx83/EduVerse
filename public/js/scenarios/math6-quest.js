// ============================================================
// math6-quest.js — LOGIC ONLY (data trong DB).
// ============================================================
// Chủ đề Toán lớp 6 lưu ở content_datasets collection 'math6-topics'
// (seed từ _data/math6-quest.js). Trang math-fun.html gọi loadMath6Topics().
// ============================================================

let _cache = null;

export async function loadMath6Topics() {
  if (_cache) return _cache;
  let topics = [];
  try {
    const r = await fetch('/api/content/math6-topics', { credentials: 'same-origin' });
    if (r.ok) topics = (await r.json()).items || [];
  } catch { /* offline */ }
  const index = topics.map(t => ({
    id: t.id, title: t.title, boss: t.boss, color: t.color,
    icon: t.icon, difficulty: t.difficulty, intro: t.intro,
    xpReward: t.xpReward, questionCount: (t.questions || []).length, mode: t.mode || 'quiz',
  }));
  const byId = Object.fromEntries(topics.map(t => [t.id, t]));
  _cache = { topics, index, getById: (id) => byId[id] || null };
  return _cache;
}
