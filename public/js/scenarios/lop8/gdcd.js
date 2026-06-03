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
    Q('Tôn trọng lẽ phải là gì?', ['Làm theo ý kiến số đông', 'Công nhận, ủng hộ, làm theo điều đúng đắn, đạo lý', 'Chỉ nghe theo người lớn', 'Im lặng trước cái sai'], 1, 'Tôn trọng lẽ phải = công nhận, ủng hộ và làm theo điều đúng đắn, phù hợp đạo lý và lợi ích chung.'),
    Q('Hành vi nào sau đây thể hiện tôn trọng lẽ phải?', ['Im lặng khi thấy bạn nói sai', 'Bao che bạn quay cóp', 'Phê bình bạn vi phạm dù sợ bạn giận', 'Theo nhóm bạn xấu cho an toàn'], 2, 'Người tôn trọng lẽ phải dám lên tiếng, phê bình cái sai dù phải đối mặt khó khăn.'),
    Q('Ý nghĩa của tôn trọng lẽ phải?', ['Giúp xã hội ổn định, lành mạnh', 'Làm mọi người ghét mình', 'Mất bạn bè', 'Không có ý nghĩa gì'], 0, 'Tôn trọng lẽ phải giúp con người ứng xử phù hợp, làm xã hội ổn định, văn minh.'),
    Q('Trái với tôn trọng lẽ phải là?', ['Xuyên tạc, bóp méo sự thật', 'Trung thực', 'Thẳng thắn', 'Dũng cảm'], 0, 'Hành vi xuyên tạc, vu khống, bao che cái sai là trái với tôn trọng lẽ phải.'),
    Q('Tình huống: bạn em chép bài kiểm tra. Em nên?', ['Khuyên bạn dừng và báo thầy cô nếu bạn không nghe', 'Mặc kệ', 'Cùng chép cho vui', 'Khen bạn thông minh'], 0, 'Khuyên bạn và nhắc nhở là cách thể hiện tôn trọng lẽ phải, đồng thời giữ tình bạn.'),
  ]),

  M(2, 'Liêm khiết', [
    Q('Liêm khiết có nghĩa là?', ['Sống tiết kiệm', 'Sống giàu có', 'Sống cô độc', 'Sống trong sạch, không hám lợi, không nhỏ nhen'], 3, 'Liêm khiết = phẩm chất sống trong sạch, không vì tư lợi mà làm điều sai.'),
    Q('Người liêm khiết thường?', ['Tham ô của công', 'Không tham của không phải của mình', 'Lợi dụng chức vụ', 'Nhận hối lộ'], 1, 'Người liêm khiết không tham lam tài sản công và của người khác.'),
    Q('Câu tục ngữ nào nói về liêm khiết?', ['Đói cho sạch, rách cho thơm', 'Ăn quả nhớ kẻ trồng cây', 'Lá lành đùm lá rách', 'Một con ngựa đau cả tàu bỏ cỏ'], 0, '"Đói cho sạch, rách cho thơm" đề cao liêm khiết dù khó khăn.'),
    Q('Ý nghĩa của liêm khiết với xã hội?', ['Không có ý nghĩa', 'Làm xã hội nghèo đi', 'Tạo bất công', 'Giúp xã hội trong sạch, văn minh'], 3, 'Liêm khiết là nền tảng đạo đức, giúp xã hội phát triển bền vững và công bằng.'),
    Q('Tình huống: nhặt được ví có 5 triệu. Em sẽ?', ['Mua đồ chơi', 'Lấy luôn vì không ai biết', 'Chia cho bạn bè', 'Tìm cách trả lại chủ'], 3, 'Hành vi liêm khiết là trả lại, dù không ai biết.'),
  ]),

  M(3, 'Tôn trọng người khác', [
    Q('Tôn trọng người khác là?', ['Chỉ tôn trọng người giàu', 'Sợ hãi họ', 'Đánh giá đúng mực, coi trọng phẩm giá và quyền lợi của họ', 'Nhường nhịn vô điều kiện'], 2, 'Tôn trọng người khác = đánh giá đúng mực và coi trọng họ trong mọi hoàn cảnh.'),
    Q('Biểu hiện tôn trọng người khác?', ['Lắng nghe, không ngắt lời', 'Cười nhạo khi bạn nói sai', 'Nói xấu sau lưng', 'Bắt nạt người yếu'], 0, 'Lắng nghe, không cười nhạo, không ngắt lời là biểu hiện cơ bản của tôn trọng.'),
    Q('Hành vi nào KHÔNG tôn trọng người khác?', ['Chế giễu khuyết tật của người khác', 'Chào hỏi lễ phép', 'Lắng nghe ý kiến', 'Giúp đỡ người già'], 0, 'Chế giễu khuyết tật là vi phạm phẩm giá người khác.'),
    Q('Vì sao phải tôn trọng người khác?', ['Để được người khác tôn trọng lại', 'Vì pháp luật bắt buộc tất cả', 'Để được khen', 'Để có quà'], 0, 'Mình tôn trọng người khác thì mới được người khác tôn trọng lại — quan hệ hai chiều.'),
    Q('Tôn trọng người khác thể hiện qua?', ['Chỉ lời nói', 'Chỉ hành vi', 'Lời nói, hành vi, thái độ', 'Chỉ trang phục'], 2, 'Tôn trọng thể hiện qua tổng hoà lời nói, hành vi và thái độ ứng xử.'),
  ]),

  M(4, 'Giữ chữ tín', [
    Q('Giữ chữ tín là?', ['Nói nhiều', 'Coi trọng lòng tin, giữ đúng lời hứa', 'Im lặng', 'Khoe khoang'], 1, 'Giữ chữ tín = coi trọng lòng tin của mọi người, giữ đúng lời hứa và cam kết.'),
    Q('Người giữ chữ tín thường?', ['Nói dối quanh', 'Làm đúng những gì đã hứa', 'Hứa cho qua chuyện', 'Hứa rồi quên'], 1, 'Người giữ chữ tín luôn cố gắng thực hiện đúng lời hứa.'),
    Q('Ý nghĩa của giữ chữ tín?', ['Được mọi người tin cậy, hợp tác', 'Không có ý nghĩa', 'Mất bạn bè', 'Bị mọi người xa lánh'], 0, 'Giữ chữ tín giúp xây dựng uy tín, được mọi người tin cậy trong công việc và đời sống.'),
    Q('Câu tục ngữ về chữ tín?', ['Nói lời phải giữ lấy lời / Đừng như con bướm đậu rồi lại bay', 'Tay làm hàm nhai', 'Ăn cây nào rào cây nấy', 'Đèn nhà ai nấy rạng'], 0, '"Nói lời phải giữ lấy lời" trực tiếp nói về chữ tín.'),
    Q('Khi không thể giữ lời hứa, nên?', ['Im lặng coi như chưa hứa', 'Đổ lỗi cho người khác', 'Bỏ trốn', 'Báo trước và xin lỗi, đề nghị bù đắp'], 3, 'Báo trước, xin lỗi chân thành và đề nghị cách bù đắp là cách giữ chữ tín ngay cả khi không hoàn thành.'),
  ]),

  M(5, 'Pháp luật và kỷ luật', [
    Q('Pháp luật là?', ['Lời khuyên của người lớn', 'Quy tắc xử sự chung, do Nhà nước ban hành, có tính bắt buộc chung', 'Quy ước trong gia đình', 'Quy định nội bộ trường học'], 1, 'Pháp luật do Nhà nước ban hành, có tính bắt buộc chung với mọi công dân.'),
    Q('Kỷ luật là?', ['Phong tục', 'Quy định của một tổ chức, tập thể (trường, cơ quan)', 'Lễ giáo', 'Pháp luật'], 1, 'Kỷ luật = quy định của tổ chức, tập thể, chỉ áp dụng với thành viên tổ chức đó.'),
    Q('Mối quan hệ pháp luật và kỷ luật?', ['Không liên quan', 'Kỷ luật cao hơn pháp luật', 'Đối lập nhau', 'Kỷ luật của tổ chức phải tuân theo pháp luật'], 3, 'Kỷ luật của tổ chức phải phù hợp, không trái pháp luật.'),
    Q('Vai trò của pháp luật?', ['Trừng phạt mọi người', 'Phân biệt giàu nghèo', 'Hạn chế tự do', 'Quản lý xã hội, bảo vệ quyền công dân'], 3, 'Pháp luật là công cụ quản lý xã hội và bảo vệ quyền, lợi ích hợp pháp của công dân.'),
    Q('HS chấp hành nội quy trường thể hiện?', ['Tinh thần kỷ luật', 'Sợ thầy cô', 'Lười biếng', 'Khoe khoang'], 0, 'Chấp hành nội quy = thực hiện kỷ luật của nhà trường.'),
  ]),

  M(6, 'Xây dựng tình bạn trong sáng, lành mạnh', [
    Q('Tình bạn trong sáng, lành mạnh có đặc điểm?', ['Ganh đua, đố kỵ', 'Bao che cái sai', 'Bình đẳng, tôn trọng, tin cậy, chân thành', 'Lợi dụng nhau'], 2, 'Tình bạn lành mạnh dựa trên bình đẳng, tôn trọng, chân thành và tin cậy lẫn nhau.'),
    Q('Biểu hiện của tình bạn KHÔNG lành mạnh?', ['Giúp nhau khi khó khăn', 'Cùng học tập tiến bộ', 'Chia sẻ buồn vui', 'Rủ rê chơi điện tử quên học'], 3, 'Rủ nhau làm điều xấu, ảnh hưởng học tập là biểu hiện tình bạn không lành mạnh.'),
    Q('Ý nghĩa của tình bạn đẹp?', ['Giúp ta hoàn thiện nhân cách, tự tin', 'Tốn tiền', 'Mất thời gian', 'Không có ý nghĩa'], 0, 'Tình bạn đẹp giúp ta tiến bộ, hoàn thiện nhân cách và vượt qua khó khăn.'),
    Q('Để có tình bạn đẹp, cần?', ['Ganh ghét', 'Chân thành, tin cậy, sẵn sàng giúp đỡ', 'Khoe khoang', 'Chỉ chơi khi có lợi cho mình'], 1, 'Chân thành, tin cậy, biết chia sẻ và sẵn lòng giúp đỡ là nền tảng tình bạn đẹp.'),
    Q('Khi bạn mắc sai lầm, người bạn tốt nên?', ['Khuyên bảo chân thành, giúp bạn sửa sai', 'Bao che', 'Tố cáo công khai để bạn xấu hổ', 'Tránh xa'], 0, 'Người bạn tốt khuyên bảo chân thành để bạn nhận ra và sửa sai.'),
  ]),

  M(7, 'Tôn trọng, học hỏi các dân tộc khác', [
    Q('Tôn trọng các dân tộc khác là?', ['Coi trọng giá trị văn hoá, truyền thống của các dân tộc, các nước', 'Không quan tâm', 'Khinh thường các nước nhỏ', 'Chỉ tôn trọng nước giàu'], 0, 'Tôn trọng dân tộc khác là coi trọng nền văn hoá, truyền thống của mọi quốc gia.'),
    Q('Học hỏi dân tộc khác có ý nghĩa?', ['Phụ thuộc nước ngoài', 'Giúp phát triển đất nước, không lạc hậu', 'Chỉ học hỏi về vật chất, bỏ qua tinh thần', 'Mất bản sắc dân tộc'], 1, 'Học hỏi tinh hoa các dân tộc giúp Việt Nam tiến bộ, hội nhập.'),
    Q('Khi học hỏi dân tộc khác, cần?', ['Chọn lọc, phù hợp với điều kiện VN', 'Sao chép máy móc', 'Chỉ học cái xấu', 'Từ chối hoàn toàn'], 0, 'Phải có chọn lọc, tiếp thu tinh hoa phù hợp văn hoá và điều kiện Việt Nam.'),
    Q('Việt Nam đã tiếp thu được điều gì từ thế giới?', ['Không có gì', 'Khoa học công nghệ, quản lý hiện đại', 'Chỉ ngôn ngữ', 'Chỉ phong tục lạc hậu'], 1, 'VN tiếp thu khoa học, công nghệ, quản lý hiện đại để xây dựng đất nước.'),
    Q('Hành vi sai lầm khi tiếp xúc văn hoá nước ngoài?', ['Giữ bản sắc dân tộc', 'Sùng ngoại, bài nội', 'Học ngoại ngữ', 'Chọn lọc tiếp thu'], 1, 'Sùng ngoại tuyệt đối, coi thường dân tộc mình là thái độ sai lầm.'),
  ]),

  M(8, 'Quyền sở hữu tài sản và nghĩa vụ tôn trọng tài sản của người khác', [
    Q('Quyền sở hữu tài sản gồm?', ['Chỉ sử dụng', 'Chỉ chiếm hữu', 'Chỉ định đoạt', 'Chiếm hữu, sử dụng, định đoạt'], 3, 'Quyền sở hữu gồm 3 quyền năng: chiếm hữu, sử dụng và định đoạt.'),
    Q('Quyền sử dụng là?', ['Khai thác công dụng, hưởng lợi từ tài sản', 'Bán tài sản', 'Cho thuê', 'Phá huỷ tài sản'], 0, 'Sử dụng = khai thác công dụng, hưởng lợi (vd: ở nhà, đi xe).'),
    Q('Quyền định đoạt là?', ['Chỉ thừa kế', 'Quyết định số phận tài sản (bán, tặng, phá huỷ)', 'Chỉ sử dụng', 'Chỉ trông giữ'], 1, 'Định đoạt = quyết định số phận pháp lý của tài sản: bán, tặng cho, phá huỷ…'),
    Q('Nghĩa vụ của công dân?', ['Phá hoại tài sản công', 'Trộm cắp khi có cơ hội', 'Tôn trọng tài sản của người khác', 'Lấy tài sản người khác làm của mình'], 2, 'Mỗi công dân có nghĩa vụ tôn trọng quyền sở hữu của người khác.'),
    Q('Hành vi xâm phạm quyền sở hữu?', ['Trộm cắp, cướp giật, lừa đảo', 'Cho mượn', 'Tặng quà', 'Mua bán hợp pháp'], 0, 'Trộm cắp, cướp giật, lừa đảo… đều vi phạm quyền sở hữu, bị pháp luật xử lý.'),
  ]),

  M(9, 'Nghĩa vụ tôn trọng, bảo vệ tài sản nhà nước và lợi ích công cộng', [
    Q('Tài sản nhà nước gồm?', ['Tài sản tư nhân', 'Chỉ tiền', 'Chỉ đất đai', 'Đất đai, tài nguyên, ngân sách, doanh nghiệp nhà nước…'], 3, 'Tài sản NN gồm đất đai, rừng, khoáng sản, ngân sách, doanh nghiệp NN, công trình công…'),
    Q('Lợi ích công cộng là?', ['Lợi ích cá nhân', 'Lợi ích chung của xã hội', 'Lợi ích của một nhóm', 'Lợi ích gia đình'], 1, 'Lợi ích công cộng = lợi ích chung phục vụ toàn xã hội (đường sá, công viên, trường công…).'),
    Q('Hành vi bảo vệ tài sản công?', ['Giữ gìn bàn ghế trường học, tiết kiệm điện nước', 'Xả rác bừa bãi', 'Vẽ bậy lên tường', 'Phá hoại biển báo'], 0, 'Giữ gìn bàn ghế, tiết kiệm điện nước trường học là bảo vệ tài sản công.'),
    Q('Vi phạm bị xử lý thế nào?', ['Tuỳ mức độ: bồi thường, kỷ luật, hình sự', 'Chỉ phạt tiền', 'Chỉ nhắc nhở', 'Không bị gì'], 0, 'Tuỳ mức độ vi phạm có thể bị bồi thường, kỷ luật hành chính hoặc xử lý hình sự.'),
    Q('Học sinh có thể bảo vệ tài sản công bằng cách?', ['Vẽ bậy', 'Tham gia vệ sinh trường lớp, tố giác hành vi phá hoại', 'Bẻ cành cây', 'Phá ổ khoá'], 1, 'HS tham gia giữ vệ sinh, sửa chữa nhỏ, tố giác hành vi phá hoại là bảo vệ tài sản công.'),
  ]),

  M(10, 'Quyền khiếu nại, tố cáo của công dân', [
    Q('Khiếu nại là?', ['Đề xuất ý kiến', 'Khen thưởng cán bộ', 'Đề nghị xem xét lại quyết định/hành vi xâm phạm quyền, lợi ích của MÌNH', 'Tố cáo người vi phạm pháp luật'], 2, 'Khiếu nại = đề nghị xem xét quyết định/hành vi xâm phạm quyền lợi của BẢN THÂN người khiếu nại.'),
    Q('Tố cáo là?', ['Báo cho cơ quan có thẩm quyền về hành vi vi phạm pháp luật của bất kì ai gây thiệt hại nhà nước/công dân', 'Phê bình', 'Khiếu nại quyết định cá nhân mình', 'Khen thưởng'], 0, 'Tố cáo = báo cáo về hành vi vi phạm pháp luật của bất kì cá nhân/tổ chức nào.'),
    Q('Sự khác biệt giữa khiếu nại và tố cáo?', ['Không khác', 'Khiếu nại bảo vệ quyền lợi mình; tố cáo bảo vệ lợi ích chung', 'Khiếu nại chỉ dành cho cán bộ', 'Tố cáo chỉ dành cho người lớn'], 1, 'Khiếu nại để bảo vệ quyền lợi của chính người khiếu nại; tố cáo bảo vệ lợi ích chung hoặc người khác.'),
    Q('Ai có quyền khiếu nại, tố cáo?', ['Chỉ người lớn', 'Mọi công dân', 'Chỉ luật sư', 'Chỉ cán bộ'], 1, 'Mọi công dân đều có quyền khiếu nại, tố cáo theo Hiến pháp.'),
    Q('Khi khiếu nại, tố cáo cần?', ['Giấu tên', 'Vu khống', 'Bịa đặt', 'Trung thực, đúng sự thật, đúng quy định pháp luật'], 3, 'Người khiếu nại, tố cáo phải trung thực, đúng sự thật, chịu trách nhiệm về nội dung.'),
  ]),

  M(11, 'Quyền tự do ngôn luận', [
    Q('Tự do ngôn luận là?', ['Quyền tham gia bàn bạc, thảo luận, đóng góp ý kiến vào vấn đề chung', 'Bịa đặt thông tin', 'Vu khống người khác', 'Nói gì cũng được'], 0, 'Tự do ngôn luận = quyền tham gia bàn bạc, đóng góp ý kiến vào vấn đề chung trong khuôn khổ pháp luật.'),
    Q('Tự do ngôn luận có giới hạn?', ['Có — phải tuân theo pháp luật, không xâm phạm quyền người khác', 'Không có giới hạn', 'Chỉ giới hạn với người lớn', 'Chỉ giới hạn với người nghèo'], 0, 'Tự do ngôn luận trong khuôn khổ pháp luật, không được xâm phạm quyền và lợi ích của người khác.'),
    Q('Biểu hiện đúng của tự do ngôn luận?', ['Vu khống bạn', 'Tung tin sai trên mạng xã hội', 'Bịa đặt thầy cô', 'Phát biểu ý kiến trong cuộc họp lớp'], 3, 'Phát biểu ý kiến trong cuộc họp, đóng góp xây dựng là biểu hiện đúng.'),
    Q('Vi phạm khi sử dụng tự do ngôn luận?', ['Bịa đặt, vu khống, xúc phạm danh dự người khác', 'Đề xuất ý kiến', 'Phản biện có căn cứ', 'Phát biểu xây dựng'], 0, 'Bịa đặt, vu khống, xúc phạm là vi phạm pháp luật, sẽ bị xử lý.'),
    Q('Khi đăng bài trên mạng xã hội?', ['Đăng gì cũng được', 'Cần kiểm chứng thông tin, không vu khống', 'Sao chép không cần ghi nguồn', 'Tự do tuyệt đối'], 1, 'Mạng xã hội vẫn nằm trong khuôn khổ pháp luật — cần kiểm chứng thông tin, tôn trọng người khác.'),
  ]),

  M(12, 'Hiến pháp nước CHXHCN Việt Nam', [
    Q('Hiến pháp là?', ['Luật cơ bản, có hiệu lực pháp lý cao nhất của Nhà nước', 'Quy định nhà trường', 'Luật giao thông', 'Luật dân sự'], 0, 'Hiến pháp = luật cơ bản, có hiệu lực pháp lý cao nhất, mọi luật khác phải phù hợp Hiến pháp.'),
    Q('Hiến pháp đầu tiên của Việt Nam ban hành năm?', ['1946', '1945', '1959', '1980'], 0, 'Hiến pháp đầu tiên năm 1946, sau Cách mạng tháng Tám.'),
    Q('Hiến pháp hiện hành của VN là?', ['Hiến pháp 2013', 'Hiến pháp 1992', 'Hiến pháp 1980', 'Hiến pháp 1959'], 0, 'Hiến pháp 2013 là Hiến pháp đang có hiệu lực hiện nay.'),
    Q('Cơ quan có quyền sửa đổi Hiến pháp?', ['Chính phủ', 'Chủ tịch nước', 'Toà án', 'Quốc hội'], 3, 'Chỉ Quốc hội mới có quyền làm và sửa đổi Hiến pháp.'),
    Q('Nội dung cơ bản của Hiến pháp?', ['Quy định trường học', 'Quy định kinh doanh', 'Quy định giao thông', 'Chế độ chính trị, quyền nghĩa vụ công dân, tổ chức bộ máy nhà nước'], 3, 'Hiến pháp quy định chế độ chính trị, quyền và nghĩa vụ công dân, tổ chức bộ máy nhà nước.'),
  ]),

  M(13, 'Pháp luật nước CHXHCN Việt Nam', [
    Q('Pháp luật do ai ban hành?', ['Doanh nghiệp', 'Cá nhân', 'Nhà nước', 'Tổ chức xã hội'], 2, 'Pháp luật do Nhà nước (Quốc hội, cơ quan có thẩm quyền) ban hành.'),
    Q('Đặc điểm của pháp luật?', ['Tính quy phạm phổ biến, tính bắt buộc chung, tính xác định chặt chẽ', 'Không có hình thức', 'Tính tự nguyện', 'Áp dụng tuỳ ý'], 0, 'Pháp luật có 3 đặc điểm: phổ biến, bắt buộc chung, xác định chặt chẽ về hình thức.'),
    Q('Vai trò của pháp luật?', ['Phương tiện quản lý nhà nước, bảo vệ quyền công dân', 'Chỉ áp dụng cho cán bộ nhà nước', 'Trừng phạt', 'Phân biệt giàu nghèo'], 0, 'Pháp luật là phương tiện quản lý xã hội, bảo vệ quyền và lợi ích hợp pháp của công dân.'),
    Q('Sống và làm việc theo Hiến pháp, pháp luật là?', ['Chỉ người lớn', 'Chỉ cán bộ', 'Trách nhiệm của mọi công dân', 'Tự nguyện không bắt buộc'], 2, 'Mọi công dân có nghĩa vụ sống và làm việc theo Hiến pháp và pháp luật.'),
    Q('Học sinh thực hiện pháp luật bằng cách?', ['Chấp hành nội quy, luật giao thông, không vi phạm', 'Tự do làm điều mình thích', 'Vi phạm khi không ai biết', 'Chỉ học không cần thực hành'], 0, 'HS thực hiện pháp luật qua việc chấp hành nội quy trường, luật GT, không vi phạm pháp luật.'),
  ]),

  M(14, 'Phòng chống tệ nạn xã hội', [
    Q('Tệ nạn xã hội là?', ['Hoạt động văn hoá', 'Hoạt động thể thao', 'Hành vi sai lệch chuẩn mực đạo đức, gây hậu quả xấu cho xã hội', 'Học tập'], 2, 'Tệ nạn XH = hành vi sai lệch chuẩn mực đạo đức, vi phạm pháp luật, gây hậu quả xấu.'),
    Q('Tệ nạn xã hội phổ biến gồm?', ['Học tập', 'Thể thao', 'Lao động', 'Cờ bạc, ma tuý, mại dâm'], 3, '3 tệ nạn nguy hiểm nhất: cờ bạc, ma tuý, mại dâm.'),
    Q('Tác hại của tệ nạn xã hội?', ['Không có hại', 'Chỉ ảnh hưởng cá nhân', 'Huỷ hoại sức khoẻ, đạo đức, kinh tế cá nhân và XH', 'Có lợi cho xã hội'], 2, 'Tệ nạn XH huỷ hoại sức khoẻ, đạo đức, kinh tế, gia đình và trật tự xã hội.'),
    Q('HS cần làm gì để phòng tránh?', ['Bỏ học theo bạn xấu', 'Chơi cờ bạc giải trí', 'Không chơi với bạn xấu, không thử ma tuý, không cờ bạc', 'Tò mò thử cho biết'], 2, 'Cách phòng tránh: chọn bạn tốt, không tò mò thử, tham gia hoạt động lành mạnh.'),
    Q('Khi phát hiện bạn vướng tệ nạn, nên?', ['Mặc kệ', 'Cô lập bạn', 'Cùng tham gia', 'Báo gia đình, thầy cô để giúp bạn'], 3, 'Báo người lớn để có biện pháp giúp bạn thoát khỏi tệ nạn kịp thời.'),
  ]),

  M(15, 'Phòng chống nhiễm HIV/AIDS', [
    Q('HIV/AIDS lây qua đường?', ['Hắt hơi', 'Ăn chung', 'Máu, tình dục không an toàn, mẹ truyền con', 'Bắt tay'], 2, 'HIV chỉ lây qua máu, quan hệ tình dục không an toàn và mẹ sang con.'),
    Q('HIV/AIDS KHÔNG lây qua?', ['Truyền máu nhiễm', 'Quan hệ TD không an toàn', 'Dùng chung kim tiêm', 'Bắt tay, ôm, ăn uống chung'], 3, 'HIV không lây qua tiếp xúc thông thường: bắt tay, ôm, ăn chung, hắt hơi.'),
    Q('Phòng tránh HIV/AIDS?', ['Chỉ ăn chay', 'Tránh xa người nhiễm hoàn toàn', 'Không dùng chung kim tiêm, sống lành mạnh', 'Không cần phòng'], 2, 'Không dùng chung kim tiêm, sống lành mạnh, tình dục an toàn là biện pháp chính.'),
    Q('Thái độ đúng với người nhiễm HIV?', ['Cô lập', 'Thông cảm, không kỳ thị, giúp đỡ', 'Chế giễu', 'Xa lánh'], 1, 'Người nhiễm HIV không có lỗi — cần thông cảm, không kỳ thị, giúp đỡ họ.'),
    Q('Pháp luật VN quy định?', ['Chỉ ngành y tế lo', 'Không có quy định', 'Phòng chống HIV là trách nhiệm của mọi người', 'Người nhiễm phải cách ly'], 2, 'Luật Phòng chống HIV/AIDS (2006) quy định mọi người có trách nhiệm phòng chống.'),
  ]),

  M(16, 'Phòng ngừa tai nạn vũ khí, cháy nổ và các chất độc hại', [
    Q('Vũ khí, vật liệu nổ thuộc loại?', ['Không có quy định', 'Đồ chơi', 'Hàng tự do mua bán', 'Hàng cấm hoặc hạn chế lưu hành'], 3, 'Vũ khí, vật liệu nổ là hàng đặc biệt — bị cấm hoặc hạn chế nghiêm ngặt.'),
    Q('Hành vi nào bị cấm?', ['Tránh xa khu vực nguy hiểm', 'Báo công an', 'Tự chế pháo nổ, mua bán vũ khí trái phép', 'Khai báo pháo lậu'], 2, 'Tự chế pháo, tàng trữ vũ khí trái phép là hành vi bị pháp luật nghiêm cấm.'),
    Q('Chất độc hại trong nhà gồm?', ['Thuốc trừ sâu, axit, gas', 'Đường, muối', 'Gạo, mì', 'Quần áo'], 0, 'Thuốc trừ sâu, axit, gas… là chất độc hại, cần bảo quản cẩn thận.'),
    Q('Phòng cháy ở nhà cần?', ['Tắt bếp ga sau khi nấu, không để vật cháy gần lửa', 'Đốt rác trong nhà', 'Nghịch lửa', 'Để bếp ga mở'], 0, 'Tắt bếp khi không dùng, không để vật dễ cháy gần lửa là biện pháp phòng cháy cơ bản.'),
    Q('Khi phát hiện cháy, gọi?', ['113', '115', '112', '114'], 3, '114 là số điện thoại cứu hoả ở Việt Nam.'),
  ]),

  M(17, 'Quyền và nghĩa vụ học tập', [
    Q('Quyền học tập của công dân?', ['Chỉ trẻ em', 'Chỉ nam giới', 'Chỉ con nhà giàu', 'Mọi công dân có quyền học không hạn chế, học suốt đời'], 3, 'Hiến pháp quy định mọi công dân có quyền học tập không hạn chế.'),
    Q('Nghĩa vụ học tập của trẻ em VN?', ['Không có nghĩa vụ', 'Chỉ học khi muốn', 'Hoàn thành GD phổ cập từ tiểu học đến THCS', 'Tự do bỏ học'], 2, 'Trẻ em từ 6–14 tuổi có nghĩa vụ hoàn thành GD phổ cập (tiểu học và THCS).'),
    Q('Vai trò của học tập?', ['Không có vai trò', 'Mất thời gian', 'Để khoe khoang', 'Trang bị kiến thức, kỹ năng để phát triển bản thân và xã hội'], 3, 'Học tập giúp con người có tri thức, kỹ năng để sống tốt và đóng góp cho xã hội.'),
    Q('Nhà nước có trách nhiệm?', ['Chỉ lo bậc tiểu học', 'Không có trách nhiệm', 'Chỉ lo cho con cán bộ', 'Đảm bảo điều kiện học tập cho mọi công dân'], 3, 'NN xây dựng trường, cấp học bổng, miễn giảm học phí… để mọi công dân được học.'),
    Q('HS thực hiện quyền học tập tốt nhất là?', ['Chỉ học khi bị ép', 'Lười biếng', 'Chăm chỉ, sáng tạo, học suốt đời', 'Học để đối phó'], 2, 'Chăm chỉ, sáng tạo và có ý thức học suốt đời là cách thực hiện tốt quyền học tập.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Liêm khiết là?', ['Sống tiết kiệm', 'Sống giàu', 'Sống trong sạch, không hám lợi', 'Sống cô độc'], 2, 'Định nghĩa liêm khiết.'),
    Q('Pháp luật do ai ban hành?', ['Tổ chức XH', 'Nhà nước', 'Doanh nghiệp', 'Cá nhân'], 1, 'Pháp luật là sản phẩm của Nhà nước.'),
    Q('Tình bạn lành mạnh dựa trên?', ['Bình đẳng, chân thành', 'Quan hệ giữa người cho và người nhận', 'Lợi dụng', 'Bao che'], 0, 'Nguyên tắc tình bạn lành mạnh.'),
    Q('Tôn trọng lẽ phải là?', ['Công nhận, ủng hộ, làm theo điều đúng', 'Sợ hãi', 'Im lặng', 'Theo số đông'], 0, 'Định nghĩa tôn trọng lẽ phải.'),
    Q('Hiến pháp đầu tiên của VN năm?', ['1959', '1945', '1946', '1980'], 2, 'Hiến pháp 1946.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Quyền tự do tín ngưỡng, tôn giáo', [
    Q('Tín ngưỡng là?', ['Phong tục', 'Niềm tin vào điều thiêng liêng', 'Mê tín', 'Sự sợ hãi'], 1, 'Tín ngưỡng = niềm tin của con người vào điều thiêng liêng, siêu nhiên.'),
    Q('Tôn giáo là?', ['Mê tín', 'Tập quán', 'Hình thức tín ngưỡng có hệ thống tổ chức, giáo lý, nghi lễ', 'Phong tục'], 2, 'Tôn giáo có hệ thống giáo lý, tổ chức, nghi lễ (Phật giáo, Công giáo, Tin Lành…).'),
    Q('Mê tín dị đoan là?', ['Tín ngưỡng truyền thống', 'Tôn giáo chân chính', 'Khoa học', 'Tin nhảm, không có cơ sở, gây hậu quả xấu'], 3, 'Mê tín dị đoan là niềm tin mù quáng, vô căn cứ, gây hậu quả tiêu cực.'),
    Q('Công dân có quyền?', ['Phải theo tôn giáo của bố mẹ', 'Theo hoặc không theo tôn giáo nào', 'Chỉ theo một tôn giáo', 'Bị ép buộc theo tôn giáo'], 1, 'Hiến pháp: tự do tín ngưỡng, tôn giáo, theo hoặc không theo bất kì tôn giáo nào.'),
    Q('Hành vi nào bị cấm?', ['Cầu nguyện', 'Đi lễ chùa', 'Lợi dụng tôn giáo để vi phạm pháp luật', 'Đi lễ nhà thờ'], 2, 'Lợi dụng tôn giáo, tín ngưỡng để vi phạm pháp luật, gây mất trật tự bị nghiêm cấm.'),
  ]),

  M(20, 'Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam', [
    Q('Nhà nước CHXHCN Việt Nam thành lập ngày?', ['7/5/1954', '2/9/1945', '30/4/1975', '19/8/1945'], 1, 'Bác Hồ đọc Tuyên ngôn độc lập ngày 2/9/1945, khai sinh nước VN dân chủ cộng hoà.'),
    Q('Bản chất nhà nước ta?', ['Tư sản', 'Nhà nước pháp quyền XHCN của dân, do dân, vì dân', 'Thuộc địa', 'Phong kiến'], 1, 'Nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.'),
    Q('Bộ máy nhà nước gồm 4 cấp?', ['Chỉ 1 cấp', 'Chỉ TƯ và địa phương', 'TƯ, miền, vùng, xã', 'TƯ, tỉnh, huyện, xã'], 3, 'Bộ máy NN VN có 4 cấp: Trung ương, tỉnh, huyện, xã.'),
    Q('Cơ quan quyền lực cao nhất?', ['Toà án', 'Chính phủ', 'Viện kiểm sát', 'Quốc hội'], 3, 'Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, có quyền lập hiến lập pháp.'),
    Q('Cơ quan hành chính cao nhất?', ['Chính phủ', 'Toà án', 'Chủ tịch nước', 'Quốc hội'], 0, 'Chính phủ là cơ quan hành chính nhà nước cao nhất.'),
  ]),

  M(21, 'Bộ máy Nhà nước cấp cơ sở (xã/phường/thị trấn)', [
    Q('Cấp cơ sở gồm?', ['Trung ương và các bộ ngành', 'Vùng kinh tế trọng điểm', 'Tỉnh, huyện', 'Xã, phường, thị trấn'], 3, 'Cấp cơ sở là cấp gần dân nhất, gồm xã, phường, thị trấn.'),
    Q('HĐND xã/phường do ai bầu?', ['Nhân dân địa phương', 'Quốc hội', 'Chính phủ', 'Chủ tịch UBND'], 0, 'HĐND do nhân dân địa phương bầu trực tiếp.'),
    Q('UBND xã/phường có nhiệm vụ?', ['Kiểm sát', 'Xét xử', 'Lập pháp', 'Quản lý hành chính, giải quyết công việc địa phương'], 3, 'UBND là cơ quan chấp hành của HĐND, quản lý hành chính địa phương.'),
    Q('Công dân làm khai sinh ở đâu?', ['Chính phủ', 'Quốc hội', 'UBND xã/phường', 'Toà án'], 2, 'Khai sinh, khai tử, kết hôn… đăng ký tại UBND xã/phường nơi cư trú.'),
    Q('Trách nhiệm công dân với chính quyền cơ sở?', ['Né tránh', 'Phản đối tất cả', 'Phớt lờ', 'Tôn trọng, chấp hành quy định, đóng góp xây dựng'], 3, 'Công dân cần tôn trọng, chấp hành và tham gia đóng góp ý kiến cho chính quyền địa phương.'),
  ]),

  M(22, 'Quyền và nghĩa vụ của công dân trong gia đình', [
    Q('Gia đình là?', ['Tế bào của xã hội, cái nôi nuôi dưỡng nhân cách', 'Một câu lạc bộ', 'Một nhóm bạn', 'Một tổ chức kinh tế'], 0, 'Gia đình = tế bào của xã hội, môi trường giáo dục đầu tiên.'),
    Q('Bổn phận của con cháu?', ['Yêu quý, kính trọng, hiếu thảo với ông bà cha mẹ', 'Lảng tránh', 'Chỉ vâng lời khi được cho quà', 'Phản kháng'], 0, 'Con cháu phải hiếu thảo, kính trọng, chăm sóc ông bà cha mẹ.'),
    Q('Cha mẹ có nghĩa vụ?', ['Bóc lột con', 'Bỏ rơi con', 'Nuôi dưỡng, giáo dục con', 'Bạo hành con'], 2, 'Cha mẹ phải nuôi dưỡng, chăm sóc, giáo dục con cái.'),
    Q('Anh chị em trong nhà nên?', ['Tranh giành', 'Yêu thương, đùm bọc, giúp đỡ nhau', 'Ganh ghét', 'Ai lo việc người nấy, không can thiệp'], 1, '"Anh em như thể tay chân" — yêu thương đùm bọc lẫn nhau.'),
    Q('Hành vi vi phạm pháp luật gia đình?', ['Dạy dỗ con', 'Chăm sóc cha mẹ', 'Bạo lực gia đình', 'Yêu thương con cái'], 2, 'Bạo lực gia đình bị Luật Phòng chống bạo lực gia đình nghiêm cấm.'),
  ]),

  M(23, 'Bình đẳng giới và bạo lực gia đình', [
    Q('Bình đẳng giới là?', ['Nam và nữ có quyền và nghĩa vụ ngang nhau trong mọi lĩnh vực', 'Nam được ưu tiên', 'Nữ được ưu tiên', 'Nam giới quyết định mọi việc'], 0, 'Bình đẳng giới = nam nữ có quyền, nghĩa vụ và cơ hội ngang nhau.'),
    Q('Bạo lực gia đình gồm?', ['Không có khái niệm này', 'Bạo lực thể xác, tinh thần, kinh tế, tình dục', 'Chỉ lời nói', 'Chỉ thể xác'], 1, '4 dạng: thể xác, tinh thần, kinh tế và tình dục theo Luật PCBLGD.'),
    Q('Khi bị bạo lực gia đình, cần?', ['Bỏ trốn', 'Báo công an, người thân, tổng đài 111', 'Tự giải quyết bằng cách trả đũa lại', 'Im lặng chịu đựng'], 1, 'Báo công an, người thân, gọi 111 (tổng đài bảo vệ trẻ em) để được giúp đỡ.'),
    Q('Trẻ em bị bạo hành có thể gọi?', ['115', '114', '111', '113'], 2, '111 = tổng đài quốc gia bảo vệ trẻ em.'),
    Q('Vai trò của bình đẳng giới?', ['Phát triển xã hội bền vững, hạnh phúc gia đình', 'Gây mâu thuẫn', 'Không có vai trò', 'Lãng phí'], 0, 'Bình đẳng giới góp phần phát triển XH bền vững và hạnh phúc gia đình.'),
  ]),

  M(24, 'Phòng chống bạo lực học đường', [
    Q('Bạo lực học đường gồm?', ['Đánh nhau, bắt nạt, lăng mạ, cô lập trong trường học', 'Học tập', 'Hoạt động ngoại khoá', 'Vui chơi'], 0, 'BLHĐ = hành vi xâm phạm thể chất, tinh thần xảy ra trong/quanh trường học.'),
    Q('Cyber bullying là?', ['Học nhóm', 'Học online', 'Bắt nạt qua mạng (lập group nói xấu, đăng ảnh xấu hổ)', 'Chơi game'], 2, 'Cyber bullying = bắt nạt qua mạng XH, tin nhắn.'),
    Q('Khi bị bắt nạt, em nên?', ['Báo thầy cô, cha mẹ, không im lặng chịu đựng', 'Bỏ học', 'Im lặng chấp nhận', 'Tìm cách trả thù'], 0, 'Báo người lớn ngay để được giúp đỡ kịp thời, không tự xử lý.'),
    Q('Khi thấy bạn bị bắt nạt?', ['Mặc kệ', 'Quay clip phát tán', 'Cùng tham gia bắt nạt', 'Báo thầy cô, ủng hộ bạn'], 3, 'Báo thầy cô và đứng về phía nạn nhân là cách ứng xử đúng.'),
    Q('Hậu quả BLHĐ?', ['Rèn bản lĩnh', 'Không hậu quả', 'Tốt cho học sinh', 'Tổn thương tâm lý, học sa sút, có thể tự tử'], 3, 'BLHĐ gây tổn thương lâu dài về tâm lý, ảnh hưởng học tập và sức khoẻ.'),
  ]),

  M(25, 'An toàn giao thông và trách nhiệm công dân', [
    Q('Luật Giao thông đường bộ áp dụng?', ['Mọi người tham gia giao thông', 'Chỉ người lớn', 'Chỉ ô tô', 'Chỉ tài xế'], 0, 'Luật GTĐB áp dụng với mọi người tham gia giao thông, gồm cả HS đi bộ.'),
    Q('HS THCS chưa đủ tuổi đi xe?', ['Xe đạp', 'Xe đạp gấp loại nhỏ', 'Xe đạp điện <50cc', 'Xe máy'], 3, 'HS THCS không được điều khiển xe máy (cần đủ 18 tuổi và có bằng lái).'),
    Q('Đội mũ bảo hiểm bắt buộc khi?', ['Đi xe scooter trẻ em trong sân nhà', 'Đi xe đạp thường', 'Đi xe máy, xe đạp điện', 'Ngồi trong ô tô'], 2, 'Bắt buộc đội mũ BH khi đi xe máy, xe đạp điện (cả người lái và ngồi sau).'),
    Q('Vượt đèn đỏ là?', ['Quyền của người lái', 'Không sao', 'Vi phạm luật, có thể gây tai nạn', 'Cách đi nhanh'], 2, 'Vượt đèn đỏ là vi phạm Luật GT, dễ gây tai nạn nghiêm trọng.'),
    Q('Khi xảy ra tai nạn, cần?', ['Báo công an, cứu giúp người bị nạn', 'Bỏ chạy', 'Mặc kệ', 'Quay clip'], 0, 'Cấp cứu nạn nhân, báo công an, không bỏ chạy (tội bỏ trốn sau tai nạn).'),
  ]),

  M(26, 'Quyền tham gia quản lý nhà nước, quản lý xã hội', [
    Q('Quyền tham gia quản lý NN của công dân?', ['Không có quyền', 'Chỉ người lớn', 'Bầu cử, ứng cử, đóng góp ý kiến, giám sát', 'Chỉ cán bộ mới có'], 2, 'Mọi công dân đều có quyền tham gia quản lý NN qua nhiều hình thức.'),
    Q('Hình thức tham gia trực tiếp?', ['Không tham gia', 'Im lặng', 'Bầu cử, ứng cử, biểu quyết các vấn đề trọng đại', 'Qua người đại diện'], 2, 'Tham gia trực tiếp: bầu cử, biểu quyết, đóng góp ý kiến, giám sát.'),
    Q('Hình thức tham gia gián tiếp?', ['Tự quyết định', 'Không cần ai', 'Bỏ trống', 'Qua đại biểu Quốc hội, HĐND'], 3, 'Tham gia gián tiếp qua người đại diện được bầu (đại biểu QH, HĐND).'),
    Q('Tuổi đi bầu cử ở VN?', ['18 tuổi', '16 tuổi', '14 tuổi', '21 tuổi'], 0, 'Công dân đủ 18 tuổi trở lên có quyền bầu cử (Hiến pháp).'),
    Q('Tuổi ứng cử đại biểu QH/HĐND?', ['21 tuổi', '18 tuổi', '30 tuổi', '25 tuổi'], 0, 'Công dân đủ 21 tuổi có quyền ứng cử (Hiến pháp).'),
  ]),

  M(27, 'Nghĩa vụ bảo vệ Tổ quốc', [
    Q('Bảo vệ Tổ quốc là?', ['Không cần thiết', 'Trách nhiệm của quân đội', 'Tự nguyện', 'Nghĩa vụ thiêng liêng, quyền cao quý của công dân'], 3, 'Hiến pháp: Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân.'),
    Q('Nghĩa vụ quân sự với nam thanh niên?', ['Phải đăng ký từ 17 tuổi, gọi nhập ngũ 18–25 tuổi', 'Bắt buộc cả nữ', 'Không bắt buộc', 'Tự nguyện hoàn toàn'], 0, 'Luật NVQS: nam đăng ký từ 17 tuổi, gọi nhập ngũ 18–25 tuổi (đến 27 với HS/SV được hoãn).'),
    Q('Bảo vệ Tổ quốc gồm?', ['Chỉ quân sự', 'Chỉ chính trị', 'Quân sự, kinh tế, văn hoá, an ninh', 'Chỉ kinh tế'], 2, 'Bảo vệ TQ toàn diện: quân sự, kinh tế, văn hoá, an ninh chính trị.'),
    Q('HS thực hiện nghĩa vụ này bằng?', ['Không cần làm gì', 'Học tập tốt, rèn luyện sức khoẻ, yêu nước', 'Trốn tránh', 'Chờ lớn'], 1, 'HS chuẩn bị thể chất, tri thức, lòng yêu nước để bảo vệ TQ.'),
    Q('Trốn nghĩa vụ quân sự?', ['Không sao', 'Vi phạm pháp luật, bị xử lý', 'Khôn ngoan', 'Quyền tự do'], 1, 'Trốn nghĩa vụ quân sự là vi phạm pháp luật, bị xử lý hành chính hoặc hình sự.'),
  ]),

  M(28, 'Sống có đạo đức và tuân theo pháp luật', [
    Q('Sống có đạo đức là?', ['Sống theo chuẩn mực đạo đức xã hội, biết yêu thương, tự giác', 'Sống ích kỷ', 'Sống nguyên tắc cứng nhắc', 'Sống thờ ơ'], 0, 'Sống có đạo đức = tuân theo chuẩn mực đạo đức XH, tự giác hành động vì cái đúng.'),
    Q('Sống có pháp luật là?', ['Chỉ tuân khi bị giám sát', 'Vi phạm khi có lợi', 'Né tránh pháp luật', 'Tôn trọng, tuân theo Hiến pháp và pháp luật'], 3, 'Sống có pháp luật = tôn trọng, chấp hành nghiêm túc Hiến pháp và pháp luật.'),
    Q('Mối quan hệ đạo đức và pháp luật?', ['Bổ sung, hỗ trợ nhau', 'Loại trừ nhau', 'Đối lập', 'Không liên quan'], 0, 'Đạo đức và pháp luật bổ sung, hỗ trợ — đạo đức nội tâm, pháp luật ngoại tại.'),
    Q('Người sống có đạo đức và pháp luật?', ['Không có lợi ích', 'Được xã hội tôn trọng, sống hạnh phúc', 'Khó khăn trong cuộc sống', 'Bị xa lánh'], 1, 'Người sống đúng đạo đức và pháp luật được tôn trọng, có cuộc sống ý nghĩa.'),
    Q('HS rèn luyện bằng cách?', ['Tu dưỡng đạo đức, học và làm theo pháp luật', 'Vi phạm khi có lợi', 'Sống bản năng', 'Chỉ học lý thuyết'], 0, 'HS tu dưỡng đạo đức qua hành vi hằng ngày và tự giác tuân thủ pháp luật.'),
  ]),

  M(29, 'Lao động và hướng nghiệp', [
    Q('Lao động có vai trò?', ['Lãng phí thời gian', 'Không cần thiết', 'Chỉ vất vả', 'Tạo ra của cải vật chất, tinh thần, là điều kiện tồn tại của xã hội'], 3, 'Lao động là hoạt động cốt lõi tạo ra của cải, là điều kiện tồn tại của xã hội loài người.'),
    Q('Quyền và nghĩa vụ lao động của công dân?', ['Có quyền làm việc, có nghĩa vụ lao động', 'Chỉ có quyền', 'Không bắt buộc', 'Chỉ có nghĩa vụ'], 0, 'Lao động vừa là quyền vừa là nghĩa vụ của mọi công dân theo Hiến pháp.'),
    Q('Tuổi tối thiểu được lao động?', ['12 tuổi', '18 tuổi', '21 tuổi', '15 tuổi (đối với một số công việc)'], 3, 'Bộ luật LĐ: tối thiểu 15 tuổi cho một số việc, có hạn chế giờ làm và loại việc.'),
    Q('Hành vi cấm với người dưới 18?', ['Thực tập', 'Làm công việc nặng nhọc, độc hại', 'Học nghề', 'Đi học'], 1, 'Cấm sử dụng lao động dưới 18 tuổi làm công việc nặng nhọc, độc hại, nguy hiểm.'),
    Q('Hướng nghiệp giúp HS?', ['Chọn nghề phù hợp năng lực, sở thích, nhu cầu XH', 'Chỉ chọn theo bố mẹ', 'Bị ép chọn nghề', 'Không cần'], 0, 'Hướng nghiệp giúp HS hiểu mình, hiểu nghề và xã hội để chọn nghề phù hợp.'),
  ]),

  M(30, 'Hôn nhân và gia đình', [
    Q('Tuổi kết hôn theo Luật?', ['Nam ≥18, nữ ≥16', 'Cả hai ≥18', 'Nam ≥22, nữ ≥20', 'Nam ≥20, nữ ≥18'], 3, 'Luật HN&GĐ 2014: nam đủ 20, nữ đủ 18.'),
    Q('Nguyên tắc hôn nhân ở VN?', ['Tự nguyện, một vợ một chồng, bình đẳng', 'Cha mẹ đặt đâu con ngồi đấy', 'Bị ép buộc', 'Đa thê'], 0, 'Nguyên tắc: tự nguyện, tiến bộ, một vợ một chồng, bình đẳng vợ chồng.'),
    Q('Tảo hôn là?', ['Kết hôn đúng tuổi', 'Kết hôn muộn', 'Sống thử', 'Kết hôn khi chưa đủ tuổi luật định'], 3, 'Tảo hôn = kết hôn khi chưa đủ tuổi theo luật, bị nghiêm cấm.'),
    Q('Quan hệ vợ chồng dựa trên?', ['Lợi ích kinh tế', 'Tình yêu, sự tôn trọng, bình đẳng', 'Sợ hãi', 'Bạo lực'], 1, 'Quan hệ vợ chồng lành mạnh xây trên tình yêu, tôn trọng, bình đẳng.'),
    Q('Hôn nhân cận huyết bị?', ['Tuỳ chọn', 'Cho phép', 'Cấm tuyệt đối', 'Khuyến khích'], 2, 'Luật cấm kết hôn trong phạm vi 3 đời (gây dị tật di truyền cho con).'),
  ]),

  M(31, 'Tôn trọng và học hỏi văn hoá các dân tộc Việt Nam', [
    Q('Việt Nam có bao nhiêu dân tộc?', ['55', '50', '53', '54 dân tộc'], 3, 'VN có 54 dân tộc anh em, Kinh là đa số (~85%).'),
    Q('Văn hoá các dân tộc VN có đặc điểm?', ['Đa dạng, thống nhất trong sự khác biệt', 'Đồng nhất', 'Chỉ do dân tộc Kinh tạo nên', 'Đối lập nhau'], 0, 'Văn hoá VN đa dạng (54 dân tộc) nhưng thống nhất trong cộng đồng VN.'),
    Q('Tôn trọng văn hoá dân tộc thiểu số thể hiện qua?', ['Kỳ thị', 'Bắt theo văn hoá Kinh', 'Học tiếng, hiểu phong tục, không kỳ thị', 'Phớt lờ'], 2, 'Tôn trọng = học hỏi, hiểu phong tục, không kỳ thị, hỗ trợ bảo tồn.'),
    Q('Ngày Văn hoá các dân tộc VN?', ['2/9', '20/11', '19/4', '30/4'], 2, '19/4 là Ngày Văn hoá các dân tộc Việt Nam.'),
    Q('Hành vi vi phạm?', ['Bảo tồn ngôn ngữ', 'Kỳ thị, miệt thị dân tộc thiểu số', 'Giúp đỡ vùng cao', 'Học hỏi văn hoá khác'], 1, 'Kỳ thị, gây chia rẽ dân tộc bị Hiến pháp và pháp luật nghiêm cấm.'),
  ]),

  M(32, 'Trách nhiệm với cộng đồng và xã hội', [
    Q('Trách nhiệm với cộng đồng là?', ['Tránh né', 'Chỉ lo bản thân', 'Sống ích kỷ', 'Sống có ích, đóng góp xây dựng cộng đồng'], 3, 'Trách nhiệm cộng đồng = sống có ích, đóng góp xây dựng cộng đồng/xã hội.'),
    Q('HS có thể đóng góp bằng?', ['Chỉ quyên góp tiền khi có thiên tai', 'Im lặng', 'Tham gia thiện nguyện, bảo vệ môi trường, tuyên truyền', 'Không quan tâm'], 2, 'HS đóng góp qua hoạt động tình nguyện, bảo vệ MT, tuyên truyền văn minh.'),
    Q('Tình nguyện viên là?', ['Người bị ép', 'Cán bộ nhà nước', 'Người được trả lương', 'Người tự nguyện làm việc vì cộng đồng, không vì lợi ích cá nhân'], 3, 'TNV tự nguyện, không vì lợi ích vật chất, làm việc vì cộng đồng.'),
    Q('Mùa hè xanh, tiếp sức mùa thi là?', ['Khoá học', 'Cuộc thi', 'Hoạt động kinh doanh', 'Hoạt động TN của sinh viên'], 3, 'Đây là phong trào tình nguyện do Đoàn TN tổ chức hằng năm.'),
    Q('Ý nghĩa hoạt động cộng đồng với HS?', ['Rèn kỹ năng, lòng nhân ái, có ích cho xã hội', 'Chỉ để cộng điểm thi đua, không có ý nghĩa khác', 'Tốn tiền', 'Mất thời gian'], 0, 'Hoạt động cộng đồng giúp HS trưởng thành, rèn kỹ năng và tinh thần nhân ái.'),
  ]),

  M(33, 'Bảo vệ môi trường và tài nguyên thiên nhiên', [
    Q('Môi trường gồm?', ['Chỉ không khí', 'Chỉ tự nhiên', 'Chỉ nhân tạo', 'Yếu tố tự nhiên và nhân tạo bao quanh con người'], 3, 'Môi trường = tổng thể yếu tố tự nhiên (đất, nước, không khí…) và nhân tạo (nhà, đường…).'),
    Q('Tài nguyên không tái tạo gồm?', ['Gió, mặt trời', 'Nước, rừng', 'Dầu mỏ, than, khoáng sản', 'Nước ngầm và không khí sạch'], 2, 'TN không tái tạo cạn kiệt khi sử dụng: dầu mỏ, than, khoáng sản.'),
    Q('Bảo vệ MT là trách nhiệm của?', ['Mọi người', 'Chỉ ngành môi trường', 'Doanh nghiệp', 'Chỉ chính phủ'], 0, 'Bảo vệ MT là trách nhiệm chung của toàn xã hội theo Luật BVMT.'),
    Q('HS có thể bảo vệ MT bằng?', ['Trồng cây, không xả rác, tiết kiệm điện nước', 'Phá rừng', 'Xả nước thừa', 'Đốt rác bừa bãi'], 0, 'HS đóng góp qua hành động nhỏ: phân loại rác, tiết kiệm điện nước, trồng cây.'),
    Q('Ngày Môi trường thế giới?', ['22/4', '5/6', '8/3', '21/3'], 1, '5/6 là Ngày Môi trường thế giới.'),
  ]),

  M(34, 'Phòng chống tội phạm vị thành niên', [
    Q('Người chưa thành niên là?', ['Dưới 14', 'Dưới 21', 'Dưới 18 tuổi', 'Dưới 16'], 2, 'Theo luật VN: người chưa thành niên là người dưới 18 tuổi.'),
    Q('Tuổi chịu trách nhiệm hình sự?', ['12 tuổi', '21 tuổi', '18 tuổi', 'Từ 14 tuổi (với tội rất nghiêm trọng), 16 tuổi (mọi tội)'], 3, 'BLHS: từ 14 phải chịu TNHS với tội rất nghiêm trọng/đặc biệt nghiêm trọng; từ 16 với mọi tội.'),
    Q('Nguyên nhân tội phạm vị thành niên?', ['Do số phận', 'Do tài năng', 'Thiếu giáo dục, bạn xấu, thiếu hiểu biết pháp luật', 'Do may mắn'], 2, 'Nguyên nhân chính: gia đình thiếu quan tâm, bạn bè xấu, thiếu giáo dục PL, tệ nạn XH.'),
    Q('HS phòng tránh bằng cách?', ['Không cần đề phòng', 'Thử cho biết', 'Theo bạn xấu', 'Chọn bạn tốt, học pháp luật, tránh xa tệ nạn'], 3, 'Chọn bạn tốt, hiểu pháp luật, tham gia hoạt động lành mạnh để phòng tránh.'),
    Q('Khi bạn rủ vi phạm pháp luật, em sẽ?', ['Sợ bị bạn ghét nên đồng ý', 'Tham gia cho vui', 'Từ chối, khuyên bạn dừng lại', 'Im lặng'], 2, 'Kiên quyết từ chối và khuyên bạn — bảo vệ chính mình và giúp bạn.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Quyền sở hữu tài sản gồm?', ['2 quyền', 'Chỉ sử dụng', 'Chiếm hữu, sử dụng, định đoạt', 'Chỉ định đoạt'], 2, '3 quyền năng của sở hữu.'),
    Q('Tuổi bầu cử ở VN?', ['18', '25', '21', '16'], 0, 'Hiến pháp 2013.'),
    Q('Nhà nước VN có bao nhiêu cấp?', ['5', '4', '3', '2'], 1, 'TƯ, tỉnh, huyện, xã.'),
    Q('Tuổi kết hôn của nữ?', ['20', 'Đủ 18', '16', '21'], 1, 'Luật HN&GĐ.'),
    Q('Khi nhặt được của rơi, em nên?', ['Chia bạn bè', 'Vứt đi', 'Giữ làm của riêng', 'Trả lại chủ hoặc giao công an'], 3, 'Thể hiện liêm khiết và tôn trọng sở hữu của người khác.'),
  ]),
];

export const S8GDCD_SCENARIOS = indexBy(S8GDCD_WEEKS);
