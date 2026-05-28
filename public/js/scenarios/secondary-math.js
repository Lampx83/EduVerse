// ============================================================
// Trường THCS — Toán lớp 6–9 (câu hỏi GỐC)
// ============================================================
// Tự soạn theo Chương trình GDPT 2018 môn Toán THCS (tham khảo, KHÔNG
// sao chép SGK). id prefix S6-/S7-/S8-/S9- khớp module loader.
// ============================================================

export const S6_TOAN = {
  id: 'S6-toan-quiz', title: 'Lớp 6 · Toán — Số nguyên, phân số, tỉ số',
  kind: 'quiz', yearLevel: 1, subject: 'toan', difficulty: 2,
  skillsTrained: ['so-nguyen', 'phan-so', 'uoc-boi', 'ti-so-phan-tram'],
  questions: [
    { stem: '(−5) + 8 = ?', choices: ['−3', '3', '13', '−13'], answer: 1, explanation: 'Cộng hai số khác dấu: 8 − 5 = 3, mang dấu của số lớn hơn (dương).' },
    { stem: '(−7) − 3 = ?', choices: ['−4', '4', '−10', '10'], answer: 2, explanation: '(−7) − 3 = (−7) + (−3) = −10.' },
    { stem: '2/3 + 1/6 = ?', choices: ['3/9', '5/6', '1/2', '3/6'], answer: 1, explanation: 'Quy đồng: 2/3 = 4/6; 4/6 + 1/6 = 5/6.' },
    { stem: 'ƯCLN(12, 18) = ?', choices: ['2', '3', '6', '36'], answer: 2, explanation: '12 = 2²·3, 18 = 2·3² → ƯCLN = 2·3 = 6.' },
    { stem: 'BCNN(4, 6) = ?', choices: ['12', '24', '10', '6'], answer: 0, explanation: '4 = 2², 6 = 2·3 → BCNN = 2²·3 = 12.' },
    { stem: 'Số thập phân 0,25 viết thành phân số tối giản là?', choices: ['25/10', '1/4', '2/5', '1/2'], answer: 1, explanation: '0,25 = 25/100 = 1/4.' },
    { stem: 'Số đối của −9 là?', choices: ['9', '−9', '1/9', '0'], answer: 0, explanation: 'Số đối của −9 là 9 (vì −9 + 9 = 0).' },
    { stem: '3² = ?', choices: ['6', '9', '8', '5'], answer: 1, explanation: '3² = 3 × 3 = 9.' },
    { stem: 'Làm tròn 3,67 đến hàng phần mười?', choices: ['3,6', '3,7', '4,0', '3,67'], answer: 1, explanation: 'Chữ số hàng phần trăm là 7 ≥ 5 → làm tròn lên: 3,7.' },
    { stem: '15% của 80 bằng?', choices: ['8', '12', '15', '20'], answer: 1, explanation: '80 × 15 : 100 = 12.' },
  ],
};

