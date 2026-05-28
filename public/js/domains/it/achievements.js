// ============================================================
// IT domain — Achievement catalog (skeleton)
// ============================================================

/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'hello-world', icon: '👋', title: 'Hello World',
    desc: 'Hoàn thành quiz đầu tiên',
    trigger: { quizzesPassed: 1 } },

  { id: 'streak-5',    icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Streak 5 ngày liên tiếp',
    trigger: { streak: 5 } },

  { id: 'algorithmist', icon: '🌳', title: 'Algorithmist',
    desc: 'Pass Cấu trúc dữ liệu & Giải thuật (I2.1) với 3 sao',
    trigger: { moduleStars: { 'I2.1': 3 } } },

  { id: 'fullstack',   icon: '🌐', title: 'Full-stack Dev',
    desc: 'Pass Web Full-stack (I3.5) với 3 sao',
    trigger: { moduleStars: { 'I3.5': 3 } } },

  { id: 'ai-master',   icon: '🤖', title: 'AI Master',
    desc: 'Pass Machine Learning (I3.4) với 3 sao',
    trigger: { moduleStars: { 'I3.4': 3 } } },

  { id: 'hacker',      icon: '🚩', title: 'Hacker',
    desc: 'Pass An toàn thông tin (I3.8) với 3 sao',
    trigger: { moduleStars: { 'I3.8': 3 } } },

  { id: 'cloud-pro',   icon: '☁️', title: 'Cloud Pro',
    desc: 'Pass Cloud (I4.2) với 3 sao',
    trigger: { moduleStars: { 'I4.2': 3 } } },

  { id: 'thesis-it',   icon: '🎓', title: 'Khoá luận xuất sắc',
    desc: 'Pass khoá luận I4.5',
    trigger: { moduleStars: { 'I4.5': 2 } } },

  { id: 'star-30',     icon: '🌟', title: '30 sao đầu',
    desc: '30 sao tích luỹ',
    trigger: { totalStars: 30 } },

  { id: 'all-year-1',  icon: '🥇', title: 'Tốt nghiệp Năm 1',
    desc: 'Hoàn thành mọi module Năm 1',
    trigger: { yearComplete: 1 } },
];
