// ============================================================
// Lớp 8 · GDCD — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Đạo đức, pháp luật, kỹ năng sống theo CTGD 2018 môn GDCD 8.
// ID prefix: "S8GDCD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8GDCD', 'gdcd', n, title, qs, opts);

export const S8GDCD_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Tôn trọng lẽ phải', [
    Q('Tôn trọng lẽ phải là gì?', ['Làm theo ý kiến số đông', 'Công nhận, ủng hộ, làm theo điều đúng đắn, đạo lý', 'Im lặng trước cái sai', 'Chỉ nghe theo người lớn'], 1, 'Tôn trọng lẽ phải = công nhận, ủng hộ và làm theo điều đúng đắn, phù hợp đạo lý và lợi ích chung.'),
    Q('Hành vi nào sau đây thể hiện tôn trọng lẽ phải?', ['Bao che bạn quay cóp', 'Phê bình bạn vi phạm dù sợ bạn giận', 'Im lặng khi thấy bạn nói sai', 'Theo nhóm bạn xấu cho an toàn'], 1, 'Người tôn trọng lẽ phải dám lên tiếng, phê bình cái sai dù phải đối mặt khó khăn.'),
    Q('Ý nghĩa của tôn trọng lẽ phải?', ['Giúp xã hội ổn định, lành mạnh', 'Làm mọi người ghét mình', 'Mất bạn bè', 'Không có ý nghĩa gì'], 0, 'Tôn trọng lẽ phải giúp con người ứng xử phù hợp, làm xã hội ổn định, văn minh.'),
    Q('Trái với tôn trọng lẽ phải là?', ['Trung thực', 'Xuyên tạc, bóp méo sự thật', 'Dũng cảm', 'Thẳng thắn'], 1, 'Hành vi xuyên tạc, vu khống, bao che cái sai là trái với tôn trọng lẽ phải.'),
    Q('Tình huống: bạn em chép bài kiểm tra. Em nên?', ['Cùng chép cho vui', 'Khuyên bạn dừng và báo thầy cô nếu bạn không nghe', 'Mặc kệ', 'Khen bạn thông minh'], 1, 'Khuyên bạn và nhắc nhở là cách thể hiện tôn trọng lẽ phải, đồng thời giữ tình bạn.'),
  ]),

  M(2, 'Liêm khiết', [
    Q('Liêm khiết có nghĩa là?', ['Sống trong sạch, không hám lợi, không nhỏ nhen', 'Sống giàu có', 'Sống tiết kiệm', 'Sống cô độc'], 0, 'Liêm khiết = phẩm chất sống trong sạch, không vì tư lợi mà làm điều sai.'),
    Q('Người liêm khiết thường?', ['Tham ô của công', 'Nhận hối lộ', 'Không tham của không phải của mình', 'Lợi dụng chức vụ'], 2, 'Người liêm khiết không tham lam tài sản công và của người khác.'),
    Q('Câu tục ngữ nào nói về liêm khiết?', ['Đói cho sạch, rách cho thơm', 'Một con ngựa đau cả tàu bỏ cỏ', 'Ăn quả nhớ kẻ trồng cây', 'Lá lành đùm lá rách'], 0, '"Đói cho sạch, rách cho thơm" đề cao liêm khiết dù khó khăn.'),
    Q('Ý nghĩa của liêm khiết với xã hội?', ['Làm xã hội nghèo đi', 'Giúp xã hội trong sạch, văn minh', 'Không có ý nghĩa', 'Tạo bất công'], 1, 'Liêm khiết là nền tảng đạo đức, giúp xã hội phát triển bền vững và công bằng.'),
    Q('Tình huống: nhặt được ví có 5 triệu. Em sẽ?', ['Lấy luôn vì không ai biết', 'Tìm cách trả lại chủ', 'Chia cho bạn bè', 'Mua đồ chơi'], 1, 'Hành vi liêm khiết là trả lại, dù không ai biết.'),
  ]),

  M(3, 'Tôn trọng người khác', [
    Q('Tôn trọng người khác là?', ['Đánh giá đúng mực, coi trọng phẩm giá và quyền lợi của họ', 'Sợ hãi họ', 'Nhường nhịn vô điều kiện', 'Chỉ tôn trọng người giàu'], 0, 'Tôn trọng người khác = đánh giá đúng mực và coi trọng họ trong mọi hoàn cảnh.'),
    Q('Biểu hiện tôn trọng người khác?', ['Cười nhạo khi bạn nói sai', 'Lắng nghe, không ngắt lời', 'Nói xấu sau lưng', 'Bắt nạt người yếu'], 1, 'Lắng nghe, không cười nhạo, không ngắt lời là biểu hiện cơ bản của tôn trọng.'),
    Q('Hành vi nào KHÔNG tôn trọng người khác?', ['Chào hỏi lễ phép', 'Chế giễu khuyết tật của người khác', 'Giúp đỡ người già', 'Lắng nghe ý kiến'], 1, 'Chế giễu khuyết tật là vi phạm phẩm giá người khác.'),
    Q('Vì sao phải tôn trọng người khác?', ['Để được người khác tôn trọng lại', 'Để được khen', 'Để có quà', 'Vì pháp luật bắt buộc tất cả'], 0, 'Mình tôn trọng người khác thì mới được người khác tôn trọng lại — quan hệ hai chiều.'),
    Q('Tôn trọng người khác thể hiện qua?', ['Lời nói, hành vi, thái độ', 'Chỉ lời nói', 'Chỉ hành vi', 'Chỉ trang phục'], 0, 'Tôn trọng thể hiện qua tổng hoà lời nói, hành vi và thái độ ứng xử.'),
  ]),

  M(4, 'Giữ chữ tín', [
    Q('Giữ chữ tín là?', ['Coi trọng lòng tin, giữ đúng lời hứa', 'Khoe khoang', 'Nói nhiều', 'Im lặng'], 0, 'Giữ chữ tín = coi trọng lòng tin của mọi người, giữ đúng lời hứa và cam kết.'),
    Q('Người giữ chữ tín thường?', ['Hứa rồi quên', 'Làm đúng những gì đã hứa', 'Hứa cho qua chuyện', 'Nói dối quanh'], 1, 'Người giữ chữ tín luôn cố gắng thực hiện đúng lời hứa.'),
    Q('Ý nghĩa của giữ chữ tín?', ['Được mọi người tin cậy, hợp tác', 'Bị mọi người xa lánh', 'Mất bạn bè', 'Không có ý nghĩa'], 0, 'Giữ chữ tín giúp xây dựng uy tín, được mọi người tin cậy trong công việc và đời sống.'),
    Q('Câu tục ngữ về chữ tín?', ['Nói lời phải giữ lấy lời / Đừng như con bướm đậu rồi lại bay', 'Đèn nhà ai nấy rạng', 'Tay làm hàm nhai', 'Ăn cây nào rào cây nấy'], 0, '"Nói lời phải giữ lấy lời" trực tiếp nói về chữ tín.'),
    Q('Khi không thể giữ lời hứa, nên?', ['Bỏ trốn', 'Báo trước và xin lỗi, đề nghị bù đắp', 'Đổ lỗi cho người khác', 'Im lặng coi như chưa hứa'], 1, 'Báo trước, xin lỗi chân thành và đề nghị cách bù đắp là cách giữ chữ tín ngay cả khi không hoàn thành.'),
  ]),

  M(5, 'Pháp luật và kỷ luật', [
    Q('Pháp luật là?', ['Quy tắc xử sự chung, do Nhà nước ban hành, có tính bắt buộc chung', 'Quy định nội bộ trường học', 'Quy ước trong gia đình', 'Lời khuyên của người lớn'], 0, 'Pháp luật do Nhà nước ban hành, có tính bắt buộc chung với mọi công dân.'),
    Q('Kỷ luật là?', ['Quy định của một tổ chức, tập thể (trường, cơ quan)', 'Pháp luật', 'Phong tục', 'Lễ giáo'], 0, 'Kỷ luật = quy định của tổ chức, tập thể, chỉ áp dụng với thành viên tổ chức đó.'),
    Q('Mối quan hệ pháp luật và kỷ luật?', ['Đối lập nhau', 'Kỷ luật của tổ chức phải tuân theo pháp luật', 'Không liên quan', 'Kỷ luật cao hơn pháp luật'], 1, 'Kỷ luật của tổ chức phải phù hợp, không trái pháp luật.'),
    Q('Vai trò của pháp luật?', ['Quản lý xã hội, bảo vệ quyền công dân', 'Trừng phạt mọi người', 'Hạn chế tự do', 'Phân biệt giàu nghèo'], 0, 'Pháp luật là công cụ quản lý xã hội và bảo vệ quyền, lợi ích hợp pháp của công dân.'),
    Q('HS chấp hành nội quy trường thể hiện?', ['Tinh thần kỷ luật', 'Sợ thầy cô', 'Lười biếng', 'Khoe khoang'], 0, 'Chấp hành nội quy = thực hiện kỷ luật của nhà trường.'),
  ]),

  M(6, 'Xây dựng tình bạn trong sáng, lành mạnh', [
    Q('Tình bạn trong sáng, lành mạnh có đặc điểm?', ['Bình đẳng, tôn trọng, tin cậy, chân thành', 'Lợi dụng nhau', 'Bao che cái sai', 'Ganh đua, đố kỵ'], 0, 'Tình bạn lành mạnh dựa trên bình đẳng, tôn trọng, chân thành và tin cậy lẫn nhau.'),
    Q('Biểu hiện của tình bạn KHÔNG lành mạnh?', ['Cùng học tập tiến bộ', 'Rủ rê chơi điện tử quên học', 'Giúp nhau khi khó khăn', 'Chia sẻ buồn vui'], 1, 'Rủ nhau làm điều xấu, ảnh hưởng học tập là biểu hiện tình bạn không lành mạnh.'),
    Q('Ý nghĩa của tình bạn đẹp?', ['Giúp ta hoàn thiện nhân cách, tự tin', 'Không có ý nghĩa', 'Mất thời gian', 'Tốn tiền'], 0, 'Tình bạn đẹp giúp ta tiến bộ, hoàn thiện nhân cách và vượt qua khó khăn.'),
    Q('Để có tình bạn đẹp, cần?', ['Chân thành, tin cậy, sẵn sàng giúp đỡ', 'Ganh ghét', 'Đố kỵ', 'Khoe khoang'], 0, 'Chân thành, tin cậy, biết chia sẻ và sẵn lòng giúp đỡ là nền tảng tình bạn đẹp.'),
    Q('Khi bạn mắc sai lầm, người bạn tốt nên?', ['Bao che', 'Khuyên bảo chân thành, giúp bạn sửa sai', 'Tố cáo công khai để bạn xấu hổ', 'Tránh xa'], 1, 'Người bạn tốt khuyên bảo chân thành để bạn nhận ra và sửa sai.'),
  ]),

  M(7, 'Tôn trọng, học hỏi các dân tộc khác', [
    Q('Tôn trọng các dân tộc khác là?', ['Coi trọng giá trị văn hoá, truyền thống của các dân tộc, các nước', 'Khinh thường các nước nhỏ', 'Chỉ tôn trọng nước giàu', 'Không quan tâm'], 0, 'Tôn trọng dân tộc khác là coi trọng nền văn hoá, truyền thống của mọi quốc gia.'),
    Q('Học hỏi dân tộc khác có ý nghĩa?', ['Giúp phát triển đất nước, không lạc hậu', 'Mất bản sắc dân tộc', 'Phụ thuộc nước ngoài', 'Vô ích'], 0, 'Học hỏi tinh hoa các dân tộc giúp Việt Nam tiến bộ, hội nhập.'),
    Q('Khi học hỏi dân tộc khác, cần?', ['Chọn lọc, phù hợp với điều kiện VN', 'Sao chép máy móc', 'Từ chối hoàn toàn', 'Chỉ học cái xấu'], 0, 'Phải có chọn lọc, tiếp thu tinh hoa phù hợp văn hoá và điều kiện Việt Nam.'),
    Q('Việt Nam đã tiếp thu được điều gì từ thế giới?', ['Khoa học công nghệ, quản lý hiện đại', 'Chỉ phong tục lạc hậu', 'Không có gì', 'Chỉ ngôn ngữ'], 0, 'VN tiếp thu khoa học, công nghệ, quản lý hiện đại để xây dựng đất nước.'),
    Q('Hành vi sai lầm khi tiếp xúc văn hoá nước ngoài?', ['Sùng ngoại, bài nội', 'Chọn lọc tiếp thu', 'Giữ bản sắc dân tộc', 'Học ngoại ngữ'], 0, 'Sùng ngoại tuyệt đối, coi thường dân tộc mình là thái độ sai lầm.'),
  ]),

  M(8, 'Quyền sở hữu tài sản và nghĩa vụ tôn trọng tài sản của người khác', [
    Q('Quyền sở hữu tài sản gồm?', ['Chiếm hữu, sử dụng, định đoạt', 'Chỉ sử dụng', 'Chỉ định đoạt', 'Chỉ chiếm hữu'], 0, 'Quyền sở hữu gồm 3 quyền năng: chiếm hữu, sử dụng và định đoạt.'),
    Q('Quyền sử dụng là?', ['Khai thác công dụng, hưởng lợi từ tài sản', 'Bán tài sản', 'Phá huỷ tài sản', 'Cho thuê'], 0, 'Sử dụng = khai thác công dụng, hưởng lợi (vd: ở nhà, đi xe).'),
    Q('Quyền định đoạt là?', ['Quyết định số phận tài sản (bán, tặng, phá huỷ)', 'Chỉ trông giữ', 'Chỉ sử dụng', 'Chỉ thừa kế'], 0, 'Định đoạt = quyết định số phận pháp lý của tài sản: bán, tặng cho, phá huỷ…'),
    Q('Nghĩa vụ của công dân?', ['Tôn trọng tài sản của người khác', 'Lấy tài sản người khác làm của mình', 'Phá hoại tài sản công', 'Trộm cắp khi có cơ hội'], 0, 'Mỗi công dân có nghĩa vụ tôn trọng quyền sở hữu của người khác.'),
    Q('Hành vi xâm phạm quyền sở hữu?', ['Trộm cắp, cướp giật, lừa đảo', 'Mua bán hợp pháp', 'Tặng quà', 'Cho mượn'], 0, 'Trộm cắp, cướp giật, lừa đảo… đều vi phạm quyền sở hữu, bị pháp luật xử lý.'),
  ]),

  M(9, 'Nghĩa vụ tôn trọng, bảo vệ tài sản nhà nước và lợi ích công cộng', [
    Q('Tài sản nhà nước gồm?', ['Đất đai, tài nguyên, ngân sách, doanh nghiệp nhà nước…', 'Chỉ đất đai', 'Chỉ tiền', 'Tài sản tư nhân'], 0, 'Tài sản NN gồm đất đai, rừng, khoáng sản, ngân sách, doanh nghiệp NN, công trình công…'),
    Q('Lợi ích công cộng là?', ['Lợi ích chung của xã hội', 'Lợi ích của một nhóm', 'Lợi ích cá nhân', 'Lợi ích gia đình'], 0, 'Lợi ích công cộng = lợi ích chung phục vụ toàn xã hội (đường sá, công viên, trường công…).'),
    Q('Hành vi bảo vệ tài sản công?', ['Giữ gìn bàn ghế trường học, tiết kiệm điện nước', 'Phá hoại biển báo', 'Vẽ bậy lên tường', 'Xả rác bừa bãi'], 0, 'Giữ gìn bàn ghế, tiết kiệm điện nước trường học là bảo vệ tài sản công.'),
    Q('Vi phạm bị xử lý thế nào?', ['Tuỳ mức độ: bồi thường, kỷ luật, hình sự', 'Chỉ nhắc nhở', 'Không bị gì', 'Chỉ phạt tiền'], 0, 'Tuỳ mức độ vi phạm có thể bị bồi thường, kỷ luật hành chính hoặc xử lý hình sự.'),
    Q('Học sinh có thể bảo vệ tài sản công bằng cách?', ['Tham gia vệ sinh trường lớp, tố giác hành vi phá hoại', 'Vẽ bậy', 'Bẻ cành cây', 'Phá ổ khoá'], 0, 'HS tham gia giữ vệ sinh, sửa chữa nhỏ, tố giác hành vi phá hoại là bảo vệ tài sản công.'),
  ]),

  M(10, 'Quyền khiếu nại, tố cáo của công dân', [
    Q('Khiếu nại là?', ['Đề nghị xem xét lại quyết định/hành vi xâm phạm quyền, lợi ích của MÌNH', 'Tố cáo người vi phạm pháp luật', 'Khen thưởng cán bộ', 'Đề xuất ý kiến'], 0, 'Khiếu nại = đề nghị xem xét quyết định/hành vi xâm phạm quyền lợi của BẢN THÂN người khiếu nại.'),
    Q('Tố cáo là?', ['Báo cho cơ quan có thẩm quyền về hành vi vi phạm pháp luật của bất kì ai gây thiệt hại nhà nước/công dân', 'Khiếu nại quyết định cá nhân mình', 'Khen thưởng', 'Phê bình'], 0, 'Tố cáo = báo cáo về hành vi vi phạm pháp luật của bất kì cá nhân/tổ chức nào.'),
    Q('Sự khác biệt giữa khiếu nại và tố cáo?', ['Khiếu nại bảo vệ quyền lợi mình; tố cáo bảo vệ lợi ích chung', 'Không khác', 'Khiếu nại chỉ dành cho cán bộ', 'Tố cáo chỉ dành cho người lớn'], 0, 'Khiếu nại để bảo vệ quyền lợi của chính người khiếu nại; tố cáo bảo vệ lợi ích chung hoặc người khác.'),
    Q('Ai có quyền khiếu nại, tố cáo?', ['Mọi công dân', 'Chỉ cán bộ', 'Chỉ người lớn', 'Chỉ luật sư'], 0, 'Mọi công dân đều có quyền khiếu nại, tố cáo theo Hiến pháp.'),
    Q('Khi khiếu nại, tố cáo cần?', ['Trung thực, đúng sự thật, đúng quy định pháp luật', 'Vu khống', 'Bịa đặt', 'Giấu tên'], 0, 'Người khiếu nại, tố cáo phải trung thực, đúng sự thật, chịu trách nhiệm về nội dung.'),
  ]),

  M(11, 'Quyền tự do ngôn luận', [
    Q('Tự do ngôn luận là?', ['Quyền tham gia bàn bạc, thảo luận, đóng góp ý kiến vào vấn đề chung', 'Nói gì cũng được', 'Vu khống người khác', 'Bịa đặt thông tin'], 0, 'Tự do ngôn luận = quyền tham gia bàn bạc, đóng góp ý kiến vào vấn đề chung trong khuôn khổ pháp luật.'),
    Q('Tự do ngôn luận có giới hạn?', ['Có — phải tuân theo pháp luật, không xâm phạm quyền người khác', 'Không có giới hạn', 'Chỉ giới hạn với người nghèo', 'Chỉ giới hạn với người lớn'], 0, 'Tự do ngôn luận trong khuôn khổ pháp luật, không được xâm phạm quyền và lợi ích của người khác.'),
    Q('Biểu hiện đúng của tự do ngôn luận?', ['Phát biểu ý kiến trong cuộc họp lớp', 'Tung tin sai trên mạng xã hội', 'Vu khống bạn', 'Bịa đặt thầy cô'], 0, 'Phát biểu ý kiến trong cuộc họp, đóng góp xây dựng là biểu hiện đúng.'),
    Q('Vi phạm khi sử dụng tự do ngôn luận?', ['Phát biểu xây dựng', 'Bịa đặt, vu khống, xúc phạm danh dự người khác', 'Đề xuất ý kiến', 'Phản biện có căn cứ'], 1, 'Bịa đặt, vu khống, xúc phạm là vi phạm pháp luật, sẽ bị xử lý.'),
    Q('Khi đăng bài trên mạng xã hội?', ['Cần kiểm chứng thông tin, không vu khống', 'Đăng gì cũng được', 'Sao chép không cần ghi nguồn', 'Tự do tuyệt đối'], 0, 'Mạng xã hội vẫn nằm trong khuôn khổ pháp luật — cần kiểm chứng thông tin, tôn trọng người khác.'),
  ]),

  M(12, 'Hiến pháp nước CHXHCN Việt Nam', [
    Q('Hiến pháp là?', ['Luật cơ bản, có hiệu lực pháp lý cao nhất của Nhà nước', 'Luật giao thông', 'Luật dân sự', 'Quy định nhà trường'], 0, 'Hiến pháp = luật cơ bản, có hiệu lực pháp lý cao nhất, mọi luật khác phải phù hợp Hiến pháp.'),
    Q('Hiến pháp đầu tiên của Việt Nam ban hành năm?', ['1945', '1946', '1959', '1980'], 1, 'Hiến pháp đầu tiên năm 1946, sau Cách mạng tháng Tám.'),
    Q('Hiến pháp hiện hành của VN là?', ['Hiến pháp 1980', 'Hiến pháp 1992', 'Hiến pháp 2013', 'Hiến pháp 1959'], 2, 'Hiến pháp 2013 là Hiến pháp đang có hiệu lực hiện nay.'),
    Q('Cơ quan có quyền sửa đổi Hiến pháp?', ['Quốc hội', 'Chính phủ', 'Toà án', 'Chủ tịch nước'], 0, 'Chỉ Quốc hội mới có quyền làm và sửa đổi Hiến pháp.'),
    Q('Nội dung cơ bản của Hiến pháp?', ['Chế độ chính trị, quyền nghĩa vụ công dân, tổ chức bộ máy nhà nước', 'Quy định giao thông', 'Quy định kinh doanh', 'Quy định trường học'], 0, 'Hiến pháp quy định chế độ chính trị, quyền và nghĩa vụ công dân, tổ chức bộ máy nhà nước.'),
  ]),

  M(13, 'Pháp luật nước CHXHCN Việt Nam', [
    Q('Pháp luật do ai ban hành?', ['Nhà nước', 'Cá nhân', 'Tổ chức xã hội', 'Doanh nghiệp'], 0, 'Pháp luật do Nhà nước (Quốc hội, cơ quan có thẩm quyền) ban hành.'),
    Q('Đặc điểm của pháp luật?', ['Tính quy phạm phổ biến, tính bắt buộc chung, tính xác định chặt chẽ', 'Tính tự nguyện', 'Áp dụng tuỳ ý', 'Không có hình thức'], 0, 'Pháp luật có 3 đặc điểm: phổ biến, bắt buộc chung, xác định chặt chẽ về hình thức.'),
    Q('Vai trò của pháp luật?', ['Phương tiện quản lý nhà nước, bảo vệ quyền công dân', 'Trừng phạt', 'Phân biệt giàu nghèo', 'Vô ích'], 0, 'Pháp luật là phương tiện quản lý xã hội, bảo vệ quyền và lợi ích hợp pháp của công dân.'),
    Q('Sống và làm việc theo Hiến pháp, pháp luật là?', ['Trách nhiệm của mọi công dân', 'Chỉ cán bộ', 'Chỉ người lớn', 'Tự nguyện không bắt buộc'], 0, 'Mọi công dân có nghĩa vụ sống và làm việc theo Hiến pháp và pháp luật.'),
    Q('Học sinh thực hiện pháp luật bằng cách?', ['Chấp hành nội quy, luật giao thông, không vi phạm', 'Tự do làm điều mình thích', 'Chỉ học không cần thực hành', 'Vi phạm khi không ai biết'], 0, 'HS thực hiện pháp luật qua việc chấp hành nội quy trường, luật GT, không vi phạm pháp luật.'),
  ]),

  M(14, 'Phòng chống tệ nạn xã hội', [
    Q('Tệ nạn xã hội là?', ['Hành vi sai lệch chuẩn mực đạo đức, gây hậu quả xấu cho xã hội', 'Hoạt động văn hoá', 'Hoạt động thể thao', 'Học tập'], 0, 'Tệ nạn XH = hành vi sai lệch chuẩn mực đạo đức, vi phạm pháp luật, gây hậu quả xấu.'),
    Q('Tệ nạn xã hội phổ biến gồm?', ['Cờ bạc, ma tuý, mại dâm', 'Học tập', 'Lao động', 'Thể thao'], 0, '3 tệ nạn nguy hiểm nhất: cờ bạc, ma tuý, mại dâm.'),
    Q('Tác hại của tệ nạn xã hội?', ['Huỷ hoại sức khoẻ, đạo đức, kinh tế cá nhân và XH', 'Có lợi cho xã hội', 'Không có hại', 'Chỉ ảnh hưởng cá nhân'], 0, 'Tệ nạn XH huỷ hoại sức khoẻ, đạo đức, kinh tế, gia đình và trật tự xã hội.'),
    Q('HS cần làm gì để phòng tránh?', ['Không chơi với bạn xấu, không thử ma tuý, không cờ bạc', 'Tò mò thử cho biết', 'Chơi cờ bạc giải trí', 'Bỏ học theo bạn xấu'], 0, 'Cách phòng tránh: chọn bạn tốt, không tò mò thử, tham gia hoạt động lành mạnh.'),
    Q('Khi phát hiện bạn vướng tệ nạn, nên?', ['Báo gia đình, thầy cô để giúp bạn', 'Mặc kệ', 'Cùng tham gia', 'Cô lập bạn'], 0, 'Báo người lớn để có biện pháp giúp bạn thoát khỏi tệ nạn kịp thời.'),
  ]),

  M(15, 'Phòng chống nhiễm HIV/AIDS', [
    Q('HIV/AIDS lây qua đường?', ['Máu, tình dục không an toàn, mẹ truyền con', 'Bắt tay', 'Ăn chung', 'Hắt hơi'], 0, 'HIV chỉ lây qua máu, quan hệ tình dục không an toàn và mẹ sang con.'),
    Q('HIV/AIDS KHÔNG lây qua?', ['Bắt tay, ôm, ăn uống chung', 'Truyền máu nhiễm', 'Quan hệ TD không an toàn', 'Dùng chung kim tiêm'], 0, 'HIV không lây qua tiếp xúc thông thường: bắt tay, ôm, ăn chung, hắt hơi.'),
    Q('Phòng tránh HIV/AIDS?', ['Không dùng chung kim tiêm, sống lành mạnh', 'Tránh xa người nhiễm hoàn toàn', 'Không cần phòng', 'Chỉ ăn chay'], 0, 'Không dùng chung kim tiêm, sống lành mạnh, tình dục an toàn là biện pháp chính.'),
    Q('Thái độ đúng với người nhiễm HIV?', ['Thông cảm, không kỳ thị, giúp đỡ', 'Xa lánh', 'Chế giễu', 'Cô lập'], 0, 'Người nhiễm HIV không có lỗi — cần thông cảm, không kỳ thị, giúp đỡ họ.'),
    Q('Pháp luật VN quy định?', ['Phòng chống HIV là trách nhiệm của mọi người', 'Chỉ ngành y tế lo', 'Người nhiễm phải cách ly', 'Không có quy định'], 0, 'Luật Phòng chống HIV/AIDS (2006) quy định mọi người có trách nhiệm phòng chống.'),
  ]),

  M(16, 'Phòng ngừa tai nạn vũ khí, cháy nổ và các chất độc hại', [
    Q('Vũ khí, vật liệu nổ thuộc loại?', ['Hàng cấm hoặc hạn chế lưu hành', 'Hàng tự do mua bán', 'Đồ chơi', 'Không có quy định'], 0, 'Vũ khí, vật liệu nổ là hàng đặc biệt — bị cấm hoặc hạn chế nghiêm ngặt.'),
    Q('Hành vi nào bị cấm?', ['Tự chế pháo nổ, mua bán vũ khí trái phép', 'Khai báo pháo lậu', 'Báo công an', 'Tránh xa khu vực nguy hiểm'], 0, 'Tự chế pháo, tàng trữ vũ khí trái phép là hành vi bị pháp luật nghiêm cấm.'),
    Q('Chất độc hại trong nhà gồm?', ['Thuốc trừ sâu, axit, gas', 'Đường, muối', 'Gạo, mì', 'Quần áo'], 0, 'Thuốc trừ sâu, axit, gas… là chất độc hại, cần bảo quản cẩn thận.'),
    Q('Phòng cháy ở nhà cần?', ['Tắt bếp ga sau khi nấu, không để vật cháy gần lửa', 'Để bếp ga mở', 'Đốt rác trong nhà', 'Nghịch lửa'], 0, 'Tắt bếp khi không dùng, không để vật dễ cháy gần lửa là biện pháp phòng cháy cơ bản.'),
    Q('Khi phát hiện cháy, gọi?', ['114', '113', '115', '112'], 0, '114 là số điện thoại cứu hoả ở Việt Nam.'),
  ]),

  M(17, 'Quyền và nghĩa vụ học tập', [
    Q('Quyền học tập của công dân?', ['Mọi công dân có quyền học không hạn chế, học suốt đời', 'Chỉ con nhà giàu', 'Chỉ nam giới', 'Chỉ trẻ em'], 0, 'Hiến pháp quy định mọi công dân có quyền học tập không hạn chế.'),
    Q('Nghĩa vụ học tập của trẻ em VN?', ['Hoàn thành GD phổ cập từ tiểu học đến THCS', 'Tự do bỏ học', 'Chỉ học khi muốn', 'Không có nghĩa vụ'], 0, 'Trẻ em từ 6–14 tuổi có nghĩa vụ hoàn thành GD phổ cập (tiểu học và THCS).'),
    Q('Vai trò của học tập?', ['Trang bị kiến thức, kỹ năng để phát triển bản thân và xã hội', 'Không có vai trò', 'Mất thời gian', 'Để khoe khoang'], 0, 'Học tập giúp con người có tri thức, kỹ năng để sống tốt và đóng góp cho xã hội.'),
    Q('Nhà nước có trách nhiệm?', ['Đảm bảo điều kiện học tập cho mọi công dân', 'Chỉ lo cho con cán bộ', 'Không có trách nhiệm', 'Chỉ lo bậc tiểu học'], 0, 'NN xây dựng trường, cấp học bổng, miễn giảm học phí… để mọi công dân được học.'),
    Q('HS thực hiện quyền học tập tốt nhất là?', ['Chăm chỉ, sáng tạo, học suốt đời', 'Lười biếng', 'Chỉ học khi bị ép', 'Học để đối phó'], 0, 'Chăm chỉ, sáng tạo và có ý thức học suốt đời là cách thực hiện tốt quyền học tập.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Liêm khiết là?', ['Sống trong sạch, không hám lợi', 'Sống giàu', 'Sống cô độc', 'Sống tiết kiệm'], 0, 'Định nghĩa liêm khiết.'),
    Q('Pháp luật do ai ban hành?', ['Nhà nước', 'Tổ chức XH', 'Cá nhân', 'Doanh nghiệp'], 0, 'Pháp luật là sản phẩm của Nhà nước.'),
    Q('Tình bạn lành mạnh dựa trên?', ['Bình đẳng, chân thành', 'Lợi dụng', 'Đố kỵ', 'Bao che'], 0, 'Nguyên tắc tình bạn lành mạnh.'),
    Q('Tôn trọng lẽ phải là?', ['Công nhận, ủng hộ, làm theo điều đúng', 'Im lặng', 'Theo số đông', 'Sợ hãi'], 0, 'Định nghĩa tôn trọng lẽ phải.'),
    Q('Hiến pháp đầu tiên của VN năm?', ['1945', '1946', '1959', '1980'], 1, 'Hiến pháp 1946.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Quyền tự do tín ngưỡng, tôn giáo', [
    Q('Tín ngưỡng là?', ['Niềm tin vào điều thiêng liêng', 'Sự sợ hãi', 'Mê tín', 'Phong tục'], 0, 'Tín ngưỡng = niềm tin của con người vào điều thiêng liêng, siêu nhiên.'),
    Q('Tôn giáo là?', ['Hình thức tín ngưỡng có hệ thống tổ chức, giáo lý, nghi lễ', 'Phong tục', 'Tập quán', 'Mê tín'], 0, 'Tôn giáo có hệ thống giáo lý, tổ chức, nghi lễ (Phật giáo, Công giáo, Tin Lành…).'),
    Q('Mê tín dị đoan là?', ['Tin nhảm, không có cơ sở, gây hậu quả xấu', 'Tín ngưỡng truyền thống', 'Tôn giáo chân chính', 'Khoa học'], 0, 'Mê tín dị đoan là niềm tin mù quáng, vô căn cứ, gây hậu quả tiêu cực.'),
    Q('Công dân có quyền?', ['Theo hoặc không theo tôn giáo nào', 'Bị ép buộc theo tôn giáo', 'Chỉ theo một tôn giáo', 'Phải theo tôn giáo của bố mẹ'], 0, 'Hiến pháp: tự do tín ngưỡng, tôn giáo, theo hoặc không theo bất kì tôn giáo nào.'),
    Q('Hành vi nào bị cấm?', ['Lợi dụng tôn giáo để vi phạm pháp luật', 'Đi lễ chùa', 'Đi lễ nhà thờ', 'Cầu nguyện'], 0, 'Lợi dụng tôn giáo, tín ngưỡng để vi phạm pháp luật, gây mất trật tự bị nghiêm cấm.'),
  ]),

  M(20, 'Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam', [
    Q('Nhà nước CHXHCN Việt Nam thành lập ngày?', ['2/9/1945', '19/8/1945', '30/4/1975', '7/5/1954'], 0, 'Bác Hồ đọc Tuyên ngôn độc lập ngày 2/9/1945, khai sinh nước VN dân chủ cộng hoà.'),
    Q('Bản chất nhà nước ta?', ['Nhà nước pháp quyền XHCN của dân, do dân, vì dân', 'Phong kiến', 'Tư sản', 'Thuộc địa'], 0, 'Nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.'),
    Q('Bộ máy nhà nước gồm 4 cấp?', ['TƯ, tỉnh, huyện, xã', 'TƯ, miền, vùng, xã', 'Chỉ TƯ và địa phương', 'Chỉ 1 cấp'], 0, 'Bộ máy NN VN có 4 cấp: Trung ương, tỉnh, huyện, xã.'),
    Q('Cơ quan quyền lực cao nhất?', ['Quốc hội', 'Chính phủ', 'Toà án', 'Viện kiểm sát'], 0, 'Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, có quyền lập hiến lập pháp.'),
    Q('Cơ quan hành chính cao nhất?', ['Chính phủ', 'Quốc hội', 'Toà án', 'Chủ tịch nước'], 0, 'Chính phủ là cơ quan hành chính nhà nước cao nhất.'),
  ]),

  M(21, 'Bộ máy Nhà nước cấp cơ sở (xã/phường/thị trấn)', [
    Q('Cấp cơ sở gồm?', ['Xã, phường, thị trấn', 'Tỉnh, huyện', 'TƯ', 'Vùng'], 0, 'Cấp cơ sở là cấp gần dân nhất, gồm xã, phường, thị trấn.'),
    Q('HĐND xã/phường do ai bầu?', ['Nhân dân địa phương', 'Chủ tịch UBND', 'Quốc hội', 'Chính phủ'], 0, 'HĐND do nhân dân địa phương bầu trực tiếp.'),
    Q('UBND xã/phường có nhiệm vụ?', ['Quản lý hành chính, giải quyết công việc địa phương', 'Lập pháp', 'Xét xử', 'Kiểm sát'], 0, 'UBND là cơ quan chấp hành của HĐND, quản lý hành chính địa phương.'),
    Q('Công dân làm khai sinh ở đâu?', ['UBND xã/phường', 'Chính phủ', 'Quốc hội', 'Toà án'], 0, 'Khai sinh, khai tử, kết hôn… đăng ký tại UBND xã/phường nơi cư trú.'),
    Q('Trách nhiệm công dân với chính quyền cơ sở?', ['Tôn trọng, chấp hành quy định, đóng góp xây dựng', 'Phớt lờ', 'Phản đối tất cả', 'Né tránh'], 0, 'Công dân cần tôn trọng, chấp hành và tham gia đóng góp ý kiến cho chính quyền địa phương.'),
  ]),

  M(22, 'Quyền và nghĩa vụ của công dân trong gia đình', [
    Q('Gia đình là?', ['Tế bào của xã hội, cái nôi nuôi dưỡng nhân cách', 'Một tổ chức kinh tế', 'Một câu lạc bộ', 'Một nhóm bạn'], 0, 'Gia đình = tế bào của xã hội, môi trường giáo dục đầu tiên.'),
    Q('Bổn phận của con cháu?', ['Yêu quý, kính trọng, hiếu thảo với ông bà cha mẹ', 'Vô lễ', 'Phản kháng', 'Lảng tránh'], 0, 'Con cháu phải hiếu thảo, kính trọng, chăm sóc ông bà cha mẹ.'),
    Q('Cha mẹ có nghĩa vụ?', ['Nuôi dưỡng, giáo dục con', 'Bỏ rơi con', 'Bạo hành con', 'Bóc lột con'], 0, 'Cha mẹ phải nuôi dưỡng, chăm sóc, giáo dục con cái.'),
    Q('Anh chị em trong nhà nên?', ['Yêu thương, đùm bọc, giúp đỡ nhau', 'Ganh ghét', 'Đố kỵ', 'Tranh giành'], 0, '"Anh em như thể tay chân" — yêu thương đùm bọc lẫn nhau.'),
    Q('Hành vi vi phạm pháp luật gia đình?', ['Bạo lực gia đình', 'Yêu thương con cái', 'Chăm sóc cha mẹ', 'Dạy dỗ con'], 0, 'Bạo lực gia đình bị Luật Phòng chống bạo lực gia đình nghiêm cấm.'),
  ]),

  M(23, 'Bình đẳng giới và bạo lực gia đình', [
    Q('Bình đẳng giới là?', ['Nam và nữ có quyền và nghĩa vụ ngang nhau trong mọi lĩnh vực', 'Nam được ưu tiên', 'Nữ được ưu tiên', 'Nam giới quyết định mọi việc'], 0, 'Bình đẳng giới = nam nữ có quyền, nghĩa vụ và cơ hội ngang nhau.'),
    Q('Bạo lực gia đình gồm?', ['Bạo lực thể xác, tinh thần, kinh tế, tình dục', 'Chỉ thể xác', 'Chỉ lời nói', 'Không có khái niệm này'], 0, '4 dạng: thể xác, tinh thần, kinh tế và tình dục theo Luật PCBLGD.'),
    Q('Khi bị bạo lực gia đình, cần?', ['Báo công an, người thân, tổng đài 111', 'Im lặng chịu đựng', 'Tự tử', 'Bỏ trốn'], 0, 'Báo công an, người thân, gọi 111 (tổng đài bảo vệ trẻ em) để được giúp đỡ.'),
    Q('Trẻ em bị bạo hành có thể gọi?', ['111', '113', '114', '115'], 0, '111 = tổng đài quốc gia bảo vệ trẻ em.'),
    Q('Vai trò của bình đẳng giới?', ['Phát triển xã hội bền vững, hạnh phúc gia đình', 'Gây mâu thuẫn', 'Không có vai trò', 'Lãng phí'], 0, 'Bình đẳng giới góp phần phát triển XH bền vững và hạnh phúc gia đình.'),
  ]),

  M(24, 'Phòng chống bạo lực học đường', [
    Q('Bạo lực học đường gồm?', ['Đánh nhau, bắt nạt, lăng mạ, cô lập trong trường học', 'Học tập', 'Vui chơi', 'Hoạt động ngoại khoá'], 0, 'BLHĐ = hành vi xâm phạm thể chất, tinh thần xảy ra trong/quanh trường học.'),
    Q('Cyber bullying là?', ['Bắt nạt qua mạng (lập group nói xấu, đăng ảnh xấu hổ)', 'Học online', 'Chơi game', 'Học nhóm'], 0, 'Cyber bullying = bắt nạt qua mạng XH, tin nhắn.'),
    Q('Khi bị bắt nạt, em nên?', ['Báo thầy cô, cha mẹ, không im lặng chịu đựng', 'Im lặng chấp nhận', 'Tìm cách trả thù', 'Bỏ học'], 0, 'Báo người lớn ngay để được giúp đỡ kịp thời, không tự xử lý.'),
    Q('Khi thấy bạn bị bắt nạt?', ['Báo thầy cô, ủng hộ bạn', 'Quay clip phát tán', 'Cùng tham gia bắt nạt', 'Mặc kệ'], 0, 'Báo thầy cô và đứng về phía nạn nhân là cách ứng xử đúng.'),
    Q('Hậu quả BLHĐ?', ['Tổn thương tâm lý, học sa sút, có thể tự tử', 'Tốt cho học sinh', 'Rèn bản lĩnh', 'Không hậu quả'], 0, 'BLHĐ gây tổn thương lâu dài về tâm lý, ảnh hưởng học tập và sức khoẻ.'),
  ]),

  M(25, 'An toàn giao thông và trách nhiệm công dân', [
    Q('Luật Giao thông đường bộ áp dụng?', ['Mọi người tham gia giao thông', 'Chỉ tài xế', 'Chỉ người lớn', 'Chỉ ô tô'], 0, 'Luật GTĐB áp dụng với mọi người tham gia giao thông, gồm cả HS đi bộ.'),
    Q('HS THCS chưa đủ tuổi đi xe?', ['Xe máy', 'Xe đạp', 'Đi bộ', 'Xe đạp điện <50cc'], 0, 'HS THCS không được điều khiển xe máy (cần đủ 18 tuổi và có bằng lái).'),
    Q('Đội mũ bảo hiểm bắt buộc khi?', ['Đi xe máy, xe đạp điện', 'Đi bộ', 'Đi xe đạp thường', 'Ngồi trong ô tô'], 0, 'Bắt buộc đội mũ BH khi đi xe máy, xe đạp điện (cả người lái và ngồi sau).'),
    Q('Vượt đèn đỏ là?', ['Vi phạm luật, có thể gây tai nạn', 'Cách đi nhanh', 'Không sao', 'Quyền của người lái'], 0, 'Vượt đèn đỏ là vi phạm Luật GT, dễ gây tai nạn nghiêm trọng.'),
    Q('Khi xảy ra tai nạn, cần?', ['Báo công an, cứu giúp người bị nạn', 'Bỏ chạy', 'Quay clip', 'Mặc kệ'], 0, 'Cấp cứu nạn nhân, báo công an, không bỏ chạy (tội bỏ trốn sau tai nạn).'),
  ]),

  M(26, 'Quyền tham gia quản lý nhà nước, quản lý xã hội', [
    Q('Quyền tham gia quản lý NN của công dân?', ['Bầu cử, ứng cử, đóng góp ý kiến, giám sát', 'Chỉ cán bộ mới có', 'Chỉ người lớn', 'Không có quyền'], 0, 'Mọi công dân đều có quyền tham gia quản lý NN qua nhiều hình thức.'),
    Q('Hình thức tham gia trực tiếp?', ['Bầu cử, ứng cử, biểu quyết các vấn đề trọng đại', 'Qua người đại diện', 'Im lặng', 'Không tham gia'], 0, 'Tham gia trực tiếp: bầu cử, biểu quyết, đóng góp ý kiến, giám sát.'),
    Q('Hình thức tham gia gián tiếp?', ['Qua đại biểu Quốc hội, HĐND', 'Tự quyết định', 'Không cần ai', 'Bỏ trống'], 0, 'Tham gia gián tiếp qua người đại diện được bầu (đại biểu QH, HĐND).'),
    Q('Tuổi đi bầu cử ở VN?', ['18 tuổi', '16 tuổi', '14 tuổi', '21 tuổi'], 0, 'Công dân đủ 18 tuổi trở lên có quyền bầu cử (Hiến pháp).'),
    Q('Tuổi ứng cử đại biểu QH/HĐND?', ['21 tuổi', '18 tuổi', '25 tuổi', '30 tuổi'], 0, 'Công dân đủ 21 tuổi có quyền ứng cử (Hiến pháp).'),
  ]),

  M(27, 'Nghĩa vụ bảo vệ Tổ quốc', [
    Q('Bảo vệ Tổ quốc là?', ['Nghĩa vụ thiêng liêng, quyền cao quý của công dân', 'Trách nhiệm của quân đội', 'Tự nguyện', 'Không cần thiết'], 0, 'Hiến pháp: Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân.'),
    Q('Nghĩa vụ quân sự với nam thanh niên?', ['Phải đăng ký từ 17 tuổi, gọi nhập ngũ 18–25 tuổi', 'Tự nguyện hoàn toàn', 'Bắt buộc cả nữ', 'Không bắt buộc'], 0, 'Luật NVQS: nam đăng ký từ 17 tuổi, gọi nhập ngũ 18–25 tuổi (đến 27 với HS/SV được hoãn).'),
    Q('Bảo vệ Tổ quốc gồm?', ['Quân sự, kinh tế, văn hoá, an ninh', 'Chỉ quân sự', 'Chỉ kinh tế', 'Chỉ chính trị'], 0, 'Bảo vệ TQ toàn diện: quân sự, kinh tế, văn hoá, an ninh chính trị.'),
    Q('HS thực hiện nghĩa vụ này bằng?', ['Học tập tốt, rèn luyện sức khoẻ, yêu nước', 'Không cần làm gì', 'Chờ lớn', 'Trốn tránh'], 0, 'HS chuẩn bị thể chất, tri thức, lòng yêu nước để bảo vệ TQ.'),
    Q('Trốn nghĩa vụ quân sự?', ['Vi phạm pháp luật, bị xử lý', 'Quyền tự do', 'Không sao', 'Khôn ngoan'], 0, 'Trốn nghĩa vụ quân sự là vi phạm pháp luật, bị xử lý hành chính hoặc hình sự.'),
  ]),

  M(28, 'Sống có đạo đức và tuân theo pháp luật', [
    Q('Sống có đạo đức là?', ['Sống theo chuẩn mực đạo đức xã hội, biết yêu thương, tự giác', 'Sống ích kỷ', 'Sống nguyên tắc cứng nhắc', 'Sống thờ ơ'], 0, 'Sống có đạo đức = tuân theo chuẩn mực đạo đức XH, tự giác hành động vì cái đúng.'),
    Q('Sống có pháp luật là?', ['Tôn trọng, tuân theo Hiến pháp và pháp luật', 'Né tránh pháp luật', 'Chỉ tuân khi bị giám sát', 'Vi phạm khi có lợi'], 0, 'Sống có pháp luật = tôn trọng, chấp hành nghiêm túc Hiến pháp và pháp luật.'),
    Q('Mối quan hệ đạo đức và pháp luật?', ['Bổ sung, hỗ trợ nhau', 'Đối lập', 'Không liên quan', 'Loại trừ nhau'], 0, 'Đạo đức và pháp luật bổ sung, hỗ trợ — đạo đức nội tâm, pháp luật ngoại tại.'),
    Q('Người sống có đạo đức và pháp luật?', ['Được xã hội tôn trọng, sống hạnh phúc', 'Bị xa lánh', 'Khó khăn trong cuộc sống', 'Không có lợi ích'], 0, 'Người sống đúng đạo đức và pháp luật được tôn trọng, có cuộc sống ý nghĩa.'),
    Q('HS rèn luyện bằng cách?', ['Tu dưỡng đạo đức, học và làm theo pháp luật', 'Chỉ học lý thuyết', 'Vi phạm khi có lợi', 'Sống bản năng'], 0, 'HS tu dưỡng đạo đức qua hành vi hằng ngày và tự giác tuân thủ pháp luật.'),
  ]),

  M(29, 'Lao động và hướng nghiệp', [
    Q('Lao động có vai trò?', ['Tạo ra của cải vật chất, tinh thần, là điều kiện tồn tại của xã hội', 'Không cần thiết', 'Chỉ vất vả', 'Lãng phí thời gian'], 0, 'Lao động là hoạt động cốt lõi tạo ra của cải, là điều kiện tồn tại của xã hội loài người.'),
    Q('Quyền và nghĩa vụ lao động của công dân?', ['Có quyền làm việc, có nghĩa vụ lao động', 'Chỉ có quyền', 'Chỉ có nghĩa vụ', 'Không bắt buộc'], 0, 'Lao động vừa là quyền vừa là nghĩa vụ của mọi công dân theo Hiến pháp.'),
    Q('Tuổi tối thiểu được lao động?', ['15 tuổi (đối với một số công việc)', '12 tuổi', '18 tuổi', '21 tuổi'], 0, 'Bộ luật LĐ: tối thiểu 15 tuổi cho một số việc, có hạn chế giờ làm và loại việc.'),
    Q('Hành vi cấm với người dưới 18?', ['Làm công việc nặng nhọc, độc hại', 'Học nghề', 'Đi học', 'Thực tập'], 0, 'Cấm sử dụng lao động dưới 18 tuổi làm công việc nặng nhọc, độc hại, nguy hiểm.'),
    Q('Hướng nghiệp giúp HS?', ['Chọn nghề phù hợp năng lực, sở thích, nhu cầu XH', 'Bị ép chọn nghề', 'Không cần', 'Chỉ chọn theo bố mẹ'], 0, 'Hướng nghiệp giúp HS hiểu mình, hiểu nghề và xã hội để chọn nghề phù hợp.'),
  ]),

  M(30, 'Hôn nhân và gia đình', [
    Q('Tuổi kết hôn theo Luật?', ['Nam ≥20, nữ ≥18', 'Nam ≥18, nữ ≥16', 'Nam ≥22, nữ ≥20', 'Cả hai ≥18'], 0, 'Luật HN&GĐ 2014: nam đủ 20, nữ đủ 18.'),
    Q('Nguyên tắc hôn nhân ở VN?', ['Tự nguyện, một vợ một chồng, bình đẳng', 'Cha mẹ đặt đâu con ngồi đấy', 'Đa thê', 'Bị ép buộc'], 0, 'Nguyên tắc: tự nguyện, tiến bộ, một vợ một chồng, bình đẳng vợ chồng.'),
    Q('Tảo hôn là?', ['Kết hôn khi chưa đủ tuổi luật định', 'Kết hôn muộn', 'Kết hôn đúng tuổi', 'Sống thử'], 0, 'Tảo hôn = kết hôn khi chưa đủ tuổi theo luật, bị nghiêm cấm.'),
    Q('Quan hệ vợ chồng dựa trên?', ['Tình yêu, sự tôn trọng, bình đẳng', 'Bạo lực', 'Sợ hãi', 'Lợi ích kinh tế'], 0, 'Quan hệ vợ chồng lành mạnh xây trên tình yêu, tôn trọng, bình đẳng.'),
    Q('Hôn nhân cận huyết bị?', ['Cấm tuyệt đối', 'Cho phép', 'Khuyến khích', 'Tuỳ chọn'], 0, 'Luật cấm kết hôn trong phạm vi 3 đời (gây dị tật di truyền cho con).'),
  ]),

  M(31, 'Tôn trọng và học hỏi văn hoá các dân tộc Việt Nam', [
    Q('Việt Nam có bao nhiêu dân tộc?', ['54 dân tộc', '53', '55', '50'], 0, 'VN có 54 dân tộc anh em, Kinh là đa số (~85%).'),
    Q('Văn hoá các dân tộc VN có đặc điểm?', ['Đa dạng, thống nhất trong sự khác biệt', 'Đồng nhất', 'Đối lập nhau', 'Không có'], 0, 'Văn hoá VN đa dạng (54 dân tộc) nhưng thống nhất trong cộng đồng VN.'),
    Q('Tôn trọng văn hoá dân tộc thiểu số thể hiện qua?', ['Học tiếng, hiểu phong tục, không kỳ thị', 'Kỳ thị', 'Phớt lờ', 'Bắt theo văn hoá Kinh'], 0, 'Tôn trọng = học hỏi, hiểu phong tục, không kỳ thị, hỗ trợ bảo tồn.'),
    Q('Ngày Văn hoá các dân tộc VN?', ['19/4', '2/9', '30/4', '20/11'], 0, '19/4 là Ngày Văn hoá các dân tộc Việt Nam.'),
    Q('Hành vi vi phạm?', ['Kỳ thị, miệt thị dân tộc thiểu số', 'Học hỏi văn hoá khác', 'Giúp đỡ vùng cao', 'Bảo tồn ngôn ngữ'], 0, 'Kỳ thị, gây chia rẽ dân tộc bị Hiến pháp và pháp luật nghiêm cấm.'),
  ]),

  M(32, 'Trách nhiệm với cộng đồng và xã hội', [
    Q('Trách nhiệm với cộng đồng là?', ['Sống có ích, đóng góp xây dựng cộng đồng', 'Sống ích kỷ', 'Chỉ lo bản thân', 'Tránh né'], 0, 'Trách nhiệm cộng đồng = sống có ích, đóng góp xây dựng cộng đồng/xã hội.'),
    Q('HS có thể đóng góp bằng?', ['Tham gia thiện nguyện, bảo vệ môi trường, tuyên truyền', 'Im lặng', 'Phá hoại', 'Không quan tâm'], 0, 'HS đóng góp qua hoạt động tình nguyện, bảo vệ MT, tuyên truyền văn minh.'),
    Q('Tình nguyện viên là?', ['Người tự nguyện làm việc vì cộng đồng, không vì lợi ích cá nhân', 'Người được trả lương', 'Người bị ép', 'Cán bộ nhà nước'], 0, 'TNV tự nguyện, không vì lợi ích vật chất, làm việc vì cộng đồng.'),
    Q('Mùa hè xanh, tiếp sức mùa thi là?', ['Hoạt động TN của sinh viên', 'Hoạt động kinh doanh', 'Cuộc thi', 'Khoá học'], 0, 'Đây là phong trào tình nguyện do Đoàn TN tổ chức hằng năm.'),
    Q('Ý nghĩa hoạt động cộng đồng với HS?', ['Rèn kỹ năng, lòng nhân ái, có ích cho xã hội', 'Mất thời gian', 'Tốn tiền', 'Vô bổ'], 0, 'Hoạt động cộng đồng giúp HS trưởng thành, rèn kỹ năng và tinh thần nhân ái.'),
  ]),

  M(33, 'Bảo vệ môi trường và tài nguyên thiên nhiên', [
    Q('Môi trường gồm?', ['Yếu tố tự nhiên và nhân tạo bao quanh con người', 'Chỉ tự nhiên', 'Chỉ nhân tạo', 'Chỉ không khí'], 0, 'Môi trường = tổng thể yếu tố tự nhiên (đất, nước, không khí…) và nhân tạo (nhà, đường…).'),
    Q('Tài nguyên không tái tạo gồm?', ['Dầu mỏ, than, khoáng sản', 'Gió, mặt trời', 'Nước, rừng', 'Đất'], 0, 'TN không tái tạo cạn kiệt khi sử dụng: dầu mỏ, than, khoáng sản.'),
    Q('Bảo vệ MT là trách nhiệm của?', ['Mọi người', 'Chỉ chính phủ', 'Chỉ ngành môi trường', 'Doanh nghiệp'], 0, 'Bảo vệ MT là trách nhiệm chung của toàn xã hội theo Luật BVMT.'),
    Q('HS có thể bảo vệ MT bằng?', ['Trồng cây, không xả rác, tiết kiệm điện nước', 'Đốt rác bừa bãi', 'Xả nước thừa', 'Phá rừng'], 0, 'HS đóng góp qua hành động nhỏ: phân loại rác, tiết kiệm điện nước, trồng cây.'),
    Q('Ngày Môi trường thế giới?', ['5/6', '22/4', '21/3', '8/3'], 0, '5/6 là Ngày Môi trường thế giới.'),
  ]),

  M(34, 'Phòng chống tội phạm vị thành niên', [
    Q('Người chưa thành niên là?', ['Dưới 18 tuổi', 'Dưới 16', 'Dưới 14', 'Dưới 21'], 0, 'Theo luật VN: người chưa thành niên là người dưới 18 tuổi.'),
    Q('Tuổi chịu trách nhiệm hình sự?', ['Từ 14 tuổi (với tội rất nghiêm trọng), 16 tuổi (mọi tội)', '18 tuổi', '21 tuổi', '12 tuổi'], 0, 'BLHS: từ 14 phải chịu TNHS với tội rất nghiêm trọng/đặc biệt nghiêm trọng; từ 16 với mọi tội.'),
    Q('Nguyên nhân tội phạm vị thành niên?', ['Thiếu giáo dục, bạn xấu, thiếu hiểu biết pháp luật', 'Do tài năng', 'Do may mắn', 'Do số phận'], 0, 'Nguyên nhân chính: gia đình thiếu quan tâm, bạn bè xấu, thiếu giáo dục PL, tệ nạn XH.'),
    Q('HS phòng tránh bằng cách?', ['Chọn bạn tốt, học pháp luật, tránh xa tệ nạn', 'Thử cho biết', 'Theo bạn xấu', 'Không cần đề phòng'], 0, 'Chọn bạn tốt, hiểu pháp luật, tham gia hoạt động lành mạnh để phòng tránh.'),
    Q('Khi bạn rủ vi phạm pháp luật, em sẽ?', ['Từ chối, khuyên bạn dừng lại', 'Tham gia cho vui', 'Im lặng', 'Sợ bị bạn ghét nên đồng ý'], 0, 'Kiên quyết từ chối và khuyên bạn — bảo vệ chính mình và giúp bạn.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Quyền sở hữu tài sản gồm?', ['Chiếm hữu, sử dụng, định đoạt', 'Chỉ sử dụng', 'Chỉ định đoạt', '2 quyền'], 0, '3 quyền năng của sở hữu.'),
    Q('Tuổi bầu cử ở VN?', ['18', '16', '21', '25'], 0, 'Hiến pháp 2013.'),
    Q('Nhà nước VN có bao nhiêu cấp?', ['4', '3', '2', '5'], 0, 'TƯ, tỉnh, huyện, xã.'),
    Q('Tuổi kết hôn của nữ?', ['Đủ 18', '16', '20', '21'], 0, 'Luật HN&GĐ.'),
    Q('Khi nhặt được của rơi, em nên?', ['Trả lại chủ hoặc giao công an', 'Giữ làm của riêng', 'Vứt đi', 'Chia bạn bè'], 0, 'Thể hiện liêm khiết và tôn trọng sở hữu của người khác.'),
  ]),
];

export const S8GDCD_SCENARIOS = indexBy(S8GDCD_WEEKS);
