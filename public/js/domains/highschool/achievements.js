// ============================================================
// Trường THPT — Achievement
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first', icon: '🏫', title: 'Học sinh THPT',
    desc: 'Hoàn thành hoạt động đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'grade10', icon: '🔟', title: 'Vững nền lớp 10',
    desc: 'Đạt 3 sao môn Toán 10', trigger: { moduleStars: { 'H-T10': 3 } } },
  { id: 'science', icon: '🔬', title: 'Mầm non khoa học',
    desc: 'Đạt 3 sao một môn ban KHTN (Lí/Hoá/Sinh)', trigger: { moduleStars: { 'H-L10': 3 } } },
  { id: 'social', icon: '🗺️', title: 'Nhà nghiên cứu xã hội',
    desc: 'Đạt 3 sao một môn ban KHXH (Sử/Địa/GDKT&PL)', trigger: { moduleStars: { 'H-S10': 3 } } },
  { id: 'exam', icon: '🎓', title: 'Sẵn sàng thi tốt nghiệp',
    desc: 'Đạt 3 sao môn Toán 12', trigger: { moduleStars: { 'H-T12': 3 } } },
  { id: 'streak-5', icon: '🔥', title: 'Ôn luyện đều đặn',
    desc: 'Vào học 5 ngày liên tiếp', trigger: { streak: 5 } },
];
