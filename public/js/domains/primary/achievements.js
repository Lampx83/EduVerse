// ============================================================
// Trường Tiểu học — Achievement catalog (thân thiện trẻ em)
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-quiz', icon: '🌟', title: 'Ngôi sao nhỏ',
    desc: 'Hoàn thành bài quiz đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-3', icon: '🔥', title: 'Chăm học 3 ngày',
    desc: 'Vào học 3 ngày liên tiếp', trigger: { streak: 3 } },
  { id: 'math-1', icon: '➗', title: 'Bé giỏi Toán lớp 1',
    desc: 'Đạt 3 sao Toán lớp 1', trigger: { moduleStars: { 'P1': 3 } } },
  { id: 'math-5', icon: '🏅', title: 'Nhà toán học nhí',
    desc: 'Đạt 3 sao Toán lớp 5', trigger: { moduleStars: { 'P5': 3 } } },
  { id: 'star-15', icon: '✨', title: 'Sưu tầm 15 sao',
    desc: 'Tích luỹ 15 sao', trigger: { totalStars: 15 } },
  { id: 'all-primary-math', icon: '🎓', title: 'Hoàn thành Toán Tiểu học',
    desc: 'Đạt sao ở cả 5 lớp Toán', trigger: { totalStars: 5 } },
];
