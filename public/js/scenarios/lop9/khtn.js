// ============================================================
// Lớp 9 · KHOA HỌC TỰ NHIÊN (KHTN) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018, tích hợp Vật lý + Hoá học + Sinh học.
// HK1: Hoá vô cơ (kim loại, phi kim) + Điện học.
// HK2: Hoá hữu cơ + Điện từ học + Quang học + Di truyền học.
// ID prefix: "S9KHTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9KHTN', 'khtn', n, title, qs, opts);

export const S9KHTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Kim loại — Tính chất vật lý và hoá học chung', [
    Q('Tính chất vật lý chung của kim loại?', ['Cứng, giòn', 'Có mùi đặc trưng', 'Không dẫn điện', 'Dẫn điện, dẫn nhiệt, ánh kim, dẻo'], 3, 'Kim loại có 4 tính chất vật lý đặc trưng: dẫn điện, dẫn nhiệt, ánh kim, dẻo.'),
    Q('Kim loại nào dẫn điện tốt nhất?', ['Ag', 'Cu (xếp thứ hai sau Ag)', 'Fe (dùng làm dây cáp truyền tải)', 'Al (kim loại nhẹ, dẫn điện khá)'], 0, 'Thứ tự dẫn điện: Ag > Cu > Au > Al > Fe… ⇒ Ag tốt nhất.'),
    Q('Kim loại tác dụng với phi kim tạo?', ['Bazơ tan trong nước', 'Axit tương ứng với phi kim', 'Khí hiđro thoát ra', 'Muối hoặc oxit'], 3, 'Kim loại + phi kim → muối (kl + Cl₂) hoặc oxit (kl + O₂).'),
    Q('Phương trình Na + O₂ → ?', ['NaO (hoá trị I cân với O hoá trị II)', 'NaO₂ (natri superoxit)', 'Na₂O₂ (natri peroxit)', 'Na₂O'], 3, '4Na + O₂ → 2Na₂O (natri oxit).'),
    Q('Kim loại nào nhẹ nhất?', ['Cu (khối lượng riêng 8,96 g/cm³)', 'Fe (khối lượng riêng 7,87 g/cm³)', 'Li (Liti)', 'Al (kim loại nhẹ, 2,7 g/cm³)'], 2, 'Liti có khối lượng riêng nhỏ nhất trong các kim loại (~0,53 g/cm³).'),
    Q('Tại sao kim loại dẻo?', ['Vì cứng', 'Vì cấu trúc tinh thể với electron tự do và các lớp ion có thể trượt lên nhau', 'Vì có mùi', 'Vì có màu'], 1, 'Cấu trúc mạng tinh thể kim loại + electron tự do ⇒ dễ biến dạng.'),
  ]),

  M(2, 'Dãy hoạt động hoá học của kim loại', [
    Q('Dãy hoạt động hoá học có dạng (sắp xếp giảm dần)?', ['K, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au', 'Cu, Fe, Zn, Al, Mg, Na, K', 'Au, Ag, Cu, H, Fe, Zn, Al, K', 'Theo bảng tuần hoàn'], 0, 'Dãy hoạt động hoá học từ mạnh đến yếu: K, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au.'),
    Q('Kim loại đứng trước H trong dãy có thể?', ['Tác dụng với dung dịch axit loãng giải phóng H₂', 'Cháy trong không khí', 'Không phản ứng', 'Chỉ tan trong nước'], 0, 'Kim loại trước H + HCl/H₂SO₄ loãng → muối + H₂.'),
    Q('Phản ứng nào KHÔNG xảy ra?', ['Fe + H₂SO₄ → FeSO₄ + H₂', '2Al + 6HCl → 2AlCl₃ + 3H₂', 'Zn + 2HCl → ZnCl₂ + H₂', 'Cu + 2HCl → CuCl₂ + H₂'], 3, 'Cu đứng sau H ⇒ không phản ứng với HCl loãng.'),
    Q('Phản ứng giữa Fe + CuSO₄ tạo?', ['FeSO₄ + Cu', 'Không phản ứng', 'FeS + CuO', 'Fe₂(SO₄)₃ + Cu'], 0, 'Fe đứng trước Cu ⇒ Fe đẩy Cu khỏi muối: Fe + CuSO₄ → FeSO₄ + Cu↓.'),
    Q('Kim loại nào phản ứng được với nước ở nhiệt độ thường?', ['K, Na, Ca, Ba', 'Cu, Ag', 'Fe, Al', 'Au, Pt'], 0, 'Chỉ kim loại kiềm và kiềm thổ (K, Na, Ca, Ba…) phản ứng với H₂O ở nhiệt độ thường.'),
    Q('Phương trình Na + H₂O → ?', ['NaH + O₂', 'Na₂O + H₂O', 'NaOH + H₂', '2NaOH + H₂'], 3, '2Na + 2H₂O → 2NaOH + H₂↑.'),
  ]),

  M(3, 'Nhôm (Al) — Tính chất và ứng dụng', [
    Q('Số hiệu nguyên tử của Al?', ['12', '14', '13', '11'], 2, 'Al ở ô số 13, chu kỳ 3, nhóm IIIA.'),
    Q('Tính chất vật lý nổi bật của Al?', ['Nặng, không dẫn điện', 'Nhẹ, dẫn điện tốt, màu trắng bạc', 'Đen, giòn', 'Lỏng ở nhiệt độ thường'], 1, 'Al nhẹ (D = 2,7 g/cm³), dẫn điện tốt (sau Cu), màu trắng bạc.'),
    Q('Al phản ứng với axit HCl tạo?', ['AlCl₃ + H₂', 'Không phản ứng', 'AlCl₂ + H₂', 'Al₂Cl₃ + H₂'], 0, '2Al + 6HCl → 2AlCl₃ + 3H₂↑.'),
    Q('Al có tan trong dung dịch kiềm (NaOH) không?', ['Chỉ tan trong axit', 'Có (vì Al là kim loại lưỡng tính)', 'Không, chỉ Zn mới tan trong kiềm', 'Chỉ ở nhiệt độ cao'], 1, '2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂.'),
    Q('Ứng dụng của Al?', ['Làm vỏ tàu thủy', 'Làm pin', 'Làm xoong nồi, vỏ máy bay, dây điện', 'Làm nhiên liệu'], 2, 'Al nhẹ + chống ăn mòn ⇒ dùng làm đồ gia dụng, vỏ máy bay, dây điện cao thế.'),
    Q('Vì sao đồ Al không bị gỉ trong không khí?', ['Al không phản ứng O₂', 'Có lớp Al₂O₃ mỏng phủ bên ngoài bảo vệ', 'Al ở dạng đặc biệt', 'Al rất bền'], 1, 'Lớp Al₂O₃ mỏng, bền, không cho không khí và nước tiếp tục tác dụng.'),
  ]),

  M(4, 'Sắt (Fe) — Tính chất và hợp chất', [
    Q('Số hiệu nguyên tử của Fe?', ['24', '26', '25', '27'], 1, 'Fe ở ô số 26, chu kỳ 4, nhóm VIIIB.'),
    Q('Fe có những hoá trị nào?', ['+1, +2', '+2, +3', '+3, +4', '+1, +3'], 1, 'Fe có 2 hoá trị phổ biến: +2 (sắt II) và +3 (sắt III).'),
    Q('Fe + 2HCl → ?', ['Fe(OH)₂', 'FeO + H₂O', 'FeCl₃ + H₂', 'FeCl₂ + H₂'], 3, 'Trong HCl loãng, Fe tạo muối Fe²⁺: FeCl₂.'),
    Q('Fe phản ứng với khí Cl₂ tạo?', ['FeO (sắt(II) oxit)', 'Fe₂O₃ (sắt(III) oxit)', 'FeCl₂ (sắt clorua hoá trị II)', 'FeCl₃'], 3, '2Fe + 3Cl₂ → 2FeCl₃ (Cl₂ là chất oxi hoá mạnh, đẩy Fe lên +3).'),
    Q('Gang là hợp kim của?', ['Fe + Si', 'Fe + Al', 'Fe + Cu', 'Fe + C (2-5%)'], 3, 'Gang: hợp kim Fe-C với C từ 2-5%; thép: 0,01-2%.'),
    Q('Phương trình điều chế Fe từ oxit trong lò cao?', ['FeO + C → Fe', 'Fe₂O₃ + H₂ → Fe + H₂O', 'Fe₂O₃ + 3CO → 2Fe + 3CO₂', 'Fe + O₂ → Fe₂O₃'], 2, 'Phản ứng nhiệt luyện trong lò cao: dùng CO khử Fe₂O₃ thành Fe.'),
  ]),

  M(5, 'Đồng (Cu) — Tính chất và ứng dụng', [
    Q('Số hiệu nguyên tử của Cu?', ['28', '29', '27', '30'], 1, 'Cu ở ô số 29, chu kỳ 4, nhóm IB.'),
    Q('Tính chất vật lý đặc trưng của Cu?', ['Màu trắng, không dẫn điện', 'Màu đỏ, dẫn điện tốt thứ 2 sau Ag', 'Lỏng ở nhiệt độ thường', 'Có từ tính'], 1, 'Cu đỏ ánh kim, dẫn điện tốt thứ 2 sau Ag, dẫn nhiệt tốt.'),
    Q('Cu có phản ứng với HCl loãng không?', ['Chỉ ở nhiệt độ cao', 'Tan chậm', 'Không (vì Cu đứng sau H trong dãy)', 'Có, mạnh'], 2, 'Cu sau H ⇒ không phản ứng với HCl loãng.'),
    Q('Cu phản ứng với H₂SO₄ đặc nóng tạo?', ['CuSO₄ + H₂', 'CuSO₄ + SO₂ + H₂O', 'Không phản ứng', 'CuO + H₂'], 1, 'Cu + 2H₂SO₄ đặc nóng → CuSO₄ + SO₂↑ + 2H₂O.'),
    Q('Ứng dụng quan trọng của Cu?', ['Làm dây điện, vật liệu xây dựng, hợp kim đồng thau, đồng đen', 'Làm xoong nồi nhôm', 'Làm pin', 'Làm thuốc'], 0, 'Cu dẫn điện tốt + bền ⇒ dây điện; hợp kim Cu-Zn (đồng thau), Cu-Sn (đồng đen).'),
    Q('Dung dịch CuSO₄ có màu?', ['Đỏ gạch (giống Cu kim loại)', 'Vàng nâu (giống dung dịch FeCl₃)', 'Trắng trong (giống dung dịch NaCl)', 'Xanh lam'], 3, 'CuSO₄·5H₂O và dung dịch CuSO₄ có màu xanh lam đặc trưng.'),
  ]),

  M(6, 'Phi kim — Tính chất chung và Clo (Cl₂)', [
    Q('Tính chất vật lý của phi kim?', ['Đều lỏng', 'Đa dạng: rắn (S, P), lỏng (Br), khí (O₂, Cl₂)', 'Đều khí', 'Đều rắn'], 1, 'Phi kim có nhiều trạng thái: S/P/I rắn, Br lỏng, O₂/N₂/Cl₂ khí.'),
    Q('Khí Clo (Cl₂) có màu?', ['Vàng lục', 'Xanh dương', 'Không màu', 'Nâu đỏ (giống khí NO₂)'], 0, 'Cl₂ là khí vàng lục, mùi xốc, độc.'),
    Q('Cl₂ + H₂O → ?', ['HClO₂ (axit clorơ)', 'HCl + O₂', 'HCl + HClO (nước clo)', 'Không phản ứng'], 2, 'Cl₂ + H₂O ⇌ HCl + HClO (nước clo có tính tẩy màu nhờ HClO).'),
    Q('Cl₂ phản ứng với NaOH (loãng, nguội) tạo?', ['NaClO₃', 'NaCl + O₂', 'NaCl + NaClO + H₂O (nước Gia-ven)', 'NaCl + H₂'], 2, 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O — nước Gia-ven, dùng tẩy trắng, sát trùng.'),
    Q('Ứng dụng quan trọng của Cl₂?', ['Làm nước giải khát', 'Làm thực phẩm', 'Khử trùng nước, sản xuất nhựa PVC, thuốc trừ sâu', 'Làm phân bón'], 2, 'Cl₂ khử trùng nước máy, sản xuất HCl, PVC, hợp chất hữu cơ.'),
    Q('Cl₂ + 2Fe → ?', ['2FeCl₃', 'Fe + Cl', 'FeCl₂ (chỉ tạo khi Fe phản ứng với HCl)', 'FeCl (hợp chất giả định không tồn tại)'], 0, '3Cl₂ + 2Fe → 2FeCl₃ (Cl₂ oxi hoá mạnh, đẩy Fe lên +3).'),
  ]),

  M(7, 'Cacbon (C) và silic (Si)', [
    Q('Cacbon có các dạng thù hình phổ biến?', ['Chỉ kim cương', 'Chỉ than chì', 'Kim cương, than chì, fuleren, cacbon vô định hình', 'Khí, lỏng, rắn'], 2, 'Thù hình của C: kim cương (cứng), than chì (mềm, dẫn điện), fuleren, cacbon vô định hình.'),
    Q('Vì sao kim cương cứng, than chì mềm dù cùng nguyên tố C?', ['Do khối lượng khác', 'Do cấu trúc tinh thể khác nhau', 'Do màu sắc khác', 'Do tỉ lệ pha tạp'], 1, 'Kim cương: cấu trúc tứ diện chặt chẽ; than chì: cấu trúc lớp dễ trượt.'),
    Q('CO có tính chất hoá học đặc biệt?', ['Là chất bazơ', 'Khử oxit kim loại ở nhiệt độ cao (luyện kim)', 'Cháy được trong CO₂', 'Là chất axit mạnh'], 1, 'CO + CuO → Cu + CO₂ — dùng nhiều trong luyện kim.'),
    Q('CO₂ làm đục nước vôi trong là phản ứng nào?', ['CO₂ + NaOH', 'CO₂ + H₂O → H₂CO₃', 'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O', 'CO₂ + Ca → CaCO₃'], 2, 'Phản ứng đặc trưng để nhận biết CO₂: tạo kết tủa trắng CaCO₃.'),
    Q('Si có ứng dụng quan trọng trong?', ['Làm dây điện', 'Làm thực phẩm', 'Làm thuốc nổ', 'Sản xuất chip điện tử, pin mặt trời, thủy tinh'], 3, 'Si tinh khiết = vật liệu bán dẫn quan trọng; SiO₂ = thuỷ tinh.'),
    Q('SiO₂ là?', ['Cát thạch anh', 'Khí không màu ở nhiệt độ thường', 'Chất lỏng nhớt giống dầu silicon', 'Kim loại'], 0, 'SiO₂ là chất rắn — thành phần chính của cát thạch anh, thuỷ tinh.'),
  ]),

  M(8, 'Lưu huỳnh (S) và photpho (P)', [
    Q('Lưu huỳnh ở dạng tinh thể có màu?', ['Đen (giống cacbon)', 'Trắng đục (giống photpho trắng)', 'Xanh lam (giống CuSO₄·5H₂O)', 'Vàng nhạt'], 3, 'S rắn màu vàng nhạt, không tan trong nước, tan trong dung môi hữu cơ.'),
    Q('S + O₂ → ?', ['S₂O (oxit không tồn tại)', 'SO₃ (chỉ tạo khi có xúc tác V₂O₅)', 'SO₂', 'SO (hợp chất không bền)'], 2, 'S cháy trong không khí tạo SO₂ (lưu huỳnh đioxit) — khí mùi hắc.'),
    Q('SO₂ + Ca(OH)₂ → ?', ['CaSO₂ (công thức sai về hoá trị)', 'Không phản ứng', 'CaSO₃ + H₂O', 'CaSO₄ + H₂'], 2, 'SO₂ tan trong nước tạo H₂SO₃, phản ứng với bazơ tạo muối sunfit.'),
    Q('H₂SO₄ đặc nóng có tính chất đặc trưng?', ['Tính bazơ', 'Tính oxi hoá mạnh, hút nước, gây bỏng', 'Tính khử mạnh', 'Trung hoà'], 1, 'H₂SO₄ đặc: oxi hoá mạnh, hút nước mạnh, ăn mòn.'),
    Q('Photpho có 2 dạng thù hình chính?', ['P xanh và P vàng', 'P kim loại', 'P lỏng và P khí', 'P trắng và P đỏ'], 3, 'P trắng: rất độc, dễ cháy; P đỏ: bền hơn, ít độc.'),
    Q('Ứng dụng của H₃PO₄?', ['Sản xuất phân lân, chất tẩy rửa, đồ uống có gas', 'Làm thực phẩm trực tiếp', 'Làm thuốc nổ', 'Làm xăng'], 0, 'H₃PO₄ làm phân DAP, MAP; là chất phụ gia trong nhiều ngành công nghiệp.'),
  ]),

  M(9, 'Định luật Ôm — Cường độ dòng điện và hiệu điện thế', [
    Q('Định luật Ôm phát biểu?', ['R = I·U', 'I = U/R', 'U = I/R', 'I = U·R'], 1, 'I = U/R (I: cường độ dòng điện, U: hiệu điện thế, R: điện trở).'),
    Q('Đơn vị của cường độ dòng điện?', ['Oát (W)', 'Ampe (A)', 'Ôm (Ω)', 'Vôn (V)'], 1, 'Cường độ dòng điện đo bằng Ampe (A).'),
    Q('Đơn vị điện trở?', ['Vôn (đơn vị hiệu điện thế)', 'Ampe (đơn vị cường độ dòng điện)', 'Oát (đơn vị công suất điện)', 'Ôm (Ω)'], 3, 'Điện trở đo bằng Ôm (Ω).'),
    Q('Tính I khi U = 12V, R = 4Ω?', ['3A', '8A', '0,33A', '48A'], 0, 'I = U/R = 12/4 = 3 A.'),
    Q('Khi R không đổi, nếu U tăng 2 lần thì I?', ['Không đổi', 'Tăng 2 lần', 'Giảm 2 lần', 'Tăng 4 lần'], 1, 'I tỉ lệ thuận với U khi R không đổi.'),
    Q('Mạch nối tiếp R₁ = 2Ω, R₂ = 3Ω thì R_tđ = ?', ['1Ω', '6Ω', '0,5Ω', '5Ω'], 3, 'Mắc nối tiếp: R_tđ = R₁ + R₂ = 2 + 3 = 5 Ω.'),
  ]),

  M(10, 'Mạch điện — Nối tiếp và song song', [
    Q('Trong mạch nối tiếp, I qua các điện trở?', ['Tỉ lệ với R', 'Bằng nhau', 'Tỉ lệ nghịch với R', 'Khác nhau'], 1, 'Mạch nối tiếp: I₁ = I₂ = I (dòng điện như nhau qua các điện trở).'),
    Q('Trong mạch nối tiếp, hiệu điện thế?', ['U = U₁·U₂', 'U = U₁ = U₂', 'U = U₁ + U₂', 'U = U₁/U₂'], 2, 'Tổng hiệu điện thế = tổng các U thành phần.'),
    Q('Trong mạch song song, U?', ['Khác nhau', 'Cộng dồn', 'Bằng nhau trên các nhánh', 'Bằng 0'], 2, 'Mạch song song: U₁ = U₂ = U (hiệu điện thế chung).'),
    Q('Mạch song song R₁ = 6Ω, R₂ = 3Ω thì R_tđ = ?', ['1Ω', '4,5Ω', '2Ω', '9Ω'], 2, '1/R = 1/R₁ + 1/R₂ = 1/6 + 1/3 = 3/6 ⇒ R = 2 Ω.'),
    Q('Khi nào mắc thêm song song, R_tđ?', ['Bằng 0', 'Giảm xuống', 'Không đổi', 'Tăng lên'], 1, 'Thêm điện trở song song ⇒ R_tđ luôn giảm (nhỏ hơn điện trở nhỏ nhất).'),
    Q('Điện trở dây dẫn phụ thuộc?', ['Chỉ tiết diện', 'Chỉ chiều dài', 'Chỉ vật liệu', 'Vật liệu (ρ), chiều dài (l), tiết diện (S): R = ρ·l/S'], 3, 'Công thức: R = ρ·l/S.'),
  ]),

  M(11, 'Công và công suất điện', [
    Q('Công suất điện được tính bởi?', ['P = U/I', 'P = U·I', 'P = U²·I', 'P = U + I'], 1, 'P = U·I (W); ngoài ra P = I²R = U²/R.'),
    Q('Đơn vị công suất điện?', ['Vôn (đơn vị hiệu điện thế)', 'Ampe (đơn vị cường độ dòng điện)', 'Jun (J)', 'Oát (W)'], 3, 'Công suất đo bằng Oát (W) = J/s.'),
    Q('Đèn ghi 220V – 60W. Cường độ dòng điện qua đèn?', ['0,27A', '1A', '0,5A', '3,67A'], 0, 'I = P/U = 60/220 ≈ 0,27 A.'),
    Q('Công của dòng điện?', ['A = U/I', 'A = U + I·t', 'A = P·t = U·I·t', 'A = R·I'], 2, 'A = công suất × thời gian = U·I·t.'),
    Q('Đơn vị của điện năng tiêu thụ trên hoá đơn điện?', ['W (đơn vị công suất tức thời)', 'kWh (kilôoát giờ)', 'V (đơn vị hiệu điện thế)', 'J (đơn vị năng lượng trong hệ SI)'], 1, 'Hoá đơn điện tính bằng kWh = 1 000 W · 3 600 s = 3,6·10⁶ J.'),
    Q('1 kWh bằng bao nhiêu J?', ['3 600', '3 600 000', '3 600·1 000', '1 000'], 1, '1 kWh = 1 000 W × 3 600 s = 3 600 000 J = 3,6 MJ.'),
  ]),

  M(12, 'Định luật Jun-Len-xơ — Nhiệt lượng toả ra', [
    Q('Định luật Jun-Len-xơ?', ['Q = I²/R·t', 'Q = I·R·t', 'Q = I·R/t', 'Q = I²·R·t'], 3, 'Nhiệt lượng tỏa ra trên điện trở khi có dòng điện đi qua: Q = I²Rt.'),
    Q('Đơn vị nhiệt lượng?', ['Vôn (đơn vị hiệu điện thế)', 'Jun (J) hoặc calo (cal)', 'Oát (đơn vị công suất)', 'Ampe (đơn vị cường độ dòng điện)'], 1, 'J là đơn vị SI; 1 cal ≈ 4,18 J.'),
    Q('Tính Q khi I = 2A, R = 10Ω, t = 60s?', ['2 400 J', '1 200 J', '600 J', '120 J'], 0, 'Q = 2²·10·60 = 4·10·60 = 2 400 J.'),
    Q('Ứng dụng định luật Jun-Len-xơ?', ['Pin sạc dự phòng điện thoại', 'Bóng đèn LED', 'Bàn ủi, bếp điện, lò sưởi, nồi cơm điện', 'Quạt điện'], 2, 'Các thiết bị toả nhiệt khi dòng điện qua dây điện trở: bàn ủi, bếp điện…'),
    Q('Để giảm hao phí điện năng do nhiệt khi truyền tải xa, người ta?', ['Tăng U lên cao (giảm I)', 'Dùng dây nhỏ', 'Tăng I', 'Giảm R'], 0, 'P_hp = I²R; tăng U ⇒ giảm I cùng công suất ⇒ giảm P_hp đáng kể.'),
    Q('Vì sao khi tăng hiệu điện thế thì giảm hao phí?', ['Không có lý do', 'Vì t nhỏ', 'Vì R nhỏ', 'Vì P_hp = I²R, mà I = P/U; tăng U ⇒ giảm I ⇒ giảm I² mạnh'], 3, 'Hao phí tỉ lệ I² nên tăng U gấp đôi ⇒ I giảm 1/2 ⇒ hao phí giảm 4 lần.'),
  ]),

  M(13, 'Sử dụng an toàn và tiết kiệm điện', [
    Q('Tại sao phải sử dụng điện an toàn?', ['Giảm hao phí điện năng trên đường dây', 'Tăng tuổi thọ thiết bị', 'Tiết kiệm tiền', 'Tránh điện giật, cháy nổ, hoả hoạn'], 3, 'An toàn điện = an toàn tính mạng + tài sản.'),
    Q('Khi sửa điện cần?', ['Dùng tay không', 'Ngắt nguồn điện trước khi sửa', 'Sửa thẳng', 'Sửa khi đang có điện'], 1, 'Quy tắc bắt buộc: ngắt cầu dao trước khi thao tác.'),
    Q('Cầu chì có tác dụng?', ['Tự động ngắt mạch khi dòng điện quá lớn', 'Tạo dòng', 'Tăng điện áp', 'Tiết kiệm điện'], 0, 'Cầu chì bảo vệ mạch khỏi quá tải, ngắn mạch.'),
    Q('Để tiết kiệm điện, nên?', ['Dùng bóng sợi đốt', 'Dùng đèn LED, tắt thiết bị khi không cần, dùng thiết bị có nhãn năng lượng cao', 'Bật cả ngày', 'Mở cửa tủ lạnh nhiều'], 1, 'LED tiết kiệm hơn sợi đốt 80%; tắt thiết bị + chọn thiết bị tiết kiệm năng lượng.'),
    Q('Đèn LED so với bóng sợi đốt?', ['Tiết kiệm điện hơn nhiều, tuổi thọ cao hơn', 'Tiêu tốn hơn', 'Đắt mãi mãi', 'Sáng kém hơn'], 0, 'LED chỉ tốn ~10-20% điện so với sợi đốt cùng độ sáng.'),
    Q('Khi gặp người bị điện giật, ưu tiên?', ['Ngắt nguồn điện trước, sau đó sơ cứu', 'Kéo tay nạn nhân', 'Đổ nước', 'Gọi điện thoại'], 0, 'Ngắt nguồn là bước đầu tiên để cứu nạn nhân an toàn.'),
  ]),

  M(14, 'Hiện tượng cảm ứng điện từ — Định luật Faraday', [
    Q('Hiện tượng cảm ứng điện từ phát hiện bởi?', ['Galileo', 'Edison', 'Michael Faraday (1831)', 'Newton'], 2, 'Faraday phát hiện 1831: nam châm chuyển động qua cuộn dây sinh dòng điện.'),
    Q('Điều kiện để xuất hiện dòng điện cảm ứng?', ['Từ thông qua mạch kín biến thiên', 'Có nguồn pin', 'Mạch hở', 'Có điện trở lớn'], 0, 'Định luật cảm ứng: từ thông biến thiên ⇒ suất điện động cảm ứng.'),
    Q('Khi đưa nam châm lại gần cuộn dây, dòng điện cảm ứng?', ['Chỉ khi cuộn dây quay', 'Chỉ khi nam châm dừng', 'Không, vì cuộn dây đứng yên', 'Có'], 3, 'Có chuyển động tương đối ⇒ từ thông biến thiên ⇒ sinh dòng cảm ứng.'),
    Q('Máy phát điện hoạt động dựa trên?', ['Hiệu ứng quang điện', 'Định luật Jun', 'Hiện tượng cảm ứng điện từ', 'Định luật Ôm'], 2, 'Máy phát điện = chuyển cơ năng → điện năng dựa trên cảm ứng điện từ.'),
    Q('Máy biến áp có tác dụng?', ['Đo điện', 'Tăng hoặc giảm hiệu điện thế xoay chiều', 'Tạo dòng điện', 'Đổi chiều dòng điện'], 1, 'Máy biến áp dùng cảm ứng điện từ để tăng/giảm U xoay chiều.'),
    Q('Số vòng dây tăng thì hiệu điện thế thứ cấp?', ['Bằng 0', 'Không đổi', 'Tăng tỉ lệ với số vòng (U₂/U₁ = N₂/N₁)', 'Giảm tỉ lệ nghịch với số vòng'], 2, 'Công thức máy biến áp: U₂/U₁ = N₂/N₁.'),
  ]),

  M(15, 'Dòng điện xoay chiều', [
    Q('Dòng điện xoay chiều là?', ['Dòng điện không đổi', 'Dòng điện có chiều và cường độ thay đổi theo thời gian (thường hình sin)', 'Dòng điện một chiều', 'Dòng điện trong pin'], 1, 'AC = Alternating Current — đổi chiều liên tục.'),
    Q('Tần số dòng điện ở Việt Nam?', ['60 Hz', '220 Hz', '50 Hz', '100 Hz'], 2, 'Mạng điện Việt Nam: 220V – 50Hz (60Hz ở Mỹ, Nhật Bản).'),
    Q('1 Hz nghĩa là?', ['1 chu kỳ/giây', '1 vòng/phút', '1 hiệu điện thế', '1 sóng/giờ'], 0, 'Hz = đơn vị tần số = số chu kỳ trong 1 giây.'),
    Q('Tác dụng nhiệt của dòng điện xoay chiều?', ['Không có vì dòng đổi chiều liên tục', 'Tương tự dòng một chiều (làm nóng vật)', 'Yếu hơn', 'Mạnh hơn nhiều'], 1, 'Dòng AC vẫn làm nóng vật dẫn (nguyên lý bàn ủi, bếp điện).'),
    Q('Tác dụng từ của dòng điện xoay chiều?', ['Cố định', 'Có và biến thiên (tạo từ trường biến thiên)', 'Không có vì dòng đổi chiều liên tục', 'Bằng 0'], 1, 'AC tạo từ trường biến thiên ⇒ ứng dụng trong máy biến áp, động cơ.'),
    Q('Tác dụng nào CHỈ có ở dòng một chiều mà không có ở xoay chiều?', ['Tác dụng hoá học (điện phân)', 'Tác dụng từ', 'Tác dụng sinh lý', 'Tác dụng nhiệt'], 0, 'Điện phân cần dòng một chiều ổn định để chuyển ion về cực âm/dương.'),
  ]),

  M(16, 'Thấu kính — Khái niệm và phân loại', [
    Q('Thấu kính là gì?', ['Gương phẳng', 'Vật chất bất kỳ', 'Khối gỗ', 'Khối chất trong suốt giới hạn bởi 2 mặt cong (hoặc 1 mặt phẳng + 1 mặt cong)'], 3, 'Thấu kính: chất trong suốt (thuỷ tinh/nhựa), giới hạn bởi mặt cầu/phẳng.'),
    Q('2 loại thấu kính chính?', ['Thấu kính tròn và vuông', 'Thấu kính đỏ và xanh', 'Thấu kính lớn và nhỏ', 'Thấu kính hội tụ (lồi) và phân kì (lõm)'], 3, 'Hội tụ: dày ở giữa, mỏng ở mép; phân kì: ngược lại.'),
    Q('Thấu kính hội tụ có?', ['Đường rìa dày, giữa mỏng', 'Đều mỏng', 'Đều dày', 'Đường rìa mỏng, giữa dày'], 3, 'Thấu kính hội tụ (lồi) có mép mỏng, giữa dày.'),
    Q('Tiêu cự f của thấu kính là?', ['Khoảng cách từ quang tâm đến tiêu điểm', 'Chiều cao kính', 'Độ dày kính', 'Bán kính mặt cong'], 0, 'f = khoảng cách từ O (quang tâm) đến F (tiêu điểm chính).'),
    Q('Tiêu điểm chính F là?', ['Điểm hội tụ của chùm tia tới song song trục chính (qua thấu kính hội tụ)', 'Điểm bất kỳ', 'Đỉnh kính', 'Tâm kính'], 0, 'Chùm song song qua thấu kính hội tụ ⇒ cắt nhau tại F.'),
    Q('Đối với thấu kính phân kì, f mang dấu?', ['Bằng 0', 'Phụ thuộc', 'Dương (vì xét giá trị tuyệt đối)', 'Âm'], 3, 'Quy ước: f hội tụ > 0; f phân kì < 0.'),
  ]),

  M(17, 'Ảnh tạo bởi thấu kính hội tụ', [
    Q('Vật đặt ngoài tiêu cự (d > f) qua thấu kính hội tụ tạo ảnh?', ['Ảo, cùng chiều', 'Thật, ngược chiều', 'Vô cực', 'Bằng vật'], 1, 'd > f ⇒ ảnh thật, ngược chiều, có thể hứng được trên màn.'),
    Q('Vật đặt trong tiêu cự (d < f) qua thấu kính hội tụ tạo ảnh?', ['Ảo, ngược chiều', 'Bằng vật', 'Thật, lớn hơn', 'Ảo, cùng chiều, lớn hơn vật'], 3, 'd < f ⇒ ảnh ảo, cùng chiều, lớn hơn vật — nguyên lý kính lúp.'),
    Q('Vật ở vô cực (d = ∞) qua thấu kính hội tụ tạo ảnh?', ['Tại quang tâm O', 'Không có ảnh', 'Tại vô cực', 'Tại tiêu điểm F\''], 3, 'Chùm tia song song hội tụ tại tiêu điểm ảnh.'),
    Q('Kính lúp là?', ['Lăng kính', 'Gương cầu', 'Thấu kính hội tụ có tiêu cự ngắn, vật đặt trong tiêu cự', 'Thấu kính phân kì'], 2, 'Kính lúp: thấu kính hội tụ f ngắn, cho ảnh ảo lớn hơn vật.'),
    Q('Công thức thấu kính (gần đúng)?', ['f = d + d\'', '1/d = 1/f + 1/d\'', '1/f = 1/d + 1/d\' (cho ảnh thật)', 'd = f·d\''], 2, 'Công thức 1/f = 1/d + 1/d\' (quy ước dấu cho từng trường hợp).'),
    Q('Số phóng đại k = ?', ['d·d\' (tích khoảng cách vật và ảnh)', 'd\'/d (hoặc h\'/h)', 'f/d (tỉ số tiêu cự trên khoảng vật)', 'd + d\''], 1, 'k = h\'/h = d\'/d (giá trị tuyệt đối).'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Phương trình Fe + CuSO₄?', ['FeS + CuO', 'Fe(OH)₂ + Cu', 'Cu + FeSO₄', 'Không phản ứng'], 2, 'Fe đẩy Cu (đứng trước Cu): Fe + CuSO₄ → FeSO₄ + Cu↓.'),
    Q('Al phản ứng với dung dịch NaOH vì?', ['Al rất hoạt động', 'Al là kim loại lưỡng tính', 'Al không lưỡng tính', 'NaOH là axit'], 1, 'Al phản ứng được cả axit và bazơ ⇒ kim loại lưỡng tính.'),
    Q('Định luật Ôm: I = ?', ['R/U (đảo tử số và mẫu số)', 'U + R (cộng thay vì chia)', 'U/R', 'U·R (nhân thay vì chia)'], 2, 'I = U/R.'),
    Q('Mắc 2 điện trở 6Ω song song, R_tđ = ?', ['6Ω', '3Ω', '0Ω', '12Ω'], 1, 'Mạch song song 2 R giống nhau: R_tđ = R/2 = 3 Ω.'),
    Q('Khí Cl₂ có màu?', ['Nâu đỏ (giống khí NO₂)', 'Xanh dương (giống dung dịch CuSO₄)', 'Vàng lục', 'Không màu'], 2, 'Cl₂: khí vàng lục, mùi xốc, độc.'),
    Q('Công suất P = U·I = ? khi U = 220V, I = 2A?', ['218W', '222W', '440W', '110W'], 2, 'P = 220·2 = 440 W.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Mở đầu hoá hữu cơ — Khái niệm hợp chất hữu cơ', [
    Q('Hợp chất hữu cơ là?', ['Hợp chất của cacbon (trừ CO, CO₂, muối cacbonat…)', 'Hợp chất khoáng', 'Hợp chất kim loại', 'Hợp chất chứa oxi'], 0, 'Hợp chất hữu cơ luôn chứa C (trừ vài hợp chất vô cơ chứa C như CO₂, CaCO₃).'),
    Q('Đặc điểm chung của hợp chất hữu cơ?', ['Kém bền nhiệt, đa số tan trong dung môi hữu cơ, dễ cháy', 'Khó cháy', 'Bền nhiệt cao', 'Dễ tan trong nước'], 0, 'Hữu cơ thường kém bền, dễ cháy, ít tan trong nước, tan tốt trong dung môi hữu cơ.'),
    Q('Hoá học hữu cơ là ngành nghiên cứu?', ['Các hợp chất hữu cơ và phản ứng của chúng', 'Các bazơ và muối của chúng', 'Các chất khí trong khí quyển', 'Kim loại'], 0, 'Hoá hữu cơ tập trung vào hợp chất C-H, C-O, C-N…'),
    Q('Liên kết phổ biến trong hợp chất hữu cơ?', ['Liên kết hidro', 'Liên kết cộng hoá trị', 'Liên kết ion', 'Liên kết kim loại'], 1, 'Hữu cơ chủ yếu liên kết cộng hoá trị (C-H, C-C, C-O…).'),
    Q('Phân loại hợp chất hữu cơ theo thành phần?', ['Phân theo màu', 'Chỉ có hidrocacbon', 'Hidrocacbon (chỉ C, H) và dẫn xuất hidrocacbon', 'Có 5 loại'], 2, '2 nhóm chính: hidrocacbon (CₓHᵧ) và dẫn xuất (chứa thêm O, N, X…).'),
    Q('Ví dụ hợp chất hữu cơ là?', ['CH₄, C₂H₅OH, CH₃COOH, glucozơ', 'KOH, CaO', 'Fe, Cu', 'NaCl, H₂O, CO₂'], 0, 'CH₄ (metan), C₂H₅OH (rượu etylic), CH₃COOH (axit axetic), glucozơ — đều hữu cơ.'),
  ]),

  M(20, 'Metan (CH₄)', [
    Q('Công thức phân tử của metan?', ['C₂H₄ (etilen)', 'CH₂ (gốc metylen không bền)', 'C₂H₆ (etan)', 'CH₄'], 3, 'Metan = CH₄ — hidrocacbon đơn giản nhất.'),
    Q('Cấu tạo phân tử metan?', ['Mặt phẳng', 'Đường thẳng', 'Cấu trúc vòng 4 nguyên tử C', 'Tứ diện đều, 4 liên kết C-H'], 3, 'C ở giữa, 4 H tại 4 đỉnh tứ diện đều, góc liên kết ~109,5°.'),
    Q('Tính chất vật lý của metan?', ['Khí có màu vàng', 'Khí không màu, không mùi, nhẹ hơn không khí, ít tan trong nước', 'Chất lỏng dễ bay hơi giống xăng', 'Chất rắn không màu giống parafin'], 1, 'CH₄ là khí, M = 16 < 29 (KK), ít tan trong H₂O.'),
    Q('CH₄ + Cl₂ →? (có ánh sáng)', ['CH₃Cl + HCl', 'CCl₄ (chỉ tạo khi Cl₂ rất dư)', 'CH₄Cl (công thức sai cấu tạo)', 'CO₂ (sản phẩm của phản ứng cháy)'], 0, 'Phản ứng thế: CH₄ + Cl₂ → CH₃Cl + HCl (askt).'),
    Q('CH₄ cháy trong O₂ tạo?', ['CO₂ + H₂O', 'Không cháy', 'CO + H₂', 'C + H₂'], 0, 'CH₄ + 2O₂ → CO₂ + 2H₂O (phản ứng tỏa nhiều nhiệt).'),
    Q('Metan có ở đâu?', ['Trong nước biển', 'Trong cát', 'Trong kim loại', 'Khí thiên nhiên, khí biogas, ruột động vật, đầm lầy'], 3, 'CH₄ là thành phần chính của khí thiên nhiên (~95%), biogas.'),
  ]),

  M(21, 'Etilen (C₂H₄)', [
    Q('Công thức của etilen?', ['C₂H₆ (etan, không có liên kết đôi)', 'CH₄ (metan, hidrocacbon no)', 'C₂H₂ (axetilen, có liên kết ba)', 'C₂H₄'], 3, 'Etilen = C₂H₄ (eten).'),
    Q('Đặc điểm cấu tạo etilen?', ['Có 1 liên kết ba C≡C', 'Liên kết kim loại', 'Chỉ liên kết đơn', 'Có 1 liên kết đôi C=C'], 3, 'C₂H₄: H₂C=CH₂ — có 1 liên kết đôi giữa 2 nguyên tử C.'),
    Q('Etilen tham gia phản ứng đặc trưng?', ['Chỉ trao đổi', 'Phản ứng cộng (với H₂, Br₂, H₂O…)', 'Không phản ứng', 'Chỉ phản ứng thế'], 1, 'Liên kết π yếu ⇒ dễ bị phá vỡ ⇒ cộng các phân tử khác.'),
    Q('C₂H₄ + Br₂ → ?', ['Không phản ứng', 'C₂H₄Br₂ (làm mất màu nước Brom)', 'C₂HBr₃', 'CBr₄ (sản phẩm thế hoàn toàn metan)'], 1, 'Phản ứng đặc trưng để nhận biết liên kết đôi: nC₂H₄ + Br₂ → mất màu vàng nâu.'),
    Q('Etilen có ứng dụng quan trọng?', ['Làm xăng', 'Làm thuốc nổ', 'Làm phân bón', 'Sản xuất nhựa PE, kích thích trái cây chín, sản xuất rượu etylic'], 3, 'C₂H₄ là monome của PE; cũng dùng làm chín hoa quả; nguyên liệu hoá dầu.'),
    Q('Phản ứng trùng hợp etilen tạo?', ['Cao su', 'PVC (trùng hợp từ vinyl clorua)', 'Polipropilen', 'Polietilen (PE)'], 3, 'n·CH₂=CH₂ → (-CH₂-CH₂-)ₙ = PE.'),
  ]),

  M(22, 'Axetilen (C₂H₂) — Benzen (C₆H₆)', [
    Q('Công thức của axetilen?', ['C₂H₆ (etan, hidrocacbon no)', 'C₂H₂', 'CH₄ (metan, một nguyên tử C)', 'C₂H₄ (etilen, có liên kết đôi)'], 1, 'Axetilen (etin) = C₂H₂ — có 1 liên kết ba C≡C.'),
    Q('Axetilen được điều chế từ?', ['Khí than', 'Đá vôi', 'Mỡ động vật', 'CaC₂ + H₂O → C₂H₂ + Ca(OH)₂'], 3, 'Phương pháp công nghiệp: thủy phân canxi cacbua (đất đèn).'),
    Q('Axetilen dùng làm gì?', ['Làm thực phẩm', 'Làm thuốc', 'Đèn xì hàn cắt kim loại, sản xuất nhựa, dung môi', 'Làm phân bón'], 2, 'C₂H₂ cháy với O₂ tạo ngọn lửa nóng ~3000°C ⇒ hàn cắt kim loại.'),
    Q('Benzen có công thức?', ['C₅H₅ (vòng 5 cạnh, không phải benzen)', 'C₇H₈ (toluen, đồng đẳng của benzen)', 'C₆H₁₂ (xiclohexan, vòng no)', 'C₆H₆'], 3, 'Benzen = C₆H₆ — vòng 6 cạnh đặc trưng.'),
    Q('Cấu trúc benzen?', ['Hình cầu', 'Tứ diện', 'Mạch thẳng', 'Vòng 6 cạnh đều, có 3 liên kết đôi xen kẽ (vòng thơm)'], 3, 'Vòng benzen với hệ liên kết π liên hợp (thơm) — rất bền.'),
    Q('Tính chất hoá học của benzen?', ['Khó cộng, dễ thế (vì vòng thơm bền)', 'Phản ứng mạnh với nước', 'Dễ cộng', 'Tan tốt trong nước'], 0, 'Benzen ưu tiên phản ứng thế (Br₂/Fe, HNO₃/H₂SO₄…) hơn cộng.'),
  ]),

  M(23, 'Rượu etylic (C₂H₅OH)', [
    Q('Công thức của rượu etylic?', ['CH₃COOH', 'C₃H₇OH', 'CH₃OH (metanol, rượu độc)', 'C₂H₅OH'], 3, 'Etanol: CH₃-CH₂-OH = C₂H₅OH.'),
    Q('Nhóm chức của rượu?', ['-CHO', '-OH (hidroxyl)', '-NH₂', '-COOH'], 1, 'Rượu (alcohol) đặc trưng bởi nhóm -OH gắn vào C no.'),
    Q('Rượu etylic tan trong nước?', ['Tan ít', 'Không tan', 'Tan ở nhiệt độ cao', 'Tan vô hạn (cồn pha nước)'], 3, 'C₂H₅OH tan vô hạn trong nước nhờ liên kết hidro với H₂O.'),
    Q('Phản ứng đặc trưng: rượu + Na → ?', ['CH₃COONa + H₂', 'Không phản ứng', 'C₂H₅ONa + H₂', 'C₂H₅OH·Na'], 2, '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑ (nhận biết nhóm -OH).'),
    Q('Rượu etylic được sản xuất công nghiệp từ?', ['Tinh bột/đường + lên men (men rượu)', 'Khoáng vật', 'Cát thạch anh nung nóng', 'Đá vôi'], 0, 'Lên men: (C₆H₁₀O₅)ₙ → glucozơ → 2C₂H₅OH + 2CO₂.'),
    Q('Độ rượu là?', ['Số ml C₂H₅OH có trong 100 ml dung dịch rượu', 'Khối lượng rượu', 'Nhiệt độ rượu', 'Áp suất rượu'], 0, 'Rượu 40° = 40 ml etanol nguyên chất trong 100 ml dung dịch.'),
  ]),

  M(24, 'Axit axetic (CH₃COOH)', [
    Q('Công thức axit axetic?', ['C₂H₅OH', 'HCOOH (axit fomic, ít C hơn)', 'CH₃COOH', 'CH₃COCH₃'], 2, 'Axit axetic = CH₃-COOH, có nhóm -COOH.'),
    Q('Nhóm chức của axit cacboxylic?', ['-CHO', '-CO-', '-COOH (cacboxyl)', '-OH'], 2, 'Nhóm -COOH = cacboxyl, kết hợp -C=O và -OH.'),
    Q('CH₃COOH có tính chất?', ['Tính bazơ', 'Tính axit yếu, làm quỳ tím hoá đỏ', 'Trung tính', 'Không có tính chất'], 1, 'Axit yếu nhưng vẫn làm quỳ đỏ, tác dụng kim loại, oxit bazơ, bazơ, muối.'),
    Q('CH₃COOH + Na → ?', ['Không phản ứng', 'CH₃COONa + H₂', 'CH₃ONa', 'CH₃COOH·Na'], 1, '2CH₃COOH + 2Na → 2CH₃COONa + H₂↑.'),
    Q('CH₃COOH + C₂H₅OH ⇌ ? (xt H₂SO₄ đặc)', ['Không phản ứng', 'CO₂ + H₂O', 'CH₃COOC₂H₅ (este) + H₂O', 'CH₃OH + C₂H₅OH'], 2, 'Phản ứng este hoá: axit + rượu → este + nước.'),
    Q('Giấm ăn là?', ['Đường tan', 'Nước muối', 'Rượu loãng', 'Dung dịch CH₃COOH 2-5% trong nước'], 3, 'Giấm = dung dịch axit axetic ~3-5%.'),
  ]),

  M(25, 'Chất béo — Lipit', [
    Q('Chất béo là?', ['Đường đơn (monosaccarit)', 'Tinh bột', 'Protein', 'Trieste của glixerol và các axit béo'], 3, 'Chất béo (lipit) = trieste của glixerol C₃H₅(OH)₃ với các axit béo.'),
    Q('Chất béo gồm 2 dạng?', ['Mỡ (động vật, no, rắn) và dầu (thực vật, không no, lỏng)', 'Chỉ dầu', 'Bột và lỏng', 'Chỉ mỡ'], 0, 'Mỡ: chứa axit béo no, rắn; dầu: chứa axit béo không no, lỏng.'),
    Q('Phản ứng xà phòng hoá chất béo?', ['Chất béo + NaOH → muối Na của axit béo (xà phòng) + glixerol', 'Chất béo + nước → đường', 'Không phản ứng', 'Chất béo + O₂ → CO₂'], 0, 'Thủy phân kiềm tạo xà phòng (muối Na/K của axit béo).'),
    Q('Chất béo có vai trò gì?', ['Cung cấp năng lượng cao, dung môi cho vitamin tan trong dầu (A, D, E, K)', 'Chỉ làm thực phẩm', 'Chỉ làm đẹp', 'Không có vai trò'], 0, '1 g chất béo cho 9 kcal — nguồn năng lượng dự trữ.'),
    Q('Vì sao không nên ăn quá nhiều chất béo?', ['Tăng chiều cao', 'Tăng sức khỏe', 'Gây béo phì, xơ vữa động mạch, bệnh tim mạch', 'Không có hại'], 2, 'Quá nhiều cholesterol/triglyceride ⇒ xơ vữa, tim mạch, béo phì.'),
    Q('Ứng dụng của chất béo?', ['Làm thuốc nổ', 'Thực phẩm, sản xuất xà phòng, mỹ phẩm, biodiesel', 'Làm gỗ', 'Làm phân bón'], 1, 'Đa dụng: ăn uống, công nghiệp xà phòng, nhiên liệu sinh học.'),
  ]),

  M(26, 'Glucozơ (C₆H₁₂O₆) và saccarozơ (C₁₂H₂₂O₁₁)', [
    Q('Glucozơ thuộc loại?', ['Disaccarit', 'Polisaccarit', 'Monosaccarit (đường đơn)', 'Lipit (chất béo, không phải gluxit)'], 2, 'Glucozơ là monosaccarit — đường đơn đơn giản nhất.'),
    Q('Công thức glucozơ?', ['C₁₂H₂₂O₁₁', 'C₆H₁₂O₆', 'C₂H₆O (công thức của etanol)', '(C₆H₁₀O₅)ₙ'], 1, 'Glucozơ = C₆H₁₂O₆ (M = 180).'),
    Q('Glucozơ có ở đâu?', ['Trong máu, mật ong, nho chín', 'Trong dầu', 'Trong cát', 'Trong sắt'], 0, 'Glucozơ có nhiều trong mật ong, nho chín, máu (glucoza huyết).'),
    Q('Phản ứng tráng gương của glucozơ?', ['Khử Ag⁺ tạo Ag↓ kim loại bóng', 'Tạo CO₂', 'Tạo H₂', 'Không phản ứng'], 0, 'Glucozơ có nhóm -CHO ⇒ phản ứng với AgNO₃/NH₃ tạo gương Ag.'),
    Q('Saccarozơ là?', ['Monosaccarit', 'Lipit (chất béo, không phải gluxit)', 'Disaccarit (1 phân tử glucozơ + 1 phân tử fructozơ)', 'Polisaccarit'], 2, 'Saccarozơ = đường mía/đường thốt nốt, M = 342.'),
    Q('Saccarozơ thủy phân tạo?', ['2 phân tử fructozơ', 'Tinh bột', 'Glucozơ + Fructozơ', 'Glucozơ + Glucozơ'], 2, 'C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucozơ) + C₆H₁₂O₆ (fructozơ).'),
  ]),

  M(27, 'Tinh bột — Xenlulozơ', [
    Q('Tinh bột và xenlulozơ đều thuộc?', ['Polisaccarit (C₆H₁₀O₅)ₙ', 'Disaccarit', 'Lipit (chất béo, không phải gluxit)', 'Monosaccarit'], 0, 'Đều là polisaccarit, cùng công thức (C₆H₁₀O₅)ₙ nhưng cấu trúc khác.'),
    Q('Tinh bột có ở đâu?', ['Dầu thực vật ép từ hạt', 'Gỗ và bã mía (chứa nhiều xenlulozơ)', 'Hạt ngũ cốc, củ, quả (gạo, ngô, khoai, sắn)', 'Quặng sắt và đá vôi'], 2, 'Tinh bột tích lũy trong các cơ quan dự trữ của thực vật.'),
    Q('Xenlulozơ có ở đâu?', ['Máu và dịch tế bào động vật', 'Đường mía và nước ép trái cây', 'Thành tế bào thực vật (bông, gỗ, tre nứa)', 'Mỡ động vật và dầu thực vật'], 2, 'Xenlulozơ là thành phần chính của vách tế bào thực vật.'),
    Q('Phản ứng nhận biết tinh bột?', ['Tinh bột + axit → màu vàng', 'Tinh bột + iot (I₂) → màu xanh tím', 'Tinh bột + nước → màu đỏ', 'Tinh bột + AgNO₃ → kết tủa trắng'], 1, 'Phản ứng nhận biết tinh bột là tạo phức màu xanh tím với iot.'),
    Q('Ứng dụng của xenlulozơ?', ['Làm thực phẩm trực tiếp', 'Làm phân bón', 'Làm thuốc nổ', 'Sản xuất giấy, vải sợi, tơ nhân tạo (visco, axetat)'], 3, 'Giấy, vải bông, sợi visco, axetat… đều từ xenlulozơ.'),
    Q('Trong cơ thể người, tinh bột được tiêu hoá thành?', ['Glucozơ (qua enzim amilaza)', 'Fructozơ', 'Xenlulozơ', 'Saccarozơ'], 0, 'Tinh bột → maltozơ → glucozơ trong miệng, ruột.'),
  ]),

  M(28, 'Protein và polime', [
    Q('Protein được cấu tạo từ?', ['Axit béo', 'Các axit amin liên kết với nhau bằng liên kết peptit', 'Glucozơ', 'Nucleotit'], 1, 'Protein = chuỗi axit amin nối nhau qua liên kết peptit (-CO-NH-).'),
    Q('Có khoảng bao nhiêu loại axit amin tạo nên protein của sinh vật?', ['100', '20', '50', '10'], 1, 'Có 20 axit amin chuẩn, trong đó 9 axit amin thiết yếu phải lấy từ thức ăn.'),
    Q('Protein có ở đâu?', ['Trong sắt', 'Trong cơ thể sinh vật (thịt, cá, trứng, sữa, đậu nành)', 'Trong cát', 'Trong khí O₂'], 1, 'Protein có nhiều trong thực phẩm động vật và một số thực vật (đậu).'),
    Q('Polime là?', ['Hợp chất nhỏ', 'Hợp chất vô cơ', 'Hợp chất khí', 'Hợp chất phân tử khối rất lớn, do nhiều monome liên kết tạo thành'], 3, 'Polime: phân tử lớn (polymer = nhiều monome).'),
    Q('PE (polietilen) được tạo từ?', ['Trùng hợp protein', 'Phản ứng trùng hợp etilen (C₂H₄)', 'Trùng hợp glucozơ', 'Trùng hợp metan'], 1, 'n CH₂=CH₂ → (-CH₂-CH₂-)ₙ.'),
    Q('PVC là?', ['Cao su', 'Polipropylen', 'Polivinyl clorua, tạo từ vinyl clorua CH₂=CHCl', 'Polietilen'], 2, 'PVC dùng làm ống nước, cửa nhựa, dây cáp điện…'),
  ]),

  M(29, 'Di truyền học — Menđen và quy luật di truyền', [
    Q('Gregor Mendel được coi là?', ['Cha của vật lý', 'Người phát minh kính hiển vi', 'Cha đẻ của di truyền học hiện đại', 'Người phát minh ra ADN'], 2, 'Mendel (1822-1884) công bố các quy luật di truyền năm 1865.'),
    Q('Mendel nghiên cứu di truyền ở?', ['Ruồi giấm', 'Cây đậu Hà Lan', 'Chuột bạch', 'Người (qua phả hệ gia đình)'], 1, 'Mendel chọn đậu Hà Lan vì có nhiều cặp tính trạng đối lập rõ rệt.'),
    Q('Quy luật phân li của Mendel phát biểu?', ['Gen luôn đi cùng nhau', 'Tính trạng không di truyền', 'Tính trạng do nhiều gen', 'Mỗi cặp tính trạng do 1 cặp gen quy định; khi giảm phân, 2 gen tách rời nhau, mỗi giao tử chứa 1 gen'], 3, 'Quy luật phân li: alen tách nhau khi tạo giao tử.'),
    Q('Tính trạng trội là tính trạng?', ['Tự nhiên', 'Biểu hiện ở F₂', 'Không biểu hiện', 'Biểu hiện ở F₁ khi lai 2 dòng thuần khác nhau'], 3, 'F₁ đồng tính trội ⇒ tính trạng đó là trội.'),
    Q('Tỉ lệ kiểu hình ở F₂ trong lai 1 cặp tính trạng (Mendel)?', ['1:2:1', '3 trội : 1 lặn', '1:1', '9:3:3:1'], 1, '3 trội : 1 lặn ở F₂ khi lai 2 bố mẹ thuần chủng.'),
    Q('Genotype Aa × Aa cho tỉ lệ kiểu gen?', ['1 AA : 3 Aa', '1 AA : 1 aa', '1 AA : 2 Aa : 1 aa', '3 Aa : 1 aa'], 2, 'Lai phân tích Aa × Aa: 1/4 AA + 2/4 Aa + 1/4 aa.'),
  ]),

  M(30, 'ADN — Cấu trúc và chức năng', [
    Q('ADN là viết tắt của?', ['Axit nucleic', 'ADN viết tắt nguyên gốc tiếng Việt', 'Axit deoxiribonucleic', 'Adenin'], 2, 'ADN = Axit deoxiribonucleic (DNA - Deoxyribonucleic Acid).'),
    Q('Cấu trúc của ADN?', ['Chuỗi đơn xoắn', 'Mạch đơn', 'Khối cầu', 'Chuỗi xoắn kép gồm 2 mạch đơn liên kết theo nguyên tắc bổ sung'], 3, 'Watson-Crick (1953): ADN là chuỗi xoắn kép.'),
    Q('Các loại bazơ nitơ trong ADN?', ['A, T, G, X (C)', 'A, G, X chỉ', 'A, U, G, X', 'A, T, U, G'], 0, '4 loại bazơ: Adenin (A), Timin (T), Guanin (G), Xytosin (X/C).'),
    Q('Nguyên tắc bổ sung trong ADN?', ['A với A, T với T', 'Không có nguyên tắc', 'A liên kết với T, G liên kết với X (C)', 'A với G, T với X'], 2, 'A=T (2 liên kết H), G≡X (3 liên kết H).'),
    Q('Chức năng của ADN?', ['Tạo protein trực tiếp', 'Tạo năng lượng', 'Lưu trữ, bảo quản và truyền đạt thông tin di truyền', 'Tạo lipit'], 2, 'ADN là vật chất di truyền, mã hoá thông tin tạo protein.'),
    Q('Đơn phân (monome) của ADN là?', ['Axit amin', 'Đường glucozơ', 'Axit béo', 'Nucleotit'], 3, 'Đơn phân ADN = nucleotit, gồm 3 thành phần: đường deoxiribozơ + bazơ + photphat.'),
  ]),

  M(31, 'Gen và protein — Cơ chế di truyền', [
    Q('Gen là?', ['Một đoạn của ADN mang thông tin quy định 1 tính trạng/cấu trúc protein', 'Một protein', 'Một nhiễm sắc thể', 'Một tế bào'], 0, 'Gen = đoạn ADN có chức năng cụ thể (mã hoá 1 polypeptit).'),
    Q('Quá trình tạo protein gồm?', ['Chỉ dịch mã', 'Trao đổi chất', 'Phiên mã (ADN→ARN) + Dịch mã (ARN→protein)', 'Chỉ phiên mã'], 2, '2 giai đoạn: phiên mã trong nhân, dịch mã trên ribosome.'),
    Q('mARN có vai trò?', ['Tạo chất béo', 'Tạo ATP', 'Lưu trữ thông tin', 'Mang thông tin từ ADN ra ribosome để tổng hợp protein'], 3, 'mARN (messenger RNA) = bản sao của gen, truyền tin đến ribosome.'),
    Q('Bộ ba mã hoá (codon) gồm?', ['1 nucleotit', '4 nucleotit', '3 nucleotit liên tiếp mã hoá 1 axit amin', '5 nucleotit'], 2, 'Codon = 3 nucleotit; 64 codon mã hoá 20 axit amin + tín hiệu start/stop.'),
    Q('Đột biến gen là?', ['Mất nhiễm sắc thể', 'Phân bào sai', 'Biến đổi trong cấu trúc của gen (do thay đổi 1 hoặc 1 vài cặp nucleotit)', 'Tăng số nhiễm sắc thể'], 2, 'Đột biến gen: thay đổi cấu trúc 1 gen ở mức nucleotit.'),
    Q('Ý nghĩa của đột biến?', ['Chỉ làm biến đổi kiểu hình tạm thời', 'Luôn có hại', 'Cung cấp nguyên liệu cho tiến hoá và chọn giống', 'Chỉ xảy ra ở vi khuẩn'], 2, 'Đột biến là nguồn biến dị di truyền cho tiến hoá và chọn giống.'),
  ]),

  M(32, 'Nhiễm sắc thể — Cơ chế phân bào', [
    Q('Nhiễm sắc thể (NST) là?', ['Cấu trúc nằm trong nhân tế bào, mang ADN, có thể quan sát ở phân bào', 'Lipit cấu tạo nên màng tế bào', 'Protein', 'Bào quan'], 0, 'NST = ADN + protein histone, quan sát rõ ở kỳ giữa phân bào.'),
    Q('Bộ NST 2n ở người?', ['48', '46 (23 cặp)', '44', '23'], 1, 'Người: 46 NST = 22 cặp NST thường + 1 cặp NST giới tính (XX hoặc XY).'),
    Q('NST giới tính ở người nam và nữ?', ['Cả hai XX', 'Cả hai XY', 'Nam: XX, Nữ: XY', 'Nam: XY, Nữ: XX'], 3, 'Nữ: XX (đồng giao tử), Nam: XY (dị giao tử).'),
    Q('Nguyên phân (mitosis) là?', ['Phân chia ngẫu nhiên', 'Tạo n NST', 'Tạo giao tử', 'Phân bào tạo 2 tế bào con giống tế bào mẹ (cùng 2n)'], 3, 'Nguyên phân duy trì bộ NST 2n ổn định qua thế hệ tế bào.'),
    Q('Giảm phân (meiosis) là?', ['Phân chia ngẫu nhiên', 'Phân bào tạo giao tử với bộ NST n (đơn bội)', 'Tạo 2n', 'Tạo tế bào sinh dưỡng'], 1, 'Giảm phân giảm bộ NST từ 2n xuống n trong giao tử ⇒ thụ tinh phục hồi 2n.'),
    Q('Ý nghĩa của giảm phân?', ['Giảm tốc độ sinh sản', 'Tăng số NST', 'Duy trì ổn định bộ NST của loài qua các thế hệ + tạo biến dị tổ hợp', 'Chỉ tạo tế bào nhỏ'], 2, 'Giảm phân + thụ tinh = cơ chế duy trì 2n + tạo đa dạng di truyền.'),
  ]),

  M(33, 'Ứng dụng di truyền học — Chọn giống', [
    Q('Ứng dụng quan trọng của di truyền học?', ['Y học, chọn giống cây trồng/vật nuôi, công nghệ sinh học, pháp y', 'Chỉ giải trí', 'Chỉ trong sách', 'Chỉ áp dụng được ở vi sinh vật'], 0, 'Di truyền học có ứng dụng rộng: y học (xét nghiệm gen), nông nghiệp, pháp y…'),
    Q('Lai giống là?', ['Phương pháp cho 2 dòng thuần khác nhau giao phối/giao phấn để tạo con lai có nhiều ưu thế', 'Chăn nuôi', 'Trồng vô tính', 'Trồng cây'], 0, 'Lai giống = phép lai 2 dòng thuần ⇒ ưu thế lai ở F₁.'),
    Q('Ưu thế lai (heterosis) là?', ['Con lai kém hơn', 'Bằng bố mẹ', 'Không di truyền sang đời sau', 'Con lai F₁ vượt trội cả 2 bố mẹ về một số chỉ tiêu'], 3, 'F₁ thường cao to khỏe, năng suất cao hơn cả bố mẹ.'),
    Q('Công nghệ ADN tái tổ hợp dùng để?', ['Chỉ giải trí', 'Không ứng dụng', 'Phá hoại tự nhiên', 'Tạo sinh vật biến đổi gen (GMO), insulin, vaccine'], 3, 'CN gen sản xuất insulin từ vi khuẩn E.coli, lúa vàng giàu vitamin A…'),
    Q('Xét nghiệm ADN trong pháp y dùng để?', ['Đoán tương lai', 'Đoán bệnh tật', 'Xác định danh tính (hung thủ, cha con, hài cốt)', 'Đoán tính cách'], 2, 'Pháp y dùng STR/DNA fingerprinting để xác định cá thể.'),
    Q('Bệnh di truyền là?', ['Bệnh do môi trường', 'Bệnh do gen hoặc NST bị bất thường, di truyền từ bố mẹ sang con', 'Bệnh do dinh dưỡng', 'Bệnh nhiễm trùng'], 1, 'Vd: hồng cầu hình liềm, máu khó đông, Down (NST 21)…'),
  ]),

  M(34, 'Ôn tập học kỳ II — Phần I', [
    Q('Hợp chất nào là hợp chất hữu cơ?', ['CO₂ (oxit của cacbon, vô cơ)', 'NaHCO₃', 'CH₄', 'CaCO₃ (muối cacbonat, vô cơ)'], 2, 'CH₄ là hữu cơ; CO₂, NaHCO₃, CaCO₃ là hợp chất vô cơ chứa C (ngoại lệ).'),
    Q('Etilen có liên kết?', ['Ba C≡C', 'Vòng 6 cạnh giống benzen', 'Đơn C-C', 'Đôi C=C'], 3, 'Etilen C₂H₄ có 1 liên kết đôi C=C đặc trưng.'),
    Q('Phản ứng đặc trưng nhận biết liên kết đôi?', ['Làm mất màu nước brom', 'Tạo H₂', 'Tạo CO₂', 'Tạo H₂O'], 0, 'Cộng Br₂ làm mất màu nước brom vàng nâu.'),
    Q('Rượu etylic + Na → ?', ['C₂H₅OH·Na', 'C₂H₅ONa + H₂', 'CH₃COOH', 'Không phản ứng'], 1, 'Phản ứng nhận biết nhóm -OH: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂.'),
    Q('Glucozơ có công thức?', ['C₂H₅OH', 'C₁₂H₂₂O₁₁', 'C₆H₁₂O₆', '(C₆H₁₀O₅)ₙ'], 2, 'Glucozơ — monosaccarit, M = 180.'),
    Q('ADN có cấu trúc?', ['Hình sợi đơn', 'Mạch đơn', 'Hình cầu', 'Chuỗi xoắn kép'], 3, 'Cấu trúc xoắn kép Watson-Crick.'),
  ]),

  M(35, 'Ôn tập học kỳ II — Phần II + Đề thi vào 10', [
    Q('Định luật Ôm: I = ?', ['U/R', 'U + R (cộng thay vì chia)', 'U·R (nhân thay vì chia)', 'R/U (đảo tử số và mẫu số)'], 0, 'I = U/R (định luật Ôm cơ bản).'),
    Q('Thấu kính hội tụ cho vật trong tiêu cự (d < f) tạo ảnh?', ['Bằng vật', 'Ảo, cùng chiều, lớn hơn vật', 'Ảo, ngược chiều', 'Thật, lớn hơn'], 1, 'Nguyên lý kính lúp: d < f ⇒ ảnh ảo lớn hơn.'),
    Q('Máy biến áp tăng U khi?', ['Bằng nhau', 'Số vòng cuộn thứ cấp > số vòng cuộn sơ cấp', 'Ngược lại', 'Không thay đổi'], 1, 'U₂/U₁ = N₂/N₁; muốn U₂ > U₁ thì N₂ > N₁.'),
    Q('Phản ứng nào xảy ra?', ['Cu + AgNO₃ → Cu(NO₃)₂ + Ag', 'Au + HNO₃ loãng → muối + NO', 'Cu + HCl → CuCl₂ + H₂', 'Ag + CuSO₄ → AgSO₄ + Cu'], 0, 'Cu trước Ag trong dãy hoạt động ⇒ Cu đẩy Ag khỏi muối.'),
    Q('Mendel nghiên cứu di truyền ở?', ['Chuột bạch (đối tượng của di truyền y học)', 'Đậu Hà Lan', 'Người (qua phả hệ gia đình)', 'Ruồi giấm'], 1, 'Mendel chọn đậu Hà Lan vì có nhiều cặp tính trạng tương phản rõ.'),
    Q('Để đạt điểm cao môn KHTN, cần?', ['Chỉ học Lý', 'Bỏ qua bài khó', 'Chỉ học thuộc', 'Học đầy đủ 3 phân môn (Lý-Hoá-Sinh), làm nhiều bài tập, hiểu bản chất'], 3, 'KHTN tích hợp 3 môn ⇒ cần ôn đều cả 3 lĩnh vực.'),
  ]),
];

export const S9KHTN_SCENARIOS = indexBy(S9KHTN_WEEKS);
