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
    Q('Vật lí học là?', ['Khoa học nghiên cứu các quy luật của vật chất, năng lượng và tương tác','Khoa học về sinh vật','Khoa học về hoá chất','Khoa học về xã hội'], 0, 'Vật lí nghiên cứu thế giới tự nhiên ở mức cơ bản nhất.'),
    Q('Phương pháp thực nghiệm trong Vật lí gồm?', ['Quan sát → giả thuyết → thí nghiệm → kết luận','Đoán','Tính toán','Học thuộc'], 0, 'Phương pháp khoa học chuẩn.'),
    Q('Đơn vị cơ bản của chiều dài trong SI?', ['Mét (m)','cm','km','inch'], 0, 'Hệ SI: chiều dài cơ bản là mét.'),
    Q('Đơn vị thời gian SI?', ['Giây (s)','Phút','Giờ','Ngày'], 0, 'Giây là đơn vị thời gian cơ sở.'),
    Q('Sai số trong đo lường có thể do?', ['Dụng cụ + phương pháp + người đo','Chỉ dụng cụ','Chỉ người','Không có sai số'], 0, 'Sai số có nhiều nguyên nhân.'),
    Q('Đại lượng vectơ có?', ['Độ lớn và hướng','Chỉ độ lớn','Chỉ hướng','Là số phức'], 0, 'Vận tốc, lực, gia tốc là vectơ.'),
  ]),

  M(2, 'Chuyển động cơ — Tốc độ và vận tốc', [
    Q('Chuyển động cơ là?', ['Sự thay đổi vị trí của vật so với vật khác theo thời gian','Sự thay đổi khối lượng','Sự thay đổi nhiệt độ','Sự thay đổi hình dạng'], 0, 'Định nghĩa chuyển động cơ học.'),
    Q('Hệ quy chiếu gồm?', ['Vật mốc + hệ toạ độ + đồng hồ','Chỉ vật mốc','Chỉ đồng hồ','Chỉ hệ toạ độ'], 0, 'Hệ quy chiếu cần đủ 3 thành phần.'),
    Q('Tốc độ trung bình tính?', ['Quãng đường/thời gian','Độ dời/thời gian','Vận tốc/gia tốc','Thời gian/quãng đường'], 0, 'v_tb = s/t.'),
    Q('Vận tốc là đại lượng?', ['Vectơ','Vô hướng','Không có','Số nguyên'], 0, 'Vận tốc có hướng → vectơ.'),
    Q('Độ dời khác quãng đường ở?', ['Độ dời là vectơ; quãng đường là vô hướng','Như nhau','Ngược nghĩa','Quãng đường là vectơ'], 0, 'Độ dời = vectơ nối điểm đầu cuối; quãng đường = tổng chiều dài đường đi.'),
    Q('Đơn vị vận tốc SI?', ['m/s','km/h','m/h','cm/s'], 0, 'SI dùng m/s.'),
  ]),

  M(3, 'Chuyển động thẳng đều', [
    Q('Chuyển động thẳng đều là?', ['Đường thẳng + vận tốc không đổi','Đường thẳng + gia tốc','Đường cong','Vận tốc thay đổi'], 0, 'Đường thẳng + v hằng số.'),
    Q('Công thức quãng đường thẳng đều?', ['s = v·t','s = ½at²','s = v² /(2a)','s = v + at'], 0, 's = v·t (v không đổi).'),
    Q('Phương trình toạ độ thẳng đều?', ['x = x₀ + v·t','x = x₀ + ½at²','x = v + t','x = a·t'], 0, 'Toạ độ tuyến tính theo t.'),
    Q('Đồ thị x–t của chuyển động thẳng đều là?', ['Đường thẳng','Parabol','Hypebol','Đường tròn'], 0, 'Tuyến tính → đường thẳng.'),
    Q('Đồ thị v–t của thẳng đều là?', ['Đường thẳng song song trục t','Đường thẳng nghiêng','Parabol','Đường tròn'], 0, 'v không đổi → đường nằm ngang.'),
    Q('Một xe đi 60 km trong 2 h, vận tốc trung bình?', ['30 km/h','60 km/h','120 km/h','15 km/h'], 0, 'v = s/t = 60/2 = 30.'),
  ]),

  M(4, 'Chuyển động thẳng biến đổi đều — Gia tốc', [
    Q('Gia tốc là?', ['Đại lượng đặc trưng cho sự biến đổi vận tốc theo thời gian','Vận tốc','Quãng đường','Lực'], 0, 'a = Δv/Δt.'),
    Q('Đơn vị gia tốc?', ['m/s²','m/s','m·s','m²/s'], 0, 'Đơn vị SI.'),
    Q('Công thức vận tốc trong chuyển động biến đổi đều?', ['v = v₀ + a·t','v = a·t','v = v₀·t','v = s/t'], 0, 'v phụ thuộc tuyến tính t.'),
    Q('Công thức quãng đường biến đổi đều?', ['s = v₀t + ½at²','s = v·t','s = a·t²','s = v² /a'], 0, 's = v₀t + ½at².'),
    Q('Công thức liên hệ v² và s?', ['v² − v₀² = 2as','v − v₀ = a·s','v = v₀ + a·s','v² = v₀ + 2a'], 0, 'Công thức không thời gian.'),
    Q('Chuyển động nhanh dần đều khi?', ['a và v cùng chiều','a và v ngược chiều','a = 0','v = 0'], 0, 'Cùng chiều → tăng tốc.'),
  ]),

  M(5, 'Sự rơi tự do', [
    Q('Sự rơi tự do là chuyển động?', ['Chỉ dưới tác dụng trọng lực','Có lực ma sát','Có lực cản','Mọi sự rơi'], 0, 'Bỏ qua sức cản không khí.'),
    Q('Gia tốc rơi tự do tại mặt đất?', ['g ≈ 9,8 m/s² (~10 m/s²)','5 m/s²','15 m/s²','1 m/s²'], 0, 'g ≈ 9,8 m/s².'),
    Q('Đặc điểm sự rơi tự do?', ['Là chuyển động nhanh dần đều với gia tốc g','Đều','Chậm dần','Ngẫu nhiên'], 0, 'Đặc điểm cơ bản của rơi tự do.'),
    Q('Một vật rơi từ độ cao h, vận tốc chạm đất?', ['v = √(2gh)','v = gh','v = g·h²','v = h/g'], 0, 'Áp dụng v² = 2gh (v₀ = 0).'),
    Q('Thời gian rơi từ độ cao h?', ['t = √(2h/g)','t = h/g','t = 2h·g','t = g/h'], 0, 'Từ h = ½gt² → t = √(2h/g).'),
    Q('Vật nào rơi nhanh hơn trong chân không: cục sắt 1 kg hay lông gà 1 g?', ['Rơi cùng nhau','Sắt nhanh hơn','Lông gà nhanh hơn','Tuỳ'], 0, 'Trong chân không, g như nhau.'),
  ]),

  M(6, 'Chuyển động ném ngang và ném xiên', [
    Q('Chuyển động ném ngang được phân tích thành?', ['2 chuyển động: thẳng đều theo Ox + rơi tự do theo Oy','Một chuyển động duy nhất','3 chuyển động','Không phân tích được'], 0, 'Quỹ đạo parabol.'),
    Q('Quỹ đạo ném ngang là?', ['Parabol','Đường thẳng','Đường tròn','Hyperbol'], 0, 'Là một nhánh parabol.'),
    Q('Tầm xa ném ngang phụ thuộc?', ['v₀ và h ban đầu','Khối lượng','Hình dạng vật','Màu sắc'], 0, 'Tầm xa = v₀·t với t = √(2h/g).'),
    Q('Trong ném xiên, góc cho tầm xa lớn nhất (cùng v₀, cùng mặt phẳng ngang)?', ['45°','30°','60°','90°'], 0, 'Tầm xa max khi α = 45°.'),
    Q('Vận tốc ban đầu theo trục Ox trong ném ngang?', ['v₀ (giữ không đổi)','0','g·t','v₀·cos α'], 0, 'Theo phương ngang là chuyển động đều.'),
    Q('Vận tốc theo trục Oy trong ném ngang ban đầu?', ['0','v₀','g·t','v₀·sin α'], 0, 'v_y₀ = 0 trong ném ngang.'),
  ]),

  M(7, 'Định luật I Newton — Quán tính', [
    Q('Định luật I Newton phát biểu?', ['Vật không chịu lực hoặc chịu lực cân bằng thì giữ nguyên trạng thái đứng yên hoặc chuyển động thẳng đều','Lực gây gia tốc','Tổng lực = m·a','Mọi lực đều có phản lực'], 0, 'Định luật quán tính.'),
    Q('Quán tính là?', ['Xu hướng bảo toàn trạng thái chuyển động/đứng yên','Tốc độ','Lực','Khối lượng'], 0, 'Mọi vật đều có quán tính.'),
    Q('Đại lượng đặc trưng cho mức quán tính?', ['Khối lượng (m)','Vận tốc','Gia tốc','Trọng lực'], 0, 'm càng lớn → quán tính càng lớn.'),
    Q('Hiện tượng "khi xe đột ngột phanh, hành khách chúi về trước" do?', ['Quán tính','Trọng lực','Ma sát','Sức cản'], 0, 'Người vẫn theo quán tính.'),
    Q('Khi không có lực tác dụng, vận tốc vật?', ['Không đổi','Tăng','Giảm','Bằng 0'], 0, 'Định luật I: v giữ nguyên (kể cả v = 0).'),
    Q('Hệ quy chiếu quán tính là?', ['Hệ quy chiếu mà định luật I Newton đúng','Mọi hệ','Hệ quay','Hệ gia tốc'], 0, 'Trong hệ quán tính, định luật Newton có dạng đơn giản nhất.'),
  ]),

  M(8, 'Định luật II Newton', [
    Q('Định luật II Newton: F = ?', ['m·a','m/a','m + a','m − a'], 0, 'F = m·a (vectơ).'),
    Q('Đơn vị lực SI?', ['Newton (N)','Pa','J','W'], 0, '1 N = 1 kg·m/s².'),
    Q('Tổng lực tác dụng lên vật m = 2 kg gây gia tốc a = 3 m/s². F = ?', ['6 N','5 N','1,5 N','9 N'], 0, 'F = 2·3 = 6 N.'),
    Q('Khi m tăng gấp đôi, F giữ nguyên thì a?', ['Giảm một nửa','Tăng gấp đôi','Không đổi','Bằng 0'], 0, 'a = F/m → m gấp đôi thì a giảm một nửa.'),
    Q('Vectơ a cùng hướng với?', ['Tổng hợp lực F','Vận tốc','Trọng lực','Phản lực'], 0, 'a // F.'),
    Q('Một vật chịu tổng lực bằng 0 thì?', ['a = 0, v không đổi','a tăng','v = 0','Vật biến mất'], 0, 'F = 0 ⇒ a = 0 ⇒ v constant.'),
  ]),

  M(9, 'Định luật III Newton', [
    Q('Định luật III Newton phát biểu?', ['Mọi lực đều có phản lực: F_AB = −F_BA','F = m·a','Vật giữ nguyên trạng thái','Quán tính'], 0, 'Cặp lực và phản lực.'),
    Q('Cặp lực và phản lực có đặc điểm?', ['Cùng độ lớn, ngược hướng, đặt vào 2 vật khác nhau','Cùng vật','Cân bằng','Cùng hướng'], 0, 'Đặt vào 2 vật khác nhau → không triệt tiêu nhau.'),
    Q('Khi đi bộ, chân đẩy đất về sau thì?', ['Đất đẩy chân về trước','Đất không đẩy gì','Đất đẩy lên','Đất đẩy xuống'], 0, 'Phản lực đẩy người tiến.'),
    Q('Lực mà Trái Đất hút Mặt Trăng có phản lực là?', ['Mặt Trăng hút Trái Đất một lực cùng độ lớn','Không có','Mặt Trời hút Mặt Trăng','Trọng lực'], 0, 'Định luật III áp dụng cho mọi cặp tương tác.'),
    Q('Cặp lực cân bằng khác cặp lực — phản lực ở?', ['Lực cân bằng đặt vào cùng 1 vật','Đặt vào 2 vật','Hướng cùng','Không khác'], 0, 'Lực cân bằng: cùng vật; lực-phản lực: 2 vật khác nhau.'),
    Q('Vì sao tên lửa bay lên?', ['Phụt khí xuống → khí đẩy tên lửa lên (định luật III)','Lực hút Mặt Trăng','Định luật I','Quán tính'], 0, 'Phản lực phụt khí.'),
  ]),

  M(10, 'Lực hấp dẫn — Trọng lực', [
    Q('Định luật vạn vật hấp dẫn: F = ?', ['G·m₁·m₂/r²','G·m₁·m₂·r','G/(m₁·m₂)','G·(m₁ + m₂)'], 0, 'Tỉ lệ thuận m₁m₂ và nghịch r².'),
    Q('Hằng số hấp dẫn G ≈ ?', ['6,67·10⁻¹¹ N·m²/kg²','9,8','10','1'], 0, 'G ≈ 6,67·10⁻¹¹.'),
    Q('Trọng lực P = ?', ['m·g','m·a','m·v','m/g'], 0, 'P = m·g (g là gia tốc trọng trường).'),
    Q('Trọng lực và lực hấp dẫn?', ['Trọng lực là lực hấp dẫn của Trái Đất tác dụng lên vật','Khác hoàn toàn','Ngược chiều','Không liên quan'], 0, 'Trọng lực = lực hấp dẫn từ Trái Đất.'),
    Q('Trọng lượng phụ thuộc?', ['Vị trí (g thay đổi theo độ cao và vĩ độ)','Chỉ khối lượng','Hình dáng','Màu sắc'], 0, 'P = mg, g phụ thuộc nơi.'),
    Q('Khối lượng và trọng lượng?', ['Khối lượng không đổi; trọng lượng thay đổi theo g','Như nhau','Ngược nhau','Trọng lượng không đổi'], 0, 'm là bản chất; P phụ thuộc g.'),
  ]),

  M(11, 'Lực đàn hồi — Định luật Hooke', [
    Q('Lực đàn hồi xuất hiện khi?', ['Vật bị biến dạng đàn hồi','Có ma sát','Có trọng lực','Có chuyển động'], 0, 'Biến dạng đàn hồi sinh lực đàn hồi.'),
    Q('Định luật Hooke: F_đh = ?', ['k·|Δl|','k·m','m·g','k/Δl'], 0, 'F_đh tỉ lệ với độ biến dạng.'),
    Q('k trong định luật Hooke gọi là?', ['Độ cứng (N/m)','Khối lượng','Gia tốc','Hệ số ma sát'], 0, 'Hệ số đàn hồi/độ cứng.'),
    Q('Hướng lực đàn hồi của lò xo?', ['Ngược hướng biến dạng (hướng phục hồi)','Cùng hướng biến dạng','Vuông góc','Bất kỳ'], 0, 'Lực đàn hồi luôn hướng về vị trí cân bằng.'),
    Q('Lò xo có k = 100 N/m, kéo dãn 0,1 m. Lực đàn hồi?', ['10 N','100 N','1 N','1000 N'], 0, 'F = k·Δl = 100·0,1 = 10 N.'),
    Q('Giới hạn đàn hồi là?', ['Giới hạn mà sau đó vật không trở về hình dạng ban đầu','Đo độ cứng','Là 0','Không có'], 0, 'Vượt giới hạn → biến dạng dẻo.'),
  ]),

  M(12, 'Lực ma sát', [
    Q('Có những loại ma sát?', ['Ma sát trượt, ma sát lăn, ma sát nghỉ','Chỉ ma sát trượt','Chỉ ma sát lăn','Chỉ ma sát nghỉ'], 0, 'Ba loại chính.'),
    Q('Công thức ma sát trượt?', ['F_ms = μ·N','F_ms = m·a','F_ms = k·Δl','F_ms = m·g'], 0, 'μ là hệ số ma sát, N là phản lực vuông góc.'),
    Q('Ma sát trượt có chiều?', ['Ngược chiều chuyển động','Cùng chiều','Vuông góc','Bất kỳ'], 0, 'Ma sát cản trở chuyển động.'),
    Q('Hệ số ma sát nghỉ so với ma sát trượt?', ['Lớn hơn','Nhỏ hơn','Bằng nhau','Không liên quan'], 0, 'μ_nghỉ > μ_trượt.'),
    Q('Để giảm ma sát?', ['Bôi trơn, dùng ổ lăn, làm nhẵn','Tăng khối lượng','Tăng diện tích','Đổi màu'], 0, 'Các biện pháp giảm ma sát phổ biến.'),
    Q('Ma sát có lợi: vd?', ['Đi lại không trượt','Xe phanh được','Cả 2 đều đúng','Không có lợi'], 2, 'Nhiều ví dụ ma sát có lợi.'),
  ]),

  M(13, 'Tổng hợp và phân tích lực', [
    Q('Tổng hợp lực là?', ['Thay nhiều lực bằng một lực tương đương','Phân chia lực','Triệt tiêu lực','Đo lực'], 0, 'Tổng các vectơ lực thành một hợp lực.'),
    Q('Quy tắc hình bình hành áp dụng cho?', ['Tổng hợp 2 lực đồng quy','3 lực','Lực ma sát','Lực hấp dẫn'], 0, '2 lực đồng quy: tổng = đường chéo hbh.'),
    Q('Hai lực cùng phương cùng chiều, F₁ = 3 N, F₂ = 4 N. Hợp lực?', ['7 N','1 N','5 N','12 N'], 0, 'Cộng đại số: 3 + 4 = 7.'),
    Q('Hai lực cùng phương ngược chiều, F₁ = 5 N, F₂ = 3 N. Hợp lực?', ['2 N','8 N','15 N','0 N'], 0, 'Hiệu đại số: 5 − 3 = 2.'),
    Q('Hai lực vuông góc F₁ = 3 N, F₂ = 4 N. Hợp lực?', ['5 N','7 N','1 N','12 N'], 0, 'F = √(3² + 4²) = 5.'),
    Q('Phân tích lực là?', ['Thay 1 lực bằng 2 hay nhiều lực có tác dụng tương đương','Tổng hợp','Cộng số học','Đo'], 0, 'Phân tích = ngược lại tổng hợp.'),
  ]),

  M(14, 'Chuyển động tròn đều', [
    Q('Chuyển động tròn đều là?', ['Quỹ đạo tròn + tốc độ không đổi','Quỹ đạo tròn + v thay đổi','Quỹ đạo thẳng','Quỹ đạo elip'], 0, 'Tròn + tốc độ không đổi.'),
    Q('Vận tốc trong chuyển động tròn đều có?', ['Độ lớn không đổi, hướng thay đổi','Cả độ lớn và hướng không đổi','Độ lớn thay đổi','Hướng không đổi'], 0, 'Tốc độ không đổi nhưng hướng đổi liên tục.'),
    Q('Gia tốc hướng tâm = ?', ['v²/r','v·r','v + r','v/r'], 0, 'a_ht = v²/r = ω²·r.'),
    Q('Tần số góc ω = ?', ['v/r','v·r','v + r','2v'], 0, 'ω = v/r = 2π/T.'),
    Q('Lực hướng tâm hướng về?', ['Tâm quỹ đạo','Ra ngoài','Cùng chiều v','Ngược chiều v'], 0, 'F_ht hướng về tâm.'),
    Q('Chu kỳ T và tần số f liên hệ?', ['T = 1/f','T = f','T = f²','T = 1/(2f)'], 0, 'T·f = 1.'),
  ]),

  M(15, 'Cân bằng của vật rắn — Mômen lực', [
    Q('Mômen lực M = ?', ['F·d (d là cánh tay đòn)','F + d','F/d','F·t'], 0, 'M = F·d, đo bằng N·m.'),
    Q('Điều kiện cân bằng vật rắn có trục quay cố định?', ['Tổng mômen lực = 0','Tổng lực = 0','Tổng vận tốc = 0','Tổng khối lượng = 0'], 0, 'ΣM = 0.'),
    Q('Đơn vị mômen lực?', ['N·m','J','W','Pa'], 0, 'N·m (giống đơn vị J nhưng bản chất khác).'),
    Q('Cánh tay đòn là?', ['Khoảng cách từ trục quay đến đường tác dụng lực','Độ lớn lực','Thời gian','Vận tốc'], 0, 'Cánh tay đòn d = khoảng cách vuông góc.'),
    Q('Đòn bẩy có cánh tay đòn lớn?', ['Cần ít lực để nâng vật','Cần nhiều lực','Không khác','Không hoạt động'], 0, 'Đòn bẩy: tăng d → giảm F.'),
    Q('Quy tắc hợp lực 2 lực song song cùng chiều?', ['Hợp lực = tổng, đặt tại điểm chia trong tỉ lệ nghịch','Triệt tiêu','Vuông góc','Không có'], 0, 'F = F₁ + F₂, d₁·F₁ = d₂·F₂.'),
  ]),

  M(16, 'Công và công suất', [
    Q('Công của lực F: A = ?', ['F·s·cos α','F·s','F + s','F/s'], 0, 'A = F·s·cosα.'),
    Q('Đơn vị công?', ['Joule (J)','Newton','Watt','Pascal'], 0, '1 J = 1 N·m.'),
    Q('Khi α = 90°, công bằng?', ['0','F·s','F + s','Vô cùng'], 0, 'cos90° = 0 → A = 0.'),
    Q('Công suất P = ?', ['A/t','A·t','A − t','A + t'], 0, 'P = công/thời gian.'),
    Q('Đơn vị công suất?', ['Watt (W)','Joule','Newton','Pascal'], 0, '1 W = 1 J/s.'),
    Q('1 mã lực (HP) ≈ ?', ['746 W','100 W','1000 W','1 W'], 0, '1 HP ≈ 746 W.'),
  ]),

  M(17, 'Động năng — Thế năng — Cơ năng', [
    Q('Động năng W_đ = ?', ['½mv²','mv','m·g·h','m·a'], 0, 'W_đ = ½·m·v².'),
    Q('Thế năng trọng trường W_t = ?', ['m·g·h','½mv²','m·v','m·g'], 0, 'W_t = mgh (mốc tại gốc).'),
    Q('Cơ năng = ?', ['W_đ + W_t','W_đ − W_t','W_đ·W_t','W_đ/W_t'], 0, 'Cơ năng = tổng động + thế.'),
    Q('Đơn vị năng lượng?', ['Joule (J)','Watt','Newton','Pascal'], 0, '1 J = 1 N·m.'),
    Q('Khi vật rơi tự do, cơ năng?', ['Bảo toàn (nếu không có ma sát)','Tăng','Giảm','Không xác định'], 0, 'Định luật bảo toàn cơ năng.'),
    Q('Thế năng đàn hồi của lò xo W_t = ?', ['½kx²','½kx','kx','k·x²'], 0, 'W_t đàn hồi = ½kx².'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Vận tốc trung bình = ?', ['Quãng đường/thời gian','Độ dời/thời gian','Gia tốc/thời gian','Lực/khối lượng'], 0, 'v_tb = s/t.'),
    Q('Gia tốc rơi tự do?', ['g ≈ 9,8 m/s²','5 m/s²','15 m/s²','100 m/s²'], 0, 'g ≈ 9,8 ≈ 10 m/s².'),
    Q('Định luật II Newton?', ['F = m·a','F = m/a','F = m + a','F = m − a'], 0, 'F = m·a.'),
    Q('Trọng lực P = ?', ['m·g','m·a','m·v','m/g'], 0, 'P = mg.'),
    Q('Công A = ?', ['F·s·cos α','F·s','F + s','F·t'], 0, 'A = F·s·cosα.'),
    Q('Cơ năng = ?', ['W_đ + W_t','W_đ − W_t','W_đ·W_t','W_đ/W_t'], 0, 'Tổng động và thế năng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Định luật bảo toàn năng lượng', [
    Q('Phát biểu định luật bảo toàn năng lượng?', ['Năng lượng không tự sinh ra hay mất đi, chỉ chuyển hoá hoặc truyền','Năng lượng có thể tạo ra','Năng lượng mất đi','Năng lượng đứng yên'], 0, 'Định luật cơ bản.'),
    Q('Khi có ma sát, cơ năng?', ['Không bảo toàn (chuyển một phần thành nhiệt)','Bảo toàn','Tăng','Không đổi'], 0, 'Một phần cơ năng → nội năng (nhiệt).'),
    Q('Đơn vị năng lượng SI?', ['Joule (J)','Calorie','Watt','BTU'], 0, 'J là đơn vị chuẩn.'),
    Q('1 calorie ≈ ?', ['4,18 J','1 J','100 J','1000 J'], 0, '1 cal ≈ 4,184 J.'),
    Q('Định luật bảo toàn năng lượng áp dụng cho?', ['Mọi hệ kín','Chỉ cơ học','Chỉ nhiệt','Chỉ điện'], 0, 'Định luật phổ quát.'),
    Q('Năng lượng có thể tồn tại ở dạng?', ['Cơ năng, nhiệt năng, điện năng, hoá năng, hạt nhân,…','Chỉ cơ','Chỉ nhiệt','Chỉ điện'], 0, 'Nhiều dạng năng lượng.'),
  ]),

  M(20, 'Bảo toàn cơ năng — Bài tập', [
    Q('Vật rơi tự do từ độ cao h, vận tốc chạm đất?', ['v = √(2gh)','v = gh','v = g·h²','v = h/g'], 0, 'Bảo toàn: mgh = ½mv² → v² = 2gh.'),
    Q('Con lắc đơn dao động không ma sát, tại vị trí cao nhất?', ['W_đ = 0, W_t = max','W_đ = max','W_t = 0','Cả 2 = 0'], 0, 'Cao nhất: v = 0, h max.'),
    Q('Con lắc đơn tại vị trí cân bằng?', ['W_đ = max, W_t = min','W_đ = 0','W_t = max','Cả 2 = 0'], 0, 'Vị trí thấp nhất: v max.'),
    Q('Khi vật trượt xuống dốc nhẵn, cơ năng?', ['Bảo toàn','Mất dần','Tăng','Không đổi nhưng thay đổi dạng'], 0, 'Không ma sát → bảo toàn.'),
    Q('Vật rơi từ độ cao 5 m (g = 10 m/s²), vận tốc chạm đất?', ['10 m/s','5 m/s','15 m/s','20 m/s'], 0, 'v = √(2·10·5) = √100 = 10 m/s.'),
    Q('Cơ năng = W_đ + W_t = ?', ['Hằng số nếu không có lực ma sát','Tăng theo thời gian','Giảm theo thời gian','Bằng 0'], 0, 'Không có lực không bảo toàn ⇒ hằng số.'),
  ]),

  M(21, 'Va chạm — Đàn hồi và không đàn hồi', [
    Q('Va chạm đàn hồi: đại lượng bảo toàn?', ['Động lượng + động năng','Chỉ động lượng','Chỉ động năng','Khối lượng'], 0, 'Va chạm hoàn toàn đàn hồi bảo toàn cả 2.'),
    Q('Va chạm không đàn hồi: bảo toàn?', ['Chỉ động lượng','Chỉ động năng','Cả 2','Không gì'], 0, 'Động năng mất một phần thành nhiệt/biến dạng.'),
    Q('Va chạm mềm là va chạm?', ['Hai vật dính vào nhau sau va chạm','Tách rời','Bật ngược','Không tiếp xúc'], 0, 'Mềm = dính lại.'),
    Q('Định luật bảo toàn động lượng: ?', ['m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'','m₁ = m₂','v₁ = v₂','Không có công thức'], 0, 'Tổng p trước = tổng p sau.'),
    Q('Đơn vị động lượng?', ['kg·m/s','N','J','W'], 0, 'p = m·v.'),
    Q('Va chạm xuyên tâm là?', ['Va chạm trên đường nối tâm 2 vật','Va chạm cạnh','Va chạm bên','Va chạm trượt'], 0, 'Xuyên tâm = thẳng theo trục.'),
  ]),

  M(22, 'Động lượng — Định luật bảo toàn động lượng', [
    Q('Động lượng p = ?', ['m·v','m + v','m/v','½mv²'], 0, 'p = m·v (vectơ).'),
    Q('Đơn vị động lượng?', ['kg·m/s','N','J','W'], 0, 'kg·m/s.'),
    Q('Trong hệ kín, tổng động lượng?', ['Bảo toàn','Tăng','Giảm','Bằng 0'], 0, 'Định luật bảo toàn động lượng.'),
    Q('Định luật II Newton dạng động lượng?', ['F = Δp/Δt','F = p·t','F = p/t','F = m·a chỉ có dạng này'], 0, 'F = Δp/Δt là dạng tổng quát.'),
    Q('Khi bắn súng, đạn bay về trước, súng?', ['Giật về sau (bảo toàn động lượng)','Đứng yên','Bay theo đạn','Lùi cùng vận tốc'], 0, 'Bảo toàn động lượng → súng giật ngược.'),
    Q('Hai xe va chạm mềm: m₁v₁ + m₂v₂ = (m₁+m₂)v\'. Đây là?', ['Bảo toàn động lượng','Bảo toàn động năng','Bảo toàn cơ năng','Định luật II'], 0, 'Va chạm mềm bảo toàn động lượng.'),
  ]),

  M(23, 'Cấu tạo chất — Thuyết động học phân tử', [
    Q('Theo thuyết động học phân tử, vật chất gồm?', ['Phân tử/nguyên tử chuyển động hỗn loạn không ngừng','Đứng yên','Chỉ đứng yên ở nhiệt thấp','Không có cấu tạo'], 0, 'Phân tử luôn chuyển động (chuyển động Brown).'),
    Q('Nhiệt độ liên hệ với?', ['Chuyển động hỗn loạn của phân tử','Khối lượng','Hình dạng','Áp suất'], 0, 'Nhiệt độ ~ động năng trung bình của phân tử.'),
    Q('Ở thể rắn, phân tử?', ['Dao động quanh vị trí cân bằng cố định','Bay tự do','Chuyển động xa nhau','Đứng yên hoàn toàn'], 0, 'Liên kết chặt, chỉ dao động.'),
    Q('Ở thể khí, phân tử?', ['Chuyển động hỗn loạn, khoảng cách lớn','Cố định','Sát nhau','Dao động'], 0, 'Khí: phân tử xa, tự do.'),
    Q('Thể lỏng có đặc điểm?', ['Phân tử liên kết yếu hơn rắn, có thể trượt','Liên kết chặt','Không liên kết','Sát nhau'], 0, 'Lỏng có hình dạng theo bình.'),
    Q('Nhiệt độ không tuyệt đối?', ['0 K (−273,15°C)','0°C','100°C','−100°C'], 0, '0 K = nhiệt độ thấp nhất lý thuyết.'),
  ]),

  M(24, 'Quá trình đẳng nhiệt — Định luật Boyle-Mariotte', [
    Q('Định luật Boyle-Mariotte: ?', ['p·V = hằng số (T không đổi)','p/V = hằng số','p + V = hằng số','p·V·T = hằng số'], 0, 'Đẳng nhiệt: pV không đổi.'),
    Q('Đường biểu diễn p-V của quá trình đẳng nhiệt là?', ['Hypebol','Đường thẳng','Parabol','Đường tròn'], 0, 'pV = const → hypebol.'),
    Q('Khí lý tưởng có thể tích 2 L ở áp suất 1 atm, ép xuống 1 L (T không đổi). Áp suất mới?', ['2 atm','0,5 atm','1 atm','4 atm'], 0, 'p₁V₁ = p₂V₂ → 1·2 = p₂·1 → p₂ = 2.'),
    Q('Quá trình đẳng nhiệt nghĩa là?', ['Nhiệt độ không đổi','Thể tích không đổi','Áp suất không đổi','Cả 3 không đổi'], 0, 'Iso = không đổi; nhiệt = T.'),
    Q('Điều kiện áp dụng Boyle-Mariotte?', ['Khí lý tưởng, T không đổi, lượng khí không đổi','Mọi khí','Mọi điều kiện','Chất lỏng'], 0, 'Cần đủ điều kiện.'),
    Q('Áp suất khí lý tưởng phụ thuộc?', ['Mật độ phân tử và nhiệt độ','Chỉ thể tích','Chỉ khối lượng','Chỉ hình dạng bình'], 0, 'Áp suất do va chạm phân tử.'),
  ]),

  M(25, 'Quá trình đẳng tích — Định luật Charles (Sác lơ)', [
    Q('Định luật Charles (đẳng tích): ?', ['p/T = hằng số','p·T = hằng số','p − T = hằng số','p·V = hằng số'], 0, 'Đẳng tích: p tỉ lệ T (Kelvin).'),
    Q('Đường biểu diễn p-T của quá trình đẳng tích?', ['Đường thẳng đi qua gốc (với T = 0 K)','Hypebol','Parabol','Đường cong tuỳ'], 0, 'p ~ T → tuyến tính qua O.'),
    Q('Quá trình đẳng tích?', ['V không đổi','p không đổi','T không đổi','Cả 3'], 0, 'Iso + chore = thể tích.'),
    Q('Nhiệt độ Kelvin liên hệ Celsius?', ['T(K) = T(°C) + 273','T(K) = T(°C)','T(K) = T(°C) − 273','T(K) = 2·T(°C)'], 0, '0°C = 273 K.'),
    Q('Khí ở 27°C có áp suất 2 atm. Khi đun lên 327°C (V không đổi), áp suất?', ['4 atm','3 atm','1 atm','5 atm'], 0, 'T₁ = 300 K, T₂ = 600 K → p₂ = p₁·T₂/T₁ = 2·2 = 4 atm.'),
    Q('Charles là nhà bác học nước nào?', ['Pháp','Anh','Đức','Mỹ'], 0, 'Jacques Charles, người Pháp.'),
  ]),

  M(26, 'Phương trình trạng thái khí lý tưởng', [
    Q('Phương trình trạng thái khí lý tưởng?', ['p·V/T = hằng số (cho lượng khí xác định)','p·V·T = const','p/T = const','p + V = const'], 0, 'Tổng hợp 3 quá trình.'),
    Q('Phương trình Clapeyron-Mendeleev?', ['p·V = n·R·T','p·V = R·T','p·V = T','p = n·R'], 0, 'pV = nRT (n: số mol).'),
    Q('Hằng số khí lý tưởng R = ?', ['8,31 J/(mol·K)','9,8','100','1000'], 0, 'R ≈ 8,31 J/(mol·K).'),
    Q('Khí lý tưởng là?', ['Khí giả định: kích thước phân tử ≈ 0, không tương tác','Khí thực','Chất lỏng','Chất rắn'], 0, 'Mô hình lý tưởng hoá.'),
    Q('Khí ở áp suất 1 atm, V = 2 L, T = 300 K. Khi p = 2 atm, T = 600 K, V mới?', ['2 L','1 L','4 L','0,5 L'], 0, 'p₁V₁/T₁ = p₂V₂/T₂ → V₂ = 2.'),
    Q('Số mol n liên hệ khối lượng m và M?', ['n = m/M','n = m·M','n = M/m','n = m + M'], 0, 'n = số mol = m/M.'),
  ]),

  M(27, 'Nội năng và sự biến thiên nội năng', [
    Q('Nội năng của vật là?', ['Tổng động năng và thế năng của các phân tử','Chỉ động năng','Chỉ thế năng','Năng lượng cơ học'], 0, 'Nội năng U = W_đ_phân tử + W_t_phân tử.'),
    Q('Nội năng phụ thuộc?', ['Nhiệt độ và thể tích','Chỉ nhiệt độ','Chỉ hình dạng','Chỉ khối lượng'], 0, 'U = U(T, V); với khí lý tưởng U = U(T).'),
    Q('Hai cách làm thay đổi nội năng?', ['Thực hiện công và truyền nhiệt','Chỉ thực hiện công','Chỉ truyền nhiệt','Đổi thể tích'], 0, 'Hai phương thức cơ bản.'),
    Q('Khi cọ xát 2 vật, nội năng?', ['Tăng (do công cọ xát chuyển thành nhiệt)','Giảm','Không đổi','Triệt tiêu'], 0, 'Cọ xát → nóng → tăng nội năng.'),
    Q('Nhiệt lượng Q dương khi?', ['Vật nhận nhiệt','Vật toả nhiệt','Vật không trao đổi','Không xác định'], 0, 'Quy ước: Q > 0 nhận; Q < 0 toả.'),
    Q('Công A dương khi?', ['Hệ sinh công ra môi trường (theo quy ước nhiệt động)','Nhận công','Không có công','Tuỳ'], 0, 'Quy ước có thể khác nhau, thường A > 0 là hệ sinh công.'),
  ]),

  M(28, 'Nguyên lý I Nhiệt động lực học', [
    Q('Nguyên lý I: ?', ['ΔU = A + Q (theo quy ước Việt Nam phổ thông)','ΔU = A − Q','ΔU = A·Q','ΔU = Q/A'], 0, 'Biến thiên nội năng = tổng công nhận + nhiệt nhận.'),
    Q('Quá trình đẳng nhiệt: ΔU = ?', ['0 (với khí lý tưởng)','Q','A','Q + A'], 0, 'T không đổi → U không đổi (khí lý tưởng).'),
    Q('Quá trình đoạn nhiệt: Q = ?', ['0','ΔU','A','Q ≠ 0'], 0, 'Đoạn nhiệt = không trao đổi nhiệt.'),
    Q('Trong quá trình đoạn nhiệt giãn nở: nội năng?', ['Giảm','Tăng','Không đổi','Bằng 0'], 0, 'Khí sinh công, không nhận Q → U giảm.'),
    Q('Đơn vị nội năng?', ['Joule (J)','Watt','Newton','Pascal'], 0, 'Như mọi năng lượng.'),
    Q('Nguyên lý I là dạng?', ['Bảo toàn năng lượng cho hệ nhiệt động','Bảo toàn khối lượng','Bảo toàn động lượng','Bảo toàn moment'], 0, 'Bảo toàn năng lượng áp dụng cho nhiệt.'),
  ]),

  M(29, 'Sự nóng chảy và đông đặc', [
    Q('Sự nóng chảy là?', ['Chuyển từ rắn sang lỏng','Lỏng sang khí','Khí sang lỏng','Rắn sang khí'], 0, 'Pha rắn → lỏng.'),
    Q('Nhiệt độ nóng chảy của nước đá?', ['0°C','100°C','−10°C','50°C'], 0, 'Ở áp suất tiêu chuẩn.'),
    Q('Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ?', ['Không đổi','Tăng','Giảm','Dao động'], 0, 'Nhiệt độ giữ nguyên cho đến khi chảy hết.'),
    Q('Nhiệt lượng cần để nóng chảy hoàn toàn vật khối lượng m: Q = ?', ['λ·m','m·c·Δt','λ + m','m/λ'], 0, 'λ là nhiệt nóng chảy riêng.'),
    Q('Sự đông đặc là?', ['Chuyển lỏng sang rắn','Rắn sang lỏng','Khí sang lỏng','Khí sang rắn'], 0, 'Quá trình ngược nóng chảy.'),
    Q('Nhiệt độ đông đặc và nóng chảy của cùng một chất?', ['Bằng nhau','Khác nhau','Không liên quan','Đông đặc cao hơn'], 0, 'Cùng một nhiệt độ chuyển pha.'),
  ]),

  M(30, 'Sự bay hơi và ngưng tụ', [
    Q('Sự bay hơi xảy ra?', ['Ở mọi nhiệt độ tại mặt thoáng chất lỏng','Chỉ khi sôi','Chỉ ở 0°C','Không bao giờ'], 0, 'Bay hơi xảy ra liên tục.'),
    Q('Sự sôi khác bay hơi ở?', ['Sôi xảy ra ở nhiệt độ xác định, cả khối lỏng','Như nhau','Ngược lại','Không liên quan'], 0, 'Sôi: nhiệt độ sôi, trong toàn khối lỏng.'),
    Q('Nhiệt độ sôi của nước ở 1 atm?', ['100°C','0°C','50°C','200°C'], 0, '100°C tại áp suất khí quyển chuẩn.'),
    Q('Bay hơi thu hay toả nhiệt?', ['Thu nhiệt','Toả nhiệt','Không thay đổi','Bằng 0'], 0, 'Bay hơi làm môi trường lạnh đi (toát mồ hôi).'),
    Q('Ngưng tụ là?', ['Chuyển khí sang lỏng','Lỏng sang khí','Rắn sang khí','Rắn sang lỏng'], 0, 'Ngược bay hơi.'),
    Q('Nhiệt lượng bay hơi Q = ?', ['L·m','m·c·Δt','L + m','L/m'], 0, 'L là nhiệt hoá hơi riêng.'),
  ]),

  M(31, 'Ôn tập Động học và Động lực học', [
    Q('Vận tốc tức thời?', ['Vận tốc tại một thời điểm xác định','Vận tốc trung bình','Tốc độ trung bình','Gia tốc'], 0, 'Tức thời ≠ trung bình.'),
    Q('Chuyển động thẳng biến đổi đều: v = ?', ['v₀ + at','v₀·t','at','v₀ + ½at²'], 0, 'Công thức vận tốc.'),
    Q('Định luật I Newton nói về?', ['Quán tính','F = ma','Phản lực','Hấp dẫn'], 0, 'Định luật quán tính.'),
    Q('Định luật vạn vật hấp dẫn: F ~ ?', ['m₁m₂/r²','m₁ + m₂','r²','m·v'], 0, 'F = G·m₁m₂/r².'),
    Q('Trọng lực P = ?', ['m·g','m·a','m·v','m/g'], 0, 'P = mg.'),
    Q('Lực đàn hồi F = ?', ['k·|Δl|','k·m','m·a','k·v'], 0, 'Định luật Hooke.'),
  ]),

  M(32, 'Ôn tập Năng lượng và Bảo toàn', [
    Q('Động năng W_đ = ?', ['½mv²','mv','mgh','m·a'], 0, 'W_đ = ½mv².'),
    Q('Thế năng trọng trường?', ['mgh','½mv²','m·v','m·g'], 0, 'W_t = mgh.'),
    Q('Cơ năng bảo toàn khi?', ['Không có ma sát/lực không bảo toàn','Có ma sát','V = 0','M = 0'], 0, 'Điều kiện bảo toàn cơ năng.'),
    Q('Động lượng p = ?', ['m·v','m + v','m/v','½mv²'], 0, 'Vectơ tích khối lượng vận tốc.'),
    Q('Va chạm mềm bảo toàn?', ['Động lượng','Động năng','Cơ năng','Mọi thứ'], 0, 'Chỉ động lượng bảo toàn.'),
    Q('Công suất P = ?', ['A/t','A·t','F·s','F + s'], 0, 'P = công/thời gian.'),
  ]),

  M(33, 'Ôn tập Nhiệt học', [
    Q('Định luật Boyle-Mariotte (đẳng nhiệt)?', ['pV = const','p/T = const','V/T = const','pV/T = const'], 0, 'Đẳng nhiệt.'),
    Q('Định luật Charles (đẳng tích)?', ['p/T = const','pV = const','V/T = const','p + V = const'], 0, 'Đẳng tích.'),
    Q('Phương trình trạng thái khí lý tưởng?', ['pV/T = const','pV = const','p/T = const','V/T = const'], 0, 'Tổng quát.'),
    Q('Nguyên lý I Nhiệt động: ΔU = ?', ['A + Q','A − Q','A·Q','A/Q'], 0, 'Bảo toàn năng lượng cho hệ nhiệt.'),
    Q('Nhiệt độ Kelvin?', ['T(K) = t(°C) + 273','T(K) = t(°C)','T(K) = t(°C) − 273','T(K) = 2·t(°C)'], 0, '0°C = 273 K.'),
    Q('Nội năng khí lý tưởng phụ thuộc?', ['Chỉ nhiệt độ T','Chỉ thể tích','Chỉ áp suất','Cả 3 không'], 0, 'U = U(T) với khí lý tưởng.'),
  ]),

  M(34, 'Đề tổng hợp 1', [
    Q('Xe đi 100 km trong 2 h. Vận tốc trung bình?', ['50 km/h','100 km/h','200 km/h','25 km/h'], 0, 'v = 100/2 = 50.'),
    Q('Vật m = 2 kg, F = 10 N. Gia tốc?', ['5 m/s²','20 m/s²','12 m/s²','8 m/s²'], 0, 'a = F/m = 10/2 = 5.'),
    Q('Vật rơi từ 20 m (g = 10 m/s²). Vận tốc chạm đất?', ['20 m/s','10 m/s','40 m/s','5 m/s'], 0, 'v = √(2·10·20) = √400 = 20.'),
    Q('Công của F = 5 N kéo vật đi 4 m cùng chiều?', ['20 J','9 J','1 J','1,25 J'], 0, 'A = F·s = 5·4 = 20.'),
    Q('Vật m = 1 kg, v = 10 m/s. Động năng?', ['50 J','100 J','5 J','10 J'], 0, 'W_đ = ½·1·100 = 50.'),
    Q('Khí ở 27°C (300 K). Đun lên 327°C (600 K), V không đổi. p tăng?', ['Gấp 2 lần','Gấp 3 lần','Không đổi','Giảm 2 lần'], 0, 'p ~ T → p₂/p₁ = 600/300 = 2.'),
  ]),

  M(35, 'Đề tổng hợp 2 — Cuối năm', [
    Q('Đại lượng nào là vectơ?', ['Vận tốc','Khối lượng','Nhiệt độ','Thời gian'], 0, 'Vectơ có hướng.'),
    Q('Gia tốc rơi tự do g ở mặt đất?', ['≈ 9,8 m/s²','5 m/s²','100 m/s²','1 m/s²'], 0, 'g ≈ 9,8.'),
    Q('Định luật II Newton?', ['F = m·a','F = m + a','F = m/a','F = ma²'], 0, 'F = ma.'),
    Q('Định luật bảo toàn động lượng áp dụng cho?', ['Hệ kín','Hệ mở','Mọi hệ','Không có'], 0, 'Hệ kín không có ngoại lực.'),
    Q('Sự bay hơi xảy ra?', ['Ở mọi nhiệt độ','Chỉ khi sôi','Chỉ ở 0°C','Không bao giờ'], 0, 'Liên tục tại mặt thoáng.'),
    Q('Phương trình trạng thái khí lý tưởng?', ['pV = nRT','pV = nT','pT = nRV','V = nRT'], 0, 'Clapeyron-Mendeleev.'),
  ]),
];

export const H10LY_SCENARIOS = indexBy(H10LY_WEEKS);
