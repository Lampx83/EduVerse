// ============================================================
// IT domain — Module list (skeleton, 4 năm CS/SE)
// ============================================================
// Lộ trình mô phỏng chương trình Cử nhân CNTT/Khoa học máy tính
// VN (UET, NEU-CNTT, Bách Khoa, FPT…). Skeleton — quiz bổ sung dần.
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ──────────── NĂM 1 — ĐẠI CƯƠNG ────────────
  { category: 'curriculum', id: 'I1.1', title: 'Nhập môn lập trình (Python)', yearLevel: 1, subject: 'lap-trinh-co-ban', scenarioIds: [], minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.2', title: 'Toán rời rạc',                yearLevel: 1, subject: 'toan-roi-rac',     scenarioIds: [], minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.3', title: 'Kiến trúc máy tính',          yearLevel: 1, subject: 'kien-truc-may-tinh', scenarioIds: [], minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.4', title: 'Hệ điều hành (Linux căn bản)', yearLevel: 1, subject: 'he-dieu-hanh',    scenarioIds: [], minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.5', title: 'Tiếng Anh CNTT',              yearLevel: 1, subject: 'tieng-anh-it',     scenarioIds: [], minStarsToUnlock: 0 },

  // ──────────── NĂM 2 — CƠ SỞ NGÀNH ────────────
  { category: 'curriculum', id: 'I2.1', title: 'Cấu trúc dữ liệu & Giải thuật', yearLevel: 2, subject: 'cau-truc-du-lieu', scenarioIds: [], minStarsToUnlock: 5, prerequisites: ['I1.1'] },
  { category: 'curriculum', id: 'I2.2', title: 'Lập trình hướng đối tượng (Java)', yearLevel: 2, subject: 'oop',           scenarioIds: [], minStarsToUnlock: 5, prerequisites: ['I1.1'] },
  { category: 'curriculum', id: 'I2.3', title: 'Cơ sở dữ liệu (SQL)',         yearLevel: 2, subject: 'co-so-du-lieu',   scenarioIds: [], minStarsToUnlock: 5 },
  { category: 'curriculum', id: 'I2.4', title: 'Mạng máy tính',               yearLevel: 2, subject: 'mang-may-tinh',    scenarioIds: [], minStarsToUnlock: 5 },
  { category: 'curriculum', id: 'I2.5', title: 'Thiết kế Web (HTML/CSS/JS)',  yearLevel: 2, subject: 'thiet-ke-web',    scenarioIds: [], minStarsToUnlock: 5 },

  // ──────────── NĂM 3 — CHUYÊN NGÀNH ────────────
  { category: 'curriculum', id: 'I3.1', title: 'Kỹ thuật phần mềm',           yearLevel: 3, subject: 'ky-thuat-pm',     scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I2.2'] },
  { category: 'curriculum', id: 'I3.2', title: 'Phân tích & Thiết kế hệ thống', yearLevel: 3, subject: 'phan-tich-tk',  scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I3.1'] },
  { category: 'curriculum', id: 'I3.3', title: 'Trí tuệ nhân tạo',            yearLevel: 3, subject: 'tri-tue-nhan-tao', scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I2.1'] },
  { category: 'curriculum', id: 'I3.4', title: 'Machine Learning',            yearLevel: 3, subject: 'machine-learning', scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I3.3'] },
  { category: 'curriculum', id: 'I3.5', title: 'Web Full-stack (Node + React)', yearLevel: 3, subject: 'web-fullstack',  scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I2.5'] },
  { category: 'curriculum', id: 'I3.6', title: 'Mobile dev (Android/iOS)',    yearLevel: 3, subject: 'mobile-dev',      scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I2.2'] },
  { category: 'curriculum', id: 'I3.7', title: 'DevOps & Cloud',              yearLevel: 3, subject: 'devops',          scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I2.4'] },
  { category: 'curriculum', id: 'I3.8', title: 'An toàn thông tin',           yearLevel: 3, subject: 'an-toan-thong-tin', scenarioIds: [], minStarsToUnlock: 12, prerequisites: ['I2.4'] },

  // ──────────── NĂM 4 — TÍCH HỢP ────────────
  { category: 'curriculum', id: 'I4.1', title: 'Kiến trúc phần mềm + Patterns', yearLevel: 4, subject: 'kien-truc-phan-mem', scenarioIds: [], minStarsToUnlock: 20, prerequisites: ['I3.1'] },
  { category: 'curriculum', id: 'I4.2', title: 'Điện toán đám mây (AWS/GCP)',   yearLevel: 4, subject: 'dam-may',         scenarioIds: [], minStarsToUnlock: 20, prerequisites: ['I3.7'] },
  { category: 'curriculum', id: 'I4.3', title: 'Khoa học dữ liệu',              yearLevel: 4, subject: 'data-science',    scenarioIds: [], minStarsToUnlock: 20, prerequisites: ['I3.4'] },
  { category: 'curriculum', id: 'I4.4', title: 'Blockchain & Web3',             yearLevel: 4, subject: 'block-chain',     scenarioIds: [], minStarsToUnlock: 20 },
  { category: 'curriculum', id: 'I4.5', title: 'Khoá luận CNTT',                yearLevel: 4, subject: 'khoa-luan-it',    scenarioIds: [], minStarsToUnlock: 24, prerequisites: ['I3.1', 'I3.4'], hasCertificate: true },

  // ──────────── PRACTICE / SKILL ────────────
  { category: 'practice', id: 'IP01', title: 'Startup Lab — Khởi nghiệp số',    subject: 'startup-lab',  scenarioIds: [], minStarsToUnlock: 18, icon: '🚀' },
  { category: 'practice', id: 'IP02', title: 'Hackathon 48h',                   subject: 'hackathon',    scenarioIds: [], minStarsToUnlock: 12, icon: '⚡' },
  { category: 'practice', id: 'IP03', title: 'CTF Lab — Capture The Flag',     subject: 'ctf-lab',       scenarioIds: [], minStarsToUnlock: 18, icon: '🚩' },
  { category: 'practice', id: 'IP04', title: 'Open Source Contribution Lab',  subject: 'open-source',   scenarioIds: [], minStarsToUnlock: 12, icon: '🐙' },

  // ──────────── CAREER ────────────
  { category: 'career', id: 'IC01', title: 'Software Engineer',                 subject: 'career', scenarioIds: [], minStarsToUnlock: 18, icon: '👨‍💻' },
  { category: 'career', id: 'IC02', title: 'Data Scientist',                    subject: 'career', scenarioIds: [], minStarsToUnlock: 18, icon: '📊' },
  { category: 'career', id: 'IC03', title: 'DevOps Engineer',                   subject: 'career', scenarioIds: [], minStarsToUnlock: 18, icon: '☁️' },
  { category: 'career', id: 'IC04', title: 'Security Engineer',                 subject: 'career', scenarioIds: [], minStarsToUnlock: 24, icon: '🔒' },
  { category: 'career', id: 'IC05', title: 'Mobile Developer',                  subject: 'career', scenarioIds: [], minStarsToUnlock: 18, icon: '📱' },
  { category: 'career', id: 'IC06', title: 'AI / ML Engineer',                  subject: 'career', scenarioIds: [], minStarsToUnlock: 24, icon: '🤖' },

  // ──────────── GAMES ────────────
  { category: 'game', id: 'IG01', title: 'Code Race — Giải thuật 5 phút',       subject: 'game', scenarioIds: [], minStarsToUnlock: 6, icon: '⚡' },
  { category: 'game', id: 'IG02', title: 'Bug Hunt — Debug speed',              subject: 'game', scenarioIds: [], minStarsToUnlock: 6, icon: '🐛' },
  { category: 'game', id: 'IG03', title: 'SQL Detective',                       subject: 'game', scenarioIds: [], minStarsToUnlock: 12, icon: '🔎' },
  { category: 'game', id: 'IG04', title: 'Kafka — System Design battle',        subject: 'game', scenarioIds: [], minStarsToUnlock: 18, icon: '⚔️' },
];
