// ============================================================
// Lớp 7 · GIÁO DỤC ĐỊA PHƯƠNG (Hà Nội) — 35 tuần
// Bám Tài liệu GDĐP Hà Nội lớp 7 · Sở GDĐT Hà Nội (CT GDPT 2018).
// Chủ đề: Lịch sử địa phương trung đại · Danh nhân · Di tích · Lễ hội ·
//         Làng nghề · Ẩm thực · Phương ngữ.
// 1 tiết/tuần · HK1: T1–18 · HK2: T19–35 · ID prefix: "S7GDDP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7GDDP', 'gd-dia-phuong', n, title, qs, opts);

export const S7GDDP_WEEKS = [
  // ===== HK1 — LỊCH SỬ TRUNG ĐẠI THĂNG LONG — HÀ NỘI =====
  M(1, 'Thăng Long thời Lý — kinh đô đầu tiên', [
    Q('Năm nào Lý Công Uẩn dời đô về Đại La?', ['1010', '938', '1226', '1428'], 0, 'Lý Thái Tổ dời đô năm 1010 và đổi tên Thăng Long.'),
    Q('"Chiếu dời đô" do ai viết?', ['Lý Công Uẩn', 'Trần Hưng Đạo', 'Nguyễn Trãi', 'Lê Lợi'], 0, '"Chiếu dời đô" do chính Lý Thái Tổ ban.'),
    Q('Lý do chính chọn Đại La làm kinh đô?', ['Vị trí trung tâm, đất bằng, sông núi tụ hội', 'Có biển', 'Ở vùng núi cao', 'Gần biên giới'], 0, 'Đại La có vị trí thuận lợi để phát triển kinh tế, an ninh.'),
    Q('Kinh đô Thăng Long thời Lý có bao nhiêu vòng thành?', ['3 (Cấm thành, Hoàng thành, Đại La thành)', '1', '2', '5'], 0, 'Thăng Long có 3 vòng thành: cấm thành — hoàng thành — đại la thành.'),
    Q('Quốc hiệu Đại Việt được đặt vào năm?', ['1054', '1010', '1226', '1400'], 0, 'Năm 1054, Lý Thánh Tông đổi quốc hiệu là Đại Việt.'),
  ]),

  M(2, 'Văn Miếu — Quốc Tử Giám: Trường đại học đầu tiên Việt Nam', [
    Q('Văn Miếu được xây năm?', ['1070', '1010', '1226', '1428'], 0, 'Lý Thánh Tông xây Văn Miếu năm 1070 thờ Khổng Tử.'),
    Q('Quốc Tử Giám được lập năm?', ['1076', '1070', '1010', '1428'], 0, 'Quốc Tử Giám lập năm 1076 thời Lý Nhân Tông.'),
    Q('Quốc Tử Giám ban đầu dạy cho?', ['Con vua quan', 'Toàn dân', 'Chỉ phụ nữ', 'Chỉ thợ thủ công'], 0, 'Ban đầu chỉ dạy con vua quan, sau mở rộng nhân tài.'),
    Q('Bia Tiến sĩ Văn Miếu khắc tên?', ['Các tiến sĩ qua các khoa thi', 'Vua chúa', 'Tướng lĩnh', 'Thầy thuốc'], 0, 'Khắc tên 1307 tiến sĩ qua 82 khoa thi.'),
    Q('Khuê Văn Các xây thời nào?', ['Thời Nguyễn (1805)', 'Thời Lý', 'Thời Trần', 'Thời Pháp thuộc'], 0, 'Khuê Văn Các xây năm 1805 thời Gia Long.'),
  ]),

  M(3, 'Hoàng thành Thăng Long — di sản thế giới', [
    Q('Hoàng thành Thăng Long được UNESCO công nhận năm?', ['2010', '2000', '2008', '2015'], 0, 'UNESCO công nhận năm 2010 — dịp Đại lễ 1000 năm.'),
    Q('Cổng phía Nam Hoàng thành tên gì?', ['Đoan Môn', 'Bắc Môn', 'Đông Môn', 'Tây Môn'], 0, 'Đoan Môn là cổng phía Nam còn nguyên vẹn.'),
    Q('Cuộc khai quật 18 Hoàng Diệu phát lộ điều gì?', ['Nền móng cung điện Lý — Trần — Lê', 'Lăng vua Hùng', 'Văn Miếu', 'Sông cổ'], 0, 'Khai quật 2002–2004 phát lộ dấu tích các triều đại.'),
    Q('Cột Cờ Hà Nội xây thời nào?', ['Thời Nguyễn (đầu XIX)', 'Thời Lý', 'Thời Trần', 'Thời Pháp'], 0, 'Cột Cờ xây năm 1812 thời Gia Long.'),
    Q('Điện Kính Thiên là?', ['Điện chính nơi vua thiết triều thời Lê', 'Nhà ăn', 'Kho lương', 'Trại lính'], 0, 'Điện Kính Thiên là nơi vua thiết triều.'),
  ]),

  M(4, 'Hà Nội thời Trần — chống Mông Nguyên', [
    Q('Triều Trần ba lần đánh thắng quân Mông — Nguyên vào các năm?', ['1258, 1285, 1288', '1010, 1077, 1288', '938, 1010, 1226', '1428, 1789, 1858'], 0, 'Ba lần kháng chiến chống Mông — Nguyên thắng lợi.'),
    Q('Người tổng chỉ huy là?', ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Lê Lợi', 'Quang Trung'], 0, 'Trần Quốc Tuấn — Hưng Đạo Vương — Đại Vương quân sự.'),
    Q('"Hịch tướng sĩ" do ai soạn?', ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Nguyễn Trãi', 'Lê Lợi'], 0, 'Trần Hưng Đạo soạn để khích lệ binh sĩ.'),
    Q('Hội nghị Diên Hồng tổ chức ở Thăng Long, các bô lão đồng thanh?', ['"Đánh!"', '"Hoà!"', '"Cống nạp"', '"Đầu hàng"'], 0, 'Các bô lão đồng thanh "Đánh!" tại Hội nghị Diên Hồng.'),
    Q('Vị vua nào lãnh đạo cuộc kháng chiến 1285?', ['Trần Nhân Tông', 'Trần Thái Tông', 'Trần Anh Tông', 'Trần Dụ Tông'], 0, 'Trần Nhân Tông là vua lãnh đạo kháng chiến lần 2 và 3.'),
  ]),

  M(5, 'Thăng Long thời Lê sơ', [
    Q('Sau khi đánh tan quân Minh (1428), Lê Lợi đóng đô ở?', ['Đông Đô (Thăng Long)', 'Hoa Lư', 'Lam Kinh', 'Phú Xuân'], 0, 'Đông Đô (Thăng Long) là kinh đô chính.'),
    Q('Lê Lợi đổi tên Thăng Long thành?', ['Đông Kinh', 'Đông Đô', 'Đại La', 'Đông Quan'], 0, 'Năm 1430, Lê Lợi đổi Đông Đô thành Đông Kinh.'),
    Q('Vị vua Lê nào nổi tiếng cải cách lớn?', ['Lê Thánh Tông', 'Lê Lợi', 'Lê Nhân Tông', 'Lê Hiển Tông'], 0, 'Lê Thánh Tông (1460–1497) — minh quân vĩ đại.'),
    Q('Bộ luật Hồng Đức ban hành thời?', ['Lê Thánh Tông', 'Lê Lợi', 'Trần Hưng Đạo', 'Nguyễn Trãi'], 0, 'Luật Hồng Đức là bộ luật tiến bộ thời Lê Thánh Tông.'),
    Q('Văn Miếu được tu sửa lớn thời?', ['Lê Thánh Tông (dựng bia tiến sĩ đầu tiên 1484)', 'Lý Thái Tổ', 'Trần Nhân Tông', 'Quang Trung'], 0, 'Năm 1484, Lê Thánh Tông cho dựng bia tiến sĩ đầu tiên.'),
  ]),

  M(6, 'Phố cổ Hà Nội — 36 phố phường', [
    Q('Khu phố cổ Hà Nội còn gọi là?', ['36 phố phường', 'Khu chợ lớn', 'Khu mới', 'Khu công nghiệp'], 0, '"Hà Nội 36 phố phường" là tên truyền thống.'),
    Q('Chữ "Hàng" trong tên phố cổ chỉ?', ['Loại hàng hoá bán ở phố đó', 'Số nhà', 'Tên người', 'Tên cây'], 0, 'Mỗi phố tập trung 1 nghề/mặt hàng.'),
    Q('Phố Hàng Bạc nổi tiếng?', ['Chế tác kim hoàn (bạc, vàng)', 'Vải lụa', 'Hoa quả', 'Đồ ăn'], 0, 'Hàng Bạc chuyên chế tác kim hoàn.'),
    Q('Phố Hàng Đào nổi tiếng?', ['Vải lụa, tơ tằm', 'Bạc', 'Đồng', 'Sách'], 0, 'Hàng Đào chuyên buôn vải lụa.'),
    Q('Đặc trưng kiến trúc nhà phố cổ?', ['Nhà ống mặt tiền hẹp, chiều sâu lớn', 'Nhà cao tầng', 'Nhà sàn', 'Lâu đài'], 0, 'Nhà ống: mặt tiền 3–5m, chiều sâu lớn.'),
  ]),

  M(7, 'Danh nhân Hà Nội — Chu Văn An', [
    Q('Chu Văn An là?', ['Nhà giáo, hiệu trưởng Quốc Tử Giám thời Trần', 'Vua', 'Tướng quân', 'Thầy thuốc'], 0, 'Chu Văn An — "Vạn thế sư biểu".'),
    Q('Tác phẩm nổi tiếng của Chu Văn An?', ['Thất trảm sớ — đề nghị chém 7 nịnh thần', 'Hịch tướng sĩ', 'Bình Ngô đại cáo', 'Truyện Kiều'], 0, '"Thất trảm sớ" thể hiện khí phách của ông.'),
    Q('Quê hương Chu Văn An nay thuộc?', ['Thanh Trì, Hà Nội', 'Huế', 'Đà Nẵng', 'TPHCM'], 0, 'Làng Văn Thôn (nay là Thanh Liệt, Thanh Trì, Hà Nội).'),
    Q('Vai trò của Chu Văn An?', ['Bậc thầy của nền giáo dục Việt Nam', 'Nhà quân sự', 'Nhà thám hiểm', 'Diễn viên'], 0, 'Ông được tôn là bậc thầy muôn đời.'),
    Q('Tên Chu Văn An ngày nay được đặt cho?', ['Nhiều trường học khắp cả nước', 'Sân bay', 'Bệnh viện', 'Cảng biển'], 0, 'Tên ông được đặt cho nhiều trường danh tiếng.'),
  ]),

  M(8, 'Danh nhân Hà Nội — Nguyễn Trãi', [
    Q('Nguyễn Trãi sinh năm?', ['1380', '1226', '1010', '1442'], 0, 'Nguyễn Trãi sinh năm 1380.'),
    Q('Nguyễn Trãi là quân sư của ai?', ['Lê Lợi (khởi nghĩa Lam Sơn)', 'Trần Hưng Đạo', 'Quang Trung', 'Lý Thường Kiệt'], 0, 'Nguyễn Trãi là quân sư của Lê Lợi.'),
    Q('Tác phẩm vĩ đại của Nguyễn Trãi?', ['"Bình Ngô đại cáo"', '"Hịch tướng sĩ"', '"Nam quốc sơn hà"', '"Truyện Kiều"'], 0, '"Bình Ngô đại cáo" — bản tuyên ngôn độc lập thứ 2.'),
    Q('Nguyễn Trãi được UNESCO công nhận là?', ['Danh nhân văn hoá thế giới (1980)', 'Nhà khoa học', 'Thủ tướng', 'Hoàng đế'], 0, 'UNESCO công nhận 1980 nhân 600 năm sinh.'),
    Q('Vụ án oan của Nguyễn Trãi là?', ['Án oan Lệ Chi Viên (1442)', 'Án tử chiến tranh', 'Án phản bội', 'Án trộm cắp'], 0, 'Án oan Lệ Chi Viên khiến cả họ ông bị tru di.'),
  ]),

  M(9, 'Danh nhân Hà Nội — Lý Thường Kiệt', [
    Q('Lý Thường Kiệt là vị tướng thời nào?', ['Lý', 'Trần', 'Lê', 'Nguyễn'], 0, 'Lý Thường Kiệt là tướng thời Lý.'),
    Q('Chiến công vang dội của Lý Thường Kiệt?', ['Đánh tan quân Tống xâm lược 1075–1077', 'Đánh Mông Nguyên', 'Đánh Minh', 'Đánh Thanh'], 0, 'Ông chỉ huy kháng chiến chống Tống thắng lợi.'),
    Q('Phòng tuyến nào nổi tiếng của Lý Thường Kiệt?', ['Phòng tuyến sông Như Nguyệt', 'Bạch Đằng', 'Chi Lăng', 'Ngọc Hồi'], 0, 'Phòng tuyến Như Nguyệt (sông Cầu) chặn Tống.'),
    Q('Bài thơ thần "Nam quốc sơn hà" được cho là của?', ['Lý Thường Kiệt', 'Nguyễn Trãi', 'Trần Hưng Đạo', 'Hồ Quý Ly'], 0, '"Nam quốc sơn hà" — bản tuyên ngôn độc lập đầu tiên.'),
    Q('Chiến lược nổi tiếng "tiên phát chế nhân" có nghĩa?', ['Chủ động tấn công trước', 'Phòng thủ', 'Cầu hoà', 'Đầu hàng'], 0, '"Tiên phát chế nhân" = đánh phủ đầu.'),
  ]),

  M(10, 'Đền Ngọc Sơn — Hồ Hoàn Kiếm', [
    Q('Hồ Hoàn Kiếm còn gọi là?', ['Hồ Gươm', 'Hồ Tây', 'Hồ Trúc Bạch', 'Hồ Bảy Mẫu'], 0, 'Hồ Gươm là tên dân gian.'),
    Q('Truyền thuyết Hồ Gươm gắn với ai?', ['Vua Lê Lợi trả gươm cho rùa thần', 'Lý Thái Tổ dời đô', 'An Dương Vương', 'Trần Hưng Đạo'], 0, 'Lê Lợi trả gươm → tên Hồ Hoàn Kiếm.'),
    Q('Đền Ngọc Sơn thờ ai?', ['Văn Xương đế quân và Trần Hưng Đạo', 'Lý Thái Tổ', 'Quang Trung', 'Bác Hồ'], 0, 'Đền thờ Văn Xương + Trần Hưng Đạo.'),
    Q('Cầu nối ra đền Ngọc Sơn?', ['Cầu Thê Húc', 'Cầu Long Biên', 'Cầu Chương Dương', 'Cầu Nhật Tân'], 0, 'Cầu Thê Húc sơn đỏ nổi tiếng.'),
    Q('Tháp Rùa ở giữa hồ xây thời?', ['Cuối XIX (Bá Hộ Kim)', 'Thời Lý', 'Thời Trần', 'Thời Lê'], 0, 'Tháp Rùa xây cuối XIX bởi Bá Hộ Kim.'),
  ]),

  M(11, 'Lễ hội chùa Hương', [
    Q('Lễ hội chùa Hương ở huyện nào?', ['Mỹ Đức', 'Ba Vì', 'Thạch Thất', 'Phú Xuyên'], 0, 'Chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.'),
    Q('Lễ hội chùa Hương kéo dài?', ['Từ tháng 1 đến tháng 3 âm lịch', 'Một ngày', 'Một tuần', 'Cả năm'], 0, 'Lễ hội kéo dài hơn 2 tháng.'),
    Q('Phương tiện đến chùa Hương qua suối Yến?', ['Đò gỗ', 'Xe máy', 'Cáp treo (gần đây cũng có)', 'Đi bộ duy nhất'], 0, 'Đò trên suối Yến — Cáp treo có thêm sau này.'),
    Q('Động Hương Tích được mệnh danh?', ['"Nam thiên đệ nhất động"', 'Cố đô', 'Hoàng thành', 'Nóc nhà'], 0, '"Nam thiên đệ nhất động" — chữ của chúa Trịnh.'),
    Q('Lễ hội chùa Hương thuộc tín ngưỡng?', ['Phật giáo', 'Đạo giáo', 'Thiên Chúa giáo', 'Hồi giáo'], 0, 'Chùa Hương là quần thể Phật giáo lớn.'),
  ]),

  M(12, 'Lễ hội Gò Đống Đa', [
    Q('Lễ hội Gò Đống Đa tổ chức ngày?', ['Mùng 5 Tết âm lịch', '1/1 dương lịch', '15/8 âm lịch', '10/10 dương lịch'], 0, 'Mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi — Đống Đa.'),
    Q('Lễ hội tưởng nhớ chiến thắng nào?', ['Quang Trung đại phá quân Thanh Tết Kỷ Dậu 1789', 'Bạch Đằng', 'Chi Lăng', 'Vạn Tường'], 0, 'Chiến thắng Ngọc Hồi — Đống Đa năm 1789.'),
    Q('Quân Thanh do ai chỉ huy bị đánh bại?', ['Tôn Sĩ Nghị', 'Hứa Thế Hanh', 'Lư Hán', 'Ô Mã Nhi'], 0, 'Tôn Sĩ Nghị là tổng chỉ huy quân Thanh.'),
    Q('Gò Đống Đa nay thuộc quận?', ['Đống Đa', 'Hoàn Kiếm', 'Ba Đình', 'Hai Bà Trưng'], 0, 'Gò Đống Đa thuộc quận Đống Đa.'),
    Q('Nghi lễ chính của hội?', ['Tế lễ, rước kiệu, đánh trận giả', 'Đua thuyền', 'Đấu vật', 'Bắn cung'], 0, 'Lễ hội có rước kiệu và tái hiện trận đánh.'),
  ]),

  M(13, 'Hội Gióng — Di sản phi vật thể', [
    Q('Hội Gióng đền Phù Đổng tổ chức ở?', ['Gia Lâm, Hà Nội', 'Sóc Sơn', 'Đông Anh', 'Ba Vì'], 0, 'Đền Phù Đổng ở Gia Lâm.'),
    Q('Hội Gióng đền Sóc tổ chức ở?', ['Sóc Sơn', 'Gia Lâm', 'Đông Anh', 'Ba Vì'], 0, 'Đền Sóc ở Sóc Sơn.'),
    Q('Hội Gióng thờ ai?', ['Thánh Gióng (Phù Đổng Thiên Vương)', 'An Dương Vương', 'Hai Bà Trưng', 'Trần Hưng Đạo'], 0, 'Thánh Gióng — Phù Đổng Thiên Vương.'),
    Q('Hội Gióng được UNESCO công nhận năm?', ['2010', '2000', '2008', '2015'], 0, 'Năm 2010 — Di sản phi vật thể đại diện nhân loại.'),
    Q('Hội Gióng tổ chức tháng?', ['Tháng 4 âm lịch (đền Phù Đổng)', 'Tháng Giêng', 'Tháng 7', 'Tháng 10'], 0, 'Hội Gióng Phù Đổng mùng 9 tháng 4 âm.'),
  ]),

  M(14, 'Làng nghề truyền thống Hà Nội — Bát Tràng', [
    Q('Bát Tràng nổi tiếng nghề?', ['Gốm sứ', 'Lụa', 'Đúc đồng', 'Tre đan'], 0, 'Bát Tràng là làng gốm cổ truyền nổi tiếng.'),
    Q('Bát Tràng thuộc huyện?', ['Gia Lâm', 'Đông Anh', 'Sóc Sơn', 'Mỹ Đức'], 0, 'Bát Tràng ở Gia Lâm, ven sông Hồng.'),
    Q('Nghề gốm Bát Tràng có từ?', ['Thế kỉ XIV–XV', 'Thế kỉ XX', 'Trước Công nguyên', 'Thời Lý'], 0, 'Bát Tràng có lịch sử khoảng 700 năm.'),
    Q('Sản phẩm gốm Bát Tràng nổi bật?', ['Đồ thờ, ấm chén, bát đĩa, tượng', 'Vải lụa', 'Đồ điện tử', 'Vũ khí'], 0, 'Gốm Bát Tràng đa dạng sản phẩm.'),
    Q('Hiện nay Bát Tràng là?', ['Điểm du lịch và trung tâm gốm sứ', 'Cảng biển', 'Sân bay', 'Khu công nghiệp nặng'], 0, 'Bát Tràng vừa sản xuất vừa du lịch.'),
  ]),

  M(15, 'Làng nghề Hà Nội — Vạn Phúc, Đông Hồ', [
    Q('Làng Vạn Phúc nổi tiếng?', ['Lụa Hà Đông', 'Gốm sứ', 'Đúc đồng', 'Tre đan'], 0, 'Lụa Vạn Phúc — Lụa Hà Đông nổi tiếng.'),
    Q('Vạn Phúc thuộc quận?', ['Hà Đông', 'Hoàn Kiếm', 'Đống Đa', 'Ba Đình'], 0, 'Vạn Phúc ở quận Hà Đông.'),
    Q('Tranh Đông Hồ thuộc tỉnh?', ['Bắc Ninh', 'Hà Nội', 'Hải Dương', 'Hưng Yên'], 0, 'Đông Hồ ở Thuận Thành, Bắc Ninh (giáp Hà Nội).'),
    Q('Tranh dân gian Hàng Trống ở?', ['Hà Nội (phố Hàng Trống)', 'Bắc Ninh', 'Hải Dương', 'Hà Tây cũ'], 0, 'Tranh Hàng Trống là tranh dân gian Hà Nội.'),
    Q('Làng nghề mây tre đan nổi tiếng Hà Nội?', ['Phú Vinh (Chương Mỹ)', 'Vạn Phúc', 'Bát Tràng', 'Đông Hồ'], 0, 'Phú Vinh — làng mây tre đan nổi tiếng.'),
  ]),

  M(16, 'Ẩm thực Hà Nội — Phở', [
    Q('Phở Hà Nội có nguồn gốc từ?', ['Đầu thế kỉ XX ở vùng Nam Định — Hà Nội', 'Thời Lý', 'Thời Trần', 'Thời Pháp thuộc'], 0, 'Phở xuất hiện đầu thế kỉ XX.'),
    Q('Phở Hà Nội đặc trưng với?', ['Nước dùng trong, bánh phở mỏng, hành lá', 'Nước đục, bánh dày', 'Sợi to', 'Không có nước dùng'], 0, 'Phở Hà Nội có nước dùng trong và thanh.'),
    Q('Phở Hà Nội có mấy loại chính?', ['2 (phở bò, phở gà)', '1 loại', '5 loại', '10 loại'], 0, 'Phở bò và phở gà là 2 loại chính.'),
    Q('Bún chả Hà Nội đặc trưng?', ['Thịt nướng chấm nước mắm chua ngọt với bún', 'Nước dùng nóng', 'Khô hoàn toàn', 'Trộn sẵn'], 0, 'Bún chả: thịt nướng + nước chấm + bún.'),
    Q('Cốm làng Vòng đặc trưng vào mùa?', ['Mùa thu', 'Mùa hè', 'Mùa đông', 'Mùa xuân'], 0, 'Cốm Vòng là đặc sản mùa thu Hà Nội.'),
  ]),

  M(17, 'Ẩm thực Hà Nội — Đặc sản khác', [
    Q('Bánh cuốn Thanh Trì nổi tiếng vì?', ['Lớp bánh mỏng, mềm', 'Nhân thịt nhiều', 'Vỏ cứng', 'Vị cay'], 0, 'Bánh cuốn Thanh Trì lớp mỏng đặc trưng.'),
    Q('Chả cá Lã Vọng là?', ['Cá nướng phục vụ với bún và rau', 'Cá kho', 'Cá hấp', 'Cá rán'], 0, 'Chả cá Lã Vọng nổi tiếng phố Chả Cá.'),
    Q('Xôi xéo Hà Nội ăn với?', ['Đậu xanh, hành phi', 'Đường', 'Thịt sống', 'Mật ong'], 0, 'Xôi xéo có đậu xanh, hành phi.'),
    Q('Bánh tôm Hồ Tây làm từ?', ['Tôm tươi + bột chiên', 'Cua', 'Cá', 'Mực'], 0, 'Bánh tôm Hồ Tây là đặc sản ven hồ.'),
    Q('Trà sen Tây Hồ ướp?', ['Sen Hồ Tây', 'Hoa nhài', 'Hoa cúc', 'Hoa lài'], 0, 'Sen Hồ Tây ướp trà tạo nên trà sen.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Năm dời đô Đại La?', ['1010', '938', '1428', '1789'], 0, 'Lý Thái Tổ dời đô năm 1010.'),
    Q('Văn Miếu xây năm?', ['1070', '1010', '1226', '1428'], 0, 'Văn Miếu xây năm 1070.'),
    Q('Hội Gióng được UNESCO công nhận?', ['Di sản phi vật thể đại diện nhân loại', 'Thiên nhiên', 'Tư liệu', 'Hỗn hợp'], 0, 'Hội Gióng là Di sản phi vật thể nhân loại (2010).'),
    Q('Bát Tràng nổi tiếng?', ['Gốm sứ', 'Lụa', 'Đúc đồng', 'Tre đan'], 0, 'Bát Tràng — gốm sứ truyền thống.'),
    Q('Phở Hà Nội có nước dùng?', ['Trong, thanh', 'Đục, đặc', 'Cay nồng', 'Ngọt như chè'], 0, 'Phở HN nước dùng trong, thanh.'),
  ]),

  // ===== HK2 — DI TÍCH, PHƯƠNG NGỮ, BẢN SẮC =====
  M(19, 'Di tích Đền Hai Bà Trưng', [
    Q('Đền Hai Bà Trưng ở Hà Nội nằm tại?', ['Mê Linh và Đồng Nhân (Hai Bà Trưng)', 'Sơn Tây', 'Đông Anh', 'Sóc Sơn'], 0, 'Đền chính ở Mê Linh — quê Hai Bà.'),
    Q('Hai Bà Trưng khởi nghĩa năm?', ['Năm 40', 'Năm 938', 'Năm 1010', 'Năm 1428'], 0, 'Khởi nghĩa năm 40 chống nhà Đông Hán.'),
    Q('Trưng Trắc xưng vương đóng đô ở?', ['Mê Linh', 'Cổ Loa', 'Hoa Lư', 'Thăng Long'], 0, 'Trưng Trắc đóng đô ở Mê Linh quê hương.'),
    Q('Câu nói nổi tiếng "Một xin rửa sạch nước thù" là của?', ['Trưng Trắc', 'Bà Triệu', 'Lý Bí', 'Mai Thúc Loan'], 0, 'Thề báo thù chồng và giải phóng đất nước.'),
    Q('Lễ hội Hai Bà Trưng tổ chức?', ['Mùng 6 tháng 2 âm lịch', '15/8 âm', '5 Tết', '1/1 dương'], 0, 'Lễ hội 6/2 âm — ngày Hai Bà khởi nghĩa.'),
  ]),

  M(20, 'Đền Cổ Loa — An Dương Vương', [
    Q('Cổ Loa thuộc huyện?', ['Đông Anh', 'Sóc Sơn', 'Gia Lâm', 'Mê Linh'], 0, 'Cổ Loa nay thuộc Đông Anh, Hà Nội.'),
    Q('Cổ Loa là kinh đô của?', ['Nước Âu Lạc (An Dương Vương)', 'Văn Lang', 'Đại Việt', 'Vạn Xuân'], 0, 'Cổ Loa là kinh đô Âu Lạc.'),
    Q('Đặc trưng của thành Cổ Loa?', ['3 vòng thành hình xoắn ốc', 'Thành vuông', 'Thành tròn', 'Không có thành'], 0, 'Thành Cổ Loa có 3 vòng xoắn ốc.'),
    Q('Truyền thuyết gắn với Cổ Loa?', ['An Dương Vương — Mỵ Châu — Trọng Thuỷ', 'Sơn Tinh Thuỷ Tinh', 'Tấm Cám', 'Thạch Sanh'], 0, 'Truyền thuyết An Dương Vương — Mỵ Châu nổi tiếng.'),
    Q('Lễ hội Cổ Loa tổ chức?', ['Mùng 6 tháng Giêng âm', 'Tháng 4', 'Tháng 8', 'Tháng 10'], 0, 'Lễ hội Cổ Loa vào tháng Giêng.'),
  ]),

  M(21, 'Đền Sóc — Phù Đổng Thiên Vương', [
    Q('Đền Sóc ở huyện?', ['Sóc Sơn', 'Gia Lâm', 'Đông Anh', 'Ba Vì'], 0, 'Đền Sóc ở núi Sóc, Sóc Sơn.'),
    Q('Đền Sóc thờ ai?', ['Thánh Gióng', 'Trần Hưng Đạo', 'Lý Thái Tổ', 'Hai Bà Trưng'], 0, 'Đền Sóc thờ Thánh Gióng (Phù Đổng Thiên Vương).'),
    Q('Theo truyền thuyết, Thánh Gióng bay về trời từ?', ['Núi Sóc (Sóc Sơn)', 'Núi Ba Vì', 'Núi Tản Viên', 'Núi Bà Đen'], 0, 'Núi Sóc là nơi Thánh Gióng bay về trời.'),
    Q('Thánh Gióng là biểu tượng của?', ['Tinh thần yêu nước chống ngoại xâm', 'Học giỏi', 'Buôn bán', 'Nông nghiệp'], 0, 'Thánh Gióng biểu tượng tinh thần yêu nước.'),
    Q('Hội Gióng đền Sóc tổ chức?', ['Tháng Giêng', 'Tháng 4', 'Tháng 8', 'Tháng 10'], 0, 'Hội Sóc tổ chức 6 tháng Giêng âm.'),
  ]),

  M(22, 'Chùa Một Cột — biểu tượng Hà Nội', [
    Q('Chùa Một Cột xây thời?', ['Lý (1049)', 'Trần', 'Lê', 'Nguyễn'], 0, 'Lý Thái Tông xây chùa Một Cột năm 1049.'),
    Q('Chùa Một Cột có hình dạng?', ['Hoa sen nở trên một cột đá', 'Tháp vuông', 'Hình lục giác', 'Hình tròn lớn'], 0, 'Chùa hình hoa sen trên một cột — độc đáo.'),
    Q('Tên chính thức của chùa?', ['Diên Hựu Tự', 'Trấn Quốc', 'Quán Sứ', 'Bộc Tự'], 0, 'Tên chính thức là Diên Hựu Tự.'),
    Q('Chùa Một Cột nằm trong quần thể?', ['Lăng Chủ tịch Hồ Chí Minh', 'Văn Miếu', 'Hoàng thành', 'Hồ Tây'], 0, 'Chùa Một Cột nằm trong khu lăng Bác.'),
    Q('Ý nghĩa hình hoa sen?', ['Sự thanh tịnh, vươn lên từ bùn lầy', 'Quyền lực', 'Chiến tranh', 'Buôn bán'], 0, 'Hoa sen biểu tượng Phật giáo — thanh khiết.'),
  ]),

  M(23, 'Chùa Trấn Quốc — chùa cổ nhất Hà Nội', [
    Q('Chùa Trấn Quốc nằm bên?', ['Hồ Tây', 'Hồ Gươm', 'Hồ Bảy Mẫu', 'Sông Hồng'], 0, 'Chùa Trấn Quốc ở Hồ Tây.'),
    Q('Chùa Trấn Quốc có lịch sử?', ['Hơn 1500 năm (từ thời Lý Nam Đế)', '100 năm', '500 năm', '2000 năm'], 0, 'Chùa lập từ thời Lý Nam Đế (thế kỉ VI).'),
    Q('Chùa Trấn Quốc có gì độc đáo?', ['Bảo tháp 11 tầng cao 15m', 'Cột đá 30m', 'Hồ nhân tạo lớn', 'Cầu vắt qua mây'], 0, 'Bảo tháp 11 tầng là điểm nhấn.'),
    Q('Chùa Trấn Quốc thờ?', ['Phật và nhiều vị thần', 'Khổng Tử', 'Lão Tử', 'Mohammed'], 0, 'Là chùa Phật giáo.'),
    Q('Phố nào nổi tiếng nhiều chùa lớn?', ['Phố Quán Sứ (chùa Quán Sứ — trụ sở Giáo hội Phật giáo)', 'Hàng Bạc', 'Hàng Đào', 'Bà Triệu'], 0, 'Quán Sứ là trụ sở Giáo hội Phật giáo VN.'),
  ]),

  M(24, 'Thành Cổ Sơn Tây', [
    Q('Thành cổ Sơn Tây xây thời?', ['Nguyễn (đầu XIX)', 'Lý', 'Trần', 'Lê'], 0, 'Thành cổ Sơn Tây xây thời Minh Mạng (1822).'),
    Q('Thành cổ Sơn Tây làm bằng?', ['Đá ong', 'Gạch', 'Bê tông', 'Gỗ'], 0, 'Đá ong là vật liệu chính.'),
    Q('Sơn Tây nay thuộc?', ['Thị xã Sơn Tây, Hà Nội', 'Tỉnh khác', 'Hoà Bình', 'Phú Thọ'], 0, 'Sơn Tây là thị xã của Hà Nội.'),
    Q('Đặc trưng kiến trúc thành cổ?', ['Vọng lâu, hào nước bao quanh', 'Không có tường', 'Không có hào', 'Mở cửa hoàn toàn'], 0, 'Vọng lâu và hào nước đặc trưng thành cổ.'),
    Q('Sơn Tây gắn với di tích nào khác?', ['Đền Và (thờ Tản Viên Sơn Thánh)', 'Văn Miếu', 'Hoàng thành', 'Cột Cờ'], 0, 'Đền Và thờ Sơn Tinh — Tản Viên.'),
  ]),

  M(25, 'Làng cổ Đường Lâm', [
    Q('Đường Lâm thuộc?', ['Sơn Tây, Hà Nội', 'Huế', 'Đà Nẵng', 'TPHCM'], 0, 'Đường Lâm ở Sơn Tây, Hà Nội.'),
    Q('Đường Lâm được biết đến là?', ['Làng cổ điển hình với nhiều nhà cổ đá ong', 'Khu công nghiệp', 'Cảng biển', 'Sân bay'], 0, 'Đường Lâm là làng cổ Việt Nam.'),
    Q('Đường Lâm có "đất hai vua" — quê hương của?', ['Ngô Quyền và Phùng Hưng', 'Lý Thái Tổ và Trần Hưng Đạo', 'Lê Lợi và Quang Trung', 'Hồ Quý Ly và Nguyễn Ánh'], 0, 'Ngô Quyền và Phùng Hưng đều quê Đường Lâm.'),
    Q('Đặc trưng nhà cổ Đường Lâm?', ['Tường đá ong, mái ngói', 'Nhà cao tầng', 'Nhà sàn', 'Lâu đài'], 0, 'Nhà cổ Đường Lâm có tường đá ong rất đẹp.'),
    Q('Đường Lâm được Bộ VH-TT-DL công nhận?', ['Di tích quốc gia làng cổ', 'Di sản thế giới', 'Khu công nghiệp', 'Khu đô thị'], 0, 'Đường Lâm là di tích quốc gia.'),
  ]),

  M(26, 'Làng nghề Hà Nội (tiếp) — Nhật Tân, Quảng Bá', [
    Q('Làng đào Nhật Tân nổi tiếng?', ['Trồng hoa đào Tết', 'Trồng lúa', 'Đúc đồng', 'Đan tre'], 0, 'Nhật Tân — hoa đào nổi tiếng cả nước.'),
    Q('Làng quất Quảng Bá nổi tiếng?', ['Trồng quất cảnh Tết', 'Trồng rau', 'Lụa', 'Gốm'], 0, 'Quảng Bá — quất cảnh nổi tiếng.'),
    Q('Làng hoa Ngọc Hà xưa nổi tiếng?', ['Trồng hoa cung cấp cho Hà Nội', 'Lúa', 'Cá', 'Đồng'], 0, 'Ngọc Hà là làng hoa truyền thống.'),
    Q('Làng nghề đúc đồng nổi tiếng ở?', ['Ngũ Xã (Ba Đình)', 'Bát Tràng', 'Vạn Phúc', 'Đường Lâm'], 0, 'Ngũ Xã — làng đúc đồng nổi tiếng.'),
    Q('Làng giấy Bưởi nổi tiếng làm?', ['Giấy dó truyền thống', 'Giấy báo', 'Giấy bao bì', 'Giấy ảnh'], 0, 'Làng Bưởi — giấy dó.'),
  ]),

  M(27, 'Phương ngữ Hà Nội', [
    Q('Phương ngữ Hà Nội thuộc?', ['Phương ngữ Bắc Bộ', 'Trung Bộ', 'Nam Bộ', 'Tây Nguyên'], 0, 'Hà Nội thuộc phương ngữ Bắc Bộ.'),
    Q('Đặc trưng giọng nói Hà Nội?', ['Nhẹ nhàng, chuẩn xác, không nặng dấu', 'Nặng, kéo dài', 'Trống vắng', 'Không có dấu'], 0, 'Giọng Hà Nội nhẹ và chuẩn xác.'),
    Q('Hà Nội từ xưa được coi là?', ['Chuẩn mực phát âm tiếng Việt', 'Nói khác hẳn', 'Khó nghe', 'Không có ý nghĩa'], 0, 'Giọng Hà Nội thường được coi là chuẩn.'),
    Q('Từ "ăn cơm" ở Hà Nội nói?', ['Như chuẩn (ăn cơm)', 'Eng com', 'En cum', 'Hoàn toàn khác'], 0, 'Người Hà Nội phát âm gần với chuẩn.'),
    Q('Văn hoá nói "thưa, dạ, vâng" được coi trọng ở?', ['Hà Nội (lịch sự, lễ phép)', 'Không ai', 'Chỉ trẻ em', 'Chỉ người già'], 0, 'Hà Nội coi trọng lễ phép trong giao tiếp.'),
  ]),

  M(28, 'Bản sắc văn hoá người Hà Nội', [
    Q('Người Hà Nội được biết đến với?', ['Sự thanh lịch, văn minh, lễ phép', 'Thô lỗ', 'Vô lễ', 'Lạnh nhạt'], 0, '"Chẳng thơm cũng thể hoa nhài / Dẫu không thanh lịch cũng người Tràng An".'),
    Q('Câu "Chẳng thơm cũng thể hoa nhài" nói về?', ['Người Hà Nội (Tràng An)', 'Người Huế', 'Người Sài Gòn', 'Người Đà Nẵng'], 0, 'Câu ca dao đề cao thanh lịch người Tràng An — Hà Nội.'),
    Q('Trang phục truyền thống của người Hà Nội xưa?', ['Áo dài (nữ), áo the khăn xếp (nam)', 'Đồ tây', 'Đồ ngắn', 'Đồ thể thao'], 0, 'Áo dài và áo the là truyền thống.'),
    Q('Lối sống của người Hà Nội xưa coi trọng?', ['Gia đình, lễ nghĩa, tri thức', 'Vật chất', 'Hào nhoáng', 'Phô trương'], 0, 'Người HN coi trọng tinh thần, gia đình, học vấn.'),
    Q('Hà Nội được mệnh danh là?', ['"Thành phố vì hoà bình"', 'Thủ đô công nghiệp', 'Trung tâm tài chính lớn nhất', 'Cảng biển lớn'], 0, 'UNESCO trao danh hiệu "Thành phố vì hoà bình" năm 1999.'),
  ]),

  M(29, 'Đình làng Việt — Đình Tây Đằng', [
    Q('Đình làng có vai trò?', ['Nơi thờ Thành hoàng và sinh hoạt cộng đồng', 'Chỉ để chơi', 'Chỉ thờ tổ tiên', 'Khu công nghiệp'], 0, 'Đình thờ Thành hoàng và sinh hoạt cộng đồng.'),
    Q('Đình Tây Đằng ở?', ['Ba Vì, Hà Nội', 'Sơn Tây', 'Đông Anh', 'Mê Linh'], 0, 'Đình Tây Đằng ở Ba Vì.'),
    Q('Đình Tây Đằng nổi tiếng vì?', ['Là đình cổ nhất còn lại ở Việt Nam (thế kỉ XV)', 'Mới xây nhất', 'Lớn nhất', 'Cao nhất'], 0, 'Đình Tây Đằng là một trong những đình cổ nhất.'),
    Q('Kiến trúc đình làng đặc trưng?', ['Mái cong, cột gỗ lớn, chạm khắc tinh xảo', 'Bê tông cốt thép', 'Kính', 'Kim loại'], 0, 'Đình làng đặc trưng với gỗ và mái cong.'),
    Q('Thành hoàng làng thường là?', ['Vị anh hùng, tổ nghề, thần linh có công với làng', 'Người ngoài', 'Kẻ thù', 'Người không liên quan'], 0, 'Thành hoàng là vị có công được dân tôn thờ.'),
  ]),

  M(30, 'Bảo tàng Hà Nội', [
    Q('Bảo tàng Hà Nội nằm ở?', ['Phạm Hùng (Nam Từ Liêm)', 'Hoàn Kiếm', 'Ba Đình', 'Đống Đa'], 0, 'Bảo tàng Hà Nội ở đường Phạm Hùng.'),
    Q('Bảo tàng Hà Nội khánh thành năm?', ['2010 (Đại lễ 1000 năm Thăng Long)', '2000', '1990', '2020'], 0, 'Khánh thành dịp Đại lễ 1000 năm Thăng Long.'),
    Q('Bảo tàng Lịch sử Quân sự VN ở?', ['Điện Biên Phủ, Ba Đình', 'Hoàn Kiếm', 'Đống Đa', 'Cầu Giấy'], 0, 'Trên đường Điện Biên Phủ, Ba Đình.'),
    Q('Bảo tàng Dân tộc học VN trưng bày?', ['Văn hoá 54 dân tộc VN', 'Quân sự', 'Lịch sử', 'Khoa học'], 0, 'Bảo tàng Dân tộc học trưng bày văn hoá các dân tộc.'),
    Q('Hà Nội có nhiều bảo tàng vì?', ['Là thủ đô — trung tâm văn hoá lịch sử', 'Không có lý do', 'Tình cờ', 'Du lịch'], 0, 'Hà Nội là trung tâm văn hoá lịch sử cả nước.'),
  ]),

  M(31, 'Khu di tích Chủ tịch Hồ Chí Minh', [
    Q('Khu di tích Bác Hồ ở?', ['Quảng trường Ba Đình', 'Hồ Tây', 'Hồ Gươm', 'Sân bay'], 0, 'Khu di tích Bác Hồ ở Ba Đình.'),
    Q('Lăng Chủ tịch Hồ Chí Minh khánh thành?', ['Năm 1975', '1969', '1945', '1985'], 0, 'Lăng khánh thành ngày 29/8/1975.'),
    Q('Khu di tích gồm?', ['Lăng Bác, nhà sàn, ao cá, vườn', 'Chỉ lăng', 'Chỉ nhà sàn', 'Chỉ vườn'], 0, 'Quần thể nhiều di tích.'),
    Q('Quảng trường Ba Đình là nơi Bác Hồ?', ['Đọc Tuyên ngôn Độc lập (2/9/1945)', 'Sinh ra', 'Tiếp khách', 'Họp gia đình'], 0, 'Ngày 2/9/1945 Bác đọc Tuyên ngôn Độc lập tại Ba Đình.'),
    Q('Nhà sàn Bác Hồ phản ánh?', ['Lối sống giản dị, thanh bạch', 'Cuộc sống xa hoa', 'Cuộc sống cô đơn', 'Không có ý nghĩa'], 0, 'Nhà sàn thể hiện lối sống giản dị của Bác.'),
  ]),

  M(32, 'Hà Nội ngày nay — đô thị hoá', [
    Q('Hà Nội mở rộng địa giới năm?', ['2008', '1954', '1975', '2020'], 0, 'Năm 2008 sáp nhập Hà Tây.'),
    Q('Diện tích Hà Nội hiện?', ['~3 359 km²', '~1000 km²', '~5000 km²', '~10000 km²'], 0, '~3 359 km² sau 2008.'),
    Q('Hà Nội có bao nhiêu quận?', ['12 quận', '5', '20', '30'], 0, 'Hà Nội có 12 quận nội thành.'),
    Q('Thị xã duy nhất của Hà Nội?', ['Sơn Tây', 'Hà Đông', 'Long Biên', 'Hoàng Mai'], 0, 'Sơn Tây là thị xã duy nhất.'),
    Q('Vấn đề lớn của đô thị Hà Nội?', ['Ô nhiễm không khí, tắc đường, dân số đông', 'Quá ít người', 'Không có giao thông', 'Tốt hoàn hảo'], 0, 'Hà Nội đối mặt nhiều vấn đề đô thị lớn.'),
  ]),

  M(33, 'Trách nhiệm bảo vệ di sản Hà Nội', [
    Q('Là HS Hà Nội, em có thể bảo vệ di sản bằng?', ['Tìm hiểu, giữ vệ sinh, giới thiệu với bạn bè', 'Phá hoại', 'Vẽ bậy', 'Mặc kệ'], 0, 'HS có thể bảo vệ di sản bằng nhiều cách phù hợp.'),
    Q('Khi tham quan di tích, em nên?', ['Tuân thủ nội quy, không xả rác', 'Vẽ kỉ niệm', 'Bẻ cây', 'Ồn ào'], 0, 'Tuân thủ nội quy là bảo vệ di sản.'),
    Q('Hành vi nào VI PHẠM bảo vệ di sản?', ['Vẽ tên lên tường di tích', 'Quét dọn', 'Trồng cây', 'Quảng bá'], 0, 'Vẽ bậy là vi phạm nghiêm trọng.'),
    Q('Vì sao cần bảo vệ phố cổ?', ['Là di sản kiến trúc và văn hoá độc đáo', 'Để cản trở đô thị hoá', 'Không cần thiết', 'Tốn tiền'], 0, 'Phố cổ là di sản quý của Hà Nội.'),
    Q('Cách giới thiệu Hà Nội cho bạn bè quốc tế?', ['Đưa đi tham quan di tích, giới thiệu ẩm thực — văn hoá', 'Không cần giới thiệu', 'Chỉ đưa đi ăn fast food', 'Chỉ đưa đi mua sắm'], 0, 'Giới thiệu di sản và ẩm thực Hà Nội cho khách.'),
  ]),

  M(34, 'Tổng kết — Hà Nội xưa và nay', [
    Q('Hà Nội có lịch sử trên?', ['1000 năm (từ 1010)', '500 năm', '100 năm', '200 năm'], 0, 'Hà Nội — Thăng Long có lịch sử trên 1000 năm.'),
    Q('Hà Nội là thủ đô từ năm?', ['1010 (Thăng Long) và 1945 (CHXHCN)', '500', '1000', '2000'], 0, 'Thăng Long là thủ đô từ 1010 và HN thủ đô CHXHCN VN từ 1945.'),
    Q('Di sản UNESCO của Hà Nội?', ['Hoàng thành Thăng Long, bia tiến sĩ Văn Miếu, Hội Gióng', 'Vịnh Hạ Long', 'Phố cổ Hội An', 'Cố đô Huế'], 0, 'HN có 3 di sản UNESCO chính: HTTL, bia VM, Hội Gióng.'),
    Q('Hà Nội được UNESCO trao danh hiệu?', ['Thành phố vì hoà bình (1999)', 'Thủ đô tài chính', 'Thành phố công nghiệp', 'Cảng biển lớn'], 0, 'UNESCO trao "Thành phố vì hoà bình" năm 1999.'),
    Q('Bản sắc người Hà Nội?', ['Thanh lịch, văn minh', 'Thô lỗ', 'Lạnh lùng', 'Vô lễ'], 0, 'Thanh lịch — văn minh là nét đặc trưng của người Hà Nội.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Lý Thái Tổ dời đô năm?', ['1010', '938', '1428', '1789'], 0, 'Năm 1010 — dời đô về Đại La, đổi tên Thăng Long.'),
    Q('Văn Miếu xây thời?', ['Lý (1070)', 'Trần', 'Lê', 'Nguyễn'], 0, 'Lý Thánh Tông xây 1070.'),
    Q('Hội Gióng tổ chức ở?', ['Phù Đổng (Gia Lâm) và Sóc Sơn', 'Cố đô Huế', 'Hội An', 'Bắc Ninh'], 0, 'Hội Gióng tổ chức ở Phù Đổng và Sóc Sơn.'),
    Q('Bát Tràng nổi tiếng?', ['Gốm sứ', 'Lụa', 'Đúc đồng', 'Tre đan'], 0, 'Bát Tràng — làng gốm cổ.'),
    Q('Phở Hà Nội đặc trưng?', ['Nước dùng trong, bánh phở mỏng, thanh', 'Nước đục đặc', 'Cay nồng', 'Mặn chát'], 0, 'Phở HN nổi tiếng nước dùng trong và thanh.'),
  ]),
];

export const S7GDDP_SCENARIOS = indexBy(S7GDDP_WEEKS);
