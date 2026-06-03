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
    Q('Số hữu tỉ là số có dạng?', ['a/b với a,b ∈ N', 'Mọi số thập phân', 'Chỉ là số nguyên', 'a/b với a,b ∈ Z, b ≠ 0'], 3, 'Định nghĩa: a/b với a,b nguyên, b ≠ 0.'),
    Q('Trong các số sau, số nào KHÔNG phải số hữu tỉ?', ['3', '√2', '−1/2 (phân số âm)', '0,75'], 1, '√2 là số vô tỉ (không biểu diễn được dưới dạng a/b).'),
    Q('Số 0 thuộc tập hợp nào?', ['Chỉ Z (vì 0 là số nguyên)', 'Chỉ N (vì 0 là số tự nhiên)', 'Cả N, Z, Q', 'Không thuộc Q'], 2, '0 ∈ N ⊂ Z ⊂ Q.'),
    Q('Phân số nào biểu diễn cùng một số hữu tỉ với 2/3?', ['3/2', '4/6', '4/9', '6/8'], 1, '2·6 = 3·4 ⇒ 2/3 = 4/6.'),
    Q('Trên trục số, số hữu tỉ −1/2 nằm ở đâu?', ['Bên trái số 0', 'Trùng với −1', 'Trùng với 0', 'Bên phải số 0'], 0, 'Mọi số âm nằm bên trái số 0.'),
    Q('So sánh: −3/4 và −2/4?', ['−3/4 > −2/4', '−3/4 = −2/4', 'Không so sánh được', '−3/4 < −2/4'], 3, 'Cùng mẫu dương, tử −3 < −2 ⇒ −3/4 < −2/4.'),
  ]),

  M(2, 'Cộng, trừ số hữu tỉ', [
    Q('1/2 + 1/3 = ?', ['2/6', '1/6', '2/5', '5/6'], 3, 'Quy đồng: 3/6 + 2/6 = 5/6.'),
    Q('(−2/5) + 3/5 = ?', ['−1/5 (quên đổi dấu)', '−5/5 (cộng nhầm tử −2+(−3))', '1/5', '5/5'], 2, 'Cùng mẫu: (−2+3)/5 = 1/5.'),
    Q('3/4 − 1/2 = ?', ['2/6', '2/2', '1/2', '1/4'], 3, '3/4 − 2/4 = 1/4.'),
    Q('Số đối của 5/7 là?', ['7/5', '−5/7', '5/−7', '−7/5 (nhầm với số nghịch đảo âm)'], 1, 'Số đối của a là −a.'),
    Q('Quy tắc dấu ngoặc: a − (b − c) = ?', ['a + b + c', 'a − b − c', 'a − b + c', 'a + b − c'], 2, 'Bỏ ngoặc có dấu trừ phía trước, đổi dấu các hạng tử bên trong.'),
    Q('(−1/3) − (−1/6) = ?', ['−1/2 (cộng nhầm −2/6 + (−1/6))', '1/6', '1/2', '−1/6'], 3, '−2/6 + 1/6 = −1/6.'),
  ]),

  M(3, 'Nhân, chia số hữu tỉ', [
    Q('(2/3) · (3/4) = ?', ['1/2', '6/7', '2/4', '5/12'], 0, 'Nhân tử với tử, mẫu với mẫu, rút gọn: 6/12 = 1/2.'),
    Q('(−3/5) · (10/9) = ?', ['−2/3', '−3/45 (quên nhân tử 10)', '2/3', '−30/45'], 0, 'Rút gọn rồi nhân: (−3·10)/(5·9) = −30/45 = −2/3.'),
    Q('(2/3) : (4/9) = ?', ['3/2', '6/4', '2/27', '8/27'], 0, 'Chia là nhân nghịch đảo: (2/3)·(9/4) = 18/12 = 3/2.'),
    Q('Số nghịch đảo của −7/4 là?', ['−4/7', '−7/4 (nhầm số nghịch đảo với chính nó)', '7/4', '4/7'], 0, 'Nghịch đảo của a/b là b/a, giữ nguyên dấu.'),
    Q('(−1/2) · (−1/3) = ?', ['1/6', '1/5', '−1/6 (quên quy tắc âm nhân âm)', '−2/6 (cộng mẫu thay vì nhân)'], 0, 'Tích hai số âm là số dương.'),
    Q('Tính 0 : (−5/8) = ?', ['1', 'Không xác định', '0', '−5/8 (nhầm 0:a với a)'], 2, '0 chia cho số khác 0 luôn bằng 0.'),
  ]),

  M(4, 'Luỹ thừa của số hữu tỉ', [
    Q('(2/3)^2 = ?', ['2/9', '4/3', '4/6', '4/9'], 3, '(a/b)^n = a^n/b^n.'),
    Q('(−1/2)^3 = ?', ['1/8', '−1/8', '1/6', '−1/6 (nhân mũ với mẫu: 2·3=6)'], 1, '(−1)^3 = −1; 2^3 = 8 ⇒ −1/8.'),
    Q('a^m · a^n = ?', ['a^(m+n)', '2a^m', 'a^(m−n)', 'a^(m·n)'], 0, 'Nhân hai luỹ thừa cùng cơ số: cộng số mũ.'),
    Q('a^m : a^n (a ≠ 0) = ?', ['a^(m−n)', 'a^(m·n)', 'a^(m+n)', 'a^(n−m)'], 0, 'Chia hai luỹ thừa cùng cơ số: trừ số mũ.'),
    Q('(a^m)^n = ?', ['a^(m·n)', 'a^(m−n)', 'a^(m+n)', 'a^(m/n)'], 0, 'Luỹ thừa của luỹ thừa: nhân số mũ.'),
    Q('Quy ước a^0 (a ≠ 0) = ?', ['0', '1', 'Không xác định', 'a (nhầm với a^1)'], 1, 'Mọi a ≠ 0 đều có a^0 = 1.'),
  ]),

  M(5, 'Thứ tự thực hiện phép tính — Quy tắc dấu ngoặc', [
    Q('Tính 2 + 3 · (1/2) = ?', ['5', '3', '7/2', '5/2'], 2, '3·(1/2)=3/2; 2 + 3/2 = 7/2.'),
    Q('Tính (1/2 + 1/3) · 6 = ?', ['5', '6', '4', '3'], 0, '5/6 · 6 = 5.'),
    Q('Tính 1 − (1/2 − 1/4) = ?', ['1/2', '3/4', '1/4', '5/4'], 1, '1/2 − 1/4 = 1/4; 1 − 1/4 = 3/4.'),
    Q('Thứ tự ưu tiên cao nhất là?', ['Luỹ thừa', 'Trái sang phải', 'Nhân, chia', 'Cộng, trừ'], 0, 'Luỹ thừa → nhân/chia → cộng/trừ.'),
    Q('Tính (−2)^2 + (−3) · 2 = ?', ['10', '−2 (quên bình phương dấu âm: −4 + −6 + 2·2)', '2', '−10'], 3, 'Bỏ qua dấu — sai. 4 + (−6) = −2.'),
    Q('Bỏ ngoặc đúng: −(a − b + c) = ?', ['−a − b − c', '−a + b − c', '−a − b + c', 'a − b + c'], 1, 'Đổi dấu tất cả các hạng tử.'),
  ]),

  M(6, 'Giá trị tuyệt đối của số hữu tỉ', [
    Q('|−3/4| = ?', ['3/4', '0', '−3/4 (giữ nguyên dấu âm)', '4/3'], 0, '|a| ≥ 0 với mọi a.'),
    Q('|0| = ?', ['1', '0', 'Không xác định (nhầm với 0/0)', '−1 (nhầm với số đối)'], 1, 'Quy ước |0| = 0.'),
    Q('|a| = a khi?', ['a < 0 (nhầm với trường hợp |a| = −a)', 'a ≤ 0 (nhầm dấu bất đẳng thức)', 'Mọi a (quên trường hợp a âm thì |a| = −a)', 'a ≥ 0'], 3, '|a| = a nếu a ≥ 0; |a| = −a nếu a < 0.'),
    Q('Tìm x biết |x| = 5?', ['Không có x', 'x = 5 hoặc x = −5', 'x = −5', 'x = 5'], 1, 'Hai số đối nhau có cùng giá trị tuyệt đối.'),
    Q('|−2,5| + |−1,5| = ?', ['0', '−4 (giữ dấu âm sau khi bỏ trị tuyệt đối)', '1', '4'], 3, '2,5 + 1,5 = 4.'),
    Q('Mệnh đề nào ĐÚNG?', ['|a/b| = a/b', '|a · b| = |a| · |b|', '|a| < 0', '|a + b| = |a| + |b|'], 1, '|a·b| = |a|·|b| luôn đúng.'),
  ]),

  M(7, 'Làm tròn số — Sai số', [
    Q('Làm tròn 3,1415 đến chữ số thập phân thứ hai?', ['3,14', '3,15', '3,1', '3,141'], 0, 'Chữ số thứ ba sau dấu phẩy là 1 < 5 nên làm tròn xuống.'),
    Q('Làm tròn 27,486 đến chữ số thập phân thứ nhất?', ['27,49', '28', '27,5', '27,4'], 2, 'Chữ số thứ hai là 8 ≥ 5 ⇒ tăng lên: 27,5.'),
    Q('Làm tròn 1 234 đến hàng trăm?', ['1 300', '1 230', '1 200', '1 240'], 2, 'Chữ số hàng chục là 3 < 5 ⇒ 1 200.'),
    Q('Làm tròn 0,0496 đến chữ số thập phân thứ ba?', ['0,049', '0,04', '0,05', '0,050'], 3, 'Chữ số thứ tư là 6 ≥ 5 ⇒ tăng: 0,050.'),
    Q('Làm tròn 6,5 (làm tròn đến hàng đơn vị) thường được?', ['5', '6', '7', '8'], 2, 'Theo quy ước "5 trở lên thì tăng" ⇒ 7.'),
    Q('Sai số tuyệt đối của một số làm tròn là?', ['|giá trị thật − giá trị làm tròn|', 'Luôn bằng 0', 'Số ngẫu nhiên', 'Số luôn dương'], 0, 'Sai số = |a − a*|.'),
  ]),

  M(8, 'Số vô tỉ — Căn bậc hai số học', [
    Q('Căn bậc hai số học của 25 là?', ['−5 (nhầm với nghiệm âm của phương trình x²=25)', '5', '±5 (nhầm với hai căn bậc hai của 25)', '12,5'], 1, '√25 = 5 (lấy giá trị không âm).'),
    Q('√81 = ?', ['40,5', '8', '9', '−9 (lấy luôn giá trị âm)'], 2, '9·9 = 81.'),
    Q('Trong các số: 2; 1/3; √2; 0,75 — số nào vô tỉ?', ['0,75', '2', '1/3', '√2'], 3, '√2 không viết được dưới dạng a/b.'),
    Q('√(a^2) (a ≥ 0) = ?', ['−a (nhầm dấu khi a ≥ 0)', 'a', 'a^2 (quên khai căn)', '|a| (đúng tổng quát, nhưng dư khi đã có a ≥ 0)'], 1, 'Với a ≥ 0 thì √(a^2) = a.'),
    Q('√0 = ?', ['−0 (viết dạng có dấu trừ)', '1', '0', 'Không xác định'], 2, 'Quy ước √0 = 0.'),
    Q('√16 + √9 = ?', ['7', '5', '12', '25'], 0, '4 + 3 = 7.'),
  ]),

  M(9, 'Tập hợp số thực R', [
    Q('Tập số thực R gồm?', ['Chỉ số vô tỉ', 'Chỉ số hữu tỉ', 'Chỉ số nguyên', 'Hữu tỉ và vô tỉ'], 3, 'R = Q ∪ I (I là tập vô tỉ).'),
    Q('Quan hệ bao hàm đúng là?', ['N ⊂ Z ⊂ Q ⊂ R', 'N = Z = Q = R', 'R ⊂ Q ⊂ Z ⊂ N', 'Q ⊂ R ⊂ Z'], 0, 'Mỗi tập số là tập con của tập rộng hơn.'),
    Q('Số nào KHÔNG thuộc R?', ['√3 (nhầm vô tỉ không thuộc R)', '0', 'π (nhầm vô tỉ không thuộc R)', 'Không có'], 3, 'Mọi số π, √3, 0 đều ∈ R.'),
    Q('Trên trục số, số thực được biểu diễn?', ['Bằng một điểm duy nhất với mỗi số', 'Chỉ vài điểm rời rạc', 'Bằng một đoạn thẳng', 'Không biểu diễn được'], 0, 'Mỗi số thực ↔ một điểm trên trục số.'),
    Q('|a| với a ∈ R có tính chất?', ['Luôn âm', 'Luôn dương', 'Luôn không âm', 'Luôn bằng a'], 2, '|a| ≥ 0 ∀a ∈ R.'),
    Q('Số đối của √5 là?', ['−√5', '5', '√5 (nhầm với chính nó)', '1/√5'], 0, 'Số đối của a là −a.'),
  ]),

  M(10, 'Tỉ lệ thức', [
    Q('Tỉ lệ thức a/b = c/d (b, d ≠ 0) tương đương với?', ['a − b = c − d', 'a·b = c·d', 'a·d = b·c', 'a + d = b + c'], 2, 'Quy tắc nhân chéo.'),
    Q('Cho 2/3 = x/12. Tìm x?', ['9', '8', '18', '6'], 1, '2·12 = 3x ⇒ x = 8.'),
    Q('Nếu a/b = c/d thì a/c = ?', ['d/b (đảo cả tử và mẫu)', 'c/b (giữ nguyên không hoán đổi)', 'a/d (đổi mẫu sai vị trí)', 'b/d'], 3, 'Hoán đổi trung tỉ: a/c = b/d.'),
    Q('Tính chất dãy tỉ số bằng nhau: a/b = c/d = (a+c)/?', ['b−d (nhầm hiệu thay vì tổng)', 'b/d (lấy thương hai mẫu)', 'b·d (lấy tích hai mẫu)', 'b+d'], 3, '(a+c)/(b+d) = a/b (khi b+d ≠ 0).'),
    Q('Cho 3/x = 5/15. Tìm x?', ['5', '15', '3', '9'], 3, '3·15 = 5x ⇒ x = 9.'),
    Q('Trong tỉ lệ thức a/b = c/d, b và c gọi là?', ['Mẫu chung', 'Ngoại tỉ', 'Trung tỉ', 'Số đối'], 2, 'a, d là ngoại tỉ; b, c là trung tỉ.'),
  ]),

  M(11, 'Đại lượng tỉ lệ thuận', [
    Q('Hai đại lượng y, x tỉ lệ thuận khi?', ['y = x + k', 'y = kx (k ≠ 0)', 'y = k/x', 'y = x − k'], 1, 'Định nghĩa: y = kx, k là hệ số tỉ lệ.'),
    Q('Nếu y = 3x thì khi x = 5, y = ?', ['3/5', '15', '2', '8'], 1, 'y = 3·5 = 15.'),
    Q('Mua 3 kg gạo hết 60 nghìn. Hỏi 5 kg cùng loại hết bao nhiêu?', ['90 nghìn', '100 nghìn', '120 nghìn', '80 nghìn'], 1, 'Tỉ lệ thuận: 60/3 = 20 nghìn/kg ⇒ 5·20 = 100 nghìn.'),
    Q('Nếu y tỉ lệ thuận với x theo hệ số 2/3, viết công thức?', ['y = (2/3)x', 'x = 2y/3', 'y = x/(2/3)', 'y = 2/3 + x'], 0, 'y = (2/3)x.'),
    Q('Đồ thị hàm số y = kx (k ≠ 0) là?', ['Đường thẳng đi qua gốc O', 'Đường cong', 'Đường tròn', 'Parabol'], 0, 'Đồ thị y = kx luôn qua O(0;0).'),
    Q('Nếu y₁/x₁ = y₂/x₂ thì x, y có quan hệ?', ['Tỉ lệ thuận', 'Tỉ lệ nghịch', 'Không liên hệ', 'Bằng nhau'], 0, 'Đó là dấu hiệu nhận biết tỉ lệ thuận.'),
  ]),

  M(12, 'Đại lượng tỉ lệ nghịch', [
    Q('Hai đại lượng y, x tỉ lệ nghịch khi?', ['y = kx', 'y = k/x (k ≠ 0)', 'y − x = k', 'y = x + k'], 1, 'Định nghĩa: x·y = k hằng số ⇒ y = k/x.'),
    Q('Nếu xy = 24 và x = 4 thì y = ?', ['6', '8', '20', '28'], 0, 'y = 24/4 = 6.'),
    Q('4 người làm xong công việc trong 6 ngày. Hỏi 8 người (cùng năng suất) làm trong?', ['12 ngày', '2 ngày', '3 ngày', '4 ngày'], 2, 'Tỉ lệ nghịch: 4·6 = 8·t ⇒ t = 3.'),
    Q('Đặc trưng của tỉ lệ nghịch là?', ['x − y không đổi', 'x + y không đổi', 'x · y không đổi', 'x/y không đổi'], 2, 'x·y = k.'),
    Q('Nếu x tăng 2 lần thì y (tỉ lệ nghịch) sẽ?', ['Giảm 2 lần', 'Không đổi', 'Tăng 2 lần', 'Tăng 4 lần'], 0, 'y = k/x ⇒ x↑2 thì y↓2.'),
    Q('Đồ thị y = k/x (k > 0) là?', ['Đường tròn', 'Đường thẳng', 'Hypebol nằm ở góc I và III', 'Parabol'], 2, 'Hypebol hai nhánh ở góc phần tư I và III (khi k > 0).'),
  ]),

  M(13, 'Biểu đồ — Thu thập và biểu diễn dữ liệu', [
    Q('Biểu đồ hình cột thường dùng để?', ['Hiển thị xu hướng theo thời gian', 'Vẽ hàm số', 'So sánh số liệu giữa các đối tượng', 'Hiển thị tỉ lệ phần trăm'], 2, 'Cột so sánh độ lớn giữa các nhóm.'),
    Q('Biểu đồ hình quạt thường biểu diễn?', ['Tốc độ', 'Tỉ lệ phần trăm của các phần', 'Khoảng cách', 'Xu hướng thời gian'], 1, 'Mỗi quạt tương ứng một tỉ lệ trong tổng thể.'),
    Q('Biểu đồ đoạn thẳng thích hợp khi?', ['So sánh số lượng tĩnh', 'Biểu diễn tập hợp', 'Theo dõi biến động theo thời gian', 'Tính trung bình'], 2, 'Đoạn thẳng cho thấy xu hướng tăng/giảm.'),
    Q('Tổng các phần trăm trong biểu đồ quạt phải bằng?', ['180%', '360%', '100%', '50%'], 2, 'Tổng tỉ lệ phần trăm các phần = 100%.'),
    Q('Tổng số đo các quạt trong biểu đồ quạt bằng?', ['270°', '180°', '360°', '90°'], 2, 'Cả hình tròn ứng 360°.'),
    Q('Khi đọc biểu đồ, bước đầu tiên cần làm gì?', ['Tính trung bình', 'Vẽ lại biểu đồ', 'Sắp xếp lại số liệu', 'Đọc tiêu đề và đơn vị'], 3, 'Hiểu tiêu đề, trục, đơn vị trước khi phân tích.'),
  ]),

  M(14, 'Phân tích và xử lí dữ liệu', [
    Q('Trung bình cộng của dãy 3; 5; 7 là?', ['3', '15', '5', '7'], 2, '(3+5+7)/3 = 5.'),
    Q('Mốt của dãy 2; 3; 3; 4; 5 là?', ['5', '3', '4', '2'], 1, 'Mốt là giá trị xuất hiện nhiều nhất.'),
    Q('Trong dãy 1; 2; 2; 3; 4 — số liệu xuất hiện nhiều nhất là?', ['4', '1', '3', '2'], 3, 'Số 2 xuất hiện 2 lần.'),
    Q('Trung bình cộng dùng để?', ['Sắp xếp dữ liệu', 'Tìm giá trị nhỏ nhất', 'Tìm giá trị lớn nhất', 'Đại diện cho dãy số liệu'], 3, 'Là đặc trưng đo lường trung tâm.'),
    Q('Số liệu nào sau có tính đại diện kém nếu xuất hiện một giá trị quá lớn?', ['Trung bình cộng', 'Trung vị', 'Tổng (cũng bị giá trị lớn ảnh hưởng nhưng không phải đại lượng đại diện)', 'Mốt (nhầm mốt cũng bị kéo theo giá trị bất thường)'], 0, 'Trung bình bị "kéo" bởi giá trị bất thường.'),
    Q('Đặc trưng nào CHỈ phụ thuộc thứ tự dữ liệu, không phụ thuộc giá trị cụ thể?', ['Tổng (phụ thuộc giá trị cộng dồn)', 'Trung vị', 'Mốt (phụ thuộc tần số xuất hiện của giá trị)', 'Trung bình'], 1, 'Trung vị là giá trị giữa khi sắp xếp.'),
  ]),

  M(15, 'Góc ở vị trí đặc biệt — Tia phân giác', [
    Q('Hai góc kề bù có tổng số đo bằng?', ['180°', '360°', '270°', '90°'], 0, 'Kề bù ⇔ tổng = 180°.'),
    Q('Hai góc đối đỉnh thì?', ['Bù nhau', 'Vuông góc', 'Bằng nhau', 'Phụ nhau'], 2, 'Hai góc đối đỉnh luôn bằng nhau.'),
    Q('Hai góc phụ nhau có tổng?', ['90°', '45°', '180°', '360°'], 0, 'Phụ ⇔ tổng = 90°.'),
    Q('Tia phân giác của một góc chia góc đó thành?', ['Hai góc bằng nhau', 'Hai góc khác nhau', 'Hai góc bù nhau', 'Một góc vuông'], 0, 'Định nghĩa tia phân giác.'),
    Q('Nếu ∠AOB = 60° và Ot là tia phân giác thì ∠AOt = ?', ['60°', '30°', '90°', '120°'], 1, '60°/2 = 30°.'),
    Q('Hai góc kề nhau là hai góc có?', ['Bù nhau', 'Bằng nhau', 'Đỉnh khác nhau', 'Một cạnh chung và không trùng nhau ở phần trong'], 3, 'Có chung đỉnh, một cạnh chung, hai cạnh còn lại nằm hai nửa mặt phẳng đối nhau.'),
  ]),

  M(16, 'Hai đường thẳng song song — Tiên đề Ơ-clit', [
    Q('Hai đường thẳng song song khi?', ['Cắt nhau', 'Không có điểm chung', 'Vuông góc', 'Trùng nhau'], 1, 'Song song = không có điểm chung.'),
    Q('Khi một đường thẳng cắt hai đường thẳng song song, hai góc đồng vị?', ['Phụ nhau', 'Vuông nhau', 'Bù nhau', 'Bằng nhau'], 3, 'Dấu hiệu nhận biết song song.'),
    Q('Hai góc so le trong khi hai đường thẳng song song thì?', ['Khác nhau', 'Bù nhau', 'Bằng nhau', 'Phụ nhau'], 2, 'Tính chất song song.'),
    Q('Tiên đề Ơ-clit nói rằng qua một điểm ngoài đường thẳng cho trước có bao nhiêu đường song song với nó?', ['Hai (nhầm có hai đường song song)', 'Không có (nhầm không tồn tại đường song song)', 'Đúng một', 'Vô số (nhầm có vô số đường song song)'], 2, 'Tiên đề Euclid: chỉ duy nhất một.'),
    Q('Hai góc trong cùng phía (cắt bởi cát tuyến) trên hai đường thẳng song song có tổng?', ['360°', '180°', '270°', '90°'], 1, 'Tổng hai góc trong cùng phía = 180°.'),
    Q('Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì?', ['Cùng đi qua một điểm', 'Trùng nhau', 'Song song với nhau', 'Cắt nhau'], 2, 'Là một hệ quả quan trọng.'),
  ]),

  M(17, 'Tổng các góc trong tam giác', [
    Q('Tổng ba góc trong một tam giác bằng?', ['180°', '270°', '90°', '360°'], 0, 'Định lý cơ bản: ∠A + ∠B + ∠C = 180°.'),
    Q('Tam giác có hai góc 50° và 60°, góc thứ ba bằng?', ['70°', '80°', '60°', '110°'], 0, '180° − (50° + 60°) = 70°.'),
    Q('Tam giác vuông có một góc bằng?', ['90°', '60°', '180°', '45°'], 0, 'Có đúng một góc 90°.'),
    Q('Trong tam giác vuông, tổng hai góc nhọn bằng?', ['45°', '180°', '60°', '90°'], 3, '180° − 90° = 90°.'),
    Q('Góc ngoài của tam giác bằng?', ['Tổng hai góc trong không kề với nó', 'Tổng ba góc trong', 'Hiệu hai góc trong kề', 'Một nửa góc trong tương ứng'], 0, 'Định lý góc ngoài.'),
    Q('Tam giác có ba góc đều bằng nhau thì mỗi góc bằng?', ['60°', '45°', '120°', '90°'], 0, '180°/3 = 60°.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('(−1/2) + 3/4 = ?', ['1/4', '−1/4 (quên đổi dấu: 2/4 − 3/4)', '−5/4 (cộng tử mà giữ dấu âm: −2−3)/4', '5/4'], 0, '−2/4 + 3/4 = 1/4.'),
    Q('(2/3)^3 = ?', ['6/9', '8/9', '8/27', '2/27'], 2, '2^3/3^3 = 8/27.'),
    Q('√144 = ?', ['144/2', '14', '11', '12'], 3, '12·12 = 144.'),
    Q('Tìm x: 3/x = 9/12?', ['1', '6', '3', '4'], 3, '3·12 = 9x ⇒ x = 4.'),
    Q('|−7,5| · |0,2| = ?', ['7,7', '1,5', '−1,5 (giữ dấu âm khi tính)', '15'], 1, '7,5·0,2 = 1,5.'),
    Q('Một tam giác có hai góc 35° và 95°, góc còn lại?', ['40°', '60°', '50°', '70°'], 2, '180 − 130 = 50°.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hai tam giác bằng nhau — Trường hợp c-c-c', [
    Q('Hai tam giác bằng nhau thì có?', ['Cùng diện tích, khác hình dạng', 'Các cặp cạnh và cặp góc tương ứng bằng nhau', 'Chỉ góc bằng nhau', 'Chỉ cạnh bằng nhau'], 1, 'Định nghĩa hai tam giác bằng nhau.'),
    Q('Trường hợp c-c-c có nghĩa?', ['Cạnh huyền — cạnh góc vuông', 'Cạnh — cạnh — cạnh', 'Cạnh — góc — cạnh', 'Góc — cạnh — góc'], 1, 'Ba cặp cạnh tương ứng bằng nhau.'),
    Q('Cho ΔABC = ΔDEF (theo thứ tự), suy ra AB = ?', ['EF (lấy cặp BC ↔ EF)', 'AC (lấy cạnh khác trong ΔABC)', 'DE', 'DF (lấy cặp AC ↔ DF)'], 2, 'Cặp cạnh tương ứng AB ↔ DE.'),
    Q('Hai tam giác đều cạnh bằng nhau thì?', ['Tuỳ kích thước', 'Bằng nhau theo c-c-c', 'Không bằng', 'Đồng dạng nhưng không bằng'], 1, 'Ba cạnh bằng nhau ⇒ bằng nhau.'),
    Q('Trong ΔABC = ΔMNP, ∠A bằng góc nào?', ['∠P (nhầm A ↔ P, đảo thứ tự)', '∠M', '∠B (lấy góc khác trong ΔABC)', '∠N (nhầm A ↔ N)'], 1, 'Đỉnh tương ứng: A ↔ M.'),
    Q('Nếu ΔABC = ΔABD thì cặp cạnh nào CHẮC CHẮN bằng?', ['BC và BD', 'AC và AD', 'AB và AB', 'Cả AC và AD, BC và BD'], 3, 'AB chung; AC = AD và BC = BD theo thứ tự đỉnh.'),
  ]),

  M(20, 'Trường hợp c-g-c và g-c-g', [
    Q('Trường hợp c-g-c là?', ['Cạnh huyền — góc nhọn', 'Cạnh — góc — cạnh', 'Cạnh — cạnh — góc', 'Góc — góc — cạnh'], 1, 'Hai cạnh và góc xen giữa.'),
    Q('Trường hợp g-c-g là?', ['Góc — cạnh — góc', 'Cạnh — góc — cạnh', 'Góc — góc — cạnh', 'Góc — góc — góc'], 0, 'Một cạnh và hai góc kề cạnh đó.'),
    Q('Trường hợp nào KHÔNG đủ để chứng minh hai tam giác bằng nhau?', ['c-g-c (hai cạnh và góc xen giữa)', 'g-c-g (hai góc và cạnh xen giữa)', 'g-g-g', 'c-c-c (ba cạnh tương ứng bằng nhau)'], 2, 'g-g-g chỉ cho đồng dạng, không bằng nhau.'),
    Q('ΔABC và ΔA′B′C′ có AB = A′B′; ∠A = ∠A′; AC = A′C′. Hai tam giác bằng nhau theo trường hợp?', ['Không đủ', 'c-g-c', 'c-c-c (nhầm là ba cạnh bằng nhau)', 'g-c-g (nhầm là hai góc và cạnh xen giữa)'], 1, 'Hai cạnh kề và góc xen giữa: c-g-c.'),
    Q('Cho tam giác cân tại A, tia phân giác AM của ∠A. ΔABM và ΔACM bằng nhau theo?', ['c-g-c', 'c-c-c (nhầm vì BM = CM được suy ra sau)', 'Không đủ', 'g-c-g (nhầm vì chỉ thấy góc và cạnh chung)'], 0, 'AB = AC; ∠BAM = ∠CAM; AM chung ⇒ c-g-c.'),
    Q('Trường hợp g-c-g cần dữ kiện?', ['Hai góc và cạnh kề chung của chúng', 'Hai cạnh và một góc bất kì', 'Ba góc', 'Hai cạnh và góc đối'], 0, 'Cạnh nằm giữa (kề) hai góc.'),
  ]),

  M(21, 'Tam giác cân — Tam giác đều', [
    Q('Tam giác cân là tam giác có?', ['Ba cạnh bằng nhau', 'Hai góc bù nhau', 'Hai cạnh bằng nhau', 'Một góc vuông'], 2, 'Hai cạnh bên bằng nhau.'),
    Q('Trong tam giác cân, hai góc ở đáy?', ['Bù nhau', 'Bằng nhau', 'Phụ nhau', 'Khác nhau'], 1, 'Định lí cơ bản.'),
    Q('Tam giác đều có?', ['Một góc 120°', 'Hai cạnh bằng', 'Ba cạnh bằng nhau và ba góc 60°', 'Một góc 90°'], 2, 'Đều ⇒ cân + ba góc bằng nhau = 60°.'),
    Q('Tam giác cân có một góc đáy 50°, góc đỉnh?', ['40°', '50°', '100°', '80°'], 3, '180° − 2·50° = 80°.'),
    Q('Tam giác cân có góc đỉnh 80°, mỗi góc đáy?', ['60°', '40°', '80°', '50°'], 3, '(180° − 80°)/2 = 50°.'),
    Q('Tam giác có hai góc 60° thì là?', ['Cân (chỉ thấy hai góc bằng nhau)', 'Vuông (nhầm 60°+60° không phải 90°)', 'Đều', 'Tù (nhầm có góc thứ ba lớn hơn 90°)'], 2, 'Hai góc 60° ⇒ góc thứ ba 60° ⇒ tam giác đều.'),
  ]),

  M(22, 'Nghỉ Tết — Bài tập về nhà nhẹ', [
    Q('Ôn lại: (1/2)·(2/3) = ?', ['1/3', '1/6', '3/4', '2/5'], 0, '2/6 = 1/3.'),
    Q('Ôn lại: |−2/5| = ?', ['5/2', '0', '2/5', '−2/5 (giữ nguyên dấu âm)'], 2, '|a| ≥ 0.'),
    Q('Ôn lại: tổng ba góc tam giác?', ['90°', '360°', '180°', '270°'], 2, 'Định lý cơ bản.'),
    Q('Ôn lại: tam giác đều mỗi góc?', ['45°', '60°', '120°', '90°'], 1, '180°/3 = 60°.'),
    Q('Ôn lại: 2^3 · 2^2 = ?', ['2^1', '4^5', '2^6', '2^5'], 3, 'Cộng số mũ.'),
    Q('Ôn lại: √49 = ?', ['7', '14', '8', '6'], 0, '7·7 = 49.'),
  ]),

  M(23, 'Định lí Py-ta-go', [
    Q('Định lí Py-ta-go phát biểu cho?', ['Tam giác đều', 'Tam giác cân', 'Mọi tam giác', 'Tam giác vuông'], 3, 'Chỉ áp dụng cho tam giác vuông.'),
    Q('Trong tam giác vuông cạnh huyền c, hai cạnh góc vuông a, b: c^2 = ?', ['a + b (lấy tổng thay vì tổng bình phương)', 'a^2 + b^2', 'a^2 − b^2', '2ab'], 1, 'c² = a² + b².'),
    Q('Tam giác vuông có hai cạnh góc vuông 3 và 4, cạnh huyền?', ['5', '6', '7', '√25 = 5'], 0, '3² + 4² = 25 ⇒ c = 5.'),
    Q('Tam giác vuông có cạnh huyền 13, một cạnh góc vuông 5, cạnh còn lại?', ['10', '8', '12', '14'], 2, '13² − 5² = 144 ⇒ √144 = 12.'),
    Q('Bộ ba (5; 12; 13) là?', ['Bộ ba bất kỳ', 'Bộ ba số nguyên tố', 'Bộ ba Pythagore', 'Không liên quan'], 2, '5² + 12² = 25 + 144 = 169 = 13².'),
    Q('Định lí Py-ta-go đảo dùng để?', ['Tính diện tích', 'Tính chu vi', 'Tìm trung tuyến', 'Nhận biết tam giác vuông'], 3, 'Nếu a² + b² = c² thì tam giác vuông tại đỉnh đối cạnh c.'),
  ]),

  M(24, 'Đường trung trực — Đường trung tuyến', [
    Q('Đường trung trực của đoạn thẳng là?', ['Đường đi qua hai đầu mút', 'Đường vuông góc tại trung điểm', 'Đường phân giác', 'Đường song song'], 1, 'Trung trực ⊥ và đi qua trung điểm.'),
    Q('Điểm thuộc trung trực của đoạn AB có tính chất?', ['Cách đều A và B', 'Cách trung điểm 1 cm', 'Trùng với A', 'Trùng với B'], 0, 'Tính chất đặc trưng.'),
    Q('Đường trung tuyến của tam giác đi từ?', ['Đỉnh đến chân đường cao', 'Đỉnh đến trung điểm cạnh đối diện', 'Đỉnh đến chân phân giác', 'Trung điểm đến trung điểm'], 1, 'Định nghĩa trung tuyến.'),
    Q('Ba đường trung tuyến đồng quy tại điểm gọi là?', ['Tâm đường tròn ngoại tiếp', 'Tâm đường tròn nội tiếp', 'Trọng tâm', 'Trực tâm'], 2, 'Trọng tâm.'),
    Q('Trọng tâm chia mỗi trung tuyến theo tỉ số nào tính từ đỉnh?', ['3:1', '1:1', '2:1', '1:2'], 2, 'AG:GM = 2:1.'),
    Q('Ba đường trung trực của tam giác đồng quy tại tâm đường tròn?', ['Nội tiếp', 'Bàng tiếp', 'Trọng tâm', 'Ngoại tiếp'], 3, 'Tâm đường tròn đi qua ba đỉnh.'),
  ]),

  M(25, 'Đường phân giác — Đường cao trong tam giác', [
    Q('Ba đường phân giác trong của tam giác đồng quy tại?', ['Trực tâm', 'Trọng tâm', 'Tâm đường tròn nội tiếp', 'Tâm đường tròn ngoại tiếp'], 2, 'Cách đều ba cạnh ⇒ tâm nội tiếp.'),
    Q('Điểm thuộc tia phân giác của một góc có tính chất?', ['Là trung điểm', 'Cách đều đỉnh', 'Trùng đỉnh', 'Cách đều hai cạnh của góc'], 3, 'Tính chất đặc trưng.'),
    Q('Đường cao của tam giác xuất phát từ?', ['Trung điểm cạnh', 'Trung điểm cạnh đối', 'Đỉnh, vuông góc với cạnh đối diện', 'Tâm đường tròn'], 2, 'Vuông góc từ đỉnh hạ xuống cạnh đối diện.'),
    Q('Ba đường cao của tam giác đồng quy tại?', ['Trực tâm', 'Trọng tâm', 'Tâm nội tiếp', 'Tâm ngoại tiếp'], 0, 'Gọi là trực tâm.'),
    Q('Trong tam giác cân tại A, đường cao từ A đồng thời là?', ['Trung tuyến và phân giác', 'Chỉ trung tuyến', 'Đường trung bình', 'Chỉ phân giác'], 0, 'Tính chất tam giác cân: trùng nhiều đường.'),
    Q('Tam giác đều có 4 điểm đặc biệt (trọng tâm, trực tâm, nội, ngoại) ?', ['Không tồn tại', 'Khác nhau', 'Trùng nhau', 'Thẳng hàng'], 2, 'Đều ⇒ 4 điểm trùng làm một.'),
  ]),

  M(26, 'Quan hệ giữa các yếu tố trong tam giác', [
    Q('Trong tam giác, cạnh đối diện góc lớn hơn thì?', ['Lớn hơn', 'Không liên quan', 'Nhỏ hơn', 'Bằng nhau'], 0, 'Quan hệ giữa cạnh và góc đối diện.'),
    Q('Bất đẳng thức tam giác: a, b, c là ba cạnh tam giác thì?', ['a · b > c', 'a + b < c', 'a + b > c', 'a + b = c'], 2, 'Tổng hai cạnh luôn lớn hơn cạnh còn lại.'),
    Q('Bộ ba nào KHÔNG là độ dài ba cạnh tam giác?', ['(2; 3; 4)', '(1; 2; 3)', '(5; 6; 7)', '(3; 4; 5)'], 1, '1 + 2 = 3 ⇒ không thoả bất đẳng thức tam giác.'),
    Q('Đường vuông góc và đường xiên kẻ từ một điểm đến một đường thẳng: đường nào ngắn nhất?', ['Đường xiên', 'Bằng nhau', 'Đường vuông góc', 'Tuỳ vào vị trí điểm (nhầm có trường hợp khác nhau)'], 2, 'Đường vuông góc luôn ngắn nhất.'),
    Q('Hai đường xiên có hình chiếu lớn hơn thì?', ['Tuỳ theo độ dài đường xiên ban đầu', 'Nhỏ hơn', 'Lớn hơn', 'Bằng nhau'], 2, 'Hình chiếu lớn hơn ⇒ đường xiên lớn hơn.'),
    Q('Trong tam giác vuông, cạnh huyền là cạnh?', ['Bất kỳ trong ba cạnh (chưa nhớ vị trí cạnh huyền)', 'Đối diện góc nhọn', 'Lớn nhất', 'Nhỏ nhất'], 2, 'Cạnh huyền đối diện góc 90° — góc lớn nhất.'),
  ]),

  M(27, 'Biểu thức đại số — Giá trị của biểu thức', [
    Q('Biểu thức 3x + 5 khi x = 2 có giá trị?', ['6', '13', '8', '11'], 3, '3·2 + 5 = 11.'),
    Q('Tính giá trị của 2x − y khi x = 3, y = 4?', ['−2 (nhầm dấu khi tính 2x − y)', '10', '2', '−10 (cộng nhầm 2·3 + 4 và đổi dấu)'], 2, '2·3 − 4 = 2.'),
    Q('Trong biểu thức 5x²y, hệ số là?', ['x²y', '2', '5', '5x'], 2, 'Hệ số là phần số.'),
    Q('Phần biến của 5x²y là?', ['5x²', 'y (chỉ lấy một biến)', 'x²y', '5'], 2, 'Phần biến gồm các chữ và số mũ.'),
    Q('Đơn thức là biểu thức gồm?', ['Tích của số với biến (luỹ thừa)', 'Tổng các biến', 'Hiệu các biến', 'Phân số đại số'], 0, 'Định nghĩa đơn thức.'),
    Q('Trong các biểu thức: 3x; 2x + 1; 5; xy. Có mấy đơn thức?', ['4', '1', '2', '3'], 3, '3x, 5, xy là đơn thức (3 cái); 2x+1 là đa thức.'),
  ]),

  M(28, 'Đa thức một biến — Sắp xếp', [
    Q('Đa thức một biến x là biểu thức gồm?', ['Tổng các đơn thức của biến x', 'Phân số chứa x', 'Tích các đơn thức', 'Số nguyên'], 0, 'Định nghĩa đa thức 1 biến.'),
    Q('Bậc của đa thức 3x² − 5x + 1 là?', ['3', '2', '1', '0'], 1, 'Bậc = bậc cao nhất của hạng tử = 2.'),
    Q('Hệ số cao nhất của 4x³ + 2x − 7 là?', ['2', '3', '4', '−7 (nhầm với hệ số tự do)'], 2, 'Hệ số của số mũ cao nhất (x³).'),
    Q('Hệ số tự do của 5x² − 3x + 8 là?', ['5', '−3 (nhầm với hệ số của x)', '0', '8'], 3, 'Hệ số tự do = hạng tử không chứa biến.'),
    Q('Sắp xếp 2x − 3x² + 5 + x³ theo luỹ thừa giảm của biến?', ['x³ − 3x² + 2x + 5', '5 + 2x − 3x² + x³', '−3x² + x³ + 2x + 5', '2x + 5 − 3x² + x³'], 0, 'Giảm dần theo bậc: x³, x², x, hằng.'),
    Q('Đa thức 0 (đa thức không) có bậc?', ['1', 'Không xác định', 'Vô cùng lớn', '0'], 1, 'Quy ước: đa thức 0 không có bậc.'),
  ]),

  M(29, 'Cộng, trừ đa thức một biến', [
    Q('(2x² + 3x) + (x² − 5x) = ?', ['3x² + 2x', '3x² − 2x', 'x² + 8x', '3x² + 8x'], 1, 'Cộng hệ số đồng dạng: 3x² + (−2x).'),
    Q('(5x² − 4x + 3) − (2x² + x − 1) = ?', ['3x² − 5x + 2', '3x² − 5x + 4', '3x² − 3x + 4', '7x² − 3x + 2'], 1, 'Bỏ ngoặc đổi dấu rồi gộp.'),
    Q('Hai đơn thức nào đồng dạng?', ['3x² và 5x²', '3x và 3x²', 'xy và x²', '2x và 2y'], 0, 'Cùng phần biến và cùng số mũ.'),
    Q('Tổng 4x − 2x + 7x = ?', ['8x', '11x', '13x', '9x'], 3, '(4 − 2 + 7)x = 9x.'),
    Q('Cộng hai đa thức P(x) = x³ và Q(x) = −x³ + 2 ta được?', ['x³ + 2', '2', '2x³', '−x³ + 2'], 1, '0·x³ + 2 = 2.'),
    Q('Hiệu (x² − 1) − (x² + 1) = ?', ['2', '−2', '0', '2x²'], 1, 'x² − 1 − x² − 1 = −2.'),
  ]),

  M(30, 'Nhân đa thức một biến', [
    Q('x · x² = ?', ['x²', 'x^(1·2)', 'x³', '2x²'], 2, 'Cộng số mũ.'),
    Q('2x(x + 3) = ?', ['2x² + 3', '2x + 6', '3x²', '2x² + 6x'], 3, 'Phân phối: 2x·x + 2x·3.'),
    Q('(x + 1)(x − 1) = ?', ['x² + 2x − 1', 'x² − 1', 'x² + 1', 'x² − 2x + 1'], 1, 'Hằng đẳng thức hiệu hai bình phương.'),
    Q('(x + 2)(x + 3) = ?', ['x² + 6x + 5', 'x² + 5x + 6', 'x² + 2x + 3', 'x² + 6'], 1, 'x² + (2+3)x + 2·3.'),
    Q('3x²·5x = ?', ['15x³', '8x³', '15x²', '15x^5'], 0, '3·5 = 15; x²·x = x³.'),
    Q('(2x − 1)·x = ?', ['2x² − x', '2x² − 1', '2x − x', 'x²'], 0, 'Phân phối.'),
  ]),

  M(31, 'Chia đa thức cho đơn thức', [
    Q('(6x²) : (3x) = ?', ['3x', '6x', '2x', '2'], 2, '6/3 = 2; x²/x = x.'),
    Q('(12x³ − 6x²) : (3x) = ?', ['4x² − 2x', '9x² − 3x', '4x³ − 2x²', '4x² − 2'], 0, 'Chia từng hạng tử cho 3x.'),
    Q('(x⁵) : (x²) = ?', ['x^(5/2)', 'x³', 'x⁷', 'x²'], 1, 'Trừ số mũ: 5 − 2 = 3.'),
    Q('Điều kiện để A : B (đơn thức) là đơn thức?', ['A là số', 'B là số nguyên', 'Mọi B (không cần điều kiện gì)', 'B ≠ 0 và mỗi biến của B đều có mặt trong A với số mũ ≥'], 3, 'A chia hết cho B khi điều kiện về biến và số mũ thoả.'),
    Q('(8x⁴ + 4x²) : (4x²) = ?', ['2x² + 1/x', '2x² + 4', '2x² + 1', '2x³ + 1'], 2, 'Chia từng hạng tử: 8/4 · x²; 4/4.'),
    Q('Quy tắc chia hệ số khi chia hai đơn thức?', ['Trừ (nhầm với quy tắc trừ số mũ)', 'Nhân (nhầm với phép chia phân số)', 'Cộng (nhầm với quy tắc nhân lũy thừa)', 'Chia'], 3, 'Chia hệ số, trừ số mũ.'),
  ]),

  M(32, 'Nghiệm của đa thức một biến', [
    Q('x = a là nghiệm của P(x) khi?', ['P(a) = 0', 'P(a) < 0', 'P(a) ≠ 0', 'P(a) > 0'], 0, 'Định nghĩa nghiệm.'),
    Q('Nghiệm của P(x) = x − 3 là?', ['x = 0', 'x = 1', 'x = 3', 'x = −3'], 2, 'x − 3 = 0 ⇒ x = 3.'),
    Q('Nghiệm của P(x) = 2x + 4 là?', ['x = −4', 'x = 4', 'x = −2', 'x = 2'], 2, '2x + 4 = 0 ⇒ x = −2.'),
    Q('Đa thức P(x) = x² − 1 có nghiệm?', ['Chỉ x = −1', 'x = ±1', 'Vô nghiệm', 'Chỉ x = 1'], 1, 'x² = 1 ⇒ x = ±1.'),
    Q('Đa thức P(x) = x² + 1 có nghiệm thực không?', ['Không có', 'Có x = ±1', 'Có x = −1', 'Có x = 1'], 0, 'x² ≥ 0 ⇒ x² + 1 ≥ 1 > 0.'),
    Q('Đa thức bậc n có tối đa bao nhiêu nghiệm?', ['n + 1 (nhầm tính cả nghiệm bội)', '2n', 'n', 'n − 1 (nhầm bớt đi một nghiệm)'], 2, 'Định lí: tối đa n nghiệm.'),
  ]),

  M(33, 'Tổng hợp đại số — bài toán tỉ lệ', [
    Q('Chia 60 thành ba phần tỉ lệ 1 : 2 : 3. Phần lớn nhất?', ['10', '20', '30', '40'], 2, 'Tổng 6 phần ⇒ mỗi phần 10; 3·10 = 30.'),
    Q('Hai số tỉ lệ với 3 và 5, hiệu bằng 10. Số lớn?', ['15', '20', '25', '10'], 2, 'k(5 − 3) = 10 ⇒ k = 5; số lớn = 25.'),
    Q('Diện tích tam giác đáy 6 cm, chiều cao 4 cm là?', ['6 cm²', '12 cm²', '24 cm²', '10 cm²'], 1, 'S = (1/2)·6·4 = 12.'),
    Q('Cho y tỉ lệ thuận x, x = 4 ⇒ y = 12. Khi x = 7, y = ?', ['7', '12', '21', '28'], 2, 'k = 3; y = 3·7 = 21.'),
    Q('Phân số 36/48 rút gọn?', ['3/4', '4/5', '6/8', '2/3'], 0, 'ƯCLN(36,48) = 12.'),
    Q('Tổng các góc trong một tứ giác bằng?', ['180°', '540°', '360°', '270°'], 2, 'Tổng góc tứ giác = 360°.'),
  ]),

  M(34, 'Tổng hợp hình học', [
    Q('Tam giác vuông cân có hai góc nhọn mỗi góc?', ['30°', '90°', '45°', '60°'], 2, 'Vuông cân ⇒ hai góc nhọn bằng nhau và tổng 90°.'),
    Q('Trong tam giác ABC vuông tại A, BC² = ?', ['AB² + AC²', 'AB + AC', '2·AB·AC', 'AB² − AC²'], 0, 'Định lí Pythagoras.'),
    Q('Tam giác đều cạnh 6 cm có chu vi?', ['36 cm', '24 cm', '12 cm', '18 cm'], 3, '3·6 = 18.'),
    Q('Trong tam giác cân, đường trung trực của cạnh đáy đồng thời là?', ['Đường song song với đáy', 'Đường trung bình', 'Đường vuông góc với cạnh bên', 'Đường cao và phân giác từ đỉnh'], 3, 'Tính chất đặc biệt của tam giác cân.'),
    Q('Bộ ba (6; 8; 10) là cạnh tam giác?', ['Cân không vuông', 'Đều (nhầm ba cạnh đều nhau)', 'Không phải tam giác', 'Vuông'], 3, '6² + 8² = 100 = 10² ⇒ vuông.'),
    Q('Trọng tâm tam giác cách mỗi đỉnh bao nhiêu phần đường trung tuyến?', ['3/4', '1/2', '2/3', '1/3'], 2, 'Khoảng cách từ trọng tâm tới đỉnh = 2/3 trung tuyến.'),
  ]),

  M(35, 'Ôn tập học kì II — Tổng hợp cả năm', [
    Q('(−3/4) · (4/5) = ?', ['−12/20', '3/5', '−3/5', '12/20'], 2, 'Rút gọn: −12/20 = −3/5.'),
    Q('√(64) − √(36) = ?', ['2', '10', '8', '4'], 0, '8 − 6 = 2.'),
    Q('Đại lượng x, y tỉ lệ nghịch, x·y = 36. Khi x = 9, y = ?', ['9', '3', '4', '6'], 2, 'y = 36/9 = 4.'),
    Q('Nghiệm của 3x − 12 = 0 là?', ['x = 4', 'x = 9', 'x = 12', 'x = 3'], 0, '3x = 12 ⇒ x = 4.'),
    Q('Tam giác có ba cạnh 5; 12; 13 là tam giác?', ['Không tồn tại', 'Cân không vuông', 'Vuông', 'Đều (nhầm ba cạnh bằng nhau)'], 2, '5² + 12² = 169 = 13².'),
    Q('Bậc của đa thức 7x³ + 2x − 5 là?', ['3', '7', '1', '2'], 0, 'Bậc cao nhất 3.'),
  ]),
];

export const S7TOAN_SCENARIOS = indexBy(S7TOAN_WEEKS);
