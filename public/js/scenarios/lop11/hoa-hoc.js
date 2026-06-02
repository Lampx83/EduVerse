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
    Q('Phản ứng thuận nghịch là phản ứng?', ['Xảy ra theo hai chiều trong cùng điều kiện','Chỉ một chiều','Không xảy ra','Tỏa nhiệt'], 0, 'A + B ⇌ C + D.'),
    Q('Trạng thái cân bằng hoá học là trạng thái?', ['Tốc độ phản ứng thuận = nghịch','Phản ứng dừng','Hết chất','Chỉ thuận'], 0, 'v_thuận = v_nghịch.'),
    Q('Cân bằng hoá học là cân bằng?', ['Động (động học)','Tĩnh','Tuyệt đối','Không cân bằng'], 0, 'Cân bằng động.'),
    Q('Ký hiệu phản ứng thuận nghịch?', ['⇌ (mũi tên 2 chiều)','→','←','='], 0, '⇌.'),
    Q('Khi cân bằng, nồng độ các chất?', ['Không đổi (tại nhiệt độ cho trước)','Bằng 0','Bằng nhau','Tăng dần'], 0, 'Không đổi.'),
    Q('Cân bằng có thể bị chuyển dịch bởi?', ['Nồng độ, nhiệt độ, áp suất','Ánh sáng','Màu sắc','Khối lượng riêng'], 0, '3 yếu tố chính.'),
  ]),

  M(2, 'Hằng số cân bằng Kc và nguyên lý Le Chatelier', [
    Q('Với phản ứng aA + bB ⇌ cC + dD, Kc = ?', ['[C]^c·[D]^d / ([A]^a·[B]^b)','[A]·[B]/[C]·[D]','[A]+[B]','[C]·[D]'], 0, 'Kc theo nồng độ.'),
    Q('Kc chỉ phụ thuộc?', ['Nhiệt độ','Áp suất','Nồng độ ban đầu','Xúc tác'], 0, 'Kc = f(T).'),
    Q('Nguyên lý Le Chatelier: khi tác động vào hệ cân bằng?', ['Cân bằng chuyển dịch theo chiều chống lại tác động','Hệ phá huỷ','Không đổi','Đảo ngược'], 0, 'Chiều chống lại.'),
    Q('Tăng nồng độ chất tham gia, cân bằng chuyển dịch theo chiều?', ['Chiều thuận (giảm tác động)','Chiều nghịch','Không đổi','Phá huỷ'], 0, 'Theo chiều tạo sản phẩm.'),
    Q('Tăng áp suất hệ khí có Δn ≠ 0?', ['Chuyển về phía ít mol khí hơn','Phía nhiều mol khí','Không đổi','Phá huỷ'], 0, 'Để giảm áp suất.'),
    Q('Xúc tác có ảnh hưởng đến cân bằng?', ['Không (chỉ làm cân bằng đạt nhanh hơn)','Có (chuyển dịch thuận)','Có (chuyển dịch nghịch)','Phá huỷ cân bằng'], 0, 'Xúc tác = tăng tốc cả hai chiều.'),
  ]),

  M(3, 'Chương 2 — Sự điện ly · Khái niệm', [
    Q('Chất điện ly là?', ['Chất tan trong nước phân ly thành ion','Chất không tan','Chất rắn','Chất khí'], 0, 'Phân ly tạo ion.'),
    Q('Chất điện ly mạnh là?', ['Phân ly hoàn toàn (α=1)','Phân ly một phần','Không phân ly','Tự do'], 0, 'HCl, NaOH, NaCl.'),
    Q('Chất điện ly yếu là?', ['Phân ly một phần (α<1)','Phân ly hoàn toàn','Không phân ly','Tự do'], 0, 'CH₃COOH, NH₃.'),
    Q('Dung dịch chất điện ly có?', ['Dẫn điện được','Không dẫn điện','Cách điện','Phát sáng'], 0, 'Dẫn điện do ion.'),
    Q('Chất nào sau đây là điện ly mạnh?', ['NaCl','CH₃COOH','C₂H₅OH','Glucozơ'], 0, 'NaCl phân ly hoàn toàn.'),
    Q('Chất nào sau đây không điện ly?', ['Glucozơ','HCl','NaOH','CH₃COOH'], 0, 'Glucozơ là phân tử, không phân ly.'),
  ]),

  M(4, 'Axit - Bazơ - Muối theo thuyết Arrhenius và Bronsted', [
    Q('Theo Arrhenius, axit là chất khi tan trong nước phân ly cho?', ['Ion H⁺','Ion OH⁻','Ion Na⁺','Ion Cl⁻'], 0, 'HA → H⁺ + A⁻.'),
    Q('Bazơ theo Arrhenius cho ion?', ['OH⁻','H⁺','Na⁺','Cl⁻'], 0, 'MOH → M⁺ + OH⁻.'),
    Q('Theo Bronsted, axit là?', ['Chất cho proton (H⁺)','Chất nhận proton','Chất cho electron','Chất nhận electron'], 0, 'Axit Bronsted = donor H⁺.'),
    Q('Bazơ theo Bronsted là?', ['Chất nhận proton','Chất cho proton','Chất cho electron','Chất nhận electron'], 0, 'Bazơ Bronsted = nhận H⁺.'),
    Q('Muối là?', ['Hợp chất gồm cation kim loại (hoặc NH₄⁺) và anion gốc axit','Chỉ kim loại','Chỉ phi kim','Khí'], 0, 'Định nghĩa.'),
    Q('NaCl là muối?', ['Trung hoà','Axit','Bazơ','Lưỡng tính'], 0, 'NaCl = trung tính.'),
  ]),

  M(5, 'pH và chỉ thị màu', [
    Q('pH = ?', ['-log[H⁺]','[H⁺]','log[H⁺]','10·[H⁺]'], 0, 'pH = -log[H⁺].'),
    Q('pH = 7 dung dịch?', ['Trung tính','Axit','Bazơ','Không xác định'], 0, '[H⁺]=10⁻⁷.'),
    Q('pH < 7 dung dịch?', ['Axit','Bazơ','Trung tính','Lưỡng tính'], 0, 'pH thấp → axit.'),
    Q('pH > 7 dung dịch?', ['Bazơ','Axit','Trung tính','Lưỡng tính'], 0, 'pH cao → bazơ.'),
    Q('Quỳ tím chuyển đỏ trong môi trường?', ['Axit (pH<7)','Bazơ','Trung tính','Không đổi'], 0, 'Quỳ → đỏ khi axit.'),
    Q('Phenolphtalein chuyển hồng trong môi trường?', ['Bazơ (pH > 8,3)','Axit','Trung tính','Không đổi'], 0, 'Hồng khi pH cao.'),
  ]),

  M(6, 'Axit mạnh - axit yếu - bazơ mạnh - bazơ yếu', [
    Q('Axit mạnh ví dụ?', ['HCl, HNO₃, H₂SO₄','CH₃COOH','HF','H₂CO₃'], 0, 'Phân ly hoàn toàn.'),
    Q('Axit yếu điển hình?', ['CH₃COOH (giấm)','HCl','HNO₃','H₂SO₄'], 0, 'Phân ly không hoàn toàn.'),
    Q('Bazơ mạnh ví dụ?', ['NaOH, KOH, Ba(OH)₂','NH₃','Al(OH)₃','Cu(OH)₂'], 0, 'Tan hoàn toàn, phân ly hoàn toàn.'),
    Q('Bazơ yếu ví dụ?', ['NH₃ trong nước','NaOH','KOH','Ca(OH)₂'], 0, 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.'),
    Q('Hằng số phân ly axit Ka càng lớn?', ['Axit càng mạnh','Axit càng yếu','Không liên quan','Trung tính'], 0, 'Ka ↑ → mạnh.'),
    Q('Dung dịch HCl 0,1M pH ≈ ?', ['1','2','7','13'], 0, 'pH = -log(0,1) = 1.'),
  ]),

  M(7, 'Chương 3 — Nitơ và hợp chất · Nitơ N₂', [
    Q('Cấu hình electron N (Z=7)?', ['1s² 2s² 2p³','1s² 2s² 2p⁴','1s² 2s² 2p⁵','1s² 2s² 2p²'], 0, '7e.'),
    Q('Phân tử N₂ có liên kết?', ['Ba (N≡N)','Đơn','Đôi','Ion'], 0, 'N≡N rất bền.'),
    Q('N₂ ở điều kiện thường?', ['Khí, không màu, không mùi','Lỏng','Rắn','Khí màu vàng'], 0, 'Chiếm 78% không khí.'),
    Q('Số oxi hoá của N có thể là?', ['-3, 0, +1, +2, +3, +4, +5','Chỉ -3','Chỉ +5','Chỉ 0'], 0, 'Đa hoá trị.'),
    Q('N₂ + H₂ ⇌ NH₃ là phản ứng?', ['Tổng hợp ammoniac (Haber)','Phân huỷ','Cộng','Trao đổi'], 0, 'Quy trình Haber-Bosch.'),
    Q('NH₃ có tính?', ['Bazơ yếu','Axit yếu','Trung tính','Lưỡng tính'], 0, 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.'),
  ]),

  M(8, 'Axit Nitric HNO₃', [
    Q('HNO₃ là axit?', ['Mạnh và có tính oxi hoá mạnh','Yếu','Trung tính','Bazơ'], 0, 'HNO₃ đặc/loãng đều oxi hoá.'),
    Q('HNO₃ đặc tác dụng với Cu tạo khí?', ['NO₂ (nâu đỏ)','NO (không màu)','N₂','NH₃'], 0, 'Cu + HNO₃ đặc → NO₂.'),
    Q('HNO₃ loãng tác dụng với Cu tạo khí?', ['NO (không màu, hoá nâu trong không khí)','NO₂','N₂','H₂'], 0, '3Cu + 8HNO₃ loãng → 3Cu(NO₃)₂ + 2NO + 4H₂O.'),
    Q('Kim loại nào thụ động với HNO₃ đặc nguội?', ['Fe, Al, Cr','Cu','Ag','Zn'], 0, 'Tạo lớp oxit bảo vệ.'),
    Q('Muối nitrat khi nhiệt phân tạo?', ['Tuỳ loại: NO₂, O₂, MO hoặc M','Chỉ N₂','Chỉ NO','Không phân huỷ'], 0, 'Phụ thuộc vị trí kim loại.'),
    Q('HNO₃ ứng dụng?', ['Sản xuất phân đạm, thuốc nổ','Đường ăn','Mỹ phẩm','Đèn LED'], 0, 'Phân NH₄NO₃, TNT.'),
  ]),

  M(9, 'Photpho - Axit photphoric - Phân bón', [
    Q('Photpho có 2 dạng thù hình chính?', ['Photpho trắng và photpho đỏ','Đen và trắng','Vàng và đỏ','Xanh và đỏ'], 0, 'P trắng, P đỏ.'),
    Q('Photpho trắng có tính?', ['Rất độc, tự bốc cháy trong không khí > 40°C','Bền','Không độc','Bền không cháy'], 0, 'P₄ trắng độc.'),
    Q('Photpho đỏ?', ['Bền hơn, không độc, không tự cháy','Tự cháy','Rất độc','Tan trong nước'], 0, 'Dạng polyme bền.'),
    Q('Axit photphoric H₃PO₄ là axit?', ['Trung bình, 3 nấc','Mạnh','Bazơ','Trung tính'], 0, 'Axit 3 nấc.'),
    Q('Phân đạm chứa nguyên tố dinh dưỡng?', ['N','P','K','Ca'], 0, 'Đạm = N.'),
    Q('Phân lân chứa?', ['P','N','K','Ca'], 0, 'Lân = P.'),
  ]),

  M(10, 'Chương 4 — Cacbon và Silic', [
    Q('Cacbon có các dạng thù hình?', ['Kim cương, than chì, fullerene','Chỉ kim cương','Chỉ than','Chỉ graphit'], 0, '3 dạng phổ biến + fullerene C₆₀.'),
    Q('CO₂ là?', ['Khí gây hiệu ứng nhà kính','Khí oxi','Khí nitơ','Khí hydro'], 0, 'CO₂ greenhouse gas.'),
    Q('CO là khí?', ['Cực độc, không màu, không mùi','Có mùi','Không độc','Có màu'], 0, 'CO độc do gắn hemoglobin.'),
    Q('Silic Si nằm trong nhóm?', ['IVA','IA','VIIA','VIA'], 0, 'Si nhóm IVA (cùng C).'),
    Q('SiO₂ là?', ['Thạch anh, cát','Khí','Kim loại','Phi kim'], 0, 'SiO₂ = silica.'),
    Q('Silic dùng làm?', ['Chất bán dẫn, vi mạch điện tử','Vũ khí','Thực phẩm','Đường ăn'], 0, 'Si trong chip điện tử.'),
  ]),

  M(11, 'Chương 5 — Đại cương hoá hữu cơ · Khái niệm', [
    Q('Hợp chất hữu cơ là?', ['Hợp chất của cacbon (trừ CO, CO₂, muối cacbonat…)','Mọi hợp chất của C','Hợp chất của H','Hợp chất của O'], 0, 'C + một số trừ.'),
    Q('Hợp chất hữu cơ có nguyên tố chính?', ['C và H','C và O','H và O','C và N'], 0, 'C-H xương sống.'),
    Q('Đặc điểm chung của hợp chất hữu cơ?', ['Liên kết cộng hoá trị, kém bền nhiệt, đa số không tan trong nước','Liên kết ion','Bền nhiệt','Tan tốt trong nước'], 0, 'Cộng hoá trị.'),
    Q('Phản ứng hữu cơ thường?', ['Xảy ra chậm, theo nhiều hướng','Xảy ra nhanh','Một hướng','Tức thời'], 0, 'Cần xúc tác.'),
    Q('Phân loại hợp chất hữu cơ theo mạch?', ['Mạch hở (không vòng), mạch vòng','Chỉ mạch hở','Chỉ mạch vòng','Không phân loại'], 0, '2 loại chính.'),
    Q('Hydrocacbon là?', ['Hợp chất chỉ chứa C và H','Chứa C, H, O','Chỉ chứa C','Chỉ chứa H'], 0, 'CₙHₘ.'),
  ]),

  M(12, 'Đồng đẳng và đồng phân', [
    Q('Dãy đồng đẳng là?', ['Các chất có cấu trúc, tính chất tương tự, khác nhau nhóm CH₂','Cùng công thức phân tử','Cùng tính chất','Khác hoàn toàn'], 0, 'Hơn kém n·CH₂.'),
    Q('Đồng phân là?', ['Các chất cùng CTPT, khác CTCT','Khác CTPT','Cùng tính chất','Cùng CTCT'], 0, 'Đồng phân.'),
    Q('Đồng phân cấu tạo gồm?', ['Đồng phân mạch C, vị trí nhóm chức, nhóm chức','Chỉ mạch','Chỉ vị trí','Hình học'], 0, '3 loại đồng phân cấu tạo.'),
    Q('Đồng phân hình học (cis-trans) yêu cầu?', ['Có liên kết đôi C=C và mỗi C nối 2 nhóm khác nhau','Mạch thẳng','Vòng','Không liên kết đôi'], 0, 'cis/trans (Z/E).'),
    Q('C₄H₁₀ có mấy đồng phân?', ['2 (butan, isobutan)','3','1','4'], 0, 'n-butan và iso-butan.'),
    Q('CH₃-CH₂-OH và CH₃-O-CH₃ là?', ['Đồng phân nhóm chức','Đồng đẳng','Cùng chất','Đồng phân cis-trans'], 0, 'C₂H₆O: ancol và ete.'),
  ]),

  M(13, 'Công thức cấu tạo và danh pháp IUPAC', [
    Q('CTPT cho biết?', ['Số nguyên tử mỗi nguyên tố','Cách liên kết','Hình dạng','Tính chất'], 0, 'CₙHₘOₚ…'),
    Q('CTCT cho biết?', ['Thứ tự liên kết giữa các nguyên tử','Số nguyên tử','Khối lượng','Tính chất'], 0, 'Cấu tạo phân tử.'),
    Q('Đuôi -an dùng cho?', ['Ankan (no, mạch hở)','Anken','Ankin','Ancol'], 0, 'Metan, etan…'),
    Q('Đuôi -en dùng cho?', ['Anken (1 liên kết đôi)','Ankan','Ankin','Ancol'], 0, 'Eten = etilen.'),
    Q('Đuôi -in dùng cho?', ['Ankin (1 liên kết ba)','Ankan','Anken','Ancol'], 0, 'Etin = axetilen.'),
    Q('Đuôi -ol dùng cho?', ['Ancol (-OH)','Anken','Andehit','Axit'], 0, 'Etanol = C₂H₅OH.'),
  ]),

  M(14, 'Chương 6 — Hidrocacbon no · Ankan', [
    Q('Công thức tổng quát ankan?', ['CₙH₂ₙ₊₂ (n ≥ 1)','CₙH₂ₙ','CₙH₂ₙ₋₂','CₙHₙ'], 0, 'Ankan no.'),
    Q('Ankan đơn giản nhất?', ['Metan CH₄','Etan','Propan','Butan'], 0, 'CH₄.'),
    Q('Ankan có liên kết?', ['Toàn liên kết đơn (no)','Có liên kết đôi','Có liên kết ba','Ion'], 0, 'Đơn σ.'),
    Q('Phản ứng đặc trưng của ankan?', ['Thế (halogen, ánh sáng)','Cộng','Trùng hợp','Tách'], 0, 'Thế radical.'),
    Q('CH₄ + Cl₂ (ánh sáng) →?', ['CH₃Cl + HCl','CH₄Cl₂','CH₂Cl₂','CCl₄'], 0, 'Bước đầu metyl clorua.'),
    Q('Đốt cháy ankan tạo?', ['CO₂ + H₂O','CO + H₂O','C + H₂','CH₃OH'], 0, 'Cháy hoàn toàn.'),
  ]),

  M(15, 'Gốc ankyl và đồng phân ankan', [
    Q('Gốc ankyl tạo từ ankan bằng cách?', ['Loại 1 nguyên tử H','Thêm H','Loại OH','Thêm OH'], 0, '-CnH₂ₙ₊₁.'),
    Q('Gốc -CH₃ tên là?', ['Metyl','Etyl','Propyl','Butyl'], 0, 'Metyl.'),
    Q('Gốc -C₂H₅ tên là?', ['Etyl','Metyl','Propyl','Butyl'], 0, 'Etyl.'),
    Q('Tiền tố "iso" chỉ?', ['Có 1 nhánh CH₃ ở C áp chót','Mạch thẳng','Mạch vòng','Có liên kết đôi'], 0, 'iso-butan = 2-metylpropan.'),
    Q('C₅H₁₂ có mấy đồng phân?', ['3','2','4','5'], 0, 'n-pentan, iso-pentan, neopentan.'),
    Q('Quy tắc đánh số mạch chính?', ['Bắt đầu đầu gần nhánh nhất','Đầu xa nhánh','Bất kỳ','Giữa mạch'], 0, 'Tổng vị trí nhỏ nhất.'),
  ]),

  M(16, 'Chương 7 — Hidrocacbon không no · Anken', [
    Q('Công thức tổng quát anken?', ['CₙH₂ₙ (n ≥ 2)','CₙH₂ₙ₊₂','CₙH₂ₙ₋₂','CₙHₙ'], 0, 'Một nối đôi.'),
    Q('Anken đơn giản nhất?', ['Etilen C₂H₄','Metan','Propilen','Buten'], 0, 'C₂H₄.'),
    Q('Phản ứng đặc trưng của anken?', ['Cộng (H₂, X₂, HX, H₂O)','Thế','Cháy','Tách'], 0, 'Cộng vào nối đôi.'),
    Q('Quy tắc Markovnikov: HX cộng vào anken?', ['H gắn vào C nhiều H, X gắn vào C ít H','X gắn vào C nhiều H','H gắn vào C có nhánh','Đều'], 0, 'Markovnikov.'),
    Q('Anken làm mất màu?', ['Dung dịch Br₂ (nước brom)','Quỳ tím','NaOH','HCl'], 0, 'Brom + anken → addition.'),
    Q('Etilen trùng hợp tạo?', ['Polietilen (PE)','PVC','PS','PP'], 0, 'PE.'),
  ]),

  M(17, 'Ankađien và Ankin', [
    Q('Ankađien có?', ['2 liên kết đôi C=C','1 liên kết đôi','1 liên kết ba','Không có'], 0, 'CₙH₂ₙ₋₂ (mạch hở).'),
    Q('Buta-1,3-đien là?', ['CH₂=CH-CH=CH₂','CH₃-CH=CH-CH₃','CH₂=C=CH-CH₃','CH≡C-CH=CH₂'], 0, 'Đien liên hợp.'),
    Q('Buta-1,3-đien trùng hợp tạo?', ['Cao su buna','Cao su isopren','PE','PVC'], 0, 'Buna.'),
    Q('Công thức ankin?', ['CₙH₂ₙ₋₂ (≥2)','CₙH₂ₙ','CₙH₂ₙ₊₂','CₙHₙ'], 0, 'Một nối ba.'),
    Q('Ankin đơn giản nhất?', ['Axetilen C₂H₂','Etilen','Metan','Propin'], 0, 'C₂H₂.'),
    Q('Ankin đầu mạch (HC≡CR) phản ứng với AgNO₃/NH₃ tạo?', ['Kết tủa vàng AgC≡CR','Kết tủa trắng','Kết tủa đen','Không phản ứng'], 0, 'Nhận biết ankin đầu mạch.'),
  ]),

  M(18, 'Review HK1 — Cân bằng, điện ly, hữu cơ cơ bản', [
    Q('Kc phụ thuộc?', ['Nhiệt độ','Nồng độ','Áp suất','Xúc tác'], 0, 'Kc = f(T).'),
    Q('pH = 7 là?', ['Trung tính','Axit','Bazơ','Lưỡng tính'], 0, '[H⁺]=10⁻⁷.'),
    Q('HNO₃ là axit?', ['Mạnh, oxi hoá mạnh','Yếu','Trung tính','Bazơ'], 0, 'HNO₃.'),
    Q('Đồng phân là?', ['Cùng CTPT, khác CTCT','Khác CTPT','Cùng tính chất','Cùng CTCT'], 0, 'Đồng phân.'),
    Q('Ankan công thức?', ['CₙH₂ₙ₊₂','CₙH₂ₙ','CₙH₂ₙ₋₂','CₙHₙ'], 0, 'Ankan.'),
    Q('Anken phản ứng đặc trưng?', ['Cộng','Thế','Trùng hợp tạo polyme cũng có nhưng đặc trưng nhất là cộng','Phân huỷ'], 0, 'Cộng vào nối đôi.'),
  ]),

  // ──────────────── HK2 — Aren, dẫn xuất, ancol, andehit, axit ────────────────
  M(19, 'Hidrocacbon thơm — Benzen', [
    Q('Công thức benzen?', ['C₆H₆','C₆H₁₂','C₆H₁₄','C₇H₈'], 0, 'C₆H₆ vòng 6.'),
    Q('Cấu tạo benzen?', ['Vòng 6C với 3 liên kết đôi xen kẽ (thơm)','Mạch hở','Vòng 5C','Vòng 7C'], 0, 'Vòng thơm (Kekulé).'),
    Q('Phản ứng đặc trưng của benzen?', ['Thế (halogen, nitro hoá)','Cộng','Trùng hợp','Phân huỷ'], 0, 'Thế electrophilic.'),
    Q('Benzen + Br₂ (Fe xúc tác) →?', ['C₆H₅Br + HBr','C₆H₆Br₂','C₆H₁₂Br₆','Không phản ứng'], 0, 'Brom hoá nhân thơm.'),
    Q('Benzen có làm mất màu Br₂ nước không?', ['Không (chỉ thế khi có xúc tác Fe)','Có','Một phần','Tức thời'], 0, 'Khác anken.'),
    Q('Phản ứng cộng H₂ vào benzen tạo?', ['Xiclohexan C₆H₁₂','Hexan','Hexen','Toluen'], 0, 'Hidro hoá có Ni.'),
  ]),

  M(20, 'Toluen và đồng đẳng của benzen', [
    Q('Toluen có công thức?', ['C₆H₅-CH₃','C₆H₅-OH','C₆H₅-NH₂','C₆H₅-CHO'], 0, 'Toluen = metylbenzen.'),
    Q('Nhóm -CH₃ trên vòng benzen làm cho phản ứng thế?', ['Dễ hơn benzen, ưu tiên o và p','Khó hơn','Không phản ứng','Tạo m'], 0, '-CH₃ đẩy electron → activator o,p.'),
    Q('Toluen + KMnO₄ (nóng) tạo?', ['Axit benzoic C₆H₅-COOH','C₆H₅-CH₂OH','C₆H₅-CHO','Không phản ứng'], 0, 'Oxi hoá -CH₃ → -COOH.'),
    Q('Stiren có công thức?', ['C₆H₅-CH=CH₂','C₆H₅-CH₃','C₆H₅-CH₂-CH₃','C₆H₅-OH'], 0, 'Vinylbenzen.'),
    Q('Stiren trùng hợp tạo?', ['Polistiren (PS)','PE','PVC','PP'], 0, 'PS.'),
    Q('TNT là?', ['Trinitrotoluen — thuốc nổ','Polyme','Ancol','Axit'], 0, '2,4,6-trinitrotoluen.'),
  ]),

  M(21, 'Chương 8 — Dẫn xuất halogen', [
    Q('Dẫn xuất halogen công thức tổng quát?', ['R-X (X = F, Cl, Br, I)','R-OH','R-CHO','R-COOH'], 0, 'R-X.'),
    Q('Dẫn xuất halogen + NaOH (đun) →?', ['Ancol R-OH (phản ứng thế nucleophilic)','Andehit','Axit','Eter'], 0, 'Thuỷ phân.'),
    Q('Dẫn xuất halogen tách HX khi đun với KOH/ancol →?', ['Anken','Ankan','Ankin','Ancol'], 0, 'Phản ứng tách E.'),
    Q('CH₃Cl tên là?', ['Metyl clorua / Cloro metan','Metan','Etyl clorua','Vinyl clorua'], 0, 'CH₃Cl.'),
    Q('Vinyl clorua công thức?', ['CH₂=CHCl','CH₃Cl','CCl₄','CHCl₃'], 0, 'Trùng hợp tạo PVC.'),
    Q('Teflon là polyme của?', ['CF₂=CF₂ (tetrafluoroetilen)','CH₂=CH₂','CH₂=CHCl','CH₂=CH-CH₃'], 0, 'Polytetrafluoroetilen (PTFE).'),
  ]),

  M(22, 'Ancol — Cấu tạo, danh pháp, tính chất', [
    Q('Ancol có nhóm chức?', ['-OH (gắn vào C no)','-COOH','-CHO','-O-'], 0, 'R-OH.'),
    Q('Ancol no đơn chức công thức?', ['CₙH₂ₙ₊₁-OH (n ≥ 1)','CₙH₂ₙ-OH','CₙH₂ₙ₋₁-OH','CₙHₙ-OH'], 0, 'Ancol no.'),
    Q('Etanol công thức?', ['C₂H₅OH','CH₃OH','C₃H₇OH','C₄H₉OH'], 0, 'C₂H₅OH = rượu etylic.'),
    Q('Ancol + Na →?', ['ROH + Na → RONa + ½H₂','Không phản ứng','RH + NaOH','RONa + H'], 0, 'Tính axit yếu của -OH.'),
    Q('Ancol bậc 1 oxi hoá tạo?', ['Andehit, rồi axit cacboxylic','Xeton','Ete','Ankan'], 0, 'R-CH₂OH → R-CHO → R-COOH.'),
    Q('Ancol bậc 2 oxi hoá tạo?', ['Xeton','Andehit','Axit','Ankan'], 0, 'R-CHOH-R\' → R-CO-R\'.'),
  ]),

  M(23, 'Phenol', [
    Q('Phenol có công thức?', ['C₆H₅-OH','C₆H₅-CH₃','C₆H₅-NH₂','C₆H₅-CHO'], 0, 'Phenol = hydroxylbenzen.'),
    Q('Phenol có tính axit?', ['Yếu (mạnh hơn ancol)','Mạnh','Trung tính','Bazơ'], 0, 'Phenol Ka ≈ 10⁻¹⁰.'),
    Q('Phenol + NaOH →?', ['C₆H₅-ONa + H₂O','Không phản ứng','C₆H₅Na','C₆H₅OH₂'], 0, 'Phản ứng axit-bazơ.'),
    Q('Ancol có phản ứng với NaOH không?', ['Không','Có','Tuỳ ancol','Khử NaOH'], 0, 'Ancol không phản ứng NaOH.'),
    Q('Phenol + dung dịch Br₂ →?', ['Kết tủa trắng 2,4,6-tribromphenol','Không phản ứng','Brom đỏ','Kết tủa đen'], 0, 'Thế 3H ở vị trí 2,4,6.'),
    Q('Phenol ứng dụng?', ['Sản xuất nhựa phenol-fomandehit, dược phẩm','Đường ăn','Mỹ phẩm trang trí','Cao su'], 0, 'Bakelite.'),
  ]),

  M(24, 'Chương 9 — Andehit và Xeton', [
    Q('Andehit có nhóm chức?', ['-CHO','-COOH','-OH','-CO-'], 0, 'R-CHO.'),
    Q('Xeton có nhóm chức?', ['-CO- (giữa hai C)','-CHO','-COOH','-OH'], 0, 'R-CO-R\'.'),
    Q('Andehit fomic công thức?', ['HCHO','CH₃CHO','C₂H₅CHO','CH₃COCH₃'], 0, 'Metanal.'),
    Q('Andehit + AgNO₃/NH₃ →?', ['Kết tủa Ag (tráng gương)','Không phản ứng','Kết tủa đen','Kết tủa xanh'], 0, 'Phản ứng tráng bạc.'),
    Q('Xeton có tráng bạc không?', ['Không','Có','Một phần','Tuỳ xeton'], 0, 'Xeton không có H trên C=O.'),
    Q('Andehit + H₂ (Ni) →?', ['Ancol bậc 1','Ancol bậc 2','Axit','Ete'], 0, 'R-CHO + H₂ → R-CH₂OH.'),
  ]),

  M(25, 'Axit cacboxylic — Cấu tạo và tính chất', [
    Q('Axit cacboxylic có nhóm chức?', ['-COOH','-CHO','-OH','-CO-'], 0, 'R-COOH.'),
    Q('Axit fomic công thức?', ['HCOOH','CH₃COOH','C₂H₅COOH','CH₃CHO'], 0, 'Metanoic.'),
    Q('Axit axetic công thức?', ['CH₃COOH','HCOOH','C₂H₅COOH','C₃H₇COOH'], 0, 'CH₃COOH (giấm).'),
    Q('Axit cacboxylic + Na →?', ['RCOONa + ½H₂','Không phản ứng','RH + NaOH','Không thấy'], 0, 'Tính axit của -COOH.'),
    Q('Axit + bazơ →?', ['Muối + nước','Khí','Kết tủa','Không phản ứng'], 0, 'Trung hoà.'),
    Q('Axit + ancol (xúc tác H₂SO₄ đặc) →?', ['Este + H₂O','Andehit','Xeton','Ete'], 0, 'Phản ứng este hoá (thuận nghịch).'),
  ]),

  M(26, 'So sánh tính axit và phản ứng nhận biết', [
    Q('So sánh tính axit: HCOOH, CH₃COOH, C₂H₅COOH?', ['HCOOH > CH₃COOH > C₂H₅COOH','Ngược lại','Bằng nhau','Không xác định'], 0, 'Mạch C dài → axit yếu hơn.'),
    Q('Nhận biết ancol bằng?', ['Na (sủi bọt H₂)','AgNO₃/NH₃','Quỳ tím','NaOH'], 0, 'Na + ancol.'),
    Q('Nhận biết andehit?', ['AgNO₃/NH₃ tạo Ag (tráng gương)','Na','Quỳ tím','NaOH'], 0, 'Tollens.'),
    Q('Nhận biết axit cacboxylic?', ['Quỳ tím (đỏ) + NaHCO₃ (sủi CO₂)','AgNO₃/NH₃','Br₂','Không có'], 0, 'Axit yếu nhưng đủ làm đỏ quỳ.'),
    Q('Nhận biết phenol?', ['Dung dịch Br₂ tạo kết tủa trắng','Quỳ tím (không đổi)','Na','NaOH'], 0, 'Tribromphenol.'),
    Q('Nhận biết anken/ankin?', ['Br₂ nước (mất màu)','AgNO₃/NH₃ (ankin đầu mạch)','Cả 2','Tuỳ chất'], 2, 'Tuỳ loại.'),
  ]),

  M(27, 'Bài tập đốt cháy hợp chất hữu cơ', [
    Q('Đốt cháy hoàn toàn ankan tạo?', ['CO₂ và H₂O với n_H₂O > n_CO₂','CO₂ > H₂O','Bằng nhau','Chỉ CO₂'], 0, 'Ankan no: n_H₂O - n_CO₂ = n_ankan.'),
    Q('Đốt cháy anken thì?', ['n_CO₂ = n_H₂O','n_H₂O > n_CO₂','n_CO₂ > n_H₂O','Bằng 0'], 0, 'Anken: CₙH₂ₙ → n CO₂ và n H₂O.'),
    Q('Đốt cháy ankin?', ['n_CO₂ > n_H₂O','Bằng nhau','n_H₂O > n_CO₂','Không xác định'], 0, 'Ankin CₙH₂ₙ₋₂.'),
    Q('Đốt 0,1 mol CH₄ thu được bao nhiêu mol CO₂?', ['0,1','0,2','1','0,05'], 0, 'CH₄ + 2O₂ → CO₂ + 2H₂O.'),
    Q('Đốt 0,1 mol C₂H₄ thu được mol H₂O?', ['0,2','0,1','0,4','0,3'], 0, 'C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.'),
    Q('Nếu đốt X thu được n_CO₂ = n_H₂O, X có thể là?', ['Anken','Ankan','Ankin','Ancol no'], 0, 'Anken (hoặc đồng đẳng có CTPT CₙH₂ₙ).'),
  ]),

  M(28, 'Bài tập điện ly và pH', [
    Q('Dung dịch HCl 0,01M có pH?', ['2','1','12','7'], 0, '[H⁺]=10⁻² → pH=2.'),
    Q('Dung dịch NaOH 0,01M có pOH=2 → pH?', ['12','2','7','14'], 0, 'pH + pOH = 14.'),
    Q('Trộn 100ml HCl 0,1M + 100ml NaOH 0,1M. pH?', ['7 (trung tính)','1','13','11'], 0, 'Trung hoà hoàn toàn.'),
    Q('Dung dịch axit yếu pH > 1 với cùng nồng độ 0,1M?', ['Đúng (vì phân ly không hoàn toàn)','Sai','Không xác định','Tuỳ'], 0, 'CH₃COOH 0,1M pH ≈ 2,87.'),
    Q('Nước cất pH ?', ['7','0','14','1'], 0, 'Trung tính.'),
    Q('Đo pH bằng?', ['Máy đo pH hoặc giấy pH/chỉ thị màu','Cân','Nhiệt kế','Thước'], 0, 'pH meter.'),
  ]),

  M(29, 'Bài tập anken và ankin', [
    Q('Etilen C₂H₄ + Br₂ →?', ['CH₂Br-CH₂Br (1,2-đibrometan)','C₂H₄Br','C₂H₃Br','Không phản ứng'], 0, 'Cộng Br₂.'),
    Q('Propilen + HCl theo Markovnikov tạo?', ['CH₃-CHCl-CH₃ (2-clopropan)','CH₂Cl-CH₂-CH₃','CH₃-CH=CH₂','Không phản ứng'], 0, 'Markovnikov: 2-cloro.'),
    Q('Etilen + H₂O (H₂SO₄, t°) →?', ['CH₃-CH₂-OH (etanol)','CH₃-CHO','HCOOH','CH₃-O-CH₃'], 0, 'Hidrat hoá.'),
    Q('Axetilen C₂H₂ + AgNO₃/NH₃ →?', ['Ag-C≡C-Ag (kết tủa vàng)','Không phản ứng','Kết tủa trắng','Kết tủa đen'], 0, 'Nhận biết ankin đầu mạch.'),
    Q('Axetilen + H₂ (Ni, t°) →?', ['CH₃-CH₃ (etan)','CH₂=CH₂','CH₃-CHO','Không phản ứng'], 0, 'Cộng hoàn toàn 2 H₂.'),
    Q('Trùng hợp etilen tạo polyme nào?', ['PE','PVC','PS','PP'], 0, '[-CH₂-CH₂-]ₙ.'),
  ]),

  M(30, 'Bài tập ancol - phenol', [
    Q('Etanol + Na →?', ['C₂H₅ONa + ½H₂','C₂H₅Na + OH','Không phản ứng','CH₃OH'], 0, 'Tính axit yếu của -OH.'),
    Q('Etanol + CuO (t°) →?', ['CH₃CHO + Cu + H₂O','HCOOH','CH₃COOH','C₂H₆'], 0, 'Oxi hoá ancol bậc 1 → andehit.'),
    Q('Phenol + Na →?', ['C₆H₅ONa + ½H₂','Không phản ứng','Na phá huỷ','C₆H₅Na'], 0, 'Phenol cũng có -OH.'),
    Q('Phenol + NaOH →?', ['C₆H₅ONa + H₂O','Không phản ứng','C₆H₅Na','Phenol-OH'], 0, 'Khác ancol: phenol + NaOH có phản ứng.'),
    Q('Ancol etylic dùng để?', ['Pha chế đồ uống có cồn, dung môi, nhiên liệu','Cao su','Sơn','Kim loại'], 0, 'Đa dụng.'),
    Q('Glixerol C₃H₅(OH)₃ là?', ['Ancol đa chức (3 nhóm -OH)','Phenol','Andehit','Axit'], 0, 'Glixerin.'),
  ]),

  M(31, 'Bài tập andehit - axit cacboxylic', [
    Q('HCHO + AgNO₃/NH₃ (dư) → tỉ lệ HCHO : Ag?', ['1 : 4','1 : 2','1 : 1','2 : 1'], 0, 'HCHO có 2 lần oxi hoá lên CO₂ → 4Ag.'),
    Q('CH₃CHO + AgNO₃/NH₃ → tỉ lệ CHO : Ag?', ['1 : 2','1 : 4','1 : 1','2 : 1'], 0, '1 -CHO → 2 Ag.'),
    Q('CH₃COOH + NaHCO₃ →?', ['CH₃COONa + CO₂ + H₂O','Không phản ứng','CH₃COONa + H₂','CH₃CO + NaCO₃'], 0, 'Sủi CO₂.'),
    Q('Axit axetic + etanol (H₂SO₄ đặc) →?', ['CH₃COOC₂H₅ (etyl axetat) + H₂O','Anhidrit','Không phản ứng','CH₃COOH·C₂H₅OH'], 0, 'Phản ứng este hoá.'),
    Q('Giấm ăn chứa khoảng?', ['5% CH₃COOH','50% CH₃COOH','100% CH₃COOH','1% HCl'], 0, '~5% axit axetic.'),
    Q('Axit fomic HCOOH có nhóm?', ['-CHO + -COOH (vừa có tính andehit vừa axit)','Chỉ -COOH','Chỉ -CHO','Chỉ -OH'], 0, 'HCOOH tráng bạc được.'),
  ]),

  M(32, 'Tổng hợp chuỗi phản ứng hữu cơ', [
    Q('CH₄ → C₂H₂: phương pháp?', ['Nhiệt phân 1500°C, làm lạnh nhanh','Crackinh','Trùng hợp','Cộng'], 0, '2CH₄ → C₂H₂ + 3H₂.'),
    Q('C₂H₂ → C₂H₄: phương pháp?', ['Cộng H₂ (Pd/PbCO₃, t°)','Cộng Br₂','Trùng hợp','Phân huỷ'], 0, 'Hidro hoá có chọn lọc.'),
    Q('C₂H₄ → C₂H₅OH: phương pháp?', ['Cộng H₂O (H₂SO₄)','Cộng HCl','Cộng Br₂','Trùng hợp'], 0, 'Hidrat hoá.'),
    Q('C₂H₅OH → CH₃CHO: phương pháp?', ['Oxi hoá CuO/O₂','Khử','Trùng hợp','Cộng H₂O'], 0, 'Oxi hoá ancol bậc 1.'),
    Q('CH₃CHO → CH₃COOH: phương pháp?', ['Oxi hoá tiếp (O₂, xúc tác)','Khử','Trùng hợp','Cộng H₂'], 0, 'Oxi hoá andehit.'),
    Q('CH₃COOH + C₂H₅OH → ?', ['CH₃COOC₂H₅ + H₂O','CH₃COCH₃','CO₂ + H₂O','HCOOH'], 0, 'Etyl axetat.'),
  ]),

  M(33, 'Review HK2 — Hữu cơ', [
    Q('Benzen phản ứng đặc trưng?', ['Thế','Cộng','Trùng hợp','Phân huỷ'], 0, 'Thế thơm.'),
    Q('Toluen + KMnO₄ →?', ['Axit benzoic','Andehit benzoic','Phenol','Stiren'], 0, 'Oxi hoá -CH₃ thành -COOH.'),
    Q('Ancol bậc 2 oxi hoá tạo?', ['Xeton','Andehit','Axit','Ankan'], 0, 'Xeton.'),
    Q('Phenol có tính?', ['Axit yếu','Bazơ','Trung tính','Lưỡng tính'], 0, 'Mạnh hơn ancol nhưng yếu hơn axit cacbonic.'),
    Q('Andehit tráng bạc tạo?', ['Ag (kết tủa)','Au','Cu','Pt'], 0, 'AgNO₃/NH₃ → Ag.'),
    Q('Axit cacboxylic + NaHCO₃ →?', ['CO₂ + muối + H₂O','Không phản ứng','Kết tủa','Phá huỷ'], 0, 'Sủi CO₂.'),
  ]),

  M(34, 'Bài tập định lượng tổng hợp', [
    Q('Đốt cháy 0,1 mol C₂H₅OH thu CO₂?', ['0,2 mol','0,1 mol','0,3 mol','0,4 mol'], 0, 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.'),
    Q('Đốt 0,1 mol C₂H₅OH thu H₂O?', ['0,3 mol','0,2 mol','0,1 mol','0,4 mol'], 0, '3H₂O / phân tử.'),
    Q('Cho 4,6g Na vào etanol dư. V H₂ (đktc)?', ['2,24 lít','1,12 lít','4,48 lít','22,4 lít'], 0, 'n_Na = 0,2 → n_H₂ = 0,1 → 2,24 L.'),
    Q('0,1 mol CH₃COOH + Na dư thu V H₂ (đktc)?', ['1,12 L','2,24 L','22,4 L','0,56 L'], 0, '0,1 mol → 0,05 mol H₂ → 1,12 L.'),
    Q('Tỉ khối hơi của etilen so với H₂?', ['14','28','2','1'], 0, 'M(C₂H₄)=28, d=28/2=14.'),
    Q('Khối lượng 0,1 mol CH₃COOH?', ['6 g','60 g','6,5 g','3 g'], 0, 'M=60, m = 0,1·60 = 6.'),
  ]),

  M(35, 'Thi học kỳ — Tổng ôn cả năm', [
    Q('Le Chatelier: tăng nhiệt độ phản ứng toả nhiệt → cân bằng?', ['Chuyển nghịch','Chuyển thuận','Không đổi','Phá huỷ'], 0, 'Toả nhiệt: tăng T → nghịch.'),
    Q('pH dung dịch NaOH 0,1M?', ['13','1','7','14'], 0, '[OH⁻]=0,1 → pOH=1 → pH=13.'),
    Q('Nhận biết HCOOH với CH₃COOH?', ['HCOOH có tráng bạc, CH₃COOH thì không','Cả 2 đều tráng bạc','Không phân biệt','Quỳ tím'], 0, 'HCOOH có -CHO.'),
    Q('Hidrocacbon thơm + Br₂ (Fe) →?', ['Thế ở vòng','Cộng','Trùng hợp','Không phản ứng'], 0, 'Thế thơm.'),
    Q('Ancol bậc 1 oxi hoá nhẹ thành?', ['Andehit','Xeton','Axit ngay','Eter'], 0, 'Bậc 1: -CH₂OH → -CHO.'),
    Q('Phản ứng este hoá thuận nghịch nên cần?', ['H₂SO₄ đặc làm xúc tác và hút nước','Đun lạnh','Bazơ','Ánh sáng'], 0, 'H₂SO₄ đặc.'),
  ]),
];

export const H11HOA_SCENARIOS = indexBy(H11HOA_WEEKS);
