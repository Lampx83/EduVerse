// ============================================================
// Lớp 8 · KHTN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Hoá học, Vật lí, Sinh học cơ thể người).
// ID prefix: "S8KHTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8KHTN', 'khtn', n, title, qs, opts);

export const S8KHTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Phản ứng hoá học — Khái niệm', [
    Q('Phản ứng hoá học là gì?', ['Sự bay hơi', 'Sự thay đổi hình dạng', 'Quá trình biến đổi từ chất này thành chất khác', 'Sự nóng chảy'], 2, 'Định nghĩa: chất ban đầu chuyển thành chất mới.'),
    Q('Dấu hiệu nhận biết có phản ứng hoá học?', ['Đổi hình dạng', 'Bay hơi', 'Đổi màu, kết tủa, sủi bọt khí, phát sáng, phát nhiệt', 'Thay đổi kích thước'], 2, 'Các dấu hiệu phản ứng hoá học điển hình.'),
    Q('Trong phản ứng hoá học, cái gì được bảo toàn?', ['Khối lượng', 'Mùi vị', 'Hình dạng', 'Màu sắc'], 0, 'Định luật bảo toàn khối lượng.'),
    Q('Định luật bảo toàn khối lượng do ai phát biểu?', ['Galileo', 'Lavoisier', 'Newton', 'Einstein'], 1, 'Antoine Lavoisier (Pháp).'),
    Q('A + B → C + D. Khối lượng A + B so với C + D?', ['Lớn hơn', 'Không xác định', 'Bằng', 'Nhỏ hơn'], 2, 'Bảo toàn khối lượng.'),
    Q('Chất tham gia còn được gọi là?', ['Xúc tác', 'Chất phản ứng', 'Sản phẩm', 'Dung môi'], 1, 'Chất tham gia/chất phản ứng (reactant).'),
  ]),

  M(2, 'Phương trình hoá học — Cân bằng', [
    Q('Phương trình hoá học biểu diễn?', ['Bảng tuần hoàn', 'Cấu tạo nguyên tử', 'Phản ứng hoá học bằng kí hiệu', 'Hiện tượng vật lí'], 2, 'Biểu diễn phản ứng bằng công thức + hệ số.'),
    Q('Cân bằng: H₂ + O₂ → H₂O. Hệ số đúng?', ['1, 2, 2', '2, 2, 1', '2, 1, 2', '1, 1, 1'], 2, '2H₂ + O₂ → 2H₂O.'),
    Q('Trong PTHH, số nguyên tử mỗi nguyên tố ở hai vế phải?', ['Lớn hơn ở vế phải', 'Lớn hơn ở vế trái', 'Khác nhau', 'Bằng nhau'], 3, 'Cân bằng nguyên tố hai vế.'),
    Q('Cân bằng Fe + O₂ → Fe₂O₃?', ['Fe + 3O₂ → 2Fe₂O₃', '4Fe + 3O₂ → 2Fe₂O₃', 'Fe + O₂ → Fe₂O₃', '2Fe + O₂ → Fe₂O₃'], 1, '4 Fe + 3 O₂ → 2 Fe₂O₃.'),
    Q('Hệ số trong PTHH có thể là?', ['Số thập phân', 'Phân số tối giản', 'Số nguyên dương', 'Tuỳ chọn'], 2, 'Hệ số nguyên dương nhỏ nhất.'),
    Q('Cân bằng: CH₄ + O₂ → CO₂ + H₂O?', ['CH₄ + 4O₂ → 2CO₂ + 2H₂O', 'CH₄ + 2O₂ → CO₂ + 2H₂O', 'CH₄ + O₂ → CO₂ + H₂O', '2CH₄ + 3O₂ → 2CO₂ + 4H₂O'], 1, 'Đốt cháy metan.'),
  ]),

  M(3, 'Mol — Khối lượng mol', [
    Q('1 mol chất chứa bao nhiêu phân tử/nguyên tử?', ['6.02·10²³', '3.01·10²³', '6.02·10²²', '10⁶'], 0, 'Số Avogadro = 6.02·10²³.'),
    Q('Khối lượng mol (M) có đơn vị?', ['g/mol', 'mol/g', 'g (gam)', 'kg/mol'], 0, 'g/mol.'),
    Q('M của H₂O = ?', ['32 g/mol', '16 g/mol', '20 g/mol', '18 g/mol'], 3, '2·1 + 16 = 18 g/mol.'),
    Q('M của O₂ = ?', ['64', '32', '16', '48'], 1, '2·16 = 32 g/mol.'),
    Q('M của NaCl = ?', ['35.5', '46', '23', '58.5'], 3, '23 + 35.5 = 58.5 g/mol.'),
    Q('Công thức tính số mol theo khối lượng?', ['n = M/m', 'n = m/M', 'n = m + M', 'n = m·M'], 1, 'n = m/M.'),
  ]),

  M(4, 'Tính theo phương trình hoá học', [
    Q('Bước đầu tiên khi giải bài toán theo PTHH?', ['Cân bằng PTHH', 'Tính khối lượng', 'Tra bảng tuần hoàn', 'Đổi dữ kiện ra số mol'], 0, 'Đầu tiên: viết & cân bằng PTHH.'),
    Q('Cho n(H₂) = 0.5 mol, tính khối lượng?', ['1 g', '0.5 g', '5 g', '2 g'], 0, 'm = n·M = 0.5·2 = 1 g.'),
    Q('Đốt 1 mol C trong O₂ dư: C + O₂ → CO₂. Mol CO₂?', ['4', '0.5', '2', '1'], 3, 'Tỉ lệ 1:1.'),
    Q('Cho 0.2 mol Zn + HCl → ZnCl₂ + H₂. Mol H₂?', ['0.1', '0.4', '1', '0.2'], 3, 'Zn + 2HCl → ZnCl₂ + H₂; mol H₂ = mol Zn = 0.2.'),
    Q('Số mol khí ở điều kiện tiêu chuẩn được tính?', ['n = m·V', 'n = V·22.4', 'n = V/24.79', 'n = V/22.4'], 3, 'Ở đktc: 1 mol khí = 22.4 L.'),
    Q('Thể tích 0.5 mol CO₂ ở đktc?', ['22.4 L', '44.8 L', '11.2 L', '5.6 L'], 2, 'V = 0.5·22.4 = 11.2 L.'),
  ]),

  M(5, 'Dung dịch — Nồng độ phần trăm', [
    Q('Dung dịch gồm?', ['Chỉ chất tan', 'Chỉ dung môi', 'Chất tan + dung môi', 'Khí và lỏng'], 2, 'Dung dịch = chất tan trong dung môi.'),
    Q('Nồng độ phần trăm C% được tính?', ['C% = mct·100/mdd', 'C% = mdd/mct', 'C% = mct/V', 'C% = V·mct'], 0, 'C% = (mct/mdd)·100%.'),
    Q('Hoà tan 20 g muối vào 80 g nước. C% = ?', ['10%', '25%', '80%', '20%'], 3, 'mdd = 100; C% = 20/100·100% = 20%.'),
    Q('Để pha 200 g dung dịch 5% NaCl, cần?', ['50 g NaCl + 150 g nước', '20 g NaCl + 180 g nước', '10 g NaCl + 190 g nước', '5 g NaCl + 195 g nước'], 2, '5%·200 = 10 g chất tan.'),
    Q('Dung môi phổ biến nhất là?', ['Dầu ăn', 'Cồn etylic', 'Nước', 'Dung dịch HCl'], 2, 'Nước là dung môi vạn năng.'),
    Q('Khi pha loãng dung dịch, khối lượng chất tan?', ['Tăng theo tỉ lệ pha', 'Bằng 0', 'Không đổi', 'Giảm theo lượng nước thêm'], 2, 'Chỉ thêm dung môi, khối lượng chất tan giữ nguyên.'),
  ]),

  M(6, 'Nồng độ mol — Áp dụng', [
    Q('Nồng độ mol (CM) có đơn vị?', ['g/mol (khối lượng mol)', 'L/mol (thể tích mol)', 'g/L (nồng độ khối lượng)', 'mol/L'], 3, 'CM = mol/L.'),
    Q('Công thức?', ['CM = V/n', 'CM = n/V', 'CM = n + V', 'CM = n·V'], 1, 'CM = n/V (V tính bằng lít).'),
    Q('Hoà tan 0.5 mol NaCl trong 2 L nước. CM = ?', ['1 M', '0.5 M', '0.25 M', '0.1 M'], 2, '0.5/2 = 0.25 M.'),
    Q('Để có 1 L dung dịch HCl 0.1 M cần bao nhiêu mol HCl?', ['10', '0.01', '1', '0.1'], 3, 'n = CM·V = 0.1·1 = 0.1 mol.'),
    Q('Pha loãng V₁·C₁ = V₂·C₂. Đây là?', ['Định luật bảo toàn khối lượng', 'Định luật bảo toàn năng lượng', 'Định luật Avogadro', 'Định luật pha loãng'], 3, 'Công thức pha loãng dung dịch.'),
    Q('Pha 100 mL dd 1 M thành 1 L → nồng độ mới?', ['10 M', '1 M', '0.01 M', '0.1 M'], 3, '0.1·1 = 1·C₂ ⇒ C₂ = 0.1 M.'),
  ]),

  M(7, 'Acid (axit) — Tính chất hoá học', [
    Q('Axit có vị?', ['Đắng như bazơ', 'Mặn như muối ăn', 'Chua', 'Ngọt như đường'], 2, 'Axit có vị chua.'),
    Q('Axit làm quỳ tím chuyển?', ['Đỏ', 'Không đổi màu', 'Xanh (giống với bazơ)', 'Vàng nhạt'], 0, 'Quỳ tím + axit → đỏ.'),
    Q('Axit + kim loại → ?', ['Muối + H₂', 'Không phản ứng', 'Muối + nước', 'Bazơ + nước'], 0, 'Axit + KL (đứng trước H) → muối + khí H₂.'),
    Q('Axit + bazơ → ?', ['Không phản ứng', 'Khí + nước', 'Muối + H₂', 'Muối + nước'], 3, 'Phản ứng trung hoà.'),
    Q('HCl là?', ['Axit sunfuric', 'Axit photphoric', 'Axit nitric', 'Axit clohidric'], 3, 'Hydrochloric acid.'),
    Q('H₂SO₄ là?', ['Axit clohidric', 'Axit nitric', 'Axit sunfuric', 'Axit cacbonic'], 2, 'Sulfuric acid.'),
  ]),

  M(8, 'Bazơ (base) — Tính chất', [
    Q('Bazơ làm quỳ tím chuyển?', ['Vàng (như giấy pH ở môi trường axit)', 'Hồng (giống phenolphtalein)', 'Xanh', 'Đỏ (giống axit)'], 2, 'Bazơ → quỳ tím chuyển xanh.'),
    Q('Bazơ + axit → ?', ['Muối + khí', 'Bazơ mới + nước', 'Không phản ứng', 'Muối + nước'], 3, 'Trung hoà → muối + nước.'),
    Q('NaOH là bazơ?', ['Rắn không tan', 'Không tan', 'Khí ở điều kiện thường', 'Tan trong nước'], 3, 'Tan (kiềm).'),
    Q('Bazơ làm phenolphtalein không màu chuyển?', ['Đỏ tươi', 'Hồng', 'Vàng nhạt', 'Xanh (như quỳ tím gặp bazơ)'], 1, 'Phenolphtalein + bazơ → hồng/đỏ tươi.'),
    Q('Cu(OH)₂ là?', ['Muối đồng tan trong nước', 'Axit yếu chứa nguyên tố đồng', 'Bazơ không tan, màu xanh lam', 'Bazơ tan'], 2, 'Bazơ không tan, màu xanh đặc trưng.'),
    Q('Phản ứng tạo Cu(OH)₂ thường dùng?', ['CuO + H₂', 'CuCl₂ + HCl', 'Cu + H₂O', 'CuSO₄ + NaOH'], 3, 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.'),
  ]),

  M(9, 'Muối — Tính chất, ứng dụng', [
    Q('Muối ăn (NaCl) tan trong nước thành?', ['Dung dịch axit yếu', 'Dung dịch trung tính', 'Dung dịch bazơ yếu', 'Không tan'], 1, 'Dung dịch NaCl trung tính.'),
    Q('Muối + axit (mạnh hơn) → ?', ['Kim loại', 'Muối mới + axit mới', 'Khí O₂', 'Bazơ mới'], 1, 'Phản ứng tạo muối mới + axit mới.'),
    Q('Muối + bazơ → ?', ['Không bao giờ phản ứng', 'Có thể tạo muối mới + bazơ mới (nếu có kết tủa)', 'Luôn tạo axit', 'Luôn tạo kim loại'], 1, 'Tuỳ điều kiện kết tủa/khí.'),
    Q('CaCO₃ tan trong axit HCl tạo ?', ['CaO + H₂ + Cl₂', 'Ca(OH)₂', 'CaCl₂ + H₂O + CO₂', 'CaCl₂ + H₂ (giải phóng khí hidro)'], 2, 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.'),
    Q('Ứng dụng muối NaCl?', ['Làm thuốc nổ', 'Bảo quản thực phẩm, gia vị, công nghiệp', 'Làm thuốc súng', 'Làm phân bón'], 1, 'Đa dụng trong đời sống và công nghiệp.'),
    Q('Phân đạm (urê, NH₄NO₃…) là muối cung cấp nguyên tố?', ['N (nitơ)', 'K (kali)', 'Ca (canxi)', 'P (photpho)'], 0, 'Phân đạm cung cấp nitơ cho cây.'),
  ]),

  M(10, 'Kim loại — Tính chất chung', [
    Q('Tính chất vật lí chung của kim loại?', ['Tính dẻo, dẫn điện, dẫn nhiệt, ánh kim', 'Cứng, giòn', 'Hoàn toàn cách điện', 'Khí, lỏng'], 0, 'Dẻo, dẫn điện-nhiệt, ánh kim.'),
    Q('Kim loại dẫn điện tốt nhất?', ['Sắt (Fe)', 'Bạc', 'Vàng (Au)', 'Đồng (Cu)'], 1, 'Ag (bạc) dẫn điện tốt nhất.'),
    Q('Kim loại nào lỏng ở nhiệt độ thường?', ['Vàng (Au)', 'Nhôm (Al)', 'Thuỷ ngân (Hg)', 'Sắt (Fe)'], 2, 'Hg lỏng ở nhiệt độ thường.'),
    Q('Kim loại + phi kim → ?', ['Oxit hoặc muối', 'Chỉ tạo bazơ', 'Chỉ tạo muối trung hoà', 'Axit và khí H₂'], 0, 'Cl, S, O… tạo muối hoặc oxit.'),
    Q('Kim loại + axit (mạnh, loãng) → ?', ['Không phản ứng', 'Muối + nước', 'Bazơ + muối', 'Muối + H₂'], 3, 'Cho khí H₂ và muối.'),
    Q('Dãy hoạt động hoá học sắp xếp theo?', ['Số electron', 'Mức độ hoạt động hoá học giảm dần từ trái sang phải', 'Màu sắc', 'Khối lượng nguyên tử'], 1, 'K, Na, Ca, Mg, Al, Zn, Fe, Cu, Hg, Ag, Au — giảm dần.'),
  ]),

  M(11, 'Phi kim — Một số phi kim quan trọng', [
    Q('Phi kim khác kim loại ở chỗ?', ['Đều có ánh kim', 'Đều rắn ở nhiệt độ phòng', 'Phần lớn không dẫn điện, không có ánh kim', 'Đều dẫn điện tốt'], 2, 'Phần lớn không dẫn điện.'),
    Q('Phi kim thường gặp ở 3 trạng thái?', ['Chỉ rắn', 'Chỉ lỏng', 'Chỉ khí', 'Rắn, lỏng, khí'], 3, 'O₂ (khí), Br₂ (lỏng), C (rắn)…'),
    Q('Phi kim + kim loại → ?', ['Không phản ứng', 'Muối hoặc oxit kim loại', 'Axit và khí hidro', 'Bazơ kiềm'], 1, 'Tạo muối/oxit.'),
    Q('Cl₂ + H₂ → ?', ['NaCl (muối ăn)', 'H₂Cl (sai công thức)', 'HClO (axit hipoclorơ)', 'HCl'], 3, '2HCl (axit clohidric).'),
    Q('Oxit của phi kim thường có tính chất?', ['Bazơ tan trong nước', 'Axit', 'Không tan', 'Trung tính tất cả'], 1, 'Phần lớn oxit phi kim + nước → axit.'),
    Q('CO₂ tan trong nước tạo?', ['Khí O₂', 'Bazơ NaOH', 'Axit yếu H₂CO₃', 'Muối cacbonat trung hoà'], 2, 'H₂CO₃ — axit yếu.'),
  ]),

  M(12, 'Lực — Khái niệm và biểu diễn', [
    Q('Lực là đại lượng?', ['Vô hướng', 'Vectơ (có phương, chiều, độ lớn, điểm đặt)', 'Chỉ có độ lớn', 'Không có đơn vị'], 1, 'Lực là đại lượng vectơ.'),
    Q('Đơn vị đo lực?', ['Newton (N)', 'kg (kilogam)', 'm/s (mét trên giây)', 'Joule (J)'], 0, 'Đơn vị: Newton (N).'),
    Q('Dụng cụ đo lực?', ['Cân (đo khối lượng)', 'Đồng hồ', 'Lực kế', 'Thước (đo độ dài)'], 2, 'Lực kế (lò xo).'),
    Q('Trọng lực là?', ['Lực hút của Trái Đất tác dụng lên vật', 'Lực hấp dẫn riêng', 'Lực đàn hồi', 'Lực ma sát'], 0, 'Trọng lực do Trái Đất gây ra.'),
    Q('Trọng lượng vật khối lượng 1 kg tại Trái Đất ≈ ?', ['1 N', '0.1 N', '100 N', '10 N'], 3, 'P = m·g ≈ 1·10 = 10 N.'),
    Q('Hai lực cân bằng là hai lực?', ['Cùng phương, ngược chiều, cùng độ lớn, cùng tác dụng lên 1 vật', 'Cùng chiều', 'Cùng hướng', 'Khác phương'], 0, 'Định nghĩa hai lực cân bằng.'),
  ]),

  M(13, 'Áp suất — Áp suất chất rắn, lỏng, khí', [
    Q('Áp suất được tính bằng?', ['F·S (lực nhân diện tích)', 'S/F (diện tích chia lực)', 'F/S', 'F + S (cộng đại lượng)'], 2, 'p = F/S.'),
    Q('Đơn vị áp suất trong SI?', ['N (Newton)', 'kg (kilogam)', 'm/s (mét trên giây)', 'Pa (N/m²)'], 3, 'Pascal = N/m².'),
    Q('Để giảm áp suất tác dụng lên mặt nền, ta nên?', ['Tăng diện tích S', 'Tăng F', 'Không thay đổi gì', 'Giảm S'], 0, 'p tỉ lệ nghịch với S.'),
    Q('Áp suất chất lỏng tại độ sâu h tính bằng?', ['p = d·h', 'p = d·h² ', 'p = d + h', 'p = d/h'], 0, 'p = d·h (d là trọng lượng riêng).'),
    Q('Áp suất khí quyển ở mực biển ≈ ?', ['1.013·10⁵ Pa', '10⁵ N', '100 Pa', '1 Pa'], 0, 'Khoảng 1 atm = 101 325 Pa.'),
    Q('Định luật Pascal phát biểu cho?', ['Vũ trụ', 'Khí lí tưởng', 'Chất lỏng/khí truyền nguyên áp suất theo mọi hướng', 'Chất rắn'], 2, 'Định luật Pascal cho chất lỏng/khí.'),
  ]),

  M(14, 'Đòn bẩy — Máy cơ đơn giản', [
    Q('Đòn bẩy là máy cơ đơn giản dùng để?', ['Tăng nhiệt độ', 'Tăng khối lượng', 'Lợi về lực hoặc đường đi', 'Tăng tốc độ'], 2, 'Giúp lợi về lực hoặc thuận tiện thao tác.'),
    Q('Đòn bẩy có?', ['Không có điểm tựa', '1 điểm tựa và 2 lực', '2 điểm tựa', '3 điểm tựa'], 1, 'Điểm tựa O, lực F₁, F₂.'),
    Q('Điều kiện cân bằng đòn bẩy?', ['F₁ = F₂', 'F₁ + F₂ = 0', 'F₁·OA = F₂·OB', 'F₁·F₂ = OA·OB'], 2, 'Quy tắc mômen.'),
    Q('Để được lợi 2 lần về lực, cần?', ['Không có điểm tựa', 'OA = OB', 'OA < OB', 'OA > OB (cánh tay đòn lực kéo lớn gấp 2)'], 3, 'OA = 2·OB ⇒ F₁ = F₂/2.'),
    Q('Lợi về lực thì thiệt về?', ['Khối lượng', 'Đường đi', 'Nhiệt độ', 'Áp suất'], 1, 'Không có lợi về công.'),
    Q('Ròng rọc cố định cho ta?', ['Đổi hướng lực', 'Lợi về lực', 'Vừa đổi hướng vừa lợi về lực', 'Lợi về đường đi'], 0, 'Ròng rọc cố định chỉ đổi hướng lực.'),
  ]),

  M(15, 'Công và năng lượng', [
    Q('Công cơ học sinh ra khi?', ['Lực vuông góc chuyển động', 'Không có lực', 'Có lực tác dụng và vật chuyển dời theo phương lực', 'Vật đứng yên'], 2, 'A = F·s (s cùng phương F).'),
    Q('Công thức tính công?', ['A = F + s', 'A = F/s', 'A = F·s', 'A = m·g'], 2, 'A = F·s.'),
    Q('Đơn vị của công?', ['Watt (đơn vị công suất)', 'Joule (J)', 'Pascal', 'Newton'], 1, 'J = N·m.'),
    Q('Năng lượng là?', ['Khối lượng', 'Thể tích', 'Khả năng sinh công', 'Áp suất'], 2, 'Năng lượng = khả năng thực hiện công.'),
    Q('Cơ năng = ?', ['Hoá năng', 'Nội năng + nhiệt năng', 'Động năng + thế năng', 'Điện năng + quang năng'], 2, 'Cơ năng = động năng + thế năng.'),
    Q('Vật đang chuyển động có?', ['Hoá năng', 'Nhiệt năng', 'Động năng', 'Thế năng đàn hồi'], 2, 'Wđ = (1/2)mv².'),
  ]),

  M(16, 'Định luật bảo toàn năng lượng', [
    Q('Năng lượng có thể?', ['Tự sinh ra', 'Tự mất đi', 'Biến mất hoàn toàn', 'Chuyển hoá từ dạng này sang dạng khác và bảo toàn về tổng'], 3, 'Định luật bảo toàn năng lượng.'),
    Q('Khi quả táo rơi, thế năng chuyển hoá thành?', ['Động năng', 'Điện năng', 'Quang năng', 'Hoá năng'], 0, 'Wt → Wđ.'),
    Q('Pin chuyển hoá năng lượng từ?', ['Cơ năng → quang năng', 'Điện năng → cơ năng', 'Quang năng → nhiệt năng', 'Hoá năng → điện năng'], 3, 'Phản ứng hoá học → dòng điện.'),
    Q('Quạt máy chuyển hoá?', ['Hoá năng → cơ năng', 'Điện năng → cơ năng', 'Cơ năng → điện năng', 'Quang năng → cơ năng'], 1, 'Điện → cơ năng (quay).'),
    Q('Hiệu suất H = ?', ['A nhân thời gian t', '(A có ích / A toàn phần)·100%', 'Công cộng công suất', 'A toàn phần / A có ích'], 1, 'Hiệu suất luôn ≤ 100%.'),
    Q('Vì sao hiệu suất < 100%?', ['Máy yếu', 'Sai phép tính', 'Có hao phí (ma sát, nhiệt…)', 'Không có lí do'], 2, 'Hao phí năng lượng không tránh khỏi.'),
  ]),

  M(17, 'Sinh học — Khái quát cơ thể người', [
    Q('Cơ thể người gồm mấy hệ cơ quan chính?', ['Chỉ 1 hệ', 'Khoảng 8–9 hệ', '100 hệ', '50 hệ'], 1, 'Hệ vận động, tuần hoàn, hô hấp, tiêu hoá, bài tiết, thần kinh, nội tiết, sinh dục…'),
    Q('Đơn vị cấu tạo và chức năng cơ bản của cơ thể là?', ['Mô (tập hợp tế bào)', 'Tế bào', 'Hệ cơ quan', 'Cơ quan'], 1, 'Tế bào — đơn vị cơ bản.'),
    Q('Nhóm tế bào cùng cấu tạo và chức năng tạo thành?', ['Hệ cơ quan', 'Cá thể', 'Cơ quan', 'Mô'], 3, 'Mô (epithelial, connective…).'),
    Q('Các cơ quan có cùng chức năng tạo thành?', ['Tế bào', 'Bào quan', 'Mô (tập hợp tế bào cùng loại)', 'Hệ cơ quan'], 3, 'Hệ cơ quan.'),
    Q('Sự sống của cơ thể người được duy trì nhờ?', ['Sự phối hợp giữa các hệ cơ quan', 'Tự phát', 'Ngẫu nhiên', 'Một hệ duy nhất'], 0, 'Các hệ cơ quan phối hợp.'),
    Q('Hệ nào điều khiển và điều hoà hoạt động của các hệ khác?', ['Bài tiết', 'Tiêu hoá', 'Hô hấp', 'Thần kinh và nội tiết'], 3, 'Hệ thần kinh + nội tiết điều khiển.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Định luật bảo toàn khối lượng do ai phát biểu?', ['Newton', 'Einstein', 'Mendeleev', 'Lavoisier'], 3, 'Lavoisier.'),
    Q('1 mol khí ở đktc chiếm thể tích?', ['22.4 L', '11.2 L', '24.79 L', '44.8 L'], 0, '22.4 L ở đktc cũ.'),
    Q('NaOH thuộc loại?', ['Oxit bazơ', 'Bazơ', 'Muối trung hoà', 'Axit mạnh'], 1, 'Bazơ tan (kiềm).'),
    Q('Đơn vị áp suất?', ['W (Watt — đơn vị công suất)', 'N (Newton — đơn vị lực)', 'J (Joule — đơn vị công)', 'Pa'], 3, 'Pascal.'),
    Q('Công A = ?', ['F/s (lực chia quãng đường)', 'm·g (trọng lượng)', 'F + s (cộng lực với quãng đường)', 'F·s'], 3, 'A = F·s.'),
    Q('Tế bào là?', ['Một loại mô', 'Một loại cơ quan', 'Một hệ cơ quan', 'Đơn vị cấu tạo cơ bản của sinh vật'], 3, 'Đơn vị cơ bản.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hệ vận động — Xương và khớp', [
    Q('Bộ xương người trưởng thành có khoảng?', ['300 xương', '500 xương', '100 xương', '206 xương'], 3, 'Khoảng 206 xương.'),
    Q('Chức năng chính của xương?', ['Tiêu hoá', 'Bài tiết', 'Hô hấp', 'Nâng đỡ, bảo vệ, vận động, tạo máu, dự trữ chất khoáng'], 3, 'Nhiều chức năng.'),
    Q('Khớp nối hai xương gồm?', ['Khớp động, khớp bán động, khớp bất động', 'Chỉ khớp động', 'Khớp xoay', 'Chỉ khớp bất động'], 0, 'Ba loại khớp.'),
    Q('Khớp gối là loại?', ['Khớp động', 'Khớp bất động', 'Khớp dính', 'Khớp bán động'], 0, 'Khớp động (vận động linh hoạt).'),
    Q('Xương tăng trưởng nhờ?', ['Sụn tăng trưởng ở đầu xương', 'Thần kinh', 'Mạch máu', 'Tuỷ xương (chỉ tạo máu)'], 0, 'Sụn tăng trưởng cho xương dài ra.'),
    Q('Để phòng cong vẹo cột sống, học sinh cần?', ['Mang vác lệch một bên', 'Không tập thể dục', 'Ngồi gù', 'Ngồi học đúng tư thế'], 3, 'Tư thế đúng và vận động đều.'),
  ]),

  M(20, 'Hệ vận động — Cơ', [
    Q('Cơ vân giúp?', ['Vận động có ý thức', 'Co bóp ruột', 'Bơm máu', 'Tiết mồ hôi'], 0, 'Cơ vân bám xương, vận động có ý thức.'),
    Q('Cơ tim là loại?', ['Cơ trơn', 'Cơ tim (riêng)', 'Cơ vân', 'Mô liên kết'], 1, 'Cơ tim có cấu tạo và hoạt động đặc biệt.'),
    Q('Cơ trơn có ở?', ['Móng tay', 'Bóng đái, dạ dày, ruột, mạch máu', 'Mí mắt và cơ vận nhãn', 'Tay, chân'], 1, 'Cơ trơn ở cơ quan nội tạng.'),
    Q('Cơ làm việc tốt khi?', ['Làm việc liên tục', 'Không vận động', 'Ăn nhiều', 'Lao động vừa sức, nghỉ ngơi hợp lí'], 3, 'Cân đối làm việc – nghỉ ngơi.'),
    Q('Mỏi cơ do?', ['Thiếu vitamin', 'Thiếu nước', 'Lượng oxi cung cấp không đủ, sinh axit lactic', 'Quá nhiều canxi'], 2, 'Tích tụ axit lactic gây mỏi.'),
    Q('Để cơ phát triển, cần?', ['Nghỉ ngơi suốt ngày', 'Không tập', 'Ăn kiêng nghiêm ngặt, bỏ tinh bột', 'Tập thể dục thường xuyên, dinh dưỡng đủ'], 3, 'Vận động + dinh dưỡng.'),
  ]),

  M(21, 'Hệ tuần hoàn — Tim và mạch máu', [
    Q('Tim người có mấy ngăn?', ['2', '4', '5', '3'], 1, '4 ngăn: 2 tâm nhĩ + 2 tâm thất.'),
    Q('Máu trong cơ thể được vận chuyển nhờ?', ['Phổi co giãn đẩy máu', 'Nhu động của ruột non', 'Tim co bóp đẩy máu vào mạch', 'Cơ bắp'], 2, 'Tim là máy bơm.'),
    Q('Ba loại mạch máu chính?', ['Cơ, gân, dây chằng', 'Động mạch, tĩnh mạch, mao mạch', 'Phổi, gan, thận', 'Cảm giác, vận động'], 1, 'Động, tĩnh, mao mạch.'),
    Q('Động mạch dẫn máu?', ['Đi ra khỏi tim', 'Về tim', 'Trong gan', 'Trong phổi'], 0, 'Động mạch ra khỏi tim; tĩnh mạch về tim.'),
    Q('Vòng tuần hoàn gồm?', ['Vòng nhỏ (phổi) và vòng lớn (cơ thể)', '4 vòng', '3 vòng', 'Chỉ 1 vòng'], 0, 'Tuần hoàn phổi + tuần hoàn cơ thể.'),
    Q('Máu giàu O₂ có màu?', ['Đỏ tươi', 'Đỏ thẫm', 'Xanh (giống máu mực bạch tuộc)', 'Vàng nhạt như huyết tương'], 0, 'Máu giàu O₂ → đỏ tươi.'),
  ]),

  M(22, 'Hệ tuần hoàn — Nhóm máu, miễn dịch', [
    Q('Hệ nhóm máu ABO có mấy nhóm?', ['5', '4 (A, B, AB, O)', '2', '3'], 1, '4 nhóm máu chính.'),
    Q('Nhóm máu O cho được?', ['Chỉ nhóm O', 'Chỉ nhóm B và AB', 'Chỉ nhóm A và AB', 'Tất cả nhóm khác'], 3, 'O là "người cho phổ thông".'),
    Q('Nhóm máu AB nhận được?', ['Tất cả nhóm khác', 'Chỉ A và O', 'Chỉ O và B', 'Chỉ AB'], 0, 'AB là "người nhận phổ thông".'),
    Q('Bạch cầu có vai trò?', ['Tham gia miễn dịch, chống bệnh', 'Tổng hợp protein', 'Đông máu', 'Vận chuyển O₂'], 0, 'Phòng vệ cơ thể.'),
    Q('Hồng cầu có vai trò?', ['Vận chuyển O₂ và CO₂', 'Đông máu', 'Tiêu diệt vi khuẩn', 'Sinh nhiệt'], 0, 'Vận chuyển khí (qua hemoglobin).'),
    Q('Vaccine giúp?', ['Tạo kháng thể đặc hiệu chủ động', 'Diệt virus ngay tức khắc', 'Hạ sốt', 'Bổ sung dinh dưỡng'], 0, 'Tiêm vaccine: tạo miễn dịch chủ động.'),
  ]),

  M(23, 'Hệ hô hấp', [
    Q('Cơ quan trao đổi khí chính?', ['Phổi', 'Tim (bơm máu)', 'Gan (lọc độc)', 'Thận (bài tiết)'], 0, 'Phổi.'),
    Q('Đường dẫn khí gồm?', ['Chỉ mũi', 'Chỉ phổi', 'Mũi, họng, thanh quản, khí quản, phế quản', 'Tim mạch'], 2, 'Hệ thống đường dẫn khí.'),
    Q('Trao đổi khí ở phổi xảy ra ở?', ['Phế quản', 'Phế nang', 'Mũi (lọc và làm ấm khí)', 'Khí quản'], 1, 'Phế nang — đơn vị trao đổi khí.'),
    Q('Khí O₂ vào máu qua?', ['Khuếch tán qua thành phế nang và mao mạch', 'Hấp thu chủ động', 'Tiêu hoá', 'Lọc qua thận'], 0, 'Khuếch tán theo gradient áp suất riêng.'),
    Q('Hít vào do?', ['Phổi tự phồng', 'Tim đập', 'Cơ hoành co, lồng ngực mở rộng', 'Cơ hoành giãn'], 2, 'Cơ hoành + cơ liên sườn co.'),
    Q('Hút thuốc lá gây hại chính cho hệ?', ['Bài tiết', 'Tiêu hoá', 'Hô hấp', 'Vận động'], 2, 'Tổn thương phổi, gây ung thư.'),
  ]),

  M(24, 'Hệ tiêu hoá', [
    Q('Hệ tiêu hoá có chức năng?', ['Trao đổi khí', 'Điều khiển cơ thể', 'Tuần hoàn máu', 'Phân giải thức ăn thành chất dinh dưỡng hấp thu'], 3, 'Phân giải + hấp thu thức ăn.'),
    Q('Ống tiêu hoá gồm?', ['Thận → bóng đái', 'Não → tuỷ → dây thần kinh', 'Miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn', 'Phổi → tim → mạch máu'], 2, 'Ống tiêu hoá đầy đủ.'),
    Q('Tiêu hoá hoá học chính diễn ra ở?', ['Tuyến mồ hôi', 'Hậu môn', 'Thực quản', 'Miệng và dạ dày, mạnh nhất ở ruột non'], 3, 'Ruột non là nơi tiêu hoá hoàn toàn.'),
    Q('Enzyme amylase tiêu hoá?', ['Vitamin và khoáng chất', 'Protein', 'Tinh bột', 'Lipid (chất béo)'], 2, 'Amylase phân giải tinh bột.'),
    Q('Hấp thu chất dinh dưỡng chủ yếu ở?', ['Ruột già', 'Ruột non (lông ruột)', 'Dạ dày', 'Thực quản'], 1, 'Lông ruột tăng diện tích hấp thu.'),
    Q('Bệnh dạ dày phổ biến do vi khuẩn?', ['E. coli', 'Virus cúm A', 'H. pylori', 'Trực khuẩn lao Mycobacterium'], 2, 'Helicobacter pylori gây viêm loét.'),
  ]),

  M(25, 'Hệ bài tiết', [
    Q('Hệ bài tiết chính gồm?', ['Tim, mạch máu', 'Tuyến mồ hôi, da', 'Phổi, gan', 'Thận, niệu quản, bóng đái, niệu đạo'], 3, 'Cơ quan bài tiết chính.'),
    Q('Đơn vị chức năng của thận?', ['Phế nang', 'Nephron', 'Neuron', 'Lông ruột'], 1, 'Nephron — đơn vị lọc máu.'),
    Q('Sản phẩm bài tiết chính qua thận?', ['Phân (qua hệ tiêu hoá)', 'Mồ hôi', 'Khí CO₂', 'Nước tiểu (chứa urê, creatinin, muối thừa)'], 3, 'Nước tiểu.'),
    Q('Thận lọc bao nhiêu lít máu mỗi ngày?', ['1 L', '500 L', '180 L', '20 L'], 2, 'Khoảng 180 L máu/ngày (lọc nhiều lần).'),
    Q('Phòng bệnh thận: cần?', ['Nhịn tiểu lâu', 'Ăn nhiều muối', 'Uống đủ nước, ăn uống lành mạnh, không lạm dụng thuốc', 'Uống ít nước'], 2, 'Thói quen tốt cho thận.'),
    Q('Bài tiết qua da chủ yếu là?', ['Nước tiểu', 'Mồ hôi (nước + muối + urê ít)', 'Khí CO₂', 'Dịch mật (do gan tiết)'], 1, 'Mồ hôi.'),
  ]),

  M(26, 'Hệ thần kinh — Cấu tạo', [
    Q('Hệ thần kinh trung ương gồm?', ['Dây thần kinh', 'Cơ quan cảm giác', 'Hạch thần kinh', 'Não và tuỷ sống'], 3, 'Não + tuỷ sống.'),
    Q('Đơn vị cấu tạo của hệ thần kinh?', ['Nephron', 'Tế bào hồng cầu', 'Neuron (nơron)', 'Phế nang'], 2, 'Nơron — tế bào thần kinh.'),
    Q('Não bộ điều khiển?', ['Chỉ phản xạ', 'Chỉ tuần hoàn', 'Chỉ tiêu hoá', 'Tất cả hoạt động cao cấp: tư duy, cảm xúc, vận động có ý thức…'], 3, 'Trung ương cao cấp.'),
    Q('Phản xạ là?', ['Phản ứng của cơ thể trả lời kích thích thông qua hệ thần kinh', 'Hô hấp tự động', 'Hành động có ý thức tuyệt đối', 'Sự tiêu hoá'], 0, 'Cơ chế cơ bản của hệ thần kinh.'),
    Q('Phản xạ có điều kiện được hình thành nhờ?', ['Học tập, luyện tập', 'Không cần não', 'Bẩm sinh', 'Ngẫu nhiên'], 0, 'Phản xạ có điều kiện — Pavlov.'),
    Q('Tuỷ sống nằm trong?', ['Lồng ngực', 'Khoang bụng cùng nội tạng', 'Ống xương sống', 'Hộp sọ cùng não bộ'], 2, 'Bảo vệ trong cột sống.'),
  ]),

  M(27, 'Các giác quan — Mắt và tai', [
    Q('Cơ quan thị giác?', ['Tai (thính giác)', 'Lưỡi (vị giác)', 'Mắt', 'Mũi (khứu giác)'], 2, 'Mắt — thị giác.'),
    Q('Phần cảm thụ ánh sáng ở mắt?', ['Thuỷ tinh thể', 'Đồng tử', 'Võng mạc', 'Giác mạc'], 2, 'Võng mạc chứa tế bào que và nón.'),
    Q('Cận thị do?', ['Mất võng mạc', 'Trục mắt ngắn', 'Trục mắt quá dài hoặc thuỷ tinh thể quá cong', 'Mắt sáng quá'], 2, 'Ảnh hội tụ trước võng mạc.'),
    Q('Cơ quan thính giác?', ['Mắt (thị giác)', 'Tai', 'Lưỡi (vị giác)', 'Da (xúc giác)'], 1, 'Tai — thính giác.'),
    Q('Phần cảm thụ âm thanh trong tai?', ['Màng nhĩ', 'Ống tai ngoài', 'Cơ quan Corti ở ốc tai', 'Vành tai'], 2, 'Cơ quan Corti chuyển dao động thành xung thần kinh.'),
    Q('Để bảo vệ mắt và tai?', ['Không cần chú ý', 'Nghe to thật to', 'Đọc nơi tối', 'Đọc nơi đủ sáng, không nghe nhạc quá to'], 3, 'Phòng cận thị, suy giảm thính lực.'),
  ]),

  M(28, 'Các giác quan — Mũi, lưỡi, da', [
    Q('Cơ quan khứu giác?', ['Mũi', 'Lưỡi (vị giác)', 'Da (xúc giác)', 'Tai (thính giác)'], 0, 'Mũi cảm nhận mùi.'),
    Q('Cơ quan vị giác?', ['Da (xúc giác)', 'Mũi (khứu giác)', 'Tai (thính giác)', 'Lưỡi'], 3, 'Lưỡi cảm nhận vị.'),
    Q('Năm vị cơ bản con người cảm nhận?', ['Ngọt, mặn, chua, đắng, umami', 'Chỉ ngọt và mặn', 'Thơm và thối', 'Cay và nóng'], 0, '5 vị cơ bản (umami: vị ngọt thịt).'),
    Q('Cảm giác cay thực chất là?', ['Âm thanh', 'Đau/nóng do hợp chất capsaicin kích thích thụ thể nhiệt – đau', 'Một loại mùi đặc trưng của ớt', 'Vị thứ sáu ngoài chua, ngọt, đắng, mặn, umami'], 1, 'Cay không phải vị, là cảm giác nóng/đau.'),
    Q('Da là cơ quan xúc giác có?', ['Chỉ thụ thể nhiệt', 'Thụ thể nhiệt, đau, áp lực, rung', 'Không có thụ thể', 'Chỉ thụ thể đau'], 1, 'Da chứa nhiều loại thụ thể.'),
    Q('Để bảo vệ da?', ['Bôi hoá chất tuỳ tiện', 'Tránh tắm', 'Vệ sinh, chống nắng, giữ ẩm, tránh hoá chất mạnh', 'Phơi nắng nhiều'], 2, 'Chăm sóc và bảo vệ da.'),
  ]),

  M(29, 'Hệ nội tiết', [
    Q('Tuyến nội tiết khác tuyến ngoại tiết ở chỗ?', ['Chỉ ở da', 'Tiết qua ống dẫn', 'Tiết sản phẩm vào máu (không qua ống dẫn)', 'Không tiết gì'], 2, 'Hormone tiết vào máu trực tiếp.'),
    Q('Tuyến yên (pituitary) có vai trò?', ['Tiết hormone tiêu hoá', 'Sản xuất tế bào máu', 'Tuyến chỉ huy nhiều tuyến nội tiết khác', 'Chỉ điều hoà huyết áp'], 2, 'Tuyến yên là "tuyến chỉ huy".'),
    Q('Tuyến giáp tiết hormone?', ['Estrogen', 'Adrenaline', 'Thyroxine (T3, T4)', 'Insulin'], 2, 'Thyroxine điều hoà chuyển hoá.'),
    Q('Insulin do tuyến nào tiết?', ['Thượng thận', 'Tuyến giáp (tiết thyroxin)', 'Tuyến yên (tiết hormon tăng trưởng)', 'Tụy'], 3, 'Tế bào β đảo tuỵ.'),
    Q('Insulin giúp?', ['Giảm canxi', 'Tăng đường huyết', 'Hạ đường huyết', 'Tăng huyết áp'], 2, 'Giảm glucose máu.'),
    Q('Bệnh đái tháo đường liên quan tới?', ['Estrogen', 'Insulin', 'Adrenaline', 'Thyroxine'], 1, 'Thiếu insulin hoặc kháng insulin.'),
  ]),

  M(30, 'Hệ sinh dục — Sinh sản người', [
    Q('Cơ quan sinh dục nam chính tạo tinh trùng?', ['Tử cung', 'Bóng đái', 'Buồng trứng', 'Tinh hoàn'], 3, 'Tinh hoàn.'),
    Q('Cơ quan sinh dục nữ chính tạo trứng?', ['Bóng đái', 'Buồng trứng', 'Tử cung', 'Tinh hoàn'], 1, 'Buồng trứng.'),
    Q('Thụ tinh xảy ra ở?', ['Buồng trứng', 'Tử cung', 'Âm đạo', 'Vòi trứng (ống dẫn trứng)'], 3, 'Vòi trứng — nơi tinh trùng gặp trứng.'),
    Q('Phôi làm tổ và phát triển ở?', ['Tử cung', 'Âm đạo', 'Vòi trứng', 'Buồng trứng'], 0, 'Tử cung.'),
    Q('Tuổi dậy thì nữ trung bình?', ['8–13 tuổi', '20–25 tuổi', '15–20 tuổi', 'Tuỳ rất nhiều'], 0, 'Khoảng 8–13 tuổi (sớm hơn nam).'),
    Q('Để bảo vệ sức khoẻ sinh sản tuổi vị thành niên?', ['Hiểu biết đúng, sống lành mạnh, vệ sinh cá nhân', 'Tuỳ tiện', 'Bỏ qua kiến thức', 'Không cần học'], 0, 'Giáo dục sức khoẻ sinh sản là cần thiết.'),
  ]),

  M(31, 'Cơ thể người — Bệnh và phòng bệnh', [
    Q('Tác nhân gây bệnh truyền nhiễm phổ biến?', ['Vi khuẩn, virus, kí sinh trùng, nấm', 'Vitamin', 'Kim loại', 'Chất phóng xạ tự nhiên trong đất'], 0, '4 nhóm tác nhân chính.'),
    Q('Phòng bệnh tốt nhất là?', ['Không cần làm gì', 'Uống thuốc suốt ngày', 'Tránh ra ngoài', 'Tiêm chủng, ăn uống sạch, giữ vệ sinh, tập thể dục'], 3, 'Phòng bệnh chủ động.'),
    Q('Bệnh HIV/AIDS lây qua?', ['Máu, quan hệ tình dục không an toàn, mẹ sang con', 'Bắt tay', 'Ăn chung', 'Không khí'], 0, '3 con đường chính.'),
    Q('Để bảo vệ sức khoẻ tim mạch?', ['Ăn ít muối, ít mỡ, không hút thuốc, tập thể dục', 'Hút thuốc', 'Ăn nhiều mỡ', 'Không vận động'], 0, 'Lối sống lành mạnh.'),
    Q('Vệ sinh răng miệng nên?', ['Không đánh răng', 'Chỉ đánh 1 lần/tuần', 'Đánh răng trước ăn duy nhất', 'Đánh răng 2 lần/ngày sau ăn'], 3, '2 lần/ngày + sau ăn.'),
    Q('Stress kéo dài ảnh hưởng?', ['Chỉ ảnh hưởng tóc', 'Không ảnh hưởng', 'Toàn diện: thần kinh, tim mạch, tiêu hoá, miễn dịch', 'Chỉ ảnh hưởng tâm trạng'], 2, 'Stress ảnh hưởng nhiều hệ.'),
  ]),

  M(32, 'Ôn tập Hoá học', [
    Q('Cân bằng: Na + H₂O → NaOH + H₂?', ['2Na + H₂O → 2NaOH + H₂', 'Na + 2H₂O → NaOH + H₂', '2Na + 2H₂O → 2NaOH + H₂', 'Na + H₂O → NaOH + H₂'], 2, '2Na + 2H₂O → 2NaOH + H₂↑.'),
    Q('NaCl + AgNO₃ → AgCl↓ + NaNO₃ thuộc loại?', ['Phản ứng hoá hợp', 'Phản ứng phân huỷ', 'Phản ứng thế', 'Phản ứng trao đổi'], 3, 'Trao đổi ion tạo kết tủa.'),
    Q('1 mol nước nặng?', ['18 g', '20 g', '16 g', '32 g'], 0, 'M(H₂O) = 18.'),
    Q('Dung dịch NaCl 10% trong 200 g có?', ['20 g NaCl', '50 g NaCl', '10 g NaCl', '100 g NaCl'], 0, '10%·200 = 20 g.'),
    Q('Đem 2 L dd HCl 0.5 M cần bao nhiêu mol HCl?', ['2', '1', '4', '0.5'], 1, '0.5·2 = 1 mol.'),
    Q('Axit + bazơ → ?', ['Không phản ứng', 'Muối + H₂', 'Muối + nước', 'Khí + nước'], 2, 'Phản ứng trung hoà.'),
  ]),

  M(33, 'Ôn tập Vật lý', [
    Q('Lực có đơn vị?', ['J (đơn vị công)', 'm/s (đơn vị vận tốc)', 'N', 'kg (đơn vị khối lượng)'], 2, 'Newton.'),
    Q('Trọng lượng vật 5 kg ≈ ?', ['0.5 N', '5 N', '50 N', '500 N'], 2, 'P ≈ m·10 = 50 N.'),
    Q('Áp suất tính bằng?', ['S/F (diện tích chia lực)', 'F/S', 'F + S (cộng lực với diện tích)', 'F·S (lực nhân diện tích)'], 1, 'p = F/S.'),
    Q('Công A = ?', ['m·g (trọng lượng)', 'F·v (công suất tức thời)', 'F/s (lực chia quãng đường)', 'F·s'], 3, 'Công = F·s.'),
    Q('Để được lợi 2 lần về lực qua đòn bẩy, cánh tay đòn của lực kéo phải?', ['Không liên quan', 'Lớn gấp 2 lần cánh tay vật', 'Nhỏ gấp 2 lần', 'Bằng nhau'], 1, 'F₁/F₂ = OB/OA.'),
    Q('Định luật bảo toàn năng lượng phát biểu?', ['Năng lượng không tồn tại', 'Năng lượng luôn tăng', 'Năng lượng luôn giảm', 'Năng lượng không tự sinh ra hay mất đi, chỉ chuyển hoá'], 3, 'Định luật cơ bản của vật lí.'),
  ]),

  M(34, 'Ôn tập Sinh học cơ thể người', [
    Q('Tim người có?', ['2 ngăn', '5 ngăn', '3 ngăn', '4 ngăn'], 3, '4 ngăn.'),
    Q('Đơn vị chức năng của thận?', ['Tế bào hồng cầu', 'Nephron', 'Neuron', 'Phế nang'], 1, 'Nephron.'),
    Q('Cơ quan trao đổi khí chính?', ['Gan (lọc và khử độc)', 'Tim (bơm máu đi nuôi cơ thể)', 'Ruột (hấp thụ chất dinh dưỡng)', 'Phổi'], 3, 'Phổi.'),
    Q('Hấp thu chất dinh dưỡng chính ở?', ['Ruột già', 'Ruột non', 'Thực quản', 'Dạ dày'], 1, 'Ruột non (lông ruột).'),
    Q('Nhóm máu O cho được nhóm nào?', ['Chỉ nhóm O (cho cùng nhóm)', 'Chỉ A và B', 'Chỉ AB', 'Tất cả nhóm'], 3, 'Cho phổ thông.'),
    Q('Cơ quan thị giác là?', ['Lưỡi (vị giác)', 'Mắt', 'Mũi (khứu giác)', 'Tai (thính giác)'], 1, 'Mắt.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Phản ứng hoá học bảo toàn?', ['Nhiệt độ', 'Áp suất', 'Thể tích', 'Khối lượng'], 3, 'Bảo toàn khối lượng.'),
    Q('Khí CO₂ tan trong nước cho?', ['Bazơ NaOH', 'Kim loại', 'Axit yếu H₂CO₃', 'Muối cacbonat tan'], 2, 'H₂CO₃ — axit cacbonic.'),
    Q('Đơn vị áp suất là?', ['N (đơn vị lực)', 'J (đơn vị công)', 'Pa', 'W (đơn vị công suất)'], 2, 'Pascal.'),
    Q('Vật rơi tự do: thế năng chuyển thành?', ['Điện năng', 'Hoá năng', 'Động năng', 'Quang năng'], 2, 'Wt → Wđ.'),
    Q('Cơ thể người gồm khoảng bao nhiêu hệ cơ quan chính?', ['4', '8–9', '20', '1'], 1, 'Khoảng 8–9 hệ.'),
    Q('Tiêm vaccine tạo ra?', ['Không tác dụng', 'Dị ứng', 'Miễn dịch chủ động', 'Bệnh thật ngay sau tiêm'], 2, 'Miễn dịch chủ động đặc hiệu.'),
  ]),
];

export const S8KHTN_SCENARIOS = indexBy(S8KHTN_WEEKS);
