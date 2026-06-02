// ============================================================
// Lớp 9 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 — năm thi vào lớp 10.
// Đại số: căn bậc 2-3, hàm số bậc nhất, hàm số y=ax², PT bậc 2, hệ PT.
// Hình học: hệ thức lượng tam giác vuông, đường tròn, hình trụ–nón–cầu.
// ID prefix: "S9TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9TOAN', 'toan', n, title, qs, opts);

export const S9TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Căn bậc hai — Định nghĩa và tính chất', [
    Q('Căn bậc hai số học của 25 là?', ['5', '−5', '±5', '625'], 0, 'Căn bậc hai số học của a ≥ 0 là số không âm x sao cho x² = a; với 25 là 5.'),
    Q('√81 bằng?', ['9', '−9', '±9', '40,5'], 0, '√81 = 9 vì 9² = 81 và lấy giá trị không âm.'),
    Q('Điều kiện để √(x − 3) xác định là?', ['x ≥ 3', 'x > 3', 'x ≤ 3', 'x ≠ 3'], 0, 'Biểu thức dưới căn bậc hai phải ≥ 0: x − 3 ≥ 0 ⇔ x ≥ 3.'),
    Q('√((−7)²) bằng?', ['−7', '7', '49', '±7'], 1, '√(a²) = |a|; |−7| = 7.'),
    Q('So sánh: √5 và 2?', ['√5 < 2', '√5 = 2', '√5 > 2', 'Không so sánh được'], 2, '2 = √4 < √5 vì 4 < 5.'),
    Q('Tính √0,49?', ['0,7', '0,07', '7', '0,49'], 0, '0,7² = 0,49 nên √0,49 = 0,7.'),
  ]),

  M(2, 'Liên hệ phép nhân, phép chia và căn bậc hai', [
    Q('√(a·b) bằng (a, b ≥ 0)?', ['√a + √b', '√a · √b', '√a − √b', 'a·b'], 1, 'Quy tắc khai phương một tích: √(ab) = √a · √b với a,b ≥ 0.'),
    Q('√16 · √25 = ?', ['20', '40', '400', '41'], 0, '√16·√25 = 4·5 = 20.'),
    Q('√(49/9) bằng?', ['7/3', '3/7', '7/9', '49/3'], 0, '√(a/b) = √a/√b = 7/3.'),
    Q('Rút gọn √50?', ['5√2', '2√5', '25√2', '√50'], 0, '√50 = √(25·2) = 5√2.'),
    Q('√72 : √8 = ?', ['9', '3', '8', '64'], 1, '√72/√8 = √(72/8) = √9 = 3.'),
    Q('√(12) · √(3) = ?', ['6', '36', '√15', '4'], 0, '√12·√3 = √36 = 6.'),
  ]),

  M(3, 'Biến đổi đơn giản biểu thức chứa căn bậc hai', [
    Q('Đưa thừa số ra ngoài dấu căn: √(45)?', ['3√5', '5√3', '9√5', '√45'], 0, '√45 = √(9·5) = 3√5.'),
    Q('Đưa thừa số vào trong dấu căn: 3√2 = ?', ['√6', '√18', '√12', '√9'], 1, '3√2 = √(9·2) = √18.'),
    Q('Trục căn thức ở mẫu: 1/√3 = ?', ['√3/3', '3/√3', '1/3', '√3'], 0, '1/√3 = √3/(√3·√3) = √3/3.'),
    Q('Khử mẫu: √(2/5) = ?', ['√10/5', '2/√5', '√2/5', '√10/25'], 0, '√(2/5) = √2/√5 = √2·√5/5 = √10/5.'),
    Q('Rút gọn: 1/(√2 − 1) = ?', ['√2 − 1', '√2 + 1', '1 − √2', '−√2 − 1'], 1, 'Nhân liên hợp: (√2+1)/((√2−1)(√2+1)) = (√2+1)/1 = √2+1.'),
    Q('Rút gọn 2√3 + √12?', ['3√3', '4√3', '5√3', '√15'], 1, '√12 = 2√3 ⇒ 2√3 + 2√3 = 4√3.'),
  ]),

  M(4, 'Căn bậc ba', [
    Q('Căn bậc ba của 27 là?', ['3', '9', '−3', '±3'], 0, '∛27 = 3 vì 3³ = 27.'),
    Q('∛(−8) bằng?', ['2', '−2', 'Không có nghĩa', '±2'], 1, '(−2)³ = −8 nên ∛(−8) = −2; căn bậc ba có nghiệm với mọi số.'),
    Q('∛125 + ∛(−27) = ?', ['8', '2', '−2', '−8'], 1, '∛125 = 5, ∛(−27) = −3 ⇒ 5 + (−3) = 2.'),
    Q('Tính ∛64?', ['4', '8', '16', '32'], 0, '4³ = 64.'),
    Q('So với căn bậc 2, căn bậc ba khác ở điểm nào?', ['Luôn có nghiệm với mọi số thực', 'Chỉ có với số dương', 'Cho 2 giá trị', 'Không xác định với số âm'], 0, 'Căn bậc ba xác định với mọi số thực (gồm cả số âm) và chỉ có 1 giá trị.'),
    Q('∛(1/8) bằng?', ['1/2', '1/4', '1/3', '2'], 0, '(1/2)³ = 1/8.'),
  ]),

  M(5, 'Ôn tập chương Căn bậc hai', [
    Q('Rút gọn √48 − √27 + √12?', ['3√3', '4√3', '5√3', '7√3'], 0, '√48=4√3; √27=3√3; √12=2√3 ⇒ 4√3 − 3√3 + 2√3 = 3√3.'),
    Q('Giải phương trình √x = 5?', ['x = 5', 'x = 25', 'x = √5', 'Vô nghiệm'], 1, 'Bình phương hai vế (x ≥ 0): x = 25.'),
    Q('Giá trị nhỏ nhất của √(x² + 4) là?', ['0', '2', '4', '√4'], 1, 'x² ≥ 0 ⇒ x² + 4 ≥ 4 ⇒ √… ≥ 2; đạt tại x = 0.'),
    Q('Rút gọn √((3−√10)²)?', ['3 − √10', '√10 − 3', '3 + √10', '−3 − √10'], 1, '√(a²) = |a|; vì √10 > 3 nên = √10 − 3.'),
    Q('Cho A = √x + 1, điều kiện xác định?', ['x ≥ 0', 'x > 0', 'x ≥ −1', 'x ∈ R'], 0, 'Căn √x xác định khi x ≥ 0.'),
    Q('Tính (√5 + √3)(√5 − √3)?', ['2', '8', '√15', '5 − √3'], 0, 'Hằng đẳng thức: (a+b)(a−b) = a² − b² = 5 − 3 = 2.'),
  ]),

  M(6, 'Hàm số bậc nhất y = ax + b — Định nghĩa', [
    Q('Hàm số nào sau là hàm bậc nhất?', ['y = x² + 1', 'y = 2x − 3', 'y = 1/x', 'y = √x'], 1, 'Dạng y = ax + b với a ≠ 0.'),
    Q('Trong y = ax + b, b gọi là?', ['Hệ số góc', 'Tung độ gốc', 'Biến số', 'Hằng số biến'], 1, 'b là tung độ gốc (giao điểm với trục Oy); a là hệ số góc.'),
    Q('Điều kiện để y = (m−2)x + 3 là hàm bậc nhất?', ['m = 2', 'm ≠ 2', 'm > 2', 'm < 2'], 1, 'Cần a = m − 2 ≠ 0 ⇒ m ≠ 2.'),
    Q('Hàm y = −3x + 5 đồng biến hay nghịch biến?', ['Đồng biến', 'Nghịch biến', 'Hằng', 'Tùy x'], 1, 'a = −3 < 0 ⇒ hàm nghịch biến trên R.'),
    Q('Tính y khi x = 2 với y = 4x − 1?', ['7', '8', '9', '6'], 0, 'y = 4·2 − 1 = 7.'),
    Q('Đồ thị hàm bậc nhất luôn là?', ['Đường thẳng', 'Parabol', 'Hyperbol', 'Đường tròn'], 0, 'Đồ thị y = ax + b (a ≠ 0) là đường thẳng.'),
  ]),

  M(7, 'Đường thẳng — Hệ số góc, đồ thị', [
    Q('Hệ số góc của đường thẳng y = 3x − 5 là?', ['3', '−5', '−3', '5'], 0, 'Hệ số của x: a = 3.'),
    Q('Đường thẳng y = ax + b cắt Oy tại?', ['(0; b)', '(b; 0)', '(0; a)', '(a; 0)'], 0, 'Khi x = 0 ⇒ y = b; điểm (0; b) thuộc Oy.'),
    Q('Cho 2 đường thẳng song song khi?', ['a = a′ và b = b′', 'a = a′ và b ≠ b′', 'a ≠ a′', 'a·a′ = −1'], 1, 'Cùng hệ số góc, khác tung độ gốc thì song song.'),
    Q('Đường thẳng y = 2x + 1 và y = −x/2 + 3 có vị trí tương đối?', ['Song song', 'Cắt nhau và vuông góc', 'Trùng nhau', 'Cắt nhau (không vuông góc)'], 1, 'a·a′ = 2·(−1/2) = −1 ⇒ vuông góc.'),
    Q('Đường thẳng đi qua gốc tọa độ có dạng?', ['y = ax', 'y = ax + b (b ≠ 0)', 'y = b', 'x = 0'], 0, 'Qua O(0;0) ⇒ b = 0 ⇒ y = ax.'),
    Q('Góc tạo bởi y = x với chiều dương Ox là?', ['30°', '45°', '60°', '90°'], 1, 'tan α = a = 1 ⇒ α = 45°.'),
  ]),

  M(8, 'Phương trình đường thẳng — Bài toán xác định', [
    Q('Đường thẳng đi qua A(1; 2) và B(2; 5) có hệ số góc?', ['1', '2', '3', '5'], 2, 'a = (5−2)/(2−1) = 3.'),
    Q('Viết PT đường thẳng có a = 2 và đi qua (1; 3)?', ['y = 2x + 1', 'y = 2x − 1', 'y = 2x + 3', 'y = 2x'], 0, 'y = 2x + b; thay x=1, y=3 ⇒ b = 1.'),
    Q('Đường thẳng song song với y = 3x − 1 và đi qua (0; 4) là?', ['y = 3x + 4', 'y = −3x + 4', 'y = 3x − 4', 'y = 4x + 3'], 0, 'Song song ⇒ a = 3; qua (0;4) ⇒ b = 4.'),
    Q('Cho y = (m+1)x − 2. Để đường thẳng song song với y = 3x + 5 thì m = ?', ['1', '2', '3', '4'], 1, 'm + 1 = 3 ⇒ m = 2 (và tung độ gốc khác 5 — thỏa).'),
    Q('Đường thẳng y = 2x − 4 cắt Ox tại?', ['(2; 0)', '(0; −4)', '(−2; 0)', '(0; 2)'], 0, 'y = 0 ⇒ 2x = 4 ⇒ x = 2.'),
    Q('Khoảng cách từ điểm A(0; 3) đến đường thẳng y = 5 là?', ['2', '3', '5', '8'], 0, '|5 − 3| = 2.'),
  ]),

  M(9, 'Hệ phương trình bậc nhất hai ẩn — Khái niệm', [
    Q('Phương trình nào là PT bậc nhất hai ẩn?', ['2x + 3y = 5', 'x² + y = 1', 'xy = 1', 'x + 1/y = 2'], 0, 'Dạng ax + by = c (a hoặc b ≠ 0); 2x + 3y = 5 thỏa.'),
    Q('Cặp số (1; 2) có là nghiệm của 2x + y = 4 không?', ['Có', 'Không', 'Tùy x', 'Vô nghiệm'], 0, 'Thay vào: 2·1 + 2 = 4 ⇒ đúng.'),
    Q('Số nghiệm của PT bậc nhất hai ẩn?', ['1', '2', 'Vô số', 'Không có'], 2, 'PT bậc nhất 2 ẩn có vô số nghiệm; biểu diễn bằng đường thẳng.'),
    Q('Hệ 2 PT bậc nhất 2 ẩn có nghiệm duy nhất khi?', ['2 đường thẳng cắt nhau', 'Song song', 'Trùng nhau', 'Cùng vuông góc Ox'], 0, 'Cắt nhau ⇒ 1 nghiệm; song song ⇒ vô nghiệm; trùng ⇒ vô số.'),
    Q('Hệ {x + y = 3; x − y = 1} có nghiệm?', ['(1; 2)', '(2; 1)', '(3; 0)', '(0; 3)'], 1, 'Cộng vế: 2x = 4 ⇒ x = 2; y = 1.'),
    Q('Cách giải hệ nào dùng cho lớp 9?', ['Thế hoặc cộng đại số', 'Lượng giác', 'Đạo hàm', 'Tích phân'], 0, 'Lớp 9 dùng phương pháp thế và phương pháp cộng đại số.'),
  ]),

  M(10, 'Giải hệ PT — Phương pháp thế, cộng đại số', [
    Q('Giải hệ {2x + y = 5; x − y = 1} bằng cộng đại số. x = ?', ['1', '2', '3', '4'], 1, 'Cộng vế: 3x = 6 ⇒ x = 2 ⇒ y = 1.'),
    Q('Hệ {x = 2y; x + y = 6} có y = ?', ['1', '2', '3', '4'], 1, 'Thế x = 2y vào: 2y + y = 6 ⇒ y = 2.'),
    Q('Hệ {x + y = 4; 2x + 2y = 8} có?', ['1 nghiệm', 'Vô nghiệm', 'Vô số nghiệm', 'Không xác định'], 2, 'PT 2 = 2·PT 1 ⇒ trùng nhau ⇒ vô số nghiệm.'),
    Q('Hệ {x + y = 3; x + y = 5} có?', ['1 nghiệm', 'Vô nghiệm', 'Vô số nghiệm', '2 nghiệm'], 1, 'Cùng hệ số nhưng vế phải khác ⇒ song song ⇒ vô nghiệm.'),
    Q('Giải hệ {3x − y = 5; x + 2y = 4}. y = ?', ['1', '−1', '2', '0'], 0, 'Từ PT1: y = 3x − 5; thế vào PT2: x + 2(3x−5) = 4 ⇒ 7x = 14 ⇒ x = 2; y = 1.'),
    Q('Bài toán: Tổng hai số là 20, hiệu là 6. Số lớn là?', ['8', '10', '12', '13'], 3, 'x + y = 20; x − y = 6 ⇒ x = 13, y = 7.'),
  ]),

  M(11, 'Giải bài toán bằng lập hệ phương trình', [
    Q('Một sân chữ nhật có chu vi 40m, dài hơn rộng 4m. Diện tích là?', ['80 m²', '84 m²', '96 m²', '100 m²'], 2, 'x + y = 20; x − y = 4 ⇒ x = 12, y = 8 ⇒ S = 96.'),
    Q('Hai vòi cùng chảy đầy bể trong 6 giờ. Vòi 1 chảy một mình mất 10 giờ. Vòi 2 mất bao lâu?', ['12 giờ', '15 giờ', '20 giờ', '4 giờ'], 1, '1/10 + 1/x = 1/6 ⇒ 1/x = 1/6 − 1/10 = 2/30 ⇒ x = 15.'),
    Q('Hai xe khởi hành cùng lúc ngược chiều cách nhau 120 km, gặp nhau sau 2 giờ. Tổng vận tốc là?', ['30 km/h', '60 km/h', '120 km/h', '240 km/h'], 1, '(v1 + v2)·2 = 120 ⇒ tổng = 60 km/h.'),
    Q('Tổng 2 số bằng 50, gấp 4 lần số nhỏ kém số lớn 5. Số nhỏ là?', ['9', '10', '11', '12'], 0, 'x + y = 50; 4x = y + ... thực ra: y − 4x = −5 ⇒ giải: x = 9, y = 41. Kiểm: 4·9=36; 41−36=5 ✓.'),
    Q('Mẹ hơn con 25 tuổi. Sau 5 năm nữa tuổi mẹ gấp đôi tuổi con. Con bao nhiêu tuổi hiện nay?', ['15', '20', '25', '30'], 1, 'm = c + 25; m + 5 = 2(c + 5) ⇒ c + 30 = 2c + 10 ⇒ c = 20.'),
    Q('Một số có hai chữ số, tổng 2 chữ số là 7. Nếu đổi chỗ thì giảm 27. Số đó là?', ['25', '34', '43', '52'], 3, 'a+b=7; 10a+b − (10b+a) = 27 ⇒ a−b = 3 ⇒ a=5, b=2 ⇒ 52.'),
  ]),

  M(12, 'Hệ thức lượng tam giác vuông — Định lý Pytago + tỉ số', [
    Q('Trong tam giác vuông ABC tại A, hệ thức Pytago là?', ['BC² = AB² + AC²', 'AB² = BC² + AC²', 'AB·AC = BC²', 'AB + AC = BC'], 0, 'Cạnh huyền BC, hai cạnh góc vuông AB, AC: BC² = AB² + AC².'),
    Q('Tam giác vuông có 2 cạnh góc vuông 3 và 4. Cạnh huyền?', ['5', '7', '6', '12'], 0, '√(9+16) = √25 = 5.'),
    Q('sin α của góc nhọn α trong tam giác vuông bằng?', ['đối/huyền', 'kề/huyền', 'đối/kề', 'huyền/đối'], 0, 'Định nghĩa: sin = cạnh đối / cạnh huyền.'),
    Q('cos 60° bằng?', ['1/2', '√2/2', '√3/2', '1'], 0, 'Giá trị đặc biệt: cos 60° = 1/2.'),
    Q('tan 45° bằng?', ['0', '1', '√3', '1/√3'], 1, 'tan 45° = sin 45°/cos 45° = 1.'),
    Q('Trong tam giác vuông tại A, AH là đường cao. Hệ thức nào đúng?', ['AH² = BH·CH', 'AH = BH + CH', 'AH² = AB·AC', 'AH·BC = AB + AC'], 0, 'Hệ thức đường cao: AH² = BH·CH (tích 2 hình chiếu).'),
  ]),

  M(13, 'Tỉ số lượng giác — Bài tập', [
    Q('sin² α + cos² α bằng?', ['0', '1', '2', 'sin 2α'], 1, 'Đẳng thức Pytago lượng giác: sin² + cos² = 1.'),
    Q('Nếu sin α = 3/5 và α nhọn thì cos α = ?', ['3/5', '4/5', '5/3', '5/4'], 1, 'cos α = √(1 − 9/25) = √(16/25) = 4/5.'),
    Q('tan α · cot α = ?', ['0', '1', 'sin α', 'cos α'], 1, 'tan và cot là nghịch đảo nhau ⇒ tích = 1.'),
    Q('sin 30° = ?', ['1/2', '√2/2', '√3/2', '1'], 0, 'sin 30° = 1/2 (giá trị đặc biệt).'),
    Q('Cho tam giác vuông tại A, AB = 6, AC = 8. tan B = ?', ['3/4', '4/3', '6/10', '8/10'], 1, 'tan B = đối/kề = AC/AB = 8/6 = 4/3.'),
    Q('Một cột cờ cao 5m, bóng đổ dài 5m. Góc tia nắng so với mặt đất?', ['30°', '45°', '60°', '90°'], 1, 'tan α = 5/5 = 1 ⇒ α = 45°.'),
  ]),

  M(14, 'Đường tròn — Định nghĩa, dây cung, đường kính', [
    Q('Đường tròn (O; R) là tập hợp các điểm?', ['Cách O một khoảng R', 'Nằm trong khoảng cách R từ O', 'Cách O ít nhất R', 'Khoảng cách nhỏ hơn R'], 0, 'Định nghĩa: tập hợp điểm cách O đúng R.'),
    Q('Trong các dây của một đường tròn, dây lớn nhất là?', ['Tiếp tuyến', 'Đường kính', 'Bán kính', 'Cát tuyến'], 1, 'Đường kính = 2R là dây lớn nhất.'),
    Q('Đường kính vuông góc với một dây thì?', ['Đi qua trung điểm của dây', 'Bằng dây ấy', 'Song song với dây', 'Cắt dây tại 2 điểm'], 0, 'Định lý: đường kính ⊥ dây ⇒ đi qua trung điểm dây.'),
    Q('Khoảng cách từ tâm đến dây so với độ dài dây?', ['Tỉ lệ thuận', 'Tỉ lệ nghịch', 'Bằng nhau', 'Không liên quan'], 1, 'Dây càng gần tâm thì càng lớn; dây nhỏ thì cách xa tâm.'),
    Q('Hai dây bằng nhau trong một đường tròn thì cách tâm?', ['Bằng nhau', 'Khác nhau', 'Cùng đi qua tâm', 'Không xác định'], 0, 'Định lý: 2 dây bằng nhau ⇔ cách đều tâm.'),
    Q('Đường tròn (O; 5) có dây AB cách tâm 3. AB = ?', ['4', '6', '8', '10'], 2, 'Nửa dây = √(R² − d²) = √(25 − 9) = 4; AB = 2·4 = 8.'),
  ]),

  M(15, 'Tiếp tuyến của đường tròn', [
    Q('Tiếp tuyến của đường tròn là đường thẳng?', ['Có duy nhất một điểm chung với đường tròn', 'Cắt đường tròn tại 2 điểm', 'Không cắt đường tròn', 'Đi qua tâm'], 0, 'Tiếp tuyến: chỉ có 1 điểm chung (tiếp điểm).'),
    Q('Tính chất tiếp tuyến tại tiếp điểm?', ['Đi qua tâm', 'Vuông góc với bán kính tại tiếp điểm', 'Song song bán kính', 'Bằng bán kính'], 1, 'Tiếp tuyến ⊥ bán kính tại tiếp điểm.'),
    Q('Hai tiếp tuyến cùng xuất phát từ một điểm ngoài đường tròn thì?', ['Bằng nhau và đường nối điểm đó với tâm là phân giác', 'Vuông góc nhau', 'Song song nhau', 'Cắt nhau tại tâm'], 0, 'Định lý 2 tiếp tuyến cắt nhau: bằng nhau; tia từ điểm đó đến tâm là phân giác.'),
    Q('Đường thẳng d cách tâm O khoảng d. Tiếp tuyến khi?', ['d < R', 'd = R', 'd > R', 'd = 0'], 1, 'Khoảng cách = R ⇒ tiếp xúc.'),
    Q('Hai đường tròn tiếp xúc ngoài khi khoảng cách 2 tâm?', ['= R + r', '= R − r', '> R + r', '< R − r'], 0, 'OO′ = R + r ⇒ tiếp xúc ngoài.'),
    Q('Đường tròn nội tiếp tam giác là?', ['Đi qua 3 đỉnh', 'Tiếp xúc 3 cạnh trong', 'Tiếp xúc 3 đường cao', 'Đi qua trung điểm 3 cạnh'], 1, 'Đường tròn nội tiếp tiếp xúc cả 3 cạnh, tâm là giao 3 phân giác trong.'),
  ]),

  M(16, 'Vị trí tương đối — đường thẳng và đường tròn / 2 đường tròn', [
    Q('Đường thẳng cắt đường tròn tại 2 điểm khi?', ['d < R', 'd = R', 'd > R', 'Không có'], 0, 'Cát tuyến: d < R (d: khoảng cách tâm tới đường thẳng).'),
    Q('2 đường tròn tiếp xúc trong khi?', ['OO′ = R + r', 'OO′ = R − r (R > r)', 'OO′ = 0', 'OO′ > R + r'], 1, 'Cùng phía: |R − r|.'),
    Q('2 đường tròn không có điểm chung và ở ngoài nhau khi?', ['OO′ > R + r', 'OO′ < R − r', 'OO′ = R + r', 'OO′ = R − r'], 0, 'Ngoài nhau: OO′ > R + r.'),
    Q('2 đường tròn đồng tâm khi?', ['OO′ = 0', 'OO′ = R', 'OO′ = R + r', 'R = r'], 0, 'Cùng tâm ⇒ OO′ = 0.'),
    Q('Cát tuyến của đường tròn là?', ['Đường thẳng cắt tại 2 điểm', 'Đường thẳng tiếp xúc', 'Đoạn thẳng từ tâm', 'Dây cung'], 0, 'Cát tuyến: đường thẳng cắt đường tròn tại 2 điểm phân biệt.'),
    Q('Cho (O; 5) và (O′; 3) có OO′ = 4. Vị trí?', ['Cắt nhau', 'Tiếp xúc trong', 'Tiếp xúc ngoài', 'Đựng nhau'], 0, '|R − r| = 2 < OO′ = 4 < R + r = 8 ⇒ cắt nhau tại 2 điểm.'),
  ]),

  M(17, 'Ôn tập — Hệ phương trình + Hình học chương I HKI', [
    Q('Giải hệ {3x + y = 7; x − y = 1}. (x; y) = ?', ['(2; 1)', '(1; 2)', '(3; −2)', '(0; 7)'], 0, 'Cộng vế: 4x = 8 ⇒ x = 2; y = 1.'),
    Q('Trục căn ở mẫu: 6/(2 + √3) = ?', ['12 − 6√3', '2 − √3', '6(2−√3)', '6/(2−√3)'], 2, 'Nhân liên hợp (2 − √3): 6(2−√3)/(4−3) = 6(2−√3).'),
    Q('Tam giác vuông tại A có AB = 6, AC = 8 ⇒ AH (đường cao từ A) = ?', ['4,8', '5', '4', '6'], 0, 'BC = 10; AH = AB·AC/BC = 48/10 = 4,8.'),
    Q('Đường thẳng nào sau song song y = 2x − 3?', ['y = 2x + 1', 'y = −2x + 1', 'y = x + 2', 'y = 3x − 2'], 0, 'Cùng a = 2, khác b ⇒ song song.'),
    Q('Cho (O; 4) và dây CD cách tâm 3. CD = ?', ['2', '2√7', '5', '7'], 1, 'CD/2 = √(16 − 9) = √7 ⇒ CD = 2√7.'),
    Q('Rút gọn √(a²) với a < 0?', ['a', '−a', '|a|', 'Không xác định'], 1, '√(a²) = |a| = −a vì a < 0.'),
  ]),

  M(18, 'Kiểm tra học kỳ I', [
    Q('Rút gọn (√20 − √45 + √80) ?', ['√5', '3√5', '5√5', '7√5'], 1, '√20=2√5; √45=3√5; √80=4√5 ⇒ 2−3+4 = 3 ⇒ 3√5.'),
    Q('Hàm số y = (3 − m)x + 1 nghịch biến khi?', ['m < 3', 'm > 3', 'm = 3', 'm ≠ 3'], 1, 'a = 3 − m < 0 ⇒ m > 3.'),
    Q('Hệ {2x + 3y = 5; 4x − y = 3} có x = ?', ['1', '0', '7/7', '14/14'], 0, 'Giải: từ PT2 y = 4x − 3; thế: 2x + 3(4x−3) = 5 ⇒ 14x = 14 ⇒ x = 1.'),
    Q('sin² 30° + cos² 30° = ?', ['1/2', '√3', '1', '2'], 2, 'Đẳng thức cơ bản sin² + cos² = 1.'),
    Q('Đường tròn (O; R) ngoại tiếp tam giác vuông có cạnh huyền 10 ⇒ R = ?', ['10', '5', '√10', '2,5'], 1, 'Tam giác vuông: cạnh huyền là đường kính ⇒ R = 5.'),
    Q('Đường thẳng y = ax + 3 đi qua A(2; 5). a = ?', ['1', '2', '−1', '0'], 0, '5 = 2a + 3 ⇒ a = 1.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hàm số y = ax² (a ≠ 0) — Định nghĩa, tính chất', [
    Q('Đồ thị hàm số y = ax² (a ≠ 0) là?', ['Đường thẳng', 'Parabol', 'Hyperbol', 'Đường tròn'], 1, 'Đồ thị parabol có đỉnh tại O(0;0).'),
    Q('Khi a > 0, parabol y = ax² có bề lõm hướng?', ['Lên trên', 'Xuống dưới', 'Sang trái', 'Sang phải'], 0, 'a > 0: bề lõm lên; a < 0: bề lõm xuống.'),
    Q('Hàm y = x²/2 nhận giá trị nhỏ nhất tại x = ?', ['0', '1', '−1', 'Không có'], 0, 'Hàm y = ax² (a > 0) min tại x = 0, min = 0.'),
    Q('Tính y khi x = −3 với y = 2x²?', ['18', '−18', '6', '−6'], 0, 'y = 2·9 = 18.'),
    Q('Parabol y = −x² có đỉnh là?', ['(0; 0)', '(1; 1)', '(0; 1)', '(−1; 0)'], 0, 'Đỉnh O(0;0); bề lõm hướng xuống.'),
    Q('Tính giá trị lớn nhất của y = −3x² + 0 (x ∈ R)?', ['0', '3', '−3', 'Không có'], 0, 'a = −3 < 0 ⇒ max y = 0 tại x = 0.'),
  ]),

  M(20, 'Đồ thị hàm số y = ax² — Bài tập', [
    Q('Điểm nào thuộc đồ thị y = x²?', ['(2; 4)', '(2; −4)', '(−1; −1)', '(0; 1)'], 0, 'y = 2² = 4 ⇒ (2;4) thuộc.'),
    Q('Đồ thị y = 2x² đi qua A(1; m). m = ?', ['1', '2', '−2', '4'], 1, 'y = 2·1² = 2.'),
    Q('Hai đồ thị y = x² và y = x + 2 cắt nhau tại các điểm có x là?', ['1 và −2', '−1 và 2', '0 và 1', 'Không cắt'], 1, 'PT: x² = x + 2 ⇔ x² − x − 2 = 0 ⇒ x = −1 hoặc x = 2.'),
    Q('Tọa độ giao điểm của y = x² với y = 4 (x > 0) là?', ['(2; 4)', '(−2; 4)', '(4; 4)', '(1; 4)'], 0, 'x² = 4, x > 0 ⇒ x = 2.'),
    Q('Hàm y = 3x² đồng biến trên?', ['(−∞; 0)', '(0; +∞)', 'Toàn R', 'Không'], 1, 'a > 0: nghịch biến trên (−∞;0), đồng biến trên (0;+∞).'),
    Q('Hàm y = −x²/2 đạt giá trị lớn nhất tại x = ?', ['0', '1', '−1', '2'], 0, 'a < 0: max tại x = 0, max = 0.'),
  ]),

  M(21, 'Phương trình bậc hai một ẩn — Định nghĩa, biệt thức Δ', [
    Q('Dạng tổng quát PT bậc 2 một ẩn?', ['ax + b = 0', 'ax² + bx + c = 0 (a ≠ 0)', 'ax³ + b = 0', 'ax² = 0'], 1, 'Định nghĩa: a ≠ 0.'),
    Q('Biệt thức Δ của ax² + bx + c = 0 là?', ['b² − 4ac', 'b² + 4ac', '4ac − b²', '(b − 2a)²'], 0, 'Δ = b² − 4ac.'),
    Q('PT có nghiệm kép khi?', ['Δ > 0', 'Δ = 0', 'Δ < 0', 'a = 0'], 1, 'Δ = 0 ⇒ nghiệm kép x = −b/(2a).'),
    Q('PT vô nghiệm khi?', ['Δ > 0', 'Δ = 0', 'Δ < 0', 'a > 0'], 2, 'Δ < 0 ⇒ vô nghiệm thực.'),
    Q('PT x² − 5x + 6 = 0 có Δ = ?', ['1', '−1', '25', '49'], 0, 'Δ = 25 − 24 = 1.'),
    Q('Δ′ trong công thức nghiệm thu gọn là?', ['b² − 4ac', 'b′² − ac', '4(b² − ac)', '(b/2)² − ac'], 1, 'Khi b = 2b′: Δ′ = b′² − ac; nghiệm x = (−b′ ± √Δ′)/a.'),
  ]),

  M(22, 'Công thức nghiệm — Giải PT bậc hai', [
    Q('Nghiệm của x² − 5x + 6 = 0?', ['1; 6', '2; 3', '−2; −3', '0; 5'], 1, 'Δ=1; x = (5±1)/2 = 3 hoặc 2.'),
    Q('Nghiệm của x² − 4 = 0?', ['±2', '4', '−4', '±4'], 0, 'x² = 4 ⇒ x = ±2.'),
    Q('Nghiệm của 2x² − 7x + 3 = 0?', ['1/2 và 3', '−1/2 và 3', '1/2 và −3', '2 và 3/2'], 0, 'Δ=49−24=25; x = (7±5)/4 = 3 hoặc 1/2.'),
    Q('Nghiệm kép của x² − 4x + 4 = 0?', ['x = 2', 'x = −2', 'x = 4', 'x = 0'], 0, '(x−2)² = 0 ⇒ x = 2.'),
    Q('PT x² + x + 1 = 0 có?', ['2 nghiệm', '1 nghiệm', 'Vô nghiệm', 'Vô số'], 2, 'Δ = 1 − 4 = −3 < 0 ⇒ vô nghiệm.'),
    Q('Tính nghiệm 3x² − 6x = 0?', ['0 và 2', '0 và 3', '0 và 6', '2 và 3'], 0, '3x(x − 2) = 0 ⇒ x = 0 hoặc x = 2.'),
  ]),

  M(23, 'Hệ thức Vi-ét — Ứng dụng', [
    Q('Nếu x₁, x₂ là 2 nghiệm của ax² + bx + c = 0 thì x₁ + x₂ = ?', ['−b/a', 'b/a', 'c/a', '−c/a'], 0, 'Định lý Vi-ét: tổng = −b/a; tích = c/a.'),
    Q('Tích 2 nghiệm của ax² + bx + c = 0?', ['c/a', '−c/a', 'b/a', 'b²/a'], 0, 'x₁·x₂ = c/a.'),
    Q('Không giải PT, tính x₁ + x₂ của x² − 7x + 10 = 0?', ['7', '−7', '10', '−10'], 0, 'Tổng = −b/a = 7.'),
    Q('Tích 2 nghiệm của 2x² − 5x − 3 = 0?', ['−3/2', '5/2', '3/2', '−5/2'], 0, 'c/a = −3/2.'),
    Q('Tìm 2 số có tổng 5 và tích 6?', ['1 và 4', '2 và 3', '−2 và 3', '0 và 5'], 1, 'Là nghiệm của X² − 5X + 6 = 0 ⇒ X = 2 hoặc 3.'),
    Q('PT x² − mx + 4 = 0 có nghiệm kép khi m = ?', ['±2', '±4', '4', '−4'], 1, 'Δ = m² − 16 = 0 ⇒ m = ±4.'),
  ]),

  M(24, 'Phương trình quy về PT bậc hai', [
    Q('Giải x⁴ − 5x² + 4 = 0. Số nghiệm?', ['1', '2', '3', '4'], 3, 'Đặt t = x², t² − 5t + 4 = 0 ⇒ t = 1, 4 ⇒ x = ±1, ±2 (4 nghiệm).'),
    Q('Giải x − √x − 2 = 0 (x ≥ 0). x = ?', ['1', '4', '2', '−1'], 1, 'Đặt t = √x ≥ 0; t² − t − 2 = 0 ⇒ t = 2 (loại t=−1) ⇒ x = 4.'),
    Q('Giải PT (x² − 1)/(x − 1) = 3 (x ≠ 1)?', ['x = 2', 'x = 3', 'x = 1', 'Vô nghiệm'], 0, 'x + 1 = 3 ⇒ x = 2.'),
    Q('Giải 1/x + 1/(x+1) = 1 (x ≠ 0, −1)?', ['x = 1', 'x = (1±√5)/2', 'x = 2', 'Vô nghiệm'], 1, 'Quy đồng: 2x + 1 = x(x+1) ⇒ x² − x − 1 = 0 ⇒ x = (1±√5)/2.'),
    Q('PT trùng phương 9x⁴ + 5x² − 4 = 0 có bao nhiêu nghiệm?', ['1', '2', '3', '4'], 1, 'Đặt t = x² ≥ 0: 9t² + 5t − 4 = 0 ⇒ t = 4/9 (loại t=−1); x = ±2/3 (2 nghiệm).'),
    Q('PT bậc cao như x³ − 3x² + 2x = 0, giải bằng?', ['Đặt nhân tử chung', 'Vi-ét', 'Δ', 'Tổng quát'], 0, 'x(x²−3x+2) = 0 ⇒ x(x−1)(x−2) = 0 ⇒ x = 0, 1, 2.'),
  ]),

  M(25, 'Giải bài toán bằng cách lập PT bậc hai', [
    Q('Một số có bình phương lớn hơn chính nó 12 đơn vị. Số đó (dương) là?', ['3', '4', '6', '12'], 1, 'x² = x + 12 ⇒ x² − x − 12 = 0 ⇒ x = 4 (lấy dương).'),
    Q('Tích 2 số tự nhiên liên tiếp là 132. Số nhỏ là?', ['10', '11', '12', '13'], 0, 'n(n+1) = 132 ⇒ n² + n − 132 = 0 ⇒ n = 11. Vậy số nhỏ = 11? Kiểm 11·12=132 ⇒ số nhỏ = 11.'),
    Q('Hình chữ nhật có chu vi 28m, diện tích 48m². Chiều dài là?', ['6', '7', '8', '14'], 2, 'x + y = 14; xy = 48 ⇒ x, y là nghiệm của t² − 14t + 48 = 0 ⇒ t = 8 hoặc 6; dài = 8.'),
    Q('Một mảnh vườn hình vuông có diện tích 64m². Chu vi?', ['16', '32', '64', '8'], 1, 'a² = 64 ⇒ a = 8; P = 4·8 = 32.'),
    Q('Một xe đi quãng đường 120 km. Nếu tăng vận tốc 10 km/h thì rút ngắn 1 giờ. Vận tốc ban đầu?', ['20', '30', '40', '60'], 1, '120/v − 120/(v+10) = 1 ⇒ v² + 10v − 1200 = 0 ⇒ v = 30.'),
    Q('Một tam giác vuông có cạnh huyền 13, hiệu 2 cạnh góc vuông là 7. Cạnh ngắn?', ['5', '6', '7', '8'], 0, 'a² + (a+7)² = 169 ⇒ 2a² + 14a − 120 = 0 ⇒ a = 5.'),
  ]),

  M(26, 'Góc với đường tròn — Góc ở tâm, cung', [
    Q('Góc ở tâm là góc có?', ['Đỉnh nằm trên đường tròn', 'Đỉnh trùng tâm đường tròn', 'Đỉnh nằm ngoài đường tròn', 'Đỉnh nằm bên trong cung'], 1, 'Đỉnh tại tâm O; số đo góc ở tâm = số đo cung bị chắn.'),
    Q('Số đo cung nhỏ AB (chắn bởi góc ở tâm 60°)?', ['30°', '60°', '120°', '300°'], 1, 'Số đo cung nhỏ = số đo góc ở tâm tương ứng = 60°.'),
    Q('Tổng số đo của 2 cung tạo bởi 1 dây trên đường tròn?', ['180°', '270°', '360°', 'Tùy'], 2, 'Cả đường tròn = 360°.'),
    Q('Hai cung bằng nhau khi và chỉ khi?', ['Hai dây tương ứng bằng nhau', 'Cùng nằm trong đường tròn', 'Cùng chắn dây cung', 'Cùng bằng nửa đường kính'], 0, 'Định lý: 2 cung nhỏ bằng nhau ⇔ 2 dây tương ứng bằng nhau.'),
    Q('Cung lớn của đường tròn có số đo?', ['< 180°', '= 180°', '> 180°', '> 360°'], 2, 'Cung lớn > nửa đường tròn (180°).'),
    Q('Một đường tròn được chia bởi 4 điểm cách đều thành 4 cung. Mỗi cung?', ['45°', '60°', '90°', '120°'], 2, '360°/4 = 90°.'),
  ]),

  M(27, 'Góc nội tiếp — Định lý', [
    Q('Góc nội tiếp là góc?', ['Đỉnh ở tâm', 'Đỉnh nằm trên đường tròn, 2 cạnh là 2 dây', 'Đỉnh ngoài đường tròn', 'Vuông góc bán kính'], 1, 'Định nghĩa góc nội tiếp.'),
    Q('Số đo góc nội tiếp bằng?', ['Số đo cung bị chắn', 'Nửa số đo cung bị chắn', 'Gấp đôi cung bị chắn', 'Bằng góc ở tâm cùng chắn'], 1, 'Định lý: góc nội tiếp = ½ cung bị chắn.'),
    Q('Góc nội tiếp chắn nửa đường tròn là?', ['30°', '45°', '60°', '90°'], 3, 'Nửa đường tròn = 180° ⇒ góc nội tiếp = 90°.'),
    Q('Hai góc nội tiếp cùng chắn 1 cung thì?', ['Bằng nhau', 'Bù nhau', 'Phụ nhau', 'Khác nhau'], 0, 'Cùng chắn 1 cung ⇒ cùng bằng nửa cung đó ⇒ bằng nhau.'),
    Q('Góc nội tiếp 30° chắn cung có số đo?', ['15°', '30°', '60°', '90°'], 2, 'Cung = 2·30° = 60°.'),
    Q('Trong tam giác nội tiếp đường tròn, nếu 1 cạnh là đường kính thì tam giác?', ['Vuông', 'Đều', 'Cân', 'Bất kỳ'], 0, 'Góc đối diện đường kính là góc nội tiếp chắn nửa đường tròn = 90°.'),
  ]),

  M(28, 'Tứ giác nội tiếp', [
    Q('Tứ giác nội tiếp là tứ giác có?', ['4 cạnh bằng nhau', '4 đỉnh cùng nằm trên 1 đường tròn', '2 đường chéo vuông góc', 'Có 1 góc vuông'], 1, 'Định nghĩa: 4 đỉnh nội tiếp đường tròn.'),
    Q('Tổng 2 góc đối của tứ giác nội tiếp?', ['90°', '180°', '270°', '360°'], 1, 'Định lý: tổng 2 góc đối = 180°.'),
    Q('Trong tứ giác ABCD nội tiếp, A = 80°, C = ?', ['80°', '100°', '180°', '270°'], 1, 'A + C = 180° ⇒ C = 100°.'),
    Q('Tứ giác nào sau luôn nội tiếp được đường tròn?', ['Hình thang thường', 'Hình bình hành', 'Hình thang cân', 'Hình thoi'], 2, 'Hình thang cân có 2 góc đối bù nhau ⇒ nội tiếp được.'),
    Q('Hình chữ nhật nội tiếp đường tròn có tâm là?', ['1 đỉnh', 'Trung điểm 1 cạnh', 'Giao điểm 2 đường chéo', 'Tâm của tam giác'], 2, '4 góc vuông, tổng đối = 180° ⇒ nội tiếp; tâm = giao đường chéo.'),
    Q('Hình vuông có đường tròn ngoại tiếp bán kính R, cạnh hình vuông?', ['R', 'R√2', '2R', 'R/√2'], 1, 'Đường chéo = 2R = a√2 ⇒ a = R√2.'),
  ]),

  M(29, 'Độ dài đường tròn — Diện tích hình tròn', [
    Q('Chu vi đường tròn bán kính R?', ['πR', '2πR', 'πR²', '2πR²'], 1, 'C = 2πR (hoặc πd với d = 2R).'),
    Q('Diện tích hình tròn bán kính R?', ['πR', '2πR', 'πR²', '4πR²'], 2, 'S = πR².'),
    Q('Đường tròn bán kính 5 cm có chu vi (lấy π ≈ 3,14)?', ['15,7 cm', '31,4 cm', '78,5 cm', '25 cm'], 1, '2·3,14·5 = 31,4.'),
    Q('Diện tích hình tròn bán kính 7 cm (lấy π = 22/7)?', ['44 cm²', '154 cm²', '49 cm²', '22 cm²'], 1, 'πR² = 22/7·49 = 22·7 = 154.'),
    Q('Độ dài cung 60° của đường tròn R = 6?', ['π', '2π', '6π', '12π'], 1, 'l = πR·n/180° = π·6·60/180 = 2π.'),
    Q('Diện tích hình quạt 90° của hình tròn R = 4?', ['π', '4π', '16π', '8π'], 1, 'S = πR²·n/360 = 16π/4 = 4π.'),
  ]),

  M(30, 'Hình trụ — Diện tích, thể tích', [
    Q('Diện tích xung quanh hình trụ?', ['2πR·h', 'πR²·h', 'πR·h', '4πR²'], 0, 'S_xq = chu vi đáy · h = 2πR·h.'),
    Q('Diện tích toàn phần hình trụ?', ['2πR·h', '2πR(R + h)', 'πR²·h', 'πR(R + h)'], 1, 'S_tp = S_xq + 2·S_đáy = 2πRh + 2πR² = 2πR(R+h).'),
    Q('Thể tích hình trụ?', ['πR²·h', '2πR·h', '4/3·πR³', 'πR·h'], 0, 'V = S_đáy · h = πR²·h.'),
    Q('Hình trụ R = 3, h = 5 có V ≈ ? (π = 3,14)', ['141,3', '47,1', '94,2', '70,65'], 0, 'V = 3,14·9·5 = 141,3.'),
    Q('Một lon nước hình trụ R = 4 cm, h = 10 cm. Diện tích xung quanh (π ≈ 3,14)?', ['80π', '160π', '40π', '20π'], 0, '2π·4·10 = 80π.'),
    Q('Hình trụ có đường kính đáy = chiều cao = 6, V = ?', ['54π', '36π', '108π', '27π'], 0, 'R = 3, h = 6 ⇒ V = π·9·6 = 54π.'),
  ]),

  M(31, 'Hình nón — Diện tích, thể tích', [
    Q('Diện tích xung quanh hình nón?', ['πR·l (l là đường sinh)', '2πR·h', 'πR²·h', '4πR²'], 0, 'S_xq = πR·l.'),
    Q('Thể tích hình nón?', ['πR²·h', '1/3·πR²·h', 'πR·h', '4/3·πR³'], 1, 'V = (1/3)πR²h.'),
    Q('Hình nón R = 3, h = 4. Đường sinh l = ?', ['5', '7', '√7', '12'], 0, 'l = √(R² + h²) = √25 = 5.'),
    Q('V hình nón R = 3, h = 4 (π ≈ 3,14)?', ['37,68', '12,56', '113,04', '75,36'], 0, '(1/3)·3,14·9·4 = 37,68.'),
    Q('S_xq hình nón R = 3, l = 5?', ['15π', '12π', '9π', '25π'], 0, 'π·3·5 = 15π.'),
    Q('Hình nón cụt sinh ra khi?', ['Cắt nón bằng mặt phẳng song song đáy', 'Cắt vuông góc trục', 'Quay nửa đường tròn', 'Ghép 2 nón'], 0, 'Mặt phẳng // đáy cắt nón ⇒ phần dưới là nón cụt.'),
  ]),

  M(32, 'Hình cầu — Diện tích, thể tích', [
    Q('Diện tích mặt cầu bán kính R?', ['4πR²', '2πR²', 'πR²', '4/3·πR²'], 0, 'S = 4πR².'),
    Q('Thể tích khối cầu bán kính R?', ['πR³', '4/3·πR³', '4πR³', '2πR³'], 1, 'V = (4/3)πR³.'),
    Q('Trái đất xem là cầu R ≈ 6 400 km. Diện tích bề mặt (xấp xỉ, π ≈ 3,14)?', ['4πR²', '40 192 000 km²', 'Khoảng 5,1·10⁸ km²', 'Cả 3 đáp án đều liên quan'], 2, 'S = 4·3,14·6400² ≈ 5,15·10⁸ km².'),
    Q('Hình cầu R = 3 có V (lấy π = 22/7)?', ['113,1', '36π', '4π·27/3 = 36π', 'B hoặc C'], 3, 'V = (4/3)π·27 = 36π; cả B và C đúng cùng nghĩa.'),
    Q('Diện tích mặt cầu nội tiếp hình lập phương cạnh 2 là?', ['π', '4π', '2π', '16π'], 1, 'R = 1 ⇒ S = 4π·1 = 4π.'),
    Q('Tỉ số V hình cầu / V hình trụ (cùng R và h = 2R)?', ['2/3', '1/2', '3/4', '1'], 0, 'V_cầu = (4/3)πR³; V_trụ = πR²·2R = 2πR³; tỉ số = (4/3)/2 = 2/3.'),
  ]),

  M(33, 'Ôn tập đại số — Phương trình + Hàm số', [
    Q('Giải PT x² − 3x + 2 = 0?', ['x = 1, 2', 'x = −1, −2', 'x = 0, 3', 'Vô nghiệm'], 0, 'Δ = 1; x = (3±1)/2 = 2, 1.'),
    Q('Cho parabol y = x² và đường y = 2x − 1. Vị trí?', ['Cắt 2 điểm', 'Tiếp xúc', 'Không cắt', 'Trùng'], 1, 'x² = 2x − 1 ⇒ (x−1)² = 0 ⇒ tiếp xúc tại (1; 1).'),
    Q('Hệ {x − y = 2; x² + y² = 10}. (x; y) = ?', ['(3; 1)', '(1; −1)', '(3; 1) hoặc (−1; −3)', 'Vô nghiệm'], 2, 'x = y + 2; (y+2)² + y² = 10 ⇒ 2y² + 4y − 6 = 0 ⇒ y = 1 hoặc −3.'),
    Q('Tổng x₁ + x₂ của x² − 6x + 8 = 0?', ['6', '−6', '8', '−8'], 0, '−b/a = 6.'),
    Q('Tìm m để PT x² − 2x + m = 0 có 2 nghiệm phân biệt?', ['m < 1', 'm = 1', 'm > 1', 'm ≥ 0'], 0, 'Δ = 4 − 4m > 0 ⇒ m < 1.'),
    Q('Nghiệm x₁ và x₂ của x² + 5x + 6 = 0 thoả x₁·x₂ = ?', ['6', '−6', '5', '−5'], 0, 'c/a = 6.'),
  ]),

  M(34, 'Ôn tập hình học — Đường tròn + hình không gian', [
    Q('Cho đường tròn (O; 6) và dây AB = 8. Khoảng cách từ O đến AB?', ['2√5', '√20', '3', '4'], 0, 'd = √(R² − (AB/2)²) = √(36 − 16) = √20 = 2√5.'),
    Q('Góc nội tiếp 45° chắn cung số đo?', ['45°', '60°', '90°', '180°'], 2, '2·45° = 90°.'),
    Q('Tứ giác MNPQ nội tiếp, M = 70°, N = 110°. P = ?', ['70°', '110°', '90°', '180°'], 1, 'M + P = 180° ⇒ P = 110°.'),
    Q('Hình trụ R = 5, h = 10. S_xq = ?', ['25π', '50π', '100π', '250π'], 2, '2π·5·10 = 100π.'),
    Q('Hình nón R = 6, h = 8. V (π ≈ 3,14)?', ['301,44', '96', '226,08', '150,72'], 0, '(1/3)·3,14·36·8 = 301,44.'),
    Q('Hình cầu R = 3. V (lấy π = 3,14)?', ['113,04', '36π', '113,04 và 36π đều đúng', '4π'], 2, '(4/3)π·27 = 36π ≈ 113,04.'),
  ]),

  M(35, 'Đề ôn thi vào 10 — Tổng hợp', [
    Q('Rút gọn A = (√x − 1)(√x + 1) với x ≥ 0?', ['x − 1', 'x + 1', '1 − x', '√x − 1'], 0, 'Hằng đẳng thức: (√x)² − 1 = x − 1.'),
    Q('Tìm m để đường thẳng y = mx − 3 cắt y = 2x + 1 tại điểm có x = 1?', ['m = 2', 'm = 6', 'm = 4', 'm = 0'], 1, 'Tại x=1: 2·1+1 = 3 ⇒ m·1 − 3 = 3 ⇒ m = 6.'),
    Q('PT x² − 2(m−1)x + m² − 3 = 0 có 2 nghiệm phân biệt khi?', ['m < 2', 'm = 2', 'm > 2', 'Mọi m'], 0, 'Δ′ = (m−1)² − (m²−3) = −2m + 4 > 0 ⇒ m < 2.'),
    Q('Hai nghiệm của PT x² − 4x + 1 = 0 thoả x₁² + x₂² = ?', ['14', '16', '18', '4'], 0, '(x₁+x₂)² − 2x₁x₂ = 16 − 2 = 14.'),
    Q('Tam giác ABC nội tiếp (O), A = 60°. Cung BC nhỏ = ?', ['60°', '90°', '120°', '180°'], 2, 'Góc nội tiếp = ½ cung ⇒ cung = 2·60° = 120°.'),
    Q('Một quả bóng hình cầu có thể tích 36π cm³. Bán kính R = ?', ['2', '3', '4', '6'], 1, '(4/3)πR³ = 36π ⇒ R³ = 27 ⇒ R = 3.'),
  ]),
];

export const S9TOAN_SCENARIOS = indexBy(S9TOAN_WEEKS);
