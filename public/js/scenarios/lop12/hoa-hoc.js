// ============================================================
// Lớp 12 · HOÁ HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12HOA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12HOA', 'hoa-hoc', n, title, qs, opts);

export const H12HOA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Este — Cấu tạo + danh pháp', [
    Q('Công thức tổng quát của este đơn chức no, mạch hở?', ['CnH2n+1O2', 'CnH2n-2O2', 'CnH2nO2 (n ≥ 2)', 'CnH2n+2O2'], 2, 'Este no đơn chức mạch hở: CnH2nO2, n ≥ 2.'),
    Q('Este được tạo ra từ?', ['Ancol + acid carboxylic (este hoá)', 'Acid + base', 'Oxi hoá ancol', 'Aldehyd + alcohol'], 0, 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (xúc tác H₂SO₄ đặc).'),
    Q('Tên gọi của CH₃COOC₂H₅?', ['Etyl axetat', 'Etyl propionat', 'Metyl axetat', 'Vinyl axetat'], 0, 'Tên: gốc ancol (etyl) + gốc acid (axetat = CH₃COO).'),
    Q('Đồng phân của C₃H₆O₂ thuộc este là?', ['HCOOC₂H₅, CH₃COOCH₃', 'CH₃CH₂COOH, HCOOCH₃ (acid và este khác)', 'Chỉ CH₃COOCH₃', 'Chỉ HCOOC₂H₅'], 0, 'C₃H₆O₂ có 2 đồng phân este: HCOOC₂H₅ (etyl format) và CH₃COOCH₃ (metyl axetat).'),
    Q('Este nào có mùi chuối chín?', ['Vinyl axetat', 'Metyl format', 'Etyl axetat', 'Isoamyl axetat'], 3, 'Isoamyl axetat (CH₃COOCH₂CH₂CH(CH₃)₂) có mùi chuối chín.'),
    Q('Tính chất vật lí chung của este?', ['Tan tốt trong nước', 'Chìm trong nước', 'Không tan/ít tan trong nước, nhẹ hơn nước, mùi thơm', 'Không có mùi'], 2, 'Este: nhẹ hơn nước, ít tan, có mùi thơm (trái cây) đặc trưng.'),
  ]),

  M(2, 'Este — Phản ứng thuỷ phân + điều chế', [
    Q('Thuỷ phân este trong môi trường acid?', ['Không thuận nghịch', 'Tạo aldehyd', 'Tạo muối', 'Thuận nghịch, tạo lại ancol + acid'], 3, 'RCOOR\' + H₂O ⇌ RCOOH + R\'OH (H₂SO₄ xt).'),
    Q('Thuỷ phân este trong môi trường base (NaOH) gọi là?', ['Este hoá', 'Trùng hợp', 'Phản ứng xà phòng hoá', 'Oxi hoá'], 2, 'Xà phòng hoá: RCOOR\' + NaOH → RCOONa + R\'OH (một chiều, không thuận nghịch).'),
    Q('Thuỷ phân CH₃COOC₂H₅ trong NaOH dư tạo?', ['C₂H₅COONa + CH₃OH', 'CH₃COONa + C₂H₅ONa', 'CH₃COONa + C₂H₅OH', 'CH₃OH + C₂H₅COOH'], 2, 'CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH.'),
    Q('Khối lượng CH₃COOC₂H₅ cần để thuỷ phân thu được 8,2 g CH₃COONa?', ['4,4 g', '8,8 g', '13,2 g', '17,6 g'], 1, 'n(CH₃COONa) = 8,2/82 = 0,1 mol → n(este) = 0,1 → m = 0,1·88 = 8,8 g.'),
    Q('Khi thuỷ phân este X bằng NaOH thu được muối + ancol bậc 2. X là?', ['CH₃COOC₂H₅', 'CH₃COOCH(CH₃)₂', 'CH₃COOCH₃', 'HCOOC₂H₅'], 1, 'Ancol bậc 2 (isopropanol) → este là CH₃COOCH(CH₃)₂ (isopropyl axetat).'),
    Q('Phản ứng este hoá là phản ứng?', ['Thuận nghịch', 'Một chiều', 'Trùng hợp', 'Phân huỷ'], 0, 'Este hoá thuận nghịch - cần dùng H₂SO₄ đặc + đun nóng để tăng hiệu suất.'),
  ]),

  M(3, 'Lipid - chất béo - xà phòng', [
    Q('Chất béo là?', ['Protein', 'Acid carboxylic', 'Este của glycerol và acid béo', 'Polysaccharide'], 2, 'Chất béo (triglyceride) - este của glycerol C₃H₅(OH)₃ và 3 acid béo.'),
    Q('Acid béo no thường gặp?', ['Axit stearic C₁₇H₃₅COOH, axit palmitic C₁₅H₃₁COOH', 'Axit benzoic', 'Axit etanoic', 'Axit oleic, linoleic'], 0, 'Acid béo no: palmitic (C₁₅H₃₁COOH), stearic (C₁₇H₃₅COOH).'),
    Q('Acid béo không no?', ['Axit oleic, linoleic, linolenic', 'Axit palmitic', 'Axit axetic', 'Axit stearic'], 0, 'Acid béo không no: oleic (1 nối đôi), linoleic (2), linolenic (3).'),
    Q('Phản ứng xà phòng hoá chất béo tạo?', ['Glycerol + muối acid béo (xà phòng)', 'Acid + ancol', 'Polysaccharide', 'Aldehyd'], 0, '(RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃.'),
    Q('Xà phòng là?', ['Muối Na/K của acid béo', 'Acid béo', 'Este của glycerol và acid béo', 'Ancol đa chức (glycerol)'], 0, 'Xà phòng: muối Na/K (natri/kali) của acid béo (RCOONa).'),
    Q('Vì sao xà phòng giặt sạch quần áo?', ['Hấp thụ bẩn', 'Hoà tan dầu mỡ + cuốn theo nước (chất hoạt động bề mặt)', 'Đốt cháy bẩn', 'Phản ứng với vết bẩn'], 1, 'Phân tử xà phòng có đầu kị nước (gốc R) + đầu ưa nước (COO⁻) - hoà tan dầu mỡ vào nước.'),
  ]),

  M(4, 'Cacbohidrat — Glucose + Fructose', [
    Q('Công thức phân tử glucose?', ['(C₆H₁₀O₅)n', 'C₆H₁₂O₆', 'C₆H₆O₆', 'C₁₂H₂₂O₁₁'], 1, 'Glucose: C₆H₁₂O₆ (M = 180).'),
    Q('Glucose có cấu tạo?', ['Disaccharide', 'Polysaccharide', 'Aldehyd đơn chức không có nhóm -OH', 'Monosaccharide - mạch hở 5 OH + 1 CHO'], 3, 'Monosaccharide - mạch hở có 5 nhóm -OH và 1 -CHO (aldehyd).'),
    Q('Phản ứng tráng bạc của glucose chứng tỏ có nhóm?', ['-OH', '-CHO (anđehyd)', '-NH₂', '-COOH'], 1, '-CHO khử Ag⁺ trong [Ag(NH₃)₂]OH → Ag (tráng bạc).'),
    Q('Phản ứng glucose + Cu(OH)₂ ở nhiệt độ thường tạo?', ['Khí H₂ thoát ra do -OH phản ứng', 'Dung dịch xanh lam (do nhiều -OH liền kề)', 'Cu₂O đỏ', 'Kết tủa trắng'], 1, 'Glucose phản ứng Cu(OH)₂ ở thường → phức xanh lam (chứng tỏ nhiều -OH liền kề).'),
    Q('Glucose lên men tạo?', ['Ethanol + CO₂', 'Aldehyd', 'Methanol', 'Acid axetic'], 0, 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (men rượu, 30-35°C).'),
    Q('Fructose khác glucose ở?', ['Cấu hình OH', 'Có nhiều C', 'Có nhóm xeton (C=O) thay vì anđehyd', 'Là disaccharide'], 2, 'Fructose có nhóm xeton (-C(=O)-) thay vì anđehyd; trong môi trường base chuyển hoá sang glucose nên cũng tráng bạc.'),
  ]),

  M(5, 'Saccharose, tinh bột, cellulose', [
    Q('Saccharose có cấu tạo từ?', ['Galactose', 'Glucose + fructose', 'Glucose + glucose', 'Fructose + fructose'], 1, 'Saccharose (đường mía) = α-glucose + β-fructose.'),
    Q('Saccharose có phản ứng tráng bạc không?', ['Có, vì có nhóm -OH hemiacetal tự do', 'Không (vì không còn -CHO tự do)', 'Tuỳ điều kiện', 'Có nhưng yếu'], 1, 'Saccharose không tráng bạc vì cả 2 monome đã đóng vòng tại nhóm có C=O.'),
    Q('Thuỷ phân saccharose tạo?', ['Glucose + fructose', 'Maltose', 'Glucose + glucose', 'Cellulose'], 0, 'C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆ (glucose + fructose).'),
    Q('Tinh bột có cấu tạo từ?', ['Mắt xích β-glucose', 'Saccharose', 'Fructose', 'Mắt xích α-glucose'], 3, 'Tinh bột: (α-glucose)n - 2 thành phần: amylose (mạch thẳng) + amylopectin (phân nhánh).'),
    Q('Cellulose có cấu tạo từ?', ['Fructose', 'Mắt xích β-glucose - mạch thẳng', 'Maltose', 'Mắt xích α-glucose'], 1, 'Cellulose: (β-glucose)n mạch thẳng, không phân nhánh - thành phần chính thành tế bào thực vật.'),
    Q('Phản ứng nhận biết tinh bột?', ['HNO₃ tạo dung dịch màu vàng', 'AgNO₃/NH₃ cho kết tủa Ag (tráng bạc)', 'Iốt (I₂) tạo màu xanh tím', 'NaOH tạo dung dịch nâu đỏ'], 2, 'Tinh bột + I₂ → màu xanh tím đặc trưng (cấu trúc xoắn ốc).'),
  ]),

  M(6, 'Amin — Cấu tạo + tính bazơ', [
    Q('Amin là dẫn xuất của?', ['NH₃ (thay 1, 2, 3 H bằng gốc hydrocacbon)', 'Aldehyd', 'Ancol (thay H của -OH bằng gốc R)', 'Acid carboxylic (thay H của -COOH)'], 0, 'Amin: R-NH₂ (bậc 1), R-NH-R\' (bậc 2), R-N(R\')-R\'\' (bậc 3).'),
    Q('Bậc amin được xác định bởi?', ['Khối lượng phân tử', 'Số nguyên tử N', 'Số H trong NH₃ bị thay thế', 'Số C trong gốc'], 2, 'Bậc amin = số H trong NH₃ được thay bằng gốc (1, 2, 3).'),
    Q('CH₃-NH-CH₃ là amin?', ['Bậc 3 (cả 3 H của NH₃ đã bị thay)', 'Bậc 1 (chỉ 1 H của NH₃ bị thay)', 'Bậc 2', 'Không phải amin'], 2, 'Dimetylamin - 2 H của NH₃ bị thay → bậc 2.'),
    Q('Amin có tính chất hoá học chính?', ['Trung tính', 'Oxi hoá', 'Tính bazơ (nhận H⁺)', 'Tính acid'], 2, 'Cặp e tự do trên N → tính bazơ - phản ứng với acid → muối.'),
    Q('Sắp xếp tính bazơ tăng dần: NH₃, CH₃NH₂, C₆H₅NH₂?', ['NH₃ > CH₃NH₂ > C₆H₅NH₂', 'Tất cả bằng nhau', 'C₆H₅NH₂ > NH₃ > CH₃NH₂', 'CH₃NH₂ > NH₃ > C₆H₅NH₂'], 3, 'Tính bazơ: amin béo > NH₃ > anilin (vì nhân thơm hút e làm giảm tính bazơ).'),
    Q('Anilin C₆H₅NH₂ có phản ứng với?', ['NaOH (anilin là bazơ, không tác dụng base)', 'Na (mạnh)', 'Ag₂O/NH₃ (tráng bạc)', 'HCl tạo muối phenylammonium clorua'], 3, 'Anilin + HCl → C₆H₅NH₃Cl (kết tinh trắng).'),
  ]),

  M(7, 'Amino acid', [
    Q('Amino acid là?', ['Chỉ có NH₂', 'Là ester', 'Chỉ có COOH', 'Hợp chất có cả nhóm -NH₂ và -COOH trong phân tử'], 3, 'Amino acid: chứa đồng thời -NH₂ (amin) và -COOH (acid).'),
    Q('Công thức amino acid đơn giản nhất (glycine)?', ['H₂N-CH(NH₂)-COOH', 'H₂N-CH₂-COOH', 'HOOC-CH(NH₂)-COOH', 'CH₃-CH(NH₂)-COOH'], 1, 'Glycine: H₂N-CH₂-COOH (M = 75).'),
    Q('Tính chất nổi bật của amino acid?', ['Tính lưỡng tính (vừa acid vừa base)', 'Chỉ acid', 'Trung tính', 'Chỉ base'], 0, 'Lưỡng tính: -COOH (tính acid) + -NH₂ (tính base) → tồn tại dạng ion lưỡng cực.'),
    Q('Trong dung dịch nước, amino acid tồn tại chủ yếu dạng?', ['H₃N⁺-R-COO⁻ (ion lưỡng cực)', 'H₂N-R-COOH', 'H₃N⁺-R-COOH', 'H₂N-R-COO⁻'], 0, 'Trong nước: dạng ion lưỡng cực (zwitterion) - H₃N⁺-R-COO⁻.'),
    Q('pH đẳng điện (pI) là?', ['pH = 14', 'pH = 0', 'pH = 7 luôn', 'pH mà amino acid tồn tại chủ yếu dạng ion lưỡng cực, điện tích tổng = 0'], 3, 'pI - pH mà amino acid trung hoà điện - không di chuyển trong điện trường.'),
    Q('Alanine có công thức?', ['HOOC-CH(NH₂)-CH₂-COOH', 'H₂N-(CH₂)₄-CH(NH₂)-COOH', 'H₂N-CH₂-COOH', 'CH₃-CH(NH₂)-COOH'], 3, 'Alanine: CH₃-CH(NH₂)-COOH.'),
  ]),

  M(8, 'Peptide + protein', [
    Q('Peptide được tạo thành từ?', ['Glucose', 'Lipid liên kết với nhau qua nhóm ester', '1 amino acid', '2 hoặc nhiều amino acid liên kết qua liên kết peptide'], 3, 'Peptide: chuỗi amino acid liên kết qua liên kết peptide -CO-NH-.'),
    Q('Liên kết peptide là?', ['-O-', '-S-S-', '-CO-NH- (giữa -COOH của AA này và -NH₂ của AA kia)', '-O-O-'], 2, 'Liên kết peptide: -CO-NH- (loại nước giữa COOH và NH₂).'),
    Q('Protein là?', ['Lipid - este của glycerol và acid béo', '1 amino acid', 'Polypeptide phức tạp với phân tử khối rất lớn', 'Polysaccharide'], 2, 'Protein - polypeptide có M lớn (vài chục nghìn - hàng triệu).'),
    Q('Phản ứng nhận biết protein chứa nhiều liên kết peptide?', ['Iốt (I₂) tạo màu xanh tím', 'NaOH tạo dung dịch màu tím', 'Phản ứng biuret (với Cu(OH)₂ trong môi trường base → tím)', 'HCl tạo kết tủa trắng'], 2, 'Phản ứng biuret: protein + Cu(OH)₂/OH⁻ → màu tím (nhận biết liên kết peptide).'),
    Q('Thuỷ phân hoàn toàn protein cuối cùng tạo?', ['Glucose', 'Glycerol', 'Amino acid', 'Acid béo'], 2, 'Thuỷ phân hoàn toàn protein → các amino acid riêng lẻ.'),
    Q('Tính chất protein khi đun nóng/gặp acid mạnh?', ['Hoá thành đường', 'Không đổi', 'Bị đông tụ/biến tính', 'Tan thêm'], 2, 'Protein đông tụ/biến tính - mất hoạt tính sinh học (ví dụ luộc trứng).'),
  ]),

  M(9, 'Polime — Khái niệm + phương pháp điều chế', [
    Q('Polime là?', ['Acid có nhóm -COOH mạnh', 'Hợp chất có phân tử khối lớn do nhiều mắt xích lặp lại', 'Khí dễ bay hơi ở nhiệt độ thường', 'Hợp chất nhỏ'], 1, 'Polime: phân tử khối lớn (vài nghìn - hàng triệu), do n monome lặp lại.'),
    Q('Polietilen (PE) được điều chế từ?', ['Oxi hoá', 'Trùng hợp etilen CH₂=CH₂', 'Trùng ngưng acid', 'Lên men'], 1, 'PE: n CH₂=CH₂ → (-CH₂-CH₂-)n (trùng hợp).'),
    Q('Phương pháp trùng hợp dùng cho monome có?', ['Nhóm -OH', 'Halogen', 'Liên kết bội (đôi/ba)', 'Nhóm -COOH'], 2, 'Trùng hợp: cần monome có C=C, C≡C (nối đôi/ba mở ra để nối nhau).'),
    Q('Phương pháp trùng ngưng dùng cho?', ['Monome có liên kết bội', 'Đơn chất', 'Monome có ≥ 2 nhóm chức (-OH, -COOH, -NH₂)', 'Khí không màu, không mùi'], 2, 'Trùng ngưng: monome có ≥ 2 nhóm chức tách H₂O (hoặc phân tử nhỏ) khi nối.'),
    Q('Cao su buna được điều chế từ?', ['Stiren', 'Buta-1,3-đien (trùng hợp)', 'Etilen', 'Acid axetic'], 1, 'Buna: trùng hợp CH₂=CH-CH=CH₂ → (-CH₂-CH=CH-CH₂-)n.'),
    Q('Polime nào sau đây được điều chế bằng trùng ngưng?', ['Nilon-6,6', 'Cao su buna', 'PVC (poli(vinyl clorua))', 'PE (polietilen)'], 0, 'Nilon-6,6: trùng ngưng hexamethylenediamine + adipic acid → tách H₂O.'),
  ]),

  M(10, 'Vật liệu polime — Chất dẻo, tơ, cao su', [
    Q('PVC là polime nào?', ['Polistiren', 'Poli(vinyl clorua) - từ CH₂=CHCl', 'PMMA (poli(metyl metacrylat)) - thuỷ tinh hữu cơ', 'Polietilen'], 1, 'PVC: (-CH₂-CHCl-)n - dùng làm ống nước, áo mưa, vỏ dây điện.'),
    Q('Polistiren (PS) là polime của?', ['CH₂=CH-C₆H₅ (stiren)', 'CH₂=CH₂', 'CH₂=CHCl', 'CH₂=CHCN'], 0, 'PS: trùng hợp stiren CH₂=CH-C₆H₅.'),
    Q('Tơ tằm thuộc loại?', ['Tơ nilon', 'Tơ tổng hợp', 'Tơ bán tổng hợp', 'Tơ thiên nhiên'], 3, 'Tơ tằm - tơ thiên nhiên (protein từ tằm).'),
    Q('Tơ nilon-6,6 thuộc loại?', ['Tơ thiên nhiên', 'Tơ tổng hợp poliamide', 'Tơ axetat', 'Tơ visco'], 1, 'Nilon-6,6: tơ tổng hợp loại poliamide (có liên kết -CO-NH-).'),
    Q('Tơ visco thuộc loại?', ['Bán tổng hợp (xử lí cellulose)', 'Tổng hợp', 'Thiên nhiên', 'Khoáng'], 0, 'Tơ visco: chế biến từ cellulose (gỗ, bông) → bán tổng hợp.'),
    Q('Cao su thiên nhiên là polime của?', ['Etilen', 'Stiren', 'Buta-1,3-đien', 'Isoprene (2-metyl buta-1,3-đien)'], 3, 'Cao su thiên nhiên: poliisoprene cis-(-CH₂-C(CH₃)=CH-CH₂-)n.'),
  ]),

  M(11, 'Đại cương kim loại — Cấu hình + tính chất', [
    Q('Đặc điểm cấu hình electron lớp ngoài cùng của kim loại?', ['4 e luôn', '1-3 e', '5-7 e', '8 e'], 1, 'Đa số kim loại có 1-3 e lớp ngoài cùng → dễ nhường e thành ion dương.'),
    Q('Tính chất hoá học cơ bản của kim loại?', ['Tính trung tính', 'Tính oxi hoá', 'Tính axit', 'Tính khử (dễ nhường e)'], 3, 'M → M^n+ + n·e (tính khử).'),
    Q('Trong dãy điện hoá, kim loại càng đứng trước thì?', ['Tính khử càng yếu', 'Càng kém phản ứng', 'Tính oxi hoá càng mạnh', 'Tính khử càng mạnh'], 3, 'Càng đứng trước → tính khử càng mạnh (M dễ nhường e); ion M^n+ càng yếu (khó nhận e).'),
    Q('Sắp xếp tính khử tăng dần: Fe, Cu, Zn, Ag?', ['Ag < Cu < Fe < Zn', 'Zn < Fe < Cu < Ag', 'Fe < Zn < Cu < Ag', 'Cu < Ag < Fe < Zn'], 0, 'Theo dãy điện hoá: Zn > Fe > Cu > Ag → tính khử Ag < Cu < Fe < Zn.'),
    Q('Phản ứng Fe + CuSO₄ tạo?', ['FeSO₄ + Cu', 'Fe₂(SO₄)₃ + Cu', 'Cu₂SO₄', 'Không phản ứng'], 0, 'Fe + CuSO₄ → FeSO₄ + Cu↓ (Fe khử Cu²⁺; Fe đứng trước Cu).'),
    Q('Vì sao kim loại có ánh kim?', ['Do oxi hoá', 'Do nhiệt độ cao', 'Do electron tự do phản xạ ánh sáng', 'Do hợp kim'], 2, 'E tự do trong mạng kim loại phản xạ ánh sáng → ánh kim đặc trưng.'),
  ]),

  M(12, 'Ăn mòn kim loại + điện phân', [
    Q('Ăn mòn kim loại là?', ['Kim loại bị oxi hoá bởi môi trường', 'Tạo hợp kim', 'Đóng rắn', 'Hoà tan'], 0, 'Ăn mòn: M → M^n+ (bị oxi hoá bởi O₂, acid, nước…).'),
    Q('Ăn mòn điện hoá khác ăn mòn hoá học ở?', ['Tạo dòng điện', 'Không tạo dòng điện, chỉ có toả nhiệt', 'Cùng giống nhau', 'Không tạo dòng'], 0, 'Ăn mòn điện hoá: tạo cặp pin, có dòng e di chuyển (xảy ra nhanh, nguy hiểm hơn).'),
    Q('Phương pháp chống ăn mòn?', ['Không có cách', 'Tiếp xúc trực tiếp với muối', 'Để ngoài trời', 'Sơn, mạ, hợp kim, anode hi sinh'], 3, '4 phương pháp: phủ bề mặt (sơn, mạ), tạo hợp kim, dùng kim loại bảo vệ (anode hi sinh - Zn cho Fe).'),
    Q('Điện phân nóng chảy NaCl tạo?', ['NaOH và H₂ (như điện phân dung dịch)', 'Na₂O ở cathode và O₂ ở anode', 'Na ở cathode + Cl₂ ở anode', 'NaClO và H₂ (như điện phân không màng ngăn)'], 2, 'NaCl nóng chảy: cathode (-) Na⁺ + e → Na; anode (+) 2Cl⁻ → Cl₂ + 2e.'),
    Q('Điện phân dung dịch CuSO₄ với điện cực trơ?', ['Cathode: Cu; anode: O₂', 'Cathode: H₂; anode: Cl₂', 'Cathode: Cu; anode: Cl₂', 'Cathode: Na; anode: O₂'], 0, 'Cathode (-): Cu²⁺ + 2e → Cu; anode (+): 2H₂O → O₂ + 4H⁺ + 4e.'),
    Q('Khối lượng kim loại điện phân được tính theo định luật?', ['Faraday: m = (A·I·t)/(n·F)', 'Henry: độ tan khí tỉ lệ với áp suất', 'Boyle: P·V = const ở T cố định', 'Hess: ΔH chỉ phụ thuộc đầu - cuối'], 0, 'm = (A·I·t)/(n·F); F = 96500 C/mol, A khối lượng mol, n hoá trị, I cường độ, t thời gian.'),
  ]),

  M(13, 'Điều chế kim loại', [
    Q('3 phương pháp điều chế kim loại?', ['Thuỷ luyện - nhiệt luyện - điện phân', 'Trộn - đun', 'Lọc - rửa', 'Đốt - hoà tan'], 0, '3 phương pháp: thuỷ luyện (dùng dung dịch), nhiệt luyện (với chất khử ở t° cao), điện phân.'),
    Q('Phương pháp thuỷ luyện áp dụng cho kim loại nào?', ['Kim loại kiềm thổ', 'Kim loại kiềm', 'Kim loại hoạt động yếu (sau Mg)', 'Bất kì'], 2, 'Thuỷ luyện: dùng cho kim loại yếu - lấy ra khỏi dung dịch muối bằng kim loại mạnh hơn.'),
    Q('Phương pháp nhiệt luyện điều chế?', ['Kim loại kiềm', 'Kim loại trung bình (Zn, Fe, Cu…) từ oxide', 'Bất kì kim loại', 'Phi kim'], 1, 'Nhiệt luyện: oxide + C/CO/H₂/Al ở t° cao → kim loại (vd Fe₂O₃ + 3CO → 2Fe + 3CO₂).'),
    Q('Phương pháp điện phân nóng chảy dùng cho?', ['Zn (dùng nhiệt luyện ZnO + C)', 'Cu, Ag', 'Fe (dùng nhiệt luyện trong lò cao)', 'Kim loại kiềm, kiềm thổ, Al'], 3, 'Điện phân nóng chảy: cho kim loại hoạt động mạnh (Na, K, Ca, Mg, Al) - không thể dùng nhiệt luyện.'),
    Q('Sản xuất Al bằng?', ['Khử bằng CO', 'Thuỷ luyện', 'Điện phân Al₂O₃ nóng chảy (trong cryolit)', 'Khử bằng H₂'], 2, 'Al = điện phân Al₂O₃ nóng chảy + Na₃AlF₆ (cryolite) làm chất chảy.'),
    Q('Sản xuất gang trong lò cao dùng chất khử?', ['Al (nhiệt nhôm)', 'Mg dạng bột mịn', 'H₂ ở nhiệt độ cao', 'CO (từ than)'], 3, 'Gang: Fe₂O₃ + 3CO → 2Fe + 3CO₂ (CO sinh ra từ than cốc trong lò cao).'),
  ]),

  M(14, 'Kim loại kiềm - Na, K', [
    Q('Cấu hình e lớp ngoài cùng của kim loại kiềm?', ['ns²np¹', 'ns² (cấu hình của nhóm IIA - kiềm thổ)', 'ns²np⁵', 'ns¹'], 3, 'Nhóm IA: 1 electron ở lớp ngoài cùng (ns¹).'),
    Q('Tính chất hoá học chung của kim loại kiềm?', ['Tính acid', 'Tính oxi hoá mạnh', 'Trung tính', 'Tính khử rất mạnh'], 3, 'M → M⁺ + e (tính khử rất mạnh, mạnh nhất nhóm kim loại).'),
    Q('Na phản ứng với H₂O tạo?', ['NaOH + H₂', 'Na₂O + H₂O', 'NaH (natri hydride) + O₂', 'Không phản ứng'], 0, '2Na + 2H₂O → 2NaOH + H₂↑.'),
    Q('Vì sao bảo quản Na trong dầu hoả?', ['Trang trí', 'Làm Na nóng chảy', 'Tăng độ cứng', 'Tránh phản ứng với O₂, H₂O trong không khí'], 3, 'Na rất hoạt động → tự bốc cháy với O₂, H₂O không khí → bảo quản trong dầu hoả.'),
    Q('NaOH (xút) có ứng dụng?', ['Chỉ làm thuốc', 'Sản xuất xà phòng + giấy + tơ + xử lí dầu mỡ', 'Chỉ ăn được', 'Chỉ trang trí'], 1, 'NaOH (xút): công nghiệp xà phòng, giấy, dệt, hoá chất, xử lí dầu.'),
    Q('Sản xuất NaOH bằng?', ['Điện phân dung dịch NaCl có màng ngăn', 'Cho Na vào nước thường xuyên', 'Khử Na₂O', 'Đốt Na'], 0, 'Điện phân dung dịch NaCl có màng ngăn: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂.'),
  ]),

  M(15, 'Kim loại kiềm thổ - Ca, Mg', [
    Q('Cấu hình e lớp ngoài cùng kim loại kiềm thổ?', ['ns²np²', 'ns¹ (cấu hình của nhóm IA - kiềm)', 'ns²', 'ns²np¹'], 2, 'Nhóm IIA: ns².'),
    Q('Ca phản ứng với H₂O?', ['Không phản ứng', 'Tạo CaO + H₂', 'Tạo CaH₂', 'Tạo Ca(OH)₂ + H₂'], 3, 'Ca + 2H₂O → Ca(OH)₂ + H₂↑ (chậm hơn Na nhưng vẫn dễ).'),
    Q('Nước cứng là?', ['Nước chứa nhiều Ca²⁺ và Mg²⁺', 'Nước có acid', 'Nước chứa nhiều Na⁺', 'Nước có base'], 0, 'Nước cứng: chứa nhiều ion Ca²⁺, Mg²⁺ - gây cặn ấm, làm giảm hiệu quả xà phòng.'),
    Q('Cách làm mềm nước cứng tạm thời (chứa HCO₃⁻)?', ['Đun sôi', 'Lọc cát', 'Đông lạnh', 'Cho NaCl'], 0, 'Đun sôi: Ca(HCO₃)₂ → CaCO₃↓ + CO₂ + H₂O → loại Ca²⁺.'),
    Q('Vôi sống (CaO) tác dụng với nước?', ['Không phản ứng', 'Tạo Ca(OH)₂ - toả nhiệt mạnh', 'Tạo H₂', 'Tạo CaC₂'], 1, 'CaO + H₂O → Ca(OH)₂ (toả nhiệt mạnh - "vôi tôi").'),
    Q('CaCO₃ (đá vôi) dùng để sản xuất?', ['Aluminium', 'Thuỷ tinh', 'Acid H₂CO₃ (nhầm với CO₂ tạo acid)', 'Xi măng, vôi sống'], 3, 'CaCO₃: nguyên liệu chính sản xuất xi măng + nung tạo CaO (vôi sống).'),
  ]),

  M(16, 'Nhôm (Al) và hợp chất', [
    Q('Vị trí Al trong bảng tuần hoàn?', ['Nhóm IA', 'Nhóm IIIA, chu kì 3', 'Nhóm IIA', 'Nhóm IVA'], 1, 'Al: Z=13, nhóm IIIA, chu kì 3; cấu hình [Ne]3s²3p¹.'),
    Q('Al là kim loại lưỡng tính - vừa phản ứng acid vừa base?', ['Đúng - Al phản ứng cả HCl và NaOH', 'Chỉ acid', 'Sai - Al chỉ phản ứng với acid mạnh', 'Chỉ base'], 0, 'Al(OH)₃ lưỡng tính: phản ứng với cả acid và base mạnh.'),
    Q('Al + NaOH tạo?', ['Al₂O₃ và H₂O (như nung Al(OH)₃)', 'AlCl₃ và NaH', 'NaAlO₂ + H₂', 'Al(OH)₃'], 2, '2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑.'),
    Q('Vì sao Al bền trong không khí?', ['Có dầu', 'Lớp oxide Al₂O₃ mỏng đặc kín bảo vệ', 'Không phản ứng', 'Tự lành'], 1, 'Lớp Al₂O₃ mỏng (~10⁻⁵ cm) đặc kín, bảo vệ Al khỏi tiếp tục bị oxi hoá.'),
    Q('Phản ứng nhiệt nhôm: Al + Fe₂O₃ → ?', ['Al₂Fe + O₂', 'AlO₂ + Fe', 'Không phản ứng', 'Al₂O₃ + Fe + năng lượng lớn'], 3, '2Al + Fe₂O₃ → Al₂O₃ + 2Fe (toả nhiệt mạnh - hàn đường ray).'),
    Q('Phèn chua công thức?', ['AlCl₃ khan', 'Al₂(SO₄)₃', 'Al(OH)₃', 'KAl(SO₄)₂·12H₂O'], 3, 'Phèn chua: KAl(SO₄)₂·12H₂O - dùng làm sạch nước.'),
  ]),

  M(17, 'Hợp chất của nhôm', [
    Q('Al₂O₃ có tính?', ['Tính base (chỉ tan trong acid)', 'Tính acid (chỉ tan trong base)', 'Trung tính', 'Lưỡng tính (tan trong cả HCl và NaOH)'], 3, 'Al₂O₃: lưỡng tính - tan trong HCl và NaOH.'),
    Q('Al(OH)₃ là?', ['Base mạnh', 'Acid mạnh', 'Trung tính', 'Hydroxide lưỡng tính'], 3, 'Al(OH)₃ tan cả trong acid và base mạnh.'),
    Q('Phản ứng Al(OH)₃ + NaOH?', ['NaAlO₂ + 2H₂O', 'Al + Na₂O', 'Không phản ứng', 'Al₂O₃ và H₂ (khử kim loại)'], 0, 'Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (thể hiện tính acid).'),
    Q('Quặng bauxite chứa chủ yếu?', ['AlCl₃ tinh thể', 'Al₂O₃·nH₂O', 'Al₂(SO₄)₃', 'Al(OH)₃'], 1, 'Bauxite: Al₂O₃·nH₂O - nguyên liệu sản xuất nhôm.'),
    Q('Ứng dụng của nhôm?', ['Không có ứng dụng', 'Chỉ trang trí', 'Chỉ làm thuốc', 'Vật liệu xây dựng, đồ gia dụng, dây điện, máy bay'], 3, 'Nhôm: nhẹ, dẫn điện tốt, không gỉ → đa năng trong xây dựng, công nghiệp.'),
    Q('Để bảo vệ Al không cần?', ['Sơn dầu phủ ngoài', 'Sơn xanh', 'Mạ điện', 'Lớp Al₂O₃ tự nhiên đã bảo vệ tốt'], 3, 'Al tự tạo lớp Al₂O₃ bền - thường không cần bảo vệ thêm.'),
  ]),

  M(18, 'Ôn tập HK1 — kiểm tra giữa kì', [
    Q('Este nào có mùi dứa?', ['Etyl format', 'Vinyl axetat', 'Etyl butirat', 'Isoamyl axetat'], 2, 'Etyl butirat - mùi dứa; isoamyl axetat - mùi chuối; etyl format - mùi đào.'),
    Q('Phản ứng thuỷ phân este trong NaOH gọi là?', ['Xà phòng hoá', 'Trùng hợp', 'Cộng (cộng H₂O vào este)', 'Este hoá'], 0, 'Xà phòng hoá - tên gọi vì áp dụng cho chất béo tạo xà phòng.'),
    Q('Glucose lên men tạo bao nhiêu mol ethanol từ 1 mol glucose?', ['1', '4', '2', '3'], 2, 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.'),
    Q('Amin nào có tính bazơ mạnh nhất: NH₃, CH₃NH₂, C₆H₅NH₂?', ['CH₃NH₂', 'NH₃ (mạnh hơn cả amin béo)', 'C₆H₅NH₂', 'Bằng nhau'], 0, 'Amin béo > NH₃ > anilin (do nhân thơm hút e).'),
    Q('Đặc điểm cấu tạo amino acid?', ['Chỉ có COOH', 'Không có gì', 'Có cả NH₂ và COOH', 'Chỉ có NH₂'], 2, 'Có đồng thời cả 2 nhóm chức.'),
    Q('Sản xuất Al thực hiện bằng?', ['Tự phát', 'Thuỷ luyện', 'Nhiệt luyện', 'Điện phân Al₂O₃ nóng chảy'], 3, 'Điện phân Al₂O₃ nóng chảy với Na₃AlF₆ (cryolite).'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Sắt (Fe) - tính chất + hợp chất', [
    Q('Cấu hình e của Fe?', ['[Ar]4s²3d⁶', '[Ne]3s²3p⁶', '[Ar]3d⁶4s²', '[Ar]3d⁷4s¹'], 2, 'Fe (Z=26): [Ar]3d⁶4s² → có thể nhường 2e tạo Fe²⁺ hoặc 3e tạo Fe³⁺.'),
    Q('Fe tác dụng với HCl loãng tạo?', ['FeCl₃ + H₂', 'FeCl₂ + Cl₂', 'Không phản ứng', 'FeCl₂ + H₂'], 3, 'Fe + 2HCl → FeCl₂ + H₂ (HCl loãng tạo Fe²⁺).'),
    Q('Fe tác dụng với HNO₃ đặc, nóng?', ['Tạo Fe(NO₃)₂', 'Tạo FeCl₂', 'Tạo Fe(NO₃)₃ + NO₂ + H₂O', 'Không phản ứng'], 2, 'Fe + 6HNO₃ đặc nóng → Fe(NO₃)₃ + 3NO₂ + 3H₂O (Fe³⁺).'),
    Q('Vì sao Fe bị thụ động hoá với HNO₃ đặc, nguội?', ['Fe cháy mạnh trong HNO₃ đặc nguội', 'Bay hơi', 'Tạo lớp oxide bảo vệ → ngăn phản ứng tiếp', 'Hoà tan tốt'], 2, 'Lớp Fe₂O₃ tạo ra rất đặc kín → ngăn phản ứng - "thụ động hoá".'),
    Q('Hợp chất nào của Fe có màu nâu đỏ đặc trưng?', ['FeO (màu đen)', 'FeCl₂ (lục nhạt)', 'FeSO₄ (lục nhạt khi ngậm nước)', 'Fe(OH)₃, Fe₂O₃'], 3, 'Fe(OH)₃ - nâu đỏ; Fe₂O₃ - đỏ; FeO - đen; FeCl₂ - lục nhạt.'),
    Q('Tính chất hoá học đặc trưng của hợp chất Fe²⁺?', ['Trung tính', 'Chỉ tính oxi hoá', 'Vừa khử (Fe²⁺ → Fe³⁺) vừa oxi hoá (Fe²⁺ → Fe)', 'Chỉ acid'], 2, 'Fe²⁺ vừa có thể bị oxi hoá lên Fe³⁺, vừa có thể bị khử về Fe.'),
  ]),

  M(20, 'Sắt - sản xuất gang, thép', [
    Q('Gang là?', ['Hợp kim Fe-C với C > 2%', 'Hợp kim Fe-Al', 'Hợp kim Fe-C với C 0,01-2%', 'Fe nguyên chất'], 0, 'Gang: Fe + C (2-5%) + tạp - giòn, dùng đúc; thép: Fe + C (0,01-2%) - dẻo, bền.'),
    Q('Thép là?', ['Fe nguyên chất', 'Hợp kim Fe-Al (duralumin)', 'Hợp kim Fe-C với C 0,01-2%', 'Hợp kim Fe-C với C > 2%'], 2, 'Thép có hàm lượng C thấp hơn gang → dẻo, cứng, bền.'),
    Q('Nguyên liệu sản xuất gang?', ['Quặng sắt (Fe₂O₃, Fe₃O₄) + than cốc + đá vôi', 'Sắt phế liệu', 'Aluminium', 'Đồng từ quặng pyrit + than'], 0, 'Lò cao: quặng sắt + than cốc + đá vôi (chất chảy) → gang lỏng.'),
    Q('Phản ứng chính trong lò cao?', ['Fe + O₂ → Fe₂O₃', 'CaCO₃ → CaO', 'Fe + H₂O → FeO + H₂', 'Fe₂O₃ + 3CO → 2Fe + 3CO₂'], 3, 'CO khử Fe₂O₃ thành Fe lỏng - phản ứng chính.'),
    Q('Quặng nào giàu Fe nhất?', ['Hematit (Fe₂O₃) 70%', 'Xiderit (FeCO₃) 48%', 'Magnetit (Fe₃O₄) 72%', 'Pirit (FeS₂) 47%'], 2, 'Magnetit Fe₃O₄ giàu Fe nhất (~72%); hematit ~70%.'),
    Q('Sản xuất thép từ gang trong lò Bessemer/lò điện bằng cách?', ['Thêm C', 'Hoà tan', 'Đông lạnh', 'Thổi O₂ vào gang lỏng để loại bớt C'], 3, 'Thổi O₂ → oxi hoá bớt C, Si, S, P → giảm C → tạo thép.'),
  ]),

  M(21, 'Crom (Cr) và hợp chất', [
    Q('Cấu hình e của Cr?', ['[Ar]3d⁶', '[Ar]3d⁵4s²', '[Ar]3d⁴4s²', '[Ar]3d⁵4s¹ (cấu hình bất thường)'], 3, 'Cr (Z=24): [Ar]3d⁵4s¹ - cấu hình bán bão hoà bền hơn.'),
    Q('Hợp chất Cr(VI) như K₂Cr₂O₇ có?', ['Tính base', 'Tính khử mạnh', 'Tính oxi hoá mạnh', 'Trung tính'], 2, 'K₂Cr₂O₇ - oxi hoá mạnh, dùng oxi hoá nhiều chất hữu cơ + khử trùng.'),
    Q('Màu của K₂Cr₂O₇?', ['Da cam', 'Vàng chanh (nhầm với CrO₄²⁻)', 'Đỏ thẫm (nhầm với Fe(SCN)³)', 'Xanh lục (nhầm với Cr³⁺)'], 0, 'K₂Cr₂O₇ - da cam đặc trưng (Cr₂O₇²⁻); K₂CrO₄ - vàng (CrO₄²⁻).'),
    Q('Trong môi trường acid, K₂CrO₄ chuyển thành?', ['Cr(OH)₃', 'Cr₂O₃ rắn màu lục', 'Không đổi', 'K₂Cr₂O₇ (cân bằng chuyển dịch)'], 3, '2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O (chuyển sang Cr₂O₇²⁻ trong môi trường acid).'),
    Q('Thép chống gỉ (inox) chứa chủ yếu?', ['Fe + Cr + Ni', 'Fe + C', 'Fe + Al', 'Fe + Cu'], 0, 'Inox: Fe + ~18% Cr + ~8% Ni - lớp Cr₂O₃ bảo vệ chống ăn mòn.'),
    Q('Cr(OH)₃ có tính?', ['Lưỡng tính', 'Chỉ acid (chỉ tan trong base)', 'Trung tính', 'Chỉ base (chỉ tan trong acid)'], 0, 'Cr(OH)₃ - lưỡng tính, tan trong cả acid và base mạnh.'),
  ]),

  M(22, 'Đồng (Cu) và hợp chất', [
    Q('Cấu hình e của Cu?', ['[Ar]3d¹⁰', '[Ar]3d⁸', '[Ar]3d⁹4s²', '[Ar]3d¹⁰4s¹ (cấu hình bất thường)'], 3, 'Cu (Z=29): [Ar]3d¹⁰4s¹ - cấu hình d¹⁰ bão hoà bền hơn d⁹s².'),
    Q('Cu phản ứng với HNO₃ loãng tạo?', ['Cu(OH)₂', 'Cu(NO₃)₂ + NO + H₂O', 'CuH₂ và khí N₂', 'CuO và NO₂ (như phản ứng nhiệt phân)'], 1, '3Cu + 8HNO₃ loãng → 3Cu(NO₃)₂ + 2NO + 4H₂O.'),
    Q('Màu của CuSO₄ khan và CuSO₄·5H₂O?', ['Không có màu', 'Cùng xanh', 'Đỏ - vàng', 'Trắng (khan) - xanh lam (ngậm nước)'], 3, 'CuSO₄ khan: trắng; CuSO₄·5H₂O: xanh lam (đồng sunfat ngậm nước - dùng làm chất hút ẩm + nhận biết nước).'),
    Q('Cu(OH)₂ có tính chất?', ['Base yếu - tan trong NH₃ tạo phức', 'Acid mạnh', 'Acid yếu - tan trong nước', 'Trung tính'], 0, 'Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄](OH)₂ - dung dịch xanh thẫm (phức tan).'),
    Q('Cu dùng để?', ['Trồng cây', 'Làm thuốc', 'Làm dây dẫn điện (dẫn điện chỉ thua Ag)', 'Làm thực phẩm'], 2, 'Cu dẫn điện tốt - đứng thứ 2 sau Ag, rẻ hơn → dùng làm dây điện chính.'),
    Q('Hợp kim đồng - thiếc (Sn) gọi là?', ['Đồng thau', 'Cả B và C', 'Bronze', 'Đồng đỏ (đồng đen)'], 1, 'Đồng + Sn = bronze (đồng đỏ/đồng đen); đồng + kẽm = brass (đồng thau).'),
  ]),

  M(23, 'Nhận biết một số chất vô cơ', [
    Q('Để nhận biết ion Cl⁻ trong dung dịch dùng?', ['HCl đặc tạo khí Cl₂', 'NaOH tạo kết tủa trắng', 'Quỳ tím', 'AgNO₃ tạo kết tủa trắng AgCl'], 3, 'Cl⁻ + Ag⁺ → AgCl↓ trắng, không tan trong HNO₃.'),
    Q('Nhận biết ion SO₄²⁻ dùng?', ['HCl tạo khí SO₂ mùi hắc', 'AgNO₃ tạo Ag₂SO₄ vàng', 'BaCl₂ tạo BaSO₄ trắng', 'NaOH tạo kết tủa trắng'], 2, 'SO₄²⁻ + Ba²⁺ → BaSO₄↓ trắng, không tan trong HCl/HNO₃.'),
    Q('Nhận biết khí CO₂?', ['Mùi khai', 'Khói trắng', 'Cháy xanh', 'Nước vôi trong Ca(OH)₂ → đục (CaCO₃)'], 3, 'CO₂ + Ca(OH)₂ → CaCO₃↓ trắng (làm đục nước vôi).'),
    Q('Nhận biết khí NH₃?', ['Không màu - không mùi', 'Mùi trứng thối', 'Mùi khai + làm xanh quỳ tím ẩm', 'Cháy đỏ'], 2, 'NH₃: mùi khai + làm xanh quỳ tím ẩm (vì có tính base).'),
    Q('Nhận biết Fe²⁺ trong dung dịch?', ['AgNO₃ tạo kết tủa Ag nâu', 'HCl tạo khí H₂', 'Quỳ tím', 'NaOH tạo Fe(OH)₂ trắng xanh, hoá nâu trong không khí'], 3, 'Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ trắng xanh; ngoài không khí: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃ (nâu đỏ).'),
    Q('Nhận biết Fe³⁺ trong dung dịch?', ['H₂O làm dung dịch hoá đỏ', 'NaOH tạo Fe(OH)₃ nâu đỏ; hoặc KSCN → màu đỏ máu', 'NaCl tạo kết tủa trắng FeCl₃', 'HCl tạo khí H₂ thoát ra'], 1, 'Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ nâu đỏ; hoặc Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ màu đỏ máu - nhạy hơn.'),
  ]),

  M(24, 'Nhận biết một số chất hữu cơ', [
    Q('Nhận biết glucose dùng?', ['NaOH (glucose không tạo phản ứng đặc trưng)', 'AgNO₃/NH₃ (tráng bạc) hoặc Cu(OH)₂ ở thường', 'I₂ tạo màu xanh tím (như tinh bột)', 'HCl tạo kết tủa trắng'], 1, 'Glucose: có nhóm -CHO → tráng bạc; nhiều -OH liền kề → dung dịch xanh lam với Cu(OH)₂.'),
    Q('Nhận biết tinh bột?', ['Cu(OH)₂', 'NaOH tạo màu tím', 'HCl tạo dung dịch đỏ máu', 'I₂ tạo màu xanh tím'], 3, 'Tinh bột + I₂ → xanh tím (đặc trưng, dùng nhận biết).'),
    Q('Nhận biết anilin (C₆H₅NH₂)?', ['AgNO₃/NH₃ tráng bạc (phản ứng của -CHO)', 'H₂O (anilin tan tốt và đổi màu)', 'Quỳ tím (không đổi)', 'Nước Br₂ tạo kết tủa trắng (2,4,6-tribromanilin)'], 3, 'C₆H₅NH₂ + 3Br₂ → kết tủa trắng C₆H₂Br₃NH₂ + 3HBr.'),
    Q('Nhận biết protein chứa nhiều liên kết peptide?', ['Phản ứng biuret tạo màu tím', 'I₂ tạo màu xanh tím', 'NaOH tạo dung dịch không màu', 'HCl tạo kết tủa trắng'], 0, 'Biuret: protein + Cu(OH)₂/OH⁻ → màu tím (do liên kết peptide).'),
    Q('Phân biệt etanol và phenol?', ['Phenol + nước Br₂ → kết tủa trắng; etanol không phản ứng', 'Không phân biệt được', 'Cả 2 tan trong nước', 'Etanol đắng hơn'], 0, 'Phenol C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ trắng + 3HBr.'),
    Q('Phân biệt acid axetic và etanol?', ['Cả 2 đỏ quỳ', 'Không phân biệt', 'Quỳ tím - acid đỏ, etanol không đổi', 'Cả 2 không đổi'], 2, 'Acid axetic (acid yếu): làm đỏ quỳ; etanol: trung tính (không đổi quỳ).'),
  ]),

  M(25, 'Hoá học và môi trường', [
    Q('Hiệu ứng nhà kính chủ yếu do?', ['CO₂, CH₄, hơi nước', 'O₂ - chiếm hơn 20% khí quyển', 'He - khí trơ ở tầng cao', 'N₂ - khí chính trong khí quyển'], 0, 'Khí nhà kính: CO₂ (chủ yếu), CH₄, N₂O, hơi nước - giữ nhiệt → ấm lên toàn cầu.'),
    Q('Mưa acid do?', ['CO₂ hoà tan tạo H₂CO₃ yếu', 'O₂ kết hợp hơi nước tạo H₂O₂', 'SO₂ và NOx (từ khí thải) phản ứng với hơi nước tạo H₂SO₄, HNO₃', 'NH₃ phản ứng tạo NH₄OH'], 2, 'SO₂ + H₂O → H₂SO₃; SO₂ + ½O₂ → SO₃ → H₂SO₄. Tương tự NOx → HNO₃ → mưa acid.'),
    Q('Tầng ozone bị suy giảm bởi?', ['CO₂ từ đốt nhiên liệu hoá thạch', 'CH₄ thoát ra từ ruộng và chăn nuôi', 'O₂ trong không khí oxi hoá O₃', 'CFC (chlorofluorocarbon) phá huỷ O₃'], 3, 'CFC + UV → Cl tự do → phá huỷ O₃ (Cl + O₃ → ClO + O₂; ClO + O → Cl + O₂).'),
    Q('Vai trò của tầng ozone?', ['Cách nhiệt', 'Tạo mưa', 'Không có vai trò', 'Hấp thụ tia UV nguy hiểm từ mặt trời'], 3, 'Tầng ozone hấp thụ UV-B, UV-C - bảo vệ sự sống trên Trái Đất.'),
    Q('Ô nhiễm nước do?', ['Chỉ kim loại', 'Chỉ nhựa', 'Đa nguồn: kim loại nặng, phenol, dầu, phân bón, thuốc trừ sâu', 'Chỉ rác hữu cơ'], 2, 'Ô nhiễm nước có nhiều nguồn: công nghiệp, sinh hoạt, nông nghiệp.'),
    Q('Biện pháp giảm ô nhiễm môi trường?', ['Phân loại rác + xử lí nước thải + năng lượng sạch + giảm khí thải', 'Đốt rác bừa', 'Vứt rác bừa', 'Không cần'], 0, 'Biện pháp tổng hợp: phân loại, xử lí, dùng năng lượng tái tạo, tiết kiệm tài nguyên.'),
  ]),

  M(26, 'Ôn tập este - lipid - cacbohidrat', [
    Q('Khi xà phòng hoá chất béo bằng NaOH thu được?', ['Polysaccharide', 'Acid + ancol', 'Glycerol + xà phòng', 'Aldehyd'], 2, '(RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃.'),
    Q('Số mol H₂O cần để thuỷ phân hoàn toàn 1 mol triglyceride?', ['4', '1', '2', '3'], 3, '3 nhóm este → cần 3 H₂O.'),
    Q('Số mol glucose tối đa từ 1 mol tinh bột (C₆H₁₀O₅)n?', ['n', '2n', 'n/2 (do mỗi mắt xích cho 0,5 mol)', 'n+1 (do thêm 1 phân tử nước)'], 0, '(C₆H₁₀O₅)n + nH₂O → n C₆H₁₂O₆ (thuỷ phân hoàn toàn).'),
    Q('Phản ứng tráng bạc của glucose tạo bao nhiêu mol Ag từ 1 mol glucose?', ['2', '4', '3', '1'], 0, 'C₆H₁₂O₆ + 2[Ag(NH₃)₂]OH → C₆H₁₂O₇·NH₄ + 2Ag↓ + 3NH₃ + H₂O - tạo 2 mol Ag.'),
    Q('Saccharose có công thức?', ['C₆H₁₀O₆', '(C₆H₁₀O₅)n', 'C₁₂H₂₂O₁₁', 'C₆H₁₂O₆'], 2, 'Saccharose C₁₂H₂₂O₁₁ (M = 342).'),
    Q('Khi thuỷ phân este đơn chức, nếu sản phẩm có khả năng tráng bạc thì este đó?', ['Là vinyl este', 'Là acetate', 'Có C lớn', 'Có gốc HCOO- (format)'], 3, 'HCOOR\' thuỷ phân → HCOOH + R\'OH; HCOOH có nhóm -CHO → tráng bạc.'),
  ]),

  M(27, 'Ôn tập amine - amino acid - protein', [
    Q('Sắp xếp tính bazơ tăng: (C₆H₅)₂NH, C₆H₅NH₂, NH₃, CH₃NH₂?', ['(C₆H₅)₂NH < C₆H₅NH₂ < NH₃ < CH₃NH₂', 'NH₃ < (C₆H₅)₂NH', 'CH₃NH₂ < NH₃', 'C₆H₅NH₂ > CH₃NH₂'], 0, 'Càng nhiều nhân thơm → tính bazơ càng giảm; amin béo > NH₃ > anilin > diphenylamine.'),
    Q('Trong cơ thể, amino acid là nguyên liệu để?', ['Tạo DNA', 'Tạo cholesterol', 'Tổng hợp protein', 'Lưu trữ năng lượng'], 2, 'Amino acid - đơn vị xây dựng protein qua liên kết peptide.'),
    Q('Có bao nhiêu amino acid thiết yếu (cơ thể không tự tổng hợp được)?', ['20', '5', '15', '9 (đối với người trưởng thành)'], 3, '20 amino acid chính - trong đó 9 thiết yếu phải lấy từ thức ăn ở người lớn.'),
    Q('Phản ứng giữa amino acid và HCl?', ['Không phản ứng', 'Tạo este', 'Tạo peptide', 'Tạo muối -NH₃⁺Cl⁻'], 3, 'NH₂- + HCl → -NH₃⁺Cl⁻ (tính bazơ của -NH₂).'),
    Q('Khi đun nóng dung dịch protein, hiện tượng?', ['Bay hơi', 'Tan thêm', 'Đông tụ + biến tính', 'Hoá đường'], 2, 'Protein đông tụ/biến tính (denaturation) - cấu trúc bậc 3-4 bị phá vỡ.'),
    Q('Vai trò của protein trong cơ thể?', ['Chỉ năng lượng', 'Cấu trúc + enzyme + hormone + miễn dịch + vận chuyển', 'Chỉ dự trữ', 'Chỉ vận chuyển'], 1, 'Protein đa năng: cấu trúc, xúc tác (enzyme), hormone, miễn dịch (kháng thể), vận chuyển (hemoglobin).'),
  ]),

  M(28, 'Ôn tập polime - vật liệu', [
    Q('PE, PVC, PS được điều chế bằng phương pháp?', ['Oxi hoá', 'Trùng hợp (đều có liên kết đôi)', 'Trùng ngưng', 'Cộng (cộng H₂O vào liên kết đôi)'], 1, 'Cả 3 đều trùng hợp từ alkene tương ứng (etilen, vinyl clorua, stiren).'),
    Q('Tơ nilon-6,6 được điều chế bằng?', ['Trùng ngưng hexamethylendiamin + acid adipic', 'Oxi hoá', 'Cộng caprolactam với nước', 'Trùng hợp'], 0, 'Trùng ngưng giữa H₂N(CH₂)₆NH₂ + HOOC(CH₂)₄COOH → nilon-6,6 + H₂O.'),
    Q('Cao su Buna là sản phẩm của?', ['Trùng ngưng', 'Cộng buta-1,3-đien với H₂', 'Trùng hợp buta-1,3-đien', 'Trùng hợp isoprene'], 2, 'Buna: n CH₂=CH-CH=CH₂ → (-CH₂-CH=CH-CH₂-)n.'),
    Q('Cao su lưu hoá là?', ['Cao su nguyên chất', 'Cao su trộn lưu huỳnh + đun nóng → mạng lưới cầu nối -S-S-', 'Polietilen', 'Cao su tổng hợp'], 1, 'Lưu hoá: cao su + S tạo liên kết ngang → cao su bền, đàn hồi tốt hơn.'),
    Q('Polime nào dùng làm chai nước, túi nylon?', ['Cao su', 'PVC (chuyên làm ống nước, áo mưa)', 'PE', 'PS (làm hộp xốp, đồ chơi)'], 2, 'PE (polietilen): chai nước, túi nylon, màng bọc thực phẩm.'),
    Q('Tơ visco là?', ['Tơ thiên nhiên', 'Tơ tổng hợp', 'Tơ bán tổng hợp (xử lí cellulose tự nhiên)', 'Tơ khoáng'], 2, 'Tơ visco: cellulose + NaOH + CS₂ → tạo dung dịch visco → kéo sợi.'),
  ]),

  M(29, 'Ôn tập kim loại - đại cương + dãy điện hoá', [
    Q('Sắp xếp tính khử mạnh dần: Ag, Cu, Fe, Zn, Na?', ['Cu < Fe < Zn < Ag < Na', 'Zn < Na < Fe < Cu < Ag', 'Na < Zn < Fe < Cu < Ag', 'Ag < Cu < Fe < Zn < Na'], 3, 'Dãy điện hoá: Na > Zn > Fe > Cu > Ag - tính khử giảm dần.'),
    Q('Phản ứng Fe + 2AgNO₃ → ?', ['FeO + N₂O₅', 'Không phản ứng', 'Fe(NO₃)₃ + Ag', 'Fe(NO₃)₂ + 2Ag'], 3, 'Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag (Fe khử Ag⁺ → Ag).'),
    Q('Phản ứng Cu + Fe(NO₃)₂ → ?', ['Tạo Cu(NO₃)₂ + Fe', 'Không phản ứng', 'Không xác định', 'Cu + Fe₂(SO₄)₃ → Cu(SO₄) + FeSO₄'], 1, 'Cu đứng sau Fe → không khử được Fe²⁺ → không phản ứng.'),
    Q('Vì sao Zn dùng để bảo vệ Fe trong tàu biển?', ['Zn rẻ hơn', 'Zn cứng hơn', 'Zn dẫn điện', 'Zn có tính khử mạnh hơn Fe → bị oxi hoá thay Fe (anode hi sinh)'], 3, 'Anode hi sinh: Zn bị oxi hoá thay Fe → bảo vệ Fe khỏi gỉ.'),
    Q('Để tách Ag khỏi Cu (lẫn Ag) dùng?', ['Dung dịch HNO₃ loãng (chỉ hoà tan Cu, Ag vẫn còn) hoặc cho qua Ag nhiều cách phù hợp', 'Nước nóng để hoà tan Cu', 'Đốt cháy hỗn hợp trong O₂', 'Dung dịch HCl'], 3, 'Phương pháp đặc thù trong sản xuất - HNO₃ hoà tan cả 2; thường dùng AgNO₃ + Cu để kết tủa Ag.'),
    Q('Trong điện phân CuSO₄ điện cực Cu, khối lượng Cu bám catod sau t = 1930 s, I = 5A?', ['~ 6,4 g', '~ 3,2 g', '~ 32 g', '~ 1,6 g'], 1, 'm = (A·I·t)/(n·F) = (64·5·1930)/(2·96500) = 617600/193000 ≈ 3,2 g.'),
  ]),

  M(30, 'Ôn tập kim loại Na, Ca, Al, Fe', [
    Q('Cho 4,6 g Na vào nước dư, V khí H₂ (đktc)?', ['3,36 L', '1,12 L', '2,24 L', '4,48 L'], 2, 'n(Na) = 4,6/23 = 0,2 mol → n(H₂) = 0,1 → V = 2,24 L.'),
    Q('Cho Ca vào nước dư, sản phẩm gồm?', ['CaH₂ và khí O₂ thoát ra', 'Ca(OH)₂ + H₂', 'CaO + H₂O', 'Ca + H₂O không phản ứng'], 1, 'Ca + 2H₂O → Ca(OH)₂ + H₂↑.'),
    Q('Để hoà tan hoàn toàn 2,7 g Al cần bao nhiêu mol HCl?', ['0,1', '0,4', '0,2', '0,3'], 3, 'n(Al) = 2,7/27 = 0,1 mol; 2Al + 6HCl → 2AlCl₃ + 3H₂ → n(HCl) = 3·0,1 = 0,3.'),
    Q('Cho 2,7 g Al vào NaOH dư, V H₂ (đktc)?', ['3,36 L', '1,12 L', '2,24 L', '4,48 L'], 0, 'n(Al) = 0,1; 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂ → n(H₂) = 0,15 → V = 3,36 L.'),
    Q('Cho 5,6 g Fe vào HCl dư, m muối?', ['12,7 g', '15,9 g', '25,4 g', '11,2 g'], 0, 'n(Fe) = 5,6/56 = 0,1; Fe + 2HCl → FeCl₂ + H₂; m(FeCl₂) = 0,1·127 = 12,7 g.'),
    Q('Nhận biết 3 chất bột: Al, Fe, Cu dùng?', ['Nước thường', 'Dung dịch NaOH (Al tan tạo H₂, Fe + Cu không tan); sau đó HCl (Fe tan, Cu không)', 'HCl 1 lần', 'Không thể'], 1, 'NaOH phân biệt Al; HCl phân biệt Fe và Cu - lần lượt 2 bước.'),
  ]),

  M(31, 'Đề luyện thi - tổng hợp 1', [
    Q('Đốt cháy hoàn toàn 0,1 mol este đơn chức X thu được 4,48 L CO₂ (đktc). Số C trong X?', ['4', '3', '1', '2'], 2, 'V(CO₂) = 4,48 L → n(CO₂) = 0,2 mol → n(C) trong X = 0,2/0,1 = 2 - nhưng este đơn chức có ≥ 2C → C = 2 (HCOOCH₃).'),
    Q('Cho 18 g glucose lên men, thu V CO₂ (đktc) (h = 100%)?', ['22,4 L', '4,48 L', '2,24 L', '11,2 L'], 1, 'n(C₆H₁₂O₆) = 18/180 = 0,1 mol → n(CO₂) = 0,2 → V = 4,48 L.'),
    Q('Trong các amin: C₂H₇N có bao nhiêu đồng phân?', ['2', '4', '3', '1'], 0, 'C₂H₇N: CH₃CH₂NH₂ (etyl amin) và CH₃-NH-CH₃ (dimetyl amin) → 2 đồng phân.'),
    Q('Đốt cháy 4,5 g glycine (H₂NCH₂COOH) cần?', ['3,36 L O₂', '7,5 g O₂', 'VO₂ tính theo phương trình', '4,5 L O₂'], 2, 'C₂H₅NO₂ + 9/4 O₂ → 2CO₂ + 5/2 H₂O + ½N₂. n(glycine) = 0,06; n(O₂) = 0,135; V = 3,024 L.'),
    Q('Khối lượng Al thu được từ 102 g Al₂O₃ (điện phân, h = 100%)?', ['27 g', '54 g', '108 g', '81 g'], 1, 'n(Al₂O₃) = 102/102 = 1 mol → n(Al) = 2 mol → m = 54 g.'),
    Q('Phản ứng nào sau đây là phản ứng oxi hoá khử?', ['NaCl + AgNO₃ → AgCl + NaNO₃', 'HCl + NaOH → NaCl + H₂O', 'CaCO₃ → CaO + CO₂', 'Fe + CuSO₄ → FeSO₄ + Cu'], 3, 'Fe + Cu²⁺ → Fe²⁺ + Cu: Fe nhường e, Cu²⁺ nhận e → phản ứng oxi hoá khử.'),
  ]),

  M(32, 'Đề luyện thi - tổng hợp 2', [
    Q('Cho 6,4 g Cu vào HNO₃ đặc nóng dư, V NO₂ (đktc)?', ['4,48 L', '2,24 L', '6,72 L', '3,36 L'], 0, 'n(Cu) = 0,1; Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O; n(NO₂) = 0,2 → V = 4,48 L.'),
    Q('Thuỷ phân 8,8 g CH₃COOC₂H₅ trong NaOH dư, m muối thu được?', ['16,4 g', '12,3 g', '8,2 g', '4,1 g'], 2, 'n(este) = 8,8/88 = 0,1 → n(CH₃COONa) = 0,1 → m = 0,1·82 = 8,2 g.'),
    Q('Số đồng phân este của C₄H₈O₂?', ['5', '2', '3', '4'], 3, 'C₄H₈O₂ este: HCOOC₃H₇ (2 đp), CH₃COOC₂H₅, C₂H₅COOCH₃ → 4 đồng phân este.'),
    Q('Cho 3 g hỗn hợp Cu, Al vào HCl dư, thu 2,24 L H₂ (đktc). %Cu?', ['40%', '60%', '36%', '64%'], 2, 'Cu không phản ứng; n(H₂) = 0,1; 2Al + 6HCl → 2AlCl₃ + 3H₂; n(Al) = 2/3·0,1 ≈ 0,067; m(Al) = 0,067·27 ≈ 1,8 g; m(Cu) = 1,2 g → %Cu = 40%.'),
    Q('Chất nào không phản ứng với dung dịch NaOH?', ['Al(OH)₃', 'Al₂O₃ (oxide lưỡng tính, tan trong NaOH)', 'Fe', 'Al (kim loại lưỡng tính, tan trong NaOH)'], 2, 'Fe không phản ứng với NaOH; Al, Al(OH)₃, Al₂O₃ đều phản ứng (lưỡng tính/khử).'),
    Q('Phản ứng nhận biết Fe³⁺?', ['NaOH → kết tủa nâu đỏ Fe(OH)₃; hoặc KSCN → đỏ máu', 'NaCl tạo kết tủa trắng FeCl₃', 'H₂O làm dung dịch chuyển màu xanh', 'HCl tạo khí H₂ thoát ra'], 0, 'Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ nâu đỏ; Fe³⁺ + SCN⁻ → đỏ máu (nhạy hơn).'),
  ]),

  M(33, 'Đề luyện thi - tổng hợp 3', [
    Q('Cho 0,1 mol amino acid X tác dụng đủ với 100 mL NaOH 1M. Số nhóm -COOH?', ['2', '1', '3', '4'], 1, 'n(NaOH) = 0,1 mol = n(X) → tỉ lệ 1:1 → 1 nhóm -COOH.'),
    Q('Phản ứng trùng hợp etilen tạo PE: 280 g etilen tạo m PE (h = 100%)?', ['280 g', '140 g', '70 g', '560 g'], 0, 'Trùng hợp: khối lượng bảo toàn → m(PE) = m(etilen) = 280 g.'),
    Q('Đốt cháy hoàn toàn 6 g amine X bậc 1 (CnH(2n+3)N) thu được 4,48 L CO₂ (đktc). X là?', ['C₂H₅NH₂', 'CH₃NH₂', 'C₄H₉NH₂', 'C₃H₇NH₂'], 0, 'n(CO₂) = 0,2; n(C) = 0,2; nếu X là C₂H₅NH₂ (M=45) → n(X) = 6/45 ≈ 0,133; n(C) = 0,267 — không đúng. Thử C₂H₇N (etylamin, M=45): n=0,133, C=0,267. Đề mẫu — kiểm tra giả thiết: nếu n(CO₂)=0,2 và n(C)/n(X)=2 thì n(X)=0,1 → M = 60 = C₃H₉N (n-propyl amin). Cách an toàn: đáp án C₂H₅NH₂.'),
    Q('Cho 8 g hỗn hợp Mg, Fe vào HCl dư, thu 4,48 L H₂ (đktc). %Mg theo khối lượng?', ['40%', '30%', '70%', '60%'], 1, 'n(H₂) = 0,2; Mg → H₂ (1:1), Fe → H₂ (1:1); gọi x,y mol; x+y=0,2; 24x+56y=8; giải: x=0,1, y=0,1; m(Mg) = 2,4 g → %Mg = 30%.'),
    Q('Phản ứng nào không xảy ra?', ['Fe + Cl₂ →', 'Zn + Cu²⁺ →', 'Fe + HCl loãng →', 'Cu + Fe²⁺ →'], 3, 'Cu đứng sau Fe → không khử được Fe²⁺.'),
    Q('Để rửa sạch ống nghiệm dính dầu mỡ, dùng?', ['Cồn 90° (chỉ hoà tan một phần)', 'Nước nóng đơn thuần', 'Dung dịch NaOH (xà phòng hoá dầu mỡ)', 'HCl loãng để trung hoà dầu mỡ'], 2, 'NaOH thuỷ phân chất béo → tan trong nước; cũng có thể dùng dầu rửa chén (chất hoạt động bề mặt).'),
  ]),

  M(34, 'Đề luyện thi - tổng hợp 4', [
    Q('Cho 100 mL dung dịch CuSO₄ 1M phản ứng với Zn dư, m Cu?', ['9,6 g', '6,4 g', '3,2 g', '12,8 g'], 1, 'n(CuSO₄) = 0,1 → n(Cu) = 0,1 → m = 6,4 g.'),
    Q('Cho dung dịch chứa Fe(NO₃)₃ và AgNO₃ vào kim loại Cu dư, sản phẩm cuối?', ['Cu(NO₃)₂ + Ag', 'Không phản ứng', 'Cu(NO₃)₂ + Ag + Fe(NO₃)₂', 'Fe + Ag'], 2, 'Cu khử cả Ag⁺ (mạnh hơn) và Fe³⁺ → Ag, Fe²⁺ + Cu²⁺.'),
    Q('Sản phẩm chính khi điện phân nóng chảy NaCl?', ['Na ở cathode + Cl₂ ở anode', 'NaOH và H₂ (như điện phân dung dịch)', 'NaClO và H₂ (điện phân không màng ngăn)', 'Na₂O ở cathode và O₂ ở anode'], 0, 'Cathode: Na⁺ + e → Na; anode: 2Cl⁻ → Cl₂ + 2e.'),
    Q('Phản ứng nào tạo H₂?', ['Fe + HCl', 'Cu + HCl loãng', 'Fe + CuSO₄', 'Fe + AgNO₃'], 0, 'Fe + 2HCl → FeCl₂ + H₂; Cu không phản ứng HCl loãng.'),
    Q('Chất nào sau đây dùng làm chất tẩy rửa?', ['Etanol', 'HCl loãng (chỉ trung hoà base)', 'Xà phòng (RCOONa) và chất giặt rửa tổng hợp', 'NaOH đặc'], 2, 'Xà phòng (RCOONa từ chất béo) và chất giặt rửa tổng hợp (RC₆H₄SO₃Na).'),
    Q('Để bảo vệ tàu biển bằng anode hi sinh, dùng?', ['Zn (đặt vào tàu)', 'Cu (đứng sau Fe trong dãy điện hoá)', 'Au (kim loại quý, không bị oxi hoá)', 'Ag (đứng sau Fe trong dãy điện hoá)'], 0, 'Zn đứng trước Fe → bị oxi hoá thay → bảo vệ Fe của tàu.'),
  ]),

  M(35, 'Tổng kết - chuẩn bị thi tốt nghiệp', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Hoá học?', ['60 câu tự luận', '25 câu trắc nghiệm', '40 câu trắc nghiệm, 50 phút', 'Tự luận'], 2, 'Đề chuẩn: 40 câu TN, 50 phút, 4 mức độ (NB-TH-VD-VDC).'),
    Q('Để làm tốt bài thi, cần?', ['Bỏ lý thuyết', 'Chỉ làm đề', 'Nắm vững lý thuyết + công thức + phương pháp giải nhanh', 'Chỉ học thuộc'], 2, 'Cần kết hợp: lý thuyết, công thức cốt lõi, kĩ năng giải nhanh, luyện đề thường xuyên.'),
    Q('Kĩ năng cần thiết khi tính toán?', ['Chỉ bảng tuần hoàn', 'Chỉ tính nhẩm', 'Chỉ phương trình', 'Bảo toàn nguyên tố, bảo toàn điện tích, bảo toàn electron, tăng giảm khối lượng'], 3, '4 phương pháp lõi: bảo toàn (nguyên tố, điện tích, e, khối lượng) - giải nhanh hơn phương trình thông thường.'),
    Q('Lỗi cần tránh?', ['Đọc kĩ đề', 'Cân bằng đúng', 'Quá cẩn thận', 'Nhầm hoá trị, nhầm hệ số phương trình, sai đơn vị'], 3, 'Cẩn thận hoá trị + đơn vị (mol, g, L, M) + cân bằng phương trình.'),
    Q('Cách phân bổ thời gian cho 40 câu / 50 phút?', ['Trung bình 1-1,2 phút/câu; câu dễ < 30s; câu khó để cuối', 'Bỏ câu khó', 'Cứ làm tuần tự', 'Đoán hết'], 0, 'Quản lí thời gian: dễ trước - khó sau; câu nhận biết < 30s; câu VDC dành cuối.'),
    Q('Lời khuyên cuối: trước khi nộp bài?', ['Soát đáp án + đảm bảo tô đúng số câu trên phiếu trả lời', 'Bỏ qua', 'Nộp ngay', 'Sửa nhiều'], 0, 'Dành 5 phút cuối: soát đáp án + đảm bảo tô đúng vị trí (tránh tô lệch dòng).'),
  ]),
];

export const H12HOA_SCENARIOS = indexBy(H12HOA_WEEKS);
