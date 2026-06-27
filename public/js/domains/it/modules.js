// ============================================================
// IT domain — Module list (skeleton, 4 năm CS/SE)
// ============================================================
// Lộ trình mô phỏng chương trình Cử nhân CNTT/Khoa học máy tính
// VN (UET, NEU-CNTT, Bách Khoa, FPT…). Skeleton — quiz bổ sung dần.
//
// Quy ước (polish 2026-06):
//   - `category: 'curriculum'`:
//       Chưa có scenarios riêng → để `scenarioIds: []` + chỉ định
//       `knowledgeQuiz: 'quiz-stub-<id>'` để engine biết fallback về stub
//       chuẩn (không hiện "Quiz đang phát triển" trần trụi). Thêm
//       `placeholder: true` để FE có thể hiện badge "Coming soon".
//
//   - `category: 'practice'` (IP01-04) / `'career'` (IC01-06):
//       Trỏ thẳng tới site thực hành (`directHref`) thay vì scenarioIds.
//       Engine bỏ qua scenarioIds nếu có directHref. (Lệch chuẩn có chủ ý —
//       IT modules là practice sites/labs, không phải bài học truyền thống.)
//
//   - `category: 'game'`: giữ scenarioIds rỗng + placeholder cho tới khi
//       game riêng được wire (đa số đã có trang mini-game ngoài).
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ──────────── NĂM 1 — ĐẠI CƯƠNG ────────────
  { category: 'curriculum', id: 'I1.1', title: 'Nhập môn lập trình (Python)', yearLevel: 1, subject: 'lap-trinh-co-ban',   scenarioIds: ['I1.1-python-quiz'],       knowledgeQuiz: 'I1.1-python-quiz',       minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.2', title: 'Toán rời rạc',                yearLevel: 1, subject: 'toan-roi-rac',       scenarioIds: ['I1.2-discrete-math-quiz'], knowledgeQuiz: 'I1.2-discrete-math-quiz', minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.3', title: 'Kiến trúc máy tính',          yearLevel: 1, subject: 'kien-truc-may-tinh', scenarioIds: ['I1.3-computer-arch-quiz'], knowledgeQuiz: 'I1.3-computer-arch-quiz', minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.4', title: 'Hệ điều hành (Linux căn bản)', yearLevel: 1, subject: 'he-dieu-hanh',      scenarioIds: ['I1.4-linux-quiz'],         knowledgeQuiz: 'I1.4-linux-quiz',         minStarsToUnlock: 0 },
  { category: 'curriculum', id: 'I1.5', title: 'Tiếng Anh CNTT',              yearLevel: 1, subject: 'tieng-anh-it',       scenarioIds: ['I1.5-it-english-quiz'],    knowledgeQuiz: 'I1.5-it-english-quiz',    minStarsToUnlock: 0 },

  // ──────────── NĂM 2 — CƠ SỞ NGÀNH ────────────
  { category: 'curriculum', id: 'I2.1', title: 'Cấu trúc dữ liệu & Giải thuật', yearLevel: 2, subject: 'cau-truc-du-lieu', scenarioIds: [], knowledgeQuiz: 'quiz-stub-I2.1', placeholder: true, minStarsToUnlock: 5, prerequisites: ['I1.1'] },
  { category: 'curriculum', id: 'I2.2', title: 'Lập trình hướng đối tượng (Java)', yearLevel: 2, subject: 'oop',           scenarioIds: [], knowledgeQuiz: 'quiz-stub-I2.2', placeholder: true, minStarsToUnlock: 5, prerequisites: ['I1.1'] },
  { category: 'curriculum', id: 'I2.3', title: 'Cơ sở dữ liệu (SQL)',         yearLevel: 2, subject: 'co-so-du-lieu',   scenarioIds: [], knowledgeQuiz: 'quiz-stub-I2.3', placeholder: true, minStarsToUnlock: 5 },
  { category: 'curriculum', id: 'I2.4', title: 'Mạng máy tính',               yearLevel: 2, subject: 'mang-may-tinh',    scenarioIds: [], knowledgeQuiz: 'quiz-stub-I2.4', placeholder: true, minStarsToUnlock: 5 },
  { category: 'curriculum', id: 'I2.5', title: 'Thiết kế Web (HTML/CSS/JS)',  yearLevel: 2, subject: 'thiet-ke-web',    scenarioIds: [], knowledgeQuiz: 'quiz-stub-I2.5', placeholder: true, minStarsToUnlock: 5 },

  // ──────────── NĂM 3 — CHUYÊN NGÀNH ────────────
  { category: 'curriculum', id: 'I3.1', title: 'Kỹ thuật phần mềm',           yearLevel: 3, subject: 'ky-thuat-pm',     scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.1', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I2.2'] },
  { category: 'curriculum', id: 'I3.2', title: 'Phân tích & Thiết kế hệ thống', yearLevel: 3, subject: 'phan-tich-tk',  scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.2', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I3.1'] },
  { category: 'curriculum', id: 'I3.3', title: 'Trí tuệ nhân tạo',            yearLevel: 3, subject: 'tri-tue-nhan-tao', scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.3', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I2.1'] },
  { category: 'curriculum', id: 'I3.4', title: 'Machine Learning',            yearLevel: 3, subject: 'machine-learning', scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.4', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I3.3'] },
  { category: 'curriculum', id: 'I3.5', title: 'Web Full-stack (Node + React)', yearLevel: 3, subject: 'web-fullstack',  scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.5', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I2.5'] },
  { category: 'curriculum', id: 'I3.6', title: 'Mobile dev (Android/iOS)',    yearLevel: 3, subject: 'mobile-dev',      scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.6', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I2.2'] },
  { category: 'curriculum', id: 'I3.7', title: 'DevOps & Cloud',              yearLevel: 3, subject: 'devops',          scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.7', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I2.4'] },
  { category: 'curriculum', id: 'I3.8', title: 'An toàn thông tin',           yearLevel: 3, subject: 'an-toan-thong-tin', scenarioIds: [], knowledgeQuiz: 'quiz-stub-I3.8', placeholder: true, minStarsToUnlock: 12, prerequisites: ['I2.4'] },

  // ──────────── NĂM 4 — TÍCH HỢP ────────────
  { category: 'curriculum', id: 'I4.1', title: 'Kiến trúc phần mềm + Patterns', yearLevel: 4, subject: 'kien-truc-phan-mem', scenarioIds: [], knowledgeQuiz: 'quiz-stub-I4.1', placeholder: true, minStarsToUnlock: 20, prerequisites: ['I3.1'] },
  { category: 'curriculum', id: 'I4.2', title: 'Điện toán đám mây (AWS/GCP)',   yearLevel: 4, subject: 'dam-may',         scenarioIds: [], knowledgeQuiz: 'quiz-stub-I4.2', placeholder: true, minStarsToUnlock: 20, prerequisites: ['I3.7'] },
  { category: 'curriculum', id: 'I4.3', title: 'Khoa học dữ liệu',              yearLevel: 4, subject: 'data-science',    scenarioIds: [], knowledgeQuiz: 'quiz-stub-I4.3', placeholder: true, minStarsToUnlock: 20, prerequisites: ['I3.4'] },
  { category: 'curriculum', id: 'I4.4', title: 'Blockchain & Web3',             yearLevel: 4, subject: 'block-chain',     scenarioIds: [], knowledgeQuiz: 'quiz-stub-I4.4', placeholder: true, minStarsToUnlock: 20 },
  { category: 'curriculum', id: 'I4.5', title: 'Khoá luận CNTT',                yearLevel: 4, subject: 'khoa-luan-it',    scenarioIds: [], knowledgeQuiz: 'quiz-stub-I4.5', placeholder: true, minStarsToUnlock: 24, prerequisites: ['I3.1', 'I3.4'], hasCertificate: true },

  // ──────────── PRACTICE / SKILL ────────────
  { category: 'practice', id: 'IP01', title: 'Startup Lab — Khởi nghiệp số',    subject: 'startup-lab',  scenarioIds: [], directHref: '/it-code-lab.html?contest=325049',  minStarsToUnlock: 18, icon: '🚀' },
  { category: 'practice', id: 'IP02', title: 'Hackathon 48h',                   subject: 'hackathon',    scenarioIds: [], directHref: '/it-code-lab.html?contest=511768',  minStarsToUnlock: 12, icon: '⚡' },
  { category: 'practice', id: 'IP03', title: 'CTF Lab — Capture The Flag',     subject: 'ctf-lab',       scenarioIds: [], directHref: '/it-ctf-web.html',                  minStarsToUnlock: 18, icon: '🚩' },
  { category: 'practice', id: 'IP04', title: 'Open Source Contribution Lab',  subject: 'open-source',   scenarioIds: [], directHref: '/it-code-lab.html?contest=325049',  minStarsToUnlock: 12, icon: '🐙' },

  // ──────────── CAREER ────────────
  { category: 'career', id: 'IC01', title: 'Software Engineer',                 subject: 'career', scenarioIds: [], directHref: '/it-code-lab.html?contest=255760', minStarsToUnlock: 18, icon: '👨‍💻' },
  { category: 'career', id: 'IC02', title: 'Data Scientist',                    subject: 'career', scenarioIds: [], directHref: '/it-sql-playground.html',          minStarsToUnlock: 18, icon: '📊' },
  { category: 'career', id: 'IC03', title: 'DevOps Engineer',                   subject: 'career', scenarioIds: [], directHref: '/it-code-lab.html?contest=325049', minStarsToUnlock: 18, icon: '☁️' },
  { category: 'career', id: 'IC04', title: 'Security Engineer',                 subject: 'career', scenarioIds: [], directHref: '/it-cipher-ctf.html',       minStarsToUnlock: 24, icon: '🔒' },
  { category: 'career', id: 'IC05', title: 'Mobile Developer',                  subject: 'career', scenarioIds: [], directHref: '/it-web-playground.html',   minStarsToUnlock: 18, icon: '📱' },
  { category: 'career', id: 'IC06', title: 'AI / ML Engineer',                  subject: 'career', scenarioIds: [], directHref: '/it-algo-viz.html',         minStarsToUnlock: 24, icon: '🤖' },

  // ──────────── GAMES ────────────
  { category: 'game', id: 'IG01', title: 'Code Race — Giải thuật 5 phút',       subject: 'game', scenarioIds: [], knowledgeQuiz: 'quiz-stub-IG01', placeholder: true, minStarsToUnlock: 6, icon: '⚡' },
  { category: 'game', id: 'IG02', title: 'Bug Hunt — Debug speed',              subject: 'game', scenarioIds: [], knowledgeQuiz: 'quiz-stub-IG02', placeholder: true, minStarsToUnlock: 6, icon: '🐛' },
  { category: 'game', id: 'IG03', title: 'SQL Detective',                       subject: 'game', scenarioIds: [], knowledgeQuiz: 'quiz-stub-IG03', placeholder: true, minStarsToUnlock: 12, icon: '🔎' },
  { category: 'game', id: 'IG04', title: 'Kafka — System Design battle',        subject: 'game', scenarioIds: [], knowledgeQuiz: 'quiz-stub-IG04', placeholder: true, minStarsToUnlock: 18, icon: '⚔️' },
];
