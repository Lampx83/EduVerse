// ============================================================
// Dashboard — Single Source of Truth for personalized dashboard
// ============================================================
// Hợp nhất các dữ liệu cần cho dashboard:
//   - User identity (enrolled_domain, role, display_name)
//   - Wallet (xp, coins, streak từ user_wallets per-domain)
//   - Engagement (streak cross-domain, hearts, daily quests từ
//     engagement_state + engagement_daily_quests — SINGLE QUEST SYSTEM)
//   - Personal rank (Đồng → Cao thủ theo XP curve)
//   - League tier (Bronze → Diamond theo XP tuần — DIFFERENT scope)
//   - Recommended next (dựa skill graph + question_attempts thật)
//   - Achievements counter
//
// Trả về 1 payload duy nhất — frontend chỉ cần 1 fetch.
// ============================================================

import { db, getUserWallet } from '../../db.js';
import { requireAuth } from '../identity/auth.js';
import { getLeagueBoardForUser } from '../engagement/league.js';
import { getEngagementReadOnly } from '../engagement/index.js';
import { getUserSkillSummary } from '../../skills.js';

// XP curve (khớp public/js/engine/gamification.js)
function xpToNext(level) { return 60 + Math.max(1, level) * 40; }
function cumulativeXp(level) {
  const n = Math.max(1, level) - 1;
  return 60 * n + 40 * (n * (n + 1)) / 2;
}
function levelInfo(totalXp) {
  const xp = Math.max(0, totalXp || 0);
  let level = 1;
  while (xp >= cumulativeXp(level + 1)) level++;
  const base = cumulativeXp(level);
  const span = xpToNext(level);
  const intoLevel = xp - base;
  return {
    level, intoLevel, span,
    toNext: Math.max(0, span - intoLevel),
    pct: Math.min(100, Math.round((intoLevel / span) * 100)),
  };
}

// Personal rank ladder (khớp gamification.js RANKS)
const PERSONAL_RANKS = [
  { min: 1,  key: 'bronze',   name: 'Đồng',      icon: '🥉', color: '#cd7f32' },
  { min: 5,  key: 'silver',   name: 'Bạc',       icon: '🥈', color: '#cbd5e1' },
  { min: 10, key: 'gold',     name: 'Vàng',      icon: '🥇', color: '#fbbf24' },
  { min: 18, key: 'platinum', name: 'Bạch kim',  icon: '💠', color: '#67e8f9' },
  { min: 28, key: 'diamond',  name: 'Kim cương', icon: '💎', color: '#a78bfa' },
  { min: 40, key: 'master',   name: 'Cao thủ',   icon: '👑', color: '#f472b6' },
];
function rankFor(level) {
  let idx = 0;
  for (let i = 0; i < PERSONAL_RANKS.length; i++) if (level >= PERSONAL_RANKS[i].min) idx = i;
  const rank = PERSONAL_RANKS[idx];
  const next = PERSONAL_RANKS[idx + 1] || null;
  return { rank, next, levelsToNext: next ? next.min - level : 0 };
}

// Personal title — không trùng league name
function titleFromActivity(quizCorrect, skillsEarned, level) {
  if (skillsEarned >= 50) return 'Học giả nhỏ';
  if (skillsEarned >= 20) return 'Người tìm tòi';
  if (quizCorrect >= 100) return 'Bậc thầy quiz';
  if (quizCorrect >= 30) return 'Học sinh chăm chỉ';
  if (level >= 5) return 'Đang lên hạng';
  return 'Tân binh';
}

// Recommendation: tìm subject HS đang yếu nhất (low accuracy) trong 30 ngày
// gần nhất + suggest "ôn lại". Nếu chưa có data → trỏ Toán mặc định cho HS
// đang enroll primary/secondary, hoặc chuyên ngành cho ĐH.
function getRecommendation(userId, enrolledDomain) {
  const since = Date.now() - 30 * 86400_000;
  // Subject accuracy trong 30 ngày
  const rows = db.prepare(`
    SELECT subject_id, COUNT(*) AS n,
           SUM(CASE WHEN correct THEN 1 ELSE 0 END) AS c
      FROM question_attempts
     WHERE user_id = ? AND created_at >= ?
     GROUP BY subject_id
  `).all(userId, since);

  if (rows.length === 0) {
    // Chưa có quiz nào trong 30 ngày — đề xuất bắt đầu môn chính
    const subjMap = {
      primary:   { id: '', name: 'Toán Tiểu học',  emoji: '📐' },
      secondary: { id: '', name: 'Toán THCS',      emoji: '📐' },
      highschool:{ id: '', name: 'Toán THPT',      emoji: '📐' },
      pharmacy:  { id: '', name: 'Hoá lâm sàng',   emoji: '⚗' },
      it:        { id: '', name: 'Lập trình cơ bản', emoji: '💻' },
      economic:  { id: '', name: 'Vi mô',           emoji: '📊' },
    };
    const def = subjMap[enrolledDomain] || { id: '', name: 'Bài học đầu tiên', emoji: '📚' };
    return {
      type: 'start',
      action: 'Bắt đầu bài đầu tiên',
      subject_name: def.name,
      emoji: def.emoji,
      reason: 'Em chưa làm câu quiz nào trong 30 ngày qua.',
      url: '/hoc-thong-minh.html',
    };
  }

  // Tìm subject yếu nhất (accuracy thấp + có ≥ 5 câu)
  rows.forEach(r => r.acc = r.n > 0 ? r.c / r.n : 0);
  const candidates = rows.filter(r => r.n >= 5);
  if (candidates.length === 0) {
    // Quá ít data — đề xuất tiếp tục môn mới làm
    const recent = rows.sort((a,b) => b.n - a.n)[0];
    return {
      type: 'continue',
      action: 'Tiếp tục bài đang học',
      subject_name: recent.subject_id || 'Môn chính',
      emoji: '📚',
      reason: `Đã làm ${recent.n} câu — tiếp tục để giỏi hơn.`,
      url: '/hoc-thong-minh.html?subject_id=' + encodeURIComponent(recent.subject_id || ''),
    };
  }
  const weakest = candidates.sort((a,b) => a.acc - b.acc)[0];
  const accPct = Math.round(weakest.acc * 100);
  return {
    type: 'review',
    action: accPct < 50 ? 'Ôn lại điểm yếu' : 'Tiếp tục luyện',
    subject_name: weakest.subject_id || 'Môn chính',
    emoji: accPct < 50 ? '⚠️' : '📈',
    reason: `Độ chính xác ${accPct}% — ${accPct < 50 ? 'cần ôn thêm' : 'gần thành thạo'}.`,
    url: '/hoc-thong-minh.html?subject_id=' + encodeURIComponent(weakest.subject_id || ''),
  };
}

