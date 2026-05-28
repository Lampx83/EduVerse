// ============================================================
// Trường Tiểu học — Toán lớp 1–5 (câu hỏi GỐC)
// ============================================================
// Nội dung do EduVerse tự soạn, bám Chương trình GDPT 2018 môn Toán
// Tiểu học (tham khảo SGK chứ KHÔNG sao chép). Mỗi lớp 1 quiz.
// id theo prefix module: P1-, P2-, ... để module loader nhận.
// ============================================================

export const P1_TOAN = {
  id: 'P1-toan-quiz', title: 'Lớp 1 · Toán — Số và phép tính trong 100',
  kind: 'quiz', yearLevel: 1, subject: 'toan', difficulty: 1,
  skillsTrained: ['dem-so', 'cong-tru-khong-nho', 'so-sanh', 'hinh-co-ban'],
  questions: [
    { stem: '3 + 5 = ?', choices: ['7', '8', '9', '6'], answer: 1, explanation: '3 cộng 5 bằng 8. Đếm thêm 5 đơn vị từ 3: 4, 5, 6, 7, 8.' },
    { stem: '9 − 4 = ?', choices: ['4', '6', '5', '3'], answer: 2, explanation: '9 bớt 4 còn 5.' },
    { stem: 'Số liền sau của 19 là số nào?', choices: ['18', '20', '21', '29'], answer: 1, explanation: 'Liền sau là cộng thêm 1: 19 + 1 = 20.' },
    { stem: '20 + 30 = ?', choices: ['40', '50', '60', '23'], answer: 1, explanation: '2 chục cộng 3 chục bằng 5 chục = 50.' },
    { stem: 'Điền dấu thích hợp: 45 … 54', choices: ['>', '<', '=', 'không so sánh được'], answer: 1, explanation: '45 bé hơn 54 vì chữ số hàng chục 4 < 5.' },
    { stem: 'Hình có 3 cạnh gọi là hình gì?', choices: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], answer: 2, explanation: 'Hình tam giác có 3 cạnh và 3 đỉnh.' },
    { stem: 'Số bé nhất có hai chữ số là?', choices: ['10', '11', '19', '99'], answer: 0, explanation: 'Số có hai chữ số bắt đầu từ 10.' },
    { stem: '25 + 4 = ?', choices: ['28', '30', '29', '21'], answer: 2, explanation: '25 cộng 4 (không nhớ) bằng 29.' },
    { stem: '7 + 2 = ?', choices: ['9', '8', '10', '5'], answer: 0, explanation: '7 thêm 2 bằng 9.' },
    { stem: 'Một tuần có mấy ngày?', choices: ['5 ngày', '6 ngày', '7 ngày', '10 ngày'], answer: 2, explanation: 'Một tuần lễ có 7 ngày.' },
  ],
};

export const P2_TOAN = {
  id: 'P2-toan-quiz', title: 'Lớp 2 · Toán — Cộng trừ có nhớ, bảng nhân chia',
  kind: 'quiz', yearLevel: 2, subject: 'toan', difficulty: 1,
  skillsTrained: ['cong-tru-co-nho', 'bang-nhan-chia', 'don-vi-do', 'so-den-1000'],
  questions: [
    { stem: '27 + 38 = ?', choices: ['65', '55', '66', '64'], answer: 0, explanation: '7 + 8 = 15, viết 5 nhớ 1; 2 + 3 + 1 = 6 → 65.' },
    { stem: '53 − 19 = ?', choices: ['44', '34', '36', '46'], answer: 1, explanation: 'Trừ có nhớ: 53 − 19 = 34.' },
    { stem: '4 × 6 = ?', choices: ['10', '24', '22', '20'], answer: 1, explanation: '4 lấy 6 lần = 24.' },
    { stem: '35 : 5 = ?', choices: ['6', '8', '7', '5'], answer: 2, explanation: '5 × 7 = 35 nên 35 : 5 = 7.' },
    { stem: '1 giờ = ? phút', choices: ['30 phút', '60 phút', '100 phút', '24 phút'], answer: 1, explanation: '1 giờ có 60 phút.' },
    { stem: '3 × 8 = ?', choices: ['24', '18', '21', '26'], answer: 0, explanation: '3 lấy 8 lần = 24.' },
    { stem: '100 − 45 = ?', choices: ['65', '55', '45', '75'], answer: 1, explanation: '100 − 45 = 55.' },
    { stem: '1 ki-lô-gam = ? gam', choices: ['100 g', '10 g', '1000 g', '500 g'], answer: 2, explanation: '1 kg = 1000 g.' },
    { stem: 'Số liền trước của 300 là?', choices: ['301', '299', '290', '200'], answer: 1, explanation: 'Liền trước là bớt 1: 300 − 1 = 299.' },
    { stem: '2 × 9 = ?', choices: ['16', '18', '20', '11'], answer: 1, explanation: '2 lấy 9 lần = 18.' },
  ],
};