export const S7_TOAN = {
  id: 'S7-toan-quiz', title: 'Lớp 7 · Toán — Số hữu tỉ, tỉ lệ thức, tam giác',
  kind: 'quiz', yearLevel: 2, subject: 'toan', difficulty: 2,
  skillsTrained: ['so-huu-ti', 'so-thuc', 'ti-le-thuc', 'tam-giac', 'thong-ke-xac-suat'],
  questions: [
    { stem: '|−3,5| = ?', choices: ['3,5', '−3,5', '0', '7'], answer: 0, explanation: 'Giá trị tuyệt đối luôn không âm: |−3,5| = 3,5.' },
    { stem: '√16 = ?', choices: ['2', '4', '8', '256'], answer: 1, explanation: '4² = 16 nên √16 = 4.' },
    { stem: 'Tỉ lệ thức a/b = c/d có tính chất nào?', choices: ['a·c = b·d', 'a·d = b·c', 'a+d = b+c', 'a−b = c−d'], answer: 1, explanation: 'Tính chất cơ bản của tỉ lệ thức: tích trung tỉ bằng tích ngoại tỉ → a·d = b·c.' },
    { stem: '(−2)³ = ?', choices: ['−6', '6', '−8', '8'], answer: 2, explanation: '(−2)³ = (−2)·(−2)·(−2) = −8.' },
    { stem: 'Tổng ba góc trong một tam giác bằng?', choices: ['90°', '180°', '270°', '360°'], answer: 1, explanation: 'Định lí tổng ba góc của tam giác = 180°.' },
    { stem: 'Tìm x: x/3 = 4/6', choices: ['1', '2', '3', '8'], answer: 1, explanation: 'x = 3·4/6 = 12/6 = 2.' },
    { stem: 'Phân số 2/5 viết dưới dạng số thập phân?', choices: ['0,2', '0,4', '0,25', '0,5'], answer: 1, explanation: '2 : 5 = 0,4.' },
    { stem: 'Số nào dưới đây là số vô tỉ?', choices: ['0,5', '√2', '3/4', '−2'], answer: 1, explanation: '√2 = 1,41421356… không tuần hoàn → số vô tỉ.' },
    { stem: 'Trung bình cộng của 5, 7 và 9 là?', choices: ['6', '7', '8', '21'], answer: 1, explanation: '(5 + 7 + 9) : 3 = 21 : 3 = 7.' },
    { stem: 'Xác suất tung một đồng xu cân đối được mặt ngửa?', choices: ['1', '1/2', '1/4', '0'], answer: 1, explanation: '2 khả năng đồng khả năng (ngửa/sấp) → xác suất mặt ngửa = 1/2.' },
  ],
};

export const S8_TOAN = {
  id: 'S8-toan-quiz', title: 'Lớp 8 · Toán — Hằng đẳng thức, phương trình, Pythagore',
  kind: 'quiz', yearLevel: 3, subject: 'toan', difficulty: 3,
  skillsTrained: ['hang-dang-thuc', 'phuong-trinh-bac-nhat', 'pythagore', 'tu-giac', 'ham-so'],
  questions: [
    { stem: '(a + b)² = ?', choices: ['a² + b²', 'a² + 2ab + b²', 'a² − 2ab + b²', '2a + 2b'], answer: 1, explanation: 'Hằng đẳng thức: (a + b)² = a² + 2ab + b².' },
    { stem: 'Giải phương trình 2x + 6 = 0', choices: ['x = 3', 'x = −3', 'x = 6', 'x = −6'], answer: 1, explanation: '2x = −6 → x = −3.' },
    { stem: 'Tam giác vuông có hai cạnh góc vuông 3 và 4, cạnh huyền bằng?', choices: ['5', '6', '7', '12'], answer: 0, explanation: 'Pythagore: c = √(3² + 4²) = √25 = 5.' },
    { stem: 'Phân tích x² − 9 thành nhân tử?', choices: ['(x − 3)²', '(x − 3)(x + 3)', '(x + 3)²', 'x(x − 9)'], answer: 1, explanation: 'Hiệu hai bình phương: x² − 9 = (x − 3)(x + 3).' },
    { stem: 'Tổng các góc trong một tứ giác bằng?', choices: ['180°', '270°', '360°', '540°'], answer: 2, explanation: 'Tứ giác = 2 tam giác → tổng góc = 2 × 180° = 360°.' },
    { stem: 'Hàm số y = 2x + 1, khi x = 2 thì y = ?', choices: ['3', '5', '4', '6'], answer: 1, explanation: 'y = 2·2 + 1 = 5.' },
    { stem: '(x − 2)(x + 2) = ?', choices: ['x² − 4', 'x² + 4', 'x² − 2x', 'x² − 4x + 4'], answer: 0, explanation: 'Hiệu hai bình phương: (x − 2)(x + 2) = x² − 4.' },
    { stem: 'Giải 3(x − 1) = 9', choices: ['x = 2', 'x = 3', 'x = 4', 'x = 10'], answer: 2, explanation: 'x − 1 = 3 → x = 4.' },
    { stem: 'Diện tích tam giác có đáy 10 cm, chiều cao 6 cm?', choices: ['60 cm²', '30 cm²', '16 cm²', '32 cm²'], answer: 1, explanation: 'S = đáy × cao : 2 = 10 × 6 : 2 = 30 cm².' },
    { stem: 'Hình thoi có mấy cạnh bằng nhau?', choices: ['2', '3', '4', '0'], answer: 2, explanation: 'Hình thoi có 4 cạnh bằng nhau.' },
  ],
};

