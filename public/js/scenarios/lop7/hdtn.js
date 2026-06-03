// ============================================================
// Lớp 7 — Hoạt động trải nghiệm, hướng nghiệp (HĐTN) · 35 tuần
// Bám sát Chương trình GDPT 2018 môn HĐTN cấp THCS.
// Trọng tâm: phát triển bản thân, tình bạn, gia đình, cộng đồng,
// định hướng nghề nghiệp, văn hoá nhà trường, an toàn, môi trường.
// ============================================================

import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7HDTN', 'hdtn', n, title, qs, opts);

export const S7HDTN_WEEKS = [
  // ───────────── HK1 ─────────────

  M(1, 'Khám phá bản thân — điểm mạnh & điểm yếu', [
    Q('"Tự nhận thức bản thân" có lợi gì?', ['Không cần thiết', 'Hiểu mình để phát huy điểm mạnh, cải thiện điểm yếu', 'Không có lợi', 'Làm mất tự tin'], 1, 'Tự nhận thức là bước đầu để phát triển bản thân.'),
    Q('Khi nhận ra điểm yếu của mình, nên?', ['Tự ti, bỏ cuộc', 'Đổ lỗi cho người khác', 'Giấu đi', 'Tìm cách cải thiện dần'], 3, 'Điểm yếu là cơ hội để học hỏi và phát triển, không phải để xấu hổ.'),
    Q('Cách tốt nhất để khám phá điểm mạnh là?', ['Ngồi một chỗ suy nghĩ', 'Chỉ nghe bố mẹ nói', 'Không cần khám phá', 'Thử nhiều hoạt động, lắng nghe phản hồi'], 3, 'Trải nghiệm + phản hồi từ người khác giúp khám phá điểm mạnh thực sự.'),
    Q('Khi bạn khen em một điều gì đó, nên?', ['Coi như không nghe', 'Phủ nhận hoàn toàn', 'Cảm ơn, ghi nhận, suy ngẫm xem có đúng không', 'Khoe khoang'], 2, 'Tiếp nhận lời khen lịch sự + suy ngẫm để hiểu mình hơn.'),
    Q('Khi bạn góp ý điểm yếu của em, nên?', ['Tức giận', 'Lắng nghe, cân nhắc, cảm ơn', 'Cãi lại', 'Tránh xa bạn đó'], 1, 'Góp ý xây dựng là quà quý → tiếp nhận với thái độ cởi mở.'),
  ]),

  M(2, 'Đặt mục tiêu cá nhân', [
    Q('Mục tiêu tốt nên có đặc điểm nào (SMART)?', ['Không có thời hạn', 'Càng to càng tốt', 'Cụ thể, đo được, khả thi, có ý nghĩa, có thời hạn', 'Chỉ cần ghi nhớ trong đầu, không cần viết'], 2, 'SMART = Specific, Measurable, Achievable, Relevant, Time-bound.'),
    Q('Ví dụ mục tiêu SMART tốt?', ['"Trong 3 tháng tới mình sẽ đọc hết 5 cuốn sách"', '"Một ngày nào đó mình sẽ..."', '"Mình sẽ học giỏi"', '"Mình sẽ tốt hơn"'], 0, 'Mục tiêu cụ thể, đo được, có thời hạn = đúng nguyên tắc SMART.'),
    Q('Tại sao nên viết mục tiêu ra giấy?', ['Để cho thầy cô kiểm tra mỗi tuần', 'Chỉ để khoe', 'Lãng phí giấy', 'Giúp ghi nhớ và cam kết hơn'], 3, 'Viết ra giấy giúp tăng cam kết và dễ theo dõi tiến độ.'),
    Q('Khi không đạt được mục tiêu, nên?', ['Phớt lờ', 'Bỏ cuộc', 'Xem xét nguyên nhân và điều chỉnh', 'Đổ lỗi'], 2, 'Phân tích vì sao chưa đạt để điều chỉnh phương pháp, mục tiêu.'),
    Q('Mục tiêu dài hạn nên?', ['Bỏ qua', 'Chia nhỏ thành các mục tiêu ngắn hạn', 'Chỉ nghĩ trong đầu', 'Để nguyên không chia'], 1, 'Chia nhỏ giúp đỡ nản và dễ theo dõi tiến độ từng bước.'),
  ]),

  M(3, 'Quản lý thời gian — học và chơi', [
    Q('Công cụ đơn giản để quản lý thời gian là?', ['Nhớ trong đầu, không cần ghi lại', 'Không cần công cụ', 'Thời khoá biểu/to-do list', 'Hỏi bạn'], 2, 'Thời khoá biểu/danh sách việc cần làm giúp tổ chức thời gian hiệu quả.'),
    Q('"Ưu tiên" trong quản lý thời gian là?', ['Làm cái thích trước', 'Làm việc quan trọng và gấp trước', 'Tuỳ hứng', 'Làm cái dễ trước'], 1, 'Ma trận Eisenhower: ưu tiên việc quan trọng + gấp.'),
    Q('"Trì hoãn" (procrastination) là gì?', ['Lập kế hoạch', 'Làm việc nhanh', 'Hoãn việc cần làm sang sau', 'Hoàn thành sớm'], 2, 'Trì hoãn = thói quen xấu, làm chậm tiến độ.'),
    Q('Cách chống trì hoãn hiệu quả?', ['Lo lắng', 'Bỏ qua', 'Chia nhỏ việc, bắt đầu ngay 5-10 phút', 'Đợi hứng'], 2, 'Phương pháp "Pomodoro" hay "5 phút khởi động" giúp vượt qua trì hoãn.'),
    Q('Thời gian cho học và chơi cần?', ['Chỉ chơi', 'Chỉ học', 'Cân bằng, có nghỉ ngơi', 'Không có thời gian biểu'], 2, 'Cân bằng học - chơi - nghỉ giúp hiệu quả lâu dài.'),
  ]),

  M(4, 'Phương pháp học tập hiệu quả', [
    Q('Học tập "chủ động" nghĩa là?', ['Tự đặt câu hỏi, tự liên hệ, không chỉ nghe thụ động', 'Học vẹt', 'Ngồi nghe im', 'Chép đầy đủ'], 0, 'Học chủ động: tham gia, đặt câu hỏi, thực hành.'),
    Q('Kỹ thuật "ôn tập rải" (spaced repetition) là?', ['Học thuộc lòng từng chữ một lần duy nhất', 'Ôn lại nhiều lần, khoảng cách ngày tăng dần', 'Học nhồi 1 lần', 'Học một lần duy nhất'], 1, 'Spaced repetition: ôn lại sau 1 ngày, 3 ngày, 1 tuần... giúp nhớ lâu.'),
    Q('Sai lầm phổ biến khi học bài là?', ['Tóm tắt ý chính', 'Học vẹt, không hiểu', 'Làm bài tập', 'Hỏi nhiều'], 1, 'Học vẹt → quên nhanh, không vận dụng được; cần hiểu bản chất.'),
    Q('Khi không hiểu bài, nên?', ['Hỏi thầy cô hoặc bạn, tự tra cứu', 'Cho qua', 'Bỏ qua', 'Học vẹt'], 0, 'Hỏi là cách học tốt nhất; không hiểu mà giấu = lỗ hổng kiến thức.'),
    Q('Môi trường học tốt nên?', ['Vừa học vừa lướt mạng', 'Vừa nghe nhạc lớn vừa học để tỉnh táo', 'Ánh sáng yếu để đỡ mỏi mắt', 'Yên tĩnh, đủ sáng, ít gây xao nhãng'], 3, 'Môi trường ảnh hưởng lớn đến hiệu quả tập trung.'),
  ]),

  M(5, 'Xây dựng tình bạn đẹp', [
    Q('Tình bạn đẹp dựa trên?', ['Tin tưởng, tôn trọng, chân thành', 'Bắt buộc', 'Lợi ích', 'Vật chất'], 0, 'Ba trụ cột của tình bạn: tin tưởng, tôn trọng, chân thành.'),
    Q('Khi bạn gặp khó khăn, em nên?', ['Bỏ mặc', 'Tránh xa', 'Lắng nghe, an ủi, hỗ trợ', 'Cười nhạo'], 2, 'Bạn thật là người ở bên lúc khó khăn.'),
    Q('Khi không đồng ý với bạn, nên?', ['Bỏ chơi', 'Nói xấu sau lưng', 'Trao đổi thẳng thắn, tôn trọng', 'Im lặng giận'], 2, 'Bất đồng là bình thường; quan trọng là cách giải quyết.'),
    Q('Khi bạn mắc lỗi, em nên?', ['Loan tin', 'Góp ý chân thành, không phán xét', 'Cắt đứt', 'Cười cợt'], 1, 'Bạn tốt là người dám góp ý thẳng + thấu hiểu.'),
    Q('Khi bạn rủ làm điều xấu (gian lận, bắt nạt...), em nên?', ['Báo người không liên quan', 'Đồng ý để không mất bạn', 'Từ chối, khuyên bạn', 'Im lặng theo'], 2, 'Tình bạn thật không yêu cầu em làm điều sai; từ chối + khuyên bạn.'),
  ]),

  M(6, 'Gia đình — yêu thương và trách nhiệm', [
    Q('Vai trò của em trong gia đình là?', ['Chỉ được phục vụ', 'Chỉ cần học', 'Không có vai trò', 'Yêu thương, chia sẻ việc nhà, học tập tốt'], 3, 'Mỗi thành viên đều có vai trò; trẻ em góp phần qua việc nhà và học tập.'),
    Q('Khi bố/mẹ mệt, em nên?', ['Cãi lại', 'Đòi hỏi thêm', 'Quan tâm, hỏi han, giúp việc nhà', 'Mặc kệ'], 2, 'Quan tâm và chia sẻ là cách thể hiện tình yêu với người thân.'),
    Q('Khi có bất đồng với bố/mẹ, nên?', ['Trình bày bình tĩnh, lắng nghe', 'Bỏ nhà', 'Đập đồ', 'Cãi to'], 0, 'Đối thoại bình tĩnh là cách giải quyết tốt nhất.'),
    Q('Anh chị em trong nhà nên?', ['Yêu thương, nhường nhịn, giúp đỡ', 'Tranh giành', 'Đánh nhau', 'Không nói chuyện'], 0, 'Tình anh em là tài sản quý của gia đình.'),
    Q('Khi ông bà ốm, em nên?', ['Không quan tâm', 'Tránh xa', 'Chỉ chào hỏi cho có rồi đi chơi tiếp', 'Quan tâm, hỏi han, chăm sóc'], 3, 'Hiếu thảo với ông bà là truyền thống tốt đẹp.'),
  ]),

  M(7, 'Kỹ năng giao tiếp', [
    Q('Khi nghe người khác nói, kỹ năng quan trọng là?', ['Nghĩ sẵn câu trả lời để đối đáp ngay', 'Lắng nghe tích cực, không ngắt lời', 'Bấm điện thoại', 'Cướp lời'], 1, 'Lắng nghe tích cực = nghe có ý thức, không phân tâm, hiểu cảm xúc người nói.'),
    Q('Ngôn ngữ cơ thể (body language) khi giao tiếp?', ['Chỉ lời nói mới quan trọng', 'Rất quan trọng — chiếm phần lớn ấn tượng', 'Chỉ trang phục', 'Chỉ ảnh hưởng khi giao tiếp với người lạ'], 1, 'Body language: ánh mắt, tư thế, cử chỉ chiếm tỷ lệ lớn trong giao tiếp.'),
    Q('Khi muốn từ chối lịch sự, nên?', ['Cộc cằn nói "không"', 'Chạy đi', 'Im lặng', 'Nói "Cảm ơn, mình không thể vì..."'], 3, 'Từ chối lịch sự: cảm ơn + lý do ngắn gọn.'),
    Q('Trong tranh luận, hành vi tốt là?', ['Nêu quan điểm rõ ràng, tôn trọng đối phương', 'Mắng đối phương', 'Im lặng nghe để tránh xung đột', 'La hét'], 0, 'Tranh luận văn minh: lý lẽ + tôn trọng cá nhân đối phương.'),
    Q('"Cảm ơn" và "Xin lỗi" có vai trò gì?', ['Chỉ là phép xã giao hình thức', 'Không cần', 'Yếu đuối', 'Thể hiện văn hoá, tăng thiện cảm'], 3, 'Lời cảm ơn và xin lỗi là nền tảng văn hoá ứng xử.'),
  ]),

  M(8, 'Truyền thống nhà trường', [
    Q('"Truyền thống nhà trường" là gì?', ['Quy định mới', 'Những giá trị, nề nếp được giữ gìn qua các thế hệ học sinh', 'Toà nhà cũ', 'Không có ý nghĩa'], 1, 'Truyền thống: giá trị tinh thần, nề nếp, di sản của trường.'),
    Q('Để giữ gìn truyền thống, học sinh nên?', ['Không tham gia gì', 'Phá luật', 'Vô tâm', 'Tôn trọng thầy cô, học tập tốt, tham gia hoạt động'], 3, 'Học sinh là người tiếp nối truyền thống qua hành động hàng ngày.'),
    Q('Bài hát truyền thống / logo trường thể hiện?', ['Trang trí', 'Bản sắc và niềm tự hào của trường', 'Không cần', 'Sao chép'], 1, 'Biểu tượng (logo, bài hát) thể hiện bản sắc và sự gắn kết.'),
    Q('Lễ khai giảng có ý nghĩa?', ['Đánh dấu năm học mới, gắn kết cộng đồng trường', 'Không cần thiết', 'Chỉ hình thức', 'Lãng phí thời gian'], 0, 'Khai giảng là lễ trọng đại, khởi đầu năm học với tinh thần mới.'),
    Q('Cựu học sinh có vai trò gì với trường?', ['Không liên quan', 'Đến để khoe', 'Chỉ đến thăm', 'Là tấm gương, truyền cảm hứng, gắn kết các thế hệ'], 3, 'Cựu học sinh thành đạt là niềm tự hào và nguồn cảm hứng cho thế hệ sau.'),
  ]),

  M(9, 'Hoạt động Đội TNTP Hồ Chí Minh', [
    Q('Đội Thiếu niên Tiền phong Hồ Chí Minh được thành lập ngày tháng năm nào?', ['15/5/1941', '19/5/1890', '7/5/1954', '2/9/1945'], 0, 'Ngày 15/5/1941 thành lập Đội tại Pác Bó (Cao Bằng).'),
    Q('Khăn quàng đỏ của Đội tượng trưng cho?', ['Trang trí', 'Một góc của lá cờ Tổ quốc', 'Sự may mắn', 'Cấp bậc'], 1, 'Khăn quàng đỏ tượng trưng cho một góc lá cờ Tổ quốc.'),
    Q('Lời hứa của Đội viên có những điều cốt lõi nào?', ['Đẹp nhất', 'Đạt danh hiệu cháu ngoan Bác Hồ mỗi năm', 'Thực hiện 5 điều Bác Hồ dạy', 'Học giỏi nhất lớp'], 2, 'Đội viên hứa thực hiện 5 điều Bác Hồ dạy thiếu niên nhi đồng.'),
    Q('Năm điều Bác Hồ dạy thiếu nhi điều thứ nhất là?', ['Khiêm tốn', 'Đoàn kết tốt', 'Yêu Tổ quốc, yêu đồng bào', 'Học tập tốt'], 2, 'Điều 1: "Yêu Tổ quốc, yêu đồng bào".'),
    Q('Hoạt động Đội giúp thiếu niên?', ['Bắt buộc', 'Không có lợi ích', 'Rèn luyện đạo đức, kỹ năng, lý tưởng', 'Chỉ vui chơi'], 2, 'Đội là môi trường rèn luyện toàn diện cho thiếu niên.'),
  ]),

  M(10, 'Cộng đồng — em là một thành viên', [
    Q('"Cộng đồng" của em gồm?', ['Hàng xóm, làng/phố, trường học, các nhóm bạn', 'Chỉ trường', 'Chỉ gồm bạn bè thân thiết trên mạng', 'Chỉ gia đình'], 0, 'Cộng đồng đa lớp: gia đình → hàng xóm → trường → xã hội.'),
    Q('Em có thể đóng góp gì cho cộng đồng địa phương?', ['Chờ người lớn làm rồi mình hưởng kết quả', 'Vô tâm', 'Giữ vệ sinh, giúp người, tham gia hoạt động chung', 'Không tham gia'], 2, 'Mỗi hành động nhỏ tốt đẹp đều đóng góp cho cộng đồng.'),
    Q('Khi thấy người lạ gặp khó khăn (ngã, cần giúp), em nên?', ['Đứng nhìn xem có ai khác đến giúp không', 'Giúp đỡ nếu an toàn, hoặc báo người lớn', 'Bỏ qua', 'Chụp ảnh đăng mạng'], 1, 'Lòng tốt + an toàn: giúp được thì giúp, không thì báo người lớn.'),
    Q('Khi tham gia làm việc tình nguyện, em học được?', ['Không có gì', 'Chỉ mệt', 'Cảm thông, kỹ năng, ý thức công dân', 'Mất thời gian'], 2, 'Tình nguyện mở rộng trải nghiệm và rèn nhân cách.'),
    Q('Văn hoá ứng xử nơi công cộng yêu cầu?', ['Vứt rác', 'Cãi nhau', 'Lịch sự, không gây ồn, không xả rác', 'Nói chuyện thoải mái như ở nhà'], 2, 'Ứng xử nơi công cộng thể hiện văn hoá cá nhân.'),
  ]),

  M(11, 'Định hướng nghề nghiệp — các nhóm nghề', [
    Q('Theo Holland (lý thuyết RIASEC), người thích "làm việc với máy móc, công cụ" thuộc nhóm?', ['Social (Xã hội)', 'Realistic (Kỹ thuật, thực tế)', 'Conventional (Văn phòng)', 'Artistic (Nghệ thuật)'], 1, 'R = Realistic: hợp nghề kỹ thuật, sửa chữa, xây dựng, vận hành máy móc.'),
    Q('Người thích nghiên cứu, tìm hiểu, giải đáp khoa học thuộc nhóm?', ['Enterprising', 'Artistic', 'Investigative (Nghiên cứu)', 'Social'], 2, 'I = Investigative: hợp khoa học, nghiên cứu, y học, công nghệ.'),
    Q('Người thích sáng tạo, vẽ, viết, nhạc, thiết kế thuộc nhóm?', ['Investigative', 'Artistic (Nghệ thuật)', 'Conventional', 'Realistic'], 1, 'A = Artistic: hợp nghệ thuật, thiết kế, văn chương, âm nhạc.'),
    Q('Người thích giúp đỡ, dạy dỗ, chia sẻ với người khác thuộc nhóm?', ['Realistic', 'Investigative', 'Social (Xã hội)', 'Conventional'], 2, 'S = Social: hợp giáo viên, y tá, công tác xã hội, tư vấn.'),
    Q('Người thích lãnh đạo, kinh doanh, thuyết phục người khác thuộc nhóm?', ['Investigative', 'Enterprising (Quản lý/Kinh doanh)', 'Conventional', 'Social'], 1, 'E = Enterprising: hợp kinh doanh, quản lý, luật, marketing.'),
  ]),

  M(12, 'Nghề nghiệp — tìm hiểu sơ bộ', [
    Q('"Nghề" và "việc làm" có khác nhau không?', ['Có — Nghề là chuyên môn, việc làm là vị trí công việc cụ thể', 'Không liên quan', 'Hoàn toàn giống', 'Không khác'], 0, 'Nghề: chuyên môn rộng (vd "lập trình viên"); việc làm: vị trí cụ thể tại một công ty.'),
    Q('Để chọn nghề phù hợp, cần hiểu?', ['Chỉ theo bạn bè', 'Chỉ theo gia đình', 'Bản thân (sở thích, năng lực) + yêu cầu nghề + nhu cầu xã hội', 'Theo trào lưu'], 2, 'Tam giác hướng nghiệp: tôi (bản thân) - tôi có thể - xã hội cần.'),
    Q('Để tìm hiểu một nghề, có thể?', ['Chọn nghề theo bạn thân của mình', 'Đọc sách, hỏi người làm nghề, xem video, tham quan', 'Không tìm hiểu', 'Chỉ nghe đồn'], 1, 'Nhiều cách: tài liệu + người làm thực + trải nghiệm thực tế.'),
    Q('Nghề "lập trình viên" thuộc nhóm Holland nào?', ['Investigative (kết hợp một phần Realistic)', 'Artistic', 'Social', 'Conventional'], 0, 'Lập trình viên chủ yếu là I (giải quyết vấn đề logic), có phần R.'),
    Q('Nghề "giáo viên" thuộc nhóm Holland nào?', ['Investigative', 'Realistic', 'Conventional', 'Social (chủ yếu) + Artistic'], 3, 'Giáo viên: S (giúp người học), thêm A (sáng tạo bài giảng).'),
  ]),

  M(13, 'Văn hoá nhà trường — nội quy', [
    Q('Nội quy nhà trường có mục đích gì?', ['Trang trí', 'Hạn chế tự do', 'Đảm bảo môi trường học tập kỷ luật, công bằng, an toàn', 'Phạt học sinh'], 2, 'Nội quy bảo vệ quyền học tập của mọi học sinh.'),
    Q('Khi không đồng ý với một quy định, em nên?', ['Bỏ học', 'Nói xấu trường', 'Phá quy định', 'Đề xuất bằng kênh chính thức (sao đỏ, ban cán sự, hộp thư...)'], 3, 'Thay đổi tích cực: đề xuất qua kênh chính thức.'),
    Q('Trang phục đến trường nên?', ['Đồng phục đúng quy định, gọn gàng', 'Quá hở', 'Quần áo lạ', 'Mặc theo xu hướng thời trang mới nhất'], 0, 'Đồng phục thể hiện sự bình đẳng và tinh thần tập thể.'),
    Q('Khi vào lớp muộn, hành vi đúng là?', ['Đi cửa sau', 'Vào ồn ào', 'Bỏ tiết', 'Xin phép thầy cô, im lặng vào chỗ ngồi'], 3, 'Tôn trọng lớp + thầy cô bằng cách xin phép và vào trật tự.'),
    Q('Khi cờ Tổ quốc kéo lên trong lễ chào cờ, em nên?', ['Đứng nghiêm, hát quốc ca to và rõ', 'Nói chuyện', 'Đứng nghiêm nhưng không cần hát theo', 'Cười đùa'], 0, 'Chào cờ là nghi lễ thiêng liêng → đứng nghiêm, hát quốc ca trang trọng.'),
  ]),

  M(14, 'An toàn mạng xã hội', [
    Q('Thông tin cá nhân nào KHÔNG nên đăng công khai trên mạng?', ['Tên trường', 'Sở thích chung', 'Tên bài hát em thích', 'Số điện thoại, địa chỉ nhà, lịch trình hàng ngày, ảnh CCCD'], 3, 'Thông tin nhạy cảm (địa chỉ, lịch trình, giấy tờ) dễ bị kẻ xấu lợi dụng.'),
    Q('Khi gặp người lạ trên mạng rủ gặp ngoài đời, em nên?', ['Đồng ý đi một mình', 'Tự ý gặp', 'Từ chối, báo người lớn', 'Cho địa chỉ nhà'], 2, 'KHÔNG gặp người lạ trên mạng một mình; báo cha mẹ ngay.'),
    Q('Mật khẩu mạnh nên có?', ['Dài ≥ 8 ký tự, kết hợp chữ-số-ký tự đặc biệt', 'Ngày sinh', '123456', 'Tên mình'], 0, 'Mật khẩu mạnh: dài + hỗn hợp + khó đoán.'),
    Q('Mật khẩu của em nên?', ['Viết lên bảng lớp', 'Giữ bí mật, không chia sẻ với ai', 'Đăng lên mạng', 'Chia sẻ với bạn thân'], 1, 'Mật khẩu là bí mật cá nhân — không chia sẻ với bất kỳ ai.'),
    Q('Khi bị bắt nạt trên mạng (cyberbullying), em nên?', ['Chụp màn hình bằng chứng, báo người lớn, không trả đũa', 'Trả đũa nặng hơn', 'Tự giải quyết', 'Im lặng chịu'], 0, 'Lưu bằng chứng + báo người lớn tin cậy → cách xử lý đúng.'),
  ]),

  M(15, 'Phòng chống bạo lực học đường', [
    Q('"Bạo lực học đường" bao gồm những hình thức nào?', ['Đánh đập, lăng mạ, cô lập, bắt nạt qua mạng', 'Chỉ tính khi gây thương tích thấy được', 'Chỉ chửi', 'Chỉ đánh nhau'], 0, 'Bạo lực học đường: thể chất + tinh thần + mạng đều là bạo lực.'),
    Q('Khi chứng kiến bạn bị bắt nạt, em nên?', ['Cùng tham gia', 'Báo thầy cô / người lớn, đứng về phía nạn nhân khi an toàn', 'Im lặng', 'Cười theo'], 1, 'Người chứng kiến có vai trò quan trọng — báo ngay và hỗ trợ nạn nhân.'),
    Q('Khi bị bắt nạt, em nên?', ['Trả đũa', 'Báo cha mẹ, thầy cô, lưu bằng chứng', 'Tự chịu', 'Bỏ học'], 1, 'Báo người lớn tin cậy là cách giải quyết an toàn và hiệu quả nhất.'),
    Q('Nguyên nhân chính của bạo lực học đường thường là?', ['Không nguyên nhân', 'Do tự nhiên', 'Do nạn nhân', 'Thiếu kỹ năng kiểm soát cảm xúc, hiểu sai về "mạnh"'], 3, 'Bạo lực thường xuất phát từ cảm xúc tiêu cực không được giải quyết đúng.'),
    Q('Để kiểm soát cảm xúc khi tức giận, có thể?', ['Mắng to', 'Đập đồ', 'Đánh ngay', 'Hít sâu, đếm 1-10, đi chỗ khác trước khi phản ứng'], 3, 'Kỹ thuật "tạm dừng" giúp tránh hành động trong cơn nóng giận.'),
  ]),

  M(16, 'Ôn tập giữa kỳ', [
    Q('Mục tiêu SMART gồm những yếu tố nào?', ['Càng to càng tốt', 'Đặt nhiều mục tiêu nhỏ trong cùng một ngày', 'Không thời hạn', 'Cụ thể, đo được, khả thi, có ý nghĩa, có thời hạn'], 3, 'Ôn tuần 2.'),
    Q('Khi bạn rủ làm điều xấu, em nên?', ['Im lặng theo', 'Báo ai không liên quan', 'Từ chối, khuyên bạn', 'Đồng ý'], 2, 'Ôn tuần 5.'),
    Q('Đội TNTP Hồ Chí Minh thành lập ngày nào?', ['19/5/1890', '2/9/1945', '15/5/1941', '7/5/1954'], 2, 'Ôn tuần 9.'),
    Q('Nhóm Holland "Social" hợp nghề nào?', ['Hoạ sĩ', 'Kỹ sư máy', 'Kế toán', 'Giáo viên, y tá, công tác xã hội'], 3, 'Ôn tuần 11.'),
    Q('Khi bị bắt nạt trên mạng, em nên?', ['Chụp bằng chứng, báo người lớn', 'Tự chịu', 'Trả đũa nặng hơn', 'Im lặng'], 0, 'Ôn tuần 14.'),
  ]),

  M(17, 'Tham gia hoạt động Đội — chi đội tổ chức', [
    Q('Vai trò của "chi đội trưởng" là?', ['Không có vai trò', 'Chỉ thu tiền', 'Lãnh đạo chi đội, tổ chức hoạt động', 'Chỉ hô khẩu hiệu'], 2, 'Chi đội trưởng dẫn dắt chi đội thực hiện hoạt động và phong trào.'),
    Q('Khi được phân công nhiệm vụ trong chi đội, em nên?', ['Đùn đẩy', 'Bỏ qua', 'Đổ lỗi', 'Nhận và hoàn thành đúng hạn'], 3, 'Tinh thần trách nhiệm là điều quan trọng nhất khi nhận nhiệm vụ.'),
    Q('Hoạt động phong trào của Đội thường có mục đích?', ['Chỉ để cộng điểm rèn luyện cuối kỳ', 'Chỉ vui chơi', 'Rèn luyện đội viên, gắn kết tập thể, đóng góp xã hội', 'Lấy tiền'], 2, 'Phong trào Đội: học mà chơi, chơi mà học, đóng góp xã hội.'),
    Q('"Sinh hoạt sao nhi đồng" (đối với HS đầu cấp) là hoạt động?', ['Không tồn tại', 'Của đội viên giúp đỡ và dạy nhi đồng', 'Của thầy cô', 'Của cha mẹ'], 1, 'Đội viên là anh chị phụ trách sao nhi đồng — dạy 5 điều Bác dạy.'),
    Q('Tham gia hoạt động Đội tích cực giúp em?', ['Trưởng thành, có kỹ năng lãnh đạo, gắn kết bạn bè', 'Mệt mỏi', 'Tốn thời gian', 'Không lợi ích'], 0, 'Hoạt động Đội rèn nhiều kỹ năng quý cho tương lai.'),
  ]),

  M(18, 'Kiểm tra cuối kỳ I', [
    Q('"Tự nhận thức bản thân" có lợi ích gì?', ['Hiểu mình để phát huy điểm mạnh, cải thiện điểm yếu', 'Mất tự tin', 'Không cần', 'Không có lợi'], 0, 'Tổng hợp.'),
    Q('Sai lầm khi học bài là?', ['Tóm tắt', 'Hỏi nhiều', 'Học vẹt, không hiểu', 'Làm bài tập'], 2, 'Tổng hợp.'),
    Q('Khi không đồng ý với bố mẹ, nên?', ['Đập đồ', 'Trình bày bình tĩnh, lắng nghe', 'Cãi to', 'Bỏ nhà'], 1, 'Tổng hợp.'),
    Q('Mật khẩu mạnh là?', ['123456', 'Tên mình', 'Dài ≥ 8 ký tự, kết hợp chữ-số-ký tự đặc biệt', 'Ngày sinh'], 2, 'Tổng hợp.'),
    Q('Khi chứng kiến bạn bị bắt nạt, em nên?', ['Im lặng', 'Báo thầy cô, đứng về phía nạn nhân khi an toàn', 'Tham gia', 'Cười theo'], 1, 'Tổng hợp.'),
  ]),

  // ───────────── HK2 ─────────────

  M(19, 'Phát triển bản thân — học hỏi không ngừng', [
    Q('"Mindset cầu tiến" (growth mindset) tin rằng?', ['Chỉ thiên tài mới giỏi', 'Không cần học', 'Năng lực là bẩm sinh, không thay đổi', 'Năng lực có thể phát triển qua nỗ lực và học hỏi'], 3, 'Growth mindset (Carol Dweck): năng lực phát triển qua nỗ lực, học hỏi.'),
    Q('Khi gặp thất bại, người có mindset cầu tiến sẽ?', ['Tìm cách thử lại y nguyên cách cũ', 'Coi đó là cơ hội học hỏi', 'Đổ lỗi', 'Bỏ cuộc'], 1, 'Thất bại là bài học quý, không phải thảm hoạ.'),
    Q('"Vùng an toàn" (comfort zone) là?', ['Vùng nguy hiểm', 'Vùng thi đấu', 'Vùng quen thuộc, ít thử thách', 'Vùng học tập'], 2, 'Comfort zone: nơi ta thoải mái nhưng ít phát triển.'),
    Q('Để phát triển, đôi khi cần?', ['Sợ thất bại', 'Bước ra khỏi vùng an toàn, thử điều mới', 'Tránh thử thách', 'Mãi ở vùng an toàn'], 1, 'Phát triển xảy ra ở "vùng thách thức" — vừa sức nhưng khó.'),
    Q('Học hỏi suốt đời (lifelong learning) có vai trò?', ['Không cần thiết', 'Giúp thích ứng với thế giới thay đổi nhanh', 'Lãng phí', 'Chỉ học khi còn nhỏ'], 1, 'Thế giới thay đổi nhanh → học suốt đời là cần thiết.'),
  ]),

  M(20, 'Quản lý cảm xúc', [
    Q('Khi tức giận, "tạm dừng" 10 giây có tác dụng gì?', ['Bị nghẹn', 'Giảm phản ứng bốc đồng, suy nghĩ rõ hơn', 'Tăng tức giận', 'Khiến đối phương hiểu lầm là mình thua'], 1, 'Khoảng lặng cho não vùng lý trí "đuổi kịp" cảm xúc.'),
    Q('Cảm xúc tiêu cực (buồn, giận, sợ) là?', ['Phải đè nén', 'Cấm thể hiện', 'Bình thường, ai cũng có; cần được nhận biết và xử lý', 'Là yếu đuối'], 2, 'Mọi cảm xúc đều bình thường; quan trọng là biết và xử lý lành mạnh.'),
    Q('Cách lành mạnh để giải toả cảm xúc tiêu cực?', ['Đập phá', 'Tâm sự với người tin cậy, viết nhật ký, vận động', 'Tự làm hại bản thân', 'Nhậu nhẹt'], 1, 'Cách lành mạnh: chia sẻ + viết + vận động + thư giãn.'),
    Q('"Đồng cảm" (empathy) là?', ['Phớt lờ cảm xúc người khác', 'Thương hại', 'Đặt mình vào vị trí người khác để hiểu cảm xúc của họ', 'Áp đặt'], 2, 'Empathy = hiểu và cảm cảm xúc của người khác như của chính mình.'),
    Q('Khi bạn đang buồn, lời nói tốt nhất là?', ['"Vớ vẩn"', '"Cố lên đi"', '"Có gì mà buồn"', '"Mình ở đây, kể đi"'], 3, 'Lắng nghe và đồng hành tốt hơn là phán xét hay khuyên vội.'),
  ]),

  M(21, 'Định hướng nghề nghiệp — nghề trong các lĩnh vực', [
    Q('Nghề trong lĩnh vực "y tế" gồm?', ['Nông dân', 'Lập trình viên', 'Bác sĩ, y tá, dược sĩ, kỹ thuật viên y', 'Hoạ sĩ'], 2, 'Lĩnh vực y tế bao gồm nhiều nghề khác nhau quanh chăm sóc sức khoẻ.'),
    Q('Nghề "kỹ sư phần mềm" thuộc lĩnh vực nào?', ['Công nghệ thông tin', 'Điện - điện tử', 'Nghệ thuật', 'Nông nghiệp'], 0, 'Kỹ sư phần mềm là một nghề điển hình của lĩnh vực CNTT.'),
    Q('Nghề "nông dân hiện đại / kỹ sư nông nghiệp" cần kỹ năng gì?', ['Chỉ may mắn', 'Kiến thức sinh học, kỹ thuật, công nghệ canh tác', 'Không cần kiến thức', 'Chỉ sức lao động'], 1, 'Nông nghiệp hiện đại cần khoa học + công nghệ + kỹ năng quản lý.'),
    Q('Nghề "giáo viên" có yêu cầu phẩm chất nào quan trọng?', ['Yêu trẻ, kiên nhẫn, hiểu tâm lý', 'Không quan tâm', 'Lạnh lùng', 'Hung hăng'], 0, 'Giáo viên cần yêu trẻ + kiên nhẫn + kỹ năng sư phạm.'),
    Q('Nghề "nhà báo" có yêu cầu gì?', ['Không cần viết', 'Bí mật', 'Khả năng viết tốt, tìm kiếm thông tin, trung thực', 'Bịa đặt'], 2, 'Nhà báo cần kỹ năng viết + điều tra + đạo đức nghề nghiệp.'),
  ]),

  M(22, 'Tìm hiểu bản thân trong hướng nghiệp', [
    Q('Để biết mình hợp nghề gì, có thể làm bài test nào?', ['Không cần test', 'Test IQ để biết nghề phù hợp', 'Test sở thích nghề nghiệp (Holland, MBTI...)', 'Hỏi cảm nhận của bạn thân về mình'], 2, 'Các bài test khoa học giúp định hướng sơ bộ, không phải định mệnh.'),
    Q('Khi kết quả test cho thấy em hợp nghề "X", em nên?', ['Bỏ học', 'Phớt lờ', 'Tin tuyệt đối', 'Coi là tham khảo, tìm hiểu thêm nghề đó'], 3, 'Test là tham khảo; quyết định cần kết hợp tìm hiểu thực tế.'),
    Q('Khi em rất thích một nghề mà chưa có năng lực, nên?', ['Học và rèn luyện để phát triển năng lực', 'Đổi nghề khác', 'Đợi may mắn', 'Bỏ ngay'], 0, 'Đam mê + nỗ lực rèn luyện → năng lực sẽ phát triển.'),
    Q('Khi cha mẹ định hướng nghề khác với mong muốn của em, nên?', ['Bỏ học', 'Trao đổi cởi mở, chia sẻ mong muốn và lý do', 'Im lặng theo', 'Cãi lại'], 1, 'Đối thoại + tôn trọng nhau là cách tốt nhất để giải quyết khác biệt.'),
    Q('"Nghề nghiệp" nào hiện không nhiều thay đổi trong 50 năm tới?', ['Không có nghề nào không thay đổi — mọi nghề đều thay đổi', 'Nông dân', 'Tất cả nghề đều giống nhau', 'Giáo viên'], 0, 'Công nghệ làm mọi nghề thay đổi → cần học suốt đời.'),
  ]),

  M(23, 'Văn hoá ứng xử nơi công cộng', [
    Q('Trên xe buýt, hành vi đẹp là?', ['Vứt rác', 'Chiếm ghế', 'Nhường ghế cho người già, trẻ em, phụ nữ có thai, người khuyết tật', 'Nói chuyện to'], 2, 'Văn hoá xe buýt: nhường ghế cho người ưu tiên.'),
    Q('Khi vào thư viện, nên?', ['Giữ trật tự, không nói to', 'Nghe nhạc to', 'Cười đùa lớn', 'Ăn uống'], 0, 'Thư viện là nơi tập trung — cần giữ yên tĩnh tuyệt đối.'),
    Q('Trong rạp chiếu phim, không nên?', ['Cười đúng cảnh hài', 'Im lặng xem', 'Dùng điện thoại sáng, nói chuyện to', 'Tắt máy điện thoại'], 2, 'Điện thoại sáng + nói to làm phiền người xem khác.'),
    Q('Khi xếp hàng, nên?', ['Nhờ người quen đứng trước giữ chỗ', 'Chen lên', 'Cãi nhau', 'Đứng đúng thứ tự, không chen ngang'], 3, 'Xếp hàng là quy tắc văn minh cơ bản.'),
    Q('Khi đi vệ sinh công cộng, nên?', ['Vứt rác', 'Vẽ bậy', 'Giữ sạch, không vẽ bậy, dội nước sạch sẽ', 'Để bẩn'], 2, 'Giữ vệ sinh nơi công cộng cho người sau.'),
  ]),

  M(24, 'Tiêu dùng thông minh', [
    Q('"Tiêu dùng thông minh" nghĩa là?', ['Mua đắt nhất', 'Mua đúng cái cần, đúng giá, đúng chất lượng', 'Mua càng nhiều càng tốt', 'Mua không suy nghĩ'], 1, 'Tiêu dùng thông minh: dựa trên nhu cầu, đánh giá kỹ trước khi mua.'),
    Q('Trước khi mua một món đồ, nên?', ['Theo bạn bè', 'Hỏi: Mình có thực sự cần không?', 'Theo quảng cáo', 'Mua liền tức khắc'], 1, 'Tự hỏi "có cần không" giúp tránh chi tiêu không cần thiết.'),
    Q('Khi đọc quảng cáo, em nên?', ['Phân tích cẩn thận, so sánh, không tin tuyệt đối', 'Mua ngay', 'Đăng ký mọi thứ', 'Tin hết'], 0, 'Quảng cáo có mục đích bán hàng → cần đánh giá tỉnh táo.'),
    Q('"Ngân sách cá nhân" giúp em?', ['Quản lý tiền tiêu vặt, tránh hết tiền', 'Chỉ cần thiết với người lớn đi làm', 'Khó hiểu', 'Hạn chế tự do'], 0, 'Có ngân sách giúp kiểm soát chi tiêu và đạt mục tiêu tiết kiệm.'),
    Q('"Tiết kiệm" có ý nghĩa gì?', ['Là tiêu càng ít càng tốt mỗi ngày', 'Dành một phần tiền cho mục tiêu lớn hơn / tương lai', 'Không tiêu gì', 'Keo kiệt'], 1, 'Tiết kiệm là kỹ năng sống quan trọng cho tương lai.'),
  ]),

  M(25, 'Bảo vệ môi trường — hành động nhỏ', [
    Q('"Rác thải nhựa" gây hại lâu dài vì?', ['Tốt cho cây', 'Vô hại', 'Phân huỷ nhanh', 'Khó phân huỷ (hàng trăm năm), gây ô nhiễm đất, nước, biển'], 3, 'Nhựa cần hàng trăm năm để phân huỷ → là vấn đề môi trường lớn.'),
    Q('Hành động đơn giản để giảm rác nhựa là?', ['Mang bình nước cá nhân, túi vải đi chợ', 'Dùng càng nhiều ống hút nhựa càng tốt', 'Không quan tâm', 'Mua đồ uống chai nhỏ thường xuyên'], 0, 'Giảm dùng đồ nhựa 1 lần là cách thực tế nhất.'),
    Q('"Tái chế" (recycle) là gì?', ['Chôn rác', 'Vứt rác', 'Đốt rác', 'Biến rác thành sản phẩm/nguyên liệu mới'], 3, 'Recycle: rác → nguyên liệu → sản phẩm mới.'),
    Q('Phân loại rác tại nguồn giúp?', ['Tăng rác', 'Tốn thời gian', 'Tái chế hiệu quả hơn, giảm rác chôn lấp', 'Chỉ là trách nhiệm của công ty môi trường'], 2, 'Phân loại đúng là bước đầu giúp tái chế hiệu quả.'),
    Q('Khi thấy người vứt rác bừa, em nên?', ['Đánh nhau', 'Lịch sự nhắc nhở; nếu không thể, tự nhặt nếu an toàn', 'Học theo', 'Chửi mắng'], 1, 'Hành xử văn minh + bằng hành động làm gương.'),
  ]),

  M(26, 'Tiết kiệm năng lượng và nước', [
    Q('Hành động tiết kiệm điện tại nhà?', ['Bật mọi thứ', 'Tắt đèn/quạt khi không dùng, mở rèm lấy ánh sáng tự nhiên', 'Mở điều hoà 18 độ', 'Bật điều hoà 16 độ để mau lạnh rồi tắt'], 1, 'Tắt thiết bị khi không dùng + tận dụng ánh sáng tự nhiên.'),
    Q('Hành động tiết kiệm nước?', ['Khoá vòi khi đánh răng, sửa vòi rò rỉ', 'Để vòi chảy liên tục', 'Tắm cực lâu', 'Hứng nước đầy bồn để dùng dần cả ngày'], 0, 'Khoá vòi + sửa rò rỉ → tiết kiệm hàng nghìn lít/năm.'),
    Q('Vì sao cần tiết kiệm năng lượng?', ['Bảo vệ tài nguyên, giảm phát thải, tiết kiệm chi phí', 'Không có lý do', 'Hại sức khoẻ', 'Bất tiện'], 0, 'Tiết kiệm năng lượng vừa bảo vệ môi trường vừa tiết kiệm tiền.'),
    Q('Đèn LED so với đèn sợi đốt?', ['Tốn điện hơn', 'Giống nhau', 'Không sáng bằng', 'Tiết kiệm điện hơn nhiều, bền hơn'], 3, 'Đèn LED tiết kiệm 80-90% điện so với đèn sợi đốt và bền hơn.'),
    Q('Vào mùa nóng, để tiết kiệm điều hoà nên?', ['Đặt 25-26 độ, đóng kín cửa, dùng thêm quạt', 'Bật cả ngày đêm', 'Mở cửa', 'Mở 18 độ'], 0, 'Nhiệt độ 25-26°C kết hợp quạt là hiệu quả nhất.'),
  ]),

  M(27, 'Tái chế và sáng tạo từ vật bỏ', [
    Q('"Upcycling" khác "Recycling" ở điểm gì?', ['Không có khác', 'Upcycling: tạo sản phẩm mới có giá trị cao hơn rác', 'Upcycling là vứt rác', 'Hoàn toàn giống nhau'], 1, 'Upcycling: tái chế sáng tạo, sản phẩm có giá trị mới và thẩm mỹ.'),
    Q('Ví dụ về upcycling là?', ['Mua thêm chai mới', 'Biến chai nhựa thành chậu cây', 'Vứt rác', 'Đốt rác'], 1, 'Chai nhựa → chậu cây = ví dụ điển hình của upcycling.'),
    Q('Khi làm sản phẩm tái chế ở trường, mục tiêu là?', ['Chỉ vui chơi', 'Không có mục tiêu', 'Sáng tạo + nâng cao ý thức bảo vệ môi trường', 'Lãng phí'], 2, 'Hoạt động tái chế ở trường: vừa sáng tạo vừa giáo dục môi trường.'),
    Q('Vật bỏ nào có thể tái sử dụng dễ trong lớp?', ['Pin hỏng (cần xử lý riêng)', 'Vỏ hộp, chai nhựa, giấy báo, lon', 'Thuỷ tinh vỡ (nguy hiểm)', 'Hoá chất độc'], 1, 'Vật liệu an toàn dễ tái chế: hộp giấy, chai nhựa, giấy báo.'),
    Q('Ý tưởng upcycling giấy báo cũ?', ['Để mốc', 'Đốt bỏ', 'Vứt thẳng vào sọt rác chung', 'Cuộn thành ống làm khung tranh, túi giấy, đồ thủ công'], 3, 'Giấy báo cũ có thể trở thành nhiều sản phẩm sáng tạo đẹp.'),
  ]),

  M(28, 'Tham gia hoạt động cộng đồng', [
    Q('"Hoạt động cộng đồng" là gì?', ['Hoạt động vì lợi ích chung của một cộng đồng', 'Hoạt động kinh doanh', 'Hoạt động cá nhân', 'Hoạt động riêng tư'], 0, 'Hoạt động cộng đồng: thiện nguyện, môi trường, văn hoá vì cộng đồng.'),
    Q('Tham gia "Mùa hè xanh / Hoa phượng đỏ" là?', ['Hoạt động học tập', 'Hoạt động tình nguyện vì cộng đồng', 'Hoạt động cá nhân', 'Lễ hội thường'], 1, 'Các phong trào tình nguyện của thanh thiếu niên trong dịp hè.'),
    Q('Khi tham gia hoạt động cộng đồng, em học được?', ['Không có gì', 'Kỹ năng sống, tinh thần phục vụ, mở rộng quan hệ', 'Mất thời gian', 'Chỉ mệt'], 1, 'Hoạt động cộng đồng là trường học lớn ngoài lớp.'),
    Q('Khi tham gia thiện nguyện, thái độ nên?', ['Tự cao', 'Thương hại', 'Khoe khoang', 'Tôn trọng người được giúp, không kẻ cả'], 3, 'Người được giúp cũng có nhân phẩm; cần tôn trọng và đồng hành.'),
    Q('Hoạt động bảo vệ môi trường ở địa phương em có thể là?', ['Dọn vệ sinh khu phố, trồng cây, tuyên truyền', 'Vứt rác bừa', 'Phá cây', 'Cãi nhau'], 0, 'Có nhiều cách đóng góp cho môi trường ngay tại nơi mình ở.'),
  ]),

  M(29, 'Sức khoẻ tinh thần — chăm sóc bản thân', [
    Q('"Sức khoẻ tinh thần" có vai trò?', ['Quan trọng như sức khoẻ thể chất', 'Chỉ người lớn mới có', 'Chỉ cần khi đã bị stress nặng', 'Tự nhiên'], 0, 'WHO: sức khoẻ là sự toàn diện cả thể chất, tinh thần, xã hội.'),
    Q('Dấu hiệu căng thẳng (stress) ở học sinh?', ['Năng động', 'Vui vẻ', 'Khoẻ mạnh', 'Mất ngủ, đau đầu, khó tập trung, dễ cáu'], 3, 'Stress thể hiện qua thể chất + tinh thần + hành vi.'),
    Q('Cách giảm căng thẳng lành mạnh?', ['Bỏ học', 'Vận động, nghỉ ngơi, ngủ đủ, tâm sự với người tin cậy', 'Game cả ngày', 'Ăn vặt'], 1, 'Lành mạnh: vận động + ngủ đủ + chia sẻ + sở thích.'),
    Q('Khi cảm thấy buồn kéo dài, em nên?', ['Tâm sự với người tin cậy (cha mẹ, thầy cô, chuyên gia)', 'Giấu kín', 'Tự chịu', 'Bỏ bê bản thân'], 0, 'Buồn kéo dài cần được hỗ trợ; không nên tự chịu một mình.'),
    Q('Giấc ngủ đối với học sinh THCS nên?', ['Càng ít càng tốt để có thời gian học', 'Đủ 8-9 giờ mỗi đêm', '14 giờ', '4 giờ'], 1, 'Trẻ vị thành niên cần 8-9 giờ ngủ/đêm cho não phát triển.'),
  ]),

  M(30, 'Truyền thông và mạng xã hội', [
    Q('Trước khi chia sẻ tin tức trên mạng xã hội, em nên?', ['Kiểm tra nguồn, tính xác thực', 'Tin mọi tin', 'Sửa nội dung', 'Chia sẻ liền'], 0, 'Chống tin giả: luôn kiểm tra nguồn trước khi chia sẻ.'),
    Q('"Tin giả" (fake news) gây hại vì?', ['Đáng tin', 'Lan truyền thông tin sai, gây hoang mang, thiệt hại', 'Vô hại', 'Giúp xã hội'], 1, 'Fake news là vấn nạn lớn, có thể gây thiệt hại nghiêm trọng.'),
    Q('Khi đọc một tin gây sốc, nên?', ['Bình tĩnh, kiểm tra nhiều nguồn uy tín', 'Phẫn nộ ngay', 'Lan ngay', 'Tin tuyệt đối'], 0, 'Tin càng sốc càng cần đối chiếu nhiều nguồn uy tín.'),
    Q('Sử dụng mạng xã hội lành mạnh là?', ['Đăng mọi thứ riêng tư', 'Dùng cả ngày', 'Giới hạn thời gian, tương tác tích cực, chia sẻ có ý nghĩa', 'Nói xấu người khác'], 2, 'Dùng có ý thức: giới hạn thời gian + nội dung tích cực.'),
    Q('Khi đăng bài về người khác, cần?', ['Đăng tự do', 'Được sự đồng ý của họ', 'Bí mật', 'Không cần hỏi'], 1, 'Tôn trọng quyền riêng tư: cần được đồng ý trước khi đăng về người khác.'),
  ]),

  M(31, 'Tham quan, dã ngoại - kỹ năng nhóm', [
    Q('Khi đi dã ngoại, an toàn nhất là?', ['Tách đoàn', 'Đi theo nhóm, không tách đoàn, theo hướng dẫn của giáo viên', 'Tự do tuyệt đối', 'Đi một mình'], 1, 'An toàn dã ngoại: đoàn kết, theo hướng dẫn, không tách lẻ.'),
    Q('Khi đi vào khu vực rừng/biển, cần chuẩn bị gì?', ['Đồ ăn nhanh', 'Mũ, nước, kem chống nắng, áo dài tay', 'Áo phông', 'Không cần'], 1, 'Chuẩn bị bảo vệ: mũ + nước + kem chống nắng + quần áo phù hợp.'),
    Q('Khi gặp người lạ rủ đi cùng trong dã ngoại, nên?', ['Đi theo', 'Tin tưởng', 'Từ chối, báo giáo viên', 'Cho địa chỉ'], 2, 'Không đi theo người lạ; báo giáo viên/người lớn ngay.'),
    Q('Khi cả nhóm cần ra quyết định, cách dân chủ là?', ['Đánh nhau', 'Một người quyết', 'Thảo luận và bỏ phiếu', 'Để nhóm trưởng tự quyết định cho nhanh'], 2, 'Dân chủ: thảo luận + bỏ phiếu là cách văn minh nhất.'),
    Q('Khi giao nhiệm vụ trong nhóm, nên?', ['Áp đặt', 'Bỏ qua', 'Lười nhất làm', 'Dựa trên sở trường và sẵn lòng của mỗi người'], 3, 'Giao việc đúng người + tôn trọng → nhóm làm việc hiệu quả.'),
  ]),

  M(32, 'Bình đẳng giới và tôn trọng đa dạng', [
    Q('"Bình đẳng giới" nghĩa là?', ['Nam quan trọng hơn', 'Nữ quan trọng hơn', 'Không liên quan', 'Nam và nữ có quyền và cơ hội ngang nhau'], 3, 'Bình đẳng giới: cơ hội và quyền lợi như nhau, không phân biệt.'),
    Q('Định kiến "việc nhà chỉ dành cho nữ" là?', ['Tự nhiên', 'Sai — việc nhà là trách nhiệm chung', 'Đúng một phần vì nữ khéo hơn', 'Truyền thống'], 1, 'Việc nhà là trách nhiệm chung của mọi thành viên, không phân giới.'),
    Q('Khi bạn nam thích nấu ăn, hành xử đúng là?', ['Coi thường', 'Tôn trọng và khuyến khích', 'Cười nhạo', 'Cấm cản'], 1, 'Sở thích không phân biệt giới; cần tôn trọng cá nhân.'),
    Q('Khi bạn nữ thích chơi đá bóng, hành xử đúng là?', ['Cười nhạo', 'Đuổi đi', 'Tôn trọng và cùng chơi', 'Khuyên bạn chọn môn thể thao khác phù hợp hơn'], 2, 'Mọi giới đều có quyền theo đuổi sở thích của mình.'),
    Q('Tôn trọng "đa dạng" (diversity) nghĩa là?', ['Bài xích người khác', 'Chấp nhận và tôn trọng sự khác biệt giữa người', 'Bắt mọi người giống nhau', 'Phân biệt'], 1, 'Đa dạng là sức mạnh; tôn trọng đa dạng là văn minh.'),
  ]),

  M(33, 'Kế hoạch nghề nghiệp tương lai', [
    Q('Để lập kế hoạch nghề nghiệp tương lai, bước đầu là?', ['Theo bạn', 'Chọn nghề ngẫu nhiên', 'Hiểu bản thân (sở thích, năng lực, giá trị)', 'Theo trào lưu'], 2, 'Bước 1 hướng nghiệp: hiểu chính mình.'),
    Q('Bước tiếp theo sau hiểu bản thân là?', ['Bỏ cuộc', 'Theo cha mẹ', 'Chọn nghề có thu nhập cao nhất hiện nay', 'Tìm hiểu các nghề và yêu cầu của chúng'], 3, 'Bước 2: tìm hiểu nghề (yêu cầu, công việc, triển vọng).'),
    Q('Để chuẩn bị cho nghề nghiệp tương lai từ bây giờ, em có thể?', ['Không cần chuẩn bị', 'Học tốt + rèn kỹ năng + trải nghiệm thực tế', 'Đợi đến lớp 12', 'Chỉ thi'], 1, 'Hướng nghiệp là cả quá trình từ THCS; tích luỹ sớm + đa dạng.'),
    Q('"Hồ sơ năng lực bản thân" (portfolio) là gì?', ['Bằng đại học', 'Thẻ học sinh', 'Tập hợp thành tích, sản phẩm, trải nghiệm của em', 'Quần áo'], 2, 'Portfolio: bằng chứng cho năng lực và quá trình phát triển.'),
    Q('Nghề nghiệp tương lai sẽ?', ['Tất cả đều biến mất', 'Giữ nguyên', 'Nhiều nghề mới xuất hiện, nhiều nghề biến mất', 'Không có gì mới'], 2, 'Công nghệ + xã hội thay đổi → bản đồ nghề liên tục biến động.'),
  ]),

  M(34, 'Trách nhiệm công dân nhỏ tuổi', [
    Q('Học sinh là "công dân nhỏ tuổi" có những quyền nào?', ['Không có quyền', 'Quyền được học, được bảo vệ, được chăm sóc, được phát biểu', 'Chỉ có nghĩa vụ', 'Quyền tuỳ ý'], 1, 'Trẻ em có quyền theo Công ước Quyền Trẻ em và pháp luật Việt Nam.'),
    Q('Cùng với quyền, học sinh có nghĩa vụ nào?', ['Không có nghĩa vụ', 'Học tập, tôn trọng pháp luật, gia đình, thầy cô', 'Chỉ cần thực hiện khi có người nhắc', 'Chỉ vui chơi'], 1, 'Quyền đi đôi với nghĩa vụ — học sinh có trách nhiệm với bản thân và xã hội.'),
    Q('Khi thấy hành vi vi phạm pháp luật ở gần, em nên?', ['Báo người lớn / cơ quan chức năng', 'Quay video đăng mạng', 'Mặc kệ', 'Tham gia'], 0, 'Báo người lớn / 113 / 114... là cách an toàn và đúng.'),
    Q('Là công dân nhỏ tuổi, em có thể đóng góp gì cho đất nước?', ['Chỉ chờ lớn', 'Học tập tốt, rèn đạo đức, giúp gia đình và cộng đồng', 'Không có gì', 'Quá nhỏ để đóng góp'], 1, 'Mỗi hành động tốt hàng ngày là đóng góp cho đất nước.'),
    Q('"Tinh thần yêu nước" của học sinh thể hiện qua?', ['Chỉ trên mạng', 'Không cần thể hiện', 'Học tập + giữ gìn văn hoá + bảo vệ môi trường + tôn trọng pháp luật', 'Chỉ hô khẩu hiệu'], 2, 'Yêu nước thể hiện qua hành động cụ thể hàng ngày.'),
  ]),

  M(35, 'Kiểm tra cuối kỳ II — tổng hợp', [
    Q('Mindset cầu tiến tin rằng?', ['Năng lực là bẩm sinh', 'Không cần học', 'Chỉ thiên tài giỏi', 'Năng lực phát triển qua nỗ lực'], 3, 'Ôn tuần 19.'),
    Q('Khi tức giận, hành động đầu tiên nên là?', ['Lớn tiếng để đối phương biết mình giận', 'Đập đồ', 'Nhắn tin trách móc ngay cho bạn bè', 'Tạm dừng, hít sâu, đếm 1-10'], 3, 'Ôn tuần 20.'),
    Q('"Upcycling" khác "Recycling" ở chỗ?', ['Không có gì khác', 'Upcycling = vứt rác', 'Hoàn toàn giống nhau', 'Tạo sản phẩm có giá trị cao hơn rác ban đầu'], 3, 'Ôn tuần 27.'),
    Q('Giấc ngủ cần thiết cho học sinh THCS là?', ['4 giờ', '14 giờ', '8-9 giờ/đêm', 'Chỉ cần ngủ bù vào cuối tuần'], 2, 'Ôn tuần 29.'),
    Q('Bình đẳng giới nghĩa là?', ['Nam quan trọng hơn', 'Nữ quan trọng hơn', 'Nam và nữ có quyền và cơ hội ngang nhau', 'Không liên quan'], 2, 'Ôn tuần 32.'),
  ]),
];

export const S7HDTN_SCENARIOS = indexBy(S7HDTN_WEEKS);
