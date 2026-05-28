// ============================================================
// Trường Mầm non — Module list (Mầm/Chồi/Lá)
// ============================================================
// yearLevel = độ tuổi trong cấp (1→Mầm 3t, 2→Chồi 4t, 3→Lá 5t).
// Hiện có hoạt động Làm quen với Toán (quiz + ghép cặp trực quan).
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  { category: 'curriculum', id: 'N1', title: 'Mầm (3 tuổi) · Làm quen Toán', yearLevel: 1, subject: 'lam-quen-toan',
    scenarioIds: ['N1-quiz', 'N1-match'], knowledgeQuiz: 'N1-quiz', minStarsToUnlock: 0,
    description: 'Đếm 1–5 · nhận biết màu sắc qua đồ vật quen thuộc.' },
  { category: 'curriculum', id: 'N2', title: 'Chồi (4 tuổi) · Đếm & Hình khối', yearLevel: 2, subject: 'lam-quen-toan',
    scenarioIds: ['N2-quiz', 'N2-match'], knowledgeQuiz: 'N2-quiz', minStarsToUnlock: 0, prerequisites: ['N1'],
    description: 'Đếm tới 10 · nhận biết hình tròn/vuông/tam giác.' },
  { category: 'curriculum', id: 'N3', title: 'Lá (5 tuổi) · Sẵn sàng vào lớp 1', yearLevel: 3, subject: 'lam-quen-toan',
    scenarioIds: ['N3-quiz', 'N3-match'], knowledgeQuiz: 'N3-quiz', minStarsToUnlock: 0, prerequisites: ['N2'],
    description: 'So sánh nhiều/ít · đếm tới 20 · ghép số với số lượng.' },
];
