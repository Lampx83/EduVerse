// ============================================================
// Lớp 6 · GIÁO DỤC ĐỊA PHƯƠNG (Hà Nội) — 36 tuần
// Bám Tài liệu GDĐP Hà Nội lớp 6 · Sở GDĐT Hà Nội (CT GDPT 2018).
// 6 chủ đề: Địa lí–dân cư · Lịch sử · Văn hoá–lễ hội · Danh nhân ·
//          Làng nghề–kinh tế · Môi trường–đô thị.
// 1 tiết/tuần · HK1: T1–18 · HK2: T19–36 · ID prefix: "S6GDDP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6GDDP', 'gd-dia-phuong', n, title, qs, opts);

export const S6GDDP_WEEKS = [
  // ──────────────── HK1 — ĐỊA LÍ · LỊCH SỬ HÀ NỘI ────────────────
  M(1, 'Vị trí địa lí và phạm vi Hà Nội', [
    Q('Hà Nội nằm ở vùng nào của Việt Nam?', ['Đông Nam Bộ', 'Đồng bằng sông Hồng', 'Bắc Trung Bộ', 'Tây Nguyên'], 1, 'Hà Nội là trung tâm vùng Đồng bằng sông Hồng.'),
    Q('Hà Nội có vị trí địa lí đặc biệt vì là?', ['Tỉnh ven biển', 'Thủ đô của Việt Nam', 'Đảo lớn nhất', 'Vùng núi cao'], 1, 'Hà Nội là Thủ đô — trung tâm chính trị – văn hoá – khoa học của cả nước.'),
    Q('Hà Nội tiếp giáp với bao nhiêu tỉnh?', ['5', '7', '8', '10'], 2, 'Hà Nội tiếp giáp 8 tỉnh: Thái Nguyên, Vĩnh Phúc, Bắc Giang, Bắc Ninh, Hưng Yên, Hà Nam, Hoà Bình, Phú Thọ.'),
    Q('Sông lớn nào chảy qua Hà Nội?', ['Sông Mê Kông', 'Sông Hồng', 'Sông Hương', 'Sông Cửu Long'], 1, 'Sông Hồng chảy qua Hà Nội, từng được gọi là sông Cái, sông Nhị Hà.'),
    Q('Hà Nội mở rộng địa giới hành chính lần gần nhất vào năm nào?', ['1954', '1975', '2008', '2020'], 2, 'Năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.'),
    Q('Diện tích Hà Nội hiện nay vào khoảng?', ['1 000 km²', '3 359 km²', '5 000 km²', '10 000 km²'], 1, 'Sau 2008, diện tích Hà Nội khoảng 3 359 km².'),
  ]),

  M(2, 'Địa hình và khí hậu Hà Nội', [
    Q('Phần lớn địa hình Hà Nội là?', ['Núi cao', 'Đồng bằng', 'Cao nguyên', 'Hải đảo'], 1, 'Hà Nội chủ yếu là đồng bằng (đồng bằng sông Hồng), có ít núi ở phía tây.'),
    Q('Đỉnh núi cao nhất Hà Nội nằm ở?', ['Sóc Sơn', 'Ba Vì', 'Đông Anh', 'Long Biên'], 1, 'Núi Ba Vì (Tản Viên) là đỉnh cao nhất Hà Nội.'),
    Q('Khí hậu Hà Nội thuộc kiểu?', ['Xích đạo', 'Ôn đới', 'Nhiệt đới gió mùa', 'Hàn đới'], 2, 'Hà Nội có khí hậu nhiệt đới gió mùa, 4 mùa rõ rệt.'),
    Q('Mùa lạnh nhất ở Hà Nội thường vào tháng?', ['1', '4', '7', '10'], 0, 'Tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.'),
    Q('Đặc trưng của tháng 7 ở Hà Nội?', ['Lạnh, khô', 'Nóng, mưa nhiều', 'Mát mẻ', 'Có tuyết'], 1, 'Tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.'),
    Q('Hiện tượng thời tiết đặc biệt vào mùa xuân ở Hà Nội?', ['Mưa phùn nồm ẩm', 'Băng giá', 'Bão tuyết', 'Khô hạn'], 0, 'Mưa phùn, nồm ẩm là đặc trưng mùa xuân HN do gió mùa Đông Nam.'),
  ]),

  M(3, 'Dân cư và các đơn vị hành chính Hà Nội', [
    Q('Hà Nội hiện có bao nhiêu đơn vị hành chính cấp huyện (quận–huyện–thị xã)?', ['12', '20', '30', '40'], 2, 'Khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).'),
    Q('Thị xã duy nhất của Hà Nội là?', ['Sơn Tây', 'Hà Đông', 'Bắc Từ Liêm', 'Long Biên'], 0, 'Sơn Tây là thị xã duy nhất, các đơn vị tương đương đã lên quận.'),
    Q('Dân số Hà Nội hiện nay vào khoảng?', ['1 triệu', '4 triệu', '8 triệu', '20 triệu'], 2, 'Khoảng 8 triệu người (cả tạm trú).'),
    Q('Dân tộc đa số ở Hà Nội là?', ['Tày', 'Mường', 'Kinh', 'Dao'], 2, 'Người Kinh chiếm phần lớn dân cư.'),
    Q('Cộng đồng dân tộc thiểu số đông nhất ở Hà Nội tập trung ở huyện?', ['Hoài Đức', 'Ba Vì', 'Đông Anh', 'Gia Lâm'], 1, 'Người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.'),
    Q('Mật độ dân số cao nhất Hà Nội thường ở các?', ['Quận nội thành', 'Huyện ngoại thành', 'Vùng núi Ba Vì', 'Đảo nhỏ'], 0, 'Nội thành mật độ rất cao, ngoại thành thưa hơn.'),
  ]),

  M(4, 'Sông Hồng và hệ thống sông – hồ Hà Nội', [
    Q('Tên xưa của sông Hồng đoạn qua Hà Nội là?', ['Sông Tô Lịch', 'Sông Nhị Hà', 'Sông Cầu', 'Sông Đáy'], 1, 'Sông Hồng từng được gọi là sông Nhị Hà, sông Cái.'),
    Q('Hồ nước nổi tiếng nằm giữa trung tâm Hà Nội?', ['Hồ Tây', 'Hồ Gươm (Hoàn Kiếm)', 'Hồ Trúc Bạch', 'Hồ Bảy Mẫu'], 1, 'Hồ Hoàn Kiếm là biểu tượng trung tâm Hà Nội.'),
    Q('Hồ lớn nhất Hà Nội nội thành?', ['Hồ Tây', 'Hồ Gươm', 'Hồ Linh Đàm', 'Hồ Thiền Quang'], 0, 'Hồ Tây ~500 ha, lớn nhất nội thành.'),
    Q('Sông nào từng là con đường thuỷ chính của kinh thành Thăng Long xưa?', ['Sông Tô Lịch', 'Sông Cầu', 'Sông Mã', 'Sông Cả'], 0, 'Sông Tô Lịch nối Hồ Tây ra sông Hồng, từng là trục giao thông.'),
    Q('Tên gọi "Hồ Hoàn Kiếm" gắn với truyền thuyết về?', ['Lê Lợi trả gươm thần', 'Trần Hưng Đạo', 'Lý Thái Tổ', 'An Dương Vương'], 0, 'Vua Lê Lợi trả lại gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm (trả gươm).'),
    Q('Sông Đáy chảy ở phía nào của Hà Nội?', ['Đông', 'Tây Nam', 'Bắc', 'Đông Bắc'], 1, 'Sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.'),
  ]),

  M(5, 'Tên gọi Thăng Long – Đông Đô – Hà Nội qua các thời kì', [
    Q('Năm 1010, ai đã định đô tại Thăng Long?', ['Ngô Quyền', 'Lý Thái Tổ', 'Trần Nhân Tông', 'Lê Lợi'], 1, 'Lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.'),
    Q('Tên "Thăng Long" có nghĩa là?', ['Rồng vàng', 'Rồng bay lên', 'Long mạch', 'Thuyền rồng'], 1, '"Thăng" = bay lên, "Long" = rồng — gắn với truyền thuyết rồng bay khi vua dời đô.'),
    Q('Tên "Đông Đô" được dùng thời?', ['Lý', 'Trần', 'Hồ', 'Lê sơ'], 2, 'Năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.'),
    Q('Tên "Đông Quan" do triều đại nào áp đặt?', ['Tống', 'Nguyên', 'Minh', 'Thanh'], 2, 'Quân Minh xâm lược đặt tên Đông Quan để phủ nhận tính thủ đô của ta.'),
    Q('Tên "Hà Nội" chính thức xuất hiện vào năm nào?', ['1010', '1428', '1831', '1945'], 2, 'Năm 1831 vua Minh Mạng lập tỉnh Hà Nội.'),
    Q('Tên "Hà Nội" có nghĩa là?', ['Trong dòng sông', 'Phía bắc sông', 'Bên trong sông Hồng', 'Đầu dòng sông'], 2, '"Hà" = sông, "Nội" = bên trong → vùng đất nằm giữa các con sông.'),
    Q('Sự kiện 10/10/1954 ở Hà Nội là?', ['Khởi nghĩa Hai Bà Trưng', 'Vua Lý dời đô', 'Giải phóng Thủ đô', 'Quốc khánh'], 2, '10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.'),
  ]),

  M(6, 'Khu di tích Hoàng thành Thăng Long', [
    Q('Hoàng thành Thăng Long được UNESCO công nhận Di sản Văn hoá Thế giới năm?', ['2000', '2008', '2010', '2015'], 2, 'Năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.'),
    Q('Trục trung tâm Hoàng thành xưa là?', ['Trục Tô Lịch', 'Trục Bắc – Nam (Đoan Môn – Kính Thiên)', 'Trục Đông – Tây', 'Trục sông Hồng'], 1, 'Trục thần đạo Bắc–Nam đi qua Đoan Môn, điện Kính Thiên.'),
    Q('Cổng phía nam Hoàng thành tên gọi là?', ['Bắc Môn', 'Đoan Môn', 'Đông Môn', 'Tây Môn'], 1, 'Đoan Môn là cổng phía nam còn lại đến nay.'),
    Q('Cột Cờ Hà Nội nằm trong khu vực nào?', ['Phố cổ', 'Hoàng thành – nay là khu vực Điện Biên Phủ', 'Hồ Tây', 'Sông Hồng'], 1, 'Cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.'),
    Q('Điện Kính Thiên có vai trò gì thời Lê?', ['Nhà ăn', 'Điện chính nơi vua làm việc, tế lễ', 'Kho lương', 'Trại lính'], 1, 'Điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.'),
    Q('Cuộc khai quật khảo cổ lớn ở 18 Hoàng Diệu phát lộ điều gì?', ['Lăng vua Hùng', 'Nền móng cung điện Lý – Trần – Lê', 'Di tích Đông Sơn', 'Văn Miếu'], 1, 'Khai quật 2002–2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.'),
  ]),

  M(7, 'Văn Miếu – Quốc Tử Giám: trường đại học đầu tiên', [
    Q('Văn Miếu Hà Nội được lập năm?', ['1010', '1070', '1428', '1802'], 1, 'Vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.'),
    Q('Quốc Tử Giám được lập năm 1076 dưới thời?', ['Lý Nhân Tông', 'Trần Thái Tông', 'Lê Thái Tổ', 'Nguyễn Ánh'], 0, 'Vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.'),
    Q('Bia Tiến sĩ tại Văn Miếu khắc tên những ai?', ['Vua chúa', 'Các tiến sĩ đỗ trong kì thi Đình', 'Tướng lĩnh', 'Thầy thuốc'], 1, 'Khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.'),
    Q('82 bia Tiến sĩ Văn Miếu được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Di sản ký ức thế giới', 'Di sản ẩm thực', 'Di sản phi vật thể'], 1, 'Năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.'),
    Q('Khuê Văn Các trong Văn Miếu là biểu tượng của?', ['Hà Nội', 'TPHCM', 'Đà Nẵng', 'Hải Phòng'], 0, 'Khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.'),
    Q('Khuê Văn Các được xây dựng vào thời?', ['Lý', 'Trần', 'Nguyễn (thời Gia Long)', 'Pháp thuộc'], 2, 'Khuê Văn Các xây năm 1805 dưới triều Nguyễn.'),
  ]),

  M(8, 'Phố cổ Hà Nội — 36 phố phường', [
    Q('Khu phố cổ Hà Nội còn được gọi là?', ['Khu chợ lớn', '36 phố phường', 'Khu mới', 'Khu công nghiệp'], 1, 'Tên gọi truyền thống "Hà Nội 36 phố phường".'),
    Q('Chữ "Hàng" trong tên phố cổ chỉ?', ['Loại hàng hoá bán ở phố đó', 'Số nhà', 'Tên người', 'Tên cây'], 0, 'Mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...'),
    Q('Phố nào nổi tiếng chế tác bạc?', ['Hàng Bạc', 'Hàng Đào', 'Hàng Buồm', 'Hàng Mã'], 0, 'Hàng Bạc là phố chế tác kim hoàn.'),
    Q('Phố Hàng Mã bán?', ['Vải', 'Đồ vàng mã, đồ chơi giấy', 'Hoa quả', 'Đồng hồ'], 1, 'Hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.'),
    Q('Chợ Đồng Xuân thuộc quận nào?', ['Đống Đa', 'Hoàn Kiếm', 'Tây Hồ', 'Hai Bà Trưng'], 1, 'Chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.'),
    Q('Đặc trưng kiến trúc nhà phố cổ là?', ['Nhà cao tầng', 'Nhà ống mặt tiền hẹp – sâu', 'Nhà sàn', 'Lâu đài đá'], 1, 'Mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.'),
  ]),

  M(9, 'Lễ hội truyền thống ở Hà Nội', [
    Q('Lễ hội nào lớn nhất ở Hà Nội đầu năm âm lịch?', ['Lễ hội Gò Đống Đa', 'Lễ hội Đền Hùng', 'Lễ hội chùa Hương', 'Lễ hội Cổ Loa'], 2, 'Lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.'),
    Q('Lễ hội chùa Hương ở huyện nào?', ['Mỹ Đức', 'Ba Vì', 'Thạch Thất', 'Phú Xuyên'], 0, 'Quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.'),
    Q('Lễ hội Gò Đống Đa tưởng nhớ chiến thắng nào?', ['Bạch Đằng', 'Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789', 'Chi Lăng', 'Vạn Tường'], 1, 'Vua Quang Trung đại phá quân Thanh Tết 1789.'),
    Q('Lễ hội Cổ Loa thờ ai?', ['Hai Bà Trưng', 'An Dương Vương', 'Lý Thái Tổ', 'Trần Hưng Đạo'], 1, 'Đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.'),
    Q('Hội Gióng được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Di sản văn hoá phi vật thể đại diện nhân loại', 'Di sản tư liệu', 'Di sản hỗn hợp'], 1, 'Năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.'),
    Q('Hội Gióng đền Phù Đổng (Gia Lâm) tổ chức vào tháng?', ['Tháng Giêng', 'Tháng 4 âm', 'Tháng 7 âm', 'Tháng 10 âm'], 1, 'Mùng 9 tháng 4 âm lịch.'),
  ]),

  M(10, 'Danh nhân Hà Nội — Chu Văn An, Nguyễn Trãi', [
    Q('Chu Văn An là?', ['Nhà quân sự', 'Nhà giáo, hiệu trưởng Quốc Tử Giám', 'Thầy thuốc', 'Vua'], 1, 'Chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.'),
    Q('Chu Văn An nổi tiếng dâng?', ['Sớ chém đầu thầy phong thuỷ', '"Thất trảm sớ" đề nghị chém 7 nịnh thần', 'Sớ xin từ quan', 'Bài thơ tỏ tình'], 1, 'Thất trảm sớ nổi tiếng trong sử Việt.'),
    Q('Quê hương Chu Văn An nay thuộc?', ['Quận Thanh Trì, Hà Nội', 'Huế', 'Đà Nẵng', 'TPHCM'], 0, 'Làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).'),
    Q('Nguyễn Trãi (1380–1442) gắn với?', ['Khởi nghĩa Tây Sơn', 'Khởi nghĩa Lam Sơn', 'Khởi nghĩa Yên Thế', 'Phong trào Cần Vương'], 1, 'Quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.'),
    Q('Tác phẩm nổi tiếng của Nguyễn Trãi là?', ['Hịch tướng sĩ', 'Bình Ngô đại cáo', 'Truyện Kiều', 'Chinh phụ ngâm'], 1, 'Bình Ngô đại cáo — "Thiên cổ hùng văn".'),
    Q('Nguyễn Trãi được UNESCO vinh danh năm 1980 là?', ['Anh hùng dân tộc', 'Danh nhân văn hoá thế giới', 'Nhà khoa học', 'Thầy thuốc giỏi'], 1, 'UNESCO công nhận năm 1980 nhân 600 năm ngày sinh.'),
  ]),

  M(11, 'Danh nhân Hà Nội — Lý Thái Tổ, Trần Quốc Tuấn', [
    Q('Lý Thái Tổ tên thật là?', ['Lý Long Tường', 'Lý Công Uẩn', 'Lý Thường Kiệt', 'Lý Anh Tông'], 1, 'Lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.'),
    Q('"Chiếu dời đô" có ý nghĩa?', ['Tuyên bố chiến tranh', 'Giải thích lí do dời đô về Đại La', 'Chia ruộng đất', 'Cấm Phật giáo'], 1, 'Văn kiện nổi tiếng bậc nhất sử Việt.'),
    Q('Trần Hưng Đạo có tên thật là?', ['Trần Quang Khải', 'Trần Quốc Tuấn', 'Trần Nhật Duật', 'Trần Khánh Dư'], 1, 'Trần Quốc Tuấn — Hưng Đạo Đại Vương.'),
    Q('Trần Hưng Đạo chỉ huy chiến thắng nào nổi tiếng?', ['Bạch Đằng 1288', 'Đống Đa 1789', 'Điện Biên Phủ 1954', 'Cẩm Đường'], 0, 'Đại phá quân Nguyên trên sông Bạch Đằng năm 1288.'),
    Q('Tác phẩm nào do Trần Hưng Đạo viết?', ['Bình Ngô đại cáo', 'Hịch tướng sĩ', 'Chiếu dời đô', 'Truyền kì mạn lục'], 1, 'Hịch tướng sĩ — kêu gọi binh sĩ.'),
    Q('Phố/khu vực nào ở Hà Nội mang tên các vị anh hùng trên?', ['Chỉ phố Lý Thái Tổ', 'Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt', 'Chỉ Trần Hưng Đạo', 'Không có'], 1, 'Cả ba đều có phố lớn ở Hà Nội.'),
  ]),

  M(12, 'Lịch sử Cổ Loa và nhà nước Âu Lạc', [
    Q('Cổ Loa thuộc huyện nào của Hà Nội?', ['Đông Anh', 'Sóc Sơn', 'Gia Lâm', 'Long Biên'], 0, 'Thuộc xã Cổ Loa, huyện Đông Anh.'),
    Q('Thành Cổ Loa do ai xây dựng?', ['Hùng Vương', 'An Dương Vương', 'Hai Bà Trưng', 'Lý Bí'], 1, 'Sau khi sáp nhập Văn Lang, An Dương Vương lập Âu Lạc và xây Cổ Loa.'),
    Q('Đặc điểm nổi bật của thành Cổ Loa?', ['Hình tròn 1 vòng', 'Có 3 vòng thành xoắn ốc', 'Hình vuông', 'Thành bằng đá'], 1, 'Ba vòng thành đắp đất xoắn ốc.'),
    Q('Nỏ Liên Châu trong truyền thuyết gắn với?', ['Cao Lỗ', 'An Tiêm', 'Mai An Tiêm', 'Tản Viên'], 0, 'Tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.'),
    Q('Truyền thuyết Mỵ Châu – Trọng Thuỷ gắn với?', ['Triệu Đà – âm mưu xâm lược', 'Hai Bà Trưng', 'Lê Lợi', 'Ngô Quyền'], 0, 'Triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.'),
    Q('Đền thờ An Dương Vương ở Cổ Loa còn gọi là?', ['Đền Thượng', 'Đền Hùng', 'Đền Trần', 'Đền Đô'], 0, 'Đền Thượng — chính điện thờ An Dương Vương.'),
  ]),

  M(13, 'Khởi nghĩa Hai Bà Trưng — Mê Linh', [
    Q('Hai Bà Trưng là ai?', ['Hai chị em Lý Bí', 'Trưng Trắc và Trưng Nhị', 'Hai con gái Hùng Vương', 'Hai bà tiên'], 1, 'Hai chị em — Trưng Trắc và Trưng Nhị.'),
    Q('Mê Linh xưa nay thuộc huyện nào của Hà Nội?', ['Mê Linh', 'Đông Anh', 'Sóc Sơn', 'Long Biên'], 0, 'Mê Linh nay là huyện ngoại thành phía bắc HN.'),
    Q('Khởi nghĩa Hai Bà Trưng nổ ra năm?', ['40', '111', '248', '938'], 0, 'Mùa xuân năm 40, khởi nghĩa chống nhà Hán.'),
    Q('Chồng của Trưng Trắc là?', ['Cao Lỗ', 'Thi Sách', 'Triệu Đà', 'Lý Bí'], 1, 'Thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.'),
    Q('Sau khi thắng, Trưng Trắc xưng?', ['Hoàng đế', 'Trưng Vương', 'Đại tướng', 'Thái hậu'], 1, 'Bà xưng Trưng Vương, đóng đô ở Mê Linh.'),
    Q('Đền Hai Bà Trưng nổi tiếng ở Hà Nội nằm ở đâu?', ['Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)', 'Hồ Tây', 'Văn Miếu', 'Đông Anh'], 0, 'Cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.'),
  ]),

  M(14, 'Chiến thắng Đống Đa — Quang Trung', [
    Q('Trận Ngọc Hồi – Đống Đa diễn ra vào năm?', ['1077', '1288', '1789', '1885'], 2, 'Tết Kỷ Dậu 1789.'),
    Q('Vua Quang Trung tên thật là?', ['Nguyễn Huệ', 'Nguyễn Nhạc', 'Nguyễn Lữ', 'Nguyễn Ánh'], 0, 'Nguyễn Huệ — lãnh tụ Tây Sơn.'),
    Q('Quân địch bị đánh bại tại Đống Đa là?', ['Quân Tống', 'Quân Nguyên', 'Quân Thanh', 'Quân Minh'], 2, '29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.'),
    Q('Quang Trung hành quân thần tốc từ đâu ra Thăng Long?', ['Phú Xuân (Huế)', 'Hoa Lư', 'Cao Bằng', 'Sài Gòn'], 0, 'Từ Phú Xuân ra Bắc trong khoảng 1 tháng.'),
    Q('Lễ hội Gò Đống Đa tổ chức ngày nào?', ['Mùng 5 Tết', 'Mùng 1 Tết', 'Rằm tháng Giêng', '10/3 âm'], 0, 'Mùng 5 Tết — kỉ niệm chiến thắng.'),
    Q('Tướng giặc tử trận trong trận Đống Đa là?', ['Sầm Nghi Đống', 'Hứa Thế Hanh', 'Tôn Sĩ Nghị', 'Liễu Thăng'], 0, 'Sầm Nghi Đống tự vẫn tại gò Đống Đa.'),
  ]),

  M(15, 'Hà Nội thời Pháp thuộc — kiến trúc Đông Dương', [
    Q('Pháp đánh chiếm Hà Nội lần đầu năm?', ['1858', '1873', '1884', '1945'], 1, '1873 Francis Garnier đánh thành Hà Nội lần 1.'),
    Q('Tổng đốc Hà Nội tuẫn tiết khi thành thất thủ lần 2 (1882) là?', ['Nguyễn Tri Phương', 'Hoàng Diệu', 'Phan Thanh Giản', 'Tôn Thất Thuyết'], 1, 'Hoàng Diệu treo cổ tự vẫn trong Võ Miếu.'),
    Q('Nhà hát Lớn Hà Nội xây dựng theo phong cách?', ['Á đông', 'Tân cổ điển Pháp', 'Hiện đại', 'Gô-tích'], 1, 'Xây 1901–1911 theo mẫu Opéra Garnier (Paris).'),
    Q('Cầu Long Biên do ai thiết kế?', ['Eiffel', 'Daydé & Pillé', 'Le Corbusier', 'Nguyễn Tri Phương'], 1, 'Hãng Daydé & Pillé Pháp, khánh thành 1902.'),
    Q('Phong cách "Kiến trúc Đông Dương" pha trộn?', ['Pháp & Việt – Hán', 'Pháp & Nhật', 'Trung & Anh', 'Đức & Việt'], 0, 'Kết hợp nghệ thuật Pháp với chi tiết phương Đông.'),
    Q('Toà nhà nào hiện là Bảo tàng Lịch sử Quốc gia?', ['Bưu điện', 'Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)', 'Phủ Toàn quyền', 'Nhà hát Lớn'], 1, '1 Tràng Tiền — Louis Finot cũ.'),
  ]),

  M(16, 'Cách mạng Tháng Tám 1945 ở Hà Nội', [
    Q('Tổng khởi nghĩa giành chính quyền ở Hà Nội thắng lợi ngày?', ['19/8/1945', '2/9/1945', '10/10/1954', '30/4/1975'], 0, '19/8/1945 — Hà Nội giành chính quyền.'),
    Q('Quảng trường Ba Đình là nơi?', ['Quốc khánh 2/9/1945', 'Vua Lê Lợi lên ngôi', 'Lý Thái Tổ dời đô', 'Mỹ ném bom'], 0, 'Bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.'),
    Q('Người chỉ huy khởi nghĩa Hà Nội 19/8/1945 thuộc tổ chức?', ['Mặt trận Việt Minh', 'Quốc dân Đảng', 'Đại Việt', 'Pháp Bộ'], 0, 'Việt Minh lãnh đạo Tổng khởi nghĩa.'),
    Q('Bắc Bộ phủ (nay là Nhà khách Chính phủ) trước 1945 là?', ['Phủ Thủ tướng', 'Phủ Thống sứ Bắc Kỳ', 'Bưu điện', 'Nhà tù'], 1, 'Phủ Thống sứ Bắc Kỳ thời Pháp.'),
    Q('Lá cờ đỏ sao vàng tung bay trên kì đài Hà Nội 19/8/1945 đánh dấu?', ['Khởi đầu chiến tranh', 'Chính quyền nhân dân ra đời ở Thủ đô', 'Pháp đầu hàng', 'Nhật rút quân'], 1, 'Chính quyền cách mạng được thành lập tại Hà Nội.'),
    Q('Ngày 2/9/1945 cả nước có sự kiện gì?', ['Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình', 'Quân Đồng minh đến', 'Pháp ký hiệp ước', 'Mỹ ném bom'], 0, 'Lễ Tuyên bố nước VNDCCH ra đời.'),
  ]),

  M(17, 'Hà Nội — Điện Biên Phủ trên không 12/1972', [
    Q('Chiến dịch "Điện Biên Phủ trên không" diễn ra trong?', ['7 ngày 1968', '12 ngày đêm 12/1972', '30 ngày 1975', '60 ngày 1979'], 1, '18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.'),
    Q('Loại máy bay chiến lược của Mỹ bị bắn rơi nhiều ở HN là?', ['F-4', 'B-52', 'A-7', 'F-16'], 1, '34 chiếc B-52 bị bắn rơi trong chiến dịch.'),
    Q('Vũ khí chính bắn rơi B-52 là?', ['Súng trường', 'Tên lửa SAM-2 và pháo cao xạ', 'Bom hạt nhân', 'Tàu ngầm'], 1, 'Tên lửa SAM-2 (С-75) và pháo phòng không.'),
    Q('Phố Khâm Thiên (Hà Nội) ghi dấu thảm hoạ gì?', ['Lụt lớn', 'B-52 ném bom khu dân cư 26/12/1972', 'Hoả hoạn', 'Động đất'], 1, 'Ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.'),
    Q('Đài tưởng niệm "Khâm Thiên" thể hiện hình ảnh?', ['Người mẹ bồng con đã mất', 'Người lính', 'Cánh chim hoà bình', 'Lá cờ'], 0, 'Tượng đài bà mẹ ôm con — biểu tượng đau thương và lên án chiến tranh.'),
    Q('Kết quả ngoại giao sau chiến thắng 12 ngày đêm là?', ['Hiệp định Paris 27/1/1973', 'Hiệp định Genève', 'Hiệp định Bắc Kinh', 'Hiệp ước Versailles'], 0, 'Buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.'),
  ]),

  M(18, 'Ôn tập HK1 — Hà Nội từ Thăng Long đến Thủ đô', [
    Q('Sông lớn chảy qua Hà Nội?', ['Sông Hương', 'Sông Hồng', 'Sông Mê Kông', 'Sông Đà'], 1, 'Sông Hồng.'),
    Q('Vua nào dời đô về Thăng Long năm 1010?', ['Lê Lợi', 'Lý Công Uẩn (Lý Thái Tổ)', 'Quang Trung', 'Trần Nhân Tông'], 1, 'Lý Công Uẩn.'),
    Q('Trận đánh nổi tiếng Tết Kỷ Dậu 1789 ở HN?', ['Bạch Đằng', 'Ngọc Hồi – Đống Đa', 'Chi Lăng', 'Tốt Động'], 1, 'Quang Trung đại phá quân Thanh.'),
    Q('Hai Bà Trưng đóng đô ở?', ['Mê Linh', 'Cổ Loa', 'Hoa Lư', 'Đại La'], 0, 'Mê Linh — quê hương Hai Bà.'),
    Q('Hoàng thành Thăng Long được UNESCO công nhận năm?', ['1995', '2008', '2010', '2015'], 2, '2010.'),
    Q('Ngày Giải phóng Thủ đô?', ['19/8/1945', '2/9/1945', '10/10/1954', '30/4/1975'], 2, '10/10/1954.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập tại?', ['Cột Cờ', 'Quảng trường Ba Đình', 'Hoàng thành', 'Nhà hát Lớn'], 1, 'Quảng trường Ba Đình.'),
  ]),

  // ──────────────── HK2 — VĂN HOÁ · LÀNG NGHỀ · ĐÔ THỊ HIỆN ĐẠI ────────────────
  M(19, 'Ẩm thực Hà Nội — Phở, bún chả, cốm', [
    Q('Phở Hà Nội nổi tiếng với loại nước dùng?', ['Nước lèo cá', 'Nước hầm xương bò trong, thanh', 'Nước cốt dừa', 'Nước tương'], 1, 'Đặc trưng: nước trong, ngọt thanh từ xương bò.'),
    Q('Bún chả Hà Nội ăn cùng?', ['Mắm nêm', 'Nước mắm chua ngọt + thịt nướng + rau sống', 'Tương đen', 'Phô mai'], 1, 'Thịt nướng than hoa, nước chấm pha chua ngọt.'),
    Q('Cốm Vòng là đặc sản của làng?', ['Làng Vòng (Cầu Giấy)', 'Bát Tràng', 'Đông Hồ', 'Vạn Phúc'], 0, 'Làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.'),
    Q('Cốm thường được làm vào mùa?', ['Xuân', 'Hè', 'Thu', 'Đông'], 2, 'Mùa thu — lúa nếp non.'),
    Q('Chả cá Lã Vọng là món gồm?', ['Cá nướng', 'Cá lăng tẩm nghệ + thì là + bún + mắm tôm', 'Cá kho tộ', 'Cá hấp'], 1, 'Đặc sản phố Chả Cá.'),
    Q('Bánh cốm Hà Nội thường dùng trong dịp?', ['Tết Trung Thu', 'Cưới hỏi', 'Giỗ tổ', 'Quốc khánh'], 1, 'Lễ cưới truyền thống.'),
  ]),

  M(20, 'Làng gốm Bát Tràng', [
    Q('Làng gốm Bát Tràng thuộc huyện nào?', ['Gia Lâm', 'Đông Anh', 'Thanh Trì', 'Long Biên'], 0, 'Bát Tràng — xã thuộc huyện Gia Lâm.'),
    Q('Nghề gốm Bát Tràng có lịch sử khoảng?', ['100 năm', '500 năm', 'Hơn 700 năm', '1 000 năm'], 2, 'Khoảng 700 năm, từ thời Trần – Hồ.'),
    Q('Sản phẩm tiêu biểu của Bát Tràng?', ['Lụa', 'Bát đĩa, lọ hoa, đồ thờ gốm', 'Nón lá', 'Tranh dân gian'], 1, 'Đồ gốm gia dụng và mỹ thuật.'),
    Q('Men gốm Bát Tràng nổi tiếng nhất là?', ['Men rạn, men ngọc', 'Men trắng đục', 'Men kim loại', 'Men nhựa'], 0, 'Men rạn (cobalt), men ngọc, men lam là đặc trưng.'),
    Q('Đất sét làm gốm Bát Tràng xưa lấy từ?', ['Sa Pa', 'Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao', 'Đà Lạt', 'Phú Quốc'], 1, 'Tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.'),
    Q('Du khách đến Bát Tràng có thể trải nghiệm?', ['Tự nặn và vẽ gốm', 'Câu cá', 'Trượt tuyết', 'Đua xe'], 0, 'Workshop nặn – vẽ – tô gốm cho du khách.'),
  ]),

  M(21, 'Làng lụa Vạn Phúc', [
    Q('Làng lụa Vạn Phúc thuộc quận nào?', ['Hà Đông', 'Thanh Xuân', 'Hoàn Kiếm', 'Long Biên'], 0, 'Vạn Phúc nay thuộc quận Hà Đông.'),
    Q('Sản phẩm chủ lực của Vạn Phúc?', ['Lụa tơ tằm', 'Đồ gốm', 'Bánh cốm', 'Mây tre đan'], 0, 'Lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.'),
    Q('Lụa Vạn Phúc nổi tiếng vì?', ['Mềm, mịn, bóng, bền màu', 'Cứng và thô', 'Có mùi thơm', 'Đổi màu liên tục'], 0, 'Lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.'),
    Q('Bài hát "Áo lụa Hà Đông" liên tưởng đến?', ['Sự sang trọng và dịu dàng của thiếu nữ Hà Nội', 'Quân sự', 'Kinh doanh', 'Học tập'], 0, 'Bài thơ Nguyên Sa, nhạc Ngô Thuỵ Miên gắn với hình ảnh áo lụa.'),
    Q('Tơ tằm dùng dệt lụa được lấy từ?', ['Vỏ cây', 'Kén tằm', 'Lông cừu', 'Sợi bông'], 1, 'Kén tằm — tằm ăn lá dâu, nhả tơ làm kén.'),
    Q('Hoạt động du lịch nổi bật ở Vạn Phúc?', ['Tham quan xưởng dệt và mua lụa', 'Lặn biển', 'Leo núi', 'Xem hát chèo'], 0, 'Phố lụa Vạn Phúc rực rỡ sắc màu.'),
  ]),

  M(22, 'Làng nghề khác: Đông Hồ – Tranh & Chuông Phù Đổng', [
    Q('Tranh Đông Hồ thực ra nguồn gốc từ tỉnh nào (giáp HN)?', ['Bắc Ninh', 'Hà Tây cũ', 'Nam Định', 'Hải Phòng'], 0, 'Làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.'),
    Q('Đặc trưng tranh Đông Hồ?', ['In gỗ trên giấy điệp với màu tự nhiên', 'Vẽ sơn dầu', 'Vẽ kĩ thuật số', 'In offset'], 0, 'Ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.'),
    Q('Tranh Đông Hồ "Đám cưới chuột" thể hiện?', ['Lễ cưới', 'Phê phán thói tham nhũng / châm biếm xã hội', 'Chuyện cổ tích', 'Sinh hoạt nông dân'], 1, 'Ý nghĩa châm biếm sâu sắc.'),
    Q('Đền Phù Đổng thờ?', ['An Dương Vương', 'Thánh Gióng', 'Hai Bà Trưng', 'Lý Thái Tổ'], 1, 'Đền Phù Đổng (Gia Lâm) thờ Thánh Gióng.'),
    Q('Truyền thuyết Thánh Gióng kể về?', ['Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân', 'Vua Hùng dựng nước', 'An Dương Vương xây thành', 'Lý Bí khởi nghĩa'], 0, 'Một trong tứ bất tử của VN.'),
    Q('Tinh thần Thánh Gióng tượng trưng cho?', ['Lòng yêu nước và sức mạnh quật khởi của dân tộc', 'Văn học', 'Khoa học', 'Buôn bán'], 0, 'Biểu tượng tinh thần chống ngoại xâm.'),
  ]),

  M(23, 'Múa rối nước và nghệ thuật truyền thống Hà Nội', [
    Q('Múa rối nước là loại hình nghệ thuật?', ['Hiện đại', 'Dân gian độc đáo của Đồng bằng Bắc Bộ – VN', 'Phương Tây', 'Trung Hoa'], 1, 'Múa rối nước là sáng tạo độc đáo của VN.'),
    Q('Nhà hát Múa rối Thăng Long ở Hà Nội nằm gần?', ['Hồ Hoàn Kiếm', 'Sông Hồng', 'Sân bay', 'Ga Hà Nội'], 0, 'Phố Đinh Tiên Hoàng, gần Hồ Gươm.'),
    Q('Sân khấu múa rối nước là?', ['Mặt nước', 'Sàn gỗ', 'Sân khấu vải', 'Băng tuyết'], 0, 'Diễn trên mặt nước — diễn viên giấu sau bức mành.'),
    Q('Nhân vật quen thuộc trong rối nước?', ['Chú Tễu', 'Pinocchio', 'Mickey', 'Kachiusa'], 0, 'Chú Tễu là nhân vật dẫn chuyện hài hước.'),
    Q('Ca trù được UNESCO công nhận là?', ['Di sản phi vật thể cần bảo vệ khẩn cấp', 'Di sản thiên nhiên', 'Kỳ quan', 'Di sản tư liệu'], 0, 'Năm 2009 — cần bảo vệ khẩn cấp.'),
    Q('Chèo, cải lương, ca trù — loại hình nào không xuất phát từ Bắc Bộ?', ['Chèo', 'Ca trù', 'Cải lương', 'Quan họ'], 2, 'Cải lương xuất phát từ Nam Bộ.'),
  ]),

  M(24, 'Lễ Tết và phong tục Hà Nội', [
    Q('Tết Nguyên Đán Hà Nội có món bánh đặc trưng?', ['Bánh chưng', 'Bánh tét', 'Bánh ít', 'Bánh khọt'], 0, 'Bánh chưng vuông — miền Bắc.'),
    Q('Cây quất, hoa đào là biểu tượng Tết của?', ['Miền Bắc – Hà Nội', 'Miền Nam', 'Miền Trung', 'Tây Nguyên'], 0, 'Hoa đào, quất là đặc trưng Tết Bắc.'),
    Q('Phố Hàng Mã rực rỡ vào dịp?', ['Tết Trung Thu và Tết Nguyên Đán', 'Quốc khánh', 'Hè', 'Thi cuối kì'], 0, 'Vàng mã, lồng đèn, đồ chơi Trung thu.'),
    Q('Tục "khai bút đầu xuân" gắn với tinh thần?', ['Hiếu học của người Hà Nội', 'Kinh doanh', 'Quân sự', 'Du lịch'], 0, 'Truyền thống văn hiến — khai bút đầu năm.'),
    Q('Chợ hoa Tết lâu đời nhất Hà Nội?', ['Hàng Lược', 'Đồng Xuân', 'Bưởi', 'Long Biên'], 0, 'Chợ hoa Hàng Lược từ thời Pháp.'),
    Q('Tết Hàn Thực mùng 3/3 âm lịch có món?', ['Bánh trôi, bánh chay', 'Bánh chưng', 'Bánh xèo', 'Phở'], 0, 'Tết Hàn Thực — ăn bánh trôi, bánh chay.'),
  ]),

  M(25, 'Danh lam thắng cảnh ngoại thành: Ba Vì, Hương Sơn', [
    Q('Vườn quốc gia Ba Vì có?', ['Sa mạc', 'Rừng nguyên sinh và đỉnh núi cao', 'Băng hà', 'Cánh đồng muối'], 1, 'Rừng nguyên sinh và đỉnh Vua, Tản Viên, Ngọc Hoa.'),
    Q('Đỉnh Tản Viên gắn với truyền thuyết?', ['Sơn Tinh – Thuỷ Tinh', 'Mỵ Châu – Trọng Thuỷ', 'Tấm Cám', 'Thánh Gióng'], 0, 'Sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.'),
    Q('Chùa Hương nằm trong dãy núi?', ['Hương Sơn', 'Tam Đảo', 'Yên Tử', 'Trường Sơn'], 0, 'Hương Sơn — quần thể chùa nhiều động đá vôi.'),
    Q('Đi vào chùa Hương du khách thường đi bằng?', ['Tàu cao tốc', 'Thuyền trên suối Yến', 'Máy bay', 'Tàu lửa'], 1, 'Suối Yến — đường thuỷ dẫn vào động Hương Tích.'),
    Q('Động Hương Tích được mệnh danh là?', ['"Nam thiên đệ nhất động"', 'Động bí ẩn', 'Động ma quái', 'Động tuyết'], 0, 'Vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".'),
    Q('Suối khoáng nóng Quang Hanh nằm ở?', ['Hà Nội', 'Quảng Ninh', 'Hoà Bình', 'Nam Định'], 1, 'Quảng Ninh, không phải HN. (Câu phân biệt phạm vi.)'),
  ]),

  M(26, 'Các bảo tàng tiêu biểu ở Hà Nội', [
    Q('Bảo tàng Dân tộc học VN trưng bày?', ['Đồ vũ trụ', 'Văn hoá 54 dân tộc Việt Nam', 'Khủng long', 'Tranh phương Tây'], 1, 'Trưng bày văn hoá – đời sống 54 dân tộc.'),
    Q('Bảo tàng Lịch sử Quân sự VN nổi tiếng có?', ['Tàu vũ trụ', 'Xác máy bay B-52 bị bắn rơi', 'Khủng long', 'Robot'], 1, 'Có Cột Cờ và mảnh xác B-52 bị bắn rơi.'),
    Q('Bảo tàng Hồ Chí Minh nằm cạnh?', ['Quảng trường Ba Đình – Lăng Bác', 'Hồ Tây', 'Hồ Gươm', 'Sân bay'], 0, 'Cụm di tích Ba Đình.'),
    Q('Bảo tàng Mỹ thuật VN trưng bày?', ['Mỹ thuật cổ – hiện đại VN', 'Tranh Renaissance Ý', 'Ảnh thời trang', 'Vũ khí'], 0, 'Tranh sơn dầu, lụa, sơn mài, điêu khắc VN.'),
    Q('Hỏa Lò (Maison Centrale) hiện là?', ['Khách sạn', 'Di tích nhà tù lịch sử – nay là bảo tàng', 'Trường học', 'Bưu điện'], 1, 'Nhà tù Hoả Lò xây thời Pháp, nay là di tích.'),
    Q('Bảo tàng Phụ nữ Việt Nam nằm trên phố?', ['Lý Thường Kiệt', 'Tràng Thi (gần Hoàn Kiếm)', 'Khâm Thiên', 'Đê La Thành'], 1, '36 Lý Thường Kiệt — gần Hoàn Kiếm.'),
  ]),

  M(27, 'Hệ thống giao thông Hà Nội', [
    Q('Cầu Long Biên bắc qua sông?', ['Sông Hồng', 'Sông Đà', 'Sông Đáy', 'Sông Nhuệ'], 0, 'Cầu Long Biên – sông Hồng – xây 1898–1902.'),
    Q('Tuyến đường sắt đô thị (Metro) Hà Nội đầu tiên vận hành thương mại là?', ['Cát Linh – Hà Đông (tuyến 2A)', 'Nhổn – Ga Hà Nội', 'Yên Viên – Ngọc Hồi', 'Hà Nội – Lào Cai'], 0, '11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.'),
    Q('Sân bay quốc tế của Hà Nội là?', ['Tân Sơn Nhất', 'Nội Bài', 'Cát Bi', 'Đà Nẵng'], 1, 'Sân bay Nội Bài (Sóc Sơn).'),
    Q('Ga Hà Nội tên cũ là?', ['Ga Hàng Cỏ', 'Ga Long Biên', 'Ga Yên Viên', 'Ga Giáp Bát'], 0, 'Ga Hàng Cỏ – xây 1902.'),
    Q('Hệ thống xe buýt nhanh BRT chạy tuyến?', ['Kim Mã – Yên Nghĩa', 'Long Biên – Đông Anh', 'Mỹ Đình – Sóc Sơn', 'Cầu Giấy – Bát Tràng'], 0, 'BRT 01 Kim Mã – Yên Nghĩa.'),
    Q('Đường vành đai nào của HN dài và hoàn chỉnh nhất?', ['Vành đai 1', 'Vành đai 2', 'Vành đai 3', 'Vành đai 5'], 2, 'Vành đai 3 cơ bản khép kín.'),
  ]),

  M(28, 'Đô thị hoá và môi trường Hà Nội', [
    Q('Vấn đề môi trường nổi cộm ở Hà Nội?', ['Bão tuyết', 'Ô nhiễm không khí và ùn tắc giao thông', 'Hạn hán', 'Bão cát'], 1, 'PM2.5 và tắc đường là 2 vấn đề lớn.'),
    Q('Mùa nào không khí HN ô nhiễm nặng nhất?', ['Xuân – Hạ', 'Đông – Đầu xuân', 'Hè – Thu', 'Mưa'], 1, 'Đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.'),
    Q('Hồ Tây từng bị ô nhiễm do?', ['Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt', 'Bão', 'Mưa axit', 'Núi lửa'], 0, 'Sự cố cá chết 2016 do nước thải và thiếu oxy.'),
    Q('Giải pháp giảm ô nhiễm không khí ở HN?', ['Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm', 'Phá rừng', 'Đốt rác lộ thiên', 'Tăng xe máy'], 0, 'Trồng cây, xe điện, kiểm soát đốt rơm rạ.'),
    Q('Hồ Hoàn Kiếm có loài quý đã từng sinh sống và nay đã qua đời?', ['Rùa Hồ Gươm (Rafetus swinhoei)', 'Cá heo', 'Hà mã', 'Sấu'], 0, 'Cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.'),
    Q('Phân loại rác tại nguồn là?', ['Bỏ chung mọi thứ', 'Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình', 'Đốt hết', 'Vứt xuống sông'], 1, 'Phân loại tại nguồn giúp tái chế và giảm bãi rác.'),
  ]),

  M(29, 'Truyền thống hiếu học và giáo dục Hà Nội', [
    Q('Hà Nội nổi tiếng với truyền thống?', ['Buôn bán', 'Hiếu học – văn hiến', 'Đánh cá', 'Trồng lúa'], 1, 'Văn hiến ngàn năm, hiếu học bậc nhất.'),
    Q('Trường đại học đầu tiên của VN ở HN?', ['Đại học Quốc gia', 'Quốc Tử Giám', 'Đại học Bách khoa', 'Đại học Y'], 1, 'Quốc Tử Giám — lập 1076.'),
    Q('Hiện nay HN có khoảng bao nhiêu trường đại học?', ['10', '20', '50', 'Hơn 80'], 3, 'Hơn 80 trường ĐH và học viện.'),
    Q('Phố Tràng Tiền nổi tiếng với?', ['Hiệu sách và kem Tràng Tiền', 'Vũ trường', 'Chợ cá', 'Bãi đỗ xe'], 0, 'Phố sách – kem Tràng Tiền – Nhà hát Lớn.'),
    Q('Phố sách Hà Nội (19 tháng 12) khánh thành năm?', ['2005', '2017', '2020', '2023'], 1, '5/2017 — phố đi bộ phố sách.'),
    Q('Câu nói "Chẳng thơm cũng thể hoa nhài / Dẫu không thanh lịch cũng người Tràng An" ca ngợi?', ['Người HN thanh lịch', 'Mưa Hà Nội', 'Hoa đào', 'Phở'], 0, '"Tràng An" — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.'),
  ]),

  M(30, 'Người Hà Nội — văn hoá ứng xử thanh lịch', [
    Q('Đặc trưng giọng nói người Hà Nội gốc?', ['Phát âm chuẩn, ngữ điệu nhẹ nhàng', 'Giọng rất nặng', 'Chỉ nói ngoại ngữ', 'Không có chữ "tr"'], 0, 'Giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.'),
    Q('Bộ "Quy tắc ứng xử nơi công cộng" của HN ban hành năm?', ['2007', '2017', '2020', '2023'], 1, '2017 — Sở Văn hoá HN ban hành.'),
    Q('Ứng xử văn minh trên xe buýt là?', ['Nhường ghế cho phụ nữ có thai, người già, trẻ em', 'Chen lấn xô đẩy', 'Nói to gây ồn', 'Vứt rác lên sàn xe'], 0, 'Hành vi văn minh nơi công cộng.'),
    Q('Khi tham quan di tích, em nên?', ['Khắc tên lên di tích', 'Tôn trọng, không xả rác và làm hư hại', 'Trèo lên tượng', 'Sờ vào hiện vật quý'], 1, 'Bảo vệ di sản — trách nhiệm công dân.'),
    Q('Người HN có truyền thống ẩm thực?', ['Nóng, cay, mặn', 'Thanh – tinh tế, vừa miệng', 'Rất ngọt', 'Chỉ ăn sống'], 1, 'Đồ ăn HN thiên về hương vị thanh, tinh tế.'),
    Q('Bài hát "Hà Nội mùa thu" gợi hình ảnh?', ['Cốm xanh và lá vàng rơi', 'Bão tuyết', 'Sa mạc', 'Hoa đào'], 0, 'Mùa thu HN gắn cốm, hoa sữa, lá vàng.'),
  ]),

  M(31, 'Hà Nội — thành phố sáng tạo UNESCO', [
    Q('Hà Nội được UNESCO công nhận là "Thành phố sáng tạo" lĩnh vực?', ['Thời trang', 'Thiết kế', 'Ẩm thực', 'Phim'], 1, 'Năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.'),
    Q('"Thành phố vì hoà bình" do UNESCO trao cho HN năm?', ['1989', '1999', '2009', '2019'], 1, 'Năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.'),
    Q('Lễ hội Thiết kế Sáng tạo HN diễn ra hàng năm ở?', ['Phố cổ và các không gian di sản', 'Sân vận động', 'Cảng cá', 'Khu công nghiệp'], 0, 'Hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...'),
    Q('Không gian sáng tạo nổi tiếng cải tạo từ nhà máy cũ?', ['Complex 01 (Tây Sơn) – nhà máy in cũ', 'Big C', 'Aeon Mall', 'Vincom'], 0, 'Mô hình tái sinh kiến trúc công nghiệp.'),
    Q('Vai trò của không gian phố đi bộ Hồ Gươm?', ['Bãi đỗ xe', 'Không gian văn hoá – sáng tạo cuối tuần', 'Chợ đầu mối', 'Bến tàu'], 1, 'Vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.'),
    Q('Sáng tạo trong di sản nghĩa là?', ['Phá bỏ di sản cũ', 'Bảo tồn + tái sử dụng + tạo giá trị mới', 'Cấm sửa chữa', 'Sao chép nguyên xi'], 1, 'Bảo tồn động — sáng tạo trên nền di sản.'),
  ]),

  M(32, 'Kinh tế Hà Nội — vai trò đầu tàu', [
    Q('Hà Nội đóng góp khoảng bao nhiêu vào GDP cả nước?', ['1%', '5%', '12–13%', '50%'], 2, 'HN đóng góp khoảng 12–13% GDP quốc gia.'),
    Q('Ngành kinh tế chủ lực của HN?', ['Nông nghiệp', 'Dịch vụ – công nghiệp – CNTT', 'Khai thác dầu', 'Đánh cá biển'], 1, 'Dịch vụ chiếm tỷ trọng lớn nhất.'),
    Q('Khu công nghệ cao Hoà Lạc thuộc huyện?', ['Thạch Thất', 'Mỹ Đức', 'Phú Xuyên', 'Đông Anh'], 0, 'Khu CNC Hoà Lạc — huyện Thạch Thất.'),
    Q('Trung tâm tài chính – ngân hàng tập trung ở phố?', ['Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo', 'Khâm Thiên', 'Phố sách', 'Quảng An'], 0, 'Khu vực ngân hàng – tài chính trung tâm.'),
    Q('Mặt hàng xuất khẩu chủ lực của HN gồm?', ['Điện thoại, linh kiện điện tử, dệt may, da giày', 'Chỉ gạo', 'Chỉ cà phê', 'Chỉ thuỷ sản'], 0, 'Đa dạng — điện tử, dệt may là chủ lực.'),
    Q('Khu đô thị mới phía Tây HN tiêu biểu là?', ['Phú Mỹ Hưng', 'Mỹ Đình – Mễ Trì – Cầu Giấy', 'Long Bình', 'Thủ Thiêm'], 1, 'Khu vực phát triển nhanh nhất 20 năm qua.'),
  ]),

  M(33, 'Phong trào thanh niên – học sinh Hà Nội', [
    Q('Tổ chức Đội của HS THCS gọi là?', ['Đội Thiếu niên Tiền phong Hồ Chí Minh', 'Hội Sinh viên', 'Hội Nhà văn', 'Hội Phụ nữ'], 0, 'Đội TNTP HCM — tổ chức của thiếu niên.'),
    Q('Đoàn TNCS HCM dành cho lứa tuổi?', ['6–10', '11–15', '16–30', '40+'], 2, 'Đoàn TN từ 16 đến 30 tuổi.'),
    Q('Phong trào "Kế hoạch nhỏ" do tổ chức nào phát động?', ['Đội TNTP HCM', 'Hội phụ huynh', 'Bộ Y tế', 'UNICEF'], 0, 'Kế hoạch nhỏ truyền thống của Đội.'),
    Q('"Áo xanh tình nguyện" gắn với phong trào?', ['Tình nguyện hè / Tiếp sức mùa thi', 'Đua xe', 'Đua thuyền', 'Cờ vua'], 0, 'Mùa hè xanh, Tiếp sức mùa thi.'),
    Q('Em có thể tham gia hoạt động cộng đồng ở HN qua?', ['Câu lạc bộ tình nguyện ở trường, phường', 'Đứng nhìn', 'Đóng cửa ở nhà', 'Không cần tham gia'], 0, 'CLB tình nguyện, Đội, Đoàn.'),
    Q('Lợi ích khi tham gia phong trào tình nguyện?', ['Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng', 'Mất thời gian học vô ích', 'Không có lợi', 'Bị trừ điểm'], 0, 'Học từ thực tế, rèn kỹ năng sống.'),
  ]),

  M(34, 'Bảo vệ di sản văn hoá Hà Nội', [
    Q('Trách nhiệm bảo vệ di sản thuộc về?', ['Chỉ chính quyền', 'Toàn xã hội, trong đó có học sinh', 'Chỉ người lớn tuổi', 'Khách du lịch'], 1, 'Mọi người dân, trong đó có học sinh, đều có trách nhiệm.'),
    Q('Hành vi nào KHÔNG bảo vệ di sản?', ['Khắc tên lên bia đá Văn Miếu', 'Tham quan có hướng dẫn', 'Mua vé vào di tích', 'Giữ vệ sinh'], 0, 'Khắc/viết bậy lên di tích là phá hoại.'),
    Q('Luật Di sản Văn hoá hiện hành quy định di sản?', ['Là sở hữu chung của Nhà nước và nhân dân', 'Của cá nhân', 'Của doanh nghiệp', 'Có thể tự do mua bán'], 0, 'Sở hữu toàn dân, Nhà nước quản lí.'),
    Q('Khi phát hiện cổ vật ngẫu nhiên, công dân cần?', ['Giữ làm của riêng', 'Báo cơ quan văn hoá / chính quyền', 'Bán ra nước ngoài', 'Vứt đi'], 1, 'Báo cáo theo Luật Di sản.'),
    Q('Hoạt động học sinh có thể làm để bảo vệ di sản?', ['Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ', 'Phá tường', 'Khắc tên', 'Đốt giấy mã trong di tích'], 0, 'CLB di sản, hướng dẫn viên nhí.'),
    Q('Khi tham quan di sản nên?', ['Ăn mặc lịch sự, đi nhẹ – nói khẽ', 'Mặc đồ tắm', 'Hò hét', 'Nghe nhạc to'], 0, 'Tôn trọng không gian thiêng.'),
  ]),

  M(35, 'Hà Nội trong tương lai — quy hoạch và phát triển bền vững', [
    Q('Quy hoạch chung HN đến 2045 hướng đến mô hình?', ['Đô thị nén siêu lớn', 'Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan', 'Nông thôn', 'Khu công nghiệp lớn'], 1, 'Đề án "Thành phố sông Hồng" và đô thị thông minh.'),
    Q('Khái niệm "đô thị thông minh" liên quan?', ['Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công', 'Chỉ là nhà cao tầng', 'Trang trí đèn đẹp', 'Không liên quan công nghệ'], 0, 'Smart city = data + IoT + dịch vụ số.'),
    Q('Phát triển bền vững là?', ['Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai', 'Phát triển bằng mọi giá', 'Khai thác cạn kiệt tài nguyên', 'Bỏ qua môi trường'], 0, 'Định nghĩa kinh điển (UN 1987).'),
    Q('Mục tiêu khí hậu cho HN đến 2050?', ['Tăng phát thải', 'Trung hoà carbon (theo cam kết quốc gia)', 'Không quan tâm', 'Đốt nhiều nhiên liệu hơn'], 1, 'VN cam kết net-zero 2050 tại COP26.'),
    Q('Em có thể đóng góp gì cho HN bền vững?', ['Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây', 'Đốt rác trong nhà', 'Xả rác xuống hồ', 'Lãng phí nước'], 0, 'Hành động nhỏ, ý nghĩa lớn.'),
    Q('Tinh thần công dân Thủ đô là?', ['Văn minh – hiện đại – yêu Hà Nội', 'Vô cảm', 'Phá phách', 'Lãng phí'], 0, 'Khẩu hiệu giáo dục công dân HN.'),
  ]),

  M(36, 'Ôn tập HK2 — Hà Nội ngàn năm văn hiến', [
    Q('Làng gốm cổ ở Gia Lâm?', ['Bát Tràng', 'Vạn Phúc', 'Đông Hồ', 'Bưởi'], 0, 'Bát Tràng.'),
    Q('Làng lụa nổi tiếng quận Hà Đông?', ['Vạn Phúc', 'Bát Tràng', 'Đông Hồ', 'Phù Đổng'], 0, 'Vạn Phúc.'),
    Q('Truyền thuyết "Sơn Tinh – Thuỷ Tinh" gắn núi?', ['Yên Tử', 'Tản Viên (Ba Vì)', 'Phan Xi Păng', 'Bà Đen'], 1, 'Tản Viên.'),
    Q('Năm HN được UNESCO trao "Thành phố vì hoà bình"?', ['1989', '1999', '2010', '2019'], 1, '1999.'),
    Q('Tuyến metro đầu tiên HN?', ['Cát Linh – Hà Đông', 'Nhổn – Ga HN', 'Yên Viên – Ngọc Hồi', 'Hà Đông – Xuân Mai'], 0, 'Tuyến 2A Cát Linh – Hà Đông.'),
    Q('"Hà Nội 36 phố phường" chỉ?', ['Khu phố cổ Hoàn Kiếm', 'Vùng ngoại thành', 'Khu công nghiệp', 'Cảng biển'], 0, 'Phố cổ Hoàn Kiếm.'),
    Q('Một di sản UNESCO ở HN?', ['Hoàng thành Thăng Long', 'Vịnh Hạ Long', 'Phong Nha', 'Tràng An'], 0, 'Hoàng thành Thăng Long — 2010.'),
    Q('Sự kiện 10/10/1954 là?', ['Vua dời đô', 'Giải phóng Thủ đô', 'Quốc khánh', 'Thành lập Đảng'], 1, 'Giải phóng Thủ đô.'),
  ]),
];

export const S6GDDP_SCENARIOS = indexBy(S6GDDP_WEEKS);
