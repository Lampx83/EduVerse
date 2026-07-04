// ============================================================
// Economics domain — Achievement catalog
// ============================================================

/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-trade',  icon: '📈', title: 'Lần đầu giao dịch',
    desc: 'Hoàn thành quiz đầu tiên',
    trigger: { quizzesPassed: 1 } },

  { id: 'streak-5',     icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Streak 5 ngày liên tiếp',
    trigger: { streak: 5 } },

  { id: 'bookworm',     icon: '📚', title: 'Mọt sách kinh tế',
    desc: '10 quiz hoàn thành',
    trigger: { quizzesPassed: 10 } },

  { id: 'tycoon',       icon: '🏭', title: 'Tycoon',
    desc: 'Pass module Quản trị chiến lược (E4.1) với 3 sao',
    trigger: { moduleStars: { 'E4.1': 3 } } },

  { id: 'founder',      icon: '🚀', title: 'Người sáng lập',
    desc: 'Pass module Khởi nghiệp (E4.2) với 3 sao',
    trigger: { moduleStars: { 'E4.2': 3 } } },

  { id: 'thesis',       icon: '🎓', title: 'Khoá luận xuất sắc',
    desc: 'Pass khoá luận E4.6',
    trigger: { moduleStars: { 'E4.6': 2 } } },

  { id: 'star-30',      icon: '🌟', title: 'Sao đầu tiên',
    desc: '30 sao tích luỹ',
    trigger: { totalStars: 30 } },

  { id: 'all-year-1',   icon: '🥇', title: 'Tốt nghiệp Năm 1',
    desc: 'Hoàn thành mọy module Năm 1',
    trigger: { yearComplete: 1 } },

  { id: 'micro-star',   icon: '📉', title: 'Chuyên gia Vi mô',
    desc: 'Hoàn thành module Kinh tế Vi mô 1 (E1.1) với 3 sao',
    trigger: { moduleStars: { 'E1.1': 3 } } },

  { id: 'math-ace',     icon: '🔢', title: 'Toán tài ba',
    desc: 'Hoàn thành module Toán cho kinh tế (E1.2) với 3 sao',
    trigger: { moduleStars: { 'E1.2': 3 } } },

  { id: 'accounting-ace', icon: '📒', title: 'Kế toán xuất sắc',
    desc: 'Hoàn thành module Nguyên lý kế toán (E1.3) với 3 sao',
    trigger: { moduleStars: { 'E1.3': 3 } } },

  { id: 'law-aware',    icon: '⚖️', title: 'Hiểu luật kinh doanh',
    desc: 'Hoàn thành module Pháp luật kinh tế (E1.4) với 3 sao',
    trigger: { moduleStars: { 'E1.4': 3 } } },

  { id: 'tech-savvy',   icon: '💻', title: 'Công nghệ thành thạo',
    desc: 'Hoàn thành module Tin học cho kinh tế (E1.5) với 3 sao',
    trigger: { moduleStars: { 'E1.5': 3 } } },

  // ── Năm 2 ──────────────────────────────────────────────────
  { id: 'macro-master',    icon: '🏦', title: 'Macro Master',
    desc: 'Hoàn thành module Kinh tế Vĩ mô 1 (E2.1) với 3 sao',
    trigger: { moduleStars: { 'E2.1': 3 } } },

  { id: 'stats-pro',       icon: '📊', title: 'Chuyên gia Thống kê',
    desc: 'Hoàn thành module Thống kê cho kinh tế (E2.2) với 3 sao',
    trigger: { moduleStars: { 'E2.2': 3 } } },

  { id: 'finance-guru',    icon: '💰', title: 'Tài chính – Tiền tệ Pro',
    desc: 'Hoàn thành module Tài chính – Tiền tệ (E2.3) với 3 sao',
    trigger: { moduleStars: { 'E2.3': 3 } } },

  { id: 'mgmt-leader',     icon: '🧭', title: 'Nhà Quản trị Xuất sắc',
    desc: 'Hoàn thành module Quản trị học đại cương (E2.4) với 3 sao',
    trigger: { moduleStars: { 'E2.4': 3 } } },

  { id: 'marketing-star',  icon: '📣', title: 'Marketing Star',
    desc: 'Hoàn thành module Marketing căn bản (E2.5) với 3 sao',
    trigger: { moduleStars: { 'E2.5': 3 } } },

  { id: 'all-year-2-econ', icon: '🥈', title: 'Tốt nghiệp Năm 2 Kinh tế',
    desc: 'Hoàn thành toàn bộ module Năm 2 Kinh tế',
    trigger: { yearComplete: 2 } },

  // ── Năm 3 ──────────────────────────────────────────────────
  { id: 'econometrics-pro',  icon: '📐', title: 'Kinh tế lượng Pro',
    desc: 'Hoàn thành module Kinh tế lượng (E3.1) với 3 sao',
    trigger: { moduleStars: { 'E3.1': 3 } } },

  { id: 'corp-finance-star', icon: '💼', title: 'Tài chính doanh nghiệp',
    desc: 'Hoàn thành module Tài chính doanh nghiệp (E3.2) với 3 sao',
    trigger: { moduleStars: { 'E3.2': 3 } } },

  { id: 'mgmt-accounting',   icon: '📋', title: 'Kế toán quản trị Master',
    desc: 'Hoàn thành module Kế toán quản trị (E3.3) với 3 sao',
    trigger: { moduleStars: { 'E3.3': 3 } } },

  { id: 'financial-analyst', icon: '🔍', title: 'Nhà phân tích tài chính',
    desc: 'Hoàn thành module Phân tích tài chính (E3.4) với 3 sao',
    trigger: { moduleStars: { 'E3.4': 3 } } },

  { id: 'digital-marketer',  icon: '📲', title: 'Digital Marketer',
    desc: 'Hoàn thành module Marketing số & E-commerce (E3.5) với 3 sao',
    trigger: { moduleStars: { 'E3.5': 3 } } },

  { id: 'supply-chain-boss', icon: '🔗', title: 'Chuỗi cung ứng chuyên gia',
    desc: 'Hoàn thành module Quản trị chuỗi cung ứng (E3.6) với 3 sao',
    trigger: { moduleStars: { 'E3.6': 3 } } },

  { id: 'global-trader',     icon: '🌏', title: 'Nhà kinh doanh quốc tế',
    desc: 'Hoàn thành module Kinh doanh quốc tế (E3.7) với 3 sao',
    trigger: { moduleStars: { 'E3.7': 3 } } },

  { id: 'all-year-3-econ',   icon: '🎖️', title: 'Tốt nghiệp Năm 3 Kinh tế',
    desc: 'Hoàn thành toàn bộ module Năm 3 Kinh tế',
    trigger: { yearComplete: 3 } },
];
