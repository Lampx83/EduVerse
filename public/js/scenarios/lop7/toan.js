// ============================================================
// Lớp 7 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám chương trình GDPT 2018 (KNTT/CTST/Cánh Diều).
// ID prefix: "S7TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7TOAN', 'toan', n, title, qs, opts);

export const S7TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Tập hợp các số hữu tỉ Q', [
    Q('Số hữu tỉ là số có dạng?', ['a/b với a,b ∈ Z, b ≠ 0', 'a/b với a,b ∈ N', 'Mọi số thập phân', 'Chỉ là số nguyên'], 0, 'Định nghĩa: a/b với a,b nguyên, b ≠ 0.'),
    Q('Trong các số sau, số nào KHÔNG phải số hữu tỉ?', ['3', '−1/2', '0,75', '√2'], 3, '√2 là số vô tỉ (không biểu diễn được dưới dạng a/b).'),
    Q('Số 0 thuộc tập hợp nào?', ['Chỉ N', 'Chỉ Z', 'Cả N, Z, Q', 'Không thuộc Q'], 2, '0 ∈ N ⊂ Z ⊂ Q.'),
    Q('Phân số nào biểu diễn cùng một số hữu tỉ với 2/3?', ['4/9', '4/6', '3/2', '6/8'], 1, '2·6 = 3·4 ⇒ 2/3 = 4/6.'),
    Q('Trên trục số, số hữu tỉ −1/2 nằm ở đâu?', ['Bên phải số 0', 'Bên trái số 0', 'Trùng với 0', 'Trùng với −1'], 1, 'Mọi số âm nằm bên trái số 0.'),
    Q('So sánh: −3/4 và −2/4?', ['−3/4 > −2/4', '−3/4 < −2/4', '−3/4 = −2/4', 'Không so sánh được'], 1, 'Cùng mẫu dương, tử −3 < −2 ⇒ −3/4 < −2/4.'),
  ]),

  M(2, 'Cộng, trừ số hữu tỉ', [
    Q('1/2 + 1/3 = ?', ['2/5', '5/6', '1/6', '2/6'], 1, 'Quy đồng: 3/6 + 2/6 = 5/6.'),
    Q('(−2/5) + 3/5 = ?', ['1/5', '−1/5', '5/5', '−5/5'], 0, 'Cùng mẫu: (−2+3)/5 = 1/5.'),
    Q('3/4 − 1/2 = ?', ['1/4', '2/2', '1/2', '2/6'], 0, '3/4 − 2/4 = 1/4.'),
    Q('Số đối của 5/7 là?', ['−5/7', '7/5', '5/−7', '−7/5'], 0, 'Số đối của a là −a.'),
    Q('Quy tắc dấu ngoặc: a − (b − c) = ?', ['a − b − c', 'a − b + c', 'a + b − c', 'a + b + c'], 1, 'Bỏ ngoặc có dấu trừ phía trước, đổi dấu các hạng tử bên trong.'),
    Q('(−1/3) − (−1/6) = ?', ['−1/6', '−1/2', '1/6', '1/2'], 0, '−2/6 + 1/6 = −1/6.'),
  ]),

  M(3, 'Nhân, chia số hữu tỉ', [
    Q('(2/3) · (3/4) = ?', ['1/2', '6/7', '5/12', '2/4'], 0, 'Nhân tử với tử, mẫu với mẫu, rút gọn: 6/12 = 1/2.'),
    Q('(−3/5) · (10/9) = ?', ['−2/3', '2/3', '−30/45', '−3/45'], 0, 'Rút gọn rồi nhân: (−3·10)/(5·9) = −30/45 = −2/3.'),
    Q('(2/3) : (4/9) = ?', ['8/27', '3/2', '2/27', '6/4'], 1, 'Chia là nhân nghịch đảo: (2/3)·(9/4) = 18/12 = 3/2.'),
    Q('Số nghịch đảo của −7/4 là?', ['7/4', '−4/7', '4/7', '−7/4'], 1, 'Nghịch đảo của a/b là b/a, giữ nguyên dấu.'),
    Q('(−1/2) · (−1/3) = ?', ['1/6', '−1/6', '1/5', '−5/6'], 0, 'Tích hai số âm là số dương.'),
    Q('Tính 0 : (−5/8) = ?', ['0', 'Không xác định', '−5/8', '1'], 0, '0 chia cho số khác 0 luôn bằng 0.'),
  ]),

  M(4, 'Luỹ thừa của số hữu tỉ', [
    Q('(2/3)^2 = ?', ['4/9', '4/6', '2/9', '4/3'], 0, '(a/b)^n = a^n/b^n.'),
    Q('(−1/2)^3 = ?', ['1/8', '−1/8', '1/6', '−1/6'], 1, '(−1)^3 = −1; 2^3 = 8 ⇒ −1/8.'),
    Q('a^m · a^n = ?', ['a^(m+n)', 'a^(m−n)', 'a^(m·n)', '2a^m'], 0, 'Nhân hai luỹ thừa cùng cơ số: cộng số mũ.'),
    Q('a^m : a^n (a ≠ 0) = ?', ['a^(m+n)', 'a^(m−n)', 'a^(m·n)', 'a^(n−m)'], 1, 'Chia hai luỹ thừa cùng cơ số: trừ số mũ.'),
    Q('(a^m)^n = ?', ['a^(m+n)', 'a^(m·n)', 'a^(m−n)', 'a^(m/n)'], 1, 'Luỹ thừa của luỹ thừa: nhân số mũ.'),
    Q('Quy ước a^0 (a ≠ 0) = ?', ['0', '1', 'a', 'Không xác định'], 1, 'Mọi a ≠ 0 đều có a^0 = 1.'),
  ]),

  M(5, 'Thứ tự thực hiện phép tính — Quy tắc dấu ngoặc', [
    Q('Tính 2 + 3 · (1/2) = ?', ['5/2', '7/2', '5', '3'], 1, '3·(1/2)=3/2; 2 + 3/2 = 7/2.'),
    Q('Tính (1/2 + 1/3) · 6 = ?', ['5', '6', '4', '3'], 0, '5/6 · 6 = 5.'),
    Q('Tính 1 − (1/2 − 1/4) = ?', ['3/4', '1/4', '1/2', '5/4'], 0, '1/2 − 1/4 = 1/4; 1 − 1/4 = 3/4.'),
    Q('Thứ tự ưu tiên cao nhất là?', ['Cộng, trừ', 'Nhân, chia', 'Luỹ thừa', 'Trái sang phải'], 2, 'Luỹ thừa → nhân/chia → cộng/trừ.'),
    Q('Tính (−2)^2 + (−3) · 2 = ?', ['10', '−2', '−10', '2'], 2, 'Bỏ qua dấu — sai. 4 + (−6) = −2.'),
    Q('Bỏ ngoặc đúng: −(a − b + c) = ?', ['−a − b + c', '−a + b − c', 'a − b + c', '−a − b − c'], 1, 'Đổi dấu tất cả các hạng tử.'),
  ]),

  M(6, 'Giá trị tuyệt đối của số hữu tỉ', [
    Q('|−3/4| = ?', ['3/4', '−3/4', '0', '4/3'], 0, '|a| ≥ 0 với mọi a.'),
    Q('|0| = ?', ['0', '1', '−1', 'Không có'], 0, 'Quy ước |0| = 0.'),
    Q('|a| = a khi?', ['a ≥ 0', 'a ≤ 0', 'a < 0', 'Mọi a'], 0, '|a| = a nếu a ≥ 0; |a| = −a nếu a < 0.'),
    Q('Tìm x biết |x| = 5?', ['x = 5', 'x = −5', 'x = 5 hoặc x = −5', 'Không có x'], 2, 'Hai số đối nhau có cùng giá trị tuyệt đối.'),
    Q('|−2,5| + |−1,5| = ?', ['1', '4', '−4', '0'], 1, '2,5 + 1,5 = 4.'),
    Q('Mệnh đề nào ĐÚNG?', ['|a + b| = |a| + |b|', '|a · b| = |a| · |b|', '|a/b| = a/b', '|a| < 0'], 1, '|a·b| = |a|·|b| luôn đúng.'),
  ]),

  M(7, 'Làm tròn số — Sai số', [
    Q('Làm tròn 3,1415 đến chữ số thập phân thứ hai?', ['3,14', '3,15', '3,1', '3,141'], 0, 'Chữ số thứ ba sau dấu phẩy là 1 < 5 nên làm tròn xuống.'),
    Q('Làm tròn 27,486 đến chữ số thập phân thứ nhất?', ['27,4', '27,5', '27,49', '28'], 1, 'Chữ số thứ hai là 8 ≥ 5 ⇒ tăng lên: 27,5.'),
    Q('Làm tròn 1 234 đến hàng trăm?', ['1 200', '1 230', '1 300', '1 240'], 0, 'Chữ số hàng chục là 3 < 5 ⇒ 1 200.'),
    Q('Làm tròn 0,0496 đến chữ số thập phân thứ ba?', ['0,049', '0,050', '0,05', '0,04'], 1, 'Chữ số thứ tư là 6 ≥ 5 ⇒ tăng: 0,050.'),
    Q('Làm tròn 6,5 (làm tròn đến hàng đơn vị) thường được?', ['6', '7', '5', '8'], 1, 'Theo quy ước "5 trở lên thì tăng" ⇒ 7.'),
    Q('Sai số tuyệt đối của một số làm tròn là?', ['|giá trị thật − giá trị làm tròn|', 'Luôn bằng 0', 'Số ngẫu nhiên', 'Số luôn dương'], 0, 'Sai số = |a − a*|.'),
  ]),

  M(8, 'Số vô tỉ — Căn bậc hai số học', [
    Q('Căn bậc hai số học của 25 là?', ['5', '−5', '±5', '12,5'], 0, '√25 = 5 (lấy giá trị không âm).'),
    Q('√81 = ?', ['8', '9', '−9', '40,5'], 1, '9·9 = 81.'),
    Q('Trong các số: 2; 1/3; √2; 0,75 — số nào vô tỉ?', ['2', '1/3', '√2', '0,75'], 2, '√2 không viết được dưới dạng a/b.'),
    Q('√(a^2) (a ≥ 0) = ?', ['a', '−a', '|a|', 'a^2'], 0, 'Với a ≥ 0 thì √(a^2) = a.'),
    Q('√0 = ?', ['0', '1', 'Không xác định', '−0'], 0, 'Quy ước √0 = 0.'),
    Q('√16 + √9 = ?', ['5', '7', '25', '12'], 1, '4 + 3 = 7.'),
  ]),

  M(9, 'Tập hợp số thực R', [
    Q('Tập số thực R gồm?', ['Chỉ số hữu tỉ', 'Chỉ số vô tỉ', 'Hữu tỉ và vô tỉ', 'Chỉ số nguyên'], 2, 'R = Q ∪ I (I là tập vô tỉ).'),
    Q('Quan hệ bao hàm đúng là?', ['N ⊂ Z ⊂ Q ⊂ R', 'R ⊂ Q ⊂ Z ⊂ N', 'Q ⊂ R ⊂ Z', 'N = Z = Q = R'], 0, 'Mỗi tập số là tập con của tập rộng hơn.'),
    Q('Số nào KHÔNG thuộc R?', ['π', '√3', '0', 'Không có'], 3, 'Mọi số π, √3, 0 đều ∈ R.'),
    Q('Trên trục số, số thực được biểu diễn?', ['Chỉ vài điểm rời rạc', 'Bằng một điểm duy nhất với mỗi số', 'Bằng một đoạn thẳng', 'Không biểu diễn được'], 1, 'Mỗi số thực ↔ một điểm trên trục số.'),
    Q('|a| với a ∈ R có tính chất?', ['Luôn âm', 'Luôn dương', 'Luôn không âm', 'Luôn bằng a'], 2, '|a| ≥ 0 ∀a ∈ R.'),
    Q('Số đối của √5 là?', ['√5', '−√5', '1/√5', '5'], 1, 'Số đối của a là −a.'),
  ]),

  M(10, 'Tỉ lệ thức', [
    Q('Tỉ lệ thức a/b = c/d (b, d ≠ 0) tương đương với?', ['a + d = b + c', 'a·d = b·c', 'a − b = c − d', 'a·b = c·d'], 1, 'Quy tắc nhân chéo.'),
    Q('Cho 2/3 = x/12. Tìm x?', ['6', '8', '9', '18'], 1, '2·12 = 3x ⇒ x = 8.'),
    Q('Nếu a/b = c/d thì a/c = ?', ['b/d', 'd/b', 'a/d', 'c/b'], 0, 'Hoán đổi trung tỉ: a/c = b/d.'),
    Q('Tính chất dãy tỉ số bằng nhau: a/b = c/d = (a+c)/?', ['b+d', 'b−d', 'b·d', 'b/d'], 0, '(a+c)/(b+d) = a/b (khi b+d ≠ 0).'),
    Q('Cho 3/x = 5/15. Tìm x?', ['9', '5', '15', '3'], 0, '3·15 = 5x ⇒ x = 9.'),
    Q('Trong tỉ lệ thức a/b = c/d, b và c gọi là?', ['Ngoại tỉ', 'Trung tỉ', 'Số đối', 'Mẫu chung'], 1, 'a, d là ngoại tỉ; b, c là trung tỉ.'),
  ]),

  M(11, 'Đại lượng tỉ lệ thuận', [
    Q('Hai đại lượng y, x tỉ lệ thuận khi?', ['y = k/x', 'y = kx (k ≠ 0)', 'y = x + k', 'y = x − k'], 1, 'Định nghĩa: y = kx, k là hệ số tỉ lệ.'),
    Q('Nếu y = 3x thì khi x = 5, y = ?', ['8', '15', '2', '3/5'], 1, 'y = 3·5 = 15.'),
    Q('Mua 3 kg gạo hết 60 nghìn. Hỏi 5 kg cùng loại hết bao nhiêu?', ['80 nghìn', '100 nghìn', '120 nghìn', '90 nghìn'], 1, 'Tỉ lệ thuận: 60/3 = 20 nghìn/kg ⇒ 5·20 = 100 nghìn.'),
    Q('Nếu y tỉ lệ thuận với x theo hệ số 2/3, viết công thức?', ['y = 2/3 + x', 'y = (2/3)x', 'y = x/(2/3)', 'x = 2y/3'], 1, 'y = (2/3)x.'),
    Q('Đồ thị hàm số y = kx (k ≠ 0) là?', ['Đường thẳng đi qua gốc O', 'Parabol', 'Đường cong', 'Đường tròn'], 0, 'Đồ thị y = kx luôn qua O(0;0).'),
    Q('Nếu y₁/x₁ = y₂/x₂ thì x, y có quan hệ?', ['Tỉ lệ thuận', 'Tỉ lệ nghịch', 'Không liên hệ', 'Bằng nhau'], 0, 'Đó là dấu hiệu nhận biết tỉ lệ thuận.'),
  ]),

  M(12, 'Đại lượng tỉ lệ nghịch', [
    Q('Hai đại lượng y, x tỉ lệ nghịch khi?', ['y = kx', 'y = k/x (k ≠ 0)', 'y = x + k', 'y − x = k'], 1, 'Định nghĩa: x·y = k hằng số ⇒ y = k/x.'),
    Q('Nếu xy = 24 và x = 4 thì y = ?', ['6', '8', '20', '28'], 0, 'y = 24/4 = 6.'),
    Q('4 người làm xong công việc trong 6 ngày. Hỏi 8 người (cùng năng suất) làm trong?', ['3 ngày', '4 ngày', '12 ngày', '2 ngày'], 0, 'Tỉ lệ nghịch: 4·6 = 8·t ⇒ t = 3.'),
    Q('Đặc trưng của tỉ lệ nghịch là?', ['x + y không đổi', 'x · y không đổi', 'x/y không đổi', 'x − y không đổi'], 1, 'x·y = k.'),
    Q('Nếu x tăng 2 lần thì y (tỉ lệ nghịch) sẽ?', ['Tăng 2 lần', 'Giảm 2 lần', 'Không đổi', 'Tăng 4 lần'], 1, 'y = k/x ⇒ x↑2 thì y↓2.'),
    Q('Đồ thị y = k/x (k > 0) là?', ['Đường thẳng', 'Hypebol nằm ở góc I và III', 'Parabol', 'Đường tròn'], 1, 'Hypebol hai nhánh ở góc phần tư I và III (khi k > 0).'),
  ]),

  M(13, 'Biểu đồ — Thu thập và biểu diễn dữ liệu', [
    Q('Biểu đồ hình cột thường dùng để?', ['So sánh số liệu giữa các đối tượng', 'Hiển thị tỉ lệ phần trăm', 'Hiển thị xu hướng theo thời gian', 'Vẽ hàm số'], 0, 'Cột so sánh độ lớn giữa các nhóm.'),
    Q('Biểu đồ hình quạt thường biểu diễn?', ['Tỉ lệ phần trăm của các phần', 'Xu hướng thời gian', 'Khoảng cách', 'Tốc độ'], 0, 'Mỗi quạt tương ứng một tỉ lệ trong tổng thể.'),
    Q('Biểu đồ đoạn thẳng thích hợp khi?', ['So sánh số lượng tĩnh', 'Theo dõi biến động theo thời gian', 'Tính trung bình', 'Biểu diễn tập hợp'], 1, 'Đoạn thẳng cho thấy xu hướng tăng/giảm.'),
    Q('Tổng các phần trăm trong biểu đồ quạt phải bằng?', ['50%', '100%', '180%', '360%'], 1, 'Tổng tỉ lệ phần trăm các phần = 100%.'),
    Q('Tổng số đo các quạt trong biểu đồ quạt bằng?', ['90°', '180°', '270°', '360°'], 3, 'Cả hình tròn ứng 360°.'),
    Q('Khi đọc biểu đồ, bước đầu tiên cần làm gì?', ['Tính trung bình', 'Đọc tiêu đề và đơn vị', 'Vẽ lại biểu đồ', 'Sắp xếp lại số liệu'], 1, 'Hiểu tiêu đề, trục, đơn vị trước khi phân tích.'),
  ]),

  M(14, 'Phân tích và xử lí dữ liệu', [
    Q('Trung bình cộng của dãy 3; 5; 7 là?', ['5', '15', '7', '3'], 0, '(3+5+7)/3 = 5.'),
    Q('Mốt của dãy 2; 3; 3; 4; 5 là?', ['2', '3', '4', '5'], 1, 'Mốt là giá trị xuất hiện nhiều nhất.'),
    Q('Trong dãy 1; 2; 2; 3; 4 — số liệu xuất hiện nhiều nhất là?', ['1', '2', '3', '4'], 1, 'Số 2 xuất hiện 2 lần.'),
    Q('Trung bình cộng dùng để?', ['Đại diện cho dãy số liệu', 'Tìm giá trị nhỏ nhất', 'Tìm giá trị lớn nhất', 'Sắp xếp dữ liệu'], 0, 'Là đặc trưng đo lường trung tâm.'),
    Q('Số liệu nào sau có tính đại diện kém nếu xuất hiện một giá trị quá lớn?', ['Mốt', 'Trung bình cộng', 'Trung vị', 'Tổng'], 1, 'Trung bình bị "kéo" bởi giá trị bất thường.'),
    Q('Đặc trưng nào CHỈ phụ thuộc thứ tự dữ liệu, không phụ thuộc giá trị cụ thể?', ['Trung bình', 'Mốt', 'Trung vị', 'Tổng'], 2, 'Trung vị là giá trị giữa khi sắp xếp.'),
  ]),

  M(15, 'Góc ở vị trí đặc biệt — Tia phân giác', [
    Q('Hai góc kề bù có tổng số đo bằng?', ['90°', '180°', '270°', '360°'], 1, 'Kề bù ⇔ tổng = 180°.'),
    Q('Hai góc đối đỉnh thì?', ['Bù nhau', 'Phụ nhau', 'Bằng nhau', 'Vuông góc'], 2, 'Hai góc đối đỉnh luôn bằng nhau.'),
    Q('Hai góc phụ nhau có tổng?', ['90°', '180°', '360°', '45°'], 0, 'Phụ ⇔ tổng = 90°.'),
    Q('Tia phân giác của một góc chia góc đó thành?', ['Hai góc bằng nhau', 'Hai góc bù nhau', 'Hai góc khác nhau', 'Một góc vuông'], 0, 'Định nghĩa tia phân giác.'),
    Q('Nếu ∠AOB = 60° và Ot là tia phân giác thì ∠AOt = ?', ['30°', '60°', '90°', '120°'], 0, '60°/2 = 30°.'),
    Q('Hai góc kề nhau là hai góc có?', ['Một cạnh chung và không trùng nhau ở phần trong', 'Đỉnh khác nhau', 'Bằng nhau', 'Bù nhau'], 0, 'Có chung đỉnh, một cạnh chung, hai cạnh còn lại nằm hai nửa mặt phẳng đối nhau.'),
  ]),

  M(16, 'Hai đường thẳng song song — Tiên đề Ơ-clit', [
    Q('Hai đường thẳng song song khi?', ['Cắt nhau', 'Không có điểm chung', 'Trùng nhau', 'Vuông góc'], 1, 'Song song = không có điểm chung.'),
    Q('Khi một đường thẳng cắt hai đường thẳng song song, hai góc đồng vị?', ['Bù nhau', 'Bằng nhau', 'Phụ nhau', 'Vuông nhau'], 1, 'Dấu hiệu nhận biết song song.'),
    Q('Hai góc so le trong khi hai đường thẳng song song thì?', ['Bằng nhau', 'Bù nhau', 'Phụ nhau', 'Khác nhau'], 0, 'Tính chất song song.'),
    Q('Tiên đề Ơ-clit nói rằng qua một điểm ngoài đường thẳng cho trước có bao nhiêu đường song song với nó?', ['Không có', 'Đúng một', 'Hai', 'Vô số'], 1, 'Tiên đề Euclid: chỉ duy nhất một.'),
    Q('Hai góc trong cùng phía (cắt bởi cát tuyến) trên hai đường thẳng song song có tổng?', ['90°', '180°', '270°', '360°'], 1, 'Tổng hai góc trong cùng phía = 180°.'),
    Q('Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì?', ['Cắt nhau', 'Song song với nhau', 'Trùng nhau', 'Cùng đi qua một điểm'], 1, 'Là một hệ quả quan trọng.'),
  ]),

  M(17, 'Tổng các góc trong tam giác', [
    Q('Tổng ba góc trong một tam giác bằng?', ['90°', '180°', '270°', '360°'], 1, 'Định lý cơ bản: ∠A + ∠B + ∠C = 180°.'),
    Q('Tam giác có hai góc 50° và 60°, góc thứ ba bằng?', ['60°', '70°', '80°', '110°'], 1, '180° − (50° + 60°) = 70°.'),
    Q('Tam giác vuông có một góc bằng?', ['45°', '60°', '90°', '180°'], 2, 'Có đúng một góc 90°.'),
    Q('Trong tam giác vuông, tổng hai góc nhọn bằng?', ['45°', '60°', '90°', '180°'], 2, '180° − 90° = 90°.'),
    Q('Góc ngoài của tam giác bằng?', ['Tổng hai góc trong không kề với nó', 'Hiệu hai góc trong kề', 'Tổng ba góc trong', 'Một nửa góc trong tương ứng'], 0, 'Định lý góc ngoài.'),
    Q('Tam giác có ba góc đều bằng nhau thì mỗi góc bằng?', ['45°', '60°', '90°', '120°'], 1, '180°/3 = 60°.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('(−1/2) + 3/4 = ?', ['1/4', '−1/4', '5/4', '−5/4'], 0, '−2/4 + 3/4 = 1/4.'),
    Q('(2/3)^3 = ?', ['8/9', '8/27', '6/9', '2/27'], 1, '2^3/3^3 = 8/27.'),
    Q('√144 = ?', ['11', '12', '14', '144/2'], 1, '12·12 = 144.'),
    Q('Tìm x: 3/x = 9/12?', ['1', '3', '4', '6'], 2, '3·12 = 9x ⇒ x = 4.'),
    Q('|−7,5| · |0,2| = ?', ['1,5', '−1,5', '7,7', '15'], 0, '7,5·0,2 = 1,5.'),
    Q('Một tam giác có hai góc 35° và 95°, góc còn lại?', ['40°', '50°', '60°', '70°'], 1, '180 − 130 = 50°.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hai tam giác bằng nhau — Trường hợp c-c-c', [
    Q('Hai tam giác bằng nhau thì có?', ['Cùng diện tích, khác hình dạng', 'Các cặp cạnh và cặp góc tương ứng bằng nhau', 'Chỉ cạnh bằng nhau', 'Chỉ góc bằng nhau'], 1, 'Định nghĩa hai tam giác bằng nhau.'),
    Q('Trường hợp c-c-c có nghĩa?', ['Cạnh — cạnh — cạnh', 'Cạnh — góc — cạnh', 'Góc — cạnh — góc', 'Cạnh huyền — cạnh góc vuông'], 0, 'Ba cặp cạnh tương ứng bằng nhau.'),
    Q('Cho ΔABC = ΔDEF (theo thứ tự), suy ra AB = ?', ['DE', 'EF', 'DF', 'AC'], 0, 'Cặp cạnh tương ứng AB ↔ DE.'),
    Q('Hai tam giác đều cạnh bằng nhau thì?', ['Bằng nhau theo c-c-c', 'Không bằng', 'Đồng dạng nhưng không bằng', 'Tuỳ kích thước'], 0, 'Ba cạnh bằng nhau ⇒ bằng nhau.'),
    Q('Trong ΔABC = ΔMNP, ∠A bằng góc nào?', ['∠M', '∠N', '∠P', '∠B'], 0, 'Đỉnh tương ứng: A ↔ M.'),
    Q('Nếu ΔABC = ΔABD thì cặp cạnh nào CHẮC CHẮN bằng?', ['BC và BD', 'AB và AB', 'AC và AD', 'Cả AC và AD, BC và BD'], 3, 'AB chung; AC = AD và BC = BD theo thứ tự đỉnh.'),
  ]),

  M(20, 'Trường hợp c-g-c và g-c-g', [
    Q('Trường hợp c-g-c là?', ['Cạnh — góc — cạnh', 'Cạnh — cạnh — góc', 'Góc — góc — cạnh', 'Cạnh huyền — góc nhọn'], 0, 'Hai cạnh và góc xen giữa.'),
    Q('Trường hợp g-c-g là?', ['Góc — cạnh — góc', 'Góc — góc — cạnh', 'Cạnh — góc — cạnh', 'Góc — góc — góc'], 0, 'Một cạnh và hai góc kề cạnh đó.'),
    Q('Trường hợp nào KHÔNG đủ để chứng minh hai tam giác bằng nhau?', ['c-c-c', 'c-g-c', 'g-g-g', 'g-c-g'], 2, 'g-g-g chỉ cho đồng dạng, không bằng nhau.'),
    Q('ΔABC và ΔA′B′C′ có AB = A′B′; ∠A = ∠A′; AC = A′C′. Hai tam giác bằng nhau theo trường hợp?', ['c-c-c', 'c-g-c', 'g-c-g', 'Không đủ'], 1, 'Hai cạnh kề và góc xen giữa: c-g-c.'),
    Q('Cho tam giác cân tại A, tia phân giác AM của ∠A. ΔABM và ΔACM bằng nhau theo?', ['c-c-c', 'c-g-c', 'g-c-g', 'Không đủ'], 1, 'AB = AC; ∠BAM = ∠CAM; AM chung ⇒ c-g-c.'),
    Q('Trường hợp g-c-g cần dữ kiện?', ['Hai góc và cạnh kề chung của chúng', 'Ba góc', 'Hai cạnh và một góc bất kì', 'Hai cạnh và góc đối'], 0, 'Cạnh nằm giữa (kề) hai góc.'),
  ]),

  M(21, 'Tam giác cân — Tam giác đều', [
    Q('Tam giác cân là tam giác có?', ['Ba cạnh bằng nhau', 'Hai cạnh bằng nhau', 'Hai góc bù nhau', 'Một góc vuông'], 1, 'Hai cạnh bên bằng nhau.'),
    Q('Trong tam giác cân, hai góc ở đáy?', ['Bằng nhau', 'Bù nhau', 'Phụ nhau', 'Khác nhau'], 0, 'Định lí cơ bản.'),
    Q('Tam giác đều có?', ['Ba cạnh bằng nhau và ba góc 60°', 'Hai cạnh bằng', 'Một góc 90°', 'Một góc 120°'], 0, 'Đều ⇒ cân + ba góc bằng nhau = 60°.'),
    Q('Tam giác cân có một góc đáy 50°, góc đỉnh?', ['80°', '50°', '40°', '100°'], 0, '180° − 2·50° = 80°.'),
    Q('Tam giác cân có góc đỉnh 80°, mỗi góc đáy?', ['40°', '50°', '60°', '80°'], 1, '(180° − 80°)/2 = 50°.'),
    Q('Tam giác có hai góc 60° thì là?', ['Cân', 'Đều', 'Vuông', 'Tù'], 1, 'Hai góc 60° ⇒ góc thứ ba 60° ⇒ tam giác đều.'),
  ]),

  M(22, 'Nghỉ Tết — Bài tập về nhà nhẹ', [
    Q('Ôn lại: (1/2)·(2/3) = ?', ['1/3', '2/5', '1/6', '3/4'], 0, '2/6 = 1/3.'),
    Q('Ôn lại: |−2/5| = ?', ['2/5', '−2/5', '5/2', '0'], 0, '|a| ≥ 0.'),
    Q('Ôn lại: tổng ba góc tam giác?', ['90°', '180°', '270°', '360°'], 1, 'Định lý cơ bản.'),
    Q('Ôn lại: tam giác đều mỗi góc?', ['45°', '60°', '90°', '120°'], 1, '180°/3 = 60°.'),
    Q('Ôn lại: 2^3 · 2^2 = ?', ['2^5', '2^6', '4^5', '2^1'], 0, 'Cộng số mũ.'),
    Q('Ôn lại: √49 = ?', ['6', '7', '8', '14'], 1, '7·7 = 49.'),
  ]),

  M(23, 'Định lí Py-ta-go', [
    Q('Định lí Py-ta-go phát biểu cho?', ['Tam giác đều', 'Tam giác cân', 'Tam giác vuông', 'Mọi tam giác'], 2, 'Chỉ áp dụng cho tam giác vuông.'),
    Q('Trong tam giác vuông cạnh huyền c, hai cạnh góc vuông a, b: c^2 = ?', ['a + b', 'a^2 − b^2', 'a^2 + b^2', '2ab'], 2, 'c² = a² + b².'),
    Q('Tam giác vuông có hai cạnh góc vuông 3 và 4, cạnh huyền?', ['5', '6', '7', '√25 = 5'], 0, '3² + 4² = 25 ⇒ c = 5.'),
    Q('Tam giác vuông có cạnh huyền 13, một cạnh góc vuông 5, cạnh còn lại?', ['8', '10', '12', '14'], 2, '13² − 5² = 144 ⇒ √144 = 12.'),
    Q('Bộ ba (5; 12; 13) là?', ['Bộ ba Pythagore', 'Bộ ba số nguyên tố', 'Không liên quan', 'Bộ ba bất kỳ'], 0, '5² + 12² = 25 + 144 = 169 = 13².'),
    Q('Định lí Py-ta-go đảo dùng để?', ['Tính diện tích', 'Nhận biết tam giác vuông', 'Tính chu vi', 'Tìm trung tuyến'], 1, 'Nếu a² + b² = c² thì tam giác vuông tại đỉnh đối cạnh c.'),
  ]),

  M(24, 'Đường trung trực — Đường trung tuyến', [
    Q('Đường trung trực của đoạn thẳng là?', ['Đường vuông góc tại trung điểm', 'Đường đi qua hai đầu mút', 'Đường song song', 'Đường phân giác'], 0, 'Trung trực ⊥ và đi qua trung điểm.'),
    Q('Điểm thuộc trung trực của đoạn AB có tính chất?', ['Cách đều A và B', 'Trùng với A', 'Trùng với B', 'Cách trung điểm 1 cm'], 0, 'Tính chất đặc trưng.'),
    Q('Đường trung tuyến của tam giác đi từ?', ['Đỉnh đến trung điểm cạnh đối diện', 'Đỉnh đến chân đường cao', 'Đỉnh đến chân phân giác', 'Trung điểm đến trung điểm'], 0, 'Định nghĩa trung tuyến.'),
    Q('Ba đường trung tuyến đồng quy tại điểm gọi là?', ['Trực tâm', 'Trọng tâm', 'Tâm đường tròn nội tiếp', 'Tâm đường tròn ngoại tiếp'], 1, 'Trọng tâm.'),
    Q('Trọng tâm chia mỗi trung tuyến theo tỉ số nào tính từ đỉnh?', ['1:1', '2:1', '3:1', '1:2'], 1, 'AG:GM = 2:1.'),
    Q('Ba đường trung trực của tam giác đồng quy tại tâm đường tròn?', ['Nội tiếp', 'Ngoại tiếp', 'Bàng tiếp', 'Trọng tâm'], 1, 'Tâm đường tròn đi qua ba đỉnh.'),
  ]),

  M(25, 'Đường phân giác — Đường cao trong tam giác', [
    Q('Ba đường phân giác trong của tam giác đồng quy tại?', ['Trọng tâm', 'Trực tâm', 'Tâm đường tròn nội tiếp', 'Tâm đường tròn ngoại tiếp'], 2, 'Cách đều ba cạnh ⇒ tâm nội tiếp.'),
    Q('Điểm thuộc tia phân giác của một góc có tính chất?', ['Cách đều hai cạnh của góc', 'Cách đều đỉnh', 'Trùng đỉnh', 'Là trung điểm'], 0, 'Tính chất đặc trưng.'),
    Q('Đường cao của tam giác xuất phát từ?', ['Đỉnh, vuông góc với cạnh đối diện', 'Trung điểm cạnh', 'Trung điểm cạnh đối', 'Tâm đường tròn'], 0, 'Vuông góc từ đỉnh hạ xuống cạnh đối diện.'),
    Q('Ba đường cao của tam giác đồng quy tại?', ['Trọng tâm', 'Trực tâm', 'Tâm nội tiếp', 'Tâm ngoại tiếp'], 1, 'Gọi là trực tâm.'),
    Q('Trong tam giác cân tại A, đường cao từ A đồng thời là?', ['Trung tuyến và phân giác', 'Chỉ phân giác', 'Chỉ trung tuyến', 'Đường trung bình'], 0, 'Tính chất tam giác cân: trùng nhiều đường.'),
    Q('Tam giác đều có 4 điểm đặc biệt (trọng tâm, trực tâm, nội, ngoại) ?', ['Trùng nhau', 'Khác nhau', 'Thẳng hàng', 'Không tồn tại'], 0, 'Đều ⇒ 4 điểm trùng làm một.'),
  ]),

  M(26, 'Quan hệ giữa các yếu tố trong tam giác', [
    Q('Trong tam giác, cạnh đối diện góc lớn hơn thì?', ['Lớn hơn', 'Nhỏ hơn', 'Bằng nhau', 'Không liên quan'], 0, 'Quan hệ giữa cạnh và góc đối diện.'),
    Q('Bất đẳng thức tam giác: a, b, c là ba cạnh tam giác thì?', ['a + b > c', 'a + b < c', 'a + b = c', 'a · b > c'], 0, 'Tổng hai cạnh luôn lớn hơn cạnh còn lại.'),
    Q('Bộ ba nào KHÔNG là độ dài ba cạnh tam giác?', ['(3; 4; 5)', '(2; 3; 4)', '(1; 2; 3)', '(5; 6; 7)'], 2, '1 + 2 = 3 ⇒ không thoả bất đẳng thức tam giác.'),
    Q('Đường vuông góc và đường xiên kẻ từ một điểm đến một đường thẳng: đường nào ngắn nhất?', ['Đường xiên', 'Đường vuông góc', 'Bằng nhau', 'Tuỳ'], 1, 'Đường vuông góc luôn ngắn nhất.'),
    Q('Hai đường xiên có hình chiếu lớn hơn thì?', ['Lớn hơn', 'Nhỏ hơn', 'Bằng nhau', 'Tuỳ'], 0, 'Hình chiếu lớn hơn ⇒ đường xiên lớn hơn.'),
    Q('Trong tam giác vuông, cạnh huyền là cạnh?', ['Nhỏ nhất', 'Lớn nhất', 'Đối diện góc nhọn', 'Bất kỳ'], 1, 'Cạnh huyền đối diện góc 90° — góc lớn nhất.'),
  ]),

  M(27, 'Biểu thức đại số — Giá trị của biểu thức', [
    Q('Biểu thức 3x + 5 khi x = 2 có giá trị?', ['8', '11', '13', '6'], 1, '3·2 + 5 = 11.'),
    Q('Tính giá trị của 2x − y khi x = 3, y = 4?', ['2', '−2', '10', '−10'], 0, '2·3 − 4 = 2.'),
    Q('Trong biểu thức 5x²y, hệ số là?', ['5', '5x', 'x²y', '2'], 0, 'Hệ số là phần số.'),
    Q('Phần biến của 5x²y là?', ['5', 'x²y', '5x²', 'y'], 1, 'Phần biến gồm các chữ và số mũ.'),
    Q('Đơn thức là biểu thức gồm?', ['Tích của số với biến (luỹ thừa)', 'Tổng các biến', 'Hiệu các biến', 'Phân số đại số'], 0, 'Định nghĩa đơn thức.'),
    Q('Trong các biểu thức: 3x; 2x + 1; 5; xy. Có mấy đơn thức?', ['1', '2', '3', '4'], 2, '3x, 5, xy là đơn thức (3 cái); 2x+1 là đa thức.'),
  ]),

  M(28, 'Đa thức một biến — Sắp xếp', [
    Q('Đa thức một biến x là biểu thức gồm?', ['Tổng các đơn thức của biến x', 'Tích các đơn thức', 'Phân số chứa x', 'Số nguyên'], 0, 'Định nghĩa đa thức 1 biến.'),
    Q('Bậc của đa thức 3x² − 5x + 1 là?', ['1', '2', '3', '0'], 1, 'Bậc = bậc cao nhất của hạng tử = 2.'),
    Q('Hệ số cao nhất của 4x³ + 2x − 7 là?', ['4', '2', '−7', '3'], 0, 'Hệ số của số mũ cao nhất (x³).'),
    Q('Hệ số tự do của 5x² − 3x + 8 là?', ['5', '−3', '8', '0'], 2, 'Hệ số tự do = hạng tử không chứa biến.'),
    Q('Sắp xếp 2x − 3x² + 5 + x³ theo luỹ thừa giảm của biến?', ['x³ − 3x² + 2x + 5', '5 + 2x − 3x² + x³', '−3x² + x³ + 2x + 5', '2x + 5 − 3x² + x³'], 0, 'Giảm dần theo bậc: x³, x², x, hằng.'),
    Q('Đa thức 0 (đa thức không) có bậc?', ['0', '1', 'Không xác định', 'Vô cùng lớn'], 2, 'Quy ước: đa thức 0 không có bậc.'),
  ]),

  M(29, 'Cộng, trừ đa thức một biến', [
    Q('(2x² + 3x) + (x² − 5x) = ?', ['3x² − 2x', '3x² + 8x', 'x² + 8x', '3x² + 2x'], 0, 'Cộng hệ số đồng dạng: 3x² + (−2x).'),
    Q('(5x² − 4x + 3) − (2x² + x − 1) = ?', ['3x² − 5x + 4', '3x² − 3x + 4', '3x² − 5x + 2', '7x² − 3x + 2'], 0, 'Bỏ ngoặc đổi dấu rồi gộp.'),
    Q('Hai đơn thức nào đồng dạng?', ['3x² và 5x²', '3x và 3x²', 'xy và x²', '2x và 2y'], 0, 'Cùng phần biến và cùng số mũ.'),
    Q('Tổng 4x − 2x + 7x = ?', ['9x', '13x', '8x', '11x'], 0, '(4 − 2 + 7)x = 9x.'),
    Q('Cộng hai đa thức P(x) = x³ và Q(x) = −x³ + 2 ta được?', ['2', '2x³', '−x³ + 2', 'x³ + 2'], 0, '0·x³ + 2 = 2.'),
    Q('Hiệu (x² − 1) − (x² + 1) = ?', ['0', '−2', '2', '2x²'], 1, 'x² − 1 − x² − 1 = −2.'),
  ]),

  M(30, 'Nhân đa thức một biến', [
    Q('x · x² = ?', ['x³', 'x²', '2x²', 'x^(1·2)'], 0, 'Cộng số mũ.'),
    Q('2x(x + 3) = ?', ['2x² + 6x', '2x² + 3', '3x²', '2x + 6'], 0, 'Phân phối: 2x·x + 2x·3.'),
    Q('(x + 1)(x − 1) = ?', ['x² − 1', 'x² + 1', 'x² − 2x + 1', 'x² + 2x − 1'], 0, 'Hằng đẳng thức hiệu hai bình phương.'),
    Q('(x + 2)(x + 3) = ?', ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 2x + 3', 'x² + 6'], 0, 'x² + (2+3)x + 2·3.'),
    Q('3x²·5x = ?', ['15x²', '15x³', '8x³', '15x^5'], 1, '3·5 = 15; x²·x = x³.'),
    Q('(2x − 1)·x = ?', ['2x² − 1', '2x² − x', '2x − x', 'x²'], 1, 'Phân phối.'),
  ]),

  M(31, 'Chia đa thức cho đơn thức', [
    Q('(6x²) : (3x) = ?', ['2x', '2', '3x', '6x'], 0, '6/3 = 2; x²/x = x.'),
    Q('(12x³ − 6x²) : (3x) = ?', ['4x² − 2x', '4x² − 2', '9x² − 3x', '4x³ − 2x²'], 0, 'Chia từng hạng tử cho 3x.'),
    Q('(x⁵) : (x²) = ?', ['x³', 'x²', 'x⁷', 'x^(5/2)'], 0, 'Trừ số mũ: 5 − 2 = 3.'),
    Q('Điều kiện để A : B (đơn thức) là đơn thức?', ['Mọi B', 'B ≠ 0 và mỗi biến của B đều có mặt trong A với số mũ ≥', 'A là số', 'B là số nguyên'], 1, 'A chia hết cho B khi điều kiện về biến và số mũ thoả.'),
    Q('(8x⁴ + 4x²) : (4x²) = ?', ['2x² + 1', '2x² + 1/x', '2x² + 4', '2x³ + 1'], 0, 'Chia từng hạng tử: 8/4 · x²; 4/4.'),
    Q('Quy tắc chia hệ số khi chia hai đơn thức?', ['Cộng', 'Trừ', 'Chia', 'Nhân'], 2, 'Chia hệ số, trừ số mũ.'),
  ]),

  M(32, 'Nghiệm của đa thức một biến', [
    Q('x = a là nghiệm của P(x) khi?', ['P(a) = 0', 'P(a) > 0', 'P(a) < 0', 'P(a) ≠ 0'], 0, 'Định nghĩa nghiệm.'),
    Q('Nghiệm của P(x) = x − 3 là?', ['x = 3', 'x = −3', 'x = 0', 'x = 1'], 0, 'x − 3 = 0 ⇒ x = 3.'),
    Q('Nghiệm của P(x) = 2x + 4 là?', ['x = 2', 'x = −2', 'x = 4', 'x = −4'], 1, '2x + 4 = 0 ⇒ x = −2.'),
    Q('Đa thức P(x) = x² − 1 có nghiệm?', ['Chỉ x = 1', 'Chỉ x = −1', 'x = ±1', 'Vô nghiệm'], 2, 'x² = 1 ⇒ x = ±1.'),
    Q('Đa thức P(x) = x² + 1 có nghiệm thực không?', ['Có x = 1', 'Có x = −1', 'Có x = ±1', 'Không có'], 3, 'x² ≥ 0 ⇒ x² + 1 ≥ 1 > 0.'),
    Q('Đa thức bậc n có tối đa bao nhiêu nghiệm?', ['n', 'n + 1', 'n − 1', '2n'], 0, 'Định lí: tối đa n nghiệm.'),
  ]),

  M(33, 'Tổng hợp đại số — bài toán tỉ lệ', [
    Q('Chia 60 thành ba phần tỉ lệ 1 : 2 : 3. Phần lớn nhất?', ['10', '20', '30', '40'], 2, 'Tổng 6 phần ⇒ mỗi phần 10; 3·10 = 30.'),
    Q('Hai số tỉ lệ với 3 và 5, hiệu bằng 10. Số lớn?', ['10', '15', '20', '25'], 4 - 1, 'k(5 − 3) = 10 ⇒ k = 5; số lớn = 25.'),
    Q('Diện tích tam giác đáy 6 cm, chiều cao 4 cm là?', ['10 cm²', '12 cm²', '24 cm²', '6 cm²'], 1, 'S = (1/2)·6·4 = 12.'),
    Q('Cho y tỉ lệ thuận x, x = 4 ⇒ y = 12. Khi x = 7, y = ?', ['12', '21', '7', '28'], 1, 'k = 3; y = 3·7 = 21.'),
    Q('Phân số 36/48 rút gọn?', ['2/3', '3/4', '4/5', '6/8'], 1, 'ƯCLN(36,48) = 12.'),
    Q('Tổng các góc trong một tứ giác bằng?', ['180°', '270°', '360°', '540°'], 2, 'Tổng góc tứ giác = 360°.'),
  ]),

  M(34, 'Tổng hợp hình học', [
    Q('Tam giác vuông cân có hai góc nhọn mỗi góc?', ['30°', '45°', '60°', '90°'], 1, 'Vuông cân ⇒ hai góc nhọn bằng nhau và tổng 90°.'),
    Q('Trong tam giác ABC vuông tại A, BC² = ?', ['AB² + AC²', 'AB² − AC²', '2·AB·AC', 'AB + AC'], 0, 'Định lí Pythagoras.'),
    Q('Tam giác đều cạnh 6 cm có chu vi?', ['12 cm', '18 cm', '24 cm', '36 cm'], 1, '3·6 = 18.'),
    Q('Trong tam giác cân, đường trung trực của cạnh đáy đồng thời là?', ['Đường cao và phân giác từ đỉnh', 'Đường trung bình', 'Đường song song với đáy', 'Đường vuông góc với cạnh bên'], 0, 'Tính chất đặc biệt của tam giác cân.'),
    Q('Bộ ba (6; 8; 10) là cạnh tam giác?', ['Đều', 'Cân không vuông', 'Vuông', 'Không phải tam giác'], 2, '6² + 8² = 100 = 10² ⇒ vuông.'),
    Q('Trọng tâm tam giác cách mỗi đỉnh bao nhiêu phần đường trung tuyến?', ['1/3', '2/3', '1/2', '3/4'], 1, 'Khoảng cách từ trọng tâm tới đỉnh = 2/3 trung tuyến.'),
  ]),

  M(35, 'Ôn tập học kì II — Tổng hợp cả năm', [
    Q('(−3/4) · (4/5) = ?', ['−3/5', '−12/20', '12/20', '3/5'], 0, 'Rút gọn: −12/20 = −3/5.'),
    Q('√(64) − √(36) = ?', ['2', '4', '10', '8'], 0, '8 − 6 = 2.'),
    Q('Đại lượng x, y tỉ lệ nghịch, x·y = 36. Khi x = 9, y = ?', ['3', '4', '6', '9'], 1, 'y = 36/9 = 4.'),
    Q('Nghiệm của 3x − 12 = 0 là?', ['x = 3', 'x = 4', 'x = 12', 'x = 9'], 1, '3x = 12 ⇒ x = 4.'),
    Q('Tam giác có ba cạnh 5; 12; 13 là tam giác?', ['Đều', 'Cân không vuông', 'Vuông', 'Không tồn tại'], 2, '5² + 12² = 169 = 13².'),
    Q('Bậc của đa thức 7x³ + 2x − 5 là?', ['1', '2', '3', '7'], 2, 'Bậc cao nhất 3.'),
  ]),
];

export const S7TOAN_SCENARIOS = indexBy(S7TOAN_WEEKS);
