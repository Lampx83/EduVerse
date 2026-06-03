// ============================================================
// Lớp 10 · VẬT LÝ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Vật lí 10: Động học – Động lực học – Năng lượng – Nhiệt học).
// ID prefix: "H10LY-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10LY', 'vat-ly', n, title, qs, opts);

export const H10LY_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Mở đầu — Phương pháp nghiên cứu Vật lí', [
    Q('Vật lí học là?', ['Khoa học nghiên cứu các quy luật của vật chất, năng lượng và tương tác', 'Khoa học về xã hội', 'Khoa học về hoá chất', 'Khoa học về sinh vật'], 0, 'Vật lí nghiên cứu thế giới tự nhiên ở mức cơ bản nhất.'),
    Q('Phương pháp thực nghiệm trong Vật lí gồm?', ['Học thuộc', 'Quan sát → giả thuyết → thí nghiệm → kết luận', 'Suy luận thuần lý không cần thí nghiệm', 'Tính toán'], 1, 'Phương pháp khoa học chuẩn.'),
    Q('Đơn vị cơ bản của chiều dài trong SI?', ['Kilômét (km)', 'Inch (in)', 'Xentimét (cm)', 'Mét (m)'], 3, 'Hệ SI: chiều dài cơ bản là mét.'),
    Q('Đơn vị thời gian SI?', ['Phút (min)', 'Giờ (h)', 'Giây (s)', 'Ngày (d)'], 2, 'Giây là đơn vị thời gian cơ sở.'),
    Q('Sai số trong đo lường có thể do?', ['Không có sai số', 'Chỉ dụng cụ', 'Dụng cụ + phương pháp + người đo', 'Chỉ người'], 2, 'Sai số có nhiều nguyên nhân.'),
    Q('Đại lượng vectơ có?', ['Chỉ hướng', 'Là số phức', 'Độ lớn và hướng', 'Chỉ độ lớn'], 2, 'Vận tốc, lực, gia tốc là vectơ.'),
  ]),

  M(2, 'Chuyển động cơ — Tốc độ và vận tốc', [
    Q('Chuyển động cơ là?', ['Sự thay đổi nhiệt độ', 'Sự thay đổi hình dạng', 'Sự thay đổi vị trí của vật so với vật khác theo thời gian', 'Sự thay đổi khối lượng'], 2, 'Định nghĩa chuyển động cơ học.'),
    Q('Hệ quy chiếu gồm?', ['Chỉ đồng hồ', 'Chỉ hệ toạ độ', 'Chỉ vật mốc', 'Vật mốc + hệ toạ độ + đồng hồ'], 3, 'Hệ quy chiếu cần đủ 3 thành phần.'),
    Q('Tốc độ trung bình tính?', ['Quãng đường/thời gian', 'Độ dời/thời gian', 'Vận tốc/gia tốc', 'Thời gian/quãng đường'], 0, 'v_tb = s/t.'),
    Q('Vận tốc là đại lượng?', ['Đại lượng tỉ đối', 'Vectơ', 'Số nguyên', 'Vô hướng'], 1, 'Vận tốc có hướng → vectơ.'),
    Q('Độ dời khác quãng đường ở?', ['Ngược nghĩa', 'Như nhau', 'Độ dời là vectơ; quãng đường là vô hướng', 'Quãng đường là vectơ'], 2, 'Độ dời = vectơ nối điểm đầu cuối; quãng đường = tổng chiều dài đường đi.'),
    Q('Đơn vị vận tốc SI?', ['km/h (kilômét trên giờ)', 'm/s', 'cm/s (xentimét trên giây)', 'm/h (mét trên giờ)'], 1, 'SI dùng m/s.'),
  ]),

  M(3, 'Chuyển động thẳng đều', [
    Q('Chuyển động thẳng đều là?', ['Đường thẳng + gia tốc', 'Đường cong', 'Vận tốc thay đổi', 'Đường thẳng + vận tốc không đổi'], 3, 'Đường thẳng + v hằng số.'),
    Q('Công thức quãng đường thẳng đều?', ['s = ½at²', 's = v·t', 's = v + at', 's = v² /(2a)'], 1, 's = v·t (v không đổi).'),
    Q('Phương trình toạ độ thẳng đều?', ['x = v + t', 'x = x₀ + ½at²', 'x = a·t', 'x = x₀ + v·t'], 3, 'Toạ độ tuyến tính theo t.'),
    Q('Đồ thị x–t của chuyển động thẳng đều là?', ['Đường tròn', 'Parabol', 'Đường thẳng', 'Hypebol'], 2, 'Tuyến tính → đường thẳng.'),
    Q('Đồ thị v–t của thẳng đều là?', ['Đường thẳng nghiêng', 'Đường thẳng song song trục t', 'Đường tròn', 'Parabol'], 1, 'v không đổi → đường nằm ngang.'),
    Q('Một xe đi 60 km trong 2 h, vận tốc trung bình?', ['120 km/h', '15 km/h', '60 km/h', '30 km/h'], 3, 'v = s/t = 60/2 = 30.'),
  ]),

  M(4, 'Chuyển động thẳng biến đổi đều — Gia tốc', [
    Q('Gia tốc là?', ['Một loại lực tác dụng lên vật', 'Quãng đường', 'Đại lượng đặc trưng cho sự biến đổi vận tốc theo thời gian', 'Vận tốc'], 2, 'a = Δv/Δt.'),
    Q('Đơn vị gia tốc?', ['m/s²', 'm·s (mét nhân giây)', 'm²/s (mét vuông trên giây)', 'm/s (mét trên giây)'], 0, 'Đơn vị SI.'),
    Q('Công thức vận tốc trong chuyển động biến đổi đều?', ['v = s/t', 'v = v₀ + a·t', 'v = a·t', 'v = v₀·t'], 1, 'v phụ thuộc tuyến tính t.'),
    Q('Công thức quãng đường biến đổi đều?', ['s = a·t²', 's = v·t', 's = v₀t + ½at²', 's = v² /a'], 2, 's = v₀t + ½at².'),
    Q('Công thức liên hệ v² và s?', ['v = v₀ + a·s', 'v² = v₀ + 2a', 'v − v₀ = a·s', 'v² − v₀² = 2as'], 3, 'Công thức không thời gian.'),
    Q('Chuyển động nhanh dần đều khi?', ['a và v ngược chiều', 'a = 0 và v ≠ 0', 'v = 0 và a > 0', 'a và v cùng chiều'], 3, 'Cùng chiều → tăng tốc.'),
  ]),

  M(5, 'Sự rơi tự do', [
    Q('Sự rơi tự do là chuyển động?', ['Có lực ma sát', 'Có lực cản', 'Chỉ dưới tác dụng trọng lực', 'Mọi sự rơi'], 2, 'Bỏ qua sức cản không khí.'),
    Q('Gia tốc rơi tự do tại mặt đất?', ['5 m/s²', '15 m/s²', '1 m/s²', 'g ≈ 9,8 m/s² (~10 m/s²)'], 3, 'g ≈ 9,8 m/s².'),
    Q('Đặc điểm sự rơi tự do?', ['Ngẫu nhiên', 'Là chuyển động thẳng đều', 'Chậm dần', 'Là chuyển động nhanh dần đều với gia tốc g'], 3, 'Đặc điểm cơ bản của rơi tự do.'),
    Q('Một vật rơi từ độ cao h, vận tốc chạm đất?', ['v = √(2gh)', 'v = gh', 'v = g·h²', 'v = h/g'], 0, 'Áp dụng v² = 2gh (v₀ = 0).'),
    Q('Thời gian rơi từ độ cao h?', ['t = 2h·g', 't = h/g', 't = g/h', 't = √(2h/g)'], 3, 'Từ h = ½gt² → t = √(2h/g).'),
    Q('Vật nào rơi nhanh hơn trong chân không: cục sắt 1 kg hay lông gà 1 g?', ['Tuỳ vào hình dạng của vật', 'Lông gà nhanh hơn', 'Rơi cùng nhau', 'Sắt nhanh hơn'], 2, 'Trong chân không, g như nhau.'),
  ]),

  M(6, 'Chuyển động ném ngang và ném xiên', [
    Q('Chuyển động ném ngang được phân tích thành?', ['2 chuyển động: thẳng đều theo Ox + rơi tự do theo Oy', '3 chuyển động', 'Một chuyển động duy nhất', 'Không phân tích được'], 0, 'Quỹ đạo parabol.'),
    Q('Quỹ đạo ném ngang là?', ['Hyperbol', 'Đường thẳng', 'Parabol', 'Đường tròn'], 2, 'Là một nhánh parabol.'),
    Q('Tầm xa ném ngang phụ thuộc?', ['Khối lượng', 'Hình dạng vật', 'Màu sắc', 'v₀ và h ban đầu'], 3, 'Tầm xa = v₀·t với t = √(2h/g).'),
    Q('Trong ném xiên, góc cho tầm xa lớn nhất (cùng v₀, cùng mặt phẳng ngang)?', ['90°', '60°', '30°', '45°'], 3, 'Tầm xa max khi α = 45°.'),
    Q('Vận tốc ban đầu theo trục Ox trong ném ngang?', ['g·t (tăng dần theo thời gian)', 'v₀ (giữ không đổi)', '0', 'v₀·cos α'], 1, 'Theo phương ngang là chuyển động đều.'),
    Q('Vận tốc theo trục Oy trong ném ngang ban đầu?', ['v₀ (bằng vận tốc ném)', '0', 'v₀·sin α', 'g·t (tăng dần ngay từ đầu)'], 1, 'v_y₀ = 0 trong ném ngang.'),
  ]),

  M(7, 'Định luật I Newton — Quán tính', [
    Q('Định luật I Newton phát biểu?', ['Mọi lực đều có phản lực', 'Lực gây gia tốc', 'Vật không chịu lực hoặc chịu lực cân bằng thì giữ nguyên trạng thái đứng yên hoặc chuyển động thẳng đều', 'Tổng lực = m·a'], 2, 'Định luật quán tính.'),
    Q('Quán tính là?', ['Khối lượng', 'Lực tác dụng giữ vật chuyển động', 'Tốc độ', 'Xu hướng bảo toàn trạng thái chuyển động/đứng yên'], 3, 'Mọi vật đều có quán tính.'),
    Q('Đại lượng đặc trưng cho mức quán tính?', ['Vận tốc', 'Trọng lực', 'Khối lượng (m)', 'Gia tốc'], 2, 'm càng lớn → quán tính càng lớn.'),
    Q('Hiện tượng "khi xe đột ngột phanh, hành khách chúi về trước" do?', ['Sức cản', 'Trọng lực', 'Ma sát', 'Quán tính'], 3, 'Người vẫn theo quán tính.'),
    Q('Khi không có lực tác dụng, vận tốc vật?', ['Tăng đều theo thời gian', 'Bằng 0', 'Giảm dần về 0', 'Không đổi'], 3, 'Định luật I: v giữ nguyên (kể cả v = 0).'),
    Q('Hệ quy chiếu quán tính là?', ['Hệ gia tốc', 'Hệ quay', 'Hệ quy chiếu mà định luật I Newton đúng', 'Mọi hệ'], 2, 'Trong hệ quán tính, định luật Newton có dạng đơn giản nhất.'),
  ]),

  M(8, 'Định luật II Newton', [
    Q('Định luật II Newton: F = ?', ['m + a (cộng khối lượng và gia tốc)', 'm/a (khối lượng chia gia tốc)', 'm − a (hiệu khối lượng và gia tốc)', 'm·a'], 3, 'F = m·a (vectơ).'),
    Q('Đơn vị lực SI?', ['Pascal (Pa)', 'Joule (J)', 'Newton (N)', 'Watt (W)'], 2, '1 N = 1 kg·m/s².'),
    Q('Tổng lực tác dụng lên vật m = 2 kg gây gia tốc a = 3 m/s². F = ?', ['1,5 N', '5 N', '6 N', '9 N'], 2, 'F = 2·3 = 6 N.'),
    Q('Khi m tăng gấp đôi, F giữ nguyên thì a?', ['Không đổi', 'Tăng gấp đôi', 'Bằng 0', 'Giảm một nửa'], 3, 'a = F/m → m gấp đôi thì a giảm một nửa.'),
    Q('Vectơ a cùng hướng với?', ['Trọng lực', 'Vận tốc', 'Phản lực', 'Tổng hợp lực F'], 3, 'a // F.'),
    Q('Một vật chịu tổng lực bằng 0 thì?', ['a tăng', 'a = 0, v không đổi', 'Vật biến mất', 'v = 0 (vật luôn dừng lại)'], 1, 'F = 0 ⇒ a = 0 ⇒ v constant.'),
  ]),

  M(9, 'Định luật III Newton', [
    Q('Định luật III Newton phát biểu?', ['Mọi lực đều có phản lực: F_AB = −F_BA', 'Quán tính', 'F = m·a', 'Vật giữ nguyên trạng thái'], 0, 'Cặp lực và phản lực.'),
    Q('Cặp lực và phản lực có đặc điểm?', ['Cân bằng', 'Cùng hướng', 'Cùng độ lớn, ngược hướng, đặt vào 2 vật khác nhau', 'Cùng vật'], 2, 'Đặt vào 2 vật khác nhau → không triệt tiêu nhau.'),
    Q('Khi đi bộ, chân đẩy đất về sau thì?', ['Đất đẩy xuống', 'Đất đẩy chân về trước', 'Đất không đẩy gì', 'Đất đẩy lên'], 1, 'Phản lực đẩy người tiến.'),
    Q('Lực mà Trái Đất hút Mặt Trăng có phản lực là?', ['Không tồn tại phản lực trong hấp dẫn', 'Trọng lực', 'Mặt Trời hút Mặt Trăng', 'Mặt Trăng hút Trái Đất một lực cùng độ lớn'], 3, 'Định luật III áp dụng cho mọi cặp tương tác.'),
    Q('Cặp lực cân bằng khác cặp lực — phản lực ở?', ['Đặt vào 2 vật', 'Hướng cùng', 'Lực cân bằng đặt vào cùng 1 vật', 'Không khác'], 2, 'Lực cân bằng: cùng vật; lực-phản lực: 2 vật khác nhau.'),
    Q('Vì sao tên lửa bay lên?', ['Lực hút Mặt Trăng', 'Định luật I', 'Phụt khí xuống → khí đẩy tên lửa lên (định luật III)', 'Quán tính'], 2, 'Phản lực phụt khí.'),
  ]),

  M(10, 'Lực hấp dẫn — Trọng lực', [
    Q('Định luật vạn vật hấp dẫn: F = ?', ['G/(m₁·m₂)', 'G·m₁·m₂·r', 'G·m₁·m₂/r²', 'G·(m₁ + m₂)'], 2, 'Tỉ lệ thuận m₁m₂ và nghịch r².'),
    Q('Hằng số hấp dẫn G ≈ ?', ['9,8', '1', '6,67·10⁻¹¹ N·m²/kg²', '10'], 2, 'G ≈ 6,67·10⁻¹¹.'),
    Q('Trọng lực P = ?', ['m/g (khối lượng chia g)', 'm·a (lực tổng hợp)', 'm·v (động lượng)', 'm·g'], 3, 'P = m·g (g là gia tốc trọng trường).'),
    Q('Trọng lực và lực hấp dẫn?', ['Khác hoàn toàn', 'Trọng lực là lực hấp dẫn của Trái Đất tác dụng lên vật', 'Không liên quan', 'Ngược chiều'], 1, 'Trọng lực = lực hấp dẫn từ Trái Đất.'),
    Q('Trọng lượng phụ thuộc?', ['Hình dáng', 'Màu sắc', 'Vị trí (g thay đổi theo độ cao và vĩ độ)', 'Chỉ khối lượng'], 2, 'P = mg, g phụ thuộc nơi.'),
    Q('Khối lượng và trọng lượng?', ['Ngược nhau', 'Như nhau', 'Khối lượng không đổi; trọng lượng thay đổi theo g', 'Trọng lượng không đổi'], 2, 'm là bản chất; P phụ thuộc g.'),
  ]),

  M(11, 'Lực đàn hồi — Định luật Hooke', [
    Q('Lực đàn hồi xuất hiện khi?', ['Có chuyển động', 'Có trọng lực', 'Vật bị biến dạng đàn hồi', 'Có ma sát'], 2, 'Biến dạng đàn hồi sinh lực đàn hồi.'),
    Q('Định luật Hooke: F_đh = ?', ['k·m (độ cứng nhân khối lượng)', 'm·g (trọng lực treo vào lò xo)', 'k·|Δl|', 'k/Δl (độ cứng chia biến dạng)'], 2, 'F_đh tỉ lệ với độ biến dạng.'),
    Q('k trong định luật Hooke gọi là?', ['Khối lượng', 'Gia tốc', 'Độ cứng (N/m)', 'Hệ số ma sát'], 2, 'Hệ số đàn hồi/độ cứng.'),
    Q('Hướng lực đàn hồi của lò xo?', ['Theo phương ngang, không phụ thuộc biến dạng', 'Cùng hướng biến dạng', 'Ngược hướng biến dạng (hướng phục hồi)', 'Vuông góc'], 2, 'Lực đàn hồi luôn hướng về vị trí cân bằng.'),
    Q('Lò xo có k = 100 N/m, kéo dãn 0,1 m. Lực đàn hồi?', ['1000 N', '10 N', '1 N', '100 N'], 1, 'F = k·Δl = 100·0,1 = 10 N.'),
    Q('Giới hạn đàn hồi là?', ['Bằng độ biến dạng cực đại', 'Độ cứng k của lò xo', 'Đo độ cứng', 'Giới hạn mà sau đó vật không trở về hình dạng ban đầu'], 3, 'Vượt giới hạn → biến dạng dẻo.'),
  ]),

  M(12, 'Lực ma sát', [
    Q('Có những loại ma sát?', ['Ma sát trượt, ma sát lăn, ma sát nghỉ', 'Chỉ ma sát lăn', 'Chỉ ma sát trượt', 'Chỉ ma sát nghỉ'], 0, 'Ba loại chính.'),
    Q('Công thức ma sát trượt?', ['F_ms = m·g', 'F_ms = m·a', 'F_ms = k·Δl', 'F_ms = μ·N'], 3, 'μ là hệ số ma sát, N là phản lực vuông góc.'),
    Q('Ma sát trượt có chiều?', ['Ngược chiều chuyển động', 'Vuông góc', 'Cùng chiều', 'Cùng chiều với phản lực N'], 0, 'Ma sát cản trở chuyển động.'),
    Q('Hệ số ma sát nghỉ so với ma sát trượt?', ['Không liên quan', 'Nhỏ hơn', 'Lớn hơn', 'Bằng nhau'], 2, 'μ_nghỉ > μ_trượt.'),
    Q('Để giảm ma sát?', ['Tăng khối lượng', 'Tăng diện tích', 'Đổi màu', 'Bôi trơn, dùng ổ lăn, làm nhẵn'], 3, 'Các biện pháp giảm ma sát phổ biến.'),
    Q('Ma sát có lợi: vd?', ['Không có lợi', 'Cả 2 đều đúng', 'Xe phanh được', 'Đi lại không trượt'], 1, 'Nhiều ví dụ ma sát có lợi.'),
  ]),

  M(13, 'Tổng hợp và phân tích lực', [
    Q('Tổng hợp lực là?', ['Phân chia lực', 'Thay nhiều lực bằng một lực tương đương', 'Triệt tiêu lực', 'Đo lực'], 1, 'Tổng các vectơ lực thành một hợp lực.'),
    Q('Quy tắc hình bình hành áp dụng cho?', ['Lực ma sát', 'Tổng hợp 2 lực đồng quy', '3 lực', 'Lực hấp dẫn'], 1, '2 lực đồng quy: tổng = đường chéo hbh.'),
    Q('Hai lực cùng phương cùng chiều, F₁ = 3 N, F₂ = 4 N. Hợp lực?', ['1 N', '12 N', '7 N', '5 N'], 2, 'Cộng đại số: 3 + 4 = 7.'),
    Q('Hai lực cùng phương ngược chiều, F₁ = 5 N, F₂ = 3 N. Hợp lực?', ['2 N', '0 N', '8 N', '15 N'], 0, 'Hiệu đại số: 5 − 3 = 2.'),
    Q('Hai lực vuông góc F₁ = 3 N, F₂ = 4 N. Hợp lực?', ['7 N', '5 N', '12 N', '1 N'], 1, 'F = √(3² + 4²) = 5.'),
    Q('Phân tích lực là?', ['Cộng số học', 'Đo độ lớn của lực bằng lực kế', 'Tổng hợp', 'Thay 1 lực bằng 2 hay nhiều lực có tác dụng tương đương'], 3, 'Phân tích = ngược lại tổng hợp.'),
  ]),

  M(14, 'Chuyển động tròn đều', [
    Q('Chuyển động tròn đều là?', ['Quỹ đạo tròn + v thay đổi', 'Quỹ đạo tròn + tốc độ không đổi', 'Quỹ đạo elip', 'Quỹ đạo thẳng'], 1, 'Tròn + tốc độ không đổi.'),
    Q('Vận tốc trong chuyển động tròn đều có?', ['Độ lớn không đổi, hướng thay đổi', 'Cả độ lớn và hướng không đổi', 'Độ lớn thay đổi', 'Hướng không đổi'], 0, 'Tốc độ không đổi nhưng hướng đổi liên tục.'),
    Q('Gia tốc hướng tâm = ?', ['v/r (vận tốc chia bán kính)', 'v + r (tổng vận tốc và bán kính)', 'v²/r', 'v·r (vận tốc nhân bán kính)'], 2, 'a_ht = v²/r = ω²·r.'),
    Q('Tần số góc ω = ?', ['v·r (vận tốc nhân bán kính)', '2v', 'v/r', 'v + r (tổng vận tốc và bán kính)'], 2, 'ω = v/r = 2π/T.'),
    Q('Lực hướng tâm hướng về?', ['Tâm quỹ đạo', 'Ngược chiều v', 'Ra ngoài', 'Cùng chiều v'], 0, 'F_ht hướng về tâm.'),
    Q('Chu kỳ T và tần số f liên hệ?', ['T = f (chu kỳ bằng tần số)', 'T = 1/(2f)', 'T = 1/f', 'T = f²'], 2, 'T·f = 1.'),
  ]),

  M(15, 'Cân bằng của vật rắn — Mômen lực', [
    Q('Mômen lực M = ?', ['F + d (tổng lực và cánh tay đòn)', 'F/d (lực chia cánh tay đòn)', 'F·t (lực nhân thời gian)', 'F·d (d là cánh tay đòn)'], 3, 'M = F·d, đo bằng N·m.'),
    Q('Điều kiện cân bằng vật rắn có trục quay cố định?', ['Tổng khối lượng = 0', 'Tổng lực = 0', 'Tổng vận tốc = 0', 'Tổng mômen lực = 0'], 3, 'ΣM = 0.'),
    Q('Đơn vị mômen lực?', ['Joule (J)', 'Watt (W)', 'Pascal (Pa)', 'N·m'], 3, 'N·m (giống đơn vị J nhưng bản chất khác).'),
    Q('Cánh tay đòn là?', ['Độ lớn lực', 'Khoảng cách từ trục quay đến đường tác dụng lực', 'Vận tốc', 'Thời gian'], 1, 'Cánh tay đòn d = khoảng cách vuông góc.'),
    Q('Đòn bẩy có cánh tay đòn lớn?', ['Không hoạt động', 'Không khác', 'Cần nhiều lực', 'Cần ít lực để nâng vật'], 3, 'Đòn bẩy: tăng d → giảm F.'),
    Q('Quy tắc hợp lực 2 lực song song cùng chiều?', ['Hợp lực = tổng, đặt tại điểm chia trong tỉ lệ nghịch', 'Vuông góc', 'Triệt tiêu', 'Không thể tổng hợp hai lực song song'], 0, 'F = F₁ + F₂, d₁·F₁ = d₂·F₂.'),
  ]),

  M(16, 'Công và công suất', [
    Q('Công của lực F: A = ?', ['F·s (bỏ qua góc α)', 'F·s·cos α', 'F + s (tổng lực và quãng đường)', 'F/s (lực chia quãng đường)'], 1, 'A = F·s·cosα.'),
    Q('Đơn vị công?', ['Pascal', 'Watt (W)', 'Joule (J)', 'Newton'], 2, '1 J = 1 N·m.'),
    Q('Khi α = 90°, công bằng?', ['F + s (tổng lực và quãng đường)', 'F·s (giá trị lớn nhất)', 'Vô cùng', '0'], 3, 'cos90° = 0 → A = 0.'),
    Q('Công suất P = ?', ['A + t (tổng công và thời gian)', 'A − t (hiệu công và thời gian)', 'A·t (công nhân thời gian)', 'A/t'], 3, 'P = công/thời gian.'),
    Q('Đơn vị công suất?', ['Newton', 'Pascal', 'Watt (W)', 'Joule (J)'], 2, '1 W = 1 J/s.'),
    Q('1 mã lực (HP) ≈ ?', ['1 W', '1000 W', '100 W', '746 W'], 3, '1 HP ≈ 746 W.'),
  ]),

  M(17, 'Động năng — Thế năng — Cơ năng', [
    Q('Động năng W_đ = ?', ['m·a (lực tác dụng)', '½mv²', 'mv (động lượng)', 'm·g·h (thế năng)'], 1, 'W_đ = ½·m·v².'),
    Q('Thế năng trọng trường W_t = ?', ['m·v (động lượng)', 'm·g (trọng lực)', 'm·g·h', '½mv² (động năng)'], 2, 'W_t = mgh (mốc tại gốc).'),
    Q('Cơ năng = ?', ['W_đ·W_t', 'W_đ/W_t', 'W_đ + W_t', 'W_đ − W_t'], 2, 'Cơ năng = tổng động + thế.'),
    Q('Đơn vị năng lượng?', ['Watt (W)', 'Pascal', 'Newton', 'Joule (J)'], 3, '1 J = 1 N·m.'),
    Q('Khi vật rơi tự do, cơ năng?', ['Giảm dần do trọng lực', 'Tăng dần khi rơi xuống', 'Không xác định', 'Bảo toàn (nếu không có ma sát)'], 3, 'Định luật bảo toàn cơ năng.'),
    Q('Thế năng đàn hồi của lò xo W_t = ?', ['½kx²', 'k·x (giống định luật Hooke)', '½k·x (thiếu bình phương)', 'k·x² (quên hệ số ½)'], 0, 'W_t đàn hồi = ½kx².'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Vận tốc trung bình = ?', ['Quãng đường/thời gian', 'Lực/khối lượng', 'Gia tốc/thời gian', 'Độ dời/thời gian'], 0, 'v_tb = s/t.'),
    Q('Gia tốc rơi tự do?', ['g ≈ 9,8 m/s²', '15 m/s²', '5 m/s²', '100 m/s²'], 0, 'g ≈ 9,8 ≈ 10 m/s².'),
    Q('Định luật II Newton?', ['F = m − a', 'F = m·a', 'F = m + a', 'F = m/a'], 1, 'F = m·a.'),
    Q('Trọng lực P = ?', ['m·v (động lượng)', 'm/g (khối lượng chia g)', 'm·a (lực quán tính)', 'm·g'], 3, 'P = mg.'),
    Q('Công A = ?', ['F·s (bỏ qua cosα)', 'F·s·cos α', 'F·t (xung lượng của lực)', 'F + s (tổng lực và quãng đường)'], 1, 'A = F·s·cosα.'),
    Q('Cơ năng = ?', ['W_đ + W_t', 'W_đ − W_t', 'W_đ/W_t', 'W_đ·W_t'], 0, 'Tổng động và thế năng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Định luật bảo toàn năng lượng', [
    Q('Phát biểu định luật bảo toàn năng lượng?', ['Năng lượng không tự sinh ra hay mất đi, chỉ chuyển hoá hoặc truyền', 'Năng lượng đứng yên', 'Năng lượng có thể tạo ra', 'Năng lượng mất đi'], 0, 'Định luật cơ bản.'),
    Q('Khi có ma sát, cơ năng?', ['Tăng dần do ma sát sinh nhiệt', 'Bảo toàn', 'Không đổi', 'Không bảo toàn (chuyển một phần thành nhiệt)'], 3, 'Một phần cơ năng → nội năng (nhiệt).'),
    Q('Đơn vị năng lượng SI?', ['Watt (W)', 'Joule (J)', 'BTU (đơn vị Anh-Mỹ)', 'Calorie'], 1, 'J là đơn vị chuẩn.'),
    Q('1 calorie ≈ ?', ['1000 J', '1 J', '100 J', '4,18 J'], 3, '1 cal ≈ 4,184 J.'),
    Q('Định luật bảo toàn năng lượng áp dụng cho?', ['Chỉ nhiệt', 'Mọi hệ kín', 'Chỉ điện', 'Chỉ cơ học'], 1, 'Định luật phổ quát.'),
    Q('Năng lượng có thể tồn tại ở dạng?', ['Cơ năng, nhiệt năng, điện năng, hoá năng, hạt nhân,…', 'Chỉ điện', 'Chỉ cơ', 'Chỉ nhiệt'], 0, 'Nhiều dạng năng lượng.'),
  ]),

  M(20, 'Bảo toàn cơ năng — Bài tập', [
    Q('Vật rơi tự do từ độ cao h, vận tốc chạm đất?', ['v = g·h²', 'v = gh', 'v = h/g', 'v = √(2gh)'], 3, 'Bảo toàn: mgh = ½mv² → v² = 2gh.'),
    Q('Con lắc đơn dao động không ma sát, tại vị trí cao nhất?', ['Cả 2 = 0', 'W_đ = 0, W_t = max', 'W_t = 0', 'W_đ = max'], 1, 'Cao nhất: v = 0, h max.'),
    Q('Con lắc đơn tại vị trí cân bằng?', ['W_đ = max, W_t = min', 'W_t = max', 'Cả 2 = 0', 'W_đ = 0'], 0, 'Vị trí thấp nhất: v max.'),
    Q('Khi vật trượt xuống dốc nhẵn, cơ năng?', ['Không đổi nhưng thay đổi dạng', 'Mất dần', 'Tăng dần khi vật xuống thấp', 'Bảo toàn'], 3, 'Không ma sát → bảo toàn.'),
    Q('Vật rơi từ độ cao 5 m (g = 10 m/s²), vận tốc chạm đất?', ['15 m/s', '5 m/s', '10 m/s', '20 m/s'], 2, 'v = √(2·10·5) = √100 = 10 m/s.'),
    Q('Cơ năng = W_đ + W_t = ?', ['Giảm theo thời gian', 'Tăng theo thời gian', 'Hằng số nếu không có lực ma sát', 'Bằng 0'], 2, 'Không có lực không bảo toàn ⇒ hằng số.'),
  ]),

  M(21, 'Va chạm — Đàn hồi và không đàn hồi', [
    Q('Va chạm đàn hồi: đại lượng bảo toàn?', ['Khối lượng', 'Động lượng + động năng', 'Chỉ động lượng', 'Chỉ động năng'], 1, 'Va chạm hoàn toàn đàn hồi bảo toàn cả 2.'),
    Q('Va chạm không đàn hồi: bảo toàn?', ['Chỉ động lượng', 'Không gì', 'Cả động lượng và động năng', 'Chỉ động năng'], 0, 'Động năng mất một phần thành nhiệt/biến dạng.'),
    Q('Va chạm mềm là va chạm?', ['Không tiếp xúc', 'Tách rời', 'Bật ngược', 'Hai vật dính vào nhau sau va chạm'], 3, 'Mềm = dính lại.'),
    Q('Định luật bảo toàn động lượng: ?', ['v₁ = v₂', 'm₁ = m₂', 'm₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'', 'Không có công thức'], 2, 'Tổng p trước = tổng p sau.'),
    Q('Đơn vị động lượng?', ['kg·m/s', 'Watt (W)', 'Joule (J)', 'Newton (N)'], 0, 'p = m·v.'),
    Q('Va chạm xuyên tâm là?', ['Va chạm cạnh', 'Va chạm trượt', 'Va chạm bên', 'Va chạm trên đường nối tâm 2 vật'], 3, 'Xuyên tâm = thẳng theo trục.'),
  ]),

  M(22, 'Động lượng — Định luật bảo toàn động lượng', [
    Q('Động lượng p = ?', ['m + v (tổng khối lượng và vận tốc)', '½mv² (động năng)', 'm/v (khối lượng chia vận tốc)', 'm·v'], 3, 'p = m·v (vectơ).'),
    Q('Đơn vị động lượng?', ['kg·m/s', 'Newton (N)', 'Joule (J)', 'Watt (W)'], 0, 'kg·m/s.'),
    Q('Trong hệ kín, tổng động lượng?', ['Bằng 0', 'Bảo toàn', 'Giảm dần do va chạm', 'Tăng do sinh nội năng'], 1, 'Định luật bảo toàn động lượng.'),
    Q('Định luật II Newton dạng động lượng?', ['F = m·a chỉ có dạng này', 'F = Δp/Δt', 'F = p/t', 'F = p·t'], 1, 'F = Δp/Δt là dạng tổng quát.'),
    Q('Khi bắn súng, đạn bay về trước, súng?', ['Giật về sau (bảo toàn động lượng)', 'Đứng yên', 'Lùi cùng vận tốc', 'Bay theo đạn'], 0, 'Bảo toàn động lượng → súng giật ngược.'),
    Q('Hai xe va chạm mềm: m₁v₁ + m₂v₂ = (m₁+m₂)v\'. Đây là?', ['Bảo toàn động lượng', 'Định luật II', 'Bảo toàn cơ năng', 'Bảo toàn động năng'], 0, 'Va chạm mềm bảo toàn động lượng.'),
  ]),

  M(23, 'Cấu tạo chất — Thuyết động học phân tử', [
    Q('Theo thuyết động học phân tử, vật chất gồm?', ['Chỉ đứng yên ở nhiệt thấp', 'Không có cấu tạo', 'Phân tử/nguyên tử chuyển động hỗn loạn không ngừng', 'Đứng yên'], 2, 'Phân tử luôn chuyển động (chuyển động Brown).'),
    Q('Nhiệt độ liên hệ với?', ['Chuyển động hỗn loạn của phân tử', 'Áp suất', 'Khối lượng', 'Hình dạng'], 0, 'Nhiệt độ ~ động năng trung bình của phân tử.'),
    Q('Ở thể rắn, phân tử?', ['Bay tự do', 'Dao động quanh vị trí cân bằng cố định', 'Chuyển động xa nhau', 'Đứng yên hoàn toàn'], 1, 'Liên kết chặt, chỉ dao động.'),
    Q('Ở thể khí, phân tử?', ['Cố định', 'Sát nhau', 'Chuyển động hỗn loạn, khoảng cách lớn', 'Dao động'], 2, 'Khí: phân tử xa, tự do.'),
    Q('Thể lỏng có đặc điểm?', ['Không liên kết', 'Sát nhau', 'Phân tử liên kết yếu hơn rắn, có thể trượt', 'Liên kết chặt'], 2, 'Lỏng có hình dạng theo bình.'),
    Q('Nhiệt độ không tuyệt đối?', ['0°C', '−100°C', '0 K (−273,15°C)', '100°C'], 2, '0 K = nhiệt độ thấp nhất lý thuyết.'),
  ]),

  M(24, 'Quá trình đẳng nhiệt — Định luật Boyle-Mariotte', [
    Q('Định luật Boyle-Mariotte: ?', ['p·V·T = hằng số', 'p + V = hằng số', 'p/V = hằng số', 'p·V = hằng số (T không đổi)'], 3, 'Đẳng nhiệt: pV không đổi.'),
    Q('Đường biểu diễn p-V của quá trình đẳng nhiệt là?', ['Hypebol', 'Parabol', 'Đường tròn', 'Đường thẳng'], 0, 'pV = const → hypebol.'),
    Q('Khí lý tưởng có thể tích 2 L ở áp suất 1 atm, ép xuống 1 L (T không đổi). Áp suất mới?', ['1 atm', '0,5 atm', '2 atm', '4 atm'], 2, 'p₁V₁ = p₂V₂ → 1·2 = p₂·1 → p₂ = 2.'),
    Q('Quá trình đẳng nhiệt nghĩa là?', ['Cả 3 không đổi', 'Áp suất không đổi', 'Nhiệt độ không đổi', 'Thể tích không đổi'], 2, 'Iso = không đổi; nhiệt = T.'),
    Q('Điều kiện áp dụng Boyle-Mariotte?', ['Mọi khí', 'Chất lỏng', 'Mọi điều kiện', 'Khí lý tưởng, T không đổi, lượng khí không đổi'], 3, 'Cần đủ điều kiện.'),
    Q('Áp suất khí lý tưởng phụ thuộc?', ['Chỉ thể tích', 'Chỉ khối lượng', 'Chỉ hình dạng bình', 'Mật độ phân tử và nhiệt độ'], 3, 'Áp suất do va chạm phân tử.'),
  ]),

  M(25, 'Quá trình đẳng tích — Định luật Charles (Sác lơ)', [
    Q('Định luật Charles (đẳng tích): ?', ['p/T = hằng số', 'p − T = hằng số', 'p·T = hằng số', 'p·V = hằng số'], 0, 'Đẳng tích: p tỉ lệ T (Kelvin).'),
    Q('Đường biểu diễn p-T của quá trình đẳng tích?', ['Đường thẳng đi qua gốc (với T = 0 K)', 'Parabol', 'Đường cong tuỳ', 'Hypebol'], 0, 'p ~ T → tuyến tính qua O.'),
    Q('Quá trình đẳng tích?', ['Cả p, V, T đều không đổi', 'p không đổi', 'V không đổi', 'T không đổi'], 2, 'Iso + chore = thể tích.'),
    Q('Nhiệt độ Kelvin liên hệ Celsius?', ['T(K) = T(°C) − 273', 'T(K) = T(°C)', 'T(K) = T(°C) + 273', 'T(K) = 2·T(°C)'], 2, '0°C = 273 K.'),
    Q('Khí ở 27°C có áp suất 2 atm. Khi đun lên 327°C (V không đổi), áp suất?', ['4 atm', '1 atm', '3 atm', '5 atm'], 0, 'T₁ = 300 K, T₂ = 600 K → p₂ = p₁·T₂/T₁ = 2·2 = 4 atm.'),
    Q('Charles là nhà bác học nước nào?', ['Người Đức', 'Người Mỹ', 'Người Anh', 'Pháp'], 3, 'Jacques Charles, người Pháp.'),
  ]),

  M(26, 'Phương trình trạng thái khí lý tưởng', [
    Q('Phương trình trạng thái khí lý tưởng?', ['p/T = const', 'p·V·T = const', 'p + V = const', 'p·V/T = hằng số (cho lượng khí xác định)'], 3, 'Tổng hợp 3 quá trình.'),
    Q('Phương trình Clapeyron-Mendeleev?', ['p = n·R', 'p·V = T', 'p·V = R·T', 'p·V = n·R·T'], 3, 'pV = nRT (n: số mol).'),
    Q('Hằng số khí lý tưởng R = ?', ['8,31 J/(mol·K)', '9,8', '100', '1000'], 0, 'R ≈ 8,31 J/(mol·K).'),
    Q('Khí lý tưởng là?', ['Khí giả định: kích thước phân tử ≈ 0, không tương tác', 'Chất lỏng', 'Chất rắn', 'Khí thực'], 0, 'Mô hình lý tưởng hoá.'),
    Q('Khí ở áp suất 1 atm, V = 2 L, T = 300 K. Khi p = 2 atm, T = 600 K, V mới?', ['1 L', '0,5 L', '2 L', '4 L'], 2, 'p₁V₁/T₁ = p₂V₂/T₂ → V₂ = 2.'),
    Q('Số mol n liên hệ khối lượng m và M?', ['n = m·M', 'n = m/M', 'n = M/m', 'n = m + M'], 1, 'n = số mol = m/M.'),
  ]),

  M(27, 'Nội năng và sự biến thiên nội năng', [
    Q('Nội năng của vật là?', ['Chỉ động năng', 'Chỉ thế năng', 'Tổng động năng và thế năng của các phân tử', 'Năng lượng cơ học'], 2, 'Nội năng U = W_đ_phân tử + W_t_phân tử.'),
    Q('Nội năng phụ thuộc?', ['Chỉ nhiệt độ', 'Nhiệt độ và thể tích', 'Chỉ khối lượng', 'Chỉ hình dạng'], 1, 'U = U(T, V); với khí lý tưởng U = U(T).'),
    Q('Hai cách làm thay đổi nội năng?', ['Đổi thể tích', 'Chỉ thực hiện công', 'Thực hiện công và truyền nhiệt', 'Chỉ truyền nhiệt'], 2, 'Hai phương thức cơ bản.'),
    Q('Khi cọ xát 2 vật, nội năng?', ['Triệt tiêu', 'Giảm do tỏa nhiệt ra môi trường', 'Không đổi', 'Tăng (do công cọ xát chuyển thành nhiệt)'], 3, 'Cọ xát → nóng → tăng nội năng.'),
    Q('Nhiệt lượng Q dương khi?', ['Vật toả nhiệt', 'Không xác định', 'Vật không trao đổi', 'Vật nhận nhiệt'], 3, 'Quy ước: Q > 0 nhận; Q < 0 toả.'),
    Q('Công A dương khi?', ['Hệ sinh công ra môi trường (theo quy ước nhiệt động)', 'Không có công', 'Tuỳ vào loại quá trình nhiệt', 'Nhận công'], 0, 'Quy ước có thể khác nhau, thường A > 0 là hệ sinh công.'),
  ]),

  M(28, 'Nguyên lý I Nhiệt động lực học', [
    Q('Nguyên lý I: ?', ['ΔU = A + Q (theo quy ước Việt Nam phổ thông)', 'ΔU = A − Q', 'ΔU = A·Q', 'ΔU = Q/A'], 0, 'Biến thiên nội năng = tổng công nhận + nhiệt nhận.'),
    Q('Quá trình đẳng nhiệt: ΔU = ?', ['0 (với khí lý tưởng)', 'A (công của hệ)', 'Q + A (tổng nhiệt và công)', 'Q (nhiệt lượng nhận vào)'], 0, 'T không đổi → U không đổi (khí lý tưởng).'),
    Q('Quá trình đoạn nhiệt: Q = ?', ['A (bằng công sinh ra)', '0', 'Q ≠ 0 (có trao đổi nhiệt)', 'ΔU (bằng độ biến thiên nội năng)'], 1, 'Đoạn nhiệt = không trao đổi nhiệt.'),
    Q('Trong quá trình đoạn nhiệt giãn nở: nội năng?', ['Không đổi', 'Bằng 0', 'Giảm', 'Tăng do khí giãn nở'], 2, 'Khí sinh công, không nhận Q → U giảm.'),
    Q('Đơn vị nội năng?', ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'], 0, 'Như mọi năng lượng.'),
    Q('Nguyên lý I là dạng?', ['Bảo toàn động lượng', 'Bảo toàn moment', 'Bảo toàn năng lượng cho hệ nhiệt động', 'Bảo toàn khối lượng'], 2, 'Bảo toàn năng lượng áp dụng cho nhiệt.'),
  ]),

  M(29, 'Sự nóng chảy và đông đặc', [
    Q('Sự nóng chảy là?', ['Khí sang lỏng', 'Lỏng sang khí', 'Chuyển từ rắn sang lỏng', 'Rắn sang khí'], 2, 'Pha rắn → lỏng.'),
    Q('Nhiệt độ nóng chảy của nước đá?', ['−10°C (dưới điểm đóng băng)', '100°C', '0°C', '50°C'], 2, 'Ở áp suất tiêu chuẩn.'),
    Q('Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ?', ['Dao động', 'Không đổi', 'Tăng đều theo nhiệt lượng cấp', 'Giảm dần khi bắt đầu chảy'], 1, 'Nhiệt độ giữ nguyên cho đến khi chảy hết.'),
    Q('Nhiệt lượng cần để nóng chảy hoàn toàn vật khối lượng m: Q = ?', ['m·c·Δt', 'm/λ (đảo công thức)', 'λ·m', 'λ + m (tổng nhiệt riêng và khối lượng)'], 2, 'λ là nhiệt nóng chảy riêng.'),
    Q('Sự đông đặc là?', ['Khí sang rắn', 'Chuyển lỏng sang rắn', 'Rắn sang lỏng', 'Khí sang lỏng'], 1, 'Quá trình ngược nóng chảy.'),
    Q('Nhiệt độ đông đặc và nóng chảy của cùng một chất?', ['Đông đặc cao hơn', 'Không liên quan', 'Khác nhau', 'Bằng nhau'], 3, 'Cùng một nhiệt độ chuyển pha.'),
  ]),

  M(30, 'Sự bay hơi và ngưng tụ', [
    Q('Sự bay hơi xảy ra?', ['Ở mọi nhiệt độ tại mặt thoáng chất lỏng', 'Chỉ khi sôi', 'Chỉ ở 0°C', 'Không bao giờ'], 0, 'Bay hơi xảy ra liên tục.'),
    Q('Sự sôi khác bay hơi ở?', ['Không liên quan', 'Sôi xảy ra ở nhiệt độ xác định, cả khối lỏng', 'Như nhau', 'Ngược lại'], 1, 'Sôi: nhiệt độ sôi, trong toàn khối lỏng.'),
    Q('Nhiệt độ sôi của nước ở 1 atm?', ['200°C', '100°C', '50°C', '0°C'], 1, '100°C tại áp suất khí quyển chuẩn.'),
    Q('Bay hơi thu hay toả nhiệt?', ['Thu nhiệt', 'Toả nhiệt', 'Bằng 0', 'Không thay đổi'], 0, 'Bay hơi làm môi trường lạnh đi (toát mồ hôi).'),
    Q('Ngưng tụ là?', ['Chuyển khí sang lỏng', 'Rắn sang lỏng', 'Lỏng sang khí', 'Rắn sang khí'], 0, 'Ngược bay hơi.'),
    Q('Nhiệt lượng bay hơi Q = ?', ['L/m (đảo công thức)', 'L·m', 'm·c·Δt', 'L + m (tổng nhiệt hoá hơi và khối lượng)'], 1, 'L là nhiệt hoá hơi riêng.'),
  ]),

  M(31, 'Ôn tập Động học và Động lực học', [
    Q('Vận tốc tức thời?', ['Vận tốc tại một thời điểm xác định', 'Tốc độ trung bình', 'Gia tốc', 'Vận tốc trung bình'], 0, 'Tức thời ≠ trung bình.'),
    Q('Chuyển động thẳng biến đổi đều: v = ?', ['v₀ + ½at²', 'v₀·t (quãng đường đều)', 'v₀ + at', 'at (bỏ qua vận tốc đầu)'], 2, 'Công thức vận tốc.'),
    Q('Định luật I Newton nói về?', ['Quán tính', 'Phản lực', 'F = ma', 'Hấp dẫn'], 0, 'Định luật quán tính.'),
    Q('Định luật vạn vật hấp dẫn: F ~ ?', ['m₁m₂/r²', 'm·v (động lượng)', 'm₁ + m₂', 'r² (chỉ phụ thuộc khoảng cách)'], 0, 'F = G·m₁m₂/r².'),
    Q('Trọng lực P = ?', ['m/g (khối lượng chia g)', 'm·g', 'm·a (lực tổng hợp)', 'm·v (động lượng)'], 1, 'P = mg.'),
    Q('Lực đàn hồi F = ?', ['k·v (theo vận tốc)', 'k·|Δl|', 'm·a (định luật II Newton)', 'k·m (độ cứng nhân khối lượng)'], 1, 'Định luật Hooke.'),
  ]),

  M(32, 'Ôn tập Năng lượng và Bảo toàn', [
    Q('Động năng W_đ = ?', ['m·a (lực tổng hợp)', 'mv (động lượng)', 'mgh (thế năng)', '½mv²'], 3, 'W_đ = ½mv².'),
    Q('Thế năng trọng trường?', ['m·v (động lượng)', '½mv² (động năng)', 'mgh', 'm·g (trọng lực)'], 2, 'W_t = mgh.'),
    Q('Cơ năng bảo toàn khi?', ['Vận tốc bằng 0', 'Không có ma sát/lực không bảo toàn', 'Khối lượng bằng 0', 'Có ma sát'], 1, 'Điều kiện bảo toàn cơ năng.'),
    Q('Động lượng p = ?', ['m·v', 'm/v (khối lượng chia vận tốc)', 'm + v (tổng khối lượng và vận tốc)', '½mv² (động năng)'], 0, 'Vectơ tích khối lượng vận tốc.'),
    Q('Va chạm mềm bảo toàn?', ['Động lượng', 'Mọi thứ', 'Cơ năng', 'Động năng'], 0, 'Chỉ động lượng bảo toàn.'),
    Q('Công suất P = ?', ['A·t (công nhân thời gian)', 'A/t', 'F + s (tổng lực và quãng đường)', 'F·s (công của lực)'], 1, 'P = công/thời gian.'),
  ]),

  M(33, 'Ôn tập Nhiệt học', [
    Q('Định luật Boyle-Mariotte (đẳng nhiệt)?', ['p/T = const', 'pV = const', 'pV/T = const', 'V/T = const'], 1, 'Đẳng nhiệt.'),
    Q('Định luật Charles (đẳng tích)?', ['V/T = const', 'pV = const', 'p + V = const', 'p/T = const'], 3, 'Đẳng tích.'),
    Q('Phương trình trạng thái khí lý tưởng?', ['V/T = const', 'pV/T = const', 'pV = const', 'p/T = const'], 1, 'Tổng quát.'),
    Q('Nguyên lý I Nhiệt động: ΔU = ?', ['A·Q (công nhân nhiệt lượng)', 'A/Q (công chia nhiệt lượng)', 'A + Q', 'A − Q (công trừ nhiệt lượng)'], 2, 'Bảo toàn năng lượng cho hệ nhiệt.'),
    Q('Nhiệt độ Kelvin?', ['T(K) = 2·t(°C)', 'T(K) = t(°C) + 273', 'T(K) = t(°C) − 273', 'T(K) = t(°C)'], 1, '0°C = 273 K.'),
    Q('Nội năng khí lý tưởng phụ thuộc?', ['Chỉ áp suất', 'Chỉ nhiệt độ T', 'Cả 3 không', 'Chỉ thể tích'], 1, 'U = U(T) với khí lý tưởng.'),
  ]),

  M(34, 'Đề tổng hợp 1', [
    Q('Xe đi 100 km trong 2 h. Vận tốc trung bình?', ['50 km/h', '100 km/h', '200 km/h', '25 km/h'], 0, 'v = 100/2 = 50.'),
    Q('Vật m = 2 kg, F = 10 N. Gia tốc?', ['20 m/s²', '8 m/s²', '5 m/s²', '12 m/s²'], 2, 'a = F/m = 10/2 = 5.'),
    Q('Vật rơi từ 20 m (g = 10 m/s²). Vận tốc chạm đất?', ['10 m/s', '5 m/s', '40 m/s', '20 m/s'], 3, 'v = √(2·10·20) = √400 = 20.'),
    Q('Công của F = 5 N kéo vật đi 4 m cùng chiều?', ['9 J', '20 J', '1,25 J', '1 J'], 1, 'A = F·s = 5·4 = 20.'),
    Q('Vật m = 1 kg, v = 10 m/s. Động năng?', ['100 J', '50 J', '5 J', '10 J'], 1, 'W_đ = ½·1·100 = 50.'),
    Q('Khí ở 27°C (300 K). Đun lên 327°C (600 K), V không đổi. p tăng?', ['Giảm 2 lần', 'Không đổi', 'Gấp 3 lần', 'Gấp 2 lần'], 3, 'p ~ T → p₂/p₁ = 600/300 = 2.'),
  ]),

  M(35, 'Đề tổng hợp 2 — Cuối năm', [
    Q('Đại lượng nào là vectơ?', ['Khối lượng', 'Thời gian', 'Vận tốc', 'Nhiệt độ'], 2, 'Vectơ có hướng.'),
    Q('Gia tốc rơi tự do g ở mặt đất?', ['100 m/s²', '5 m/s²', '≈ 9,8 m/s²', '1 m/s²'], 2, 'g ≈ 9,8.'),
    Q('Định luật II Newton?', ['F = ma²', 'F = m·a', 'F = m/a', 'F = m + a'], 1, 'F = ma.'),
    Q('Định luật bảo toàn động lượng áp dụng cho?', ['Hệ mở có ngoại lực tác dụng', 'Hệ kín', 'Không áp dụng cho hệ nào', 'Mọi hệ'], 1, 'Hệ kín không có ngoại lực.'),
    Q('Sự bay hơi xảy ra?', ['Chỉ khi sôi', 'Chỉ ở 0°C', 'Ở mọi nhiệt độ', 'Không bao giờ'], 2, 'Liên tục tại mặt thoáng.'),
    Q('Phương trình trạng thái khí lý tưởng?', ['pV = nT', 'V = nRT', 'pV = nRT', 'pT = nRV'], 2, 'Clapeyron-Mendeleev.'),
  ]),
];

export const H10LY_SCENARIOS = indexBy(H10LY_WEEKS);
