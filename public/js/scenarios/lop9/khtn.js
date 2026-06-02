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
    Q('Tính chất vật lý chung của kim loại?', ['Dẫn điện, dẫn nhiệt, ánh kim, dẻo', 'Cứng, giòn', 'Không dẫn điện', 'Có mùi đặc trưng'], 0, 'Kim loại có 4 tính chất vật lý đặc trưng: dẫn điện, dẫn nhiệt, ánh kim, dẻo.'),
    Q('Kim loại nào dẫn điện tốt nhất?', ['Cu', 'Al', 'Ag', 'Fe'], 2, 'Thứ tự dẫn điện: Ag > Cu > Au > Al > Fe… ⇒ Ag tốt nhất.'),
    Q('Kim loại tác dụng với phi kim tạo?', ['Muối hoặc oxit', 'Axit', 'Bazơ', 'Khí'], 0, 'Kim loại + phi kim → muối (kl + Cl₂) hoặc oxit (kl + O₂).'),
    Q('Phương trình Na + O₂ → ?', ['Na₂O', 'NaO', 'Na₂O₂', 'NaO₂'], 0, '4Na + O₂ → 2Na₂O (natri oxit).'),
    Q('Kim loại nào nhẹ nhất?', ['Li (Liti)', 'Al', 'Fe', 'Cu'], 0, 'Liti có khối lượng riêng nhỏ nhất trong các kim loại (~0,53 g/cm³).'),
    Q('Tại sao kim loại dẻo?', ['Vì cấu trúc tinh thể với electron tự do và các lớp ion có thể trượt lên nhau', 'Vì có mùi', 'Vì cứng', 'Vì có màu'], 0, 'Cấu trúc mạng tinh thể kim loại + electron tự do ⇒ dễ biến dạng.'),
  ]),

  M(2, 'Dãy hoạt động hoá học của kim loại', [
    Q('Dãy hoạt động hoá học có dạng (sắp xếp giảm dần)?', ['K, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au', 'Au, Ag, Cu, H, Fe, Zn, Al, K', 'Cu, Fe, Zn, Al, Mg, Na, K', 'Theo bảng tuần hoàn'], 0, 'Dãy hoạt động hoá học từ mạnh đến yếu: K, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au.'),
    Q('Kim loại đứng trước H trong dãy có thể?', ['Tác dụng với dung dịch axit loãng giải phóng H₂', 'Không phản ứng', 'Chỉ tan trong nước', 'Cháy trong không khí'], 0, 'Kim loại trước H + HCl/H₂SO₄ loãng → muối + H₂.'),
    Q('Phản ứng nào KHÔNG xảy ra?', ['Zn + 2HCl → ZnCl₂ + H₂', 'Cu + 2HCl → CuCl₂ + H₂', 'Fe + H₂SO₄ → FeSO₄ + H₂', '2Al + 6HCl → 2AlCl₃ + 3H₂'], 1, 'Cu đứng sau H ⇒ không phản ứng với HCl loãng.'),
    Q('Phản ứng giữa Fe + CuSO₄ tạo?', ['FeSO₄ + Cu', 'Fe₂(SO₄)₃ + Cu', 'FeS + CuO', 'Không phản ứng'], 0, 'Fe đứng trước Cu ⇒ Fe đẩy Cu khỏi muối: Fe + CuSO₄ → FeSO₄ + Cu↓.'),
    Q('Kim loại nào phản ứng được với nước ở nhiệt độ thường?', ['K, Na, Ca, Ba', 'Cu, Ag', 'Fe, Al', 'Au, Pt'], 0, 'Chỉ kim loại kiềm và kiềm thổ (K, Na, Ca, Ba…) phản ứng với H₂O ở nhiệt độ thường.'),
    Q('Phương trình Na + H₂O → ?', ['NaOH + H₂', '2NaOH + H₂', 'Na₂O + H₂O', 'NaH + O₂'], 1, '2Na + 2H₂O → 2NaOH + H₂↑.'),
  ]),

  M(3, 'Nhôm (Al) — Tính chất và ứng dụng', [
    Q('Số hiệu nguyên tử của Al?', ['11', '12', '13', '14'], 2, 'Al ở ô số 13, chu kỳ 3, nhóm IIIA.'),
    Q('Tính chất vật lý nổi bật của Al?', ['Nhẹ, dẫn điện tốt, màu trắng bạc', 'Nặng, không dẫn điện', 'Đen, giòn', 'Lỏng ở nhiệt độ thường'], 0, 'Al nhẹ (D = 2,7 g/cm³), dẫn điện tốt (sau Cu), màu trắng bạc.'),
    Q('Al phản ứng với axit HCl tạo?', ['AlCl₃ + H₂', 'AlCl₂ + H₂', 'Al₂Cl₃ + H₂', 'Không phản ứng'], 0, '2Al + 6HCl → 2AlCl₃ + 3H₂↑.'),
    Q('Al có tan trong dung dịch kiềm (NaOH) không?', ['Có (vì Al là kim loại lưỡng tính)', 'Không', 'Chỉ tan trong axit', 'Chỉ ở nhiệt độ cao'], 0, '2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂.'),
    Q('Ứng dụng của Al?', ['Làm xoong nồi, vỏ máy bay, dây điện', 'Làm vỏ tàu thủy', 'Làm pin', 'Làm nhiên liệu'], 0, 'Al nhẹ + chống ăn mòn ⇒ dùng làm đồ gia dụng, vỏ máy bay, dây điện cao thế.'),
    Q('Vì sao đồ Al không bị gỉ trong không khí?', ['Có lớp Al₂O₃ mỏng phủ bên ngoài bảo vệ', 'Al không phản ứng O₂', 'Al ở dạng đặc biệt', 'Al rất bền'], 0, 'Lớp Al₂O₃ mỏng, bền, không cho không khí và nước tiếp tục tác dụng.'),
  ]),

  M(4, 'Sắt (Fe) — Tính chất và hợp chất', [
    Q('Số hiệu nguyên tử của Fe?', ['24', '25', '26', '27'], 2, 'Fe ở ô số 26, chu kỳ 4, nhóm VIIIB.'),
    Q('Fe có những hoá trị nào?', ['+1, +2', '+2, +3', '+3, +4', '+1, +3'], 1, 'Fe có 2 hoá trị phổ biến: +2 (sắt II) và +3 (sắt III).'),
    Q('Fe + 2HCl → ?', ['FeCl₂ + H₂', 'FeCl₃ + H₂', 'Fe(OH)₂', 'FeO + H₂O'], 0, 'Trong HCl loãng, Fe tạo muối Fe²⁺: FeCl₂.'),
    Q('Fe phản ứng với khí Cl₂ tạo?', ['FeCl₂', 'FeCl₃', 'FeO', 'Fe₂O₃'], 1, '2Fe + 3Cl₂ → 2FeCl₃ (Cl₂ là chất oxi hoá mạnh, đẩy Fe lên +3).'),
    Q('Gang là hợp kim của?', ['Fe + C (2-5%)', 'Fe + Cu', 'Fe + Al', 'Fe + Si'], 0, 'Gang: hợp kim Fe-C với C từ 2-5%; thép: 0,01-2%.'),
    Q('Phương trình điều chế Fe từ oxit trong lò cao?', ['Fe₂O₃ + 3CO → 2Fe + 3CO₂', 'Fe₂O₃ + H₂ → Fe + H₂O', 'Fe + O₂ → Fe₂O₃', 'FeO + C → Fe'], 0, 'Phản ứng nhiệt luyện trong lò cao: dùng CO khử Fe₂O₃ thành Fe.'),
  ]),

  M(5, 'Đồng (Cu) — Tính chất và ứng dụng', [
    Q('Số hiệu nguyên tử của Cu?', ['27', '28', '29', '30'], 2, 'Cu ở ô số 29, chu kỳ 4, nhóm IB.'),
    Q('Tính chất vật lý đặc trưng của Cu?', ['Màu đỏ, dẫn điện tốt thứ 2 sau Ag', 'Màu trắng, không dẫn điện', 'Lỏng ở nhiệt độ thường', 'Có từ tính'], 0, 'Cu đỏ ánh kim, dẫn điện tốt thứ 2 sau Ag, dẫn nhiệt tốt.'),
    Q('Cu có phản ứng với HCl loãng không?', ['Có, mạnh', 'Không (vì Cu đứng sau H trong dãy)', 'Chỉ ở nhiệt độ cao', 'Tan chậm'], 1, 'Cu sau H ⇒ không phản ứng với HCl loãng.'),
    Q('Cu phản ứng với H₂SO₄ đặc nóng tạo?', ['CuSO₄ + H₂', 'CuSO₄ + SO₂ + H₂O', 'CuO + H₂', 'Không phản ứng'], 1, 'Cu + 2H₂SO₄ đặc nóng → CuSO₄ + SO₂↑ + 2H₂O.'),
    Q('Ứng dụng quan trọng của Cu?', ['Làm dây điện, vật liệu xây dựng, hợp kim đồng thau, đồng đen', 'Làm xoong nồi nhôm', 'Làm pin', 'Làm thuốc'], 0, 'Cu dẫn điện tốt + bền ⇒ dây điện; hợp kim Cu-Zn (đồng thau), Cu-Sn (đồng đen).'),
    Q('Dung dịch CuSO₄ có màu?', ['Trắng', 'Xanh lam', 'Vàng', 'Đỏ'], 1, 'CuSO₄·5H₂O và dung dịch CuSO₄ có màu xanh lam đặc trưng.'),
  ]),

  M(6, 'Phi kim — Tính chất chung và Clo (Cl₂)', [
    Q('Tính chất vật lý của phi kim?', ['Đa dạng: rắn (S, P), lỏng (Br), khí (O₂, Cl₂)', 'Đều rắn', 'Đều lỏng', 'Đều khí'], 0, 'Phi kim có nhiều trạng thái: S/P/I rắn, Br lỏng, O₂/N₂/Cl₂ khí.'),
    Q('Khí Clo (Cl₂) có màu?', ['Không màu', 'Vàng lục', 'Xanh dương', 'Đỏ'], 1, 'Cl₂ là khí vàng lục, mùi xốc, độc.'),
    Q('Cl₂ + H₂O → ?', ['HCl + O₂', 'HCl + HClO (nước clo)', 'HClO₂', 'Không phản ứng'], 1, 'Cl₂ + H₂O ⇌ HCl + HClO (nước clo có tính tẩy màu nhờ HClO).'),
    Q('Cl₂ phản ứng với NaOH (loãng, nguội) tạo?', ['NaCl + NaClO + H₂O (nước Gia-ven)', 'NaClO₃', 'NaCl + H₂', 'NaCl + O₂'], 0, 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O — nước Gia-ven, dùng tẩy trắng, sát trùng.'),
    Q('Ứng dụng quan trọng của Cl₂?', ['Khử trùng nước, sản xuất nhựa PVC, thuốc trừ sâu', 'Làm phân bón', 'Làm thực phẩm', 'Làm nước giải khát'], 0, 'Cl₂ khử trùng nước máy, sản xuất HCl, PVC, hợp chất hữu cơ.'),
    Q('Cl₂ + 2Fe → ?', ['FeCl₂', '2FeCl₃', 'FeCl', 'Fe + Cl'], 1, '3Cl₂ + 2Fe → 2FeCl₃ (Cl₂ oxi hoá mạnh, đẩy Fe lên +3).'),
  ]),

  M(7, 'Cacbon (C) và silic (Si)', [
    Q('Cacbon có các dạng thù hình phổ biến?', ['Kim cương, than chì, fuleren, cacbon vô định hình', 'Chỉ than chì', 'Chỉ kim cương', 'Khí, lỏng, rắn'], 0, 'Thù hình của C: kim cương (cứng), than chì (mềm, dẫn điện), fuleren, cacbon vô định hình.'),
    Q('Vì sao kim cương cứng, than chì mềm dù cùng nguyên tố C?', ['Do cấu trúc tinh thể khác nhau', 'Do khối lượng khác', 'Do màu sắc khác', 'Do tỉ lệ pha tạp'], 0, 'Kim cương: cấu trúc tứ diện chặt chẽ; than chì: cấu trúc lớp dễ trượt.'),
    Q('CO có tính chất hoá học đặc biệt?', ['Khử oxit kim loại ở nhiệt độ cao (luyện kim)', 'Là chất bazơ', 'Là chất axit mạnh', 'Cháy được trong CO₂'], 0, 'CO + CuO → Cu + CO₂ — dùng nhiều trong luyện kim.'),
    Q('CO₂ làm đục nước vôi trong là phản ứng nào?', ['CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O', 'CO₂ + H₂O → H₂CO₃', 'CO₂ + Ca → CaCO₃', 'CO₂ + NaOH'], 0, 'Phản ứng đặc trưng để nhận biết CO₂: tạo kết tủa trắng CaCO₃.'),
    Q('Si có ứng dụng quan trọng trong?', ['Sản xuất chip điện tử, pin mặt trời, thủy tinh', 'Làm dây điện', 'Làm thuốc nổ', 'Làm thực phẩm'], 0, 'Si tinh khiết = vật liệu bán dẫn quan trọng; SiO₂ = thuỷ tinh.'),
    Q('SiO₂ là?', ['Cát thạch anh', 'Khí', 'Lỏng', 'Kim loại'], 0, 'SiO₂ là chất rắn — thành phần chính của cát thạch anh, thuỷ tinh.'),
  ]),

  M(8, 'Lưu huỳnh (S) và photpho (P)', [
    Q('Lưu huỳnh ở dạng tinh thể có màu?', ['Vàng nhạt', 'Đen', 'Trắng', 'Xanh'], 0, 'S rắn màu vàng nhạt, không tan trong nước, tan trong dung môi hữu cơ.'),
    Q('S + O₂ → ?', ['SO₂', 'SO₃', 'S₂O', 'SO'], 0, 'S cháy trong không khí tạo SO₂ (lưu huỳnh đioxit) — khí mùi hắc.'),
    Q('SO₂ + Ca(OH)₂ → ?', ['CaSO₃ + H₂O', 'CaSO₄ + H₂', 'CaSO₂', 'Không phản ứng'], 0, 'SO₂ tan trong nước tạo H₂SO₃, phản ứng với bazơ tạo muối sunfit.'),
    Q('H₂SO₄ đặc nóng có tính chất đặc trưng?', ['Tính oxi hoá mạnh, hút nước, gây bỏng', 'Tính khử mạnh', 'Trung hoà', 'Tính bazơ'], 0, 'H₂SO₄ đặc: oxi hoá mạnh, hút nước mạnh, ăn mòn.'),
    Q('Photpho có 2 dạng thù hình chính?', ['P trắng và P đỏ', 'P xanh và P vàng', 'P lỏng và P khí', 'P kim loại'], 0, 'P trắng: rất độc, dễ cháy; P đỏ: bền hơn, ít độc.'),
    Q('Ứng dụng của H₃PO₄?', ['Sản xuất phân lân, chất tẩy rửa, đồ uống có gas', 'Làm thuốc nổ', 'Làm xăng', 'Làm thực phẩm trực tiếp'], 0, 'H₃PO₄ làm phân DAP, MAP; là chất phụ gia trong nhiều ngành công nghiệp.'),
  ]),

  M(9, 'Định luật Ôm — Cường độ dòng điện và hiệu điện thế', [
    Q('Định luật Ôm phát biểu?', ['I = U/R', 'I = U·R', 'U = I/R', 'R = I·U'], 0, 'I = U/R (I: cường độ dòng điện, U: hiệu điện thế, R: điện trở).'),
    Q('Đơn vị của cường độ dòng điện?', ['Vôn (V)', 'Ampe (A)', 'Ôm (Ω)', 'Oát (W)'], 1, 'Cường độ dòng điện đo bằng Ampe (A).'),
    Q('Đơn vị điện trở?', ['Vôn', 'Ampe', 'Ôm (Ω)', 'Oát'], 2, 'Điện trở đo bằng Ôm (Ω).'),
    Q('Tính I khi U = 12V, R = 4Ω?', ['3A', '48A', '8A', '0,33A'], 0, 'I = U/R = 12/4 = 3 A.'),
    Q('Khi R không đổi, nếu U tăng 2 lần thì I?', ['Tăng 2 lần', 'Giảm 2 lần', 'Không đổi', 'Tăng 4 lần'], 0, 'I tỉ lệ thuận với U khi R không đổi.'),
    Q('Mạch nối tiếp R₁ = 2Ω, R₂ = 3Ω thì R_tđ = ?', ['1Ω', '5Ω', '6Ω', '0,5Ω'], 1, 'Mắc nối tiếp: R_tđ = R₁ + R₂ = 2 + 3 = 5 Ω.'),
  ]),

  M(10, 'Mạch điện — Nối tiếp và song song', [
    Q('Trong mạch nối tiếp, I qua các điện trở?', ['Bằng nhau', 'Khác nhau', 'Tỉ lệ với R', 'Tỉ lệ nghịch với R'], 0, 'Mạch nối tiếp: I₁ = I₂ = I (dòng điện như nhau qua các điện trở).'),
    Q('Trong mạch nối tiếp, hiệu điện thế?', ['U = U₁ + U₂', 'U = U₁ = U₂', 'U = U₁·U₂', 'U = U₁/U₂'], 0, 'Tổng hiệu điện thế = tổng các U thành phần.'),
    Q('Trong mạch song song, U?', ['Bằng nhau trên các nhánh', 'Cộng dồn', 'Khác nhau', 'Bằng 0'], 0, 'Mạch song song: U₁ = U₂ = U (hiệu điện thế chung).'),
    Q('Mạch song song R₁ = 6Ω, R₂ = 3Ω thì R_tđ = ?', ['9Ω', '2Ω', '4,5Ω', '1Ω'], 1, '1/R = 1/R₁ + 1/R₂ = 1/6 + 1/3 = 3/6 ⇒ R = 2 Ω.'),
    Q('Khi nào mắc thêm song song, R_tđ?', ['Tăng lên', 'Giảm xuống', 'Không đổi', 'Bằng 0'], 1, 'Thêm điện trở song song ⇒ R_tđ luôn giảm (nhỏ hơn điện trở nhỏ nhất).'),
    Q('Điện trở dây dẫn phụ thuộc?', ['Vật liệu (ρ), chiều dài (l), tiết diện (S): R = ρ·l/S', 'Chỉ vật liệu', 'Chỉ chiều dài', 'Chỉ tiết diện'], 0, 'Công thức: R = ρ·l/S.'),
  ]),

  M(11, 'Công và công suất điện', [
    Q('Công suất điện được tính bởi?', ['P = U·I', 'P = U/I', 'P = U + I', 'P = U²·I'], 0, 'P = U·I (W); ngoài ra P = I²R = U²/R.'),
    Q('Đơn vị công suất điện?', ['Vôn', 'Ampe', 'Oát (W)', 'Jun (J)'], 2, 'Công suất đo bằng Oát (W) = J/s.'),
    Q('Đèn ghi 220V – 60W. Cường độ dòng điện qua đèn?', ['0,27A', '3,67A', '0,5A', '1A'], 0, 'I = P/U = 60/220 ≈ 0,27 A.'),
    Q('Công của dòng điện?', ['A = P·t = U·I·t', 'A = U/I', 'A = R·I', 'A = U + I·t'], 0, 'A = công suất × thời gian = U·I·t.'),
    Q('Đơn vị của điện năng tiêu thụ trên hoá đơn điện?', ['kWh (kilôoát giờ)', 'W', 'J', 'V'], 0, 'Hoá đơn điện tính bằng kWh = 1 000 W · 3 600 s = 3,6·10⁶ J.'),
    Q('1 kWh bằng bao nhiêu J?', ['1 000', '3 600', '3 600 000', '3 600·1 000'], 2, '1 kWh = 1 000 W × 3 600 s = 3 600 000 J = 3,6 MJ.'),
  ]),

  M(12, 'Định luật Jun-Len-xơ — Nhiệt lượng toả ra', [
    Q('Định luật Jun-Len-xơ?', ['Q = I²·R·t', 'Q = I·R·t', 'Q = I²/R·t', 'Q = I·R/t'], 0, 'Nhiệt lượng tỏa ra trên điện trở khi có dòng điện đi qua: Q = I²Rt.'),
    Q('Đơn vị nhiệt lượng?', ['Vôn', 'Oát', 'Jun (J) hoặc calo (cal)', 'Ampe'], 2, 'J là đơn vị SI; 1 cal ≈ 4,18 J.'),
    Q('Tính Q khi I = 2A, R = 10Ω, t = 60s?', ['1 200 J', '2 400 J', '600 J', '120 J'], 1, 'Q = 2²·10·60 = 4·10·60 = 2 400 J.'),
    Q('Ứng dụng định luật Jun-Len-xơ?', ['Bàn ủi, bếp điện, lò sưởi, nồi cơm điện', 'Bóng đèn LED', 'Quạt điện', 'Pin'], 0, 'Các thiết bị toả nhiệt khi dòng điện qua dây điện trở: bàn ủi, bếp điện…'),
    Q('Để giảm hao phí điện năng do nhiệt khi truyền tải xa, người ta?', ['Tăng U lên cao (giảm I)', 'Tăng I', 'Dùng dây nhỏ', 'Giảm R'], 0, 'P_hp = I²R; tăng U ⇒ giảm I cùng công suất ⇒ giảm P_hp đáng kể.'),
    Q('Vì sao khi tăng hiệu điện thế thì giảm hao phí?', ['Vì P_hp = I²R, mà I = P/U; tăng U ⇒ giảm I ⇒ giảm I² mạnh', 'Vì R nhỏ', 'Vì t nhỏ', 'Không có lý do'], 0, 'Hao phí tỉ lệ I² nên tăng U gấp đôi ⇒ I giảm 1/2 ⇒ hao phí giảm 4 lần.'),
  ]),

  M(13, 'Sử dụng an toàn và tiết kiệm điện', [
    Q('Tại sao phải sử dụng điện an toàn?', ['Tránh điện giật, cháy nổ, hoả hoạn', 'Đẹp', 'Tiết kiệm tiền', 'Tăng tuổi thọ thiết bị'], 0, 'An toàn điện = an toàn tính mạng + tài sản.'),
    Q('Khi sửa điện cần?', ['Ngắt nguồn điện trước khi sửa', 'Sửa thẳng', 'Dùng tay không', 'Sửa khi đang có điện'], 0, 'Quy tắc bắt buộc: ngắt cầu dao trước khi thao tác.'),
    Q('Cầu chì có tác dụng?', ['Tự động ngắt mạch khi dòng điện quá lớn', 'Tăng điện áp', 'Tạo dòng', 'Tiết kiệm điện'], 0, 'Cầu chì bảo vệ mạch khỏi quá tải, ngắn mạch.'),
    Q('Để tiết kiệm điện, nên?', ['Dùng đèn LED, tắt thiết bị khi không cần, dùng thiết bị có nhãn năng lượng cao', 'Bật cả ngày', 'Dùng bóng sợi đốt', 'Mở cửa tủ lạnh nhiều'], 0, 'LED tiết kiệm hơn sợi đốt 80%; tắt thiết bị + chọn thiết bị tiết kiệm năng lượng.'),
    Q('Đèn LED so với bóng sợi đốt?', ['Tiết kiệm điện hơn nhiều, tuổi thọ cao hơn', 'Tiêu tốn hơn', 'Sáng kém hơn', 'Đắt mãi mãi'], 0, 'LED chỉ tốn ~10-20% điện so với sợi đốt cùng độ sáng.'),
    Q('Khi gặp người bị điện giật, ưu tiên?', ['Ngắt nguồn điện trước, sau đó sơ cứu', 'Kéo tay nạn nhân', 'Đổ nước', 'Gọi điện thoại'], 0, 'Ngắt nguồn là bước đầu tiên để cứu nạn nhân an toàn.'),
  ]),

  M(14, 'Hiện tượng cảm ứng điện từ — Định luật Faraday', [
    Q('Hiện tượng cảm ứng điện từ phát hiện bởi?', ['Michael Faraday (1831)', 'Newton', 'Edison', 'Galileo'], 0, 'Faraday phát hiện 1831: nam châm chuyển động qua cuộn dây sinh dòng điện.'),
    Q('Điều kiện để xuất hiện dòng điện cảm ứng?', ['Từ thông qua mạch kín biến thiên', 'Mạch hở', 'Có nguồn pin', 'Có điện trở lớn'], 0, 'Định luật cảm ứng: từ thông biến thiên ⇒ suất điện động cảm ứng.'),
    Q('Khi đưa nam châm lại gần cuộn dây, dòng điện cảm ứng?', ['Có', 'Không', 'Chỉ khi nam châm dừng', 'Chỉ khi cuộn dây quay'], 0, 'Có chuyển động tương đối ⇒ từ thông biến thiên ⇒ sinh dòng cảm ứng.'),
    Q('Máy phát điện hoạt động dựa trên?', ['Hiện tượng cảm ứng điện từ', 'Hiệu ứng quang điện', 'Định luật Ôm', 'Định luật Jun'], 0, 'Máy phát điện = chuyển cơ năng → điện năng dựa trên cảm ứng điện từ.'),
    Q('Máy biến áp có tác dụng?', ['Tăng hoặc giảm hiệu điện thế xoay chiều', 'Tạo dòng điện', 'Đổi chiều dòng điện', 'Đo điện'], 0, 'Máy biến áp dùng cảm ứng điện từ để tăng/giảm U xoay chiều.'),
    Q('Số vòng dây tăng thì hiệu điện thế thứ cấp?', ['Tăng tỉ lệ với số vòng (U₂/U₁ = N₂/N₁)', 'Giảm', 'Không đổi', 'Bằng 0'], 0, 'Công thức máy biến áp: U₂/U₁ = N₂/N₁.'),
  ]),

  M(15, 'Dòng điện xoay chiều', [
    Q('Dòng điện xoay chiều là?', ['Dòng điện có chiều và cường độ thay đổi theo thời gian (thường hình sin)', 'Dòng điện một chiều', 'Dòng điện không đổi', 'Dòng điện trong pin'], 0, 'AC = Alternating Current — đổi chiều liên tục.'),
    Q('Tần số dòng điện ở Việt Nam?', ['50 Hz', '60 Hz', '100 Hz', '220 Hz'], 0, 'Mạng điện Việt Nam: 220V – 50Hz (60Hz ở Mỹ, Nhật Bản).'),
    Q('1 Hz nghĩa là?', ['1 chu kỳ/giây', '1 vòng/phút', '1 sóng/giờ', '1 hiệu điện thế'], 0, 'Hz = đơn vị tần số = số chu kỳ trong 1 giây.'),
    Q('Tác dụng nhiệt của dòng điện xoay chiều?', ['Tương tự dòng một chiều (làm nóng vật)', 'Không có', 'Yếu hơn', 'Mạnh hơn nhiều'], 0, 'Dòng AC vẫn làm nóng vật dẫn (nguyên lý bàn ủi, bếp điện).'),
    Q('Tác dụng từ của dòng điện xoay chiều?', ['Có và biến thiên (tạo từ trường biến thiên)', 'Không có', 'Cố định', 'Bằng 0'], 0, 'AC tạo từ trường biến thiên ⇒ ứng dụng trong máy biến áp, động cơ.'),
    Q('Tác dụng nào CHỈ có ở dòng một chiều mà không có ở xoay chiều?', ['Tác dụng hoá học (điện phân)', 'Tác dụng nhiệt', 'Tác dụng từ', 'Tác dụng sinh lý'], 0, 'Điện phân cần dòng một chiều ổn định để chuyển ion về cực âm/dương.'),
  ]),

  M(16, 'Thấu kính — Khái niệm và phân loại', [
    Q('Thấu kính là gì?', ['Khối chất trong suốt giới hạn bởi 2 mặt cong (hoặc 1 mặt phẳng + 1 mặt cong)', 'Gương phẳng', 'Khối gỗ', 'Vật chất bất kỳ'], 0, 'Thấu kính: chất trong suốt (thuỷ tinh/nhựa), giới hạn bởi mặt cầu/phẳng.'),
    Q('2 loại thấu kính chính?', ['Thấu kính hội tụ (lồi) và phân kì (lõm)', 'Thấu kính tròn và vuông', 'Thấu kính đỏ và xanh', 'Thấu kính lớn và nhỏ'], 0, 'Hội tụ: dày ở giữa, mỏng ở mép; phân kì: ngược lại.'),
    Q('Thấu kính hội tụ có?', ['Đường rìa mỏng, giữa dày', 'Đường rìa dày, giữa mỏng', 'Đều dày', 'Đều mỏng'], 0, 'Thấu kính hội tụ (lồi) có mép mỏng, giữa dày.'),
    Q('Tiêu cự f của thấu kính là?', ['Khoảng cách từ quang tâm đến tiêu điểm', 'Bán kính mặt cong', 'Độ dày kính', 'Chiều cao kính'], 0, 'f = khoảng cách từ O (quang tâm) đến F (tiêu điểm chính).'),
    Q('Tiêu điểm chính F là?', ['Điểm hội tụ của chùm tia tới song song trục chính (qua thấu kính hội tụ)', 'Tâm kính', 'Đỉnh kính', 'Điểm bất kỳ'], 0, 'Chùm song song qua thấu kính hội tụ ⇒ cắt nhau tại F.'),
    Q('Đối với thấu kính phân kì, f mang dấu?', ['Dương', 'Âm', 'Bằng 0', 'Phụ thuộc'], 1, 'Quy ước: f hội tụ > 0; f phân kì < 0.'),
  ]),

  M(17, 'Ảnh tạo bởi thấu kính hội tụ', [
    Q('Vật đặt ngoài tiêu cự (d > f) qua thấu kính hội tụ tạo ảnh?', ['Thật, ngược chiều', 'Ảo, cùng chiều', 'Bằng vật', 'Vô cực'], 0, 'd > f ⇒ ảnh thật, ngược chiều, có thể hứng được trên màn.'),
    Q('Vật đặt trong tiêu cự (d < f) qua thấu kính hội tụ tạo ảnh?', ['Thật, lớn hơn', 'Ảo, cùng chiều, lớn hơn vật', 'Ảo, ngược chiều', 'Bằng vật'], 1, 'd < f ⇒ ảnh ảo, cùng chiều, lớn hơn vật — nguyên lý kính lúp.'),
    Q('Vật ở vô cực (d = ∞) qua thấu kính hội tụ tạo ảnh?', ['Tại tiêu điểm F\'', 'Tại vô cực', 'Tại quang tâm O', 'Không có ảnh'], 0, 'Chùm tia song song hội tụ tại tiêu điểm ảnh.'),
    Q('Kính lúp là?', ['Thấu kính hội tụ có tiêu cự ngắn, vật đặt trong tiêu cự', 'Thấu kính phân kì', 'Gương cầu', 'Lăng kính'], 0, 'Kính lúp: thấu kính hội tụ f ngắn, cho ảnh ảo lớn hơn vật.'),
    Q('Công thức thấu kính (gần đúng)?', ['1/f = 1/d + 1/d\' (cho ảnh thật)', '1/d = 1/f + 1/d\'', 'f = d + d\'', 'd = f·d\''], 0, 'Công thức 1/f = 1/d + 1/d\' (quy ước dấu cho từng trường hợp).'),
    Q('Số phóng đại k = ?', ['d\'/d (hoặc h\'/h)', 'd·d\'', 'd + d\'', 'f/d'], 0, 'k = h\'/h = d\'/d (giá trị tuyệt đối).'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Phương trình Fe + CuSO₄?', ['Cu + FeSO₄', 'Không phản ứng', 'FeS + CuO', 'Fe(OH)₂ + Cu'], 0, 'Fe đẩy Cu (đứng trước Cu): Fe + CuSO₄ → FeSO₄ + Cu↓.'),
    Q('Al phản ứng với dung dịch NaOH vì?', ['Al là kim loại lưỡng tính', 'Al không lưỡng tính', 'NaOH là axit', 'Al rất hoạt động'], 0, 'Al phản ứng được cả axit và bazơ ⇒ kim loại lưỡng tính.'),
    Q('Định luật Ôm: I = ?', ['U/R', 'U·R', 'R/U', 'U + R'], 0, 'I = U/R.'),
    Q('Mắc 2 điện trở 6Ω song song, R_tđ = ?', ['12Ω', '6Ω', '3Ω', '0Ω'], 2, 'Mạch song song 2 R giống nhau: R_tđ = R/2 = 3 Ω.'),
    Q('Khí Cl₂ có màu?', ['Không màu', 'Vàng lục', 'Xanh', 'Đỏ'], 1, 'Cl₂: khí vàng lục, mùi xốc, độc.'),
    Q('Công suất P = U·I = ? khi U = 220V, I = 2A?', ['440W', '110W', '222W', '218W'], 0, 'P = 220·2 = 440 W.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Mở đầu hoá hữu cơ — Khái niệm hợp chất hữu cơ', [
    Q('Hợp chất hữu cơ là?', ['Hợp chất của cacbon (trừ CO, CO₂, muối cacbonat…)', 'Hợp chất kim loại', 'Hợp chất chứa oxi', 'Hợp chất khoáng'], 0, 'Hợp chất hữu cơ luôn chứa C (trừ vài hợp chất vô cơ chứa C như CO₂, CaCO₃).'),
    Q('Đặc điểm chung của hợp chất hữu cơ?', ['Kém bền nhiệt, đa số tan trong dung môi hữu cơ, dễ cháy', 'Bền nhiệt cao', 'Dễ tan trong nước', 'Khó cháy'], 0, 'Hữu cơ thường kém bền, dễ cháy, ít tan trong nước, tan tốt trong dung môi hữu cơ.'),
    Q('Hoá học hữu cơ là ngành nghiên cứu?', ['Các hợp chất hữu cơ và phản ứng của chúng', 'Kim loại', 'Khí', 'Bazơ'], 0, 'Hoá hữu cơ tập trung vào hợp chất C-H, C-O, C-N…'),
    Q('Liên kết phổ biến trong hợp chất hữu cơ?', ['Liên kết cộng hoá trị', 'Liên kết ion', 'Liên kết kim loại', 'Liên kết hidro'], 0, 'Hữu cơ chủ yếu liên kết cộng hoá trị (C-H, C-C, C-O…).'),
    Q('Phân loại hợp chất hữu cơ theo thành phần?', ['Hidrocacbon (chỉ C, H) và dẫn xuất hidrocacbon', 'Chỉ có hidrocacbon', 'Có 5 loại', 'Phân theo màu'], 0, '2 nhóm chính: hidrocacbon (CₓHᵧ) và dẫn xuất (chứa thêm O, N, X…).'),
    Q('Ví dụ hợp chất hữu cơ là?', ['CH₄, C₂H₅OH, CH₃COOH, glucozơ', 'NaCl, H₂O, CO₂', 'KOH, CaO', 'Fe, Cu'], 0, 'CH₄ (metan), C₂H₅OH (rượu etylic), CH₃COOH (axit axetic), glucozơ — đều hữu cơ.'),
  ]),

  M(20, 'Metan (CH₄)', [
    Q('Công thức phân tử của metan?', ['CH₄', 'C₂H₆', 'C₂H₄', 'CH₂'], 0, 'Metan = CH₄ — hidrocacbon đơn giản nhất.'),
    Q('Cấu tạo phân tử metan?', ['Tứ diện đều, 4 liên kết C-H', 'Mặt phẳng', 'Đường thẳng', 'Vòng'], 0, 'C ở giữa, 4 H tại 4 đỉnh tứ diện đều, góc liên kết ~109,5°.'),
    Q('Tính chất vật lý của metan?', ['Khí không màu, không mùi, nhẹ hơn không khí, ít tan trong nước', 'Khí có màu vàng', 'Lỏng', 'Rắn'], 0, 'CH₄ là khí, M = 16 < 29 (KK), ít tan trong H₂O.'),
    Q('CH₄ + Cl₂ →? (có ánh sáng)', ['CH₃Cl + HCl', 'CH₄Cl', 'CCl₄', 'CO₂'], 0, 'Phản ứng thế: CH₄ + Cl₂ → CH₃Cl + HCl (askt).'),
    Q('CH₄ cháy trong O₂ tạo?', ['CO₂ + H₂O', 'C + H₂', 'CO + H₂', 'Không cháy'], 0, 'CH₄ + 2O₂ → CO₂ + 2H₂O (phản ứng tỏa nhiều nhiệt).'),
    Q('Metan có ở đâu?', ['Khí thiên nhiên, khí biogas, ruột động vật, đầm lầy', 'Trong nước biển', 'Trong cát', 'Trong kim loại'], 0, 'CH₄ là thành phần chính của khí thiên nhiên (~95%), biogas.'),
  ]),

  M(21, 'Etilen (C₂H₄)', [
    Q('Công thức của etilen?', ['C₂H₂', 'C₂H₄', 'C₂H₆', 'CH₄'], 1, 'Etilen = C₂H₄ (eten).'),
    Q('Đặc điểm cấu tạo etilen?', ['Có 1 liên kết đôi C=C', 'Có 1 liên kết ba C≡C', 'Chỉ liên kết đơn', 'Liên kết kim loại'], 0, 'C₂H₄: H₂C=CH₂ — có 1 liên kết đôi giữa 2 nguyên tử C.'),
    Q('Etilen tham gia phản ứng đặc trưng?', ['Phản ứng cộng (với H₂, Br₂, H₂O…)', 'Chỉ phản ứng thế', 'Không phản ứng', 'Chỉ trao đổi'], 0, 'Liên kết π yếu ⇒ dễ bị phá vỡ ⇒ cộng các phân tử khác.'),
    Q('C₂H₄ + Br₂ → ?', ['C₂H₄Br₂ (làm mất màu nước Brom)', 'CBr₄', 'C₂HBr₃', 'Không phản ứng'], 0, 'Phản ứng đặc trưng để nhận biết liên kết đôi: nC₂H₄ + Br₂ → mất màu vàng nâu.'),
    Q('Etilen có ứng dụng quan trọng?', ['Sản xuất nhựa PE, kích thích trái cây chín, sản xuất rượu etylic', 'Làm thuốc nổ', 'Làm xăng', 'Làm phân bón'], 0, 'C₂H₄ là monome của PE; cũng dùng làm chín hoa quả; nguyên liệu hoá dầu.'),
    Q('Phản ứng trùng hợp etilen tạo?', ['Polietilen (PE)', 'Polipropilen', 'PVC', 'Cao su'], 0, 'n·CH₂=CH₂ → (-CH₂-CH₂-)ₙ = PE.'),
  ]),

  M(22, 'Axetilen (C₂H₂) — Benzen (C₆H₆)', [
    Q('Công thức của axetilen?', ['C₂H₂', 'C₂H₄', 'C₂H₆', 'CH₄'], 0, 'Axetilen (etin) = C₂H₂ — có 1 liên kết ba C≡C.'),
    Q('Axetilen được điều chế từ?', ['CaC₂ + H₂O → C₂H₂ + Ca(OH)₂', 'Mỡ động vật', 'Đá vôi', 'Khí than'], 0, 'Phương pháp công nghiệp: thủy phân canxi cacbua (đất đèn).'),
    Q('Axetilen dùng làm gì?', ['Đèn xì hàn cắt kim loại, sản xuất nhựa, dung môi', 'Làm thực phẩm', 'Làm thuốc', 'Làm phân bón'], 0, 'C₂H₂ cháy với O₂ tạo ngọn lửa nóng ~3000°C ⇒ hàn cắt kim loại.'),
    Q('Benzen có công thức?', ['C₆H₆', 'C₆H₁₂', 'C₅H₅', 'C₇H₈'], 0, 'Benzen = C₆H₆ — vòng 6 cạnh đặc trưng.'),
    Q('Cấu trúc benzen?', ['Vòng 6 cạnh đều, có 3 liên kết đôi xen kẽ (vòng thơm)', 'Mạch thẳng', 'Tứ diện', 'Hình cầu'], 0, 'Vòng benzen với hệ liên kết π liên hợp (thơm) — rất bền.'),
    Q('Tính chất hoá học của benzen?', ['Khó cộng, dễ thế (vì vòng thơm bền)', 'Dễ cộng', 'Phản ứng mạnh với nước', 'Tan tốt trong nước'], 0, 'Benzen ưu tiên phản ứng thế (Br₂/Fe, HNO₃/H₂SO₄…) hơn cộng.'),
  ]),

  M(23, 'Rượu etylic (C₂H₅OH)', [
    Q('Công thức của rượu etylic?', ['C₂H₅OH', 'CH₃OH', 'C₃H₇OH', 'CH₃COOH'], 0, 'Etanol: CH₃-CH₂-OH = C₂H₅OH.'),
    Q('Nhóm chức của rượu?', ['-OH (hidroxyl)', '-COOH', '-CHO', '-NH₂'], 0, 'Rượu (alcohol) đặc trưng bởi nhóm -OH gắn vào C no.'),
    Q('Rượu etylic tan trong nước?', ['Tan vô hạn (cồn pha nước)', 'Không tan', 'Tan ít', 'Tan ở nhiệt độ cao'], 0, 'C₂H₅OH tan vô hạn trong nước nhờ liên kết hidro với H₂O.'),
    Q('Phản ứng đặc trưng: rượu + Na → ?', ['C₂H₅ONa + H₂', 'C₂H₅OH·Na', 'CH₃COONa + H₂', 'Không phản ứng'], 0, '2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑ (nhận biết nhóm -OH).'),
    Q('Rượu etylic được sản xuất công nghiệp từ?', ['Tinh bột/đường + lên men (men rượu)', 'Khoáng vật', 'Đá vôi', 'Cát'], 0, 'Lên men: (C₆H₁₀O₅)ₙ → glucozơ → 2C₂H₅OH + 2CO₂.'),
    Q('Độ rượu là?', ['Số ml C₂H₅OH có trong 100 ml dung dịch rượu', 'Khối lượng rượu', 'Nhiệt độ rượu', 'Áp suất rượu'], 0, 'Rượu 40° = 40 ml etanol nguyên chất trong 100 ml dung dịch.'),
  ]),

  M(24, 'Axit axetic (CH₃COOH)', [
    Q('Công thức axit axetic?', ['CH₃COOH', 'C₂H₅OH', 'HCOOH', 'CH₃COCH₃'], 0, 'Axit axetic = CH₃-COOH, có nhóm -COOH.'),
    Q('Nhóm chức của axit cacboxylic?', ['-COOH (cacboxyl)', '-OH', '-CHO', '-CO-'], 0, 'Nhóm -COOH = cacboxyl, kết hợp -C=O và -OH.'),
    Q('CH₃COOH có tính chất?', ['Tính axit yếu, làm quỳ tím hoá đỏ', 'Tính bazơ', 'Trung tính', 'Không có tính chất'], 0, 'Axit yếu nhưng vẫn làm quỳ đỏ, tác dụng kim loại, oxit bazơ, bazơ, muối.'),
    Q('CH₃COOH + Na → ?', ['CH₃COONa + H₂', 'CH₃COOH·Na', 'CH₃ONa', 'Không phản ứng'], 0, '2CH₃COOH + 2Na → 2CH₃COONa + H₂↑.'),
    Q('CH₃COOH + C₂H₅OH ⇌ ? (xt H₂SO₄ đặc)', ['CH₃COOC₂H₅ (este) + H₂O', 'CH₃OH + C₂H₅OH', 'CO₂ + H₂O', 'Không phản ứng'], 0, 'Phản ứng este hoá: axit + rượu → este + nước.'),
    Q('Giấm ăn là?', ['Dung dịch CH₃COOH 2-5% trong nước', 'Rượu loãng', 'Đường tan', 'Nước muối'], 0, 'Giấm = dung dịch axit axetic ~3-5%.'),
  ]),

  M(25, 'Chất béo — Lipit', [
    Q('Chất béo là?', ['Trieste của glixerol và các axit béo', 'Đường', 'Tinh bột', 'Protein'], 0, 'Chất béo (lipit) = trieste của glixerol C₃H₅(OH)₃ với các axit béo.'),
    Q('Chất béo gồm 2 dạng?', ['Mỡ (động vật, no, rắn) và dầu (thực vật, không no, lỏng)', 'Chỉ mỡ', 'Chỉ dầu', 'Bột và lỏng'], 0, 'Mỡ: chứa axit béo no, rắn; dầu: chứa axit béo không no, lỏng.'),
    Q('Phản ứng xà phòng hoá chất béo?', ['Chất béo + NaOH → muối Na của axit béo (xà phòng) + glixerol', 'Chất béo + nước → đường', 'Chất béo + O₂ → CO₂', 'Không phản ứng'], 0, 'Thủy phân kiềm tạo xà phòng (muối Na/K của axit béo).'),
    Q('Chất béo có vai trò gì?', ['Cung cấp năng lượng cao, dung môi cho vitamin tan trong dầu (A, D, E, K)', 'Không có vai trò', 'Chỉ làm đẹp', 'Chỉ làm thực phẩm'], 0, '1 g chất béo cho 9 kcal — nguồn năng lượng dự trữ.'),
    Q('Vì sao không nên ăn quá nhiều chất béo?', ['Gây béo phì, xơ vữa động mạch, bệnh tim mạch', 'Không có hại', 'Tăng sức khỏe', 'Tăng chiều cao'], 0, 'Quá nhiều cholesterol/triglyceride ⇒ xơ vữa, tim mạch, béo phì.'),
    Q('Ứng dụng của chất béo?', ['Thực phẩm, sản xuất xà phòng, mỹ phẩm, biodiesel', 'Làm thuốc nổ', 'Làm phân bón', 'Làm gỗ'], 0, 'Đa dụng: ăn uống, công nghiệp xà phòng, nhiên liệu sinh học.'),
  ]),

  M(26, 'Glucozơ (C₆H₁₂O₆) và saccarozơ (C₁₂H₂₂O₁₁)', [
    Q('Glucozơ thuộc loại?', ['Monosaccarit (đường đơn)', 'Disaccarit', 'Polisaccarit', 'Lipit'], 0, 'Glucozơ là monosaccarit — đường đơn đơn giản nhất.'),
    Q('Công thức glucozơ?', ['C₆H₁₂O₆', 'C₁₂H₂₂O₁₁', 'C₂H₆O', '(C₆H₁₀O₅)ₙ'], 0, 'Glucozơ = C₆H₁₂O₆ (M = 180).'),
    Q('Glucozơ có ở đâu?', ['Trong máu, mật ong, nho chín', 'Trong cát', 'Trong dầu', 'Trong sắt'], 0, 'Glucozơ có nhiều trong mật ong, nho chín, máu (glucoza huyết).'),
    Q('Phản ứng tráng gương của glucozơ?', ['Khử Ag⁺ tạo Ag↓ kim loại bóng', 'Tạo CO₂', 'Tạo H₂', 'Không phản ứng'], 0, 'Glucozơ có nhóm -CHO ⇒ phản ứng với AgNO₃/NH₃ tạo gương Ag.'),
    Q('Saccarozơ là?', ['Disaccarit (1 phân tử glucozơ + 1 phân tử fructozơ)', 'Monosaccarit', 'Polisaccarit', 'Lipit'], 0, 'Saccarozơ = đường mía/đường thốt nốt, M = 342.'),
    Q('Saccarozơ thủy phân tạo?', ['Glucozơ + Fructozơ', 'Glucozơ + Glucozơ', '2 phân tử fructozơ', 'Tinh bột'], 0, 'C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucozơ) + C₆H₁₂O₆ (fructozơ).'),
  ]),

  M(27, 'Tinh bột — Xenlulozơ', [
    Q('Tinh bột và xenlulozơ đều thuộc?', ['Polisaccarit (C₆H₁₀O₅)ₙ', 'Monosaccarit', 'Disaccarit', 'Lipit'], 0, 'Đều là polisaccarit, cùng công thức (C₆H₁₀O₅)ₙ nhưng cấu trúc khác.'),
    Q('Tinh bột có ở đâu?', ['Hạt ngũ cốc, củ, quả (gạo, ngô, khoai, sắn)', 'Gỗ', 'Sắt', 'Dầu'], 0, 'Tinh bột tích lũy trong các cơ quan dự trữ của thực vật.'),
    Q('Xenlulozơ có ở đâu?', ['Thành tế bào thực vật (bông, gỗ, tre nứa)', 'Mỡ', 'Đường', 'Máu'], 0, 'Xenlulozơ là thành phần chính của vách tế bào thực vật.'),
    Q('Phản ứng nhận biết tinh bột?', ['Tinh bột + iot (I₂) → màu xanh tím', 'Tinh bột + nước → màu đỏ', 'Tinh bột + axit → màu vàng', 'Không có'], 0, 'Phản ứng nhận biết tinh bột là tạo phức màu xanh tím với iot.'),
    Q('Ứng dụng của xenlulozơ?', ['Sản xuất giấy, vải sợi, tơ nhân tạo (visco, axetat)', 'Làm thuốc nổ', 'Làm phân bón', 'Làm thực phẩm trực tiếp'], 0, 'Giấy, vải bông, sợi visco, axetat… đều từ xenlulozơ.'),
    Q('Trong cơ thể người, tinh bột được tiêu hoá thành?', ['Glucozơ (qua enzim amilaza)', 'Saccarozơ', 'Xenlulozơ', 'Fructozơ'], 0, 'Tinh bột → maltozơ → glucozơ trong miệng, ruột.'),
  ]),

  M(28, 'Protein và polime', [
    Q('Protein được cấu tạo từ?', ['Các axit amin liên kết với nhau bằng liên kết peptit', 'Glucozơ', 'Axit béo', 'Nucleotit'], 0, 'Protein = chuỗi axit amin nối nhau qua liên kết peptit (-CO-NH-).'),
    Q('Có khoảng bao nhiêu loại axit amin tạo nên protein của sinh vật?', ['10', '20', '50', '100'], 1, 'Có 20 axit amin chuẩn, trong đó 9 axit amin thiết yếu phải lấy từ thức ăn.'),
    Q('Protein có ở đâu?', ['Trong cơ thể sinh vật (thịt, cá, trứng, sữa, đậu nành)', 'Trong cát', 'Trong sắt', 'Trong khí O₂'], 0, 'Protein có nhiều trong thực phẩm động vật và một số thực vật (đậu).'),
    Q('Polime là?', ['Hợp chất phân tử khối rất lớn, do nhiều monome liên kết tạo thành', 'Hợp chất nhỏ', 'Hợp chất vô cơ', 'Hợp chất khí'], 0, 'Polime: phân tử lớn (polymer = nhiều monome).'),
    Q('PE (polietilen) được tạo từ?', ['Phản ứng trùng hợp etilen (C₂H₄)', 'Trùng hợp metan', 'Trùng hợp glucozơ', 'Trùng hợp protein'], 0, 'n CH₂=CH₂ → (-CH₂-CH₂-)ₙ.'),
    Q('PVC là?', ['Polivinyl clorua, tạo từ vinyl clorua CH₂=CHCl', 'Polietilen', 'Polipropylen', 'Cao su'], 0, 'PVC dùng làm ống nước, cửa nhựa, dây cáp điện…'),
  ]),

  M(29, 'Di truyền học — Menđen và quy luật di truyền', [
    Q('Gregor Mendel được coi là?', ['Cha đẻ của di truyền học hiện đại', 'Người phát minh ra ADN', 'Người phát minh kính hiển vi', 'Cha của vật lý'], 0, 'Mendel (1822-1884) công bố các quy luật di truyền năm 1865.'),
    Q('Mendel nghiên cứu di truyền ở?', ['Cây đậu Hà Lan', 'Ruồi giấm', 'Chuột bạch', 'Người'], 0, 'Mendel chọn đậu Hà Lan vì có nhiều cặp tính trạng đối lập rõ rệt.'),
    Q('Quy luật phân li của Mendel phát biểu?', ['Mỗi cặp tính trạng do 1 cặp gen quy định; khi giảm phân, 2 gen tách rời nhau, mỗi giao tử chứa 1 gen', 'Gen luôn đi cùng nhau', 'Tính trạng do nhiều gen', 'Tính trạng không di truyền'], 0, 'Quy luật phân li: alen tách nhau khi tạo giao tử.'),
    Q('Tính trạng trội là tính trạng?', ['Biểu hiện ở F₁ khi lai 2 dòng thuần khác nhau', 'Biểu hiện ở F₂', 'Không biểu hiện', 'Tự nhiên'], 0, 'F₁ đồng tính trội ⇒ tính trạng đó là trội.'),
    Q('Tỉ lệ kiểu hình ở F₂ trong lai 1 cặp tính trạng (Mendel)?', ['3 trội : 1 lặn', '1:1', '9:3:3:1', '1:2:1'], 0, '3 trội : 1 lặn ở F₂ khi lai 2 bố mẹ thuần chủng.'),
    Q('Genotype Aa × Aa cho tỉ lệ kiểu gen?', ['1 AA : 2 Aa : 1 aa', '1 AA : 1 aa', '3 Aa : 1 aa', '1 AA : 3 Aa'], 0, 'Lai phân tích Aa × Aa: 1/4 AA + 2/4 Aa + 1/4 aa.'),
  ]),

  M(30, 'ADN — Cấu trúc và chức năng', [
    Q('ADN là viết tắt của?', ['Axit deoxiribonucleic', 'Axit nucleic', 'Adenin', 'ADN viết tắt nguyên gốc tiếng Việt'], 0, 'ADN = Axit deoxiribonucleic (DNA - Deoxyribonucleic Acid).'),
    Q('Cấu trúc của ADN?', ['Chuỗi xoắn kép gồm 2 mạch đơn liên kết theo nguyên tắc bổ sung', 'Mạch đơn', 'Khối cầu', 'Chuỗi đơn xoắn'], 0, 'Watson-Crick (1953): ADN là chuỗi xoắn kép.'),
    Q('Các loại bazơ nitơ trong ADN?', ['A, T, G, X (C)', 'A, U, G, X', 'A, T, U, G', 'A, G, X chỉ'], 0, '4 loại bazơ: Adenin (A), Timin (T), Guanin (G), Xytosin (X/C).'),
    Q('Nguyên tắc bổ sung trong ADN?', ['A liên kết với T, G liên kết với X (C)', 'A với G, T với X', 'A với A, T với T', 'Không có nguyên tắc'], 0, 'A=T (2 liên kết H), G≡X (3 liên kết H).'),
    Q('Chức năng của ADN?', ['Lưu trữ, bảo quản và truyền đạt thông tin di truyền', 'Tạo năng lượng', 'Tạo protein trực tiếp', 'Tạo lipit'], 0, 'ADN là vật chất di truyền, mã hoá thông tin tạo protein.'),
    Q('Đơn phân (monome) của ADN là?', ['Nucleotit', 'Axit amin', 'Đường glucozơ', 'Axit béo'], 0, 'Đơn phân ADN = nucleotit, gồm 3 thành phần: đường deoxiribozơ + bazơ + photphat.'),
  ]),

  M(31, 'Gen và protein — Cơ chế di truyền', [
    Q('Gen là?', ['Một đoạn của ADN mang thông tin quy định 1 tính trạng/cấu trúc protein', 'Một nhiễm sắc thể', 'Một tế bào', 'Một protein'], 0, 'Gen = đoạn ADN có chức năng cụ thể (mã hoá 1 polypeptit).'),
    Q('Quá trình tạo protein gồm?', ['Phiên mã (ADN→ARN) + Dịch mã (ARN→protein)', 'Chỉ phiên mã', 'Chỉ dịch mã', 'Trao đổi chất'], 0, '2 giai đoạn: phiên mã trong nhân, dịch mã trên ribosome.'),
    Q('mARN có vai trò?', ['Mang thông tin từ ADN ra ribosome để tổng hợp protein', 'Tạo ATP', 'Tạo chất béo', 'Lưu trữ thông tin'], 0, 'mARN (messenger RNA) = bản sao của gen, truyền tin đến ribosome.'),
    Q('Bộ ba mã hoá (codon) gồm?', ['3 nucleotit liên tiếp mã hoá 1 axit amin', '1 nucleotit', '4 nucleotit', '5 nucleotit'], 0, 'Codon = 3 nucleotit; 64 codon mã hoá 20 axit amin + tín hiệu start/stop.'),
    Q('Đột biến gen là?', ['Biến đổi trong cấu trúc của gen (do thay đổi 1 hoặc 1 vài cặp nucleotit)', 'Mất nhiễm sắc thể', 'Tăng số nhiễm sắc thể', 'Phân bào sai'], 0, 'Đột biến gen: thay đổi cấu trúc 1 gen ở mức nucleotit.'),
    Q('Ý nghĩa của đột biến?', ['Cung cấp nguyên liệu cho tiến hoá và chọn giống', 'Luôn có hại', 'Không quan trọng', 'Chỉ xảy ra ở vi khuẩn'], 0, 'Đột biến là nguồn biến dị di truyền cho tiến hoá và chọn giống.'),
  ]),

  M(32, 'Nhiễm sắc thể — Cơ chế phân bào', [
    Q('Nhiễm sắc thể (NST) là?', ['Cấu trúc nằm trong nhân tế bào, mang ADN, có thể quan sát ở phân bào', 'Protein', 'Lipit', 'Bào quan'], 0, 'NST = ADN + protein histone, quan sát rõ ở kỳ giữa phân bào.'),
    Q('Bộ NST 2n ở người?', ['46 (23 cặp)', '23', '48', '44'], 0, 'Người: 46 NST = 22 cặp NST thường + 1 cặp NST giới tính (XX hoặc XY).'),
    Q('NST giới tính ở người nam và nữ?', ['Nam: XY, Nữ: XX', 'Nam: XX, Nữ: XY', 'Cả hai XX', 'Cả hai XY'], 0, 'Nữ: XX (đồng giao tử), Nam: XY (dị giao tử).'),
    Q('Nguyên phân (mitosis) là?', ['Phân bào tạo 2 tế bào con giống tế bào mẹ (cùng 2n)', 'Tạo giao tử', 'Tạo n NST', 'Phân chia ngẫu nhiên'], 0, 'Nguyên phân duy trì bộ NST 2n ổn định qua thế hệ tế bào.'),
    Q('Giảm phân (meiosis) là?', ['Phân bào tạo giao tử với bộ NST n (đơn bội)', 'Tạo tế bào sinh dưỡng', 'Tạo 2n', 'Phân chia ngẫu nhiên'], 0, 'Giảm phân giảm bộ NST từ 2n xuống n trong giao tử ⇒ thụ tinh phục hồi 2n.'),
    Q('Ý nghĩa của giảm phân?', ['Duy trì ổn định bộ NST của loài qua các thế hệ + tạo biến dị tổ hợp', 'Chỉ tạo tế bào nhỏ', 'Tăng số NST', 'Giảm tốc độ sinh sản'], 0, 'Giảm phân + thụ tinh = cơ chế duy trì 2n + tạo đa dạng di truyền.'),
  ]),

  M(33, 'Ứng dụng di truyền học — Chọn giống', [
    Q('Ứng dụng quan trọng của di truyền học?', ['Y học, chọn giống cây trồng/vật nuôi, công nghệ sinh học, pháp y', 'Chỉ trong sách', 'Không có', 'Chỉ giải trí'], 0, 'Di truyền học có ứng dụng rộng: y học (xét nghiệm gen), nông nghiệp, pháp y…'),
    Q('Lai giống là?', ['Phương pháp cho 2 dòng thuần khác nhau giao phối/giao phấn để tạo con lai có nhiều ưu thế', 'Chăn nuôi', 'Trồng cây', 'Trồng vô tính'], 0, 'Lai giống = phép lai 2 dòng thuần ⇒ ưu thế lai ở F₁.'),
    Q('Ưu thế lai (heterosis) là?', ['Con lai F₁ vượt trội cả 2 bố mẹ về một số chỉ tiêu', 'Con lai kém hơn', 'Bằng bố mẹ', 'Không có'], 0, 'F₁ thường cao to khỏe, năng suất cao hơn cả bố mẹ.'),
    Q('Công nghệ ADN tái tổ hợp dùng để?', ['Tạo sinh vật biến đổi gen (GMO), insulin, vaccine', 'Chỉ giải trí', 'Không ứng dụng', 'Phá hoại tự nhiên'], 0, 'CN gen sản xuất insulin từ vi khuẩn E.coli, lúa vàng giàu vitamin A…'),
    Q('Xét nghiệm ADN trong pháp y dùng để?', ['Xác định danh tính (hung thủ, cha con, hài cốt)', 'Đoán tương lai', 'Đoán bệnh tật', 'Đoán tính cách'], 0, 'Pháp y dùng STR/DNA fingerprinting để xác định cá thể.'),
    Q('Bệnh di truyền là?', ['Bệnh do gen hoặc NST bị bất thường, di truyền từ bố mẹ sang con', 'Bệnh nhiễm trùng', 'Bệnh do dinh dưỡng', 'Bệnh do môi trường'], 0, 'Vd: hồng cầu hình liềm, máu khó đông, Down (NST 21)…'),
  ]),

  M(34, 'Ôn tập học kỳ II — Phần I', [
    Q('Hợp chất nào là hợp chất hữu cơ?', ['CH₄', 'CO₂', 'NaHCO₃', 'CaCO₃'], 0, 'CH₄ là hữu cơ; CO₂, NaHCO₃, CaCO₃ là hợp chất vô cơ chứa C (ngoại lệ).'),
    Q('Etilen có liên kết?', ['Đôi C=C', 'Đơn C-C', 'Ba C≡C', 'Vòng'], 0, 'Etilen C₂H₄ có 1 liên kết đôi C=C đặc trưng.'),
    Q('Phản ứng đặc trưng nhận biết liên kết đôi?', ['Làm mất màu nước brom', 'Tạo CO₂', 'Tạo H₂O', 'Tạo H₂'], 0, 'Cộng Br₂ làm mất màu nước brom vàng nâu.'),
    Q('Rượu etylic + Na → ?', ['C₂H₅ONa + H₂', 'C₂H₅OH·Na', 'Không phản ứng', 'CH₃COOH'], 0, 'Phản ứng nhận biết nhóm -OH: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂.'),
    Q('Glucozơ có công thức?', ['C₆H₁₂O₆', 'C₁₂H₂₂O₁₁', '(C₆H₁₀O₅)ₙ', 'C₂H₅OH'], 0, 'Glucozơ — monosaccarit, M = 180.'),
    Q('ADN có cấu trúc?', ['Chuỗi xoắn kép', 'Mạch đơn', 'Hình cầu', 'Hình sợi đơn'], 0, 'Cấu trúc xoắn kép Watson-Crick.'),
  ]),

  M(35, 'Ôn tập học kỳ II — Phần II + Đề thi vào 10', [
    Q('Định luật Ôm: I = ?', ['U/R', 'U·R', 'R/U', 'U + R'], 0, 'I = U/R (định luật Ôm cơ bản).'),
    Q('Thấu kính hội tụ cho vật trong tiêu cự (d < f) tạo ảnh?', ['Ảo, cùng chiều, lớn hơn vật', 'Thật, lớn hơn', 'Ảo, ngược chiều', 'Bằng vật'], 0, 'Nguyên lý kính lúp: d < f ⇒ ảnh ảo lớn hơn.'),
    Q('Máy biến áp tăng U khi?', ['Số vòng cuộn thứ cấp > số vòng cuộn sơ cấp', 'Ngược lại', 'Bằng nhau', 'Không thay đổi'], 0, 'U₂/U₁ = N₂/N₁; muốn U₂ > U₁ thì N₂ > N₁.'),
    Q('Phản ứng nào xảy ra?', ['Cu + AgNO₃ → Cu(NO₃)₂ + Ag', 'Cu + HCl → CuCl₂ + H₂', 'Ag + CuSO₄ → AgSO₄ + Cu', 'Au + HNO₃ loãng → muối + NO'], 0, 'Cu trước Ag trong dãy hoạt động ⇒ Cu đẩy Ag khỏi muối.'),
    Q('Mendel nghiên cứu di truyền ở?', ['Đậu Hà Lan', 'Ruồi giấm', 'Chuột', 'Người'], 0, 'Mendel chọn đậu Hà Lan vì có nhiều cặp tính trạng tương phản rõ.'),
    Q('Để đạt điểm cao môn KHTN, cần?', ['Học đầy đủ 3 phân môn (Lý-Hoá-Sinh), làm nhiều bài tập, hiểu bản chất', 'Chỉ học Lý', 'Chỉ học thuộc', 'Bỏ qua bài khó'], 0, 'KHTN tích hợp 3 môn ⇒ cần ôn đều cả 3 lĩnh vực.'),
  ]),
];

export const S9KHTN_SCENARIOS = indexBy(S9KHTN_WEEKS);
