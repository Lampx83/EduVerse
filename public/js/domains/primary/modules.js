// ============================================================
// Trường Tiểu học — Module list
// ============================================================
// yearLevel = lớp (1–5). Mỗi lớp đủ 9–10 môn theo GDPT 2018.
// knowledgeQuiz trỏ tới scenario trong scenarios/primary-math.js
// hoặc scenarios/primary-lop2.js (cho Lớp 2 đầy đủ 2 học kỳ).
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ─────────── Lớp 1 ───────────
  { category: 'curriculum', id: 'P1', title: 'Toán lớp 1', yearLevel: 1, subject: 'toan',
    scenarioIds: ['P1-toan-quiz'], knowledgeQuiz: 'P1-toan-quiz', minStarsToUnlock: 0,
    description: 'Đếm, so sánh số trong 100; cộng trừ không nhớ; hình cơ bản.' },

  // ─────────── Lớp 2 — Đầy đủ 9 môn × 2 học kỳ ───────────
  // 1. Toán
  { category: 'curriculum', id: 'P2', title: 'Toán lớp 2', yearLevel: 2, subject: 'toan',
    scenarioIds: ['P2-toan-quiz'], knowledgeQuiz: 'P2-toan-quiz',
    minStarsToUnlock: 3, prerequisites: ['P1'],
    description: 'HK1: Cộng trừ có nhớ; bảng nhân 2-5. HK2: Bảng chia; đơn vị đo; số đến 1000; tiền VN; chu vi.' },

  // 2. Tiếng Việt
  { category: 'curriculum', id: 'P2TV', title: 'Tiếng Việt lớp 2', yearLevel: 2, subject: 'tieng-viet',
    scenarioIds: ['P2TV-hk1-quiz', 'P2TV-hk2-quiz'], knowledgeQuiz: 'P2TV-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Đọc-hiểu, từ chỉ sự vật/hoạt động/đặc điểm, câu Ai là gì?. HK2: Dấu câu, mở rộng vốn từ, viết đoạn 3-5 câu.' },

  // 3. Tiếng Anh
  { category: 'curriculum', id: 'P2TA', title: 'Tiếng Anh lớp 2', yearLevel: 2, subject: 'tieng-anh',
    scenarioIds: ['P2TA-hk1-quiz', 'P2TA-hk2-quiz'], knowledgeQuiz: 'P2TA-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Greetings, numbers 1-10, colors, body, family. HK2: Animals, food, classroom, weekdays, weather.' },

  // 4. Giáo dục thể chất
  { category: 'curriculum', id: 'P2GDTC', title: 'GDTC lớp 2', yearLevel: 2, subject: 'gdtc',
    scenarioIds: ['P2GDTC-hk1-quiz', 'P2GDTC-hk2-quiz'], knowledgeQuiz: 'P2GDTC-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Đội hình đội ngũ, bài thể dục phát triển chung, đi-chạy-nhảy. HK2: Ném-bắt bóng, tâng cầu, trò chơi dân gian, an toàn tập luyện.' },

  // 5. Âm nhạc
  { category: 'curriculum', id: 'P2AN', title: 'Âm nhạc lớp 2', yearLevel: 2, subject: 'am-nhac',
    scenarioIds: ['P2AN-hk1-quiz', 'P2AN-hk2-quiz'], knowledgeQuiz: 'P2AN-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Bài hát thiếu nhi, cao độ-trường độ, tiết tấu. HK2: Đọc nhạc Đô-Rê-Mi, vận động theo nhạc, dụng cụ trống-mõ.' },

  // 6. Mỹ thuật
  { category: 'curriculum', id: 'P2MT', title: 'Mĩ thuật lớp 2', yearLevel: 2, subject: 'my-thuat',
    scenarioIds: ['P2MT-hk1-quiz', 'P2MT-hk2-quiz'], knowledgeQuiz: 'P2MT-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Màu cơ bản, trang trí, vẽ đề tài gia đình-trường học, nặn đất. HK2: Xé dán giấy, tranh dân gian Đông Hồ, đề tài thiên nhiên.' },

  // 7. Hoạt động trải nghiệm
  { category: 'curriculum', id: 'P2HDTN', title: 'Hoạt động trải nghiệm lớp 2', yearLevel: 2, subject: 'htn',
    scenarioIds: ['P2HDTN-hk1-quiz', 'P2HDTN-hk2-quiz'], knowledgeQuiz: 'P2HDTN-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Tự phục vụ, ứng xử trong gia đình-nhà trường. HK2: An toàn giao thông, môi trường, làm việc nhà, định hướng nghề.' },

  // 8. Tự nhiên & Xã hội
  { category: 'curriculum', id: 'P2TNXH', title: 'Tự nhiên & Xã hội lớp 2', yearLevel: 2, subject: 'tnxh',
    scenarioIds: ['P2TNXH-hk1-quiz', 'P2TNXH-hk2-quiz'], knowledgeQuiz: 'P2TNXH-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Gia đình, trường học, cộng đồng địa phương. HK2: Thực-động vật, cơ thể người (vận động-hô hấp-tiêu hoá), Mặt Trời-Mặt Trăng.' },

  // 9. Đạo đức
  { category: 'curriculum', id: 'P2DD', title: 'Đạo đức lớp 2', yearLevel: 2, subject: 'dao-duc',
    scenarioIds: ['P2DD-hk1-quiz', 'P2DD-hk2-quiz'], knowledgeQuiz: 'P2DD-hk1-quiz',
    minStarsToUnlock: 0,
    description: 'HK1: Yêu lao động, kính trọng thầy cô, yêu ông bà cha mẹ, giúp bạn. HK2: Trung thực, bảo vệ của công, yêu quê hương, vệ sinh công cộng.' },

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
