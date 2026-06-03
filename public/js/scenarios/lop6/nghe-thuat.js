// ============================================================
// Lớp 6 — Nghệ thuật (Âm nhạc + Mỹ thuật) · 36 tuần
// HK1 (T1-T18): trọng tâm ÂM NHẠC
// HK2 (T19-T36): trọng tâm MỸ THUẬT
// Bám sát Chương trình GDPT 2018 môn Nghệ thuật cấp THCS.
// ============================================================

import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6NT', 'nghe-thuat', n, title, qs, opts);

export const S6NT_WEEKS = [
  // ───────────── HK1 — ÂM NHẠC ─────────────

  M(1, 'Bảy nốt nhạc cơ bản', [
    Q('Trong hệ thống nhạc lý cơ bản, có mấy nốt nhạc thường được học đầu tiên?', ['7 nốt', '5 nốt', '8 nốt', '6 nốt'], 0, 'Bảy nốt: Đô, Rê, Mi, Fa, Sol, La, Si.'),
    Q('Nốt đứng ngay sau nốt Đô là nốt nào?', ['Mi (nốt thứ ba trong dãy)', 'Si (nốt cuối dãy 7 nốt)', 'Fa (nốt thứ tư trong dãy)', 'Rê'], 3, 'Thứ tự: Đô – Rê – Mi – Fa – Sol – La – Si.'),
    Q('Nốt nhạc nào đứng trước nốt Sol?', ['Mi (đứng trước Fa)', 'La (đứng ngay sau Sol)', 'Rê (nốt thứ hai trong dãy)', 'Fa'], 3, 'Fa đứng ngay trước Sol trong dãy 7 nốt.'),
    Q('Nốt nào là nốt cuối trong dãy 7 nốt cơ bản?', ['Đô (nốt mở đầu dãy)', 'Sol (nốt giữa dãy 7 nốt)', 'La (nốt thứ sáu trong dãy)', 'Si'], 3, 'Dãy kết thúc ở Si rồi quay về Đô ở quãng tám tiếp theo.'),
    Q('Tên gọi quốc tế của nốt "Đô" là gì?', ['Do (C)', 'Sol (G)', 'Re (D)', 'Mi (E)'], 0, 'Đô tương ứng với ký hiệu C trong hệ chữ cái Latin.'),
    Q('Khi hát "Đô – Rê – Mi – Fa – Sol – La – Si – Đô" gọi là gì?', ['Gam (thang âm) Đô trưởng', 'Nhịp 4/4 thông dụng', 'Hợp âm', 'Trường độ'], 0, 'Đó là gam Đô trưởng đi lên một quãng tám.'),
  ]),

  M(2, 'Khuông nhạc và khoá Sol', [
    Q('Khuông nhạc gồm mấy dòng kẻ song song?', ['3 dòng', '6 dòng', '5 dòng', '4 dòng'], 2, 'Khuông nhạc tiêu chuẩn có 5 dòng kẻ.'),
    Q('Giữa 5 dòng kẻ của khuông nhạc có bao nhiêu khe?', ['6 khe', '5 khe', '3 khe', '4 khe'], 3, '5 dòng tạo thành 4 khe ở giữa.'),
    Q('Khoá Sol được đặt ở đầu khuông nhạc nhằm mục đích gì?', ['Trang trí', 'Xác định vị trí nốt Sol trên khuông nhạc', 'Chỉ độ to', 'Chỉ tốc độ'], 1, 'Khoá Sol xác định dòng kẻ thứ 2 là nốt Sol.'),
    Q('Khoá Sol vòng quanh dòng kẻ thứ mấy của khuông nhạc?', ['Dòng 4', 'Dòng 2', 'Dòng 1', 'Dòng 3'], 1, 'Vòng xoắn của khoá Sol bao quanh dòng kẻ thứ 2 (tính từ dưới lên).'),
    Q('Các dòng kẻ trên khuông nhạc được đếm theo thứ tự nào?', ['Từ trái sang phải', 'Từ dưới lên', 'Ngẫu nhiên', 'Từ trên xuống'], 1, 'Quy ước: dòng 1 ở dưới cùng, dòng 5 ở trên cùng.'),
    Q('Trên khuông nhạc khoá Sol, nốt nằm ở dòng kẻ thứ 2 là nốt gì?', ['Mi (nằm ở dòng kẻ thứ 1)', 'Rê (nằm ở khe phụ dưới khuông)', 'Sol', 'Si (nằm ở dòng kẻ thứ 3)'], 2, 'Đó chính là nốt Sol — lý do khoá có tên là "khoá Sol".'),
  ]),

  M(3, 'Trường độ cơ bản của nốt nhạc', [
    Q('Nốt tròn có trường độ bằng bao nhiêu phách?', ['2 phách', '4 phách', '1 phách', '3 phách'], 1, 'Nốt tròn = 4 phách (đơn vị chuẩn).'),
    Q('Một nốt trắng có giá trị bằng mấy phách?', ['1', '2', '4', '3'], 1, 'Nốt trắng = 2 phách = 1/2 nốt tròn.'),
    Q('Nốt đen có trường độ bao nhiêu phách?', ['2 phách', '4 phách', '1 phách', '1/2 phách'], 2, 'Nốt đen = 1 phách — đơn vị quen thuộc nhất.'),
    Q('Một nốt móc đơn bằng bao nhiêu phách?', ['2', '1/2', '1', '1/4'], 1, 'Nốt móc đơn = 1/2 phách.'),
    Q('Một nốt tròn bằng mấy nốt đen?', ['4 nốt đen', '8 nốt đen', '3 nốt đen', '2 nốt đen'], 0, '1 tròn = 4 đen.'),
    Q('Sắp xếp các nốt theo thứ tự trường độ TỪ DÀI ĐẾN NGẮN.', ['Trắng → Tròn → Móc đơn → Đen', 'Tròn → Trắng → Đen → Móc đơn', 'Móc đơn → Đen → Trắng → Tròn', 'Đen → Trắng → Tròn → Móc đơn'], 1, 'Tròn (4) > Trắng (2) > Đen (1) > Móc đơn (1/2).'),
  ]),

  M(4, 'Nhịp 2/4 và vạch nhịp', [
    Q('Số chỉ nhịp 2/4 có nghĩa là gì?', ['Mỗi ô nhịp dài 2 giây', 'Mỗi ô nhịp có 2 phách, mỗi phách bằng 1 nốt đen', 'Mỗi ô nhịp có 4 phách', 'Bài có 2 đoạn'], 1, 'Tử số 2 = số phách/ô nhịp; mẫu số 4 = nốt đen làm 1 phách.'),
    Q('Vạch nhịp là gì?', ['Cách ghi cao độ', 'Tên gọi của nốt nhạc', 'Đường gạch dọc chia khuông nhạc thành các ô nhịp', 'Một loại nhạc cụ'], 2, 'Vạch nhịp = đường thẳng đứng giữa các ô nhịp.'),
    Q('Trong nhịp 2/4, phách 1 thường là phách gì?', ['Phách mạnh', 'Phách nhẹ', 'Phách trung bình', 'Phách lướt nối tiếp'], 0, 'Phách 1 mạnh, phách 2 nhẹ — kiểu hành khúc.'),
    Q('Một ô nhịp 2/4 chứa được tối đa mấy nốt đen?', ['1', '3', '4', '2'], 3, 'Tử số = 2 nên có đúng 2 phách (2 nốt đen).'),
    Q('Vạch nhịp KÉP (hai đường thẳng đứng song song) thường báo hiệu điều gì?', ['Đổi nhạc cụ', 'Bắt đầu lặp lại từ đầu', 'Kết thúc bài hoặc kết thúc một đoạn', 'Tăng tốc độ'], 2, 'Vạch nhịp kép ở cuối bài thường báo hiệu kết thúc.'),
    Q('Bài hát có tính chất hành khúc thường dùng nhịp nào?', ['12/8', '6/8', '2/4', '3/4'], 2, 'Nhịp 2/4 phù hợp với bước chân đều — hành khúc.'),
  ]),

  M(5, 'Nhịp 3/4 và nhịp 4/4', [
    Q('Nhịp 3/4 có bao nhiêu phách trong một ô nhịp?', ['4', '3', '6', '2'], 1, 'Tử số 3 → 3 phách mỗi ô nhịp.'),
    Q('Trong nhịp 3/4, mẫu hình phách điển hình là gì?', ['Mạnh – Nhẹ – Mạnh vừa – Nhẹ', 'Tất cả mạnh', 'Mạnh – Nhẹ', 'Mạnh – Nhẹ – Nhẹ'], 3, 'Nhịp 3/4: 1 mạnh, 2-3 nhẹ — cảm giác van-xơ uyển chuyển.'),
    Q('Nhịp điệu nào thường dùng cho điệu Valse (Van)?', ['4/4', '3/4', '2/4', '6/8'], 1, 'Valse đặc trưng nhịp 3/4.'),
    Q('Nhịp 4/4 có bao nhiêu phách trong một ô nhịp?', ['3', '2', '8', '4'], 3, 'Tử số 4 → 4 phách.'),
    Q('Trong nhịp 4/4, phách nào mạnh nhất?', ['Phách 3', 'Phách 2', 'Phách 1', 'Phách 4'], 2, 'Sơ đồ 4/4: Mạnh – Nhẹ – Mạnh vừa – Nhẹ.'),
    Q('Một ô nhịp 4/4 có thể chứa đúng 1 nốt nào duy nhất?', ['Nốt đen', 'Nốt trắng', 'Nốt tròn', 'Nốt móc đơn'], 2, 'Nốt tròn = 4 phách = lấp đầy ô nhịp 4/4.'),
  ]),

  M(6, 'Dấu lặng', [
    Q('Dấu lặng trong âm nhạc có ý nghĩa gì?', ['Hát to lên', 'Kết thúc bài', 'Hát nhỏ lại', 'Khoảng im lặng có ghi trường độ'], 3, 'Dấu lặng = chỉ thời gian im lặng, vẫn tính phách.'),
    Q('Dấu lặng đen có giá trị tương đương với nốt nào?', ['Nốt móc đơn', 'Nốt đen', 'Nốt tròn', 'Nốt trắng'], 1, 'Lặng đen = nghỉ 1 phách = giá trị của nốt đen.'),
    Q('Dấu lặng trắng kéo dài bao nhiêu phách?', ['1', '2', '3', '4'], 1, 'Lặng trắng = 2 phách.'),
    Q('Khi gặp dấu lặng, người hát/người chơi nhạc cần làm gì?', ['Im lặng đúng số phách quy định', 'Hát thật to', 'Bỏ qua', 'Lặp lại đoạn trước'], 0, 'Im lặng đúng trường độ là quy tắc cơ bản.'),
    Q('Trong ô nhịp 4/4 có 1 nốt trắng và 1 dấu lặng trắng, tổng phách là bao nhiêu?', ['2 phách', '3 phách', '4 phách', '6 phách'], 2, 'Trắng (2) + Lặng trắng (2) = 4 phách → đầy ô nhịp 4/4.'),
    Q('Câu nào ĐÚNG về dấu lặng?', ['Dấu lặng chỉ dùng ở cuối bài', 'Dấu lặng cũng có nhiều loại trường độ tương ứng với nốt nhạc', 'Dấu lặng làm âm thanh kéo dài hơn', 'Dấu lặng không có trường độ'], 1, 'Có lặng tròn, lặng trắng, lặng đen, lặng móc đơn… tương ứng từng nốt.'),
  ]),

  M(7, 'Hát đúng cao độ và giai điệu', [
    Q('"Cao độ" trong âm nhạc là gì?', ['Độ cao – thấp của âm thanh', 'Độ to – nhỏ của âm thanh', 'Độ nhanh của bài hát', 'Độ dài của âm thanh'], 0, 'Cao độ = pitch = cao/thấp; trường độ mới là dài/ngắn.'),
    Q('"Giai điệu" là gì?', ['Kích thước của khuông nhạc', 'Chuỗi các nốt nhạc kế tiếp nhau tạo nên đường nét nhạc cảm', 'Dụng cụ gõ đệm', 'Tên một loại nhịp'], 1, 'Giai điệu = melody — đường nét nhạc cảm theo thời gian.'),
    Q('Để hát đúng cao độ, người hát cần chú ý điều gì TRƯỚC TIÊN?', ['Lắng nghe và bắt chuẩn nốt mẫu', 'Bỏ qua các nốt khó', 'Đi nhanh hơn nhịp', 'Hát thật to'], 0, 'Nghe và bắt chuẩn cao độ mẫu là kỹ năng nền tảng.'),
    Q('Khi hát "lạc tông", lỗi đó thuộc về yếu tố nào?', ['Tiết tấu', 'Trường độ', 'Cao độ', 'Lời ca'], 2, 'Lạc tông = sai cao độ.'),
    Q('Hơi thở đúng khi hát thường được lấy ở đâu?', ['Chỉ ở ngực trên', 'Không cần hơi', 'Chỉ ở cổ', 'Bụng (cơ hoành)'], 3, 'Hát bằng hơi bụng giúp âm thanh chắc, dài hơi.'),
    Q('Trước khi hát một bài mới, bước nào quan trọng?', ['Bỏ qua phần nhịp', 'Học thuộc lời thật nhanh không cần giai điệu', 'Khởi động giọng và đọc gam', 'Hát luôn thật to'], 2, 'Khởi động giọng giúp bảo vệ thanh quản và hát đúng cao độ.'),
  ]),

  M(8, 'Bài hát "Tiếng chuông và ngọn cờ" (Phạm Tuyên)', [
    Q('Ai là tác giả bài hát "Tiếng chuông và ngọn cờ"?', ['Văn Cao', 'Phạm Tuyên', 'Hoàng Vân', 'Trịnh Công Sơn'], 1, 'Bài hát của nhạc sĩ Phạm Tuyên — quen thuộc trong SGK Âm nhạc THCS.'),
    Q('Nội dung chủ đạo của bài "Tiếng chuông và ngọn cờ" là gì?', ['Ca ngợi mùa thu Hà Nội', 'Tình yêu thiên nhiên', 'Tình mẹ con', 'Khát vọng hoà bình và tình hữu nghị giữa các dân tộc'], 3, 'Bài hát kêu gọi hoà bình, đoàn kết các dân tộc trên thế giới.'),
    Q('"Ngọn cờ" trong bài hát tượng trưng cho điều gì?', ['Một loại nhạc cụ', 'Một loại đồ chơi', 'Một địa danh cụ thể', 'Niềm tin và lý tưởng hoà bình của tuổi thơ thế giới'], 3, 'Ngọn cờ là hình ảnh tượng trưng cho khát vọng hoà bình.'),
    Q('Tính chất âm nhạc của bài hát này thường được mô tả là?', ['Hành khúc dữ dội', 'Buồn bã, ai oán', 'Tươi sáng, trong sáng, tha thiết', 'Nhạc nhảy sôi động'], 2, 'Giai điệu trong sáng, tha thiết, dễ hát với HS.'),
    Q('Nhạc sĩ Phạm Tuyên còn nổi tiếng với bài hát thiếu nhi nào?', ['Chú voi con ở Bản Đôn', 'Đi học', 'Bụi phấn', 'Cánh én tuổi thơ'], 0, 'Phạm Tuyên là tác giả của "Chú voi con ở Bản Đôn", "Tiến lên đoàn viên"…'),
    Q('Khi hát bài "Tiếng chuông và ngọn cờ" theo nhóm, kỹ năng nào cần chú ý?', ['Mỗi người hát một bài khác nhau', 'Bỏ qua nhịp', 'Tranh nhau hát to nhất', 'Hát hoà giọng, đồng đều về cao độ và nhịp'], 3, 'Hát đồng ca/tốp ca cần hoà giọng và giữ nhịp chung.'),
  ]),

  M(9, 'Nhạc cụ gõ Việt Nam', [
    Q('Nhạc cụ nào sau đây thuộc nhóm GÕ?', ['Đàn nhị', 'Sáo trúc', 'Trống', 'Đàn tranh'], 2, 'Trống được tạo âm bằng cách gõ → thuộc bộ gõ.'),
    Q('Song loan là nhạc cụ gì?', ['Nhạc cụ gõ nhỏ thường dùng giữ nhịp trong ca trù, đờn ca tài tử', 'Một loại trống lớn', 'Một loại đàn dây', 'Một loại sáo'], 0, 'Song loan là nhạc cụ gõ rất đặc trưng trong nhạc cổ truyền VN.'),
    Q('Thanh phách thường được làm bằng chất liệu gì?', ['Nhựa cứng', 'Tre/gỗ', 'Sứ tráng men mỏng', 'Sắt mạ kẽm nhẹ'], 1, 'Thanh phách thường làm bằng tre hoặc gỗ, gõ vào nhau tạo âm.'),
    Q('Vai trò chính của nhạc cụ gõ trong một ban nhạc là gì?', ['Tạo giai điệu chính', 'Giữ nhịp và tạo tiết tấu', 'Thay thế người hát', 'Chỉ trang trí'], 1, 'Bộ gõ là "xương sống tiết tấu" của ban nhạc.'),
    Q('Trống cái khác trống con chủ yếu ở điểm nào?', ['Tên gọi', 'Kích thước và độ trầm của âm thanh', 'Màu sắc', 'Chất liệu mặt trống'], 1, 'Trống cái lớn hơn, âm trầm và vang hơn trống con.'),
    Q('Bạn có thể tự chế nhạc cụ gõ đơn giản từ vật liệu nào ở nhà?', ['Không thể tự chế', 'Chỉ mua được ở cửa hàng', 'Phải đặt làm riêng', 'Lon nước, hộp gỗ, đũa tre'], 3, 'Sáng tạo nhạc cụ gõ từ vật liệu tái chế là hoạt động khuyến khích.'),
  ]),

  M(10, 'Nhạc cụ dây Việt Nam', [
    Q('Đàn tranh truyền thống Việt Nam thường có bao nhiêu dây?', ['12 dây', '14 dây', '16 dây', '18 dây'], 2, 'Đàn tranh phổ biến có 16 dây (gọi là thập lục).'),
    Q('Đàn nhị có mấy dây?', ['2 dây', '6 dây', '1 dây', '4 dây'], 0, 'Đàn nhị có 2 dây, chơi bằng cung kéo.'),
    Q('Đàn nhị được chơi bằng cách nào?', ['Kéo bằng cung (vĩ)', 'Gảy bằng móng', 'Gõ bằng dùi', 'Thổi bằng miệng'], 0, 'Cung (vĩ) cọ vào dây tạo âm thanh kéo dài, ngân nga.'),
    Q('Nhạc cụ dây nào sau đây KHÔNG phải dân tộc Việt Nam?', ['Đàn piano', 'Đàn bầu', 'Đàn tranh', 'Đàn nguyệt'], 0, 'Piano là nhạc cụ phương Tây, không phải nhạc cụ dân tộc VN.'),
    Q('Đàn bầu đặc biệt ở điểm nào?', ['Có 100 dây', 'Chỉ có 1 dây nhưng chơi được nhiều cao độ nhờ cần đàn', 'Chơi bằng cung kéo', 'Không có dây'], 1, 'Đàn bầu — "độc huyền cầm" — chỉ 1 dây nhưng vô cùng biểu cảm.'),
    Q('Người chơi đàn tranh tạo âm bằng cách nào?', ['Thổi vào lỗ thoát hơi ở đầu đàn', 'Gõ dùi', 'Kéo cung', 'Gảy dây bằng móng đeo ở tay phải'], 3, 'Đàn tranh được gảy bằng móng đồi mồi/kim loại đeo ở các ngón tay phải.'),
  ]),

  M(11, 'Nhạc cụ hơi', [
    Q('Sáo trúc tạo âm bằng cách nào?', ['Thổi không khí qua lỗ thổi', 'Kéo cung', 'Gõ vào ống', 'Gảy bằng móng'], 0, 'Luồng hơi đi vào ống sáo tạo dao động → âm thanh.'),
    Q('Sáo trúc Việt Nam thường làm bằng chất liệu chính nào?', ['Nhựa cứng', 'Sắt cuộn rỗng tròn', 'Đồng thau đánh bóng', 'Trúc/nứa'], 3, 'Tên gọi đã nói rõ: sáo TRÚC.'),
    Q('Kèn nào sau đây là nhạc cụ HƠI dân tộc Việt Nam?', ['Kèn bầu', 'Kèn trumpet', 'Kèn saxophone', 'Kèn tuba'], 0, 'Kèn bầu (kèn ta) là nhạc cụ hơi dân tộc, dùng trong nhạc lễ, tuồng.'),
    Q('Để âm thanh sáo to – nhỏ khác nhau, người chơi điều chỉnh yếu tố gì?', ['Số người nghe', 'Lực thổi và cách bịt lỗ', 'Màu của sáo', 'Chiều dài tay'], 1, 'Cường độ hơi + cách bịt lỗ quyết định to/nhỏ và cao độ.'),
    Q('Nhạc cụ hơi sử dụng nguyên lý cơ bản nào để tạo âm?', ['Va chạm cơ học', 'Dao động của cột không khí trong ống', 'Dao động của mặt da', 'Dao động của dây'], 1, 'Cột khí trong ống dao động tạo sóng âm.'),
    Q('Tù và (ốc biển) được coi là nhạc cụ hơi vì sao?', ['Vì gảy để tạo âm thanh', 'Vì kéo cung', 'Vì gõ vào để tạo âm thanh', 'Vì người ta thổi để tạo âm thanh'], 3, 'Tù và phát âm khi thổi → thuộc bộ hơi.'),
  ]),

  M(12, 'Dàn nhạc dân tộc Việt Nam', [
    Q('Dàn nhạc dân tộc Việt Nam thường gồm những bộ nhạc cụ nào?', ['Chỉ có máy tính', 'Chỉ có bộ gõ', 'Bộ hơi – Bộ dây – Bộ gõ', 'Chỉ có piano và violin'], 2, 'Cấu trúc cơ bản: hơi + dây (gảy/kéo) + gõ.'),
    Q('Nhạc cụ nào KHÔNG thuộc dàn nhạc dân tộc Việt Nam?', ['Sáo trúc', 'Đàn guitar điện', 'Đàn tranh', 'Đàn bầu'], 1, 'Guitar điện là nhạc cụ hiện đại phương Tây.'),
    Q('"Nhã nhạc cung đình Huế" được UNESCO công nhận là gì?', ['Di sản thiên nhiên', 'Một loại nhạc rock', 'Kỳ quan thế giới', 'Di sản văn hoá phi vật thể đại diện của nhân loại'], 3, 'Nhã nhạc cung đình Huế được UNESCO ghi danh năm 2003.'),
    Q('"Đờn ca tài tử Nam Bộ" sử dụng dàn nhạc chủ yếu gồm các nhạc cụ nào?', ['Violin, cello, piano', 'Trống bass, guitar, keyboard', 'Trống jazz, kèn saxophone', 'Đàn kìm, đàn cò, đàn tranh, đàn bầu, song loan…'], 3, 'Đờn ca tài tử dùng nhạc cụ dân tộc Nam Bộ.'),
    Q('Việc bảo tồn nhạc cụ dân tộc có ý nghĩa gì?', ['Giữ gìn bản sắc văn hoá dân tộc', 'Không cần thiết trong thời hiện đại', 'Cản trở phát triển âm nhạc', 'Chỉ phục vụ trang trí'], 0, 'Nhạc cụ dân tộc là di sản văn hoá cần được trao truyền.'),
    Q('Ngày nay, nhạc cụ dân tộc thường được phối hợp như thế nào?', ['Có thể kết hợp với nhạc cụ hiện đại tạo phong cách "world music"', 'Chỉ được chơi riêng', 'Chỉ trong bảo tàng', 'Đã ngừng sử dụng'], 0, 'Nhiều nghệ sĩ trẻ kết hợp đàn bầu, sáo trúc với band hiện đại.'),
  ]),

  M(13, 'Dân ca ba miền', [
    Q('Bài "Lý cây bông" là dân ca vùng nào?', ['Trung Bộ', 'Bắc Bộ', 'Nam Bộ', 'Tây Bắc'], 2, '"Lý cây bông" — dân ca Nam Bộ rất quen thuộc.'),
    Q('"Hò" là một thể loại dân ca thường gắn với hoạt động nào?', ['Học bài', 'Múa cung đình', 'Đi chợ', 'Lao động tập thể (kéo lưới, chèo thuyền…)'], 3, 'Hò ra đời và phát triển từ lao động tập thể.'),
    Q('"Quan họ Bắc Ninh" thuộc loại hình nào?', ['Dân ca Tây Nguyên', 'Dân ca Bắc Bộ — hát đối đáp nam nữ', 'Tuồng cổ', 'Cải lương Nam Bộ'], 1, 'Quan họ là dân ca đối đáp đặc sắc của vùng Kinh Bắc.'),
    Q('Quan họ Bắc Ninh được UNESCO công nhận năm nào (gần đúng)?', ['2015', '2009', '2003', '2020'], 1, 'Quan họ được ghi danh năm 2009.'),
    Q('"Hò Huế" là dân ca tiêu biểu của miền nào?', ['Bắc (quan họ, chèo)', 'Nam (cải lương, lý)', 'Tây Nguyên', 'Trung'], 3, 'Hò Huế đặc trưng cho miền Trung.'),
    Q('Đặc điểm chung của dân ca Việt Nam là gì?', ['Chỉ có ở thành phố lớn', 'Gắn với đời sống, lao động, tình yêu quê hương, truyền miệng', 'Bắt buộc hát bằng tiếng nước ngoài', 'Phải có nhạc cụ điện tử'], 1, 'Dân ca là sản phẩm của nhân dân lao động, truyền khẩu qua nhiều thế hệ.'),
  ]),

  M(14, 'Cảm thụ Quốc ca (Văn Cao)', [
    Q('Quốc ca Việt Nam có tên là gì?', ['Tiến quân ca', 'Lên đàng', 'Trường ca Sông Lô', 'Diệt phát xít'], 0, 'Quốc ca Việt Nam là bài "Tiến quân ca".'),
    Q('Ai là tác giả của bài "Tiến quân ca"?', ['Đỗ Nhuận', 'Trịnh Công Sơn', 'Phạm Tuyên', 'Văn Cao'], 3, 'Nhạc sĩ Văn Cao sáng tác năm 1944.'),
    Q('"Tiến quân ca" có tính chất âm nhạc như thế nào?', ['Vui tươi nhí nhảnh', 'Buồn da diết', 'Nhạc nhảy hiện đại', 'Hành khúc, hào hùng, trang nghiêm'], 3, 'Đặc trưng hành khúc — phù hợp tính nghi lễ quốc gia.'),
    Q('Khi chào cờ và hát Quốc ca, học sinh cần làm gì?', ['Ngồi nghỉ', 'Nói chuyện riêng', 'Đi lại tự do', 'Đứng nghiêm trang, mắt hướng cờ, hát đúng giai điệu'], 3, 'Đó là quy tắc bắt buộc thể hiện lòng tôn kính.'),
    Q('Tính chất hành khúc thường được nhận biết qua điều gì?', ['Tốc độ rất chậm', 'Không có nhịp', 'Nhịp 3/4 mềm mại', 'Nhịp 2/4 hoặc 4/4 chắc khoẻ, dứt khoát'], 3, 'Hành khúc cần bước đi đều → nhịp chẵn, dứt khoát.'),
    Q('Ngoài "Tiến quân ca", nhạc sĩ Văn Cao còn nổi tiếng với bài nào?', ['Thiên Thai', 'Đi học', 'Bài ca hy vọng', 'Một mùa xuân nho nhỏ'], 0, 'Văn Cao là tác giả "Thiên Thai", "Trường ca Sông Lô", "Suối mơ"…'),
  ]),

  M(15, 'Một số nhạc sĩ tiêu biểu', [
    Q('Nhạc sĩ Phạm Tuyên nổi tiếng với mảng sáng tác nào?', ['Ca khúc thiếu nhi và ca khúc cách mạng', 'Nhạc rap', 'Nhạc giao hưởng nước ngoài', 'Opera Ý'], 0, 'Phạm Tuyên có rất nhiều ca khúc thiếu nhi quen thuộc.'),
    Q('Bài "Như có Bác trong ngày đại thắng" do ai sáng tác?', ['Trịnh Công Sơn', 'Văn Cao', 'Hoàng Hiệp', 'Phạm Tuyên'], 3, 'Phạm Tuyên sáng tác năm 1975.'),
    Q('Nhạc sĩ Trịnh Công Sơn nổi tiếng với thể loại nào?', ['Nhạc rock kim loại', 'Hành khúc thiếu nhi', 'Nhạc cung đình', 'Tình ca, ca khúc da vàng (chống chiến tranh)'], 3, 'Trịnh Công Sơn — nhạc sĩ tình ca lớn của VN.'),
    Q('Bài "Nối vòng tay lớn" là sáng tác của ai?', ['Phạm Tuyên', 'Văn Ký', 'Văn Cao', 'Trịnh Công Sơn'], 3, 'Trịnh Công Sơn — bài hát kêu gọi đoàn kết dân tộc.'),
    Q('Nghe nhạc giúp con người điều gì?', ['Thư giãn, nuôi dưỡng cảm xúc, phát triển thẩm mỹ', 'Không tác dụng gì', 'Gây căng thẳng', 'Chỉ tốn thời gian'], 0, 'Âm nhạc có vai trò lớn trong đời sống tinh thần.'),
    Q('Khi nghe một tác phẩm âm nhạc, ta nên chú ý điều gì để cảm thụ?', ['Giai điệu, tiết tấu, lời ca và cảm xúc tác phẩm gợi lên', 'Bỏ qua phần nhạc', 'Chỉ cần xem ai hát', 'Chỉ chú ý quần áo ca sĩ'], 0, 'Cảm thụ = nghe có chủ đích, phân tích các yếu tố âm nhạc.'),
  ]),

  M(16, 'Đọc nhạc đơn giản', [
    Q('Trong khoá Sol, nốt nằm ở khe thứ nhất (giữa dòng 1 và 2) là nốt gì?', ['Fa', 'La (nằm ở khe thứ hai)', 'Mi (nằm ở dòng kẻ thứ nhất)', 'Sol (nằm ở dòng kẻ thứ hai)'], 0, 'Khe 1 (dưới lên) là nốt Fa.'),
    Q('Nốt nằm ở dòng kẻ thứ 3 (giữa khuông) trong khoá Sol là?', ['Đô (nằm ở dòng kẻ phụ dưới khuông)', 'La (nằm ở khe thứ hai)', 'Rê (nằm ở khe phụ dưới dòng 1)', 'Si'], 3, 'Dòng 3 = nốt Si.'),
    Q('Khi đọc nhạc, "xướng âm" có nghĩa là gì?', ['Vỗ tay theo nhịp', 'Hát bằng nguyên âm a', 'Nói thầm trong đầu', 'Đọc tên nốt theo cao độ Đô – Rê – Mi… đúng giai điệu'], 3, 'Xướng âm = sing với tên nốt, đúng cao độ + trường độ.'),
    Q('Trước khi đọc nhạc một bài, bước đầu tiên thường là?', ['Đọc cuối bài trước', 'Xác định khoá, số chỉ nhịp và đọc tên các nốt', 'Hát to nhất có thể', 'Bỏ qua nhịp'], 1, 'Đọc khoá và nhịp giúp định hướng cao độ + tiết tấu.'),
    Q('Trong khoá Sol, nốt Đô (giữa) thường nằm ở vị trí nào?', ['Khe 4 (giữa dòng 4 và dòng 5)', 'Dòng kẻ phụ ngay dưới khuông nhạc', 'Dòng 5', 'Dòng 3'], 1, 'Đô (C4 - "Đô giữa") nằm trên 1 dòng kẻ phụ ở dưới khuông khoá Sol.'),
    Q('Vỗ tay theo nhịp khi đọc nhạc giúp ích điều gì?', ['Không có tác dụng', 'Thay cho việc đọc nốt', 'Giữ tiết tấu ổn định, không bị lệch nhịp', 'Để gây tiếng động vui'], 2, 'Vỗ tay = "metronome cơ thể" giúp giữ nhịp.'),
  ]),

  M(17, 'Hát kết hợp vỗ tay theo nhịp', [
    Q('Vỗ tay theo nhịp 2/4 thường có mấy tiếng vỗ trong 1 ô nhịp?', ['2', '4', '1', '3'], 0, 'Nhịp 2/4 có 2 phách → vỗ 2 lần (1 mạnh, 1 nhẹ).'),
    Q('Vỗ tay theo nhịp giúp ích gì cho người hát?', ['Hát to hơn', 'Quên lời', 'Hát nhanh hơn nhịp', 'Giữ nhịp ổn định và cảm nhận tiết tấu rõ hơn'], 3, 'Vỗ tay đồng bộ với nhịp giúp hát đều và đúng nhịp.'),
    Q('"Phách mạnh" và "phách nhẹ" khác nhau ở điểm nào khi vỗ tay?', ['Tốc độ vỗ tay khác hoàn toàn', 'Số lần vỗ', 'Hình dáng bàn tay', 'Lực vỗ – mạnh dồn vào phách mạnh, nhẹ ở phách nhẹ'], 3, 'Phách mạnh cần lực rõ ràng hơn để nổi bật tiết tấu.'),
    Q('Khi hát đồng ca, các thành viên cần làm gì để hát đều?', ['Hát to át người khác', 'Mỗi người tự ý hát', 'Hát sai lời cho vui', 'Cùng nghe tín hiệu nhịp và bắt đầu, kết thúc đồng thời'], 3, 'Đồng ca cần đồng đều cả nhịp – cao độ – lời.'),
    Q('Ngoài vỗ tay, có thể giữ nhịp bằng cách nào khác?', ['Dậm chân, gõ bút lên bàn, dùng song loan', 'Vẽ tranh', 'Im lặng tuyệt đối', 'Hét to'], 0, 'Có thể dùng nhiều cử động cơ thể hoặc nhạc cụ gõ đơn giản.'),
    Q('Khi vỗ tay theo bài nhịp 4/4, mẫu hình "mạnh – nhẹ – mạnh vừa – nhẹ" ứng với phách nào?', ['Phách 1, 2, 3, 4 theo thứ tự', 'Không có quy luật', 'Tất cả phách đều mạnh', 'Chỉ phách 4 mạnh'], 0, 'Đó là sơ đồ chuẩn của nhịp 4/4.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1 – Âm nhạc', [
    Q('Khuông nhạc có mấy dòng kẻ?', ['3', '5', '6', '4'], 1, 'Ôn lại tuần 2: 5 dòng kẻ.'),
    Q('Nốt tròn = mấy phách trong nhịp 4/4?', ['4', '1', '3', '2'], 0, 'Ôn tuần 3: nốt tròn = 4 phách.'),
    Q('Quốc ca Việt Nam có tên là gì?', ['Lên đàng', 'Diệt phát xít', 'Tiến quân ca', 'Hành khúc Đoàn'], 2, 'Ôn tuần 14.'),
    Q('Đàn nhị có mấy dây?', ['1', '2', '4', '3'], 1, 'Ôn tuần 10: đàn nhị 2 dây.'),
    Q('Nhịp 3/4 có bao nhiêu phách mỗi ô nhịp?', ['3', '4', '6', '2'], 0, 'Ôn tuần 5.'),
    Q('Bài "Tiếng chuông và ngọn cờ" do ai sáng tác?', ['Trịnh Công Sơn', 'Hoàng Vân', 'Phạm Tuyên', 'Văn Cao'], 2, 'Ôn tuần 8.'),
    Q('Dấu lặng trong âm nhạc biểu thị điều gì?', ['Hát nhanh', 'Đổi nhạc cụ', 'Hát to', 'Im lặng có trường độ'], 3, 'Ôn tuần 6.'),
  ]),

  // ───────────── HK2 — MỸ THUẬT ─────────────

  M(19, 'Yếu tố tạo hình: đường nét – hình – mảng', [
    Q('"Đường nét" trong mỹ thuật là gì?', ['Vệt do bút/cọ tạo ra, có thể thẳng, cong, gấp khúc…', 'Tên một hoạ sĩ', 'Một loại màu', 'Một dụng cụ vẽ'], 0, 'Đường nét là yếu tố tạo hình cơ bản nhất.'),
    Q('Đường thẳng đứng thường gợi cảm giác gì?', ['Vững chãi, trang nghiêm', 'Buồn chán', 'Náo nhiệt, hỗn loạn', 'Mềm mại, dịu dàng'], 0, 'Đường đứng → cảm giác vững chãi (cột, cây cao…).'),
    Q('Đường cong thường gợi cảm giác gì?', ['Cứng nhắc', 'Khô khan', 'Mềm mại, uyển chuyển', 'Đứt đoạn'], 2, 'Đường cong → cảm giác chuyển động, mềm mại.'),
    Q('"Mảng" trong mỹ thuật là gì?', ['Phần bề mặt được giới hạn bởi đường nét hoặc khác biệt màu', 'Tên một bài hát', 'Một loại giấy', 'Một loại bút vẽ'], 0, 'Mảng = vùng bề mặt khép kín.'),
    Q('Trong một bức tranh, mảng lớn thường tạo cảm giác gì?', ['Mờ nhạt', 'Chìm xuống làm nền phụ', 'Nhỏ bé', 'Bề thế, làm trọng tâm'], 3, 'Mảng lớn thường giữ vai trò chủ đạo trong bố cục.'),
    Q('Sự kết hợp giữa đường nét, hình và mảng tạo nên điều gì?', ['Âm thanh', 'Mùi của tranh', 'Nhiệt độ', 'Bố cục và hình thức của tác phẩm'], 3, 'Đó là các yếu tố tạo hình cơ bản tạo nên bố cục.'),
  ]),

  M(20, 'Màu sắc cơ bản', [
    Q('Ba màu cơ bản (màu chính) trong hội hoạ là?', ['Đỏ – Vàng – Xanh lam', 'Đen – Trắng – Xám', 'Nâu – Lục – Lam', 'Hồng – Cam – Tím'], 0, '3 màu cơ bản (primary): đỏ, vàng, xanh lam.'),
    Q('Vì sao chúng được gọi là "màu cơ bản"?', ['Vì rẻ nhất', 'Vì là màu phổ biến', 'Vì không thể pha từ các màu khác', 'Vì đẹp nhất'], 2, 'Màu cơ bản = không pha được từ màu khác.'),
    Q('Ba màu phụ (bậc 2) là?', ['Hồng – Nâu – Be', 'Đen – Xám – Trắng', 'Đỏ – Cam – Vàng', 'Cam – Lục – Tím'], 3, '3 màu phụ tạo từ pha 2 màu chính.'),
    Q('Đỏ + Vàng = màu gì?', ['Cam', 'Lục (xanh lá tươi)', 'Tím (tím hoa cà)', 'Nâu (nâu đất)'], 0, 'Đỏ + Vàng → Cam.'),
    Q('Vàng + Xanh lam = màu gì?', ['Cam (cam đậm)', 'Tím (tím Huế)', 'Hồng (hồng phấn)', 'Lục (xanh lá)'], 3, 'Vàng + Lam → Lục.'),
    Q('Đỏ + Xanh lam = màu gì?', ['Đen (đen tuyền)', 'Tím', 'Cam (cam tươi)', 'Lục (xanh lá cây)'], 1, 'Đỏ + Lam → Tím.'),
  ]),

  M(21, 'Pha màu và vòng tròn màu', [
    Q('"Vòng tròn màu" (color wheel) sắp xếp các màu theo nguyên tắc nào?', ['Theo giá tiền', 'Theo chữ cái', 'Theo thứ tự quang phổ và quan hệ pha trộn', 'Theo kích thước'], 2, 'Vòng tròn màu thể hiện mối quan hệ pha trộn của các màu.'),
    Q('Hai màu nằm ĐỐI DIỆN nhau trên vòng tròn màu gọi là?', ['Màu xám', 'Màu trung tính', 'Màu tương phản (bổ túc)', 'Màu cùng tông'], 2, 'Đối diện = màu bổ túc (complementary): đỏ ↔ lục, vàng ↔ tím, lam ↔ cam.'),
    Q('Đặt cạnh nhau một màu và màu bổ túc của nó thì sao?', ['Không có gì khác biệt', 'Biến thành xám', 'Cả hai cùng được tôn lên, rực rỡ và nổi bật', 'Hoà lẫn thành một sắc trung tính'], 2, 'Cặp bổ túc tạo tương phản mạnh, làm tôn lẫn nhau.'),
    Q('Bổ túc của màu Đỏ là màu gì?', ['Tím (đối diện Vàng trên vòng màu)', 'Xanh lục', 'Cam (đối diện Lam trên vòng màu)', 'Vàng (đối diện Tím trên vòng màu)'], 1, 'Đỏ ↔ Lục (xanh lá).'),
    Q('Bổ túc của màu Vàng là màu gì?', ['Cam (đối diện Lam trên vòng màu)', 'Hồng (sắc nhạt của Đỏ)', 'Xanh lục', 'Tím'], 3, 'Vàng ↔ Tím.'),
    Q('Để màu thêm sáng, hoạ sĩ pha với màu nào?', ['Trắng', 'Tím (làm màu trầm hơn)', 'Đen (làm tối sắc độ)', 'Xám (làm xỉn màu đi)'], 0, 'Pha trắng → tăng độ sáng (sắc độ nhạt).'),
  ]),

  M(22, 'Đậm – nhạt (sắc độ)', [
    Q('"Đậm – nhạt" trong mỹ thuật chỉ điều gì?', ['Mùi của màu', 'Giá tiền của màu', 'Kích thước của tranh', 'Độ sáng – tối của màu hoặc của hình'], 3, 'Đậm/nhạt = sắc độ — value.'),
    Q('Bậc đậm – nhạt cơ bản gồm những mức nào?', ['Nóng – ấm – lạnh', 'Đỏ – vàng – lam', 'Lớn – vừa – nhỏ', 'Đậm – trung gian – nhạt'], 3, 'Sắc độ thường chia 3 bậc: đậm, vừa, nhạt.'),
    Q('Làm sao để vẽ một quả cam có cảm giác khối tròn?', ['Chỉ vẽ đường viền', 'Tô đều một màu', 'Chỉ dùng màu đen', 'Sử dụng đậm – nhạt: vùng sáng, vùng tối, bóng đổ'], 3, 'Đậm nhạt là yếu tố tạo cảm giác khối, chiều sâu.'),
    Q('Vùng sáng nhất trên một vật khối khi có ánh sáng chiếu vào gọi là?', ['Bóng đổ', 'Vùng tối', 'Vùng phản quang', 'Điểm sáng (highlight)'], 3, 'Highlight = điểm sáng nhất, thường nơi ánh sáng trực tiếp chạm vào.'),
    Q('Bóng đổ là gì?', ['Tên một hoạ sĩ', 'Vùng tối do vật chắn ánh sáng tạo ra trên bề mặt phía sau/dưới', 'Vùng sáng nhất', 'Màu cơ bản'], 1, 'Bóng đổ giúp xác định vị trí vật trong không gian.'),
    Q('Vẽ chì có thể tạo đậm nhạt bằng cách nào?', ['Tô lực mạnh – nhẹ, dùng các kỹ thuật gạch chéo, di mảng…', 'Chỉ chấm một điểm', 'Không thể tạo đậm nhạt với chì', 'Chỉ kẻ đường viền'], 0, 'Chì có dải sắc độ rất rộng nhờ điều khiển lực ấn và kỹ thuật.'),
  ]),

  M(23, 'Phối cảnh đơn giản', [
    Q('Nguyên tắc "gần lớn – xa nhỏ" thuộc về kỹ thuật nào?', ['Pha màu', 'Đậm nhạt', 'Phối cảnh (perspective)', 'Vẽ chân dung'], 2, 'Đó là một quy tắc cơ bản của phối cảnh.'),
    Q('Khi vẽ một con đường thẳng đi xa, hai mép đường sẽ có xu hướng gì?', ['Vẽ ngẫu nhiên', 'Song song hoàn toàn', 'Tách rộng ra mãi', 'Tiến lại gần nhau và hội tụ tại 1 điểm ở đường chân trời'], 3, 'Đường thẳng song song trong không gian, khi vẽ phối cảnh sẽ hội tụ về một điểm (điểm tụ).'),
    Q('"Đường chân trời" trong phối cảnh là gì?', ['Đường biên dưới của tranh', 'Đường ngẫu nhiên', 'Đường ngang tưởng tượng ngang tầm mắt người quan sát', 'Đường biên trên của tranh'], 2, 'Đường chân trời = horizon — ngang tầm mắt người nhìn.'),
    Q('"Điểm tụ" là gì?', ['Tên hoạ sĩ', 'Tên một loại bút', 'Điểm mà các đường song song hội tụ về trong tranh', 'Một loại màu'], 2, 'Vanishing point — điểm tụ trên đường chân trời.'),
    Q('Vật ở xa thường được vẽ như thế nào về kích thước và độ rõ?', ['To hơn vật gần', 'Nhỏ hơn và mờ hơn so với vật gần', 'Y hệt vật gần', 'Rõ nét hơn vật gần'], 1, 'Khoảng cách → giảm kích thước biểu kiến và độ rõ.'),
    Q('Phối cảnh giúp tranh có cảm giác gì?', ['Không gian ba chiều, chiều sâu', 'Phẳng lì', 'Lộn xộn', 'Chỉ trang trí cho đẹp mắt'], 0, 'Phối cảnh = công cụ tạo không gian 3D trên mặt phẳng 2D.'),
  ]),

  M(24, 'Tỉ lệ cơ thể người (cơ bản)', [
    Q('Theo cách dạy vẽ cơ bản, chiều cao cơ thể người trưởng thành thường bằng khoảng mấy lần chiều cao đầu?', ['10 đầu', '6 đầu', '7–8 đầu', '5 đầu'], 2, 'Quy ước cổ điển: người lớn ~ 7–8 đầu.'),
    Q('Tỉ lệ cơ thể trẻ em (so với người lớn) thường có đặc điểm gì?', ['Đầu chiếm tỉ lệ lớn hơn so với cơ thể', 'Đầu nhỏ hơn', 'Tay rất dài', 'Chân rất dài'], 0, 'Trẻ nhỏ ~ 4–5 đầu, tỉ lệ đầu lớn hơn người lớn.'),
    Q('Trong vẽ tỉ lệ cơ thể, "đầu" được dùng làm gì?', ['Phần không cần vẽ', 'Không liên quan', 'Đơn vị đo cơ bản để dóng tỉ lệ các bộ phận', 'Chỉ để tô màu'], 2, 'Đầu = đơn vị quy chiếu để đo tỉ lệ cơ thể trong vẽ.'),
    Q('Khi vẽ người, vị trí của khuỷu tay thường ngang với phần nào của thân?', ['Eo (thắt lưng)', 'Cổ (phía dưới cằm)', 'Đầu gối', 'Bàn chân'], 0, 'Khuỷu tay khi buông thõng thường ngang với eo/thắt lưng.'),
    Q('Để dáng người đứng cân đối, bước nào nên làm trước khi vẽ chi tiết?', ['Vẽ ngón tay trước', 'Vẽ khung tỉ lệ và đường trục cơ thể', 'Vẽ tóc trước', 'Vẽ giày trước'], 1, 'Dựng khung → chia tỉ lệ → mới vẽ chi tiết.'),
    Q('Vì sao học sinh nên tập vẽ tỉ lệ cơ thể?', ['Không cần thiết', 'Để hình dáng người trong tranh cân đối, chân thực', 'Để khỏi cần dùng màu', 'Để vẽ nhanh hơn'], 1, 'Tỉ lệ giúp hình người không bị "lệch", thiếu tự nhiên.'),
  ]),

  M(25, 'Vẽ tĩnh vật', [
    Q('"Tĩnh vật" trong mỹ thuật là gì?', ['Tranh vẽ các đồ vật không chuyển động (hoa quả, lọ, chai…)', 'Tranh chân dung', 'Tranh vẽ phong cảnh', 'Tranh sinh hoạt'], 0, 'Still life = đồ vật bất động.'),
    Q('Khi sắp xếp mẫu vẽ tĩnh vật, cần lưu ý gì?', ['Phải đặt tất cả thẳng hàng', 'Đặt mọi vật giống hệt nhau', 'Càng nhiều đồ càng tốt', 'Bố cục có chính – phụ, không che lấp hoàn toàn nhau'], 3, 'Bố cục cần có vật chính, vật phụ, có khoảng đặc – rỗng.'),
    Q('Trình tự vẽ tĩnh vật bằng chì thường là?', ['Dựng khung – phác hình – sửa hình – lên đậm nhạt', 'Ngẫu nhiên', 'Tô màu đậm trước, vẽ hình sau', 'Vẽ chi tiết nhỏ trước, dựng khung sau'], 0, 'Quy trình từ tổng thể đến chi tiết.'),
    Q('Khi vẽ một quả tròn, để có cảm giác khối cần thể hiện gì?', ['Vẽ thật to', 'Vùng sáng – vùng tối – bóng đổ', 'Chỉ vẽ đường viền', 'Tô một màu đều'], 1, 'Khối tròn cần ánh sáng – sáng nhất – tối – bóng đổ.'),
    Q('Lọ hoa và quả trong tĩnh vật thường có vị trí ra sao?', ['Lọ ở vị trí cao/lớn làm chủ đạo, quả nhỏ hỗ trợ', 'Không cần lọ', 'Phải đặt sát mép tranh', 'Lọ luôn nhỏ hơn quả'], 0, 'Vật lớn thường làm chủ đạo, các vật phụ tôn thêm.'),
    Q('Ánh sáng chiếu vào mẫu giúp ích gì cho người vẽ?', ['Tạo vùng sáng – tối rõ ràng để thể hiện khối', 'Không cần thiết', 'Đổi màu mẫu', 'Làm mẫu chuyển động'], 0, 'Có ánh sáng → có khối → vẽ dễ và đẹp hơn.'),
  ]),

  M(26, 'Vẽ chân dung cơ bản', [
    Q('Khuôn mặt người, đường nào sau đây thường được dùng làm đường trục để dóng tỉ lệ?', ['Đường chéo qua tai', 'Đường thẳng dọc giữa mặt và đường ngang qua mắt', 'Đường ngẫu nhiên', 'Đường vòng quanh đầu'], 1, 'Trục dọc + trục ngang qua mắt là cơ sở dóng tỉ lệ.'),
    Q('Mắt người (người trưởng thành) thường nằm ở vị trí nào trên khuôn mặt?', ['Sát đỉnh đầu', 'Không có vị trí cụ thể', 'Sát cằm', 'Khoảng giữa chiều cao khuôn mặt'], 3, 'Quy ước: mắt nằm ~ giữa chiều cao đầu (từ đỉnh đầu xuống cằm).'),
    Q('Khoảng cách giữa hai mắt thường bằng?', ['Bằng độ rộng của 1 con mắt', 'Bằng chiều dài cả khuôn mặt', 'Không có quy luật', 'Lớn hơn 3 con mắt'], 0, 'Khoảng cách giữa 2 mắt ≈ độ rộng 1 con mắt.'),
    Q('Khi vẽ chân dung, đặc điểm nào quan trọng để giống mẫu?', ['Chỉ tô đậm nhất có thể', 'Tỉ lệ tổng thể và các nét đặc trưng (mắt, mũi, miệng)', 'Vẽ thật to mọi thứ', 'Vẽ thật nhiều chi tiết tóc'], 1, 'Đặc điểm cá nhân nằm ở tỉ lệ + nét đặc trưng.'),
    Q('"Chân dung tự hoạ" là gì?', ['Hoạ sĩ vẽ chân dung chính mình', 'Tranh trừu tượng', 'Tranh vẽ phong cảnh', 'Tranh nhóm người'], 0, 'Self-portrait — hoạ sĩ tự vẽ mình.'),
    Q('Khi vẽ chân dung trẻ em so với người lớn, ta nên làm sao?', ['Vẽ mặt rất dài', 'Vẽ trán cao, mắt to, má đầy đặn hơn', 'Vẽ không có mắt', 'Vẽ giống hệt người lớn'], 1, 'Trẻ em có tỉ lệ đầu/mặt khác người lớn — trán cao, mắt to.'),
  ]),

  M(27, 'Vẽ tranh đề tài quê hương', [
    Q('Khi vẽ tranh đề tài "quê hương", hình ảnh nào thường xuất hiện?', ['Cây đa, giếng nước, mái đình, cánh đồng, dòng sông…', 'Tàu vũ trụ', 'Sa mạc Sahara', 'Toà nhà chọc trời nước ngoài'], 0, 'Quê hương Việt Nam gắn với hình ảnh làng quê truyền thống.'),
    Q('Bố cục tranh đề tài quê hương nên có yếu tố gì để hấp dẫn?', ['Vẽ một hình duy nhất chính giữa', 'Tô kín tranh bằng một màu', 'Không cần bố cục', 'Có chính – phụ, có gần – xa (chiều sâu)'], 3, 'Bố cục có chính phụ + gần xa tạo chiều sâu và sức hút.'),
    Q('Màu sắc thường dùng để diễn tả cảnh đồng quê yên bình là?', ['Tông xanh (lục, lam) và vàng ấm của lúa, nắng', 'Toàn tím đậm', 'Toàn xám', 'Đen – đỏ chói gay gắt'], 0, 'Tông màu thiên nhiên (lục, lam, vàng) gợi cảm giác êm dịu, ấm áp.'),
    Q('"Tiền cảnh – trung cảnh – hậu cảnh" trong tranh phong cảnh là gì?', ['Ba màu chính', 'Ba khung tranh khác nhau', 'Ba lớp xa gần để tạo chiều sâu cho không gian', 'Ba đề tài khác nhau'], 2, 'Tiền cảnh (gần) – trung cảnh – hậu cảnh (xa) là cách phân lớp không gian.'),
    Q('Để cảnh hoàng hôn quê hương sống động, nên dùng tông màu nào?', ['Chỉ xanh lam đậm', 'Cam – hồng – đỏ ấm pha tím', 'Chỉ lục đậm', 'Chỉ trắng đen'], 1, 'Tông hoàng hôn = cam, hồng, đỏ ấm pha tím.'),
    Q('Vẽ tranh đề tài quê hương giúp giáo dục điều gì?', ['Tình yêu quê hương đất nước', 'Sự thờ ơ', 'Tinh thần thi đua tiền bạc', 'Không có ý nghĩa'], 0, 'Đề tài quê hương nuôi dưỡng tình cảm gắn bó với cội nguồn.'),
  ]),

  M(28, 'Vẽ tranh đề tài gia đình', [
    Q('Đề tài "gia đình" có thể khai thác hoạt động nào?', ['Đánh nhau', 'Cãi vã', 'Bỏ nhà ra đi', 'Bữa cơm sum vầy, dã ngoại, dạy em học, ngày Tết bên nhau…'], 3, 'Khai thác khoảnh khắc tích cực, ấm áp.'),
    Q('Nhân vật chính trong tranh gia đình thường được bố trí ở vị trí nào?', ['Vị trí trọng tâm, dễ nhìn, hoạt động rõ ràng', 'Ngoài khung tranh', 'Bị che khuất hoàn toàn', 'Sát mép tranh'], 0, 'Nhân vật chính cần trọng tâm và bộc lộ cảm xúc rõ ràng.'),
    Q('Cảm xúc của các nhân vật được thể hiện chủ yếu qua đâu?', ['Nét mặt, dáng người và sự tương tác giữa các nhân vật', 'Không thể hiện được', 'Chỉ qua màu nền', 'Chỉ qua khung tranh'], 0, 'Cảm xúc = nét mặt + dáng cử chỉ + tương tác.'),
    Q('Tông màu nào thường gợi không khí ấm áp gia đình?', ['Đen – xám lạnh', 'Lam đậm lạnh', 'Tím đen u tối', 'Cam, vàng, nâu nhẹ'], 3, 'Tông màu ấm tạo cảm giác ấm cúng, thân mật.'),
    Q('Sắp xếp 4 thành viên gia đình trong tranh, nên tránh điều gì?', ['Có khoảng đặc và rỗng', 'Có người chính người phụ', 'Sắp một hàng ngang đơn điệu, không có nhịp cao thấp', 'Có người ngồi, người đứng'], 2, 'Tránh đội hình thẳng tắp đơn điệu — nên có lớp lang, cao thấp.'),
    Q('Đề tài gia đình giúp HS phát triển kỹ năng nào?', ['Bố cục nhiều nhân vật, quan sát đời sống và biểu cảm', 'Không phát triển gì', 'Chỉ vẽ đồ vật', 'Chỉ vẽ phong cảnh'], 0, 'Đa nhân vật + đời sống = đề tài rèn nhiều kỹ năng cùng lúc.'),
  ]),

  M(29, 'Trang trí hình vuông', [
    Q('Trục đối xứng của hình vuông cơ bản gồm những đường nào?', ['Chỉ 1 đường ngang', '2 đường chéo và 2 đường nối trung điểm cạnh đối diện (4 trục)', 'Chỉ 1 đường chéo', 'Không có trục'], 1, 'Hình vuông có 4 trục đối xứng.'),
    Q('Trang trí hình vuông thường sử dụng nguyên tắc nào?', ['Đối xứng qua trục và cân bằng giữa các góc', 'Vẽ ngẫu nhiên không quy luật', 'Bỏ trống', 'Chỉ tô một màu'], 0, 'Đối xứng + cân bằng là nguyên tắc chủ đạo.'),
    Q('Khi trang trí hình vuông, vị trí nào thường được làm nổi bật nhất?', ['Một góc duy nhất', 'Ngoài hình vuông', 'Tâm hình vuông', 'Mép ngoài'], 2, 'Tâm hình vuông thường là điểm trọng tâm thị giác.'),
    Q('Hoạ tiết trang trí hình vuông thường lấy từ đâu?', ['Chữ viết tự do', 'Không cần hoạ tiết', 'Hoa lá, hình hình học, hoạ tiết dân tộc', 'Sao chép nguyên tranh sơn dầu'], 2, 'Hoạ tiết cách điệu từ tự nhiên hoặc hình học/dân tộc.'),
    Q('Màu sắc trong trang trí hình vuông nên có?', ['Chỉ 1 sắc độ duy nhất', 'Quá nhiều màu hỗn loạn', 'Toàn màu đen', 'Chính – phụ rõ ràng, hài hoà'], 3, 'Phối màu chính – phụ, cân bằng nóng – lạnh tạo hài hoà.'),
    Q('Sản phẩm trang trí hình vuông có thể ứng dụng vào đâu?', ['Chỉ treo bảo tàng', 'Không ứng dụng được', 'Chỉ để trong sách', 'Gạch hoa, khăn tay, thiệp, hộp quà'], 3, 'Trang trí hình vuông phổ biến trong nhiều sản phẩm thực tế.'),
  ]),

  M(30, 'Trang trí hình tròn', [
    Q('Hình tròn có bao nhiêu trục đối xứng?', ['1', '4', '2', 'Vô số'], 3, 'Hình tròn có vô số trục đối xứng đi qua tâm.'),
    Q('Trang trí hình tròn thường dùng nguyên tắc nào?', ['Đối xứng trục dọc duy nhất', 'Đối xứng tâm (xoay quanh tâm)', 'Không cần đối xứng', 'Đối xứng chéo'], 1, 'Hình tròn thường dùng đối xứng xoay/đối xứng tâm.'),
    Q('Hoạ tiết hình tròn thường được tổ chức thành?', ['Một điểm duy nhất', 'Ngẫu nhiên hoàn toàn', 'Hàng ngang đơn lẻ', 'Các vòng đồng tâm hoặc các cánh xoè đều quanh tâm'], 3, 'Tổ chức theo vòng hoặc cánh đều.'),
    Q('Trống đồng Đông Sơn có mặt trống được trang trí theo kiểu gì?', ['Hàng dọc đơn giản', 'Đối xứng tâm, các vòng đồng tâm với ngôi sao ở giữa', 'Không có trang trí', 'Trang trí ngẫu nhiên'], 1, 'Mặt trống đồng Đông Sơn là ví dụ kinh điển của trang trí hình tròn.'),
    Q('Tâm hình tròn thường được dùng để làm gì?', ['Để trống bắt buộc', 'Đặt hoạ tiết trọng tâm hoặc điểm nhấn', 'Không bao giờ tô màu', 'Cắt bỏ'], 1, 'Tâm thường giữ vai trò điểm nhấn.'),
    Q('Trang trí hình tròn có thể ứng dụng vào sản phẩm nào?', ['Chỉ trang trí giấy', 'Chỉ trên đồng phục', 'Đĩa, đồng hồ, huy hiệu, biển báo, mâm…', 'Không ứng dụng được'], 2, 'Rất nhiều vật dụng hình tròn cần trang trí.'),
  ]),

  M(31, 'Xé dán giấy màu', [
    Q('Kỹ thuật "xé dán" trong mỹ thuật là gì?', ['Nặn tượng đất sét', 'In khắc gỗ', 'Vẽ bằng chì', 'Tạo hình bằng cách xé giấy thành mảng rồi dán lên nền'], 3, 'Xé dán = collage truyền thống cấp THCS.'),
    Q('Điểm khác biệt giữa xé và cắt khi tạo hình giấy là gì?', ['Cắt không thể tạo hình', 'Xé luôn xấu hơn cắt', 'Xé tạo cạnh mềm, tự nhiên; cắt cho cạnh sắc, gọn', 'Hoàn toàn giống nhau'], 2, 'Cạnh xé "mềm", có cảm giác mộc — đặc trưng của xé dán.'),
    Q('Khi xé dán tranh đề tài tự nhiên (cây, mây, đồi…), nên ưu tiên kỹ thuật nào?', ['Chỉ cắt thẳng', 'Xé để tạo cảm giác mềm tự nhiên của lá, mây', 'Bỏ qua tạo hình', 'Chỉ vẽ bút'], 1, 'Cây, mây, đồi… có hình tự nhiên → kỹ thuật xé phù hợp.'),
    Q('Trình tự thực hiện xé dán cơ bản là gì?', ['Phác bố cục → xé các mảng hình → sắp xếp → dán cố định', 'Dán trước, phác bố cục sau', 'Tô màu trước, xé sau', 'Ngẫu nhiên'], 0, 'Bố cục trước, xé hình các mảng, sắp xếp thử, rồi dán.'),
    Q('Vì sao xé dán phù hợp với HS bắt đầu học tạo hình?', ['Không cần kỹ năng vẽ chi tiết, dễ tạo bố cục mảng lớn', 'Vì tốn nhiều thời gian', 'Vì cần thiết bị đắt tiền', 'Vì rất khó'], 0, 'Xé dán dễ tiếp cận, phát huy sáng tạo nhanh.'),
    Q('Chất liệu chính của tranh xé dán cấp THCS thường là?', ['Đồng đúc', 'Sơn dầu', 'Đất sét', 'Giấy màu, giấy báo, giấy thủ công'], 3, 'Chủ yếu là các loại giấy phổ thông.'),
  ]),

  M(32, 'Tranh dân gian Đông Hồ', [
    Q('Tranh Đông Hồ là dòng tranh dân gian của vùng nào?', ['Hà Nội', 'Huế (cố đô miền Trung)', 'Bắc Ninh', 'Sài Gòn'], 2, 'Tranh Đông Hồ — Làng Đông Hồ, Thuận Thành, Bắc Ninh.'),
    Q('Tranh Đông Hồ được làm bằng kỹ thuật chủ yếu nào?', ['Vẽ sơn dầu', 'Chụp ảnh', 'In offset hiện đại', 'Khắc gỗ và in trên giấy điệp'], 3, 'Khắc bản gỗ, in từng màu trên giấy dó quét điệp.'),
    Q('"Giấy điệp" là loại giấy gì?', ['Giấy nhựa', 'Giấy dó quét lớp bột vỏ điệp (sò biển) tạo lấp lánh', 'Giấy bạc kim loại', 'Giấy báo'], 1, 'Giấy điệp = giấy dó phủ bột vỏ điệp, đặc trưng Đông Hồ.'),
    Q('Bức tranh Đông Hồ nào sau đây nổi tiếng?', ['"Đám cưới chuột", "Vinh hoa", "Phú quý", "Lợn đàn"', '"Tiếng thét"', '"Mona Lisa"', '"Đêm đầy sao"'], 0, 'Đám cưới chuột, Vinh hoa, Phú quý… là tranh Đông Hồ kinh điển.'),
    Q('Màu sắc trong tranh Đông Hồ chủ yếu lấy từ đâu?', ['Không có màu', 'Nguyên liệu tự nhiên: than tre, lá chàm, hoa hoè, son…', 'Sơn dầu nước ngoài', 'Hoá chất công nghiệp'], 1, 'Màu tự nhiên — đặc sản và giá trị của tranh Đông Hồ.'),
    Q('Tranh Đông Hồ thường được mua bán nhiều vào dịp nào?', ['Ngày Nhà giáo', 'Quốc khánh', 'Tết Nguyên đán', 'Trung thu'], 2, 'Truyền thống treo tranh Đông Hồ vào dịp Tết.'),
  ]),

  M(33, 'Tranh dân gian Hàng Trống', [
    Q('Tranh Hàng Trống có nguồn gốc ở đâu?', ['Phố Hàng Trống, Hà Nội', 'Cần Thơ', 'Huế (làng Sình ven sông Hương)', 'Bắc Ninh'], 0, 'Tranh Hàng Trống có nguồn gốc từ phố Hàng Trống, Hà Nội.'),
    Q('Kỹ thuật làm tranh Hàng Trống có gì khác Đông Hồ?', ['Vẽ tay từ A đến Z không in', 'Dùng máy in offset', 'In hoàn toàn bằng nhiều ván màu như Đông Hồ', 'Chỉ in nét đen bằng ván khắc, sau đó tô màu bằng tay (bút lông)'], 3, 'Hàng Trống = in nét + tô màu thủ công, khác Đông Hồ in nhiều ván.'),
    Q('Tranh Hàng Trống thường có chủ đề chủ đạo nào?', ['Trừu tượng hiện đại', 'Tranh thờ, tranh tứ bình, tranh sinh hoạt – phong cảnh', 'Khoa học viễn tưởng', 'Hoạt hình Nhật Bản'], 1, 'Hàng Trống nổi tiếng với tranh thờ và tranh tứ bình.'),
    Q('Màu sắc tranh Hàng Trống thường dùng có đặc điểm gì?', ['Toàn xám', 'Chỉ một màu duy nhất', 'Chỉ đen trắng', 'Tươi sáng, có vờn đậm – nhạt mềm mại do tô tay'], 3, 'Tô tay → có dải đậm nhạt mềm, không "phẳng" như in đơn sắc.'),
    Q('Giấy dùng trong tranh Hàng Trống là loại gì?', ['Giấy dó (không quét điệp như Đông Hồ)', 'Giấy báo', 'Giấy nhôm', 'Giấy nhựa'], 0, 'Cũng dùng giấy dó nhưng không quét điệp.'),
    Q('Việc bảo tồn tranh Đông Hồ và Hàng Trống có ý nghĩa gì?', ['Cản trở phát triển', 'Gìn giữ di sản văn hoá truyền thống dân tộc', 'Không cần thiết', 'Chỉ là sở thích cá nhân'], 1, 'Cả hai đều là di sản văn hoá cần được bảo tồn và phát huy.'),
  ]),

  M(34, 'Một số tác phẩm mỹ thuật thế giới nổi tiếng', [
    Q('Bức tranh "Mona Lisa" do hoạ sĩ nào vẽ?', ['Pablo Picasso', 'Vincent van Gogh', 'Michelangelo', 'Leonardo da Vinci'], 3, 'Leonardo da Vinci vẽ Mona Lisa, hiện trưng bày tại bảo tàng Louvre (Paris).'),
    Q('"Mona Lisa" thuộc thời kỳ nghệ thuật nào?', ['Phục hưng (Italia)', 'Trung Cổ', 'Lập thể', 'Ấn tượng'], 0, 'Mona Lisa là tác phẩm thời Phục hưng Ý.'),
    Q('Hoạ sĩ Vincent van Gogh nổi tiếng với bức tranh nào sau đây?', ['Hoa hướng dương (Sunflowers)', 'Bữa tiệc ly', 'Thiếu nữ bên hoa huệ', 'Sự sáng tạo Adam'], 0, '"Sunflowers" là loạt tranh nổi tiếng nhất của Van Gogh.'),
    Q('Phong cách của Van Gogh thuộc trào lưu nào?', ['Phục hưng', 'Lập thể', 'Hậu ấn tượng (Post-Impressionism)', 'Pop art'], 2, 'Van Gogh là đại diện tiêu biểu của Hậu ấn tượng.'),
    Q('Bức "Đêm đầy sao" (The Starry Night) là của ai?', ['Claude Monet', 'Vincent van Gogh', 'Salvador Dalí', 'Leonardo da Vinci'], 1, '"The Starry Night" (1889) của Van Gogh — kiệt tác hậu ấn tượng.'),
    Q('Vì sao học sinh nên tiếp xúc với tác phẩm mỹ thuật thế giới?', ['Để chép theo y nguyên', 'Để chê bai', 'Mở rộng hiểu biết văn hoá, phát triển thẩm mỹ', 'Không cần thiết'], 2, 'Tiếp xúc tác phẩm lớn giúp mở rộng tầm nhìn và thẩm mỹ.'),
  ]),

  M(35, 'Mỹ thuật ứng dụng', [
    Q('"Mỹ thuật ứng dụng" là gì?', ['Điêu khắc đá hoa cương', 'Mỹ thuật phục vụ đời sống — thiết kế đồ vật, sản phẩm, truyền thông', 'Vẽ tranh treo bảo tàng', 'Múa rối nước'], 1, 'Applied art = mỹ thuật ứng dụng vào sản phẩm/đời sống.'),
    Q('Logo của một thương hiệu thuộc lĩnh vực thiết kế nào?', ['Thiết kế đồ hoạ (graphic design)', 'Kiến trúc', 'Hội hoạ sơn dầu', 'Điêu khắc'], 0, 'Logo là sản phẩm thiết kế đồ hoạ.'),
    Q('Một logo tốt cần có đặc điểm gì?', ['Càng rối càng tốt', 'Càng nhiều màu càng đẹp', 'Đơn giản, dễ nhận diện, ý nghĩa, dùng được ở nhiều kích thước', 'Chỉ có chữ rất nhỏ'], 2, 'Đơn giản + dễ nhận diện là tiêu chuẩn cốt lõi.'),
    Q('Khi thiết kế poster (áp phích) tuyên truyền, yếu tố nào quan trọng nhất?', ['Càng nhiều chữ càng tốt', 'Không cần thông điệp', 'Chỉ cần đẹp mắt', 'Thông điệp rõ ràng, hình ảnh ấn tượng, chữ dễ đọc'], 3, 'Poster = truyền thông trực quan — thông điệp + hình + chữ.'),
    Q('Bao bì sản phẩm (packaging) thuộc mỹ thuật ứng dụng vì sao?', ['Vì là tranh thờ', 'Vì không có mục đích', 'Vì để trang trí thuần tuý', 'Vì phục vụ chức năng bảo quản và quảng bá sản phẩm'], 3, 'Packaging vừa bảo vệ sản phẩm vừa truyền thông thương hiệu.'),
    Q('Mỹ thuật ứng dụng KHÁC mỹ thuật tạo hình thuần tuý ở chỗ nào?', ['Có tính chức năng – phục vụ đời sống cụ thể', 'Không có gì khác', 'Đẹp hơn hẳn', 'Cũ hơn'], 0, 'Mỹ thuật ứng dụng = đẹp + có chức năng; tạo hình thuần tuý chú trọng giá trị thẩm mỹ – tư tưởng.'),
  ]),

  M(36, 'Ôn tập Học kỳ 2 – Mỹ thuật', [
    Q('Ba màu cơ bản là?', ['Đỏ – Vàng – Xanh lam', 'Đen – Trắng – Xám', 'Lục – Lam – Tím', 'Hồng – Cam – Tím'], 0, 'Ôn tuần 20.'),
    Q('Đỏ + Vàng cho ra màu gì?', ['Tím (do nhầm với Đỏ + Lam)', 'Hồng (do nhầm Đỏ pha Trắng)', 'Cam', 'Lục (do nhầm với Vàng + Lam)'], 2, 'Ôn tuần 20.'),
    Q('Tranh Đông Hồ thuộc tỉnh nào?', ['Bắc Ninh', 'Hà Nội', 'Huế (làng Sình, Thừa Thiên)', 'Hà Nam'], 0, 'Ôn tuần 32.'),
    Q('Bức "Mona Lisa" do ai sáng tác?', ['Van Gogh', 'Michelangelo', 'Picasso', 'Leonardo da Vinci'], 3, 'Ôn tuần 34.'),
    Q('Hình tròn có bao nhiêu trục đối xứng?', ['2', 'Vô số', '1', '4'], 1, 'Ôn tuần 30.'),
    Q('Đường chân trời trong phối cảnh là gì?', ['Đường ngang tưởng tượng ngang tầm mắt người nhìn', 'Đường ngẫu nhiên', 'Đường biên tranh', 'Đường dọc giữa tranh'], 0, 'Ôn tuần 23.'),
    Q('"Mỹ thuật ứng dụng" hướng đến điều gì?', ['Phục vụ đời sống và sản phẩm cụ thể', 'Không có mục đích', 'Chỉ để thi cử', 'Chỉ treo bảo tàng'], 0, 'Ôn tuần 35.'),
  ]),
];

export const S6NT_SCENARIOS = indexBy(S6NT_WEEKS);
