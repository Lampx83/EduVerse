// ============================================================
// Lớp 11 · VẬT LÝ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Vật lý 11).
// ID prefix: "H11LY-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11LY', 'vat-ly', n, title, qs, opts);

export const H11LY_WEEKS = [
  // ──────────────── HK1 — Dao động & Sóng ────────────────
  M(1, 'Chương 1 — Dao động điều hoà · Khái niệm', [
    Q('Dao động điều hoà là dao động trong đó li độ biến thiên theo?', ['Hàm cos (hoặc sin) theo thời gian','Hàm bậc nhất','Hàm mũ','Hàm logarit'], 0, 'x = A·cos(ωt+φ).'),
    Q('Phương trình tổng quát của dao động điều hoà?', ['x = A·cos(ωt + φ)','x = A·t','x = ω·t','x = A + ωt'], 0, 'Định nghĩa.'),
    Q('Biên độ A là?', ['Li độ cực đại','Tốc độ cực đại','Gia tốc cực đại','Pha ban đầu'], 0, 'A = |x|max.'),
    Q('Chu kỳ T và tần số góc ω liên hệ?', ['T = 2π/ω','T = ω/2π','T = ω·2π','T = 1/ω'], 0, 'T = 2π/ω.'),
    Q('Tần số f và chu kỳ T?', ['f = 1/T','f = T','f = 2T','f = 2π·T'], 0, 'f = 1/T (Hz).'),
    Q('Pha ban đầu φ xác định?', ['Vị trí và chiều chuyển động lúc t=0','Biên độ','Chu kỳ','Tần số'], 0, 'φ ↔ trạng thái ban đầu.'),
  ]),

  M(2, 'Vận tốc - gia tốc trong dao động điều hoà', [
    Q('Vận tốc v(t) của dao động x=A·cos(ωt+φ)?', ['v = -Aω·sin(ωt+φ)','v = A·cos(ωt+φ)','v = Aω·cos(ωt+φ)','v = -A·cos(ωt+φ)'], 0, 'Đạo hàm x theo t.'),
    Q('Gia tốc a(t) của dao động x = A·cos(ωt+φ)?', ['a = -Aω²·cos(ωt+φ) = -ω²x','a = Aω²·cos','a = A·sin','a = -A·sin'], 0, 'a = x\'\' = -ω²x.'),
    Q('Tốc độ cực đại vmax?', ['Aω','A','ω','Aω²'], 0, 'vmax = Aω (khi x=0).'),
    Q('Gia tốc cực đại amax?', ['Aω²','Aω','A','ω²'], 0, 'amax = Aω² (khi x=±A).'),
    Q('Khi vật ở vị trí cân bằng (x=0), gia tốc bằng?', ['0','amax','-amax','Aω'], 0, 'a = -ω²x = 0.'),
    Q('Quan hệ giữa a và x trong dao động điều hoà?', ['Ngược pha (a = -ω²x)','Cùng pha','Lệch π/2','Lệch π/4'], 0, 'a luôn ngược dấu x.'),
  ]),

  M(3, 'Năng lượng dao động điều hoà', [
    Q('Cơ năng W của dao động điều hoà = ?', ['½·m·ω²·A² = ½·k·A²','m·ω·A','m·A','ω²A'], 0, 'W = ½kA².'),
    Q('Động năng Wđ = ?', ['½·m·v²','½·k·x²','m·v','k·x'], 0, 'Wđ = ½mv².'),
    Q('Thế năng Wt = ?', ['½·k·x² = ½·m·ω²·x²','½·m·v²','m·x','k·v'], 0, 'Wt = ½kx².'),
    Q('Cơ năng có đặc điểm?', ['Bảo toàn (không đổi)','Tăng dần','Giảm dần','Dao động'], 0, 'W = Wđ + Wt = const.'),
    Q('Tại biên (x=±A): Wđ và Wt ?', ['Wđ=0, Wt=Wmax','Wđ=max, Wt=0','Bằng nhau','Bằng 0'], 0, 'Biên: v=0 → Wđ=0.'),
    Q('Tại cân bằng (x=0): Wđ và Wt ?', ['Wđ=max, Wt=0','Wđ=0, Wt=max','Bằng nhau','Bằng 0'], 0, 'Cân bằng: v=vmax → Wđ=max.'),
  ]),

  M(4, 'Con lắc lò xo', [
    Q('Tần số góc ω của con lắc lò xo (k, m)?', ['ω = √(k/m)','ω = √(m/k)','ω = k·m','ω = k/m'], 0, 'ω = √(k/m).'),
    Q('Chu kỳ T của con lắc lò xo?', ['T = 2π·√(m/k)','T = 2π·√(k/m)','T = √(k/m)','T = m/k'], 0, 'T = 2π·√(m/k).'),
    Q('Tăng khối lượng m gấp 4 lần thì T thay đổi?', ['Tăng 2 lần','Tăng 4 lần','Giảm 2 lần','Không đổi'], 0, 'T ~ √m.'),
    Q('Tăng độ cứng k gấp 4 lần thì f thay đổi?', ['Tăng 2 lần','Giảm 2 lần','Tăng 4 lần','Không đổi'], 0, 'f ~ √k.'),
    Q('Con lắc lò xo nằm ngang: lực hồi phục?', ['F = -k·x','F = m·g','F = k·x','F = m·a'], 0, 'F hồi phục.'),
    Q('Con lắc lò xo treo thẳng đứng có tần số dao động nhỏ phụ thuộc?', ['k và m','m và g','k và g','Cả 3'], 0, 'ω = √(k/m) không phụ thuộc g.'),
  ]),

  M(5, 'Con lắc đơn', [
    Q('Chu kỳ con lắc đơn (l, g)?', ['T = 2π·√(l/g)','T = 2π·√(g/l)','T = √(l·g)','T = l/g'], 0, 'T = 2π·√(l/g).'),
    Q('Tăng chiều dài l gấp 4 lần thì T?', ['Tăng 2 lần','Tăng 4 lần','Giảm 2 lần','Không đổi'], 0, 'T ~ √l.'),
    Q('Chu kỳ con lắc đơn phụ thuộc?', ['Chiều dài và g','Khối lượng','Biên độ','Vận tốc'], 0, 'Không phụ thuộc m hay biên độ nhỏ.'),
    Q('Điều kiện để con lắc đơn dao động điều hoà?', ['Biên độ góc nhỏ (sinα ≈ α)','Biên độ lớn','Khối lượng nhỏ','Chiều dài lớn'], 0, 'Xấp xỉ điều hoà khi α nhỏ.'),
    Q('Con lắc đơn đưa lên cao (g giảm), chu kỳ?', ['Tăng','Giảm','Không đổi','Không xác định'], 0, 'T ~ 1/√g.'),
    Q('Lực hồi phục con lắc đơn (biên độ nhỏ)?', ['F ≈ -mg·sinα ≈ -mg·s/l','F = mg','F = m·a','F = k·x'], 0, 'F ≈ -(mg/l)·s.'),
  ]),

  M(6, 'Dao động tắt dần và dao động cưỡng bức', [
    Q('Dao động tắt dần có đặc điểm?', ['Biên độ giảm dần theo thời gian','Biên độ tăng','Biên độ không đổi','Tần số tăng'], 0, 'Do ma sát.'),
    Q('Nguyên nhân của dao động tắt dần?', ['Lực ma sát/cản','Lực hồi phục','Lực hấp dẫn','Không nguyên nhân'], 0, 'Ma sát tiêu hao cơ năng.'),
    Q('Dao động cưỡng bức là?', ['Dao động dưới tác dụng của ngoại lực tuần hoàn','Dao động tự do','Dao động tắt dần','Dao động tổng hợp'], 0, 'Có ngoại lực F = F₀·cos(Ωt).'),
    Q('Hiện tượng cộng hưởng xảy ra khi?', ['Tần số ngoại lực ≈ tần số riêng','Tần số rất lớn','Tần số rất nhỏ','Không liên quan'], 0, 'Ω = ω₀ → biên độ max.'),
    Q('Ứng dụng cộng hưởng?', ['Hộp đàn ghi-ta, máy đo địa chấn','Tủ lạnh','Đèn LED','Máy tính'], 0, 'Cộng hưởng âm.'),
    Q('Tác hại của cộng hưởng?', ['Sập cầu, hỏng máy móc','Tăng âm lượng','Tiết kiệm năng lượng','Không có'], 0, 'Tacoma 1940.'),
  ]),

  M(7, 'Sóng cơ — Khái niệm và phương trình', [
    Q('Sóng cơ là?', ['Dao động lan truyền trong môi trường vật chất','Sóng điện từ','Ánh sáng','Sóng radio'], 0, 'Cần môi trường.'),
    Q('Sóng ngang là sóng có phương dao động?', ['Vuông góc phương truyền','Cùng phương truyền','Bất kỳ','Không xác định'], 0, 'Sóng trên dây = ngang.'),
    Q('Sóng dọc là sóng có phương dao động?', ['Cùng phương truyền','Vuông góc','Bất kỳ','Không có'], 0, 'Sóng âm trong không khí = dọc.'),
    Q('Bước sóng λ là?', ['Quãng đường sóng đi trong 1 chu kỳ','Biên độ','Tần số','Vận tốc'], 0, 'λ = v·T.'),
    Q('Vận tốc truyền sóng v?', ['v = λ·f = λ/T','v = λ + f','v = λ - T','v = T/λ'], 0, 'v = λf.'),
    Q('Tần số sóng phụ thuộc?', ['Nguồn dao động','Môi trường','Biên độ','Bước sóng'], 0, 'f = f nguồn (không đổi khi qua môi trường khác).'),
  ]),

  M(8, 'Giao thoa sóng', [
    Q('Điều kiện giao thoa sóng?', ['Hai nguồn kết hợp (cùng tần số, hiệu pha không đổi)','Khác tần số','Khác biên độ','Khác phương'], 0, 'Hai nguồn coherent.'),
    Q('Điểm cực đại giao thoa: hiệu đường đi?', ['d₂-d₁ = k·λ','d₂-d₁ = (k+½)λ','d₂-d₁ = 0','d₂-d₁ = λ/4'], 0, 'Cực đại: bậc k·λ.'),
    Q('Điểm cực tiểu giao thoa: hiệu đường đi?', ['d₂-d₁ = (k+½)·λ','d₂-d₁ = k·λ','d₂-d₁ = 0','d₂-d₁ = λ'], 0, 'Cực tiểu: bậc bán nguyên.'),
    Q('Hai sóng gặp nhau cùng pha tạo điểm?', ['Cực đại (biên độ cộng)','Cực tiểu','Không đổi','Triệt tiêu'], 0, 'Cộng tăng cường.'),
    Q('Hai sóng gặp nhau ngược pha tạo điểm?', ['Cực tiểu (triệt tiêu)','Cực đại','Không đổi','Tăng cường'], 0, 'Ngược pha → triệt tiêu.'),
    Q('Số đường cực đại trên đoạn S₁S₂ (S₁S₂=d, λ)?', ['Khoảng -d/λ ≤ k ≤ d/λ (k nguyên)','Không tính được','k bất kỳ','k = 0'], 0, 'Bậc nguyên thoả d₁-d₂.'),
  ]),

  M(9, 'Sóng dừng', [
    Q('Sóng dừng tạo ra do?', ['Giao thoa sóng tới và sóng phản xạ','Hai sóng khác tần số','Sóng đơn lẻ','Sóng tắt dần'], 0, 'Tới + phản xạ.'),
    Q('Điểm nút trong sóng dừng?', ['Điểm không dao động','Điểm dao động max','Điểm bất kỳ','Điểm dao động trung bình'], 0, 'Nút: biên độ = 0.'),
    Q('Điểm bụng trong sóng dừng?', ['Điểm dao động biên độ cực đại','Điểm không dao động','Điểm bất kỳ','Điểm trung bình'], 0, 'Bụng: biên độ max.'),
    Q('Khoảng cách giữa 2 nút liên tiếp?', ['λ/2','λ','λ/4','2λ'], 0, 'Nút cách nút = λ/2.'),
    Q('Dây 2 đầu cố định, chiều dài l, có sóng dừng khi?', ['l = k·λ/2','l = k·λ','l = (k+½)·λ/2','l = λ/4'], 0, 'l = k·λ/2 (k = số bó sóng).'),
    Q('Dây 1 đầu cố định, 1 đầu tự do?', ['l = (k+½)·λ/2 = (2k+1)·λ/4','l = k·λ/2','l = k·λ','l = λ/2'], 0, 'l = (2k+1)·λ/4.'),
  ]),

  M(10, 'Sóng âm và đặc trưng âm', [
    Q('Sóng âm trong không khí là sóng?', ['Dọc','Ngang','Mặt','Không xác định'], 0, 'Sóng âm = sóng dọc trong khí/lỏng.'),
    Q('Vận tốc âm trong không khí (ở 20°C)?', ['~340 m/s','~3×10⁸ m/s','~1500 m/s','~10 m/s'], 0, 'Khoảng 340 m/s.'),
    Q('Tai người nghe được tần số?', ['16 Hz – 20 000 Hz','20 Hz – 200 Hz','< 16 Hz','> 30 000 Hz'], 0, 'Dải nghe được.'),
    Q('Hạ âm là âm có tần số?', ['< 16 Hz','> 20 000 Hz','16–20000 Hz','100 Hz'], 0, 'Hạ âm.'),
    Q('Siêu âm là âm có tần số?', ['> 20 000 Hz','< 16 Hz','16–20 000 Hz','100 Hz'], 0, 'Siêu âm.'),
    Q('Đặc trưng sinh lý của âm gồm?', ['Độ cao, độ to, âm sắc','Vận tốc','Bước sóng','Năng lượng'], 0, '3 đặc trưng sinh lý.'),
  ]),

  M(11, 'Mức cường độ âm', [
    Q('Mức cường độ âm L (dB) = ?', ['10·log(I/I₀)','I/I₀','log(I)','10·I'], 0, 'L = 10·log(I/I₀), I₀=10⁻¹² W/m².'),
    Q('Đơn vị mức cường độ âm?', ['Đề-xi-ben (dB)','Hz','W/m²','m/s'], 0, 'dB.'),
    Q('Tăng I lên 10 lần thì L tăng?', ['10 dB','1 dB','100 dB','2 dB'], 0, '10·log10 = 10 dB.'),
    Q('I₀ = ngưỡng nghe = ?', ['10⁻¹² W/m²','10⁻⁶ W/m²','1 W/m²','10⁻³ W/m²'], 0, 'Quy ước.'),
    Q('Ngưỡng đau khoảng?', ['~130 dB','~30 dB','~60 dB','~200 dB'], 0, '~130 dB.'),
    Q('Độ to của âm liên quan?', ['Cường độ âm','Tần số','Âm sắc','Vận tốc'], 0, 'Cường độ âm.'),
  ]),

  M(12, 'Chương 2 — Điện tích · Định luật Coulomb', [
    Q('Định luật Coulomb cho lực giữa 2 điện tích điểm?', ['F = k·|q₁q₂|/r²','F = q₁ + q₂','F = q·r','F = k·q/r'], 0, 'F = k|q₁q₂|/r².'),
    Q('Hằng số Coulomb k trong chân không?', ['9·10⁹ N·m²/C²','6,67·10⁻¹¹','1,6·10⁻¹⁹','3·10⁸'], 0, 'k ≈ 9·10⁹.'),
    Q('Hai điện tích cùng dấu sẽ?', ['Đẩy nhau','Hút nhau','Trung hoà','Không tác dụng'], 0, 'Cùng dấu → đẩy.'),
    Q('Hai điện tích trái dấu thì?', ['Hút nhau','Đẩy nhau','Trung hoà','Không tác dụng'], 0, 'Trái dấu → hút.'),
    Q('Tăng khoảng cách r gấp đôi, F thay đổi?', ['Giảm 4 lần','Tăng 4 lần','Giảm 2 lần','Không đổi'], 0, 'F ~ 1/r².'),
    Q('Hằng số điện môi ε của không khí ≈ ?', ['1','9','1/9','10'], 0, 'ε không khí ≈ 1.'),
  ]),

  M(13, 'Điện trường và cường độ điện trường', [
    Q('Cường độ điện trường E là?', ['E = F/q (lực trên đơn vị điện tích)','E = F·q','E = q/F','E = k·q'], 0, 'E = F/q.'),
    Q('Đơn vị của E?', ['V/m hoặc N/C','C/m','N/m','J/C'], 0, 'V/m = N/C.'),
    Q('Cường độ điện trường do điện tích Q gây ra tại r?', ['E = k·|Q|/r²','E = k·Q/r','E = Q·r','E = k·r/Q'], 0, 'E = k|Q|/r².'),
    Q('Đường sức điện hướng từ?', ['Dương sang âm','Âm sang dương','Bất kỳ','Không có hướng'], 0, 'Đường sức từ (+) → (-).'),
    Q('Trong điện trường đều, E?', ['Không đổi (mọi điểm)','Tăng theo r','Giảm theo r','Bằng 0'], 0, 'Điện trường đều: E = const.'),
    Q('Nguyên lý chồng chất: E tổng?', ['Tổng vectơ các E thành phần','Tổng đại số','Tích','Hiệu'], 0, 'E = ΣE_i (vectơ).'),
  ]),

  M(14, 'Điện thế - Hiệu điện thế - Công của lực điện', [
    Q('Công của lực điện A = ?', ['A = q·E·d (điện trường đều)','A = q·r','A = E·r','A = q/E'], 0, 'A = qEd.'),
    Q('Hiệu điện thế U giữa 2 điểm = ?', ['U = A/q','U = q/A','U = A·q','U = E·q'], 0, 'U = A/q (V).'),
    Q('Đơn vị điện thế?', ['Vôn (V)','C','N/m','J/m'], 0, 'V = J/C.'),
    Q('Mối liên hệ E và U (điện trường đều, khoảng cách d)?', ['U = E·d','U = E/d','U = E + d','U = E·d²'], 0, 'U = Ed.'),
    Q('Điện thế V tại điểm M (chọn ∞ là 0)?', ['V_M = k·Q/r','V = Q·r','V = E·r²','V = k·r/Q'], 0, 'V do điện tích điểm.'),
    Q('Công của lực điện không phụ thuộc?', ['Hình dạng đường đi','Điểm đầu/cuối','Điện tích','Điện trường'], 0, 'Lực điện = lực bảo toàn.'),
  ]),

  M(15, 'Tụ điện', [
    Q('Điện dung C của tụ điện = ?', ['C = Q/U','C = U/Q','C = Q·U','C = Q + U'], 0, 'C = Q/U.'),
    Q('Đơn vị điện dung?', ['Fara (F)','V','C','Ω'], 0, 'F = C/V.'),
    Q('Tụ điện phẳng: C = ?', ['C = ε·S/(4π·k·d) = ε·ε₀·S/d','C = U/d','C = S·d','C = ε/d'], 0, 'C ~ S/d.'),
    Q('Năng lượng tụ điện W = ?', ['W = ½·C·U² = Q²/(2C)','W = C·U','W = Q·U','W = ½·Q·U²'], 0, 'W = ½CU² = ½QU.'),
    Q('Tụ nối tiếp: 1/C_b = ?', ['1/C₁ + 1/C₂ + …','C₁ + C₂','C₁ · C₂','C₁ - C₂'], 0, 'Nối tiếp: nghịch đảo cộng.'),
    Q('Tụ song song: C_b = ?', ['C₁ + C₂ + …','1/C₁ + 1/C₂','C₁·C₂','C₁/C₂'], 0, 'Song song: cộng C.'),
  ]),

  M(16, 'Chương 3 — Dòng điện không đổi · Định luật Ohm cho đoạn mạch', [
    Q('Cường độ dòng điện I = ?', ['I = q/t','I = q·t','I = U·R','I = E/R'], 0, 'I = q/t (A).'),
    Q('Định luật Ohm đoạn mạch: U = ?', ['U = I·R','U = I/R','U = I + R','U = I - R'], 0, 'U = IR.'),
    Q('Điện trở mắc nối tiếp: R_b = ?', ['R₁ + R₂ + …','1/R₁ + 1/R₂','R₁·R₂','R₁/R₂'], 0, 'Nối tiếp: cộng R.'),
    Q('Điện trở mắc song song: 1/R_b = ?', ['1/R₁ + 1/R₂ + …','R₁ + R₂','R₁·R₂','R₁ - R₂'], 0, 'Song song: nghịch đảo cộng.'),
    Q('Công của dòng điện A = ?', ['A = U·I·t','A = U/I·t','A = U + I + t','A = R·t'], 0, 'A = UIt.'),
    Q('Công suất P = ?', ['P = U·I = I²·R = U²/R','P = U + I','P = U/I','P = U·I·t'], 0, 'P = UI.'),
  ]),

  M(17, 'Định luật Ohm cho toàn mạch', [
    Q('Định luật Ohm cho toàn mạch?', ['I = E/(R + r)','I = E/R','I = U/r','I = E·R'], 0, 'I = E/(R+r), r = điện trở trong.'),
    Q('Suất điện động E của nguồn là?', ['Công của nguồn để đưa 1C qua mạch','Hiệu điện thế ngoài','Cường độ dòng','Điện trở trong'], 0, 'E = A/q (V).'),
    Q('Điện trở trong r là?', ['Điện trở trong lòng nguồn','Điện trở mạch ngoài','Điện trở dây dẫn','Tụ điện'], 0, 'r nội tại nguồn.'),
    Q('Hiệu điện thế mạch ngoài U?', ['U = E - I·r','U = E + I·r','U = I·r','U = E/I'], 0, 'U = E - Ir.'),
    Q('Khi đoản mạch (R=0)?', ['I = E/r (cực đại)','I = 0','U = E','I = E/R'], 0, 'I_đoản mạch.'),
    Q('Khi mạch hở (R=∞)?', ['I = 0, U = E','I = E/r','U = 0','I = ∞'], 0, 'Không có dòng, U = E.'),
  ]),

  M(18, 'Review HK1 — Dao động, sóng, điện', [
    Q('Phương trình DĐĐH chuẩn?', ['x = A·cos(ωt + φ)','x = A·t','x = ω·t','x = A·sin(t)'], 0, 'Định nghĩa.'),
    Q('λ·f = ?', ['v','T','ω','A'], 0, 'v = λf.'),
    Q('Định luật Coulomb: F ~ ?', ['1/r²','r','r²','1/r'], 0, 'F = k|q₁q₂|/r².'),
    Q('Định luật Ohm toàn mạch?', ['I = E/(R+r)','I = U/R','I = E·R','I = R+r'], 0, 'I = E/(R+r).'),
    Q('Năng lượng tụ?', ['½CU²','CU','C+U','C-U'], 0, '½CU².'),
    Q('Sóng âm trong khí là sóng?', ['Dọc','Ngang','Mặt','Không có'], 0, 'Sóng dọc.'),
  ]),

  // ──────────────── HK2 — Dòng điện trong môi trường, từ trường ────────────────
  M(19, 'Chương 4 — Dòng điện trong kim loại', [
    Q('Bản chất dòng điện trong kim loại?', ['Dòng electron tự do dịch chuyển','Dòng ion','Dòng proton','Dòng neutron'], 0, 'Electron tự do.'),
    Q('Điện trở suất kim loại phụ thuộc?', ['Nhiệt độ','Điện áp','Cường độ dòng','Khối lượng'], 0, 'ρ tăng theo T.'),
    Q('ρ(T) = ?', ['ρ₀·(1 + α·Δt)','ρ₀·(1 - α·Δt)','ρ₀/Δt','ρ₀ + Δt'], 0, 'α là hệ số nhiệt điện trở.'),
    Q('Siêu dẫn xảy ra khi?', ['T < Tc (nhiệt độ tới hạn)','T cao','T = 0','Mọi T'], 0, 'Hg: Tc ≈ 4K.'),
    Q('Trong siêu dẫn ρ = ?', ['0','∞','Hằng số','Tăng dần'], 0, 'ρ = 0.'),
    Q('Hiện tượng nhiệt điện?', ['Suất điện động sinh do chênh nhiệt 2 đầu mối hàn','Dòng do ma sát','Dòng cảm ứng','Dòng quang điện'], 0, 'Cặp nhiệt điện.'),
  ]),

  M(20, 'Dòng điện trong chất điện phân', [
    Q('Bản chất dòng điện trong chất điện phân?', ['Dòng ion dương và âm','Dòng electron','Dòng proton','Dòng neutron'], 0, 'Ion + và -.'),
    Q('Định luật Faraday I: m = ?', ['m = k·q','m = k/q','m = q/k','m = k+q'], 0, 'm tỉ lệ với q.'),
    Q('Định luật Faraday II: k = ?', ['k = (1/F)·(A/n)','k = F·A','k = n/A','k = F/n'], 0, 'F = 96 500 C/mol.'),
    Q('F (hằng số Faraday) = ?', ['96 500 C/mol','9·10⁹','1,6·10⁻¹⁹','6,67·10⁻¹¹'], 0, '1 mol electron.'),
    Q('Ứng dụng điện phân?', ['Mạ điện, điều chế kim loại','Đèn LED','Máy tính','Tụ điện'], 0, 'Mạ Cu, điều chế Al.'),
    Q('m = (A·I·t)/(n·F) là dạng kết hợp?', ['Faraday I + II','Chỉ Faraday I','Chỉ Faraday II','Coulomb'], 0, 'Hai định luật.'),
  ]),

  M(21, 'Dòng điện trong chân không và bán dẫn', [
    Q('Dòng điện trong chân không là dòng?', ['Electron phát ra từ catot nóng','Ion','Proton','Photon'], 0, 'Nhiệt electron.'),
    Q('Ứng dụng ống tia âm cực trước đây?', ['Tivi CRT, dao động ký','Đèn LED','Tủ lạnh','Máy giặt'], 0, 'CRT.'),
    Q('Hai loại bán dẫn?', ['Loại n và loại p','Loại + và -','Loại nóng và lạnh','Loại to và nhỏ'], 0, 'n (electron), p (lỗ trống).'),
    Q('Bán dẫn loại n có?', ['Electron tự do là hạt tải đa số','Lỗ trống đa số','Ion đa số','Không có'], 0, 'Pha tạp P, As → loại n.'),
    Q('Bán dẫn loại p có?', ['Lỗ trống là hạt tải đa số','Electron đa số','Ion đa số','Không có'], 0, 'Pha tạp B, Al → loại p.'),
    Q('Diode bán dẫn cho dòng đi qua khi?', ['Phân cực thuận (p sang n)','Phân cực ngược','Cả hai chiều','Không bao giờ'], 0, 'Diode chỉ dẫn 1 chiều.'),
  ]),

  M(22, 'Chương 5 — Từ trường · Tương tác từ', [
    Q('Từ trường do?', ['Dòng điện hoặc nam châm sinh ra','Điện tích đứng yên','Trọng lực','Hạt nhân'], 0, 'Điện tích chuyển động.'),
    Q('Đường sức từ có hướng?', ['Từ N (cực bắc) sang S (cực nam) bên ngoài nam châm','Từ S sang N bên ngoài','Không có hướng','Bất kỳ'], 0, 'Bên ngoài: N → S.'),
    Q('Đường sức từ trong nam châm?', ['Từ S sang N','Từ N sang S','Không có','Vuông góc'], 0, 'Trong: S → N (khép kín).'),
    Q('Cảm ứng từ B có đơn vị?', ['Tesla (T)','V','A','Wb'], 0, 'T.'),
    Q('Quy tắc nắm tay phải cho dòng thẳng?', ['Ngón cái = chiều I, 4 ngón = chiều B','Ngón cái = B, 4 ngón = I','Không xác định','Tay trái'], 0, 'Nắm tay phải.'),
    Q('Từ trường đều có?', ['B không đổi (mọi điểm)','B tăng','B giảm','B = 0'], 0, 'B = const.'),
  ]),

  M(23, 'Lực từ tác dụng lên dây dẫn mang dòng', [
    Q('Công thức lực từ F = ?', ['F = B·I·l·sin(α)','F = B + I','F = B·l','F = I/B'], 0, 'F = BIlsinα.'),
    Q('Khi dây song song B thì F?', ['F = 0','F max','F = BIl','F = BI'], 0, 'sin0 = 0.'),
    Q('Khi dây vuông góc B thì F?', ['F = BIl (max)','F = 0','F = B + I','F = B/I'], 0, 'sin90° = 1.'),
    Q('Quy tắc bàn tay trái xác định?', ['Chiều lực từ','Chiều dòng','Chiều B','Cường độ dòng'], 0, 'Fleming.'),
    Q('Đơn vị B (cảm ứng từ)?', ['Tesla = N/(A·m)','V','C','Wb'], 0, 'T = N/(A·m).'),
    Q('Lực Lo-ren-xơ trên hạt mang điện q chuyển động v trong B?', ['F = q·v·B·sin(α)','F = q·v','F = q·B','F = v/B'], 0, 'F_Lorentz.'),
  ]),

  M(24, 'Từ trường của dòng điện trong các dạng dây', [
    Q('Cảm ứng từ B do dòng thẳng dài (cách dây r)?', ['B = 2·10⁻⁷·I/r','B = 2π·I·r','B = I·r','B = I + r'], 0, 'B = μ₀I/(2πr).'),
    Q('B tại tâm vòng dây tròn bán kính R, dòng I?', ['B = 2π·10⁻⁷·I/R','B = 2·10⁻⁷·I·R','B = I/R','B = 0'], 0, 'B = μ₀I/(2R).'),
    Q('B trong ống dây dài (n vòng/đv dài)?', ['B = 4π·10⁻⁷·n·I','B = 2·10⁻⁷·I','B = I/n','B = n·I·r'], 0, 'B = μ₀nI (đều bên trong).'),
    Q('Từ trường trong ống dây dài có đặc điểm?', ['Đều, song song trục','Không đều','Bằng 0','Vuông góc trục'], 0, 'B đều bên trong.'),
    Q('Nguyên lý chồng chất từ trường?', ['Tổng vectơ các B thành phần','Tổng đại số','Tích','Hiệu'], 0, 'B = ΣB_i (vectơ).'),
    Q('Hai dây song song cùng chiều dòng?', ['Hút nhau','Đẩy nhau','Không tác dụng','Vuông góc'], 0, 'Cùng chiều → hút.'),
  ]),

  M(25, 'Chương 6 — Cảm ứng điện từ · Hiện tượng', [
    Q('Hiện tượng cảm ứng điện từ?', ['Suất điện động xuất hiện khi từ thông biến thiên','Khi có điện trường','Khi nam châm đứng yên','Khi không có gì'], 0, 'Faraday phát hiện.'),
    Q('Từ thông Φ = ?', ['Φ = B·S·cos(α)','Φ = B + S','Φ = B/S','Φ = B·S²'], 0, 'Φ = BS·cosα.'),
    Q('Đơn vị từ thông?', ['Vê-be (Wb) = T·m²','Tesla','V','A'], 0, 'Wb.'),
    Q('Suất điện động cảm ứng e_c = ?', ['e_c = -dΦ/dt','e_c = Φ·t','e_c = Φ/t','e_c = B·S'], 0, 'Định luật Faraday.'),
    Q('Dấu trừ trong công thức Faraday phản ánh?', ['Định luật Lenz','Định luật Ohm','Định luật Coulomb','Định luật Ampe'], 0, 'Định luật Lenz.'),
    Q('Định luật Lenz: dòng cảm ứng có chiều?', ['Chống lại sự biến thiên từ thông gây ra nó','Cùng chiều với biến thiên','Bất kỳ','Vuông góc'], 0, 'Bảo toàn năng lượng.'),
  ]),

  M(26, 'Suất điện động cảm ứng trong đoạn dây chuyển động', [
    Q('Đoạn dây l chuyển động đều v vuông góc B?', ['e_c = B·v·l','e_c = B·v','e_c = B·l','e_c = v·l'], 0, 'e_c = Blv.'),
    Q('Quy tắc bàn tay phải xác định?', ['Chiều dòng điện cảm ứng','Chiều B','Chiều v','Chiều F'], 0, 'Tay phải: ngón → chiều e_c.'),
    Q('Khi dây song song với v thì e_c?', ['= 0','Max','Trung bình','Vô cùng'], 0, 'Không cắt đường sức.'),
    Q('Bản chất e_c trong đoạn dây chuyển động?', ['Lực Lo-ren-xơ tác dụng lên electron','Lực Coulomb','Lực hấp dẫn','Lực ma sát'], 0, 'qvB → tách điện tích.'),
    Q('Ứng dụng cảm ứng điện từ?', ['Máy phát điện, máy biến áp','Tủ lạnh','Đèn LED','Tụ điện'], 0, 'Generator, transformer.'),
    Q('Dòng Foucault (Eddy current) là?', ['Dòng cảm ứng trong khối kim loại','Dòng trong dây','Dòng tĩnh','Dòng quang điện'], 0, 'Trong lõi sắt.'),
  ]),

  M(27, 'Tự cảm', [
    Q('Hiện tượng tự cảm là?', ['Cảm ứng do chính dòng trong mạch biến thiên','Do mạch khác','Do nam châm','Do nhiệt'], 0, 'Tự gây cảm ứng.'),
    Q('Hệ số tự cảm L của ống dây = ?', ['L = 4π·10⁻⁷·n²·V','L = B·S','L = I·t','L = Φ/I'], 0, 'L = μ₀n²V (cuộn dài).'),
    Q('Đơn vị tự cảm?', ['Henry (H)','Wb','T','F'], 0, 'H = Wb/A.'),
    Q('Suất điện động tự cảm e_tc = ?', ['e_tc = -L·dI/dt','e_tc = L·I','e_tc = L/I','e_tc = L·t'], 0, 'e = -L·di/dt.'),
    Q('Năng lượng từ trường trong cuộn cảm?', ['W = ½·L·I²','W = L·I','W = L/I','W = ½·L/I'], 0, 'W = ½LI².'),
    Q('Khi đóng/ngắt mạch có cuộn cảm, ta thấy?', ['Tia lửa điện ở khoá K','Mạch ngắt ngay','Không có hiện tượng','Đèn tắt từ từ'], 0, 'Suất điện động tự cảm lớn.'),
  ]),

  M(28, 'Bài tập tổng hợp dao động điều hoà', [
    Q('Vật DĐĐH x = 5·cos(2πt + π/3) cm. Biên độ?', ['5 cm','2π cm','π/3 cm','1 cm'], 0, 'A = 5 cm.'),
    Q('Vật DĐĐH ω = 2π rad/s. Chu kỳ T?', ['1 s','2π s','½ s','π s'], 0, 'T = 2π/ω = 1 s.'),
    Q('vmax của x=5cos(10t) cm là?', ['50 cm/s','5 cm/s','10 cm/s','25 cm/s'], 0, 'vmax = Aω = 5·10.'),
    Q('Con lắc lò xo k=100 N/m, m=1 kg. ω?', ['10 rad/s','100 rad/s','1 rad/s','50 rad/s'], 0, 'ω = √(k/m) = 10.'),
    Q('Con lắc đơn l=1m, g=π² m/s². T?', ['2 s','1 s','π s','4 s'], 0, 'T = 2π·√(l/g) = 2π·√(1/π²) = 2.'),
    Q('A=4 cm, ω=π rad/s. amax?', ['4π² cm/s²','4 cm/s²','π² cm/s²','16 cm/s²'], 0, 'amax = Aω² = 4π².'),
  ]),

  M(29, 'Bài tập điện học', [
    Q('Hai điện tích q₁=q₂=1μC cách r=1m trong không khí. F?', ['9·10⁻³ N','9·10⁹ N','1·10⁻⁶ N','1·10⁹ N'], 0, 'F = k|q₁q₂|/r² = 9·10⁹·10⁻¹² = 9·10⁻³.'),
    Q('Tụ C=10μF tích U=10V. Q?', ['10⁻⁴ C','10⁻⁶ C','10⁻¹ C','1 C'], 0, 'Q = CU = 10·10⁻⁶·10 = 10⁻⁴.'),
    Q('Điện trở 10Ω có U=20V. I?', ['2 A','0,5 A','10 A','20 A'], 0, 'I = U/R = 2.'),
    Q('E=12V, r=1Ω, R=5Ω. I?', ['2 A','12 A','5 A','1 A'], 0, 'I = E/(R+r) = 12/6 = 2.'),
    Q('P=UI=100W, U=10V. I?', ['10 A','1 A','100 A','0,1 A'], 0, 'I = 10.'),
    Q('Năng lượng tụ C=2μF, U=100V?', ['10⁻² J','2·10⁻⁴ J','1 J','10⁻⁶ J'], 0, 'W = ½CU² = 0,5·2·10⁻⁶·10⁴ = 10⁻².'),
  ]),

  M(30, 'Bài tập sóng cơ và sóng âm', [
    Q('Sóng có v=10 m/s, f=5 Hz. λ?', ['2 m','50 m','½ m','0,2 m'], 0, 'λ = v/f = 2.'),
    Q('Sóng âm trong nước v ≈ 1500 m/s. f=750Hz. λ?', ['2 m','1500 m','750 m','0,5 m'], 0, 'λ = v/f.'),
    Q('Dây 2 đầu cố định l=1m có 3 bó sóng. λ?', ['2/3 m','1 m','3 m','½ m'], 0, 'l = k·λ/2 → λ = 2l/k = 2/3.'),
    Q('Mức cường độ âm L=60dB. I/I₀?', ['10⁶','60','600','100'], 0, 'L = 10log(I/I₀) → I/I₀ = 10⁶.'),
    Q('Tăng I lên 100 lần, L tăng?', ['20 dB','100 dB','2 dB','10 dB'], 0, '10·log100 = 20.'),
    Q('Hai sóng giao thoa cực đại, hiệu đường đi?', ['k·λ','(k+½)λ','0','λ/2'], 0, 'k·λ.'),
  ]),

  M(31, 'Bài tập từ trường và cảm ứng điện từ', [
    Q('Dây dẫn thẳng dài I=10A. Cảm ứng B tại r=10cm?', ['2·10⁻⁵ T','2·10⁻⁷ T','10 T','0 T'], 0, 'B = 2·10⁻⁷·I/r = 2·10⁻⁷·10/0,1 = 2·10⁻⁵.'),
    Q('Lực từ trên dây l=1m, I=5A, B=0,2T vuông góc?', ['1 N','0,2 N','5 N','10 N'], 0, 'F = BIl = 0,2·5·1 = 1.'),
    Q('Khung dây N=100 vòng, S=0,01 m², ΔB=0,1T trong Δt=1s. e?', ['0,1 V','1 V','10 V','100 V'], 0, 'e = N·dΦ/dt = 100·0,01·0,1 = 0,1.'),
    Q('Hai dây song song cùng chiều cách 10cm, mỗi dây 10A. Lực/đv dài?', ['2·10⁻⁴ N/m (hút)','2·10⁻⁵ N/m','2·10⁻⁷ N/m','0'], 0, 'F/l = 2·10⁻⁷·I₁I₂/r.'),
    Q('Cuộn cảm L=0,5H, dI/dt = 2A/s. e_tc?', ['1 V','0,5 V','2 V','0 V'], 0, 'e = L·di/dt = 0,5·2 = 1.'),
    Q('Năng lượng cuộn cảm L=1H, I=2A?', ['2 J','1 J','½ J','4 J'], 0, 'W = ½LI² = ½·1·4 = 2.'),
  ]),

  M(32, 'Bài tập tổng hợp Chương 1–6', [
    Q('Con lắc lò xo tăng m gấp 4 thì T?', ['Tăng 2 lần','Tăng 4 lần','Giảm 2','Không đổi'], 0, 'T ~ √m.'),
    Q('Định luật Coulomb F ~ ?', ['1/r²','r','r²','1/r'], 0, 'Nghịch đảo bình phương.'),
    Q('Ohm toàn mạch I = ?', ['E/(R+r)','E/R','U/r','E·R'], 0, 'I = E/(R+r).'),
    Q('Bán dẫn loại n hạt tải đa số?', ['Electron','Lỗ trống','Ion','Proton'], 0, 'n: electron.'),
    Q('Định luật Lenz: dòng cảm ứng?', ['Chống lại biến thiên từ thông','Cùng chiều','Không liên quan','Vuông góc'], 0, 'Bảo toàn năng lượng.'),
    Q('Tần số riêng của con lắc đơn phụ thuộc?', ['l và g','m','Biên độ','v ban đầu'], 0, 'f không phụ thuộc m.'),
  ]),

  M(33, 'Review HK2 — Dòng điện trong môi trường', [
    Q('Dòng điện trong kim loại là dòng?', ['Electron','Ion','Proton','Photon'], 0, 'Electron.'),
    Q('Dòng điện trong dung dịch điện phân?', ['Ion + và -','Electron','Proton','Photon'], 0, 'Ion.'),
    Q('Bán dẫn p hạt tải đa số?', ['Lỗ trống','Electron','Ion','Proton'], 0, 'Lỗ trống.'),
    Q('Định luật Faraday I?', ['m = k·q','m = k/q','q = k·m','m = k+q'], 0, 'm tỉ lệ q.'),
    Q('Siêu dẫn xảy ra T?', ['T < Tc','T > Tc','T = 0','Mọi T'], 0, 'Dưới nhiệt độ tới hạn.'),
    Q('Ứng dụng điện phân?', ['Mạ điện','Tủ lạnh','Đèn LED','Tụ điện'], 0, 'Mạ điện, tinh chế kim loại.'),
  ]),

  M(34, 'Review HK2 — Từ trường & Cảm ứng điện từ', [
    Q('Cảm ứng từ B đo bằng?', ['Tesla (T)','Vôn','Ampe','Henry'], 0, 'T.'),
    Q('Lực từ F = ?', ['BIlsinα','UI','qv','½CU²'], 0, 'F = BIlsinα.'),
    Q('Từ thông Φ = ?', ['B·S·cosα','B·S','B/S','B+S'], 0, 'Φ = BS·cosα.'),
    Q('Hệ số tự cảm đơn vị?', ['Henry (H)','Wb','T','F'], 0, 'H.'),
    Q('Suất điện động cảm ứng tỉ lệ với?', ['dΦ/dt','Φ','t','B'], 0, 'e = -dΦ/dt.'),
    Q('Định luật Lenz nói về?', ['Chiều dòng cảm ứng','Độ lớn lực','Năng lượng','Tần số'], 0, 'Chiều.'),
  ]),

  M(35, 'Thi học kỳ — Tổng ôn', [
    Q('DĐĐH có x = A·cos(ωt+φ). Năng lượng?', ['½kA² = ½mω²A²','½kA','m·A','ω·A'], 0, 'W = ½kA² const.'),
    Q('Sóng cơ truyền nhanh nhất trong?', ['Rắn','Lỏng','Khí','Chân không'], 0, 'Rắn (chân không không truyền).'),
    Q('Cường độ điện trường E = ?', ['F/q','F·q','q/F','k·q²'], 0, 'E = F/q.'),
    Q('Tụ điện tích năng lượng?', ['Điện trường','Từ trường','Trọng trường','Cơ học'], 0, 'Năng lượng điện trường.'),
    Q('Cuộn cảm tích năng lượng?', ['Từ trường','Điện trường','Trọng trường','Cơ học'], 0, 'Từ trường.'),
    Q('Dòng điện không đổi I = ?', ['q/t','q·t','U+R','E·t'], 0, 'I = q/t.'),
  ]),
];

export const H11LY_SCENARIOS = indexBy(H11LY_WEEKS);
