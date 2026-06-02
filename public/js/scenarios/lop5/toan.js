// ============================================================
// Lớp 5 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK GDPT 2018 (3 bộ Cánh Diều / Kết nối / Chân trời).
// ID prefix: "P5-wNN-quiz" → trùng prefix module "P5".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5', 'toan', n, title, qs, opts);

export const P5_TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập số tự nhiên', [
    Q('Số liền sau của 9 999 là?', ['9 998', '10 000', '99 999', '1 000'], 1, '9 999 + 1 = 10 000.'),
    Q('Số gồm 3 chục nghìn, 2 nghìn, 5 trăm và 4 đơn vị là?', ['32 504', '3 254', '32 540', '325 040'], 0, '30 000 + 2 000 + 500 + 4 = 32 504.'),
    Q('Chữ số 7 trong số 87 432 có giá trị là?', ['7', '70', '700', '7 000'], 3, 'Chữ số 7 đứng ở hàng nghìn.'),
    Q('Sắp xếp từ bé đến lớn: 4 321; 4 312; 4 231; 4 213', ['4 213; 4 231; 4 312; 4 321', '4 321; 4 312; 4 231; 4 213', '4 213; 4 312; 4 231; 4 321', '4 231; 4 213; 4 312; 4 321'], 0, 'So sánh theo từng hàng từ trái sang phải.'),
    Q('1 triệu có mấy chữ số 0?', ['5', '6', '7', '4'], 1, '1 000 000 có 6 chữ số 0.'),
    Q('Số chẵn lớn nhất có 4 chữ số khác nhau là?', ['9 876', '9 874', '8 642', '9 998'], 0, 'Chữ số tận cùng phải chẵn, các chữ số khác nhau → 9876.'),
  ]),

  M(2, 'Ôn tập phân số (1)', [
    Q('Phân số 3/4 đọc là?', ['Ba phần tư', 'Bốn phần ba', 'Ba trên bốn', 'Ba bốn'], 0, '3/4 đọc là "ba phần tư".'),
    Q('Phân số 5/5 bằng?', ['0', '1', '5', '10'], 1, 'Tử = mẫu thì phân số = 1.'),
    Q('Trong các phân số sau, phân số nào lớn hơn 1?', ['2/3', '5/5', '7/4', '1/2'], 2, '7/4 có tử > mẫu nên > 1.'),
    Q('Rút gọn 6/8 ta được?', ['3/4', '2/4', '3/8', '6/4'], 0, 'Chia cả tử và mẫu cho 2: 6/8 = 3/4.'),
    Q('Quy đồng 1/2 và 1/3 (mẫu chung 6) được?', ['2/6 và 3/6', '3/6 và 2/6', '1/6 và 1/6', '6/2 và 6/3'], 1, '1/2 = 3/6, 1/3 = 2/6.'),
    Q('Phân số 8/12 rút gọn tối giản là?', ['2/3', '4/6', '8/12', '3/4'], 0, '8/12 = 2/3 (chia cả tử và mẫu cho 4).'),
  ]),

  M(3, 'Ôn tập phân số (2) — Cộng trừ', [
    Q('1/4 + 2/4 = ?', ['3/4', '3/8', '1/2', '2/8'], 0, 'Cùng mẫu: cộng tử số.'),
    Q('1/2 + 1/3 = ?', ['2/5', '5/6', '1/5', '2/6'], 1, 'Quy đồng: 3/6 + 2/6 = 5/6.'),
    Q('5/6 − 1/6 = ?', ['4/6', '2/3', 'Cả A và B đều đúng', '6/6'], 2, '5/6 − 1/6 = 4/6 = 2/3.'),
    Q('3/4 − 1/2 = ?', ['1/4', '2/2', '1/2', '2/4'], 0, '3/4 − 2/4 = 1/4.'),
    Q('1 − 2/5 = ?', ['3/5', '2/5', '5/2', '1/5'], 0, '5/5 − 2/5 = 3/5.'),
    Q('Tổng 1/2 + 1/4 + 1/4 = ?', ['1', '3/4', '1/2', '2/4'], 0, '2/4 + 1/4 + 1/4 = 4/4 = 1.'),
  ]),

  M(4, 'Ôn tập phân số (3) — Nhân chia', [
    Q('2/3 × 3/4 = ?', ['6/12', '1/2', 'Cả A và B đều đúng', '5/7'], 2, '2×3/3×4 = 6/12 = 1/2.'),
    Q('1/2 × 4 = ?', ['2', '4/2', 'Cả A và B đều đúng', '1/8'], 2, '1/2 × 4 = 4/2 = 2.'),
    Q('2/5 : 1/5 = ?', ['1', '2', '2/25', '5/2'], 1, '2/5 × 5/1 = 10/5 = 2.'),
    Q('3/4 : 3 = ?', ['1/4', '1/3', '3/12', 'Cả A và C đều đúng'], 3, '3/4 × 1/3 = 3/12 = 1/4.'),
    Q('Phân số đảo ngược của 2/7 là?', ['7/2', '2/7', '−2/7', '7/−2'], 0, 'Đổi chỗ tử và mẫu.'),
    Q('1/2 × 1/3 × 1/4 = ?', ['1/24', '1/9', '3/24', '1/12'], 0, '1×1×1 / 2×3×4 = 1/24.'),
  ]),

  M(5, 'Hỗn số', [
    Q('Hỗn số 2 và 1/3 viết thành phân số là?', ['7/3', '5/3', '3/2', '6/3'], 0, '2 × 3 + 1 = 7 → 7/3.'),
    Q('Phân số 7/2 đổi ra hỗn số là?', ['3 và 1/2', '2 và 3/2', '1 và 7/2', '7 và 1/2'], 0, '7 : 2 = 3 dư 1 → 3 và 1/2.'),
    Q('Phần nguyên của hỗn số 5 và 2/7 là?', ['5', '2', '7', '10'], 0, '5 là phần nguyên đứng trước.'),
    Q('1 và 1/2 + 2 và 1/2 = ?', ['4', '3', '3 và 1/2', '4 và 1/2'], 0, '1 + 2 = 3; 1/2 + 1/2 = 1 → 4.'),
    Q('Đổi 11/4 thành hỗn số?', ['2 và 3/4', '3 và 3/4', '2 và 1/4', '4 và 2/3'], 0, '11 : 4 = 2 dư 3 → 2 và 3/4.'),
    Q('Hỗn số nào lớn nhất?', ['1 và 7/8', '2 và 1/8', '1 và 1/2', '2'], 1, '2 và 1/8 ≈ 2,125 — lớn nhất.'),
  ]),

  M(6, 'Số thập phân — đọc viết', [
    Q('Số 3,14 đọc là?', ['Ba phẩy mười bốn', 'Ba phẩy một bốn', 'Ba một bốn', 'Ba mươi mốt phần tư'], 0, 'Phần thập phân đọc liền: "mười bốn".'),
    Q('Phân số 1/10 viết dưới dạng số thập phân là?', ['0,1', '1,0', '10', '0,01'], 0, '1/10 = 0,1.'),
    Q('Phần thập phân của 7,205 là?', ['205', '7', '0,205', '2 0 5'], 0, 'Phần sau dấu phẩy là phần thập phân.'),
    Q('Hàng phần trăm của số 5,247 là chữ số?', ['2', '4', '7', '5'], 1, 'Chữ số thứ hai sau dấu phẩy là hàng phần trăm.'),
    Q('Viết "không phẩy ba mươi lăm" bằng chữ số?', ['0,35', '0,305', '3,5', '0,035'], 0, '"ba mươi lăm" → 35 ở phần thập phân.'),
    Q('45/100 viết dưới dạng thập phân?', ['4,5', '0,45', '0,045', '45,00'], 1, '45/100 = 0,45.'),
  ]),

  M(7, 'So sánh — cộng trừ số thập phân', [
    Q('So sánh 2,5 và 2,50', ['Bằng nhau', '2,5 lớn hơn', '2,50 lớn hơn', 'Không so sánh được'], 0, 'Thêm 0 vào tận cùng phần thập phân không đổi giá trị.'),
    Q('Số bé hơn 1,5 là?', ['1,55', '1,499', '2,0', '1,6'], 1, '1,499 < 1,500.'),
    Q('1,2 + 3,5 = ?', ['4,7', '4,07', '47', '5,7'], 0, 'Đặt tính thẳng cột thập phân.'),
    Q('5,8 − 2,3 = ?', ['3,5', '2,5', '3,05', '8,1'], 0, '5,8 − 2,3 = 3,5.'),
    Q('0,75 + 0,25 = ?', ['1', '0,9', '0,100', '10'], 0, '0,75 + 0,25 = 1,00 = 1.'),
    Q('10 − 0,1 = ?', ['9,9', '9,1', '9,99', '10,1'], 0, '10,0 − 0,1 = 9,9.'),
  ]),

  M(8, 'Nhân số thập phân', [
    Q('1,2 × 10 = ?', ['12', '0,12', '120', '1,20'], 0, 'Nhân 10: dời dấu phẩy sang phải 1 chữ số.'),
    Q('0,5 × 100 = ?', ['5', '50', '500', '0,05'], 1, 'Nhân 100: dời dấu phẩy sang phải 2 chữ số.'),
    Q('2,5 × 4 = ?', ['10', '10,0', 'Cả A và B đều đúng', '8,5'], 2, '2,5 × 4 = 10.'),
    Q('0,3 × 0,2 = ?', ['0,06', '0,6', '6', '0,006'], 0, '3×2 = 6, tổng 2 chữ số thập phân → 0,06.'),
    Q('1,5 × 1,5 = ?', ['2,25', '2,5', '3', '22,5'], 0, '15 × 15 = 225 → 2,25.'),
    Q('Nhân nhẩm 7,8 × 0,1 = ?', ['0,78', '7,80', '78', '0,078'], 0, 'Nhân 0,1: dời dấu phẩy sang trái 1 chữ số.'),
  ]),

  M(9, 'Chia số thập phân', [
    Q('25,5 : 10 = ?', ['2,55', '0,255', '255', '25,50'], 0, 'Chia 10: dời dấu phẩy sang trái 1 chữ số.'),
    Q('7,5 : 100 = ?', ['0,075', '0,75', '750', '7,5'], 0, 'Chia 100: dời dấu phẩy sang trái 2 chữ số.'),
    Q('6 : 0,1 = ?', ['60', '6', '0,6', '0,06'], 0, 'Chia 0,1 tương đương nhân 10.'),
    Q('8,4 : 2 = ?', ['4,2', '4,02', '42', '0,42'], 0, '8,4 : 2 = 4,2.'),
    Q('1 : 4 (viết dưới dạng số thập phân) = ?', ['0,25', '0,4', '0,5', '0,025'], 0, '1/4 = 0,25.'),
    Q('5,6 : 0,7 = ?', ['8', '0,8', '80', '7'], 0, '5,6 : 0,7 = 56 : 7 = 8.'),
  ]),

  M(10, 'Đơn vị đo diện tích — dm² mm² km² ha', [
    Q('1 m² bằng bao nhiêu dm²?', ['10', '100', '1 000', '10 000'], 1, '1 m² = 100 dm².'),
    Q('1 km² bằng bao nhiêu m²?', ['1 000', '10 000', '100 000', '1 000 000'], 3, '1 km² = 1 000 000 m².'),
    Q('1 ha (héc-ta) bằng?', ['100 m²', '1 000 m²', '10 000 m²', '100 000 m²'], 2, '1 ha = 10 000 m².'),
    Q('1 km² bằng bao nhiêu ha?', ['10', '100', '1 000', '10 000'], 1, '1 km² = 100 ha.'),
    Q('5 ha = ? m²', ['500', '5 000', '50 000', '500 000'], 2, '5 × 10 000 = 50 000 m².'),
    Q('1 cm² bằng bao nhiêu mm²?', ['10', '100', '1 000', '1'], 1, '1 cm² = 100 mm².'),
  ]),

  M(11, 'Diện tích hình tam giác', [
    Q('Công thức diện tích tam giác là?', ['a × h', 'a × h : 2', 'a + h', 'a × b × c'], 1, 'S = đáy × chiều cao : 2.'),
    Q('Tam giác có đáy 6 cm, cao 4 cm. S = ?', ['24 cm²', '12 cm²', '10 cm²', '20 cm²'], 1, '6 × 4 : 2 = 12 cm².'),
    Q('Tam giác vuông có 2 cạnh góc vuông 3 cm và 4 cm. S = ?', ['12 cm²', '6 cm²', '7 cm²', '5 cm²'], 1, '3 × 4 : 2 = 6 cm².'),
    Q('Chiều cao của tam giác là đoạn nào?', ['Cạnh bên', 'Đoạn vuông góc từ đỉnh xuống đáy', 'Đường chéo', 'Một cạnh bất kì'], 1, 'Chiều cao vuông góc với đáy.'),
    Q('Tam giác có S = 20 cm², đáy 5 cm. Chiều cao?', ['4 cm', '8 cm', '10 cm', '2 cm'], 1, 'h = 2S : a = 2×20 : 5 = 8 cm.'),
    Q('Tam giác đáy 10 cm, cao 0,5 m. S = ? cm²', ['5', '50', '250', '500'], 2, '0,5 m = 50 cm; 10 × 50 : 2 = 250 cm².'),
  ]),

  M(12, 'Diện tích hình thang', [
    Q('Công thức diện tích hình thang?', ['(a + b) × h : 2', 'a × b × h', 'a × h', '(a − b) × h'], 0, 'S = (đáy lớn + đáy bé) × cao : 2.'),
    Q('Hình thang có đáy lớn 10, đáy bé 6, cao 4. S = ?', ['32', '40', '64', '60'], 0, '(10 + 6) × 4 : 2 = 32.'),
    Q('Hình thang có 2 đáy 8 cm và 4 cm, cao 5 cm. S = ?', ['30 cm²', '60 cm²', '20 cm²', '40 cm²'], 0, '(8 + 4) × 5 : 2 = 30 cm².'),
    Q('Hình thang vuông là hình thang có?', ['Hai đáy bằng nhau', 'Một cạnh bên vuông góc với 2 đáy', 'Bốn góc vuông', 'Bốn cạnh bằng nhau'], 1, 'Cạnh bên đó chính là chiều cao.'),
    Q('Hình thang đáy lớn 12, đáy bé 8, cao 10. S = ?', ['100', '200', '120', '80'], 0, '(12 + 8) × 10 : 2 = 100.'),
    Q('Tổng 2 đáy của hình thang là 30 cm, S = 60 cm². Chiều cao?', ['2 cm', '4 cm', '6 cm', '8 cm'], 1, 'h = 2S / (a+b) = 120/30 = 4 cm.'),
  ]),

  M(13, 'Hình tròn — chu vi đường tròn', [
    Q('Đường kính gấp bao nhiêu lần bán kính?', ['1', '2', '3', '4'], 1, 'd = 2r.'),
    Q('Công thức chu vi đường tròn?', ['π × r', 'π × d', '2π × d', 'r × r × π'], 1, 'C = d × π = 2 × r × π.'),
    Q('Đường tròn bán kính 5 cm. Chu vi ≈ ? (π ≈ 3,14)', ['15,7 cm', '31,4 cm', '78,5 cm', '10 cm'], 1, 'C = 2 × 5 × 3,14 = 31,4 cm.'),
    Q('Đường tròn có d = 10 cm. Chu vi ≈ ?', ['31,4 cm', '15,7 cm', '78,5 cm', '20 cm'], 0, 'C = 10 × 3,14 = 31,4 cm.'),
    Q('Bán kính đường tròn có chu vi 6,28 cm? (π ≈ 3,14)', ['1 cm', '2 cm', '3 cm', '0,5 cm'], 0, 'r = C / (2π) = 6,28 / 6,28 = 1 cm.'),
    Q('π là số gì?', ['Số nguyên', 'Số tự nhiên', 'Số thập phân vô hạn không tuần hoàn', 'Phân số'], 2, 'π ≈ 3,14159265… vô hạn không tuần hoàn.'),
  ]),

  M(14, 'Diện tích hình tròn', [
    Q('Công thức diện tích hình tròn?', ['π × r', 'π × r × r', '2π × r', 'π × d'], 1, 'S = π × r².'),
    Q('Hình tròn r = 2 cm. S ≈ ? (π ≈ 3,14)', ['12,56 cm²', '6,28 cm²', '4 cm²', '3,14 cm²'], 0, '3,14 × 2 × 2 = 12,56 cm².'),
    Q('Hình tròn r = 10 cm. S ≈ ?', ['314 cm²', '31,4 cm²', '100 cm²', '62,8 cm²'], 0, '3,14 × 100 = 314 cm².'),
    Q('Hình tròn d = 6 cm. S ≈ ?', ['9π cm²', '28,26 cm²', 'Cả A và B đều đúng', '36π cm²'], 2, 'r = 3 → S = 3,14 × 9 = 28,26 cm² = 9π.'),
    Q('Hai hình tròn cùng tâm tạo thành hình?', ['Vành khăn', 'Hình thang', 'Hình elip', 'Hình quạt'], 0, 'Phần giữa 2 đường tròn đồng tâm là vành khăn.'),
    Q('S hình tròn r = 5 cm là?', ['78,5 cm²', '31,4 cm²', '15,7 cm²', '25 cm²'], 0, '3,14 × 25 = 78,5 cm².'),
  ]),

  M(15, 'Tỉ số — Tỉ số phần trăm (%)', [
    Q('Tỉ số phần trăm của 25 và 100 là?', ['25%', '0,25%', '100%', '4%'], 0, '25/100 = 25%.'),
    Q('40% viết dưới dạng phân số là?', ['40/100 = 2/5', '4/10', '40', '0,4%'], 0, '40% = 40/100 = 2/5.'),
    Q('0,75 = bao nhiêu %?', ['7,5%', '75%', '750%', '0,75%'], 1, '0,75 = 75/100 = 75%.'),
    Q('Lớp có 30 HS, 12 HS giỏi. Tỉ số % HS giỏi?', ['12%', '30%', '40%', '60%'], 2, '12 / 30 × 100 = 40%.'),
    Q('20% của 50 là?', ['10', '20', '2,5', '100'], 0, '50 × 20 / 100 = 10.'),
    Q('Tìm 1 số biết 25% của nó là 30', ['120', '60', '90', '7,5'], 0, '30 : 25 × 100 = 120.'),
  ]),

  M(16, 'Vận tốc — Quãng đường — Thời gian (1)', [
    Q('Công thức tính vận tốc?', ['v = s × t', 'v = s : t', 'v = s + t', 'v = t : s'], 1, 'Vận tốc = quãng đường : thời gian.'),
    Q('Quãng đường 120 km, thời gian 3 giờ. Vận tốc?', ['40 km/h', '30 km/h', '360 km/h', '4 km/h'], 0, '120 : 3 = 40 km/h.'),
    Q('Đơn vị vận tốc thông dụng?', ['km × h', 'km/h', 'km + h', 'km − h'], 1, 'km/h = ki-lô-mét trên giờ.'),
    Q('Đi bộ thường có vận tốc khoảng?', ['5 km/h', '50 km/h', '100 km/h', '0,5 km/h'], 0, 'Người đi bộ ~ 5 km/h.'),
    Q('Vận tốc 1 ô tô 60 km/h nghĩa là?', ['Đi được 60 km mỗi phút', 'Đi được 60 km mỗi giờ', 'Đi được 60 m mỗi giây', 'Đi được 60 km mỗi ngày'], 1, '1 giờ đi được 60 km.'),
    Q('Đổi 36 km/h ra m/giây?', ['10 m/s', '36 m/s', '3,6 m/s', '100 m/s'], 0, '36 × 1000 / 3600 = 10 m/s.'),
  ]),

  M(17, 'Vận tốc — Quãng đường — Thời gian (2)', [
    Q('Công thức tính quãng đường?', ['s = v × t', 's = v : t', 's = v + t', 's = t : v'], 0, 'Quãng đường = vận tốc × thời gian.'),
    Q('Công thức tính thời gian?', ['t = s × v', 't = s : v', 't = v − s', 't = v + s'], 1, 'Thời gian = quãng đường : vận tốc.'),
    Q('Vận tốc 50 km/h, thời gian 2 giờ. Quãng đường?', ['100 km', '25 km', '52 km', '52 km/h'], 0, '50 × 2 = 100 km.'),
    Q('Quãng đường 240 km, vận tốc 60 km/h. Thời gian?', ['4 giờ', '3 giờ', '6 giờ', '14 400 giờ'], 0, '240 : 60 = 4 giờ.'),
    Q('Xe máy 40 km/h đi 1 giờ 30 phút. Quãng đường?', ['60 km', '40 km', '120 km', '30 km'], 0, '1 giờ 30 phút = 1,5 giờ; 40 × 1,5 = 60 km.'),
    Q('Đi 3 km với vận tốc 6 km/h. Thời gian?', ['0,5 giờ', '2 giờ', '30 phút', 'Cả A và C đều đúng'], 3, '3 : 6 = 0,5 giờ = 30 phút.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Số thập phân 0,5 = phân số?', ['1/2', '5/100', '1/5', '5/1'], 0, '0,5 = 5/10 = 1/2.'),
    Q('Diện tích tam giác đáy 8, cao 5 là?', ['20', '13', '40', '4'], 0, '8 × 5 : 2 = 20.'),
    Q('25% của 200 là?', ['25', '50', '75', '100'], 1, '200 × 25 / 100 = 50.'),
    Q('1 ha = ? m²', ['1 000', '10 000', '100', '100 000'], 1, '1 ha = 10 000 m².'),
    Q('Chu vi đường tròn d = 4 cm? (π ≈ 3,14)', ['12,56 cm', '6,28 cm', '50,24 cm', '4 cm'], 0, '4 × 3,14 = 12,56 cm.'),
    Q('Vận tốc 80 km/h trong 0,5 giờ. Quãng đường?', ['40 km', '160 km', '80,5 km', '4 km'], 0, '80 × 0,5 = 40 km.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hình hộp chữ nhật — diện tích xung quanh, toàn phần', [
    Q('Hình hộp chữ nhật có mấy mặt?', ['4', '5', '6', '8'], 2, 'Có 6 mặt là hình chữ nhật.'),
    Q('Số đỉnh của hình hộp chữ nhật?', ['6', '8', '12', '4'], 1, 'Hình hộp chữ nhật có 8 đỉnh.'),
    Q('Diện tích xung quanh = ?', ['(a + b) × 2 × h', 'a × b × h', 'a + b + h', '6 × a × b'], 0, 'Sxq = chu vi đáy × chiều cao.'),
    Q('Hộp dài 5, rộng 4, cao 3. Sxq = ?', ['54', '60', '47', '120'], 0, '(5+4)×2×3 = 54.'),
    Q('Diện tích toàn phần = ?', ['Sxq + Sđáy', 'Sxq + 2 × Sđáy', 'Sđáy × 6', '2 × Sxq'], 1, 'Stp = Sxq + 2 đáy.'),
    Q('Hộp 5 × 4 × 3. Stp = ?', ['74', '54', '94', '120'], 2, 'Sxq = 54; Sđáy = 20; Stp = 54 + 2×20 = 94.'),
  ]),

  M(20, 'Thể tích — đơn vị đo thể tích', [
    Q('Đơn vị đo thể tích cơ bản?', ['m', 'm²', 'm³', 'm/s'], 2, 'Thể tích dùng đơn vị mét khối (m³).'),
    Q('1 dm³ bằng?', ['1 lít', '10 lít', '100 lít', '0,1 lít'], 0, '1 dm³ = 1 lít.'),
    Q('1 m³ bằng bao nhiêu dm³?', ['10', '100', '1 000', '10 000'], 2, '1 m³ = 1 000 dm³.'),
    Q('1 m³ bằng bao nhiêu cm³?', ['1 000', '10 000', '1 000 000', '100'], 2, '1 m³ = 1 000 000 cm³.'),
    Q('Thể tích hình hộp chữ nhật?', ['a × b × c', 'a + b + c', '(a+b) × c', '2 × (a + b + c)'], 0, 'V = dài × rộng × cao.'),
    Q('Hộp 5 × 4 × 3. V = ?', ['12', '60', '47', '94'], 1, '5 × 4 × 3 = 60.'),
  ]),

  M(21, 'Thể tích hình lập phương', [
    Q('Hình lập phương có 6 mặt là?', ['Hình chữ nhật', 'Hình vuông', 'Hình thoi', 'Hình tròn'], 1, '6 mặt đều là hình vuông bằng nhau.'),
    Q('Thể tích hình lập phương cạnh a?', ['a × 6', 'a × a × a', 'a + a + a', '4 × a'], 1, 'V = a³.'),
    Q('Hình lập phương cạnh 3 cm. V = ?', ['27 cm³', '9 cm³', '12 cm³', '18 cm³'], 0, '3 × 3 × 3 = 27 cm³.'),
    Q('Hình lập phương cạnh 5 cm. Diện tích toàn phần?', ['25', '150', '125', '100'], 1, 'Mỗi mặt 25; 6 × 25 = 150 cm².'),
    Q('Cạnh hình lập phương có V = 64 cm³?', ['4 cm', '8 cm', '16 cm', '2 cm'], 0, '4 × 4 × 4 = 64.'),
    Q('1 thùng lập phương cạnh 1 m chứa bao nhiêu lít nước?', ['100', '1 000', '10 000', '10'], 1, '1 m³ = 1 000 dm³ = 1 000 lít.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Số đo thời gian', [
    Q('1 giờ = ? phút', ['60', '100', '24', '600'], 0, '1 giờ = 60 phút.'),
    Q('1 phút = ? giây', ['10', '24', '60', '100'], 2, '1 phút = 60 giây.'),
    Q('1 ngày = ? giờ', ['12', '24', '60', '7'], 1, '1 ngày = 24 giờ.'),
    Q('1 thế kỉ = ? năm', ['10', '50', '100', '1 000'], 2, '1 thế kỉ = 100 năm.'),
    Q('2 giờ 30 phút = ? phút', ['90', '150', '230', '60'], 1, '2 × 60 + 30 = 150 phút.'),
    Q('Năm 2025 thuộc thế kỉ thứ?', ['XX', 'XXI', 'XIX', 'XXII'], 1, 'Năm 2001–2100 thuộc thế kỉ XXI.'),
  ]),

  M(23, 'Cộng trừ số đo thời gian', [
    Q('2 giờ 15 phút + 1 giờ 30 phút = ?', ['3 giờ 45 phút', '3 giờ 15 phút', '4 giờ 45 phút', '3 giờ 5 phút'], 0, 'Cộng giờ + giờ, phút + phút.'),
    Q('5 giờ 20 phút − 2 giờ 10 phút = ?', ['3 giờ 10 phút', '2 giờ 10 phút', '3 giờ 30 phút', '7 giờ 30 phút'], 0, '5−2 = 3 giờ; 20−10 = 10 phút.'),
    Q('3 giờ 45 phút + 1 giờ 30 phút = ?', ['4 giờ 75 phút', '5 giờ 15 phút', '4 giờ 15 phút', '5 giờ 75 phút'], 1, '75 phút = 1 giờ 15 phút → 5 giờ 15 phút.'),
    Q('4 giờ 5 phút − 1 giờ 30 phút = ?', ['2 giờ 35 phút', '3 giờ 25 phút', '2 giờ 25 phút', '3 giờ 35 phút'], 0, 'Mượn 1 giờ = 60 phút: 3 giờ 65 phút − 1 giờ 30 phút = 2 giờ 35 phút.'),
    Q('2 giờ 30 phút × 2 = ?', ['4 giờ 60 phút', '5 giờ', '4 giờ 30 phút', '4 giờ'], 1, '2×2 = 4 giờ; 30×2 = 60 phút = 1 giờ → 5 giờ.'),
    Q('6 giờ 40 phút : 2 = ?', ['3 giờ 20 phút', '3 giờ 40 phút', '3 giờ 30 phút', '4 giờ 20 phút'], 0, '6:2 = 3 giờ; 40:2 = 20 phút.'),
  ]),

  M(24, 'Toán chuyển động đều — 2 vật ngược chiều', [
    Q('2 vật chuyển động ngược chiều, vận tốc gặp nhau = ?', ['v1 − v2', 'v1 + v2', 'v1 × v2', 'v1 : v2'], 1, 'Ngược chiều: cộng 2 vận tốc.'),
    Q('A 40 km/h, B 60 km/h cách nhau 200 km đi ngược chiều. Thời gian gặp?', ['2 giờ', '4 giờ', '5 giờ', '1 giờ'], 0, '200 : (40+60) = 2 giờ.'),
    Q('2 xe đi ngược chiều, v tổng 80 km/h, gặp nhau sau 1,5 giờ. Khoảng cách ban đầu?', ['80 km', '120 km', '160 km', '40 km'], 1, '80 × 1,5 = 120 km.'),
    Q('Người 1 đi 5 km/h, người 2 đi 3 km/h ngược chiều, cách 16 km. Gặp sau?', ['2 giờ', '4 giờ', '8 giờ', '3 giờ'], 0, '16 : 8 = 2 giờ.'),
    Q('Hai ô tô khởi hành cùng lúc từ 2 đầu đường dài 270 km, đi ngược chiều, v lần lượt 60 và 75 km/h. Gặp sau?', ['1,5 giờ', '2 giờ', '3 giờ', '4 giờ'], 1, '270 : 135 = 2 giờ.'),
    Q('Vận tốc tổng càng lớn thì thời gian gặp nhau?', ['Càng lớn', 'Càng nhỏ', 'Không đổi', 'Bằng 0'], 1, 't = s : (v1+v2), v tổng lớn → t nhỏ.'),
  ]),

  M(25, 'Toán chuyển động đều — 2 vật cùng chiều', [
    Q('2 vật cùng chiều, vận tốc đuổi kịp = ?', ['v1 + v2', '|v1 − v2|', 'v1 × v2', 'v1 : v2'], 1, 'Cùng chiều: hiệu 2 vận tốc.'),
    Q('A đi 50 km/h, B đi 30 km/h cùng chiều, cách 40 km. A đuổi kịp B sau?', ['1 giờ', '2 giờ', '4 giờ', '5 giờ'], 1, '40 : (50−30) = 2 giờ.'),
    Q('Xe đạp 12 km/h, người đi bộ 4 km/h cùng chiều cách nhau 16 km. Xe đạp đuổi kịp sau?', ['2 giờ', '4 giờ', '8 giờ', '1 giờ'], 0, '16 : 8 = 2 giờ.'),
    Q('Hai xe cách 20 km, v1 = 40, v2 = 30 km/h cùng chiều. Đuổi kịp sau?', ['1 giờ', '2 giờ', '0,5 giờ', '4 giờ'], 1, '20 : 10 = 2 giờ.'),
    Q('Nếu 2 vật cùng vận tốc và cùng chiều thì?', ['Đuổi kịp ngay', 'Không bao giờ đuổi kịp', 'Đuổi kịp sau 1 giờ', 'Càng xa dần'], 1, 'Hiệu vận tốc = 0 nên không đuổi kịp.'),
    Q('Khoảng cách 24 km, v hiệu 8 km/h. Đuổi kịp sau?', ['2 giờ', '3 giờ', '4 giờ', '8 giờ'], 1, '24 : 8 = 3 giờ.'),
  ]),

  M(26, 'Toán tỉ lệ thuận', [
    Q('2 đại lượng tỉ lệ thuận: khi cái này gấp đôi thì cái kia?', ['Gấp đôi', 'Giảm 1 nửa', 'Không đổi', 'Gấp 4'], 0, 'Tỉ lệ thuận: cùng tăng, cùng giảm theo tỉ số.'),
    Q('5 kg gạo giá 75 000 đ. 10 kg giá?', ['100 000 đ', '150 000 đ', '75 000 đ', '7 500 đ'], 1, '10 kg gấp đôi 5 kg → 150 000 đ.'),
    Q('1 giờ làm 30 sản phẩm. 5 giờ làm bao nhiêu?', ['30', '60', '150', '120'], 2, '30 × 5 = 150 sản phẩm.'),
    Q('3 m vải may được 2 áo. 9 m vải may được?', ['3 áo', '6 áo', '4 áo', '12 áo'], 1, '9 m gấp 3 lần 3 m → 6 áo.'),
    Q('Mua 4 quyển vở hết 24 000 đ. 7 quyển hết?', ['28 000', '42 000', '60 000', '14 000'], 1, '24 000 : 4 × 7 = 42 000 đ.'),
    Q('Tỉ lệ thuận thường giải bằng phương pháp nào?', ['Rút về đơn vị', 'Cộng số', 'So sánh', 'Đoán'], 0, 'Tìm giá trị 1 đơn vị rồi nhân lên.'),
  ]),

  M(27, 'Toán tỉ lệ nghịch', [
    Q('2 đại lượng tỉ lệ nghịch: khi cái này gấp đôi thì cái kia?', ['Gấp đôi', 'Giảm 1 nửa', 'Không đổi', 'Bằng 0'], 1, 'Tỉ lệ nghịch: tăng thì giảm và ngược lại.'),
    Q('4 người làm xong việc trong 6 ngày. 8 người làm xong trong?', ['12 ngày', '3 ngày', '6 ngày', '2 ngày'], 1, '8 người gấp đôi → thời gian còn 1 nửa = 3 ngày.'),
    Q('Vận tốc gấp 2, thời gian đi hết quãng đường?', ['Gấp đôi', 'Giảm 1 nửa', 'Không đổi', 'Gấp 4'], 1, 's không đổi → v gấp 2 thì t giảm 1 nửa.'),
    Q('20 con bò ăn hết 1 đống cỏ trong 30 ngày. 60 con ăn trong?', ['10 ngày', '20 ngày', '90 ngày', '60 ngày'], 0, '60 con gấp 3 → thời gian còn 1/3 × 30 = 10 ngày.'),
    Q('Đại lượng nào là tỉ lệ nghịch?', ['Số vở và tiền', 'Số người làm và thời gian hoàn thành', 'Quãng đường và thời gian (v cố định)', 'Số kg và giá tiền'], 1, 'Càng nhiều người, thời gian càng ngắn.'),
    Q('12 công nhân làm 1 việc trong 8 ngày. Muốn xong trong 6 ngày cần?', ['9 công nhân', '14 công nhân', '16 công nhân', '24 công nhân'], 2, '12 × 8 = 96; 96 : 6 = 16 công nhân.'),
  ]),

  M(28, 'Biểu đồ hình quạt', [
    Q('Biểu đồ hình quạt dùng để biểu diễn?', ['Sự thay đổi theo thời gian', 'Tỉ lệ phần trăm trong tổng thể', 'So sánh chiều cao', 'Vẽ đường tròn'], 1, 'Biểu đồ quạt hiển thị tỉ lệ % các phần.'),
    Q('Tổng các phần của biểu đồ hình quạt bằng?', ['50%', '100%', '180%', '360%'], 1, 'Tổng các phần = 100%.'),
    Q('Hình quạt chiếm 1/4 đường tròn ứng với?', ['10%', '25%', '50%', '75%'], 1, '1/4 = 25%.'),
    Q('Lớp có 40 HS. Biểu đồ cho biết 50% giỏi. Số HS giỏi?', ['10', '15', '20', '25'], 2, '40 × 50% = 20.'),
    Q('Trong biểu đồ quạt, phần lớn nhất ứng với?', ['Tỉ lệ nhỏ nhất', 'Tỉ lệ lớn nhất', 'Trung bình', 'Không xác định'], 1, 'Diện tích phần càng lớn → tỉ lệ càng lớn.'),
    Q('1 phần biểu đồ quạt chiếm 90°. Tỉ lệ % là?', ['10%', '25%', '50%', '75%'], 1, '90 / 360 = 25%.'),
  ]),

  M(29, 'Toán % nâng cao — tìm 1 số khi biết %', [
    Q('Biết 40% của số là 24. Số đó là?', ['60', '40', '12', '96'], 0, '24 : 40 × 100 = 60.'),
    Q('1 cửa hàng bán được 30% số gạo, còn lại 350 kg. Tổng?', ['450 kg', '500 kg', '700 kg', '1 000 kg'], 1, '350 kg = 70%; tổng = 350 : 70 × 100 = 500 kg.'),
    Q('25% của số là 50. Số đó?', ['100', '150', '200', '12,5'], 2, '50 : 25 × 100 = 200.'),
    Q('Mua áo giảm 20% còn 240 000 đ. Giá gốc?', ['260 000', '288 000', '300 000', '320 000'], 2, '240 000 : 80 × 100 = 300 000.'),
    Q('Lớp 5A có 18 HS nữ chiếm 60%. Tổng HS lớp?', ['25', '30', '35', '24'], 1, '18 : 60 × 100 = 30.'),
    Q('Tiền lãi 15% của vốn là 30 triệu. Vốn?', ['100 triệu', '150 triệu', '200 triệu', '450 triệu'], 2, '30 : 15 × 100 = 200.'),
  ]),

  M(30, 'Ôn tập hình học', [
    Q('Diện tích hình vuông cạnh 5 cm?', ['10', '20', '25', '15'], 2, '5 × 5 = 25 cm².'),
    Q('Chu vi hình chữ nhật dài 6, rộng 4?', ['10', '20', '24', '12'], 1, '(6+4) × 2 = 20.'),
    Q('Hình tròn r = 3 cm. C ≈ ? (π ≈ 3,14)', ['18,84 cm', '9,42 cm', '28,26 cm', '6,28 cm'], 0, '2 × 3 × 3,14 = 18,84.'),
    Q('Tam giác đáy 10, cao 6. Diện tích?', ['60', '30', '16', '20'], 1, '10 × 6 : 2 = 30.'),
    Q('Hình thang 2 đáy 5 và 7, cao 4. S?', ['24', '12', '48', '20'], 0, '(5+7) × 4 : 2 = 24.'),
    Q('Hình lập phương cạnh 4. V?', ['12', '16', '48', '64'], 3, '4³ = 64.'),
  ]),

  M(31, 'Ôn tập số đo đại lượng', [
    Q('5 tấn = ? kg', ['50', '500', '5 000', '50 000'], 2, '1 tấn = 1 000 kg.'),
    Q('2,5 km = ? m', ['250', '2 500', '25 000', '25'], 1, '1 km = 1 000 m.'),
    Q('3 m² = ? dm²', ['30', '300', '3 000', '3'], 1, '1 m² = 100 dm².'),
    Q('1,5 giờ = ? phút', ['15', '90', '150', '60'], 1, '1,5 × 60 = 90.'),
    Q('500 g = ? kg', ['0,5', '5', '50', '0,05'], 0, '500 / 1 000 = 0,5 kg.'),
    Q('1 lít = ? dm³', ['1', '10', '100', '1 000'], 0, '1 lít = 1 dm³.'),
  ]),

  M(32, 'Ôn tập 4 phép tính số thập phân', [
    Q('4,5 + 2,75 = ?', ['7,25', '6,25', '7,20', '7,75'], 0, 'Đặt thẳng cột thập phân.'),
    Q('10 − 3,5 = ?', ['7,5', '6,5', '13,5', '0,5'], 1, '10,0 − 3,5 = 6,5.'),
    Q('1,2 × 5 = ?', ['6', '60', '7', '0,6'], 0, '1,2 × 5 = 6,0 = 6.'),
    Q('12,5 : 5 = ?', ['2,5', '25', '0,25', '5,2'], 0, '12,5 : 5 = 2,5.'),
    Q('0,8 × 0,5 = ?', ['0,4', '4', '0,04', '0,13'], 0, '8×5 = 40, 2 chữ số TP → 0,40 = 0,4.'),
    Q('7,2 : 0,9 = ?', ['8', '0,8', '80', '6,3'], 0, '72 : 9 = 8.'),
  ]),

  M(33, 'Toán tổng hợp — chuyển động & tỉ số %', [
    Q('Xe đạp 12 km/h, đi 2 giờ 30 phút được?', ['24 km', '30 km', '36 km', '15 km'], 1, '12 × 2,5 = 30 km.'),
    Q('1 kho có 200 tấn thóc, bán 25%. Còn lại?', ['50 tấn', '150 tấn', '175 tấn', '125 tấn'], 1, 'Bán 50, còn 150.'),
    Q('2 xe ngược chiều cách 300 km, v1 = 50, v2 = 75. Gặp sau?', ['2 giờ', '2,4 giờ', '3 giờ', '5 giờ'], 1, '300 / 125 = 2,4 giờ.'),
    Q('Lãi 12% vốn 50 triệu thì lãi?', ['5 triệu', '6 triệu', '8 triệu', '12 triệu'], 1, '50 × 12% = 6.'),
    Q('Quãng đường 90 km, thời gian 1,5 giờ. Vận tốc?', ['45 km/h', '60 km/h', '75 km/h', '135 km/h'], 1, '90 : 1,5 = 60 km/h.'),
    Q('30% của 200 cộng 25% của 160 = ?', ['80', '100', '120', '90'], 1, '60 + 40 = 100.'),
  ]),

  M(34, 'Ôn cuối cấp — Toán đố tổng hợp', [
    Q('Mảnh vườn HCN dài 30 m, rộng 20 m. S = ?', ['50 m²', '100 m²', '600 m²', '300 m²'], 2, '30 × 20 = 600 m².'),
    Q('Bể nước hình hộp 2 m × 1,5 m × 1 m. V = ? lít', ['300', '3 000', '30', '30 000'], 1, '3 m³ = 3 000 lít.'),
    Q('Lớp 30 HS, 18 HS đạt giỏi. Tỉ lệ %?', ['18%', '30%', '60%', '180%'], 2, '18/30 = 60%.'),
    Q('Ô tô đi 3 giờ với v = 55 km/h. Quãng đường?', ['58 km', '165 km', '52 km', '180 km'], 1, '55 × 3 = 165 km.'),
    Q('Hình tròn r = 7 cm. S ≈ ? (π ≈ 3,14)', ['43,96', '153,86', '21,98', '49'], 1, '3,14 × 49 = 153,86.'),
    Q('Giảm giá 10% trên 500 000 đ. Số tiền giảm?', ['10 000 đ', '50 000 đ', '100 000 đ', '5 000 đ'], 1, '500 000 × 10% = 50 000.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp Toán 5', [
    Q('Phân số 4/5 viết dưới dạng số thập phân?', ['0,8', '0,4', '0,45', '4,5'], 0, '4 : 5 = 0,8.'),
    Q('1 thế kỉ = ? năm', ['10', '50', '100', '1 000'], 2, '1 thế kỉ = 100 năm.'),
    Q('2 vòi nước chảy đầy bể: vòi 1 trong 3 giờ, vòi 2 trong 6 giờ. Mở chung đầy bể trong?', ['2 giờ', '4 giờ', '9 giờ', '1,5 giờ'], 0, '1/3 + 1/6 = 1/2 → đầy 1 bể mất 2 giờ.'),
    Q('Hình lập phương cạnh 10 cm. Stp = ?', ['100', '600', '1 000', '60'], 1, '6 × 100 = 600 cm².'),
    Q('Một số tăng thêm 25% được 250. Số ban đầu?', ['200', '187,5', '225', '300'], 0, '250 : 125 × 100 = 200.'),
    Q('1 năm thường có?', ['365 ngày', '366 ngày', '360 ngày', '350 ngày'], 0, 'Năm thường 365, năm nhuận 366.'),
  ]),
];

export const P5_TOAN_SCENARIOS = indexBy(P5_TOAN_WEEKS);
