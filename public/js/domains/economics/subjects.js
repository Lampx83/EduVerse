// ============================================================
// Economics domain — Subject metadata
// ============================================================

/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  // Năm 1 — Đại cương
  'kinh-te-vi-mo':     { label: 'Kinh tế Vi mô',      icon: '📉', color: '#0ea5e9' },
  'kinh-te-vi-mo-co-ban': { label: 'Kinh tế Vi mô cơ bản', icon: '📉', color: '#0ea5e9' },
  'kinh-te-vi-mo-nang-cao': { label: 'Kinh tế Vi mô nâng cao', icon: '📊', color: '#0284c7' },
  'kinh-te-vi-mo-2':   { label: 'Kinh tế Vi mô 2',    icon: '📊', color: '#0284c7' },
  'kinh-te-vi-mo-1':   { label: 'Kinh tế Vi mô 1',    icon: '📉', color: '#0ea5e9' },
  'kinh-te-vi-mo-3':   { label: 'Kinh tế Vĩ mô 1',    icon: '📈', color: '#22c55e' },

  // Năm 1-2 — Cơ sở
  'toan-kinh-te':      { label: 'Toán kinh tế',       icon: '🔢', color: '#a78bfa' },
  'thong-ke':          { label: 'Thống kê',           icon: '📊', color: '#8b5cf6' },
  'ke-toan':           { label: 'Kế toán cơ sở',      icon: '📒', color: '#f59e0b' },
  'phap-luat-kt':      { label: 'Pháp luật kinh tế',  icon: '⚖️', color: '#64748b' },
  'tin-hoc-kt':        { label: 'Tin học cho KT',     icon: '💻', color: '#06b6d4' },
  'tieng-anh-kt':      { label: 'Tiếng Anh kinh tế',  icon: '🇬🇧', color: '#60a5fa' },

  // Năm 2 — Cơ sở ngành
  'kinh-te-quoc-te':   { label: 'Kinh tế quốc tế',    icon: '🌏', color: '#ec4899' },
  'kinh-te-luong':     { label: 'Kinh tế lượng',      icon: '📈', color: '#14b8a6' },
  'tai-chinh-tien-te': { label: 'Tài chính – Tiền tệ', icon: '💰', color: '#fbbf24' },

  // Năm 3 — Chuyên ngành chính
  'quan-tri':          { label: 'Quản trị học',       icon: '🧑‍💼', color: '#f97316' },
  'marketing':         { label: 'Marketing căn bản',  icon: '📣', color: '#ef4444' },
  'ke-toan-tai-chinh': { label: 'Kế toán tài chính',  icon: '💵', color: '#22c55e' },
  'ke-toan-quan-tri':  { label: 'Kế toán quản trị',   icon: '🧮', color: '#16a34a' },
  'phan-tich-tai-chinh': { label: 'Phân tích tài chính', icon: '📑', color: '#0284c7' },
  'tai-chinh-doanh-nghiep': { label: 'Tài chính DN', icon: '🏢', color: '#a855f7' },
  'ngan-hang':         { label: 'Ngân hàng – TTCK',   icon: '🏦', color: '#1d4ed8' },
  'thuong-mai-dt':     { label: 'Thương mại điện tử', icon: '🛒', color: '#0ea5e9' },
  'chuoi-cung-ung':    { label: 'Chuỗi cung ứng',     icon: '🚚', color: '#84cc16' },
  'kinh-doanh-quoc-te': { label: 'Kinh doanh quốc tế', icon: '🌐', color: '#06b6d4' },
  'logistics':         { label: 'Logistics',          icon: '📦', color: '#f59e0b' },

  // Năm 4 — Tích hợp + Khoá luận
  'quan-tri-chien-luoc': { label: 'Quản trị chiến lược', icon: '♟️', color: '#7c3aed' },
  'khoi-nghiep':       { label: 'Khởi nghiệp',        icon: '🚀', color: '#dc2626' },
  'kiem-toan':         { label: 'Kiểm toán',          icon: '🔍', color: '#475569' },
  'thue':              { label: 'Thuế VN',            icon: '🧾', color: '#737373' },
  'khoa-luan-kt':      { label: 'Khoá luận kinh tế',  icon: '✏️', color: '#fbbf24' },
  'dao-duc-kd':        { label: 'Đạo đức kinh doanh', icon: '⚖️', color: '#c084fc' },
  'data-research':     { label: 'Nghiên cứu kinh tế', icon: '📑', color: '#8b5cf6' },

  // Practice / Career / Game
  'doanh-nghiep-ao':   { label: 'Mô phỏng doanh nghiệp', icon: '🏢', color: '#10b981' },
  'startup-incubator': { label: 'Vườn ươm khởi nghiệp', icon: '🌱', color: '#22c55e' },
  'fintech-lab':       { label: 'FinTech Lab',         icon: '💳', color: '#0ea5e9' },
  'stock-sim':         { label: 'Mô phỏng TTCK',       icon: '📈', color: '#16a34a' },
  'career':            { label: 'Sự nghiệp',          icon: '💼', color: '#8b5cf6' },
  'game':              { label: 'Game',               icon: '🎮', color: '#f97316' },
};

export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '📘', color: '#94a3b8' };
}
