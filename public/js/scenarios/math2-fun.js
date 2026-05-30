/* ============================================================
 * 🌈 Toán Lớp 2 — Phiêu lưu cùng bé sóc
 * ============================================================
 * 16 dạng bài × ~12 câu = ~190 câu hỏi, bám Chương trình GDPT 2018:
 *   - Số trong phạm vi 1000
 *   - Cộng trừ có nhớ
 *   - Bảng nhân 2, 3, 4, 5 và bảng chia tương ứng
 *   - Đơn vị đo: dm, cm, m, kg, l
 *   - Thời gian, ngày tháng
 *   - Tiền Việt Nam
 *   - Hình học cơ bản
 *   - Bài toán có lời văn
 */

const q = (stem, choices, answer, explanation) => ({ stem, choices, answer, explanation });

export const MATH2_TOPICS = [
  // 1. Đếm và đọc số trong phạm vi 1000
  {
    id: 'm2-dem-so-1000', title: 'Đếm số đến 1000', mascot: '🐿', color: '#fbbf24',
    icon: '🔢', difficulty: 1,
    intro: 'Bé Sóc đang nhặt hạt dẻ. Hãy đếm giúp Sóc nhé!',
    questions: [
      q('Số liền sau của 199 là?', ['200', '198', '299', '201'], 0, '199 + 1 = 200. Khi đếm thêm 1, ta được số tiếp theo.'),
      q('Số liền trước của 500 là?', ['501', '400', '499', '599'], 2, '500 − 1 = 499.'),
      q('Số gồm 3 trăm, 4 chục và 7 đơn vị là?', ['374', '347', '437', '743'], 1, '3 trăm = 300, 4 chục = 40, 7 đơn vị = 7 → 347.'),
      q('Đọc số "604": Sáu trăm linh tư hay sáu trăm bốn mươi?', ['Sáu trăm linh tư', 'Sáu trăm bốn mươi', 'Sáu trăm bốn', 'Sáu mươi tư'], 0, '604 = 600 + 4, ta đọc là "sáu trăm linh tư" (linh = không có chục).'),
      q('Số tròn trăm lớn nhất bé hơn 1000 là?', ['900', '999', '990', '100'], 0, 'Số tròn trăm bé hơn 1000: 100, 200, ... 900. Lớn nhất là 900.'),
      q('Số bé nhất có 3 chữ số là?', ['100', '111', '101', '999'], 0, 'Số có 3 chữ số bắt đầu từ 100.'),
      q('Số lớn nhất có 3 chữ số là?', ['100', '999', '900', '990'], 1, '999 là số lớn nhất có 3 chữ số.'),
      q('Bé Sóc có 4 chục hạt dẻ và 5 hạt rời. Tất cả là bao nhiêu?', ['40', '45', '54', '450'], 1, '4 chục = 40, thêm 5 hạt → 45 hạt.'),
      q('Sắp xếp tăng dần: 234, 432, 324, 243', ['234, 243, 324, 432', '432, 324, 243, 234', '234, 324, 243, 432', '234, 432, 324, 243'], 0, 'So sánh chữ số hàng trăm trước: 2 < 2 < 3 < 4 → 234, 243, 324, 432.'),
      q('Trong số 728, chữ số nào ở hàng chục?', ['7', '2', '8', '72'], 1, '728: 7 hàng trăm, 2 hàng chục, 8 hàng đơn vị.'),
      q('Số liền sau của 999 là?', ['1000', '1100', '9999', '99'], 0, '999 + 1 = 1000.'),
      q('100 + 100 + 100 = ?', ['300', '111', '1003', '30'], 0, '100 + 100 = 200, thêm 100 nữa = 300.'),
    ],
  },

  // 2. Cộng có nhớ trong 100
  {
    id: 'm2-cong-co-nho', title: 'Cộng có nhớ', mascot: '🐰', color: '#10b981',
    icon: '➕', difficulty: 1,
    intro: 'Bé Thỏ đang đếm cà rốt thu hoạch! Cộng giúp Thỏ nhé.',
    questions: [
      q('27 + 18 = ?', ['35', '45', '43', '55'], 1, '7 + 8 = 15 (viết 5 nhớ 1); 2 + 1 + 1 = 4 → 45.'),
      q('46 + 28 = ?', ['64', '74', '78', '68'], 1, '6 + 8 = 14 (nhớ 1); 4 + 2 + 1 = 7 → 74.'),
      q('39 + 26 = ?', ['55', '65', '66', '56'], 1, '9 + 6 = 15 (nhớ 1); 3 + 2 + 1 = 6 → 65.'),
      q('58 + 17 = ?', ['65', '75', '85', '77'], 1, '8 + 7 = 15 (nhớ 1); 5 + 1 + 1 = 7 → 75.'),
      q('Thỏ hái 35 cà rốt sáng và 28 cà rốt chiều. Tất cả?', ['53', '63', '67', '73'], 1, '35 + 28 = 63.'),
      q('47 + 35 = ?', ['72', '82', '92', '85'], 1, '7 + 5 = 12 (nhớ 1); 4 + 3 + 1 = 8 → 82.'),
      q('19 + 19 = ?', ['38', '28', '37', '39'], 0, '9 + 9 = 18 (nhớ 1); 1 + 1 + 1 = 3 → 38.'),
      q('68 + 24 = ?', ['82', '92', '90', '88'], 1, '8 + 4 = 12 (nhớ 1); 6 + 2 + 1 = 9 → 92.'),
      q('Một quyển sách dày 56 trang, đọc thêm 25 trang nữa. Tổng?', ['71', '81', '91', '85'], 1, '56 + 25 = 81 trang.'),
      q('29 + 36 = ?', ['55', '65', '66', '63'], 1, '9 + 6 = 15 (nhớ 1); 2 + 3 + 1 = 6 → 65.'),
      q('77 + 19 = ?', ['86', '96', '95', '98'], 1, '7 + 9 = 16 (nhớ 1); 7 + 1 + 1 = 9 → 96.'),
      q('Lan có 38 viên kẹo, mẹ cho thêm 47 viên. Lan có?', ['75', '85', '95', '82'], 1, '38 + 47 = 85 viên.'),
    ],
  },

  // 3. Trừ có nhớ trong 100
  {
    id: 'm2-tru-co-nho', title: 'Trừ có nhớ', mascot: '🐱', color: '#0ea5e9',
    icon: '➖', difficulty: 1,
    intro: 'Bé Mèo đang chia cá cho các bạn. Trừ giúp Mèo nhé!',
    questions: [
      q('53 − 18 = ?', ['25', '35', '45', '37'], 1, '3 < 8, mượn 1 chục: 13 − 8 = 5; 5 − 1 − 1 = 3 → 35.'),
      q('72 − 39 = ?', ['33', '43', '23', '39'], 0, '2 < 9, mượn 1 chục: 12 − 9 = 3; 7 − 3 − 1 = 3 → 33.'),
      q('85 − 47 = ?', ['28', '38', '48', '42'], 1, '5 < 7, mượn: 15 − 7 = 8; 8 − 4 − 1 = 3 → 38.'),
      q('64 − 29 = ?', ['25', '35', '45', '37'], 1, '4 < 9, mượn: 14 − 9 = 5; 6 − 2 − 1 = 3 → 35.'),
      q('Mèo có 50 con cá, cho bạn 23 con. Còn lại?', ['17', '27', '37', '25'], 1, '50 − 23 = 27 con.'),
      q('91 − 56 = ?', ['25', '35', '45', '37'], 1, '1 < 6, mượn: 11 − 6 = 5; 9 − 5 − 1 = 3 → 35.'),
      q('100 − 45 = ?', ['45', '55', '65', '75'], 1, '100 − 45 = 55.'),
      q('80 − 27 = ?', ['43', '53', '63', '57'], 1, '0 < 7, mượn: 10 − 7 = 3; 8 − 2 − 1 = 5 → 53.'),
      q('Cây cao 76 cm, bị cắt bớt 28 cm. Cây còn cao bao nhiêu?', ['38', '48', '58', '52'], 1, '76 − 28 = 48 cm.'),
      q('66 − 19 = ?', ['37', '47', '57', '45'], 1, '6 < 9, mượn: 16 − 9 = 7; 6 − 1 − 1 = 4 → 47.'),
      q('45 − 17 = ?', ['18', '28', '38', '32'], 1, '5 < 7, mượn: 15 − 7 = 8; 4 − 1 − 1 = 2 → 28.'),
      q('Bình có 92 viên bi, cho em 38 viên. Bình còn?', ['44', '54', '64', '58'], 1, '92 − 38 = 54.'),
    ],
  },

  // 4. Bảng nhân 2 và 3
  {
    id: 'm2-nhan-2-3', title: 'Bảng nhân 2 & 3', mascot: '🐻', color: '#a855f7',
    icon: '✖️', difficulty: 1,
    intro: 'Bé Gấu xếp mật ong vào hũ. Hãy nhân giúp Gấu nhé!',
    questions: [
      q('2 × 4 = ?', ['6', '8', '10', '12'], 1, '2 lấy 4 lần: 2 + 2 + 2 + 2 = 8.'),
      q('3 × 5 = ?', ['8', '15', '18', '12'], 1, '3 lấy 5 lần: 3 + 3 + 3 + 3 + 3 = 15.'),
      q('2 × 7 = ?', ['12', '14', '16', '9'], 1, '2 × 7 = 14.'),
      q('3 × 6 = ?', ['15', '18', '21', '12'], 1, '3 × 6 = 18.'),
      q('Mỗi hũ có 2 thìa mật, có 5 hũ. Tổng thìa mật?', ['7', '10', '12', '15'], 1, '5 hũ × 2 thìa = 10 thìa.'),
      q('3 × 9 = ?', ['24', '27', '30', '21'], 1, '3 × 9 = 27.'),
      q('2 × 10 = ?', ['12', '20', '22', '102'], 1, '2 chục = 20.'),
      q('3 × 3 = ?', ['6', '9', '12', '3'], 1, '3 × 3 = 9.'),
      q('Mỗi con bò có 4 chân, 3 con bò có?', ['7', '12', '10', '14'], 1, '3 × 4 = 12 chân (đây cũng là cách nhân chéo).'),
      q('2 × 8 = ?', ['10', '16', '18', '14'], 1, '2 × 8 = 16.'),
      q('3 × 4 = ?', ['7', '12', '15', '10'], 1, '3 × 4 = 12.'),
      q('Bố mẹ và 3 em bé, mỗi người 2 cái bánh. Tổng bánh?', ['8', '10', '12', '5'], 1, '5 người × 2 = 10 bánh.'),
    ],
  },

  // 5. Bảng nhân 4 và 5
  {
    id: 'm2-nhan-4-5', title: 'Bảng nhân 4 & 5', mascot: '🦊', color: '#f97316',
    icon: '✖️', difficulty: 2,
    intro: 'Bé Cáo đang xếp táo lên cây. Mỗi cành mấy quả?',
    questions: [
      q('4 × 6 = ?', ['20', '24', '28', '32'], 1, '4 × 6 = 24.'),
      q('5 × 7 = ?', ['25', '30', '35', '40'], 2, '5 × 7 = 35.'),
      q('4 × 9 = ?', ['32', '36', '40', '28'], 1, '4 × 9 = 36.'),
      q('5 × 5 = ?', ['10', '20', '25', '30'], 2, '5 × 5 = 25.'),
      q('Mỗi rổ có 5 quả táo, có 8 rổ. Tổng?', ['35', '40', '45', '50'], 1, '5 × 8 = 40 quả.'),
      q('4 × 8 = ?', ['28', '32', '36', '40'], 1, '4 × 8 = 32.'),
      q('5 × 9 = ?', ['40', '45', '50', '54'], 1, '5 × 9 = 45.'),
      q('4 × 4 = ?', ['8', '12', '16', '20'], 2, '4 × 4 = 16.'),
      q('5 × 10 = ?', ['15', '50', '55', '510'], 1, '5 × 10 = 50.'),
      q('Một tuần có 7 ngày, 4 tuần có?', ['21', '28', '35', '14'], 1, '4 × 7 = 28 ngày.'),
      q('4 × 7 = ?', ['25', '28', '32', '24'], 1, '4 × 7 = 28.'),
      q('Cáo hái 5 quả mỗi cây, có 6 cây. Tổng?', ['25', '30', '35', '40'], 1, '5 × 6 = 30 quả.'),
    ],
  },

  // 6. Bảng chia 2, 3, 4, 5
  {
    id: 'm2-chia-2-5', title: 'Bảng chia 2-5', mascot: '🐼', color: '#22d3ee',
    icon: '➗', difficulty: 2,
    intro: 'Bé Gấu Trúc chia tre cho bạn. Chia đều giúp nha!',
    questions: [
      q('14 : 2 = ?', ['5', '6', '7', '8'], 2, '2 × 7 = 14 → 14 : 2 = 7.'),
      q('27 : 3 = ?', ['7', '8', '9', '10'], 2, '3 × 9 = 27.'),
      q('24 : 4 = ?', ['4', '5', '6', '8'], 2, '4 × 6 = 24.'),
      q('40 : 5 = ?', ['6', '7', '8', '9'], 2, '5 × 8 = 40.'),
      q('Có 18 cây tre, chia cho 2 bạn. Mỗi bạn?', ['7', '8', '9', '10'], 2, '18 : 2 = 9 cây.'),
      q('36 : 4 = ?', ['7', '8', '9', '6'], 2, '4 × 9 = 36.'),
      q('30 : 5 = ?', ['5', '6', '7', '4'], 1, '5 × 6 = 30.'),
      q('18 : 3 = ?', ['5', '6', '7', '9'], 1, '3 × 6 = 18.'),
      q('Có 28 cái kẹo, chia đều cho 4 bạn. Mỗi bạn?', ['6', '7', '8', '5'], 1, '28 : 4 = 7 kẹo.'),
      q('15 : 3 = ?', ['4', '5', '6', '3'], 1, '3 × 5 = 15.'),
      q('20 : 4 = ?', ['4', '5', '6', '8'], 1, '4 × 5 = 20.'),
      q('45 : 5 = ?', ['8', '9', '10', '7'], 1, '5 × 9 = 45.'),
    ],
  },

  // 7. Đơn vị đo chiều dài
  {
    id: 'm2-do-dai', title: 'Đo chiều dài', mascot: '🦒', color: '#84cc16',
    icon: '📏', difficulty: 1,
    intro: 'Bé Hươu đo cây cao. Cm, dm, m là gì nhỉ?',
    questions: [
      q('1 dm = ? cm', ['10 cm', '100 cm', '1 cm', '5 cm'], 0, '1 đề-xi-mét = 10 xăng-ti-mét.'),
      q('1 m = ? cm', ['10 cm', '100 cm', '1000 cm', '50 cm'], 1, '1 mét = 100 cm.'),
      q('1 m = ? dm', ['10 dm', '100 dm', '5 dm', '1 dm'], 0, '1 m = 10 dm.'),
      q('30 cm = ? dm', ['3 dm', '30 dm', '300 dm', '0,3 dm'], 0, '30 cm : 10 = 3 dm.'),
      q('5 dm + 3 dm = ? dm', ['7 dm', '8 dm', '15 dm', '53 dm'], 1, '5 + 3 = 8 dm.'),
      q('Đo cây bút bằng đơn vị nào hợp lý nhất?', ['mm', 'cm', 'm', 'km'], 1, 'Bút khoảng 15 cm.'),
      q('Đo chiều cao bạn nhỏ bằng đơn vị nào?', ['mm', 'cm', 'm', 'km'], 1, 'Bạn nhỏ thường cao 100-130 cm.'),
      q('15 cm và 1 dm 5 cm, cái nào lớn hơn?', ['Bằng nhau', '15 cm lớn hơn', '1 dm 5 cm lớn hơn', 'Không so sánh được'], 0, '1 dm 5 cm = 10 + 5 = 15 cm.'),
      q('Một quyển vở dài 24 cm, một cây bút dài 16 cm. Cộng?', ['30 cm', '38 cm', '40 cm', '42 cm'], 2, '24 + 16 = 40 cm.'),
      q('1 m − 30 cm = ? cm', ['30 cm', '60 cm', '70 cm', '130 cm'], 2, '1 m = 100 cm; 100 − 30 = 70 cm.'),
      q('Cô giáo cao 1 m 60 cm = ? cm', ['16 cm', '106 cm', '160 cm', '1060 cm'], 2, '1 m = 100 cm; 100 + 60 = 160 cm.'),
      q('Bé Hươu cao 50 dm = ? m', ['5 m', '50 m', '500 m', '0,5 m'], 0, '50 : 10 = 5 m.'),
    ],
  },

  // 8. Đơn vị đo khối lượng và dung tích
  {
    id: 'm2-kg-lit', title: 'Cân nặng & lít', mascot: '🐧', color: '#3b82f6',
    icon: '⚖️', difficulty: 2,
    intro: 'Bé Cánh Cụt cân cá và đong nước. Hãy giúp nhé!',
    questions: [
      q('1 kg = ? g', ['10 g', '100 g', '1000 g', '500 g'], 2, '1 ki-lô-gam = 1000 gam.'),
      q('1 lít nước có thể đong vào chai bao nhiêu lần (chai 500 ml)?', ['1', '2', '3', '4'], 1, '1 l = 1000 ml; 1000 : 500 = 2 chai.'),
      q('Quả dưa hấu 4 kg và quả đu đủ 3 kg, tổng?', ['5 kg', '7 kg', '10 kg', '12 kg'], 1, '4 + 3 = 7 kg.'),
      q('Mẹ mua 3 kg gạo và 2 kg đường. Bao nhiêu kg?', ['3 kg', '5 kg', '6 kg', '32 kg'], 1, '3 + 2 = 5 kg.'),
      q('Một xô nước 5 lít, rót đi 2 lít. Còn lại?', ['2 l', '3 l', '4 l', '7 l'], 1, '5 − 2 = 3 lít.'),
      q('Vịt nặng 2 kg, gà nặng 1 kg ít hơn. Gà nặng?', ['1 kg', '2 kg', '3 kg', '0 kg'], 0, '2 − 1 = 1 kg.'),
      q('Cân 1 kg đường tương đương bao nhiêu túi 100 g?', ['5 túi', '10 túi', '100 túi', '1000 túi'], 1, '1000 g : 100 g = 10 túi.'),
      q('Đong 4 lít nước vào 2 thùng đều nhau, mỗi thùng?', ['1 l', '2 l', '3 l', '4 l'], 1, '4 : 2 = 2 lít.'),
      q('Bé Cánh Cụt cân được con cá 3 kg và con tôm 1 kg. Tổng?', ['2 kg', '3 kg', '4 kg', '13 kg'], 2, '3 + 1 = 4 kg.'),
      q('5 lít − 1 lít = ?', ['3 l', '4 l', '5 l', '6 l'], 1, '5 − 1 = 4 lít.'),
      q('Đo nước trong bể bơi nhỏ nên dùng đơn vị?', ['gam', 'mét', 'lít', 'kilôgam'], 2, 'Lít đo chất lỏng.'),
      q('Cân con voi nhỏ thì dùng?', ['gam', 'mét', 'lít', 'kilôgam'], 3, 'Vật nặng → kg.'),
    ],
  },

  // 9. Đồng hồ và thời gian
  {
    id: 'm2-thoi-gian', title: 'Xem đồng hồ', mascot: '🐢', color: '#ec4899',
    icon: '⏰', difficulty: 2,
    intro: 'Bé Rùa học xem giờ. Bạn xem giúp nhé!',
    questions: [
      q('1 giờ = ? phút', ['30 phút', '60 phút', '100 phút', '24 phút'], 1, '1 giờ = 60 phút.'),
      q('1 ngày = ? giờ', ['12', '24', '60', '7'], 1, '1 ngày có 24 giờ.'),
      q('Một tuần có ? ngày', ['5', '6', '7', '10'], 2, '1 tuần = 7 ngày.'),
      q('Kim giờ chỉ số 3, kim phút chỉ 12 — mấy giờ?', ['3 giờ', '12 giờ', '3 giờ 30 phút', '15 giờ'], 0, 'Kim phút chỉ 12 → đúng giờ. Kim giờ chỉ 3 → 3 giờ.'),
      q('Kim giờ giữa 4 và 5, kim phút chỉ 6 — mấy giờ?', ['4 giờ 30 phút', '5 giờ 30 phút', '4 giờ 6 phút', '6 giờ 30 phút'], 0, 'Kim phút chỉ 6 = 30 phút; kim giờ giữa 4-5 → 4 giờ 30.'),
      q('1 giờ 30 phút = ? phút', ['60 phút', '90 phút', '130 phút', '30 phút'], 1, '60 + 30 = 90 phút.'),
      q('Đi học từ 7 giờ đến 11 giờ, bao lâu?', ['3 giờ', '4 giờ', '5 giờ', '18 giờ'], 1, '11 − 7 = 4 giờ.'),
      q('Thứ Hai sau Chủ Nhật, vậy thứ liền trước thứ Sáu là?', ['Thứ Bảy', 'Thứ Năm', 'Thứ Tư', 'Thứ Bảy'], 1, 'Trước thứ Sáu là thứ Năm.'),
      q('Tháng 2 thường có?', ['28 ngày', '30 ngày', '31 ngày', '29 ngày'], 0, 'Tháng 2 thường: 28 ngày (năm nhuận: 29).'),
      q('Tháng 1, 3, 5, 7, 8, 10, 12 có?', ['28 ngày', '29 ngày', '30 ngày', '31 ngày'], 3, 'Các tháng này có 31 ngày.'),
      q('Một năm có ? tháng', ['10', '11', '12', '24'], 2, '1 năm = 12 tháng.'),
      q('Bây giờ là 9 giờ, sau 3 giờ nữa là?', ['11 giờ', '12 giờ', '13 giờ', '6 giờ'], 1, '9 + 3 = 12 giờ.'),
    ],
  },

  // 10. Tiền Việt Nam
  {
    id: 'm2-tien-viet', title: 'Tiền Việt Nam', mascot: '🦝', color: '#ef4444',
    icon: '💰', difficulty: 2,
    intro: 'Bé Gấu Mèo đi chợ. Tính tiền giúp bé nhé!',
    questions: [
      q('1 tờ 5000 đồng và 1 tờ 2000 đồng = ? đồng', ['5200', '7000', '52000', '70000'], 1, '5000 + 2000 = 7000 đồng.'),
      q('Mua 1 cây kẹo 500 đồng, đưa 1000 đồng. Trả lại?', ['500 đ', '1000 đ', '1500 đ', '100 đ'], 0, '1000 − 500 = 500 đồng.'),
      q('Có 2 tờ 10000 đồng. Bao nhiêu tiền?', ['12000', '20000', '110000', '2010'], 1, '2 × 10000 = 20000 đồng.'),
      q('Đổi 5 tờ 2000 đồng thành tờ nào?', ['1 tờ 5000', '1 tờ 10000', '2 tờ 5000', '10 tờ 1000'], 1, '5 × 2000 = 10000 đồng.'),
      q('Mua quyển vở 8000 đồng, đưa tờ 10000. Tiền thừa?', ['1000 đ', '2000 đ', '3000 đ', '8000 đ'], 1, '10000 − 8000 = 2000 đồng.'),
      q('Bé Gấu Mèo có 5000 đồng, mẹ cho thêm 2000 đồng. Có?', ['5200 đ', '7000 đ', '52000 đ', '3000 đ'], 1, '5000 + 2000 = 7000 đồng.'),
      q('1 chiếc bút 3000 đ, mua 2 chiếc?', ['3000 đ', '5000 đ', '6000 đ', '32000 đ'], 2, '2 × 3000 = 6000 đồng.'),
      q('Có 20000 đ, mua 1 cuốn truyện 15000 đ. Còn?', ['3000 đ', '5000 đ', '15000 đ', '35000 đ'], 1, '20000 − 15000 = 5000 đồng.'),
      q('Mẹ đưa 50000 đ, mua rau 12000 đ và cá 18000 đ. Còn?', ['10000 đ', '20000 đ', '30000 đ', '50000 đ'], 1, '50000 − 12000 − 18000 = 20000 đồng.'),
      q('Mua 1 kg cam 25000 đồng. 2 kg?', ['25000 đ', '30000 đ', '50000 đ', '52000 đ'], 2, '2 × 25000 = 50000 đồng.'),
      q('Đổi tờ 100000 đ thành mấy tờ 50000 đ?', ['1 tờ', '2 tờ', '5 tờ', '10 tờ'], 1, '100000 : 50000 = 2 tờ.'),
      q('Có 3 tờ 5000 và 1 tờ 10000. Tổng?', ['15000', '20000', '25000', '30000'], 2, '3×5000 + 10000 = 25000 đồng.'),
    ],
  },

  // 11. Hình học cơ bản
  {
    id: 'm2-hinh-hoc', title: 'Hình học vui', mascot: '🦔', color: '#8b5cf6',
    icon: '🔺', difficulty: 1,
    intro: 'Bé Nhím khám phá thế giới hình khối!',
    questions: [
      q('Hình tam giác có mấy cạnh?', ['2', '3', '4', '5'], 1, 'Tam giác có 3 cạnh và 3 đỉnh.'),
      q('Hình vuông có mấy cạnh bằng nhau?', ['2', '3', '4', '0'], 2, 'Hình vuông có 4 cạnh bằng nhau.'),
      q('Hình tròn có cạnh không?', ['Có 1 cạnh', 'Có 2 cạnh', 'Có 0 cạnh (đường cong)', 'Có 4 cạnh'], 2, 'Hình tròn không có cạnh thẳng — chỉ có 1 đường tròn cong.'),
      q('Hình chữ nhật có mấy đỉnh?', ['2', '3', '4', '6'], 2, 'Hình chữ nhật có 4 đỉnh.'),
      q('Mặt đồng hồ thường là hình?', ['Vuông', 'Tròn', 'Tam giác', 'Chữ nhật'], 1, 'Mặt đồng hồ truyền thống là hình tròn.'),
      q('Hình lập phương (khối vuông) có mấy mặt?', ['4', '6', '8', '12'], 1, 'Khối vuông có 6 mặt đều là hình vuông.'),
      q('Hình ngôi sao 5 cánh có mấy cánh?', ['4', '5', '6', '8'], 1, 'Ngôi sao 5 cánh có 5 cánh.'),
      q('Hình chữ nhật khác hình vuông ở điểm gì?', ['Có 4 cạnh', 'Có 4 góc vuông', '2 cạnh dài + 2 cạnh ngắn', 'Có đường chéo'], 2, 'Hình vuông có 4 cạnh bằng; hình chữ nhật có 2 cặp cạnh dài-ngắn.'),
      q('Bánh pizza thường được chia thành hình?', ['Vuông', 'Tam giác', 'Tròn', 'Chữ nhật'], 1, 'Mỗi miếng pizza có hình tam giác.'),
      q('Khối cầu (bóng) có cạnh không?', ['Có 4 cạnh', 'Không có cạnh', 'Có 6 cạnh', 'Có 1 cạnh'], 1, 'Khối cầu không có cạnh, không có mặt phẳng.'),
      q('Lá cờ tổ quốc có hình?', ['Tam giác', 'Vuông', 'Chữ nhật', 'Tròn'], 2, 'Cờ Việt Nam là hình chữ nhật.'),
      q('Quả bóng đá có hình?', ['Tròn', 'Cầu', 'Lập phương', 'Lăng trụ'], 1, 'Quả bóng đá là khối cầu.'),
    ],
  },

  // 12. Bài toán có lời văn
  {
    id: 'm2-loi-van', title: 'Toán có lời văn', mascot: '🦉', color: '#f59e0b',
    icon: '📖', difficulty: 2,
    intro: 'Bé Cú giải bài toán đố. Đọc kỹ rồi tính nhé!',
    questions: [
      q('Vườn có 18 con gà mái và 12 con gà trống. Tổng?', ['20', '24', '30', '32'], 2, '18 + 12 = 30 con gà.'),
      q('Sân có 45 học sinh, 17 bạn vào lớp. Còn lại trên sân?', ['18', '28', '38', '62'], 1, '45 − 17 = 28 bạn.'),
      q('Một cây bút giá 4000 đ. Lan mua 5 cây?', ['9000 đ', '15000 đ', '20000 đ', '45000 đ'], 2, '5 × 4000 = 20000 đồng.'),
      q('Bà có 36 quả cam, chia đều cho 4 cháu. Mỗi cháu?', ['7', '8', '9', '10'], 2, '36 : 4 = 9 quả.'),
      q('Bố cao 1 m 70 cm, con cao 1 m 20 cm. Bố cao hơn?', ['30 cm', '50 cm', '70 cm', '90 cm'], 1, '170 − 120 = 50 cm.'),
      q('1 hộp có 6 bút, 3 hộp có?', ['9', '12', '15', '18'], 3, '3 × 6 = 18 bút.'),
      q('Quyển sách 80 trang, đọc 25 trang. Còn?', ['45', '55', '65', '105'], 1, '80 − 25 = 55 trang.'),
      q('Mỗi ngày học 5 từ, sau 1 tuần học bao nhiêu từ?', ['25', '30', '35', '50'], 2, '7 ngày × 5 = 35 từ.'),
      q('Sân có 8 hàng cây, mỗi hàng 4 cây. Tổng?', ['12', '24', '28', '32'], 3, '8 × 4 = 32 cây.'),
      q('Mẹ mua 3 kg gạo 15000 đ/kg. Hết?', ['18000', '30000', '45000', '50000'], 2, '3 × 15000 = 45000 đồng.'),
      q('Đàn vịt 25 con, đàn gà gấp đôi đàn vịt. Đàn gà có?', ['25', '50', '75', '27'], 1, '2 × 25 = 50 con gà.'),
      q('Anh 9 tuổi, em kém anh 4 tuổi. Em mấy tuổi?', ['3', '5', '13', '4'], 1, '9 − 4 = 5 tuổi.'),
    ],
  },

  // 13. So sánh số
  {
    id: 'm2-so-sanh', title: 'So sánh số', mascot: '🦋', color: '#06b6d4',
    icon: '🔍', difficulty: 1,
    intro: 'Bé Bướm bay tìm số lớn nhất. Bạn hỗ trợ nhé!',
    questions: [
      q('Điền dấu: 245 ? 254', ['>', '<', '=', '≥'], 1, 'Hàng trăm bằng nhau, hàng chục 4 < 5 → 245 < 254.'),
      q('Số lớn nhất trong: 87, 78, 80, 88', ['87', '78', '80', '88'], 3, 'So sánh: 88 lớn nhất.'),
      q('Số bé nhất: 506, 605, 560, 650', ['506', '605', '560', '650'], 0, 'Hàng trăm: 506 và 560 bắt đầu 5; trong đó 506 nhỏ hơn 560.'),
      q('199 … 200', ['>', '<', '=', '×'], 1, '199 < 200 vì 199 + 1 = 200.'),
      q('Số liền sau số 88 lớn hơn 88 mấy đơn vị?', ['1', '2', '5', '10'], 0, 'Liền sau cộng thêm 1.'),
      q('Sắp xếp giảm dần: 12, 21, 121, 112', ['121, 112, 21, 12', '12, 21, 112, 121', '21, 12, 112, 121', '12, 121, 112, 21'], 0, 'Giảm dần: 121, 112, 21, 12.'),
      q('100 + 50 ? 200 − 60', ['>', '<', '=', '≥'], 1, '150 < 140? Sai: 150 > 140. Đáp án đúng: >.'),
      q('Số nhỏ nhất có 2 chữ số là?', ['10', '11', '12', '99'], 0, '10 là số có 2 chữ số nhỏ nhất.'),
      q('Số nào lớn hơn: 99 hay 100?', ['99', '100', 'Bằng nhau', 'Không xác định'], 1, '100 > 99.'),
      q('Trong các số sau, số nào tròn chục: 23, 30, 38, 45?', ['23', '30', '38', '45'], 1, '30 chia hết cho 10.'),
      q('5 chục bao nhiêu đơn vị?', ['5', '50', '500', '55'], 1, '5 chục = 50.'),
      q('Hơn 100 và ít hơn 110, số đó có thể là?', ['90', '105', '120', '99'], 1, '100 < 105 < 110.'),
    ],
  },

  // 14. Cộng trừ trong phạm vi 1000
  {
    id: 'm2-cong-tru-1000', title: 'Cộng trừ đến 1000', mascot: '🦄', color: '#d946ef',
    icon: '🎯', difficulty: 3,
    intro: 'Kỳ Lân thử thách cuối! Cộng trừ số lớn nhé!',
    questions: [
      q('456 + 232 = ?', ['678', '688', '798', '589'], 1, '6+2=8, 5+3=8, 4+2=6 → 688.'),
      q('789 − 234 = ?', ['455', '555', '525', '566'], 1, '789 − 234 = 555.'),
      q('300 + 250 + 100 = ?', ['450', '550', '600', '650'], 3, '300 + 250 = 550, + 100 = 650.'),
      q('1000 − 350 = ?', ['550', '600', '650', '750'], 2, '1000 − 350 = 650.'),
      q('245 + 178 = ?', ['413', '423', '433', '533'], 1, '5+8=13 (nhớ 1); 4+7+1=12 (nhớ 1); 2+1+1=4 → 423.'),
      q('Một cửa hàng có 458 bút, bán 169 bút. Còn?', ['289', '299', '389', '587'], 0, '458 − 169 = 289 bút.'),
      q('Lớp 2A có 30 bạn, lớp 2B có 28 bạn, lớp 2C có 32 bạn. Tổng?', ['80', '85', '90', '95'], 2, '30+28+32 = 90 bạn.'),
      q('700 − 250 = ?', ['350', '400', '450', '500'], 2, '700 − 250 = 450.'),
      q('Số nhỏ nhất có 3 chữ số khác nhau là?', ['100', '102', '111', '120'], 1, '100 có hai số 0 giống nhau. 102 = 1, 0, 2 đều khác → đáp án.'),
      q('567 + 233 = ?', ['700', '800', '900', '790'], 1, '7+3=10 (nhớ 1); 6+3+1=10 (nhớ 1); 5+2+1=8 → 800.'),
      q('Đoàn xe có 425 hành khách, lên thêm 78 người. Tổng?', ['493', '503', '513', '523'], 1, '425 + 78 = 503.'),
      q('999 − 1 = ?', ['998', '989', '990', '988'], 0, '999 − 1 = 998.'),
    ],
  },

  // 15. Chu vi và hình học nâng cao
  {
    id: 'm2-chu-vi', title: 'Chu vi hình', mascot: '🐳', color: '#0891b2',
    icon: '📐', difficulty: 2,
    intro: 'Bé Cá Voi đo viền hồ. Hãy tính chu vi nhé!',
    questions: [
      q('Hình tam giác có 3 cạnh 4 cm, 5 cm, 6 cm. Chu vi?', ['14 cm', '15 cm', '16 cm', '120 cm'], 1, 'Chu vi = 4 + 5 + 6 = 15 cm.'),
      q('Hình vuông cạnh 7 cm. Chu vi?', ['21 cm', '28 cm', '49 cm', '14 cm'], 1, 'Chu vi = 4 × 7 = 28 cm.'),
      q('Hình chữ nhật dài 9 cm, rộng 4 cm. Chu vi?', ['13 cm', '18 cm', '26 cm', '36 cm'], 2, 'Chu vi = (9 + 4) × 2 = 26 cm.'),
      q('Hình tam giác đều cạnh 5 cm. Chu vi?', ['10 cm', '15 cm', '20 cm', '25 cm'], 1, '3 cạnh đều = 5 cm; chu vi = 3 × 5 = 15 cm.'),
      q('Hình vuông chu vi 20 cm. Cạnh?', ['4 cm', '5 cm', '6 cm', '10 cm'], 1, '20 : 4 = 5 cm.'),
      q('Hình chữ nhật chu vi 30 cm, dài 10 cm. Rộng?', ['3 cm', '5 cm', '10 cm', '15 cm'], 1, 'Nửa chu vi = 15; rộng = 15 − 10 = 5 cm.'),
      q('Vườn hoa hình vuông cạnh 10 m. Chu vi?', ['20 m', '30 m', '40 m', '50 m'], 2, '4 × 10 = 40 m.'),
      q('Cạnh hình vuông là 8 dm. Chu vi tính bằng cm?', ['80 cm', '320 cm', '32 cm', '800 cm'], 1, 'Chu vi = 4 × 8 dm = 32 dm = 320 cm.'),
      q('Hình tam giác cân, 2 cạnh bằng 6 cm và cạnh đáy 4 cm. Chu vi?', ['10 cm', '14 cm', '16 cm', '24 cm'], 2, 'Chu vi = 6 + 6 + 4 = 16 cm.'),
      q('Một mảnh đất hình chữ nhật dài 15 m rộng 8 m. Chu vi?', ['23 m', '30 m', '46 m', '60 m'], 2, '(15+8) × 2 = 46 m.'),
      q('Khoảng giấy hình vuông chu vi 24 cm. Cạnh?', ['4 cm', '6 cm', '8 cm', '12 cm'], 1, '24 : 4 = 6 cm.'),
      q('Hình chữ nhật rộng 5 cm dài gấp 3 lần rộng. Chu vi?', ['20 cm', '30 cm', '40 cm', '50 cm'], 2, 'Dài = 15 cm; chu vi = (5+15)×2 = 40 cm.'),
    ],
  },

  // 16. Mini-Game: tính nhanh (Time Attack)
  {
    id: 'm2-tinh-nhanh', title: '⚡ Tính nhanh', mascot: '⚡', color: '#fde047',
    icon: '⚡', difficulty: 3, mode: 'time-attack',
    intro: 'Tính càng nhanh càng tốt — 60 giây để ghi điểm cao!',
    questions: [
      q('5 + 7', ['10', '12', '11', '13'], 1, '12'),
      q('8 + 6', ['12', '14', '15', '13'], 1, '14'),
      q('9 + 9', ['16', '18', '20', '17'], 1, '18'),
      q('15 − 7', ['7', '8', '9', '10'], 1, '8'),
      q('12 − 6', ['5', '6', '7', '8'], 1, '6'),
      q('4 × 5', ['15', '20', '25', '10'], 1, '20'),
      q('3 × 7', ['18', '21', '24', '14'], 1, '21'),
      q('6 × 2', ['10', '12', '14', '8'], 1, '12'),
      q('24 : 4', ['4', '5', '6', '8'], 2, '6'),
      q('35 : 5', ['5', '6', '7', '8'], 2, '7'),
      q('5 × 9', ['40', '45', '50', '54'], 1, '45'),
      q('100 − 65', ['25', '35', '45', '40'], 1, '35'),
      q('30 + 40', ['60', '70', '80', '90'], 1, '70'),
      q('27 + 13', ['30', '40', '50', '37'], 1, '40'),
      q('48 − 9', ['37', '38', '39', '40'], 2, '39'),
      q('7 × 4', ['24', '28', '32', '21'], 1, '28'),
      q('63 : 9', ['6', '7', '8', '9'], 1, '7'),
      q('2 × 9', ['16', '18', '20', '14'], 1, '18'),
      q('19 + 21', ['30', '35', '40', '45'], 2, '40'),
      q('72 − 28', ['44', '54', '46', '34'], 0, '44'),
    ],
  },
];

export const MATH2_INDEX = MATH2_TOPICS.map(t => ({
  id: t.id, title: t.title, mascot: t.mascot, color: t.color,
  icon: t.icon, difficulty: t.difficulty, intro: t.intro,
  questionCount: t.questions.length, mode: t.mode || 'quiz',
}));

export function getMath2Topic(id) {
  return MATH2_TOPICS.find(t => t.id === id);
}
