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
    Q('Em đã là học sinh lớp mấy?', ['Mầm non', 'Lớp 1', 'Lớp 2', 'Lớp 3'], 1, 'Em đã lên lớp 1 — một bạn nhỏ học sinh tiểu học.'),
    Q('Đến trường em được làm gì vui nhất?', ['Ngủ cả ngày', 'Học chữ, học số và chơi cùng bạn', 'Xem ti vi', 'Ăn quà vặt'], 1, 'Trường là nơi em học và vui chơi cùng bạn bè, thầy cô.'),
    Q('Buổi sáng đi học, em cảm thấy thế nào là đúng?', ['Háo hức, vui vẻ', 'Buồn bã, khóc', 'Cáu gắt với bố mẹ', 'Trốn không đi'], 0, 'Đi học là niềm vui — em hãy đến lớp với tinh thần háo hức.'),
    Q('Gặp cô giáo lần đầu, em nên nói gì?', ['Im lặng quay đi', 'Khoanh tay: "Con chào cô ạ"', '"Ê cô"', 'Cười rồi bỏ đi'], 1, 'Lời chào lễ phép giúp em được cô yêu mến.'),
    Q('Bạn nào em nên kết thân?', ['Bạn hay trêu chọc người khác', 'Bạn vui vẻ, biết giúp đỡ', 'Bạn hay đánh nhau', 'Bạn nói tục'], 1, 'Bạn tốt là bạn hiền lành, biết quan tâm.'),
    Q('Là học sinh lớp 1, em cần chuẩn bị gì khi đi học?', ['Đồ chơi', 'Sách vở, bút, cặp', 'Bánh kẹo', 'Điện thoại'], 1, 'Sách vở, bút, cặp là đồ dùng học tập cần thiết.'),
  ]),

  M(2, 'Gọn gàng, sạch sẽ', [
    Q('Trước khi đi học, em cần làm gì?', ['Đánh răng, rửa mặt, chải tóc', 'Bỏ qua, lên xe đi luôn', 'Ăn kẹo cho thơm miệng', 'Xem hoạt hình'], 0, 'Vệ sinh cá nhân buổi sáng giúp em gọn gàng, tự tin.'),
    Q('Quần áo bị bẩn, em nên?', ['Cứ mặc tiếp', 'Bảo mẹ giúp thay đồ sạch', 'Giấu vào tủ', 'Vứt đi luôn'], 1, 'Quần áo bẩn cần thay để giữ vệ sinh.'),
    Q('Sau khi chơi xong, em làm gì với đồ chơi?', ['Để vương vãi khắp nhà', 'Cất gọn vào hộp', 'Vứt đi', 'Đem cho bạn hết'], 1, 'Cất đồ chơi đúng chỗ là biểu hiện gọn gàng.'),
    Q('Cặp sách của em nên?', ['Vứt giữa nhà', 'Treo ở giá hoặc để gọn vào góc', 'Cho em bé nhai', 'Mang theo lên giường ngủ'], 1, 'Cất cặp đúng chỗ giúp sáng mai dễ tìm.'),
    Q('Tay bẩn, trước khi ăn em phải?', ['Ăn luôn', 'Rửa tay bằng xà phòng', 'Lau vào quần áo', 'Liếm tay'], 1, 'Rửa tay với xà phòng giúp em không bị đau bụng.'),
    Q('Móng tay em nên?', ['Để dài, nhọn', 'Cắt ngắn, sạch sẽ', 'Cắn móng cho ngắn', 'Sơn màu sặc sỡ'], 1, 'Móng tay cắt gọn, sạch — không cắn móng.'),
  ]),

  M(3, 'Yêu thương ông bà, cha mẹ', [
    Q('Đi học về, em nên làm gì TRƯỚC?', ['Bật ti vi', 'Chào ông bà, cha mẹ', 'Vào phòng riêng', 'Mở tủ lạnh'], 1, 'Chào hỏi là biểu hiện đầu tiên của sự lễ phép, yêu thương.'),
    Q('Mẹ đi làm về mệt, em nên?', ['Đòi mẹ mua đồ chơi', 'Lấy nước mời mẹ uống', 'Mặc kệ mẹ', 'Quát mẹ vì chưa nấu cơm'], 1, 'Một li nước nhỏ thôi cũng làm mẹ vui.'),
    Q('Khi ông bà bị ốm, em nên?', ['Chơi to tiếng cho vui nhà', 'Hỏi thăm và mang nước cho ông bà', 'Trốn ra ngoài chơi', 'Bật nhạc to'], 1, 'Hỏi thăm ông bà là biểu hiện yêu thương.'),
    Q('Lời nào lễ phép với bố mẹ?', ['"Ê mẹ, lấy nước đi"', '"Mẹ ơi, con xin nước ạ"', '"Mẹ mau lên"', '"Mẹ làm hộ con đi"'], 1, '"Mẹ ơi… ạ" là cách nói lễ phép, thân thương.'),
    Q('Bạn nào yêu thương cha mẹ?', ['Bạn An giúp mẹ quét nhà', 'Bạn Tú cãi lời mẹ', 'Bạn Hùng đòi tiền mua đồ chơi', 'Bạn Lan giận mẹ vì không cho xem ti vi'], 0, 'Giúp đỡ mẹ việc nhỏ trong nhà là biểu hiện yêu thương.'),
    Q('Sinh nhật mẹ, em có thể tặng gì?', ['Tự vẽ tranh tặng mẹ', 'Không tặng gì', 'Đòi mẹ tự mua quà', 'Quên luôn'], 0, 'Món quà tự tay làm thể hiện tình cảm chân thành.'),
  ]),

  M(4, 'Lễ phép với anh chị, nhường nhịn em nhỏ', [
    Q('Anh chị nhờ em việc nhỏ, em nên?', ['Vui vẻ giúp', 'Cáu gắt: "Tự làm đi"', 'Bỏ chạy', 'Nói "Không thèm"'], 0, 'Giúp anh chị việc nhỏ là biểu hiện yêu thương.'),
    Q('Khi nói với anh chị, em xưng?', ['"Mày – tao"', '"Em" và gọi "anh/chị"', '"Bạn"', '"Ông/bà"'], 1, 'Xưng "em – anh/chị" là cách xưng hô đúng trong gia đình.'),
    Q('Em bé khóc đòi đồ chơi của em, em nên?', ['Giấu đi không cho', 'Nhường cho em chơi cùng', 'Đánh em', 'Mách mẹ ngay'], 1, 'Nhường nhịn em nhỏ là biểu hiện anh/chị tốt.'),
    Q('Anh trai đang học bài, em nên?', ['Bật ti vi to', 'Chơi yên lặng để anh tập trung', 'Chạy nhảy quanh anh', 'Hét thật to'], 1, 'Giữ yên lặng giúp anh học tốt.'),
    Q('Bạn nào biết nhường em?', ['Bạn Mai chia bánh cho em', 'Bạn Tú giấu hết kẹo', 'Bạn Bình giật đồ của em', 'Bạn Hà mắng em khóc'], 0, 'Chia sẻ với em là biểu hiện thương em.'),
    Q('Anh chị làm sai, em nên?', ['Mách bố mẹ ngay để anh chị bị mắng', 'Nhẹ nhàng nói chuyện với anh chị', 'Cười nhạo anh chị', 'Bắt chước theo'], 1, 'Nói chuyện nhẹ nhàng tốt hơn là đi mách.'),
  ]),

  M(5, 'Đi học đúng giờ', [
    Q('Vì sao em phải đi học đúng giờ?', ['Để không bỏ lỡ bài học', 'Để được khen', 'Vì sợ bị phạt', 'Vì ai cũng đi'], 0, 'Đi đúng giờ giúp em không bị bỏ lỡ bài.'),
    Q('Để đi học đúng giờ, tối hôm trước em nên?', ['Xem ti vi đến khuya', 'Đi ngủ sớm và soạn sách', 'Chơi điện thoại', 'Đợi mẹ nhắc mới ngủ'], 1, 'Ngủ sớm và soạn sách giúp sáng mai không vội vàng.'),
    Q('Sáng nay em dậy muộn, em nên?', ['Bỏ học luôn', 'Nhanh chuẩn bị và xin lỗi cô khi đến lớp', 'Đổ lỗi cho mẹ', 'Đi rất chậm cho bõ tức'], 1, 'Đến lớp và xin lỗi là hành vi đúng.'),
    Q('Đến lớp muộn làm ảnh hưởng đến ai?', ['Chỉ mình em', 'Cả lớp và cô giáo đang dạy', 'Không ảnh hưởng ai', 'Chỉ bố mẹ ở nhà'], 1, 'Đến muộn làm gián đoạn giờ học của cả lớp.'),
    Q('Em nên đến lớp trước giờ học bao nhiêu phút?', ['Đến đúng lúc kẻng', 'Trước 5–10 phút', 'Sau khi cô đã giảng', 'Đến lúc tan học'], 1, 'Đến sớm 5–10 phút là vừa đẹp.'),
    Q('Bạn nào đi học đúng giờ?', ['Bạn Lan đến lớp lúc 7h15 khi 7h30 vào học', 'Bạn Tú đến lúc 8h', 'Bạn Bình hay nghỉ', 'Bạn Hùng vừa đi vừa ăn sáng đến muộn'], 0, 'Đến trước giờ học là biểu hiện đúng giờ.'),
  ]),

  M(6, 'Giữ gìn sách vở, đồ dùng học tập', [
    Q('Sách của em nên?', ['Bọc bìa cẩn thận', 'Vẽ bậy lên trang', 'Xé giấy gấp máy bay', 'Vứt lung tung'], 0, 'Bọc bìa giúp sách bền lâu, sạch đẹp.'),
    Q('Bút bị mất nắp, em nên?', ['Vứt luôn', 'Tìm nắp đậy lại', 'Mua cây mới ngay', 'Để mực dính vào cặp'], 1, 'Đậy nắp giúp bút không khô, không bẩn cặp.'),
    Q('Vở viết, em nên?', ['Giữ sạch, viết cẩn thận', 'Vẽ lung tung khắp trang', 'Xé trang gấp máy bay', 'Để rơi xuống đất'], 0, 'Vở sạch chữ đẹp là điều ai cũng quý.'),
    Q('Bạn nào giữ đồ dùng tốt?', ['Bạn Mai cất bút vào hộp sau khi học', 'Bạn Tú vứt cặp xuống đất', 'Bạn An bẻ thước', 'Bạn Hà xé vở'], 0, 'Cất gọn đồ dùng là biểu hiện biết giữ gìn.'),
    Q('Đồ dùng học tập tốt giúp em?', ['Học tập thuận lợi hơn', 'Khoe với bạn', 'Đem đi đổi quà', 'Làm vũ khí'], 0, 'Sách bút đầy đủ và sạch sẽ giúp em học tốt.'),
    Q('Cuối ngày, em soạn cặp khi nào?', ['Sáng mai mới soạn cho nhanh', 'Tối trước khi đi ngủ', 'Không cần soạn', 'Bảo mẹ soạn hộ'], 1, 'Soạn cặp tối hôm trước giúp sáng mai không quên gì.'),
  ]),

  M(7, 'Lễ phép với thầy cô giáo', [
    Q('Gặp cô giáo ngoài cổng trường, em nên?', ['Cúi đầu lễ phép chào cô', 'Đi thẳng', 'Cười lớn rồi chạy', 'Giả vờ không thấy'], 0, 'Chào cô là biểu hiện lễ phép cơ bản.'),
    Q('Khi cô đang giảng bài, em nên?', ['Lắng nghe, không nói chuyện riêng', 'Nói chuyện với bạn', 'Nằm gục xuống bàn', 'Lấy đồ chơi ra'], 0, 'Lắng nghe là tôn trọng cô và bạn bè.'),
    Q('Muốn phát biểu, em làm gì?', ['Nói to ngay', 'Giơ tay xin phép cô', 'Đứng dậy nói luôn', 'Đập bàn'], 1, 'Giơ tay xin phép là phép lịch sự trong lớp.'),
    Q('Lời nào lễ phép với cô?', ['"Ê cô"', '"Thưa cô, cho con hỏi ạ"', '"Cô ơi, ra đây"', '"Cô làm đi"'], 1, '"Thưa cô… ạ" là cách xưng hô lễ phép.'),
    Q('Cô nhắc nhở em vì làm sai, em nên?', ['Cãi lại cô', 'Lắng nghe và xin lỗi cô', 'Khóc ăn vạ', 'Bỏ ra ngoài'], 1, 'Lắng nghe và sửa sai là biểu hiện ngoan.'),
    Q('Bạn nào lễ phép với cô?', ['Bạn Hoa chào cô khi gặp ngoài đường', 'Bạn Tú gọi cô là "bà ấy"', 'Bạn Lan trêu cô', 'Bạn Nam nhại lời cô'], 0, 'Chào cô ở bất cứ đâu là lễ phép.'),
  ]),

  M(8, 'Đoàn kết, thương yêu bạn bè', [
    Q('Bạn em bị ngã, em nên?', ['Cười cợt', 'Đỡ bạn dậy và hỏi thăm', 'Bỏ đi', 'Chụp ảnh khoe bạn khác'], 1, 'Đỡ bạn dậy là biểu hiện yêu thương.'),
    Q('Bạn quên bút, em nên?', ['Mặc kệ bạn', 'Cho bạn mượn', 'Cười nhạo bạn', 'Giấu bút của mình'], 1, 'Cho bạn mượn bút là biểu hiện đoàn kết.'),
    Q('Khi chơi cùng bạn, em nên?', ['Tranh giành đồ chơi', 'Chia sẻ, chơi vui vẻ', 'Đánh bạn nếu thua', 'Chỉ chơi một mình'], 1, 'Chia sẻ giúp ai cũng vui.'),
    Q('Bạn buồn vì bị mẹ mắng, em nên?', ['Trêu cho bạn buồn hơn', 'An ủi và rủ bạn cùng chơi', 'Mặc kệ', 'Đi mách thầy cô'], 1, 'Một lời an ủi nhẹ làm bạn vui hơn nhiều.'),
    Q('Hai bạn cãi nhau, em nên?', ['Đứng xem cho vui', 'Khuyên cả hai làm hoà', 'Đứng về phía bạn thân', 'Bỏ chạy'], 1, 'Hoà giải giúp lớp đoàn kết.'),
    Q('Bạn nào đoàn kết tốt?', ['Bạn Mai chia bánh cho cả bàn', 'Bạn Tú chê bạn khác xấu', 'Bạn Hùng đánh bạn', 'Bạn Hà nói xấu bạn'], 0, 'Chia sẻ là biểu hiện đoàn kết.'),
  ]),

  M(9, 'Sinh hoạt nền nếp', [
    Q('Buổi sáng em nên thức dậy lúc?', ['10 giờ sáng', '6 giờ — giờ quen của em', '11 giờ', '12 giờ'], 1, 'Dậy sớm giúp em có thời gian chuẩn bị đi học.'),
    Q('Đến giờ ngủ, em nên?', ['Xem ti vi đến khuya', 'Đánh răng rồi đi ngủ đúng giờ', 'Lén dậy chơi điện thoại', 'Đòi mẹ kể chuyện đến 12 giờ'], 1, 'Đi ngủ đúng giờ giúp em khoẻ mạnh.'),
    Q('Ăn cơm em nên?', ['Vừa ăn vừa xem ti vi', 'Ngồi ngay ngắn, ăn đúng bữa', 'Bỏ bữa', 'Vừa ăn vừa chạy'], 1, 'Ăn đúng bữa, ngồi ngay ngắn là nền nếp tốt.'),
    Q('Việc nào nên làm hàng ngày?', ['Tập thể dục buổi sáng', 'Thức khuya xem ti vi', 'Bỏ bữa sáng', 'Không tắm rửa'], 0, 'Tập thể dục mỗi sáng giúp em khoẻ và nhanh nhẹn.'),
    Q('Lịch sinh hoạt tốt là?', ['Học – chơi – ngủ đúng giờ', 'Tuỳ thích lúc nào cũng được', 'Thức khuya, dậy muộn', 'Bỏ bữa, ngủ ngày'], 0, 'Nề nếp đúng giờ là thói quen tốt.'),
    Q('Bạn nào sinh hoạt nền nếp?', ['Bạn Lan thức dậy 6h, đi ngủ 9h', 'Bạn Tú thức đến 12h đêm', 'Bạn Mai ngủ ngày', 'Bạn Hà bỏ ăn sáng'], 0, 'Đi ngủ và thức dậy đúng giờ là nền nếp.'),
  ]),

  M(10, 'Chăm chỉ học tập', [
    Q('Đến giờ học bài, em nên?', ['Học ngay', 'Đợi mẹ nhắc 5 lần', 'Vừa học vừa chơi', 'Trì hoãn đến mai'], 0, 'Chủ động học bài là biểu hiện chăm chỉ.'),
    Q('Bài khó em làm sao?', ['Bỏ qua luôn', 'Suy nghĩ, hỏi cô hoặc bố mẹ', 'Chép bạn', 'Khóc'], 1, 'Cố gắng suy nghĩ và hỏi là cách học tốt.'),
    Q('Trước khi đến lớp em nên?', ['Đọc trước bài mới', 'Ngủ thêm', 'Xem hoạt hình', 'Quên hết bài cũ'], 0, 'Đọc trước bài giúp em hiểu nhanh hơn khi cô giảng.'),
    Q('Bạn nào chăm chỉ?', ['Bạn Mai làm bài tập đầy đủ mỗi tối', 'Bạn Tú quên làm bài', 'Bạn Hà ngủ trong giờ học', 'Bạn Bình chép bài bạn'], 0, 'Làm bài tập đầy đủ là biểu hiện chăm chỉ.'),
    Q('Khi cô giao bài về nhà, em nên?', ['Ghi vào sổ và làm đầy đủ', 'Quên luôn', 'Bảo bạn làm hộ', 'Cãi cô không làm'], 0, 'Ghi bài và hoàn thành là điều ngoan.'),
    Q('Chăm học giúp em?', ['Học giỏi, hiểu bài', 'Mệt mỏi vô ích', 'Bị bạn chê', 'Không ai khen'], 0, 'Chăm chỉ là chìa khoá để học giỏi.'),
  ]),

  M(11, 'Chào hỏi, cảm ơn, xin lỗi', [
    Q('Gặp bác hàng xóm, em nên?', ['"Cháu chào bác ạ"', 'Đi thẳng', '"Ê bác"', 'Cười rồi chạy'], 0, 'Chào hỏi lễ phép thể hiện em là cháu ngoan.'),
    Q('Ai đó cho em quà, em nói gì?', ['Cảm ơn ạ', 'Không nói gì', 'Đòi thêm', '"Có vậy thôi à"'], 0, 'Nói "cảm ơn" là biểu hiện biết ơn.'),
    Q('Em vô tình va vào bạn, em nói gì?', ['Xin lỗi bạn', 'Mắng lại bạn', 'Bỏ chạy', 'Cười như không có gì'], 0, '"Xin lỗi" giúp tình bạn bền chặt.'),
    Q('Bạn cho em mượn bút, em nên?', ['Cảm ơn bạn rồi giữ luôn', 'Cảm ơn và trả bạn khi xong', 'Không nói gì', 'Đòi mượn cả hộp bút'], 1, 'Cảm ơn và trả đúng là phép lịch sự.'),
    Q('Khi làm sai em nên?', ['Đổ lỗi cho người khác', 'Xin lỗi và sửa sai', 'Khóc ăn vạ', 'Bỏ chạy'], 1, 'Xin lỗi là biểu hiện trung thực và biết nhận lỗi.'),
    Q('Bạn nào lễ phép?', ['Bạn Lan biết cảm ơn và xin lỗi', 'Bạn Tú không bao giờ chào ai', 'Bạn Hà cãi người lớn', 'Bạn Bình nói tục'], 0, 'Cảm ơn, xin lỗi là dấu hiệu của bạn nhỏ ngoan.'),
  ]),

  M(12, 'Trung thực', [
    Q('Em đánh vỡ chiếc cốc, em nên?', ['Giấu mảnh vỡ đi', 'Nhận lỗi với mẹ', 'Đổ tại em bé', 'Khóc to cho mẹ thương'], 1, 'Nhận lỗi là biểu hiện trung thực.'),
    Q('Em nhặt được 10 nghìn ở sân trường, em nên?', ['Giấu vào túi', 'Đưa cô giáo trả người mất', 'Đi mua quà luôn', 'Cho bạn thân'], 1, 'Trả lại đồ nhặt được là biểu hiện trung thực.'),
    Q('Bạn rủ em chép bài kiểm tra, em nên?', ['Chép cùng cho vui', 'Từ chối và tự làm', 'Đe doạ bạn', 'Hô cô giáo phạt bạn'], 1, 'Tự làm bài là trung thực với chính mình.'),
    Q('Mẹ hỏi "Con đã làm bài chưa?", chưa làm em nên?', ['Nói dối là làm rồi', 'Nói thật và làm ngay', 'Im lặng', 'Khóc'], 1, 'Nói thật và hoàn thành ngay là tốt nhất.'),
    Q('Trung thực nghĩa là?', ['Nói dối khéo', 'Nói thật và làm thật', 'Giữ bí mật xấu', 'Đổ lỗi cho người khác'], 1, 'Trung thực là sống thật, không gian dối.'),
    Q('Bạn nào trung thực?', ['Bạn An tự nhận lỗi khi làm sai', 'Bạn Tú đổ lỗi cho bạn khác', 'Bạn Hà nói dối mẹ', 'Bạn Bình chép bài bạn'], 0, 'Tự nhận lỗi là biểu hiện trung thực.'),
  ]),

  M(13, 'Tự giác làm việc của mình', [
    Q('Sáng mai đi học, ai soạn sách vở?', ['Mẹ soạn', 'Em tự soạn', 'Bố soạn', 'Anh chị soạn'], 1, 'Tự soạn sách là biểu hiện tự giác.'),
    Q('Đến giờ học bài, em nên?', ['Đợi mẹ nhắc', 'Tự ngồi vào bàn học', 'Đi chơi đã', 'Vờ quên'], 1, 'Tự giác ngồi học là biểu hiện ngoan.'),
    Q('Quần áo ngủ của em, ai cất?', ['Mẹ cất', 'Em tự gấp và cất', 'Để giữa giường', 'Vứt xuống đất'], 1, 'Tự gấp quần áo là việc nhỏ rất đáng khen.'),
    Q('Bạn nào tự giác?', ['Bạn Mai tự đánh răng mỗi tối', 'Bạn Tú đợi mẹ chải đầu', 'Bạn Hà nhờ mẹ mặc quần áo', 'Bạn Bình bảo mẹ làm bài hộ'], 0, 'Việc của mình em tự làm — đó là tự giác.'),
    Q('Đi học về, ai cất cặp?', ['Em tự cất', 'Mẹ cất', 'Em bé cất', 'Vứt ngoài cửa'], 0, 'Tự cất cặp là việc của em.'),
    Q('Tự giác giúp em?', ['Trưởng thành, được tin yêu', 'Mệt mỏi', 'Bị bố mẹ mắng', 'Bị bạn chê'], 0, 'Tự giác giúp em lớn lên và được tin yêu.'),
  ]),

  M(14, 'Lời nói lịch sự', [
    Q('Khi nhờ bạn, em nên nói?', ['"Làm cho tao"', '"Cậu giúp tớ với"', '"Mày làm đi"', '"Phải làm ngay"'], 1, 'Lời nói nhẹ nhàng khiến bạn vui giúp.'),
    Q('Em được cô khen, em nên?', ['Vênh váo với bạn', 'Cảm ơn cô và tiếp tục cố gắng', 'Khoe khắp lớp', 'Chê bạn khác kém'], 1, 'Khiêm tốn khi được khen là tốt.'),
    Q('Khi muốn xin phép ra ngoài, em nên?', ['Đứng dậy bỏ ra', '"Thưa cô, cho con ra ngoài ạ"', 'Hét lên', 'Chạy thẳng ra'], 1, 'Xin phép là phép lịch sự cơ bản.'),
    Q('Lời nào KHÔNG lịch sự?', ['"Cảm ơn"', '"Xin lỗi"', '"Cút đi"', '"Cho mình mượn nhé"'], 2, '"Cút đi" là lời nói thô lỗ.'),
    Q('Khi không đồng ý với bạn, em nên?', ['Quát bạn', 'Nói nhẹ nhàng lí do', 'Đánh bạn', 'Bỏ chạy'], 1, 'Trình bày nhẹ nhàng giúp giữ tình bạn.'),
    Q('Bạn nào nói lịch sự?', ['Bạn Mai luôn dùng "ạ", "vâng"', 'Bạn Tú nói tục', 'Bạn Hà hay cãi lại người lớn', 'Bạn Bình la hét trong lớp'], 0, 'Dùng "ạ", "vâng" là biểu hiện lịch sự.'),
  ]),

  M(15, 'An toàn khi vui chơi', [
    Q('Em thấy bạn trèo cây cao, em nên?', ['Trèo theo', 'Khuyên bạn xuống vì nguy hiểm', 'Cổ vũ bạn', 'Quay phim cho vui'], 1, 'Trèo cao rất nguy hiểm, cần khuyên bạn xuống.'),
    Q('Chơi gần đường lớn, em nên?', ['Chạy ra giữa đường', 'Chơi vào sân, vỉa hè an toàn', 'Đứng giữa đường vẫy xe', 'Chạy qua đường khi xe đang chạy'], 1, 'Chơi ở chỗ an toàn để tránh tai nạn.'),
    Q('Đồ vật nào KHÔNG nên dùng để chơi?', ['Quả bóng', 'Dao, kéo nhọn', 'Hộp xếp hình', 'Bút chì màu'], 1, 'Dao, kéo nhọn rất dễ gây thương tích.'),
    Q('Khi chơi xích đu, em nên?', ['Ngồi vững, đung đưa nhẹ', 'Đứng trên xích đu', 'Đẩy bạn thật mạnh', 'Nhảy xuống khi đang đu'], 0, 'Ngồi vững giúp em an toàn.'),
    Q('Thấy ổ điện hở, em nên?', ['Chạm tay vào', 'Tránh xa và báo người lớn', 'Cắm que vào thử', 'Đổ nước vào'], 1, 'Ổ điện hở rất nguy hiểm — báo người lớn ngay.'),
    Q('Khi vui chơi, em cần nhớ?', ['Chỉ vui là được, không cần an toàn', 'An toàn quan trọng nhất', 'Càng mạo hiểm càng hay', 'Không cần ai nhắc'], 1, 'An toàn luôn được đặt lên hàng đầu.'),
  ]),

  M(16, 'An toàn giao thông cho học sinh lớp 1', [
    Q('Em đi bộ trên đường nên đi ở đâu?', ['Giữa đường', 'Sát mép phải hoặc trên vỉa hè', 'Đi giật lùi', 'Đi giữa làn ô tô'], 1, 'Đi sát mép phải hoặc vỉa hè là an toàn.'),
    Q('Đèn tín hiệu giao thông màu đỏ nghĩa là?', ['Dừng lại', 'Đi nhanh', 'Đi chậm', 'Tuỳ ý'], 0, 'Đèn đỏ là dừng lại — quy tắc cơ bản.'),
    Q('Đèn xanh nghĩa là?', ['Dừng lại', 'Được phép đi', 'Đứng tại chỗ', 'Quay lại'], 1, 'Đèn xanh được phép đi.'),
    Q('Sang đường, em nên?', ['Tự chạy qua', 'Nắm tay người lớn và đi vạch dành cho người đi bộ', 'Nhắm mắt chạy', 'Vừa đi vừa nghe nhạc'], 1, 'Đi cùng người lớn và qua vạch sang đường là an toàn.'),
    Q('Khi ngồi xe máy, em phải?', ['Đứng lên ghế', 'Đội mũ bảo hiểm và ôm chặt người lái', 'Vẫy tay sang hai bên', 'Tự nhảy xuống'], 1, 'Mũ bảo hiểm bảo vệ đầu em khi va chạm.'),
    Q('Ô tô đang chạy, em không nên?', ['Ngồi yên thắt dây an toàn', 'Thò đầu ra ngoài cửa sổ', 'Trò chuyện nhẹ với bố mẹ', 'Nhìn ra ngoài'], 1, 'Thò đầu ra ngoài rất nguy hiểm.'),
  ]),

  M(17, 'Ôn tập HK1 — Em là bạn nhỏ ngoan', [
    Q('Đi học về, việc đầu tiên em nên làm?', ['Chào người lớn trong nhà', 'Bật ti vi', 'Đòi ăn vặt', 'Vào phòng đóng cửa'], 0, 'Chào hỏi luôn là việc đầu tiên khi về nhà.'),
    Q('Bạn vấp ngã, em nên?', ['Đỡ bạn dậy', 'Cười', 'Bỏ đi', 'Quay video'], 0, 'Đỡ bạn dậy là biểu hiện thương yêu.'),
    Q('Sách vở em nên?', ['Bọc bìa, giữ sạch', 'Vẽ bậy', 'Xé giấy', 'Vứt lung tung'], 0, 'Sách vở sạch giúp em yêu việc học hơn.'),
    Q('Khi cô giáo nhắc nhở, em nên?', ['Cãi cô', 'Lắng nghe và xin lỗi', 'Khóc to', 'Bỏ ra ngoài'], 1, 'Lắng nghe và sửa sai là biểu hiện ngoan.'),
    Q('Đèn đỏ giao thông nghĩa là?', ['Dừng lại', 'Đi nhanh', 'Quay đầu', 'Tuỳ ý'], 0, 'Đèn đỏ là dừng — quy tắc an toàn.'),
    Q('Bạn nào là học sinh ngoan?', ['Bạn biết chào hỏi, chăm học, đoàn kết', 'Bạn hay cãi cô', 'Bạn chép bài bạn khác', 'Bạn đánh em nhỏ'], 0, 'Lễ phép, chăm học, đoàn kết là dấu hiệu của bạn ngoan.'),
  ]),

  M(18, 'Kiểm tra cuối HK1', [
    Q('Lời chào nào lễ phép?', ['"Cháu chào bác ạ"', '"Hi bác"', '"Ê bác"', 'Im lặng'], 0, '"Cháu chào… ạ" là cách chào lễ phép.'),
    Q('Bạn em buồn, em nên?', ['An ủi bạn', 'Trêu thêm', 'Bỏ đi', 'Cười nhạo'], 0, 'An ủi bạn là yêu thương.'),
    Q('Em làm vỡ chiếc bát, em nên?', ['Nói dối', 'Nhận lỗi', 'Đổ tại em bé', 'Trốn'], 1, 'Trung thực nhận lỗi là tốt.'),
    Q('Đi học em mang theo?', ['Sách vở, bút, cặp', 'Đồ chơi', 'Kẹo bánh', 'Điện thoại'], 0, 'Đồ dùng học tập là thứ cần thiết.'),
    Q('Bạn nào chăm chỉ?', ['Tự giác làm bài đầy đủ', 'Quên làm bài', 'Chép bài bạn', 'Ngủ trong lớp'], 0, 'Tự giác làm bài đầy đủ là chăm chỉ.'),
    Q('Khi qua đường em nên?', ['Nắm tay người lớn, đi vạch sang đường', 'Tự chạy qua', 'Nhắm mắt chạy', 'Đứng giữa đường vẫy tay'], 0, 'Đi cùng người lớn và qua vạch là an toàn.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Em yêu quê hương', [
    Q('Quê hương là gì với em?', ['Một nơi xa lạ', 'Nơi em sinh ra và lớn lên', 'Một thành phố nước ngoài', 'Một địa điểm trên ti vi'], 1, 'Quê hương là nơi gắn bó thân thương với em.'),
    Q('Yêu quê hương, em nên?', ['Giữ gìn cảnh đẹp quê', 'Vứt rác bừa bãi', 'Bẻ cây phá hoa', 'Chê quê mình'], 0, 'Giữ gìn cảnh đẹp là yêu quê.'),
    Q('Tết về quê thăm ông bà, em nên?', ['Chào hỏi lễ phép, giúp đỡ ông bà', 'Đòi quà', 'Cãi ông bà', 'Trốn không về'], 0, 'Lễ phép, giúp ông bà là biểu hiện yêu quê.'),
    Q('Bạn nào yêu quê hương?', ['Bạn Lan kể về làng quê với vẻ tự hào', 'Bạn Tú chê quê quê mùa', 'Bạn Hà nói "Quê tớ chán"', 'Bạn Bình không bao giờ về quê'], 0, 'Tự hào về quê là biểu hiện yêu quê.'),
    Q('Cây đa, giếng nước, sân đình… là?', ['Hình ảnh quen của quê hương Việt Nam', 'Đồ vật ở nước ngoài', 'Không liên quan đến em', 'Sách nói thế'], 0, 'Đó là những hình ảnh quê hương thân thuộc.'),
    Q('Em có thể làm gì cho quê em?', ['Học giỏi để sau lớn xây quê', 'Phá hoại làng xóm', 'Bỏ quê đi', 'Chê bai làng xóm'], 0, 'Học giỏi để đóng góp cho quê là yêu quê.'),
  ]),

  M(20, 'Đón Tết cổ truyền', [
    Q('Tết Nguyên đán là tết của?', ['Nước ngoài', 'Người Việt Nam', 'Riêng trẻ con', 'Riêng người lớn'], 1, 'Tết Nguyên đán là Tết cổ truyền Việt Nam.'),
    Q('Bánh truyền thống ngày Tết là?', ['Bánh chưng, bánh tét', 'Bánh mì kẹp', 'Pizza', 'Hamburger'], 0, 'Bánh chưng, bánh tét là hai loại bánh Tết truyền thống.'),
    Q('Sáng mùng 1 Tết, em nên?', ['Chúc Tết ông bà cha mẹ', 'Ngủ đến trưa', 'Đòi lì xì rồi bỏ đi', 'Cãi nhau với anh chị'], 0, 'Chúc Tết là phong tục đẹp đầu năm.'),
    Q('Khi được lì xì em nên?', ['Mở ngay xem nhiều ít', 'Cảm ơn và nhận hai tay', 'Đòi thêm', 'Vứt phong bao'], 1, 'Nhận hai tay và cảm ơn là lễ phép.'),
    Q('Hoa Tết miền Bắc thường là?', ['Hoa đào', 'Hoa hướng dương', 'Hoa hồng', 'Hoa cúc trắng'], 0, 'Hoa đào là hoa Tết miền Bắc.'),
    Q('Bạn nào đón Tết ngoan?', ['Bạn Mai chúc Tết, giúp mẹ dọn nhà', 'Bạn Tú đòi lì xì rồi cãi mẹ', 'Bạn Hà xé tiền lì xì', 'Bạn Bình ngủ đến chiều'], 0, 'Chúc Tết và giúp mẹ là biểu hiện ngoan.'),
  ]),

  M(21, 'Biết ơn người lao động', [
    Q('Bác bảo vệ trường làm gì?', ['Bán hàng', 'Trông coi giữ an toàn cho trường', 'Dạy học', 'Lau bảng'], 1, 'Bác bảo vệ giữ an toàn cho thầy trò.'),
    Q('Cô lao công giúp trường em điều gì?', ['Dạy hát', 'Quét dọn, giữ trường sạch', 'Bán đồ ăn', 'Sửa máy tính'], 1, 'Cô lao công làm sạch trường.'),
    Q('Gặp cô lao công, em nên?', ['Chào cô lễ phép', 'Đi thẳng', 'Cười nhạo', 'Vứt rác trêu cô'], 0, 'Cô lao công cũng cần được tôn trọng.'),
    Q('Để giúp cô lao công đỡ vất vả, em nên?', ['Vứt rác đúng nơi quy định', 'Vứt rác bừa bãi', 'Phá đồ trong sân', 'Bôi bẩn tường'], 0, 'Vứt rác đúng chỗ giảm việc cho cô lao công.'),
    Q('Ai trồng ra hạt gạo em ăn?', ['Bác nông dân', 'Bác sĩ', 'Cô giáo', 'Chú công an'], 0, 'Hạt gạo là công của bác nông dân.'),
    Q('Em biết ơn người lao động bằng cách?', ['Trân trọng đồ ăn, đồ dùng', 'Lãng phí cơm, bánh', 'Phá đồ', 'Chê đồ xấu'], 0, 'Trân trọng đồ ăn là biết ơn người làm ra.'),
  ]),

  M(22, 'Tết Nguyên đán — Phong tục đẹp', [
    Q('Mùng 1 Tết em thường gặp ai trước?', ['Bố mẹ, ông bà trong nhà', 'Người lạ ngoài đường', 'Bạn xa lạ', 'Người nước ngoài'], 0, 'Sáng mùng 1, gia đình quây quần là phong tục đẹp.'),
    Q('Mâm ngũ quả ngày Tết có ý nghĩa gì?', ['Mong năm mới sung túc', 'Để bán', 'Để khoe', 'Để trang trí ti vi'], 0, 'Mâm ngũ quả thể hiện mong ước đủ đầy.'),
    Q('Khi đi chúc Tết họ hàng, em nên?', ['Lễ phép chào hỏi mọi người', 'Đi thẳng vào ăn', 'Chỉ chào người cho lì xì nhiều', 'Cãi anh chị'], 0, 'Chào hỏi lễ phép là phong tục đẹp ngày Tết.'),
    Q('Tết là dịp để em?', ['Bày tỏ lòng biết ơn ông bà cha mẹ', 'Ăn nhiều bánh kẹo', 'Đốt pháo nguy hiểm', 'Tranh giành lì xì'], 0, 'Tết là dịp sum vầy và biết ơn.'),
    Q('Em không nên làm gì trong dịp Tết?', ['Đốt pháo, ném pháo', 'Chúc Tết', 'Giúp mẹ dọn nhà', 'Mặc áo mới'], 0, 'Đốt pháo bị cấm và rất nguy hiểm.'),
    Q('Quần áo ngày Tết em nên?', ['Mặc gọn gàng, sạch sẽ', 'Mặc đồ rách', 'Mặc đồ ngủ ra đường', 'Không cần tắm rửa'], 0, 'Mặc gọn gàng để đón năm mới.'),
  ]),

  M(23, 'Yêu lao động', [
    Q('Ở nhà em có thể giúp mẹ?', ['Quét nhà, lau bàn nhỏ', 'Đứng nhìn mẹ làm', 'Đòi mẹ làm hộ', 'Bày bừa thêm'], 0, 'Việc nhỏ vừa sức là cách giúp mẹ.'),
    Q('Khi lao động ở lớp, em nên?', ['Tham gia tích cực', 'Trốn', 'Chỉ ngồi xem', 'Phá việc bạn'], 0, 'Tham gia lao động là biểu hiện yêu lao động.'),
    Q('Lao động giúp em?', ['Khoẻ mạnh, biết quý sức lao động', 'Mệt mỏi vô ích', 'Lười hơn', 'Bị mắng'], 0, 'Lao động giúp em trưởng thành.'),
    Q('Bạn nào yêu lao động?', ['Bạn An tự dọn chỗ ngồi sau khi ăn', 'Bạn Tú để bạn khác dọn hộ', 'Bạn Hà vứt rác bừa bãi', 'Bạn Bình phá dụng cụ'], 0, 'Tự dọn chỗ ngồi là yêu lao động.'),
    Q('Khi mẹ nấu cơm, em nên?', ['Đến nhặt rau giúp mẹ', 'Đòi ăn vặt', 'Mở ti vi to', 'Trêu em bé khóc'], 0, 'Nhặt rau cùng mẹ là việc nhỏ ý nghĩa.'),
    Q('Em không nên?', ['Chê việc nhà bẩn không làm', 'Sẵn sàng làm việc nhỏ', 'Giúp đỡ người khác', 'Yêu công việc'], 0, 'Không nên chê việc — việc nào cũng quý.'),
  ]),

  M(24, 'Thật thà', [
    Q('Em thấy bạn lấy bút của bạn khác, em nên?', ['Im lặng', 'Khuyên bạn trả lại', 'Lấy theo', 'Cười cho vui'], 1, 'Khuyên bạn làm điều đúng là tốt.'),
    Q('Em nhặt được chiếc khăn quàng đỏ, em nên?', ['Giữ làm của mình', 'Đưa cô tìm chủ', 'Vứt đi', 'Cho người khác'], 1, 'Đưa cô tìm chủ là thật thà.'),
    Q('Mẹ hỏi "Con đã ăn cơm chưa?", em chưa ăn nên?', ['Nói dối là ăn rồi', 'Nói thật', 'Im lặng', 'Khóc'], 1, 'Nói thật mới là thật thà.'),
    Q('Khi em làm sai, thật thà nghĩa là?', ['Đổ lỗi cho bạn', 'Nhận lỗi mình', 'Im lặng giấu', 'Khóc to'], 1, 'Nhận lỗi là biểu hiện thật thà.'),
    Q('Bạn nào thật thà?', ['Bạn An tự khai mình quên làm bài', 'Bạn Tú đổ lỗi cho bạn khác', 'Bạn Hà chép bài', 'Bạn Bình nói dối cô'], 0, 'Tự khai khi sai là thật thà.'),
    Q('Thật thà mang đến điều gì?', ['Được mọi người tin yêu', 'Bị bạn ghét', 'Bị mắng nhiều hơn', 'Không ai để ý'], 0, 'Người thật thà luôn được tin yêu.'),
  ]),

  M(25, 'Đoàn kết với bạn trong lớp', [
    Q('Bạn mới vào lớp, em nên?', ['Làm quen, rủ bạn chơi', 'Chê bạn lạ', 'Bỏ mặc bạn', 'Cô lập bạn'], 0, 'Làm quen giúp bạn nhanh hoà nhập.'),
    Q('Bạn không có bánh ăn vặt, em đang ăn, em nên?', ['Chia cho bạn một miếng', 'Ăn hết một mình', 'Trêu bạn', 'Giấu bánh đi'], 0, 'Chia sẻ là biểu hiện đoàn kết.'),
    Q('Trong lớp có bạn khuyết tật, em nên?', ['Trêu chọc', 'Quan tâm, giúp đỡ bạn', 'Tránh xa', 'Cười nhạo'], 1, 'Bạn nào cũng cần được quan tâm như nhau.'),
    Q('Khi cả lớp lao động, em nên?', ['Cùng làm với cả lớp', 'Trốn ra góc chơi', 'Phá bạn đang làm', 'Đứng nhìn'], 0, 'Cùng làm là đoàn kết.'),
    Q('Bạn buồn vì mẹ ốm, em nên?', ['An ủi, hỏi thăm', 'Trêu bạn buồn hơn', 'Mặc kệ', 'Khoe nhà mình vui'], 0, 'An ủi giúp bạn vơi buồn.'),
    Q('Bạn nào đoàn kết tốt?', ['Bạn Lan giúp bạn ốm chép bài', 'Bạn Tú nói xấu bạn', 'Bạn Hà chia phe trong lớp', 'Bạn Bình đánh bạn'], 0, 'Giúp bạn lúc ốm là tình bạn đẹp.'),
  ]),

  M(26, 'Bảo vệ của công', [
    Q('Đồ dùng chung của lớp em nên?', ['Giữ gìn cẩn thận', 'Phá cho vui', 'Mang về nhà', 'Vẽ tên lên'], 0, 'Đồ dùng chung phải được giữ gìn.'),
    Q('Bạn vẽ bậy lên tường, em nên?', ['Vẽ cùng', 'Nhắc bạn dừng lại', 'Mặc kệ', 'Khen bạn'], 1, 'Nhắc bạn dừng việc xấu là đúng.'),
    Q('Cây cối trong sân trường em nên?', ['Bẻ cành chơi', 'Chăm sóc, tưới nước', 'Hái hoa', 'Khắc tên vào thân cây'], 1, 'Chăm sóc cây là biểu hiện yêu trường.'),
    Q('Bàn ghế trong lớp em nên?', ['Khắc tên', 'Giữ sạch không vẽ bậy', 'Đứng lên ghế nhảy', 'Đập phá'], 1, 'Bàn ghế là của công, cần giữ sạch.'),
    Q('Khi tan học, em nên?', ['Tự dọn chỗ ngồi', 'Để bừa cho cô lao công', 'Vứt rác xuống đất', 'Lật bàn'], 0, 'Dọn chỗ ngồi là biểu hiện bảo vệ của công.'),
    Q('Bạn nào bảo vệ của công?', ['Bạn Mai tắt đèn khi rời lớp', 'Bạn Tú đập bàn', 'Bạn Hà vẽ bậy lên tường', 'Bạn Bình phá khoá tủ'], 0, 'Tắt đèn khi không dùng là biểu hiện ý thức tốt.'),
  ]),

  M(27, 'Yêu thiên nhiên — bảo vệ cây xanh', [
    Q('Cây xanh giúp em?', ['Cho bóng mát, không khí trong lành', 'Gây phiền', 'Làm bẩn sân', 'Không có ích'], 0, 'Cây xanh rất có ích cho con người.'),
    Q('Thấy bạn bẻ cành cây, em nên?', ['Khuyên bạn dừng', 'Bẻ cùng', 'Cười cổ vũ', 'Hái hoa thêm'], 0, 'Nhắc bạn không phá cây là việc đúng.'),
    Q('Để cây phát triển, em nên?', ['Tưới nước, không bẻ cành', 'Cào gốc', 'Cắt rễ', 'Đốt lá'], 0, 'Chăm sóc giúp cây xanh tốt.'),
    Q('Em không nên?', ['Vứt rác vào gốc cây', 'Tưới cây', 'Nhổ cỏ dại quanh gốc cây', 'Trồng thêm cây'], 0, 'Vứt rác vào gốc cây làm hại cây.'),
    Q('Bạn nào yêu thiên nhiên?', ['Bạn An tưới hoa mỗi sáng', 'Bạn Tú bắt chim phá tổ', 'Bạn Hà bẻ cây bonsai', 'Bạn Bình đốt rác lung tung'], 0, 'Tưới hoa là biểu hiện yêu thiên nhiên.'),
    Q('Em có thể làm gì cho thiên nhiên?', ['Trồng thêm cây và chăm sóc', 'Chặt cây để chơi', 'Vứt nilông bừa bãi', 'Đốt rừng'], 0, 'Trồng cây là việc làm đẹp.'),
  ]),

  M(28, 'Yêu thương động vật', [
    Q('Thấy chú mèo bị thương, em nên?', ['Giúp đỡ hoặc báo người lớn', 'Đá thêm cho mèo chạy', 'Cười nhạo', 'Bỏ mặc'], 0, 'Giúp đỡ động vật là biểu hiện yêu thương.'),
    Q('Em không nên?', ['Ném đá chó mèo', 'Cho thú cưng ăn', 'Vuốt ve nhẹ nhàng', 'Chăm sóc thú cưng'], 0, 'Ném đá là hành vi tàn nhẫn.'),
    Q('Bạn em bắt chim phá tổ, em nên?', ['Khuyên bạn thả chim ra', 'Bắt cùng', 'Cười cổ vũ', 'Phá thêm tổ khác'], 0, 'Bảo vệ tổ chim là yêu thương động vật.'),
    Q('Khi nuôi thú cưng, em phải?', ['Cho ăn, tắm rửa, vệ sinh đầy đủ', 'Bỏ đói', 'Đánh đập', 'Nhốt suốt ngày'], 0, 'Nuôi thú cưng đòi hỏi trách nhiệm.'),
    Q('Bạn nào thương động vật?', ['Bạn Mai cho chim ăn vụn bánh', 'Bạn Tú đá chó hàng xóm', 'Bạn Hà giật đuôi mèo', 'Bạn Bình ném đá chim'], 0, 'Cho chim ăn là biểu hiện yêu thương.'),
    Q('Yêu động vật giúp em?', ['Trở nên dịu dàng, biết quan tâm', 'Ác hơn', 'Bị bạn chê', 'Không có ích'], 0, 'Yêu động vật giúp tâm hồn em dịu dàng.'),
  ]),

  M(29, 'Tự lập', [
    Q('Em tự làm việc gì hàng ngày?', ['Đánh răng, mặc quần áo', 'Đợi mẹ làm hộ', 'Cãi mẹ', 'Khóc đòi'], 0, 'Việc cá nhân em nên tự làm.'),
    Q('Cặp sách của em ai mang đến lớp?', ['Em tự mang', 'Mẹ mang hộ', 'Bố mang', 'Anh chị mang'], 0, 'Tự mang cặp là biểu hiện tự lập.'),
    Q('Bạn nào tự lập?', ['Bạn Mai tự thắt khăn quàng', 'Bạn Tú đợi mẹ buộc dây giày', 'Bạn Hà nhờ mẹ làm bài hộ', 'Bạn Bình đòi mẹ bón cơm'], 0, 'Tự thắt khăn là việc nhỏ cần tự làm.'),
    Q('Đến giờ ăn, em nên?', ['Tự xúc cơm', 'Đợi mẹ bón', 'Bỏ ăn', 'Cãi mẹ'], 0, 'Tự xúc cơm là biểu hiện tự lập.'),
    Q('Tự lập giúp em?', ['Trưởng thành, được tin yêu', 'Mệt mỏi vô ích', 'Bị chê', 'Không có ích'], 0, 'Tự lập giúp em lớn lên và trưởng thành.'),
    Q('Em có thể tự làm việc nào sau đây?', ['Soạn sách vở', 'Lái ô tô', 'Đi chợ một mình xa nhà', 'Nấu bếp gas'], 0, 'Soạn sách vở là việc phù hợp lứa tuổi lớp 1.'),
  ]),

  M(30, 'An toàn khi ở nhà một mình', [
    Q('Khi ở nhà một mình, người lạ gõ cửa em nên?', ['Mở cửa cho vào', 'Không mở, không nói chuyện', 'Mời vào ăn cơm', 'Chỉ chỗ giấu tiền'], 1, 'Tuyệt đối không mở cửa cho người lạ.'),
    Q('Có cuộc gọi lạ hỏi tên bố mẹ, em nên?', ['Trả lời rõ ràng', 'Không cung cấp thông tin', 'Đọc số điện thoại bố mẹ', 'Đọc địa chỉ nhà'], 1, 'Không cung cấp thông tin cho người lạ.'),
    Q('Bếp gas, ổ điện em có nên tự dùng không?', ['Có, cứ thử', 'Không, rất nguy hiểm', 'Tuỳ thích', 'Đôi khi'], 1, 'Bếp gas và điện cần người lớn — em không tự dùng.'),
    Q('Khi có khói trong nhà, em nên?', ['Trốn vào phòng', 'Chạy ra ngoài và gọi người lớn', 'Đứng xem', 'Bật quạt cho nhiều khói'], 1, 'Khói có thể là dấu hiệu cháy — em ra ngoài và báo người lớn.'),
    Q('Số điện thoại khẩn cấp khi cháy là?', ['113', '114', '115', '116'], 1, 'Số 114 là số gọi cứu hoả.'),
    Q('Số điện thoại công an là?', ['113', '114', '115', '116'], 0, 'Số 113 là số gọi công an.'),
  ]),

  M(31, 'Phòng tránh xâm hại cơ thể', [
    Q('Vùng kín cơ thể em là?', ['Cần được tôn trọng, không cho ai chạm', 'Ai cũng có thể chạm', 'Khoe với bạn', 'Không quan trọng'], 0, 'Vùng kín là riêng tư của em, không cho người khác tuỳ tiện chạm.'),
    Q('Người lạ rủ em đi chơi xa, em nên?', ['Đi luôn', 'Không đi, báo bố mẹ', 'Hỏi đường rồi đi', 'Đi cùng bạn cho vui'], 1, 'Tuyệt đối không đi với người lạ — báo bố mẹ ngay.'),
    Q('Ai đó cho quà rồi yêu cầu em làm điều không vui, em nên?', ['Nhận và làm', 'Trả quà, từ chối và báo bố mẹ', 'Im lặng nghe theo', 'Giấu chuyện'], 1, 'Trả quà, từ chối và báo bố mẹ là đúng.'),
    Q('Khi có điều khó chịu xảy ra với cơ thể em, em nên?', ['Giữ bí mật', 'Nói với người em tin yêu (mẹ, cô)', 'Sợ không kể', 'Đổ lỗi cho mình'], 1, 'Phải kể với người em tin yêu để được giúp đỡ.'),
    Q('Khi đi vệ sinh ở trường, em nên?', ['Đóng cửa cẩn thận', 'Mở cửa cho thoáng', 'Rủ bạn vào cùng', 'Bỏ cửa'], 0, 'Đóng cửa nhà vệ sinh là tôn trọng và an toàn cho em.'),
    Q('Cảm giác không an toàn em nên?', ['Kể với bố mẹ hoặc cô giáo ngay', 'Im lặng', 'Giấu kĩ', 'Tự gánh chịu'], 0, 'Luôn chia sẻ để được người lớn bảo vệ.'),
  ]),

  M(32, 'Yêu Tổ quốc Việt Nam', [
    Q('Tổ quốc em là?', ['Một nước nào đó', 'Nước Việt Nam', 'Hành tinh khác', 'Châu lục'], 1, 'Tổ quốc em là Việt Nam thân yêu.'),
    Q('Lá cờ Việt Nam có gì?', ['Nền đỏ, sao vàng', 'Nền xanh, sao trắng', 'Nền vàng, sao đỏ', 'Nền trắng, sao xanh'], 0, 'Cờ đỏ sao vàng là Quốc kỳ Việt Nam.'),
    Q('Khi chào cờ, em nên?', ['Đứng nghiêm, hát Quốc ca', 'Cười đùa', 'Ngồi xuống', 'Chạy nhảy'], 0, 'Tư thế nghiêm trang khi chào cờ là tôn kính Tổ quốc.'),
    Q('Bác Hồ là?', ['Một người xa lạ', 'Vị lãnh tụ kính yêu của dân tộc Việt Nam', 'Một bạn nhỏ', 'Một họa sĩ'], 1, 'Bác Hồ là vị Cha già kính yêu của dân tộc.'),
    Q('Yêu Tổ quốc, em nên?', ['Học chăm để sau xây dựng đất nước', 'Chê đất nước mình', 'Phá hoại cảnh đẹp', 'Vứt rác bừa bãi'], 0, 'Học giỏi là cách yêu nước của bạn nhỏ.'),
    Q('Khi hát Quốc ca em có cười đùa không?', ['Có', 'Không, phải trang nghiêm', 'Tuỳ thích', 'Cười nhẹ'], 1, 'Hát Quốc ca cần thái độ nghiêm trang.'),
  ]),

  M(33, 'Em làm việc tốt', [
    Q('Trên đường đi học, em thấy cụ già qua đường, em nên?', ['Dẫn cụ qua đường', 'Đi nhanh để khỏi muộn', 'Cười cụ chậm', 'Mặc kệ'], 0, 'Giúp cụ già là việc tốt nho nhỏ mỗi ngày.'),
    Q('Em nhặt được sách của bạn rơi, em nên?', ['Trả lại bạn', 'Giấu đi', 'Vứt vào sọt rác', 'Đem về nhà'], 0, 'Trả lại đồ rơi là biểu hiện trung thực.'),
    Q('Việc tốt em có thể làm hàng ngày?', ['Giúp mẹ quét nhà', 'Phá đồ chơi em bé', 'Vứt rác lung tung', 'Trêu bạn khóc'], 0, 'Việc tốt nhỏ mỗi ngày làm em vui và mọi người yêu.'),
    Q('Khi làm được việc tốt, em nên?', ['Khoe khắp nơi', 'Vui vẻ, tiếp tục làm', 'Đòi thưởng', 'Khoe để được khen'], 1, 'Làm việc tốt vì thực sự muốn giúp, không vì khen thưởng.'),
    Q('Bạn nào hay làm việc tốt?', ['Bạn An giúp bạn ốm chép bài', 'Bạn Tú trêu bạn khóc', 'Bạn Hà vứt rác bừa', 'Bạn Bình phá đồ'], 0, 'Giúp bạn ốm là việc tốt.'),
    Q('Việc tốt mang lại điều gì?', ['Niềm vui và tình thương', 'Sự mệt mỏi', 'Bị chê', 'Không gì cả'], 0, 'Việc tốt mang đến niềm vui cho em và người khác.'),
  ]),

  M(34, 'Ôn tập HK2 — Em ngoan ở nhà và ở trường', [
    Q('Ở nhà, em là bạn nhỏ?', ['Yêu thương, lễ phép với người lớn', 'Hay cãi', 'Lười việc nhà', 'Đòi hỏi'], 0, 'Bạn nhỏ ngoan là người biết yêu thương gia đình.'),
    Q('Ở lớp, em là bạn nhỏ?', ['Lễ phép, chăm học, đoàn kết', 'Cãi cô', 'Bắt nạt bạn', 'Phá đồ lớp'], 0, 'Lễ phép, chăm học, đoàn kết là bạn ngoan ở lớp.'),
    Q('Khi qua đường em phải?', ['Nắm tay người lớn, qua vạch sang đường', 'Tự chạy qua', 'Nhắm mắt chạy', 'Đứng giữa đường'], 0, 'An toàn giao thông là điều rất quan trọng.'),
    Q('Người lạ rủ đi, em nên?', ['Đi luôn', 'Từ chối và báo bố mẹ', 'Đi cùng bạn', 'Đi cho vui'], 1, 'Tuyệt đối không đi với người lạ.'),
    Q('Em làm sai, em nên?', ['Đổ lỗi cho người khác', 'Nhận lỗi và xin lỗi', 'Im lặng', 'Khóc ăn vạ'], 1, 'Nhận lỗi là biểu hiện trung thực, ngoan ngoãn.'),
    Q('Em yêu Tổ quốc Việt Nam, em nên?', ['Học giỏi, ngoan ngoãn', 'Lười học', 'Phá hoại', 'Chê quê hương'], 0, 'Học giỏi là cách yêu nước phù hợp với em.'),
  ]),

  M(35, 'Tổng kết — Em đã lớn hơn', [
    Q('Sau một năm lớp 1, em đã biết?', ['Đọc, viết, làm toán, sống ngoan', 'Vẫn như mầm non', 'Chỉ chơi', 'Quên hết'], 0, 'Lớp 1 là bước trưởng thành lớn của em.'),
    Q('Em sẽ làm gì để giữ những điều tốt đã học?', ['Tiếp tục thực hiện mỗi ngày', 'Quên hết khi nghỉ hè', 'Làm khi có người nhắc', 'Chỉ làm khi vui'], 0, 'Thói quen tốt cần được giữ mỗi ngày.'),
    Q('Lời cảm ơn em nên dành cho?', ['Bố mẹ, ông bà, thầy cô, bạn bè', 'Chỉ bố mẹ', 'Chỉ thầy cô', 'Không ai cả'], 0, 'Biết ơn nhiều người đã yêu thương em.'),
    Q('Lên lớp 2, em mong muốn?', ['Học giỏi hơn, ngoan hơn', 'Lười hơn', 'Cãi nhiều hơn', 'Không học gì'], 0, 'Mỗi năm em hãy tốt hơn năm trước.'),
    Q('Em hứa với bố mẹ và cô giáo điều gì?', ['Cố gắng học và sống tốt', 'Không hứa gì', 'Hứa rồi quên', 'Hứa cho có'], 0, 'Lời hứa đi đôi với hành động mới có giá trị.'),
    Q('Một bạn nhỏ lớn hơn là bạn?', ['Biết yêu thương, lễ phép, trung thực, chăm chỉ', 'Hay cãi và lười', 'Không quan tâm ai', 'Chỉ thích chơi'], 0, 'Lớn không chỉ ở chiều cao, mà ở tính nết nữa.'),
  ]),
];

export const P1DD_SCENARIOS = indexBy(P1DD_WEEKS);
