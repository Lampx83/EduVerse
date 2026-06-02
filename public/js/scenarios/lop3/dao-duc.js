// ============================================================
// Lớp 3 · ĐẠO ĐỨC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Đạo đức Lớp 3.
// ID prefix: "P3DD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3DD', 'dao-duc', n, title, qs, opts);

export const P3DD_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Em yêu Tổ quốc Việt Nam', [
    Q('Tổ quốc của em có tên đầy đủ là gì?', ['Cộng hoà xã hội chủ nghĩa Việt Nam', 'Việt Nam Dân chủ Cộng hoà', 'Đông Dương', 'Đại Việt'], 0, 'Tên đầy đủ hiện nay là Cộng hoà xã hội chủ nghĩa Việt Nam.'),
    Q('Em yêu Tổ quốc bằng cách nào phù hợp với học sinh lớp 3?', ['Chăm học, ngoan ngoãn, giữ gìn cảnh quan', 'Đợi lớn mới yêu nước', 'Chỉ yêu khi đi thi', 'Chỉ cần thuộc lòng bài Quốc ca'], 0, 'Yêu nước bắt đầu từ những việc nhỏ hằng ngày.'),
    Q('Việt Nam giáp với những nước nào trên đất liền?', ['Trung Quốc, Lào, Campuchia', 'Thái Lan, Malaysia', 'Nhật Bản, Hàn Quốc', 'Pháp, Mỹ'], 0, 'Việt Nam có chung biên giới đất liền với 3 nước.'),
    Q('Bạn nào thể hiện tình yêu Tổ quốc?', ['Bạn An chăm chỉ học và giữ gìn đường phố sạch', 'Bạn Tú vẽ bậy lên di tích', 'Bạn Lan vứt rác bừa bãi', 'Bạn Hùng chê đất nước mình'], 0, 'Hành vi giữ gìn cảnh quan thể hiện tình yêu nước.'),
    Q('Câu nào nói đúng về Tổ quốc?', ['Tổ quốc là quê hương, đất nước nơi mình sinh ra', 'Tổ quốc là tên một bài hát', 'Tổ quốc chỉ là một địa danh', 'Tổ quốc không quan trọng'], 0, 'Tổ quốc là khái niệm thiêng liêng về đất nước.'),
  ]),

  M(2, 'Lá cờ Việt Nam', [
    Q('Quốc kì Việt Nam có nền màu gì?', ['Đỏ', 'Vàng', 'Xanh', 'Trắng'], 0, 'Quốc kì nền đỏ, sao vàng 5 cánh ở giữa.'),
    Q('Ngôi sao trên Quốc kì có mấy cánh?', ['3 cánh', '5 cánh', '6 cánh', '7 cánh'], 1, 'Sao vàng 5 cánh tượng trưng cho khối đại đoàn kết dân tộc.'),
    Q('Khi nhìn thấy Quốc kì được kéo lên, em nên?', ['Đứng nghiêm trang, mắt nhìn về phía cờ', 'Cười đùa, nói chuyện', 'Quay đi nơi khác', 'Vừa nhìn vừa nghịch điện thoại'], 0, 'Đứng nghiêm khi chào cờ là tôn trọng Tổ quốc.'),
    Q('Hành vi nào KHÔNG tôn trọng Quốc kì?', ['Vẽ bậy hoặc giẫm lên hình Quốc kì', 'Treo cờ ngày lễ', 'Hát Quốc ca trang nghiêm', 'Đứng nghiêm khi chào cờ'], 0, 'Vẽ bậy hoặc giẫm đạp Quốc kì là vô lễ với Tổ quốc.'),
    Q('Ngày nào dưới đây nhà nhà thường treo Quốc kì?', ['Quốc khánh 2/9', 'Sinh nhật của em', 'Ngày cuối tuần bình thường', 'Ngày em đi học'], 0, '2/9 là Quốc khánh — ngày treo Quốc kì trang trọng.'),
  ]),

  M(3, 'Kính trọng thầy cô giáo', [
    Q('Khi gặp thầy cô ở cổng trường, em nên?', ['Cúi đầu, lễ phép chào thầy cô', 'Đi thẳng, không chào', 'Cười lớn rồi chạy', 'Giả vờ không thấy'], 0, 'Chào thầy cô là biểu hiện kính trọng cơ bản.'),
    Q('Khi thầy cô đang giảng bài, em nên?', ['Lắng nghe và ghi chép', 'Nói chuyện riêng', 'Lấy đồ chơi ra chơi', 'Nằm gục xuống bàn'], 0, 'Lắng nghe là tôn trọng thầy cô và bài giảng.'),
    Q('Lời nào lễ phép với cô giáo?', ['"Thưa cô, cho em hỏi ạ"', '"Ê cô"', '"Cô ơi, ra đây"', '"Cô làm hộ em đi"'], 0, '"Thưa cô… ạ" là cách xưng hô lễ phép.'),
    Q('Em làm sai và bị cô nhắc, em nên?', ['Lắng nghe và xin lỗi cô', 'Cãi lại cô', 'Bỏ ra ngoài lớp', 'Khóc to cho cô nhường'], 0, 'Nhận lỗi và sửa sai là kính trọng thầy cô.'),
    Q('Ngày Nhà giáo Việt Nam là ngày nào?', ['20/11', '8/3', '1/6', '2/9'], 0, '20/11 là ngày tri ân thầy cô giáo.'),
  ]),

  M(4, 'Em tự lập', [
    Q('Tự lập là gì?', ['Tự làm những việc trong khả năng của mình', 'Không cần ai giúp dù khó đến mấy', 'Tự ý làm trái lời cha mẹ', 'Sống một mình'], 0, 'Tự lập là tự làm việc phù hợp với lứa tuổi.'),
    Q('Việc nào em lớp 3 có thể TỰ LÀM?', ['Tự đánh răng, rửa mặt, mặc quần áo', 'Tự lái xe máy đi học', 'Tự đi chợ xa', 'Tự nấu bữa cơm cho cả nhà'], 0, 'Việc tự phục vụ là việc lớp 3 nên tự làm.'),
    Q('Bạn nào tự lập?', ['Bạn An tự soạn cặp sách trước khi đi học', 'Bạn Tú đợi mẹ mặc áo cho', 'Bạn Lan đòi bố xúc cơm', 'Bạn Hùng nhờ bà buộc dây giày'], 0, 'Tự soạn cặp là biểu hiện tự lập.'),
    Q('Vì sao em cần tự lập?', ['Giúp em trưởng thành và tự tin hơn', 'Để bố mẹ không thương em nữa', 'Để khoe với bạn bè', 'Vì sợ bị mắng'], 0, 'Tự lập giúp em trưởng thành và tự tin.'),
    Q('Hành vi nào KHÔNG tự lập?', ['Mọi việc đều dựa dẫm vào người khác', 'Tự dọn phòng', 'Tự làm bài tập', 'Tự gấp chăn màn'], 0, 'Dựa dẫm là trái ngược với tự lập.'),
  ]),

  M(5, 'Ham học hỏi', [
    Q('Ham học hỏi là gì?', ['Luôn muốn biết thêm, tìm hiểu cái mới', 'Học vì bị ép', 'Học chỉ để được điểm cao', 'Không thích đọc sách'], 0, 'Ham học là chủ động tìm hiểu kiến thức.'),
    Q('Khi không hiểu một điều gì, em nên?', ['Hỏi thầy cô, bố mẹ hoặc tra cứu sách báo', 'Bỏ qua không quan tâm', 'Nói dối là đã hiểu', 'Đổ lỗi cho người khác'], 0, 'Hỏi để hiểu là biểu hiện ham học hỏi.'),
    Q('Bạn nào ham học hỏi?', ['Bạn Lan đọc thêm sách khoa học sau giờ học', 'Bạn Tú chỉ chơi game', 'Bạn Bình ngủ trong giờ học', 'Bạn Mai chép bài bạn'], 0, 'Đọc thêm sách là biểu hiện ham học.'),
    Q('Tục ngữ nào nói về việc ham học?', ['Học, học nữa, học mãi', 'Có công mài sắt có ngày nên kim', 'Cả hai câu trên', 'Không có câu nào'], 2, 'Cả hai câu đều nói về kiên trì và ham học.'),
    Q('Em nên đặt câu hỏi khi nào?', ['Khi có điều chưa hiểu hoặc tò mò', 'Chỉ khi cô yêu cầu', 'Không bao giờ hỏi', 'Hỏi mọi lúc kể cả khi cô đang giảng'], 0, 'Đặt câu hỏi đúng lúc là ham học.'),
  ]),

  M(6, 'Thật thà, trung thực', [
    Q('Trung thực là gì?', ['Nói đúng sự thật, không gian dối', 'Nói dối khi cần', 'Giấu lỗi của mình', 'Đổ lỗi cho người khác'], 0, 'Trung thực là sống ngay thẳng, không gian dối.'),
    Q('Khi làm vỡ bình hoa, em nên?', ['Thừa nhận và xin lỗi mẹ', 'Đổ lỗi cho em bé', 'Giấu mảnh vỡ đi', 'Nói dối là mèo làm'], 0, 'Thừa nhận lỗi là trung thực.'),
    Q('Em nhặt được tiền ở sân trường, em nên?', ['Đem nộp cô để trả lại người mất', 'Bỏ túi giữ làm của riêng', 'Đi mua kẹo cho cả nhóm', 'Giấu vào ngăn bàn'], 0, 'Trả lại của rơi là thật thà.'),
    Q('Hành vi nào KHÔNG trung thực?', ['Cóp bài bạn khi kiểm tra', 'Tự làm bài', 'Nhận lỗi khi sai', 'Trả lại đồ nhặt được'], 0, 'Cóp bài là gian dối.'),
    Q('Vì sao em cần trung thực?', ['Được mọi người tin yêu, quý mến', 'Để được khen', 'Để không bị phạt', 'Để bạn bè sợ'], 0, 'Trung thực giúp xây dựng lòng tin.'),
  ]),

  M(7, 'Lễ phép với người lớn', [
    Q('Khi gặp ông bà, em nên?', ['Khoanh tay lễ phép chào ông bà', 'Đi thẳng vào nhà', 'Nói "Ê ông"', 'Giả vờ không thấy'], 0, 'Khoanh tay chào là lễ phép với người lớn.'),
    Q('Khách đến nhà chơi, em làm gì?', ['Chào khách và mời nước', 'Trốn vào phòng', 'Quát "Cô đi đi"', 'Đứng nhìn không nói gì'], 0, 'Chào và mời nước khách là hiếu khách.'),
    Q('Lời chào nào lễ phép?', ['"Cháu chào bác ạ"', '"Hi bác"', '"Ê bác"', '"Bác làm gì đó"'], 0, 'Thêm "ạ" và xưng "cháu" là lễ phép.'),
    Q('Nhận quà từ người lớn, em nên?', ['Nhận bằng hai tay và cảm ơn', 'Giật lấy ngay', 'Chê quà xấu', 'Vứt quà đi'], 0, 'Nhận bằng hai tay là phép lịch sự.'),
    Q('Đang ngồi trên xe buýt, người già lên xe và hết chỗ. Em nên?', ['Nhường chỗ cho người già', 'Giả vờ ngủ', 'Quay đi nơi khác', 'Mở rộng chân lấn chỗ'], 0, 'Nhường chỗ cho người già là biểu hiện lễ phép, văn minh.'),
  ]),

  M(8, 'Đoàn kết với bạn bè', [
    Q('Đoàn kết với bạn nghĩa là?', ['Cùng nhau giúp đỡ, không gây gổ', 'Đánh nhau cho vui', 'Chia phe cãi nhau', 'Tẩy chay bạn không hợp ý'], 0, 'Đoàn kết là yêu thương và cùng nhau.'),
    Q('Hai bạn cãi nhau vì giành chỗ, em nên?', ['Khuyên hai bạn nhường nhau', 'Hùa theo một bên', 'Cổ vũ cãi to hơn', 'Mặc kệ'], 0, 'Khuyên giải để hai bạn hoà thuận là đúng.'),
    Q('Trong trò chơi tập thể, em nên?', ['Hợp tác với cả đội', 'Chỉ chơi một mình', 'Cãi nhau với đồng đội', 'Bỏ cuộc giữa chừng'], 0, 'Hợp tác là biểu hiện đoàn kết.'),
    Q('Hành vi nào KHÔNG đoàn kết?', ['Cãi vã, đánh nhau với bạn', 'Cùng bạn dọn lớp', 'Cùng làm bài nhóm', 'Chơi cùng bạn mới'], 0, 'Đánh nhau là phá đoàn kết.'),
    Q('Khi cả nhóm không đồng ý ý của em, em nên?', ['Lắng nghe ý kiến chung và cùng làm', 'Tức giận bỏ đi', 'Phá phách cho nhóm thất bại', 'Tách ra làm một mình'], 0, 'Lắng nghe ý kiến chung là đoàn kết.'),
  ]),

  M(9, 'Tôn trọng bạn khác giới', [
    Q('Bạn khác giới là?', ['Bạn nam và bạn nữ với nhau', 'Bạn ở lớp khác', 'Bạn người nước ngoài', 'Bạn lớn tuổi hơn'], 0, 'Bạn khác giới là bạn nam với bạn nữ.'),
    Q('Em nên đối xử với bạn khác giới thế nào?', ['Tôn trọng, không trêu chọc, kì thị', 'Trêu chọc cho vui', 'Tẩy chay bạn khác giới', 'Bắt nạt bạn nữ vì yếu hơn'], 0, 'Tôn trọng bạn khác giới là văn minh.'),
    Q('Bạn nam trêu bạn nữ là "đồ con gái yếu đuối", em nên?', ['Khuyên bạn dừng lại, ai cũng đáng tôn trọng', 'Cười hùa theo', 'Trêu cùng', 'Mặc kệ'], 0, 'Mọi người đều bình đẳng, không kì thị giới tính.'),
    Q('Trong lớp, học sinh nam và nữ nên?', ['Cùng học, cùng chơi, giúp đỡ nhau', 'Chia phe nam – nữ chống nhau', 'Tẩy chay nhau', 'Không bao giờ nói chuyện'], 0, 'Nam nữ bình đẳng, cùng giúp đỡ nhau học tập.'),
    Q('Hành vi nào KHÔNG tôn trọng bạn khác giới?', ['Lôi tóc, kéo váy bạn nữ', 'Cùng bạn nữ làm bài nhóm', 'Giúp bạn nữ xách đồ nặng', 'Mời bạn nữ tham gia trò chơi'], 0, 'Hành vi quấy phá là không tôn trọng.'),
  ]),

  M(10, 'An toàn khi sử dụng mạng (1)', [
    Q('Em nên đặt mật khẩu thế nào?', ['Khó đoán và không cho người lạ biết', 'Đặt là 123456', 'Dùng ngày sinh ai cũng biết', 'Khoe mật khẩu trên mạng'], 0, 'Mật khẩu phải khó đoán và giữ bí mật.'),
    Q('Người lạ trên mạng xin số điện thoại, địa chỉ nhà em, em nên?', ['Từ chối và báo bố mẹ', 'Cho ngay vì người ta hỏi lịch sự', 'Cho nửa số điện thoại', 'Cho địa chỉ trường học'], 0, 'Không chia sẻ thông tin cá nhân với người lạ.'),
    Q('Em thấy nội dung sợ hãi, bạo lực trên mạng, em nên?', ['Tắt đi và báo bố mẹ', 'Xem tiếp cho biết', 'Chia sẻ cho bạn cùng xem', 'Bắt chước làm theo'], 0, 'Tắt ngay và báo người lớn là an toàn.'),
    Q('Người lạ rủ em gặp ngoài đời, em nên?', ['Từ chối tuyệt đối và kể cho bố mẹ', 'Đi gặp vì người ta nói tốt', 'Đi gặp một mình cho bạo dạn', 'Hẹn ở nơi vắng vẻ'], 0, 'Không bao giờ gặp người lạ quen qua mạng một mình.'),
    Q('Em nên dùng internet để?', ['Học bài, xem phim hoạt hình phù hợp lứa tuổi', 'Xem phim bạo lực', 'Tải game lậu', 'Bình luận xấu về người khác'], 0, 'Dùng internet đúng mục đích, đúng lứa tuổi.'),
  ]),

  M(11, 'Biết ơn người lao động (1)', [
    Q('Người lao động bao gồm?', ['Bác sĩ, nông dân, công nhân, lao công, giáo viên…', 'Chỉ có người giàu', 'Chỉ có nhân viên văn phòng', 'Chỉ có người nổi tiếng'], 0, 'Tất cả người làm việc lương thiện đều là người lao động.'),
    Q('Bác lao công đang quét sân, em nên?', ['Chào bác và cảm ơn bác', 'Vứt rác chỗ bác vừa quét', 'Cười chê công việc của bác', 'Không quan tâm'], 0, 'Chào và cảm ơn là biết ơn người lao động.'),
    Q('Bác nông dân làm ra hạt gạo, em nên?', ['Quý hạt gạo, không bỏ phí cơm', 'Đổ cơm thừa', 'Coi thường nghề nông', 'Nói "nghề ấy thấp kém"'], 0, 'Quý hạt gạo là biết ơn nông dân.'),
    Q('Hành vi nào KHÔNG biết ơn người lao động?', ['Chế nhạo nghề nghiệp người khác', 'Cảm ơn cô bán hàng', 'Chào bác bảo vệ', 'Giúp đỡ cô lao công'], 0, 'Chế nhạo nghề là thiếu tôn trọng.'),
    Q('Bố mẹ đi làm về mệt, em nên?', ['Hỏi thăm và mời nước bố mẹ', 'Đòi đi chơi ngay', 'Bật nhạc to', 'Mặc kệ bố mẹ'], 0, 'Quan tâm bố mẹ là biết ơn lao động của bố mẹ.'),
  ]),

  M(12, 'Biết ơn người lao động (2)', [
    Q('Câu nào ĐÚNG?', ['Mọi nghề lao động chân chính đều đáng quý', 'Chỉ nghề lương cao mới đáng quý', 'Nghề nông dân thấp kém', 'Nghề lao công không quan trọng'], 0, 'Mọi nghề lương thiện đều đáng quý.'),
    Q('Bạn nào biết ơn người lao động?', ['Bạn An ăn hết suất cơm, không để phí', 'Bạn Tú vứt cơm thừa', 'Bạn Lan chê cơm cô cấp dưỡng nấu', 'Bạn Hùng cười nhạo bác bảo vệ'], 0, 'Ăn hết phần cơm là tôn trọng người lao động.'),
    Q('Em đến gặp bác sĩ khám bệnh, em nên?', ['Lễ phép chào và cảm ơn bác sĩ', 'Quát "Khám nhanh lên"', 'Cười cợt với bác sĩ', 'Im lặng không chào'], 0, 'Lễ phép với bác sĩ là biết ơn.'),
    Q('Cô lao công lau hành lang ướt, em nên?', ['Đi nhẹ và tránh vết lau', 'Chạy nhảy làm bẩn lại', 'Cười và bước qua lung tung', 'Phàn nàn vì sàn ướt'], 0, 'Đi nhẹ và tránh là tôn trọng công sức của cô.'),
    Q('Khi nhận đồ ăn ở căng tin, em nên?', ['Nói "Cháu cảm ơn ạ"', 'Im lặng cầm đi', 'Giật lấy đồ', 'Chê đồ ăn dở'], 0, 'Cảm ơn là biểu hiện văn minh.'),
  ]),

  M(13, 'Giúp đỡ người yếu thế (1)', [
    Q('Người yếu thế gồm những ai?', ['Người già, trẻ em, người khuyết tật, người ốm…', 'Chỉ người nghèo', 'Chỉ trẻ em', 'Không có ai cả'], 0, 'Người yếu thế là những người cần được giúp đỡ.'),
    Q('Thấy cụ già qua đường khó khăn, em nên?', ['Dắt cụ qua đường an toàn', 'Đi qua nhanh', 'Cười nhạo cụ chậm', 'Đẩy cụ ra cho mình đi trước'], 0, 'Giúp người già qua đường là hành vi đẹp.'),
    Q('Bạn khuyết tật trong lớp, em nên?', ['Quan tâm, chơi cùng và giúp đỡ bạn', 'Tránh xa bạn', 'Trêu chọc bạn', 'Bắt chước dáng đi của bạn'], 0, 'Bạn khuyết tật cần yêu thương, không bị kì thị.'),
    Q('Em bé bị lạc ở siêu thị, em nên?', ['Báo cho nhân viên hoặc bảo vệ siêu thị', 'Mặc kệ vì không phải em mình', 'Dắt em đi chơi', 'Trêu cho em sợ'], 0, 'Báo nhân viên là cách giúp an toàn.'),
    Q('Hành vi nào KHÔNG giúp đỡ người yếu thế?', ['Cười nhạo người khuyết tật', 'Nhường chỗ cho người già', 'An ủi em bé khóc', 'Dắt cụ qua đường'], 0, 'Cười nhạo là hành vi sai trái.'),
  ]),

  M(14, 'Giúp đỡ người yếu thế (2)', [
    Q('Mùa đông, bạn không có áo ấm, em nên?', ['Báo cô giáo và quyên góp giúp bạn', 'Trêu bạn rét', 'Cười chê bạn', 'Khoe áo ấm của mình'], 0, 'Báo cô và quyên góp là cách giúp thiết thực.'),
    Q('Bạn nhà nghèo không có sách mới, em nên?', ['Cho bạn mượn sách hoặc tặng sách cũ còn tốt', 'Khinh thường bạn', 'Khoe sách mới', 'Không chơi với bạn'], 0, 'Chia sẻ giúp bạn vượt qua khó khăn.'),
    Q('Gặp người ăn xin trên đường, em nên?', ['Lễ phép, nếu có thể giúp đỡ một chút', 'Chế nhạo họ', 'Xua đuổi họ', 'Quẳng đồ ăn xuống đất'], 0, 'Đối xử lễ phép với mọi người, dù họ là ai.'),
    Q('Bạn nào biết giúp đỡ người yếu thế?', ['Bạn Lan dẫn bạn khiếm thị đi vệ sinh', 'Bạn Tú đẩy bạn khuyết tật', 'Bạn Hùng cười người khác bị tật', 'Bạn Mai lấy đồ của bạn ốm'], 0, 'Dẫn bạn khiếm thị là giúp đỡ thiết thực.'),
    Q('Vì sao em nên giúp người yếu thế?', ['Vì họ cần và em có khả năng giúp', 'Để được khen', 'Để khoe với bạn', 'Vì bố mẹ bắt'], 0, 'Giúp đỡ vì lòng nhân ái, không vì khen ngợi.'),
  ]),

  M(15, 'Bảo vệ môi trường (1)', [
    Q('Bảo vệ môi trường là?', ['Giữ cho không khí, nước, đất luôn sạch sẽ', 'Vứt rác bừa bãi', 'Đập phá cây cối', 'Không quan tâm'], 0, 'Bảo vệ môi trường là giữ thiên nhiên sạch đẹp.'),
    Q('Em nên vứt rác ở đâu?', ['Vào thùng rác', 'Xuống đường', 'Xuống ao hồ', 'Cửa nhà hàng xóm'], 0, 'Vứt rác đúng nơi là bảo vệ môi trường.'),
    Q('Cây xanh có vai trò gì?', ['Làm sạch không khí, cho bóng mát', 'Cản trở giao thông', 'Làm bẩn đường', 'Vô ích'], 0, 'Cây xanh giúp môi trường trong lành.'),
    Q('Em thấy bạn vứt vỏ chai xuống đường, em nên?', ['Khuyên bạn nhặt lên bỏ thùng rác', 'Hùa theo vứt cùng', 'Mặc kệ', 'Cười cổ vũ'], 0, 'Khuyên bạn làm điều đúng là bảo vệ môi trường.'),
    Q('Hành vi nào ĐÚNG?', ['Phân loại rác trước khi vứt', 'Đổ rác xuống cống', 'Đốt rác bừa bãi', 'Vứt pin cũ vào sông'], 0, 'Phân loại rác là cách bảo vệ môi trường hiện đại.'),
  ]),

  M(16, 'Bảo vệ môi trường (2)', [
    Q('Em nên làm gì để tiết kiệm nước?', ['Khoá vòi khi đánh răng, rửa tay xong', 'Để nước chảy mãi cho mát', 'Tắm thật lâu', 'Đùa nghịch với vòi nước'], 0, 'Khoá vòi khi không dùng là tiết kiệm nước.'),
    Q('Em nên làm gì để tiết kiệm điện?', ['Tắt đèn, quạt khi ra khỏi phòng', 'Bật đèn cả đêm', 'Mở tủ lạnh thật lâu', 'Bật ti vi cả ngày không xem'], 0, 'Tắt đèn khi không dùng là tiết kiệm điện.'),
    Q('Túi nilon có hại gì?', ['Khó phân huỷ, gây ô nhiễm đất và biển', 'Rất tốt cho môi trường', 'Là thức ăn của cá', 'Phân huỷ trong 1 ngày'], 0, 'Túi nilon mất hàng trăm năm để phân huỷ.'),
    Q('Bạn nào bảo vệ môi trường tốt?', ['Bạn Lan dùng bình nước thay vì chai nhựa', 'Bạn Tú vứt rác xuống sông', 'Bạn Hùng chặt cây non', 'Bạn Mai đốt rác trong sân trường'], 0, 'Dùng bình tái sử dụng là giảm rác thải nhựa.'),
    Q('Khi đi dã ngoại, em nên?', ['Mang rác về vứt vào thùng rác', 'Để rác ngay tại chỗ', 'Chôn rác xuống đất', 'Đổ rác xuống suối'], 0, 'Mang rác về vứt đúng chỗ là bảo vệ thiên nhiên.'),
  ]),

  M(17, 'Em là người Việt Nam', [
    Q('Em tự hào là người Việt Nam vì?', ['Việt Nam có lịch sử và văn hoá lâu đời', 'Việt Nam không có gì đặc biệt', 'Vì người khác bảo thế', 'Vì không có nước nào khác'], 0, 'Việt Nam có truyền thống văn hoá đáng tự hào.'),
    Q('Tiếng nói của người Việt Nam là?', ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Trung', 'Tiếng Pháp'], 0, 'Tiếng Việt là quốc ngữ của Việt Nam.'),
    Q('Em nên giữ gìn tiếng Việt bằng cách?', ['Nói và viết tiếng Việt đúng', 'Chỉ nói tiếng nước ngoài', 'Pha trộn tiếng linh tinh để khoe', 'Viết tắt khó hiểu mọi lúc'], 0, 'Giữ gìn sự trong sáng của tiếng Việt là yêu nước.'),
    Q('Trang phục truyền thống của phụ nữ Việt Nam là?', ['Áo dài', 'Áo kimono', 'Áo hanbok', 'Áo sườn xám'], 0, 'Áo dài là trang phục truyền thống của Việt Nam.'),
    Q('Món ăn truyền thống nổi tiếng của Việt Nam?', ['Phở, bún chả, bánh chưng…', 'Sushi', 'Pizza', 'Hamburger'], 0, 'Việt Nam có nhiều món ăn truyền thống nổi tiếng thế giới.'),
  ]),

  M(18, 'Sơ kết HK1 — Tự đánh giá phẩm chất', [
    Q('Trong HK1, em đã chăm chỉ. Biểu hiện nào em đã làm tốt?', ['Làm bài đầy đủ mỗi ngày', 'Trốn học', 'Chép bài bạn', 'Quên sách vở'], 0, 'Làm bài đầy đủ là chăm chỉ.'),
    Q('Khi gặp bạn khuyết tật, em đã?', ['Giúp đỡ bạn khi cần', 'Trêu chọc bạn', 'Tránh xa bạn', 'Bắt chước dáng đi của bạn'], 0, 'Giúp bạn khuyết tật là phẩm chất tốt.'),
    Q('Mỗi sáng đi học, em luôn?', ['Đến đúng giờ', 'Đến trễ', 'Ở nhà ngủ', 'Đi muộn 15 phút'], 0, 'Đúng giờ là phẩm chất tốt.'),
    Q('Khi mẹ ốm, em đã?', ['Quan tâm và chăm sóc mẹ', 'Đi chơi với bạn', 'Đòi mẹ nấu cơm', 'Mặc kệ mẹ'], 0, 'Chăm mẹ ốm là yêu mẹ.'),
    Q('Tiền lì xì em đã?', ['Tiết kiệm bỏ heo', 'Tiêu hết mua đồ chơi', 'Vứt đi', 'Cho hết bạn'], 0, 'Tiết kiệm tiền lì xì là quý tiền.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Văn hoá Tết — Chúc Tết, lì xì', [
    Q('Tết đến, em chúc Tết ông bà thế nào?', ['"Chúc ông bà mạnh khoẻ, sống lâu trăm tuổi"', '"Ông bà cho con tiền"', '"Tết có gì mới không?"', 'Không chúc gì cả'], 0, 'Chúc sức khoẻ ông bà là chúc Tết lễ phép.'),
    Q('Nhận lì xì, em nên?', ['Cảm ơn và cất đi', 'Mở phong bao ngay xem được bao nhiêu', 'Chê tiền ít', 'Đòi thêm'], 0, 'Cảm ơn và cất đi là phép lịch sự.'),
    Q('Hành vi nào KHÔNG đẹp ngày Tết?', ['So bì tiền lì xì ít/nhiều', 'Cảm ơn người lì xì', 'Chúc Tết ông bà', 'Mặc đẹp đi chúc Tết'], 0, 'So bì tiền lì xì là không lịch sự.'),
    Q('Tiền lì xì nên dùng để?', ['Tiết kiệm hoặc mua đồ dùng học tập', 'Mua đồ chơi vô bổ', 'Khoe khoang với bạn', 'Đánh bạc cùng anh chị lớn'], 0, 'Tiết kiệm là dùng tiền có ích.'),
    Q('Phong tục Tết đẹp gồm?', ['Chúc Tết ông bà cha mẹ, mừng tuổi trẻ em', 'Đập phá đồ đạc', 'Cãi nhau với họ hàng', 'Bỏ nhà đi chơi cả Tết'], 0, 'Chúc Tết, mừng tuổi là nét đẹp văn hoá Việt.'),
  ]),

  M(20, 'Yêu thương gia đình', [
    Q('Gia đình là nơi?', ['Yêu thương, đùm bọc lẫn nhau', 'Chỉ để ngủ', 'Để mọi người cãi nhau', 'Không quan trọng'], 0, 'Gia đình là tổ ấm yêu thương.'),
    Q('Em thể hiện tình yêu gia đình bằng cách?', ['Vâng lời, giúp đỡ ông bà cha mẹ', 'Chỉ đòi hỏi quà', 'Hỗn láo với người lớn', 'Cãi vã với anh chị'], 0, 'Yêu gia đình là vâng lời và giúp đỡ.'),
    Q('Mẹ ốm, em nên làm gì?', ['Lấy nước, hỏi thăm và giúp mẹ việc nhà', 'Đi chơi với bạn', 'Bật ti vi to', 'Đòi mẹ nấu món em thích'], 0, 'Quan tâm mẹ ốm là yêu mẹ.'),
    Q('Sinh nhật bà, em làm gì?', ['Chúc mừng bà và làm thiệp tặng bà', 'Không nhớ', 'Đòi quà sinh nhật', 'Đi chơi không về'], 0, 'Nhớ sinh nhật bà là yêu bà.'),
    Q('Cuối tuần, gia đình em nên?', ['Cùng ăn cơm, trò chuyện, đi chơi cùng nhau', 'Mỗi người một phòng', 'Bố mẹ làm việc, con chơi điện thoại', 'Không quan tâm đến nhau'], 0, 'Quây quần là biểu hiện gia đình ấm áp.'),
  ]),

  M(21, 'Quan tâm hàng xóm láng giềng', [
    Q('Hàng xóm là?', ['Những người sống gần nhà em', 'Người sống ở thành phố khác', 'Họ hàng ruột thịt', 'Người không quen'], 0, 'Hàng xóm là láng giềng gần nhà.'),
    Q('Em nên đối xử với hàng xóm thế nào?', ['Lễ phép, thân thiện và giúp đỡ khi cần', 'Tránh xa, không nói chuyện', 'Cãi nhau với hàng xóm', 'Phá phách nhà hàng xóm'], 0, '"Bán anh em xa, mua láng giềng gần".'),
    Q('Gặp bác hàng xóm, em nên?', ['Lễ phép chào bác', 'Đi thẳng không chào', 'Trêu chọc bác', 'Giả vờ không thấy'], 0, 'Chào hỏi hàng xóm là lễ phép.'),
    Q('Bà hàng xóm bị ốm, em nên?', ['Sang hỏi thăm, giúp việc nhỏ', 'Mặc kệ vì không phải bà mình', 'Đùa giỡn trước nhà bà', 'Bật nhạc to phá giấc ngủ'], 0, 'Quan tâm hàng xóm là tình làng nghĩa xóm.'),
    Q('Hành vi nào KHÔNG nên với hàng xóm?', ['Mở nhạc rất to vào ban đêm', 'Chào hỏi hằng ngày', 'Giúp xách đồ', 'Mang quà sang biếu dịp lễ'], 0, 'Mở nhạc to làm ồn là thiếu tôn trọng.'),
  ]),

  M(22, 'Tiết kiệm tiền bạc', [
    Q('Đồng tiền do đâu mà có?', ['Do lao động làm ra', 'Tự nhiên có', 'Do trời cho', 'Nhặt ngoài đường'], 0, 'Tiền là kết quả của lao động.'),
    Q('Em nhận được tiền lì xì, em nên?', ['Cảm ơn và để dành mua đồ cần thiết', 'Tiêu hết ngay vào đồ chơi', 'Khoe với mọi người', 'Vứt đi không cần'], 0, 'Tiết kiệm và dùng đúng việc là quý tiền.'),
    Q('Bạn nào quý trọng tiền?', ['Bạn Lan bỏ ống heo tiết kiệm tiền tiêu vặt', 'Bạn Tú vứt tiền lẻ', 'Bạn Bình tiêu xài hoang phí', 'Bạn Hùng đòi mua mọi thứ'], 0, 'Tiết kiệm là quý tiền.'),
    Q('Hành vi nào LÃNG PHÍ tiền?', ['Mua đồ chơi không cần thiết liên tục', 'Tiết kiệm bỏ heo', 'Mua đồ dùng học tập', 'Để dành mua quà tặng mẹ'], 0, 'Mua đồ không cần thiết là lãng phí.'),
    Q('Em nhặt được tờ 50.000 đồng ở sân trường, em nên?', ['Đem nộp cô giáo để trả lại người mất', 'Bỏ túi mang về', 'Đưa cho bạn thân', 'Xé tờ tiền đi'], 0, 'Trả lại của rơi là thật thà.'),
  ]),

  M(23, 'An toàn khi sử dụng mạng (2)', [
    Q('Em chơi game online, có người lạ tặng tài khoản giá trị, em nên?', ['Từ chối và báo bố mẹ', 'Nhận ngay vì miễn phí', 'Trao đổi số điện thoại để cảm ơn', 'Hẹn gặp ngoài đời'], 0, 'Quà từ người lạ thường có ý đồ xấu.'),
    Q('Bạn rủ em đăng ảnh trẻ em (mặt mũi, đồng phục) lên mạng, em nên?', ['Khuyên bạn không đăng và hỏi bố mẹ', 'Đăng cùng cho vui', 'Đăng ảnh cả lớp', 'Khoe ảnh bạn nữ'], 0, 'Đăng ảnh trẻ em phải có sự đồng ý và cẩn trọng.'),
    Q('Tin nhắn lạ bảo "click vào link nhận thưởng", em nên?', ['Bỏ qua, không click và báo bố mẹ', 'Click ngay', 'Chia sẻ cho bạn cùng click', 'Nhập mật khẩu để nhận'], 0, 'Link lạ có thể chứa virus, lừa đảo.'),
    Q('Khi xem video YouTube, em nên?', ['Chọn kênh dành cho trẻ em, nhờ bố mẹ duyệt', 'Xem bất kỳ video nào', 'Xem video bạo lực', 'Xem video người lớn'], 0, 'Chọn nội dung phù hợp lứa tuổi là an toàn.'),
    Q('Có người trên mạng nói xấu, đe doạ em, em nên?', ['Báo ngay bố mẹ hoặc thầy cô', 'Im lặng chịu đựng', 'Đe doạ lại', 'Khoá tài khoản và giấu chuyện'], 0, 'Báo người lớn là cách giải quyết đúng.'),
  ]),

  M(24, 'Em yêu quê hương', [
    Q('Quê hương em là?', ['Nơi em sinh ra hoặc lớn lên', 'Nơi xa lạ', 'Chỉ là một địa danh trong sách', 'Không quan trọng'], 0, 'Quê hương là nơi em gắn bó.'),
    Q('Em yêu quê hương bằng cách?', ['Giữ gìn cảnh đẹp quê hương', 'Vứt rác bừa bãi ở quê', 'Phá hoại làng xóm', 'Chê quê mình xấu'], 0, 'Giữ gìn cảnh đẹp là yêu quê.'),
    Q('Quê hương em có thể có?', ['Cây đa, giếng nước, sân đình hoặc phố phường, nhà cao tầng…', 'Không có gì cả', 'Chỉ có rác', 'Em không biết quê mình'], 0, 'Quê hương nào cũng có nét đẹp riêng.'),
    Q('Bạn chê quê em "nhà quê", em nên?', ['Giải thích và tự hào về quê mình', 'Tự ti và buồn', 'Hùa theo bạn chê', 'Đánh bạn'], 0, 'Tự hào quê hương là biểu hiện tình yêu.'),
    Q('Hành vi nào yêu quê?', ['Trồng cây xanh ở quê', 'Vẽ bậy lên di tích', 'Đập phá đình làng', 'Bỏ quê đi không bao giờ về'], 0, 'Trồng cây làm đẹp quê hương.'),
  ]),

  M(25, 'Bảo vệ của công', [
    Q('Của công là gì?', ['Tài sản chung của trường, lớp, xã hội', 'Tài sản riêng của em', 'Tài sản của bố mẹ', 'Của hàng xóm'], 0, 'Của công là tài sản chung dùng cho mọi người.'),
    Q('Hành vi nào bảo vệ của công?', ['Dùng đồ dùng lớp cẩn thận', 'Vẽ bậy lên bàn', 'Đập phá ghế', 'Khắc tên lên tường'], 0, 'Dùng cẩn thận là bảo vệ của công.'),
    Q('Em thấy bạn đập ghế lớp, em nên?', ['Khuyên bạn ngừng và báo cô', 'Đập cùng cho vui', 'Mặc kệ bạn', 'Cười cổ vũ'], 0, 'Báo cô và khuyên bạn là bảo vệ của công.'),
    Q('Cây xanh, ghế đá ở công viên là?', ['Tài sản công, em cần bảo vệ', 'Của riêng em', 'Có thể bẻ về nhà', 'Của ai cũng được phá'], 0, 'Cây xanh, ghế đá là của công cộng.'),
    Q('Bạn nào biết bảo vệ của công?', ['Bạn Lan tắt đèn lớp khi ra về', 'Bạn Tú vẽ lên tường lớp', 'Bạn Hùng bẻ ghế', 'Bạn Mai khắc tên lên bàn'], 0, 'Tắt đèn là tiết kiệm, bảo vệ của công.'),
  ]),

  M(26, 'Tôn trọng nội quy', [
    Q('Nội quy lớp học là?', ['Những quy định để lớp học có nề nếp', 'Điều ai cũng phải sợ', 'Để cô giáo phạt học sinh', 'Không cần tuân theo'], 0, 'Nội quy giúp lớp học có trật tự.'),
    Q('Em đến lớp đúng giờ là?', ['Tuân thủ nội quy', 'Vi phạm nội quy', 'Không liên quan đến nội quy', 'Việc cô giáo bắt'], 0, 'Đúng giờ là tuân thủ nội quy đầu tiên.'),
    Q('Khi đi tham quan bảo tàng, em nên?', ['Đi nhẹ, nói khẽ, không sờ hiện vật', 'Chạy nhảy ầm ĩ', 'Sờ và lấy hiện vật ra xem', 'Vẽ bậy lên hiện vật'], 0, 'Tôn trọng nội quy bảo tàng là văn minh.'),
    Q('Đèn đỏ giao thông, em phải?', ['Dừng lại', 'Tiếp tục đi', 'Đi nhanh hơn', 'Lách qua'], 0, 'Đèn đỏ phải dừng lại là luật giao thông cơ bản.'),
    Q('Hành vi nào KHÔNG tôn trọng nội quy?', ['Nói chuyện riêng trong giờ học', 'Giơ tay phát biểu', 'Mặc đồng phục đúng quy định', 'Xếp hàng vào lớp'], 0, 'Nói chuyện riêng là vi phạm nội quy lớp học.'),
  ]),

  M(27, 'Nhận lỗi, sửa lỗi', [
    Q('Em làm vỡ cốc, em nên?', ['Xin lỗi mẹ và dọn dẹp cẩn thận', 'Giấu mảnh vỡ đi', 'Đổ lỗi cho em bé', 'Khóc không nhận lỗi'], 0, 'Nhận lỗi và sửa sai là biểu hiện trung thực.'),
    Q('Em quên làm bài tập, cô hỏi, em nên?', ['Thừa nhận và xin cô cho làm bù', 'Nói dối là quên sách ở nhà', 'Đổ lỗi cho mẹ', 'Khóc cho cô tha'], 0, 'Thừa nhận và sửa sai là đúng.'),
    Q('Em đánh em bé khiến em khóc, em nên?', ['Xin lỗi em và dỗ em', 'Bảo em "không được mách mẹ"', 'Đe doạ em', 'Đổ tại em hỗn'], 0, 'Xin lỗi và làm lành là biết nhận lỗi.'),
    Q('Sau khi nhận lỗi, em cần?', ['Cố gắng không tái phạm', 'Nhớ mãi lỗi và không sửa', 'Tự ti mãi', 'Đổ lỗi tiếp'], 0, 'Không tái phạm là sửa lỗi thật sự.'),
    Q('Bạn làm em đau, bạn xin lỗi, em nên?', ['Tha thứ cho bạn', 'Đánh lại bạn', 'Giận bạn mãi', 'Đòi bồi thường'], 0, 'Tha thứ là rộng lượng.'),
  ]),

  M(28, 'Yêu lao động', [
    Q('Vì sao em phải yêu lao động?', ['Lao động giúp khoẻ mạnh và tạo của cải', 'Vì bố mẹ bắt làm', 'Vì lười là xấu', 'Để được khen'], 0, 'Lao động đem lại sức khoẻ và giá trị.'),
    Q('Việc làm nào là yêu lao động?', ['Quét nhà giúp mẹ', 'Nằm cả ngày xem ti vi', 'Vứt rác bừa bãi', 'Bắt em làm hộ'], 0, 'Tự nguyện làm việc nhà là yêu lao động.'),
    Q('Mẹ đang nấu cơm, em nên?', ['Hỏi xem có giúp được gì không', 'Đi chơi tiếp', 'Đòi ăn ngay', 'Chê cơm mẹ nấu chậm'], 0, 'Chủ động giúp đỡ là yêu lao động.'),
    Q('Hành vi nào KHÔNG yêu lao động?', ['Trốn việc, đùn việc cho người khác', 'Giúp bố tưới cây', 'Tự xếp chăn màn', 'Rửa chén sau bữa ăn'], 0, 'Trốn việc là lười.'),
    Q('Tục ngữ nào nói về lao động?', ['"Có làm thì mới có ăn"', '"Tay làm hàm nhai, tay quai miệng trễ"', 'Cả hai câu trên', 'Không có câu nào'], 2, 'Cả hai câu đều nói về giá trị lao động.'),
  ]),

  M(29, 'Trung thực trong học tập', [
    Q('Trung thực trong học tập là?', ['Không gian dối, không cóp bài', 'Cóp bài để được điểm cao', 'Nói dối cô về điểm', 'Sửa bài kiểm tra sau khi cô trả'], 0, 'Trung thực là không gian dối khi học.'),
    Q('Kiểm tra, em không nhớ bài, em nên?', ['Tự cố gắng làm, không quay cóp', 'Cóp bài bạn', 'Hỏi bạn nhỏ tiếng', 'Mở sách ra xem'], 0, 'Tự làm là trung thực.'),
    Q('Bạn đưa em xem bài kiểm tra, em nên?', ['Từ chối và tự làm', 'Chép luôn cho nhanh', 'Cảm ơn rồi chép', 'Khoe với bạn khác'], 0, 'Từ chối chép là trung thực.'),
    Q('Em làm bài sai nhưng cô chấm thành đúng, em nên?', ['Báo cô để cô chấm lại', 'Im lặng nhận điểm cao', 'Khoe điểm cao với bạn', 'Mừng thầm'], 0, 'Báo cô là trung thực.'),
    Q('Hành vi nào KHÔNG trung thực?', ['Sửa điểm trong sổ liên lạc', 'Tự làm bài', 'Nói thật với cô', 'Nhận lỗi khi sai'], 0, 'Sửa điểm là gian dối.'),
  ]),

  M(30, 'Tôn trọng người khác', [
    Q('Tôn trọng người khác là?', ['Lắng nghe, không xúc phạm, không kì thị', 'Chê bai ngoại hình người khác', 'Chế giễu vùng miền', 'Nói xấu sau lưng'], 0, 'Tôn trọng là không xúc phạm ai.'),
    Q('Bạn nói giọng vùng miền khác, em nên?', ['Tôn trọng, không nhại', 'Nhại giọng bạn để cười', 'Chê giọng bạn khó nghe', 'Tẩy chay bạn'], 0, 'Mỗi vùng miền có nét đẹp riêng, đáng tôn trọng.'),
    Q('Bạn theo tôn giáo khác em, em nên?', ['Tôn trọng tín ngưỡng của bạn', 'Chê tôn giáo bạn', 'Bắt bạn bỏ tôn giáo', 'Tẩy chay bạn'], 0, 'Tôn trọng tín ngưỡng là quyền cơ bản của con người.'),
    Q('Người khuyết tật trên đường, em nên?', ['Tôn trọng và giúp đỡ khi cần', 'Chế nhạo họ', 'Chỉ trỏ bàn tán', 'Tránh xa như bệnh tật'], 0, 'Người khuyết tật đáng được tôn trọng và quan tâm.'),
    Q('Hành vi nào KHÔNG tôn trọng người khác?', ['Bịa chuyện nói xấu bạn', 'Lắng nghe bạn kể chuyện', 'Khen bạn khi bạn làm tốt', 'Giúp bạn khi bạn cần'], 0, 'Bịa chuyện nói xấu là xúc phạm người khác.'),
  ]),

  M(31, 'Sử dụng đồ dùng cá nhân', [
    Q('Đồ dùng cá nhân của em (cặp, vở, bút) em nên?', ['Giữ gìn cẩn thận, dùng lâu dài', 'Vứt bừa bãi', 'Đập phá cho vui', 'Mất rồi mua mới'], 0, 'Giữ gìn đồ dùng là tiết kiệm và trách nhiệm.'),
    Q('Bạn mượn bút em làm hỏng, em nên?', ['Nhắc bạn cẩn thận lần sau', 'Đánh bạn', 'Lấy đồ bạn để trả thù', 'Mách cô bắt phạt bạn'], 0, 'Nhắc nhở nhẹ nhàng là cách đúng.'),
    Q('Đồ dùng em không dùng nữa nhưng còn tốt, em nên?', ['Tặng em nhỏ hoặc bạn nghèo', 'Vứt đi', 'Đập phá', 'Cất xó cho mục'], 0, 'Tặng người khác là biết tiết kiệm và chia sẻ.'),
    Q('Bạn nào dùng đồ tốt?', ['Bạn Lan dùng 1 chiếc cặp 3 năm vẫn đẹp', 'Bạn Tú mỗi tháng đòi mua cặp mới', 'Bạn Hùng xé sách làm máy bay', 'Bạn Mai vẽ bậy lên cặp'], 0, 'Giữ đồ bền là tiết kiệm.'),
    Q('Trước khi cất đồ, em nên?', ['Lau sạch và xếp gọn gàng', 'Vứt vào góc', 'Để đồ ướt vào cặp', 'Nhét lung tung'], 0, 'Gọn gàng giúp đồ bền và dễ tìm.'),
  ]),

  M(32, 'Em là người tử tế', [
    Q('Tử tế là gì?', ['Đối xử tốt, lễ phép với mọi người', 'Chỉ giúp người thân', 'Lạnh lùng với người lạ', 'Chỉ giúp khi được trả công'], 0, 'Tử tế là tốt với tất cả mọi người.'),
    Q('Em thấy người ngã ngoài đường, em nên?', ['Đỡ giúp hoặc gọi người lớn giúp', 'Đi qua nhanh', 'Cười nhạo', 'Chụp ảnh đăng mạng'], 0, 'Giúp người gặp khó khăn là tử tế.'),
    Q('Khi nói "cảm ơn" và "xin lỗi" là?', ['Biểu hiện văn minh, tử tế', 'Yếu đuối', 'Không cần thiết', 'Chỉ trẻ con mới nói'], 0, '"Cảm ơn" và "xin lỗi" là cốt lõi của lịch sự.'),
    Q('Bạn nào tử tế?', ['Bạn An nhường chỗ cho bà bầu trên xe buýt', 'Bạn Tú chen lấn người già', 'Bạn Lan cười chế nhạo người gặp nạn', 'Bạn Hùng quát người bán hàng rong'], 0, 'Nhường chỗ là biểu hiện tử tế.'),
    Q('Tử tế cần thể hiện ở đâu?', ['Mọi lúc, mọi nơi với mọi người', 'Chỉ ở nhà', 'Chỉ ở lớp', 'Chỉ khi có người nhìn'], 0, 'Tử tế là phẩm chất phải có mọi lúc.'),
  ]),

  M(33, 'Em yêu thiên nhiên', [
    Q('Thiên nhiên gồm?', ['Cây cối, sông núi, biển, động vật…', 'Chỉ con người', 'Chỉ nhà cao tầng', 'Chỉ đồ chơi'], 0, 'Thiên nhiên gồm tất cả những gì không do con người tạo ra.'),
    Q('Em yêu thiên nhiên bằng cách?', ['Trồng cây, bảo vệ động vật, không xả rác', 'Bẻ cành, hái hoa', 'Bắt và làm hại động vật nhỏ', 'Vẽ bậy lên thân cây'], 0, 'Bảo vệ là biểu hiện yêu thiên nhiên.'),
    Q('Thấy bạn bắt chim non, em nên?', ['Khuyên bạn thả chim về tổ', 'Bắt cùng cho vui', 'Cười cổ vũ', 'Mặc kệ'], 0, 'Khuyên bạn thả chim là bảo vệ động vật.'),
    Q('Hành vi nào yêu thiên nhiên?', ['Tham gia trồng cây nhân ngày Cây xanh', 'Đốt rừng', 'Săn bắt thú quý hiếm', 'Đổ dầu xuống biển'], 0, 'Trồng cây là yêu thiên nhiên.'),
    Q('Động vật nào cần được bảo vệ đặc biệt?', ['Các loài quý hiếm như voi, hổ, tê giác…', 'Tất cả côn trùng phải diệt', 'Chỉ loài có ích cho người', 'Không cần bảo vệ loài nào'], 0, 'Loài quý hiếm cần được bảo vệ khỏi tuyệt chủng.'),
  ]),

  M(34, 'Trách nhiệm với việc của mình', [
    Q('Trách nhiệm là?', ['Tự làm việc của mình và chịu kết quả', 'Bắt người khác làm hộ', 'Đổ lỗi khi sai', 'Né tránh việc khó'], 0, 'Trách nhiệm là tự gánh việc của mình.'),
    Q('Việc học là trách nhiệm của ai?', ['Của chính em', 'Của bố mẹ', 'Của cô giáo', 'Của bạn bè'], 0, 'Học là việc của chính em.'),
    Q('Em được phân công trực nhật, em nên?', ['Làm đầy đủ và sạch sẽ', 'Trốn việc cho bạn làm', 'Làm qua loa', 'Đổ lỗi cho bạn không làm'], 0, 'Hoàn thành nhiệm vụ là có trách nhiệm.'),
    Q('Em làm hỏng đồ của bạn, em nên?', ['Xin lỗi và sửa hoặc đền bù', 'Giấu đi', 'Đổ lỗi cho người khác', 'Chạy về nhà'], 0, 'Chịu trách nhiệm về hành vi của mình là đúng.'),
    Q('Hành vi nào có trách nhiệm?', ['Hoàn thành bài tập đúng hạn', 'Quên làm bài thường xuyên', 'Đổ lỗi quên sách cho mẹ', 'Bỏ trực nhật'], 0, 'Hoàn thành bài tập là biểu hiện trách nhiệm với việc học.'),
  ]),

  M(35, 'Tổng kết HK2 — Em rèn luyện phẩm chất', [
    Q('Phẩm chất quan trọng nhất em đã rèn luyện trong năm là?', ['Tất cả các phẩm chất: yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm', 'Chỉ cần ngoan', 'Chỉ cần học giỏi', 'Không cần phẩm chất gì'], 0, '5 phẩm chất là nền tảng của CT GDPT 2018.'),
    Q('Trong năm, em đã giúp người yếu thế khi?', ['Khi gặp bất kì ai cần giúp đỡ', 'Chỉ khi được trả công', 'Chỉ khi có người khen', 'Không bao giờ'], 0, 'Giúp đỡ vì lòng nhân ái, không vì lợi ích.'),
    Q('Em đã bảo vệ môi trường bằng cách?', ['Vứt rác đúng nơi, tiết kiệm điện nước', 'Vứt rác bừa bãi', 'Đập phá cây xanh', 'Đốt rác bừa bãi'], 0, 'Hành động nhỏ mỗi ngày là bảo vệ môi trường.'),
    Q('An toàn trên mạng em đã làm gì?', ['Không cho người lạ thông tin cá nhân', 'Cho ai xin cũng đưa', 'Hẹn gặp người lạ trên mạng', 'Click vào mọi link lạ'], 0, 'Cẩn trọng với người lạ trên mạng là an toàn.'),
    Q('Bước sang lớp 4, em cần làm gì?', ['Tiếp tục rèn luyện phẩm chất và học tập tốt hơn', 'Nghỉ ngơi không cần cố gắng', 'Quên hết những điều đã học', 'Học vì điểm số'], 0, 'Học tập và rèn luyện là quá trình suốt đời.'),
  ], { difficulty: 2 }),
];

export const P3DD_SCENARIOS = indexBy(P3DD_WEEKS);
