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
    Q('Dao động điều hoà là dao động trong đó li độ biến thiên theo?', ['Hàm cos (hoặc sin) theo thời gian', 'Hàm bậc nhất', 'Hàm mũ', 'Hàm logarit'], 0, 'x = A·cos(ωt+φ).'),
    Q('Phương trình tổng quát của dao động điều hoà?', ['x = A·cos(ωt + φ)', 'x = A + ωt', 'x = A·t', 'x = ω·t'], 0, 'Định nghĩa.'),
    Q('Biên độ A là?', ['Gia tốc cực đại', 'Li độ cực đại', 'Tốc độ cực đại', 'Pha ban đầu'], 1, 'A = |x|max.'),
    Q('Chu kỳ T và tần số góc ω liên hệ?', ['T = ω/2π', 'T = 2π/ω', 'T = ω·2π', 'T = 1/ω'], 1, 'T = 2π/ω.'),
    Q('Tần số f và chu kỳ T?', ['f = 2T', 'f = 2π·T', 'f = T/2π', 'f = 1/T'], 3, 'f = 1/T (Hz).'),
    Q('Pha ban đầu φ xác định?', ['Vị trí và chiều chuyển động lúc t=0', 'Tần số', 'Biên độ', 'Chu kỳ'], 0, 'φ ↔ trạng thái ban đầu.'),
  ]),

  M(2, 'Vận tốc - gia tốc trong dao động điều hoà', [
    Q('Vận tốc v(t) của dao động x=A·cos(ωt+φ)?', ['v = Aω·cos(ωt+φ)', 'v = -A·cos(ωt+φ)', 'v = A·cos(ωt+φ)', 'v = -Aω·sin(ωt+φ)'], 3, 'Đạo hàm x theo t.'),
    Q('Gia tốc a(t) của dao động x = A·cos(ωt+φ)?', ['a = Aω²·cos', 'a = A·sin', 'a = -Aω²·cos(ωt+φ) = -ω²x', 'a = -A·sin'], 2, 'a = x\'\' = -ω²x.'),
    Q('Tốc độ cực đại vmax?', ['Aω', 'ωA²', 'Aω² (nhầm với amax)', 'A/ω'], 0, 'vmax = Aω (khi x=0).'),
    Q('Gia tốc cực đại amax?', ['Aω (nhầm với vmax)', 'ω²/A', 'Aω²', 'A²ω'], 2, 'amax = Aω² (khi x=±A).'),
    Q('Khi vật ở vị trí cân bằng (x=0), gia tốc bằng?', ['-amax', '0', 'amax (cực đại ở biên)', 'Aω (đây là vmax)'], 1, 'a = -ω²x = 0.'),
    Q('Quan hệ giữa a và x trong dao động điều hoà?', ['Lệch π/4', 'Cùng pha', 'Lệch π/2', 'Ngược pha (a = -ω²x)'], 3, 'a luôn ngược dấu x.'),
  ]),

  M(3, 'Năng lượng dao động điều hoà', [
    Q('Cơ năng W của dao động điều hoà = ?', ['½·m·v²max', 'm·ω²·A', '½·m·ω²·A² = ½·k·A²', 'k·A'], 2, 'W = ½kA².'),
    Q('Động năng Wđ = ?', ['½·k·x²', '½·k·v²', '½·m·v²', 'm·v² (quên hệ số ½)'], 2, 'Wđ = ½mv².'),
    Q('Thế năng Wt = ?', ['½·m·x² (thiếu hệ số k)', 'k·x² (quên hệ số ½)', '½·k·x² = ½·m·ω²·x²', '½·m·v²'], 2, 'Wt = ½kx².'),
    Q('Cơ năng có đặc điểm?', ['Tăng dần', 'Bảo toàn (không đổi)', 'Giảm dần', 'Dao động'], 1, 'W = Wđ + Wt = const.'),
    Q('Tại biên (x=±A): Wđ và Wt ?', ['Bằng nhau', 'Wđ=0, Wt=Wmax', 'Bằng 0', 'Wđ=max, Wt=0'], 1, 'Biên: v=0 → Wđ=0.'),
    Q('Tại cân bằng (x=0): Wđ và Wt ?', ['Wđ=max, Wt=0', 'Bằng nhau', 'Wđ=0, Wt=max', 'Bằng 0'], 0, 'Cân bằng: v=vmax → Wđ=max.'),
  ]),

  M(4, 'Con lắc lò xo', [
    Q('Tần số góc ω của con lắc lò xo (k, m)?', ['ω = √(m/k)', 'ω = k·m', 'ω = √(k/m)', 'ω = k/m'], 2, 'ω = √(k/m).'),
    Q('Chu kỳ T của con lắc lò xo?', ['T = m/k', 'T = 2π·√(k/m)', 'T = 2π·√(m/k)', 'T = √(k/m)'], 2, 'T = 2π·√(m/k).'),
    Q('Tăng khối lượng m gấp 4 lần thì T thay đổi?', ['Tăng 2 lần', 'Không đổi', 'Giảm 2 lần', 'Tăng 4 lần'], 0, 'T ~ √m.'),
    Q('Tăng độ cứng k gấp 4 lần thì f thay đổi?', ['Tăng 4 lần', 'Không đổi', 'Giảm 2 lần', 'Tăng 2 lần'], 3, 'f ~ √k.'),
    Q('Con lắc lò xo nằm ngang: lực hồi phục?', ['F = m·a', 'F = -k·x', 'F = k·x', 'F = m·g'], 1, 'F hồi phục.'),
    Q('Con lắc lò xo treo thẳng đứng có tần số dao động nhỏ phụ thuộc?', ['k và m', 'k và g', 'm và g', 'k, m và g (con lắc đứng)'], 0, 'ω = √(k/m) không phụ thuộc g.'),
  ]),

  M(5, 'Con lắc đơn', [
    Q('Chu kỳ con lắc đơn (l, g)?', ['T = √(l·g)', 'T = l/g', 'T = 2π·√(l/g)', 'T = 2π·√(g/l)'], 2, 'T = 2π·√(l/g).'),
    Q('Tăng chiều dài l gấp 4 lần thì T?', ['Không đổi', 'Tăng 2 lần', 'Giảm 2 lần', 'Tăng 4 lần'], 1, 'T ~ √l.'),
    Q('Chu kỳ con lắc đơn phụ thuộc?', ['Vận tốc', 'Chiều dài và g', 'Khối lượng', 'Biên độ'], 1, 'Không phụ thuộc m hay biên độ nhỏ.'),
    Q('Điều kiện để con lắc đơn dao động điều hoà?', ['Chiều dài lớn', 'Biên độ góc nhỏ (sinα ≈ α)', 'Biên độ lớn', 'Khối lượng nhỏ'], 1, 'Xấp xỉ điều hoà khi α nhỏ.'),
    Q('Con lắc đơn đưa lên cao (g giảm), chu kỳ?', ['Tăng', 'Giảm (nhầm vì T~√g)', 'Không xác định', 'Không đổi'], 0, 'T ~ 1/√g.'),
    Q('Lực hồi phục con lắc đơn (biên độ nhỏ)?', ['F = m·a', 'F = k·x', 'F = mg', 'F ≈ -mg·sinα ≈ -mg·s/l'], 3, 'F ≈ -(mg/l)·s.'),
  ]),

  M(6, 'Dao động tắt dần và dao động cưỡng bức', [
    Q('Dao động tắt dần có đặc điểm?', ['Tần số tăng', 'Biên độ không đổi', 'Biên độ tăng', 'Biên độ giảm dần theo thời gian'], 3, 'Do ma sát.'),
    Q('Nguyên nhân của dao động tắt dần?', ['Lực hồi phục', 'Không nguyên nhân', 'Lực ma sát/cản', 'Lực hấp dẫn'], 2, 'Ma sát tiêu hao cơ năng.'),
    Q('Dao động cưỡng bức là?', ['Dao động tắt dần', 'Dao động tổng hợp', 'Dao động dưới tác dụng của ngoại lực tuần hoàn', 'Dao động tự do'], 2, 'Có ngoại lực F = F₀·cos(Ωt).'),
    Q('Hiện tượng cộng hưởng xảy ra khi?', ['Tần số ngoại lực ≈ tần số riêng', 'Tần số rất lớn', 'Không liên quan', 'Tần số rất nhỏ'], 0, 'Ω = ω₀ → biên độ max.'),
    Q('Ứng dụng cộng hưởng?', ['Đèn LED', 'Máy tính', 'Tủ lạnh', 'Hộp đàn ghi-ta, máy đo địa chấn'], 3, 'Cộng hưởng âm.'),
    Q('Tác hại của cộng hưởng?', ['Sập cầu, hỏng máy móc', 'Chỉ làm âm thanh to hơn', 'Tăng âm lượng', 'Tiết kiệm năng lượng'], 0, 'Tacoma 1940.'),
  ]),

  M(7, 'Sóng cơ — Khái niệm và phương trình', [
    Q('Sóng cơ là?', ['Sóng radio', 'Ánh sáng', 'Sóng điện từ', 'Dao động lan truyền trong môi trường vật chất'], 3, 'Cần môi trường.'),
    Q('Sóng ngang là sóng có phương dao động?', ['Không xác định', 'Tạo với phương truyền 1 góc 45°', 'Vuông góc phương truyền', 'Cùng phương truyền'], 2, 'Sóng trên dây = ngang.'),
    Q('Sóng dọc là sóng có phương dao động?', ['Cùng phương truyền', 'Vuông góc', 'Vuông góc phương truyền', 'Hợp với phương truyền góc 60°'], 0, 'Sóng âm trong không khí = dọc.'),
    Q('Bước sóng λ là?', ['Quãng đường sóng đi trong 1 chu kỳ', 'Tần số', 'Vận tốc', 'Biên độ'], 0, 'λ = v·T.'),
    Q('Vận tốc truyền sóng v?', ['v = λ - T', 'v = λ + f', 'v = T/λ', 'v = λ·f = λ/T'], 3, 'v = λf.'),
    Q('Tần số sóng phụ thuộc?', ['Bước sóng', 'Môi trường', 'Nguồn dao động', 'Biên độ'], 2, 'f = f nguồn (không đổi khi qua môi trường khác).'),
  ]),

  M(8, 'Giao thoa sóng', [
    Q('Điều kiện giao thoa sóng?', ['Khác biên độ', 'Hai nguồn kết hợp (cùng tần số, hiệu pha không đổi)', 'Khác tần số', 'Khác phương'], 1, 'Hai nguồn coherent.'),
    Q('Điểm cực đại giao thoa: hiệu đường đi?', ['d₂-d₁ = λ/4', 'd₂-d₁ = k·λ', 'd₂-d₁ = (k+½)λ', 'd₂-d₁ = 0'], 1, 'Cực đại: bậc k·λ.'),
    Q('Điểm cực tiểu giao thoa: hiệu đường đi?', ['d₂-d₁ = k·λ', 'd₂-d₁ = (k+½)·λ', 'd₂-d₁ = λ', 'd₂-d₁ = 0'], 1, 'Cực tiểu: bậc bán nguyên.'),
    Q('Hai sóng gặp nhau cùng pha tạo điểm?', ['Cực đại (biên độ cộng)', 'Không đổi', 'Cực tiểu', 'Triệt tiêu'], 0, 'Cộng tăng cường.'),
    Q('Hai sóng gặp nhau ngược pha tạo điểm?', ['Tăng cường', 'Cực đại', 'Cực tiểu (triệt tiêu)', 'Không đổi'], 2, 'Ngược pha → triệt tiêu.'),
    Q('Số đường cực đại trên đoạn S₁S₂ (S₁S₂=d, λ)?', ['k bất kỳ', 'Khoảng -d/λ ≤ k ≤ d/λ (k nguyên)', 'Không tính được', 'Chỉ duy nhất k = 0'], 1, 'Bậc nguyên thoả d₁-d₂.'),
  ]),

  M(9, 'Sóng dừng', [
    Q('Sóng dừng tạo ra do?', ['Sóng đơn lẻ', 'Sóng tắt dần', 'Hai sóng khác tần số', 'Giao thoa sóng tới và sóng phản xạ'], 3, 'Tới + phản xạ.'),
    Q('Điểm nút trong sóng dừng?', ['Điểm dao động max', 'Điểm không dao động', 'Điểm bất kỳ', 'Điểm dao động trung bình'], 1, 'Nút: biên độ = 0.'),
    Q('Điểm bụng trong sóng dừng?', ['Điểm bất kỳ', 'Điểm trung bình', 'Điểm dao động biên độ cực đại', 'Điểm không dao động'], 2, 'Bụng: biên độ max.'),
    Q('Khoảng cách giữa 2 nút liên tiếp?', ['λ/4 (nút–bụng kề nhau)', 'λ/2', '2λ', 'λ (một bước sóng đầy đủ)'], 1, 'Nút cách nút = λ/2.'),
    Q('Dây 2 đầu cố định, chiều dài l, có sóng dừng khi?', ['l = k·λ', 'l = k·λ/2', 'l = (k+½)·λ/2', 'l = λ/4'], 1, 'l = k·λ/2 (k = số bó sóng).'),
    Q('Dây 1 đầu cố định, 1 đầu tự do?', ['l = k·λ/2', 'l = (k+½)·λ/2 = (2k+1)·λ/4', 'l = λ/2', 'l = k·λ'], 1, 'l = (2k+1)·λ/4.'),
  ]),

  M(10, 'Sóng âm và đặc trưng âm', [
    Q('Sóng âm trong không khí là sóng?', ['Ngang', 'Không xác định', 'Sóng mặt nước', 'Dọc'], 3, 'Sóng âm = sóng dọc trong khí/lỏng.'),
    Q('Vận tốc âm trong không khí (ở 20°C)?', ['~3×10⁸ m/s', '~340 m/s', '~10 m/s', '~1500 m/s'], 1, 'Khoảng 340 m/s.'),
    Q('Tai người nghe được tần số?', ['< 16 Hz', '20 Hz – 200 Hz', '> 30 000 Hz', '16 Hz – 20 000 Hz'], 3, 'Dải nghe được.'),
    Q('Hạ âm là âm có tần số?', ['> 20 000 Hz', '< 16 Hz', '16–20000 Hz', '100 Hz'], 1, 'Hạ âm.'),
    Q('Siêu âm là âm có tần số?', ['100 Hz', '< 16 Hz', '16–20 000 Hz', '> 20 000 Hz'], 3, 'Siêu âm.'),
    Q('Đặc trưng sinh lý của âm gồm?', ['Vận tốc', 'Năng lượng', 'Bước sóng', 'Độ cao, độ to, âm sắc'], 3, '3 đặc trưng sinh lý.'),
  ]),

  M(11, 'Mức cường độ âm', [
    Q('Mức cường độ âm L (dB) = ?', ['log(I·I₀)', '10·log(I/I₀)', 'log(I)', '10·I'], 1, 'L = 10·log(I/I₀), I₀=10⁻¹² W/m².'),
    Q('Đơn vị mức cường độ âm?', ['W/m² (đơn vị cường độ I)', 'm/s (đơn vị vận tốc sóng)', 'Hz (đơn vị tần số)', 'Đề-xi-ben (dB)'], 3, 'dB.'),
    Q('Tăng I lên 10 lần thì L tăng?', ['1 dB', '10 dB', '2 dB', '100 dB'], 1, '10·log10 = 10 dB.'),
    Q('I₀ = ngưỡng nghe = ?', ['10⁻³ W/m²', '10⁻¹² W/m²', '1 W/m²', '10⁻⁶ W/m²'], 1, 'Quy ước.'),
    Q('Ngưỡng đau khoảng?', ['~200 dB', '~60 dB', '~130 dB', '~30 dB'], 2, '~130 dB.'),
    Q('Độ to của âm liên quan?', ['Tần số', 'Âm sắc', 'Vận tốc', 'Cường độ âm'], 3, 'Cường độ âm.'),
  ]),

  M(12, 'Chương 2 — Điện tích · Định luật Coulomb', [
    Q('Định luật Coulomb cho lực giữa 2 điện tích điểm?', ['F = k·q/r', 'F = q·r', 'F = q₁ + q₂', 'F = k·|q₁q₂|/r²'], 3, 'F = k|q₁q₂|/r².'),
    Q('Hằng số Coulomb k trong chân không?', ['9·10⁹ N·m²/C²', '6,67·10⁻¹¹', '1,6·10⁻¹⁹', '3·10⁸'], 0, 'k ≈ 9·10⁹.'),
    Q('Hai điện tích cùng dấu sẽ?', ['Đẩy nhau', 'Trung hoà', 'Không tác dụng', 'Hút nhau'], 0, 'Cùng dấu → đẩy.'),
    Q('Hai điện tích trái dấu thì?', ['Đẩy nhau', 'Hút nhau', 'Trung hoà', 'Không tác dụng'], 1, 'Trái dấu → hút.'),
    Q('Tăng khoảng cách r gấp đôi, F thay đổi?', ['Giảm 4 lần', 'Giảm 2 lần', 'Tăng 4 lần', 'Không đổi'], 0, 'F ~ 1/r².'),
    Q('Hằng số điện môi ε của không khí ≈ ?', ['1/9', '10', '1', '9'], 2, 'ε không khí ≈ 1.'),
  ]),

  M(13, 'Điện trường và cường độ điện trường', [
    Q('Cường độ điện trường E là?', ['E = k·q', 'E = F/q (lực trên đơn vị điện tích)', 'E = q/F', 'E = F·q'], 1, 'E = F/q.'),
    Q('Đơn vị của E?', ['V/m hoặc N/C', 'N/m (đơn vị độ cứng k)', 'J/C (đơn vị hiệu điện thế)', 'C/m (mật độ điện tích dài)'], 0, 'V/m = N/C.'),
    Q('Cường độ điện trường do điện tích Q gây ra tại r?', ['E = Q·r', 'E = k·r/Q', 'E = k·Q/r', 'E = k·|Q|/r²'], 3, 'E = k|Q|/r².'),
    Q('Đường sức điện hướng từ?', ['Vuông góc với đường nối các điện tích', 'Không có hướng', 'Dương sang âm', 'Âm sang dương'], 2, 'Đường sức từ (+) → (-).'),
    Q('Trong điện trường đều, E?', ['Tăng theo r', 'Bằng 0', 'Giảm theo r', 'Không đổi (mọi điểm)'], 3, 'Điện trường đều: E = const.'),
    Q('Nguyên lý chồng chất: E tổng?', ['Hiệu vectơ E₁ − E₂', 'Tích vô hướng E₁·E₂', 'Tổng đại số', 'Tổng vectơ các E thành phần'], 3, 'E = ΣE_i (vectơ).'),
  ]),

  M(14, 'Điện thế - Hiệu điện thế - Công của lực điện', [
    Q('Công của lực điện A = ?', ['A = q/E', 'A = q·E·d (điện trường đều)', 'A = q·r', 'A = E·r'], 1, 'A = qEd.'),
    Q('Hiệu điện thế U giữa 2 điểm = ?', ['U = A·q', 'U = q/A', 'U = E·q', 'U = A/q'], 3, 'U = A/q (V).'),
    Q('Đơn vị điện thế?', ['J/m (đơn vị lực·khoảng cách)', 'Vôn (V)', 'N/m (độ cứng lò xo)', 'Cu-lông (C) (đơn vị điện tích)'], 1, 'V = J/C.'),
    Q('Mối liên hệ E và U (điện trường đều, khoảng cách d)?', ['U = E·d', 'U = E·d²', 'U = E + d', 'U = E/d'], 0, 'U = Ed.'),
    Q('Điện thế V tại điểm M (chọn ∞ là 0)?', ['V = Q·r', 'V = E·r²', 'V_M = k·Q/r', 'V = k·r/Q'], 2, 'V do điện tích điểm.'),
    Q('Công của lực điện không phụ thuộc?', ['Điện trường', 'Điểm đầu/cuối', 'Hình dạng đường đi', 'Điện tích'], 2, 'Lực điện = lực bảo toàn.'),
  ]),

  M(15, 'Tụ điện', [
    Q('Điện dung C của tụ điện = ?', ['C = Q + U', 'C = Q/U', 'C = U/Q', 'C = Q·U'], 1, 'C = Q/U.'),
    Q('Đơn vị điện dung?', ['V (đơn vị điện thế)', 'Ω (đơn vị điện trở)', 'Fara (F)', 'C (đơn vị điện tích)'], 2, 'F = C/V.'),
    Q('Tụ điện phẳng: C = ?', ['C = S·d', 'C = ε/d', 'C = U/d', 'C = ε·S/(4π·k·d) = ε·ε₀·S/d'], 3, 'C ~ S/d.'),
    Q('Năng lượng tụ điện W = ?', ['W = ½·Q·U²', 'W = C·U', 'W = ½·C·U² = Q²/(2C)', 'W = Q·U'], 2, 'W = ½CU² = ½QU.'),
    Q('Tụ nối tiếp: 1/C_b = ?', ['C₁ - C₂', '1/C₁ + 1/C₂ + …', 'C₁ · C₂', 'C₁ + C₂'], 1, 'Nối tiếp: nghịch đảo cộng.'),
    Q('Tụ song song: C_b = ?', ['1/C₁ + 1/C₂', 'C₁ + C₂ + …', 'C₁·C₂/(C₁+C₂)', '|C₁ − C₂|'], 1, 'Song song: cộng C.'),
  ]),

  M(16, 'Chương 3 — Dòng điện không đổi · Định luật Ohm cho đoạn mạch', [
    Q('Cường độ dòng điện I = ?', ['I = E/R', 'I = U·R', 'I = q·t', 'I = q/t'], 3, 'I = q/t (A).'),
    Q('Định luật Ohm đoạn mạch: U = ?', ['U = I - R', 'U = I + R', 'U = I·R', 'U = I/R'], 2, 'U = IR.'),
    Q('Điện trở mắc nối tiếp: R_b = ?', ['1/R₁ + 1/R₂', 'R₁·R₂/(R₁+R₂)', '|R₁ − R₂|', 'R₁ + R₂ + …'], 3, 'Nối tiếp: cộng R.'),
    Q('Điện trở mắc song song: 1/R_b = ?', ['R₁·R₂/(R₁+R₂)', 'R₁ - R₂', 'R₁ + R₂', '1/R₁ + 1/R₂ + …'], 3, 'Song song: nghịch đảo cộng.'),
    Q('Công của dòng điện A = ?', ['A = U/I·t', 'A = R·t', 'A = U·I·t', 'A = U + I + t'], 2, 'A = UIt.'),
    Q('Công suất P = ?', ['P = U + I', 'P = U/I', 'P = U·I·t', 'P = U·I = I²·R = U²/R'], 3, 'P = UI.'),
  ]),

  M(17, 'Định luật Ohm cho toàn mạch', [
    Q('Định luật Ohm cho toàn mạch?', ['I = E/R', 'I = E·R', 'I = U/r', 'I = E/(R + r)'], 3, 'I = E/(R+r), r = điện trở trong.'),
    Q('Suất điện động E của nguồn là?', ['Công của nguồn để đưa 1C qua mạch', 'Hiệu điện thế ngoài', 'Điện trở trong', 'Cường độ dòng'], 0, 'E = A/q (V).'),
    Q('Điện trở trong r là?', ['Tụ điện', 'Điện trở trong lòng nguồn', 'Điện trở dây dẫn', 'Điện trở mạch ngoài'], 1, 'r nội tại nguồn.'),
    Q('Hiệu điện thế mạch ngoài U?', ['U = I·r', 'U = E - I·r', 'U = E/I', 'U = E + I·r'], 1, 'U = E - Ir.'),
    Q('Khi đoản mạch (R=0)?', ['U = E (không sụt áp trong nguồn)', 'I = E/r (cực đại)', 'I = E/R', 'I = 0 (không có dòng điện)'], 1, 'I_đoản mạch.'),
    Q('Khi mạch hở (R=∞)?', ['U = 0, I = E/r', 'I = 0, U = E', 'I = E/r', 'I = ∞ (dòng vô hạn)'], 1, 'Không có dòng, U = E.'),
  ]),

  M(18, 'Review HK1 — Dao động, sóng, điện', [
    Q('Phương trình DĐĐH chuẩn?', ['x = A·cos(ωt + φ)', 'x = ω·t', 'x = A·sin(t)', 'x = A·t'], 0, 'Định nghĩa.'),
    Q('λ·f = ?', ['A (biên độ dao động)', 'T (chu kỳ sóng)', 'ω (tần số góc)', 'v'], 3, 'v = λf.'),
    Q('Định luật Coulomb: F ~ ?', ['r² (tỉ lệ thuận bình phương)', 'r (tỉ lệ thuận khoảng cách)', '1/r', '1/r²'], 3, 'F = k|q₁q₂|/r².'),
    Q('Định luật Ohm toàn mạch?', ['I = E·R', 'I = R+r', 'I = E/(R+r)', 'I = U/R'], 2, 'I = E/(R+r).'),
    Q('Năng lượng tụ?', ['C − U', '½CU²', 'CU (quên hệ số ½ và bình phương)', 'C + U'], 1, '½CU².'),
    Q('Sóng âm trong khí là sóng?', ['Dọc', 'Mặt (sóng truyền bề mặt)', 'Ngang (vuông góc phương truyền)', 'Vừa dọc vừa ngang'], 0, 'Sóng dọc.'),
  ]),

  // ──────────────── HK2 — Dòng điện trong môi trường, từ trường ────────────────
  M(19, 'Chương 4 — Dòng điện trong kim loại', [
    Q('Bản chất dòng điện trong kim loại?', ['Dòng neutron', 'Dòng electron tự do dịch chuyển', 'Dòng ion', 'Dòng proton'], 1, 'Electron tự do.'),
    Q('Điện trở suất kim loại phụ thuộc?', ['Điện áp', 'Khối lượng', 'Cường độ dòng', 'Nhiệt độ'], 3, 'ρ tăng theo T.'),
    Q('ρ(T) = ?', ['ρ₀·(1 + α·Δt)', 'ρ₀ + Δt', 'ρ₀·(1 - α·Δt)', 'ρ₀/(1 + α·Δt)'], 0, 'α là hệ số nhiệt điện trở.'),
    Q('Siêu dẫn xảy ra khi?', ['T < Tc (nhiệt độ tới hạn)', 'T rất cao (trên 1000 K)', 'Chỉ ở T = 0 K tuyệt đối', 'Ở mọi nhiệt độ phòng'], 0, 'Hg: Tc ≈ 4K.'),
    Q('Trong siêu dẫn ρ = ?', ['0', '∞ (cách điện hoàn toàn)', 'Hằng số', 'Tăng dần'], 0, 'ρ = 0.'),
    Q('Hiện tượng nhiệt điện?', ['Dòng do ma sát', 'Dòng quang điện', 'Suất điện động sinh do chênh nhiệt 2 đầu mối hàn', 'Dòng cảm ứng'], 2, 'Cặp nhiệt điện.'),
  ]),

  M(20, 'Dòng điện trong chất điện phân', [
    Q('Bản chất dòng điện trong chất điện phân?', ['Dòng proton', 'Dòng neutron', 'Dòng electron', 'Dòng ion dương và âm'], 3, 'Ion + và -.'),
    Q('Định luật Faraday I: m = ?', ['m = k+q', 'm = k/q', 'm = k·q', 'm = q/k'], 2, 'm tỉ lệ với q.'),
    Q('Định luật Faraday II: k = ?', ['k = (1/F)·(A/n)', 'k = F·A', 'k = F/n', 'k = n/A'], 0, 'F = 96 500 C/mol.'),
    Q('F (hằng số Faraday) = ?', ['9·10⁹', '6,67·10⁻¹¹', '96 500 C/mol', '1,6·10⁻¹⁹'], 2, '1 mol electron.'),
    Q('Ứng dụng điện phân?', ['Đèn LED', 'Tụ điện', 'Máy tính', 'Mạ điện, điều chế kim loại'], 3, 'Mạ Cu, điều chế Al.'),
    Q('m = (A·I·t)/(n·F) là dạng kết hợp?', ['Chỉ Faraday II', 'Chỉ Faraday I', 'Coulomb', 'Faraday I + II'], 3, 'Hai định luật.'),
  ]),

  M(21, 'Dòng điện trong chân không và bán dẫn', [
    Q('Dòng điện trong chân không là dòng?', ['Photon', 'Ion dương và ion âm', 'Proton', 'Electron phát ra từ catot nóng'], 3, 'Nhiệt electron.'),
    Q('Ứng dụng ống tia âm cực trước đây?', ['Máy giặt', 'Tivi CRT, dao động ký', 'Tủ lạnh', 'Đèn LED'], 1, 'CRT.'),
    Q('Hai loại bán dẫn?', ['Loại + và -', 'Loại n và loại p', 'Loại nóng và lạnh', 'Loại to và nhỏ'], 1, 'n (electron), p (lỗ trống).'),
    Q('Bán dẫn loại n có?', ['Lỗ trống đa số', 'Cả electron và lỗ trống bằng nhau', 'Ion đa số', 'Electron tự do là hạt tải đa số'], 3, 'Pha tạp P, As → loại n.'),
    Q('Bán dẫn loại p có?', ['Lỗ trống là hạt tải đa số', 'Cả electron và lỗ trống bằng nhau', 'Electron đa số', 'Ion đa số'], 0, 'Pha tạp B, Al → loại p.'),
    Q('Diode bán dẫn cho dòng đi qua khi?', ['Phân cực ngược', 'Phân cực thuận (p sang n)', 'Cả hai chiều', 'Không bao giờ'], 1, 'Diode chỉ dẫn 1 chiều.'),
  ]),

  M(22, 'Chương 5 — Từ trường · Tương tác từ', [
    Q('Từ trường do?', ['Hạt nhân', 'Trọng lực', 'Điện tích đứng yên', 'Dòng điện hoặc nam châm sinh ra'], 3, 'Điện tích chuyển động.'),
    Q('Đường sức từ có hướng?', ['Không có hướng', 'Từ N (cực bắc) sang S (cực nam) bên ngoài nam châm', 'Hướng vuông góc trục nam châm', 'Từ S sang N bên ngoài'], 1, 'Bên ngoài: N → S.'),
    Q('Đường sức từ trong nam châm?', ['Từ N sang S (giống bên ngoài)', 'Vuông góc', 'Từ S sang N', 'Từ N sang S'], 2, 'Trong: S → N (khép kín).'),
    Q('Cảm ứng từ B có đơn vị?', ['V (đơn vị hiệu điện thế)', 'Wb (đơn vị từ thông)', 'A (đơn vị cường độ dòng)', 'Tesla (T)'], 3, 'T.'),
    Q('Quy tắc nắm tay phải cho dòng thẳng?', ['Tay trái', 'Ngón cái = chiều I, 4 ngón = chiều B', 'Không xác định', 'Ngón cái = B, 4 ngón = I'], 1, 'Nắm tay phải.'),
    Q('Từ trường đều có?', ['B không đổi (mọi điểm)', 'B giảm', 'B = 0 (không có từ trường)', 'B tăng'], 0, 'B = const.'),
  ]),

  M(23, 'Lực từ tác dụng lên dây dẫn mang dòng', [
    Q('Công thức lực từ F = ?', ['F = I/B', 'F = B + I', 'F = B·l', 'F = B·I·l·sin(α)'], 3, 'F = BIlsinα.'),
    Q('Khi dây song song B thì F?', ['F max (cực đại bằng BIl)', 'F = BI', 'F = BIl', 'F = 0'], 3, 'sin0 = 0.'),
    Q('Khi dây vuông góc B thì F?', ['F = B + I', 'F = 0 (không có lực từ)', 'F = BIl (max)', 'F = B/I'], 2, 'sin90° = 1.'),
    Q('Quy tắc bàn tay trái xác định?', ['Chiều B', 'Chiều dòng', 'Cường độ dòng', 'Chiều lực từ'], 3, 'Fleming.'),
    Q('Đơn vị B (cảm ứng từ)?', ['V (đơn vị điện thế)', 'C (đơn vị điện tích)', 'Wb (đơn vị từ thông)', 'Tesla = N/(A·m)'], 3, 'T = N/(A·m).'),
    Q('Lực Lo-ren-xơ trên hạt mang điện q chuyển động v trong B?', ['F = q·v·B·sin(α)', 'F = v/B', 'F = q·v', 'F = q·B'], 0, 'F_Lorentz.'),
  ]),

  M(24, 'Từ trường của dòng điện trong các dạng dây', [
    Q('Cảm ứng từ B do dòng thẳng dài (cách dây r)?', ['B = 2π·I·r', 'B = 2·10⁻⁷·I/r', 'B = I·r', 'B = I + r'], 1, 'B = μ₀I/(2πr).'),
    Q('B tại tâm vòng dây tròn bán kính R, dòng I?', ['B = 2·10⁻⁷·I·R', 'B = 2π·10⁻⁷·I/R', 'B = μ₀·I·R/(2π)', 'B = I/R'], 1, 'B = μ₀I/(2R).'),
    Q('B trong ống dây dài (n vòng/đv dài)?', ['B = 4π·10⁻⁷·n·I', 'B = n·I·r', 'B = I/n', 'B = 2·10⁻⁷·I'], 0, 'B = μ₀nI (đều bên trong).'),
    Q('Từ trường trong ống dây dài có đặc điểm?', ['Không đều', 'Bằng 0', 'Vuông góc trục', 'Đều, song song trục'], 3, 'B đều bên trong.'),
    Q('Nguyên lý chồng chất từ trường?', ['Tích vô hướng B₁·B₂', 'Tổng vectơ các B thành phần', 'Tổng đại số', 'Hiệu vectơ B₁ − B₂'], 1, 'B = ΣB_i (vectơ).'),
    Q('Hai dây song song cùng chiều dòng?', ['Hút nhau', 'Vuông góc', 'Không tác dụng', 'Đẩy nhau'], 0, 'Cùng chiều → hút.'),
  ]),

  M(25, 'Chương 6 — Cảm ứng điện từ · Hiện tượng', [
    Q('Hiện tượng cảm ứng điện từ?', ['Suất điện động xuất hiện khi từ thông biến thiên', 'Khi không có gì', 'Khi có điện trường', 'Khi nam châm đứng yên'], 0, 'Faraday phát hiện.'),
    Q('Từ thông Φ = ?', ['Φ = B·S²', 'Φ = B/S', 'Φ = B·S·cos(α)', 'Φ = B + S'], 2, 'Φ = BS·cosα.'),
    Q('Đơn vị từ thông?', ['Vê-be (Wb) = T·m²', 'V (đơn vị hiệu điện thế)', 'Tesla (đơn vị cảm ứng từ B)', 'A (đơn vị cường độ dòng)'], 0, 'Wb.'),
    Q('Suất điện động cảm ứng e_c = ?', ['e_c = Φ·t', 'e_c = B·S', 'e_c = -dΦ/dt', 'e_c = Φ/t'], 2, 'Định luật Faraday.'),
    Q('Dấu trừ trong công thức Faraday phản ánh?', ['Định luật Ampe', 'Định luật Ohm', 'Định luật Lenz', 'Định luật Coulomb'], 2, 'Định luật Lenz.'),
    Q('Định luật Lenz: dòng cảm ứng có chiều?', ['Chống lại sự biến thiên từ thông gây ra nó', 'Vuông góc', 'Theo chiều kim đồng hồ luôn luôn', 'Cùng chiều với biến thiên'], 0, 'Bảo toàn năng lượng.'),
  ]),

  M(26, 'Suất điện động cảm ứng trong đoạn dây chuyển động', [
    Q('Đoạn dây l chuyển động đều v vuông góc B?', ['e_c = B·v', 'e_c = v·l', 'e_c = B·l', 'e_c = B·v·l'], 3, 'e_c = Blv.'),
    Q('Quy tắc bàn tay phải xác định?', ['Chiều dòng điện cảm ứng', 'Chiều v', 'Chiều B', 'Chiều F'], 0, 'Tay phải: ngón → chiều e_c.'),
    Q('Khi dây song song với v thì e_c?', ['Max (cực đại bằng Blv)', 'Trung bình', 'Vô cùng', '= 0'], 3, 'Không cắt đường sức.'),
    Q('Bản chất e_c trong đoạn dây chuyển động?', ['Lực ma sát', 'Lực hấp dẫn', 'Lực Coulomb', 'Lực Lo-ren-xơ tác dụng lên electron'], 3, 'qvB → tách điện tích.'),
    Q('Ứng dụng cảm ứng điện từ?', ['Tụ điện', 'Đèn LED', 'Máy phát điện, máy biến áp', 'Tủ lạnh'], 2, 'Generator, transformer.'),
    Q('Dòng Foucault (Eddy current) là?', ['Dòng trong dây', 'Dòng tĩnh', 'Dòng quang điện', 'Dòng cảm ứng trong khối kim loại'], 3, 'Trong lõi sắt.'),
  ]),

  M(27, 'Tự cảm', [
    Q('Hiện tượng tự cảm là?', ['Cảm ứng do chính dòng trong mạch biến thiên', 'Do nhiệt', 'Do mạch khác', 'Do nam châm'], 0, 'Tự gây cảm ứng.'),
    Q('Hệ số tự cảm L của ống dây = ?', ['L = 4π·10⁻⁷·n²·V', 'L = Φ/I', 'L = I·t', 'L = B·S'], 0, 'L = μ₀n²V (cuộn dài).'),
    Q('Đơn vị tự cảm?', ['Henry (H)', 'F (đơn vị điện dung)', 'T (đơn vị cảm ứng từ)', 'Wb (đơn vị từ thông)'], 0, 'H = Wb/A.'),
    Q('Suất điện động tự cảm e_tc = ?', ['e_tc = L·t', 'e_tc = L/I', 'e_tc = -L·dI/dt', 'e_tc = L·I'], 2, 'e = -L·di/dt.'),
    Q('Năng lượng từ trường trong cuộn cảm?', ['W = L/I', 'W = ½·L/I', 'W = ½·L·I²', 'W = L·I'], 2, 'W = ½LI².'),
    Q('Khi đóng/ngắt mạch có cuộn cảm, ta thấy?', ['Tia lửa điện ở khoá K', 'Không có hiện tượng', 'Mạch ngắt ngay', 'Đèn tắt từ từ'], 0, 'Suất điện động tự cảm lớn.'),
  ]),

  M(28, 'Bài tập tổng hợp dao động điều hoà', [
    Q('Vật DĐĐH x = 5·cos(2πt + π/3) cm. Biên độ?', ['1 cm', 'π/3 cm', '2π cm', '5 cm'], 3, 'A = 5 cm.'),
    Q('Vật DĐĐH ω = 2π rad/s. Chu kỳ T?', ['½ s (nhầm T = ω/2π)', '1 s', '2π s', 'π s (chia nhầm 2)'], 1, 'T = 2π/ω = 1 s.'),
    Q('vmax của x=5cos(10t) cm là?', ['50 cm/s', '10 cm/s', '25 cm/s', '5 cm/s'], 0, 'vmax = Aω = 5·10.'),
    Q('Con lắc lò xo k=100 N/m, m=1 kg. ω?', ['50 rad/s', '100 rad/s', '10 rad/s', '1 rad/s'], 2, 'ω = √(k/m) = 10.'),
    Q('Con lắc đơn l=1m, g=π² m/s². T?', ['1 s', '4 s', 'π s (quên hệ số 2 ở 2π)', '2 s'], 3, 'T = 2π·√(l/g) = 2π·√(1/π²) = 2.'),
    Q('A=4 cm, ω=π rad/s. amax?', ['4π² cm/s²', '4 cm/s²', 'π² cm/s²', '16 cm/s²'], 0, 'amax = Aω² = 4π².'),
  ]),

  M(29, 'Bài tập điện học', [
    Q('Hai điện tích q₁=q₂=1μC cách r=1m trong không khí. F?', ['9·10⁻³ N', '9·10⁹ N', '1·10⁻⁶ N', '1·10⁹ N'], 0, 'F = k|q₁q₂|/r² = 9·10⁹·10⁻¹² = 9·10⁻³.'),
    Q('Tụ C=10μF tích U=10V. Q?', ['10⁻⁴ C', '10⁻¹ C', '1 C', '10⁻⁶ C'], 0, 'Q = CU = 10·10⁻⁶·10 = 10⁻⁴.'),
    Q('Điện trở 10Ω có U=20V. I?', ['2 A', '20 A', '0,5 A', '10 A'], 0, 'I = U/R = 2.'),
    Q('E=12V, r=1Ω, R=5Ω. I?', ['5 A', '2 A', '12 A', '1 A'], 1, 'I = E/(R+r) = 12/6 = 2.'),
    Q('P=UI=100W, U=10V. I?', ['0,1 A', '10 A', '1 A', '100 A'], 1, 'I = 10.'),
    Q('Năng lượng tụ C=2μF, U=100V?', ['1 J', '2·10⁻⁴ J', '10⁻⁶ J', '10⁻² J'], 3, 'W = ½CU² = 0,5·2·10⁻⁶·10⁴ = 10⁻².'),
  ]),

  M(30, 'Bài tập sóng cơ và sóng âm', [
    Q('Sóng có v=10 m/s, f=5 Hz. λ?', ['0,2 m', '50 m', '2 m', '½ m (nhầm λ = f/v)'], 2, 'λ = v/f = 2.'),
    Q('Sóng âm trong nước v ≈ 1500 m/s. f=750Hz. λ?', ['1500 m', '0,5 m', '750 m', '2 m'], 3, 'λ = v/f.'),
    Q('Dây 2 đầu cố định l=1m có 3 bó sóng. λ?', ['½ m (nhầm λ = l/k·2)', '2/3 m', '1 m', '3 m'], 1, 'l = k·λ/2 → λ = 2l/k = 2/3.'),
    Q('Mức cường độ âm L=60dB. I/I₀?', ['10⁶', '60', '100', '600'], 0, 'L = 10log(I/I₀) → I/I₀ = 10⁶.'),
    Q('Tăng I lên 100 lần, L tăng?', ['100 dB', '10 dB', '20 dB', '2 dB'], 2, '10·log100 = 20.'),
    Q('Hai sóng giao thoa cực đại, hiệu đường đi?', ['k·λ', '(k+½)λ', '(2k+1)·λ/2', '0'], 0, 'k·λ.'),
  ]),

  M(31, 'Bài tập từ trường và cảm ứng điện từ', [
    Q('Dây dẫn thẳng dài I=10A. Cảm ứng B tại r=10cm?', ['10 T', '2·10⁻⁷ T', '0 T', '2·10⁻⁵ T'], 3, 'B = 2·10⁻⁷·I/r = 2·10⁻⁷·10/0,1 = 2·10⁻⁵.'),
    Q('Lực từ trên dây l=1m, I=5A, B=0,2T vuông góc?', ['0,2 N', '1 N', '5 N', '10 N'], 1, 'F = BIl = 0,2·5·1 = 1.'),
    Q('Khung dây N=100 vòng, S=0,01 m², ΔB=0,1T trong Δt=1s. e?', ['1 V', '0,1 V', '100 V', '10 V'], 1, 'e = N·dΦ/dt = 100·0,01·0,1 = 0,1.'),
    Q('Hai dây song song cùng chiều cách 10cm, mỗi dây 10A. Lực/đv dài?', ['0', '2·10⁻⁵ N/m', '2·10⁻⁴ N/m (hút)', '2·10⁻⁷ N/m'], 2, 'F/l = 2·10⁻⁷·I₁I₂/r.'),
    Q('Cuộn cảm L=0,5H, dI/dt = 2A/s. e_tc?', ['0,5 V', '1 V', '2 V', '0 V'], 1, 'e = L·di/dt = 0,5·2 = 1.'),
    Q('Năng lượng cuộn cảm L=1H, I=2A?', ['4 J', '1 J', '2 J', '½ J (quên bình phương I)'], 2, 'W = ½LI² = ½·1·4 = 2.'),
  ]),

  M(32, 'Bài tập tổng hợp Chương 1–6', [
    Q('Con lắc lò xo tăng m gấp 4 thì T?', ['Tăng 4 lần', 'Giảm 2', 'Tăng 2 lần', 'Không đổi'], 2, 'T ~ √m.'),
    Q('Định luật Coulomb F ~ ?', ['r (tỉ lệ thuận khoảng cách)', '1/r²', 'r² (tỉ lệ thuận bình phương r)', '1/r'], 1, 'Nghịch đảo bình phương.'),
    Q('Ohm toàn mạch I = ?', ['E/R (bỏ qua điện trở trong)', 'U/r (nhầm hiệu điện thế ngoài)', 'E/(R+r)', 'E·R (nhân thay vì chia)'], 2, 'I = E/(R+r).'),
    Q('Bán dẫn loại n hạt tải đa số?', ['Lỗ trống', 'Electron', 'Ion dương và ion âm', 'Proton'], 1, 'n: electron.'),
    Q('Định luật Lenz: dòng cảm ứng?', ['Chống lại biến thiên từ thông', 'Cùng chiều', 'Vuông góc', 'Không liên quan'], 0, 'Bảo toàn năng lượng.'),
    Q('Tần số riêng của con lắc đơn phụ thuộc?', ['v ban đầu', 'Khối lượng vật m', 'l và g', 'Biên độ'], 2, 'f không phụ thuộc m.'),
  ]),

  M(33, 'Review HK2 — Dòng điện trong môi trường', [
    Q('Dòng điện trong kim loại là dòng?', ['Photon', 'Ion dương và ion âm', 'Electron', 'Proton'], 2, 'Electron.'),
    Q('Dòng điện trong dung dịch điện phân?', ['Electron', 'Proton', 'Photon', 'Ion + và -'], 3, 'Ion.'),
    Q('Bán dẫn p hạt tải đa số?', ['Electron', 'Proton', 'Ion dương và ion âm', 'Lỗ trống'], 3, 'Lỗ trống.'),
    Q('Định luật Faraday I?', ['m = k·q', 'm = k/q', 'q = k·m', 'm = k+q'], 0, 'm tỉ lệ q.'),
    Q('Siêu dẫn xảy ra T?', ['Ở mọi nhiệt độ thông thường', 'T < Tc', 'T > Tc', 'Chỉ tại T = 0 K tuyệt đối'], 1, 'Dưới nhiệt độ tới hạn.'),
    Q('Ứng dụng điện phân?', ['Tụ điện', 'Tủ lạnh', 'Mạ điện', 'Đèn LED'], 2, 'Mạ điện, tinh chế kim loại.'),
  ]),

  M(34, 'Review HK2 — Từ trường & Cảm ứng điện từ', [
    Q('Cảm ứng từ B đo bằng?', ['Vôn (đơn vị hiệu điện thế)', 'Ampe (đơn vị cường độ dòng)', 'Henry (đơn vị tự cảm)', 'Tesla (T)'], 3, 'T.'),
    Q('Lực từ F = ?', ['UI (công suất điện)', 'BIlsinα', 'qv (động lượng)', '½CU² (năng lượng tụ)'], 1, 'F = BIlsinα.'),
    Q('Từ thông Φ = ?', ['B/S (nhầm chia diện tích)', 'B·S·cosα', 'B + S (cộng đại số)', 'B·S (bỏ qua góc α)'], 1, 'Φ = BS·cosα.'),
    Q('Hệ số tự cảm đơn vị?', ['Wb (đơn vị từ thông)', 'Henry (H)', 'T (đơn vị cảm ứng từ)', 'F (đơn vị điện dung)'], 1, 'H.'),
    Q('Suất điện động cảm ứng tỉ lệ với?', ['Thời gian t (tỉ lệ thuận)', 'Cảm ứng từ B (tỉ lệ thuận)', 'dΦ/dt', 'Từ thông Φ (tỉ lệ thuận)'], 2, 'e = -dΦ/dt.'),
    Q('Định luật Lenz nói về?', ['Chiều dòng cảm ứng', 'Năng lượng', 'Tần số', 'Độ lớn lực'], 0, 'Chiều.'),
  ]),

  M(35, 'Thi học kỳ — Tổng ôn', [
    Q('DĐĐH có x = A·cos(ωt+φ). Năng lượng?', ['½kA (thiếu bình phương A)', 'ω·A (nhầm với vmax)', 'm·A (thiếu hệ số ω²)', '½kA² = ½mω²A²'], 3, 'W = ½kA² const.'),
    Q('Sóng cơ truyền nhanh nhất trong?', ['Chân không', 'Khí (không khí)', 'Rắn', 'Lỏng (nước)'], 2, 'Rắn (chân không không truyền).'),
    Q('Cường độ điện trường E = ?', ['F·q (nhầm nhân thay vì chia)', 'q/F (đảo tử mẫu)', 'F/q', 'k·q² (nhầm sang lực Coulomb)'], 2, 'E = F/q.'),
    Q('Tụ điện tích năng lượng?', ['Cơ học', 'Từ trường', 'Điện trường', 'Trọng trường'], 2, 'Năng lượng điện trường.'),
    Q('Cuộn cảm tích năng lượng?', ['Trọng trường', 'Cơ học', 'Điện trường', 'Từ trường'], 3, 'Từ trường.'),
    Q('Dòng điện không đổi I = ?', ['U + R (cộng tổng đại số)', 'q/t', 'q·t (nhân thay vì chia)', 'E·t (suất điện động nhân thời gian)'], 1, 'I = q/t.'),
  ]),
];

export const H11LY_SCENARIOS = indexBy(H11LY_WEEKS);
