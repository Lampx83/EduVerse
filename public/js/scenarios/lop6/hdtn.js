// ============================================================
// Lớp 6 · HOẠT ĐỘNG TRẢI NGHIỆM — HƯỚNG NGHIỆP (HĐTN-HN) — 36 tuần
// Bám CT GDPT 2018 · 3 tiết/tuần · HK1: 1–18 · HK2: 19–36.
// 4 mạch: Bản thân → Xã hội → Tự nhiên → Hướng nghiệp.
// ID prefix: "S6HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6HDTN', 'hdtn', n, title, qs, opts);

export const S6HDTN_WEEKS = [
  // ──────────────── HK1 — BẢN THÂN · NHÀ TRƯỜNG · XÃ HỘI ────────────────
  M(1, 'Trường THCS — môi trường học tập mới', [
    Q('Điểm khác biệt rõ nhất giữa Tiểu học và THCS là gì?', [
      'Mỗi môn học do một giáo viên khác nhau phụ trách',
      'Học sinh không cần làm bài tập về nhà',
      'Không có thời khoá biểu',
      'Không có giờ chào cờ',
    ], 0, 'Ở THCS mỗi môn có một giáo viên riêng, khác với Tiểu học chủ yếu một cô giáo dạy nhiều môn.'),
    Q('Khi mới vào lớp 6, cảm xúc lo lắng vì xa bạn cũ là điều?', [
      'Bất thường, cần đi khám ngay',
      'Bình thường, ai cũng có thể gặp khi thay đổi môi trường',
      'Đáng xấu hổ, không nên kể với ai',
      'Biểu hiện của tính nhút nhát kéo dài',
    ], 1, 'Lo lắng khi thay đổi môi trường là cảm xúc tự nhiên, sẽ vơi dần khi em làm quen.'),
    Q('Để nhanh chóng quen với trường mới, em NÊN làm gì?', [
      'Chỉ ngồi yên trong lớp, không nói chuyện với ai',
      'Chủ động làm quen với bạn mới và hỏi thầy cô khi chưa rõ',
      'Tránh tham gia các hoạt động tập thể',
      'Đợi bố mẹ giải quyết mọi vấn đề ở trường',
    ], 1, 'Chủ động kết nối giúp em hòa nhập nhanh hơn.'),
    Q('Khi không tìm được phòng học của mình, em nên?', [
      'Khóc ầm lên giữa sân trường',
      'Bỏ về nhà',
      'Hỏi thầy cô, bảo vệ hoặc anh chị lớp trên một cách lễ phép',
      'Lén vào đại một phòng nào đó ngồi',
    ], 2, 'Hỏi lễ phép là cách giải quyết tình huống văn minh.'),
    Q('Câu nào sau đây thể hiện thái độ ĐÚNG với môi trường THCS?', [
      'Mình lớn rồi, không cần học nội quy',
      'Mình sẽ tìm hiểu nội quy và cố gắng thực hiện',
      'Nội quy là chuyện của thầy cô',
      'Vi phạm nội quy mới sành điệu',
    ], 1, 'Tìm hiểu và tuân thủ nội quy giúp em sống hòa hợp ở môi trường mới.'),
    Q('Việc cần làm trong tuần đầu tiên ở trường mới là?', [
      'Ghi nhớ tên thầy cô, bạn lớp và sơ đồ phòng học',
      'Đổi tên cho thật ngầu',
      'Tranh giành chỗ ngồi đẹp nhất',
      'Không cần mang sách vở',
    ], 0, 'Làm quen với con người và không gian là bước đầu hòa nhập.'),
  ]),

  M(2, 'Truyền thống nhà trường', [
    Q('Truyền thống nhà trường là gì?', [
      'Những món ăn trong căng-tin',
      'Những giá trị, thành tích, nét đẹp được hình thành và gìn giữ qua nhiều thế hệ',
      'Tên của hiệu trưởng hiện tại',
      'Số điện thoại của trường',
    ], 1, 'Truyền thống là giá trị tích lũy qua thời gian, được nhiều thế hệ vun đắp.'),
    Q('Việc nào KHÔNG góp phần phát huy truyền thống nhà trường?', [
      'Học tập chăm chỉ, đạt thành tích tốt',
      'Tham gia các phong trào của trường',
      'Vẽ bậy lên tường, viết tên lên bàn',
      'Tôn trọng thầy cô và bạn bè',
    ], 2, 'Phá hoại tài sản là hành vi đi ngược truyền thống.'),
    Q('Khi nghe giới thiệu về truyền thống trường, em nên?', [
      'Chăm chú lắng nghe và ghi nhớ',
      'Nói chuyện riêng',
      'Bấm điện thoại',
      'Ngủ gục',
    ], 0, 'Lắng nghe thể hiện sự trân trọng.'),
    Q('Hành động nào thể hiện niềm tự hào về trường mình?', [
      'Chê bai trường mình trước người lạ',
      'Mặc đồng phục chỉnh tề, giữ gìn cảnh quan trường',
      'Bỏ học để đi chơi',
      'Nói xấu thầy cô trên mạng',
    ], 1, 'Mặc đồng phục chỉnh tề và giữ gìn cảnh quan thể hiện tình yêu trường lớp.'),
    Q('Bảng vàng thành tích của trường thường ghi nhận?', [
      'Học sinh đến trễ nhiều nhất',
      'Học sinh, giáo viên có thành tích xuất sắc',
      'Người ăn nhiều nhất căng-tin',
      'Phụ huynh đóng tiền sớm nhất',
    ], 1, 'Bảng vàng vinh danh những tấm gương xuất sắc.'),
    Q('Tham gia ngày hội truyền thống trường, em nên?', [
      'Mặc gọn gàng, có ý thức giữ trật tự và cổ vũ tích cực',
      'La hét, gây mất trật tự',
      'Xả rác bừa bãi',
      'Đi ngược chiều đoàn diễu hành',
    ], 0, 'Tham gia tích cực, văn minh là cách thể hiện sự gắn bó.'),
  ]),

  M(3, 'Thiết lập nội quy lớp học', [
    Q('Mục đích của nội quy lớp học là?', [
      'Giúp lớp học có trật tự, công bằng và hiệu quả',
      'Để giáo viên phạt học sinh',
      'Để học sinh không cần suy nghĩ',
      'Để in ra trang trí cho đẹp',
    ], 0, 'Nội quy là khung quy tắc giúp tập thể vận hành tốt.'),
    Q('Khi cả lớp cùng thảo luận xây dựng nội quy, ý kiến của em?', [
      'Không quan trọng vì em chỉ là một học sinh',
      'Có giá trị như mọi thành viên khác, nên mạnh dạn đóng góp',
      'Chỉ ý kiến lớp trưởng mới được tính',
      'Phải giống y hệt lớp trưởng',
    ], 1, 'Mọi thành viên đều có quyền và nên góp ý xây dựng nội quy chung.'),
    Q('Nội quy nào sau đây là HỢP LÍ?', [
      'Cấm học sinh nói chuyện trong giờ ra chơi',
      'Đi học đúng giờ, mặc đồng phục theo quy định',
      'Cấm uống nước trong cả ngày học',
      'Cấm cười trong giờ học thể dục',
    ], 1, 'Đi học đúng giờ và đồng phục là quy định hợp lí, các phương án khác bất hợp lí.'),
    Q('Khi một bạn vi phạm nội quy, em nên?', [
      'Mắng nhiếc, sỉ nhục bạn trước lớp',
      'Đánh bạn',
      'Nhắc nhở nhẹ nhàng hoặc báo giáo viên nếu nghiêm trọng',
      'Mặc kệ, không liên quan',
    ], 2, 'Nhắc nhở văn minh là cách giúp bạn nhận ra lỗi mà không tổn thương.'),
    Q('Bản thân em vi phạm nội quy thì nên?', [
      'Đổ lỗi cho bạn khác',
      'Nhận lỗi, xin lỗi và sửa chữa',
      'Trốn tránh, giấu đi',
      'Cãi lại thầy cô',
    ], 1, 'Nhận lỗi và sửa sai là cách trưởng thành.'),
    Q('Nội quy lớp cần được?', [
      'Cả lớp cùng cam kết và thực hiện nghiêm túc',
      'Chỉ áp dụng cho học sinh kém',
      'Chỉ áp dụng buổi sáng',
      'Áp dụng theo cảm hứng',
    ], 0, 'Nội quy phải được tất cả cùng thực hiện thì mới có hiệu lực.'),
  ]),

  M(4, 'Tự giới thiệu bản thân', [
    Q('Khi tự giới thiệu trước lớp mới, em nên bắt đầu bằng?', [
      'Lời chào lễ phép rồi giới thiệu họ tên',
      'Kể luôn về thành tích của mình',
      'Nói xấu trường cũ',
      'Im lặng để bạn đoán',
    ], 0, 'Lời chào trước, thông tin sau là cách giao tiếp lịch sự.'),
    Q('Thông tin nào KHÔNG nên chia sẻ khi tự giới thiệu trước cả lớp?', [
      'Sở thích đọc sách',
      'Tên trường tiểu học cũ',
      'Số tài khoản ngân hàng và mật khẩu của bố mẹ',
      'Môn học em yêu thích',
    ], 2, 'Thông tin tài chính cá nhân/gia đình là riêng tư, tuyệt đối không chia sẻ.'),
    Q('Giọng nói khi tự giới thiệu nên?', [
      'Lí nhí cho khiêm tốn',
      'Hét thật to để gây chú ý',
      'Rõ ràng, vừa đủ nghe, tự tin',
      'Vừa nói vừa đùa cợt',
    ], 2, 'Rõ ràng và tự tin là tiêu chuẩn của giao tiếp tốt.'),
    Q('Khi giới thiệu sở thích, em nên chọn?', [
      'Sở thích lành mạnh: đọc sách, thể thao, vẽ tranh, làm thủ công',
      'Sở thích trêu chọc bạn bè',
      'Sở thích chơi game thâu đêm',
      'Sở thích ăn vạ',
    ], 0, 'Sở thích lành mạnh giúp em tạo ấn tượng tích cực.'),
    Q('Khi bạn khác tự giới thiệu, em nên?', [
      'Cười nhạo nếu bạn nói vấp',
      'Chăm chú lắng nghe, vỗ tay sau khi bạn nói xong',
      'Quay sang nói chuyện riêng',
      'Phê bình giọng nói của bạn',
    ], 1, 'Lắng nghe và cổ vũ là thái độ văn minh.'),
    Q('Ngoài lời nói, ngôn ngữ cơ thể nào hỗ trợ giới thiệu hiệu quả?', [
      'Khoanh tay, cau mày',
      'Tư thế thẳng, ánh mắt thân thiện, mỉm cười',
      'Cúi gằm mặt suốt buổi',
      'Đi đi lại lại liên tục',
    ], 1, 'Ngôn ngữ cơ thể tích cực giúp lời giới thiệu sinh động hơn.'),
  ]),

  M(5, 'Nhận diện điểm mạnh, điểm yếu của bản thân', [
    Q('Điểm mạnh của bản thân là?', [
      'Những việc người khác làm tốt hơn em',
      'Những phẩm chất, năng lực mà em làm tốt hoặc có thế mạnh',
      'Những điều em mơ ước nhưng chưa làm được',
      'Tài sản gia đình em sở hữu',
    ], 1, 'Điểm mạnh thuộc về bản thân em, là thứ em làm tốt.'),
    Q('Khi nhận ra một điểm yếu của mình, em nên?', [
      'Giấu kín và phủ nhận',
      'Thừa nhận và tìm cách khắc phục dần',
      'Đổ lỗi cho hoàn cảnh',
      'Bỏ học vì xấu hổ',
    ], 1, 'Thừa nhận là bước đầu để cải thiện.'),
    Q('Cách nào giúp em nhận diện điểm mạnh tốt nhất?', [
      'Đoán bừa',
      'Tự quan sát, nhờ thầy cô và bạn bè góp ý, thử nhiều hoạt động',
      'Hỏi thầy bói',
      'Chỉ tin vào lời chê bai',
    ], 1, 'Kết hợp tự quan sát và phản hồi từ người khác giúp đánh giá khách quan.'),
    Q('Bạn A hát hay nhưng tính toán chậm. Đây là?', [
      'Bạn A chỉ có khuyết điểm',
      'Bạn A có cả điểm mạnh (hát) lẫn điểm cần cải thiện (tính toán)',
      'Bạn A là người bất tài',
      'Bạn A không thể tiến bộ',
    ], 1, 'Mỗi người đều có mặt mạnh - mặt cần rèn luyện.'),
    Q('Khi bạn khoe điểm mạnh của bạn ấy, em nên?', [
      'Ganh ghét và nói xấu',
      'Khen ngợi chân thành và học hỏi',
      'Phá hoại thành tích của bạn',
      'Cho rằng bạn khoe khoang',
    ], 1, 'Học hỏi từ bạn giúp em tiến bộ.'),
    Q('Điểm yếu có thể thay đổi được không?', [
      'Không, sinh ra sao là vậy mãi mãi',
      'Có, nếu em kiên trì rèn luyện đúng phương pháp',
      'Chỉ thay đổi được khi giàu có',
      'Chỉ người lớn mới thay đổi được',
    ], 1, 'Năng lực có thể phát triển qua rèn luyện - đây là tư duy phát triển (growth mindset).'),
  ]),

  M(6, 'Quản lý cảm xúc bản thân', [
    Q('Khi tức giận với bạn, em nên làm gì TRƯỚC TIÊN?', [
      'Lao vào đánh bạn',
      'Hít thở sâu, đếm từ 1 đến 10 để bình tĩnh',
      'Đập phá đồ đạc',
      'Đăng bài chửi bạn trên mạng',
    ], 1, 'Hít thở sâu giúp giảm cơn nóng giận trước khi hành động.'),
    Q('Khi buồn vì điểm kém, cách nào KHÔNG nên?', [
      'Chia sẻ với bố mẹ, thầy cô',
      'Tìm bài để sửa lại',
      'Tự nhốt mình, không ăn uống cả ngày',
      'Lập kế hoạch học bù',
    ], 2, 'Tự cô lập và bỏ ăn gây hại sức khoẻ và tâm lí.'),
    Q('Cảm xúc tích cực nào em nên nuôi dưỡng?', [
      'Biết ơn, vui vẻ, hi vọng',
      'Đố kị, ghen ghét',
      'Hung hăng, tức tối',
      'Chán nản kéo dài',
    ], 0, 'Cảm xúc tích cực giúp em sống khoẻ mạnh và hạnh phúc.'),
    Q('Khi thấy bạn buồn, em nên?', [
      'Trêu chọc thêm cho bạn khóc',
      'Lắng nghe, an ủi, cùng bạn tìm cách giải quyết',
      'Đi báo cả lớp để mọi người cười',
      'Mặc kệ bạn',
    ], 1, 'Đồng cảm và hỗ trợ là cách nuôi dưỡng tình bạn.'),
    Q('Nhật kí cảm xúc giúp em?', [
      'Khoe với người khác',
      'Hiểu rõ hơn về cảm xúc của mình và nhận diện xu hướng cảm xúc',
      'Có cớ để nghỉ học',
      'Không có tác dụng gì',
    ], 1, 'Viết nhật kí giúp em tự nhận thức cảm xúc tốt hơn.'),
    Q('Khi cảm xúc quá nặng nề kéo dài, em nên?', [
      'Cố chịu một mình',
      'Tìm đến người lớn tin cậy hoặc thầy cô tư vấn tâm lí',
      'Bỏ học',
      'Đăng tin tiêu cực lên mạng xã hội',
    ], 1, 'Tìm sự hỗ trợ từ người lớn tin cậy là dấu hiệu trưởng thành, không phải yếu đuối.'),
  ]),

  M(7, 'Phương pháp học tập THCS hiệu quả', [
    Q('Phương pháp học tập ở THCS khác Tiểu học chủ yếu vì?', [
      'Không cần học nữa',
      'Có nhiều môn hơn, nội dung sâu hơn, đòi hỏi tự học nhiều hơn',
      'Chỉ học một môn duy nhất',
      'Không cần làm bài tập',
    ], 1, 'THCS đòi hỏi tự học và tổng hợp nhiều môn.'),
    Q('Khi nghe giảng trên lớp, kĩ năng quan trọng nhất là?', [
      'Chép nguyên si từng chữ thầy nói',
      'Nghe hiểu, ghi ý chính, đặt câu hỏi khi chưa rõ',
      'Im lặng và mơ mộng',
      'Ngủ lấy sức học buổi tối',
    ], 1, 'Nghe chủ động + ghi ý chính giúp hiểu bài lâu dài.'),
    Q('Cách ghi chép hiệu quả là?', [
      'Chép tất cả mọi thứ thầy nói',
      'Ghi ý chính, dùng sơ đồ, dấu mũi tên, màu sắc làm nổi bật',
      'Không ghi gì cả',
      'Chỉ ghi ngày tháng',
    ], 1, 'Ghi có hệ thống giúp ôn tập nhanh.'),
    Q('Học bài ở nhà nên?', [
      'Vừa học vừa xem TV, dùng điện thoại',
      'Có khung giờ cố định, không gian yên tĩnh, học theo chu kì có nghỉ ngắn',
      'Học liên tục 6 tiếng không nghỉ',
      'Chỉ học trước khi kiểm tra',
    ], 1, 'Học có nhịp + môi trường tập trung là phương pháp khoa học.'),
    Q('Khi không hiểu bài, cách hành xử ĐÚNG là?', [
      'Giả vờ đã hiểu',
      'Hỏi thầy cô, bạn bè hoặc tự tra cứu thêm',
      'Bỏ qua, không quan tâm',
      'Đổ lỗi cho thầy cô dạy khó',
    ], 1, 'Chủ động hỏi giúp lấp lỗ hổng kiến thức kịp thời.'),
    Q('Học nhóm hiệu quả KHI?', [
      'Cả nhóm chỉ nói chuyện phiếm',
      'Mỗi người chuẩn bị trước, cùng thảo luận, giải thích cho nhau',
      'Một bạn làm, cả nhóm chép',
      'Tổ chức ăn uống là chính',
    ], 1, 'Học nhóm phát huy hiệu quả khi có chuẩn bị và tương tác.'),
  ]),

  M(8, 'Lập kế hoạch học tập tuần', [
    Q('Bước đầu tiên khi lập kế hoạch học tập tuần là?', [
      'Đi mua giấy bút thật đẹp',
      'Liệt kê các môn, các bài tập, các kì kiểm tra trong tuần',
      'Xếp lịch chơi game trước',
      'Ngủ một giấc đã',
    ], 1, 'Phải biết mình cần làm gì trước khi sắp xếp thời gian.'),
    Q('Một kế hoạch tuần TỐT cần có?', [
      'Mục tiêu cụ thể, khung giờ rõ ràng, có thời gian nghỉ',
      'Lịch dày đặc từ 5 giờ sáng đến 12 giờ đêm',
      'Chỉ ghi mục tiêu mà không có thời gian',
      'Chép kế hoạch của bạn cùng bàn',
    ], 0, 'Kế hoạch cần thực tế, có cả thời gian học và nghỉ.'),
    Q('Khi không hoàn thành kế hoạch tuần, em nên?', [
      'Xé bỏ và bỏ luôn việc lập kế hoạch',
      'Xem lại nguyên nhân, điều chỉnh kế hoạch tuần sau',
      'Tự dằn vặt suốt cả tuần',
      'Đổ lỗi cho người khác',
    ], 1, 'Rút kinh nghiệm là cách kế hoạch ngày càng phù hợp.'),
    Q('Việc nào nên ưu tiên làm trước trong kế hoạch?', [
      'Bài tập đến hạn nộp sớm và kì kiểm tra sắp tới',
      'Lướt mạng xã hội',
      'Xem phim',
      'Đi chơi game tới khuya',
    ], 0, 'Ưu tiên việc quan trọng và khẩn cấp.'),
    Q('Cuối tuần, em nên dành thời gian để?', [
      'Tổng kết tuần qua và lên kế hoạch tuần mới',
      'Chỉ chơi cả ngày, không suy nghĩ gì',
      'Học liên tục 12 tiếng',
      'Quên hết bài vở',
    ], 0, 'Tổng kết + lên kế hoạch giúp duy trì nhịp học hiệu quả.'),
    Q('Kế hoạch học tập tuần nên?', [
      'Cố định bất biến, không bao giờ thay đổi',
      'Linh hoạt, có thể điều chỉnh khi có việc phát sinh',
      'Lập rồi cất đi không xem lại',
      'Để bố mẹ lập hộ hoàn toàn',
    ], 1, 'Linh hoạt giúp kế hoạch sát với thực tế cuộc sống.'),
  ]),

  M(9, 'Quản lý thời gian', [
    Q('Một ngày có 24 giờ, em nên dành thời gian học bao nhiêu là hợp lí cho học sinh lớp 6?', [
      'Học cả 24 giờ',
      'Khoảng 2–4 giờ tự học ngoài giờ lên lớp, có nghỉ ngơi xen kẽ',
      'Không học giờ nào',
      'Học 12 giờ liên tục không nghỉ',
    ], 1, '2–4 giờ tự học có nghỉ là phù hợp lứa tuổi.'),
    Q('Khái niệm "khẩn cấp - quan trọng" giúp em?', [
      'Tốn thời gian hơn',
      'Phân loại công việc để biết làm gì trước, gì sau',
      'Lấy lí do để trì hoãn',
      'Khó hiểu, không cần áp dụng',
    ], 1, 'Ma trận khẩn cấp - quan trọng giúp ưu tiên đúng việc.'),
    Q('"Sát giờ mới làm bài" thường dẫn đến?', [
      'Hiệu quả cao nhất',
      'Chất lượng kém, căng thẳng, dễ quên',
      'Tiết kiệm thời gian rất nhiều',
      'Được điểm tốt',
    ], 1, 'Thói quen trì hoãn gây hại cho kết quả học tập.'),
    Q('Thời gian dùng điện thoại/giải trí mỗi ngày nên?', [
      'Có giới hạn rõ ràng, không lấn vào giờ học và giờ ngủ',
      'Càng nhiều càng tốt',
      'Không cần giới hạn',
      'Chỉ giới hạn khi bố mẹ kiểm tra',
    ], 0, 'Giới hạn giải trí là chìa khóa quản lí thời gian.'),
    Q('"Multitasking" - làm nhiều việc cùng lúc khi học là?', [
      'Hiệu quả gấp đôi',
      'Thường giảm hiệu quả và chất lượng từng việc',
      'Cách học khoa học nhất',
      'Bắt buộc với học sinh THCS',
    ], 1, 'Não bộ tập trung tốt nhất với một việc tại một thời điểm.'),
    Q('Để không quên việc, công cụ nào hữu ích?', [
      'Sổ tay, lịch, danh sách việc cần làm (to-do list)',
      'Trí nhớ siêu phàm tự nhiên',
      'Nhờ bạn nhớ giúp',
      'Đoán mò',
    ], 0, 'Ghi lại giúp giảm gánh nặng cho trí nhớ.'),
  ]),

  M(10, 'Sắp xếp góc học tập tại nhà', [
    Q('Vị trí góc học tập lí tưởng?', [
      'Nơi yên tĩnh, đủ ánh sáng, ít người qua lại',
      'Giữa phòng khách đông người',
      'Trong nhà tắm',
      'Cạnh tivi đang bật',
    ], 0, 'Yên tĩnh + đủ sáng giúp tập trung.'),
    Q('Ánh sáng học bài tốt nhất là?', [
      'Ánh sáng tự nhiên ban ngày, ánh sáng đèn vàng dịu buổi tối',
      'Ánh đèn nhấp nháy nhiều màu',
      'Tối om, chỉ có ánh điện thoại',
      'Ánh đèn chớp nháy như sàn nhảy',
    ], 0, 'Ánh sáng phù hợp bảo vệ thị lực.'),
    Q('Tư thế ngồi học đúng là?', [
      'Lưng thẳng, chân chạm sàn, mắt cách sách 25-30cm',
      'Nằm ngửa trên giường',
      'Khom lưng sát vào sách',
      'Vắt chân lên bàn',
    ], 0, 'Tư thế đúng bảo vệ cột sống và mắt.'),
    Q('Trên bàn học nên CÓ thứ gì?', [
      'Sách vở đang học, bút, đèn bàn, đồng hồ',
      'Cả đống đồ chơi và đồ ăn vặt',
      'Tivi và máy chơi game',
      'Đống quần áo bẩn',
    ], 0, 'Để gọn các vật dụng học tập cần thiết.'),
    Q('Điện thoại khi đang học nên?', [
      'Cầm liên tục để vừa học vừa chat',
      'Để xa hoặc tắt thông báo trong giờ học',
      'Mở loa to nhất',
      'Để ngay trên trang sách',
    ], 1, 'Điện thoại là tác nhân gây mất tập trung lớn nhất.'),
    Q('Sau khi học xong, em nên?', [
      'Bừa bãi để mai làm',
      'Sắp xếp lại sách vở gọn gàng, chuẩn bị cho buổi học hôm sau',
      'Đập phá bàn học cho hả giận',
      'Bỏ đi luôn',
    ], 1, 'Sắp xếp lại tạo thói quen ngăn nắp và sẵn sàng cho ngày mới.'),
  ]),

  M(11, 'Quan hệ với gia đình — yêu thương, chia sẻ', [
    Q('Khi mẹ đi làm về mệt, em nên?', [
      'Đòi mẹ nấu ăn ngay lập tức',
      'Hỏi han, lấy nước cho mẹ, làm việc nhà giúp đỡ',
      'Bật nhạc to lên',
      'Tranh thủ xin tiền',
    ], 1, 'Quan tâm chia sẻ là cách thể hiện tình yêu với bố mẹ.'),
    Q('Khi bất đồng ý kiến với bố mẹ, em nên?', [
      'Cãi to và bỏ đi',
      'Bình tĩnh trình bày suy nghĩ, lắng nghe góc nhìn của bố mẹ',
      'Im lặng và giận dỗi cả tuần',
      'Đập đồ',
    ], 1, 'Đối thoại tôn trọng giúp giải quyết bất đồng.'),
    Q('Công việc nhà nào học sinh lớp 6 CÓ thể đảm nhiệm?', [
      'Quét nhà, rửa bát, gấp quần áo, tưới cây',
      'Không cần làm gì cả',
      'Tự lái xe đưa cả nhà đi chơi',
      'Đi làm kiếm tiền nuôi cả nhà',
    ], 0, 'Việc nhà phù hợp lứa tuổi là trách nhiệm của mỗi thành viên.'),
    Q('Khi em hoặc anh chị ốm, em nên?', [
      'Mặc kệ, không liên quan',
      'Hỏi han, giúp đỡ trong khả năng',
      'Trêu chọc cho thêm tủi thân',
      'Trốn đi chơi',
    ], 1, 'Quan tâm người thân khi ốm là tình cảm gia đình.'),
    Q('Ngày sinh nhật ông bà, em có thể?', [
      'Quên luôn',
      'Tự tay làm thiệp, gọi điện chúc mừng hoặc tặng món quà nhỏ',
      'Đòi tiền mừng tuổi',
      'Mặc kệ vì không phải sinh nhật mình',
    ], 1, 'Hành động nhỏ thể hiện tình yêu thương ông bà.'),
    Q('Bí mật của gia đình em nên?', [
      'Đăng tất cả lên mạng xã hội',
      'Tôn trọng và giữ kín, chỉ chia sẻ khi được phép',
      'Kể cho bạn bè để khoe',
      'Quay video tung lên TikTok',
    ], 1, 'Giữ riêng tư gia đình là nguyên tắc cơ bản.'),
  ]),

  M(12, 'Chăm sóc bản thân — ngủ, dinh dưỡng', [
    Q('Học sinh lớp 6 nên ngủ mỗi đêm bao lâu?', [
      '3-4 giờ là đủ',
      'Khoảng 9-10 giờ',
      'Cả ngày luôn',
      '1-2 giờ',
    ], 1, '9-10 giờ ngủ là khuyến nghị cho lứa tuổi này.'),
    Q('Bữa sáng có vai trò?', [
      'Không quan trọng, bỏ được',
      'Cung cấp năng lượng cho buổi học sáng, tăng tập trung',
      'Chỉ dành cho trẻ con',
      'Gây béo phì nên cần bỏ',
    ], 1, 'Bữa sáng là bữa quan trọng nhất với học sinh.'),
    Q('Thực phẩm nào KHÔNG nên ăn quá nhiều?', [
      'Rau xanh',
      'Trái cây',
      'Đồ chiên rán nhiều dầu mỡ, nước ngọt có ga',
      'Cá, thịt nạc',
    ], 2, 'Đồ chiên rán và nước ngọt gây hại sức khoẻ nếu dùng nhiều.'),
    Q('Uống nước mỗi ngày nên?', [
      'Càng ít càng tốt',
      'Khoảng 1.5-2 lít, chia đều cả ngày',
      'Chỉ uống khi rất khát',
      'Chỉ uống nước ngọt thay nước lọc',
    ], 1, '1.5-2 lít nước/ngày là khuyến nghị cho học sinh.'),
    Q('Vận động thể chất mỗi ngày khoảng?', [
      'Không cần vận động',
      'Ít nhất 60 phút mỗi ngày (đi bộ, chạy, thể thao)',
      'Chỉ vận động khi có giờ thể dục ở trường',
      '12 giờ liên tục',
    ], 1, '60 phút/ngày là khuyến nghị của WHO cho trẻ em.'),
    Q('Thức khuya dùng điện thoại trước khi ngủ ảnh hưởng?', [
      'Tăng chất lượng giấc ngủ',
      'Giảm chất lượng giấc ngủ, hại mắt, giảm tập trung hôm sau',
      'Không ảnh hưởng gì',
      'Giúp ngủ ngon hơn',
    ], 1, 'Ánh sáng xanh và kích thích từ điện thoại làm khó ngủ.'),
  ]),

  M(13, 'Phòng tránh bắt nạt học đường', [
    Q('Bắt nạt học đường KHÔNG bao gồm hành vi nào?', [
      'Đánh đập, chèn ép thể chất',
      'Nói xấu, cô lập, kì thị',
      'Bắt nạt trên mạng (cyberbullying)',
      'Cùng nhau học bài và giúp đỡ nhau',
    ], 3, 'Học cùng và giúp đỡ là hành vi tích cực, không phải bắt nạt.'),
    Q('Khi bị bắt nạt, em nên?', [
      'Chịu đựng một mình',
      'Báo ngay cho thầy cô, bố mẹ hoặc người lớn tin cậy',
      'Trả thù bằng bạo lực',
      'Bỏ học',
    ], 1, 'Nhờ người lớn can thiệp là cách an toàn nhất.'),
    Q('Khi chứng kiến bạn bị bắt nạt, em nên?', [
      'Đứng xem cho vui',
      'Quay video tung lên mạng',
      'Bênh vực bạn nếu an toàn, báo người lớn ngay',
      'Hùa theo kẻ bắt nạt',
    ], 2, 'Người chứng kiến có vai trò quan trọng trong ngăn chặn bắt nạt.'),
    Q('Đặc điểm chung của hành vi bắt nạt là?', [
      'Cố ý làm tổn thương người khác, lặp đi lặp lại, có sự chênh lệch sức mạnh',
      'Chỉ là trò đùa vô hại',
      'Cách thể hiện tình bạn',
      'Hoàn toàn ngẫu nhiên',
    ], 0, 'Định nghĩa bắt nạt gồm 3 yếu tố này.'),
    Q('Bắt nạt trên mạng (cyberbullying) gồm?', [
      'Đăng ảnh chế nhạo, nhắn tin đe dọa, lập nhóm tẩy chay',
      'Chia sẻ ảnh đẹp với bạn bè',
      'Bình luận tích cực',
      'Like bài đăng của bạn',
    ], 0, 'Hành vi tiêu cực trên mạng vẫn là bắt nạt.'),
    Q('Nếu em là kẻ bắt nạt, em cần?', [
      'Tiếp tục để có "uy" trong lớp',
      'Dừng ngay, xin lỗi, suy ngẫm về cảm xúc của nạn nhân',
      'Bắt nạt mạnh hơn để không ai dám nói',
      'Đổ lỗi cho người khác',
    ], 1, 'Nhận lỗi và thay đổi hành vi là cách trưởng thành.'),
  ]),

  M(14, 'Kỹ năng giao tiếp với bạn bè', [
    Q('Khi nói chuyện với bạn, em nên?', [
      'Nhìn vào mắt bạn, lắng nghe và phản hồi tích cực',
      'Vừa nói vừa nhìn điện thoại',
      'Cướp lời bạn liên tục',
      'Chê bai mọi điều bạn nói',
    ], 0, 'Giao tiếp tốt cần có sự tôn trọng và lắng nghe.'),
    Q('Khi không đồng ý với bạn, em nên?', [
      'Cãi nhau to tiếng',
      'Bày tỏ quan điểm một cách lịch sự, tôn trọng ý kiến khác biệt',
      'Đánh bạn',
      'Im lặng giận dỗi',
    ], 1, 'Tôn trọng sự khác biệt là chìa khóa giao tiếp văn minh.'),
    Q('Lời khen nào phù hợp?', [
      '"Mày dốt nhưng vẽ cũng được"',
      '"Bài vẽ của bạn có nét rất sáng tạo, mình thích phần màu sắc"',
      '"Vẽ thế ai chả vẽ được"',
      'Không khen ai cả',
    ], 1, 'Lời khen cụ thể, chân thành có giá trị hơn lời chung chung.'),
    Q('Khi em mắc lỗi với bạn, em nên?', [
      'Lảng tránh, giả vờ quên',
      'Chủ động xin lỗi và tìm cách bù đắp',
      'Đổ lỗi cho bạn',
      'Cãi lại',
    ], 1, 'Xin lỗi chân thành giúp gìn giữ tình bạn.'),
    Q('Tin đồn về bạn em nghe được, em nên?', [
      'Lan truyền nhanh nhất có thể',
      'Kiểm chứng nguồn tin, không tham gia lan truyền',
      'Thêm thắt cho hấp dẫn',
      'Tin ngay không cần kiểm tra',
    ], 1, 'Không lan truyền tin chưa kiểm chứng là tôn trọng bạn.'),
    Q('Bạn thân không có nghĩa là?', [
      'Người luôn ủng hộ em làm điều đúng',
      'Người em có thể tin tưởng chia sẻ',
      'Người đồng ý với em cả việc sai trái',
      'Người sẵn sàng góp ý chân thành',
    ], 2, 'Bạn thân tốt sẽ ngăn em làm điều sai, không đồng lõa.'),
  ]),

  M(15, 'Lập nhóm học tập', [
    Q('Nhóm học tập hiệu quả có quy mô?', [
      '1 người',
      'Khoảng 3-5 người để dễ thảo luận',
      'Cả lớp 40 người',
      '20 người',
    ], 1, '3-5 người là quy mô lí tưởng cho nhóm học.'),
    Q('Bước đầu khi lập nhóm học là?', [
      'Đặt mục tiêu chung và quy ước hoạt động',
      'Mua đồ ăn vặt thật nhiều',
      'Chọn ngay trưởng nhóm là người giàu nhất',
      'Lập nhóm rồi để đó',
    ], 0, 'Mục tiêu rõ ràng giúp nhóm đi đúng hướng.'),
    Q('Vai trò trong nhóm học nên?', [
      'Một người làm hết, các bạn nghỉ',
      'Chia rõ vai (chủ trì, ghi chép, tìm tài liệu…) và luân phiên',
      'Không cần phân vai',
      'Chỉ học sinh giỏi mới có vai trò',
    ], 1, 'Phân vai và luân phiên giúp mọi người cùng rèn luyện.'),
    Q('Khi một bạn không đóng góp gì trong nhóm, em nên?', [
      'Báo giáo viên ngay không nói gì',
      'Trao đổi nhẹ nhàng tìm hiểu lí do và giao việc phù hợp',
      'Đuổi bạn khỏi nhóm',
      'Mặc kệ rồi nhóm gánh hết',
    ], 1, 'Đối thoại tìm nguyên nhân giúp nhóm bền vững.'),
    Q('Khi có bất đồng ý kiến trong nhóm, em nên?', [
      'Áp đặt ý của mình',
      'Lắng nghe các bên, biểu quyết hoặc tìm giải pháp dung hòa',
      'Bỏ nhóm',
      'Im lặng không nói gì',
    ], 1, 'Lắng nghe + dân chủ là cách giải quyết bất đồng.'),
    Q('Nhóm học hiệu quả KHÁC nhóm "tụ tập chép bài" ở chỗ?', [
      'Không khác gì cả',
      'Mọi người cùng học, cùng tiến bộ, không sao chép',
      'Có nhiều đồ ăn hơn',
      'Có ít người hơn',
    ], 1, 'Học nhóm tích cực giúp tất cả thành viên cùng tiến bộ.'),
  ]),

  M(16, 'Tham gia hoạt động tập thể', [
    Q('Tham gia hoạt động tập thể giúp em?', [
      'Mất thời gian học',
      'Rèn kĩ năng giao tiếp, hợp tác, mở rộng quan hệ và phát triển bản thân',
      'Chỉ tốn sức',
      'Không có ích lợi gì',
    ], 1, 'Hoạt động tập thể là cơ hội rèn luyện toàn diện.'),
    Q('Khi nhận nhiệm vụ trong hoạt động lớp, em nên?', [
      'Đùn đẩy cho bạn khác',
      'Hoàn thành đúng hạn, có tinh thần trách nhiệm',
      'Làm cho có',
      'Bỏ giữa chừng',
    ], 1, 'Trách nhiệm cá nhân quyết định thành công của tập thể.'),
    Q('Khi không thích một hoạt động tập thể, em nên?', [
      'Phá hoại hoạt động',
      'Tham gia với tinh thần xây dựng và thử mở lòng',
      'Trốn không tham gia',
      'Lôi kéo bạn bè cùng tẩy chay',
    ], 1, 'Tham gia tích cực có thể giúp em khám phá điều thú vị mới.'),
    Q('Thành tích của tập thể đạt được nhờ?', [
      'Một mình lớp trưởng',
      'Sự đóng góp của tất cả thành viên',
      'May mắn',
      'Tài năng của giáo viên',
    ], 1, 'Tập thể mạnh là khi mọi cá nhân cùng đóng góp.'),
    Q('Khi tập thể đạt thành tích, em nên?', [
      'Khoe khoang mình giỏi nhất',
      'Vui mừng, ghi nhận đóng góp của các bạn, biết ơn thầy cô',
      'Tự nhận hết công lao',
      'Chê bai bạn khác làm chưa tốt',
    ], 1, 'Khiêm tốn và ghi nhận tập thể là phẩm chất đáng quý.'),
    Q('Khi tập thể thất bại, em nên?', [
      'Đổ lỗi cho người khác',
      'Cùng phân tích nguyên nhân, rút kinh nghiệm để cải thiện',
      'Bỏ nhóm',
      'Trách cứ giáo viên',
    ], 1, 'Cùng chịu trách nhiệm và rút kinh nghiệm giúp tập thể trưởng thành.'),
  ]),

  M(17, 'Phòng tránh dịch bệnh thường gặp', [
    Q('Cách phòng dịch bệnh đường hô hấp hiệu quả là?', [
      'Đeo khẩu trang khi cần, rửa tay thường xuyên, giữ khoảng cách khi có dịch',
      'Không cần làm gì',
      'Tránh xa mọi người mãi mãi',
      'Uống thuốc kháng sinh dự phòng hàng ngày',
    ], 0, 'Khẩu trang + rửa tay + giữ khoảng cách là biện pháp căn bản.'),
    Q('Tiêm vaccine giúp?', [
      'Gây bệnh chắc chắn',
      'Tạo miễn dịch, giúp cơ thể chống lại bệnh hoặc giảm nhẹ triệu chứng',
      'Không có tác dụng',
      'Chỉ làm em ốm thêm',
    ], 1, 'Vaccine là thành tựu y học giúp ngăn ngừa nhiều dịch bệnh.'),
    Q('Khi sốt, ho, đau họng, em nên?', [
      'Cố đến trường để không bỏ học',
      'Nghỉ học, báo gia đình đưa đi khám, đeo khẩu trang tránh lây bạn',
      'Đến trường để lây bạn cho công bằng',
      'Tự mua thuốc kháng sinh uống',
    ], 1, 'Nghỉ học + đi khám bảo vệ mình và cộng đồng.'),
    Q('Sốt xuất huyết phòng bằng cách?', [
      'Diệt muỗi, dọn bể nước đọng, mắc màn khi ngủ',
      'Để bể nước đọng nuôi cá cảnh ngoài trời',
      'Chỉ cần uống nước nhiều',
      'Không có cách phòng',
    ], 0, 'Diệt muỗi vằn và nơi đẻ trứng là chìa khóa phòng sốt xuất huyết.'),
    Q('Vệ sinh ăn uống phòng bệnh đường tiêu hóa là?', [
      'Ăn chín, uống sôi, rửa tay trước khi ăn',
      'Ăn thức ăn để qua đêm chưa hâm lại',
      'Uống nước máy chưa đun',
      'Ăn quà vỉa hè không rõ nguồn gốc',
    ], 0, 'Ăn chín uống sôi là nguyên tắc cơ bản.'),
    Q('Trong mùa dịch, thông tin về dịch bệnh em nên?', [
      'Tin mọi thứ trên mạng xã hội',
      'Theo dõi nguồn chính thống (Bộ Y tế, WHO, thầy cô)',
      'Lan truyền tin chưa kiểm chứng',
      'Mặc kệ, không quan tâm',
    ], 1, 'Nguồn tin chính thống giúp phòng dịch đúng cách, tránh hoang mang.'),
  ]),

  M(18, 'Sơ kết HK1 — Tự đánh giá', [
    Q('Tự đánh giá học kì giúp em?', [
      'Mất thời gian vô ích',
      'Nhìn lại thành tựu và điểm cần cải thiện để học tốt hơn ở HK2',
      'Chỉ để báo cáo bố mẹ',
      'Là việc của thầy cô',
    ], 1, 'Tự đánh giá là kĩ năng tự nhận thức quan trọng.'),
    Q('Tiêu chí tự đánh giá KHÔNG nên dựa vào?', [
      'Kết quả học tập so với mục tiêu đã đặt',
      'Sự tiến bộ so với chính mình trước đó',
      'Việc tham gia hoạt động tập thể',
      'So sánh và ganh tị với bạn giỏi nhất lớp',
    ], 3, 'So sánh tiêu cực gây áp lực, không có giá trị phát triển.'),
    Q('Khi nhận thấy mình chưa đạt mục tiêu HK1, em nên?', [
      'Tự dằn vặt, bỏ cuộc',
      'Phân tích nguyên nhân và đặt mục tiêu HK2 thực tế hơn',
      'Đổ lỗi cho hoàn cảnh',
      'Bỏ học',
    ], 1, 'Học từ thất bại là cách tiến lên.'),
    Q('Khi đạt được mục tiêu, em nên?', [
      'Khoe khoang quá mức',
      'Tự thưởng và đặt mục tiêu cao hơn cho giai đoạn tới',
      'Nghỉ ngơi mãi mãi',
      'Coi thường bạn chưa đạt',
    ], 1, 'Ghi nhận thành công và tiếp tục phát triển.'),
    Q('Người tự đánh giá tốt thường?', [
      'Quá tự ti hoặc quá tự cao',
      'Khách quan, trung thực với chính mình, có cái nhìn tích cực',
      'Chỉ nhìn nhược điểm',
      'Phủ nhận mọi nhược điểm',
    ], 1, 'Cân bằng là biểu hiện của tự nhận thức trưởng thành.'),
    Q('Sau khi tự đánh giá HK1, sản phẩm hữu ích nhất là?', [
      'Một bản kế hoạch hành động cụ thể cho HK2',
      'Một lời than vãn dài',
      'Bài thuyết trình khoe thành tích',
      'Không có gì',
    ], 0, 'Tự đánh giá có giá trị khi dẫn đến hành động cụ thể.'),
  ]),

  // ──────────────── HK2 — XÃ HỘI · TỰ NHIÊN · HƯỚNG NGHIỆP ────────────────
  M(19, 'Tự bảo vệ trước nguy hiểm', [
    Q('Khi đi học một mình mà có người lạ rủ lên xe cho đi nhờ, em nên?', [
      'Lên xe ngay vì người ta tốt bụng',
      'Từ chối lịch sự, đi nhanh đến nơi đông người và báo cho người lớn',
      'Theo người lạ về nhà họ',
      'Cho người lạ biết số điện thoại bố mẹ',
    ], 1, 'Từ chối + tìm nơi an toàn + báo người lớn là quy tắc cốt lõi.'),
    Q('Khi sang đường, em nên?', [
      'Chạy thật nhanh qua đường khi xe đông',
      'Quan sát hai chiều, đi đúng vạch dành cho người đi bộ, không vừa đi vừa dùng điện thoại',
      'Cắm tai nghe và bấm điện thoại khi qua đường',
      'Đeo bịt mắt cho ngầu',
    ], 1, 'Quan sát + đi đúng vạch là quy tắc an toàn giao thông.'),
    Q('Đi xe đạp đến trường, em PHẢI?', [
      'Đội mũ bảo hiểm và đi đúng phần đường, không lạng lách',
      'Buông cả hai tay ra cho oai',
      'Đi dàn hàng 3-4 nói chuyện',
      'Vượt đèn đỏ nếu thấy không có công an',
    ], 0, 'Mũ bảo hiểm + đi đúng phần đường là bắt buộc.'),
    Q('Khi gặp nước sâu hoặc dòng chảy mạnh, em nên?', [
      'Tránh xa, không tự ý xuống bơi dù biết bơi',
      'Nhảy xuống thử sức',
      'Rủ thêm bạn xuống cho vui',
      'Quay video TikTok cạnh dòng chảy',
    ], 0, 'Đuối nước là nguyên nhân tai nạn hàng đầu của trẻ em.'),
    Q('Khi có người quen biết nhưng cảm thấy bất an chạm vào cơ thể em, em nên?', [
      'Im lặng vì xấu hổ',
      'Nói "KHÔNG", rời khỏi tình huống và báo bố mẹ/thầy cô ngay',
      'Tự đổ lỗi cho mình',
      'Mặc kệ cho qua',
    ], 1, '"Nói KHÔNG - bỏ đi - kể với người tin cậy" là quy tắc bảo vệ bản thân.'),
    Q('Số điện thoại khẩn cấp tại Việt Nam: cứu thương là?', [
      '113',
      '114',
      '115',
      '116',
    ], 2, '115 là cấp cứu y tế; 113 công an; 114 cứu hỏa.'),
  ]),

  M(20, 'An toàn khi tham gia mạng xã hội', [
    Q('Mật khẩu tài khoản mạng nên?', [
      'Dùng ngày sinh để dễ nhớ',
      'Mạnh (chữ + số + kí tự), không chia sẻ cho bạn bè',
      'Đặt là "123456"',
      'Dùng chung một mật khẩu cho mọi tài khoản',
    ], 1, 'Mật khẩu mạnh + không chia sẻ là nguyên tắc cơ bản.'),
    Q('Người lạ trên mạng kết bạn và muốn gặp ngoài đời, em nên?', [
      'Đi gặp ngay vì tò mò',
      'Từ chối, kể với bố mẹ; tuyệt đối không gặp một mình',
      'Hẹn nơi vắng vẻ gặp',
      'Cho địa chỉ nhà luôn',
    ], 1, 'Không gặp người lạ trên mạng một mình là quy tắc an toàn.'),
    Q('Khi đăng ảnh lên mạng xã hội, em nên?', [
      'Đăng ảnh đồng phục có tên trường, lớp, số điện thoại',
      'Hạn chế chia sẻ thông tin nhận diện, kiểm tra chế độ riêng tư',
      'Đăng ảnh trong nhà tắm cho vui',
      'Đăng ảnh CMND/CCCD',
    ], 1, 'Bảo vệ thông tin cá nhân là quan trọng nhất.'),
    Q('Khi bị quấy rối hoặc bắt nạt trên mạng, em nên?', [
      'Im lặng chịu đựng',
      'Chụp màn hình bằng chứng, chặn người đó, báo người lớn và nền tảng',
      'Trả đũa bằng lời lẽ thô tục',
      'Tự đổ lỗi cho mình',
    ], 1, 'Lưu bằng chứng + chặn + báo là quy trình xử lí đúng.'),
    Q('Thông tin "viral" trên mạng em nên?', [
      'Tin và chia sẻ ngay',
      'Kiểm chứng từ nguồn tin chính thống trước khi tin',
      'Bình luận tiêu cực bất kể đúng sai',
      'Bịa thêm cho hấp dẫn',
    ], 1, 'Kĩ năng kiểm chứng tin (fact-check) rất quan trọng thời đại số.'),
    Q('Thời gian sử dụng mạng xã hội mỗi ngày của lớp 6 nên?', [
      'Không giới hạn',
      'Giới hạn hợp lí (1-2 giờ), không trước giờ ngủ và giờ học',
      'Càng nhiều càng tốt',
      '15 giờ/ngày',
    ], 1, 'Cân bằng thời gian trực tuyến và ngoại tuyến tốt cho sức khoẻ.'),
  ]),

  M(21, 'Hoạt động thiện nguyện', [
    Q('Thiện nguyện là?', [
      'Hành động giúp đỡ người khác một cách tự nguyện, không vụ lợi',
      'Bị bắt buộc phải làm',
      'Cách kiếm tiền nhanh',
      'Việc của riêng người giàu',
    ], 0, 'Tinh thần tự nguyện + vì cộng đồng là cốt lõi.'),
    Q('Học sinh lớp 6 có thể tham gia hoạt động thiện nguyện nào?', [
      'Quyên góp sách vở, áo ấm; ủng hộ bạn vùng khó khăn; dọn vệ sinh khu phố',
      'Một mình đi vùng lũ xa nhà',
      'Cho tiền người lạ trên đường',
      'Không thể tham gia hoạt động nào',
    ], 0, 'Hoạt động trong khả năng, an toàn, có người lớn hướng dẫn.'),
    Q('Khi thiện nguyện, thái độ ĐÚNG là?', [
      'Khoe khoang trên mạng để được khen',
      'Tôn trọng người được giúp đỡ, không kì thị',
      'Coi mình ở vị thế cao hơn',
      'Chỉ làm để chụp ảnh đăng mạng',
    ], 1, 'Tôn trọng nhân phẩm người nhận giúp đỡ là tinh thần thiện nguyện đúng.'),
    Q('Quyên góp vật phẩm cho vùng khó khăn, em nên?', [
      'Vứt đồ cũ rách nát muốn bỏ',
      'Chọn đồ còn dùng tốt, sạch sẽ',
      'Quyên đồ hỏng để giảm rác nhà',
      'Quyên đồ nguy hiểm',
    ], 1, 'Quyên góp với tôn trọng người nhận.'),
    Q('Khi nhóm bạn rủ tham gia "thiện nguyện" yêu cầu đóng góp tiền lớn không rõ minh bạch, em nên?', [
      'Đóng góp ngay',
      'Tìm hiểu kĩ tổ chức, hỏi ý kiến bố mẹ trước khi tham gia',
      'Vay tiền bạn để đóng',
      'Lấy tiền học phí đóng',
    ], 1, 'Cần phân biệt thiện nguyện thật và trục lợi.'),
    Q('Ý nghĩa cá nhân khi tham gia thiện nguyện là?', [
      'Mất thời gian vô ích',
      'Rèn lòng nhân ái, mở rộng tầm nhìn, biết trân trọng cuộc sống',
      'Chỉ để được khen',
      'Có hồ sơ đẹp',
    ], 1, 'Thiện nguyện nuôi dưỡng phẩm chất nhân ái.'),
  ]),

  M(22, 'Bảo vệ môi trường — phân loại rác', [
    Q('Phân loại rác tại nguồn là?', [
      'Phân chia rác ngay từ khi thải ra: rác hữu cơ, rác tái chế, rác nguy hại, rác còn lại',
      'Đổ chung tất cả vào một bao',
      'Đốt tất cả rác trong nhà',
      'Ném rác ra đường',
    ], 0, 'Phân loại tại nguồn giúp xử lí rác hiệu quả, giảm ô nhiễm.'),
    Q('Rác hữu cơ gồm?', [
      'Vỏ trái cây, rau thừa, lá cây',
      'Pin, ắc-quy',
      'Vỏ chai nhựa',
      'Bóng đèn vỡ',
    ], 0, 'Rác hữu cơ phân hủy được, có thể làm phân compost.'),
    Q('Pin cũ thuộc loại rác?', [
      'Rác hữu cơ',
      'Rác tái chế thông thường',
      'Rác nguy hại - cần thu gom riêng',
      'Rác thực phẩm',
    ], 2, 'Pin chứa kim loại nặng độc hại, cần xử lí đặc biệt.'),
    Q('Vỏ chai nhựa, lon nhôm nên?', [
      'Vứt đại',
      'Rửa sạch, gom riêng để tái chế',
      'Đốt cháy',
      'Chôn xuống đất',
    ], 1, 'Tái chế giảm rác thải và tiết kiệm tài nguyên.'),
    Q('Túi ni-lông một lần có hại vì?', [
      'Rất rẻ',
      'Khó phân hủy (hàng trăm năm), gây ô nhiễm đất và đại dương',
      'Làm bằng giấy',
      'Là tài nguyên tái tạo',
    ], 1, 'Túi ni-lông là tác nhân gây ô nhiễm môi trường nghiêm trọng.'),
    Q('Cách giảm rác thải hàng ngày là?', [
      'Mang bình nước cá nhân, túi vải khi đi mua sắm, hạn chế đồ dùng một lần',
      'Mua thật nhiều đồ rồi vứt',
      'Sử dụng nhiều túi ni-lông',
      'Bỏ ngay đồ còn dùng được',
    ], 0, 'Nguyên tắc 3R: Reduce - Reuse - Recycle.'),
  ]),

  M(23, 'Tiết kiệm năng lượng tại nhà và trường', [
    Q('Hành động nào KHÔNG tiết kiệm điện?', [
      'Tắt đèn khi ra khỏi phòng',
      'Rút phích cắm khi không dùng',
      'Để TV ở chế độ chờ (stand-by) cả ngày',
      'Sử dụng bóng đèn LED',
    ], 2, 'Chế độ chờ vẫn tiêu thụ điện đáng kể.'),
    Q('Lợi ích của tiết kiệm năng lượng là?', [
      'Tốn tiền hơn',
      'Tiết kiệm chi phí, bảo vệ môi trường, giảm phát thải CO2',
      'Gây hư hỏng thiết bị',
      'Không có lợi ích gì',
    ], 1, 'Tiết kiệm năng lượng vừa tốt cho gia đình vừa tốt cho hành tinh.'),
    Q('Sử dụng nước tiết kiệm là?', [
      'Khóa vòi khi đánh răng/xoa xà phòng, dùng vòi sen tiết kiệm',
      'Để vòi nước chảy liên tục cả ngày',
      'Tắm vòi sen 2 giờ liên tục',
      'Tưới cây giờ nắng to nhất',
    ], 0, 'Tiết kiệm nước giảm hóa đơn và bảo vệ tài nguyên.'),
    Q('Khi ra khỏi lớp giờ giải lao, em nên?', [
      'Để đèn, quạt, máy chiếu chạy hết',
      'Tắt đèn, quạt nếu không còn ai sử dụng',
      'Bật tất cả thiết bị lên',
      'Mở cửa sổ rồi bật điều hòa',
    ], 1, 'Thói quen nhỏ tiết kiệm năng lượng lớn cho trường.'),
    Q('Điều hòa nên đặt nhiệt độ?', [
      '16°C suốt ngày đêm',
      'Khoảng 26-28°C để vừa mát vừa tiết kiệm điện',
      'Tắt máy lạnh và mở cửa sổ cho mát',
      'Dưới 10°C',
    ], 1, '26-28°C là khoảng nhiệt độ tiết kiệm và khoẻ mạnh.'),
    Q('Năng lượng tái tạo gồm?', [
      'Năng lượng mặt trời, gió, nước, sinh khối',
      'Than đá, dầu mỏ',
      'Khí đốt tự nhiên',
      'Hạt nhân',
    ], 0, 'Năng lượng tái tạo là tương lai bền vững.'),
  ]),

  M(24, 'Tham gia trồng cây, làm vườn', [
    Q('Lợi ích của trồng cây xanh là?', [
      'Lọc không khí, tạo bóng mát, làm đẹp cảnh quan, cung cấp nơi sống cho động vật',
      'Không có lợi ích gì',
      'Chỉ làm tốn diện tích',
      'Gây ô nhiễm',
    ], 0, 'Cây xanh có nhiều giá trị sinh thái và kinh tế.'),
    Q('Khi trồng cây, bước đầu tiên là?', [
      'Đào hố, cải tạo đất phù hợp với loài cây',
      'Tưới thật nhiều nước trước khi đào',
      'Bỏ hạt giống xuống đất khô',
      'Phun thuốc trừ cỏ trước khi trồng',
    ], 0, 'Chuẩn bị đất là bước nền tảng.'),
    Q('Cây mới trồng cần được?', [
      'Bỏ mặc cho tự lớn',
      'Tưới nước đều, che nắng giai đoạn đầu, kiểm tra sâu bệnh',
      'Tưới ngập nước cả ngày',
      'Bón thuốc tăng trưởng liên tục',
    ], 1, 'Chăm sóc đúng kĩ thuật giúp cây sống và phát triển.'),
    Q('Vườn trường có thể trồng?', [
      'Chỉ trồng hoa cảnh',
      'Rau xanh, hoa cảnh, cây thuốc nam, cây bóng mát',
      'Cây ma túy',
      'Cây có gai độc cho học sinh chơi',
    ], 1, 'Đa dạng cây trồng vừa giáo dục vừa hữu ích.'),
    Q('Khi tham gia hoạt động trồng cây, em nên?', [
      'Dùng dụng cụ làm vườn an toàn, làm việc nhóm, tuân thủ hướng dẫn',
      'Đùa nghịch với dụng cụ',
      'Đào bới lung tung',
      'Vứt rác xuống vườn',
    ], 0, 'An toàn lao động là ưu tiên hàng đầu.'),
    Q('Để cây phát triển bền vững, nên?', [
      'Trồng xong là bỏ mặc',
      'Duy trì chăm sóc lâu dài, theo dõi sự phát triển',
      'Đốn cây ngay khi vừa lớn',
      'Phun thuốc hóa học thật nhiều',
    ], 1, 'Bảo vệ thành quả lâu dài mới có ý nghĩa thực sự.'),
  ]),

  M(25, 'Bảo vệ động vật hoang dã', [
    Q('Động vật hoang dã có vai trò?', [
      'Không có vai trò gì',
      'Duy trì cân bằng sinh thái, bảo tồn đa dạng sinh học',
      'Chỉ làm hại con người',
      'Là nguồn thực phẩm vô tận',
    ], 1, 'Động vật hoang dã là một mắt xích quan trọng của hệ sinh thái.'),
    Q('Hành vi nào BẢO VỆ động vật hoang dã?', [
      'Săn bắt, buôn bán trái phép',
      'Không mua sản phẩm từ động vật hoang dã (ngà voi, sừng tê, mật gấu)',
      'Phá rừng làm nương',
      'Đốt rừng làm nương',
    ], 1, 'Không tạo cầu thì không có cung - đó là cách bảo vệ tốt nhất.'),
    Q('Khi gặp động vật hoang dã bị thương, em nên?', [
      'Bắt về nuôi làm thú cưng',
      'Không tự ý chạm vào, báo kiểm lâm hoặc trung tâm cứu hộ',
      'Giết thịt làm bữa ăn',
      'Bán cho người mua',
    ], 1, 'Báo cơ quan chuyên môn là cách giúp đúng.'),
    Q('Loài có nguy cơ tuyệt chủng ở Việt Nam KHÔNG bao gồm?', [
      'Sao la',
      'Voọc mũi hếch',
      'Tê giác Java (đã tuyệt chủng tại VN)',
      'Gà công nghiệp nuôi nhốt',
    ], 3, 'Gà công nghiệp không phải động vật hoang dã.'),
    Q('Nuôi nhốt thú hoang dã trái phép làm thú cưng là?', [
      'Hợp pháp và đáng noi theo',
      'Vi phạm pháp luật và gây hại cho cá thể đó',
      'Cách bảo vệ loài',
      'Việc nên làm',
    ], 1, 'Luật bảo vệ động vật hoang dã nghiêm cấm nuôi nhốt trái phép.'),
    Q('Hành động nhỏ em có thể làm để bảo vệ động vật hoang dã?', [
      'Không mua quà lưu niệm làm từ động vật hoang dã, tuyên truyền cho người xung quanh',
      'Săn bắn cho vui',
      'Vứt rác bừa bãi vào rừng',
      'Đốt lửa trại trong rừng',
    ], 0, 'Tiêu dùng có trách nhiệm + truyền thông là sức mạnh của học sinh.'),
  ]),

  M(26, 'Khám phá nghề nghiệp xung quanh em', [
    Q('Khi muốn tìm hiểu một nghề, em có thể?', [
      'Hỏi trực tiếp bố mẹ, hàng xóm, họ hàng đang làm nghề đó',
      'Đoán mò qua phim ảnh',
      'Tin theo tin đồn',
      'Không tìm hiểu gì',
    ], 0, 'Người trong nghề là nguồn thông tin chính xác.'),
    Q('Khi phỏng vấn người làm nghề, em nên hỏi điều gì?', [
      'Lương cụ thể bao nhiêu, sao ít vậy',
      'Công việc hàng ngày làm gì, cần học gì, vui buồn ra sao',
      'Tài sản gia đình',
      'Đời tư của họ',
    ], 1, 'Hỏi về công việc và quá trình giúp em hiểu nghề.'),
    Q('Nghề "thầy/cô giáo" cần phẩm chất chính nào?', [
      'Tham lam',
      'Yêu thương trẻ, kiên nhẫn, có kiến thức vững và kĩ năng sư phạm',
      'Lười biếng',
      'Hung dữ',
    ], 1, 'Phẩm chất nhân ái và kiến thức là nền tảng của nghề giáo.'),
    Q('Khi quan sát bố mẹ đi làm, em có thể nhận ra?', [
      'Nghề nghiệp có những thuận lợi và khó khăn riêng',
      'Mọi nghề đều như nhau',
      'Bố mẹ đi làm chỉ để kiếm tiền',
      'Không có gì để nhận ra',
    ], 0, 'Mỗi nghề có giá trị và thách thức riêng.'),
    Q('Khi gặp người làm nghề lao động chân tay, thái độ ĐÚNG là?', [
      'Coi thường, kì thị',
      'Tôn trọng vì mọi nghề chân chính đều có giá trị',
      'Tránh xa họ',
      'Cười nhạo',
    ], 1, '"Lao động là vinh quang" - mọi nghề chân chính đều đáng quý.'),
    Q('Cách tốt nhất để tìm hiểu nghề ngoài phỏng vấn là?', [
      'Trải nghiệm thực tế trong vai trò người trợ giúp khi có cơ hội',
      'Đọc tiểu thuyết về nghề đó',
      'Chỉ tưởng tượng',
      'Hỏi máy bói',
    ], 0, 'Trải nghiệm là cách hiểu sâu nhất.'),
  ]),

  M(27, 'Phân loại nhóm nghề trong xã hội', [
    Q('Theo cách phân loại phổ biến, có thể chia nghề theo?', [
      'Nhóm nghề: kĩ thuật, nghệ thuật, xã hội, quản lí, nghiên cứu, thực hành…',
      'Theo màu áo họ mặc',
      'Theo chiều cao của người làm nghề',
      'Theo nơi sinh',
    ], 0, 'Hệ thống Holland chia nghề thành 6 nhóm sở thích nghề nghiệp.'),
    Q('Nghề bác sĩ thuộc nhóm?', [
      'Chỉ nghệ thuật',
      'Khoa học - xã hội (cứu chữa, chăm sóc người bệnh)',
      'Chỉ kĩ thuật cơ khí',
      'Chỉ buôn bán',
    ], 1, 'Bác sĩ cần kiến thức khoa học và phẩm chất xã hội.'),
    Q('Nghề kĩ sư công nghệ thông tin thuộc nhóm?', [
      'Văn nghệ ca múa',
      'Kĩ thuật - khoa học',
      'Thể thao',
      'Nông nghiệp',
    ], 1, 'Kĩ sư CNTT thuộc nhóm kĩ thuật, khoa học, công nghệ.'),
    Q('Nghề nhà thiết kế thời trang, họa sĩ thuộc nhóm?', [
      'Nghệ thuật - sáng tạo',
      'Kĩ thuật cơ khí',
      'Pháp lí',
      'Quân sự',
    ], 0, 'Sáng tạo là đặc trưng của nhóm nghệ thuật.'),
    Q('Nghề luật sư, giáo viên thuộc nhóm?', [
      'Xã hội - dịch vụ con người',
      'Thuần túy kĩ thuật',
      'Chỉ nông nghiệp',
      'Sản xuất công nghiệp',
    ], 0, 'Hai nghề này liên quan trực tiếp tới giúp đỡ và phục vụ con người.'),
    Q('Hiểu cách phân loại nghề giúp em?', [
      'Không có ích gì',
      'Nhận diện được nhóm nghề phù hợp với sở thích, năng lực của mình',
      'Khinh thường nghề khác',
      'Chọn nghề ngẫu nhiên',
    ], 1, 'Hiểu nhóm nghề là bước đầu hướng nghiệp.'),
  ]),

  M(28, 'Phẩm chất, năng lực một số nghề phổ biến', [
    Q('Nghề bác sĩ đòi hỏi?', [
      'Kiến thức y học sâu, kĩ năng thực hành, lòng nhân ái, chịu được áp lực',
      'Chỉ cần khéo tay',
      'Chỉ cần ngoại hình đẹp',
      'Chỉ cần thuộc lòng',
    ], 0, 'Bác sĩ cần đa năng lực và phẩm chất.'),
    Q('Nghề kĩ sư cần?', [
      'Tư duy logic, kĩ năng giải quyết vấn đề, kiến thức toán - khoa học',
      'Chỉ cần kĩ năng ca hát',
      'Chỉ cần kĩ năng nói trước đám đông',
      'Chỉ cần thuộc lòng',
    ], 0, 'Kĩ sư là người thiết kế, giải quyết vấn đề kĩ thuật.'),
    Q('Nghề công an, bộ đội cần?', [
      'Kỉ luật, dũng cảm, thể lực tốt, trung thành với Tổ quốc',
      'Chỉ cần khéo léo',
      'Chỉ cần biết hát',
      'Chỉ cần biết múa',
    ], 0, 'Lực lượng vũ trang đòi hỏi phẩm chất đặc thù.'),
    Q('Nghề nông dân hiện đại cần?', [
      'Hiểu kĩ thuật canh tác, thị trường, công nghệ - không còn chỉ "chân lấm tay bùn"',
      'Không cần học hành',
      'Chỉ cần sức khoẻ',
      'Chỉ cần đất rộng',
    ], 0, 'Nông nghiệp hiện đại là nông nghiệp công nghệ cao.'),
    Q('Nghề giáo viên đòi hỏi?', [
      'Kiến thức chuyên môn, kĩ năng sư phạm, yêu thương học sinh, kiên nhẫn',
      'Chỉ cần thuộc bài',
      'Chỉ cần giọng to',
      'Chỉ cần học vị cao nhất',
    ], 0, 'Giáo viên là nghề đào tạo con người, cần đa năng lực.'),
    Q('Điểm chung của mọi nghề chân chính?', [
      'Cần đạo đức nghề nghiệp, trách nhiệm và không ngừng học hỏi',
      'Chỉ cần kiếm nhiều tiền',
      'Không cần đạo đức',
      'Chỉ cần làm việc cho đủ giờ',
    ], 0, 'Đạo đức nghề nghiệp là nền tảng.'),
  ]),

  M(29, 'Quan sát nghề tại địa phương', [
    Q('Mỗi địa phương thường có?', [
      'Một số nghề truyền thống đặc trưng và các nghề hiện đại',
      'Chỉ duy nhất một nghề',
      'Không có nghề gì',
      'Toàn bộ giống nhau cả nước',
    ], 0, 'Mỗi vùng có thế mạnh nghề khác nhau.'),
    Q('Nghề truyền thống làng quê có thể là?', [
      'Làm gốm, dệt thổ cẩm, làm nón, đan lát, chế biến thực phẩm địa phương',
      'Lập trình AI',
      'Phi hành gia',
      'Vận hành tàu vũ trụ',
    ], 0, 'Nghề truyền thống gắn với văn hóa địa phương.'),
    Q('Khi quan sát người làm nghề thủ công, em nên?', [
      'Quan sát quy trình, hỏi về kĩ thuật, tôn trọng người nghệ nhân',
      'Bắt chước phá hoại sản phẩm',
      'Chê bai sản phẩm',
      'Lén lấy sản phẩm về',
    ], 0, 'Quan sát có ý thức là cách học tốt.'),
    Q('Nghề mới xuất hiện tại địa phương có thể là?', [
      'Du lịch sinh thái, kinh doanh online, dịch vụ giao hàng, livestream bán hàng',
      'Không có nghề nào mới xuất hiện',
      'Chỉ có nghề từ thời cổ đại',
      'Chỉ có nghề ở thành phố lớn',
    ], 0, 'Xã hội thay đổi sinh ra nhiều nghề mới.'),
    Q('Một nghề có thể "biến mất" khi?', [
      'Công nghệ thay thế hoặc nhu cầu xã hội thay đổi',
      'Không bao giờ biến mất',
      'Chỉ vì người làm nghề chết',
      'Chỉ vì thời tiết',
    ], 0, 'Bối cảnh kinh tế-xã hội định hình thế giới nghề nghiệp.'),
    Q('Việc bảo tồn nghề truyền thống có ý nghĩa?', [
      'Giữ gìn bản sắc văn hóa, tạo việc làm và phát triển du lịch',
      'Là việc lãng phí',
      'Không có ý nghĩa gì',
      'Chỉ làm chậm tiến bộ',
    ], 0, 'Nghề truyền thống là di sản văn hóa quý báu.'),
  ]),

  M(30, 'Tìm hiểu sở thích — nghề liên quan', [
    Q('Sở thích cá nhân có thể giúp định hướng nghề vì?', [
      'Người làm nghề mình thích thường say mê và bền bỉ hơn',
      'Không liên quan đến nghề',
      'Sở thích là tạm thời',
      'Sở thích chỉ là chơi bời',
    ], 0, 'Yêu thích công việc là động lực lớn để thành công.'),
    Q('Bạn yêu thích vẽ tranh có thể hướng tới nghề?', [
      'Họa sĩ, thiết kế đồ họa, kiến trúc sư, nhà thiết kế thời trang, hoạt hình',
      'Chỉ duy nhất họa sĩ vỉa hè',
      'Không có nghề nào',
      'Bắt buộc phải đổi sở thích',
    ], 0, 'Một sở thích có thể dẫn đến nhiều con đường nghề.'),
    Q('Bạn yêu thích chơi với trẻ em có thể hướng tới?', [
      'Giáo viên mầm non, bác sĩ nhi khoa, nhà tâm lí trẻ em, người làm sách thiếu nhi',
      'Bắt buộc làm bảo vệ',
      'Bắt buộc làm phi công',
      'Không có nghề nào',
    ], 0, 'Yêu thích trẻ là phẩm chất quý cho các nghề chăm sóc - giáo dục.'),
    Q('Sở thích "lắp ráp, sửa chữa đồ" có thể dẫn đến?', [
      'Kĩ sư cơ khí, thợ sửa chữa, nhà chế tạo, kĩ sư robot',
      'Bắt buộc làm ca sĩ',
      'Không có nghề nào',
      'Bắt buộc làm vận động viên',
    ], 0, 'Sở thích thực hành phù hợp với nhóm kĩ thuật.'),
    Q('Bạn yêu khoa học, đọc sách khoa học có thể trở thành?', [
      'Nhà nghiên cứu, giảng viên đại học, kĩ sư R&D, nhà báo khoa học',
      'Bắt buộc làm vũ công',
      'Bắt buộc làm thợ làm tóc',
      'Không có nghề nào',
    ], 0, 'Đam mê khoa học mở ra nhiều cánh cửa nghề nghiệp.'),
    Q('Khi sở thích thay đổi theo thời gian, em nên?', [
      'Tiếp tục khám phá, không vội quyết định nghề suốt đời từ lớp 6',
      'Bỏ học vì thay đổi liên tục',
      'Bám một sở thích duy nhất từ nhỏ',
      'Đoán mò chọn nghề',
    ], 0, 'Lớp 6 là giai đoạn khám phá, chưa cần quyết định ngay.'),
  ]),

  M(31, 'Vai trò của học tập với việc chọn nghề', [
    Q('Học tập có vai trò gì với nghề nghiệp tương lai?', [
      'Không liên quan',
      'Cung cấp kiến thức nền và mở rộng cơ hội lựa chọn nghề',
      'Chỉ để qua kì thi',
      'Là gánh nặng',
    ], 1, 'Học tốt mở ra nhiều cánh cửa nghề nghiệp.'),
    Q('Để làm bác sĩ, em cần học giỏi môn nào?', [
      'Sinh học, Hóa học và các môn khoa học, kèm rèn luyện đạo đức',
      'Chỉ cần học Mỹ thuật',
      'Chỉ cần học Thể dục',
      'Không cần học gì',
    ], 0, 'Y học cần nền tảng khoa học vững.'),
    Q('Để làm phiên dịch viên, kĩ sư phần mềm quốc tế, em cần?', [
      'Học ngoại ngữ, đặc biệt là tiếng Anh',
      'Bỏ học ngoại ngữ',
      'Học mỗi tiếng địa phương',
      'Học toán cao cấp duy nhất',
    ], 0, 'Ngoại ngữ là chìa khóa hội nhập quốc tế.'),
    Q('Học toán giúp ích cho nghề nào?', [
      'Kĩ sư, nhà khoa học, kế toán, kiến trúc sư, lập trình viên, kinh tế',
      'Không có nghề nào',
      'Chỉ duy nhất giáo viên Toán',
      'Toán chỉ dùng để đi chợ',
    ], 0, 'Toán là công cụ tư duy cho nhiều nghề.'),
    Q('Học sử, văn giúp ích cho nghề nào?', [
      'Nhà báo, luật sư, nhà ngoại giao, nhà văn, giáo viên, nhà nghiên cứu xã hội',
      'Không có nghề nào',
      'Chỉ duy nhất nghề viết sách lịch sử',
      'Văn sử vô dụng',
    ], 0, 'Văn-Sử phát triển tư duy, ngôn ngữ và hiểu biết xã hội.'),
    Q('Kết luận đúng nhất về học tập và nghề nghiệp?', [
      'Học chăm chỉ không đảm bảo thành công nghề nghiệp tuyệt đối nhưng tăng cơ hội',
      'Học chăm chỉ chắc chắn giàu có',
      'Học hay không cũng vậy',
      'Học chỉ làm khó cuộc sống',
    ], 0, 'Học tập tạo nền tảng, nhưng còn cần kĩ năng và may mắn.'),
  ]),

  M(32, 'Lập sổ tay sở thích và ước mơ', [
    Q('Sổ tay sở thích và ước mơ có ích vì?', [
      'Lưu lại hành trình khám phá bản thân, giúp em theo dõi sự thay đổi',
      'Để khoe với người khác',
      'Không có ích gì',
      'Để giáo viên chấm điểm',
    ], 0, 'Sổ tay là công cụ tự nhận thức cá nhân.'),
    Q('Nội dung nên ghi vào sổ tay là?', [
      'Sở thích hiện tại, ước mơ nghề nghiệp, môn học yêu thích, kĩ năng đang rèn',
      'Mật khẩu wifi của hàng xóm',
      'Bí mật của bạn cùng lớp',
      'Số tài khoản bố mẹ',
    ], 0, 'Sổ tay dành cho thông tin về chính mình.'),
    Q('Khi ước mơ thay đổi, em nên?', [
      'Cập nhật vào sổ tay, không xấu hổ',
      'Xé sổ và bỏ luôn',
      'Cố giữ ước mơ cũ dù không còn yêu thích',
      'Lừa dối bản thân',
    ], 0, 'Thay đổi ước mơ là bình thường ở tuổi đang khám phá.'),
    Q('Sổ tay nên được?', [
      'Cập nhật định kì, nhìn lại để thấy sự trưởng thành',
      'Lập ra rồi quên',
      'Sao chép từ bạn',
      'Để bố mẹ điền hộ',
    ], 0, 'Sổ tay sống động khi em thường xuyên cập nhật.'),
    Q('Khi nhìn lại sổ tay sau 1 năm, em có thể?', [
      'Thấy mình đã trưởng thành, có cơ sở để đặt mục tiêu mới',
      'Cười vì mình ngu ngốc',
      'Vứt đi',
      'Không thấy gì',
    ], 0, 'Sổ tay là tài liệu phản chiếu hành trình lớn lên.'),
    Q('Có nên ép buộc theo một ước mơ duy nhất từ lớp 6 không?', [
      'Không, nên giữ tâm thế mở để khám phá nhiều lĩnh vực',
      'Có, phải quyết định ngay từ lớp 6',
      'Phải theo ước mơ của bố mẹ',
      'Phải bắt chước bạn thân',
    ], 0, 'Khám phá tự do là đặc quyền của tuổi 12.'),
  ]),

  M(33, 'Kỹ năng làm việc nhóm', [
    Q('Yếu tố tạo nên nhóm làm việc hiệu quả là?', [
      'Mục tiêu chung, phân vai rõ, giao tiếp tốt, tôn trọng lẫn nhau',
      'Có nhiều đồ ăn',
      'Cùng nhau im lặng',
      'Một người làm hết',
    ], 0, 'Đây là 4 trụ cột của teamwork.'),
    Q('Trưởng nhóm tốt là người?', [
      'Áp đặt mọi quyết định',
      'Lắng nghe, điều phối, khuyến khích, chịu trách nhiệm',
      'Đùn đẩy công việc',
      'Không làm gì',
    ], 1, 'Lãnh đạo phục vụ tốt hơn lãnh đạo độc đoán.'),
    Q('Khi có mâu thuẫn trong nhóm, cách giải quyết tốt là?', [
      'Né tránh mãi mãi',
      'Đối thoại cởi mở, tập trung vấn đề chứ không công kích cá nhân',
      'Cãi nhau to tiếng',
      'Báo giáo viên ngay không nói gì',
    ], 1, 'Phân biệt vấn đề và con người là kĩ năng giải quyết mâu thuẫn.'),
    Q('Khi đóng góp ý kiến nhóm, em nên?', [
      'Nói thẳng dù cộc cằn',
      'Trình bày rõ ràng, mang tính xây dựng, không công kích',
      'Im lặng cho qua',
      'Chỉ chê bai',
    ], 1, 'Phản hồi xây dựng giúp nhóm tiến bộ.'),
    Q('Khi nhận lời khen, em nên?', [
      'Khoe khoang',
      'Cảm ơn và ghi nhận đóng góp của các bạn trong nhóm',
      'Phủ nhận hoàn toàn',
      'Coi thường người khen',
    ], 1, 'Khiêm tốn và biết ơn thể hiện trí tuệ cảm xúc.'),
    Q('Kĩ năng làm việc nhóm là?', [
      'Vô dụng trong cuộc sống',
      'Một trong những kĩ năng quan trọng nhất ở mọi nghề nghiệp tương lai',
      'Chỉ cần cho học sinh',
      'Chỉ cần khi đi du lịch',
    ], 1, 'Hầu như mọi nghề hiện đại đều cần làm việc nhóm.'),
  ]),

  M(34, 'Trải nghiệm một nghề (đóng vai)', [
    Q('Đóng vai trải nghiệm nghề giúp em?', [
      'Hiểu công việc, cảm xúc và thách thức của người làm nghề',
      'Mất thời gian',
      'Chỉ để chơi',
      'Không có ích gì',
    ], 0, 'Đóng vai là phương pháp học trải nghiệm hiệu quả.'),
    Q('Khi đóng vai người bán hàng, em cần thể hiện?', [
      'Quát mắng khách',
      'Niềm nở, lịch sự, giới thiệu sản phẩm trung thực',
      'Lừa khách mua đồ kém',
      'Bỏ mặc khách',
    ], 1, 'Văn hóa phục vụ là cốt lõi nghề bán hàng.'),
    Q('Khi đóng vai tiếp tân khách sạn, em cần?', [
      'Mỉm cười, lắng nghe nhu cầu, hướng dẫn rõ ràng, giữ phong thái lịch sự',
      'Cau có với khách',
      'Vừa nói chuyện riêng vừa làm việc',
      'Bỏ mặc khách đợi',
    ], 0, 'Tiếp tân là gương mặt đầu tiên của khách sạn.'),
    Q('Khi đóng vai bác sĩ, em cần?', [
      'Lắng nghe người bệnh, giải thích rõ ràng, an ủi và đưa ra hướng xử lí',
      'Quát mắng người bệnh',
      'Chỉ kê thuốc mà không khám',
      'Bỏ mặc người bệnh',
    ], 0, '"Bệnh nhân làm trung tâm" là nguyên tắc y khoa hiện đại.'),
    Q('Sau khi đóng vai, em nên?', [
      'Quên ngay vì chỉ là trò chơi',
      'Suy ngẫm về cảm nhận, ghi vào sổ tay sở thích',
      'Khoe khoang mình diễn giỏi',
      'Chê bai bạn đóng vai khác',
    ], 1, 'Suy ngẫm sau trải nghiệm là bước học hỏi quan trọng nhất.'),
    Q('Trải nghiệm đóng vai cho em biết?', [
      'Mình có thực sự yêu thích nghề đó không, có phù hợp tính cách không',
      'Mức lương của nghề',
      'Tất cả về nghề',
      'Không biết gì',
    ], 0, 'Trải nghiệm giúp kiểm tra sự phù hợp giữa sở thích và thực tế nghề.'),
  ]),

  M(35, 'Tổng kết hành trình lớp 6', [
    Q('Lớp 6 là năm học có ý nghĩa vì?', [
      'Là năm bản lề chuyển từ Tiểu học sang THCS với nhiều thay đổi',
      'Không có ý nghĩa gì',
      'Là năm cuối cấp',
      'Giống hệt lớp 5',
    ], 0, 'Lớp 6 đánh dấu bước chuyển quan trọng.'),
    Q('Em đã trưởng thành ở những mặt nào trong năm lớp 6?', [
      'Kiến thức, kĩ năng tự học, giao tiếp, quản lí cảm xúc, hiểu biết nghề',
      'Chỉ tăng chiều cao',
      'Chỉ ăn nhiều hơn',
      'Không có gì thay đổi',
    ], 0, 'Lớp 6 phát triển toàn diện cả kiến thức và kĩ năng sống.'),
    Q('Khi tổng kết, em nên nhìn nhận?', [
      'Cả thành công và thất bại đều là bài học quý',
      'Chỉ thành công mới đáng kể',
      'Quên thất bại đi',
      'Chỉ thất bại mới đáng nhớ',
    ], 0, 'Cân bằng giúp em phát triển bền vững.'),
    Q('Lời cảm ơn cuối năm nên dành cho?', [
      'Thầy cô, bố mẹ, bạn bè - những người đã đồng hành',
      'Chỉ mình bản thân',
      'Không ai cả',
      'Chỉ thầy cô',
    ], 0, 'Biết ơn là phẩm chất quý.'),
    Q('Bài học lớn nhất sau một năm lớp 6 thường là?', [
      'Mỗi học sinh sẽ tự rút ra bài học riêng phù hợp với mình',
      'Tất cả phải giống nhau',
      'Không có bài học nào',
      'Chỉ bài học toán',
    ], 0, 'Bài học cá nhân hóa là điều quý nhất của trải nghiệm.'),
    Q('Khép lại lớp 6, em mang theo?', [
      'Kiến thức, kĩ năng và những kỉ niệm đẹp làm hành trang cho lớp 7',
      'Nỗi sợ hãi',
      'Sự chán nản',
      'Không có gì',
    ], 0, 'Mỗi năm học là một hành trang quý.'),
  ]),

  M(36, 'Định hướng năm học mới — lớp 7', [
    Q('Để chuẩn bị tốt cho lớp 7, em nên?', [
      'Đặt mục tiêu mới, ôn lại kiến thức nền, rèn kĩ năng tự học',
      'Bỏ học hè hoàn toàn không động đến sách',
      'Học nhồi nhét cả mùa hè không nghỉ',
      'Không cần chuẩn bị gì',
    ], 0, 'Chuẩn bị có kế hoạch + nghỉ ngơi hợp lí.'),
    Q('Mục tiêu lớp 7 nên có đặc điểm?', [
      'Cụ thể, đo lường được, có thời hạn, vừa sức nhưng có thách thức',
      'Mơ hồ, không rõ ràng',
      'Quá xa vời và không thực tế',
      'Sao chép từ bạn',
    ], 0, 'Mục tiêu SMART giúp em tiến bộ thực sự.'),
    Q('Trong hè, em nên dành thời gian cho?', [
      'Đọc sách, học thêm kĩ năng mới, tham gia hoạt động trải nghiệm, vận động',
      'Chỉ ngồi trước màn hình suốt ngày',
      'Chỉ ngủ',
      'Không làm gì có ích',
    ], 0, 'Hè là cơ hội phát triển toàn diện ngoài chương trình.'),
    Q('Khi vào lớp 7, kiến thức sẽ?', [
      'Nâng cao và sâu hơn lớp 6, đòi hỏi nền tảng vững',
      'Dễ hơn lớp 6',
      'Giống hệt lớp 6',
      'Không thay đổi',
    ], 0, 'Mỗi lớp cao hơn đòi hỏi kiến thức nền vững.'),
    Q('Tinh thần đúng khi bước vào lớp 7 là?', [
      'Tự tin, sẵn sàng học hỏi, không ngại thử thách mới',
      'Sợ hãi, lo lắng quá mức',
      'Tự mãn vì đã qua lớp 6',
      'Chán nản',
    ], 0, 'Tâm thế tích cực mở ra cánh cửa thành công.'),
    Q('Em hãy chọn câu kết tốt nhất cho hành trình lớp 6 - lớp 7:', [
      '"Mỗi năm học là một bước trưởng thành; em đã sẵn sàng cho chương mới."',
      '"Học chán quá, không muốn lên lớp 7."',
      '"Lớp 7 chắc chắn em sẽ trượt."',
      '"Không có gì để nói."',
    ], 0, 'Tinh thần hướng tới tương lai với sự tự tin và biết ơn quá khứ.'),
  ]),
];

export const S6HDTN_SCENARIOS = indexBy(S6HDTN_WEEKS);
