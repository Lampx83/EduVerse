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
    Q('Mệnh đề "Số 7 là số nguyên tố" có đặc điểm gì?', ['Mệnh đề đúng','Mệnh đề sai','Không phải mệnh đề','Mệnh đề chứa biến'], 0, '7 là số nguyên tố nên đây là mệnh đề đúng.'),
    Q('Câu nào sau đây KHÔNG phải mệnh đề?', ['Hà Nội là thủ đô Việt Nam','2 + 3 = 6','Bạn có khoẻ không?','Số 0 là số chẵn'], 2, 'Câu hỏi không có giá trị đúng/sai nên không là mệnh đề.'),
    Q('Phủ định của mệnh đề "Mọi số tự nhiên đều chia hết cho 2" là?', ['Mọi số tự nhiên đều không chia hết cho 2','Tồn tại số tự nhiên không chia hết cho 2','Tồn tại số tự nhiên chia hết cho 2','Không số tự nhiên nào chia hết cho 2'], 1, 'Phủ định ∀ là ∃ với phủ định vị từ.'),
    Q('Ký hiệu "∃x ∈ R: x² < 0" có giá trị?', ['Đúng','Sai','Không xác định','Tuỳ x'], 1, 'Bình phương số thực luôn ≥ 0 nên mệnh đề tồn tại này sai.'),
    Q('Mệnh đề kéo theo "Nếu P thì Q" được ký hiệu?', ['P ⇒ Q','P ⇔ Q','P ∧ Q','P ∨ Q'], 0, 'Dấu ⇒ chỉ phép kéo theo.'),
    Q('Mệnh đề đảo của "Nếu n chia hết cho 6 thì n chia hết cho 3" là?', ['Nếu n chia hết cho 3 thì n chia hết cho 6','Nếu n không chia hết cho 6 thì n không chia hết cho 3','Nếu n chia hết cho 6 thì n không chia hết cho 3','Nếu n chia hết cho 3 thì n không chia hết cho 6'], 0, 'Mệnh đề đảo đổi vị trí P và Q.'),
  ]),

  M(2, 'Tập hợp và các phép toán trên tập hợp', [
    Q('Cho A = {1;2;3;4}, B = {3;4;5;6}. A ∩ B = ?', ['{1;2;5;6}','{3;4}','{1;2;3;4;5;6}','∅'], 1, 'Giao là phần tử chung: 3 và 4.'),
    Q('Với A, B như trên, A ∪ B = ?', ['{3;4}','{1;2;5;6}','{1;2;3;4;5;6}','{1;2;3;4}'], 2, 'Hợp gồm mọi phần tử của A hoặc B.'),
    Q('A \\ B (hiệu) với A = {1;2;3;4}, B = {3;4;5;6} bằng?', ['{1;2}','{5;6}','{3;4}','∅'], 0, 'Hiệu A\\B gồm phần tử thuộc A nhưng không thuộc B.'),
    Q('Tập rỗng được ký hiệu là?', ['∅','{0}','{∅}','0'], 0, 'Ký hiệu ∅ chỉ tập không có phần tử.'),
    Q('Số tập con của A = {a;b;c} là?', ['3','6','8','9'], 2, 'Số tập con = 2ⁿ = 2³ = 8.'),
    Q('Tập hợp A = {x ∈ N | x < 5} có bao nhiêu phần tử?', ['4','5','6','Vô hạn'], 1, 'A = {0;1;2;3;4} có 5 phần tử.'),
  ]),

  M(3, 'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn', [
    Q('Bất phương trình 2x + 3y ≤ 6 có miền nghiệm là?', ['Nửa mặt phẳng bờ 2x+3y=6','Đường thẳng 2x+3y=6','Toàn mặt phẳng','Tập rỗng'], 0, 'Bất phương trình bậc nhất 2 ẩn có miền nghiệm là nửa mặt phẳng (kể cả bờ).'),
    Q('Điểm O(0;0) có thuộc miền nghiệm của x + y ≤ 4 không?', ['Có','Không','Tuỳ trục','Không xác định'], 0, '0 + 0 = 0 ≤ 4 nên O thuộc miền nghiệm.'),
    Q('Cặp (1;2) có là nghiệm của 3x − y > 0 không?', ['Có','Không','Bằng 0','Không xác định'], 0, '3·1 − 2 = 1 > 0 nên đúng.'),
    Q('Để biểu diễn miền nghiệm, ta vẽ đường thẳng rồi?', ['Tô cả 2 phía','Chọn điểm thử để xác định nửa mặt phẳng','Bỏ qua đường thẳng','Chỉ vẽ trục Ox'], 1, 'Quy trình: vẽ đường thẳng → chọn điểm thử → tô miền thoả mãn.'),
    Q('Hệ bất phương trình bậc nhất 2 ẩn có miền nghiệm là?', ['Giao của các nửa mặt phẳng','Hợp của các nửa mặt phẳng','Một đường thẳng','Tập rỗng luôn luôn'], 0, 'Giao của các nửa mặt phẳng nghiệm từng bất phương trình.'),
    Q('Trong quy hoạch tuyến tính, hàm mục tiêu F(x;y) đạt cực trị tại?', ['Đỉnh của đa giác miền nghiệm','Tâm đa giác','Điểm bất kỳ','Gốc toạ độ'], 0, 'F đạt min/max tại các đỉnh của đa giác lồi miền nghiệm.'),
  ]),

  M(4, 'Hàm số bậc hai', [
    Q('Hàm số y = ax² + bx + c (a ≠ 0) có đồ thị là?', ['Đường thẳng','Parabol','Hypebol','Elip'], 1, 'Đồ thị hàm bậc 2 là parabol.'),
    Q('Parabol y = x² − 4x + 3 có đỉnh tại?', ['(2; −1)','(−2; −1)','(2; 1)','(0; 3)'], 0, 'x_đỉnh = −b/(2a) = 2; y = 4 − 8 + 3 = −1.'),
    Q('Trục đối xứng của y = 2x² − 8x + 1 là?', ['x = 2','x = −2','x = 4','x = −4'], 0, 'x = −b/(2a) = 8/4 = 2.'),
    Q('Parabol y = −x² + 4x quay bề lõm?', ['Lên trên','Xuống dưới','Sang phải','Sang trái'], 1, 'a = −1 < 0 nên bề lõm quay xuống.'),
    Q('Giá trị lớn nhất của y = −x² + 6x − 5 là?', ['4','5','6','−5'], 0, 'y_max tại x = 3, y = −9 + 18 − 5 = 4.'),
    Q('Đồ thị y = x² cắt trục Ox tại điểm?', ['(1;0)','(0;0)','(−1;0) và (1;0)','Không cắt'], 1, 'x² = 0 ⇔ x = 0.'),
  ]),

  M(5, 'Dấu của tam thức bậc hai', [
    Q('Tam thức f(x) = ax² + bx + c có Δ < 0 và a > 0 thì f(x)?', ['Luôn dương','Luôn âm','Đổi dấu','Bằng 0'], 0, 'Δ < 0 nên f vô nghiệm, dấu cùng dấu a > 0.'),
    Q('f(x) = x² − 5x + 6 dương khi?', ['x ∈ (2;3)','x ∈ (−∞;2) ∪ (3;+∞)','x ∈ R','x = 2 hoặc x = 3'], 1, 'Hai nghiệm 2 và 3, ngoài nghiệm cùng dấu a > 0 nên dương.'),
    Q('Bất phương trình x² − 4 < 0 có tập nghiệm?', ['(−2;2)','(−∞;−2) ∪ (2;+∞)','R','∅'], 0, 'Trong nghiệm trái dấu a, mà a = 1 > 0 nên âm trong (−2;2).'),
    Q('Tam thức f(x) = −x² + 3x − 2 có 2 nghiệm là?', ['1 và 2','−1 và 2','1 và −2','−1 và −2'], 0, 'Giải −x² + 3x − 2 = 0 ⇔ x = 1 hoặc x = 2.'),
    Q('Để x² + (m−1)x + 1 > 0 với mọi x thì Δ?', ['Δ < 0','Δ = 0','Δ > 0','Δ ≥ 0'], 0, 'Cần a > 0 và Δ < 0.'),
    Q('Định lý dấu: tam thức cùng dấu a khi nào?', ['Trong khoảng 2 nghiệm','Ngoài khoảng 2 nghiệm','Tại nghiệm','Khắp R'], 1, 'Ngoài hai nghiệm, tam thức cùng dấu hệ số a.'),
  ]),

  M(6, 'Phương trình quy về bậc hai', [
    Q('Phương trình √(x+1) = x − 1 có điều kiện?', ['x ≥ −1','x ≥ 1','x ≥ 0','x ∈ R'], 1, 'Cần x − 1 ≥ 0 và x + 1 ≥ 0 ⇒ x ≥ 1.'),
    Q('Nghiệm của √(2x+3) = x là?', ['x = 3','x = −1','x = 3 và x = −1','Vô nghiệm'], 0, 'Bình phương: 2x+3 = x² → x² − 2x − 3 = 0 → x = 3 hoặc −1; loại x = −1 do x ≥ 0. Vậy x = 3.'),
    Q('Phương trình |2x − 1| = 3 có nghiệm?', ['x = 2','x = −1','x = 2 và x = −1','x = 1'], 2, '2x − 1 = ±3 → x = 2 hoặc x = −1.'),
    Q('Phương trình trùng phương x⁴ − 5x² + 4 = 0 đặt t = x² (t ≥ 0) thì?', ['t² − 5t + 4 = 0','t² + 5t + 4 = 0','t² − 5t − 4 = 0','t² + 5t − 4 = 0'], 0, 'Thay x² = t ta được t² − 5t + 4 = 0.'),
    Q('Số nghiệm của x⁴ − 5x² + 4 = 0?', ['2','3','4','1'], 2, 't = 1 hoặc t = 4 → x = ±1; ±2. Tổng cộng 4 nghiệm.'),
    Q('Bình phương 2 vế PT vô tỉ cần?', ['Bỏ điều kiện','Kiểm tra lại nghiệm','Đảo dấu','Đổi biến'], 1, 'Bình phương 2 vế có thể sinh nghiệm ngoại lai, cần thử lại.'),
  ]),

  M(7, 'Hệ thức lượng trong tam giác — Định lý cosin và sin', [
    Q('Định lý cosin: a² = ?', ['b² + c² − 2bc·cosA','b² + c² + 2bc·cosA','b² − c²','2bc·cosA'], 0, 'a² = b² + c² − 2bc·cosA.'),
    Q('Định lý sin: a/sinA = ?', ['2R','R','R/2','b/sinB chỉ'], 0, 'a/sinA = b/sinB = c/sinC = 2R (R là bán kính đường tròn ngoại tiếp).'),
    Q('Tam giác có a = 3, b = 4, c = 5 vuông tại?', ['A','B','C','Không vuông'], 2, '3² + 4² = 5² ⇒ vuông tại C (đỉnh đối cạnh huyền).'),
    Q('Trong tam giác ABC, nếu cosA = 0 thì A bằng?', ['60°','90°','120°','30°'], 1, 'cos90° = 0.'),
    Q('Diện tích tam giác theo công thức Heron khi biết 3 cạnh, đặt p = (a+b+c)/2, S = ?', ['√(p(p−a)(p−b)(p−c))','p(p−a)(p−b)(p−c)','(a+b+c)/2','½·a·b'], 0, 'Công thức Heron.'),
    Q('Công thức S = ½·ab·sinC dùng khi biết?', ['3 cạnh','2 cạnh và góc xen giữa','1 cạnh và 1 góc','3 góc'], 1, 'Hai cạnh kề và góc xen giữa.'),
  ]),

  M(8, 'Vectơ — Khái niệm và phép cộng, trừ', [
    Q('Vectơ là đại lượng có?', ['Chỉ độ lớn','Chỉ hướng','Độ lớn và hướng','Chỉ điểm đầu'], 2, 'Vectơ có cả độ lớn và hướng.'),
    Q('Hai vectơ bằng nhau khi?', ['Cùng độ dài','Cùng hướng','Cùng độ dài và cùng hướng','Cùng điểm đầu'], 2, 'Bằng nhau ⇔ cùng phương, cùng hướng, cùng độ dài.'),
    Q('Vectơ-không được ký hiệu?', ['→0','→1','→AB với A ≠ B','→i'], 0, 'Vectơ-không là vectơ có điểm đầu trùng điểm cuối.'),
    Q('Quy tắc 3 điểm: →AB + →BC = ?', ['→AC','→CA','→AB','→0'], 0, '→AB + →BC = →AC.'),
    Q('→AB − →AC = ?', ['→BC','→CB','→AB + →CA','→AC'], 1, '→AB − →AC = →CB.'),
    Q('Quy tắc hình bình hành ABCD: →AB + →AD = ?', ['→AC','→AB','→BD','→AD'], 0, '→AB + →AD = →AC (đường chéo từ A).'),
  ]),

  M(9, 'Vectơ — Tích của vectơ với một số', [
    Q('k·→a cùng hướng với →a khi?', ['k > 0','k < 0','k = 0','k ≠ 0'], 0, 'k > 0 ⇒ cùng hướng; k < 0 ⇒ ngược hướng.'),
    Q('Độ dài |k·→a| = ?', ['|k|·|→a|','k·|→a|','|→a|','k²·|→a|'], 0, '|k·→a| = |k|·|→a|.'),
    Q('Nếu →b = 2·→a thì →b và →a?', ['Vuông góc','Cùng phương','Trái dấu','Bằng nhau'], 1, 'k = 2 nên cùng phương.'),
    Q('Hai vectơ →a, →b (→b ≠ →0) cùng phương ⇔ tồn tại?', ['k để →a = k·→b','m để →a + →b = 0','t để →a − →b = 0','k để |→a| = k·|→b|'], 0, 'Định nghĩa cùng phương qua tích vô hướng.'),
    Q('Điểm M là trung điểm AB thì →MA + →MB = ?', ['→0','→AB','2·→MA','→AB/2'], 0, 'Hai vectơ đối nên tổng bằng →0.'),
    Q('G là trọng tâm tam giác ABC thì →GA + →GB + →GC = ?', ['→0','→AB','3·→GA','→AC'], 0, 'Tính chất trọng tâm: tổng 3 vectơ từ trọng tâm tới 3 đỉnh bằng →0.'),
  ]),

  M(10, 'Hệ trục toạ độ — Toạ độ của vectơ', [
    Q('Trong mặt phẳng Oxy, →i và →j là?', ['Vectơ đơn vị trên Ox và Oy','Hai điểm','Hai số','Vectơ-không'], 0, '→i = (1;0), →j = (0;1).'),
    Q('Vectơ →a = (3; −2) có toạ độ?', ['x = 3, y = −2','x = −2, y = 3','x = 3, y = 2','x = 5'], 0, 'Cặp (x;y) chính là toạ độ.'),
    Q('Cho A(1;2), B(4;6). →AB = ?', ['(3;4)','(5;8)','(−3;−4)','(3;8)'], 0, '→AB = (x_B − x_A; y_B − y_A) = (3;4).'),
    Q('Độ dài |→a| với →a = (3;4)?', ['5','7','25','√7'], 0, '|→a| = √(9+16) = 5.'),
    Q('Hai vectơ →a = (1;2), →b = (3;6) có?', ['Cùng phương','Vuông góc','Bằng nhau','Đối nhau'], 0, '→b = 3·→a nên cùng phương.'),
    Q('Toạ độ trung điểm M của AB với A(2;4), B(6;8)?', ['(4;6)','(8;12)','(4;4)','(2;2)'], 0, 'M = ((2+6)/2; (4+8)/2) = (4;6).'),
  ]),

  M(11, 'Tích vô hướng của hai vectơ', [
    Q('Tích vô hướng →a·→b = ?', ['|→a|·|→b|·cos(→a,→b)','|→a|·|→b|·sin(→a,→b)','|→a|+|→b|','|→a|·|→b|'], 0, 'Định nghĩa: →a·→b = |→a|·|→b|·cosα.'),
    Q('→a·→b = 0 (cả 2 khác →0) khi và chỉ khi?', ['Cùng hướng','Ngược hướng','Vuông góc','Bằng nhau'], 2, 'cos90° = 0.'),
    Q('Với →a = (x₁;y₁), →b = (x₂;y₂): →a·→b = ?', ['x₁x₂ + y₁y₂','x₁y₂ + x₂y₁','x₁x₂ − y₁y₂','x₁+x₂+y₁+y₂'], 0, 'Công thức toạ độ tích vô hướng.'),
    Q('Cho →a = (1;2), →b = (3;4). →a·→b = ?', ['11','10','7','14'], 0, '1·3 + 2·4 = 3 + 8 = 11.'),
    Q('Góc giữa hai vectơ →a, →b tính bằng?', ['cosα = (→a·→b)/(|→a|·|→b|)','sinα = →a·→b','tanα = →a/→b','α = →a·→b'], 0, 'Suy từ định nghĩa tích vô hướng.'),
    Q('Bình phương vô hướng →a² = ?', ['|→a|²','|→a|','0','2|→a|'], 0, '→a·→a = |→a|·|→a|·cos0 = |→a|².'),
  ]),

  M(12, 'Số gần đúng và sai số', [
    Q('Sai số tuyệt đối Δ_a của a so với ā là?', ['|a − ā|','a + ā','a/ā','a·ā'], 0, 'Δ_a = |a − ā|.'),
    Q('Sai số tương đối được tính?', ['Δ_a/|ā|','Δ_a + ā','|a − ā|·100%','Δ_a − ā'], 0, 'δ_a = Δ_a/|ā| (thường nhân 100%).'),
    Q('Số π ≈ 3,14 là số?', ['Chính xác','Gần đúng','Vô tỉ chính xác','Nguyên'], 1, '3,14 là giá trị gần đúng của π.'),
    Q('Quy tròn 12,468 đến chữ số hàng phần mười?', ['12,4','12,5','12,46','12,47'], 1, 'Chữ số hàng phần trăm là 6 ≥ 5 nên tăng lên 12,5.'),
    Q('Một số đo 25,7 cm với độ chính xác 0,1 cm thì giá trị thực thuộc?', ['[25,6; 25,8]','[25,7; 25,8]','[25,6; 25,7]','25,7 chính xác'], 0, 'Giá trị thực ∈ [25,7 − 0,1; 25,7 + 0,1].'),
    Q('Chữ số đáng tin của một số gần đúng là?', ['Chữ số có sai số ≤ nửa đơn vị hàng đó','Mọi chữ số','Chữ số cuối cùng','Chữ số 0'], 0, 'Định nghĩa chữ số đáng tin trong số gần đúng.'),
  ]),

  M(13, 'Mẫu số liệu — Bảng tần số ghép lớp', [
    Q('Khi số liệu nhiều và phân tán rộng, ta dùng?', ['Bảng tần số','Bảng tần số ghép lớp','Biểu đồ tròn duy nhất','Số trung vị'], 1, 'Bảng tần số ghép lớp dùng cho dữ liệu liên tục/phân tán.'),
    Q('Lớp ghép thường có dạng?', ['[a; b)','(a; b]','{a; b}','a, b'], 0, 'Quy ước [a;b) đóng trái mở phải.'),
    Q('Giá trị đại diện của lớp [10;20) là?', ['10','15','20','12,5'], 1, 'Trung điểm: (10+20)/2 = 15.'),
    Q('Biểu đồ tần suất ghép lớp thường vẽ dạng?', ['Cột (histogram)','Tròn','Đường thẳng','Điểm'], 0, 'Histogram là biểu đồ cột không khe hở.'),
    Q('Tần suất của một lớp = ?', ['Tần số/tổng số liệu','Tần số · tổng','Tổng/tần số','Tần số cộng giá trị đại diện'], 0, 'Tần suất = tần số chia tổng số liệu.'),
    Q('Tổng tần suất của tất cả lớp bằng?', ['100% (hoặc 1)','Tổng tần số','0','Tuỳ mẫu'], 0, 'Tổng tần suất luôn bằng 1 (hoặc 100%).'),
  ]),

  M(14, 'Số trung bình — Trung vị — Mốt cho mẫu ghép lớp', [
    Q('Số trung bình mẫu ghép lớp tính bằng?', ['Σ(f_i · x_i)/n','Σ x_i','Σ f_i','Σ(x_i)/n'], 0, 'x_i là giá trị đại diện, f_i là tần số lớp, n = Σf_i.'),
    Q('Trung vị là?', ['Giá trị giữa của mẫu sắp xếp','Trung bình cộng','Giá trị xuất hiện nhiều nhất','Giá trị lớn nhất'], 0, 'Trung vị chia mẫu thành 2 phần bằng nhau.'),
    Q('Mốt (mode) là?', ['Giá trị có tần số lớn nhất','Giá trị nhỏ nhất','Trung bình cộng','Trung vị'], 0, 'Mốt = giá trị/lớp có tần số lớn nhất.'),
    Q('Một mẫu có thể có?', ['Một mốt duy nhất','Nhiều mốt','Không có mốt','Cả 3 đáp án trên'], 3, 'Mẫu có thể có 0, 1, hoặc nhiều mốt.'),
    Q('Để đo độ tập trung dữ liệu, ta dùng?', ['Trung bình, trung vị, mốt','Phương sai','Độ lệch chuẩn','Khoảng biến thiên'], 0, '3 số đo độ tập trung của mẫu.'),
    Q('Số liệu có nhiều ngoại lệ (outliers), nên dùng số đo nào?', ['Trung bình','Trung vị','Mốt','Tổng'], 1, 'Trung vị ít bị ảnh hưởng bởi ngoại lệ hơn trung bình.'),
  ]),

  M(15, 'Phương sai và độ lệch chuẩn', [
    Q('Phương sai mẫu s² đo điều gì?', ['Độ tập trung','Độ phân tán quanh trung bình','Trung vị','Mốt'], 1, 'Phương sai đo độ phân tán của dữ liệu.'),
    Q('Công thức phương sai: s² = ?', ['Σ(x_i − x̄)²/n','Σ(x_i − x̄)/n','Σx_i/n','(Σx_i)²/n'], 0, 's² = (1/n)·Σ(x_i − x̄)².'),
    Q('Độ lệch chuẩn s = ?', ['√(s²)','s²/2','|s²|','(s²)²'], 0, 's = √(s²).'),
    Q('Đơn vị của độ lệch chuẩn?', ['Cùng đơn vị dữ liệu','Đơn vị bình phương','Không đơn vị','Phần trăm'], 0, 's cùng đơn vị với x.'),
    Q('Khoảng biến thiên R = ?', ['x_max − x_min','x_max + x_min','x_max · x_min','x̄'], 0, 'R = giá trị lớn nhất trừ nhỏ nhất.'),
    Q('Hai mẫu cùng trung bình, mẫu nào ổn định hơn?', ['Mẫu có s nhỏ hơn','Mẫu có s lớn hơn','Mẫu có nhiều phần tử hơn','Mẫu có mốt lớn hơn'], 0, 's nhỏ ⇒ dữ liệu tập trung quanh trung bình ⇒ ổn định hơn.'),
  ]),

  M(16, 'Quy tắc đếm — Cộng và nhân', [
    Q('Quy tắc cộng dùng khi?', ['Hai hành động loại trừ nhau','Hai hành động liên tiếp','Lặp lại','Hoán đổi'], 0, 'Cộng khi các trường hợp không xảy ra cùng lúc.'),
    Q('Quy tắc nhân dùng khi?', ['Hai hành động liên tiếp/độc lập','Hai hành động loại trừ','Hoán đổi vị trí','Sắp xếp'], 0, 'Nhân khi thực hiện k giai đoạn liên tiếp.'),
    Q('Từ A đi B có 3 đường, B đi C có 2 đường. Số cách từ A → C qua B?', ['5','6','9','1'], 1, '3 · 2 = 6 (quy tắc nhân).'),
    Q('Bạn có 4 áo và 3 quần. Có bao nhiêu cách chọn 1 bộ?', ['7','12','9','4'], 1, '4 · 3 = 12.'),
    Q('Đi từ X đến Y có 2 đường, hoặc đi tàu (3 chuyến) hoặc xe (4 chuyến). Tổng?', ['12','7','10','9'], 1, 'Tàu hoặc xe, loại trừ: 3 + 4 = 7.'),
    Q('Một mật khẩu 4 chữ số (0–9), số mật khẩu khác nhau?', ['10·9·8·7','10⁴','4!','10·4'], 1, '10⁴ = 10000 (cho phép lặp).'),
  ]),

  M(17, 'Hoán vị — Chỉnh hợp — Tổ hợp', [
    Q('Hoán vị của n phần tử Pₙ = ?', ['n!','n','n²','2ⁿ'], 0, 'Pₙ = n!.'),
    Q('Chỉnh hợp chập k của n: A(n,k) = ?', ['n!/(n−k)!','n!/k!','n!/(k!(n−k)!)','k!'], 0, 'A(n,k) = n!/(n−k)!.'),
    Q('Tổ hợp chập k của n: C(n,k) = ?', ['n!/(k!·(n−k)!)','n!/k!','n!/(n−k)!','k·n'], 0, 'C(n,k) = n!/(k!·(n−k)!).'),
    Q('5! = ?', ['25','60','120','720'], 2, '5·4·3·2·1 = 120.'),
    Q('C(5,2) = ?', ['10','20','5','15'], 0, '5!/(2!·3!) = 10.'),
    Q('A(5,2) = ?', ['10','20','15','25'], 1, '5!/(5−2)! = 5·4 = 20.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Phủ định của "∀x ∈ R: x² ≥ 0" là?', ['∃x ∈ R: x² < 0','∀x ∈ R: x² ≤ 0','∃x ∈ R: x² ≥ 0','∀x ∈ R: x² < 0'], 0, '¬∀x P(x) = ∃x ¬P(x).'),
    Q('Tập nghiệm của x² − 4x + 3 ≤ 0 là?', ['[1;3]','(1;3)','(−∞;1]∪[3;+∞)','R'], 0, 'Nghiệm 1 và 3; trong nghiệm trái dấu a, mà a > 0 nên ≤ 0 trong [1;3].'),
    Q('Trong tam giác ABC, a = 7, b = 5, C = 60°. c² = ?', ['39','49','25','35'], 0, 'c² = 49 + 25 − 2·7·5·cos60° = 74 − 35 = 39.'),
    Q('Cho →a = (2;3), →b = (−1;4). →a·→b = ?', ['10','14','−2','5'], 0, '2·(−1) + 3·4 = −2 + 12 = 10.'),
    Q('Số hoán vị của 4 phần tử?', ['12','16','24','4'], 2, '4! = 24.'),
    Q('Phương sai đo?', ['Độ tập trung','Độ phân tán','Trung vị','Tần số'], 1, 'Phương sai đo độ phân tán.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Nhị thức Newton', [
    Q('Công thức nhị thức Newton: (a+b)ⁿ = ?', ['Σ C(n,k)·aⁿ⁻ᵏ·bᵏ','Σ C(n,k)·aᵏ·bⁿ⁻ᵏ giống nhau','aⁿ + bⁿ','n·(a+b)'], 0, 'Cả 2 cách viết Σ C(n,k)·aⁿ⁻ᵏ·bᵏ = Σ C(n,k)·aᵏ·bⁿ⁻ᵏ.'),
    Q('Số hạng thứ k+1 trong khai triển (a+b)ⁿ là?', ['C(n,k)·aⁿ⁻ᵏ·bᵏ','C(n,k)·aᵏ·bⁿ','C(n,k+1)','aⁿ⁻ᵏ'], 0, 'T_{k+1} = C(n,k)·aⁿ⁻ᵏ·bᵏ.'),
    Q('Khai triển (1+x)⁴ có?', ['5 số hạng','4 số hạng','3 số hạng','6 số hạng'], 0, 'n + 1 = 5 số hạng.'),
    Q('(a+b)³ = ?', ['a³ + 3a²b + 3ab² + b³','a³ + b³','a³ − b³','a³ + 3ab + b³'], 0, 'Khai triển bậc 3 quen thuộc.'),
    Q('Hệ số của x² trong (1+x)⁵ là?', ['5','10','15','20'], 1, 'C(5,2) = 10.'),
    Q('Tổng các hệ số trong khai triển (1+x)ⁿ bằng?', ['2ⁿ','n','n²','n!'], 0, 'Thay x = 1: (1+1)ⁿ = 2ⁿ.'),
  ]),

  M(20, 'Xác suất cổ điển — Không gian mẫu, biến cố', [
    Q('Không gian mẫu Ω là?', ['Tập tất cả kết quả có thể','Tập kết quả thuận lợi','Một biến cố','Số phần tử'], 0, 'Ω chứa toàn bộ kết quả của phép thử.'),
    Q('Tung 1 đồng xu, |Ω| = ?', ['1','2','3','4'], 1, '2 kết quả: ngửa, sấp.'),
    Q('Gieo 1 con xúc xắc 6 mặt, |Ω| = ?', ['6','12','36','1'], 0, '6 mặt.'),
    Q('Biến cố A là?', ['Tập con của Ω','Toàn bộ Ω','Phần tử của Ω','Số thực'], 0, 'A ⊂ Ω.'),
    Q('Biến cố chắc chắn là?', ['Ω','∅','Một phần tử','Biến cố đối'], 0, 'Ω luôn xảy ra trong mọi phép thử.'),
    Q('Biến cố không thể là?', ['Ω','∅','Một phần tử','Biến cố đối'], 1, '∅ không bao giờ xảy ra.'),
  ]),

  M(21, 'Xác suất cổ điển — Công thức Laplace', [
    Q('P(A) = ?', ['|A|/|Ω|','|Ω|/|A|','|A|·|Ω|','|A|+|Ω|'], 0, 'Công thức Laplace cho không gian đồng khả năng.'),
    Q('Gieo xúc xắc 6 mặt, P(ra mặt chẵn) = ?', ['1/2','1/3','1/6','2/3'], 0, '3 mặt chẵn / 6 = 1/2.'),
    Q('Rút 1 lá từ 52 lá, P(rút được lá Át)?', ['1/52','4/52','1/13','13/52'], 2, '4 Át / 52 = 1/13.'),
    Q('0 ≤ P(A) ≤ ?', ['0','1','100','+∞'], 1, 'Xác suất nhận giá trị trong [0;1].'),
    Q('P(Ω) = ?', ['0','0,5','1','Tuỳ phép thử'], 2, 'Biến cố chắc chắn có xác suất 1.'),
    Q('Gieo 2 xúc xắc, |Ω| = ?', ['12','36','72','11'], 1, '6·6 = 36.'),
  ]),

  M(22, 'Biến cố đối — Biến cố hợp, giao', [
    Q('Biến cố đối của A, ký hiệu Ā, là?', ['Ω \\ A','A ∩ Ω','A ∪ ∅','A'], 0, 'Ā = Ω \\ A.'),
    Q('P(Ā) = ?', ['1 − P(A)','P(A) − 1','P(A)','1 + P(A)'], 0, 'Xác suất biến cố đối.'),
    Q('Biến cố hợp A ∪ B xảy ra khi?', ['A xảy ra hoặc B xảy ra','Cả A và B xảy ra','Không xảy ra','A xảy ra trước'], 0, 'A ∪ B ⇔ ít nhất một trong A, B xảy ra.'),
    Q('Biến cố giao A ∩ B xảy ra khi?', ['Chỉ A','Chỉ B','Cả A và B','Một trong hai'], 2, 'A ∩ B ⇔ cả 2 cùng xảy ra.'),
    Q('Hai biến cố xung khắc khi?', ['A ∩ B = ∅','A ∪ B = Ω','A = B','A ⊂ B'], 0, 'Không thể cùng xảy ra.'),
    Q('Với A, B xung khắc, P(A ∪ B) = ?', ['P(A) + P(B)','P(A)·P(B)','P(A) − P(B)','max{P(A),P(B)}'], 0, 'Cộng xác suất khi xung khắc.'),
  ]),

  M(23, 'Bài tập xác suất tổng hợp', [
    Q('Gieo 2 xúc xắc, P(tổng = 7) = ?', ['1/6','5/36','7/36','1/12'], 0, 'Có 6 cặp (1,6),(2,5),…,(6,1) → 6/36 = 1/6.'),
    Q('Hộp có 3 bi đỏ, 5 bi xanh. Lấy ngẫu nhiên 1 bi. P(đỏ)?', ['3/8','5/8','3/5','1/2'], 0, '3/(3+5) = 3/8.'),
    Q('Tung 3 đồng xu, P(cả 3 ngửa)?', ['1/2','1/4','1/8','3/8'], 2, '(1/2)³ = 1/8.'),
    Q('Lớp có 30 HS (12 nam, 18 nữ). Chọn ngẫu nhiên 1, P(nữ)?', ['12/30','18/30','1/2','1/30'], 1, '18/30 = 3/5.'),
    Q('Rút 1 lá từ 52, P(lá đỏ hoặc lá Át)?', ['28/52','26/52','30/52','24/52'], 0, '|đỏ| = 26, |Át| = 4, |đỏ ∩ Át| = 2 → 26 + 4 − 2 = 28.'),
    Q('Xác suất luôn nhận giá trị trong?', ['[0;1]','[−1;1]','[0;100]','R'], 0, '0 ≤ P ≤ 1.'),
  ]),

  M(24, 'Phương trình đường thẳng — Vectơ chỉ phương và vectơ pháp tuyến', [
    Q('Vectơ chỉ phương của đường thẳng d?', ['Vectơ song song với d','Vectơ vuông góc với d','Điểm trên d','Số thực'], 0, 'Vectơ chỉ phương song song hoặc trùng phương với d.'),
    Q('Vectơ pháp tuyến của đường thẳng d?', ['Vectơ song song d','Vectơ vuông góc d','Điểm thuộc d','Hệ số góc'], 1, 'Vectơ pháp tuyến vuông góc với d.'),
    Q('PT tổng quát đường thẳng: ax + by + c = 0 có →n = ?', ['(a;b)','(b;a)','(−a;b)','(c;1)'], 0, '→n = (a;b) là vectơ pháp tuyến.'),
    Q('PT tham số đường thẳng qua A(x₀;y₀) với →u = (u₁;u₂)?', ['{x = x₀ + tu₁; y = y₀ + tu₂}','{x = u₁; y = u₂}','{x = tu₁; y = tu₂}','{x = x₀·t; y = y₀·t}'], 0, 'Phương trình tham số chuẩn.'),
    Q('Đường thẳng đi qua O(0;0) và A(1;2) có →u = ?', ['(1;2)','(2;1)','(1;0)','(0;2)'], 0, '→u = →OA = (1;2).'),
    Q('PT tổng quát đường thẳng đi qua A(1;2) có →n = (3;4)?', ['3x + 4y − 11 = 0','3x + 4y + 11 = 0','4x + 3y − 10 = 0','x + y = 0'], 0, '3(x−1) + 4(y−2) = 0 → 3x + 4y − 11 = 0.'),
  ]),

  M(25, 'Vị trí tương đối — Khoảng cách từ điểm đến đường thẳng', [
    Q('Hai đường thẳng song song khi?', ['Cùng VTCP, không trùng','Cắt nhau','Trùng nhau','Vuông góc'], 0, 'Cùng phương + không có điểm chung.'),
    Q('Hai đường thẳng vuông góc khi tích vô hướng 2 →n bằng?', ['0','1','−1','∞'], 0, '→n₁·→n₂ = 0.'),
    Q('Khoảng cách từ M(x₀;y₀) đến d: ax+by+c=0 bằng?', ['|ax₀+by₀+c|/√(a²+b²)','|ax₀+by₀+c|','(ax₀+by₀+c)²','a+b+c'], 0, 'Công thức d(M,Δ).'),
    Q('Khoảng cách từ O(0;0) đến d: 3x + 4y − 5 = 0?', ['1','5','5/√25','0'], 0, '|−5|/√(9+16) = 5/5 = 1.'),
    Q('Góc giữa 2 đường thẳng tính bằng?', ['cosα = |→n₁·→n₂|/(|→n₁|·|→n₂|)','sinα = →n₁·→n₂','tan = a/b','α = 90°'], 0, 'Công thức cos góc giữa 2 đường thẳng.'),
    Q('Hai đường thẳng cắt nhau khi?', ['→n₁ và →n₂ không cùng phương','→n₁ = →n₂','→n₁ + →n₂ = →0','Cùng VTCP'], 0, '2 →n không cùng phương ⇒ cắt nhau.'),
  ]),

  M(26, 'Đường tròn — Phương trình đường tròn', [
    Q('PT đường tròn tâm I(a;b), bán kính R?', ['(x−a)² + (y−b)² = R²','(x+a)² + (y+b)² = R','x² + y² = R','(x−a) + (y−b) = R²'], 0, 'PT chính tắc đường tròn.'),
    Q('PT x² + y² − 2x − 4y + 1 = 0 có tâm và bán kính?', ['I(1;2), R = 2','I(−1;−2), R = 2','I(1;2), R = 4','I(2;1), R = √5'], 0, 'I(1;2), R = √(1+4−1) = 2.'),
    Q('Bán kính đường tròn (x−3)² + (y+1)² = 16?', ['4','16','8','2'], 0, 'R² = 16 → R = 4.'),
    Q('PT đường tròn đi qua O(0;0), tâm I(3;4)?', ['x² + y² − 6x − 8y = 0','x² + y² = 25','(x−3)² + (y−4)² = 25','Cả A và C'], 3, 'R = OI = 5; PT (x−3)²+(y−4)² = 25 ⇔ x²+y²−6x−8y = 0.'),
    Q('Đường tròn (x−1)² + (y−2)² = 9 có tâm?', ['I(1;2)','I(−1;−2)','I(1;−2)','I(2;1)'], 0, 'Tâm là cặp (1;2).'),
    Q('PT tiếp tuyến tại điểm M(x₀;y₀) trên (x−a)²+(y−b)²=R² là?', ['(x₀−a)(x−a) + (y₀−b)(y−b) = R²','x₀x + y₀y = R²','x + y = R','x² + y² = R²'], 0, 'Công thức phân đôi toạ độ.'),
  ]),

  M(27, 'Ba đường conic — Elip', [
    Q('PT chính tắc elip (a > b > 0)?', ['x²/a² + y²/b² = 1','x²/a² − y²/b² = 1','y² = 2px','x² + y² = a²'], 0, 'PT chính tắc elip nằm ngang.'),
    Q('Tâm sai e của elip?', ['e = c/a','e = a/c','e = a + c','e = b/c'], 0, 'e = c/a, c = √(a²−b²).'),
    Q('Tâm sai elip nằm trong khoảng?', ['(0;1)','[0;1]','[1;+∞)','R'], 0, '0 < e < 1 (elip).'),
    Q('Elip có a = 5, b = 3 thì c = ?', ['4','√34','2','√16'], 0, 'c = √(25−9) = 4.'),
    Q('Tổng khoảng cách từ một điểm trên elip đến 2 tiêu điểm bằng?', ['2a','2b','2c','a+b'], 0, 'Định nghĩa elip: MF₁ + MF₂ = 2a.'),
    Q('Elip có 2 trục đối xứng là?', ['Ox và Oy','Đường chéo','y = x','Không có'], 0, 'Trục lớn và trục bé là Ox, Oy (với PT chính tắc).'),
  ]),

  M(28, 'Ba đường conic — Hypebol', [
    Q('PT chính tắc hypebol?', ['x²/a² − y²/b² = 1','x²/a² + y²/b² = 1','y² = 2px','x + y = a'], 0, 'Hypebol có dấu trừ.'),
    Q('Tâm sai hypebol?', ['e > 1','0 < e < 1','e = 1','e = 0'], 0, 'e = c/a > 1 với c² = a² + b².'),
    Q('Hypebol x²/9 − y²/16 = 1 có c = ?', ['5','7','4','3'], 0, 'c = √(9+16) = 5.'),
    Q('Hiệu khoảng cách |MF₁ − MF₂| với M trên hypebol bằng?', ['2a','2b','2c','a+b'], 0, '|MF₁ − MF₂| = 2a.'),
    Q('Tiệm cận của hypebol x²/a² − y²/b² = 1?', ['y = ±(b/a)x','y = ±(a/b)x','y = x','y = 0'], 0, 'Hai tiệm cận đi qua O.'),
    Q('Hypebol đối xứng qua?', ['Ox, Oy','Chỉ Ox','Chỉ Oy','Đường y = x'], 0, 'Đối xứng qua cả 2 trục.'),
  ]),

  M(29, 'Ba đường conic — Parabol', [
    Q('PT chính tắc parabol có trục là Ox?', ['y² = 2px','x² = 2py','x² + y² = p','y = x²'], 0, 'y² = 2px với p > 0.'),
    Q('Tâm sai parabol e = ?', ['1','0','>1','<1'], 0, 'e = 1.'),
    Q('Parabol y² = 8x có p = ?', ['4','2','8','16'], 0, '2p = 8 → p = 4.'),
    Q('Tiêu điểm của parabol y² = 2px ở?', ['(p/2; 0)','(0; p/2)','(p; 0)','(0; p)'], 0, 'F(p/2; 0).'),
    Q('Đường chuẩn của parabol y² = 2px?', ['x = −p/2','x = p/2','y = −p/2','y = p/2'], 0, 'Đường chuẩn x = −p/2.'),
    Q('Khoảng cách từ M trên parabol đến tiêu điểm bằng?', ['Khoảng cách từ M đến đường chuẩn','2 lần','Một nửa','Khác nhau'], 0, 'Định nghĩa parabol: MF = d(M, Δ).'),
  ]),

  M(30, 'Bài tập tổng hợp Vectơ và Đường thẳng', [
    Q('Cho A(1;2), B(3;6). →AB = ?', ['(2;4)','(4;2)','(−2;−4)','(2;8)'], 0, '→AB = (3−1; 6−2) = (2;4).'),
    Q('Độ dài AB với A(0;0), B(3;4)?', ['5','7','25','√7'], 0, '|→AB| = √(9+16) = 5.'),
    Q('PT đường thẳng qua 2 điểm A(0;0), B(2;4)?', ['y = 2x','y = x/2','y = 2x + 1','y = −2x'], 0, 'Hệ số góc 4/2 = 2, qua O.'),
    Q('PT đường thẳng qua A(1;1) song song y = 2x + 3?', ['y = 2x − 1','y = 2x + 1','y = −2x + 3','y = x'], 0, 'Cùng hệ số góc 2; thay A(1;1): 1 = 2·1 + b → b = −1.'),
    Q('Khoảng cách từ M(2;1) đến d: 3x + 4y − 5 = 0?', ['1','2','5','3'], 0, '|6+4−5|/5 = 5/5 = 1.'),
    Q('Hai đường thẳng y = 2x + 1 và y = −x/2 + 3 có?', ['Vuông góc','Song song','Trùng nhau','Không liên hệ'], 0, 'Tích hệ số góc 2·(−1/2) = −1 ⇒ vuông góc.'),
  ]),

  M(31, 'Ôn tập Đại số nâng cao', [
    Q('Tam thức x² − 3x + 2 ≥ 0 có nghiệm?', ['(−∞;1] ∪ [2;+∞)','[1;2]','R','∅'], 0, 'Nghiệm 1 và 2; ngoài nghiệm cùng dấu a > 0.'),
    Q('Phương trình √(x+2) = x có nghiệm?', ['x = 2','x = −1','x = 2 và x = −1','Vô nghiệm'], 0, 'Bình phương: x² − x − 2 = 0 → x = 2 hoặc −1; loại x = −1 do x ≥ 0.'),
    Q('|x − 3| = 5 có nghiệm?', ['x = 8','x = −2','x = 8 và x = −2','x = 2'], 2, 'x − 3 = ±5.'),
    Q('Khai triển (1+x)³ có hệ số x² là?', ['3','1','2','6'], 0, 'C(3,2) = 3.'),
    Q('Cho parabol y = x² − 4x + 4. Đỉnh?', ['(2;0)','(−2;0)','(0;4)','(2;4)'], 0, 'x_đ = 2, y = 4 − 8 + 4 = 0.'),
    Q('Tập nghiệm của hệ {x + y ≤ 4; x ≥ 0; y ≥ 0} là?', ['Tam giác','Hình thang','Hình vuông','Tia'], 0, 'Tam giác đỉnh O, (4;0), (0;4).'),
  ]),

  M(32, 'Ôn tập Hình học — Vectơ, hệ thức lượng, đường thẳng', [
    Q('Cho A(1;0), B(0;1), C(2;3). →AB + →BC = ?', ['→AC','→CA','→0','2→AB'], 0, 'Quy tắc 3 điểm.'),
    Q('Tam giác có a = 5, b = 7, C = 60°. c² = ?', ['39','49','25','35'], 0, 'c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39.'),
    Q('Cho →a = (1;2), →b = (3;−1). →a·→b = ?', ['1','7','−1','5'], 0, '1·3 + 2·(−1) = 1.'),
    Q('Đường thẳng 2x − y + 3 = 0 có →n = ?', ['(2;−1)','(−1;2)','(2;1)','(1;2)'], 0, '→n = (a;b) = (2;−1).'),
    Q('Đường tròn (x−1)² + (y+2)² = 9 có tâm và R?', ['I(1;−2), R = 3','I(−1;2), R = 9','I(1;2), R = 3','I(1;−2), R = 9'], 0, 'I(1;−2), R = √9 = 3.'),
    Q('Elip x²/25 + y²/16 = 1 có a, b, c?', ['a=5, b=4, c=3','a=5, b=3, c=4','a=4, b=5, c=3','a=25, b=16'], 0, 'c² = 25 − 16 = 9 → c = 3.'),
  ]),

  M(33, 'Ôn tập Thống kê và Xác suất', [
    Q('Cho mẫu 2, 4, 6, 8, 10. Trung bình?', ['6','5','7','30'], 0, '(2+4+6+8+10)/5 = 6.'),
    Q('Trung vị của mẫu trên?', ['4','6','8','5'], 1, 'Mẫu lẻ phần tử, trung vị là phần tử giữa = 6.'),
    Q('Phương sai mẫu 2,4,6,8,10 (chia n)?', ['8','10','5','4'], 0, '(16+4+0+4+16)/5 = 40/5 = 8.'),
    Q('Tung 2 xúc xắc, P(tổng ≤ 4)?', ['1/6','1/4','5/36','1/12'], 0, '(1,1)(1,2)(1,3)(2,1)(2,2)(3,1) = 6 → 6/36 = 1/6.'),
    Q('Lớp có 25 HS, chọn 3 HS làm cán bộ. Số cách?', ['C(25,3)','A(25,3)','3!','25·3'], 0, 'Chọn không phân biệt thứ tự ⇒ tổ hợp.'),
    Q('Sắp 5 cuốn sách khác nhau lên kệ. Số cách?', ['5!','5²','C(5,2)','25'], 0, 'Hoán vị 5 phần tử = 5! = 120.'),
  ]),

  M(34, 'Đề ôn tập tổng hợp 1', [
    Q('Phủ định của "∃x: x² + 1 = 0" là?', ['∀x: x² + 1 ≠ 0','∀x: x² + 1 = 0','∃x: x² + 1 ≠ 0','Không xác định'], 0, '¬∃ = ∀ với phủ định vị từ.'),
    Q('Bất phương trình x² − x − 2 ≤ 0 có nghiệm?', ['[−1;2]','(−1;2)','(−∞;−1]∪[2;+∞)','R'], 0, 'Nghiệm −1, 2; ≤ 0 trong nghiệm.'),
    Q('Tam giác ABC có A = 60°, b = 8, c = 5. a² = ?', ['49','89','64','25'], 0, 'a² = 64+25−2·8·5·cos60° = 89−40 = 49.'),
    Q('→a = (2;3), →b = (4;6). Hai vectơ này?', ['Cùng phương','Vuông góc','Đối nhau','Bằng nhau'], 0, '→b = 2·→a.'),
    Q('Khoảng cách từ A(1;2) đến d: x + y − 5 = 0?', ['√2','2','1','0'], 0, '|1+2−5|/√2 = 2/√2 = √2.'),
    Q('Hộp có 10 bi (4 đỏ, 6 xanh). Lấy 2 bi. P(2 bi đỏ)?', ['C(4,2)/C(10,2)','4/10','6/45','2/10'], 0, 'C(4,2)/C(10,2) = 6/45 = 2/15.'),
  ]),

  M(35, 'Đề ôn tập tổng hợp 2 (cuối năm)', [
    Q('Tập nghiệm của |x − 2| < 3 là?', ['(−1;5)','[−1;5]','(−∞;−1)∪(5;+∞)','{−1;5}'], 0, '−3 < x − 2 < 3 → −1 < x < 5.'),
    Q('Trong khai triển (1 + 2x)⁴, hệ số của x² là?', ['24','12','6','8'], 0, 'C(4,2)·2² = 6·4 = 24.'),
    Q('Cho →u = (3;4), |→u| = ?', ['5','7','12','25'], 0, '√(9+16) = 5.'),
    Q('Parabol y = −x² + 2x đạt cực đại tại?', ['x = 1, y_max = 1','x = 0, y = 0','x = 2, y = 0','x = −1, y = −3'], 0, 'x = 1, y = −1 + 2 = 1.'),
    Q('Đường tròn x² + y² = 25 cắt trục Ox tại?', ['(±5;0)','(0;±5)','(5;5)','Không cắt'], 0, 'y = 0 → x² = 25 → x = ±5.'),
    Q('Gieo 2 xúc xắc, P(ít nhất 1 mặt 6)?', ['11/36','1/6','25/36','12/36'], 0, '1 − P(không mặt 6) = 1 − 25/36 = 11/36.'),
  ]),
];

export const H10TOAN_SCENARIOS = indexBy(H10TOAN_WEEKS);
