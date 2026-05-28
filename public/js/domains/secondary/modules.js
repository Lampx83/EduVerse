// ============================================================
// Trường THCS — Module list
// ============================================================
// yearLevel = thứ tự lớp trong cấp (1→Lớp 6 … 4→Lớp 9), khớp DOMAIN.yearLabels.
// Hiện có nội dung môn Toán & Ngữ văn (quiz gốc); môn khác bổ sung dần.
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ───────── Môn Toán ─────────
  { category: 'curriculum', id: 'S6', title: 'Toán lớp 6', yearLevel: 1, subject: 'toan',
    scenarioIds: ['S6-toan-quiz'], knowledgeQuiz: 'S6-toan-quiz', minStarsToUnlock: 0,
    description: 'Số nguyên · phân số · số thập phân · ƯCLN/BCNN · tỉ số phần trăm · hình học trực quan.' },
  { category: 'curriculum', id: 'S7', title: 'Toán lớp 7', yearLevel: 2, subject: 'toan',
    scenarioIds: ['S7-toan-quiz'], knowledgeQuiz: 'S7-toan-quiz', minStarsToUnlock: 3, prerequisites: ['S6'],
    description: 'Số hữu tỉ · số thực · tỉ lệ thức · tam giác · thống kê & xác suất.' },
  { category: 'curriculum', id: 'S8', title: 'Toán lớp 8', yearLevel: 3, subject: 'toan',
    scenarioIds: ['S8-toan-quiz'], knowledgeQuiz: 'S8-toan-quiz', minStarsToUnlock: 6, prerequisites: ['S7'],
    description: 'Hằng đẳng thức · phương trình bậc nhất · định lí Pythagore · tứ giác · hàm số.' },
  { category: 'curriculum', id: 'S9', title: 'Toán lớp 9', yearLevel: 4, subject: 'toan',
    scenarioIds: ['S9-toan-quiz'], knowledgeQuiz: 'S9-toan-quiz', minStarsToUnlock: 9, prerequisites: ['S8'],
    description: 'Căn bậc hai · hệ phương trình · phương trình bậc hai · hệ thức lượng · đường tròn.' },

  // ───────── Môn Ngữ văn ─────────
  { category: 'curriculum', id: 'SV6', title: 'Ngữ văn lớp 6', yearLevel: 1, subject: 'ngu-van',
    scenarioIds: ['SV6-van-quiz'], knowledgeQuiz: 'SV6-van-quiz', minStarsToUnlock: 0,
    description: 'Truyện dân gian · thơ lục bát · ký · so sánh - nhân hoá - ẩn dụ · từ đơn/từ phức · từ láy.' },
  { category: 'curriculum', id: 'SV7', title: 'Ngữ văn lớp 7', yearLevel: 2, subject: 'ngu-van',
    scenarioIds: ['SV7-van-quiz'], knowledgeQuiz: 'SV7-van-quiz', minStarsToUnlock: 3, prerequisites: ['SV6'],
    description: 'Ca dao · tục ngữ · thành ngữ · từ Hán Việt · điệp ngữ · liệt kê · số từ · phó từ.' },
  { category: 'curriculum', id: 'SV8', title: 'Ngữ văn lớp 8', yearLevel: 3, subject: 'ngu-van',
    scenarioIds: ['SV8-van-quiz'], knowledgeQuiz: 'SV8-van-quiz', minStarsToUnlock: 6, prerequisites: ['SV7'],
    description: 'Truyện hiện thực (Lão Hạc, Tắt đèn) · thơ Đường luật · nói quá - nói giảm · câu ghép · trợ từ - thán từ.' },
  { category: 'curriculum', id: 'SV9', title: 'Ngữ văn lớp 9', yearLevel: 4, subject: 'ngu-van',
    scenarioIds: ['SV9-van-quiz'], knowledgeQuiz: 'SV9-van-quiz', minStarsToUnlock: 9, prerequisites: ['SV8'],
    description: 'Truyện Kiều · truyện - thơ hiện đại · phương châm hội thoại · cách dẫn trực tiếp/gián tiếp · nghĩa hàm ý.' },
];
