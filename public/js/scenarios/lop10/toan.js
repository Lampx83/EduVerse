// ============================================================
// Lớp 10 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Toán 10: Đại số & Một số yếu tố Giải tích – Hình học & Đo lường – Thống kê & Xác suất).
// ID prefix: "H10TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10TOAN', 'toan', n, title, qs, opts);

export const H10TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Mệnh đề', [
    Q('Mệnh đề "Số 7 là số nguyên tố" có đặc điểm gì?', ['Không phải mệnh đề', 'Mệnh đề chứa biến', 'Mệnh đề sai', 'Mệnh đề đúng'], 3, '7 là số nguyên tố nên đây là mệnh đề đúng.'),
    Q('Câu nào sau đây KHÔNG phải mệnh đề?', ['Bạn có khoẻ không?', '2 + 3 = 6', 'Số 0 là số chẵn', 'Hà Nội là thủ đô Việt Nam'], 0, 'Câu hỏi không có giá trị đúng/sai nên không là mệnh đề.'),
    Q('Phủ định của mệnh đề "Mọi số tự nhiên đều chia hết cho 2" là?', ['Mọi số tự nhiên đều không chia hết cho 2', 'Không số tự nhiên nào chia hết cho 2', 'Tồn tại số tự nhiên chia hết cho 2', 'Tồn tại số tự nhiên không chia hết cho 2'], 3, 'Phủ định ∀ là ∃ với phủ định vị từ.'),
    Q('Ký hiệu "∃x ∈ R: x² < 0" có giá trị?', ['Đúng với mọi x ∈ R', 'Không xác định', 'Đúng khi x ∈ (−1; 1)', 'Sai'], 3, 'Bình phương số thực luôn ≥ 0 nên mệnh đề tồn tại này sai.'),
    Q('Mệnh đề kéo theo "Nếu P thì Q" được ký hiệu?', ['P ∧ Q (giao hai mệnh đề)', 'P ⇔ Q (mệnh đề tương đương)', 'P ⇒ Q', 'P ∨ Q (mệnh đề tuyển)'], 2, 'Dấu ⇒ chỉ phép kéo theo.'),
    Q('Mệnh đề đảo của "Nếu n chia hết cho 6 thì n chia hết cho 3" là?', ['Nếu n không chia hết cho 6 thì n không chia hết cho 3', 'Nếu n chia hết cho 3 thì n không chia hết cho 6', 'Nếu n chia hết cho 6 thì n không chia hết cho 3', 'Nếu n chia hết cho 3 thì n chia hết cho 6'], 3, 'Mệnh đề đảo đổi vị trí P và Q.'),
  ]),

  M(2, 'Tập hợp và các phép toán trên tập hợp', [
    Q('Cho A = {1;2;3;4}, B = {3;4;5;6}. A ∩ B = ?', ['{1;2;5;6}', '{1;2;3;4;5;6}', '{3;4}', '{1;2} (lấy phần A bỏ B)'], 2, 'Giao là phần tử chung: 3 và 4.'),
    Q('Với A, B như trên, A ∪ B = ?', ['{1;2;5;6}', '{1;2;3;4;5;6}', '{3;4} (nhầm với A ∩ B)', '{1;2;3;4}'], 1, 'Hợp gồm mọi phần tử của A hoặc B.'),
    Q('A \\ B (hiệu) với A = {1;2;3;4}, B = {3;4;5;6} bằng?', ['{3;4} (lấy phần chung A ∩ B)', '{1;2;3;4;5;6} (lấy hợp A ∪ B)', '{5;6} (nhầm B \\ A)', '{1;2}'], 3, 'Hiệu A\\B gồm phần tử thuộc A nhưng không thuộc B.'),
    Q('Tập rỗng được ký hiệu là?', ['∅', '0', '{0} (tập chứa số 0)', '{∅} (tập chứa phần tử rỗng)'], 0, 'Ký hiệu ∅ chỉ tập không có phần tử.'),
    Q('Số tập con của A = {a;b;c} là?', ['9', '6', '8', '3'], 2, 'Số tập con = 2ⁿ = 2³ = 8.'),
    Q('Tập hợp A = {x ∈ N | x < 5} có bao nhiêu phần tử?', ['6', '4', '5', 'Vô hạn'], 2, 'A = {0;1;2;3;4} có 5 phần tử.'),
  ]),

  M(3, 'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn', [
    Q('Bất phương trình 2x + 3y ≤ 6 có miền nghiệm là?', ['Nửa mặt phẳng bờ 2x+3y=6', 'Toàn mặt phẳng', 'Đường thẳng 2x+3y=6', 'Tập rỗng'], 0, 'Bất phương trình bậc nhất 2 ẩn có miền nghiệm là nửa mặt phẳng (kể cả bờ).'),
    Q('Điểm O(0;0) có thuộc miền nghiệm của x + y ≤ 4 không?', ['Có', 'Tuỳ trục', 'Không xác định', 'Không, vì O nằm trên biên giới'], 0, '0 + 0 = 0 ≤ 4 nên O thuộc miền nghiệm.'),
    Q('Cặp (1;2) có là nghiệm của 3x − y > 0 không?', ['Không, vì 3x − y < 0', 'Bằng 0', 'Không xác định', 'Có'], 3, '3·1 − 2 = 1 > 0 nên đúng.'),
    Q('Để biểu diễn miền nghiệm, ta vẽ đường thẳng rồi?', ['Chỉ vẽ trục Ox', 'Bỏ qua đường thẳng', 'Tô cả 2 phía', 'Chọn điểm thử để xác định nửa mặt phẳng'], 3, 'Quy trình: vẽ đường thẳng → chọn điểm thử → tô miền thoả mãn.'),
    Q('Hệ bất phương trình bậc nhất 2 ẩn có miền nghiệm là?', ['Hợp của các nửa mặt phẳng', 'Một đường thẳng', 'Giao của các nửa mặt phẳng', 'Tập rỗng luôn luôn'], 2, 'Giao của các nửa mặt phẳng nghiệm từng bất phương trình.'),
    Q('Trong quy hoạch tuyến tính, hàm mục tiêu F(x;y) đạt cực trị tại?', ['Điểm bất kỳ', 'Tâm đa giác', 'Đỉnh của đa giác miền nghiệm', 'Gốc toạ độ'], 2, 'F đạt min/max tại các đỉnh của đa giác lồi miền nghiệm.'),
  ]),

  M(4, 'Hàm số bậc hai', [
    Q('Hàm số y = ax² + bx + c (a ≠ 0) có đồ thị là?', ['Parabol', 'Đường thẳng', 'Hypebol', 'Elip (đường cong khép kín)'], 0, 'Đồ thị hàm bậc 2 là parabol.'),
    Q('Parabol y = x² − 4x + 3 có đỉnh tại?', ['(0; 3)', '(2; 1)', '(2; −1)', '(−2; −1)'], 2, 'x_đỉnh = −b/(2a) = 2; y = 4 − 8 + 3 = −1.'),
    Q('Trục đối xứng của y = 2x² − 8x + 1 là?', ['x = 4', 'x = 2', 'x = −4', 'x = −2'], 1, 'x = −b/(2a) = 8/4 = 2.'),
    Q('Parabol y = −x² + 4x quay bề lõm?', ['Xuống dưới', 'Sang phải', 'Sang trái', 'Lên trên'], 0, 'a = −1 < 0 nên bề lõm quay xuống.'),
    Q('Giá trị lớn nhất của y = −x² + 6x − 5 là?', ['5', '−4 (quên đổi dấu hệ số a)', '4', '6'], 2, 'y_max tại x = 3, y = −9 + 18 − 5 = 4.'),
    Q('Đồ thị y = x² cắt trục Ox tại điểm?', ['(−1;0) và (1;0)', 'Không cắt', '(0;0)', '(1;0) (nhầm với y = x − 1)'], 2, 'x² = 0 ⇔ x = 0.'),
  ]),

  M(5, 'Dấu của tam thức bậc hai', [
    Q('Tam thức f(x) = ax² + bx + c có Δ < 0 và a > 0 thì f(x)?', ['Bằng 0', 'Đổi dấu', 'Luôn âm', 'Luôn dương'], 3, 'Δ < 0 nên f vô nghiệm, dấu cùng dấu a > 0.'),
    Q('f(x) = x² − 5x + 6 dương khi?', ['x ∈ (−∞;2) ∪ (3;+∞)', 'x = 2 hoặc x = 3', 'x ∈ R', 'x ∈ (2;3)'], 0, 'Hai nghiệm 2 và 3, ngoài nghiệm cùng dấu a > 0 nên dương.'),
    Q('Bất phương trình x² − 4 < 0 có tập nghiệm?', ['∅ (nhầm vì cho rằng x² ≥ 0)', '(−2;2)', 'R \\ {−2; 2}', '(−∞;−2) ∪ (2;+∞)'], 1, 'Trong nghiệm trái dấu a, mà a = 1 > 0 nên âm trong (−2;2).'),
    Q('Tam thức f(x) = −x² + 3x − 2 có 2 nghiệm là?', ['−1 và 2', '1 và 2', '−1 và −2', '1 và −2'], 1, 'Giải −x² + 3x − 2 = 0 ⇔ x = 1 hoặc x = 2.'),
    Q('Để x² + (m−1)x + 1 > 0 với mọi x thì Δ?', ['Δ ≥ 0 (nhầm điều kiện có nghiệm)', 'Δ = 0 (nhầm điều kiện nghiệm kép)', 'Δ > 0 (nhầm có 2 nghiệm phân biệt)', 'Δ < 0'], 3, 'Cần a > 0 và Δ < 0.'),
    Q('Định lý dấu: tam thức cùng dấu a khi nào?', ['Khắp R', 'Tại nghiệm', 'Trong khoảng 2 nghiệm', 'Ngoài khoảng 2 nghiệm'], 3, 'Ngoài hai nghiệm, tam thức cùng dấu hệ số a.'),
  ]),

  M(6, 'Phương trình quy về bậc hai', [
    Q('Phương trình √(x+1) = x − 1 có điều kiện?', ['x ≥ 0', 'x ≥ −1', 'x ∈ R', 'x ≥ 1'], 3, 'Cần x − 1 ≥ 0 và x + 1 ≥ 0 ⇒ x ≥ 1.'),
    Q('Nghiệm của √(2x+3) = x là?', ['x = −1', 'x = 3 và x = −1', 'x = 3', 'Vô nghiệm'], 2, 'Bình phương: 2x+3 = x² → x² − 2x − 3 = 0 → x = 3 hoặc −1; loại x = −1 do x ≥ 0. Vậy x = 3.'),
    Q('Phương trình |2x − 1| = 3 có nghiệm?', ['x = 2', 'x = −1', 'x = 1', 'x = 2 và x = −1'], 3, '2x − 1 = ±3 → x = 2 hoặc x = −1.'),
    Q('Phương trình trùng phương x⁴ − 5x² + 4 = 0 đặt t = x² (t ≥ 0) thì?', ['t² + 5t + 4 = 0', 't² − 5t + 4 = 0', 't² − 5t − 4 = 0', 't² + 5t − 4 = 0'], 1, 'Thay x² = t ta được t² − 5t + 4 = 0.'),
    Q('Số nghiệm của x⁴ − 5x² + 4 = 0?', ['2', '4', '1', '3'], 1, 't = 1 hoặc t = 4 → x = ±1; ±2. Tổng cộng 4 nghiệm.'),
    Q('Bình phương 2 vế PT vô tỉ cần?', ['Đảo dấu', 'Kiểm tra lại nghiệm', 'Bỏ điều kiện', 'Đổi biến'], 1, 'Bình phương 2 vế có thể sinh nghiệm ngoại lai, cần thử lại.'),
  ]),

  M(7, 'Hệ thức lượng trong tam giác — Định lý cosin và sin', [
    Q('Định lý cosin: a² = ?', ['b² + c² + 2bc·cosA', '2bc·cosA', 'b² − c²', 'b² + c² − 2bc·cosA'], 3, 'a² = b² + c² − 2bc·cosA.'),
    Q('Định lý sin: a/sinA = ?', ['b/sinB chỉ', 'R/2 (nhầm nghịch đảo)', '2R', 'R (quên hệ số 2)'], 2, 'a/sinA = b/sinB = c/sinC = 2R (R là bán kính đường tròn ngoại tiếp).'),
    Q('Tam giác có a = 3, b = 4, c = 5 vuông tại?', ['C', 'B (đối cạnh b = 4)', 'A (đối cạnh a = 3)', 'Không vuông'], 0, '3² + 4² = 5² ⇒ vuông tại C (đỉnh đối cạnh huyền).'),
    Q('Trong tam giác ABC, nếu cosA = 0 thì A bằng?', ['90°', '120°', '60°', '30°'], 0, 'cos90° = 0.'),
    Q('Diện tích tam giác theo công thức Heron khi biết 3 cạnh, đặt p = (a+b+c)/2, S = ?', ['½·a·b·sinC (công thức theo 2 cạnh và góc xen)', '√(p(p−a)(p−b)(p−c))', 'p(p−a)(p−b)(p−c)', '(a+b+c)/2'], 1, 'Công thức Heron.'),
    Q('Công thức S = ½·ab·sinC dùng khi biết?', ['2 cạnh và góc xen giữa', '3 cạnh', '1 cạnh và 1 góc', '3 góc'], 0, 'Hai cạnh kề và góc xen giữa.'),
  ]),

  M(8, 'Vectơ — Khái niệm và phép cộng, trừ', [
    Q('Vectơ là đại lượng có?', ['Chỉ điểm đầu', 'Độ lớn và hướng', 'Chỉ hướng', 'Chỉ độ lớn'], 1, 'Vectơ có cả độ lớn và hướng.'),
    Q('Hai vectơ bằng nhau khi?', ['Cùng hướng', 'Cùng độ dài', 'Cùng độ dài và cùng hướng', 'Cùng điểm đầu'], 2, 'Bằng nhau ⇔ cùng phương, cùng hướng, cùng độ dài.'),
    Q('Vectơ-không được ký hiệu?', ['→1 (vectơ đơn vị)', '→AB với A ≠ B', '→i (vectơ đơn vị trục Ox)', '→0'], 3, 'Vectơ-không là vectơ có điểm đầu trùng điểm cuối.'),
    Q('Quy tắc 3 điểm: →AB + →BC = ?', ['→AB (nhầm cộng vectơ cùng phương)', '→AC', '→CA (đảo chiều vectơ kết quả)', '→0 (nhầm với vectơ đối)'], 1, '→AB + →BC = →AC.'),
    Q('→AB − →AC = ?', ['→AB + →CA', '→AC (quên đổi dấu khi trừ)', '→BC (nhầm chiều vectơ hiệu)', '→CB'], 3, '→AB − →AC = →CB.'),
    Q('Quy tắc hình bình hành ABCD: →AB + →AD = ?', ['→AC', '→AD (giữ nguyên một vectơ)', '→AB (giữ nguyên vectơ kia)', '→BD (nhầm với đường chéo khác)'], 0, '→AB + →AD = →AC (đường chéo từ A).'),
  ]),

  M(9, 'Vectơ — Tích của vectơ với một số', [
    Q('k·→a cùng hướng với →a khi?', ['k ≠ 0 (nhầm điều kiện khác →0)', 'k > 0', 'k < 0 (nhầm ngược hướng)', 'k = 0 (cho k bằng 0)'], 1, 'k > 0 ⇒ cùng hướng; k < 0 ⇒ ngược hướng.'),
    Q('Độ dài |k·→a| = ?', ['k·|→a|', 'k²·|→a|', '|k|·|→a|', '|→a| (quên nhân với k)'], 2, '|k·→a| = |k|·|→a|.'),
    Q('Nếu →b = 2·→a thì →b và →a?', ['Vuông góc', 'Cùng phương', 'Bằng nhau', 'Trái dấu'], 1, 'k = 2 nên cùng phương.'),
    Q('Hai vectơ →a, →b (→b ≠ →0) cùng phương ⇔ tồn tại?', ['t để →a − →b = 0', 'm để →a + →b = 0', 'k để |→a| = k·|→b|', 'k để →a = k·→b'], 3, 'Định nghĩa cùng phương qua tích vô hướng.'),
    Q('Điểm M là trung điểm AB thì →MA + →MB = ?', ['2·→MA', '→AB (quên 2 vectơ đối nhau)', '→0', '→AB/2 (nhầm công thức trung điểm)'], 2, 'Hai vectơ đối nên tổng bằng →0.'),
    Q('G là trọng tâm tam giác ABC thì →GA + →GB + →GC = ?', ['→AC (nhầm tổng 2 vectơ liên tiếp)', '3·→GA', '→AB (nhớ thiếu vectơ thứ ba)', '→0'], 3, 'Tính chất trọng tâm: tổng 3 vectơ từ trọng tâm tới 3 đỉnh bằng →0.'),
  ]),

  M(10, 'Hệ trục toạ độ — Toạ độ của vectơ', [
    Q('Trong mặt phẳng Oxy, →i và →j là?', ['Hai điểm', 'Hai số', 'Vectơ đơn vị trên Ox và Oy', 'Vectơ-không'], 2, '→i = (1;0), →j = (0;1).'),
    Q('Vectơ →a = (3; −2) có toạ độ?', ['x = 3, y = −2', 'x = 5', 'x = −2, y = 3', 'x = 3, y = 2'], 0, 'Cặp (x;y) chính là toạ độ.'),
    Q('Cho A(1;2), B(4;6). →AB = ?', ['(−3;−4)', '(3;8) (cộng tung độ thay vì trừ)', '(3;4)', '(5;8) (cộng cả hai toạ độ A và B)'], 2, '→AB = (x_B − x_A; y_B − y_A) = (3;4).'),
    Q('Độ dài |→a| với →a = (3;4)?', ['25', '√7 (cộng 3+4 rồi căn)', '5', '7'], 2, '|→a| = √(9+16) = 5.'),
    Q('Hai vectơ →a = (1;2), →b = (3;6) có?', ['Cùng phương', 'Bằng nhau', 'Đối nhau', 'Vuông góc'], 0, '→b = 3·→a nên cùng phương.'),
    Q('Toạ độ trung điểm M của AB với A(2;4), B(6;8)?', ['(4;4) (sai tung độ trung điểm)', '(8;12)', '(2;2) (lấy hiệu rồi chia 2)', '(4;6)'], 3, 'M = ((2+6)/2; (4+8)/2) = (4;6).'),
  ]),

  M(11, 'Tích vô hướng của hai vectơ', [
    Q('Tích vô hướng →a·→b = ?', ['|→a|·|→b|·cos(→a,→b)', '|→a|·|→b|', '|→a|·|→b|·sin(→a,→b)', '|→a|+|→b|'], 0, 'Định nghĩa: →a·→b = |→a|·|→b|·cosα.'),
    Q('→a·→b = 0 (cả 2 khác →0) khi và chỉ khi?', ['Vuông góc', 'Bằng nhau', 'Ngược hướng', 'Cùng hướng'], 0, 'cos90° = 0.'),
    Q('Với →a = (x₁;y₁), →b = (x₂;y₂): →a·→b = ?', ['x₁x₂ − y₁y₂', 'x₁+x₂+y₁+y₂', 'x₁y₂ + x₂y₁', 'x₁x₂ + y₁y₂'], 3, 'Công thức toạ độ tích vô hướng.'),
    Q('Cho →a = (1;2), →b = (3;4). →a·→b = ?', ['14', '7', '11', '10'], 2, '1·3 + 2·4 = 3 + 8 = 11.'),
    Q('Góc giữa hai vectơ →a, →b tính bằng?', ['tanα = →a/→b', 'cosα = (→a·→b)/(|→a|·|→b|)', 'α = →a·→b', 'sinα = →a·→b'], 1, 'Suy từ định nghĩa tích vô hướng.'),
    Q('Bình phương vô hướng →a² = ?', ['|→a| (quên bình phương độ dài)', '0', '2|→a|', '|→a|²'], 3, '→a·→a = |→a|·|→a|·cos0 = |→a|².'),
  ]),

  M(12, 'Số gần đúng và sai số', [
    Q('Sai số tuyệt đối Δ_a của a so với ā là?', ['a/ā (nhầm với sai số tương đối)', 'a·ā (nhầm với tích hai số)', '|a − ā|', 'a + ā (nhầm với trung bình)'], 2, 'Δ_a = |a − ā|.'),
    Q('Sai số tương đối được tính?', ['|a − ā|·100%', 'Δ_a/|ā|', 'Δ_a + ā', 'Δ_a − ā'], 1, 'δ_a = Δ_a/|ā| (thường nhân 100%).'),
    Q('Số π ≈ 3,14 là số?', ['Chính xác', 'Nguyên', 'Gần đúng', 'Vô tỉ chính xác'], 2, '3,14 là giá trị gần đúng của π.'),
    Q('Quy tròn 12,468 đến chữ số hàng phần mười?', ['12,47', '12,5', '12,4', '12,46'], 1, 'Chữ số hàng phần trăm là 6 ≥ 5 nên tăng lên 12,5.'),
    Q('Một số đo 25,7 cm với độ chính xác 0,1 cm thì giá trị thực thuộc?', ['25,7 chính xác', '[25,6; 25,7]', '[25,7; 25,8]', '[25,6; 25,8]'], 3, 'Giá trị thực ∈ [25,7 − 0,1; 25,7 + 0,1].'),
    Q('Chữ số đáng tin của một số gần đúng là?', ['Chữ số có sai số ≤ nửa đơn vị hàng đó', 'Mọi chữ số', 'Chữ số 0', 'Chữ số cuối cùng'], 0, 'Định nghĩa chữ số đáng tin trong số gần đúng.'),
  ]),

  M(13, 'Mẫu số liệu — Bảng tần số ghép lớp', [
    Q('Khi số liệu nhiều và phân tán rộng, ta dùng?', ['Bảng tần số ghép lớp', 'Bảng tần số', 'Biểu đồ tròn duy nhất', 'Số trung vị'], 0, 'Bảng tần số ghép lớp dùng cho dữ liệu liên tục/phân tán.'),
    Q('Lớp ghép thường có dạng?', ['[a; b)', '(a; b]', '{a; b}', 'a → b (dạng ánh xạ)'], 0, 'Quy ước [a;b) đóng trái mở phải.'),
    Q('Giá trị đại diện của lớp [10;20) là?', ['12,5', '10', '20', '15'], 3, 'Trung điểm: (10+20)/2 = 15.'),
    Q('Biểu đồ tần suất ghép lớp thường vẽ dạng?', ['Đường thẳng', 'Cột (histogram)', 'Đường gấp khúc tần số', 'Tròn (biểu đồ hình quạt)'], 1, 'Histogram là biểu đồ cột không khe hở.'),
    Q('Tần suất của một lớp = ?', ['Tần số cộng giá trị đại diện', 'Tần số/tổng số liệu', 'Tổng/tần số', 'Tần số · tổng'], 1, 'Tần suất = tần số chia tổng số liệu.'),
    Q('Tổng tần suất của tất cả lớp bằng?', ['Tổng tần số', 'Tuỳ mẫu', '100% (hoặc 1)', '0'], 2, 'Tổng tần suất luôn bằng 1 (hoặc 100%).'),
  ]),

  M(14, 'Số trung bình — Trung vị — Mốt cho mẫu ghép lớp', [
    Q('Số trung bình mẫu ghép lớp tính bằng?', ['Σ f_i (chỉ tính tổng tần số)', 'Σ x_i (cộng giá trị đại diện, không nhân f_i)', 'Σ(x_i)/n', 'Σ(f_i · x_i)/n'], 3, 'x_i là giá trị đại diện, f_i là tần số lớp, n = Σf_i.'),
    Q('Trung vị là?', ['Giá trị xuất hiện nhiều nhất', 'Trung bình cộng', 'Giá trị lớn nhất', 'Giá trị giữa của mẫu sắp xếp'], 3, 'Trung vị chia mẫu thành 2 phần bằng nhau.'),
    Q('Mốt (mode) là?', ['Giá trị có tần số lớn nhất', 'Giá trị nhỏ nhất', 'Trung vị', 'Trung bình cộng'], 0, 'Mốt = giá trị/lớp có tần số lớn nhất.'),
    Q('Một mẫu có thể có?', ['Cả 3 đáp án trên', 'Nhiều mốt', 'Không có mốt', 'Một mốt duy nhất'], 0, 'Mẫu có thể có 0, 1, hoặc nhiều mốt.'),
    Q('Để đo độ tập trung dữ liệu, ta dùng?', ['Phương sai', 'Trung bình, trung vị, mốt', 'Độ lệch chuẩn', 'Khoảng biến thiên'], 1, '3 số đo độ tập trung của mẫu.'),
    Q('Số liệu có nhiều ngoại lệ (outliers), nên dùng số đo nào?', ['Mốt (giá trị lặp nhiều nhất)', 'Trung bình', 'Khoảng biến thiên (max − min)', 'Trung vị'], 3, 'Trung vị ít bị ảnh hưởng bởi ngoại lệ hơn trung bình.'),
  ]),

  M(15, 'Phương sai và độ lệch chuẩn', [
    Q('Phương sai mẫu s² đo điều gì?', ['Vị trí của giá trị xuất hiện nhiều nhất', 'Trung vị', 'Độ tập trung', 'Độ phân tán quanh trung bình'], 3, 'Phương sai đo độ phân tán của dữ liệu.'),
    Q('Công thức phương sai: s² = ?', ['(Σx_i)²/n', 'Σ(x_i − x̄)/n', 'Σ(x_i − x̄)²/n', 'Σx_i/n'], 2, 's² = (1/n)·Σ(x_i − x̄)².'),
    Q('Độ lệch chuẩn s = ?', ['|s²| (lấy giá trị tuyệt đối)', '√(s²)', '(s²)² (bình phương phương sai)', 's²/2 (chia đôi phương sai)'], 1, 's = √(s²).'),
    Q('Đơn vị của độ lệch chuẩn?', ['Cùng đơn vị dữ liệu', 'Đơn vị bình phương', 'Phần trăm', 'Không đơn vị'], 0, 's cùng đơn vị với x.'),
    Q('Khoảng biến thiên R = ?', ['x_max − x_min', 'x̄', 'x_max + x_min', 'x_max · x_min'], 0, 'R = giá trị lớn nhất trừ nhỏ nhất.'),
    Q('Hai mẫu cùng trung bình, mẫu nào ổn định hơn?', ['Mẫu có s lớn hơn', 'Mẫu có nhiều phần tử hơn', 'Mẫu có s nhỏ hơn', 'Mẫu có mốt lớn hơn'], 2, 's nhỏ ⇒ dữ liệu tập trung quanh trung bình ⇒ ổn định hơn.'),
  ]),

  M(16, 'Quy tắc đếm — Cộng và nhân', [
    Q('Quy tắc cộng dùng khi?', ['Hoán đổi', 'Hai hành động liên tiếp', 'Lặp lại', 'Hai hành động loại trừ nhau'], 3, 'Cộng khi các trường hợp không xảy ra cùng lúc.'),
    Q('Quy tắc nhân dùng khi?', ['Sắp xếp', 'Hai hành động liên tiếp/độc lập', 'Hoán đổi vị trí', 'Hai hành động loại trừ'], 1, 'Nhân khi thực hiện k giai đoạn liên tiếp.'),
    Q('Từ A đi B có 3 đường, B đi C có 2 đường. Số cách từ A → C qua B?', ['9', '5', '6', '1'], 2, '3 · 2 = 6 (quy tắc nhân).'),
    Q('Bạn có 4 áo và 3 quần. Có bao nhiêu cách chọn 1 bộ?', ['4', '12', '7', '9'], 1, '4 · 3 = 12.'),
    Q('Đi từ X đến Y có 2 đường, hoặc đi tàu (3 chuyến) hoặc xe (4 chuyến). Tổng?', ['12', '7', '9', '10'], 1, 'Tàu hoặc xe, loại trừ: 3 + 4 = 7.'),
    Q('Một mật khẩu 4 chữ số (0–9), số mật khẩu khác nhau?', ['10⁴', '4!', '10·9·8·7', '10·4'], 0, '10⁴ = 10000 (cho phép lặp).'),
  ]),

  M(17, 'Hoán vị — Chỉnh hợp — Tổ hợp', [
    Q('Hoán vị của n phần tử Pₙ = ?', ['n^n (n mũ n)', 'n!', 'n² (nhầm với cấp số nhân)', '2ⁿ'], 1, 'Pₙ = n!.'),
    Q('Chỉnh hợp chập k của n: A(n,k) = ?', ['k! (chỉ tính hoán vị k)', 'n!/k! (nhầm mẫu số)', 'n!/(n−k)!', 'n!/(k!(n−k)!)'], 2, 'A(n,k) = n!/(n−k)!.'),
    Q('Tổ hợp chập k của n: C(n,k) = ?', ['k·n (nhầm với quy tắc nhân)', 'n!/(n−k)!', 'n!/k! (quên chia (n−k)!)', 'n!/(k!·(n−k)!)'], 3, 'C(n,k) = n!/(k!·(n−k)!).'),
    Q('5! = ?', ['60', '120', '25', '720'], 1, '5·4·3·2·1 = 120.'),
    Q('C(5,2) = ?', ['10', '15', '5', '20'], 0, '5!/(2!·3!) = 10.'),
    Q('A(5,2) = ?', ['10', '15', '25', '20'], 3, '5!/(5−2)! = 5·4 = 20.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Phủ định của "∀x ∈ R: x² ≥ 0" là?', ['∃x ∈ R: x² < 0', '∀x ∈ R: x² < 0', '∃x ∈ R: x² ≥ 0', '∀x ∈ R: x² ≤ 0'], 0, '¬∀x P(x) = ∃x ¬P(x).'),
    Q('Tập nghiệm của x² − 4x + 3 ≤ 0 là?', ['[1;3]', '(−∞;1]∪[3;+∞)', 'R (toàn bộ trục số)', '(1;3) (quên đầu mút)'], 0, 'Nghiệm 1 và 3; trong nghiệm trái dấu a, mà a > 0 nên ≤ 0 trong [1;3].'),
    Q('Trong tam giác ABC, a = 7, b = 5, C = 60°. c² = ?', ['35', '49', '25', '39'], 3, 'c² = 49 + 25 − 2·7·5·cos60° = 74 − 35 = 39.'),
    Q('Cho →a = (2;3), →b = (−1;4). →a·→b = ?', ['10', '14', '−2 (chỉ lấy tích hoành độ)', '5'], 0, '2·(−1) + 3·4 = −2 + 12 = 10.'),
    Q('Số hoán vị của 4 phần tử?', ['24', '4', '12', '16'], 0, '4! = 24.'),
    Q('Phương sai đo?', ['Trung vị', 'Độ phân tán', 'Độ tập trung', 'Tần số'], 1, 'Phương sai đo độ phân tán.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Nhị thức Newton', [
    Q('Công thức nhị thức Newton: (a+b)ⁿ = ?', ['n·(a+b)', 'Σ C(n,k)·aᵏ·bⁿ⁻ᵏ giống nhau', 'Σ C(n,k)·aⁿ⁻ᵏ·bᵏ', 'aⁿ + bⁿ'], 2, 'Cả 2 cách viết Σ C(n,k)·aⁿ⁻ᵏ·bᵏ = Σ C(n,k)·aᵏ·bⁿ⁻ᵏ.'),
    Q('Số hạng thứ k+1 trong khai triển (a+b)ⁿ là?', ['C(n,k)·aⁿ⁻ᵏ·bᵏ', 'C(n,k+1)', 'aⁿ⁻ᵏ·bᵏ (quên hệ số nhị thức)', 'C(n,k)·aᵏ·bⁿ'], 0, 'T_{k+1} = C(n,k)·aⁿ⁻ᵏ·bᵏ.'),
    Q('Khai triển (1+x)⁴ có?', ['5 số hạng', '3 số hạng', '4 số hạng', '6 số hạng'], 0, 'n + 1 = 5 số hạng.'),
    Q('(a+b)³ = ?', ['a³ + b³', 'a³ − b³', 'a³ + 3ab + b³', 'a³ + 3a²b + 3ab² + b³'], 3, 'Khai triển bậc 3 quen thuộc.'),
    Q('Hệ số của x² trong (1+x)⁵ là?', ['5', '10', '20', '15'], 1, 'C(5,2) = 10.'),
    Q('Tổng các hệ số trong khai triển (1+x)ⁿ bằng?', ['n! (nhầm với hoán vị)', 'n² (nhầm với số tổ hợp 2 phần tử)', 'n + 1 (số số hạng khai triển)', '2ⁿ'], 3, 'Thay x = 1: (1+1)ⁿ = 2ⁿ.'),
  ]),

  M(20, 'Xác suất cổ điển — Không gian mẫu, biến cố', [
    Q('Không gian mẫu Ω là?', ['Một biến cố', 'Số phần tử', 'Tập tất cả kết quả có thể', 'Tập kết quả thuận lợi'], 2, 'Ω chứa toàn bộ kết quả của phép thử.'),
    Q('Tung 1 đồng xu, |Ω| = ?', ['4', '1', '3', '2'], 3, '2 kết quả: ngửa, sấp.'),
    Q('Gieo 1 con xúc xắc 6 mặt, |Ω| = ?', ['6', '36', '1', '12'], 0, '6 mặt.'),
    Q('Biến cố A là?', ['Tập con của Ω', 'Toàn bộ Ω', 'Số thực', 'Phần tử của Ω'], 0, 'A ⊂ Ω.'),
    Q('Biến cố chắc chắn là?', ['∅ (nhầm với biến cố không thể)', 'Biến cố đối', 'Ω', 'Một phần tử'], 2, 'Ω luôn xảy ra trong mọi phép thử.'),
    Q('Biến cố không thể là?', ['Một phần tử', 'Biến cố đối', '∅', 'Ω (nhầm với biến cố chắc chắn)'], 2, '∅ không bao giờ xảy ra.'),
  ]),

  M(21, 'Xác suất cổ điển — Công thức Laplace', [
    Q('P(A) = ?', ['|A|/|Ω|', '|A|+|Ω|', '|Ω|/|A|', '|A|·|Ω|'], 0, 'Công thức Laplace cho không gian đồng khả năng.'),
    Q('Gieo xúc xắc 6 mặt, P(ra mặt chẵn) = ?', ['1/3', '2/3', '1/6', '1/2'], 3, '3 mặt chẵn / 6 = 1/2.'),
    Q('Rút 1 lá từ 52 lá, P(rút được lá Át)?', ['4/52', '13/52', '1/13', '1/52'], 2, '4 Át / 52 = 1/13.'),
    Q('0 ≤ P(A) ≤ ?', ['100', '+∞', '0', '1'], 3, 'Xác suất nhận giá trị trong [0;1].'),
    Q('P(Ω) = ?', ['0', 'Tuỳ phép thử', '0,5', '1'], 3, 'Biến cố chắc chắn có xác suất 1.'),
    Q('Gieo 2 xúc xắc, |Ω| = ?', ['12', '36', '72', '11'], 1, '6·6 = 36.'),
  ]),

  M(22, 'Biến cố đối — Biến cố hợp, giao', [
    Q('Biến cố đối của A, ký hiệu Ā, là?', ['A (giữ nguyên biến cố ban đầu)', 'Ω \\ A', 'A ∩ Ω (giao với không gian mẫu)', 'A ∪ ∅ (hợp với biến cố rỗng)'], 1, 'Ā = Ω \\ A.'),
    Q('P(Ā) = ?', ['1 − P(A)', 'P(A) (nhầm hai xác suất bằng nhau)', 'P(A) − 1', '1 + P(A)'], 0, 'Xác suất biến cố đối.'),
    Q('Biến cố hợp A ∪ B xảy ra khi?', ['A xảy ra hoặc B xảy ra', 'Cả A và B xảy ra', 'Không xảy ra', 'A xảy ra trước'], 0, 'A ∪ B ⇔ ít nhất một trong A, B xảy ra.'),
    Q('Biến cố giao A ∩ B xảy ra khi?', ['Chỉ B mà không có A', 'Cả A và B', 'Chỉ A mà không có B', 'Một trong hai'], 1, 'A ∩ B ⇔ cả 2 cùng xảy ra.'),
    Q('Hai biến cố xung khắc khi?', ['A ∪ B = Ω', 'A ⊂ B (A nằm trong B)', 'A = B (hai biến cố trùng nhau)', 'A ∩ B = ∅'], 3, 'Không thể cùng xảy ra.'),
    Q('Với A, B xung khắc, P(A ∪ B) = ?', ['P(A) − P(B)', 'P(A)·P(B)', 'max{P(A),P(B)}', 'P(A) + P(B)'], 3, 'Cộng xác suất khi xung khắc.'),
  ]),

  M(23, 'Bài tập xác suất tổng hợp', [
    Q('Gieo 2 xúc xắc, P(tổng = 7) = ?', ['1/6', '5/36', '7/36', '1/12'], 0, 'Có 6 cặp (1,6),(2,5),…,(6,1) → 6/36 = 1/6.'),
    Q('Hộp có 3 bi đỏ, 5 bi xanh. Lấy ngẫu nhiên 1 bi. P(đỏ)?', ['1/2', '3/5', '3/8', '5/8'], 2, '3/(3+5) = 3/8.'),
    Q('Tung 3 đồng xu, P(cả 3 ngửa)?', ['1/4', '1/8', '3/8', '1/2'], 1, '(1/2)³ = 1/8.'),
    Q('Lớp có 30 HS (12 nam, 18 nữ). Chọn ngẫu nhiên 1, P(nữ)?', ['1/2', '1/30', '18/30', '12/30'], 2, '18/30 = 3/5.'),
    Q('Rút 1 lá từ 52, P(lá đỏ hoặc lá Át)?', ['26/52', '28/52', '30/52', '24/52'], 1, '|đỏ| = 26, |Át| = 4, |đỏ ∩ Át| = 2 → 26 + 4 − 2 = 28.'),
    Q('Xác suất luôn nhận giá trị trong?', ['[0;100]', '[0;1]', '[−1;1]', 'R (tập số thực)'], 1, '0 ≤ P ≤ 1.'),
  ]),

  M(24, 'Phương trình đường thẳng — Vectơ chỉ phương và vectơ pháp tuyến', [
    Q('Vectơ chỉ phương của đường thẳng d?', ['Vectơ song song với d', 'Vectơ vuông góc với d', 'Điểm trên d', 'Số thực'], 0, 'Vectơ chỉ phương song song hoặc trùng phương với d.'),
    Q('Vectơ pháp tuyến của đường thẳng d?', ['Hệ số góc', 'Điểm thuộc d', 'Vectơ song song d', 'Vectơ vuông góc d'], 3, 'Vectơ pháp tuyến vuông góc với d.'),
    Q('PT tổng quát đường thẳng: ax + by + c = 0 có →n = ?', ['(b;a) (nhầm với vectơ chỉ phương)', '(c;1) (lẫn hệ số tự do)', '(−a;b)', '(a;b)'], 3, '→n = (a;b) là vectơ pháp tuyến.'),
    Q('PT tham số đường thẳng qua A(x₀;y₀) với →u = (u₁;u₂)?', ['{x = x₀·t; y = y₀·t}', '{x = u₁; y = u₂}', '{x = tu₁; y = tu₂}', '{x = x₀ + tu₁; y = y₀ + tu₂}'], 3, 'Phương trình tham số chuẩn.'),
    Q('Đường thẳng đi qua O(0;0) và A(1;2) có →u = ?', ['(1;0) (lấy vectơ đơn vị Ox)', '(0;2) (lấy vectơ đơn vị Oy)', '(2;1) (đảo toạ độ)', '(1;2)'], 3, '→u = →OA = (1;2).'),
    Q('PT tổng quát đường thẳng đi qua A(1;2) có →n = (3;4)?', ['3x + 4y − 11 = 0', '4x + 3y − 10 = 0', '3x + 4y + 11 = 0', 'x + y = 0'], 0, '3(x−1) + 4(y−2) = 0 → 3x + 4y − 11 = 0.'),
  ]),

  M(25, 'Vị trí tương đối — Khoảng cách từ điểm đến đường thẳng', [
    Q('Hai đường thẳng song song khi?', ['Trùng nhau', 'Vuông góc', 'Cắt nhau', 'Cùng VTCP, không trùng'], 3, 'Cùng phương + không có điểm chung.'),
    Q('Hai đường thẳng vuông góc khi tích vô hướng 2 →n bằng?', ['0', '1 (nhầm với song song)', '−1 (nhầm điều kiện hệ số góc)', '1'], 0, '→n₁·→n₂ = 0.'),
    Q('Khoảng cách từ M(x₀;y₀) đến d: ax+by+c=0 bằng?', ['|ax₀+by₀+c|/√(a²+b²)', '|ax₀+by₀+c|/(a²+b²)', '(ax₀+by₀+c)²', '|ax₀+by₀+c|'], 0, 'Công thức d(M,Δ).'),
    Q('Khoảng cách từ O(0;0) đến d: 3x + 4y − 5 = 0?', ['5', '5/√25', '0', '1'], 3, '|−5|/√(9+16) = 5/5 = 1.'),
    Q('Góc giữa 2 đường thẳng tính bằng?', ['cosα = |→n₁·→n₂|/(|→n₁|·|→n₂|)', 'α = 90°', 'tan = a/b', 'sinα = →n₁·→n₂'], 0, 'Công thức cos góc giữa 2 đường thẳng.'),
    Q('Hai đường thẳng cắt nhau khi?', ['→n₁ = →n₂', '→n₁ và →n₂ không cùng phương', '→n₁ + →n₂ = →0', 'Cùng VTCP'], 1, '2 →n không cùng phương ⇒ cắt nhau.'),
  ]),

  M(26, 'Đường tròn — Phương trình đường tròn', [
    Q('PT đường tròn tâm I(a;b), bán kính R?', ['(x−a) + (y−b) = R²', 'x² + y² = R', '(x+a)² + (y+b)² = R', '(x−a)² + (y−b)² = R²'], 3, 'PT chính tắc đường tròn.'),
    Q('PT x² + y² − 2x − 4y + 1 = 0 có tâm và bán kính?', ['I(2;1), R = √5', 'I(−1;−2), R = 2', 'I(1;2), R = 2', 'I(1;2), R = 4'], 2, 'I(1;2), R = √(1+4−1) = 2.'),
    Q('Bán kính đường tròn (x−3)² + (y+1)² = 16?', ['4', '8', '16', '2'], 0, 'R² = 16 → R = 4.'),
    Q('PT đường tròn đi qua O(0;0), tâm I(3;4)?', ['x² + y² = 25', '(x−3)² + (y−4)² = 25', 'x² + y² − 6x − 8y = 0', 'Cả A và C'], 3, 'R = OI = 5; PT (x−3)²+(y−4)² = 25 ⇔ x²+y²−6x−8y = 0.'),
    Q('Đường tròn (x−1)² + (y−2)² = 9 có tâm?', ['I(1;−2)', 'I(1;2)', 'I(−1;−2)', 'I(2;1)'], 1, 'Tâm là cặp (1;2).'),
    Q('PT tiếp tuyến tại điểm M(x₀;y₀) trên (x−a)²+(y−b)²=R² là?', ['x² + y² = R²', '(x₀−a)(x−a) + (y₀−b)(y−b) = R²', 'x + y = R', 'x₀x + y₀y = R²'], 1, 'Công thức phân đôi toạ độ.'),
  ]),

  M(27, 'Ba đường conic — Elip', [
    Q('PT chính tắc elip (a > b > 0)?', ['y² = 2px', 'x²/a² + y²/b² = 1', 'x²/a² − y²/b² = 1', 'x² + y² = a²'], 1, 'PT chính tắc elip nằm ngang.'),
    Q('Tâm sai e của elip?', ['e = b/c', 'e = a/c', 'e = c/a', 'e = a + c'], 2, 'e = c/a, c = √(a²−b²).'),
    Q('Tâm sai elip nằm trong khoảng?', ['[0;1] (kèm 2 đầu mút)', '[1;+∞)', '(0;1)', '(1;+∞) (nhầm với hypebol)'], 2, '0 < e < 1 (elip).'),
    Q('Elip có a = 5, b = 3 thì c = ?', ['√34 (cộng a² + b²)', '4', '√16 (chưa rút gọn căn)', '2'], 1, 'c = √(25−9) = 4.'),
    Q('Tổng khoảng cách từ một điểm trên elip đến 2 tiêu điểm bằng?', ['a + b (nhầm với chu vi)', '2a', '2c', '2b'], 1, 'Định nghĩa elip: MF₁ + MF₂ = 2a.'),
    Q('Elip có 2 trục đối xứng là?', ['Đường chéo', 'Ox và Oy', 'y = x và y = −x', 'Chỉ có 1 trục đối xứng Ox'], 1, 'Trục lớn và trục bé là Ox, Oy (với PT chính tắc).'),
  ]),

  M(28, 'Ba đường conic — Hypebol', [
    Q('PT chính tắc hypebol?', ['y² = 2px', 'x²/a² − y²/b² = 1', 'x + y = a', 'x²/a² + y²/b² = 1'], 1, 'Hypebol có dấu trừ.'),
    Q('Tâm sai hypebol?', ['e = 1 (nhầm với parabol)', 'e > 1', 'e = 0 (nhầm với đường tròn)', '0 < e < 1'], 1, 'e = c/a > 1 với c² = a² + b².'),
    Q('Hypebol x²/9 − y²/16 = 1 có c = ?', ['7', '5', '3', '4'], 1, 'c = √(9+16) = 5.'),
    Q('Hiệu khoảng cách |MF₁ − MF₂| với M trên hypebol bằng?', ['2c', '2b', '2a', 'a + b (cộng hai bán trục)'], 2, '|MF₁ − MF₂| = 2a.'),
    Q('Tiệm cận của hypebol x²/a² − y²/b² = 1?', ['y = ±(b/a)x', 'y = ±(a/b)x', 'y = ±(b²/a²)x', 'y = ±a·x (nhầm hệ số)'], 0, 'Hai tiệm cận đi qua O.'),
    Q('Hypebol đối xứng qua?', ['Ox, Oy', 'Chỉ Oy', 'Chỉ Ox', 'Đường y = x'], 0, 'Đối xứng qua cả 2 trục.'),
  ]),

  M(29, 'Ba đường conic — Parabol', [
    Q('PT chính tắc parabol có trục là Ox?', ['x² = 2py', 'x² + y² = p', 'y² = 2px', 'y = x²'], 2, 'y² = 2px với p > 0.'),
    Q('Tâm sai parabol e = ?', ['0', '1', '0 < e < 1 (nhầm với elip)', 'e > 1 (nhầm với hypebol)'], 1, 'e = 1.'),
    Q('Parabol y² = 8x có p = ?', ['16', '8', '2', '4'], 3, '2p = 8 → p = 4.'),
    Q('Tiêu điểm của parabol y² = 2px ở?', ['(p/2; 0)', '(0; p/2)', '(0; p)', '(p; 0)'], 0, 'F(p/2; 0).'),
    Q('Đường chuẩn của parabol y² = 2px?', ['y = p/2', 'x = p/2', 'y = −p/2', 'x = −p/2'], 3, 'Đường chuẩn x = −p/2.'),
    Q('Khoảng cách từ M trên parabol đến tiêu điểm bằng?', ['Một nửa', '2 lần', 'Khoảng cách từ M đến đường chuẩn', 'Khác nhau'], 2, 'Định nghĩa parabol: MF = d(M, Δ).'),
  ]),

  M(30, 'Bài tập tổng hợp Vectơ và Đường thẳng', [
    Q('Cho A(1;2), B(3;6). →AB = ?', ['(2;8) (lấy hiệu hoành, cộng tung)', '(4;2) (đảo trục)', '(−2;−4)', '(2;4)'], 3, '→AB = (3−1; 6−2) = (2;4).'),
    Q('Độ dài AB với A(0;0), B(3;4)?', ['7', '√7 (cộng 3+4 rồi căn)', '5', '25'], 2, '|→AB| = √(9+16) = 5.'),
    Q('PT đường thẳng qua 2 điểm A(0;0), B(2;4)?', ['y = x/2', 'y = 2x + 1', 'y = 2x', 'y = −2x'], 2, 'Hệ số góc 4/2 = 2, qua O.'),
    Q('PT đường thẳng qua A(1;1) song song y = 2x + 3?', ['y = −2x + 3', 'y = 2x − 1', 'y = 2x + 1', 'y = 2x + 3 (trùng đường đã cho)'], 1, 'Cùng hệ số góc 2; thay A(1;1): 1 = 2·1 + b → b = −1.'),
    Q('Khoảng cách từ M(2;1) đến d: 3x + 4y − 5 = 0?', ['5', '3', '1', '2'], 2, '|6+4−5|/5 = 5/5 = 1.'),
    Q('Hai đường thẳng y = 2x + 1 và y = −x/2 + 3 có?', ['Song song', 'Trùng nhau', 'Vuông góc', 'Không liên hệ'], 2, 'Tích hệ số góc 2·(−1/2) = −1 ⇒ vuông góc.'),
  ]),

  M(31, 'Ôn tập Đại số nâng cao', [
    Q('Tam thức x² − 3x + 2 ≥ 0 có nghiệm?', ['R (toàn bộ trục số)', '(−∞;1] ∪ [2;+∞)', '∅ (vô nghiệm)', '[1;2] (nhầm chiều bất phương trình)'], 1, 'Nghiệm 1 và 2; ngoài nghiệm cùng dấu a > 0.'),
    Q('Phương trình √(x+2) = x có nghiệm?', ['Vô nghiệm', 'x = −1', 'x = 2 và x = −1', 'x = 2'], 3, 'Bình phương: x² − x − 2 = 0 → x = 2 hoặc −1; loại x = −1 do x ≥ 0.'),
    Q('|x − 3| = 5 có nghiệm?', ['x = 2', 'x = 8 và x = −2', 'x = −2', 'x = 8'], 1, 'x − 3 = ±5.'),
    Q('Khai triển (1+x)³ có hệ số x² là?', ['3', '6', '2', '1'], 0, 'C(3,2) = 3.'),
    Q('Cho parabol y = x² − 4x + 4. Đỉnh?', ['(−2;0)', '(2;0)', '(0;4) (lấy giá trị tại x = 0)', '(2;4) (sai dấu khi tính y_đ)'], 1, 'x_đ = 2, y = 4 − 8 + 4 = 0.'),
    Q('Tập nghiệm của hệ {x + y ≤ 4; x ≥ 0; y ≥ 0} là?', ['Tam giác', 'Tứ giác (4 đỉnh)', 'Hình thang', 'Hình vuông'], 0, 'Tam giác đỉnh O, (4;0), (0;4).'),
  ]),

  M(32, 'Ôn tập Hình học — Vectơ, hệ thức lượng, đường thẳng', [
    Q('Cho A(1;0), B(0;1), C(2;3). →AB + →BC = ?', ['2→AB', '→CA (đảo chiều vectơ kết quả)', '→AC', '→0 (nhầm tổng bằng không)'], 2, 'Quy tắc 3 điểm.'),
    Q('Tam giác có a = 5, b = 7, C = 60°. c² = ?', ['35', '49', '39', '25'], 2, 'c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39.'),
    Q('Cho →a = (1;2), →b = (3;−1). →a·→b = ?', ['−1 (sai dấu khi nhân 2·(−1))', '1', '5', '7'], 1, '1·3 + 2·(−1) = 1.'),
    Q('Đường thẳng 2x − y + 3 = 0 có →n = ?', ['(1;2) (nhầm vectơ chỉ phương)', '(−1;2)', '(2;−1)', '(2;1) (quên dấu trừ của b)'], 2, '→n = (a;b) = (2;−1).'),
    Q('Đường tròn (x−1)² + (y+2)² = 9 có tâm và R?', ['I(1;−2), R = 3', 'I(1;−2), R = 9', 'I(−1;2), R = 9', 'I(1;2), R = 3'], 0, 'I(1;−2), R = √9 = 3.'),
    Q('Elip x²/25 + y²/16 = 1 có a, b, c?', ['a=25, b=16', 'a=5, b=4, c=3', 'a=4, b=5, c=3', 'a=5, b=3, c=4'], 1, 'c² = 25 − 16 = 9 → c = 3.'),
  ]),

  M(33, 'Ôn tập Thống kê và Xác suất', [
    Q('Cho mẫu 2, 4, 6, 8, 10. Trung bình?', ['6', '30', '5', '7'], 0, '(2+4+6+8+10)/5 = 6.'),
    Q('Trung vị của mẫu trên?', ['4', '6', '8', '5'], 1, 'Mẫu lẻ phần tử, trung vị là phần tử giữa = 6.'),
    Q('Phương sai mẫu 2,4,6,8,10 (chia n)?', ['10', '4', '8', '5'], 2, '(16+4+0+4+16)/5 = 40/5 = 8.'),
    Q('Tung 2 xúc xắc, P(tổng ≤ 4)?', ['1/6', '1/12', '1/4', '5/36'], 0, '(1,1)(1,2)(1,3)(2,1)(2,2)(3,1) = 6 → 6/36 = 1/6.'),
    Q('Lớp có 25 HS, chọn 3 HS làm cán bộ. Số cách?', ['25·3', 'A(25,3)', 'C(25,3)', '3!'], 2, 'Chọn không phân biệt thứ tự ⇒ tổ hợp.'),
    Q('Sắp 5 cuốn sách khác nhau lên kệ. Số cách?', ['C(5,2)', '25', '5²', '5!'], 3, 'Hoán vị 5 phần tử = 5! = 120.'),
  ]),

  M(34, 'Đề ôn tập tổng hợp 1', [
    Q('Phủ định của "∃x: x² + 1 = 0" là?', ['∃x: x² + 1 ≠ 0', 'Không xác định', '∀x: x² + 1 = 0', '∀x: x² + 1 ≠ 0'], 3, '¬∃ = ∀ với phủ định vị từ.'),
    Q('Bất phương trình x² − x − 2 ≤ 0 có nghiệm?', ['(−∞;−1]∪[2;+∞)', '[−1;2]', 'R (toàn bộ trục số)', '(−1;2)'], 1, 'Nghiệm −1, 2; ≤ 0 trong nghiệm.'),
    Q('Tam giác ABC có A = 60°, b = 8, c = 5. a² = ?', ['64', '89', '25', '49'], 3, 'a² = 64+25−2·8·5·cos60° = 89−40 = 49.'),
    Q('→a = (2;3), →b = (4;6). Hai vectơ này?', ['Bằng nhau', 'Cùng phương', 'Vuông góc', 'Đối nhau'], 1, '→b = 2·→a.'),
    Q('Khoảng cách từ A(1;2) đến d: x + y − 5 = 0?', ['√2', '0', '1', '2'], 0, '|1+2−5|/√2 = 2/√2 = √2.'),
    Q('Hộp có 10 bi (4 đỏ, 6 xanh). Lấy 2 bi. P(2 bi đỏ)?', ['2/10', 'C(4,2)/C(10,2)', '4/10', '6/45'], 1, 'C(4,2)/C(10,2) = 6/45 = 2/15.'),
  ]),

  M(35, 'Đề ôn tập tổng hợp 2 (cuối năm)', [
    Q('Tập nghiệm của |x − 2| < 3 là?', ['{−1;5}', '[−1;5]', '(−∞;−1)∪(5;+∞)', '(−1;5)'], 3, '−3 < x − 2 < 3 → −1 < x < 5.'),
    Q('Trong khai triển (1 + 2x)⁴, hệ số của x² là?', ['12', '24', '8', '6'], 1, 'C(4,2)·2² = 6·4 = 24.'),
    Q('Cho →u = (3;4), |→u| = ?', ['25', '5', '7', '12'], 1, '√(9+16) = 5.'),
    Q('Parabol y = −x² + 2x đạt cực đại tại?', ['x = 1, y_max = 1', 'x = 2, y = 0', 'x = −1, y = −3', 'x = 0, y = 0'], 0, 'x = 1, y = −1 + 2 = 1.'),
    Q('Đường tròn x² + y² = 25 cắt trục Ox tại?', ['(±5;0)', '(5;5) (nhầm điểm trên đường tròn)', '(0;±5)', 'Không cắt'], 0, 'y = 0 → x² = 25 → x = ±5.'),
    Q('Gieo 2 xúc xắc, P(ít nhất 1 mặt 6)?', ['1/6', '11/36', '25/36', '12/36'], 1, '1 − P(không mặt 6) = 1 − 25/36 = 11/36.'),
  ]),
];

export const H10TOAN_SCENARIOS = indexBy(H10TOAN_WEEKS);
