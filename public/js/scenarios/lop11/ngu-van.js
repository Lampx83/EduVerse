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
    Q('"Vào phủ chúa Trịnh" trích từ tác phẩm nào?', ['Thượng kinh ký sự','Vũ trung tuỳ bút','Hoàng Lê nhất thống chí','Lĩnh Nam chích quái'], 0, 'Trích Thượng kinh ký sự (1783).'),
    Q('Lê Hữu Trác còn được gọi là?', ['Hải Thượng Lãn Ông','Tao Đàn nguyên soái','Bạch Vân cư sĩ','Tử Hư'], 0, 'Hiệu là Hải Thượng Lãn Ông.'),
    Q('Thể loại của Thượng kinh ký sự?', ['Ký sự','Truyện ngắn','Tiểu thuyết','Tuỳ bút'], 0, 'Ký sự bằng chữ Hán.'),
    Q('Thái độ chính của tác giả trước cảnh xa hoa phủ chúa?', ['Vừa thán phục vừa phê phán','Hết lòng ngợi ca','Tỏ ra lạnh nhạt','Hoàn toàn căm ghét'], 0, 'Vẻ ngoài tráng lệ nhưng thực chất ngột ngạt; tác giả có cái nhìn tỉnh táo.'),
    Q('Hình ảnh thế tử Cán cho thấy điều gì?', ['Sự suy nhược của giai cấp thống trị','Sức sống mạnh mẽ','Tinh thần ham học','Tài nghệ phi thường'], 0, 'Thế tử yếu ớt — biểu tượng suy tàn.'),
    Q('Giá trị nghệ thuật nổi bật?', ['Quan sát tinh tế, ghi chép chân thật','Tả cảnh ước lệ','Sử dụng nhiều điển tích','Văn biền ngẫu'], 0, 'Lối ký sự ghi chép trực tiếp, tinh tế.'),
  ]),

  M(2, 'Tự tình (bài II) — Hồ Xuân Hương', [
    Q('"Tự tình" bài II được viết theo thể thơ?', ['Thất ngôn bát cú Đường luật','Lục bát','Song thất lục bát','Thất ngôn tứ tuyệt'], 0, 'Bát cú Đường luật.'),
    Q('Câu thơ "Đêm khuya văng vẳng trống canh dồn" diễn tả?', ['Sự cô đơn, thao thức của nhân vật trữ tình','Niềm vui','Sự huy hoàng','Sự bình yên'], 0, 'Âm thanh trống canh dồn dập trong đêm vắng → cô đơn.'),
    Q('Câu thơ "Trơ cái hồng nhan với nước non" thể hiện?', ['Nỗi tủi hổ, bẽ bàng về thân phận','Sự kiêu hãnh','Niềm tin yêu cuộc sống','Tâm thế lánh đời'], 0, '"Trơ" + "hồng nhan" → bẽ bàng.'),
    Q('Cụm từ "Xiên ngang mặt đất, đâm toạc chân mây" thể hiện?', ['Sức sống dữ dội, phản kháng','Sự dịu dàng','Sự cam chịu','Sự yếu đuối'], 0, 'Động từ mạnh → cá tính mạnh mẽ.'),
    Q('Hồ Xuân Hương được mệnh danh là?', ['Bà chúa thơ Nôm','Nữ tướng thơ ca','Hoàng tử thi ca','Tao Đàn nguyên soái'], 0, 'Bà chúa thơ Nôm.'),
    Q('Chủ đề bao trùm bài thơ?', ['Bi kịch và khát vọng hạnh phúc của người phụ nữ','Tình yêu lứa đôi','Lòng yêu nước','Tinh thần thoát tục'], 0, 'Bi kịch duyên phận + khát vọng sống.'),
  ]),

  M(3, 'Câu cá mùa thu — Nguyễn Khuyến', [
    Q('"Câu cá mùa thu" còn có tên?', ['Thu điếu','Thu vịnh','Thu ẩm','Thu vũ'], 0, 'Thu điếu — 1 trong 3 bài thu của Nguyễn Khuyến.'),
    Q('Cảnh thu trong bài có đặc điểm?', ['Thanh sơ, tĩnh lặng, hiu hắt','Sôi động, rộn ràng','U ám, dữ dội','Tươi tắn rực rỡ'], 0, 'Mọi sự vật nhẹ nhàng, gợn sóng nhỏ, lá khẽ rơi.'),
    Q('Câu thơ "Ao thu lạnh lẽo nước trong veo" gợi?', ['Vẻ trong vắt, tĩnh lặng của ao thu','Sự ấm áp','Sự ồn ào','Sự bão táp'], 0, 'Hình ảnh ao thu trong veo, lạnh.'),
    Q('Câu cuối "Cá đâu đớp động dưới chân bèo" thể hiện?', ['Tĩnh trong động, người câu mơ màng','Sự sôi nổi','Sự thất vọng','Sự giận dữ'], 0, 'Âm thanh nhỏ làm nổi bật cái tĩnh.'),
    Q('Nguyễn Khuyến được gọi là?', ['Tam Nguyên Yên Đổ','Tản Đà','Phan Bội Châu','Tao Đàn nguyên soái'], 0, 'Đỗ đầu 3 kỳ thi.'),
    Q('Bài thơ thể hiện tâm trạng gì của tác giả?', ['Nỗi u hoài, kín đáo yêu nước','Niềm vui sôi nổi','Sự lãng quên đời','Sự kiêu hãnh'], 0, 'Tâm trạng buồn kín đáo về thời cuộc.'),
  ]),

  M(4, 'Thương vợ — Trần Tế Xương', [
    Q('Bài thơ "Thương vợ" viết về?', ['Bà Tú — vợ Trần Tế Xương','Mẹ tác giả','Người yêu','Hàng xóm'], 0, 'Vợ là bà Phạm Thị Mẫn.'),
    Q('Câu thơ "Quanh năm buôn bán ở mom sông" cho thấy?', ['Sự vất vả tần tảo của bà Tú','Sự nhàn rỗi','Sự giàu có','Sự bệnh tật'], 0, 'Hình ảnh người vợ nuôi cả nhà.'),
    Q('"Nuôi đủ năm con với một chồng" thể hiện?', ['Sự đảm đang đến mức người chồng tự thấy có lỗi','Sự khoe khoang','Lời than trách','Niềm vui'], 0, 'Ông Tú tự gộp mình vào hàng "miệng ăn".'),
    Q('Hình ảnh "thân cò" trong bài gợi liên tưởng đến?', ['Người phụ nữ Việt Nam lam lũ','Người nông dân nghèo','Người lính','Người trí thức'], 0, 'Mô típ cò trong ca dao.'),
    Q('Tú Xương quê ở đâu?', ['Nam Định','Hà Nội','Hà Tĩnh','Huế'], 0, 'Quê Nam Định.'),
    Q('Giọng điệu bài thơ?', ['Trìu mến, tự trào','Tức giận','Lạnh lùng','Hồ hởi'], 0, 'Yêu thương vợ + tự trách bản thân.'),
  ]),

  M(5, 'Bài ca ngất ngưởng — Nguyễn Công Trứ', [
    Q('"Bài ca ngất ngưởng" theo thể loại?', ['Hát nói','Lục bát','Song thất lục bát','Đường luật'], 0, 'Thể hát nói.'),
    Q('Từ "ngất ngưởng" gợi?', ['Phong cách sống tự do, vượt khuôn phép','Sự khiêm tốn','Sự buồn bã','Sự bệnh hoạn'], 0, 'Lối sống khác đời, cao ngạo.'),
    Q('Nguyễn Công Trứ tự đánh giá mình thế nào?', ['Tài năng phi thường, hơn người','Bình thường','Yếu đuối','Hèn kém'], 0, 'Ông tự khẳng định tài năng.'),
    Q('Tư tưởng nổi bật của bài?', ['Khẳng định cái tôi cá nhân giữa xã hội phong kiến','Tinh thần ẩn dật','Lòng trung quân','Sự thoát tục'], 0, 'Khẳng định cá tính mạnh mẽ.'),
    Q('Nguyễn Công Trứ làm tới chức gì?', ['Doanh điền sứ','Tể tướng','Án sát','Tổng đốc'], 0, 'Có công khai khẩn ruộng đất.'),
    Q('Câu kết bài bộc lộ?', ['Sự tự tin, không ngại đời đánh giá','Nỗi sợ hãi','Sự nuối tiếc','Sự buồn bã'], 0, '"Trong triều ai ngất ngưởng như ông" — kiêu hãnh.'),
  ]),

  M(6, 'Văn tế nghĩa sĩ Cần Giuộc — Nguyễn Đình Chiểu', [
    Q('"Văn tế nghĩa sĩ Cần Giuộc" viết theo thể?', ['Văn tế','Truyện thơ','Tự truyện','Hịch'], 0, 'Văn tế truyền thống.'),
    Q('Đối tượng được tế trong bài?', ['Người nông dân nghĩa sĩ Cần Giuộc hy sinh','Vua chúa','Sĩ phu','Cha mẹ'], 0, 'Nông dân đứng lên đánh Pháp.'),
    Q('Bức tượng đài nghệ thuật được tác giả tạc?', ['Người nông dân yêu nước, anh dũng','Người lính chính quy','Người trí thức','Vua quan'], 0, 'Lần đầu tiên người nông dân làm anh hùng văn học.'),
    Q('Giọng văn tế của Nguyễn Đình Chiểu?', ['Bi tráng, xúc động','Hài hước','Mỉa mai','Bình thản'], 0, 'Vừa bi vừa hùng.'),
    Q('Nguyễn Đình Chiểu bị mù từ?', ['Sau khi mẹ mất ở Huế','Bẩm sinh','Sau chiến tranh','Già'], 0, 'Bị mù do khóc thương mẹ.'),
    Q('Câu "Súng giặc đất rền — lòng dân trời tỏ" thể hiện?', ['Tinh thần dân tộc bừng lên','Sự khiếp sợ','Sự đầu hàng','Sự thờ ơ'], 0, 'Đối lập tiếng súng giặc với lòng dân.'),
  ]),

  M(7, 'Chiếu cầu hiền — Ngô Thì Nhậm', [
    Q('"Chiếu cầu hiền" được viết theo lệnh ai?', ['Vua Quang Trung','Vua Gia Long','Vua Lê Hiển Tông','Chúa Trịnh'], 0, 'Quang Trung sai Ngô Thì Nhậm soạn.'),
    Q('Mục đích của bài chiếu?', ['Kêu gọi sĩ phu Bắc Hà ra giúp nước','Trách phạt sĩ phu','Thông báo chiến thắng','Tế lễ trời đất'], 0, 'Mời người tài cộng tác.'),
    Q('Thể loại "chiếu" thuộc?', ['Văn nghị luận chính trị','Văn miêu tả','Văn tự sự','Văn trữ tình'], 0, 'Văn bản hành chính nghị luận.'),
    Q('Lập luận chính trong chiếu?', ['Hiền tài là nguyên khí quốc gia, phải đoàn kết kiến quốc','Sĩ phu phải đầu hàng','Đất nước an bình','Quân thần phải tách biệt'], 0, 'Đoàn kết hiền tài để dựng nước.'),
    Q('Ngô Thì Nhậm theo phe?', ['Tây Sơn','Lê - Trịnh','Nguyễn Ánh','Trung lập'], 0, 'Phục vụ Quang Trung.'),
    Q('Văn phong bài chiếu?', ['Trang trọng, mềm dẻo, thuyết phục','Cộc lốc, đe nẹt','Trêu đùa','Tâm tình thầm kín'], 0, 'Vừa cứng vừa mềm, có sức thuyết phục.'),
  ]),

  M(8, 'Khái quát văn học Việt Nam đầu XX – 1945', [
    Q('Giai đoạn 1900–1945 chứng kiến văn học?', ['Hiện đại hoá','Quay về cổ điển','Suy thoái','Đứng yên'], 0, 'Hiện đại hoá là đặc trưng.'),
    Q('3 bộ phận chính của văn học giai đoạn này?', ['Văn học hợp pháp, văn học cách mạng, văn học công khai – không công khai','Văn học cổ, hiện đại','Văn học quan lại, dân gian','Văn học miền Bắc, miền Nam'], 2, 'Chia hợp pháp & bất hợp pháp (cách mạng).'),
    Q('Trào lưu Thơ Mới khởi xướng từ năm?', ['1932','1925','1945','1954'], 0, '1932 với Phan Khôi "Tình già".'),
    Q('Nhóm Tự lực văn đoàn do ai sáng lập?', ['Nhất Linh','Tố Hữu','Nam Cao','Vũ Trọng Phụng'], 0, 'Nhất Linh sáng lập.'),
    Q('Nhân tố quan trọng thúc đẩy hiện đại hoá?', ['Chữ Quốc ngữ, báo chí, dịch thuật','Khôi phục Hán Nôm','Cấm chữ Quốc ngữ','Đóng cửa văn hoá'], 0, 'Chữ Quốc ngữ phổ cập + báo chí.'),
    Q('Văn học 1930–1945 chia thành?', ['Lãng mạn, hiện thực, cách mạng','Cổ điển, trung đại','Dân gian, bác học','Tự lực, Tao Đàn'], 0, '3 dòng văn học chính.'),
  ]),

  M(9, 'Hai đứa trẻ — Thạch Lam', [
    Q('"Hai đứa trẻ" thuộc tập truyện?', ['Nắng trong vườn','Gió đầu mùa','Sợi tóc','Ngày mới'], 0, 'In trong Nắng trong vườn (1938).'),
    Q('Bối cảnh truyện?', ['Phố huyện nghèo về đêm','Thành thị náo nhiệt','Vùng quê trù phú','Miền núi xa xôi'], 0, 'Phố huyện nghèo.'),
    Q('Hình ảnh "đoàn tàu" tượng trưng cho?', ['Mơ ước về thế giới khác','Sự đe doạ','Sự nghèo đói','Quá khứ'], 0, 'Khát khao thoát cảnh nghèo.'),
    Q('Liên — nhân vật chính có đặc điểm?', ['Đa cảm, sâu sắc, có nội tâm','Vui tươi hồn nhiên','Tinh nghịch','Lạnh lùng'], 0, 'Cô bé nhạy cảm, đa sầu.'),
    Q('Nghệ thuật nổi bật của Thạch Lam?', ['Truyện không có cốt truyện, đậm chất trữ tình','Cốt truyện ly kỳ','Trào phúng','Hùng tráng'], 0, 'Tinh tế, trữ tình, giàu cảm xúc.'),
    Q('Thạch Lam thuộc nhóm văn học?', ['Tự lực văn đoàn','Tao Đàn','Nhân Văn','Sáng tạo'], 0, 'Thành viên Tự lực văn đoàn.'),
  ]),

  M(10, 'Chữ người tử tù — Nguyễn Tuân', [
    Q('"Chữ người tử tù" trích từ tập?', ['Vang bóng một thời','Sông Đà','Hà Nội ta đánh Mỹ giỏi','Cảnh sắc quê hương'], 0, 'Vang bóng một thời (1940).'),
    Q('Nhân vật trung tâm?', ['Huấn Cao','Cao Bá Quát','Nguyễn Du','Quản ngục thôi'], 0, 'Huấn Cao - người tử tù tài hoa.'),
    Q('Huấn Cao có biệt tài gì?', ['Viết chữ Nho đẹp','Múa kiếm','Vẽ tranh','Ngâm thơ'], 0, 'Tài viết chữ.'),
    Q('Cảnh "cho chữ" trong truyện được xem là?', ['Cảnh tượng xưa nay chưa từng có','Bình thường','Phản cảm','Buồn tẻ'], 0, 'Cảnh tượng lạ trong nhà ngục.'),
    Q('Tư tưởng nổi bật của truyện?', ['Cái Đẹp và Thiên lương chiến thắng cái xấu','Cái xấu chiến thắng','Tình yêu lứa đôi','Lòng yêu nước'], 0, 'Chủ nghĩa duy mỹ + thiện.'),
    Q('Nguyễn Tuân là nhà văn?', ['Tài hoa uyên bác','Hiện thực phê phán','Hiện thực xã hội chủ nghĩa','Bình dân'], 0, 'Văn phong tài hoa.'),
  ]),

  M(11, 'Chí Phèo — Nam Cao', [
    Q('Nhân vật Chí Phèo bị tha hoá bởi?', ['Nhà tù thực dân + xã hội tàn nhẫn','Tự bản thân','Cha mẹ','Vợ con'], 0, 'Sản phẩm của xã hội thuộc địa.'),
    Q('Bá Kiến đại diện cho?', ['Cường hào địa chủ ác bá','Tầng lớp tri thức','Người nông dân','Quan triều đình'], 0, 'Quyền lực ở nông thôn.'),
    Q('Bát cháo hành của Thị Nở mang ý nghĩa?', ['Tình người, hồi sinh nhân tính','Sự khinh bỉ','Bệnh tật','Sự nghèo đói'], 0, 'Khoảnh khắc Chí được làm người.'),
    Q('Cái chết của Chí Phèo có ý nghĩa?', ['Tố cáo xã hội đẩy người vào bước đường cùng','Sự giải thoát yên ổn','Trò đùa','Sự kết thúc bình thường'], 0, 'Bi kịch không lối thoát.'),
    Q('Nam Cao thuộc dòng văn học?', ['Hiện thực phê phán','Lãng mạn','Cách mạng','Trào phúng'], 0, 'Hiện thực phê phán xuất sắc.'),
    Q('Tên tác phẩm ban đầu của truyện?', ['Cái lò gạch cũ','Đôi mắt','Sống mòn','Đời thừa'], 0, 'Sau đổi thành Chí Phèo.'),
  ]),

  M(12, 'Hạnh phúc của một tang gia — Vũ Trọng Phụng', [
    Q('"Hạnh phúc của một tang gia" trích từ?', ['Số đỏ','Giông tố','Vỡ đê','Làm đĩ'], 0, 'Tiểu thuyết Số đỏ.'),
    Q('Tên đoạn trích đã chứa nghệ thuật?', ['Đối nghịch hài hước','Bình thường','Trữ tình','Hùng tráng'], 0, '"Hạnh phúc" + "tang gia" mâu thuẫn → trào phúng.'),
    Q('Xuân Tóc Đỏ là biểu tượng cho?', ['Sự lố lăng của xã hội tư sản thành thị','Người trí thức','Người nghèo khổ','Đại trí phú'], 0, 'Lưu manh trở thành "nhà cải cách xã hội".'),
    Q('Nghệ thuật đặc sắc của Vũ Trọng Phụng?', ['Trào phúng sắc bén','Trữ tình','Hùng ca','Bi tráng'], 0, 'Đỉnh cao trào phúng.'),
    Q('Vũ Trọng Phụng được mệnh danh?', ['Vua phóng sự Bắc Kỳ','Tao Đàn nguyên soái','Bà chúa thơ Nôm','Hải Thượng Lãn Ông'], 0, 'Vua phóng sự đất Bắc.'),
    Q('Mục đích trào phúng của tác giả?', ['Phơi bày sự lố bịch xã hội tư sản','Ca ngợi xã hội','Cảm thông giai cấp tư sản','Trung lập'], 0, 'Đả kích xã hội thực dân lai căng.'),
  ]),

  M(13, 'Vội vàng — Xuân Diệu', [
    Q('"Vội vàng" thuộc tập?', ['Thơ thơ','Gửi hương cho gió','Riêng chung','Một khối hồng'], 0, 'Thơ thơ (1938).'),
    Q('Câu mở đầu thể hiện cái tôi?', ['Cường tráng, muốn tận hưởng cuộc đời','Lạnh lùng','U sầu','Bình thản'], 0, '"Tôi muốn tắt nắng đi…"'),
    Q('Quan niệm thẩm mỹ mới của Xuân Diệu?', ['Lấy con người làm chuẩn mực cái đẹp','Lấy thiên nhiên cổ điển','Lấy thần thánh','Lấy vua chúa'], 0, 'Lấy thanh xuân, ái tình làm chuẩn.'),
    Q('"Tháng giêng ngon như một cặp môi gần" là?', ['Ẩn dụ chuyển đổi cảm giác','So sánh đơn','Nhân hoá','Hoán dụ'], 0, 'Chuyển đổi cảm giác đặc trưng Xuân Diệu.'),
    Q('Xuân Diệu được gọi là?', ['Ông hoàng thơ tình','Vua thơ Mới','Nhà thơ lớn của hiện thực','Thi sĩ trần gian'], 0, 'Ông hoàng thơ tình.'),
    Q('Tâm trạng cuối bài?', ['Khát khao sống đến cuồng nhiệt','Buông xuôi','Chán nản','Tĩnh tâm'], 0, 'Hối hả tận hưởng.'),
  ]),

  M(14, 'Đây thôn Vĩ Dạ — Hàn Mặc Tử', [
    Q('"Đây thôn Vĩ Dạ" lấy cảm hứng từ?', ['Bức ảnh và lời mời của Hoàng Cúc','Chuyến đi thực tế','Truyền thuyết','Cuộc gặp gỡ Đà Lạt'], 0, 'Bức bưu ảnh phong cảnh Vĩ Dạ.'),
    Q('"Sao anh không về chơi thôn Vĩ?" là?', ['Lời tự vấn hoặc lời mời gọi','Lời kể chuyện','Lời mệnh lệnh','Lời than'], 0, 'Câu hỏi tu từ đa nghĩa.'),
    Q('Hình ảnh "Vườn ai mướt quá xanh như ngọc" thuộc?', ['Khổ 1','Khổ 2','Khổ 3','Không có'], 0, 'Khổ 1 - cảnh thôn Vĩ tươi sáng.'),
    Q('Tâm trạng chủ đạo của Hàn Mặc Tử trong bài?', ['Vừa khát khao vừa hoài nghi, đau đáu','Tươi vui hoàn toàn','Buồn bã','Tự hào'], 0, 'Tâm trạng phức hợp.'),
    Q('"Mơ khách đường xa khách đường xa…" gợi?', ['Sự xa xôi, mờ ảo','Sự gần gũi','Sự rõ ràng','Sự nhộn nhịp'], 0, 'Nhịp điệu tạo cảm giác xa cách.'),
    Q('Hàn Mặc Tử mắc bệnh gì?', ['Phong (cùi)','Lao','Tim mạch','Sốt rét'], 0, 'Bệnh phong khiến cuộc đời ông đau khổ.'),
  ]),

  M(15, 'Tràng giang — Huy Cận', [
    Q('"Tràng giang" thuộc tập?', ['Lửa thiêng','Vũ trụ ca','Đất nở hoa','Ngày hằng sống'], 0, 'Lửa thiêng (1940).'),
    Q('Cảm hứng chủ đạo của bài thơ?', ['Nỗi buồn vũ trụ và lòng yêu nước thầm kín','Niềm vui sống','Tình yêu lứa đôi','Sự căm phẫn'], 0, 'Cô đơn vũ trụ kết hợp tình quê.'),
    Q('Câu thơ "Sóng gợn tràng giang buồn điệp điệp" gợi?', ['Nỗi buồn miên man, mênh mông','Niềm vui','Sự rộn rã','Sự ngạc nhiên'], 0, 'Buồn lan toả như sóng.'),
    Q('Câu "Không khói hoàng hôn cũng nhớ nhà" gợi nhớ?', ['Thơ Thôi Hiệu "Hoàng Hạc Lâu"','Thơ Lý Bạch','Truyện Kiều','Cung oán ngâm'], 0, 'Hoán đổi câu Thôi Hiệu.'),
    Q('Bài thơ kết hợp yếu tố?', ['Cổ điển và hiện đại','Chỉ cổ điển','Chỉ hiện đại','Dân gian thuần tuý'], 0, 'Vẻ đẹp cổ điển + cảm xúc Thơ Mới.'),
    Q('Huy Cận về sau gia nhập?', ['Hội Nhà văn Việt Nam, làm chính khách','Tự lực văn đoàn','Tao Đàn','Phong trào ẩn dật'], 0, 'Hoạt động văn hoá - chính trị sau 1945.'),
  ]),

  M(16, 'Chiều tối — Hồ Chí Minh', [
    Q('"Chiều tối" (Mộ) nằm trong tập?', ['Nhật ký trong tù','Đường Kách mệnh','Bản án chế độ thực dân','Truyện ngắn'], 0, 'Nhật ký trong tù.'),
    Q('Thể thơ?', ['Thất ngôn tứ tuyệt','Lục bát','Song thất lục bát','Tự do'], 0, 'Tứ tuyệt chữ Hán.'),
    Q('Hai câu đầu tả?', ['Cảnh chiều núi rừng','Cảnh đô thị','Cảnh biển','Cảnh đêm khuya'], 0, 'Chim mỏi về rừng, chòm mây lẻ.'),
    Q('Hình ảnh "cô em xóm núi xay ngô tối" thể hiện?', ['Sự lao động khoẻ khoắn','Sự buồn tẻ','Sự xa hoa','Sự uể oải'], 0, 'Hơi ấm cuộc sống lao động.'),
    Q('Chữ "hồng" cuối bài có giá trị?', ['Nhãn tự, làm sáng bừng cả bài thơ','Tả màu sắc đơn thuần','Câu chuyển ý','Câu kết nhạt'], 0, '"Nhãn tự" theo Hoàng Trung Thông.'),
    Q('Tinh thần Bác trong bài?', ['Lạc quan, hướng về sự sống','Bi quan','Lạnh lùng','Mơ hồ'], 0, 'Niềm tin yêu cuộc sống.'),
  ]),

  M(17, 'Ôn tập kiểm tra giữa kỳ I', [
    Q('Tự tình II của Hồ Xuân Hương thuộc thể thơ?', ['Thất ngôn bát cú','Lục bát','Tứ tuyệt','Tự do'], 0, 'Bát cú Đường luật.'),
    Q('Nguyễn Đình Chiểu sáng tác Văn tế nghĩa sĩ Cần Giuộc bằng?', ['Chữ Nôm','Chữ Hán','Quốc ngữ','Pháp ngữ'], 0, 'Chữ Nôm.'),
    Q('"Vào phủ chúa Trịnh" được viết sau khi tác giả?', ['Được mời lên kinh chữa bệnh thế tử','Thi đỗ','Đi sứ','Đi đánh trận'], 0, 'Lê Hữu Trác được mời chữa bệnh.'),
    Q('Quan niệm sống mới của Xuân Diệu?', ['Sống vội, sống mãnh liệt','Sống ẩn dật','Sống cam chịu','Sống vì danh lợi'], 0, 'Sống là cảm nhận và tận hưởng.'),
    Q('"Chí Phèo" là tên truyện hay tên nhân vật?', ['Cả hai','Chỉ tên nhân vật','Chỉ tên truyện','Không liên quan'], 0, 'Tên nhân vật chính + tên truyện sau.'),
    Q('Cảnh cho chữ ở "Chữ người tử tù" diễn ra ở đâu?', ['Trong nhà ngục','Trong phủ vua','Ngoài chợ','Ở chiến trường'], 0, 'Nhà ngục — không gian phi nghệ thuật.'),
  ]),

  M(18, 'Kiểm tra học kỳ I', [
    Q('Hồ Xuân Hương sống vào thế kỷ?', ['XVIII–XIX','XV','XVII','XX'], 0, 'Cuối XVIII – đầu XIX.'),
    Q('Tác phẩm nào KHÔNG thuộc Nam Cao?', ['Số đỏ','Chí Phèo','Lão Hạc','Đời thừa'], 0, 'Số đỏ của Vũ Trọng Phụng.'),
    Q('Trào lưu Thơ Mới phát triển mạnh giai đoạn?', ['1932–1945','1900–1930','1945–1954','1954–1975'], 0, 'Giai đoạn nở rộ.'),
    Q('Nguyễn Tuân sau Cách mạng Tháng Tám viết về?', ['Sông Đà, Người lái đò sông Đà','Vang bóng một thời','Tự lực văn đoàn','Thơ Mới'], 0, 'Sông Đà là tập tuỳ bút sau 1945.'),
    Q('Phong cách "tài hoa uyên bác" thuộc?', ['Nguyễn Tuân','Nam Cao','Thạch Lam','Vũ Trọng Phụng'], 0, 'Đặc trưng Nguyễn Tuân.'),
    Q('Hai đứa trẻ kết bằng?', ['Đoàn tàu vụt qua phố huyện','Cảnh chợ tan','Cảnh bình minh','Cuộc đối thoại'], 0, 'Đoàn tàu đêm khuya.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Từ ấy — Tố Hữu', [
    Q('"Từ ấy" được viết khi tác giả?', ['Được kết nạp Đảng (1938)','Đi học','Bị tù','Đi kháng chiến'], 0, '1938 — bước ngoặt cuộc đời.'),
    Q('"Từ ấy trong tôi bừng nắng hạ" sử dụng?', ['Ẩn dụ ánh sáng','Hoán dụ','Nhân hoá','So sánh'], 0, 'Ẩn dụ ánh sáng lý tưởng cách mạng.'),
    Q('Tâm trạng nổi bật?', ['Vui sướng khi gặp lý tưởng','Buồn rầu','Băn khoăn','Sợ hãi'], 0, 'Niềm hân hoan giác ngộ.'),
    Q('Tố Hữu thường được gọi?', ['Lá cờ đầu của thơ ca cách mạng','Vua thơ Mới','Bà chúa thơ Nôm','Hoàng tử thi ca'], 0, 'Lá cờ đầu thơ ca cách mạng.'),
    Q('Tập thơ đầu tay của Tố Hữu?', ['Từ ấy','Việt Bắc','Gió lộng','Ra trận'], 0, 'Cùng tên bài thơ.'),
    Q('Khổ 2 thể hiện?', ['Lẽ sống mới: gắn bó với quần chúng','Sự cô đơn','Sự thoát ly','Niềm hối tiếc'], 0, 'Hoà tôi vào trăm người.'),
  ]),

  M(20, 'Tôi yêu em — Pushkin', [
    Q('"Tôi yêu em" của tác giả nào?', ['A.S. Pushkin','L. Tolstoi','F. Dostoyevski','M. Gorky'], 0, 'Pushkin - Mặt trời thi ca Nga.'),
    Q('Bài thơ thể hiện tình cảm?', ['Yêu chân thành nhưng tôn trọng','Yêu cuồng nhiệt','Hận thù','Lãnh đạm'], 0, 'Yêu cao thượng, vô vị lợi.'),
    Q('Cụm "Tôi yêu em" lặp lại có giá trị?', ['Khẳng định tình yêu da diết','Trang trí','Đệm vần','Hài hước'], 0, 'Điệp khúc khẳng định.'),
    Q('Câu kết bài cầu chúc?', ['Người mình yêu được người khác yêu','Trả thù','Quên lãng','Đau khổ'], 0, '"Cầu em được người tình như tôi đã yêu em".'),
    Q('Bản dịch nổi tiếng tiếng Việt thuộc?', ['Thuý Toàn','Cao Bá Quát','Tản Đà','Xuân Diệu'], 0, 'Bản Thuý Toàn được dùng phổ biến.'),
    Q('Pushkin là người?', ['Nga','Pháp','Đức','Mỹ'], 0, 'Đại thi hào Nga.'),
  ]),

  M(21, 'Bài thơ về tiểu đội xe không kính — Phạm Tiến Duật', [
    Q('Bài thơ ca ngợi?', ['Người lính lái xe Trường Sơn','Người nông dân','Người công nhân','Người giáo viên'], 0, 'Tiểu đội xe không kính.'),
    Q('Giọng điệu bài thơ?', ['Trẻ trung, ngang tàng, lạc quan','Trang nghiêm','Buồn thảm','Mỉa mai'], 0, 'Phong cách "lính tráng".'),
    Q('Hình ảnh "xe không kính" cho thấy?', ['Khốc liệt chiến trường','Sự nghèo nàn','Sự kém kỹ thuật','Sự lãng mạn'], 0, 'Bom đạn làm xe biến dạng.'),
    Q('Phạm Tiến Duật thuộc thế hệ?', ['Nhà thơ chống Mỹ','Thơ Mới','Sau 1975','Trung đại'], 0, 'Thơ chống Mỹ.'),
    Q('Cảm hứng chủ đạo?', ['Lãng mạn cách mạng + hiện thực','Bi tráng cổ điển','Hài hước trào phúng','Buồn thảm'], 0, 'Lãng mạn hiện thực.'),
    Q('Cấu trúc lặp "Không có ... ừ thì ..." tạo?', ['Tinh thần coi thường gian khổ','Sự buồn chán','Sự sợ hãi','Sự nuối tiếc'], 0, 'Sự chấp nhận hài hước.'),
  ]),

  M(22, 'Đám tang lão Goriot — Balzac', [
    Q('Lão Goriot là nhân vật của?', ['H. de Balzac','V. Hugo','E. Zola','G. Flaubert'], 0, 'Tiểu thuyết của Balzac.'),
    Q('Tấn trò đời (Bộ tổng hợp của Balzac) gồm bao nhiêu cuốn?', ['Khoảng 90','10','50','200'], 0, 'Hơn 90 tác phẩm.'),
    Q('Đám tang lão Goriot phơi bày?', ['Sự lạnh lùng vô tình của xã hội tư sản Paris','Sự đoàn kết gia đình','Niềm vui sống','Tinh thần nhân ái'], 0, 'Con cái ruồng bỏ cha → bi kịch.'),
    Q('Nhân vật Eugène de Rastignac đại diện?', ['Thanh niên đầy tham vọng tiến thân','Người nghèo cam chịu','Người trung niên thất bại','Trẻ nhỏ ngây thơ'], 0, 'Mẫu thanh niên hậu Cách mạng Pháp.'),
    Q('Balzac thuộc dòng văn học?', ['Hiện thực','Lãng mạn','Cổ điển','Siêu thực'], 0, 'Hiện thực Pháp thế kỷ XIX.'),
    Q('Câu nói nổi tiếng cuối tác phẩm của Rastignac (đại ý)?', ['"Bây giờ giữa ta và mi, Paris!"','"Tôi đi tu"','"Tôi về quê"','"Tôi đầu hàng"'], 0, 'Lời thách thức Paris.'),
  ]),

  M(23, 'Người trong bao — Chekhov', [
    Q('"Người trong bao" do ai sáng tác?', ['A. Chekhov','L. Tolstoi','M. Gorky','Dostoyevski'], 0, 'Chekhov.'),
    Q('Nhân vật Belikov là?', ['Giáo viên Hy Lạp cổ điển','Bác sĩ','Quân nhân','Nông dân'], 0, 'Thầy giáo sống khép kín.'),
    Q('"Cái bao" tượng trưng cho?', ['Lối sống hèn nhát, khuôn phép','Sự ấm áp','Sự bảo vệ','Sự tự do'], 0, 'Sự bó hẹp tinh thần.'),
    Q('Thông điệp truyện?', ['Phê phán lối sống hèn nhát, sợ hãi','Ca ngợi sự cẩn thận','Khen ngợi quy củ','Châm biếm tình yêu'], 0, 'Phê phán xã hội Nga ngột ngạt.'),
    Q('Phong cách Chekhov?', ['Truyện ngắn cô đọng, hàm súc','Tiểu thuyết đồ sộ','Trữ tình lãng mạn','Hùng tráng anh hùng ca'], 0, 'Bậc thầy truyện ngắn.'),
    Q('Câu nói "Không thể sống mãi thế này được nữa" của ai?', ['Buôckin (kể chuyện)','Belikov','Cô Varenka','Bác sĩ'], 0, 'Lời kết mở của người kể chuyện.'),
  ]),

  M(24, 'Nghị luận về một vấn đề xã hội', [
    Q('Cấu trúc bài nghị luận xã hội thường gồm?', ['Giải thích – bàn luận – bài học','Mở – kết','Tự sự – miêu tả','Đặt vấn đề – chứng cứ'], 0, 'Quy trình chuẩn.'),
    Q('Luận điểm là?', ['Ý kiến chính cần chứng minh','Câu hỏi','Câu kể','Câu cảm thán'], 0, 'Khẳng định cần bảo vệ.'),
    Q('Dẫn chứng tốt cần?', ['Tiêu biểu, đa dạng, xác thực','Nhiều và dài','Cảm tính','Lặp lại'], 0, '3 tiêu chí.'),
    Q('Phép lập luận chính trong nghị luận xã hội?', ['Giải thích, chứng minh, bình luận','Tả cảnh','Tự sự','Miêu tả nội tâm'], 0, 'Bộ ba thường gặp.'),
    Q('Vấn đề xã hội thường được nghị luận?', ['Tư tưởng, đạo lý, hiện tượng đời sống','Truyền thuyết','Cổ tích','Ngụ ngôn'], 0, '2 nhánh chính.'),
    Q('Mở bài nghị luận xã hội nên?', ['Dẫn vấn đề rồi nêu luận đề','Kể chuyện cá nhân dài','Tả cảnh chi tiết','Đưa kết luận ngay'], 0, 'Ngắn gọn, dẫn vào luận đề.'),
  ]),

  M(25, 'Nghị luận về một tác phẩm/đoạn trích', [
    Q('Khi phân tích thơ cần chú ý?', ['Nội dung + nghệ thuật + cảm xúc','Chỉ nội dung','Chỉ nghệ thuật','Chỉ tiểu sử tác giả'], 0, 'Phân tích toàn diện.'),
    Q('Phép so sánh giữa hai tác phẩm cần?', ['Điểm chung và điểm riêng','Chỉ điểm chung','Chỉ điểm riêng','Liệt kê'], 0, 'Đối sánh đầy đủ.'),
    Q('Khi bàn về nhân vật cần?', ['Hoàn cảnh – tính cách – số phận – ý nghĩa','Chỉ ngoại hình','Chỉ tên gọi','Chỉ trang phục'], 0, 'Phân tích nhân vật chuẩn.'),
    Q('Trích dẫn trong bài cần?', ['Chính xác, có nguồn','Tự sáng tác','Sửa chữa cho hay','Bỏ trống'], 0, 'Đúng nguyên văn.'),
    Q('Văn nghị luận văn học khác văn xã hội ở?', ['Đối tượng - tác phẩm văn chương','Hình thức','Mở bài','Kết bài'], 0, 'Đối tượng nghị luận.'),
    Q('Cảm thụ thơ cần?', ['Hiểu hình ảnh + nhạc điệu + tâm trạng','Chỉ đếm câu','Chỉ ghi nhớ tên tác giả','Chỉ học thuộc lòng'], 0, 'Cảm nhận toàn diện.'),
  ]),

  M(26, 'Nhật ký Đặng Thuỳ Trâm — Đoạn trích', [
    Q('Đặng Thuỳ Trâm là?', ['Bác sĩ liệt sĩ thời chống Mỹ','Cô giáo','Nhà thơ','Nhà báo'], 0, 'Bác sĩ chiến trường.'),
    Q('Nhật ký nổi tiếng vì?', ['Sự chân thực, lý tưởng cao đẹp','Văn phong cầu kỳ','Cốt truyện hấp dẫn','Tình tiết ly kỳ'], 0, 'Cảm xúc thật của một con người trong chiến tranh.'),
    Q('Nhật ký được tìm thấy bởi?', ['Lính Mỹ Frederic Whitehurst','Người Việt Nam','Một nhà báo','Gia đình tác giả'], 0, 'Quân nhân Mỹ giữ lại 35 năm.'),
    Q('Giá trị của nhật ký?', ['Tư liệu lịch sử + giá trị nhân văn','Chỉ là sách giải trí','Tài liệu khoa học','Tiểu thuyết hư cấu'], 0, 'Nhật ký chân thực.'),
    Q('Tinh thần xuyên suốt?', ['Lý tưởng cách mạng, lòng yêu nước','Sự mệt mỏi','Sự thoái chí','Sự thờ ơ'], 0, 'Người con gái đầy lý tưởng.'),
    Q('Năm xuất bản nhật ký?', ['2005','1968','1985','2010'], 0, 'NXB Hội Nhà văn 2005.'),
  ]),

  M(27, 'Ai đã đặt tên cho dòng sông — Hoàng Phủ Ngọc Tường', [
    Q('Bài viết về?', ['Sông Hương','Sông Đà','Sông Hồng','Sông Mê Kông'], 0, 'Sông Hương xứ Huế.'),
    Q('Thể loại?', ['Bút ký','Truyện ngắn','Tiểu thuyết','Hồi ký'], 0, 'Bút ký giàu chất thơ.'),
    Q('Hoàng Phủ Ngọc Tường miêu tả sông Hương?', ['Vừa hùng vĩ vừa dịu dàng, đầy nữ tính','Chỉ hùng vĩ','Chỉ êm đềm','Lạnh lùng'], 0, 'Dòng sông đa diện.'),
    Q('Sông Hương được ví như?', ['Cô gái Di-gan; người tình thuỷ chung của Huế','Người chiến sĩ','Bà mẹ già','Trẻ thơ'], 0, 'Nhân hoá tinh tế.'),
    Q('Tác phẩm in trong tập?', ['Ai đã đặt tên cho dòng sông?','Sông Đà','Cảnh sắc quê hương','Quê mẹ'], 0, 'Tập bút ký cùng tên.'),
    Q('Văn phong tác giả?', ['Tài hoa, uyên bác, đậm chất Huế','Mộc mạc','Khô khan','Bình dị'], 0, 'Đậm chất nhân văn Huế.'),
  ]),

  M(28, 'Ngôn ngữ và phong cách văn chương', [
    Q('Phong cách ngôn ngữ nghệ thuật có đặc trưng?', ['Tính hình tượng, biểu cảm, cá thể','Tính trang trọng','Tính cô đọng khoa học','Tính trung lập'], 0, '3 đặc trưng.'),
    Q('Hình tượng văn học là?', ['Đối tượng được nhà văn xây dựng để truyền tải tư tưởng','Sự kiện','Câu thoại','Trạng từ'], 0, 'Cốt lõi văn học.'),
    Q('Tính cá thể trong phong cách nghĩa là?', ['Dấu ấn riêng của tác giả','Phổ thông','Trung tính','Khô khan'], 0, 'Mỗi nhà văn có phong cách riêng.'),
    Q('Biện pháp tu từ thường dùng trong văn nghệ thuật?', ['So sánh, ẩn dụ, nhân hoá, hoán dụ','Thống kê','Định nghĩa','Liệt kê thuần'], 0, 'Các phép tu từ cảm xúc.'),
    Q('Nhịp điệu thơ tạo bởi?', ['Cách ngắt nhịp + thanh điệu','Số chữ','Tên tác giả','Tiêu đề'], 0, 'Nhịp + thanh.'),
    Q('Lớp nghĩa trong văn học thường là?', ['Nghĩa hiển ngôn + hàm ngôn','Chỉ hiển ngôn','Chỉ hàm ngôn','Không có'], 0, 'Hai lớp song hành.'),
  ]),

  M(29, 'Phong cách ngôn ngữ báo chí', [
    Q('Phong cách báo chí có đặc trưng?', ['Tính thời sự, ngắn gọn, hấp dẫn','Tính trữ tình','Tính biểu cảm cá nhân','Tính cổ điển'], 0, '3 đặc trưng cơ bản.'),
    Q('Các thể loại báo chí phổ biến?', ['Tin, phóng sự, bình luận, phỏng vấn','Thơ, truyện, kịch','Hồi ký, tự truyện','Tuỳ bút, bút ký'], 0, 'Thể loại báo chí.'),
    Q('Tiêu đề báo chí cần?', ['Ngắn gọn, hấp dẫn, đúng nội dung','Dài và đầy đủ','Hài hước','Bí ẩn'], 0, '3 tiêu chí.'),
    Q('Ngôn ngữ báo chí khác văn nghệ thuật ở?', ['Tính khách quan, thông tin','Tính hình tượng','Tính cá thể','Tính cảm xúc cao'], 0, 'Trọng thông tin chính xác.'),
    Q('Phong cách báo chí có thể kết hợp với?', ['Hình ảnh, video, đa phương tiện','Chỉ chữ viết','Chỉ giọng nói','Chỉ tranh vẽ'], 0, 'Đặc biệt báo hiện đại.'),
    Q('Yêu cầu đạo đức báo chí?', ['Trung thực, khách quan','Tô vẽ','Suy đoán','Gây giật gân'], 0, 'Trung thực là cơ bản.'),
  ]),

  M(30, 'Ôn tập truyện hiện đại', [
    Q('Truyện "Hai đứa trẻ" thuộc thể loại?', ['Truyện ngắn trữ tình','Tiểu thuyết','Kịch','Phóng sự'], 0, 'Truyện ngắn không cốt truyện.'),
    Q('Chí Phèo chết do?', ['Tự đâm Bá Kiến rồi tự sát','Bị bệnh','Bị bắt','Đi mất tích'], 0, 'Bi kịch không lối thoát.'),
    Q('Vũ Trọng Phụng là cây bút?', ['Hiện thực phê phán, trào phúng','Lãng mạn','Cách mạng','Trung đại'], 0, 'Bậc thầy trào phúng.'),
    Q('Tác phẩm "Số đỏ" được sáng tác năm?', ['1936','1925','1945','1955'], 0, '1936.'),
    Q('Thạch Lam tên thật là?', ['Nguyễn Tường Vinh (Lân)','Tô Hoài','Nguyên Hồng','Nguyên Ngọc'], 0, 'Em ruột Nhất Linh, Hoàng Đạo.'),
    Q('Nam Cao trước cách mạng nổi bật với?', ['Chí Phèo, Lão Hạc, Đời thừa','Sông Đà','Số đỏ','Tự lực văn đoàn'], 0, 'Bộ ba truyện ngắn nổi tiếng.'),
  ]),

  M(31, 'Ôn tập Thơ Mới', [
    Q('Thơ Mới thay đổi điều gì so với thơ cũ?', ['Hình thức tự do, cái tôi cá nhân nổi bật','Trở về Đường luật','Không khác','Khôi phục Hán Nôm'], 0, 'Cách tân hình thức + tư tưởng.'),
    Q('Bài thơ "Vội vàng" có quan niệm?', ['Sống vội, sống thật','Sống ẩn dật','Sống vì người khác','Sống thờ ơ'], 0, 'Quan niệm sống cá nhân hiện đại.'),
    Q('Tâm trạng Hàn Mặc Tử trong "Đây thôn Vĩ Dạ"?', ['Khao khát đời + nỗi đau bệnh tật','Hạnh phúc','Tự hào','Bình thản'], 0, 'Phức cảm độc đáo.'),
    Q('Tràng giang gắn cảm hứng?', ['Vũ trụ và quê hương','Lứa đôi','Cách mạng','Tu hành'], 0, 'Buồn vũ trụ + nhớ quê.'),
    Q('Câu kết "Tràng giang" nhắc tới?', ['Khói hoàng hôn (Thôi Hiệu)','Đêm trăng','Cánh buồm','Đoàn tàu'], 0, '"Không khói hoàng hôn cũng nhớ nhà".'),
    Q('Nhà thơ tiêu biểu nhất của Thơ Mới?', ['Xuân Diệu','Tố Hữu','Hồ Chí Minh','Tản Đà'], 0, 'Ông hoàng thơ tình.'),
  ]),

  M(32, 'Ôn tập kịch và văn nghị luận', [
    Q('Vĩnh biệt Cửu Trùng Đài trích từ?', ['Vũ Như Tô (Nguyễn Huy Tưởng)','Hồn Trương Ba da hàng thịt','Sống mãi với Thủ đô','Số đỏ'], 0, 'Vở kịch Vũ Như Tô.'),
    Q('Vũ Như Tô là?', ['Kiến trúc sư','Nhà thơ','Tướng quân','Nông dân'], 0, 'Kiến trúc sư tài hoa.'),
    Q('Bi kịch của Vũ Như Tô?', ['Tài năng xa rời nhân dân, bị giết','Bệnh tật','Tù đày','Đói nghèo'], 0, 'Bi kịch nghệ sĩ xa dân.'),
    Q('Hịch tướng sĩ của Trần Quốc Tuấn là?', ['Văn nghị luận trung đại','Truyện ngắn','Thơ Đường','Tuỳ bút'], 0, 'Văn nghị luận chính trị.'),
    Q('Mục đích của hịch?', ['Khích lệ tinh thần chiến đấu','Tế lễ','Cầu mưa','Tang ma'], 0, 'Khơi dậy lòng yêu nước.'),
    Q('Văn nghị luận hiện đại khác trung đại ở?', ['Lập luận khoa học, ngôn ngữ hiện đại','Cảm xúc nhiều hơn','Hình tượng nhiều hơn','Vần điệu nhiều hơn'], 0, 'Trọng lý lẽ logic.'),
  ]),

  M(33, 'Văn học nước ngoài - Tổng kết', [
    Q('Tôi yêu em của Pushkin nói về?', ['Tình yêu cao thượng','Lòng căm thù','Tình đồng đội','Tinh thần ái quốc'], 0, 'Tình yêu vô vị lợi.'),
    Q('Người trong bao của Chekhov phê phán?', ['Lối sống tù túng, hèn nhát','Sự tự do','Tình yêu','Lao động'], 0, 'Lối sống bao bọc.'),
    Q('Balzac người nước nào?', ['Pháp','Nga','Đức','Anh'], 0, 'Nhà văn Pháp.'),
    Q('Tác phẩm Tấn trò đời của Balzac dài hơi vì?', ['Phản ánh xã hội Pháp đầu thế kỷ XIX','Phục vụ giải trí','Để dài','Vì ngẫu hứng'], 0, 'Bức tranh xã hội Pháp.'),
    Q('Pushkin được tôn vinh là?', ['Mặt trời thi ca Nga','Bà chúa thơ','Bậc kỳ tài','Hoàng tử thơ'], 0, 'Mặt trời thi ca Nga.'),
    Q('Chekhov là bậc thầy của?', ['Truyện ngắn và kịch','Tiểu thuyết','Sử thi','Thơ Đường'], 0, 'Truyện ngắn + kịch.'),
  ]),

  M(34, 'Ôn tập tổng hợp HK2', [
    Q('Tố Hữu sáng tác Từ ấy năm?', ['1938','1945','1954','1975'], 0, 'Sự kiện vào Đảng.'),
    Q('Tác phẩm nào KHÔNG phải của Tố Hữu?', ['Số đỏ','Việt Bắc','Gió lộng','Ra trận'], 0, 'Số đỏ của Vũ Trọng Phụng.'),
    Q('Hoàng Phủ Ngọc Tường nổi tiếng với?', ['Bút ký về Huế','Tiểu thuyết về Sài Gòn','Thơ về Hà Nội','Truyện ngụ ngôn'], 0, 'Bút ký xứ Huế.'),
    Q('Phong cách ngôn ngữ báo chí cần?', ['Thông tin chính xác, kịp thời','Cảm xúc cá nhân','Hình tượng cao','Vần điệu đẹp'], 0, 'Trọng tin tức.'),
    Q('Tác phẩm "Đám tang lão Goriot" phê phán?', ['Sự lạnh lùng xã hội tư sản','Sự nghèo đói','Sự dốt nát','Sự bệnh tật'], 0, 'Bi kịch tình cha con.'),
    Q('Nhật ký Đặng Thuỳ Trâm có giá trị?', ['Tư liệu + tinh thần lý tưởng','Văn học hư cấu','Sách giải trí','Sách khoa học'], 0, 'Tác động lớn về tinh thần.'),
  ]),

  M(35, 'Kiểm tra học kỳ II', [
    Q('Câu thơ "Từ ấy trong tôi bừng nắng hạ" của ai?', ['Tố Hữu','Xuân Diệu','Huy Cận','Hàn Mặc Tử'], 0, 'Tố Hữu.'),
    Q('Tác phẩm nào của Pushkin?', ['Tôi yêu em','Sông Đông êm đềm','Chiến tranh và hoà bình','Anh em nhà Karamazov'], 0, 'Tôi yêu em.'),
    Q('Phong cách ngôn ngữ nghệ thuật có 3 đặc trưng:?', ['Hình tượng, biểu cảm, cá thể','Trang trọng, ngắn gọn, chính xác','Khoa học, trung lập, chính xác','Bình dị, vui tươi, hài hước'], 0, '3 đặc trưng.'),
    Q('Ai đã đặt tên cho dòng sông viết về?', ['Sông Hương','Sông Đà','Sông Cửu Long','Sông Hồng'], 0, 'Sông Hương.'),
    Q('Chí Phèo của Nam Cao kết bằng?', ['Cái lò gạch cũ - Thị Nở mang thai','Đám cưới','Đoàn tụ','Lễ hội'], 0, 'Vòng luẩn quẩn.'),
    Q('Phong cách Nguyễn Tuân?', ['Tài hoa, uyên bác','Bình dị, mộc mạc','Khô khan','Lạnh lùng'], 0, 'Đặc trưng Nguyễn Tuân.'),
  ]),
];

export const H11NV_SCENARIOS = indexBy(H11NV_WEEKS);
