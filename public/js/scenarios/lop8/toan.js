// ============================================================
// Lớp 8 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Toán 8: Đại số, Hình học, Thống kê - Xác suất).
// ID prefix: "S8TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8TOAN', 'toan', n, title, qs, opts);

export const S8TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Đơn thức và đa thức nhiều biến', [
    Q('Trong các biểu thức sau, biểu thức nào là đơn thức?', ['3x²y', '5/x', 'x − 2', '2x + y'], 0, 'Đơn thức là biểu thức gồm số nhân với biến (luỹ thừa tự nhiên). 3x²y là đơn thức.'),
    Q('Bậc của đơn thức 5x³y²z là?', ['6', '2', '3', '5'], 0, 'Bậc = tổng số mũ các biến = 3+2+1 = 6.'),
    Q('Hệ số của đơn thức −7x²y là?', ['−7x²y', '2', '−7', '7'], 2, 'Hệ số là phần số đứng trước, ở đây là −7.'),
    Q('Hai đơn thức nào sau đây là đồng dạng?', ['5x²y và −2x²y', 'x²y và xy', '2x²y và 3xy²', '4x³ và 4x²'], 0, 'Đồng dạng = cùng phần biến. 5x²y và −2x²y cùng x²y.'),
    Q('Đa thức 3x² − 2xy + y² − 5 có bậc là?', ['2', '4', '3', '1'], 0, 'Bậc đa thức = bậc cao nhất của đơn thức, ở đây là 2.'),
    Q('Thu gọn 3x²y + 2x²y − x²y = ?', ['5x²y', '2x²y', '6x²y', '4x²y'], 3, '(3+2−1)x²y = 4x²y.'),
  ]),

  M(2, 'Phép cộng, trừ đa thức', [
    Q('(3x² + 2x − 1) + (x² − 2x + 5) = ?', ['2x² + 4', '4x² − 4x + 6', '4x² + 4', '4x² + 4x + 4'], 2, '3x²+x²=4x²; 2x−2x=0; −1+5=4 → 4x²+4.'),
    Q('(5x − 3y) − (2x − 3y) = ?', ['3x − 6y', '3x + 6y', '7x', '3x'], 3, '5x−2x=3x; −3y−(−3y)=0 → 3x.'),
    Q('Đa thức đối của 2x² − 3x + 1 là?', ['−2x² − 3x − 1', '2x² + 3x − 1', '2x² − 3x − 1', '−2x² + 3x − 1'], 3, 'Đối = đổi dấu mọi hạng tử.'),
    Q('Tổng 4xy + (−4xy) bằng?', ['8xy', '8xy²', '0', '4xy'], 2, 'Hai số đối nhau cộng nhau bằng 0.'),
    Q('(a + b) − (a − b) = ?', ['2a', '0', '2b', '2a − 2b'], 2, 'a+b−a+b = 2b.'),
    Q('Tính giá trị (2x − y) + (x + y) tại x=1, y=3?', ['5', '3', '6', '4'], 1, '2x−y+x+y = 3x = 3·1 = 3.'),
  ]),

  M(3, 'Phép nhân đa thức', [
    Q('2x · (3x − 5) = ?', ['5x² − 10x', '6x − 10x', '6x² − 5', '6x² − 10x'], 3, 'Nhân phân phối: 2x·3x − 2x·5 = 6x² − 10x.'),
    Q('(x + 2)(x − 3) = ?', ['x² − x − 6', 'x² + x − 6', 'x² + 5x + 6', 'x² − 5x + 6'], 0, 'x² −3x +2x −6 = x² − x − 6.'),
    Q('(2x − 1)(x + 4) = ?', ['2x² − 7x − 4', '2x² + 7x − 4', '2x² + 9x − 4', '2x² + 7x + 4'], 1, '2x²+8x−x−4 = 2x²+7x−4.'),
    Q('Tích (a + b)(a − b) = ?', ['(a+b)²', 'a² − b²', '(a−b)²', 'a² + b²'], 1, 'Hằng đẳng thức hiệu hai bình phương.'),
    Q('(x − 1)(x² + x + 1) = ?', ['x³ + 1', 'x³ − 1', 'x³ − 3x + 1', 'x³ + 3x − 1'], 1, 'Hằng đẳng thức hiệu lập phương.'),
    Q('Hệ số của x² trong tích (x + 3)(x − 5) là?', ['−2 (hệ số của x)', '−5 (số hạng tự do)', '1', '3 (tổng 3+(−5))'], 2, 'Tích cho x² − 2x − 15, hệ số x² là 1.'),
  ]),

  M(4, 'Hằng đẳng thức — Bình phương của tổng/hiệu', [
    Q('(a + b)² = ?', ['a² + 2ab + b²', 'a² − 2ab + b²', 'a² + ab + b²', 'a² + b²'], 0, 'Bình phương của tổng = a² + 2ab + b².'),
    Q('(a − b)² = ?', ['a² − 2ab + b²', 'a² − b²', 'a² + 2ab + b²', '−(a+b)²'], 0, 'Bình phương của hiệu = a² − 2ab + b².'),
    Q('Khai triển (x + 3)² = ?', ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 3', 'x² + 6x + 9'], 3, 'x² + 2·x·3 + 9 = x² + 6x + 9.'),
    Q('Khai triển (2x − 1)² = ?', ['4x² + 4x + 1', '2x² − 4x + 1', '4x² − 4x + 1', '4x² − 2x + 1'], 2, '(2x)² − 2·2x·1 + 1 = 4x² − 4x + 1.'),
    Q('Viết x² + 10x + 25 dưới dạng bình phương?', ['(x+5)²', '(x−5)²', '(x+10)²', '(x+25)²'], 0, '25 = 5²; 10x = 2·x·5 → (x+5)².'),
    Q('Tính nhanh 101² = ?', ['10201', '11001', '10001', '10101'], 0, '101² = (100+1)² = 10000+200+1 = 10201.'),
  ]),

  M(5, 'Hiệu hai bình phương — Hiệu/Tổng hai lập phương', [
    Q('a² − b² = ?', ['(a+b)(a−b)', 'a² + b²', '(a+b)²', '(a−b)²'], 0, 'Hiệu hai bình phương = (a+b)(a−b).'),
    Q('a³ + b³ = ?', ['(a+b)³', '(a+b)(a²−ab+b²)', '(a+b)(a²+ab+b²)', '(a−b)(a²+ab+b²)'], 1, 'Tổng hai lập phương = (a+b)(a² − ab + b²).'),
    Q('a³ − b³ = ?', ['(a−b)(a²+ab+b²)', '(a−b)(a²−ab+b²)', '(a+b)(a²−ab+b²)', '(a−b)³'], 0, 'Hiệu hai lập phương = (a−b)(a² + ab + b²).'),
    Q('Phân tích x² − 49 = ?', ['(x−7)²', '(x−7)(x+7)', '(x+7)²', '(x−49)(x+1)'], 1, 'x² − 7² = (x−7)(x+7).'),
    Q('Phân tích x³ − 8 = ?', ['(x−2)(x²+2x+4)', '(x−2)(x²−2x+4)', '(x−2)³', '(x+2)(x²−2x+4)'], 0, 'x³−2³ = (x−2)(x²+2x+4).'),
    Q('Tính nhanh 99·101 = ?', ['10000', '9899', '10001', '9999'], 3, '(100−1)(100+1) = 100²−1 = 9999.'),
  ]),

  M(6, 'Lập phương của tổng/hiệu', [
    Q('(a + b)³ = ?', ['a³ + 3a²b + 3ab² + b³', 'a³ − 3a²b + 3ab² − b³', '(a+b)·(a²+b²)', 'a³ + b³'], 0, 'Lập phương của tổng = a³ + 3a²b + 3ab² + b³.'),
    Q('(a − b)³ = ?', ['a³ − 3ab(a−b) − b³', 'a³ − b³', 'a³ − 3a²b + 3ab² − b³', 'a³ + 3a²b + 3ab² + b³'], 2, 'Lập phương của hiệu = a³ − 3a²b + 3ab² − b³.'),
    Q('Khai triển (x + 1)³ = ?', ['x³ − 3x² + 3x − 1', 'x³ + 3x + 1', 'x³ + 3x² + 3x + 1', 'x³ + 1'], 2, 'x³ + 3x²·1 + 3x·1 + 1.'),
    Q('Khai triển (x − 2)³ = ?', ['x³ − 6x² − 12x − 8', 'x³ − 6x² + 12x − 8', 'x³ + 6x² + 12x + 8', 'x³ − 8'], 1, 'x³ − 3x²·2 + 3x·4 − 8.'),
    Q('Viết gọn x³ + 9x² + 27x + 27 = ?', ['x³ + 27', '(x+3)³', '(x−3)³', '(x+27)'], 1, 'Có 3·x²·3 = 9x², 3·x·9 = 27x, 3³ = 27.'),
    Q('Tính (a+b)³ − (a−b)³ rút gọn?', ['0', '6a²b + 2b³', '6ab²', '2b³'], 1, '(a+b)³ −(a−b)³ = 2·(3a²b + b³) = 6a²b + 2b³.'),
  ]),

  M(7, 'Phân tích đa thức thành nhân tử — Đặt nhân tử chung', [
    Q('Phân tích 3x² + 6x = ?', ['x(3x+6)', '3(x²+6x)', '3x(x+2)', '3x(x+6)'], 2, '3x·x + 3x·2 = 3x(x+2).'),
    Q('Phân tích 5xy − 10x²y = ?', ['5x(y − 2x)', '5xy(2x − 1)', '5x²y(1 − 2)', '5xy(1 − 2x)'], 3, 'NTC = 5xy → 5xy·1 − 5xy·2x = 5xy(1−2x).'),
    Q('NTC lớn nhất của 12a²b và 18ab² là?', ['6a²b²', '6ab', '12ab', '18ab'], 1, 'ƯCLN(12,18)=6; biến chung: ab.'),
    Q('Phân tích x(y−1) + 2(y−1) = ?', ['(y−1)(x−2)', '(x+y)(1+2)', '(y−1)(x+2)', '(y+1)(x+2)'], 2, 'NTC = (y−1).'),
    Q('Phân tích a(b+c) − (b+c) = ?', ['(b+c)(a+1)', '(b+c)(a−1)', '(b−c)(a−1)', 'a(b+c−1)'], 1, 'NTC = (b+c).'),
    Q('Phân tích x³ − x = ?', ['x(x²−1)', 'x(x−1)(x+1)', 'Cả A và B', 'x(x+1)²'], 2, 'x(x²−1) = x(x−1)(x+1) — cả hai cách viết đều đúng.'),
  ]),

  M(8, 'Phân tích — Dùng hằng đẳng thức và nhóm hạng tử', [
    Q('Phân tích x² − 6x + 9 = ?', ['(x+3)²', '(x−3)²', '(x−6)(x+3)', '(x−9)(x+1)'], 1, 'x² − 2·x·3 + 3² = (x−3)².'),
    Q('Phân tích 4x² − 25 = ?', ['(4x−5)(x+5)', '(2x−5)(2x+5)', '(2x−5)²', '(2x−25)(2x+1)'], 1, '(2x)² − 5² = (2x−5)(2x+5).'),
    Q('Phân tích x² − xy + 5x − 5y bằng cách nhóm?', ['(x−y)(x−5)', '(x−y)(x+5)', '(x−5)(x−y)', '(x+y)(x−5)'], 1, 'Nhóm: x(x−y) + 5(x−y) = (x−y)(x+5).'),
    Q('Phân tích x² + 4x + 4 − y² = ?', ['(x+2)²−y', '(x+y+4)(x−y)', '(x+2−y)(x+2+y)', '(x−y+2)(x+y−2)'], 2, '= (x+2)² − y² = (x+2−y)(x+2+y).'),
    Q('Phân tích x³ + 3x² + 3x + 1 = ?', ['(x+1)³', '(x+1)(x²+1)', 'x(x+1)²', '(x−1)³'], 0, 'Đây là lập phương của tổng.'),
    Q('Phân tích x³ − 27 = ?', ['(x+3)(x²−3x+9)', '(x−3)(x²+3x+9)', '(x−3)(x+3)²', '(x−3)³'], 1, 'Hiệu lập phương x³−3³.'),
  ]),

  M(9, 'Phân thức đại số — Khái niệm và rút gọn', [
    Q('Phân thức A/B xác định khi nào?', ['A ≠ 0 và B ≠ 0', 'B ≠ 0', 'A và B ≠ 0', 'A ≠ 0'], 1, 'Mẫu khác 0: B ≠ 0.'),
    Q('Điều kiện xác định của (x+1)/(x−2) là?', ['x ≠ 0', 'x ≠ 1', 'x ≠ −1', 'x ≠ 2'], 3, 'Mẫu x−2 ≠ 0 ⇒ x ≠ 2.'),
    Q('Hai phân thức A/B và C/D bằng nhau khi nào?', ['A = C và B = D', 'A+D = B+C', 'A + B = C + D', 'A·D = B·C'], 3, 'Quy tắc bằng nhau: tích chéo bằng nhau.'),
    Q('Rút gọn (2x)/(4x²) (x≠0) = ?', ['2/x', '1/(2x)', 'x/2', '1/2'], 1, 'Chia tử và mẫu cho 2x: 1/(2x).'),
    Q('Rút gọn (x²−4)/(x−2) (x≠2) = ?', ['x−2', 'x²+2', 'x+2', 'x+4'], 2, '(x−2)(x+2)/(x−2) = x+2.'),
    Q('Rút gọn (x²+2x+1)/(x+1) (x≠−1) = ?', ['(x+1)²', '1', 'x+1', 'x−1'], 2, '(x+1)²/(x+1) = x+1.'),
  ]),

  M(10, 'Cộng, trừ phân thức', [
    Q('1/x + 2/x (x≠0) = ?', ['3', '3/x', '2/x²', '3/(2x)'], 1, 'Cùng mẫu: cộng tử → 3/x.'),
    Q('1/2 + 1/3 = ?', ['2/6', '5/6', '1/5', '2/5'], 1, 'Quy đồng MC = 6: 3/6 + 2/6 = 5/6.'),
    Q('Để cộng a/x + b/y (x,y khác 0), MC là?', ['xy', 'x−y', 'x/y', 'x+y'], 0, 'MC nhỏ nhất là xy.'),
    Q('1/x − 1/(x+1) = ? (x≠0, −1)', ['(2x+1)/[x(x+1)]', '0', '−1/[x(x+1)]', '1/[x(x+1)]'], 3, '[(x+1) − x]/[x(x+1)] = 1/[x(x+1)].'),
    Q('Phân thức đối của 2/x là?', ['2/(−x) (chỉ cách viết)', '−2/(−x)', 'Cả A và C đều đúng', 'x/2'], 2, '−(2/x) = (−2)/x = 2/(−x).'),
    Q('1/(x−1) + 1/(1−x) (x≠1) = ?', ['2/(x−1)', '0', '1', '−2/(x−1)'], 1, '1/(1−x) = −1/(x−1) ⇒ tổng = 0.'),
  ]),

  M(11, 'Nhân, chia phân thức', [
    Q('(2/3) · (5/4) = ?', ['7/12', '10/7', '10/12', '5/6'], 3, '10/12 = 5/6.'),
    Q('Quy tắc nhân hai phân thức (A/B)·(C/D) = ?', ['(AC)/(BD)', '(A−C)/(B−D)', '(AD)/(BC)', '(A+C)/(B+D)'], 0, 'Tử × tử, mẫu × mẫu.'),
    Q('Quy tắc chia (A/B) : (C/D) (C≠0) = ?', ['(AC)/(BD)', '(AD)/(BC)', '(BC)/(AD)', '(A+D)/(B+C)'], 1, 'Đảo phân thức thứ hai rồi nhân.'),
    Q('(x/2) · (4/x²) (x≠0) = ?', ['x/2', '4/(2x)', '2/x', '4/x'], 2, '4x/(2x²) = 2/x.'),
    Q('(3/x) : (6/x²) (x≠0) = ?', ['18/x³', 'x²/18', 'x/2', '2/x'], 2, '(3/x)·(x²/6) = 3x²/(6x) = x/2.'),
    Q('Phân thức nghịch đảo của (x+1)/x (x≠0,−1) là?', ['(x−1)/x', 'x/(x+1)', '−(x+1)/x', '−x/(x+1)'], 1, 'Đảo tử và mẫu.'),
  ]),

  M(12, 'Phương trình bậc nhất một ẩn', [
    Q('Phương trình bậc nhất một ẩn có dạng?', ['ax² + b = 0', 'ax + b = 0 (a≠0)', 'a/x = b', 'ax + by = 0'], 1, 'Định nghĩa: ax + b = 0 với a ≠ 0.'),
    Q('Nghiệm của 2x − 6 = 0 là?', ['x = 3', 'x = −3', 'x = 6', 'x = 12'], 0, '2x = 6 ⇒ x = 3.'),
    Q('Nghiệm của 3x + 9 = 0 là?', ['x = −3', 'x = −9', 'x = 3', 'x = 9'], 0, '3x = −9 ⇒ x = −3.'),
    Q('Giải 5x − 2 = 3x + 8?', ['x = 2', 'x = 3', 'x = 5', 'x = 10'], 2, '2x = 10 ⇒ x = 5.'),
    Q('Phương trình 0·x = 5 có nghiệm?', ['Vô nghiệm', 'x = 0', 'x = 5', 'Vô số nghiệm'], 0, '0 ≠ 5 ⇒ vô nghiệm.'),
    Q('Phương trình 0·x = 0 có nghiệm?', ['Vô nghiệm', 'Vô số nghiệm', 'x = 0', 'x = 1'], 1, '0 = 0 luôn đúng ⇒ vô số nghiệm.'),
  ]),

  M(13, 'Giải bài toán bằng cách lập phương trình', [
    Q('Tổng hai số là 30, hiệu là 4. Số lớn là?', ['13', '20', '17', '15'], 2, 'Số lớn = (30+4)/2 = 17.'),
    Q('Hai lần một số cộng 5 bằng 23. Số đó là?', ['14', '18', '11', '9'], 3, '2x+5=23 ⇒ x=9.'),
    Q('An có x viên kẹo, Bình có gấp 3 lần An. Tổng 24 viên. An có?', ['6', '8', '12', '4'], 0, 'x + 3x = 24 ⇒ x = 6.'),
    Q('Bước đầu tiên khi giải bài toán bằng cách lập phương trình?', ['Chọn ẩn và đặt điều kiện', 'Giải phương trình', 'Lập bảng', 'Trả lời'], 0, 'Bước 1: chọn ẩn, đặt ĐK.'),
    Q('Một mảnh vườn hình chữ nhật chu vi 40 m, chiều dài hơn rộng 4 m. Chiều rộng?', ['12 m', '6 m', '8 m', '10 m'], 2, 'Nửa chu vi 20; chiều rộng x ⇒ x + (x+4) = 20 ⇒ x = 8.'),
    Q('Sau bài toán, cần làm gì?', ['Vẽ hình', 'Bỏ qua', 'Chọn ẩn mới', 'Đối chiếu điều kiện và trả lời'], 3, 'Bước cuối: đối chiếu ĐK, kết luận.'),
  ]),

  M(14, 'Tứ giác — Hình thang, hình thang cân', [
    Q('Tổng các góc trong một tứ giác?', ['270°', '180°', '540°', '360°'], 3, 'Tổng = 360°.'),
    Q('Hình thang là tứ giác có?', ['Đúng 1 cặp cạnh đối song song', 'Bốn góc vuông', 'Hai đường chéo bằng nhau', 'Có ít nhất 1 cặp cạnh đối song song'], 3, 'Theo SGK 8: hình thang là tứ giác có hai cạnh đối song song.'),
    Q('Hình thang cân là?', ['Hình thang có 2 góc kề đáy bằng nhau', 'Hình thang có 2 cạnh bên bằng nhau', 'Hình thang có 2 đường chéo bằng nhau', 'Tất cả đều đúng'], 3, 'Cả 3 đều là tính chất tương đương của hình thang cân.'),
    Q('Trong hình thang ABCD (AB // CD), nếu góc A = 70° thì góc D = ?', ['110°', '20°', '70°', '90°'], 0, 'A + D = 180° (trong cùng phía) ⇒ D = 110°.'),
    Q('Đường trung bình của hình thang có tính chất?', ['Vuông góc với đáy', 'Song song hai đáy, bằng nửa tổng hai đáy', 'Bằng đường chéo', 'Bằng hai đáy cộng lại'], 1, 'Định lý đường TB hình thang.'),
    Q('Hình thang có 2 đáy 4 cm và 10 cm. Đường trung bình dài?', ['7 cm', '6 cm', '5 cm', '14 cm'], 0, '(4+10)/2 = 7 cm.'),
  ]),

  M(15, 'Hình bình hành', [
    Q('Hình bình hành là tứ giác có?', ['2 cặp cạnh đối song song', '1 cặp cạnh đối song song', '4 góc vuông', '4 cạnh bằng nhau'], 0, 'Định nghĩa: tứ giác có các cạnh đối song song.'),
    Q('Tính chất KHÔNG đúng của hình bình hành?', ['Các góc đối bằng nhau', 'Các cạnh đối bằng nhau', 'Hai đường chéo bằng nhau', 'Hai đường chéo cắt nhau tại trung điểm mỗi đường'], 2, 'Hai đường chéo của hbh chỉ cắt nhau tại trung điểm, không bằng nhau (chỉ HCN, hình vuông mới bằng).'),
    Q('Hình bình hành ABCD có AB = 5 cm. Vậy CD = ?', ['Không xác định', '10 cm', '2.5 cm', '5 cm'], 3, 'Cạnh đối bằng nhau.'),
    Q('Hbh ABCD có góc A = 65°. Góc C = ?', ['65°', '115°', '25°', '90°'], 0, 'Hai góc đối bằng nhau.'),
    Q('Dấu hiệu nhận biết hbh: tứ giác có?', ['Hai cạnh đối song song và bằng nhau', 'Đường chéo vuông góc', '4 cạnh bằng nhau', '2 góc kề bằng nhau'], 0, 'Đây là một trong các dấu hiệu nhận biết.'),
    Q('Chu vi hbh có 2 cạnh kề 6 cm và 9 cm là?', ['24 cm', '54 cm', '15 cm', '30 cm'], 3, 'P = 2(6+9) = 30 cm.'),
  ]),

  M(16, 'Hình chữ nhật — Hình thoi', [
    Q('Hình chữ nhật là?', ['Hình bình hành có 1 góc vuông', 'Hbh có 2 đường chéo bằng nhau', 'Tứ giác có 4 góc vuông', 'Tất cả đều đúng'], 3, 'Các định nghĩa/dấu hiệu tương đương.'),
    Q('Tính chất đặc trưng của HCN so với hbh?', ['Hai góc đối bằng nhau', 'Hai đường chéo bằng nhau', 'Cạnh đối bằng nhau', 'Cạnh đối song song'], 1, 'HCN có thêm tính chất: hai đường chéo bằng nhau.'),
    Q('Hình thoi là?', ['Hbh có 2 cạnh kề bằng nhau', 'Hbh có 2 đường chéo vuông góc', 'Tứ giác có 4 cạnh bằng nhau', 'Tất cả đều đúng'], 3, 'Đều là định nghĩa/dấu hiệu của hình thoi.'),
    Q('Hai đường chéo của hình thoi có tính chất?', ['Không cắt nhau', 'Bằng nhau', 'Vuông góc và là trục đối xứng', 'Vuông góc với nhau'], 2, 'Vuông góc với nhau VÀ cắt tại trung điểm mỗi đường VÀ là đường phân giác các góc.'),
    Q('Diện tích hình thoi có 2 đường chéo 6 cm và 8 cm?', ['28 cm²', '48 cm²', '24 cm²', '14 cm²'], 2, 'S = (d₁·d₂)/2 = 48/2 = 24 cm².'),
    Q('Hình vuông là?', ['Hình thoi có 1 góc vuông', 'HCN có 4 cạnh bằng nhau', 'Tất cả đều đúng', 'Hbh có 4 cạnh bằng nhau và 4 góc vuông'], 2, 'Đều đúng — hình vuông là giao của HCN và hình thoi.'),
  ]),

  M(17, 'Định lý Talet trong tam giác', [
    Q('Định lý Talet: nếu một đường thẳng // cạnh tam giác thì?', ['Cắt 2 cạnh còn lại tại trung điểm', 'Vuông góc với cạnh đó', 'Định ra trên 2 cạnh ấy những đoạn tỉ lệ', 'Đi qua trọng tâm'], 2, 'Định lý Talet về các đoạn tỉ lệ.'),
    Q('Tam giác ABC có MN // BC (M ∈ AB, N ∈ AC). Tỉ số AM/AB = ?', ['AB/MN', 'AM/AN', 'MB/NC', 'AN/AC'], 3, 'AM/AB = AN/AC = MN/BC.'),
    Q('AM=2, MB=3, AN=4. Tính NC?', ['4', '6', '3', '5'], 1, 'AM/MB = AN/NC ⇒ 2/3 = 4/NC ⇒ NC = 6.'),
    Q('Đảo của Talet: MN // BC khi nào?', ['AM/MB = AN/NC', 'MN = BC/2', 'AM/AB = AN/AC', 'BM = CN'], 2, 'Định lý đảo: tỉ số bằng nhau ⇒ song song.'),
    Q('Tam giác ABC, M trung điểm AB, N trung điểm AC. MN có tính chất?', ['MN = BC', 'MN // BC và MN = BC/2', 'MN vuông góc BC', 'MN > BC'], 1, 'Đường trung bình của tam giác.'),
    Q('Đường phân giác trong của một tam giác chia cạnh đối thành?', ['Hai đoạn tỉ lệ với hai cạnh kề', 'Một đoạn lớn gấp đôi', 'Vô số đoạn', 'Hai đoạn bằng nhau'], 0, 'Tính chất đường phân giác: BD/DC = AB/AC.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Khai triển (x − 4)² = ?', ['x² − 4x + 16', 'x² + 8x + 16', 'x² − 16', 'x² − 8x + 16'], 3, 'x² − 2·x·4 + 16.'),
    Q('Phân tích x² − 9 = ?', ['(x−3)²', '(x−3)(x+3)', '(x−9)(x+1)', '(x+3)²'], 1, 'Hiệu hai bình phương.'),
    Q('Giải 4x − 12 = 0?', ['x = 3', 'x = 4', 'x = 12', 'x = −3'], 0, '4x = 12 ⇒ x = 3.'),
    Q('Rút gọn (x²−1)/(x−1) (x≠1) = ?', ['x−1', 'x+1', 'x²+1', '1'], 1, '(x−1)(x+1)/(x−1) = x+1.'),
    Q('Hình thoi có cạnh bằng?', ['4 cạnh bằng nhau', 'Các cạnh khác nhau', '3 cạnh bằng nhau', 'Chỉ 2 cạnh bằng nhau'], 0, 'Định nghĩa hình thoi.'),
    Q('Đường trung bình hình thang dài 9 cm, một đáy 6 cm. Đáy còn lại?', ['24 cm', '15 cm', '3 cm', '12 cm'], 3, '(6 + x)/2 = 9 ⇒ x = 12 cm.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bất đẳng thức', [
    Q('Bất đẳng thức nào sau đây đúng?', ['0 > 1', '−2 > 1', '−5 < −2', '5 < 3'], 2, '−5 nhỏ hơn −2 vì cách 0 xa hơn về phía âm.'),
    Q('Nếu a < b thì a + c ___ b + c?', ['dấu >', 'dấu ≥', 'dấu =', '<'], 3, 'Cộng cùng số: chiều bđt giữ nguyên.'),
    Q('Nếu a < b và c > 0 thì a·c ___ b·c?', ['<', 'Không xác định', 'dấu >', 'dấu ='], 0, 'Nhân với số dương: chiều giữ nguyên.'),
    Q('Nếu a < b và c < 0 thì a·c ___ b·c?', ['>', 'dấu =', 'dấu <', 'Không xác định'], 0, 'Nhân với số âm: chiều ĐẢO.'),
    Q('Cho a > 0, b > 0. Khẳng định nào đúng?', ['a + b ≤ 2√(ab)', 'a + b = ab', 'a − b > 0', 'a + b ≥ 2√(ab)'], 3, 'Bất đẳng thức Cauchy/AM-GM.'),
    Q('So sánh 3² và 2·5?', ['3² = 2·5', '3² > 2·5', '3² < 2·5', 'Không so sánh được'], 2, '9 < 10.'),
  ]),

  M(20, 'Bất phương trình bậc nhất một ẩn', [
    Q('Bất phương trình bậc nhất một ẩn dạng?', ['ax + b ≥ 0 (a≠0)', 'ax² + b > 0', 'a/x ≥ 0', 'ax + by < 0'], 0, 'ax + b > 0 (hoặc ≥, <, ≤) với a ≠ 0.'),
    Q('Giải 2x > 6?', ['x > 3', 'x < 3', 'x = 3', 'x ≥ 3'], 0, 'Chia 2 (>0), giữ chiều ⇒ x > 3.'),
    Q('Giải −3x > 9?', ['x > −3', 'x > 3', 'x < 3', 'x < −3'], 3, 'Chia −3 (<0), ĐẢO chiều ⇒ x < −3.'),
    Q('Giải x + 5 < 0?', ['x < 5', 'x > −5', 'x > 5', 'x < −5'], 3, 'x < −5.'),
    Q('Tập nghiệm của 2x − 4 ≥ 0?', ['x ≥ 2', 'x = 2', 'x > 2', 'x ≤ 2'], 0, '2x ≥ 4 ⇒ x ≥ 2.'),
    Q('Nghiệm của |x| ≤ 3 là?', ['x ≤ 3', 'x ≥ −3', 'x ≤ −3 hoặc x ≥ 3', '−3 ≤ x ≤ 3'], 3, 'Định nghĩa giá trị tuyệt đối.'),
  ]),

  M(21, 'Hàm số bậc nhất y = ax + b', [
    Q('Hàm số bậc nhất có dạng?', ['y = ax² + b', 'y = a/x', 'y = ax·b', 'y = ax + b (a≠0)'], 3, 'y = ax + b với a ≠ 0.'),
    Q('Hàm y = 2x + 3, hệ số a = ?', ['a = 3', '5', '3', '2'], 3, 'a là hệ số của x.'),
    Q('Đồ thị y = ax + b là?', ['Đường tròn', 'Parabol', 'Đường thẳng', 'Hyperbol'], 2, 'Là một đường thẳng.'),
    Q('Đồ thị y = 2x đi qua điểm nào?', ['(2; 1)', '(0; 2)', '(1; 2)', '(1; 0)'], 2, 'Thay x=1: y=2.'),
    Q('Hàm y = 3x + 5 đồng biến hay nghịch biến?', ['Đồng biến', 'Hằng', 'Không xác định', 'Nghịch biến'], 0, 'a = 3 > 0 ⇒ đồng biến trên R.'),
    Q('Hệ số góc của đường thẳng y = −2x + 1 là?', ['−2', '2', 'a = 1', '1'], 0, 'Hệ số góc = a = −2.'),
  ]),

  M(22, 'Đồ thị hàm số bậc nhất — Vị trí tương đối', [
    Q('Đường thẳng y = ax + b cắt trục Oy tại?', ['(b; 0)', '(0; b)', '(a; 0)', '(0; a)'], 1, 'Thay x=0: y = b.'),
    Q('y = 2x − 4 cắt trục Ox tại điểm có hoành độ?', ['x = −2', '2', '4', '−2'], 1, 'Cho y=0: 2x=4 ⇒ x=2.'),
    Q('Hai đường thẳng y=ax+b và y=a′x+b′ song song khi?', ['a≠a′ và b=b′', 'a=a′ và b≠b′', 'a=a′ và b=b′', 'a·a′ = −1'], 1, 'Song song: cùng hệ số góc, khác tung độ gốc.'),
    Q('Hai đường thẳng trùng nhau khi?', ['a≠a′ và b=b′', 'a=a′ và b=b′', 'a≠a′ và b≠b′', 'a=a′ và b≠b′'], 1, 'Cùng a và cùng b.'),
    Q('Hai đường thẳng cắt nhau khi?', ['a=a′ và b≠b′', 'a=a′ và b=b′', 'a·a′=−1', 'a≠a′'], 3, 'Hệ số góc khác nhau ⇒ cắt nhau.'),
    Q('Hai đường thẳng y=2x+1 và y=2x−3 có quan hệ?', ['Song song', 'Cắt nhau', 'Trùng nhau', 'Vuông góc'], 0, 'Cùng a=2, khác b ⇒ song song.'),
  ]),

  M(23, 'Tam giác đồng dạng — Khái niệm', [
    Q('Hai tam giác đồng dạng khi nào?', ['Cùng chu vi', 'Các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ', 'Bằng nhau', 'Cùng diện tích'], 1, 'Định nghĩa: góc bằng + cạnh tỉ lệ.'),
    Q('Tỉ số đồng dạng k của △ABC ~ △A′B′C′ là?', ['AB/A′B′', '∠A/∠A′', 'A′B′/A′C′', 'AB·A′B′'], 0, 'k = tỉ số cạnh tương ứng.'),
    Q('Hai tam giác bằng nhau là trường hợp đặc biệt khi k = ?', ['1', '0', '2', 'k = 2'], 0, 'k=1: cạnh tương ứng bằng nhau → bằng nhau.'),
    Q('△ABC ~ △DEF, AB=4, DE=8. Tỉ số đồng dạng?', ['8', '2', '1/2', '4'], 2, 'k = AB/DE = 4/8 = 1/2.'),
    Q('△ABC ~ △DEF với k=2 và BC=6. EF = ?', ['8', '3', '12', '6'], 1, 'BC/EF = k ⇒ 6/EF = 2 ⇒ EF = 3.'),
    Q('Tỉ số diện tích của 2 tam giác đồng dạng bằng?', ['2k', 'k chia 2', '2k (gấp đôi)', 'k²'], 3, 'Tỉ số diện tích = bình phương tỉ số đồng dạng.'),
  ]),

  M(24, 'Các trường hợp đồng dạng của tam giác', [
    Q('Trường hợp đồng dạng cạnh-cạnh-cạnh viết tắt là?', ['cạnh huyền-cạnh góc vuông', 'c.g.c (cạnh-góc-cạnh)', 'c.c.c', 'g.g (góc-góc)'], 2, 'C.C.C: ba cạnh tương ứng tỉ lệ.'),
    Q('Trường hợp c.g.c yêu cầu?', ['1 cặp cạnh, 2 cặp góc', '3 cặp cạnh tỉ lệ', '3 cặp góc bằng nhau', '2 cặp cạnh tỉ lệ và góc xen giữa bằng nhau'], 3, 'Hai cạnh tỉ lệ + góc xen giữa bằng.'),
    Q('Trường hợp g.g yêu cầu?', ['2 cặp góc bằng', '2 cặp cạnh bằng', '1 cạnh + 2 góc', '3 cặp góc bằng'], 0, 'Hai góc bằng đủ để 2 tam giác đồng dạng.'),
    Q('Tam giác vuông đồng dạng theo cạnh huyền – cạnh góc vuông cần?', ['2 cạnh góc vuông bằng nhau', '3 góc bằng', 'Cạnh huyền và 1 góc nhọn', 'Cạnh huyền và 1 cạnh góc vuông tỉ lệ'], 3, 'Trường hợp đặc biệt cho tam giác vuông.'),
    Q('Cho △ABC vuông ở A, đường cao AH. Tam giác nào đồng dạng?', ['Cả hai tam giác trên', '△HAC và △ABC', '△HBA và △ABC', 'Không tam giác nào'], 0, 'AH chia tam giác lớn thành 2 tg đồng dạng với nó.'),
    Q('Hai tam giác đều có đồng dạng không?', ['Không, vì có thể khác cạnh', 'Có, luôn đồng dạng', 'Tuỳ trường hợp', 'Chỉ khi cùng cạnh'], 1, 'Mọi tam giác đều có 3 góc 60° ⇒ luôn đồng dạng.'),
  ]),

  M(25, 'Ứng dụng tam giác đồng dạng — Đo chiều cao', [
    Q('Cây cao bóng dài 9 m, cọc cao 1.5 m bóng 3 m (cùng thời điểm). Cây cao?', ['4.5 m', '6 m', '12 m', '15 m'], 0, 'Tỉ lệ: h/9 = 1.5/3 ⇒ h = 4.5 m.'),
    Q('Để đo chiều cao một toà nhà mà không leo, ta thường dùng?', ['Thước đo độ và compa', 'Tam giác đồng dạng (cọc + bóng)', 'Thước đo góc', 'Thước cuộn'], 1, 'Phương pháp bóng/đồng dạng phổ biến.'),
    Q('Tỉ số đồng dạng k = 3. Tỉ số chu vi 2 tam giác?', ['27', '3', '1', '9'], 1, 'Tỉ số chu vi = k.'),
    Q('Tỉ số đồng dạng k = 3. Tỉ số diện tích?', ['27', '6', '3', '9'], 3, 'k² = 9.'),
    Q('Ánh sáng mặt trời chiếu xuống đất tạo tia song song nên 2 tam giác (vật + bóng)?', ['Bằng nhau', 'Vuông góc', 'Đồng dạng', 'Không liên quan'], 2, 'Cùng góc ⇒ tam giác đồng dạng.'),
    Q('Một cây cao 5 m, bóng dài 4 m. Cùng lúc, tháp có bóng dài 24 m. Tháp cao?', ['20 m', '40 m', '30 m', '24 m'], 2, 'h/24 = 5/4 ⇒ h = 30 m.'),
  ]),

  M(26, 'Định lý Pytago — Ôn tập và mở rộng', [
    Q('Định lý Pytago: trong tam giác vuông, bình phương cạnh huyền bằng?', ['Tổng bình phương 2 cạnh góc vuông', 'Tích 2 cạnh góc vuông', 'Tổng 2 cạnh góc vuông', 'Hiệu bình phương 2 cạnh góc vuông'], 0, 'c² = a² + b².'),
    Q('Tam giác vuông có 2 cạnh góc vuông 3, 4. Cạnh huyền?', ['7', '5', '12', '6'], 1, '√(9+16) = √25 = 5.'),
    Q('Tam giác vuông có cạnh huyền 13, một cạnh góc vuông 5. Cạnh còn lại?', ['10', '7', '8', '12'], 3, '√(169−25) = √144 = 12.'),
    Q('Bộ ba số nào KHÔNG là Pytago?', ['(2,3,4)', '(5,12,13)', '(6,8,10)', '(3,4,5)'], 0, '4 ≠ √(4+9). Còn lại đều đúng.'),
    Q('Định lý đảo Pytago: nếu c² = a² + b² thì tam giác?', ['Tù tại đỉnh đối cạnh c', 'Vuông tại đỉnh đối cạnh c', 'Đều cạnh c', 'Cân tại đỉnh đối cạnh c'], 1, 'Đảo Pytago xác định góc vuông.'),
    Q('Đường chéo hình vuông cạnh a bằng?', ['a/√2', '2a²', 'a√2', '2a'], 2, 'Pytago: d = √(a²+a²) = a√2.'),
  ]),

  M(27, 'Hình lăng trụ đứng — Diện tích, thể tích', [
    Q('Hình lăng trụ đứng có mặt bên là?', ['Hình tam giác', 'Hình thang', 'Hình chữ nhật', 'Hình thoi'], 2, 'Mặt bên của lăng trụ đứng là HCN.'),
    Q('Hình hộp chữ nhật là lăng trụ đứng đáy?', ['Hình chữ nhật', 'Hình thoi', 'Hình tam giác', 'Hình tròn'], 0, 'Đáy là HCN.'),
    Q('Thể tích hình hộp chữ nhật dài 5, rộng 3, cao 4?', ['20', '12', '15', '60'], 3, 'V = 5·3·4 = 60.'),
    Q('Diện tích xung quanh lăng trụ đứng = ?', ['2 · diện tích đáy', 'Đường chéo · 4', 'Diện tích đáy · chiều cao', 'Chu vi đáy · chiều cao'], 3, 'Sxq = P_đáy · h.'),
    Q('Diện tích toàn phần lăng trụ đứng = ?', ['Sxq + 2·S_đáy', 'Sxq', '3·S_đáy', 'Sxq + S_đáy'], 0, 'Stp = Sxq + 2 đáy.'),
    Q('Thể tích lăng trụ đứng = ?', ['S_đáy · h', '(1/3)·S_đáy·h', 'Sxq · h', 'P_đáy · h'], 0, 'V = S_đáy · h.'),
  ]),

  M(28, 'Hình chóp đều', [
    Q('Hình chóp đều có đáy là?', ['Tam giác bất kì', 'Hình tròn', 'Hình thang', 'Đa giác đều'], 3, 'Đáy là đa giác đều.'),
    Q('Hình chóp tam giác đều có bao nhiêu mặt?', ['4', '3', '5', '6'], 0, '1 đáy + 3 mặt bên = 4 mặt.'),
    Q('Hình chóp tứ giác đều có bao nhiêu cạnh?', ['8', '12', '4', '6'], 0, '4 cạnh đáy + 4 cạnh bên = 8.'),
    Q('Mặt bên của hình chóp đều là?', ['Tam giác đều', 'Hình chữ nhật', 'Hình thang', 'Tam giác cân'], 3, 'Tam giác cân (vì các cạnh bên bằng nhau).'),
    Q('Diện tích xung quanh hình chóp đều = ?', ['Diện tích đáy · 4', '(1/2)·chu vi đáy · trung đoạn', 'Chu vi đáy · chiều cao', 'Chu vi đáy · trung đoạn'], 1, 'Sxq = (1/2)·P·d (d là trung đoạn).'),
    Q('Thể tích hình chóp = ?', ['(1/3)·S_đáy·h', '2·S_đáy·h', '(1/2)·S_đáy·h', 'S_đáy · h'], 0, 'V = (1/3)·S_đáy·h.'),
  ]),

  M(29, 'Thống kê — Bảng tần số, biểu đồ', [
    Q('Tần số của một giá trị trong dãy số liệu là?', ['Trung bình cộng', 'Giá trị lớn nhất', 'Số lần xuất hiện', 'Tổng các giá trị'], 2, 'Tần số = số lần xuất hiện.'),
    Q('Trong dãy 1,2,2,3,3,3,4: tần số của 3 là?', ['3', '2', '1', '4'], 0, '3 xuất hiện 3 lần.'),
    Q('Tổng các tần số bằng?', ['Số phần tử của mẫu', 'Trung bình', 'Số dấu hiệu khác nhau', 'Tổng các giá trị'], 0, 'Tổng tần số = N (cỡ mẫu).'),
    Q('Biểu đồ cột (cột thẳng đứng) dùng để biểu diễn?', ['Tỉ lệ phần trăm', 'Diện tích', 'Tần số của các giá trị rời rạc', 'Quan hệ hàm số'], 2, 'Biểu đồ cột phù hợp dữ liệu rời rạc.'),
    Q('Biểu đồ tròn dùng để biểu diễn?', ['Khoảng giá trị', 'Hàm số', 'Tỉ lệ phần trăm/cơ cấu', 'Tần số'], 2, 'Biểu đồ hình quạt thể hiện tỉ lệ.'),
    Q('Trung bình cộng của 4, 6, 8, 10 là?', ['7', '8', '7.5', '6'], 0, '(4+6+8+10)/4 = 28/4 = 7.'),
  ]),

  M(30, 'Số trung bình — Mốt — Trung vị', [
    Q('Mốt của dãy số liệu là?', ['Giá trị có tần số lớn nhất', 'Giá trị lớn nhất', 'Giá trị nhỏ nhất', 'Trung bình'], 0, 'Mốt = giá trị xuất hiện nhiều nhất.'),
    Q('Mốt của dãy 2,3,3,4,4,4,5 là?', ['2', '3', '5', '4'], 3, '4 xuất hiện 3 lần — nhiều nhất.'),
    Q('Trung vị của dãy đã sắp xếp 1,3,5,7,9 là?', ['3', '1', '5', '7'], 2, 'Phần tử ở giữa = 5.'),
    Q('Trung vị của dãy 2,4,6,8 (chẵn phần tử) là?', ['4', '5', '4.5', '6'], 1, '(4+6)/2 = 5.'),
    Q('Nếu dữ liệu lệch nhiều, đại lượng nào phản ánh tốt hơn?', ['Tổng tất cả giá trị', 'Trung bình', 'Trung vị', 'Mốt (giá trị hay gặp)'], 2, 'Trung vị ít bị ảnh hưởng bởi giá trị bất thường.'),
    Q('Số trung bình của 5, 10, 15 là?', ['15', '5', '10', '30'], 2, '(5+10+15)/3 = 10.'),
  ]),

  M(31, 'Xác suất của biến cố — Khái niệm', [
    Q('Xác suất của một biến cố là số nằm trong khoảng?', ['[−1; 1]', '[0; 1]', '(0; ∞)', '[0; 100]'], 1, '0 ≤ P ≤ 1.'),
    Q('Xác suất của biến cố chắc chắn?', ['1', '0', '0.5', '100'], 0, 'Biến cố chắc chắn có P = 1.'),
    Q('Xác suất của biến cố không thể?', ['1', '−0.5', '0', '0.5'], 2, 'P = 0.'),
    Q('Tung 1 đồng xu cân đối. Xác suất xuất hiện mặt sấp?', ['1', '1/3', '1/2', '1/4'], 2, '1 trong 2 khả năng đồng khả năng.'),
    Q('Gieo 1 con xúc xắc 6 mặt. P(ra mặt 6)?', ['1/3', '1/2', '6', '1/6'], 3, '1 trong 6 khả năng.'),
    Q('Gieo xúc xắc. P(ra số chẵn) = ?', ['1/6', '2/3', '1/2', '1/3'], 2, '3 mặt chẵn / 6 mặt = 1/2.'),
  ]),

  M(32, 'Phương trình tích — Phương trình chứa ẩn ở mẫu', [
    Q('Giải (x−2)(x+3) = 0?', ['x=2 và x=3', 'x=2 hoặc x=−3', 'x=0', 'x=−2 hoặc x=3'], 1, 'A·B=0 ⇔ A=0 hoặc B=0.'),
    Q('Phương trình (2x−4)(x+1)=0 có nghiệm?', ['x=2; x=−1', 'x=−2; x=1', 'x=4; x=−1', 'x=0; x=4'], 0, '2x−4=0 ⇒ x=2; x+1=0 ⇒ x=−1.'),
    Q('Trước khi giải PT chứa ẩn ở mẫu, cần làm gì?', ['Tìm ĐKXĐ', 'Khử mẫu', 'Quy đồng', 'Tất cả phương án trên'], 3, 'Đặt ĐKXĐ → quy đồng → khử mẫu → giải → đối chiếu ĐK.'),
    Q('ĐKXĐ của PT 1/(x−2) = 3 là?', ['x > 0', 'x ≠ −2', 'x ≠ 2', 'x ≠ 0'], 2, 'Mẫu khác 0: x − 2 ≠ 0.'),
    Q('Giải 1/(x−1) = 2 (x≠1)?', ['x = 1.5', 'x = 3', 'x = 0.5', 'x = 2'], 0, '1 = 2(x−1) ⇒ x = 3/2 = 1.5.'),
    Q('PT (x−1)/(x−1) = 1 có nghiệm?', ['Mọi x ∈ R', 'Vô nghiệm', 'x = 1', 'x ≠ 1'], 3, 'Rút gọn 1=1 đúng, nhưng x≠1 theo ĐKXĐ.'),
  ]),

  M(33, 'Ôn tập đại số học kì II', [
    Q('Giải 3(x−2) = 6?', ['x=6', 'x=2', 'x=4', 'x=0'], 2, '3x−6=6 ⇒ x=4.'),
    Q('Giải bpt 2x−4 > 0?', ['x>2', 'x≥2', 'x=2', 'x<2'], 0, '2x>4 ⇒ x>2.'),
    Q('Hàm y=−x+3, hệ số góc = ?', ['1', '3', 'a = 3', '−1'], 3, 'Hệ số góc = a = −1.'),
    Q('Đồ thị y=−x+3 cắt Oy tại?', ['(0;3)', '(3;0)', '(0;−3)', '(−3;0)'], 0, 'x=0 ⇒ y=3.'),
    Q('Giải PT (x−5)(x+2)=0?', ['x=0', 'x=−5; x=2', 'x=5; x=2', 'x=5; x=−2'], 3, 'PT tích.'),
    Q('Rút gọn (x²−25)/(x+5) (x≠−5)?', ['x²−5', 'x−5', '5−x', 'x+5'], 1, '(x−5)(x+5)/(x+5) = x−5.'),
  ]),

  M(34, 'Ôn tập hình học học kì II', [
    Q('Hai tam giác đồng dạng có tỉ số cạnh 1:3. Tỉ số diện tích?', ['1:9', '1:6', '1:3', '1:27'], 0, 'Bình phương tỉ số = 1:9.'),
    Q('Tam giác vuông cạnh góc vuông 6 và 8. Cạnh huyền?', ['12', '14', '48', '10'], 3, '√(36+64) = 10.'),
    Q('Thể tích hộp chữ nhật 4×5×6 = ?', ['60', '90', '120', '24'], 2, '4·5·6 = 120.'),
    Q('Diện tích xq lăng trụ tam giác đều cạnh đáy 4, cao 10?', ['40', '60', '120', '80'], 2, 'Sxq = P·h = (3·4)·10 = 120.'),
    Q('Hình chóp tứ giác đều có mấy mặt bên?', ['3', '5', '4', '6'], 2, '4 mặt bên + 1 đáy = 5 mặt; mặt BÊN là 4.'),
    Q('Đường trung bình tam giác = ?', ['Đoạn vuông góc với cạnh', 'Đường cao', 'Đường phân giác', 'Đoạn nối 2 trung điểm hai cạnh, song song cạnh thứ 3 và bằng nửa cạnh đó'], 3, 'Định nghĩa đường trung bình.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Khai triển (2x+3)² = ?', ['4x²+12x+9', '4x²+6x+9', '2x²+12x+9', '4x²+9'], 0, '4x² + 2·2x·3 + 9.'),
    Q('Phân tích x²−2x+1 = ?', ['(x−1)²', '(x−2)(x+1)', '(x−1)(x+1)', '(x+1)²'], 0, 'Bình phương của hiệu.'),
    Q('Nghiệm của 4x+8=0?', ['x=8', 'x=−8', 'x=−2', 'x=2'], 2, '4x=−8 ⇒ x=−2.'),
    Q('y=3x đồng biến hay nghịch biến?', ['Nghịch biến', 'Đồng biến', 'Hằng số', 'Không xác định'], 1, 'a=3>0.'),
    Q('Tam giác vuông cân có hai góc nhọn bằng?', ['60°', '90°', '45°', '30°'], 2, 'Hai góc nhọn bằng nhau và tổng 90° ⇒ mỗi góc 45°.'),
    Q('Gieo xúc xắc 6 mặt: P(số lẻ) = ?', ['1/3', '2/3', '1/6', '1/2'], 3, '3 mặt lẻ / 6 = 1/2.'),
  ]),
];

export const S8TOAN_SCENARIOS = indexBy(S8TOAN_WEEKS);
