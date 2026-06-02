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
    Q('1 radian bằng bao nhiêu độ (gần đúng)?', ['57°17′45″','45°','60°','90°'], 0, '1 rad = 180°/π ≈ 57°17′45″.'),
    Q('Đổi 60° ra radian?', ['π/3','π/6','π/4','π/2'], 0, '60° = 60·π/180 = π/3.'),
    Q('Đổi π/4 rad ra độ?', ['30°','45°','60°','90°'], 1, 'π/4 · 180/π = 45°.'),
    Q('Cung lượng giác có nhiều giá trị khác nhau bởi vì?', ['Cộng thêm k·2π','Cộng thêm k·π','Cộng thêm k·π/2','Không đổi'], 0, 'Sai khác bội của 2π cùng vị trí điểm cuối.'),
    Q('Trên đường tròn lượng giác, điểm M ứng với góc π có toạ độ?', ['(1;0)','(−1;0)','(0;1)','(0;−1)'], 1, 'cos π = −1, sin π = 0.'),
    Q('Độ dài cung tròn bán kính R, số đo α rad là?', ['R·α','α/R','R/α','R²·α'], 0, 'l = R·α.'),
  ]),

  M(2, 'Giá trị lượng giác của một góc', [
    Q('sin(π/2) = ?', ['0','1','−1','1/2'], 1, 'Cơ bản.'),
    Q('cos(π) = ?', ['1','0','−1','1/2'], 2, 'Cơ bản.'),
    Q('tan(π/4) = ?', ['0','1','√3','1/√3'], 1, 'Cơ bản.'),
    Q('sin²α + cos²α = ?', ['0','1','2','sin 2α'], 1, 'Hệ thức cơ bản.'),
    Q('Nếu sinα = 3/5 và α ∈ (0;π/2) thì cosα = ?', ['4/5','−4/5','3/4','5/3'], 0, 'cosα = √(1−9/25) = 4/5, dương.'),
    Q('Dấu của tan α khi α ∈ (π/2; π)?', ['Dương','Âm','Bằng 0','Không xác định'], 1, 'Cung II: sin+, cos−, tan−.'),
  ]),

  M(3, 'Công thức lượng giác', [
    Q('sin(a+b) = ?', ['sina·cosb + cosa·sinb','sina·cosb − cosa·sinb','cosa·cosb − sina·sinb','cosa·cosb + sina·sinb'], 0, 'Công thức cộng.'),
    Q('cos 2α = ?', ['2sin²α − 1','2cos²α − 1','1 − 2cos²α','sin²α − cos²α'], 1, 'Công thức nhân đôi.'),
    Q('sin 2α = ?', ['2sinα·cosα','sin²α + cos²α','2sinα − cosα','cos²α − sin²α'], 0, 'Công thức nhân đôi.'),
    Q('cos a + cos b = ?', ['2cos((a+b)/2)·cos((a−b)/2)','2sin((a+b)/2)·sin((a−b)/2)','2sin((a+b)/2)·cos((a−b)/2)','2cos a·cos b'], 0, 'Tổng thành tích.'),
    Q('Tính sin 75° (dùng 75° = 45°+30°)?', ['(√6+√2)/4','(√6−√2)/4','√2/2','√3/2'], 0, 'sin(45+30) = sin45cos30+cos45sin30 = (√6+√2)/4.'),
    Q('Rút gọn: 1 − 2sin²α', ['cos 2α','sin 2α','tan 2α','1 + cos 2α'], 0, '1 − 2sin²α = cos 2α.'),
  ]),

  M(4, 'Hàm số lượng giác và đồ thị', [
    Q('Tập xác định của hàm số y = sin x là?', ['ℝ','[−1;1]','(−∞;0)','ℝ \\ {kπ}'], 0, 'sin xác định với mọi x ∈ ℝ.'),
    Q('Tập giá trị của y = cos x là?', ['[−1;1]','(0;1)','ℝ','[0;1]'], 0, '−1 ≤ cos x ≤ 1.'),
    Q('Chu kỳ của y = tan x là?', ['π','2π','π/2','4π'], 0, 'tan có chu kỳ π.'),
    Q('Hàm số y = sin x là hàm?', ['Chẵn','Lẻ','Vừa chẵn vừa lẻ','Không chẵn không lẻ'], 1, 'sin(−x) = −sin x.'),
    Q('Đồ thị y = cos x đối xứng qua?', ['Trục Oy','Trục Ox','Gốc O','Đường y = x'], 0, 'cos là hàm chẵn.'),
    Q('Hàm y = tan x không xác định tại?', ['x = kπ','x = π/2 + kπ','x = 2kπ','Mọi x'], 1, 'cos x = 0 tại π/2 + kπ.'),
  ]),

  M(5, 'Phương trình lượng giác cơ bản', [
    Q('Phương trình sin x = 0 có nghiệm?', ['x = kπ','x = π/2 + kπ','x = 2kπ','x = π + 2kπ'], 0, 'sin x = 0 ⇔ x = kπ.'),
    Q('cos x = 1 có nghiệm?', ['x = 2kπ','x = kπ','x = π/2 + kπ','x = π + kπ'], 0, 'Cosin bằng 1 tại 2kπ.'),
    Q('sin x = 1/2 có nghiệm tổng quát?', ['x = π/6 + k2π hoặc x = 5π/6 + k2π','x = π/6 + kπ','x = π/3 + k2π','x = π/4 + k2π'], 0, 'sin x = sin(π/6).'),
    Q('cos x = 0 có nghiệm?', ['x = kπ','x = π/2 + kπ','x = 2kπ','x = π/4 + kπ'], 1, 'cos = 0 tại π/2 + kπ.'),
    Q('tan x = 1 có nghiệm?', ['x = π/4 + kπ','x = π/4 + 2kπ','x = π/2 + kπ','x = kπ'], 0, 'tan có chu kỳ π.'),
    Q('Số nghiệm của sin x = 1/2 trên [0; 2π) là?', ['1','2','3','4'], 1, 'x = π/6 và x = 5π/6.'),
  ]),

  M(6, 'Phương trình lượng giác nâng cao', [
    Q('Phương trình a sin x + b cos x = c có nghiệm khi?', ['a² + b² ≥ c²','a² + b² ≤ c²','c = 0','a = b'], 0, 'Điều kiện có nghiệm là a² + b² ≥ c².'),
    Q('Biến đổi sin x + cos x thành dạng?', ['√2 sin(x + π/4)','√2 cos(x + π/4)','2 sin(x + π/4)','sin(2x)'], 0, 'sin x + cos x = √2 sin(x + π/4).'),
    Q('Giải sin²x = 1/4', ['x = ±π/6 + kπ','x = ±π/3 + kπ','x = π/4 + kπ','x = π/2 + kπ'], 0, 'sin x = ±1/2 ⇒ x = ±π/6 + kπ.'),
    Q('Phương trình 2cos²x − 1 = 0 tương đương?', ['cos 2x = 0','sin 2x = 0','cos x = 1','sin x = 1'], 0, '2cos²x − 1 = cos 2x.'),
    Q('Phương trình bậc hai theo sin x: 2sin²x − 3sin x + 1 = 0 có nghiệm sin x = ?', ['1 hoặc 1/2','1 hoặc −1/2','−1 hoặc 1/2','−1 hoặc −1/2'], 0, 'Giải bậc 2: t = 1 hoặc t = 1/2.'),
    Q('Phương trình tan x = tan α có nghiệm?', ['x = α + kπ','x = α + 2kπ','x = α + k·π/2','x = −α + kπ'], 0, 'tan tuần hoàn chu kỳ π.'),
  ]),

  M(7, 'Dãy số — khái niệm và biểu diễn', [
    Q('Dãy số (uₙ) được hiểu là hàm số từ?', ['ℕ* vào ℝ','ℝ vào ℕ','ℕ vào ℕ','ℝ vào ℝ'], 0, 'Dãy số là hàm trên ℕ*.'),
    Q('Cho uₙ = 2n + 1, u₅ = ?', ['10','11','12','9'], 1, '2·5 + 1 = 11.'),
    Q('Dãy uₙ = (−1)ⁿ là dãy?', ['Tăng','Giảm','Không tăng không giảm','Hằng'], 2, 'Dao động ±1.'),
    Q('Dãy uₙ = n² là dãy?', ['Tăng','Giảm','Bị chặn','Hằng'], 0, '(n+1)² > n² với mọi n ∈ ℕ*.'),
    Q('Dãy uₙ = 1/n là dãy?', ['Tăng','Giảm','Hằng','Không xác định'], 1, '1/(n+1) < 1/n.'),
    Q('Dãy uₙ = sin n bị chặn trong khoảng?', ['[−1;1]','[0;1]','[−π;π]','ℝ'], 0, 'sin có giá trị trong [−1;1].'),
  ]),

  M(8, 'Cấp số cộng', [
    Q('Cấp số cộng có công sai d, công thức số hạng tổng quát?', ['uₙ = u₁ + (n−1)d','uₙ = u₁·dⁿ⁻¹','uₙ = u₁ + nd','uₙ = u₁ − (n−1)d'], 0, 'CSC: uₙ = u₁ + (n−1)d.'),
    Q('CSC có u₁ = 2, d = 3. Tìm u₅.', ['12','14','15','17'], 1, 'u₅ = 2 + 4·3 = 14.'),
    Q('Tổng n số hạng đầu của CSC?', ['Sₙ = n(u₁+uₙ)/2','Sₙ = n·u₁','Sₙ = n·uₙ','Sₙ = n²·d'], 0, 'Công thức tổng.'),
    Q('Tính 1 + 2 + 3 + ... + 100.', ['5000','5050','5100','10000'], 1, 'S = 100·101/2 = 5050.'),
    Q('CSC: 3, 7, 11, ... Công sai d = ?', ['3','4','5','7'], 1, 'd = 7 − 3 = 4.'),
    Q('Ba số a, b, c lập thành CSC khi?', ['2b = a + c','b² = ac','b = a − c','a + b + c = 0'], 0, 'Số hạng giữa bằng trung bình cộng.'),
  ]),

  M(9, 'Cấp số nhân', [
    Q('CSN có công bội q, số hạng tổng quát?', ['uₙ = u₁·qⁿ⁻¹','uₙ = u₁ + (n−1)q','uₙ = u₁·q','uₙ = u₁/qⁿ'], 0, 'CSN: uₙ = u₁·qⁿ⁻¹.'),
    Q('CSN có u₁ = 2, q = 3. Tìm u₄.', ['54','27','24','81'], 0, 'u₄ = 2·3³ = 54.'),
    Q('Tổng n số hạng đầu của CSN (q ≠ 1)?', ['Sₙ = u₁(1−qⁿ)/(1−q)','Sₙ = n·u₁','Sₙ = u₁·qⁿ','Sₙ = u₁·q'], 0, 'Công thức tổng CSN.'),
    Q('Ba số a, b, c lập CSN khi?', ['b² = ac','2b = a+c','b = a+c','abc = 1'], 0, 'Số hạng giữa là TBNH.'),
    Q('Tính 1 + 2 + 4 + 8 + 16.', ['30','31','32','15'], 1, 'CSN q = 2: (2⁵−1)/(2−1) = 31.'),
    Q('CSN có u₁ = 4, u₃ = 16. Công bội q dương = ?', ['2','3','4','−2'], 0, 'q² = 16/4 = 4 ⇒ q = 2.'),
  ]),

  M(10, 'Giới hạn dãy số', [
    Q('lim 1/n khi n → ∞ = ?', ['0','1','∞','Không tồn tại'], 0, 'Cơ bản.'),
    Q('lim (2n+1)/(n+3) = ?', ['1','2','3','∞'], 1, 'Chia tử mẫu cho n: → 2.'),
    Q('lim n² khi n → ∞ = ?', ['0','1','∞','−∞'], 2, 'Tăng vô hạn.'),
    Q('lim (1 + 1/n)ⁿ = ?', ['1','e','π','∞'], 1, 'Số e ≈ 2.718.'),
    Q('lim qⁿ với |q| < 1 = ?', ['0','1','q','∞'], 0, 'Khi q ∈ (−1;1) thì qⁿ → 0.'),
    Q('Tổng của CSN lùi vô hạn 1 + 1/2 + 1/4 + ... = ?', ['1','2','3','∞'], 1, 'S = 1/(1−1/2) = 2.'),
  ]),

  M(11, 'Giới hạn hàm số', [
    Q('lim(x→2) (x² − 4)/(x − 2) = ?', ['0','2','4','∞'], 2, 'Rút gọn: x + 2 → 4.'),
    Q('lim(x→0) sin x / x = ?', ['0','1','∞','Không tồn tại'], 1, 'Giới hạn cơ bản.'),
    Q('lim(x→+∞) 1/x = ?', ['0','1','∞','−∞'], 0, 'Cơ bản.'),
    Q('lim(x→0⁺) 1/x = ?', ['0','+∞','−∞','1'], 1, 'Tiệm cận dương.'),
    Q('lim(x→3) (x² − 9)/(x − 3) = ?', ['3','6','9','0'], 1, 'Rút gọn: x + 3 → 6.'),
    Q('lim(x→1) (x − 1)/(x² − 1) = ?', ['1','1/2','0','∞'], 1, '1/(x+1) → 1/2.'),
  ]),

  M(12, 'Hàm số liên tục', [
    Q('Hàm f liên tục tại x₀ khi?', ['lim(x→x₀) f(x) = f(x₀)','f(x₀) = 0','f(x₀) tồn tại','f đơn điệu'], 0, 'Định nghĩa liên tục.'),
    Q('Hàm đa thức liên tục trên?', ['ℝ','(0;∞)','[0;1]','Một khoảng nhất định'], 0, 'Đa thức liên tục trên ℝ.'),
    Q('Hàm f(x) = 1/x không liên tục tại?', ['x = 0','x = 1','x = −1','Mọi x'], 0, 'Không xác định tại 0.'),
    Q('Định lý giá trị trung gian áp dụng cho hàm?', ['Liên tục trên đoạn','Khả vi','Đơn điệu','Tuần hoàn'], 0, 'Bolzano - giá trị trung gian.'),
    Q('Nếu f liên tục trên [a;b] và f(a)·f(b) < 0 thì?', ['Có ít nhất 1 nghiệm trong (a;b)','Vô nghiệm','Duy nhất nghiệm','f đơn điệu'], 0, 'Hệ quả định lý Bolzano.'),
    Q('Hàm f(x) = |x| liên tục tại x = 0?', ['Có','Không','Không xác định','Tuỳ phía'], 0, 'lim trái = lim phải = f(0) = 0.'),
  ]),

  M(13, 'Định nghĩa và ý nghĩa đạo hàm', [
    Q('Đạo hàm của f tại x₀ là?', ['lim(Δx→0) [f(x₀+Δx)−f(x₀)]/Δx','f(x₀)/x₀','f(x₀)·x₀','f(x₀+Δx)−f(x₀)'], 0, 'Định nghĩa.'),
    Q('Ý nghĩa hình học đạo hàm f′(x₀)?', ['Hệ số góc tiếp tuyến tại x₀','Diện tích dưới đồ thị','Giá trị hàm tại x₀','Khoảng cách tới Ox'], 0, 'f′(x₀) là hệ số góc tiếp tuyến.'),
    Q('Đạo hàm của hằng số C bằng?', ['0','C','1','x'], 0, '(C)′ = 0.'),
    Q('(xⁿ)′ = ?', ['nxⁿ⁻¹','xⁿ⁺¹/(n+1)','n·xⁿ','xⁿ'], 0, 'Quy tắc luỹ thừa.'),
    Q('(sin x)′ = ?', ['cos x','−cos x','sin x','−sin x'], 0, 'Đạo hàm cơ bản.'),
    Q('(cos x)′ = ?', ['sin x','−sin x','cos x','−cos x'], 1, 'Đạo hàm cơ bản.'),
  ]),

  M(14, 'Quy tắc tính đạo hàm', [
    Q('(u + v)′ = ?', ['u′ + v′','u′·v′','u′ − v′','u·v′'], 0, 'Tuyến tính.'),
    Q('(u·v)′ = ?', ['u′v + uv′','u′v − uv′','u′·v′','u + v'], 0, 'Quy tắc tích.'),
    Q('(u/v)′ = ?', ['(u′v − uv′)/v²','(u′v + uv′)/v','u′/v′','u/v²'], 0, 'Quy tắc thương.'),
    Q('Đạo hàm của f(x) = x³ + 2x + 1 là?', ['3x² + 2','x² + 2','3x²','3x³ + 2'], 0, 'Áp dụng quy tắc luỹ thừa.'),
    Q('Đạo hàm của f(x) = sin(2x)?', ['2cos(2x)','cos(2x)','−2cos(2x)','sin(2x)'], 0, 'Hàm hợp: (sin u)′ = u′cos u.'),
    Q('(tan x)′ = ?', ['1/cos²x','−1/cos²x','1/sin²x','sec x'], 0, '(tan x)′ = 1 + tan²x = 1/cos²x.'),
  ]),

  M(15, 'Đạo hàm cấp cao và ứng dụng', [
    Q('Đạo hàm cấp 2 ký hiệu?', ['f″(x)','f′(x)²','f(x)²','f(2x)'], 0, 'f″ là đạo hàm của f′.'),
    Q('Nếu f′(x₀) = 0 và f″(x₀) > 0 thì x₀ là?', ['Cực tiểu','Cực đại','Điểm uốn','Tiệm cận'], 0, 'Điều kiện đủ cực tiểu.'),
    Q('f″(x) > 0 trên khoảng I thì đồ thị?', ['Lõm lên','Lõm xuống','Thẳng','Có cực trị'], 0, 'Lồi dưới ⇔ lõm lên.'),
    Q('Phương trình tiếp tuyến của y = f(x) tại x₀?', ['y = f′(x₀)(x − x₀) + f(x₀)','y = f(x₀)·x','y = x − x₀','y = f′(x)'], 0, 'PT tiếp tuyến chuẩn.'),
    Q('f(x) = x², f″(x) = ?', ['0','1','2','2x'], 2, 'f′ = 2x, f″ = 2.'),
    Q('Vận tốc tức thời tại t₀ bằng?', ['s′(t₀)','s(t₀)','s″(t₀)','s(t₀)/t₀'], 0, 'Vận tốc = đạo hàm quãng đường.'),
  ]),

  M(16, 'Ôn tập đạo hàm và lượng giác', [
    Q('Đạo hàm của y = x² + sin x?', ['2x + cos x','2x − cos x','x + cos x','2x · sin x'], 0, 'Tuyến tính.'),
    Q('PT tiếp tuyến của y = x² tại x = 1?', ['y = 2x − 1','y = 2x + 1','y = x − 1','y = 2x'], 0, 'f′(1) = 2, f(1) = 1; y = 2(x−1)+1 = 2x−1.'),
    Q('Đạo hàm của y = cos(3x)?', ['−3sin(3x)','3sin(3x)','−sin(3x)','3cos(3x)'], 0, 'Hàm hợp.'),
    Q('Phương trình sin x = √2/2 trên [0;π]?', ['x = π/4 hoặc 3π/4','x = π/6','x = π/3','x = π/2'], 0, 'sin = √2/2 ⇒ π/4, 3π/4.'),
    Q('Tính cos 75°·cos 15° − sin 75°·sin 15° = ?', ['cos 90° = 0','sin 60°','1/2','1'], 0, 'cos(75+15) = cos 90° = 0.'),
    Q('Cực trị hàm số y = x³ − 3x?', ['x = ±1','x = 0','x = ±2','Không có'], 0, 'y′ = 3x² − 3 = 0 ⇒ x = ±1.'),
  ]),

  M(17, 'Ôn tập giữa kỳ I', [
    Q('Đổi 135° sang radian.', ['3π/4','π/4','π/3','5π/6'], 0, '135·π/180 = 3π/4.'),
    Q('CSC 5, 8, 11, ... Tìm số hạng thứ 10.', ['32','30','35','29'], 0, 'u₁₀ = 5 + 9·3 = 32.'),
    Q('Tính lim(x→∞) (3x² + x)/(x² + 5)?', ['3','1','5','∞'], 0, 'Chia tử mẫu cho x²: → 3.'),
    Q('CSN u₁ = 1, q = 1/2. Tổng vô hạn?', ['1','2','4','∞'], 1, '1/(1−1/2) = 2.'),
    Q('Tính sin(π/3) + cos(π/3)?', ['(√3+1)/2','√3 − 1','1','0'], 0, '√3/2 + 1/2 = (√3+1)/2.'),
    Q('Đạo hàm của f(x) = 3x² − 5x + 2?', ['6x − 5','6x + 5','3x − 5','5 − 6x'], 0, 'Đạo hàm đa thức.'),
  ]),

  M(18, 'Kiểm tra học kỳ I', [
    Q('Phương trình cos 2x = 1/2 có nghiệm?', ['x = ±π/6 + kπ','x = ±π/3 + kπ','x = π/4 + kπ','x = π/2 + kπ'], 0, '2x = ±π/3 + k2π ⇒ x = ±π/6 + kπ.'),
    Q('Tổng 1 + 3 + 5 + ... + (2n−1) = ?', ['n²','n(n+1)/2','2n−1','n³'], 0, 'CSC tổng các số lẻ.'),
    Q('lim(n→∞) (n+1)/n = ?', ['0','1','∞','−1'], 1, 'Chia: 1 + 1/n → 1.'),
    Q('Đạo hàm của y = (x+1)³?', ['3(x+1)²','(x+1)²','3(x+1)','3x²'], 0, 'Hàm hợp.'),
    Q('Cho f(x) = x² + 1, f′(2) = ?', ['4','2','5','1'], 0, 'f′(x) = 2x, f′(2) = 4.'),
    Q('Phương trình tan x = √3 có nghiệm?', ['x = π/3 + kπ','x = π/6 + kπ','x = π/4 + kπ','x = π/3 + 2kπ'], 0, 'tan = √3 ⇒ x = π/3 + kπ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Đường thẳng và mặt phẳng trong không gian', [
    Q('Qua 3 điểm không thẳng hàng có bao nhiêu mặt phẳng?', ['1','2','Vô số','0'], 0, 'Tiên đề: duy nhất 1 mặt phẳng.'),
    Q('Hai đường thẳng phân biệt không cùng nằm trên 1 mặt phẳng gọi là?', ['Song song','Cắt nhau','Chéo nhau','Trùng nhau'], 2, 'Chéo nhau = không đồng phẳng.'),
    Q('Vị trí tương đối của 2 mặt phẳng phân biệt?', ['Song song hoặc cắt theo 1 đường','Trùng nhau','Cắt nhau tại 1 điểm','Vuông góc'], 0, 'Hai mp hoặc song song hoặc cắt nhau theo đường thẳng.'),
    Q('Hình chóp tứ giác có bao nhiêu mặt?', ['4','5','6','8'], 1, '1 đáy + 4 mặt bên.'),
    Q('Đường thẳng nằm trong mặt phẳng khi?', ['Có 2 điểm thuộc mặt phẳng','Có 1 điểm thuộc','Vuông góc','Song song'], 0, 'Tiên đề.'),
    Q('Giao tuyến của 2 mặt phẳng (nếu có) là?', ['Một đường thẳng','Một điểm','Một mặt phẳng','Tập rỗng luôn'], 0, 'Nếu cắt thì giao là đường thẳng.'),
  ]),

  M(20, 'Hai đường thẳng song song', [
    Q('Hai đường thẳng song song trong không gian là 2 đường?', ['Đồng phẳng và không có điểm chung','Có 1 điểm chung','Trùng nhau','Vuông góc'], 0, 'Định nghĩa.'),
    Q('Định lý: a // b và b // c thì?', ['a // c','a ⊥ c','a cắt c','a chéo c'], 0, 'Tính bắc cầu song song.'),
    Q('Hai đường thẳng cùng song song với một mặt phẳng thì?', ['Có thể song song, cắt, chéo','Luôn song song','Luôn cắt','Luôn chéo'], 0, 'Không kết luận được vị trí tương đối.'),
    Q('Trong hình lập phương ABCD.A′B′C′D′, AB và CD?', ['Song song','Cắt','Chéo','Trùng'], 0, 'Cùng nằm trong (ABCD) và không cắt.'),
    Q('AB và A′D′ trong hình lập phương?', ['Song song','Cắt','Chéo','Trùng'], 2, 'Không cùng mặt phẳng.'),
    Q('Hai đường thẳng chéo nhau có thể đồng phẳng?', ['Không','Có','Tuỳ vị trí','Luôn'], 0, 'Chéo = không đồng phẳng theo định nghĩa.'),
  ]),

  M(21, 'Đường thẳng song song với mặt phẳng', [
    Q('Đường thẳng d // (P) khi?', ['d không có điểm chung với (P)','d nằm trong (P)','d cắt (P)','d ⊥ (P)'], 0, 'Định nghĩa.'),
    Q('Nếu d // a và a ⊂ (P) thì d // (P) khi?', ['d không thuộc (P)','d ⊂ (P)','d cắt (P)','d trùng a'], 0, 'Định lý song song với mặt phẳng.'),
    Q('Trong hình chóp S.ABCD đáy hình bình hành, SA và (BCD)?', ['Có thể song song hoặc cắt','Luôn song song','Luôn vuông','Trùng'], 0, 'Phụ thuộc vị trí S.'),
    Q('Đường thẳng song song với mp có vô số đường thẳng trong mp?', ['Song song với nó','Vuông góc','Cắt','Chéo'], 0, 'Mọi đường thẳng trong mp song song d đều // d.'),
    Q('Nếu (P) chứa d và (P) cắt (Q) theo a, d // (Q) thì?', ['d // a','d ⊥ a','d ≡ a','d cắt a'], 0, 'Định lý giao tuyến.'),
    Q('Trong hình hộp, các đường chéo mặt bên thường?', ['Chéo nhau hoặc song song','Cắt nhau','Trùng nhau','Vuông góc'], 0, 'Tuỳ vị trí trong hình hộp.'),
  ]),

  M(22, 'Hai mặt phẳng song song', [
    Q('Hai mặt phẳng song song khi?', ['Không có điểm chung','Có 1 đường thẳng chung','Trùng nhau','Vuông góc'], 0, 'Định nghĩa.'),
    Q('Nếu (P) chứa 2 đường thẳng cắt nhau cùng // (Q) thì?', ['(P) // (Q)','(P) ⊥ (Q)','(P) cắt (Q)','(P) ≡ (Q)'], 0, 'Tiêu chuẩn song song mp.'),
    Q('Hai mặt phẳng song song bị cắt bởi mp thứ 3 thì hai giao tuyến?', ['Song song','Trùng nhau','Vuông góc','Chéo nhau'], 0, 'Định lý giao tuyến.'),
    Q('Hai mp song song có khoảng cách?', ['Không đổi','Bằng 0','Bằng vô cùng','Tuỳ điểm'], 0, 'Khoảng cách giữa 2 mp song song không đổi.'),
    Q('Trong lăng trụ, hai đáy có vị trí?', ['Song song','Cắt nhau','Vuông góc','Trùng'], 0, 'Định nghĩa lăng trụ.'),
    Q('Mặt phẳng cắt lăng trụ song song với đáy cho thiết diện?', ['Bằng đáy','Khác đáy','Là đường thẳng','Rỗng'], 0, 'Thiết diện ≅ đáy.'),
  ]),

  M(23, 'Vectơ trong không gian', [
    Q('Quy tắc 3 điểm: AB + BC = ?', ['AC','BA + CB','AC + 2','0'], 0, 'Quy tắc tam giác cho vectơ.'),
    Q('Trong hình hộp ABCD.A′B′C′D′: AB + AD + AA′ = ?', ['AC′','A′C','BD′','BC'], 0, 'Đường chéo hình hộp = tổng 3 cạnh bên.'),
    Q('Hai vectơ cùng phương khi?', ['Giá song song hoặc trùng nhau','Cùng độ dài','Cùng hướng','Vuông góc'], 0, 'Định nghĩa.'),
    Q('Tích vô hướng a·b = ?', ['|a|·|b|·cos(a,b)','|a|·|b|·sin(a,b)','|a| + |b|','|a − b|'], 0, 'Định nghĩa tích vô hướng.'),
    Q('a ⊥ b ⇔ ?', ['a·b = 0','|a| = |b|','a + b = 0','a × b = 0'], 0, 'Vuông góc ⇔ tích vô hướng = 0.'),
    Q('Ba vectơ đồng phẳng khi?', ['Có 3 vec tơ cùng giá nằm trên 1 mp song song','Vuông góc nhau','Cùng hướng','Bằng nhau'], 0, '3 vectơ đồng phẳng = có thể đặt cùng 1 mp.'),
  ]),

  M(24, 'Hai đường thẳng vuông góc', [
    Q('Góc giữa hai đường thẳng trong không gian thuộc khoảng?', ['[0°; 90°]','[0°; 180°]','[−90°; 90°]','[0°; 360°]'], 0, 'Góc giữa 2 đường thẳng ∈ [0°;90°].'),
    Q('a ⊥ b khi góc giữa chúng?', ['90°','0°','45°','180°'], 0, 'Vuông góc = 90°.'),
    Q('Nếu a // b và b ⊥ c thì?', ['a ⊥ c','a // c','a ≡ c','Không kết luận'], 0, 'Tính chất vuông góc + song song.'),
    Q('Trong hình lập phương ABCD.A′B′C′D′, AB và A′D′?', ['Vuông góc','Song song','Trùng','45°'], 0, 'A′D′ // AD; AB ⊥ AD trong đáy.'),
    Q('Tính chất góc giữa 2 đường thẳng?', ['Không phụ thuộc hướng vectơ chỉ phương','Phụ thuộc hướng','Luôn 90°','Luôn 0°'], 0, 'Chọn vectơ chỉ phương bất kỳ.'),
    Q('Trong hình lập phương, AB và CC′?', ['Vuông góc','Song song','Chéo và vuông','Trùng'], 2, 'Chéo nhau và góc 90°.'),
  ]),

  M(25, 'Đường thẳng vuông góc mặt phẳng', [
    Q('d ⊥ (P) khi d vuông góc với?', ['Mọi đường thẳng trong (P)','Một đường thẳng trong (P)','Hai đường thẳng cắt nhau trong (P)','(P) thôi'], 2, 'Tiêu chuẩn: ⊥ với 2 đường cắt nhau trong (P).'),
    Q('Định lý 3 đường vuông góc liên quan?', ['Hình chiếu vuông góc','Song song','Phép quay','Tịnh tiến'], 0, 'Định lý 3 đường vuông góc qua hình chiếu.'),
    Q('Trong hình chóp S.ABC, SA ⊥ (ABC) thì SA ⊥ ?', ['BC','SB','SC','Mọi đường trong (SAB)'], 0, 'SA vuông mọi đường thuộc (ABC).'),
    Q('Hai đường thẳng cùng vuông góc với 1 mặt phẳng thì?', ['Song song với nhau','Vuông góc','Trùng nhau','Chéo nhau'], 0, 'Tính chất.'),
    Q('Mặt phẳng vuông góc với đường thẳng tại 1 điểm là?', ['Duy nhất','Vô số','Không tồn tại','Hai'], 0, 'Duy nhất 1 mp.'),
    Q('Khoảng cách từ điểm đến mặt phẳng đo bằng?', ['Đoạn vuông góc hạ xuống mp','Đoạn xiên','Đoạn nối hai điểm','Đoạn cong'], 0, 'Định nghĩa khoảng cách.'),
  ]),

  M(26, 'Hai mặt phẳng vuông góc', [
    Q('(P) ⊥ (Q) khi góc giữa chúng?', ['90°','0°','45°','60°'], 0, 'Vuông góc = 90°.'),
    Q('Nếu (P) chứa 1 đường thẳng ⊥ (Q) thì?', ['(P) ⊥ (Q)','(P) // (Q)','(P) ≡ (Q)','(P) cắt (Q)'], 0, 'Tiêu chuẩn.'),
    Q('Góc nhị diện đo bằng?', ['Góc phẳng tương ứng','Khoảng cách giữa 2 cạnh','Diện tích','Thể tích'], 0, 'Góc nhị diện = góc phẳng.'),
    Q('Hình lập phương có bao nhiêu cặp mặt vuông góc?', ['12','6','3','24'], 0, 'Mỗi mặt vuông với 4 mặt kế ⇒ 12 cặp.'),
    Q('Đường thẳng nằm trong mp này, vuông góc với giao tuyến thì ⊥ mp kia khi?', ['Hai mp vuông góc','Hai mp song song','Hai mp trùng','Luôn đúng'], 0, 'Hệ quả của 2 mp ⊥.'),
    Q('Trong hình chóp đều, mặt bên và đáy?', ['Vuông góc hay không tuỳ chóp','Luôn vuông','Luôn song song','Luôn 60°'], 0, 'Phụ thuộc hình chóp; nhưng đường cao SO ⊥ đáy.'),
  ]),

  M(27, 'Khoảng cách trong không gian', [
    Q('Khoảng cách từ điểm M đến đường thẳng d?', ['Độ dài đoạn vuông góc hạ từ M xuống d','Đoạn nối M với 1 điểm bất kỳ','Khoảng cách 0','Không xác định'], 0, 'Định nghĩa.'),
    Q('Khoảng cách giữa 2 mặt phẳng song song?', ['Đoạn vuông góc','Đoạn xiên','Đoạn nối tâm','Đoạn cong'], 0, 'Đoạn vuông góc chung.'),
    Q('Khoảng cách 2 đường thẳng chéo nhau bằng?', ['Đoạn vuông góc chung','Đoạn nối 2 điểm tuỳ ý','Khoảng cách từ 1 điểm trên d₁ đến d₂','Tổng độ dài'], 0, 'Định nghĩa.'),
    Q('Hình chóp S.ABCD đáy vuông cạnh a, SA ⊥ đáy, SA = a. Khoảng cách SA đến BC?', ['a','a/2','a√2','0'], 0, 'BC ⊥ (SAB) ⇒ d(SA;BC) = AB = a.'),
    Q('Hình lập phương cạnh a. Khoảng cách 2 đỉnh đối diện?', ['a√3','a√2','a','2a'], 0, 'Đường chéo hình hộp lập phương = a√3.'),
    Q('Khoảng cách từ A đến mp (BCC′B′) trong lập phương cạnh a?', ['a','a√2','a/2','a√3'], 0, 'Khoảng cách = cạnh AB = a.'),
  ]),

  M(28, 'Góc trong không gian', [
    Q('Góc giữa đường thẳng d và mặt phẳng (P) là?', ['Góc giữa d và hình chiếu của d trên (P)','Góc giữa d và 1 đường thẳng trong (P)','Góc nhị diện','Góc vuông'], 0, 'Định nghĩa.'),
    Q('Nếu d ⊂ (P) thì góc giữa d và (P) bằng?', ['0°','90°','45°','Không xác định'], 0, 'd ⊂ (P) ⇒ trùng hình chiếu.'),
    Q('Nếu d ⊥ (P) thì góc bằng?', ['90°','0°','45°','60°'], 0, 'Vuông góc.'),
    Q('Trong hình chóp đều S.ABCD, góc giữa SA và đáy?', ['Góc SAO với O là tâm đáy','90°','45°','0°'], 0, 'O là chân hình chiếu vuông góc của S.'),
    Q('Góc nhị diện được tạo bởi?', ['Hai nửa mặt phẳng chung cạnh','Hai mặt phẳng cắt nhau bất kỳ','Hai đường thẳng','Hai vectơ'], 0, 'Định nghĩa.'),
    Q('Góc giữa 2 mặt phẳng (P), (Q) cắt nhau theo a, lấy m ⊂ (P), m ⊥ a và n ⊂ (Q), n ⊥ a thì góc?', ['(m;n)','(P;Q) = 90°','0°','Không xác định'], 0, 'Tìm góc giữa 2 mp bằng cặp đường thẳng vuông góc giao tuyến.'),
  ]),

  M(29, 'Biến cố ngẫu nhiên — Xác suất cổ điển', [
    Q('Xác suất biến cố A trong không gian mẫu hữu hạn?', ['P(A) = n(A)/n(Ω)','P(A) = n(Ω)/n(A)','P(A) = n(A)·n(Ω)','P(A) = 1'], 0, 'Định nghĩa cổ điển.'),
    Q('P(A) thuộc đoạn nào?', ['[0;1]','[−1;1]','ℝ','(0;1)'], 0, 'Xác suất ∈ [0;1].'),
    Q('P(∅) = ?', ['0','1','0,5','Không xác định'], 0, 'Biến cố không xảy ra.'),
    Q('P(Ω) = ?', ['0','1','0,5','Tuỳ Ω'], 1, 'Biến cố chắc chắn.'),
    Q('Gieo 1 con xúc xắc, P(số chẵn) = ?', ['1/3','1/2','2/3','1/6'], 1, '3/6 = 1/2.'),
    Q('Gieo 2 đồng xu cân đối, P(2 mặt giống nhau)?', ['1/4','1/2','3/4','1'], 1, '{SS, NN} / 4 = 1/2.'),
  ]),

  M(30, 'Biến cố độc lập — Quy tắc nhân', [
    Q('Hai biến cố A, B độc lập khi?', ['P(A ∩ B) = P(A)·P(B)','P(A ∪ B) = P(A) + P(B)','P(A) = P(B)','A ⊂ B'], 0, 'Định nghĩa độc lập.'),
    Q('Gieo 2 đồng xu, P(cả 2 đều ngửa)?', ['1/2','1/4','1/3','1'], 1, '(1/2)·(1/2) = 1/4.'),
    Q('Trong 1 hộp 5 đỏ, 5 xanh. Lấy lần lượt 2 viên có hoàn lại. P(cả 2 đều đỏ)?', ['1/4','1/2','3/4','1/5'], 0, '(5/10)·(5/10) = 1/4.'),
    Q('A và B độc lập thì A′ và B?', ['Cũng độc lập','Không độc lập','Bằng nhau','Xung khắc'], 0, 'Tính chất.'),
    Q('P(A) = 0,3; P(B) = 0,5; A, B độc lập. P(A ∩ B) = ?', ['0,15','0,8','0,2','0,3'], 0, '0,3·0,5 = 0,15.'),
    Q('Hai biến cố xung khắc và độc lập đồng thời khi?', ['P(A) = 0 hoặc P(B) = 0','Luôn được','Không bao giờ','P(A) = 1'], 0, 'Xung khắc ⇒ P(A∩B) = 0 = P(A)·P(B).'),
  ]),

  M(31, 'Xác suất có điều kiện', [
    Q('Xác suất có điều kiện P(A|B) = ?', ['P(A ∩ B)/P(B)','P(A) + P(B)','P(A)·P(B)','P(A)/P(B)'], 0, 'Định nghĩa, với P(B) > 0.'),
    Q('P(A ∩ B) = P(B)·P(A|B). Tên gọi?', ['Công thức nhân','Cộng','Bayes','Toàn phần'], 0, 'Công thức nhân xác suất.'),
    Q('Nếu A, B độc lập thì P(A|B) = ?', ['P(A)','P(B)','0','1'], 0, 'Định nghĩa độc lập.'),
    Q('Hộp 3 đỏ, 2 xanh. Lấy không hoàn lại 2 viên. P(viên 2 đỏ | viên 1 đỏ)?', ['1/2','3/5','2/5','2/4'], 0, 'Còn 2 đỏ/4 viên = 2/4 = 1/2.'),
    Q('P(A) = 0,6; P(B|A) = 0,5. P(A ∩ B) = ?', ['0,3','0,1','1,1','0,6'], 0, '0,6·0,5 = 0,3.'),
    Q('Công thức Bayes: P(A|B) = ?', ['P(B|A)·P(A)/P(B)','P(A)·P(B)/P(A∩B)','P(A∪B)/P(B)','P(A)+P(B)'], 0, 'Bayes.'),
  ]),

  M(32, 'Ôn tập xác suất nâng cao', [
    Q('Quy tắc cộng: A, B xung khắc thì P(A ∪ B) = ?', ['P(A) + P(B)','P(A)·P(B)','P(A) − P(B)','0'], 0, 'Cộng xung khắc.'),
    Q('Quy tắc cộng tổng quát: P(A ∪ B) = ?', ['P(A) + P(B) − P(A ∩ B)','P(A) + P(B)','P(A)·P(B)','P(A ∩ B)'], 0, 'Cộng tổng quát.'),
    Q('Gieo xúc xắc 2 lần, P(tổng = 7)?', ['1/6','1/9','1/12','5/36'], 0, '6/36 = 1/6.'),
    Q('Lấy ngẫu nhiên 2 viên từ hộp 3 đỏ, 4 xanh. P(2 viên cùng màu)?', ['(C(3,2)+C(4,2))/C(7,2)','C(7,2)','1/2','1/7'], 0, 'P = (3+6)/21 = 9/21 = 3/7.'),
    Q('Một xạ thủ bắn 3 lần độc lập, P(trúng mỗi lần) = 0,8. P(cả 3 trúng)?', ['0,512','0,8','0,24','0,2'], 0, '0,8³ = 0,512.'),
    Q('A, B với P(A) = 0,4; P(B) = 0,5; P(A ∩ B) = 0,2. P(A ∪ B)?', ['0,7','0,9','0,2','0,1'], 0, '0,4+0,5−0,2 = 0,7.'),
  ]),

  M(33, 'Ôn tập đạo hàm và ứng dụng', [
    Q('Đạo hàm của y = x⁴ − 2x²?', ['4x³ − 4x','4x³ + 4x','x³ − x','4x − 4'], 0, 'Đạo hàm đa thức.'),
    Q('PT tiếp tuyến của y = x² tại x = 2?', ['y = 4x − 4','y = 4x','y = 4x + 4','y = 2x'], 0, 'f′(2) = 4, f(2) = 4; y = 4(x−2)+4 = 4x−4.'),
    Q('Đạo hàm của y = sin x · cos x?', ['cos 2x','sin 2x','2sin x','−sin x'], 0, '(sin x cos x)′ = cos²x − sin²x = cos 2x.'),
    Q('y = e^x trong chương trình mới có đạo hàm?', ['e^x','x·e^(x−1)','1/x','ln x'], 0, 'Đạo hàm e^x = e^x.'),
    Q('y = ln x (x > 0) có đạo hàm?', ['1/x','ln x','e^x','x·ln x'], 0, '(ln x)′ = 1/x.'),
    Q('Vận tốc tức thời v(t) = ?', ['s′(t)','s(t)/t','s″(t)','s(t)·t'], 0, 'Đạo hàm quãng đường.'),
  ]),

  M(34, 'Ôn tập tổng hợp HK2', [
    Q('Đường thẳng d ⊥ (P) và (P) // (Q) thì d ?', ['⊥ (Q)','// (Q)','⊂ (Q)','Cắt (Q) tại 1 điểm xiên'], 0, 'Hệ quả vuông góc và song song.'),
    Q('Tổng CSC 1 + 4 + 7 + ... có 20 số hạng?', ['590','580','600','610'], 0, 'S = 20·(1+58)/2 = 590.'),
    Q('Phương trình cos x = 1 trên [0;2π]?', ['x = 0 và x = 2π','x = 0','x = π','x = π/2'], 0, 'cos = 1 ⇒ x = 0 và 2π (nếu bao gồm).'),
    Q('Tính lim(x→1) (x³ − 1)/(x − 1).', ['3','1','0','∞'], 0, 'x² + x + 1 → 3.'),
    Q('P(A) = 0,7. P(A′) = ?', ['0,3','0,7','1','0'], 0, 'Bù: 1 − 0,7.'),
    Q('Khoảng cách 2 mp song song trong lập phương cạnh a?', ['a','a√2','a/2','a√3'], 0, 'Khoảng cách 2 đáy = cạnh = a.'),
  ]),

  M(35, 'Kiểm tra học kỳ II', [
    Q('Phương trình sin 2x = sin x có nghiệm trên [0; 2π]?', ['x = 0, π, 2π, π/3, 5π/3','Chỉ x = 0','x = π/2','x = π/4'], 0, 'sin 2x − sin x = sin x(2cos x − 1) = 0.'),
    Q('Tổng vô hạn 1 + 1/3 + 1/9 + ... = ?', ['3/2','2','1','∞'], 0, '1/(1−1/3) = 3/2.'),
    Q('lim(x→∞) (5x³ + 1)/(x³ − x) = ?', ['5','1','0','∞'], 0, 'Bằng tỷ số hệ số dẫn đầu.'),
    Q('Đạo hàm của y = (2x+1)⁵?', ['10(2x+1)⁴','5(2x+1)⁴','(2x+1)⁴','2(2x+1)⁵'], 0, '5·(2x+1)⁴·2.'),
    Q('Hình chóp S.ABC có SA ⊥ (ABC), AB = AC = a, BC = a√2. Tam giác ABC?', ['Vuông tại A','Đều','Cân không vuông','Tù'], 0, 'AB² + AC² = 2a² = BC² ⇒ vuông tại A.'),
    Q('P(A) = 0,4; P(B) = 0,3; A, B độc lập. P(A ∪ B)?', ['0,58','0,7','0,12','0,1'], 0, 'P = 0,4 + 0,3 − 0,12 = 0,58.'),
  ]),
];

export const H11TOAN_SCENARIOS = indexBy(H11TOAN_WEEKS);
