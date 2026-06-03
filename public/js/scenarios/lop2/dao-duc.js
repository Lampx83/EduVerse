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
    Q('Vì sao chúng ta phải quý trọng thời gian?', ['Vì thời gian đã qua không lấy lại được', 'Vì sách nói thế', 'Vì người lớn bắt thế', 'Vì thời gian rất nhiều'], 0, 'Thời gian trôi đi không quay lại, nên cần dùng hợp lí.'),
    Q('Bạn nào quý trọng thời gian?', ['Bạn An làm bài ngay sau khi đi học về', 'Bạn Mai chơi điện thoại cả ngày', 'Bạn Lan vừa học vừa xem ti vi', 'Bạn Bình ngủ nướng đến trưa'], 0, 'Làm việc đúng lúc, không trì hoãn là quý trọng thời gian.'),
    Q('Em đi học về, việc nào nên làm TRƯỚC?', ['Chạy đi chơi với bạn', 'Mở ti vi xem hoạt hình', 'Cất cặp, rửa tay, ăn cơm rồi học bài', 'Nằm ngủ đến tối'], 2, 'Sắp xếp việc theo thứ tự hợp lí giúp dùng thời gian hiệu quả.'),
    Q('Hành vi nào LÃNG PHÍ thời gian?', ['Tập thể dục buổi sáng', 'Đọc sách 30 phút mỗi tối', 'Giúp mẹ nấu cơm', 'Ngồi cả buổi chỉ xem điện thoại'], 3, 'Ngồi xem điện thoại cả buổi là lãng phí thời gian.'),
    Q('Câu tục ngữ nào nói về quý trọng thời gian?', ['Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim', 'Thì giờ là vàng bạc', 'Ăn quả nhớ kẻ trồng cây'], 2, '"Thì giờ là vàng bạc" nói lên giá trị của thời gian.'),
    Q('Em nên làm gì khi còn 10 phút trước giờ vào học?', ['Chuẩn bị sách vở, ôn bài', 'Ngồi yên đợi', 'Trêu chọc bạn', 'Chạy nhảy ngoài sân'], 0, 'Dùng thời gian rảnh để chuẩn bị là biết quý thời gian.'),
  ]),

  M(2, 'Sắp xếp việc làm trong ngày', [
    Q('Vì sao cần sắp xếp việc làm trong ngày?', ['Để khoe với bạn', 'Để làm xong việc và không quên việc gì', 'Để có nhiều thời gian chơi', 'Để bố mẹ khen'], 1, 'Sắp xếp giúp việc nào cũng được hoàn thành đúng hạn.'),
    Q('Buổi sáng đi học, việc nào em nên làm ĐẦU TIÊN?', ['Xem ti vi', 'Đọc truyện tranh', 'Chơi điện tử', 'Đánh răng, rửa mặt, ăn sáng'], 3, 'Vệ sinh cá nhân và ăn sáng là việc đầu tiên buổi sáng.'),
    Q('Lịch sinh hoạt hợp lí của em là?', ['Học - chơi - ngủ đúng giờ', 'Thức khuya xem ti vi', 'Ăn lúc nào cũng được', 'Chơi cả ngày, học khi nào thích'], 0, 'Học, chơi, ngủ đúng giờ là lịch sinh hoạt tốt.'),
    Q('Em quên mang sách đến lớp vì không chuẩn bị từ tối. Em nên?', ['Không đi học nữa', 'Mượn của bạn rồi không trả', 'Đổ lỗi cho mẹ', 'Lần sau soạn sách trước khi đi ngủ'], 3, 'Soạn sách từ tối trước là thói quen tốt.'),
    Q('Bạn nào sắp xếp việc tốt?', ['Bạn Tú vừa ăn vừa xem điện thoại', 'Bạn Hoa làm bài ngay sau khi học về', 'Bạn Nam quên cả ăn vì mải chơi', 'Bạn Lan để bài tập đến khuya mới làm'], 1, 'Làm bài ngay khi còn nhớ bài là cách sắp xếp tốt.'),
    Q('Trước khi đi ngủ em nên?', ['Soạn sách vở cho ngày mai', 'Ăn nhiều bánh kẹo', 'Xem ti vi đến khuya', 'Chơi game đến 12 giờ'], 0, 'Soạn sách trước khi ngủ giúp sáng hôm sau không quên gì.'),
  ]),

  M(3, 'Đi học đúng giờ', [
    Q('Vì sao em phải đi học đúng giờ?', ['Để được cô khen', 'Vì sợ bị phạt', 'Vì bạn nào cũng đi', 'Để không bị muộn, không bỏ lỡ bài học'], 3, 'Đi đúng giờ giúp em không bỏ lỡ bài và tôn trọng thầy cô, bạn bè.'),
    Q('Hành vi nào ĐÚNG?', ['Lười dậy nên xin nghỉ học', 'Đến lớp sau khi cô đã giảng', 'Vừa đi vừa ăn, đến muộn 15 phút', 'Đến lớp trước giờ học 5–10 phút'], 3, 'Đến sớm 5–10 phút là vừa đẹp.'),
    Q('Sáng nay em ngủ dậy muộn, em nên?', ['Đi học muộn cũng không sao', 'Trốn học luôn', 'Nhanh chóng chuẩn bị và xin lỗi cô khi đến lớp', 'Đổ tại bố mẹ không gọi'], 2, 'Nhanh chóng đến lớp và xin lỗi là hành vi đúng.'),
    Q('Bạn đến lớp muộn làm ảnh hưởng đến ai?', ['Ảnh hưởng cả lớp và thầy cô đang dạy', 'Chỉ ảnh hưởng cô giáo', 'Chỉ ảnh hưởng đến bạn ấy', 'Không ảnh hưởng đến ai'], 0, 'Đến muộn làm gián đoạn bài giảng cho cả lớp.'),
    Q('Để đi học đúng giờ, em nên?', ['Đặt báo thức và đi ngủ sớm', 'Chơi điện thoại đến khuya', 'Đợi bố mẹ gọi mới dậy', 'Đi học khi nào muốn'], 0, 'Đi ngủ sớm và đặt báo thức giúp dậy đúng giờ.'),
  ]),

  M(4, 'Em yêu trường em', [
    Q('Hành vi nào thể hiện yêu trường?', ['Bẻ cành cây trong sân trường', 'Giữ vệ sinh lớp học, không vẽ bậy lên tường', 'Vứt rác bừa bãi trong sân', 'Viết bậy lên bàn ghế'], 1, 'Giữ vệ sinh và bảo vệ trường là yêu trường.'),
    Q('Em thấy bạn vẽ bậy lên tường lớp, em nên?', ['Mặc kệ bạn', 'Vẽ cùng cho vui', 'Khuyên bạn không nên làm thế', 'Bắt chước bạn'], 2, 'Nhắc bạn dừng việc làm sai là đúng.'),
    Q('Đồ dùng chung của lớp (bàn ghế, sách thư viện) em nên?', ['Dùng cẩn thận, giữ gìn sạch sẽ', 'Vẽ tên mình lên', 'Dùng rồi vứt bừa bãi', 'Mang về nhà làm của riêng'], 0, 'Đồ dùng chung phải được giữ gìn cẩn thận.'),
    Q('Khi tan học, em nên?', ['Để bạn khác dọn', 'Ra về luôn, không quan tâm', 'Tự dọn chỗ ngồi, bỏ rác vào thùng', 'Để rác trên bàn cho cô lao công dọn'], 2, 'Tự dọn chỗ ngồi là biểu hiện yêu trường.'),
    Q('Bạn nào yêu trường?', ['Bạn Lan tưới cây ở sân trường', 'Bạn Hùng đá bóng vào cửa kính', 'Bạn Tú khắc tên lên bàn', 'Bạn Mai xé sách thư viện'], 0, 'Chăm sóc cây cối ở trường là yêu trường.'),
    Q('Em yêu trường nên?', ['Tham gia lao động vệ sinh trường lớp', 'Trốn buổi lao động', 'Chê trường mình xấu', 'Phá đồ dùng lớp'], 0, 'Tham gia giữ gìn trường lớp là biểu hiện yêu trường.'),
  ]),

  M(5, 'Lễ phép với thầy cô giáo', [
    Q('Khi gặp thầy cô ở cổng trường, em nên?', ['Đi thẳng, không chào', 'Cúi đầu, lễ phép chào cô (thầy)', 'Giả vờ không thấy', 'Cười lớn rồi chạy'], 1, 'Chào hỏi thầy cô là biểu hiện lễ phép cơ bản.'),
    Q('Khi thầy cô đang giảng bài, em nên?', ['Lấy đồ chơi ra chơi', 'Nói chuyện với bạn bên cạnh', 'Nằm gục xuống bàn', 'Lắng nghe, không nói chuyện riêng'], 3, 'Lắng nghe khi thầy cô giảng là tôn trọng thầy cô.'),
    Q('Muốn phát biểu ý kiến, em làm gì?', ['Đập bàn để cô chú ý', 'Nói to lên ngay', 'Đứng dậy nói luôn', 'Giơ tay xin phép cô'], 3, 'Giơ tay xin phép là phép lịch sự trong lớp.'),
    Q('Lời nào lễ phép với cô giáo?', ['"Thưa cô, cho em hỏi ạ"', '"Cô làm hộ em đi"', '"Cô ơi, ra đây"', '"Ê cô, cho em hỏi"'], 0, '"Thưa cô… ạ" là cách xưng hô lễ phép.'),
    Q('Em làm sai và bị cô nhắc, em nên?', ['Bỏ ra ngoài lớp', 'Khóc to cho cô nhường', 'Lắng nghe và xin lỗi cô', 'Cãi lại cô'], 2, 'Lắng nghe, xin lỗi và sửa sai là đúng.'),
    Q('Bạn nào lễ phép?', ['Bạn Hoa chào cô khi gặp ngoài đường', 'Bạn Lan trêu chọc cô lúc cô quay đi', 'Bạn Nam nhại lời cô giáo', 'Bạn Tú gọi cô là "bà ấy"'], 0, 'Chào cô khi gặp dù ở đâu là lễ phép.'),
  ]),

  M(6, 'Chào hỏi người lớn', [
    Q('Gặp ông bà, em nên?', ['Nói "Ê ông"', 'Giả vờ không thấy', 'Đi thẳng vào nhà', 'Khoanh tay lễ phép chào ông bà'], 3, 'Khoanh tay chào là cách chào người lớn lễ phép.'),
    Q('Khách đến nhà chơi, em làm gì?', ['Quát "Cô đi đi"', 'Chào khách rồi mời nước', 'Đứng nhìn không nói gì', 'Trốn vào phòng'], 1, 'Chào khách và mời nước là biểu hiện hiếu khách.'),
    Q('Lời chào nào lễ phép?', ['"Hi bác"', '"Cháu chào bác ạ"', '"Ê bác"', '"Chào bác"'], 1, 'Thêm "ạ" và xưng "cháu" thể hiện lễ phép.'),
    Q('Em đi học về, gặp bố mẹ em nên?', ['Vứt cặp rồi chạy đi chơi', 'Đòi ăn ngay không chào', 'Im lặng đi vào phòng', 'Chào bố, chào mẹ con đã về'], 3, 'Chào bố mẹ khi về là phép lịch sự trong gia đình.'),
    Q('Hành vi nào KHÔNG lễ phép?', ['Gọi cô chú bằng "ê", "ấy"', 'Mời khách uống nước', 'Cúi đầu chào thầy cô', 'Khoanh tay chào người lớn'], 0, 'Gọi cô chú bằng "ê", "ấy" là vô lễ.'),
    Q('Khi nhận quà từ người lớn, em nên?', ['Vứt quà đi', 'Chê quà xấu', 'Giật lấy ngay', 'Nhận bằng hai tay và cảm ơn'], 3, 'Nhận bằng hai tay và cảm ơn là lễ phép.'),
  ]),

  M(7, 'Em yêu gia đình', [
    Q('Gia đình là nơi?', ['Chỉ để ngủ', 'Để mọi người cãi nhau', 'Yêu thương, đùm bọc lẫn nhau', 'Chỉ là nơi để ăn cơm chung mỗi tối'], 2, 'Gia đình là nơi yêu thương, gắn bó.'),
    Q('Em thể hiện tình yêu gia đình bằng cách?', ['Cãi vã với anh chị', 'Vâng lời, giúp đỡ ông bà cha mẹ', 'Chỉ đòi hỏi quà', 'Hỗn láo với người lớn'], 1, 'Yêu gia đình là vâng lời và giúp đỡ.'),
    Q('Mẹ ốm, em nên làm gì?', ['Bật ti vi to', 'Đi chơi với bạn', 'Lấy nước, hỏi thăm và giúp mẹ việc nhà', 'Đòi mẹ nấu món em thích'], 2, 'Quan tâm, chăm sóc mẹ khi mẹ ốm là yêu mẹ.'),
    Q('Bạn nào yêu gia đình?', ['Bạn Bình bỏ nhà đi chơi cả ngày', 'Bạn Tú không nói chuyện với bố', 'Bạn Lan cãi mẹ vì không được mua đồ chơi', 'Bạn An giúp bà tưới cây'], 3, 'Giúp đỡ ông bà là biểu hiện yêu gia đình.'),
    Q('Cuối tuần, gia đình em nên?', ['Không quan tâm đến nhau', 'Cùng ăn cơm, trò chuyện, đi chơi cùng nhau', 'Mỗi người một phòng, không ai nói chuyện', 'Bố mẹ làm việc, con chơi điện thoại'], 1, 'Quây quần bên nhau là biểu hiện gia đình ấm áp.'),
    Q('Sinh nhật bà, em làm gì?', ['Đi chơi không về', 'Chúc mừng bà và làm thiệp tặng bà', 'Đòi quà sinh nhật', 'Không nhớ'], 1, 'Nhớ và chúc mừng sinh nhật bà là yêu bà.'),
  ]),

  M(8, 'Vâng lời ông bà, cha mẹ', [
    Q('Vâng lời ông bà cha mẹ là?', ['Cãi lại khi không thích', 'Làm tất cả mọi việc dù sai', 'Bỏ đi khi bị nhắc', 'Làm theo những lời dạy đúng đắn'], 3, 'Vâng lời nghĩa là làm theo lời dạy đúng đắn.'),
    Q('Mẹ bảo đi ngủ sớm, em nên?', ['Vâng dạ và đi ngủ đúng giờ', 'Cãi lại "Con chưa buồn ngủ"', 'Khóc đòi xem ti vi', 'Lén dậy chơi điện thoại'], 0, 'Đi ngủ đúng giờ là vâng lời mẹ.'),
    Q('Ông bảo không được ăn nhiều kẹo, em làm gì?', ['Nghe lời ông, ăn ít kẹo lại', 'Cãi "Ông không cho con ăn gì"', 'Giấu kẹo trong ngăn kéo', 'Trốn ông ăn vụng'], 0, 'Nghe lời người lớn vì sức khoẻ là đúng.'),
    Q('Hành vi nào KHÔNG vâng lời?', ['Bố bảo về sớm, em về sớm', 'Bà bảo ăn rau, em ăn rau', 'Mẹ bảo học bài, em vẫn xem điện thoại', 'Mẹ bảo dọn phòng, em dọn ngay'], 2, 'Mẹ bảo học mà vẫn xem điện thoại là không vâng lời.'),
    Q('Vì sao em nên vâng lời ông bà cha mẹ?', ['Vì người lớn yêu thương và muốn tốt cho em', 'Vì bị bắt phải nghe', 'Vì sợ bị mắng', 'Vì không có ai chơi cùng'], 0, 'Người lớn dạy bảo vì yêu thương ta.'),
    Q('Bố bảo em không chơi điện thoại trước khi ngủ, em nên?', ['Vâng lời, cất điện thoại đi ngủ', 'Cãi bố', 'Lén chơi trong chăn', 'Khóc đòi chơi'], 0, 'Vâng lời bố giữ gìn sức khoẻ là đúng.'),
  ]),

  M(9, 'Yêu thương em nhỏ', [
    Q('Em nên đối xử với em bé thế nào?', ['Giành đồ chơi của em', 'Yêu thương, nhường nhịn em', 'Đánh em khi giận', 'Bắt nạt em'], 1, 'Là anh chị thì phải yêu thương em nhỏ.'),
    Q('Em bé khóc, em nên?', ['Bỏ đi không quan tâm', 'Quát to để em im', 'Dỗ dành, hỏi xem em cần gì', 'Cấu em cho khóc to hơn'], 2, 'Dỗ em và quan tâm em là cách đúng.'),
    Q('Em và em bé cùng thích 1 cái bánh, em nên?', ['Vứt bánh đi', 'Đánh em cho em sợ', 'Chia đôi cùng ăn hoặc nhường em', 'Giành lấy ăn hết'], 2, 'Nhường em là biểu hiện yêu thương em.'),
    Q('Bạn nào yêu thương em nhỏ?', ['Anh An đọc truyện cho em nghe', 'Anh Bình giật đồ chơi của em', 'Chị Lan đánh em vì em đụng đồ', 'Chị Mai bắt em làm bài hộ'], 0, 'Đọc truyện cho em là cách thể hiện yêu em.'),
    Q('Em bé làm rơi đồ của em, em nên?', ['Mách bố mẹ đánh em', 'Nhắc em nhẹ nhàng và nhặt lên', 'Hét vào mặt em', 'Đánh em'], 1, 'Nhẹ nhàng nhắc em vì em còn nhỏ.'),
    Q('Có em nhỏ trong nhà, em nên?', ['Nói xấu em với bố mẹ', 'Cãi nhau với em', 'Làm gương cho em noi theo', 'Tranh giành đồ với em'], 2, 'Anh chị nên làm gương tốt cho em.'),
  ]),

  M(10, 'Giúp đỡ bạn bè (1)', [
    Q('Bạn quên bút, em nên?', ['Mặc kệ bạn', 'Mách cô giáo', 'Cười chê bạn', 'Cho bạn mượn bút'], 3, 'Cho bạn mượn bút là giúp đỡ bạn.'),
    Q('Bạn không hiểu bài, em đã hiểu, em nên?', ['Giảng lại cho bạn nghe', 'Không cho bạn hỏi', 'Cười chê bạn dốt', 'Giấu cho bạn không biết'], 0, 'Giảng giúp bạn là biểu hiện tình bạn tốt.'),
    Q('Bạn bị ngã ở sân trường, em làm gì?', ['Đứng nhìn không làm gì', 'Chế nhạo bạn vụng về', 'Cười rồi bỏ đi', 'Đỡ bạn dậy, hỏi thăm bạn'], 3, 'Đỡ bạn dậy và hỏi thăm là việc làm đẹp.'),
    Q('Bạn ốm phải nghỉ học, em nên?', ['Mặc kệ bạn', 'Cười bạn yếu đuối', 'Ghi bài hộ và mang đến nhà bạn', 'Lấy đồ của bạn'], 2, 'Ghi bài hộ là quan tâm và giúp đỡ bạn.'),
    Q('Giúp đỡ bạn KHÔNG nên là?', ['Giảng bài cho bạn', 'An ủi khi bạn buồn', 'Cho bạn mượn đồ dùng', 'Cho bạn chép bài kiểm tra'], 3, 'Cho bạn chép bài kiểm tra là gian dối, không phải giúp.'),
    Q('Bạn nào biết giúp đỡ?', ['Bạn Mai không cho ai mượn gì', 'Bạn Tú giành đồ ăn của bạn', 'Bạn Hùng cười chê bạn vấp ngã', 'Bạn Lan giúp bạn xách cặp khi bạn bị đau tay'], 3, 'Giúp bạn khi bạn cần là biểu hiện tốt.'),
  ]),

  M(11, 'Giúp đỡ bạn bè (2) — bạn khuyết tật, hoàn cảnh khó khăn', [
    Q('Trong lớp có bạn khuyết tật, em nên?', ['Tránh xa bạn', 'Trêu chọc bạn', 'Quan tâm, giúp đỡ và chơi với bạn', 'Bắt chước dáng đi của bạn'], 2, 'Bạn khuyết tật cần được yêu thương, không bị kỳ thị.'),
    Q('Bạn nhà nghèo không có sách mới, em nên?', ['Cho bạn mượn sách hoặc tặng bạn sách cũ còn tốt', 'Không chơi với bạn', 'Khoe sách mới với bạn', 'Khinh thường bạn'], 0, 'Chia sẻ giúp bạn vượt qua khó khăn.'),
    Q('Hành vi nào ĐÚNG với bạn khiếm thị (không nhìn được)?', ['Cười nhạo bạn', 'Đẩy bạn đi nơi nguy hiểm', 'Dẫn bạn đi vệ sinh khi cần', 'Lấy đồ của bạn'], 2, 'Dẫn bạn khiếm thị là giúp đỡ thiết thực.'),
    Q('Bạn bị mất bố/mẹ, em nên?', ['Nói "bạn không có bố/mẹ"', 'Hỏi bạn cho biết chuyện', 'Tránh bạn ra', 'An ủi, chơi cùng bạn bình thường'], 3, 'An ủi và chơi cùng giúp bạn vơi buồn.'),
    Q('Bạn không có áo ấm vào mùa đông, em làm gì?', ['Khoe áo ấm của mình', 'Trêu bạn rét', 'Báo với cô giáo và quyên góp giúp bạn', 'Cười chê bạn'], 2, 'Báo cô và quyên góp là cách giúp bạn thiết thực.'),
  ]),

  M(12, 'Chia sẻ với bạn', [
    Q('Em có 4 cái kẹo, bạn không có. Em nên?', ['Cất giấu cho bạn không thấy', 'Khoe kẹo trước mặt bạn', 'Ăn hết một mình', 'Chia cho bạn vài cái'], 3, 'Chia sẻ kẹo là biểu hiện đẹp của tình bạn.'),
    Q('Bạn buồn vì điểm thấp, em nên?', ['An ủi và rủ bạn cùng ôn lại bài', 'Khoe điểm cao của mình', 'Mách cả lớp', 'Cười bạn dốt'], 0, 'Chia sẻ nỗi buồn và giúp đỡ là tình bạn đẹp.'),
    Q('Em có đồ chơi mới, các bạn xúm vào xem, em nên?', ['Đánh bạn khi bạn chạm vào', 'Cho các bạn cùng chơi', 'Đòi bạn trả tiền mới được chơi', 'Giấu đi không cho ai chơi'], 1, 'Chia sẻ đồ chơi cùng bạn là vui vẻ, hoà đồng.'),
    Q('Lan đạt giải Nhất, em nên?', ['Ghen tị, không nói gì', 'Phá đồ của Lan', 'Chúc mừng Lan và chia sẻ niềm vui', 'Nói xấu Lan'], 2, 'Chia sẻ niềm vui với bạn là tình bạn tốt.'),
    Q('Hành vi nào KHÔNG chia sẻ?', ['Khoe đồ ăn mà không mời bạn', 'Tặng quà sinh nhật bạn', 'Cùng bạn ăn snack', 'Cho bạn mượn truyện đọc'], 0, 'Khoe đồ ăn mà không mời là ích kỉ.'),
    Q('Chia sẻ với bạn giúp tình bạn?', ['Gắn bó, thân thiết hơn', 'Xa cách hơn', 'Bị bạn khinh', 'Mất bạn'], 0, 'Chia sẻ làm bạn bè gắn bó hơn.'),
  ]),

  M(13, 'Đoàn kết với bạn', [
    Q('Đoàn kết với bạn nghĩa là?', ['Tẩy chay bạn không hợp ý', 'Chia phe cãi nhau', 'Đánh nhau cho vui', 'Cùng nhau giúp đỡ, không gây gổ'], 3, 'Đoàn kết là yêu thương, cùng nhau, không gây gổ.'),
    Q('Hai bạn cãi nhau vì giành chỗ ngồi, em nên?', ['Cổ vũ cãi to hơn', 'Hùa theo một bên', 'Mặc kệ', 'Khuyên hai bạn nhường nhau'], 3, 'Khuyên giải để hai bạn hoà thuận là đúng.'),
    Q('Bạn vô tình va vào em, em nên?', ['Mách cô đánh phạt bạn', 'Đánh lại bạn', 'Mỉm cười và nói "Không sao"', 'Mắng bạn to'], 2, 'Bao dung với lỗi nhỏ giữ tình bạn đẹp.'),
    Q('Trong trò chơi tập thể, em nên?', ['Chỉ chơi một mình', 'Bỏ cuộc giữa chừng', 'Cãi nhau với đồng đội', 'Hợp tác với cả đội'], 3, 'Hợp tác với đội là đoàn kết.'),
    Q('Hành vi nào KHÔNG đoàn kết?', ['Chơi cùng bạn mới', 'Cãi vã, đánh nhau với bạn', 'Cùng làm bài nhóm', 'Cùng bạn dọn lớp'], 1, 'Đánh nhau là phá vỡ đoàn kết.'),
    Q('Khi cả nhóm không đồng ý với ý của em, em nên?', ['Phá phách cho nhóm thất bại', 'Tách ra làm một mình', 'Tức giận bỏ đi', 'Lắng nghe ý kiến chung và cùng làm'], 3, 'Lắng nghe và làm theo số đông là đoàn kết.'),
  ]),

  M(14, 'Yêu lao động', [
    Q('Vì sao em phải yêu lao động?', ['Vì bố mẹ bắt làm', 'Để được khen', 'Vì lười là xấu', 'Lao động giúp chúng ta khoẻ mạnh và tạo ra của cải'], 3, 'Lao động đem lại sức khoẻ và giá trị cuộc sống.'),
    Q('Việc làm nào là yêu lao động?', ['Vứt rác bừa bãi', 'Bắt em làm hộ', 'Nằm cả ngày xem ti vi', 'Quét nhà giúp mẹ'], 3, 'Tự nguyện làm việc nhà là yêu lao động.'),
    Q('Em thấy mẹ đang nấu cơm, em nên?', ['Chê cơm mẹ nấu chậm', 'Hỏi xem có giúp được gì không', 'Đi chơi tiếp', 'Đòi ăn ngay'], 1, 'Chủ động giúp đỡ là yêu lao động.'),
    Q('Hành vi nào KHÔNG yêu lao động?', ['Giúp bố tưới cây', 'Trốn việc, đùn việc cho người khác', 'Rửa chén sau bữa ăn', 'Tự xếp chăn màn'], 1, 'Trốn việc là lười lao động.'),
    Q('Tục ngữ nào nói về lao động?', ['Có làm thì mới có ăn', 'Không có câu nào', 'Cả hai câu trên', 'Tay làm hàm nhai, tay quai miệng trễ'], 2, 'Cả hai câu đều nói về giá trị lao động.'),
    Q('Bạn nào yêu lao động?', ['Bạn Hùng không bao giờ giúp việc nhà', 'Bạn Tú bắt em làm hộ bài', 'Bạn An tự dọn bàn học của mình', 'Bạn Lan nằm chờ mẹ làm hết'], 2, 'Tự dọn bàn học là yêu lao động.'),
  ]),

  M(15, 'Trân trọng người lao động', [
    Q('Người lao động bao gồm những ai?', ['Chỉ có người nổi tiếng', 'Chỉ có người giàu', 'Chỉ có nhân viên văn phòng', 'Bác sĩ, nông dân, công nhân, lao công, giáo viên…'], 3, 'Mọi người làm việc đều là người lao động.'),
    Q('Bác lao công đang quét sân trường, em nên?', ['Chào bác và cảm ơn bác', 'Vứt rác ngay chỗ bác vừa quét', 'Không quan tâm', 'Cười chê công việc của bác'], 0, 'Chào và cảm ơn người lao động là tôn trọng.'),
    Q('Bác nông dân làm ra hạt gạo, em nên?', ['Coi thường nghề nông dân', 'Đổ cơm thừa', 'Nói "nghề ấy thấp kém"', 'Quý hạt gạo, không bỏ phí cơm'], 3, 'Quý hạt gạo là trân trọng công lao nông dân.'),
    Q('Hành vi nào KHÔNG tôn trọng người lao động?', ['Giúp đỡ cô lao công', 'Chào bác bảo vệ', 'Chế nhạo nghề nghiệp người khác', 'Cảm ơn cô bán hàng'], 2, 'Chế nhạo nghề là thiếu tôn trọng.'),
    Q('Bố mẹ đi làm về mệt, em nên?', ['Mặc kệ bố mẹ', 'Hỏi thăm và mời nước bố mẹ', 'Đòi đi chơi ngay', 'Bật nhạc to'], 1, 'Quan tâm bố mẹ là biết ơn lao động của bố mẹ.'),
    Q('Câu nói nào ĐÚNG?', ['Mọi nghề lao động chân chính đều đáng quý', 'Nghề nông dân là thấp kém', 'Chỉ có nghề lương cao mới đáng quý', 'Nghề lao công không quan trọng'], 0, 'Mọi nghề lương thiện đều đáng quý.'),
  ]),

  M(16, 'Quý trọng đồng tiền', [
    Q('Đồng tiền do đâu mà có?', ['Tự nhiên có', 'Do lao động làm ra', 'Nhặt ngoài đường', 'Do trời cho'], 1, 'Tiền là kết quả của lao động.'),
    Q('Em nhận được tiền lì xì, em nên?', ['Vứt đi không cần', 'Khoe với mọi người', 'Tiêu hết ngay vào đồ chơi', 'Cảm ơn và để dành mua đồ cần thiết'], 3, 'Tiết kiệm và dùng đúng việc là quý trọng tiền.'),
    Q('Bạn nào quý trọng tiền?', ['Bạn Bình tiêu xài hoang phí', 'Bạn Hùng đòi mua mọi thứ', 'Bạn Tú vứt tiền lẻ xuống đất', 'Bạn Lan bỏ ống heo tiết kiệm tiền tiêu vặt'], 3, 'Tiết kiệm tiền vào ống heo là quý tiền.'),
    Q('Mẹ cho 5.000 đồng ăn sáng, em nên?', ['Khoe với bạn', 'Tiêu hết và xin thêm', 'Cất đi không ăn sáng', 'Dùng đúng mục đích, không vòi thêm'], 3, 'Dùng đúng mục đích là quý tiền của bố mẹ.'),
    Q('Hành vi nào LÃNG PHÍ tiền?', ['Để dành mua quà tặng mẹ', 'Mua đồ dùng học tập', 'Mua đồ chơi không cần thiết liên tục', 'Tiết kiệm bỏ heo'], 2, 'Mua đồ không cần thiết là lãng phí.'),
    Q('Em nhặt được tờ 50.000 đồng ở sân trường, em nên?', ['Đưa cho bạn thân', 'Đem nộp cô giáo để trả lại người mất', 'Bỏ túi mang về', 'Xé tờ tiền đi'], 1, 'Trả lại của rơi là thật thà.'),
  ]),

  M(17, 'Học tập chăm chỉ', [
    Q('Chăm chỉ học tập là?', ['Học khi nào thích', 'Chỉ học khi có kiểm tra', 'Học bài, làm bài đầy đủ mỗi ngày', 'Không bao giờ học'], 2, 'Chăm chỉ là duy trì học tập đều đặn.'),
    Q('Bạn nào chăm chỉ?', ['Bạn Hùng chép bài bạn', 'Bạn Tú để bài tập đến sát giờ vào lớp', 'Bạn Lan làm bài tập ngay khi về nhà', 'Bạn Bình quên làm bài thường xuyên'], 2, 'Làm bài ngay là chăm chỉ.'),
    Q('Khi không hiểu bài, em nên?', ['Chép đại đáp án', 'Nói dối là đã hiểu', 'Bỏ qua không quan tâm', 'Hỏi thầy cô hoặc bạn để hiểu'], 3, 'Hỏi để hiểu là biểu hiện chăm học.'),
    Q('Tục ngữ "Có công mài sắt có ngày nên kim" nói về?', ['Không nên mài sắt', 'Kim làm bằng sắt', 'Mài sắt rất khó', 'Kiên trì, chăm chỉ sẽ thành công'], 3, 'Câu này nói lên giá trị của kiên trì học tập.'),
    Q('Hành vi nào KHÔNG chăm chỉ?', ['Trốn học đi chơi điện tử', 'Ôn bài trước giờ kiểm tra', 'Làm bài tập về nhà', 'Đọc thêm sách'], 0, 'Trốn học là lười biếng.'),
    Q('Em đặt mục tiêu học tập thì nên?', ['Cố gắng từng ngày để đạt được', 'Bỏ ngay khi gặp khó', 'Để bố mẹ học hộ', 'Nói cho có rồi không làm'], 0, 'Kiên trì cố gắng là chăm chỉ thực sự.'),
  ]),

  M(18, 'Sơ kết HK1 — Tự đánh giá phẩm chất', [
    Q('Trong HK1, em đã học chăm chỉ. Biểu hiện nào em đã làm tốt?', ['Quên sách vở', 'Làm bài đầy đủ mỗi ngày', 'Trốn học', 'Chép bài bạn'], 1, 'Làm bài đầy đủ là biểu hiện chăm chỉ.'),
    Q('Em gặp bạn khuyết tật ở lớp, em đã?', ['Bắt chước dáng đi của bạn', 'Tránh xa bạn', 'Giúp đỡ bạn khi cần', 'Trêu chọc bạn'], 2, 'Giúp đỡ bạn khuyết tật là biểu hiện tốt.'),
    Q('Mỗi sáng đi học, em luôn?', ['Đến đúng giờ', 'Ở nhà ngủ', 'Đến trễ', 'Đi muộn 15 phút'], 0, 'Đúng giờ là phẩm chất tốt.'),
    Q('Khi mẹ ốm, em đã?', ['Đi chơi với bạn', 'Đòi mẹ nấu cơm', 'Quan tâm và chăm sóc mẹ', 'Mặc kệ mẹ'], 2, 'Chăm mẹ ốm là yêu mẹ.'),
    Q('Bạn quên bút, em đã?', ['Cười chê bạn', 'Cho bạn mượn', 'Mách cô', 'Mặc kệ bạn'], 1, 'Cho mượn bút là giúp đỡ bạn.'),
    Q('Em có 5 cái kẹo, em đã?', ['Khoe rồi không cho', 'Chia cho bạn', 'Ăn hết một mình', 'Giấu kẹo'], 1, 'Chia kẹo cho bạn là chia sẻ.'),
    Q('Tiền lì xì em đã?', ['Tiêu hết mua đồ chơi', 'Để dành tiết kiệm', 'Cho hết bạn', 'Vứt đi'], 1, 'Tiết kiệm tiền lì xì là quý tiền.'),
    Q('Bác lao công quét sân, em đã?', ['Chào và cảm ơn bác', 'Cười nhạo bác', 'Vứt rác ngay đó', 'Không quan tâm'], 0, 'Cảm ơn người lao động là tôn trọng họ.'),
    Q('Gặp thầy cô ngoài đường, em đã?', ['Cúi đầu chào thầy cô', 'Đi thẳng không chào', 'Chạy trốn', 'Giả vờ không thấy'], 0, 'Chào thầy cô là lễ phép.'),
    Q('Phẩm chất nào em cần cố gắng hơn trong HK2?', ['Tất cả các phẩm chất tốt: trung thực, chăm chỉ, trách nhiệm, nhân ái, yêu nước', 'Không cần cố gắng', 'Chỉ cần chăm học là đủ', 'Chỉ cần ngoan ở nhà'], 0, 'Em cần rèn luyện toàn diện tất cả phẩm chất.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Trung thực trong học tập', [
    Q('Trung thực trong học tập là?', ['Cóp bài để được điểm cao', 'Không gian dối, không cóp bài', 'Nói dối cô về điểm', 'Sửa bài kiểm tra sau khi cô trả'], 1, 'Trung thực là không gian dối khi học.'),
    Q('Khi kiểm tra, em không nhớ bài, em nên?', ['Tự cố gắng làm, không quay cóp', 'Mở sách ra xem', 'Cóp bài bạn', 'Hỏi bạn nhỏ tiếng'], 0, 'Tự làm là trung thực.'),
    Q('Bạn đưa em xem bài kiểm tra, em nên?', ['Từ chối và tự làm', 'Chép luôn cho nhanh', 'Khoe với bạn khác', 'Cảm ơn rồi chép'], 0, 'Từ chối chép là trung thực.'),
    Q('Em làm bài sai nhưng cô chấm thành đúng, em nên?', ['Báo cô để cô chấm lại', 'Im lặng nhận điểm cao', 'Mừng thầm', 'Khoe điểm cao với bạn'], 0, 'Báo cô là trung thực.'),
    Q('Hành vi nào KHÔNG trung thực?', ['Tự làm bài', 'Sửa điểm trong sổ liên lạc', 'Nói thật với cô', 'Nhận lỗi khi sai'], 1, 'Sửa điểm là gian dối.'),
    Q('Bạn nào trung thực?', ['Bạn Hùng đổ lỗi cho bạn khác', 'Bạn Tú cóp bài bạn ngồi cạnh', 'Bạn An tự làm bài dù khó', 'Bạn Lan giấu bài kiểm tra điểm kém'], 2, 'Tự làm bài là trung thực.'),
  ]),

  M(20, 'Nhặt được của rơi trả lại', [
    Q('Em nhặt được chiếc ví ở sân trường, em nên?', ['Bỏ túi mang về', 'Đưa cho bạn thân', 'Đem nộp cô giáo hoặc bác bảo vệ', 'Lấy tiền rồi vứt ví'], 2, 'Nộp lại là trả của rơi cho người mất.'),
    Q('Vì sao em phải trả lại của rơi?', ['Vì sợ bị mắng', 'Vì sợ bị đánh', 'Vì người ta nhìn thấy', 'Vì đó là của người khác, không phải của mình'], 3, 'Đồ của ai thì phải trả người đó.'),
    Q('Nhặt được 50.000 đồng trong lớp, em làm gì?', ['Đưa cô giáo nhờ tìm chủ nhân', 'Chia đôi với bạn', 'Giấu vào ngăn bàn của mình', 'Mua kẹo cho cả nhóm'], 0, 'Nhờ cô tìm chủ là đúng.'),
    Q('Bạn nhặt được đồng hồ, bạn nói "tao giữ luôn", em nên?', ['Đòi bạn cho mình', 'Khuyên bạn trả lại cho người mất', 'Đồng ý chia phần', 'Khen bạn may mắn'], 1, 'Khuyên bạn làm đúng là tốt.'),
    Q('Cảm giác sau khi trả lại của rơi là?', ['Tiếc nuối', 'Vui vì làm việc tốt', 'Buồn vì mất tiền', 'Sợ hãi'], 1, 'Làm điều đúng khiến lòng vui.'),
    Q('Câu nào ĐÚNG?', ['Của rơi nhặt được là của mình', 'Không cần trả nếu không có ai biết', 'Trả lại của rơi là phẩm chất tốt', 'Càng nhiều của rơi càng giàu'], 2, 'Trả lại của rơi là biểu hiện trung thực.'),
  ]),

  M(21, 'Nhận lỗi và sửa lỗi', [
    Q('Em làm vỡ cốc, em nên?', ['Khóc không nhận lỗi', 'Giấu mảnh vỡ đi', 'Xin lỗi mẹ và dọn dẹp cẩn thận', 'Đổ lỗi cho em bé'], 2, 'Xin lỗi và sửa sai là biết nhận lỗi.'),
    Q('Em quên làm bài tập, cô hỏi, em nên?', ['Khóc cho cô tha', 'Thừa nhận quên và xin cô cho làm bù', 'Nói dối là quên sách ở nhà', 'Đổ lỗi cho mẹ'], 1, 'Thừa nhận và sửa sai là đúng.'),
    Q('Em đánh em bé khiến em khóc, em nên?', ['Đe doạ em', 'Bảo em "không được mách mẹ"', 'Đổ tại em hỗn', 'Xin lỗi em và dỗ em'], 3, 'Xin lỗi và làm lành là biết nhận lỗi.'),
    Q('Hành vi nào ĐÚNG khi mắc lỗi?', ['Trốn tránh', 'Đổ lỗi cho người khác', 'Trung thực nhận lỗi và sửa lỗi', 'Nói dối'], 2, 'Nhận và sửa lỗi là phẩm chất tốt.'),
    Q('Sau khi nhận lỗi, em cần?', ['Nhớ mãi lỗi và không sửa', 'Tự ti mãi', 'Đổ lỗi tiếp', 'Cố gắng không tái phạm'], 3, 'Không tái phạm là sửa lỗi thật sự.'),
    Q('Bạn làm em đau, bạn xin lỗi. Em nên?', ['Đánh lại bạn', 'Giận bạn mãi', 'Đòi bồi thường', 'Tha thứ cho bạn'], 3, 'Tha thứ khi bạn biết lỗi là rộng lượng.'),
  ]),

  M(22, 'Văn hoá Tết — Chúc Tết, lì xì', [
    Q('Tết đến, em chúc Tết ông bà thế nào?', ['Không chúc gì cả', '"Tết có gì mới không?"', '"Ông bà cho con tiền"', '"Chúc ông bà mạnh khoẻ, sống lâu trăm tuổi"'], 3, 'Chúc sức khoẻ ông bà là chúc Tết lễ phép.'),
    Q('Nhận lì xì, em nên?', ['Chê tiền ít', 'Cảm ơn và cất đi', 'Đòi thêm', 'Mở phong bao ngay xem được bao nhiêu'], 1, 'Cảm ơn và cất đi là phép lịch sự.'),
    Q('Khi đi chúc Tết họ hàng, em nên?', ['Chạy vào nhà lấy bánh ăn', 'Chào hỏi và chúc Tết người lớn trước', 'Bật ti vi xem', 'Mở tủ tìm kẹo'], 1, 'Chào hỏi và chúc Tết người lớn là lễ phép.'),
    Q('Hành vi nào KHÔNG đẹp ngày Tết?', ['Mặc đẹp đi chúc Tết', 'Chúc Tết ông bà', 'Cảm ơn người lì xì', 'So bì tiền lì xì ít/nhiều'], 3, 'So bì tiền lì xì là không lịch sự.'),
    Q('Tiền lì xì nên dùng để?', ['Khoe khoang với bạn', 'Đánh bạc cùng anh chị lớn', 'Mua đồ chơi vô bổ', 'Tiết kiệm hoặc mua đồ dùng học tập'], 3, 'Tiết kiệm hoặc mua đồ học tập là dùng tiền có ích.'),
    Q('Phong tục Tết đẹp gồm?', ['Bỏ nhà đi chơi cả Tết', 'Đập phá đồ đạc', 'Cãi nhau với họ hàng', 'Chúc Tết ông bà cha mẹ, mừng tuổi trẻ em'], 3, 'Chúc Tết, mừng tuổi là nét đẹp văn hoá Việt.'),
    Q('Đầu năm, em nên nói lời gì với người lớn?', ['Lời chúc tốt đẹp', 'Lời than vãn', 'Im lặng không nói gì', 'Lời cãi cọ'], 0, 'Đầu năm chúc nhau lời tốt đẹp.'),
  ]),

  M(23, 'Bảo vệ của công', [
    Q('Của công là gì?', ['Tài sản chung của trường, lớp, xã hội', 'Của hàng xóm', 'Tài sản riêng của em', 'Tài sản của bố mẹ'], 0, 'Của công là tài sản chung dùng cho mọi người.'),
    Q('Hành vi nào bảo vệ của công?', ['Khắc tên lên tường', 'Dùng đồ dùng lớp cẩn thận', 'Vẽ bậy lên bàn', 'Đập phá ghế'], 1, 'Dùng cẩn thận là bảo vệ của công.'),
    Q('Em thấy bạn đập ghế lớp, em nên?', ['Cười cổ vũ', 'Đập cùng cho vui', 'Khuyên bạn ngừng và báo cô', 'Mặc kệ bạn'], 2, 'Báo cô và khuyên bạn là bảo vệ của công.'),
    Q('Vòi nước công cộng bị bạn nào quên khoá, em nên?', ['Mở thêm cho chảy mạnh', 'Đập vỡ vòi', 'Để mặc nước chảy', 'Khoá vòi nước lại'], 3, 'Khoá vòi tiết kiệm nước là bảo vệ của công.'),
    Q('Cây xanh, ghế đá ở công viên là?', ['Của riêng em', 'Có thể bẻ về nhà', 'Của ai cũng được phá', 'Tài sản công, em cần bảo vệ'], 3, 'Cây xanh, ghế đá là của công cộng.'),
    Q('Bạn nào biết bảo vệ của công?', ['Bạn Lan tắt đèn lớp khi ra về', 'Bạn Hùng bẻ ghế', 'Bạn Mai khắc tên lên bàn', 'Bạn Tú vẽ lên tường lớp'], 0, 'Tắt đèn khi không dùng là tiết kiệm, bảo vệ của công.'),
  ]),

  M(24, 'Giữ gìn sách vở', [
    Q('Vì sao em phải giữ gìn sách vở?', ['Vì sách vở là đồ dùng học tập quan trọng', 'Để khoe với bạn', 'Vì bố mẹ bắt giữ', 'Vì sách rất đẹp'], 0, 'Giữ sách vở giúp việc học lâu dài và tiết kiệm.'),
    Q('Hành vi nào ĐÚNG?', ['Vẽ bậy vào sách', 'Xé trang sách', 'Bọc bìa, dán nhãn sách vở', 'Để sách dưới đất ướt mưa'], 2, 'Bọc bìa giúp sách bền lâu.'),
    Q('Tay em bẩn, em nên?', ['Bôi mực vào sách cho đẹp', 'Rửa tay rồi mới cầm sách', 'Cứ thế cầm sách', 'Lau tay vào sách'], 1, 'Rửa tay trước khi đọc sách là giữ sách sạch.'),
    Q('Vở của em bị bạn vẽ bậy, em nên?', ['Đánh bạn', 'Vẽ vào vở bạn để trả thù', 'Nhắc bạn nhẹ nhàng và lau sạch', 'Khóc to'], 2, 'Nhắc nhở nhẹ nhàng là cách đúng.'),
    Q('Khi không học sách nữa, em nên?', ['Giữ gọn gàng hoặc tặng em nhỏ học sau', 'Vứt đi', 'Cắt làm đồ chơi', 'Xé bỏ đi'], 0, 'Tặng em nhỏ là biết tiết kiệm.'),
    Q('Hành vi nào hỏng sách?', ['Gập gáy sách, làm rách trang', 'Lau bụi sách', 'Bọc bìa cẩn thận', 'Để sách ngăn nắp trên giá'], 0, 'Gập gáy và làm rách trang là làm hỏng sách.'),
  ]),

  M(25, 'Em yêu quê hương em', [
    Q('Quê hương em là?', ['Nơi em đi du lịch vào dịp hè', 'Nơi xa lạ', 'Chỉ là một địa danh trong sách', 'Nơi em sinh ra hoặc lớn lên'], 3, 'Quê hương là nơi em sinh ra và gắn bó.'),
    Q('Em yêu quê hương bằng cách?', ['Chê quê mình xấu', 'Phá hoại làng xóm', 'Giữ gìn cảnh đẹp quê hương', 'Vứt rác bừa bãi ở quê'], 2, 'Giữ gìn cảnh đẹp là yêu quê.'),
    Q('Quê hương em có cảnh đẹp gì?', ['Không có gì cả', 'Em không biết quê mình', 'Cây đa, giếng nước, sân đình hoặc phố phường, nhà cao tầng…', 'Chỉ có rác'], 2, 'Quê hương nào cũng có nét đẹp riêng.'),
    Q('Khi đi xa, nhớ về quê hương là?', ['Tình cảm tự nhiên đáng quý', 'Lãng phí thời gian', 'Yếu đuối', 'Không cần thiết'], 0, 'Nhớ quê là tình cảm đẹp.'),
    Q('Bạn chê quê em "nhà quê", em nên?', ['Hùa theo bạn chê', 'Tự ti và buồn', 'Đánh bạn', 'Giải thích và tự hào về quê mình'], 3, 'Tự hào quê hương và giải thích cho bạn hiểu.'),
    Q('Hành vi nào yêu quê?', ['Trồng cây xanh ở quê', 'Bỏ quê đi không bao giờ về', 'Đập phá đình làng', 'Vẽ bậy lên di tích'], 0, 'Trồng cây làm đẹp quê hương.'),
  ]),

  M(26, 'Tôn trọng cờ Tổ quốc', [
    Q('Cờ đỏ sao vàng là?', ['Cờ của lớp', 'Quốc kì của nước Cộng hoà xã hội chủ nghĩa Việt Nam', 'Cờ của một địa phương', 'Lá cờ trang trí'], 1, 'Cờ đỏ sao vàng là Quốc kì Việt Nam.'),
    Q('Khi chào cờ, em nên?', ['Lúi húi cúi đầu', 'Quay đi nơi khác', 'Cười đùa, nói chuyện', 'Đứng nghiêm trang, mắt nhìn cờ'], 3, 'Đứng nghiêm khi chào cờ là tôn trọng Tổ quốc.'),
    Q('Khi hát Quốc ca, em nên?', ['Cúi đầu lén nhìn điện thoại', 'Đứng nghiêm và hát to, rõ ràng', 'Cười đùa', 'Nói chuyện với bạn'], 1, 'Hát Quốc ca với sự trang nghiêm.'),
    Q('Hành vi nào KHÔNG tôn trọng cờ Tổ quốc?', ['Đứng nghiêm chào cờ', 'Hát Quốc ca to rõ', 'Vẽ bậy lên hình cờ Tổ quốc', 'Treo cờ ngày lễ'], 2, 'Vẽ bậy lên cờ là không tôn trọng.'),
    Q('Ngày lễ lớn của đất nước, mỗi nhà thường?', ['Treo cờ Tổ quốc', 'Đóng kín cửa không quan tâm', 'Đập phá đồ đạc', 'Cãi nhau ầm ĩ'], 0, 'Treo cờ ngày lễ là thể hiện tình yêu nước.'),
    Q('Bạn cười đùa trong giờ chào cờ, em nên?', ['Mặc kệ bạn', 'Trêu chọc cùng bạn', 'Cười theo bạn', 'Nhắc bạn nghiêm túc'], 3, 'Nhắc bạn nghiêm túc khi chào cờ là đúng.'),
  ]),

  M(27, 'Biết ơn người có công với đất nước', [
    Q('Người có công với đất nước là?', ['Người nổi tiếng trên mạng', 'Chỉ những người giàu', 'Các anh hùng liệt sĩ, Bác Hồ, các vị anh hùng dân tộc…', 'Ca sĩ, diễn viên'], 2, 'Người có công là người hi sinh, đóng góp cho đất nước.'),
    Q('Em thể hiện lòng biết ơn bằng cách?', ['Phá nghĩa trang liệt sĩ', 'Quên đi quá khứ', 'Học tập tốt, kính trọng các thương binh, liệt sĩ', 'Chế giễu các bác thương binh'], 2, 'Học tốt và kính trọng là biết ơn.'),
    Q('Ngày 27/7 là ngày gì?', ['Ngày Thương binh – Liệt sĩ', 'Ngày Quốc khánh', 'Ngày sinh nhật em', 'Ngày Nhà giáo'], 0, '27/7 là ngày tri ân thương binh liệt sĩ.'),
    Q('Khi đi thăm nghĩa trang liệt sĩ, em nên?', ['Nghiêm trang, dâng hoa và thắp hương', 'Hái hoa mang về', 'Ngồi lên mộ chụp ảnh', 'Đùa giỡn chạy nhảy'], 0, 'Nghiêm trang và dâng hương là tỏ lòng biết ơn.'),
    Q('Bác Hồ là người?', ['Lãnh tụ vĩ đại của dân tộc Việt Nam', 'Không liên quan đến em', 'Một người bình thường', 'Người nước ngoài'], 0, 'Bác Hồ là vị lãnh tụ đáng kính của dân tộc.'),
    Q('Học sinh nhỏ tuổi biết ơn Bác Hồ bằng cách?', ['Không học bài', 'Cãi lời thầy cô', 'Quên Bác đi', 'Thực hiện 5 điều Bác Hồ dạy'], 3, 'Làm theo 5 điều Bác dạy là biết ơn Bác.'),
  ]),

  M(28, 'Giữ vệ sinh nơi công cộng', [
    Q('Nơi công cộng là?', ['Công viên, đường phố, bệnh viện, trường học…', 'Phòng ngủ của em', 'Chỉ là nhà em', 'Chỉ là phòng riêng'], 0, 'Nơi công cộng là nơi mọi người cùng dùng.'),
    Q('Em ăn xong vỏ kẹo, em nên?', ['Vứt vào bụi cây', 'Bỏ vào thùng rác', 'Đưa cho bạn cầm hộ', 'Vứt ngay xuống đất'], 1, 'Bỏ rác đúng thùng là giữ vệ sinh.'),
    Q('Thấy đường phố nhiều rác, em nên?', ['Vứt thêm rác của mình', 'Mặc kệ', 'Cười chê đường bẩn', 'Nhặt rác bỏ thùng và nhắc mọi người không xả rác'], 3, 'Nhặt rác là việc tốt giữ vệ sinh chung.'),
    Q('Bạn nào giữ vệ sinh tốt?', ['Bạn Hùng đổ nước bẩn ra sân', 'Bạn An bỏ rác đúng thùng dù xa', 'Bạn Tú vứt rác bừa bãi', 'Bạn Lan khạc nhổ ra đường'], 1, 'Bỏ rác đúng thùng là biểu hiện tốt.'),
    Q('Hành vi nào KHÔNG giữ vệ sinh?', ['Khạc nhổ, tiểu tiện bừa bãi nơi công cộng', 'Quét sân chung', 'Bỏ rác vào thùng', 'Trồng hoa làm đẹp đường'], 0, 'Khạc nhổ bừa bãi là mất vệ sinh.'),
    Q('Vì sao phải giữ vệ sinh nơi công cộng?', ['Vì bị phạt', 'Vì sạch đẹp cho mọi người và không có dịch bệnh', 'Vì sợ bị nhìn thấy', 'Vì có camera'], 1, 'Vệ sinh tốt cho cộng đồng và phòng dịch.'),
  ]),

  M(29, 'Lịch sự nơi công cộng', [
    Q('Khi mua hàng, em nên?', ['Hét to với cô bán hàng', 'Cãi nhau với người khác', 'Chen ngang lên đầu', 'Xếp hàng theo thứ tự'], 3, 'Xếp hàng là lịch sự.'),
    Q('Trong rạp chiếu phim, em nên?', ['Chạy lung tung', 'Nói chuyện to', 'Bật điện thoại to', 'Im lặng để mọi người cùng xem'], 3, 'Im lặng giữ trật tự là lịch sự.'),
    Q('Trên xe buýt, em nên?', ['Giành ghế ngồi', 'Nhường ghế cho người già, em bé, phụ nữ có thai', 'Chạy nhảy trên xe', 'Hò hét cãi nhau'], 1, 'Nhường ghế là lịch sự, có văn hoá.'),
    Q('Trong bệnh viện, em nên?', ['Nói nhỏ, đi nhẹ', 'Chạy nhảy ầm ĩ', 'Cười đùa to', 'Bật nhạc to'], 0, 'Nói nhỏ ở bệnh viện là tôn trọng người bệnh.'),
    Q('Hành vi nào KHÔNG lịch sự?', ['Chào hỏi', 'Cắt ngang lời người khác đang nói', 'Xin lỗi khi va vào ai', 'Cảm ơn người giúp'], 1, 'Cắt ngang lời là bất lịch sự.'),
    Q('Em vô tình va vào bác đi đường, em nên?', ['Xin lỗi bác', 'Đổ lỗi cho bác', 'Bỏ chạy', 'Cãi lại bác'], 0, 'Xin lỗi là lịch sự.'),
  ]),

  M(30, 'An toàn khi đi đường', [
    Q('Khi qua đường, em nên?', ['Đi giữa lòng đường', 'Chạy nhanh qua đường', 'Vừa đi vừa xem điện thoại', 'Nhìn trái nhìn phải, đi trên vạch kẻ'], 3, 'Quan sát kĩ và đi trên vạch là an toàn.'),
    Q('Đèn giao thông màu đỏ, em phải?', ['Chạy thật nhanh qua', 'Đi nếu thấy không có xe', 'Đi theo người khác', 'Dừng lại chờ đèn xanh'], 3, 'Đèn đỏ phải dừng lại.'),
    Q('Khi đi xe đạp/ngồi sau xe máy, em phải?', ['Đội mũ bảo hiểm', 'Đứng trên xe', 'Tay không bám', 'Không cần mũ'], 0, 'Đội mũ bảo hiểm là quy định an toàn.'),
    Q('Hành vi nào KHÔNG an toàn?', ['Sang đường ở vạch kẻ', 'Đi bộ trên vỉa hè', 'Chờ đèn xanh mới đi', 'Chạy nhảy giữa đường'], 3, 'Chạy giữa đường là rất nguy hiểm.'),
    Q('Đường ngập nước to, em nên?', ['Cố lội qua', 'Chạy nhanh qua', 'Tìm đường khác hoặc nhờ người lớn dẫn', 'Bơi qua'], 2, 'Tìm đường khác hoặc nhờ người lớn là an toàn.'),
    Q('Bạn nào đi đường an toàn?', ['Bạn An nắm tay người lớn khi qua đường', 'Bạn Tú chạy bộ giữa lòng đường', 'Bạn Lan vừa đi vừa nghịch điện thoại', 'Bạn Hùng vượt đèn đỏ'], 0, 'Nắm tay người lớn khi qua đường là an toàn.'),
  ]),

  M(31, 'Bảo vệ động vật', [
    Q('Đối với động vật, em nên?', ['Ném đá vào động vật', 'Đánh, hành hạ cho vui', 'Yêu thương, không đánh đập', 'Bắt nhốt vào hộp nhỏ'], 2, 'Động vật cũng biết đau, cần được yêu thương.'),
    Q('Em thấy bạn ném đá chó hoang, em nên?', ['Khuyên bạn ngừng lại', 'Cười cổ vũ', 'Mặc kệ bạn', 'Ném cùng cho vui'], 0, 'Khuyên bạn không hành hạ động vật.'),
    Q('Nuôi mèo, em nên?', ['Đánh nó khi nó kêu', 'Cho ăn, uống, tắm rửa, vuốt ve nó', 'Bỏ đói rồi vứt đi', 'Nhịn đói cho nó'], 1, 'Chăm sóc thú nuôi là yêu thương động vật.'),
    Q('Thấy chim non rơi xuống đất, em nên?', ['Vứt ra đường', 'Đặt nó lên cành cây hoặc nhờ người lớn giúp', 'Đem về nuôi nhốt mãi', 'Đánh chết nó'], 1, 'Giúp chim trở về tổ là biểu hiện yêu động vật.'),
    Q('Hành vi nào KHÔNG bảo vệ động vật?', ['Trêu chọc, hành hạ chó mèo', 'Cho thú nuôi ăn đầy đủ', 'Không săn bắt động vật hoang dã', 'Cứu giúp động vật bị thương'], 0, 'Hành hạ động vật là sai trái.'),
    Q('Vì sao phải bảo vệ động vật?', ['Vì người lớn nói thế', 'Vì sợ bị phạt', 'Vì không có gì làm', 'Vì động vật là bạn của con người, là một phần của tự nhiên'], 3, 'Động vật là một phần thiên nhiên cần bảo vệ.'),
  ]),

  M(32, 'Bảo vệ cây xanh', [
    Q('Cây xanh giúp gì cho con người?', ['Làm bẩn đường', 'Cho oxy, bóng mát và làm đẹp', 'Không có ích gì', 'Chỉ tốn đất'], 1, 'Cây xanh cho ta dưỡng khí và bóng mát.'),
    Q('Em thấy bạn bẻ cành cây, em nên?', ['Bẻ cùng', 'Khuyên bạn không bẻ', 'Mặc kệ bạn', 'Cười cổ vũ'], 1, 'Nhắc bạn không phá cây là bảo vệ cây.'),
    Q('Hành vi nào bảo vệ cây xanh?', ['Khắc tên lên thân cây', 'Hái hoa bừa bãi', 'Tưới nước cho cây', 'Bẻ cành làm đồ chơi'], 2, 'Tưới nước giúp cây phát triển.'),
    Q('Em yêu cây xanh nên?', ['Chặt cây làm củi', 'Trồng thêm cây ở sân trường', 'Đốt lá cây', 'Phá vườn hoa'], 1, 'Trồng cây là yêu cây xanh.'),
    Q('Câu nào ĐÚNG?', ['Cây xanh làm xấu thành phố', 'Cây xanh giúp môi trường trong lành', 'Càng ít cây càng tốt', 'Cây xanh không có tác dụng gì'], 1, 'Cây xanh làm môi trường sạch, đẹp.'),
    Q('Tết trồng cây là phong tục đẹp do ai phát động?', ['Bố mẹ em', 'Cô giáo', 'Bạn em', 'Bác Hồ'], 3, 'Bác Hồ phát động "Tết trồng cây".'),
  ]),

  M(33, 'Yêu hoà bình', [
    Q('Hoà bình nghĩa là?', ['Đánh nhau cho vui', 'Không có chiến tranh, mọi người sống yên vui', 'Cãi nhau ầm ĩ', 'Tranh giành đồ đạc'], 1, 'Hoà bình là không chiến tranh, sống yên vui.'),
    Q('Trong lớp, em yêu hoà bình thể hiện qua?', ['Chia bè kéo phái', 'Hoà thuận, không đánh nhau với bạn', 'Cãi nhau to tiếng', 'Đánh nhau với bạn'], 1, 'Hoà thuận với bạn là yêu hoà bình.'),
    Q('Hai bạn xích mích, em nên?', ['Khuyên giải, hoà giải hai bạn', 'Hùa theo một bên', 'Mách cô giáo để cô phạt cả hai bạn', 'Cổ vũ đánh nhau'], 0, 'Hoà giải là cách giải quyết hoà bình.'),
    Q('Hành vi nào KHÔNG yêu hoà bình?', ['Bắt nạt bạn', 'Nhường nhịn bạn', 'Giúp đỡ bạn', 'Chia sẻ với bạn'], 0, 'Bắt nạt bạn đi ngược với hoà bình.'),
    Q('Khi giận bạn, em nên?', ['Đánh bạn ngay', 'Bình tĩnh nói chuyện với bạn', 'Phá đồ của bạn', 'Nói xấu bạn với cả lớp'], 1, 'Bình tĩnh trao đổi giữ hoà khí.'),
    Q('Trẻ em trên thế giới đều mong?', ['Sống trong hoà bình, được học hành', 'Đói khổ', 'Đánh nhau', 'Có chiến tranh'], 0, 'Mọi trẻ em đều mong được sống yên vui.'),
  ]),

  M(34, 'Em là người có ích', [
    Q('Người có ích là người?', ['Biết giúp đỡ mọi người và làm việc tốt', 'Chỉ lo cho bản thân', 'Lười biếng', 'Hay làm phiền người khác'], 0, 'Người có ích biết giúp đỡ và làm việc tốt.'),
    Q('Việc tốt nào em có thể làm ngay hôm nay?', ['Giúp mẹ rửa chén', 'Chế nhạo bạn', 'Vứt rác bừa bãi', 'Bắt nạt em nhỏ'], 0, 'Giúp mẹ việc nhà là việc tốt.'),
    Q('Em thấy cụ già khó đi qua đường, em nên?', ['Cười cụ già yếu', 'Đi tránh đi nơi khác', 'Dắt cụ qua đường', 'Vượt qua cụ'], 2, 'Dắt cụ qua đường là người có ích.'),
    Q('Bạn nào là người có ích?', ['Bạn An mỗi tuần đọc sách cho em nhỏ trong xóm', 'Bạn Bình hay gây gổ', 'Bạn Tú chỉ chơi game cả ngày', 'Bạn Mai không giúp đỡ ai'], 0, 'Giúp em nhỏ học là việc có ích.'),
    Q('Làm việc có ích đem lại?', ['Phiền phức', 'Mất thời gian vô bổ', 'Niềm vui cho bản thân và người khác', 'Sự mệt mỏi vô ích'], 2, 'Giúp người làm cả mình lẫn người vui.'),
    Q('Câu nào ĐÚNG?', ['Trẻ em nhỏ cũng có thể làm việc có ích', 'Việc có ích là việc lớn lao', 'Trẻ em không cần làm gì', 'Chỉ người lớn mới giúp được người khác'], 0, 'Trẻ nhỏ cũng có thể làm việc tốt hằng ngày.'),
  ]),

  M(35, 'Tự lập là sức mạnh', [
    Q('Tự lập là?', ['Việc gì cũng nhờ người khác', 'Đợi bố mẹ làm hộ', 'Tự làm những việc trong khả năng của mình', 'Không chịu làm gì'], 2, 'Tự lập là tự làm việc của mình.'),
    Q('Em tự làm được việc nào?', ['Không tự làm gì', 'Khóc đòi bố mẹ giúp', 'Tự đánh răng, mặc quần áo, soạn sách vở', 'Đợi mẹ làm hết'], 2, 'Việc cá nhân em phải tự làm.'),
    Q('Bạn nào tự lập?', ['Bạn Lan đòi mẹ buộc tóc cho mình', 'Bạn Hùng đợi mẹ soạn sách', 'Bạn Tú đợi mẹ gọi mãi mới dậy', 'Bạn An tự dậy đúng giờ đi học'], 3, 'Tự dậy đúng giờ là tự lập.'),
    Q('Em chưa biết làm việc gì đó, em nên?', ['Bỏ luôn không học', 'Học hỏi để tự làm được', 'Khóc đòi mẹ làm', 'Đổ tại không ai dạy'], 1, 'Học để tự làm là phát triển tính tự lập.'),
    Q('Hành vi nào KHÔNG tự lập?', ['Đợi mẹ làm hết mọi việc', 'Tự xếp dép gọn gàng', 'Tự gấp chăn màn buổi sáng', 'Tự chuẩn bị cặp sách'], 0, 'Việc gì cũng đợi mẹ là không tự lập.'),
    Q('Tự lập đem lại?', ['Sự cô đơn', 'Phiền phức', 'Sức mạnh và sự tự tin cho bản thân', 'Sự mệt mỏi vô ích'], 2, 'Tự lập giúp em vững vàng và tự tin.'),
  ]),

  M(36, 'Tổng kết — Chân dung em ngoan', [
    Q('Em ngoan là người?', ['Cãi lại người lớn', 'Yêu thương gia đình, vâng lời ông bà cha mẹ', 'Bắt nạt em nhỏ', 'Không quan tâm gia đình'], 1, 'Em ngoan phải yêu thương và vâng lời gia đình.'),
    Q('Ở trường, em ngoan là?', ['Trốn học', 'Hỗn láo với cô', 'Đánh bạn', 'Lễ phép thầy cô, đoàn kết bạn bè, học chăm chỉ'], 3, 'Ở trường, em ngoan thể hiện qua thái độ và học tập.'),
    Q('Với cộng đồng, em ngoan là?', ['Cãi nhau với mọi người', 'Giữ vệ sinh nơi công cộng, lịch sự với mọi người', 'Vứt rác bừa bãi', 'Chen ngang khi xếp hàng'], 1, 'Có ý thức cộng đồng là em ngoan.'),
    Q('Em ngoan biết tự lập, tức là?', ['Bỏ việc giữa chừng', 'Mọi việc đều nhờ bố mẹ', 'Khóc đòi bố mẹ làm hộ', 'Tự làm việc của mình, không ỷ lại'], 3, 'Tự lập là phẩm chất quan trọng.'),
    Q('Em ngoan biết trung thực, tức là?', ['Giấu của rơi nhặt được', 'Không nói dối, không gian lận, không lấy của người', 'Cóp bài bạn', 'Nói dối khi mắc lỗi'], 1, 'Trung thực là không gian dối.'),
    Q('Em ngoan biết nhân ái, tức là?', ['Ích kỉ không chia sẻ', 'Khinh thường người nghèo', 'Trêu chọc bạn khuyết tật', 'Yêu thương, giúp đỡ mọi người, nhất là người khó khăn'], 3, 'Nhân ái là yêu thương, giúp đỡ.'),
    Q('Em ngoan biết yêu nước, tức là?', ['Tự hào về Tổ quốc, kính trọng cờ Tổ quốc, biết ơn anh hùng liệt sĩ', 'Chế giễu đất nước mình', 'Phá hoại di tích', 'Quên ngày lễ lớn'], 0, 'Yêu nước thể hiện qua thái độ và hành động.'),
    Q('Em ngoan biết chăm chỉ, tức là?', ['Học tập đều đặn, làm việc nhà giúp bố mẹ', 'Chơi cả ngày', 'Trốn việc nhà', 'Lười học'], 0, 'Chăm chỉ là phẩm chất nền tảng.'),
    Q('Em ngoan biết trách nhiệm, tức là?', ['Đổ lỗi cho người khác', 'Bỏ dở việc giữa chừng', 'Nhận lỗi và sửa lỗi khi sai, làm xong việc được giao', 'Trốn tránh trách nhiệm'], 2, 'Trách nhiệm là dám nhận và làm tròn việc của mình.'),
    Q('Chân dung em ngoan bao gồm?', ['Chỉ cần ngoan ở nhà', 'Chỉ cần lễ phép với cô', 'Yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm', 'Chỉ cần học giỏi là đủ'], 2, 'Đó là 5 phẩm chất chủ yếu theo GDPT 2018.'),
  ], { difficulty: 3 }),
];

export const P2DD_SCENARIOS = indexBy(P2DD_WEEKS);
