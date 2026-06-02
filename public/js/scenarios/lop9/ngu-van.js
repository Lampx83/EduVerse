// ============================================================
// Lớp 9 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 — năm thi vào lớp 10.
// HK1: thơ hiện đại VN giai đoạn 1945–1975 + truyện ngắn hiện đại.
// HK2: thơ trữ tình sau 1975 + nghị luận xã hội + văn bản nhật dụng.
// ID prefix: "S9NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9NV', 'ngu-van', n, title, qs, opts);

export const S9NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Đồng chí — Chính Hữu', [
    Q('"Đồng chí" của Chính Hữu sáng tác năm nào?', ['1947', '1948', '1954', '1965'], 1, 'Bài thơ ra đời năm 1948, sau chiến dịch Việt Bắc thu đông 1947.'),
    Q('Bài thơ "Đồng chí" thuộc thể thơ?', ['Lục bát', 'Tự do', 'Thất ngôn bát cú', 'Song thất lục bát'], 1, 'Chính Hữu dùng thể tự do, dòng dài ngắn linh hoạt để phù hợp cảm xúc.'),
    Q('Hình ảnh "Đầu súng trăng treo" có ý nghĩa?', ['Sự khốc liệt của chiến tranh', 'Vẻ đẹp lãng mạn và hiện thực hòa quyện trong người lính', 'Nỗi nhớ quê hương', 'Sự cô đơn của người lính'], 1, 'Đây là hình ảnh biểu tượng: súng (hiện thực, chiến đấu) + trăng (lãng mạn) ⇒ vẻ đẹp tâm hồn người lính.'),
    Q('Hai câu "Quê hương anh nước mặn đồng chua / Làng tôi nghèo đất cày lên sỏi đá" cho thấy?', ['Hai người lính cùng xuất thân nông dân nghèo', 'Sự xa cách quê hương', 'Sự giàu có của quê', 'Khung cảnh thiên nhiên'], 0, 'Cùng xuất thân nông dân nghèo từ những vùng khác nhau ⇒ cơ sở của tình đồng chí.'),
    Q('"Đồng chí!" được tách thành 1 câu thơ riêng có tác dụng?', ['Phá vỡ nhịp thơ', 'Như tiếng gọi thiêng liêng, là bản lề kết tinh tình cảm', 'Nhấn mạnh sự xa lạ', 'Không có ý nghĩa đặc biệt'], 1, 'Câu thơ 2 tiếng làm bản lề: khép lại 7 câu lý giải, mở ra hình tượng người đồng chí.'),
    Q('Cảm hứng chủ đạo của bài thơ?', ['Tình yêu đôi lứa', 'Tình đồng chí, đồng đội thiêng liêng', 'Tình mẫu tử', 'Niềm vui chiến thắng'], 1, 'Ngợi ca tình đồng chí — cơ sở của sức mạnh kháng chiến.'),
  ]),

  M(2, 'Bài thơ về tiểu đội xe không kính — Phạm Tiến Duật', [
    Q('Tác phẩm "Bài thơ về tiểu đội xe không kính" trích từ tập?', ['Vầng trăng quầng lửa', 'Đầu súng trăng treo', 'Việt Bắc', 'Đất nước'], 0, 'Trích từ tập "Vầng trăng quầng lửa" (1970) của Phạm Tiến Duật.'),
    Q('Bài thơ viết về người lính ở chiến trường nào?', ['Chống Pháp', 'Chống Mỹ, đường Trường Sơn', 'Biên giới Tây Nam', 'Điện Biên Phủ'], 1, 'Viết về người lính lái xe tải trên đường Trường Sơn thời kháng chiến chống Mỹ.'),
    Q('Vì sao xe không có kính?', ['Vì cũ kỹ', 'Bom đạn chiến tranh làm vỡ', 'Tác giả tưởng tượng', 'Tiết kiệm vật liệu'], 1, '"Không có kính không phải vì xe không có kính / Bom giật bom rung kính vỡ đi rồi".'),
    Q('Giọng điệu chủ đạo của bài thơ?', ['Trầm buồn, da diết', 'Ngang tàng, sôi nổi, lạc quan', 'Bi tráng, thê lương', 'Trang nghiêm, cổ kính'], 1, 'Giọng tự nhiên, ngang tàng, đậm chất lính trẻ — đặc trưng thơ Phạm Tiến Duật.'),
    Q('Câu thơ "Chỉ cần trong xe có một trái tim" thể hiện?', ['Ý chí giải phóng miền Nam, tình yêu Tổ quốc', 'Tình yêu đôi lứa', 'Nỗi cô đơn', 'Sự hi sinh'], 0, '"Trái tim" tượng trưng cho ý chí, lòng yêu nước, quyết tâm giải phóng miền Nam.'),
    Q('Hình ảnh "xe không kính" có ý nghĩa?', ['Là hình ảnh độc đáo, gắn với hiện thực khốc liệt và làm nổi bật vẻ đẹp người lính', 'Sự lạc hậu', 'Sự nghèo nàn vật chất', 'Sự sáng tạo nghệ thuật'], 0, 'Hình ảnh thực + biểu tượng, làm nổi bật bản lĩnh lái xe trong gian khổ.'),
  ]),

  M(3, 'Đoàn thuyền đánh cá — Huy Cận', [
    Q('"Đoàn thuyền đánh cá" sáng tác năm nào?', ['1948', '1958', '1965', '1975'], 1, 'Sáng tác năm 1958, trong chuyến đi thực tế vùng biển Quảng Ninh.'),
    Q('Bối cảnh xã hội của bài thơ?', ['Kháng chiến chống Pháp', 'Miền Bắc xây dựng CNXH sau 1954', 'Kháng chiến chống Mỹ', 'Đất nước thống nhất'], 1, 'Miền Bắc bước vào thời kỳ xây dựng CNXH, không khí lao động hào hứng.'),
    Q('Hình ảnh "Mặt trời xuống biển như hòn lửa" sử dụng biện pháp tu từ?', ['Nhân hóa', 'So sánh', 'Ẩn dụ', 'Hoán dụ'], 1, 'So sánh mặt trời với hòn lửa.'),
    Q('Câu thơ "Thuyền ta lái gió với buồm trăng / Lướt giữa mây cao với biển bằng" thể hiện?', ['Vẻ kì vĩ, tráng lệ của thiên nhiên và tầm vóc con người', 'Sự cô đơn', 'Khó khăn lao động', 'Cảnh hoàng hôn'], 0, 'Bút pháp lãng mạn: con thuyền hòa vào vũ trụ, con người sánh ngang tầm vóc thiên nhiên.'),
    Q('Bài thơ ngợi ca?', ['Thiên nhiên và con người lao động trong tư thế làm chủ', 'Tình yêu đôi lứa', 'Nỗi buồn ly biệt', 'Chiến tranh'], 0, 'Khúc tráng ca về thiên nhiên và người lao động mới làm chủ biển khơi, làm chủ cuộc đời.'),
    Q('Bài thơ kết thúc bằng cảnh?', ['Đêm tối', 'Bình minh, đoàn thuyền trở về', 'Bão biển', 'Mặt trời đứng bóng'], 1, 'Khép vòng: hoàng hôn ra khơi → đêm đánh cá → bình minh trở về.'),
  ]),

  M(4, 'Bếp lửa — Bằng Việt', [
    Q('"Bếp lửa" sáng tác trong hoàn cảnh nào?', ['Khi tác giả ở chiến trường', 'Khi tác giả đang du học ở Liên Xô năm 1963', 'Khi tác giả ở quê', 'Sau ngày thống nhất'], 1, 'Bằng Việt viết bài này năm 1963 khi đang du học ở Liên Xô, nhớ về bà.'),
    Q('Nhân vật trung tâm của bài thơ?', ['Người bố', 'Người mẹ', 'Người bà', 'Người em'], 2, 'Hình tượng người bà — biểu tượng tình thương, sự tần tảo.'),
    Q('Hình ảnh "bếp lửa" trong bài có ý nghĩa biểu tượng?', ['Sự nóng nực', 'Tình bà cháu, gia đình, quê hương, đất nước', 'Khó khăn vật chất', 'Cuộc sống nông thôn'], 1, 'Bếp lửa = ngọn lửa tình bà cháu + tình quê hương đất nước thiêng liêng.'),
    Q('Câu thơ "Một bếp lửa chờn vờn sương sớm / Một bếp lửa ấp iu nồng đượm" sử dụng phép?', ['Điệp ngữ', 'So sánh', 'Hoán dụ', 'Câu hỏi tu từ'], 0, 'Điệp ngữ "một bếp lửa" gợi hình ảnh đậm sâu trong ký ức.'),
    Q('"Ấp iu" trong bài có nghĩa?', ['Đốt cháy', 'Nâng niu, chăm chút', 'Lạnh lẽo', 'Tắt ngấm'], 1, '"Ấp iu" gợi bàn tay khéo léo, kiên nhẫn, đầy tình cảm của bà.'),
    Q('Câu thơ "Ôi kì lạ và thiêng liêng — bếp lửa!" thể hiện?', ['Sự ngạc nhiên thông thường', 'Cảm xúc dâng trào khi nhận ra ý nghĩa thiêng liêng của bếp lửa và bà', 'Nỗi sợ hãi', 'Sự thất vọng'], 1, 'Câu cảm thán chốt lại suy ngẫm: bếp lửa là cội nguồn thiêng liêng.'),
  ]),

  M(5, 'Ánh trăng — Nguyễn Duy', [
    Q('"Ánh trăng" sáng tác năm nào?', ['1975', '1978', '1985', '1990'], 1, 'Sáng tác năm 1978, ba năm sau ngày đất nước thống nhất, tại TP.HCM.'),
    Q('Bài thơ thuộc thể?', ['Lục bát', 'Năm chữ', 'Tự do', 'Bảy chữ'], 1, 'Thơ năm chữ, các khổ liền mạch như lời tâm sự.'),
    Q('Vầng trăng trong bài có ý nghĩa biểu tượng?', ['Người yêu', 'Quá khứ nghĩa tình, thiên nhiên, đất nước', 'Sự cô đơn', 'Niềm vui'], 1, 'Trăng = quá khứ ân tình + thiên nhiên + nhân dân, đất nước.'),
    Q('Tình huống "đèn điện tắt" trong bài có ý nghĩa?', ['Tình huống ngẫu nhiên', 'Khoảnh khắc giác ngộ, thức tỉnh lương tâm', 'Sự cố kỹ thuật', 'Cảnh tối tăm'], 1, 'Mất điện ⇒ gặp lại trăng ⇒ giật mình về sự lãng quên.'),
    Q('Câu thơ "Ánh trăng im phăng phắc / Đủ cho ta giật mình" thể hiện?', ['Sự bao dung của trăng và sự ăn năn của người', 'Sự giận dữ', 'Niềm vui đoàn tụ', 'Lời trách móc'], 0, 'Trăng im lặng nhưng đủ làm con người giật mình thức tỉnh.'),
    Q('Bài thơ là lời nhắc nhở về?', ['Đạo lý "uống nước nhớ nguồn"', 'Tình yêu đôi lứa', 'Chiến tranh', 'Cảnh đẹp'], 0, 'Nhắc nhở thái độ sống với quá khứ ân nghĩa, với nhân dân.'),
  ]),

  M(6, 'Làng — Kim Lân', [
    Q('Truyện ngắn "Làng" sáng tác năm nào?', ['1945', '1948', '1954', '1960'], 1, 'Viết năm 1948, thời kỳ đầu kháng chiến chống Pháp.'),
    Q('Nhân vật chính của truyện?', ['Bác Thứ', 'Ông Hai', 'Bà chủ nhà', 'Đứa con út'], 1, 'Ông Hai — người nông dân làng Chợ Dầu phải đi tản cư.'),
    Q('Tình huống truyện đặc sắc là?', ['Nghe tin làng Chợ Dầu theo Tây', 'Đi đánh giặc', 'Mất mùa', 'Cãi nhau với hàng xóm'], 0, 'Nghe tin làng theo giặc ⇒ đẩy ông Hai vào xung đột nội tâm dữ dội.'),
    Q('Tâm trạng ông Hai khi nghe tin làng theo giặc?', ['Bình thản', 'Vui mừng', 'Đau đớn, xấu hổ, dằn vặt', 'Phẫn nộ với cách mạng'], 2, '"Cổ ông lão nghẹn ắng hẳn lại, da mặt tê rân rân" ⇒ đau đớn, tủi hổ.'),
    Q('Khi nghe tin cải chính, ông Hai?', ['Im lặng', 'Vui sướng đi khoe khắp nơi, kể cả nhà bị Tây đốt', 'Tức giận', 'Không tin'], 1, 'Vui đến mức khoe cả việc nhà mình bị đốt — chứng tỏ làng không theo giặc.'),
    Q('Chủ đề tác phẩm?', ['Tình yêu làng quê hòa quyện với tình yêu đất nước, kháng chiến', 'Tình mẫu tử', 'Cuộc sống nghèo khó', 'Phong tục Bắc Bộ'], 0, 'Tình yêu làng nâng lên thành tình yêu nước — bước trưởng thành của người nông dân.'),
  ]),

  M(7, 'Lặng lẽ Sa Pa — Nguyễn Thành Long', [
    Q('Tác phẩm "Lặng lẽ Sa Pa" ra đời năm?', ['1965', '1970', '1975', '1980'], 1, 'Sáng tác năm 1970 sau chuyến đi thực tế Lào Cai.'),
    Q('Nhân vật chính của truyện?', ['Bác lái xe', 'Anh thanh niên làm khí tượng trên đỉnh Yên Sơn', 'Ông họa sĩ', 'Cô kỹ sư'], 1, 'Anh thanh niên 27 tuổi làm công tác khí tượng kiêm vật lý địa cầu trên đỉnh Yên Sơn 2 600 m.'),
    Q('Hoàn cảnh sống của anh thanh niên?', ['Đông đúc, vui vẻ', 'Cô độc trên đỉnh núi cao', 'Trong thành phố', 'Ở nông thôn đồng bằng'], 1, 'Sống một mình trên đỉnh núi cao 2 600 m, ít người qua lại.'),
    Q('Điều khiến anh thanh niên không thấy cô đơn?', ['Có nhiều bạn bè', 'Tình yêu công việc và ý thức cống hiến', 'Có TV xem', 'Sống gần thành phố'], 1, 'Anh tìm thấy niềm vui trong công việc: "khi ta làm việc, ta với công việc là đôi".'),
    Q('Phong cách kể chuyện của Nguyễn Thành Long?', ['Bi kịch, dữ dội', 'Nhẹ nhàng, thấm thía, giàu chất thơ và chất họa', 'Hài hước, châm biếm', 'Trầm uất, bi quan'], 1, 'Văn chương trữ tình giàu chất thơ, ca ngợi cuộc sống lao động bình dị.'),
    Q('Tại sao tác giả không đặt tên cho các nhân vật?', ['Quên đặt', 'Tô đậm tính chất khái quát — họ là những người lao động vô danh đang âm thầm cống hiến', 'Lý do văn phong', 'Vì không quan trọng'], 1, 'Tên gọi như "anh thanh niên", "ông họa sĩ", "cô kỹ sư" ⇒ điển hình hóa.'),
  ]),

  M(8, 'Chiếc lược ngà — Nguyễn Quang Sáng', [
    Q('"Chiếc lược ngà" sáng tác năm nào?', ['1966', '1970', '1975', '1980'], 0, 'Sáng tác năm 1966 khi tác giả đang ở chiến trường Nam Bộ.'),
    Q('Hai nhân vật trung tâm là?', ['Ông Sáu và bé Thu', 'Bác Ba và ông Sáu', 'Bé Thu và mẹ', 'Ông Sáu và bà nội'], 0, 'Cha (ông Sáu) và con gái (bé Thu) — hai cha con trong chiến tranh.'),
    Q('Vì sao bé Thu không nhận ông Sáu là cha?', ['Vì ông Sáu có vết thẹo trên mặt khác với hình chụp', 'Vì sợ', 'Vì ghét', 'Vì không quen'], 0, 'Vết thẹo do chiến tranh làm khuôn mặt khác ảnh ⇒ bé Thu không nhận.'),
    Q('Khoảnh khắc bé Thu gọi "ba" trong truyện?', ['Khi mới gặp', 'Khi ông Sáu sắp lên đường, bé thu vỡ òa thét lên "Ba…a…a…ba!"', 'Khi ăn cơm', 'Khi đi học'], 1, 'Cảnh chia tay đầy nước mắt — tiếng "ba" muộn màng nhưng cảm động.'),
    Q('Chiếc lược ngà do ai làm và dành cho ai?', ['Ông Sáu làm từ ngà voi để tặng con gái', 'Bé Thu làm', 'Bác Ba làm', 'Bà nội làm'], 0, 'Ông Sáu kì công làm chiếc lược ngà tặng con — biểu tượng tình phụ tử.'),
    Q('Chủ đề tác phẩm?', ['Tình cha con sâu nặng trong cảnh ngộ éo le của chiến tranh', 'Tình yêu đôi lứa', 'Tình bạn', 'Lao động sản xuất'], 0, 'Ca ngợi tình phụ tử thiêng liêng, đau đớn mất mát do chiến tranh.'),
  ]),

  M(9, 'Các phương châm hội thoại', [
    Q('Phương châm về lượng yêu cầu?', ['Nói có đủ nội dung, không thừa không thiếu', 'Nói thật', 'Nói lễ phép', 'Nói ngắn gọn'], 0, 'Cung cấp đủ thông tin, không thiếu, không thừa.'),
    Q('Phương châm về chất yêu cầu?', ['Nói có bằng chứng xác đáng, không nói điều mình không tin là đúng', 'Nói có nội dung', 'Nói lễ phép', 'Nói rõ ràng'], 0, 'Không nói điều mình không tin là đúng hoặc không có bằng chứng.'),
    Q('Khi nói "Tôi nghe nói…", "Hình như…", người nói tuân thủ phương châm?', ['Lượng', 'Chất', 'Quan hệ', 'Cách thức'], 1, 'Báo trước độ tin cậy ⇒ tuân thủ phương châm về chất.'),
    Q('Phương châm cách thức yêu cầu?', ['Nói ngắn gọn, rành mạch, tránh mơ hồ', 'Nói thật', 'Nói có nội dung', 'Nói lễ phép'], 0, 'Trình bày rõ ràng, ngắn gọn, không mơ hồ.'),
    Q('Phương châm lịch sự đòi hỏi?', ['Tôn trọng người đối thoại', 'Nói thật to', 'Nói nhanh', 'Nói nhiều'], 0, 'Tế nhị, tôn trọng đối tượng giao tiếp.'),
    Q('Câu "Trâu là một loài gia súc nuôi ở nhà" vi phạm phương châm?', ['Lượng (thừa)', 'Chất', 'Quan hệ', 'Lịch sự'], 0, '"Gia súc" đã hàm nghĩa "nuôi ở nhà" ⇒ thừa thông tin.'),
  ]),

  M(10, 'Cách dẫn trực tiếp và cách dẫn gián tiếp', [
    Q('Dẫn trực tiếp là?', ['Nhắc lại nguyên văn lời/ý của người khác, đặt trong dấu ngoặc kép', 'Tóm tắt lại ý', 'Bỏ qua', 'Diễn đạt khác đi'], 0, 'Trích nguyên văn, có dấu hai chấm + dấu ngoặc kép.'),
    Q('Dẫn gián tiếp là?', ['Thuật lại lời/ý theo cách của mình, có thể thay đổi từ ngữ', 'Trích nguyên văn', 'Đặt trong ngoặc kép', 'Hỏi lại'], 0, 'Thuật lại, không cần ngoặc kép, có thể thay đổi đại từ, từ ngữ.'),
    Q('Câu nào sử dụng cách dẫn trực tiếp?', ['Mẹ tôi nói: "Ngày mai con đi học sớm nhé!"', 'Mẹ tôi bảo ngày mai tôi đi học sớm', 'Mẹ tôi nhắc về việc đi học', 'Tôi đi học sớm'], 0, 'Có dấu hai chấm + ngoặc kép trích nguyên văn lời mẹ.'),
    Q('Chuyển sang gián tiếp: "Anh hỏi: \'Em có khỏe không?\'" → ?', ['Anh hỏi em có khỏe không.', 'Anh nói em khỏe.', 'Em khỏe không?', 'Anh hỏi: em khỏe.'], 0, 'Bỏ ngoặc kép, đổi đại từ phù hợp, thường thêm "có … không" hoặc "rằng".'),
    Q('Khi dẫn gián tiếp, cần lưu ý?', ['Đảm bảo trung thành ý của người nói', 'Thay đổi hoàn toàn', 'Chỉ cần ngắn gọn', 'Không cần chính xác'], 0, 'Có thể đổi từ nhưng phải trung thành với ý nghĩa gốc.'),
    Q('Lời dẫn trực tiếp trong tác phẩm văn học thường dùng để?', ['Tăng tính chân thực, sinh động, khắc họa tính cách nhân vật', 'Rút gọn', 'Trang trí', 'Trữ tình'], 0, 'Giúp người đọc cảm nhận trực tiếp ngữ điệu, tính cách nhân vật.'),
  ]),

  M(11, 'Sự phát triển của từ vựng', [
    Q('Từ vựng tiếng Việt phát triển bằng các con đường nào?', ['Phát triển nghĩa, tạo từ mới, vay mượn', 'Chỉ vay mượn', 'Chỉ tạo từ mới', 'Không phát triển'], 0, '3 con đường chính: phát triển nghĩa, tạo từ mới (từ ghép, từ láy), vay mượn.'),
    Q('Từ "chân" trong "chân bàn" so với "chân người" là?', ['Phát triển nghĩa từ nghĩa gốc theo phương thức ẩn dụ', 'Vay mượn', 'Từ Hán-Việt', 'Không liên quan'], 0, 'Từ "chân" mở rộng nghĩa: từ nghĩa gốc (bộ phận cơ thể) → nghĩa chuyển (phần dưới đỡ vật).'),
    Q('Từ "internet", "email", "PC" thuộc loại?', ['Từ thuần Việt', 'Từ vay mượn (từ tiếng Anh)', 'Từ Hán-Việt', 'Từ láy'], 1, 'Mượn từ tiếng Anh, biểu thị khái niệm công nghệ mới.'),
    Q('Tỷ lệ từ Hán-Việt trong tiếng Việt khoảng?', ['10%', '30%', '60–70%', '90%'], 2, 'Hơn 60% từ vựng có nguồn gốc Hán, hình thành qua nhiều thế kỷ tiếp xúc.'),
    Q('Từ "smartphone" được tạo theo phương thức?', ['Vay mượn nguyên dạng', 'Vay mượn có cải biến', 'Phát triển nghĩa', 'Từ thuần Việt'], 0, 'Mượn nguyên dạng tiếng Anh, không Việt hóa.'),
    Q('Từ "kinh tế" trong tiếng Việt là?', ['Từ thuần Việt', 'Từ Hán-Việt (kinh thế tế dân)', 'Từ vay mượn từ Anh', 'Từ láy'], 1, '"Kinh tế" bắt nguồn từ "kinh bang tế thế" trong tiếng Hán cổ.'),
  ]),

  M(12, 'Văn bản thuyết minh có yếu tố nghệ thuật', [
    Q('Văn bản thuyết minh là loại văn?', ['Cung cấp tri thức khách quan về sự vật, hiện tượng', 'Bộc lộ cảm xúc', 'Kể chuyện', 'Bàn luận'], 0, 'Mục đích: trình bày, giới thiệu, giải thích để người đọc hiểu rõ đối tượng.'),
    Q('Yếu tố nghệ thuật trong văn thuyết minh có vai trò?', ['Làm bài văn sinh động, hấp dẫn hơn nhưng vẫn đảm bảo tính khoa học', 'Thay thế thông tin', 'Phá vỡ tính khách quan', 'Không có vai trò'], 0, 'Kể chuyện, miêu tả, đối thoại… giúp bài văn thu hút mà vẫn chính xác.'),
    Q('Khi thuyết minh về một di tích lịch sử, cần?', ['Nêu vị trí, lịch sử, kiến trúc, giá trị + có thể kèm câu chuyện liên quan', 'Chỉ tả vẻ đẹp', 'Chỉ kể chuyện', 'Chỉ bộc lộ cảm xúc'], 0, 'Kết hợp thông tin xác thực + yếu tố biểu cảm phù hợp.'),
    Q('Văn bản "Hạ Long — đá và nước" sử dụng phương pháp thuyết minh nào nổi bật?', ['Liệt kê', 'Miêu tả + tưởng tượng', 'So sánh', 'Thống kê'], 1, 'Tác giả miêu tả + tưởng tượng để Hạ Long hiện lên sống động, có hồn.'),
    Q('Yêu cầu của văn thuyết minh là?', ['Chính xác, khách quan, rõ ràng', 'Hư cấu', 'Biểu cảm mạnh', 'Bí ẩn'], 0, 'Đảm bảo tính khoa học là yêu cầu hàng đầu.'),
    Q('Phương pháp thuyết minh nào dùng để giới thiệu số liệu cụ thể?', ['Liệt kê', 'Nêu ví dụ', 'Dùng số liệu/thống kê', 'Phân loại'], 2, 'Số liệu tăng độ tin cậy, sức thuyết phục.'),
  ]),

  M(13, 'Văn tự sự kết hợp miêu tả nội tâm', [
    Q('Miêu tả nội tâm trong văn tự sự là?', ['Tái hiện ý nghĩ, cảm xúc, suy tư của nhân vật', 'Tả ngoại hình', 'Tả cảnh vật', 'Kể sự việc'], 0, 'Khắc họa thế giới bên trong nhân vật.'),
    Q('Có những cách miêu tả nội tâm nào?', ['Trực tiếp (kể ra suy nghĩ) và gián tiếp (qua hành động, cử chỉ, nét mặt)', 'Chỉ trực tiếp', 'Chỉ gián tiếp', 'Không có cách nào'], 0, 'Trực tiếp: kể thẳng; gián tiếp: ngoại hiện qua hành động.'),
    Q('Đoạn "ông Hai vò đầu bứt tai, lẩm bẩm…" trong "Làng" sử dụng cách miêu tả nội tâm?', ['Trực tiếp', 'Gián tiếp qua hành động', 'Không có', 'Tả ngoại hình'], 1, 'Miêu tả hành động vò đầu bứt tai ⇒ thể hiện nội tâm rối bời.'),
    Q('Miêu tả nội tâm giúp?', ['Nhân vật trở nên sống động, có chiều sâu tâm hồn', 'Bài văn dài hơn', 'Ngắt mạch truyện', 'Không có ích'], 0, 'Nhân vật có "linh hồn", lay động cảm xúc người đọc.'),
    Q('Trong kể chuyện, đoạn độc thoại nội tâm thường?', ['Đặt trong dấu ngoặc đơn', 'Đặt sau gạch đầu dòng hoặc trong dấu ngoặc kép, có khi không dấu', 'Không cần dấu', 'Phải đặt trong ngoặc kép'], 1, 'Tùy phong cách tác giả; phổ biến là gạch đầu dòng hoặc dùng "nghĩ thầm:".'),
    Q('Yếu tố nội tâm quan trọng nhất với thể loại?', ['Truyện ngắn, tiểu thuyết', 'Thơ lục bát', 'Văn bản hành chính', 'Báo cáo'], 0, 'Truyện hiện đại đặc biệt chú trọng khắc họa nội tâm.'),
  ]),

  M(14, 'Truyện Kiều — Nguyễn Du (giới thiệu)', [
    Q('"Truyện Kiều" còn có tên gọi nào?', ['Đoạn trường tân thanh', 'Lục Vân Tiên', 'Chinh phụ ngâm', 'Cung oán ngâm'], 0, '"Đoạn trường tân thanh" — "Tiếng kêu mới đứt ruột".'),
    Q('Tác phẩm gốc của Truyện Kiều là?', ['Tam Quốc Diễn Nghĩa', 'Kim Vân Kiều truyện (Thanh Tâm Tài Nhân)', 'Tây Du Ký', 'Hồng Lâu Mộng'], 1, 'Nguyễn Du sáng tạo từ tiểu thuyết "Kim Vân Kiều truyện" của Thanh Tâm Tài Nhân (TQ).'),
    Q('Truyện Kiều viết bằng thể thơ?', ['Lục bát', 'Song thất lục bát', 'Thất ngôn', 'Tự do'], 0, '3 254 câu lục bát.'),
    Q('Giá trị nội dung lớn nhất của Truyện Kiều?', ['Giá trị hiện thực và nhân đạo sâu sắc', 'Sử thi', 'Trào phúng', 'Tôn giáo'], 0, 'Phê phán xã hội phong kiến + đề cao quyền sống, hạnh phúc con người.'),
    Q('Số phận Thúy Kiều là điển hình cho?', ['Người phụ nữ tài hoa, bạc mệnh trong xã hội phong kiến', 'Anh hùng dân tộc', 'Trí thức nho học', 'Nông dân'], 0, 'Tài sắc vẹn toàn nhưng bị xã hội vùi dập ⇒ chủ đề "hồng nhan bạc mệnh".'),
    Q('Nguyễn Du sống ở thời kỳ nào?', ['Cuối Lê đầu Nguyễn (cuối 18 - đầu 19)', 'Đầu nhà Lý', 'Nhà Trần', 'Nhà Tây Sơn xa xưa'], 0, 'Nguyễn Du (1765–1820), chứng kiến biến động lớn cuối Lê - Tây Sơn - Nguyễn.'),
  ]),

  M(15, 'Chị em Thuý Kiều (trích Truyện Kiều)', [
    Q('Đoạn "Chị em Thuý Kiều" giới thiệu nhân vật nào?', ['Thúy Vân và Thúy Kiều', 'Kim Trọng', 'Mã Giám Sinh', 'Từ Hải'], 0, 'Giới thiệu hai chị em Thúy Vân (em) và Thúy Kiều (chị).'),
    Q('Câu "Mai cốt cách, tuyết tinh thần" miêu tả?', ['Vẻ đẹp thanh cao của hai chị em', 'Vẻ đẹp cụ thể của Vân', 'Cảnh thiên nhiên', 'Tâm trạng buồn'], 0, 'Khái quát vẻ đẹp tinh thần: cốt cách như mai, tinh thần như tuyết.'),
    Q('Vẻ đẹp Thúy Vân được miêu tả qua các câu?', ['Khuôn trăng đầy đặn, nét ngài nở nang…', 'Làn thu thủy nét xuân sơn', 'Mai cốt cách', 'Hồng nhan bạc mệnh'], 0, '"Khuôn trăng đầy đặn… mây thua nước tóc, tuyết nhường màu da" — đẹp đoan trang phúc hậu.'),
    Q('Vẻ đẹp Thúy Kiều được miêu tả?', ['Sắc sảo mặn mà hơn, "làn thu thủy nét xuân sơn", có tài thơ ca cầm kỳ', 'Phúc hậu hiền lành', 'Mạnh mẽ', 'Trầm tư'], 0, 'Kiều đẹp sắc sảo + có tài: thơ, vẽ, đàn, hát.'),
    Q('Nghệ thuật chủ đạo trong đoạn này?', ['Ước lệ tượng trưng — lấy thiên nhiên làm chuẩn so sánh', 'Tả thực', 'Phóng đại', 'Châm biếm'], 0, 'Bút pháp ước lệ cổ điển: mai, tuyết, hoa, ngọc, thu thủy, xuân sơn…'),
    Q('Câu "Hoa ghen thua thắm, liễu hờn kém xanh" báo hiệu?', ['Cuộc đời Kiều bình yên', 'Kiều sẽ gặp nhiều sóng gió, đau khổ ("hồng nhan bạc mệnh")', 'Vẻ đẹp tự nhiên', 'Tình yêu hạnh phúc'], 1, 'Hoa, liễu phải ghen ⇒ tài sắc của Kiều gây tai họa cho chính nàng.'),
  ]),

  M(16, 'Cảnh ngày xuân (trích Truyện Kiều)', [
    Q('"Cảnh ngày xuân" tả khung cảnh?', ['Lễ hội Thanh Minh tháng 3', 'Tết Nguyên Đán', 'Ngày hè', 'Mùa đông'], 0, 'Cảnh tiết Thanh Minh (tháng 3), chị em Kiều đi du xuân.'),
    Q('Câu "Cỏ non xanh tận chân trời / Cành lê trắng điểm một vài bông hoa" sử dụng?', ['Nghệ thuật chấm phá hội họa', 'Phóng đại', 'Nhân hóa', 'So sánh'], 0, 'Bút pháp chấm phá: nền xanh + điểm trắng ⇒ bức tranh xuân tinh khôi, thanh khiết.'),
    Q('Lễ hội Thanh Minh có hai phần?', ['Lễ tảo mộ + hội đạp thanh', 'Lễ tế trời + hội thi thơ', 'Lễ cưới + hội đèn', 'Lễ Phật + hội chợ'], 0, 'Tảo mộ (sửa sang mồ mả) + đạp thanh (chơi xuân ngoài đồng).'),
    Q('Cuối đoạn, tâm trạng chị em Kiều?', ['Vui rộn ràng', 'Bâng khuâng, man mác buồn khi chiều tà', 'Háo hức về nhà', 'Buồn ngủ'], 1, '"Tà tà bóng ngả về tây" + "nao nao dòng nước uốn quanh" ⇒ buồn man mác, dự báo điều sắp xảy ra (gặp mộ Đạm Tiên).'),
    Q('Nghệ thuật miêu tả trong đoạn?', ['Tả cảnh thiên nhiên kết hợp tả tâm trạng (tả cảnh ngụ tình)', 'Chỉ tả cảnh', 'Chỉ tả tâm trạng', 'Đối thoại'], 0, 'Cảnh + tình hòa quyện — đặc trưng thơ Nguyễn Du.'),
    Q('Từ "nao nao" trong "nao nao dòng nước uốn quanh" gợi?', ['Cảm giác xôn xao, bâng khuâng', 'Vui vẻ', 'Cô đơn', 'Tức giận'], 0, 'Từ láy gợi tâm trạng man mác, dự cảm.'),
  ]),

  M(17, 'Kiều ở lầu Ngưng Bích', [
    Q('"Kiều ở lầu Ngưng Bích" diễn tả tâm trạng Kiều khi nào?', ['Bị Mã Giám Sinh lừa, giam ở lầu Ngưng Bích', 'Mới gặp Kim Trọng', 'Vui chơi với gia đình', 'Sống cùng Từ Hải'], 0, 'Kiều bị Tú Bà giam lỏng ở lầu Ngưng Bích sau khi bị Mã Giám Sinh lừa.'),
    Q('Cảnh "Trước lầu Ngưng Bích khóa xuân" cho thấy?', ['Cảnh đẹp lãng mạn', 'Sự cô đơn, bị giam cầm tuổi xuân', 'Niềm vui', 'Sự tự do'], 1, '"Khóa xuân" = giam giữ tuổi thanh xuân; gợi không gian giam cầm, cô độc.'),
    Q('Kiều nhớ những ai trong đoạn này?', ['Nhớ Kim Trọng và cha mẹ', 'Chỉ nhớ Kim Trọng', 'Chỉ nhớ cha mẹ', 'Nhớ Từ Hải'], 0, 'Nỗi nhớ kép: Kim Trọng (tình yêu) và cha mẹ (chữ hiếu).'),
    Q('Vì sao Kiều nhớ Kim Trọng trước, cha mẹ sau?', ['Phù hợp tâm lý: Kim Trọng là người Kiều đã hứa hôn, có lỗi nhất; cha mẹ Kiều biết Kiều đã bán mình', 'Vô lý', 'Tác giả nhầm', 'Cha mẹ không quan trọng'], 0, 'Tinh tế tâm lý: nỗi day dứt với Kim Trọng nặng hơn vì Kiều thấy có lỗi.'),
    Q('Đoạn "Buồn trông cửa bể chiều hôm…" sử dụng nghệ thuật?', ['Tả cảnh ngụ tình + điệp ngữ "buồn trông"', 'Hài hước', 'Phóng đại', 'Liệt kê'], 0, '8 câu cuối lặp "buồn trông" 4 lần ⇒ tâm trạng cô đơn, lo sợ chồng chất.'),
    Q('Hình ảnh "ầm ầm tiếng sóng kêu quanh ghế ngồi" báo hiệu?', ['Sự bình yên', 'Tai họa, sóng gió sắp ập đến cuộc đời Kiều', 'Niềm vui', 'Tình yêu'], 1, 'Sóng dữ dội ⇒ dự báo phong ba cuộc đời sắp đến.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('"Đồng chí" và "Bài thơ về tiểu đội xe không kính" cùng viết về?', ['Người lính trong kháng chiến', 'Phụ nữ', 'Nông dân', 'Trí thức'], 0, 'Cùng hình tượng người lính (chống Pháp / chống Mỹ).'),
    Q('"Bếp lửa" và "Ánh trăng" có điểm chung?', ['Đều là dòng hồi tưởng, suy ngẫm về quá khứ ân nghĩa', 'Đều tả cảnh hoàng hôn', 'Đều viết về chiến tranh', 'Đều thơ lục bát'], 0, 'Cả 2 đều khơi gợi đạo lý nhớ về cội nguồn, quá khứ.'),
    Q('Truyện ngắn "Làng" và "Chiếc lược ngà" có điểm chung?', ['Đều xây dựng tình huống truyện độc đáo, khắc họa số phận con người trong chiến tranh', 'Đều cảnh nông thôn', 'Đều có nhân vật trẻ em', 'Đều buồn'], 0, 'Tình huống truyện độc đáo + chủ đề chiến tranh và con người.'),
    Q('Phương châm hội thoại quan trọng nhất trong giao tiếp xã giao?', ['Lịch sự', 'Lượng', 'Chất', 'Cách thức'], 0, 'Lịch sự là nền tảng giao tiếp văn hóa.'),
    Q('Thuý Kiều thuộc tác phẩm của?', ['Nguyễn Du', 'Nguyễn Trãi', 'Hồ Xuân Hương', 'Đoàn Thị Điểm'], 0, 'Nguyễn Du là tác giả Truyện Kiều.'),
    Q('Văn bản thuyết minh khác văn miêu tả ở chỗ?', ['Thuyết minh: khách quan, cung cấp tri thức; miêu tả: chủ quan, gợi hình', 'Không khác nhau', 'Thuyết minh dài hơn', 'Miêu tả khoa học hơn'], 0, 'Mục đích khác: thuyết minh ⇒ hiểu; miêu tả ⇒ hình dung, cảm nhận.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bến quê — Nguyễn Minh Châu', [
    Q('"Bến quê" của Nguyễn Minh Châu sáng tác năm?', ['1975', '1985', '1991', '1995'], 1, 'Truyện ngắn in trong tập "Bến quê" (1985).'),
    Q('Nhân vật chính của truyện?', ['Nhĩ — người bệnh nặng đang nằm dưỡng bệnh', 'Liên', 'Tuấn', 'Bác sĩ'], 0, 'Nhĩ — người từng đi khắp nơi nhưng cuối đời bị bệnh nằm liệt giường.'),
    Q('Tình huống truyện nghịch lý là?', ['Nhĩ từng đi khắp thế giới nhưng cuối đời không thể bước qua bến sông quê mình', 'Nhĩ bị mất trí nhớ', 'Nhĩ bỏ nhà ra đi', 'Nhĩ về quê làm ăn'], 0, 'Nghịch lý: đi xa nhiều mà không khám phá ngay điều gần gũi nhất.'),
    Q('Hình ảnh "bãi bồi bên kia sông" tượng trưng cho?', ['Vẻ đẹp bình dị, gần gũi của quê hương mà ta hay vô tình bỏ quên', 'Sự xa lạ', 'Nơi du lịch', 'Đất canh tác'], 0, 'Biểu tượng cho vẻ đẹp giản dị, bến đỗ tinh thần con người.'),
    Q('Thông điệp tác phẩm?', ['Hãy trân trọng những giá trị giản dị, gần gũi mà bền vững của quê hương, gia đình', 'Đi nhiều là tốt', 'Sống nhanh', 'Theo đuổi vinh hoa'], 0, 'Thức tỉnh: con người dễ bỏ qua vẻ đẹp bên cạnh mà chạy theo cái xa vời.'),
    Q('Nghệ thuật đặc sắc của Nguyễn Minh Châu trong "Bến quê"?', ['Xây dựng tình huống nghịch lý mang tính biểu tượng và triết lý', 'Hài hước', 'Phóng đại', 'Sử thi'], 0, 'Tình huống nghịch lý + giàu chất triết lý nhân sinh.'),
  ]),

  M(20, 'Những ngôi sao xa xôi — Lê Minh Khuê', [
    Q('"Những ngôi sao xa xôi" sáng tác năm nào?', ['1965', '1971', '1975', '1980'], 1, 'Sáng tác năm 1971 khi kháng chiến chống Mỹ đang ác liệt.'),
    Q('Ba nhân vật nữ trong truyện là?', ['Phương Định, Nho, Thao', 'Phương, Lan, Hoa', 'Hồng, Nho, Thu', 'Định, Thao, Liên'], 0, 'Tổ trinh sát mặt đường: Phương Định, Nho, chị Thao.'),
    Q('Họ làm công việc gì trên tuyến đường Trường Sơn?', ['Lái xe', 'Phá bom, đo khối lượng đất đá đường bị bom phá', 'Y tá', 'Liên lạc'], 1, 'Trinh sát + đo, phá bom — nhiệm vụ cực kỳ nguy hiểm.'),
    Q('Người kể chuyện trong tác phẩm là?', ['Phương Định (ngôi thứ nhất)', 'Người dẫn truyện ngôi thứ ba', 'Nho', 'Chị Thao'], 0, 'Phương Định kể chuyện ⇒ tạo cảm giác chân thực, trực tiếp.'),
    Q('Nét đẹp chung của ba cô gái?', ['Dũng cảm, lạc quan, có tâm hồn trong sáng, mơ mộng', 'Lặng lẽ, cam chịu', 'Mạnh mẽ, lạnh lùng', 'Tài giỏi, kiêu hãnh'], 0, 'Vẻ đẹp người con gái Việt Nam thời chiến: dũng cảm + nữ tính, mơ mộng.'),
    Q('Tên truyện "Những ngôi sao xa xôi" có ý nghĩa biểu tượng?', ['Biểu tượng cho vẻ đẹp tâm hồn, lý tưởng và sự bất tử của những cô gái thanh niên xung phong', 'Là ngôi sao thực', 'Khoảng cách địa lý', 'Khung cảnh đêm'], 0, 'Các cô gái như những vì sao sáng — vẻ đẹp lý tưởng và tinh thần.'),
  ]),

  M(21, 'Mùa xuân nho nhỏ — Thanh Hải', [
    Q('"Mùa xuân nho nhỏ" sáng tác trong hoàn cảnh nào?', ['Tháng 11/1980, khi Thanh Hải đang nằm trên giường bệnh', 'Tết Nguyên Đán', 'Mùa hè', 'Sau ngày thống nhất ngay'], 0, 'Viết một tháng trước khi tác giả qua đời — như lời tâm sự cuối đời.'),
    Q('Bài thơ thuộc thể?', ['Lục bát', 'Năm chữ', 'Tự do', 'Bảy chữ'], 1, 'Thơ năm chữ, gần với âm hưởng dân ca xứ Huế.'),
    Q('Câu "Ta làm con chim hót / Ta làm một cành hoa" thể hiện?', ['Ước nguyện hòa nhập, cống hiến phần nhỏ bé của mình cho cuộc đời', 'Khao khát giàu sang', 'Mong ước du lịch', 'Sự cô đơn'], 0, 'Khát vọng dâng hiến tự nhiên, khiêm nhường nhưng đẹp đẽ.'),
    Q('"Mùa xuân nho nhỏ" trong bài tượng trưng cho?', ['Sự đóng góp khiêm nhường nhưng quý giá của mỗi cá nhân vào mùa xuân lớn của đất nước', 'Mùa xuân thực', 'Tuổi thơ', 'Tình yêu'], 0, 'Mỗi người là 1 "mùa xuân nho nhỏ" góp vào mùa xuân lớn của dân tộc.'),
    Q('Câu thơ "Dù là tuổi hai mươi / Dù là khi tóc bạc" nhấn mạnh?', ['Sự cống hiến không phụ thuộc tuổi tác', 'Sự khác biệt thế hệ', 'Thời gian trôi nhanh', 'Sự già nua'], 0, 'Dâng hiến cả đời người — từ tuổi trẻ đến khi già.'),
    Q('Khổ thơ cuối "Mùa xuân ta xin hát…" có âm hưởng?', ['Dân ca Huế (Nam ai, Nam bình)', 'Hành khúc', 'Cải lương', 'Quan họ'], 0, 'Mang âm hưởng dân ca xứ Huế — quê hương Thanh Hải.'),
  ]),

  M(22, 'Viếng lăng Bác — Viễn Phương', [
    Q('"Viếng lăng Bác" sáng tác năm?', ['1969', '1975', '1976', '1980'], 2, 'Năm 1976, sau khi lăng Bác khánh thành, tác giả từ miền Nam ra viếng.'),
    Q('Bài thơ thuộc thể?', ['Lục bát', 'Bảy chữ (kèm tám chữ)', 'Năm chữ', 'Tự do'], 1, 'Thơ 8 chữ + 7 chữ, đa dạng nhịp.'),
    Q('Câu "Con ở miền Nam ra thăm lăng Bác" có ý nghĩa?', ['Lời xưng hô con — Bác thể hiện tình cảm gần gũi, ấm áp; "thăm" giảm đau buồn', 'Lời thông báo', 'Lời chào', 'Lời từ biệt'], 0, '"Con" — "Bác" + dùng "thăm" thay "viếng" ⇒ giảm nhẹ nỗi đau mất mát.'),
    Q('Hình ảnh "Mặt trời trong lăng rất đỏ" sử dụng?', ['Ẩn dụ — Bác là mặt trời cách mạng', 'So sánh', 'Nhân hóa', 'Hoán dụ'], 0, 'Ẩn dụ "mặt trời" = Bác Hồ — vĩ đại như vầng dương.'),
    Q('"Ngày ngày dòng người đi trong thương nhớ / Kết tràng hoa dâng bảy mươi chín mùa xuân" gợi?', ['Sự kính yêu của nhân dân với Bác (Bác sống 79 tuổi)', 'Số học sinh', 'Số mùa xuân thật', 'Tuổi của tác giả'], 0, '"79 mùa xuân" = 79 năm cuộc đời Bác; tràng hoa = dòng người tưởng nhớ.'),
    Q('Khổ thơ cuối thể hiện ước nguyện?', ['Muốn làm con chim, đóa hoa, cây tre bên lăng Bác', 'Muốn xây lăng to', 'Muốn về nhà', 'Muốn đi du lịch'], 0, 'Ước nguyện ở bên Bác mãi mãi để báo đáp ân tình.'),
  ]),

  M(23, 'Sang thu — Hữu Thỉnh', [
    Q('"Sang thu" sáng tác năm?', ['1975', '1977', '1980', '1985'], 1, 'Sáng tác cuối năm 1977, thời kỳ đất nước mới thống nhất.'),
    Q('Bài thơ tả khoảnh khắc?', ['Mùa xuân chuyển sang hè', 'Cuối hạ — đầu thu', 'Mùa thu sang đông', 'Đông sang xuân'], 1, 'Khoảnh khắc giao mùa hạ — thu, mơ hồ, tinh tế.'),
    Q('Tín hiệu đầu tiên báo thu trong bài là?', ['Hương ổi phả vào trong gió se', 'Lá vàng rơi', 'Chim én bay đi', 'Trăng thu sáng'], 0, '"Bỗng nhận ra hương ổi / Phả vào trong gió se" — đặc trưng riêng của thu Bắc Bộ.'),
    Q('Câu "Sương chùng chình qua ngõ / Hình như thu đã về" sử dụng?', ['Nhân hóa "chùng chình" + từ tình thái "hình như"', 'So sánh', 'Phóng đại', 'Ẩn dụ'], 0, 'Sương được nhân hóa như cố ý nán lại; "hình như" thể hiện sự chưa rõ ràng.'),
    Q('Hình ảnh "Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi" có hàm nghĩa?', ['Suy ngẫm: khi đã trưởng thành, con người vững vàng trước biến động cuộc đời', 'Tả thực thiên nhiên', 'Sấm sét nguy hiểm', 'Cây cối già nua'], 0, 'Hai tầng nghĩa: thiên nhiên (sấm thu ít hơn) + triết lý (người đứng tuổi vững vàng hơn).'),
    Q('Đặc điểm nghệ thuật của bài thơ?', ['Hình ảnh tinh tế, ngôn ngữ giản dị, giàu sức gợi', 'Hào hùng, mạnh mẽ', 'Bi tráng', 'Hài hước'], 0, 'Sự tinh tế trong cảm nhận, mang phong vị riêng.'),
  ]),

  M(24, 'Nói với con — Y Phương', [
    Q('"Nói với con" của Y Phương sáng tác năm?', ['1975', '1980', '1985', '1990'], 1, 'Khoảng năm 1980, sau khi tác giả có con.'),
    Q('Y Phương là nhà thơ dân tộc nào?', ['Tày', 'Mường', 'Thái', 'H\'Mông'], 0, 'Y Phương là người dân tộc Tày, quê Cao Bằng.'),
    Q('Bài thơ là lời?', ['Người cha nói với con về cội nguồn, quê hương và "người đồng mình"', 'Mẹ ru con', 'Con nói với cha', 'Anh nói với em'], 0, 'Lời tâm tình của người cha truyền cho con tình yêu quê hương, sức sống dân tộc.'),
    Q('Cụm từ "người đồng mình" trong bài chỉ?', ['Những người cùng quê, cùng dân tộc, sống mộc mạc nghĩa tình', 'Người nước ngoài', 'Người ở vùng đồng bằng', 'Bạn cùng lớp'], 0, '"Người đồng mình" — cách gọi gần gũi của Y Phương để chỉ bà con dân tộc mình.'),
    Q('Câu "Người đồng mình thô sơ da thịt / Chẳng mấy ai nhỏ bé đâu con" thể hiện?', ['Tự hào về phẩm chất kiên cường, nghĩa khí của người dân tộc', 'Sự nghèo nàn', 'Sự lạc hậu', 'Vẻ đẹp ngoại hình'], 0, '"Thô sơ da thịt" nhưng "không nhỏ bé" về ý chí, nhân cách.'),
    Q('Bài thơ có gì độc đáo trong cách diễn đạt?', ['Ngôn ngữ mộc mạc, hình ảnh cụ thể đặc trưng tư duy người miền núi', 'Sử dụng nhiều từ Hán Việt', 'Cấu trúc rất khái quát', 'Thiên về suy luận triết học'], 0, 'Lối nói riêng của người dân tộc: cụ thể, hình ảnh, mộc mạc nhưng giàu ý nghĩa.'),
  ]),

  M(25, 'Nghị luận xã hội — Tư tưởng đạo lý', [
    Q('Nghị luận về một tư tưởng đạo lý là?', ['Trình bày ý kiến về một quan điểm, đạo lý sống', 'Tả người', 'Kể chuyện', 'Tả cảnh'], 0, 'Bàn luận, phân tích, đánh giá một tư tưởng/quan niệm sống.'),
    Q('Cấu trúc bài nghị luận về tư tưởng đạo lý gồm?', ['Mở bài (giới thiệu) - Thân bài (giải thích, phân tích, chứng minh, bình luận) - Kết bài', 'Mở - Tả - Kết', 'Chỉ giải thích', 'Chỉ kể'], 0, 'Cấu trúc 3 phần với thân bài đầy đủ các thao tác.'),
    Q('Khi bàn về câu "Có chí thì nên", cần làm rõ?', ['Khái niệm "chí", vai trò của ý chí, dẫn chứng người thành công, phản đề người thiếu chí', 'Chỉ kể chuyện vui', 'Chỉ ca ngợi', 'Chỉ phản đối'], 0, 'Đầy đủ: giải thích, chứng minh, bình luận, mở rộng.'),
    Q('Dẫn chứng tốt cho bài nghị luận xã hội cần?', ['Tiêu biểu, xác thực, mới mẻ, đa dạng', 'Lâu đời', 'Mơ hồ', 'Trùng lặp'], 0, 'Tiêu biểu + xác thực + đa chiều ⇒ tăng sức thuyết phục.'),
    Q('Sai lầm thường gặp khi viết NLXH?', ['Lập luận chung chung, thiếu dẫn chứng cụ thể', 'Có dẫn chứng phong phú', 'Lý lẽ chặt chẽ', 'Cấu trúc rõ ràng'], 0, 'Lạm dụng lý thuyết, thiếu dẫn chứng ⇒ bài thiếu sức nặng.'),
    Q('Vai trò bài học rút ra trong kết bài?', ['Liên hệ bản thân, rút ra hành động cụ thể', 'Lặp lại mở bài', 'Bỏ qua', 'Không cần'], 0, 'Bài học nhận thức + hành động ⇒ kết bài có giá trị thực tiễn.'),
  ]),

  M(26, 'Nghị luận xã hội — Hiện tượng đời sống', [
    Q('Nghị luận về hiện tượng đời sống là?', ['Bàn về một hiện tượng có thật trong xã hội (tốt hoặc xấu)', 'Tả cảnh', 'Kể chuyện', 'Bộc lộ cảm xúc'], 0, 'Hiện tượng cụ thể, có thật, đang được xã hội quan tâm.'),
    Q('Các bước phân tích hiện tượng?', ['Nêu hiện tượng - thực trạng - nguyên nhân - hậu quả/ý nghĩa - giải pháp', 'Chỉ phê phán', 'Chỉ ca ngợi', 'Kể'], 0, 'Quy trình phân tích đa chiều: bản chất + nguyên nhân + tác động + giải pháp.'),
    Q('Khi viết về hiện tượng "ô nhiễm môi trường", cần?', ['Số liệu cụ thể về thực trạng, nêu nguyên nhân chủ quan/khách quan, hậu quả, giải pháp', 'Chỉ tả thiên nhiên', 'Chỉ trách móc', 'Im lặng'], 0, 'Số liệu + phân tích đa chiều ⇒ bài thuyết phục.'),
    Q('Hiện tượng tích cực cần?', ['Ca ngợi + lan tỏa + đề xuất phát huy', 'Chỉ phê phán', 'Im lặng', 'Bỏ qua'], 0, 'Ghi nhận, biểu dương, nhân rộng.'),
    Q('Khi nghị luận về "sống ảo trên mạng xã hội", thái độ phù hợp?', ['Phân tích cả mặt tích cực lẫn tiêu cực, không một chiều', 'Chỉ phản đối hoàn toàn', 'Chỉ ủng hộ', 'Né tránh'], 0, 'Nhìn nhận khách quan, đa chiều — không một chiều cực đoan.'),
    Q('Hiện tượng "bạo lực học đường" cần đề xuất giải pháp?', ['Từ gia đình, nhà trường, xã hội, bản thân học sinh', 'Chỉ kỷ luật', 'Chỉ tuyên truyền', 'Không có giải pháp'], 0, 'Giải pháp toàn diện, đồng bộ từ nhiều phía.'),
  ]),

  M(27, 'Nghị luận văn học — Phân tích bài thơ', [
    Q('Phân tích bài thơ là?', ['Mổ xẻ làm rõ giá trị nội dung và nghệ thuật của bài thơ', 'Kể lại bài thơ', 'Học thuộc', 'Dịch nghĩa'], 0, 'Làm rõ giá trị (nội dung + nghệ thuật) qua phân tích hình ảnh, ngôn từ, biện pháp.'),
    Q('Cấu trúc bài phân tích thơ?', ['Mở (giới thiệu) - Thân (phân tích theo từng khổ/từng ý) - Kết (đánh giá)', 'Chỉ thân bài', 'Chỉ cảm nhận', 'Chỉ tả'], 0, 'Cấu trúc chặt chẽ, có luận điểm rõ ràng.'),
    Q('Khi phân tích thơ, cần chú ý đến?', ['Hình ảnh, ngôn từ, nhịp điệu, biện pháp tu từ, mạch cảm xúc', 'Chỉ nội dung', 'Chỉ tiểu sử tác giả', 'Số câu'], 0, 'Phân tích đầy đủ các yếu tố nghệ thuật.'),
    Q('Khi phân tích "Đồng chí", cần nhấn mạnh?', ['Cơ sở tình đồng chí, biểu hiện cụ thể, hình tượng "đầu súng trăng treo"', 'Tả Chính Hữu', 'Kể về kháng chiến', 'Bình luận chính trị'], 0, 'Bám vào chính bài thơ, làm rõ tư tưởng và nghệ thuật.'),
    Q('Nên trích dẫn câu thơ trong bài phân tích?', ['Trích đúng + bình giảng làm rõ giá trị', 'Chỉ trích không bình', 'Không trích', 'Trích sai cũng được'], 0, 'Trích + phân tích, không "đọc thơ".'),
    Q('Kết bài phân tích thơ nên?', ['Đánh giá khái quát giá trị + nêu ấn tượng/cảm xúc người đọc', 'Lặp lại mở bài', 'Tóm tắt nội dung', 'Bỏ trống'], 0, 'Khẳng định giá trị tác phẩm, vị trí trong nền văn học.'),
  ]),

  M(28, 'Nghị luận văn học — Phân tích nhân vật', [
    Q('Phân tích nhân vật cần làm rõ?', ['Đặc điểm (ngoại hình, hành động, lời nói, nội tâm) + ý nghĩa', 'Chỉ kể lại', 'Chỉ tả ngoại hình', 'Chỉ đánh giá đạo đức'], 0, 'Phân tích toàn diện các phương diện của nhân vật.'),
    Q('Khi phân tích Phương Định ("Những ngôi sao xa xôi"), cần làm rõ?', ['Vẻ đẹp dũng cảm trong chiến đấu + tâm hồn mơ mộng nữ tính', 'Chỉ ngoại hình', 'Chỉ công việc', 'Chỉ tâm lý'], 0, 'Tổng hòa các phẩm chất tạo nên chân dung sống động.'),
    Q('Khi phân tích ông Hai ("Làng"), trọng tâm là?', ['Tình yêu làng quê hòa quyện tình yêu kháng chiến qua diễn biến tâm trạng', 'Tả ngoại hình', 'Cảnh nông thôn', 'Hoàn cảnh gia đình'], 0, 'Phân tích diễn biến tâm trạng — điểm sáng nghệ thuật.'),
    Q('Phân tích nhân vật cần trích dẫn?', ['Chi tiết, câu văn, lời thoại tiêu biểu từ tác phẩm', 'Tác phẩm khác', 'Lời thầy cô', 'Không cần'], 0, 'Dẫn chứng từ chính tác phẩm để bảo đảm tính thuyết phục.'),
    Q('Ngoại hình nhân vật trong văn học thường?', ['Mang dụng ý nghệ thuật, gắn với tính cách', 'Tả ngẫu nhiên', 'Không quan trọng', 'Tách rời tính cách'], 0, 'Ngoại hình là chi tiết có chủ đích, biểu hiện tính cách.'),
    Q('Kết bài phân tích nhân vật nên?', ['Đánh giá vai trò nhân vật trong tác phẩm + ý nghĩa với người đọc', 'Lặp lại', 'Tả ngoại hình lần nữa', 'Bỏ trống'], 0, 'Khẳng định ý nghĩa, sức sống của nhân vật.'),
  ]),

  M(29, 'Văn bản nhật dụng — Phong cách Hồ Chí Minh', [
    Q('"Phong cách Hồ Chí Minh" của ai?', ['Lê Anh Trà', 'Phạm Văn Đồng', 'Hồ Chí Minh', 'Trường Chinh'], 0, 'Tác giả Lê Anh Trà.'),
    Q('Văn bản nhật dụng là?', ['Văn bản đề cập đến những vấn đề thiết thực, gần gũi với đời sống hiện nay', 'Văn cổ điển', 'Tiểu thuyết', 'Kịch'], 0, 'Đề tài nóng, gần gũi, mang tính thời sự, giáo dục.'),
    Q('Phong cách Hồ Chí Minh là sự kết hợp?', ['Vẻ đẹp truyền thống dân tộc và tinh hoa văn hóa nhân loại', 'Hai phong cách phương Tây', 'Truyền thống và hiện đại', 'Đông và Tây cực đoan'], 0, 'Tinh hoa Đông + Tây + dân tộc, hài hòa.'),
    Q('Sự giản dị của Bác thể hiện ở?', ['Lối sống, trang phục, bữa ăn, nơi ở', 'Cách nói', 'Cách viết', 'Tất cả các đáp án trên'], 3, 'Giản dị toàn diện trong cuộc sống thường nhật.'),
    Q('Văn bản giúp người đọc?', ['Cảm phục và học tập tấm gương đạo đức, lối sống của Bác', 'Chỉ biết tiểu sử', 'Học chính trị', 'Học ngoại ngữ'], 0, 'Bồi dưỡng nhân cách, lý tưởng sống.'),
    Q('Sự kết hợp Đông - Tây trong phong cách Bác là kết quả của?', ['Quá trình học tập, lao động, hoạt động cách mạng ở nhiều quốc gia', 'Bẩm sinh', 'Đọc sách', 'Du lịch'], 0, 'Bác đã đến nhiều nước, tiếp xúc nhiều nền văn hóa.'),
  ]),

  M(30, 'Văn bản nhật dụng — Đấu tranh cho một thế giới hòa bình', [
    Q('Tác giả "Đấu tranh cho một thế giới hòa bình" là?', ['G. Márquez (G. Garcia Marquez)', 'M. Gorki', 'L. Tolstoy', 'A. Chekhov'], 0, 'Nhà văn Colombia G. Garcia Marquez — Nobel Văn học 1982.'),
    Q('Văn bản viết về vấn đề?', ['Hiểm họa chiến tranh hạt nhân và lời kêu gọi hòa bình', 'Môi trường', 'Giáo dục', 'Kinh tế'], 0, 'Cảnh báo về nguy cơ hủy diệt từ vũ khí hạt nhân.'),
    Q('Tác giả dùng số liệu để chứng minh điều gì?', ['Sự nguy hiểm của vũ khí hạt nhân và sự lãng phí khổng lồ tiền của thay vì lo cho con người', 'Sự phát triển', 'Sự tiến bộ', 'Sự giàu có'], 0, 'Số liệu thuyết phục: chi phí khổng lồ cho vũ khí có thể giải quyết bao vấn đề nhân loại.'),
    Q('Cách lập luận của tác giả?', ['Chặt chẽ, đầy số liệu, có cảm xúc và sức thuyết phục cao', 'Lan man', 'Cảm tính', 'Sơ sài'], 0, 'Kết hợp lý lẽ + số liệu + cảm xúc nhân văn.'),
    Q('Thông điệp chính của văn bản?', ['Hãy bảo vệ hòa bình, đấu tranh ngăn chặn chiến tranh hạt nhân', 'Phát triển vũ khí', 'Sống thờ ơ', 'Tích trữ vũ khí'], 0, 'Lời kêu gọi nhân loại đoàn kết vì hòa bình.'),
    Q('Văn bản có ý nghĩa với thế giới hiện đại?', ['Vẫn nóng hổi vì nguy cơ chiến tranh, xung đột chưa hết', 'Lỗi thời', 'Chỉ liên quan thế kỷ trước', 'Không còn ý nghĩa'], 0, 'Vấn đề vẫn rất thời sự — vũ khí hạt nhân vẫn là mối đe dọa.'),
  ]),

  M(31, 'Ôn tập về thơ', [
    Q('Đặc điểm chung của thơ hiện đại VN giai đoạn 1945-1975?', ['Cảm hứng yêu nước, cách mạng, hình tượng người lính, nhân dân lao động', 'Thơ tình cá nhân', 'Thơ tôn giáo', 'Thơ trào phúng'], 0, 'Khuynh hướng sử thi + cảm hứng lãng mạn cách mạng.'),
    Q('Bài thơ nào sáng tác sau 1975?', ['Đồng chí', 'Sang thu, Mùa xuân nho nhỏ, Ánh trăng', 'Bài thơ về tiểu đội xe không kính', 'Đoàn thuyền đánh cá'], 1, 'Sang thu (1977), Mùa xuân nho nhỏ (1980), Ánh trăng (1978).'),
    Q('Cảm hứng chủ đạo của "Mùa xuân nho nhỏ"?', ['Khát vọng cống hiến', 'Tình yêu đôi lứa', 'Nỗi nhớ quê', 'Sự cô đơn'], 0, 'Cống hiến phần mình cho mùa xuân lớn của đất nước.'),
    Q('Bài thơ nào thể hiện tình cảm cha con sâu sắc?', ['Nói với con', 'Đồng chí', 'Bếp lửa', 'Ánh trăng'], 0, 'Y Phương — lời cha truyền con tình yêu cội nguồn.'),
    Q('Thể thơ năm chữ xuất hiện trong các bài?', ['Mùa xuân nho nhỏ, Ánh trăng, Sang thu', 'Đồng chí', 'Viếng lăng Bác', 'Bếp lửa'], 0, 'Cả 3 bài đều thể thơ 5 chữ — nhịp nhẹ nhàng, suy ngẫm.'),
    Q('Đặc điểm nổi bật của thơ Việt Nam sau 1975?', ['Cảm hứng đời tư, suy ngẫm, triết lý', 'Sử thi hào hùng', 'Trào phúng', 'Cổ điển'], 0, 'Thơ chuyển hướng nội tâm, suy ngẫm sâu sắc về cuộc sống.'),
  ]),

  M(32, 'Ôn tập về truyện', [
    Q('Đặc điểm truyện ngắn hiện đại VN?', ['Có cốt truyện độc đáo, tình huống đặc sắc, khắc họa nội tâm sâu sắc', 'Dài, nhiều nhân vật', 'Sử thi', 'Cổ điển'], 0, 'Tinh túy ở tình huống + tâm lý nhân vật.'),
    Q('Truyện "Làng" có tình huống độc đáo là?', ['Ông Hai nghe tin làng theo Tây', 'Mất mùa', 'Cãi nhau', 'Đám cưới'], 0, 'Tình huống đẩy nhân vật vào xung đột nội tâm dữ dội.'),
    Q('Truyện "Lặng lẽ Sa Pa" tỏa sáng vẻ đẹp của?', ['Người lao động vô danh âm thầm cống hiến', 'Anh hùng', 'Trí thức', 'Doanh nhân'], 0, 'Tôn vinh người lao động bình dị nhưng cao cả.'),
    Q('Tình huống nhận cha của bé Thu ("Chiếc lược ngà") xảy ra khi?', ['Lúc ông Sáu chuẩn bị lên đường trở lại chiến trường', 'Lúc mới gặp', 'Khi ăn cơm', 'Khi đi học'], 0, 'Khoảnh khắc cảm động nhất — và là khoảnh khắc cuối cùng.'),
    Q('"Bến quê" mang chủ đề?', ['Triết lý sống — trân trọng giá trị giản dị, gần gũi', 'Chiến tranh', 'Tình yêu', 'Sự nghiệp'], 0, 'Thông điệp về việc thức tỉnh, trân trọng cái bên cạnh.'),
    Q('Nhân vật Phương Định trong "Những ngôi sao xa xôi" mang vẻ đẹp?', ['Dũng cảm + nữ tính, mơ mộng', 'Chỉ dũng cảm', 'Chỉ mơ mộng', 'Lạnh lùng'], 0, 'Người con gái Việt Nam thời chiến: vừa anh hùng vừa nữ tính.'),
  ]),

  M(33, 'Ôn tập tiếng Việt', [
    Q('Khởi ngữ là?', ['Thành phần đứng trước chủ ngữ để nêu đề tài được nói đến', 'Vị ngữ', 'Trạng ngữ', 'Bổ ngữ'], 0, 'Vd: "Quyển sách này, tôi đã đọc rồi" — "quyển sách này" là khởi ngữ.'),
    Q('Thành phần biệt lập tình thái dùng để?', ['Thể hiện cách nhìn của người nói về sự việc (chắc, có lẽ, hình như…)', 'Gọi đáp', 'Cảm thán', 'Phụ chú'], 0, 'Biểu thị độ tin cậy: chắc chắn, có lẽ, có thể…'),
    Q('Phép liên kết nào sử dụng từ ngữ thay thế?', ['Phép thế', 'Phép lặp', 'Phép nối', 'Phép liên tưởng'], 0, 'Vd: dùng "nó", "đó", "cái ấy" thay cho từ đã nêu.'),
    Q('Phép nối sử dụng?', ['Quan hệ từ, liên từ để nối câu (vì vậy, do đó, nhưng, và…)', 'Đại từ', 'Lặp từ', 'Đồng nghĩa'], 0, 'Các từ nối ý: nhưng, tuy nhiên, vì vậy, do đó…'),
    Q('Câu "Trời mưa to. Vì vậy, đường rất trơn" sử dụng phép?', ['Nối (qua "vì vậy")', 'Lặp', 'Thế', 'Liên tưởng'], 0, '"Vì vậy" là từ nối quan hệ nguyên nhân - kết quả.'),
    Q('Hàm ý trong giao tiếp là?', ['Nghĩa không nói ra trực tiếp mà người nghe phải suy ra', 'Nghĩa hiển ngôn', 'Nghĩa từ điển', 'Nghĩa mặc định'], 0, 'Hàm ý đối lập với hiển ngôn — ý ngầm cần suy luận.'),
  ]),

  M(34, 'Đề ôn thi vào 10 — Đề số 1', [
    Q('Bài thơ "Mùa xuân nho nhỏ" của ai?', ['Thanh Hải', 'Hữu Thỉnh', 'Y Phương', 'Viễn Phương'], 0, 'Thanh Hải sáng tác năm 1980.'),
    Q('Tác phẩm nào KHÔNG phải của Nguyễn Du?', ['Truyện Kiều', 'Văn chiêu hồn', 'Lục Vân Tiên', 'Truyện Đoạn trường tân thanh'], 2, '"Lục Vân Tiên" của Nguyễn Đình Chiểu, các bài còn lại của Nguyễn Du.'),
    Q('Hình ảnh "đầu súng trăng treo" trong "Đồng chí" gợi?', ['Vẻ đẹp hiện thực và lãng mạn, chất chiến sĩ và thi sĩ trong người lính', 'Sự cô đơn', 'Bóng tối', 'Tình yêu đôi lứa'], 0, 'Hình ảnh kết tinh đẹp nhất bài thơ.'),
    Q('Truyện "Chiếc lược ngà" ca ngợi?', ['Tình cha con trong chiến tranh', 'Tình bạn', 'Tình mẹ con', 'Tình thầy trò'], 0, 'Tình phụ tử sâu nặng dù hoàn cảnh éo le.'),
    Q('Thành phần biệt lập cảm thán?', ['Ôi, chao ôi, trời ơi…', 'Có lẽ, hình như', 'Này, vâng', 'Vì vậy, nhưng'], 0, 'Bộc lộ cảm xúc trực tiếp.'),
    Q('Phép liên kết "Nó học giỏi. Nó còn ngoan ngoãn" là?', ['Phép lặp (lặp đại từ "Nó")', 'Phép thế', 'Phép nối', 'Liên tưởng'], 0, 'Lặp từ "Nó" để liên kết 2 câu.'),
  ]),

  M(35, 'Đề ôn thi vào 10 — Đề số 2', [
    Q('Bài thơ "Sang thu" tả thời điểm?', ['Cuối hạ — đầu thu', 'Cuối thu', 'Mùa hè', 'Đầu xuân'], 0, 'Khoảnh khắc giao mùa tinh tế.'),
    Q('"Người đồng mình thô sơ da thịt / Chẳng mấy ai nhỏ bé đâu con" — Tác giả là?', ['Y Phương', 'Hữu Thỉnh', 'Thanh Hải', 'Viễn Phương'], 0, 'Trích "Nói với con" của Y Phương.'),
    Q('Hình tượng "bếp lửa" trong bài thơ cùng tên biểu trưng cho?', ['Tình bà cháu, gia đình, quê hương', 'Sự ấm áp vật chất', 'Nỗi buồn', 'Tình bạn'], 0, 'Bếp lửa = ngọn lửa tình thân và tình yêu cội nguồn.'),
    Q('"Lặng lẽ Sa Pa" ngợi ca?', ['Vẻ đẹp người lao động bình dị', 'Cảnh thiên nhiên', 'Tình yêu', 'Sự giàu sang'], 0, 'Tôn vinh người lao động vô danh.'),
    Q('Để viết bài nghị luận xã hội về "lòng biết ơn", cần?', ['Giải thích - phân tích biểu hiện - dẫn chứng - phản đề - bài học', 'Chỉ kể chuyện', 'Chỉ ca ngợi', 'Chỉ trách móc'], 0, 'Đầy đủ các thao tác lập luận.'),
    Q('Câu hỏi tu từ "Ôi! Còn gì đẹp hơn?" có tác dụng?', ['Khẳng định mạnh mẽ giá trị thẩm mỹ, bộc lộ cảm xúc', 'Hỏi để có câu trả lời', 'Cãi cọ', 'Hoài nghi'], 0, 'Câu hỏi tu từ = khẳng định + biểu cảm.'),
  ]),
];

export const S9NV_SCENARIOS = indexBy(S9NV_WEEKS);