// Activity quick stats — số liệu thật
function getActivityStats(userId) {
  const since7d = Date.now() - 7 * 86400_000;
  const since30d = Date.now() - 30 * 86400_000;
  const quiz7 = db.prepare(`
    SELECT COUNT(*) AS n, SUM(CASE WHEN correct THEN 1 ELSE 0 END) AS c
      FROM question_attempts WHERE user_id = ? AND created_at >= ?
  `).get(userId, since7d) || { n: 0, c: 0 };
  const code7 = db.prepare(`
    SELECT COUNT(*) AS n FROM codelab_submissions
     WHERE user_id = ? AND processed_at >= ? AND status = 'accepted'
  `).get(userId, since7d) || { n: 0 };
  const scenario30 = db.prepare(`
    SELECT COUNT(*) AS n FROM scenario_runs WHERE user_id = ? AND last_ts >= ?
  `).get(userId, since30d) || { n: 0 };
  return {
    quiz_7d: quiz7.n,
    quiz_correct_7d: quiz7.c,
    quiz_accuracy_7d: quiz7.n > 0 ? Math.round((quiz7.c / quiz7.n) * 100) : 0,
    code_accepted_7d: code7.n,
    scenarios_30d: scenario30.n,
  };
}

export function attachDashboard(router) {
  router.get('/api/dashboard/me', requireAuth, (req, res) => {
    try {
      const userId = req.user.id;
      const wallet = getUserWallet(userId) || { coins: 0, xp: 0, streak: 0, achievements: [] };
      const eng = getEngagementReadOnly(userId);
      const li = levelInfo(wallet.xp || 0);
      const { rank, next, levelsToNext } = rankFor(li.level);

      // Skills overall + 7-day stats
      const skSummary = getUserSkillSummary(userId);
      const activity = getActivityStats(userId);

      // League (independent — XP tuần)
      let league = null;
      try {
        const lb = getLeagueBoardForUser(userId);
        if (lb) {
          league = {
            tier: lb.tier_meta,
            week_xp: lb.week_xp,
            my_rank: lb.my_rank,
            board_size: lb.board?.length || 0,
          };
        }
      } catch {}

      const title = titleFromActivity(activity.quiz_correct_7d * 4, skSummary.earned, li.level);
      const rec = getRecommendation(userId, req.user.enrolled_domain);

      res.json({
        ok: true,
        user: {
          id: req.user.id,
          display_name: req.user.display_name,
          role: req.user.role,
          enrolled_domain: req.user.enrolled_domain || null,
        },
        personal: {
          level: li.level,
          xp_total: wallet.xp || 0,
          xp_into_level: li.intoLevel,
          xp_span: li.span,
          xp_pct: li.pct,
          rank: { ...rank, levels_to_next: levelsToNext, next: next ? { name: next.name, icon: next.icon } : null },
          title,
        },
        engagement: eng ? {
          streak: eng.streak,
          longest_streak: eng.longestStreak,
          hearts: eng.hearts,
          hearts_max: eng.heartsMax,
          quests: eng.quests,                  // SINGLE quest system — server
          quests_done: eng.questsDone,
          quests_total: eng.questsTotal,
        } : null,
        league,
        wallet: {
          coins: wallet.coins || 0,
          achievements: (wallet.achievements || []).length,
        },
        skills: {
          earned: skSummary.earned,
          total: skSummary.total,
          pct: skSummary.total > 0 ? Math.round((skSummary.earned / skSummary.total) * 100) : 0,
        },
        activity,
        recommendation: rec,
      });
    } catch (e) {
      console.error('[dashboard] error', e);
      res.status(500).json({ ok: false, error: 'internal' });
    }
  });
}
