// ============================================================
// Lớp 10 · GDQP-AN (Giáo dục Quốc phòng - An ninh) — 35 tuần
// Bám CTGD 2018 (Lịch sử QĐND VN, đội ngũ điều lệnh, AK lý thuyết, ANQG, sinh tồn cơ bản).
// ID prefix: "H10GDQP-wNN-quiz". 4-5 câu/tuần.
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10GDQP', 'gdqp', n, title, qs, opts);

export const H10GDQP_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Truyền thống QĐND Việt Nam', [
    Q('Ngày thành lập QĐND Việt Nam?', ['19/8/1945', '2/9/1945', '30/4/1975', '22/12/1944'], 3, 'Đội VN Tuyên truyền Giải phóng quân thành lập 22/12/1944 — ngày thành lập QĐND VN.'),
    Q('QĐND VN ban đầu có tên là?', ['Đội Việt Nam Tuyên truyền Giải phóng quân', 'Vệ quốc đoàn', 'Quân đội Việt Nam', 'Đội Cứu quốc quân'], 0, 'Ban đầu là Đội VN Tuyên truyền Giải phóng quân, do Võ Nguyên Giáp chỉ huy.'),
    Q('Người sáng lập QĐND VN là?', ['Trường Chinh', 'Hồ Chí Minh và Võ Nguyên Giáp', 'Phạm Văn Đồng', 'Lê Duẩn'], 1, 'HCM chỉ thị, Võ Nguyên Giáp tổ chức thành lập đội đầu tiên.'),
    Q('QĐND VN có truyền thống?', ['Chỉ học tập', 'Chỉ chiến đấu', 'Trung với Đảng, hiếu với dân', 'Chỉ lao động'], 2, 'Truyền thống QĐND: "Trung với Đảng, hiếu với Dân, sẵn sàng chiến đấu hi sinh".'),
  ]),

  M(2, 'Lực lượng vũ trang nhân dân Việt Nam', [
    Q('Lực lượng vũ trang nhân dân VN gồm?', ['Chỉ quân đội', 'Chỉ dân quân', 'QĐND, CAND, Dân quân tự vệ', 'Chỉ công an'], 2, '3 thành phần: QĐND, CAND, Dân quân tự vệ.'),
    Q('Quân đội nhân dân VN gồm?', ['Bộ đội chủ lực và bộ đội địa phương', 'Du kích', 'Chỉ địa phương', 'Chỉ chủ lực'], 0, 'QĐND VN gồm bộ đội chủ lực và bộ đội địa phương; thêm lực lượng dự bị động viên.'),
    Q('Công an nhân dân có nhiệm vụ?', ['Đánh giặc', 'Bảo vệ an ninh quốc gia, trật tự ATXH', 'Dạy học', 'Trồng cây'], 1, 'CAND bảo vệ ANQG, giữ trật tự an toàn xã hội, đấu tranh tội phạm.'),
    Q('Dân quân tự vệ là?', ['Lực lượng vũ trang quần chúng tại địa phương', 'Quân đội chuyên nghiệp', 'Cảnh sát', 'Học sinh'], 0, 'DQTV là lực lượng vũ trang quần chúng, không thoát ly sản xuất ở địa phương.'),
  ]),

  M(3, 'Lục quân và truyền thống', [
    Q('Lục quân là?', ['Trên không', 'Lực lượng tác chiến trên bộ', 'Trong vũ trụ', 'Trên biển'], 1, 'Lục quân là quân chủng tác chiến chủ yếu trên mặt đất.'),
    Q('Lục quân VN có các binh chủng?', ['Chỉ pháo', 'Bộ binh, pháo binh, tăng-thiết giáp, công binh, thông tin, đặc công, hoá học', 'Chỉ tăng', 'Chỉ bộ binh'], 1, 'Lục quân VN: bộ binh + pháo binh + tăng-thiết giáp + công binh + thông tin + đặc công + hoá học.'),
    Q('Binh chủng chủ lực của lục quân là?', ['Pháo binh', 'Công binh', 'Bộ binh', 'Đặc công'], 2, 'Bộ binh là binh chủng chủ lực, chiếm số lượng lớn nhất.'),
    Q('Lục quân VN có truyền thống?', ['"Vì nhân dân quên mình, vì nhân dân hi sinh"', '"Quyết tử cho Tổ quốc quyết sinh"', '"Quyết chiến, quyết thắng"', 'Tất cả đều đúng'], 3, 'Lục quân VN có truyền thống "Quyết chiến, quyết thắng", "Quyết tử cho Tổ quốc quyết sinh".'),
  ]),

  M(4, 'Hải quân nhân dân Việt Nam', [
    Q('Hải quân nhân dân VN thành lập?', ['22/12/1944', '7/5/1955', '30/4/1975', '3/3/1955'], 1, 'Hải quân nhân dân VN thành lập 7/5/1955.'),
    Q('Hải quân nhân dân VN bảo vệ?', ['Đất liền chỉ', 'Chủ quyền biển đảo, thềm lục địa', 'Vũ trụ', 'Sông ngòi chỉ'], 1, 'Hải quân bảo vệ chủ quyền biển đảo, thềm lục địa, vùng đặc quyền kinh tế.'),
    Q('Truyền thống Hải quân VN là?', ['"Mở đường thắng lợi"', '"Quyết chiến quyết thắng"', '"Chiến đấu anh dũng, mưu trí sáng tạo"', '"Vì Tổ quốc bay xa"'], 2, 'Truyền thống Hải quân: "Chiến đấu anh dũng, mưu trí sáng tạo, làm chủ vùng biển".'),
    Q('Chiến thắng nổi tiếng của Hải quân VN?', ['Như Nguyệt', 'Đống Đa', 'Bạch Đằng', 'Đường Hồ Chí Minh trên biển'], 3, 'Đường Hồ Chí Minh trên biển (Đoàn 759) chở vũ khí chi viện miền Nam.'),
  ]),

  M(5, 'Không quân nhân dân Việt Nam', [
    Q('Không quân nhân dân VN thành lập?', ['7/5/1955', '22/12/1944', '30/4/1975', '3/3/1955'], 3, 'Không quân nhân dân VN thành lập 3/3/1955.'),
    Q('Không quân VN nổi tiếng với chiến công?', ['Bắn hạ B-52 trong "Điện Biên Phủ trên không" 12/1972', 'Rạch Gầm', 'Đống Đa', 'Bạch Đằng'], 0, 'KQVN cùng tên lửa và phòng không bắn hạ B-52 trong 12 ngày đêm cuối 1972.'),
    Q('Truyền thống Không quân VN là?', ['"Mưu trí dũng cảm, khắc phục khó khăn"', '"Quyết chiến quyết thắng"', '"Trung thành vô hạn, tiến công kiên quyết"', '"Vì biển đảo quê hương"'], 2, 'Truyền thống KQVN: "Trung thành vô hạn, tiến công kiên quyết, đoàn kết hiệp đồng, lập công tập thể".'),
    Q('Phi công VN từng bắn hạ máy bay Mỹ nhiều nhất?', ['Nguyễn Văn Bảy', 'Nguyễn Văn Cốc (9 chiếc)', 'Tất cả ngang nhau', 'Phạm Tuân'], 1, 'Nguyễn Văn Cốc bắn hạ 9 máy bay, 2 lần được phong AHLLVTND.'),
  ]),

  M(6, 'Binh chủng Đặc công', [
    Q('Đặc công VN có truyền thống?', ['"Quyết chiến quyết thắng"', '"Trung thành vô hạn"', '"Kịp thời, chính xác, bí mật, an toàn"', '"Đặc biệt tinh nhuệ, anh dũng tuyệt vời, mưu trí sáng tạo"'], 3, 'Đặc công VN có truyền thống "Đặc biệt tinh nhuệ, anh dũng tuyệt vời, mưu trí sáng tạo, đánh hiểm thắng lớn".'),
    Q('Đặc công thực hiện nhiệm vụ?', ['Phòng thủ', 'Đánh hiểm, đánh sâu vào hậu phương địch', 'Hậu cần', 'Đánh trực diện'], 1, 'Đặc công đánh sâu, đánh hiểm vào các mục tiêu trọng yếu của địch.'),
    Q('Đặc công VN nổi tiếng với chiến công?', ['Tấn công sân bay, kho tàng địch', 'Trang trại', 'Phòng thủ thành', 'Mít tinh'], 0, 'Đặc công đánh sân bay, kho xăng, kho vũ khí, sở chỉ huy địch.'),
    Q('Đặc công thành lập?', ['3/3/1955', '7/5/1955', '22/12/1944', '19/3/1967'], 3, 'Binh chủng Đặc công thành lập 19/3/1967.'),
  ]),

  M(7, 'Binh chủng Pháo binh', [
    Q('Pháo binh VN có truyền thống?', ['"Chân đồng vai sắt, đánh giỏi bắn trúng"', '"Mở đường thắng lợi, vượt khó vươn lên"', '"Quyết chiến quyết thắng"', '"Trung thành vô hạn"'], 0, 'Pháo binh VN có truyền thống "Chân đồng vai sắt, đánh giỏi bắn trúng".'),
    Q('Pháo binh VN thành lập?', ['7/5/1955', '22/12/1944', '3/3/1955', '29/6/1946'], 3, 'Pháo binh QĐND VN thành lập 29/6/1946.'),
    Q('Pháo binh có vai trò?', ['Đặc công', 'Hoả lực mặt đất, chi viện tác chiến', 'Tăng-thiết giáp', 'Phòng không'], 1, 'Pháo binh cung cấp hoả lực, chi viện tác chiến cho bộ binh và các binh chủng.'),
    Q('Chiến công nổi bật của pháo binh ở?', ['Rạch Gầm', 'Điện Biên Phủ (1954)', 'Đống Đa', 'Bạch Đằng 938'], 1, 'Pháo binh đóng vai trò quan trọng trong chiến thắng Điện Biên Phủ (1954).'),
  ]),

  M(8, 'Binh chủng Công binh và Thông tin', [
    Q('Công binh có nhiệm vụ?', ['Chiến đấu trực diện', 'Nghi lễ', 'Hậu cần', 'Xây dựng - phá huỷ công trình quân sự'], 3, 'Công binh: làm đường, cầu, hầm, mìn, vượt sông, phá huỷ công trình.'),
    Q('Công binh nổi tiếng với?', ['Cảng Hải Phòng', 'Đường sắt', 'Đường Trường Sơn', 'Sân bay'], 2, 'Công binh mở đường Trường Sơn (đường Hồ Chí Minh) huyền thoại.'),
    Q('Thông tin có nhiệm vụ?', ['Nghi lễ', 'Đánh trực diện', 'Đảm bảo liên lạc chỉ huy', 'Hậu cần'], 2, 'Thông tin: duy trì liên lạc giữa các đơn vị, cấp chỉ huy.'),
    Q('Truyền thống Thông tin VN?', ['"Kịp thời, chính xác, bí mật, an toàn"', '"Chân đồng vai sắt, đánh giỏi bắn trúng"', '"Trung thành vô hạn"', '"Quyết chiến quyết thắng"'], 0, 'Truyền thống Thông tin: "Kịp thời, chính xác, bí mật, an toàn".'),
  ]),

  M(9, 'Đội ngũ điều lệnh - Đứng nghiêm và đứng nghỉ', [
    Q('Tư thế đứng nghiêm có đặc điểm?', ['Tay vắt sau lưng', 'Người thẳng, hai gót chụm, mũi bàn chân mở 45°', 'Cong vẹo', 'Ngồi xổm, hai tay đặt trên đầu gối'], 1, 'Đứng nghiêm: đầu thẳng, người thẳng, 2 gót chân chụm, mũi bàn chân mở 45°.'),
    Q('Tay khi đứng nghiêm?', ['Áp sát thân, ngón tay khép', 'Đưa cao', 'Vắt chéo', 'Đút túi'], 0, 'Tay buông tự nhiên áp sát thân, ngón tay khép, ngón giữa áp vào đùi.'),
    Q('Đứng nghỉ là tư thế?', ['Thoải mái, chân trái rút sang trái 1/4 bước', 'Đứng nghiêm', 'Nằm xuống', 'Ngồi xuống'], 0, 'Đứng nghỉ: chân trái rút sang trái khoảng 1/4 bước, người thoải mái nhưng giữ nghiêm trang.'),
    Q('Khẩu lệnh đứng nghiêm?', ['"Chú ý!"', '"Bắt đầu!"', '"Nghiêm!"', '"Đứng!"'], 2, 'Khẩu lệnh "Nghiêm!" cho tư thế đứng nghiêm.'),
  ]),

  M(10, 'Đội ngũ điều lệnh - Quay phải, quay trái', [
    Q('Khẩu lệnh quay phải?', ['"Phải!"', '"Bên phải - Quay!"', '"Quay!"', '"Chuyển hướng!"'], 1, 'Khẩu lệnh: "Bên phải - Quay!" gồm dự lệnh và động lệnh.'),
    Q('Khi quay phải, chân nào làm trụ?', ['Chân trái', 'Không có trụ', 'Chân phải làm trụ', 'Cả hai'], 2, 'Quay phải: lấy gót chân phải và mũi chân trái làm trụ.'),
    Q('Sau khi quay 90°, tư thế?', ['Nghiêng', 'Đứng nghỉ', 'Đứng nghiêm, mặt hướng mới', 'Đứng nghỉ, mặt hướng cũ'], 2, 'Sau khi quay 90° đúng hướng mới, trở về tư thế đứng nghiêm.'),
    Q('Khẩu lệnh quay đằng sau?', ['"Đằng sau - Quay!"', '"Quay 180°!"', '"Sau!"', '"Chuyển hướng!"'], 0, 'Khẩu lệnh: "Đằng sau - Quay!" cho động tác quay 180°.'),
  ]),

  M(11, 'Đội ngũ điều lệnh - Đi đều và đứng lại', [
    Q('Khẩu lệnh đi đều?', ['"Bước đều - Đi!"', '"Tiến!"', '"Bước!"', '"Đi đều - Bước!"'], 3, 'Khẩu lệnh: "Đi đều - Bước!" gồm dự lệnh và động lệnh.'),
    Q('Khi đi đều, chân nào bước trước?', ['Chân phải', 'Tự chọn', 'Chân trái', 'Cả hai'], 2, 'Khi nghe "Bước!", chân trái bước trước, sau đó chân phải, đều nhịp.'),
    Q('Tay vung khi đi đều?', ['Đút túi', 'Đứng yên', 'Vung tự nhiên, đối xứng', 'Vắt chéo'], 2, 'Tay vung tự nhiên đối xứng với bước chân, tạo nhịp đều.'),
    Q('Khẩu lệnh đứng lại?', ['"Stop!"', '"Ngừng!"', '"Dừng!"', '"Đứng lại - Đứng!"'], 3, 'Khẩu lệnh: "Đứng lại - Đứng!" để kết thúc đi đều.'),
  ]),

  M(12, 'Đội hình tiểu đội', [
    Q('Đội hình tiểu đội cơ bản gồm?', ['Hàng dọc và hàng ngang', 'Chỉ hàng ngang', 'Chỉ hàng dọc', 'Vòng tròn'], 0, 'Đội hình cơ bản: hàng dọc 1 hàng, hàng ngang 1 hàng.'),
    Q('Khoảng cách giữa 2 chiến sĩ hàng dọc?', ['5 m', 'Khoảng 30 cm (1 gang tay)', '1 m', 'Cách 1 cánh tay (~70 cm)'], 3, 'Khoảng cách hàng dọc: ~70 cm (1 cánh tay duỗi thẳng).'),
    Q('Khoảng cách giữa 2 chiến sĩ hàng ngang?', ['10 m', 'Khoảng 70 cm (1 cánh tay)', 'Khoảng 1,2 m (1 sải tay)', '5 m'], 1, 'Hàng ngang: ~70 cm giữa 2 vai.'),
    Q('Tiểu đội thường gồm?', ['1 người', '3 người', 'Khoảng 7-12 người', '100 người'], 2, 'Tiểu đội QĐND thường 7-12 người, do tiểu đội trưởng chỉ huy.'),
  ]),

  M(13, 'Súng tiểu liên AK-47 - Cấu tạo cơ bản', [
    Q('Súng AK-47 có nguồn gốc?', ['Liên Xô (1947)', 'Đức (1944)', 'Mỹ (1959)', 'Trung Quốc'], 0, 'AK-47 do Mikhail Kalashnikov (Liên Xô) thiết kế năm 1947.'),
    Q('AK-47 là loại?', ['Súng ngắn', 'Súng máy', 'Súng săn', 'Tiểu liên (súng trường tự động)'], 3, 'AK-47 là súng tiểu liên (assault rifle), bắn liên thanh hoặc phát một.'),
    Q('Đạn AK-47 cỡ?', ['5,56 × 45 mm', '12,7 mm', '9 mm', '7,62 × 39 mm'], 3, 'AK-47 dùng đạn 7,62 × 39 mm.'),
    Q('Tốc độ bắn AK-47?', ['~600 phát/phút (liên thanh)', '100 phát/phút', '3000 phát/phút', '10 phát/phút'], 0, 'Tốc độ bắn AK-47 ~600 phát/phút khi liên thanh.'),
    Q('Tầm bắn hiệu quả AK-47?', ['2000 m', '~400 m', '100 m', '1000 m'], 1, 'Tầm bắn hiệu quả của AK-47 khoảng 400 m.'),
  ]),

  M(14, 'AK-47 - Các bộ phận chính', [
    Q('AK-47 gồm các bộ phận chính?', ['Chỉ báng', 'Chỉ nòng', 'Chỉ đạn', 'Nòng, hộp khoá nòng, báng, hộp tiếp đạn, khoá an toàn'], 3, 'AK-47: nòng, hộp khoá nòng, báng, hộp tiếp đạn (magazine), tay áp, khoá an toàn.'),
    Q('Hộp tiếp đạn (magazine) AK-47 chứa?', ['10 viên', '100 viên', '30 viên đạn', '5 viên'], 2, 'Magazine AK-47 tiêu chuẩn chứa 30 viên.'),
    Q('Khoá an toàn AK-47 có?', ['5 chế độ', '2 chế độ: liên thanh và phát một', '3 chế độ: an toàn, liên thanh, phát một', 'Chỉ on/off'], 2, 'Khoá AK-47 3 vị trí: an toàn (S), liên thanh (AB), phát một (OD).'),
    Q('Báng súng AK-47 có chức năng?', ['Vũ khí cận chiến', 'Đèn pin', 'Tỳ vào vai, ổn định khi bắn', 'Trang trí'], 2, 'Báng súng tỳ vào vai để giữ ổn định khi bắn, giảm giật.'),
    Q('Hoạt động của AK-47 dựa trên?', ['Lùi giật tự do (recoil operated)', 'Trích khí ngắn (gas operated)', 'Nén lò xo', 'Khoá nòng then xoay bằng tay'], 1, 'AK-47 hoạt động kiểu trích khí ngắn: khí thuốc súng đẩy piston nạp đạn tiếp.'),
  ]),

  M(15, 'Tư thế bắn AK-47 (lý thuyết)', [
    Q('Tư thế bắn cơ bản của AK-47?', ['Chỉ đứng', 'Chỉ nằm', 'Ngồi xếp bằng', 'Nằm, quỳ, đứng'], 3, '3 tư thế bắn: nằm (vững nhất), quỳ, đứng.'),
    Q('Tư thế nằm bắn có ưu điểm?', ['Đẹp nhất', 'Bắn xa nhất', 'Vững nhất, ít bị phát hiện', 'Cơ động nhất'], 2, 'Nằm bắn cho điểm tỳ nhiều, ổn định, dễ ngắm chính xác.'),
    Q('Khi ngắm bắn cần?', ['Đầu ruồi - khe ngắm - mục tiêu trên 1 đường', 'Nhắm mắt', 'Nhìn xa', 'Nhìn loạn'], 0, 'Ngắm: đầu ruồi - khe ngắm - mục tiêu phải thẳng hàng trên cùng đường ngắm.'),
    Q('Khi bóp cò cần?', ['Giật mạnh', 'Bóp nhanh và nhả ngay', 'Đặt nhẹ', 'Bóp đều, dứt khoát, không giật'], 3, 'Bóp cò đều, dứt khoát; tránh giật làm lệch hướng đạn.'),
    Q('Giữ hơi thở khi bắn?', ['Nín thở ngắn lúc bóp cò', 'Thở sâu', 'Thở nhanh', 'Thở mạnh'], 0, 'Nín thở ngắn (1-2 giây) lúc bóp cò để giảm rung do hô hấp.'),
  ]),

  M(16, 'An toàn khi sử dụng súng', [
    Q('Nguyên tắc an toàn súng quan trọng nhất?', ['Hướng vào người', 'Đùa súng thoải mái', 'Khoá an toàn không quan trọng', 'Luôn coi súng là đã nạp đạn'], 3, 'Nguyên tắc số 1: luôn coi súng là đã nạp đạn, dù nghĩ chưa.'),
    Q('Khi không bắn, súng phải?', ['Khoá an toàn, hướng nòng đi nơi an toàn', 'Sẵn sàng bắn', 'Không quan tâm', 'Hướng vào người'], 0, 'Súng luôn ở khoá an toàn, nòng hướng đi nơi không có người.'),
    Q('Không bao giờ?', ['Thực hành ngắm', 'Chĩa súng vào người không có ý định bắn', 'Học tập', 'Vệ sinh súng'], 1, 'KHÔNG bao giờ chĩa súng vào người mà không có ý định bắn (kể cả đùa).'),
    Q('Trước khi bắn cần xác định?', ['Bắn ngẫu nhiên', 'Mục tiêu rõ ràng và hậu mục tiêu', 'Không cần biết', 'Bắn tự do'], 1, 'Phải biết rõ mục tiêu và phía sau (hậu mục tiêu) để tránh trúng người không liên quan.'),
    Q('Vệ sinh súng sau bắn?', ['Bắt buộc, tháo lau dầu', 'Chỉ lau bằng khăn khô, không dùng dầu', 'Khi nào tiện', 'Không cần'], 0, 'Vệ sinh súng sau bắn: tháo lau bụi thuốc súng, dầu nhớt để chống gỉ.'),
  ]),

  M(17, 'Lựu đạn cầm tay (lý thuyết)', [
    Q('Lựu đạn được dùng để?', ['Phòng không', 'Bắn xa', 'Sát thương sinh lực, phá vật cản nhẹ', 'Tăng-thiết giáp'], 2, 'Lựu đạn sát thương sinh lực địch, phá vật cản nhẹ ở cự ly gần.'),
    Q('Cấu tạo lựu đạn gồm?', ['Vỏ, thuốc nổ, ngòi nổ', 'Chỉ vỏ', 'Chỉ thuốc', 'Chỉ ngòi'], 0, 'Lựu đạn gồm: vỏ thép/nhựa, thuốc nổ chính, ngòi nổ với chốt an toàn.'),
    Q('Trước khi ném lựu đạn cần?', ['Rút chốt an toàn', 'Tháo nắp đậy thuốc nổ', 'Đập xuống đất', 'Lắc mạnh'], 0, 'Trước khi ném: rút chốt an toàn, kẹp tay đè cần bẩy, sau đó ném.'),
    Q('Thời gian từ khi rút chốt đến nổ?', ['Khoảng 3-5 giây', '1 phút', '30 giây', 'Ngay lập tức'], 0, 'Lựu đạn nổ sau ~3-5 giây kể từ khi thả cần bẩy.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Ngày thành lập QĐND VN?', ['22/12/1944', '30/4/1975', '2/9/1945', '19/8/1945'], 0, 'QĐND VN thành lập 22/12/1944.'),
    Q('LLVT VN gồm?', ['Chỉ quân đội', 'QĐND, CAND, DQTV', 'Chỉ DQTV', 'Chỉ công an'], 1, '3 thành phần LLVT.'),
    Q('AK-47 dùng đạn?', ['5,56 × 45 mm', '12,7 mm', '9 mm', '7,62 × 39 mm'], 3, 'AK-47 dùng đạn 7,62 × 39 mm.'),
    Q('Tư thế bắn vững nhất?', ['Đứng bắn (tầm quan sát rộng)', 'Ngồi bắn (chân xếp bằng)', 'Nằm', 'Quỳ bắn (1 gối chống đất)'], 2, 'Nằm bắn vững nhất.'),
    Q('Khẩu lệnh đứng nghiêm?', ['"Chú ý!"', '"Bắt đầu!"', '"Nghiêm!"', '"Đứng!"'], 2, '"Nghiêm!" cho tư thế đứng nghiêm.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'An ninh quốc gia - khái niệm', [
    Q('An ninh quốc gia là?', ['Chỉ quân sự', 'Chỉ ngoại giao', 'Chỉ kinh tế', 'Sự ổn định, phát triển bền vững của chế độ và lãnh thổ'], 3, 'ANQG: sự ổn định, phát triển bền vững của chế độ, độc lập, chủ quyền, lãnh thổ.'),
    Q('Bảo vệ ANQG là trách nhiệm của?', ['Chỉ công an', 'Chỉ chính phủ', 'Toàn dân và toàn hệ thống chính trị', 'Chỉ quân đội'], 2, 'ANQG là sự nghiệp của toàn dân, dưới sự lãnh đạo của Đảng.'),
    Q('Các lĩnh vực ANQG?', ['Chỉ chính trị', 'Chỉ kinh tế', 'Chính trị, kinh tế, văn hoá, mạng, biên giới...', 'Chỉ quân sự'], 2, 'ANQG đa lĩnh vực: chính trị, kinh tế, văn hoá, mạng, biên giới, lãnh thổ.'),
    Q('Lực lượng nòng cốt bảo vệ ANQG?', ['Quân đội', 'Tất cả', 'Công an nhân dân', 'Dân quân'], 2, 'CAND là nòng cốt; phối hợp với QĐND và toàn dân.'),
  ]),

  M(20, 'Các thế lực thù địch và âm mưu', [
    Q('Diễn biến hoà bình là?', ['Hoà bình thực sự', 'Đàm phán', 'Chiến lược của thế lực thù địch nhằm chuyển hoá CNXH', 'Chiến tranh'], 2, 'Diễn biến hoà bình: chiến lược chuyển hoá chế độ CNXH thành tư bản qua các biện pháp phi quân sự.'),
    Q('Bạo loạn lật đổ là?', ['Bầu cử', 'Biểu tình hợp pháp', 'Đàm phán', 'Sử dụng bạo lực để lật đổ chính quyền'], 3, 'Bạo loạn lật đổ: dùng vũ lực + tuyên truyền lật đổ chính quyền.'),
    Q('Để chống diễn biến hoà bình cần?', ['Giữ vững niềm tin vào Đảng, tăng cường giáo dục', 'Mạng XH tự do', 'Im lặng', 'Tiếp tay'], 0, 'Phòng chống: giáo dục chính trị, nâng cao cảnh giác, đấu tranh trên không gian mạng.'),
    Q('Trên mạng XH, cần?', ['Tin mọi nguồn', 'Cảnh giác với thông tin sai lệch, không lan truyền', 'Tiếp tay', 'Phớt lờ'], 1, 'Tỉnh táo trước fake news, không tiếp tay lan truyền, báo cáo nội dung xấu.'),
  ]),

  M(21, 'Bảo vệ chủ quyền biển đảo', [
    Q('VN có chủ quyền với hai quần đảo?', ['Bạch Long Vĩ', 'Hoàng Sa và Trường Sa', 'Côn Đảo', 'Phú Quốc'], 1, 'Hoàng Sa (Đà Nẵng) và Trường Sa (Khánh Hoà) thuộc chủ quyền VN.'),
    Q('Diện tích biển VN khoảng?', ['~1 triệu km²', '5 triệu km²', '100.000 km²', '3.000 km²'], 0, 'Vùng biển VN ~1 triệu km², bao gồm vùng đặc quyền kinh tế 200 hải lý.'),
    Q('Công ước Liên Hợp Quốc về Luật Biển 1982?', ['WTO 1995', 'UNCLOS 1982', 'UNESCO', 'UNCHR 1950'], 1, 'UNCLOS 1982 quy định lãnh hải 12 hải lý, vùng đặc quyền kinh tế 200 hải lý.'),
    Q('VN bảo vệ biển đảo bằng?', ['Pháp luật quốc tế + lực lượng vũ trang + ngoại giao', 'Chỉ ngoại giao', 'Im lặng', 'Chỉ quân sự'], 0, 'VN bảo vệ biển đảo qua pháp luật quốc tế, ngoại giao, lực lượng vũ trang, ngư dân.'),
    Q('Lực lượng nào trực tiếp giữ biển đảo?', ['Chỉ Hải quân', 'Hải quân, Cảnh sát biển, Biên phòng', 'Chỉ Biên phòng', 'Bộ binh'], 1, 'Hải quân, Cảnh sát biển VN và Bộ đội Biên phòng trực tiếp giữ biển đảo.'),
  ]),

  M(22, 'Bảo vệ biên giới quốc gia', [
    Q('Biên giới quốc gia VN dài khoảng?', ['1.000 km', '100 km', '10.000 km', '~4.500 km đường bộ + 3.260 km bờ biển'], 3, 'VN có 4.510 km biên giới đất liền (Trung, Lào, Campuchia) và 3.260 km bờ biển.'),
    Q('VN có biên giới với?', ['Thái Lan, Lào, Campuchia', 'Trung Quốc, Lào, Campuchia', 'Thái Lan', 'Myanmar'], 1, 'VN giáp 3 nước: Trung Quốc (Bắc), Lào (Tây), Campuchia (Tây Nam).'),
    Q('Lực lượng nòng cốt giữ biên giới?', ['Bộ đội Biên phòng', 'Bộ binh', 'Không quân', 'Hải quân'], 0, 'Bộ đội Biên phòng là lực lượng nòng cốt bảo vệ biên giới đất liền và bờ biển.'),
    Q('Ngày truyền thống Bộ đội Biên phòng?', ['30/4', '3/3 hàng năm', '22/12', '3/2'], 1, 'Ngày truyền thống BĐBP VN là 3/3 (thành lập 3/3/1959).'),
  ]),

  M(23, 'An ninh mạng', [
    Q('An ninh mạng là?', ['Bảo đảm an toàn thông tin trên không gian mạng', 'Cảnh sát giao thông', 'Quân sự', 'Phòng cháy'], 0, 'ANM bảo vệ thông tin, hệ thống mạng khỏi tấn công, xâm nhập.'),
    Q('Tấn công mạng phổ biến gồm?', ['Phishing, malware, DDoS', 'Chỉ malware', 'Chỉ phishing', 'Tay không'], 0, 'Phishing (lừa đảo), malware (mã độc), DDoS (làm tê liệt dịch vụ).'),
    Q('Khi gặp link/email lạ nên?', ['Click ngay', 'Nhập mật khẩu', 'Chuyển tiền', 'Không click, kiểm tra nguồn'], 3, 'Không click link lạ, không nhập mật khẩu, kiểm tra nguồn gửi.'),
    Q('Mật khẩu an toàn nên?', ['123456', 'Dài ≥8 ký tự, có chữ + số + đặc biệt', 'Họ và tên đầy đủ viết liền', 'Ngày sinh'], 1, 'Mật khẩu mạnh: dài, có chữ hoa/thường, số, ký tự đặc biệt.'),
    Q('Bật xác thực 2 yếu tố (2FA) giúp?', ['Chậm hơn', 'Tốn pin', 'Không cần đặt mật khẩu nữa', 'Tăng độ an toàn tài khoản'], 3, '2FA: ngoài mật khẩu cần thêm OTP hoặc khoá vật lý, an toàn hơn nhiều.'),
  ]),

  M(24, 'Phòng chống tội phạm cho học sinh', [
    Q('Học sinh hay gặp tội phạm?', ['Buôn người', 'Cướp ngân hàng', 'Hối lộ', 'Bắt nạt, lừa đảo qua mạng, ma tuý'], 3, 'Học sinh dễ gặp: bắt nạt (cyberbullying), lừa đảo qua mạng, ma tuý, xâm hại.'),
    Q('Khi bị bắt nạt cần?', ['Bỏ học', 'Phản bắt nạt', 'Im lặng', 'Báo cho người lớn, lưu bằng chứng'], 3, 'Báo cho cha mẹ, thầy cô, lưu bằng chứng (screenshot, video).'),
    Q('Để tránh lừa đảo qua mạng?', ['Click link lạ', 'Không cung cấp OTP, không chuyển tiền cho người lạ', 'Tin tưởng mọi người', 'Cho OTP'], 1, 'Không cung cấp OTP, mã PIN, không chuyển tiền cho người lạ qua mạng.'),
    Q('Phòng chống ma tuý quan trọng nhất?', ['Thử cho biết để cai sau', 'Nói không, tránh xa nhóm dùng ma tuý', 'Đua đòi', 'Thử 1 lần'], 1, 'Nguyên tắc: nói KHÔNG với ma tuý, tránh xa môi trường có ma tuý.'),
    Q('Khi nghi ngờ có tội phạm cần?', ['Im lặng', 'Báo công an (113)', 'Chia sẻ mạng', 'Tự xử lý'], 1, 'Gọi 113 (công an), 114 (cứu hoả), 115 (cấp cứu), 111 (bảo vệ trẻ em).'),
  ]),

  M(25, 'Phòng chống ma tuý và tệ nạn XH', [
    Q('Ma tuý là?', ['Thuốc bổ', 'Thực phẩm', 'Chất gây nghiện ảnh hưởng thần kinh', 'Vitamin'], 2, 'Ma tuý: chất gây nghiện, có thể tự nhiên (cần sa) hoặc tổng hợp (heroin, ma tuý đá).'),
    Q('Tác hại của ma tuý?', ['Phá huỷ sức khoẻ, tinh thần, gia đình, xã hội', 'Vô hại', 'Khỏe hơn', 'Tăng IQ'], 0, 'Ma tuý phá huỷ sức khoẻ, não bộ, gia đình, gây tội phạm và lây HIV.'),
    Q('Tệ nạn XH gồm?', ['Thể thao', 'Học tập', 'Ma tuý, cờ bạc, mại dâm', 'Tình nguyện'], 2, 'Tệ nạn XH: ma tuý, cờ bạc, mại dâm, mê tín, đánh nhau.'),
    Q('Học sinh phòng chống tệ nạn XH bằng?', ['Học tập, rèn luyện, tham gia hoạt động lành mạnh', 'Chỉ chơi game', 'Thử các chất', 'Đua đòi'], 0, 'Phòng chống: học tập, rèn luyện, hoạt động lành mạnh (thể thao, nghệ thuật, tình nguyện).'),
    Q('Khi bạn bè rủ thử ma tuý cần?', ['Thử 1 lần', 'Nói KHÔNG dứt khoát, tránh xa', 'Im lặng', 'Nể nang'], 1, 'Dứt khoát nói KHÔNG, rời khỏi tình huống, báo người lớn nếu cần.'),
  ]),

  M(26, 'Kỹ năng sinh tồn - Định hướng', [
    Q('Khi lạc rừng, việc đầu tiên cần?', ['Bình tĩnh, dừng lại, đánh giá tình hình', 'La hét', 'Chạy vội', 'Đi tiếp theo hướng đang đi'], 0, 'STOP: Stop - Think - Observe - Plan. Đứng im đánh giá thay vì chạy.'),
    Q('Định hướng bằng Mặt Trời?', ['Mọc đằng Bắc', 'Không xác định', 'Ngược lại', 'Mặt Trời mọc đằng Đông, lặn đằng Tây'], 3, 'Mặt Trời mọc đằng Đông, lặn đằng Tây — giúp xác định hướng cơ bản.'),
    Q('La bàn chỉ?', ['Hướng Bắc từ', 'Hướng Đông', 'Hướng Nam', 'Hướng Tây'], 0, 'Kim la bàn chỉ về hướng Bắc từ (gần Bắc địa lý).'),
    Q('Ban đêm có thể xác định hướng Bắc nhờ?', ['Sao Bắc Đẩu (Polaris)', 'Mặt Trăng', 'Sao Hôm', 'Sao Thuỷ'], 0, 'Polaris (Sao Bắc Đẩu) ở gần thiên cực Bắc, chỉ hướng Bắc địa lý.'),
  ]),

  M(27, 'Kỹ năng sinh tồn - Nước và lửa', [
    Q('Nguồn nước an toàn trong tự nhiên?', ['Nước mưa axit', 'Suối chảy + đun sôi', 'Nước đọng', 'Nước biển'], 1, 'Nước suối chảy + đun sôi ≥1 phút an toàn nhất; tránh nước đọng có vi khuẩn.'),
    Q('Trong sinh tồn, người không có nước có thể sống?', ['1 tuần', '1 tháng', '3-4 ngày', '3 giờ'], 2, 'Quy tắc 3: 3 phút không khí, 3 giờ ấm, 3 ngày nước, 3 tuần thức ăn.'),
    Q('Tạo lửa khi không có bật lửa?', ['Không thể', 'Đá lửa + bùi nhùi, kính lúp, ma sát', 'Tự sinh', 'Chờ sét'], 1, 'Đá lửa (ferrocerium), kính lúp tập trung ánh nắng, hoặc ma sát gỗ với gỗ.'),
    Q('Lửa giúp gì cho người lạc?', ['Chỉ khói', 'Chỉ để xua muỗi côn trùng', 'Chỉ ánh sáng', 'Giữ ấm, nấu chín, xua thú, tín hiệu'], 3, 'Lửa giúp: giữ ấm, nấu chín thức ăn, đuổi thú, tín hiệu cứu hộ.'),
  ]),

  M(28, 'Kỹ năng sinh tồn - Trú ẩn và tín hiệu', [
    Q('Trú ẩn ngoài trời cần?', ['Lộ thiên', 'Trên cao', 'Dưới nước', 'Tránh gió, mưa, lạnh, ẩm'], 3, 'Trú ẩn: chọn nơi tránh gió, mưa, không ngập, có thể che chắn (lá, cây, bạt).'),
    Q('Tín hiệu cầu cứu phổ biến?', ['SOS (3 ngắn 3 dài 3 ngắn)', '999', 'HELP viết chữ to trên cát', '911'], 0, 'SOS quốc tế: 3 ngắn - 3 dài - 3 ngắn (..._ _ _...) bằng đèn, còi, gương.'),
    Q('Tín hiệu nhìn thấy từ xa?', ['Lửa lớn, khói, gương phản chiếu', 'Chôn xuống', 'Im lặng', 'Đứng yên'], 0, 'Tín hiệu: lửa lớn ban đêm, khói ban ngày, gương phản chiếu ánh nắng.'),
    Q('Gương phản chiếu dùng để?', ['Đánh nhau', 'Trang điểm', 'Trang trí', 'Báo hiệu máy bay cứu hộ'], 3, 'Gương phản chiếu ánh nắng có thể được nhìn thấy từ xa hàng km.'),
  ]),

  M(29, 'Sơ cứu cơ bản', [
    Q('Khi gặp tai nạn, việc đầu tiên?', ['Bỏ chạy', 'Đảm bảo an toàn cho mình + nạn nhân', 'Lao vào cứu', 'Quay video'], 1, 'Đảm bảo an toàn (no second victim), sau đó gọi 115 và sơ cứu.'),
    Q('Số gọi cấp cứu ở VN?', ['114', '113', '911', '115'], 3, 'VN: 115 (cấp cứu), 113 (công an), 114 (cứu hoả).'),
    Q('Khi nạn nhân ngừng thở, ngừng tim?', ['Cho nạn nhân uống nước ngay', 'Hô hấp nhân tạo và ép tim ngoài lồng ngực (CPR)', 'La hét', 'Tát nước'], 1, 'CPR: ép tim 30 lần (5-6 cm sâu, 100-120 lần/phút) + hô hấp nhân tạo 2 lần.'),
    Q('Chảy máu nặng cần?', ['Để chảy tự nhiên', 'Bỏ qua', 'Đổ rượu', 'Ép trực tiếp lên vết thương + nâng cao'], 3, 'Ép trực tiếp lên vết thương bằng vải sạch, nâng cao vùng bị thương.'),
    Q('Bỏng nhẹ cần?', ['Bôi kem đánh răng', 'Đắp đá', 'Đắp gạo', 'Ngâm nước mát 10-20 phút'], 3, 'Bỏng nhẹ: ngâm/xả nước mát (15-25°C) 10-20 phút, không bôi kem đánh răng.'),
  ]),

  M(30, 'Phòng chống thiên tai', [
    Q('Thiên tai phổ biến ở VN?', ['Núi lửa', 'Bão, lũ, sạt lở', 'Động đất lớn', 'Bão tuyết'], 1, 'VN thường gặp bão, lũ lụt, sạt lở, hạn hán, xâm nhập mặn.'),
    Q('Khi có bão, cần?', ['Không quan tâm', 'Ra biển', 'Theo dõi tin tức, gia cố nhà cửa, dự trữ thực phẩm', 'Bỏ chạy'], 2, 'Bão: theo dõi đài, gia cố nhà cửa, dự trữ thực phẩm/nước, di tản nếu cần.'),
    Q('Khi có lũ, không nên?', ['Chờ cứu', 'Lội qua nước chảy xiết', 'Bám vào dây', 'Lên cao'], 1, 'Không lội qua nước chảy xiết (chỉ 15 cm có thể cuốn người).'),
    Q('Sạt lở đất hay xảy ra ở?', ['Vùng núi sau mưa lớn', 'Bờ biển khi triều cường', 'Sa mạc', 'Đồng bằng'], 0, 'Sạt lở: vùng núi, đồi sau mưa kéo dài, đất bão hoà nước.'),
    Q('Khi có động đất ở trong nhà?', ['Chạy ra ngoài ngay', 'Cúi - che - bám (drop - cover - hold)', 'Đứng yên', 'Nhảy lên'], 1, 'Drop - Cover - Hold: cúi xuống, che đầu, bám vào vật chắc đợi rung lắc dứt.'),
  ]),

  M(31, 'Phòng cháy chữa cháy', [
    Q('Số gọi cứu hoả ở VN?', ['115', '114', '911', '113'], 1, '114 là số cứu hoả ở Việt Nam.'),
    Q('Tam giác cháy gồm?', ['Nhiệt + nước', 'Lửa + gió', 'Nhiệt + nhiên liệu + oxy', 'Khí + áp'], 2, 'Tam giác cháy: nhiệt + nhiên liệu + oxy. Mất 1 yếu tố thì cháy tắt.'),
    Q('Khi có cháy ở nhà?', ['Lấy đồ trước', 'Báo động, gọi 114, di tản theo lối thoát', 'Trốn dưới giường', 'Chạy lên cao'], 1, 'Cháy: hô báo động, gọi 114, di tản nhanh theo lối thoát, không lấy đồ.'),
    Q('Khi có khói, cần?', ['Đứng thẳng', 'Cúi thấp, bịt mũi miệng bằng vải ẩm', 'Hít sâu', 'Mở cửa sổ'], 1, 'Cúi thấp (khói nhẹ bay lên trên), bịt mũi miệng vải ẩm để lọc khói.'),
    Q('Cháy điện không được dùng?', ['Bình CO₂', 'Chăn ướt phủ kín nguồn cháy', 'Bình bột', 'Nước'], 3, 'KHÔNG dùng nước cho cháy điện vì nước dẫn điện gây giật.'),
  ]),

  M(32, 'Bảo vệ Tổ quốc thời bình', [
    Q('Bảo vệ Tổ quốc thời bình gồm?', ['Chỉ ngoại giao', 'Chỉ chiến tranh', 'Xây dựng tiềm lực quốc phòng + bảo vệ chủ quyền', 'Chỉ kinh tế'], 2, 'BVTQ thời bình: xây dựng tiềm lực + bảo vệ chủ quyền + đấu tranh phòng chống các thế lực thù địch.'),
    Q('Tiềm lực quốc phòng gồm?', ['Kinh tế, chính trị, văn hoá, khoa học, quân sự', 'Chỉ kinh tế', 'Chỉ quân sự', 'Chỉ văn hoá'], 0, 'Tiềm lực QP đa lĩnh vực: KT + chính trị + văn hoá + KH-CN + quân sự.'),
    Q('Nghệ thuật QP toàn dân là?', ['Chỉ công an', 'Toàn dân tham gia bảo vệ Tổ quốc', 'Chỉ quân đội', 'Chỉ Đảng'], 1, 'QP toàn dân: huy động sức mạnh toàn dân, dưới sự lãnh đạo của Đảng.'),
    Q('Học sinh thực hiện trách nhiệm BVTQ qua?', ['Không quan tâm', 'Chỉ chơi', 'Học tập tốt, rèn luyện, tuân thủ PL, NVQS', 'Im lặng'], 2, 'HS: học tốt, rèn luyện thể chất, tuân thủ PL, thực hiện NVQS khi đến tuổi.'),
  ]),

  M(33, 'Truyền thống yêu nước và tinh thần dân tộc', [
    Q('Truyền thống yêu nước của dân tộc VN?', ['1000 năm', 'Khoảng 500 năm tính từ thời Lê', 'Hơn 4000 năm dựng nước và giữ nước', '100 năm'], 2, 'Dân tộc VN có truyền thống yêu nước hàng nghìn năm, từ Văn Lang.'),
    Q('Câu nói "Không có gì quý hơn độc lập tự do" của ai?', ['Phạm Văn Đồng', 'Võ Nguyên Giáp', 'Lê Duẩn', 'Hồ Chí Minh'], 3, 'Lời kêu gọi của Chủ tịch Hồ Chí Minh 17/7/1966.'),
    Q('Anh hùng dân tộc tiêu biểu chống ngoại xâm?', ['Chỉ vua', 'Chỉ tướng', 'Hai Bà Trưng, Trần Hưng Đạo, Quang Trung', 'Chỉ Hồ Chí Minh trong thời hiện đại'], 2, 'Hai Bà Trưng, Trần Hưng Đạo, Lê Lợi, Quang Trung là những anh hùng tiêu biểu.'),
    Q('Học sinh hôm nay yêu nước bằng cách?', ['Chỉ hô khẩu hiệu', 'Học tốt, rèn luyện, sống có ích', 'Im lặng', 'Không gì'], 1, 'HS yêu nước qua hành động: học giỏi, rèn luyện, đóng góp cho XH.'),
  ]),

  M(34, 'Hướng nghiệp quân đội - công an', [
    Q('Tuyển sinh trường quân đội ở VN?', ['Không thi', 'Yêu cầu cao về sức khoẻ, học lực, lý lịch', 'Trả phí', 'Chỉ xét học bạ, không khám sức khoẻ'], 1, 'Tuyển sinh QĐ - CA yêu cầu sức khoẻ, học lực, lý lịch chính trị.'),
    Q('Học viện kỹ thuật quân sự đào tạo?', ['Chỉ nghệ thuật', 'Kỹ sư quân sự nhiều chuyên ngành', 'Chỉ ngoại ngữ', 'Chỉ kinh tế'], 1, 'HVKTQS đào tạo kỹ sư quân sự: CNTT, cơ khí, điện tử, vật liệu...'),
    Q('Học viện CSND đào tạo?', ['Giáo viên', 'Y bác sĩ', 'Sĩ quan công an', 'Bộ đội'], 2, 'Học viện Cảnh sát nhân dân đào tạo sĩ quan công an.'),
    Q('Học sinh muốn vào QĐ - CA cần?', ['Vi phạm PL', 'Học tốt, rèn luyện thể chất, đạo đức tốt', 'Học kém', 'Lười biếng'], 1, 'Cần học tốt, rèn luyện sức khoẻ, đạo đức tốt, lý lịch rõ ràng.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Ngày thành lập QĐND VN?', ['2/9/1945', '30/4/1975', '19/8/1945', '22/12/1944'], 3, '22/12/1944.'),
    Q('Bảo vệ Tổ quốc là?', ['Chỉ quân đội', 'Quyền và nghĩa vụ thiêng liêng', 'Không bắt buộc', 'Tuỳ chọn'], 1, 'Hiến pháp khẳng định.'),
    Q('Số cứu hoả VN?', ['113', '115', '114', '911'], 2, '114 cứu hoả; 113 công an; 115 cấp cứu.'),
    Q('Khi lạc rừng cần?', ['La hét', 'Chạy vội', 'Đi vòng quanh tìm đường ra', 'Bình tĩnh, STOP'], 3, 'STOP: Stop - Think - Observe - Plan.'),
    Q('AK-47 dùng đạn?', ['5,56', '9 mm', '7,62 × 39 mm', '12,7 mm'], 2, '7,62 × 39 mm.'),
  ]),
];

export const H10GDQP_SCENARIOS = indexBy(H10GDQP_WEEKS);