export const S9_TOAN = {
  id: 'S9-toan-quiz', title: 'Lớp 9 · Toán — Căn bậc hai, PT bậc hai, hệ thức lượng',
  kind: 'quiz', yearLevel: 4, subject: 'toan', difficulty: 3,
  skillsTrained: ['can-bac-hai', 'he-phuong-trinh', 'pt-bac-hai', 'he-thuc-luong', 'duong-tron'],
  questions: [
    { stem: '√(9 · 4) = ?', choices: ['6', '13', '36', '5'], answer: 0, explanation: '√(9·4) = √9 · √4 = 3 · 2 = 6.' },
    { stem: 'Giải x² − 5x + 6 = 0', choices: ['x = 1 hoặc 6', 'x = 2 hoặc 3', 'x = −2 hoặc −3', 'x = 5 hoặc 6'], answer: 1, explanation: 'Nhẩm nghiệm: 2 + 3 = 5, 2·3 = 6 → x = 2 hoặc x = 3.' },
    { stem: 'Biệt thức Δ của phương trình ax² + bx + c = 0 là?', choices: ['b² − 4ac', 'b² + 4ac', '4ac − b²', 'a² − 4bc'], answer: 0, explanation: 'Δ = b² − 4ac.' },
    { stem: 'sin²α + cos²α = ?', choices: ['0', '1', '2', 'tanα'], answer: 1, explanation: 'Hệ thức cơ bản lượng giác: sin²α + cos²α = 1.' },
    { stem: 'Hệ phương trình x + y = 5 và x − y = 1 có nghiệm?', choices: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'], answer: 0, explanation: 'Cộng hai vế: 2x = 6 → x = 3; y = 5 − 3 = 2.' },
    { stem: '√50 rút gọn bằng?', choices: ['25√2', '5√2', '2√5', '10√5'], answer: 1, explanation: '√50 = √(25·2) = 5√2.' },
    { stem: 'Đường kính của đường tròn gấp mấy lần bán kính?', choices: ['1', '2', '3', 'π'], answer: 1, explanation: 'Đường kính d = 2R (gấp 2 lần bán kính).' },
    { stem: 'Hàm số y = x², khi x = −3 thì y = ?', choices: ['−9', '9', '−6', '6'], answer: 1, explanation: 'y = (−3)² = 9.' },
    { stem: 'Phương trình bậc hai có nghiệm kép khi Δ bằng?', choices: ['Δ > 0', 'Δ = 0', 'Δ < 0', 'Δ = 1'], answer: 1, explanation: 'Δ = 0 → phương trình có nghiệm kép x = −b/(2a).' },
    { stem: 'Góc nội tiếp bằng bao nhiêu lần góc ở tâm cùng chắn một cung?', choices: ['Bằng nhau', 'Gấp đôi', 'Một nửa', 'Một phần ba'], answer: 2, explanation: 'Góc nội tiếp = 1/2 góc ở tâm cùng chắn một cung.' },
  ],
};

export const SECONDARY_MATH_SCENARIOS = {
  [S6_TOAN.id]: S6_TOAN,
  [S7_TOAN.id]: S7_TOAN,
  [S8_TOAN.id]: S8_TOAN,
  [S9_TOAN.id]: S9_TOAN,
};
