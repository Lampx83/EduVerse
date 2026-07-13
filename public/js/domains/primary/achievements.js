// ============================================================
// Trường Tiểu học — Achievement catalog (thân thiện trẻ em)
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  // ── Khởi đầu ──
  { id: 'first-quiz', icon: '🌟', title: 'Ngôi sao nhỏ',
    desc: 'Hoàn thành bài quiz đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-3', icon: '🔥', title: 'Chăm học 3 ngày',
    desc: 'Vào học 3 ngày liên tiếp', trigger: { streak: 3 } },
  { id: 'streak-7', icon: '🌈', title: 'Tuần vàng',
    desc: 'Vào học 7 ngày liên tiếp', trigger: { streak: 7 } },

  // ── Toán — mỗi lớp ──
  { id: 'math-1', icon: '➗', title: 'Bé giỏi Toán lớp 1',
    desc: 'Đạt 3 sao Toán lớp 1', trigger: { moduleStars: { 'P1': 3 } } },
  { id: 'math-2', icon: '🔢', title: 'Toán thủ lớp 2',
    desc: 'Đạt 3 sao Toán lớp 2', trigger: { moduleStars: { 'P2': 3 } } },
  { id: 'math-3', icon: '🧮', title: 'Nhà tính nhẩm lớp 3',
    desc: 'Đạt 3 sao Toán lớp 3', trigger: { moduleStars: { 'P3': 3 } } },
  { id: 'math-4', icon: '📐', title: 'Bạn của phân số',
    desc: 'Đạt 3 sao Toán lớp 4', trigger: { moduleStars: { 'P4': 3 } } },
  { id: 'math-5', icon: '🏅', title: 'Nhà toán học nhí',
    desc: 'Đạt 3 sao Toán lớp 5', trigger: { moduleStars: { 'P5': 3 } } },

  // ── Tiếng Việt ──
  { id: 'viet-1', icon: '📖', title: 'Biết đọc biết viết',
    desc: 'Đạt 3 sao Tiếng Việt lớp 1', trigger: { moduleStars: { 'P1TV': 3 } } },
  { id: 'viet-2', icon: '📕', title: 'Đọc thông viết thạo lớp 2',
    desc: 'Đạt 3 sao Tiếng Việt lớp 2', trigger: { moduleStars: { 'P2TV': 3 } } },
  { id: 'viet-3', icon: '✏️', title: 'Viết văn hay lớp 3',
    desc: 'Đạt 3 sao Tiếng Việt lớp 3', trigger: { moduleStars: { 'P3TV': 3 } } },
  { id: 'viet-4', icon: '📓', title: 'Nhà văn nhỏ lớp 4',
    desc: 'Đạt 3 sao Tiếng Việt lớp 4', trigger: { moduleStars: { 'P4TV': 3 } } },
  { id: 'viet-5', icon: '📝', title: 'Nhà văn nhỏ tuổi',
    desc: 'Đạt 3 sao Tiếng Việt lớp 5', trigger: { moduleStars: { 'P5TV': 3 } } },

  // ── Tiếng Anh ──
  { id: 'eng-3', icon: '🌍', title: 'Hello World!',
    desc: 'Đạt 3 sao Tiếng Anh lớp 3', trigger: { moduleStars: { 'P3TA': 3 } } },
  { id: 'eng-4', icon: '💬', title: 'Confident Talker lớp 4',
    desc: 'Đạt 3 sao Tiếng Anh lớp 4', trigger: { moduleStars: { 'P4TA': 3 } } },
  { id: 'eng-5', icon: '🗣️', title: 'Junior English Speaker',
    desc: 'Đạt 3 sao Tiếng Anh lớp 5', trigger: { moduleStars: { 'P5TA': 3 } } },

  // ── Khoa học & Xã hội ──
  { id: 'science-4', icon: '🔭', title: 'Nhà khoa học nhỏ',
    desc: 'Đạt 3 sao Khoa học lớp 4', trigger: { moduleStars: { 'P4KH': 3 } } },
  { id: 'science-5', icon: '🌿', title: 'Khoa học tự nhiên lớp 5',
    desc: 'Đạt 3 sao Khoa học lớp 5', trigger: { moduleStars: { 'P5KH': 3 } } },
  { id: 'history-5', icon: '🗺️', title: 'Yêu lịch sử Việt Nam',
    desc: 'Đạt 3 sao Lịch sử & Địa lý lớp 5', trigger: { moduleStars: { 'P5LSDL': 3 } } },

  // ── Tin học ──
  { id: 'coding-3', icon: '💻', title: 'Lập trình viên nhí',
    desc: 'Đạt 3 sao Tin học lớp 3', trigger: { moduleStars: { 'P3TIN': 3 } } },
  { id: 'coding-4', icon: '🖱️', title: 'Coder nhỏ lớp 4',
    desc: 'Đạt 3 sao Tin học lớp 4', trigger: { moduleStars: { 'P4TIN': 3 } } },
  { id: 'coding-5', icon: '🤖', title: 'Scratch Master',
    desc: 'Đạt 3 sao Tin học lớp 5', trigger: { moduleStars: { 'P5TIN': 3 } } },

  // ── Sao tích luỹ ──
  { id: 'star-15', icon: '✨', title: 'Sưu tầm 15 sao',
    desc: 'Tích luỹ 15 sao', trigger: { totalStars: 15 } },
  { id: 'star-30', icon: '💫', title: 'Kho báu 30 sao',
    desc: 'Tích luỹ 30 sao', trigger: { totalStars: 30 } },
  { id: 'star-60', icon: '🌠', title: 'Bầu trời sao',
    desc: 'Tích luỹ 60 sao', trigger: { totalStars: 60 } },

  // ── Tốt nghiệp lớp ──
  { id: 'year1-grad', icon: '🥇', title: 'Lên lớp 2 rồi!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 1', trigger: { yearComplete: 1 } },
  { id: 'year2-grad', icon: '🌟', title: 'Lên lớp 3 nào!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 2', trigger: { yearComplete: 2 } },
  { id: 'year3-grad', icon: '🥈', title: 'Lên lớp 4 vui quá!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 3', trigger: { yearComplete: 3 } },
  { id: 'year4-grad', icon: '🌈', title: 'Sắp tốt nghiệp Tiểu học!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 4', trigger: { yearComplete: 4 } },
  { id: 'primary-grad', icon: '🎓', title: 'Tốt nghiệp Tiểu học',
    desc: 'Hoàn thành toàn bộ chương trình lớp 5', trigger: { yearComplete: 5 } },

  // ── Toán Tiểu học hoàn chỉnh ──
  { id: 'all-primary-math', icon: '🏆', title: 'Hoàn thành Toán Tiểu học',
    desc: 'Đạt sao ở cả 5 lớp Toán (P1→P5)',
    trigger: { moduleStars: { 'P1': 1, 'P2': 1, 'P3': 1, 'P4': 1, 'P5': 1 } } },
];
