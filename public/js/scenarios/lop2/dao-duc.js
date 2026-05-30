// ============================================================
// Lớp 2 · ĐẠO ĐỨC — 36 tuần (HK1: 1–18 · HK2: 19–36 · T22 chủ đề Tết)
// Bám CT GDPT 2018 môn Đạo đức Lớp 2.
// ID prefix: "P2DD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2DD', 'dao-duc', n, title, qs, opts);

export const P2DD_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Quý trọng thời gian', [
    Q('Vì sao chúng ta phải quý trọng thời gian?', ['Vì thời gian đã qua không lấy lại được', 'Vì thời gian rất nhiều', 'Vì người lớn bắt thế', 'Vì sách nói thế'], 0, 'Thời gian trôi đi không quay lại, nên cần dùng hợp lí.'),
    Q('Bạn nào quý trọng thời gian?', ['Bạn Lan vừa học vừa xem ti vi', 'Bạn An làm bài ngay sau khi đi học về', 'Bạn Bình ngủ nướng đến trưa', 'Bạn Mai chơi điện thoại cả ngày'], 1, 'Làm việc đúng lúc, không trì hoãn là quý trọng thời gian.'),
    Q('Em đi học về, việc nào nên làm TRƯỚC?', ['Mở ti vi xem hoạt hình', 'Cất cặp, rửa tay, ăn cơm rồi học bài', 'Chạy đi chơi với bạn', 'Nằm ngủ đến tối'], 1, 'Sắp xếp việc theo thứ tự hợp lí giúp dùng thời gian hiệu quả.'),
    Q('Hành vi nào LÃNG PHÍ thời gian?', ['Đọc sách 30 phút mỗi tối', 'Tập thể dục buổi sáng', 'Ngồi cả buổi chỉ xem điện thoại', 'Giúp mẹ nấu cơm'], 2, 'Ngồi xem điện thoại cả buổi là lãng phí thời gian.'),
    Q('Câu tục ngữ nào nói về quý trọng thời gian?', ['Thì giờ là vàng bạc', 'Có công mài sắt có ngày nên kim', 'Ăn quả nhớ kẻ trồng cây', 'Lá lành đùm lá rách'], 0, '"Thì giờ là vàng bạc" nói lên giá trị của thời gian.'),
    Q('Em nên làm gì khi còn 10 phút trước giờ vào học?', ['Ngồi yên đợi', 'Chuẩn bị sách vở, ôn bài', 'Chạy nhảy ngoài sân', 'Trêu chọc bạn'], 1, 'Dùng thời gian rảnh để chuẩn bị là biết quý thời gian.'),
  ]),

  M(2, 'Sắp xếp việc làm trong ngày', [
    Q('Vì sao cần sắp xếp việc làm trong ngày?', ['Để có nhiều thời gian chơi', 'Để làm xong việc và không quên việc gì', 'Để khoe với bạn', 'Để bố mẹ khen'], 1, 'Sắp xếp giúp việc nào cũng được hoàn thành đúng hạn.'),
    Q('Buổi sáng đi học, việc nào em nên làm ĐẦU TIÊN?', ['Xem ti vi', 'Đánh răng, rửa mặt, ăn sáng', 'Chơi điện tử', 'Đọc truyện tranh'], 1, 'Vệ sinh cá nhân và ăn sáng là việc đầu tiên buổi sáng.'),
    Q('Lịch sinh hoạt hợp lí của em là?', ['Học - chơi - ngủ đúng giờ', 'Chơi cả ngày, học khi nào thích', 'Thức khuya xem ti vi', 'Ăn lúc nào cũng được'], 0, 'Học, chơi, ngủ đúng giờ là lịch sinh hoạt tốt.'),
    Q('Em quên mang sách đến lớp vì không chuẩn bị từ tối. Em nên?', ['Đổ lỗi cho mẹ', 'Lần sau soạn sách trước khi đi ngủ', 'Không đi học nữa', 'Mượn của bạn rồi không trả'], 1, 'Soạn sách từ tối trước là thói quen tốt.'),
    Q('Bạn nào sắp xếp việc tốt?', ['Bạn Hoa làm bài ngay sau khi học về', 'Bạn Lan để bài tập đến khuya mới làm', 'Bạn Tú vừa ăn vừa xem điện thoại', 'Bạn Nam quên cả ăn vì mải chơi'], 0, 'Làm bài ngay khi còn nhớ bài là cách sắp xếp tốt.'),
    Q('Trước khi đi ngủ em nên?', ['Xem ti vi đến khuya', 'Soạn sách vở cho ngày mai', 'Ăn nhiều bánh kẹo', 'Chơi game đến 12 giờ'], 1, 'Soạn sách trước khi ngủ giúp sáng hôm sau không quên gì.'),
  ]),

  M(3, 'Đi học đúng giờ', [
    Q('Vì sao em phải đi học đúng giờ?', ['Để không bị muộn, không bỏ lỡ bài học', 'Để được cô khen', 'Vì sợ bị phạt', 'Vì bạn nào cũng đi'], 0, 'Đi đúng giờ giúp em không bỏ lỡ bài và tôn trọng thầy cô, bạn bè.'),
    Q('Hành vi nào ĐÚNG?', ['Đến lớp trước giờ học 5–10 phút', 'Đến lớp sau khi cô đã giảng', 'Vừa đi vừa ăn, đến muộn 15 phút', 'Lười dậy nên xin nghỉ học'], 0, 'Đến sớm 5–10 phút là vừa đẹp.'),
    Q('Sáng nay em ngủ dậy muộn, em nên?', ['Đi học muộn cũng không sao', 'Nhanh chóng chuẩn bị và xin lỗi cô khi đến lớp', 'Trốn học luôn', 'Đổ tại bố mẹ không gọi'], 1, 'Nhanh chóng đến lớp và xin lỗi là hành vi đúng.'),
    Q('Bạn đến lớp muộn làm ảnh hưởng đến ai?', ['Chỉ ảnh hưởng đến bạn ấy', 'Ảnh hưởng cả lớp và thầy cô đang dạy', 'Không ảnh hưởng đến ai', 'Chỉ ảnh hưởng cô giáo'], 1, 'Đến muộn làm gián đoạn bài giảng cho cả lớp.'),
    Q('Để đi học đúng giờ, em nên?', ['Đặt báo thức và đi ngủ sớm', 'Chơi điện thoại đến khuya', 'Đợi bố mẹ gọi mới dậy', 'Đi học khi nào muốn'], 0, 'Đi ngủ sớm và đặt báo thức giúp dậy đúng giờ.'),
  ]),

  M(4, 'Em yêu trường em', [
    Q('Hành vi nào thể hiện yêu trường?', ['Giữ vệ sinh lớp học, không vẽ bậy lên tường', 'Vứt rác bừa bãi trong sân', 'Bẻ cành cây trong sân trường', 'Viết bậy lên bàn ghế'], 0, 'Giữ vệ sinh và bảo vệ trường là yêu trường.'),
    Q('Em thấy bạn vẽ bậy lên tường lớp, em nên?', ['Vẽ cùng cho vui', 'Khuyên bạn không nên làm thế', 'Mặc kệ bạn', 'Bắt chước bạn'], 1, 'Nhắc bạn dừng việc làm sai là đúng.'),
    Q('Đồ dùng chung của lớp (bàn ghế, sách thư viện) em nên?', ['Dùng cẩn thận, giữ gìn sạch sẽ', 'Dùng rồi vứt bừa bãi', 'Vẽ tên mình lên', 'Mang về nhà làm của riêng'], 0, 'Đồ dùng chung phải được giữ gìn cẩn thận.'),
    Q('Khi tan học, em nên?', ['Để rác trên bàn cho cô lao công dọn', 'Tự dọn chỗ ngồi, bỏ rác vào thùng', 'Để bạn khác dọn', 'Ra về luôn, không quan tâm'], 1, 'Tự dọn chỗ ngồi là biểu hiện yêu trường.'),
    Q('Bạn nào yêu trường?', ['Bạn Lan tưới cây ở sân trường', 'Bạn Tú khắc tên lên bàn', 'Bạn Hùng đá bóng vào cửa kính', 'Bạn Mai xé sách thư viện'], 0, 'Chăm sóc cây cối ở trường là yêu trường.'),
    Q('Em yêu trường nên?', ['Tham gia lao động vệ sinh trường lớp', 'Trốn buổi lao động', 'Phá đồ dùng lớp', 'Chê trường mình xấu'], 0, 'Tham gia giữ gìn trường lớp là biểu hiện yêu trường.'),
  ]),

  M(5, 'Lễ phép với thầy cô giáo', [
    Q('Khi gặp thầy cô ở cổng trường, em nên?', ['Cúi đầu, lễ phép chào cô (thầy)', 'Đi thẳng, không chào', 'Cười lớn rồi chạy', 'Giả vờ không thấy'], 0, 'Chào hỏi thầy cô là biểu hiện lễ phép cơ bản.'),
    Q('Khi thầy cô đang giảng bài, em nên?', ['Lắng nghe, không nói chuyện riêng', 'Nói chuyện với bạn bên cạnh', 'Lấy đồ chơi ra chơi', 'Nằm gục xuống bàn'], 0, 'Lắng nghe khi thầy cô giảng là tôn trọng thầy cô.'),
    Q('Muốn phát biểu ý kiến, em làm gì?', ['Nói to lên ngay', 'Giơ tay xin phép cô', 'Đứng dậy nói luôn', 'Đập bàn để cô chú ý'], 1, 'Giơ tay xin phép là phép lịch sự trong lớp.'),
    Q('Lời nào lễ phép với cô giáo?', ['"Ê cô, cho em hỏi"', '"Thưa cô, cho em hỏi ạ"', '"Cô ơi, ra đây"', '"Cô làm hộ em đi"'], 1, '"Thưa cô… ạ" là cách xưng hô lễ phép.'),
    Q('Em làm sai và bị cô nhắc, em nên?', ['Cãi lại cô', 'Lắng nghe và xin lỗi cô', 'Khóc to cho cô nhường', 'Bỏ ra ngoài lớp'], 1, 'Lắng nghe, xin lỗi và sửa sai là đúng.'),
    Q('Bạn nào lễ phép?', ['Bạn Hoa chào cô khi gặp ngoài đường', 'Bạn Tú gọi cô là "bà ấy"', 'Bạn Lan trêu chọc cô lúc cô quay đi', 'Bạn Nam nhại lời cô giáo'], 0, 'Chào cô khi gặp dù ở đâu là lễ phép.'),
  ]),

  M(6, 'Chào hỏi người lớn', [
    Q('Gặp ông bà, em nên?', ['Khoanh tay lễ phép chào ông bà', 'Đi thẳng vào nhà', 'Nói "Ê ông"', 'Giả vờ không thấy'], 0, 'Khoanh tay chào là cách chào người lớn lễ phép.'),
    Q('Khách đến nhà chơi, em làm gì?', ['Trốn vào phòng', 'Chào khách rồi mời nước', 'Quát "Cô đi đi"', 'Đứng nhìn không nói gì'], 1, 'Chào khách và mời nước là biểu hiện hiếu khách.'),
    Q('Lời chào nào lễ phép?', ['"Cháu chào bác ạ"', '"Chào bác"', '"Hi bác"', '"Ê bác"'], 0, 'Thêm "ạ" và xưng "cháu" thể hiện lễ phép.'),
    Q('Em đi học về, gặp bố mẹ em nên?', ['Im lặng đi vào phòng', 'Chào bố, chào mẹ con đã về', 'Vứt cặp rồi chạy đi chơi', 'Đòi ăn ngay không chào'], 1, 'Chào bố mẹ khi về là phép lịch sự trong gia đình.'),
    Q('Hành vi nào KHÔNG lễ phép?', ['Khoanh tay chào người lớn', 'Gọi cô chú bằng "ê", "ấy"', 'Cúi đầu chào thầy cô', 'Mời khách uống nước'], 1, 'Gọi cô chú bằng "ê", "ấy" là vô lễ.'),
    Q('Khi nhận quà từ người lớn, em nên?', ['Giật lấy ngay', 'Nhận bằng hai tay và cảm ơn', 'Chê quà xấu', 'Vứt quà đi'], 1, 'Nhận bằng hai tay và cảm ơn là lễ phép.'),
  ]),

  M(7, 'Em yêu gia đình', [
    Q('Gia đình là nơi?', ['Yêu thương, đùm bọc lẫn nhau', 'Chỉ để ngủ', 'Để mọi người cãi nhau', 'Không quan trọng'], 0, 'Gia đình là nơi yêu thương, gắn bó.'),
    Q('Em thể hiện tình yêu gia đình bằng cách?', ['Vâng lời, giúp đỡ ông bà cha mẹ', 'Chỉ đòi hỏi quà', 'Hỗn láo với người lớn', 'Cãi vã với anh chị'], 0, 'Yêu gia đình là vâng lời và giúp đỡ.'),
    Q('Mẹ ốm, em nên làm gì?', ['Đi chơi với bạn', 'Lấy nước, hỏi thăm và giúp mẹ việc nhà', 'Bật ti vi to', 'Đòi mẹ nấu món em thích'], 1, 'Quan tâm, chăm sóc mẹ khi mẹ ốm là yêu mẹ.'),
    Q('Bạn nào yêu gia đình?', ['Bạn An giúp bà tưới cây', 'Bạn Lan cãi mẹ vì không được mua đồ chơi', 'Bạn Bình bỏ nhà đi chơi cả ngày', 'Bạn Tú không nói chuyện với bố'], 0, 'Giúp đỡ ông bà là biểu hiện yêu gia đình.'),
    Q('Cuối tuần, gia đình em nên?', ['Mỗi người một phòng, không ai nói chuyện', 'Cùng ăn cơm, trò chuyện, đi chơi cùng nhau', 'Bố mẹ làm việc, con chơi điện thoại', 'Không quan tâm đến nhau'], 1, 'Quây quần bên nhau là biểu hiện gia đình ấm áp.'),
    Q('Sinh nhật bà, em làm gì?', ['Không nhớ', 'Chúc mừng bà và làm thiệp tặng bà', 'Đòi quà sinh nhật', 'Đi chơi không về'], 1, 'Nhớ và chúc mừng sinh nhật bà là yêu bà.'),
  ]),

  M(8, 'Vâng lời ông bà, cha mẹ', [
    Q('Vâng lời ông bà cha mẹ là?', ['Làm theo những lời dạy đúng đắn', 'Làm tất cả mọi việc dù sai', 'Cãi lại khi không thích', 'Bỏ đi khi bị nhắc'], 0, 'Vâng lời nghĩa là làm theo lời dạy đúng đắn.'),
    Q('Mẹ bảo đi ngủ sớm, em nên?', ['Vâng dạ và đi ngủ đúng giờ', 'Lén dậy chơi điện thoại', 'Cãi lại "Con chưa buồn ngủ"', 'Khóc đòi xem ti vi'], 0, 'Đi ngủ đúng giờ là vâng lời mẹ.'),
    Q('Ông bảo không được ăn nhiều kẹo, em làm gì?', ['Trốn ông ăn vụng', 'Nghe lời ông, ăn ít kẹo lại', 'Cãi "Ông không cho con ăn gì"', 'Giấu kẹo trong ngăn kéo'], 1, 'Nghe lời người lớn vì sức khoẻ là đúng.'),
    Q('Hành vi nào KHÔNG vâng lời?', ['Mẹ bảo dọn phòng, em dọn ngay', 'Mẹ bảo học bài, em vẫn xem điện thoại', 'Bà bảo ăn rau, em ăn rau', 'Bố bảo về sớm, em về sớm'], 1, 'Mẹ bảo học mà vẫn xem điện thoại là không vâng lời.'),
    Q('Vì sao em nên vâng lời ông bà cha mẹ?', ['Vì sợ bị mắng', 'Vì người lớn yêu thương và muốn tốt cho em', 'Vì không có ai chơi cùng', 'Vì bị bắt phải nghe'], 1, 'Người lớn dạy bảo vì yêu thương ta.'),
    Q('Bố bảo em không chơi điện thoại trước khi ngủ, em nên?', ['Lén chơi trong chăn', 'Vâng lời, cất điện thoại đi ngủ', 'Cãi bố', 'Khóc đòi chơi'], 1, 'Vâng lời bố giữ gìn sức khoẻ là đúng.'),
  ]),

  M(9, 'Yêu thương em nhỏ', [
    Q('Em nên đối xử với em bé thế nào?', ['Yêu thương, nhường nhịn em', 'Bắt nạt em', 'Giành đồ chơi của em', 'Đánh em khi giận'], 0, 'Là anh chị thì phải yêu thương em nhỏ.'),
    Q('Em bé khóc, em nên?', ['Quát to để em im', 'Dỗ dành, hỏi xem em cần gì', 'Bỏ đi không quan tâm', 'Cấu em cho khóc to hơn'], 1, 'Dỗ em và quan tâm em là cách đúng.'),
    Q('Em và em bé cùng thích 1 cái bánh, em nên?', ['Giành lấy ăn hết', 'Chia đôi cùng ăn hoặc nhường em', 'Vứt bánh đi', 'Đánh em cho em sợ'], 1, 'Nhường em là biểu hiện yêu thương em.'),
    Q('Bạn nào yêu thương em nhỏ?', ['Anh An đọc truyện cho em nghe', 'Chị Lan đánh em vì em đụng đồ', 'Anh Bình giật đồ chơi của em', 'Chị Mai bắt em làm bài hộ'], 0, 'Đọc truyện cho em là cách thể hiện yêu em.'),
    Q('Em bé làm rơi đồ của em, em nên?', ['Đánh em', 'Nhắc em nhẹ nhàng và nhặt lên', 'Hét vào mặt em', 'Mách bố mẹ đánh em'], 1, 'Nhẹ nhàng nhắc em vì em còn nhỏ.'),
    Q('Có em nhỏ trong nhà, em nên?', ['Làm gương cho em noi theo', 'Cãi nhau với em', 'Tranh giành đồ với em', 'Nói xấu em với bố mẹ'], 0, 'Anh chị nên làm gương tốt cho em.'),
  ]),

  M(10, 'Giúp đỡ bạn bè (1)', [
    Q('Bạn quên bút, em nên?', ['Mặc kệ bạn', 'Cho bạn mượn bút', 'Cười chê bạn', 'Mách cô giáo'], 1, 'Cho bạn mượn bút là giúp đỡ bạn.'),
    Q('Bạn không hiểu bài, em đã hiểu, em nên?', ['Giấu cho bạn không biết', 'Giảng lại cho bạn nghe', 'Cười chê bạn dốt', 'Không cho bạn hỏi'], 1, 'Giảng giúp bạn là biểu hiện tình bạn tốt.'),
    Q('Bạn bị ngã ở sân trường, em làm gì?', ['Cười rồi bỏ đi', 'Đỡ bạn dậy, hỏi thăm bạn', 'Đứng nhìn không làm gì', 'Chế nhạo bạn vụng về'], 1, 'Đỡ bạn dậy và hỏi thăm là việc làm đẹp.'),
    Q('Bạn ốm phải nghỉ học, em nên?', ['Mặc kệ bạn', 'Ghi bài hộ và mang đến nhà bạn', 'Cười bạn yếu đuối', 'Lấy đồ của bạn'], 1, 'Ghi bài hộ là quan tâm và giúp đỡ bạn.'),
    Q('Giúp đỡ bạn KHÔNG nên là?', ['Cho bạn mượn đồ dùng', 'Cho bạn chép bài kiểm tra', 'Giảng bài cho bạn', 'An ủi khi bạn buồn'], 1, 'Cho bạn chép bài kiểm tra là gian dối, không phải giúp.'),
    Q('Bạn nào biết giúp đỡ?', ['Bạn Lan giúp bạn xách cặp khi bạn bị đau tay', 'Bạn Tú giành đồ ăn của bạn', 'Bạn Hùng cười chê bạn vấp ngã', 'Bạn Mai không cho ai mượn gì'], 0, 'Giúp bạn khi bạn cần là biểu hiện tốt.'),
  ]),

  M(11, 'Giúp đỡ bạn bè (2) — bạn khuyết tật, hoàn cảnh khó khăn', [
    Q('Trong lớp có bạn khuyết tật, em nên?', ['Tránh xa bạn', 'Quan tâm, giúp đỡ và chơi với bạn', 'Trêu chọc bạn', 'Bắt chước dáng đi của bạn'], 1, 'Bạn khuyết tật cần được yêu thương, không bị kỳ thị.'),
    Q('Bạn nhà nghèo không có sách mới, em nên?', ['Khinh thường bạn', 'Cho bạn mượn sách hoặc tặng bạn sách cũ còn tốt', 'Khoe sách mới với bạn', 'Không chơi với bạn'], 1, 'Chia sẻ giúp bạn vượt qua khó khăn.'),
    Q('Hành vi nào ĐÚNG với bạn khiếm thị (không nhìn được)?', ['Dẫn bạn đi vệ sinh khi cần', 'Cười nhạo bạn', 'Đẩy bạn đi nơi nguy hiểm', 'Lấy đồ của bạn'], 0, 'Dẫn bạn khiếm thị là giúp đỡ thiết thực.'),
    Q('Bạn bị mất bố/mẹ, em nên?', ['Hỏi bạn cho biết chuyện', 'An ủi, chơi cùng bạn bình thường', 'Tránh bạn ra', 'Nói "bạn không có bố/mẹ"'], 1, 'An ủi và chơi cùng giúp bạn vơi buồn.'),
    Q('Bạn không có áo ấm vào mùa đông, em làm gì?', ['Trêu bạn rét', 'Báo với cô giáo và quyên góp giúp bạn', 'Cười chê bạn', 'Khoe áo ấm của mình'], 1, 'Báo cô và quyên góp là cách giúp bạn thiết thực.'),
  ]),

  M(12, 'Chia sẻ với bạn', [
    Q('Em có 4 cái kẹo, bạn không có. Em nên?', ['Ăn hết một mình', 'Chia cho bạn vài cái', 'Khoe kẹo trước mặt bạn', 'Cất giấu cho bạn không thấy'], 1, 'Chia sẻ kẹo là biểu hiện đẹp của tình bạn.'),
    Q('Bạn buồn vì điểm thấp, em nên?', ['Cười bạn dốt', 'An ủi và rủ bạn cùng ôn lại bài', 'Khoe điểm cao của mình', 'Mách cả lớp'], 1, 'Chia sẻ nỗi buồn và giúp đỡ là tình bạn đẹp.'),
    Q('Em có đồ chơi mới, các bạn xúm vào xem, em nên?', ['Giấu đi không cho ai chơi', 'Cho các bạn cùng chơi', 'Đòi bạn trả tiền mới được chơi', 'Đánh bạn khi bạn chạm vào'], 1, 'Chia sẻ đồ chơi cùng bạn là vui vẻ, hoà đồng.'),
    Q('Lan đạt giải Nhất, em nên?', ['Ghen tị, không nói gì', 'Chúc mừng Lan và chia sẻ niềm vui', 'Nói xấu Lan', 'Phá đồ của Lan'], 1, 'Chia sẻ niềm vui với bạn là tình bạn tốt.'),
    Q('Hành vi nào KHÔNG chia sẻ?', ['Cho bạn mượn truyện đọc', 'Khoe đồ ăn mà không mời bạn', 'Cùng bạn ăn snack', 'Tặng quà sinh nhật bạn'], 1, 'Khoe đồ ăn mà không mời là ích kỉ.'),
    Q('Chia sẻ với bạn giúp tình bạn?', ['Xa cách hơn', 'Gắn bó, thân thiết hơn', 'Bị bạn khinh', 'Mất bạn'], 1, 'Chia sẻ làm bạn bè gắn bó hơn.'),
  ]),

  M(13, 'Đoàn kết với bạn', [
    Q('Đoàn kết với bạn nghĩa là?', ['Cùng nhau giúp đỡ, không gây gổ', 'Đánh nhau cho vui', 'Chia phe cãi nhau', 'Tẩy chay bạn không hợp ý'], 0, 'Đoàn kết là yêu thương, cùng nhau, không gây gổ.'),
    Q('Hai bạn cãi nhau vì giành chỗ ngồi, em nên?', ['Mặc kệ', 'Khuyên hai bạn nhường nhau', 'Hùa theo một bên', 'Cổ vũ cãi to hơn'], 1, 'Khuyên giải để hai bạn hoà thuận là đúng.'),
    Q('Bạn vô tình va vào em, em nên?', ['Đánh lại bạn', 'Mỉm cười và nói "Không sao"', 'Mắng bạn to', 'Mách cô đánh phạt bạn'], 1, 'Bao dung với lỗi nhỏ giữ tình bạn đẹp.'),
    Q('Trong trò chơi tập thể, em nên?', ['Chỉ chơi một mình', 'Hợp tác với cả đội', 'Cãi nhau với đồng đội', 'Bỏ cuộc giữa chừng'], 1, 'Hợp tác với đội là đoàn kết.'),
    Q('Hành vi nào KHÔNG đoàn kết?', ['Cùng bạn dọn lớp', 'Cãi vã, đánh nhau với bạn', 'Cùng làm bài nhóm', 'Chơi cùng bạn mới'], 1, 'Đánh nhau là phá vỡ đoàn kết.'),
    Q('Khi cả nhóm không đồng ý với ý của em, em nên?', ['Tức giận bỏ đi', 'Lắng nghe ý kiến chung và cùng làm', 'Phá phách cho nhóm thất bại', 'Tách ra làm một mình'], 1, 'Lắng nghe và làm theo số đông là đoàn kết.'),
  ]),

  M(14, 'Yêu lao động', [
    Q('Vì sao em phải yêu lao động?', ['Lao động giúp chúng ta khoẻ mạnh và tạo ra của cải', 'Vì bố mẹ bắt làm', 'Vì lười là xấu', 'Để được khen'], 0, 'Lao động đem lại sức khoẻ và giá trị cuộc sống.'),
    Q('Việc làm nào là yêu lao động?', ['Quét nhà giúp mẹ', 'Nằm cả ngày xem ti vi', 'Vứt rác bừa bãi', 'Bắt em làm hộ'], 0, 'Tự nguyện làm việc nhà là yêu lao động.'),
    Q('Em thấy mẹ đang nấu cơm, em nên?', ['Đi chơi tiếp', 'Hỏi xem có giúp được gì không', 'Đòi ăn ngay', 'Chê cơm mẹ nấu chậm'], 1, 'Chủ động giúp đỡ là yêu lao động.'),
    Q('Hành vi nào KHÔNG yêu lao động?', ['Giúp bố tưới cây', 'Trốn việc, đùn việc cho người khác', 'Tự xếp chăn màn', 'Rửa chén sau bữa ăn'], 1, 'Trốn việc là lười lao động.'),
    Q('Tục ngữ nào nói về lao động?', ['Có làm thì mới có ăn', 'Tay làm hàm nhai, tay quai miệng trễ', 'Cả hai câu trên', 'Không có câu nào'], 2, 'Cả hai câu đều nói về giá trị lao động.'),
    Q('Bạn nào yêu lao động?', ['Bạn An tự dọn bàn học của mình', 'Bạn Tú bắt em làm hộ bài', 'Bạn Lan nằm chờ mẹ làm hết', 'Bạn Hùng không bao giờ giúp việc nhà'], 0, 'Tự dọn bàn học là yêu lao động.'),
  ]),

  M(15, 'Trân trọng người lao động', [
    Q('Người lao động bao gồm những ai?', ['Bác sĩ, nông dân, công nhân, lao công, giáo viên…', 'Chỉ có người giàu', 'Chỉ có nhân viên văn phòng', 'Chỉ có người nổi tiếng'], 0, 'Mọi người làm việc đều là người lao động.'),
    Q('Bác lao công đang quét sân trường, em nên?', ['Vứt rác ngay chỗ bác vừa quét', 'Chào bác và cảm ơn bác', 'Cười chê công việc của bác', 'Không quan tâm'], 1, 'Chào và cảm ơn người lao động là tôn trọng.'),
    Q('Bác nông dân làm ra hạt gạo, em nên?', ['Coi thường nghề nông dân', 'Quý hạt gạo, không bỏ phí cơm', 'Đổ cơm thừa', 'Nói "nghề ấy thấp kém"'], 1, 'Quý hạt gạo là trân trọng công lao nông dân.'),
    Q('Hành vi nào KHÔNG tôn trọng người lao động?', ['Cảm ơn cô bán hàng', 'Chế nhạo nghề nghiệp người khác', 'Chào bác bảo vệ', 'Giúp đỡ cô lao công'], 1, 'Chế nhạo nghề là thiếu tôn trọng.'),
    Q('Bố mẹ đi làm về mệt, em nên?', ['Đòi đi chơi ngay', 'Hỏi thăm và mời nước bố mẹ', 'Bật nhạc to', 'Mặc kệ bố mẹ'], 1, 'Quan tâm bố mẹ là biết ơn lao động của bố mẹ.'),
    Q('Câu nói nào ĐÚNG?', ['Mọi nghề lao động chân chính đều đáng quý', 'Chỉ có nghề lương cao mới đáng quý', 'Nghề nông dân là thấp kém', 'Nghề lao công không quan trọng'], 0, 'Mọi nghề lương thiện đều đáng quý.'),
  ]),

  M(16, 'Quý trọng đồng tiền', [
    Q('Đồng tiền do đâu mà có?', ['Tự nhiên có', 'Do lao động làm ra', 'Do trời cho', 'Nhặt ngoài đường'], 1, 'Tiền là kết quả của lao động.'),
    Q('Em nhận được tiền lì xì, em nên?', ['Tiêu hết ngay vào đồ chơi', 'Cảm ơn và để dành mua đồ cần thiết', 'Khoe với mọi người', 'Vứt đi không cần'], 1, 'Tiết kiệm và dùng đúng việc là quý trọng tiền.'),
    Q('Bạn nào quý trọng tiền?', ['Bạn Lan bỏ ống heo tiết kiệm tiền tiêu vặt', 'Bạn Tú vứt tiền lẻ xuống đất', 'Bạn Bình tiêu xài hoang phí', 'Bạn Hùng đòi mua mọi thứ'], 0, 'Tiết kiệm tiền vào ống heo là quý tiền.'),
    Q('Mẹ cho 5.000 đồng ăn sáng, em nên?', ['Tiêu hết và xin thêm', 'Dùng đúng mục đích, không vòi thêm', 'Cất đi không ăn sáng', 'Khoe với bạn'], 1, 'Dùng đúng mục đích là quý tiền của bố mẹ.'),
    Q('Hành vi nào LÃNG PHÍ tiền?', ['Tiết kiệm bỏ heo', 'Mua đồ chơi không cần thiết liên tục', 'Mua đồ dùng học tập', 'Để dành mua quà tặng mẹ'], 1, 'Mua đồ không cần thiết là lãng phí.'),
    Q('Em nhặt được tờ 50.000 đồng ở sân trường, em nên?', ['Bỏ túi mang về', 'Đem nộp cô giáo để trả lại người mất', 'Đưa cho bạn thân', 'Xé tờ tiền đi'], 1, 'Trả lại của rơi là thật thà.'),
  ]),

  M(17, 'Học tập chăm chỉ', [
    Q('Chăm chỉ học tập là?', ['Học bài, làm bài đầy đủ mỗi ngày', 'Chỉ học khi có kiểm tra', 'Học khi nào thích', 'Không bao giờ học'], 0, 'Chăm chỉ là duy trì học tập đều đặn.'),
    Q('Bạn nào chăm chỉ?', ['Bạn Lan làm bài tập ngay khi về nhà', 'Bạn Tú để bài tập đến sát giờ vào lớp', 'Bạn Bình quên làm bài thường xuyên', 'Bạn Hùng chép bài bạn'], 0, 'Làm bài ngay là chăm chỉ.'),
    Q('Khi không hiểu bài, em nên?', ['Bỏ qua không quan tâm', 'Hỏi thầy cô hoặc bạn để hiểu', 'Chép đại đáp án', 'Nói dối là đã hiểu'], 1, 'Hỏi để hiểu là biểu hiện chăm học.'),
    Q('Tục ngữ "Có công mài sắt có ngày nên kim" nói về?', ['Kiên trì, chăm chỉ sẽ thành công', 'Mài sắt rất khó', 'Kim làm bằng sắt', 'Không nên mài sắt'], 0, 'Câu này nói lên giá trị của kiên trì học tập.'),
    Q('Hành vi nào KHÔNG chăm chỉ?', ['Đọc thêm sách', 'Làm bài tập về nhà', 'Trốn học đi chơi điện tử', 'Ôn bài trước giờ kiểm tra'], 2, 'Trốn học là lười biếng.'),
    Q('Em đặt mục tiêu học tập thì nên?', ['Cố gắng từng ngày để đạt được', 'Nói cho có rồi không làm', 'Để bố mẹ học hộ', 'Bỏ ngay khi gặp khó'], 0, 'Kiên trì cố gắng là chăm chỉ thực sự.'),
  ]),

  M(18, 'Sơ kết HK1 — Tự đánh giá phẩm chất', [
    Q('Trong HK1, em đã học chăm chỉ. Biểu hiện nào em đã làm tốt?', ['Làm bài đầy đủ mỗi ngày', 'Trốn học', 'Chép bài bạn', 'Quên sách vở'], 0, 'Làm bài đầy đủ là biểu hiện chăm chỉ.'),
    Q('Em gặp bạn khuyết tật ở lớp, em đã?', ['Trêu chọc bạn', 'Giúp đỡ bạn khi cần', 'Tránh xa bạn', 'Bắt chước dáng đi của bạn'], 1, 'Giúp đỡ bạn khuyết tật là biểu hiện tốt.'),
    Q('Mỗi sáng đi học, em luôn?', ['Đến trễ', 'Đến đúng giờ', 'Ở nhà ngủ', 'Đi muộn 15 phút'], 1, 'Đúng giờ là phẩm chất tốt.'),
    Q('Khi mẹ ốm, em đã?', ['Đi chơi với bạn', 'Quan tâm và chăm sóc mẹ', 'Đòi mẹ nấu cơm', 'Mặc kệ mẹ'], 1, 'Chăm mẹ ốm là yêu mẹ.'),
    Q('Bạn quên bút, em đã?', ['Cho bạn mượn', 'Cười chê bạn', 'Mặc kệ bạn', 'Mách cô'], 0, 'Cho mượn bút là giúp đỡ bạn.'),
    Q('Em có 5 cái kẹo, em đã?', ['Ăn hết một mình', 'Chia cho bạn', 'Giấu kẹo', 'Khoe rồi không cho'], 1, 'Chia kẹo cho bạn là chia sẻ.'),
    Q('Tiền lì xì em đã?', ['Để dành tiết kiệm', 'Tiêu hết mua đồ chơi', 'Vứt đi', 'Cho hết bạn'], 0, 'Tiết kiệm tiền lì xì là quý tiền.'),
    Q('Bác lao công quét sân, em đã?', ['Vứt rác ngay đó', 'Chào và cảm ơn bác', 'Không quan tâm', 'Cười nhạo bác'], 1, 'Cảm ơn người lao động là tôn trọng họ.'),
    Q('Gặp thầy cô ngoài đường, em đã?', ['Cúi đầu chào thầy cô', 'Đi thẳng không chào', 'Giả vờ không thấy', 'Chạy trốn'], 0, 'Chào thầy cô là lễ phép.'),
    Q('Phẩm chất nào em cần cố gắng hơn trong HK2?', ['Tất cả các phẩm chất tốt: trung thực, chăm chỉ, trách nhiệm, nhân ái, yêu nước', 'Không cần cố gắng', 'Chỉ cần ngoan ở nhà', 'Chỉ cần chăm học là đủ'], 0, 'Em cần rèn luyện toàn diện tất cả phẩm chất.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Trung thực trong học tập', [
    Q('Trung thực trong học tập là?', ['Không gian dối, không cóp bài', 'Cóp bài để được điểm cao', 'Nói dối cô về điểm', 'Sửa bài kiểm tra sau khi cô trả'], 0, 'Trung thực là không gian dối khi học.'),
    Q('Khi kiểm tra, em không nhớ bài, em nên?', ['Cóp bài bạn', 'Tự cố gắng làm, không quay cóp', 'Hỏi bạn nhỏ tiếng', 'Mở sách ra xem'], 1, 'Tự làm là trung thực.'),
    Q('Bạn đưa em xem bài kiểm tra, em nên?', ['Chép luôn cho nhanh', 'Từ chối và tự làm', 'Cảm ơn rồi chép', 'Khoe với bạn khác'], 1, 'Từ chối chép là trung thực.'),
    Q('Em làm bài sai nhưng cô chấm thành đúng, em nên?', ['Im lặng nhận điểm cao', 'Báo cô để cô chấm lại', 'Khoe điểm cao với bạn', 'Mừng thầm'], 1, 'Báo cô là trung thực.'),
    Q('Hành vi nào KHÔNG trung thực?', ['Tự làm bài', 'Sửa điểm trong sổ liên lạc', 'Nói thật với cô', 'Nhận lỗi khi sai'], 1, 'Sửa điểm là gian dối.'),
    Q('Bạn nào trung thực?', ['Bạn An tự làm bài dù khó', 'Bạn Tú cóp bài bạn ngồi cạnh', 'Bạn Lan giấu bài kiểm tra điểm kém', 'Bạn Hùng đổ lỗi cho bạn khác'], 0, 'Tự làm bài là trung thực.'),
  ]),

  M(20, 'Nhặt được của rơi trả lại', [
    Q('Em nhặt được chiếc ví ở sân trường, em nên?', ['Đem nộp cô giáo hoặc bác bảo vệ', 'Bỏ túi mang về', 'Lấy tiền rồi vứt ví', 'Đưa cho bạn thân'], 0, 'Nộp lại là trả của rơi cho người mất.'),
    Q('Vì sao em phải trả lại của rơi?', ['Vì đó là của người khác, không phải của mình', 'Vì sợ bị đánh', 'Vì sợ bị mắng', 'Vì người ta nhìn thấy'], 0, 'Đồ của ai thì phải trả người đó.'),
    Q('Nhặt được 50.000 đồng trong lớp, em làm gì?', ['Mua kẹo cho cả nhóm', 'Đưa cô giáo nhờ tìm chủ nhân', 'Giấu vào ngăn bàn của mình', 'Chia đôi với bạn'], 1, 'Nhờ cô tìm chủ là đúng.'),
    Q('Bạn nhặt được đồng hồ, bạn nói "tao giữ luôn", em nên?', ['Đồng ý chia phần', 'Khuyên bạn trả lại cho người mất', 'Khen bạn may mắn', 'Đòi bạn cho mình'], 1, 'Khuyên bạn làm đúng là tốt.'),
    Q('Cảm giác sau khi trả lại của rơi là?', ['Vui vì làm việc tốt', 'Buồn vì mất tiền', 'Tiếc nuối', 'Sợ hãi'], 0, 'Làm điều đúng khiến lòng vui.'),
    Q('Câu nào ĐÚNG?', ['Của rơi nhặt được là của mình', 'Trả lại của rơi là phẩm chất tốt', 'Càng nhiều của rơi càng giàu', 'Không cần trả nếu không có ai biết'], 1, 'Trả lại của rơi là biểu hiện trung thực.'),
  ]),

  M(21, 'Nhận lỗi và sửa lỗi', [
    Q('Em làm vỡ cốc, em nên?', ['Giấu mảnh vỡ đi', 'Xin lỗi mẹ và dọn dẹp cẩn thận', 'Đổ lỗi cho em bé', 'Khóc không nhận lỗi'], 1, 'Xin lỗi và sửa sai là biết nhận lỗi.'),
    Q('Em quên làm bài tập, cô hỏi, em nên?', ['Nói dối là quên sách ở nhà', 'Thừa nhận quên và xin cô cho làm bù', 'Đổ lỗi cho mẹ', 'Khóc cho cô tha'], 1, 'Thừa nhận và sửa sai là đúng.'),
    Q('Em đánh em bé khiến em khóc, em nên?', ['Bảo em "không được mách mẹ"', 'Xin lỗi em và dỗ em', 'Đe doạ em', 'Đổ tại em hỗn'], 1, 'Xin lỗi và làm lành là biết nhận lỗi.'),
    Q('Hành vi nào ĐÚNG khi mắc lỗi?', ['Đổ lỗi cho người khác', 'Trung thực nhận lỗi và sửa lỗi', 'Trốn tránh', 'Nói dối'], 1, 'Nhận và sửa lỗi là phẩm chất tốt.'),
    Q('Sau khi nhận lỗi, em cần?', ['Nhớ mãi lỗi và không sửa', 'Cố gắng không tái phạm', 'Tự ti mãi', 'Đổ lỗi tiếp'], 1, 'Không tái phạm là sửa lỗi thật sự.'),
    Q('Bạn làm em đau, bạn xin lỗi. Em nên?', ['Đánh lại bạn', 'Tha thứ cho bạn', 'Giận bạn mãi', 'Đòi bồi thường'], 1, 'Tha thứ khi bạn biết lỗi là rộng lượng.'),
  ]),

  M(22, 'Văn hoá Tết — Chúc Tết, lì xì', [
    Q('Tết đến, em chúc Tết ông bà thế nào?', ['"Chúc ông bà mạnh khoẻ, sống lâu trăm tuổi"', '"Ông bà cho con tiền"', '"Tết có gì mới không?"', 'Không chúc gì cả'], 0, 'Chúc sức khoẻ ông bà là chúc Tết lễ phép.'),
    Q('Nhận lì xì, em nên?', ['Mở phong bao ngay xem được bao nhiêu', 'Cảm ơn và cất đi', 'Chê tiền ít', 'Đòi thêm'], 1, 'Cảm ơn và cất đi là phép lịch sự.'),
    Q('Khi đi chúc Tết họ hàng, em nên?', ['Chạy vào nhà lấy bánh ăn', 'Chào hỏi và chúc Tết người lớn trước', 'Mở tủ tìm kẹo', 'Bật ti vi xem'], 1, 'Chào hỏi và chúc Tết người lớn là lễ phép.'),
    Q('Hành vi nào KHÔNG đẹp ngày Tết?', ['So bì tiền lì xì ít/nhiều', 'Cảm ơn người lì xì', 'Chúc Tết ông bà', 'Mặc đẹp đi chúc Tết'], 0, 'So bì tiền lì xì là không lịch sự.'),
    Q('Tiền lì xì nên dùng để?', ['Mua đồ chơi vô bổ', 'Tiết kiệm hoặc mua đồ dùng học tập', 'Khoe khoang với bạn', 'Đánh bạc cùng anh chị lớn'], 1, 'Tiết kiệm hoặc mua đồ học tập là dùng tiền có ích.'),
    Q('Phong tục Tết đẹp gồm?', ['Chúc Tết ông bà cha mẹ, mừng tuổi trẻ em', 'Đập phá đồ đạc', 'Cãi nhau với họ hàng', 'Bỏ nhà đi chơi cả Tết'], 0, 'Chúc Tết, mừng tuổi là nét đẹp văn hoá Việt.'),
    Q('Đầu năm, em nên nói lời gì với người lớn?', ['Lời chúc tốt đẹp', 'Lời than vãn', 'Lời cãi cọ', 'Im lặng không nói gì'], 0, 'Đầu năm chúc nhau lời tốt đẹp.'),
  ]),

  M(23, 'Bảo vệ của công', [
    Q('Của công là gì?', ['Tài sản chung của trường, lớp, xã hội', 'Tài sản riêng của em', 'Tài sản của bố mẹ', 'Của hàng xóm'], 0, 'Của công là tài sản chung dùng cho mọi người.'),
    Q('Hành vi nào bảo vệ của công?', ['Vẽ bậy lên bàn', 'Dùng đồ dùng lớp cẩn thận', 'Đập phá ghế', 'Khắc tên lên tường'], 1, 'Dùng cẩn thận là bảo vệ của công.'),
    Q('Em thấy bạn đập ghế lớp, em nên?', ['Đập cùng cho vui', 'Khuyên bạn ngừng và báo cô', 'Mặc kệ bạn', 'Cười cổ vũ'], 1, 'Báo cô và khuyên bạn là bảo vệ của công.'),
    Q('Vòi nước công cộng bị bạn nào quên khoá, em nên?', ['Để mặc nước chảy', 'Khoá vòi nước lại', 'Mở thêm cho chảy mạnh', 'Đập vỡ vòi'], 1, 'Khoá vòi tiết kiệm nước là bảo vệ của công.'),
    Q('Cây xanh, ghế đá ở công viên là?', ['Tài sản công, em cần bảo vệ', 'Của riêng em', 'Có thể bẻ về nhà', 'Của ai cũng được phá'], 0, 'Cây xanh, ghế đá là của công cộng.'),
    Q('Bạn nào biết bảo vệ của công?', ['Bạn Lan tắt đèn lớp khi ra về', 'Bạn Tú vẽ lên tường lớp', 'Bạn Hùng bẻ ghế', 'Bạn Mai khắc tên lên bàn'], 0, 'Tắt đèn khi không dùng là tiết kiệm, bảo vệ của công.'),
  ]),

  M(24, 'Giữ gìn sách vở', [
    Q('Vì sao em phải giữ gìn sách vở?', ['Vì sách vở là đồ dùng học tập quan trọng', 'Vì sách rất đẹp', 'Vì bố mẹ bắt giữ', 'Để khoe với bạn'], 0, 'Giữ sách vở giúp việc học lâu dài và tiết kiệm.'),
    Q('Hành vi nào ĐÚNG?', ['Bọc bìa, dán nhãn sách vở', 'Vẽ bậy vào sách', 'Xé trang sách', 'Để sách dưới đất ướt mưa'], 0, 'Bọc bìa giúp sách bền lâu.'),
    Q('Tay em bẩn, em nên?', ['Cứ thế cầm sách', 'Rửa tay rồi mới cầm sách', 'Lau tay vào sách', 'Bôi mực vào sách cho đẹp'], 1, 'Rửa tay trước khi đọc sách là giữ sách sạch.'),
    Q('Vở của em bị bạn vẽ bậy, em nên?', ['Đánh bạn', 'Nhắc bạn nhẹ nhàng và lau sạch', 'Vẽ vào vở bạn để trả thù', 'Khóc to'], 1, 'Nhắc nhở nhẹ nhàng là cách đúng.'),
    Q('Khi không học sách nữa, em nên?', ['Xé bỏ đi', 'Giữ gọn gàng hoặc tặng em nhỏ học sau', 'Vứt đi', 'Cắt làm đồ chơi'], 1, 'Tặng em nhỏ là biết tiết kiệm.'),
    Q('Hành vi nào hỏng sách?', ['Bọc bìa cẩn thận', 'Gập gáy sách, làm rách trang', 'Để sách ngăn nắp trên giá', 'Lau bụi sách'], 1, 'Gập gáy và làm rách trang là làm hỏng sách.'),
  ]),

  M(25, 'Em yêu quê hương em', [
    Q('Quê hương em là?', ['Nơi em sinh ra hoặc lớn lên', 'Nơi xa lạ', 'Chỉ là một địa danh trong sách', 'Không quan trọng'], 0, 'Quê hương là nơi em sinh ra và gắn bó.'),
    Q('Em yêu quê hương bằng cách?', ['Giữ gìn cảnh đẹp quê hương', 'Vứt rác bừa bãi ở quê', 'Phá hoại làng xóm', 'Chê quê mình xấu'], 0, 'Giữ gìn cảnh đẹp là yêu quê.'),
    Q('Quê hương em có cảnh đẹp gì?', ['Cây đa, giếng nước, sân đình hoặc phố phường, nhà cao tầng…', 'Không có gì cả', 'Chỉ có rác', 'Em không biết quê mình'], 0, 'Quê hương nào cũng có nét đẹp riêng.'),
    Q('Khi đi xa, nhớ về quê hương là?', ['Tình cảm tự nhiên đáng quý', 'Không cần thiết', 'Yếu đuối', 'Lãng phí thời gian'], 0, 'Nhớ quê là tình cảm đẹp.'),
    Q('Bạn chê quê em "nhà quê", em nên?', ['Tự ti và buồn', 'Giải thích và tự hào về quê mình', 'Hùa theo bạn chê', 'Đánh bạn'], 1, 'Tự hào quê hương và giải thích cho bạn hiểu.'),
    Q('Hành vi nào yêu quê?', ['Trồng cây xanh ở quê', 'Vẽ bậy lên di tích', 'Đập phá đình làng', 'Bỏ quê đi không bao giờ về'], 0, 'Trồng cây làm đẹp quê hương.'),
  ]),

  M(26, 'Tôn trọng cờ Tổ quốc', [
    Q('Cờ đỏ sao vàng là?', ['Quốc kì của nước Cộng hoà xã hội chủ nghĩa Việt Nam', 'Lá cờ trang trí', 'Cờ của một địa phương', 'Cờ của lớp'], 0, 'Cờ đỏ sao vàng là Quốc kì Việt Nam.'),
    Q('Khi chào cờ, em nên?', ['Đứng nghiêm trang, mắt nhìn cờ', 'Cười đùa, nói chuyện', 'Lúi húi cúi đầu', 'Quay đi nơi khác'], 0, 'Đứng nghiêm khi chào cờ là tôn trọng Tổ quốc.'),
    Q('Khi hát Quốc ca, em nên?', ['Đứng nghiêm và hát to, rõ ràng', 'Nói chuyện với bạn', 'Cười đùa', 'Cúi đầu lén nhìn điện thoại'], 0, 'Hát Quốc ca với sự trang nghiêm.'),
    Q('Hành vi nào KHÔNG tôn trọng cờ Tổ quốc?', ['Đứng nghiêm chào cờ', 'Vẽ bậy lên hình cờ Tổ quốc', 'Treo cờ ngày lễ', 'Hát Quốc ca to rõ'], 1, 'Vẽ bậy lên cờ là không tôn trọng.'),
    Q('Ngày lễ lớn của đất nước, mỗi nhà thường?', ['Treo cờ Tổ quốc', 'Đập phá đồ đạc', 'Đóng kín cửa không quan tâm', 'Cãi nhau ầm ĩ'], 0, 'Treo cờ ngày lễ là thể hiện tình yêu nước.'),
    Q('Bạn cười đùa trong giờ chào cờ, em nên?', ['Cười theo bạn', 'Nhắc bạn nghiêm túc', 'Mặc kệ bạn', 'Trêu chọc cùng bạn'], 1, 'Nhắc bạn nghiêm túc khi chào cờ là đúng.'),
  ]),

  M(27, 'Biết ơn người có công với đất nước', [
    Q('Người có công với đất nước là?', ['Các anh hùng liệt sĩ, Bác Hồ, các vị anh hùng dân tộc…', 'Chỉ những người giàu', 'Người nổi tiếng trên mạng', 'Ca sĩ, diễn viên'], 0, 'Người có công là người hi sinh, đóng góp cho đất nước.'),
    Q('Em thể hiện lòng biết ơn bằng cách?', ['Học tập tốt, kính trọng các thương binh, liệt sĩ', 'Phá nghĩa trang liệt sĩ', 'Chế giễu các bác thương binh', 'Quên đi quá khứ'], 0, 'Học tốt và kính trọng là biết ơn.'),
    Q('Ngày 27/7 là ngày gì?', ['Ngày Thương binh – Liệt sĩ', 'Ngày Nhà giáo', 'Ngày Quốc khánh', 'Ngày sinh nhật em'], 0, '27/7 là ngày tri ân thương binh liệt sĩ.'),
    Q('Khi đi thăm nghĩa trang liệt sĩ, em nên?', ['Đùa giỡn chạy nhảy', 'Nghiêm trang, dâng hoa và thắp hương', 'Hái hoa mang về', 'Ngồi lên mộ chụp ảnh'], 1, 'Nghiêm trang và dâng hương là tỏ lòng biết ơn.'),
    Q('Bác Hồ là người?', ['Lãnh tụ vĩ đại của dân tộc Việt Nam', 'Một người bình thường', 'Người nước ngoài', 'Không liên quan đến em'], 0, 'Bác Hồ là vị lãnh tụ đáng kính của dân tộc.'),
    Q('Học sinh nhỏ tuổi biết ơn Bác Hồ bằng cách?', ['Thực hiện 5 điều Bác Hồ dạy', 'Quên Bác đi', 'Không học bài', 'Cãi lời thầy cô'], 0, 'Làm theo 5 điều Bác dạy là biết ơn Bác.'),
  ]),

  M(28, 'Giữ vệ sinh nơi công cộng', [
    Q('Nơi công cộng là?', ['Công viên, đường phố, bệnh viện, trường học…', 'Chỉ là nhà em', 'Chỉ là phòng riêng', 'Phòng ngủ của em'], 0, 'Nơi công cộng là nơi mọi người cùng dùng.'),
    Q('Em ăn xong vỏ kẹo, em nên?', ['Vứt ngay xuống đất', 'Bỏ vào thùng rác', 'Vứt vào bụi cây', 'Đưa cho bạn cầm hộ'], 1, 'Bỏ rác đúng thùng là giữ vệ sinh.'),
    Q('Thấy đường phố nhiều rác, em nên?', ['Vứt thêm rác của mình', 'Nhặt rác bỏ thùng và nhắc mọi người không xả rác', 'Mặc kệ', 'Cười chê đường bẩn'], 1, 'Nhặt rác là việc tốt giữ vệ sinh chung.'),
    Q('Bạn nào giữ vệ sinh tốt?', ['Bạn An bỏ rác đúng thùng dù xa', 'Bạn Tú vứt rác bừa bãi', 'Bạn Lan khạc nhổ ra đường', 'Bạn Hùng đổ nước bẩn ra sân'], 0, 'Bỏ rác đúng thùng là biểu hiện tốt.'),
    Q('Hành vi nào KHÔNG giữ vệ sinh?', ['Khạc nhổ, tiểu tiện bừa bãi nơi công cộng', 'Bỏ rác vào thùng', 'Quét sân chung', 'Trồng hoa làm đẹp đường'], 0, 'Khạc nhổ bừa bãi là mất vệ sinh.'),
    Q('Vì sao phải giữ vệ sinh nơi công cộng?', ['Vì sạch đẹp cho mọi người và không có dịch bệnh', 'Vì bị phạt', 'Vì sợ bị nhìn thấy', 'Vì có camera'], 0, 'Vệ sinh tốt cho cộng đồng và phòng dịch.'),
  ]),

  M(29, 'Lịch sự nơi công cộng', [
    Q('Khi mua hàng, em nên?', ['Xếp hàng theo thứ tự', 'Chen ngang lên đầu', 'Cãi nhau với người khác', 'Hét to với cô bán hàng'], 0, 'Xếp hàng là lịch sự.'),
    Q('Trong rạp chiếu phim, em nên?', ['Nói chuyện to', 'Im lặng để mọi người cùng xem', 'Bật điện thoại to', 'Chạy lung tung'], 1, 'Im lặng giữ trật tự là lịch sự.'),
    Q('Trên xe buýt, em nên?', ['Nhường ghế cho người già, em bé, phụ nữ có thai', 'Giành ghế ngồi', 'Chạy nhảy trên xe', 'Hò hét cãi nhau'], 0, 'Nhường ghế là lịch sự, có văn hoá.'),
    Q('Trong bệnh viện, em nên?', ['Nói nhỏ, đi nhẹ', 'Chạy nhảy ầm ĩ', 'Cười đùa to', 'Bật nhạc to'], 0, 'Nói nhỏ ở bệnh viện là tôn trọng người bệnh.'),
    Q('Hành vi nào KHÔNG lịch sự?', ['Cảm ơn người giúp', 'Cắt ngang lời người khác đang nói', 'Xin lỗi khi va vào ai', 'Chào hỏi'], 1, 'Cắt ngang lời là bất lịch sự.'),
    Q('Em vô tình va vào bác đi đường, em nên?', ['Bỏ chạy', 'Xin lỗi bác', 'Đổ lỗi cho bác', 'Cãi lại bác'], 1, 'Xin lỗi là lịch sự.'),
  ]),

  M(30, 'An toàn khi đi đường', [
    Q('Khi qua đường, em nên?', ['Nhìn trái nhìn phải, đi trên vạch kẻ', 'Chạy nhanh qua đường', 'Vừa đi vừa xem điện thoại', 'Đi giữa lòng đường'], 0, 'Quan sát kĩ và đi trên vạch là an toàn.'),
    Q('Đèn giao thông màu đỏ, em phải?', ['Dừng lại chờ đèn xanh', 'Chạy thật nhanh qua', 'Đi nếu thấy không có xe', 'Đi theo người khác'], 0, 'Đèn đỏ phải dừng lại.'),
    Q('Khi đi xe đạp/ngồi sau xe máy, em phải?', ['Đội mũ bảo hiểm', 'Không cần mũ', 'Đứng trên xe', 'Tay không bám'], 0, 'Đội mũ bảo hiểm là quy định an toàn.'),
    Q('Hành vi nào KHÔNG an toàn?', ['Đi bộ trên vỉa hè', 'Chạy nhảy giữa đường', 'Sang đường ở vạch kẻ', 'Chờ đèn xanh mới đi'], 1, 'Chạy giữa đường là rất nguy hiểm.'),
    Q('Đường ngập nước to, em nên?', ['Cố lội qua', 'Tìm đường khác hoặc nhờ người lớn dẫn', 'Bơi qua', 'Chạy nhanh qua'], 1, 'Tìm đường khác hoặc nhờ người lớn là an toàn.'),
    Q('Bạn nào đi đường an toàn?', ['Bạn An nắm tay người lớn khi qua đường', 'Bạn Tú chạy bộ giữa lòng đường', 'Bạn Lan vừa đi vừa nghịch điện thoại', 'Bạn Hùng vượt đèn đỏ'], 0, 'Nắm tay người lớn khi qua đường là an toàn.'),
  ]),

  M(31, 'Bảo vệ động vật', [
    Q('Đối với động vật, em nên?', ['Yêu thương, không đánh đập', 'Đánh, hành hạ cho vui', 'Bắt nhốt vào hộp nhỏ', 'Ném đá vào động vật'], 0, 'Động vật cũng biết đau, cần được yêu thương.'),
    Q('Em thấy bạn ném đá chó hoang, em nên?', ['Ném cùng cho vui', 'Khuyên bạn ngừng lại', 'Cười cổ vũ', 'Mặc kệ bạn'], 1, 'Khuyên bạn không hành hạ động vật.'),
    Q('Nuôi mèo, em nên?', ['Cho ăn, uống, tắm rửa, vuốt ve nó', 'Nhịn đói cho nó', 'Đánh nó khi nó kêu', 'Bỏ đói rồi vứt đi'], 0, 'Chăm sóc thú nuôi là yêu thương động vật.'),
    Q('Thấy chim non rơi xuống đất, em nên?', ['Đem về nuôi nhốt mãi', 'Đặt nó lên cành cây hoặc nhờ người lớn giúp', 'Vứt ra đường', 'Đánh chết nó'], 1, 'Giúp chim trở về tổ là biểu hiện yêu động vật.'),
    Q('Hành vi nào KHÔNG bảo vệ động vật?', ['Cho thú nuôi ăn đầy đủ', 'Trêu chọc, hành hạ chó mèo', 'Cứu giúp động vật bị thương', 'Không săn bắt động vật hoang dã'], 1, 'Hành hạ động vật là sai trái.'),
    Q('Vì sao phải bảo vệ động vật?', ['Vì động vật là bạn của con người, là một phần của tự nhiên', 'Vì sợ bị phạt', 'Vì không có gì làm', 'Vì người lớn nói thế'], 0, 'Động vật là một phần thiên nhiên cần bảo vệ.'),
  ]),

  M(32, 'Bảo vệ cây xanh', [
    Q('Cây xanh giúp gì cho con người?', ['Cho oxy, bóng mát và làm đẹp', 'Không có ích gì', 'Chỉ tốn đất', 'Làm bẩn đường'], 0, 'Cây xanh cho ta dưỡng khí và bóng mát.'),
    Q('Em thấy bạn bẻ cành cây, em nên?', ['Bẻ cùng', 'Khuyên bạn không bẻ', 'Mặc kệ bạn', 'Cười cổ vũ'], 1, 'Nhắc bạn không phá cây là bảo vệ cây.'),
    Q('Hành vi nào bảo vệ cây xanh?', ['Tưới nước cho cây', 'Bẻ cành làm đồ chơi', 'Khắc tên lên thân cây', 'Hái hoa bừa bãi'], 0, 'Tưới nước giúp cây phát triển.'),
    Q('Em yêu cây xanh nên?', ['Trồng thêm cây ở sân trường', 'Đốt lá cây', 'Phá vườn hoa', 'Chặt cây làm củi'], 0, 'Trồng cây là yêu cây xanh.'),
    Q('Câu nào ĐÚNG?', ['Cây xanh giúp môi trường trong lành', 'Cây xanh không có tác dụng gì', 'Càng ít cây càng tốt', 'Cây xanh làm xấu thành phố'], 0, 'Cây xanh làm môi trường sạch, đẹp.'),
    Q('Tết trồng cây là phong tục đẹp do ai phát động?', ['Bác Hồ', 'Bạn em', 'Cô giáo', 'Bố mẹ em'], 0, 'Bác Hồ phát động "Tết trồng cây".'),
  ]),

  M(33, 'Yêu hoà bình', [
    Q('Hoà bình nghĩa là?', ['Không có chiến tranh, mọi người sống yên vui', 'Đánh nhau cho vui', 'Cãi nhau ầm ĩ', 'Tranh giành đồ đạc'], 0, 'Hoà bình là không chiến tranh, sống yên vui.'),
    Q('Trong lớp, em yêu hoà bình thể hiện qua?', ['Hoà thuận, không đánh nhau với bạn', 'Đánh nhau với bạn', 'Cãi nhau to tiếng', 'Chia bè kéo phái'], 0, 'Hoà thuận với bạn là yêu hoà bình.'),
    Q('Hai bạn xích mích, em nên?', ['Hùa theo một bên', 'Khuyên giải, hoà giải hai bạn', 'Cổ vũ đánh nhau', 'Bỏ đi'], 1, 'Hoà giải là cách giải quyết hoà bình.'),
    Q('Hành vi nào KHÔNG yêu hoà bình?', ['Bắt nạt bạn', 'Giúp đỡ bạn', 'Chia sẻ với bạn', 'Nhường nhịn bạn'], 0, 'Bắt nạt bạn đi ngược với hoà bình.'),
    Q('Khi giận bạn, em nên?', ['Bình tĩnh nói chuyện với bạn', 'Đánh bạn ngay', 'Nói xấu bạn với cả lớp', 'Phá đồ của bạn'], 0, 'Bình tĩnh trao đổi giữ hoà khí.'),
    Q('Trẻ em trên thế giới đều mong?', ['Sống trong hoà bình, được học hành', 'Có chiến tranh', 'Đánh nhau', 'Đói khổ'], 0, 'Mọi trẻ em đều mong được sống yên vui.'),
  ]),

  M(34, 'Em là người có ích', [
    Q('Người có ích là người?', ['Biết giúp đỡ mọi người và làm việc tốt', 'Chỉ lo cho bản thân', 'Hay làm phiền người khác', 'Lười biếng'], 0, 'Người có ích biết giúp đỡ và làm việc tốt.'),
    Q('Việc tốt nào em có thể làm ngay hôm nay?', ['Giúp mẹ rửa chén', 'Bắt nạt em nhỏ', 'Vứt rác bừa bãi', 'Chế nhạo bạn'], 0, 'Giúp mẹ việc nhà là việc tốt.'),
    Q('Em thấy cụ già khó đi qua đường, em nên?', ['Dắt cụ qua đường', 'Đi tránh đi nơi khác', 'Cười cụ già yếu', 'Vượt qua cụ'], 0, 'Dắt cụ qua đường là người có ích.'),
    Q('Bạn nào là người có ích?', ['Bạn An mỗi tuần đọc sách cho em nhỏ trong xóm', 'Bạn Tú chỉ chơi game cả ngày', 'Bạn Bình hay gây gổ', 'Bạn Mai không giúp đỡ ai'], 0, 'Giúp em nhỏ học là việc có ích.'),
    Q('Làm việc có ích đem lại?', ['Niềm vui cho bản thân và người khác', 'Sự mệt mỏi vô ích', 'Mất thời gian vô bổ', 'Phiền phức'], 0, 'Giúp người làm cả mình lẫn người vui.'),
    Q('Câu nào ĐÚNG?', ['Trẻ em nhỏ cũng có thể làm việc có ích', 'Chỉ người lớn mới giúp được người khác', 'Trẻ em không cần làm gì', 'Việc có ích là việc lớn lao'], 0, 'Trẻ nhỏ cũng có thể làm việc tốt hằng ngày.'),
  ]),

  M(35, 'Tự lập là sức mạnh', [
    Q('Tự lập là?', ['Tự làm những việc trong khả năng của mình', 'Việc gì cũng nhờ người khác', 'Đợi bố mẹ làm hộ', 'Không chịu làm gì'], 0, 'Tự lập là tự làm việc của mình.'),
    Q('Em tự làm được việc nào?', ['Tự đánh răng, mặc quần áo, soạn sách vở', 'Đợi mẹ làm hết', 'Khóc đòi bố mẹ giúp', 'Không tự làm gì'], 0, 'Việc cá nhân em phải tự làm.'),
    Q('Bạn nào tự lập?', ['Bạn An tự dậy đúng giờ đi học', 'Bạn Tú đợi mẹ gọi mãi mới dậy', 'Bạn Lan đòi mẹ buộc tóc cho mình', 'Bạn Hùng đợi mẹ soạn sách'], 0, 'Tự dậy đúng giờ là tự lập.'),
    Q('Em chưa biết làm việc gì đó, em nên?', ['Bỏ luôn không học', 'Học hỏi để tự làm được', 'Khóc đòi mẹ làm', 'Đổ tại không ai dạy'], 1, 'Học để tự làm là phát triển tính tự lập.'),
    Q('Hành vi nào KHÔNG tự lập?', ['Tự gấp chăn màn buổi sáng', 'Đợi mẹ làm hết mọi việc', 'Tự chuẩn bị cặp sách', 'Tự xếp dép gọn gàng'], 1, 'Việc gì cũng đợi mẹ là không tự lập.'),
    Q('Tự lập đem lại?', ['Sức mạnh và sự tự tin cho bản thân', 'Sự cô đơn', 'Sự mệt mỏi vô ích', 'Phiền phức'], 0, 'Tự lập giúp em vững vàng và tự tin.'),
  ]),

  M(36, 'Tổng kết — Chân dung em ngoan', [
    Q('Em ngoan là người?', ['Yêu thương gia đình, vâng lời ông bà cha mẹ', 'Cãi lại người lớn', 'Bắt nạt em nhỏ', 'Không quan tâm gia đình'], 0, 'Em ngoan phải yêu thương và vâng lời gia đình.'),
    Q('Ở trường, em ngoan là?', ['Lễ phép thầy cô, đoàn kết bạn bè, học chăm chỉ', 'Hỗn láo với cô', 'Đánh bạn', 'Trốn học'], 0, 'Ở trường, em ngoan thể hiện qua thái độ và học tập.'),
    Q('Với cộng đồng, em ngoan là?', ['Giữ vệ sinh nơi công cộng, lịch sự với mọi người', 'Vứt rác bừa bãi', 'Chen ngang khi xếp hàng', 'Cãi nhau với mọi người'], 0, 'Có ý thức cộng đồng là em ngoan.'),
    Q('Em ngoan biết tự lập, tức là?', ['Tự làm việc của mình, không ỷ lại', 'Mọi việc đều nhờ bố mẹ', 'Khóc đòi bố mẹ làm hộ', 'Bỏ việc giữa chừng'], 0, 'Tự lập là phẩm chất quan trọng.'),
    Q('Em ngoan biết trung thực, tức là?', ['Không nói dối, không gian lận, không lấy của người', 'Cóp bài bạn', 'Nói dối khi mắc lỗi', 'Giấu của rơi nhặt được'], 0, 'Trung thực là không gian dối.'),
    Q('Em ngoan biết nhân ái, tức là?', ['Yêu thương, giúp đỡ mọi người, nhất là người khó khăn', 'Khinh thường người nghèo', 'Trêu chọc bạn khuyết tật', 'Ích kỉ không chia sẻ'], 0, 'Nhân ái là yêu thương, giúp đỡ.'),
    Q('Em ngoan biết yêu nước, tức là?', ['Tự hào về Tổ quốc, kính trọng cờ Tổ quốc, biết ơn anh hùng liệt sĩ', 'Chế giễu đất nước mình', 'Phá hoại di tích', 'Quên ngày lễ lớn'], 0, 'Yêu nước thể hiện qua thái độ và hành động.'),
    Q('Em ngoan biết chăm chỉ, tức là?', ['Học tập đều đặn, làm việc nhà giúp bố mẹ', 'Lười học', 'Trốn việc nhà', 'Chơi cả ngày'], 0, 'Chăm chỉ là phẩm chất nền tảng.'),
    Q('Em ngoan biết trách nhiệm, tức là?', ['Nhận lỗi và sửa lỗi khi sai, làm xong việc được giao', 'Đổ lỗi cho người khác', 'Bỏ dở việc giữa chừng', 'Trốn tránh trách nhiệm'], 0, 'Trách nhiệm là dám nhận và làm tròn việc của mình.'),
    Q('Chân dung em ngoan bao gồm?', ['Yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm', 'Chỉ cần học giỏi là đủ', 'Chỉ cần ngoan ở nhà', 'Chỉ cần lễ phép với cô'], 0, 'Đó là 5 phẩm chất chủ yếu theo GDPT 2018.'),
  ], { difficulty: 3 }),
];

export const P2DD_SCENARIOS = indexBy(P2DD_WEEKS);
