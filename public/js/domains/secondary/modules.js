// ============================================================
// Trường THCS — Module list
// ============================================================
// yearLevel = thứ tự lớp trong cấp (1→Lớp 6 … 4→Lớp 9), khớp DOMAIN.yearLabels.
// Hiện có nội dung môn Toán (quiz gốc); môn khác bổ sung dần.
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
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
];
