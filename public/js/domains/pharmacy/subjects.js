// ============================================================
// Pharmacy domain — Subject metadata
// ============================================================
// Mỗi subject = 1 môn học trong chương trình Dược. Dùng để:
//  - Tô màu prereq line trong subway-map
//  - Group module theo môn trong picker
//  - Hiển thị label tiếng Việt
//
// Subject ID nằm trong CourseModule.subject. Nếu thiếu, fallback grey.
// ============================================================

/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  // ── Năm 1 ──
  'hoa-huu-co':         { label: 'Hoá hữu cơ',         icon: '🧪', color: '#22d3ee' },
  'giai-phau':          { label: 'Giải phẫu – Sinh lý', icon: '🩺', color: '#f472b6' },
  'giai-phau-sinh-ly':  { label: 'Giải phẫu – Sinh lý', icon: '🩺', color: '#f472b6' },
  'lab-safety':         { label: 'An toàn lab',         icon: '⚠️', color: '#fbbf24' },
  'an-toan-lab':        { label: 'An toàn lab',         icon: '⚠️', color: '#fbbf24' },
  'lab-basics':         { label: 'Dụng cụ cơ bản',      icon: '🧰', color: '#a3a3a3' },
  'dung-cu':            { label: 'Dụng cụ cơ bản',      icon: '🧰', color: '#a3a3a3' },
  'pharm-english':      { label: 'Tiếng Anh dược',      icon: '🇬🇧', color: '#60a5fa' },
  'ethics':             { label: 'Đạo đức nghề',        icon: '⚖️', color: '#c084fc' },

  // ── Năm 2 ──
  'hoa-phan-tich':      { label: 'Hoá phân tích',       icon: '⚗️', color: '#0ea5e9' },
  'duoc-lieu':          { label: 'Dược liệu',           icon: '🌿', color: '#22c55e' },
  'vi-sinh':            { label: 'Vi sinh – Ký sinh',   icon: '🦠', color: '#a855f7' },
  'sinh-hoa':           { label: 'Sinh hoá',            icon: '🧬', color: '#14b8a6' },
  'hoa-ly':             { label: 'Hoá lý',              icon: '⚛️', color: '#ea580c' },
  'sac-ky':             { label: 'Sắc ký TLC',          icon: '🔬', color: '#a78bfa' },

  // ── Năm 3 ──
  'duoc-ly':            { label: 'Dược lý',             icon: '💊', color: '#fbbf24' },
  'hoa-duoc':           { label: 'Hoá dược – SAR',      icon: '⚛️', color: '#f59e0b' },
  'bao-che':            { label: 'Bào chế GMP',         icon: '🧫', color: '#14b8a6' },
  'kiem-nghiem':        { label: 'Kiểm nghiệm',         icon: '🔎', color: '#0284c7' },
  'duoc-dong-hoc':      { label: 'Dược động học',       icon: '📈', color: '#7c3aed' },

  // ── Năm 4 ──
  'duoc-lam-sang':      { label: 'Dược lâm sàng',       icon: '🏥', color: '#ef4444' },
  'sinh-duoc-hoc':      { label: 'Sinh dược học',       icon: '🧪', color: '#0891b2' },
  'phap-luat-duoc':     { label: 'Pháp luật dược',      icon: '📜', color: '#64748b' },
  'marketing':          { label: 'Marketing dược',      icon: '📊', color: '#f97316' },

  // ── Năm 5 ──
  'tu-van-bn':          { label: 'Tư vấn BN',           icon: '💬', color: '#ec4899' },
  'quan-ly-duoc':       { label: 'Quản lý nhà thuốc',   icon: '🏪', color: '#10b981' },
  'duoc-bv':            { label: 'Dược BV',             icon: '🏨', color: '#ef4444' },
  'duoc-cd':            { label: 'Dược cộng đồng',      icon: '🏘️', color: '#22c55e' },
  'data-research':      { label: 'Nghiên cứu khoa học', icon: '📑', color: '#8b5cf6' },
  'osce':               { label: 'OSCE',                icon: '🎯', color: '#dc2626' },

  // ── Practice / Skill / Library / Career / Game ──
  'er-pharmacy':        { label: 'ER Dược',             icon: '🚨', color: '#dc2626' },
  'icu-pharmacy':       { label: 'ICU Dược',            icon: '🛏️', color: '#b91c1c' },
  'internal-med':       { label: 'Nội khoa',            icon: '❤️', color: '#ef4444' },
  'surgical-pharm':     { label: 'Ngoại khoa',          icon: '🔪', color: '#71717a' },
  'pediatric-pharm':    { label: 'Nhi',                 icon: '👶', color: '#fb923c' },
  'obgyn-pharm':        { label: 'Sản – Phụ',           icon: '🤰', color: '#f472b6' },
  'onco-pharm':         { label: 'Ung bướu',            icon: '🎗️', color: '#a78bfa' },
  'psych-pharm':        { label: 'Tâm thần',            icon: '🧠', color: '#6366f1' },
  'infectious-pharm':   { label: 'Truyền nhiễm',        icon: '🦠', color: '#84cc16' },
  'iv-admixture':       { label: 'Pha tiêm UT/TPN',     icon: '💉', color: '#f97316' },
  'community-pharm':    { label: 'Nhà thuốc cộng đồng', icon: '🏪', color: '#10b981' },
  'industrial':         { label: 'Công nghiệp dược',    icon: '🏭', color: '#22c55e' },
  'quality-control':    { label: 'QC',                  icon: '🔬', color: '#0284c7' },
  'quality-assurance':  { label: 'QA',                  icon: '📋', color: '#0ea5e9' },
  'regulatory':         { label: 'Đăng ký thuốc',       icon: '📑', color: '#6366f1' },
  'tender':             { label: 'Đấu thầu BV',         icon: '💰', color: '#eab308' },
  'pharmacovig':        { label: 'Pharmacovigilance',   icon: '⚠️', color: '#f59e0b' },
  'roleplay':           { label: 'AI Patient',          icon: '🤖', color: '#ec4899' },
  'communication':      { label: 'Giao tiếp',           icon: '💬', color: '#06b6d4' },
  'cultural':           { label: 'Đa văn hoá',          icon: '🌏', color: '#22c55e' },
  'emergency':          { label: 'Cấp cứu sống',        icon: '🆘', color: '#dc2626' },
  'vaccination':        { label: 'Tiêm chủng',          icon: '💉', color: '#0891b2' },
  'poc-testing':        { label: 'POC Test',            icon: '🩺', color: '#0ea5e9' },
  'smoking':            { label: 'Cai thuốc lá',        icon: '🚭', color: '#71717a' },
  'obesity':            { label: 'Béo phì',             icon: '⚖️', color: '#84cc16' },
  'nutrition':          { label: 'Dinh dưỡng',          icon: '🥗', color: '#22c55e' },
  'travel-med':         { label: 'Du lịch',             icon: '✈️', color: '#0284c7' },
  'contraception':      { label: 'Tránh thai',          icon: '🌹', color: '#ec4899' },
  'hiv-sti':            { label: 'HIV/STI',             icon: '🎗️', color: '#a855f7' },
  'pain-mgmt':          { label: 'Quản lý đau',         icon: '💊', color: '#f43f5e' },
  'mtm':                { label: 'MTM',                 icon: '📋', color: '#7c3aed' },
  'library':            { label: 'Thư viện',            icon: '📚', color: '#6366f1' },
  'stats':              { label: 'Thống kê',            icon: '📊', color: '#0ea5e9' },
  'qualitative':        { label: 'NC định tính',        icon: '🗣️', color: '#a78bfa' },
  'quantitative':       { label: 'NC định lượng',       icon: '📈', color: '#14b8a6' },
  'sr-ma':              { label: 'SR + Meta',           icon: '🔍', color: '#8b5cf6' },
  'thesis':             { label: 'Khoá luận',           icon: '✏️', color: '#fbbf24' },
  'publishing':         { label: 'Xuất bản',            icon: '📤', color: '#f97316' },
  'drug-ref':           { label: 'Tra cứu thuốc',       icon: '🔎', color: '#0284c7' },
  'ebm':                { label: 'EBM',                 icon: '🎯', color: '#10b981' },
  'pharmacoecon':       { label: 'Kinh tế dược',        icon: '💵', color: '#22c55e' },
  'pharma-ai':          { label: 'AI/ML dược',          icon: '🤖', color: '#ec4899' },
  'protocol':           { label: 'Đề cương NC',         icon: '📋', color: '#64748b' },
  'career':             { label: 'Sự nghiệp',           icon: '💼', color: '#8b5cf6' },
  'game':               { label: 'Game',                icon: '🎮', color: '#f97316' },
};

/** Lấy metadata subject, fallback an toàn nếu thiếu */
export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '📘', color: '#94a3b8' };
}
