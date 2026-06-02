// ============================================================
// Trường Mầm non — Module list (Mầm/Chồi/Lá)
// ============================================================
// yearLevel = độ tuổi trong cấp (1→Mầm 3t, 2→Chồi 4t, 3→Lá 5t).
// Hiện có hoạt động Làm quen với Toán (quiz + ghép cặp trực quan).
// ============================================================

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ── Basics cũ (đếm + match) ──
  // Mỗi module N1/N2/N3 thu thập scenarios qua prefix matching (s.id.startsWith('N1-')…)
  // → tự động bao gồm cả {basics: N1-quiz, N1-match} VÀ 36 tuần chủ đề (N1-w01 … N1-w36).
  { category: 'curriculum', id: 'N1', title: 'Mầm (3 tuổi) · 36 tuần + Làm quen Toán', yearLevel: 1, subject: 'lam-quen-toan',
    scenarioIds: ['N1-quiz', 'N1-match', 'N1-w01'], knowledgeQuiz: 'N1-quiz', minStarsToUnlock: 0,
    description: '36 tuần chủ đề (trường mầm non, bản thân, gia đình, nghề, động vật, Tết, thực vật, giao thông, nước, quê hương) + Đếm 1–5, nhận biết màu.' },
  { category: 'curriculum', id: 'N2', title: 'Chồi (4 tuổi) · 36 tuần + Hình khối', yearLevel: 2, subject: 'lam-quen-toan',
    scenarioIds: ['N2-quiz', 'N2-match', 'N2-w01'], knowledgeQuiz: 'N2-quiz', minStarsToUnlock: 0, prerequisites: ['N1'],
    description: '36 tuần chủ đề (nâng cấp Mầm) + Đếm tới 10, hình tròn/vuông/tam giác, từ vựng phong phú.' },
  { category: 'curriculum', id: 'N3', title: 'Lá (5 tuổi) · 36 tuần + Sẵn sàng vào lớp 1', yearLevel: 3, subject: 'lam-quen-toan',
    scenarioIds: ['N3-quiz', 'N3-match', 'N3-w01'], knowledgeQuiz: 'N3-quiz', minStarsToUnlock: 0, prerequisites: ['N2'],
    description: '36 tuần chủ đề + So sánh nhiều/ít, đếm tới 20, cộng-trừ trong 5, hình khối 3D đơn giản.' },
];
