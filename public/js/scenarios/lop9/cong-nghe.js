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
    Q('Nghề điện dân dụng phục vụ?', ['Sinh hoạt và sản xuất nhỏ ở gia đình, cộng đồng', 'Nhà máy lớn', 'Hàng không', 'Khai khoáng'], 0, 'Nghề điện dân dụng phục vụ các nhu cầu điện trong gia đình.'),
    Q('Đặc điểm của lao động nghề điện dân dụng?', ['Đa số làm trong nhà, làm ngoài trời khi lắp mạng ngoài, cần cẩn thận với an toàn điện', 'Chỉ ngồi máy tính', 'Không nguy hiểm', 'Không cần học'], 0, 'Lao động nghề điện đòi hỏi cẩn trọng vì làm việc với điện.'),
    Q('Yêu cầu của người làm nghề điện?', ['Có kiến thức điện, sức khoẻ tốt, cẩn thận, đạo đức nghề', 'Chỉ cần khoẻ', 'Chỉ cần học giỏi toán', 'Không cần đạo đức'], 0, 'Người làm điện cần đủ kiến thức + đạo đức nghề nghiệp.'),
    Q('Triển vọng nghề điện dân dụng?', ['Nhu cầu cao do mọi gia đình, công trình đều cần điện', 'Sắp biến mất', 'Ít việc', 'Không có thị trường'], 0, 'Nghề điện luôn có nhu cầu cao trong xã hội hiện đại.'),
  ]),

  M(2, 'Vật liệu điện dùng trong lắp đặt mạng điện trong nhà', [
    Q('Dây dẫn điện thường dùng?', ['Đồng hoặc nhôm bọc cách điện PVC', 'Sắt trần', 'Inox', 'Gỗ'], 0, 'Đồng/nhôm bọc PVC là vật liệu dây dẫn điện phổ biến.'),
    Q('Vì sao dùng đồng làm dây dẫn?', ['Dẫn điện tốt, bền, dễ gia công', 'Rẻ', 'Cứng', 'Cách điện tốt'], 0, 'Đồng dẫn điện tốt thứ 2 (sau bạc) và dễ gia công.'),
    Q('Vật liệu cách điện điển hình?', ['Nhựa PVC, sứ, cao su', 'Đồng', 'Nhôm', 'Sắt'], 0, 'PVC, sứ, cao su là vật liệu cách điện phổ biến.'),
    Q('Tiết diện dây dẫn được tính theo?', ['Dòng điện và chiều dài đường dây', 'Màu sắc', 'Trọng lượng', 'Tuỳ ý'], 0, 'Tiết diện chọn theo dòng điện và chiều dài để tránh quá tải, sụt áp.'),
    Q('Ký hiệu Cu là?', ['Đồng', 'Nhôm', 'Sắt', 'Chì'], 0, 'Cu (Cuprum) là ký hiệu hoá học của đồng.'),
  ]),

  M(3, 'Dụng cụ dùng trong lắp đặt mạng điện', [
    Q('Dụng cụ đo điện cơ bản?', ['Vôn kế, ampe kế, đồng hồ vạn năng (VOM)', 'Cờ lê', 'Búa', 'Kéo'], 0, 'VOM đo được điện áp, dòng điện, điện trở.'),
    Q('Bút thử điện dùng để?', ['Phát hiện có/không có điện áp trên dây', 'Đo dòng', 'Đo điện trở', 'Đo công suất'], 0, 'Bút thử điện phát hiện điện áp tiếp xúc nhanh.'),
    Q('Kìm tuốt dây dùng để?', ['Bóc lớp cách điện ra khỏi dây dẫn', 'Cắt dây', 'Bẻ dây', 'Đo dây'], 0, 'Kìm tuốt dây loại bỏ lớp cách điện ở đầu dây.'),
    Q('Tua vít có chức năng?', ['Vặn vít, lắp ổ cắm, công tắc', 'Cắt dây', 'Bẻ dây', 'Đo'], 0, 'Tua vít là dụng cụ vặn vít thông dụng.'),
    Q('Khoan điện dùng để?', ['Khoan lỗ bắt vít, đi dây âm tường', 'Đo điện', 'Cắt dây', 'Bóc cách điện'], 0, 'Khoan điện hỗ trợ lắp đặt mạng điện cố định.'),
  ]),

  M(4, 'Đồng hồ vạn năng (VOM) — Sử dụng', [
    Q('VOM viết tắt của?', ['Volt-Ohm-Milliammeter', 'Volt-Ohm-Meter', 'Volt-Only-Meter', 'Vacuum-Operated-Meter'], 0, 'VOM = Volt-Ohm-Milliammeter, đo nhiều đại lượng.'),
    Q('Đo điện áp xoay chiều dùng thang?', ['ACV', 'DCV', 'Ω', 'mA'], 0, 'AC Volt (ACV) dùng đo điện áp xoay chiều như điện lưới 220V.'),
    Q('Đo điện trở dùng thang?', ['Ω (Ohm)', 'V', 'A', 'W'], 0, 'Thang Ω đo điện trở; cần ngắt nguồn điện trước khi đo.'),
    Q('Khi đo dòng điện, mắc VOM?', ['Nối tiếp với mạch', 'Song song', 'Tuỳ ý', 'Không nối'], 0, 'Ampe kế (đo dòng) mắc nối tiếp; vôn kế mắc song song.'),
    Q('Lưu ý quan trọng khi dùng VOM?', ['Chọn đúng thang đo và thang lớn nhất nếu chưa biết giá trị', 'Tuỳ ý', 'Luôn dùng thang nhỏ nhất', 'Không cần chọn'], 0, 'Chọn thang lớn trước, giảm dần để tránh hỏng đồng hồ.'),
  ]),

  M(5, 'Nối dây dẫn điện', [
    Q('Các kiểu nối dây dẫn?', ['Nối thẳng, nối phân nhánh, nối dùng phụ kiện', 'Chỉ nối thẳng', 'Chỉ phân nhánh', 'Chỉ buộc'], 0, 'Có 3 kiểu nối cơ bản: thẳng, phân nhánh, dùng phụ kiện.'),
    Q('Mối nối phải đảm bảo?', ['Dẫn điện tốt, đủ bền cơ học, an toàn cách điện, đẹp', 'Đẹp là đủ', 'Bền là đủ', 'Tuỳ ý'], 0, 'Mối nối phải đảm bảo 4 yêu cầu: dẫn điện, bền, an toàn, đẹp.'),
    Q('Trước khi nối phải?', ['Bóc lớp cách điện vừa đủ, làm sạch lõi đồng', 'Bóc hết', 'Không bóc', 'Đốt'], 0, 'Bóc lớp cách điện vừa đủ và làm sạch bề mặt lõi đồng.'),
    Q('Sau khi nối phải?', ['Hàn (nếu cần) và bọc cách điện kỹ', 'Để trần', 'Buộc dây', 'Phun sơn'], 0, 'Hàn để chắc + bọc cách điện đảm bảo an toàn.'),
    Q('Vật liệu bọc cách điện mối nối?', ['Băng dính cách điện PVC, ống co nhiệt', 'Vải', 'Giấy', 'Nylon'], 0, 'Băng PVC hoặc ống co nhiệt chuyên dụng cho cách điện.'),
  ]),

  M(6, 'Thực hành: Nối dây dẫn — Nối thẳng', [
    Q('Bước đầu tiên?', ['Bóc cách điện 2 đầu dây cần nối', 'Xoắn ngay', 'Bọc băng', 'Đo'], 0, 'Bóc cách điện trước, lộ lõi đồng đủ dài.'),
    Q('Chiều dài bóc cách điện?', ['Khoảng 15–20 lần đường kính lõi', 'Tuỳ ý', '1 cm cố định', 'Hết dây'], 0, 'Bóc dài 15–20 lần đường kính lõi để đủ xoắn chắc.'),
    Q('Khi xoắn 2 lõi, cần?', ['Xoắn đều, chặt, không chồng', 'Lỏng lẻo', 'Tuỳ ý', 'Chỉ chạm'], 0, 'Xoắn đều và chặt tạo tiếp xúc tốt, giảm điện trở.'),
    Q('Sau khi xoắn xong?', ['Hàn (nếu cần) và bọc băng cách điện', 'Để trần', 'Bóp dẹp', 'Đốt'], 0, 'Bọc băng cách điện là bắt buộc để đảm bảo an toàn.'),
  ]),

  M(7, 'Thực hành: Nối dây phân nhánh + dùng phụ kiện', [
    Q('Nối phân nhánh dùng khi?', ['Cần lấy nhánh phụ từ dây chính', 'Nối thẳng', 'Cuối dây', 'Đo'], 0, 'Phân nhánh giúp lấy nguồn từ dây chính sang nhánh phụ.'),
    Q('Phụ kiện nối dây thông dụng?', ['Đầu cốt, hộp nối, đai nối', 'Búa', 'Cờ lê', 'Kéo'], 0, 'Đầu cốt + hộp nối + đai nối là phụ kiện chuyên dùng.'),
    Q('Ưu điểm dùng phụ kiện?', ['Nhanh, chắc, an toàn, đẹp, dễ tháo lắp', 'Chậm', 'Yếu', 'Không an toàn'], 0, 'Phụ kiện giúp mối nối nhanh, chắc và dễ bảo trì.'),
    Q('Hộp nối có chức năng?', ['Bảo vệ mối nối khỏi va đập, ẩm; thuận tiện kiểm tra', 'Trang trí', 'Chỉ làm đẹp', 'Vô bổ'], 0, 'Hộp nối bảo vệ mối nối + tiện kiểm tra, sửa chữa.'),
  ]),

  M(8, 'Lắp đặt mạch điện bảng điện', [
    Q('Bảng điện chính (tổng) gồm?', ['Cầu dao tổng, attomat, cầu chì, công tơ điện', 'Chỉ công tắc', 'Chỉ ổ cắm', 'Chỉ đèn'], 0, 'Bảng điện chính có thiết bị bảo vệ và đóng cắt tổng.'),
    Q('Aptomat (CB) có chức năng?', ['Tự ngắt khi quá tải hoặc ngắn mạch', 'Chiếu sáng', 'Đo điện', 'Trang trí'], 0, 'Aptomat bảo vệ mạch khỏi quá tải và ngắn mạch.'),
    Q('Sơ đồ nguyên lý thể hiện?', ['Mối quan hệ điện giữa các phần tử (không thể hiện vị trí thực)', 'Vị trí thực', 'Kích thước', 'Màu sắc'], 0, 'Sơ đồ nguyên lý chỉ ra liên hệ điện, không thể hiện vị trí.'),
    Q('Sơ đồ lắp đặt thể hiện?', ['Vị trí lắp đặt thực tế các thiết bị', 'Nguyên lý', 'Công suất', 'Giá tiền'], 0, 'Sơ đồ lắp đặt mô tả vị trí thực tế của thiết bị.'),
    Q('Trình tự lắp bảng điện?', ['Vẽ sơ đồ → khoan lỗ → lắp thiết bị → đi dây → kiểm tra', 'Tuỳ ý', 'Đi dây trước', 'Lắp đèn trước'], 0, 'Trình tự đúng đảm bảo an toàn và đúng kỹ thuật.'),
  ]),

  M(9, 'Thực hành: Lắp bảng điện 1 cầu chì + 1 ổ cắm + 1 công tắc + 1 bóng đèn', [
    Q('Cầu chì lắp ở vị trí?', ['Trên dây pha, trước thiết bị bảo vệ', 'Dây trung tính', 'Tuỳ ý', 'Sau đèn'], 0, 'Cầu chì luôn lắp trên dây pha (dây nóng) để bảo vệ thiết bị.'),
    Q('Công tắc điều khiển đèn nối?', ['Nối tiếp với đèn, trên dây pha', 'Song song với đèn', 'Trên dây trung tính', 'Không nối'], 0, 'Công tắc nối tiếp đèn trên dây pha để ngắt điện hoàn toàn khi tắt.'),
    Q('Ổ cắm nối?', ['Song song với mạch chính', 'Nối tiếp', 'Sau công tắc đèn', 'Tuỳ ý'], 0, 'Ổ cắm luôn nối song song với nguồn để có sẵn điện áp.'),
    Q('Trước khi thử, phải?', ['Kiểm tra lại toàn bộ mối nối, đảm bảo cách điện', 'Cắm điện ngay', 'Bật ngay', 'Tuỳ ý'], 0, 'Kiểm tra trước khi cấp điện là bước an toàn bắt buộc.'),
  ]),

  M(10, 'Lắp đặt mạch điện đèn ống huỳnh quang', [
    Q('Đèn huỳnh quang cần?', ['Chấn lưu (ballast) và tắc te (starter)', 'Chỉ tắc te', 'Chỉ chấn lưu', 'Không cần phụ kiện'], 0, 'Đèn huỳnh quang truyền thống cần chấn lưu + tắc te để khởi động.'),
    Q('Chấn lưu (ballast) có vai trò?', ['Tạo điện áp cao khởi động + hạn dòng', 'Chiếu sáng', 'Đo điện', 'Trang trí'], 0, 'Chấn lưu cung cấp điện áp cao và giới hạn dòng qua bóng.'),
    Q('Tắc te (starter) có vai trò?', ['Tự đóng-mở để khởi động đèn, sau đó ngắt', 'Liên tục', 'Đo điện', 'Chiếu sáng'], 0, 'Tắc te tạo xung khởi động rồi tự ngắt.'),
    Q('Đèn huỳnh quang LED khác đèn truyền thống?', ['Không cần tắc te + chấn lưu cũ; tích hợp driver', 'Vẫn cần', 'Không sáng', 'Tốn điện hơn'], 0, 'Đèn LED tích hợp driver, tiết kiệm điện hơn nhiều.'),
  ]),

  M(11, 'Mạch điện đèn 2 công tắc — Đèn cầu thang', [
    Q('Mạch đèn cầu thang dùng?', ['Hai công tắc 3 cực điều khiển 1 bóng từ 2 nơi', 'Một công tắc', 'Ba công tắc', 'Không công tắc'], 0, 'Hai công tắc 3 cực (đảo chiều) cho phép bật/tắt từ 2 đầu cầu thang.'),
    Q('Công tắc 3 cực có?', ['1 cực chung và 2 cực điều khiển', '3 cực giống nhau', '4 cực', '2 cực'], 0, 'Công tắc 3 cực: 1 cực COM + 2 cực L1, L2.'),
    Q('Lợi ích mạch đèn cầu thang?', ['Bật được ở dưới, tắt được ở trên (và ngược lại)', 'Sáng hơn', 'Tiết kiệm điện', 'Bền hơn'], 0, 'Tiện lợi điều khiển từ 2 vị trí.'),
    Q('Sơ đồ nguyên lý mạch đèn cầu thang?', ['L → CC → COM CT1 → L1/L2 → COM CT2 → đèn → N', 'L → đèn → N', 'Không có sơ đồ', 'Tuỳ ý'], 0, 'Dây pha qua cầu chì, qua 2 công tắc 3 cực rồi đến đèn, về trung tính.'),
  ]),

  M(12, 'Lắp đặt dây dẫn của mạng điện trong nhà', [
    Q('Có 2 kiểu lắp đặt chính?', ['Đặt nổi và đặt ngầm (âm tường)', 'Chỉ nổi', 'Chỉ ngầm', 'Treo trần'], 0, 'Lắp đặt nổi (dùng ống nhựa nổi) và lắp âm tường là 2 kiểu chính.'),
    Q('Ưu điểm lắp nổi?', ['Dễ thi công, dễ sửa chữa, chi phí thấp', 'Đẹp hơn', 'Bền hơn', 'An toàn hơn'], 0, 'Lắp nổi thi công nhanh, dễ sửa, chi phí thấp.'),
    Q('Ưu điểm lắp ngầm?', ['Thẩm mỹ cao, bảo vệ dây tốt', 'Dễ sửa', 'Rẻ', 'Nhanh'], 0, 'Lắp ngầm đẹp và bảo vệ dây nhưng khó sửa.'),
    Q('Ống luồn dây thường dùng?', ['Ống PVC chuyên dụng', 'Ống thép', 'Ống đồng', 'Ống cao su'], 0, 'Ống PVC chuyên dụng cho điện là phổ biến nhất.'),
  ]),

  M(13, 'Kiểm tra an toàn mạng điện trong nhà', [
    Q('Định kỳ kiểm tra mạng điện?', ['Ít nhất 1–2 lần/năm', 'Không cần', 'Khi hỏng mới kiểm', '10 năm/lần'], 0, 'Kiểm tra định kỳ giúp phát hiện sớm nguy cơ chập, cháy.'),
    Q('Dấu hiệu nguy hiểm cần xử lý?', ['Dây nóng, có mùi khét, ổ cắm cháy đen', 'Đèn sáng', 'Quạt quay', 'Bình thường'], 0, 'Dây nóng, mùi khét, cháy đen là dấu hiệu nguy hiểm cần xử lý ngay.'),
    Q('Trước khi sửa điện?', ['Ngắt cầu dao tổng và kiểm tra bằng bút thử điện', 'Cứ sửa', 'Đeo găng tay là đủ', 'Đứng trên ghế'], 0, 'Ngắt điện và kiểm tra bằng bút thử là bắt buộc.'),
    Q('Thiết bị bảo vệ an toàn người?', ['Cầu dao chống giật RCBO/RCCB (chống dòng rò)', 'Aptomat thường', 'Cầu chì', 'Ổ cắm'], 0, 'RCBO/RCCB phát hiện dòng rò qua người và ngắt nhanh, cứu mạng.'),
    Q('Khi có người bị điện giật, phải?', ['Ngắt nguồn trước, sau đó sơ cứu', 'Kéo nạn nhân ngay', 'Phun nước', 'Đứng nhìn'], 0, 'Ngắt nguồn trước rồi mới tiếp cận nạn nhân để cứu hộ.'),
  ]),

  M(14, 'Ôn tập + Kiểm tra giữa HK1', [
    Q('Dây dẫn điện gia dụng phổ biến?', ['Đồng bọc PVC', 'Sắt trần', 'Nhôm trần', 'Gỗ'], 0, 'Đồng bọc PVC là dây dẫn gia dụng phổ biến.'),
    Q('VOM đo được?', ['Điện áp, dòng điện, điện trở', 'Chỉ điện áp', 'Chỉ dòng', 'Chỉ trở'], 0, 'VOM là đồng hồ vạn năng đo nhiều đại lượng.'),
    Q('Mối nối điện phải?', ['Dẫn điện tốt, bền, cách điện, đẹp', 'Đẹp là đủ', 'Bền là đủ', 'Tuỳ ý'], 0, '4 yêu cầu cơ bản của mối nối.'),
    Q('Aptomat bảo vệ?', ['Quá tải + ngắn mạch', 'Người', 'Đèn', 'Quạt'], 0, 'Aptomat tự ngắt khi quá tải/ngắn mạch.'),
    Q('Khi sửa điện cần?', ['Ngắt nguồn + dùng bút thử điện', 'Đeo găng là đủ', 'Cứ sửa', 'Tự tin'], 0, 'Ngắt điện rồi kiểm tra bằng bút thử là quy tắc an toàn.'),
  ]),

  M(15, 'Trồng cây ăn quả — Giá trị + đặc điểm', [
    Q('Cây ăn quả có giá trị?', ['Kinh tế, dinh dưỡng, môi trường, dược liệu', 'Chỉ kinh tế', 'Chỉ ăn', 'Không giá trị'], 0, 'Cây ăn quả đa giá trị: kinh tế + dinh dưỡng + môi trường.'),
    Q('Đặc điểm cây ăn quả?', ['Có tán lớn, bộ rễ ăn sâu, thời gian sinh trưởng dài, ra hoa-quả theo mùa', 'Nhỏ', 'Ngắn ngày', 'Không có rễ'], 0, 'Cây ăn quả thường lâu năm, có tán lớn và rễ sâu.'),
    Q('Yêu cầu ngoại cảnh?', ['Nhiệt độ, ánh sáng, độ ẩm, đất phù hợp từng loại cây', 'Tuỳ ý', 'Như nhau', 'Không quan trọng'], 0, 'Mỗi loại cây ăn quả cần điều kiện ngoại cảnh riêng.'),
    Q('Các phương pháp nhân giống?', ['Hữu tính (hạt) và vô tính (chiết, ghép, giâm)', 'Chỉ hạt', 'Chỉ ghép', 'Không nhân giống'], 0, 'Hai nhóm phương pháp: hữu tính (hạt) và vô tính.'),
    Q('Nhân giống vô tính ưu điểm?', ['Giữ nguyên đặc tính cây mẹ, ra quả sớm', 'Chậm', 'Khác cây mẹ', 'Không bền'], 0, 'Vô tính giúp giữ giống và ra quả sớm.'),
  ]),

  M(16, 'Kỹ thuật trồng và chăm sóc cây ăn quả', [
    Q('Thời vụ trồng cây ăn quả miền Bắc?', ['Vụ xuân (2–4) và vụ thu (8–10)', 'Bất kỳ', 'Mùa đông', 'Mùa khô'], 0, 'Vụ xuân và vụ thu là thời điểm thích hợp ở miền Bắc.'),
    Q('Khoảng cách trồng phụ thuộc?', ['Loại cây và tán lớn', 'Tuỳ ý', 'Mặt đất', 'Trọng lượng'], 0, 'Khoảng cách phụ thuộc kích thước tán khi trưởng thành.'),
    Q('Bón phân cho cây ăn quả?', ['Bón lót khi trồng + bón thúc trong quá trình sinh trưởng', 'Chỉ bón lót', 'Chỉ bón thúc', 'Không cần'], 0, 'Cần bón lót + bón thúc nhiều đợt.'),
    Q('Tỉa cành tạo tán nhằm?', ['Cây thông thoáng, ánh sáng, năng suất cao, bệnh ít', 'Đẹp', 'Tuỳ ý', 'Không cần'], 0, 'Tỉa cành giúp cây khoẻ và năng suất cao.'),
    Q('Sâu bệnh hại cây ăn quả phổ biến?', ['Rệp sáp, sâu đục thân, bệnh thối quả, đốm lá', 'Không có', 'Chỉ một loại', 'Hiếm gặp'], 0, 'Nhiều loại sâu bệnh ảnh hưởng đến cây ăn quả.'),
  ]),

  M(17, 'Kỹ thuật ghép cây', [
    Q('Ghép cây là?', ['Ghép phần cây này (mắt/cành) lên cây khác (gốc ghép) để thành cây mới', 'Trồng hạt', 'Chiết cành', 'Giâm'], 0, 'Ghép là phương pháp nhân giống vô tính phổ biến.'),
    Q('Các kiểu ghép?', ['Ghép mắt, ghép cành, ghép áp', 'Chỉ ghép mắt', 'Chỉ ghép cành', 'Không có kiểu'], 0, '3 kiểu ghép chính: mắt, cành, áp.'),
    Q('Ưu điểm của ghép?', ['Giữ giống, sớm ra quả, tận dụng gốc ghép khoẻ', 'Chậm', 'Khác giống', 'Yếu'], 0, 'Ghép giúp tận dụng gốc khoẻ + giữ giống tốt.'),
    Q('Sau khi ghép cần?', ['Quấn chặt + che nắng + chăm sóc tỉ mỉ', 'Để mặc', 'Tưới nhiều', 'Bón nhiều'], 0, 'Chăm sóc sau ghép quyết định tỷ lệ thành công.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Nghề điện dân dụng yêu cầu?', ['Kiến thức + sức khoẻ + cẩn thận + đạo đức', 'Chỉ khoẻ', 'Chỉ giỏi toán', 'Không yêu cầu'], 0, 'Nghề điện cần nhiều phẩm chất.'),
    Q('Mối nối điện cần?', ['Dẫn điện tốt + bền + cách điện + đẹp', 'Chỉ đẹp', 'Chỉ bền', 'Tuỳ ý'], 0, '4 yêu cầu cơ bản của mối nối.'),
    Q('Mạch đèn cầu thang dùng?', ['Hai công tắc 3 cực', 'Một công tắc', 'Ba công tắc', 'Không'], 0, 'Mạch đèn cầu thang dùng 2 công tắc 3 cực.'),
    Q('Cây ăn quả nhân giống vô tính ưu điểm?', ['Giữ giống + ra quả sớm', 'Khác giống', 'Chậm', 'Yếu'], 0, 'Nhân vô tính giữ giống và ra quả sớm.'),
    Q('Aptomat bảo vệ?', ['Quá tải + ngắn mạch', 'Người', 'Đèn', 'Cây'], 0, 'Aptomat tự ngắt khi quá tải/ngắn mạch.'),
  ]),

  // ───── HK2 — Sửa xe đạp + Nấu ăn + Định hướng nghề ─────
  M(19, 'Sửa xe đạp — Cấu tạo xe đạp', [
    Q('Bộ phận chính xe đạp?', ['Khung, bánh xe, hệ truyền động, hệ phanh, hệ lái', 'Chỉ bánh', 'Chỉ khung', 'Chỉ phanh'], 0, 'Xe đạp gồm 5 hệ chính.'),
    Q('Hệ truyền động gồm?', ['Bàn đạp, trục giữa, đĩa, xích, líp', 'Chỉ xích', 'Chỉ đĩa', 'Chỉ bàn đạp'], 0, 'Hệ truyền động chuyển sức từ bàn đạp tới bánh sau.'),
    Q('Hệ phanh có nhiệm vụ?', ['Giảm tốc, dừng xe an toàn', 'Tăng tốc', 'Lái', 'Truyền lực'], 0, 'Phanh để dừng/giảm tốc, đảm bảo an toàn.'),
    Q('Vật liệu khung xe đạp phổ biến?', ['Thép, hợp kim nhôm, sợi carbon', 'Gỗ', 'Nhựa', 'Đồng'], 0, 'Khung thép, nhôm, carbon là phổ biến.'),
  ]),

  M(20, 'Sửa xe đạp — Tháo lắp bánh xe', [
    Q('Trước khi tháo bánh phải?', ['Tháo phanh (nếu phanh vành), nới ốc trục', 'Cứ tháo', 'Phun nước', 'Tuỳ ý'], 0, 'Nới phanh và ốc trục trước khi rút bánh ra.'),
    Q('Dụng cụ cần?', ['Cờ lê, mỏ lết, ống tăng đơ', 'Búa', 'Kéo', 'Tua vít'], 0, 'Cờ lê và mỏ lết là dụng cụ chính.'),
    Q('Khi lắp lại bánh?', ['Căn giữa, siết đều ốc, kiểm tra phanh', 'Cứ siết', 'Bỏ qua phanh', 'Tuỳ ý'], 0, 'Lắp lại phải căn giữa và kiểm tra hệ phanh.'),
    Q('Bánh xe bị xóc, có thể do?', ['Vành cong, căm chùng/lỏng', 'Lốp tốt', 'Sạch', 'Mới'], 0, 'Vành cong/căm lỏng làm bánh xóc.'),
  ]),

  M(21, 'Sửa xe đạp — Vá săm + thay lốp', [
    Q('Tìm chỗ thủng săm bằng cách?', ['Bơm căng và nhúng vào nước, quan sát bọt khí', 'Sờ', 'Đoán', 'Nghe'], 0, 'Bọt khí là cách phát hiện chỗ thủng chính xác.'),
    Q('Trước khi dán vá phải?', ['Làm sạch và chà nhám vùng thủng', 'Dán ngay', 'Phun nước', 'Bôi dầu'], 0, 'Bề mặt sạch + nhám giúp keo bám tốt.'),
    Q('Keo vá săm thường là?', ['Keo cao su tự sinh nhiệt', 'Hồ giấy', 'Nước', 'Sữa'], 0, 'Keo chuyên dụng cao su.'),
    Q('Thay lốp khi?', ['Lốp mòn nhiều, nứt, không an toàn', 'Còn tốt', 'Mới mua', 'Sạch'], 0, 'Thay lốp khi đã mòn nhiều, không đảm bảo an toàn.'),
  ]),

  M(22, 'Sửa xe đạp — Hiệu chỉnh phanh, xích', [
    Q('Phanh hoạt động kém do?', ['Má phanh mòn, dây phanh chùng, vành dính dầu', 'Vành sạch', 'Mới', 'Phanh chặt'], 0, 'Phanh kém do nhiều nguyên nhân; cần kiểm tra từng phần.'),
    Q('Cách hiệu chỉnh phanh?', ['Căng lại dây, thay má phanh, lau vành', 'Bỏ phanh', 'Phun dầu vành', 'Tuỳ ý'], 0, 'Điều chỉnh dây + thay má + lau vành là cách phổ biến.'),
    Q('Xích bị rít, kêu to do?', ['Khô dầu, bẩn, mòn', 'Mới', 'Sạch', 'Trơn'], 0, 'Xích cần được tra dầu định kỳ.'),
    Q('Bảo dưỡng xích?', ['Lau sạch + tra dầu chuyên dụng định kỳ', 'Đổ dầu nhớt nhiều', 'Không cần', 'Đổ nước'], 0, 'Tra dầu chuyên dụng cho xích định kỳ.'),
  ]),

  M(23, 'Nấu ăn — Vệ sinh an toàn thực phẩm', [
    Q('Vệ sinh ATTP là?', ['Đảm bảo thực phẩm sạch, an toàn từ khâu chọn đến chế biến và bảo quản', 'Chỉ rửa tay', 'Chỉ rửa rau', 'Tuỳ ý'], 0, 'ATTP bao gồm toàn bộ chuỗi từ chọn nguyên liệu đến bảo quản.'),
    Q('Nguyên tắc chọn thực phẩm?', ['Tươi, không ôi thiu, không hết hạn, rõ nguồn gốc', 'Rẻ', 'Đẹp', 'Tuỳ ý'], 0, 'Tươi + đúng hạn + rõ nguồn là tiêu chí cơ bản.'),
    Q('Trước khi nấu phải?', ['Rửa tay, rửa nguyên liệu, dụng cụ sạch', 'Cứ nấu', 'Tay bẩn cũng được', 'Tuỳ ý'], 0, 'Vệ sinh tay + nguyên liệu + dụng cụ là bắt buộc.'),
    Q('Bảo quản thực phẩm chín?', ['Đậy kín, để tủ lạnh nếu chưa ăn ngay', 'Để ngoài', 'Tuỳ ý', 'Không cần'], 0, 'Đậy kín và bảo quản lạnh để tránh ôi thiu.'),
    Q('Nguyên tắc cắt thớt khi nấu?', ['Riêng thớt sống – chín', 'Dùng chung', 'Không cần', 'Tuỳ ý'], 0, 'Tránh nhiễm chéo bằng cách dùng thớt riêng.'),
  ]),

  M(24, 'Nấu ăn — Phương pháp chế biến', [
    Q('Các phương pháp dùng nhiệt?', ['Luộc, hấp, kho, rán, xào, nướng', 'Chỉ luộc', 'Chỉ rán', 'Chỉ nướng'], 0, 'Nhiều phương pháp chế biến nhiệt phổ biến.'),
    Q('Hấp giữ chất dinh dưỡng tốt vì?', ['Không tan vào nước, ít mất vitamin', 'Mất nhiều', 'Tuỳ', 'Không giữ'], 0, 'Hấp ít làm mất chất hơn luộc.'),
    Q('Rán nhiều dầu mỡ tác hại?', ['Tăng calo, sinh chất có hại nếu dầu quá nóng', 'Tốt cho sức khoẻ', 'Không hại', 'Bổ'], 0, 'Rán nhiều dầu không tốt cho sức khoẻ.'),
    Q('Trộn salad là phương pháp?', ['Không dùng nhiệt, giữ nguyên vitamin', 'Dùng nhiệt', 'Hấp', 'Luộc'], 0, 'Salad chế biến không nhiệt, giữ nguyên dinh dưỡng.'),
  ]),

  M(25, 'Nấu ăn — Xây dựng thực đơn gia đình', [
    Q('Thực đơn cân bằng cần?', ['Đủ 4 nhóm: tinh bột, đạm, béo, vitamin-khoáng', 'Chỉ tinh bột', 'Chỉ đạm', 'Tuỳ thích'], 0, 'Bữa ăn cân bằng có đủ 4 nhóm chất.'),
    Q('Khẩu phần ăn phụ thuộc?', ['Lứa tuổi, giới tính, công việc', 'Tuỳ ý', 'Như nhau', 'Không quan trọng'], 0, 'Khẩu phần cần phù hợp với từng người.'),
    Q('Bữa sáng nên?', ['Đủ chất, không bỏ', 'Bỏ', 'Tuỳ ý', 'Chỉ uống nước'], 0, 'Bữa sáng quan trọng, không nên bỏ.'),
    Q('Hạn chế gì trong khẩu phần?', ['Đường, muối, dầu mỡ quá nhiều', 'Rau', 'Trái cây', 'Sữa'], 0, 'Đường, muối, dầu mỡ nhiều có hại sức khoẻ.'),
    Q('Uống nước mỗi ngày khoảng?', ['1,5–2 lít', '0,5 lít', '5 lít', 'Không cần'], 0, '1,5–2 lít nước/ngày là khuyến nghị WHO.'),
  ]),

  M(26, 'Nấu ăn — Thực hành: Món luộc + xào đơn giản', [
    Q('Luộc rau ngon cần?', ['Nước sôi mới cho rau, thêm chút muối', 'Nước lạnh', 'Không muối', 'Đậy kín'], 0, 'Nước sôi + chút muối giúp rau xanh, giòn.'),
    Q('Xào rau giữ giòn cần?', ['Lửa to, nhanh tay, ít nước', 'Lửa nhỏ', 'Lâu', 'Nhiều nước'], 0, 'Xào lửa to nhanh tay giữ độ giòn.'),
    Q('Trước khi xào thịt?', ['Ướp gia vị 10–15 phút', 'Xào ngay', 'Không ướp', 'Tuỳ ý'], 0, 'Ướp giúp thịt ngấm và mềm.'),
    Q('Nêm gia vị nên?', ['Nếm trước khi tắt bếp', 'Đổ một lần', 'Không nêm', 'Tuỳ ý'], 0, 'Nếm thử trước khi tắt bếp để chỉnh vị.'),
  ]),

  M(27, 'May mặc cơ bản — Đường khâu cơ bản', [
    Q('Đường khâu cơ bản?', ['Khâu thường (tới), khâu đột, khâu vắt', 'Chỉ thường', 'Chỉ đột', 'Không có'], 0, 'Ba kiểu khâu tay cơ bản.'),
    Q('Khâu đột dùng khi?', ['Đường khâu cần chắc, bền', 'Trang trí', 'Vắt biên', 'Tuỳ'], 0, 'Khâu đột bền hơn khâu thường.'),
    Q('Khâu vắt dùng để?', ['Khâu mép vải, gấu quần áo', 'Đường chính', 'Trang trí', 'Tuỳ'], 0, 'Khâu vắt làm gọn mép, gấu.'),
    Q('Trước khi khâu cần?', ['Đo, cắt theo mẫu, lược trước', 'Khâu ngay', 'Không đo', 'Tuỳ ý'], 0, 'Chuẩn bị kỹ trước khi khâu giúp đường thẳng đẹp.'),
  ]),

  M(28, 'Định hướng nghề nghiệp sau lớp 9', [
    Q('Sau lớp 9 có những hướng?', ['Học THPT, học nghề, vừa học vừa làm', 'Chỉ THPT', 'Chỉ nghề', 'Nghỉ học'], 0, 'Có nhiều con đường sau cấp 2.'),
    Q('Chọn nghề dựa vào?', ['Năng lực, sở thích, nhu cầu xã hội', 'Tiền lương', 'Bạn chọn', 'Cha mẹ ép'], 0, 'Ba yếu tố cơ bản: năng lực + sở thích + nhu cầu.'),
    Q('Trung cấp nghề học?', ['Khoảng 2 năm, có bằng nghề và văn hoá', '1 năm', '5 năm', 'Không'], 0, 'Trung cấp nghề khoảng 2 năm.'),
    Q('Lợi ích học nghề sớm?', ['Có việc làm nhanh, không tốn quá nhiều thời gian', 'Học chậm', 'Không có việc', 'Mất nhiều'], 0, 'Học nghề sớm giúp có việc làm nhanh.'),
    Q('Trắc nghiệm hướng nghiệp giúp?', ['Tự khám phá sở thích, năng lực để chọn nghề phù hợp', 'Vô bổ', 'Đoán mệnh', 'Tuỳ ý'], 0, 'Trắc nghiệm hướng nghiệp (Holland, MBTI...) hỗ trợ định hướng.'),
  ]),

  M(29, 'Một số ngành nghề phổ biến hiện nay', [
    Q('Ngành CNTT cần?', ['Tư duy logic, kiến thức toán-tin, khả năng tự học', 'Sức khoẻ tốt', 'Khéo tay', 'Nói giỏi'], 0, 'CNTT đòi hỏi tư duy logic và khả năng tự học cao.'),
    Q('Ngành cơ khí cần?', ['Khéo tay, kiến thức kỹ thuật, sức khoẻ', 'Văn chương', 'Hát hay', 'Tuỳ ý'], 0, 'Cơ khí cần kỹ năng tay nghề + kỹ thuật.'),
    Q('Ngành y, dược cần?', ['Học giỏi, cẩn thận, đạo đức nghề cao', 'Tuỳ ý', 'Không yêu cầu', 'Học vẹt'], 0, 'Ngành y, dược yêu cầu kiến thức + đạo đức nghề rất cao.'),
    Q('Ngành dịch vụ-du lịch cần?', ['Giao tiếp tốt, ngoại ngữ, kiên nhẫn', 'Im lặng', 'Cô đơn', 'Không cần ngoại ngữ'], 0, 'Dịch vụ-du lịch đòi hỏi kỹ năng mềm và ngoại ngữ.'),
  ]),

  M(30, 'Năng lực số trong thời đại mới', [
    Q('Năng lực số (digital literacy) gồm?', ['Sử dụng máy tính, internet, đánh giá thông tin, an toàn mạng', 'Chỉ đánh máy', 'Chỉ chơi game', 'Lướt web'], 0, 'Năng lực số bao trùm nhiều kỹ năng số cơ bản và nâng cao.'),
    Q('AI (trí tuệ nhân tạo) ảnh hưởng nghề nghiệp?', ['Tự động hoá nhiều công việc, tạo nghề mới', 'Không ảnh hưởng', 'Chỉ trong CNTT', 'Vô bổ'], 0, 'AI thay đổi mọi ngành nghề; cần thích ứng.'),
    Q('Để không bị AI thay thế, cần?', ['Tư duy sáng tạo, kỹ năng mềm, học suốt đời', 'Học vẹt', 'Không học', 'Mặc kệ'], 0, 'Kỹ năng AI không thay được: sáng tạo, cảm xúc, tư duy phản biện.'),
    Q('Học suốt đời là?', ['Tiếp tục học hỏi sau khi rời ghế nhà trường', 'Học đến hết phổ thông', 'Học một lần', 'Không cần'], 0, 'Lifelong learning là chìa khoá thời đại tri thức.'),
  ]),

  M(31, 'Khởi nghiệp và tinh thần doanh nhân', [
    Q('Khởi nghiệp là?', ['Tạo dựng công việc kinh doanh mới', 'Đi làm thuê', 'Học', 'Du lịch'], 0, 'Khởi nghiệp là tạo dựng business mới.'),
    Q('Tinh thần doanh nhân gồm?', ['Dám nghĩ, dám làm, chấp nhận rủi ro, sáng tạo', 'Nhút nhát', 'Sợ rủi ro', 'Bảo thủ'], 0, 'Doanh nhân cần dám nghĩ dám làm và chịu được rủi ro.'),
    Q('HS có thể tập khởi nghiệp bằng?', ['Bán hàng nhỏ, làm dự án nhỏ', 'Đợi 30 tuổi', 'Không thể', 'Tuỳ ý'], 0, 'Khởi nghiệp có thể bắt đầu từ ý tưởng nhỏ ngay khi còn đi học.'),
    Q('Kỹ năng cần cho khởi nghiệp?', ['Quản lý tài chính, giao tiếp, marketing, tin học', 'Không cần', 'Chỉ tiền', 'Chỉ may mắn'], 0, 'Khởi nghiệp cần đa kỹ năng.'),
  ]),

  M(32, 'An toàn lao động — Trong nhà và sản xuất', [
    Q('An toàn lao động bao gồm?', ['Phòng tránh tai nạn, bệnh nghề nghiệp, đảm bảo sức khoẻ', 'Chỉ máy móc', 'Chỉ con người', 'Tuỳ ý'], 0, 'ATLĐ bảo vệ sức khoẻ và tính mạng người lao động.'),
    Q('Trang bị bảo hộ cá nhân?', ['Mũ, kính, găng, giày, khẩu trang', 'Quần áo thường', 'Không cần', 'Tuỳ'], 0, 'PPE (Personal Protective Equipment) là yêu cầu bắt buộc nhiều ngành.'),
    Q('Khi xảy ra tai nạn lao động?', ['Sơ cứu + báo cấp trên + đưa đi y tế', 'Im lặng', 'Mặc kệ', 'Trốn'], 0, 'Quy trình xử lý tai nạn rõ ràng: sơ cứu → báo → y tế.'),
    Q('Trong nhà cần chú ý?', ['An toàn điện, gas, dao, leo cao', 'Vô lo', 'Tuỳ ý', 'Không nguy hiểm'], 0, 'Tai nạn trong nhà cũng phổ biến và cần cẩn thận.'),
  ]),

  M(33, 'Ôn tập HK2 — Thực hành tổng hợp', [
    Q('Mối nối điện cần?', ['Dẫn điện + bền + cách điện + đẹp', 'Đẹp là đủ', 'Tuỳ ý', 'Bền là đủ'], 0, '4 yêu cầu cơ bản.'),
    Q('Cây ăn quả nhân giống vô tính ưu điểm?', ['Giữ giống + ra quả sớm', 'Khác', 'Chậm', 'Yếu'], 0, 'Vô tính giữ giống tốt.'),
    Q('Bữa ăn cân bằng có?', ['4 nhóm chất', '1 nhóm', '2 nhóm', '5 nhóm'], 0, '4 nhóm: tinh bột, đạm, béo, vitamin-khoáng.'),
    Q('Sau lớp 9, hướng?', ['THPT, GDTX, trung cấp nghề', 'Chỉ THPT', 'Nghỉ học', 'Tuỳ ý'], 0, 'Nhiều hướng đi sau lớp 9.'),
    Q('Học suốt đời là?', ['Tiếp tục học sau khi tốt nghiệp', 'Học đến phổ thông', 'Không cần', 'Đợi'], 0, 'Lifelong learning là yêu cầu thời đại tri thức.'),
  ]),

  M(34, 'Đánh giá năng lực bản thân và lập kế hoạch nghề nghiệp', [
    Q('Bước đầu chọn nghề?', ['Tự đánh giá năng lực, sở thích, giá trị bản thân', 'Hỏi bạn', 'Cha mẹ ép', 'Tuỳ ý'], 0, 'Tự nhận thức là bước đầu của chọn nghề.'),
    Q('Công cụ hướng nghiệp?', ['Trắc nghiệm Holland, MBTI, tư vấn hướng nghiệp', 'Bói toán', 'Đoán', 'Tuỳ ý'], 0, 'Có nhiều công cụ khoa học hỗ trợ định hướng.'),
    Q('Kế hoạch nghề nghiệp cần?', ['Mục tiêu dài hạn + bước đi cụ thể', 'Mơ ước viển vông', 'Không kế hoạch', 'Tuỳ ý'], 0, 'Kế hoạch phải có mục tiêu rõ và bước đi cụ thể.'),
    Q('Khi gặp khó khăn nên?', ['Tham vấn thầy cô, gia đình, chuyên gia', 'Bỏ cuộc', 'Im lặng', 'Tự quyết'], 0, 'Tham vấn người có kinh nghiệm giúp ra quyết định tốt.'),
    Q('Linh hoạt trong nghề là?', ['Sẵn sàng học mới khi thị trường thay đổi', 'Cứng nhắc', 'Bảo thủ', 'Không đổi'], 0, 'Linh hoạt giúp thích ứng với thay đổi nghề nghiệp.'),
  ]),

  M(35, 'Tổng kết môn — Liên hệ thực tế', [
    Q('Kiến thức Công nghệ 9 hữu ích cho?', ['Cuộc sống hằng ngày + định hướng nghề', 'Chỉ thi cử', 'Vô bổ', 'Chỉ ngành điện'], 0, 'Công nghệ 9 rất thực tế và hữu ích.'),
    Q('Để có nghề tốt, cần?', ['Học, rèn luyện, kiên trì, đạo đức', 'May mắn', 'Quen biết', 'Cha mẹ giàu'], 0, 'Nghề bền vững dựa trên năng lực và đạo đức.'),
    Q('An toàn là?', ['Ưu tiên hàng đầu trong mọi công việc', 'Tuỳ ý', 'Không quan trọng', 'Khi nào nhớ'], 0, 'An toàn luôn được ưu tiên cao nhất.'),
    Q('Đạo đức nghề nghiệp là?', ['Trung thực, trách nhiệm, tôn trọng khách hàng và đồng nghiệp', 'Tuỳ ý', 'Không cần', 'Vô bổ'], 0, 'Đạo đức nghề là nền tảng của sự nghiệp lâu dài.'),
    Q('Học suốt đời cần?', ['Thái độ chủ động, tò mò, cập nhật', 'Bị động', 'Đợi nhắc', 'Tuỳ ý'], 0, 'Chủ động và tò mò là chìa khoá học suốt đời.'),
  ]),
];

export const S9CN_SCENARIOS = indexBy(S9CN_WEEKS);
