// ============================================================
// Trường THCS — Toán lớp 6: hệ thống CHƯƠNG → BÀI (lesson path)
// ============================================================
// Mỗi chương gồm nhiều bài học nhỏ (độ khó tăng dần) kết thúc bằng
// 1 bài "Boss" tổng hợp. Mỗi bài có quiz riêng (id = <lessonId>-quiz).
// Câu hỏi GỐC, bám Chương trình GDPT 2018 (KHÔNG sao chép SGK).
//
// Exports:
//   MATH6_CHAPTERS         — metadata để dựng learning path (subject.html)
//   MATH6_LESSON_SCENARIOS — { quizId → scenario } để engine chạy quiz
// ============================================================

// q = câu hỏi rút gọn: [stem, choices[], answerIndex, explanation]
const q = (stem, choices, answer, explanation) => ({ stem, choices, answer, explanation });

/** Định nghĩa chương → bài. `d` = độ khó (1–3). */
const CHAPTERS_DEF = [
  {
    id: 'so-nguyen', title: 'Số nguyên', icon: '➕',
    desc: 'Cộng, trừ, nhân, chia số nguyên & quy tắc dấu.',
    lessons: [
      { title: 'Cộng số nguyên', d: 1, questions: [
        q('(−5) + 8 = ?', ['−3', '3', '13', '−13'], 1, 'Khác dấu: lấy 8 − 5 = 3, mang dấu số lớn hơn (dương).'),
        q('(−3) + (−6) = ?', ['9', '−9', '−3', '3'], 1, 'Cùng dấu âm: cộng giá trị 3 + 6 = 9 rồi giữ dấu âm → −9.'),
        q('7 + (−7) = ?', ['14', '0', '−14', '7'], 1, 'Hai số đối nhau cộng lại bằng 0.'),
        q('(−12) + 5 = ?', ['−7', '7', '−17', '17'], 0, 'Khác dấu: 12 − 5 = 7, mang dấu âm → −7.'),
      ] },
      { title: 'Trừ số nguyên', d: 1, questions: [
        q('(−7) − 3 = ?', ['−4', '4', '−10', '10'], 2, 'a − b = a + (−b): (−7) + (−3) = −10.'),
        q('5 − (−4) = ?', ['1', '9', '−9', '−1'], 1, 'Trừ số âm = cộng số dương: 5 + 4 = 9.'),
        q('(−2) − (−6) = ?', ['−8', '8', '4', '−4'], 2, '(−2) + 6 = 4.'),
        q('0 − 9 = ?', ['9', '−9', '0', '−1'], 1, '0 − 9 = −9.'),
      ] },
      { title: 'Nhân & chia số nguyên', d: 2, questions: [
        q('(−4) × 3 = ?', ['12', '−12', '−7', '7'], 1, 'Khác dấu → tích âm: 4 × 3 = 12 → −12.'),
        q('(−5) × (−6) = ?', ['−30', '30', '11', '−11'], 1, 'Cùng dấu → tích dương: 5 × 6 = 30.'),
        q('(−20) : 4 = ?', ['5', '−5', '−16', '16'], 1, 'Khác dấu → thương âm: 20 : 4 = 5 → −5.'),
        q('(−18) : (−3) = ?', ['6', '−6', '15', '−15'], 0, 'Cùng dấu → thương dương: 18 : 3 = 6.'),
      ] },
      { title: 'Bài tập tổng hợp Số nguyên', d: 3, boss: true, questions: [
        q('(−3) × (−4) + (−5) = ?', ['7', '−7', '17', '−17'], 0, '(−3)(−4) = 12; 12 + (−5) = 7.'),
        q('2 − (−3) × 4 = ?', ['14', '−10', '20', '−14'], 0, 'Nhân trước: (−3)×4 = −12; 2 − (−12) = 14.'),
        q('|−7| + (−10) = ?', ['−3', '3', '17', '−17'], 0, '|−7| = 7; 7 + (−10) = −3.'),
        q('(−2)³ = ?', ['−6', '6', '−8', '8'], 2, '(−2)(−2)(−2) = −8.'),
        q('−(−(−5)) = ?', ['5', '−5', '0', '15'], 1, 'Bỏ ngoặc lần lượt: −(−(−5)) = −(5) = −5.'),
      ] },
    ],
  },
  {
    id: 'phan-so', title: 'Phân số', icon: '🍕',
    desc: 'Khái niệm, rút gọn, quy đồng và 4 phép tính với phân số.',
    lessons: [
      { title: 'Phân số & phân số bằng nhau', d: 1, questions: [
        q('2/3 = ?/9', ['3', '6', '9', '12'], 1, 'Nhân cả tử và mẫu với 3: 2·3/3·3 = 6/9.'),
        q('Phân số nào bằng 1/2?', ['2/3', '3/6', '3/4', '2/5'], 1, '3/6 rút gọn = 1/2.'),
        q('4/4 bằng?', ['0', '1/4', '1', '4'], 2, 'Tử bằng mẫu → bằng 1.'),
        q('Phân số 0/7 bằng?', ['0', '7', '1', 'không xác định'], 0, 'Tử bằng 0 (mẫu khác 0) → phân số bằng 0.'),
      ] },
      { title: 'Rút gọn & quy đồng', d: 2, questions: [
        q('Rút gọn 6/8 = ?', ['3/4', '2/3', '4/6', '1/2'], 0, 'Chia tử và mẫu cho 2: 6/8 = 3/4.'),
        q('Rút gọn 10/15 = ?', ['5/3', '2/3', '3/5', '1/3'], 1, 'Chia cho 5: 10/15 = 2/3.'),
        q('Mẫu chung nhỏ nhất của 1/2 và 1/3 là?', ['5', '6', '2', '3'], 1, 'BCNN(2,3) = 6.'),
        q('Phân số tối giản của 12/18 là?', ['6/9', '2/3', '4/6', '3/4'], 1, 'ƯCLN(12,18)=6 → 12/18 = 2/3.'),
      ] },
      { title: 'Cộng & trừ phân số', d: 2, questions: [
        q('1/4 + 1/4 = ?', ['2/8', '1/2', '1/4', '2/4'], 1, '1/4 + 1/4 = 2/4 = 1/2.'),
        q('2/3 + 1/6 = ?', ['3/9', '5/6', '1/2', '3/6'], 1, 'Quy đồng: 2/3 = 4/6; 4/6 + 1/6 = 5/6.'),
        q('3/4 − 1/2 = ?', ['1/4', '2/2', '1/2', '2/4'], 0, '1/2 = 2/4; 3/4 − 2/4 = 1/4.'),
        q('5/6 − 1/3 = ?', ['4/3', '1/2', '1/3', '2/3'], 1, '1/3 = 2/6; 5/6 − 2/6 = 3/6 = 1/2.'),
      ] },
      { title: 'Nhân & chia phân số', d: 2, questions: [
        q('2/3 × 3/4 = ?', ['6/7', '1/2', '5/7', '6/12'], 1, 'Nhân thẳng: 6/12 = 1/2.'),
        q('1/2 : 1/4 = ?', ['1/8', '2', '1/2', '4'], 1, 'Chia = nhân nghịch đảo: 1/2 × 4/1 = 2.'),
        q('3/5 × 10 = ?', ['30/5', '6', '13/5', '3/50'], 1, '3·10/5 = 30/5 = 6.'),
        q('(2/3) : (4/9) = ?', ['8/27', '3/2', '2/3', '6/12'], 1, '2/3 × 9/4 = 18/12 = 3/2.'),
      ] },
      { title: 'Bài tập tổng hợp Phân số', d: 3, boss: true, questions: [
        q('1/2 + 1/3 − 1/6 = ?', ['2/3', '1/2', '5/6', '1'], 0, 'Quy đồng mẫu 6: 3/6 + 2/6 − 1/6 = 4/6 = 2/3.'),
        q('(2/3) × (3/4) + 1/2 = ?', ['1', '5/6', '1/2', '7/12'], 0, '2/3·3/4 = 1/2; 1/2 + 1/2 = 1.'),
        q('Số thập phân 0,75 = phân số tối giản nào?', ['75/100', '3/4', '7/5', '1/4'], 1, '0,75 = 75/100 = 3/4.'),
        q('2/5 của 30 bằng?', ['10', '12', '15', '6'], 1, '30 × 2 : 5 = 12.'),
        q('Phân số nào lớn hơn: 3/4 hay 2/3?', ['2/3', '3/4', 'Bằng nhau', 'Không so sánh được'], 1, 'Quy đồng: 9/12 > 8/12 → 3/4 lớn hơn.'),
      ] },
    ],
  },
  {
    id: 'ti-so', title: 'Tỉ số – Tỉ lệ', icon: '📊',
    desc: 'Tỉ số, tỉ số phần trăm, tỉ lệ thức và bài toán tỉ lệ.',
    lessons: [
      { title: 'Tỉ số & tỉ số phần trăm', d: 2, questions: [
        q('Tỉ số của 6 và 8 (rút gọn) là?', ['6/8', '3/4', '4/3', '8/6'], 1, '6/8 = 3/4.'),
        q('25% viết dưới dạng phân số tối giản?', ['25/10', '1/4', '2/5', '1/2'], 1, '25% = 25/100 = 1/4.'),
        q('20% của 50 bằng?', ['5', '10', '20', '25'], 1, '50 × 20 : 100 = 10.'),
        q('Tỉ số 1/4 bằng bao nhiêu phần trăm?', ['14%', '25%', '40%', '4%'], 1, '1/4 = 25/100 = 25%.'),
      ] },
      { title: 'Tỉ lệ thức', d: 2, questions: [
        q('Tìm x: x/3 = 4/6', ['1', '2', '3', '8'], 1, 'x = 3·4/6 = 2.'),
        q('Tìm x: 2/5 = 8/x', ['10', '20', '16', '40'], 1, 'x = 5·8/2 = 20.'),
        q('Tỉ lệ thức a/b = c/d có tính chất?', ['a+d = b+c', 'a·d = b·c', 'a·c = b·d', 'a−b = c−d'], 1, 'Tích trung tỉ = tích ngoại tỉ: a·d = b·c.'),
        q('Tìm x: 3/4 = 9/x', ['10', '12', '15', '6'], 1, 'x = 4·9/3 = 12.'),
      ] },
      { title: 'Bài toán tỉ lệ', d: 3, boss: true, questions: [
        q('3 cây bút giá 12 nghìn. 5 cây bút giá?', ['15 nghìn', '20 nghìn', '24 nghìn', '18 nghìn'], 1, '1 bút = 4 nghìn → 5 bút = 20 nghìn.'),
        q('40% của 200 bằng?', ['40', '60', '80', '100'], 2, '200 × 40 : 100 = 80.'),
        q('Áo 50 nghìn giảm 10% còn?', ['40 nghìn', '45 nghìn', '5 nghìn', '49 nghìn'], 1, 'Giảm 5 nghìn (10% của 50) → còn 45 nghìn.'),
        q('Tỉ số của 1,5 m và 50 cm là?', ['3', '1/3', '15', '0,3'], 0, 'Đổi 1,5 m = 150 cm; 150 : 50 = 3.'),
        q('Lớp có 30 HS, 60% là nữ. Số HS nữ là?', ['12', '18', '20', '15'], 1, '30 × 60 : 100 = 18.'),
      ] },
    ],
  },
  {
    id: 'ucln-bcnn', title: 'ƯCLN – BCNN', icon: '🔢',
    desc: 'Số nguyên tố, phân tích thừa số, ước chung & bội chung.',
    lessons: [
      { title: 'Số nguyên tố & phân tích thừa số', d: 2, questions: [
        q('Số nào dưới đây là số nguyên tố?', ['9', '7', '15', '21'], 1, '7 chỉ có ước 1 và 7 → số nguyên tố.'),
        q('Phân tích 12 ra thừa số nguyên tố?', ['2 × 6', '2² × 3', '3 × 4', '2 × 3²'], 1, '12 = 2 × 2 × 3 = 2² × 3.'),
        q('Số nào là hợp số?', ['2', '3', '9', '11'], 2, '9 = 3 × 3 → có ước khác 1 và chính nó.'),
        q('Số 1 có phải số nguyên tố không?', ['Có', 'Không', 'Vừa nguyên tố vừa hợp số', 'Là hợp số'], 1, 'Theo định nghĩa, 1 không phải số nguyên tố cũng không phải hợp số.'),
      ] },
      { title: 'Ước chung lớn nhất (ƯCLN)', d: 2, questions: [
        q('ƯCLN(12, 18) = ?', ['2', '3', '6', '36'], 2, '12 = 2²·3, 18 = 2·3² → ƯCLN = 2·3 = 6.'),
        q('ƯCLN(8, 12) = ?', ['2', '4', '8', '24'], 1, '8 = 2³, 12 = 2²·3 → ƯCLN = 2² = 4.'),
        q('ƯCLN(15, 25) = ?', ['3', '5', '15', '75'], 1, '15 = 3·5, 25 = 5² → ƯCLN = 5.'),
        q('Hai số nguyên tố cùng nhau có ƯCLN bằng?', ['0', '1', '2', 'Chính chúng'], 1, 'Nguyên tố cùng nhau ⇔ ƯCLN = 1.'),
      ] },
      { title: 'Bội chung nhỏ nhất (BCNN)', d: 2, questions: [
        q('BCNN(4, 6) = ?', ['12', '24', '10', '6'], 0, '4 = 2², 6 = 2·3 → BCNN = 2²·3 = 12.'),
        q('BCNN(3, 5) = ?', ['8', '15', '5', '30'], 1, '3 và 5 nguyên tố cùng nhau → BCNN = 3·5 = 15.'),
        q('BCNN(6, 8) = ?', ['14', '24', '48', '12'], 1, '6 = 2·3, 8 = 2³ → BCNN = 2³·3 = 24.'),
        q('BCNN(2, 4) = ?', ['2', '4', '6', '8'], 1, '4 chia hết cho 2 → BCNN = 4.'),
      ] },
      { title: 'Bài tập tổng hợp ƯCLN–BCNN', d: 3, boss: true, questions: [
        q('ƯCLN(24, 36) = ?', ['6', '12', '18', '24'], 1, '24 = 2³·3, 36 = 2²·3² → ƯCLN = 2²·3 = 12.'),
        q('BCNN(12, 15) = ?', ['30', '45', '60', '180'], 2, '12 = 2²·3, 15 = 3·5 → BCNN = 2²·3·5 = 60.'),
        q('Với a=4, b=6: ƯCLN × BCNN = ?', ['24', '12', '10', '48'], 0, '2 × 12 = 24 = 4 × 6 (ƯCLN·BCNN = a·b).'),
        q('Phân tích 60 ra thừa số nguyên tố?', ['2²·3·5', '2·3·10', '4·15', '2³·5'], 0, '60 = 2²·3·5.'),
        q('Số 12 có mấy ước?', ['4', '5', '6', '12'], 2, 'Các ước: 1,2,3,4,6,12 → 6 ước.'),
      ] },
    ],
  },
  {
    id: 'hinh-hoc', title: 'Hình học cơ bản', icon: '📐',
    desc: 'Điểm – đường thẳng, hình phẳng, chu vi & diện tích.',
    lessons: [
      { title: 'Điểm, đường thẳng, đoạn thẳng', d: 1, questions: [
        q('Qua hai điểm phân biệt vẽ được mấy đường thẳng?', ['0', '1', '2', 'Vô số'], 1, 'Có duy nhất một đường thẳng đi qua hai điểm phân biệt.'),
        q('Trung điểm chia một đoạn thẳng thành?', ['2 phần bằng nhau', '2 phần khác nhau', '3 phần', '4 phần'], 0, 'Trung điểm là điểm chính giữa → hai đoạn bằng nhau.'),
        q('Tia có mấy đầu mút (điểm gốc)?', ['0', '1', '2', 'Vô số'], 1, 'Tia có một điểm gốc và kéo dài vô hạn về một phía.'),
        q('Đoạn thẳng AB và đoạn thẳng BA?', ['Khác nhau', 'Là cùng một đoạn thẳng', 'Song song', 'Vuông góc'], 1, 'AB và BA chỉ cùng một đoạn thẳng.'),
      ] },
      { title: 'Tam giác, hình chữ nhật, hình vuông', d: 2, questions: [
        q('Tam giác có mấy cạnh?', ['2', '3', '4', '5'], 1, 'Tam giác có 3 cạnh, 3 đỉnh, 3 góc.'),
        q('Hình vuông có đặc điểm nào?', ['4 cạnh bằng nhau & 4 góc vuông', 'Chỉ 2 cạnh bằng nhau', 'Không có góc vuông', '3 cạnh bằng nhau'], 0, 'Hình vuông: 4 cạnh bằng nhau và 4 góc vuông.'),
        q('Hình chữ nhật có mấy góc vuông?', ['1', '2', '3', '4'], 3, 'Hình chữ nhật có 4 góc vuông.'),
        q('Tổng ba góc trong một tam giác bằng?', ['90°', '180°', '270°', '360°'], 1, 'Định lí: tổng ba góc tam giác = 180°.'),
      ] },
      { title: 'Chu vi & diện tích', d: 2, questions: [
        q('Chu vi hình chữ nhật dài 5, rộng 3 là?', ['8', '15', '16', '30'], 2, 'P = (5 + 3) × 2 = 16.'),
        q('Diện tích hình vuông cạnh 4 là?', ['8', '12', '16', '4'], 2, 'S = cạnh × cạnh = 4 × 4 = 16.'),
        q('Diện tích hình chữ nhật 5 × 3 là?', ['8', '15', '16', '30'], 1, 'S = dài × rộng = 5 × 3 = 15.'),
        q('Chu vi hình vuông cạnh 6 là?', ['12', '24', '36', '18'], 1, 'P = 4 × cạnh = 4 × 6 = 24.'),
      ] },
      { title: 'Bài tập tổng hợp Hình học', d: 3, boss: true, questions: [
        q('Diện tích hình chữ nhật 8 × 5 là?', ['13', '26', '40', '45'], 2, 'S = 8 × 5 = 40.'),
        q('Chu vi hình chữ nhật 8 × 5 là?', ['13', '26', '40', '80'], 1, 'P = (8 + 5) × 2 = 26.'),
        q('Hình vuông có diện tích 25 thì cạnh bằng?', ['4', '5', '6', '25'], 1, 'Cạnh = √25 = 5.'),
        q('Diện tích tam giác đáy 10, chiều cao 4 là?', ['40', '20', '14', '24'], 1, 'S = đáy × cao : 2 = 10 × 4 : 2 = 20.'),
        q('Thể tích hình lập phương cạnh 3 là?', ['9', '18', '27', '12'], 2, 'V = cạnh³ = 3 × 3 × 3 = 27.'),
      ] },
    ],
  },
];

// ── Build exports ──
/** @type {Record<string, object>} */
export const MATH6_LESSON_SCENARIOS = {};
export const MATH6_CHAPTERS = CHAPTERS_DEF.map(ch => ({
  id: ch.id, title: ch.title, icon: ch.icon, desc: ch.desc,
  lessons: ch.lessons.map((l, i) => {
    const lessonId = `S6-${ch.id}-${i + 1}`;
    const quizId = `${lessonId}-quiz`;
    MATH6_LESSON_SCENARIOS[quizId] = {
      id: quizId,
      title: `${l.title}`,
      kind: 'quiz', yearLevel: 1, subject: 'toan', difficulty: l.d,
      chapter: ch.title, lesson: l.title, boss: !!l.boss,
      questions: l.questions,
    };
    return {
      id: lessonId, quizId, title: l.title, difficulty: l.d,
      boss: !!l.boss, count: l.questions.length,
    };
  }),
}));

/** Tổng số bài học của Toán 6 (tham khảo). */
export const MATH6_LESSON_COUNT = Object.keys(MATH6_LESSON_SCENARIOS).length;
