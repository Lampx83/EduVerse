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
    Q('Phản ứng hoá học là gì?', ['Sự thay đổi hình dạng', 'Quá trình biến đổi từ chất này thành chất khác', 'Sự nóng chảy', 'Sự bay hơi'], 1, 'Định nghĩa: chất ban đầu chuyển thành chất mới.'),
    Q('Dấu hiệu nhận biết có phản ứng hoá học?', ['Đổi màu, kết tủa, sủi bọt khí, phát sáng, phát nhiệt', 'Đổi hình dạng', 'Thay đổi kích thước', 'Bay hơi'], 0, 'Các dấu hiệu phản ứng hoá học điển hình.'),
    Q('Trong phản ứng hoá học, cái gì được bảo toàn?', ['Khối lượng', 'Màu sắc', 'Hình dạng', 'Mùi vị'], 0, 'Định luật bảo toàn khối lượng.'),
    Q('Định luật bảo toàn khối lượng do ai phát biểu?', ['Newton', 'Lavoisier', 'Einstein', 'Galileo'], 1, 'Antoine Lavoisier (Pháp).'),
    Q('A + B → C + D. Khối lượng A + B so với C + D?', ['Lớn hơn', 'Bằng', 'Nhỏ hơn', 'Không xác định'], 1, 'Bảo toàn khối lượng.'),
    Q('Chất tham gia còn được gọi là?', ['Chất phản ứng', 'Sản phẩm', 'Xúc tác', 'Dung môi'], 0, 'Chất tham gia/chất phản ứng (reactant).'),
  ]),

  M(2, 'Phương trình hoá học — Cân bằng', [
    Q('Phương trình hoá học biểu diễn?', ['Phản ứng hoá học bằng kí hiệu', 'Hiện tượng vật lí', 'Cấu tạo nguyên tử', 'Bảng tuần hoàn'], 0, 'Biểu diễn phản ứng bằng công thức + hệ số.'),
    Q('Cân bằng: H₂ + O₂ → H₂O. Hệ số đúng?', ['1, 1, 1', '2, 1, 2', '1, 2, 2', '2, 2, 1'], 1, '2H₂ + O₂ → 2H₂O.'),
    Q('Trong PTHH, số nguyên tử mỗi nguyên tố ở hai vế phải?', ['Khác nhau', 'Bằng nhau', 'Lớn hơn ở vế trái', 'Lớn hơn ở vế phải'], 1, 'Cân bằng nguyên tố hai vế.'),
    Q('Cân bằng Fe + O₂ → Fe₂O₃?', ['Fe + O₂ → Fe₂O₃', '4Fe + 3O₂ → 2Fe₂O₃', '2Fe + O₂ → Fe₂O₃', 'Fe + 3O₂ → 2Fe₂O₃'], 1, '4 Fe + 3 O₂ → 2 Fe₂O₃.'),
    Q('Hệ số trong PTHH có thể là?', ['Số nguyên dương', 'Số thập phân', 'Số âm', 'Tuỳ chọn'], 0, 'Hệ số nguyên dương nhỏ nhất.'),
    Q('Cân bằng: CH₄ + O₂ → CO₂ + H₂O?', ['CH₄ + 2O₂ → CO₂ + 2H₂O', 'CH₄ + O₂ → CO₂ + H₂O', '2CH₄ + 3O₂ → 2CO₂ + 4H₂O', 'CH₄ + 4O₂ → 2CO₂ + 2H₂O'], 0, 'Đốt cháy metan.'),
  ]),

  M(3, 'Mol — Khối lượng mol', [
    Q('1 mol chất chứa bao nhiêu phân tử/nguyên tử?', ['6.02·10²²', '6.02·10²³', '3.01·10²³', '10⁶'], 1, 'Số Avogadro = 6.02·10²³.'),
    Q('Khối lượng mol (M) có đơn vị?', ['g', 'g/mol', 'kg', 'mol/g'], 1, 'g/mol.'),
    Q('M của H₂O = ?', ['16 g/mol', '18 g/mol', '20 g/mol', '32 g/mol'], 1, '2·1 + 16 = 18 g/mol.'),
    Q('M của O₂ = ?', ['16', '32', '48', '64'], 1, '2·16 = 32 g/mol.'),
    Q('M của NaCl = ?', ['35.5', '58.5', '23', '46'], 1, '23 + 35.5 = 58.5 g/mol.'),
    Q('Công thức tính số mol theo khối lượng?', ['n = m·M', 'n = m/M', 'n = M/m', 'n = m + M'], 1, 'n = m/M.'),
  ]),

  M(4, 'Tính theo phương trình hoá học', [
    Q('Bước đầu tiên khi giải bài toán theo PTHH?', ['Tính khối lượng', 'Đổi dữ kiện ra số mol', 'Cân bằng PTHH', 'Tra bảng tuần hoàn'], 2, 'Đầu tiên: viết & cân bằng PTHH.'),
    Q('Cho n(H₂) = 0.5 mol, tính khối lượng?', ['0.5 g', '1 g', '2 g', '5 g'], 1, 'm = n·M = 0.5·2 = 1 g.'),
    Q('Đốt 1 mol C trong O₂ dư: C + O₂ → CO₂. Mol CO₂?', ['0.5', '1', '2', '4'], 1, 'Tỉ lệ 1:1.'),
    Q('Cho 0.2 mol Zn + HCl → ZnCl₂ + H₂. Mol H₂?', ['0.1', '0.2', '0.4', '1'], 1, 'Zn + 2HCl → ZnCl₂ + H₂; mol H₂ = mol Zn = 0.2.'),
    Q('Số mol khí ở điều kiện tiêu chuẩn được tính?', ['n = V/24.79', 'n = V/22.4', 'n = V·22.4', 'n = m·V'], 1, 'Ở đktc: 1 mol khí = 22.4 L.'),
    Q('Thể tích 0.5 mol CO₂ ở đktc?', ['11.2 L', '22.4 L', '44.8 L', '5.6 L'], 0, 'V = 0.5·22.4 = 11.2 L.'),
  ]),

  M(5, 'Dung dịch — Nồng độ phần trăm', [
    Q('Dung dịch gồm?', ['Chất tan + dung môi', 'Chỉ chất tan', 'Chỉ dung môi', 'Khí và lỏng'], 0, 'Dung dịch = chất tan trong dung môi.'),
    Q('Nồng độ phần trăm C% được tính?', ['C% = mct·100/mdd', 'C% = mdd/mct', 'C% = mct/V', 'C% = V·mct'], 0, 'C% = (mct/mdd)·100%.'),
    Q('Hoà tan 20 g muối vào 80 g nước. C% = ?', ['10%', '20%', '25%', '80%'], 1, 'mdd = 100; C% = 20/100·100% = 20%.'),
    Q('Để pha 200 g dung dịch 5% NaCl, cần?', ['10 g NaCl + 190 g nước', '5 g NaCl + 195 g nước', '20 g NaCl + 180 g nước', '50 g NaCl + 150 g nước'], 0, '5%·200 = 10 g chất tan.'),
    Q('Dung môi phổ biến nhất là?', ['Cồn', 'Nước', 'Dầu', 'Acid'], 1, 'Nước là dung môi vạn năng.'),
    Q('Khi pha loãng dung dịch, khối lượng chất tan?', ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'], 2, 'Chỉ thêm dung môi, khối lượng chất tan giữ nguyên.'),
  ]),

  M(6, 'Nồng độ mol — Áp dụng', [
    Q('Nồng độ mol (CM) có đơn vị?', ['g/L', 'mol/L', 'g/mol', 'L/mol'], 1, 'CM = mol/L.'),
    Q('Công thức?', ['CM = n·V', 'CM = n/V', 'CM = V/n', 'CM = n + V'], 1, 'CM = n/V (V tính bằng lít).'),
    Q('Hoà tan 0.5 mol NaCl trong 2 L nước. CM = ?', ['0.1 M', '0.25 M', '0.5 M', '1 M'], 1, '0.5/2 = 0.25 M.'),
    Q('Để có 1 L dung dịch HCl 0.1 M cần bao nhiêu mol HCl?', ['0.01', '0.1', '1', '10'], 1, 'n = CM·V = 0.1·1 = 0.1 mol.'),
    Q('Pha loãng V₁·C₁ = V₂·C₂. Đây là?', ['Định luật pha loãng', 'Định luật bảo toàn khối lượng', 'Định luật Avogadro', 'Định luật bảo toàn năng lượng'], 0, 'Công thức pha loãng dung dịch.'),
    Q('Pha 100 mL dd 1 M thành 1 L → nồng độ mới?', ['0.01 M', '0.1 M', '1 M', '10 M'], 1, '0.1·1 = 1·C₂ ⇒ C₂ = 0.1 M.'),
  ]),

  M(7, 'Acid (axit) — Tính chất hoá học', [
    Q('Axit có vị?', ['Ngọt', 'Chua', 'Mặn', 'Đắng'], 1, 'Axit có vị chua.'),
    Q('Axit làm quỳ tím chuyển?', ['Xanh', 'Đỏ', 'Vàng', 'Tím'], 1, 'Quỳ tím + axit → đỏ.'),
    Q('Axit + kim loại → ?', ['Muối + nước', 'Muối + H₂', 'Bazơ + nước', 'Không phản ứng'], 1, 'Axit + KL (đứng trước H) → muối + khí H₂.'),
    Q('Axit + bazơ → ?', ['Muối + nước', 'Muối + H₂', 'Khí + nước', 'Không phản ứng'], 0, 'Phản ứng trung hoà.'),
    Q('HCl là?', ['Axit clohidric', 'Axit sunfuric', 'Axit nitric', 'Axit photphoric'], 0, 'Hydrochloric acid.'),
    Q('H₂SO₄ là?', ['Axit clohidric', 'Axit sunfuric', 'Axit nitric', 'Axit cacbonic'], 1, 'Sulfuric acid.'),
  ]),

  M(8, 'Bazơ (base) — Tính chất', [
    Q('Bazơ làm quỳ tím chuyển?', ['Đỏ', 'Xanh', 'Vàng', 'Hồng'], 1, 'Bazơ → quỳ tím chuyển xanh.'),
    Q('Bazơ + axit → ?', ['Muối + nước', 'Muối + khí', 'Bazơ mới + nước', 'Không phản ứng'], 0, 'Trung hoà → muối + nước.'),
    Q('NaOH là bazơ?', ['Tan trong nước', 'Không tan', 'Khí', 'Rắn không tan'], 0, 'Tan (kiềm).'),
    Q('Bazơ làm phenolphtalein không màu chuyển?', ['Hồng', 'Vàng', 'Xanh', 'Đỏ'], 0, 'Phenolphtalein + bazơ → hồng/đỏ tươi.'),
    Q('Cu(OH)₂ là?', ['Bazơ tan', 'Bazơ không tan, màu xanh lam', 'Axit', 'Muối'], 1, 'Bazơ không tan, màu xanh đặc trưng.'),
    Q('Phản ứng tạo Cu(OH)₂ thường dùng?', ['CuSO₄ + NaOH', 'CuCl₂ + HCl', 'Cu + H₂O', 'CuO + H₂'], 0, 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄.'),
  ]),

  M(9, 'Muối — Tính chất, ứng dụng', [
    Q('Muối ăn (NaCl) tan trong nước thành?', ['Dung dịch trung tính', 'Axit', 'Bazơ', 'Không tan'], 0, 'Dung dịch NaCl trung tính.'),
    Q('Muối + axit (mạnh hơn) → ?', ['Muối mới + axit mới', 'Bazơ mới', 'Kim loại', 'Khí O₂'], 0, 'Phản ứng tạo muối mới + axit mới.'),
    Q('Muối + bazơ → ?', ['Có thể tạo muối mới + bazơ mới (nếu có kết tủa)', 'Luôn tạo axit', 'Luôn tạo kim loại', 'Không bao giờ phản ứng'], 0, 'Tuỳ điều kiện kết tủa/khí.'),
    Q('CaCO₃ tan trong axit HCl tạo ?', ['CaCl₂ + H₂O + CO₂', 'Ca(OH)₂', 'CaO', 'CO'], 0, 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.'),
    Q('Ứng dụng muối NaCl?', ['Bảo quản thực phẩm, gia vị, công nghiệp', 'Làm thuốc nổ', 'Làm phân bón', 'Làm thuốc súng'], 0, 'Đa dụng trong đời sống và công nghiệp.'),
    Q('Phân đạm (urê, NH₄NO₃…) là muối cung cấp nguyên tố?', ['N (nitơ)', 'P (photpho)', 'K (kali)', 'Ca (canxi)'], 0, 'Phân đạm cung cấp nitơ cho cây.'),
  ]),

  M(10, 'Kim loại — Tính chất chung', [
    Q('Tính chất vật lí chung của kim loại?', ['Tính dẻo, dẫn điện, dẫn nhiệt, ánh kim', 'Cứng, giòn', 'Khí, lỏng', 'Hoàn toàn cách điện'], 0, 'Dẻo, dẫn điện-nhiệt, ánh kim.'),
    Q('Kim loại dẫn điện tốt nhất?', ['Vàng', 'Bạc', 'Đồng', 'Sắt'], 1, 'Ag (bạc) dẫn điện tốt nhất.'),
    Q('Kim loại nào lỏng ở nhiệt độ thường?', ['Sắt', 'Thuỷ ngân (Hg)', 'Vàng', 'Nhôm'], 1, 'Hg lỏng ở nhiệt độ thường.'),
    Q('Kim loại + phi kim → ?', ['Muối', 'Oxit hoặc muối', 'Bazơ', 'Axit'], 1, 'Cl, S, O… tạo muối hoặc oxit.'),
    Q('Kim loại + axit (mạnh, loãng) → ?', ['Muối + H₂', 'Bazơ + muối', 'Muối + nước', 'Không phản ứng'], 0, 'Cho khí H₂ và muối.'),
    Q('Dãy hoạt động hoá học sắp xếp theo?', ['Khối lượng nguyên tử', 'Mức độ hoạt động hoá học giảm dần từ trái sang phải', 'Số electron', 'Màu sắc'], 1, 'K, Na, Ca, Mg, Al, Zn, Fe, Cu, Hg, Ag, Au — giảm dần.'),
  ]),

  M(11, 'Phi kim — Một số phi kim quan trọng', [
    Q('Phi kim khác kim loại ở chỗ?', ['Phần lớn không dẫn điện, không có ánh kim', 'Đều dẫn điện tốt', 'Đều có ánh kim', 'Đều rắn ở nhiệt độ phòng'], 0, 'Phần lớn không dẫn điện.'),
    Q('Phi kim thường gặp ở 3 trạng thái?', ['Rắn, lỏng, khí', 'Chỉ rắn', 'Chỉ lỏng', 'Chỉ khí'], 0, 'O₂ (khí), Br₂ (lỏng), C (rắn)…'),
    Q('Phi kim + kim loại → ?', ['Muối hoặc oxit kim loại', 'Bazơ', 'Axit', 'Không phản ứng'], 0, 'Tạo muối/oxit.'),
    Q('Cl₂ + H₂ → ?', ['HCl', 'HClO', 'H₂Cl', 'NaCl'], 0, '2HCl (axit clohidric).'),
    Q('Oxit của phi kim thường có tính chất?', ['Bazơ', 'Axit', 'Trung tính tất cả', 'Không tan'], 1, 'Phần lớn oxit phi kim + nước → axit.'),
    Q('CO₂ tan trong nước tạo?', ['Axit yếu H₂CO₃', 'Bazơ NaOH', 'Muối', 'Khí O₂'], 0, 'H₂CO₃ — axit yếu.'),
  ]),

  M(12, 'Lực — Khái niệm và biểu diễn', [
    Q('Lực là đại lượng?', ['Vô hướng', 'Vectơ (có phương, chiều, độ lớn, điểm đặt)', 'Chỉ có độ lớn', 'Không có đơn vị'], 1, 'Lực là đại lượng vectơ.'),
    Q('Đơn vị đo lực?', ['kg', 'm/s', 'Newton (N)', 'Joule'], 2, 'Đơn vị: Newton (N).'),
    Q('Dụng cụ đo lực?', ['Cân', 'Lực kế', 'Thước', 'Đồng hồ'], 1, 'Lực kế (lò xo).'),
    Q('Trọng lực là?', ['Lực hút của Trái Đất tác dụng lên vật', 'Lực ma sát', 'Lực đàn hồi', 'Lực hấp dẫn riêng'], 0, 'Trọng lực do Trái Đất gây ra.'),
    Q('Trọng lượng vật khối lượng 1 kg tại Trái Đất ≈ ?', ['1 N', '10 N', '100 N', '0.1 N'], 1, 'P = m·g ≈ 1·10 = 10 N.'),
    Q('Hai lực cân bằng là hai lực?', ['Cùng phương, ngược chiều, cùng độ lớn, cùng tác dụng lên 1 vật', 'Cùng chiều', 'Cùng hướng', 'Khác phương'], 0, 'Định nghĩa hai lực cân bằng.'),
  ]),

  M(13, 'Áp suất — Áp suất chất rắn, lỏng, khí', [
    Q('Áp suất được tính bằng?', ['F·S', 'F/S', 'S/F', 'F + S'], 1, 'p = F/S.'),
    Q('Đơn vị áp suất trong SI?', ['N', 'Pa (N/m²)', 'kg', 'm/s'], 1, 'Pascal = N/m².'),
    Q('Để giảm áp suất tác dụng lên mặt nền, ta nên?', ['Tăng F', 'Tăng diện tích S', 'Giảm S', 'Không thay đổi gì'], 1, 'p tỉ lệ nghịch với S.'),
    Q('Áp suất chất lỏng tại độ sâu h tính bằng?', ['p = d·h', 'p = d/h', 'p = d + h', 'p = d·h² '], 0, 'p = d·h (d là trọng lượng riêng).'),
    Q('Áp suất khí quyển ở mực biển ≈ ?', ['1.013·10⁵ Pa', '1 Pa', '100 Pa', '10⁵ N'], 0, 'Khoảng 1 atm = 101 325 Pa.'),
    Q('Định luật Pascal phát biểu cho?', ['Chất rắn', 'Chất lỏng/khí truyền nguyên áp suất theo mọi hướng', 'Khí lí tưởng', 'Vũ trụ'], 1, 'Định luật Pascal cho chất lỏng/khí.'),
  ]),

  M(14, 'Đòn bẩy — Máy cơ đơn giản', [
    Q('Đòn bẩy là máy cơ đơn giản dùng để?', ['Lợi về lực hoặc đường đi', 'Tăng khối lượng', 'Tăng nhiệt độ', 'Tăng tốc độ'], 0, 'Giúp lợi về lực hoặc thuận tiện thao tác.'),
    Q('Đòn bẩy có?', ['1 điểm tựa và 2 lực', '2 điểm tựa', '3 điểm tựa', 'Không có điểm tựa'], 0, 'Điểm tựa O, lực F₁, F₂.'),
    Q('Điều kiện cân bằng đòn bẩy?', ['F₁·OA = F₂·OB', 'F₁ + F₂ = 0', 'F₁ = F₂', 'F₁·F₂ = OA·OB'], 0, 'Quy tắc mômen.'),
    Q('Để được lợi 2 lần về lực, cần?', ['OA = OB', 'OA > OB (cánh tay đòn lực kéo lớn gấp 2)', 'OA < OB', 'Không có điểm tựa'], 1, 'OA = 2·OB ⇒ F₁ = F₂/2.'),
    Q('Lợi về lực thì thiệt về?', ['Đường đi', 'Nhiệt độ', 'Áp suất', 'Khối lượng'], 0, 'Không có lợi về công.'),
    Q('Ròng rọc cố định cho ta?', ['Lợi về lực', 'Đổi hướng lực', 'Lợi về đường đi', 'Cả 3'], 1, 'Ròng rọc cố định chỉ đổi hướng lực.'),
  ]),

  M(15, 'Công và năng lượng', [
    Q('Công cơ học sinh ra khi?', ['Có lực tác dụng và vật chuyển dời theo phương lực', 'Vật đứng yên', 'Lực vuông góc chuyển động', 'Không có lực'], 0, 'A = F·s (s cùng phương F).'),
    Q('Công thức tính công?', ['A = F·s', 'A = F/s', 'A = F + s', 'A = m·g'], 0, 'A = F·s.'),
    Q('Đơn vị của công?', ['Newton', 'Joule (J)', 'Pascal', 'Watt'], 1, 'J = N·m.'),
    Q('Năng lượng là?', ['Khả năng sinh công', 'Khối lượng', 'Thể tích', 'Áp suất'], 0, 'Năng lượng = khả năng thực hiện công.'),
    Q('Cơ năng = ?', ['Động năng + thế năng', 'Nội năng + nhiệt năng', 'Điện năng + quang năng', 'Hoá năng'], 0, 'Cơ năng = động năng + thế năng.'),
    Q('Vật đang chuyển động có?', ['Động năng', 'Thế năng đàn hồi', 'Nhiệt năng', 'Hoá năng'], 0, 'Wđ = (1/2)mv².'),
  ]),

  M(16, 'Định luật bảo toàn năng lượng', [
    Q('Năng lượng có thể?', ['Tự sinh ra', 'Tự mất đi', 'Chuyển hoá từ dạng này sang dạng khác và bảo toàn về tổng', 'Biến mất hoàn toàn'], 2, 'Định luật bảo toàn năng lượng.'),
    Q('Khi quả táo rơi, thế năng chuyển hoá thành?', ['Điện năng', 'Động năng', 'Hoá năng', 'Quang năng'], 1, 'Wt → Wđ.'),
    Q('Pin chuyển hoá năng lượng từ?', ['Cơ năng → quang năng', 'Hoá năng → điện năng', 'Điện năng → cơ năng', 'Quang năng → nhiệt năng'], 1, 'Phản ứng hoá học → dòng điện.'),
    Q('Quạt máy chuyển hoá?', ['Điện năng → cơ năng', 'Cơ năng → điện năng', 'Hoá năng → cơ năng', 'Quang năng → cơ năng'], 0, 'Điện → cơ năng (quay).'),
    Q('Hiệu suất H = ?', ['(A có ích / A toàn phần)·100%', 'A toàn phần / A có ích', 'A·t', 'A + P'], 0, 'Hiệu suất luôn ≤ 100%.'),
    Q('Vì sao hiệu suất < 100%?', ['Có hao phí (ma sát, nhiệt…)', 'Không có lí do', 'Máy yếu', 'Sai phép tính'], 0, 'Hao phí năng lượng không tránh khỏi.'),
  ]),

  M(17, 'Sinh học — Khái quát cơ thể người', [
    Q('Cơ thể người gồm mấy hệ cơ quan chính?', ['Khoảng 8–9 hệ', 'Chỉ 1 hệ', '50 hệ', '100 hệ'], 0, 'Hệ vận động, tuần hoàn, hô hấp, tiêu hoá, bài tiết, thần kinh, nội tiết, sinh dục…'),
    Q('Đơn vị cấu tạo và chức năng cơ bản của cơ thể là?', ['Tế bào', 'Mô', 'Cơ quan', 'Hệ'], 0, 'Tế bào — đơn vị cơ bản.'),
    Q('Nhóm tế bào cùng cấu tạo và chức năng tạo thành?', ['Mô', 'Cơ quan', 'Hệ', 'Cá thể'], 0, 'Mô (epithelial, connective…).'),
    Q('Các cơ quan có cùng chức năng tạo thành?', ['Mô', 'Hệ cơ quan', 'Tế bào', 'Bào quan'], 1, 'Hệ cơ quan.'),
    Q('Sự sống của cơ thể người được duy trì nhờ?', ['Sự phối hợp giữa các hệ cơ quan', 'Một hệ duy nhất', 'Tự phát', 'Ngẫu nhiên'], 0, 'Các hệ cơ quan phối hợp.'),
    Q('Hệ nào điều khiển và điều hoà hoạt động của các hệ khác?', ['Tiêu hoá', 'Thần kinh và nội tiết', 'Bài tiết', 'Hô hấp'], 1, 'Hệ thần kinh + nội tiết điều khiển.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Định luật bảo toàn khối lượng do ai phát biểu?', ['Newton', 'Lavoisier', 'Einstein', 'Mendeleev'], 1, 'Lavoisier.'),
    Q('1 mol khí ở đktc chiếm thể tích?', ['11.2 L', '22.4 L', '44.8 L', '24.79 L'], 1, '22.4 L ở đktc cũ.'),
    Q('NaOH thuộc loại?', ['Axit', 'Bazơ', 'Muối', 'Oxit'], 1, 'Bazơ tan (kiềm).'),
    Q('Đơn vị áp suất?', ['N', 'Pa', 'J', 'W'], 1, 'Pascal.'),
    Q('Công A = ?', ['F·s', 'F/s', 'F + s', 'm·g'], 0, 'A = F·s.'),
    Q('Tế bào là?', ['Đơn vị cấu tạo cơ bản của sinh vật', 'Một loại mô', 'Một loại cơ quan', 'Một hệ cơ quan'], 0, 'Đơn vị cơ bản.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hệ vận động — Xương và khớp', [
    Q('Bộ xương người trưởng thành có khoảng?', ['100 xương', '206 xương', '300 xương', '500 xương'], 1, 'Khoảng 206 xương.'),
    Q('Chức năng chính của xương?', ['Nâng đỡ, bảo vệ, vận động, tạo máu, dự trữ chất khoáng', 'Tiêu hoá', 'Hô hấp', 'Bài tiết'], 0, 'Nhiều chức năng.'),
    Q('Khớp nối hai xương gồm?', ['Khớp động, khớp bán động, khớp bất động', 'Chỉ khớp động', 'Chỉ khớp bất động', 'Khớp xoay'], 0, 'Ba loại khớp.'),
    Q('Khớp gối là loại?', ['Khớp động', 'Khớp bán động', 'Khớp bất động', 'Khớp dính'], 0, 'Khớp động (vận động linh hoạt).'),
    Q('Xương tăng trưởng nhờ?', ['Sụn tăng trưởng ở đầu xương', 'Tủy', 'Mạch máu', 'Thần kinh'], 0, 'Sụn tăng trưởng cho xương dài ra.'),
    Q('Để phòng cong vẹo cột sống, học sinh cần?', ['Ngồi học đúng tư thế', 'Mang vác lệch một bên', 'Ngồi gù', 'Không tập thể dục'], 0, 'Tư thế đúng và vận động đều.'),
  ]),

  M(20, 'Hệ vận động — Cơ', [
    Q('Cơ vân giúp?', ['Vận động có ý thức', 'Co bóp ruột', 'Bơm máu', 'Tiết mồ hôi'], 0, 'Cơ vân bám xương, vận động có ý thức.'),
    Q('Cơ tim là loại?', ['Cơ vân', 'Cơ trơn', 'Cơ tim (riêng)', 'Mô liên kết'], 2, 'Cơ tim có cấu tạo và hoạt động đặc biệt.'),
    Q('Cơ trơn có ở?', ['Bóng đái, dạ dày, ruột, mạch máu', 'Tay, chân', 'Mắt', 'Móng tay'], 0, 'Cơ trơn ở cơ quan nội tạng.'),
    Q('Cơ làm việc tốt khi?', ['Lao động vừa sức, nghỉ ngơi hợp lí', 'Làm việc liên tục', 'Không vận động', 'Ăn nhiều'], 0, 'Cân đối làm việc – nghỉ ngơi.'),
    Q('Mỏi cơ do?', ['Lượng oxi cung cấp không đủ, sinh axit lactic', 'Thiếu nước', 'Thiếu vitamin', 'Quá nhiều canxi'], 0, 'Tích tụ axit lactic gây mỏi.'),
    Q('Để cơ phát triển, cần?', ['Tập thể dục thường xuyên, dinh dưỡng đủ', 'Ăn ít', 'Nghỉ ngơi suốt ngày', 'Không tập'], 0, 'Vận động + dinh dưỡng.'),
  ]),

  M(21, 'Hệ tuần hoàn — Tim và mạch máu', [
    Q('Tim người có mấy ngăn?', ['2', '3', '4', '5'], 2, '4 ngăn: 2 tâm nhĩ + 2 tâm thất.'),
    Q('Máu trong cơ thể được vận chuyển nhờ?', ['Tim co bóp đẩy máu vào mạch', 'Phổi', 'Ruột', 'Cơ bắp'], 0, 'Tim là máy bơm.'),
    Q('Ba loại mạch máu chính?', ['Động mạch, tĩnh mạch, mao mạch', 'Cơ, gân, dây chằng', 'Phổi, gan, thận', 'Cảm giác, vận động'], 0, 'Động, tĩnh, mao mạch.'),
    Q('Động mạch dẫn máu?', ['Đi ra khỏi tim', 'Về tim', 'Trong phổi', 'Trong gan'], 0, 'Động mạch ra khỏi tim; tĩnh mạch về tim.'),
    Q('Vòng tuần hoàn gồm?', ['Vòng nhỏ (phổi) và vòng lớn (cơ thể)', 'Chỉ 1 vòng', '3 vòng', '4 vòng'], 0, 'Tuần hoàn phổi + tuần hoàn cơ thể.'),
    Q('Máu giàu O₂ có màu?', ['Đỏ tươi', 'Đỏ thẫm', 'Xanh', 'Vàng'], 0, 'Máu giàu O₂ → đỏ tươi.'),
  ]),

  M(22, 'Hệ tuần hoàn — Nhóm máu, miễn dịch', [
    Q('Hệ nhóm máu ABO có mấy nhóm?', ['2', '3', '4 (A, B, AB, O)', '5'], 2, '4 nhóm máu chính.'),
    Q('Nhóm máu O cho được?', ['Tất cả nhóm khác', 'Chỉ nhóm O', 'Chỉ A', 'Chỉ B'], 0, 'O là "người cho phổ thông".'),
    Q('Nhóm máu AB nhận được?', ['Tất cả nhóm khác', 'Chỉ AB', 'Chỉ A', 'Chỉ O'], 0, 'AB là "người nhận phổ thông".'),
    Q('Bạch cầu có vai trò?', ['Tham gia miễn dịch, chống bệnh', 'Vận chuyển O₂', 'Đông máu', 'Tổng hợp protein'], 0, 'Phòng vệ cơ thể.'),
    Q('Hồng cầu có vai trò?', ['Vận chuyển O₂ và CO₂', 'Tiêu diệt vi khuẩn', 'Đông máu', 'Sinh nhiệt'], 0, 'Vận chuyển khí (qua hemoglobin).'),
    Q('Vaccine giúp?', ['Tạo kháng thể đặc hiệu chủ động', 'Diệt virus ngay tức khắc', 'Bổ sung dinh dưỡng', 'Hạ sốt'], 0, 'Tiêm vaccine: tạo miễn dịch chủ động.'),
  ]),

  M(23, 'Hệ hô hấp', [
    Q('Cơ quan trao đổi khí chính?', ['Tim', 'Phổi', 'Gan', 'Thận'], 1, 'Phổi.'),
    Q('Đường dẫn khí gồm?', ['Mũi, họng, thanh quản, khí quản, phế quản', 'Chỉ mũi', 'Chỉ phổi', 'Tim mạch'], 0, 'Hệ thống đường dẫn khí.'),
    Q('Trao đổi khí ở phổi xảy ra ở?', ['Phế nang', 'Phế quản', 'Khí quản', 'Mũi'], 0, 'Phế nang — đơn vị trao đổi khí.'),
    Q('Khí O₂ vào máu qua?', ['Khuếch tán qua thành phế nang và mao mạch', 'Hấp thu chủ động', 'Lọc qua thận', 'Tiêu hoá'], 0, 'Khuếch tán theo gradient áp suất riêng.'),
    Q('Hít vào do?', ['Cơ hoành co, lồng ngực mở rộng', 'Cơ hoành giãn', 'Phổi tự phồng', 'Tim đập'], 0, 'Cơ hoành + cơ liên sườn co.'),
    Q('Hút thuốc lá gây hại chính cho hệ?', ['Tiêu hoá', 'Hô hấp', 'Bài tiết', 'Vận động'], 1, 'Tổn thương phổi, gây ung thư.'),
  ]),

  M(24, 'Hệ tiêu hoá', [
    Q('Hệ tiêu hoá có chức năng?', ['Phân giải thức ăn thành chất dinh dưỡng hấp thu', 'Tuần hoàn máu', 'Trao đổi khí', 'Điều khiển cơ thể'], 0, 'Phân giải + hấp thu thức ăn.'),
    Q('Ống tiêu hoá gồm?', ['Miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn', 'Phổi → tim → mạch máu', 'Thận → bóng đái', 'Não → tuỷ → dây thần kinh'], 0, 'Ống tiêu hoá đầy đủ.'),
    Q('Tiêu hoá hoá học chính diễn ra ở?', ['Miệng và dạ dày, mạnh nhất ở ruột non', 'Hậu môn', 'Thực quản', 'Tuyến mồ hôi'], 0, 'Ruột non là nơi tiêu hoá hoàn toàn.'),
    Q('Enzyme amylase tiêu hoá?', ['Tinh bột', 'Protein', 'Lipid', 'Nước'], 0, 'Amylase phân giải tinh bột.'),
    Q('Hấp thu chất dinh dưỡng chủ yếu ở?', ['Ruột non (lông ruột)', 'Ruột già', 'Dạ dày', 'Thực quản'], 0, 'Lông ruột tăng diện tích hấp thu.'),
    Q('Bệnh dạ dày phổ biến do vi khuẩn?', ['H. pylori', 'E. coli', 'Lao', 'Cúm'], 0, 'Helicobacter pylori gây viêm loét.'),
  ]),

  M(25, 'Hệ bài tiết', [
    Q('Hệ bài tiết chính gồm?', ['Thận, niệu quản, bóng đái, niệu đạo', 'Phổi, gan', 'Tim, mạch máu', 'Tuyến mồ hôi, da'], 0, 'Cơ quan bài tiết chính.'),
    Q('Đơn vị chức năng của thận?', ['Nephron', 'Neuron', 'Phế nang', 'Lông ruột'], 0, 'Nephron — đơn vị lọc máu.'),
    Q('Sản phẩm bài tiết chính qua thận?', ['Nước tiểu (chứa urê, creatinin, muối thừa)', 'Mồ hôi', 'Khí CO₂', 'Phân'], 0, 'Nước tiểu.'),
    Q('Thận lọc bao nhiêu lít máu mỗi ngày?', ['1 L', '20 L', '180 L', '500 L'], 2, 'Khoảng 180 L máu/ngày (lọc nhiều lần).'),
    Q('Phòng bệnh thận: cần?', ['Uống đủ nước, ăn uống lành mạnh, không lạm dụng thuốc', 'Nhịn tiểu lâu', 'Uống ít nước', 'Ăn nhiều muối'], 0, 'Thói quen tốt cho thận.'),
    Q('Bài tiết qua da chủ yếu là?', ['Mồ hôi (nước + muối + urê ít)', 'Nước tiểu', 'Khí CO₂', 'Mật'], 0, 'Mồ hôi.'),
  ]),

  M(26, 'Hệ thần kinh — Cấu tạo', [
    Q('Hệ thần kinh trung ương gồm?', ['Não và tuỷ sống', 'Dây thần kinh', 'Cơ quan cảm giác', 'Hạch thần kinh'], 0, 'Não + tuỷ sống.'),
    Q('Đơn vị cấu tạo của hệ thần kinh?', ['Nephron', 'Neuron (nơron)', 'Tế bào hồng cầu', 'Phế nang'], 1, 'Nơron — tế bào thần kinh.'),
    Q('Não bộ điều khiển?', ['Tất cả hoạt động cao cấp: tư duy, cảm xúc, vận động có ý thức…', 'Chỉ phản xạ', 'Chỉ tiêu hoá', 'Chỉ tuần hoàn'], 0, 'Trung ương cao cấp.'),
    Q('Phản xạ là?', ['Phản ứng của cơ thể trả lời kích thích thông qua hệ thần kinh', 'Hành động có ý thức tuyệt đối', 'Sự tiêu hoá', 'Hô hấp tự động'], 0, 'Cơ chế cơ bản của hệ thần kinh.'),
    Q('Phản xạ có điều kiện được hình thành nhờ?', ['Học tập, luyện tập', 'Bẩm sinh', 'Không cần não', 'Ngẫu nhiên'], 0, 'Phản xạ có điều kiện — Pavlov.'),
    Q('Tuỷ sống nằm trong?', ['Ống xương sống', 'Lồng ngực', 'Sọ', 'Bụng'], 0, 'Bảo vệ trong cột sống.'),
  ]),

  M(27, 'Các giác quan — Mắt và tai', [
    Q('Cơ quan thị giác?', ['Mắt', 'Tai', 'Mũi', 'Lưỡi'], 0, 'Mắt — thị giác.'),
    Q('Phần cảm thụ ánh sáng ở mắt?', ['Võng mạc', 'Giác mạc', 'Thuỷ tinh thể', 'Đồng tử'], 0, 'Võng mạc chứa tế bào que và nón.'),
    Q('Cận thị do?', ['Trục mắt quá dài hoặc thuỷ tinh thể quá cong', 'Trục mắt ngắn', 'Mất võng mạc', 'Mắt sáng quá'], 0, 'Ảnh hội tụ trước võng mạc.'),
    Q('Cơ quan thính giác?', ['Mắt', 'Tai', 'Lưỡi', 'Da'], 1, 'Tai — thính giác.'),
    Q('Phần cảm thụ âm thanh trong tai?', ['Cơ quan Corti ở ốc tai', 'Vành tai', 'Màng nhĩ', 'Ống tai ngoài'], 0, 'Cơ quan Corti chuyển dao động thành xung thần kinh.'),
    Q('Để bảo vệ mắt và tai?', ['Đọc nơi đủ sáng, không nghe nhạc quá to', 'Đọc nơi tối', 'Nghe to thật to', 'Không cần chú ý'], 0, 'Phòng cận thị, suy giảm thính lực.'),
  ]),

  M(28, 'Các giác quan — Mũi, lưỡi, da', [
    Q('Cơ quan khứu giác?', ['Mũi', 'Lưỡi', 'Tai', 'Da'], 0, 'Mũi cảm nhận mùi.'),
    Q('Cơ quan vị giác?', ['Mũi', 'Lưỡi', 'Tai', 'Da'], 1, 'Lưỡi cảm nhận vị.'),
    Q('Năm vị cơ bản con người cảm nhận?', ['Ngọt, mặn, chua, đắng, umami', 'Chỉ ngọt và mặn', 'Cay và nóng', 'Thơm và thối'], 0, '5 vị cơ bản (umami: vị ngọt thịt).'),
    Q('Cảm giác cay thực chất là?', ['Vị', 'Đau/nóng do hợp chất capsaicin kích thích thụ thể nhiệt – đau', 'Mùi', 'Âm thanh'], 1, 'Cay không phải vị, là cảm giác nóng/đau.'),
    Q('Da là cơ quan xúc giác có?', ['Thụ thể nhiệt, đau, áp lực, rung', 'Chỉ thụ thể nhiệt', 'Không có thụ thể', 'Chỉ thụ thể đau'], 0, 'Da chứa nhiều loại thụ thể.'),
    Q('Để bảo vệ da?', ['Vệ sinh, chống nắng, giữ ẩm, tránh hoá chất mạnh', 'Phơi nắng nhiều', 'Tránh tắm', 'Bôi hoá chất tuỳ tiện'], 0, 'Chăm sóc và bảo vệ da.'),
  ]),

  M(29, 'Hệ nội tiết', [
    Q('Tuyến nội tiết khác tuyến ngoại tiết ở chỗ?', ['Tiết sản phẩm vào máu (không qua ống dẫn)', 'Tiết qua ống dẫn', 'Không tiết gì', 'Chỉ ở da'], 0, 'Hormone tiết vào máu trực tiếp.'),
    Q('Tuyến yên (pituitary) có vai trò?', ['Tuyến chỉ huy nhiều tuyến nội tiết khác', 'Chỉ điều hoà huyết áp', 'Tiết hormone tiêu hoá', 'Sản xuất tế bào máu'], 0, 'Tuyến yên là "tuyến chỉ huy".'),
    Q('Tuyến giáp tiết hormone?', ['Thyroxine (T3, T4)', 'Insulin', 'Adrenaline', 'Estrogen'], 0, 'Thyroxine điều hoà chuyển hoá.'),
    Q('Insulin do tuyến nào tiết?', ['Tụy', 'Giáp', 'Thượng thận', 'Yên'], 0, 'Tế bào β đảo tuỵ.'),
    Q('Insulin giúp?', ['Hạ đường huyết', 'Tăng đường huyết', 'Tăng huyết áp', 'Giảm canxi'], 0, 'Giảm glucose máu.'),
    Q('Bệnh đái tháo đường liên quan tới?', ['Insulin', 'Adrenaline', 'Estrogen', 'Thyroxine'], 0, 'Thiếu insulin hoặc kháng insulin.'),
  ]),

  M(30, 'Hệ sinh dục — Sinh sản người', [
    Q('Cơ quan sinh dục nam chính tạo tinh trùng?', ['Tinh hoàn', 'Buồng trứng', 'Bóng đái', 'Tử cung'], 0, 'Tinh hoàn.'),
    Q('Cơ quan sinh dục nữ chính tạo trứng?', ['Tinh hoàn', 'Buồng trứng', 'Tử cung', 'Bóng đái'], 1, 'Buồng trứng.'),
    Q('Thụ tinh xảy ra ở?', ['Tử cung', 'Vòi trứng (ống dẫn trứng)', 'Buồng trứng', 'Âm đạo'], 1, 'Vòi trứng — nơi tinh trùng gặp trứng.'),
    Q('Phôi làm tổ và phát triển ở?', ['Tử cung', 'Buồng trứng', 'Âm đạo', 'Vòi trứng'], 0, 'Tử cung.'),
    Q('Tuổi dậy thì nữ trung bình?', ['8–13 tuổi', '15–20 tuổi', '20–25 tuổi', 'Tuỳ rất nhiều'], 0, 'Khoảng 8–13 tuổi (sớm hơn nam).'),
    Q('Để bảo vệ sức khoẻ sinh sản tuổi vị thành niên?', ['Hiểu biết đúng, sống lành mạnh, vệ sinh cá nhân', 'Bỏ qua kiến thức', 'Không cần học', 'Tuỳ tiện'], 0, 'Giáo dục sức khoẻ sinh sản là cần thiết.'),
  ]),

  M(31, 'Cơ thể người — Bệnh và phòng bệnh', [
    Q('Tác nhân gây bệnh truyền nhiễm phổ biến?', ['Vi khuẩn, virus, kí sinh trùng, nấm', 'Đá', 'Kim loại', 'Vitamin'], 0, '4 nhóm tác nhân chính.'),
    Q('Phòng bệnh tốt nhất là?', ['Tiêm chủng, ăn uống sạch, giữ vệ sinh, tập thể dục', 'Uống thuốc suốt ngày', 'Tránh ra ngoài', 'Không cần làm gì'], 0, 'Phòng bệnh chủ động.'),
    Q('Bệnh HIV/AIDS lây qua?', ['Máu, quan hệ tình dục không an toàn, mẹ sang con', 'Không khí', 'Bắt tay', 'Ăn chung'], 0, '3 con đường chính.'),
    Q('Để bảo vệ sức khoẻ tim mạch?', ['Ăn ít muối, ít mỡ, không hút thuốc, tập thể dục', 'Ăn nhiều mỡ', 'Hút thuốc', 'Không vận động'], 0, 'Lối sống lành mạnh.'),
    Q('Vệ sinh răng miệng nên?', ['Đánh răng 2 lần/ngày sau ăn', 'Không đánh răng', 'Chỉ đánh 1 lần/tuần', 'Đánh răng trước ăn duy nhất'], 0, '2 lần/ngày + sau ăn.'),
    Q('Stress kéo dài ảnh hưởng?', ['Toàn diện: thần kinh, tim mạch, tiêu hoá, miễn dịch', 'Không ảnh hưởng', 'Chỉ ảnh hưởng tâm trạng', 'Chỉ ảnh hưởng tóc'], 0, 'Stress ảnh hưởng nhiều hệ.'),
  ]),

  M(32, 'Ôn tập Hoá học', [
    Q('Cân bằng: Na + H₂O → NaOH + H₂?', ['Na + H₂O → NaOH + H₂', '2Na + 2H₂O → 2NaOH + H₂', '2Na + H₂O → 2NaOH + H₂', 'Na + 2H₂O → NaOH + H₂'], 1, '2Na + 2H₂O → 2NaOH + H₂↑.'),
    Q('NaCl + AgNO₃ → AgCl↓ + NaNO₃ thuộc loại?', ['Phản ứng trao đổi', 'Phản ứng thế', 'Phản ứng hoá hợp', 'Phản ứng phân huỷ'], 0, 'Trao đổi ion tạo kết tủa.'),
    Q('1 mol nước nặng?', ['16 g', '18 g', '20 g', '32 g'], 1, 'M(H₂O) = 18.'),
    Q('Dung dịch NaCl 10% trong 200 g có?', ['10 g NaCl', '20 g NaCl', '50 g NaCl', '100 g NaCl'], 1, '10%·200 = 20 g.'),
    Q('Đem 2 L dd HCl 0.5 M cần bao nhiêu mol HCl?', ['0.5', '1', '2', '4'], 1, '0.5·2 = 1 mol.'),
    Q('Axit + bazơ → ?', ['Muối + nước', 'Khí + nước', 'Muối + H₂', 'Không phản ứng'], 0, 'Phản ứng trung hoà.'),
  ]),

  M(33, 'Ôn tập Vật lý', [
    Q('Lực có đơn vị?', ['N', 'kg', 'm/s', 'J'], 0, 'Newton.'),
    Q('Trọng lượng vật 5 kg ≈ ?', ['5 N', '50 N', '0.5 N', '500 N'], 1, 'P ≈ m·10 = 50 N.'),
    Q('Áp suất tính bằng?', ['F·S', 'F/S', 'S/F', 'F + S'], 1, 'p = F/S.'),
    Q('Công A = ?', ['F·s', 'F/s', 'm·g', 'F·v'], 0, 'Công = F·s.'),
    Q('Để được lợi 2 lần về lực qua đòn bẩy, cánh tay đòn của lực kéo phải?', ['Lớn gấp 2 lần cánh tay vật', 'Bằng nhau', 'Nhỏ gấp 2 lần', 'Không liên quan'], 0, 'F₁/F₂ = OB/OA.'),
    Q('Định luật bảo toàn năng lượng phát biểu?', ['Năng lượng không tự sinh ra hay mất đi, chỉ chuyển hoá', 'Năng lượng luôn tăng', 'Năng lượng luôn giảm', 'Năng lượng không tồn tại'], 0, 'Định luật cơ bản của vật lí.'),
  ]),

  M(34, 'Ôn tập Sinh học cơ thể người', [
    Q('Tim người có?', ['2 ngăn', '3 ngăn', '4 ngăn', '5 ngăn'], 2, '4 ngăn.'),
    Q('Đơn vị chức năng của thận?', ['Nephron', 'Neuron', 'Phế nang', 'Tế bào hồng cầu'], 0, 'Nephron.'),
    Q('Cơ quan trao đổi khí chính?', ['Tim', 'Gan', 'Phổi', 'Ruột'], 2, 'Phổi.'),
    Q('Hấp thu chất dinh dưỡng chính ở?', ['Dạ dày', 'Ruột non', 'Ruột già', 'Thực quản'], 1, 'Ruột non (lông ruột).'),
    Q('Nhóm máu O cho được nhóm nào?', ['Tất cả nhóm', 'Chỉ O', 'Chỉ AB', 'Chỉ A và B'], 0, 'Cho phổ thông.'),
    Q('Cơ quan thị giác là?', ['Mắt', 'Tai', 'Mũi', 'Lưỡi'], 0, 'Mắt.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Phản ứng hoá học bảo toàn?', ['Khối lượng', 'Thể tích', 'Áp suất', 'Nhiệt độ'], 0, 'Bảo toàn khối lượng.'),
    Q('Khí CO₂ tan trong nước cho?', ['Axit yếu H₂CO₃', 'Bazơ NaOH', 'Muối', 'Kim loại'], 0, 'H₂CO₃ — axit cacbonic.'),
    Q('Đơn vị áp suất là?', ['N', 'Pa', 'J', 'W'], 1, 'Pascal.'),
    Q('Vật rơi tự do: thế năng chuyển thành?', ['Động năng', 'Điện năng', 'Hoá năng', 'Quang năng'], 0, 'Wt → Wđ.'),
    Q('Cơ thể người gồm khoảng bao nhiêu hệ cơ quan chính?', ['1', '4', '8–9', '20'], 2, 'Khoảng 8–9 hệ.'),
    Q('Tiêm vaccine tạo ra?', ['Miễn dịch chủ động', 'Bệnh', 'Dị ứng', 'Không tác dụng'], 0, 'Miễn dịch chủ động đặc hiệu.'),
  ]),
];

export const S8KHTN_SCENARIOS = indexBy(S8KHTN_WEEKS);
