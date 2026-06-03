// ============================================================
// spaced-quiz.js — SM-2-lite picker cho khu "Củng cố kiến thức"
// ============================================================
// Mục tiêu: thay vì hiển thị quiz cố định, mỗi lần vào trang chọn ra
// một set câu hỏi CÁ NHÂN HOÁ: ưu tiên câu sai gần đây, câu đến hạn ôn,
// rồi mới đến câu mới — trộn ngẫu nhiên nhẹ để không nhàm.
//
// Lưu state: ưu tiên server (GET /api/srs/state + POST /api/srs/review).
// Nếu 401 (guest) hoặc fetch lỗi → fallback localStorage 'tizia:srs:v1'.
// Khi login lại, state server thắng (server.last_seen mới hơn local).
// ============================================================

const LS_KEY = 'tizia:srs:v1';

function lsLoad() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
  catch { return {}; }
}
function lsSave(d) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(d)); }
  catch {}
}

/**
 * SM-2-lite step. correct=true/false là 2 outcome duy nhất.
 * Trả về state mới (không tính due_at — caller cộng now).
 */
function sm2Step(prev, correct) {
  let ease         = Number(prev?.ease)          || 2.5;
  let interval_d   = Number(prev?.interval_d)    || 0;
  let reps         = Number(prev?.reps)          || 0;
  let lapses       = Number(prev?.lapses)        || 0;
  let total_reviews = Number(prev?.total_reviews) || 0;
  total_reviews += 1;
  if (!correct) {
    reps = 0;
    lapses += 1;
    interval_d = 0;
    ease = Math.max(1.3, ease - 0.2);
  } else {
    reps += 1;
    if (reps === 1) interval_d = 1;
    else if (reps === 2) interval_d = 3;
    else interval_d = Math.max(1, Math.round(interval_d * ease));
    ease = Math.min(2.8, ease + 0.06);
  }
  return { ease, interval_d, reps, lapses, total_reviews };
}

/**
 * Load SRS state cho 1 prefix (vd 'space:mam:').
 *
 * Merge server + local — KHÔNG chỉ chọn 1 nguồn. Lý do: ngay sau submit, các
 * POST /api/srs/review chạy bất đồng bộ; nếu user bấm "Đổi bộ câu" liền thì
 * server chưa có data nhưng local đã có (vì local sync trước fetch). Nếu
 * chọn server-only ở đây thì các câu vừa làm vẫn bị coi là "new" → lặp lại.
 *
 * Quy tắc merge: per card_key, bên nào có last_seen lớn hơn THẮNG.
 *
 * @returns {Promise<{ source:'server'|'local'|'merged', map: Record<string, object> }>}
 */
export async function loadSrsState(prefix) {
  const localAll = lsLoad();
  const localMap = {};
  for (const k of Object.keys(localAll)) {
    if (k.startsWith(prefix)) localMap[k] = localAll[k];
  }
  let serverMap = null;
  try {
    const r = await fetch(`api/srs/state?prefix=${encodeURIComponent(prefix)}`, {
      credentials: 'include',
      headers: { Accept: 'application/json' },
    });
    if (r.ok) {
      const { items = [] } = await r.json();
      serverMap = {};
      for (const it of items) serverMap[it.card_key] = it;
    }
  } catch {}
  if (!serverMap) return { source: 'local', map: localMap };
  // Merge: per key, last_seen lớn hơn thắng.
  const out = { ...localMap };
  for (const k of Object.keys(serverMap)) {
    const s = serverMap[k];
    const l = localMap[k];
    if (!l || (Number(s.last_seen) || 0) >= (Number(l.last_seen) || 0)) out[k] = s;
  }
  return { source: Object.keys(localMap).length ? 'merged' : 'server', map: out };
}

/**
 * Ghi 1 review. Mirror cả local + server (server fire-and-forget).
 * Trả state mới (đã tính due_at).
 */
