// ============================================================
// Trường THPT — Achievement catalog (GDPT 2018)
// Module IDs khớp highschool/modules.js: H10TOAN, H11TOAN, H12TOAN,
// H10NV, H10TA, H10LY, H10HOA, H10SINH, H10SU, H10DIA, H10GDCD, H10TIN, H10CN…
// ============================================================
/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  // ── Khởi đầu ──
  { id: 'first', icon: '🏫', title: 'Học sinh THPT',
    desc: 'Hoàn thành hoạt động đầu tiên', trigger: { quizzesPassed: 1 } },
  { id: 'streak-5', icon: '🔥', title: 'Ôn luyện đều đặn',
    desc: 'Vào học 5 ngày liên tiếp', trigger: { streak: 5 } },
  { id: 'streak-14', icon: '⚡', title: 'Hai tuần bứt phá',
    desc: 'Vào học 14 ngày liên tiếp', trigger: { streak: 14 } },

  // ── Toán ──
  { id: 'toan10', icon: '🔟', title: 'Vững nền Toán 10',
    desc: 'Đạt 3 sao Toán lớp 10', trigger: { moduleStars: { 'H10TOAN': 3 } } },
  { id: 'toan11', icon: '📈', title: 'Đạo hàm master',
    desc: 'Đạt 3 sao Toán lớp 11', trigger: { moduleStars: { 'H11TOAN': 3 } } },
  { id: 'toan12', icon: '🎓', title: 'Sẵn sàng thi tốt nghiệp',
    desc: 'Đạt 3 sao Toán lớp 12', trigger: { moduleStars: { 'H12TOAN': 3 } } },

  // ── Ngữ văn ──
  { id: 'nv10', icon: '📜', title: 'Văn học dân tộc',
    desc: 'Đạt 3 sao Ngữ văn lớp 10', trigger: { moduleStars: { 'H10NV': 3 } } },
  { id: 'nv12', icon: '✒️', title: 'Sẵn sàng thi Văn',
    desc: 'Đạt 3 sao Ngữ văn lớp 12', trigger: { moduleStars: { 'H12NV': 3 } } },

  // ── Tiếng Anh ──
  { id: 'ta10', icon: '🌍', title: 'English Rising Star',
    desc: 'Đạt 3 sao Tiếng Anh lớp 10', trigger: { moduleStars: { 'H10TA': 3 } } },
  { id: 'ta12', icon: '🗣️', title: 'Ready for University English',
    desc: 'Đạt 3 sao Tiếng Anh lớp 12', trigger: { moduleStars: { 'H12TA': 3 } } },

  // ── Ban KHTN ──
  { id: 'ly10', icon: '⚛️', title: 'Vật lí gia trẻ',
    desc: 'Đạt 3 sao Vật lí lớp 10', trigger: { moduleStars: { 'H10LY': 3 } } },
  { id: 'hoa10', icon: '🧪', title: 'Hoá học yêu thích',
    desc: 'Đạt 3 sao Hoá học lớp 10', trigger: { moduleStars: { 'H10HOA': 3 } } },
  { id: 'sinh10', icon: '🧬', title: 'Nhà sinh học nhỏ',
    desc: 'Đạt 3 sao Sinh học lớp 10', trigger: { moduleStars: { 'H10SINH': 3 } } },
  { id: 'khtn-triple', icon: '🔬', title: 'Tam giác KHTN',
    desc: 'Đạt sao Lí + Hoá + Sinh lớp 10',
    trigger: { moduleStars: { 'H10LY': 1, 'H10HOA': 1, 'H10SINH': 1 } } },

  // ── Ban KHXH ──
  { id: 'su10', icon: '🏛️', title: 'Yêu lịch sử dân tộc',
    desc: 'Đạt 3 sao Lịch sử lớp 10', trigger: { moduleStars: { 'H10SU': 3 } } },
  { id: 'dia10', icon: '🗺️', title: 'Nhà địa lý học',
    desc: 'Đạt 3 sao Địa lý lớp 10', trigger: { moduleStars: { 'H10DIA': 3 } } },

  // ── Tin học ──
  { id: 'tin10', icon: '💻', title: 'Digital THPT',
    desc: 'Đạt 3 sao Tin học lớp 10', trigger: { moduleStars: { 'H10TIN': 3 } } },

  // ── Sao tích luỹ ──
  { id: 'star-20', icon: '✨', title: 'Sưu tầm 20 sao',
    desc: 'Tích luỹ 20 sao', trigger: { totalStars: 20 } },
  { id: 'star-50', icon: '💫', title: 'Ngôi sao THPT',
    desc: 'Tích luỹ 50 sao', trigger: { totalStars: 50 } },

  // ── Tốt nghiệp lớp ──
  { id: 'year1-hs-complete', icon: '🥇', title: 'Vượt qua lớp 10!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 10', trigger: { yearComplete: 1 } },
  { id: 'year2-hs-complete', icon: '🥈', title: 'Lên lớp 12!',
    desc: 'Hoàn thành toàn bộ chương trình lớp 11', trigger: { yearComplete: 2 } },
  { id: 'highschool-grad', icon: '🎓', title: 'Tốt nghiệp THPT',
    desc: 'Hoàn thành toàn bộ chương trình lớp 12', trigger: { yearComplete: 3 } },

  // ── Chinh phục toàn bộ Toán THPT ──
  { id: 'all-hs-math', icon: '🏆', title: 'Thủ khoa Toán THPT',
    desc: 'Đạt sao Toán cả 3 lớp 10–12',
    trigger: { moduleStars: { 'H10TOAN': 1, 'H11TOAN': 1, 'H12TOAN': 1 } } },
];
