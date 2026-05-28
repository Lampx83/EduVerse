// ============================================================
// Wallet & gamification — coin / streak / achievements
// ============================================================
// Toàn bộ state lưu vào localStorage. Engine domain-agnostic;
// catalog achievement đặt ở domains/<id>/achievements.js.
//
// Usage:
//   const w = getWallet();
//   const ev = onLogin();         // cập nhật streak
//   const ev2 = awardForResult(progress, mod, result);
//   for (const a of [...ev.unlocked, ...ev2.unlocked]) showToast(a);
// ============================================================

import { KEYS, lsGet } from './storage.js';

const WALLET_KEY = KEYS.WALLET;
const PROGRESS_KEY = KEYS.PROGRESS;

/** @returns {import('./types.js').Wallet} */
export function getWallet() {
  try {
    const raw = lsGet(WALLET_KEY);
    if (raw) {
      const w = JSON.parse(raw);
      return _normalizeWallet(w);
    }
  } catch {}
  return _normalizeWallet({});
}

function _normalizeWallet(w) {
  return {
    coins: w.coins ?? 0,
    streak: w.streak ?? 0,
    lastVisitDay: w.lastVisitDay ?? '',
    achievements: Array.isArray(w.achievements) ? w.achievements : [],
    vrSessions: w.vrSessions ?? 0,
    metaSessions: w.metaSessions ?? 0,
    quizzesPassed: w.quizzesPassed ?? 0,
    modulesByDay: w.modulesByDay ?? {},   // { 'YYYY-MM-DD': Set<moduleId> } serialized as array
  };
}

function _save(w) {
  try { localStorage.setItem(WALLET_KEY, JSON.stringify(w)); } catch {}
}

function _today() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function _daysBetween(a, b) {
  if (!a || !b) return Infinity;
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  return Math.round((db - da) / 86400000);
}

// ─────────────────────────────────────────────────────────────
// Events
// ─────────────────────────────────────────────────────────────

/** Gọi 1 lần khi user mở trang chủ — cập nhật streak. */
export function onLogin() {
  const w = getWallet();
  const today = _today();
  const before = w.streak;
  if (w.lastVisitDay === today) {
    // already counted today, no-op
  } else if (_daysBetween(w.lastVisitDay, today) === 1) {
    w.streak = (w.streak || 0) + 1;
  } else {
    w.streak = 1;
  }
  w.lastVisitDay = today;
  _save(w);
  return { wallet: w, streakIncreased: w.streak > before };
}

/**
 * Sau khi scenario complete: cập nhật coin, quizzesPassed,
 * modulesByDay, kiểm achievement.
 * @param {Object} progress - module-stars progress map (key eduverse:progress)
 * @param {import('./types.js').CourseModule} mod
 * @param {{ stars:number, score:number }} result
 * @param {import('./types.js').Achievement[]} [catalog]
 */
export function awardForResult(progress, mod, result, catalog = []) {
  const w = getWallet();
  const stars = Math.max(0, Math.min(3, result?.stars ?? 0));
  // Coin: base (stars × 10) + streak bonus × 2
  const gained = stars * (mod?.rewardCoin ? Math.max(1, Math.floor(mod.rewardCoin / 10)) : 10) + (w.streak * 2);
  w.coins += gained;
  if (result?.scenarioId?.includes('quiz') || result?.kind === 'quiz') w.quizzesPassed += 1;

  // Track modulesByDay
  if (stars >= 1) {
    const today = _today();
    const dayList = new Set(w.modulesByDay[today] || []);
    dayList.add(mod.id);
    w.modulesByDay[today] = [...dayList];
  }
  _save(w);

  return {
    wallet: w,
    coinsGained: gained,
    unlocked: checkAchievements(progress, w, catalog),
  };
}

/** Track 1 lần vào VR mode. */
export function noteVRSession(catalog = []) {
  const w = getWallet();
  w.vrSessions += 1;
  _save(w);
  return { wallet: w, unlocked: checkAchievements(getProgress(), w, catalog) };
}

/** Track 1 lần vào Metaverse. */
export function noteMetaverseVisit(catalog = []) {
  const w = getWallet();
  w.metaSessions += 1;
  _save(w);
  return { wallet: w, unlocked: checkAchievements(getProgress(), w, catalog) };
}

// ─────────────────────────────────────────────────────────────
// Achievement engine
// ─────────────────────────────────────────────────────────────

/**
 * Check all achievements in catalog; mark new ones as unlocked.
 * @returns {import('./types.js').Achievement[]} newly unlocked
 */
export function checkAchievements(progress, wallet, catalog) {
  if (!Array.isArray(catalog) || catalog.length === 0) return [];
  const unlocked = new Set(wallet.achievements);
  const newly = [];
  const totalStars = Object.values(progress || {}).reduce((s, p) => s + (p?.stars || 0), 0);
  const today = _today();
  const todayModules = (wallet.modulesByDay?.[today] || []).length;

  for (const a of catalog) {
    if (unlocked.has(a.id)) continue;
    if (_satisfies(a.trigger, { wallet, progress, totalStars, todayModules })) {
      unlocked.add(a.id);
      newly.push(a);
    }
  }
  if (newly.length) {
    wallet.achievements = [...unlocked];
    _save(wallet);
  }
  return newly;
}

function _satisfies(trigger, ctx) {
  if (!trigger) return false;
  if (trigger.quizzesPassed != null && ctx.wallet.quizzesPassed < trigger.quizzesPassed) return false;
  if (trigger.modulesIn1Day != null && ctx.todayModules < trigger.modulesIn1Day) return false;
  if (trigger.streak != null && ctx.wallet.streak < trigger.streak) return false;
  if (trigger.totalStars != null && ctx.totalStars < trigger.totalStars) return false;
  if (trigger.vrSessions != null && ctx.wallet.vrSessions < trigger.vrSessions) return false;
  if (trigger.metaverseVisit != null && ctx.wallet.metaSessions < trigger.metaverseVisit) return false;
  if (trigger.moduleStars) {
    for (const [mid, need] of Object.entries(trigger.moduleStars)) {
      if ((ctx.progress?.[mid]?.stars ?? 0) < need) return false;
    }
  }
  if (trigger.yearComplete != null) {
    // Caller cần inject `_yearModuleCounts` via global; skip if missing
    const counts = ctx.yearCounts?.[trigger.yearComplete];
    if (!counts || counts.passed < counts.total) return false;
  }
  return true;
}

// ─────────────────────────────────────────────────────────────
// Progress helpers (legacy compat)
// ─────────────────────────────────────────────────────────────

export function getProgress() {
  try {
    const raw = lsGet(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch {}
}

/** Cập nhật stars cho 1 module (chỉ nếu cao hơn lần trước). */
export function recordModuleStars(moduleId, stars) {
  const p = getProgress();
  const cur = p[moduleId]?.stars || 0;
  if (stars > cur) {
    p[moduleId] = { stars, timestamp: Date.now() };
    setProgress(p);
  }
  return p;
}
