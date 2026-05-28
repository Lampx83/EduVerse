// ============================================================
// Economics domain — Achievement catalog (skeleton)
// ============================================================

/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-trade',  icon: '📈', title: 'Lần đầu giao dịch',
    desc: 'Hoàn thành quiz đầu tiên',
    trigger: { quizzesPassed: 1 } },

  { id: 'streak-5',     icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Streak 5 ngày liên tiếp',
    trigger: { streak: 5 } },

  { id: 'bookworm',     icon: '📚', title: 'Mọt sách kinh tế',
    desc: '10 quiz hoàn thành',
    trigger: { quizzesPassed: 10 } },

  { id: 'tycoon',       icon: '🏭', title: 'Tycoon',
    desc: 'Pass module Quản trị chiến lược (E4.1) với 3 sao',
    trigger: { moduleStars: { 'E4.1': 3 } } },

  { id: 'founder',      icon: '🚀', title: 'Người sáng lập',
    desc: 'Pass module Khởi nghiệp (E4.2) với 3 sao',
    trigger: { moduleStars: { 'E4.2': 3 } } },

  { id: 'thesis',       icon: '🎓', title: 'Khoá luận xuất sắc',
    desc: 'Pass khoá luận E4.6',
    trigger: { moduleStars: { 'E4.6': 2 } } },

  { id: 'star-30',      icon: '🌟', title: 'Sao đầu tiên',
    desc: '30 sao tích luỹ',
    trigger: { totalStars: 30 } },

  { id: 'all-year-1',   icon: '🥇', title: 'Tốt nghiệp Năm 1',
    desc: 'Hoàn thành mọi module Năm 1',
    trigger: { yearComplete: 1 } },
];
