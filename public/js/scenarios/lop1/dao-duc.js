// ============================================================
// Lớp 1 · ĐẠO ĐỨC — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 chủ đề Tết)
// Bám SGK Đạo đức Lớp 1 (CTGD 2018): yêu thương gia đình, lễ phép,
// đoàn kết bạn bè, gọn gàng, trung thực, an toàn khi chơi…
// ID prefix: "P1DD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1DD', 'dao-duc', n, title, qs, opts);

export const P1DD_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Em là học sinh lớp 1', [
    Q('Em đã là học sinh lớp mấy?', ['Lớp lá mẫu giáo', 'Lớp 1', 'Mầm non', 'Lớp 1 buổi chiều'], 1, 'Em đã lên lớp 1 — một bạn nhỏ học sinh tiểu học.'),
    Q('Đến trường em được làm gì vui nhất?', ['Học chữ, học số và chơi cùng bạn', 'Ăn quà vặt', 'Xem ti vi', 'Ngủ cả ngày'], 0, 'Trường là nơi em học và vui chơi cùng bạn bè, thầy cô.'),
    Q('Buổi sáng đi học, em cảm thấy thế nào là đúng?', ['Trốn không đi', 'Háo hức, vui vẻ', 'Buồn bã, khóc', 'Cáu gắt với bố mẹ'], 1, 'Đi học là niềm vui — em hãy đến lớp với tinh thần háo hức.'),
    Q('Gặp cô giáo lần đầu, em nên nói gì?', ['Im lặng quay đi', 'Cười rồi bỏ đi', '"Ê cô"', 'Khoanh tay: "Con chào cô ạ"'], 3, 'Lời chào lễ phép giúp em được cô yêu mến.'),
    Q('Bạn nào em nên kết thân?', ['Bạn hay đánh nhau', 'Bạn hay trêu chọc người khác', 'Bạn nói tục', 'Bạn vui vẻ, biết giúp đỡ'], 3, 'Bạn tốt là bạn hiền lành, biết quan tâm.'),
    Q('Là học sinh lớp 1, em cần chuẩn bị gì khi đi học?', ['Bánh kẹo', 'Điện thoại', 'Đồ chơi', 'Sách vở, bút, cặp'], 3, 'Sách vở, bút, cặp là đồ dùng học tập cần thiết.'),
  ]),

  M(2, 'Gọn gàng, sạch sẽ', [
    Q('Trước khi đi học, em cần làm gì?', ['Đánh răng, rửa mặt, chải tóc', 'Ăn kẹo cho thơm miệng', 'Bỏ qua, lên xe đi luôn', 'Xem hoạt hình'], 0, 'Vệ sinh cá nhân buổi sáng giúp em gọn gàng, tự tin.'),
    Q('Quần áo bị bẩn, em nên?', ['Cứ mặc tiếp', 'Giấu vào tủ', 'Bảo mẹ giúp thay đồ sạch', 'Vứt đi luôn'], 2, 'Quần áo bẩn cần thay để giữ vệ sinh.'),
    Q('Sau khi chơi xong, em làm gì với đồ chơi?', ['Vứt đi', 'Để vương vãi khắp nhà', 'Đem cho bạn hết', 'Cất gọn vào hộp'], 3, 'Cất đồ chơi đúng chỗ là biểu hiện gọn gàng.'),
    Q('Cặp sách của em nên?', ['Vứt giữa nhà', 'Mang theo lên giường ngủ', 'Treo ở giá hoặc để gọn vào góc', 'Cho em bé nhai'], 2, 'Cất cặp đúng chỗ giúp sáng mai dễ tìm.'),
    Q('Tay bẩn, trước khi ăn em phải?', ['Liếm tay', 'Lau vào quần áo', 'Ăn luôn', 'Rửa tay bằng xà phòng'], 3, 'Rửa tay với xà phòng giúp em không bị đau bụng.'),
    Q('Móng tay em nên?', ['Sơn màu sặc sỡ', 'Để dài, nhọn', 'Cắt ngắn, sạch sẽ', 'Cắn móng cho ngắn'], 2, 'Móng tay cắt gọn, sạch — không cắn móng.'),
  ]),

  M(3, 'Yêu thương ông bà, cha mẹ', [
    Q('Đi học về, em nên làm gì TRƯỚC?', ['Vào phòng riêng', 'Chào ông bà, cha mẹ', 'Mở tủ lạnh', 'Bật ti vi'], 1, 'Chào hỏi là biểu hiện đầu tiên của sự lễ phép, yêu thương.'),
    Q('Mẹ đi làm về mệt, em nên?', ['Quát mẹ vì chưa nấu cơm', 'Mặc kệ mẹ', 'Đòi mẹ mua đồ chơi', 'Lấy nước mời mẹ uống'], 3, 'Một li nước nhỏ thôi cũng làm mẹ vui.'),
    Q('Khi ông bà bị ốm, em nên?', ['Bật nhạc to', 'Hỏi thăm và mang nước cho ông bà', 'Chơi to tiếng cho vui nhà', 'Trốn ra ngoài chơi'], 1, 'Hỏi thăm ông bà là biểu hiện yêu thương.'),
    Q('Lời nào lễ phép với bố mẹ?', ['"Mẹ mau lên"', '"Mẹ ơi, con xin nước ạ"', '"Mẹ làm hộ con đi"', '"Ê mẹ, lấy nước đi"'], 1, '"Mẹ ơi… ạ" là cách nói lễ phép, thân thương.'),
    Q('Bạn nào yêu thương cha mẹ?', ['Bạn An giúp mẹ quét nhà', 'Bạn Hùng đòi tiền mua đồ chơi', 'Bạn Lan giận mẹ vì không cho xem ti vi', 'Bạn Tú cãi lời mẹ'], 0, 'Giúp đỡ mẹ việc nhỏ trong nhà là biểu hiện yêu thương.'),
    Q('Sinh nhật mẹ, em có thể tặng gì?', ['Quên luôn', 'Tự vẽ tranh tặng mẹ', 'Đòi mẹ tự mua quà', 'Không tặng gì'], 1, 'Món quà tự tay làm thể hiện tình cảm chân thành.'),
  ]),

  M(4, 'Lễ phép với anh chị, nhường nhịn em nhỏ', [
    Q('Anh chị nhờ em việc nhỏ, em nên?', ['Nói "Không thèm"', 'Bỏ chạy', 'Cáu gắt: "Tự làm đi"', 'Vui vẻ giúp'], 3, 'Giúp anh chị việc nhỏ là biểu hiện yêu thương.'),
    Q('Khi nói với anh chị, em xưng?', ['"Em" và gọi "anh/chị"', '"Mày – tao"', 'Xưng "tớ" và gọi "cậu"', '"Ông/bà"'], 0, 'Xưng "em – anh/chị" là cách xưng hô đúng trong gia đình.'),
    Q('Em bé khóc đòi đồ chơi của em, em nên?', ['Mách mẹ ngay', 'Đánh em', 'Nhường cho em chơi cùng', 'Giấu đi không cho'], 2, 'Nhường nhịn em nhỏ là biểu hiện anh/chị tốt.'),
    Q('Anh trai đang học bài, em nên?', ['Chơi yên lặng để anh tập trung', 'Bật ti vi to', 'Chạy nhảy quanh anh', 'Hét thật to'], 0, 'Giữ yên lặng giúp anh học tốt.'),
    Q('Bạn nào biết nhường em?', ['Bạn Bình giật đồ của em', 'Bạn Hà mắng em khóc', 'Bạn Mai chia bánh cho em', 'Bạn Tú giấu hết kẹo'], 2, 'Chia sẻ với em là biểu hiện thương em.'),
    Q('Anh chị làm sai, em nên?', ['Nhẹ nhàng nói chuyện với anh chị', 'Bắt chước theo', 'Mách bố mẹ ngay để anh chị bị mắng', 'Cười nhạo anh chị'], 0, 'Nói chuyện nhẹ nhàng tốt hơn là đi mách.'),
  ]),

  M(5, 'Đi học đúng giờ', [
    Q('Vì sao em phải đi học đúng giờ?', ['Vì sợ bị phạt', 'Để được khen', 'Để không bỏ lỡ bài học', 'Vì ai cũng đi'], 2, 'Đi đúng giờ giúp em không bị bỏ lỡ bài.'),
    Q('Để đi học đúng giờ, tối hôm trước em nên?', ['Xem ti vi đến khuya', 'Đợi mẹ nhắc mới ngủ', 'Đi ngủ sớm và soạn sách', 'Chơi điện thoại'], 2, 'Ngủ sớm và soạn sách giúp sáng mai không vội vàng.'),
    Q('Sáng nay em dậy muộn, em nên?', ['Bỏ học luôn', 'Nhanh chuẩn bị và xin lỗi cô khi đến lớp', 'Đi rất chậm cho bõ tức', 'Đổ lỗi cho mẹ'], 1, 'Đến lớp và xin lỗi là hành vi đúng.'),
    Q('Đến lớp muộn làm ảnh hưởng đến ai?', ['Cả lớp và cô giáo đang dạy', 'Chỉ mình em', 'Không ảnh hưởng ai', 'Chỉ bố mẹ ở nhà'], 0, 'Đến muộn làm gián đoạn giờ học của cả lớp.'),
    Q('Em nên đến lớp trước giờ học bao nhiêu phút?', ['Trước 5–10 phút', 'Đến lúc tan học', 'Sau khi cô đã giảng', 'Đến đúng lúc kẻng'], 0, 'Đến sớm 5–10 phút là vừa đẹp.'),
    Q('Bạn nào đi học đúng giờ?', ['Bạn Hùng vừa đi vừa ăn sáng đến muộn', 'Bạn Lan đến lớp lúc 7h15 khi 7h30 vào học', 'Bạn Tú đến lúc 8h', 'Bạn Bình hay nghỉ'], 1, 'Đến trước giờ học là biểu hiện đúng giờ.'),
  ]),

  M(6, 'Giữ gìn sách vở, đồ dùng học tập', [
    Q('Sách của em nên?', ['Xé giấy gấp máy bay', 'Bọc bìa cẩn thận', 'Vứt lung tung', 'Vẽ bậy lên trang'], 1, 'Bọc bìa giúp sách bền lâu, sạch đẹp.'),
    Q('Bút bị mất nắp, em nên?', ['Vứt luôn', 'Tìm nắp đậy lại', 'Để mực dính vào cặp', 'Mua cây mới ngay'], 1, 'Đậy nắp giúp bút không khô, không bẩn cặp.'),
    Q('Vở viết, em nên?', ['Xé trang gấp máy bay', 'Để rơi xuống đất', 'Vẽ lung tung khắp trang', 'Giữ sạch, viết cẩn thận'], 3, 'Vở sạch chữ đẹp là điều ai cũng quý.'),
    Q('Bạn nào giữ đồ dùng tốt?', ['Bạn Mai cất bút vào hộp sau khi học', 'Bạn Tú vứt cặp xuống đất', 'Bạn Hà xé vở', 'Bạn An bẻ thước'], 0, 'Cất gọn đồ dùng là biểu hiện biết giữ gìn.'),
    Q('Đồ dùng học tập tốt giúp em?', ['Làm vũ khí', 'Học tập thuận lợi hơn', 'Đem đi đổi quà', 'Khoe với bạn'], 1, 'Sách bút đầy đủ và sạch sẽ giúp em học tốt.'),
    Q('Cuối ngày, em soạn cặp khi nào?', ['Bảo mẹ soạn hộ', 'Không cần soạn', 'Sáng mai mới soạn cho nhanh', 'Tối trước khi đi ngủ'], 3, 'Soạn cặp tối hôm trước giúp sáng mai không quên gì.'),
  ]),

  M(7, 'Lễ phép với thầy cô giáo', [
    Q('Gặp cô giáo ngoài cổng trường, em nên?', ['Đi thẳng', 'Cười lớn rồi chạy', 'Giả vờ không thấy', 'Cúi đầu lễ phép chào cô'], 3, 'Chào cô là biểu hiện lễ phép cơ bản.'),
    Q('Khi cô đang giảng bài, em nên?', ['Nằm gục xuống bàn', 'Lắng nghe, không nói chuyện riêng', 'Nói chuyện với bạn', 'Lấy đồ chơi ra'], 1, 'Lắng nghe là tôn trọng cô và bạn bè.'),
    Q('Muốn phát biểu, em làm gì?', ['Nói to ngay', 'Đập bàn', 'Đứng dậy nói luôn', 'Giơ tay xin phép cô'], 3, 'Giơ tay xin phép là phép lịch sự trong lớp.'),
    Q('Lời nào lễ phép với cô?', ['"Ê cô"', '"Cô ơi, ra đây"', '"Cô làm đi"', '"Thưa cô, cho con hỏi ạ"'], 3, '"Thưa cô… ạ" là cách xưng hô lễ phép.'),
    Q('Cô nhắc nhở em vì làm sai, em nên?', ['Khóc ăn vạ', 'Cãi lại cô', 'Bỏ ra ngoài', 'Lắng nghe và xin lỗi cô'], 3, 'Lắng nghe và sửa sai là biểu hiện ngoan.'),
    Q('Bạn nào lễ phép với cô?', ['Bạn Tú gọi cô là "bà ấy"', 'Bạn Nam nhại lời cô', 'Bạn Lan trêu cô', 'Bạn Hoa chào cô khi gặp ngoài đường'], 3, 'Chào cô ở bất cứ đâu là lễ phép.'),
  ]),

  M(8, 'Đoàn kết, thương yêu bạn bè', [
    Q('Bạn em bị ngã, em nên?', ['Đỡ bạn dậy và hỏi thăm', 'Chụp ảnh khoe bạn khác', 'Đứng nhìn rồi đi tiếp', 'Cười cợt'], 0, 'Đỡ bạn dậy là biểu hiện yêu thương.'),
    Q('Bạn quên bút, em nên?', ['Cười nhạo bạn', 'Mặc kệ bạn', 'Cho bạn mượn', 'Giấu bút của mình'], 2, 'Cho bạn mượn bút là biểu hiện đoàn kết.'),
    Q('Khi chơi cùng bạn, em nên?', ['Chia sẻ, chơi vui vẻ', 'Tranh giành đồ chơi', 'Chỉ chơi một mình', 'Đánh bạn nếu thua'], 0, 'Chia sẻ giúp ai cũng vui.'),
    Q('Bạn buồn vì bị mẹ mắng, em nên?', ['Mặc kệ', 'An ủi và rủ bạn cùng chơi', 'Trêu cho bạn buồn hơn', 'Đi mách thầy cô'], 1, 'Một lời an ủi nhẹ làm bạn vui hơn nhiều.'),
    Q('Hai bạn cãi nhau, em nên?', ['Đứng về phía bạn thân', 'Đứng xem cho vui', 'Bỏ chạy', 'Khuyên cả hai làm hoà'], 3, 'Hoà giải giúp lớp đoàn kết.'),
    Q('Bạn nào đoàn kết tốt?', ['Bạn Hà nói xấu bạn', 'Bạn Hùng đánh bạn', 'Bạn Mai chia bánh cho cả bàn', 'Bạn Tú chê bạn khác xấu'], 2, 'Chia sẻ là biểu hiện đoàn kết.'),
  ]),

  M(9, 'Sinh hoạt nền nếp', [
    Q('Buổi sáng em nên thức dậy lúc?', ['11 giờ', '10 giờ sáng', '12 giờ', '6 giờ — giờ quen của em'], 3, 'Dậy sớm giúp em có thời gian chuẩn bị đi học.'),
    Q('Đến giờ ngủ, em nên?', ['Đánh răng rồi đi ngủ đúng giờ', 'Xem ti vi đến khuya', 'Lén dậy chơi điện thoại', 'Đòi mẹ kể chuyện đến 12 giờ'], 0, 'Đi ngủ đúng giờ giúp em khoẻ mạnh.'),
    Q('Ăn cơm em nên?', ['Bỏ bữa', 'Ngồi ngay ngắn, ăn đúng bữa', 'Vừa ăn vừa chạy', 'Vừa ăn vừa xem ti vi'], 1, 'Ăn đúng bữa, ngồi ngay ngắn là nền nếp tốt.'),
    Q('Việc nào nên làm hàng ngày?', ['Tập thể dục buổi sáng', 'Thức khuya xem ti vi', 'Bỏ bữa sáng', 'Không tắm rửa'], 0, 'Tập thể dục mỗi sáng giúp em khoẻ và nhanh nhẹn.'),
    Q('Lịch sinh hoạt tốt là?', ['Thức khuya, dậy muộn', 'Tuỳ thích lúc nào cũng được', 'Học – chơi – ngủ đúng giờ', 'Bỏ bữa, ngủ ngày'], 2, 'Nề nếp đúng giờ là thói quen tốt.'),
    Q('Bạn nào sinh hoạt nền nếp?', ['Bạn Tú thức đến 12h đêm', 'Bạn Lan thức dậy 6h, đi ngủ 9h', 'Bạn Hà bỏ ăn sáng', 'Bạn Mai ngủ ngày'], 1, 'Đi ngủ và thức dậy đúng giờ là nền nếp.'),
  ]),

  M(10, 'Chăm chỉ học tập', [
    Q('Đến giờ học bài, em nên?', ['Trì hoãn đến mai', 'Đợi mẹ nhắc 5 lần', 'Vừa học vừa chơi', 'Học ngay'], 3, 'Chủ động học bài là biểu hiện chăm chỉ.'),
    Q('Bài khó em làm sao?', ['Suy nghĩ, hỏi cô hoặc bố mẹ', 'Chép bạn', 'Bỏ qua luôn', 'Đoán bừa một đáp án rồi nộp'], 0, 'Cố gắng suy nghĩ và hỏi là cách học tốt.'),
    Q('Trước khi đến lớp em nên?', ['Quên hết bài cũ', 'Ngủ thêm', 'Xem hoạt hình', 'Đọc trước bài mới'], 3, 'Đọc trước bài giúp em hiểu nhanh hơn khi cô giảng.'),
    Q('Bạn nào chăm chỉ?', ['Bạn Bình chép bài bạn', 'Bạn Tú quên làm bài', 'Bạn Mai làm bài tập đầy đủ mỗi tối', 'Bạn Hà ngủ trong giờ học'], 2, 'Làm bài tập đầy đủ là biểu hiện chăm chỉ.'),
    Q('Khi cô giao bài về nhà, em nên?', ['Quên luôn', 'Ghi vào sổ và làm đầy đủ', 'Cãi cô không làm', 'Bảo bạn làm hộ'], 1, 'Ghi bài và hoàn thành là điều ngoan.'),
    Q('Chăm học giúp em?', ['Bị bạn chê', 'Mệt mỏi vô ích', 'Học giỏi, hiểu bài', 'Không ai khen'], 2, 'Chăm chỉ là chìa khoá để học giỏi.'),
  ]),

  M(11, 'Chào hỏi, cảm ơn, xin lỗi', [
    Q('Gặp bác hàng xóm, em nên?', ['Cười rồi chạy', '"Ê bác"', '"Cháu chào bác ạ"', 'Đi thẳng'], 2, 'Chào hỏi lễ phép thể hiện em là cháu ngoan.'),
    Q('Ai đó cho em quà, em nói gì?', ['Cảm ơn ạ', 'Không nói gì', 'Đòi thêm', '"Có vậy thôi à"'], 0, 'Nói "cảm ơn" là biểu hiện biết ơn.'),
    Q('Em vô tình va vào bạn, em nói gì?', ['Bỏ chạy', 'Mắng lại bạn', 'Cười như không có gì', 'Xin lỗi bạn'], 3, '"Xin lỗi" giúp tình bạn bền chặt.'),
    Q('Bạn cho em mượn bút, em nên?', ['Cảm ơn và trả bạn khi xong', 'Đòi mượn cả hộp bút', 'Không nói gì', 'Cảm ơn bạn rồi giữ luôn'], 0, 'Cảm ơn và trả đúng là phép lịch sự.'),
    Q('Khi làm sai em nên?', ['Đổ lỗi cho người khác', 'Xin lỗi và sửa sai', 'Khóc ăn vạ', 'Bỏ chạy'], 1, 'Xin lỗi là biểu hiện trung thực và biết nhận lỗi.'),
    Q('Bạn nào lễ phép?', ['Bạn Hà cãi người lớn', 'Bạn Bình nói tục', 'Bạn Tú không bao giờ chào ai', 'Bạn Lan biết cảm ơn và xin lỗi'], 3, 'Cảm ơn, xin lỗi là dấu hiệu của bạn nhỏ ngoan.'),
  ]),

  M(12, 'Trung thực', [
    Q('Em đánh vỡ chiếc cốc, em nên?', ['Khóc to cho mẹ thương', 'Đổ tại em bé', 'Nhận lỗi với mẹ', 'Giấu mảnh vỡ đi'], 2, 'Nhận lỗi là biểu hiện trung thực.'),
    Q('Em nhặt được 10 nghìn ở sân trường, em nên?', ['Giấu vào túi', 'Cho bạn thân', 'Đưa cô giáo trả người mất', 'Đi mua quà luôn'], 2, 'Trả lại đồ nhặt được là biểu hiện trung thực.'),
    Q('Bạn rủ em chép bài kiểm tra, em nên?', ['Hô cô giáo phạt bạn', 'Từ chối và tự làm', 'Đe doạ bạn', 'Chép cùng cho vui'], 1, 'Tự làm bài là trung thực với chính mình.'),
    Q('Mẹ hỏi "Con đã làm bài chưa?", chưa làm em nên?', ['Nói dối là làm rồi', 'Nói là quên vở bài tập ở lớp', 'Nói thật và làm ngay', 'Im lặng'], 2, 'Nói thật và hoàn thành ngay là tốt nhất.'),
    Q('Trung thực nghĩa là?', ['Giữ bí mật xấu', 'Đổ lỗi cho người khác', 'Nói thật và làm thật', 'Nói dối khéo'], 2, 'Trung thực là sống thật, không gian dối.'),
    Q('Bạn nào trung thực?', ['Bạn Tú đổ lỗi cho bạn khác', 'Bạn Hà nói dối mẹ', 'Bạn An tự nhận lỗi khi làm sai', 'Bạn Bình chép bài bạn'], 2, 'Tự nhận lỗi là biểu hiện trung thực.'),
  ]),

  M(13, 'Tự giác làm việc của mình', [
    Q('Sáng mai đi học, ai soạn sách vở?', ['Mẹ soạn', 'Anh chị soạn', 'Em tự soạn', 'Bố soạn'], 2, 'Tự soạn sách là biểu hiện tự giác.'),
    Q('Đến giờ học bài, em nên?', ['Đi chơi đã', 'Đợi mẹ nhắc', 'Vờ quên', 'Tự ngồi vào bàn học'], 3, 'Tự giác ngồi học là biểu hiện ngoan.'),
    Q('Quần áo ngủ của em, ai cất?', ['Vứt xuống đất', 'Mẹ cất', 'Để giữa giường', 'Em tự gấp và cất'], 3, 'Tự gấp quần áo là việc nhỏ rất đáng khen.'),
    Q('Bạn nào tự giác?', ['Bạn Mai tự đánh răng mỗi tối', 'Bạn Bình bảo mẹ làm bài hộ', 'Bạn Tú đợi mẹ chải đầu', 'Bạn Hà nhờ mẹ mặc quần áo'], 0, 'Việc của mình em tự làm — đó là tự giác.'),
    Q('Đi học về, ai cất cặp?', ['Mẹ cất', 'Em tự cất', 'Em bé cất', 'Vứt ngoài cửa'], 1, 'Tự cất cặp là việc của em.'),
    Q('Tự giác giúp em?', ['Mệt mỏi', 'Bị bố mẹ mắng', 'Trưởng thành, được tin yêu', 'Bị bạn chê'], 2, 'Tự giác giúp em lớn lên và được tin yêu.'),
  ]),

  M(14, 'Lời nói lịch sự', [
    Q('Khi nhờ bạn, em nên nói?', ['"Phải làm ngay"', '"Làm cho tao"', '"Cậu giúp tớ với"', '"Mày làm đi"'], 2, 'Lời nói nhẹ nhàng khiến bạn vui giúp.'),
    Q('Em được cô khen, em nên?', ['Cảm ơn cô và tiếp tục cố gắng', 'Vênh váo với bạn', 'Khoe khắp lớp', 'Chê bạn khác kém'], 0, 'Khiêm tốn khi được khen là tốt.'),
    Q('Khi muốn xin phép ra ngoài, em nên?', ['"Thưa cô, cho con ra ngoài ạ"', 'Đứng dậy bỏ ra', 'Hét lên', 'Chạy thẳng ra'], 0, 'Xin phép là phép lịch sự cơ bản.'),
    Q('Lời nào KHÔNG lịch sự?', ['"Cho mình mượn nhé"', '"Cảm ơn"', '"Cút đi"', '"Xin lỗi"'], 2, '"Cút đi" là lời nói thô lỗ.'),
    Q('Khi không đồng ý với bạn, em nên?', ['Bỏ chạy', 'Quát bạn', 'Đánh bạn', 'Nói nhẹ nhàng lí do'], 3, 'Trình bày nhẹ nhàng giúp giữ tình bạn.'),
    Q('Bạn nào nói lịch sự?', ['Bạn Mai luôn dùng "ạ", "vâng"', 'Bạn Bình la hét trong lớp', 'Bạn Tú nói tục', 'Bạn Hà hay cãi lại người lớn'], 0, 'Dùng "ạ", "vâng" là biểu hiện lịch sự.'),
  ]),

  M(15, 'An toàn khi vui chơi', [
    Q('Em thấy bạn trèo cây cao, em nên?', ['Quay phim cho vui', 'Khuyên bạn xuống vì nguy hiểm', 'Cổ vũ bạn', 'Trèo theo'], 1, 'Trèo cao rất nguy hiểm, cần khuyên bạn xuống.'),
    Q('Chơi gần đường lớn, em nên?', ['Chạy qua đường khi xe đang chạy', 'Đứng giữa đường vẫy xe', 'Chạy ra giữa đường', 'Chơi vào sân, vỉa hè an toàn'], 3, 'Chơi ở chỗ an toàn để tránh tai nạn.'),
    Q('Đồ vật nào KHÔNG nên dùng để chơi?', ['Bút chì màu', 'Hộp xếp hình', 'Quả bóng', 'Dao, kéo nhọn'], 3, 'Dao, kéo nhọn rất dễ gây thương tích.'),
    Q('Khi chơi xích đu, em nên?', ['Đứng trên xích đu', 'Nhảy xuống khi đang đu', 'Đẩy bạn thật mạnh', 'Ngồi vững, đung đưa nhẹ'], 3, 'Ngồi vững giúp em an toàn.'),
    Q('Thấy ổ điện hở, em nên?', ['Cắm que vào thử', 'Đổ nước vào', 'Chạm tay vào', 'Tránh xa và báo người lớn'], 3, 'Ổ điện hở rất nguy hiểm — báo người lớn ngay.'),
    Q('Khi vui chơi, em cần nhớ?', ['Không cần ai nhắc', 'An toàn quan trọng nhất', 'Càng mạo hiểm càng hay', 'Chỉ vui là được, không cần an toàn'], 1, 'An toàn luôn được đặt lên hàng đầu.'),
  ]),

  M(16, 'An toàn giao thông cho học sinh lớp 1', [
    Q('Em đi bộ trên đường nên đi ở đâu?', ['Giữa đường', 'Đi giật lùi', 'Đi giữa làn ô tô', 'Sát mép phải hoặc trên vỉa hè'], 3, 'Đi sát mép phải hoặc vỉa hè là an toàn.'),
    Q('Đèn tín hiệu giao thông màu đỏ nghĩa là?', ['Được rẽ phải nếu không vướng', 'Đi nhanh', 'Dừng lại', 'Đi chậm'], 2, 'Đèn đỏ là dừng lại — quy tắc cơ bản.'),
    Q('Đèn xanh nghĩa là?', ['Dừng lại', 'Được phép đi', 'Đứng tại chỗ', 'Quay lại'], 1, 'Đèn xanh được phép đi.'),
    Q('Sang đường, em nên?', ['Tự chạy qua', 'Nhắm mắt chạy', 'Vừa đi vừa nghe nhạc', 'Nắm tay người lớn và đi vạch dành cho người đi bộ'], 3, 'Đi cùng người lớn và qua vạch sang đường là an toàn.'),
    Q('Khi ngồi xe máy, em phải?', ['Đội mũ bảo hiểm và ôm chặt người lái', 'Vẫy tay sang hai bên', 'Đứng lên ghế', 'Tự nhảy xuống'], 0, 'Mũ bảo hiểm bảo vệ đầu em khi va chạm.'),
    Q('Ô tô đang chạy, em không nên?', ['Trò chuyện nhẹ với bố mẹ', 'Nhìn ra ngoài', 'Ngồi yên thắt dây an toàn', 'Thò đầu ra ngoài cửa sổ'], 3, 'Thò đầu ra ngoài rất nguy hiểm.'),
  ]),

  M(17, 'Ôn tập HK1 — Em là bạn nhỏ ngoan', [
    Q('Đi học về, việc đầu tiên em nên làm?', ['Đòi ăn vặt', 'Vào phòng đóng cửa', 'Chào người lớn trong nhà', 'Bật ti vi'], 2, 'Chào hỏi luôn là việc đầu tiên khi về nhà.'),
    Q('Bạn vấp ngã, em nên?', ['Đỡ bạn dậy', 'Gọi bạn khác đến xem', 'Trêu bạn vụng về', 'Quay video'], 0, 'Đỡ bạn dậy là biểu hiện thương yêu.'),
    Q('Sách vở em nên?', ['Bọc bìa, giữ sạch', 'Vẽ bậy', 'Xé giấy', 'Vứt lung tung'], 0, 'Sách vở sạch giúp em yêu việc học hơn.'),
    Q('Khi cô giáo nhắc nhở, em nên?', ['Cãi cô', 'Bỏ ra ngoài', 'Lắng nghe và xin lỗi', 'Khóc to'], 2, 'Lắng nghe và sửa sai là biểu hiện ngoan.'),
    Q('Đèn đỏ giao thông nghĩa là?', ['Quay đầu', 'Đi chậm và quan sát', 'Dừng lại', 'Đi nhanh'], 2, 'Đèn đỏ là dừng — quy tắc an toàn.'),
    Q('Bạn nào là học sinh ngoan?', ['Bạn chép bài bạn khác', 'Bạn hay cãi cô', 'Bạn đánh em nhỏ', 'Bạn biết chào hỏi, chăm học, đoàn kết'], 3, 'Lễ phép, chăm học, đoàn kết là dấu hiệu của bạn ngoan.'),
  ]),

  M(18, 'Kiểm tra cuối HK1', [
    Q('Lời chào nào lễ phép?', ['"Hi bác"', '"Ê bác"', 'Im lặng', '"Cháu chào bác ạ"'], 3, '"Cháu chào… ạ" là cách chào lễ phép.'),
    Q('Bạn em buồn, em nên?', ['Cười nhạo', 'An ủi bạn', 'Mặc kệ, không hỏi gì', 'Trêu thêm'], 1, 'An ủi bạn là yêu thương.'),
    Q('Em làm vỡ chiếc bát, em nên?', ['Nói dối', 'Nhận lỗi', 'Giấu mảnh vỡ vào thùng rác', 'Đổ tại em bé'], 1, 'Trung thực nhận lỗi là tốt.'),
    Q('Đi học em mang theo?', ['Điện thoại', 'Sách vở, bút, cặp', 'Kẹo bánh', 'Đồ chơi'], 1, 'Đồ dùng học tập là thứ cần thiết.'),
    Q('Bạn nào chăm chỉ?', ['Chép bài bạn', 'Ngủ trong lớp', 'Tự giác làm bài đầy đủ', 'Quên làm bài'], 2, 'Tự giác làm bài đầy đủ là chăm chỉ.'),
    Q('Khi qua đường em nên?', ['Tự chạy qua', 'Nắm tay người lớn, đi vạch sang đường', 'Nhắm mắt chạy', 'Đứng giữa đường vẫy tay'], 1, 'Đi cùng người lớn và qua vạch là an toàn.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Em yêu quê hương', [
    Q('Quê hương là gì với em?', ['Một nơi xa lạ', 'Một thành phố nước ngoài', 'Một địa điểm trên ti vi', 'Nơi em sinh ra và lớn lên'], 3, 'Quê hương là nơi gắn bó thân thương với em.'),
    Q('Yêu quê hương, em nên?', ['Giữ gìn cảnh đẹp quê', 'Chê quê mình', 'Bẻ cây phá hoa', 'Vứt rác bừa bãi'], 0, 'Giữ gìn cảnh đẹp là yêu quê.'),
    Q('Tết về quê thăm ông bà, em nên?', ['Chào hỏi lễ phép, giúp đỡ ông bà', 'Trốn không về', 'Đòi quà', 'Cãi ông bà'], 0, 'Lễ phép, giúp ông bà là biểu hiện yêu quê.'),
    Q('Bạn nào yêu quê hương?', ['Bạn Lan kể về làng quê với vẻ tự hào', 'Bạn Hà nói "Quê tớ chán"', 'Bạn Tú chê quê quê mùa', 'Bạn Bình không bao giờ về quê'], 0, 'Tự hào về quê là biểu hiện yêu quê.'),
    Q('Cây đa, giếng nước, sân đình… là?', ['Không liên quan đến em', 'Đồ vật ở nước ngoài', 'Hình ảnh quen của quê hương Việt Nam', 'Sách nói thế'], 2, 'Đó là những hình ảnh quê hương thân thuộc.'),
    Q('Em có thể làm gì cho quê em?', ['Phá hoại làng xóm', 'Học giỏi để sau lớn xây quê', 'Chê bai làng xóm', 'Bỏ quê đi'], 1, 'Học giỏi để đóng góp cho quê là yêu quê.'),
  ]),

  M(20, 'Đón Tết cổ truyền', [
    Q('Tết Nguyên đán là tết của?', ['Người Việt Nam', 'Riêng người lớn', 'Riêng trẻ con', 'Nước ngoài'], 0, 'Tết Nguyên đán là Tết cổ truyền Việt Nam.'),
    Q('Bánh truyền thống ngày Tết là?', ['Bánh mì kẹp', 'Bánh chưng, bánh tét', 'Hamburger', 'Bánh trung thu nướng'], 1, 'Bánh chưng, bánh tét là hai loại bánh Tết truyền thống.'),
    Q('Sáng mùng 1 Tết, em nên?', ['Đòi lì xì rồi bỏ đi', 'Chúc Tết ông bà cha mẹ', 'Cãi nhau với anh chị', 'Ngủ đến trưa'], 1, 'Chúc Tết là phong tục đẹp đầu năm.'),
    Q('Khi được lì xì em nên?', ['Mở ngay xem nhiều ít', 'Vứt phong bao', 'Đòi thêm', 'Cảm ơn và nhận hai tay'], 3, 'Nhận hai tay và cảm ơn là lễ phép.'),
    Q('Hoa Tết miền Bắc thường là?', ['Hoa cúc trắng', 'Hoa đào', 'Hoa hướng dương', 'Hoa hồng'], 1, 'Hoa đào là hoa Tết miền Bắc.'),
    Q('Bạn nào đón Tết ngoan?', ['Bạn Tú đòi lì xì rồi cãi mẹ', 'Bạn Bình ngủ đến chiều', 'Bạn Hà xé tiền lì xì', 'Bạn Mai chúc Tết, giúp mẹ dọn nhà'], 3, 'Chúc Tết và giúp mẹ là biểu hiện ngoan.'),
  ]),

  M(21, 'Biết ơn người lao động', [
    Q('Bác bảo vệ trường làm gì?', ['Bán hàng', 'Lau bảng', 'Dạy học', 'Trông coi giữ an toàn cho trường'], 3, 'Bác bảo vệ giữ an toàn cho thầy trò.'),
    Q('Cô lao công giúp trường em điều gì?', ['Quét dọn, giữ trường sạch', 'Bán đồ ăn', 'Sửa máy tính', 'Dạy hát'], 0, 'Cô lao công làm sạch trường.'),
    Q('Gặp cô lao công, em nên?', ['Vứt rác trêu cô', 'Đi thẳng', 'Cười nhạo', 'Chào cô lễ phép'], 3, 'Cô lao công cũng cần được tôn trọng.'),
    Q('Để giúp cô lao công đỡ vất vả, em nên?', ['Vứt rác đúng nơi quy định', 'Bôi bẩn tường', 'Vứt rác bừa bãi', 'Phá đồ trong sân'], 0, 'Vứt rác đúng chỗ giảm việc cho cô lao công.'),
    Q('Ai trồng ra hạt gạo em ăn?', ['Cô giáo', 'Chú công an', 'Bác sĩ', 'Bác nông dân'], 3, 'Hạt gạo là công của bác nông dân.'),
    Q('Em biết ơn người lao động bằng cách?', ['Chê đồ xấu', 'Trân trọng đồ ăn, đồ dùng', 'Lãng phí cơm, bánh', 'Phá đồ'], 1, 'Trân trọng đồ ăn là biết ơn người làm ra.'),
  ]),

  M(22, 'Tết Nguyên đán — Phong tục đẹp', [
    Q('Mùng 1 Tết em thường gặp ai trước?', ['Bố mẹ, ông bà trong nhà', 'Bạn xa lạ', 'Người nước ngoài', 'Người lạ ngoài đường'], 0, 'Sáng mùng 1, gia đình quây quần là phong tục đẹp.'),
    Q('Mâm ngũ quả ngày Tết có ý nghĩa gì?', ['Để trang trí ti vi', 'Để bán', 'Để khoe', 'Mong năm mới sung túc'], 3, 'Mâm ngũ quả thể hiện mong ước đủ đầy.'),
    Q('Khi đi chúc Tết họ hàng, em nên?', ['Đi thẳng vào ăn', 'Cãi anh chị', 'Lễ phép chào hỏi mọi người', 'Chỉ chào người cho lì xì nhiều'], 2, 'Chào hỏi lễ phép là phong tục đẹp ngày Tết.'),
    Q('Tết là dịp để em?', ['Ăn nhiều bánh kẹo', 'Tranh giành lì xì', 'Đốt pháo nguy hiểm', 'Bày tỏ lòng biết ơn ông bà cha mẹ'], 3, 'Tết là dịp sum vầy và biết ơn.'),
    Q('Em không nên làm gì trong dịp Tết?', ['Chúc Tết', 'Đốt pháo, ném pháo', 'Mặc áo mới', 'Giúp mẹ dọn nhà'], 1, 'Đốt pháo bị cấm và rất nguy hiểm.'),
    Q('Quần áo ngày Tết em nên?', ['Mặc đồ ngủ ra đường', 'Không cần tắm rửa', 'Mặc đồ rách', 'Mặc gọn gàng, sạch sẽ'], 3, 'Mặc gọn gàng để đón năm mới.'),
  ]),

  M(23, 'Yêu lao động', [
    Q('Ở nhà em có thể giúp mẹ?', ['Đòi mẹ làm hộ', 'Quét nhà, lau bàn nhỏ', 'Đứng nhìn mẹ làm', 'Bày bừa thêm'], 1, 'Việc nhỏ vừa sức là cách giúp mẹ.'),
    Q('Khi lao động ở lớp, em nên?', ['Tham gia tích cực', 'Phá việc bạn', 'Đứng nói chuyện riêng', 'Chỉ ngồi xem'], 0, 'Tham gia lao động là biểu hiện yêu lao động.'),
    Q('Lao động giúp em?', ['Mệt mỏi vô ích', 'Khoẻ mạnh, biết quý sức lao động', 'Lười hơn', 'Bị mắng'], 1, 'Lao động giúp em trưởng thành.'),
    Q('Bạn nào yêu lao động?', ['Bạn Bình phá dụng cụ', 'Bạn Tú để bạn khác dọn hộ', 'Bạn Hà vứt rác bừa bãi', 'Bạn An tự dọn chỗ ngồi sau khi ăn'], 3, 'Tự dọn chỗ ngồi là yêu lao động.'),
    Q('Khi mẹ nấu cơm, em nên?', ['Đòi ăn vặt', 'Trêu em bé khóc', 'Đến nhặt rau giúp mẹ', 'Mở ti vi to'], 2, 'Nhặt rau cùng mẹ là việc nhỏ ý nghĩa.'),
    Q('Em không nên?', ['Sẵn sàng làm việc nhỏ', 'Yêu công việc', 'Giúp đỡ người khác', 'Chê việc nhà bẩn không làm'], 3, 'Không nên chê việc — việc nào cũng quý.'),
  ]),

  M(24, 'Thật thà', [
    Q('Em thấy bạn lấy bút của bạn khác, em nên?', ['Lấy theo', 'Khuyên bạn trả lại', 'Cười cho vui', 'Im lặng'], 1, 'Khuyên bạn làm điều đúng là tốt.'),
    Q('Em nhặt được chiếc khăn quàng đỏ, em nên?', ['Giữ làm của mình', 'Đưa cô tìm chủ', 'Cho người khác', 'Vứt đi'], 1, 'Đưa cô tìm chủ là thật thà.'),
    Q('Mẹ hỏi "Con đã ăn cơm chưa?", em chưa ăn nên?', ['Nói dối là ăn rồi', 'Nói là ăn ở nhà bạn rồi', 'Im lặng', 'Nói thật'], 3, 'Nói thật mới là thật thà.'),
    Q('Khi em làm sai, thật thà nghĩa là?', ['Nhận lỗi mình', 'Đổ lỗi cho bạn', 'Khóc to', 'Im lặng giấu'], 0, 'Nhận lỗi là biểu hiện thật thà.'),
    Q('Bạn nào thật thà?', ['Bạn Hà chép bài', 'Bạn Tú đổ lỗi cho bạn khác', 'Bạn Bình nói dối cô', 'Bạn An tự khai mình quên làm bài'], 3, 'Tự khai khi sai là thật thà.'),
    Q('Thật thà mang đến điều gì?', ['Không ai để ý', 'Bị bạn ghét', 'Được mọi người tin yêu', 'Bị mắng nhiều hơn'], 2, 'Người thật thà luôn được tin yêu.'),
  ]),

  M(25, 'Đoàn kết với bạn trong lớp', [
    Q('Bạn mới vào lớp, em nên?', ['Làm quen, rủ bạn chơi', 'Chê bạn lạ', 'Bỏ mặc bạn', 'Cô lập bạn'], 0, 'Làm quen giúp bạn nhanh hoà nhập.'),
    Q('Bạn không có bánh ăn vặt, em đang ăn, em nên?', ['Ăn hết một mình', 'Giấu bánh đi', 'Trêu bạn', 'Chia cho bạn một miếng'], 3, 'Chia sẻ là biểu hiện đoàn kết.'),
    Q('Trong lớp có bạn khuyết tật, em nên?', ['Trêu chọc', 'Tránh xa', 'Cười nhạo', 'Quan tâm, giúp đỡ bạn'], 3, 'Bạn nào cũng cần được quan tâm như nhau.'),
    Q('Khi cả lớp lao động, em nên?', ['Cùng làm với cả lớp', 'Trốn ra góc chơi', 'Phá bạn đang làm', 'Đứng nhìn'], 0, 'Cùng làm là đoàn kết.'),
    Q('Bạn buồn vì mẹ ốm, em nên?', ['An ủi, hỏi thăm', 'Trêu bạn buồn hơn', 'Mặc kệ', 'Khoe nhà mình vui'], 0, 'An ủi giúp bạn vơi buồn.'),
    Q('Bạn nào đoàn kết tốt?', ['Bạn Lan giúp bạn ốm chép bài', 'Bạn Hà chia phe trong lớp', 'Bạn Tú nói xấu bạn', 'Bạn Bình đánh bạn'], 0, 'Giúp bạn lúc ốm là tình bạn đẹp.'),
  ]),

  M(26, 'Bảo vệ của công', [
    Q('Đồ dùng chung của lớp em nên?', ['Mang về nhà', 'Giữ gìn cẩn thận', 'Vẽ tên lên', 'Phá cho vui'], 1, 'Đồ dùng chung phải được giữ gìn.'),
    Q('Bạn vẽ bậy lên tường, em nên?', ['Mặc kệ', 'Khen bạn', 'Vẽ cùng', 'Nhắc bạn dừng lại'], 3, 'Nhắc bạn dừng việc xấu là đúng.'),
    Q('Cây cối trong sân trường em nên?', ['Chăm sóc, tưới nước', 'Khắc tên vào thân cây', 'Hái hoa', 'Bẻ cành chơi'], 0, 'Chăm sóc cây là biểu hiện yêu trường.'),
    Q('Bàn ghế trong lớp em nên?', ['Giữ sạch không vẽ bậy', 'Đứng lên ghế nhảy', 'Khắc tên', 'Đập phá'], 0, 'Bàn ghế là của công, cần giữ sạch.'),
    Q('Khi tan học, em nên?', ['Vứt rác xuống đất', 'Để bừa cho cô lao công', 'Lật bàn', 'Tự dọn chỗ ngồi'], 3, 'Dọn chỗ ngồi là biểu hiện bảo vệ của công.'),
    Q('Bạn nào bảo vệ của công?', ['Bạn Hà vẽ bậy lên tường', 'Bạn Mai tắt đèn khi rời lớp', 'Bạn Tú đập bàn', 'Bạn Bình phá khoá tủ'], 1, 'Tắt đèn khi không dùng là biểu hiện ý thức tốt.'),
  ]),

  M(27, 'Yêu thiên nhiên — bảo vệ cây xanh', [
    Q('Cây xanh giúp em?', ['Gây phiền', 'Cho bóng mát, không khí trong lành', 'Làm bẩn sân', 'Không có ích'], 1, 'Cây xanh rất có ích cho con người.'),
    Q('Thấy bạn bẻ cành cây, em nên?', ['Cười cổ vũ', 'Hái hoa thêm', 'Khuyên bạn dừng', 'Bẻ cùng'], 2, 'Nhắc bạn không phá cây là việc đúng.'),
    Q('Để cây phát triển, em nên?', ['Tưới nước, không bẻ cành', 'Cào gốc', 'Cắt rễ', 'Đốt lá'], 0, 'Chăm sóc giúp cây xanh tốt.'),
    Q('Em không nên?', ['Vứt rác vào gốc cây', 'Tưới cây', 'Nhổ cỏ dại quanh gốc cây', 'Trồng thêm cây'], 0, 'Vứt rác vào gốc cây làm hại cây.'),
    Q('Bạn nào yêu thiên nhiên?', ['Bạn Tú bắt chim phá tổ', 'Bạn Hà bẻ cây bonsai', 'Bạn Bình đốt rác lung tung', 'Bạn An tưới hoa mỗi sáng'], 3, 'Tưới hoa là biểu hiện yêu thiên nhiên.'),
    Q('Em có thể làm gì cho thiên nhiên?', ['Chặt cây để chơi', 'Đốt rừng', 'Vứt nilông bừa bãi', 'Trồng thêm cây và chăm sóc'], 3, 'Trồng cây là việc làm đẹp.'),
  ]),

  M(28, 'Yêu thương động vật', [
    Q('Thấy chú mèo bị thương, em nên?', ['Đá thêm cho mèo chạy', 'Giúp đỡ hoặc báo người lớn', 'Bỏ mặc', 'Cười nhạo'], 1, 'Giúp đỡ động vật là biểu hiện yêu thương.'),
    Q('Em không nên?', ['Ném đá chó mèo', 'Cho thú cưng ăn', 'Vuốt ve nhẹ nhàng', 'Chăm sóc thú cưng'], 0, 'Ném đá là hành vi tàn nhẫn.'),
    Q('Bạn em bắt chim phá tổ, em nên?', ['Cười cổ vũ', 'Bắt cùng', 'Phá thêm tổ khác', 'Khuyên bạn thả chim ra'], 3, 'Bảo vệ tổ chim là yêu thương động vật.'),
    Q('Khi nuôi thú cưng, em phải?', ['Cho ăn, tắm rửa, vệ sinh đầy đủ', 'Đánh đập', 'Bỏ đói', 'Nhốt suốt ngày'], 0, 'Nuôi thú cưng đòi hỏi trách nhiệm.'),
    Q('Bạn nào thương động vật?', ['Bạn Hà giật đuôi mèo', 'Bạn Tú đá chó hàng xóm', 'Bạn Bình ném đá chim', 'Bạn Mai cho chim ăn vụn bánh'], 3, 'Cho chim ăn là biểu hiện yêu thương.'),
    Q('Yêu động vật giúp em?', ['Bị bạn chê', 'Không có ích', 'Trở nên dịu dàng, biết quan tâm', 'Ác hơn'], 2, 'Yêu động vật giúp tâm hồn em dịu dàng.'),
  ]),

  M(29, 'Tự lập', [
    Q('Em tự làm việc gì hàng ngày?', ['Đợi mẹ làm hộ', 'Cãi mẹ', 'Đánh răng, mặc quần áo', 'Khóc đòi'], 2, 'Việc cá nhân em nên tự làm.'),
    Q('Cặp sách của em ai mang đến lớp?', ['Mẹ mang hộ', 'Bố mang', 'Anh chị mang', 'Em tự mang'], 3, 'Tự mang cặp là biểu hiện tự lập.'),
    Q('Bạn nào tự lập?', ['Bạn Tú đợi mẹ buộc dây giày', 'Bạn Mai tự thắt khăn quàng', 'Bạn Hà nhờ mẹ làm bài hộ', 'Bạn Bình đòi mẹ bón cơm'], 1, 'Tự thắt khăn là việc nhỏ cần tự làm.'),
    Q('Đến giờ ăn, em nên?', ['Vừa ăn vừa xem tivi', 'Cãi mẹ', 'Tự xúc cơm', 'Đợi mẹ bón'], 2, 'Tự xúc cơm là biểu hiện tự lập.'),
    Q('Tự lập giúp em?', ['Bị chê', 'Mệt mỏi vô ích', 'Không có ích', 'Trưởng thành, được tin yêu'], 3, 'Tự lập giúp em lớn lên và trưởng thành.'),
    Q('Em có thể tự làm việc nào sau đây?', ['Soạn sách vở', 'Đi chợ một mình xa nhà', 'Nấu bếp gas', 'Lái ô tô'], 0, 'Soạn sách vở là việc phù hợp lứa tuổi lớp 1.'),
  ]),

  M(30, 'An toàn khi ở nhà một mình', [
    Q('Khi ở nhà một mình, người lạ gõ cửa em nên?', ['Chỉ chỗ giấu tiền', 'Không mở, không nói chuyện', 'Mở cửa cho vào', 'Mời vào ăn cơm'], 1, 'Tuyệt đối không mở cửa cho người lạ.'),
    Q('Có cuộc gọi lạ hỏi tên bố mẹ, em nên?', ['Đọc địa chỉ nhà', 'Trả lời rõ ràng', 'Không cung cấp thông tin', 'Đọc số điện thoại bố mẹ'], 2, 'Không cung cấp thông tin cho người lạ.'),
    Q('Bếp gas, ổ điện em có nên tự dùng không?', ['Đôi khi', 'Tuỳ thích', 'Không, rất nguy hiểm', 'Có, cứ thử'], 2, 'Bếp gas và điện cần người lớn — em không tự dùng.'),
    Q('Khi có khói trong nhà, em nên?', ['Bật quạt cho nhiều khói', 'Đứng xem', 'Trốn vào phòng', 'Chạy ra ngoài và gọi người lớn'], 3, 'Khói có thể là dấu hiệu cháy — em ra ngoài và báo người lớn.'),
    Q('Số điện thoại khẩn cấp khi cháy là?', ['115', '113', '116', '114'], 3, 'Số 114 là số gọi cứu hoả.'),
    Q('Số điện thoại công an là?', ['116', '113', '114', '115'], 1, 'Số 113 là số gọi công an.'),
  ]),

  M(31, 'Phòng tránh xâm hại cơ thể', [
    Q('Vùng kín cơ thể em là?', ['Cô y tá khám thì ai cũng được xem', 'Cần được tôn trọng, không cho ai chạm', 'Khoe với bạn', 'Ai cũng có thể chạm'], 1, 'Vùng kín là riêng tư của em, không cho người khác tuỳ tiện chạm.'),
    Q('Người lạ rủ em đi chơi xa, em nên?', ['Không đi, báo bố mẹ', 'Hỏi đường rồi đi', 'Đi cùng bạn cho vui', 'Đi luôn'], 0, 'Tuyệt đối không đi với người lạ — báo bố mẹ ngay.'),
    Q('Ai đó cho quà rồi yêu cầu em làm điều không vui, em nên?', ['Nhận và làm', 'Giấu chuyện', 'Im lặng nghe theo', 'Trả quà, từ chối và báo bố mẹ'], 3, 'Trả quà, từ chối và báo bố mẹ là đúng.'),
    Q('Khi có điều khó chịu xảy ra với cơ thể em, em nên?', ['Giữ bí mật', 'Đổ lỗi cho mình', 'Nói với người em tin yêu (mẹ, cô)', 'Sợ không kể'], 2, 'Phải kể với người em tin yêu để được giúp đỡ.'),
    Q('Khi đi vệ sinh ở trường, em nên?', ['Mở cửa cho thoáng', 'Bỏ cửa', 'Rủ bạn vào cùng', 'Đóng cửa cẩn thận'], 3, 'Đóng cửa nhà vệ sinh là tôn trọng và an toàn cho em.'),
    Q('Cảm giác không an toàn em nên?', ['Kể với bố mẹ hoặc cô giáo ngay', 'Im lặng', 'Tự gánh chịu', 'Giấu kĩ'], 0, 'Luôn chia sẻ để được người lớn bảo vệ.'),
  ]),

  M(32, 'Yêu Tổ quốc Việt Nam', [
    Q('Tổ quốc em là?', ['Một nước nào đó', 'Châu lục', 'Nước Việt Nam', 'Hành tinh khác'], 2, 'Tổ quốc em là Việt Nam thân yêu.'),
    Q('Lá cờ Việt Nam có gì?', ['Nền xanh, sao trắng', 'Nền trắng, sao xanh', 'Nền đỏ, sao vàng', 'Nền vàng, sao đỏ'], 2, 'Cờ đỏ sao vàng là Quốc kỳ Việt Nam.'),
    Q('Khi chào cờ, em nên?', ['Ngồi xuống', 'Chạy nhảy', 'Cười đùa', 'Đứng nghiêm, hát Quốc ca'], 3, 'Tư thế nghiêm trang khi chào cờ là tôn kính Tổ quốc.'),
    Q('Bác Hồ là?', ['Một bạn nhỏ', 'Một họa sĩ', 'Vị lãnh tụ kính yêu của dân tộc Việt Nam', 'Một người xa lạ'], 2, 'Bác Hồ là vị Cha già kính yêu của dân tộc.'),
    Q('Yêu Tổ quốc, em nên?', ['Phá hoại cảnh đẹp', 'Vứt rác bừa bãi', 'Chê đất nước mình', 'Học chăm để sau xây dựng đất nước'], 3, 'Học giỏi là cách yêu nước của bạn nhỏ.'),
    Q('Khi hát Quốc ca em có cười đùa không?', ['Không, phải trang nghiêm', 'Cười nhẹ', 'Tuỳ thích', 'Có, hát cho vui là được'], 0, 'Hát Quốc ca cần thái độ nghiêm trang.'),
  ]),

  M(33, 'Em làm việc tốt', [
    Q('Trên đường đi học, em thấy cụ già qua đường, em nên?', ['Dẫn cụ qua đường', 'Mặc kệ', 'Cười cụ chậm', 'Đi nhanh để khỏi muộn'], 0, 'Giúp cụ già là việc tốt nho nhỏ mỗi ngày.'),
    Q('Em nhặt được sách của bạn rơi, em nên?', ['Vứt vào sọt rác', 'Đem về nhà', 'Trả lại bạn', 'Giấu đi'], 2, 'Trả lại đồ rơi là biểu hiện trung thực.'),
    Q('Việc tốt em có thể làm hàng ngày?', ['Vứt rác lung tung', 'Phá đồ chơi em bé', 'Trêu bạn khóc', 'Giúp mẹ quét nhà'], 3, 'Việc tốt nhỏ mỗi ngày làm em vui và mọi người yêu.'),
    Q('Khi làm được việc tốt, em nên?', ['Đòi thưởng', 'Khoe để được khen', 'Vui vẻ, tiếp tục làm', 'Khoe khắp nơi'], 2, 'Làm việc tốt vì thực sự muốn giúp, không vì khen thưởng.'),
    Q('Bạn nào hay làm việc tốt?', ['Bạn Hà vứt rác bừa', 'Bạn An giúp bạn ốm chép bài', 'Bạn Tú trêu bạn khóc', 'Bạn Bình phá đồ'], 1, 'Giúp bạn ốm là việc tốt.'),
    Q('Việc tốt mang lại điều gì?', ['Bị chê', 'Niềm vui và tình thương', 'Sự mệt mỏi', 'Không gì cả'], 1, 'Việc tốt mang đến niềm vui cho em và người khác.'),
  ]),

  M(34, 'Ôn tập HK2 — Em ngoan ở nhà và ở trường', [
    Q('Ở nhà, em là bạn nhỏ?', ['Đòi hỏi', 'Hay cãi', 'Lười việc nhà', 'Yêu thương, lễ phép với người lớn'], 3, 'Bạn nhỏ ngoan là người biết yêu thương gia đình.'),
    Q('Ở lớp, em là bạn nhỏ?', ['Lễ phép, chăm học, đoàn kết', 'Cãi cô', 'Bắt nạt bạn', 'Phá đồ lớp'], 0, 'Lễ phép, chăm học, đoàn kết là bạn ngoan ở lớp.'),
    Q('Khi qua đường em phải?', ['Tự chạy qua', 'Đứng giữa đường', 'Nắm tay người lớn, qua vạch sang đường', 'Nhắm mắt chạy'], 2, 'An toàn giao thông là điều rất quan trọng.'),
    Q('Người lạ rủ đi, em nên?', ['Đi cho vui', 'Từ chối và báo bố mẹ', 'Đi cùng bạn', 'Đi luôn'], 1, 'Tuyệt đối không đi với người lạ.'),
    Q('Em làm sai, em nên?', ['Im lặng', 'Đổ lỗi cho người khác', 'Khóc ăn vạ', 'Nhận lỗi và xin lỗi'], 3, 'Nhận lỗi là biểu hiện trung thực, ngoan ngoãn.'),
    Q('Em yêu Tổ quốc Việt Nam, em nên?', ['Lười học', 'Học giỏi, ngoan ngoãn', 'Chê quê hương', 'Vứt rác ra sân trường'], 1, 'Học giỏi là cách yêu nước phù hợp với em.'),
  ]),

  M(35, 'Tổng kết — Em đã lớn hơn', [
    Q('Sau một năm lớp 1, em đã biết?', ['Đọc, viết, làm toán, sống ngoan', 'Quên hết', 'Chỉ chơi', 'Vẫn như mầm non'], 0, 'Lớp 1 là bước trưởng thành lớn của em.'),
    Q('Em sẽ làm gì để giữ những điều tốt đã học?', ['Chỉ làm khi vui', 'Quên hết khi nghỉ hè', 'Tiếp tục thực hiện mỗi ngày', 'Làm khi có người nhắc'], 2, 'Thói quen tốt cần được giữ mỗi ngày.'),
    Q('Lời cảm ơn em nên dành cho?', ['Chỉ bố mẹ', 'Chỉ thầy cô', 'Bố mẹ, ông bà, thầy cô, bạn bè', 'Không ai cả'], 2, 'Biết ơn nhiều người đã yêu thương em.'),
    Q('Lên lớp 2, em mong muốn?', ['Cãi nhiều hơn', 'Không học gì', 'Lười hơn', 'Học giỏi hơn, ngoan hơn'], 3, 'Mỗi năm em hãy tốt hơn năm trước.'),
    Q('Em hứa với bố mẹ và cô giáo điều gì?', ['Cố gắng học và sống tốt', 'Không hứa gì', 'Hứa rồi quên', 'Hứa cho có'], 0, 'Lời hứa đi đôi với hành động mới có giá trị.'),
    Q('Một bạn nhỏ lớn hơn là bạn?', ['Hay cãi và lười', 'Chỉ thích chơi', 'Không quan tâm ai', 'Biết yêu thương, lễ phép, trung thực, chăm chỉ'], 3, 'Lớn không chỉ ở chiều cao, mà ở tính nết nữa.'),
  ]),
];

export const P1DD_SCENARIOS = indexBy(P1DD_WEEKS);
