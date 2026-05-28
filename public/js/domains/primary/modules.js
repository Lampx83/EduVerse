// ============================================================
// Trường Tiểu học — Module list
// ============================================================
// yearLevel = lớp (1–5). Hiện có nội dung môn Toán (quiz gốc);
// các môn khác sẽ bổ sung dần khi có tài liệu tham khảo.
// knowledgeQuiz trỏ tới scenario trong scenarios/primary-math.js.
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  { category: 'curriculum', id: 'P1', title: 'Toán lớp 1', yearLevel: 1, subject: 'toan',
    scenarioIds: ['P1-toan-quiz'], knowledgeQuiz: 'P1-toan-quiz', minStarsToUnlock: 0,
    description: 'Đếm, so sánh số trong 100; cộng trừ không nhớ; hình cơ bản.' },
  { category: 'curriculum', id: 'P2', title: 'Toán lớp 2', yearLevel: 2, subject: 'toan',
    scenarioIds: ['P2-toan-quiz'], knowledgeQuiz: 'P2-toan-quiz', minStarsToUnlock: 3, prerequisites: ['P1'],
    description: 'Cộng trừ có nhớ; bảng nhân/chia 2–5; đơn vị đo; số đến 1000.' },
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
