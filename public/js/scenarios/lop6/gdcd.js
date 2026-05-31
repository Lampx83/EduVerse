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
    Q('Truyền thống gia đình, dòng họ là gì?', ['Là những giá trị tốt đẹp được hình thành và lưu truyền qua các thế hệ', 'Là tài sản vật chất do ông bà để lại', 'Là tên gọi của dòng họ', 'Là cây gia phả'], 0, 'Truyền thống là các giá trị tốt đẹp được kế thừa qua nhiều thế hệ.'),
    Q('Đâu là truyền thống tốt đẹp của gia đình, dòng họ Việt Nam?', ['Hiếu học, yêu nước, lao động cần cù', 'Tranh giành tài sản', 'Ganh đua hơn thua', 'Bao che cho nhau làm sai'], 0, 'Hiếu học, yêu nước, cần cù là những truyền thống đáng quý.'),
    Q('Việc làm nào thể hiện giữ gìn truyền thống dòng họ?', ['Tham gia giỗ tổ, lễ Tết của dòng họ', 'Coi thường họ hàng nghèo', 'Quên tên ông bà tổ tiên', 'Không quan tâm đến lễ giỗ'], 0, 'Tham gia các sinh hoạt dòng họ là cách giữ gìn truyền thống.'),
    Q('Ý nào KHÔNG phải truyền thống tốt đẹp?', ['Nghề thủ công gia truyền', 'Tinh thần hiếu học', 'Thói quen mê tín dị đoan', 'Lòng nhân ái'], 2, 'Mê tín dị đoan là hủ tục, không phải truyền thống tốt.'),
    Q('Nhà em có truyền thống làm nghề gốm 3 đời. Em nên?', ['Tìm hiểu, học hỏi để có thể tiếp nối nếu yêu thích', 'Chê nghề gốm là nghề thấp kém', 'Bỏ học để khỏi phải biết về nghề', 'Không quan tâm vì là việc người lớn'], 0, 'Tìm hiểu nghề truyền thống là biểu hiện tự hào dòng họ.'),
    Q('Ông nội kể chuyện thời chiến đấu của dòng họ, em nên?', ['Lắng nghe và ghi nhớ những bài học', 'Bỏ ra ngoài chơi', 'Bịt tai vì chuyện cũ', 'Cười cợt'], 0, 'Lắng nghe câu chuyện ông bà là cách trân trọng truyền thống.'),
  ]),

  M(2, 'Tự hào về truyền thống gia đình, dòng họ', [
    Q('Tự hào về truyền thống dòng họ được biểu hiện qua?', ['Trân trọng, giữ gìn và phát huy những giá trị tốt đẹp của dòng họ', 'Khoe khoang dòng họ giàu có', 'Coi thường người khác họ', 'Chỉ kể về thành tích của họ mình'], 0, 'Tự hào đúng nghĩa là trân trọng và phát huy giá trị tốt đẹp.'),
    Q('Bạn nào THỂ HIỆN tự hào truyền thống đúng nhất?', ['Lan cố gắng học giỏi để xứng đáng với truyền thống hiếu học của dòng họ', 'Tú khoe nhà mình có nhiều người làm to', 'Bình chê họ ngoại nghèo', 'An chỉ kể về tổ tiên mà không làm gì'], 0, 'Học giỏi để nối tiếp truyền thống mới là tự hào đích thực.'),
    Q('Vì sao cần tự hào về truyền thống gia đình, dòng họ?', ['Giúp ta có động lực sống tốt, có trách nhiệm và bản sắc riêng', 'Để khoe với bạn bè', 'Để được nhiều quà', 'Để được đặc quyền'], 0, 'Truyền thống là gốc rễ, giúp ta sống có trách nhiệm.'),
    Q('Hành vi nào LÀM TỔN HẠI truyền thống dòng họ?', ['Học giỏi, sống có đạo đức', 'Trộm cắp, đánh nhau làm xấu danh dòng họ', 'Tham gia giỗ tổ', 'Giúp đỡ họ hàng khó khăn'], 1, 'Hành vi xấu của một người làm ảnh hưởng danh dự cả dòng họ.'),
    Q('Em được sinh trong gia đình có truyền thống cách mạng. Em nên?', ['Cố gắng học tập, rèn luyện đạo đức, sống xứng đáng', 'Ỷ lại vào công lao của ông bà', 'Đòi hỏi đặc quyền', 'Coi mình hơn người khác'], 0, 'Sống xứng đáng với truyền thống mới là tự hào thật sự.'),
    Q('Khi bạn cùng lớp chê dòng họ em, em nên?', ['Đánh nhau với bạn', 'Bình tĩnh giải thích và sống tốt để chứng minh', 'Im lặng tủi thân', 'Cũng đi chê dòng họ bạn lại'], 1, 'Cách phản hồi văn minh là sống tốt để chứng minh.'),
  ]),

  M(3, 'Giữ gìn và phát huy truyền thống dòng họ', [
    Q('Việc làm nào PHÁT HUY truyền thống hiếu học của dòng họ?', ['Chăm chỉ học tập, đạt kết quả tốt', 'Chỉ kể chuyện ông tổ học giỏi', 'Treo bằng khen của ông lên tường rồi thôi', 'Mặc kệ việc học của bản thân'], 0, 'Phát huy nghĩa là tiếp nối bằng hành động cụ thể.'),
    Q('Gia đình em có nghề làm bánh truyền thống. Cách giữ gìn TỐT nhất?', ['Học công thức, cải tiến và quảng bá nghề', 'Giấu công thức không cho ai biết', 'Bỏ nghề chuyển sang nghề khác', 'Bán công thức cho người ngoài'], 0, 'Học, cải tiến, quảng bá là cách giữ gìn nghề truyền thống.'),
    Q('Hành vi nào KHÔNG phải giữ gìn truyền thống?', ['Tham dự lễ giỗ tổ', 'Tìm hiểu lịch sử dòng họ', 'Quên hết tên người thân trong họ', 'Học nghề truyền thống của gia đình'], 2, 'Quên tên người thân là không giữ gìn truyền thống.'),
    Q('Truyền thống "lá lành đùm lá rách" trong dòng họ thể hiện qua?', ['Giúp đỡ họ hàng khó khăn khi cần thiết', 'Cho vay nặng lãi với họ hàng', 'Chỉ giúp người giàu trong họ', 'Coi thường họ hàng nghèo'], 0, 'Đùm bọc, giúp đỡ nhau là truyền thống tốt đẹp.'),
    Q('Em phát hiện anh họ làm việc xấu ảnh hưởng dòng họ. Em nên?', ['Khuyên anh dừng lại, báo người lớn nếu nghiêm trọng', 'Bao che vì là người trong họ', 'Cũng làm theo anh', 'Mặc kệ không quan tâm'], 0, 'Khuyên và báo người lớn để bảo vệ danh dự dòng họ.'),
    Q('Trách nhiệm của em với truyền thống dòng họ?', ['Học tập, rèn luyện, tham gia hoạt động dòng họ phù hợp lứa tuổi', 'Phó mặc cho người lớn', 'Chờ lớn rồi mới quan tâm', 'Coi đó không phải việc của mình'], 0, 'Giữ gìn truyền thống là trách nhiệm của mọi thành viên.'),
  ]),

  // ===== Chủ đề 2: Yêu thương con người (T4–6) =====
  M(4, 'Yêu thương con người là gì?', [
    Q('Yêu thương con người là?', ['Quan tâm, giúp đỡ, làm những điều tốt đẹp cho người khác', 'Chỉ yêu người mình thích', 'Chỉ giúp khi có lợi', 'Chỉ yêu người thân'], 0, 'Yêu thương là quan tâm và làm điều tốt cho người khác.'),
    Q('Biểu hiện nào là yêu thương con người?', ['Chia sẻ với người gặp khó khăn', 'Trêu chọc người khuyết tật', 'Bắt nạt bạn yếu hơn', 'Chế giễu người nghèo'], 0, 'Chia sẻ là biểu hiện của tình yêu thương.'),
    Q('Câu ca dao nào nói về yêu thương con người?', ['Thương người như thể thương thân', 'Tốt gỗ hơn tốt nước sơn', 'Có chí thì nên', 'Học, học nữa, học mãi'], 0, '"Thương người như thể thương thân" nói về tình yêu thương.'),
    Q('Ý nào KHÔNG phải biểu hiện yêu thương con người?', ['Quyên góp ủng hộ đồng bào lũ lụt', 'Đẩy bạn ngã rồi cười', 'Dắt cụ già qua đường', 'Cho bạn mượn vở'], 1, 'Đẩy bạn ngã là hành vi vô tâm, ác ý.'),
    Q('Vì sao chúng ta cần yêu thương con người?', ['Vì đó là truyền thống và làm cuộc sống tốt đẹp hơn', 'Vì sợ bị mắng', 'Vì muốn được khen', 'Vì để được trả ơn'], 0, 'Yêu thương làm cuộc sống ấm áp, ý nghĩa.'),
    Q('Trên xe buýt, em thấy một cụ già không có chỗ ngồi. Em nên?', ['Nhường ghế cho cụ', 'Giả vờ ngủ', 'Cười cợt với bạn', 'Cố giữ ghế của mình'], 0, 'Nhường ghế cho cụ già là biểu hiện yêu thương.'),
  ]),

  M(5, 'Biểu hiện của tình yêu thương con người', [
    Q('Bạn lớp em bị ốm phải nghỉ học dài ngày. Em nên?', ['Đến thăm, chép bài hộ, động viên bạn', 'Mặc kệ bạn', 'Mừng vì bạn nghỉ học', 'Lấy đồ dùng của bạn'], 0, 'Đến thăm, giúp đỡ bạn ốm là yêu thương bạn bè.'),
    Q('Em chứng kiến bạn bị bắt nạt ở trường. Em nên?', ['Bênh vực bạn và báo thầy cô', 'Cùng tham gia bắt nạt', 'Đứng xem cho vui', 'Quay clip đăng mạng'], 0, 'Bảo vệ bạn và báo thầy cô là biểu hiện yêu thương.'),
    Q('Hành vi nào THIẾU yêu thương con người?', ['Chia cơm cho bạn quên mang', 'Đăng ảnh chế giễu ngoại hình bạn lên mạng', 'Hỏi thăm cô lao công', 'Nhường đồ chơi cho em nhỏ'], 1, 'Chế giễu ngoại hình người khác là thiếu yêu thương.'),
    Q('Người yêu thương con người sẽ?', ['Sẵn sàng tha thứ khi người khác mắc lỗi và sửa sai', 'Ghi thù lâu dài', 'Trả thù khi có cơ hội', 'Không bao giờ tha thứ'], 0, 'Tha thứ là một biểu hiện của tình yêu thương.'),
    Q('Em thấy một em bé bị lạc trong siêu thị. Em nên?', ['Đưa em đến quầy thông tin nhờ tìm bố mẹ', 'Bỏ đi mặc kệ', 'Cười em bé khóc', 'Dắt em đi lung tung'], 0, 'Giúp em bé tìm bố mẹ là biểu hiện yêu thương.'),
    Q('Trong lớp có bạn khuyết tật, em nên?', ['Đối xử bình đẳng, giúp bạn khi cần', 'Tránh xa bạn', 'Chế giễu khuyết tật của bạn', 'Không cho bạn chơi cùng'], 0, 'Đối xử bình đẳng và giúp đỡ bạn khuyết tật là yêu thương.'),
  ]),

  M(6, 'Ý nghĩa của tình yêu thương con người', [
    Q('Tình yêu thương con người mang lại điều gì cho người nhận?', ['Sự an ủi, động viên, sức mạnh vượt qua khó khăn', 'Sự kiêu ngạo', 'Cảm giác mắc nợ', 'Sự lệ thuộc'], 0, 'Yêu thương giúp người khác có sức mạnh vượt qua khó khăn.'),
    Q('Người biết yêu thương sẽ?', ['Được mọi người tin yêu, quý mến', 'Bị mọi người xa lánh', 'Bị lợi dụng', 'Mất hết bạn bè'], 0, 'Yêu thương đem lại sự tin yêu của mọi người.'),
    Q('Bạn nào HIỂU ĐÚNG về yêu thương con người?', ['Yêu thương là không vô cảm trước nỗi đau của người khác', 'Chỉ yêu thương khi có lợi', 'Yêu thương chỉ dành cho người thân', 'Yêu thương là cho tiền'], 0, 'Yêu thương xuất phát từ sự đồng cảm chân thành.'),
    Q('Đoàn thiếu niên trường vận động ủng hộ trẻ em vùng lũ. Em nên?', ['Tham gia bằng cách góp sách vở, quần áo phù hợp', 'Không tham gia vì không thân', 'Chê các bạn đi cứu trợ', 'Lấy đồ ủng hộ về dùng'], 0, 'Tham gia ủng hộ là biểu hiện yêu thương con người.'),
    Q('Bố mẹ bạn ly hôn, bạn buồn bã. Em nên?', ['Lắng nghe, an ủi và không hỏi chuyện riêng tư', 'Hỏi dò chuyện gia đình bạn', 'Đem chuyện đó kể cho cả lớp', 'Trêu bạn không có bố/mẹ'], 0, 'An ủi và tôn trọng nỗi đau của bạn là yêu thương.'),
    Q('Tình yêu thương con người KHÔNG bao gồm?', ['Đồng cảm, chia sẻ', 'Bao che cho hành vi sai trái', 'Giúp đỡ vô tư', 'Tha thứ khi người khác biết lỗi'], 1, 'Bao che cho sai trái không phải yêu thương mà là dung túng.'),
  ]),

  // ===== Chủ đề 3: Siêng năng, kiên trì (T7–9) =====
  M(7, 'Siêng năng, kiên trì là gì?', [
    Q('Siêng năng là?', ['Đức tính làm việc tự giác, đều đặn, cần mẫn', 'Làm việc khi có người nhìn', 'Làm rồi nghỉ thường xuyên', 'Chỉ làm việc mình thích'], 0, 'Siêng năng là làm việc tự giác, đều đặn.'),
    Q('Kiên trì là?', ['Quyết tâm làm đến cùng dù khó khăn, không nản chí', 'Làm cho có rồi bỏ', 'Bỏ cuộc khi gặp khó', 'Đổi việc liên tục'], 0, 'Kiên trì là không bỏ cuộc trước khó khăn.'),
    Q('Câu tục ngữ nào nói về siêng năng, kiên trì?', ['Có công mài sắt, có ngày nên kim', 'Một câu nhịn, chín câu lành', 'Lá lành đùm lá rách', 'Ăn quả nhớ kẻ trồng cây'], 0, '"Mài sắt nên kim" nói về sự kiên trì.'),
    Q('Bạn nào SIÊNG NĂNG, KIÊN TRÌ?', ['Lan làm bài tập đầy đủ mỗi ngày, gặp bài khó thì hỏi cho đến khi hiểu', 'Tú đợi nước đến chân mới nhảy', 'Bình bỏ học giữa chừng vì không thuộc bài', 'An chỉ học khi sắp kiểm tra'], 0, 'Làm đều và không bỏ cuộc khi gặp khó là siêng năng, kiên trì.'),
    Q('Ý nào KHÔNG phải siêng năng?', ['Đều đặn ôn bài mỗi ngày', 'Tự giác giúp việc nhà', 'Chỉ làm khi bị thúc ép', 'Tập thể dục mỗi sáng'], 2, 'Phải bị thúc ép mới làm không phải là siêng năng.'),
    Q('Trái nghĩa với siêng năng, kiên trì là?', ['Lười biếng, ngại khó, bỏ cuộc', 'Chăm chỉ, cần cù', 'Quyết tâm, bền bỉ', 'Tự giác, đều đặn'], 0, 'Lười biếng và bỏ cuộc là trái với siêng năng, kiên trì.'),
  ]),

  M(8, 'Biểu hiện của siêng năng, kiên trì', [
    Q('Bạn Hoa quyết tâm chạy 30 phút mỗi sáng, dù mệt vẫn không bỏ. Hoa thể hiện?', ['Siêng năng và kiên trì', 'Lười biếng', 'Cẩu thả', 'Tự cao'], 0, 'Đều đặn và không bỏ cuộc là siêng năng, kiên trì.'),
    Q('Trong học tập, biểu hiện siêng năng là?', ['Đọc trước bài mới, làm bài tập đầy đủ, ôn bài thường xuyên', 'Chép bài bạn', 'Chỉ học khi bị nhắc', 'Học dồn trước thi'], 0, 'Đọc, làm, ôn đều đặn là siêng năng học tập.'),
    Q('Em đang tập đàn, gặp bài khó. Em nên?', ['Kiên trì luyện tập từng đoạn nhỏ cho đến khi thuần thục', 'Bỏ đàn vì khó quá', 'Đổ lỗi cho thầy dạy không hay', 'Đợi có hứng mới tập'], 0, 'Kiên trì luyện từ phần nhỏ giúp vượt khó.'),
    Q('Hành vi nào THIẾU siêng năng?', ['Tự giác làm việc nhà', 'Ngủ nướng đến trưa, không học bài', 'Đi học đều', 'Tập thể dục thường xuyên'], 1, 'Ngủ nướng và không học là thiếu siêng năng.'),
    Q('Bạn nào THIẾU kiên trì?', ['An bỏ học võ vì tập 2 buổi thấy đau', 'Lan tập viết chữ đẹp suốt 3 tháng', 'Hoa luyện tiếng Anh mỗi ngày 30 phút', 'Bình tập bơi đến khi biết bơi'], 0, 'Bỏ cuộc sớm khi gặp khó là thiếu kiên trì.'),
    Q('Để rèn siêng năng, kiên trì, em nên?', ['Đặt mục tiêu, lập kế hoạch và làm đều đặn', 'Đợi có hứng', 'Làm theo cảm xúc', 'Chờ người khác nhắc'], 0, 'Đặt mục tiêu và làm đều là cách rèn luyện.'),
  ]),

  M(9, 'Ý nghĩa của siêng năng, kiên trì', [
    Q('Siêng năng, kiên trì giúp con người?', ['Thành công trong học tập, công việc và cuộc sống', 'Trở nên mệt mỏi', 'Mất bạn bè', 'Bị xa lánh'], 0, 'Siêng năng kiên trì dẫn đến thành công.'),
    Q('Người không siêng năng, kiên trì thường?', ['Dễ thất bại, dễ bỏ cuộc', 'Luôn thành công', 'Được mọi người yêu mến', 'Có nhiều kĩ năng'], 0, 'Lười biếng dẫn đến thất bại và bỏ cuộc.'),
    Q('Câu chuyện nào nổi tiếng về kiên trì?', ['Mạc Đĩnh Chi bắt đom đóm bỏ vỏ trứng làm đèn học', 'Tấm Cám', 'Sơn Tinh Thuỷ Tinh', 'Thạch Sanh'], 0, 'Mạc Đĩnh Chi là tấm gương kiên trì học tập.'),
    Q('Em mơ ước thi đỗ trường chuyên. Em nên?', ['Lập kế hoạch học tập và kiên trì thực hiện mỗi ngày', 'Chỉ học khi gần thi', 'Cầu may mắn', 'Đợi học thêm thật nhiều buổi gần thi'], 0, 'Học đều, có kế hoạch là con đường đạt mục tiêu.'),
    Q('Khi bị điểm kém, người siêng năng kiên trì sẽ?', ['Tìm nguyên nhân, sửa lỗi và cố gắng tiếp', 'Bỏ cuộc, không học nữa', 'Đổ lỗi cho thầy cô', 'Giấu bài kiểm tra'], 0, 'Sửa lỗi và cố gắng tiếp là kiên trì đúng nghĩa.'),
    Q('Trách nhiệm của em với việc rèn siêng năng, kiên trì?', ['Tự rèn luyện trong học tập, lao động và cuộc sống hàng ngày', 'Đợi người lớn nhắc', 'Chỉ cần học khi có thưởng', 'Không cần rèn vì còn nhỏ'], 0, 'Tự rèn luyện mỗi ngày mới hình thành đức tính tốt.'),
  ]),

  // ===== Chủ đề 4: Tôn trọng sự thật (T10–12) =====
  M(10, 'Tôn trọng sự thật là gì?', [
    Q('Tôn trọng sự thật là?', ['Suy nghĩ, nói và làm theo đúng sự thật', 'Nói theo người mình thích', 'Bịa đặt để được lợi', 'Giấu sự thật khi bất lợi'], 0, 'Tôn trọng sự thật là sống theo sự thật.'),
    Q('Biểu hiện của tôn trọng sự thật?', ['Nói thật, nhận lỗi khi sai, bảo vệ lẽ phải', 'Nói dối để được khen', 'Vu khống người khác', 'Bao che cho sai phạm'], 0, 'Nói thật và bảo vệ lẽ phải là tôn trọng sự thật.'),
    Q('Câu tục ngữ nào nói về tôn trọng sự thật?', ['Cây ngay không sợ chết đứng', 'Đèn nhà ai nấy rạng', 'Một câu nhịn, chín câu lành', 'Lá lành đùm lá rách'], 0, '"Cây ngay không sợ chết đứng" nói về sự thật, ngay thẳng.'),
    Q('Bạn nào TÔN TRỌNG sự thật?', ['Lan nhận lỗi làm vỡ bình hoa dù không ai biết', 'Tú đổ lỗi cho bạn khác', 'Bình bịa chuyện để được nghỉ học', 'An nói dối điểm thi'], 0, 'Tự nhận lỗi khi không ai biết là tôn trọng sự thật.'),
    Q('Vì sao cần tôn trọng sự thật?', ['Giúp xây dựng lòng tin, mối quan hệ tốt đẹp và xã hội công bằng', 'Để được khen', 'Để được quà', 'Để được người lớn yêu'], 0, 'Sự thật là nền tảng của lòng tin và công bằng.'),
    Q('Ý nào KHÔNG phải tôn trọng sự thật?', ['Nói thật với bố mẹ', 'Bảo vệ bạn bị vu oan', 'Bịa chuyện hại người mình ghét', 'Khai báo trung thực với thầy cô'], 2, 'Bịa chuyện hại người khác là vi phạm sự thật nghiêm trọng.'),
  ]),

  M(11, 'Biểu hiện của tôn trọng sự thật', [
    Q('Em chứng kiến bạn A đánh bạn B. Cô giáo hỏi, em nên?', ['Kể đúng sự thật mình thấy', 'Bao che cho bạn A vì là bạn thân', 'Nói dối là không thấy gì', 'Vu thêm cho bạn A'], 0, 'Kể đúng sự thật là tôn trọng sự thật.'),
    Q('Em làm sai bài kiểm tra. Em nên?', ['Nhận điểm thật và cố gắng lần sau', 'Sửa điểm để mẹ không mắng', 'Xé bài đi', 'Đổ lỗi cho cô chấm sai'], 0, 'Nhận điểm thật là tôn trọng sự thật.'),
    Q('Hành vi nào KHÔNG tôn trọng sự thật?', ['Trung thực trong thi cử', 'Nhận lỗi khi sai', 'Quay cóp, gian lận trong kiểm tra', 'Báo cáo đúng sự việc'], 2, 'Quay cóp là gian lận, không tôn trọng sự thật.'),
    Q('Bạn em đăng tin giả về một học sinh khác trên mạng. Em nên?', ['Khuyên bạn xoá tin và xin lỗi người bị hại', 'Cùng chia sẻ tin đó', 'Mặc kệ bạn', 'Bình luận hùa theo'], 0, 'Khuyên bạn dừng tin giả là tôn trọng sự thật.'),
    Q('Tôn trọng sự thật trong học tập có nghĩa là?', ['Không quay cóp, không bịa số liệu, làm bài bằng năng lực thật', 'Chép bài bạn nếu cô không thấy', 'Khai gian giờ học thêm', 'Mượn bài cô làm bài tập về nhà'], 0, 'Trung thực trong học tập là tôn trọng sự thật.'),
    Q('Em phát hiện bạn nhặt được tiền và lấy luôn, không trả người mất. Em nên?', ['Khuyên bạn trả lại tiền cho người mất', 'Đòi bạn chia tiền', 'Tố cáo lên mạng xã hội', 'Im lặng cho qua'], 0, 'Khuyên bạn làm đúng là tôn trọng sự thật và lẽ phải.'),
  ]),

  M(12, 'Ý nghĩa của tôn trọng sự thật', [
    Q('Người tôn trọng sự thật sẽ?', ['Được mọi người tin tưởng, quý mến', 'Bị mọi người ghét', 'Bị cô lập', 'Không có bạn bè'], 0, 'Trung thực mang lại sự tin tưởng.'),
    Q('Tôn trọng sự thật giúp xã hội?', ['Trở nên công bằng, văn minh, lành mạnh', 'Hỗn loạn hơn', 'Mất đoàn kết', 'Phát triển tin giả'], 0, 'Sự thật là nền tảng của xã hội văn minh.'),
    Q('Hậu quả của việc KHÔNG tôn trọng sự thật?', ['Mất lòng tin, ảnh hưởng quan hệ, gây hại cho người khác', 'Được mọi người yêu mến', 'Thành công nhanh chóng', 'Sống thanh thản'], 0, 'Nói dối làm mất lòng tin và gây hại.'),
    Q('Khi sự thật bất lợi cho em, em nên?', ['Vẫn nói thật và chấp nhận chịu trách nhiệm', 'Nói dối để tránh hậu quả', 'Lừa người khác', 'Đổ lỗi'], 0, 'Dũng cảm nói thật dù bất lợi mới là tôn trọng sự thật thực sự.'),
    Q('Bạn em định bạo lực với bạn khác. Em nên?', ['Ngăn cản và báo người lớn', 'Đứng quay clip', 'Bao che cho bạn', 'Hùa theo đánh'], 0, 'Bảo vệ lẽ phải là một dạng tôn trọng sự thật.'),
    Q('Để rèn tôn trọng sự thật, em nên?', ['Luôn nói thật, dũng cảm nhận lỗi, không bịa đặt', 'Tránh nói chuyện với mọi người', 'Chỉ nói thật khi có lợi', 'Đợi người lớn dạy'], 0, 'Rèn luyện hàng ngày bằng thói quen nói thật.'),
  ]),

  // ===== Chủ đề 5: Tự lập (T13–15) =====
  M(13, 'Tự lập là gì?', [
    Q('Tự lập là?', ['Tự làm lấy, tự giải quyết công việc của mình bằng khả năng và sức lực của bản thân', 'Làm việc một mình không cần ai', 'Không nghe lời ai', 'Tách khỏi gia đình'], 0, 'Tự lập là tự lo, tự làm bằng sức mình.'),
    Q('Biểu hiện của người tự lập?', ['Tự sắp xếp việc học, việc nhà phù hợp lứa tuổi', 'Mọi việc đều nhờ bố mẹ', 'Đợi người khác nhắc nhở', 'Phụ thuộc hoàn toàn vào gia đình'], 0, 'Tự lo việc của mình là tự lập.'),
    Q('Tự lập KHÔNG có nghĩa là?', ['Tách rời, từ chối mọi sự giúp đỡ', 'Tự giác làm việc của mình', 'Tự chịu trách nhiệm về hành động', 'Cố gắng vượt khó'], 0, 'Tự lập không phải là cô độc; vẫn nhận hỗ trợ khi cần.'),
    Q('Bạn nào TỰ LẬP?', ['An tự thức dậy, soạn sách đến lớp mỗi sáng', 'Lan phải mẹ thức dậy, soạn sách hộ', 'Tú để mẹ làm bài tập', 'Bình đợi bố cho ăn'], 0, 'Tự lo việc cá nhân là tự lập.'),
    Q('Tại sao học sinh lớp 6 cần học tự lập?', ['Để trưởng thành, có trách nhiệm và chuẩn bị cho tương lai', 'Để bố mẹ khỏi thương', 'Để không cần ai', 'Để khoe với bạn'], 0, 'Tự lập là bước trưởng thành cần thiết.'),
    Q('Ý nào THỂ HIỆN tự lập?', ['Tự ôn bài, tự dọn phòng, tự đi học bằng xe đạp', 'Đợi mẹ làm hết', 'Đùn việc cho em', 'Khóc khi gặp khó'], 0, 'Tự làm việc của mình là biểu hiện tự lập.'),
  ]),

  M(14, 'Biểu hiện của tự lập', [
    Q('Trong học tập, tự lập là?', ['Tự làm bài, tự ôn, biết nhờ giúp khi cần nhưng không ỷ lại', 'Chép bài bạn', 'Mẹ làm bài hộ', 'Đợi cô giảng lại từng bước'], 0, 'Tự học, không ỷ lại là tự lập học tập.'),
    Q('Trong sinh hoạt, tự lập là?', ['Tự dọn phòng, gấp chăn, giặt đồ nhỏ của mình', 'Mẹ làm hộ tất cả', 'Chỉ ăn rồi ngủ', 'Vứt đồ bừa bãi'], 0, 'Tự lo sinh hoạt cá nhân là tự lập.'),
    Q('Hành vi nào THIẾU tự lập?', ['Mỗi buổi sáng đều cần mẹ gọi nhiều lần mới dậy', 'Tự đặt báo thức', 'Tự chuẩn bị sách vở', 'Tự nấu bữa sáng đơn giản'], 0, 'Phải nhắc nhiều lần là chưa tự lập.'),
    Q('Bạn Lan luôn nhờ bạn khác làm bài hộ vì lười. Lan?', ['Thiếu tự lập và thiếu trung thực', 'Tự lập tốt', 'Thông minh', 'Biết hợp tác'], 0, 'Nhờ làm hộ vì lười là thiếu tự lập.'),
    Q('Em được giao chuẩn bị bài thuyết trình nhóm. Tự lập có nghĩa là?', ['Tự nghiên cứu phần của mình và đóng góp cho nhóm', 'Chỉ ngồi chờ bạn làm', 'Ăn theo công lao bạn', 'Đùn việc cho bạn yếu'], 0, 'Tự làm phần của mình là tự lập trong nhóm.'),
    Q('Tự lập KHÔNG đồng nghĩa với?', ['Không cần ai giúp đỡ', 'Tự chịu trách nhiệm', 'Cố gắng vượt khó', 'Tự giác làm việc'], 0, 'Người tự lập vẫn biết hợp tác và nhờ giúp đúng lúc.'),
  ]),

  M(15, 'Ý nghĩa và cách rèn luyện tự lập', [
    Q('Người tự lập sẽ?', ['Tự tin, có bản lĩnh và dễ thành công trong cuộc sống', 'Cô đơn cả đời', 'Không có bạn', 'Bị xa lánh'], 0, 'Tự lập đem lại sự tự tin và bản lĩnh.'),
    Q('Người KHÔNG tự lập thường?', ['Ỷ lại, dễ thất bại, gánh nặng cho người khác', 'Luôn thành công', 'Được mọi người yêu', 'Sống vui vẻ'], 0, 'Ỷ lại dẫn đến thất bại và làm khổ người khác.'),
    Q('Để rèn tự lập, em nên BẮT ĐẦU từ?', ['Những việc nhỏ phù hợp với lứa tuổi như tự dọn phòng, tự học', 'Tự đi làm kiếm tiền', 'Bỏ học ra ngoài sống', 'Cãi lại bố mẹ'], 0, 'Bắt đầu từ việc nhỏ phù hợp lứa tuổi.'),
    Q('Bạn Hoa muốn rèn tự lập. Bạn nên?', ['Lập thời gian biểu và tự quản lí việc học, việc nhà', 'Bỏ đi xa nhà', 'Không nghe lời bố mẹ', 'Tự ý nghỉ học'], 0, 'Quản lí việc cá nhân là cách rèn tự lập đúng.'),
    Q('Tự lập trong tài chính ở lứa tuổi học sinh là?', ['Biết tiết kiệm tiền tiêu vặt, dùng có kế hoạch', 'Đi làm thêm bỏ học', 'Vay tiền bạn để mua đồ', 'Đòi bố mẹ nhiều tiền'], 0, 'Tiết kiệm và dùng có kế hoạch là tự lập tài chính.'),
    Q('Tự lập là phẩm chất?', ['Cần thiết cho mọi lứa tuổi và là nền tảng của sự trưởng thành', 'Chỉ người lớn mới cần', 'Chỉ con trai mới cần', 'Không cần thiết với học sinh'], 0, 'Tự lập là phẩm chất cần thiết với mọi người.'),
  ]),

  // ===== Chủ đề 6: Tự nhận thức bản thân (T16–17) =====
  M(16, 'Tự nhận thức bản thân là gì?', [
    Q('Tự nhận thức bản thân là?', ['Biết nhìn nhận, đánh giá đúng về bản thân (điểm mạnh, điểm yếu, sở thích, giá trị)', 'Chỉ biết khen mình', 'Chỉ thấy mình kém cỏi', 'So sánh mình với người khác liên tục'], 0, 'Tự nhận thức là hiểu đúng về bản thân.'),
    Q('Vì sao cần tự nhận thức bản thân?', ['Để phát huy điểm mạnh, khắc phục điểm yếu, định hướng tương lai', 'Để khoe khoang', 'Để hơn người khác', 'Để được khen'], 0, 'Hiểu mình giúp phát triển bản thân.'),
    Q('Bạn nào TỰ NHẬN THỨC tốt?', ['Lan biết mình mạnh ngôn ngữ, yếu toán nên dành nhiều thời gian luyện toán', 'Tú nghĩ mình giỏi nhất lớp dù điểm thấp', 'Bình chê tất cả những gì mình có', 'An so sánh mình với bạn rồi tự ti'], 0, 'Biết điểm mạnh, điểm yếu để cải thiện là tự nhận thức tốt.'),
    Q('Tự nhận thức bản thân KHÔNG phải là?', ['Bắt chước hoàn toàn người khác', 'Hiểu điểm mạnh của mình', 'Hiểu điểm yếu của mình', 'Hiểu sở thích, giá trị của mình'], 0, 'Bắt chước người khác là không tôn trọng bản thân.'),
    Q('Cách để tự nhận thức bản thân?', ['Tự đánh giá, lắng nghe ý kiến đúng đắn từ người khác, ghi nhật kí', 'Chỉ nghe lời chê bai', 'Không cần ai góp ý', 'So sánh trên mạng xã hội'], 0, 'Tự đánh giá và lắng nghe góp ý chân thành.'),
    Q('Khi được khen, người tự nhận thức tốt sẽ?', ['Vui và tiếp tục phát huy, không kiêu', 'Kiêu ngạo, coi thường người khác', 'Không tin lời khen', 'Khoe khắp nơi'], 0, 'Tự tin nhưng không kiêu là tự nhận thức đúng.'),
  ]),

  M(17, 'Cách rèn luyện và ý nghĩa của tự nhận thức bản thân', [
    Q('Khi bị chê, người tự nhận thức tốt sẽ?', ['Bình tĩnh xem xét, sửa nếu đúng, bỏ qua nếu sai', 'Nổi giận, cãi lại', 'Tự ti, bỏ cuộc', 'Trả đũa người chê'], 0, 'Tiếp thu góp ý đúng đắn để hoàn thiện.'),
    Q('Em phát hiện mình rất giỏi vẽ. Em nên?', ['Phát huy bằng cách luyện tập và tham gia các hoạt động vẽ', 'Giấu đi không cho ai biết', 'Khoe khắp nơi', 'Bỏ học để chỉ vẽ'], 0, 'Phát huy điểm mạnh là cách phát triển bản thân.'),
    Q('Em thấy mình hay nóng giận. Em nên?', ['Nhận ra và rèn luyện kiểm soát cảm xúc', 'Coi đó là cá tính, không sửa', 'Đổ lỗi cho người xung quanh', 'Bỏ mặc'], 0, 'Nhận điểm yếu và sửa là tự nhận thức đúng.'),
    Q('Người KHÔNG biết tự nhận thức thường?', ['Tự cao hoặc tự ti, khó tiến bộ', 'Luôn thành công', 'Hạnh phúc', 'Được mọi người tin yêu'], 0, 'Không hiểu mình dẫn đến tự cao hoặc tự ti.'),
    Q('Tự nhận thức bản thân giúp em?', ['Định hướng nghề nghiệp, cải thiện bản thân, sống có mục tiêu', 'Tránh học tập', 'Tránh giao tiếp', 'Trở nên khép kín'], 0, 'Hiểu mình giúp định hướng tương lai.'),
    Q('Cách rèn tự nhận thức bản thân HIỆU QUẢ?', ['Suy ngẫm mỗi ngày, viết nhật kí, hỏi ý kiến người tin cậy', 'Không quan tâm gì hết', 'Sao chép người khác', 'Chỉ tin mạng xã hội'], 0, 'Suy ngẫm và lắng nghe góp ý là cách rèn hiệu quả.'),
  ]),

  // ===== T18: Ôn tập HK1 =====
  M(18, 'Ôn tập học kì 1', [
    Q('Truyền thống tốt đẹp của gia đình, dòng họ KHÔNG bao gồm?', ['Mê tín dị đoan', 'Hiếu học', 'Yêu nước', 'Cần cù lao động'], 0, 'Mê tín dị đoan là hủ tục cần bài trừ.'),
    Q('Câu nào nói về yêu thương con người?', ['Thương người như thể thương thân', 'Có công mài sắt có ngày nên kim', 'Cây ngay không sợ chết đứng', 'Đèn nhà ai nấy rạng'], 0, '"Thương người như thể thương thân" là yêu thương con người.'),
    Q('Người siêng năng, kiên trì là người?', ['Làm việc đều đặn và không bỏ cuộc trước khó khăn', 'Làm việc khi có hứng', 'Bỏ cuộc khi gặp khó', 'Chỉ làm việc dễ'], 0, 'Đều đặn và bền bỉ là siêng năng kiên trì.'),
    Q('Hành vi nào tôn trọng sự thật?', ['Nhận lỗi khi mình làm sai', 'Đổ lỗi cho người khác', 'Bịa chuyện', 'Vu khống bạn'], 0, 'Nhận lỗi khi sai là tôn trọng sự thật.'),
    Q('Tự lập KHÔNG có nghĩa là?', ['Từ chối mọi sự giúp đỡ', 'Tự lo việc của mình', 'Tự chịu trách nhiệm', 'Tự giác làm việc'], 0, 'Tự lập không phải cô độc, vẫn cần hợp tác.'),
    Q('Tự nhận thức bản thân giúp em?', ['Phát huy điểm mạnh, khắc phục điểm yếu', 'Chê bai người khác', 'Tự cao tự đại', 'So sánh tiêu cực với người khác'], 0, 'Tự nhận thức để phát triển bản thân.'),
    Q('Tổng hợp 6 chủ đề HK1, đức tính nào liên quan trực tiếp đến học tập?', ['Siêng năng, kiên trì', 'Mê tín', 'Lười biếng', 'Đua đòi'], 0, 'Siêng năng, kiên trì rất quan trọng trong học tập.'),
  ]),

  // ──────────────── HK2 ────────────────
  // ===== Chủ đề 7: Ứng phó với tình huống nguy hiểm (T19–21) =====
  M(19, 'Tình huống nguy hiểm là gì?', [
    Q('Tình huống nguy hiểm là?', ['Sự việc bất ngờ có thể gây hại đến tính mạng, sức khoẻ, tài sản', 'Bài kiểm tra khó', 'Bị điểm thấp', 'Bị bạn ghét'], 0, 'Tình huống nguy hiểm đe doạ tính mạng, sức khoẻ.'),
    Q('Đâu là tình huống nguy hiểm từ thiên nhiên?', ['Lũ lụt, bão, sấm sét, động đất', 'Bài tập về nhà nhiều', 'Mất điện ban ngày', 'Trời nắng nhẹ'], 0, 'Thiên tai là nguy hiểm từ tự nhiên.'),
    Q('Đâu là tình huống nguy hiểm từ con người?', ['Bị bắt cóc, bị xâm hại, bị đe doạ trên mạng', 'Được bạn rủ đi chơi', 'Được khen', 'Đi học bằng xe buýt'], 0, 'Nguy hiểm từ con người gồm bắt cóc, xâm hại, đe doạ.'),
    Q('Khi gặp tình huống nguy hiểm, NGUYÊN TẮC đầu tiên là?', ['Bình tĩnh, không hoảng loạn', 'Hét lên hoảng sợ', 'Chạy lung tung', 'Đứng yên không suy nghĩ'], 0, 'Bình tĩnh giúp ra quyết định đúng.'),
    Q('Số điện thoại CỨU HOẢ ở Việt Nam?', ['114', '113', '115', '112'], 0, '114 là số gọi cứu hoả.'),
    Q('Số điện thoại CẢNH SÁT là?', ['113', '114', '115', '111'], 0, '113 là số cảnh sát.'),
  ]),

  M(20, 'Ứng phó với đuối nước, hoả hoạn', [
    Q('Khi bị đuối nước, em nên?', ['Giữ bình tĩnh, há miệng thở, vẫy tay kêu cứu, không vùng vẫy quá', 'Vùng vẫy mạnh để nổi lên', 'Hít nước thật nhiều', 'Bơi thật nhanh ra xa'], 0, 'Bình tĩnh, kêu cứu, không vùng vẫy mất sức.'),
    Q('Để PHÒNG đuối nước, em nên?', ['Học bơi, không tắm ở chỗ nước sâu, không ra sông một mình', 'Tắm sông khi mưa lũ', 'Bơi ở chỗ có biển cảnh báo nguy hiểm', 'Đi tắm khi không có ai biết'], 0, 'Học bơi và tránh nơi nguy hiểm là phòng đuối nước.'),
    Q('Khi nhà có cháy, việc ĐẦU TIÊN nên làm là?', ['Hô hoán báo động, gọi 114 và tìm cách thoát hiểm', 'Mở cửa sổ thật to', 'Chạy đi tìm đồ quý giá', 'Trốn vào tủ quần áo'], 0, 'Báo động và thoát hiểm là việc đầu tiên.'),
    Q('Khi có khói trong nhà, em nên?', ['Cúi thấp người, dùng khăn ướt che mũi miệng, men theo tường thoát ra', 'Đứng thẳng chạy ra', 'Hít thở sâu', 'Nhảy qua cửa sổ tầng cao'], 0, 'Cúi thấp dưới khói và bịt mũi bằng khăn ướt.'),
    Q('Khi quần áo bốc cháy, em nên?', ['Dừng - Nằm xuống - Lăn để dập lửa', 'Chạy thật nhanh', 'Lấy nước nóng dội', 'Vẫy tay cho lửa to lên'], 0, 'Dừng - Nằm - Lăn là quy tắc dập lửa trên người.'),
    Q('Ý nào KHÔNG nên làm khi gặp hoả hoạn?', ['Dùng thang máy thoát hiểm', 'Đi cầu thang bộ', 'Báo người lớn và gọi 114', 'Dùng khăn ướt che mũi'], 0, 'Tuyệt đối không dùng thang máy khi cháy.'),
  ]),

  M(21, 'Ứng phó với bắt cóc và các tình huống nguy hiểm khác', [
    Q('Khi có người lạ rủ đi theo cho quà, em nên?', ['Từ chối dứt khoát, bỏ đi, báo người lớn', 'Nhận quà rồi đi theo', 'Đi cùng một đoạn xem sao', 'Cho người lạ địa chỉ nhà'], 0, 'Tuyệt đối không đi theo người lạ.'),
    Q('Khi bị người lạ kéo đi, em nên?', ['La to "Cứu! Đây không phải bố mẹ tôi!" và bỏ chạy về chỗ đông người', 'Im lặng đi theo cho yên', 'Đợi cơ hội rồi chạy', 'Khóc to'], 0, 'Hô to cảnh báo và chạy đến chỗ đông người.'),
    Q('Khi đi một mình ngoài đường tối, em nên?', ['Đi nơi có đèn sáng, đông người, mang điện thoại liên lạc gia đình', 'Đi đường tắt vắng', 'Nhận đi xe nhờ của người lạ', 'Bịt tai đeo headphone to'], 0, 'Đi đường sáng và giữ liên lạc gia đình.'),
    Q('Khi có người lạ nhắn tin trên mạng xin ảnh, địa chỉ, em nên?', ['Không cung cấp thông tin, chặn và báo người lớn', 'Cho địa chỉ để được kết bạn', 'Gửi ảnh để được khen', 'Hẹn gặp riêng'], 0, 'Không cung cấp thông tin cá nhân cho người lạ trên mạng.'),
    Q('Khi gặp sấm sét ngoài trời, em nên?', ['Tìm nơi trú trong nhà, tránh xa cây to và kim loại', 'Đứng dưới cây to để tránh mưa', 'Cầm ô kim loại', 'Đứng nơi trống trải'], 0, 'Trú trong nhà, tránh cây to và kim loại.'),
    Q('Số điện thoại CẤP CỨU y tế là?', ['115', '113', '114', '111'], 0, '115 là số cấp cứu y tế.'),
  ]),

  // ===== Chủ đề 8: Tiết kiệm (T22–24) =====
  M(22, 'Tiết kiệm là gì?', [
    Q('Tiết kiệm là?', ['Sử dụng hợp lí, đúng mức của cải, thời gian, sức lực của mình và người khác', 'Hà tiện, keo kiệt', 'Không tiêu xài gì cả', 'Chỉ dành cho người nghèo'], 0, 'Tiết kiệm khác với hà tiện: dùng hợp lí, đúng mức.'),
    Q('Tiết kiệm KHÔNG bao gồm?', ['Ki bo, không bao giờ chi tiền cho việc cần thiết', 'Tiết kiệm điện nước', 'Tiết kiệm thời gian', 'Tiết kiệm tiền'], 0, 'Ki bo và tiết kiệm là khác nhau.'),
    Q('Câu tục ngữ nào về tiết kiệm?', ['Tích tiểu thành đại', 'Đoàn kết là sức mạnh', 'Lá lành đùm lá rách', 'Học, học nữa, học mãi'], 0, '"Tích tiểu thành đại" nói về tiết kiệm.'),
    Q('Biểu hiện tiết kiệm điện?', ['Tắt đèn, quạt khi ra khỏi phòng', 'Bật điều hoà cả ngày dù không ai ở nhà', 'Mở tủ lạnh lâu', 'Để máy tính bật cả đêm'], 0, 'Tắt thiết bị khi không dùng là tiết kiệm điện.'),
    Q('Biểu hiện tiết kiệm nước?', ['Khoá vòi khi đánh răng, tận dụng nước rửa rau tưới cây', 'Để vòi nước chảy liên tục', 'Tắm thật lâu cho thoải mái', 'Xả nước bồn rửa cả ngày'], 0, 'Dùng nước có ý thức là tiết kiệm.'),
    Q('Tiết kiệm KHÁC hà tiện ở chỗ?', ['Tiết kiệm vẫn chi cho điều cần thiết, hà tiện thì không chi gì', 'Tiết kiệm là không tiêu', 'Hà tiện là tốt hơn tiết kiệm', 'Cả hai như nhau'], 0, 'Tiết kiệm là sử dụng hợp lí, hà tiện là cực đoan.'),
  ]),

  M(23, 'Tiết kiệm thời gian, tiền bạc', [
    Q('Tiết kiệm thời gian là?', ['Sử dụng thời gian hợp lí, không lãng phí vào việc vô ích', 'Làm nhiều việc cùng lúc', 'Không nghỉ ngơi', 'Học không ngừng'], 0, 'Dùng thời gian hợp lí là tiết kiệm thời gian.'),
    Q('Bạn nào TIẾT KIỆM thời gian?', ['Lan lập thời gian biểu và làm theo', 'Tú xem điện thoại 6 tiếng/ngày', 'Bình ngủ 12 tiếng/ngày', 'An la cà ngoài quán cả buổi'], 0, 'Lập kế hoạch và làm theo là tiết kiệm thời gian.'),
    Q('Em nhận được 200.000đ tiền tiêu vặt Tết. Em nên?', ['Lập kế hoạch chi tiêu, để dành phần để mua đồ học tập', 'Tiêu hết trong một ngày', 'Mua game không cần thiết', 'Cho hết bạn bè'], 0, 'Lập kế hoạch và tiết kiệm là cách dùng đúng.'),
    Q('Tiết kiệm tiền của gia đình là?', ['Không vòi vĩnh đồ không cần thiết, biết quý sức lao động của bố mẹ', 'Không xin tiền cả khi cần', 'Đòi mua mọi thứ', 'Lấy trộm tiền của bố mẹ'], 0, 'Không đòi đồ không cần là tiết kiệm tiền gia đình.'),
    Q('Hành vi nào LÃNG PHÍ?', ['Mua đồ chơi đắt tiền mà chỉ chơi 1 lần rồi vứt', 'Dùng lại sách giáo khoa cũ', 'Tận dụng giấy 2 mặt', 'Mang cơm hộp đi học'], 0, 'Mua đồ rồi vứt là lãng phí.'),
    Q('Để rèn tiết kiệm tiền, em nên?', ['Có ống tiết kiệm, ghi chép chi tiêu, phân biệt cần và muốn', 'Vay nợ bạn bè', 'Tiêu xài thoải mái', 'Đợi lớn mới quan tâm'], 0, 'Ghi chép và phân biệt cần/muốn là cách tiết kiệm.'),
  ]),

  M(24, 'Tiết kiệm năng lượng và tài nguyên', [
    Q('Tiết kiệm năng lượng có lợi cho?', ['Gia đình, đất nước và môi trường', 'Chỉ riêng gia đình', 'Chỉ riêng đất nước', 'Không có lợi gì'], 0, 'Tiết kiệm năng lượng có lợi cho cả ba.'),
    Q('Hành vi nào tiết kiệm xăng?', ['Tắt máy khi dừng đèn đỏ lâu, không tăng ga vô ích', 'Nẹt pô liên tục', 'Đèo nhiều người quá tải', 'Đua xe trên đường'], 0, 'Tắt máy khi dừng lâu là tiết kiệm xăng.'),
    Q('Tiết kiệm tài nguyên đất là?', ['Không xả rác bừa bãi, không phá rừng', 'Đốt rừng làm rẫy', 'Lấp ao hồ', 'Xả rác xuống sông'], 0, 'Bảo vệ đất, rừng là tiết kiệm tài nguyên.'),
    Q('Hành vi nào LÃNG PHÍ tài nguyên?', ['Dùng cốc giấy một lần dù có sẵn cốc thuỷ tinh', 'Mang chai nước cá nhân', 'Phân loại rác tái chế', 'Đi xe đạp đến trường'], 0, 'Dùng đồ một lần khi không cần là lãng phí.'),
    Q('Tiết kiệm sách vở là?', ['Giữ sách sạch, tặng lại em khoá sau khi không dùng', 'Vẽ bậy lên sách', 'Vứt sách cũ', 'Xé sách cũ'], 0, 'Giữ và trao lại sách là tiết kiệm và yêu thương.'),
    Q('Ý nghĩa của tiết kiệm?', ['Giúp gia đình ấm no, đất nước phát triển bền vững', 'Khiến mình nghèo đi', 'Khiến mình kém vui', 'Không có ý nghĩa'], 0, 'Tiết kiệm góp phần phát triển bền vững.'),
  ]),

  // ===== Chủ đề 9: Công dân nước CHXHCN Việt Nam (T25–27) =====
  M(25, 'Công dân nước CHXHCN Việt Nam', [
    Q('Công dân là?', ['Người dân của một nước, có các quyền và nghĩa vụ do pháp luật quy định', 'Người sống lâu năm ở một nước', 'Người có tiền', 'Người trưởng thành'], 0, 'Công dân gắn với quốc tịch và quyền nghĩa vụ pháp lí.'),
    Q('Quốc tịch là?', ['Căn cứ xác định công dân của một nước', 'Nơi sinh', 'Tên gia đình', 'Tôn giáo'], 0, 'Quốc tịch xác định mối quan hệ công dân với nhà nước.'),
    Q('Người có quốc tịch Việt Nam là?', ['Công dân nước CHXHCN Việt Nam', 'Công dân nước khác', 'Người không quốc tịch', 'Người tị nạn'], 0, 'Có quốc tịch VN là công dân VN.'),
    Q('Ai là công dân Việt Nam?', ['Bé Lan sinh ra tại VN có bố mẹ là người Việt', 'Người nước ngoài đến du lịch', 'Người chỉ tạm trú học tập', 'Người sinh ở VN nhưng từ bỏ quốc tịch VN'], 0, 'Sinh tại VN, bố mẹ Việt là công dân VN.'),
    Q('Căn cước công dân là?', ['Giấy tờ pháp lí xác nhận thông tin và quốc tịch của công dân VN', 'Giấy phép lái xe', 'Hộ chiếu nước ngoài', 'Sổ tiết kiệm'], 0, 'CCCD là giấy tờ tuỳ thân quan trọng của công dân VN.'),
    Q('Theo Luật Quốc tịch VN, trẻ em sinh ra trên lãnh thổ VN có bố và mẹ đều là công dân VN thì?', ['Có quốc tịch Việt Nam', 'Phải đăng ký mới có', 'Phải đủ 18 tuổi mới có', 'Không có quốc tịch'], 0, 'Bố mẹ là công dân VN thì con có quốc tịch VN.'),
  ]),

  M(26, 'Căn cứ xác định công dân Việt Nam', [
    Q('Theo Luật Quốc tịch VN, trẻ em sinh ra trên lãnh thổ VN mà bố mẹ là người không quốc tịch, có nơi thường trú tại VN thì?', ['Có quốc tịch Việt Nam', 'Không có quốc tịch', 'Phải làm đơn xin', 'Có quốc tịch nước khác'], 0, 'Trường hợp này con có quốc tịch VN theo luật.'),
    Q('Bạn Nam có bố là người VN, mẹ là người Hàn Quốc, sinh tại VN. Bạn Nam?', ['Có thể có quốc tịch VN theo thoả thuận của cha mẹ', 'Chắc chắn không có quốc tịch VN', 'Phải đợi 18 tuổi', 'Tự động có 2 quốc tịch'], 0, 'Trường hợp bố/mẹ khác quốc tịch, cha mẹ thoả thuận.'),
    Q('Người Việt Nam định cư ở nước ngoài có còn là công dân Việt Nam không?', ['Vẫn là công dân VN nếu chưa từ bỏ quốc tịch VN', 'Không còn', 'Tuỳ ý họ', 'Chỉ khi về VN'], 0, 'Chừng nào chưa từ bỏ quốc tịch thì vẫn là công dân VN.'),
    Q('Em hiểu ý nghĩa của việc trở thành công dân VN?', ['Tự hào về Tổ quốc, có quyền và trách nhiệm với đất nước', 'Không có gì đặc biệt', 'Chỉ có quyền, không có nghĩa vụ', 'Chỉ có nghĩa vụ, không có quyền'], 0, 'Là công dân vừa có quyền vừa có trách nhiệm.'),
    Q('Trẻ sơ sinh bị bỏ rơi tại VN, không rõ cha mẹ thì?', ['Có quốc tịch Việt Nam', 'Không có quốc tịch', 'Phải đợi xác minh cha mẹ', 'Có quốc tịch nước khác'], 0, 'Pháp luật bảo đảm trẻ không quốc tịch trên lãnh thổ VN có quốc tịch VN.'),
    Q('Em làm gì để xứng đáng là công dân Việt Nam?', ['Học tập, rèn luyện, tôn trọng pháp luật, yêu Tổ quốc', 'Đợi lớn mới làm gì', 'Coi thường người nước ngoài', 'Chê đất nước mình'], 0, 'Học, rèn luyện và yêu nước là trách nhiệm công dân.'),
  ]),

  M(27, 'Quyền công dân cơ bản', [
    Q('Trẻ em là công dân Việt Nam có quyền nào?', ['Quyền được học tập', 'Quyền bầu cử', 'Quyền ứng cử Quốc hội', 'Quyền lái xe ô tô'], 0, 'Trẻ em có quyền học tập theo luật.'),
    Q('Mọi công dân Việt Nam đều có quyền?', ['Bình đẳng trước pháp luật', 'Trên luật pháp', 'Không bị xử lí khi vi phạm', 'Tự do làm điều mình thích bất chấp luật'], 0, 'Mọi công dân bình đẳng trước pháp luật.'),
    Q('Quyền nào KHÔNG phải quyền công dân?', ['Quyền vi phạm pháp luật', 'Quyền học tập', 'Quyền tự do tín ngưỡng', 'Quyền bảo vệ sức khoẻ'], 0, 'Không có quyền nào cho phép vi phạm pháp luật.'),
    Q('Bạn Hoa người dân tộc thiểu số. Bạn Hoa có?', ['Quyền bình đẳng như mọi công dân Việt Nam', 'Ít quyền hơn người Kinh', 'Không có quyền học', 'Không có quốc tịch VN'], 0, 'Mọi dân tộc đều bình đẳng trước pháp luật.'),
    Q('Quyền được pháp luật bảo hộ về tính mạng, sức khoẻ nghĩa là?', ['Không ai được xâm phạm tính mạng, sức khoẻ của công dân', 'Công dân có thể làm mọi việc với cơ thể mình', 'Pháp luật chỉ bảo vệ người giàu', 'Chỉ bảo vệ người lớn'], 0, 'Mọi công dân được pháp luật bảo hộ tính mạng, sức khoẻ.'),
    Q('Quyền tự do ngôn luận có nghĩa là?', ['Công dân được bày tỏ ý kiến theo quy định pháp luật', 'Nói gì cũng được, kể cả vu khống', 'Đăng tin sai sự thật trên mạng', 'Xúc phạm người khác tuỳ thích'], 0, 'Tự do ngôn luận phải trong khuôn khổ pháp luật.'),
  ]),

  // ===== Chủ đề 10: Quyền và nghĩa vụ cơ bản của công dân (T28–30) =====
  M(28, 'Quyền cơ bản của công dân', [
    Q('Quyền cơ bản của công dân được quy định trong?', ['Hiến pháp nước CHXHCN Việt Nam', 'Truyện cổ tích', 'Sách giáo khoa Toán', 'Báo điện tử'], 0, 'Hiến pháp là văn bản quy định quyền và nghĩa vụ cơ bản.'),
    Q('Đâu là quyền cơ bản của công dân?', ['Quyền học tập, lao động, tự do ngôn luận', 'Quyền vi phạm pháp luật', 'Quyền không đóng thuế', 'Quyền trốn nghĩa vụ quân sự'], 0, 'Học tập, lao động, ngôn luận là quyền cơ bản.'),
    Q('Công dân có quyền bất khả xâm phạm về thân thể nghĩa là?', ['Không ai được bắt, giam giữ trái pháp luật', 'Có thể làm gì cũng được', 'Không bị xử lí khi phạm tội', 'Không phải đi học'], 0, 'Không ai được tự ý bắt giữ công dân.'),
    Q('Quyền được bảo vệ về danh dự, nhân phẩm nghĩa là?', ['Không ai được vu khống, lăng mạ, xúc phạm công dân', 'Có thể vu khống người khác', 'Có thể nói xấu tự do', 'Có thể đăng tin giả'], 0, 'Pháp luật bảo vệ danh dự, nhân phẩm công dân.'),
    Q('Một người tung tin giả về em trên mạng xã hội. Em có quyền?', ['Yêu cầu gỡ tin, báo cơ quan có thẩm quyền xử lí', 'Tự ý đánh người đó', 'Cũng tung tin giả lại', 'Im lặng chịu đựng'], 0, 'Báo cơ quan có thẩm quyền là cách bảo vệ quyền của mình.'),
    Q('Quyền nào sau đây trẻ em CHƯA được hưởng?', ['Quyền ứng cử đại biểu Quốc hội', 'Quyền học tập', 'Quyền bảo vệ sức khoẻ', 'Quyền vui chơi'], 0, 'Quyền ứng cử ĐBQH chỉ dành cho công dân đủ tuổi luật định.'),
  ]),

  M(29, 'Nghĩa vụ cơ bản của công dân', [
    Q('Nghĩa vụ cơ bản của công dân Việt Nam là?', ['Tuân theo Hiến pháp và pháp luật, bảo vệ Tổ quốc', 'Làm theo ý mình', 'Chỉ hưởng quyền lợi', 'Trốn tránh nghĩa vụ'], 0, 'Tuân thủ pháp luật và bảo vệ Tổ quốc là nghĩa vụ cơ bản.'),
    Q('Nghĩa vụ quan trọng nào của công dân?', ['Bảo vệ Tổ quốc', 'Đi du lịch nước ngoài', 'Mua sắm hàng hiệu', 'Sống xa hoa'], 0, 'Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng.'),
    Q('Nghĩa vụ lao động và đóng thuế là?', ['Nghĩa vụ của công dân theo quy định pháp luật', 'Không bắt buộc', 'Chỉ với người giàu', 'Tự nguyện hoàn toàn'], 0, 'Lao động và đóng thuế là nghĩa vụ pháp lí.'),
    Q('Bạn Nam trốn nghĩa vụ quân sự. Hành vi này?', ['Vi phạm pháp luật và sẽ bị xử lí', 'Đáng khen', 'Bình thường', 'Là quyền của Nam'], 0, 'Trốn nghĩa vụ quân sự là vi phạm pháp luật.'),
    Q('Học sinh có nghĩa vụ gì?', ['Học tập, tuân thủ nội quy và pháp luật', 'Đi học khi nào thích', 'Chỉ chơi không học', 'Tự ý nghỉ học'], 0, 'Học tập đầy đủ là nghĩa vụ của học sinh.'),
    Q('Quyền và nghĩa vụ của công dân có mối quan hệ?', ['Gắn bó chặt chẽ, không thể tách rời', 'Tách rời nhau', 'Chỉ có quyền không có nghĩa vụ', 'Chỉ có nghĩa vụ không có quyền'], 0, 'Quyền đi liền nghĩa vụ.'),
  ]),

  M(30, 'Thực hiện quyền và nghĩa vụ công dân', [
    Q('Để thực hiện tốt quyền và nghĩa vụ, công dân cần?', ['Hiểu biết pháp luật và tự giác chấp hành', 'Chỉ làm khi bị bắt buộc', 'Tránh né luật', 'Phớt lờ luật'], 0, 'Hiểu luật và chấp hành tự giác là tốt nhất.'),
    Q('Bạn Hà tham gia bảo vệ môi trường. Việc làm này?', ['Thực hiện nghĩa vụ công dân trong bảo vệ môi trường', 'Vô ích', 'Không liên quan đến công dân', 'Chỉ là việc người lớn'], 0, 'Bảo vệ môi trường là nghĩa vụ của mọi công dân.'),
    Q('Em phát hiện một vụ tham nhũng nhỏ trong khu phố. Em nên?', ['Báo cho người lớn hoặc cơ quan có thẩm quyền', 'Đăng lên mạng xã hội ngay', 'Đe doạ người tham nhũng', 'Im lặng vì sợ liên lụy'], 0, 'Báo cơ quan có thẩm quyền là đúng cách.'),
    Q('Học sinh thực hiện quyền học tập bằng cách?', ['Đến trường đều đặn, chăm chỉ học và rèn luyện', 'Bỏ học khi không thích', 'Đi học cho có', 'Đợi cha mẹ ép mới đi'], 0, 'Học chăm chỉ là cách thực hiện quyền học tập.'),
    Q('Em được tự do tín ngưỡng nghĩa là?', ['Tự chọn theo hoặc không theo tôn giáo, tôn trọng tín ngưỡng của người khác', 'Bắt người khác theo tôn giáo của mình', 'Chê bai tôn giáo của người khác', 'Cấm người khác đi lễ'], 0, 'Tự do và tôn trọng tín ngưỡng của người khác.'),
    Q('Trách nhiệm của HS trong thực hiện quyền và nghĩa vụ công dân?', ['Học tập, rèn luyện đạo đức, chấp hành pháp luật', 'Đợi 18 tuổi mới chấp hành luật', 'Chỉ học không cần biết luật', 'Phớt lờ nội quy'], 0, 'Học sinh cần học và rèn luyện ngay từ bây giờ.'),
  ]),

  // ===== Chủ đề 11: Quyền trẻ em (T31–33) =====
  M(31, 'Quyền trẻ em là gì?', [
    Q('Theo Công ước quốc tế và Luật Trẻ em VN, trẻ em là người?', ['Dưới 16 tuổi', 'Dưới 12 tuổi', 'Dưới 18 tuổi', 'Dưới 20 tuổi'], 0, 'Theo Luật Trẻ em VN 2016, trẻ em là dưới 16 tuổi.'),
    Q('Trẻ em có những nhóm quyền cơ bản nào?', ['Sống còn, được bảo vệ, được phát triển, được tham gia', 'Chỉ quyền học tập', 'Chỉ quyền vui chơi', 'Không có quyền gì'], 0, '4 nhóm quyền cơ bản của trẻ em.'),
    Q('Quyền sống còn của trẻ em bao gồm?', ['Quyền được khai sinh, có quốc tịch, được chăm sóc sức khoẻ', 'Quyền học đại học', 'Quyền lái xe', 'Quyền bầu cử'], 0, 'Sống còn gồm khai sinh, sức khoẻ, dinh dưỡng.'),
    Q('Quyền được bảo vệ của trẻ em là?', ['Không bị xâm hại, bạo lực, bóc lột, bỏ rơi', 'Quyền được giàu có', 'Quyền không phải học', 'Quyền không phải làm gì'], 0, 'Bảo vệ trẻ khỏi xâm hại, bạo lực, bóc lột.'),
    Q('Quyền được phát triển bao gồm?', ['Học tập, vui chơi, văn hoá, nghệ thuật, thể thao', 'Đi làm kiếm tiền', 'Lái xe', 'Đăng kí kết hôn'], 0, 'Phát triển toàn diện về học, vui chơi, văn hoá.'),
    Q('Quyền được tham gia của trẻ em là?', ['Được bày tỏ ý kiến về những vấn đề liên quan đến trẻ em', 'Được tham gia bầu cử', 'Được ứng cử đại biểu', 'Được lái xe'], 0, 'Trẻ em có quyền bày tỏ ý kiến của mình.'),
  ]),

  M(32, 'Trách nhiệm trong việc bảo đảm quyền trẻ em', [
    Q('Trách nhiệm bảo đảm quyền trẻ em thuộc về?', ['Gia đình, nhà trường, xã hội và Nhà nước', 'Chỉ Nhà nước', 'Chỉ gia đình', 'Chỉ nhà trường'], 0, 'Là trách nhiệm chung của gia đình, nhà trường, xã hội, Nhà nước.'),
    Q('Bố mẹ ép em nghỉ học để đi làm. Hành vi này?', ['Vi phạm quyền học tập của trẻ em', 'Đúng vì em phải kiếm tiền', 'Bình thường', 'Không liên quan đến luật'], 0, 'Ép trẻ nghỉ học là vi phạm quyền trẻ em.'),
    Q('Hành vi nào XÂM PHẠM quyền trẻ em?', ['Đánh đập, ngược đãi, bỏ rơi trẻ em', 'Cho trẻ đi học', 'Chăm sóc dinh dưỡng', 'Đăng kí khai sinh cho trẻ'], 0, 'Bạo lực với trẻ là xâm phạm quyền trẻ em.'),
    Q('Khi bị bạo hành gia đình, em nên?', ['Báo cho thầy cô, người thân tin cậy hoặc gọi tổng đài 111', 'Im lặng chịu đựng', 'Bỏ nhà đi bụi', 'Đánh lại'], 0, '111 là tổng đài quốc gia bảo vệ trẻ em.'),
    Q('Tổng đài bảo vệ trẻ em quốc gia là?', ['111', '113', '114', '115'], 0, '111 là tổng đài bảo vệ trẻ em.'),
    Q('Trẻ em bị xâm hại tình dục là?', ['Vi phạm nghiêm trọng quyền trẻ em, phải tố giác ngay', 'Chuyện riêng của gia đình', 'Việc nhỏ', 'Cần giấu kín'], 0, 'Xâm hại tình dục là tội phạm nghiêm trọng phải tố giác.'),
  ]),

  M(33, 'Bổn phận của trẻ em', [
    Q('Trẻ em có bổn phận với gia đình là?', ['Yêu quý, kính trọng, hiếu thảo với ông bà cha mẹ', 'Chỉ đòi hỏi', 'Coi thường người lớn', 'Bỏ mặc gia đình'], 0, 'Hiếu thảo với ông bà cha mẹ là bổn phận của trẻ em.'),
    Q('Trẻ em có bổn phận với nhà trường là?', ['Học tập, rèn luyện, tôn trọng thầy cô, đoàn kết bạn bè', 'Bỏ học', 'Cãi thầy cô', 'Đánh bạn'], 0, 'Học tập và rèn luyện là bổn phận trong nhà trường.'),
    Q('Trẻ em có bổn phận với cộng đồng?', ['Tôn trọng quy tắc nơi công cộng, giữ gìn môi trường', 'Phá hoại tài sản công', 'Xả rác bừa bãi', 'Gây gổ với mọi người'], 0, 'Tôn trọng cộng đồng và môi trường.'),
    Q('Trẻ em có bổn phận với bản thân là?', ['Rèn luyện sức khoẻ, đạo đức, học tập, tránh xa tệ nạn', 'Sa đà tệ nạn', 'Bỏ bê bản thân', 'Đua đòi xa xỉ'], 0, 'Tự rèn luyện sức khoẻ, đạo đức là bổn phận với bản thân.'),
    Q('Quyền và bổn phận của trẻ em?', ['Đi đôi với nhau, không thể tách rời', 'Chỉ có quyền', 'Chỉ có bổn phận', 'Không liên quan'], 0, 'Quyền và bổn phận luôn đi đôi.'),
    Q('Hành vi nào KHÔNG đúng bổn phận của trẻ em?', ['Trốn học chơi game', 'Giúp bố mẹ việc nhà', 'Học bài đầy đủ', 'Tham gia hoạt động lớp'], 0, 'Trốn học chơi game vi phạm bổn phận học sinh.'),
  ]),

  // ===== Chủ đề 12: Thực hiện quyền trẻ em (T34–35) =====
  M(34, 'Thực hiện quyền trẻ em trong gia đình và nhà trường', [
    Q('Gia đình thực hiện quyền trẻ em bằng cách?', ['Yêu thương, chăm sóc, cho con đi học, lắng nghe ý kiến của con', 'Đánh đập con khi không nghe lời', 'Ép con nghỉ học đi làm', 'Không quan tâm con'], 0, 'Gia đình phải bảo đảm quyền học tập, được lắng nghe của trẻ.'),
    Q('Nhà trường thực hiện quyền trẻ em bằng cách?', ['Bảo đảm môi trường an toàn, không bạo lực, có chất lượng giáo dục', 'Phạt nặng học sinh sai phạm', 'Để mặc bạo lực học đường', 'Phân biệt đối xử'], 0, 'Nhà trường phải tạo môi trường an toàn cho học sinh.'),
    Q('Khi bạn ở lớp bị bạo lực học đường, em nên?', ['Báo thầy cô, an ủi bạn và cùng các bạn bảo vệ bạn', 'Quay clip đăng mạng câu like', 'Bỏ qua không quan tâm', 'Cùng tham gia đánh bạn'], 0, 'Báo thầy cô và bảo vệ bạn là thực hiện quyền trẻ em.'),
    Q('Em được mời góp ý sửa đổi nội quy lớp. Em nên?', ['Tham gia, bày tỏ ý kiến của mình một cách văn minh', 'Im lặng vì ngại', 'Phản đối tất cả', 'Coi thường buổi họp'], 0, 'Bày tỏ ý kiến là thực hiện quyền tham gia của trẻ em.'),
    Q('Khi quyền lợi của em bị xâm phạm, em nên?', ['Tìm sự giúp đỡ từ người tin cậy, gọi 111 nếu nghiêm trọng', 'Im lặng chịu đựng', 'Tự ý trả thù', 'Bỏ nhà ra đi'], 0, 'Tìm sự trợ giúp hợp pháp là cách đúng.'),
    Q('Em chứng kiến em họ 5 tuổi bị bố mẹ bỏ mặc đói. Em nên?', ['Báo người lớn tin cậy hoặc tổng đài 111', 'Mặc kệ vì không phải con mình', 'Đăng mạng phê phán bố mẹ em đó', 'Đánh lại bố mẹ em đó'], 0, 'Báo người có trách nhiệm để bảo vệ trẻ em.'),
  ]),

  M(35, 'Thực hiện quyền trẻ em trong xã hội và bản thân', [
    Q('Xã hội thực hiện quyền trẻ em bằng cách?', ['Có chính sách bảo vệ, chăm sóc, giáo dục trẻ em, xử lí nghiêm hành vi xâm hại', 'Bỏ mặc trẻ em', 'Bóc lột lao động trẻ em', 'Cản trở việc học'], 0, 'Xã hội cần có chính sách bảo vệ và phát triển trẻ em.'),
    Q('Em có thể tự bảo vệ quyền của mình bằng cách?', ['Hiểu biết quyền của mình, kĩ năng tự bảo vệ, biết tìm trợ giúp', 'Đợi người khác bảo vệ', 'Sợ hãi không nói gì', 'Không cần biết quyền'], 0, 'Hiểu quyền và kĩ năng tự bảo vệ là rất quan trọng.'),
    Q('Khi bị người lạ tiếp cận trên mạng đòi gặp riêng, em nên?', ['Từ chối, chặn liên hệ và báo người lớn ngay', 'Hẹn gặp xem sao', 'Cho địa chỉ nhà', 'Bí mật đi gặp một mình'], 0, 'Bảo vệ bản thân khỏi nguy cơ xâm hại trên mạng.'),
    Q('Em được tham gia ý kiến trong gia đình về việc chuyển trường. Em nên?', ['Bày tỏ ý kiến thật của mình và lắng nghe bố mẹ', 'Cãi nhau với bố mẹ', 'Im lặng dù không muốn', 'Bỏ nhà phản đối'], 0, 'Bày tỏ ý kiến văn minh là thực hiện quyền tham gia.'),
    Q('Bổn phận của em khi thực hiện quyền của mình là?', ['Tôn trọng quyền của người khác', 'Lấn át quyền của người khác', 'Chỉ nghĩ đến mình', 'Không cần quan tâm'], 0, 'Quyền của mình không xâm phạm quyền người khác.'),
    Q('Học sinh có thể tham gia thực hiện quyền trẻ em qua?', ['Hoạt động Đội, sinh hoạt lớp, tuyên truyền bảo vệ trẻ em', 'Bỏ mặc bạn bè', 'Không tham gia gì', 'Chỉ học không quan tâm xã hội'], 0, 'Tham gia hoạt động tập thể là cách thực hiện quyền và bổn phận.'),
  ]),

  // ===== T36: Ôn tập HK2 =====
  M(36, 'Ôn tập học kì 2', [
    Q('Khi gặp tình huống nguy hiểm, NGUYÊN TẮC đầu tiên là?', ['Bình tĩnh, không hoảng loạn', 'Hét lớn', 'Bỏ chạy lung tung', 'Đứng yên'], 0, 'Bình tĩnh giúp ra quyết định đúng.'),
    Q('Số tổng đài bảo vệ trẻ em là?', ['111', '113', '114', '115'], 0, '111 là tổng đài bảo vệ trẻ em.'),
    Q('Tiết kiệm KHÁC hà tiện ở chỗ?', ['Vẫn chi cho việc cần thiết, dùng hợp lí', 'Không tiêu gì cả', 'Đều như nhau', 'Hà tiện là tốt hơn'], 0, 'Tiết kiệm là sử dụng hợp lí.'),
    Q('Công dân Việt Nam là người?', ['Có quốc tịch Việt Nam', 'Sinh ở Việt Nam nhưng có quốc tịch khác', 'Du lịch tại Việt Nam', 'Không quốc tịch'], 0, 'Có quốc tịch VN là công dân VN.'),
    Q('Quyền và nghĩa vụ cơ bản của công dân được quy định trong?', ['Hiến pháp', 'Báo điện tử', 'Sách giáo khoa Toán', 'Truyện tranh'], 0, 'Hiến pháp là văn bản gốc.'),
    Q('Theo Luật Trẻ em VN, trẻ em là người?', ['Dưới 16 tuổi', 'Dưới 14 tuổi', 'Dưới 18 tuổi', 'Dưới 12 tuổi'], 0, 'Luật Trẻ em VN 2016: dưới 16 tuổi.'),
    Q('Khi bị xâm hại, hành vi đúng nhất là?', ['Tìm sự giúp đỡ từ người tin cậy hoặc gọi 111', 'Im lặng chịu đựng', 'Bỏ nhà đi', 'Tự trả thù'], 0, 'Tìm sự giúp đỡ hợp pháp là đúng nhất.'),
    Q('Trẻ em vừa có quyền vừa có?', ['Bổn phận với bản thân, gia đình, nhà trường, xã hội', 'Đặc quyền tuyệt đối', 'Quyền vi phạm luật', 'Quyền không cần học'], 0, 'Quyền và bổn phận luôn đi đôi.'),
  ]),
];

export const S6GDCD_SCENARIOS = indexBy(S6GDCD_WEEKS);
