// ============================================================
// Pharmacy domain — Achievement catalog
// ============================================================
// 12 achievement đầu tiên. Cấu trúc trigger được kiểm bởi
// engine/wallet.js · checkAchievements().
//
// Thêm achievement mới: chỉ cần push. Engine sẽ auto-pick up.
// ============================================================

/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-step',  icon: '👶', title: 'Bước đầu',
    desc: 'Hoàn thành quiz đầu tiên',
    trigger: { quizzesPassed: 1 } },

  { id: 'double',      icon: '⚡', title: 'Cú đúp',
    desc: 'Hoàn thành 2 module trong cùng 1 ngày',
    trigger: { modulesIn1Day: 2 } },

  { id: 'bookworm',    icon: '📚', title: 'Mọt sách',
    desc: '10 quiz hoàn thành',
    trigger: { quizzesPassed: 10 } },

  { id: 'streak-5',    icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Streak 5 ngày liên tiếp',
    trigger: { streak: 5 } },

  { id: 'streak-30',   icon: '🌟', title: 'Vua streak',
    desc: 'Streak 30 ngày liên tiếp — không nghỉ học',
    trigger: { streak: 30 } },

  { id: 'star-30',     icon: '🌟', title: 'Sao tay',
    desc: 'Đạt 30 sao tích luỹ',
    trigger: { totalStars: 30 } },

  { id: 'star-100',    icon: '✨', title: 'Sao bạc',
    desc: 'Đạt 100 sao — gần như nửa hành trình',
    trigger: { totalStars: 100 } },

  { id: 'compounder',  icon: '🧪', title: 'Bào chế gia',
    desc: 'Pass L3.6 (Bào chế) với 3 sao',
    trigger: { moduleStars: { 'L3.6': 3 } } },

  { id: 'osce-pass',   icon: '🎯', title: 'OSCE warrior',
    desc: 'Pass OSCE 10 trạm',
    trigger: { moduleStars: { 'L5.7': 2 } } },

  { id: 'vr-explorer', icon: '🥽', title: 'Người tiên phong VR',
    desc: 'Thử 3 phiên bản VR / XR khác nhau',
    trigger: { vrSessions: 3 } },

  { id: 'social',      icon: '🌐', title: 'Bạn cùng phòng',
    desc: 'Vào Metaverse multiplayer',
    trigger: { metaverseVisit: 1 } },

  { id: 'all-year-1',  icon: '🎓', title: 'Tốt nghiệp Năm 1',
    desc: 'Hoàn thành mọi module Năm 1',
    trigger: { yearComplete: 1 } },

  { id: 'all-year-2',  icon: '⚗️', title: 'Tốt nghiệp Năm 2',
    desc: 'Hoàn thành mọi module Năm 2 — nắm vững phân tích & dược liệu',
    trigger: { yearComplete: 2 } },

  { id: 'all-year-3',  icon: '💊', title: 'Tốt nghiệp Năm 3',
    desc: 'Hoàn thành mọi module Năm 3 — thành thạo dược lý & bào chế',
    trigger: { yearComplete: 3 } },

  { id: 'all-year-4',  icon: '🏥', title: 'Tốt nghiệp Năm 4',
    desc: 'Hoàn thành mọi module Năm 4 — sẵn sàng thực hành lâm sàng',
    trigger: { yearComplete: 4 } },

  { id: 'all-year-5',  icon: '🏅', title: 'Dược sĩ tốt nghiệp',
    desc: 'Hoàn thành toàn bộ 5 năm — sẵn sàng hành nghề Dược',
    trigger: { yearComplete: 5 } },
];
