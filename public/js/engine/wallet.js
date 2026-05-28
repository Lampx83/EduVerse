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
import {
  levelInfo, xpForResult, streakMilestoneReward,
  generateDailyQuests, evalQuest,
} from './gamification.js';

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
    xp: w.xp ?? 0,
    streak: w.streak ?? 0,
    longestStreak: w.longestStreak ?? (w.streak ?? 0),
    streakShields: w.streakShields ?? 0,
    lastVisitDay: w.lastVisitDay ?? '',
    achievements: Array.isArray(w.achievements) ? w.achievements : [],
    vrSessions: w.vrSessions ?? 0,
    metaSessions: w.metaSessions ?? 0,
    quizzesPassed: w.quizzesPassed ?? 0,
    modulesByDay: w.modulesByDay ?? {},   // { 'YYYY-MM-DD': Set<moduleId> } serialized as array
    daily: _normalizeDaily(w.daily, _today()),
    questsClaimed: w.questsClaimed && w.questsClaimed.date === _today()
      ? w.questsClaimed
      : { date: _today(), ids: [] },
  };
}

/** Per-day activity counters that drive daily quests. Resets each calendar day. */
function _normalizeDaily(d, today) {
  if (!d || d.date !== today) {
    return { date: today, checkin: 0, modulesPassed: 0, minutes: 0, bestCorrect: 0, threeStars: 0, quizzesPassed: 0 };
  }
  return {
    date: today,
    checkin: d.checkin ?? 0,
    modulesPassed: d.modulesPassed ?? 0,
    minutes: d.minutes ?? 0,
    bestCorrect: d.bestCorrect ?? 0,
    threeStars: d.threeStars ?? 0,
    quizzesPassed: d.quizzesPassed ?? 0,
  };
}

function _save(w) {
  try { localStorage.setItem(WALLET_KEY, JSON.stringify(w)); } catch {}
}

/** Public save (used by gamification UI flows). */
export function saveWallet(w) { _save(w); }

/** Today as YYYY-MM-DD (local). */
export function todayStr() { return _today(); }

/** Level/rank snapshot from current XP. */
export function getLevelInfo() { return levelInfo(getWallet().xp); }

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

/**
 * Gọi 1 lần khi user mở trang — cập nhật streak (có streak-shield),
 * điểm danh cho daily quest, và thưởng mốc streak.
 * @returns {{wallet, streakIncreased:boolean, shieldUsed:boolean, milestone:object|null}}
 */
export function onLogin() {
  const w = getWallet();
  const today = _today();
  const before = w.streak;
  let shieldUsed = false;
  let milestone = null;

  if (w.lastVisitDay === today) {
    // already counted today, no-op
  } else {
    const gap = _daysBetween(w.lastVisitDay, today);
    if (gap === 1) {
      w.streak = (w.streak || 0) + 1;
    } else if (gap === 2 && w.streakShields > 0) {
      // Missed exactly one day but a shield saves the streak (counts today).
      w.streakShields -= 1;
      w.streak = (w.streak || 0) + 1;
      shieldUsed = true;
    } else {
      w.streak = 1;
    }
    w.lastVisitDay = today;

    // Milestone reward (only when streak grew into a new milestone day).
    if (w.streak > before) {
      const r = streakMilestoneReward(w.streak);
      if (r) {
        w.coins += r.coin;
        w.xp += r.xp;
        w.streakShields += r.shield;
        milestone = r;
      }
    }
  }

  // Daily check-in (drives the "Điểm danh" quest); resets via getWallet each day.
  w.daily.checkin = 1;
  if ((w.streak || 0) > (w.longestStreak || 0)) w.longestStreak = w.streak;
  _save(w);
  return { wallet: w, streakIncreased: w.streak > before, shieldUsed, milestone };
}

