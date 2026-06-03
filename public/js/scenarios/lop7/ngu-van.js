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
    Q('Văn học giúp con người?', ['Chỉ làm giàu vốn từ', 'Chỉ học thuộc', 'Hiểu mình, hiểu người, hiểu cuộc đời', 'Chỉ giải trí'], 2, 'Văn học có giá trị nhận thức, giáo dục và thẩm mỹ.'),
    Q('Tác phẩm văn học gồm ba yếu tố cơ bản?', ['Tác giả — văn bản — người đọc', 'Lời — nhạc — hoạ', 'Đề tài — bố cục — nhân vật', 'Mở — thân — kết'], 0, 'Quá trình giao tiếp văn học.'),
    Q('Đọc hiểu văn bản nên bắt đầu bằng?', ['Chỉ xem ảnh minh hoạ', 'Trả lời ngay câu hỏi cuối bài', 'Bỏ qua nhan đề', 'Đọc kĩ và tìm thông tin chính'], 3, 'Đọc kĩ giúp nắm được nội dung cốt lõi.'),
    Q('Đặc trưng của văn học khác báo chí ở chỗ?', ['Phải tuyệt đối khách quan', 'Chỉ có thông tin', 'Có hư cấu, hình tượng nghệ thuật', 'Không có cảm xúc'], 2, 'Văn học dùng hình tượng và hư cấu.'),
    Q('Trong văn học, "đề tài" là?', ['Hình thức xuất bản', 'Người đọc', 'Tên tác giả', 'Phạm vi hiện thực được phản ánh'], 3, 'Đề tài là mảng đời sống tác phẩm hướng đến.'),
    Q('Nhân vật trong truyện là?', ['Tác giả', 'Người kể chuyện thật', 'Người đọc', 'Người, vật được nhà văn xây dựng để gửi gắm tư tưởng'], 3, 'Nhân vật là sản phẩm hư cấu của nhà văn.'),
  ]),

  M(2, 'Thơ trữ tình hiện đại — "Mẹ và quả" (Nguyễn Khoa Điềm)', [
    Q('Bài thơ "Mẹ và quả" có hình ảnh trung tâm là?', ['Người con đi xa', 'Dòng sông', 'Mẹ và những trái cây', 'Cánh đồng'], 2, 'Hình ảnh mẹ và quả gắn bó suốt bài.'),
    Q('Tác giả bài thơ là?', ['Xuân Diệu', 'Tố Hữu', 'Huy Cận', 'Nguyễn Khoa Điềm'], 3, 'Nguyễn Khoa Điềm — nhà thơ thế hệ chống Mỹ.'),
    Q('"Quả" trong bài có ý nghĩa biểu tượng cho?', ['Lễ vật', 'Mùa màng', 'Thành quả lao động và những đứa con', 'Tiền bạc'], 2, 'Quả vừa hiện thực vừa biểu tượng cho con cái.'),
    Q('Hai câu cuối "Tôi hoảng sợ ngày bàn tay mẹ mỏi / Mình vẫn còn một thứ quả non xanh" thể hiện?', ['Sự giận dữ', 'Sự thờ ơ', 'Niềm vui', 'Nỗi day dứt, lo sợ chưa trưởng thành kịp'], 3, '"Quả non xanh" = người con chưa kịp trưởng thành.'),
    Q('Biện pháp tu từ nổi bật trong bài là?', ['Nói quá', 'Chơi chữ', 'Hoán dụ', 'Ẩn dụ'], 3, 'Ẩn dụ "quả" cho con cái, thành quả.'),
    Q('Cảm xúc chủ đạo của bài thơ là?', ['Hờn dỗi', 'Yêu thương và biết ơn mẹ', 'Vui đùa', 'Châm biếm'], 1, 'Tình mẹ con sâu nặng, biết ơn.'),
  ]),

  M(3, '"Tiếng gà trưa" — Xuân Quỳnh', [
    Q('Tác giả "Tiếng gà trưa" là?', ['Bằng Việt', 'Xuân Diệu', 'Xuân Quỳnh', 'Tố Hữu'], 2, 'Xuân Quỳnh sáng tác bài thơ năm 1968.'),
    Q('Bài thơ viết theo thể thơ?', ['Năm chữ', 'Bốn chữ', 'Lục bát', 'Bảy chữ'], 0, 'Chủ yếu năm chữ, có biến thể.'),
    Q('Âm thanh trung tâm gợi ra dòng hồi tưởng là?', ['Tiếng chim', 'Tiếng sóng', 'Tiếng gà trưa', 'Tiếng trống'], 2, '"Cục… cục tác cục ta" trên đường hành quân.'),
    Q('Hình ảnh bà hiện lên qua?', ['Lời ru ngọt ngào', 'Bữa cơm thanh đạm', 'Tay khum soi trứng, lo đàn gà', 'Câu chuyện cổ tích'], 2, 'Hình ảnh tỉ mỉ chăm chút đàn gà.'),
    Q('Bài thơ thể hiện tình cảm?', ['Mẹ con', 'Bà cháu và tình yêu quê hương đất nước', 'Tình bạn', 'Tình yêu đôi lứa'], 1, 'Tình bà cháu hoà cùng tình yêu Tổ quốc.'),
    Q('Điệp ngữ "Vì" ở cuối bài có tác dụng?', ['Tạo nhịp', 'Nhấn mạnh động lực chiến đấu cho gia đình, quê hương', 'Liệt kê đơn thuần', 'Đảo ngữ'], 1, 'Vì… vì… — nhấn mạnh lí tưởng chiến đấu.'),
  ]),

  M(4, 'Thơ thời chống Mỹ — "Bài thơ về tiểu đội xe không kính"', [
    Q('Tác giả bài thơ là?', ['Quang Dũng', 'Tố Hữu', 'Chế Lan Viên', 'Phạm Tiến Duật'], 3, 'Phạm Tiến Duật — gương mặt tiêu biểu chống Mỹ.'),
    Q('Hình ảnh "xe không kính" gợi?', ['Phong cảnh đẹp', 'Hiện thực ác liệt của chiến tranh', 'Sự nghèo khó', 'Sự lãng mạn'], 1, 'Bom đạn làm xe vỡ kính — hiện thực khốc liệt.'),
    Q('Người lính lái xe Trường Sơn hiện lên với phẩm chất?', ['Buồn bã', 'Lạnh lùng', 'Dũng cảm, lạc quan, tinh nghịch', 'Nhút nhát'], 2, 'Tinh thần ngang tàng, dí dỏm.'),
    Q('"Trái tim" trong câu cuối là biểu tượng cho?', ['Niềm vui', 'Sự yếu đuối', 'Tình yêu cá nhân', 'Lòng yêu nước, ý chí giải phóng miền Nam'], 3, 'Trái tim cách mạng quyết định tất cả.'),
    Q('Thể thơ của bài là?', ['Lục bát', 'Tự do', 'Năm chữ', 'Thất ngôn bát cú'], 1, 'Câu dài ngắn linh hoạt, gần văn xuôi.'),
    Q('Giọng điệu chủ đạo của bài là?', ['Bi luỵ', 'Giận dữ', 'Trầm buồn', 'Trẻ trung, ngang tàng, hóm hỉnh'], 3, 'Đậm chất lính trẻ.'),
  ]),

  M(5, 'Thơ trung đại — "Sông núi nước Nam"', [
    Q('"Sông núi nước Nam" (Nam quốc sơn hà) thường được coi là?', ['Bản tuyên ngôn độc lập đầu tiên của Việt Nam', 'Bài ca dao', 'Bài tế', 'Truyền thuyết'], 0, 'Khẳng định chủ quyền lãnh thổ.'),
    Q('Bài thơ tương truyền do ai sáng tác?', ['Lý Thường Kiệt (giả định)', 'Lê Lợi', 'Nguyễn Trãi', 'Trần Quốc Tuấn'], 0, 'Thường gắn với Lý Thường Kiệt trong kháng chiến chống Tống.'),
    Q('Thể thơ của bài là?', ['Năm chữ', 'Thất ngôn tứ tuyệt Đường luật (chữ Hán)', 'Lục bát', 'Song thất lục bát'], 1, 'Bốn câu bảy chữ, chữ Hán.'),
    Q('"Nam đế cư" có nghĩa?', ['Vua nước Nam ở', 'Trời đất an bài', 'Người Trung Hoa cai trị', 'Người Nam sinh sống'], 0, 'Khẳng định vua Nam là chủ.'),
    Q('Câu "Như hà nghịch lỗ lai xâm phạm" mang ý?', ['Tả cảnh sông núi', 'Mời gọi khách quý', 'Vì sao lũ giặc dám đến xâm phạm', 'Ca tụng vua'], 2, 'Câu hỏi tu từ vạch tội kẻ thù.'),
    Q('Tinh thần xuyên suốt bài là?', ['Hoài cổ', 'Yêu nước và tự tôn dân tộc', 'Bi luỵ', 'Tả tình lứa đôi'], 1, 'Tinh thần độc lập, tự cường.'),
  ]),

  M(6, '"Phò giá về kinh" (Trần Quang Khải) & "Bánh trôi nước" (Hồ Xuân Hương)', [
    Q('"Phò giá về kinh" do ai sáng tác?', ['Nguyễn Trãi', 'Trần Nhân Tông', 'Trần Quang Khải', 'Lý Thường Kiệt'], 2, 'Trần Quang Khải — danh tướng nhà Trần.'),
    Q('Bài "Phò giá về kinh" ra đời sau chiến thắng nào?', ['Chiến thắng quân Minh', 'Chiến thắng quân Nguyên Mông', 'Chiến thắng quân Thanh', 'Chiến thắng quân Tống'], 1, 'Sau khi giải phóng Thăng Long, đón vua về kinh.'),
    Q('Câu "Đoạt sáo Chương Dương độ" nhắc tới sự kiện?', ['Trận Đông Bộ Đầu', 'Trận Chương Dương cướp giáo giặc', 'Trận Vạn Kiếp', 'Trận Bạch Đằng'], 1, 'Trận Chương Dương 1285.'),
    Q('"Bánh trôi nước" của tác giả?', ['Nguyễn Du', 'Đoàn Thị Điểm', 'Bà Huyện Thanh Quan', 'Hồ Xuân Hương'], 3, '"Bà chúa thơ Nôm" Hồ Xuân Hương.'),
    Q('Hình ảnh "bánh trôi nước" là ẩn dụ cho?', ['Phong tục lễ hội', 'Món ăn truyền thống', 'Cuộc sống nông thôn', 'Thân phận và phẩm chất người phụ nữ'], 3, 'Bánh trôi = thân phận chìm nổi nhưng tấm lòng son sắt.'),
    Q('"Tấm lòng son" trong bài biểu trưng cho?', ['Màu đỏ của bánh', 'Nhân ngọt', 'Phẩm chất thuỷ chung, son sắt của người phụ nữ', 'Sự giàu có'], 2, 'Dù chịu nhiều "rắn nát" vẫn giữ tấm lòng son.'),
  ]),

  M(7, 'Thực hành tiếng Việt — Từ ghép, từ láy', [
    Q('Từ "xe đạp" thuộc loại?', ['Từ ghép đẳng lập', 'Từ ghép chính phụ', 'Từ láy vần', 'Từ láy âm'], 1, '"Xe" là chính, "đạp" là phụ phân loại xe.'),
    Q('Từ "nhà cửa" là?', ['Láy âm', 'Láy vần', 'Ghép đẳng lập', 'Ghép chính phụ'], 2, 'Hai tiếng đồng đẳng nghĩa.'),
    Q('Từ "lung linh" là?', ['Từ đơn', 'Từ Hán Việt', 'Từ láy âm', 'Từ ghép'], 2, 'Hai tiếng có vần và phụ âm đầu láy.'),
    Q('Từ "lấp lánh" thuộc loại?', ['Quán ngữ', 'Từ ghép', 'Từ láy', 'Thành ngữ'], 2, 'Láy phụ âm đầu "l".'),
    Q('Đặc điểm của từ láy là?', ['Bắt buộc Hán Việt', 'Có hai tiếng đều có nghĩa rõ', 'Có sự lặp lại về âm/vần/cả tiếng', 'Luôn là tính từ'], 2, 'Lặp âm hoặc vần.'),
    Q('Trong câu "Cô gái có giọng nói nhẹ nhàng", "nhẹ nhàng" là?', ['Động từ - đơn', 'Đại từ', 'Tính từ - láy', 'Danh từ - ghép'], 2, 'Tính từ, từ láy âm "nh-".'),
  ]),

  M(8, 'Đại từ — Quan hệ từ', [
    Q('Đại từ là từ dùng để?', ['Chỉ mệnh lệnh', 'Liên kết câu', 'Chỉ trạng thái', 'Trỏ người, vật, sự việc hoặc dùng hỏi'], 3, 'Đại từ thay thế hoặc dùng hỏi.'),
    Q('Trong câu "Nó đi học rồi", "nó" là?', ['Đại từ', 'Tính từ', 'Danh từ', 'Động từ'], 0, 'Đại từ ngôi 3 số ít.'),
    Q('Đại từ nghi vấn là?', ['Vào, ra', 'Ai, gì, sao, đâu, mấy…', 'Nó, hắn, y', 'Tôi, em, chúng ta'], 1, 'Dùng để hỏi.'),
    Q('Quan hệ từ "và" dùng để?', ['Nối quan hệ điều kiện', 'Nối quan hệ nguyên nhân', 'Nối các yếu tố đẳng lập', 'Nối quan hệ tăng tiến'], 2, '"Và" đẳng lập.'),
    Q('Quan hệ từ "nếu…thì…" chỉ?', ['Quan hệ nhượng bộ', 'Quan hệ so sánh', 'Quan hệ thời gian', 'Quan hệ giả thiết — kết quả'], 3, 'Cặp quan hệ điều kiện.'),
    Q('Câu "Tuy trời mưa nhưng em vẫn đến lớp" dùng quan hệ?', ['Điều kiện', 'Nguyên nhân — kết quả', 'Mục đích', 'Tương phản — nhượng bộ'], 3, '"Tuy…nhưng…" tương phản.'),
  ]),

  M(9, 'Thành ngữ — Cụm từ cố định', [
    Q('Thành ngữ là?', ['Câu nói thông thường', 'Cụm từ cố định, biểu thị một ý trọn vẹn, có hình ảnh', 'Câu hoàn chỉnh có chủ ngữ vị ngữ', 'Câu hỏi tu từ'], 1, 'Đặc trưng: cố định, hàm súc, hình tượng.'),
    Q('"Ăn quả nhớ kẻ trồng cây" là?', ['Thành ngữ', 'Ca dao', 'Châm ngôn nước ngoài', 'Tục ngữ'], 3, 'Tục ngữ — câu hoàn chỉnh, có triết lí.'),
    Q('"Chân cứng đá mềm" là?', ['Quán ngữ', 'Ca dao', 'Thành ngữ', 'Tục ngữ'], 2, 'Cụm cố định, ý chí kiên cường.'),
    Q('Thành ngữ thường có chức năng?', ['Là đoạn văn', 'Là câu hoàn chỉnh', 'Làm thành phần câu (CN, VN, BN…)', 'Là bài thơ ngắn'], 2, 'Thành ngữ là cụm, dùng làm thành phần câu.'),
    Q('"Một nắng hai sương" nghĩa là?', ['Rất nhàn', 'Rất giàu', 'Vất vả lao động', 'Trời đẹp'], 2, 'Hình ảnh người nông dân lam lũ.'),
    Q('"Nước chảy đá mòn" có ý?', ['Kiên trì sẽ thành công', 'May mắn', 'Nhanh chóng làm hỏng', 'Sự việc khó xảy ra trong thực tế'], 0, 'Bài học về sự bền bỉ.'),
  ]),

  M(10, 'Truyện ngắn hiện đại — "Cuộc chia tay của những con búp bê"', [
    Q('Tác giả truyện ngắn là?', ['Nguyễn Quang Sáng', 'Nguyên Hồng', 'Khánh Hoài', 'Tô Hoài'], 2, 'Khánh Hoài.'),
    Q('Nhân vật chính trong truyện là?', ['Cô giáo', 'Người cha', 'Hai anh em Thành và Thuỷ', 'Người mẹ'], 2, 'Hai anh em phải chia tay khi cha mẹ ly hôn.'),
    Q('Hình ảnh "những con búp bê" là biểu tượng cho?', ['Quà sinh nhật', 'Tài sản chia chác', 'Sự gắn bó hồn nhiên của hai anh em', 'Đồ chơi mới'], 2, 'Hai con búp bê không muốn chia xa — như hai anh em.'),
    Q('Chủ đề chính của truyện là?', ['Cuộc sống làng quê', 'Nỗi đau của trẻ em khi gia đình tan vỡ', 'Tình bạn tuổi thơ', 'Niềm vui đi học'], 1, 'Cảnh báo về hậu quả ly hôn đối với con trẻ.'),
    Q('Người kể chuyện trong truyện là?', ['Em Thuỷ', 'Người mẹ', 'Tác giả — ngôi thứ ba', 'Nhân vật Thành — ngôi thứ nhất'], 3, 'Anh trai Thành kể (xưng "tôi").'),
    Q('Thông điệp của truyện dành cho người lớn là?', ['Đừng cho trẻ chơi búp bê', 'Hãy giữ gìn mái ấm, đừng làm con cái phải chịu đựng chia ly', 'Cấm ly hôn', 'Hãy chia đều đồ chơi'], 1, 'Hậu quả nặng nề lên trẻ em.'),
  ]),

  M(11, 'Truyện ngắn — "Lão Hạc" (Nam Cao)', [
    Q('Tác giả "Lão Hạc" là?', ['Nam Cao', 'Ngô Tất Tố', 'Nguyên Hồng', 'Tô Hoài'], 0, 'Nam Cao — nhà văn hiện thực phê phán.'),
    Q('Nhân vật chính là?', ['Lão Hạc — người nông dân nghèo', 'Binh Tư', 'Cậu Vàng', 'Anh giáo'], 0, 'Lão Hạc trung tâm câu chuyện.'),
    Q('"Cậu Vàng" trong truyện là?', ['Hàng xóm', 'Người con đi đồn điền', 'Con trai lão', 'Con chó của lão Hạc'], 3, 'Lão Hạc gọi con chó là "cậu Vàng" như con.'),
    Q('Lão Hạc đã chọn cách kết thúc cuộc đời ra sao?', ['Bệnh chết', 'Bỏ làng đi', 'Bị giết', 'Ăn bả chó để tự kết liễu'], 3, 'Cái chết đau đớn nhưng giữ trọn nhân cách.'),
    Q('Chủ đề của truyện là?', ['Đời sống tiểu thị dân', 'Số phận và phẩm cách người nông dân trước Cách mạng', 'Sinh hoạt làng quê', 'Tình yêu lứa đôi'], 1, 'Hiện thực + nhân đạo.'),
    Q('Thái độ của Nam Cao với lão Hạc là?', ['Khinh thường', 'Phê phán gay gắt sự bảo thủ', 'Chế giễu', 'Yêu thương, kính trọng'], 3, 'Đề cao phẩm chất lương thiện của người nông dân.'),
  ]),

  M(12, 'Câu rút gọn — Câu đặc biệt', [
    Q('Câu rút gọn là?', ['Câu thiếu hoàn toàn chủ ngữ và vị ngữ', 'Câu không có nghĩa', 'Câu lược bỏ một số thành phần để câu gọn', 'Câu hỏi tu từ'], 2, 'Lược thành phần nhưng vẫn hiểu được dựa vào ngữ cảnh.'),
    Q('Trong hội thoại "— Bạn đi đâu? — Đi học", "Đi học" là?', ['Câu cảm thán', 'Câu rút gọn', 'Câu cầu khiến', 'Câu đặc biệt'], 1, 'Lược chủ ngữ "Tôi" — câu rút gọn.'),
    Q('Câu đặc biệt là?', ['Câu có nhiều vị ngữ', 'Câu rút gọn vị ngữ', 'Câu không cấu tạo theo mô hình CN–VN', 'Câu có hai chủ ngữ'], 2, 'Không theo cấu trúc thông thường.'),
    Q('"Mùa thu!" là câu?', ['Rút gọn', 'Đặc biệt', 'Trần thuật đơn', 'Cảm thán đầy đủ'], 1, 'Không có CN-VN; bộc lộ cảm xúc.'),
    Q('Tác dụng của câu đặc biệt KHÔNG bao gồm?', ['Nêu thông tin về thời gian, nơi chốn', 'Liệt kê', 'Bộc lộ cảm xúc', 'Diễn đạt phép tính'], 3, 'Câu đặc biệt không dùng để diễn phép tính.'),
    Q('Khi dùng câu rút gọn cần?', ['Bắt buộc dùng trong văn bản hành chính', 'Đảm bảo người nghe hiểu, không thô lỗ', 'Lược bao nhiêu cũng được', 'Cấm hoàn toàn'], 1, 'Tránh hiểu lầm, tránh bất lịch sự.'),
  ]),

  M(13, 'Dấu chấm phẩy — Dấu chấm lửng', [
    Q('Dấu chấm phẩy (;) thường dùng để?', ['Kết thúc câu hỏi', 'Bộc lộ cảm xúc mạnh', 'Ngăn cách các bộ phận lớn trong một câu ghép', 'Trích dẫn'], 2, 'Phân cách các vế song hành lớn.'),
    Q('Dấu chấm lửng (…) KHÔNG có tác dụng?', ['Liệt kê chưa hết', 'Biểu thị lời nói còn bỏ dở', 'Biểu thị im lặng kéo dài', 'Kết thúc câu hoàn chỉnh dứt khoát'], 3, 'Kết thúc dứt khoát là dấu chấm.'),
    Q('Trong câu "Sách, vở, bút; đèn, bàn, ghế là bạn của em", dấu ; có vai trò?', ['Cảm thán', 'Chú thích', 'Đánh dấu lời dẫn trực tiếp', 'Tách hai nhóm liệt kê'], 3, 'Hai nhóm "đồ học tập" và "đồ dùng học".'),
    Q('Dấu chấm than (!) dùng cho câu?', ['Trần thuật', 'Liệt kê', 'Câu nghi vấn', 'Cảm thán, cầu khiến'], 3, 'Bộc lộ cảm xúc hoặc yêu cầu.'),
    Q('Dấu hai chấm (:) thường giới thiệu?', ['Lời dẫn trực tiếp hoặc giải thích', 'Câu cảm thán', 'Câu hỏi', 'Câu hoàn chỉnh kế tiếp'], 0, 'Báo hiệu giải thích, liệt kê, dẫn lời.'),
    Q('Dấu gạch ngang ngắn (-) khác gạch nối ở chỗ?', ['Dài hơn và để chú thích/liệt kê/đối thoại', 'Không có khác biệt', 'Để nối tên riêng nước ngoài', 'Y hệt nhau'], 0, 'Gạch nối ngắn nối tiếng phiên âm; gạch ngang dài có chức năng câu.'),
  ]),

  M(14, 'Văn nghị luận xã hội ngắn', [
    Q('Văn nghị luận là kiểu văn?', ['Kể chuyện', 'Tả cảnh', 'Biểu cảm thuần tuý', 'Bàn luận, thuyết phục người đọc về một tư tưởng/vấn đề'], 3, 'Đặc trưng: lập luận + lí lẽ + dẫn chứng.'),
    Q('Ba yếu tố chính của một bài nghị luận?', ['Luận điểm — luận cứ — lập luận', 'Cảm xúc — hình ảnh — nhạc điệu', 'Nhân vật — sự kiện — bối cảnh', 'Mở — thân — kết'], 0, 'Ba yếu tố cốt lõi.'),
    Q('Luận điểm là?', ['Lời mở đầu', 'Câu hỏi tu từ', 'Ý kiến chính cần làm rõ', 'Ví dụ minh hoạ'], 2, 'Luận điểm = quan điểm.'),
    Q('Dẫn chứng tốt cần?', ['Luôn lấy từ thần thoại', 'Tiêu biểu, xác thực, phù hợp', 'Bịa đặt cho hấp dẫn', 'Càng nhiều càng tốt'], 1, 'Chất lượng quan trọng hơn số lượng.'),
    Q('Bài nghị luận xã hội thường bàn về?', ['Toán học', 'Vấn đề đời sống xã hội (đạo đức, lối sống…)', 'Ngữ pháp', 'Tác phẩm văn học'], 1, 'NLXH bàn về hiện tượng/tư tưởng xã hội.'),
    Q('Mở bài hay cho NLXH nên?', ['Kể chuyện dài', 'Tả cảnh dài', 'Nêu rõ vấn đề nghị luận', 'Đưa nhiều câu hỏi'], 2, 'Nêu thẳng vấn đề, định hướng.'),
  ]),

  M(15, 'Viết bài văn biểu cảm về một sự việc/con người', [
    Q('Văn biểu cảm chủ yếu nhằm?', ['Trình bày sự kiện khách quan', 'Mô tả khoa học', 'Bày tỏ cảm xúc, tình cảm của người viết', 'Phân tích logic'], 2, 'Biểu cảm = trữ tình.'),
    Q('Bố cục bài biểu cảm thường gồm?', ['Giả thiết — chứng minh', 'Tóm tắt — đề xuất', 'Thí nghiệm — kết quả', 'Mở — thân — kết'], 3, '3 phần cơ bản.'),
    Q('Lời văn biểu cảm thường?', ['Liệt kê dữ liệu', 'Khô khan, đầy số liệu', 'Giàu hình ảnh, cảm xúc, có thể dùng so sánh, ẩn dụ', 'Trích dẫn pháp luật'], 2, 'Sử dụng nhiều biện pháp tu từ.'),
    Q('Khi biểu cảm về một người, nên?', ['Chỉ liệt kê thông tin', 'Tránh nói cảm xúc', 'Kết hợp tả và kể để khắc hoạ tình cảm', 'Chép tiểu sử'], 2, 'Tả + kể + nêu cảm xúc.'),
    Q('Cảm xúc trong bài cần?', ['Sao chép từ bài khác', 'Cường điệu phi lí', 'Chân thật, có nguồn gốc rõ ràng', 'Trung lập tuyệt đối'], 2, 'Chân thật mới thuyết phục.'),
    Q('Kết bài biểu cảm nên?', ['Đặt câu hỏi pháp luật', 'Đưa ra số liệu thống kê', 'Tóm tắt nội dung sách', 'Khẳng định lại tình cảm, mở rộng suy ngẫm'], 3, 'Đọng lại cảm xúc.'),
  ]),

  M(16, 'Nói và nghe — Trao đổi về vấn đề trong tác phẩm', [
    Q('Khi trao đổi về một tác phẩm, nên bắt đầu bằng?', ['Nói liên tục không nghỉ', 'Phản đối ngay ý kiến đối tác', 'Giới thiệu ngắn tác phẩm và vấn đề bàn luận', 'Đọc lại toàn bộ tác phẩm'], 2, 'Giới thiệu trước khi tranh luận.'),
    Q('Người nghe tích cực cần?', ['Ngắt lời liên tục', 'Lắng nghe, ghi chú, đặt câu hỏi đúng lúc', 'Vừa nghe vừa làm việc khác', 'Im lặng tuyệt đối'], 1, 'Lắng nghe và phản hồi xây dựng.'),
    Q('Khi không đồng ý với ý kiến bạn, nên?', ['Nêu lí do, phản bác lịch sự bằng dẫn chứng', 'Im lặng và bỏ đi', 'Bác bỏ thô bạo', 'Cười nhạo'], 0, 'Tôn trọng và có lí lẽ.'),
    Q('Tốc độ nói thích hợp khi trình bày là?', ['Vừa phải, rõ ràng', 'Rất chậm và đều', 'Lúc nhanh lúc dừng tuỳ ý', 'Càng nhanh càng tốt'], 0, 'Người nghe dễ tiếp nhận.'),
    Q('Cử chỉ, ánh mắt khi nói nên?', ['Tự nhiên, hướng về người nghe', 'Khoanh tay nghiêm khắc', 'Xoay lưng về phía nghe', 'Nhìn xuống sàn'], 0, 'Giao tiếp phi ngôn ngữ tốt.'),
    Q('Sau khi trao đổi, bước cuối cùng là?', ['Giải tán không nói lại', 'Phản đối tất cả', 'Bỏ qua mọi ý kiến', 'Tổng kết các ý kiến chung và còn khác biệt'], 3, 'Tổng kết giúp định hướng tiếp theo.'),
  ]),

  M(17, 'Ôn tập đọc hiểu giữa kì I', [
    Q('Bước đầu tiên đọc hiểu một bài thơ trữ tình là?', ['Đọc to và cảm thụ nhịp điệu', 'Tìm tác giả trên mạng', 'Phân tích cú pháp ngay', 'Tóm tắt sơ lược'], 0, 'Cảm nhận âm điệu trước.'),
    Q('Hình tượng "mẹ" trong thơ ca Việt thường gắn với?', ['Sự xa cách', 'Sự nghiêm khắc', 'Sự lạnh lùng', 'Tình yêu thương, sự hi sinh'], 3, 'Mẫu hình truyền thống.'),
    Q('Bài "Tiếng gà trưa" dùng âm thanh để?', ['Cảnh báo nguy hiểm', 'Khơi gợi hồi tưởng tuổi thơ', 'Tả buổi sáng', 'Vui đùa đơn thuần'], 1, 'Khởi đầu dòng hồi ức.'),
    Q('Trong văn nghị luận, dẫn chứng đóng vai trò?', ['Minh hoạ và củng cố luận điểm', 'Thay thế cho luận điểm chính', 'Trang trí', 'Thay cho lập luận'], 0, 'Củng cố sức thuyết phục.'),
    Q('Câu "Trời ơi!" thuộc kiểu câu?', ['Nghi vấn', 'Trần thuật', 'Cảm thán (đặc biệt)', 'Cầu khiến'], 2, 'Bộc lộ cảm xúc.'),
    Q('Tục ngữ khác thành ngữ ở chỗ?', ['Không có khác biệt', 'Tục ngữ là câu hoàn chỉnh, có triết lí', 'Tục ngữ ngắn hơn', 'Thành ngữ luôn có vần'], 1, 'Tục ngữ = câu; thành ngữ = cụm.'),
  ]),

  M(18, 'Kiểm tra học kì I — Tổng hợp', [
    Q('Trong bài "Mẹ và quả", "quả non xanh" ám chỉ?', ['Người con chưa trưởng thành', 'Mùa hè', 'Trái cây sống', 'Sự khô cằn'], 0, 'Ẩn dụ — con cái chưa kịp lớn.'),
    Q('Bài "Sông núi nước Nam" khẳng định điều gì?', ['Tình yêu đôi lứa', 'Cuộc sống bình dị', 'Ca ngợi thiên nhiên', 'Chủ quyền lãnh thổ và sức mạnh dân tộc'], 3, 'Tuyên ngôn độc lập.'),
    Q('"Bánh trôi nước" thuộc thể thơ?', ['Năm chữ', 'Lục bát', 'Thất ngôn tứ tuyệt', 'Song thất lục bát'], 2, 'Bốn câu bảy chữ.'),
    Q('Từ "long lanh" là?', ['Từ Hán Việt', 'Từ đơn', 'Từ láy âm "l"', 'Từ ghép'], 2, 'Láy âm đầu.'),
    Q('Câu "Mưa." là?', ['Câu cảm thán đầy đủ', 'Câu rút gọn', 'Câu nghi vấn', 'Câu đặc biệt'], 3, 'Không CN-VN, nêu hiện tượng.'),
    Q('Khi viết NLXH, dẫn chứng tốt phải?', ['Càng dài càng tốt', 'Tiêu biểu, xác thực', 'Bịa đặt', 'Luôn từ cổ tích'], 1, 'Yêu cầu cơ bản.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Truyện ngắn nước ngoài — "Buổi học cuối cùng" (A. Daudet)', [
    Q('Tác giả "Buổi học cuối cùng" là?', ['Mác Tuên', 'O. Hen-ri', 'Sê-khốp', 'An-phông-xơ Đô-đê (A. Daudet) — Pháp'], 3, 'A. Daudet — nhà văn Pháp.'),
    Q('Nhân vật trung tâm của truyện là?', ['Bà nội', 'Hai cha con', 'Cậu bé Phrăng và thầy Ha-men', 'Một nhóm bạn'], 2, 'Phrăng kể và thầy Ha-men là nhân vật chính.'),
    Q('Bối cảnh truyện là?', ['Làng quê Nga', 'Đại chiến thế giới', 'Pa-ri thời bình', 'Vùng An-dát của Pháp bị Phổ chiếm, cấm dạy tiếng Pháp'], 3, 'Sau chiến tranh Pháp - Phổ 1870.'),
    Q('Thông điệp lớn của truyện là?', ['Sự khôi hài', 'Tình yêu tiếng mẹ đẻ và lòng yêu nước', 'Tình thầy trò đơn thuần', 'Tình bạn'], 1, 'Tiếng mẹ đẻ là chìa khoá tự do.'),
    Q('Câu "Khi một dân tộc rơi vào vòng nô lệ, chừng nào họ vẫn giữ vững tiếng nói của mình…" của ai?', ['Thầy Ha-men', 'Tác giả ngoài lề', 'Phrăng', 'Bà cụ Hô-de'], 0, 'Lời thầy Ha-men.'),
    Q('Câu cuối truyện "Nước Pháp muôn năm!" thể hiện?', ['Sự vui đùa', 'Sự ngạo nghễ', 'Sự sợ hãi', 'Tình yêu nước cháy bỏng'], 3, 'Cao trào của bài học.'),
  ]),

  M(20, 'Văn bản nghị luận văn học ngắn', [
    Q('Nghị luận văn học bàn về?', ['Khoa học tự nhiên', 'Đời sống xã hội', 'Tác phẩm hoặc khía cạnh trong tác phẩm văn học', 'Lịch sử thuần tuý'], 2, 'NLVH = bàn về văn học.'),
    Q('Khi phân tích nhân vật cần?', ['Chỉ kể lại cốt truyện', 'Đánh giá cảm tính', 'Bám vào lời nói, hành động, mối quan hệ và biến đổi của nhân vật', 'Bịa thêm tình huống'], 2, 'Phân tích trên cơ sở văn bản.'),
    Q('Luận điểm trong NLVH thường được rút từ?', ['Đặc điểm nội dung và nghệ thuật của tác phẩm', 'Quan điểm cá nhân không cần dẫn chứng', 'Bài viết người khác', 'Tóm tắt sách giáo khoa'], 0, 'Bám tác phẩm.'),
    Q('Dẫn chứng trong NLVH chủ yếu là?', ['Số liệu thống kê', 'Trích dẫn từ chính tác phẩm', 'Sự kiện thời sự', 'Tin nhắn cá nhân'], 1, 'Bằng chứng nội tại từ văn bản.'),
    Q('Nghệ thuật của một tác phẩm gồm các yếu tố?', ['Tiểu sử tác giả', 'Ngôn ngữ, hình ảnh, nhịp điệu, kết cấu…', 'Nội dung tư tưởng', 'Tên nhà xuất bản'], 1, 'Hình thức nghệ thuật.'),
    Q('Kết bài NLVH nên?', ['Tóm tắt cốt truyện một lần nữa', 'Khái quát giá trị tác phẩm và nêu cảm nhận', 'Bỏ qua', 'Liệt kê tác phẩm khác'], 1, 'Đánh giá khái quát.'),
  ]),

  M(21, 'Tục ngữ về thiên nhiên và lao động sản xuất', [
    Q('"Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối" nói về?', ['Bài học đạo đức', 'Tâm trạng người nông dân', 'Hiện tượng ngày đêm theo mùa', 'Thói quen sinh hoạt'], 2, 'Kinh nghiệm quan sát thiên nhiên.'),
    Q('"Tấc đất tấc vàng" có nghĩa?', ['Đo lường thực tế', 'Tiền vàng nhiều', 'Đất đai rất quý giá', 'Cảnh báo trộm cắp'], 2, 'Đề cao giá trị của đất.'),
    Q('"Nhất nước, nhì phân, tam cần, tứ giống" sắp xếp gì?', ['Bốn yếu tố quan trọng trong sản xuất nông nghiệp', 'Mâm cỗ ngày Tết', 'Đẳng cấp xã hội', 'Phong tục lễ hội'], 0, 'Kinh nghiệm canh tác lúa nước.'),
    Q('Tục ngữ thường được sáng tác bởi?', ['Nhà sử học', 'Nhân dân lao động qua nhiều thế hệ', 'Vua chúa', 'Một nhà thơ'], 1, 'Sáng tác dân gian.'),
    Q('Đặc điểm hình thức của tục ngữ?', ['Có cốt truyện', 'Ngắn gọn, có vần điệu, đối xứng', 'Dài và tự do', 'Câu thơ bảy chữ'], 1, 'Cô đọng, dễ nhớ.'),
    Q('"Mau sao thì nắng, vắng sao thì mưa" thuộc nhóm?', ['Đạo đức', 'Dự báo thời tiết', 'Học tập', 'Tình yêu'], 1, 'Kinh nghiệm dân gian quan sát bầu trời.'),
  ]),

  M(22, 'Nghỉ Tết — Đọc thêm tản văn xuân', [
    Q('Tản văn là?', ['Hợp đồng kinh tế', 'Bài thơ', 'Văn nghị luận chính trị', 'Một thể văn xuôi ngắn, giàu cảm xúc và suy ngẫm'], 3, 'Thể loại tự do, mang dấu ấn cá nhân.'),
    Q('Mùa xuân trong văn học Việt thường gắn với?', ['Niềm vui, hi vọng, sự khởi đầu', 'Lạnh lẽo', 'Buồn bã', 'Tang tóc'], 0, 'Biểu tượng tích cực.'),
    Q('Tết Nguyên đán đầy đủ ý nghĩa?', ['Nghỉ học', 'Đi du lịch nước ngoài', 'Đoàn tụ, kính tổ tiên, đón năm mới', 'Mua sắm'], 2, 'Văn hoá truyền thống.'),
    Q('Câu đối Tết thường gồm?', ['Ba câu', 'Bài thơ tứ tuyệt', 'Hai vế đối nhau về ý và thanh', 'Một câu dài'], 2, 'Đặc trưng của câu đối.'),
    Q('"Bánh chưng xanh, dưa hấu đỏ" gợi không khí gì?', ['Sinh nhật', 'Đi học', 'Đám cưới', 'Tết cổ truyền'], 3, 'Hình ảnh ngày Tết.'),
    Q('Đọc tản văn nên?', ['Tìm cốt truyện', 'Tóm tắt khô khan', 'Cảm nhận giọng điệu và suy ngẫm cùng tác giả', 'Phân tích nhân vật'], 2, 'Đối thoại nội tâm với tác giả.'),
  ]),

  M(23, 'Văn bản thông tin — Giới thiệu một danh nhân/lễ hội', [
    Q('Văn bản thông tin nhằm?', ['Bày tỏ cảm xúc', 'Kể chuyện hư cấu', 'Bàn luận triết học', 'Cung cấp thông tin xác thực, khách quan'], 3, 'Mục đích thông tin.'),
    Q('Yêu cầu quan trọng của VBTT là?', ['Chính xác và rõ ràng', 'Có vần điệu', 'Có nhiều hình ảnh hư cấu', 'Mang yếu tố kì ảo'], 0, 'Tính xác thực.'),
    Q('Khi giới thiệu danh nhân, cần nêu?', ['Tin đồn', 'Lời nói thân thiết', 'Thân thế, sự nghiệp, đóng góp tiêu biểu', 'Đời sống cá nhân hoá'], 2, 'Thông tin chính thống.'),
    Q('Một lễ hội thường có các yếu tố?', ['Không cần ý nghĩa', 'Thời gian, địa điểm, nghi thức, ý nghĩa', 'Chỉ trò chơi', 'Chỉ ăn uống'], 1, 'Cấu trúc giới thiệu đầy đủ.'),
    Q('VBTT thường được trình bày bằng?', ['Đề mục rõ ràng, có thể có bảng/sơ đồ', 'Đoạn văn không ngắt', 'Toàn dấu chấm than', 'Toàn câu hỏi'], 0, 'Giúp tra cứu, theo dõi.'),
    Q('Khi đọc VBTT, cần?', ['Cảm nhận âm điệu', 'Phân tích nhân vật', 'Tự tưởng tượng', 'Xác định thông tin chính, đối chiếu nguồn'], 3, 'Kĩ năng đọc thông tin.'),
  ]),

  M(24, 'Thực hành tiếng Việt — Liên kết câu, liên kết đoạn', [
    Q('Liên kết câu là?', ['Cách ngắt câu', 'Cách dùng phép thay thế, lặp, nối… để các câu gắn bó về ý', 'Cách viết hoa', 'Cách dùng dấu hỏi'], 1, 'Mục đích để văn bản mạch lạc.'),
    Q('Phép thế thường dùng?', ['Hình ảnh', 'Số liệu', 'Câu cảm thán', 'Đại từ, từ đồng nghĩa'], 3, 'Thay thế để tránh lặp.'),
    Q('Phép lặp là?', ['Lặp dấu câu', 'Viết câu hai lần', 'Lặp một câu y nguyên', 'Lặp lại từ ngữ ở các câu khác nhau để liên kết'], 3, 'Phép liên kết phổ biến.'),
    Q('Phép nối dùng?', ['Quan hệ từ, từ nối (vì vậy, do đó, tuy nhiên…)', 'Phép lặp từ ngữ', 'Tính từ', 'Đại từ'], 0, 'Nối bằng từ ngữ chỉ quan hệ.'),
    Q('Đoạn văn mạch lạc cần?', ['Càng nhiều câu càng tốt', 'Các câu rời rạc', 'Một câu chủ đề và các câu triển khai hỗ trợ', 'Toàn câu hỏi'], 2, 'Đảm bảo tính thống nhất.'),
    Q('Liên kết đoạn nên?', ['Có câu/từ chuyển ý ở đầu đoạn mới', 'Không liên quan đoạn trước', 'Lặp đoạn trước', 'Bắt đầu đoạn mới đột ngột'], 0, 'Câu chuyển ý.'),
  ]),

  M(25, 'Câu chủ động — câu bị động', [
    Q('Câu chủ động là câu có chủ ngữ chỉ?', ['Địa điểm xảy ra', 'Người/vật thực hiện hành động', 'Đối tượng được nhắc tới', 'Người/vật chịu tác động'], 1, 'CN là tác nhân.'),
    Q('Câu bị động là câu có chủ ngữ chỉ?', ['Người/vật chịu tác động của hành động', 'Người/vật thực hiện hành động', 'Thời gian', 'Sự việc'], 0, 'CN là đối tượng.'),
    Q('Chuyển câu "Mèo bắt chuột" sang bị động?', ['Chuột và mèo', 'Mèo bị chuột bắt', 'Bắt chuột bởi mèo', 'Chuột bị mèo bắt'], 3, 'Đảo đối tượng lên CN.'),
    Q('Dấu hiệu thường gặp của câu bị động trong tiếng Việt?', ['Có từ "sẽ"', 'Có từ "đang"', 'Có từ "bị" hoặc "được"', 'Có từ "vì"'], 2, '"Bị" (tiêu cực), "được" (tích cực).'),
    Q('Tác dụng của câu bị động?', ['Liệt kê', 'Đặt câu hỏi', 'Tạo cảm xúc vui', 'Nhấn mạnh đối tượng chịu tác động'], 3, 'Đưa đối tượng lên đầu để nhấn mạnh.'),
    Q('"Bài thơ được viết năm 1968" là?', ['Câu đặc biệt', 'Câu bị động', 'Câu rút gọn', 'Câu chủ động'], 1, 'Có "được", đối tượng "bài thơ" làm CN.'),
  ]),

  M(26, 'Truyện ngụ ngôn — "Đẽo cày giữa đường"', [
    Q('Thể loại "Đẽo cày giữa đường" là?', ['Thần thoại', 'Truyện cổ tích', 'Truyện cười', 'Truyện ngụ ngôn'], 3, 'Truyện ngắn có ý nghĩa giáo huấn ẩn dụ.'),
    Q('Nhân vật chính trong truyện là?', ['Người đẽo cày', 'Người thợ rèn trong làng', 'Bác nông dân già', 'Bác thợ rèn'], 0, 'Người thợ thiếu chính kiến.'),
    Q('Bài học chính của truyện là?', ['Phải có chính kiến, không nghe theo mọi lời khuyên', 'Phải nghe lời người lớn', 'Phải đẽo gỗ ở nhà', 'Phải làm cày nhanh'], 0, 'Mất chính kiến → thất bại.'),
    Q('Truyện ngụ ngôn thường?', ['Tả phong cảnh', 'Bàn về chính trị', 'Ngắn, có nhân vật là người/vật, mang bài học', 'Dài, có nhiều tuyến nhân vật'], 2, 'Đặc trưng thể loại.'),
    Q('"Đẽo cày giữa đường" hiện nay được hiểu là?', ['Người thợ giỏi', 'Hành động cẩn thận', 'Hành động thiếu chủ kiến, ai nói gì cũng nghe', 'Người yêu lao động'], 2, 'Nghĩa chuyển dùng làm thành ngữ.'),
    Q('Để rút bài học, người đọc cần?', ['Tìm tác giả', 'Chỉ nhớ cốt truyện', 'Suy ngẫm ý nghĩa biểu trưng của câu chuyện', 'Tra từ điển'], 2, 'Tư duy ẩn dụ.'),
  ]),

  M(27, 'Truyện ngụ ngôn — "Ếch ngồi đáy giếng"', [
    Q('"Ếch ngồi đáy giếng" cho thấy?', ['Sự hạn hẹp, kiêu ngạo do thiếu hiểu biết', 'Sự thông minh', 'Sự khiêm tốn', 'Sự dũng cảm'], 0, 'Ếch tưởng bầu trời chỉ bằng miệng giếng.'),
    Q('Tại sao ếch bị trâu giẫm bẹp?', ['Vì kiêu ngạo, không quan sát', 'Vì trời mưa', 'Vì trâu cố tình', 'Vì giếng cạn'], 0, 'Kiêu ngạo → tai hoạ.'),
    Q('Bài học của truyện là?', ['Đừng ở giếng', 'Tránh xa con trâu', 'Không nên kiêu ngạo, phải mở rộng hiểu biết', 'Phải sống tập thể'], 2, 'Khiêm tốn, cầu tiến.'),
    Q('Hình ảnh "miệng giếng" tượng trưng cho?', ['Kiến thức rộng', 'Tầm nhìn hạn hẹp', 'Bình yên', 'Sự an toàn'], 1, 'Giới hạn nhận thức.'),
    Q('Trong cuộc sống hiện nay, "ếch ngồi đáy giếng" chỉ?', ['Người chủ quan, ít hiểu biết', 'Người sống ở nông thôn', 'Người siêng học', 'Người yêu thiên nhiên'], 0, 'Nghĩa biểu tượng.'),
    Q('Để tránh "ếch ngồi đáy giếng", ta cần?', ['Tự cô lập', 'Ngại tiếp xúc', 'Học hỏi, lắng nghe, mở rộng tầm nhìn', 'Khoe khoang nhiều hơn'], 2, 'Khiêm tốn và cầu tiến.'),
  ]),

  M(28, 'Văn nghị luận về một hiện tượng đời sống', [
    Q('Đề "Bàn về việc xả rác bừa bãi" thuộc?', ['Miêu tả', 'NLVH về một tác phẩm thơ', 'NLXH về một tư tưởng đạo lí', 'NLXH về hiện tượng đời sống'], 3, 'Hiện tượng xã hội tiêu cực.'),
    Q('Bố cục bài NL về hiện tượng đời sống gồm?', ['Cốt truyện — Nhân vật — Bối cảnh', 'Mở (nêu hiện tượng) — Thân (thực trạng, nguyên nhân, hậu quả, giải pháp) — Kết', 'Chỉ một đoạn', 'Mở — Kết'], 1, 'Cấu trúc chuẩn.'),
    Q('Khi nêu giải pháp, cần?', ['Càng khái quát càng tốt', 'Cụ thể, khả thi', 'Chép từ sách', 'Bỏ qua'], 1, 'Khả thi mới có giá trị.'),
    Q('Dẫn chứng cho NL hiện tượng nên lấy từ?', ['Báo chí, đời sống, số liệu xác thực', 'Mạng xã hội không kiểm chứng', 'Truyện cổ tích', 'Tin đồn'], 0, 'Nguồn chính thống.'),
    Q('Trước hiện tượng tiêu cực, cần?', ['Đề xuất biện pháp khắc phục', 'Im lặng', 'Chỉ phê phán', 'Tránh né'], 0, 'NL phải hướng tới giải pháp.'),
    Q('Câu chủ đề ở đầu đoạn nên?', ['Tóm tắt cả bài', 'Khái quát ý chính của đoạn', 'Đặt câu hỏi tu từ', 'Trích dẫn câu thơ'], 1, 'Định hướng đoạn.'),
  ]),

  M(29, 'Văn bản nghị luận về một tư tưởng đạo lí', [
    Q('Đề "Bàn về lòng biết ơn" thuộc?', ['Thông tin', 'NLXH về tư tưởng đạo lí', 'NLVH về một nhân vật văn học', 'NLXH về một hiện tượng đời sống'], 1, 'Bàn về một giá trị đạo đức.'),
    Q('Bước đầu tiên khi viết NL về tư tưởng đạo lí?', ['Liệt kê tác phẩm', 'Giải thích khái niệm', 'Đưa kết luận', 'Tả cảnh'], 1, 'Hiểu khái niệm → bàn luận.'),
    Q('Để bài viết thuyết phục, cần?', ['Chỉ trích thơ', 'Chỉ kể chuyện', 'Kết hợp lí lẽ và dẫn chứng từ đời sống/lịch sử/văn học', 'Chỉ nêu định nghĩa'], 2, 'Kết hợp đa dạng.'),
    Q('Phần "bàn luận mở rộng" thường?', ['Tả người', 'Phê phán biểu hiện trái ngược, mở rộng vấn đề', 'Đặt câu hỏi', 'Tóm tắt lại'], 1, 'Phản đề và mở rộng.'),
    Q('Bài học rút ra cuối bài cần?', ['Khẩu hiệu sáo rỗng', 'Liên hệ bản thân, cụ thể, thực tiễn', 'Trích dẫn pháp luật', 'Tuyên ngôn dài'], 1, 'Thiết thực.'),
    Q('Ngôn ngữ NL nên?', ['Đầy biện pháp tu từ phức tạp', 'Toàn dùng từ Hán Việt', 'Rõ ràng, mạch lạc, lập luận chặt', 'Giàu hình ảnh ẩn dụ rườm rà'], 2, 'Ngôn ngữ lí trí.'),
  ]),

  M(30, 'Văn bản thuyết minh ngắn', [
    Q('Văn thuyết minh nhằm?', ['Bộc lộ cảm xúc', 'Bàn luận triết học', 'Trình bày, giới thiệu tri thức về đối tượng', 'Kể chuyện hư cấu'], 2, 'Cung cấp tri thức khách quan.'),
    Q('Yêu cầu cốt lõi của văn thuyết minh?', ['Giàu cảm xúc', 'Có vần điệu', 'Có cốt truyện hấp dẫn', 'Chính xác, khách quan, dễ hiểu'], 3, 'Tính chính xác.'),
    Q('Phương pháp thuyết minh thường gặp?', ['Tả cảm xúc', 'Hư cấu', 'Định nghĩa, liệt kê, phân loại, so sánh, nêu ví dụ, dùng số liệu', 'Đối thoại nhân vật'], 2, 'Nhiều phương pháp.'),
    Q('Khi thuyết minh một đồ vật, cần?', ['Cấu tạo, công dụng, cách dùng, lưu ý', 'Lai lịch dòng họ', 'Cảm xúc lãng mạn', 'Câu chuyện cười'], 0, 'Đặc trưng kỹ thuật và sử dụng.'),
    Q('Thuyết minh có thể dùng?', ['Toàn nghị luận', 'Chỉ hư cấu', 'Toàn bộ là cảm xúc', 'Kết hợp tả và kể chừng mực'], 3, 'Có thể đan xen tả/kể nhẹ.'),
    Q('Một bài thuyết minh tốt thường?', ['Đầy tu từ phức tạp', 'Câu dài rườm rà', 'Có đề mục, ngôn ngữ trong sáng, có thể có hình minh hoạ', 'Không có cấu trúc'], 2, 'Trình bày khoa học.'),
  ]),

  M(31, 'Phân tích nhân vật trong truyện', [
    Q('Để phân tích nhân vật, cần dựa vào?', ['Ngoại hình, hành động, lời nói, nội tâm, mối quan hệ', 'Bìa sách', 'Tên truyện', 'Tiểu sử tác giả'], 0, 'Bám văn bản.'),
    Q('Hành động của nhân vật giúp người đọc?', ['Đếm số lần xuất hiện', 'Nhận biết tính cách và quan điểm sống', 'Tóm tắt nội dung', 'Tả cảnh'], 1, 'Hành động bộc lộ tính cách.'),
    Q('Lời thoại của nhân vật cho thấy?', ['Tài viết của tác giả', 'Thị trường sách', 'Suy nghĩ, tình cảm, vốn sống của nhân vật', 'Lịch sử quốc gia'], 2, 'Ngôn ngữ phản ánh con người.'),
    Q('Nhân vật điển hình là?', ['Nhân vật trung gian', 'Nhân vật vừa cá biệt vừa khái quát cho một lớp người', 'Nhân vật phụ', 'Nhân vật phản diện'], 1, 'Khái niệm văn học.'),
    Q('Khi đánh giá nhân vật, cần?', ['Khách quan, có dẫn chứng từ tác phẩm', 'Cảm tính', 'Bắt chước người khác', 'Bỏ qua mâu thuẫn'], 0, 'Có cơ sở từ văn bản.'),
    Q('Sự thay đổi của nhân vật theo cốt truyện thể hiện?', ['Yếu tố hư cấu', 'Ngẫu nhiên', 'Quá trình phát triển nội tâm/nhận thức', 'Lỗi của nhà văn'], 2, 'Sự vận động của tính cách.'),
  ]),

  M(32, 'Văn biểu cảm về tác phẩm văn học', [
    Q('Biểu cảm về tác phẩm văn học nhằm?', ['Tóm tắt nội dung khô khan', 'Quảng cáo sách', 'Bày tỏ cảm xúc, suy nghĩ về tác phẩm', 'Phê bình học thuật'], 2, 'Trải nghiệm cá nhân với tác phẩm.'),
    Q('Cấu trúc thường gồm?', ['Phỏng vấn nhà văn', 'Giới thiệu tác phẩm — cảm nghĩ về nội dung và nghệ thuật — đánh giá', 'Lịch sử văn học', 'Tiểu sử tác giả'], 1, '3 phần.'),
    Q('Khi nêu cảm xúc, cần?', ['Gắn với chi tiết cụ thể của tác phẩm', 'Trừu tượng, chung chung', 'Chỉ tả tâm trạng cá nhân', 'Bịa thêm chi tiết'], 0, 'Cảm xúc dựa trên văn bản.'),
    Q('Bài biểu cảm về tác phẩm hay khi?', ['Sao chép bài khác', 'Dùng nhiều thuật ngữ phức tạp', 'Tả tác giả', 'Có cảm xúc chân thật và phát hiện riêng'], 3, 'Phát hiện riêng.'),
    Q('Ngôn ngữ biểu cảm về tác phẩm thường?', ['Toàn pháp luật', 'Giàu hình ảnh, có thể dùng so sánh, ẩn dụ', 'Toàn số liệu', 'Khô khan, liệt kê'], 1, 'Mang tính nghệ thuật.'),
    Q('Khi đánh giá tác phẩm, cần?', ['Bỏ qua', 'Chỉ chê', 'Khách quan, nêu cả mặt mạnh và hạn chế (nếu có)', 'Chỉ khen'], 2, 'Cân bằng.'),
  ]),

  M(33, 'Nói nghe — Tranh biện một vấn đề', [
    Q('Tranh biện là?', ['Tranh luận có lí lẽ giữa hai bên trên cùng vấn đề', 'Cãi nhau', 'Đối thoại tự do', 'Phỏng vấn'], 0, 'Có quy tắc, hai phe lập luận.'),
    Q('Trước khi tranh biện cần?', ['Chuẩn bị luận điểm, dẫn chứng, dự đoán phản biện', 'Đến và nói tuỳ hứng', 'Tự tin là đủ', 'Học thuộc bài giáo viên'], 0, 'Chuẩn bị kĩ.'),
    Q('Khi đối phương đưa lí lẽ, cần?', ['Lặp lại ý mình', 'Lắng nghe và phản bác đúng trọng tâm', 'Bác bỏ ngay không nghe', 'Lảng tránh'], 1, 'Phản biện đúng điểm.'),
    Q('Thái độ trong tranh biện?', ['Hù doạ', 'Châm biếm', 'Tôn trọng, lịch sự, có lí có tình', 'Cộc cằn'], 2, 'Văn hoá tranh luận.'),
    Q('Phần kết của một lượt tranh biện nên?', ['Đặt câu hỏi không liên quan', 'Bỏ ngỏ', 'Tóm lại luận điểm và khẳng định quan điểm', 'Cám ơn dài dòng'], 2, 'Chốt rõ.'),
    Q('Tranh biện giúp người học?', ['Tư duy phản biện, kĩ năng diễn đạt và lắng nghe', 'Trở nên hung hăng', 'Lười suy nghĩ', 'Mất bạn bè'], 0, 'Lợi ích giáo dục.'),
  ]),

  M(34, 'Ôn tập tiếng Việt và làm văn', [
    Q('"Em yêu màu áo của mẹ" — tìm cụm từ là cụm danh từ?', ['"áo của"', '"màu áo của mẹ"', '"em yêu"', '"yêu màu"'], 1, 'Cụm DT có DT trung tâm "màu áo".'),
    Q('Câu "Trên cánh đồng, lúa đã chín" có trạng ngữ?', ['"lúa đã chín"', '"đã chín"', '"cánh đồng"', '"Trên cánh đồng"'], 3, 'Trạng ngữ chỉ nơi chốn.'),
    Q('Câu "Nó thông minh và chăm chỉ" là?', ['Câu rút gọn', 'Câu ghép', 'Câu đặc biệt', 'Câu đơn có hai vị ngữ'], 3, 'Một CN, hai VN ghép.'),
    Q('Trong văn nghị luận, từ nối "do đó" chỉ?', ['Tăng tiến', 'Liệt kê', 'Tương phản', 'Quan hệ nguyên nhân — kết quả'], 3, 'Kết quả từ nguyên nhân.'),
    Q('"Trong rừng, chim hót líu lo" sử dụng biện pháp nào?', ['Nhân hoá "chim hót"', 'Hoán dụ', 'So sánh', 'Từ láy "líu lo"'], 3, 'Láy âm.'),
    Q('Bài văn cần đạt yếu tố nào để mạch lạc?', ['Câu dài', 'Nhiều dấu chấm than', 'Nhiều từ Hán Việt', 'Liên kết câu, liên kết đoạn rõ ràng'], 3, 'Mạch lạc dựa trên liên kết.'),
  ]),

  M(35, 'Kiểm tra học kì II — Tổng hợp cuối năm', [
    Q('Bài "Tiếng gà trưa" của ai?', ['Tố Hữu', 'Xuân Diệu', 'Bằng Việt', 'Xuân Quỳnh'], 3, 'Tác giả Xuân Quỳnh.'),
    Q('"Lão Hạc" của ai?', ['Nam Cao', 'Ngô Tất Tố', 'Tô Hoài', 'Nguyên Hồng'], 0, 'Truyện ngắn hiện thực phê phán.'),
    Q('Tục ngữ khác thành ngữ ở chỗ?', ['Dài hơn', 'Ngắn hơn', 'Có vần điệu', 'Là câu hoàn chỉnh, có triết lí'], 3, 'Đặc trưng hình thức và nội dung.'),
    Q('Câu "Bão!" thuộc loại?', ['Câu đặc biệt', 'Câu cảm thán đầy đủ', 'Câu rút gọn', 'Câu trần thuật'], 0, 'Không CN-VN, nêu hiện tượng.'),
    Q('Chuyển sang bị động: "Em đọc cuốn sách này"?', ['Sách được đọc bởi em', 'Em được đọc sách', 'Cuốn sách này được em đọc', 'Em bị sách đọc'], 2, 'Đối tượng "cuốn sách" lên CN.'),
    Q('Một bài NLXH cần?', ['Tả nhiều cảnh', 'Nêu rõ vấn đề, lí lẽ và dẫn chứng', 'Có cốt truyện', 'Toàn câu hỏi'], 1, 'Đặc trưng nghị luận.'),
  ]),
];

export const S7NV_SCENARIOS = indexBy(S7NV_WEEKS);
