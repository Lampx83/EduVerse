// ============================================================
// Trường THCS — Achievement catalog
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  // ── Khởi đầu ──
  { id: 'first-quiz', icon: '🌟', title: 'Khởi đầu THCS',
    desc: 'Hoàn thành bài quiz đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-5', icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Vào học 5 ngày liên tiếp', trigger: { streak: 5 } },
  { id: 'streak-10', icon: '⚡', title: 'Máy học liên tục',
    desc: 'Vào học 10 ngày liên tiếp', trigger: { streak: 10 } },

  // ── Toán (hệ 36-tuần) ──
  { id: 'toan6-weekly', icon: '🔢', title: 'Thống trị Toán 6',
    desc: 'Đạt 3 sao Toán lớp 6 (36 tuần)', trigger: { moduleStars: { 'S6TOAN': 3 } } },
  { id: 'toan7-weekly', icon: '📊', title: 'Chinh phục Toán 7',
    desc: 'Đạt 3 sao Toán lớp 7', trigger: { moduleStars: { 'S7TOAN': 3 } } },
  { id: 'toan8-weekly', icon: '📐', title: 'Vua Pythagore',
    desc: 'Đạt 3 sao Toán lớp 8', trigger: { moduleStars: { 'S8TOAN': 3 } } },
  { id: 'toan9-weekly', icon: '🏅', title: 'Sẵn sàng thi lớp 10',
    desc: 'Đạt 3 sao Toán lớp 9', trigger: { moduleStars: { 'S9TOAN': 3 } } },

  // ── Ngữ văn (hệ 36-tuần) ──
  { id: 'nv6-weekly', icon: '📖', title: 'Yêu Văn học dân gian',
    desc: 'Đạt 3 sao Ngữ văn lớp 6 (36 tuần)', trigger: { moduleStars: { 'S6NV': 3 } } },
  { id: 'nv9-weekly', icon: '✒️', title: 'Thi Văn vào lớp 10',
    desc: 'Đạt 3 sao Ngữ văn lớp 9', trigger: { moduleStars: { 'S9NV': 3 } } },

  // ── Tiếng Anh (hệ 36-tuần) ──
  { id: 'ta6-weekly', icon: '🌍', title: 'English Explorer THCS',
    desc: 'Đạt 3 sao Tiếng Anh lớp 6', trigger: { moduleStars: { 'S6TA': 3 } } },
  { id: 'ta9-weekly', icon: '🗣️', title: 'Ready for High School English',
    desc: 'Đạt 3 sao Tiếng Anh lớp 9', trigger: { moduleStars: { 'S9TA': 3 } } },

  // ── KHTN & Lịch sử ──
  { id: 'khtn6-weekly', icon: '🔬', title: 'Nhà khoa học THCS',
    desc: 'Đạt 3 sao KHTN lớp 6', trigger: { moduleStars: { 'S6KHTN': 3 } } },
  { id: 'lsdia9-weekly', icon: '🗺️', title: 'Sử-Địa lớp 9',
    desc: 'Đạt 3 sao Lịch sử & Địa lý lớp 9', trigger: { moduleStars: { 'S9LSDL': 3 } } },

  // ── Tin học ──
  { id: 'tin6-weekly', icon: '💻', title: 'Digital Citizen',
    desc: 'Đạt 3 sao Tin học lớp 6', trigger: { moduleStars: { 'S6TH': 3 } } },
  { id: 'tin9-weekly', icon: '⌨️', title: 'Coder THCS',
    desc: 'Đạt 3 sao Tin học lớp 9', trigger: { moduleStars: { 'S9TIN': 3 } } },

  // ── Sao tích luỹ ──
  { id: 'star-20', icon: '✨', title: 'Sưu tầm 20 sao',
    desc: 'Tích luỹ 20 sao', trigger: { totalStars: 20 } },
  { id: 'star-50', icon: '💫', title: 'Ngôi sao THCS',
    desc: 'Tích luỹ 50 sao', trigger: { totalStars: 50 } },

  // ── Tốt nghiệp lớp ──
  { id: 'year1-sec-complete', icon: '🥇', title: 'Lên lớp 7 tự tin!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 6', trigger: { yearComplete: 1 } },
  { id: 'year4-sec-grad', icon: '🎓', title: 'Tốt nghiệp THCS',
    desc: 'Hoàn thành toàn bộ chương trình lớp 9', trigger: { yearComplete: 4 } },

  // ── Toán THCS hoàn chỉnh (hệ 36-tuần) ──
  { id: 'all-secondary-math', icon: '🏆', title: 'Tốt nghiệp Toán THCS',
    desc: 'Đạt sao Toán cả 4 lớp (S6TOAN→S9TOAN)',
    trigger: { moduleStars: { 'S6TOAN': 1, 'S7TOAN': 1, 'S8TOAN': 1, 'S9TOAN': 1 } } },

  // ── Legacy (subject.html path system — giữ nguyên để tương thích) ──
  { id: 'sn-boss', icon: '➕', title: 'Vô địch Số nguyên',
    desc: 'Hạ Boss chương Số nguyên (Toán 6 — đường học chương)', trigger: { moduleStars: { 'S6-so-nguyen-4': 1 } } },
  { id: 'ps-boss', icon: '🍕', title: 'Bậc thầy Phân số',
    desc: 'Hạ Boss chương Phân số (Toán 6 — đường học chương)', trigger: { moduleStars: { 'S6-phan-so-5': 1 } } },
  { id: 'math-9', icon: '🏅', title: 'Toán 9 cổng',
    desc: 'Đạt 3 sao Toán lớp 9 (cổng vào)', trigger: { moduleStars: { 'S9': 3 } } },
  { id: 'van-6', icon: '📚', title: 'Ngữ văn 6 cổng',
    desc: 'Đạt 3 sao Ngữ văn lớp 6 (cổng vào)', trigger: { moduleStars: { 'SV6': 3 } } },
  { id: 'van-9', icon: '📜', title: 'Ngữ văn 9 cổng',
    desc: 'Đạt 3 sao Ngữ văn lớp 9 (cổng vào)', trigger: { moduleStars: { 'SV9': 3 } } },
];