/** True nếu user CHƯA học gì hôm nay (streak đang "có nguy cơ" cho ngày mai). */
export function streakAtRisk() {
  const w = getWallet();
  return (w.daily.modulesPassed || 0) === 0;
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
  const today = _today();
  const stars = Math.max(0, Math.min(3, result?.stars ?? 0));
  const prevStars = progress?.[mod?.id]?.stars || 0;
  const firstClear = prevStars < 1 && stars >= 1;

  // Snapshot daily quest state BEFORE this action (to detect newly-completed).
  const dailyBefore = { ...w.daily };

  // Coin: base (stars × 10) + streak bonus × 2, + first-clear bonus.
  const coinsGained = stars * (mod?.rewardCoin ? Math.max(1, Math.floor(mod.rewardCoin / 10)) : 10)
    + (w.streak * 2) + (firstClear ? 25 : 0);
  w.coins += coinsGained;

  // XP
  const levelBefore = levelInfo(w.xp).level;
  const xpGained = xpForResult(result, firstClear);
  w.xp += xpGained;
  const levelAfterInfo = levelInfo(w.xp);
  const levelAfter = levelAfterInfo.level;

  const isQuiz = result?.scenarioId?.includes('quiz') || result?.kind === 'quiz';
  if (isQuiz && stars >= 1) w.quizzesPassed += 1;

  // Daily activity counters
  if (stars >= 1) {
    const dayList = new Set(w.modulesByDay[today] || []);
    dayList.add(mod.id);
    w.modulesByDay[today] = [...dayList];
    w.daily.modulesPassed = dayList.size;          // distinct modules passed today
  }
  if (stars === 3) w.daily.threeStars = (w.daily.threeStars || 0) + 1;
  const correct = result?.details?.correct;
  if (typeof correct === 'number') w.daily.bestCorrect = Math.max(w.daily.bestCorrect || 0, correct);
  if (isQuiz && stars >= 1) w.daily.quizzesPassed = (w.daily.quizzesPassed || 0) + 1;
  const mins = Math.max(1, Math.round((result?.durationMs || 0) / 60000));
  w.daily.minutes = (w.daily.minutes || 0) + mins;

  // Detect quests completed by THIS action
  const questsCompleted = _newlyCompletedQuests(dailyBefore, w.daily, today);
  // Auto-grant quest rewards
  let questCoin = 0, questXp = 0;
  const claimedIds = new Set(w.questsClaimed.ids);
  for (const q of questsCompleted) {
    if (claimedIds.has(q.id)) continue;
    claimedIds.add(q.id);
    questCoin += q.reward.coin; questXp += q.reward.xp;
  }
  if (questCoin || questXp) {
    w.coins += questCoin; w.xp += questXp;
    w.questsClaimed = { date: today, ids: [...claimedIds] };
  }
  const levelFinal = levelInfo(w.xp).level;

  _save(w);

  // Evaluate achievements against progress INCLUDING this result's stars,
  // so a "đạt 3★ ở module X" badge can unlock on the same completion.
  const progressForCheck = {
    ...(progress || {}),
    [mod.id]: { stars: Math.max(prevStars, stars), timestamp: Date.now() },
  };

  return {
    wallet: w,
    coinsGained: coinsGained + questCoin,
    xpGained: xpGained + questXp,
    levelBefore,
    levelAfter: levelFinal,
    levelUp: levelFinal > levelBefore,
    firstClear,
    questsCompleted,
    unlocked: checkAchievements(progressForCheck, w, catalog),
  };
}

/** Compare daily counters before/after and return quests newly satisfied. */
function _newlyCompletedQuests(before, after, today) {
  const quests = generateDailyQuests(today);
  const out = [];
  for (const q of quests) {
    const wasDone = evalQuest(q, before).done;
    const nowDone = evalQuest(q, after).done;
    if (!wasDone && nowDone) out.push(q);
  }
  return out;
}

/** Current daily quests with live progress (for UI panels). */
export function getDailyQuests() {
  const w = getWallet();
  const claimed = new Set(w.questsClaimed.ids);
  return generateDailyQuests(w.daily.date).map(q => {
    const { progress, done } = evalQuest(q, w.daily);
    return { ...q, progress, done, claimed: claimed.has(q.id) };
  });
}

/** Add study minutes (heartbeat from learning pages). */
export function recordStudyMinutes(mins) {
  const w = getWallet();
  w.daily.minutes = (w.daily.minutes || 0) + Math.max(0, mins);
  _save(w);
  return w;
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
