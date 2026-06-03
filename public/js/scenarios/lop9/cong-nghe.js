// ============================================================
// Lớp 9 · CÔNG NGHỆ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Định hướng nghề: lắp đặt mạng điện trong nhà + trồng cây ăn quả + sửa xe đạp + nấu ăn gia đình.
// 4–5 câu/tuần · ID prefix: "S9CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9CN', 'cong-nghe', n, title, qs, opts);

export const S9CN_WEEKS = [
  // ───── HK1 — Lắp đặt mạng điện trong nhà ─────
  M(1, 'Giới thiệu nghề điện dân dụng', [
    Q('Nghề điện dân dụng phục vụ?', ['Khai khoáng', 'Nhà máy lớn', 'Sinh hoạt và sản xuất nhỏ ở gia đình, cộng đồng', 'Hàng không'], 2, 'Nghề điện dân dụng phục vụ các nhu cầu điện trong gia đình.'),
    Q('Đặc điểm của lao động nghề điện dân dụng?', ['Chỉ ngồi máy tính', 'Đa số làm trong nhà, làm ngoài trời khi lắp mạng ngoài, cần cẩn thận với an toàn điện', 'Không cần học', 'Không nguy hiểm'], 1, 'Lao động nghề điện đòi hỏi cẩn trọng vì làm việc với điện.'),
    Q('Yêu cầu của người làm nghề điện?', ['Không cần đạo đức', 'Chỉ cần khoẻ', 'Chỉ cần học giỏi toán', 'Có kiến thức điện, sức khoẻ tốt, cẩn thận, đạo đức nghề'], 3, 'Người làm điện cần đủ kiến thức + đạo đức nghề nghiệp.'),
    Q('Triển vọng nghề điện dân dụng?', ['Nhu cầu cao do mọi gia đình, công trình đều cần điện', 'Sắp biến mất', 'Ít việc', 'Không có thị trường'], 0, 'Nghề điện luôn có nhu cầu cao trong xã hội hiện đại.'),
  ]),

  M(2, 'Vật liệu điện dùng trong lắp đặt mạng điện trong nhà', [
    Q('Dây dẫn điện thường dùng?', ['Thép mạ kẽm trần', 'Đồng hoặc nhôm bọc cách điện PVC', 'Inox bóng dùng trong trang trí', 'Sắt trần'], 1, 'Đồng/nhôm bọc PVC là vật liệu dây dẫn điện phổ biến.'),
    Q('Vì sao dùng đồng làm dây dẫn?', ['Vì cứng và chịu va đập tốt', 'Cách điện tốt', 'Vì rẻ hơn nhôm rất nhiều', 'Dẫn điện tốt, bền, dễ gia công'], 3, 'Đồng dẫn điện tốt thứ 2 (sau bạc) và dễ gia công.'),
    Q('Vật liệu cách điện điển hình?', ['Nhựa PVC, sứ, cao su', 'Đồng nguyên chất Cu99,9%', 'Hợp kim nhôm AA1350', 'Thép cuộn cán nguội'], 0, 'PVC, sứ, cao su là vật liệu cách điện phổ biến.'),
    Q('Tiết diện dây dẫn được tính theo?', ['Màu sắc', 'Theo loại đèn sử dụng trong nhà', 'Dòng điện và chiều dài đường dây', 'Trọng lượng'], 2, 'Tiết diện chọn theo dòng điện và chiều dài để tránh quá tải, sụt áp.'),
    Q('Ký hiệu Cu là?', ['Sắt (Fe)', 'Chì (Pb)', 'Nhôm (Al)', 'Đồng'], 3, 'Cu (Cuprum) là ký hiệu hoá học của đồng.'),
  ]),

  M(3, 'Dụng cụ dùng trong lắp đặt mạng điện', [
    Q('Dụng cụ đo điện cơ bản?', ['Cờ lê và mỏ lết', 'Kéo cắt dây chuyên dụng', 'Vôn kế, ampe kế, đồng hồ vạn năng (VOM)', 'Búa cao su và đục'], 2, 'VOM đo được điện áp, dòng điện, điện trở.'),
    Q('Bút thử điện dùng để?', ['Đo điện trở', 'Phát hiện có/không có điện áp trên dây', 'Đo dòng', 'Đo công suất'], 1, 'Bút thử điện phát hiện điện áp tiếp xúc nhanh.'),
    Q('Kìm tuốt dây dùng để?', ['Đo dây', 'Bẻ dây', 'Bóc lớp cách điện ra khỏi dây dẫn', 'Cắt dây'], 2, 'Kìm tuốt dây loại bỏ lớp cách điện ở đầu dây.'),
    Q('Tua vít có chức năng?', ['Cắt dây', 'Vặn vít, lắp ổ cắm, công tắc', 'Đo điện áp một chiều', 'Bẻ dây'], 1, 'Tua vít là dụng cụ vặn vít thông dụng.'),
    Q('Khoan điện dùng để?', ['Bóc cách điện', 'Cắt dây', 'Đo điện', 'Khoan lỗ bắt vít, đi dây âm tường'], 3, 'Khoan điện hỗ trợ lắp đặt mạng điện cố định.'),
  ]),

  M(4, 'Đồng hồ vạn năng (VOM) — Sử dụng', [
    Q('VOM viết tắt của?', ['Volt-Only-Meter', 'Volt-Ohm-Meter', 'Vacuum-Operated-Meter', 'Volt-Ohm-Milliammeter'], 3, 'VOM = Volt-Ohm-Milliammeter, đo nhiều đại lượng.'),
    Q('Đo điện áp xoay chiều dùng thang?', ['DCV (đo điện áp một chiều của pin)', 'Ω (đo điện trở)', 'mA (đo dòng điện nhỏ)', 'ACV'], 3, 'AC Volt (ACV) dùng đo điện áp xoay chiều như điện lưới 220V.'),
    Q('Đo điện trở dùng thang?', ['Ω (Ohm)', 'W (Watt, đo công suất tiêu thụ)', 'A (Ampe, đo dòng điện)', 'V (Volt, đo hiệu điện thế)'], 0, 'Thang Ω đo điện trở; cần ngắt nguồn điện trước khi đo.'),
    Q('Khi đo dòng điện, mắc VOM?', ['Song song', 'Mắc xen kẽ giữa tải và nguồn', 'Nối tiếp với mạch', 'Không nối'], 2, 'Ampe kế (đo dòng) mắc nối tiếp; vôn kế mắc song song.'),
    Q('Lưu ý quan trọng khi dùng VOM?', ['Chọn đúng thang đo và thang lớn nhất nếu chưa biết giá trị', 'Luôn dùng thang nhỏ nhất', 'Không cần chọn', 'Cứ chọn thang gần với giá trị đoán'], 0, 'Chọn thang lớn trước, giảm dần để tránh hỏng đồng hồ.'),
  ]),

  M(5, 'Nối dây dẫn điện', [
    Q('Các kiểu nối dây dẫn?', ['Chỉ nối thẳng', 'Nối thẳng, nối phân nhánh, nối dùng phụ kiện', 'Chỉ buộc', 'Chỉ phân nhánh'], 1, 'Có 3 kiểu nối cơ bản: thẳng, phân nhánh, dùng phụ kiện.'),
    Q('Mối nối phải đảm bảo?', ['Dẫn điện tốt, đủ bền cơ học, an toàn cách điện, đẹp', 'Chỉ cần chạm là đủ tiếp xúc', 'Bền là đủ', 'Đẹp là đủ'], 0, 'Mối nối phải đảm bảo 4 yêu cầu: dẫn điện, bền, an toàn, đẹp.'),
    Q('Trước khi nối phải?', ['Không bóc', 'Bóc lớp cách điện vừa đủ, làm sạch lõi đồng', 'Bóc hết', 'Đốt lõi để loại bỏ lớp oxit'], 1, 'Bóc lớp cách điện vừa đủ và làm sạch bề mặt lõi đồng.'),
    Q('Sau khi nối phải?', ['Buộc dây', 'Để trần', 'Hàn (nếu cần) và bọc cách điện kỹ', 'Phun sơn'], 2, 'Hàn để chắc + bọc cách điện đảm bảo an toàn.'),
    Q('Vật liệu bọc cách điện mối nối?', ['Băng dính cách điện PVC, ống co nhiệt', 'Băng nylon dán đồ thông thường', 'Giấy báo cuộn nhiều lớp', 'Vải vụn buộc chặt mối nối'], 0, 'Băng PVC hoặc ống co nhiệt chuyên dụng cho cách điện.'),
  ]),

  M(6, 'Thực hành: Nối dây dẫn — Nối thẳng', [
    Q('Bước đầu tiên?', ['Xoắn ngay', 'Đo điện áp 2 đầu dây', 'Bọc băng', 'Bóc cách điện 2 đầu dây cần nối'], 3, 'Bóc cách điện trước, lộ lõi đồng đủ dài.'),
    Q('Chiều dài bóc cách điện?', ['Khoảng 15–20 lần đường kính lõi', 'Bóc theo cảm tính khoảng 5 cm', '1 cm cố định', 'Hết dây'], 0, 'Bóc dài 15–20 lần đường kính lõi để đủ xoắn chắc.'),
    Q('Khi xoắn 2 lõi, cần?', ['Xoắn đều, chặt, không chồng', 'Chỉ chạm', 'Xoắn lỏng cho dễ tháo lại sau', 'Lỏng lẻo'], 0, 'Xoắn đều và chặt tạo tiếp xúc tốt, giảm điện trở.'),
    Q('Sau khi xoắn xong?', ['Hàn (nếu cần) và bọc băng cách điện', 'Để trần', 'Đốt nhẹ chỗ nối cho chắc', 'Bóp dẹp'], 0, 'Bọc băng cách điện là bắt buộc để đảm bảo an toàn.'),
  ]),

  M(7, 'Thực hành: Nối dây phân nhánh + dùng phụ kiện', [
    Q('Nối phân nhánh dùng khi?', ['Cuối dây', 'Khi cần đo dòng điện qua tải', 'Cần lấy nhánh phụ từ dây chính', 'Nối thẳng'], 2, 'Phân nhánh giúp lấy nguồn từ dây chính sang nhánh phụ.'),
    Q('Phụ kiện nối dây thông dụng?', ['Búa đinh và kìm cộng lực', 'Kéo cắt giấy và dao rọc', 'Cờ lê và mỏ lết loại lớn', 'Đầu cốt, hộp nối, đai nối'], 3, 'Đầu cốt + hộp nối + đai nối là phụ kiện chuyên dùng.'),
    Q('Ưu điểm dùng phụ kiện?', ['Mất thời gian hơn xoắn tay', 'Tiếp xúc kém hơn nối xoắn', 'Không an toàn', 'Nhanh, chắc, an toàn, đẹp, dễ tháo lắp'], 3, 'Phụ kiện giúp mối nối nhanh, chắc và dễ bảo trì.'),
    Q('Hộp nối có chức năng?', ['Cách điện tuyệt đối thay băng dính', 'Trang trí', 'Chỉ làm đẹp', 'Bảo vệ mối nối khỏi va đập, ẩm; thuận tiện kiểm tra'], 3, 'Hộp nối bảo vệ mối nối + tiện kiểm tra, sửa chữa.'),
  ]),

  M(8, 'Lắp đặt mạch điện bảng điện', [
    Q('Bảng điện chính (tổng) gồm?', ['Chỉ công tắc', 'Chỉ ổ cắm', 'Chỉ đèn', 'Cầu dao tổng, attomat, cầu chì, công tơ điện'], 3, 'Bảng điện chính có thiết bị bảo vệ và đóng cắt tổng.'),
    Q('Aptomat (CB) có chức năng?', ['Trang trí', 'Đo điện', 'Chiếu sáng', 'Tự ngắt khi quá tải hoặc ngắn mạch'], 3, 'Aptomat bảo vệ mạch khỏi quá tải và ngắn mạch.'),
    Q('Sơ đồ nguyên lý thể hiện?', ['Vị trí thực', 'Màu sắc', 'Mối quan hệ điện giữa các phần tử (không thể hiện vị trí thực)', 'Kích thước'], 2, 'Sơ đồ nguyên lý chỉ ra liên hệ điện, không thể hiện vị trí.'),
    Q('Sơ đồ lắp đặt thể hiện?', ['Giá tiền', 'Vị trí lắp đặt thực tế các thiết bị', 'Công suất', 'Nguyên lý'], 1, 'Sơ đồ lắp đặt mô tả vị trí thực tế của thiết bị.'),
    Q('Trình tự lắp bảng điện?', ['Đi dây trước', 'Khoan lỗ → đi dây → vẽ sơ đồ → lắp', 'Vẽ sơ đồ → khoan lỗ → lắp thiết bị → đi dây → kiểm tra', 'Lắp đèn trước'], 2, 'Trình tự đúng đảm bảo an toàn và đúng kỹ thuật.'),
  ]),

  M(9, 'Thực hành: Lắp bảng điện 1 cầu chì + 1 ổ cắm + 1 công tắc + 1 bóng đèn', [
    Q('Cầu chì lắp ở vị trí?', ['Trên dây trung tính, sau ổ cắm', 'Trên dây pha, trước thiết bị bảo vệ', 'Dây trung tính', 'Sau đèn'], 1, 'Cầu chì luôn lắp trên dây pha (dây nóng) để bảo vệ thiết bị.'),
    Q('Công tắc điều khiển đèn nối?', ['Nối tiếp với đèn, trên dây pha', 'Trên dây trung tính', 'Không nối', 'Song song với đèn'], 0, 'Công tắc nối tiếp đèn trên dây pha để ngắt điện hoàn toàn khi tắt.'),
    Q('Ổ cắm nối?', ['Song song với mạch chính', 'Nối tiếp', 'Nối tiếp với công tắc đèn', 'Sau công tắc đèn'], 0, 'Ổ cắm luôn nối song song với nguồn để có sẵn điện áp.'),
    Q('Trước khi thử, phải?', ['Cắm điện ngay', 'Đóng aptomat tổng rồi mới kiểm tra', 'Kiểm tra lại toàn bộ mối nối, đảm bảo cách điện', 'Bật ngay'], 2, 'Kiểm tra trước khi cấp điện là bước an toàn bắt buộc.'),
  ]),

  M(10, 'Lắp đặt mạch điện đèn ống huỳnh quang', [
    Q('Đèn huỳnh quang cần?', ['Chỉ tắc te', 'Chỉ chấn lưu', 'Chấn lưu (ballast) và tắc te (starter)', 'Không cần phụ kiện'], 2, 'Đèn huỳnh quang truyền thống cần chấn lưu + tắc te để khởi động.'),
    Q('Chấn lưu (ballast) có vai trò?', ['Tạo điện áp cao khởi động + hạn dòng', 'Đo điện', 'Trang trí', 'Chiếu sáng'], 0, 'Chấn lưu cung cấp điện áp cao và giới hạn dòng qua bóng.'),
    Q('Tắc te (starter) có vai trò?', ['Liên tục', 'Chiếu sáng', 'Tự đóng-mở để khởi động đèn, sau đó ngắt', 'Đo điện'], 2, 'Tắc te tạo xung khởi động rồi tự ngắt.'),
    Q('Đèn huỳnh quang LED khác đèn truyền thống?', ['Vẫn cần', 'Tốn điện hơn', 'Không cần tắc te + chấn lưu cũ; tích hợp driver', 'Không sáng'], 2, 'Đèn LED tích hợp driver, tiết kiệm điện hơn nhiều.'),
  ]),

  M(11, 'Mạch điện đèn 2 công tắc — Đèn cầu thang', [
    Q('Mạch đèn cầu thang dùng?', ['Ba công tắc', 'Hai công tắc 3 cực điều khiển 1 bóng từ 2 nơi', 'Không công tắc', 'Một công tắc'], 1, 'Hai công tắc 3 cực (đảo chiều) cho phép bật/tắt từ 2 đầu cầu thang.'),
    Q('Công tắc 3 cực có?', ['3 cực giống nhau', '4 cực', '2 cực', '1 cực chung và 2 cực điều khiển'], 3, 'Công tắc 3 cực: 1 cực COM + 2 cực L1, L2.'),
    Q('Lợi ích mạch đèn cầu thang?', ['Bền hơn', 'Tiết kiệm điện', 'Sáng hơn', 'Bật được ở dưới, tắt được ở trên (và ngược lại)'], 3, 'Tiện lợi điều khiển từ 2 vị trí.'),
    Q('Sơ đồ nguyên lý mạch đèn cầu thang?', ['Không có sơ đồ', 'L → CC → COM CT1 → L1/L2 → COM CT2 → đèn → N', 'L → đèn → N', 'L → CT1 → đèn → CT2 → N (1 cực)'], 1, 'Dây pha qua cầu chì, qua 2 công tắc 3 cực rồi đến đèn, về trung tính.'),
  ]),

  M(12, 'Lắp đặt dây dẫn của mạng điện trong nhà', [
    Q('Có 2 kiểu lắp đặt chính?', ['Đặt nổi và đặt ngầm (âm tường)', 'Chỉ ngầm', 'Chỉ nổi', 'Treo trần'], 0, 'Lắp đặt nổi (dùng ống nhựa nổi) và lắp âm tường là 2 kiểu chính.'),
    Q('Ưu điểm lắp nổi?', ['Đẹp hơn', 'Dễ thi công, dễ sửa chữa, chi phí thấp', 'Bền hơn', 'An toàn hơn'], 1, 'Lắp nổi thi công nhanh, dễ sửa, chi phí thấp.'),
    Q('Ưu điểm lắp ngầm?', ['Thi công rất nhanh, không cần khoan', 'Dễ sửa', 'Thẩm mỹ cao, bảo vệ dây tốt', 'Chi phí thấp hơn lắp nổi nhiều'], 2, 'Lắp ngầm đẹp và bảo vệ dây nhưng khó sửa.'),
    Q('Ống luồn dây thường dùng?', ['Ống cao su', 'Ống PVC chuyên dụng', 'Ống thép', 'Ống đồng'], 1, 'Ống PVC chuyên dụng cho điện là phổ biến nhất.'),
  ]),

  M(13, 'Kiểm tra an toàn mạng điện trong nhà', [
    Q('Định kỳ kiểm tra mạng điện?', ['Ít nhất 1–2 lần/năm', 'Khi hỏng mới kiểm', '10 năm/lần', 'Không cần'], 0, 'Kiểm tra định kỳ giúp phát hiện sớm nguy cơ chập, cháy.'),
    Q('Dấu hiệu nguy hiểm cần xử lý?', ['Quạt quay', 'Đèn sáng', 'Dây nóng, có mùi khét, ổ cắm cháy đen', 'Bình thường'], 2, 'Dây nóng, mùi khét, cháy đen là dấu hiệu nguy hiểm cần xử lý ngay.'),
    Q('Trước khi sửa điện?', ['Cứ sửa', 'Đứng trên ghế', 'Ngắt cầu dao tổng và kiểm tra bằng bút thử điện', 'Đeo găng tay là đủ'], 2, 'Ngắt điện và kiểm tra bằng bút thử là bắt buộc.'),
    Q('Thiết bị bảo vệ an toàn người?', ['Cầu chì', 'Cầu dao chống giật RCBO/RCCB (chống dòng rò)', 'Ổ cắm 3 chấu có nối đất', 'Aptomat thường'], 1, 'RCBO/RCCB phát hiện dòng rò qua người và ngắt nhanh, cứu mạng.'),
    Q('Khi có người bị điện giật, phải?', ['Đứng nhìn', 'Phun nước', 'Kéo nạn nhân ngay', 'Ngắt nguồn trước, sau đó sơ cứu'], 3, 'Ngắt nguồn trước rồi mới tiếp cận nạn nhân để cứu hộ.'),
  ]),

  M(14, 'Ôn tập + Kiểm tra giữa HK1', [
    Q('Dây dẫn điện gia dụng phổ biến?', ['Nhôm trần', 'Sắt trần', 'Đồng bọc PVC', 'Cáp đồng trục dùng cho TV'], 2, 'Đồng bọc PVC là dây dẫn gia dụng phổ biến.'),
    Q('VOM đo được?', ['Chỉ dòng', 'Chỉ điện áp', 'Điện áp, dòng điện, điện trở', 'Chỉ trở'], 2, 'VOM là đồng hồ vạn năng đo nhiều đại lượng.'),
    Q('Mối nối điện phải?', ['Dẫn điện tốt, bền, cách điện, đẹp', 'Bền là đủ', 'Chỉ cần dẫn điện là đủ', 'Đẹp là đủ'], 0, '4 yêu cầu cơ bản của mối nối.'),
    Q('Aptomat bảo vệ?', ['Bảo vệ riêng cho đèn LED', 'Điều chỉnh tốc độ quạt điện', 'Quá tải + ngắn mạch', 'Bảo vệ người khỏi điện giật'], 2, 'Aptomat tự ngắt khi quá tải/ngắn mạch.'),
    Q('Khi sửa điện cần?', ['Tự tin', 'Đeo găng là đủ', 'Ngắt nguồn + dùng bút thử điện', 'Cứ sửa'], 2, 'Ngắt điện rồi kiểm tra bằng bút thử là quy tắc an toàn.'),
  ]),

  M(15, 'Trồng cây ăn quả — Giá trị + đặc điểm', [
    Q('Cây ăn quả có giá trị?', ['Không giá trị', 'Kinh tế, dinh dưỡng, môi trường, dược liệu', 'Chỉ kinh tế', 'Chỉ ăn'], 1, 'Cây ăn quả đa giá trị: kinh tế + dinh dưỡng + môi trường.'),
    Q('Đặc điểm cây ăn quả?', ['Có tán lớn, bộ rễ ăn sâu, thời gian sinh trưởng dài, ra hoa-quả theo mùa', 'Không có rễ', 'Ngắn ngày', 'Thân thảo nhỏ, sống một vụ'], 0, 'Cây ăn quả thường lâu năm, có tán lớn và rễ sâu.'),
    Q('Yêu cầu ngoại cảnh?', ['Nhiệt độ, ánh sáng, độ ẩm, đất phù hợp từng loại cây', 'Chỉ cần có đất và nước là đủ', 'Như nhau', 'Chỉ phụ thuộc giống cây'], 0, 'Mỗi loại cây ăn quả cần điều kiện ngoại cảnh riêng.'),
    Q('Các phương pháp nhân giống?', ['Chỉ ghép', 'Chỉ hạt', 'Không nhân giống', 'Hữu tính (hạt) và vô tính (chiết, ghép, giâm)'], 3, 'Hai nhóm phương pháp: hữu tính (hạt) và vô tính.'),
    Q('Nhân giống vô tính ưu điểm?', ['Tốn nhiều hạt giống chất lượng cao', 'Giữ nguyên đặc tính cây mẹ, ra quả sớm', 'Không bền', 'Khác cây mẹ'], 1, 'Vô tính giúp giữ giống và ra quả sớm.'),
  ]),

  M(16, 'Kỹ thuật trồng và chăm sóc cây ăn quả', [
    Q('Thời vụ trồng cây ăn quả miền Bắc?', ['Mùa đông', 'Vụ hè (5–7) khi mưa nhiều', 'Mùa khô', 'Vụ xuân (2–4) và vụ thu (8–10)'], 3, 'Vụ xuân và vụ thu là thời điểm thích hợp ở miền Bắc.'),
    Q('Khoảng cách trồng phụ thuộc?', ['Trọng lượng', 'Mặt đất', 'Theo cảm tính của người trồng', 'Loại cây và tán lớn'], 3, 'Khoảng cách phụ thuộc kích thước tán khi trưởng thành.'),
    Q('Bón phân cho cây ăn quả?', ['Bón lót khi trồng + bón thúc trong quá trình sinh trưởng', 'Không cần', 'Chỉ bón lót', 'Chỉ bón thúc'], 0, 'Cần bón lót + bón thúc nhiều đợt.'),
    Q('Tỉa cành tạo tán nhằm?', ['Để cành mọc tự nhiên thoải mái', 'Không cần', 'Chỉ để hình dáng cây đẹp', 'Cây thông thoáng, ánh sáng, năng suất cao, bệnh ít'], 3, 'Tỉa cành giúp cây khoẻ và năng suất cao.'),
    Q('Sâu bệnh hại cây ăn quả phổ biến?', ['Hiếm gặp', 'Chỉ một loại', 'Chỉ có sâu cuốn lá là chính', 'Rệp sáp, sâu đục thân, bệnh thối quả, đốm lá'], 3, 'Nhiều loại sâu bệnh ảnh hưởng đến cây ăn quả.'),
  ]),

  M(17, 'Kỹ thuật ghép cây', [
    Q('Ghép cây là?', ['Ghép phần cây này (mắt/cành) lên cây khác (gốc ghép) để thành cây mới', 'Trồng hạt', 'Chiết cành', 'Giâm cành xuống đất ẩm cho ra rễ'], 0, 'Ghép là phương pháp nhân giống vô tính phổ biến.'),
    Q('Các kiểu ghép?', ['Chỉ ghép mắt', 'Ghép mắt, ghép cành, ghép áp', 'Không có kiểu', 'Chỉ ghép cành'], 1, '3 kiểu ghép chính: mắt, cành, áp.'),
    Q('Ưu điểm của ghép?', ['Giữ giống, sớm ra quả, tận dụng gốc ghép khoẻ', 'Cây con dễ bị sâu bệnh hơn', 'Khác giống', 'Cần 5–7 năm mới ra quả'], 0, 'Ghép giúp tận dụng gốc khoẻ + giữ giống tốt.'),
    Q('Sau khi ghép cần?', ['Để mặc', 'Tưới nhiều', 'Quấn chặt + che nắng + chăm sóc tỉ mỉ', 'Bón nhiều'], 2, 'Chăm sóc sau ghép quyết định tỷ lệ thành công.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Nghề điện dân dụng yêu cầu?', ['Chỉ khoẻ', 'Không yêu cầu', 'Kiến thức + sức khoẻ + cẩn thận + đạo đức', 'Chỉ giỏi toán'], 2, 'Nghề điện cần nhiều phẩm chất.'),
    Q('Mối nối điện cần?', ['Dẫn điện tốt + bền + cách điện + đẹp', 'Chỉ bền', 'Chỉ đẹp', 'Chỉ cần xoắn chặt là đủ'], 0, '4 yêu cầu cơ bản của mối nối.'),
    Q('Mạch đèn cầu thang dùng?', ['Hai công tắc 3 cực', 'Một công tắc 3 cực ở giữa cầu thang', 'Ba công tắc', 'Một công tắc'], 0, 'Mạch đèn cầu thang dùng 2 công tắc 3 cực.'),
    Q('Cây ăn quả nhân giống vô tính ưu điểm?', ['Khác giống', 'Cây con khoẻ hơn cây mẹ', 'Giữ giống + ra quả sớm', 'Cần thụ phấn chéo mới ra quả'], 2, 'Nhân vô tính giữ giống và ra quả sớm.'),
    Q('Aptomat bảo vệ?', ['Bảo vệ bóng đèn khỏi cháy', 'Bảo vệ cây trồng trong nhà', 'Quá tải + ngắn mạch', 'Bảo vệ người khỏi điện giật'], 2, 'Aptomat tự ngắt khi quá tải/ngắn mạch.'),
  ]),

  // ───── HK2 — Sửa xe đạp + Nấu ăn + Định hướng nghề ─────
  M(19, 'Sửa xe đạp — Cấu tạo xe đạp', [
    Q('Bộ phận chính xe đạp?', ['Chỉ phanh', 'Chỉ khung', 'Khung, bánh xe, hệ truyền động, hệ phanh, hệ lái', 'Chỉ bánh'], 2, 'Xe đạp gồm 5 hệ chính.'),
    Q('Hệ truyền động gồm?', ['Chỉ bàn đạp', 'Bàn đạp, trục giữa, đĩa, xích, líp', 'Chỉ xích', 'Chỉ đĩa'], 1, 'Hệ truyền động chuyển sức từ bàn đạp tới bánh sau.'),
    Q('Hệ phanh có nhiệm vụ?', ['Giảm tốc, dừng xe an toàn', 'Điều khiển hướng đi của xe', 'Tăng tốc', 'Truyền lực'], 0, 'Phanh để dừng/giảm tốc, đảm bảo an toàn.'),
    Q('Vật liệu khung xe đạp phổ biến?', ['Đồng đỏ và đồng thau', 'Gỗ ép chịu lực cao', 'Nhựa ABS chịu va đập', 'Thép, hợp kim nhôm, sợi carbon'], 3, 'Khung thép, nhôm, carbon là phổ biến.'),
  ]),

  M(20, 'Sửa xe đạp — Tháo lắp bánh xe', [
    Q('Trước khi tháo bánh phải?', ['Tháo bánh trước khi dựng xe lên', 'Phun nước', 'Cứ tháo', 'Tháo phanh (nếu phanh vành), nới ốc trục'], 3, 'Nới phanh và ốc trục trước khi rút bánh ra.'),
    Q('Dụng cụ cần?', ['Cờ lê, mỏ lết, ống tăng đơ', 'Búa và đục thép', 'Kéo cắt và dao rọc', 'Tua vít'], 0, 'Cờ lê và mỏ lết là dụng cụ chính.'),
    Q('Khi lắp lại bánh?', ['Căn giữa, siết đều ốc, kiểm tra phanh', 'Siết một bên ốc trước rồi siết bên kia', 'Cứ siết', 'Bỏ qua phanh'], 0, 'Lắp lại phải căn giữa và kiểm tra hệ phanh.'),
    Q('Bánh xe bị xóc, có thể do?', ['Bánh mới chưa rà trơn', 'Vành mới được lau sạch', 'Vành cong, căm chùng/lỏng', 'Lốp tốt'], 2, 'Vành cong/căm lỏng làm bánh xóc.'),
  ]),

  M(21, 'Sửa xe đạp — Vá săm + thay lốp', [
    Q('Tìm chỗ thủng săm bằng cách?', ['Bơm căng và nhúng vào nước, quan sát bọt khí', 'Sờ tay quanh săm tìm chỗ thủng', 'Đoán theo vị trí lốp bị xẹp', 'Nghe tiếng xì khi bơm hơi'], 0, 'Bọt khí là cách phát hiện chỗ thủng chính xác.'),
    Q('Trước khi dán vá phải?', ['Làm sạch và chà nhám vùng thủng', 'Bôi dầu', 'Phun nước', 'Dán ngay'], 0, 'Bề mặt sạch + nhám giúp keo bám tốt.'),
    Q('Keo vá săm thường là?', ['Hồ giấy', 'Hồ dán giấy thủ công', 'Keo cao su tự sinh nhiệt', 'Keo nến nóng chảy'], 2, 'Keo chuyên dụng cao su.'),
    Q('Thay lốp khi?', ['Còn tốt', 'Mới mua', 'Khi lốp dính bùn đất nhiều', 'Lốp mòn nhiều, nứt, không an toàn'], 3, 'Thay lốp khi đã mòn nhiều, không đảm bảo an toàn.'),
  ]),

  M(22, 'Sửa xe đạp — Hiệu chỉnh phanh, xích', [
    Q('Phanh hoạt động kém do?', ['Má phanh mòn, dây phanh chùng, vành dính dầu', 'Vành sạch', 'Bánh xe vừa được bơm căng', 'Phanh chặt'], 0, 'Phanh kém do nhiều nguyên nhân; cần kiểm tra từng phần.'),
    Q('Cách hiệu chỉnh phanh?', ['Tháo bỏ má phanh để không cọ vào vành', 'Căng lại dây, thay má phanh, lau vành', 'Bỏ phanh', 'Phun dầu vành'], 1, 'Điều chỉnh dây + thay má + lau vành là cách phổ biến.'),
    Q('Xích bị rít, kêu to do?', ['Mới được tra dầu mỡ', 'Xích mới thay chưa rà', 'Khô dầu, bẩn, mòn', 'Sạch và không có bụi'], 2, 'Xích cần được tra dầu định kỳ.'),
    Q('Bảo dưỡng xích?', ['Đổ dầu nhớt nhiều', 'Đổ nước', 'Lau sạch + tra dầu chuyên dụng định kỳ', 'Không cần'], 2, 'Tra dầu chuyên dụng cho xích định kỳ.'),
  ]),

  M(23, 'Nấu ăn — Vệ sinh an toàn thực phẩm', [
    Q('Vệ sinh ATTP là?', ['Chỉ rửa tay', 'Đảm bảo thực phẩm sạch, an toàn từ khâu chọn đến chế biến và bảo quản', 'Chỉ rửa rau', 'Chỉ cần nấu chín kỹ là an toàn'], 1, 'ATTP bao gồm toàn bộ chuỗi từ chọn nguyên liệu đến bảo quản.'),
    Q('Nguyên tắc chọn thực phẩm?', ['Chọn loại rẻ nhất ngoài chợ', 'Tươi, không ôi thiu, không hết hạn, rõ nguồn gốc', 'Chọn theo hình thức bắt mắt', 'Chọn theo cảm tính của người mua'], 1, 'Tươi + đúng hạn + rõ nguồn là tiêu chí cơ bản.'),
    Q('Trước khi nấu phải?', ['Tay bẩn cũng được', 'Chỉ cần rửa nhanh nguyên liệu', 'Rửa tay, rửa nguyên liệu, dụng cụ sạch', 'Cứ nấu'], 2, 'Vệ sinh tay + nguyên liệu + dụng cụ là bắt buộc.'),
    Q('Bảo quản thực phẩm chín?', ['Đậy kín, để tủ lạnh nếu chưa ăn ngay', 'Không cần', 'Để ngoài', 'Để trong nồi đậy vung ở nhiệt độ phòng'], 0, 'Đậy kín và bảo quản lạnh để tránh ôi thiu.'),
    Q('Nguyên tắc cắt thớt khi nấu?', ['Dùng chung thớt rửa sạch sau mỗi lần', 'Dùng chung', 'Riêng thớt sống – chín', 'Không cần'], 2, 'Tránh nhiễm chéo bằng cách dùng thớt riêng.'),
  ]),

  M(24, 'Nấu ăn — Phương pháp chế biến', [
    Q('Các phương pháp dùng nhiệt?', ['Chỉ luộc', 'Chỉ nướng', 'Chỉ rán', 'Luộc, hấp, kho, rán, xào, nướng'], 3, 'Nhiều phương pháp chế biến nhiệt phổ biến.'),
    Q('Hấp giữ chất dinh dưỡng tốt vì?', ['Không giữ', 'Mất nhiều', 'Không tan vào nước, ít mất vitamin', 'Nhiệt độ hơi nước cao làm chín nhanh'], 2, 'Hấp ít làm mất chất hơn luộc.'),
    Q('Rán nhiều dầu mỡ tác hại?', ['Bổ sung nhiều vitamin tan trong dầu', 'Tốt cho sức khoẻ', 'Không hại', 'Tăng calo, sinh chất có hại nếu dầu quá nóng'], 3, 'Rán nhiều dầu không tốt cho sức khoẻ.'),
    Q('Trộn salad là phương pháp?', ['Luộc nhanh trong nước sôi', 'Hấp cách thuỷ ngắn', 'Không dùng nhiệt, giữ nguyên vitamin', 'Dùng nhiệt'], 2, 'Salad chế biến không nhiệt, giữ nguyên dinh dưỡng.'),
  ]),

  M(25, 'Nấu ăn — Xây dựng thực đơn gia đình', [
    Q('Thực đơn cân bằng cần?', ['Chỉ đạm', 'Chỉ tinh bột', 'Tuỳ thích', 'Đủ 4 nhóm: tinh bột, đạm, béo, vitamin-khoáng'], 3, 'Bữa ăn cân bằng có đủ 4 nhóm chất.'),
    Q('Khẩu phần ăn phụ thuộc?', ['Theo sở thích cá nhân của đầu bếp', 'Lứa tuổi, giới tính, công việc', 'Như nhau', 'Cố định cho mọi thành viên gia đình'], 1, 'Khẩu phần cần phù hợp với từng người.'),
    Q('Bữa sáng nên?', ['Đủ chất, không bỏ', 'Chỉ ăn khi cảm thấy đói', 'Chỉ uống nước', 'Ăn càng ít càng tốt cho dạ dày'], 0, 'Bữa sáng quan trọng, không nên bỏ.'),
    Q('Hạn chế gì trong khẩu phần?', ['Trái cây', 'Đường, muối, dầu mỡ quá nhiều', 'Chất xơ trong rau xanh', 'Canxi trong sữa và phô mai'], 1, 'Đường, muối, dầu mỡ nhiều có hại sức khoẻ.'),
    Q('Uống nước mỗi ngày khoảng?', ['5 lít', 'Không cần', '0,5 lít', '1,5–2 lít'], 3, '1,5–2 lít nước/ngày là khuyến nghị WHO.'),
  ]),

  M(26, 'Nấu ăn — Thực hành: Món luộc + xào đơn giản', [
    Q('Luộc rau ngon cần?', ['Nước sôi mới cho rau, thêm chút muối', 'Không muối', 'Nước lạnh', 'Đậy kín'], 0, 'Nước sôi + chút muối giúp rau xanh, giòn.'),
    Q('Xào rau giữ giòn cần?', ['Xào lửa nhỏ trong thời gian dài', 'Lửa to, nhanh tay, ít nước', 'Lửa nhỏ', 'Nhiều nước'], 1, 'Xào lửa to nhanh tay giữ độ giòn.'),
    Q('Trước khi xào thịt?', ['Rửa thịt bằng nước nóng', 'Ướp gia vị 10–15 phút', 'Xào ngay', 'Không ướp'], 1, 'Ướp giúp thịt ngấm và mềm.'),
    Q('Nêm gia vị nên?', ['Nếm trước khi tắt bếp', 'Cho theo định lượng cố định, không nếm', 'Đổ một lần', 'Không nêm'], 0, 'Nếm thử trước khi tắt bếp để chỉnh vị.'),
  ]),

  M(27, 'May mặc cơ bản — Đường khâu cơ bản', [
    Q('Đường khâu cơ bản?', ['Chỉ có một loại đường khâu duy nhất', 'Chỉ thường', 'Chỉ đột', 'Khâu thường (tới), khâu đột, khâu vắt'], 3, 'Ba kiểu khâu tay cơ bản.'),
    Q('Khâu đột dùng khi?', ['Khi cần khâu lược tạm thời', 'Đường khâu cần chắc, bền', 'Vắt biên', 'Trang trí'], 1, 'Khâu đột bền hơn khâu thường.'),
    Q('Khâu vắt dùng để?', ['Trang trí', 'Khâu mép vải, gấu quần áo', 'Ráp 2 mảnh vải chính của áo', 'Đường chính'], 1, 'Khâu vắt làm gọn mép, gấu.'),
    Q('Trước khi khâu cần?', ['Không đo', 'Đo, cắt theo mẫu, lược trước', 'Chọn kim và chỉ theo màu vải', 'Khâu ngay'], 1, 'Chuẩn bị kỹ trước khi khâu giúp đường thẳng đẹp.'),
  ]),

  M(28, 'Định hướng nghề nghiệp sau lớp 9', [
    Q('Sau lớp 9 có những hướng?', ['Chỉ nghề', 'Chỉ THPT', 'Học THPT, học nghề, vừa học vừa làm', 'Nghỉ học'], 2, 'Có nhiều con đường sau cấp 2.'),
    Q('Chọn nghề dựa vào?', ['Bạn chọn', 'Năng lực, sở thích, nhu cầu xã hội', 'Tiền lương', 'Cha mẹ ép'], 1, 'Ba yếu tố cơ bản: năng lực + sở thích + nhu cầu.'),
    Q('Trung cấp nghề học?', ['5 năm', 'Khoảng 2 năm, có bằng nghề và văn hoá', '1 năm', '6 tháng cấp chứng chỉ sơ cấp'], 1, 'Trung cấp nghề khoảng 2 năm.'),
    Q('Lợi ích học nghề sớm?', ['Mất nhiều', 'Không có việc', 'Có việc làm nhanh, không tốn quá nhiều thời gian', 'Học chậm'], 2, 'Học nghề sớm giúp có việc làm nhanh.'),
    Q('Trắc nghiệm hướng nghiệp giúp?', ['Tự khám phá sở thích, năng lực để chọn nghề phù hợp', 'Chọn nghề theo lương cao nhất', 'Chọn nghề theo trào lưu xã hội', 'Đoán mệnh'], 0, 'Trắc nghiệm hướng nghiệp (Holland, MBTI...) hỗ trợ định hướng.'),
  ]),

  M(29, 'Một số ngành nghề phổ biến hiện nay', [
    Q('Ngành CNTT cần?', ['Khéo tay', 'Sức khoẻ tốt', 'Nói giỏi', 'Tư duy logic, kiến thức toán-tin, khả năng tự học'], 3, 'CNTT đòi hỏi tư duy logic và khả năng tự học cao.'),
    Q('Ngành cơ khí cần?', ['Khả năng giao tiếp tiếng Anh thành thạo', 'Văn chương', 'Khéo tay, kiến thức kỹ thuật, sức khoẻ', 'Hát hay'], 2, 'Cơ khí cần kỹ năng tay nghề + kỹ thuật.'),
    Q('Ngành y, dược cần?', ['Học vẹt', 'Sức khoẻ tốt và sự khéo tay', 'Không yêu cầu', 'Học giỏi, cẩn thận, đạo đức nghề cao'], 3, 'Ngành y, dược yêu cầu kiến thức + đạo đức nghề rất cao.'),
    Q('Ngành dịch vụ-du lịch cần?', ['Không cần ngoại ngữ', 'Cô đơn', 'Giao tiếp tốt, ngoại ngữ, kiên nhẫn', 'Im lặng'], 2, 'Dịch vụ-du lịch đòi hỏi kỹ năng mềm và ngoại ngữ.'),
  ]),

  M(30, 'Năng lực số trong thời đại mới', [
    Q('Năng lực số (digital literacy) gồm?', ['Chỉ chơi game', 'Sử dụng máy tính, internet, đánh giá thông tin, an toàn mạng', 'Lướt web', 'Chỉ đánh máy'], 1, 'Năng lực số bao trùm nhiều kỹ năng số cơ bản và nâng cao.'),
    Q('AI (trí tuệ nhân tạo) ảnh hưởng nghề nghiệp?', ['Tự động hoá nhiều công việc, tạo nghề mới', 'Chỉ trong CNTT', 'Chỉ thay thế lao động chân tay', 'Không ảnh hưởng'], 0, 'AI thay đổi mọi ngành nghề; cần thích ứng.'),
    Q('Để không bị AI thay thế, cần?', ['Học vẹt', 'Tư duy sáng tạo, kỹ năng mềm, học suốt đời', 'Không học', 'Mặc kệ'], 1, 'Kỹ năng AI không thay được: sáng tạo, cảm xúc, tư duy phản biện.'),
    Q('Học suốt đời là?', ['Học một lần', 'Học đến hết phổ thông', 'Tiếp tục học hỏi sau khi rời ghế nhà trường', 'Không cần'], 2, 'Lifelong learning là chìa khoá thời đại tri thức.'),
  ]),

  M(31, 'Khởi nghiệp và tinh thần doanh nhân', [
    Q('Khởi nghiệp là?', ['Đi làm thuê', 'Học lên thạc sĩ chuyên ngành', 'Du lịch', 'Tạo dựng công việc kinh doanh mới'], 3, 'Khởi nghiệp là tạo dựng business mới.'),
    Q('Tinh thần doanh nhân gồm?', ['Sợ rủi ro', 'Dám nghĩ, dám làm, chấp nhận rủi ro, sáng tạo', 'Bảo thủ', 'Nhút nhát'], 1, 'Doanh nhân cần dám nghĩ dám làm và chịu được rủi ro.'),
    Q('HS có thể tập khởi nghiệp bằng?', ['Đợi 30 tuổi', 'Không thể', 'Bán hàng nhỏ, làm dự án nhỏ', 'Vay vốn ngân hàng mở công ty lớn'], 2, 'Khởi nghiệp có thể bắt đầu từ ý tưởng nhỏ ngay khi còn đi học.'),
    Q('Kỹ năng cần cho khởi nghiệp?', ['Chỉ tiền', 'Quản lý tài chính, giao tiếp, marketing, tin học', 'Không cần', 'Chỉ may mắn'], 1, 'Khởi nghiệp cần đa kỹ năng.'),
  ]),

  M(32, 'An toàn lao động — Trong nhà và sản xuất', [
    Q('An toàn lao động bao gồm?', ['Chỉ con người', 'Phòng tránh tai nạn, bệnh nghề nghiệp, đảm bảo sức khoẻ', 'Chỉ áp dụng trong nhà máy', 'Chỉ máy móc'], 1, 'ATLĐ bảo vệ sức khoẻ và tính mạng người lao động.'),
    Q('Trang bị bảo hộ cá nhân?', ['Quần áo thường', 'Không cần', 'Mũ, kính, găng, giày, khẩu trang', 'Chỉ cần đồng phục công ty'], 2, 'PPE (Personal Protective Equipment) là yêu cầu bắt buộc nhiều ngành.'),
    Q('Khi xảy ra tai nạn lao động?', ['Mặc kệ', 'Tự ý xử lý không báo ai', 'Im lặng', 'Sơ cứu + báo cấp trên + đưa đi y tế'], 3, 'Quy trình xử lý tai nạn rõ ràng: sơ cứu → báo → y tế.'),
    Q('Trong nhà cần chú ý?', ['An toàn điện, gas, dao, leo cao', 'Chỉ cần khoá cửa cẩn thận', 'Trong nhà luôn an toàn tuyệt đối', 'Không nguy hiểm'], 0, 'Tai nạn trong nhà cũng phổ biến và cần cẩn thận.'),
  ]),

  M(33, 'Ôn tập HK2 — Thực hành tổng hợp', [
    Q('Mối nối điện cần?', ['Bền là đủ', 'Dẫn điện tốt là đủ', 'Đẹp là đủ', 'Dẫn điện + bền + cách điện + đẹp'], 3, '4 yêu cầu cơ bản.'),
    Q('Cây ăn quả nhân giống vô tính ưu điểm?', ['Cây con khoẻ hơn cây mẹ', 'Giữ giống + ra quả sớm', 'Cần 5–7 năm mới có quả', 'Cho ra giống khác hẳn cây mẹ'], 1, 'Vô tính giữ giống tốt.'),
    Q('Bữa ăn cân bằng có?', ['5 nhóm', '1 nhóm', '2 nhóm', '4 nhóm chất'], 3, '4 nhóm: tinh bột, đạm, béo, vitamin-khoáng.'),
    Q('Sau lớp 9, hướng?', ['Chỉ THPT', 'Nghỉ học', 'Học lên thẳng đại học', 'THPT, GDTX, trung cấp nghề'], 3, 'Nhiều hướng đi sau lớp 9.'),
    Q('Học suốt đời là?', ['Chờ công ty tổ chức đào tạo', 'Tiếp tục học sau khi tốt nghiệp', 'Không cần', 'Học đến phổ thông'], 1, 'Lifelong learning là yêu cầu thời đại tri thức.'),
  ]),

  M(34, 'Đánh giá năng lực bản thân và lập kế hoạch nghề nghiệp', [
    Q('Bước đầu chọn nghề?', ['Cha mẹ ép', 'Chọn nghề có lương cao nhất hiện nay', 'Hỏi bạn', 'Tự đánh giá năng lực, sở thích, giá trị bản thân'], 3, 'Tự nhận thức là bước đầu của chọn nghề.'),
    Q('Công cụ hướng nghiệp?', ['Đoán theo cung hoàng đạo', 'Chọn nghề theo bạn thân', 'Trắc nghiệm Holland, MBTI, tư vấn hướng nghiệp', 'Bói toán'], 2, 'Có nhiều công cụ khoa học hỗ trợ định hướng.'),
    Q('Kế hoạch nghề nghiệp cần?', ['Mục tiêu dài hạn + bước đi cụ thể', 'Mơ ước viển vông', 'Theo lời khuyên người thân, không có lộ trình', 'Không kế hoạch'], 0, 'Kế hoạch phải có mục tiêu rõ và bước đi cụ thể.'),
    Q('Khi gặp khó khăn nên?', ['Tham vấn thầy cô, gia đình, chuyên gia', 'Im lặng', 'Tự quyết', 'Bỏ cuộc'], 0, 'Tham vấn người có kinh nghiệm giúp ra quyết định tốt.'),
    Q('Linh hoạt trong nghề là?', ['Không đổi', 'Bảo thủ', 'Sẵn sàng học mới khi thị trường thay đổi', 'Cứng nhắc'], 2, 'Linh hoạt giúp thích ứng với thay đổi nghề nghiệp.'),
  ]),

  M(35, 'Tổng kết môn — Liên hệ thực tế', [
    Q('Kiến thức Công nghệ 9 hữu ích cho?', ['Cuộc sống hằng ngày + định hướng nghề', 'Chỉ ngành điện', 'Chỉ phục vụ thi học kỳ', 'Chỉ thi cử'], 0, 'Công nghệ 9 rất thực tế và hữu ích.'),
    Q('Để có nghề tốt, cần?', ['Học, rèn luyện, kiên trì, đạo đức', 'May mắn', 'Cha mẹ giàu', 'Quen biết'], 0, 'Nghề bền vững dựa trên năng lực và đạo đức.'),
    Q('An toàn là?', ['Ưu tiên hàng đầu trong mọi công việc', 'Khi nào nhớ', 'Chỉ cần khi làm việc nguy hiểm', 'Chỉ là khẩu hiệu, không bắt buộc'], 0, 'An toàn luôn được ưu tiên cao nhất.'),
    Q('Đạo đức nghề nghiệp là?', ['Làm nhanh để được nhiều việc', 'Trung thực, trách nhiệm, tôn trọng khách hàng và đồng nghiệp', 'Không cần', 'Theo cảm tính từng tình huống'], 1, 'Đạo đức nghề là nền tảng của sự nghiệp lâu dài.'),
    Q('Học suốt đời cần?', ['Đợi nhắc', 'Bị động', 'Thái độ chủ động, tò mò, cập nhật', 'Chỉ học khi có kỳ thi'], 2, 'Chủ động và tò mò là chìa khoá học suốt đời.'),
  ]),
];

export const S9CN_SCENARIOS = indexBy(S9CN_WEEKS);
