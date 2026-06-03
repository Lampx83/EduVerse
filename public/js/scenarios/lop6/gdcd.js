// ============================================================
// Lớp 6 · GIÁO DỤC CÔNG DÂN — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám CT GDPT 2018 môn GDCD Lớp 6 (12 chủ đề × ~3 tuần).
// ID prefix: "S6GDCD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6GDCD', 'gdcd', n, title, qs, opts);

export const S6GDCD_WEEKS = [
  // ──────────────── HK1 ────────────────
  // ===== Chủ đề 1: Tự hào về truyền thống gia đình, dòng họ (T1–3) =====
  M(1, 'Truyền thống gia đình, dòng họ là gì?', [
    Q('Truyền thống gia đình, dòng họ là gì?', ['Là cây gia phả', 'Là tài sản vật chất do ông bà để lại', 'Là tên gọi của dòng họ', 'Là những giá trị tốt đẹp được hình thành và lưu truyền qua các thế hệ'], 3, 'Truyền thống là các giá trị tốt đẹp được kế thừa qua nhiều thế hệ.'),
    Q('Đâu là truyền thống tốt đẹp của gia đình, dòng họ Việt Nam?', ['Bao che cho nhau làm sai', 'Tranh giành tài sản', 'Ganh đua hơn thua', 'Hiếu học, yêu nước, lao động cần cù'], 3, 'Hiếu học, yêu nước, cần cù là những truyền thống đáng quý.'),
    Q('Việc làm nào thể hiện giữ gìn truyền thống dòng họ?', ['Quên tên ông bà tổ tiên', 'Không quan tâm đến lễ giỗ', 'Coi thường họ hàng nghèo', 'Tham gia giỗ tổ, lễ Tết của dòng họ'], 3, 'Tham gia các sinh hoạt dòng họ là cách giữ gìn truyền thống.'),
    Q('Ý nào KHÔNG phải truyền thống tốt đẹp?', ['Thói quen mê tín dị đoan', 'Tinh thần hiếu học', 'Nghề thủ công gia truyền', 'Lòng nhân ái'], 0, 'Mê tín dị đoan là hủ tục, không phải truyền thống tốt.'),
    Q('Nhà em có truyền thống làm nghề gốm 3 đời. Em nên?', ['Tìm hiểu, học hỏi để có thể tiếp nối nếu yêu thích', 'Không quan tâm vì là việc người lớn', 'Bỏ học để khỏi phải biết về nghề', 'Chê nghề gốm là nghề thấp kém'], 0, 'Tìm hiểu nghề truyền thống là biểu hiện tự hào dòng họ.'),
    Q('Ông nội kể chuyện thời chiến đấu của dòng họ, em nên?', ['Bịt tai vì chuyện cũ', 'Cười cợt', 'Lắng nghe và ghi nhớ những bài học', 'Bỏ ra ngoài chơi'], 2, 'Lắng nghe câu chuyện ông bà là cách trân trọng truyền thống.'),
  ]),

  M(2, 'Tự hào về truyền thống gia đình, dòng họ', [
    Q('Tự hào về truyền thống dòng họ được biểu hiện qua?', ['Khoe khoang dòng họ giàu có', 'Trân trọng, giữ gìn và phát huy những giá trị tốt đẹp của dòng họ', 'Chỉ kể về thành tích của họ mình', 'Coi thường người khác họ'], 1, 'Tự hào đúng nghĩa là trân trọng và phát huy giá trị tốt đẹp.'),
    Q('Bạn nào THỂ HIỆN tự hào truyền thống đúng nhất?', ['An chỉ kể về tổ tiên mà không làm gì', 'Tú khoe nhà mình có nhiều người làm to', 'Lan cố gắng học giỏi để xứng đáng với truyền thống hiếu học của dòng họ', 'Bình chê họ ngoại nghèo'], 2, 'Học giỏi để nối tiếp truyền thống mới là tự hào đích thực.'),
    Q('Vì sao cần tự hào về truyền thống gia đình, dòng họ?', ['Để được nhiều quà', 'Giúp ta có động lực sống tốt, có trách nhiệm và bản sắc riêng', 'Để khoe với bạn bè', 'Để được đặc quyền'], 1, 'Truyền thống là gốc rễ, giúp ta sống có trách nhiệm.'),
    Q('Hành vi nào LÀM TỔN HẠI truyền thống dòng họ?', ['Học giỏi, sống có đạo đức', 'Tham gia giỗ tổ', 'Trộm cắp, đánh nhau làm xấu danh dòng họ', 'Giúp đỡ họ hàng khó khăn'], 2, 'Hành vi xấu của một người làm ảnh hưởng danh dự cả dòng họ.'),
    Q('Em được sinh trong gia đình có truyền thống cách mạng. Em nên?', ['Coi mình hơn người khác', 'Cố gắng học tập, rèn luyện đạo đức, sống xứng đáng', 'Ỷ lại vào công lao của ông bà', 'Đòi hỏi đặc quyền'], 1, 'Sống xứng đáng với truyền thống mới là tự hào thật sự.'),
    Q('Khi bạn cùng lớp chê dòng họ em, em nên?', ['Bình tĩnh giải thích và sống tốt để chứng minh', 'Im lặng tủi thân', 'Đánh nhau với bạn', 'Cũng đi chê dòng họ bạn lại'], 0, 'Cách phản hồi văn minh là sống tốt để chứng minh.'),
  ]),

  M(3, 'Giữ gìn và phát huy truyền thống dòng họ', [
    Q('Việc làm nào PHÁT HUY truyền thống hiếu học của dòng họ?', ['Treo bằng khen của ông lên tường rồi thôi', 'Chỉ kể chuyện ông tổ học giỏi', 'Chăm chỉ học tập, đạt kết quả tốt', 'Mặc kệ việc học của bản thân'], 2, 'Phát huy nghĩa là tiếp nối bằng hành động cụ thể.'),
    Q('Gia đình em có nghề làm bánh truyền thống. Cách giữ gìn TỐT nhất?', ['Học công thức, cải tiến và quảng bá nghề', 'Bỏ nghề chuyển sang nghề khác', 'Giấu công thức không cho ai biết', 'Bán công thức cho người ngoài'], 0, 'Học, cải tiến, quảng bá là cách giữ gìn nghề truyền thống.'),
    Q('Hành vi nào KHÔNG phải giữ gìn truyền thống?', ['Tìm hiểu lịch sử dòng họ', 'Quên hết tên người thân trong họ', 'Học nghề truyền thống của gia đình', 'Tham dự lễ giỗ tổ'], 1, 'Quên tên người thân là không giữ gìn truyền thống.'),
    Q('Truyền thống "lá lành đùm lá rách" trong dòng họ thể hiện qua?', ['Cho vay nặng lãi với họ hàng', 'Coi thường họ hàng nghèo', 'Chỉ giúp người giàu trong họ', 'Giúp đỡ họ hàng khó khăn khi cần thiết'], 3, 'Đùm bọc, giúp đỡ nhau là truyền thống tốt đẹp.'),
    Q('Em phát hiện anh họ làm việc xấu ảnh hưởng dòng họ. Em nên?', ['Khuyên anh dừng lại, báo người lớn nếu nghiêm trọng', 'Mặc kệ không quan tâm', 'Bao che vì là người trong họ', 'Cũng làm theo anh'], 0, 'Khuyên và báo người lớn để bảo vệ danh dự dòng họ.'),
    Q('Trách nhiệm của em với truyền thống dòng họ?', ['Học tập, rèn luyện, tham gia hoạt động dòng họ phù hợp lứa tuổi', 'Coi đó không phải việc của mình', 'Phó mặc cho người lớn', 'Chờ lớn rồi mới quan tâm'], 0, 'Giữ gìn truyền thống là trách nhiệm của mọi thành viên.'),
  ]),

  // ===== Chủ đề 2: Yêu thương con người (T4–6) =====
  M(4, 'Yêu thương con người là gì?', [
    Q('Yêu thương con người là?', ['Chỉ giúp khi có lợi', 'Chỉ yêu người thân', 'Chỉ yêu người mình thích', 'Quan tâm, giúp đỡ, làm những điều tốt đẹp cho người khác'], 3, 'Yêu thương là quan tâm và làm điều tốt cho người khác.'),
    Q('Biểu hiện nào là yêu thương con người?', ['Trêu chọc người khuyết tật', 'Chế giễu người nghèo', 'Bắt nạt bạn yếu hơn', 'Chia sẻ với người gặp khó khăn'], 3, 'Chia sẻ là biểu hiện của tình yêu thương.'),
    Q('Câu ca dao nào nói về yêu thương con người?', ['Có chí thì nên', 'Thương người như thể thương thân', 'Tốt gỗ hơn tốt nước sơn', 'Học, học nữa, học mãi'], 1, '"Thương người như thể thương thân" nói về tình yêu thương.'),
    Q('Ý nào KHÔNG phải biểu hiện yêu thương con người?', ['Quyên góp ủng hộ đồng bào lũ lụt', 'Cho bạn mượn vở', 'Đẩy bạn ngã rồi cười', 'Dắt cụ già qua đường'], 2, 'Đẩy bạn ngã là hành vi vô tâm, ác ý.'),
    Q('Vì sao chúng ta cần yêu thương con người?', ['Vì đó là truyền thống và làm cuộc sống tốt đẹp hơn', 'Vì để được trả ơn', 'Vì sợ bị mắng', 'Vì muốn được khen'], 0, 'Yêu thương làm cuộc sống ấm áp, ý nghĩa.'),
    Q('Trên xe buýt, em thấy một cụ già không có chỗ ngồi. Em nên?', ['Cười cợt với bạn', 'Nhường ghế cho cụ', 'Cố giữ ghế của mình', 'Giả vờ ngủ'], 1, 'Nhường ghế cho cụ già là biểu hiện yêu thương.'),
  ]),

  M(5, 'Biểu hiện của tình yêu thương con người', [
    Q('Bạn lớp em bị ốm phải nghỉ học dài ngày. Em nên?', ['Đến thăm, chép bài hộ, động viên bạn', 'Lấy đồ dùng của bạn', 'Mừng vì bạn nghỉ học', 'Mặc kệ bạn'], 0, 'Đến thăm, giúp đỡ bạn ốm là yêu thương bạn bè.'),
    Q('Em chứng kiến bạn bị bắt nạt ở trường. Em nên?', ['Quay clip đăng mạng', 'Bênh vực bạn và báo thầy cô', 'Cùng tham gia bắt nạt', 'Đứng xem cho vui'], 1, 'Bảo vệ bạn và báo thầy cô là biểu hiện yêu thương.'),
    Q('Hành vi nào THIẾU yêu thương con người?', ['Đăng ảnh chế giễu ngoại hình bạn lên mạng', 'Chia cơm cho bạn quên mang', 'Nhường đồ chơi cho em nhỏ', 'Hỏi thăm cô lao công'], 0, 'Chế giễu ngoại hình người khác là thiếu yêu thương.'),
    Q('Người yêu thương con người sẽ?', ['Không bao giờ tha thứ', 'Ghi thù lâu dài', 'Sẵn sàng tha thứ khi người khác mắc lỗi và sửa sai', 'Trả thù khi có cơ hội'], 2, 'Tha thứ là một biểu hiện của tình yêu thương.'),
    Q('Em thấy một em bé bị lạc trong siêu thị. Em nên?', ['Dắt em đi lung tung', 'Đưa em đến quầy thông tin nhờ tìm bố mẹ', 'Bỏ đi mặc kệ', 'Cười em bé khóc'], 1, 'Giúp em bé tìm bố mẹ là biểu hiện yêu thương.'),
    Q('Trong lớp có bạn khuyết tật, em nên?', ['Đối xử bình đẳng, giúp bạn khi cần', 'Không cho bạn chơi cùng', 'Chế giễu khuyết tật của bạn', 'Tránh xa bạn'], 0, 'Đối xử bình đẳng và giúp đỡ bạn khuyết tật là yêu thương.'),
  ]),

  M(6, 'Ý nghĩa của tình yêu thương con người', [
    Q('Tình yêu thương con người mang lại điều gì cho người nhận?', ['Sự lệ thuộc', 'Cảm giác mắc nợ', 'Sự kiêu ngạo', 'Sự an ủi, động viên, sức mạnh vượt qua khó khăn'], 3, 'Yêu thương giúp người khác có sức mạnh vượt qua khó khăn.'),
    Q('Người biết yêu thương sẽ?', ['Bị lợi dụng', 'Được mọi người tin yêu, quý mến', 'Bị mọi người xa lánh', 'Mất hết bạn bè'], 1, 'Yêu thương đem lại sự tin yêu của mọi người.'),
    Q('Bạn nào HIỂU ĐÚNG về yêu thương con người?', ['Yêu thương là không vô cảm trước nỗi đau của người khác', 'Yêu thương chỉ dành cho người thân', 'Chỉ yêu thương khi có lợi', 'Yêu thương là cho tiền'], 0, 'Yêu thương xuất phát từ sự đồng cảm chân thành.'),
    Q('Đoàn thiếu niên trường vận động ủng hộ trẻ em vùng lũ. Em nên?', ['Chê các bạn đi cứu trợ', 'Lấy đồ ủng hộ về dùng', 'Không tham gia vì không thân', 'Tham gia bằng cách góp sách vở, quần áo phù hợp'], 3, 'Tham gia ủng hộ là biểu hiện yêu thương con người.'),
    Q('Bố mẹ bạn ly hôn, bạn buồn bã. Em nên?', ['Đem chuyện đó kể cho cả lớp', 'Lắng nghe, an ủi và không hỏi chuyện riêng tư', 'Hỏi dò chuyện gia đình bạn', 'Trêu bạn không có bố/mẹ'], 1, 'An ủi và tôn trọng nỗi đau của bạn là yêu thương.'),
    Q('Tình yêu thương con người KHÔNG bao gồm?', ['Bao che cho hành vi sai trái', 'Giúp đỡ vô tư', 'Tha thứ khi người khác biết lỗi', 'Đồng cảm, chia sẻ'], 0, 'Bao che cho sai trái không phải yêu thương mà là dung túng.'),
  ]),

  // ===== Chủ đề 3: Siêng năng, kiên trì (T7–9) =====
  M(7, 'Siêng năng, kiên trì là gì?', [
    Q('Siêng năng là?', ['Làm việc khi có người nhìn', 'Đức tính làm việc tự giác, đều đặn, cần mẫn', 'Làm rồi nghỉ thường xuyên', 'Chỉ làm việc mình thích'], 1, 'Siêng năng là làm việc tự giác, đều đặn.'),
    Q('Kiên trì là?', ['Bỏ cuộc khi gặp khó', 'Làm cho có rồi bỏ', 'Đổi việc liên tục', 'Quyết tâm làm đến cùng dù khó khăn, không nản chí'], 3, 'Kiên trì là không bỏ cuộc trước khó khăn.'),
    Q('Câu tục ngữ nào nói về siêng năng, kiên trì?', ['Ăn quả nhớ kẻ trồng cây', 'Có công mài sắt, có ngày nên kim', 'Một câu nhịn, chín câu lành', 'Lá lành đùm lá rách'], 1, '"Mài sắt nên kim" nói về sự kiên trì.'),
    Q('Bạn nào SIÊNG NĂNG, KIÊN TRÌ?', ['Tú đợi nước đến chân mới nhảy', 'An chỉ học khi sắp kiểm tra', 'Lan làm bài tập đầy đủ mỗi ngày, gặp bài khó thì hỏi cho đến khi hiểu', 'Bình bỏ học giữa chừng vì không thuộc bài'], 2, 'Làm đều và không bỏ cuộc khi gặp khó là siêng năng, kiên trì.'),
    Q('Ý nào KHÔNG phải siêng năng?', ['Chỉ làm khi bị thúc ép', 'Đều đặn ôn bài mỗi ngày', 'Tự giác giúp việc nhà', 'Tập thể dục mỗi sáng'], 0, 'Phải bị thúc ép mới làm không phải là siêng năng.'),
    Q('Trái nghĩa với siêng năng, kiên trì là?', ['Quyết tâm, bền bỉ', 'Tự giác, đều đặn', 'Lười biếng, ngại khó, bỏ cuộc', 'Chăm chỉ, cần cù'], 2, 'Lười biếng và bỏ cuộc là trái với siêng năng, kiên trì.'),
  ]),

  M(8, 'Biểu hiện của siêng năng, kiên trì', [
    Q('Bạn Hoa quyết tâm chạy 30 phút mỗi sáng, dù mệt vẫn không bỏ. Hoa thể hiện?', ['Siêng năng và kiên trì', 'Lười biếng', 'Tự cao', 'Cẩu thả'], 0, 'Đều đặn và không bỏ cuộc là siêng năng, kiên trì.'),
    Q('Trong học tập, biểu hiện siêng năng là?', ['Học dồn trước thi', 'Chỉ học khi bị nhắc', 'Chép bài bạn', 'Đọc trước bài mới, làm bài tập đầy đủ, ôn bài thường xuyên'], 3, 'Đọc, làm, ôn đều đặn là siêng năng học tập.'),
    Q('Em đang tập đàn, gặp bài khó. Em nên?', ['Đổ lỗi cho thầy dạy không hay', 'Bỏ đàn vì khó quá', 'Kiên trì luyện tập từng đoạn nhỏ cho đến khi thuần thục', 'Đợi có hứng mới tập'], 2, 'Kiên trì luyện từ phần nhỏ giúp vượt khó.'),
    Q('Hành vi nào THIẾU siêng năng?', ['Tự giác làm việc nhà', 'Đi học đều', 'Ngủ nướng đến trưa, không học bài', 'Tập thể dục thường xuyên'], 2, 'Ngủ nướng và không học là thiếu siêng năng.'),
    Q('Bạn nào THIẾU kiên trì?', ['Lan tập viết chữ đẹp suốt 3 tháng', 'An bỏ học võ vì tập 2 buổi thấy đau', 'Bình tập bơi đến khi biết bơi', 'Hoa luyện tiếng Anh mỗi ngày 30 phút'], 1, 'Bỏ cuộc sớm khi gặp khó là thiếu kiên trì.'),
    Q('Để rèn siêng năng, kiên trì, em nên?', ['Đợi có hứng', 'Làm theo cảm xúc', 'Đặt mục tiêu, lập kế hoạch và làm đều đặn', 'Chờ người khác nhắc'], 2, 'Đặt mục tiêu và làm đều là cách rèn luyện.'),
  ]),

  M(9, 'Ý nghĩa của siêng năng, kiên trì', [
    Q('Siêng năng, kiên trì giúp con người?', ['Mất bạn bè', 'Trở nên mệt mỏi', 'Bị xa lánh', 'Thành công trong học tập, công việc và cuộc sống'], 3, 'Siêng năng kiên trì dẫn đến thành công.'),
    Q('Người không siêng năng, kiên trì thường?', ['Có nhiều kĩ năng', 'Được mọi người yêu mến', 'Dễ thất bại, dễ bỏ cuộc', 'Luôn thành công'], 2, 'Lười biếng dẫn đến thất bại và bỏ cuộc.'),
    Q('Câu chuyện nào nổi tiếng về kiên trì?', ['Sơn Tinh Thuỷ Tinh', 'Mạc Đĩnh Chi bắt đom đóm bỏ vỏ trứng làm đèn học', 'Tấm Cám', 'Thạch Sanh'], 1, 'Mạc Đĩnh Chi là tấm gương kiên trì học tập.'),
    Q('Em mơ ước thi đỗ trường chuyên. Em nên?', ['Chỉ học khi gần thi', 'Đợi học thêm thật nhiều buổi gần thi', 'Lập kế hoạch học tập và kiên trì thực hiện mỗi ngày', 'Cầu may mắn'], 2, 'Học đều, có kế hoạch là con đường đạt mục tiêu.'),
    Q('Khi bị điểm kém, người siêng năng kiên trì sẽ?', ['Tìm nguyên nhân, sửa lỗi và cố gắng tiếp', 'Giấu bài kiểm tra', 'Bỏ cuộc, không học nữa', 'Đổ lỗi cho thầy cô'], 0, 'Sửa lỗi và cố gắng tiếp là kiên trì đúng nghĩa.'),
    Q('Trách nhiệm của em với việc rèn siêng năng, kiên trì?', ['Tự rèn luyện trong học tập, lao động và cuộc sống hàng ngày', 'Đợi người lớn nhắc', 'Không cần rèn vì còn nhỏ', 'Chỉ cần học khi có thưởng'], 0, 'Tự rèn luyện mỗi ngày mới hình thành đức tính tốt.'),
  ]),

  // ===== Chủ đề 4: Tôn trọng sự thật (T10–12) =====
  M(10, 'Tôn trọng sự thật là gì?', [
    Q('Tôn trọng sự thật là?', ['Nói theo người mình thích', 'Giấu sự thật khi bất lợi', 'Suy nghĩ, nói và làm theo đúng sự thật', 'Bịa đặt để được lợi'], 2, 'Tôn trọng sự thật là sống theo sự thật.'),
    Q('Biểu hiện của tôn trọng sự thật?', ['Nói dối để được khen', 'Vu khống người khác', 'Nói thật, nhận lỗi khi sai, bảo vệ lẽ phải', 'Bao che cho sai phạm'], 2, 'Nói thật và bảo vệ lẽ phải là tôn trọng sự thật.'),
    Q('Câu tục ngữ nào nói về tôn trọng sự thật?', ['Một câu nhịn, chín câu lành', 'Lá lành đùm lá rách', 'Cây ngay không sợ chết đứng', 'Đèn nhà ai nấy rạng'], 2, '"Cây ngay không sợ chết đứng" nói về sự thật, ngay thẳng.'),
    Q('Bạn nào TÔN TRỌNG sự thật?', ['An nói dối điểm thi', 'Tú đổ lỗi cho bạn khác', 'Lan nhận lỗi làm vỡ bình hoa dù không ai biết', 'Bình bịa chuyện để được nghỉ học'], 2, 'Tự nhận lỗi khi không ai biết là tôn trọng sự thật.'),
    Q('Vì sao cần tôn trọng sự thật?', ['Để được quà', 'Để được khen', 'Giúp xây dựng lòng tin, mối quan hệ tốt đẹp và xã hội công bằng', 'Để được người lớn yêu'], 2, 'Sự thật là nền tảng của lòng tin và công bằng.'),
    Q('Ý nào KHÔNG phải tôn trọng sự thật?', ['Nói thật với bố mẹ', 'Khai báo trung thực với thầy cô', 'Bảo vệ bạn bị vu oan', 'Bịa chuyện hại người mình ghét'], 3, 'Bịa chuyện hại người khác là vi phạm sự thật nghiêm trọng.'),
  ]),

  M(11, 'Biểu hiện của tôn trọng sự thật', [
    Q('Em chứng kiến bạn A đánh bạn B. Cô giáo hỏi, em nên?', ['Bao che cho bạn A vì là bạn thân', 'Nói dối là không thấy gì', 'Kể đúng sự thật mình thấy', 'Vu thêm cho bạn A'], 2, 'Kể đúng sự thật là tôn trọng sự thật.'),
    Q('Em làm sai bài kiểm tra. Em nên?', ['Nhận điểm thật và cố gắng lần sau', 'Đổ lỗi cho cô chấm sai', 'Sửa điểm để mẹ không mắng', 'Xé bài đi'], 0, 'Nhận điểm thật là tôn trọng sự thật.'),
    Q('Hành vi nào KHÔNG tôn trọng sự thật?', ['Báo cáo đúng sự việc', 'Nhận lỗi khi sai', 'Trung thực trong thi cử', 'Quay cóp, gian lận trong kiểm tra'], 3, 'Quay cóp là gian lận, không tôn trọng sự thật.'),
    Q('Bạn em đăng tin giả về một học sinh khác trên mạng. Em nên?', ['Cùng chia sẻ tin đó', 'Khuyên bạn xoá tin và xin lỗi người bị hại', 'Bình luận hùa theo', 'Mặc kệ bạn'], 1, 'Khuyên bạn dừng tin giả là tôn trọng sự thật.'),
    Q('Tôn trọng sự thật trong học tập có nghĩa là?', ['Không quay cóp, không bịa số liệu, làm bài bằng năng lực thật', 'Chép bài bạn nếu cô không thấy', 'Khai gian giờ học thêm', 'Mượn bài cô làm bài tập về nhà'], 0, 'Trung thực trong học tập là tôn trọng sự thật.'),
    Q('Em phát hiện bạn nhặt được tiền và lấy luôn, không trả người mất. Em nên?', ['Tố cáo lên mạng xã hội', 'Im lặng cho qua', 'Khuyên bạn trả lại tiền cho người mất', 'Đòi bạn chia tiền'], 2, 'Khuyên bạn làm đúng là tôn trọng sự thật và lẽ phải.'),
  ]),

  M(12, 'Ý nghĩa của tôn trọng sự thật', [
    Q('Người tôn trọng sự thật sẽ?', ['Bị cô lập', 'Được mọi người tin tưởng, quý mến', 'Không có bạn bè', 'Bị mọi người ghét'], 1, 'Trung thực mang lại sự tin tưởng.'),
    Q('Tôn trọng sự thật giúp xã hội?', ['Mất đoàn kết', 'Phát triển tin giả', 'Hỗn loạn hơn', 'Trở nên công bằng, văn minh, lành mạnh'], 3, 'Sự thật là nền tảng của xã hội văn minh.'),
    Q('Hậu quả của việc KHÔNG tôn trọng sự thật?', ['Được mọi người yêu mến', 'Thành công nhanh chóng', 'Mất lòng tin, ảnh hưởng quan hệ, gây hại cho người khác', 'Sống thanh thản'], 2, 'Nói dối làm mất lòng tin và gây hại.'),
    Q('Khi sự thật bất lợi cho em, em nên?', ['Nói dối để tránh hậu quả', 'Vẫn nói thật và chấp nhận chịu trách nhiệm', 'Đổ lỗi', 'Lừa người khác'], 1, 'Dũng cảm nói thật dù bất lợi mới là tôn trọng sự thật thực sự.'),
    Q('Bạn em định bạo lực với bạn khác. Em nên?', ['Bao che cho bạn', 'Ngăn cản và báo người lớn', 'Đứng quay clip', 'Hùa theo đánh'], 1, 'Bảo vệ lẽ phải là một dạng tôn trọng sự thật.'),
    Q('Để rèn tôn trọng sự thật, em nên?', ['Luôn nói thật, dũng cảm nhận lỗi, không bịa đặt', 'Tránh nói chuyện với mọi người', 'Chỉ nói thật khi có lợi', 'Đợi người lớn dạy'], 0, 'Rèn luyện hàng ngày bằng thói quen nói thật.'),
  ]),

  // ===== Chủ đề 5: Tự lập (T13–15) =====
  M(13, 'Tự lập là gì?', [
    Q('Tự lập là?', ['Không nghe lời ai', 'Tự làm lấy, tự giải quyết công việc của mình bằng khả năng và sức lực của bản thân', 'Tách khỏi gia đình', 'Làm việc một mình không cần ai'], 1, 'Tự lập là tự lo, tự làm bằng sức mình.'),
    Q('Biểu hiện của người tự lập?', ['Tự sắp xếp việc học, việc nhà phù hợp lứa tuổi', 'Phụ thuộc hoàn toàn vào gia đình', 'Đợi người khác nhắc nhở', 'Mọi việc đều nhờ bố mẹ'], 0, 'Tự lo việc của mình là tự lập.'),
    Q('Tự lập KHÔNG có nghĩa là?', ['Cố gắng vượt khó', 'Tự chịu trách nhiệm về hành động', 'Tách rời, từ chối mọi sự giúp đỡ', 'Tự giác làm việc của mình'], 2, 'Tự lập không phải là cô độc; vẫn nhận hỗ trợ khi cần.'),
    Q('Bạn nào TỰ LẬP?', ['Tú để mẹ làm bài tập', 'An tự thức dậy, soạn sách đến lớp mỗi sáng', 'Lan phải mẹ thức dậy, soạn sách hộ', 'Bình đợi bố cho ăn'], 1, 'Tự lo việc cá nhân là tự lập.'),
    Q('Tại sao học sinh lớp 6 cần học tự lập?', ['Để bố mẹ khỏi thương', 'Để không cần ai', 'Để khoe với bạn', 'Để trưởng thành, có trách nhiệm và chuẩn bị cho tương lai'], 3, 'Tự lập là bước trưởng thành cần thiết.'),
    Q('Ý nào THỂ HIỆN tự lập?', ['Đợi mẹ làm hết', 'Đùn việc cho em', 'Khóc khi gặp khó', 'Tự ôn bài, tự dọn phòng, tự đi học bằng xe đạp'], 3, 'Tự làm việc của mình là biểu hiện tự lập.'),
  ]),

  M(14, 'Biểu hiện của tự lập', [
    Q('Trong học tập, tự lập là?', ['Chép bài bạn', 'Mẹ làm bài hộ', 'Tự làm bài, tự ôn, biết nhờ giúp khi cần nhưng không ỷ lại', 'Đợi cô giảng lại từng bước'], 2, 'Tự học, không ỷ lại là tự lập học tập.'),
    Q('Trong sinh hoạt, tự lập là?', ['Vứt đồ bừa bãi', 'Mẹ làm hộ tất cả', 'Chỉ ăn rồi ngủ', 'Tự dọn phòng, gấp chăn, giặt đồ nhỏ của mình'], 3, 'Tự lo sinh hoạt cá nhân là tự lập.'),
    Q('Hành vi nào THIẾU tự lập?', ['Mỗi buổi sáng đều cần mẹ gọi nhiều lần mới dậy', 'Tự nấu bữa sáng đơn giản', 'Tự chuẩn bị sách vở', 'Tự đặt báo thức'], 0, 'Phải nhắc nhiều lần là chưa tự lập.'),
    Q('Bạn Lan luôn nhờ bạn khác làm bài hộ vì lười. Lan?', ['Thiếu tự lập và thiếu trung thực', 'Biết hợp tác', 'Tự lập tốt', 'Thông minh'], 0, 'Nhờ làm hộ vì lười là thiếu tự lập.'),
    Q('Em được giao chuẩn bị bài thuyết trình nhóm. Tự lập có nghĩa là?', ['Chỉ ngồi chờ bạn làm', 'Ăn theo công lao bạn', 'Đùn việc cho bạn yếu', 'Tự nghiên cứu phần của mình và đóng góp cho nhóm'], 3, 'Tự làm phần của mình là tự lập trong nhóm.'),
    Q('Tự lập KHÔNG đồng nghĩa với?', ['Cố gắng vượt khó', 'Tự chịu trách nhiệm', 'Tự giác làm việc', 'Không cần ai giúp đỡ'], 3, 'Người tự lập vẫn biết hợp tác và nhờ giúp đúng lúc.'),
  ]),

  M(15, 'Ý nghĩa và cách rèn luyện tự lập', [
    Q('Người tự lập sẽ?', ['Bị xa lánh', 'Cô đơn cả đời', 'Tự tin, có bản lĩnh và dễ thành công trong cuộc sống', 'Không có bạn'], 2, 'Tự lập đem lại sự tự tin và bản lĩnh.'),
    Q('Người KHÔNG tự lập thường?', ['Luôn thành công', 'Sống vui vẻ', 'Được mọi người yêu', 'Ỷ lại, dễ thất bại, gánh nặng cho người khác'], 3, 'Ỷ lại dẫn đến thất bại và làm khổ người khác.'),
    Q('Để rèn tự lập, em nên BẮT ĐẦU từ?', ['Cãi lại bố mẹ', 'Tự đi làm kiếm tiền', 'Những việc nhỏ phù hợp với lứa tuổi như tự dọn phòng, tự học', 'Bỏ học ra ngoài sống'], 2, 'Bắt đầu từ việc nhỏ phù hợp lứa tuổi.'),
    Q('Bạn Hoa muốn rèn tự lập. Bạn nên?', ['Tự ý nghỉ học', 'Lập thời gian biểu và tự quản lí việc học, việc nhà', 'Bỏ đi xa nhà', 'Không nghe lời bố mẹ'], 1, 'Quản lí việc cá nhân là cách rèn tự lập đúng.'),
    Q('Tự lập trong tài chính ở lứa tuổi học sinh là?', ['Đi làm thêm bỏ học', 'Đòi bố mẹ nhiều tiền', 'Biết tiết kiệm tiền tiêu vặt, dùng có kế hoạch', 'Vay tiền bạn để mua đồ'], 2, 'Tiết kiệm và dùng có kế hoạch là tự lập tài chính.'),
    Q('Tự lập là phẩm chất?', ['Cần thiết cho mọi lứa tuổi và là nền tảng của sự trưởng thành', 'Chỉ người lớn mới cần', 'Chỉ con trai mới cần', 'Không cần thiết với học sinh'], 0, 'Tự lập là phẩm chất cần thiết với mọi người.'),
  ]),

  // ===== Chủ đề 6: Tự nhận thức bản thân (T16–17) =====
  M(16, 'Tự nhận thức bản thân là gì?', [
    Q('Tự nhận thức bản thân là?', ['Chỉ thấy mình kém cỏi', 'Biết nhìn nhận, đánh giá đúng về bản thân (điểm mạnh, điểm yếu, sở thích, giá trị)', 'Chỉ biết khen mình', 'So sánh mình với người khác liên tục'], 1, 'Tự nhận thức là hiểu đúng về bản thân.'),
    Q('Vì sao cần tự nhận thức bản thân?', ['Để khoe khoang', 'Để được khen', 'Để phát huy điểm mạnh, khắc phục điểm yếu, định hướng tương lai', 'Để hơn người khác'], 2, 'Hiểu mình giúp phát triển bản thân.'),
    Q('Bạn nào TỰ NHẬN THỨC tốt?', ['An so sánh mình với bạn rồi tự ti', 'Bình chê tất cả những gì mình có', 'Lan biết mình mạnh ngôn ngữ, yếu toán nên dành nhiều thời gian luyện toán', 'Tú nghĩ mình giỏi nhất lớp dù điểm thấp'], 2, 'Biết điểm mạnh, điểm yếu để cải thiện là tự nhận thức tốt.'),
    Q('Tự nhận thức bản thân KHÔNG phải là?', ['Hiểu sở thích, giá trị của mình', 'Bắt chước hoàn toàn người khác', 'Hiểu điểm yếu của mình', 'Hiểu điểm mạnh của mình'], 1, 'Bắt chước người khác là không tôn trọng bản thân.'),
    Q('Cách để tự nhận thức bản thân?', ['Tự đánh giá, lắng nghe ý kiến đúng đắn từ người khác, ghi nhật kí', 'Không cần ai góp ý', 'So sánh trên mạng xã hội', 'Chỉ nghe lời chê bai'], 0, 'Tự đánh giá và lắng nghe góp ý chân thành.'),
    Q('Khi được khen, người tự nhận thức tốt sẽ?', ['Không tin lời khen', 'Khoe khắp nơi', 'Kiêu ngạo, coi thường người khác', 'Vui và tiếp tục phát huy, không kiêu'], 3, 'Tự tin nhưng không kiêu là tự nhận thức đúng.'),
  ]),

  M(17, 'Cách rèn luyện và ý nghĩa của tự nhận thức bản thân', [
    Q('Khi bị chê, người tự nhận thức tốt sẽ?', ['Nổi giận, cãi lại', 'Tự ti, bỏ cuộc', 'Bình tĩnh xem xét, sửa nếu đúng, bỏ qua nếu sai', 'Trả đũa người chê'], 2, 'Tiếp thu góp ý đúng đắn để hoàn thiện.'),
    Q('Em phát hiện mình rất giỏi vẽ. Em nên?', ['Khoe khắp nơi', 'Bỏ học để chỉ vẽ', 'Phát huy bằng cách luyện tập và tham gia các hoạt động vẽ', 'Giấu đi không cho ai biết'], 2, 'Phát huy điểm mạnh là cách phát triển bản thân.'),
    Q('Em thấy mình hay nóng giận. Em nên?', ['Nhận ra và rèn luyện kiểm soát cảm xúc', 'Bỏ mặc', 'Đổ lỗi cho người xung quanh', 'Coi đó là cá tính, không sửa'], 0, 'Nhận điểm yếu và sửa là tự nhận thức đúng.'),
    Q('Người KHÔNG biết tự nhận thức thường?', ['Hạnh phúc', 'Luôn thành công', 'Được mọi người tin yêu', 'Tự cao hoặc tự ti, khó tiến bộ'], 3, 'Không hiểu mình dẫn đến tự cao hoặc tự ti.'),
    Q('Tự nhận thức bản thân giúp em?', ['Tránh giao tiếp', 'Định hướng nghề nghiệp, cải thiện bản thân, sống có mục tiêu', 'Trở nên khép kín', 'Tránh học tập'], 1, 'Hiểu mình giúp định hướng tương lai.'),
    Q('Cách rèn tự nhận thức bản thân HIỆU QUẢ?', ['Chỉ tin mạng xã hội', 'Suy ngẫm mỗi ngày, viết nhật kí, hỏi ý kiến người tin cậy', 'Không quan tâm gì hết', 'Sao chép người khác'], 1, 'Suy ngẫm và lắng nghe góp ý là cách rèn hiệu quả.'),
  ]),

  // ===== T18: Ôn tập HK1 =====
  M(18, 'Ôn tập học kì 1', [
    Q('Truyền thống tốt đẹp của gia đình, dòng họ KHÔNG bao gồm?', ['Hiếu học', 'Mê tín dị đoan', 'Cần cù lao động', 'Yêu nước'], 1, 'Mê tín dị đoan là hủ tục cần bài trừ.'),
    Q('Câu nào nói về yêu thương con người?', ['Đèn nhà ai nấy rạng', 'Có công mài sắt có ngày nên kim', 'Thương người như thể thương thân', 'Cây ngay không sợ chết đứng'], 2, '"Thương người như thể thương thân" là yêu thương con người.'),
    Q('Người siêng năng, kiên trì là người?', ['Làm việc đều đặn và không bỏ cuộc trước khó khăn', 'Bỏ cuộc khi gặp khó', 'Chỉ làm việc dễ', 'Làm việc khi có hứng'], 0, 'Đều đặn và bền bỉ là siêng năng kiên trì.'),
    Q('Hành vi nào tôn trọng sự thật?', ['Vu khống bạn', 'Nhận lỗi khi mình làm sai', 'Đổ lỗi cho người khác', 'Bịa chuyện'], 1, 'Nhận lỗi khi sai là tôn trọng sự thật.'),
    Q('Tự lập KHÔNG có nghĩa là?', ['Tự chịu trách nhiệm', 'Từ chối mọi sự giúp đỡ', 'Tự lo việc của mình', 'Tự giác làm việc'], 1, 'Tự lập không phải cô độc, vẫn cần hợp tác.'),
    Q('Tự nhận thức bản thân giúp em?', ['Tự cao tự đại', 'Chê bai người khác', 'So sánh tiêu cực với người khác', 'Phát huy điểm mạnh, khắc phục điểm yếu'], 3, 'Tự nhận thức để phát triển bản thân.'),
    Q('Tổng hợp 6 chủ đề HK1, đức tính nào liên quan trực tiếp đến học tập?', ['Mê tín', 'Đua đòi', 'Lười biếng', 'Siêng năng, kiên trì'], 3, 'Siêng năng, kiên trì rất quan trọng trong học tập.'),
  ]),

  // ──────────────── HK2 ────────────────
  // ===== Chủ đề 7: Ứng phó với tình huống nguy hiểm (T19–21) =====
  M(19, 'Tình huống nguy hiểm là gì?', [
    Q('Tình huống nguy hiểm là?', ['Bị bạn ghét', 'Bài kiểm tra khó', 'Bị điểm thấp', 'Sự việc bất ngờ có thể gây hại đến tính mạng, sức khoẻ, tài sản'], 3, 'Tình huống nguy hiểm đe doạ tính mạng, sức khoẻ.'),
    Q('Đâu là tình huống nguy hiểm từ thiên nhiên?', ['Trời nắng nhẹ', 'Mất điện ban ngày', 'Lũ lụt, bão, sấm sét, động đất', 'Bài tập về nhà nhiều'], 2, 'Thiên tai là nguy hiểm từ tự nhiên.'),
    Q('Đâu là tình huống nguy hiểm từ con người?', ['Được bạn rủ đi chơi', 'Được khen', 'Đi học bằng xe buýt', 'Bị bắt cóc, bị xâm hại, bị đe doạ trên mạng'], 3, 'Nguy hiểm từ con người gồm bắt cóc, xâm hại, đe doạ.'),
    Q('Khi gặp tình huống nguy hiểm, NGUYÊN TẮC đầu tiên là?', ['Hét lên hoảng sợ', 'Đứng yên không suy nghĩ', 'Bình tĩnh, không hoảng loạn', 'Chạy lung tung'], 2, 'Bình tĩnh giúp ra quyết định đúng.'),
    Q('Số điện thoại CỨU HOẢ ở Việt Nam?', ['113', '114', '115', '112'], 1, '114 là số gọi cứu hoả.'),
    Q('Số điện thoại CẢNH SÁT là?', ['113', '114', '115', '111'], 0, '113 là số cảnh sát.'),
  ]),

  M(20, 'Ứng phó với đuối nước, hoả hoạn', [
    Q('Khi bị đuối nước, em nên?', ['Giữ bình tĩnh, há miệng thở, vẫy tay kêu cứu, không vùng vẫy quá', 'Hít nước thật nhiều', 'Vùng vẫy mạnh để nổi lên', 'Bơi thật nhanh ra xa'], 0, 'Bình tĩnh, kêu cứu, không vùng vẫy mất sức.'),
    Q('Để PHÒNG đuối nước, em nên?', ['Tắm sông khi mưa lũ', 'Học bơi, không tắm ở chỗ nước sâu, không ra sông một mình', 'Đi tắm khi không có ai biết', 'Bơi ở chỗ có biển cảnh báo nguy hiểm'], 1, 'Học bơi và tránh nơi nguy hiểm là phòng đuối nước.'),
    Q('Khi nhà có cháy, việc ĐẦU TIÊN nên làm là?', ['Hô hoán báo động, gọi 114 và tìm cách thoát hiểm', 'Trốn vào tủ quần áo', 'Mở cửa sổ thật to', 'Chạy đi tìm đồ quý giá'], 0, 'Báo động và thoát hiểm là việc đầu tiên.'),
    Q('Khi có khói trong nhà, em nên?', ['Hít thở sâu', 'Đứng thẳng chạy ra', 'Nhảy qua cửa sổ tầng cao', 'Cúi thấp người, dùng khăn ướt che mũi miệng, men theo tường thoát ra'], 3, 'Cúi thấp dưới khói và bịt mũi bằng khăn ướt.'),
    Q('Khi quần áo bốc cháy, em nên?', ['Chạy thật nhanh', 'Dừng - Nằm xuống - Lăn để dập lửa', 'Lấy nước nóng dội', 'Vẫy tay cho lửa to lên'], 1, 'Dừng - Nằm - Lăn là quy tắc dập lửa trên người.'),
    Q('Ý nào KHÔNG nên làm khi gặp hoả hoạn?', ['Đi cầu thang bộ', 'Dùng khăn ướt che mũi', 'Báo người lớn và gọi 114', 'Dùng thang máy thoát hiểm'], 3, 'Tuyệt đối không dùng thang máy khi cháy.'),
  ]),

  M(21, 'Ứng phó với bắt cóc và các tình huống nguy hiểm khác', [
    Q('Khi có người lạ rủ đi theo cho quà, em nên?', ['Từ chối dứt khoát, bỏ đi, báo người lớn', 'Cho người lạ địa chỉ nhà', 'Nhận quà rồi đi theo', 'Đi cùng một đoạn xem sao'], 0, 'Tuyệt đối không đi theo người lạ.'),
    Q('Khi bị người lạ kéo đi, em nên?', ['Khóc to', 'Đợi cơ hội rồi chạy', 'La to "Cứu! Đây không phải bố mẹ tôi!" và bỏ chạy về chỗ đông người', 'Im lặng đi theo cho yên'], 2, 'Hô to cảnh báo và chạy đến chỗ đông người.'),
    Q('Khi đi một mình ngoài đường tối, em nên?', ['Bịt tai đeo headphone to', 'Đi đường tắt vắng', 'Nhận đi xe nhờ của người lạ', 'Đi nơi có đèn sáng, đông người, mang điện thoại liên lạc gia đình'], 3, 'Đi đường sáng và giữ liên lạc gia đình.'),
    Q('Khi có người lạ nhắn tin trên mạng xin ảnh, địa chỉ, em nên?', ['Cho địa chỉ để được kết bạn', 'Gửi ảnh để được khen', 'Không cung cấp thông tin, chặn và báo người lớn', 'Hẹn gặp riêng'], 2, 'Không cung cấp thông tin cá nhân cho người lạ trên mạng.'),
    Q('Khi gặp sấm sét ngoài trời, em nên?', ['Tìm nơi trú trong nhà, tránh xa cây to và kim loại', 'Đứng dưới cây to để tránh mưa', 'Cầm ô kim loại', 'Đứng nơi trống trải'], 0, 'Trú trong nhà, tránh cây to và kim loại.'),
    Q('Số điện thoại CẤP CỨU y tế là?', ['111', '115', '114', '113'], 1, '115 là số cấp cứu y tế.'),
  ]),

  // ===== Chủ đề 8: Tiết kiệm (T22–24) =====
  M(22, 'Tiết kiệm là gì?', [
    Q('Tiết kiệm là?', ['Chỉ dành cho người nghèo', 'Hà tiện, keo kiệt', 'Sử dụng hợp lí, đúng mức của cải, thời gian, sức lực của mình và người khác', 'Không tiêu xài gì cả'], 2, 'Tiết kiệm khác với hà tiện: dùng hợp lí, đúng mức.'),
    Q('Tiết kiệm KHÔNG bao gồm?', ['Tiết kiệm điện nước', 'Tiết kiệm thời gian', 'Ki bo, không bao giờ chi tiền cho việc cần thiết', 'Tiết kiệm tiền'], 2, 'Ki bo và tiết kiệm là khác nhau.'),
    Q('Câu tục ngữ nào về tiết kiệm?', ['Lá lành đùm lá rách', 'Tích tiểu thành đại', 'Học, học nữa, học mãi', 'Đoàn kết là sức mạnh'], 1, '"Tích tiểu thành đại" nói về tiết kiệm.'),
    Q('Biểu hiện tiết kiệm điện?', ['Để máy tính bật cả đêm', 'Tắt đèn, quạt khi ra khỏi phòng', 'Bật điều hoà cả ngày dù không ai ở nhà', 'Mở tủ lạnh lâu'], 1, 'Tắt thiết bị khi không dùng là tiết kiệm điện.'),
    Q('Biểu hiện tiết kiệm nước?', ['Tắm thật lâu cho thoải mái', 'Khoá vòi khi đánh răng, tận dụng nước rửa rau tưới cây', 'Để vòi nước chảy liên tục', 'Xả nước bồn rửa cả ngày'], 1, 'Dùng nước có ý thức là tiết kiệm.'),
    Q('Tiết kiệm KHÁC hà tiện ở chỗ?', ['Tiết kiệm là không tiêu', 'Hà tiện là tốt hơn tiết kiệm', 'Tiết kiệm vẫn chi cho điều cần thiết, hà tiện thì không chi gì', 'Cả hai như nhau'], 2, 'Tiết kiệm là sử dụng hợp lí, hà tiện là cực đoan.'),
  ]),

  M(23, 'Tiết kiệm thời gian, tiền bạc', [
    Q('Tiết kiệm thời gian là?', ['Học không ngừng', 'Sử dụng thời gian hợp lí, không lãng phí vào việc vô ích', 'Không nghỉ ngơi', 'Làm nhiều việc cùng lúc'], 1, 'Dùng thời gian hợp lí là tiết kiệm thời gian.'),
    Q('Bạn nào TIẾT KIỆM thời gian?', ['Bình ngủ 12 tiếng/ngày', 'Tú xem điện thoại 6 tiếng/ngày', 'Lan lập thời gian biểu và làm theo', 'An la cà ngoài quán cả buổi'], 2, 'Lập kế hoạch và làm theo là tiết kiệm thời gian.'),
    Q('Em nhận được 200.000đ tiền tiêu vặt Tết. Em nên?', ['Lập kế hoạch chi tiêu, để dành phần để mua đồ học tập', 'Cho hết bạn bè', 'Mua game không cần thiết', 'Tiêu hết trong một ngày'], 0, 'Lập kế hoạch và tiết kiệm là cách dùng đúng.'),
    Q('Tiết kiệm tiền của gia đình là?', ['Lấy trộm tiền của bố mẹ', 'Không vòi vĩnh đồ không cần thiết, biết quý sức lao động của bố mẹ', 'Không xin tiền cả khi cần', 'Đòi mua mọi thứ'], 1, 'Không đòi đồ không cần là tiết kiệm tiền gia đình.'),
    Q('Hành vi nào LÃNG PHÍ?', ['Dùng lại sách giáo khoa cũ', 'Tận dụng giấy 2 mặt', 'Mua đồ chơi đắt tiền mà chỉ chơi 1 lần rồi vứt', 'Mang cơm hộp đi học'], 2, 'Mua đồ rồi vứt là lãng phí.'),
    Q('Để rèn tiết kiệm tiền, em nên?', ['Đợi lớn mới quan tâm', 'Vay nợ bạn bè', 'Có ống tiết kiệm, ghi chép chi tiêu, phân biệt cần và muốn', 'Tiêu xài thoải mái'], 2, 'Ghi chép và phân biệt cần/muốn là cách tiết kiệm.'),
  ]),

  M(24, 'Tiết kiệm năng lượng và tài nguyên', [
    Q('Tiết kiệm năng lượng có lợi cho?', ['Không có lợi gì', 'Gia đình, đất nước và môi trường', 'Chỉ riêng gia đình', 'Chỉ riêng đất nước'], 1, 'Tiết kiệm năng lượng có lợi cho cả ba.'),
    Q('Hành vi nào tiết kiệm xăng?', ['Nẹt pô liên tục', 'Tắt máy khi dừng đèn đỏ lâu, không tăng ga vô ích', 'Đua xe trên đường', 'Đèo nhiều người quá tải'], 1, 'Tắt máy khi dừng lâu là tiết kiệm xăng.'),
    Q('Tiết kiệm tài nguyên đất là?', ['Lấp ao hồ', 'Đốt rừng làm rẫy', 'Xả rác xuống sông', 'Không xả rác bừa bãi, không phá rừng'], 3, 'Bảo vệ đất, rừng là tiết kiệm tài nguyên.'),
    Q('Hành vi nào LÃNG PHÍ tài nguyên?', ['Mang chai nước cá nhân', 'Phân loại rác tái chế', 'Đi xe đạp đến trường', 'Dùng cốc giấy một lần dù có sẵn cốc thuỷ tinh'], 3, 'Dùng đồ một lần khi không cần là lãng phí.'),
    Q('Tiết kiệm sách vở là?', ['Xé sách cũ', 'Giữ sách sạch, tặng lại em khoá sau khi không dùng', 'Vứt sách cũ', 'Vẽ bậy lên sách'], 1, 'Giữ và trao lại sách là tiết kiệm và yêu thương.'),
    Q('Ý nghĩa của tiết kiệm?', ['Không có ý nghĩa', 'Giúp gia đình ấm no, đất nước phát triển bền vững', 'Khiến mình kém vui', 'Khiến mình nghèo đi'], 1, 'Tiết kiệm góp phần phát triển bền vững.'),
  ]),

  // ===== Chủ đề 9: Công dân nước CHXHCN Việt Nam (T25–27) =====
  M(25, 'Công dân nước CHXHCN Việt Nam', [
    Q('Công dân là?', ['Người có tiền', 'Người sống lâu năm ở một nước', 'Người dân của một nước, có các quyền và nghĩa vụ do pháp luật quy định', 'Người trưởng thành'], 2, 'Công dân gắn với quốc tịch và quyền nghĩa vụ pháp lí.'),
    Q('Quốc tịch là?', ['Tôn giáo', 'Căn cứ xác định công dân của một nước', 'Nơi sinh', 'Tên gia đình'], 1, 'Quốc tịch xác định mối quan hệ công dân với nhà nước.'),
    Q('Người có quốc tịch Việt Nam là?', ['Người không quốc tịch', 'Người tị nạn', 'Công dân nước CHXHCN Việt Nam', 'Công dân nước khác'], 2, 'Có quốc tịch VN là công dân VN.'),
    Q('Ai là công dân Việt Nam?', ['Người chỉ tạm trú học tập', 'Người nước ngoài đến du lịch', 'Người sinh ở VN nhưng từ bỏ quốc tịch VN', 'Bé Lan sinh ra tại VN có bố mẹ là người Việt'], 3, 'Sinh tại VN, bố mẹ Việt là công dân VN.'),
    Q('Căn cước công dân là?', ['Sổ tiết kiệm', 'Giấy phép lái xe', 'Giấy tờ pháp lí xác nhận thông tin và quốc tịch của công dân VN', 'Hộ chiếu nước ngoài'], 2, 'CCCD là giấy tờ tuỳ thân quan trọng của công dân VN.'),
    Q('Theo Luật Quốc tịch VN, trẻ em sinh ra trên lãnh thổ VN có bố và mẹ đều là công dân VN thì?', ['Phải đăng ký mới có', 'Có quốc tịch Việt Nam', 'Không có quốc tịch', 'Phải đủ 18 tuổi mới có'], 1, 'Bố mẹ là công dân VN thì con có quốc tịch VN.'),
  ]),

  M(26, 'Căn cứ xác định công dân Việt Nam', [
    Q('Theo Luật Quốc tịch VN, trẻ em sinh ra trên lãnh thổ VN mà bố mẹ là người không quốc tịch, có nơi thường trú tại VN thì?', ['Có quốc tịch nước khác', 'Phải làm đơn xin', 'Không có quốc tịch', 'Có quốc tịch Việt Nam'], 3, 'Trường hợp này con có quốc tịch VN theo luật.'),
    Q('Bạn Nam có bố là người VN, mẹ là người Hàn Quốc, sinh tại VN. Bạn Nam?', ['Có thể có quốc tịch VN theo thoả thuận của cha mẹ', 'Tự động có 2 quốc tịch', 'Chắc chắn không có quốc tịch VN', 'Phải đợi 18 tuổi'], 0, 'Trường hợp bố/mẹ khác quốc tịch, cha mẹ thoả thuận.'),
    Q('Người Việt Nam định cư ở nước ngoài có còn là công dân Việt Nam không?', ['Vẫn là công dân VN nếu chưa từ bỏ quốc tịch VN', 'Không còn', 'Chỉ khi về VN', 'Tuỳ ý họ'], 0, 'Chừng nào chưa từ bỏ quốc tịch thì vẫn là công dân VN.'),
    Q('Em hiểu ý nghĩa của việc trở thành công dân VN?', ['Tự hào về Tổ quốc, có quyền và trách nhiệm với đất nước', 'Chỉ có quyền, không có nghĩa vụ', 'Chỉ có nghĩa vụ, không có quyền', 'Không có gì đặc biệt'], 0, 'Là công dân vừa có quyền vừa có trách nhiệm.'),
    Q('Trẻ sơ sinh bị bỏ rơi tại VN, không rõ cha mẹ thì?', ['Không có quốc tịch', 'Có quốc tịch Việt Nam', 'Phải đợi xác minh cha mẹ', 'Có quốc tịch nước khác'], 1, 'Pháp luật bảo đảm trẻ không quốc tịch trên lãnh thổ VN có quốc tịch VN.'),
    Q('Em làm gì để xứng đáng là công dân Việt Nam?', ['Đợi lớn mới làm gì', 'Học tập, rèn luyện, tôn trọng pháp luật, yêu Tổ quốc', 'Coi thường người nước ngoài', 'Chê đất nước mình'], 1, 'Học, rèn luyện và yêu nước là trách nhiệm công dân.'),
  ]),

  M(27, 'Quyền công dân cơ bản', [
    Q('Trẻ em là công dân Việt Nam có quyền nào?', ['Quyền lái xe ô tô', 'Quyền ứng cử Quốc hội', 'Quyền bầu cử', 'Quyền được học tập'], 3, 'Trẻ em có quyền học tập theo luật.'),
    Q('Mọi công dân Việt Nam đều có quyền?', ['Tự do làm điều mình thích bất chấp luật', 'Trên luật pháp', 'Bình đẳng trước pháp luật', 'Không bị xử lí khi vi phạm'], 2, 'Mọi công dân bình đẳng trước pháp luật.'),
    Q('Quyền nào KHÔNG phải quyền công dân?', ['Quyền vi phạm pháp luật', 'Quyền tự do tín ngưỡng', 'Quyền bảo vệ sức khoẻ', 'Quyền học tập'], 0, 'Không có quyền nào cho phép vi phạm pháp luật.'),
    Q('Bạn Hoa người dân tộc thiểu số. Bạn Hoa có?', ['Không có quốc tịch VN', 'Quyền bình đẳng như mọi công dân Việt Nam', 'Ít quyền hơn người Kinh', 'Không có quyền học'], 1, 'Mọi dân tộc đều bình đẳng trước pháp luật.'),
    Q('Quyền được pháp luật bảo hộ về tính mạng, sức khoẻ nghĩa là?', ['Công dân có thể làm mọi việc với cơ thể mình', 'Không ai được xâm phạm tính mạng, sức khoẻ của công dân', 'Chỉ bảo vệ người lớn', 'Pháp luật chỉ bảo vệ người giàu'], 1, 'Mọi công dân được pháp luật bảo hộ tính mạng, sức khoẻ.'),
    Q('Quyền tự do ngôn luận có nghĩa là?', ['Nói gì cũng được, kể cả vu khống', 'Công dân được bày tỏ ý kiến theo quy định pháp luật', 'Đăng tin sai sự thật trên mạng', 'Xúc phạm người khác tuỳ thích'], 1, 'Tự do ngôn luận phải trong khuôn khổ pháp luật.'),
  ]),

  // ===== Chủ đề 10: Quyền và nghĩa vụ cơ bản của công dân (T28–30) =====
  M(28, 'Quyền cơ bản của công dân', [
    Q('Quyền cơ bản của công dân được quy định trong?', ['Hiến pháp nước CHXHCN Việt Nam', 'Báo điện tử', 'Truyện cổ tích', 'Sách giáo khoa Toán'], 0, 'Hiến pháp là văn bản quy định quyền và nghĩa vụ cơ bản.'),
    Q('Đâu là quyền cơ bản của công dân?', ['Quyền vi phạm pháp luật', 'Quyền không đóng thuế', 'Quyền học tập, lao động, tự do ngôn luận', 'Quyền trốn nghĩa vụ quân sự'], 2, 'Học tập, lao động, ngôn luận là quyền cơ bản.'),
    Q('Công dân có quyền bất khả xâm phạm về thân thể nghĩa là?', ['Không ai được bắt, giam giữ trái pháp luật', 'Không bị xử lí khi phạm tội', 'Có thể làm gì cũng được', 'Không phải đi học'], 0, 'Không ai được tự ý bắt giữ công dân.'),
    Q('Quyền được bảo vệ về danh dự, nhân phẩm nghĩa là?', ['Không ai được vu khống, lăng mạ, xúc phạm công dân', 'Có thể nói xấu tự do', 'Có thể đăng tin giả', 'Có thể vu khống người khác'], 0, 'Pháp luật bảo vệ danh dự, nhân phẩm công dân.'),
    Q('Một người tung tin giả về em trên mạng xã hội. Em có quyền?', ['Im lặng chịu đựng', 'Cũng tung tin giả lại', 'Tự ý đánh người đó', 'Yêu cầu gỡ tin, báo cơ quan có thẩm quyền xử lí'], 3, 'Báo cơ quan có thẩm quyền là cách bảo vệ quyền của mình.'),
    Q('Quyền nào sau đây trẻ em CHƯA được hưởng?', ['Quyền bảo vệ sức khoẻ', 'Quyền vui chơi', 'Quyền ứng cử đại biểu Quốc hội', 'Quyền học tập'], 2, 'Quyền ứng cử ĐBQH chỉ dành cho công dân đủ tuổi luật định.'),
  ]),

  M(29, 'Nghĩa vụ cơ bản của công dân', [
    Q('Nghĩa vụ cơ bản của công dân Việt Nam là?', ['Trốn tránh nghĩa vụ', 'Làm theo ý mình', 'Tuân theo Hiến pháp và pháp luật, bảo vệ Tổ quốc', 'Chỉ hưởng quyền lợi'], 2, 'Tuân thủ pháp luật và bảo vệ Tổ quốc là nghĩa vụ cơ bản.'),
    Q('Nghĩa vụ quan trọng nào của công dân?', ['Đi du lịch nước ngoài', 'Sống xa hoa', 'Bảo vệ Tổ quốc', 'Mua sắm hàng hiệu'], 2, 'Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng.'),
    Q('Nghĩa vụ lao động và đóng thuế là?', ['Chỉ với người giàu', 'Nghĩa vụ của công dân theo quy định pháp luật', 'Tự nguyện hoàn toàn', 'Không bắt buộc'], 1, 'Lao động và đóng thuế là nghĩa vụ pháp lí.'),
    Q('Bạn Nam trốn nghĩa vụ quân sự. Hành vi này?', ['Vi phạm pháp luật và sẽ bị xử lí', 'Là quyền của Nam', 'Bình thường', 'Đáng khen'], 0, 'Trốn nghĩa vụ quân sự là vi phạm pháp luật.'),
    Q('Học sinh có nghĩa vụ gì?', ['Đi học khi nào thích', 'Tự ý nghỉ học', 'Chỉ chơi không học', 'Học tập, tuân thủ nội quy và pháp luật'], 3, 'Học tập đầy đủ là nghĩa vụ của học sinh.'),
    Q('Quyền và nghĩa vụ của công dân có mối quan hệ?', ['Chỉ có quyền không có nghĩa vụ', 'Tách rời nhau', 'Chỉ có nghĩa vụ không có quyền', 'Gắn bó chặt chẽ, không thể tách rời'], 3, 'Quyền đi liền nghĩa vụ.'),
  ]),

  M(30, 'Thực hiện quyền và nghĩa vụ công dân', [
    Q('Để thực hiện tốt quyền và nghĩa vụ, công dân cần?', ['Hiểu biết pháp luật và tự giác chấp hành', 'Phớt lờ luật', 'Tránh né luật', 'Chỉ làm khi bị bắt buộc'], 0, 'Hiểu luật và chấp hành tự giác là tốt nhất.'),
    Q('Bạn Hà tham gia bảo vệ môi trường. Việc làm này?', ['Không liên quan đến công dân', 'Thực hiện nghĩa vụ công dân trong bảo vệ môi trường', 'Chỉ là việc người lớn', 'Hoạt động tình nguyện tự chọn, không bắt buộc với công dân'], 1, 'Bảo vệ môi trường là nghĩa vụ của mọi công dân.'),
    Q('Em phát hiện một vụ tham nhũng nhỏ trong khu phố. Em nên?', ['Im lặng vì sợ liên lụy', 'Báo cho người lớn hoặc cơ quan có thẩm quyền', 'Đăng lên mạng xã hội ngay', 'Đe doạ người tham nhũng'], 1, 'Báo cơ quan có thẩm quyền là đúng cách.'),
    Q('Học sinh thực hiện quyền học tập bằng cách?', ['Đến trường đều đặn, chăm chỉ học và rèn luyện', 'Bỏ học khi không thích', 'Đợi cha mẹ ép mới đi', 'Đi học cho có'], 0, 'Học chăm chỉ là cách thực hiện quyền học tập.'),
    Q('Em được tự do tín ngưỡng nghĩa là?', ['Bắt người khác theo tôn giáo của mình', 'Chê bai tôn giáo của người khác', 'Tự chọn theo hoặc không theo tôn giáo, tôn trọng tín ngưỡng của người khác', 'Cấm người khác đi lễ'], 2, 'Tự do và tôn trọng tín ngưỡng của người khác.'),
    Q('Trách nhiệm của HS trong thực hiện quyền và nghĩa vụ công dân?', ['Phớt lờ nội quy', 'Học tập, rèn luyện đạo đức, chấp hành pháp luật', 'Chỉ học không cần biết luật', 'Đợi 18 tuổi mới chấp hành luật'], 1, 'Học sinh cần học và rèn luyện ngay từ bây giờ.'),
  ]),

  // ===== Chủ đề 11: Quyền trẻ em (T31–33) =====
  M(31, 'Quyền trẻ em là gì?', [
    Q('Theo Công ước quốc tế và Luật Trẻ em VN, trẻ em là người?', ['Dưới 20 tuổi', 'Dưới 18 tuổi', 'Dưới 12 tuổi', 'Dưới 16 tuổi'], 3, 'Theo Luật Trẻ em VN 2016, trẻ em là dưới 16 tuổi.'),
    Q('Trẻ em có những nhóm quyền cơ bản nào?', ['Sống còn, được bảo vệ, được phát triển, được tham gia', 'Chỉ quyền vui chơi', 'Không có quyền gì', 'Chỉ quyền học tập'], 0, '4 nhóm quyền cơ bản của trẻ em.'),
    Q('Quyền sống còn của trẻ em bao gồm?', ['Quyền học đại học', 'Quyền lái xe', 'Quyền bầu cử', 'Quyền được khai sinh, có quốc tịch, được chăm sóc sức khoẻ'], 3, 'Sống còn gồm khai sinh, sức khoẻ, dinh dưỡng.'),
    Q('Quyền được bảo vệ của trẻ em là?', ['Quyền không phải làm gì', 'Không bị xâm hại, bạo lực, bóc lột, bỏ rơi', 'Quyền không phải học', 'Quyền được giàu có'], 1, 'Bảo vệ trẻ khỏi xâm hại, bạo lực, bóc lột.'),
    Q('Quyền được phát triển bao gồm?', ['Lái xe', 'Học tập, vui chơi, văn hoá, nghệ thuật, thể thao', 'Đăng kí kết hôn', 'Đi làm kiếm tiền'], 1, 'Phát triển toàn diện về học, vui chơi, văn hoá.'),
    Q('Quyền được tham gia của trẻ em là?', ['Được bày tỏ ý kiến về những vấn đề liên quan đến trẻ em', 'Được ứng cử đại biểu', 'Được tham gia bầu cử', 'Được lái xe'], 0, 'Trẻ em có quyền bày tỏ ý kiến của mình.'),
  ]),

  M(32, 'Trách nhiệm trong việc bảo đảm quyền trẻ em', [
    Q('Trách nhiệm bảo đảm quyền trẻ em thuộc về?', ['Chỉ gia đình', 'Chỉ nhà trường', 'Gia đình, nhà trường, xã hội và Nhà nước', 'Chỉ Nhà nước'], 2, 'Là trách nhiệm chung của gia đình, nhà trường, xã hội, Nhà nước.'),
    Q('Bố mẹ ép em nghỉ học để đi làm. Hành vi này?', ['Vi phạm quyền học tập của trẻ em', 'Đúng vì em phải kiếm tiền', 'Không liên quan đến luật', 'Bình thường'], 0, 'Ép trẻ nghỉ học là vi phạm quyền trẻ em.'),
    Q('Hành vi nào XÂM PHẠM quyền trẻ em?', ['Đánh đập, ngược đãi, bỏ rơi trẻ em', 'Cho trẻ đi học', 'Chăm sóc dinh dưỡng', 'Đăng kí khai sinh cho trẻ'], 0, 'Bạo lực với trẻ là xâm phạm quyền trẻ em.'),
    Q('Khi bị bạo hành gia đình, em nên?', ['Im lặng chịu đựng', 'Bỏ nhà đi bụi', 'Báo cho thầy cô, người thân tin cậy hoặc gọi tổng đài 111', 'Đánh lại'], 2, '111 là tổng đài quốc gia bảo vệ trẻ em.'),
    Q('Tổng đài bảo vệ trẻ em quốc gia là?', ['111', '115', '113', '114'], 0, '111 là tổng đài bảo vệ trẻ em.'),
    Q('Trẻ em bị xâm hại tình dục là?', ['Vi phạm nghiêm trọng quyền trẻ em, phải tố giác ngay', 'Việc nhỏ', 'Cần giấu kín', 'Chuyện riêng của gia đình'], 0, 'Xâm hại tình dục là tội phạm nghiêm trọng phải tố giác.'),
  ]),

  M(33, 'Bổn phận của trẻ em', [
    Q('Trẻ em có bổn phận với gia đình là?', ['Yêu quý, kính trọng, hiếu thảo với ông bà cha mẹ', 'Chỉ đòi hỏi', 'Coi thường người lớn', 'Bỏ mặc gia đình'], 0, 'Hiếu thảo với ông bà cha mẹ là bổn phận của trẻ em.'),
    Q('Trẻ em có bổn phận với nhà trường là?', ['Bỏ học', 'Học tập, rèn luyện, tôn trọng thầy cô, đoàn kết bạn bè', 'Đánh bạn', 'Cãi thầy cô'], 1, 'Học tập và rèn luyện là bổn phận trong nhà trường.'),
    Q('Trẻ em có bổn phận với cộng đồng?', ['Gây gổ với mọi người', 'Tôn trọng quy tắc nơi công cộng, giữ gìn môi trường', 'Xả rác bừa bãi', 'Phá hoại tài sản công'], 1, 'Tôn trọng cộng đồng và môi trường.'),
    Q('Trẻ em có bổn phận với bản thân là?', ['Rèn luyện sức khoẻ, đạo đức, học tập, tránh xa tệ nạn', 'Sa đà tệ nạn', 'Bỏ bê bản thân', 'Đua đòi xa xỉ'], 0, 'Tự rèn luyện sức khoẻ, đạo đức là bổn phận với bản thân.'),
    Q('Quyền và bổn phận của trẻ em?', ['Chỉ có quyền', 'Đi đôi với nhau, không thể tách rời', 'Không liên quan', 'Chỉ có bổn phận'], 1, 'Quyền và bổn phận luôn đi đôi.'),
    Q('Hành vi nào KHÔNG đúng bổn phận của trẻ em?', ['Tham gia hoạt động lớp', 'Trốn học chơi game', 'Học bài đầy đủ', 'Giúp bố mẹ việc nhà'], 1, 'Trốn học chơi game vi phạm bổn phận học sinh.'),
  ]),

  // ===== Chủ đề 12: Thực hiện quyền trẻ em (T34–35) =====
  M(34, 'Thực hiện quyền trẻ em trong gia đình và nhà trường', [
    Q('Gia đình thực hiện quyền trẻ em bằng cách?', ['Yêu thương, chăm sóc, cho con đi học, lắng nghe ý kiến của con', 'Ép con nghỉ học đi làm', 'Không quan tâm con', 'Đánh đập con khi không nghe lời'], 0, 'Gia đình phải bảo đảm quyền học tập, được lắng nghe của trẻ.'),
    Q('Nhà trường thực hiện quyền trẻ em bằng cách?', ['Phân biệt đối xử', 'Để mặc bạo lực học đường', 'Phạt nặng học sinh sai phạm', 'Bảo đảm môi trường an toàn, không bạo lực, có chất lượng giáo dục'], 3, 'Nhà trường phải tạo môi trường an toàn cho học sinh.'),
    Q('Khi bạn ở lớp bị bạo lực học đường, em nên?', ['Báo thầy cô, an ủi bạn và cùng các bạn bảo vệ bạn', 'Bỏ qua không quan tâm', 'Cùng tham gia đánh bạn', 'Quay clip đăng mạng câu like'], 0, 'Báo thầy cô và bảo vệ bạn là thực hiện quyền trẻ em.'),
    Q('Em được mời góp ý sửa đổi nội quy lớp. Em nên?', ['Im lặng vì ngại', 'Coi thường buổi họp', 'Phản đối tất cả', 'Tham gia, bày tỏ ý kiến của mình một cách văn minh'], 3, 'Bày tỏ ý kiến là thực hiện quyền tham gia của trẻ em.'),
    Q('Khi quyền lợi của em bị xâm phạm, em nên?', ['Tìm sự giúp đỡ từ người tin cậy, gọi 111 nếu nghiêm trọng', 'Bỏ nhà ra đi', 'Tự ý trả thù', 'Im lặng chịu đựng'], 0, 'Tìm sự trợ giúp hợp pháp là cách đúng.'),
    Q('Em chứng kiến em họ 5 tuổi bị bố mẹ bỏ mặc đói. Em nên?', ['Mặc kệ vì không phải con mình', 'Đánh lại bố mẹ em đó', 'Báo người lớn tin cậy hoặc tổng đài 111', 'Đăng mạng phê phán bố mẹ em đó'], 2, 'Báo người có trách nhiệm để bảo vệ trẻ em.'),
  ]),

  M(35, 'Thực hiện quyền trẻ em trong xã hội và bản thân', [
    Q('Xã hội thực hiện quyền trẻ em bằng cách?', ['Cản trở việc học', 'Bóc lột lao động trẻ em', 'Bỏ mặc trẻ em', 'Có chính sách bảo vệ, chăm sóc, giáo dục trẻ em, xử lí nghiêm hành vi xâm hại'], 3, 'Xã hội cần có chính sách bảo vệ và phát triển trẻ em.'),
    Q('Em có thể tự bảo vệ quyền của mình bằng cách?', ['Hiểu biết quyền của mình, kĩ năng tự bảo vệ, biết tìm trợ giúp', 'Sợ hãi không nói gì', 'Không cần biết quyền', 'Đợi người khác bảo vệ'], 0, 'Hiểu quyền và kĩ năng tự bảo vệ là rất quan trọng.'),
    Q('Khi bị người lạ tiếp cận trên mạng đòi gặp riêng, em nên?', ['Hẹn gặp xem sao', 'Bí mật đi gặp một mình', 'Từ chối, chặn liên hệ và báo người lớn ngay', 'Cho địa chỉ nhà'], 2, 'Bảo vệ bản thân khỏi nguy cơ xâm hại trên mạng.'),
    Q('Em được tham gia ý kiến trong gia đình về việc chuyển trường. Em nên?', ['Cãi nhau với bố mẹ', 'Bày tỏ ý kiến thật của mình và lắng nghe bố mẹ', 'Bỏ nhà phản đối', 'Im lặng dù không muốn'], 1, 'Bày tỏ ý kiến văn minh là thực hiện quyền tham gia.'),
    Q('Bổn phận của em khi thực hiện quyền của mình là?', ['Không cần quan tâm', 'Lấn át quyền của người khác', 'Tôn trọng quyền của người khác', 'Chỉ nghĩ đến mình'], 2, 'Quyền của mình không xâm phạm quyền người khác.'),
    Q('Học sinh có thể tham gia thực hiện quyền trẻ em qua?', ['Không tham gia gì', 'Bỏ mặc bạn bè', 'Hoạt động Đội, sinh hoạt lớp, tuyên truyền bảo vệ trẻ em', 'Chỉ học không quan tâm xã hội'], 2, 'Tham gia hoạt động tập thể là cách thực hiện quyền và bổn phận.'),
  ]),

  // ===== T36: Ôn tập HK2 =====
  M(36, 'Ôn tập học kì 2', [
    Q('Khi gặp tình huống nguy hiểm, NGUYÊN TẮC đầu tiên là?', ['Đứng yên', 'Hét lớn', 'Bỏ chạy lung tung', 'Bình tĩnh, không hoảng loạn'], 3, 'Bình tĩnh giúp ra quyết định đúng.'),
    Q('Số tổng đài bảo vệ trẻ em là?', ['111', '115', '114', '113'], 0, '111 là tổng đài bảo vệ trẻ em.'),
    Q('Tiết kiệm KHÁC hà tiện ở chỗ?', ['Hà tiện là tốt hơn', 'Đều như nhau', 'Vẫn chi cho việc cần thiết, dùng hợp lí', 'Không tiêu gì cả'], 2, 'Tiết kiệm là sử dụng hợp lí.'),
    Q('Công dân Việt Nam là người?', ['Du lịch tại Việt Nam', 'Sinh ở Việt Nam nhưng có quốc tịch khác', 'Không quốc tịch', 'Có quốc tịch Việt Nam'], 3, 'Có quốc tịch VN là công dân VN.'),
    Q('Quyền và nghĩa vụ cơ bản của công dân được quy định trong?', ['Truyện tranh', 'Sách giáo khoa Toán', 'Báo điện tử', 'Hiến pháp'], 3, 'Hiến pháp là văn bản gốc.'),
    Q('Theo Luật Trẻ em VN, trẻ em là người?', ['Dưới 14 tuổi', 'Dưới 12 tuổi', 'Dưới 16 tuổi', 'Dưới 18 tuổi'], 2, 'Luật Trẻ em VN 2016: dưới 16 tuổi.'),
    Q('Khi bị xâm hại, hành vi đúng nhất là?', ['Bỏ nhà đi', 'Tự trả thù', 'Im lặng chịu đựng', 'Tìm sự giúp đỡ từ người tin cậy hoặc gọi 111'], 3, 'Tìm sự giúp đỡ hợp pháp là đúng nhất.'),
    Q('Trẻ em vừa có quyền vừa có?', ['Quyền vi phạm luật', 'Đặc quyền tuyệt đối', 'Bổn phận với bản thân, gia đình, nhà trường, xã hội', 'Quyền không cần học'], 2, 'Quyền và bổn phận luôn đi đôi.'),
  ]),
];

export const S6GDCD_SCENARIOS = indexBy(S6GDCD_WEEKS);
