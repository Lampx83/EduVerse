// ============================================================
// Lớp 4 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018 (3 bộ Cánh Diều / Kết nối / Chân trời).
// ID prefix: "P4-wNN-quiz" → trùng prefix module "P4".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P4', 'toan', n, title, qs, opts);

export const P4_TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập về các số đến 100 000', [
    Q('Số bé nhất có 5 chữ số là?', ['10000', '99999', '11111', '10001'], 0, '10 000 là số bé nhất có 5 chữ số.'),
    Q('Số lớn nhất có 5 chữ số là?', ['10000', '99999', '90000', '99990'], 1, '99 999 là số lớn nhất có 5 chữ số.'),
    Q('Số liền sau của 9 999 là?', ['9998', '10000', '10001', '99990'], 1, '9 999 + 1 = 10 000.'),
    Q('Trong số 47 528, chữ số 5 ở hàng nào?', ['Nghìn', 'Trăm', 'Chục', 'Đơn vị'], 1, '4-vạn 7-nghìn 5-trăm 2-chục 8-đơn vị.'),
    Q('Sắp xếp tăng dần: 23 456 ; 23 654 ; 23 465 ; 23 645', ['23 456; 23 465; 23 645; 23 654', '23 654; 23 645; 23 465; 23 456', '23 465; 23 456; 23 645; 23 654', '23 456; 23 654; 23 465; 23 645'], 0, 'So sánh lần lượt từng hàng từ trái sang phải.'),
    Q('60 000 + 5 000 = ?', ['65 000', '60 500', '11 000', '650 000'], 0, '6 chục nghìn + 5 nghìn = 65 000.'),
  ]),

  M(2, 'Biểu thức có chữ', [
    Q('Với a = 5, biểu thức a + 12 có giá trị là?', ['7', '12', '17', '60'], 2, '5 + 12 = 17.'),
    Q('Với b = 8, giá trị của 3 × b là?', ['11', '24', '38', '83'], 1, '3 × 8 = 24.'),
    Q('Với m = 20, n = 15 thì m − n = ?', ['5', '15', '35', '300'], 0, '20 − 15 = 5.'),
    Q('Với x = 6, biểu thức 25 − x × 3 = ?', ['7', '57', '15', '13'], 0, '25 − 6 × 3 = 25 − 18 = 7.'),
    Q('Với a = 4 và b = 9, giá trị của a × b là?', ['13', '36', '49', '94'], 1, '4 × 9 = 36.'),
    Q('Chu vi hình vuông cạnh a được tính bởi biểu thức?', ['a + 4', 'a × 4', 'a × a', 'a : 4'], 1, 'Chu vi hình vuông = cạnh × 4.'),
  ]),

  M(3, 'Hàng và lớp — Lớp triệu', [
    Q('Lớp đơn vị gồm các hàng?', ['Đơn vị, chục, trăm', 'Nghìn, chục nghìn, trăm nghìn', 'Triệu, chục triệu, trăm triệu', 'Tỉ, chục tỉ, trăm tỉ'], 0, 'Lớp đơn vị: hàng đơn vị, chục, trăm.'),
    Q('Lớp nghìn gồm các hàng?', ['Đơn vị, chục, trăm', 'Nghìn, chục nghìn, trăm nghìn', 'Triệu, chục triệu, trăm triệu', 'Tỉ, chục tỉ, trăm tỉ'], 1, 'Lớp nghìn: nghìn, chục nghìn, trăm nghìn.'),
    Q('Số 1 000 000 đọc là?', ['Một trăm nghìn', 'Một triệu', 'Mười nghìn', 'Một tỉ'], 1, '1 000 000 = một triệu.'),
    Q('Trong số 357 246 198, chữ số 5 thuộc hàng?', ['Chục triệu', 'Triệu', 'Trăm triệu', 'Trăm nghìn'], 0, 'Đọc từ phải: 1-trăm-9-chục-8-đơn vị, 1-trăm-4-chục-6-nghìn, ... → 5 ở hàng chục triệu.'),
    Q('Số nhỏ nhất có 7 chữ số là?', ['1 000 000', '9 999 999', '1 111 111', '1 000 001'], 0, '1 000 000 là số nhỏ nhất có 7 chữ số.'),
    Q('Số lớn nhất có 9 chữ số là?', ['100 000 000', '999 999 999', '900 000 000', '999 000 000'], 1, '999 999 999 — chín trăm chín mươi chín triệu...'),
  ]),

  M(4, 'So sánh và xếp thứ tự các số tự nhiên', [
    Q('So sánh: 84 596 ... 84 569', ['>', '<', '=', '≥'], 0, 'Bốn hàng đầu bằng nhau; hàng chục 9 > 6 → 84 596 > 84 569.'),
    Q('Số lớn nhất trong: 543 219 ; 534 921 ; 543 291 ; 534 219', ['543 219', '534 921', '543 291', '534 219'], 2, 'So hàng trăm nghìn = 5, chục nghìn 4 vs 3 → 543... lớn hơn; rồi 543 291 > 543 219.'),
    Q('Số bé nhất trong: 123 456 ; 132 465 ; 123 465 ; 132 456', ['123 456', '132 465', '123 465', '132 456'], 0, 'Hai số bắt đầu 123... nhỏ hơn 132...; 123 456 < 123 465.'),
    Q('Sắp xếp giảm dần: 27 000 ; 7 200 ; 72 000 ; 2 700', ['72 000; 27 000; 7 200; 2 700', '2 700; 7 200; 27 000; 72 000', '72 000; 7 200; 27 000; 2 700', '27 000; 72 000; 7 200; 2 700'], 0, 'Số nhiều chữ số hơn thì lớn hơn; cùng số chữ số thì so từng hàng.'),
    Q('Tìm x sao cho 38 000 < x < 38 010 và x là số tròn chục', ['38 000', '38 010', '38 020', 'Không có số nào'], 3, 'Giữa 38 000 và 38 010 không có số tròn chục nào khác.'),
    Q('Số liền trước số bé nhất có 6 chữ số là?', ['99 999', '99 998', '100 001', '999 999'], 0, 'Số bé nhất có 6 chữ số là 100 000; liền trước là 99 999.'),
  ]),

  M(5, 'Làm tròn số đến chục, trăm, nghìn', [
    Q('Làm tròn 47 đến hàng chục được?', ['40', '50', '47', '100'], 1, 'Chữ số đơn vị 7 ≥ 5 → làm tròn lên 50.'),
    Q('Làm tròn 432 đến hàng trăm được?', ['400', '430', '500', '440'], 0, 'Chữ số hàng chục 3 < 5 → giữ nguyên 400.'),
    Q('Làm tròn 5 678 đến hàng nghìn được?', ['5 000', '5 700', '6 000', '5 600'], 2, 'Chữ số hàng trăm 6 ≥ 5 → 6 000.'),
    Q('Làm tròn 12 450 đến hàng nghìn được?', ['12 000', '12 500', '13 000', '12 400'], 0, 'Chữ số hàng trăm 4 < 5 → giữ 12 000.'),
    Q('Một xã có 8 745 người. Làm tròn đến hàng trăm là?', ['8 700', '8 800', '8 000', '9 000'], 0, 'Chữ số hàng chục 4 < 5 → 8 700.'),
    Q('Làm tròn 99 đến hàng chục được?', ['90', '100', '99', '110'], 1, '9 ≥ 5 → 100.'),
  ]),

  M(6, 'Yến · tạ · tấn', [
    Q('1 yến bằng?', ['1 kg', '10 kg', '100 kg', '1 000 kg'], 1, '1 yến = 10 kg.'),
    Q('1 tạ bằng?', ['10 kg', '100 kg', '1 000 kg', '10 yến'], 1, '1 tạ = 100 kg (đồng thời = 10 yến).'),
    Q('1 tấn bằng?', ['100 kg', '1 000 kg', '10 tạ', 'Cả B và C đều đúng'], 3, '1 tấn = 1 000 kg = 10 tạ.'),
    Q('5 yến + 3 yến = ? kg', ['8 kg', '80 kg', '15 kg', '53 kg'], 1, '5 + 3 = 8 yến = 80 kg.'),
    Q('2 tấn = ? tạ', ['2', '20', '200', '2 000'], 1, '1 tấn = 10 tạ → 2 tấn = 20 tạ.'),
    Q('Một xe tải chở 3 tấn gạo và 5 tạ ngô. Tổng khối lượng là?', ['3 500 kg', '3 050 kg', '8 000 kg', '350 kg'], 0, '3 tấn = 3 000 kg; 5 tạ = 500 kg → 3 500 kg.'),
  ]),

  M(7, 'Giây · phút · thế kỉ', [
    Q('1 phút bằng?', ['10 giây', '60 giây', '100 giây', '6 giây'], 1, '1 phút = 60 giây.'),
    Q('1 giờ bằng?', ['60 phút', '100 phút', '60 giây', '24 phút'], 0, '1 giờ = 60 phút.'),
    Q('1 thế kỉ bằng?', ['10 năm', '100 năm', '1 000 năm', '50 năm'], 1, '1 thế kỉ = 100 năm.'),
    Q('2 phút 15 giây = ? giây', ['135', '125', '215', '75'], 0, '2 × 60 + 15 = 135 giây.'),
    Q('Bác Hồ sinh năm 1890. Bác sinh vào thế kỉ thứ?', ['XVIII', 'XIX', 'XX', 'XXI'], 1, 'Thế kỉ XIX = từ năm 1801 đến 1900.'),
    Q('Năm 2026 thuộc thế kỉ?', ['XIX', 'XX', 'XXI', 'XXII'], 2, 'Thế kỉ XXI = từ năm 2001 đến 2100.'),
  ]),

  M(8, 'Tính chất giao hoán – kết hợp của phép cộng', [
    Q('Tính chất giao hoán của phép cộng nghĩa là?', ['a + b = b + a', 'a + 0 = a', 'a + b + c = (a + b) + c', 'a − b = b − a'], 0, 'Đổi chỗ các số hạng thì tổng không thay đổi.'),
    Q('Tính chất kết hợp của phép cộng?', ['a + b = b + a', '(a + b) + c = a + (b + c)', 'a × (b + c) = a × b + a × c', 'a + 0 = a'], 1, 'Khi cộng nhiều số có thể nhóm bất kỳ hai số nào lại.'),
    Q('Tính nhanh: 25 + 47 + 75 = ?', ['125', '147', '120', '157'], 1, '(25 + 75) + 47 = 100 + 47 = 147.'),
    Q('Tính nhanh: 138 + 256 + 62 = ?', ['456', '446', '396', '356'], 0, '(138 + 62) + 256 = 200 + 256 = 456.'),
    Q('Điền vào chỗ trống: 84 + 17 = 17 + ...', ['17', '84', '101', '0'], 1, 'Theo tính chất giao hoán: ... = 84.'),
    Q('5 + 234 + 95 + 66 = ?', ['400', '390', '410', '440'], 0, '(5 + 95) + (234 + 66) = 100 + 300 = 400.'),
  ]),

  M(9, 'Nhân với số có một chữ số', [
    Q('234 × 3 = ?', ['602', '702', '692', '792'], 1, '4×3=12 nhớ 1; 3×3+1=10 nhớ 1; 2×3+1=7 → 702.'),
    Q('1 425 × 4 = ?', ['5 600', '5 700', '5 800', '4 825'], 1, '5×4=20 nhớ 2; 2×4+2=10 nhớ 1; 4×4+1=17 nhớ 1; 1×4+1=5 → 5 700.'),
    Q('Tính chất giao hoán của phép nhân?', ['a × b = b × a', 'a × 1 = a', 'a × 0 = 0', '(a × b) × c = a × (b × c)'], 0, 'Đổi chỗ các thừa số thì tích không thay đổi.'),
    Q('123 × 5 = ?', ['515', '615', '625', '650'], 1, '3×5=15 nhớ 1; 2×5+1=11 nhớ 1; 1×5+1=6 → 615.'),
    Q('Một bao gạo 25 kg. Hỏi 6 bao như thế nặng?', ['150 kg', '125 kg', '156 kg', '180 kg'], 0, '25 × 6 = 150 kg.'),
    Q('Số nào nhân với 0 cũng bằng?', ['Chính số đó', '0', '1', 'Không tính được'], 1, 'Mọi số nhân với 0 đều bằng 0.'),
  ]),

  M(10, 'Nhân với 10, 100, 1 000 — Chia cho 10, 100, 1 000', [
    Q('45 × 10 = ?', ['450', '405', '4 500', '54'], 0, 'Viết thêm 1 chữ số 0 vào bên phải.'),
    Q('320 × 100 = ?', ['320', '3 200', '32 000', '3 200 000'], 2, 'Viết thêm 2 chữ số 0.'),
    Q('7 × 1 000 = ?', ['70', '700', '7 000', '70 000'], 2, 'Viết thêm 3 chữ số 0.'),
    Q('5 600 : 10 = ?', ['56', '560', '5 060', '5 060 0'], 1, 'Xoá bớt 1 chữ số 0 ở bên phải.'),
    Q('43 000 : 100 = ?', ['43', '430', '4 300', '4 30 000'], 1, 'Xoá bớt 2 chữ số 0.'),
    Q('80 × 50 = ?', ['400', '4 000', '400 000', '450'], 1, '(8 × 5) × 100 = 40 × 100 = 4 000.'),
  ]),

  M(11, 'Nhân với số có hai chữ số', [
    Q('23 × 12 = ?', ['256', '276', '286', '296'], 1, '23 × 12 = 23 × 10 + 23 × 2 = 230 + 46 = 276.'),
    Q('45 × 26 = ?', ['1 070', '1 170', '1 270', '1 180'], 1, '45 × 26 = 45 × 20 + 45 × 6 = 900 + 270 = 1 170.'),
    Q('124 × 13 = ?', ['1 612', '1 502', '1 712', '1 632'], 0, '124 × 13 = 124 × 10 + 124 × 3 = 1 240 + 372 = 1 612.'),
    Q('Một trường có 28 lớp, mỗi lớp 35 học sinh. Tổng số học sinh?', ['960', '970', '980', '990'], 2, '28 × 35 = 980 học sinh.'),
    Q('204 × 15 = ?', ['3 060', '3 160', '2 060', '3 040'], 0, '204 × 15 = 204 × 10 + 204 × 5 = 2 040 + 1 020 = 3 060.'),
    Q('Trong 47 × 12 = 564, số 47 gọi là?', ['Tích', 'Số bị chia', 'Thừa số', 'Số chia'], 2, 'Thừa số là các số nhân với nhau.'),
  ]),

  M(12, 'Nhân với số có ba chữ số', [
    Q('234 × 123 = ?', ['28 782', '27 882', '28 872', '28 282'], 0, '234 × 100 + 234 × 20 + 234 × 3 = 23 400 + 4 680 + 702 = 28 782.'),
    Q('125 × 204 = ?', ['25 500', '25 050', '24 500', '25 005'], 0, '125 × 200 + 125 × 4 = 25 000 + 500 = 25 500.'),
    Q('316 × 105 = ?', ['33 180', '33 080', '32 180', '33 280'], 0, '316 × 100 + 316 × 5 = 31 600 + 1 580 = 33 180.'),
    Q('Một kho có 145 bao gạo, mỗi bao 50 kg. Tổng khối lượng?', ['7 250 kg', '7 200 kg', '7 350 kg', '7 050 kg'], 0, '145 × 50 = 7 250 kg.'),
    Q('Tính nhanh: 25 × 4 × 13 = ?', ['1 300', '1 200', '1 400', '1 250'], 0, '(25 × 4) × 13 = 100 × 13 = 1 300.'),
    Q('Tính: 217 × 100 + 217 × 9 = ?', ['23 653', '23 663', '23 553', '21 763'], 0, '217 × (100 + 9) = 217 × 109 = 23 653.'),
  ]),

  M(13, 'Chia cho số có một chữ số', [
    Q('128 : 4 = ?', ['32', '34', '36', '42'], 0, '128 : 4 = 32.'),
    Q('945 : 5 = ?', ['179', '189', '199', '209'], 1, '945 : 5 = 189.'),
    Q('1 248 : 6 = ?', ['198', '208', '218', '228'], 1, '1 248 : 6 = 208.'),
    Q('Phép chia hết là phép chia có số dư bằng?', ['0', '1', '2', 'Số bất kỳ'], 0, 'Số dư = 0 → phép chia hết.'),
    Q('Có 75 viên kẹo chia đều cho 4 bạn. Mỗi bạn được bao nhiêu viên và còn dư bao nhiêu viên?', ['18 viên dư 3', '18 viên dư 2', '19 viên dư 1', '17 viên dư 7'], 0, '75 : 4 = 18 (dư 3).'),
    Q('Trong phép chia 56 : 8 = 7, số 8 gọi là?', ['Số bị chia', 'Số chia', 'Thương', 'Số dư'], 1, 'Số chia đứng sau dấu chia.'),
  ]),

  M(14, 'Dấu hiệu chia hết cho 2 và 5', [
    Q('Số nào chia hết cho 2?', ['135', '247', '348', '569'], 2, 'Số chia hết cho 2 có chữ số tận cùng là 0, 2, 4, 6, 8.'),
    Q('Số nào chia hết cho 5?', ['124', '237', '348', '125'], 3, 'Số chia hết cho 5 có chữ số tận cùng là 0 hoặc 5.'),
    Q('Số nào vừa chia hết cho 2 vừa chia hết cho 5?', ['125', '240', '345', '352'], 1, 'Chia hết cho cả 2 và 5 ⇔ tận cùng là 0.'),
    Q('Số nào không chia hết cho 2?', ['46', '78', '90', '57'], 3, '57 có tận cùng là 7 (lẻ).'),
    Q('Trong các số 70, 75, 77, 80 có mấy số chia hết cho 5?', ['1', '2', '3', '4'], 2, '70, 75, 80 → 3 số.'),
    Q('Số chẵn nhỏ nhất có 3 chữ số khác nhau là?', ['102', '120', '100', '104'], 0, '102 chẵn, ba chữ số khác nhau, nhỏ nhất.'),
  ]),

  M(15, 'Dấu hiệu chia hết cho 9 và 3', [
    Q('Số nào chia hết cho 9?', ['234', '345', '432', '256'], 2, 'Tổng chữ số 4+3+2=9 chia hết cho 9.'),
    Q('Số nào chia hết cho 3?', ['124', '237', '347', '458'], 1, 'Tổng chữ số 2+3+7=12 chia hết cho 3.'),
    Q('Dấu hiệu chia hết cho 9 là?', ['Tận cùng là 0 hoặc 9', 'Tổng chữ số chia hết cho 9', 'Tổng chữ số bằng 9', 'Có chữ số 9'], 1, 'Tổng các chữ số chia hết cho 9 thì số đó chia hết cho 9.'),
    Q('Số 198 có chia hết cho 9 không?', ['Có', 'Không', 'Chỉ chia hết cho 3', 'Không tính được'], 0, '1+9+8=18 chia hết cho 9.'),
    Q('Số nào chia hết cho 3 nhưng không chia hết cho 9?', ['123', '189', '243', '999'], 0, '1+2+3=6 chia hết cho 3 nhưng không chia hết cho 9.'),
    Q('Số nhỏ nhất có 3 chữ số chia hết cho cả 3 và 5 là?', ['105', '120', '150', '135'], 0, '105: tận cùng 5 nên chia hết cho 5; 1+0+5=6 chia hết cho 3.'),
  ]),

  M(16, 'Hai đường thẳng vuông góc – song song', [
    Q('Hai đường thẳng vuông góc tạo thành mấy góc vuông?', ['1', '2', '4', '6'], 2, 'Hai đường thẳng cắt nhau tạo 4 góc; vuông góc → cả 4 đều là góc vuông.'),
    Q('Hai đường thẳng song song thì?', ['Cắt nhau tại 1 điểm', 'Không bao giờ cắt nhau', 'Vuông góc với nhau', 'Trùng nhau'], 1, 'Hai đường thẳng song song không có điểm chung.'),
    Q('Trong hình chữ nhật có mấy cặp cạnh song song?', ['1', '2', '3', '4'], 1, 'Hai cặp cạnh đối song song.'),
    Q('Trong hình chữ nhật có mấy cặp cạnh vuông góc?', ['2', '3', '4', '6'], 2, 'Mỗi đỉnh có 1 cặp vuông góc; có 4 đỉnh → 4 cặp.'),
    Q('Hình nào có cặp cạnh vuông góc?', ['Hình tròn', 'Hình tam giác vuông', 'Đường thẳng', 'Đoạn thẳng'], 1, 'Tam giác vuông có hai cạnh góc vuông vuông góc với nhau.'),
    Q('Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì?', ['Vuông góc với nhau', 'Song song với nhau', 'Cắt nhau', 'Trùng nhau'], 1, 'Cùng vuông góc với một đường → song song với nhau.'),
  ]),

  M(17, 'Góc nhọn · góc tù · góc bẹt', [
    Q('Góc có số đo bé hơn góc vuông gọi là?', ['Góc nhọn', 'Góc tù', 'Góc bẹt', 'Góc bình thường'], 0, 'Góc nhọn < góc vuông (< 90°).'),
    Q('Góc có số đo lớn hơn góc vuông và bé hơn góc bẹt gọi là?', ['Góc nhọn', 'Góc tù', 'Góc vuông', 'Góc bẹt'], 1, 'Góc tù: lớn hơn 90° và nhỏ hơn 180°.'),
    Q('Góc bẹt bằng?', ['Một nửa góc vuông', 'Bằng góc vuông', 'Hai góc vuông', 'Ba góc vuông'], 2, 'Góc bẹt = 180° = 2 × 90°.'),
    Q('Trong tam giác vuông có mấy góc nhọn?', ['1', '2', '3', '0'], 1, 'Tam giác vuông có 1 góc vuông và 2 góc nhọn.'),
    Q('Kim phút và kim giờ của đồng hồ lúc 3 giờ tạo thành góc?', ['Nhọn', 'Vuông', 'Tù', 'Bẹt'], 1, 'Lúc 3 giờ, hai kim tạo góc 90°.'),
    Q('Lúc 6 giờ, hai kim đồng hồ tạo thành góc?', ['Nhọn', 'Vuông', 'Tù', 'Bẹt'], 3, 'Lúc 6 giờ, hai kim thẳng hàng → góc bẹt 180°.'),
  ]),

  M(18, 'Kiểm tra Học kỳ 1', [
    Q('Số liền sau của 99 999 là?', ['99 998', '100 000', '99 990', '100 001'], 1, '99 999 + 1 = 100 000.'),
    Q('Trong số 4 256 873, chữ số 4 thuộc hàng?', ['Triệu', 'Trăm nghìn', 'Chục triệu', 'Trăm'], 0, 'Đọc lớp từ phải: 873 đơn vị, 256 nghìn, 4 triệu.'),
    Q('Làm tròn 12 478 đến hàng nghìn?', ['12 000', '12 400', '12 500', '13 000'], 0, 'Chữ số hàng trăm 4 < 5 → giữ 12 000.'),
    Q('234 × 12 = ?', ['2 708', '2 808', '2 728', '2 708'], 1, '234 × 12 = 234 × 10 + 234 × 2 = 2 340 + 468 = 2 808.'),
    Q('1 256 : 4 = ?', ['304', '314', '324', '414'], 1, '1 256 : 4 = 314.'),
    Q('Tính nhanh: 4 × 25 × 17 = ?', ['1 600', '1 700', '1 800', '1 750'], 1, '(4 × 25) × 17 = 100 × 17 = 1 700.'),
    Q('1 tấn = ? kg', ['10', '100', '1 000', '10 000'], 2, '1 tấn = 1 000 kg.'),
    Q('1 phút = ? giây', ['10', '60', '100', '600'], 1, '1 phút = 60 giây.'),
    Q('Số nào chia hết cho cả 2 và 5?', ['125', '230', '345', '352'], 1, 'Tận cùng là 0 → chia hết cho cả 2 và 5.'),
    Q('Hình chữ nhật có mấy cặp cạnh song song?', ['1', '2', '3', '4'], 1, 'Hai cặp cạnh đối song song.'),
  ], { difficulty: 2, description: 'Bài kiểm tra cuối Học kỳ 1 — số tự nhiên, biểu thức có chữ, nhân-chia, dấu hiệu chia hết, đo lường, hình học.' }),

  // ──────────────── HK2 ────────────────
  M(19, 'Phân số — đọc, viết, ý nghĩa', [
    Q('Phân số 3/4 đọc là?', ['Ba chia bốn', 'Ba phần bốn', 'Ba bốn', 'Bốn phần ba'], 1, '"3 phần 4" — tử số 3, mẫu số 4.'),
    Q('Trong phân số 5/8, mẫu số là?', ['5', '8', '13', '3'], 1, 'Mẫu số nằm dưới gạch ngang.'),
    Q('Một cái bánh chia đều 4 phần, ăn 1 phần. Phần đã ăn được viết là?', ['1/3', '1/4', '4/1', '3/4'], 1, '1 trong 4 phần → 1/4.'),
    Q('Phân số có giá trị bằng 1 là?', ['1/2', '3/4', '5/5', '0/5'], 2, 'Tử = mẫu → phân số = 1.'),
    Q('Phân số 0/7 có giá trị?', ['0', '1', '7', 'Không xác định'], 0, 'Tử = 0 → phân số = 0.'),
    Q('Phân số 7/4 lớn hơn?', ['1', '2', 'Bé hơn 1', 'Bằng 1'], 0, 'Tử > mẫu → phân số > 1.'),
  ]),

  M(20, 'Phân số bằng nhau — Rút gọn phân số', [
    Q('Rút gọn 4/8 được?', ['1/2', '2/4', '4/8', '8/4'], 0, 'Chia cả tử và mẫu cho 4 → 1/2.'),
    Q('Rút gọn 6/9 được?', ['3/9', '2/3', '6/3', '3/2'], 1, 'Chia cả tử và mẫu cho 3 → 2/3.'),
    Q('Rút gọn 15/25 được?', ['3/5', '5/3', '15/5', '1/5'], 0, 'Chia cả tử và mẫu cho 5 → 3/5.'),
    Q('Phân số nào bằng 2/3?', ['4/9', '4/6', '3/2', '6/9'], 1, '4/6 = 2/3 (nhân cả tử và mẫu với 2).'),
    Q('Phân số tối giản là phân số mà tử và mẫu?', ['Cùng chia hết cho 2', 'Không cùng chia hết cho số nào ngoài 1', 'Bằng nhau', 'Là số chẵn'], 1, 'Phân số tối giản: tử và mẫu chỉ có ước chung là 1.'),
    Q('Trong các phân số 2/4 ; 3/6 ; 5/10 ; 1/3 có mấy phân số bằng nhau?', ['2', '3', '4', '1'], 1, '2/4 = 3/6 = 5/10 = 1/2 → 3 phân số bằng nhau.'),
  ]),

  M(21, 'Quy đồng mẫu số các phân số', [
    Q('Quy đồng 1/2 và 1/3 ra cùng mẫu số 6 được?', ['3/6 và 2/6', '2/6 và 3/6', '1/6 và 1/6', '3/6 và 3/6'], 0, '1/2 = 3/6 ; 1/3 = 2/6.'),
    Q('Quy đồng 2/3 và 3/4 ra cùng mẫu số chung được?', ['8/12 và 9/12', '6/12 và 9/12', '8/12 và 12/12', '6/12 và 12/12'], 0, '2/3 = 8/12 ; 3/4 = 9/12.'),
    Q('Mẫu số chung nhỏ nhất của 1/4 và 1/6 là?', ['10', '12', '24', '6'], 1, '12 là số nhỏ nhất chia hết cho cả 4 và 6.'),
    Q('Quy đồng 1/5 và 2/3 với mẫu chung 15 được?', ['3/15 và 10/15', '5/15 và 6/15', '3/15 và 6/15', '5/15 và 10/15'], 0, '1/5 = 3/15 ; 2/3 = 10/15.'),
    Q('Khi quy đồng phân số ta dựa vào tính chất?', ['Phép cộng', 'Phép chia', 'Phân số bằng nhau', 'Phép trừ'], 2, 'Nhân (hoặc chia) cả tử và mẫu cho cùng một số khác 0.'),
    Q('Quy đồng 3/8 và 5/12 với mẫu chung 24 được?', ['9/24 và 10/24', '6/24 và 10/24', '9/24 và 15/24', '12/24 và 15/24'], 0, '3/8 = 9/24 ; 5/12 = 10/24.'),
  ]),

  M(22, 'So sánh hai phân số', [
    Q('So sánh 3/5 và 2/5', ['>', '<', '=', 'Không so sánh được'], 0, 'Cùng mẫu — so tử: 3 > 2 → 3/5 > 2/5.'),
    Q('So sánh 4/9 và 4/7', ['>', '<', '=', 'Không so sánh được'], 1, 'Cùng tử — mẫu lớn hơn thì phân số bé hơn: 4/9 < 4/7.'),
    Q('Phân số nào lớn hơn 1?', ['2/3', '5/7', '9/8', '4/5'], 2, 'Tử > mẫu → phân số > 1.'),
    Q('So sánh 1/2 và 3/5 (quy đồng mẫu 10)', ['1/2 > 3/5', '1/2 < 3/5', '1/2 = 3/5', 'Không so sánh được'], 1, '1/2 = 5/10 ; 3/5 = 6/10 → 1/2 < 3/5.'),
    Q('Phân số bé nhất trong: 2/3 ; 3/4 ; 1/2', ['2/3', '3/4', '1/2', 'Bằng nhau'], 2, 'Quy đồng mẫu 12: 8/12, 9/12, 6/12 → 1/2 bé nhất.'),
    Q('So sánh 7/8 và 1', ['>', '<', '=', 'Không so sánh được'], 1, 'Tử < mẫu → 7/8 < 1.'),
  ]),

  M(23, 'Phép cộng phân số', [
    Q('1/4 + 2/4 = ?', ['3/8', '3/4', '2/4', '3/16'], 1, 'Cùng mẫu — cộng tử: 1 + 2 = 3 → 3/4.'),
    Q('1/2 + 1/3 = ?', ['2/5', '5/6', '1/5', '2/6'], 1, 'Quy đồng: 3/6 + 2/6 = 5/6.'),
    Q('2/5 + 3/10 = ?', ['5/15', '7/10', '5/10', '7/15'], 1, '2/5 = 4/10 → 4/10 + 3/10 = 7/10.'),
    Q('3/4 + 1/4 = ?', ['1', '4/8', '4/4', 'A và C đều đúng'], 3, '4/4 = 1 — cả hai cách viết đều đúng.'),
    Q('Mẹ mua 1/2 kg đường và 1/4 kg muối. Tổng khối lượng?', ['3/4 kg', '2/6 kg', '1/6 kg', '3/8 kg'], 0, '1/2 + 1/4 = 2/4 + 1/4 = 3/4 kg.'),
    Q('Tính chất giao hoán của phép cộng phân số: a/b + c/d = ?', ['c/d + a/b', 'a/b − c/d', 'a/b × c/d', 'b/a + d/c'], 0, 'Đổi chỗ — tổng không đổi.'),
  ]),

  M(24, 'Phép trừ phân số', [
    Q('3/5 − 1/5 = ?', ['2/5', '2/10', '4/5', '4/10'], 0, 'Cùng mẫu — trừ tử: 3 − 1 = 2 → 2/5.'),
    Q('5/6 − 1/3 = ?', ['1/3', '1/2', '4/3', '2/3'], 1, '5/6 − 2/6 = 3/6 = 1/2.'),
    Q('1 − 2/3 = ?', ['1/3', '2/3', '1/2', '3/3'], 0, '1 = 3/3 ; 3/3 − 2/3 = 1/3.'),
    Q('7/10 − 3/10 = ?', ['4/10', '2/5', 'A và B đều đúng', '10/10'], 2, '7/10 − 3/10 = 4/10 = 2/5.'),
    Q('Có 5/8 kg đường, dùng hết 1/4 kg. Còn?', ['3/8 kg', '4/8 kg', '4/4 kg', '6/8 kg'], 0, '5/8 − 1/4 = 5/8 − 2/8 = 3/8 kg.'),
    Q('5/9 − 2/9 = ?', ['3/9', '1/3', 'A và B đều đúng', '3/18'], 2, '5/9 − 2/9 = 3/9 = 1/3.'),
  ]),

  M(25, 'Phép nhân phân số', [
    Q('1/2 × 1/3 = ?', ['1/6', '1/5', '2/5', '2/3'], 0, 'Nhân tử với tử, mẫu với mẫu: 1×1 / 2×3 = 1/6.'),
    Q('2/3 × 4/5 = ?', ['8/15', '6/15', '8/8', '2/15'], 0, '(2 × 4) / (3 × 5) = 8/15.'),
    Q('3/4 × 2 = ?', ['3/8', '6/4', '3/2', 'B và C đều đúng'], 3, '3/4 × 2 = 6/4 = 3/2.'),
    Q('5/6 × 6/5 = ?', ['1', '30/30', 'A và B đều đúng', '11/11'], 2, '(5 × 6) / (6 × 5) = 30/30 = 1.'),
    Q('Một mảnh đất hình chữ nhật dài 4/5 m, rộng 1/2 m. Diện tích?', ['4/10 m²', '2/5 m²', 'A và B đều đúng', '5/10 m²'], 2, '4/5 × 1/2 = 4/10 = 2/5 m².'),
    Q('1/3 × 9 = ?', ['9/3', '3', 'A và B đều đúng', '12'], 2, '1/3 × 9 = 9/3 = 3.'),
  ]),

  M(26, 'Phép chia phân số', [
    Q('Để chia hai phân số ta?', ['Cộng nghịch đảo', 'Nhân với phân số nghịch đảo của số chia', 'Trừ tử với mẫu', 'Lấy tử chia tử, mẫu chia mẫu'], 1, 'a/b : c/d = a/b × d/c.'),
    Q('1/2 : 1/4 = ?', ['1/8', '2/4', '2', '4/2'], 2, '1/2 × 4/1 = 4/2 = 2.'),
    Q('3/4 : 2/3 = ?', ['9/8', '6/12', '2/12', '1/2'], 0, '3/4 × 3/2 = 9/8.'),
    Q('2 : 1/3 = ?', ['2/3', '6', '5/3', '1/6'], 1, '2 × 3/1 = 6.'),
    Q('Phân số nghịch đảo của 5/7 là?', ['5/7', '7/5', '−5/7', '12/5'], 1, 'Đảo tử và mẫu cho nhau.'),
    Q('Có 3/4 lít dầu chia đều vào các chai 1/8 lít. Đong được bao nhiêu chai?', ['4', '5', '6', '8'], 2, '3/4 : 1/8 = 3/4 × 8/1 = 24/4 = 6 chai.'),
  ]),

  M(27, 'Hỗn số', [
    Q('Hỗn số 2 1/3 đọc là?', ['Hai một ba', 'Hai và một phần ba', 'Hai phần một ba', 'Hai phần ba'], 1, 'Phần nguyên 2 và phần phân số 1/3.'),
    Q('Đổi 7/3 ra hỗn số?', ['2 1/3', '3 1/2', '1 2/3', '2 3/1'], 0, '7 : 3 = 2 (dư 1) → 2 1/3.'),
    Q('Đổi 1 2/5 ra phân số?', ['3/5', '7/5', '5/7', '12/5'], 1, '1 = 5/5 → 5/5 + 2/5 = 7/5.'),
    Q('Đổi 11/4 ra hỗn số?', ['2 3/4', '3 1/4', '4 1/3', '2 1/4'], 0, '11 : 4 = 2 (dư 3) → 2 3/4.'),
    Q('Hỗn số nào bằng 9/2?', ['4 1/2', '2 1/4', '4 2/1', '3 1/2'], 0, '9 : 2 = 4 (dư 1) → 4 1/2.'),
    Q('Phần nguyên của hỗn số 5 2/7 là?', ['5', '2', '7', '5/7'], 0, 'Số nguyên đứng trước phần phân số.'),
  ]),

  M(28, 'Đề-xi-mét vuông · Mét vuông · Ki-lô-mét vuông', [
    Q('1 dm² bằng?', ['10 cm²', '100 cm²', '1 000 cm²', '10 000 cm²'], 1, '1 dm² = 10 × 10 = 100 cm².'),
    Q('1 m² bằng?', ['10 dm²', '100 dm²', '1 000 dm²', '10 000 dm²'], 1, '1 m² = 10 × 10 = 100 dm².'),
    Q('1 km² bằng?', ['1 000 m²', '10 000 m²', '100 000 m²', '1 000 000 m²'], 3, '1 km² = 1 000 × 1 000 = 1 000 000 m².'),
    Q('5 m² = ? dm²', ['50', '500', '5 000', '50 000'], 1, '1 m² = 100 dm² → 5 × 100 = 500 dm².'),
    Q('Diện tích một sân chơi hình vuông cạnh 8 m là?', ['16 m²', '32 m²', '64 m²', '80 m²'], 2, '8 × 8 = 64 m².'),
    Q('Diện tích một huyện là 250 km² thì bằng?', ['25 000 m²', '250 000 m²', '2 500 000 m²', '250 000 000 m²'], 3, '250 × 1 000 000 = 250 000 000 m².'),
  ]),

  M(29, 'Hình bình hành — Diện tích, chu vi', [
    Q('Hình bình hành có?', ['4 cạnh bằng nhau và 4 góc vuông', '2 cặp cạnh đối song song và bằng nhau', '3 cạnh bằng nhau', 'Chỉ 2 cạnh song song'], 1, 'Hình bình hành: 2 cặp cạnh đối song song và bằng nhau.'),
    Q('Diện tích hình bình hành được tính bởi công thức?', ['Cạnh × cạnh', 'Đáy × chiều cao', '(Đáy + chiều cao) × 2', 'Đáy × cạnh bên'], 1, 'S = đáy × chiều cao.'),
    Q('Hình bình hành có đáy 8 cm và chiều cao 5 cm. Diện tích?', ['13 cm²', '40 cm²', '26 cm²', '20 cm²'], 1, '8 × 5 = 40 cm².'),
    Q('Hình bình hành có hai cạnh kề là 6 cm và 9 cm. Chu vi?', ['15 cm', '30 cm', '54 cm', '24 cm'], 1, '(6 + 9) × 2 = 30 cm.'),
    Q('Hình bình hành có đáy 12 cm, diện tích 60 cm². Chiều cao là?', ['4 cm', '5 cm', '6 cm', '8 cm'], 1, '60 : 12 = 5 cm.'),
    Q('Hình chữ nhật có phải là hình bình hành không?', ['Có', 'Không', 'Chỉ khi cạnh bằng nhau', 'Không tính được'], 0, 'Hình chữ nhật là hình bình hành đặc biệt có 4 góc vuông.'),
  ]),

  M(30, 'Hình thoi — Diện tích, chu vi', [
    Q('Hình thoi có?', ['4 cạnh bằng nhau', '4 góc vuông', '2 cạnh dài và 2 cạnh ngắn', 'Chỉ 2 cạnh bằng nhau'], 0, 'Hình thoi: 4 cạnh bằng nhau, 2 đường chéo vuông góc và cắt nhau tại trung điểm mỗi đường.'),
    Q('Diện tích hình thoi tính bởi công thức?', ['Cạnh × cạnh', '(Tổng 2 đường chéo) / 2', '(Tích 2 đường chéo) / 2', 'Đáy × chiều cao / 2'], 2, 'S = (m × n) / 2 với m, n là 2 đường chéo.'),
    Q('Hình thoi có hai đường chéo 8 cm và 6 cm. Diện tích?', ['14 cm²', '24 cm²', '48 cm²', '28 cm²'], 1, '(8 × 6) / 2 = 24 cm².'),
    Q('Hình thoi có cạnh 7 cm. Chu vi?', ['14 cm', '21 cm', '28 cm', '49 cm'], 2, '4 × 7 = 28 cm.'),
    Q('Hình thoi có hai đường chéo 10 dm và 12 dm. Diện tích?', ['22 dm²', '60 dm²', '120 dm²', '110 dm²'], 1, '(10 × 12) / 2 = 60 dm².'),
    Q('Hình vuông có phải là hình thoi không?', ['Có', 'Không', 'Chỉ khi cạnh ngắn', 'Không tính được'], 0, 'Hình vuông là hình thoi đặc biệt có 4 góc vuông.'),
  ]),

  M(31, 'Tìm số trung bình cộng', [
    Q('Trung bình cộng của 4 và 6 là?', ['4', '5', '6', '10'], 1, '(4 + 6) / 2 = 5.'),
    Q('Trung bình cộng của 12, 14, 16 là?', ['13', '14', '15', '42'], 1, '(12 + 14 + 16) / 3 = 42 / 3 = 14.'),
    Q('Tổng của 4 số là 80. Trung bình cộng?', ['10', '20', '40', '80'], 1, '80 : 4 = 20.'),
    Q('Trung bình cộng của 5 số là 12. Tổng 5 số?', ['12', '17', '60', '120'], 2, '12 × 5 = 60.'),
    Q('An có 8 viên bi, Bình 10 viên, Cường 12 viên. Trung bình mỗi bạn?', ['9', '10', '11', '30'], 1, '(8 + 10 + 12) / 3 = 30 / 3 = 10 viên.'),
    Q('Bốn lớp có lần lượt 30, 32, 34, 28 học sinh. Trung bình mỗi lớp?', ['30', '31', '32', '33'], 1, '(30 + 32 + 34 + 28) / 4 = 124 / 4 = 31.'),
  ]),

  M(32, 'Biểu đồ tranh — Biểu đồ cột', [
    Q('Biểu đồ tranh dùng hình ảnh để?', ['Trang trí', 'Biểu diễn số liệu', 'Vẽ truyện', 'Học từ vựng'], 1, 'Mỗi hình ảnh đại diện cho một số lượng nhất định.'),
    Q('Trong biểu đồ tranh, mỗi quả táo bằng 5 quả thật. Có 7 hình quả táo nghĩa là?', ['7', '12', '35', '57'], 2, '7 × 5 = 35 quả.'),
    Q('Biểu đồ cột thể hiện số liệu bằng?', ['Các đường cong', 'Các cột có chiều cao khác nhau', 'Hình ảnh', 'Các chữ số'], 1, 'Chiều cao cột tỉ lệ với số liệu.'),
    Q('Trên biểu đồ cột, cột càng cao thì số liệu?', ['Càng bé', 'Càng lớn', 'Không liên quan', 'Bằng 0'], 1, 'Chiều cao cột phản ánh độ lớn của số liệu.'),
    Q('Một biểu đồ cột cho thấy 4 lớp có số học sinh: 30, 32, 28, 34. Lớp nào đông nhất?', ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4'], 3, 'Lớp 4 có 34 học sinh — nhiều nhất.'),
    Q('Tổng số học sinh 4 lớp ở câu trên?', ['120', '124', '128', '130'], 1, '30 + 32 + 28 + 34 = 124.'),
  ]),

  M(33, 'Bài toán "Tìm hai số khi biết tổng và hiệu"', [
    Q('Tổng hai số là 50, hiệu là 10. Số lớn là?', ['25', '30', '35', '40'], 1, 'Số lớn = (Tổng + Hiệu) / 2 = (50 + 10) / 2 = 30.'),
    Q('Tổng hai số là 50, hiệu là 10. Số bé là?', ['15', '20', '25', '30'], 1, 'Số bé = (Tổng − Hiệu) / 2 = (50 − 10) / 2 = 20.'),
    Q('Tổng hai số là 84, hiệu là 12. Số lớn?', ['36', '42', '48', '54'], 2, '(84 + 12) / 2 = 96 / 2 = 48.'),
    Q('Anh hơn em 6 tuổi. Tổng tuổi 2 anh em là 30. Tuổi em là?', ['12', '15', '18', '24'], 0, '(30 − 6) / 2 = 12 tuổi.'),
    Q('Hai số có tổng 100 và hiệu 20. Số bé là?', ['30', '40', '50', '60'], 1, '(100 − 20) / 2 = 40.'),
    Q('Hai thùng dầu chứa 60 lít, thùng thứ nhất nhiều hơn thùng thứ hai 8 lít. Thùng thứ nhất chứa?', ['34', '32', '30', '26'], 0, '(60 + 8) / 2 = 34 lít.'),
  ]),

  M(34, 'Bài toán "Tìm hai số khi biết tổng và tỉ" / "hiệu và tỉ"', [
    Q('Hai số có tổng 28, tỉ số bé so với lớn là 1/3. Số bé là?', ['7', '14', '21', '4'], 0, 'Tổng số phần: 1 + 3 = 4 phần; số bé = 28 / 4 × 1 = 7.'),
    Q('Hai số có tổng 28, tỉ số bé so với lớn là 1/3. Số lớn là?', ['7', '14', '21', '28'], 2, 'Số lớn = 28 / 4 × 3 = 21.'),
    Q('Hai số có hiệu 12, tỉ số bé so với lớn là 1/4. Số bé là?', ['3', '4', '8', '16'], 1, 'Hiệu số phần: 4 − 1 = 3 phần; số bé = 12 / 3 × 1 = 4.'),
    Q('Hai số có hiệu 12, tỉ số bé so với lớn là 1/4. Số lớn là?', ['12', '14', '16', '20'], 2, 'Số lớn = 12 / 3 × 4 = 16.'),
    Q('Lớp 4A có 35 bạn, tỉ số nam/nữ là 3/4. Số bạn nam?', ['10', '15', '20', '25'], 1, '3 + 4 = 7 phần; nam = 35 / 7 × 3 = 15 bạn.'),
    Q('Tuổi mẹ hơn tuổi con 30 tuổi, tỉ số tuổi con so với mẹ là 1/4. Tuổi con?', ['10', '20', '30', '40'], 0, 'Hiệu phần: 4 − 1 = 3; tuổi con = 30 / 3 × 1 = 10 tuổi.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Số liền sau của 999 999 là?', ['1 000 000', '999 998', '900 000', '999 990'], 0, '999 999 + 1 = 1 000 000.'),
    Q('Trong số 12 345 678, chữ số 3 ở hàng?', ['Trăm', 'Trăm nghìn', 'Triệu', 'Chục nghìn'], 1, 'Lớp nghìn: 345 → 3 ở trăm nghìn.'),
    Q('Rút gọn 12/18 được?', ['1/2', '2/3', '3/4', '6/9'], 1, 'Chia cả tử và mẫu cho 6 → 2/3.'),
    Q('1/2 + 1/4 = ?', ['1/6', '2/6', '3/4', '2/8'], 2, '2/4 + 1/4 = 3/4.'),
    Q('Diện tích hình thoi có hai đường chéo 6 cm và 8 cm là?', ['14 cm²', '24 cm²', '48 cm²', '28 cm²'], 1, '(6 × 8) / 2 = 24 cm².'),
    Q('1 m² = ? cm²', ['100', '1 000', '10 000', '1 000 000'], 2, '1 m² = 100 dm² = 10 000 cm².'),
    Q('Trung bình cộng của 10, 20, 30, 40 là?', ['20', '25', '30', '100'], 1, '(10+20+30+40)/4 = 100/4 = 25.'),
    Q('Hai số có tổng 60, hiệu 20. Số lớn?', ['30', '35', '40', '50'], 2, '(60+20)/2 = 40.'),
    Q('Một mảnh đất hình chữ nhật dài 25 m, rộng 18 m. Diện tích?', ['43 m²', '86 m²', '450 m²', '425 m²'], 2, '25 × 18 = 450 m².'),
    Q('Số nào chia hết cho cả 3 và 9?', ['234', '345', '567', '432'], 3, 'Tổng chữ số 4+3+2=9 chia hết cho 9 (và đương nhiên chia hết cho 3).'),
  ], { difficulty: 3, description: 'Bài kiểm tra cuối năm — tổng hợp toàn bộ kiến thức Toán Lớp 4.' }),
];

export const P4_TOAN_SCENARIOS = indexBy(P4_TOAN_WEEKS);