export const P3_TOAN = {
  id: 'P3-toan-quiz', title: 'Lớp 3 · Toán — Nhân chia, chu vi, số đến 100 000',
  kind: 'quiz', yearLevel: 3, subject: 'toan', difficulty: 2,
  skillsTrained: ['bang-nhan-chia-6-9', 'nhan-chia-ngoai-bang', 'chu-vi', 'so-lon'],
  questions: [
    { stem: '7 × 8 = ?', choices: ['54', '56', '49', '64'], answer: 1, explanation: '7 lấy 8 lần = 56.' },
    { stem: '63 : 9 = ?', choices: ['6', '8', '7', '9'], answer: 2, explanation: '9 × 7 = 63 nên 63 : 9 = 7.' },
    { stem: '123 × 3 = ?', choices: ['369', '363', '339', '396'], answer: 0, explanation: '123 × 3: 3×3=9, 2×3=6, 1×3=3 → 369.' },
    { stem: 'Chu vi hình vuông cạnh 5 cm là?', choices: ['10 cm', '15 cm', '20 cm', '25 cm'], answer: 2, explanation: 'Chu vi hình vuông = cạnh × 4 = 5 × 4 = 20 cm.' },
    { stem: '1 mét = ? xăng-ti-mét', choices: ['10 cm', '100 cm', '1000 cm', '50 cm'], answer: 1, explanation: '1 m = 100 cm.' },
    { stem: '84 : 4 = ?', choices: ['20', '24', '21', '22'], answer: 2, explanation: '84 : 4 = 21 (vì 4 × 21 = 84).' },
    { stem: 'Chu vi hình chữ nhật dài 8 cm, rộng 3 cm?', choices: ['11 cm', '22 cm', '24 cm', '16 cm'], answer: 1, explanation: 'Chu vi = (dài + rộng) × 2 = (8 + 3) × 2 = 22 cm.' },
    { stem: '9 × 9 = ?', choices: ['81', '72', '99', '90'], answer: 0, explanation: '9 lấy 9 lần = 81.' },
    { stem: 'Số gồm 5 nghìn, 3 trăm, 2 chục và 1 đơn vị là?', choices: ['5231', '5321', '5312', '5123'], answer: 1, explanation: '5 nghìn 3 trăm 2 chục 1 đơn vị = 5321.' },
    { stem: '6 × 7 = ?', choices: ['42', '36', '48', '40'], answer: 0, explanation: '6 lấy 7 lần = 42.' },
  ],
};

