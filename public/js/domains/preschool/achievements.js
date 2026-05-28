// ============================================================
// Trường Mầm non — Achievement (vui, dễ thương)
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first', icon: '🎈', title: 'Bé đến trường',
    desc: 'Hoàn thành hoạt động đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'count-star', icon: '⭐', title: 'Bé đếm giỏi',
    desc: 'Đạt 3 sao lớp Mầm', trigger: { moduleStars: { 'N1': 3 } } },
  { id: 'shape-star', icon: '🔷', title: 'Bé biết hình',
    desc: 'Đạt 3 sao lớp Chồi', trigger: { moduleStars: { 'N2': 3 } } },
  { id: 'ready', icon: '🎓', title: 'Sẵn sàng vào lớp 1',
    desc: 'Đạt 3 sao lớp Lá', trigger: { moduleStars: { 'N3': 3 } } },
  { id: 'streak-3', icon: '🔥', title: 'Đi học đều',
    desc: 'Vào học 3 ngày liên tiếp', trigger: { streak: 3 } },
];
