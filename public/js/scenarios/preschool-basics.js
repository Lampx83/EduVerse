// ============================================================
// Trường Mầm non — Làm quen Toán & Nhận biết (GỐC, thân thiện trẻ 3–5 tuổi)
// ============================================================
// Hoạt động trực quan bằng emoji: đếm, màu sắc, hình khối, so sánh.
// id prefix N1-/N2-/N3- (Mầm/Chồi/Lá).
// ============================================================

const q = (id, title, yearLevel, questions) => ({
  id, title, kind: 'quiz', yearLevel, subject: 'lam-quen-toan', difficulty: 1, questions,
});
const m = (id, title, yearLevel, leftItems, rightItems, correctPairs, description) => ({
  id, title, kind: 'drag-match', yearLevel, subject: 'lam-quen-toan', difficulty: 1,
  description, leftItems, rightItems, correctPairs,
});

// ── Mầm (3 tuổi) ──
export const N1_QUIZ = q('N1-quiz', 'Mầm · Đếm & Màu sắc', 1, [
  { stem: '🍎🍎🍎 — Có mấy quả táo?', choices: ['2', '3', '4'], answer: 1, explanation: 'Đếm: 1, 2, 3 → có 3 quả táo.' },
  { stem: 'Quả chuối 🍌 thường có màu gì?', choices: ['Đỏ', 'Vàng', 'Xanh dương'], answer: 1, explanation: 'Chuối chín có màu vàng.' },
  { stem: '🐟🐟 — Có mấy con cá?', choices: ['1', '2', '3'], answer: 1, explanation: 'Có 2 con cá.' },
  { stem: 'Ông mặt trời ☀️ có màu gì?', choices: ['Vàng', 'Đen', 'Tím'], answer: 0, explanation: 'Mặt trời màu vàng, ấm áp.' },
  { stem: '✋ Một bàn tay có mấy ngón?', choices: ['4', '5', '6'], answer: 1, explanation: 'Một bàn tay có 5 ngón.' },
]);
export const N1_MATCH = m('N1-match', 'Mầm · Ghép màu với đồ vật', 1,
  [{ id: 'do', label: 'Màu đỏ' }, { id: 'vang', label: 'Màu vàng' }, { id: 'xanh', label: 'Màu xanh lá' }, { id: 'cam', label: 'Màu cam' }],
  [{ id: 'apple', label: '🍎 quả táo' }, { id: 'banana', label: '🍌 quả chuối' }, { id: 'leaf', label: '🍃 chiếc lá' }, { id: 'carrot', label: '🥕 củ cà rốt' }],
  [['do', 'apple'], ['vang', 'banana'], ['xanh', 'leaf'], ['cam', 'carrot']],
  'Bấm tên màu rồi bấm đồ vật có màu đó.');

// ── Chồi (4 tuổi) ──
export const N2_QUIZ = q('N2-quiz', 'Chồi · Đếm tới 10 & Hình khối', 2, [
  { stem: '🚗🚗🚗🚗 — Có mấy chiếc ô tô?', choices: ['3', '4', '5'], answer: 1, explanation: 'Đếm: 1, 2, 3, 4 → 4 ô tô.' },
  { stem: 'Quả bóng giống hình gì?', choices: ['Hình vuông', 'Hình tròn', 'Hình tam giác'], answer: 1, explanation: 'Quả bóng ⚽ có dạng hình tròn.' },
  { stem: '🌟🌟🌟🌟🌟 — Có mấy ngôi sao?', choices: ['4', '5', '6'], answer: 1, explanation: 'Có 5 ngôi sao.' },
  { stem: 'Số nào lớn hơn: 7 hay 4?', choices: ['7', '4'], answer: 0, explanation: '7 lớn hơn 4.' },
  { stem: 'Hình tam giác có mấy cạnh? 🔺', choices: ['2', '3', '4'], answer: 1, explanation: 'Hình tam giác có 3 cạnh.' },
]);
export const N2_MATCH = m('N2-match', 'Chồi · Ghép hình với tên', 2,
  [{ id: 'tron', label: 'Hình tròn' }, { id: 'vuong', label: 'Hình vuông' }, { id: 'tamgiac', label: 'Hình tam giác' }, { id: 'sao', label: 'Ngôi sao' }, { id: 'tim', label: 'Trái tim' }],
  [{ id: 'c', label: '⭕' }, { id: 'sq', label: '⬛' }, { id: 'tri', label: '🔺' }, { id: 'st', label: '⭐' }, { id: 'hrt', label: '❤️' }],
  [['tron', 'c'], ['vuong', 'sq'], ['tamgiac', 'tri'], ['sao', 'st'], ['tim', 'hrt']],
  'Bấm tên hình rồi bấm hình tương ứng.');

// ── Lá (5 tuổi) — chuẩn bị vào lớp 1 ──
export const N3_QUIZ = q('N3-quiz', 'Lá · So sánh & Sẵn sàng vào lớp 1', 3, [
  { stem: 'Đếm tiếp: 1, 2, 3, … số nào?', choices: ['4', '5', '6'], answer: 0, explanation: 'Sau 3 là 4.' },
  { stem: 'Nhóm nào NHIỀU kẹo hơn: 🍬🍬🍬 hay 🍬🍬?', choices: ['Nhóm 3 kẹo', 'Nhóm 2 kẹo'], answer: 0, explanation: '3 nhiều hơn 2.' },
  { stem: '🖐️🖐️ — Hai bàn tay có tất cả mấy ngón?', choices: ['5', '10', '8'], answer: 1, explanation: '5 + 5 = 10 ngón.' },
  { stem: 'Số 0 có nghĩa là gì?', choices: ['Không có gì', 'Rất nhiều', 'Một'], answer: 0, explanation: 'Số 0 nghĩa là không có cái nào.' },
  { stem: 'Sau số 9 là số mấy?', choices: ['8', '10', '11'], answer: 1, explanation: 'Sau 9 là 10.' },
]);
export const N3_MATCH = m('N3-match', 'Lá · Ghép số với số lượng', 3,
  [{ id: 'n1', label: '1' }, { id: 'n2', label: '2' }, { id: 'n3', label: '3' }, { id: 'n4', label: '4' }, { id: 'n5', label: '5' }],
  [{ id: 's1', label: '🍎' }, { id: 's2', label: '🍎🍎' }, { id: 's3', label: '🍎🍎🍎' }, { id: 's4', label: '🍎🍎🍎🍎' }, { id: 's5', label: '🍎🍎🍎🍎🍎' }],
  [['n1', 's1'], ['n2', 's2'], ['n3', 's3'], ['n4', 's4'], ['n5', 's5']],
  'Bấm con số rồi bấm nhóm có đúng số quả táo.');

export const PRESCHOOL_SCENARIOS = {
  [N1_QUIZ.id]: N1_QUIZ, [N1_MATCH.id]: N1_MATCH,
  [N2_QUIZ.id]: N2_QUIZ, [N2_MATCH.id]: N2_MATCH,
  [N3_QUIZ.id]: N3_QUIZ, [N3_MATCH.id]: N3_MATCH,
};
