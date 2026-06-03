// ============================================================
// Lớp 11 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Ngữ văn 11): thơ trung đại, thơ Mới, truyện hiện đại, nghị luận văn học – xã hội nâng cao.
// ID prefix: "H11NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11NV', 'ngu-van', n, title, qs, opts);

export const H11NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Vào phủ chúa Trịnh — Lê Hữu Trác', [
    Q('"Vào phủ chúa Trịnh" trích từ tác phẩm nào?', ['Vũ trung tuỳ bút', 'Lĩnh Nam chích quái', 'Thượng kinh ký sự', 'Hoàng Lê nhất thống chí'], 2, 'Trích Thượng kinh ký sự (1783).'),
    Q('Lê Hữu Trác còn được gọi là?', ['Bạch Vân cư sĩ', 'Tao Đàn nguyên soái', 'Hải Thượng Lãn Ông', 'Ức Trai tiên sinh'], 2, 'Hiệu là Hải Thượng Lãn Ông.'),
    Q('Thể loại của Thượng kinh ký sự?', ['Tuỳ bút', 'Ký sự', 'Truyện ngắn', 'Tiểu thuyết'], 1, 'Ký sự bằng chữ Hán.'),
    Q('Thái độ chính của tác giả trước cảnh xa hoa phủ chúa?', ['Hết lòng ngợi ca', 'Tỏ ra lạnh nhạt', 'Vừa thán phục vừa phê phán', 'Hoàn toàn căm ghét'], 2, 'Vẻ ngoài tráng lệ nhưng thực chất ngột ngạt; tác giả có cái nhìn tỉnh táo.'),
    Q('Hình ảnh thế tử Cán cho thấy điều gì?', ['Sức sống mạnh mẽ', 'Tinh thần ham học', 'Tài nghệ phi thường', 'Sự suy nhược của giai cấp thống trị'], 3, 'Thế tử yếu ớt — biểu tượng suy tàn.'),
    Q('Giá trị nghệ thuật nổi bật?', ['Sử dụng nhiều điển tích', 'Văn biền ngẫu', 'Quan sát tinh tế, ghi chép chân thật', 'Tả cảnh ước lệ'], 2, 'Lối ký sự ghi chép trực tiếp, tinh tế.'),
  ]),

  M(2, 'Tự tình (bài II) — Hồ Xuân Hương', [
    Q('"Tự tình" bài II được viết theo thể thơ?', ['Thất ngôn tứ tuyệt', 'Lục bát', 'Thất ngôn bát cú Đường luật', 'Song thất lục bát'], 2, 'Bát cú Đường luật.'),
    Q('Câu thơ "Đêm khuya văng vẳng trống canh dồn" diễn tả?', ['Sự bình yên', 'Niềm vui', 'Sự cô đơn, thao thức của nhân vật trữ tình', 'Sự huy hoàng'], 2, 'Âm thanh trống canh dồn dập trong đêm vắng → cô đơn.'),
    Q('Câu thơ "Trơ cái hồng nhan với nước non" thể hiện?', ['Nỗi tủi hổ, bẽ bàng về thân phận', 'Niềm tin yêu cuộc sống', 'Sự kiêu hãnh', 'Tâm thế lánh đời'], 0, '"Trơ" + "hồng nhan" → bẽ bàng.'),
    Q('Cụm từ "Xiên ngang mặt đất, đâm toạc chân mây" thể hiện?', ['Sự cam chịu', 'Sức sống dữ dội, phản kháng', 'Sự yếu đuối', 'Sự dịu dàng'], 1, 'Động từ mạnh → cá tính mạnh mẽ.'),
    Q('Hồ Xuân Hương được mệnh danh là?', ['Bà chúa thơ Nôm', 'Tao Đàn nguyên soái', 'Nữ tướng thơ ca', 'Hoàng tử thi ca'], 0, 'Bà chúa thơ Nôm.'),
    Q('Chủ đề bao trùm bài thơ?', ['Bi kịch và khát vọng hạnh phúc của người phụ nữ', 'Tinh thần thoát tục', 'Tình yêu lứa đôi', 'Lòng yêu nước'], 0, 'Bi kịch duyên phận + khát vọng sống.'),
  ]),

  M(3, 'Câu cá mùa thu — Nguyễn Khuyến', [
    Q('"Câu cá mùa thu" còn có tên?', ['Thu ẩm', 'Thu điếu', 'Thu vịnh', 'Thu vũ'], 1, 'Thu điếu — 1 trong 3 bài thu của Nguyễn Khuyến.'),
    Q('Cảnh thu trong bài có đặc điểm?', ['Sôi động, rộn ràng', 'U ám, dữ dội', 'Tươi tắn rực rỡ', 'Thanh sơ, tĩnh lặng, hiu hắt'], 3, 'Mọi sự vật nhẹ nhàng, gợn sóng nhỏ, lá khẽ rơi.'),
    Q('Câu thơ "Ao thu lạnh lẽo nước trong veo" gợi?', ['Vẻ trong vắt, tĩnh lặng của ao thu', 'Sự bão táp', 'Sự ồn ào', 'Sự ấm áp'], 0, 'Hình ảnh ao thu trong veo, lạnh.'),
    Q('Câu cuối "Cá đâu đớp động dưới chân bèo" thể hiện?', ['Tĩnh trong động, người câu mơ màng', 'Sự giận dữ', 'Sự sôi nổi', 'Sự thất vọng'], 0, 'Âm thanh nhỏ làm nổi bật cái tĩnh.'),
    Q('Nguyễn Khuyến được gọi là?', ['Tản Đà', 'Tao Đàn nguyên soái', 'Phan Bội Châu', 'Tam Nguyên Yên Đổ'], 3, 'Đỗ đầu 3 kỳ thi.'),
    Q('Bài thơ thể hiện tâm trạng gì của tác giả?', ['Niềm vui sôi nổi', 'Nỗi u hoài, kín đáo yêu nước', 'Sự lãng quên đời', 'Sự kiêu hãnh'], 1, 'Tâm trạng buồn kín đáo về thời cuộc.'),
  ]),

  M(4, 'Thương vợ — Trần Tế Xương', [
    Q('Bài thơ "Thương vợ" viết về?', ['Người yêu', 'Bà Tú — vợ Trần Tế Xương', 'Hàng xóm', 'Mẹ tác giả'], 1, 'Vợ là bà Phạm Thị Mẫn.'),
    Q('Câu thơ "Quanh năm buôn bán ở mom sông" cho thấy?', ['Sự bệnh tật', 'Sự giàu có', 'Sự nhàn rỗi', 'Sự vất vả tần tảo của bà Tú'], 3, 'Hình ảnh người vợ nuôi cả nhà.'),
    Q('"Nuôi đủ năm con với một chồng" thể hiện?', ['Niềm vui', 'Sự khoe khoang', 'Sự đảm đang đến mức người chồng tự thấy có lỗi', 'Lời than trách'], 2, 'Ông Tú tự gộp mình vào hàng "miệng ăn".'),
    Q('Hình ảnh "thân cò" trong bài gợi liên tưởng đến?', ['Người lính', 'Người nông dân nghèo', 'Người phụ nữ Việt Nam lam lũ', 'Người trí thức'], 2, 'Mô típ cò trong ca dao.'),
    Q('Tú Xương quê ở đâu?', ['Hà Nội', 'Hà Tĩnh', 'Nam Định', 'Thừa Thiên Huế'], 2, 'Quê Nam Định.'),
    Q('Giọng điệu bài thơ?', ['Trìu mến, tự trào', 'Lạnh lùng', 'Tức giận', 'Hồ hởi'], 0, 'Yêu thương vợ + tự trách bản thân.'),
  ]),

  M(5, 'Bài ca ngất ngưởng — Nguyễn Công Trứ', [
    Q('"Bài ca ngất ngưởng" theo thể loại?', ['Lục bát', 'Hát nói', 'Song thất lục bát', 'Đường luật'], 1, 'Thể hát nói.'),
    Q('Từ "ngất ngưởng" gợi?', ['Sự bệnh hoạn', 'Sự buồn bã', 'Sự khiêm tốn', 'Phong cách sống tự do, vượt khuôn phép'], 3, 'Lối sống khác đời, cao ngạo.'),
    Q('Nguyễn Công Trứ tự đánh giá mình thế nào?', ['Yếu đuối', 'Tài năng phi thường, hơn người', 'Bình thường', 'Hèn kém'], 1, 'Ông tự khẳng định tài năng.'),
    Q('Tư tưởng nổi bật của bài?', ['Lòng trung quân', 'Tinh thần ẩn dật', 'Khẳng định cái tôi cá nhân giữa xã hội phong kiến', 'Sự thoát tục'], 2, 'Khẳng định cá tính mạnh mẽ.'),
    Q('Nguyễn Công Trứ làm tới chức gì?', ['Tể tướng', 'Án sát', 'Doanh điền sứ', 'Tổng đốc'], 2, 'Có công khai khẩn ruộng đất.'),
    Q('Câu kết bài bộc lộ?', ['Sự tự tin, không ngại đời đánh giá', 'Sự nuối tiếc', 'Nỗi sợ hãi', 'Sự buồn bã'], 0, '"Trong triều ai ngất ngưởng như ông" — kiêu hãnh.'),
  ]),

  M(6, 'Văn tế nghĩa sĩ Cần Giuộc — Nguyễn Đình Chiểu', [
    Q('"Văn tế nghĩa sĩ Cần Giuộc" viết theo thể?', ['Văn tế', 'Tự truyện', 'Phú Đường luật', 'Truyện thơ'], 0, 'Văn tế truyền thống.'),
    Q('Đối tượng được tế trong bài?', ['Vua chúa', 'Cha mẹ', 'Người nông dân nghĩa sĩ Cần Giuộc hy sinh', 'Sĩ phu'], 2, 'Nông dân đứng lên đánh Pháp.'),
    Q('Bức tượng đài nghệ thuật được tác giả tạc?', ['Người nông dân yêu nước, anh dũng', 'Vua quan', 'Người lính chính quy', 'Người trí thức'], 0, 'Lần đầu tiên người nông dân làm anh hùng văn học.'),
    Q('Giọng văn tế của Nguyễn Đình Chiểu?', ['Bi tráng, xúc động', 'Bình thản', 'Mỉa mai', 'Hài hước'], 0, 'Vừa bi vừa hùng.'),
    Q('Nguyễn Đình Chiểu bị mù từ?', ['Bị bệnh đậu mùa lúc nhỏ', 'Bẩm sinh', 'Sau chiến tranh', 'Sau khi mẹ mất ở Huế'], 3, 'Bị mù do khóc thương mẹ.'),
    Q('Câu "Súng giặc đất rền — lòng dân trời tỏ" thể hiện?', ['Sự khiếp sợ', 'Sự đầu hàng', 'Tinh thần dân tộc bừng lên', 'Sự thờ ơ'], 2, 'Đối lập tiếng súng giặc với lòng dân.'),
  ]),

  M(7, 'Chiếu cầu hiền — Ngô Thì Nhậm', [
    Q('"Chiếu cầu hiền" được viết theo lệnh ai?', ['Vua Quang Trung', 'Vua Gia Long', 'Vua Lê Hiển Tông', 'Chúa Trịnh'], 0, 'Quang Trung sai Ngô Thì Nhậm soạn.'),
    Q('Mục đích của bài chiếu?', ['Trách phạt sĩ phu', 'Thông báo chiến thắng', 'Tế lễ trời đất', 'Kêu gọi sĩ phu Bắc Hà ra giúp nước'], 3, 'Mời người tài cộng tác.'),
    Q('Thể loại "chiếu" thuộc?', ['Văn miêu tả', 'Văn tự sự', 'Văn nghị luận chính trị', 'Văn trữ tình'], 2, 'Văn bản hành chính nghị luận.'),
    Q('Lập luận chính trong chiếu?', ['Đất nước an bình', 'Hiền tài là nguyên khí quốc gia, phải đoàn kết kiến quốc', 'Sĩ phu phải đầu hàng', 'Quân thần phải tách biệt'], 1, 'Đoàn kết hiền tài để dựng nước.'),
    Q('Ngô Thì Nhậm theo phe?', ['Trung lập', 'Nguyễn Ánh', 'Tây Sơn', 'Lê - Trịnh'], 2, 'Phục vụ Quang Trung.'),
    Q('Văn phong bài chiếu?', ['Cộc lốc, đe nẹt', 'Tâm tình thầm kín', 'Trang trọng, mềm dẻo, thuyết phục', 'Trêu đùa'], 2, 'Vừa cứng vừa mềm, có sức thuyết phục.'),
  ]),

  M(8, 'Khái quát văn học Việt Nam đầu XX – 1945', [
    Q('Giai đoạn 1900–1945 chứng kiến văn học?', ['Quay về cổ điển', 'Hiện đại hoá', 'Đứng yên', 'Suy thoái'], 1, 'Hiện đại hoá là đặc trưng.'),
    Q('3 bộ phận chính của văn học giai đoạn này?', ['Văn học cổ, hiện đại', 'Văn học quan lại, dân gian', 'Văn học hợp pháp, văn học cách mạng, văn học công khai – không công khai', 'Văn học miền Bắc, miền Nam'], 1, 'Chia hợp pháp & bất hợp pháp (cách mạng).'),
    Q('Trào lưu Thơ Mới khởi xướng từ năm?', ['1932', '1945', '1925', '1954'], 0, '1932 với Phan Khôi "Tình già".'),
    Q('Nhóm Tự lực văn đoàn do ai sáng lập?', ['Vũ Trọng Phụng', 'Nam Cao', 'Tố Hữu', 'Nhất Linh'], 3, 'Nhất Linh sáng lập.'),
    Q('Nhân tố quan trọng thúc đẩy hiện đại hoá?', ['Cấm chữ Quốc ngữ', 'Chữ Quốc ngữ, báo chí, dịch thuật', 'Đóng cửa văn hoá', 'Khôi phục Hán Nôm'], 1, 'Chữ Quốc ngữ phổ cập + báo chí.'),
    Q('Văn học 1930–1945 chia thành?', ['Dân gian, bác học', 'Tự lực, Tao Đàn', 'Cổ điển, trung đại', 'Lãng mạn, hiện thực, cách mạng'], 3, '3 dòng văn học chính.'),
  ]),

  M(9, 'Hai đứa trẻ — Thạch Lam', [
    Q('"Hai đứa trẻ" thuộc tập truyện?', ['Nắng trong vườn', 'Gió đầu mùa', 'Sợi tóc', 'Ngày mới'], 0, 'In trong Nắng trong vườn (1938).'),
    Q('Bối cảnh truyện?', ['Miền núi xa xôi', 'Phố huyện nghèo về đêm', 'Vùng quê trù phú', 'Thành thị náo nhiệt'], 1, 'Phố huyện nghèo.'),
    Q('Hình ảnh "đoàn tàu" tượng trưng cho?', ['Sự nghèo đói', 'Quá khứ', 'Mơ ước về thế giới khác', 'Sự đe doạ'], 2, 'Khát khao thoát cảnh nghèo.'),
    Q('Liên — nhân vật chính có đặc điểm?', ['Tinh nghịch', 'Lạnh lùng', 'Đa cảm, sâu sắc, có nội tâm', 'Vui tươi hồn nhiên'], 2, 'Cô bé nhạy cảm, đa sầu.'),
    Q('Nghệ thuật nổi bật của Thạch Lam?', ['Cốt truyện ly kỳ', 'Hùng tráng', 'Trào phúng', 'Truyện không có cốt truyện, đậm chất trữ tình'], 3, 'Tinh tế, trữ tình, giàu cảm xúc.'),
    Q('Thạch Lam thuộc nhóm văn học?', ['Tao Đàn', 'Sáng tạo', 'Tự lực văn đoàn', 'Nhân Văn'], 2, 'Thành viên Tự lực văn đoàn.'),
  ]),

  M(10, 'Chữ người tử tù — Nguyễn Tuân', [
    Q('"Chữ người tử tù" trích từ tập?', ['Hà Nội ta đánh Mỹ giỏi', 'Vang bóng một thời', 'Cảnh sắc quê hương', 'Sông Đà'], 1, 'Vang bóng một thời (1940).'),
    Q('Nhân vật trung tâm?', ['Cao Bá Quát', 'Quản ngục thôi', 'Huấn Cao', 'Nguyễn Du'], 2, 'Huấn Cao - người tử tù tài hoa.'),
    Q('Huấn Cao có biệt tài gì?', ['Ngâm thơ', 'Vẽ tranh', 'Múa kiếm', 'Viết chữ Nho đẹp'], 3, 'Tài viết chữ.'),
    Q('Cảnh "cho chữ" trong truyện được xem là?', ['Cảnh tượng xưa nay chưa từng có', 'Bình thường', 'Buồn tẻ', 'Phản cảm'], 0, 'Cảnh tượng lạ trong nhà ngục.'),
    Q('Tư tưởng nổi bật của truyện?', ['Cái Đẹp và Thiên lương chiến thắng cái xấu', 'Cái xấu chiến thắng', 'Lòng yêu nước', 'Tình yêu lứa đôi'], 0, 'Chủ nghĩa duy mỹ + thiện.'),
    Q('Nguyễn Tuân là nhà văn?', ['Tài hoa uyên bác', 'Bình dân', 'Hiện thực phê phán', 'Hiện thực xã hội chủ nghĩa'], 0, 'Văn phong tài hoa.'),
  ]),

  M(11, 'Chí Phèo — Nam Cao', [
    Q('Nhân vật Chí Phèo bị tha hoá bởi?', ['Cha mẹ', 'Tự bản thân', 'Nhà tù thực dân + xã hội tàn nhẫn', 'Vợ con'], 2, 'Sản phẩm của xã hội thuộc địa.'),
    Q('Bá Kiến đại diện cho?', ['Cường hào địa chủ ác bá', 'Người nông dân', 'Quan triều đình', 'Tầng lớp tri thức'], 0, 'Quyền lực ở nông thôn.'),
    Q('Bát cháo hành của Thị Nở mang ý nghĩa?', ['Sự khinh bỉ', 'Bệnh tật', 'Sự nghèo đói', 'Tình người, hồi sinh nhân tính'], 3, 'Khoảnh khắc Chí được làm người.'),
    Q('Cái chết của Chí Phèo có ý nghĩa?', ['Sự giải thoát yên ổn', 'Sự kết thúc bình thường', 'Tố cáo xã hội đẩy người vào bước đường cùng', 'Trò đùa'], 2, 'Bi kịch không lối thoát.'),
    Q('Nam Cao thuộc dòng văn học?', ['Hiện thực phê phán', 'Trào phúng', 'Cách mạng', 'Lãng mạn'], 0, 'Hiện thực phê phán xuất sắc.'),
    Q('Tên tác phẩm ban đầu của truyện?', ['Cái lò gạch cũ', 'Đời thừa', 'Sống mòn', 'Đôi mắt'], 0, 'Sau đổi thành Chí Phèo.'),
  ]),

  M(12, 'Hạnh phúc của một tang gia — Vũ Trọng Phụng', [
    Q('"Hạnh phúc của một tang gia" trích từ?', ['Số đỏ', 'Cạm bẫy người', 'Giông tố', 'Làm đĩ'], 0, 'Tiểu thuyết Số đỏ.'),
    Q('Tên đoạn trích đã chứa nghệ thuật?', ['Hùng tráng', 'Đối nghịch hài hước', 'Bình thường', 'Trữ tình'], 1, '"Hạnh phúc" + "tang gia" mâu thuẫn → trào phúng.'),
    Q('Xuân Tóc Đỏ là biểu tượng cho?', ['Người nghèo khổ', 'Đại trí phú', 'Người trí thức', 'Sự lố lăng của xã hội tư sản thành thị'], 3, 'Lưu manh trở thành "nhà cải cách xã hội".'),
    Q('Nghệ thuật đặc sắc của Vũ Trọng Phụng?', ['Trữ tình', 'Bi tráng', 'Trào phúng sắc bén', 'Hùng ca'], 2, 'Đỉnh cao trào phúng.'),
    Q('Vũ Trọng Phụng được mệnh danh?', ['Bà chúa thơ Nôm', 'Tao Đàn nguyên soái', 'Vua phóng sự Bắc Kỳ', 'Hải Thượng Lãn Ông'], 2, 'Vua phóng sự đất Bắc.'),
    Q('Mục đích trào phúng của tác giả?', ['Trung lập', 'Cảm thông giai cấp tư sản', 'Phơi bày sự lố bịch xã hội tư sản', 'Ca ngợi xã hội'], 2, 'Đả kích xã hội thực dân lai căng.'),
  ]),

  M(13, 'Vội vàng — Xuân Diệu', [
    Q('"Vội vàng" thuộc tập?', ['Thơ thơ', 'Riêng chung', 'Một khối hồng', 'Gửi hương cho gió'], 0, 'Thơ thơ (1938).'),
    Q('Câu mở đầu thể hiện cái tôi?', ['Cường tráng, muốn tận hưởng cuộc đời', 'Lạnh lùng', 'Bình thản', 'Trầm tư, hoài niệm quá khứ'], 0, '"Tôi muốn tắt nắng đi…"'),
    Q('Quan niệm thẩm mỹ mới của Xuân Diệu?', ['Lấy vua chúa', 'Lấy con người làm chuẩn mực cái đẹp', 'Lấy thiên nhiên cổ điển', 'Lấy thần thánh'], 1, 'Lấy thanh xuân, ái tình làm chuẩn.'),
    Q('"Tháng giêng ngon như một cặp môi gần" là?', ['Hoán dụ', 'Ẩn dụ chuyển đổi cảm giác', 'So sánh đơn', 'Nhân hoá'], 1, 'Chuyển đổi cảm giác đặc trưng Xuân Diệu.'),
    Q('Xuân Diệu được gọi là?', ['Ông hoàng thơ tình', 'Vua thơ Mới', 'Nhà thơ lớn của hiện thực', 'Thi sĩ trần gian'], 0, 'Ông hoàng thơ tình.'),
    Q('Tâm trạng cuối bài?', ['Tĩnh tâm', 'Chán nản', 'Khát khao sống đến cuồng nhiệt', 'Buông xuôi'], 2, 'Hối hả tận hưởng.'),
  ]),

  M(14, 'Đây thôn Vĩ Dạ — Hàn Mặc Tử', [
    Q('"Đây thôn Vĩ Dạ" lấy cảm hứng từ?', ['Truyền thuyết', 'Chuyến đi thực tế', 'Cuộc gặp gỡ Đà Lạt', 'Bức ảnh và lời mời của Hoàng Cúc'], 3, 'Bức bưu ảnh phong cảnh Vĩ Dạ.'),
    Q('"Sao anh không về chơi thôn Vĩ?" là?', ['Lời kể chuyện', 'Lời than', 'Lời tự vấn hoặc lời mời gọi', 'Lời mệnh lệnh'], 2, 'Câu hỏi tu từ đa nghĩa.'),
    Q('Hình ảnh "Vườn ai mướt quá xanh như ngọc" thuộc?', ['Khổ 1', 'Khổ 3 — hình ảnh người con gái xa xôi', 'Lời đề từ của bài thơ', 'Khổ 2 — cảnh sông trăng đêm'], 0, 'Khổ 1 - cảnh thôn Vĩ tươi sáng.'),
    Q('Tâm trạng chủ đạo của Hàn Mặc Tử trong bài?', ['Tự hào', 'Vừa khát khao vừa hoài nghi, đau đáu', 'Buồn bã', 'Tươi vui hoàn toàn'], 1, 'Tâm trạng phức hợp.'),
    Q('"Mơ khách đường xa khách đường xa…" gợi?', ['Sự nhộn nhịp', 'Sự gần gũi', 'Sự rõ ràng', 'Sự xa xôi, mờ ảo'], 3, 'Nhịp điệu tạo cảm giác xa cách.'),
    Q('Hàn Mặc Tử mắc bệnh gì?', ['Tim mạch', 'Phong (cùi)', 'Sốt rét', 'Lao phổi'], 1, 'Bệnh phong khiến cuộc đời ông đau khổ.'),
  ]),

  M(15, 'Tràng giang — Huy Cận', [
    Q('"Tràng giang" thuộc tập?', ['Lửa thiêng', 'Vũ trụ ca', 'Đất nở hoa', 'Ngày hằng sống'], 0, 'Lửa thiêng (1940).'),
    Q('Cảm hứng chủ đạo của bài thơ?', ['Niềm vui sống', 'Sự căm phẫn', 'Tình yêu lứa đôi', 'Nỗi buồn vũ trụ và lòng yêu nước thầm kín'], 3, 'Cô đơn vũ trụ kết hợp tình quê.'),
    Q('Câu thơ "Sóng gợn tràng giang buồn điệp điệp" gợi?', ['Sự ngạc nhiên', 'Niềm vui', 'Sự rộn rã', 'Nỗi buồn miên man, mênh mông'], 3, 'Buồn lan toả như sóng.'),
    Q('Câu "Không khói hoàng hôn cũng nhớ nhà" gợi nhớ?', ['Thơ Thôi Hiệu "Hoàng Hạc Lâu"', 'Thơ Lý Bạch', 'Cung oán ngâm', 'Truyện Kiều'], 0, 'Hoán đổi câu Thôi Hiệu.'),
    Q('Bài thơ kết hợp yếu tố?', ['Chỉ cổ điển', 'Cổ điển và hiện đại', 'Chỉ hiện đại', 'Dân gian thuần tuý'], 1, 'Vẻ đẹp cổ điển + cảm xúc Thơ Mới.'),
    Q('Huy Cận về sau gia nhập?', ['Tao Đàn', 'Tự lực văn đoàn', 'Hội Nhà văn Việt Nam, làm chính khách', 'Phong trào ẩn dật'], 2, 'Hoạt động văn hoá - chính trị sau 1945.'),
  ]),

  M(16, 'Chiều tối — Hồ Chí Minh', [
    Q('"Chiều tối" (Mộ) nằm trong tập?', ['Bản án chế độ thực dân', 'Đường Kách mệnh', 'Truyện ngắn', 'Nhật ký trong tù'], 3, 'Nhật ký trong tù.'),
    Q('Thể thơ?', ['Thơ tự do hiện đại', 'Song thất lục bát', 'Lục bát', 'Thất ngôn tứ tuyệt'], 3, 'Tứ tuyệt chữ Hán.'),
    Q('Hai câu đầu tả?', ['Cảnh đô thị', 'Cảnh chiều núi rừng', 'Cảnh đêm khuya', 'Cảnh biển'], 1, 'Chim mỏi về rừng, chòm mây lẻ.'),
    Q('Hình ảnh "cô em xóm núi xay ngô tối" thể hiện?', ['Sự lao động khoẻ khoắn', 'Sự buồn tẻ', 'Sự uể oải', 'Sự xa hoa'], 0, 'Hơi ấm cuộc sống lao động.'),
    Q('Chữ "hồng" cuối bài có giá trị?', ['Câu kết nhạt', 'Tả màu sắc đơn thuần', 'Câu chuyển ý', 'Nhãn tự, làm sáng bừng cả bài thơ'], 3, '"Nhãn tự" theo Hoàng Trung Thông.'),
    Q('Tinh thần Bác trong bài?', ['Mơ hồ, mộng tưởng xa xôi', 'Lạnh lùng', 'Lạc quan, hướng về sự sống', 'Bi quan'], 2, 'Niềm tin yêu cuộc sống.'),
  ]),

  M(17, 'Ôn tập kiểm tra giữa kỳ I', [
    Q('Tự tình II của Hồ Xuân Hương thuộc thể thơ?', ['Lục bát', 'Tứ tuyệt', 'Thơ tự do hiện đại', 'Thất ngôn bát cú'], 3, 'Bát cú Đường luật.'),
    Q('Nguyễn Đình Chiểu sáng tác Văn tế nghĩa sĩ Cần Giuộc bằng?', ['Chữ Hán', 'Chữ Nôm', 'Quốc ngữ', 'Pháp ngữ'], 1, 'Chữ Nôm.'),
    Q('"Vào phủ chúa Trịnh" được viết sau khi tác giả?', ['Đi sứ sang nhà Thanh', 'Được mời lên kinh chữa bệnh thế tử', 'Đi đánh trận', 'Thi đỗ'], 1, 'Lê Hữu Trác được mời chữa bệnh.'),
    Q('Quan niệm sống mới của Xuân Diệu?', ['Sống vội, sống mãnh liệt', 'Sống vì danh lợi', 'Sống ẩn dật', 'Sống cam chịu'], 0, 'Sống là cảm nhận và tận hưởng.'),
    Q('"Chí Phèo" là tên truyện hay tên nhân vật?', ['Cả hai', 'Chỉ tên nhân vật', 'Không liên quan', 'Chỉ tên truyện'], 0, 'Tên nhân vật chính + tên truyện sau.'),
    Q('Cảnh cho chữ ở "Chữ người tử tù" diễn ra ở đâu?', ['Ngoài chợ', 'Trong phủ vua', 'Trong nhà ngục', 'Ở chiến trường'], 2, 'Nhà ngục — không gian phi nghệ thuật.'),
  ]),

  M(18, 'Kiểm tra học kỳ I', [
    Q('Hồ Xuân Hương sống vào thế kỷ?', ['Đầu thế kỷ XX', 'Thế kỷ XVII', 'XVIII–XIX', 'Thế kỷ XV — thời Lê sơ'], 2, 'Cuối XVIII – đầu XIX.'),
    Q('Tác phẩm nào KHÔNG thuộc Nam Cao?', ['Lão Hạc', 'Số đỏ', 'Đời thừa', 'Chí Phèo'], 1, 'Số đỏ của Vũ Trọng Phụng.'),
    Q('Trào lưu Thơ Mới phát triển mạnh giai đoạn?', ['1954–1975', '1932–1945', '1900–1930', '1945–1954'], 1, 'Giai đoạn nở rộ.'),
    Q('Nguyễn Tuân sau Cách mạng Tháng Tám viết về?', ['Vang bóng một thời', 'Thơ Mới', 'Tự lực văn đoàn', 'Sông Đà, Người lái đò sông Đà'], 3, 'Sông Đà là tập tuỳ bút sau 1945.'),
    Q('Phong cách "tài hoa uyên bác" thuộc?', ['Thạch Lam', 'Vũ Trọng Phụng', 'Nguyễn Tuân', 'Nam Cao'], 2, 'Đặc trưng Nguyễn Tuân.'),
    Q('Hai đứa trẻ kết bằng?', ['Cảnh chợ tan', 'Cảnh bình minh', 'Cuộc đối thoại', 'Đoàn tàu vụt qua phố huyện'], 3, 'Đoàn tàu đêm khuya.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Từ ấy — Tố Hữu', [
    Q('"Từ ấy" được viết khi tác giả?', ['Bị thực dân Pháp bắt giam ở Huế', 'Đi học', 'Đi kháng chiến', 'Được kết nạp Đảng (1938)'], 3, '1938 — bước ngoặt cuộc đời.'),
    Q('"Từ ấy trong tôi bừng nắng hạ" sử dụng?', ['Nhân hoá', 'So sánh', 'Hoán dụ', 'Ẩn dụ ánh sáng'], 3, 'Ẩn dụ ánh sáng lý tưởng cách mạng.'),
    Q('Tâm trạng nổi bật?', ['Băn khoăn', 'Sợ hãi', 'Buồn rầu', 'Vui sướng khi gặp lý tưởng'], 3, 'Niềm hân hoan giác ngộ.'),
    Q('Tố Hữu thường được gọi?', ['Hoàng tử thi ca', 'Vua thơ Mới', 'Bà chúa thơ Nôm', 'Lá cờ đầu của thơ ca cách mạng'], 3, 'Lá cờ đầu thơ ca cách mạng.'),
    Q('Tập thơ đầu tay của Tố Hữu?', ['Ra trận', 'Gió lộng', 'Việt Bắc', 'Từ ấy'], 3, 'Cùng tên bài thơ.'),
    Q('Khổ 2 thể hiện?', ['Sự cô đơn', 'Niềm hối tiếc', 'Sự thoát ly', 'Lẽ sống mới: gắn bó với quần chúng'], 3, 'Hoà tôi vào trăm người.'),
  ]),

  M(20, 'Tôi yêu em — Pushkin', [
    Q('"Tôi yêu em" của tác giả nào?', ['M. Gorky', 'L. Tolstoi', 'A.S. Pushkin', 'F. Dostoyevski'], 2, 'Pushkin - Mặt trời thi ca Nga.'),
    Q('Bài thơ thể hiện tình cảm?', ['Yêu chân thành nhưng tôn trọng', 'Lãnh đạm', 'Yêu cuồng nhiệt', 'Hận thù'], 0, 'Yêu cao thượng, vô vị lợi.'),
    Q('Cụm "Tôi yêu em" lặp lại có giá trị?', ['Trang trí', 'Hài hước', 'Khẳng định tình yêu da diết', 'Đệm vần'], 2, 'Điệp khúc khẳng định.'),
    Q('Câu kết bài cầu chúc?', ['Trả thù', 'Người mình yêu được người khác yêu', 'Quên lãng', 'Đau khổ'], 1, '"Cầu em được người tình như tôi đã yêu em".'),
    Q('Bản dịch nổi tiếng tiếng Việt thuộc?', ['Thuý Toàn', 'Tản Đà', 'Xuân Diệu', 'Cao Bá Quát'], 0, 'Bản Thuý Toàn được dùng phổ biến.'),
    Q('Pushkin là người?', ['Nga', 'Pháp (cùng thời Victor Hugo)', 'Mỹ (cùng thời Edgar Allan Poe)', 'Đức (cùng thời Goethe)'], 0, 'Đại thi hào Nga.'),
  ]),

  M(21, 'Bài thơ về tiểu đội xe không kính — Phạm Tiến Duật', [
    Q('Bài thơ ca ngợi?', ['Người lính lái xe Trường Sơn', 'Người công nhân', 'Người nông dân', 'Người giáo viên'], 0, 'Tiểu đội xe không kính.'),
    Q('Giọng điệu bài thơ?', ['Buồn thảm', 'Trẻ trung, ngang tàng, lạc quan', 'Trang nghiêm', 'Mỉa mai'], 1, 'Phong cách "lính tráng".'),
    Q('Hình ảnh "xe không kính" cho thấy?', ['Khốc liệt chiến trường', 'Sự lãng mạn', 'Sự kém kỹ thuật', 'Sự nghèo nàn'], 0, 'Bom đạn làm xe biến dạng.'),
    Q('Phạm Tiến Duật thuộc thế hệ?', ['Sau 1975', 'Thơ Mới', 'Nhà thơ chống Mỹ', 'Trung đại'], 2, 'Thơ chống Mỹ.'),
    Q('Cảm hứng chủ đạo?', ['Lãng mạn cách mạng + hiện thực', 'Bi tráng cổ điển', 'Buồn thảm', 'Hài hước trào phúng'], 0, 'Lãng mạn hiện thực.'),
    Q('Cấu trúc lặp "Không có ... ừ thì ..." tạo?', ['Sự sợ hãi', 'Tinh thần coi thường gian khổ', 'Sự buồn chán', 'Sự nuối tiếc'], 1, 'Sự chấp nhận hài hước.'),
  ]),

  M(22, 'Đám tang lão Goriot — Balzac', [
    Q('Lão Goriot là nhân vật của?', ['H. de Balzac', 'V. Hugo', 'G. Flaubert', 'E. Zola'], 0, 'Tiểu thuyết của Balzac.'),
    Q('Tấn trò đời (Bộ tổng hợp của Balzac) gồm bao nhiêu cuốn?', ['10', 'Khoảng 90', '50', '200'], 1, 'Hơn 90 tác phẩm.'),
    Q('Đám tang lão Goriot phơi bày?', ['Niềm vui sống', 'Sự lạnh lùng vô tình của xã hội tư sản Paris', 'Sự đoàn kết gia đình', 'Tinh thần nhân ái'], 1, 'Con cái ruồng bỏ cha → bi kịch.'),
    Q('Nhân vật Eugène de Rastignac đại diện?', ['Thanh niên đầy tham vọng tiến thân', 'Trẻ nhỏ ngây thơ', 'Người trung niên thất bại', 'Người nghèo cam chịu'], 0, 'Mẫu thanh niên hậu Cách mạng Pháp.'),
    Q('Balzac thuộc dòng văn học?', ['Hiện thực', 'Cổ điển', 'Siêu thực', 'Lãng mạn'], 0, 'Hiện thực Pháp thế kỷ XIX.'),
    Q('Câu nói nổi tiếng cuối tác phẩm của Rastignac (đại ý)?', ['"Tôi đầu hàng"', '"Tôi về quê"', '"Tôi đi tu"', '"Bây giờ giữa ta và mi, Paris!"'], 3, 'Lời thách thức Paris.'),
  ]),

  M(23, 'Người trong bao — Chekhov', [
    Q('"Người trong bao" do ai sáng tác?', ['Dostoyevski', 'L. Tolstoi', 'M. Gorky', 'A. Chekhov'], 3, 'Chekhov.'),
    Q('Nhân vật Belikov là?', ['Nông dân', 'Quân nhân', 'Bác sĩ', 'Giáo viên Hy Lạp cổ điển'], 3, 'Thầy giáo sống khép kín.'),
    Q('"Cái bao" tượng trưng cho?', ['Sự ấm áp', 'Sự tự do', 'Lối sống hèn nhát, khuôn phép', 'Sự bảo vệ'], 2, 'Sự bó hẹp tinh thần.'),
    Q('Thông điệp truyện?', ['Ca ngợi sự cẩn thận', 'Khen ngợi quy củ', 'Châm biếm tình yêu', 'Phê phán lối sống hèn nhát, sợ hãi'], 3, 'Phê phán xã hội Nga ngột ngạt.'),
    Q('Phong cách Chekhov?', ['Truyện ngắn cô đọng, hàm súc', 'Hùng tráng anh hùng ca', 'Tiểu thuyết đồ sộ', 'Trữ tình lãng mạn'], 0, 'Bậc thầy truyện ngắn.'),
    Q('Câu nói "Không thể sống mãi thế này được nữa" của ai?', ['Cô Varenka', 'Buôckin (kể chuyện)', 'Bác sĩ', 'Belikov'], 1, 'Lời kết mở của người kể chuyện.'),
  ]),

  M(24, 'Nghị luận về một vấn đề xã hội', [
    Q('Cấu trúc bài nghị luận xã hội thường gồm?', ['Đặt vấn đề – chứng cứ', 'Tự sự – miêu tả', 'Mở – kết', 'Giải thích – bàn luận – bài học'], 3, 'Quy trình chuẩn.'),
    Q('Luận điểm là?', ['Câu kể', 'Câu hỏi', 'Ý kiến chính cần chứng minh', 'Câu cảm thán'], 2, 'Khẳng định cần bảo vệ.'),
    Q('Dẫn chứng tốt cần?', ['Cảm tính', 'Tiêu biểu, đa dạng, xác thực', 'Lặp lại', 'Nhiều và dài'], 1, '3 tiêu chí.'),
    Q('Phép lập luận chính trong nghị luận xã hội?', ['Miêu tả nội tâm', 'Giải thích, chứng minh, bình luận', 'Tự sự, kể chuyện', 'Tả cảnh'], 1, 'Bộ ba thường gặp.'),
    Q('Vấn đề xã hội thường được nghị luận?', ['Tư tưởng, đạo lý, hiện tượng đời sống', 'Cổ tích', 'Truyền thuyết', 'Ngụ ngôn'], 0, '2 nhánh chính.'),
    Q('Mở bài nghị luận xã hội nên?', ['Tả cảnh chi tiết', 'Dẫn vấn đề rồi nêu luận đề', 'Kể chuyện cá nhân dài', 'Đưa kết luận ngay'], 1, 'Ngắn gọn, dẫn vào luận đề.'),
  ]),

  M(25, 'Nghị luận về một tác phẩm/đoạn trích', [
    Q('Khi phân tích thơ cần chú ý?', ['Chỉ tiểu sử tác giả', 'Chỉ nội dung', 'Chỉ nghệ thuật', 'Nội dung + nghệ thuật + cảm xúc'], 3, 'Phân tích toàn diện.'),
    Q('Phép so sánh giữa hai tác phẩm cần?', ['Chỉ điểm chung', 'Liệt kê', 'Chỉ điểm riêng', 'Điểm chung và điểm riêng'], 3, 'Đối sánh đầy đủ.'),
    Q('Khi bàn về nhân vật cần?', ['Chỉ trang phục', 'Chỉ ngoại hình', 'Chỉ tên gọi', 'Hoàn cảnh – tính cách – số phận – ý nghĩa'], 3, 'Phân tích nhân vật chuẩn.'),
    Q('Trích dẫn trong bài cần?', ['Chính xác, có nguồn', 'Tự sáng tác', 'Bỏ trống', 'Sửa chữa cho hay'], 0, 'Đúng nguyên văn.'),
    Q('Văn nghị luận văn học khác văn xã hội ở?', ['Hình thức', 'Mở bài', 'Đối tượng - tác phẩm văn chương', 'Kết bài'], 2, 'Đối tượng nghị luận.'),
    Q('Cảm thụ thơ cần?', ['Hiểu hình ảnh + nhạc điệu + tâm trạng', 'Chỉ đếm câu', 'Chỉ học thuộc lòng', 'Chỉ ghi nhớ tên tác giả'], 0, 'Cảm nhận toàn diện.'),
  ]),

  M(26, 'Nhật ký Đặng Thuỳ Trâm — Đoạn trích', [
    Q('Đặng Thuỳ Trâm là?', ['Nhà báo', 'Bác sĩ liệt sĩ thời chống Mỹ', 'Cô giáo', 'Nhà thơ'], 1, 'Bác sĩ chiến trường.'),
    Q('Nhật ký nổi tiếng vì?', ['Cốt truyện hấp dẫn', 'Tình tiết ly kỳ', 'Văn phong cầu kỳ', 'Sự chân thực, lý tưởng cao đẹp'], 3, 'Cảm xúc thật của một con người trong chiến tranh.'),
    Q('Nhật ký được tìm thấy bởi?', ['Một nhà báo', 'Người Việt Nam', 'Lính Mỹ Frederic Whitehurst', 'Gia đình tác giả'], 2, 'Quân nhân Mỹ giữ lại 35 năm.'),
    Q('Giá trị của nhật ký?', ['Tiểu thuyết hư cấu', 'Tài liệu khoa học', 'Tư liệu lịch sử + giá trị nhân văn', 'Chỉ là sách giải trí'], 2, 'Nhật ký chân thực.'),
    Q('Tinh thần xuyên suốt?', ['Sự mệt mỏi', 'Lý tưởng cách mạng, lòng yêu nước', 'Sự thoái chí', 'Sự thờ ơ'], 1, 'Người con gái đầy lý tưởng.'),
    Q('Năm xuất bản nhật ký?', ['2005', '1968', '2010', '1985'], 0, 'NXB Hội Nhà văn 2005.'),
  ]),

  M(27, 'Ai đã đặt tên cho dòng sông — Hoàng Phủ Ngọc Tường', [
    Q('Bài viết về?', ['Sông Mê Kông', 'Sông Hương', 'Sông Hồng', 'Sông Đà'], 1, 'Sông Hương xứ Huế.'),
    Q('Thể loại?', ['Hồi ký', 'Bút ký', 'Truyện ngắn', 'Tiểu thuyết'], 1, 'Bút ký giàu chất thơ.'),
    Q('Hoàng Phủ Ngọc Tường miêu tả sông Hương?', ['Lạnh lùng', 'Chỉ hùng vĩ', 'Vừa hùng vĩ vừa dịu dàng, đầy nữ tính', 'Chỉ êm đềm'], 2, 'Dòng sông đa diện.'),
    Q('Sông Hương được ví như?', ['Cô gái Di-gan; người tình thuỷ chung của Huế', 'Bà mẹ già', 'Trẻ thơ', 'Người chiến sĩ'], 0, 'Nhân hoá tinh tế.'),
    Q('Tác phẩm in trong tập?', ['Ai đã đặt tên cho dòng sông?', 'Sông Đà', 'Cảnh sắc quê hương', 'Quê mẹ'], 0, 'Tập bút ký cùng tên.'),
    Q('Văn phong tác giả?', ['Khô khan', 'Tài hoa, uyên bác, đậm chất Huế', 'Bình dị', 'Mộc mạc'], 1, 'Đậm chất nhân văn Huế.'),
  ]),

  M(28, 'Ngôn ngữ và phong cách văn chương', [
    Q('Phong cách ngôn ngữ nghệ thuật có đặc trưng?', ['Tính cô đọng khoa học', 'Tính trung lập', 'Tính trang trọng', 'Tính hình tượng, biểu cảm, cá thể'], 3, '3 đặc trưng.'),
    Q('Hình tượng văn học là?', ['Câu thoại', 'Đối tượng được nhà văn xây dựng để truyền tải tư tưởng', 'Trạng từ', 'Sự kiện'], 1, 'Cốt lõi văn học.'),
    Q('Tính cá thể trong phong cách nghĩa là?', ['Khô khan', 'Trung tính', 'Dấu ấn riêng của tác giả', 'Phổ thông'], 2, 'Mỗi nhà văn có phong cách riêng.'),
    Q('Biện pháp tu từ thường dùng trong văn nghệ thuật?', ['Định nghĩa', 'Thống kê', 'Liệt kê thuần', 'So sánh, ẩn dụ, nhân hoá, hoán dụ'], 3, 'Các phép tu từ cảm xúc.'),
    Q('Nhịp điệu thơ tạo bởi?', ['Số chữ', 'Cách ngắt nhịp + thanh điệu', 'Tiêu đề', 'Tên tác giả'], 1, 'Nhịp + thanh.'),
    Q('Lớp nghĩa trong văn học thường là?', ['Chỉ có một lớp nghĩa duy nhất', 'Chỉ hàm ngôn', 'Nghĩa hiển ngôn + hàm ngôn', 'Chỉ hiển ngôn'], 2, 'Hai lớp song hành.'),
  ]),

  M(29, 'Phong cách ngôn ngữ báo chí', [
    Q('Phong cách báo chí có đặc trưng?', ['Tính biểu cảm cá nhân', 'Tính cổ điển', 'Tính thời sự, ngắn gọn, hấp dẫn', 'Tính trữ tình'], 2, '3 đặc trưng cơ bản.'),
    Q('Các thể loại báo chí phổ biến?', ['Thơ, truyện, kịch', 'Hồi ký, tự truyện', 'Tuỳ bút, bút ký', 'Tin, phóng sự, bình luận, phỏng vấn'], 3, 'Thể loại báo chí.'),
    Q('Tiêu đề báo chí cần?', ['Hài hước', 'Ngắn gọn, hấp dẫn, đúng nội dung', 'Dài và đầy đủ', 'Bí ẩn, gây tò mò tối đa'], 1, '3 tiêu chí.'),
    Q('Ngôn ngữ báo chí khác văn nghệ thuật ở?', ['Tính cảm xúc cao', 'Tính cá thể', 'Tính khách quan, thông tin', 'Tính hình tượng'], 2, 'Trọng thông tin chính xác.'),
    Q('Phong cách báo chí có thể kết hợp với?', ['Hình ảnh, video, đa phương tiện', 'Chỉ tranh vẽ', 'Chỉ giọng nói', 'Chỉ chữ viết'], 0, 'Đặc biệt báo hiện đại.'),
    Q('Yêu cầu đạo đức báo chí?', ['Tô vẽ, thêm thắt cho hấp dẫn', 'Suy đoán', 'Gây giật gân', 'Trung thực, khách quan'], 3, 'Trung thực là cơ bản.'),
  ]),

  M(30, 'Ôn tập truyện hiện đại', [
    Q('Truyện "Hai đứa trẻ" thuộc thể loại?', ['Tiểu thuyết', 'Phóng sự', 'Kịch nói hiện đại', 'Truyện ngắn trữ tình'], 3, 'Truyện ngắn không cốt truyện.'),
    Q('Chí Phèo chết do?', ['Bị bắt', 'Bị bệnh', 'Đi mất tích', 'Tự đâm Bá Kiến rồi tự sát'], 3, 'Bi kịch không lối thoát.'),
    Q('Vũ Trọng Phụng là cây bút?', ['Lãng mạn', 'Hiện thực phê phán, trào phúng', 'Cách mạng', 'Trung đại'], 1, 'Bậc thầy trào phúng.'),
    Q('Tác phẩm "Số đỏ" được sáng tác năm?', ['1945', '1936', '1955', '1925'], 1, '1936.'),
    Q('Thạch Lam tên thật là?', ['Nguyễn Tường Vinh (Lân)', 'Nguyên Hồng', 'Tô Hoài', 'Nguyên Ngọc'], 0, 'Em ruột Nhất Linh, Hoàng Đạo.'),
    Q('Nam Cao trước cách mạng nổi bật với?', ['Sông Đà', 'Chí Phèo, Lão Hạc, Đời thừa', 'Số đỏ, Giông tố', 'Tự lực văn đoàn'], 1, 'Bộ ba truyện ngắn nổi tiếng.'),
  ]),

  M(31, 'Ôn tập Thơ Mới', [
    Q('Thơ Mới thay đổi điều gì so với thơ cũ?', ['Không khác', 'Khôi phục Hán Nôm', 'Trở về Đường luật', 'Hình thức tự do, cái tôi cá nhân nổi bật'], 3, 'Cách tân hình thức + tư tưởng.'),
    Q('Bài thơ "Vội vàng" có quan niệm?', ['Sống ẩn dật', 'Sống vội, sống thật', 'Sống thờ ơ', 'Sống vì người khác'], 1, 'Quan niệm sống cá nhân hiện đại.'),
    Q('Tâm trạng Hàn Mặc Tử trong "Đây thôn Vĩ Dạ"?', ['Hạnh phúc', 'Tự hào', 'Bình thản', 'Khao khát đời + nỗi đau bệnh tật'], 3, 'Phức cảm độc đáo.'),
    Q('Tràng giang gắn cảm hứng?', ['Tu hành', 'Lứa đôi', 'Vũ trụ và quê hương', 'Cách mạng'], 2, 'Buồn vũ trụ + nhớ quê.'),
    Q('Câu kết "Tràng giang" nhắc tới?', ['Đêm trăng', 'Cánh buồm', 'Đoàn tàu', 'Khói hoàng hôn (Thôi Hiệu)'], 3, '"Không khói hoàng hôn cũng nhớ nhà".'),
    Q('Nhà thơ tiêu biểu nhất của Thơ Mới?', ['Tố Hữu', 'Xuân Diệu', 'Hồ Chí Minh', 'Tản Đà'], 1, 'Ông hoàng thơ tình.'),
  ]),

  M(32, 'Ôn tập kịch và văn nghị luận', [
    Q('Vĩnh biệt Cửu Trùng Đài trích từ?', ['Vũ Như Tô (Nguyễn Huy Tưởng)', 'Hồn Trương Ba da hàng thịt', 'Sống mãi với Thủ đô', 'Bắc Sơn (Nguyễn Huy Tưởng)'], 0, 'Vở kịch Vũ Như Tô.'),
    Q('Vũ Như Tô là?', ['Nông dân', 'Tướng quân', 'Kiến trúc sư', 'Nhà thơ'], 2, 'Kiến trúc sư tài hoa.'),
    Q('Bi kịch của Vũ Như Tô?', ['Đói nghèo', 'Tài năng xa rời nhân dân, bị giết', 'Bệnh tật', 'Tù đày'], 1, 'Bi kịch nghệ sĩ xa dân.'),
    Q('Hịch tướng sĩ của Trần Quốc Tuấn là?', ['Truyện ngắn', 'Thơ Đường', 'Văn nghị luận trung đại', 'Tuỳ bút'], 2, 'Văn nghị luận chính trị.'),
    Q('Mục đích của hịch?', ['Khích lệ tinh thần chiến đấu', 'Ghi chép sử ký triều đại', 'Tang ma', 'Cầu mưa'], 0, 'Khơi dậy lòng yêu nước.'),
    Q('Văn nghị luận hiện đại khác trung đại ở?', ['Cảm xúc nhiều hơn', 'Vần điệu nhiều hơn', 'Hình tượng nhiều hơn', 'Lập luận khoa học, ngôn ngữ hiện đại'], 3, 'Trọng lý lẽ logic.'),
  ]),

  M(33, 'Văn học nước ngoài - Tổng kết', [
    Q('Tôi yêu em của Pushkin nói về?', ['Lòng căm thù', 'Tình yêu cao thượng', 'Tinh thần ái quốc', 'Tình đồng đội'], 1, 'Tình yêu vô vị lợi.'),
    Q('Người trong bao của Chekhov phê phán?', ['Lối sống tù túng, hèn nhát', 'Lao động', 'Tình yêu', 'Sự tự do'], 0, 'Lối sống bao bọc.'),
    Q('Balzac người nước nào?', ['Pháp', 'Anh (cùng thời Dickens)', 'Nga (cùng thời Pushkin)', 'Đức (cùng thời Goethe)'], 0, 'Nhà văn Pháp.'),
    Q('Tác phẩm Tấn trò đời của Balzac dài hơi vì?', ['Phục vụ giải trí', 'Phản ánh xã hội Pháp đầu thế kỷ XIX', 'Vì ngẫu hứng', 'Để dài'], 1, 'Bức tranh xã hội Pháp.'),
    Q('Pushkin được tôn vinh là?', ['Bậc kỳ tài', 'Bà chúa thơ', 'Mặt trời thi ca Nga', 'Hoàng tử thơ'], 2, 'Mặt trời thi ca Nga.'),
    Q('Chekhov là bậc thầy của?', ['Thơ Đường', 'Sử thi', 'Truyện ngắn và kịch', 'Tiểu thuyết'], 2, 'Truyện ngắn + kịch.'),
  ]),

  M(34, 'Ôn tập tổng hợp HK2', [
    Q('Tố Hữu sáng tác Từ ấy năm?', ['1954', '1938', '1975', '1945'], 1, 'Sự kiện vào Đảng.'),
    Q('Tác phẩm nào KHÔNG phải của Tố Hữu?', ['Việt Bắc', 'Ra trận', 'Gió lộng', 'Số đỏ'], 3, 'Số đỏ của Vũ Trọng Phụng.'),
    Q('Hoàng Phủ Ngọc Tường nổi tiếng với?', ['Thơ về Hà Nội', 'Bút ký về Huế', 'Tiểu thuyết về Sài Gòn', 'Truyện ngụ ngôn'], 1, 'Bút ký xứ Huế.'),
    Q('Phong cách ngôn ngữ báo chí cần?', ['Hình tượng cao', 'Cảm xúc cá nhân', 'Vần điệu đẹp', 'Thông tin chính xác, kịp thời'], 3, 'Trọng tin tức.'),
    Q('Tác phẩm "Đám tang lão Goriot" phê phán?', ['Sự nghèo đói', 'Sự dốt nát', 'Sự bệnh tật', 'Sự lạnh lùng xã hội tư sản'], 3, 'Bi kịch tình cha con.'),
    Q('Nhật ký Đặng Thuỳ Trâm có giá trị?', ['Sách giải trí', 'Tư liệu + tinh thần lý tưởng', 'Văn học hư cấu', 'Sách khoa học'], 1, 'Tác động lớn về tinh thần.'),
  ]),

  M(35, 'Kiểm tra học kỳ II', [
    Q('Câu thơ "Từ ấy trong tôi bừng nắng hạ" của ai?', ['Huy Cận', 'Xuân Diệu', 'Hàn Mặc Tử', 'Tố Hữu'], 3, 'Tố Hữu.'),
    Q('Tác phẩm nào của Pushkin?', ['Chiến tranh và hoà bình', 'Tôi yêu em', 'Anh em nhà Karamazov', 'Sông Đông êm đềm'], 1, 'Tôi yêu em.'),
    Q('Phong cách ngôn ngữ nghệ thuật có 3 đặc trưng:?', ['Bình dị, vui tươi, hài hước', 'Khoa học, trung lập, chính xác', 'Hình tượng, biểu cảm, cá thể', 'Trang trọng, ngắn gọn, chính xác'], 2, '3 đặc trưng.'),
    Q('Ai đã đặt tên cho dòng sông viết về?', ['Sông Đà', 'Sông Hồng', 'Sông Cửu Long', 'Sông Hương'], 3, 'Sông Hương.'),
    Q('Chí Phèo của Nam Cao kết bằng?', ['Đám cưới', 'Lễ hội', 'Đoàn tụ', 'Cái lò gạch cũ - Thị Nở mang thai'], 3, 'Vòng luẩn quẩn.'),
    Q('Phong cách Nguyễn Tuân?', ['Bình dị, mộc mạc', 'Lạnh lùng', 'Khô khan', 'Tài hoa, uyên bác'], 3, 'Đặc trưng Nguyễn Tuân.'),
  ]),
];

export const H11NV_SCENARIOS = indexBy(H11NV_WEEKS);
