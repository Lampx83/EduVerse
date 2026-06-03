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
    Q('Năm nào Lý Công Uẩn dời đô về Đại La?', ['1226', '1428', '1010', '938'], 2, 'Lý Thái Tổ dời đô năm 1010 và đổi tên Thăng Long.'),
    Q('"Chiếu dời đô" do ai viết?', ['Nguyễn Trãi', 'Trần Hưng Đạo', 'Lê Lợi', 'Lý Công Uẩn'], 3, '"Chiếu dời đô" do chính Lý Thái Tổ ban.'),
    Q('Lý do chính chọn Đại La làm kinh đô?', ['Vị trí trung tâm, đất bằng, sông núi tụ hội', 'Ở vùng núi cao', 'Có biển', 'Gần biên giới'], 0, 'Đại La có vị trí thuận lợi để phát triển kinh tế, an ninh.'),
    Q('Kinh đô Thăng Long thời Lý có bao nhiêu vòng thành?', ['2', '1', '3 (Cấm thành, Hoàng thành, Đại La thành)', '5'], 2, 'Thăng Long có 3 vòng thành: cấm thành — hoàng thành — đại la thành.'),
    Q('Quốc hiệu Đại Việt được đặt vào năm?', ['1054', '1226', '1010', '1400'], 0, 'Năm 1054, Lý Thánh Tông đổi quốc hiệu là Đại Việt.'),
  ]),

  M(2, 'Văn Miếu — Quốc Tử Giám: Trường đại học đầu tiên Việt Nam', [
    Q('Văn Miếu được xây năm?', ['1070', '1226', '1010', '1428'], 0, 'Lý Thánh Tông xây Văn Miếu năm 1070 thờ Khổng Tử.'),
    Q('Quốc Tử Giám được lập năm?', ['1010', '1070', '1076', '1428'], 2, 'Quốc Tử Giám lập năm 1076 thời Lý Nhân Tông.'),
    Q('Quốc Tử Giám ban đầu dạy cho?', ['Toàn dân', 'Chỉ thợ thủ công', 'Con vua quan', 'Chỉ phụ nữ'], 2, 'Ban đầu chỉ dạy con vua quan, sau mở rộng nhân tài.'),
    Q('Bia Tiến sĩ Văn Miếu khắc tên?', ['Thầy thuốc', 'Các tiến sĩ qua các khoa thi', 'Vua chúa', 'Tướng lĩnh'], 1, 'Khắc tên 1307 tiến sĩ qua 82 khoa thi.'),
    Q('Khuê Văn Các xây thời nào?', ['Thời Nguyễn (1805)', 'Thời Pháp thuộc', 'Thời Trần', 'Thời Lý'], 0, 'Khuê Văn Các xây năm 1805 thời Gia Long.'),
  ]),

  M(3, 'Hoàng thành Thăng Long — di sản thế giới', [
    Q('Hoàng thành Thăng Long được UNESCO công nhận năm?', ['2010', '2008', '2015', '2000'], 0, 'UNESCO công nhận năm 2010 — dịp Đại lễ 1000 năm.'),
    Q('Cổng phía Nam Hoàng thành tên gì?', ['Đông Môn', 'Bắc Môn', 'Đoan Môn', 'Tây Môn'], 2, 'Đoan Môn là cổng phía Nam còn nguyên vẹn.'),
    Q('Cuộc khai quật 18 Hoàng Diệu phát lộ điều gì?', ['Văn Miếu', 'Nền móng cung điện Lý — Trần — Lê', 'Lăng vua Hùng', 'Sông cổ'], 1, 'Khai quật 2002–2004 phát lộ dấu tích các triều đại.'),
    Q('Cột Cờ Hà Nội xây thời nào?', ['Thời Nguyễn (đầu XIX)', 'Thời Pháp', 'Thời Trần', 'Thời Lý'], 0, 'Cột Cờ xây năm 1812 thời Gia Long.'),
    Q('Điện Kính Thiên là?', ['Trại lính', 'Kho lương', 'Điện chính nơi vua thiết triều thời Lê', 'Nhà ăn'], 2, 'Điện Kính Thiên là nơi vua thiết triều.'),
  ]),

  M(4, 'Hà Nội thời Trần — chống Mông Nguyên', [
    Q('Triều Trần ba lần đánh thắng quân Mông — Nguyên vào các năm?', ['1010, 1077, 1288', '938, 1010, 1226', '1428, 1789, 1858', '1258, 1285, 1288'], 3, 'Ba lần kháng chiến chống Mông — Nguyên thắng lợi.'),
    Q('Người tổng chỉ huy là?', ['Lê Lợi', 'Quang Trung', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], 3, 'Trần Quốc Tuấn — Hưng Đạo Vương — Đại Vương quân sự.'),
    Q('"Hịch tướng sĩ" do ai soạn?', ['Nguyễn Trãi', 'Lý Thường Kiệt', 'Trần Hưng Đạo', 'Lê Lợi'], 2, 'Trần Hưng Đạo soạn để khích lệ binh sĩ.'),
    Q('Hội nghị Diên Hồng tổ chức ở Thăng Long, các bô lão đồng thanh?', ['"Đầu hàng"', '"Hoà!"', '"Cống nạp"', '"Đánh!"'], 3, 'Các bô lão đồng thanh "Đánh!" tại Hội nghị Diên Hồng.'),
    Q('Vị vua nào lãnh đạo cuộc kháng chiến 1285?', ['Trần Nhân Tông', 'Trần Dụ Tông', 'Trần Anh Tông', 'Trần Thái Tông'], 0, 'Trần Nhân Tông là vua lãnh đạo kháng chiến lần 2 và 3.'),
  ]),

  M(5, 'Thăng Long thời Lê sơ', [
    Q('Sau khi đánh tan quân Minh (1428), Lê Lợi đóng đô ở?', ['Phú Xuân', 'Hoa Lư', 'Lam Kinh', 'Đông Đô (Thăng Long)'], 3, 'Đông Đô (Thăng Long) là kinh đô chính.'),
    Q('Lê Lợi đổi tên Thăng Long thành?', ['Đại La', 'Đông Đô', 'Đông Kinh', 'Đông Quan'], 2, 'Năm 1430, Lê Lợi đổi Đông Đô thành Đông Kinh.'),
    Q('Vị vua Lê nào nổi tiếng cải cách lớn?', ['Lê Thánh Tông', 'Lê Lợi', 'Lê Hiển Tông', 'Lê Nhân Tông'], 0, 'Lê Thánh Tông (1460–1497) — minh quân vĩ đại.'),
    Q('Bộ luật Hồng Đức ban hành thời?', ['Trần Hưng Đạo', 'Nguyễn Trãi', 'Lê Thánh Tông', 'Lê Lợi'], 2, 'Luật Hồng Đức là bộ luật tiến bộ thời Lê Thánh Tông.'),
    Q('Văn Miếu được tu sửa lớn thời?', ['Lê Thánh Tông (dựng bia tiến sĩ đầu tiên 1484)', 'Trần Nhân Tông', 'Quang Trung', 'Lý Thái Tổ'], 0, 'Năm 1484, Lê Thánh Tông cho dựng bia tiến sĩ đầu tiên.'),
  ]),

  M(6, 'Phố cổ Hà Nội — 36 phố phường', [
    Q('Khu phố cổ Hà Nội còn gọi là?', ['Khu mới', 'Khu chợ lớn', 'Khu công nghiệp', '36 phố phường'], 3, '"Hà Nội 36 phố phường" là tên truyền thống.'),
    Q('Chữ "Hàng" trong tên phố cổ chỉ?', ['Loại hàng hoá bán ở phố đó', 'Tên cây', 'Số nhà', 'Tên người'], 0, 'Mỗi phố tập trung 1 nghề/mặt hàng.'),
    Q('Phố Hàng Bạc nổi tiếng?', ['Vải lụa', 'Đồ gốm sứ tráng men', 'Chế tác kim hoàn (bạc, vàng)', 'Hoa quả'], 2, 'Hàng Bạc chuyên chế tác kim hoàn.'),
    Q('Phố Hàng Đào nổi tiếng?', ['Giấy dó, sách Nho', 'Chế tác bạc nén', 'Đồ đồng đúc', 'Vải lụa, tơ tằm'], 3, 'Hàng Đào chuyên buôn vải lụa.'),
    Q('Đặc trưng kiến trúc nhà phố cổ?', ['Nhà cao tầng', 'Nhà ống mặt tiền hẹp, chiều sâu lớn', 'Nhà sàn', 'Lâu đài'], 1, 'Nhà ống: mặt tiền 3–5m, chiều sâu lớn.'),
  ]),

  M(7, 'Danh nhân Hà Nội — Chu Văn An', [
    Q('Chu Văn An là?', ['Nhà giáo, hiệu trưởng Quốc Tử Giám thời Trần', 'Tướng quân', 'Thầy thuốc', 'Nhà thơ, quan đại thần triều Lê'], 0, 'Chu Văn An — "Vạn thế sư biểu".'),
    Q('Tác phẩm nổi tiếng của Chu Văn An?', ['Bình Ngô đại cáo', 'Thất trảm sớ — đề nghị chém 7 nịnh thần', 'Truyện Kiều', 'Hịch tướng sĩ'], 1, '"Thất trảm sớ" thể hiện khí phách của ông.'),
    Q('Quê hương Chu Văn An nay thuộc?', ['Đà Nẵng', 'Thanh Trì, Hà Nội', 'Chí Linh, Hải Dương', 'Kinh Bắc, Bắc Ninh'], 1, 'Làng Văn Thôn (nay là Thanh Liệt, Thanh Trì, Hà Nội).'),
    Q('Vai trò của Chu Văn An?', ['Nhà thám hiểm', 'Nhà quân sự', 'Bậc thầy của nền giáo dục Việt Nam', 'Diễn viên'], 2, 'Ông được tôn là bậc thầy muôn đời.'),
    Q('Tên Chu Văn An ngày nay được đặt cho?', ['Cảng biển', 'Sân bay', 'Bệnh viện', 'Nhiều trường học khắp cả nước'], 3, 'Tên ông được đặt cho nhiều trường danh tiếng.'),
  ]),

  M(8, 'Danh nhân Hà Nội — Nguyễn Trãi', [
    Q('Nguyễn Trãi sinh năm?', ['1226', '1010', '1380', '1442'], 2, 'Nguyễn Trãi sinh năm 1380.'),
    Q('Nguyễn Trãi là quân sư của ai?', ['Lý Thường Kiệt', 'Lê Lợi (khởi nghĩa Lam Sơn)', 'Trần Hưng Đạo', 'Quang Trung'], 1, 'Nguyễn Trãi là quân sư của Lê Lợi.'),
    Q('Tác phẩm vĩ đại của Nguyễn Trãi?', ['"Nam quốc sơn hà"', '"Bình Ngô đại cáo"', '"Truyện Kiều"', '"Hịch tướng sĩ"'], 1, '"Bình Ngô đại cáo" — bản tuyên ngôn độc lập thứ 2.'),
    Q('Nguyễn Trãi được UNESCO công nhận là?', ['Nhà khoa học', 'Thủ tướng', 'Danh nhân văn hoá thế giới (1980)', 'Hoàng đế'], 2, 'UNESCO công nhận 1980 nhân 600 năm sinh.'),
    Q('Vụ án oan của Nguyễn Trãi là?', ['Án trộm cắp', 'Án tử chiến tranh', 'Án phản bội', 'Án oan Lệ Chi Viên (1442)'], 3, 'Án oan Lệ Chi Viên khiến cả họ ông bị tru di.'),
  ]),

  M(9, 'Danh nhân Hà Nội — Lý Thường Kiệt', [
    Q('Lý Thường Kiệt là vị tướng thời nào?', ['Nguyễn', 'Lý', 'Trần', 'Tiền Lê'], 1, 'Lý Thường Kiệt là tướng thời Lý.'),
    Q('Chiến công vang dội của Lý Thường Kiệt?', ['Đánh Minh', 'Đánh Mông Nguyên', 'Đánh Thanh', 'Đánh tan quân Tống xâm lược 1075–1077'], 3, 'Ông chỉ huy kháng chiến chống Tống thắng lợi.'),
    Q('Phòng tuyến nào nổi tiếng của Lý Thường Kiệt?', ['Chi Lăng', 'Ngọc Hồi', 'Phòng tuyến sông Như Nguyệt', 'Bạch Đằng'], 2, 'Phòng tuyến Như Nguyệt (sông Cầu) chặn Tống.'),
    Q('Bài thơ thần "Nam quốc sơn hà" được cho là của?', ['Nguyễn Trãi', 'Hồ Quý Ly', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], 2, '"Nam quốc sơn hà" — bản tuyên ngôn độc lập đầu tiên.'),
    Q('Chiến lược nổi tiếng "tiên phát chế nhân" có nghĩa?', ['Cầu hoà', 'Đầu hàng', 'Phòng thủ', 'Chủ động tấn công trước'], 3, '"Tiên phát chế nhân" = đánh phủ đầu.'),
  ]),

  M(10, 'Đền Ngọc Sơn — Hồ Hoàn Kiếm', [
    Q('Hồ Hoàn Kiếm còn gọi là?', ['Hồ Trúc Bạch', 'Hồ Bảy Mẫu', 'Hồ Tây', 'Hồ Gươm'], 3, 'Hồ Gươm là tên dân gian.'),
    Q('Truyền thuyết Hồ Gươm gắn với ai?', ['An Dương Vương', 'Trần Hưng Đạo', 'Lý Thái Tổ dời đô', 'Vua Lê Lợi trả gươm cho rùa thần'], 3, 'Lê Lợi trả gươm → tên Hồ Hoàn Kiếm.'),
    Q('Đền Ngọc Sơn thờ ai?', ['Quang Trung', 'Lý Thái Tổ', 'Bác Hồ', 'Văn Xương đế quân và Trần Hưng Đạo'], 3, 'Đền thờ Văn Xương + Trần Hưng Đạo.'),
    Q('Cầu nối ra đền Ngọc Sơn?', ['Cầu Thê Húc', 'Cầu Long Biên', 'Cầu Nhật Tân', 'Cầu Chương Dương'], 0, 'Cầu Thê Húc sơn đỏ nổi tiếng.'),
    Q('Tháp Rùa ở giữa hồ xây thời?', ['Thời Lê', 'Thời Trần', 'Cuối XIX (Bá Hộ Kim)', 'Thời Lý'], 2, 'Tháp Rùa xây cuối XIX bởi Bá Hộ Kim.'),
  ]),

  M(11, 'Lễ hội chùa Hương', [
    Q('Lễ hội chùa Hương ở huyện nào?', ['Thạch Thất', 'Chương Mỹ', 'Phú Xuyên', 'Mỹ Đức'], 3, 'Chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.'),
    Q('Lễ hội chùa Hương kéo dài?', ['Một ngày', 'Từ tháng 1 đến tháng 3 âm lịch', 'Cả năm', 'Một tuần'], 1, 'Lễ hội kéo dài hơn 2 tháng.'),
    Q('Phương tiện đến chùa Hương qua suối Yến?', ['Cáp treo (gần đây cũng có)', 'Xe máy', 'Đò gỗ', 'Đi bộ duy nhất'], 2, 'Đò trên suối Yến — Cáp treo có thêm sau này.'),
    Q('Động Hương Tích được mệnh danh?', ['"Nam thiên đệ nhất động"', '"Đệ nhất danh thắng Bắc Hà"', 'Nóc nhà', 'Hoàng thành'], 0, '"Nam thiên đệ nhất động" — chữ của chúa Trịnh.'),
    Q('Lễ hội chùa Hương thuộc tín ngưỡng?', ['Phật giáo', 'Thiên Chúa giáo', 'Hồi giáo', 'Đạo giáo'], 0, 'Chùa Hương là quần thể Phật giáo lớn.'),
  ]),

  M(12, 'Lễ hội Gò Đống Đa', [
    Q('Lễ hội Gò Đống Đa tổ chức ngày?', ['1/1 dương lịch', '10/10 dương lịch', 'Mùng 5 Tết âm lịch', '15/8 âm lịch'], 2, 'Mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi — Đống Đa.'),
    Q('Lễ hội tưởng nhớ chiến thắng nào?', ['Vạn Tường', 'Bạch Đằng', 'Chi Lăng', 'Quang Trung đại phá quân Thanh Tết Kỷ Dậu 1789'], 3, 'Chiến thắng Ngọc Hồi — Đống Đa năm 1789.'),
    Q('Quân Thanh do ai chỉ huy bị đánh bại?', ['Ô Mã Nhi', 'Tôn Sĩ Nghị', 'Hứa Thế Hanh', 'Lư Hán'], 1, 'Tôn Sĩ Nghị là tổng chỉ huy quân Thanh.'),
    Q('Gò Đống Đa nay thuộc quận?', ['Hai Bà Trưng', 'Hoàn Kiếm', 'Ba Đình', 'Đống Đa'], 3, 'Gò Đống Đa thuộc quận Đống Đa.'),
    Q('Nghi lễ chính của hội?', ['Bắn cung', 'Đua thuyền', 'Tế lễ, rước kiệu, đánh trận giả', 'Đấu vật'], 2, 'Lễ hội có rước kiệu và tái hiện trận đánh.'),
  ]),

  M(13, 'Hội Gióng — Di sản phi vật thể', [
    Q('Hội Gióng đền Phù Đổng tổ chức ở?', ['Đông Anh', 'Long Biên, Hà Nội', 'Gia Lâm, Hà Nội', 'Sóc Sơn'], 2, 'Đền Phù Đổng ở Gia Lâm.'),
    Q('Hội Gióng đền Sóc tổ chức ở?', ['Sóc Sơn', 'Đông Anh', 'Gia Lâm', 'Mê Linh'], 0, 'Đền Sóc ở Sóc Sơn.'),
    Q('Hội Gióng thờ ai?', ['Trần Hưng Đạo', 'Thánh Gióng (Phù Đổng Thiên Vương)', 'An Dương Vương', 'Hai Bà Trưng'], 1, 'Thánh Gióng — Phù Đổng Thiên Vương.'),
    Q('Hội Gióng được UNESCO công nhận năm?', ['2000', '2010', '2015', '2008'], 1, 'Năm 2010 — Di sản phi vật thể đại diện nhân loại.'),
    Q('Hội Gióng tổ chức tháng?', ['Tháng 4 âm lịch (đền Phù Đổng)', 'Tháng Giêng', 'Tháng 10', 'Tháng 7'], 0, 'Hội Gióng Phù Đổng mùng 9 tháng 4 âm.'),
  ]),

  M(14, 'Làng nghề truyền thống Hà Nội — Bát Tràng', [
    Q('Bát Tràng nổi tiếng nghề?', ['Đúc đồng', 'Gốm sứ', 'Dệt lụa tơ tằm', 'Tre đan'], 1, 'Bát Tràng là làng gốm cổ truyền nổi tiếng.'),
    Q('Bát Tràng thuộc huyện?', ['Gia Lâm', 'Mỹ Đức', 'Đông Anh', 'Sóc Sơn'], 0, 'Bát Tràng ở Gia Lâm, ven sông Hồng.'),
    Q('Nghề gốm Bát Tràng có từ?', ['Thế kỉ XIV–XV', 'Thời Lý', 'Trước Công nguyên', 'Thế kỉ XX'], 0, 'Bát Tràng có lịch sử khoảng 700 năm.'),
    Q('Sản phẩm gốm Bát Tràng nổi bật?', ['Vũ khí', 'Đồ điện tử', 'Vải lụa', 'Đồ thờ, ấm chén, bát đĩa, tượng'], 3, 'Gốm Bát Tràng đa dạng sản phẩm.'),
    Q('Hiện nay Bát Tràng là?', ['Điểm du lịch và trung tâm gốm sứ', 'Khu công nghiệp nặng', 'Sân bay', 'Cảng biển'], 0, 'Bát Tràng vừa sản xuất vừa du lịch.'),
  ]),

  M(15, 'Làng nghề Hà Nội — Vạn Phúc, Đông Hồ', [
    Q('Làng Vạn Phúc nổi tiếng?', ['Đúc đồng', 'Gốm sứ', 'Tre đan', 'Lụa Hà Đông'], 3, 'Lụa Vạn Phúc — Lụa Hà Đông nổi tiếng.'),
    Q('Vạn Phúc thuộc quận?', ['Hà Đông', 'Đống Đa', 'Ba Đình', 'Hoàn Kiếm'], 0, 'Vạn Phúc ở quận Hà Đông.'),
    Q('Tranh Đông Hồ thuộc tỉnh?', ['Hải Dương', 'Hưng Yên', 'Bắc Ninh', 'Hà Nội'], 2, 'Đông Hồ ở Thuận Thành, Bắc Ninh (giáp Hà Nội).'),
    Q('Tranh dân gian Hàng Trống ở?', ['Bắc Ninh', 'Hải Dương', 'Hà Tây cũ', 'Hà Nội (phố Hàng Trống)'], 3, 'Tranh Hàng Trống là tranh dân gian Hà Nội.'),
    Q('Làng nghề mây tre đan nổi tiếng Hà Nội?', ['Vạn Phúc', 'Đông Hồ', 'Bát Tràng', 'Phú Vinh (Chương Mỹ)'], 3, 'Phú Vinh — làng mây tre đan nổi tiếng.'),
  ]),

  M(16, 'Ẩm thực Hà Nội — Phở', [
    Q('Phở Hà Nội có nguồn gốc từ?', ['Thời Trần', 'Thời Lý', 'Đầu thế kỉ XX ở vùng Nam Định — Hà Nội', 'Thời Pháp thuộc'], 2, 'Phở xuất hiện đầu thế kỉ XX.'),
    Q('Phở Hà Nội đặc trưng với?', ['Nước dùng trong, bánh phở mỏng, hành lá', 'Sợi to', 'Không có nước dùng', 'Nước đục, bánh dày'], 0, 'Phở Hà Nội có nước dùng trong và thanh.'),
    Q('Phở Hà Nội có mấy loại chính?', ['2 (phở bò, phở gà)', '5 loại', '10 loại', '1 loại'], 0, 'Phở bò và phở gà là 2 loại chính.'),
    Q('Bún chả Hà Nội đặc trưng?', ['Thịt nướng chấm nước mắm chua ngọt với bún', 'Khô hoàn toàn', 'Trộn sẵn', 'Nước dùng nóng'], 0, 'Bún chả: thịt nướng + nước chấm + bún.'),
    Q('Cốm làng Vòng đặc trưng vào mùa?', ['Mùa thu', 'Mùa đông', 'Mùa hè', 'Mùa xuân'], 0, 'Cốm Vòng là đặc sản mùa thu Hà Nội.'),
  ]),

  M(17, 'Ẩm thực Hà Nội — Đặc sản khác', [
    Q('Bánh cuốn Thanh Trì nổi tiếng vì?', ['Vỏ cứng', 'Vị cay', 'Nhân thịt nhiều', 'Lớp bánh mỏng, mềm'], 3, 'Bánh cuốn Thanh Trì lớp mỏng đặc trưng.'),
    Q('Chả cá Lã Vọng là?', ['Cá hấp', 'Cá kho', 'Cá rán', 'Cá nướng phục vụ với bún và rau'], 3, 'Chả cá Lã Vọng nổi tiếng phố Chả Cá.'),
    Q('Xôi xéo Hà Nội ăn với?', ['Đậu xanh, hành phi', 'Ruốc bông, lạp xưởng', 'Mật ong', 'Thịt sống'], 0, 'Xôi xéo có đậu xanh, hành phi.'),
    Q('Bánh tôm Hồ Tây làm từ?', ['Cá quả tươi, bột chiên', 'Mực ống, bột năng', 'Thịt cua đồng xay nhuyễn', 'Tôm tươi + bột chiên'], 3, 'Bánh tôm Hồ Tây là đặc sản ven hồ.'),
    Q('Trà sen Tây Hồ ướp?', ['Hoa nhài', 'Hoa lài', 'Sen Hồ Tây', 'Hoa cúc'], 2, 'Sen Hồ Tây ướp trà tạo nên trà sen.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Năm dời đô Đại La?', ['938', '1789', '1428', '1010'], 3, 'Lý Thái Tổ dời đô năm 1010.'),
    Q('Văn Miếu xây năm?', ['1226', '1010', '1428', '1070'], 3, 'Văn Miếu xây năm 1070.'),
    Q('Hội Gióng được UNESCO công nhận?', ['Hỗn hợp', 'Thiên nhiên', 'Di sản phi vật thể đại diện nhân loại', 'Tư liệu'], 2, 'Hội Gióng là Di sản phi vật thể nhân loại (2010).'),
    Q('Bát Tràng nổi tiếng?', ['Đúc đồng', 'Tre đan', 'Gốm sứ', 'Đúc tượng đồng'], 2, 'Bát Tràng — gốm sứ truyền thống.'),
    Q('Phở Hà Nội có nước dùng?', ['Đục, đặc', 'Cay nồng', 'Trong, thanh', 'Ngọt như chè'], 2, 'Phở HN nước dùng trong, thanh.'),
  ]),

  // ===== HK2 — DI TÍCH, PHƯƠNG NGỮ, BẢN SẮC =====
  M(19, 'Di tích Đền Hai Bà Trưng', [
    Q('Đền Hai Bà Trưng ở Hà Nội nằm tại?', ['Mê Linh và Đồng Nhân (Hai Bà Trưng)', 'Đông Anh', 'Sóc Sơn', 'Sơn Tây'], 0, 'Đền chính ở Mê Linh — quê Hai Bà.'),
    Q('Hai Bà Trưng khởi nghĩa năm?', ['Năm 40', 'Năm 1428', 'Năm 1010', 'Năm 938'], 0, 'Khởi nghĩa năm 40 chống nhà Đông Hán.'),
    Q('Trưng Trắc xưng vương đóng đô ở?', ['Hoa Lư', 'Thăng Long', 'Mê Linh', 'Cổ Loa'], 2, 'Trưng Trắc đóng đô ở Mê Linh quê hương.'),
    Q('Câu nói nổi tiếng "Một xin rửa sạch nước thù" là của?', ['Triệu Quang Phục', 'Bà Triệu', 'Trưng Trắc', 'Mai Thúc Loan'], 2, 'Thề báo thù chồng và giải phóng đất nước.'),
    Q('Lễ hội Hai Bà Trưng tổ chức?', ['Mùng 6 tháng 2 âm lịch', '5 Tết', '1/1 dương', '15/8 âm'], 0, 'Lễ hội 6/2 âm — ngày Hai Bà khởi nghĩa.'),
  ]),

  M(20, 'Đền Cổ Loa — An Dương Vương', [
    Q('Cổ Loa thuộc huyện?', ['Gia Lâm', 'Mê Linh', 'Sóc Sơn', 'Đông Anh'], 3, 'Cổ Loa nay thuộc Đông Anh, Hà Nội.'),
    Q('Cổ Loa là kinh đô của?', ['Nước Âu Lạc (An Dương Vương)', 'Văn Lang', 'Đại Việt', 'Vạn Xuân'], 0, 'Cổ Loa là kinh đô Âu Lạc.'),
    Q('Đặc trưng của thành Cổ Loa?', ['Thành vuông', '3 vòng thành hình xoắn ốc', 'Thành tròn', 'Không có thành'], 1, 'Thành Cổ Loa có 3 vòng xoắn ốc.'),
    Q('Truyền thuyết gắn với Cổ Loa?', ['Tấm Cám', 'An Dương Vương — Mỵ Châu — Trọng Thuỷ', 'Sơn Tinh Thuỷ Tinh', 'Thạch Sanh'], 1, 'Truyền thuyết An Dương Vương — Mỵ Châu nổi tiếng.'),
    Q('Lễ hội Cổ Loa tổ chức?', ['Mùng 6 tháng Giêng âm', 'Tháng 10', 'Tháng 4', 'Tháng 8'], 0, 'Lễ hội Cổ Loa vào tháng Giêng.'),
  ]),

  M(21, 'Đền Sóc — Phù Đổng Thiên Vương', [
    Q('Đền Sóc ở huyện?', ['Mê Linh', 'Đông Anh', 'Gia Lâm', 'Sóc Sơn'], 3, 'Đền Sóc ở núi Sóc, Sóc Sơn.'),
    Q('Đền Sóc thờ ai?', ['Thánh Gióng', 'Lý Thái Tổ', 'Hai Bà Trưng', 'Trần Hưng Đạo'], 0, 'Đền Sóc thờ Thánh Gióng (Phù Đổng Thiên Vương).'),
    Q('Theo truyền thuyết, Thánh Gióng bay về trời từ?', ['Núi Ba Vì', 'Núi Tản Viên', 'Núi Sóc (Sóc Sơn)', 'Núi Bà Đen'], 2, 'Núi Sóc là nơi Thánh Gióng bay về trời.'),
    Q('Thánh Gióng là biểu tượng của?', ['Nông nghiệp', 'Tinh thần yêu nước chống ngoại xâm', 'Học giỏi', 'Buôn bán'], 1, 'Thánh Gióng biểu tượng tinh thần yêu nước.'),
    Q('Hội Gióng đền Sóc tổ chức?', ['Tháng 10', 'Tháng 8', 'Tháng Giêng', 'Tháng 4'], 2, 'Hội Sóc tổ chức 6 tháng Giêng âm.'),
  ]),

  M(22, 'Chùa Một Cột — biểu tượng Hà Nội', [
    Q('Chùa Một Cột xây thời?', ['Tiền Lê (cuối X)', 'Lý (1049)', 'Trần (giữa XIII)', 'Nguyễn'], 1, 'Lý Thái Tông xây chùa Một Cột năm 1049.'),
    Q('Chùa Một Cột có hình dạng?', ['Hình lục giác', 'Hình tròn lớn', 'Hoa sen nở trên một cột đá', 'Tháp vuông'], 2, 'Chùa hình hoa sen trên một cột — độc đáo.'),
    Q('Tên chính thức của chùa?', ['Trấn Quốc', 'Bộc Tự', 'Quán Sứ', 'Diên Hựu Tự'], 3, 'Tên chính thức là Diên Hựu Tự.'),
    Q('Chùa Một Cột nằm trong quần thể?', ['Văn Miếu', 'Hoàng thành', 'Lăng Chủ tịch Hồ Chí Minh', 'Hồ Tây'], 2, 'Chùa Một Cột nằm trong khu lăng Bác.'),
    Q('Ý nghĩa hình hoa sen?', ['Chiến tranh', 'Quyền lực', 'Sự thanh tịnh, vươn lên từ bùn lầy', 'Buôn bán'], 2, 'Hoa sen biểu tượng Phật giáo — thanh khiết.'),
  ]),

  M(23, 'Chùa Trấn Quốc — chùa cổ nhất Hà Nội', [
    Q('Chùa Trấn Quốc nằm bên?', ['Hồ Bảy Mẫu', 'Hồ Gươm', 'Hồ Tây', 'Sông Hồng'], 2, 'Chùa Trấn Quốc ở Hồ Tây.'),
    Q('Chùa Trấn Quốc có lịch sử?', ['Hơn 1500 năm (từ thời Lý Nam Đế)', '100 năm', '2000 năm', '500 năm'], 0, 'Chùa lập từ thời Lý Nam Đế (thế kỉ VI).'),
    Q('Chùa Trấn Quốc có gì độc đáo?', ['Hồ nhân tạo lớn', 'Cột đá 30m', 'Bảo tháp 11 tầng cao 15m', 'Cầu vắt qua mây'], 2, 'Bảo tháp 11 tầng là điểm nhấn.'),
    Q('Chùa Trấn Quốc thờ?', ['Khổng Tử', 'Lão Tử', 'Phật và nhiều vị thần', 'Mohammed'], 2, 'Là chùa Phật giáo.'),
    Q('Phố nào nổi tiếng nhiều chùa lớn?', ['Bà Triệu', 'Phố Quán Sứ (chùa Quán Sứ — trụ sở Giáo hội Phật giáo)', 'Hàng Bạc', 'Hàng Đào'], 1, 'Quán Sứ là trụ sở Giáo hội Phật giáo VN.'),
  ]),

  M(24, 'Thành Cổ Sơn Tây', [
    Q('Thành cổ Sơn Tây xây thời?', ['Lý (đầu XI)', 'Nguyễn (đầu XIX)', 'Trần (cuối XIV)', 'Lê trung hưng (XVII)'], 1, 'Thành cổ Sơn Tây xây thời Minh Mạng (1822).'),
    Q('Thành cổ Sơn Tây làm bằng?', ['Gạch nung Bát Tràng', 'Bê tông', 'Đá ong', 'Gỗ lim, gỗ táu'], 2, 'Đá ong là vật liệu chính.'),
    Q('Sơn Tây nay thuộc?', ['Phú Thọ', 'Thị xã Sơn Tây, Hà Nội', 'Tỉnh khác', 'Hoà Bình'], 1, 'Sơn Tây là thị xã của Hà Nội.'),
    Q('Đặc trưng kiến trúc thành cổ?', ['Mở cửa hoàn toàn', 'Vọng lâu, hào nước bao quanh', 'Không có tường', 'Không có hào'], 1, 'Vọng lâu và hào nước đặc trưng thành cổ.'),
    Q('Sơn Tây gắn với di tích nào khác?', ['Văn Miếu', 'Hoàng thành', 'Cột Cờ', 'Đền Và (thờ Tản Viên Sơn Thánh)'], 3, 'Đền Và thờ Sơn Tinh — Tản Viên.'),
  ]),

  M(25, 'Làng cổ Đường Lâm', [
    Q('Đường Lâm thuộc?', ['Đà Nẵng', 'Hương Trà, Huế', 'Sơn Tây, Hà Nội', 'Củ Chi, TPHCM'], 2, 'Đường Lâm ở Sơn Tây, Hà Nội.'),
    Q('Đường Lâm được biết đến là?', ['Cảng biển', 'Khu công nghiệp', 'Sân bay', 'Làng cổ điển hình với nhiều nhà cổ đá ong'], 3, 'Đường Lâm là làng cổ Việt Nam.'),
    Q('Đường Lâm có "đất hai vua" — quê hương của?', ['Lê Lợi và Quang Trung', 'Ngô Quyền và Phùng Hưng', 'Lý Thái Tổ và Trần Hưng Đạo', 'Hồ Quý Ly và Nguyễn Ánh'], 1, 'Ngô Quyền và Phùng Hưng đều quê Đường Lâm.'),
    Q('Đặc trưng nhà cổ Đường Lâm?', ['Nhà sàn', 'Lâu đài', 'Tường đá ong, mái ngói', 'Nhà cao tầng'], 2, 'Nhà cổ Đường Lâm có tường đá ong rất đẹp.'),
    Q('Đường Lâm được Bộ VH-TT-DL công nhận?', ['Di sản thế giới', 'Di tích quốc gia làng cổ', 'Khu đô thị', 'Khu công nghiệp'], 1, 'Đường Lâm là di tích quốc gia.'),
  ]),

  M(26, 'Làng nghề Hà Nội (tiếp) — Nhật Tân, Quảng Bá', [
    Q('Làng đào Nhật Tân nổi tiếng?', ['Đan tre', 'Trồng hoa đào Tết', 'Trồng lúa', 'Đúc đồng'], 1, 'Nhật Tân — hoa đào nổi tiếng cả nước.'),
    Q('Làng quất Quảng Bá nổi tiếng?', ['Trồng rau', 'Trồng quất cảnh Tết', 'Làm gốm sứ men lam', 'Dệt lụa tơ tằm'], 1, 'Quảng Bá — quất cảnh nổi tiếng.'),
    Q('Làng hoa Ngọc Hà xưa nổi tiếng?', ['Đúc đồ đồng thờ cúng', 'Trồng lúa nếp cái hoa vàng', 'Nuôi cá chép hồ Tây', 'Trồng hoa cung cấp cho Hà Nội'], 3, 'Ngọc Hà là làng hoa truyền thống.'),
    Q('Làng nghề đúc đồng nổi tiếng ở?', ['Đường Lâm', 'Bát Tràng', 'Vạn Phúc', 'Ngũ Xã (Ba Đình)'], 3, 'Ngũ Xã — làng đúc đồng nổi tiếng.'),
    Q('Làng giấy Bưởi nổi tiếng làm?', ['Giấy bao bì', 'Giấy báo', 'Giấy ảnh', 'Giấy dó truyền thống'], 3, 'Làng Bưởi — giấy dó.'),
  ]),

  M(27, 'Phương ngữ Hà Nội', [
    Q('Phương ngữ Hà Nội thuộc?', ['Phương ngữ Bắc Bộ', 'Nam Bộ', 'Tây Nguyên', 'Trung Bộ'], 0, 'Hà Nội thuộc phương ngữ Bắc Bộ.'),
    Q('Đặc trưng giọng nói Hà Nội?', ['Nặng, kéo dài', 'Trống vắng', 'Không có dấu', 'Nhẹ nhàng, chuẩn xác, không nặng dấu'], 3, 'Giọng Hà Nội nhẹ và chuẩn xác.'),
    Q('Hà Nội từ xưa được coi là?', ['Khó nghe', 'Không có ý nghĩa', 'Chuẩn mực phát âm tiếng Việt', 'Nói khác hẳn'], 2, 'Giọng Hà Nội thường được coi là chuẩn.'),
    Q('Từ "ăn cơm" ở Hà Nội nói?', ['Như chuẩn (ăn cơm)', 'Hoàn toàn khác', 'Eng com', 'En cum'], 0, 'Người Hà Nội phát âm gần với chuẩn.'),
    Q('Văn hoá nói "thưa, dạ, vâng" được coi trọng ở?', ['Không ai', 'Chỉ trẻ em', 'Chỉ người già', 'Hà Nội (lịch sự, lễ phép)'], 3, 'Hà Nội coi trọng lễ phép trong giao tiếp.'),
  ]),

  M(28, 'Bản sắc văn hoá người Hà Nội', [
    Q('Người Hà Nội được biết đến với?', ['Thô lỗ', 'Sự thanh lịch, văn minh, lễ phép', 'Lạnh nhạt', 'Ồn ào, vội vã, xô bồ'], 1, '"Chẳng thơm cũng thể hoa nhài / Dẫu không thanh lịch cũng người Tràng An".'),
    Q('Câu "Chẳng thơm cũng thể hoa nhài" nói về?', ['Người Huế', 'Người Sài Gòn', 'Người Hà Nội (Tràng An)', 'Người Đà Nẵng'], 2, 'Câu ca dao đề cao thanh lịch người Tràng An — Hà Nội.'),
    Q('Trang phục truyền thống của người Hà Nội xưa?', ['Đồ thể thao', 'Đồ ngắn', 'Đồ tây', 'Áo dài (nữ), áo the khăn xếp (nam)'], 3, 'Áo dài và áo the là truyền thống.'),
    Q('Lối sống của người Hà Nội xưa coi trọng?', ['Hào nhoáng', 'Phô trương', 'Vật chất', 'Gia đình, lễ nghĩa, tri thức'], 3, 'Người HN coi trọng tinh thần, gia đình, học vấn.'),
    Q('Hà Nội được mệnh danh là?', ['"Thành phố vì hoà bình"', 'Trung tâm tài chính lớn nhất', 'Cảng biển lớn', 'Thủ đô công nghiệp'], 0, 'UNESCO trao danh hiệu "Thành phố vì hoà bình" năm 1999.'),
  ]),

  M(29, 'Đình làng Việt — Đình Tây Đằng', [
    Q('Đình làng có vai trò?', ['Chỉ thờ tổ tiên', 'Chỉ để chơi', 'Nơi thờ Thành hoàng và sinh hoạt cộng đồng', 'Khu công nghiệp'], 2, 'Đình thờ Thành hoàng và sinh hoạt cộng đồng.'),
    Q('Đình Tây Đằng ở?', ['Đông Anh', 'Mê Linh', 'Ba Vì, Hà Nội', 'Sơn Tây'], 2, 'Đình Tây Đằng ở Ba Vì.'),
    Q('Đình Tây Đằng nổi tiếng vì?', ['Là đình cổ nhất còn lại ở Việt Nam (thế kỉ XV)', 'Lớn nhất', 'Cao nhất', 'Mới xây nhất'], 0, 'Đình Tây Đằng là một trong những đình cổ nhất.'),
    Q('Kiến trúc đình làng đặc trưng?', ['Mái cong, cột gỗ lớn, chạm khắc tinh xảo', 'Kim loại', 'Bê tông cốt thép', 'Tường gạch ốp đá hoa cương'], 0, 'Đình làng đặc trưng với gỗ và mái cong.'),
    Q('Thành hoàng làng thường là?', ['Vị anh hùng, tổ nghề, thần linh có công với làng', 'Người không liên quan', 'Kẻ thù', 'Người ngoài'], 0, 'Thành hoàng là vị có công được dân tôn thờ.'),
  ]),

  M(30, 'Bảo tàng Hà Nội', [
    Q('Bảo tàng Hà Nội nằm ở?', ['Đống Đa', 'Ba Đình', 'Phạm Hùng (Nam Từ Liêm)', 'Hoàn Kiếm'], 2, 'Bảo tàng Hà Nội ở đường Phạm Hùng.'),
    Q('Bảo tàng Hà Nội khánh thành năm?', ['2010 (Đại lễ 1000 năm Thăng Long)', '2000', '2020', '1990'], 0, 'Khánh thành dịp Đại lễ 1000 năm Thăng Long.'),
    Q('Bảo tàng Lịch sử Quân sự VN ở?', ['Điện Biên Phủ, Ba Đình', 'Cầu Giấy', 'Hoàn Kiếm', 'Đống Đa'], 0, 'Trên đường Điện Biên Phủ, Ba Đình.'),
    Q('Bảo tàng Dân tộc học VN trưng bày?', ['Lịch sử', 'Văn hoá 54 dân tộc VN', 'Quân sự', 'Khoa học'], 1, 'Bảo tàng Dân tộc học trưng bày văn hoá các dân tộc.'),
    Q('Hà Nội có nhiều bảo tàng vì?', ['Là thủ đô — trung tâm văn hoá lịch sử', 'Du lịch', 'Không có lý do', 'Tình cờ'], 0, 'Hà Nội là trung tâm văn hoá lịch sử cả nước.'),
  ]),

  M(31, 'Khu di tích Chủ tịch Hồ Chí Minh', [
    Q('Khu di tích Bác Hồ ở?', ['Hồ Gươm', 'Hồ Tây', 'Sân bay', 'Quảng trường Ba Đình'], 3, 'Khu di tích Bác Hồ ở Ba Đình.'),
    Q('Lăng Chủ tịch Hồ Chí Minh khánh thành?', ['1985', '1969', 'Năm 1975', '1945'], 2, 'Lăng khánh thành ngày 29/8/1975.'),
    Q('Khu di tích gồm?', ['Chỉ vườn', 'Chỉ nhà sàn', 'Lăng Bác, nhà sàn, ao cá, vườn', 'Chỉ lăng'], 2, 'Quần thể nhiều di tích.'),
    Q('Quảng trường Ba Đình là nơi Bác Hồ?', ['Đọc Tuyên ngôn Độc lập (2/9/1945)', 'Họp gia đình', 'Tiếp khách', 'Sinh ra'], 0, 'Ngày 2/9/1945 Bác đọc Tuyên ngôn Độc lập tại Ba Đình.'),
    Q('Nhà sàn Bác Hồ phản ánh?', ['Cuộc sống cô đơn', 'Lối sống giản dị, thanh bạch', 'Không có ý nghĩa', 'Cuộc sống xa hoa'], 1, 'Nhà sàn thể hiện lối sống giản dị của Bác.'),
  ]),

  M(32, 'Hà Nội ngày nay — đô thị hoá', [
    Q('Hà Nội mở rộng địa giới năm?', ['1975', '2008', '2020', '1954'], 1, 'Năm 2008 sáp nhập Hà Tây.'),
    Q('Diện tích Hà Nội hiện?', ['~10000 km²', '~1000 km²', '~3 359 km²', '~5000 km²'], 2, '~3 359 km² sau 2008.'),
    Q('Hà Nội có bao nhiêu quận?', ['20', '5', '12 quận', '30'], 2, 'Hà Nội có 12 quận nội thành.'),
    Q('Thị xã duy nhất của Hà Nội?', ['Hà Đông', 'Long Biên', 'Sơn Tây', 'Hoàng Mai'], 2, 'Sơn Tây là thị xã duy nhất.'),
    Q('Vấn đề lớn của đô thị Hà Nội?', ['Tốt hoàn hảo', 'Ô nhiễm không khí, tắc đường, dân số đông', 'Quá ít người', 'Không có giao thông'], 1, 'Hà Nội đối mặt nhiều vấn đề đô thị lớn.'),
  ]),

  M(33, 'Trách nhiệm bảo vệ di sản Hà Nội', [
    Q('Là HS Hà Nội, em có thể bảo vệ di sản bằng?', ['Vẽ bậy', 'Tìm hiểu, giữ vệ sinh, giới thiệu với bạn bè', 'Khắc tên kỉ niệm lên di tích', 'Mặc kệ'], 1, 'HS có thể bảo vệ di sản bằng nhiều cách phù hợp.'),
    Q('Khi tham quan di tích, em nên?', ['Vẽ kỉ niệm', 'Chạy nhảy, đùa nghịch trong đền', 'Tuân thủ nội quy, không xả rác', 'Bẻ cây'], 2, 'Tuân thủ nội quy là bảo vệ di sản.'),
    Q('Hành vi nào VI PHẠM bảo vệ di sản?', ['Quảng bá', 'Vẽ tên lên tường di tích', 'Quét dọn', 'Trồng cây'], 1, 'Vẽ bậy là vi phạm nghiêm trọng.'),
    Q('Vì sao cần bảo vệ phố cổ?', ['Tốn tiền', 'Là di sản kiến trúc và văn hoá độc đáo', 'Để cản trở đô thị hoá', 'Không cần thiết'], 1, 'Phố cổ là di sản quý của Hà Nội.'),
    Q('Cách giới thiệu Hà Nội cho bạn bè quốc tế?', ['Chỉ đưa đi mua sắm', 'Đưa đi tham quan di tích, giới thiệu ẩm thực — văn hoá', 'Không cần giới thiệu', 'Chỉ đưa đi ăn fast food'], 1, 'Giới thiệu di sản và ẩm thực Hà Nội cho khách.'),
  ]),

  M(34, 'Tổng kết — Hà Nội xưa và nay', [
    Q('Hà Nội có lịch sử trên?', ['500 năm', '100 năm', '200 năm', '1000 năm (từ 1010)'], 3, 'Hà Nội — Thăng Long có lịch sử trên 1000 năm.'),
    Q('Hà Nội là thủ đô từ năm?', ['1010 (Thăng Long) và 1945 (CHXHCN)', '1000', '2000', '500'], 0, 'Thăng Long là thủ đô từ 1010 và HN thủ đô CHXHCN VN từ 1945.'),
    Q('Di sản UNESCO của Hà Nội?', ['Vịnh Hạ Long', 'Cố đô Huế', 'Phố cổ Hội An', 'Hoàng thành Thăng Long, bia tiến sĩ Văn Miếu, Hội Gióng'], 3, 'HN có 3 di sản UNESCO chính: HTTL, bia VM, Hội Gióng.'),
    Q('Hà Nội được UNESCO trao danh hiệu?', ['Thủ đô tài chính', 'Cảng biển lớn', 'Thành phố công nghiệp', 'Thành phố vì hoà bình (1999)'], 3, 'UNESCO trao "Thành phố vì hoà bình" năm 1999.'),
    Q('Bản sắc người Hà Nội?', ['Thanh lịch, văn minh', 'Phóng khoáng, ồn ào', 'Lạnh lùng', 'Thô lỗ'], 0, 'Thanh lịch — văn minh là nét đặc trưng của người Hà Nội.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Lý Thái Tổ dời đô năm?', ['1010', '1789', '1428', '938'], 0, 'Năm 1010 — dời đô về Đại La, đổi tên Thăng Long.'),
    Q('Văn Miếu xây thời?', ['Lý (1070)', 'Nguyễn', 'Trần (1230)', 'Lê sơ (1428)'], 0, 'Lý Thánh Tông xây 1070.'),
    Q('Hội Gióng tổ chức ở?', ['Bắc Ninh', 'Phù Đổng (Gia Lâm) và Sóc Sơn', 'Cố đô Huế', 'Hội An'], 1, 'Hội Gióng tổ chức ở Phù Đổng và Sóc Sơn.'),
    Q('Bát Tràng nổi tiếng?', ['Đúc đồng', 'Dệt lụa tơ tằm', 'Tre đan', 'Gốm sứ'], 3, 'Bát Tràng — làng gốm cổ.'),
    Q('Phở Hà Nội đặc trưng?', ['Cay nồng', 'Mặn chát', 'Nước đục đặc', 'Nước dùng trong, bánh phở mỏng, thanh'], 3, 'Phở HN nổi tiếng nước dùng trong và thanh.'),
  ]),
];

export const S7GDDP_SCENARIOS = indexBy(S7GDDP_WEEKS);