export async function recordReview(cardKey, correct) {
  const all = lsLoad();
  const prev = all[cardKey] || null;
  const next = sm2Step(prev, !!correct);
  const now = Date.now();
  const merged = {
    ...next,
    due_at: now + Math.round(next.interval_d * 86400000),
    last_correct: correct ? 1 : 0,
    last_seen: now,
  };
  all[cardKey] = merged;
  lsSave(all);

  // Gửi lên server — nếu OK ghi đè local bằng state server (chuẩn hoá).
  try {
    const r = await fetch('api/srs/review', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card_key: cardKey, correct: !!correct }),
    });
    if (r.ok) {
      const srv = await r.json();
      all[cardKey] = { ...merged, ...srv };
      lsSave(all);
      return all[cardKey];
    }
  } catch {}
  return merged;
}

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/**
 * Chọn N câu cá nhân hoá từ pool.
 * Mỗi card trong pool phải có { id, ... }.
 *
 * Ưu tiên (cao → thấp):
 *   1. lapse  — sai lần gần nhất + đến hạn (badge 🔁 "Ôn lại")
 *   2. due    — đã làm đúng, đến hạn ôn lại (badge 🎯 "Đến hạn")
 *   3. new    — chưa từng làm (badge 🆕 "Câu mới")
 *   4. future — chưa tới hạn (fill cuối nếu thiếu) (badge "Bonus")
 *
 * Trả mảng {...card, _badge} đã sort theo ưu tiên, độ dài ≤ n.
 */
export function pickPersonalizedQuiz(pool, n, state) {
  const now = Date.now();
  const map = (state && state.map) || {};
  const lapse = [], due = [], fresh = [], future = [];
  for (const card of pool) {
    const st = map[card.id];
    if (!st) { fresh.push(card); continue; }
    const dueAt = Number(st.due_at) || 0;
    if (Number(st.last_correct) === 0 && dueAt <= now) lapse.push({ card, st });
    else if (dueAt <= now)                              due.push({ card, st });
    else                                                future.push({ card, st });
  }
  // Slot quotas mong muốn: 2 lapse, 2 due, n-4 new. Nếu thiếu thì tự fill.
  const wantLapse = Math.min(lapse.length, 2);
  const wantDue   = Math.min(due.length,   2);
  let remaining   = Math.max(0, n - wantLapse - wantDue);

  const pickLapse = shuffle(lapse).slice(0, wantLapse)
    .map(o => ({ ...o.card, _badge: 'lapse' }));
  const pickDue = shuffle(due).slice(0, wantDue)
    .map(o => ({ ...o.card, _badge: 'due' }));
  const pickNew = shuffle(fresh).slice(0, remaining)
    .map(c => ({ ...c, _badge: 'new' }));
  remaining -= pickNew.length;

  // Nếu vẫn thiếu (pool quá nhỏ hoặc đã làm hết) → lấy thêm từ future / due dư.
  const fillers = shuffle([
    ...due.slice(wantDue).map(o => ({ ...o.card, _badge: 'due' })),
    ...lapse.slice(wantLapse).map(o => ({ ...o.card, _badge: 'lapse' })),
    ...shuffle(future).map(o => ({ ...o.card, _badge: 'review-early' })),
  ]).slice(0, Math.max(0, remaining));

  return [...pickLapse, ...pickDue, ...pickNew, ...fillers].slice(0, n);
}

/** Nhãn tiếng Việt cho badge _badge. */
export function badgeLabel(b) {
  switch (b) {
    case 'lapse':         return { ic: '🔁', text: 'Ôn lại',   color: '#fb7185' };
    case 'due':           return { ic: '🎯', text: 'Đến hạn',  color: '#22c55e' };
    case 'new':           return { ic: '🆕', text: 'Câu mới',  color: '#38bdf8' };
    case 'review-early':  return { ic: '✨', text: 'Bonus',    color: '#a78bfa' };
    default:              return { ic: '•',  text: '',         color: '#94a3b8' };
  }
}
