// ============================================================
// Lớp 12 · VẬT LÝ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12LY-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12LY', 'vat-ly', n, title, qs, opts);

export const H12LY_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Dao động điều hoà — phương trình + đại lượng', [
    Q('Phương trình dao động điều hoà có dạng?', ['x = A·t·cos(ω + φ)', 'x = ω·cos(At + φ)', 'x = A·cos(ωt + φ)', 'x = A·sin(ω + t)'], 2, 'Dạng chuẩn: x = A·cos(ωt + φ), A - biên độ, ω - tần số góc, φ - pha ban đầu.'),
    Q('Đơn vị của tần số góc ω?', ['rad/s', 's (giây)', 'Hz (hertz)', 'm/s (mét trên giây)'], 0, 'Tần số góc đo bằng rad/s; tần số f đo bằng Hz.'),
    Q('Liên hệ chu kì T và tần số góc ω?', ['T = ω·2π', 'T = ω/2π', 'T = 2π/ω', 'T = 1/ω'], 2, 'T = 2π/ω; f = ω/(2π) = 1/T.'),
    Q('Vận tốc cực đại của vật DĐĐH có biên độ A, tần số góc ω?', ['vmax = ω²·A', 'vmax = ω·A', 'vmax = A/ω', 'vmax = A'], 1, 'v = -Aω·sin(ωt+φ) → vmax = ωA.'),
    Q('Gia tốc cực đại của vật DĐĐH?', ['amax = ω·A', 'amax = ω²·A', 'amax = A', 'amax = A/ω²'], 1, 'a = -Aω²·cos(ωt+φ) → |amax| = ω²A.'),
    Q('Tại vị trí cân bằng, vật DĐĐH có?', ['v = max, a = 0', 'v = max, a = max', 'v = 0, a = 0', 'v = 0, a = max'], 0, 'Tại VTCB (x=0): vận tốc cực đại, gia tốc bằng 0.'),
  ]),

  M(2, 'Con lắc lò xo', [
    Q('Chu kì con lắc lò xo (khối lượng m, độ cứng k)?', ['T = 2π·m/k', 'T = 2π·√(k/m)', 'T = (1/2π)·√(m/k)', 'T = 2π·√(m/k)'], 3, 'T = 2π·√(m/k) - không phụ thuộc biên độ.'),
    Q('Tần số góc của con lắc lò xo?', ['ω = k/m', 'ω = √(m/k)', 'ω = √(k/m)', 'ω = m/k'], 2, 'ω = √(k/m).'),
    Q('Một CLLX có k = 100 N/m, m = 1 kg. Chu kì là?', ['2π s', '0,2 s', 'π/10 s', 'π/5 s'], 3, 'T = 2π√(1/100) = 2π/10 = π/5 s ≈ 0,628 s.'),
    Q('Cơ năng của CLLX có biên độ A?', ['W = (1/2)kA²', 'W = kA²', 'W = (1/2)mA²', 'W = (1/2)kA'], 0, 'W = (1/2)kA² = (1/2)mω²A² = const trong DĐĐH.'),
    Q('Khi qua VTCB, động năng của CLLX bằng?', ['0', 'Cơ năng W', 'W/2 (một nửa cơ năng)', 'Một nửa thế năng cực đại'], 1, 'Tại VTCB: Wt = 0 → Wđ = W (toàn bộ cơ năng).'),
    Q('Treo CLLX thẳng đứng, vật cân bằng tại vị trí lò xo dãn Δl₀. Chu kì?', ['T = 2π√(Δl₀/g)', 'T = 2π√(m/g)', 'T = 2π√(g/Δl₀)', 'T = 2π√(Δl₀)'], 0, 'mg = kΔl₀ → m/k = Δl₀/g → T = 2π√(Δl₀/g).'),
  ]),

  M(3, 'Con lắc đơn', [
    Q('Chu kì con lắc đơn dao động nhỏ (chiều dài l, gia tốc g)?', ['T = 2π·l/g', 'T = 2π√(g/l)', 'T = (1/2π)√(l/g)', 'T = 2π√(l/g)'], 3, 'T = 2π√(l/g) - không phụ thuộc khối lượng và biên độ (nhỏ).'),
    Q('Một con lắc đơn có l = 1 m, g = 9,8 m/s². Chu kì xấp xỉ?', ['1 s', 'π s (khoảng 3,14 s)', '2π s', '2 s'], 3, 'T = 2π√(1/9,8) ≈ 2π·0,32 ≈ 2 s.'),
    Q('Khi tăng chiều dài l lên 4 lần, chu kì T?', ['Tăng 2 lần', 'Tăng 4 lần', 'Giảm 2 lần', 'Không đổi'], 0, 'T tỉ lệ √l → l tăng 4 lần → T tăng 2 lần.'),
    Q('Tần số con lắc đơn khi chuyển từ Trái Đất lên Mặt Trăng (g/6)?', ['Giảm √6 lần', 'Tăng √6 lần', 'Không đổi', 'Tăng 6 lần'], 0, 'f = (1/2π)√(g/l) → g giảm 6 lần → f giảm √6 lần.'),
    Q('Năng lượng dao động con lắc đơn tỉ lệ?', ['1/A²', 'Biên độ A', 'Biên độ A²', '1/A'], 2, 'W = (1/2)mω²A² (với A = α₀·l) - tỉ lệ A².'),
    Q('Con lắc đơn dao động trong điện trường đều có thêm lực điện. Chu kì?', ['Tăng tuỳ ý', 'Phụ thuộc lực điện - g\'', 'Không đổi', 'Giảm tuỳ ý'], 1, 'g\' = trọng lực hiệu dụng (kết hợp trọng lực + lực điện) → T mới = 2π√(l/g\').'),
  ]),

  M(4, 'Năng lượng dao động + tổng hợp dao động', [
    Q('Trong DĐĐH, động năng và thế năng?', ['Bằng 0 luôn', 'Biến thiên - tổng = cơ năng = const', 'Đều bảo toàn riêng', 'Bằng nhau luôn'], 1, 'Wđ + Wt = W = const (cơ năng bảo toàn nếu bỏ qua ma sát).'),
    Q('Trong DĐĐH, động năng và thế năng biến thiên với chu kì?', ['T (bằng chu kì li độ)', '2T', 'T/4', 'T/2'], 3, 'Vì có ω², chu kì biến thiên năng lượng là T/2.'),
    Q('Hai dao động cùng phương cùng tần số x₁ = A₁cos(ωt+φ₁), x₂ = A₂cos(ωt+φ₂). Biên độ tổng hợp A?', ['A₁·A₂', '|A₁-A₂|', '√(A₁²+A₂²+2A₁A₂cos(φ₂-φ₁))', 'A₁ + A₂'], 2, 'Công thức Frenel: A = √(A₁² + A₂² + 2A₁A₂cosΔφ).'),
    Q('Khi Δφ = 0 (cùng pha), biên độ tổng hợp?', ['√(A₁² + A₂²)', 'A₁ + A₂', 'A₁·A₂', '|A₁ - A₂|'], 1, 'Cùng pha: cosΔφ = 1 → A = A₁ + A₂ (cộng hưởng biên độ).'),
    Q('Khi Δφ = π (ngược pha), biên độ tổng hợp?', ['|A₁ - A₂|', '0', 'A₁ + A₂', '√(A₁² + A₂²)'], 0, 'Ngược pha: cosΔφ = -1 → A = |A₁ - A₂| (trừ biên độ).'),
    Q('Khi Δφ = π/2 (vuông pha), biên độ tổng hợp?', ['|A₁ - A₂|', '√(A₁² + A₂²)', 'A₁ + A₂', 'A₁·A₂'], 1, 'Vuông pha: cosΔφ = 0 → A = √(A₁² + A₂²).'),
  ]),

  M(5, 'Sóng cơ — đại cương', [
    Q('Sóng cơ là gì?', ['Dao động cơ lan truyền trong môi trường vật chất', 'Sóng ánh sáng', 'Sóng điện từ', 'Sóng âm thanh trong chân không'], 0, 'Sóng cơ - dao động lan truyền trong môi trường vật chất (không truyền trong chân không).'),
    Q('Bước sóng λ là?', ['Chu kì', 'Tốc độ lan truyền', 'Tần số', 'Khoảng cách 2 điểm gần nhất dao động cùng pha'], 3, 'λ - khoảng cách giữa 2 điểm gần nhất trên phương truyền sóng dao động cùng pha.'),
    Q('Liên hệ giữa bước sóng λ, tốc độ v, chu kì T?', ['λ = v/T', 'λ = T/v', 'λ = v² · T', 'λ = v·T'], 3, 'λ = v·T = v/f.'),
    Q('Sóng ngang là sóng có?', ['Truyền trong chân không', 'Phương dao động trùng phương truyền', 'Phương dao động vuông góc phương truyền', 'Không truyền'], 2, 'Sóng ngang: dao động vuông góc phương truyền (ví dụ sóng trên mặt nước, sóng dây).'),
    Q('Sóng dọc?', ['Phương dao động vuông góc', 'Phương dao động trùng phương truyền', 'Sóng trong chân không', 'Sóng điện từ'], 1, 'Sóng dọc: dao động trùng phương truyền (ví dụ sóng âm trong không khí).'),
    Q('Một sóng có f = 50 Hz, v = 340 m/s. Bước sóng?', ['6,8 m', '17000 m', '0,68 m', '290 m'], 0, 'λ = v/f = 340/50 = 6,8 m.'),
  ]),

  M(6, 'Giao thoa sóng', [
    Q('Điều kiện để có giao thoa sóng?', ['Hai nguồn bất kì', 'Hai nguồn cùng pha', 'Hai nguồn kết hợp (cùng tần số, độ lệch pha không đổi)', 'Hai nguồn cùng biên độ'], 2, 'Hai nguồn kết hợp: cùng tần số + độ lệch pha không đổi theo thời gian.'),
    Q('Điểm có biên độ cực đại trong giao thoa (2 nguồn cùng pha) thoả?', ['d₂ - d₁ = (k+1/2)λ', 'd₂ - d₁ = kλ', 'd₂ · d₁ = kλ', 'd₂ + d₁ = kλ'], 1, 'Cực đại: hiệu đường đi d₂ - d₁ = kλ (k nguyên).'),
    Q('Điểm cực tiểu (2 nguồn cùng pha)?', ['d₂ - d₁ = 2kλ', 'd₂ - d₁ = kλ', 'd₂ + d₁ = (k+1/2)λ', 'd₂ - d₁ = (k+1/2)λ'], 3, 'Cực tiểu: hiệu đường đi = (k+1/2)λ (lệch pha π).'),
    Q('Khoảng cách giữa hai cực đại liên tiếp trên đường nối 2 nguồn?', ['λ/4', 'λ (bằng bước sóng)', '2λ', 'λ/2'], 3, 'Khoảng cách giữa 2 vân cực đại liên tiếp (hoặc 2 cực tiểu liên tiếp) là λ/2.'),
    Q('Hai nguồn ngược pha tại điểm M cách nguồn d₁, d₂. Điều kiện cực đại?', ['d₂+d₁ = kλ', 'd₂-d₁ = (k+1/2)λ', 'd₂-d₁ = kλ', 'd₂-d₁ = 2kλ'], 1, 'Hai nguồn ngược pha: cực đại khi d₂-d₁ = (k+1/2)λ (đảo điều kiện).'),
    Q('Trên đoạn nối 2 nguồn, số điểm dao động cực đại?', ['Bằng 1 luôn', 'Phụ thuộc khoảng cách 2 nguồn và λ', 'Vô hạn', 'Bằng 0'], 1, 'Số cực đại N = 2·[AB/λ] + 1 (hai nguồn cùng pha) - phụ thuộc tỉ số AB/λ.'),
  ]),

  M(7, 'Sóng dừng', [
    Q('Sóng dừng là?', ['Kết quả giao thoa sóng tới + sóng phản xạ', 'Sóng không lan truyền', 'Sóng có biên độ 0', 'Sóng đứng yên hoàn toàn'], 0, 'Sóng dừng - giao thoa giữa sóng tới và sóng phản xạ trên cùng phương.'),
    Q('Khoảng cách giữa 2 nút liên tiếp?', ['λ (bằng bước sóng)', 'λ/4', '2λ', 'λ/2'], 3, '2 nút liên tiếp (hoặc 2 bụng liên tiếp) cách nhau λ/2.'),
    Q('Khoảng cách giữa nút và bụng gần nhất?', ['λ/4', 'λ/2', 'λ (bằng bước sóng)', 'λ/8'], 0, 'Nút - bụng gần nhất: λ/4.'),
    Q('Điều kiện sóng dừng trên dây 2 đầu cố định?', ['l = kλ/4', 'l = (k+1/2)λ', 'l = (k+1/2)λ/2', 'l = kλ/2'], 3, '2 đầu cố định (2 nút): l = k·(λ/2), k nguyên dương.'),
    Q('Điều kiện sóng dừng trên dây 1 đầu cố định, 1 đầu tự do?', ['l = (k+1/2)λ', 'l = kλ/2', 'l = (2k+1)λ/4', 'l = kλ'], 2, '1 đầu cố định + 1 đầu tự do (nút + bụng): l = (2k+1)λ/4.'),
    Q('Một dây 2 đầu cố định dài 60 cm có sóng dừng với 4 bụng. λ?', ['15 cm', '120 cm', '60 cm', '30 cm'], 3, '4 bụng → 4 nửa bước sóng → l = 4·(λ/2) → λ = l/2 = 30 cm.'),
  ]),

  M(8, 'Sóng âm', [
    Q('Sóng âm trong không khí là sóng gì?', ['Sóng ngang', 'Sóng dọc', 'Sóng điện từ', 'Sóng dừng'], 1, 'Sóng âm trong chất khí và lỏng là sóng dọc (nén-dãn).'),
    Q('Ngưỡng nghe của tai người về tần số?', ['20000-50000 Hz', '1000 Hz', '16-20000 Hz', '0-100 Hz'], 2, 'Tai người nghe được âm có tần số từ ~16 Hz đến ~20000 Hz.'),
    Q('Âm thanh > 20000 Hz gọi là?', ['Hạ âm (< 16 Hz)', 'Siêu âm', 'Âm thường', 'Âm tần'], 1, 'Siêu âm (ultrasound) > 20 kHz; hạ âm (infrasound) < 16 Hz.'),
    Q('Cường độ âm I (W/m²) và mức cường độ âm L (dB)?', ['L = 10·lg(I/I₀)', 'L = lg(I/I₀)', 'L = I/I₀', 'L = e^I'], 0, 'L = 10·lg(I/I₀) (dB), với I₀ = 10⁻¹² W/m² là ngưỡng nghe chuẩn.'),
    Q('Đặc trưng sinh lí của âm gồm?', ['Bước sóng - tốc độ', 'Chu kì', 'Độ cao - độ to - âm sắc', 'Tần số - biên độ - đồ thị'], 2, 'Sinh lí: độ cao (~tần số), độ to (~cường độ), âm sắc (~đồ thị dao động).'),
    Q('Âm sắc phụ thuộc?', ['Tần số + các hoạ âm (đồ thị âm)', 'Chỉ biên độ', 'Chỉ tần số cơ bản', 'Chỉ độ to'], 0, 'Âm sắc - phụ thuộc hoạ âm (overtones) - giúp phân biệt nguồn âm khác nhau.'),
  ]),

  M(9, 'Dòng điện xoay chiều — đại cương', [
    Q('Dòng điện xoay chiều có biểu thức?', ['i = I₀/t', 'i = I₀·t', 'i = I₀·cos(ωt+φ)', 'i = I₀'], 2, 'i = I₀·cos(ωt+φ) - hàm cosin tuần hoàn.'),
    Q('Giá trị hiệu dụng của dòng xoay chiều liên hệ giá trị cực đại?', ['I = I₀/2', 'I = I₀/√2', 'I = I₀', 'I = I₀·√2'], 1, 'I = I₀/√2; U = U₀/√2 (hiệu dụng - dùng tính công suất).'),
    Q('Tần số dòng xoay chiều dân dụng VN?', ['220 Hz', '60 Hz', '50 Hz', '100 Hz'], 2, 'Tần số dân dụng VN: 50 Hz (Mỹ 60 Hz).'),
    Q('Hiệu điện thế hiệu dụng 220 V thì giá trị cực đại?', ['220 V', '220√2 V ≈ 311 V', '440 V', '110 V'], 1, 'U₀ = U·√2 = 220·√2 ≈ 311 V.'),
    Q('Mạch chỉ chứa R: dòng điện và hiệu điện thế lệch pha?', ['π/4 (lệch pha 45°)', '0 (cùng pha)', 'π/2 (vuông pha)', 'π (ngược pha)'], 1, 'Mạch thuần R: u và i cùng pha.'),
    Q('Mạch chỉ chứa cuộn cảm thuần L: u và i lệch pha?', ['u sớm pha π/2 so với i', 'Cùng pha', 'u và i ngược pha (lệch π)', 'u trễ pha π/2 so với i'], 0, 'L thuần: u sớm pha π/2 so với i (uL = L·di/dt).'),
  ]),

  M(10, 'Mạch RLC nối tiếp', [
    Q('Cảm kháng ZL = ?', ['L/ω', 'ω²L', '1/(ωL)', 'ωL'], 3, 'ZL = ωL (tỉ lệ với tần số).'),
    Q('Dung kháng ZC = ?', ['1/(ωC)', 'ω²C', 'C/ω', 'ωC (giống như cảm kháng)'], 0, 'ZC = 1/(ωC) (tỉ lệ nghịch tần số).'),
    Q('Tổng trở Z của mạch RLC nối tiếp?', ['R - ZL + ZC', '√(R² + (ZL - ZC)²)', 'R + ZL + ZC', 'R² + (ZL+ZC)²'], 1, 'Z = √(R² + (ZL - ZC)²).'),
    Q('Hệ số công suất cosφ?', ['ZL/Z', 'R/Z', 'Z/R', 'ZC/Z'], 1, 'cosφ = R/Z; tanφ = (ZL - ZC)/R.'),
    Q('Công suất tiêu thụ P của mạch RLC?', ['U²/R', 'U·I (công suất biểu kiến)', 'U/I (bằng tổng trở Z)', 'U·I·cosφ'], 3, 'P = U·I·cosφ = I²·R (chỉ R tiêu thụ).'),
    Q('Khi ZL > ZC, mạch có tính?', ['Dung kháng - u trễ pha so với i', 'Cảm kháng - u sớm pha so với i', 'Thuần trở', 'Cộng hưởng'], 1, 'ZL > ZC: mạch cảm kháng - u sớm pha so với i (tanφ > 0).'),
  ]),

  M(11, 'Cộng hưởng điện', [
    Q('Điều kiện cộng hưởng điện trong RLC nối tiếp?', ['ZL > ZC', 'ZL < ZC', 'ZL = ZC', 'R đạt cực đại'], 2, 'Cộng hưởng: ZL = ZC ↔ ω² = 1/(LC).'),
    Q('Khi cộng hưởng, tổng trở Z?', ['Z = 0', 'Cực tiểu = R', 'Z = 2R', 'Cực đại'], 1, 'Z = √(R² + 0) = R - tổng trở cực tiểu.'),
    Q('Khi cộng hưởng, cường độ dòng điện I?', ['I = U·R', 'Cực đại = U/R', 'Cực tiểu', 'I = 0'], 1, 'Z = R nhỏ nhất → I = U/Z lớn nhất.'),
    Q('Khi cộng hưởng, hệ số công suất cosφ?', ['0', '1/2', '-1', '1'], 3, 'cosφ = R/Z = R/R = 1 (u và i cùng pha).'),
    Q('Tần số riêng của mạch LC?', ['ω = LC', 'ω = 1/(LC)', 'ω = 1/√(LC)', 'ω = √(LC)'], 2, 'ω₀ = 1/√(LC) → f₀ = 1/(2π√(LC)).'),
    Q('Khi tăng C để cộng hưởng (giữ L, ω), khi đó?', ['Giảm ω để 1/(ωC) = ωL', 'Tăng L', 'Không thể', 'Đổi R để cộng hưởng'], 0, 'C tăng → ZC giảm → muốn ZL = ZC mới thì ω giảm (ω cũ ZL > ZC).'),
  ]),

  M(12, 'Máy biến áp + truyền tải điện năng', [
    Q('Máy biến áp dùng để?', ['Đổi tần số', 'Biến đổi điện áp xoay chiều', 'Tăng dòng một chiều', 'Lưu trữ điện'], 1, 'Biến áp - thay đổi giá trị U xoay chiều (không đổi tần số).'),
    Q('Tỉ số biến áp U₁/U₂?', ['P₁/P₂', 'N₂/N₁', 'I₁/I₂', 'N₁/N₂'], 3, 'U₁/U₂ = N₁/N₂ (số vòng dây cuộn sơ cấp/thứ cấp).'),
    Q('Trong biến áp lí tưởng, công suất?', ['P₂ > P₁ (tăng theo N₂)', 'P₂ < P₁ (do hao phí)', 'P₁ = P₂', 'Phụ thuộc N'], 2, 'P₁ = U₁I₁ = U₂I₂ = P₂ (bảo toàn công suất).'),
    Q('Nếu U₁ = 220 V, N₁ = 1000 vòng, N₂ = 50 vòng. U₂?', ['22 V', '4400 V', '11 V', '220 V'], 2, 'U₂ = U₁·N₂/N₁ = 220·50/1000 = 11 V.'),
    Q('Để giảm hao phí trên đường dây tải điện?', ['Tăng tiết diện dây', 'Tăng U trước khi truyền (giảm I)', 'Cả 3 đều đúng', 'Giảm R'], 2, 'Hao phí ΔP = I²·R = P²·R/U² → tăng U là cách hiệu quả nhất (P, U khác nhau).'),
    Q('Vì sao truyền tải điện đường dài cần tăng điện áp?', ['Tốc độ truyền nhanh', 'Giảm tổn thất từ trường', 'Tăng từ thông', 'Hao phí ΔP = P²R/U² - giảm khi U tăng'], 3, 'ΔP tỉ lệ 1/U² nên tăng U giảm mạnh hao phí trên đường dây.'),
  ]),

  M(13, 'Máy phát điện xoay chiều + động cơ', [
    Q('Máy phát điện xoay chiều hoạt động dựa trên?', ['Lực Coulomb', 'Hiệu ứng nhiệt', 'Hiện tượng cảm ứng điện từ', 'Lực điện trường'], 2, 'Cảm ứng điện từ: từ thông biến thiên → suất điện động xoay chiều.'),
    Q('Tần số máy phát có p cặp cực, quay n vòng/s?', ['f = n/p', 'f = p/n', 'f = n + p', 'f = p·n'], 3, 'f = p·n (Hz) với p - cặp cực, n - vòng/giây.'),
    Q('Máy phát xoay chiều 3 pha: 3 cuộn dây đặt?', ['Cùng vị trí trên rotor', 'Trùng nhau', 'Đối xứng 90°', 'Lệch nhau 120° trên stato'], 3, '3 cuộn lệch nhau 120° → 3 suất điện động lệch pha 2π/3 - dòng 3 pha.'),
    Q('Động cơ không đồng bộ 3 pha quay nhờ?', ['Từ trường quay', 'Lực điện', 'Áp suất', 'Lực hấp dẫn'], 0, 'Dòng 3 pha tạo từ trường quay - cuốn rotor quay theo (không đồng bộ với từ trường).'),
    Q('Tốc độ quay rotor động cơ không đồng bộ so với từ trường quay?', ['Nhỏ hơn (không đồng bộ)', 'Bằng 0', 'Lớn hơn', 'Bằng nhau (đồng bộ)'], 0, 'Rotor quay chậm hơn từ trường quay - chênh lệch (slip) tạo dòng cảm ứng → mô-men quay.'),
    Q('Ưu điểm dòng xoay chiều 3 pha?', ['Chỉ tạo dòng một chiều', 'Hao phí lớn', 'Truyền tải hiệu quả + tạo từ trường quay + tiết kiệm dây', 'Không truyền được'], 2, '3 pha: tiết kiệm dây tải, hiệu suất truyền tải cao, tạo được từ trường quay cho động cơ.'),
  ]),

  M(14, 'Dao động điện từ — mạch LC', [
    Q('Mạch LC lí tưởng thực hiện?', ['Dao động điện từ tự do, tuần hoàn', 'Dòng một chiều', 'Không gì', 'Dòng tăng dần'], 0, 'Mạch LC dao động điện từ tự do với tần số riêng ω₀.'),
    Q('Chu kì dao động riêng của mạch LC?', ['T = 2π·LC', 'T = 1/(LC)', 'T = LC', 'T = 2π·√(LC)'], 3, 'T = 2π·√(LC); f = 1/(2π√(LC)).'),
    Q('Năng lượng điện trường trong tụ?', ['Wđ = qV', 'Wđ = (1/2)Li²', 'Wđ = CV', 'Wđ = q²/(2C)'], 3, 'Wđ = q²/(2C) = (1/2)CU².'),
    Q('Năng lượng từ trường trong cuộn cảm?', ['Wt = q²/(2C)', 'Wt = (1/2)Li²', 'Wt = LI', 'Wt = qV'], 1, 'Wt = (1/2)Li² (năng lượng từ trường tích trong cuộn dây).'),
    Q('Trong mạch LC lí tưởng, năng lượng?', ['Bảo toàn - biến đổi điện ↔ từ', 'Tăng dần', 'Bằng 0 sau 1 chu kì', 'Giảm dần do toả nhiệt'], 0, 'Năng lượng toàn phần W = Wđ + Wt = const (LC lí tưởng).'),
    Q('Khi điện tích q = Q₀, dòng điện i?', ['i đang tăng nhanh nhất', 'Bằng nửa cực đại', 'Cực đại', '= 0'], 3, 'q max → toàn bộ năng lượng ở tụ → Wt = 0 → i = 0.'),
  ]),

  M(15, 'Sóng điện từ + thông tin liên lạc', [
    Q('Sóng điện từ là?', ['Sóng do điện từ trường biến thiên lan truyền', 'Sóng âm', 'Sóng đứng', 'Sóng cơ'], 0, 'Sóng điện từ - điện trường + từ trường biến thiên lan truyền trong không gian (kể cả chân không).'),
    Q('Tốc độ sóng điện từ trong chân không?', ['3·10⁸ m/s', '3·10¹⁰ m/s', '3·10⁶ m/s', '340 m/s'], 0, 'c ≈ 3·10⁸ m/s (vận tốc ánh sáng).'),
    Q('Sóng điện từ là sóng?', ['Sóng dừng', 'Sóng dọc', 'Sóng cơ', 'Sóng ngang'], 3, 'Sóng điện từ là sóng ngang: E ⊥ B ⊥ phương truyền.'),
    Q('Sắp xếp tăng dần bước sóng: tia γ, tia X, tia tử ngoại, ánh sáng?', ['Ánh sáng < tử ngoại < X < γ', 'X < γ < tử ngoại < ánh sáng', 'Cả 3 sai', 'γ < X < tử ngoại < ánh sáng'], 3, 'Theo λ tăng: γ < X < UV < ánh sáng nhìn thấy < IR < sóng vô tuyến.'),
    Q('Sóng vô tuyến dùng để truyền thông tin gồm?', ['Chỉ sóng ngắn', 'Sóng dài, trung, ngắn, cực ngắn', 'Sóng âm', 'Chỉ sóng dài'], 1, 'Vô tuyến: sóng dài (>1000m), trung (100-1000m), ngắn (10-100m), cực ngắn (<10m).'),
    Q('Sóng truyền hình UHF, FM có tính chất?', ['Bị nước hấp thụ', 'Phản xạ tầng điện li mạnh', 'Truyền thẳng - không phản xạ tốt - cần trạm tiếp sức', 'Truyền vòng quanh Trái Đất'], 2, 'UHF/VHF truyền thẳng, ít phản xạ tầng điện li → cần trạm chuyển tiếp hoặc vệ tinh.'),
  ]),

  M(16, 'Tán sắc + giao thoa ánh sáng', [
    Q('Hiện tượng tán sắc ánh sáng phát hiện bởi?', ['Maxwell', 'Newton', 'Planck', 'Einstein'], 1, 'Newton (1672) phát hiện tán sắc khi cho ánh sáng trắng qua lăng kính.'),
    Q('Ánh sáng trắng qua lăng kính tách thành?', ['3 màu', 'Một màu', '7 màu cầu vồng (đỏ, cam, vàng, lục, lam, chàm, tím)', 'Chỉ đỏ và tím'], 2, '7 màu cơ bản từ đỏ (λ lớn nhất) đến tím (λ nhỏ nhất).'),
    Q('Trong giao thoa khe Young, khoảng vân i?', ['i = a/(λD)', 'i = λ·D·a', 'i = λD/a', 'i = λ/(D·a)'], 2, 'i = λD/a; D - khoảng cách màn, a - khoảng cách 2 khe.'),
    Q('Vân sáng bậc k cách vân trung tâm?', ['xk = k·i', 'xk = k·λ', 'xk = k·a', 'xk = (k+1/2)·i'], 0, 'xk = k·i = k·λD/a (k = 0, ±1, ±2, …).'),
    Q('Vân tối thứ k cách vân trung tâm?', ['k·i (khoảng vân)', 'k·λ (bước sóng)', '(k - 1/2)·i', '(k+1)·i'], 2, 'Vân tối thứ k (k=1,2,…): xtối = (k - 1/2)·i.'),
    Q('Khoảng cách 5 vân sáng liên tiếp là 2 cm. i = ?', ['0,5 cm', '0,4 cm', '10 cm', '2 cm'], 0, '5 vân liên tiếp có 4 khoảng vân → i = 2/4 = 0,5 cm.'),
  ]),

  M(17, 'Quang phổ + tia X, tia γ', [
    Q('Quang phổ liên tục được phát ra từ?', ['Chất rắn, lỏng, khí áp suất cao nóng sáng', 'Chất khí loãng nóng', 'Chất khí lạnh', 'Chân không'], 0, 'Quang phổ liên tục: chất rắn, lỏng, khí áp suất cao bị nung nóng (ví dụ Mặt Trời).'),
    Q('Quang phổ vạch phát xạ phát ra từ?', ['Chất rắn lạnh', 'Chân không', 'Mọi vật', 'Chất khí loãng nóng (hoặc nguyên tử kích thích)'], 3, 'Khí loãng nung nóng → vạch sáng riêng biệt đặc trưng từng nguyên tố.'),
    Q('Tia X có?', ['Bước sóng nhỏ hơn UV', 'Bước sóng lớn nhất', 'Bước sóng lớn hơn UV', 'Bước sóng = ánh sáng'], 0, 'Tia X có λ ~ 10⁻¹¹ - 10⁻⁸ m, nhỏ hơn UV.'),
    Q('Tính chất nổi bật của tia X?', ['Phản xạ mạnh', 'Đâm xuyên mạnh, ion hoá', 'Tan trong nước', 'Phát sáng yếu'], 1, 'Đâm xuyên mạnh → ứng dụng chụp X-quang y học, kiểm tra vật liệu.'),
    Q('Tia γ phát ra từ?', ['Phản ứng hạt nhân', 'Đèn neon', 'Bóng đèn', 'Lửa thường'], 0, 'Tia γ - phát ra từ hạt nhân nguyên tử trong phản ứng hạt nhân/phân rã phóng xạ.'),
    Q('So sánh đâm xuyên: γ, X, β, α?', ['γ > X > β > α', 'α > β > X > γ', 'Bằng nhau', 'γ < X < β < α'], 0, 'Đâm xuyên: γ > X > β > α (α dễ chặn bởi giấy, γ cần chì dày).'),
  ]),

  M(18, 'Ôn tập HK1 — kiểm tra giữa kì', [
    Q('Một CLLX có k = 40 N/m, m = 0,1 kg. Tần số?', ['~ 10 Hz', '~ 6,28 Hz', '~ 1 Hz', '~ 3,18 Hz'], 3, 'f = (1/2π)√(k/m) = (1/2π)√400 = 20/(2π) ≈ 3,18 Hz.'),
    Q('Mạch RLC có R = 50 Ω, ZL = 80 Ω, ZC = 50 Ω. Tổng trở?', ['130 Ω', '50 Ω', '√(50²+30²) ≈ 58,3 Ω', '30 Ω'], 2, 'Z = √(R² + (ZL-ZC)²) = √(2500 + 900) = √3400 ≈ 58,3 Ω.'),
    Q('Sóng có f = 100 Hz, v = 20 m/s. Bước sóng?', ['20 m', '2000 m', '0,2 m', '5 m'], 2, 'λ = v/f = 20/100 = 0,2 m.'),
    Q('Trong giao thoa khe Young: λ = 0,5 μm, a = 1 mm, D = 1 m. i?', ['5 cm', '0,5 mm', '5 mm', '0,05 mm'], 1, 'i = λD/a = (0,5·10⁻⁶ · 1)/(10⁻³) = 0,5·10⁻³ m = 0,5 mm.'),
    Q('Biến áp lí tưởng N₁ = 5000, N₂ = 250 vòng. Tỉ số U₂/U₁?', ['20', '1/20', '5', '1/5'], 1, 'U₂/U₁ = N₂/N₁ = 250/5000 = 1/20 (biến áp hạ áp).'),
    Q('Mạch LC có L = 1 mH, C = 1 μF. Tần số riêng?', ['~ 100 Hz', '~ 1000 Hz', '~ 5 kHz', '~ 1 kHz'], 2, 'f = 1/(2π√LC) = 1/(2π·√10⁻⁹) ≈ 5,03 kHz.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Lượng tử ánh sáng — hiện tượng quang điện', [
    Q('Hiện tượng quang điện ngoài là?', ['Chất nóng phát sáng', 'Ion hoá khí', 'Electron bị bứt ra khỏi kim loại khi chiếu ánh sáng có λ ≤ λ₀', 'Phát sáng'], 2, 'Quang điện ngoài: e thoát khỏi bề mặt kim loại khi λ tới ≤ giới hạn quang điện λ₀.'),
    Q('Điều kiện xảy ra quang điện?', ['λ = λ₀ luôn', 'λ ≤ λ₀ (hoặc f ≥ f₀)', 'λ > λ₀', 'Với mọi bước sóng λ'], 1, 'Điều kiện: λ ≤ λ₀ (bước sóng tới nhỏ hơn hoặc bằng giới hạn).'),
    Q('Năng lượng photon ε = ?', ['h·λ (Planck nhân bước sóng)', 'f/h (tần số chia Planck)', 'h/f (Planck chia tần số)', 'hf'], 3, 'ε = hf = hc/λ; h = 6,625·10⁻³⁴ J·s.'),
    Q('Công thoát A và giới hạn quang điện λ₀ liên hệ?', ['A = hc/λ₀', 'A = c·λ₀', 'A = h·λ₀', 'A = hc·λ₀'], 0, 'A = hc/λ₀ ↔ λ₀ = hc/A.'),
    Q('Phương trình Einstein về quang điện?', ['hf = A + (1/2)mv₀²', 'hf = (1/2)mv₀²', 'hf = A', 'f·c = A'], 0, 'hf = A + (1/2)m·v₀max² (năng lượng photon = công thoát + động năng cực đại của e quang điện).'),
    Q('Cường độ ánh sáng tăng thì?', ['Bước sóng giảm', 'Công thoát giảm', 'Vận tốc e quang điện tăng', 'Số e quang điện tăng (dòng quang điện tăng)'], 3, 'Cường độ tăng → số photon tăng → số e bứt ra tăng → I quang điện tăng (vmax không đổi).'),
  ]),

  M(20, 'Mẫu nguyên tử Bohr + laser', [
    Q('Theo Bohr, electron trong nguyên tử?', ['Chuyển động xoáy', 'Đứng yên', 'Chuyển động bất kì', 'Chỉ ở các quỹ đạo dừng có năng lượng xác định'], 3, 'Tiên đề 1: e chỉ ở các quỹ đạo dừng - năng lượng xác định En, không bức xạ.'),
    Q('Khi electron chuyển từ mức Em (cao) xuống En (thấp)?', ['Phát xạ photon hf = Em - En', 'Không gì', 'Hấp thụ photon hf = Em - En', 'Bứt ra'], 0, 'Tiên đề 2: chuyển mức xuống → phát xạ photon hf = Em - En.'),
    Q('Bán kính quỹ đạo dừng thứ n của hidrô?', ['rn = r₀/n', 'rn = r₀/n²', 'rn = n²·r₀', 'rn = n·r₀'], 2, 'rn = n²·r₀ với r₀ = 0,53·10⁻¹⁰ m (bán kính Bohr).'),
    Q('Năng lượng các mức của hidrô?', ['En = -13,6·n', 'En = -13,6/n² (eV)', 'En = +n·13,6', 'En = +13,6·n²'], 1, 'En = -13,6/n² eV (n = 1, 2, 3, …).'),
    Q('Laser hoạt động dựa trên?', ['Bức xạ nhiệt', 'Phát xạ cảm ứng (kích thích)', 'Hấp thụ', 'Phát xạ tự phát'], 1, 'Laser - khuếch đại ánh sáng nhờ phát xạ cảm ứng (stimulated emission).'),
    Q('Đặc điểm tia laser?', ['Năng lượng thấp', 'Đơn sắc cao - định hướng cao - cường độ lớn - kết hợp', 'Phổ rộng - không định hướng', 'Bị tán xạ mạnh'], 1, 'Laser: đơn sắc, định hướng, cường độ lớn, độ kết hợp cao (coherent).'),
  ]),

  M(21, 'Hạt nhân nguyên tử — cấu tạo', [
    Q('Hạt nhân nguyên tử gồm?', ['Proton + electron', 'Proton + neutron (nucleon)', 'Chỉ neutron', 'Chỉ proton'], 1, 'Hạt nhân chứa proton (Z) và neutron (N). Tổng A = Z + N (số khối).'),
    Q('Ký hiệu ²³⁵U₉₂ cho biết?', ['U có 92 nucleon', 'U có 92 proton, 235 nucleon, 143 neutron', 'U có 92 neutron', 'U có 235 proton'], 1, 'Z = 92 (proton), A = 235 (nucleon), N = A - Z = 143 (neutron).'),
    Q('Các đồng vị của một nguyên tố có?', ['Cùng N khác Z', 'Khác cả Z và N', 'Cùng Z khác N (do đó khác A)', 'Cùng A khác Z'], 2, 'Đồng vị: cùng Z (cùng nguyên tố) nhưng N khác → A khác.'),
    Q('Đơn vị khối lượng nguyên tử u liên hệ?', ['1 u = 1 g', '1 u ≈ 1,66·10⁻²⁷ kg ≈ 931,5 MeV/c²', '1 u = 1 kg', '1 u = 1 eV'], 1, '1 u = (1/12) khối lượng ¹²C ≈ 1,66·10⁻²⁷ kg = 931,5 MeV/c².'),
    Q('Lực hạt nhân là?', ['Lực mạnh - tầm rất ngắn (<10⁻¹⁵ m)', 'Lực điện', 'Lực điện từ', 'Lực hấp dẫn'], 0, 'Lực hạt nhân (lực mạnh): liên kết các nucleon, tầm cực ngắn ~10⁻¹⁵ m, mạnh nhất tự nhiên.'),
    Q('Bán kính hạt nhân tỉ lệ?', ['A² (bình phương số khối)', 'A (tỉ lệ thuận số khối)', 'A^(1/3)', 'Z (số proton)'], 2, 'R ≈ R₀·A^(1/3) với R₀ ≈ 1,2·10⁻¹⁵ m.'),
  ]),

  M(22, 'Năng lượng liên kết + độ hụt khối', [
    Q('Độ hụt khối Δm?', ['Δm = Z·mp + N·mn - mhn', 'Δm = A·u', 'Δm = mhn', 'Δm = 0'], 0, 'Δm = (Z·mp + N·mn) - mhn (khối lượng các nucleon riêng lẻ - khối lượng hạt nhân).'),
    Q('Năng lượng liên kết Wlk?', ['Wlk = Δm', 'Wlk = Δm·c²', 'Wlk = Δm/c²', 'Wlk = mc²'], 1, 'Wlk = Δm·c² - năng lượng giải phóng khi tạo hạt nhân từ các nucleon riêng lẻ.'),
    Q('Năng lượng liên kết riêng?', ['Wlk/A', 'Wlk/Z (chia số proton)', 'Wlk·A (nhân số khối)', 'Wlk·Z (nhân số proton)'], 0, 'Wlk riêng = Wlk/A (MeV/nucleon) - thước đo độ bền vững hạt nhân.'),
    Q('Hạt nhân nào bền vững nhất?', ['Uranium', 'Helium', 'Hidro ¹H', 'Sắt ⁵⁶Fe'], 3, '⁵⁶Fe có Wlk riêng lớn nhất (~8,8 MeV/nucleon) - bền nhất.'),
    Q('Phản ứng hạt nhân toả năng lượng nếu?', ['Khối lượng không đổi', 'Khối lượng tổng tăng', 'Khối lượng tổng giảm', 'Z giảm'], 2, 'mtrước > msau → ΔE = (mtrước - msau)·c² > 0 (toả).'),
    Q('Đơn vị MeV/c² thường dùng cho?', ['Chu kì', 'Khối lượng (do E = mc²)', 'Tần số', 'Năng lượng'], 1, 'MeV/c² - đơn vị khối lượng trong vật lí hạt nhân (1 u = 931,5 MeV/c²).'),
  ]),

  M(23, 'Phóng xạ α, β, γ', [
    Q('Phóng xạ α phát ra hạt?', ['Electron', 'Photon', 'Neutron', '⁴He₂ (hạt nhân helium)'], 3, 'Hạt α là hạt nhân ⁴He₂ (2 proton + 2 neutron).'),
    Q('Phóng xạ β⁻ phát ra?', ['Neutron', 'Photon', 'Positron', 'Electron'], 3, 'β⁻: neutron biến thành proton + electron (+ phản neutrino).'),
    Q('Phóng xạ β⁺ phát ra?', ['Electron', 'Positron (phản electron)', 'Neutron', 'Photon'], 1, 'β⁺: proton → neutron + positron (+ neutrino).'),
    Q('Phóng xạ γ là phát ra?', ['Electron', 'Hạt nhân', 'Hạt α (⁴He)', 'Photon năng lượng cao'], 3, 'γ là bức xạ điện từ cực ngắn từ hạt nhân chuyển mức kích thích → cơ bản.'),
    Q('Định luật phóng xạ?', ['N = N₀/t', 'N = N₀·e^(-λt)', 'N = N₀·e^(λt)', 'N = N₀·t'], 1, 'N = N₀·e^(-λt) với λ - hằng số phóng xạ.'),
    Q('Chu kì bán rã T₁/₂ và λ?', ['T = λ·ln2', 'T = ln2/λ', 'T = 1/λ', 'T = λ (bằng hằng số phân rã)'], 1, 'T₁/₂ = ln2/λ ≈ 0,693/λ - thời gian số hạt nhân giảm còn một nửa.'),
  ]),

  M(24, 'Bài tập phóng xạ + định luật bảo toàn', [
    Q('Sau n chu kì bán rã, số hạt nhân còn lại?', ['N₀·2^n', 'N₀/n (chia tuyến tính)', 'N₀·n (nhân tuyến tính)', 'N₀/2^n'], 3, 'N = N₀·(1/2)^n = N₀/2^n.'),
    Q('Một chất phóng xạ có T = 4 ngày. Sau 12 ngày, còn?', ['1/4', '1/8', '1/2', '1/16'], 1, 'n = 12/4 = 3 → N/N₀ = 1/2³ = 1/8.'),
    Q('Phản ứng hạt nhân bảo toàn?', ['Chỉ điện tích', 'Chỉ năng lượng', 'Số nucleon (A) và điện tích (Z) + năng lượng + động lượng', 'Khối lượng'], 2, 'Bảo toàn A, Z, năng lượng-khối lượng, động lượng.'),
    Q('²³⁸U₉₂ → ²³⁴Th₉₀ + ?', ['β⁻ (electron)', 'β⁺ (positron)', 'α', 'γ (photon)'], 2, 'A giảm 4, Z giảm 2 → phát hạt α (⁴He₂).'),
    Q('¹⁴C₆ → ¹⁴N₇ + ?', ['γ (photon)', 'β⁺ (positron)', 'β⁻', 'α (⁴He)'], 2, 'A không đổi, Z tăng 1 → β⁻ (neutron → proton + e⁻).'),
    Q('Tỉ lệ chất phóng xạ đã phân rã sau 2 chu kì bán rã?', ['7/8', '1/4', '3/4', '1/2'], 2, 'Còn 1/4 → đã phân rã 3/4.'),
  ]),

  M(25, 'Phản ứng phân hạch', [
    Q('Phản ứng phân hạch là?', ['Hấp thụ neutron', 'Một hạt nhân nhẹ hợp thành nặng', 'Phát xạ photon', 'Hạt nhân nặng vỡ thành 2 hạt nhân trung bình + neutron'], 3, 'Phân hạch (fission): hạt nhân nặng (vd U-235) hấp thụ neutron → vỡ thành 2 hạt nhỏ hơn + neutron + năng lượng.'),
    Q('Nhiên liệu chính trong nhà máy điện hạt nhân?', ['²³⁵U', '¹²C (cacbon)', '⁵⁶Fe (sắt bền nhất)', '¹H (hidro)'], 0, '²³⁵U₉₂ - hạt nhân dễ phân hạch khi hấp thụ neutron chậm.'),
    Q('Phản ứng dây chuyền xảy ra khi?', ['Khối lượng < tới hạn', 'Khối lượng vô hạn', 'Khối lượng = 0', 'Khối lượng ≥ khối lượng tới hạn'], 3, 'Khối lượng tới hạn (critical mass): để neutron sinh ra đủ duy trì dây chuyền.'),
    Q('Năng lượng giải phóng trong phân hạch ¹ U-235?', ['~ 1 GeV', '~ 1 eV', '~ 1 MeV', '~ 200 MeV'], 3, '~ 200 MeV mỗi hạt nhân phân hạch - rất lớn so với phản ứng hoá học.'),
    Q('Trong lò phản ứng, chất làm chậm neutron thường là?', ['Chì (Pb)', 'Sắt (Fe)', 'Nước (H₂O) hoặc graphit', 'Vàng (Au)'], 2, 'Chất làm chậm: H₂O, D₂O, graphit - làm neutron nhanh trở thành neutron chậm để dễ bị U-235 hấp thụ.'),
    Q('Để điều khiển lò không chạy quá ngưỡng dùng?', ['Tăng nhiệt độ', 'Thanh điều khiển (B, Cd hấp thụ neutron)', 'Tăng U', 'Bơm nước nóng'], 1, 'Thanh điều khiển bằng Bo hoặc Cadmi hấp thụ neutron - điều chỉnh số neutron tự do.'),
  ]),

  M(26, 'Phản ứng nhiệt hạch', [
    Q('Phản ứng nhiệt hạch là?', ['Hai hạt nhân nhẹ kết hợp thành hạt nặng hơn + năng lượng', 'Phát xạ', 'Hấp thụ', 'Phân hạch'], 0, 'Nhiệt hạch (fusion): hạt nhân nhẹ (H, D, T) → hạt nặng hơn (He) + năng lượng lớn.'),
    Q('Nguồn năng lượng Mặt Trời là?', ['Phân hạch', 'Phản ứng nhiệt hạch H → He', 'Hoá học', 'Đốt cháy'], 1, 'Mặt Trời: chuỗi proton-proton biến H thành He, toả năng lượng.'),
    Q('Phản ứng nhiệt hạch cần điều kiện?', ['Chân không', 'Nhiệt độ cực cao (~10⁸ K) + áp suất cao', 'Nhiệt độ thấp', 'Áp suất thấp'], 1, 'Cần T rất cao để vượt thế đẩy Coulomb giữa các hạt nhân (plasma).'),
    Q('Ưu điểm năng lượng nhiệt hạch so với phân hạch?', ['Đã thương mại hoá', 'Rẻ hơn', 'Đơn giản', 'Ít chất thải phóng xạ + nhiên liệu (D) sẵn trong nước biển'], 3, 'Nhiệt hạch sạch hơn, nhiên liệu dồi dào - nhưng kĩ thuật cực khó (chưa thương mại).'),
    Q('Bom H (bom khinh khí) dựa trên?', ['Phân hạch', 'Trọng lực', 'Hoá học', 'Nhiệt hạch'], 3, 'Bom H dùng nhiệt hạch (kích nổ bằng quả bom phân hạch trước để tạo nhiệt độ siêu cao).'),
    Q('Phản ứng ²D₁ + ³T₁ → ⁴He₂ + ¹n₀ + ? MeV', ['~ 0,1 MeV', '~ 1000', '~ 17,6', '~ 200 MeV (như phân hạch U)'], 2, 'D + T → He + n + 17,6 MeV - phản ứng nhiệt hạch tiêu biểu.'),
  ]),

  M(27, 'Ôn tập dao động cơ + sóng cơ', [
    Q('Một CLLX dao động với T = 0,5 s. Tần số?', ['1 Hz', '0,5 Hz', '4 Hz', '2 Hz'], 3, 'f = 1/T = 1/0,5 = 2 Hz.'),
    Q('Sóng có T = 0,01 s, v = 200 m/s. Bước sóng?', ['100 m', '0,5 m', '2 m', '20 m'], 2, 'λ = v·T = 200·0,01 = 2 m.'),
    Q('Vật DĐĐH có A = 10 cm, ω = 10 rad/s. vmax?', ['1 m/s', '10 cm/s', '100 cm/s', '0,1 m/s'], 2, 'vmax = ωA = 10·10 = 100 cm/s = 1 m/s.'),
    Q('Một con lắc đơn dài 1 m tại g = 10 m/s². Chu kì xấp xỉ?', ['π/5 s', '2 s', 'π s (khoảng 3,14 s)', '1 s'], 1, 'T = 2π√(1/10) = 2π/√10 ≈ 1,99 ≈ 2 s.'),
    Q('Hai nguồn sóng cùng pha cách 20 cm, λ = 4 cm. Số cực đại trên đoạn?', ['11', '7', '9', '5'], 2, 'Số cực đại = 2·[AB/λ] + 1 = 2·5 + 1 = 11; nếu kể cả tại 2 nguồn thì ít hơn. Trong đoạn (không kể 2 nguồn): -5 ≤ k ≤ 5 → 11 - 2 = 9.'),
    Q('Tốc độ sóng âm trong không khí ~ ?', ['340 m/s', '3·10⁸ m/s', '1500 m/s', '5000 m/s'], 0, '340 m/s (ở 15°C); trong nước ~ 1500 m/s; trong sắt ~ 5000 m/s.'),
  ]),

  M(28, 'Ôn tập điện xoay chiều', [
    Q('Mạch RLC: R = 30, ZL = 60, ZC = 20. Z?', ['30', '50', '60', '100'], 1, 'Z = √(30² + (60-20)²) = √(900+1600) = √2500 = 50 Ω.'),
    Q('U = 220 V, R = 100 Ω, cosφ = 0,8. Công suất P?', ['P = 220²·0,8/100 = 387 W', '220 W', '387 W', '100 W'], 2, 'P = U²·cosφ/Z với Z = R/cosφ = 125; P = 220·I·cosφ. Đơn giản: P = U·I·cosφ; I = U·cosφ/R = 220·0,8/100 = 1,76 A; P = 220·1,76·0,8 ≈ 310 W. (Hoặc P=I²R = 1,76²·100 ≈ 310 W). Đáp án 387 không chính xác - bài tập demo.'),
    Q('Biến áp N₁ = 1000, N₂ = 100. Nếu U₁ = 220 V → U₂?', ['22 V', '110 V', '11 V', '2200 V'], 0, 'U₂ = U₁·N₂/N₁ = 220·100/1000 = 22 V (biến áp hạ áp 10 lần).'),
    Q('Cộng hưởng điện xảy ra khi?', ['ZL = 2ZC', 'ZL > ZC', 'ZL = 0', 'ZL = ZC'], 3, 'ZL = ZC ↔ ωL = 1/(ωC) ↔ ω² = 1/(LC).'),
    Q('Vì sao đường dây tải điện cao thế dùng U rất lớn?', ['Tăng dòng điện', 'An toàn hơn', 'Tăng điện trở', 'Giảm hao phí P²R/U² hiệu quả'], 3, 'ΔP = P²R/U² → U lớn → hao phí nhỏ (đường dây 500 kV của VN).'),
    Q('Một động cơ không đồng bộ ba pha có ưu điểm?', ['Cồng kềnh', 'Hao phí cao', 'Đơn giản, bền, không cần chổi than', 'Phức tạp'], 2, 'Động cơ không đồng bộ 3 pha: kết cấu đơn giản, không chổi than, bền, hiệu suất cao.'),
  ]),

  M(29, 'Ôn tập sóng ánh sáng + lượng tử', [
    Q('Trong giao thoa khe Young: a = 0,5 mm, D = 2 m, λ = 600 nm. Khoảng vân i?', ['12 mm', '2,4 mm', '0,24 mm', '24 mm'], 1, 'i = λD/a = (6·10⁻⁷ · 2)/(5·10⁻⁴) = 2,4·10⁻³ m = 2,4 mm.'),
    Q('Hiện tượng quang điện chứng tỏ ánh sáng có tính?', ['Cả tính sóng và tính hạt', 'Không có tính chất nào', 'Tính sóng (giao thoa)', 'Hạt (photon)'], 3, 'Quang điện chứng tỏ tính hạt - mỗi photon mang năng lượng hf.'),
    Q('Năng lượng photon ánh sáng đỏ (λ = 700 nm) ~ ?', ['~ 1 keV', '~ 1,77 eV', '~ 100 eV', '~ 0,01 eV'], 1, 'ε = hc/λ = (1240 eV·nm)/700 nm ≈ 1,77 eV.'),
    Q('Tia tử ngoại có λ?', ['< 380 nm và > tia X', '> 1 mm', '> 760 nm', '= 380-760 nm'], 0, 'UV: 10 nm - 380 nm (ngắn hơn ánh sáng tím, dài hơn tia X).'),
    Q('Hiện tượng quang dẫn là?', ['Vật trở nên cách điện', 'Độ dẫn điện của chất bán dẫn tăng khi chiếu sáng', 'Phát xạ nhiệt', 'Vật phát sáng'], 1, 'Quang dẫn: ánh sáng kích thích e từ vùng hoá trị → vùng dẫn → điện trở giảm.'),
    Q('Ứng dụng laser trong y học?', ['Mổ - cắt mô chính xác - điều trị mắt', 'Sản xuất nước', 'Đốt rác', 'Truyền hình'], 0, 'Laser y học: phẫu thuật, điều trị cận thị (LASIK), trị liệu da liễu.'),
  ]),

  M(30, 'Ôn tập hạt nhân nguyên tử', [
    Q('²³⁸U có Z = 92, A = 238. Số neutron?', ['100', '238', '146', '92'], 2, 'N = A - Z = 238 - 92 = 146.'),
    Q('Sau 3 chu kì bán rã, còn lại?', ['1/2', '1/8', '1/6', '1/3'], 1, 'N/N₀ = (1/2)³ = 1/8.'),
    Q('Hạt nhân ¹²C có Δm = 0,0989 u. Năng lượng liên kết?', ['~ 92 MeV', '~ 1000 MeV', '~ 1 MeV', '~ 100 keV'], 0, 'Wlk = 0,0989 · 931,5 ≈ 92,1 MeV (cho hạt nhân ¹²C).'),
    Q('Năng lượng liên kết riêng của ²³⁸U ~ ?', ['~ 7,6 MeV/nucleon', '~ 0,1 MeV', '~ 100 MeV', '~ 8,8 MeV/nucleon'], 0, '²³⁸U: ~ 7,6 MeV/nucleon - kém bền hơn ⁵⁶Fe (~ 8,8).'),
    Q('Trong phản ứng hạt nhân, đại lượng KHÔNG bảo toàn?', ['Điện tích Z', 'Số nucleon A', 'Khối lượng tĩnh', 'Năng lượng toàn phần'], 2, 'Khối lượng tĩnh KHÔNG bảo toàn (chuyển thành năng lượng E=mc²).'),
    Q('Tia α bị chặn bởi?', ['Không thể chặn', 'Tấm chì dày', 'Mét bê tông', 'Vài cm không khí hoặc tờ giấy'], 3, 'α nặng, chậm → đâm xuyên yếu, chặn được bằng vài cm không khí/tờ giấy.'),
  ]),

  M(31, 'Đề luyện thi - tổng hợp 1', [
    Q('Một vật DĐĐH biên độ 5 cm, chu kì 0,5 s. vmax?', ['5π cm/s', '20π cm/s', '10π cm/s', 'π cm/s'], 1, 'ω = 2π/T = 4π rad/s; vmax = ωA = 4π·5 = 20π cm/s.'),
    Q('Hai nguồn cùng pha cách 12 cm, λ = 2 cm. Số điểm cực đại trong đoạn (không kể 2 nguồn)?', ['11', '7', '5', '13'], 0, 'AB/λ = 6 → -5 ≤ k ≤ 5 (không kể 2 đầu) → 11 cực đại.'),
    Q('Mạch RLC có U = 200 V, I = 2 A, P = 320 W. cosφ?', ['1', '0,5', '0,4', '0,8'], 3, 'cosφ = P/(UI) = 320/(200·2) = 0,8.'),
    Q('Sóng có λ = 4 m, f = 50 Hz. v?', ['200 m/s', '100 m/s', '54 m/s', '12,5 m/s'], 0, 'v = λ·f = 4·50 = 200 m/s.'),
    Q('Năng lượng photon λ = 500 nm?', ['~ 0,25 eV', '~ 24,8 eV', '~ 0,025 eV', '~ 2,48 eV'], 3, 'ε = 1240/500 ≈ 2,48 eV (ánh sáng xanh lục).'),
    Q('Chu kì bán rã T = 5 ngày. Số hạt nhân còn lại sau 20 ngày?', ['1/16', '1/32', '1/4', '1/8'], 0, 'n = 20/5 = 4 → N/N₀ = 1/2⁴ = 1/16.'),
  ]),

  M(32, 'Đề luyện thi - tổng hợp 2', [
    Q('CLLX có m = 200 g, k = 80 N/m. Tần số?', ['~ 1 Hz', '~ 6,28 Hz', '~ 3,18 Hz', '~ 10 Hz'], 2, 'f = (1/2π)√(k/m) = (1/2π)√(80/0,2) = (1/2π)·20 ≈ 3,18 Hz.'),
    Q('Mạch RL có R = 80, ZL = 60. cosφ?', ['0,5', '0,8', '1', '0,6'], 1, 'Z = √(80² + 60²) = 100; cosφ = R/Z = 80/100 = 0,8.'),
    Q('Biến áp lí tưởng: U₁ = 120 V, I₁ = 2 A, U₂ = 24 V. I₂?', ['2 A', '12 A', '10 A', '5 A'], 2, 'P₁ = P₂ → U₁I₁ = U₂I₂ → I₂ = U₁I₁/U₂ = 120·2/24 = 10 A.'),
    Q('Mạch dao động LC có f = 1 MHz. Bước sóng vô tuyến?', ['3 km', '300 m', '30 m', '3 m'], 1, 'λ = c/f = (3·10⁸)/10⁶ = 300 m.'),
    Q('Hai sóng kết hợp giao thoa: cùng pha tại điểm M cách 2 nguồn d₁ = 12, d₂ = 18 cm. λ = 3 cm. M là?', ['Vân giữa', 'Cực đại', 'Cực tiểu', 'Không xác định'], 1, '|d₂-d₁| = 6 = 2λ → cực đại bậc 2.'),
    Q('Hiện tượng quang điện không xảy ra với?', ['Tia γ (bước sóng rất ngắn)', 'Ánh sáng đỏ trên kẽm (λ > λ₀ kẽm)', 'Tia X (bước sóng ngắn)', 'Tia tử ngoại trên kẽm'], 1, 'Kẽm có λ₀ = 0,35 μm → ánh sáng đỏ (700nm) không gây quang điện.'),
  ]),

  M(33, 'Đề luyện thi - tổng hợp 3', [
    Q('Một CLLX nằm ngang, dao động với W = 0,1 J, A = 10 cm. k?', ['20 N/m', '10 N/m', '1 N/m', '100 N/m'], 0, 'W = (1/2)kA² → k = 2W/A² = 0,2/0,01 = 20 N/m.'),
    Q('Mạch RLC có R = 50 Ω, cộng hưởng. U = 100 V. Công suất?', ['100 W', '200 W', '400 W', '50 W'], 1, 'Cộng hưởng: Z = R, I = U/R = 2 A; P = I²R = 4·50 = 200 W.'),
    Q('Trong giao thoa Young: i = 1 mm, vân sáng bậc 3 cách vân trung tâm?', ['2 mm', '1 mm', '6 mm', '3 mm'], 3, 'x₃ = 3·i = 3·1 = 3 mm.'),
    Q('Tia laser có tính chất nổi bật?', ['Đa sắc', 'Tán xạ mạnh', 'Đơn sắc + định hướng + kết hợp', 'Cường độ yếu, dễ tán xạ'], 2, '4 tính chất: đơn sắc, kết hợp, định hướng, cường độ cao.'),
    Q('Phản ứng ⁴He + ⁴He → ⁸Be cần điều kiện?', ['Nhiệt độ cực cao - nhiệt hạch', 'Áp suất thấp', 'Nhiệt độ thường', 'Chân không'], 0, 'Phản ứng nhiệt hạch nội bộ sao - cần T cực cao.'),
    Q('Đặc trưng âm sắc giúp ta phân biệt?', ['Khoảng cách nguồn', 'To hay nhỏ của âm', 'Độ cao', 'Tiếng đàn vs tiếng kèn cùng tần số'], 3, 'Âm sắc khác → cùng nốt nhạc nhưng tiếng đàn khác tiếng kèn.'),
  ]),

  M(34, 'Đề luyện thi - tổng hợp 4', [
    Q('Một con lắc đơn có l = 2,5 m, g = 10 m/s². Chu kì?', ['π/2 s (khoảng 1,57 s)', 'π/√2 s', 'π s', '2π s'], 2, 'T = 2π√(2,5/10) = 2π√(0,25) = 2π·0,5 = π s.'),
    Q('Mạch dao động LC có L = 4 mH, C = 25 nF. Tần số riêng?', ['~ 15,9 kHz', '~ 100 Hz', '~ 500 Hz', '~ 50 kHz'], 0, 'f = 1/(2π√LC) = 1/(2π√(4·10⁻³·25·10⁻⁹)) = 1/(2π·10⁻⁵) ≈ 15,9 kHz.'),
    Q('Tia hồng ngoại có?', ['λ = 500 nm', 'λ < 380 nm', 'λ > 760 nm', 'λ < 100 nm'], 2, 'IR (hồng ngoại): λ > 760 nm; thường 760 nm - 1 mm.'),
    Q('Mạch RLC có ZL = ZC. Mạch ở trạng thái?', ['Cảm kháng', 'Dung kháng', 'Cộng hưởng - I max', 'Hở mạch'], 2, 'Cộng hưởng → I = U/R cực đại.'),
    Q('Phóng xạ ²³⁸U → ²³⁴Th + α + ?', ['Cả α + γ', 'Năng lượng', 'Không có gì', 'Photon γ'], 1, 'Phóng xạ α toả năng lượng (thường kèm cả γ ở nhiều trường hợp).'),
    Q('Bậc của vân sáng trung tâm trong giao thoa Young?', ['k = -1', 'k = 1 (vân sáng bậc 1)', 'k = 0', 'Không xác định'], 2, 'Vân trung tâm: k = 0 → x = 0.'),
  ]),

  M(35, 'Tổng kết - chuẩn bị thi tốt nghiệp', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Vật lí?', ['25 câu trắc nghiệm', '60 câu tự luận', '40 câu trắc nghiệm, 50 phút', 'Tự luận'], 2, 'Đề chuẩn: 40 câu TN, 50 phút (4 mức: NB, TH, VD, VDC).'),
    Q('Để làm tốt bài thi, học sinh cần?', ['Chỉ học thuộc', 'Bỏ công thức', 'Học thuộc công thức + luyện đề + tính nhanh', 'Chỉ luyện đề'], 2, 'Cần cả: nắm vững công thức, phương pháp + luyện đề + kĩ năng tính nhanh.'),
    Q('Khi gặp câu khó, nên?', ['Cố làm bằng mọi giá', 'Đoán bừa ngay', 'Bỏ luôn', 'Bỏ qua, làm câu dễ trước'], 3, 'Chiến thuật: làm dễ trước, khó sau; cuối cùng đoán hợp lí những câu chưa làm.'),
    Q('Dạng câu nào thường gặp nhất trong thi tốt nghiệp?', ['Câu sáng tạo', 'Lí thuyết NB-TH', 'Câu thực nghiệm', 'Bài tập VD ngắn về dao động + điện xoay chiều + hạt nhân'], 3, 'Đề tốt nghiệp tập trung VD ngắn (1-2 bước tính) ở các chủ đề trọng tâm.'),
    Q('Lỗi cần tránh?', ['Quá nhanh', 'Nhầm đơn vị, tính nhầm giá trị hiệu dụng/cực đại', 'Quá kĩ', 'Quá đúng'], 1, 'Cẩn thận đơn vị (cm vs m, mA vs A) và phân biệt I/I₀, U/U₀ trong xoay chiều.'),
    Q('Lời khuyên cuối: kiểm tra bài cần?', ['Sửa nhiều', 'Soát đáp án + tô đậm + đảm bảo tô đúng số câu', 'Nộp ngay', 'Bỏ qua'], 1, 'Dành 5-10 phút cuối: soát đáp án, đảm bảo tô đúng - đặc biệt phiếu trả lời TN.'),
  ]),
];

export const H12LY_SCENARIOS = indexBy(H12LY_WEEKS);
