// ============================================================
// Lớp 7 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám chương trình GDPT 2018 — đọc hiểu, thực hành tiếng Việt, viết, nói nghe.
// ID prefix: "S7NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7NV', 'ngu-van', n, title, qs, opts);

export const S7NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Mở đầu — Khám phá thế giới văn học', [
    Q('Văn học giúp con người?', ['Hiểu mình, hiểu người, hiểu cuộc đời', 'Chỉ giải trí', 'Chỉ học thuộc', 'Chỉ làm giàu vốn từ'], 0, 'Văn học có giá trị nhận thức, giáo dục và thẩm mỹ.'),
    Q('Tác phẩm văn học gồm ba yếu tố cơ bản?', ['Tác giả — văn bản — người đọc', 'Đề tài — bố cục — nhân vật', 'Mở — thân — kết', 'Lời — nhạc — hoạ'], 0, 'Quá trình giao tiếp văn học.'),
    Q('Đọc hiểu văn bản nên bắt đầu bằng?', ['Đọc kĩ và tìm thông tin chính', 'Trả lời ngay câu hỏi cuối bài', 'Bỏ qua nhan đề', 'Chỉ xem ảnh minh hoạ'], 0, 'Đọc kĩ giúp nắm được nội dung cốt lõi.'),
    Q('Đặc trưng của văn học khác báo chí ở chỗ?', ['Có hư cấu, hình tượng nghệ thuật', 'Chỉ có thông tin', 'Phải tuyệt đối khách quan', 'Không có cảm xúc'], 0, 'Văn học dùng hình tượng và hư cấu.'),
    Q('Trong văn học, "đề tài" là?', ['Phạm vi hiện thực được phản ánh', 'Tên tác giả', 'Hình thức xuất bản', 'Người đọc'], 0, 'Đề tài là mảng đời sống tác phẩm hướng đến.'),
    Q('Nhân vật trong truyện là?', ['Người, vật được nhà văn xây dựng để gửi gắm tư tưởng', 'Tác giả', 'Người đọc', 'Người kể chuyện thật'], 0, 'Nhân vật là sản phẩm hư cấu của nhà văn.'),
  ]),

  M(2, 'Thơ trữ tình hiện đại — "Mẹ và quả" (Nguyễn Khoa Điềm)', [
    Q('Bài thơ "Mẹ và quả" có hình ảnh trung tâm là?', ['Mẹ và những trái cây', 'Người con đi xa', 'Cánh đồng', 'Dòng sông'], 0, 'Hình ảnh mẹ và quả gắn bó suốt bài.'),
    Q('Tác giả bài thơ là?', ['Nguyễn Khoa Điềm', 'Xuân Diệu', 'Tố Hữu', 'Huy Cận'], 0, 'Nguyễn Khoa Điềm — nhà thơ thế hệ chống Mỹ.'),
    Q('"Quả" trong bài có ý nghĩa biểu tượng cho?', ['Thành quả lao động và những đứa con', 'Tiền bạc', 'Mùa màng', 'Lễ vật'], 0, 'Quả vừa hiện thực vừa biểu tượng cho con cái.'),
    Q('Hai câu cuối "Tôi hoảng sợ ngày bàn tay mẹ mỏi / Mình vẫn còn một thứ quả non xanh" thể hiện?', ['Nỗi day dứt, lo sợ chưa trưởng thành kịp', 'Niềm vui', 'Sự giận dữ', 'Sự thờ ơ'], 0, '"Quả non xanh" = người con chưa kịp trưởng thành.'),
    Q('Biện pháp tu từ nổi bật trong bài là?', ['Ẩn dụ', 'Hoán dụ', 'Nói quá', 'Chơi chữ'], 0, 'Ẩn dụ "quả" cho con cái, thành quả.'),
    Q('Cảm xúc chủ đạo của bài thơ là?', ['Yêu thương và biết ơn mẹ', 'Hờn dỗi', 'Châm biếm', 'Vui đùa'], 0, 'Tình mẹ con sâu nặng, biết ơn.'),
  ]),

  M(3, '"Tiếng gà trưa" — Xuân Quỳnh', [
    Q('Tác giả "Tiếng gà trưa" là?', ['Xuân Quỳnh', 'Xuân Diệu', 'Tố Hữu', 'Bằng Việt'], 0, 'Xuân Quỳnh sáng tác bài thơ năm 1968.'),
    Q('Bài thơ viết theo thể thơ?', ['Năm chữ', 'Bảy chữ', 'Lục bát', 'Tự do'], 0, 'Chủ yếu năm chữ, có biến thể.'),
    Q('Âm thanh trung tâm gợi ra dòng hồi tưởng là?', ['Tiếng gà trưa', 'Tiếng chim', 'Tiếng sóng', 'Tiếng trống'], 0, '"Cục… cục tác cục ta" trên đường hành quân.'),
    Q('Hình ảnh bà hiện lên qua?', ['Tay khum soi trứng, lo đàn gà', 'Lời ru ngọt ngào', 'Bữa cơm thanh đạm', 'Câu chuyện cổ tích'], 0, 'Hình ảnh tỉ mỉ chăm chút đàn gà.'),
    Q('Bài thơ thể hiện tình cảm?', ['Bà cháu và tình yêu quê hương đất nước', 'Mẹ con', 'Tình bạn', 'Tình yêu đôi lứa'], 0, 'Tình bà cháu hoà cùng tình yêu Tổ quốc.'),
    Q('Điệp ngữ "Vì" ở cuối bài có tác dụng?', ['Nhấn mạnh động lực chiến đấu cho gia đình, quê hương', 'Tạo nhịp', 'Liệt kê đơn thuần', 'Đảo ngữ'], 0, 'Vì… vì… — nhấn mạnh lí tưởng chiến đấu.'),
  ]),

  M(4, 'Thơ thời chống Mỹ — "Bài thơ về tiểu đội xe không kính"', [
    Q('Tác giả bài thơ là?', ['Phạm Tiến Duật', 'Tố Hữu', 'Quang Dũng', 'Chế Lan Viên'], 0, 'Phạm Tiến Duật — gương mặt tiêu biểu chống Mỹ.'),
    Q('Hình ảnh "xe không kính" gợi?', ['Hiện thực ác liệt của chiến tranh', 'Sự lãng mạn', 'Phong cảnh đẹp', 'Sự nghèo khó'], 0, 'Bom đạn làm xe vỡ kính — hiện thực khốc liệt.'),
    Q('Người lính lái xe Trường Sơn hiện lên với phẩm chất?', ['Dũng cảm, lạc quan, tinh nghịch', 'Buồn bã', 'Nhút nhát', 'Lạnh lùng'], 0, 'Tinh thần ngang tàng, dí dỏm.'),
    Q('"Trái tim" trong câu cuối là biểu tượng cho?', ['Lòng yêu nước, ý chí giải phóng miền Nam', 'Tình yêu cá nhân', 'Sự yếu đuối', 'Niềm vui'], 0, 'Trái tim cách mạng quyết định tất cả.'),
    Q('Thể thơ của bài là?', ['Tự do', 'Lục bát', 'Thất ngôn bát cú', 'Năm chữ'], 0, 'Câu dài ngắn linh hoạt, gần văn xuôi.'),
    Q('Giọng điệu chủ đạo của bài là?', ['Trẻ trung, ngang tàng, hóm hỉnh', 'Bi luỵ', 'Trầm buồn', 'Giận dữ'], 0, 'Đậm chất lính trẻ.'),
  ]),

  M(5, 'Thơ trung đại — "Sông núi nước Nam"', [
    Q('"Sông núi nước Nam" (Nam quốc sơn hà) thường được coi là?', ['Bản tuyên ngôn độc lập đầu tiên của Việt Nam', 'Bài ca dao', 'Truyền thuyết', 'Bài tế'], 0, 'Khẳng định chủ quyền lãnh thổ.'),
    Q('Bài thơ tương truyền do ai sáng tác?', ['Lý Thường Kiệt (giả định)', 'Trần Quốc Tuấn', 'Nguyễn Trãi', 'Lê Lợi'], 0, 'Thường gắn với Lý Thường Kiệt trong kháng chiến chống Tống.'),
    Q('Thể thơ của bài là?', ['Thất ngôn tứ tuyệt Đường luật (chữ Hán)', 'Lục bát', 'Năm chữ', 'Tự do'], 0, 'Bốn câu bảy chữ, chữ Hán.'),
    Q('"Nam đế cư" có nghĩa?', ['Vua nước Nam ở', 'Người Nam sinh sống', 'Người Trung Hoa cai trị', 'Trời đất an bài'], 0, 'Khẳng định vua Nam là chủ.'),
    Q('Câu "Như hà nghịch lỗ lai xâm phạm" mang ý?', ['Vì sao lũ giặc dám đến xâm phạm', 'Mời gọi khách quý', 'Ca tụng vua', 'Tả cảnh sông núi'], 0, 'Câu hỏi tu từ vạch tội kẻ thù.'),
    Q('Tinh thần xuyên suốt bài là?', ['Yêu nước và tự tôn dân tộc', 'Hoài cổ', 'Bi luỵ', 'Tả tình lứa đôi'], 0, 'Tinh thần độc lập, tự cường.'),
  ]),

  M(6, '"Phò giá về kinh" (Trần Quang Khải) & "Bánh trôi nước" (Hồ Xuân Hương)', [
    Q('"Phò giá về kinh" do ai sáng tác?', ['Trần Quang Khải', 'Lý Thường Kiệt', 'Trần Nhân Tông', 'Nguyễn Trãi'], 0, 'Trần Quang Khải — danh tướng nhà Trần.'),
    Q('Bài "Phò giá về kinh" ra đời sau chiến thắng nào?', ['Chiến thắng quân Nguyên Mông', 'Chiến thắng quân Minh', 'Chiến thắng quân Tống', 'Chiến thắng quân Thanh'], 0, 'Sau khi giải phóng Thăng Long, đón vua về kinh.'),
    Q('Câu "Đoạt sáo Chương Dương độ" nhắc tới sự kiện?', ['Trận Chương Dương cướp giáo giặc', 'Trận Bạch Đằng', 'Trận Đông Bộ Đầu', 'Trận Vạn Kiếp'], 0, 'Trận Chương Dương 1285.'),
    Q('"Bánh trôi nước" của tác giả?', ['Hồ Xuân Hương', 'Đoàn Thị Điểm', 'Bà Huyện Thanh Quan', 'Nguyễn Du'], 0, '"Bà chúa thơ Nôm" Hồ Xuân Hương.'),
    Q('Hình ảnh "bánh trôi nước" là ẩn dụ cho?', ['Thân phận và phẩm chất người phụ nữ', 'Món ăn truyền thống', 'Cuộc sống nông thôn', 'Phong tục lễ hội'], 0, 'Bánh trôi = thân phận chìm nổi nhưng tấm lòng son sắt.'),
    Q('"Tấm lòng son" trong bài biểu trưng cho?', ['Phẩm chất thuỷ chung, son sắt của người phụ nữ', 'Màu đỏ của bánh', 'Nhân ngọt', 'Sự giàu có'], 0, 'Dù chịu nhiều "rắn nát" vẫn giữ tấm lòng son.'),
  ]),

  M(7, 'Thực hành tiếng Việt — Từ ghép, từ láy', [
    Q('Từ "xe đạp" thuộc loại?', ['Từ ghép chính phụ', 'Từ ghép đẳng lập', 'Từ láy âm', 'Từ láy vần'], 0, '"Xe" là chính, "đạp" là phụ phân loại xe.'),
    Q('Từ "nhà cửa" là?', ['Ghép chính phụ', 'Ghép đẳng lập', 'Láy âm', 'Láy vần'], 1, 'Hai tiếng đồng đẳng nghĩa.'),
    Q('Từ "lung linh" là?', ['Từ láy âm', 'Từ ghép', 'Từ đơn', 'Từ Hán Việt'], 0, 'Hai tiếng có vần và phụ âm đầu láy.'),
    Q('Từ "lấp lánh" thuộc loại?', ['Từ láy', 'Từ ghép', 'Thành ngữ', 'Quán ngữ'], 0, 'Láy phụ âm đầu "l".'),
    Q('Đặc điểm của từ láy là?', ['Có sự lặp lại về âm/vần/cả tiếng', 'Có hai tiếng đều có nghĩa rõ', 'Bắt buộc Hán Việt', 'Luôn là tính từ'], 0, 'Lặp âm hoặc vần.'),
    Q('Trong câu "Cô gái có giọng nói nhẹ nhàng", "nhẹ nhàng" là?', ['Tính từ - láy', 'Danh từ - ghép', 'Động từ - đơn', 'Đại từ'], 0, 'Tính từ, từ láy âm "nh-".'),
  ]),

  M(8, 'Đại từ — Quan hệ từ', [
    Q('Đại từ là từ dùng để?', ['Trỏ người, vật, sự việc hoặc dùng hỏi', 'Chỉ trạng thái', 'Liên kết câu', 'Chỉ mệnh lệnh'], 0, 'Đại từ thay thế hoặc dùng hỏi.'),
    Q('Trong câu "Nó đi học rồi", "nó" là?', ['Đại từ', 'Danh từ', 'Động từ', 'Tính từ'], 0, 'Đại từ ngôi 3 số ít.'),
    Q('Đại từ nghi vấn là?', ['Ai, gì, sao, đâu, mấy…', 'Tôi, em, chúng ta', 'Nó, hắn, y', 'Vào, ra'], 0, 'Dùng để hỏi.'),
    Q('Quan hệ từ "và" dùng để?', ['Nối các yếu tố đẳng lập', 'Nối quan hệ nguyên nhân', 'Nối quan hệ điều kiện', 'Nối quan hệ tăng tiến'], 0, '"Và" đẳng lập.'),
    Q('Quan hệ từ "nếu…thì…" chỉ?', ['Quan hệ giả thiết — kết quả', 'Quan hệ thời gian', 'Quan hệ nhượng bộ', 'Quan hệ so sánh'], 0, 'Cặp quan hệ điều kiện.'),
    Q('Câu "Tuy trời mưa nhưng em vẫn đến lớp" dùng quan hệ?', ['Tương phản — nhượng bộ', 'Nguyên nhân — kết quả', 'Điều kiện', 'Mục đích'], 0, '"Tuy…nhưng…" tương phản.'),
  ]),

  M(9, 'Thành ngữ — Cụm từ cố định', [
    Q('Thành ngữ là?', ['Cụm từ cố định, biểu thị một ý trọn vẹn, có hình ảnh', 'Câu nói thông thường', 'Câu hoàn chỉnh có chủ ngữ vị ngữ', 'Câu hỏi tu từ'], 0, 'Đặc trưng: cố định, hàm súc, hình tượng.'),
    Q('"Ăn quả nhớ kẻ trồng cây" là?', ['Thành ngữ', 'Tục ngữ', 'Ca dao', 'Châm ngôn nước ngoài'], 1, 'Tục ngữ — câu hoàn chỉnh, có triết lí.'),
    Q('"Chân cứng đá mềm" là?', ['Thành ngữ', 'Tục ngữ', 'Ca dao', 'Quán ngữ'], 0, 'Cụm cố định, ý chí kiên cường.'),
    Q('Thành ngữ thường có chức năng?', ['Làm thành phần câu (CN, VN, BN…)', 'Là câu hoàn chỉnh', 'Là đoạn văn', 'Là bài thơ ngắn'], 0, 'Thành ngữ là cụm, dùng làm thành phần câu.'),
    Q('"Một nắng hai sương" nghĩa là?', ['Vất vả lao động', 'Trời đẹp', 'Rất giàu', 'Rất nhàn'], 0, 'Hình ảnh người nông dân lam lũ.'),
    Q('"Nước chảy đá mòn" có ý?', ['Kiên trì sẽ thành công', 'Nhanh chóng làm hỏng', 'Vô ích', 'May mắn'], 0, 'Bài học về sự bền bỉ.'),
  ]),

  M(10, 'Truyện ngắn hiện đại — "Cuộc chia tay của những con búp bê"', [
    Q('Tác giả truyện ngắn là?', ['Khánh Hoài', 'Nguyên Hồng', 'Tô Hoài', 'Nguyễn Quang Sáng'], 0, 'Khánh Hoài.'),
    Q('Nhân vật chính trong truyện là?', ['Hai anh em Thành và Thuỷ', 'Người mẹ', 'Cô giáo', 'Người cha'], 0, 'Hai anh em phải chia tay khi cha mẹ ly hôn.'),
    Q('Hình ảnh "những con búp bê" là biểu tượng cho?', ['Sự gắn bó hồn nhiên của hai anh em', 'Đồ chơi mới', 'Tài sản chia chác', 'Quà sinh nhật'], 0, 'Hai con búp bê không muốn chia xa — như hai anh em.'),
    Q('Chủ đề chính của truyện là?', ['Nỗi đau của trẻ em khi gia đình tan vỡ', 'Niềm vui đi học', 'Tình bạn tuổi thơ', 'Cuộc sống làng quê'], 0, 'Cảnh báo về hậu quả ly hôn đối với con trẻ.'),
    Q('Người kể chuyện trong truyện là?', ['Nhân vật Thành — ngôi thứ nhất', 'Tác giả — ngôi thứ ba', 'Người mẹ', 'Em Thuỷ'], 0, 'Anh trai Thành kể (xưng "tôi").'),
    Q('Thông điệp của truyện dành cho người lớn là?', ['Hãy giữ gìn mái ấm, đừng làm con cái phải chịu đựng chia ly', 'Cấm ly hôn', 'Hãy chia đều đồ chơi', 'Đừng cho trẻ chơi búp bê'], 0, 'Hậu quả nặng nề lên trẻ em.'),
  ]),

  M(11, 'Truyện ngắn — "Lão Hạc" (Nam Cao)', [
    Q('Tác giả "Lão Hạc" là?', ['Nam Cao', 'Nguyên Hồng', 'Tô Hoài', 'Ngô Tất Tố'], 0, 'Nam Cao — nhà văn hiện thực phê phán.'),
    Q('Nhân vật chính là?', ['Lão Hạc — người nông dân nghèo', 'Anh giáo', 'Binh Tư', 'Cậu Vàng'], 0, 'Lão Hạc trung tâm câu chuyện.'),
    Q('"Cậu Vàng" trong truyện là?', ['Con chó của lão Hạc', 'Con trai lão', 'Người con đi đồn điền', 'Hàng xóm'], 0, 'Lão Hạc gọi con chó là "cậu Vàng" như con.'),
    Q('Lão Hạc đã chọn cách kết thúc cuộc đời ra sao?', ['Ăn bả chó để tự kết liễu', 'Bệnh chết', 'Bị giết', 'Bỏ làng đi'], 0, 'Cái chết đau đớn nhưng giữ trọn nhân cách.'),
    Q('Chủ đề của truyện là?', ['Số phận và phẩm cách người nông dân trước Cách mạng', 'Đời sống tiểu thị dân', 'Tình yêu lứa đôi', 'Sinh hoạt làng quê'], 0, 'Hiện thực + nhân đạo.'),
    Q('Thái độ của Nam Cao với lão Hạc là?', ['Yêu thương, kính trọng', 'Chế giễu', 'Thờ ơ', 'Khinh thường'], 0, 'Đề cao phẩm chất lương thiện của người nông dân.'),
  ]),

  M(12, 'Câu rút gọn — Câu đặc biệt', [
    Q('Câu rút gọn là?', ['Câu lược bỏ một số thành phần để câu gọn', 'Câu không có nghĩa', 'Câu thiếu hoàn toàn chủ ngữ và vị ngữ', 'Câu hỏi tu từ'], 0, 'Lược thành phần nhưng vẫn hiểu được dựa vào ngữ cảnh.'),
    Q('Trong hội thoại "— Bạn đi đâu? — Đi học", "Đi học" là?', ['Câu rút gọn', 'Câu đặc biệt', 'Câu cảm thán', 'Câu cầu khiến'], 0, 'Lược chủ ngữ "Tôi" — câu rút gọn.'),
    Q('Câu đặc biệt là?', ['Câu không cấu tạo theo mô hình CN–VN', 'Câu có hai chủ ngữ', 'Câu rút gọn vị ngữ', 'Câu có nhiều vị ngữ'], 0, 'Không theo cấu trúc thông thường.'),
    Q('"Mùa thu!" là câu?', ['Đặc biệt', 'Rút gọn', 'Cảm thán đầy đủ', 'Trần thuật đơn'], 0, 'Không có CN-VN; bộc lộ cảm xúc.'),
    Q('Tác dụng của câu đặc biệt KHÔNG bao gồm?', ['Bộc lộ cảm xúc', 'Nêu thông tin về thời gian, nơi chốn', 'Liệt kê', 'Diễn đạt phép tính'], 3, 'Câu đặc biệt không dùng để diễn phép tính.'),
    Q('Khi dùng câu rút gọn cần?', ['Đảm bảo người nghe hiểu, không thô lỗ', 'Lược bao nhiêu cũng được', 'Bắt buộc dùng trong văn bản hành chính', 'Cấm hoàn toàn'], 0, 'Tránh hiểu lầm, tránh bất lịch sự.'),
  ]),

  M(13, 'Dấu chấm phẩy — Dấu chấm lửng', [
    Q('Dấu chấm phẩy (;) thường dùng để?', ['Ngăn cách các bộ phận lớn trong một câu ghép', 'Kết thúc câu hỏi', 'Bộc lộ cảm xúc mạnh', 'Trích dẫn'], 0, 'Phân cách các vế song hành lớn.'),
    Q('Dấu chấm lửng (…) KHÔNG có tác dụng?', ['Biểu thị lời nói còn bỏ dở', 'Liệt kê chưa hết', 'Biểu thị im lặng kéo dài', 'Kết thúc câu hoàn chỉnh dứt khoát'], 3, 'Kết thúc dứt khoát là dấu chấm.'),
    Q('Trong câu "Sách, vở, bút; đèn, bàn, ghế là bạn của em", dấu ; có vai trò?', ['Tách hai nhóm liệt kê', 'Hỏi', 'Cảm thán', 'Chú thích'], 0, 'Hai nhóm "đồ học tập" và "đồ dùng học".'),
    Q('Dấu chấm than (!) dùng cho câu?', ['Cảm thán, cầu khiến', 'Hỏi', 'Trần thuật', 'Liệt kê'], 0, 'Bộc lộ cảm xúc hoặc yêu cầu.'),
    Q('Dấu hai chấm (:) thường giới thiệu?', ['Lời dẫn trực tiếp hoặc giải thích', 'Câu hỏi', 'Câu cảm thán', 'Câu hoàn chỉnh kế tiếp'], 0, 'Báo hiệu giải thích, liệt kê, dẫn lời.'),
    Q('Dấu gạch ngang ngắn (-) khác gạch nối ở chỗ?', ['Dài hơn và để chú thích/liệt kê/đối thoại', 'Y hệt nhau', 'Để nối tên riêng nước ngoài', 'Không có khác biệt'], 0, 'Gạch nối ngắn nối tiếng phiên âm; gạch ngang dài có chức năng câu.'),
  ]),

  M(14, 'Văn nghị luận xã hội ngắn', [
    Q('Văn nghị luận là kiểu văn?', ['Bàn luận, thuyết phục người đọc về một tư tưởng/vấn đề', 'Kể chuyện', 'Tả cảnh', 'Biểu cảm thuần tuý'], 0, 'Đặc trưng: lập luận + lí lẽ + dẫn chứng.'),
    Q('Ba yếu tố chính của một bài nghị luận?', ['Luận điểm — luận cứ — lập luận', 'Mở — thân — kết', 'Nhân vật — sự kiện — bối cảnh', 'Cảm xúc — hình ảnh — nhạc điệu'], 0, 'Ba yếu tố cốt lõi.'),
    Q('Luận điểm là?', ['Ý kiến chính cần làm rõ', 'Ví dụ minh hoạ', 'Lời mở đầu', 'Câu hỏi tu từ'], 0, 'Luận điểm = quan điểm.'),
    Q('Dẫn chứng tốt cần?', ['Tiêu biểu, xác thực, phù hợp', 'Càng nhiều càng tốt', 'Bịa đặt cho hấp dẫn', 'Luôn lấy từ thần thoại'], 0, 'Chất lượng quan trọng hơn số lượng.'),
    Q('Bài nghị luận xã hội thường bàn về?', ['Vấn đề đời sống xã hội (đạo đức, lối sống…)', 'Tác phẩm văn học', 'Ngữ pháp', 'Toán học'], 0, 'NLXH bàn về hiện tượng/tư tưởng xã hội.'),
    Q('Mở bài hay cho NLXH nên?', ['Nêu rõ vấn đề nghị luận', 'Kể chuyện dài', 'Tả cảnh dài', 'Đưa nhiều câu hỏi'], 0, 'Nêu thẳng vấn đề, định hướng.'),
  ]),

  M(15, 'Viết bài văn biểu cảm về một sự việc/con người', [
    Q('Văn biểu cảm chủ yếu nhằm?', ['Bày tỏ cảm xúc, tình cảm của người viết', 'Trình bày sự kiện khách quan', 'Phân tích logic', 'Mô tả khoa học'], 0, 'Biểu cảm = trữ tình.'),
    Q('Bố cục bài biểu cảm thường gồm?', ['Mở — thân — kết', 'Giả thiết — chứng minh', 'Thí nghiệm — kết quả', 'Tóm tắt — đề xuất'], 0, '3 phần cơ bản.'),
    Q('Lời văn biểu cảm thường?', ['Giàu hình ảnh, cảm xúc, có thể dùng so sánh, ẩn dụ', 'Khô khan, đầy số liệu', 'Liệt kê dữ liệu', 'Trích dẫn pháp luật'], 0, 'Sử dụng nhiều biện pháp tu từ.'),
    Q('Khi biểu cảm về một người, nên?', ['Kết hợp tả và kể để khắc hoạ tình cảm', 'Chỉ liệt kê thông tin', 'Chép tiểu sử', 'Tránh nói cảm xúc'], 0, 'Tả + kể + nêu cảm xúc.'),
    Q('Cảm xúc trong bài cần?', ['Chân thật, có nguồn gốc rõ ràng', 'Cường điệu phi lí', 'Sao chép từ bài khác', 'Trung lập tuyệt đối'], 0, 'Chân thật mới thuyết phục.'),
    Q('Kết bài biểu cảm nên?', ['Khẳng định lại tình cảm, mở rộng suy ngẫm', 'Đưa ra số liệu thống kê', 'Đặt câu hỏi pháp luật', 'Tóm tắt nội dung sách'], 0, 'Đọng lại cảm xúc.'),
  ]),

  M(16, 'Nói và nghe — Trao đổi về vấn đề trong tác phẩm', [
    Q('Khi trao đổi về một tác phẩm, nên bắt đầu bằng?', ['Giới thiệu ngắn tác phẩm và vấn đề bàn luận', 'Phản đối ngay ý kiến đối tác', 'Nói liên tục không nghỉ', 'Đọc lại toàn bộ tác phẩm'], 0, 'Giới thiệu trước khi tranh luận.'),
    Q('Người nghe tích cực cần?', ['Lắng nghe, ghi chú, đặt câu hỏi đúng lúc', 'Ngắt lời liên tục', 'Vừa nghe vừa làm việc khác', 'Im lặng tuyệt đối'], 0, 'Lắng nghe và phản hồi xây dựng.'),
    Q('Khi không đồng ý với ý kiến bạn, nên?', ['Nêu lí do, phản bác lịch sự bằng dẫn chứng', 'Bác bỏ thô bạo', 'Im lặng và bỏ đi', 'Cười nhạo'], 0, 'Tôn trọng và có lí lẽ.'),
    Q('Tốc độ nói thích hợp khi trình bày là?', ['Vừa phải, rõ ràng', 'Càng nhanh càng tốt', 'Rất chậm và đều', 'Lúc nhanh lúc dừng tuỳ ý'], 0, 'Người nghe dễ tiếp nhận.'),
    Q('Cử chỉ, ánh mắt khi nói nên?', ['Tự nhiên, hướng về người nghe', 'Nhìn xuống sàn', 'Khoanh tay nghiêm khắc', 'Xoay lưng về phía nghe'], 0, 'Giao tiếp phi ngôn ngữ tốt.'),
    Q('Sau khi trao đổi, bước cuối cùng là?', ['Tổng kết các ý kiến chung và còn khác biệt', 'Giải tán không nói lại', 'Phản đối tất cả', 'Bỏ qua mọi ý kiến'], 0, 'Tổng kết giúp định hướng tiếp theo.'),
  ]),

  M(17, 'Ôn tập đọc hiểu giữa kì I', [
    Q('Bước đầu tiên đọc hiểu một bài thơ trữ tình là?', ['Đọc to và cảm thụ nhịp điệu', 'Phân tích cú pháp ngay', 'Tìm tác giả trên mạng', 'Tóm tắt sơ lược'], 0, 'Cảm nhận âm điệu trước.'),
    Q('Hình tượng "mẹ" trong thơ ca Việt thường gắn với?', ['Tình yêu thương, sự hi sinh', 'Sự nghiêm khắc', 'Sự xa cách', 'Sự lạnh lùng'], 0, 'Mẫu hình truyền thống.'),
    Q('Bài "Tiếng gà trưa" dùng âm thanh để?', ['Khơi gợi hồi tưởng tuổi thơ', 'Cảnh báo nguy hiểm', 'Vui đùa đơn thuần', 'Tả buổi sáng'], 0, 'Khởi đầu dòng hồi ức.'),
    Q('Trong văn nghị luận, dẫn chứng đóng vai trò?', ['Minh hoạ và củng cố luận điểm', 'Trang trí', 'Thay cho lập luận', 'Không quan trọng'], 0, 'Củng cố sức thuyết phục.'),
    Q('Câu "Trời ơi!" thuộc kiểu câu?', ['Cảm thán (đặc biệt)', 'Trần thuật', 'Cầu khiến', 'Nghi vấn'], 0, 'Bộc lộ cảm xúc.'),
    Q('Tục ngữ khác thành ngữ ở chỗ?', ['Tục ngữ là câu hoàn chỉnh, có triết lí', 'Tục ngữ ngắn hơn', 'Thành ngữ luôn có vần', 'Không có khác biệt'], 0, 'Tục ngữ = câu; thành ngữ = cụm.'),
  ]),

  M(18, 'Kiểm tra học kì I — Tổng hợp', [
    Q('Trong bài "Mẹ và quả", "quả non xanh" ám chỉ?', ['Người con chưa trưởng thành', 'Trái cây sống', 'Sự khô cằn', 'Mùa hè'], 0, 'Ẩn dụ — con cái chưa kịp lớn.'),
    Q('Bài "Sông núi nước Nam" khẳng định điều gì?', ['Chủ quyền lãnh thổ và sức mạnh dân tộc', 'Ca ngợi thiên nhiên', 'Tình yêu đôi lứa', 'Cuộc sống bình dị'], 0, 'Tuyên ngôn độc lập.'),
    Q('"Bánh trôi nước" thuộc thể thơ?', ['Thất ngôn tứ tuyệt', 'Lục bát', 'Năm chữ', 'Tự do'], 0, 'Bốn câu bảy chữ.'),
    Q('Từ "long lanh" là?', ['Từ láy âm "l"', 'Từ ghép', 'Từ đơn', 'Từ Hán Việt'], 0, 'Láy âm đầu.'),
    Q('Câu "Mưa." là?', ['Câu đặc biệt', 'Câu rút gọn', 'Câu nghi vấn', 'Câu cảm thán đầy đủ'], 0, 'Không CN-VN, nêu hiện tượng.'),
    Q('Khi viết NLXH, dẫn chứng tốt phải?', ['Tiêu biểu, xác thực', 'Bịa đặt', 'Luôn từ cổ tích', 'Càng dài càng tốt'], 0, 'Yêu cầu cơ bản.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Truyện ngắn nước ngoài — "Buổi học cuối cùng" (A. Daudet)', [
    Q('Tác giả "Buổi học cuối cùng" là?', ['An-phông-xơ Đô-đê (A. Daudet) — Pháp', 'Mác Tuên', 'O. Hen-ri', 'Sê-khốp'], 0, 'A. Daudet — nhà văn Pháp.'),
    Q('Nhân vật trung tâm của truyện là?', ['Cậu bé Phrăng và thầy Ha-men', 'Hai cha con', 'Bà nội', 'Một nhóm bạn'], 0, 'Phrăng kể và thầy Ha-men là nhân vật chính.'),
    Q('Bối cảnh truyện là?', ['Vùng An-dát của Pháp bị Phổ chiếm, cấm dạy tiếng Pháp', 'Pa-ri thời bình', 'Đại chiến thế giới', 'Làng quê Nga'], 0, 'Sau chiến tranh Pháp - Phổ 1870.'),
    Q('Thông điệp lớn của truyện là?', ['Tình yêu tiếng mẹ đẻ và lòng yêu nước', 'Tình bạn', 'Tình thầy trò đơn thuần', 'Sự khôi hài'], 0, 'Tiếng mẹ đẻ là chìa khoá tự do.'),
    Q('Câu "Khi một dân tộc rơi vào vòng nô lệ, chừng nào họ vẫn giữ vững tiếng nói của mình…" của ai?', ['Thầy Ha-men', 'Phrăng', 'Bà cụ Hô-de', 'Tác giả ngoài lề'], 0, 'Lời thầy Ha-men.'),
    Q('Câu cuối truyện "Nước Pháp muôn năm!" thể hiện?', ['Tình yêu nước cháy bỏng', 'Sự vui đùa', 'Sự ngạo nghễ', 'Sự sợ hãi'], 0, 'Cao trào của bài học.'),
  ]),

  M(20, 'Văn bản nghị luận văn học ngắn', [
    Q('Nghị luận văn học bàn về?', ['Tác phẩm hoặc khía cạnh trong tác phẩm văn học', 'Đời sống xã hội', 'Khoa học tự nhiên', 'Lịch sử thuần tuý'], 0, 'NLVH = bàn về văn học.'),
    Q('Khi phân tích nhân vật cần?', ['Bám vào lời nói, hành động, mối quan hệ và biến đổi của nhân vật', 'Chỉ kể lại cốt truyện', 'Bịa thêm tình huống', 'Đánh giá cảm tính'], 0, 'Phân tích trên cơ sở văn bản.'),
    Q('Luận điểm trong NLVH thường được rút từ?', ['Đặc điểm nội dung và nghệ thuật của tác phẩm', 'Quan điểm cá nhân không cần dẫn chứng', 'Tóm tắt sách giáo khoa', 'Bài viết người khác'], 0, 'Bám tác phẩm.'),
    Q('Dẫn chứng trong NLVH chủ yếu là?', ['Trích dẫn từ chính tác phẩm', 'Số liệu thống kê', 'Sự kiện thời sự', 'Tin nhắn cá nhân'], 0, 'Bằng chứng nội tại từ văn bản.'),
    Q('Nghệ thuật của một tác phẩm gồm các yếu tố?', ['Ngôn ngữ, hình ảnh, nhịp điệu, kết cấu…', 'Nội dung tư tưởng', 'Tiểu sử tác giả', 'Tên nhà xuất bản'], 0, 'Hình thức nghệ thuật.'),
    Q('Kết bài NLVH nên?', ['Khái quát giá trị tác phẩm và nêu cảm nhận', 'Tóm tắt cốt truyện một lần nữa', 'Liệt kê tác phẩm khác', 'Bỏ qua'], 0, 'Đánh giá khái quát.'),
  ]),

  M(21, 'Tục ngữ về thiên nhiên và lao động sản xuất', [
    Q('"Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối" nói về?', ['Hiện tượng ngày đêm theo mùa', 'Thói quen sinh hoạt', 'Tâm trạng người nông dân', 'Bài học đạo đức'], 0, 'Kinh nghiệm quan sát thiên nhiên.'),
    Q('"Tấc đất tấc vàng" có nghĩa?', ['Đất đai rất quý giá', 'Đo lường thực tế', 'Tiền vàng nhiều', 'Cảnh báo trộm cắp'], 0, 'Đề cao giá trị của đất.'),
    Q('"Nhất nước, nhì phân, tam cần, tứ giống" sắp xếp gì?', ['Bốn yếu tố quan trọng trong sản xuất nông nghiệp', 'Phong tục lễ hội', 'Đẳng cấp xã hội', 'Mâm cỗ ngày Tết'], 0, 'Kinh nghiệm canh tác lúa nước.'),
    Q('Tục ngữ thường được sáng tác bởi?', ['Nhân dân lao động qua nhiều thế hệ', 'Một nhà thơ', 'Vua chúa', 'Nhà sử học'], 0, 'Sáng tác dân gian.'),
    Q('Đặc điểm hình thức của tục ngữ?', ['Ngắn gọn, có vần điệu, đối xứng', 'Dài và tự do', 'Câu thơ bảy chữ', 'Có cốt truyện'], 0, 'Cô đọng, dễ nhớ.'),
    Q('"Mau sao thì nắng, vắng sao thì mưa" thuộc nhóm?', ['Dự báo thời tiết', 'Đạo đức', 'Học tập', 'Tình yêu'], 0, 'Kinh nghiệm dân gian quan sát bầu trời.'),
  ]),

  M(22, 'Nghỉ Tết — Đọc thêm tản văn xuân', [
    Q('Tản văn là?', ['Một thể văn xuôi ngắn, giàu cảm xúc và suy ngẫm', 'Bài thơ', 'Văn nghị luận chính trị', 'Hợp đồng kinh tế'], 0, 'Thể loại tự do, mang dấu ấn cá nhân.'),
    Q('Mùa xuân trong văn học Việt thường gắn với?', ['Niềm vui, hi vọng, sự khởi đầu', 'Buồn bã', 'Lạnh lẽo', 'Tang tóc'], 0, 'Biểu tượng tích cực.'),
    Q('Tết Nguyên đán đầy đủ ý nghĩa?', ['Đoàn tụ, kính tổ tiên, đón năm mới', 'Đi du lịch nước ngoài', 'Mua sắm', 'Nghỉ học'], 0, 'Văn hoá truyền thống.'),
    Q('Câu đối Tết thường gồm?', ['Hai vế đối nhau về ý và thanh', 'Một câu dài', 'Ba câu', 'Bài thơ tứ tuyệt'], 0, 'Đặc trưng của câu đối.'),
    Q('"Bánh chưng xanh, dưa hấu đỏ" gợi không khí gì?', ['Tết cổ truyền', 'Đám cưới', 'Sinh nhật', 'Đi học'], 0, 'Hình ảnh ngày Tết.'),
    Q('Đọc tản văn nên?', ['Cảm nhận giọng điệu và suy ngẫm cùng tác giả', 'Tóm tắt khô khan', 'Tìm cốt truyện', 'Phân tích nhân vật'], 0, 'Đối thoại nội tâm với tác giả.'),
  ]),

  M(23, 'Văn bản thông tin — Giới thiệu một danh nhân/lễ hội', [
    Q('Văn bản thông tin nhằm?', ['Cung cấp thông tin xác thực, khách quan', 'Bày tỏ cảm xúc', 'Kể chuyện hư cấu', 'Bàn luận triết học'], 0, 'Mục đích thông tin.'),
    Q('Yêu cầu quan trọng của VBTT là?', ['Chính xác và rõ ràng', 'Có vần điệu', 'Có nhiều hình ảnh hư cấu', 'Mang yếu tố kì ảo'], 0, 'Tính xác thực.'),
    Q('Khi giới thiệu danh nhân, cần nêu?', ['Thân thế, sự nghiệp, đóng góp tiêu biểu', 'Đời sống cá nhân hoá', 'Tin đồn', 'Lời nói thân thiết'], 0, 'Thông tin chính thống.'),
    Q('Một lễ hội thường có các yếu tố?', ['Thời gian, địa điểm, nghi thức, ý nghĩa', 'Chỉ ăn uống', 'Chỉ trò chơi', 'Không cần ý nghĩa'], 0, 'Cấu trúc giới thiệu đầy đủ.'),
    Q('VBTT thường được trình bày bằng?', ['Đề mục rõ ràng, có thể có bảng/sơ đồ', 'Đoạn văn không ngắt', 'Toàn câu hỏi', 'Toàn dấu chấm than'], 0, 'Giúp tra cứu, theo dõi.'),
    Q('Khi đọc VBTT, cần?', ['Xác định thông tin chính, đối chiếu nguồn', 'Tự tưởng tượng', 'Cảm nhận âm điệu', 'Phân tích nhân vật'], 0, 'Kĩ năng đọc thông tin.'),
  ]),

  M(24, 'Thực hành tiếng Việt — Liên kết câu, liên kết đoạn', [
    Q('Liên kết câu là?', ['Cách dùng phép thay thế, lặp, nối… để các câu gắn bó về ý', 'Cách ngắt câu', 'Cách viết hoa', 'Cách dùng dấu hỏi'], 0, 'Mục đích để văn bản mạch lạc.'),
    Q('Phép thế thường dùng?', ['Đại từ, từ đồng nghĩa', 'Câu cảm thán', 'Số liệu', 'Hình ảnh'], 0, 'Thay thế để tránh lặp.'),
    Q('Phép lặp là?', ['Lặp lại từ ngữ ở các câu khác nhau để liên kết', 'Lặp một câu y nguyên', 'Viết câu hai lần', 'Lặp dấu câu'], 0, 'Phép liên kết phổ biến.'),
    Q('Phép nối dùng?', ['Quan hệ từ, từ nối (vì vậy, do đó, tuy nhiên…)', 'Đại từ', 'Tính từ', 'Số từ'], 0, 'Nối bằng từ ngữ chỉ quan hệ.'),
    Q('Đoạn văn mạch lạc cần?', ['Một câu chủ đề và các câu triển khai hỗ trợ', 'Càng nhiều câu càng tốt', 'Các câu rời rạc', 'Toàn câu hỏi'], 0, 'Đảm bảo tính thống nhất.'),
    Q('Liên kết đoạn nên?', ['Có câu/từ chuyển ý ở đầu đoạn mới', 'Bắt đầu đoạn mới đột ngột', 'Lặp đoạn trước', 'Không liên quan đoạn trước'], 0, 'Câu chuyển ý.'),
  ]),

  M(25, 'Câu chủ động — câu bị động', [
    Q('Câu chủ động là câu có chủ ngữ chỉ?', ['Người/vật thực hiện hành động', 'Người/vật chịu tác động', 'Đối tượng được nhắc tới', 'Địa điểm xảy ra'], 0, 'CN là tác nhân.'),
    Q('Câu bị động là câu có chủ ngữ chỉ?', ['Người/vật chịu tác động của hành động', 'Người/vật thực hiện hành động', 'Sự việc', 'Thời gian'], 0, 'CN là đối tượng.'),
    Q('Chuyển câu "Mèo bắt chuột" sang bị động?', ['Chuột bị mèo bắt', 'Mèo bị chuột bắt', 'Bắt chuột bởi mèo', 'Chuột và mèo'], 0, 'Đảo đối tượng lên CN.'),
    Q('Dấu hiệu thường gặp của câu bị động trong tiếng Việt?', ['Có từ "bị" hoặc "được"', 'Có từ "đang"', 'Có từ "sẽ"', 'Có từ "vì"'], 0, '"Bị" (tiêu cực), "được" (tích cực).'),
    Q('Tác dụng của câu bị động?', ['Nhấn mạnh đối tượng chịu tác động', 'Tạo cảm xúc vui', 'Liệt kê', 'Đặt câu hỏi'], 0, 'Đưa đối tượng lên đầu để nhấn mạnh.'),
    Q('"Bài thơ được viết năm 1968" là?', ['Câu bị động', 'Câu chủ động', 'Câu rút gọn', 'Câu đặc biệt'], 0, 'Có "được", đối tượng "bài thơ" làm CN.'),
  ]),

  M(26, 'Truyện ngụ ngôn — "Đẽo cày giữa đường"', [
    Q('Thể loại "Đẽo cày giữa đường" là?', ['Truyện ngụ ngôn', 'Truyện cổ tích', 'Truyện cười', 'Thần thoại'], 0, 'Truyện ngắn có ý nghĩa giáo huấn ẩn dụ.'),
    Q('Nhân vật chính trong truyện là?', ['Người đẽo cày', 'Vua', 'Cô bé', 'Bác thợ rèn'], 0, 'Người thợ thiếu chính kiến.'),
    Q('Bài học chính của truyện là?', ['Phải có chính kiến, không nghe theo mọi lời khuyên', 'Phải nghe lời người lớn', 'Phải làm cày nhanh', 'Phải đẽo gỗ ở nhà'], 0, 'Mất chính kiến → thất bại.'),
    Q('Truyện ngụ ngôn thường?', ['Ngắn, có nhân vật là người/vật, mang bài học', 'Dài, có nhiều tuyến nhân vật', 'Tả phong cảnh', 'Bàn về chính trị'], 0, 'Đặc trưng thể loại.'),
    Q('"Đẽo cày giữa đường" hiện nay được hiểu là?', ['Hành động thiếu chủ kiến, ai nói gì cũng nghe', 'Người thợ giỏi', 'Hành động cẩn thận', 'Người yêu lao động'], 0, 'Nghĩa chuyển dùng làm thành ngữ.'),
    Q('Để rút bài học, người đọc cần?', ['Suy ngẫm ý nghĩa biểu trưng của câu chuyện', 'Chỉ nhớ cốt truyện', 'Tra từ điển', 'Tìm tác giả'], 0, 'Tư duy ẩn dụ.'),
  ]),

  M(27, 'Truyện ngụ ngôn — "Ếch ngồi đáy giếng"', [
    Q('"Ếch ngồi đáy giếng" cho thấy?', ['Sự hạn hẹp, kiêu ngạo do thiếu hiểu biết', 'Sự khiêm tốn', 'Sự dũng cảm', 'Sự thông minh'], 0, 'Ếch tưởng bầu trời chỉ bằng miệng giếng.'),
    Q('Tại sao ếch bị trâu giẫm bẹp?', ['Vì kiêu ngạo, không quan sát', 'Vì trâu cố tình', 'Vì trời mưa', 'Vì giếng cạn'], 0, 'Kiêu ngạo → tai hoạ.'),
    Q('Bài học của truyện là?', ['Không nên kiêu ngạo, phải mở rộng hiểu biết', 'Tránh xa con trâu', 'Đừng ở giếng', 'Phải sống tập thể'], 0, 'Khiêm tốn, cầu tiến.'),
    Q('Hình ảnh "miệng giếng" tượng trưng cho?', ['Tầm nhìn hạn hẹp', 'Kiến thức rộng', 'Sự an toàn', 'Bình yên'], 0, 'Giới hạn nhận thức.'),
    Q('Trong cuộc sống hiện nay, "ếch ngồi đáy giếng" chỉ?', ['Người chủ quan, ít hiểu biết', 'Người siêng học', 'Người sống ở nông thôn', 'Người yêu thiên nhiên'], 0, 'Nghĩa biểu tượng.'),
    Q('Để tránh "ếch ngồi đáy giếng", ta cần?', ['Học hỏi, lắng nghe, mở rộng tầm nhìn', 'Khoe khoang nhiều hơn', 'Ngại tiếp xúc', 'Tự cô lập'], 0, 'Khiêm tốn và cầu tiến.'),
  ]),

  M(28, 'Văn nghị luận về một hiện tượng đời sống', [
    Q('Đề "Bàn về việc xả rác bừa bãi" thuộc?', ['NLXH về hiện tượng đời sống', 'NLVH', 'Tự sự', 'Miêu tả'], 0, 'Hiện tượng xã hội tiêu cực.'),
    Q('Bố cục bài NL về hiện tượng đời sống gồm?', ['Mở (nêu hiện tượng) — Thân (thực trạng, nguyên nhân, hậu quả, giải pháp) — Kết', 'Mở — Kết', 'Cốt truyện — Nhân vật — Bối cảnh', 'Chỉ một đoạn'], 0, 'Cấu trúc chuẩn.'),
    Q('Khi nêu giải pháp, cần?', ['Cụ thể, khả thi', 'Càng khái quát càng tốt', 'Bỏ qua', 'Chép từ sách'], 0, 'Khả thi mới có giá trị.'),
    Q('Dẫn chứng cho NL hiện tượng nên lấy từ?', ['Báo chí, đời sống, số liệu xác thực', 'Truyện cổ tích', 'Tin đồn', 'Mạng xã hội không kiểm chứng'], 0, 'Nguồn chính thống.'),
    Q('Trước hiện tượng tiêu cực, cần?', ['Đề xuất biện pháp khắc phục', 'Im lặng', 'Tránh né', 'Chỉ phê phán'], 0, 'NL phải hướng tới giải pháp.'),
    Q('Câu chủ đề ở đầu đoạn nên?', ['Khái quát ý chính của đoạn', 'Đặt câu hỏi tu từ', 'Tóm tắt cả bài', 'Trích dẫn câu thơ'], 0, 'Định hướng đoạn.'),
  ]),

  M(29, 'Văn bản nghị luận về một tư tưởng đạo lí', [
    Q('Đề "Bàn về lòng biết ơn" thuộc?', ['NLXH về tư tưởng đạo lí', 'NLVH', 'Tự sự', 'Thông tin'], 0, 'Bàn về một giá trị đạo đức.'),
    Q('Bước đầu tiên khi viết NL về tư tưởng đạo lí?', ['Giải thích khái niệm', 'Đưa kết luận', 'Tả cảnh', 'Liệt kê tác phẩm'], 0, 'Hiểu khái niệm → bàn luận.'),
    Q('Để bài viết thuyết phục, cần?', ['Kết hợp lí lẽ và dẫn chứng từ đời sống/lịch sử/văn học', 'Chỉ kể chuyện', 'Chỉ trích thơ', 'Chỉ nêu định nghĩa'], 0, 'Kết hợp đa dạng.'),
    Q('Phần "bàn luận mở rộng" thường?', ['Phê phán biểu hiện trái ngược, mở rộng vấn đề', 'Tóm tắt lại', 'Đặt câu hỏi', 'Tả người'], 0, 'Phản đề và mở rộng.'),
    Q('Bài học rút ra cuối bài cần?', ['Liên hệ bản thân, cụ thể, thực tiễn', 'Khẩu hiệu sáo rỗng', 'Tuyên ngôn dài', 'Trích dẫn pháp luật'], 0, 'Thiết thực.'),
    Q('Ngôn ngữ NL nên?', ['Rõ ràng, mạch lạc, lập luận chặt', 'Giàu hình ảnh ẩn dụ rườm rà', 'Toàn dùng từ Hán Việt', 'Đầy biện pháp tu từ phức tạp'], 0, 'Ngôn ngữ lí trí.'),
  ]),

  M(30, 'Văn bản thuyết minh ngắn', [
    Q('Văn thuyết minh nhằm?', ['Trình bày, giới thiệu tri thức về đối tượng', 'Bộc lộ cảm xúc', 'Kể chuyện hư cấu', 'Bàn luận triết học'], 0, 'Cung cấp tri thức khách quan.'),
    Q('Yêu cầu cốt lõi của văn thuyết minh?', ['Chính xác, khách quan, dễ hiểu', 'Giàu cảm xúc', 'Có cốt truyện hấp dẫn', 'Có vần điệu'], 0, 'Tính chính xác.'),
    Q('Phương pháp thuyết minh thường gặp?', ['Định nghĩa, liệt kê, phân loại, so sánh, nêu ví dụ, dùng số liệu', 'Hư cấu', 'Tả cảm xúc', 'Đối thoại nhân vật'], 0, 'Nhiều phương pháp.'),
    Q('Khi thuyết minh một đồ vật, cần?', ['Cấu tạo, công dụng, cách dùng, lưu ý', 'Lai lịch dòng họ', 'Câu chuyện cười', 'Cảm xúc lãng mạn'], 0, 'Đặc trưng kỹ thuật và sử dụng.'),
    Q('Thuyết minh có thể dùng?', ['Kết hợp tả và kể chừng mực', 'Toàn bộ là cảm xúc', 'Chỉ hư cấu', 'Toàn nghị luận'], 0, 'Có thể đan xen tả/kể nhẹ.'),
    Q('Một bài thuyết minh tốt thường?', ['Có đề mục, ngôn ngữ trong sáng, có thể có hình minh hoạ', 'Câu dài rườm rà', 'Không có cấu trúc', 'Đầy tu từ phức tạp'], 0, 'Trình bày khoa học.'),
  ]),

  M(31, 'Phân tích nhân vật trong truyện', [
    Q('Để phân tích nhân vật, cần dựa vào?', ['Ngoại hình, hành động, lời nói, nội tâm, mối quan hệ', 'Tiểu sử tác giả', 'Bìa sách', 'Tên truyện'], 0, 'Bám văn bản.'),
    Q('Hành động của nhân vật giúp người đọc?', ['Nhận biết tính cách và quan điểm sống', 'Đếm số lần xuất hiện', 'Tóm tắt nội dung', 'Tả cảnh'], 0, 'Hành động bộc lộ tính cách.'),
    Q('Lời thoại của nhân vật cho thấy?', ['Suy nghĩ, tình cảm, vốn sống của nhân vật', 'Tài viết của tác giả', 'Thị trường sách', 'Lịch sử quốc gia'], 0, 'Ngôn ngữ phản ánh con người.'),
    Q('Nhân vật điển hình là?', ['Nhân vật vừa cá biệt vừa khái quát cho một lớp người', 'Nhân vật phụ', 'Nhân vật phản diện', 'Nhân vật trung gian'], 0, 'Khái niệm văn học.'),
    Q('Khi đánh giá nhân vật, cần?', ['Khách quan, có dẫn chứng từ tác phẩm', 'Cảm tính', 'Bắt chước người khác', 'Bỏ qua mâu thuẫn'], 0, 'Có cơ sở từ văn bản.'),
    Q('Sự thay đổi của nhân vật theo cốt truyện thể hiện?', ['Quá trình phát triển nội tâm/nhận thức', 'Ngẫu nhiên', 'Lỗi của nhà văn', 'Yếu tố hư cấu'], 0, 'Sự vận động của tính cách.'),
  ]),

  M(32, 'Văn biểu cảm về tác phẩm văn học', [
    Q('Biểu cảm về tác phẩm văn học nhằm?', ['Bày tỏ cảm xúc, suy nghĩ về tác phẩm', 'Tóm tắt nội dung khô khan', 'Phê bình học thuật', 'Quảng cáo sách'], 0, 'Trải nghiệm cá nhân với tác phẩm.'),
    Q('Cấu trúc thường gồm?', ['Giới thiệu tác phẩm — cảm nghĩ về nội dung và nghệ thuật — đánh giá', 'Tiểu sử tác giả', 'Lịch sử văn học', 'Phỏng vấn nhà văn'], 0, '3 phần.'),
    Q('Khi nêu cảm xúc, cần?', ['Gắn với chi tiết cụ thể của tác phẩm', 'Trừu tượng, chung chung', 'Bịa thêm chi tiết', 'Chỉ tả tâm trạng cá nhân'], 0, 'Cảm xúc dựa trên văn bản.'),
    Q('Bài biểu cảm về tác phẩm hay khi?', ['Có cảm xúc chân thật và phát hiện riêng', 'Sao chép bài khác', 'Dùng nhiều thuật ngữ phức tạp', 'Tả tác giả'], 0, 'Phát hiện riêng.'),
    Q('Ngôn ngữ biểu cảm về tác phẩm thường?', ['Giàu hình ảnh, có thể dùng so sánh, ẩn dụ', 'Khô khan, liệt kê', 'Toàn số liệu', 'Toàn pháp luật'], 0, 'Mang tính nghệ thuật.'),
    Q('Khi đánh giá tác phẩm, cần?', ['Khách quan, nêu cả mặt mạnh và hạn chế (nếu có)', 'Chỉ khen', 'Chỉ chê', 'Bỏ qua'], 0, 'Cân bằng.'),
  ]),

  M(33, 'Nói nghe — Tranh biện một vấn đề', [
    Q('Tranh biện là?', ['Tranh luận có lí lẽ giữa hai bên trên cùng vấn đề', 'Cãi nhau', 'Đối thoại tự do', 'Phỏng vấn'], 0, 'Có quy tắc, hai phe lập luận.'),
    Q('Trước khi tranh biện cần?', ['Chuẩn bị luận điểm, dẫn chứng, dự đoán phản biện', 'Đến và nói tuỳ hứng', 'Học thuộc bài giáo viên', 'Tự tin là đủ'], 0, 'Chuẩn bị kĩ.'),
    Q('Khi đối phương đưa lí lẽ, cần?', ['Lắng nghe và phản bác đúng trọng tâm', 'Bác bỏ ngay không nghe', 'Lảng tránh', 'Lặp lại ý mình'], 0, 'Phản biện đúng điểm.'),
    Q('Thái độ trong tranh biện?', ['Tôn trọng, lịch sự, có lí có tình', 'Cộc cằn', 'Châm biếm', 'Hù doạ'], 0, 'Văn hoá tranh luận.'),
    Q('Phần kết của một lượt tranh biện nên?', ['Tóm lại luận điểm và khẳng định quan điểm', 'Bỏ ngỏ', 'Đặt câu hỏi không liên quan', 'Cám ơn dài dòng'], 0, 'Chốt rõ.'),
    Q('Tranh biện giúp người học?', ['Tư duy phản biện, kĩ năng diễn đạt và lắng nghe', 'Trở nên hung hăng', 'Lười suy nghĩ', 'Mất bạn bè'], 0, 'Lợi ích giáo dục.'),
  ]),

  M(34, 'Ôn tập tiếng Việt và làm văn', [
    Q('"Em yêu màu áo của mẹ" — tìm cụm từ là cụm danh từ?', ['"màu áo của mẹ"', '"yêu màu"', '"em yêu"', '"áo của"'], 0, 'Cụm DT có DT trung tâm "màu áo".'),
    Q('Câu "Trên cánh đồng, lúa đã chín" có trạng ngữ?', ['"Trên cánh đồng"', '"lúa đã chín"', '"đã chín"', 'Không có'], 0, 'Trạng ngữ chỉ nơi chốn.'),
    Q('Câu "Nó thông minh và chăm chỉ" là?', ['Câu đơn có hai vị ngữ', 'Câu ghép', 'Câu rút gọn', 'Câu đặc biệt'], 0, 'Một CN, hai VN ghép.'),
    Q('Trong văn nghị luận, từ nối "do đó" chỉ?', ['Quan hệ nguyên nhân — kết quả', 'Tương phản', 'Tăng tiến', 'Liệt kê'], 0, 'Kết quả từ nguyên nhân.'),
    Q('"Trong rừng, chim hót líu lo" sử dụng biện pháp nào?', ['Từ láy "líu lo"', 'Ẩn dụ', 'So sánh', 'Hoán dụ'], 0, 'Láy âm.'),
    Q('Bài văn cần đạt yếu tố nào để mạch lạc?', ['Liên kết câu, liên kết đoạn rõ ràng', 'Câu dài', 'Nhiều từ Hán Việt', 'Nhiều dấu chấm than'], 0, 'Mạch lạc dựa trên liên kết.'),
  ]),

  M(35, 'Kiểm tra học kì II — Tổng hợp cuối năm', [
    Q('Bài "Tiếng gà trưa" của ai?', ['Xuân Quỳnh', 'Xuân Diệu', 'Tố Hữu', 'Bằng Việt'], 0, 'Tác giả Xuân Quỳnh.'),
    Q('"Lão Hạc" của ai?', ['Nam Cao', 'Tô Hoài', 'Nguyên Hồng', 'Ngô Tất Tố'], 0, 'Truyện ngắn hiện thực phê phán.'),
    Q('Tục ngữ khác thành ngữ ở chỗ?', ['Là câu hoàn chỉnh, có triết lí', 'Có vần điệu', 'Ngắn hơn', 'Dài hơn'], 0, 'Đặc trưng hình thức và nội dung.'),
    Q('Câu "Bão!" thuộc loại?', ['Câu đặc biệt', 'Câu rút gọn', 'Câu cảm thán đầy đủ', 'Câu trần thuật'], 0, 'Không CN-VN, nêu hiện tượng.'),
    Q('Chuyển sang bị động: "Em đọc cuốn sách này"?', ['Cuốn sách này được em đọc', 'Sách được đọc bởi em', 'Em được đọc sách', 'Em bị sách đọc'], 0, 'Đối tượng "cuốn sách" lên CN.'),
    Q('Một bài NLXH cần?', ['Nêu rõ vấn đề, lí lẽ và dẫn chứng', 'Tả nhiều cảnh', 'Có cốt truyện', 'Toàn câu hỏi'], 0, 'Đặc trưng nghị luận.'),
  ]),
];

export const S7NV_SCENARIOS = indexBy(S7NV_WEEKS);
