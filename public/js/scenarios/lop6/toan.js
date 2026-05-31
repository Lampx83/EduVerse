// ============================================================
// Lớp 6 · TOÁN — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám chương trình GDPT 2018 (Toán 6: Số học – Đại số – Hình học – Thống kê).
// ID prefix: "S6TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6TOAN', 'toan', n, title, qs, opts);

export const S6TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập số tự nhiên — Tập hợp N', [
    Q('Tập hợp N là tập hợp các số gì?', ['Số tự nhiên', 'Số nguyên', 'Số hữu tỉ', 'Số thực'], 0, 'N = {0; 1; 2; 3; …} — các số tự nhiên.'),
    Q('Số tự nhiên nhỏ nhất là?', ['1', '0', '−1', 'Không có'], 1, 'Theo SGK Việt Nam, 0 là số tự nhiên nhỏ nhất.'),
    Q('Số liền sau của 199 là?', ['198', '200', '299', '210'], 1, '199 + 1 = 200.'),
    Q('Đọc số 1 250 308 đúng nhất là?', ['Một triệu hai trăm năm mươi nghìn ba trăm linh tám', 'Một triệu hai trăm năm mươi ba trăm linh tám', 'Mười hai triệu năm mươi nghìn ba trăm linh tám', 'Một trăm hai mươi lăm nghìn ba trăm linh tám'], 0, 'Tách hàng: 1 250 308 = 1 triệu + 250 nghìn + 308.'),
    Q('Trong các số sau, số nào lớn nhất?', ['10 999', '9 999', '11 000', '10 099'], 2, '11 000 > 10 999 > 10 099 > 9 999.'),
    Q('Ký hiệu nào nghĩa là "3 thuộc N"?', ['3 ∈ N', '3 ∉ N', '3 ⊂ N', 'N ∈ 3'], 0, '"∈" đọc là "thuộc".'),
    Q('Số phần tử của tập A = {0; 1; 2; …; 10} là?', ['10', '11', '12', '9'], 1, 'Từ 0 đến 10 có 11 số.'),
  ]),

  M(2, 'Lũy thừa với số mũ tự nhiên', [
    Q('2^3 bằng?', ['6', '8', '9', '23'], 1, '2^3 = 2·2·2 = 8.'),
    Q('5^2 bằng?', ['10', '25', '52', '125'], 1, '5^2 = 5·5 = 25.'),
    Q('10^4 bằng?', ['1 000', '10 000', '40', '100 000'], 1, '10^4 = 10·10·10·10 = 10 000.'),
    Q('Viết gọn 3·3·3·3·3 dưới dạng lũy thừa?', ['3^4', '3^5', '5^3', '15'], 1, 'Có 5 thừa số 3 nên là 3^5.'),
    Q('Cơ số của lũy thừa 7^4 là?', ['7', '4', '11', '28'], 0, '7 là cơ số, 4 là số mũ.'),
    Q('Số mũ của 12^0 là?', ['0', '1', '12', 'Không xác định'], 0, 'Số mũ là 0.'),
    Q('Quy ước a^1 bằng?', ['1', 'a', '0', 'a·a'], 1, 'Mọi a ta có a^1 = a.'),
  ]),

  M(3, 'Nhân, chia hai lũy thừa cùng cơ số', [
    Q('2^3 · 2^4 = ?', ['2^7', '2^12', '4^7', '2^1'], 0, 'a^m · a^n = a^(m+n) → 2^(3+4) = 2^7.'),
    Q('5^6 : 5^2 = ?', ['5^3', '5^4', '5^8', '5^12'], 1, 'a^m : a^n = a^(m−n) → 5^(6−2) = 5^4.'),
    Q('3^2 · 3 = ?', ['3^2', '3^3', '6', '9'], 1, '3 = 3^1, nên 3^2·3^1 = 3^3.'),
    Q('10^5 : 10^5 = ?', ['10', '1', '0', '10^0'], 1, '10^(5−5) = 10^0 = 1.'),
    Q('Viết gọn 7^2 · 7^5 · 7?', ['7^7', '7^8', '7^10', '7^35'], 1, '2 + 5 + 1 = 8 → 7^8.'),
    Q('Kết quả 4^3 · 4^0 là?', ['4^3', '1', '0', '4^4'], 0, '4^0 = 1, nên 4^3 · 1 = 4^3.'),
  ]),

  M(4, 'Thứ tự thực hiện phép tính', [
    Q('Tính 2 + 3 · 4 = ?', ['20', '14', '24', '9'], 1, 'Nhân trước, cộng sau: 2 + 12 = 14.'),
    Q('Tính (2 + 3) · 4 = ?', ['14', '20', '9', '24'], 1, 'Ngoặc trước: 5 · 4 = 20.'),
    Q('Tính 18 : 3 + 2 · 5 = ?', ['16', '20', '12', '40'], 0, '6 + 10 = 16.'),
    Q('Tính 20 − [10 − (4 − 2)] = ?', ['12', '8', '14', '6'], 0, '4−2=2; 10−2=8; 20−8=12.'),
    Q('Trong dãy phép tính không ngoặc, ưu tiên cao nhất là?', ['Cộng/trừ', 'Nhân/chia', 'Lũy thừa', 'Trái sang phải'], 2, 'Thứ tự: lũy thừa → nhân/chia → cộng/trừ.'),
    Q('Tính 3^2 + 4 · 5 = ?', ['29', '45', '65', '20'], 0, '9 + 20 = 29.'),
    Q('Tính 100 − 5^2 · 2 = ?', ['50', '90', '0', '95'], 0, '25·2=50; 100−50=50.'),
  ]),

  M(5, 'Biểu thức số — Bài toán có lời văn', [
    Q('Tổng của 25 và 75 nhân với 4 là?', ['400', '325', '100', '500'], 0, '(25+75)·4 = 100·4 = 400.'),
    Q('Lan có 12 quyển vở, mẹ mua thêm gấp 3 lần. Lan có tất cả bao nhiêu vở?', ['36', '48', '15', '24'], 1, 'Mua thêm: 12·3 = 36; tổng: 12 + 36 = 48.'),
    Q('Một hình chữ nhật dài 8 cm, rộng 5 cm. Chu vi là?', ['13 cm', '26 cm', '40 cm', '20 cm'], 1, 'P = 2·(8+5) = 26 cm.'),
    Q('Tính nhanh 25 · 13 · 4 = ?', ['1 300', '1 200', '1 250', '1 350'], 0, '(25·4)·13 = 100·13 = 1 300.'),
    Q('Tính 99 · 12 + 12 = ?', ['1 200', '1 212', '1 188', '1 100'], 0, '12·(99+1) = 12·100 = 1 200.'),
    Q('Lớp 6A có 30 HS, mỗi HS góp 5 nghìn. Tổng tiền góp là?', ['35 nghìn', '150 nghìn', '6 nghìn', '300 nghìn'], 1, '30·5 = 150 nghìn.'),
  ]),

  M(6, 'Tính chia hết — Khái niệm', [
    Q('Khi nào a chia hết cho b (b ≠ 0)?', ['Khi có số tự nhiên q để a = b·q', 'Khi a > b', 'Khi a là số chẵn', 'Khi a < b'], 0, 'Định nghĩa chia hết: tồn tại q ∈ N sao cho a = b·q.'),
    Q('15 chia hết cho?', ['2', '3', '4', '7'], 1, '15 = 3·5 nên chia hết cho 3.'),
    Q('Số nào sau chia hết cho 6?', ['16', '20', '24', '14'], 2, '24 = 6·4.'),
    Q('Trong các số sau, số không chia hết cho 5 là?', ['25', '30', '47', '100'], 2, '47 không tận cùng bằng 0 hoặc 5.'),
    Q('Nếu a chia hết cho 12 thì a chia hết cho?', ['5', '7', '4', '9'], 2, '12 = 4·3 nên a chia hết cho 4.'),
    Q('Tổng 18 + 27 có chia hết cho 9 không?', ['Có', 'Không', 'Chỉ chia hết cho 3', 'Tùy số'], 0, '18⋮9 và 27⋮9 ⇒ tổng ⋮ 9.'),
  ]),

  M(7, 'Dấu hiệu chia hết cho 2, 3, 5, 9', [
    Q('Số chia hết cho 2 có chữ số tận cùng là?', ['0;2;4;6;8', '0 hoặc 5', '0', 'Chữ số chẵn khác 0'], 0, 'Chia hết cho 2 ⇔ tận cùng 0,2,4,6,8.'),
    Q('Số chia hết cho 5 có chữ số tận cùng là?', ['Chẵn', '0 hoặc 5', 'Chỉ 5', 'Chỉ 0'], 1, 'Chia hết cho 5 ⇔ tận cùng là 0 hoặc 5.'),
    Q('Số chia hết cho 3 khi tổng các chữ số?', ['Là số chẵn', 'Chia hết cho 3', 'Lớn hơn 9', 'Bằng 3'], 1, 'Dấu hiệu: tổng các chữ số chia hết cho 3.'),
    Q('234 có chia hết cho 9 không?', ['Có', 'Không', 'Chỉ cho 3', 'Tùy'], 0, '2+3+4 = 9 ⋮ 9.'),
    Q('Trong các số: 130; 245; 369; 470 — số nào chia hết cho cả 2 và 5?', ['130 và 470', '245', '369', 'Cả 4 số'], 0, 'Vừa tận cùng 0 ⇒ chia hết cho cả 2 và 5.'),
    Q('Số 1 234 có chia hết cho 3 không?', ['Có', 'Không', 'Chia hết cho 9', 'Không xác định'], 1, '1+2+3+4 = 10, không chia hết cho 3.'),
    Q('Điền chữ số vào *: 12*5 chia hết cho 9. * = ?', ['0', '1', '9', 'Không có'], 1, '1+2+*+5 = 8+*, chia hết cho 9 ⇒ * = 1.'),
  ]),

  M(8, 'Số nguyên tố — Hợp số', [
    Q('Số nguyên tố là số tự nhiên lớn hơn 1 có?', ['Đúng 2 ước', 'Nhiều hơn 2 ước', 'Đúng 1 ước', 'Không có ước nào'], 0, 'Số nguyên tố có đúng 2 ước: 1 và chính nó.'),
    Q('Trong các số sau, số nào là số nguyên tố?', ['9', '15', '17', '21'], 2, '17 chỉ có ước 1 và 17.'),
    Q('Số 1 là?', ['Số nguyên tố', 'Hợp số', 'Không là nguyên tố cũng không là hợp số', 'Số chẵn'], 2, '1 chỉ có 1 ước nên không thuộc 2 loại trên.'),
    Q('Hợp số nhỏ nhất là?', ['2', '4', '6', '1'], 1, '4 = 2·2, có 3 ước (1, 2, 4).'),
    Q('Số nguyên tố nhỏ nhất là?', ['0', '1', '2', '3'], 2, '2 là số nguyên tố nhỏ nhất, cũng là số nguyên tố chẵn duy nhất.'),
    Q('Trong: 19, 21, 23, 25 — đâu là hợp số?', ['19', '21 và 25', '23', 'Tất cả nguyên tố'], 1, '21 = 3·7, 25 = 5·5.'),
  ]),

  M(9, 'Phân tích một số ra thừa số nguyên tố', [
    Q('Phân tích 12 ra thừa số nguyên tố?', ['2·6', '2^2·3', '3·4', '2^3·3'], 1, '12 = 2·2·3 = 2^2·3.'),
    Q('Phân tích 60 ra thừa số nguyên tố?', ['2·30', '2^2·15', '2^2·3·5', '6·10'], 2, '60 = 2·2·3·5 = 2^2·3·5.'),
    Q('Phân tích 100?', ['10·10', '2·50', '2^2·5^2', '2·5^2'], 2, '100 = 2^2·5^2.'),
    Q('Số 45 = 3^2 · ?', ['3', '5', '15', '9'], 1, '45 = 9·5 = 3^2·5.'),
    Q('Phân tích 72 ra thừa số nguyên tố?', ['2^3·3^2', '8·9', '2^2·3^3', '2·36'], 0, '72 = 8·9 = 2^3·3^2.'),
    Q('Khi phân tích ra thừa số nguyên tố, ta dùng các số?', ['Tự nhiên bất kỳ', 'Hợp số', 'Nguyên tố', 'Chẵn'], 2, 'Chỉ dùng các số nguyên tố.'),
  ]),

  M(10, 'Ước chung — ƯCLN', [
    Q('Ước chung của 12 và 18 gồm?', ['{1;2;3;6}', '{1;2;3;4;6}', '{2;3;6}', '{6}'], 0, 'ƯC(12,18) = giao các tập ước = {1;2;3;6}.'),
    Q('ƯCLN(12, 18) = ?', ['2', '3', '6', '36'], 2, '6 là số lớn nhất trong ƯC.'),
    Q('ƯCLN(24, 36) = ?', ['6', '8', '12', '72'], 2, '24 = 2^3·3; 36 = 2^2·3^2 ⇒ ƯCLN = 2^2·3 = 12.'),
    Q('Hai số 8 và 15 nguyên tố cùng nhau khi?', ['ƯCLN = 1', 'ƯCLN = 8', 'ƯCLN = 15', 'BCNN = 1'], 0, 'Nguyên tố cùng nhau ⇔ ƯCLN = 1; 8 và 15 có ƯCLN = 1.'),
    Q('ƯCLN(a, 1) = ?', ['a', '1', '0', 'Tùy a'], 1, 'Mọi số đều có ước 1.'),
    Q('Tìm ƯCLN của 45 và 75?', ['5', '15', '25', '45'], 1, '45 = 3^2·5; 75 = 3·5^2 ⇒ ƯCLN = 3·5 = 15.'),
  ]),

  M(11, 'Bội chung — BCNN', [
    Q('BCNN(4, 6) = ?', ['12', '24', '6', '4'], 0, '4 = 2^2; 6 = 2·3 ⇒ BCNN = 2^2·3 = 12.'),
    Q('BCNN(8, 12) = ?', ['24', '48', '96', '4'], 0, '8 = 2^3; 12 = 2^2·3 ⇒ BCNN = 2^3·3 = 24.'),
    Q('Nếu a chia hết cho b thì BCNN(a, b) = ?', ['a', 'b', '1', 'a·b'], 0, 'a là bội của b nên BCNN = a.'),
    Q('BCNN(5, 7) = ?', ['1', '5', '7', '35'], 3, '5 và 7 nguyên tố cùng nhau ⇒ BCNN = 5·7 = 35.'),
    Q('Số HS xếp hàng đều thành 4, 6 hàng đều dư 0; số HS nhỏ nhất khác 0 là?', ['10', '12', '24', '20'], 1, 'BCNN(4,6) = 12.'),
    Q('Liên hệ: ƯCLN(a,b) · BCNN(a,b) = ?', ['a + b', 'a − b', 'a·b', 'a/b'], 2, 'Công thức quan trọng: ƯCLN·BCNN = a·b.'),
  ]),

  M(12, 'Số nguyên âm — Tập hợp Z', [
    Q('Tập hợp Z gồm?', ['Số tự nhiên', 'Số nguyên dương', 'Các số nguyên (âm, 0, dương)', 'Phân số'], 2, 'Z = {…; −2; −1; 0; 1; 2; …}.'),
    Q('Số đối của 5 là?', ['−5', '5', '1/5', '0'], 0, 'Số đối của a là −a.'),
    Q('Số đối của −7 là?', ['−7', '7', '0', '1/7'], 1, 'Số đối của −7 là 7.'),
    Q('Giá trị tuyệt đối |−9| = ?', ['−9', '9', '0', '18'], 1, '|−9| = 9 (khoảng cách đến 0).'),
    Q('Số nào lớn hơn: −3 hay −5?', ['−3', '−5', 'Bằng nhau', 'Không so sánh được'], 0, 'Trên trục số −3 nằm bên phải −5 nên −3 > −5.'),
    Q('Nhiệt độ −2°C có nghĩa là?', ['Trên 0 độ 2°', 'Dưới 0 độ 2°', 'Đúng 0°', 'Không xác định'], 1, 'Dấu trừ chỉ thấp hơn mức 0.'),
    Q('|0| = ?', ['0', '1', '−1', 'Không có'], 0, 'Quy ước |0| = 0.'),
  ]),

  M(13, 'So sánh và sắp xếp số nguyên', [
    Q('Số nguyên nhỏ nhất trong −3; 0; 2; −5 là?', ['−3', '0', '2', '−5'], 3, 'Càng âm càng nhỏ ⇒ −5 nhỏ nhất.'),
    Q('Sắp xếp tăng dần −2; 3; 0; −7; 1?', ['−7; −2; 0; 1; 3', '−2; −7; 0; 1; 3', '3; 1; 0; −2; −7', '−7; 1; 0; 3; −2'], 0, 'Tăng dần: −7 < −2 < 0 < 1 < 3.'),
    Q('Mọi số nguyên âm đều?', ['Lớn hơn 0', 'Nhỏ hơn mọi số tự nhiên', 'Bằng 0', 'Lớn hơn số đối của nó'], 1, 'Số nguyên âm < 0 ≤ số tự nhiên.'),
    Q('Số liền trước của −5 là?', ['−4', '−6', '5', '0'], 1, 'Liền trước = giảm 1: −5 − 1 = −6.'),
    Q('Số liền sau của −1 là?', ['−2', '0', '1', '−1'], 1, '−1 + 1 = 0.'),
    Q('Trên trục số, |a| là?', ['Khoảng cách từ a đến 0', 'Số đối của a', 'Số liền sau a', 'Số nguyên dương lớn nhất'], 0, 'Định nghĩa hình học của giá trị tuyệt đối.'),
  ]),

  M(14, 'Cộng hai số nguyên', [
    Q('(−3) + (−5) = ?', ['−8', '8', '−2', '2'], 0, 'Cùng dấu âm: cộng giá trị tuyệt đối rồi giữ dấu âm → −8.'),
    Q('(−7) + 4 = ?', ['−3', '3', '−11', '11'], 0, 'Khác dấu: 7−4 = 3, giữ dấu của số có |a| lớn hơn ⇒ −3.'),
    Q('5 + (−5) = ?', ['10', '−10', '0', '1'], 2, 'Hai số đối nhau cộng lại bằng 0.'),
    Q('(−12) + 20 = ?', ['8', '−8', '32', '−32'], 0, '20 − 12 = 8, kết quả dương.'),
    Q('Tính (−25) + (−15) = ?', ['−40', '40', '−10', '10'], 0, '−(25+15) = −40.'),
    Q('(−9) + 0 = ?', ['0', '−9', '9', 'Không xác định'], 1, 'Cộng với 0 giữ nguyên.'),
  ]),

  M(15, 'Trừ hai số nguyên — Quy tắc dấu', [
    Q('Quy tắc: a − b = ?', ['a + b', 'a + (−b)', 'b − a', '−(a+b)'], 1, 'Trừ một số là cộng với số đối.'),
    Q('5 − 8 = ?', ['3', '−3', '13', '−13'], 1, '5 + (−8) = −3.'),
    Q('(−7) − 3 = ?', ['−10', '10', '−4', '4'], 0, '−7 + (−3) = −10.'),
    Q('(−4) − (−6) = ?', ['−10', '10', '−2', '2'], 3, '−4 + 6 = 2.'),
    Q('Hiệu của 10 và −5 là?', ['5', '15', '−5', '−15'], 1, '10 − (−5) = 10 + 5 = 15.'),
    Q('Trừ một số âm tương đương với?', ['Cộng số dương', 'Cộng số âm', 'Nhân với −1', 'Không thay đổi'], 0, 'a − (−b) = a + b.'),
    Q('(−12) − (−4) = ?', ['−16', '−8', '8', '16'], 1, '−12 + 4 = −8.'),
  ]),

  M(16, 'Nhân hai số nguyên', [
    Q('Tích hai số nguyên cùng dấu là số?', ['Dương', 'Âm', 'Bằng 0', 'Tùy giá trị'], 0, '(+)(+) = (+); (−)(−) = (+).'),
    Q('Tích hai số nguyên khác dấu là số?', ['Dương', 'Âm', 'Bằng 0', 'Tùy giá trị'], 1, '(+)(−) = (−).'),
    Q('(−3) · 4 = ?', ['−12', '12', '−7', '7'], 0, 'Khác dấu ⇒ âm; |−3|·|4|=12 ⇒ −12.'),
    Q('(−5) · (−6) = ?', ['−30', '30', '−11', '11'], 1, 'Cùng dấu âm ⇒ dương; 5·6 = 30.'),
    Q('0 · (−2026) = ?', ['−2026', '2026', '0', '1'], 2, 'Nhân với 0 luôn bằng 0.'),
    Q('Tính (−2) · 3 · (−5) = ?', ['30', '−30', '10', '−10'], 0, '(−2)·3 = −6; −6·(−5) = 30.'),
  ]),

  M(17, 'Chia hai số nguyên — Bội và ước số nguyên', [
    Q('(−20) : 4 = ?', ['5', '−5', '16', '−16'], 1, 'Khác dấu ⇒ âm; 20:4 = 5 ⇒ −5.'),
    Q('(−36) : (−6) = ?', ['−6', '6', '−30', '30'], 1, 'Cùng dấu ⇒ dương; 36:6 = 6.'),
    Q('Ước của −6 gồm?', ['1; 2; 3; 6', '−1; −2; −3; −6', '±1; ±2; ±3; ±6', '0; 1; 2; 3; 6'], 2, 'Trong Z, ước gồm cả số đối: ±1, ±2, ±3, ±6.'),
    Q('Bội của 3 trong Z gồm?', ['Chỉ số dương', '…;−6;−3;0;3;6;…', '0; 3; 6; 9; …', '1; 2; 3; …'], 1, 'Bội đi cả hai chiều: …; −6; −3; 0; 3; 6; …'),
    Q('15 : (−3) = ?', ['5', '−5', '12', '−12'], 1, 'Khác dấu ⇒ âm.'),
    Q('Tính (−7)·(−2) + 15 : (−5) = ?', ['11', '17', '−11', '−17'], 0, '14 + (−3) = 11.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('2^4 · 2^3 = ?', ['2^7', '2^12', '4^7', '2^1'], 0, 'Cộng số mũ: 4+3 = 7.'),
    Q('ƯCLN(24, 36) = ?', ['6', '12', '24', '72'], 1, '24 = 2^3·3; 36 = 2^2·3^2 ⇒ ƯCLN = 2^2·3 = 12.'),
    Q('BCNN(6, 10) = ?', ['60', '30', '20', '16'], 1, '6 = 2·3; 10 = 2·5 ⇒ BCNN = 2·3·5 = 30.'),
    Q('Trong các số 11, 13, 15, 17 — số nào không là số nguyên tố?', ['11', '13', '15', '17'], 2, '15 = 3·5.'),
    Q('(−8) + 3 − (−5) = ?', ['−10', '0', '−6', '−16'], 1, '−8 + 3 + 5 = 0.'),
    Q('(−4) · (−5) − 12 : 4 = ?', ['17', '23', '−17', '−23'], 0, '20 − 3 = 17.'),
    Q('Số đối của |−15| là?', ['15', '−15', '0', '1/15'], 1, '|−15| = 15, số đối là −15.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Phân số — Khái niệm', [
    Q('Phân số a/b cần điều kiện gì?', ['a ≠ 0', 'b ≠ 0', 'a > b', 'a, b cùng dấu'], 1, 'Mẫu số b phải khác 0.'),
    Q('Trong phân số 3/7, mẫu số là?', ['3', '7', '10', '21'], 1, 'Mẫu số là 7 (đứng dưới gạch ngang).'),
    Q('Phân số nào sau biểu thị "ba phần tư"?', ['4/3', '3/4', '7/12', '1/3'], 1, '"Ba phần tư" = 3/4.'),
    Q('Mọi số nguyên a đều viết được dưới dạng phân số có mẫu là?', ['0', '1', 'a', 'Bất kỳ'], 1, 'a = a/1.'),
    Q('Phân số −5/8 là số?', ['Dương', 'Âm', 'Bằng 0', 'Không xác định'], 1, 'Tử âm, mẫu dương ⇒ phân số âm.'),
    Q('Phân số 0/9 bằng?', ['0', '9', '1', 'Không xác định'], 0, 'Tử bằng 0, mẫu khác 0 ⇒ phân số = 0.'),
  ]),

  M(20, 'Phân số bằng nhau — Tính chất cơ bản', [
    Q('Hai phân số a/b = c/d khi?', ['a + d = b + c', 'a·d = b·c', 'a·b = c·d', 'a − c = b − d'], 1, 'Quy tắc nhân chéo: a/b = c/d ⇔ ad = bc.'),
    Q('Phân số nào bằng 2/3?', ['4/9', '4/6', '6/8', '3/2'], 1, '2·6 = 3·4 ⇒ 2/3 = 4/6.'),
    Q('3/5 = ?/15', ['3', '5', '9', '12'], 2, '3·15 = 5·x ⇒ x = 9.'),
    Q('Nhân cả tử và mẫu của một phân số với cùng một số khác 0 ta được?', ['Phân số mới khác', 'Phân số bằng phân số đã cho', 'Số nguyên', 'Hỗn số'], 1, 'Tính chất cơ bản của phân số.'),
    Q('−6/9 bằng phân số nào sau?', ['−2/3', '−3/2', '2/3', '−6/3'], 0, 'Chia cả tử và mẫu cho 3.'),
    Q('Hai phân số 4/10 và 6/15 có bằng nhau không?', ['Có', 'Không', 'Bằng 0', 'Không so sánh được'], 0, '4·15 = 60 = 10·6 ⇒ bằng nhau.'),
  ]),

  M(21, 'Rút gọn phân số', [
    Q('Rút gọn 8/12 = ?', ['2/3', '4/6', '1/2', '2/4'], 0, 'Chia tử mẫu cho ƯCLN(8,12) = 4: 2/3.'),
    Q('Rút gọn 18/24 thành phân số tối giản?', ['9/12', '6/8', '3/4', '2/3'], 2, 'ƯCLN(18,24) = 6 ⇒ 3/4.'),
    Q('Phân số tối giản là phân số có tử và mẫu?', ['Bằng nhau', 'Nguyên tố cùng nhau', 'Chia hết cho 2', 'Đều là nguyên tố'], 1, 'Tử và mẫu có ƯCLN = 1.'),
    Q('Rút gọn −15/25?', ['−3/5', '−5/3', '−1/2', '−2/3'], 0, 'Chia cả 2 cho 5.'),
    Q('Phân số nào dưới đây đã tối giản?', ['6/9', '4/8', '7/11', '10/15'], 2, 'ƯCLN(7,11) = 1.'),
    Q('Rút gọn 36/60?', ['6/10', '3/5', '2/3', '9/15'], 1, 'ƯCLN(36,60) = 12 ⇒ 3/5.'),
  ]),

  M(22, 'Quy đồng mẫu số nhiều phân số', [
    Q('Mẫu chung của 1/4 và 1/6 nhỏ nhất là?', ['12', '24', '10', '6'], 0, 'BCNN(4,6) = 12.'),
    Q('Quy đồng 1/3 và 1/4 ta được?', ['3/12 và 4/12', '4/12 và 3/12', '1/12 và 1/12', '2/3 và 2/4'], 1, '1/3 = 4/12; 1/4 = 3/12.'),
    Q('Quy đồng 2/5 và 3/4 (MC = 20)?', ['8/20 và 15/20', '10/20 và 12/20', '4/20 và 9/20', '5/20 và 4/20'], 0, '2·4=8; 3·5=15.'),
    Q('So sánh 2/3 và 3/4 ta dùng cách?', ['Nhân chéo hoặc quy đồng', 'Cộng tử', 'So sánh tử', 'So sánh mẫu'], 0, 'Nhân chéo: 2·4 = 8 < 9 = 3·3 ⇒ 2/3 < 3/4.'),
    Q('Trong 5/8 và 7/12, mẫu chung nhỏ nhất là?', ['96', '24', '20', '48'], 1, 'BCNN(8,12) = 24.'),
    Q('Phân số nào lớn nhất: 2/3; 3/5; 4/7?', ['2/3', '3/5', '4/7', 'Bằng nhau'], 0, 'Quy đồng mẫu 105: 70/105; 63/105; 60/105.'),
  ]),

  M(23, 'Cộng, trừ phân số cùng mẫu — khác mẫu', [
    Q('1/5 + 2/5 = ?', ['3/10', '3/5', '2/25', '1/5'], 1, 'Cùng mẫu: cộng tử, giữ mẫu.'),
    Q('1/2 + 1/3 = ?', ['2/5', '5/6', '1/6', '2/6'], 1, 'MC = 6: 3/6 + 2/6 = 5/6.'),
    Q('5/6 − 1/3 = ?', ['1/2', '4/3', '1/3', '4/6'], 0, '5/6 − 2/6 = 3/6 = 1/2.'),
    Q('2/7 + 3/7 − 1/7 = ?', ['4/7', '6/7', '4/21', '0'], 0, 'Cùng mẫu: 2+3−1 = 4.'),
    Q('1 − 2/5 = ?', ['3/5', '1/5', '5/2', '−3/5'], 0, '1 = 5/5; 5/5 − 2/5 = 3/5.'),
    Q('Bạn An ăn 1/4 cái bánh, bạn Bình ăn 2/5 cái. Hai bạn ăn tổng cộng?', ['3/9 cái', '13/20 cái', '2/9 cái', '3/20 cái'], 1, '5/20 + 8/20 = 13/20.'),
  ]),

  M(24, 'Phép cộng phân số có dấu âm', [
    Q('(−1/3) + 1/2 = ?', ['1/6', '−1/6', '5/6', '−5/6'], 0, '−2/6 + 3/6 = 1/6.'),
    Q('(−2/5) + (−3/5) = ?', ['−1', '−5/5', '−1/5', 'Cả A và B đúng'], 3, '−5/5 = −1 nên A và B đều đúng.'),
    Q('1/4 − 3/4 = ?', ['−1/2', '1/2', '−2/4', 'A và C đúng'], 3, '−2/4 = −1/2.'),
    Q('Số đối của phân số 5/7 là?', ['7/5', '−5/7', '−7/5', '0'], 1, 'Số đối: đảo dấu.'),
    Q('(−3/8) + 5/8 = ?', ['1/4', '−1/4', '2/8', 'A và C đúng'], 3, '2/8 = 1/4.'),
    Q('Tổng của một phân số và số đối của nó bằng?', ['0', '1', '−1', 'Phân số đó'], 0, 'a + (−a) = 0.'),
  ]),

  M(25, 'Nhân phân số — Quy tắc', [
    Q('2/3 · 4/5 = ?', ['6/8', '8/15', '6/15', '8/8'], 1, 'Tử nhân tử, mẫu nhân mẫu: 2·4 / 3·5 = 8/15.'),
    Q('(−2/7) · 3/5 = ?', ['6/35', '−6/35', '−5/12', '−6/12'], 1, 'Khác dấu ⇒ âm; 6/35.'),
    Q('3/4 của 20 là?', ['5', '15', '60', '80'], 1, '3/4 · 20 = 60/4 = 15.'),
    Q('Tính nhanh 5/8 · 8/5 = ?', ['0', '1', '5/8', '8/5'], 1, 'Hai phân số nghịch đảo nhân nhau bằng 1.'),
    Q('Nghịch đảo của 4/9 là?', ['−4/9', '9/4', '−9/4', '4/9'], 1, 'Đảo tử và mẫu.'),
    Q('(−3/5) · (−10/9) = ?', ['−2/3', '2/3', '−30/45', '5/3'], 1, 'Cùng dấu âm ⇒ dương; 30/45 = 2/3.'),
  ]),

  M(26, 'Chia phân số — Hỗn số', [
    Q('Chia một phân số cho phân số khác 0 tương đương?', ['Cộng với nghịch đảo', 'Nhân với nghịch đảo', 'Trừ với nghịch đảo', 'Chia tử cho tử'], 1, 'a/b : c/d = a/b · d/c.'),
    Q('2/3 : 4/5 = ?', ['8/15', '5/6', '10/12', '6/20'], 1, '2/3 · 5/4 = 10/12 = 5/6.'),
    Q('Đổi 7/3 ra hỗn số?', ['2 1/3', '1 4/3', '3 1/7', '2 3/3'], 0, '7 : 3 = 2 dư 1 ⇒ 2 1/3.'),
    Q('Đổi 3 2/5 ra phân số?', ['17/5', '11/5', '32/5', '13/5'], 0, '3·5 + 2 = 17 ⇒ 17/5.'),
    Q('(−3/4) : 1/2 = ?', ['−3/2', '3/8', '−3/8', '−1/2'], 0, '−3/4 · 2/1 = −6/4 = −3/2.'),
    Q('15 : 5/3 = ?', ['9', '25/3', '3', '45/5'], 0, '15 · 3/5 = 45/5 = 9.'),
  ]),

  M(27, 'Số thập phân — Làm tròn', [
    Q('Số 3,75 đọc là?', ['Ba phẩy bảy mươi lăm', 'Ba mươi bảy phẩy năm', 'Ba phẩy bảy năm', 'Ba bảy năm'], 0, 'Phần thập phân đọc theo hàng.'),
    Q('Đổi 0,5 ra phân số tối giản?', ['5/10', '1/2', '1/5', '50/100'], 1, '0,5 = 5/10 = 1/2.'),
    Q('Làm tròn 12,46 đến hàng phần mười?', ['12,4', '12,5', '12', '13'], 1, 'Chữ số sau là 6 ≥ 5 nên tăng: 12,5.'),
    Q('Làm tròn 7,832 đến hàng phần trăm?', ['7,83', '7,84', '7,8', '7,832'], 0, 'Số sau là 2 < 5 ⇒ giữ nguyên: 7,83.'),
    Q('Tổng 2,5 + 1,75 = ?', ['4,25', '3,75', '4,75', '3,25'], 0, '2,50 + 1,75 = 4,25.'),
    Q('Số 0,2 bằng phân số nào?', ['1/2', '1/5', '2/5', '1/20'], 1, '0,2 = 2/10 = 1/5.'),
    Q('Làm tròn 1 234 đến hàng trăm?', ['1 200', '1 230', '1 300', '1 000'], 0, 'Chữ số hàng chục là 3 < 5 ⇒ giữ: 1 200.'),
  ]),

  M(28, 'Tỉ số — Tỉ số phần trăm', [
    Q('Tỉ số của 4 và 5 là?', ['4 : 5 (hay 4/5)', '5 : 4', '4 − 5', '20'], 0, 'Tỉ số của a và b là a : b = a/b.'),
    Q('Đổi 1/4 ra phần trăm?', ['14%', '25%', '40%', '4%'], 1, '1/4 = 0,25 = 25%.'),
    Q('Đổi 60% ra phân số tối giản?', ['6/10', '3/5', '60/100', '3/50'], 1, '60/100 = 3/5.'),
    Q('Đổi 0,07 ra phần trăm?', ['0,07%', '7%', '70%', '0,7%'], 1, 'Nhân 100 và thêm dấu %.'),
    Q('Lớp 6A có 20 nam và 25 nữ. Tỉ số nam và nữ là?', ['4/5', '5/4', '20/45', '1/2'], 0, '20/25 = 4/5.'),
    Q('20% bằng phân số nào?', ['1/2', '1/4', '1/5', '2/5'], 2, '20/100 = 1/5.'),
  ]),

  M(29, 'Bài toán về tỉ số phần trăm', [
    Q('Tính 25% của 200?', ['25', '50', '75', '100'], 1, '200 · 25/100 = 50.'),
    Q('Tìm số biết 30% của nó là 60?', ['180', '200', '150', '90'], 1, '60 : 30/100 = 60 · 100/30 = 200.'),
    Q('Một áo giá 200 nghìn, giảm 15%. Giá sau giảm là?', ['170 nghìn', '185 nghìn', '180 nghìn', '150 nghìn'], 0, 'Giảm: 200·15% = 30; còn 200 − 30 = 170.'),
    Q('Lớp có 40 HS, 60% là nữ. Số HS nữ là?', ['20', '24', '16', '30'], 1, '40 · 60/100 = 24.'),
    Q('Tăng 50 lên 20% được?', ['55', '60', '65', '70'], 1, '50 + 50·20% = 50 + 10 = 60.'),
    Q('30% của 30% bằng?', ['60%', '9%', '0,9%', '90%'], 1, '0,3·0,3 = 0,09 = 9%.'),
  ]),

  M(30, 'Điểm — Đường thẳng — Đoạn thẳng', [
    Q('Qua hai điểm phân biệt có?', ['Không có đường thẳng nào', 'Một đường thẳng duy nhất', 'Vô số đường thẳng', 'Hai đường thẳng'], 1, 'Tiên đề: qua 2 điểm phân biệt có duy nhất một đường thẳng.'),
    Q('Tia là phần đường thẳng?', ['Bị giới hạn 2 đầu', 'Vô hạn 2 phía', 'Bắt đầu từ một điểm, kéo dài vô hạn về 1 phía', 'Là 1 điểm'], 2, 'Tia có 1 gốc và 1 chiều vô hạn.'),
    Q('Đoạn thẳng AB là?', ['Đường thẳng qua A, B', 'Hình gồm A, B và mọi điểm giữa A và B', 'Tia AB', 'Một điểm'], 1, 'Đoạn thẳng = 2 đầu mút + các điểm giữa.'),
    Q('Hai đường thẳng cắt nhau thì có?', ['1 điểm chung', '2 điểm chung', 'Vô số điểm chung', 'Không có điểm chung'], 0, 'Cắt nhau ⇒ đúng 1 điểm chung.'),
    Q('Hai đường thẳng không có điểm chung gọi là?', ['Trùng nhau', 'Cắt nhau', 'Song song', 'Vuông góc'], 2, 'Định nghĩa song song.'),
    Q('Có 3 điểm A, B, C không thẳng hàng thì kẻ được bao nhiêu đường thẳng đi qua từng cặp?', ['1', '2', '3', '6'], 2, '3 cặp: AB, AC, BC.'),
  ]),

  M(31, 'Trung điểm — Độ dài đoạn thẳng', [
    Q('M là trung điểm của AB khi?', ['M nằm giữa A, B và MA = MB', 'MA = MB', 'M nằm trên đường thẳng AB', 'MA + MB = AB'], 0, 'Cả 2 điều kiện: nằm giữa và cách đều.'),
    Q('Cho AB = 8 cm, M là trung điểm. AM = ?', ['16 cm', '8 cm', '4 cm', '2 cm'], 2, 'AM = AB/2 = 4 cm.'),
    Q('Nếu C nằm giữa A và B, AC = 3 cm, CB = 5 cm thì AB = ?', ['2 cm', '8 cm', '15 cm', '5 cm'], 1, 'AB = AC + CB = 8 cm.'),
    Q('Đơn vị đo độ dài chuẩn trong SI là?', ['cm', 'm', 'km', 'mm'], 1, 'Mét (m) là đơn vị chuẩn quốc tế.'),
    Q('Mỗi đoạn thẳng có bao nhiêu trung điểm?', ['0', '1', '2', 'Vô số'], 1, 'Duy nhất 1 trung điểm.'),
    Q('AB = 12 cm, M trung điểm AB, N trung điểm AM. AN = ?', ['6 cm', '3 cm', '4 cm', '12 cm'], 1, 'AM = 6; AN = AM/2 = 3 cm.'),
  ]),

  M(32, 'Góc — Đo góc', [
    Q('Góc được tạo bởi?', ['Hai tia chung gốc', 'Hai đoạn thẳng', 'Một đường thẳng', 'Một điểm'], 0, 'Định nghĩa góc.'),
    Q('Góc vuông có số đo?', ['45°', '60°', '90°', '180°'], 2, 'Góc vuông = 90°.'),
    Q('Góc bẹt có số đo?', ['90°', '120°', '180°', '360°'], 2, 'Góc bẹt = 180° (2 tia đối nhau).'),
    Q('Góc nhọn là góc?', ['Nhỏ hơn 90°', 'Bằng 90°', 'Lớn hơn 90° và nhỏ hơn 180°', 'Bằng 180°'], 0, 'Nhọn: 0° < α < 90°.'),
    Q('Góc tù là góc có số đo?', ['α < 90°', '90° < α < 180°', 'α = 90°', 'α = 180°'], 1, 'Tù: lớn hơn vuông, nhỏ hơn bẹt.'),
    Q('Dụng cụ đo góc thường dùng?', ['Thước thẳng', 'Compa', 'Thước đo góc (thước đo độ)', 'Êke'], 2, 'Thước đo độ.'),
    Q('Tổng số đo 2 góc kề bù bằng?', ['90°', '180°', '360°', 'Tùy'], 1, '2 góc kề bù tạo thành góc bẹt = 180°.'),
  ]),

  M(33, 'Tam giác đều — Hình vuông — Lục giác đều', [
    Q('Tam giác đều có?', ['3 cạnh khác nhau', '3 cạnh bằng nhau và 3 góc bằng 60°', '1 góc vuông', '2 cạnh bằng nhau'], 1, 'Tam giác đều: 3 cạnh = nhau, 3 góc = 60°.'),
    Q('Hình vuông có?', ['4 cạnh bằng nhau, 4 góc vuông', '4 cạnh khác nhau', '2 cặp cạnh bằng nhau', '4 góc 60°'], 0, 'Định nghĩa hình vuông.'),
    Q('Lục giác đều có bao nhiêu cạnh?', ['4', '5', '6', '8'], 2, '"Lục" = 6.'),
    Q('Số đo mỗi góc trong của lục giác đều?', ['60°', '90°', '120°', '108°'], 2, '(6−2)·180°/6 = 120°.'),
    Q('Hình vuông cạnh 5 cm có chu vi?', ['10 cm', '15 cm', '20 cm', '25 cm'], 2, 'P = 4·5 = 20 cm.'),
    Q('Tam giác đều cạnh 6 cm có chu vi?', ['12 cm', '18 cm', '24 cm', '36 cm'], 1, 'P = 3·6 = 18 cm.'),
  ]),

  M(34, 'Hình thang cân — Hình bình hành', [
    Q('Hình thang là tứ giác có?', ['Hai cạnh đối song song', 'Bốn cạnh bằng nhau', 'Hai đường chéo bằng nhau', 'Có 1 góc vuông'], 0, 'Định nghĩa hình thang.'),
    Q('Hình thang cân là hình thang có?', ['Hai góc kề một đáy bằng nhau', '4 cạnh bằng nhau', '1 góc vuông', '2 cặp cạnh đối song song'], 0, 'Hai góc kề đáy bằng nhau ⇒ hình thang cân.'),
    Q('Hình bình hành có?', ['Hai cặp cạnh đối song song và bằng nhau', '4 cạnh bằng nhau', '4 góc vuông', '1 cặp cạnh song song'], 0, 'Định nghĩa hình bình hành.'),
    Q('Trong hình bình hành ABCD, AB = 6 cm thì CD = ?', ['3 cm', '6 cm', '9 cm', '12 cm'], 1, 'Cạnh đối bằng nhau ⇒ CD = AB = 6 cm.'),
    Q('Hình nào sau vừa là hình thang cân vừa là hình bình hành?', ['Hình thang thường', 'Hình chữ nhật', 'Hình tam giác', 'Không có'], 1, 'Hình chữ nhật là hình bình hành đồng thời thang cân.'),
    Q('Hai đường chéo hình bình hành?', ['Bằng nhau', 'Cắt nhau tại trung điểm mỗi đường', 'Vuông góc', 'Song song'], 1, 'Tính chất đặc trưng.'),
  ]),

  M(35, 'Diện tích — Chu vi hình cơ bản', [
    Q('Diện tích hình chữ nhật dài 8 cm, rộng 5 cm?', ['13 cm²', '26 cm²', '40 cm²', '40 cm'], 2, 'S = a·b = 8·5 = 40 cm².'),
    Q('Diện tích hình vuông cạnh 7 cm?', ['14 cm²', '28 cm²', '49 cm²', '49 cm'], 2, 'S = a² = 49 cm².'),
    Q('Diện tích tam giác có đáy 10 cm, chiều cao 6 cm?', ['30 cm²', '60 cm²', '16 cm²', '36 cm²'], 0, 'S = 1/2·đáy·cao = 30 cm².'),
    Q('Chu vi hình bình hành có 2 cạnh kề 5 cm và 8 cm?', ['13 cm', '26 cm', '40 cm', '20 cm'], 1, 'P = 2·(5+8) = 26 cm.'),
    Q('Diện tích hình thang có hai đáy 6 cm và 10 cm, chiều cao 4 cm?', ['16 cm²', '32 cm²', '40 cm²', '24 cm²'], 1, 'S = (a+b)·h/2 = 16·4/2 = 32 cm².'),
    Q('Mảnh vườn hình chữ nhật dài 20 m, rộng 15 m. Diện tích là?', ['35 m²', '70 m²', '300 m²', '150 m²'], 2, '20·15 = 300 m².'),
    Q('Đơn vị đo diện tích trong các đáp án sau, đơn vị nào KHÔNG dùng cho diện tích?', ['m²', 'cm²', 'dm', 'km²'], 2, 'dm là đơn vị độ dài, không phải diện tích.'),
  ]),

  M(36, 'Ôn tập học kì II', [
    Q('Rút gọn 24/36?', ['2/3', '3/4', '4/6', '1/2'], 0, 'ƯCLN(24,36) = 12 ⇒ 2/3.'),
    Q('1/2 + 1/3 − 1/6 = ?', ['1/2', '2/3', '5/6', '1/3'], 1, 'MC=6: 3/6 + 2/6 − 1/6 = 4/6 = 2/3.'),
    Q('30% của 250 = ?', ['25', '50', '75', '100'], 2, '250·0,3 = 75.'),
    Q('(−2/3) · (−9/4) = ?', ['3/2', '−3/2', '6/12', '−6/12'], 0, 'Cùng dấu âm ⇒ dương; 18/12 = 3/2.'),
    Q('Diện tích tam giác đáy 12 cm, cao 5 cm?', ['30 cm²', '60 cm²', '17 cm²', '34 cm²'], 0, '1/2·12·5 = 30 cm².'),
    Q('Cho AB = 10 cm, M trung điểm AB. MB = ?', ['10 cm', '5 cm', '2 cm', '20 cm'], 1, 'MB = AB/2 = 5 cm.'),
    Q('Số đo góc vuông là?', ['45°', '60°', '90°', '180°'], 2, 'Góc vuông = 90°.'),
    Q('Đổi 0,75 ra phân số tối giản?', ['3/4', '7/10', '75/100', '15/20'], 0, '0,75 = 75/100 = 3/4.'),
  ]),
];

export const S6TOAN_SCENARIOS = indexBy(S6TOAN_WEEKS);
