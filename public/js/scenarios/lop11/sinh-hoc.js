// ============================================================
// Lớp 11 · SINH HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Sinh 11: Chuyển hoá vật chất & năng lượng — Cảm ứng — Sinh trưởng PT — Sinh sản).
// ID prefix: "H11SINH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11SINH', 'sinh-hoc', n, title, qs, opts);

export const H11SINH_WEEKS = [
  // ──────────────── HK1 — Chuyển hoá vật chất và năng lượng ────────────────
  M(1, 'Khái quát trao đổi chất và chuyển hoá năng lượng ở sinh vật', [
    Q('Trao đổi chất là quá trình?', ['Chỉ thải chất', 'Sinh vật lấy, biến đổi và thải chất với môi trường', 'Chỉ lấy chất', 'Không xảy ra ở thực vật'], 1, 'Trao đổi chất 2 chiều với môi trường.'),
    Q('Chuyển hoá vật chất luôn kèm theo?', ['Chuyển hoá năng lượng', 'Sinh sản', 'Vận động cơ học', 'Cảm ứng'], 0, 'Vật chất ↔ năng lượng.'),
    Q('Đồng hoá là quá trình?', ['Phân giải chất hữu cơ', 'Bài tiết', 'Tổng hợp chất hữu cơ + tích luỹ năng lượng', 'Hô hấp'], 2, 'Đồng hoá = tổng hợp.'),
    Q('Dị hoá là?', ['Tổng hợp chất phức tạp', 'Phân giải chất + giải phóng năng lượng', 'Hấp thụ chất khoáng', 'Quang hợp'], 1, 'Dị hoá = phân giải.'),
    Q('Sinh vật tự dưỡng là?', ['Phải ăn sinh vật khác', 'Chỉ ký sinh', 'Tự tổng hợp chất hữu cơ từ chất vô cơ', 'Không trao đổi chất'], 2, 'Tự dưỡng: tự tổng hợp.'),
    Q('Sinh vật dị dưỡng?', ['Tự quang hợp', 'Sống nhờ chất hữu cơ có sẵn từ sinh vật khác', 'Không cần năng lượng', 'Tự tổng hợp'], 1, 'Dị dưỡng: ăn chất hữu cơ.'),
  ]),

  M(2, 'Trao đổi nước và khoáng ở thực vật — Hấp thụ', [
    Q('Cơ quan hấp thụ nước và khoáng chủ yếu ở thực vật?', ['Lá', 'Thân', 'Hoa', 'Rễ (lông hút)'], 3, 'Lông hút rễ là chính.'),
    Q('Đặc điểm tế bào lông hút?', ['Thành dày, cứng', 'Thành mỏng, không cutin, không bào lớn', 'Có lục lạp', 'Không sống'], 1, 'Phù hợp hấp thụ.'),
    Q('Cơ chế hấp thụ nước ở rễ?', ['Vận chuyển chủ động cần ATP', 'Thụ động theo cơ chế thẩm thấu', 'Chỉ khuếch tán khí', 'Nuốt nước'], 1, 'Thẩm thấu (ASTT).'),
    Q('Cơ chế hấp thụ khoáng?', ['Chỉ thụ động', 'Chỉ chủ động', 'Cả thụ động và chủ động (cần ATP)', 'Khuếch tán đơn thuần'], 2, 'Hai cơ chế.'),
    Q('Con đường vận chuyển nước từ lông hút vào mạch gỗ?', ['Chỉ qua tế bào chất', 'Qua gian bào và qua chất nguyên sinh', 'Chỉ qua không khí', 'Qua mạch rây'], 1, 'Apoplast + symplast.'),
    Q('Đai Caspary nằm ở?', ['Biểu bì lá', 'Lông hút', 'Nội bì rễ', 'Mạch rây'], 2, 'Nội bì - kiểm soát chọn lọc.'),
  ]),

  M(3, 'Vận chuyển nước - Dòng mạch gỗ', [
    Q('Mạch gỗ (xylem) vận chuyển?', ['Chất hữu cơ', 'Nước và khoáng từ rễ lên lá', 'Khí O₂', 'Hormon'], 1, 'Hướng đi lên.'),
    Q('Cấu tạo mạch gỗ gồm?', ['Tế bào sống', 'Quản bào và mạch ống — tế bào chết', 'Ống rây + tế bào kèm', 'Lông hút'], 1, 'Tế bào chết, vách dày hoá gỗ.'),
    Q('Động lực dòng mạch gỗ KHÔNG gồm?', ['Áp suất rễ', 'Lực kéo do thoát hơi nước', 'Lực liên kết các phân tử nước', 'Co bóp cơ tim'], 3, 'Thực vật không có tim.'),
    Q('Hiện tượng ứ giọt do?', ['Áp suất rễ đẩy nước ra mép lá', 'Thoát hơi nước', 'Quang hợp', 'Mưa'], 0, 'Áp suất rễ.'),
    Q('Lực kéo từ trên xuống ở dòng mạch gỗ là?', ['Áp suất rễ', 'Trọng lực', 'Thoát hơi nước ở lá', 'Hô hấp'], 2, 'Pull from leaves.'),
    Q('Vì sao cột nước trong mạch gỗ không bị đứt?', ['Có nắp', 'Liên kết hidro giữa các phân tử nước', 'Khô', 'Có không khí'], 1, 'Lực cohesion-adhesion.'),
  ]),

  M(4, 'Vận chuyển chất hữu cơ - Dòng mạch rây', [
    Q('Mạch rây (phloem) vận chuyển?', ['Nước', 'Sản phẩm quang hợp (saccarozơ, aa…)', 'Khí', 'Khoáng'], 1, 'Hữu cơ chính.'),
    Q('Tế bào mạch rây?', ['Tế bào chết', 'Tế bào sống — ống rây + tế bào kèm', 'Quản bào', 'Mạch ống'], 1, 'Sống.'),
    Q('Hướng vận chuyển dòng mạch rây?', ['Chỉ lên', 'Chỉ xuống', 'Từ cơ quan nguồn → cơ quan chứa', 'Không hướng'], 2, 'Source → sink.'),
    Q('Động lực dòng mạch rây?', ['Áp suất rễ', 'Thoát hơi nước', 'Chênh lệch áp suất thẩm thấu giữa nguồn và chứa', 'Trọng lực'], 2, 'Áp suất dương ở phloem.'),
    Q('Cơ quan "nguồn" trong dòng mạch rây thường là?', ['Rễ', 'Quả', 'Lá trưởng thành đang quang hợp', 'Hạt'], 2, 'Lá là source.'),
    Q('Cơ quan "chứa" có thể là?', ['Lá già', 'Khí khổng', 'Rễ, quả, hạt đang lớn', 'Lông hút'], 2, 'Sink: nơi tiêu thụ/lưu trữ.'),
  ]),

  M(5, 'Thoát hơi nước', [
    Q('Thoát hơi nước chủ yếu qua?', ['Lông hút', 'Rễ', 'Vỏ thân', 'Khí khổng ở lá'], 3, 'Khí khổng chiếm ~90%.'),
    Q('Cấu tạo khí khổng gồm?', ['Một tế bào', 'Mạch dẫn', 'Hai tế bào hạt đậu', 'Lông hút'], 2, '2 tế bào bảo vệ.'),
    Q('Khí khổng mở khi?', ['Tế bào hạt đậu mất nước', 'Tế bào hạt đậu trương nước (đầy nước)', 'Đêm tối hoàn toàn (trừ thực vật CAM, mở khí khổng ban đêm)', 'Hạn'], 1, 'Trương nước → mở.'),
    Q('Thoát hơi nước có vai trò?', ['Làm cây héo', 'Tạo lực kéo nước + làm mát + trao đổi khí', 'Cản trở quang hợp', 'Tốn năng lượng vô ích'], 1, 'Nhiều vai trò.'),
    Q('Cân bằng nước của cây = ?', ['Hấp thụ - thoát hơi nước', 'Hô hấp + quang hợp', 'Khoáng - nước', 'Đêm - ngày'], 0, 'Hấp thụ trừ thoát.'),
    Q('Khi nào cây có thể bị héo?', ['Hấp thụ > thoát', 'Thoát > hấp thụ (mất cân bằng nước)', 'Cân bằng', 'Ban đêm luôn héo'], 1, 'Mất nước.'),
  ]),

  M(6, 'Dinh dưỡng nitơ ở thực vật', [
    Q('Nitơ là thành phần của?', ['Chỉ đường', 'Chỉ lipid', 'Protein, axit nucleic, diệp lục…', 'Chỉ tinh bột'], 2, 'N có trong nhiều chất sống.'),
    Q('Thực vật hấp thụ nitơ ở dạng?', ['N₂ (khí trơ, đa số TV không cố định được)', 'NH₄⁺ và NO₃⁻', 'NO₂', 'N hữu cơ phức tạp'], 1, '2 dạng ion.'),
    Q('Cố định nitơ phân tử trong tự nhiên nhờ?', ['Ánh sáng + vi khuẩn cố định nitơ (Rhizobium, lam khuẩn)', 'Chỉ mưa axit', 'Chỉ cây xanh', 'Chỉ động vật'], 0, 'Tia chớp + VSV.'),
    Q('Vi khuẩn Rhizobium sống cộng sinh ở?', ['Lá lúa', 'Rễ cây họ Đậu', 'Quả táo', 'Vỏ cây'], 1, 'Nốt sần.'),
    Q('Quá trình amon hoá là?', ['Khử NO₃⁻', 'Cố định N₂', 'Khoáng hoá N hữu cơ → NH₄⁺', 'Quang hợp'], 2, 'Amon hoá: chất hữu cơ → NH₄⁺.'),
    Q('Nitrat hoá là?', ['NH₄⁺ → NO₃⁻ nhờ vi khuẩn', 'NO₃⁻ → N₂', 'N₂ → NH₃', 'Quang hợp'], 0, 'Vi khuẩn nitrosomonas, nitrobacter.'),
  ]),

  M(7, 'Quang hợp — Khái niệm và vai trò', [
    Q('Quang hợp là quá trình?', ['Phân giải đường', 'Tổng hợp glucozơ từ CO₂ và H₂O nhờ năng lượng ánh sáng', 'Hô hấp', 'Cố định N₂'], 1, '6CO₂+6H₂O→C₆H₁₂O₆+6O₂.'),
    Q('Vị trí xảy ra quang hợp?', ['Ti thể', 'Lục lạp (chloroplast)', 'Nhân', 'Riboxom'], 1, 'Lục lạp.'),
    Q('Sắc tố chính của quang hợp?', ['Carotenoid', 'Diệp lục (chlorophyll)', 'Anthocyanin', 'Phycobilin'], 1, 'Chlorophyll a hấp thụ ánh sáng.'),
    Q('Diệp lục hấp thụ mạnh ánh sáng?', ['Vàng', 'Lục', 'Đỏ và xanh tím', 'Tia X'], 2, 'Phản xạ lục.'),
    Q('Vai trò quang hợp với sinh quyển?', ['Không có', 'Tạo O₂ và chất hữu cơ nuôi sống sinh vật', 'Gây hiệu ứng nhà kính', 'Phá rừng'], 1, 'Nguồn O₂ và carbon hữu cơ.'),
    Q('Quang hợp khác hô hấp ở điểm?', ['Cùng phương trình', 'Đối nghịch nhau (tổng hợp vs phân giải)', 'Cùng vị trí', 'Cùng tạo CO₂'], 1, 'QH ngược HH.'),
  ]),

  M(8, 'Pha sáng của quang hợp', [
    Q('Pha sáng xảy ra ở?', ['Chất nền lục lạp (stroma)', 'Màng thylakoid', 'Ti thể', 'Nhân'], 1, 'Thylakoid.'),
    Q('Pha sáng cần?', ['Ánh sáng và H₂O', 'Chỉ CO₂', 'Chỉ ATP', 'Bóng tối'], 0, 'Light + water.'),
    Q('Sản phẩm pha sáng?', ['Glucozơ', 'ATP, NADPH và O₂', 'CO₂', 'Tinh bột'], 1, 'Năng lượng + chất khử.'),
    Q('O₂ sinh ra trong pha sáng từ?', ['CO₂', 'Glucozơ', 'Quang phân ly H₂O', 'Khí trời'], 2, '2H₂O → 4H⁺+4e⁻+O₂.'),
    Q('Quang phân ly nước xảy ra ở?', ['Photosystem II (PSII)', 'Photosystem I (PSI)', 'Ti thể', 'Mạch rây'], 0, 'PSII tách H₂O.'),
    Q('Photon ánh sáng được hấp thu trực tiếp bởi?', ['CO₂', 'Sắc tố quang hợp (diệp lục, carotenoid)', 'Glucozơ', 'Nước'], 1, 'Sắc tố thu năng lượng.'),
  ]),

  M(9, 'Pha tối (Chu trình Calvin) và nhóm thực vật C3, C4, CAM', [
    Q('Pha tối xảy ra ở?', ['Thylakoid', 'Chất nền lục lạp (stroma)', 'Ti thể', 'Nhân'], 1, 'Stroma — không phụ thuộc ánh sáng trực tiếp.'),
    Q('Pha tối cần?', ['Ánh sáng', 'CO₂, ATP, NADPH', 'O₂', 'Diệp lục'], 1, 'Dùng sản phẩm pha sáng.'),
    Q('Sản phẩm cuối pha tối?', ['ATP', 'O₂', 'C₆H₁₂O₆ (glucozơ)', 'H₂O'], 2, 'Đường.'),
    Q('Chu trình Calvin còn gọi là?', ['C4', 'C3', 'CAM', 'Crebs'], 1, 'C3.'),
    Q('Thực vật C4 ví dụ?', ['Lúa nước (C3)', 'Đậu (C3)', 'Ngô, mía, kê', 'Khoai tây (C3)'], 2, 'Ngô mía kê.'),
    Q('Thực vật CAM thường gặp ở?', ['Vùng nước', 'Vùng khô hạn (xương rồng, dứa)', 'Đồng cỏ', 'Rừng nhiệt đới ẩm'], 1, 'CAM: mở khí khổng ban đêm.'),
  ]),

  M(10, 'Hô hấp ở thực vật', [
    Q('Hô hấp tế bào là?', ['Tổng hợp đường', 'Phân giải chất hữu cơ tạo ATP', 'Cố định N₂', 'Quang hợp'], 1, 'Phân giải tạo năng lượng.'),
    Q('Vị trí xảy ra hô hấp hiếu khí?', ['Lục lạp', 'Ti thể (mitochondria)', 'Nhân', 'Mạch gỗ'], 1, 'Ti thể.'),
    Q('Phương trình hô hấp hiếu khí?', ['C₆H₁₂O₆+6O₂→6CO₂+6H₂O+ATP', 'CO₂+H₂O→glucozơ', '6O₂→6CO₂', 'N₂+H₂→NH₃'], 0, 'Oxh hoàn toàn glucozơ.'),
    Q('Các giai đoạn hô hấp hiếu khí?', ['Chỉ đường phân', 'Đường phân → Krebs → chuỗi truyền e', 'Chỉ Krebs', 'Chỉ chuỗi e'], 1, '3 giai đoạn.'),
    Q('Hô hấp kị khí (lên men) tạo?', ['CO₂ + H₂O', 'Ít ATP + etanol/axit lactic', 'Glucozơ', 'O₂'], 1, '2 ATP/glucose.'),
    Q('Hô hấp sáng (photorespiration) gặp chủ yếu ở?', ['C3', 'C4', 'CAM', 'Vi khuẩn'], 0, 'C3 mất năng lượng do hô hấp sáng.'),
  ]),

  M(11, 'Tiêu hoá ở động vật — Khái quát', [
    Q('Tiêu hoá là?', ['Hấp thụ khí', 'Quá trình biến đổi thức ăn thành chất đơn giản hấp thụ được', 'Bài tiết', 'Hô hấp'], 1, 'Phân giải thức ăn.'),
    Q('Tiêu hoá nội bào xảy ra ở?', ['Trùng giày, bọt biển', 'Người', 'Bò', 'Chim'], 0, 'ĐV bậc thấp.'),
    Q('Tiêu hoá ngoại bào xảy ra trong?', ['Tế bào', 'Túi tiêu hoá hoặc ống tiêu hoá', 'Máu', 'Phổi'], 1, 'Ngoài tế bào.'),
    Q('Ống tiêu hoá có ở?', ['Bọt biển', 'Trùng amip', 'Giun, sâu bọ, động vật có xương sống', 'Vi khuẩn'], 2, 'ĐV bậc cao.'),
    Q('Tiêu hoá cơ học là?', ['Phân giải hoá học', 'Nghiền, nhào trộn thức ăn', 'Hấp thụ', 'Bài tiết'], 1, 'Cơ học.'),
    Q('Tiêu hoá hoá học là?', ['Nhai', 'Co bóp dạ dày', 'Phân giải bằng enzym', 'Hấp thụ'], 2, 'Enzyme.'),
  ]),

  M(12, 'Tiêu hoá ở các nhóm động vật khác nhau', [
    Q('Thú ăn thịt có đặc điểm răng?', ['Răng cửa nhỏ', 'Răng nanh nhọn, dài; răng hàm lớn để xé/nghiền thịt', 'Răng hàm dẹt nghiền cỏ', 'Không có răng'], 1, 'Răng nanh phát triển.'),
    Q('Thú ăn cỏ có ruột?', ['Ngắn', 'Dài, có manh tràng lớn', 'Không có ruột', 'Chỉ 1 đoạn'], 1, 'Để tiêu hoá xenlulozơ.'),
    Q('Động vật nhai lại (bò, dê) có dạ dày?', ['1 ngăn', '2 ngăn', '4 ngăn (cỏ - tổ ong - lá sách - múi khế)', 'Không có dạ dày'], 2, '4 ngăn.'),
    Q('Vi sinh vật cộng sinh trong dạ cỏ giúp?', ['Đánh chất béo', 'Phân giải xenlulozơ', 'Tổng hợp axit nucleic', 'Hấp thụ nước'], 1, 'VSV tiêu xenlulozơ.'),
    Q('Chim có dạ dày tuyến và?', ['Mề (dạ dày cơ) nghiền hạt', 'Phổi', 'Phế nang', 'Tim'], 0, 'Mề có sỏi nghiền.'),
    Q('Enzyme tiêu hoá tinh bột bắt đầu ở?', ['Dạ dày', 'Khoang miệng (amylase nước bọt)', 'Ruột non', 'Đại tràng'], 1, 'Amylase.'),
  ]),

  M(13, 'Hô hấp ở động vật', [
    Q('Hô hấp ở động vật là quá trình?', ['Phân giải đường', 'Trao đổi O₂ và CO₂ giữa cơ thể và môi trường', 'Tiêu hoá', 'Cảm ứng'], 1, 'Trao đổi khí.'),
    Q('Hô hấp qua bề mặt cơ thể có ở?', ['Giun đất, thuỷ tức', 'Cá', 'Chim', 'Người'], 0, 'Bề mặt ẩm.'),
    Q('Hô hấp bằng mang có ở?', ['Chim', 'Cá', 'Thằn lằn', 'Người'], 1, 'Cá - mang.'),
    Q('Hô hấp bằng hệ thống ống khí có ở?', ['Cá', 'Côn trùng', 'Người', 'Bò'], 1, 'Khí quản phân nhánh đến tế bào.'),
    Q('Hô hấp bằng phổi có ở?', ['Cá', 'Côn trùng', 'Bò sát, chim, thú', 'Giun đất'], 2, 'Phổi.'),
    Q('Hệ thống túi khí ở chim giúp?', ['Bơi', 'Hô hấp hai chiều — hiệu quả cao khi bay', 'Tiêu hoá', 'Bài tiết'], 1, 'Túi khí đặc biệt của chim.'),
  ]),

  M(14, 'Tuần hoàn máu', [
    Q('Hệ tuần hoàn hở có ở?', ['Cá xương', 'Đa số thân mềm và chân khớp', 'Người', 'Chim'], 1, 'Hở: máu ra khoang cơ thể.'),
    Q('Hệ tuần hoàn kín có ở?', ['Tôm', 'Mực, giun đốt, động vật có xương sống', 'Côn trùng', 'Ốc'], 1, 'Máu trong mạch.'),
    Q('Tuần hoàn đơn có ở?', ['Cá', 'Lưỡng cư', 'Chim', 'Người'], 0, 'Một vòng - cá.'),
    Q('Tuần hoàn kép có ở?', ['Cá', 'Lưỡng cư, bò sát, chim, thú', 'Sứa', 'Giun'], 1, 'Hai vòng - phổi + cơ thể.'),
    Q('Tim người có bao nhiêu ngăn?', ['2', '3', '4 (2 tâm nhĩ + 2 tâm thất)', '5'], 2, '4 ngăn.'),
    Q('Huyết áp tâm thu là áp lực máu khi?', ['Tim giãn', 'Tim co (tâm thu)', 'Không bơm', 'Ngừng tim'], 1, 'Tâm thu cao nhất.'),
  ]),

  M(15, 'Cân bằng nội môi', [
    Q('Cân bằng nội môi là?', ['Mất ổn định', 'Duy trì ổn định các điều kiện bên trong cơ thể', 'Bài tiết hết chất', 'Thay đổi liên tục'], 1, 'Homeostasis.'),
    Q('Cơ chế cân bằng nội môi gồm?', ['Chỉ thần kinh', 'Chỉ hormon', 'Thần kinh và thể dịch (hormon)', 'Chỉ nước'], 2, '2 hệ chính.'),
    Q('Sơ đồ điều hoà nội môi có?', ['Chỉ bộ phận nhận', 'Bộ phận tiếp nhận → điều khiển → thực hiện → phản hồi', 'Chỉ điều khiển', 'Không có phản hồi'], 1, '4 thành phần + feedback.'),
    Q('Đường huyết cao được hạ nhờ?', ['Glucagon', 'Insulin (do tuyến tuỵ tiết)', 'Adrenaline', 'Cortisol'], 1, 'Insulin hạ đường.'),
    Q('Đường huyết thấp được tăng nhờ?', ['Insulin', 'Glucagon', 'Tăng tiết mồ hôi', 'ADH'], 1, 'Glucagon ↑ đường.'),
    Q('Cơ quan điều hoà áp suất thẩm thấu máu chủ yếu?', ['Phổi', 'Tim', 'Thận', 'Gan'], 2, 'Thận - lọc + tái hấp thu.'),
  ]),

  M(16, 'Bài tiết', [
    Q('Bài tiết là?', ['Tiêu hoá', 'Loại bỏ sản phẩm thải và chất dư thừa khỏi cơ thể', 'Hấp thụ', 'Quang hợp'], 1, 'Excretion.'),
    Q('Cơ quan bài tiết chính ở người?', ['Tim', 'Thận, da, phổi, gan', 'Não', 'Dạ dày'], 1, 'Đa cơ quan.'),
    Q('Đơn vị chức năng của thận?', ['Nơron', 'Nephron (đơn vị thận)', 'Phế nang', 'Sarcomere'], 1, 'Nephron.'),
    Q('Nước tiểu hình thành qua các giai đoạn?', ['Lọc - tái hấp thu - bài tiết tiếp', 'Chỉ lọc', 'Chỉ bài tiết', 'Chỉ hấp thụ'], 0, '3 giai đoạn.'),
    Q('Hormon ADH có vai trò?', ['Hạ đường', 'Tăng tái hấp thu nước ở thận', 'Tăng đường', 'Hạ huyết áp'], 1, 'Cô đặc nước tiểu.'),
    Q('Người mất nước, ADH?', ['Giảm', 'Tăng để giữ nước', 'Không đổi', 'Mất đi'], 1, 'Tăng cô đặc nước tiểu.'),
  ]),

  M(17, 'Ôn tập HK1 — Chuyển hoá vật chất và năng lượng', [
    Q('Quá trình ngược chiều với quang hợp là?', ['Tiêu hoá', 'Hô hấp tế bào', 'Bài tiết', 'Sinh sản'], 1, 'Đối lập.'),
    Q('Năng lượng cuối cùng tế bào sử dụng dưới dạng?', ['Nhiệt', 'ATP', 'Ánh sáng', 'Đường'], 1, 'ATP - đồng tiền NL.'),
    Q('Mạch gỗ và mạch rây khác nhau ở?', ['Cùng vận chuyển nước', 'Mạch gỗ: nước+khoáng đi lên; mạch rây: chất hữu cơ đi xuống/đa hướng', 'Cùng tế bào sống', 'Cùng đi xuống'], 1, 'Khác chức năng + cấu tạo.'),
    Q('Lá có nhiều khí khổng ở mặt nào?', ['Mặt trên', 'Mặt dưới (đa số cây hai lá mầm)', 'Không có khí khổng', 'Cả hai bằng nhau'], 1, 'Đa số ở mặt dưới.'),
    Q('Vi khuẩn cố định nitơ tự do trong đất?', ['Nitrosomonas', 'Azotobacter (sống tự do trong đất)', 'Rhizobium (cộng sinh nốt sần rễ Đậu)', 'Lactobacillus (lên men sữa chua)'], 1, 'Tự do trong đất.'),
    Q('Quá trình tổng hợp tinh bột ở lá xảy ra trong?', ['Ban đêm', 'Ban ngày (pha tối nhờ ATP/NADPH pha sáng)', 'Cả hai như nhau', 'Không cần ánh sáng'], 1, 'Ngày.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Cây thiếu nitơ biểu hiện?', ['Lá vàng, sinh trưởng kém', 'Tăng trưởng nhanh hơn', 'Hoa nở rộ', 'Không ảnh hưởng'], 0, 'N → diệp lục, protein.'),
    Q('Lực hút do thoát hơi nước có thể đưa nước lên cao?', ['1m', '10m', 'Lên cả trăm mét (cây gỗ cao)', 'Không'], 2, 'Cây gỗ cao 100m.'),
    Q('Sản phẩm pha sáng dùng cho pha tối?', ['ATP và NADPH', 'CO₂', 'O₂', 'Glucozơ'], 0, 'Chuyển năng lượng.'),
    Q('Hô hấp ở thực vật xảy ra?', ['Chỉ ban đêm', 'Cả ngày lẫn đêm (liên tục)', 'Chỉ ban ngày', 'Khi cây chết'], 1, 'Liên tục.'),
    Q('Hệ tuần hoàn kép hiệu quả hơn vì?', ['Áp lực máu cao + máu trao đổi khí riêng với máu đi nuôi cơ thể', 'Chỉ 1 vòng', 'Không cần tim', 'Máu chảy chậm'], 0, 'Áp lực + phân lập máu sạch/dơ.'),
    Q('Thận tăng tiết ADH khi?', ['Uống nhiều nước', 'Mất nước (mồ hôi nhiều)', 'Ngủ', 'Ăn no'], 1, 'Áp suất thẩm thấu máu cao.'),
  ]),

  // ──────────────── HK2 — Cảm ứng · Sinh trưởng · Sinh sản ────────────────
  M(19, 'Cảm ứng ở thực vật — Hướng động', [
    Q('Cảm ứng là?', ['Khả năng phản ứng lại các kích thích từ môi trường', 'Tổng hợp đường', 'Hô hấp', 'Sinh sản'], 0, 'Phản ứng kích thích.'),
    Q('Hướng động là?', ['Vận động cảm ứng không định hướng', 'Vận động sinh trưởng định hướng theo tác nhân kích thích', 'Vận động tự phát', 'Không đáp ứng'], 1, 'Định hướng.'),
    Q('Hướng sáng dương ở thực vật là?', ['Cong về phía ánh sáng', 'Cong tránh ánh sáng', 'Không đáp ứng', 'Đứng yên'], 0, 'Ngọn cây hướng sáng dương.'),
    Q('Hướng trọng lực ở rễ là?', ['Âm (mọc lên)', 'Dương (mọc xuống đất)', 'Không có', 'Bất kỳ'], 1, 'Rễ mọc xuống.'),
    Q('Hướng nước ở rễ?', ['Âm', 'Dương (mọc về phía nước)', 'Không', 'Bất kỳ'], 1, 'Rễ tìm nước.'),
    Q('Hormon liên quan đến hướng động chủ yếu?', ['Insulin', 'Auxin (IAA)', 'Adrenaline', 'Glucagon'], 1, 'Auxin phân bố lệch → cong.'),
  ]),

  M(20, 'Cảm ứng ở thực vật — Ứng động', [
    Q('Ứng động là vận động?', ['Định hướng', 'Không định hướng theo tác nhân kích thích', 'Tự phát hoàn toàn', 'Không xảy ra'], 1, 'Không định hướng.'),
    Q('Ứng động sinh trưởng ví dụ?', ['Hoa nở/khép theo ánh sáng/nhiệt độ', 'Rễ mọc xuống', 'Ngọn cây hướng sáng', 'Lá vàng'], 0, 'Hoa quỳ.'),
    Q('Ứng động không sinh trưởng ví dụ?', ['Cây cao lên', 'Cây trinh nữ khép lá khi chạm', 'Hoa hồng nở', 'Rễ ăn sâu'], 1, 'Trinh nữ.'),
    Q('Cơ chế cây trinh nữ khép lá nhanh do?', ['Sinh trưởng nhanh', 'Thay đổi sức trương nước tế bào gốc lá', 'Tử vong tế bào', 'Quang hợp mạnh'], 1, 'Mất trương nước.'),
    Q('Vận động bắt mồi của cây bắt ruồi (Venus) là?', ['Hướng động', 'Ứng động không sinh trưởng', 'Phản xạ thần kinh', 'Hô hấp'], 1, 'Khép kích thích.'),
    Q('Quan trọng của cảm ứng ở thực vật?', ['Không cần thiết', 'Thích nghi và sinh tồn', 'Gây hại', 'Không ảnh hưởng'], 1, 'Thích nghi.'),
  ]),

  M(21, 'Cảm ứng ở động vật — Khái quát', [
    Q('Cảm ứng ở động vật do?', ['Mạch dẫn', 'Hệ thần kinh và hệ nội tiết', 'Mô bì', 'Chỉ giác quan'], 1, 'TK + hormon.'),
    Q('Ở động vật chưa có hệ thần kinh (bọt biển), cảm ứng?', ['Thiếu hoàn toàn', 'Phản ứng toàn thân chậm, mức tế bào', 'Phản xạ phức tạp', 'Có cung phản xạ'], 1, 'Mức tế bào.'),
    Q('Hệ thần kinh lưới có ở?', ['Người', 'Ruột khoang (thuỷ tức, sứa)', 'Cá', 'Chim'], 1, 'Mạng lưới TK.'),
    Q('Hệ thần kinh chuỗi hạch có ở?', ['Thân mềm, chân khớp, giun', 'Chim', 'Bò', 'Người'], 0, 'Chuỗi hạch.'),
    Q('Hệ thần kinh ống có ở?', ['Bọt biển', 'Động vật có xương sống', 'Sứa', 'Trùng giày'], 1, 'Ống TK lưng.'),
    Q('Tổ chức TK càng cao thì phản ứng?', ['Càng chậm', 'Càng đơn giản', 'Càng chính xác, nhanh, phức tạp', 'Không liên quan'], 2, 'Tiến hoá → tinh vi.'),
  ]),

  M(22, 'Hệ thần kinh — Nơron và cung phản xạ', [
    Q('Đơn vị cấu tạo và chức năng của hệ thần kinh?', ['Nephron', 'Nơron (neuron)', 'Tế bào cơ', 'Hồng cầu'], 1, 'Neuron.'),
    Q('Nơron có cấu tạo gồm?', ['Thân + sợi nhánh + sợi trục', 'Chỉ thân', 'Chỉ sợi trục', 'Chỉ sợi nhánh'], 0, '3 phần.'),
    Q('Cung phản xạ gồm bao nhiêu khâu?', ['3', '5 khâu (thụ thể - dẫn truyền - TKTW - dẫn truyền ra - cơ quan đáp ứng)', '2', '1'], 1, '5 thành phần.'),
    Q('Phản xạ không điều kiện là?', ['Học được', 'Bẩm sinh, di truyền', 'Phải tập', 'Tạm thời'], 1, 'Bẩm sinh.'),
    Q('Phản xạ có điều kiện?', ['Bẩm sinh', 'Hình thành trong đời sống do học tập', 'Cố định', 'Không thay đổi'], 1, 'Học được.'),
    Q('Pavlov nổi tiếng với thí nghiệm về?', ['DNA', 'Phản xạ có điều kiện ở chó', 'Quang hợp', 'Sinh sản'], 1, 'Chó - chuông - thức ăn.'),
  ]),

  M(23, 'Điện thế nghỉ - Điện thế hoạt động', [
    Q('Điện thế nghỉ là?', ['Điện thế khi nơron bị kích thích', 'Chênh lệch điện thế giữa trong và ngoài màng khi nơron không bị kích thích', 'Bằng 0', 'Dương'], 1, '≈ -70 mV.'),
    Q('Trong nơron nghỉ, mặt trong màng tích điện?', ['Dương', 'Âm', 'Trung tính', 'Không xác định'], 1, 'Mặt trong âm.'),
    Q('Ion nào nồng độ cao bên trong nơron?', ['Na⁺', 'K⁺', 'Cl⁻', 'Ca²⁺'], 1, 'K⁺ trong.'),
    Q('Ion nào nồng độ cao bên ngoài nơron?', ['K⁺', 'Na⁺', 'Glucozơ', 'Protein'], 1, 'Na⁺ ngoài.'),
    Q('Điện thế hoạt động xảy ra khi?', ['Không kích thích', 'Có kích thích vượt ngưỡng', 'Mất nước', 'Ngủ'], 1, 'Kích thích đủ mạnh.'),
    Q('Trong điện thế hoạt động, ion Na⁺?', ['Đi ra ngoài', 'Tràn vào trong làm mặt trong dương lên', 'Không đổi', 'Mất đi'], 1, 'Khử cực.'),
  ]),

  M(24, 'Truyền tin qua synap', [
    Q('Synap là?', ['Tế bào cơ', 'Vùng tiếp xúc giữa nơron với nơron hoặc nơron với tế bào đích', 'Sợi trục', 'Hồng cầu'], 1, 'Khe synap.'),
    Q('Cấu tạo synap hoá học gồm?', ['Chuỳ synap, khe synap, màng sau synap', 'Chỉ khe', 'Không có khe', 'Chỉ chuỳ'], 0, '3 phần.'),
    Q('Trong synap hoá học, tín hiệu truyền nhờ?', ['Dòng điện trực tiếp', 'Chất trung gian hoá học (neurotransmitter)', 'Sóng vô tuyến', 'Áp lực'], 1, 'Chất dẫn truyền.'),
    Q('Chất trung gian thường gặp?', ['Insulin', 'Acetylcholin, noradrenalin, dopamin, GABA…', 'Glucose', 'Hemoglobin'], 1, 'Nhiều loại.'),
    Q('Tín hiệu qua synap hoá học theo chiều?', ['Hai chiều', 'Một chiều (trước → sau)', 'Bất kỳ', 'Không truyền'], 1, 'Một chiều.'),
    Q('Sau khi gắn vào màng sau, chất trung gian?', ['Tích luỹ mãi', 'Bị phân huỷ hoặc thu hồi để chấm dứt tín hiệu', 'Truyền ngược', 'Không thay đổi'], 1, 'Để dừng tín hiệu.'),
  ]),

  M(25, 'Tập tính ở động vật', [
    Q('Tập tính là?', ['Cấu tạo', 'Chuỗi phản ứng của động vật trả lời kích thích từ môi trường', 'Bệnh', 'Trao đổi chất'], 1, 'Behavior.'),
    Q('Tập tính bẩm sinh có đặc điểm?', ['Học được', 'Di truyền, đặc trưng cho loài, bền vững', 'Có thể quên', 'Khác nhau từng cá thể'], 1, 'Genetic.'),
    Q('Tập tính học được?', ['Có sẵn từ khi sinh ra (bẩm sinh)', 'Hình thành qua quá trình học và rèn luyện', 'Bất biến', 'Di truyền trực tiếp'], 1, 'Học.'),
    Q('Ví dụ tập tính bẩm sinh?', ['Mèo bắt chuột (có cả bẩm sinh + học)', 'Tu hú đẻ trứng vào tổ chim khác', 'Học chữ', 'Lái xe'], 1, 'Bẩm sinh.'),
    Q('Tập tính kiếm ăn theo bầy ở sói có lợi?', ['Đơn lẻ', 'Săn được con mồi lớn, tăng tỉ lệ thành công', 'Không có lợi', 'Tiêu phí năng lượng vô ích'], 1, 'Hiệp đồng.'),
    Q('Tập tính di cư ở chim do?', ['Không có lý do', 'Thay đổi mùa, tìm thức ăn, nơi sinh sản', 'Nhiệt độ cao quanh năm', 'Trò chơi'], 1, 'Sinh thái.'),
  ]),

  M(26, 'Sinh trưởng và phát triển — Khái niệm', [
    Q('Sinh trưởng là?', ['Phân hoá tế bào', 'Tăng kích thước, khối lượng cơ thể (tăng số lượng/kích thước tế bào)', 'Trao đổi chất', 'Cảm ứng'], 1, 'Quantity.'),
    Q('Phát triển là?', ['Chỉ to lên', 'Sinh trưởng + phân hoá + phát sinh hình thái', 'Sinh sản đơn thuần', 'Bài tiết'], 1, 'Tổng hợp 3 quá trình.'),
    Q('Sinh trưởng sơ cấp ở thực vật do?', ['Mô phân sinh bên', 'Mô phân sinh đỉnh — làm cây dài ra', 'Mô bì', 'Mạch gỗ'], 1, 'Đỉnh.'),
    Q('Sinh trưởng thứ cấp ở thực vật do?', ['Mô phân sinh đỉnh', 'Tầng sinh mạch và tầng sinh bần — làm cây to ra', 'Mạch rây', 'Nhân tế bào'], 1, 'Bên.'),
    Q('Cây Một lá mầm chủ yếu có?', ['Sinh trưởng sơ cấp', 'Sinh trưởng thứ cấp mạnh', 'Cả hai mạnh ngang nhau', 'Không sinh trưởng'], 0, 'Chỉ sơ cấp.'),
    Q('Cây Hai lá mầm có?', ['Chỉ sơ cấp', 'Cả sơ cấp và thứ cấp', 'Không sinh trưởng', 'Chỉ thứ cấp'], 1, 'Cả hai.'),
  ]),

  M(27, 'Hormon thực vật — Nhóm kích thích', [
    Q('Hormon thực vật còn gọi là?', ['Insulin', 'Phytohormon', 'Cytokine', 'Endorphin'], 1, 'Phyto-.'),
    Q('Auxin (IAA) có vai trò?', ['Kích thích kéo dài tế bào, ưu thế đỉnh, ra rễ', 'Hạ đường', 'Bài tiết', 'Hô hấp'], 0, 'Đa năng.'),
    Q('Gibberellin (GA) kích thích?', ['Ngủ', 'Kéo dài thân, nảy mầm hạt, ra hoa', 'Hạ đường', 'Phân huỷ'], 1, 'Kéo dài thân.'),
    Q('Cytokinin kích thích?', ['Phân chia tế bào, làm chậm hoá già', 'Rụng lá', 'Già lá', 'Khô hạn'], 0, 'Cytokinesis.'),
    Q('Hormon nào kích thích chín quả?', ['Auxin', 'Etylen (C₂H₄)', 'Cytokinin', 'Gibberellin'], 1, 'Etylen làm chuối chín.'),
    Q('Acid abscisic (ABA) thuộc nhóm?', ['Kích thích', 'Ức chế — gây ngủ, đóng khí khổng khi hạn', 'Trung tính', 'Không xác định'], 1, 'Stress hormone.'),
  ]),

  M(28, 'Phát triển ở thực vật có hoa', [
    Q('Phát triển ở thực vật có hoa gồm?', ['Chỉ sinh trưởng', 'Sinh trưởng - phân hoá - ra hoa - tạo quả - tạo hạt', 'Chỉ ra hoa', 'Chỉ tạo quả'], 1, 'Toàn vòng đời.'),
    Q('Yếu tố ngoại cảnh chính quyết định ra hoa?', ['Chỉ nước', 'Quang chu kỳ (độ dài ngày) và nhiệt độ', 'Chỉ đất', 'Chỉ phân'], 1, 'Photoperiod.'),
    Q('Cây ngày ngắn ra hoa khi?', ['Ngày dài > giới hạn', 'Đêm dài > giới hạn (ngày ngắn)', 'Bất kỳ', 'Không bao giờ'], 1, 'Đêm dài.'),
    Q('Cây ngày dài ra hoa khi?', ['Ngày dài > giới hạn (đêm ngắn)', 'Đêm dài', 'Không cần ánh sáng', 'Bất kỳ thời tiết'], 0, 'Ngày dài.'),
    Q('Hormon ra hoa giả định gọi là?', ['Auxin', 'Florigen', 'ABA', 'GA'], 1, 'Florigen.'),
    Q('Chuyển từ pha sinh dưỡng sang pha sinh sản nhờ?', ['Đột biến', 'Tín hiệu môi trường + nội bào (tuổi)', 'Chỉ hormon', 'Ngẫu nhiên'], 1, 'Multi-signal.'),
  ]),

  M(29, 'Sinh trưởng và phát triển ở động vật', [
    Q('Phát triển không qua biến thái?', ['Phổi không phát triển', 'Con non giống con trưởng thành (chim, thú, người)', 'Biến đổi nhiều', 'Không có'], 1, 'Direct development.'),
    Q('Phát triển qua biến thái hoàn toàn ví dụ?', ['Châu chấu', 'Bướm (trứng → sâu → nhộng → bướm)', 'Cá', 'Người'], 1, 'Holometabolous.'),
    Q('Biến thái không hoàn toàn?', ['Châu chấu (trứng → ấu trùng → trưởng thành)', 'Bướm', 'Ếch', 'Người'], 0, 'Hemimetabolous.'),
    Q('Hormon sinh trưởng (GH) ở người do?', ['Tuyến giáp', 'Tuyến yên (thuỳ trước)', 'Tuyến tuỵ', 'Tuyến thượng thận'], 1, 'Pituitary.'),
    Q('Hormon Tiroxin (T4) do tuyến giáp tiết ra giúp?', ['Hạ đường', 'Điều hoà sinh trưởng và trao đổi chất', 'Bài tiết nước', 'Co cơ'], 1, 'TĐC + ST.'),
    Q('Thiếu Iod gây bệnh?', ['Đái tháo đường', 'Bướu cổ (giảm tiroxin)', 'Cao huyết áp', 'Quáng gà'], 1, 'I⁻ làm tiroxin.'),
  ]),

  M(30, 'Tuổi dậy thì - Hormon sinh dục', [
    Q('Tuổi dậy thì ở người liên quan đến?', ['Tuyến yên + tuyến sinh dục tăng tiết hormon', 'Tuyến nước bọt', 'Phổi', 'Gan'], 0, 'Trục HHA - tuyến SD.'),
    Q('Hormon sinh dục nam chính?', ['Estrogen', 'Testosteron', 'Progesteron', 'Insulin'], 1, 'Tinh hoàn.'),
    Q('Hormon sinh dục nữ chính?', ['Testosteron', 'Estrogen và progesteron', 'GH', 'Cortisol'], 1, 'Buồng trứng.'),
    Q('Chu kỳ kinh nguyệt ở nữ trung bình?', ['7 ngày', '28 ngày', '60 ngày', '90 ngày'], 1, '~28 ngày.'),
    Q('Rụng trứng xảy ra khoảng?', ['Ngày 1 chu kỳ', 'Giữa chu kỳ (~ngày 14)', 'Ngày 28', 'Bất kỳ'], 1, 'Day 14.'),
    Q('Trục Hạ đồi - Tuyến yên - Tuyến sinh dục điều hoà?', ['Tiêu hoá', 'Sinh sản', 'Hô hấp', 'Bài tiết'], 1, 'HPG axis.'),
  ]),

  M(31, 'Sinh sản ở thực vật', [
    Q('Sinh sản vô tính ở thực vật?', ['Có sự kết hợp giao tử', 'Không có sự kết hợp giao tử — tạo con giống mẹ', 'Phải có hoa', 'Cần thụ tinh'], 1, 'Clone.'),
    Q('Hình thức sinh sản vô tính phổ biến?', ['Sinh sản hữu tính', 'Sinh sản sinh dưỡng (giâm, chiết, ghép)', 'Thụ tinh chéo', 'Tự thụ phấn'], 1, 'Sinh dưỡng.'),
    Q('Ưu điểm sinh sản vô tính?', ['Tạo biến dị tổ hợp lớn', 'Nhân nhanh, giữ nguyên đặc tính cây mẹ', 'Khó nhân giống', 'Đa dạng di truyền'], 1, 'Giống mẹ.'),
    Q('Sinh sản hữu tính có?', ['Không có giao tử', 'Sự kết hợp giao tử đực và cái → hợp tử', 'Phân đôi', 'Sinh dưỡng'], 1, 'Giao tử + thụ tinh.'),
    Q('Thụ phấn là?', ['Hạt phấn rơi trên núm nhuỵ', 'Quá trình tạo hoa', 'Tạo quả', 'Hô hấp'], 0, 'Pollination.'),
    Q('Thụ tinh kép ở thực vật hạt kín tạo?', ['Hợp tử và nội nhũ (3n)', 'Chỉ hợp tử', 'Chỉ nội nhũ', 'Chỉ vỏ hạt'], 0, 'Double fertilization.'),
  ]),

  M(32, 'Sinh sản ở động vật', [
    Q('Sinh sản vô tính ở động vật bao gồm?', ['Phân đôi, nảy chồi, phân mảnh, trinh sinh', 'Chỉ thụ tinh', 'Chỉ đẻ trứng', 'Chỉ giao phối'], 0, 'Asexual.'),
    Q('Trinh sinh (parthenogenesis) ở?', ['Người', 'Ong, kiến (trứng không thụ tinh phát triển)', 'Bò', 'Cá voi'], 1, 'Đa số côn trùng.'),
    Q('Sinh sản hữu tính ở động vật?', ['Không cần giao tử', 'Có sự kết hợp tinh trùng và trứng', 'Phân đôi', 'Nảy chồi'], 1, 'Sexual.'),
    Q('Thụ tinh ngoài có ở?', ['Người', 'Cá, ếch (thải trứng+tinh trùng vào nước)', 'Chim', 'Bò'], 1, 'Ngoài cơ thể.'),
    Q('Thụ tinh trong có ở?', ['Cá xương', 'Bò sát, chim, thú', 'Sứa', 'Sao biển'], 1, 'Trong cơ thể cái.'),
    Q('Đẻ trứng có ở?', ['Người', 'Chim, đa số bò sát, lưỡng cư, cá', 'Bò', 'Voi'], 1, 'Oviparous.'),
  ]),

  M(33, 'Cơ chế điều hoà sinh sản và biện pháp tránh thai', [
    Q('Hormon điều hoà sinh sản ở nữ?', ['Insulin', 'FSH, LH, estrogen, progesteron', 'Adrenaline', 'GH'], 1, 'Trục HPG nữ.'),
    Q('Hormon kích thích rụng trứng?', ['FSH', 'LH (đỉnh giữa chu kỳ)', 'Progesteron', 'Insulin'], 1, 'LH surge.'),
    Q('Mang thai do thụ tinh tạo hợp tử và làm tổ ở?', ['Vòi trứng', 'Tử cung', 'Buồng trứng', 'Âm đạo'], 1, 'Tử cung.'),
    Q('Sinh đẻ có kế hoạch nhằm?', ['Giảm dân số chất lượng', 'Đảm bảo sức khoẻ mẹ và con, chất lượng dân số', 'Tăng tỉ lệ sinh', 'Không có ý nghĩa'], 1, 'KHHGĐ.'),
    Q('Biện pháp tránh thai an toàn cho tuổi vị thành niên?', ['Quan hệ tình dục an toàn hoặc không quan hệ sớm', 'Phá thai', 'Mua thuốc bừa', 'Không cần biết'], 0, 'Giáo dục giới tính.'),
    Q('Bệnh lây qua đường tình dục có thể phòng bằng?', ['Không có cách phòng', 'Quan hệ một bạn tình, dùng bao cao su, không tiêm chích chung', 'Uống kháng sinh hàng ngày', 'Tự khỏi'], 1, 'Phòng tránh.'),
  ]),

  M(34, 'Ứng dụng sinh học và ngành nghề liên quan', [
    Q('Công nghệ tế bào thực vật ứng dụng?', ['Hàn cơ khí', 'Nhân nhanh giống cây, tạo giống sạch bệnh', 'Khai khoáng', 'Sản xuất nhựa'], 1, 'Nuôi cấy mô.'),
    Q('Nuôi cấy mô tế bào động vật ứng dụng?', ['Đúc nhôm', 'Sản xuất vaccine, thuốc, cấy ghép mô', 'Xây dựng', 'Ô tô'], 1, 'Y học.'),
    Q('Công nghệ sinh học vi sinh vật?', ['Sản xuất kháng sinh, enzyme, thực phẩm lên men', 'Chỉ làm muối', 'Khai thác mỏ', 'Vận tải biển'], 0, 'CNSH vi sinh.'),
    Q('Ngành nghề liên quan sinh học?', ['Toán học thuần tuý', 'Bác sĩ, dược sĩ, kỹ sư nông nghiệp, công nghệ sinh học, môi trường', 'Phi công', 'Kế toán'], 1, 'Đa dạng.'),
    Q('Sinh học giúp giải quyết vấn đề?', ['Vũ trụ', 'An ninh lương thực, sức khoẻ, môi trường, năng lượng sinh học', 'Chính trị', 'Tài chính'], 1, 'Vấn đề toàn cầu.'),
    Q('Nông nghiệp công nghệ cao kết hợp?', ['Bỏ kỹ thuật cũ', 'Sinh học + cơ điện tử + tin học (IoT, AI, gen)', 'Chỉ thủ công', 'Không cần khoa học'], 1, 'Smart farming.'),
  ]),

  M(35, 'Thi học kỳ — Tổng ôn cả năm Sinh 11', [
    Q('Quá trình nào sau đây thuộc đồng hoá?', ['Hô hấp', 'Quang hợp', 'Phân giải protein', 'Bài tiết'], 1, 'Đồng hoá = tổng hợp.'),
    Q('Sản phẩm quang hợp dùng cho hô hấp ở thực vật?', ['Glucozơ', 'Diệp lục', 'Sắc tố phụ', 'Nước'], 0, 'Glucose là cơ chất hô hấp.'),
    Q('Hệ tuần hoàn của lưỡng cư là?', ['Hở', 'Kép - tim 3 ngăn', 'Kép - tim 4 ngăn', 'Đơn - tim 2 ngăn'], 1, '2 vòng, 3 ngăn.'),
    Q('Cảm ứng ở thực vật khác động vật ở chỗ?', ['Không có', 'Chậm hơn, không có hệ thần kinh', 'Nhanh hơn', 'Cùng cơ chế'], 1, 'Chậm + hormon.'),
    Q('Hormon Auxin gây hiện tượng ưu thế đỉnh nghĩa là?', ['Chồi đỉnh ức chế chồi bên phát triển', 'Chồi bên mọc mạnh hơn đỉnh', 'Rễ mọc nhanh', 'Hoa nở'], 0, 'Apical dominance.'),
    Q('Sinh sản hữu tính có ưu thế?', ['Không đa dạng', 'Tạo biến dị tổ hợp - cơ sở tiến hoá và chọn lọc', 'Giống hệt mẹ', 'Chỉ nhân nhanh'], 1, 'Biến dị tổ hợp.'),
  ]),
];

export const H11SINH_SCENARIOS = indexBy(H11SINH_WEEKS);
