// ============================================================
// Lớp 11 · HOÁ HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Hoá học 11).
// ID prefix: "H11HOA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11HOA', 'hoa-hoc', n, title, qs, opts);

export const H11HOA_WEEKS = [
  // ──────────────── HK1 — Cân bằng, điện ly, phi kim ────────────────
  M(1, 'Chương 1 — Cân bằng hoá học · Khái niệm', [
    Q('Phản ứng thuận nghịch là phản ứng?', ['Xảy ra theo hai chiều trong cùng điều kiện', 'Chỉ một chiều', 'Không xảy ra', 'Tỏa nhiệt'], 0, 'A + B ⇌ C + D.'),
    Q('Trạng thái cân bằng hoá học là trạng thái?', ['Chỉ thuận', 'Tốc độ phản ứng thuận = nghịch', 'Phản ứng dừng', 'Hết chất'], 1, 'v_thuận = v_nghịch.'),
    Q('Cân bằng hoá học là cân bằng?', ['Không cân bằng', 'Cân bằng tĩnh, phản ứng đã kết thúc', 'Tuyệt đối', 'Động (động học)'], 3, 'Cân bằng động.'),
    Q('Ký hiệu phản ứng thuận nghịch?', ['→ (mũi tên một chiều, phản ứng hoàn toàn)', '← (chỉ phản ứng nghịch)', '⇌ (mũi tên 2 chiều)', '= (dấu bằng, dùng trong phương trình ion)'], 2, '⇌.'),
    Q('Khi cân bằng, nồng độ các chất?', ['Không đổi (tại nhiệt độ cho trước)', 'Tăng dần', 'Bằng nhau', 'Bằng 0'], 0, 'Không đổi.'),
    Q('Cân bằng có thể bị chuyển dịch bởi?', ['Màu sắc', 'Khối lượng riêng', 'Ánh sáng', 'Nồng độ, nhiệt độ, áp suất'], 3, '3 yếu tố chính.'),
  ]),

  M(2, 'Hằng số cân bằng Kc và nguyên lý Le Chatelier', [
    Q('Với phản ứng aA + bB ⇌ cC + dD, Kc = ?', ['[C]·[D]', '[A]·[B]/[C]·[D]', '[C]^c·[D]^d / ([A]^a·[B]^b)', '[A]+[B]'], 2, 'Kc theo nồng độ.'),
    Q('Kc chỉ phụ thuộc?', ['Xúc tác', 'Nồng độ ban đầu', 'Nhiệt độ', 'Áp suất'], 2, 'Kc = f(T).'),
    Q('Nguyên lý Le Chatelier: khi tác động vào hệ cân bằng?', ['Hệ phá huỷ', 'Cân bằng chuyển dịch theo chiều chống lại tác động', 'Không đổi', 'Đảo ngược'], 1, 'Chiều chống lại.'),
    Q('Tăng nồng độ chất tham gia, cân bằng chuyển dịch theo chiều?', ['Chiều thuận (giảm tác động)', 'Không đổi', 'Chiều nghịch', 'Phá huỷ'], 0, 'Theo chiều tạo sản phẩm.'),
    Q('Tăng áp suất hệ khí có Δn ≠ 0?', ['Phá huỷ', 'Phía nhiều mol khí', 'Chuyển về phía ít mol khí hơn', 'Không đổi'], 2, 'Để giảm áp suất.'),
    Q('Xúc tác có ảnh hưởng đến cân bằng?', ['Có (chuyển dịch nghịch)', 'Có (chuyển dịch thuận)', 'Không (chỉ làm cân bằng đạt nhanh hơn)', 'Phá huỷ cân bằng'], 2, 'Xúc tác = tăng tốc cả hai chiều.'),
  ]),

  M(3, 'Chương 2 — Sự điện ly · Khái niệm', [
    Q('Chất điện ly là?', ['Chất không tan', 'Chất khí', 'Chất tan trong nước phân ly thành ion', 'Chất rắn'], 2, 'Phân ly tạo ion.'),
    Q('Chất điện ly mạnh là?', ['Không phân ly', 'Phân ly một phần', 'Phân ly hoàn toàn (α=1)', 'Phân ly có chọn lọc theo nhiệt độ'], 2, 'HCl, NaOH, NaCl.'),
    Q('Chất điện ly yếu là?', ['Không phân ly', 'Phân ly hoàn toàn', 'Phân ly tự phát không cần dung môi', 'Phân ly một phần (α<1)'], 3, 'CH₃COOH, NH₃.'),
    Q('Dung dịch chất điện ly có?', ['Cách điện', 'Không dẫn điện', 'Phát sáng', 'Dẫn điện được'], 3, 'Dẫn điện do ion.'),
    Q('Chất nào sau đây là điện ly mạnh?', ['C₂H₅OH', 'CH₃COOH', 'NaCl', 'Glucozơ'], 2, 'NaCl phân ly hoàn toàn.'),
    Q('Chất nào sau đây không điện ly?', ['Glucozơ', 'CH₃COOH', 'HCl (axit mạnh, phân ly hoàn toàn)', 'NaOH (bazơ mạnh, phân ly hoàn toàn)'], 0, 'Glucozơ là phân tử, không phân ly.'),
  ]),

  M(4, 'Axit - Bazơ - Muối theo thuyết Arrhenius và Bronsted', [
    Q('Theo Arrhenius, axit là chất khi tan trong nước phân ly cho?', ['Ion Na⁺', 'Ion Cl⁻', 'Ion H⁺', 'Ion OH⁻'], 2, 'HA → H⁺ + A⁻.'),
    Q('Bazơ theo Arrhenius cho ion?', ['Na⁺ (cation kim loại của bazơ)', 'OH⁻', 'Cl⁻ (anion gốc axit HCl)', 'H⁺ (ion đặc trưng của axit)'], 1, 'MOH → M⁺ + OH⁻.'),
    Q('Theo Bronsted, axit là?', ['Chất cho electron', 'Chất nhận electron', 'Chất nhận proton', 'Chất cho proton (H⁺)'], 3, 'Axit Bronsted = donor H⁺.'),
    Q('Bazơ theo Bronsted là?', ['Chất nhận electron', 'Chất cho electron', 'Chất nhận proton', 'Chất cho proton'], 2, 'Bazơ Bronsted = nhận H⁺.'),
    Q('Muối là?', ['Hợp chất gồm cation kim loại (hoặc NH₄⁺) và anion gốc axit', 'Chỉ phi kim', 'Chỉ kim loại', 'Khí tan trong nước tạo dung dịch điện ly'], 0, 'Định nghĩa.'),
    Q('NaCl là muối?', ['Axit (tạo từ axit yếu + bazơ mạnh)', 'Bazơ (tạo từ axit mạnh + bazơ yếu)', 'Trung hoà', 'Lưỡng tính'], 2, 'NaCl = trung tính.'),
  ]),

  M(5, 'pH và chỉ thị màu', [
    Q('pH = ?', ['log[H⁺] (nhầm dấu, không có dấu trừ)', '10·[H⁺]', 'log[H⁺]', '-log[H⁺]'], 3, 'pH = -log[H⁺].'),
    Q('pH = 7 dung dịch?', ['Axit (nhầm với pH < 7)', 'Bazơ (nhầm với pH > 7)', 'Không xác định', 'Trung tính'], 3, '[H⁺]=10⁻⁷.'),
    Q('pH < 7 dung dịch?', ['Bazơ (nhầm chiều thang pH)', 'Trung tính', 'Axit', 'Lưỡng tính'], 2, 'pH thấp → axit.'),
    Q('pH > 7 dung dịch?', ['Trung tính', 'Bazơ', 'Axit (đảo ngược ý nghĩa pH > 7)', 'Lưỡng tính'], 1, 'pH cao → bazơ.'),
    Q('Quỳ tím chuyển đỏ trong môi trường?', ['Không đổi', 'Axit (pH<7)', 'Trung tính', 'Bazơ (nhầm với phenolphtalein hồng)'], 1, 'Quỳ → đỏ khi axit.'),
    Q('Phenolphtalein chuyển hồng trong môi trường?', ['Axit (nhầm với quỳ tím chuyển đỏ)', 'Không đổi', 'Bazơ (pH > 8,3)', 'Trung tính'], 2, 'Hồng khi pH cao.'),
  ]),

  M(6, 'Axit mạnh - axit yếu - bazơ mạnh - bazơ yếu', [
    Q('Axit mạnh ví dụ?', ['HF (axit yếu dù chứa halogen)', 'HCl, HNO₃, H₂SO₄', 'H₂CO₃ (axit yếu, dễ phân huỷ)', 'CH₃COOH'], 1, 'Phân ly hoàn toàn.'),
    Q('Axit yếu điển hình?', ['HCl (axit mạnh, phân ly hoàn toàn)', 'HNO₃ (axit mạnh, oxi hoá mạnh)', 'CH₃COOH (giấm)', 'H₂SO₄ (axit mạnh hai nấc)'], 2, 'Phân ly không hoàn toàn.'),
    Q('Bazơ mạnh ví dụ?', ['Al(OH)₃', 'NH₃ (bazơ yếu trong nước)', 'Cu(OH)₂', 'NaOH, KOH, Ba(OH)₂'], 3, 'Tan hoàn toàn, phân ly hoàn toàn.'),
    Q('Bazơ yếu ví dụ?', ['Ca(OH)₂', 'KOH (bazơ mạnh, tan hoàn toàn)', 'NH₃ trong nước', 'NaOH (bazơ mạnh, phân ly hoàn toàn)'], 2, 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.'),
    Q('Hằng số phân ly axit Ka càng lớn?', ['Trung tính', 'Axit càng yếu', 'Không liên quan', 'Axit càng mạnh'], 3, 'Ka ↑ → mạnh.'),
    Q('Dung dịch HCl 0,1M pH ≈ ?', ['2', '1', '13', '7'], 1, 'pH = -log(0,1) = 1.'),
  ]),

  M(7, 'Chương 3 — Nitơ và hợp chất · Nitơ N₂', [
    Q('Cấu hình electron N (Z=7)?', ['1s² 2s² 2p²', '1s² 2s² 2p³', '1s² 2s² 2p⁵', '1s² 2s² 2p⁴'], 1, '7e.'),
    Q('Phân tử N₂ có liên kết?', ['Ion (giữa 2 nguyên tử N giống nhau)', 'Ba (N≡N)', 'Đôi (N=N, kém bền hơn)', 'Đơn (N-N, một cặp electron chung)'], 1, 'N≡N rất bền.'),
    Q('N₂ ở điều kiện thường?', ['Khí màu vàng', 'Khí, không màu, không mùi', 'Rắn ở dạng tinh thể phân tử', 'Lỏng không màu, dễ bay hơi'], 1, 'Chiếm 78% không khí.'),
    Q('Số oxi hoá của N có thể là?', ['-3, 0, +1, +2, +3, +4, +5', 'Chỉ +5', 'Chỉ 0 (chỉ tồn tại ở dạng đơn chất N₂)', 'Chỉ -3'], 0, 'Đa hoá trị.'),
    Q('N₂ + H₂ ⇌ NH₃ là phản ứng?', ['Trao đổi', 'Cộng H₂ vào liên kết ba thông thường', 'Tổng hợp ammoniac (Haber)', 'Phân huỷ'], 2, 'Quy trình Haber-Bosch.'),
    Q('NH₃ có tính?', ['Axit yếu', 'Trung tính', 'Bazơ yếu', 'Lưỡng tính'], 2, 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.'),
  ]),

  M(8, 'Axit Nitric HNO₃', [
    Q('HNO₃ là axit?', ['Mạnh và có tính oxi hoá mạnh', 'Trung tính', 'Yếu, phân ly không hoàn toàn', 'Bazơ do chứa nhóm OH'], 0, 'HNO₃ đặc/loãng đều oxi hoá.'),
    Q('HNO₃ đặc tác dụng với Cu tạo khí?', ['NO₂ (nâu đỏ)', 'N₂ (sản phẩm khử sâu nhất)', 'NH₃ (sản phẩm khử mạnh nhất)', 'NO (không màu)'], 0, 'Cu + HNO₃ đặc → NO₂.'),
    Q('HNO₃ loãng tác dụng với Cu tạo khí?', ['NO₂ (nâu đỏ, đặc trưng HNO₃ đặc)', 'H₂ (như axit thường tác dụng kim loại)', 'NO (không màu, hoá nâu trong không khí)', 'N₂ (sản phẩm khử với HNO₃ rất loãng)'], 2, '3Cu + 8HNO₃ loãng → 3Cu(NO₃)₂ + 2NO + 4H₂O.'),
    Q('Kim loại nào thụ động với HNO₃ đặc nguội?', ['Cu (đứng sau H trong dãy hoạt động)', 'Ag (kim loại quý, ít phản ứng)', 'Zn (hoạt động mạnh nên phản ứng được)', 'Fe, Al, Cr'], 3, 'Tạo lớp oxit bảo vệ.'),
    Q('Muối nitrat khi nhiệt phân tạo?', ['Chỉ N₂', 'Chỉ NO', 'Không phân huỷ', 'Tuỳ loại: NO₂, O₂, MO hoặc M'], 3, 'Phụ thuộc vị trí kim loại.'),
    Q('HNO₃ ứng dụng?', ['Đèn LED', 'Mỹ phẩm', 'Sản xuất phân đạm, thuốc nổ', 'Đường ăn'], 2, 'Phân NH₄NO₃, TNT.'),
  ]),

  M(9, 'Photpho - Axit photphoric - Phân bón', [
    Q('Photpho có 2 dạng thù hình chính?', ['Photpho trắng và photpho đỏ', 'Vàng và đỏ', 'Đen và trắng', 'Xanh và đỏ'], 0, 'P trắng, P đỏ.'),
    Q('Photpho trắng có tính?', ['Bền, không thay đổi khi để ngoài không khí', 'Không độc', 'Bền không cháy', 'Rất độc, tự bốc cháy trong không khí > 40°C'], 3, 'P₄ trắng độc.'),
    Q('Photpho đỏ?', ['Rất độc', 'Bền hơn, không độc, không tự cháy', 'Tan trong nước', 'Tự cháy'], 1, 'Dạng polyme bền.'),
    Q('Axit photphoric H₃PO₄ là axit?', ['Bazơ (nhầm vì có nhóm OH trong công thức)', 'Mạnh, phân ly hoàn toàn 3 nấc', 'Trung bình, 3 nấc', 'Trung tính'], 2, 'Axit 3 nấc.'),
    Q('Phân đạm chứa nguyên tố dinh dưỡng?', ['P (đây là nguyên tố của phân lân)', 'K (đây là nguyên tố của phân kali)', 'N', 'Ca (canxi, có trong vôi bón cải tạo đất)'], 2, 'Đạm = N.'),
    Q('Phân lân chứa?', ['Ca (chỉ có trong supephotphat dạng canxi)', 'P', 'K (đây là nguyên tố của phân kali)', 'N (đây là nguyên tố của phân đạm)'], 1, 'Lân = P.'),
  ]),

  M(10, 'Chương 4 — Cacbon và Silic', [
    Q('Cacbon có các dạng thù hình?', ['Chỉ than', 'Kim cương, than chì, fullerene', 'Chỉ graphit', 'Chỉ kim cương'], 1, '3 dạng phổ biến + fullerene C₆₀.'),
    Q('CO₂ là?', ['Khí nitơ', 'Khí gây hiệu ứng nhà kính', 'Khí oxi', 'Khí hydro'], 1, 'CO₂ greenhouse gas.'),
    Q('CO là khí?', ['Có màu', 'Cực độc, không màu, không mùi', 'Có mùi', 'Không độc'], 1, 'CO độc do gắn hemoglobin.'),
    Q('Silic Si nằm trong nhóm?', ['VIA (nhóm O, S, Se)', 'IA (nhóm kim loại kiềm)', 'IVA', 'VIIA (nhóm halogen F, Cl, Br)'], 2, 'Si nhóm IVA (cùng C).'),
    Q('SiO₂ là?', ['Kim loại', 'Khí không màu ở điều kiện thường', 'Phi kim', 'Thạch anh, cát'], 3, 'SiO₂ = silica.'),
    Q('Silic dùng làm?', ['Chất bán dẫn, vi mạch điện tử', 'Thực phẩm', 'Đường ăn', 'Vũ khí'], 0, 'Si trong chip điện tử.'),
  ]),

  M(11, 'Chương 5 — Đại cương hoá hữu cơ · Khái niệm', [
    Q('Hợp chất hữu cơ là?', ['Hợp chất của O', 'Hợp chất của H', 'Mọi hợp chất của C', 'Hợp chất của cacbon (trừ CO, CO₂, muối cacbonat…)'], 3, 'C + một số trừ.'),
    Q('Hợp chất hữu cơ có nguyên tố chính?', ['C và N', 'C và H', 'C và O', 'H và O'], 1, 'C-H xương sống.'),
    Q('Đặc điểm chung của hợp chất hữu cơ?', ['Tan tốt trong nước', 'Bền nhiệt', 'Liên kết ion', 'Liên kết cộng hoá trị, kém bền nhiệt, đa số không tan trong nước'], 3, 'Cộng hoá trị.'),
    Q('Phản ứng hữu cơ thường?', ['Xảy ra nhanh', 'Một hướng', 'Xảy ra chậm, theo nhiều hướng', 'Tức thời'], 2, 'Cần xúc tác.'),
    Q('Phân loại hợp chất hữu cơ theo mạch?', ['Chỉ mạch hở', 'Mạch hở (không vòng), mạch vòng', 'Không phân loại', 'Chỉ mạch vòng'], 1, '2 loại chính.'),
    Q('Hydrocacbon là?', ['Hợp chất chỉ chứa C và H', 'Chỉ chứa H', 'Chỉ chứa C', 'Chứa C, H, O'], 0, 'CₙHₘ.'),
  ]),

  M(12, 'Đồng đẳng và đồng phân', [
    Q('Dãy đồng đẳng là?', ['Cùng tính chất', 'Cùng công thức phân tử', 'Các chất có cấu trúc, tính chất tương tự, khác nhau nhóm CH₂', 'Khác hoàn toàn'], 2, 'Hơn kém n·CH₂.'),
    Q('Đồng phân là?', ['Cùng CTCT', 'Cùng tính chất', 'Khác CTPT', 'Các chất cùng CTPT, khác CTCT'], 3, 'Đồng phân.'),
    Q('Đồng phân cấu tạo gồm?', ['Đồng phân mạch C, vị trí nhóm chức, nhóm chức', 'Hình học', 'Chỉ vị trí', 'Chỉ mạch'], 0, '3 loại đồng phân cấu tạo.'),
    Q('Đồng phân hình học (cis-trans) yêu cầu?', ['Không liên kết đôi', 'Vòng no, không có liên kết bội', 'Mạch thẳng', 'Có liên kết đôi C=C và mỗi C nối 2 nhóm khác nhau'], 3, 'cis/trans (Z/E).'),
    Q('C₄H₁₀ có mấy đồng phân?', ['3', '2 (butan, isobutan)', '1', '4'], 1, 'n-butan và iso-butan.'),
    Q('CH₃-CH₂-OH và CH₃-O-CH₃ là?', ['Đồng phân nhóm chức', 'Đồng đẳng', 'Đồng phân cis-trans', 'Cùng chất'], 0, 'C₂H₆O: ancol và ete.'),
  ]),

  M(13, 'Công thức cấu tạo và danh pháp IUPAC', [
    Q('CTPT cho biết?', ['Tính chất', 'Hình dạng', 'Số nguyên tử mỗi nguyên tố', 'Cách liên kết'], 2, 'CₙHₘOₚ…'),
    Q('CTCT cho biết?', ['Khối lượng', 'Thứ tự liên kết giữa các nguyên tử', 'Tính chất', 'Số nguyên tử'], 1, 'Cấu tạo phân tử.'),
    Q('Đuôi -an dùng cho?', ['Ancol (đuôi -ol, có nhóm -OH)', 'Anken (đuôi -en, có 1 liên kết đôi)', 'Ankan (no, mạch hở)', 'Ankin (đuôi -in, có 1 liên kết ba)'], 2, 'Metan, etan…'),
    Q('Đuôi -en dùng cho?', ['Ancol (đuôi -ol, có nhóm -OH)', 'Anken (1 liên kết đôi)', 'Ankan (đuôi -an, no, mạch hở)', 'Ankin (đuôi -in, có liên kết ba)'], 1, 'Eten = etilen.'),
    Q('Đuôi -in dùng cho?', ['Anken (đuôi -en, liên kết đôi)', 'Ankan (đuôi -an, no, mạch hở)', 'Ancol (đuôi -ol, có nhóm -OH)', 'Ankin (1 liên kết ba)'], 3, 'Etin = axetilen.'),
    Q('Đuôi -ol dùng cho?', ['Ancol (-OH)', 'Anken (đuôi -en, liên kết đôi C=C)', 'Andehit', 'Axit (đuôi -oic, có nhóm -COOH)'], 0, 'Etanol = C₂H₅OH.'),
  ]),

  M(14, 'Chương 6 — Hidrocacbon no · Ankan', [
    Q('Công thức tổng quát ankan?', ['CₙHₙ (số H bằng số C, không phù hợp no)', 'CₙH₂ₙ₊₂ (n ≥ 1)', 'CₙH₂ₙ (công thức của anken, không phải ankan)', 'CₙH₂ₙ₋₂'], 1, 'Ankan no.'),
    Q('Ankan đơn giản nhất?', ['Metan CH₄', 'Butan C₄H₁₀ (ankan 4 cacbon)', 'Propan', 'Etan C₂H₆ (ankan 2 cacbon)'], 0, 'CH₄.'),
    Q('Ankan có liên kết?', ['Toàn liên kết đơn (no)', 'Có liên kết ba', 'Có liên kết đôi', 'Ion (liên kết giữa cation và anion)'], 0, 'Đơn σ.'),
    Q('Phản ứng đặc trưng của ankan?', ['Tách (xảy ra ở nhiệt độ cao, có xúc tác)', 'Trùng hợp', 'Cộng (đặc trưng của hidrocacbon không no)', 'Thế (halogen, ánh sáng)'], 3, 'Thế radical.'),
    Q('CH₄ + Cl₂ (ánh sáng) →?', ['CH₃Cl + HCl', 'CH₂Cl₂', 'CCl₄ (sản phẩm thế 4 lần liên tiếp)', 'CH₄Cl₂'], 0, 'Bước đầu metyl clorua.'),
    Q('Đốt cháy ankan tạo?', ['CH₃OH (sản phẩm oxi hoá không hoàn toàn)', 'CO + H₂O', 'CO₂ + H₂O', 'C + H₂'], 2, 'Cháy hoàn toàn.'),
  ]),

  M(15, 'Gốc ankyl và đồng phân ankan', [
    Q('Gốc ankyl tạo từ ankan bằng cách?', ['Thêm OH', 'Loại OH', 'Thêm H', 'Loại 1 nguyên tử H'], 3, '-CnH₂ₙ₊₁.'),
    Q('Gốc -CH₃ tên là?', ['Butyl (gốc của butan, -C₄H₉)', 'Etyl (gốc của etan, -C₂H₅)', 'Metyl', 'Propyl'], 2, 'Metyl.'),
    Q('Gốc -C₂H₅ tên là?', ['Propyl', 'Etyl', 'Butyl (gốc của butan, -C₄H₉)', 'Metyl (gốc của metan, -CH₃)'], 1, 'Etyl.'),
    Q('Tiền tố "iso" chỉ?', ['Có 1 nhánh CH₃ ở C áp chót', 'Mạch vòng', 'Có liên kết đôi', 'Mạch thẳng'], 0, 'iso-butan = 2-metylpropan.'),
    Q('C₅H₁₂ có mấy đồng phân?', ['5', '2', '4', '3'], 3, 'n-pentan, iso-pentan, neopentan.'),
    Q('Quy tắc đánh số mạch chính?', ['Bắt đầu đầu gần nhánh nhất', 'Đầu xa nhánh', 'Bất kỳ đầu nào cũng được, miễn liên tục', 'Giữa mạch'], 0, 'Tổng vị trí nhỏ nhất.'),
  ]),

  M(16, 'Chương 7 — Hidrocacbon không no · Anken', [
    Q('Công thức tổng quát anken?', ['CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ (n ≥ 2)', 'CₙHₙ (số H bằng số C, không hợp lý)'], 2, 'Một nối đôi.'),
    Q('Anken đơn giản nhất?', ['Propilen', 'Metan CH₄ (ankan đơn giản nhất)', 'Buten C₄H₈ (anken có 4 cacbon)', 'Etilen C₂H₄'], 3, 'C₂H₄.'),
    Q('Phản ứng đặc trưng của anken?', ['Cháy (chung cho mọi hidrocacbon)', 'Thế (đặc trưng của ankan)', 'Tách (xảy ra ở nhiệt độ cao)', 'Cộng (H₂, X₂, HX, H₂O)'], 3, 'Cộng vào nối đôi.'),
    Q('Quy tắc Markovnikov: HX cộng vào anken?', ['H gắn vào C có nhánh', 'Đều, H và X gắn ngẫu nhiên vào 2 C', 'X gắn vào C nhiều H', 'H gắn vào C nhiều H, X gắn vào C ít H'], 3, 'Markovnikov.'),
    Q('Anken làm mất màu?', ['NaOH (bazơ, không phản ứng với anken)', 'Quỳ tím', 'Dung dịch Br₂ (nước brom)', 'HCl (chỉ cộng vào, không đổi màu)'], 2, 'Brom + anken → addition.'),
    Q('Etilen trùng hợp tạo?', ['PVC (trùng hợp từ vinyl clorua CH₂=CHCl)', 'PS (trùng hợp từ stiren C₆H₅-CH=CH₂)', 'Polietilen (PE)', 'PP (trùng hợp từ propilen CH₂=CH-CH₃)'], 2, 'PE.'),
  ]),

  M(17, 'Ankađien và Ankin', [
    Q('Ankađien có?', ['1 liên kết ba', '2 liên kết đôi C=C', '1 liên kết đôi', 'Không có liên kết bội, chỉ có liên kết đơn'], 1, 'CₙH₂ₙ₋₂ (mạch hở).'),
    Q('Buta-1,3-đien là?', ['CH₂=CH-CH=CH₂', 'CH₃-CH=CH-CH₃', 'CH≡C-CH=CH₂', 'CH₂=C=CH-CH₃'], 0, 'Đien liên hợp.'),
    Q('Buta-1,3-đien trùng hợp tạo?', ['PE (trùng hợp từ etilen C₂H₄)', 'Cao su buna', 'PVC (trùng hợp từ vinyl clorua)', 'Cao su isopren'], 1, 'Buna.'),
    Q('Công thức ankin?', ['CₙHₙ (số H bằng số C, không hợp lý)', 'CₙH₂ₙ₋₂ (≥2)', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ (công thức của anken)'], 1, 'Một nối ba.'),
    Q('Ankin đơn giản nhất?', ['Metan CH₄ (ankan, không phải ankin)', 'Propin', 'Etilen', 'Axetilen C₂H₂'], 3, 'C₂H₂.'),
    Q('Ankin đầu mạch (HC≡CR) phản ứng với AgNO₃/NH₃ tạo?', ['Kết tủa trắng', 'Không phản ứng', 'Kết tủa đen', 'Kết tủa vàng AgC≡CR'], 3, 'Nhận biết ankin đầu mạch.'),
  ]),

  M(18, 'Review HK1 — Cân bằng, điện ly, hữu cơ cơ bản', [
    Q('Kc phụ thuộc?', ['Nhiệt độ', 'Xúc tác', 'Áp suất', 'Nồng độ'], 0, 'Kc = f(T).'),
    Q('pH = 7 là?', ['Trung tính', 'Axit (nhầm với pH < 7)', 'Bazơ (nhầm với pH > 7)', 'Lưỡng tính'], 0, '[H⁺]=10⁻⁷.'),
    Q('HNO₃ là axit?', ['Yếu, phân ly không hoàn toàn', 'Bazơ do tan tạo dung dịch dẫn điện', 'Trung tính', 'Mạnh, oxi hoá mạnh'], 3, 'HNO₃.'),
    Q('Đồng phân là?', ['Cùng CTPT, khác CTCT', 'Khác CTPT', 'Cùng tính chất', 'Cùng CTCT'], 0, 'Đồng phân.'),
    Q('Ankan công thức?', ['CₙH₂ₙ (công thức của anken)', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ (số H bằng số C, không phù hợp no)'], 1, 'Ankan.'),
    Q('Anken phản ứng đặc trưng?', ['Thế (đặc trưng của ankan và benzen)', 'Cộng', 'Trùng hợp tạo polyme cũng có nhưng đặc trưng nhất là cộng', 'Phân huỷ'], 1, 'Cộng vào nối đôi.'),
  ]),

  // ──────────────── HK2 — Aren, dẫn xuất, ancol, andehit, axit ────────────────
  M(19, 'Hidrocacbon thơm — Benzen', [
    Q('Công thức benzen?', ['C₇H₈ (công thức của toluen)', 'C₆H₁₂ (xiclohexan, vòng no)', 'C₆H₆', 'C₆H₁₄ (hexan mạch hở, ankan)'], 2, 'C₆H₆ vòng 6.'),
    Q('Cấu tạo benzen?', ['Mạch hở', 'Vòng 5C', 'Vòng 6C với 3 liên kết đôi xen kẽ (thơm)', 'Vòng 7C'], 2, 'Vòng thơm (Kekulé).'),
    Q('Phản ứng đặc trưng của benzen?', ['Cộng (đặc trưng của anken và ankin)', 'Thế (halogen, nitro hoá)', 'Trùng hợp', 'Phân huỷ'], 1, 'Thế electrophilic.'),
    Q('Benzen + Br₂ (Fe xúc tác) →?', ['C₆H₅Br + HBr', 'C₆H₁₂Br₆', 'C₆H₆Br₂', 'Không phản ứng'], 0, 'Brom hoá nhân thơm.'),
    Q('Benzen có làm mất màu Br₂ nước không?', ['Tức thời', 'Có, làm mất màu nhanh như anken', 'Một phần', 'Không (chỉ thế khi có xúc tác Fe)'], 3, 'Khác anken.'),
    Q('Phản ứng cộng H₂ vào benzen tạo?', ['Hexen C₆H₁₂ (cộng một phần H₂)', 'Xiclohexan C₆H₁₂', 'Hexan C₆H₁₄ (mạch hở, ankan)', 'Toluen'], 1, 'Hidro hoá có Ni.'),
  ]),

  M(20, 'Toluen và đồng đẳng của benzen', [
    Q('Toluen có công thức?', ['C₆H₅-NH₂', 'C₆H₅-CH₃', 'C₆H₅-OH', 'C₆H₅-CHO'], 1, 'Toluen = metylbenzen.'),
    Q('Nhóm -CH₃ trên vòng benzen làm cho phản ứng thế?', ['Dễ hơn benzen, ưu tiên o và p', 'Khó hơn', 'Tạo m (định hướng meta)', 'Không phản ứng'], 0, '-CH₃ đẩy electron → activator o,p.'),
    Q('Toluen + KMnO₄ (nóng) tạo?', ['C₆H₅-CHO', 'Axit benzoic C₆H₅-COOH', 'Không phản ứng', 'C₆H₅-CH₂OH'], 1, 'Oxi hoá -CH₃ → -COOH.'),
    Q('Stiren có công thức?', ['C₆H₅-CH=CH₂', 'C₆H₅-OH', 'C₆H₅-CH₂-CH₃', 'C₆H₅-CH₃'], 0, 'Vinylbenzen.'),
    Q('Stiren trùng hợp tạo?', ['PP (trùng hợp từ propilen)', 'PVC (trùng hợp từ vinyl clorua)', 'Polistiren (PS)', 'PE (trùng hợp từ etilen)'], 2, 'PS.'),
    Q('TNT là?', ['Axit picric (2,4,6-trinitrophenol)', 'Polyme', 'Trinitrotoluen — thuốc nổ', 'Ancol benzylic (C₆H₅-CH₂OH)'], 2, '2,4,6-trinitrotoluen.'),
  ]),

  M(21, 'Chương 8 — Dẫn xuất halogen', [
    Q('Dẫn xuất halogen công thức tổng quát?', ['R-CHO (nhóm chức của andehit)', 'R-X (X = F, Cl, Br, I)', 'R-COOH', 'R-OH (nhóm chức của ancol)'], 1, 'R-X.'),
    Q('Dẫn xuất halogen + NaOH (đun) →?', ['Axit cacboxylic R-COOH', 'Andehit', 'Ete R-O-R\' (do ngưng tụ với ancol)', 'Ancol R-OH (phản ứng thế nucleophilic)'], 3, 'Thuỷ phân.'),
    Q('Dẫn xuất halogen tách HX khi đun với KOH/ancol →?', ['Anken', 'Ankan (không có liên kết bội)', 'Ankin (có liên kết ba C≡C)', 'Ancol (có nhóm -OH thay X)'], 0, 'Phản ứng tách E.'),
    Q('CH₃Cl tên là?', ['Etyl clorua', 'Metyl clorua / Cloro metan', 'Metan (chưa thế clo)', 'Vinyl clorua'], 1, 'CH₃Cl.'),
    Q('Vinyl clorua công thức?', ['CHCl₃ (cloroform, tri-clo metan)', 'CH₂=CHCl', 'CH₃Cl (metyl clorua, no)', 'CCl₄ (cacbon tetraclorua, no)'], 1, 'Trùng hợp tạo PVC.'),
    Q('Teflon là polyme của?', ['CH₂=CH-CH₃', 'CH₂=CHCl', 'CH₂=CH₂', 'CF₂=CF₂ (tetrafluoroetilen)'], 3, 'Polytetrafluoroetilen (PTFE).'),
  ]),

  M(22, 'Ancol — Cấu tạo, danh pháp, tính chất', [
    Q('Ancol có nhóm chức?', ['-OH (gắn vào C no)', '-COOH', '-CHO', '-O-'], 0, 'R-OH.'),
    Q('Ancol no đơn chức công thức?', ['CₙH₂ₙ-OH', 'CₙH₂ₙ₋₁-OH', 'CₙH₂ₙ₊₁-OH (n ≥ 1)', 'CₙHₙ-OH'], 2, 'Ancol no.'),
    Q('Etanol công thức?', ['CH₃OH (đây là metanol, không phải etanol)', 'C₄H₉OH', 'C₃H₇OH', 'C₂H₅OH'], 3, 'C₂H₅OH = rượu etylic.'),
    Q('Ancol + Na →?', ['RH + NaOH', 'Không phản ứng', 'ROH + Na → RONa + ½H₂', 'RONa + H'], 2, 'Tính axit yếu của -OH.'),
    Q('Ancol bậc 1 oxi hoá tạo?', ['Andehit, rồi axit cacboxylic', 'Xeton (sản phẩm của ancol bậc 2)', 'Ete R-O-R\' (do tách nước giữa 2 ancol)', 'Ankan (do khử nhóm -OH)'], 0, 'R-CH₂OH → R-CHO → R-COOH.'),
    Q('Ancol bậc 2 oxi hoá tạo?', ['Andehit', 'Xeton', 'Ankan (do khử nhóm -OH thành -H)', 'Axit cacboxylic R-COOH'], 1, 'R-CHOH-R\' → R-CO-R\'.'),
  ]),

  M(23, 'Phenol', [
    Q('Phenol có công thức?', ['C₆H₅-CH₃', 'C₆H₅-OH', 'C₆H₅-CHO', 'C₆H₅-NH₂'], 1, 'Phenol = hydroxylbenzen.'),
    Q('Phenol có tính axit?', ['Trung tính', 'Bazơ do có vòng benzen giàu electron', 'Mạnh, phân ly hoàn toàn trong nước', 'Yếu (mạnh hơn ancol)'], 3, 'Phenol Ka ≈ 10⁻¹⁰.'),
    Q('Phenol + NaOH →?', ['C₆H₅Na', 'C₆H₅-ONa + H₂O', 'Không phản ứng', 'C₆H₅OH₂'], 1, 'Phản ứng axit-bazơ.'),
    Q('Ancol có phản ứng với NaOH không?', ['Không', 'Tuỳ ancol', 'Khử NaOH', 'Có, vì ancol có tính axit như phenol'], 0, 'Ancol không phản ứng NaOH.'),
    Q('Phenol + dung dịch Br₂ →?', ['Kết tủa trắng 2,4,6-tribromphenol', 'Brom đỏ', 'Không phản ứng', 'Kết tủa đen'], 0, 'Thế 3H ở vị trí 2,4,6.'),
    Q('Phenol ứng dụng?', ['Sản xuất nhựa phenol-fomandehit, dược phẩm', 'Cao su', 'Đường ăn', 'Mỹ phẩm trang trí'], 0, 'Bakelite.'),
  ]),

  M(24, 'Chương 9 — Andehit và Xeton', [
    Q('Andehit có nhóm chức?', ['-CO-', '-CHO', '-OH', '-COOH'], 1, 'R-CHO.'),
    Q('Xeton có nhóm chức?', ['-COOH', '-CHO', '-CO- (giữa hai C)', '-OH'], 2, 'R-CO-R\'.'),
    Q('Andehit fomic công thức?', ['HCHO', 'C₂H₅CHO', 'CH₃CHO', 'CH₃COCH₃'], 0, 'Metanal.'),
    Q('Andehit + AgNO₃/NH₃ →?', ['Kết tủa Ag (tráng gương)', 'Kết tủa xanh', 'Kết tủa đen', 'Không phản ứng'], 0, 'Phản ứng tráng bạc.'),
    Q('Xeton có tráng bạc không?', ['Có, tương tự andehit (do cùng C=O)', 'Không', 'Tuỳ xeton', 'Một phần'], 1, 'Xeton không có H trên C=O.'),
    Q('Andehit + H₂ (Ni) →?', ['Ancol bậc 1', 'Ete R-O-R\' (ngưng tụ 2 phân tử)', 'Ancol bậc 2', 'Axit cacboxylic R-COOH'], 0, 'R-CHO + H₂ → R-CH₂OH.'),
  ]),

  M(25, 'Axit cacboxylic — Cấu tạo và tính chất', [
    Q('Axit cacboxylic có nhóm chức?', ['-COOH', '-CHO', '-CO-', '-OH'], 0, 'R-COOH.'),
    Q('Axit fomic công thức?', ['CH₃CHO', 'HCOOH', 'C₂H₅COOH', 'CH₃COOH'], 1, 'Metanoic.'),
    Q('Axit axetic công thức?', ['HCOOH (axit fomic, ngắn hơn axetic)', 'C₃H₇COOH', 'C₂H₅COOH', 'CH₃COOH'], 3, 'CH₃COOH (giấm).'),
    Q('Axit cacboxylic + Na →?', ['Không thấy', 'RH + NaOH', 'RCOONa + ½H₂', 'Không phản ứng'], 2, 'Tính axit của -COOH.'),
    Q('Axit + bazơ →?', ['Không phản ứng', 'Kết tủa', 'Khí H₂ thoát ra (như axit + kim loại)', 'Muối + nước'], 3, 'Trung hoà.'),
    Q('Axit + ancol (xúc tác H₂SO₄ đặc) →?', ['Este + H₂O', 'Xeton R-CO-R\' (sản phẩm oxi hoá ancol bậc 2)', 'Ete R-O-R\' (sản phẩm tách nước giữa 2 ancol)', 'Andehit'], 0, 'Phản ứng este hoá (thuận nghịch).'),
  ]),

  M(26, 'So sánh tính axit và phản ứng nhận biết', [
    Q('So sánh tính axit: HCOOH, CH₃COOH, C₂H₅COOH?', ['Bằng nhau', 'Không xác định', 'HCOOH > CH₃COOH > C₂H₅COOH', 'Ngược lại'], 2, 'Mạch C dài → axit yếu hơn.'),
    Q('Nhận biết ancol bằng?', ['Na (sủi bọt H₂)', 'AgNO₃/NH₃', 'Quỳ tím', 'NaOH (vì ancol có nhóm -OH)'], 0, 'Na + ancol.'),
    Q('Nhận biết andehit?', ['Quỳ tím', 'Na (sủi bọt H₂ như với ancol)', 'AgNO₃/NH₃ tạo Ag (tráng gương)', 'NaOH (do nhóm C=O có tính axit)'], 2, 'Tollens.'),
    Q('Nhận biết axit cacboxylic?', ['AgNO₃/NH₃', 'Dung dịch Br₂ làm mất màu nhanh', 'Quỳ tím (đỏ) + NaHCO₃ (sủi CO₂)', 'Không có thuốc thử đặc trưng'], 2, 'Axit yếu nhưng đủ làm đỏ quỳ.'),
    Q('Nhận biết phenol?', ['Na (sủi bọt H₂, nhầm với ancol)', 'Dung dịch Br₂ tạo kết tủa trắng', 'Quỳ tím (không đổi)', 'NaOH (không có hiện tượng quan sát được)'], 1, 'Tribromphenol.'),
    Q('Nhận biết anken/ankin?', ['Cả 2', 'AgNO₃/NH₃ (ankin đầu mạch)', 'Tuỳ chất', 'Br₂ nước (mất màu)'], 0, 'Tuỳ loại.'),
  ]),

  M(27, 'Bài tập đốt cháy hợp chất hữu cơ', [
    Q('Đốt cháy hoàn toàn ankan tạo?', ['CO₂ > H₂O', 'CO₂ và H₂O với n_H₂O > n_CO₂', 'Chỉ CO₂', 'Bằng nhau'], 1, 'Ankan no: n_H₂O - n_CO₂ = n_ankan.'),
    Q('Đốt cháy anken thì?', ['Bằng 0', 'n_CO₂ > n_H₂O', 'n_CO₂ = n_H₂O', 'n_H₂O > n_CO₂'], 2, 'Anken: CₙH₂ₙ → n CO₂ và n H₂O.'),
    Q('Đốt cháy ankin?', ['Bằng nhau', 'n_H₂O > n_CO₂', 'n_CO₂ > n_H₂O', 'Không xác định'], 2, 'Ankin CₙH₂ₙ₋₂.'),
    Q('Đốt 0,1 mol CH₄ thu được bao nhiêu mol CO₂?', ['0,1', '0,2', '1', '0,05'], 0, 'CH₄ + 2O₂ → CO₂ + 2H₂O.'),
    Q('Đốt 0,1 mol C₂H₄ thu được mol H₂O?', ['0,3', '0,4', '0,1', '0,2'], 3, 'C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.'),
    Q('Nếu đốt X thu được n_CO₂ = n_H₂O, X có thể là?', ['Ancol no', 'Anken', 'Ankan (cho n_H₂O > n_CO₂)', 'Ankin (cho n_CO₂ > n_H₂O)'], 1, 'Anken (hoặc đồng đẳng có CTPT CₙH₂ₙ).'),
  ]),

  M(28, 'Bài tập điện ly và pH', [
    Q('Dung dịch HCl 0,01M có pH?', ['12', '7', '1', '2'], 3, '[H⁺]=10⁻² → pH=2.'),
    Q('Dung dịch NaOH 0,01M có pOH=2 → pH?', ['12', '7', '14', '2'], 0, 'pH + pOH = 14.'),
    Q('Trộn 100ml HCl 0,1M + 100ml NaOH 0,1M. pH?', ['11', '7 (trung tính)', '1', '13'], 1, 'Trung hoà hoàn toàn.'),
    Q('Dung dịch axit yếu pH > 1 với cùng nồng độ 0,1M?', ['Sai (axit yếu cho pH = 1 như axit mạnh)', 'Không xác định', 'Tuỳ chất, không thể kết luận chung', 'Đúng (vì phân ly không hoàn toàn)'], 3, 'CH₃COOH 0,1M pH ≈ 2,87.'),
    Q('Nước cất pH ?', ['7', '0', '14', '1'], 0, 'Trung tính.'),
    Q('Đo pH bằng?', ['Nhiệt kế', 'Thước đo độ dài của ống nghiệm', 'Cân điện tử đo khối lượng dung dịch', 'Máy đo pH hoặc giấy pH/chỉ thị màu'], 3, 'pH meter.'),
  ]),

  M(29, 'Bài tập anken và ankin', [
    Q('Etilen C₂H₄ + Br₂ →?', ['C₂H₄Br', 'CH₂Br-CH₂Br (1,2-đibrometan)', 'C₂H₃Br', 'Không phản ứng'], 1, 'Cộng Br₂.'),
    Q('Propilen + HCl theo Markovnikov tạo?', ['CH₃-CH=CH₂', 'CH₃-CHCl-CH₃ (2-clopropan)', 'CH₂Cl-CH₂-CH₃', 'Không phản ứng'], 1, 'Markovnikov: 2-cloro.'),
    Q('Etilen + H₂O (H₂SO₄, t°) →?', ['HCOOH (axit fomic, do oxi hoá quá mức)', 'CH₃-CH₂-OH (etanol)', 'CH₃-CHO', 'CH₃-O-CH₃'], 1, 'Hidrat hoá.'),
    Q('Axetilen C₂H₂ + AgNO₃/NH₃ →?', ['Ag-C≡C-Ag (kết tủa vàng)', 'Kết tủa đen', 'Kết tủa trắng', 'Không phản ứng'], 0, 'Nhận biết ankin đầu mạch.'),
    Q('Axetilen + H₂ (Ni, t°) →?', ['CH₂=CH₂', 'CH₃-CH₃ (etan)', 'CH₃-CHO', 'Không phản ứng'], 1, 'Cộng hoàn toàn 2 H₂.'),
    Q('Trùng hợp etilen tạo polyme nào?', ['PE', 'PVC (trùng hợp từ vinyl clorua)', 'PS (trùng hợp từ stiren)', 'PP (trùng hợp từ propilen)'], 0, '[-CH₂-CH₂-]ₙ.'),
  ]),

  M(30, 'Bài tập ancol - phenol', [
    Q('Etanol + Na →?', ['C₂H₅ONa + ½H₂', 'Không phản ứng', 'C₂H₅Na + OH', 'CH₃OH (đứt mạch C tạo metanol)'], 0, 'Tính axit yếu của -OH.'),
    Q('Etanol + CuO (t°) →?', ['CH₃CHO + Cu + H₂O', 'HCOOH + Cu (oxi hoá quá mức)', 'C₂H₆ + CuO (chỉ khử nhóm OH)', 'CH₃COOH'], 0, 'Oxi hoá ancol bậc 1 → andehit.'),
    Q('Phenol + Na →?', ['C₆H₅ONa + ½H₂', 'Na phá huỷ', 'C₆H₅Na', 'Không phản ứng'], 0, 'Phenol cũng có -OH.'),
    Q('Phenol + NaOH →?', ['C₆H₅ONa + H₂O', 'C₆H₅Na', 'Phenol-OH', 'Không phản ứng'], 0, 'Khác ancol: phenol + NaOH có phản ứng.'),
    Q('Ancol etylic dùng để?', ['Pha chế đồ uống có cồn, dung môi, nhiên liệu', 'Cao su', 'Sơn (sản xuất sơn dầu công nghiệp)', 'Kim loại'], 0, 'Đa dụng.'),
    Q('Glixerol C₃H₅(OH)₃ là?', ['Andehit', 'Axit cacboxylic (có nhóm -COOH)', 'Phenol', 'Ancol đa chức (3 nhóm -OH)'], 3, 'Glixerin.'),
  ]),

  M(31, 'Bài tập andehit - axit cacboxylic', [
    Q('HCHO + AgNO₃/NH₃ (dư) → tỉ lệ HCHO : Ag?', ['1 : 4', '2 : 1', '1 : 1', '1 : 2'], 0, 'HCHO có 2 lần oxi hoá lên CO₂ → 4Ag.'),
    Q('CH₃CHO + AgNO₃/NH₃ → tỉ lệ CHO : Ag?', ['1 : 2', '1 : 4', '1 : 1', '2 : 1'], 0, '1 -CHO → 2 Ag.'),
    Q('CH₃COOH + NaHCO₃ →?', ['CH₃CO + NaCO₃', 'CH₃COONa + H₂', 'Không phản ứng', 'CH₃COONa + CO₂ + H₂O'], 3, 'Sủi CO₂.'),
    Q('Axit axetic + etanol (H₂SO₄ đặc) →?', ['CH₃COOC₂H₅ (etyl axetat) + H₂O', 'Anhidrit', 'Không phản ứng', 'CH₃COOH·C₂H₅OH'], 0, 'Phản ứng este hoá.'),
    Q('Giấm ăn chứa khoảng?', ['50% CH₃COOH', '1% HCl', '5% CH₃COOH', '100% CH₃COOH'], 2, '~5% axit axetic.'),
    Q('Axit fomic HCOOH có nhóm?', ['-CHO + -COOH (vừa có tính andehit vừa axit)', 'Chỉ -COOH', 'Chỉ -OH', 'Chỉ -CHO'], 0, 'HCOOH tráng bạc được.'),
  ]),

  M(32, 'Tổng hợp chuỗi phản ứng hữu cơ', [
    Q('CH₄ → C₂H₂: phương pháp?', ['Trùng hợp', 'Cộng H₂ vào liên kết C-H', 'Crackinh', 'Nhiệt phân 1500°C, làm lạnh nhanh'], 3, '2CH₄ → C₂H₂ + 3H₂.'),
    Q('C₂H₂ → C₂H₄: phương pháp?', ['Trùng hợp', 'Cộng H₂ (Pd/PbCO₃, t°)', 'Phân huỷ', 'Cộng Br₂'], 1, 'Hidro hoá có chọn lọc.'),
    Q('C₂H₄ → C₂H₅OH: phương pháp?', ['Trùng hợp', 'Cộng Br₂', 'Cộng H₂O (H₂SO₄)', 'Cộng HCl'], 2, 'Hidrat hoá.'),
    Q('C₂H₅OH → CH₃CHO: phương pháp?', ['Oxi hoá CuO/O₂', 'Cộng H₂O', 'Khử bằng H₂/Ni (sản phẩm là ancol)', 'Trùng hợp'], 0, 'Oxi hoá ancol bậc 1.'),
    Q('CH₃CHO → CH₃COOH: phương pháp?', ['Oxi hoá tiếp (O₂, xúc tác)', 'Cộng H₂', 'Trùng hợp', 'Khử bằng H₂/Ni (sản phẩm là ancol)'], 0, 'Oxi hoá andehit.'),
    Q('CH₃COOH + C₂H₅OH → ?', ['CH₃COOC₂H₅ + H₂O', 'HCOOH + CH₃-CH₃ (đứt mạch)', 'CH₃COCH₃', 'CO₂ + H₂O'], 0, 'Etyl axetat.'),
  ]),

  M(33, 'Review HK2 — Hữu cơ', [
    Q('Benzen phản ứng đặc trưng?', ['Thế', 'Phân huỷ', 'Trùng hợp', 'Cộng (đặc trưng của anken/ankin)'], 0, 'Thế thơm.'),
    Q('Toluen + KMnO₄ →?', ['Axit benzoic', 'Andehit benzoic', 'Phenol', 'Stiren'], 0, 'Oxi hoá -CH₃ thành -COOH.'),
    Q('Ancol bậc 2 oxi hoá tạo?', ['Xeton', 'Andehit', 'Axit (sản phẩm khi oxi hoá ancol bậc 1)', 'Ankan (do khử hoàn toàn nhóm -OH)'], 0, 'Xeton.'),
    Q('Phenol có tính?', ['Bazơ do có vòng benzen đẩy electron', 'Lưỡng tính', 'Axit yếu', 'Trung tính'], 2, 'Mạnh hơn ancol nhưng yếu hơn axit cacbonic.'),
    Q('Andehit tráng bạc tạo?', ['Au (kim loại quý hiếm hơn Ag)', 'Ag (kết tủa)', 'Pt (kim loại quý dùng làm xúc tác)', 'Cu (kim loại có trong thuốc thử Fehling)'], 1, 'AgNO₃/NH₃ → Ag.'),
    Q('Axit cacboxylic + NaHCO₃ →?', ['Kết tủa', 'CO₂ + muối + H₂O', 'Phá huỷ', 'Không phản ứng'], 1, 'Sủi CO₂.'),
  ]),

  M(34, 'Bài tập định lượng tổng hợp', [
    Q('Đốt cháy 0,1 mol C₂H₅OH thu CO₂?', ['0,2 mol', '0,4 mol', '0,3 mol', '0,1 mol'], 0, 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.'),
    Q('Đốt 0,1 mol C₂H₅OH thu H₂O?', ['0,1 mol', '0,3 mol', '0,4 mol', '0,2 mol'], 1, '3H₂O / phân tử.'),
    Q('Cho 4,6g Na vào etanol dư. V H₂ (đktc)?', ['4,48 lít', '22,4 lít', '2,24 lít', '1,12 lít'], 2, 'n_Na = 0,2 → n_H₂ = 0,1 → 2,24 L.'),
    Q('0,1 mol CH₃COOH + Na dư thu V H₂ (đktc)?', ['0,56 L', '1,12 L', '22,4 L', '2,24 L'], 1, '0,1 mol → 0,05 mol H₂ → 1,12 L.'),
    Q('Tỉ khối hơi của etilen so với H₂?', ['1', '14', '28', '2'], 1, 'M(C₂H₄)=28, d=28/2=14.'),
    Q('Khối lượng 0,1 mol CH₃COOH?', ['6,5 g', '60 g', '6 g', '3 g'], 2, 'M=60, m = 0,1·60 = 6.'),
  ]),

  M(35, 'Thi học kỳ — Tổng ôn cả năm', [
    Q('Le Chatelier: tăng nhiệt độ phản ứng toả nhiệt → cân bằng?', ['Chuyển nghịch', 'Không đổi', 'Phá huỷ', 'Chuyển thuận'], 0, 'Toả nhiệt: tăng T → nghịch.'),
    Q('pH dung dịch NaOH 0,1M?', ['7', '1', '14', '13'], 3, '[OH⁻]=0,1 → pOH=1 → pH=13.'),
    Q('Nhận biết HCOOH với CH₃COOH?', ['Quỳ tím', 'HCOOH có tráng bạc, CH₃COOH thì không', 'Không phân biệt', 'Cả 2 đều tráng bạc'], 1, 'HCOOH có -CHO.'),
    Q('Hidrocacbon thơm + Br₂ (Fe) →?', ['Thế ở vòng', 'Không phản ứng', 'Cộng vào vòng phá vỡ tính thơm', 'Trùng hợp'], 0, 'Thế thơm.'),
    Q('Ancol bậc 1 oxi hoá nhẹ thành?', ['Axit ngay', 'Eter R-O-R\' (do tách nước giữa 2 phân tử)', 'Andehit', 'Xeton (sản phẩm của ancol bậc 2)'], 2, 'Bậc 1: -CH₂OH → -CHO.'),
    Q('Phản ứng este hoá thuận nghịch nên cần?', ['H₂SO₄ đặc làm xúc tác và hút nước', 'Đun lạnh', 'Ánh sáng', 'Bazơ NaOH làm xúc tác'], 0, 'H₂SO₄ đặc.'),
  ]),
];

export const H11HOA_SCENARIOS = indexBy(H11HOA_WEEKS);
