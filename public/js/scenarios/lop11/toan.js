// ============================================================
// Lớp 11 · TOÁN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Toán 11: Lượng giác – Dãy số/CSC/CSN – Giới hạn – Đạo hàm – Hình học không gian – Xác suất).
// ID prefix: "H11TOAN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11TOAN', 'toan', n, title, qs, opts);

export const H11TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Góc lượng giác và đơn vị radian', [
    Q('1 radian bằng bao nhiêu độ (gần đúng)?', ['57°17′45″', '45°', '60°', '90°'], 0, '1 rad = 180°/π ≈ 57°17′45″.'),
    Q('Đổi 60° ra radian?', ['π/3', 'π/6 rad', 'π/2 rad', '2π/3 rad'], 0, '60° = 60·π/180 = π/3.'),
    Q('Đổi π/4 rad ra độ?', ['90°', '60°', '45°', '30°'], 2, 'π/4 · 180/π = 45°.'),
    Q('Cung lượng giác có nhiều giá trị khác nhau bởi vì?', ['Không đổi', 'Cộng thêm k·π/2', 'Cộng thêm k·π', 'Cộng thêm k·2π'], 3, 'Sai khác bội của 2π cùng vị trí điểm cuối.'),
    Q('Trên đường tròn lượng giác, điểm M ứng với góc π có toạ độ?', ['(1; 0)', '(0;−1)', '(0; 1)', '(−1;0)'], 3, 'cos π = −1, sin π = 0.'),
    Q('Độ dài cung tròn bán kính R, số đo α rad là?', ['α/R', 'R·α', 'π·R·α/180', '2π·R·α'], 1, 'l = R·α.'),
  ]),

  M(2, 'Giá trị lượng giác của một góc', [
    Q('sin(π/2) = ?', ['1/2', '1', '−1 (âm một)', '0'], 1, 'Cơ bản.'),
    Q('cos(π) = ?', ['1', '0', '−1', '1/2'], 2, 'Cơ bản.'),
    Q('tan(π/4) = ?', ['0', '1', '√3 (căn ba)', '1/√3'], 1, 'Cơ bản.'),
    Q('sin²α + cos²α = ?', ['1', '0', '2', 'sin 2α'], 0, 'Hệ thức cơ bản.'),
    Q('Nếu sinα = 3/5 và α ∈ (0;π/2) thì cosα = ?', ['3/4', '4/5', '5/3', '−4/5 (âm bốn phần năm)'], 1, 'cosα = √(1−9/25) = 4/5, dương.'),
    Q('Dấu của tan α khi α ∈ (π/2; π)?', ['Dương', 'Bằng 0', 'Âm', 'Không xác định'], 2, 'Cung II: sin+, cos−, tan−.'),
  ]),

  M(3, 'Công thức lượng giác', [
    Q('sin(a+b) = ?', ['sina·cosb + cosa·sinb', 'cosa·cosb + sina·sinb', 'sina·cosb − cosa·sinb', 'cosa·cosb − sina·sinb'], 0, 'Công thức cộng.'),
    Q('cos 2α = ?', ['sin²α − cos²α', '2cos²α − 1', '1 − 2cos²α', '2sin²α − 1'], 1, 'Công thức nhân đôi.'),
    Q('sin 2α = ?', ['2sinα − cosα', 'cos²α − sin²α', 'sin²α + cos²α', '2sinα·cosα'], 3, 'Công thức nhân đôi.'),
    Q('cos a + cos b = ?', ['2sin((a+b)/2)·sin((a−b)/2)', '2cos a·cos b', '2sin((a+b)/2)·cos((a−b)/2)', '2cos((a+b)/2)·cos((a−b)/2)'], 3, 'Tổng thành tích.'),
    Q('Tính sin 75° (dùng 75° = 45°+30°)?', ['√2/2', '(√3+1)/2', '(√6+√2)/4', '(√6−√2)/4'], 2, 'sin(45+30) = sin45cos30+cos45sin30 = (√6+√2)/4.'),
    Q('Rút gọn: 1 − 2sin²α', ['cos 2α', '1 + cos 2α', 'sin 2α', 'tan 2α'], 0, '1 − 2sin²α = cos 2α.'),
  ]),

  M(4, 'Hàm số lượng giác và đồ thị', [
    Q('Tập xác định của hàm số y = sin x là?', ['ℝ', '[−1;1]', 'ℝ \\ {kπ}', '(−∞;0)'], 0, 'sin xác định với mọi x ∈ ℝ.'),
    Q('Tập giá trị của y = cos x là?', ['[0; 1]', '(−1; 1)', 'ℝ (toàn trục số)', '[−1;1]'], 3, '−1 ≤ cos x ≤ 1.'),
    Q('Chu kỳ của y = tan x là?', ['π/2', 'π', '2π', '4π'], 1, 'tan có chu kỳ π.'),
    Q('Hàm số y = sin x là hàm?', ['Vừa chẵn vừa lẻ', 'Chẵn', 'Không chẵn không lẻ', 'Lẻ'], 3, 'sin(−x) = −sin x.'),
    Q('Đồ thị y = cos x đối xứng qua?', ['Trục Ox', 'Trục Oy', 'Đường y = x', 'Gốc toạ độ O'], 1, 'cos là hàm chẵn.'),
    Q('Hàm y = tan x không xác định tại?', ['x = 2kπ', 'x = kπ', 'x = π + 2kπ', 'x = π/2 + kπ'], 3, 'cos x = 0 tại π/2 + kπ.'),
  ]),

  M(5, 'Phương trình lượng giác cơ bản', [
    Q('Phương trình sin x = 0 có nghiệm?', ['x = π + 2kπ', 'x = kπ', 'x = π/2 + kπ', 'x = 2kπ'], 1, 'sin x = 0 ⇔ x = kπ.'),
    Q('cos x = 1 có nghiệm?', ['x = 2kπ', 'x = π/2 + kπ', 'x = π + kπ', 'x = kπ'], 0, 'Cosin bằng 1 tại 2kπ.'),
    Q('sin x = 1/2 có nghiệm tổng quát?', ['x = π/6 + k2π hoặc x = 5π/6 + k2π', 'x = π/4 + k2π', 'x = π/6 + kπ', 'x = π/3 + k2π'], 0, 'sin x = sin(π/6).'),
    Q('cos x = 0 có nghiệm?', ['x = π/4 + kπ', 'x = kπ', 'x = 2kπ', 'x = π/2 + kπ'], 3, 'cos = 0 tại π/2 + kπ.'),
    Q('tan x = 1 có nghiệm?', ['x = π/2 + kπ', 'x = kπ', 'x = π/4 + 2kπ', 'x = π/4 + kπ'], 3, 'tan có chu kỳ π.'),
    Q('Số nghiệm của sin x = 1/2 trên [0; 2π) là?', ['1', '2', '4', '3'], 1, 'x = π/6 và x = 5π/6.'),
  ]),

  M(6, 'Phương trình lượng giác nâng cao', [
    Q('Phương trình a sin x + b cos x = c có nghiệm khi?', ['c = 0', '|c| ≤ √(a² + b²)·2', 'a² + b² ≤ c²', 'a² + b² ≥ c²'], 3, 'Điều kiện có nghiệm là a² + b² ≥ c².'),
    Q('Biến đổi sin x + cos x thành dạng?', ['√2 cos(x + π/4)', 'sin(2x)', '√2 sin(x + π/4)', '2 sin(x + π/4)'], 2, 'sin x + cos x = √2 sin(x + π/4).'),
    Q('Giải sin²x = 1/4', ['x = π/4 + kπ', 'x = ±π/3 + kπ', 'x = ±π/6 + kπ', 'x = π/2 + kπ'], 2, 'sin x = ±1/2 ⇒ x = ±π/6 + kπ.'),
    Q('Phương trình 2cos²x − 1 = 0 tương đương?', ['cos 2x = 0', 'sin 2x = 0', 'sin x = 1', 'cos x = 1'], 0, '2cos²x − 1 = cos 2x.'),
    Q('Phương trình bậc hai theo sin x: 2sin²x − 3sin x + 1 = 0 có nghiệm sin x = ?', ['1 hoặc −1/2', '−1 hoặc −1/2', '1 hoặc 1/2', '−1 hoặc 1/2'], 2, 'Giải bậc 2: t = 1 hoặc t = 1/2.'),
    Q('Phương trình tan x = tan α có nghiệm?', ['x = −α + kπ', 'x = α + k·π/2', 'x = α + 2kπ', 'x = α + kπ'], 3, 'tan tuần hoàn chu kỳ π.'),
  ]),

  M(7, 'Dãy số — khái niệm và biểu diễn', [
    Q('Dãy số (uₙ) được hiểu là hàm số từ?', ['ℕ vào ℕ', 'ℕ* vào ℝ', 'ℝ vào ℕ', 'ℝ vào ℝ'], 1, 'Dãy số là hàm trên ℕ*.'),
    Q('Cho uₙ = 2n + 1, u₅ = ?', ['11', '9', '10', '12'], 0, '2·5 + 1 = 11.'),
    Q('Dãy uₙ = (−1)ⁿ là dãy?', ['Không tăng không giảm', 'Giảm', 'Tăng', 'Hằng bằng 1'], 0, 'Dao động ±1.'),
    Q('Dãy uₙ = n² là dãy?', ['Bị chặn', 'Giảm', 'Hằng số bằng 1', 'Tăng'], 3, '(n+1)² > n² với mọi n ∈ ℕ*.'),
    Q('Dãy uₙ = 1/n là dãy?', ['Hằng bằng 1', 'Tăng', 'Không xác định', 'Giảm'], 3, '1/(n+1) < 1/n.'),
    Q('Dãy uₙ = sin n bị chặn trong khoảng?', ['[−1;1]', '[0; 1]', '[−π;π]', '(−∞; +∞)'], 0, 'sin có giá trị trong [−1;1].'),
  ]),

  M(8, 'Cấp số cộng', [
    Q('Cấp số cộng có công sai d, công thức số hạng tổng quát?', ['uₙ = u₁ + nd', 'uₙ = u₁ − (n−1)d', 'uₙ = u₁ + (n−1)d', 'uₙ = u₁·dⁿ⁻¹'], 2, 'CSC: uₙ = u₁ + (n−1)d.'),
    Q('CSC có u₁ = 2, d = 3. Tìm u₅.', ['14', '17', '15', '12'], 0, 'u₅ = 2 + 4·3 = 14.'),
    Q('Tổng n số hạng đầu của CSC?', ['Sₙ = n²·d', 'Sₙ = n(u₁+uₙ)/2', 'Sₙ = n·uₙ', 'Sₙ = n·u₁'], 1, 'Công thức tổng.'),
    Q('Tính 1 + 2 + 3 + ... + 100.', ['5100', '10000', '5000', '5050'], 3, 'S = 100·101/2 = 5050.'),
    Q('CSC: 3, 7, 11, ... Công sai d = ?', ['7', '4', '3', '5'], 1, 'd = 7 − 3 = 4.'),
    Q('Ba số a, b, c lập thành CSC khi?', ['b = a − c', 'a + b + c = 0', '2b = a + c', 'b² = ac'], 2, 'Số hạng giữa bằng trung bình cộng.'),
  ]),

  M(9, 'Cấp số nhân', [
    Q('CSN có công bội q, số hạng tổng quát?', ['uₙ = u₁·qⁿ⁻¹', 'uₙ = u₁/qⁿ', 'uₙ = u₁·q', 'uₙ = u₁ + (n−1)q'], 0, 'CSN: uₙ = u₁·qⁿ⁻¹.'),
    Q('CSN có u₁ = 2, q = 3. Tìm u₄.', ['27', '81', '54', '24'], 2, 'u₄ = 2·3³ = 54.'),
    Q('Tổng n số hạng đầu của CSN (q ≠ 1)?', ['Sₙ = u₁(1−qⁿ)/(1−q)', 'Sₙ = u₁·q', 'Sₙ = n·u₁', 'Sₙ = u₁·qⁿ'], 0, 'Công thức tổng CSN.'),
    Q('Ba số a, b, c lập CSN khi?', ['2b = a+c', 'abc = 1', 'b² = ac', 'b = a+c'], 2, 'Số hạng giữa là TBNH.'),
    Q('Tính 1 + 2 + 4 + 8 + 16.', ['32', '15', '31', '30'], 2, 'CSN q = 2: (2⁵−1)/(2−1) = 31.'),
    Q('CSN có u₁ = 4, u₃ = 16. Công bội q dương = ?', ['−2 (âm hai)', '4', '2', '3'], 2, 'q² = 16/4 = 4 ⇒ q = 2.'),
  ]),

  M(10, 'Giới hạn dãy số', [
    Q('lim 1/n khi n → ∞ = ?', ['Không tồn tại', '+∞ (dương vô cùng)', '1', '0'], 3, 'Cơ bản.'),
    Q('lim (2n+1)/(n+3) = ?', ['2', '+∞ (dương vô cùng)', '1', '3'], 0, 'Chia tử mẫu cho n: → 2.'),
    Q('lim n² khi n → ∞ = ?', ['1', '−∞ (âm vô cùng)', '∞', '0'], 2, 'Tăng vô hạn.'),
    Q('lim (1 + 1/n)ⁿ = ?', ['+∞ (dương vô cùng)', 'e', 'π ≈ 3,14', '1'], 1, 'Số e ≈ 2.718.'),
    Q('lim qⁿ với |q| < 1 = ?', ['+∞ (dương vô cùng)', 'q (giấu quá trình)', '1', '0'], 3, 'Khi q ∈ (−1;1) thì qⁿ → 0.'),
    Q('Tổng của CSN lùi vô hạn 1 + 1/2 + 1/4 + ... = ?', ['+∞ (dương vô cùng)', '3', '2', '1'], 2, 'S = 1/(1−1/2) = 2.'),
  ]),

  M(11, 'Giới hạn hàm số', [
    Q('lim(x→2) (x² − 4)/(x − 2) = ?', ['0', '+∞ (dương vô cùng)', '4', '2'], 2, 'Rút gọn: x + 2 → 4.'),
    Q('lim(x→0) sin x / x = ?', ['0', 'Không tồn tại', '+∞ (dương vô cùng)', '1'], 3, 'Giới hạn cơ bản.'),
    Q('lim(x→+∞) 1/x = ?', ['−∞ (âm vô cùng)', '+∞ (dương vô cùng)', '0', '1'], 2, 'Cơ bản.'),
    Q('lim(x→0⁺) 1/x = ?', ['1', '−∞ (âm vô cùng)', '+∞', '0'], 2, 'Tiệm cận dương.'),
    Q('lim(x→3) (x² − 9)/(x − 3) = ?', ['3', '6', '9', '0'], 1, 'Rút gọn: x + 3 → 6.'),
    Q('lim(x→1) (x − 1)/(x² − 1) = ?', ['1 (hằng số)', '0', '1', '1/2'], 3, '1/(x+1) → 1/2.'),
  ]),

  M(12, 'Hàm số liên tục', [
    Q('Hàm f liên tục tại x₀ khi?', ['lim(x→x₀) f(x) = f(x₀)', 'f(x₀) = 0', 'f đơn điệu', 'f(x₀) tồn tại'], 0, 'Định nghĩa liên tục.'),
    Q('Hàm đa thức liên tục trên?', ['Một khoảng nhất định', '(0; +∞)', 'ℝ', '[0; 1]'], 2, 'Đa thức liên tục trên ℝ.'),
    Q('Hàm f(x) = 1/x không liên tục tại?', ['x = 0', 'Mọi x', 'x = 1', 'x = −1'], 0, 'Không xác định tại 0.'),
    Q('Định lý giá trị trung gian áp dụng cho hàm?', ['Tuần hoàn', 'Liên tục trên đoạn', 'Khả vi', 'Đơn điệu'], 1, 'Bolzano - giá trị trung gian.'),
    Q('Nếu f liên tục trên [a;b] và f(a)·f(b) < 0 thì?', ['Có ít nhất 1 nghiệm trong (a;b)', 'f đơn điệu', 'Duy nhất nghiệm', 'Vô nghiệm'], 0, 'Hệ quả định lý Bolzano.'),
    Q('Hàm f(x) = |x| liên tục tại x = 0?', ['Có', 'Tuỳ phía', 'Không xác định', 'Không, vì không có đạo hàm'], 0, 'lim trái = lim phải = f(0) = 0.'),
  ]),

  M(13, 'Định nghĩa và ý nghĩa đạo hàm', [
    Q('Đạo hàm của f tại x₀ là?', ['f(x₀)/x₀', 'f(x₀)·x₀', 'lim(Δx→0) [f(x₀+Δx)−f(x₀)]/Δx', 'f(x₀+Δx)−f(x₀)'], 2, 'Định nghĩa.'),
    Q('Ý nghĩa hình học đạo hàm f′(x₀)?', ['Hệ số góc tiếp tuyến tại x₀', 'Khoảng cách tới Ox', 'Giá trị hàm tại x₀', 'Diện tích dưới đồ thị'], 0, 'f′(x₀) là hệ số góc tiếp tuyến.'),
    Q('Đạo hàm của hằng số C bằng?', ['1', '0', 'C (chính hằng số)', 'x'], 1, '(C)′ = 0.'),
    Q('(xⁿ)′ = ?', ['n·xⁿ', 'xⁿ', 'xⁿ⁺¹/(n+1)', 'nxⁿ⁻¹'], 3, 'Quy tắc luỹ thừa.'),
    Q('(sin x)′ = ?', ['cos x', '−cos x', '−sin x', 'sin x'], 0, 'Đạo hàm cơ bản.'),
    Q('(cos x)′ = ?', ['cos x', '−cos x', '−sin x', 'sin x'], 2, 'Đạo hàm cơ bản.'),
  ]),

  M(14, 'Quy tắc tính đạo hàm', [
    Q('(u + v)′ = ?', ['u′ + v′', 'u′·v′', 'u′ − v′', 'u·v′ − u′·v'], 0, 'Tuyến tính.'),
    Q('(u·v)′ = ?', ['u′v + uv′', 'u′v − uv′', 'u + v', 'u′·v′'], 0, 'Quy tắc tích.'),
    Q('(u/v)′ = ?', ['(u′v + uv′)/v²', '(u′v − uv′)/v²', '(u′v + uv′)/v', 'u′/v′'], 1, 'Quy tắc thương.'),
    Q('Đạo hàm của f(x) = x³ + 2x + 1 là?', ['3x²', 'x² + 2', '3x² + 2', '3x³ + 2'], 2, 'Áp dụng quy tắc luỹ thừa.'),
    Q('Đạo hàm của f(x) = sin(2x)?', ['sin(2x)', '−2cos(2x)', '2cos(2x)', 'cos(2x)'], 2, 'Hàm hợp: (sin u)′ = u′cos u.'),
    Q('(tan x)′ = ?', ['1/sin²x', '1/cos²x', '−1/cos²x', '1 + cot²x'], 1, '(tan x)′ = 1 + tan²x = 1/cos²x.'),
  ]),

  M(15, 'Đạo hàm cấp cao và ứng dụng', [
    Q('Đạo hàm cấp 2 ký hiệu?', ['(f(x))′·2', 'f′(x)²', 'f″(x)', 'f(f(x))'], 2, 'f″ là đạo hàm của f′.'),
    Q('Nếu f′(x₀) = 0 và f″(x₀) > 0 thì x₀ là?', ['Tiệm cận', 'Điểm uốn', 'Cực đại', 'Cực tiểu'], 3, 'Điều kiện đủ cực tiểu.'),
    Q('f″(x) > 0 trên khoảng I thì đồ thị?', ['Lõm lên', 'Có cực trị', 'Lõm xuống', 'Không có điểm uốn'], 0, 'Lồi dưới ⇔ lõm lên.'),
    Q('Phương trình tiếp tuyến của y = f(x) tại x₀?', ['y = f′(x)', 'y = f′(x₀)(x − x₀) + f(x₀)', 'y = x − x₀', 'y = f(x₀)·x'], 1, 'PT tiếp tuyến chuẩn.'),
    Q('f(x) = x², f″(x) = ?', ['2x', '0', '2', '1'], 2, 'f′ = 2x, f″ = 2.'),
    Q('Vận tốc tức thời tại t₀ bằng?', ['s(t₀)/t₀', 's″(t₀)·t₀', 's″(t₀)', 's′(t₀)'], 3, 'Vận tốc = đạo hàm quãng đường.'),
  ]),

  M(16, 'Ôn tập đạo hàm và lượng giác', [
    Q('Đạo hàm của y = x² + sin x?', ['x + cos x', '2x · sin x', '2x + cos x', '2x − cos x'], 2, 'Tuyến tính.'),
    Q('PT tiếp tuyến của y = x² tại x = 1?', ['y = 2x', 'y = 2x + 1', 'y = x − 1', 'y = 2x − 1'], 3, 'f′(1) = 2, f(1) = 1; y = 2(x−1)+1 = 2x−1.'),
    Q('Đạo hàm của y = cos(3x)?', ['3cos(3x)', '−3sin(3x)', '−sin(3x)', '3sin(3x)'], 1, 'Hàm hợp.'),
    Q('Phương trình sin x = √2/2 trên [0;π]?', ['x = π/4 hoặc 3π/4', 'x = π/2', 'x = π/6', 'x = π/3'], 0, 'sin = √2/2 ⇒ π/4, 3π/4.'),
    Q('Tính cos 75°·cos 15° − sin 75°·sin 15° = ?', ['1/2', '1', 'sin 60°', 'cos 90° = 0'], 3, 'cos(75+15) = cos 90° = 0.'),
    Q('Cực trị hàm số y = x³ − 3x?', ['x = ±2', 'x = ±√3', 'x = ±1', 'x = 0'], 2, 'y′ = 3x² − 3 = 0 ⇒ x = ±1.'),
  ]),

  M(17, 'Ôn tập giữa kỳ I', [
    Q('Đổi 135° sang radian.', ['5π/6', 'π/4', '3π/4', '3π/2'], 2, '135·π/180 = 3π/4.'),
    Q('CSC 5, 8, 11, ... Tìm số hạng thứ 10.', ['30', '32', '35', '29'], 1, 'u₁₀ = 5 + 9·3 = 32.'),
    Q('Tính lim(x→∞) (3x² + x)/(x² + 5)?', ['5', '3', '1', '+∞ (dương vô cùng)'], 1, 'Chia tử mẫu cho x²: → 3.'),
    Q('CSN u₁ = 1, q = 1/2. Tổng vô hạn?', ['+∞ (dương vô cùng)', '1', '4', '2'], 3, '1/(1−1/2) = 2.'),
    Q('Tính sin(π/3) + cos(π/3)?', ['(√3+1)/2', '0', '1', '√3 − 1'], 0, '√3/2 + 1/2 = (√3+1)/2.'),
    Q('Đạo hàm của f(x) = 3x² − 5x + 2?', ['5 − 6x', '3x − 5', '6x − 5', '6x + 5'], 2, 'Đạo hàm đa thức.'),
  ]),

  M(18, 'Kiểm tra học kỳ I', [
    Q('Phương trình cos 2x = 1/2 có nghiệm?', ['x = π/2 + kπ', 'x = ±π/6 + kπ', 'x = π/4 + kπ', 'x = ±π/3 + kπ'], 1, '2x = ±π/3 + k2π ⇒ x = ±π/6 + kπ.'),
    Q('Tổng 1 + 3 + 5 + ... + (2n−1) = ?', ['n²', 'n(n+1)/2', '2n−1', 'n(2n−1)'], 0, 'CSC tổng các số lẻ.'),
    Q('lim(n→∞) (n+1)/n = ?', ['0 (không)', '0', '1', '+∞ (dương vô cùng)'], 2, 'Chia: 1 + 1/n → 1.'),
    Q('Đạo hàm của y = (x+1)³?', ['3(x+1)', '3x²', '(x+1)²', '3(x+1)²'], 3, 'Hàm hợp.'),
    Q('Cho f(x) = x² + 1, f′(2) = ?', ['4', '2', '1', '5'], 0, 'f′(x) = 2x, f′(2) = 4.'),
    Q('Phương trình tan x = √3 có nghiệm?', ['x = π/3 + 2kπ', 'x = π/3 + kπ', 'x = π/6 + kπ', 'x = π/4 + kπ'], 1, 'tan = √3 ⇒ x = π/3 + kπ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Đường thẳng và mặt phẳng trong không gian', [
    Q('Qua 3 điểm không thẳng hàng có bao nhiêu mặt phẳng?', ['Vô số mặt phẳng', '0', '2', '1'], 3, 'Tiên đề: duy nhất 1 mặt phẳng.'),
    Q('Hai đường thẳng phân biệt không cùng nằm trên 1 mặt phẳng gọi là?', ['Song song', 'Chéo nhau', 'Trùng nhau', 'Cắt nhau'], 1, 'Chéo nhau = không đồng phẳng.'),
    Q('Vị trí tương đối của 2 mặt phẳng phân biệt?', ['Trùng nhau', 'Cắt nhau tại 1 điểm', 'Vuông góc', 'Song song hoặc cắt theo 1 đường'], 3, 'Hai mp hoặc song song hoặc cắt nhau theo đường thẳng.'),
    Q('Hình chóp tứ giác có bao nhiêu mặt?', ['6', '8', '4', '5'], 3, '1 đáy + 4 mặt bên.'),
    Q('Đường thẳng nằm trong mặt phẳng khi?', ['Vuông góc', 'Song song', 'Có 1 điểm thuộc', 'Có 2 điểm thuộc mặt phẳng'], 3, 'Tiên đề.'),
    Q('Giao tuyến của 2 mặt phẳng (nếu có) là?', ['Một đường thẳng', 'Một điểm', 'Tập rỗng luôn', 'Một mặt phẳng'], 0, 'Nếu cắt thì giao là đường thẳng.'),
  ]),

  M(20, 'Hai đường thẳng song song', [
    Q('Hai đường thẳng song song trong không gian là 2 đường?', ['Có 1 điểm chung', 'Đồng phẳng và không có điểm chung', 'Trùng nhau', 'Vuông góc'], 1, 'Định nghĩa.'),
    Q('Định lý: a // b và b // c thì?', ['a // c', 'a ⊥ c (vuông góc)', 'a cắt c', 'a chéo c'], 0, 'Tính bắc cầu song song.'),
    Q('Hai đường thẳng cùng song song với một mặt phẳng thì?', ['Luôn chéo', 'Luôn song song', 'Luôn cắt', 'Có thể song song, cắt, chéo'], 3, 'Không kết luận được vị trí tương đối.'),
    Q('Trong hình lập phương ABCD.A′B′C′D′, AB và CD?', ['Cắt nhau tại trung điểm', 'Chéo nhau', 'Trùng nhau', 'Song song'], 3, 'Cùng nằm trong (ABCD) và không cắt.'),
    Q('AB và A′D′ trong hình lập phương?', ['Trùng nhau', 'Cắt nhau tại A', 'Song song', 'Chéo'], 3, 'Không cùng mặt phẳng.'),
    Q('Hai đường thẳng chéo nhau có thể đồng phẳng?', ['Luôn đồng phẳng', 'Tuỳ vị trí', 'Không', 'Có, nếu cùng vuông góc mp thứ ba'], 2, 'Chéo = không đồng phẳng theo định nghĩa.'),
  ]),

  M(21, 'Đường thẳng song song với mặt phẳng', [
    Q('Đường thẳng d // (P) khi?', ['d ⊥ (P)', 'd không có điểm chung với (P)', 'd nằm trong (P)', 'd cắt (P)'], 1, 'Định nghĩa.'),
    Q('Nếu d // a và a ⊂ (P) thì d // (P) khi?', ['d trùng a', 'd ⊂ (P)', 'd không thuộc (P)', 'd cắt (P)'], 2, 'Định lý song song với mặt phẳng.'),
    Q('Trong hình chóp S.ABCD đáy hình bình hành, SA và (BCD)?', ['Luôn trùng nhau', 'Luôn song song', 'Có thể song song hoặc cắt', 'Luôn vuông'], 2, 'Phụ thuộc vị trí S.'),
    Q('Đường thẳng song song với mp có vô số đường thẳng trong mp?', ['Cắt nó', 'Song song với nó', 'Vuông góc', 'Chéo với nó'], 1, 'Mọi đường thẳng trong mp song song d đều // d.'),
    Q('Nếu (P) chứa d và (P) cắt (Q) theo a, d // (Q) thì?', ['d // a', 'd ⊥ a', 'd ≡ a', 'd cắt a'], 0, 'Định lý giao tuyến.'),
    Q('Trong hình hộp, các đường chéo mặt bên thường?', ['Trùng nhau', 'Cắt nhau', 'Chéo nhau hoặc song song', 'Vuông góc'], 2, 'Tuỳ vị trí trong hình hộp.'),
  ]),

  M(22, 'Hai mặt phẳng song song', [
    Q('Hai mặt phẳng song song khi?', ['Vuông góc', 'Không có điểm chung', 'Trùng nhau', 'Có 1 đường thẳng chung'], 1, 'Định nghĩa.'),
    Q('Nếu (P) chứa 2 đường thẳng cắt nhau cùng // (Q) thì?', ['(P) // (Q)', '(P) ⊥ (Q)', '(P) cắt (Q)', '(P) ≡ (Q)'], 0, 'Tiêu chuẩn song song mp.'),
    Q('Hai mặt phẳng song song bị cắt bởi mp thứ 3 thì hai giao tuyến?', ['Chéo nhau', 'Trùng nhau', 'Vuông góc', 'Song song'], 3, 'Định lý giao tuyến.'),
    Q('Hai mp song song có khoảng cách?', ['Bằng vô cùng', 'Bằng 0', 'Không đổi', 'Tuỳ điểm'], 2, 'Khoảng cách giữa 2 mp song song không đổi.'),
    Q('Trong lăng trụ, hai đáy có vị trí?', ['Trùng nhau', 'Vuông góc', 'Cắt nhau', 'Song song'], 3, 'Định nghĩa lăng trụ.'),
    Q('Mặt phẳng cắt lăng trụ song song với đáy cho thiết diện?', ['Bằng đáy', 'Là một điểm', 'Là đường thẳng', 'Khác đáy'], 0, 'Thiết diện ≅ đáy.'),
  ]),

  M(23, 'Vectơ trong không gian', [
    Q('Quy tắc 3 điểm: AB + BC = ?', ['AC', 'AC + 2', 'BA + CB', '0'], 0, 'Quy tắc tam giác cho vectơ.'),
    Q('Trong hình hộp ABCD.A′B′C′D′: AB + AD + AA′ = ?', ['BD′', 'A′C', 'AC′', 'BC (cạnh đáy)'], 2, 'Đường chéo hình hộp = tổng 3 cạnh bên.'),
    Q('Hai vectơ cùng phương khi?', ['Giá song song hoặc trùng nhau', 'Cùng hướng', 'Vuông góc', 'Cùng độ dài'], 0, 'Định nghĩa.'),
    Q('Tích vô hướng a·b = ?', ['|a|·|b|·cos(a,b)', '|a − b|', '|a| + |b|', '|a|·|b|·sin(a,b)'], 0, 'Định nghĩa tích vô hướng.'),
    Q('a ⊥ b ⇔ ?', ['a × b = 0', 'a + b = 0', 'a·b = 0', '|a| = |b|'], 2, 'Vuông góc ⇔ tích vô hướng = 0.'),
    Q('Ba vectơ đồng phẳng khi?', ['Vuông góc nhau', 'Bằng nhau', 'Có 3 vec tơ cùng giá nằm trên 1 mp song song', 'Cùng hướng'], 2, '3 vectơ đồng phẳng = có thể đặt cùng 1 mp.'),
  ]),

  M(24, 'Hai đường thẳng vuông góc', [
    Q('Góc giữa hai đường thẳng trong không gian thuộc khoảng?', ['[0°; 360°]', '[0°; 90°]', '[−90°; 90°]', '[0°; 180°]'], 1, 'Góc giữa 2 đường thẳng ∈ [0°;90°].'),
    Q('a ⊥ b khi góc giữa chúng?', ['0°', '45°', '90°', '180°'], 2, 'Vuông góc = 90°.'),
    Q('Nếu a // b và b ⊥ c thì?', ['a // c', 'a ⊥ c', 'Không kết luận', 'a ≡ c'], 1, 'Tính chất vuông góc + song song.'),
    Q('Trong hình lập phương ABCD.A′B′C′D′, AB và A′D′?', ['Song song', 'Vuông góc', '45°', 'Hợp góc 60°'], 1, 'A′D′ // AD; AB ⊥ AD trong đáy.'),
    Q('Tính chất góc giữa 2 đường thẳng?', ['Luôn 90°', 'Phụ thuộc hướng', 'Luôn 0°', 'Không phụ thuộc hướng vectơ chỉ phương'], 3, 'Chọn vectơ chỉ phương bất kỳ.'),
    Q('Trong hình lập phương, AB và CC′?', ['Cắt nhau tại A', 'Song song', 'Chéo và vuông', 'Vuông góc'], 2, 'Chéo nhau và góc 90°.'),
  ]),

  M(25, 'Đường thẳng vuông góc mặt phẳng', [
    Q('d ⊥ (P) khi d vuông góc với?', ['(P) thôi', 'Hai đường thẳng cắt nhau trong (P)', 'Một đường thẳng trong (P)', 'Mọi đường thẳng trong (P)'], 1, 'Tiêu chuẩn: ⊥ với 2 đường cắt nhau trong (P).'),
    Q('Định lý 3 đường vuông góc liên quan?', ['Hình chiếu vuông góc', 'Song song', 'Tịnh tiến', 'Phép quay'], 0, 'Định lý 3 đường vuông góc qua hình chiếu.'),
    Q('Trong hình chóp S.ABC, SA ⊥ (ABC) thì SA ⊥ ?', ['SC (cạnh bên)', 'BC', 'Mọi đường trong (SAB)', 'SB (cạnh bên)'], 1, 'SA vuông mọi đường thuộc (ABC).'),
    Q('Hai đường thẳng cùng vuông góc với 1 mặt phẳng thì?', ['Song song với nhau', 'Chéo nhau', 'Trùng nhau', 'Vuông góc'], 0, 'Tính chất.'),
    Q('Mặt phẳng vuông góc với đường thẳng tại 1 điểm là?', ['Duy nhất', 'Vô số mặt phẳng', 'Không tồn tại', 'Hai mp đối xứng'], 0, 'Duy nhất 1 mp.'),
    Q('Khoảng cách từ điểm đến mặt phẳng đo bằng?', ['Đoạn vuông góc hạ xuống mp', 'Đoạn xiên', 'Đoạn cong', 'Đoạn nối hai điểm'], 0, 'Định nghĩa khoảng cách.'),
  ]),

  M(26, 'Hai mặt phẳng vuông góc', [
    Q('(P) ⊥ (Q) khi góc giữa chúng?', ['0°', '45°', '90°', '60°'], 2, 'Vuông góc = 90°.'),
    Q('Nếu (P) chứa 1 đường thẳng ⊥ (Q) thì?', ['(P) cắt (Q)', '(P) ⊥ (Q)', '(P) ≡ (Q)', '(P) // (Q)'], 1, 'Tiêu chuẩn.'),
    Q('Góc nhị diện đo bằng?', ['Khoảng cách giữa 2 cạnh', 'Góc phẳng tương ứng', 'Diện tích', 'Thể tích'], 1, 'Góc nhị diện = góc phẳng.'),
    Q('Hình lập phương có bao nhiêu cặp mặt vuông góc?', ['6', '24', '12', '3'], 2, 'Mỗi mặt vuông với 4 mặt kế ⇒ 12 cặp.'),
    Q('Đường thẳng nằm trong mp này, vuông góc với giao tuyến thì ⊥ mp kia khi?', ['Hai mp song song', 'Luôn đúng', 'Hai mp vuông góc', 'Hai mp trùng'], 2, 'Hệ quả của 2 mp ⊥.'),
    Q('Trong hình chóp đều, mặt bên và đáy?', ['Luôn vuông', 'Luôn song song', 'Luôn 60°', 'Vuông góc hay không tuỳ chóp'], 3, 'Phụ thuộc hình chóp; nhưng đường cao SO ⊥ đáy.'),
  ]),

  M(27, 'Khoảng cách trong không gian', [
    Q('Khoảng cách từ điểm M đến đường thẳng d?', ['Độ dài đoạn vuông góc hạ từ M xuống d', 'Đoạn nối M với 1 điểm bất kỳ', 'Không xác định', 'Khoảng cách 0'], 0, 'Định nghĩa.'),
    Q('Khoảng cách giữa 2 mặt phẳng song song?', ['Đoạn xiên', 'Đoạn cong', 'Đoạn nối tâm', 'Đoạn vuông góc'], 3, 'Đoạn vuông góc chung.'),
    Q('Khoảng cách 2 đường thẳng chéo nhau bằng?', ['Đoạn vuông góc chung', 'Tổng độ dài', 'Khoảng cách từ 1 điểm trên d₁ đến d₂', 'Đoạn nối 2 điểm tuỳ ý'], 0, 'Định nghĩa.'),
    Q('Hình chóp S.ABCD đáy vuông cạnh a, SA ⊥ đáy, SA = a. Khoảng cách SA đến BC?', ['a√2', 'a', 'a/2', '0'], 1, 'BC ⊥ (SAB) ⇒ d(SA;BC) = AB = a.'),
    Q('Hình lập phương cạnh a. Khoảng cách 2 đỉnh đối diện?', ['a (cạnh)', 'a√2', 'a√3', '2a'], 2, 'Đường chéo hình hộp lập phương = a√3.'),
    Q('Khoảng cách từ A đến mp (BCC′B′) trong lập phương cạnh a?', ['a/2', 'a√2', 'a√3', 'a'], 3, 'Khoảng cách = cạnh AB = a.'),
  ]),

  M(28, 'Góc trong không gian', [
    Q('Góc giữa đường thẳng d và mặt phẳng (P) là?', ['Góc vuông', 'Góc nhị diện', 'Góc giữa d và 1 đường thẳng trong (P)', 'Góc giữa d và hình chiếu của d trên (P)'], 3, 'Định nghĩa.'),
    Q('Nếu d ⊂ (P) thì góc giữa d và (P) bằng?', ['0°', '90°', '45°', 'Không xác định'], 0, 'd ⊂ (P) ⇒ trùng hình chiếu.'),
    Q('Nếu d ⊥ (P) thì góc bằng?', ['60°', '0°', '45°', '90°'], 3, 'Vuông góc.'),
    Q('Trong hình chóp đều S.ABCD, góc giữa SA và đáy?', ['0°', 'Góc SAO với O là tâm đáy', '90°', '45°'], 1, 'O là chân hình chiếu vuông góc của S.'),
    Q('Góc nhị diện được tạo bởi?', ['Hai mặt phẳng cắt nhau bất kỳ', 'Hai nửa mặt phẳng chung cạnh', 'Hai đường thẳng', 'Hai vectơ'], 1, 'Định nghĩa.'),
    Q('Góc giữa 2 mặt phẳng (P), (Q) cắt nhau theo a, lấy m ⊂ (P), m ⊥ a và n ⊂ (Q), n ⊥ a thì góc?', ['(m;n)', '0°', 'Không xác định', '(P;Q) = 90°'], 0, 'Tìm góc giữa 2 mp bằng cặp đường thẳng vuông góc giao tuyến.'),
  ]),

  M(29, 'Biến cố ngẫu nhiên — Xác suất cổ điển', [
    Q('Xác suất biến cố A trong không gian mẫu hữu hạn?', ['P(A) = n(A)·n(Ω)', 'P(A) = n(Ω)/n(A)', 'P(A) = n(A)/n(Ω)', 'P(A) = 1'], 2, 'Định nghĩa cổ điển.'),
    Q('P(A) thuộc đoạn nào?', ['[0;1]', '(0; 1)', '[−1;1]', 'ℝ (toàn số thực)'], 0, 'Xác suất ∈ [0;1].'),
    Q('P(∅) = ?', ['Không xác định', '0,5', '0', '1'], 2, 'Biến cố không xảy ra.'),
    Q('P(Ω) = ?', ['1', '0', '0,5', 'Phụ thuộc số phần tử Ω'], 0, 'Biến cố chắc chắn.'),
    Q('Gieo 1 con xúc xắc, P(số chẵn) = ?', ['1/2', '1/3', '1/6', '2/3'], 0, '3/6 = 1/2.'),
    Q('Gieo 2 đồng xu cân đối, P(2 mặt giống nhau)?', ['3/4', '1', '1/4', '1/2'], 3, '{SS, NN} / 4 = 1/2.'),
  ]),

  M(30, 'Biến cố độc lập — Quy tắc nhân', [
    Q('Hai biến cố A, B độc lập khi?', ['A và B xung khắc', 'P(A ∩ B) = P(A)·P(B)', 'P(A ∪ B) = P(A) + P(B)', 'P(A) = P(B)'], 1, 'Định nghĩa độc lập.'),
    Q('Gieo 2 đồng xu, P(cả 2 đều ngửa)?', ['1/2', '1', '1/4', '1/3'], 2, '(1/2)·(1/2) = 1/4.'),
    Q('Trong 1 hộp 5 đỏ, 5 xanh. Lấy lần lượt 2 viên có hoàn lại. P(cả 2 đều đỏ)?', ['3/4', '1/5', '1/4', '1/2'], 2, '(5/10)·(5/10) = 1/4.'),
    Q('A và B độc lập thì A′ và B?', ['Không độc lập', 'Bằng nhau', 'Xung khắc', 'Cũng độc lập'], 3, 'Tính chất.'),
    Q('P(A) = 0,3; P(B) = 0,5; A, B độc lập. P(A ∩ B) = ?', ['0,8', '0,3', '0,15', '0,2'], 2, '0,3·0,5 = 0,15.'),
    Q('Hai biến cố xung khắc và độc lập đồng thời khi?', ['Không bao giờ', 'P(A) = 1', 'Luôn được', 'P(A) = 0 hoặc P(B) = 0'], 3, 'Xung khắc ⇒ P(A∩B) = 0 = P(A)·P(B).'),
  ]),

  M(31, 'Xác suất có điều kiện', [
    Q('Xác suất có điều kiện P(A|B) = ?', ['P(A ∩ B)/P(B)', 'P(A) + P(B)', 'P(A)/P(B)', 'P(A)·P(B)'], 0, 'Định nghĩa, với P(B) > 0.'),
    Q('P(A ∩ B) = P(B)·P(A|B). Tên gọi?', ['Công thức Bayes', 'Công thức cộng', 'Toàn phần', 'Công thức nhân'], 3, 'Công thức nhân xác suất.'),
    Q('Nếu A, B độc lập thì P(A|B) = ?', ['1', 'P(B)', 'P(A)', '0'], 2, 'Định nghĩa độc lập.'),
    Q('Hộp 3 đỏ, 2 xanh. Lấy không hoàn lại 2 viên. P(viên 2 đỏ | viên 1 đỏ)?', ['1/2', '2/4', '3/5', '2/5'], 0, 'Còn 2 đỏ/4 viên = 2/4 = 1/2.'),
    Q('P(A) = 0,6; P(B|A) = 0,5. P(A ∩ B) = ?', ['0,1', '0,3', '0,6', '1,1'], 1, '0,6·0,5 = 0,3.'),
    Q('Công thức Bayes: P(A|B) = ?', ['P(A)·P(B)/P(A∩B)', 'P(A)+P(B)', 'P(A∪B)/P(B)', 'P(B|A)·P(A)/P(B)'], 3, 'Bayes.'),
  ]),

  M(32, 'Ôn tập xác suất nâng cao', [
    Q('Quy tắc cộng: A, B xung khắc thì P(A ∪ B) = ?', ['0', 'P(A) + P(B)', 'P(A) − P(B)', 'P(A)·P(B)'], 1, 'Cộng xung khắc.'),
    Q('Quy tắc cộng tổng quát: P(A ∪ B) = ?', ['P(A)·P(B)', 'P(A ∩ B)', 'P(A) + P(B)', 'P(A) + P(B) − P(A ∩ B)'], 3, 'Cộng tổng quát.'),
    Q('Gieo xúc xắc 2 lần, P(tổng = 7)?', ['1/9', '5/36', '1/6', '1/12'], 2, '6/36 = 1/6.'),
    Q('Lấy ngẫu nhiên 2 viên từ hộp 3 đỏ, 4 xanh. P(2 viên cùng màu)?', ['1/2', '(C(3,2)+C(4,2))/C(7,2)', 'C(7,2)', '1/7'], 1, 'P = (3+6)/21 = 9/21 = 3/7.'),
    Q('Một xạ thủ bắn 3 lần độc lập, P(trúng mỗi lần) = 0,8. P(cả 3 trúng)?', ['0,2', '0,8', '0,24', '0,512'], 3, '0,8³ = 0,512.'),
    Q('A, B với P(A) = 0,4; P(B) = 0,5; P(A ∩ B) = 0,2. P(A ∪ B)?', ['0,1', '0,9', '0,2', '0,7'], 3, '0,4+0,5−0,2 = 0,7.'),
  ]),

  M(33, 'Ôn tập đạo hàm và ứng dụng', [
    Q('Đạo hàm của y = x⁴ − 2x²?', ['x³ − x', '4x³ + 4x', '4x − 4', '4x³ − 4x'], 3, 'Đạo hàm đa thức.'),
    Q('PT tiếp tuyến của y = x² tại x = 2?', ['y = 4x − 4', 'y = 4x', 'y = 4x + 4', 'y = 2x'], 0, 'f′(2) = 4, f(2) = 4; y = 4(x−2)+4 = 4x−4.'),
    Q('Đạo hàm của y = sin x · cos x?', ['−sin x', 'cos 2x', 'sin 2x', '2sin x'], 1, '(sin x cos x)′ = cos²x − sin²x = cos 2x.'),
    Q('y = e^x trong chương trình mới có đạo hàm?', ['e^x', '1/x', 'ln x', 'x·e^(x−1)'], 0, 'Đạo hàm e^x = e^x.'),
    Q('y = ln x (x > 0) có đạo hàm?', ['1/x', 'x·ln x', 'ln x', 'e^x'], 0, '(ln x)′ = 1/x.'),
    Q('Vận tốc tức thời v(t) = ?', ['s(t)/t', 's″(t)', 's′(t)', 's(t)·t'], 2, 'Đạo hàm quãng đường.'),
  ]),

  M(34, 'Ôn tập tổng hợp HK2', [
    Q('Đường thẳng d ⊥ (P) và (P) // (Q) thì d ?', ['Cắt (Q) tại 1 điểm xiên', 'd ⊂ (Q)', '// (Q)', '⊥ (Q)'], 3, 'Hệ quả vuông góc và song song.'),
    Q('Tổng CSC 1 + 4 + 7 + ... có 20 số hạng?', ['600', '580', '610', '590'], 3, 'S = 20·(1+58)/2 = 590.'),
    Q('Phương trình cos x = 1 trên [0;2π]?', ['x = π', 'x = 0 và x = 2π', 'x = π/2', 'x = 0'], 1, 'cos = 1 ⇒ x = 0 và 2π (nếu bao gồm).'),
    Q('Tính lim(x→1) (x³ − 1)/(x − 1).', ['0', '1', '3', '+∞ (dương vô cùng)'], 2, 'x² + x + 1 → 3.'),
    Q('P(A) = 0,7. P(A′) = ?', ['1', '0,3', '0,7', '0'], 1, 'Bù: 1 − 0,7.'),
    Q('Khoảng cách 2 mp song song trong lập phương cạnh a?', ['a√3', 'a/2', 'a', 'a√2'], 2, 'Khoảng cách 2 đáy = cạnh = a.'),
  ]),

  M(35, 'Kiểm tra học kỳ II', [
    Q('Phương trình sin 2x = sin x có nghiệm trên [0; 2π]?', ['x = 0, π, 2π, π/3, 5π/3', 'Chỉ x = 0', 'x = π/2', 'x = π/4'], 0, 'sin 2x − sin x = sin x(2cos x − 1) = 0.'),
    Q('Tổng vô hạn 1 + 1/3 + 1/9 + ... = ?', ['1', '+∞ (dương vô cùng)', '2', '3/2'], 3, '1/(1−1/3) = 3/2.'),
    Q('lim(x→∞) (5x³ + 1)/(x³ − x) = ?', ['0', '+∞ (dương vô cùng)', '5', '1'], 2, 'Bằng tỷ số hệ số dẫn đầu.'),
    Q('Đạo hàm của y = (2x+1)⁵?', ['5(2x+1)⁴', '2(2x+1)⁵', '10(2x+1)⁴', '(2x+1)⁴'], 2, '5·(2x+1)⁴·2.'),
    Q('Hình chóp S.ABC có SA ⊥ (ABC), AB = AC = a, BC = a√2. Tam giác ABC?', ['Tam giác đều', 'Vuông tại A', 'Tù tại A', 'Cân không vuông'], 1, 'AB² + AC² = 2a² = BC² ⇒ vuông tại A.'),
    Q('P(A) = 0,4; P(B) = 0,3; A, B độc lập. P(A ∪ B)?', ['0,58', '0,12', '0,7', '0,1'], 0, 'P = 0,4 + 0,3 − 0,12 = 0,58.'),
  ]),
];

export const H11TOAN_SCENARIOS = indexBy(H11TOAN_WEEKS);
