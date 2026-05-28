// ============================================================
// Trường THCS — Achievement catalog
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-quiz', icon: '🌟', title: 'Khởi đầu THCS',
    desc: 'Hoàn thành bài quiz đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-5', icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Vào học 5 ngày liên tiếp', trigger: { streak: 5 } },
  { id: 'sn-boss', icon: '➕', title: 'Vô địch Số nguyên',
    desc: 'Hạ Boss chương Số nguyên (Toán 6)', trigger: { moduleStars: { 'S6-so-nguyen-4': 1 } } },
  { id: 'ps-boss', icon: '🍕', title: 'Bậc thầy Phân số',
    desc: 'Hạ Boss chương Phân số (Toán 6)', trigger: { moduleStars: { 'S6-phan-so-5': 1 } } },
  { id: 'hh-boss', icon: '📐', title: 'Kiến trúc sư Hình học',
    desc: 'Hạ Boss chương Hình học (Toán 6)', trigger: { moduleStars: { 'S6-hinh-hoc-4': 1 } } },
  { id: 'math6-grad', icon: '🎓', title: 'Tốt nghiệp Toán 6',
    desc: 'Hạ tất cả 5 Boss chương của Toán lớp 6',
    trigger: { moduleStars: { 'S6-so-nguyen-4': 1, 'S6-phan-so-5': 1, 'S6-ti-so-3': 1, 'S6-ucln-bcnn-4': 1, 'S6-hinh-hoc-4': 1 } } },
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
