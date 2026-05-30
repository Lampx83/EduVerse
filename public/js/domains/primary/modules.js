// ============================================================
// Trường Tiểu học — Module list
// ============================================================
// yearLevel = lớp (1–5). Lớp 2 đầy đủ 9 môn × 36 tuần (HK1: T1-18,
// HK2: T19-36, T22 nghỉ Tết) theo GDPT 2018.
// Module loader tự liệt scenarios theo prefix ID, không cần liệt
// tất cả 36 IDs vào scenarioIds. knowledgeQuiz trỏ tuần 1 để mở
// khoá module.
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ─────────── Lớp 1 ───────────
  { category: 'curriculum', id: 'P1', title: 'Toán lớp 1', yearLevel: 1, subject: 'toan',
    scenarioIds: ['P1-toan-quiz'], knowledgeQuiz: 'P1-toan-quiz', minStarsToUnlock: 0,
    description: 'Đếm, so sánh số trong 100; cộng trừ không nhớ; hình cơ bản.' },

  // ─────────── Lớp 2 — Đầy đủ 9 môn × 36 tuần ───────────
  // 1. Toán (5 tiết/tuần)
  { category: 'curriculum', id: 'P2', title: 'Toán lớp 2', yearLevel: 2, subject: 'toan',
    scenarioIds: ['P2-w01-quiz'], knowledgeQuiz: 'P2-w01-quiz',
    minStarsToUnlock: 3, prerequisites: ['P1'],
    description: '36 tuần (HK1: số đến 100, cộng-trừ có nhớ, dm-m-kg, hình tứ giác. HK2: bảng nhân/chia 2-5, số đến 1000, lít, tiền VN, chu vi).' },

  // 2. Tiếng Việt (10 tiết/tuần — nhiều tiết nhất)
  { category: 'curriculum', id: 'P2TV', title: 'Tiếng Việt lớp 2', yearLevel: 2, subject: 'tieng-viet',
    scenarioIds: ['P2TV-w01-quiz'], knowledgeQuiz: 'P2TV-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: ôn âm vần, tập đọc, từ loại, mẫu câu Ai-là-gì/làm-gì/thế-nào. HK2: dấu câu, vốn từ thời tiết-Bác Hồ-cây cối-quê hương, viết đoạn 3-5 câu).' },

  // 3. Tiếng Anh (tự chọn, 2-4 tiết/tuần)
  { category: 'curriculum', id: 'P2TA', title: 'Tiếng Anh lớp 2', yearLevel: 2, subject: 'tieng-anh',
    scenarioIds: ['P2TA-w01-quiz'], knowledgeQuiz: 'P2TA-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: greetings, numbers, colors, body, family, classroom. HK2: animals, food, weather, days, toys, routines, likes).' },

  // 4. Giáo dục thể chất (2 tiết/tuần)
  { category: 'curriculum', id: 'P2GDTC', title: 'GDTC lớp 2', yearLevel: 2, subject: 'gdtc',
    scenarioIds: ['P2GDTC-w01-quiz'], knowledgeQuiz: 'P2GDTC-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: đội hình đội ngũ, bài thể dục PTC, đi-chạy-nhảy, trò chơi. HK2: nhảy dây, tâng cầu, ném-bắt bóng, trò chơi dân gian, an toàn).' },

  // 5. Âm nhạc (1 tiết/tuần)
  { category: 'curriculum', id: 'P2AN', title: 'Âm nhạc lớp 2', yearLevel: 2, subject: 'am-nhac',
    scenarioIds: ['P2AN-w01-quiz'], knowledgeQuiz: 'P2AN-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: bài hát thiếu nhi, cao độ-trường độ, tiết tấu, nhạc cụ gõ. HK2: đọc nhạc Đô-Rê-Mi-Pha-Son, nhịp 2/4, nhạc cụ dân tộc).' },

  // 6. Mỹ thuật (1 tiết/tuần)
  { category: 'curriculum', id: 'P2MT', title: 'Mĩ thuật lớp 2', yearLevel: 2, subject: 'my-thuat',
    scenarioIds: ['P2MT-w01-quiz'], knowledgeQuiz: 'P2MT-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: yếu tố tạo hình, màu cơ bản, pha màu, vẽ đề tài quen thuộc, trang trí. HK2: xé dán, tranh Đông Hồ, vẽ phong cảnh, nặn đất, đề tài lễ).' },

  // 7. Hoạt động trải nghiệm (3 tiết/tuần)
  { category: 'curriculum', id: 'P2HDTN', title: 'Hoạt động trải nghiệm lớp 2', yearLevel: 2, subject: 'htn',
    scenarioIds: ['P2HDTN-w01-quiz'], knowledgeQuiz: 'P2HDTN-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: bản thân, gia đình, nhà trường, lễ phép. HK2: an toàn giao thông, môi trường, tiết kiệm, định hướng nghề nghiệp).' },

  // 8. Tự nhiên & Xã hội (2 tiết/tuần)
  { category: 'curriculum', id: 'P2TNXH', title: 'Tự nhiên & Xã hội lớp 2', yearLevel: 2, subject: 'tnxh',
    scenarioIds: ['P2TNXH-w01-quiz'], knowledgeQuiz: 'P2TNXH-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: gia đình, trường học, cộng đồng địa phương, ATGT. HK2: thực-động vật, cơ thể người, Trái Đất-Mặt Trời-Mặt Trăng, phương hướng).' },

  // 9. Đạo đức (1 tiết/tuần)
  { category: 'curriculum', id: 'P2DD', title: 'Đạo đức lớp 2', yearLevel: 2, subject: 'dao-duc',
    scenarioIds: ['P2DD-w01-quiz'], knowledgeQuiz: 'P2DD-w01-quiz',
    minStarsToUnlock: 0,
    description: '36 tuần (HK1: quý thời gian, lễ phép, yêu gia đình, giúp bạn, yêu lao động. HK2: trung thực, bảo vệ của công, yêu quê hương, lịch sự công cộng, tự lập).' },

  // ─────────── Lớp 3-5 ───────────
  { category: 'curriculum', id: 'P3', title: 'Toán lớp 3', yearLevel: 3, subject: 'toan',
    scenarioIds: ['P3-toan-quiz'], knowledgeQuiz: 'P3-toan-quiz', minStarsToUnlock: 6, prerequisites: ['P2'],
    description: 'Bảng nhân/chia 6–9; nhân chia ngoài bảng; chu vi; số đến 100 000.' },
  { category: 'curriculum', id: 'P4', title: 'Toán lớp 4', yearLevel: 4, subject: 'toan',
    scenarioIds: ['P4-toan-quiz'], knowledgeQuiz: 'P4-toan-quiz', minStarsToUnlock: 9, prerequisites: ['P3'],
    description: 'Phân số; dấu hiệu chia hết; diện tích; góc.' },
  { category: 'curriculum', id: 'P5', title: 'Toán lớp 5', yearLevel: 5, subject: 'toan',
    scenarioIds: ['P5-toan-quiz'], knowledgeQuiz: 'P5-toan-quiz', minStarsToUnlock: 12, prerequisites: ['P4'],
    description: 'Số thập phân; tỉ số phần trăm; diện tích & thể tích; vận tốc.' },
];
