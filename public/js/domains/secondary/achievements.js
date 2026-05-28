// ============================================================
// Trường THCS — Achievement catalog
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-quiz', icon: '🌟', title: 'Khởi đầu THCS',
    desc: 'Hoàn thành bài quiz đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-5', icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Vào học 5 ngày liên tiếp', trigger: { streak: 5 } },
  { id: 'math-6', icon: '📐', title: 'Vững Toán 6',
    desc: 'Đạt 3 sao Toán lớp 6', trigger: { moduleStars: { 'S6': 3 } } },
  { id: 'math-9', icon: '🏅', title: 'Sẵn sàng thi lớp 10',
    desc: 'Đạt 3 sao Toán lớp 9', trigger: { moduleStars: { 'S9': 3 } } },
  { id: 'van-6', icon: '📖', title: 'Yêu Ngữ văn 6',
    desc: 'Đạt 3 sao Ngữ văn lớp 6', trigger: { moduleStars: { 'SV6': 3 } } },
  { id: 'van-9', icon: '✒️', title: 'Thi Văn vào lớp 10',
    desc: 'Đạt 3 sao Ngữ văn lớp 9', trigger: { moduleStars: { 'SV9': 3 } } },
  { id: 'star-20', icon: '✨', title: 'Sưu tầm 20 sao',
    desc: 'Tích luỹ 20 sao', trigger: { totalStars: 20 } },
  { id: 'all-secondary-math', icon: '🎓', title: 'Tốt nghiệp Toán THCS',
    desc: 'Đạt sao ở cả 4 lớp Toán THCS', trigger: { totalStars: 4 } },
];
