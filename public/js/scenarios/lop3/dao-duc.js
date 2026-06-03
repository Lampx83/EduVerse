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
    Q('Tổ quốc của em có tên đầy đủ là gì?', ['Đại Việt', 'Cộng hoà xã hội chủ nghĩa Việt Nam', 'Việt Nam Dân chủ Cộng hoà', 'Đông Dương'], 1, 'Tên đầy đủ hiện nay là Cộng hoà xã hội chủ nghĩa Việt Nam.'),
    Q('Em yêu Tổ quốc bằng cách nào phù hợp với học sinh lớp 3?', ['Chăm học, ngoan ngoãn, giữ gìn cảnh quan', 'Đợi lớn mới yêu nước', 'Chỉ yêu khi đi thi', 'Chỉ cần thuộc lòng bài Quốc ca'], 0, 'Yêu nước bắt đầu từ những việc nhỏ hằng ngày.'),
    Q('Việt Nam giáp với những nước nào trên đất liền?', ['Nhật Bản, Hàn Quốc', 'Thái Lan, Malaysia', 'Pháp, Mỹ', 'Trung Quốc, Lào, Campuchia'], 3, 'Việt Nam có chung biên giới đất liền với 3 nước.'),
    Q('Bạn nào thể hiện tình yêu Tổ quốc?', ['Bạn Lan vứt rác bừa bãi', 'Bạn Hùng chê đất nước mình', 'Bạn An chăm chỉ học và giữ gìn đường phố sạch', 'Bạn Tú vẽ bậy lên di tích'], 2, 'Hành vi giữ gìn cảnh quan thể hiện tình yêu nước.'),
    Q('Câu nào nói đúng về Tổ quốc?', ['Tổ quốc không quan trọng', 'Tổ quốc là quê hương, đất nước nơi mình sinh ra', 'Tổ quốc là tên một bài hát', 'Tổ quốc chỉ là một địa danh'], 1, 'Tổ quốc là khái niệm thiêng liêng về đất nước.'),
  ]),

  M(2, 'Lá cờ Việt Nam', [
    Q('Quốc kì Việt Nam có nền màu gì?', ['Xanh dương có ngôi sao trắng', 'Vàng có ba sọc đỏ ngang', 'Đỏ và xanh chia đôi nền', 'Đỏ'], 3, 'Quốc kì nền đỏ, sao vàng 5 cánh ở giữa.'),
    Q('Ngôi sao trên Quốc kì có mấy cánh?', ['6 cánh', '3 cánh', '7 cánh', '5 cánh'], 3, 'Sao vàng 5 cánh tượng trưng cho khối đại đoàn kết dân tộc.'),
    Q('Khi nhìn thấy Quốc kì được kéo lên, em nên?', ['Cười đùa, nói chuyện', 'Vừa nhìn vừa nghịch điện thoại', 'Đứng nghiêm trang, mắt nhìn về phía cờ', 'Quay đi nơi khác'], 2, 'Đứng nghiêm khi chào cờ là tôn trọng Tổ quốc.'),
    Q('Hành vi nào KHÔNG tôn trọng Quốc kì?', ['Đứng nghiêm khi chào cờ', 'Vẽ bậy hoặc giẫm lên hình Quốc kì', 'Hát Quốc ca trang nghiêm', 'Treo cờ ngày lễ'], 1, 'Vẽ bậy hoặc giẫm đạp Quốc kì là vô lễ với Tổ quốc.'),
    Q('Ngày nào dưới đây nhà nhà thường treo Quốc kì?', ['Sinh nhật của em', 'Ngày cuối tuần bình thường', 'Quốc khánh 2/9', 'Ngày em đi học'], 2, '2/9 là Quốc khánh — ngày treo Quốc kì trang trọng.'),
  ]),

  M(3, 'Kính trọng thầy cô giáo', [
    Q('Khi gặp thầy cô ở cổng trường, em nên?', ['Giả vờ không thấy', 'Cười lớn rồi chạy', 'Cúi đầu, lễ phép chào thầy cô', 'Đi thẳng, không chào'], 2, 'Chào thầy cô là biểu hiện kính trọng cơ bản.'),
    Q('Khi thầy cô đang giảng bài, em nên?', ['Lấy đồ chơi ra chơi', 'Lắng nghe và ghi chép', 'Nói chuyện riêng', 'Nằm gục xuống bàn'], 1, 'Lắng nghe là tôn trọng thầy cô và bài giảng.'),
    Q('Lời nào lễ phép với cô giáo?', ['"Cô làm hộ em đi"', '"Cô ơi, ra đây"', '"Ê cô"', '"Thưa cô, cho em hỏi ạ"'], 3, '"Thưa cô… ạ" là cách xưng hô lễ phép.'),
    Q('Em làm sai và bị cô nhắc, em nên?', ['Lắng nghe và xin lỗi cô', 'Bỏ ra ngoài lớp', 'Cãi lại cô', 'Khóc to cho cô nhường'], 0, 'Nhận lỗi và sửa sai là kính trọng thầy cô.'),
    Q('Ngày Nhà giáo Việt Nam là ngày nào?', ['20/11', '8/3', '1/6', '2/9'], 0, '20/11 là ngày tri ân thầy cô giáo.'),
  ]),

  M(4, 'Em tự lập', [
    Q('Tự lập là gì?', ['Tự làm những việc trong khả năng của mình', 'Tự ý làm trái lời cha mẹ', 'Không cần ai giúp dù khó đến mấy', 'Sống một mình'], 0, 'Tự lập là tự làm việc phù hợp với lứa tuổi.'),
    Q('Việc nào em lớp 3 có thể TỰ LÀM?', ['Tự lái xe máy đi học', 'Tự nấu bữa cơm cho cả nhà', 'Tự đánh răng, rửa mặt, mặc quần áo', 'Tự đi chợ xa'], 2, 'Việc tự phục vụ là việc lớp 3 nên tự làm.'),
    Q('Bạn nào tự lập?', ['Bạn Tú đợi mẹ mặc áo cho', 'Bạn An tự soạn cặp sách trước khi đi học', 'Bạn Lan đòi bố xúc cơm', 'Bạn Hùng nhờ bà buộc dây giày'], 1, 'Tự soạn cặp là biểu hiện tự lập.'),
    Q('Vì sao em cần tự lập?', ['Vì sợ bị mắng', 'Giúp em trưởng thành và tự tin hơn', 'Để khoe với bạn bè', 'Để bố mẹ không thương em nữa'], 1, 'Tự lập giúp em trưởng thành và tự tin.'),
    Q('Hành vi nào KHÔNG tự lập?', ['Tự gấp chăn màn', 'Tự dọn phòng', 'Tự làm bài tập', 'Mọi việc đều dựa dẫm vào người khác'], 3, 'Dựa dẫm là trái ngược với tự lập.'),
  ]),

  M(5, 'Ham học hỏi', [
    Q('Ham học hỏi là gì?', ['Học vì bị ép', 'Luôn muốn biết thêm, tìm hiểu cái mới', 'Không thích đọc sách', 'Học chỉ để được điểm cao'], 1, 'Ham học là chủ động tìm hiểu kiến thức.'),
    Q('Khi không hiểu một điều gì, em nên?', ['Nói dối là đã hiểu', 'Đổ lỗi cho người khác', 'Hỏi thầy cô, bố mẹ hoặc tra cứu sách báo', 'Bỏ qua không quan tâm'], 2, 'Hỏi để hiểu là biểu hiện ham học hỏi.'),
    Q('Bạn nào ham học hỏi?', ['Bạn Tú chỉ chơi game', 'Bạn Bình ngủ trong giờ học', 'Bạn Lan đọc thêm sách khoa học sau giờ học', 'Bạn Mai chép bài bạn'], 2, 'Đọc thêm sách là biểu hiện ham học.'),
    Q('Tục ngữ nào nói về việc ham học?', ['Có công mài sắt có ngày nên kim', 'Học, học nữa, học mãi', 'Cả hai câu trên', 'Không có câu nào'], 2, 'Cả hai câu đều nói về kiên trì và ham học.'),
    Q('Em nên đặt câu hỏi khi nào?', ['Hỏi mọi lúc kể cả khi cô đang giảng', 'Không bao giờ hỏi', 'Chỉ khi cô yêu cầu', 'Khi có điều chưa hiểu hoặc tò mò'], 3, 'Đặt câu hỏi đúng lúc là ham học.'),
  ]),

  M(6, 'Thật thà, trung thực', [
    Q('Trung thực là gì?', ['Nói đúng sự thật, không gian dối', 'Nói dối khi cần', 'Giấu lỗi của mình', 'Đổ lỗi cho người khác'], 0, 'Trung thực là sống ngay thẳng, không gian dối.'),
    Q('Khi làm vỡ bình hoa, em nên?', ['Đổ lỗi cho em bé', 'Giấu mảnh vỡ đi', 'Thừa nhận và xin lỗi mẹ', 'Nói dối là mèo làm'], 2, 'Thừa nhận lỗi là trung thực.'),
    Q('Em nhặt được tiền ở sân trường, em nên?', ['Bỏ túi giữ làm của riêng', 'Giấu vào ngăn bàn', 'Đi mua kẹo cho cả nhóm', 'Đem nộp cô để trả lại người mất'], 3, 'Trả lại của rơi là thật thà.'),
    Q('Hành vi nào KHÔNG trung thực?', ['Tự làm bài', 'Trả lại đồ nhặt được', 'Nhận lỗi khi sai', 'Cóp bài bạn khi kiểm tra'], 3, 'Cóp bài là gian dối.'),
    Q('Vì sao em cần trung thực?', ['Để được khen', 'Để không bị phạt', 'Được mọi người tin yêu, quý mến', 'Để bạn bè sợ'], 2, 'Trung thực giúp xây dựng lòng tin.'),
  ]),

  M(7, 'Lễ phép với người lớn', [
    Q('Khi gặp ông bà, em nên?', ['Nói "Ê ông"', 'Khoanh tay lễ phép chào ông bà', 'Giả vờ không thấy', 'Đi thẳng vào nhà'], 1, 'Khoanh tay chào là lễ phép với người lớn.'),
    Q('Khách đến nhà chơi, em làm gì?', ['Chào khách và mời nước', 'Đứng nhìn không nói gì', 'Quát "Cô đi đi"', 'Trốn vào phòng'], 0, 'Chào và mời nước khách là hiếu khách.'),
    Q('Lời chào nào lễ phép?', ['"Ê bác"', '"Hi bác"', '"Bác làm gì đó"', '"Cháu chào bác ạ"'], 3, 'Thêm "ạ" và xưng "cháu" là lễ phép.'),
    Q('Nhận quà từ người lớn, em nên?', ['Chê quà xấu', 'Giật lấy ngay', 'Vứt quà đi', 'Nhận bằng hai tay và cảm ơn'], 3, 'Nhận bằng hai tay là phép lịch sự.'),
    Q('Đang ngồi trên xe buýt, người già lên xe và hết chỗ. Em nên?', ['Giả vờ ngủ', 'Nhường chỗ cho người già', 'Mở rộng chân lấn chỗ', 'Quay đi nơi khác'], 1, 'Nhường chỗ cho người già là biểu hiện lễ phép, văn minh.'),
  ]),

  M(8, 'Đoàn kết với bạn bè', [
    Q('Đoàn kết với bạn nghĩa là?', ['Chia phe cãi nhau', 'Cùng nhau giúp đỡ, không gây gổ', 'Đánh nhau cho vui', 'Tẩy chay bạn không hợp ý'], 1, 'Đoàn kết là yêu thương và cùng nhau.'),
    Q('Hai bạn cãi nhau vì giành chỗ, em nên?', ['Hùa theo một bên', 'Khuyên hai bạn nhường nhau', 'Cổ vũ cãi to hơn', 'Mặc kệ'], 1, 'Khuyên giải để hai bạn hoà thuận là đúng.'),
    Q('Trong trò chơi tập thể, em nên?', ['Bỏ cuộc giữa chừng', 'Chỉ chơi một mình', 'Cãi nhau với đồng đội', 'Hợp tác với cả đội'], 3, 'Hợp tác là biểu hiện đoàn kết.'),
    Q('Hành vi nào KHÔNG đoàn kết?', ['Cùng bạn dọn lớp', 'Cùng làm bài nhóm', 'Chơi cùng bạn mới', 'Cãi vã, đánh nhau với bạn'], 3, 'Đánh nhau là phá đoàn kết.'),
    Q('Khi cả nhóm không đồng ý ý của em, em nên?', ['Lắng nghe ý kiến chung và cùng làm', 'Tức giận bỏ đi', 'Tách ra làm một mình', 'Phá phách cho nhóm thất bại'], 0, 'Lắng nghe ý kiến chung là đoàn kết.'),
  ]),

  M(9, 'Tôn trọng bạn khác giới', [
    Q('Bạn khác giới là?', ['Bạn lớn tuổi hơn', 'Bạn người nước ngoài', 'Bạn nam và bạn nữ với nhau', 'Bạn ở lớp khác'], 2, 'Bạn khác giới là bạn nam với bạn nữ.'),
    Q('Em nên đối xử với bạn khác giới thế nào?', ['Bắt nạt bạn nữ vì yếu hơn', 'Trêu chọc cho vui', 'Tẩy chay bạn khác giới', 'Tôn trọng, không trêu chọc, kì thị'], 3, 'Tôn trọng bạn khác giới là văn minh.'),
    Q('Bạn nam trêu bạn nữ là "đồ con gái yếu đuối", em nên?', ['Trêu cùng', 'Khuyên bạn dừng lại, ai cũng đáng tôn trọng', 'Mặc kệ', 'Cười hùa theo'], 1, 'Mọi người đều bình đẳng, không kì thị giới tính.'),
    Q('Trong lớp, học sinh nam và nữ nên?', ['Chia phe nam – nữ chống nhau', 'Tẩy chay nhau', 'Không bao giờ nói chuyện', 'Cùng học, cùng chơi, giúp đỡ nhau'], 3, 'Nam nữ bình đẳng, cùng giúp đỡ nhau học tập.'),
    Q('Hành vi nào KHÔNG tôn trọng bạn khác giới?', ['Cùng bạn nữ làm bài nhóm', 'Lôi tóc, kéo váy bạn nữ', 'Giúp bạn nữ xách đồ nặng', 'Mời bạn nữ tham gia trò chơi'], 1, 'Hành vi quấy phá là không tôn trọng.'),
  ]),

  M(10, 'An toàn khi sử dụng mạng (1)', [
    Q('Em nên đặt mật khẩu thế nào?', ['Khoe mật khẩu trên mạng', 'Khó đoán và không cho người lạ biết', 'Đặt là 123456', 'Dùng ngày sinh ai cũng biết'], 1, 'Mật khẩu phải khó đoán và giữ bí mật.'),
    Q('Người lạ trên mạng xin số điện thoại, địa chỉ nhà em, em nên?', ['Từ chối và báo bố mẹ', 'Cho nửa số điện thoại', 'Cho ngay vì người ta hỏi lịch sự', 'Cho địa chỉ trường học'], 0, 'Không chia sẻ thông tin cá nhân với người lạ.'),
    Q('Em thấy nội dung sợ hãi, bạo lực trên mạng, em nên?', ['Bắt chước làm theo', 'Chia sẻ cho bạn cùng xem', 'Tắt đi và báo bố mẹ', 'Xem tiếp cho biết'], 2, 'Tắt ngay và báo người lớn là an toàn.'),
    Q('Người lạ rủ em gặp ngoài đời, em nên?', ['Hẹn ở nơi vắng vẻ', 'Đi gặp một mình cho bạo dạn', 'Đi gặp vì người ta nói tốt', 'Từ chối tuyệt đối và kể cho bố mẹ'], 3, 'Không bao giờ gặp người lạ quen qua mạng một mình.'),
    Q('Em nên dùng internet để?', ['Xem phim bạo lực', 'Tải game lậu', 'Bình luận xấu về người khác', 'Học bài, xem phim hoạt hình phù hợp lứa tuổi'], 3, 'Dùng internet đúng mục đích, đúng lứa tuổi.'),
  ]),

  M(11, 'Biết ơn người lao động (1)', [
    Q('Người lao động bao gồm?', ['Chỉ có người nổi tiếng', 'Chỉ có người giàu', 'Bác sĩ, nông dân, công nhân, lao công, giáo viên…', 'Chỉ có nhân viên văn phòng'], 2, 'Tất cả người làm việc lương thiện đều là người lao động.'),
    Q('Bác lao công đang quét sân, em nên?', ['Cười chê công việc của bác', 'Không quan tâm', 'Vứt rác chỗ bác vừa quét', 'Chào bác và cảm ơn bác'], 3, 'Chào và cảm ơn là biết ơn người lao động.'),
    Q('Bác nông dân làm ra hạt gạo, em nên?', ['Quý hạt gạo, không bỏ phí cơm', 'Coi thường nghề nông', 'Nói "nghề ấy thấp kém"', 'Đổ cơm thừa'], 0, 'Quý hạt gạo là biết ơn nông dân.'),
    Q('Hành vi nào KHÔNG biết ơn người lao động?', ['Giúp đỡ cô lao công', 'Chế nhạo nghề nghiệp người khác', 'Chào bác bảo vệ', 'Cảm ơn cô bán hàng'], 1, 'Chế nhạo nghề là thiếu tôn trọng.'),
    Q('Bố mẹ đi làm về mệt, em nên?', ['Hỏi thăm và mời nước bố mẹ', 'Đòi đi chơi ngay', 'Bật nhạc to', 'Mặc kệ bố mẹ'], 0, 'Quan tâm bố mẹ là biết ơn lao động của bố mẹ.'),
  ]),

  M(12, 'Biết ơn người lao động (2)', [
    Q('Câu nào ĐÚNG?', ['Chỉ nghề lương cao mới đáng quý', 'Mọi nghề lao động chân chính đều đáng quý', 'Nghề lao công không quan trọng', 'Nghề nông dân thấp kém'], 1, 'Mọi nghề lương thiện đều đáng quý.'),
    Q('Bạn nào biết ơn người lao động?', ['Bạn Lan chê cơm cô cấp dưỡng nấu', 'Bạn Hùng cười nhạo bác bảo vệ', 'Bạn Tú vứt cơm thừa', 'Bạn An ăn hết suất cơm, không để phí'], 3, 'Ăn hết phần cơm là tôn trọng người lao động.'),
    Q('Em đến gặp bác sĩ khám bệnh, em nên?', ['Quát "Khám nhanh lên"', 'Im lặng không chào', 'Lễ phép chào và cảm ơn bác sĩ', 'Cười cợt với bác sĩ'], 2, 'Lễ phép với bác sĩ là biết ơn.'),
    Q('Cô lao công lau hành lang ướt, em nên?', ['Phàn nàn vì sàn ướt', 'Đi nhẹ và tránh vết lau', 'Cười và bước qua lung tung', 'Chạy nhảy làm bẩn lại'], 1, 'Đi nhẹ và tránh là tôn trọng công sức của cô.'),
    Q('Khi nhận đồ ăn ở căng tin, em nên?', ['Nói "Cháu cảm ơn ạ"', 'Giật lấy đồ', 'Im lặng cầm đi', 'Chê đồ ăn dở'], 0, 'Cảm ơn là biểu hiện văn minh.'),
  ]),

  M(13, 'Giúp đỡ người yếu thế (1)', [
    Q('Người yếu thế gồm những ai?', ['Người già, trẻ em, người khuyết tật, người ốm…', 'Không có ai cả', 'Chỉ người nghèo', 'Chỉ trẻ em'], 0, 'Người yếu thế là những người cần được giúp đỡ.'),
    Q('Thấy cụ già qua đường khó khăn, em nên?', ['Cười nhạo cụ chậm', 'Đẩy cụ ra cho mình đi trước', 'Dắt cụ qua đường an toàn', 'Đi qua nhanh'], 2, 'Giúp người già qua đường là hành vi đẹp.'),
    Q('Bạn khuyết tật trong lớp, em nên?', ['Trêu chọc bạn', 'Tránh xa bạn', 'Bắt chước dáng đi của bạn', 'Quan tâm, chơi cùng và giúp đỡ bạn'], 3, 'Bạn khuyết tật cần yêu thương, không bị kì thị.'),
    Q('Em bé bị lạc ở siêu thị, em nên?', ['Mặc kệ vì không phải em mình', 'Báo cho nhân viên hoặc bảo vệ siêu thị', 'Dắt em đi chơi', 'Trêu cho em sợ'], 1, 'Báo nhân viên là cách giúp an toàn.'),
    Q('Hành vi nào KHÔNG giúp đỡ người yếu thế?', ['Cười nhạo người khuyết tật', 'Dắt cụ qua đường', 'Nhường chỗ cho người già', 'An ủi em bé khóc'], 0, 'Cười nhạo là hành vi sai trái.'),
  ]),

  M(14, 'Giúp đỡ người yếu thế (2)', [
    Q('Mùa đông, bạn không có áo ấm, em nên?', ['Trêu bạn rét', 'Báo cô giáo và quyên góp giúp bạn', 'Khoe áo ấm của mình', 'Cười chê bạn'], 1, 'Báo cô và quyên góp là cách giúp thiết thực.'),
    Q('Bạn nhà nghèo không có sách mới, em nên?', ['Khinh thường bạn', 'Cho bạn mượn sách hoặc tặng sách cũ còn tốt', 'Khoe sách mới', 'Không chơi với bạn'], 1, 'Chia sẻ giúp bạn vượt qua khó khăn.'),
    Q('Gặp người ăn xin trên đường, em nên?', ['Quẳng đồ ăn xuống đất', 'Chế nhạo họ', 'Lễ phép, nếu có thể giúp đỡ một chút', 'Xua đuổi họ'], 2, 'Đối xử lễ phép với mọi người, dù họ là ai.'),
    Q('Bạn nào biết giúp đỡ người yếu thế?', ['Bạn Lan dẫn bạn khiếm thị đi vệ sinh', 'Bạn Tú đẩy bạn khuyết tật', 'Bạn Mai lấy đồ của bạn ốm', 'Bạn Hùng cười người khác bị tật'], 0, 'Dẫn bạn khiếm thị là giúp đỡ thiết thực.'),
    Q('Vì sao em nên giúp người yếu thế?', ['Vì họ cần và em có khả năng giúp', 'Để khoe với bạn', 'Vì bố mẹ bắt', 'Để được khen'], 0, 'Giúp đỡ vì lòng nhân ái, không vì khen ngợi.'),
  ]),

  M(15, 'Bảo vệ môi trường (1)', [
    Q('Bảo vệ môi trường là?', ['Không quan tâm', 'Đập phá cây cối', 'Giữ cho không khí, nước, đất luôn sạch sẽ', 'Vứt rác bừa bãi'], 2, 'Bảo vệ môi trường là giữ thiên nhiên sạch đẹp.'),
    Q('Em nên vứt rác ở đâu?', ['Xuống ao hồ', 'Xuống đường', 'Cửa nhà hàng xóm', 'Vào thùng rác'], 3, 'Vứt rác đúng nơi là bảo vệ môi trường.'),
    Q('Cây xanh có vai trò gì?', ['Làm sạch không khí, cho bóng mát', 'Làm bẩn đường', 'Hút hết nước ngầm làm đất khô', 'Cản trở giao thông'], 0, 'Cây xanh giúp môi trường trong lành.'),
    Q('Em thấy bạn vứt vỏ chai xuống đường, em nên?', ['Mặc kệ', 'Hùa theo vứt cùng', 'Cười cổ vũ', 'Khuyên bạn nhặt lên bỏ thùng rác'], 3, 'Khuyên bạn làm điều đúng là bảo vệ môi trường.'),
    Q('Hành vi nào ĐÚNG?', ['Đổ rác xuống cống', 'Đốt rác bừa bãi', 'Phân loại rác trước khi vứt', 'Vứt pin cũ vào sông'], 2, 'Phân loại rác là cách bảo vệ môi trường hiện đại.'),
  ]),

  M(16, 'Bảo vệ môi trường (2)', [
    Q('Em nên làm gì để tiết kiệm nước?', ['Khoá vòi khi đánh răng, rửa tay xong', 'Để nước chảy mãi cho mát', 'Đùa nghịch với vòi nước', 'Tắm thật lâu'], 0, 'Khoá vòi khi không dùng là tiết kiệm nước.'),
    Q('Em nên làm gì để tiết kiệm điện?', ['Tắt đèn, quạt khi ra khỏi phòng', 'Mở tủ lạnh thật lâu', 'Bật ti vi cả ngày không xem', 'Bật đèn cả đêm'], 0, 'Tắt đèn khi không dùng là tiết kiệm điện.'),
    Q('Túi nilon có hại gì?', ['Phân huỷ trong 1 ngày', 'Khó phân huỷ, gây ô nhiễm đất và biển', 'Là thức ăn của cá', 'Rất tốt cho môi trường'], 1, 'Túi nilon mất hàng trăm năm để phân huỷ.'),
    Q('Bạn nào bảo vệ môi trường tốt?', ['Bạn Tú vứt rác xuống sông', 'Bạn Hùng chặt cây non', 'Bạn Mai đốt rác trong sân trường', 'Bạn Lan dùng bình nước thay vì chai nhựa'], 3, 'Dùng bình tái sử dụng là giảm rác thải nhựa.'),
    Q('Khi đi dã ngoại, em nên?', ['Để rác ngay tại chỗ', 'Chôn rác xuống đất', 'Đổ rác xuống suối', 'Mang rác về vứt vào thùng rác'], 3, 'Mang rác về vứt đúng chỗ là bảo vệ thiên nhiên.'),
  ]),

  M(17, 'Em là người Việt Nam', [
    Q('Em tự hào là người Việt Nam vì?', ['Vì không có nước nào khác', 'Việt Nam có lịch sử và văn hoá lâu đời', 'Việt Nam không có gì đặc biệt', 'Vì người khác bảo thế'], 1, 'Việt Nam có truyền thống văn hoá đáng tự hào.'),
    Q('Tiếng nói của người Việt Nam là?', ['Tiếng Anh', 'Tiếng Việt', 'Tiếng Pháp', 'Tiếng Trung'], 1, 'Tiếng Việt là quốc ngữ của Việt Nam.'),
    Q('Em nên giữ gìn tiếng Việt bằng cách?', ['Chỉ nói tiếng nước ngoài', 'Nói và viết tiếng Việt đúng', 'Pha trộn tiếng linh tinh để khoe', 'Viết tắt khó hiểu mọi lúc'], 1, 'Giữ gìn sự trong sáng của tiếng Việt là yêu nước.'),
    Q('Trang phục truyền thống của phụ nữ Việt Nam là?', ['Áo hanbok', 'Áo kimono', 'Áo dài', 'Áo sườn xám'], 2, 'Áo dài là trang phục truyền thống của Việt Nam.'),
    Q('Món ăn truyền thống nổi tiếng của Việt Nam?', ['Pizza hải sản kiểu Ý', 'Sushi cá hồi Nhật Bản', 'Phở, bún chả, bánh chưng…', 'Hamburger'], 2, 'Việt Nam có nhiều món ăn truyền thống nổi tiếng thế giới.'),
  ]),

  M(18, 'Sơ kết HK1 — Tự đánh giá phẩm chất', [
    Q('Trong HK1, em đã chăm chỉ. Biểu hiện nào em đã làm tốt?', ['Làm bài đầy đủ mỗi ngày', 'Trốn học', 'Chép bài bạn', 'Quên sách vở'], 0, 'Làm bài đầy đủ là chăm chỉ.'),
    Q('Khi gặp bạn khuyết tật, em đã?', ['Trêu chọc bạn', 'Bắt chước dáng đi của bạn', 'Tránh xa bạn', 'Giúp đỡ bạn khi cần'], 3, 'Giúp bạn khuyết tật là phẩm chất tốt.'),
    Q('Mỗi sáng đi học, em luôn?', ['Đi muộn 15 phút', 'Đến đúng giờ', 'Đến trễ', 'Ở nhà ngủ'], 1, 'Đúng giờ là phẩm chất tốt.'),
    Q('Khi mẹ ốm, em đã?', ['Quan tâm và chăm sóc mẹ', 'Mặc kệ mẹ', 'Đi chơi với bạn', 'Đòi mẹ nấu cơm'], 0, 'Chăm mẹ ốm là yêu mẹ.'),
    Q('Tiền lì xì em đã?', ['Tiết kiệm bỏ heo', 'Vứt đi', 'Tiêu hết mua đồ chơi', 'Cho hết bạn'], 0, 'Tiết kiệm tiền lì xì là quý tiền.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Văn hoá Tết — Chúc Tết, lì xì', [
    Q('Tết đến, em chúc Tết ông bà thế nào?', ['"Ông bà cho con tiền"', '"Chúc ông bà mạnh khoẻ, sống lâu trăm tuổi"', '"Tết có gì mới không?"', 'Không chúc gì cả'], 1, 'Chúc sức khoẻ ông bà là chúc Tết lễ phép.'),
    Q('Nhận lì xì, em nên?', ['Cảm ơn và cất đi', 'Mở phong bao ngay xem được bao nhiêu', 'Chê tiền ít', 'Đòi thêm'], 0, 'Cảm ơn và cất đi là phép lịch sự.'),
    Q('Hành vi nào KHÔNG đẹp ngày Tết?', ['Cảm ơn người lì xì', 'Mặc đẹp đi chúc Tết', 'Chúc Tết ông bà', 'So bì tiền lì xì ít/nhiều'], 3, 'So bì tiền lì xì là không lịch sự.'),
    Q('Tiền lì xì nên dùng để?', ['Mua đồ chơi vô bổ', 'Tiết kiệm hoặc mua đồ dùng học tập', 'Khoe khoang với bạn', 'Đánh bạc cùng anh chị lớn'], 1, 'Tiết kiệm là dùng tiền có ích.'),
    Q('Phong tục Tết đẹp gồm?', ['Chúc Tết ông bà cha mẹ, mừng tuổi trẻ em', 'Bỏ nhà đi chơi cả Tết', 'Đập phá đồ đạc', 'Cãi nhau với họ hàng'], 0, 'Chúc Tết, mừng tuổi là nét đẹp văn hoá Việt.'),
  ]),

  M(20, 'Yêu thương gia đình', [
    Q('Gia đình là nơi?', ['Để mọi người cãi nhau', 'Chỉ để ngủ', 'Yêu thương, đùm bọc lẫn nhau', 'Nơi chỉ cần ăn cùng nhau là đủ'], 2, 'Gia đình là tổ ấm yêu thương.'),
    Q('Em thể hiện tình yêu gia đình bằng cách?', ['Hỗn láo với người lớn', 'Chỉ đòi hỏi quà', 'Cãi vã với anh chị', 'Vâng lời, giúp đỡ ông bà cha mẹ'], 3, 'Yêu gia đình là vâng lời và giúp đỡ.'),
    Q('Mẹ ốm, em nên làm gì?', ['Bật ti vi to', 'Đòi mẹ nấu món em thích', 'Đi chơi với bạn', 'Lấy nước, hỏi thăm và giúp mẹ việc nhà'], 3, 'Quan tâm mẹ ốm là yêu mẹ.'),
    Q('Sinh nhật bà, em làm gì?', ['Không nhớ', 'Đòi quà sinh nhật', 'Đi chơi không về', 'Chúc mừng bà và làm thiệp tặng bà'], 3, 'Nhớ sinh nhật bà là yêu bà.'),
    Q('Cuối tuần, gia đình em nên?', ['Mỗi người một phòng', 'Cùng ăn cơm, trò chuyện, đi chơi cùng nhau', 'Bố mẹ làm việc, con chơi điện thoại', 'Không quan tâm đến nhau'], 1, 'Quây quần là biểu hiện gia đình ấm áp.'),
  ]),

  M(21, 'Quan tâm hàng xóm láng giềng', [
    Q('Hàng xóm là?', ['Những người sống gần nhà em', 'Người không quen', 'Họ hàng ruột thịt', 'Người sống ở thành phố khác'], 0, 'Hàng xóm là láng giềng gần nhà.'),
    Q('Em nên đối xử với hàng xóm thế nào?', ['Lễ phép, thân thiện và giúp đỡ khi cần', 'Cãi nhau với hàng xóm', 'Tránh xa, không nói chuyện', 'Phá phách nhà hàng xóm'], 0, '"Bán anh em xa, mua láng giềng gần".'),
    Q('Gặp bác hàng xóm, em nên?', ['Giả vờ không thấy', 'Trêu chọc bác', 'Đi thẳng không chào', 'Lễ phép chào bác'], 3, 'Chào hỏi hàng xóm là lễ phép.'),
    Q('Bà hàng xóm bị ốm, em nên?', ['Sang hỏi thăm, giúp việc nhỏ', 'Mặc kệ vì không phải bà mình', 'Bật nhạc to phá giấc ngủ', 'Đùa giỡn trước nhà bà'], 0, 'Quan tâm hàng xóm là tình làng nghĩa xóm.'),
    Q('Hành vi nào KHÔNG nên với hàng xóm?', ['Chào hỏi hằng ngày', 'Mở nhạc rất to vào ban đêm', 'Mang quà sang biếu dịp lễ', 'Giúp xách đồ'], 1, 'Mở nhạc to làm ồn là thiếu tôn trọng.'),
  ]),

  M(22, 'Tiết kiệm tiền bạc', [
    Q('Đồng tiền do đâu mà có?', ['Tự nhiên có', 'Nhặt ngoài đường', 'Do trời cho', 'Do lao động làm ra'], 3, 'Tiền là kết quả của lao động.'),
    Q('Em nhận được tiền lì xì, em nên?', ['Khoe với mọi người', 'Cảm ơn và để dành mua đồ cần thiết', 'Tiêu hết ngay vào đồ chơi', 'Vứt đi không cần'], 1, 'Tiết kiệm và dùng đúng việc là quý tiền.'),
    Q('Bạn nào quý trọng tiền?', ['Bạn Lan bỏ ống heo tiết kiệm tiền tiêu vặt', 'Bạn Hùng đòi mua mọi thứ', 'Bạn Tú vứt tiền lẻ', 'Bạn Bình tiêu xài hoang phí'], 0, 'Tiết kiệm là quý tiền.'),
    Q('Hành vi nào LÃNG PHÍ tiền?', ['Để dành mua quà tặng mẹ', 'Tiết kiệm bỏ heo', 'Mua đồ chơi không cần thiết liên tục', 'Mua đồ dùng học tập'], 2, 'Mua đồ không cần thiết là lãng phí.'),
    Q('Em nhặt được tờ 50.000 đồng ở sân trường, em nên?', ['Bỏ túi mang về', 'Xé tờ tiền đi', 'Đưa cho bạn thân', 'Đem nộp cô giáo để trả lại người mất'], 3, 'Trả lại của rơi là thật thà.'),
  ]),

  M(23, 'An toàn khi sử dụng mạng (2)', [
    Q('Em chơi game online, có người lạ tặng tài khoản giá trị, em nên?', ['Nhận ngay vì miễn phí', 'Hẹn gặp ngoài đời', 'Trao đổi số điện thoại để cảm ơn', 'Từ chối và báo bố mẹ'], 3, 'Quà từ người lạ thường có ý đồ xấu.'),
    Q('Bạn rủ em đăng ảnh trẻ em (mặt mũi, đồng phục) lên mạng, em nên?', ['Khoe ảnh bạn nữ', 'Đăng ảnh cả lớp', 'Đăng cùng cho vui', 'Khuyên bạn không đăng và hỏi bố mẹ'], 3, 'Đăng ảnh trẻ em phải có sự đồng ý và cẩn trọng.'),
    Q('Tin nhắn lạ bảo "click vào link nhận thưởng", em nên?', ['Chia sẻ cho bạn cùng click', 'Bỏ qua, không click và báo bố mẹ', 'Nhập mật khẩu để nhận', 'Click ngay'], 1, 'Link lạ có thể chứa virus, lừa đảo.'),
    Q('Khi xem video YouTube, em nên?', ['Chọn kênh dành cho trẻ em, nhờ bố mẹ duyệt', 'Xem bất kỳ video nào', 'Xem video bạo lực', 'Xem video người lớn'], 0, 'Chọn nội dung phù hợp lứa tuổi là an toàn.'),
    Q('Có người trên mạng nói xấu, đe doạ em, em nên?', ['Khoá tài khoản và giấu chuyện', 'Báo ngay bố mẹ hoặc thầy cô', 'Im lặng chịu đựng', 'Đe doạ lại'], 1, 'Báo người lớn là cách giải quyết đúng.'),
  ]),

  M(24, 'Em yêu quê hương', [
    Q('Quê hương em là?', ['Chỉ là một địa danh trong sách', 'Nơi xa lạ', 'Nơi em chỉ ghé chơi vào dịp Tết', 'Nơi em sinh ra hoặc lớn lên'], 3, 'Quê hương là nơi em gắn bó.'),
    Q('Em yêu quê hương bằng cách?', ['Phá hoại làng xóm', 'Giữ gìn cảnh đẹp quê hương', 'Chê quê mình xấu', 'Vứt rác bừa bãi ở quê'], 1, 'Giữ gìn cảnh đẹp là yêu quê.'),
    Q('Quê hương em có thể có?', ['Em không biết quê mình', 'Chỉ có rác', 'Cây đa, giếng nước, sân đình hoặc phố phường, nhà cao tầng…', 'Không có gì cả'], 2, 'Quê hương nào cũng có nét đẹp riêng.'),
    Q('Bạn chê quê em "nhà quê", em nên?', ['Giải thích và tự hào về quê mình', 'Tự ti và buồn', 'Đánh bạn', 'Hùa theo bạn chê'], 0, 'Tự hào quê hương là biểu hiện tình yêu.'),
    Q('Hành vi nào yêu quê?', ['Bỏ quê đi không bao giờ về', 'Trồng cây xanh ở quê', 'Đập phá đình làng', 'Vẽ bậy lên di tích'], 1, 'Trồng cây làm đẹp quê hương.'),
  ]),

  M(25, 'Bảo vệ của công', [
    Q('Của công là gì?', ['Tài sản riêng của em', 'Tài sản của bố mẹ', 'Của hàng xóm', 'Tài sản chung của trường, lớp, xã hội'], 3, 'Của công là tài sản chung dùng cho mọi người.'),
    Q('Hành vi nào bảo vệ của công?', ['Vẽ bậy lên bàn', 'Đập phá ghế', 'Khắc tên lên tường', 'Dùng đồ dùng lớp cẩn thận'], 3, 'Dùng cẩn thận là bảo vệ của công.'),
    Q('Em thấy bạn đập ghế lớp, em nên?', ['Cười cổ vũ', 'Đập cùng cho vui', 'Khuyên bạn ngừng và báo cô', 'Mặc kệ bạn'], 2, 'Báo cô và khuyên bạn là bảo vệ của công.'),
    Q('Cây xanh, ghế đá ở công viên là?', ['Có thể bẻ về nhà', 'Của ai cũng được phá', 'Tài sản công, em cần bảo vệ', 'Của riêng em'], 2, 'Cây xanh, ghế đá là của công cộng.'),
    Q('Bạn nào biết bảo vệ của công?', ['Bạn Tú vẽ lên tường lớp', 'Bạn Hùng bẻ ghế', 'Bạn Lan tắt đèn lớp khi ra về', 'Bạn Mai khắc tên lên bàn'], 2, 'Tắt đèn là tiết kiệm, bảo vệ của công.'),
  ]),

  M(26, 'Tôn trọng nội quy', [
    Q('Nội quy lớp học là?', ['Không cần tuân theo', 'Để cô giáo phạt học sinh', 'Những quy định để lớp học có nề nếp', 'Điều ai cũng phải sợ'], 2, 'Nội quy giúp lớp học có trật tự.'),
    Q('Em đến lớp đúng giờ là?', ['Không liên quan đến nội quy', 'Vi phạm nội quy', 'Tuân thủ nội quy', 'Việc cô giáo bắt'], 2, 'Đúng giờ là tuân thủ nội quy đầu tiên.'),
    Q('Khi đi tham quan bảo tàng, em nên?', ['Vẽ bậy lên hiện vật', 'Đi nhẹ, nói khẽ, không sờ hiện vật', 'Sờ và lấy hiện vật ra xem', 'Chạy nhảy ầm ĩ'], 1, 'Tôn trọng nội quy bảo tàng là văn minh.'),
    Q('Đèn đỏ giao thông, em phải?', ['Tiếp tục đi', 'Lách qua', 'Đi nhanh hơn', 'Dừng lại'], 3, 'Đèn đỏ phải dừng lại là luật giao thông cơ bản.'),
    Q('Hành vi nào KHÔNG tôn trọng nội quy?', ['Xếp hàng vào lớp', 'Nói chuyện riêng trong giờ học', 'Mặc đồng phục đúng quy định', 'Giơ tay phát biểu'], 1, 'Nói chuyện riêng là vi phạm nội quy lớp học.'),
  ]),

  M(27, 'Nhận lỗi, sửa lỗi', [
    Q('Em làm vỡ cốc, em nên?', ['Đổ lỗi cho em bé', 'Giấu mảnh vỡ đi', 'Khóc không nhận lỗi', 'Xin lỗi mẹ và dọn dẹp cẩn thận'], 3, 'Nhận lỗi và sửa sai là biểu hiện trung thực.'),
    Q('Em quên làm bài tập, cô hỏi, em nên?', ['Nói dối là quên sách ở nhà', 'Khóc cho cô tha', 'Đổ lỗi cho mẹ', 'Thừa nhận và xin cô cho làm bù'], 3, 'Thừa nhận và sửa sai là đúng.'),
    Q('Em đánh em bé khiến em khóc, em nên?', ['Bảo em "không được mách mẹ"', 'Xin lỗi em và dỗ em', 'Đe doạ em', 'Đổ tại em hỗn'], 1, 'Xin lỗi và làm lành là biết nhận lỗi.'),
    Q('Sau khi nhận lỗi, em cần?', ['Cố gắng không tái phạm', 'Đổ lỗi tiếp', 'Nhớ mãi lỗi và không sửa', 'Tự ti mãi'], 0, 'Không tái phạm là sửa lỗi thật sự.'),
    Q('Bạn làm em đau, bạn xin lỗi, em nên?', ['Đánh lại bạn', 'Tha thứ cho bạn', 'Giận bạn mãi', 'Đòi bồi thường'], 1, 'Tha thứ là rộng lượng.'),
  ]),

  M(28, 'Yêu lao động', [
    Q('Vì sao em phải yêu lao động?', ['Vì bố mẹ bắt làm', 'Vì lười là xấu', 'Để được khen', 'Lao động giúp khoẻ mạnh và tạo của cải'], 3, 'Lao động đem lại sức khoẻ và giá trị.'),
    Q('Việc làm nào là yêu lao động?', ['Bắt em làm hộ', 'Vứt rác bừa bãi', 'Nằm cả ngày xem ti vi', 'Quét nhà giúp mẹ'], 3, 'Tự nguyện làm việc nhà là yêu lao động.'),
    Q('Mẹ đang nấu cơm, em nên?', ['Hỏi xem có giúp được gì không', 'Chê cơm mẹ nấu chậm', 'Đòi ăn ngay', 'Đi chơi tiếp'], 0, 'Chủ động giúp đỡ là yêu lao động.'),
    Q('Hành vi nào KHÔNG yêu lao động?', ['Rửa chén sau bữa ăn', 'Trốn việc, đùn việc cho người khác', 'Tự xếp chăn màn', 'Giúp bố tưới cây'], 1, 'Trốn việc là lười.'),
    Q('Tục ngữ nào nói về lao động?', ['Cả hai câu trên', '"Tay làm hàm nhai, tay quai miệng trễ"', '"Có làm thì mới có ăn"', 'Không có câu nào'], 0, 'Cả hai câu đều nói về giá trị lao động.'),
  ]),

  M(29, 'Trung thực trong học tập', [
    Q('Trung thực trong học tập là?', ['Cóp bài để được điểm cao', 'Nói dối cô về điểm', 'Sửa bài kiểm tra sau khi cô trả', 'Không gian dối, không cóp bài'], 3, 'Trung thực là không gian dối khi học.'),
    Q('Kiểm tra, em không nhớ bài, em nên?', ['Cóp bài bạn', 'Tự cố gắng làm, không quay cóp', 'Mở sách ra xem', 'Hỏi bạn nhỏ tiếng'], 1, 'Tự làm là trung thực.'),
    Q('Bạn đưa em xem bài kiểm tra, em nên?', ['Khoe với bạn khác', 'Chép luôn cho nhanh', 'Cảm ơn rồi chép', 'Từ chối và tự làm'], 3, 'Từ chối chép là trung thực.'),
    Q('Em làm bài sai nhưng cô chấm thành đúng, em nên?', ['Mừng thầm', 'Báo cô để cô chấm lại', 'Im lặng nhận điểm cao', 'Khoe điểm cao với bạn'], 1, 'Báo cô là trung thực.'),
    Q('Hành vi nào KHÔNG trung thực?', ['Nhận lỗi khi sai', 'Sửa điểm trong sổ liên lạc', 'Nói thật với cô', 'Tự làm bài'], 1, 'Sửa điểm là gian dối.'),
  ]),

  M(30, 'Tôn trọng người khác', [
    Q('Tôn trọng người khác là?', ['Chê bai ngoại hình người khác', 'Nói xấu sau lưng', 'Chế giễu vùng miền', 'Lắng nghe, không xúc phạm, không kì thị'], 3, 'Tôn trọng là không xúc phạm ai.'),
    Q('Bạn nói giọng vùng miền khác, em nên?', ['Chê giọng bạn khó nghe', 'Tôn trọng, không nhại', 'Nhại giọng bạn để cười', 'Tẩy chay bạn'], 1, 'Mỗi vùng miền có nét đẹp riêng, đáng tôn trọng.'),
    Q('Bạn theo tôn giáo khác em, em nên?', ['Tôn trọng tín ngưỡng của bạn', 'Chê tôn giáo bạn', 'Tẩy chay bạn', 'Bắt bạn bỏ tôn giáo'], 0, 'Tôn trọng tín ngưỡng là quyền cơ bản của con người.'),
    Q('Người khuyết tật trên đường, em nên?', ['Chỉ trỏ bàn tán', 'Chế nhạo họ', 'Tôn trọng và giúp đỡ khi cần', 'Tránh xa như bệnh tật'], 2, 'Người khuyết tật đáng được tôn trọng và quan tâm.'),
    Q('Hành vi nào KHÔNG tôn trọng người khác?', ['Bịa chuyện nói xấu bạn', 'Giúp bạn khi bạn cần', 'Lắng nghe bạn kể chuyện', 'Khen bạn khi bạn làm tốt'], 0, 'Bịa chuyện nói xấu là xúc phạm người khác.'),
  ]),

  M(31, 'Sử dụng đồ dùng cá nhân', [
    Q('Đồ dùng cá nhân của em (cặp, vở, bút) em nên?', ['Giữ gìn cẩn thận, dùng lâu dài', 'Mất rồi mua mới', 'Đập phá cho vui', 'Vứt bừa bãi'], 0, 'Giữ gìn đồ dùng là tiết kiệm và trách nhiệm.'),
    Q('Bạn mượn bút em làm hỏng, em nên?', ['Lấy đồ bạn để trả thù', 'Nhắc bạn cẩn thận lần sau', 'Đánh bạn', 'Mách cô bắt phạt bạn'], 1, 'Nhắc nhở nhẹ nhàng là cách đúng.'),
    Q('Đồ dùng em không dùng nữa nhưng còn tốt, em nên?', ['Đập phá', 'Tặng em nhỏ hoặc bạn nghèo', 'Vứt đi', 'Cất xó cho mục'], 1, 'Tặng người khác là biết tiết kiệm và chia sẻ.'),
    Q('Bạn nào dùng đồ tốt?', ['Bạn Tú mỗi tháng đòi mua cặp mới', 'Bạn Lan dùng 1 chiếc cặp 3 năm vẫn đẹp', 'Bạn Hùng xé sách làm máy bay', 'Bạn Mai vẽ bậy lên cặp'], 1, 'Giữ đồ bền là tiết kiệm.'),
    Q('Trước khi cất đồ, em nên?', ['Vứt vào góc', 'Để đồ ướt vào cặp', 'Nhét lung tung', 'Lau sạch và xếp gọn gàng'], 3, 'Gọn gàng giúp đồ bền và dễ tìm.'),
  ]),

  M(32, 'Em là người tử tế', [
    Q('Tử tế là gì?', ['Chỉ giúp khi được trả công', 'Chỉ giúp người thân', 'Lạnh lùng với người lạ', 'Đối xử tốt, lễ phép với mọi người'], 3, 'Tử tế là tốt với tất cả mọi người.'),
    Q('Em thấy người ngã ngoài đường, em nên?', ['Cười nhạo', 'Đỡ giúp hoặc gọi người lớn giúp', 'Chụp ảnh đăng mạng', 'Đi qua nhanh'], 1, 'Giúp người gặp khó khăn là tử tế.'),
    Q('Khi nói "cảm ơn" và "xin lỗi" là?', ['Biểu hiện văn minh, tử tế', 'Chỉ trẻ con mới nói', 'Không cần thiết', 'Yếu đuối'], 0, '"Cảm ơn" và "xin lỗi" là cốt lõi của lịch sự.'),
    Q('Bạn nào tử tế?', ['Bạn Lan cười chế nhạo người gặp nạn', 'Bạn An nhường chỗ cho bà bầu trên xe buýt', 'Bạn Tú chen lấn người già', 'Bạn Hùng quát người bán hàng rong'], 1, 'Nhường chỗ là biểu hiện tử tế.'),
    Q('Tử tế cần thể hiện ở đâu?', ['Chỉ ở nhà', 'Mọi lúc, mọi nơi với mọi người', 'Chỉ ở lớp', 'Chỉ khi có người nhìn'], 1, 'Tử tế là phẩm chất phải có mọi lúc.'),
  ]),

  M(33, 'Em yêu thiên nhiên', [
    Q('Thiên nhiên gồm?', ['Chỉ nhà cao tầng', 'Chỉ đồ chơi', 'Cây cối, sông núi, biển, động vật…', 'Chỉ con người'], 2, 'Thiên nhiên gồm tất cả những gì không do con người tạo ra.'),
    Q('Em yêu thiên nhiên bằng cách?', ['Vẽ bậy lên thân cây', 'Trồng cây, bảo vệ động vật, không xả rác', 'Bẻ cành, hái hoa', 'Bắt và làm hại động vật nhỏ'], 1, 'Bảo vệ là biểu hiện yêu thiên nhiên.'),
    Q('Thấy bạn bắt chim non, em nên?', ['Khuyên bạn thả chim về tổ', 'Mặc kệ', 'Bắt cùng cho vui', 'Cười cổ vũ'], 0, 'Khuyên bạn thả chim là bảo vệ động vật.'),
    Q('Hành vi nào yêu thiên nhiên?', ['Đốt rừng', 'Săn bắt thú quý hiếm', 'Tham gia trồng cây nhân ngày Cây xanh', 'Đổ dầu xuống biển'], 2, 'Trồng cây là yêu thiên nhiên.'),
    Q('Động vật nào cần được bảo vệ đặc biệt?', ['Không cần bảo vệ loài nào', 'Các loài quý hiếm như voi, hổ, tê giác…', 'Tất cả côn trùng phải diệt', 'Chỉ loài có ích cho người'], 1, 'Loài quý hiếm cần được bảo vệ khỏi tuyệt chủng.'),
  ]),

  M(34, 'Trách nhiệm với việc của mình', [
    Q('Trách nhiệm là?', ['Né tránh việc khó', 'Tự làm việc của mình và chịu kết quả', 'Bắt người khác làm hộ', 'Đổ lỗi khi sai'], 1, 'Trách nhiệm là tự gánh việc của mình.'),
    Q('Việc học là trách nhiệm của ai?', ['Của chính em', 'Của bố mẹ', 'Của bạn bè', 'Của cô giáo'], 0, 'Học là việc của chính em.'),
    Q('Em được phân công trực nhật, em nên?', ['Đổ lỗi cho bạn không làm', 'Làm đầy đủ và sạch sẽ', 'Làm qua loa', 'Trốn việc cho bạn làm'], 1, 'Hoàn thành nhiệm vụ là có trách nhiệm.'),
    Q('Em làm hỏng đồ của bạn, em nên?', ['Giấu đi', 'Đổ lỗi cho người khác', 'Chạy về nhà', 'Xin lỗi và sửa hoặc đền bù'], 3, 'Chịu trách nhiệm về hành vi của mình là đúng.'),
    Q('Hành vi nào có trách nhiệm?', ['Quên làm bài thường xuyên', 'Bỏ trực nhật', 'Hoàn thành bài tập đúng hạn', 'Đổ lỗi quên sách cho mẹ'], 2, 'Hoàn thành bài tập là biểu hiện trách nhiệm với việc học.'),
  ]),

  M(35, 'Tổng kết HK2 — Em rèn luyện phẩm chất', [
    Q('Phẩm chất quan trọng nhất em đã rèn luyện trong năm là?', ['Chỉ cần ngoan', 'Chỉ cần học giỏi', 'Tất cả các phẩm chất: yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm', 'Không cần phẩm chất gì'], 2, '5 phẩm chất là nền tảng của CT GDPT 2018.'),
    Q('Trong năm, em đã giúp người yếu thế khi?', ['Không bao giờ', 'Chỉ khi có người khen', 'Chỉ khi được trả công', 'Khi gặp bất kì ai cần giúp đỡ'], 3, 'Giúp đỡ vì lòng nhân ái, không vì lợi ích.'),
    Q('Em đã bảo vệ môi trường bằng cách?', ['Đốt rác bừa bãi', 'Vứt rác bừa bãi', 'Vứt rác đúng nơi, tiết kiệm điện nước', 'Đập phá cây xanh'], 2, 'Hành động nhỏ mỗi ngày là bảo vệ môi trường.'),
    Q('An toàn trên mạng em đã làm gì?', ['Hẹn gặp người lạ trên mạng', 'Không cho người lạ thông tin cá nhân', 'Click vào mọi link lạ', 'Cho ai xin cũng đưa'], 1, 'Cẩn trọng với người lạ trên mạng là an toàn.'),
    Q('Bước sang lớp 4, em cần làm gì?', ['Học vì điểm số', 'Quên hết những điều đã học', 'Nghỉ ngơi không cần cố gắng', 'Tiếp tục rèn luyện phẩm chất và học tập tốt hơn'], 3, 'Học tập và rèn luyện là quá trình suốt đời.'),
  ], { difficulty: 2 }),
];

export const P3DD_SCENARIOS = indexBy(P3DD_WEEKS);
