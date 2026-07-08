// ============================================================
// Trường Mầm non — Achievement (vui, dễ thương)
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  // ── Chung ──
  { id: 'first', icon: '🎈', title: 'Bé đến trường',
    desc: 'Hoàn thành hoạt động đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-3', icon: '🔥', title: 'Đi học đều',
    desc: 'Vào học 3 ngày liên tiếp', trigger: { streak: 3 } },

  // ── Lĩnh vực 2 — Nhận thức (N1/N2/N3 — có sẵn từ đầu) ──
  { id: 'count-star', icon: '⭐', title: 'Bé đếm giỏi',
    desc: 'Đạt 3 sao lớp Mầm (Nhận thức)', trigger: { moduleStars: { 'N1': 3 } } },
  { id: 'shape-star', icon: '🔷', title: 'Bé biết hình',
    desc: 'Đạt 3 sao lớp Chồi (Nhận thức)', trigger: { moduleStars: { 'N2': 3 } } },
  { id: 'ready', icon: '🎓', title: 'Sẵn sàng vào lớp 1',
    desc: 'Đạt 3 sao lớp Lá (Nhận thức)', trigger: { moduleStars: { 'N3': 3 } } },

  // ── Lĩnh vực 1 — Phát triển thể chất ──
  { id: 'active-mam', icon: '🏃', title: 'Bé năng động',
    desc: 'Đạt 3 sao · Thể chất Mầm', trigger: { moduleStars: { 'N1-TC': 3 } } },
  { id: 'agile-choi', icon: '🤸', title: 'Bé khéo léo',
    desc: 'Đạt 3 sao · Thể chất Chồi', trigger: { moduleStars: { 'N2-TC': 3 } } },
  { id: 'strong-la', icon: '💪', title: 'Bé cường tráng',
    desc: 'Đạt 3 sao · Thể chất Lá', trigger: { moduleStars: { 'N3-TC': 3 } } },

  // ── Lĩnh vực 3 — Phát triển ngôn ngữ ──
  { id: 'talk-mam', icon: '💬', title: 'Bé bi bô',
    desc: 'Đạt 3 sao · Ngôn ngữ Mầm', trigger: { moduleStars: { 'N1-NN': 3 } } },
  { id: 'story-choi', icon: '📖', title: 'Bé kể chuyện',
    desc: 'Đạt 3 sao · Ngôn ngữ Chồi', trigger: { moduleStars: { 'N2-NN': 3 } } },
  { id: 'read-la', icon: '🔤', title: 'Bé đọc chữ',
    desc: 'Đạt 3 sao · Ngôn ngữ Lá (biết 29 chữ cái)', trigger: { moduleStars: { 'N3-NN': 3 } } },

  // ── Lĩnh vực 4 — Phát triển tình cảm–xã hội ──
  { id: 'happy-mam', icon: '😊', title: 'Bé vui vẻ',
    desc: 'Đạt 3 sao · Tình cảm–XH Mầm', trigger: { moduleStars: { 'N1-TX': 3 } } },
  { id: 'kind-choi', icon: '🤝', title: 'Bé thân thiện',
    desc: 'Đạt 3 sao · Tình cảm–XH Chồi', trigger: { moduleStars: { 'N2-TX': 3 } } },
  { id: 'good-la', icon: '🌟', title: 'Bé tốt bụng',
    desc: 'Đạt 3 sao · Tình cảm–XH Lá', trigger: { moduleStars: { 'N3-TX': 3 } } },

  // ── Lĩnh vực 5 — Phát triển thẩm mỹ ──
  { id: 'artist-mam', icon: '🎨', title: 'Bé nghệ sĩ nhỏ',
    desc: 'Đạt 3 sao · Thẩm mỹ Mầm', trigger: { moduleStars: { 'N1-TM': 3 } } },
  { id: 'talent-choi', icon: '🎭', title: 'Bé tài năng',
    desc: 'Đạt 3 sao · Thẩm mỹ Chồi', trigger: { moduleStars: { 'N2-TM': 3 } } },
  { id: 'creative-la', icon: '✨', title: 'Bé sáng tạo',
    desc: 'Đạt 3 sao · Thẩm mỹ Lá', trigger: { moduleStars: { 'N3-TM': 3 } } },

  // ── Hoàn thành toàn diện ──
  { id: 'all-round', icon: '🏅', title: 'Phát triển toàn diện',
    desc: 'Đạt 3 sao cả 5 lĩnh vực phát triển ở lớp Lá', trigger: { quizzesPassed: 15 } },
];
