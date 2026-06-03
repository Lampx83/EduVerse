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
    Q('Hà Nội nằm ở vùng nào của Việt Nam?', ['Bắc Trung Bộ', 'Đồng bằng sông Hồng', 'Đông Nam Bộ', 'Tây Nguyên'], 1, 'Hà Nội là trung tâm vùng Đồng bằng sông Hồng.'),
    Q('Hà Nội có vị trí địa lí đặc biệt vì là?', ['Vùng núi cao', 'Đảo lớn nhất', 'Tỉnh ven biển', 'Thủ đô của Việt Nam'], 3, 'Hà Nội là Thủ đô — trung tâm chính trị – văn hoá – khoa học của cả nước.'),
    Q('Hà Nội tiếp giáp với bao nhiêu tỉnh?', ['7', '5', '8', '10'], 2, 'Hà Nội tiếp giáp 8 tỉnh: Thái Nguyên, Vĩnh Phúc, Bắc Giang, Bắc Ninh, Hưng Yên, Hà Nam, Hoà Bình, Phú Thọ.'),
    Q('Sông lớn nào chảy qua Hà Nội?', ['Sông Mê Kông', 'Sông Cửu Long', 'Sông Hương', 'Sông Hồng'], 3, 'Sông Hồng chảy qua Hà Nội, từng được gọi là sông Cái, sông Nhị Hà.'),
    Q('Hà Nội mở rộng địa giới hành chính lần gần nhất vào năm nào?', ['2008', '2020', '1954', '1975'], 0, 'Năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.'),
    Q('Diện tích Hà Nội hiện nay vào khoảng?', ['10 000 km²', '5 000 km²', '1 000 km²', '3 359 km²'], 3, 'Sau 2008, diện tích Hà Nội khoảng 3 359 km².'),
  ]),

  M(2, 'Địa hình và khí hậu Hà Nội', [
    Q('Phần lớn địa hình Hà Nội là?', ['Cao nguyên', 'Hải đảo', 'Đồng bằng', 'Núi cao'], 2, 'Hà Nội chủ yếu là đồng bằng (đồng bằng sông Hồng), có ít núi ở phía tây.'),
    Q('Đỉnh núi cao nhất Hà Nội nằm ở?', ['Đông Anh', 'Ba Vì', 'Sóc Sơn', 'Long Biên'], 1, 'Núi Ba Vì (Tản Viên) là đỉnh cao nhất Hà Nội.'),
    Q('Khí hậu Hà Nội thuộc kiểu?', ['Ôn đới', 'Nhiệt đới gió mùa', 'Hàn đới', 'Xích đạo'], 1, 'Hà Nội có khí hậu nhiệt đới gió mùa, 4 mùa rõ rệt.'),
    Q('Mùa lạnh nhất ở Hà Nội thường vào tháng?', ['7', '10', '4', '1'], 3, 'Tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.'),
    Q('Đặc trưng của tháng 7 ở Hà Nội?', ['Có tuyết', 'Lạnh, khô', 'Nóng, mưa nhiều', 'Mát mẻ'], 2, 'Tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.'),
    Q('Hiện tượng thời tiết đặc biệt vào mùa xuân ở Hà Nội?', ['Băng giá', 'Bão tuyết', 'Mưa phùn nồm ẩm', 'Khô hạn'], 2, 'Mưa phùn, nồm ẩm là đặc trưng mùa xuân HN do gió mùa Đông Nam.'),
  ]),

  M(3, 'Dân cư và các đơn vị hành chính Hà Nội', [
    Q('Hà Nội hiện có bao nhiêu đơn vị hành chính cấp huyện (quận–huyện–thị xã)?', ['20', '12', '40', '30'], 3, 'Khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).'),
    Q('Thị xã duy nhất của Hà Nội là?', ['Long Biên', 'Hà Đông', 'Sơn Tây', 'Bắc Từ Liêm'], 2, 'Sơn Tây là thị xã duy nhất, các đơn vị tương đương đã lên quận.'),
    Q('Dân số Hà Nội hiện nay vào khoảng?', ['20 triệu', '4 triệu', '8 triệu', '1 triệu'], 2, 'Khoảng 8 triệu người (cả tạm trú).'),
    Q('Dân tộc đa số ở Hà Nội là?', ['Mường', 'Kinh', 'Dao', 'Tày'], 1, 'Người Kinh chiếm phần lớn dân cư.'),
    Q('Cộng đồng dân tộc thiểu số đông nhất ở Hà Nội tập trung ở huyện?', ['Hoài Đức', 'Đông Anh', 'Gia Lâm', 'Ba Vì'], 3, 'Người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.'),
    Q('Mật độ dân số cao nhất Hà Nội thường ở các?', ['Đảo nhỏ', 'Huyện ngoại thành', 'Vùng núi Ba Vì', 'Quận nội thành'], 3, 'Nội thành mật độ rất cao, ngoại thành thưa hơn.'),
  ]),

  M(4, 'Sông Hồng và hệ thống sông – hồ Hà Nội', [
    Q('Tên xưa của sông Hồng đoạn qua Hà Nội là?', ['Sông Cầu', 'Sông Tô Lịch', 'Sông Đáy', 'Sông Nhị Hà'], 3, 'Sông Hồng từng được gọi là sông Nhị Hà, sông Cái.'),
    Q('Hồ nước nổi tiếng nằm giữa trung tâm Hà Nội?', ['Hồ Trúc Bạch', 'Hồ Bảy Mẫu', 'Hồ Gươm (Hoàn Kiếm)', 'Hồ Tây'], 2, 'Hồ Hoàn Kiếm là biểu tượng trung tâm Hà Nội.'),
    Q('Hồ lớn nhất Hà Nội nội thành?', ['Hồ Tây', 'Hồ Thiền Quang', 'Hồ Linh Đàm', 'Hồ Gươm'], 0, 'Hồ Tây ~500 ha, lớn nhất nội thành.'),
    Q('Sông nào từng là con đường thuỷ chính của kinh thành Thăng Long xưa?', ['Sông Tô Lịch', 'Sông Cả', 'Sông Mã', 'Sông Cầu'], 0, 'Sông Tô Lịch nối Hồ Tây ra sông Hồng, từng là trục giao thông.'),
    Q('Tên gọi "Hồ Hoàn Kiếm" gắn với truyền thuyết về?', ['Trần Hưng Đạo', 'Lê Lợi trả gươm thần', 'Lý Thái Tổ', 'An Dương Vương'], 1, 'Vua Lê Lợi trả lại gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm (trả gươm).'),
    Q('Sông Đáy chảy ở phía nào của Hà Nội?', ['Đông Nam', 'Bắc', 'Tây Nam', 'Đông Bắc'], 2, 'Sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.'),
  ]),

  M(5, 'Tên gọi Thăng Long – Đông Đô – Hà Nội qua các thời kì', [
    Q('Năm 1010, ai đã định đô tại Thăng Long?', ['Trần Nhân Tông', 'Lý Thái Tổ', 'Ngô Quyền', 'Lê Lợi'], 1, 'Lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.'),
    Q('Tên "Thăng Long" có nghĩa là?', ['Rồng bay lên', 'Thuyền rồng', 'Rồng vàng', 'Long mạch'], 0, '"Thăng" = bay lên, "Long" = rồng — gắn với truyền thuyết rồng bay khi vua dời đô.'),
    Q('Tên "Đông Đô" được dùng thời?', ['Lý (giữ tên Thăng Long)', 'Trần (vẫn dùng Thăng Long)', 'Lê sơ (đổi thành Đông Kinh)', 'Hồ'], 3, 'Năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.'),
    Q('Tên "Đông Quan" do triều đại nào áp đặt?', ['Nguyên', 'Thanh (thời Càn Long)', 'Tống (thời Lý chống Tống)', 'Minh'], 3, 'Quân Minh xâm lược đặt tên Đông Quan để phủ nhận tính thủ đô của ta.'),
    Q('Tên "Hà Nội" chính thức xuất hiện vào năm nào?', ['1945', '1010', '1831', '1428'], 2, 'Năm 1831 vua Minh Mạng lập tỉnh Hà Nội.'),
    Q('Tên "Hà Nội" có nghĩa là?', ['Bên trong sông Hồng', 'Phía bắc sông', 'Trong dòng sông', 'Đầu dòng sông'], 0, '"Hà" = sông, "Nội" = bên trong → vùng đất nằm giữa các con sông.'),
    Q('Sự kiện 10/10/1954 ở Hà Nội là?', ['Quốc khánh', 'Vua Lý dời đô', 'Giải phóng Thủ đô', 'Khởi nghĩa Hai Bà Trưng'], 2, '10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.'),
  ]),

  M(6, 'Khu di tích Hoàng thành Thăng Long', [
    Q('Hoàng thành Thăng Long được UNESCO công nhận Di sản Văn hoá Thế giới năm?', ['2010', '2008', '2015', '2000'], 0, 'Năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.'),
    Q('Trục trung tâm Hoàng thành xưa là?', ['Trục Đông – Tây', 'Trục Tô Lịch', 'Trục Bắc – Nam (Đoan Môn – Kính Thiên)', 'Trục sông Hồng'], 2, 'Trục thần đạo Bắc–Nam đi qua Đoan Môn, điện Kính Thiên.'),
    Q('Cổng phía nam Hoàng thành tên gọi là?', ['Đông Môn', 'Tây Môn', 'Đoan Môn', 'Bắc Môn'], 2, 'Đoan Môn là cổng phía nam còn lại đến nay.'),
    Q('Cột Cờ Hà Nội nằm trong khu vực nào?', ['Hoàng thành – nay là khu vực Điện Biên Phủ', 'Sông Hồng', 'Phố cổ', 'Hồ Tây'], 0, 'Cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.'),
    Q('Điện Kính Thiên có vai trò gì thời Lê?', ['Nhà ăn', 'Trại lính', 'Kho lương', 'Điện chính nơi vua làm việc, tế lễ'], 3, 'Điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.'),
    Q('Cuộc khai quật khảo cổ lớn ở 18 Hoàng Diệu phát lộ điều gì?', ['Lăng vua Hùng', 'Di tích Đông Sơn', 'Văn Miếu', 'Nền móng cung điện Lý – Trần – Lê'], 3, 'Khai quật 2002–2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.'),
  ]),

  M(7, 'Văn Miếu – Quốc Tử Giám: trường đại học đầu tiên', [
    Q('Văn Miếu Hà Nội được lập năm?', ['1802', '1428', '1070', '1010'], 2, 'Vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.'),
    Q('Quốc Tử Giám được lập năm 1076 dưới thời?', ['Nguyễn Ánh', 'Lê Thái Tổ', 'Lý Nhân Tông', 'Trần Thái Tông'], 2, 'Vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.'),
    Q('Bia Tiến sĩ tại Văn Miếu khắc tên những ai?', ['Thầy thuốc', 'Các tiến sĩ đỗ trong kì thi Đình', 'Tướng lĩnh', 'Vua chúa'], 1, 'Khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.'),
    Q('82 bia Tiến sĩ Văn Miếu được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Di sản phi vật thể', 'Di sản ẩm thực', 'Di sản ký ức thế giới'], 3, 'Năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.'),
    Q('Khuê Văn Các trong Văn Miếu là biểu tượng của?', ['Đà Nẵng', 'Hải Phòng', 'TP. Hồ Chí Minh', 'Hà Nội'], 3, 'Khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.'),
    Q('Khuê Văn Các được xây dựng vào thời?', ['Trần (cùng thời mở rộng Quốc Tử Giám)', 'Pháp thuộc', 'Lý (thời lập Văn Miếu năm 1070)', 'Nguyễn (thời Gia Long)'], 3, 'Khuê Văn Các xây năm 1805 dưới triều Nguyễn.'),
  ]),

  M(8, 'Phố cổ Hà Nội — 36 phố phường', [
    Q('Khu phố cổ Hà Nội còn được gọi là?', ['36 phố phường', 'Khu chợ lớn', 'Khu công nghiệp', 'Khu mới'], 0, 'Tên gọi truyền thống "Hà Nội 36 phố phường".'),
    Q('Chữ "Hàng" trong tên phố cổ chỉ?', ['Tên người', 'Loại hàng hoá bán ở phố đó', 'Tên cây', 'Số nhà'], 1, 'Mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...'),
    Q('Phố nào nổi tiếng chế tác bạc?', ['Hàng Mã', 'Hàng Buồm', 'Hàng Bạc', 'Hàng Đào'], 2, 'Hàng Bạc là phố chế tác kim hoàn.'),
    Q('Phố Hàng Mã bán?', ['Đồng hồ', 'Hoa quả', 'Đồ vàng mã, đồ chơi giấy', 'Vải lụa và quần áo may sẵn'], 2, 'Hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.'),
    Q('Chợ Đồng Xuân thuộc quận nào?', ['Đống Đa', 'Hai Bà Trưng', 'Tây Hồ', 'Hoàn Kiếm'], 3, 'Chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.'),
    Q('Đặc trưng kiến trúc nhà phố cổ là?', ['Nhà sàn', 'Nhà ống mặt tiền hẹp – sâu', 'Nhà cao tầng', 'Lâu đài đá'], 1, 'Mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.'),
  ]),

  M(9, 'Lễ hội truyền thống ở Hà Nội', [
    Q('Lễ hội nào lớn nhất ở Hà Nội đầu năm âm lịch?', ['Lễ hội chùa Hương', 'Lễ hội Gò Đống Đa', 'Lễ hội Cổ Loa', 'Lễ hội Đền Hùng'], 0, 'Lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.'),
    Q('Lễ hội chùa Hương ở huyện nào?', ['Thạch Thất', 'Phú Xuyên', 'Mỹ Đức', 'Ba Vì (vùng núi phía Tây Hà Nội)'], 2, 'Quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.'),
    Q('Lễ hội Gò Đống Đa tưởng nhớ chiến thắng nào?', ['Vạn Tường', 'Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789', 'Bạch Đằng', 'Chi Lăng'], 1, 'Vua Quang Trung đại phá quân Thanh Tết 1789.'),
    Q('Lễ hội Cổ Loa thờ ai?', ['Hai Bà Trưng', 'An Dương Vương', 'Trần Hưng Đạo', 'Lý Thái Tổ'], 1, 'Đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.'),
    Q('Hội Gióng được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Di sản tư liệu', 'Di sản hỗn hợp', 'Di sản văn hoá phi vật thể đại diện nhân loại'], 3, 'Năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.'),
    Q('Hội Gióng đền Phù Đổng (Gia Lâm) tổ chức vào tháng?', ['Tháng Giêng', 'Tháng 7 âm', 'Tháng 4 âm', 'Tháng 10 âm'], 2, 'Mùng 9 tháng 4 âm lịch.'),
  ]),

  M(10, 'Danh nhân Hà Nội — Chu Văn An, Nguyễn Trãi', [
    Q('Chu Văn An là?', ['Nhà quân sự', 'Vua thời Trần mạt', 'Thầy thuốc', 'Nhà giáo, hiệu trưởng Quốc Tử Giám'], 3, 'Chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.'),
    Q('Chu Văn An nổi tiếng dâng?', ['Sớ chém đầu thầy phong thuỷ', 'Sớ xin từ quan', 'Bài thơ tỏ tình', '"Thất trảm sớ" đề nghị chém 7 nịnh thần'], 3, 'Thất trảm sớ nổi tiếng trong sử Việt.'),
    Q('Quê hương Chu Văn An nay thuộc?', ['Đà Nẵng', 'Huyện Đông Anh, Hà Nội', 'Quận Thanh Trì, Hà Nội', 'Huyện Chí Linh, Hải Dương'], 2, 'Làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).'),
    Q('Nguyễn Trãi (1380–1442) gắn với?', ['Khởi nghĩa Tây Sơn', 'Khởi nghĩa Yên Thế', 'Khởi nghĩa Lam Sơn', 'Phong trào Cần Vương'], 2, 'Quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.'),
    Q('Tác phẩm nổi tiếng của Nguyễn Trãi là?', ['Chinh phụ ngâm', 'Hịch tướng sĩ', 'Truyện Kiều', 'Bình Ngô đại cáo'], 3, 'Bình Ngô đại cáo — "Thiên cổ hùng văn".'),
    Q('Nguyễn Trãi được UNESCO vinh danh năm 1980 là?', ['Danh nhân văn hoá thế giới', 'Anh hùng dân tộc', 'Thầy thuốc giỏi', 'Nhà khoa học'], 0, 'UNESCO công nhận năm 1980 nhân 600 năm ngày sinh.'),
  ]),

  M(11, 'Danh nhân Hà Nội — Lý Thái Tổ, Trần Quốc Tuấn', [
    Q('Lý Thái Tổ tên thật là?', ['Lý Công Uẩn', 'Lý Anh Tông', 'Lý Long Tường', 'Lý Thường Kiệt'], 0, 'Lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.'),
    Q('"Chiếu dời đô" có ý nghĩa?', ['Cấm Phật giáo', 'Tuyên bố chiến tranh', 'Giải thích lí do dời đô về Đại La', 'Chia ruộng đất'], 2, 'Văn kiện nổi tiếng bậc nhất sử Việt.'),
    Q('Trần Hưng Đạo có tên thật là?', ['Trần Quang Khải', 'Trần Nhật Duật', 'Trần Khánh Dư', 'Trần Quốc Tuấn'], 3, 'Trần Quốc Tuấn — Hưng Đạo Đại Vương.'),
    Q('Trần Hưng Đạo chỉ huy chiến thắng nào nổi tiếng?', ['Cẩm Đường', 'Đống Đa 1789', 'Bạch Đằng 1288', 'Điện Biên Phủ 1954'], 2, 'Đại phá quân Nguyên trên sông Bạch Đằng năm 1288.'),
    Q('Tác phẩm nào do Trần Hưng Đạo viết?', ['Hịch tướng sĩ', 'Truyền kì mạn lục', 'Bình Ngô đại cáo', 'Chiếu dời đô'], 0, 'Hịch tướng sĩ — kêu gọi binh sĩ.'),
    Q('Phố/khu vực nào ở Hà Nội mang tên các vị anh hùng trên?', ['Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt', 'Chỉ Trần Hưng Đạo', 'Chỉ có Lý Thường Kiệt', 'Chỉ phố Lý Thái Tổ'], 0, 'Cả ba đều có phố lớn ở Hà Nội.'),
  ]),

  M(12, 'Lịch sử Cổ Loa và nhà nước Âu Lạc', [
    Q('Cổ Loa thuộc huyện nào của Hà Nội?', ['Đông Anh', 'Sóc Sơn', 'Long Biên', 'Gia Lâm'], 0, 'Thuộc xã Cổ Loa, huyện Đông Anh.'),
    Q('Thành Cổ Loa do ai xây dựng?', ['Hùng Vương', 'An Dương Vương', 'Lý Bí (sáng lập nhà nước Vạn Xuân)', 'Hai Bà Trưng'], 1, 'Sau khi sáp nhập Văn Lang, An Dương Vương lập Âu Lạc và xây Cổ Loa.'),
    Q('Đặc điểm nổi bật của thành Cổ Loa?', ['Hình vuông', 'Hình tròn 1 vòng', 'Có 3 vòng thành xoắn ốc', 'Thành bằng đá'], 2, 'Ba vòng thành đắp đất xoắn ốc.'),
    Q('Nỏ Liên Châu trong truyền thuyết gắn với?', ['An Tiêm', 'Mai An Tiêm', 'Tản Viên', 'Cao Lỗ'], 3, 'Tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.'),
    Q('Truyền thuyết Mỵ Châu – Trọng Thuỷ gắn với?', ['Triệu Đà – âm mưu xâm lược', 'Ngô Quyền', 'Hai Bà Trưng', 'Lê Lợi'], 0, 'Triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.'),
    Q('Đền thờ An Dương Vương ở Cổ Loa còn gọi là?', ['Đền Đô', 'Đền Trần', 'Đền Thượng', 'Đền Hùng'], 2, 'Đền Thượng — chính điện thờ An Dương Vương.'),
  ]),

  M(13, 'Khởi nghĩa Hai Bà Trưng — Mê Linh', [
    Q('Hai Bà Trưng là ai?', ['Hai bà tiên', 'Hai con gái Hùng Vương', 'Hai chị em Lý Bí', 'Trưng Trắc và Trưng Nhị'], 3, 'Hai chị em — Trưng Trắc và Trưng Nhị.'),
    Q('Mê Linh xưa nay thuộc huyện nào của Hà Nội?', ['Sóc Sơn', 'Mê Linh', 'Long Biên', 'Đông Anh'], 1, 'Mê Linh nay là huyện ngoại thành phía bắc HN.'),
    Q('Khởi nghĩa Hai Bà Trưng nổ ra năm?', ['248', '111', '938', '40'], 3, 'Mùa xuân năm 40, khởi nghĩa chống nhà Hán.'),
    Q('Chồng của Trưng Trắc là?', ['Lý Bí (vua khởi nghĩa năm 542)', 'Thi Sách', 'Triệu Đà', 'Cao Lỗ'], 1, 'Thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.'),
    Q('Sau khi thắng, Trưng Trắc xưng?', ['Thái hậu', 'Hoàng đế', 'Trưng Vương', 'Đại tướng'], 2, 'Bà xưng Trưng Vương, đóng đô ở Mê Linh.'),
    Q('Đền Hai Bà Trưng nổi tiếng ở Hà Nội nằm ở đâu?', ['Văn Miếu', 'Đông Anh', 'Hồ Tây', 'Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)'], 3, 'Cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.'),
  ]),

  M(14, 'Chiến thắng Đống Đa — Quang Trung', [
    Q('Trận Ngọc Hồi – Đống Đa diễn ra vào năm?', ['1789', '1288', '1885', '1077'], 0, 'Tết Kỷ Dậu 1789.'),
    Q('Vua Quang Trung tên thật là?', ['Nguyễn Nhạc', 'Nguyễn Ánh', 'Nguyễn Lữ', 'Nguyễn Huệ'], 3, 'Nguyễn Huệ — lãnh tụ Tây Sơn.'),
    Q('Quân địch bị đánh bại tại Đống Đa là?', ['Quân Minh', 'Quân Tống', 'Quân Nguyên', 'Quân Thanh'], 3, '29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.'),
    Q('Quang Trung hành quân thần tốc từ đâu ra Thăng Long?', ['Cao Bằng', 'Phú Xuân (Huế)', 'Hoa Lư', 'Sài Gòn'], 1, 'Từ Phú Xuân ra Bắc trong khoảng 1 tháng.'),
    Q('Lễ hội Gò Đống Đa tổ chức ngày nào?', ['Mùng 1 Tết', 'Mùng 5 Tết', '10/3 âm', 'Rằm tháng Giêng'], 1, 'Mùng 5 Tết — kỉ niệm chiến thắng.'),
    Q('Tướng giặc tử trận trong trận Đống Đa là?', ['Hứa Thế Hanh', 'Tôn Sĩ Nghị', 'Sầm Nghi Đống', 'Liễu Thăng'], 2, 'Sầm Nghi Đống tự vẫn tại gò Đống Đa.'),
  ]),

  M(15, 'Hà Nội thời Pháp thuộc — kiến trúc Đông Dương', [
    Q('Pháp đánh chiếm Hà Nội lần đầu năm?', ['1873', '1858', '1884', '1945'], 0, '1873 Francis Garnier đánh thành Hà Nội lần 1.'),
    Q('Tổng đốc Hà Nội tuẫn tiết khi thành thất thủ lần 2 (1882) là?', ['Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Hoàng Diệu', 'Phan Thanh Giản'], 2, 'Hoàng Diệu treo cổ tự vẫn trong Võ Miếu.'),
    Q('Nhà hát Lớn Hà Nội xây dựng theo phong cách?', ['Gô-tích', 'Á đông', 'Tân cổ điển Pháp', 'Hiện đại'], 2, 'Xây 1901–1911 theo mẫu Opéra Garnier (Paris).'),
    Q('Cầu Long Biên do ai thiết kế?', ['Nguyễn Tri Phương', 'Daydé & Pillé', 'Eiffel', 'Le Corbusier'], 1, 'Hãng Daydé & Pillé Pháp, khánh thành 1902.'),
    Q('Phong cách "Kiến trúc Đông Dương" pha trộn?', ['Pháp & Việt – Hán', 'Pháp & Nhật', 'Trung & Anh', 'Đức & Việt'], 0, 'Kết hợp nghệ thuật Pháp với chi tiết phương Đông.'),
    Q('Toà nhà nào hiện là Bảo tàng Lịch sử Quốc gia?', ['Bưu điện', 'Nhà hát Lớn', 'Phủ Toàn quyền', 'Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)'], 3, '1 Tràng Tiền — Louis Finot cũ.'),
  ]),

  M(16, 'Cách mạng Tháng Tám 1945 ở Hà Nội', [
    Q('Tổng khởi nghĩa giành chính quyền ở Hà Nội thắng lợi ngày?', ['2/9/1945', '30/4/1975', '19/8/1945', '10/10/1954'], 2, '19/8/1945 — Hà Nội giành chính quyền.'),
    Q('Quảng trường Ba Đình là nơi?', ['Quốc khánh 2/9/1945', 'Vua Lê Lợi lên ngôi', 'Lý Thái Tổ dời đô', 'Mỹ ném bom'], 0, 'Bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.'),
    Q('Người chỉ huy khởi nghĩa Hà Nội 19/8/1945 thuộc tổ chức?', ['Mặt trận Việt Minh', 'Pháp Bộ', 'Đại Việt', 'Quốc dân Đảng'], 0, 'Việt Minh lãnh đạo Tổng khởi nghĩa.'),
    Q('Bắc Bộ phủ (nay là Nhà khách Chính phủ) trước 1945 là?', ['Phủ Thủ tướng', 'Nhà tù', 'Bưu điện', 'Phủ Thống sứ Bắc Kỳ'], 3, 'Phủ Thống sứ Bắc Kỳ thời Pháp.'),
    Q('Lá cờ đỏ sao vàng tung bay trên kì đài Hà Nội 19/8/1945 đánh dấu?', ['Pháp đầu hàng', 'Nhật rút quân', 'Chính quyền nhân dân ra đời ở Thủ đô', 'Khởi đầu chiến tranh'], 2, 'Chính quyền cách mạng được thành lập tại Hà Nội.'),
    Q('Ngày 2/9/1945 cả nước có sự kiện gì?', ['Pháp ký hiệp ước', 'Mỹ ném bom', 'Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình', 'Quân Đồng minh đến'], 2, 'Lễ Tuyên bố nước VNDCCH ra đời.'),
  ]),

  M(17, 'Hà Nội — Điện Biên Phủ trên không 12/1972', [
    Q('Chiến dịch "Điện Biên Phủ trên không" diễn ra trong?', ['60 ngày 1979', '7 ngày 1968', '30 ngày 1975', '12 ngày đêm 12/1972'], 3, '18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.'),
    Q('Loại máy bay chiến lược của Mỹ bị bắn rơi nhiều ở HN là?', ['F-16 (tiêm kích đa năng)', 'F-4 Phantom (tiêm kích hộ tống)', 'A-7 Corsair II (cường kích)', 'B-52'], 3, '34 chiếc B-52 bị bắn rơi trong chiến dịch.'),
    Q('Vũ khí chính bắn rơi B-52 là?', ['Tàu ngầm', 'Tên lửa SAM-2 và pháo cao xạ', 'Bom hạt nhân', 'Súng trường'], 1, 'Tên lửa SAM-2 (С-75) và pháo phòng không.'),
    Q('Phố Khâm Thiên (Hà Nội) ghi dấu thảm hoạ gì?', ['Lụt lớn', 'Hoả hoạn', 'Động đất', 'B-52 ném bom khu dân cư 26/12/1972'], 3, 'Ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.'),
    Q('Đài tưởng niệm "Khâm Thiên" thể hiện hình ảnh?', ['Cánh chim hoà bình', 'Lá cờ đỏ sao vàng tung bay', 'Người mẹ bồng con đã mất', 'Người lính'], 2, 'Tượng đài bà mẹ ôm con — biểu tượng đau thương và lên án chiến tranh.'),
    Q('Kết quả ngoại giao sau chiến thắng 12 ngày đêm là?', ['Hiệp định Genève', 'Hiệp ước Versailles', 'Hiệp định Paris 27/1/1973', 'Hiệp định Bắc Kinh'], 2, 'Buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.'),
  ]),

  M(18, 'Ôn tập HK1 — Hà Nội từ Thăng Long đến Thủ đô', [
    Q('Sông lớn chảy qua Hà Nội?', ['Sông Mê Kông', 'Sông Đà', 'Sông Hương', 'Sông Hồng'], 3, 'Sông Hồng.'),
    Q('Vua nào dời đô về Thăng Long năm 1010?', ['Trần Nhân Tông', 'Quang Trung', 'Lý Công Uẩn (Lý Thái Tổ)', 'Lê Lợi'], 2, 'Lý Công Uẩn.'),
    Q('Trận đánh nổi tiếng Tết Kỷ Dậu 1789 ở HN?', ['Chi Lăng', 'Tốt Động', 'Ngọc Hồi – Đống Đa', 'Bạch Đằng'], 2, 'Quang Trung đại phá quân Thanh.'),
    Q('Hai Bà Trưng đóng đô ở?', ['Mê Linh', 'Đại La', 'Hoa Lư', 'Cổ Loa'], 0, 'Mê Linh — quê hương Hai Bà.'),
    Q('Hoàng thành Thăng Long được UNESCO công nhận năm?', ['2015', '2010', '1995', '2008'], 1, '2010.'),
    Q('Ngày Giải phóng Thủ đô?', ['2/9/1945', '30/4/1975', '10/10/1954', '19/8/1945'], 2, '10/10/1954.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập tại?', ['Nhà hát Lớn', 'Quảng trường Ba Đình', 'Hoàng thành', 'Cột Cờ'], 1, 'Quảng trường Ba Đình.'),
  ]),

  // ──────────────── HK2 — VĂN HOÁ · LÀNG NGHỀ · ĐÔ THỊ HIỆN ĐẠI ────────────────
  M(19, 'Ẩm thực Hà Nội — Phở, bún chả, cốm', [
    Q('Phở Hà Nội nổi tiếng với loại nước dùng?', ['Nước lèo cá', 'Nước hầm xương bò trong, thanh', 'Nước cốt dừa', 'Nước tương'], 1, 'Đặc trưng: nước trong, ngọt thanh từ xương bò.'),
    Q('Bún chả Hà Nội ăn cùng?', ['Tương đen', 'Phô mai', 'Mắm nêm', 'Nước mắm chua ngọt + thịt nướng + rau sống'], 3, 'Thịt nướng than hoa, nước chấm pha chua ngọt.'),
    Q('Cốm Vòng là đặc sản của làng?', ['Vạn Phúc', 'Làng Vòng (Cầu Giấy)', 'Bát Tràng', 'Đông Hồ'], 1, 'Làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.'),
    Q('Cốm thường được làm vào mùa?', ['Đông (lúa nếp cuối vụ)', 'Thu', 'Hè (lúa chiêm chín)', 'Xuân (lúa đông xuân)'], 1, 'Mùa thu — lúa nếp non.'),
    Q('Chả cá Lã Vọng là món gồm?', ['Cá nướng', 'Cá lăng tẩm nghệ + thì là + bún + mắm tôm', 'Cá hấp', 'Cá kho tộ'], 1, 'Đặc sản phố Chả Cá.'),
    Q('Bánh cốm Hà Nội thường dùng trong dịp?', ['Giỗ tổ', 'Quốc khánh', 'Tết Trung Thu', 'Cưới hỏi'], 3, 'Lễ cưới truyền thống.'),
  ]),

  M(20, 'Làng gốm Bát Tràng', [
    Q('Làng gốm Bát Tràng thuộc huyện nào?', ['Đông Anh', 'Long Biên', 'Thanh Trì', 'Gia Lâm'], 3, 'Bát Tràng — xã thuộc huyện Gia Lâm.'),
    Q('Nghề gốm Bát Tràng có lịch sử khoảng?', ['100 năm', '500 năm', 'Hơn 700 năm', '1 000 năm'], 2, 'Khoảng 700 năm, từ thời Trần – Hồ.'),
    Q('Sản phẩm tiêu biểu của Bát Tràng?', ['Nón lá', 'Bát đĩa, lọ hoa, đồ thờ gốm', 'Tranh dân gian', 'Lụa tơ tằm Hà Đông'], 1, 'Đồ gốm gia dụng và mỹ thuật.'),
    Q('Men gốm Bát Tràng nổi tiếng nhất là?', ['Men trắng đục', 'Men rạn, men ngọc', 'Men nhựa', 'Men kim loại'], 1, 'Men rạn (cobalt), men ngọc, men lam là đặc trưng.'),
    Q('Đất sét làm gốm Bát Tràng xưa lấy từ?', ['Phú Quốc', 'Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao', 'Vùng đất sét Sapa, Lào Cai', 'Đà Lạt'], 1, 'Tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.'),
    Q('Du khách đến Bát Tràng có thể trải nghiệm?', ['Câu cá', 'Đua xe', 'Tự nặn và vẽ gốm', 'Trượt tuyết'], 2, 'Workshop nặn – vẽ – tô gốm cho du khách.'),
  ]),

  M(21, 'Làng lụa Vạn Phúc', [
    Q('Làng lụa Vạn Phúc thuộc quận nào?', ['Long Biên', 'Hoàn Kiếm', 'Thanh Xuân', 'Hà Đông'], 3, 'Vạn Phúc nay thuộc quận Hà Đông.'),
    Q('Sản phẩm chủ lực của Vạn Phúc?', ['Lụa tơ tằm', 'Đồ gốm', 'Bánh cốm', 'Mây tre đan'], 0, 'Lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.'),
    Q('Lụa Vạn Phúc nổi tiếng vì?', ['Cứng và thô', 'Đổi màu liên tục', 'Mềm, mịn, bóng, bền màu', 'Có mùi thơm'], 2, 'Lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.'),
    Q('Bài hát "Áo lụa Hà Đông" liên tưởng đến?', ['Sự sang trọng và dịu dàng của thiếu nữ Hà Nội', 'Học tập', 'Kinh doanh', 'Quân sự'], 0, 'Bài thơ Nguyên Sa, nhạc Ngô Thuỵ Miên gắn với hình ảnh áo lụa.'),
    Q('Tơ tằm dùng dệt lụa được lấy từ?', ['Vỏ cây', 'Sợi bông', 'Kén tằm', 'Lông cừu'], 2, 'Kén tằm — tằm ăn lá dâu, nhả tơ làm kén.'),
    Q('Hoạt động du lịch nổi bật ở Vạn Phúc?', ['Xem hát chèo', 'Tham quan xưởng dệt và mua lụa', 'Leo núi', 'Lặn biển'], 1, 'Phố lụa Vạn Phúc rực rỡ sắc màu.'),
  ]),

  M(22, 'Làng nghề khác: Đông Hồ – Tranh & Chuông Phù Đổng', [
    Q('Tranh Đông Hồ thực ra nguồn gốc từ tỉnh nào (giáp HN)?', ['Nam Định', 'Hải Phòng', 'Bắc Ninh', 'Hà Tây cũ'], 2, 'Làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.'),
    Q('Đặc trưng tranh Đông Hồ?', ['Vẽ sơn dầu', 'In gỗ trên giấy điệp với màu tự nhiên', 'In offset', 'Vẽ kĩ thuật số'], 1, 'Ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.'),
    Q('Tranh Đông Hồ "Đám cưới chuột" thể hiện?', ['Sinh hoạt nông dân', 'Lễ cưới', 'Phê phán thói tham nhũng / châm biếm xã hội', 'Chuyện cổ tích'], 2, 'Ý nghĩa châm biếm sâu sắc.'),
    Q('Đền Phù Đổng thờ?', ['An Dương Vương', 'Lý Thái Tổ', 'Hai Bà Trưng', 'Thánh Gióng'], 3, 'Đền Phù Đổng (Gia Lâm) thờ Thánh Gióng.'),
    Q('Truyền thuyết Thánh Gióng kể về?', ['Vua Hùng dựng nước', 'Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân', 'An Dương Vương xây thành', 'Lý Bí khởi nghĩa'], 1, 'Một trong tứ bất tử của VN.'),
    Q('Tinh thần Thánh Gióng tượng trưng cho?', ['Khoa học', 'Lòng yêu nước và sức mạnh quật khởi của dân tộc', 'Buôn bán', 'Văn học'], 1, 'Biểu tượng tinh thần chống ngoại xâm.'),
  ]),

  M(23, 'Múa rối nước và nghệ thuật truyền thống Hà Nội', [
    Q('Múa rối nước là loại hình nghệ thuật?', ['Hiện đại', 'Dân gian độc đáo của Đồng bằng Bắc Bộ – VN', 'Phương Tây', 'Trung Hoa'], 1, 'Múa rối nước là sáng tạo độc đáo của VN.'),
    Q('Nhà hát Múa rối Thăng Long ở Hà Nội nằm gần?', ['Ga Hà Nội', 'Sông Hồng', 'Sân bay', 'Hồ Hoàn Kiếm'], 3, 'Phố Đinh Tiên Hoàng, gần Hồ Gươm.'),
    Q('Sân khấu múa rối nước là?', ['Sân khấu vải', 'Mặt nước', 'Băng tuyết', 'Sàn gỗ'], 1, 'Diễn trên mặt nước — diễn viên giấu sau bức mành.'),
    Q('Nhân vật quen thuộc trong rối nước?', ['Pinocchio', 'Chú Tễu', 'Kachiusa', 'Mickey'], 1, 'Chú Tễu là nhân vật dẫn chuyện hài hước.'),
    Q('Ca trù được UNESCO công nhận là?', ['Di sản phi vật thể cần bảo vệ khẩn cấp', 'Di sản tư liệu', 'Di sản thiên nhiên', 'Kỳ quan'], 0, 'Năm 2009 — cần bảo vệ khẩn cấp.'),
    Q('Chèo, cải lương, ca trù — loại hình nào không xuất phát từ Bắc Bộ?', ['Cải lương', 'Ca trù', 'Quan họ', 'Chèo (sân khấu dân gian Bắc Bộ)'], 0, 'Cải lương xuất phát từ Nam Bộ.'),
  ]),

  M(24, 'Lễ Tết và phong tục Hà Nội', [
    Q('Tết Nguyên Đán Hà Nội có món bánh đặc trưng?', ['Bánh chưng', 'Bánh tét', 'Bánh ít', 'Bánh khọt'], 0, 'Bánh chưng vuông — miền Bắc.'),
    Q('Cây quất, hoa đào là biểu tượng Tết của?', ['Miền Nam', 'Tây Nguyên', 'Miền Bắc – Hà Nội', 'Miền Trung'], 2, 'Hoa đào, quất là đặc trưng Tết Bắc.'),
    Q('Phố Hàng Mã rực rỡ vào dịp?', ['Quốc khánh', 'Tết Trung Thu và Tết Nguyên Đán', 'Hè (mùa du lịch)', 'Thi cuối kì'], 1, 'Vàng mã, lồng đèn, đồ chơi Trung thu.'),
    Q('Tục "khai bút đầu xuân" gắn với tinh thần?', ['Kinh doanh', 'Du lịch', 'Hiếu học của người Hà Nội', 'Quân sự'], 2, 'Truyền thống văn hiến — khai bút đầu năm.'),
    Q('Chợ hoa Tết lâu đời nhất Hà Nội?', ['Long Biên', 'Đồng Xuân', 'Chợ Bưởi (phiên chợ cây cảnh)', 'Hàng Lược'], 3, 'Chợ hoa Hàng Lược từ thời Pháp.'),
    Q('Tết Hàn Thực mùng 3/3 âm lịch có món?', ['Bánh trôi, bánh chay', 'Phở bò truyền thống', 'Bánh chưng', 'Bánh xèo'], 0, 'Tết Hàn Thực — ăn bánh trôi, bánh chay.'),
  ]),

  M(25, 'Danh lam thắng cảnh ngoại thành: Ba Vì, Hương Sơn', [
    Q('Vườn quốc gia Ba Vì có?', ['Sa mạc', 'Rừng nguyên sinh và đỉnh núi cao', 'Cánh đồng muối', 'Băng hà'], 1, 'Rừng nguyên sinh và đỉnh Vua, Tản Viên, Ngọc Hoa.'),
    Q('Đỉnh Tản Viên gắn với truyền thuyết?', ['Thánh Gióng', 'Sơn Tinh – Thuỷ Tinh', 'Tấm Cám', 'Mỵ Châu – Trọng Thuỷ'], 1, 'Sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.'),
    Q('Chùa Hương nằm trong dãy núi?', ['Tam Đảo', 'Hương Sơn', 'Trường Sơn', 'Yên Tử'], 1, 'Hương Sơn — quần thể chùa nhiều động đá vôi.'),
    Q('Đi vào chùa Hương du khách thường đi bằng?', ['Tàu cao tốc', 'Máy bay', 'Tàu lửa', 'Thuyền trên suối Yến'], 3, 'Suối Yến — đường thuỷ dẫn vào động Hương Tích.'),
    Q('Động Hương Tích được mệnh danh là?', ['Động bí ẩn', 'Động tuyết', 'Động ma quái', '"Nam thiên đệ nhất động"'], 3, 'Vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".'),
    Q('Suối khoáng nóng Quang Hanh nằm ở?', ['Hoà Bình', 'Quảng Ninh', 'Nam Định', 'Hà Nội'], 1, 'Quảng Ninh, không phải HN. (Câu phân biệt phạm vi.)'),
  ]),

  M(26, 'Các bảo tàng tiêu biểu ở Hà Nội', [
    Q('Bảo tàng Dân tộc học VN trưng bày?', ['Tranh phương Tây', 'Đồ vũ trụ', 'Khủng long', 'Văn hoá 54 dân tộc Việt Nam'], 3, 'Trưng bày văn hoá – đời sống 54 dân tộc.'),
    Q('Bảo tàng Lịch sử Quân sự VN nổi tiếng có?', ['Khủng long', 'Tàu vũ trụ', 'Xác máy bay B-52 bị bắn rơi', 'Robot điều khiển trưng bày'], 2, 'Có Cột Cờ và mảnh xác B-52 bị bắn rơi.'),
    Q('Bảo tàng Hồ Chí Minh nằm cạnh?', ['Hồ Gươm', 'Sân bay', 'Hồ Tây', 'Quảng trường Ba Đình – Lăng Bác'], 3, 'Cụm di tích Ba Đình.'),
    Q('Bảo tàng Mỹ thuật VN trưng bày?', ['Tranh Renaissance Ý', 'Vũ khí', 'Ảnh thời trang', 'Mỹ thuật cổ – hiện đại VN'], 3, 'Tranh sơn dầu, lụa, sơn mài, điêu khắc VN.'),
    Q('Hỏa Lò (Maison Centrale) hiện là?', ['Khách sạn', 'Bưu điện', 'Di tích nhà tù lịch sử – nay là bảo tàng', 'Trường học'], 2, 'Nhà tù Hoả Lò xây thời Pháp, nay là di tích.'),
    Q('Bảo tàng Phụ nữ Việt Nam nằm trên phố?', ['Tràng Thi (gần Hoàn Kiếm)', 'Lý Thường Kiệt', 'Khâm Thiên', 'Đê La Thành'], 0, '36 Lý Thường Kiệt — gần Hoàn Kiếm.'),
  ]),

  M(27, 'Hệ thống giao thông Hà Nội', [
    Q('Cầu Long Biên bắc qua sông?', ['Sông Nhuệ', 'Sông Đáy', 'Sông Đà', 'Sông Hồng'], 3, 'Cầu Long Biên – sông Hồng – xây 1898–1902.'),
    Q('Tuyến đường sắt đô thị (Metro) Hà Nội đầu tiên vận hành thương mại là?', ['Cát Linh – Hà Đông (tuyến 2A)', 'Nhổn – Ga Hà Nội', 'Hà Nội – Lào Cai', 'Yên Viên – Ngọc Hồi'], 0, '11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.'),
    Q('Sân bay quốc tế của Hà Nội là?', ['Cát Bi', 'Tân Sơn Nhất', 'Nội Bài', 'Đà Nẵng'], 2, 'Sân bay Nội Bài (Sóc Sơn).'),
    Q('Ga Hà Nội tên cũ là?', ['Ga Hàng Cỏ', 'Ga Giáp Bát', 'Ga Long Biên', 'Ga Yên Viên'], 0, 'Ga Hàng Cỏ – xây 1902.'),
    Q('Hệ thống xe buýt nhanh BRT chạy tuyến?', ['Kim Mã – Yên Nghĩa', 'Mỹ Đình – Sóc Sơn', 'Cầu Giấy – Bát Tràng', 'Long Biên – Đông Anh'], 0, 'BRT 01 Kim Mã – Yên Nghĩa.'),
    Q('Đường vành đai nào của HN dài và hoàn chỉnh nhất?', ['Vành đai 5', 'Vành đai 1', 'Vành đai 3', 'Vành đai 2'], 2, 'Vành đai 3 cơ bản khép kín.'),
  ]),

  M(28, 'Đô thị hoá và môi trường Hà Nội', [
    Q('Vấn đề môi trường nổi cộm ở Hà Nội?', ['Hạn hán', 'Ô nhiễm không khí và ùn tắc giao thông', 'Bão cát', 'Bão tuyết'], 1, 'PM2.5 và tắc đường là 2 vấn đề lớn.'),
    Q('Mùa nào không khí HN ô nhiễm nặng nhất?', ['Đông – Đầu xuân', 'Hè – Thu', 'Xuân – Hạ', 'Mùa mưa (tháng 6 – tháng 8)'], 0, 'Đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.'),
    Q('Hồ Tây từng bị ô nhiễm do?', ['Mưa axit', 'Bão lớn làm sạt lở bờ hồ', 'Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt', 'Núi lửa'], 2, 'Sự cố cá chết 2016 do nước thải và thiếu oxy.'),
    Q('Giải pháp giảm ô nhiễm không khí ở HN?', ['Tăng xe máy', 'Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm', 'Đốt rác lộ thiên', 'Phá rừng'], 1, 'Trồng cây, xe điện, kiểm soát đốt rơm rạ.'),
    Q('Hồ Hoàn Kiếm có loài quý đã từng sinh sống và nay đã qua đời?', ['Cá heo', 'Hà mã châu Phi nuôi thả', 'Rùa Hồ Gươm (Rafetus swinhoei)', 'Cá sấu nước ngọt bản địa'], 2, 'Cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.'),
    Q('Phân loại rác tại nguồn là?', ['Bỏ chung mọi thứ', 'Đốt hết', 'Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình', 'Vứt xuống sông'], 2, 'Phân loại tại nguồn giúp tái chế và giảm bãi rác.'),
  ]),

  M(29, 'Truyền thống hiếu học và giáo dục Hà Nội', [
    Q('Hà Nội nổi tiếng với truyền thống?', ['Đánh cá', 'Hiếu học – văn hiến', 'Trồng lúa', 'Buôn bán'], 1, 'Văn hiến ngàn năm, hiếu học bậc nhất.'),
    Q('Trường đại học đầu tiên của VN ở HN?', ['Đại học Y', 'Đại học Quốc gia', 'Đại học Bách khoa', 'Quốc Tử Giám'], 3, 'Quốc Tử Giám — lập 1076.'),
    Q('Hiện nay HN có khoảng bao nhiêu trường đại học?', ['10', 'Hơn 80', '20', '50'], 1, 'Hơn 80 trường ĐH và học viện.'),
    Q('Phố Tràng Tiền nổi tiếng với?', ['Hiệu sách và kem Tràng Tiền', 'Vũ trường', 'Chợ cá', 'Bãi đỗ xe'], 0, 'Phố sách – kem Tràng Tiền – Nhà hát Lớn.'),
    Q('Phố sách Hà Nội (19 tháng 12) khánh thành năm?', ['2020', '2023', '2005', '2017'], 3, '5/2017 — phố đi bộ phố sách.'),
    Q('Câu nói "Chẳng thơm cũng thể hoa nhài / Dẫu không thanh lịch cũng người Tràng An" ca ngợi?', ['Mưa Hà Nội', 'Phở Hà Nội nức tiếng', 'Người HN thanh lịch', 'Hoa đào'], 2, '"Tràng An" — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.'),
  ]),

  M(30, 'Người Hà Nội — văn hoá ứng xử thanh lịch', [
    Q('Đặc trưng giọng nói người Hà Nội gốc?', ['Giọng rất nặng', 'Không có chữ "tr"', 'Phát âm chuẩn, ngữ điệu nhẹ nhàng', 'Chỉ nói ngoại ngữ'], 2, 'Giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.'),
    Q('Bộ "Quy tắc ứng xử nơi công cộng" của HN ban hành năm?', ['2017', '2020', '2007', '2023'], 0, '2017 — Sở Văn hoá HN ban hành.'),
    Q('Ứng xử văn minh trên xe buýt là?', ['Nói to gây ồn', 'Chen lấn xô đẩy', 'Vứt rác lên sàn xe', 'Nhường ghế cho phụ nữ có thai, người già, trẻ em'], 3, 'Hành vi văn minh nơi công cộng.'),
    Q('Khi tham quan di tích, em nên?', ['Khắc tên lên di tích', 'Sờ vào hiện vật quý', 'Trèo lên tượng', 'Tôn trọng, không xả rác và làm hư hại'], 3, 'Bảo vệ di sản — trách nhiệm công dân.'),
    Q('Người HN có truyền thống ẩm thực?', ['Rất ngọt', 'Thanh – tinh tế, vừa miệng', 'Chỉ ăn sống', 'Nóng, cay, mặn'], 1, 'Đồ ăn HN thiên về hương vị thanh, tinh tế.'),
    Q('Bài hát "Hà Nội mùa thu" gợi hình ảnh?', ['Bão tuyết', 'Cốm xanh và lá vàng rơi', 'Sa mạc', 'Hoa đào'], 1, 'Mùa thu HN gắn cốm, hoa sữa, lá vàng.'),
  ]),

  M(31, 'Hà Nội — thành phố sáng tạo UNESCO', [
    Q('Hà Nội được UNESCO công nhận là "Thành phố sáng tạo" lĩnh vực?', ['Ẩm thực', 'Thiết kế', 'Thời trang', 'Điện ảnh và phim truyện'], 1, 'Năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.'),
    Q('"Thành phố vì hoà bình" do UNESCO trao cho HN năm?', ['2019', '1999', '2009', '1989'], 1, 'Năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.'),
    Q('Lễ hội Thiết kế Sáng tạo HN diễn ra hàng năm ở?', ['Sân vận động', 'Phố cổ và các không gian di sản', 'Khu công nghiệp', 'Cảng cá'], 1, 'Hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...'),
    Q('Không gian sáng tạo nổi tiếng cải tạo từ nhà máy cũ?', ['Complex 01 (Tây Sơn) – nhà máy in cũ', 'Vincom', 'Aeon Mall', 'Trung tâm thương mại Big C Thăng Long'], 0, 'Mô hình tái sinh kiến trúc công nghiệp.'),
    Q('Vai trò của không gian phố đi bộ Hồ Gươm?', ['Không gian văn hoá – sáng tạo cuối tuần', 'Bãi đỗ xe', 'Chợ đầu mối', 'Bến tàu'], 0, 'Vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.'),
    Q('Sáng tạo trong di sản nghĩa là?', ['Phá bỏ di sản cũ', 'Cấm sửa chữa', 'Sao chép nguyên xi', 'Bảo tồn + tái sử dụng + tạo giá trị mới'], 3, 'Bảo tồn động — sáng tạo trên nền di sản.'),
  ]),

  M(32, 'Kinh tế Hà Nội — vai trò đầu tàu', [
    Q('Hà Nội đóng góp khoảng bao nhiêu vào GDP cả nước?', ['50%', '12–13%', '5%', '1%'], 1, 'HN đóng góp khoảng 12–13% GDP quốc gia.'),
    Q('Ngành kinh tế chủ lực của HN?', ['Nông nghiệp', 'Đánh cá biển', 'Khai thác dầu', 'Dịch vụ – công nghiệp – CNTT'], 3, 'Dịch vụ chiếm tỷ trọng lớn nhất.'),
    Q('Khu công nghệ cao Hoà Lạc thuộc huyện?', ['Phú Xuyên', 'Đông Anh', 'Thạch Thất', 'Mỹ Đức'], 2, 'Khu CNC Hoà Lạc — huyện Thạch Thất.'),
    Q('Trung tâm tài chính – ngân hàng tập trung ở phố?', ['Quảng An', 'Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo', 'Phố sách', 'Khâm Thiên'], 1, 'Khu vực ngân hàng – tài chính trung tâm.'),
    Q('Mặt hàng xuất khẩu chủ lực của HN gồm?', ['Điện thoại, linh kiện điện tử, dệt may, da giày', 'Chỉ thuỷ sản', 'Chỉ gạo', 'Chỉ cà phê'], 0, 'Đa dạng — điện tử, dệt may là chủ lực.'),
    Q('Khu đô thị mới phía Tây HN tiêu biểu là?', ['Phú Mỹ Hưng', 'Long Bình', 'Mỹ Đình – Mễ Trì – Cầu Giấy', 'Thủ Thiêm'], 2, 'Khu vực phát triển nhanh nhất 20 năm qua.'),
  ]),

  M(33, 'Phong trào thanh niên – học sinh Hà Nội', [
    Q('Tổ chức Đội của HS THCS gọi là?', ['Hội Sinh viên', 'Hội Phụ nữ', 'Đội Thiếu niên Tiền phong Hồ Chí Minh', 'Hội Nhà văn'], 2, 'Đội TNTP HCM — tổ chức của thiếu niên.'),
    Q('Đoàn TNCS HCM dành cho lứa tuổi?', ['11–15', '16–30', '40+', '6–10'], 1, 'Đoàn TN từ 16 đến 30 tuổi.'),
    Q('Phong trào "Kế hoạch nhỏ" do tổ chức nào phát động?', ['Hội phụ huynh', 'Đội TNTP HCM', 'UNICEF', 'Bộ Y tế'], 1, 'Kế hoạch nhỏ truyền thống của Đội.'),
    Q('"Áo xanh tình nguyện" gắn với phong trào?', ['Cờ vua', 'Tình nguyện hè / Tiếp sức mùa thi', 'Đua thuyền', 'Đua xe'], 1, 'Mùa hè xanh, Tiếp sức mùa thi.'),
    Q('Em có thể tham gia hoạt động cộng đồng ở HN qua?', ['Câu lạc bộ tình nguyện ở trường, phường', 'Đóng cửa ở nhà', 'Đứng nhìn', 'Không cần tham gia'], 0, 'CLB tình nguyện, Đội, Đoàn.'),
    Q('Lợi ích khi tham gia phong trào tình nguyện?', ['Không có lợi', 'Bị trừ điểm', 'Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng', 'Mất thời gian học vô ích'], 2, 'Học từ thực tế, rèn kỹ năng sống.'),
  ]),

  M(34, 'Bảo vệ di sản văn hoá Hà Nội', [
    Q('Trách nhiệm bảo vệ di sản thuộc về?', ['Toàn xã hội, trong đó có học sinh', 'Chỉ chính quyền', 'Chỉ người lớn tuổi', 'Khách du lịch'], 0, 'Mọi người dân, trong đó có học sinh, đều có trách nhiệm.'),
    Q('Hành vi nào KHÔNG bảo vệ di sản?', ['Mua vé vào di tích', 'Tham quan có hướng dẫn', 'Khắc tên lên bia đá Văn Miếu', 'Giữ vệ sinh'], 2, 'Khắc/viết bậy lên di tích là phá hoại.'),
    Q('Luật Di sản Văn hoá hiện hành quy định di sản?', ['Của doanh nghiệp', 'Của cá nhân', 'Có thể tự do mua bán', 'Là sở hữu chung của Nhà nước và nhân dân'], 3, 'Sở hữu toàn dân, Nhà nước quản lí.'),
    Q('Khi phát hiện cổ vật ngẫu nhiên, công dân cần?', ['Vứt đi', 'Bán ra nước ngoài', 'Báo cơ quan văn hoá / chính quyền', 'Giữ làm của riêng'], 2, 'Báo cáo theo Luật Di sản.'),
    Q('Hoạt động học sinh có thể làm để bảo vệ di sản?', ['Khắc tên', 'Đốt giấy mã trong di tích', 'Phá tường', 'Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ'], 3, 'CLB di sản, hướng dẫn viên nhí.'),
    Q('Khi tham quan di sản nên?', ['Mặc đồ tắm', 'Ăn mặc lịch sự, đi nhẹ – nói khẽ', 'Nghe nhạc to', 'Hò hét'], 1, 'Tôn trọng không gian thiêng.'),
  ]),

  M(35, 'Hà Nội trong tương lai — quy hoạch và phát triển bền vững', [
    Q('Quy hoạch chung HN đến 2045 hướng đến mô hình?', ['Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan', 'Khu công nghiệp lớn', 'Nông thôn', 'Đô thị nén siêu lớn'], 0, 'Đề án "Thành phố sông Hồng" và đô thị thông minh.'),
    Q('Khái niệm "đô thị thông minh" liên quan?', ['Trang trí đèn đẹp', 'Chỉ là nhà cao tầng', 'Không liên quan công nghệ', 'Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công'], 3, 'Smart city = data + IoT + dịch vụ số.'),
    Q('Phát triển bền vững là?', ['Bỏ qua môi trường', 'Phát triển bằng mọi giá', 'Khai thác cạn kiệt tài nguyên', 'Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai'], 3, 'Định nghĩa kinh điển (UN 1987).'),
    Q('Mục tiêu khí hậu cho HN đến 2050?', ['Trung hoà carbon (theo cam kết quốc gia)', 'Tăng phát thải', 'Không quan tâm', 'Đốt nhiều nhiên liệu hơn'], 0, 'VN cam kết net-zero 2050 tại COP26.'),
    Q('Em có thể đóng góp gì cho HN bền vững?', ['Lãng phí nước', 'Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây', 'Xả rác xuống hồ', 'Đốt rác trong nhà'], 1, 'Hành động nhỏ, ý nghĩa lớn.'),
    Q('Tinh thần công dân Thủ đô là?', ['Lãng phí', 'Vô cảm', 'Phá phách', 'Văn minh – hiện đại – yêu Hà Nội'], 3, 'Khẩu hiệu giáo dục công dân HN.'),
  ]),

  M(36, 'Ôn tập HK2 — Hà Nội ngàn năm văn hiến', [
    Q('Làng gốm cổ ở Gia Lâm?', ['Làng Bưởi (giấy dó vùng Tây Hồ)', 'Đông Hồ', 'Bát Tràng', 'Vạn Phúc'], 2, 'Bát Tràng.'),
    Q('Làng lụa nổi tiếng quận Hà Đông?', ['Phù Đổng', 'Đông Hồ', 'Vạn Phúc', 'Bát Tràng'], 2, 'Vạn Phúc.'),
    Q('Truyền thuyết "Sơn Tinh – Thuỷ Tinh" gắn núi?', ['Phan Xi Păng', 'Tản Viên (Ba Vì)', 'Yên Tử', 'Bà Đen'], 1, 'Tản Viên.'),
    Q('Năm HN được UNESCO trao "Thành phố vì hoà bình"?', ['2010', '1999', '2019', '1989'], 1, '1999.'),
    Q('Tuyến metro đầu tiên HN?', ['Yên Viên – Ngọc Hồi', 'Nhổn – Ga HN', 'Hà Đông – Xuân Mai', 'Cát Linh – Hà Đông'], 3, 'Tuyến 2A Cát Linh – Hà Đông.'),
    Q('"Hà Nội 36 phố phường" chỉ?', ['Cảng biển', 'Khu phố cổ Hoàn Kiếm', 'Vùng ngoại thành', 'Khu công nghiệp'], 1, 'Phố cổ Hoàn Kiếm.'),
    Q('Một di sản UNESCO ở HN?', ['Phong Nha', 'Vịnh Hạ Long', 'Tràng An', 'Hoàng thành Thăng Long'], 3, 'Hoàng thành Thăng Long — 2010.'),
    Q('Sự kiện 10/10/1954 là?', ['Vua dời đô', 'Thành lập Đảng', 'Quốc khánh', 'Giải phóng Thủ đô'], 3, 'Giải phóng Thủ đô.'),
  ]),
];

export const S6GDDP_SCENARIOS = indexBy(S6GDDP_WEEKS);
