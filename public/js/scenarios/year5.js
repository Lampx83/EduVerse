// ============================================================
// year5.js — LOGIC ONLY (data trong DB).
// ============================================================
// Đề OSCE tốt nghiệp (L57_OSCE_EXAM) lưu ở content_datasets collection
// 'osce-exam' (1 doc, seed từ _data/year5.js). Trang GC07-osce-championship.html
// gọi loadOsceExam().
// ============================================================

let _cache = null;

export async function loadOsceExam() {
  if (_cache !== null) return _cache;
  try {
    const r = await fetch('/api/content/osce-exam', { credentials: 'same-origin' });
    if (r.ok) {
      const items = (await r.json()).items || [];
      _cache = items[0] || null;
    }
  } catch { _cache = null; }
  return _cache;
}
