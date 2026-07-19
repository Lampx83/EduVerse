// ============================================================
// Pharmacy domain — Achievement catalog
// ============================================================
// 12 achievement đầu tiên. Cấu trúc trigger được kiểm bởi
// engine/wallet.js · checkAchievements().
//
// Thêm achievement mới: chỉ cần push. Engine sẽ auto-pick up.
// ============================================================

/** @type {import('../../engine/types.js').Achievement[]} */
export const ACHIEVEMENTS = [
  { id: 'first-step',  icon: '👶', title: 'Bước đầu',
    desc: 'Hoàn thành quiz đầu tiên',
    trigger: { quizzesPassed: 1 } },

  { id: 'double',      icon: '⚡', title: 'Cú đúp',
    desc: 'Hoàn thành 2 module trong cùng 1 ngày',
    trigger: { modulesIn1Day: 2 } },

  { id: 'bookworm',    icon: '📚', title: 'Mọt sách',
    desc: '10 quiz hoàn thành',
    trigger: { quizzesPassed: 10 } },

  { id: 'streak-5',    icon: '🔥', title: 'Cháy 5 ngày',
    desc: 'Streak 5 ngày liên tiếp',
    trigger: { streak: 5 } },

  { id: 'streak-30',   icon: '🌟', title: 'Vua streak',
    desc: 'Streak 30 ngày liên tiếp — không nghỉ học',
    trigger: { streak: 30 } },

  { id: 'star-30',     icon: '🌟', title: 'Sao tay',
    desc: 'Đạt 30 sao tích luỹ',
    trigger: { totalStars: 30 } },

  { id: 'star-100',    icon: '✨', title: 'Sao bạc',
    desc: 'Đạt 100 sao — gần như nửa hành trình',
    trigger: { totalStars: 100 } },

  { id: 'compounder',  icon: '🧪', title: 'Bào chế gia',
    desc: 'Pass L3.6 (Bào chế) với 3 sao',
    trigger: { moduleStars: { 'L3.6': 3 } } },

  { id: 'osce-pass',   icon: '🎯', title: 'OSCE warrior',
    desc: 'Pass OSCE 10 trạm',
    trigger: { moduleStars: { 'L5.7': 2 } } },

  { id: 'vr-explorer', icon: '🥽', title: 'Người tiên phong VR',
    desc: 'Thử 3 phiên bản VR / XR khác nhau',
    trigger: { vrSessions: 3 } },

  { id: 'social',      icon: '🌐', title: 'Bạn cùng phòng',
    desc: 'Vào Metaverse multiplayer',
    trigger: { metaverseVisit: 1 } },

  { id: 'all-year-1',  icon: '🎓', title: 'Tốt nghiệp Năm 1',
    desc: 'Hoàn thành mọi module Năm 1',
    trigger: { yearComplete: 1 } },

  { id: 'all-year-2',  icon: '⚗️', title: 'Tốt nghiệp Năm 2',
    desc: 'Hoàn thành mọi module Năm 2 — nắm vững phân tích & dược liệu',
    trigger: { yearComplete: 2 } },

  { id: 'all-year-3',  icon: '💊', title: 'Tốt nghiệp Năm 3',
    desc: 'Hoàn thành mọi module Năm 3 — thành thạo dược lý & bào chế',
    trigger: { yearComplete: 3 } },

  { id: 'all-year-4',  icon: '🏥', title: 'Tốt nghiệp Năm 4',
    desc: 'Hoàn thành mọi module Năm 4 — sẵn sàng thực hành lâm sàng',
    trigger: { yearComplete: 4 } },

  { id: 'all-year-5',  icon: '🏅', title: 'Dược sĩ tốt nghiệp',
    desc: 'Hoàn thành toàn bộ 5 năm — sẵn sàng hành nghề Dược',
    trigger: { yearComplete: 5 } },

  // ── L5.1 — Dược lâm sàng đa khoa ──
  { id: 'clinical-generalist', icon: '🩺', title: 'Dược sĩ lâm sàng đa khoa',
    desc: 'Hoàn thành L5.1 — thành thạo viết SOAP đa chuyên khoa',
    trigger: { moduleStars: { 'L5.1': 2 } } },

  // ── Thư viện & Nghiên cứu (LR03–LR10) ──
  { id: 'qual-researcher',   icon: '🗣️', title: 'Nhà NC định tính',
    desc: 'Hoàn thành LR03 — NC định tính, phỏng vấn sâu, FG',
    trigger: { moduleStars: { 'LR03': 3 } } },

  { id: 'rct-master',        icon: '📈', title: 'RCT Master',
    desc: 'Hoàn thành LR04 — NC định lượng, RCT, Cohort, Case-control',
    trigger: { moduleStars: { 'LR04': 3 } } },

  { id: 'sr-expert',         icon: '🔍', title: 'Systematic Review Expert',
    desc: 'Hoàn thành LR05 — Systematic Review + Meta-analysis PRISMA',
    trigger: { moduleStars: { 'LR05': 3 } } },

  { id: 'thesis-writer',     icon: '✏️', title: 'Nhà khoa học trẻ',
    desc: 'Hoàn thành LR06 — Viết khoá luận tốt nghiệp',
    trigger: { moduleStars: { 'LR06': 3 } } },

  { id: 'publisher',         icon: '📤', title: 'Nhà xuất bản khoa học',
    desc: 'Hoàn thành LR07 — Submit paper khoa học quốc tế',
    trigger: { moduleStars: { 'LR07': 3 } } },

  { id: 'drug-info-pro',     icon: '🔎', title: 'Drug Information Pro',
    desc: 'Hoàn thành LR08 — Tra cứu thuốc Lexicomp/UpToDate',
    trigger: { moduleStars: { 'LR08': 3 } } },

  { id: 'ebm-champion',      icon: '🎯', title: 'EBM Champion',
    desc: 'Hoàn thành LR09 — Evidence-based Medicine',
    trigger: { moduleStars: { 'LR09': 3 } } },

  { id: 'pharmacoecon-pro',  icon: '💵', title: 'Pharmacoeconomics Pro',
    desc: 'Hoàn thành LR10 — Pharmacoeconomics, ICER, QALY',
    trigger: { moduleStars: { 'LR10': 3 } } },

  // ── Career Paths (CP01-07) ──
  { id: 'hospital-pharmacist', icon: '🏥', title: 'Dược sĩ BV tương lai',
    desc: 'Hoàn thành CP01 — Sự nghiệp Dược lâm sàng bệnh viện',
    trigger: { moduleStars: { 'CP01': 2 } } },

  { id: 'community-pharmacist', icon: '🏪', title: 'Chủ nhà thuốc',
    desc: 'Hoàn thành CP02 — Sự nghiệp Nhà thuốc cộng đồng GPP',
    trigger: { moduleStars: { 'CP02': 2 } } },

  { id: 'industry-pro',      icon: '🏭', title: 'Dược công nghiệp',
    desc: 'Hoàn thành CP03 — Sự nghiệp Công nghiệp dược GMP',
    trigger: { moduleStars: { 'CP03': 2 } } },

  { id: 'pv-officer',        icon: '⚠️', title: 'Cảnh giác dược viên',
    desc: 'Hoàn thành CP06 — Pharmacovigilance, báo cáo ADR',
    trigger: { moduleStars: { 'CP06': 2 } } },

  { id: 'regulatory-expert', icon: '📑', title: 'Regulatory Affairs Expert',
    desc: 'Hoàn thành CP07 — Regulatory Affairs, đăng ký thuốc DAV/EMA',
    trigger: { moduleStars: { 'CP07': 2 } } },

  // ── Games (GC03, GC05) ──
  { id: 'interaction-racer', icon: '🔗', title: 'Tương tác tốc độ',
    desc: 'Hoàn thành GC03 — Drug Interaction Speed Challenge',
    trigger: { moduleStars: { 'GC03': 3 } } },

  { id: 'calculator-champ',  icon: '🧮', title: 'Calculator Champion',
    desc: 'Hoàn thành GC05 — Calculator Championship liều dùng',
    trigger: { moduleStars: { 'GC05': 3 } } },
];
