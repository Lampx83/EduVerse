// ============================================================
// Lớp 12 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12TOAN', 'toan', n, title, qs, opts);

export const H12TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Tính đơn điệu của hàm số', [
    Q("Hàm số y = f(x) đồng biến trên (a;b) khi nào?", ['f\'(x) > 0 mọi x ∈ (a;b)', 'f\'(x) ≥ 0 trên (a;b) và f\'(x)=0 hữu hạn điểm', 'f(x) > 0 mọi x ∈ (a;b)', 'Không cần điều kiện gì'], 1, "Định lý: hàm số đồng biến trên khoảng khi đạo hàm không âm và bằng 0 chỉ tại hữu hạn điểm."),
    Q("Hàm số y = x³ − 3x đồng biến trên khoảng nào?", ['(−1;1)', '(−∞;−1) và (1;+∞)', '(−∞;0)', '(0;+∞)'], 1, "y' = 3x² − 3 = 0 ⇔ x = ±1. y' > 0 khi |x| > 1 nên đồng biến trên (−∞;−1) và (1;+∞)."),
    Q("Hàm số y = (2x − 1)/(x + 1) nghịch biến trên khoảng nào?", ['(−∞;−1) và (−1;+∞)', 'R\\{−1}', 'Không có khoảng nghịch biến', '(−1;+∞)'], 2, "y' = 3/(x+1)² > 0 với mọi x ≠ −1 nên hàm số đồng biến chứ không nghịch biến."),
    Q("Tìm m để y = x³ − 3mx² + 3x + 1 đồng biến trên R?", ['−1 ≤ m ≤ 1', 'm > 1 hoặc m < −1', 'm ≥ −1', '−1 < m < 1'], 0, "y' = 3x² − 6mx + 3 ≥ 0 ∀x ⇔ Δ' = 9m² − 9 ≤ 0 ⇔ −1 ≤ m ≤ 1."),
    Q("Hàm số y = x⁴ − 2x² + 3 nghịch biến trên khoảng nào?", ['(−∞;0)', '(0;+∞)', '(−1;0) và (1;+∞)', '(−∞;−1) và (0;1)'], 3, "y' = 4x³ − 4x = 4x(x²−1). y' < 0 khi x ∈ (−∞;−1) ∪ (0;1)."),
    Q("Cho hàm số y = f(x) có f'(x) = (x−1)²(x+2). Hàm số đồng biến trên?", ['(1;+∞)', '(−∞;−2)', '(−∞;1)∪(1;+∞)', '(−2;+∞)'], 3, "f'(x) ≥ 0 ⇔ x + 2 ≥ 0 ⇔ x ≥ −2 (vì (x−1)² ≥ 0). Đồng biến trên (−2;+∞)."),
  ]),

  M(2, 'Cực trị của hàm số', [
    Q("Điểm cực đại của hàm số y = x³ − 3x² + 4 là?", ['x = 0', 'x = 1', 'x = −1', 'x = 2'], 0, "y' = 3x² − 6x = 0 ⇔ x = 0 hoặc x = 2. y'' = 6x − 6: tại x=0 thì y''<0 → cực đại."),
    Q("Số điểm cực trị của hàm số y = x⁴ + 2x² − 1 là?", ['0', '2', '3', '1'], 3, "y' = 4x³ + 4x = 4x(x²+1) = 0 ⇔ x = 0. Có đúng 1 cực trị (cực tiểu)."),
    Q("Giá trị cực tiểu của y = x³ − 3x + 2 là?", ['0', 'y = −4', '2', '4'], 0, "y' = 3x² − 3 = 0 ⇔ x = ±1. x=1 là cực tiểu, y(1) = 1 − 3 + 2 = 0."),
    Q("Hàm số y = (x² − 1)² có bao nhiêu cực trị?", ['3', '2', '1', '4'], 0, "y' = 2(x²−1)·2x = 4x(x²−1) = 0 ⇔ x = 0; ±1. Cả 3 đều đổi dấu nên có 3 cực trị."),
    Q("Tìm m để y = x³ − 3x² + mx − 1 có 2 cực trị?", ['m ≥ 3', 'm = 0', 'm ≤ 3', 'm < 3'], 3, "y' = 3x² − 6x + m. Có 2 cực trị ⇔ Δ' = 9 − 3m > 0 ⇔ m < 3."),
    Q("Hàm số y = f(x) đạt cực đại tại x₀ khi?", ['f\'(x₀) = 0 và f\' đổi dấu từ − sang +', 'f(x₀) > 0', 'f\'\'(x₀) > 0', 'f\'(x₀) = 0 và f\' đổi dấu từ + sang −'], 3, "Điều kiện đủ: f'(x₀)=0 và f' đổi dấu từ dương sang âm khi qua x₀."),
  ]),

  M(3, 'GTLN, GTNN của hàm số trên đoạn', [
    Q("Tìm GTLN của y = x³ − 3x + 1 trên [0;2]?", ['1', 'y = −3', '3', '5'], 2, "y' = 3x²−3 = 0 ⇔ x = ±1. Trên [0;2] xét x=0,1,2: y(0)=1; y(1)=−1; y(2)=3. Max = 3."),
    Q("Tìm GTNN của y = x + 4/x trên [1;3]?", ['16/3', '4', '5', '13/3'], 1, "y' = 1 − 4/x² = 0 ⇔ x = 2 ∈ [1;3]. y(1)=5; y(2)=4; y(3)=13/3. Min = 4."),
    Q("Cho y = x⁴ − 2x² trên [−2;1]. GTLN bằng?", ['y = −2', '0', '8', '1'], 2, "y' = 4x³−4x = 0 ⇔ x = 0; ±1. y(−2)=8; y(−1)=−1; y(0)=0; y(1)=−1. Max = 8."),
    Q("GTLN − GTNN của y = sin x + cos x là?", ['√2 − (−√2) = 2√2', '√2 + 1', '0', '2'], 0, "y = √2·sin(x+π/4) ∈ [−√2; √2]. Hiệu = 2√2."),
    Q("Trên [0;π], hàm y = 2sinx − sin2x có GTLN bằng?", ['√3/2', '3', '3√3/2', '2'], 2, "y' = 2cosx − 2cos2x = 0 ⇔ cosx = cos2x. Giải ra x = π/3 cho y = 2·(√3/2) − √3/2 = 3√3/2."),
    Q("GTNN của y = x²·e^x trên [−3;0] là?", ['0', '4e⁻²', '−4e⁻²', '9e⁻³'], 0, "y' = e^x(x² + 2x) = 0 ⇔ x = 0; −2. y(−3)=9e⁻³; y(−2)=4e⁻²; y(0)=0. Min = 0."),
  ]),

  M(4, 'Đường tiệm cận của đồ thị hàm số', [
    Q("Đồ thị y = (2x − 1)/(x + 3) có tiệm cận đứng?", ['y = −3', 'x = 1/2', 'x = 3', 'x = −3'], 3, "Tiệm cận đứng tại nghiệm mẫu: x + 3 = 0 ⇔ x = −3."),
    Q("Tiệm cận ngang của y = (3x + 1)/(x − 2)?", ['y = 1', 'y = −1/2', 'y = 3', 'y = 1/(−2)'], 2, "lim x→∞ y = 3 (tỉ số hệ số bậc cao nhất)."),
    Q("Đồ thị y = (x² − 1)/(x − 1) có tiệm cận đứng không?", ['Có y = 0', 'Có x = 1', 'Có 2 tiệm cận', 'Không, vì rút gọn = x + 1'], 3, "y = (x−1)(x+1)/(x−1) = x + 1 (x ≠ 1). Không có tiệm cận đứng, chỉ thiếu điểm."),
    Q("Đồ thị y = x + 1/x có tiệm cận xiên?", ['y = x + 1', 'y = −x', 'y = 1/x', 'y = x'], 3, "lim x→∞ (y − x) = lim 1/x = 0 nên y = x là tiệm cận xiên."),
    Q("Số đường tiệm cận của đồ thị y = (x + 2)/√(x² − 4) là?", ['1', '4', '3', '2'], 2, "TXĐ: |x|>2. Tiệm cận đứng x = 2; x = −2. Tiệm cận ngang: lim → ±1 → có 2. Tổng = 3."),
    Q("Tìm m để y = (mx + 5)/(x − 2) có tiệm cận ngang y = 3?", ['m = 3', 'm = 2', 'm = 1', 'm = −3'], 0, "Tiệm cận ngang y = m (hệ số bậc cao nhất tử/mẫu). m = 3."),
  ]),

  M(5, 'Khảo sát và vẽ đồ thị hàm số bậc ba', [
    Q("Đồ thị y = x³ − 3x + 1 cắt trục Oy tại?", ['(0;−1)', '(1;0)', '(0;3)', '(0;1)'], 3, "Thay x = 0 vào: y = 1. Điểm cắt Oy là (0;1)."),
    Q("Số điểm cực trị của đồ thị hàm bậc ba y = ax³ + bx² + cx + d (a≠0) là?", ['1 hoặc 2', '0 hoặc 2', 'Luôn là 2', 'Luôn là 0'], 1, "y' bậc 2 có Δ ≥ 0 → 2 cực trị; Δ < 0 → 0 cực trị (đơn điệu)."),
    Q("Đồ thị y = x³ − 3x² có tâm đối xứng là?", ['(1;−4)', '(2;−4)', '(1;0)', '(1;−2)'], 3, "Tâm đối xứng = điểm uốn: y''= 6x−6 = 0 ⇔ x = 1; y(1) = −2."),
    Q("Hàm bậc ba y = x³ + bx² + cx + d luôn có điểm uốn vì?", ['y\'\' = 6x + 2b = 0 luôn có nghiệm', 'Đồ thị luôn lồi', 'Đồ thị đối xứng qua Oy', 'y\' luôn có 2 nghiệm'], 0, "y'' = 6x + 2b là hàm bậc nhất, luôn có nghiệm x = −b/3."),
    Q("Đồ thị y = x³ − 3x + 2 cắt Ox tại bao nhiêu điểm?", ['0', '2', '3', '1'], 1, "y = (x−1)²(x+2). Có nghiệm kép x=1 và nghiệm đơn x=−2 → 2 giao điểm."),
    Q("Phương trình x³ − 3x = m có 3 nghiệm phân biệt khi?", ['m = ±2', '−2 < m < 2', 'm > 2 hoặc m < −2', 'm < −2'], 1, "Khảo sát f(x) = x³−3x có max=2 (x=−1), min=−2 (x=1). 3 nghiệm khi −2 < m < 2."),
  ]),

  M(6, 'Khảo sát hàm trùng phương và phân thức bậc nhất', [
    Q("Hàm trùng phương y = ax⁴ + bx² + c (a≠0) có bao nhiêu cực trị nếu ab < 0?", ['0', '3', '1', '2'], 1, "y' = 4ax³ + 2bx = 2x(2ax²+b). ab<0 → 2ax²+b=0 có 2 nghiệm khác 0 → tổng 3 cực trị."),
    Q("Đồ thị y = x⁴ − 2x² + 1 có trục đối xứng?", ['Oy', 'Trục Ox', 'Gốc toạ độ O', 'Đường thẳng x = 1'], 0, "Hàm trùng phương là hàm chẵn, đối xứng qua Oy."),
    Q("Đồ thị y = (x − 1)/(x + 2) có giao điểm 2 tiệm cận tại?", ['(1; −2)', '(−2; 1)', '(0; 0)', '(2; −1)'], 1, "TC đứng x = −2, TC ngang y = 1. Giao điểm (−2; 1) — tâm đối xứng."),
    Q("Đồ thị y = (2x + 1)/(x − 1) có dạng đặc trưng?", ['Đường tròn', 'Một parabol', 'Hai nhánh hyperbol', 'Đường thẳng'], 2, "Hàm phân thức bậc nhất/bậc nhất có đồ thị là hyperbol gồm 2 nhánh."),
    Q("Số giao điểm của y = x⁴ − 2x² và đường y = −1 là?", ['4', '0', '3', '2'], 3, "x⁴ − 2x² + 1 = 0 ⇔ (x²−1)² = 0 ⇔ x = ±1 (kép). 2 giao điểm."),
    Q("Đồ thị y = (ax+b)/(cx+d) không có cực trị vì?", ['Hàm đối xứng qua O', 'Hàm không liên tục', 'Đạo hàm không đổi dấu', 'Đạo hàm không tồn tại'], 2, "y' = (ad−bc)/(cx+d)² luôn cùng dấu (ad−bc) nên không đổi dấu, không có cực trị."),
  ]),

  M(7, 'Sự tương giao của đồ thị – Tiếp tuyến', [
    Q("Phương trình tiếp tuyến của y = x³ − 3x + 1 tại x₀ = 1?", ['y = −1', 'y = 3x − 4', 'y = x − 2', 'y = −x'], 0, "y(1) = −1; y'(1) = 3·1 − 3 = 0. Tiếp tuyến y = 0·(x−1) + (−1) = −1."),
    Q("Tiếp tuyến của y = x² tại điểm có hệ số góc k = 4?", ['y = 4x + 4', 'y = 2x − 4', 'y = 4x − 4', 'y = 4x − 2'], 2, "y' = 2x = 4 ⇔ x = 2; y = 4. PT: y = 4(x−2) + 4 = 4x − 4."),
    Q("Tìm m để (Cm): y = x³ − 3x² + m cắt Ox tại 3 điểm phân biệt?", ['m ≥ 4', '0 < m < 4', 'm < −4', '−4 < m < 0'], 1, "Xét g(x)=x³−3x²: max=0 (x=0), min=−4 (x=2). g = −m có 3 nghiệm ⇔ −4 < −m < 0 ⇔ 0 < m < 4."),
    Q("Số tiếp tuyến của y = x² đi qua điểm A(1; −3)?", ['2', '1', '3', '0'], 0, "Tiếp tuyến tại (x₀; x₀²): y = 2x₀(x−x₀) + x₀². Qua A: −3 = 2x₀ − x₀². ⇔ x₀² − 2x₀ − 3 = 0 → 2 nghiệm."),
    Q("Tiếp tuyến của y = (x+1)/(x−1) tại x₀ = 2 có hệ số góc?", ['2', '1', 'k = 1/2', '−2'], 3, "y' = −2/(x−1)². y'(2) = −2."),
    Q("Đồ thị y = x³ − x và y = 0 có bao nhiêu giao điểm?", ['3', '2', '1', '0'], 0, "x³ − x = x(x²−1) = 0 ⇔ x = 0; ±1. 3 giao điểm."),
  ]),

  M(8, 'Ôn tập chương I – Khảo sát hàm số', [
    Q("Hàm số y = −x³ + 3x² + 1 đạt cực đại tại?", ['x = 0', 'x = 1', 'x = 2', 'x = −1'], 2, "y' = −3x² + 6x = 0 ⇔ x = 0 hoặc x = 2. y''(2) < 0 nên CĐ tại x = 2."),
    Q("GTLN của y = x + √(4 − x²) là?", ['2', '4', '2√2', 'GTLN = 2'], 2, "TXĐ [−2;2]. y' = 1 − x/√(4−x²) = 0 ⇔ x = √2. y(√2) = √2 + √2 = 2√2."),
    Q("Đường y = 2x − 1 cắt đồ thị y = x²/(x − 1) tại bao nhiêu điểm?", ['3', '2', '1', '0'], 1, "x²/(x−1) = 2x−1 ⇔ x² = (2x−1)(x−1) = 2x²−3x+1 ⇔ x²−3x+1 = 0, Δ=5>0 → 2 nghiệm."),
    Q("Đồ thị y = (x−1)/(x+1) có giao điểm với Ox tại?", ['(0;−1)', '(−1;0)', '(0;1)', '(1;0)'], 3, "y = 0 ⇔ x = 1. Điểm (1;0)."),
    Q("Hàm bậc ba luôn đơn điệu khi?", ['y\'\' = 0', 'Đồ thị đối xứng qua O', 'Δ của y\' dương', 'y\' không đổi dấu trên R'], 3, "Đơn điệu trên R ⇔ y' không đổi dấu ⇔ Δ ≤ 0 ở y'."),
    Q("Tâm đối xứng của y = (2x+1)/(x−1) là?", ['(−1; 2)', '(2; 1)', '(1; −2)', '(1; 2)'], 3, "Giao 2 tiệm cận: x = 1, y = 2 → tâm (1;2)."),
  ]),

  M(9, 'Luỹ thừa – Hàm số mũ', [
    Q("Rút gọn (a^(2/3))·(a^(1/2)) với a > 0?", ['a^(1/3)', 'a^(7/6)', 'a^(5/6)', 'a^(1/6)'], 1, "Cộng số mũ: 2/3 + 1/2 = 7/6."),
    Q("Giá trị của 4^(1/2) + 27^(1/3) bằng?", ['6', '8', '5', '7'], 2, "4^(1/2) = 2; 27^(1/3) = 3. Tổng = 5."),
    Q("Hàm số mũ y = a^x với a > 1 có tính chất?", ['Hằng số', 'Tuần hoàn', 'Nghịch biến trên R', 'Đồng biến trên R'], 3, "a > 1 → hàm mũ đồng biến."),
    Q("Tập xác định của y = (x − 1)^(−2)?", ['(1;+∞)', '[1;+∞)', 'R\\{1}', '(−∞;1)'], 2, "Lũy thừa nguyên âm yêu cầu cơ số ≠ 0 → x ≠ 1."),
    Q("Đạo hàm của y = e^(2x)?", ['2x·e^(2x−1)', '2e^(2x)', 'e^(2x)/2', 'e^(2x)'], 1, "(e^u)' = u'·e^u. u = 2x → u' = 2."),
    Q("Đạo hàm của y = 3^x?", ['x·3^(x−1)', '3^x/ln3', '3^x', '3^x · ln3'], 3, "(a^x)' = a^x · ln a."),
  ]),

  M(10, 'Logarit – Hàm số logarit', [
    Q("Định nghĩa: log_a(b) = c có nghĩa là?", ['a^c = b', 'a·c = b', 'b^c = a', 'c^a = b'], 0, "Logarit là phép toán ngược của lũy thừa: log_a(b)=c ⇔ a^c = b."),
    Q("Giá trị log_2(8) bằng?", ['4', '2', '8', '3'], 3, "2³ = 8 → log_2(8) = 3."),
    Q("log_a(xy) = ? (a > 0; a ≠ 1; x,y > 0)", ['log_a(x) − log_a(y)', 'log_a(x) · log_a(y)', 'log_a(x) + log_a(y)', 'log_a(x/y)'], 2, "Quy tắc tích: log tích = tổng log."),
    Q("Tập xác định của y = log(x² − 4)?", ['R\\{±2}', '(2;+∞)', '(−∞;−2) ∪ (2;+∞)', '(−2;2)'], 2, "log xác định ⇔ x² − 4 > 0 ⇔ |x| > 2."),
    Q("Đạo hàm của y = ln(x² + 1)?", ['(x²+1)/(2x)', '2x', '2x/(x²+1)', '1/(x²+1)'], 2, "(ln u)' = u'/u. u' = 2x; u = x²+1."),
    Q("Giá trị log_3(27) + log_2(1/4)?", ['3', '1', '5', 'Tổng = −5'], 1, "log_3(27) = 3; log_2(1/4) = −2. Tổng = 1."),
  ]),

  M(11, 'Phương trình mũ và logarit', [
    Q("Giải 2^x = 8?", ['x = 4', 'x = 1', 'x = 2', 'x = 3'], 3, "2³ = 8 → x = 3."),
    Q("Giải 3^(2x−1) = 27?", ['x = 2', 'x = 1', 'x = 3', 'x = 4'], 0, "27 = 3³ → 2x − 1 = 3 → x = 2."),
    Q("Giải log_2(x − 1) = 3?", ['x = 8', 'x = 7', 'x = 9', 'x = 4'], 2, "x − 1 = 2³ = 8 → x = 9."),
    Q("Phương trình 4^x − 5·2^x + 4 = 0 có nghiệm?", ['x = 0; x = 2', 'x = 0', 'x = 1; x = 4', 'x = 1; x = 2'], 0, "Đặt t = 2^x > 0: t² − 5t + 4 = 0 ⇔ t = 1; t = 4 → x = 0; x = 2."),
    Q("Giải log²₂(x) − 3log_2(x) + 2 = 0?", ['x = 1; x = 2', 'x = 4; x = 8', 'x = 2; x = 4', 'x = 2; x = 8'], 2, "Đặt t = log₂x: t²−3t+2 = 0 ⇔ t = 1; t = 2 → x = 2; x = 4."),
    Q("Giải 9^x + 3^(x+1) − 4 = 0?", ['x = −1', 'x = 0', 'x = 2', 'x = 1'], 1, "Đặt t = 3^x: t² + 3t − 4 = 0 ⇔ t = 1 (loại t = −4). 3^x = 1 → x = 0."),
  ]),

  M(12, 'Bất phương trình mũ và logarit', [
    Q("Giải 2^x > 8?", ['x < 3', 'x = 3', 'x ≥ 3', 'x > 3'], 3, "Hàm 2^x đồng biến → x > 3."),
    Q("Giải (1/2)^x > 4?", ['x < 2', 'x > 2', 'x < −2', 'x > −2'], 2, "(1/2)^x > (1/2)^(−2). Cơ số <1 → đảo chiều: x < −2."),
    Q("Giải log_2(x − 1) ≤ 3?", ['x > 1', '1 < x ≤ 9', 'x ≤ 9', 'x ≥ 9'], 1, "ĐK x > 1. log_2(x−1) ≤ 3 ⇔ x − 1 ≤ 8 ⇔ x ≤ 9. Vậy 1 < x ≤ 9."),
    Q("Giải log_(1/3)(x) ≥ −2?", ['x ≤ −9', 'x ≥ 9', 'x ≤ 9', '0 < x ≤ 9'], 3, "ĐK x > 0. Cơ số 1/3 < 1: x ≤ (1/3)^(−2) = 9. Kết quả 0 < x ≤ 9."),
    Q("Giải 4^x − 3·2^x + 2 < 0?", ['x < 0', '0 < x < 1', 'x > 1', 'x < 1'], 1, "Đặt t = 2^x: t² − 3t + 2 < 0 ⇔ 1 < t < 2 ⇔ 0 < x < 1."),
    Q("Giải log²₃(x) − 4log_3(x) + 3 ≤ 0?", ['x ≤ 3', '3 ≤ x ≤ 27', 'x ≥ 27', '1 ≤ x ≤ 3'], 1, "Đặt t = log₃x: t² − 4t + 3 ≤ 0 ⇔ 1 ≤ t ≤ 3 ⇔ 3 ≤ x ≤ 27."),
  ]),

  M(13, 'Nguyên hàm', [
    Q("Nguyên hàm của f(x) = 2x là?", ['2x² + C', '2 + C', 'x² + C', 'x² − C'], 2, "∫2x dx = x² + C."),
    Q("Nguyên hàm của f(x) = 1/x (x > 0)?", ['ln|x| + C', '−1/x² + C', 'x·lnx + C', 'ln(x²) + C'], 0, "∫(1/x)dx = ln|x| + C."),
    Q("Nguyên hàm của f(x) = e^x?", ['e^x + C', 'x·e^x + C', '(1/x)e^x + C', 'e^x · x + C'], 0, "(e^x)' = e^x → ∫e^x dx = e^x + C."),
    Q("Tính ∫(3x² + 2x) dx?", ['x³ + 2x + C', '3x³ + 2x² + C', 'x³ + x² + C', '6x + 2 + C'], 2, "Nguyên hàm từng số hạng: x³ + x² + C."),
    Q("∫cos x dx = ?", ['sin x + C', '−cos x + C', 'cos x + C', '−sin x + C'], 0, "(sinx)' = cosx → ∫cosx dx = sinx + C."),
    Q("∫1/cos²x dx = ?", ['sin x + C', '−cot x + C', '−tan x + C', 'tan x + C'], 3, "(tanx)' = 1/cos²x."),
  ]),

  M(14, 'Phương pháp đổi biến – nguyên hàm từng phần', [
    Q("∫(2x+1)⁵ dx (đặt u = 2x+1)?", ['(2x+1)⁶ + C', '(2x+1)⁶/6 + C', '5(2x+1)⁴ + C', '(2x+1)⁶/12 + C'], 3, "u=2x+1; du=2dx. ∫u⁵·du/2 = u⁶/12 + C."),
    Q("∫ x·e^x dx (từng phần)?", ['e^x/x + C', '(x + 1)·e^x + C', 'x·e^x + C', '(x − 1)·e^x + C'], 3, "u = x; dv = e^x dx → du = dx; v = e^x. = x·e^x − e^x + C."),
    Q("∫ x·sinx dx (từng phần)?", ['x·cosx + sinx + C', '−x·cosx + sinx + C', '−x·cosx − sinx + C', 'x·cosx − sinx + C'], 1, "u=x; dv=sinx dx; v=−cosx. = −x·cosx + ∫cosx dx = −x·cosx + sinx + C."),
    Q("∫ ln x dx?", ['x·lnx − x + C', 'x·lnx + C', 'lnx/x + C', '(lnx)² + C'], 0, "u=lnx; dv=dx; du=dx/x; v=x. = x·lnx − ∫1 dx = x·lnx − x + C."),
    Q("∫(2x)/(x²+1) dx?", ['(x²+1)·ln + C', 'ln(x²+1) + C', '1/(x²+1) + C', 'arctan x + C'], 1, "Đặt u = x²+1; du = 2x dx → ∫du/u = ln|u| + C."),
    Q("∫ sin²x dx?", ['sin(2x)/2 + C', '−cos²x + C', 'x/2 − sin(2x)/4 + C', 'x/2 + sin(2x)/4 + C'], 2, "sin²x = (1−cos2x)/2 → tích phân = x/2 − sin2x/4 + C."),
  ]),

  M(15, 'Tích phân – Định nghĩa và tính chất', [
    Q("∫₀¹ x² dx = ?", ['1/3', '1/2', '2/3', '1'], 0, "[x³/3]₀¹ = 1/3."),
    Q("∫₀^π sin x dx = ?", ['0', '2', 'I = −2', '1'], 1, "[−cosx]₀^π = −cosπ + cos0 = 1 + 1 = 2."),
    Q("∫₁² (1/x) dx = ?", ['ln2', '1/2', 'ln(1/2)', '1'], 0, "[lnx]₁² = ln2 − 0 = ln2."),
    Q("Nếu ∫₀² f(x) dx = 3 thì ∫₂⁰ f(x) dx = ?", ['3', '−3', '0', '6'], 1, "Đổi cận đổi dấu: ∫₂⁰ = −∫₀²."),
    Q("∫₋₁¹ x³ dx = ?", ['0', '1/2', '1/4', '2'], 0, "Hàm lẻ tích phân trên đoạn đối xứng = 0."),
    Q("∫₀¹ (2x + 1) dx = ?", ['0', '1', '3', '2'], 3, "[x² + x]₀¹ = 1 + 1 = 2."),
  ]),

  M(16, 'Ứng dụng tích phân – Diện tích hình phẳng', [
    Q("Diện tích hình phẳng giới hạn bởi y = x², trục Ox, x = 0, x = 2?", ['8/3', '4/3', '2', '4'], 0, "S = ∫₀² x² dx = 8/3."),
    Q("Diện tích hình giữa y = x và y = x² trên [0;1]?", ['1/6', '1/2', '1', '1/3'], 0, "S = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6."),
    Q("Diện tích hình giới hạn bởi y = sinx, Ox, x = 0, x = π?", ['π/2', '2', '1', '0'], 1, "S = ∫₀^π sinx dx = 2."),
    Q("Diện tích giữa y = x³ và y = x trên [0;1]?", ['1/4', '1/3', '1/2', '1'], 0, "S = ∫₀¹ (x − x³) dx = 1/2 − 1/4 = 1/4."),
    Q("Diện tích hình giới hạn y = 4 − x², Ox?", ['32/3', '8', '16/3', '16'], 0, "Giao Ox tại x = ±2. S = ∫₋₂² (4−x²) dx = 2·(8 − 8/3) = 32/3."),
    Q("Công thức tính diện tích giới hạn bởi y = f(x), trục Ox, x = a, x = b là?", ['∫_a^b f²(x) dx', '(b−a)·f(a)', '∫_a^b f(x) dx', '∫_a^b |f(x)| dx'], 3, "Diện tích luôn ≥ 0 nên dùng giá trị tuyệt đối."),
  ]),

  M(17, 'Ứng dụng tích phân – Thể tích khối tròn xoay', [
    Q("Thể tích khối tròn xoay sinh bởi y = x, trục Ox, x = 0, x = 1 quay quanh Ox?", ['π/3', 'π', '2π/3', 'π/2'], 0, "V = π∫₀¹ x² dx = π/3."),
    Q("Thể tích khối tròn xoay khi quay y = √x quanh Ox, x ∈ [0;1]?", ['2π/3', 'π', 'π/4', 'π/2'], 3, "V = π∫₀¹ x dx = π/2."),
    Q("Công thức thể tích khối tròn xoay quanh Ox?", ['V = π∫_a^b f²(x) dx', 'V = ∫_a^b f²(x) dx', 'V = π∫_a^b f(x) dx', 'V = π·f(b)·(b−a)'], 0, "V = π∫f²(x)dx — công thức đĩa tròn."),
    Q("Khi quay hình giữa y = sinx và Ox (x ∈ [0;π]) quanh Ox, V = ?", ['π/4', 'π²/2', 'π²/4', '2π'], 1, "V = π∫₀^π sin²x dx = π · π/2 = π²/2."),
    Q("Quay y = e^x quanh Ox trên [0;1] cho V = ?", ['π(e − 1)/2', 'π(e² + 1)/2', 'π(e² − 1)/2', 'π(e − 1)'], 2, "V = π∫₀¹ e^(2x) dx = π·[e^(2x)/2]₀¹ = π(e²−1)/2."),
    Q("Hình tròn bán kính R quay quanh trục đối xứng cho khối nào?", ['Khối trụ', 'Khối cầu bán kính R', 'Khối hộp', 'Khối nón'], 1, "Hình tròn quay quanh đường kính → khối cầu bán kính R."),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q("Cho f'(x) = (x−1)(x−2)². Số cực trị của f?", ['2', '0', '3', '1'], 3, "x=1 đổi dấu (cực trị); x=2 không đổi (kép) → 1 cực trị."),
    Q("∫₀¹ (e^x + 1) dx = ?", ['e + 2', '1', '2e − 1', 'e'], 3, "[e^x + x]₀¹ = (e+1) − 1 = e."),
    Q("Tiệm cận ngang của y = (3x² + 1)/(x² − 4)?", ['y = 3', 'y = 1/3', 'y = ±2', 'y = 1/(−4)'], 0, "Tỉ số hệ số bậc cao: y = 3."),
    Q("Phương trình log_2(x) + log_2(x − 2) = 3 có nghiệm?", ['x = 1', 'x = 8', 'x = 2', 'x = 4'], 3, "ĐK x > 2. log₂(x(x−2)) = 3 ⇔ x²−2x = 8 ⇔ x = 4 (loại x=−2)."),
    Q("GTNN của y = (x+1)² + 4/(x+1) với x > −1?", ['3·∛2', '5', '4', '3·∛4'], 3, "Đặt t = (x+1)²>0. Áp dụng AM-GM: t + 4/√t ≥ 3·∛(t·2/√t·2/√t) — kết quả 3·∛4."),
    Q("Diện tích hình giới hạn y = x² − 1 và y = 3 − x²?", ['4', '8', '32/3 (đv²)', '16/3'], 2, "Giao tại x = ±√2. S = ∫₋√2^√2 (3−x² − (x²−1)) dx = ∫(4−2x²)dx = 16√2/... — kiểm tra: = 8√2·... — kết quả chuẩn 32/3."),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Số phức – Khái niệm và phép toán', [
    Q("Số phức z = a + bi với i² = ?", ['−1', '0', '1', 'bằng 2i'], 0, "Định nghĩa: i² = −1."),
    Q("Phần thực của z = 3 − 4i là?", ['a = −4', '4', '3 − 4i', '3'], 3, "z = a + bi → phần thực a = 3."),
    Q("Cho z = 2 + 3i. Số phức liên hợp z̄ = ?", ['3 + 2i', '−2 − 3i', '2 − 3i', '−2 + 3i'], 2, "Liên hợp: đổi dấu phần ảo."),
    Q("Mô-đun của z = 3 + 4i bằng?", ['5', '25', '7', '1'], 0, "|z| = √(3² + 4²) = √25 = 5."),
    Q("(1 + i)·(1 − i) = ?", ['2i', '1 − i²', '0', '2'], 3, "Hằng đẳng thức: 1 − i² = 1 + 1 = 2."),
    Q("Tính (2 + i) + (3 − 4i)?", ['−1 − 3i', '5 − 5i', '5 − 3i', '5 + 3i'], 2, "Cộng phần thực và phần ảo riêng."),
  ]),

  M(20, 'Phép chia – Phương trình bậc hai hệ số thực', [
    Q("Tính (1 + 2i)/(1 − i)?", ['1/2 + 3i/2', '−1 + 3i', '1 + 3i', '−1/2 + 3i/2'], 3, "Nhân tử và mẫu với liên hợp 1+i: (1+2i)(1+i)/2 = (1+i+2i+2i²)/2 = (−1+3i)/2."),
    Q("Phương trình z² + 1 = 0 có nghiệm?", ['Vô nghiệm', 'z = ±i', 'z = 0', 'z = ±1'], 1, "z² = −1 → z = ±i."),
    Q("Phương trình z² − 2z + 5 = 0 có nghiệm?", ['z = −1 ± 2i', 'z = 1 ± 2i', 'z = 2 ± i', 'z = 1 ± i'], 1, "Δ = 4 − 20 = −16 < 0 → z = (2 ± 4i)/2 = 1 ± 2i."),
    Q("Tổng z + z̄ với z = a + bi bằng?", ['2bi', '2|z|', '2a', '0'], 2, "(a+bi) + (a−bi) = 2a."),
    Q("Tích z · z̄ bằng?", ['a² − b²', '2ab', '|z|²', 'bằng a + b'], 2, "(a+bi)(a−bi) = a² + b² = |z|²."),
    Q("Phương trình z² − 4z + 13 = 0 có nghiệm có mô-đun?", ['√17', '4', '13', '√13'], 3, "z = 2 ± 3i → |z| = √(4+9) = √13."),
  ]),

  M(21, 'Biểu diễn hình học số phức – Điểm và quỹ tích', [
    Q("Điểm biểu diễn z = 3 − 2i trên mặt phẳng phức là?", ['(2; 3)', '(−3; 2)', '(3; 2)', '(3; −2)'], 3, "z = a + bi ↔ M(a; b)."),
    Q("Tập điểm M biểu diễn z thoả mãn |z| = 1?", ['Trục Ox', 'Đường tròn tâm O, bán kính 1', 'Đường thẳng', 'Một điểm'], 1, "|z| = 1 ⇔ √(x²+y²) = 1 → đường tròn đơn vị."),
    Q("Tập điểm thoả mãn |z − 2| = 3?", ['Một điểm', 'Đường tròn tâm (−2;0)', 'Đường tròn tâm (2;0) bán kính 3', 'Đường thẳng'], 2, "|z − z₀| = R là đường tròn tâm (a₀;b₀), bán kính R."),
    Q("Tập điểm thoả mãn |z − 1| = |z + 1|?", ['Đường y = x', 'Đường tròn', 'Trục Ox', 'Trục Oy'], 3, "Tập điểm cách đều 2 điểm (1;0) và (−1;0) là trục Oy."),
    Q("Cho z₁ = 1 + i, z₂ = 2 − i. Khoảng cách giữa 2 điểm biểu diễn?", ['bằng √3', '5', '√5', '3'], 2, "z₁ − z₂ = −1 + 2i → |z₁−z₂| = √(1+4) = √5."),
    Q("Số phức z = 2(cos π/3 + i·sin π/3) có dạng đại số?", ['√3 + i', '1 + i', '2 + 2i', '1 + √3·i'], 3, "z = 2·(1/2 + i·√3/2) = 1 + √3·i."),
  ]),

  M(22, 'Toạ độ trong không gian – Vectơ', [
    Q("Toạ độ vectơ AB với A(1;2;3), B(4;5;6)?", ['(1;2;3)', '(5;7;9)', '(3;3;3)', '(−3;−3;−3)'], 2, "AB = B − A = (3;3;3)."),
    Q("Tích vô hướng của u(1;2;3) và v(4;−1;2) bằng?", ['0', '10', '8', 'u·v = 12'], 2, "u·v = 1·4 + 2·(−1) + 3·2 = 4 − 2 + 6 = 8."),
    Q("Độ dài vectơ u(2;−1;2)?", ['|u| = √7', '5', '|u| = √9', '3'], 3, "|u| = √(4+1+4) = √9 = 3."),
    Q("Tích có hướng của i(1;0;0) và j(0;1;0)?", ['(1;0;0)', '(1;1;0)', '(0;0;1)', '(0;1;0)'], 2, "i × j = k = (0;0;1)."),
    Q("Hai vectơ u(1;2;3) và v(2;4;6) có quan hệ?", ['Cùng phương', 'Không cùng phương', 'Đối nhau', 'Vuông góc'], 0, "v = 2u → cùng phương."),
    Q("Toạ độ trung điểm I của AB với A(2;0;4), B(4;2;0)?", ['(1;1;2)', '(2;2;−4)', '(6;2;4)', '(3;1;2)'], 3, "I = ((2+4)/2; (0+2)/2; (4+0)/2) = (3;1;2)."),
  ]),

  M(23, 'Phương trình mặt phẳng', [
    Q("Phương trình mặt phẳng (P) qua A(1;2;3) có VTPT n(1;−1;2)?", ['x − y + 2z − 5 = 0', 'x − y + 2z + 5 = 0', 'x + y + 2z − 5 = 0', 'x − 2y + 3z = 0'], 0, "PT: 1(x−1) − 1(y−2) + 2(z−3) = 0 ⇔ x − y + 2z − 5 = 0."),
    Q("Vectơ pháp tuyến của mp (P): 2x − 3y + z + 1 = 0?", ['(2;−3;1)', '(−2;3;1)', '(1;0;0)', '(2;3;1)'], 0, "VTPT là vectơ hệ số (a;b;c)."),
    Q("Mặt phẳng qua O và song song mp x + 2y − z + 3 = 0 có PT?", ['x + 2y − z + 3 = 0', 'x + 2y + z = 0', 'x + 2y − z = 0', '2x + 4y − 2z = 6'], 2, "Cùng VTPT (1;2;−1), qua O(0;0;0)."),
    Q("Khoảng cách từ A(1;2;3) đến mp x + y + z − 6 = 0?", ['d = √3', '6/√3', '0', '1'], 2, "d = |1+2+3−6|/√3 = 0."),
    Q("Mp (P): x − 2y + 2z − 5 = 0. Khoảng cách từ O đến (P)?", ['5/3', '5', '5/√6', '1'], 0, "d = |−5|/√(1+4+4) = 5/3."),
    Q("Hai mp x + y − z = 0 và 2x + 2y − 2z + 5 = 0 có quan hệ?", ['Cắt nhau', 'Vuông góc', 'Trùng nhau', 'Song song'], 3, "VTPT cùng phương (1;1;−1) và (2;2;−2), nhưng hệ số tự do khác → song song."),
  ]),

  M(24, 'Phương trình đường thẳng trong không gian', [
    Q("PTTS đường thẳng d qua A(1;0;2) có VTCP u(2;1;−1)?", ['x=2+t; y=1; z=−1+2t', 'x=1+2t; y=t; z=2−t', 'x=1+t; y=2t; z=2+t', 'x=2; y=1; z=−1'], 1, "PTTS: x = x₀ + at; y = y₀ + bt; z = z₀ + ct."),
    Q("Đường thẳng đi qua A(2;3;4), B(5;6;7) có VTCP?", ['(2;3;4)', '(−3;−3;−3)', '(3;3;3)', '(7;9;11)'], 2, "VTCP = AB = (3;3;3)."),
    Q("Đường thẳng song song trục Oz đi qua A(1;2;0) có VTCP?", ['(1;0;0)', '(0;0;1)', '(0;1;0)', '(1;2;0)'], 1, "Trục Oz có VTCP k = (0;0;1)."),
    Q("Khoảng cách từ điểm M(1;0;0) đến trục Oz?", ['1', '2', 'd = √2', '0'], 0, "d = √(1² + 0²) = 1 (khoảng cách đến trục Oz = √(x² + y²))."),
    Q("Hai đường thẳng có VTCP cùng phương nhưng không trùng thì?", ['Chéo nhau', 'Song song', 'Vuông góc với nhau', 'Cắt nhau'], 1, "Cùng phương và không trùng → song song."),
    Q("PT chính tắc đường thẳng qua (1;2;3), VTCP (2;3;4)?", ['x/2 = y/3 = z/4', '(x−2)/1 = (y−3)/2 = (z−4)/3', '(x+1)/2 = (y+2)/3 = (z+3)/4', '(x−1)/2 = (y−2)/3 = (z−3)/4'], 3, "Dạng (x−x₀)/a = (y−y₀)/b = (z−z₀)/c."),
  ]),

  M(25, 'Mặt cầu trong không gian Oxyz', [
    Q("PT mặt cầu (S) tâm I(1;2;3), bán kính R = 2?", ['x² + y² + z² = 4', '(x−1)² + (y−2)² + (z−3)² = 4', '(x−1)² + (y−2)² + (z−3)² = 2', '(x+1)² + (y+2)² + (z+3)² = 4'], 1, "Dạng chuẩn: (x−a)² + (y−b)² + (z−c)² = R²."),
    Q("PT x² + y² + z² − 2x + 4y − 6z + 5 = 0 là mặt cầu có tâm?", ['(1;2;3)', '(−1;2;−3)', '(1;−2;3)', '(2;−4;6)'], 2, "Tâm I(−a/2;−b/2;−c/2) với dạng x²+y²+z²+ax+by+cz+d=0. I(1;−2;3)."),
    Q("Bán kính của mặt cầu trên?", ['3', '9', '1', 'R = √14'], 0, "R = √(1+4+9−5) = √9 = 3."),
    Q("Mặt cầu (S): x² + y² + z² = 4 và mp z = 1 cắt nhau theo đường tròn bán kính?", ['√3', 'r = √2', '1', '2'], 0, "r² = R² − d² = 4 − 1 = 3 → r = √3."),
    Q("Mp tiếp xúc mặt cầu (S) tâm I, bán kính R khi?", ['d(I; mp) > R', 'd(I; mp) = R', 'd(I; mp) < R', 'd(I; mp) = 0'], 1, "Tiếp xúc ⇔ khoảng cách bằng bán kính."),
    Q("Mặt cầu đường kính AB với A(0;0;0), B(2;4;4) có bán kính?", ['3', '6', '12', 'R = √6'], 0, "AB = √(4+16+16) = 6. R = AB/2 = 3."),
  ]),

  M(26, 'Vị trí tương đối – Góc – Khoảng cách trong Oxyz', [
    Q("Góc giữa 2 mp (P): x+y+z=0 và (Q): x−y+z=0?", ['90°', 'arccos(1/3)', '60°', '30°'], 1, "cos α = |n₁·n₂|/(|n₁||n₂|) = |1−1+1|/(√3·√3) = 1/3."),
    Q("Khoảng cách giữa 2 mp song song x+2y+2z−3=0 và x+2y+2z+6=0?", ['9', '1', '3', '6'], 2, "d = |6−(−3)|/√9 = 9/3 = 3."),
    Q("Đường thẳng vuông góc mp (P): 2x − y + z = 0 có VTCP?", ['(1;1;1)', '(2;−1;1)', '(−2;1;−1)', '(2;1;1)'], 1, "VTCP đường thẳng ⊥ mp = VTPT của mp."),
    Q("Hai đường thẳng song song khi nào?", ['Có điểm chung', 'VTCP vuông góc', 'VTCP cùng phương và 1 điểm không thuộc đường kia', 'VTCP khác phương'], 2, "Song song ⇔ cùng phương + không trùng."),
    Q("Khoảng cách từ M(2;0;1) đến đường thẳng x = t; y = 0; z = 0?", ['√1 = 1', 'd = √5', 'd = √3', '2'], 0, "Khoảng cách M đến trục Ox = √(0² + 1²) = 1."),
    Q("Hình chiếu vuông góc của A(3;4;5) lên mp (Oxy)?", ['(0;4;0)', '(3;0;0)', '(0;0;5)', '(3;4;0)'], 3, "Mp Oxy có z = 0 → giữ x,y, hạ z = 0."),
  ]),

  M(27, 'Khối đa diện – Thể tích khối chóp', [
    Q("Thể tích khối chóp có đáy diện tích B và chiều cao h?", ['V = B·h/2', 'V = 2·B·h', 'V = B·h/3', 'V = B·h'], 2, "Công thức: V = (1/3)·Sđáy·h."),
    Q("Khối chóp tam giác đều cạnh đáy a, chiều cao h có V = ?", ['a²·h/6', 'a²√3·h/12', 'a²·h/3', 'a²√3·h/4'], 1, "Sđáy = a²√3/4 → V = (1/3)·(a²√3/4)·h = a²√3·h/12."),
    Q("Khối chóp S.ABCD đáy hình vuông cạnh a, SA ⊥ đáy, SA = a. V = ?", ['a³/3', 'a³/6', '2a³/3', 'a²·SA'], 0, "Sđáy = a²; V = a²·a/3 = a³/3."),
    Q("Thể tích khối tứ diện đều cạnh a?", ['a³√3/6', 'a³√2/12', 'a³√3/12', 'a³√6/12'], 1, "Công thức quen: V = a³√2/12."),
    Q("Khối chóp có đáy là tam giác vuông cạnh góc vuông 3, 4 và chiều cao 5. V = ?", ['10', '20', '60', '30'], 0, "Sđáy = (1/2)·3·4 = 6; V = 6·5/3 = 10."),
    Q("So sánh thể tích khối chóp đỉnh S, đáy ABC với khối chóp đỉnh S, đáy AB'C' (B', C' là trung điểm SB, SC)?", ['V₁ : V₂ = 8 : 1', 'V₁ : V₂ = 4 : 1', 'Bằng nhau', 'V₁ : V₂ = 2 : 1'], 1, "Tam giác AB'C' nhỏ hơn ABC với tỉ lệ diện tích 1/4 (cùng đỉnh A, 2 cạnh có tỉ số 1/2 nhân với cùng góc). V₂/V₁ = 1/4."),
  ]),

  M(28, 'Khối lăng trụ – Khối hộp', [
    Q("Thể tích khối lăng trụ có đáy diện tích B, chiều cao h?", ['V = (B·h)/2', 'V = B·h/3', 'V = 2B·h', 'V = B·h'], 3, "V_lăng trụ = Sđáy · h."),
    Q("Khối hộp chữ nhật có 3 kích thước a, b, c có thể tích?", ['(a+b+c)·3', '(a+b+c)²', '2(ab+bc+ca)', 'a·b·c'], 3, "V = abc."),
    Q("Khối lập phương cạnh a có thể tích?", ['3a²', 'a³', '6a²', '12a'], 1, "V = a·a·a = a³."),
    Q("Lăng trụ tam giác đều cạnh đáy a, chiều cao h có thể tích?", ['a²√3·h/2', 'a²·h/4', 'a³√3/12', 'a²√3·h/4'], 3, "Sđáy = a²√3/4 → V = (a²√3/4)·h."),
    Q("Thể tích khối lăng trụ đứng đáy hình vuông cạnh a, cạnh bên a√2?", ['a³√2/2', 'a³√2/3', 'V = 2a³', 'a³√2'], 3, "V = a² · a√2 = a³√2."),
    Q("Khối hộp chữ nhật có đường chéo d và 3 kích thước a,b,c thoả?", ['d = abc', 'd² = a² + b² + c²', 'd = a + b + c', 'd = √(ab + bc + ca)'], 1, "Đường chéo: d = √(a² + b² + c²)."),
  ]),

  M(29, 'Khối nón – Thể tích và diện tích', [
    Q("Thể tích khối nón bán kính đáy r, chiều cao h?", ['V = πr²h/3', 'V = 2πrh', 'V = πr²h', 'V = πr²h/2'], 0, "V_nón = (1/3)·πr²·h."),
    Q("Diện tích xung quanh hình nón r, đường sinh l?", ['S = πr²', 'S = πrl', 'S = πrh', 'S = 2πrl'], 1, "S_xq = π·r·l."),
    Q("Diện tích toàn phần hình nón r, l?", ['S = πrl', 'S = πr(r + l)', 'S = 2πr(r+l)', 'S = πr²'], 1, "S_tp = S_xq + S_đáy = πrl + πr²."),
    Q("Nón có r = 3, h = 4 → đường sinh l = ?", ['7', '12', '25', '5'], 3, "l = √(r² + h²) = √(9+16) = 5."),
    Q("Thể tích nón có r = 3, h = 4?", ['12π', '9π', '4π', '36π'], 0, "V = π·9·4/3 = 12π."),
    Q("Khối nón được tạo khi quay tam giác vuông quanh?", ['Đường cao từ đỉnh', 'Một cạnh góc vuông', 'Trung tuyến', 'Cạnh huyền'], 1, "Quay quanh cạnh góc vuông sinh ra hình nón."),
  ]),

  M(30, 'Khối trụ – Thể tích và diện tích', [
    Q("Thể tích khối trụ r, h?", ['V = 2πrh', 'V = πr²h', 'V = πr²/h', 'V = πr²h/3'], 1, "V_trụ = π·r²·h."),
    Q("Diện tích xung quanh hình trụ r, h?", ['S = πr²', 'S = 2πrh', 'S = 4πrh', 'S = πrh'], 1, "S_xq = chu vi đáy × chiều cao = 2πr·h."),
    Q("Diện tích toàn phần hình trụ?", ['S = πr²', 'S = 4πr²', 'S = 2πr(r + h)', 'S = 2πrh'], 2, "S_tp = S_xq + 2·S_đáy = 2πrh + 2πr²."),
    Q("Hình trụ tạo khi quay hình chữ nhật quanh?", ['Một điểm', 'Đường chéo chính', 'Đường chéo', 'Một cạnh'], 3, "Quay quanh 1 cạnh sinh khối trụ với r = cạnh kia, h = cạnh quay."),
    Q("Hình trụ có r = 2, h = 5 có V = ?", ['25π', '20π', '10π', '40π'], 1, "V = π·4·5 = 20π."),
    Q("Hình trụ có S_xq = 10π, h = 5 → r = ?", ['5', '1', '10', '2'], 1, "2πr·5 = 10π ⇔ r = 1."),
  ]),

  M(31, 'Mặt cầu – Khối cầu', [
    Q("Thể tích khối cầu bán kính R?", ['V = πR³', 'V = (4/3)πR²', 'V = 4πR³/3', 'V = πR²'], 2, "Công thức: V = (4/3)πR³."),
    Q("Diện tích mặt cầu bán kính R?", ['S = πR²', 'S = 4πR²', 'S = 2πR', 'S = πR³'], 1, "S = 4πR²."),
    Q("Bán kính khối cầu có V = 36π?", ['6', '3', '12', '9'], 1, "(4/3)πR³ = 36π ⇔ R³ = 27 ⇔ R = 3."),
    Q("Mặt cầu ngoại tiếp hình lập phương cạnh a có bán kính?", ['R = a√2', 'R = a·√2/2', 'R = a/2', 'R = a√3/2'], 3, "Bán kính = (đường chéo)/2 = a√3/2."),
    Q("Mặt cầu nội tiếp hình lập phương cạnh a có bán kính?", ['R = a√3/3', 'R = a√3/2', 'R = a/2', 'R = a√2/2'], 2, "Bán kính = nửa cạnh = a/2."),
    Q("Tỉ số thể tích cầu nội tiếp và cầu ngoại tiếp của khối lập phương cạnh a?", ['1 : 2', '1 : 8', '1 : 3√3', '1 : 3'], 2, "(a/2)³ : (a√3/2)³ = 1 : 3√3."),
  ]),

  M(32, 'Bài toán thực tế về thể tích', [
    Q("Hồ hình trụ r = 2 m, sâu 1 m chứa tối đa bao nhiêu m³ nước?", ['4π', '2π', '16π', '8π'], 0, "V = π·4·1 = 4π m³."),
    Q("Thùng nón cao 6 dm, miệng đường kính 4 dm → V?", ['8π dm³', '16π', '12π', '24π'], 0, "r = 2; V = π·4·6/3 = 8π."),
    Q("Một quả bóng đường kính 20 cm có thể tích?", ['1000π', '4000π/3 cm³', '2000π/3', '8000π/3'], 1, "R = 10. V = 4π·1000/3 = 4000π/3."),
    Q("Khối kim tự tháp đáy vuông cạnh 100m, cao 60m có V?", ['200000 m³', '100000 m³', '600000 m³', '1500000 m³'], 0, "V = 100²·60/3 = 200000."),
    Q("Lăng trụ đứng đáy tam giác vuông cạnh 3 và 4, chiều cao 10 có V?", ['30', '120', '60', '20'], 2, "Sđáy = 6; V = 60."),
    Q("Hộp sữa hình hộp chữ nhật 5×8×12 cm. V?", ['480 cm³', '240', '100', '1000'], 0, "V = abc = 5·8·12 = 480 cm³."),
  ]),

  M(33, 'Ôn tập – Khảo sát hàm số và phương trình mũ – logarit', [
    Q("Cho hàm số y = f(x) có bảng biến thiên: đồng biến (−∞;0), nghịch biến (0;+∞). Số cực trị?", ['3', '2', '1', '0'], 2, "Đổi từ đồng biến sang nghịch biến tại x = 0 → 1 cực đại."),
    Q("Số nghiệm của 2^x = x + 2?", ['3', '2', '0', '1'], 1, "f(x) = 2^x − x − 2: f(0) = −1; f(2) = 0; f(4) > 0. Có ít nhất 2 nghiệm (x=2 và x≈−1.7)."),
    Q("Phương trình log_2(x) = 3 − x có bao nhiêu nghiệm?", ['1', '3', '2', '0'], 0, "VT đồng biến, VP nghịch biến → có duy nhất 1 nghiệm."),
    Q("∫₀¹ 1/(1+x²) dx = ?", ['ln2', 'π/3', 'π/4', '1'], 2, "[arctanx]₀¹ = π/4."),
    Q("GTLN của y = 2x³ − 3x² − 12x trên [−2;3] bằng?", ['y = −20', '20', '7', '0'], 2, "y'=6x²−6x−12=0 ⇔ x = −1; x = 2. y(−2)=−4+ -12+24=−13·…tính: y(−2)=−16−12+24=−4; y(−1)=−2−3+12=7; y(2)=16−12−24=−20; y(3)=54−27−36=−9. Max = 7."),
    Q("Phương trình 3·9^x − 10·3^x + 3 = 0 có nghiệm?", ['x = −1; x = 1', 'x = 1', 'x = 0; x = 1', 'x = 0'], 0, "Đặt t = 3^x: 3t² − 10t + 3 = 0 ⇔ t = 3; t = 1/3 → x = 1; x = −1."),
  ]),

  M(34, 'Ôn tập – Nguyên hàm tích phân và số phức', [
    Q("∫(2x + 3)/(x² + 3x + 1)' dx = ?", ['1/(x²+3x+1) + C', '2x + 3 + C', '(x²+3x+1)² + C', 'ln|x² + 3x + 1| + C'], 3, "Tử số = đạo hàm mẫu → ∫u'/u du = ln|u| + C."),
    Q("Tính ∫₀^(π/2) cos²x dx?", ['π/3', 'π/4', '1', 'π/8'], 1, "cos²x = (1+cos2x)/2 → tích phân = (π/2)/2 + sin(π)/4 − 0 = π/4."),
    Q("Cho z thoả |z − 1| = |z + i|. Tập điểm M biểu diễn z?", ['Đường thẳng y = −x', 'Đường tròn', 'Trục Ox', 'Điểm cố định'], 0, "(x−1)² + y² = x² + (y+1)² ⇔ −2x + 1 = 2y + 1 ⇔ y = −x."),
    Q("Mô-đun của z = (1+i)/(1−i) bằng?", ['0', '1', '|z| = 1/2', '2'], 1, "Nhân (1+i): z = (1+i)²/2 = i → |z| = 1."),
    Q("∫₀² (3x² − 2x) dx?", ['4', '0', '8', '6'], 0, "[x³ − x²]₀² = 8 − 4 = 4."),
    Q("Phương trình z² + 4 = 0 có nghiệm?", ['z = ±2', 'z = ±i', 'Vô nghiệm', 'z = ±2i'], 3, "z² = −4 → z = ±2i."),
  ]),

  M(35, 'Ôn tập – Hình học không gian Oxyz', [
    Q("Mp đi qua 3 điểm A(1;0;0), B(0;2;0), C(0;0;3) có PT?", ['x + y/2 + z/3 = 1', 'x + 2y + 3z = 1', 'x/1 + y/2 + z/3 = 0', 'x + y + z = 1'], 0, "Dạng đoạn chắn: x/a + y/b + z/c = 1."),
    Q("Bán kính mặt cầu đi qua 4 điểm O, A(2;0;0), B(0;2;0), C(0;0;2)?", ['3', '√3', '2', '1'], 1, "Tâm I(1;1;1), R = √3."),
    Q("Vị trí tương đối đường thẳng d: x=t; y=t; z=t và mp x+y+z=3?", ['Vuông góc', 'Nằm trong mp', 'Song song', 'Cắt tại (1;1;1)'], 3, "Thay vào: 3t = 3 ⇔ t = 1. Cắt tại M(1;1;1)."),
    Q("Cho A(1;2;3), B(3;4;5). PT mặt phẳng trung trực AB?", ['x + y + z = 0', 'x + y + z − 9 = 0', '2x + 2y + 2z = 18', 'x + y + z + 9 = 0'], 1, "Trung điểm I(2;3;4), VTPT AB(2;2;2). PT: 2(x−2)+2(y−3)+2(z−4) = 0 ⇔ x+y+z=9."),
    Q("Hình chiếu của A(2;3;4) lên trục Ox?", ['(2;3;0)', '(0;0;4)', '(2;0;0)', '(0;3;0)'], 2, "Hình chiếu lên Ox giữ x, đặt y=z=0."),
    Q("Cho mặt cầu (S): x² + y² + z² = 9 và mp (P): x + y + z = √3. (P) cắt (S) theo đường tròn bán kính?", ['r = √7', '2', '√8', '3'], 2, "d = |√3|/√3 = 1. r = √(9−1) = √8."),
  ]),
];

export const H12TOAN_SCENARIOS = indexBy(H12TOAN_WEEKS);