export const P4_TOAN = {
  id: 'P4-toan-quiz', title: 'Lớp 4 · Toán — Phân số, dấu hiệu chia hết, diện tích',
  kind: 'quiz', yearLevel: 4, subject: 'toan', difficulty: 2,
  skillsTrained: ['phan-so', 'chia-het', 'dien-tich', 'goc'],
  questions: [
    { stem: '1/2 + 1/4 = ?', choices: ['2/6', '3/4', '1/4', '2/4'], answer: 1, explanation: 'Quy đồng: 1/2 = 2/4; 2/4 + 1/4 = 3/4.' },
    { stem: 'So sánh: 3/4 … 2/4', choices: ['>', '<', '=', 'không so sánh'], answer: 0, explanation: 'Cùng mẫu, tử 3 > 2 nên 3/4 > 2/4.' },
    { stem: '1234 + 5678 = ?', choices: ['6912', '6812', '6902', '7912'], answer: 0, explanation: '1234 + 5678 = 6912.' },
    { stem: 'Số chia hết cho 5 có chữ số tận cùng là?', choices: ['0 hoặc 2', '5 hoặc 6', '0 hoặc 5', '1 hoặc 5'], answer: 2, explanation: 'Số chia hết cho 5 tận cùng là 0 hoặc 5.' },
    { stem: 'Diện tích hình chữ nhật dài 6 cm, rộng 4 cm?', choices: ['10 cm²', '20 cm²', '24 cm²', '12 cm²'], answer: 2, explanation: 'Diện tích = dài × rộng = 6 × 4 = 24 cm².' },
    { stem: '2/3 của 12 là?', choices: ['6', '8', '9', '4'], answer: 1, explanation: '12 : 3 = 4; 4 × 2 = 8.' },
    { stem: 'Rút gọn phân số 6/8 = ?', choices: ['2/3', '3/4', '1/2', '4/6'], answer: 1, explanation: 'Chia cả tử và mẫu cho 2: 6/8 = 3/4.' },
    { stem: 'Một góc vuông có số đo bằng?', choices: ['45°', '60°', '90°', '180°'], answer: 2, explanation: 'Góc vuông bằng 90 độ.' },
    { stem: '7 × 1000 = ?', choices: ['700', '7000', '70000', '70'], answer: 1, explanation: '7 × 1000 = 7000.' },
    { stem: '1/5 + 2/5 = ?', choices: ['3/5', '3/10', '2/5', '1/5'], answer: 0, explanation: 'Cùng mẫu, cộng tử: 1 + 2 = 3 → 3/5.' },
  ],
};

export const P5_TOAN = {
  id: 'P5-toan-quiz', title: 'Lớp 5 · Toán — Số thập phân, tỉ số %, thể tích',
  kind: 'quiz', yearLevel: 5, subject: 'toan', difficulty: 3,
  skillsTrained: ['so-thap-phan', 'ti-so-phan-tram', 'the-tich', 'van-toc'],
  questions: [
    { stem: '0,5 + 0,25 = ?', choices: ['0,30', '0,75', '0,7', '0,55'], answer: 1, explanation: '0,50 + 0,25 = 0,75.' },
    { stem: '25% của 200 là?', choices: ['25', '50', '75', '40'], answer: 1, explanation: '200 × 25 : 100 = 50.' },
    { stem: '3,2 × 10 = ?', choices: ['3,2', '32', '320', '0,32'], answer: 1, explanation: 'Nhân 10: dời dấu phẩy sang phải 1 chữ số → 32.' },
    { stem: '1,5 km = ? m', choices: ['150 m', '1500 m', '15 m', '15000 m'], answer: 1, explanation: '1 km = 1000 m nên 1,5 km = 1500 m.' },
    { stem: 'Thể tích hình lập phương cạnh 3 cm?', choices: ['9 cm³', '27 cm³', '18 cm³', '12 cm³'], answer: 1, explanation: 'Thể tích = cạnh × cạnh × cạnh = 3 × 3 × 3 = 27 cm³.' },
    { stem: 'Muốn tính vận tốc ta lấy quãng đường chia cho?', choices: ['Khối lượng', 'Thời gian', 'Diện tích', 'Chiều cao'], answer: 1, explanation: 'Vận tốc = quãng đường : thời gian.' },
    { stem: '0,75 viết dưới dạng phần trăm là?', choices: ['7,5%', '75%', '0,75%', '750%'], answer: 1, explanation: '0,75 = 75/100 = 75%.' },
    { stem: '12,5 : 5 = ?', choices: ['2,5', '2,25', '25', '0,25'], answer: 0, explanation: '12,5 : 5 = 2,5.' },
    { stem: 'Trung bình cộng của 4, 6 và 8 là?', choices: ['5', '6', '7', '9'], answer: 1, explanation: '(4 + 6 + 8) : 3 = 18 : 3 = 6.' },
    { stem: 'Diện tích hình tam giác đáy 6 cm, chiều cao 4 cm?', choices: ['24 cm²', '12 cm²', '10 cm²', '20 cm²'], answer: 1, explanation: 'Diện tích = đáy × cao : 2 = 6 × 4 : 2 = 12 cm².' },
  ],
};

export const PRIMARY_MATH_SCENARIOS = {
  [P1_TOAN.id]: P1_TOAN,
  [P2_TOAN.id]: P2_TOAN,
  [P3_TOAN.id]: P3_TOAN,
  [P4_TOAN.id]: P4_TOAN,
  [P5_TOAN.id]: P5_TOAN,
};
