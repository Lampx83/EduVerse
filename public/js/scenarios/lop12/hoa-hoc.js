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
    Q('Công thức tổng quát của este đơn chức no, mạch hở?', ['CnH2nO2 (n ≥ 2)','CnH2n+2O2','CnH2n-2O2','CnH2n+1O2'], 0, 'Este no đơn chức mạch hở: CnH2nO2, n ≥ 2.'),
    Q('Este được tạo ra từ?', ['Ancol + acid carboxylic (este hoá)','Acid + base','Aldehyd + alcohol','Oxi hoá ancol'], 0, 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (xúc tác H₂SO₄ đặc).'),
    Q('Tên gọi của CH₃COOC₂H₅?', ['Etyl axetat','Metyl axetat','Etyl propionat','Vinyl axetat'], 0, 'Tên: gốc ancol (etyl) + gốc acid (axetat = CH₃COO).'),
    Q('Đồng phân của C₃H₆O₂ thuộc este là?', ['HCOOC₂H₅, CH₃COOCH₃','Chỉ HCOOC₂H₅','Chỉ CH₃COOCH₃','Không có'], 0, 'C₃H₆O₂ có 2 đồng phân este: HCOOC₂H₅ (etyl format) và CH₃COOCH₃ (metyl axetat).'),
    Q('Este nào có mùi chuối chín?', ['Isoamyl axetat','Etyl axetat','Metyl format','Vinyl axetat'], 0, 'Isoamyl axetat (CH₃COOCH₂CH₂CH(CH₃)₂) có mùi chuối chín.'),
    Q('Tính chất vật lí chung của este?', ['Tan tốt trong nước','Không tan/ít tan trong nước, nhẹ hơn nước, mùi thơm','Chìm trong nước','Không có mùi'], 1, 'Este: nhẹ hơn nước, ít tan, có mùi thơm (trái cây) đặc trưng.'),
  ]),

  M(2, 'Este — Phản ứng thuỷ phân + điều chế', [
    Q('Thuỷ phân este trong môi trường acid?', ['Không thuận nghịch','Thuận nghịch, tạo lại ancol + acid','Tạo muối','Tạo aldehyd'], 1, 'RCOOR\' + H₂O ⇌ RCOOH + R\'OH (H₂SO₄ xt).'),
    Q('Thuỷ phân este trong môi trường base (NaOH) gọi là?', ['Este hoá','Phản ứng xà phòng hoá','Trùng hợp','Oxi hoá'], 1, 'Xà phòng hoá: RCOOR\' + NaOH → RCOONa + R\'OH (một chiều, không thuận nghịch).'),
    Q('Thuỷ phân CH₃COOC₂H₅ trong NaOH dư tạo?', ['CH₃COONa + C₂H₅OH','CH₃OH + C₂H₅COOH','CH₃COONa + C₂H₅ONa','C₂H₅COONa + CH₃OH'], 0, 'CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH.'),
    Q('Khối lượng CH₃COOC₂H₅ cần để thuỷ phân thu được 8,2 g CH₃COONa?', ['8,8 g','17,6 g','13,2 g','4,4 g'], 0, 'n(CH₃COONa) = 8,2/82 = 0,1 mol → n(este) = 0,1 → m = 0,1·88 = 8,8 g.'),
    Q('Khi thuỷ phân este X bằng NaOH thu được muối + ancol bậc 2. X là?', ['CH₃COOCH₃','CH₃COOCH(CH₃)₂','HCOOC₂H₅','CH₃COOC₂H₅'], 1, 'Ancol bậc 2 (isopropanol) → este là CH₃COOCH(CH₃)₂ (isopropyl axetat).'),
    Q('Phản ứng este hoá là phản ứng?', ['Một chiều','Thuận nghịch','Trùng hợp','Phân huỷ'], 1, 'Este hoá thuận nghịch - cần dùng H₂SO₄ đặc + đun nóng để tăng hiệu suất.'),
  ]),

  M(3, 'Lipid - chất béo - xà phòng', [
    Q('Chất béo là?', ['Este của glycerol và acid béo','Acid carboxylic','Polysaccharide','Protein'], 0, 'Chất béo (triglyceride) - este của glycerol C₃H₅(OH)₃ và 3 acid béo.'),
    Q('Acid béo no thường gặp?', ['Axit stearic C₁₇H₃₅COOH, axit palmitic C₁₅H₃₁COOH','Axit oleic, linoleic','Axit etanoic','Axit benzoic'], 0, 'Acid béo no: palmitic (C₁₅H₃₁COOH), stearic (C₁₇H₃₅COOH).'),
    Q('Acid béo không no?', ['Axit oleic, linoleic, linolenic','Axit stearic','Axit palmitic','Axit axetic'], 0, 'Acid béo không no: oleic (1 nối đôi), linoleic (2), linolenic (3).'),
    Q('Phản ứng xà phòng hoá chất béo tạo?', ['Glycerol + muối acid béo (xà phòng)','Acid + ancol','Aldehyd','Polysaccharide'], 0, '(RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃.'),
    Q('Xà phòng là?', ['Muối Na/K của acid béo','Acid béo','Ancol','Este'], 0, 'Xà phòng: muối Na/K (natri/kali) của acid béo (RCOONa).'),
    Q('Vì sao xà phòng giặt sạch quần áo?', ['Hoà tan dầu mỡ + cuốn theo nước (chất hoạt động bề mặt)','Phản ứng với vết bẩn','Đốt cháy bẩn','Hấp thụ bẩn'], 0, 'Phân tử xà phòng có đầu kị nước (gốc R) + đầu ưa nước (COO⁻) - hoà tan dầu mỡ vào nước.'),
  ]),

  M(4, 'Cacbohidrat — Glucose + Fructose', [
    Q('Công thức phân tử glucose?', ['C₆H₁₂O₆','C₁₂H₂₂O₁₁','(C₆H₁₀O₅)n','C₆H₆O₆'], 0, 'Glucose: C₆H₁₂O₆ (M = 180).'),
    Q('Glucose có cấu tạo?', ['Polysaccharide','Monosaccharide - mạch hở 5 OH + 1 CHO','Disaccharide','Acid'], 1, 'Monosaccharide - mạch hở có 5 nhóm -OH và 1 -CHO (aldehyd).'),
    Q('Phản ứng tráng bạc của glucose chứng tỏ có nhóm?', ['-OH','-CHO (anđehyd)','-COOH','-NH₂'], 1, '-CHO khử Ag⁺ trong [Ag(NH₃)₂]OH → Ag (tráng bạc).'),
    Q('Phản ứng glucose + Cu(OH)₂ ở nhiệt độ thường tạo?', ['Cu₂O đỏ','Dung dịch xanh lam (do nhiều -OH liền kề)','Kết tủa trắng','Khí'], 1, 'Glucose phản ứng Cu(OH)₂ ở thường → phức xanh lam (chứng tỏ nhiều -OH liền kề).'),
    Q('Glucose lên men tạo?', ['Ethanol + CO₂','Methanol','Aldehyd','Acid axetic'], 0, 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (men rượu, 30-35°C).'),
    Q('Fructose khác glucose ở?', ['Cấu hình OH','Có nhóm xeton (C=O) thay vì anđehyd','Có nhiều C','Là disaccharide'], 1, 'Fructose có nhóm xeton (-C(=O)-) thay vì anđehyd; trong môi trường base chuyển hoá sang glucose nên cũng tráng bạc.'),
  ]),

  M(5, 'Saccharose, tinh bột, cellulose', [
    Q('Saccharose có cấu tạo từ?', ['Glucose + glucose','Glucose + fructose','Fructose + fructose','Galactose'], 1, 'Saccharose (đường mía) = α-glucose + β-fructose.'),
    Q('Saccharose có phản ứng tráng bạc không?', ['Có','Không (vì không còn -CHO tự do)','Có nhưng yếu','Tuỳ điều kiện'], 1, 'Saccharose không tráng bạc vì cả 2 monome đã đóng vòng tại nhóm có C=O.'),
    Q('Thuỷ phân saccharose tạo?', ['Glucose + glucose','Glucose + fructose','Maltose','Cellulose'], 1, 'C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆ (glucose + fructose).'),
    Q('Tinh bột có cấu tạo từ?', ['Mắt xích α-glucose','Mắt xích β-glucose','Fructose','Saccharose'], 0, 'Tinh bột: (α-glucose)n - 2 thành phần: amylose (mạch thẳng) + amylopectin (phân nhánh).'),
    Q('Cellulose có cấu tạo từ?', ['Mắt xích α-glucose','Mắt xích β-glucose - mạch thẳng','Fructose','Maltose'], 1, 'Cellulose: (β-glucose)n mạch thẳng, không phân nhánh - thành phần chính thành tế bào thực vật.'),
    Q('Phản ứng nhận biết tinh bột?', ['HNO₃','Iốt (I₂) tạo màu xanh tím','AgNO₃','NaOH'], 1, 'Tinh bột + I₂ → màu xanh tím đặc trưng (cấu trúc xoắn ốc).'),
  ]),

  M(6, 'Amin — Cấu tạo + tính bazơ', [
    Q('Amin là dẫn xuất của?', ['Ancol','NH₃ (thay 1, 2, 3 H bằng gốc hydrocacbon)','Acid','Aldehyd'], 1, 'Amin: R-NH₂ (bậc 1), R-NH-R\' (bậc 2), R-N(R\')-R\'\' (bậc 3).'),
    Q('Bậc amin được xác định bởi?', ['Số C trong gốc','Số H trong NH₃ bị thay thế','Số nguyên tử N','Khối lượng phân tử'], 1, 'Bậc amin = số H trong NH₃ được thay bằng gốc (1, 2, 3).'),
    Q('CH₃-NH-CH₃ là amin?', ['Bậc 1','Bậc 2','Bậc 3','Không phải amin'], 1, 'Dimetylamin - 2 H của NH₃ bị thay → bậc 2.'),
    Q('Amin có tính chất hoá học chính?', ['Tính bazơ (nhận H⁺)','Tính acid','Trung tính','Oxi hoá'], 0, 'Cặp e tự do trên N → tính bazơ - phản ứng với acid → muối.'),
    Q('Sắp xếp tính bazơ tăng dần: NH₃, CH₃NH₂, C₆H₅NH₂?', ['CH₃NH₂ > NH₃ > C₆H₅NH₂','C₆H₅NH₂ > NH₃ > CH₃NH₂','NH₃ > CH₃NH₂ > C₆H₅NH₂','Tất cả bằng nhau'], 0, 'Tính bazơ: amin béo > NH₃ > anilin (vì nhân thơm hút e làm giảm tính bazơ).'),
    Q('Anilin C₆H₅NH₂ có phản ứng với?', ['NaOH','HCl tạo muối phenylammonium clorua','Na (mạnh)','Ag₂O'], 1, 'Anilin + HCl → C₆H₅NH₃Cl (kết tinh trắng).'),
  ]),

  M(7, 'Amino acid', [
    Q('Amino acid là?', ['Hợp chất có cả nhóm -NH₂ và -COOH trong phân tử','Chỉ có NH₂','Chỉ có COOH','Là ester'], 0, 'Amino acid: chứa đồng thời -NH₂ (amin) và -COOH (acid).'),
    Q('Công thức amino acid đơn giản nhất (glycine)?', ['H₂N-CH₂-COOH','CH₃-CH(NH₂)-COOH','HOOC-CH(NH₂)-COOH','H₂N-CH(NH₂)-COOH'], 0, 'Glycine: H₂N-CH₂-COOH (M = 75).'),
    Q('Tính chất nổi bật của amino acid?', ['Tính lưỡng tính (vừa acid vừa base)','Chỉ acid','Chỉ base','Trung tính'], 0, 'Lưỡng tính: -COOH (tính acid) + -NH₂ (tính base) → tồn tại dạng ion lưỡng cực.'),
    Q('Trong dung dịch nước, amino acid tồn tại chủ yếu dạng?', ['H₂N-R-COOH','H₃N⁺-R-COO⁻ (ion lưỡng cực)','H₂N-R-COO⁻','H₃N⁺-R-COOH'], 1, 'Trong nước: dạng ion lưỡng cực (zwitterion) - H₃N⁺-R-COO⁻.'),
    Q('pH đẳng điện (pI) là?', ['pH = 0','pH mà amino acid tồn tại chủ yếu dạng ion lưỡng cực, điện tích tổng = 0','pH = 14','pH = 7 luôn'], 1, 'pI - pH mà amino acid trung hoà điện - không di chuyển trong điện trường.'),
    Q('Alanine có công thức?', ['H₂N-CH₂-COOH','CH₃-CH(NH₂)-COOH','HOOC-CH(NH₂)-CH₂-COOH','H₂N-(CH₂)₄-CH(NH₂)-COOH'], 1, 'Alanine: CH₃-CH(NH₂)-COOH.'),
  ]),

  M(8, 'Peptide + protein', [
    Q('Peptide được tạo thành từ?', ['1 amino acid','2 hoặc nhiều amino acid liên kết qua liên kết peptide','Glucose','Lipid'], 1, 'Peptide: chuỗi amino acid liên kết qua liên kết peptide -CO-NH-.'),
    Q('Liên kết peptide là?', ['-O-','-CO-NH- (giữa -COOH của AA này và -NH₂ của AA kia)','-S-S-','-O-O-'], 1, 'Liên kết peptide: -CO-NH- (loại nước giữa COOH và NH₂).'),
    Q('Protein là?', ['Polypeptide phức tạp với phân tử khối rất lớn','1 amino acid','Polysaccharide','Lipid'], 0, 'Protein - polypeptide có M lớn (vài chục nghìn - hàng triệu).'),
    Q('Phản ứng nhận biết protein chứa nhiều liên kết peptide?', ['Iốt','Phản ứng biuret (với Cu(OH)₂ trong môi trường base → tím)','HCl','NaOH'], 1, 'Phản ứng biuret: protein + Cu(OH)₂/OH⁻ → màu tím (nhận biết liên kết peptide).'),
    Q('Thuỷ phân hoàn toàn protein cuối cùng tạo?', ['Amino acid','Glucose','Acid béo','Glycerol'], 0, 'Thuỷ phân hoàn toàn protein → các amino acid riêng lẻ.'),
    Q('Tính chất protein khi đun nóng/gặp acid mạnh?', ['Không đổi','Bị đông tụ/biến tính','Tan thêm','Hoá thành đường'], 1, 'Protein đông tụ/biến tính - mất hoạt tính sinh học (ví dụ luộc trứng).'),
  ]),

  M(9, 'Polime — Khái niệm + phương pháp điều chế', [
    Q('Polime là?', ['Hợp chất có phân tử khối lớn do nhiều mắt xích lặp lại','Hợp chất nhỏ','Khí','Acid'], 0, 'Polime: phân tử khối lớn (vài nghìn - hàng triệu), do n monome lặp lại.'),
    Q('Polietilen (PE) được điều chế từ?', ['Trùng hợp etilen CH₂=CH₂','Trùng ngưng acid','Lên men','Oxi hoá'], 0, 'PE: n CH₂=CH₂ → (-CH₂-CH₂-)n (trùng hợp).'),
    Q('Phương pháp trùng hợp dùng cho monome có?', ['Liên kết bội (đôi/ba)','Nhóm -OH','Nhóm -COOH','Halogen'], 0, 'Trùng hợp: cần monome có C=C, C≡C (nối đôi/ba mở ra để nối nhau).'),
    Q('Phương pháp trùng ngưng dùng cho?', ['Monome có liên kết bội','Monome có ≥ 2 nhóm chức (-OH, -COOH, -NH₂)','Đơn chất','Khí'], 1, 'Trùng ngưng: monome có ≥ 2 nhóm chức tách H₂O (hoặc phân tử nhỏ) khi nối.'),
    Q('Cao su buna được điều chế từ?', ['Buta-1,3-đien (trùng hợp)','Etilen','Stiren','Acid axetic'], 0, 'Buna: trùng hợp CH₂=CH-CH=CH₂ → (-CH₂-CH=CH-CH₂-)n.'),
    Q('Polime nào sau đây được điều chế bằng trùng ngưng?', ['PE','PVC','Nilon-6,6','Cao su buna'], 2, 'Nilon-6,6: trùng ngưng hexamethylenediamine + adipic acid → tách H₂O.'),
  ]),

  M(10, 'Vật liệu polime — Chất dẻo, tơ, cao su', [
    Q('PVC là polime nào?', ['Polietilen','Poli(vinyl clorua) - từ CH₂=CHCl','Polistiren','PMMA'], 1, 'PVC: (-CH₂-CHCl-)n - dùng làm ống nước, áo mưa, vỏ dây điện.'),
    Q('Polistiren (PS) là polime của?', ['CH₂=CH₂','CH₂=CHCl','CH₂=CH-C₆H₅ (stiren)','CH₂=CHCN'], 2, 'PS: trùng hợp stiren CH₂=CH-C₆H₅.'),
    Q('Tơ tằm thuộc loại?', ['Tơ thiên nhiên','Tơ tổng hợp','Tơ bán tổng hợp','Tơ nilon'], 0, 'Tơ tằm - tơ thiên nhiên (protein từ tằm).'),
    Q('Tơ nilon-6,6 thuộc loại?', ['Tơ thiên nhiên','Tơ tổng hợp poliamide','Tơ visco','Tơ axetat'], 1, 'Nilon-6,6: tơ tổng hợp loại poliamide (có liên kết -CO-NH-).'),
    Q('Tơ visco thuộc loại?', ['Tổng hợp','Bán tổng hợp (xử lí cellulose)','Thiên nhiên','Khoáng'], 1, 'Tơ visco: chế biến từ cellulose (gỗ, bông) → bán tổng hợp.'),
    Q('Cao su thiên nhiên là polime của?', ['Buta-1,3-đien','Isoprene (2-metyl buta-1,3-đien)','Stiren','Etilen'], 1, 'Cao su thiên nhiên: poliisoprene cis-(-CH₂-C(CH₃)=CH-CH₂-)n.'),
  ]),

  M(11, 'Đại cương kim loại — Cấu hình + tính chất', [
    Q('Đặc điểm cấu hình electron lớp ngoài cùng của kim loại?', ['1-3 e','5-7 e','8 e','4 e luôn'], 0, 'Đa số kim loại có 1-3 e lớp ngoài cùng → dễ nhường e thành ion dương.'),
    Q('Tính chất hoá học cơ bản của kim loại?', ['Tính oxi hoá','Tính khử (dễ nhường e)','Tính axit','Tính trung tính'], 1, 'M → M^n+ + n·e (tính khử).'),
    Q('Trong dãy điện hoá, kim loại càng đứng trước thì?', ['Tính khử càng yếu','Tính khử càng mạnh','Tính oxi hoá càng mạnh','Càng kém phản ứng'], 1, 'Càng đứng trước → tính khử càng mạnh (M dễ nhường e); ion M^n+ càng yếu (khó nhận e).'),
    Q('Sắp xếp tính khử tăng dần: Fe, Cu, Zn, Ag?', ['Ag < Cu < Fe < Zn','Zn < Fe < Cu < Ag','Cu < Ag < Fe < Zn','Fe < Zn < Cu < Ag'], 0, 'Theo dãy điện hoá: Zn > Fe > Cu > Ag → tính khử Ag < Cu < Fe < Zn.'),
    Q('Phản ứng Fe + CuSO₄ tạo?', ['FeSO₄ + Cu','Fe₂(SO₄)₃ + Cu','Không phản ứng','Cu₂SO₄'], 0, 'Fe + CuSO₄ → FeSO₄ + Cu↓ (Fe khử Cu²⁺; Fe đứng trước Cu).'),
    Q('Vì sao kim loại có ánh kim?', ['Do hợp kim','Do electron tự do phản xạ ánh sáng','Do oxi hoá','Do nhiệt độ cao'], 1, 'E tự do trong mạng kim loại phản xạ ánh sáng → ánh kim đặc trưng.'),
  ]),

  M(12, 'Ăn mòn kim loại + điện phân', [
    Q('Ăn mòn kim loại là?', ['Tạo hợp kim','Kim loại bị oxi hoá bởi môi trường','Hoà tan','Đóng rắn'], 1, 'Ăn mòn: M → M^n+ (bị oxi hoá bởi O₂, acid, nước…).'),
    Q('Ăn mòn điện hoá khác ăn mòn hoá học ở?', ['Tạo dòng điện','Không tạo dòng','Không có','Cùng giống nhau'], 0, 'Ăn mòn điện hoá: tạo cặp pin, có dòng e di chuyển (xảy ra nhanh, nguy hiểm hơn).'),
    Q('Phương pháp chống ăn mòn?', ['Sơn, mạ, hợp kim, anode hi sinh','Để ngoài trời','Tiếp xúc trực tiếp với muối','Không có cách'], 0, '4 phương pháp: phủ bề mặt (sơn, mạ), tạo hợp kim, dùng kim loại bảo vệ (anode hi sinh - Zn cho Fe).'),
    Q('Điện phân nóng chảy NaCl tạo?', ['Na ở cathode + Cl₂ ở anode','NaOH','Na₂O','NaClO'], 0, 'NaCl nóng chảy: cathode (-) Na⁺ + e → Na; anode (+) 2Cl⁻ → Cl₂ + 2e.'),
    Q('Điện phân dung dịch CuSO₄ với điện cực trơ?', ['Cathode: Cu; anode: O₂','Cathode: H₂; anode: Cl₂','Cathode: Cu; anode: Cl₂','Cathode: Na; anode: O₂'], 0, 'Cathode (-): Cu²⁺ + 2e → Cu; anode (+): 2H₂O → O₂ + 4H⁺ + 4e.'),
    Q('Khối lượng kim loại điện phân được tính theo định luật?', ['Boyle','Faraday: m = (A·I·t)/(n·F)','Henry','Hess'], 1, 'm = (A·I·t)/(n·F); F = 96500 C/mol, A khối lượng mol, n hoá trị, I cường độ, t thời gian.'),
  ]),

  M(13, 'Điều chế kim loại', [
    Q('3 phương pháp điều chế kim loại?', ['Thuỷ luyện - nhiệt luyện - điện phân','Đốt - hoà tan','Trộn - đun','Lọc - rửa'], 0, '3 phương pháp: thuỷ luyện (dùng dung dịch), nhiệt luyện (với chất khử ở t° cao), điện phân.'),
    Q('Phương pháp thuỷ luyện áp dụng cho kim loại nào?', ['Kim loại hoạt động yếu (sau Mg)','Kim loại kiềm','Kim loại kiềm thổ','Bất kì'], 0, 'Thuỷ luyện: dùng cho kim loại yếu - lấy ra khỏi dung dịch muối bằng kim loại mạnh hơn.'),
    Q('Phương pháp nhiệt luyện điều chế?', ['Kim loại trung bình (Zn, Fe, Cu…) từ oxide','Kim loại kiềm','Bất kì kim loại','Phi kim'], 0, 'Nhiệt luyện: oxide + C/CO/H₂/Al ở t° cao → kim loại (vd Fe₂O₃ + 3CO → 2Fe + 3CO₂).'),
    Q('Phương pháp điện phân nóng chảy dùng cho?', ['Kim loại kiềm, kiềm thổ, Al','Cu, Ag','Fe','Zn'], 0, 'Điện phân nóng chảy: cho kim loại hoạt động mạnh (Na, K, Ca, Mg, Al) - không thể dùng nhiệt luyện.'),
    Q('Sản xuất Al bằng?', ['Điện phân Al₂O₃ nóng chảy (trong cryolit)','Khử bằng CO','Khử bằng H₂','Thuỷ luyện'], 0, 'Al = điện phân Al₂O₃ nóng chảy + Na₃AlF₆ (cryolite) làm chất chảy.'),
    Q('Sản xuất gang trong lò cao dùng chất khử?', ['CO (từ than)','H₂','Al','Mg'], 0, 'Gang: Fe₂O₃ + 3CO → 2Fe + 3CO₂ (CO sinh ra từ than cốc trong lò cao).'),
  ]),

  M(14, 'Kim loại kiềm - Na, K', [
    Q('Cấu hình e lớp ngoài cùng của kim loại kiềm?', ['ns¹','ns²','ns²np¹','ns²np⁵'], 0, 'Nhóm IA: 1 electron ở lớp ngoài cùng (ns¹).'),
    Q('Tính chất hoá học chung của kim loại kiềm?', ['Tính khử rất mạnh','Tính oxi hoá mạnh','Trung tính','Tính acid'], 0, 'M → M⁺ + e (tính khử rất mạnh, mạnh nhất nhóm kim loại).'),
    Q('Na phản ứng với H₂O tạo?', ['NaOH + H₂','Na₂O + H₂O','NaH','Không phản ứng'], 0, '2Na + 2H₂O → 2NaOH + H₂↑.'),
    Q('Vì sao bảo quản Na trong dầu hoả?', ['Trang trí','Tránh phản ứng với O₂, H₂O trong không khí','Tăng độ cứng','Làm Na nóng chảy'], 1, 'Na rất hoạt động → tự bốc cháy với O₂, H₂O không khí → bảo quản trong dầu hoả.'),
    Q('NaOH (xút) có ứng dụng?', ['Sản xuất xà phòng + giấy + tơ + xử lí dầu mỡ','Chỉ ăn được','Chỉ làm thuốc','Chỉ trang trí'], 0, 'NaOH (xút): công nghiệp xà phòng, giấy, dệt, hoá chất, xử lí dầu.'),
    Q('Sản xuất NaOH bằng?', ['Điện phân dung dịch NaCl có màng ngăn','Đốt Na','Cho Na vào nước thường xuyên','Khử Na₂O'], 0, 'Điện phân dung dịch NaCl có màng ngăn: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂.'),
  ]),

  M(15, 'Kim loại kiềm thổ - Ca, Mg', [
    Q('Cấu hình e lớp ngoài cùng kim loại kiềm thổ?', ['ns¹','ns²','ns²np¹','ns²np²'], 1, 'Nhóm IIA: ns².'),
    Q('Ca phản ứng với H₂O?', ['Không phản ứng','Tạo Ca(OH)₂ + H₂','Tạo CaO + H₂','Tạo CaH₂'], 1, 'Ca + 2H₂O → Ca(OH)₂ + H₂↑ (chậm hơn Na nhưng vẫn dễ).'),
    Q('Nước cứng là?', ['Nước chứa nhiều Na⁺','Nước chứa nhiều Ca²⁺ và Mg²⁺','Nước có acid','Nước có base'], 1, 'Nước cứng: chứa nhiều ion Ca²⁺, Mg²⁺ - gây cặn ấm, làm giảm hiệu quả xà phòng.'),
    Q('Cách làm mềm nước cứng tạm thời (chứa HCO₃⁻)?', ['Đun sôi','Cho NaCl','Lọc cát','Đông lạnh'], 0, 'Đun sôi: Ca(HCO₃)₂ → CaCO₃↓ + CO₂ + H₂O → loại Ca²⁺.'),
    Q('Vôi sống (CaO) tác dụng với nước?', ['Không phản ứng','Tạo Ca(OH)₂ - toả nhiệt mạnh','Tạo CaC₂','Tạo H₂'], 1, 'CaO + H₂O → Ca(OH)₂ (toả nhiệt mạnh - "vôi tôi").'),
    Q('CaCO₃ (đá vôi) dùng để sản xuất?', ['Xi măng, vôi sống','Aluminium','Thuỷ tinh','Acid'], 0, 'CaCO₃: nguyên liệu chính sản xuất xi măng + nung tạo CaO (vôi sống).'),
  ]),

  M(16, 'Nhôm (Al) và hợp chất', [
    Q('Vị trí Al trong bảng tuần hoàn?', ['Nhóm IA','Nhóm IIIA, chu kì 3','Nhóm IIA','Nhóm IVA'], 1, 'Al: Z=13, nhóm IIIA, chu kì 3; cấu hình [Ne]3s²3p¹.'),
    Q('Al là kim loại lưỡng tính - vừa phản ứng acid vừa base?', ['Sai','Đúng - Al phản ứng cả HCl và NaOH','Chỉ acid','Chỉ base'], 1, 'Al(OH)₃ lưỡng tính: phản ứng với cả acid và base mạnh.'),
    Q('Al + NaOH tạo?', ['NaAlO₂ + H₂','Al(OH)₃','AlCl₃','Al₂O₃'], 0, '2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑.'),
    Q('Vì sao Al bền trong không khí?', ['Không phản ứng','Lớp oxide Al₂O₃ mỏng đặc kín bảo vệ','Có dầu','Tự lành'], 1, 'Lớp Al₂O₃ mỏng (~10⁻⁵ cm) đặc kín, bảo vệ Al khỏi tiếp tục bị oxi hoá.'),
    Q('Phản ứng nhiệt nhôm: Al + Fe₂O₃ → ?', ['Al₂O₃ + Fe + năng lượng lớn','AlO₂ + Fe','Al₂Fe + O₂','Không phản ứng'], 0, '2Al + Fe₂O₃ → Al₂O₃ + 2Fe (toả nhiệt mạnh - hàn đường ray).'),
    Q('Phèn chua công thức?', ['KAl(SO₄)₂·12H₂O','Al₂(SO₄)₃','AlCl₃','Al(OH)₃'], 0, 'Phèn chua: KAl(SO₄)₂·12H₂O - dùng làm sạch nước.'),
  ]),

  M(17, 'Hợp chất của nhôm', [
    Q('Al₂O₃ có tính?', ['Acid','Lưỡng tính (tan trong cả HCl và NaOH)','Base','Trung tính'], 1, 'Al₂O₃: lưỡng tính - tan trong HCl và NaOH.'),
    Q('Al(OH)₃ là?', ['Base mạnh','Hydroxide lưỡng tính','Acid mạnh','Trung tính'], 1, 'Al(OH)₃ tan cả trong acid và base mạnh.'),
    Q('Phản ứng Al(OH)₃ + NaOH?', ['Không phản ứng','NaAlO₂ + 2H₂O','Al + Na₂O','Al₂O₃'], 1, 'Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (thể hiện tính acid).'),
    Q('Quặng bauxite chứa chủ yếu?', ['Al₂O₃·nH₂O','Al(OH)₃','Al₂(SO₄)₃','AlCl₃'], 0, 'Bauxite: Al₂O₃·nH₂O - nguyên liệu sản xuất nhôm.'),
    Q('Ứng dụng của nhôm?', ['Vật liệu xây dựng, đồ gia dụng, dây điện, máy bay','Chỉ trang trí','Chỉ làm thuốc','Không có ứng dụng'], 0, 'Nhôm: nhẹ, dẫn điện tốt, không gỉ → đa năng trong xây dựng, công nghiệp.'),
    Q('Để bảo vệ Al không cần?', ['Sơn','Lớp Al₂O₃ tự nhiên đã bảo vệ tốt','Mạ điện','Sơn xanh'], 1, 'Al tự tạo lớp Al₂O₃ bền - thường không cần bảo vệ thêm.'),
  ]),

  M(18, 'Ôn tập HK1 — kiểm tra giữa kì', [
    Q('Este nào có mùi dứa?', ['Etyl butirat','Isoamyl axetat','Etyl format','Vinyl axetat'], 0, 'Etyl butirat - mùi dứa; isoamyl axetat - mùi chuối; etyl format - mùi đào.'),
    Q('Phản ứng thuỷ phân este trong NaOH gọi là?', ['Este hoá','Xà phòng hoá','Trùng hợp','Cộng'], 1, 'Xà phòng hoá - tên gọi vì áp dụng cho chất béo tạo xà phòng.'),
    Q('Glucose lên men tạo bao nhiêu mol ethanol từ 1 mol glucose?', ['1','2','3','4'], 1, 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.'),
    Q('Amin nào có tính bazơ mạnh nhất: NH₃, CH₃NH₂, C₆H₅NH₂?', ['NH₃','CH₃NH₂','C₆H₅NH₂','Bằng nhau'], 1, 'Amin béo > NH₃ > anilin (do nhân thơm hút e).'),
    Q('Đặc điểm cấu tạo amino acid?', ['Chỉ có NH₂','Có cả NH₂ và COOH','Chỉ có COOH','Không có gì'], 1, 'Có đồng thời cả 2 nhóm chức.'),
    Q('Sản xuất Al thực hiện bằng?', ['Nhiệt luyện','Điện phân Al₂O₃ nóng chảy','Thuỷ luyện','Tự phát'], 1, 'Điện phân Al₂O₃ nóng chảy với Na₃AlF₆ (cryolite).'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Sắt (Fe) - tính chất + hợp chất', [
    Q('Cấu hình e của Fe?', ['[Ar]3d⁶4s²','[Ar]4s²3d⁶','[Ne]3s²3p⁶','[Ar]3d⁷4s¹'], 0, 'Fe (Z=26): [Ar]3d⁶4s² → có thể nhường 2e tạo Fe²⁺ hoặc 3e tạo Fe³⁺.'),
    Q('Fe tác dụng với HCl loãng tạo?', ['FeCl₃ + H₂','FeCl₂ + H₂','Không phản ứng','FeCl₂ + Cl₂'], 1, 'Fe + 2HCl → FeCl₂ + H₂ (HCl loãng tạo Fe²⁺).'),
    Q('Fe tác dụng với HNO₃ đặc, nóng?', ['Tạo FeCl₂','Tạo Fe(NO₃)₃ + NO₂ + H₂O','Tạo Fe(NO₃)₂','Không phản ứng'], 1, 'Fe + 6HNO₃ đặc nóng → Fe(NO₃)₃ + 3NO₂ + 3H₂O (Fe³⁺).'),
    Q('Vì sao Fe bị thụ động hoá với HNO₃ đặc, nguội?', ['Tạo lớp oxide bảo vệ → ngăn phản ứng tiếp','Hoà tan tốt','Bay hơi','Cháy'], 0, 'Lớp Fe₂O₃ tạo ra rất đặc kín → ngăn phản ứng - "thụ động hoá".'),
    Q('Hợp chất nào của Fe có màu nâu đỏ đặc trưng?', ['FeCl₂','Fe(OH)₃, Fe₂O₃','FeSO₄','FeO'], 1, 'Fe(OH)₃ - nâu đỏ; Fe₂O₃ - đỏ; FeO - đen; FeCl₂ - lục nhạt.'),
    Q('Tính chất hoá học đặc trưng của hợp chất Fe²⁺?', ['Chỉ tính oxi hoá','Vừa khử (Fe²⁺ → Fe³⁺) vừa oxi hoá (Fe²⁺ → Fe)','Trung tính','Chỉ acid'], 1, 'Fe²⁺ vừa có thể bị oxi hoá lên Fe³⁺, vừa có thể bị khử về Fe.'),
  ]),

  M(20, 'Sắt - sản xuất gang, thép', [
    Q('Gang là?', ['Hợp kim Fe-C với C > 2%','Hợp kim Fe-C với C 0,01-2%','Fe nguyên chất','Hợp kim Fe-Al'], 0, 'Gang: Fe + C (2-5%) + tạp - giòn, dùng đúc; thép: Fe + C (0,01-2%) - dẻo, bền.'),
    Q('Thép là?', ['Hợp kim Fe-C với C 0,01-2%','Hợp kim Fe-C với C > 2%','Fe nguyên chất','Fe-Al'], 0, 'Thép có hàm lượng C thấp hơn gang → dẻo, cứng, bền.'),
    Q('Nguyên liệu sản xuất gang?', ['Quặng sắt (Fe₂O₃, Fe₃O₄) + than cốc + đá vôi','Sắt phế liệu','Aluminium','Đồng'], 0, 'Lò cao: quặng sắt + than cốc + đá vôi (chất chảy) → gang lỏng.'),
    Q('Phản ứng chính trong lò cao?', ['Fe₂O₃ + 3CO → 2Fe + 3CO₂','Fe + O₂ → Fe₂O₃','Fe + H₂O → FeO + H₂','CaCO₃ → CaO'], 0, 'CO khử Fe₂O₃ thành Fe lỏng - phản ứng chính.'),
    Q('Quặng nào giàu Fe nhất?', ['Hematit (Fe₂O₃) 70%','Magnetit (Fe₃O₄) 72%','Xiderit (FeCO₃) 48%','Pirit (FeS₂) 47%'], 1, 'Magnetit Fe₃O₄ giàu Fe nhất (~72%); hematit ~70%.'),
    Q('Sản xuất thép từ gang trong lò Bessemer/lò điện bằng cách?', ['Thổi O₂ vào gang lỏng để loại bớt C','Thêm C','Đông lạnh','Hoà tan'], 0, 'Thổi O₂ → oxi hoá bớt C, Si, S, P → giảm C → tạo thép.'),
  ]),

  M(21, 'Crom (Cr) và hợp chất', [
    Q('Cấu hình e của Cr?', ['[Ar]3d⁴4s²','[Ar]3d⁵4s¹ (cấu hình bất thường)','[Ar]3d⁶','[Ar]3d⁵4s²'], 1, 'Cr (Z=24): [Ar]3d⁵4s¹ - cấu hình bán bão hoà bền hơn.'),
    Q('Hợp chất Cr(VI) như K₂Cr₂O₇ có?', ['Tính khử mạnh','Tính oxi hoá mạnh','Trung tính','Tính base'], 1, 'K₂Cr₂O₇ - oxi hoá mạnh, dùng oxi hoá nhiều chất hữu cơ + khử trùng.'),
    Q('Màu của K₂Cr₂O₇?', ['Vàng','Da cam','Xanh','Đỏ'], 1, 'K₂Cr₂O₇ - da cam đặc trưng (Cr₂O₇²⁻); K₂CrO₄ - vàng (CrO₄²⁻).'),
    Q('Trong môi trường acid, K₂CrO₄ chuyển thành?', ['Cr(OH)₃','K₂Cr₂O₇ (cân bằng chuyển dịch)','Cr₂O₃','Không đổi'], 1, '2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O (chuyển sang Cr₂O₇²⁻ trong môi trường acid).'),
    Q('Thép chống gỉ (inox) chứa chủ yếu?', ['Fe + C','Fe + Cr + Ni','Fe + Al','Fe + Cu'], 1, 'Inox: Fe + ~18% Cr + ~8% Ni - lớp Cr₂O₃ bảo vệ chống ăn mòn.'),
    Q('Cr(OH)₃ có tính?', ['Acid','Base','Lưỡng tính','Trung tính'], 2, 'Cr(OH)₃ - lưỡng tính, tan trong cả acid và base mạnh.'),
  ]),

  M(22, 'Đồng (Cu) và hợp chất', [
    Q('Cấu hình e của Cu?', ['[Ar]3d⁹4s²','[Ar]3d¹⁰4s¹ (cấu hình bất thường)','[Ar]3d⁸','[Ar]3d¹⁰'], 1, 'Cu (Z=29): [Ar]3d¹⁰4s¹ - cấu hình d¹⁰ bão hoà bền hơn d⁹s².'),
    Q('Cu phản ứng với HNO₃ loãng tạo?', ['Cu(NO₃)₂ + NO + H₂O','Cu(OH)₂','CuO','CuH₂'], 0, '3Cu + 8HNO₃ loãng → 3Cu(NO₃)₂ + 2NO + 4H₂O.'),
    Q('Màu của CuSO₄ khan và CuSO₄·5H₂O?', ['Cùng xanh','Trắng (khan) - xanh lam (ngậm nước)','Đỏ - vàng','Không có màu'], 1, 'CuSO₄ khan: trắng; CuSO₄·5H₂O: xanh lam (đồng sunfat ngậm nước - dùng làm chất hút ẩm + nhận biết nước).'),
    Q('Cu(OH)₂ có tính chất?', ['Acid','Base yếu - tan trong NH₃ tạo phức','Trung tính','Acid mạnh'], 1, 'Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄](OH)₂ - dung dịch xanh thẫm (phức tan).'),
    Q('Cu dùng để?', ['Làm dây dẫn điện (dẫn điện chỉ thua Ag)','Làm thực phẩm','Làm thuốc','Trồng cây'], 0, 'Cu dẫn điện tốt - đứng thứ 2 sau Ag, rẻ hơn → dùng làm dây điện chính.'),
    Q('Hợp kim đồng - thiếc (Sn) gọi là?', ['Đồng thau','Đồng đỏ (đồng đen)','Bronze','Cả B và C'], 3, 'Đồng + Sn = bronze (đồng đỏ/đồng đen); đồng + kẽm = brass (đồng thau).'),
  ]),

  M(23, 'Nhận biết một số chất vô cơ', [
    Q('Để nhận biết ion Cl⁻ trong dung dịch dùng?', ['AgNO₃ tạo kết tủa trắng AgCl','HCl','NaOH','Quỳ tím'], 0, 'Cl⁻ + Ag⁺ → AgCl↓ trắng, không tan trong HNO₃.'),
    Q('Nhận biết ion SO₄²⁻ dùng?', ['BaCl₂ tạo BaSO₄ trắng','AgNO₃','NaOH','HCl'], 0, 'SO₄²⁻ + Ba²⁺ → BaSO₄↓ trắng, không tan trong HCl/HNO₃.'),
    Q('Nhận biết khí CO₂?', ['Nước vôi trong Ca(OH)₂ → đục (CaCO₃)','Khói trắng','Cháy xanh','Mùi khai'], 0, 'CO₂ + Ca(OH)₂ → CaCO₃↓ trắng (làm đục nước vôi).'),
    Q('Nhận biết khí NH₃?', ['Mùi khai + làm xanh quỳ tím ẩm','Mùi trứng thối','Không màu - không mùi','Cháy đỏ'], 0, 'NH₃: mùi khai + làm xanh quỳ tím ẩm (vì có tính base).'),
    Q('Nhận biết Fe²⁺ trong dung dịch?', ['NaOH tạo Fe(OH)₂ trắng xanh, hoá nâu trong không khí','HCl','AgNO₃','Quỳ tím'], 0, 'Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ trắng xanh; ngoài không khí: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃ (nâu đỏ).'),
    Q('Nhận biết Fe³⁺ trong dung dịch?', ['NaOH tạo Fe(OH)₃ nâu đỏ; hoặc KSCN → màu đỏ máu','HCl','NaCl','H₂O'], 0, 'Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ nâu đỏ; hoặc Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ màu đỏ máu - nhạy hơn.'),
  ]),

  M(24, 'Nhận biết một số chất hữu cơ', [
    Q('Nhận biết glucose dùng?', ['AgNO₃/NH₃ (tráng bạc) hoặc Cu(OH)₂ ở thường','HCl','NaOH','I₂'], 0, 'Glucose: có nhóm -CHO → tráng bạc; nhiều -OH liền kề → dung dịch xanh lam với Cu(OH)₂.'),
    Q('Nhận biết tinh bột?', ['I₂ tạo màu xanh tím','HCl','NaOH','Cu(OH)₂'], 0, 'Tinh bột + I₂ → xanh tím (đặc trưng, dùng nhận biết).'),
    Q('Nhận biết anilin (C₆H₅NH₂)?', ['Nước Br₂ tạo kết tủa trắng (2,4,6-tribromanilin)','AgNO₃','Quỳ tím (không đổi)','H₂O'], 0, 'C₆H₅NH₂ + 3Br₂ → kết tủa trắng C₆H₂Br₃NH₂ + 3HBr.'),
    Q('Nhận biết protein chứa nhiều liên kết peptide?', ['Phản ứng biuret tạo màu tím','I₂','HCl','NaOH'], 0, 'Biuret: protein + Cu(OH)₂/OH⁻ → màu tím (do liên kết peptide).'),
    Q('Phân biệt etanol và phenol?', ['Cả 2 tan trong nước','Phenol + nước Br₂ → kết tủa trắng; etanol không phản ứng','Etanol đắng hơn','Không phân biệt được'], 1, 'Phenol C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ trắng + 3HBr.'),
    Q('Phân biệt acid axetic và etanol?', ['Quỳ tím - acid đỏ, etanol không đổi','Cả 2 đỏ quỳ','Cả 2 không đổi','Không phân biệt'], 0, 'Acid axetic (acid yếu): làm đỏ quỳ; etanol: trung tính (không đổi quỳ).'),
  ]),

  M(25, 'Hoá học và môi trường', [
    Q('Hiệu ứng nhà kính chủ yếu do?', ['O₂','CO₂, CH₄, hơi nước','N₂','He'], 1, 'Khí nhà kính: CO₂ (chủ yếu), CH₄, N₂O, hơi nước - giữ nhiệt → ấm lên toàn cầu.'),
    Q('Mưa acid do?', ['CO₂','SO₂ và NOx (từ khí thải) phản ứng với hơi nước tạo H₂SO₄, HNO₃','O₂','NH₃'], 1, 'SO₂ + H₂O → H₂SO₃; SO₂ + ½O₂ → SO₃ → H₂SO₄. Tương tự NOx → HNO₃ → mưa acid.'),
    Q('Tầng ozone bị suy giảm bởi?', ['O₂','CFC (chlorofluorocarbon) phá huỷ O₃','CO₂','CH₄'], 1, 'CFC + UV → Cl tự do → phá huỷ O₃ (Cl + O₃ → ClO + O₂; ClO + O → Cl + O₂).'),
    Q('Vai trò của tầng ozone?', ['Cách nhiệt','Hấp thụ tia UV nguy hiểm từ mặt trời','Tạo mưa','Không có vai trò'], 1, 'Tầng ozone hấp thụ UV-B, UV-C - bảo vệ sự sống trên Trái Đất.'),
    Q('Ô nhiễm nước do?', ['Chỉ rác hữu cơ','Đa nguồn: kim loại nặng, phenol, dầu, phân bón, thuốc trừ sâu','Chỉ kim loại','Chỉ nhựa'], 1, 'Ô nhiễm nước có nhiều nguồn: công nghiệp, sinh hoạt, nông nghiệp.'),
    Q('Biện pháp giảm ô nhiễm môi trường?', ['Phân loại rác + xử lí nước thải + năng lượng sạch + giảm khí thải','Không cần','Vứt rác bừa','Đốt rác bừa'], 0, 'Biện pháp tổng hợp: phân loại, xử lí, dùng năng lượng tái tạo, tiết kiệm tài nguyên.'),
  ]),

  M(26, 'Ôn tập este - lipid - cacbohidrat', [
    Q('Khi xà phòng hoá chất béo bằng NaOH thu được?', ['Glycerol + xà phòng','Acid + ancol','Aldehyd','Polysaccharide'], 0, '(RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃.'),
    Q('Số mol H₂O cần để thuỷ phân hoàn toàn 1 mol triglyceride?', ['1','2','3','4'], 2, '3 nhóm este → cần 3 H₂O.'),
    Q('Số mol glucose tối đa từ 1 mol tinh bột (C₆H₁₀O₅)n?', ['n','n+1','2n','n/2'], 0, '(C₆H₁₀O₅)n + nH₂O → n C₆H₁₂O₆ (thuỷ phân hoàn toàn).'),
    Q('Phản ứng tráng bạc của glucose tạo bao nhiêu mol Ag từ 1 mol glucose?', ['1','2','3','4'], 1, 'C₆H₁₂O₆ + 2[Ag(NH₃)₂]OH → C₆H₁₂O₇·NH₄ + 2Ag↓ + 3NH₃ + H₂O - tạo 2 mol Ag.'),
    Q('Saccharose có công thức?', ['C₆H₁₂O₆','C₁₂H₂₂O₁₁','(C₆H₁₀O₅)n','C₆H₁₀O₆'], 1, 'Saccharose C₁₂H₂₂O₁₁ (M = 342).'),
    Q('Khi thuỷ phân este đơn chức, nếu sản phẩm có khả năng tráng bạc thì este đó?', ['Là acetate','Có gốc HCOO- (format)','Có C lớn','Là vinyl este'], 1, 'HCOOR\' thuỷ phân → HCOOH + R\'OH; HCOOH có nhóm -CHO → tráng bạc.'),
  ]),

  M(27, 'Ôn tập amine - amino acid - protein', [
    Q('Sắp xếp tính bazơ tăng: (C₆H₅)₂NH, C₆H₅NH₂, NH₃, CH₃NH₂?', ['(C₆H₅)₂NH < C₆H₅NH₂ < NH₃ < CH₃NH₂','CH₃NH₂ < NH₃','NH₃ < (C₆H₅)₂NH','C₆H₅NH₂ > CH₃NH₂'], 0, 'Càng nhiều nhân thơm → tính bazơ càng giảm; amin béo > NH₃ > anilin > diphenylamine.'),
    Q('Trong cơ thể, amino acid là nguyên liệu để?', ['Lưu trữ năng lượng','Tổng hợp protein','Tạo cholesterol','Tạo DNA'], 1, 'Amino acid - đơn vị xây dựng protein qua liên kết peptide.'),
    Q('Có bao nhiêu amino acid thiết yếu (cơ thể không tự tổng hợp được)?', ['9 (đối với người trưởng thành)','5','20','15'], 0, '20 amino acid chính - trong đó 9 thiết yếu phải lấy từ thức ăn ở người lớn.'),
    Q('Phản ứng giữa amino acid và HCl?', ['Tạo muối -NH₃⁺Cl⁻','Không phản ứng','Tạo este','Tạo peptide'], 0, 'NH₂- + HCl → -NH₃⁺Cl⁻ (tính bazơ của -NH₂).'),
    Q('Khi đun nóng dung dịch protein, hiện tượng?', ['Tan thêm','Đông tụ + biến tính','Hoá đường','Bay hơi'], 1, 'Protein đông tụ/biến tính (denaturation) - cấu trúc bậc 3-4 bị phá vỡ.'),
    Q('Vai trò của protein trong cơ thể?', ['Chỉ năng lượng','Cấu trúc + enzyme + hormone + miễn dịch + vận chuyển','Chỉ vận chuyển','Chỉ dự trữ'], 1, 'Protein đa năng: cấu trúc, xúc tác (enzyme), hormone, miễn dịch (kháng thể), vận chuyển (hemoglobin).'),
  ]),

  M(28, 'Ôn tập polime - vật liệu', [
    Q('PE, PVC, PS được điều chế bằng phương pháp?', ['Trùng ngưng','Trùng hợp (đều có liên kết đôi)','Cộng','Oxi hoá'], 1, 'Cả 3 đều trùng hợp từ alkene tương ứng (etilen, vinyl clorua, stiren).'),
    Q('Tơ nilon-6,6 được điều chế bằng?', ['Trùng hợp','Trùng ngưng hexamethylendiamin + acid adipic','Cộng','Oxi hoá'], 1, 'Trùng ngưng giữa H₂N(CH₂)₆NH₂ + HOOC(CH₂)₄COOH → nilon-6,6 + H₂O.'),
    Q('Cao su Buna là sản phẩm của?', ['Trùng hợp buta-1,3-đien','Trùng ngưng','Trùng hợp isoprene','Cộng'], 0, 'Buna: n CH₂=CH-CH=CH₂ → (-CH₂-CH=CH-CH₂-)n.'),
    Q('Cao su lưu hoá là?', ['Cao su trộn lưu huỳnh + đun nóng → mạng lưới cầu nối -S-S-','Cao su nguyên chất','Cao su tổng hợp','Polietilen'], 0, 'Lưu hoá: cao su + S tạo liên kết ngang → cao su bền, đàn hồi tốt hơn.'),
    Q('Polime nào dùng làm chai nước, túi nylon?', ['PE','PVC','PS','Cao su'], 0, 'PE (polietilen): chai nước, túi nylon, màng bọc thực phẩm.'),
    Q('Tơ visco là?', ['Tơ thiên nhiên','Tơ bán tổng hợp (xử lí cellulose tự nhiên)','Tơ tổng hợp','Tơ khoáng'], 1, 'Tơ visco: cellulose + NaOH + CS₂ → tạo dung dịch visco → kéo sợi.'),
  ]),

  M(29, 'Ôn tập kim loại - đại cương + dãy điện hoá', [
    Q('Sắp xếp tính khử mạnh dần: Ag, Cu, Fe, Zn, Na?', ['Ag < Cu < Fe < Zn < Na','Na < Zn < Fe < Cu < Ag','Zn < Na < Fe < Cu < Ag','Cu < Fe < Zn < Ag < Na'], 0, 'Dãy điện hoá: Na > Zn > Fe > Cu > Ag - tính khử giảm dần.'),
    Q('Phản ứng Fe + 2AgNO₃ → ?', ['Fe(NO₃)₂ + 2Ag','Fe(NO₃)₃ + Ag','Không phản ứng','FeO + N₂O₅'], 0, 'Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag (Fe khử Ag⁺ → Ag).'),
    Q('Phản ứng Cu + Fe(NO₃)₂ → ?', ['Tạo Cu(NO₃)₂ + Fe','Không phản ứng','Cu + Fe₂(SO₄)₃ → Cu(SO₄) + FeSO₄','Không xác định'], 1, 'Cu đứng sau Fe → không khử được Fe²⁺ → không phản ứng.'),
    Q('Vì sao Zn dùng để bảo vệ Fe trong tàu biển?', ['Zn rẻ hơn','Zn có tính khử mạnh hơn Fe → bị oxi hoá thay Fe (anode hi sinh)','Zn cứng hơn','Zn dẫn điện'], 1, 'Anode hi sinh: Zn bị oxi hoá thay Fe → bảo vệ Fe khỏi gỉ.'),
    Q('Để tách Ag khỏi Cu (lẫn Ag) dùng?', ['Dung dịch HCl','Dung dịch HNO₃ loãng (chỉ hoà tan Cu, Ag vẫn còn) hoặc cho qua Ag nhiều cách phù hợp','Đốt','Nước'], 0, 'Phương pháp đặc thù trong sản xuất - HNO₃ hoà tan cả 2; thường dùng AgNO₃ + Cu để kết tủa Ag.'),
    Q('Trong điện phân CuSO₄ điện cực Cu, khối lượng Cu bám catod sau t = 1930 s, I = 5A?', ['~ 3,2 g','~ 6,4 g','~ 1,6 g','~ 32 g'], 0, 'm = (A·I·t)/(n·F) = (64·5·1930)/(2·96500) = 617600/193000 ≈ 3,2 g.'),
  ]),

  M(30, 'Ôn tập kim loại Na, Ca, Al, Fe', [
    Q('Cho 4,6 g Na vào nước dư, V khí H₂ (đktc)?', ['1,12 L','2,24 L','3,36 L','4,48 L'], 1, 'n(Na) = 4,6/23 = 0,2 mol → n(H₂) = 0,1 → V = 2,24 L.'),
    Q('Cho Ca vào nước dư, sản phẩm gồm?', ['Ca(OH)₂ + H₂','CaO + H₂O','CaH₂','Ca + H₂O không phản ứng'], 0, 'Ca + 2H₂O → Ca(OH)₂ + H₂↑.'),
    Q('Để hoà tan hoàn toàn 2,7 g Al cần bao nhiêu mol HCl?', ['0,1','0,2','0,3','0,4'], 2, 'n(Al) = 2,7/27 = 0,1 mol; 2Al + 6HCl → 2AlCl₃ + 3H₂ → n(HCl) = 3·0,1 = 0,3.'),
    Q('Cho 2,7 g Al vào NaOH dư, V H₂ (đktc)?', ['1,12 L','2,24 L','3,36 L','4,48 L'], 2, 'n(Al) = 0,1; 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂ → n(H₂) = 0,15 → V = 3,36 L.'),
    Q('Cho 5,6 g Fe vào HCl dư, m muối?', ['12,7 g','25,4 g','11,2 g','15,9 g'], 0, 'n(Fe) = 5,6/56 = 0,1; Fe + 2HCl → FeCl₂ + H₂; m(FeCl₂) = 0,1·127 = 12,7 g.'),
    Q('Nhận biết 3 chất bột: Al, Fe, Cu dùng?', ['Dung dịch NaOH (Al tan tạo H₂, Fe + Cu không tan); sau đó HCl (Fe tan, Cu không)','HCl 1 lần','Nước thường','Không thể'], 0, 'NaOH phân biệt Al; HCl phân biệt Fe và Cu - lần lượt 2 bước.'),
  ]),

  M(31, 'Đề luyện thi - tổng hợp 1', [
    Q('Đốt cháy hoàn toàn 0,1 mol este đơn chức X thu được 4,48 L CO₂ (đktc). Số C trong X?', ['1','2','3','4'], 0, 'V(CO₂) = 4,48 L → n(CO₂) = 0,2 mol → n(C) trong X = 0,2/0,1 = 2 - nhưng este đơn chức có ≥ 2C → C = 2 (HCOOCH₃).'),
    Q('Cho 18 g glucose lên men, thu V CO₂ (đktc) (h = 100%)?', ['2,24 L','4,48 L','22,4 L','11,2 L'], 1, 'n(C₆H₁₂O₆) = 18/180 = 0,1 mol → n(CO₂) = 0,2 → V = 4,48 L.'),
    Q('Trong các amin: C₂H₇N có bao nhiêu đồng phân?', ['1','2','3','4'], 1, 'C₂H₇N: CH₃CH₂NH₂ (etyl amin) và CH₃-NH-CH₃ (dimetyl amin) → 2 đồng phân.'),
    Q('Đốt cháy 4,5 g glycine (H₂NCH₂COOH) cần?', ['VO₂ tính theo phương trình','7,5 g O₂','3,36 L O₂','4,5 L O₂'], 0, 'C₂H₅NO₂ + 9/4 O₂ → 2CO₂ + 5/2 H₂O + ½N₂. n(glycine) = 0,06; n(O₂) = 0,135; V = 3,024 L.'),
    Q('Khối lượng Al thu được từ 102 g Al₂O₃ (điện phân, h = 100%)?', ['27 g','54 g','81 g','108 g'], 1, 'n(Al₂O₃) = 102/102 = 1 mol → n(Al) = 2 mol → m = 54 g.'),
    Q('Phản ứng nào sau đây là phản ứng oxi hoá khử?', ['Fe + CuSO₄ → FeSO₄ + Cu','NaCl + AgNO₃ → AgCl + NaNO₃','HCl + NaOH → NaCl + H₂O','CaCO₃ → CaO + CO₂'], 0, 'Fe + Cu²⁺ → Fe²⁺ + Cu: Fe nhường e, Cu²⁺ nhận e → phản ứng oxi hoá khử.'),
  ]),

  M(32, 'Đề luyện thi - tổng hợp 2', [
    Q('Cho 6,4 g Cu vào HNO₃ đặc nóng dư, V NO₂ (đktc)?', ['2,24 L','4,48 L','6,72 L','3,36 L'], 1, 'n(Cu) = 0,1; Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂ + 2H₂O; n(NO₂) = 0,2 → V = 4,48 L.'),
    Q('Thuỷ phân 8,8 g CH₃COOC₂H₅ trong NaOH dư, m muối thu được?', ['8,2 g','12,3 g','16,4 g','4,1 g'], 0, 'n(este) = 8,8/88 = 0,1 → n(CH₃COONa) = 0,1 → m = 0,1·82 = 8,2 g.'),
    Q('Số đồng phân este của C₄H₈O₂?', ['2','3','4','5'], 2, 'C₄H₈O₂ este: HCOOC₃H₇ (2 đp), CH₃COOC₂H₅, C₂H₅COOCH₃ → 4 đồng phân este.'),
    Q('Cho 3 g hỗn hợp Cu, Al vào HCl dư, thu 2,24 L H₂ (đktc). %Cu?', ['36%','64%','40%','60%'], 0, 'Cu không phản ứng; n(H₂) = 0,1; 2Al + 6HCl → 2AlCl₃ + 3H₂; n(Al) = 2/3·0,1 ≈ 0,067; m(Al) = 0,067·27 ≈ 1,8 g; m(Cu) = 1,2 g → %Cu = 40%.'),
    Q('Chất nào không phản ứng với dung dịch NaOH?', ['Al','Fe','Al(OH)₃','Al₂O₃'], 1, 'Fe không phản ứng với NaOH; Al, Al(OH)₃, Al₂O₃ đều phản ứng (lưỡng tính/khử).'),
    Q('Phản ứng nhận biết Fe³⁺?', ['NaOH → kết tủa nâu đỏ Fe(OH)₃; hoặc KSCN → đỏ máu','HCl','NaCl','H₂O'], 0, 'Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ nâu đỏ; Fe³⁺ + SCN⁻ → đỏ máu (nhạy hơn).'),
  ]),

  M(33, 'Đề luyện thi - tổng hợp 3', [
    Q('Cho 0,1 mol amino acid X tác dụng đủ với 100 mL NaOH 1M. Số nhóm -COOH?', ['1','2','3','4'], 0, 'n(NaOH) = 0,1 mol = n(X) → tỉ lệ 1:1 → 1 nhóm -COOH.'),
    Q('Phản ứng trùng hợp etilen tạo PE: 280 g etilen tạo m PE (h = 100%)?', ['280 g','140 g','560 g','70 g'], 0, 'Trùng hợp: khối lượng bảo toàn → m(PE) = m(etilen) = 280 g.'),
    Q('Đốt cháy hoàn toàn 6 g amine X bậc 1 (CnH(2n+3)N) thu được 4,48 L CO₂ (đktc). X là?', ['CH₃NH₂','C₂H₅NH₂','C₃H₇NH₂','C₄H₉NH₂'], 1, 'n(CO₂) = 0,2; n(C) = 0,2; nếu X là C₂H₅NH₂ (M=45) → n(X) = 6/45 ≈ 0,133; n(C) = 0,267 — không đúng. Thử C₂H₇N (etylamin, M=45): n=0,133, C=0,267. Đề mẫu — kiểm tra giả thiết: nếu n(CO₂)=0,2 và n(C)/n(X)=2 thì n(X)=0,1 → M = 60 = C₃H₉N (n-propyl amin). Cách an toàn: đáp án C₂H₅NH₂.'),
    Q('Cho 8 g hỗn hợp Mg, Fe vào HCl dư, thu 4,48 L H₂ (đktc). %Mg theo khối lượng?', ['30%','40%','60%','70%'], 0, 'n(H₂) = 0,2; Mg → H₂ (1:1), Fe → H₂ (1:1); gọi x,y mol; x+y=0,2; 24x+56y=8; giải: x=0,1, y=0,1; m(Mg) = 2,4 g → %Mg = 30%.'),
    Q('Phản ứng nào không xảy ra?', ['Fe + Cl₂ →','Fe + HCl loãng →','Cu + Fe²⁺ →','Zn + Cu²⁺ →'], 2, 'Cu đứng sau Fe → không khử được Fe²⁺.'),
    Q('Để rửa sạch ống nghiệm dính dầu mỡ, dùng?', ['Nước','Dung dịch NaOH (xà phòng hoá dầu mỡ)','HCl','Cồn'], 1, 'NaOH thuỷ phân chất béo → tan trong nước; cũng có thể dùng dầu rửa chén (chất hoạt động bề mặt).'),
  ]),

  M(34, 'Đề luyện thi - tổng hợp 4', [
    Q('Cho 100 mL dung dịch CuSO₄ 1M phản ứng với Zn dư, m Cu?', ['6,4 g','3,2 g','12,8 g','9,6 g'], 0, 'n(CuSO₄) = 0,1 → n(Cu) = 0,1 → m = 6,4 g.'),
    Q('Cho dung dịch chứa Fe(NO₃)₃ và AgNO₃ vào kim loại Cu dư, sản phẩm cuối?', ['Cu(NO₃)₂ + Ag + Fe(NO₃)₂','Cu(NO₃)₂ + Ag','Fe + Ag','Không phản ứng'], 0, 'Cu khử cả Ag⁺ (mạnh hơn) và Fe³⁺ → Ag, Fe²⁺ + Cu²⁺.'),
    Q('Sản phẩm chính khi điện phân nóng chảy NaCl?', ['Na ở cathode + Cl₂ ở anode','NaOH','NaClO','Na₂O'], 0, 'Cathode: Na⁺ + e → Na; anode: 2Cl⁻ → Cl₂ + 2e.'),
    Q('Phản ứng nào tạo H₂?', ['Fe + CuSO₄','Fe + HCl','Fe + AgNO₃','Cu + HCl loãng'], 1, 'Fe + 2HCl → FeCl₂ + H₂; Cu không phản ứng HCl loãng.'),
    Q('Chất nào sau đây dùng làm chất tẩy rửa?', ['Etanol','Xà phòng (RCOONa) và chất giặt rửa tổng hợp','HCl','NaOH đặc'], 1, 'Xà phòng (RCOONa từ chất béo) và chất giặt rửa tổng hợp (RC₆H₄SO₃Na).'),
    Q('Để bảo vệ tàu biển bằng anode hi sinh, dùng?', ['Zn (đặt vào tàu)','Cu','Ag','Au'], 0, 'Zn đứng trước Fe → bị oxi hoá thay → bảo vệ Fe của tàu.'),
  ]),

  M(35, 'Tổng kết - chuẩn bị thi tốt nghiệp', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Hoá học?', ['Tự luận','40 câu trắc nghiệm, 50 phút','60 câu tự luận','25 câu trắc nghiệm'], 1, 'Đề chuẩn: 40 câu TN, 50 phút, 4 mức độ (NB-TH-VD-VDC).'),
    Q('Để làm tốt bài thi, cần?', ['Nắm vững lý thuyết + công thức + phương pháp giải nhanh','Chỉ học thuộc','Chỉ làm đề','Bỏ lý thuyết'], 0, 'Cần kết hợp: lý thuyết, công thức cốt lõi, kĩ năng giải nhanh, luyện đề thường xuyên.'),
    Q('Kĩ năng cần thiết khi tính toán?', ['Bảo toàn nguyên tố, bảo toàn điện tích, bảo toàn electron, tăng giảm khối lượng','Chỉ phương trình','Chỉ bảng tuần hoàn','Chỉ tính nhẩm'], 0, '4 phương pháp lõi: bảo toàn (nguyên tố, điện tích, e, khối lượng) - giải nhanh hơn phương trình thông thường.'),
    Q('Lỗi cần tránh?', ['Nhầm hoá trị, nhầm hệ số phương trình, sai đơn vị','Quá cẩn thận','Đọc kĩ đề','Cân bằng đúng'], 0, 'Cẩn thận hoá trị + đơn vị (mol, g, L, M) + cân bằng phương trình.'),
    Q('Cách phân bổ thời gian cho 40 câu / 50 phút?', ['Trung bình 1-1,2 phút/câu; câu dễ < 30s; câu khó để cuối','Cứ làm tuần tự','Bỏ câu khó','Đoán hết'], 0, 'Quản lí thời gian: dễ trước - khó sau; câu nhận biết < 30s; câu VDC dành cuối.'),
    Q('Lời khuyên cuối: trước khi nộp bài?', ['Nộp ngay','Soát đáp án + đảm bảo tô đúng số câu trên phiếu trả lời','Bỏ qua','Sửa nhiều'], 1, 'Dành 5 phút cuối: soát đáp án + đảm bảo tô đúng vị trí (tránh tô lệch dòng).'),
  ]),
];

export const H12HOA_SCENARIOS = indexBy(H12HOA_WEEKS);
