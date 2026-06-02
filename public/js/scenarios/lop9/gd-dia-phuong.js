// ============================================================
// Lớp 9 · GIÁO DỤC ĐỊA PHƯƠNG (HÀ NỘI) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 — Hà Nội kháng chiến + đổi mới + di sản đương đại.
// 4–5 câu/tuần · ID prefix: "S9GDDP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9GDDP', 'gd-dia-phuong', n, title, qs, opts);

export const S9GDDP_WEEKS = [
  // ───── HK1 — Lịch sử Hà Nội 1945-1986 ─────
  M(1, 'Hà Nội — Thủ đô của nước VNDCCH', [
    Q('Hà Nội trở thành thủ đô của nước VNDCCH năm?', ['1945, sau Cách mạng Tháng Tám', '1954', '1975', '1986'], 0, 'Hà Nội là thủ đô VNDCCH từ 02/9/1945.'),
    Q('Quảng trường Ba Đình tổ chức?', ['Lễ tuyên bố độc lập 2/9/1945', 'Lễ duyệt binh', 'Lễ hội', 'Tuỳ ý'], 0, 'Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình.'),
    Q('Ý nghĩa Hà Nội là thủ đô?', ['Trung tâm chính trị, văn hoá, biểu tượng độc lập', 'Chỉ thành phố', 'Tuỳ ý', 'Không quan trọng'], 0, 'Hà Nội mang tầm vóc thủ đô.'),
  ]),

  M(2, 'Hà Nội — 60 ngày đêm khói lửa (1946)', [
    Q('Toàn quốc kháng chiến bắt đầu?', ['Đêm 19/12/1946', '02/9/1945', '07/5/1954', '30/4/1975'], 0, 'Toàn quốc kháng chiến nổ ra đêm 19/12/1946.'),
    Q('Lời kêu gọi toàn quốc kháng chiến do?', ['Chủ tịch Hồ Chí Minh', 'Trần Hưng Đạo', 'Quang Trung', 'Lê Lợi'], 0, 'Lời kêu gọi của Bác Hồ.'),
    Q('60 ngày đêm Hà Nội kháng chiến?', ['19/12/1946 – 17/2/1947', '1945-1947', '1947-1954', '1946-1948'], 0, '60 ngày đêm chiến đấu kiên cường tại Hà Nội.'),
    Q('Mục tiêu giữ Hà Nội?', ['Ghìm chân địch để chính phủ rút ra ATK', 'Tấn công địch', 'Chờ viện', 'Tuỳ ý'], 0, 'Hà Nội cầm cự để chính phủ rút an toàn.'),
    Q('Khẩu hiệu?', ['"Quyết tử cho Tổ quốc quyết sinh"', 'Tuỳ ý', 'Không có', 'Khẩu hiệu khác'], 0, 'Khẩu hiệu "Quyết tử cho Tổ quốc quyết sinh".'),
  ]),

  M(3, 'Trung đoàn Thủ đô — Anh hùng Hà Nội', [
    Q('Trung đoàn Thủ đô?', ['Lực lượng chiến đấu giữ Hà Nội 1946-1947', 'Quân đoàn', 'Sư đoàn', 'Tuỳ ý'], 0, 'Trung đoàn Thủ đô anh hùng.'),
    Q('Khu vực chiến đấu chính?', ['Liên khu I (phố cổ)', 'Toàn thành phố', 'Ngoại thành', 'Tuỳ ý'], 0, 'Liên khu I là chiến tuyến chính.'),
    Q('Rút khỏi Hà Nội đêm?', ['17/2/1947', '1948', '1949', '1954'], 0, 'Trung đoàn Thủ đô rút an toàn đêm 17/2/1947.'),
    Q('Ý nghĩa 60 ngày đêm?', ['Tạo điều kiện cho cuộc kháng chiến lâu dài', 'Chiến thắng', 'Tuỳ ý', 'Vô nghĩa'], 0, 'Ghìm chân địch + bảo vệ căn cứ.'),
  ]),

  M(4, 'Hà Nội trong kháng chiến (1947-1954)', [
    Q('Hà Nội bị Pháp chiếm 1947-1954?', ['Vẫn có cơ sở cách mạng bí mật', 'Hoàn toàn yên', 'Tuỳ ý', 'Không có'], 0, 'Cơ sở cách mạng vẫn hoạt động trong vùng tạm chiếm.'),
    Q('Đóng góp Hà Nội cho Điện Biên Phủ?', ['Người, lương thực, vũ khí', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Hà Nội đóng góp lớn cho chiến thắng Điện Biên.'),
    Q('Tiếp quản Thủ đô?', ['10/10/1954', '1945', '1975', '1986'], 0, 'Ngày 10/10/1954, quân ta tiếp quản Hà Nội.'),
    Q('Sự kiện 10/10/1954?', ['Quân ta vào Hà Nội, Pháp rút', 'Pháp đến', 'Mỹ đến', 'Tuỳ ý'], 0, 'Giải phóng Thủ đô sau 9 năm.'),
  ]),

  M(5, 'Hà Nội — Hậu phương lớn (1954-1965)', [
    Q('Sau 1954, Hà Nội?', ['Thủ đô của miền Bắc XHCN, xây dựng kinh tế', 'Tuỳ ý', 'Tiếp tục chiến tranh', 'Không có gì'], 0, 'Hà Nội xây dựng XHCN ở miền Bắc.'),
    Q('Xây dựng cơ sở vật chất?', ['Nhà máy, trường học, bệnh viện', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Hà Nội phát triển hạ tầng XHCN.'),
    Q('Trường ĐH lớn ở HN sau 1954?', ['ĐH Tổng hợp, ĐH Bách khoa, ĐH Sư phạm', 'Chỉ 1 trường', 'Tuỳ ý', 'Không có'], 0, 'Các trường ĐH lớn hình thành sau 1954.'),
    Q('Hỗ trợ miền Nam?', ['"Tất cả cho tiền tuyến"', 'Tự lo miền Bắc', 'Tuỳ ý', 'Mặc kệ'], 0, 'Khẩu hiệu thời chiến.'),
  ]),

  M(6, 'Chiến tranh phá hoại miền Bắc — Hà Nội', [
    Q('Mỹ ném bom Hà Nội từ?', ['1964 (sự kiện Vịnh Bắc Bộ)', '1954', '1975', '1985'], 0, 'Chiến tranh phá hoại bắt đầu 1964.'),
    Q('Mục đích Mỹ ném bom?', ['Phá hoại miền Bắc XHCN, gây áp lực đàm phán', 'Tuỳ ý', 'Không có', 'Hoà bình'], 0, 'Mỹ muốn ép VN nhân nhượng.'),
    Q('Hà Nội ứng phó?', ['Sơ tán + xây hầm + tiếp tục sản xuất', 'Đầu hàng', 'Tuỳ ý', 'Mặc kệ'], 0, 'Hà Nội kiên cường chống chiến tranh phá hoại.'),
    Q('Phòng không Hà Nội?', ['Bắn rơi nhiều máy bay Mỹ', 'Không bắn được', 'Tuỳ ý', 'Mặc kệ'], 0, 'Lực lượng phòng không HN rất hiệu quả.'),
  ]),

  M(7, '"Điện Biên Phủ trên không" — 12/1972 (Phần 1)', [
    Q('Chiến dịch Linebacker II của Mỹ?', ['Ném bom B-52 vào Hà Nội, Hải Phòng', 'Đàm phán', 'Tuỳ ý', 'Hoà bình'], 0, 'Chiến dịch đánh bom rải thảm B-52.'),
    Q('Thời gian "Hà Nội 12 ngày đêm"?', ['18 – 30/12/1972', '12/1965', '1968', '1975'], 0, '12 ngày đêm 12/1972.'),
    Q('B-52 là?', ['Máy bay ném bom chiến lược của Mỹ', 'Tên lửa', 'Tàu', 'Tuỳ ý'], 0, 'B-52 là máy bay ném bom mạnh nhất của Mỹ.'),
    Q('Mục tiêu Mỹ?', ['Đánh sập tinh thần kháng chiến, ép ký Hiệp định', 'Hoà bình', 'Tuỳ ý', 'Vô bổ'], 0, 'Mỹ định đánh sập ý chí kháng chiến của VN.'),
  ]),

  M(8, '"Điện Biên Phủ trên không" — 12/1972 (Phần 2)', [
    Q('Số B-52 bị bắn rơi?', ['34 chiếc (theo VN)', 'Không có', '1', '100'], 0, 'VN bắn rơi 34 B-52 + nhiều máy bay khác.'),
    Q('Vũ khí chính bắn B-52?', ['Tên lửa SAM-2', 'Máy bay MIG', 'Pháo', 'Tuỳ ý'], 0, 'SAM-2 là chủ lực bắn B-52.'),
    Q('Trận Khâm Thiên — Bệnh viện Bạch Mai?', ['Bị bom B-52 huỷ diệt nặng nề', 'Bình yên', 'Tuỳ ý', 'Không có'], 0, 'Khâm Thiên, Bạch Mai bị tàn phá nghiêm trọng.'),
    Q('Ý nghĩa thắng lợi 12/1972?', ['"Điện Biên Phủ trên không", buộc Mỹ ký Hiệp định Paris', 'Tuỳ ý', 'Không có', 'Vô nghĩa'], 0, 'Mỹ buộc phải ký Hiệp định Paris 27/1/1973.'),
    Q('Hiệp định Paris ký?', ['27/1/1973, Mỹ rút khỏi VN', 'Tuỳ ý', 'Mỹ ở lại', 'Không có'], 0, 'Hiệp định Paris kết thúc can thiệp Mỹ.'),
  ]),

  M(9, 'Hà Nội — Niềm vui giải phóng miền Nam (1975)', [
    Q('Hà Nội đón tin Sài Gòn giải phóng?', ['Vỡ oà niềm vui chiến thắng', 'Lo lắng', 'Tuỳ ý', 'Không quan tâm'], 0, '30/4/1975 — niềm vui toàn dân tộc.'),
    Q('Sau 1975, Hà Nội?', ['Thủ đô của nước Việt Nam thống nhất', 'Vẫn riêng', 'Tuỳ ý', 'Không có'], 0, '02/7/1976, CHXHCN VN ra đời.'),
    Q('Nhiệm vụ Hà Nội thời kỳ này?', ['Xây dựng và khôi phục đất nước thống nhất', 'Tuỳ ý', 'Nghỉ ngơi', 'Không có'], 0, 'Hà Nội dẫn đầu công cuộc xây dựng.'),
  ]),

  M(10, 'Hà Nội thời bao cấp (1976-1986)', [
    Q('Thời bao cấp?', ['Kinh tế kế hoạch tập trung, tem phiếu', 'Thị trường tự do', 'Tuỳ ý', 'Không có'], 0, 'Bao cấp là mô hình kinh tế đặc thù.'),
    Q('Cuộc sống Hà Nội bao cấp?', ['Khó khăn về vật chất, tem phiếu', 'Sung túc', 'Tuỳ ý', 'Không có'], 0, 'Bao cấp khan hiếm hàng hoá.'),
    Q('Bến xe, chợ Hà Nội bao cấp?', ['Đồng Xuân, Hôm, Hàng Bè', 'Vincom', 'Aeon', 'Tuỳ ý'], 0, 'Chợ truyền thống là tâm điểm thời đó.'),
    Q('Phương tiện giao thông phổ biến?', ['Xe đạp, tàu điện, xích lô', 'Ô tô riêng', 'Máy bay', 'Tuỳ ý'], 0, 'Xe đạp là biểu tượng Hà Nội bao cấp.'),
  ]),

  M(11, 'Đổi mới 1986 — Hà Nội bước vào kinh tế thị trường', [
    Q('Đại hội VI của Đảng (1986)?', ['Đề ra đường lối Đổi mới', 'Tuỳ ý', 'Không có', 'Bao cấp tiếp'], 0, 'Đại hội VI khởi xướng Đổi mới.'),
    Q('Đổi mới chuyển từ?', ['Kế hoạch hoá tập trung → kinh tế thị trường định hướng XHCN', 'Tuỳ ý', 'Không đổi', 'Tự do'], 0, 'Chuyển đổi kinh tế cơ bản.'),
    Q('Hà Nội sau Đổi mới?', ['Phát triển nhanh, thu hút đầu tư', 'Tuỳ ý', 'Không thay đổi', 'Suy giảm'], 0, 'Đổi mới thúc đẩy HN phát triển.'),
    Q('Khu công nghiệp Hà Nội?', ['Bắc Thăng Long, Nam Thăng Long, Hà Nội-Đài Tư', 'Không có', 'Tuỳ ý', '1 khu'], 0, 'Nhiều KCN hình thành ở HN.'),
  ]),

  M(12, 'Hà Nội mở rộng — 2008', [
    Q('Hà Nội mở rộng năm?', ['2008, sáp nhập Hà Tây + một phần Vĩnh Phúc, Hoà Bình', '2000', '1986', '2015'], 0, 'Nghị quyết 15/2008/QH12 mở rộng Hà Nội.'),
    Q('Diện tích HN sau mở rộng?', ['Khoảng 3.358 km² (gấp hơn 3 lần)', 'Như cũ', 'Tuỳ ý', '1.000 km²'], 0, 'HN mở rộng gấp hơn 3 lần diện tích cũ.'),
    Q('Dân số HN hiện nay?', ['Hơn 8 triệu người', '1 triệu', 'Tuỳ ý', '20 triệu'], 0, 'HN có hơn 8 triệu dân (2024).'),
    Q('Ý nghĩa mở rộng?', ['Tạo không gian phát triển, quy hoạch lớn', 'Vô bổ', 'Tuỳ ý', 'Không cần'], 0, 'Tạo điều kiện cho phát triển dài hạn.'),
  ]),

  M(13, '1000 năm Thăng Long - Hà Nội (2010)', [
    Q('Đại lễ 1000 năm Thăng Long - Hà Nội?', ['Tổ chức 10/2010', '2008', '2015', '2020'], 0, 'Đại lễ 1000 năm tổ chức 1-10/10/2010.'),
    Q('Đỉnh điểm?', ['10/10/2010 — đúng 1000 năm Lý Công Uẩn dời đô', 'Tuỳ ý', '02/9/2010', '30/4/2010'], 0, 'Lý Công Uẩn dời đô về Thăng Long năm 1010.'),
    Q('Lý Công Uẩn dời đô từ?', ['Hoa Lư (Ninh Bình) ra Đại La, đổi tên Thăng Long', 'Phú Thọ', 'Bắc Ninh', 'Tuỳ ý'], 0, 'Năm 1010, dời từ Hoa Lư về Đại La.'),
    Q('Công trình 1000 năm?', ['Đường Vành đai 3, cầu Thanh Trì, Bảo tàng HN', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Nhiều công trình lớn hoàn thành dịp 1000 năm.'),
    Q('Di sản phi vật thể được UNESCO ghi danh dịp 1000 năm?', ['Hoàng thành Thăng Long (di sản TG 2010)', 'Tuỳ ý', 'Không có', 'Hồ Gươm'], 0, 'Hoàng thành Thăng Long được UNESCO công nhận 2010.'),
  ]),

  M(14, 'Hà Nội — SEA Games 31 (2022)', [
    Q('SEA Games 31 tổ chức?', ['5/2022 tại Hà Nội (và một số tỉnh)', 'Đà Nẵng', 'TP.HCM', 'Tuỳ ý'], 0, 'SEA Games 31 tại Hà Nội + tỉnh lân cận.'),
    Q('Vận động hội ĐNA?', ['Sự kiện thể thao lớn nhất ĐNA', 'World Cup', 'Olympic', 'Tuỳ ý'], 0, 'SEA Games là Đại hội Thể thao Đông Nam Á.'),
    Q('VN đứng?', ['Nhất toàn đoàn (205 HCV)', '2', '3', 'Tuỳ ý'], 0, 'VN dẫn đầu toàn đoàn SEA Games 31.'),
    Q('Ý nghĩa với Hà Nội?', ['Quảng bá hình ảnh thủ đô, nâng cấp hạ tầng', 'Vô bổ', 'Tuỳ ý', 'Không có'], 0, 'SEA Games là cơ hội nâng tầm thủ đô.'),
  ]),

  M(15, 'Hà Nội — Thành phố sáng tạo UNESCO (2019)', [
    Q('UNESCO công nhận Hà Nội là?', ['Thành phố Sáng tạo về Thiết kế (2019)', 'Di sản', 'Khu bảo tồn', 'Tuỳ ý'], 0, 'Hà Nội gia nhập mạng lưới UCCN 2019.'),
    Q('UCCN là?', ['UNESCO Creative Cities Network', 'Tuỳ ý', 'Không có', 'Cụ thể khác'], 0, 'UCCN = Mạng lưới Thành phố Sáng tạo UNESCO.'),
    Q('Lĩnh vực Hà Nội được công nhận?', ['Thiết kế (Design)', 'Âm nhạc', 'Ẩm thực', 'Văn học'], 0, 'HN gia nhập với lĩnh vực Thiết kế.'),
    Q('Không gian sáng tạo Hà Nội?', ['Phố đi bộ, Vincom Center, các complex art', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Nhiều không gian sáng tạo phát triển.'),
    Q('Lễ hội Thiết kế Sáng tạo Hà Nội?', ['Tổ chức hàng năm từ 2021', 'Một lần', 'Tuỳ ý', 'Không có'], 0, 'Lễ hội Thiết kế Sáng tạo HN là sự kiện thường niên.'),
  ]),

  M(16, 'Kiến trúc Hà Nội — Truyền thống + hiện đại', [
    Q('Kiến trúc truyền thống HN?', ['Phố cổ 36 phố phường, nhà cổ Pháp', 'Chung cư', 'Tuỳ ý', 'Không có'], 0, 'HN có kho tàng kiến trúc đa dạng.'),
    Q('Nhà Hà Nội cổ?', ['Nhà ống truyền thống', 'Biệt thự', 'Chung cư', 'Tuỳ ý'], 0, 'Nhà ống là kiến trúc đặc trưng phố cổ.'),
    Q('Kiến trúc Pháp ở HN?', ['Phủ Chủ tịch, Nhà hát Lớn, Khách sạn Metropole', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Nhiều công trình Pháp tiêu biểu.'),
    Q('Kiến trúc hiện đại HN?', ['Keangnam Landmark 72, Lotte Center, Vincom Skyline', 'Không có', 'Tuỳ ý', 'Cổ kính'], 0, 'HN có nhiều cao ốc hiện đại.'),
    Q('Cầu nổi tiếng HN?', ['Long Biên (lịch sử), Nhật Tân (hiện đại)', 'Tuỳ ý', 'Không có', 'Cầu khác'], 0, 'Long Biên + Nhật Tân là 2 cầu biểu tượng.'),
  ]),

  M(17, 'Làng nghề truyền thống Hà Nội', [
    Q('Làng gốm Bát Tràng?', ['Nổi tiếng từ thế kỷ 14, ở Gia Lâm', 'Mới', 'Tuỳ ý', 'Không có'], 0, 'Bát Tràng có lịch sử hàng trăm năm.'),
    Q('Làng lụa Vạn Phúc?', ['Hà Đông, dệt lụa truyền thống', 'Bát Tràng', 'Tuỳ ý', 'Không có'], 0, 'Vạn Phúc nổi tiếng lụa tơ tằm.'),
    Q('Làng đúc đồng Ngũ Xã?', ['Tây Hồ, đúc tượng và đồ đồng', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Ngũ Xã là làng nghề đúc đồng nổi tiếng.'),
    Q('Làng nghề HN hôm nay?', ['Kết hợp truyền thống + công nghệ + du lịch', 'Mất đi', 'Tuỳ ý', 'Cứng nhắc'], 0, 'Làng nghề HN đổi mới sáng tạo.'),
    Q('Bảo tồn làng nghề?', ['Đào tạo nghề, xúc tiến thương mại, du lịch', 'Mặc kệ', 'Tuỳ ý', 'Bỏ'], 0, 'Cần nhiều giải pháp bảo tồn.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Toàn quốc kháng chiến?', ['19/12/1946', '02/9/1945', '07/5/1954', '30/4/1975'], 0, '19/12/1946 — Toàn quốc kháng chiến.'),
    Q('Tiếp quản Thủ đô?', ['10/10/1954', '30/4/1975', '02/9/1945', 'Tuỳ ý'], 0, 'Giải phóng Thủ đô 10/10/1954.'),
    Q('Điện Biên Phủ trên không?', ['12/1972', '1968', '1965', '1975'], 0, '12 ngày đêm 12/1972.'),
    Q('1000 năm Thăng Long - HN?', ['2010', '2000', '2008', '2020'], 0, 'Đại lễ 10/2010.'),
    Q('Hà Nội Thành phố Sáng tạo UNESCO?', ['2019', '2010', '2020', 'Tuỳ ý'], 0, 'UNESCO công nhận 2019.'),
  ]),

  // ───── HK2 ─────
  M(19, 'Văn hoá Hà Nội — Ẩm thực', [
    Q('Phở Hà Nội?', ['Đặc sản nổi tiếng, gốc Nam Định + HN', 'TP.HCM', 'Đà Nẵng', 'Tuỳ ý'], 0, 'Phở là biểu tượng ẩm thực Hà Nội.'),
    Q('Bún chả Hà Nội?', ['Nổi tiếng quốc tế, Tổng thống Obama ăn 2016', 'Không có', 'Tuỳ ý', 'Mới'], 0, 'Bún chả HN nổi tiếng sau chuyến thăm của Obama.'),
    Q('Chả cá Lã Vọng?', ['Đặc sản phố Chả Cá, Hà Nội', 'TP.HCM', 'Tuỳ ý', 'Không có'], 0, 'Chả cá Lã Vọng có từ thế kỷ 19.'),
    Q('Cốm Vòng?', ['Đặc sản mùa thu Hà Nội', 'Mùa đông', 'Tuỳ ý', 'Quanh năm'], 0, 'Cốm Vòng làng Vòng là đặc sản mùa thu.'),
    Q('Bánh cuốn Thanh Trì?', ['Đặc sản Thanh Trì, HN', 'TP.HCM', 'Tuỳ ý', 'Không có'], 0, 'Bánh cuốn Thanh Trì truyền thống.'),
  ]),

  M(20, 'Lễ hội truyền thống Hà Nội', [
    Q('Lễ hội Gò Đống Đa?', ['Mùng 5 Tết Nguyên Đán, kỷ niệm Quang Trung đại phá quân Thanh', 'Tuỳ ý', 'Trung thu', 'Không có'], 0, 'Lễ hội Đống Đa kỷ niệm chiến thắng 1789.'),
    Q('Hội Cổ Loa?', ['Mùng 6 Tết, tưởng nhớ An Dương Vương', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Hội Cổ Loa ở Đông Anh.'),
    Q('Hội Chùa Hương?', ['Tháng Giêng đến tháng 3 âm lịch, ở Mỹ Đức', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Chùa Hương là điểm hành hương lớn.'),
    Q('Hội Gióng?', ['Sóc Sơn, di sản UNESCO 2010', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Hội Gióng được UNESCO ghi danh 2010.'),
    Q('Ý nghĩa lễ hội?', ['Giữ gìn truyền thống, gắn kết cộng đồng', 'Vô bổ', 'Tuỳ ý', 'Không có'], 0, 'Lễ hội duy trì văn hoá và cộng đồng.'),
  ]),

  M(21, 'Di tích lịch sử Hà Nội', [
    Q('Văn Miếu - Quốc Tử Giám?', ['Trường đại học đầu tiên VN, 1076', 'Mới', 'Tuỳ ý', 'Không có'], 0, 'Văn Miếu thờ Khổng Tử + danh nhân.'),
    Q('Hoàng thành Thăng Long?', ['Di sản UNESCO 2010', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Hoàng thành được công nhận DSTG 2010.'),
    Q('Cổ Loa?', ['Kinh đô An Dương Vương, di tích thành cổ', 'Tuỳ ý', 'Không có', 'Mới'], 0, 'Cổ Loa là di tích lịch sử quan trọng.'),
    Q('Đền Ngọc Sơn?', ['Trên Hồ Gươm, gắn với truyền thuyết Hồ Hoàn Kiếm', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Đền Ngọc Sơn biểu tượng Hồ Gươm.'),
    Q('Lăng Chủ tịch Hồ Chí Minh?', ['Ba Đình, hoàn thành 1975', 'Tuỳ ý', 'Không có', '1945'], 0, 'Lăng Bác hoàn thành 29/8/1975.'),
  ]),

  M(22, 'Hồ Gươm - Hồ Tây - Hồ Bảy Mẫu', [
    Q('Hồ Gươm gắn với?', ['Truyền thuyết Lê Lợi trả gươm', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Truyền thuyết Lê Lợi trả gươm thần.'),
    Q('Hồ Tây?', ['Hồ lớn nhất nội thành HN', 'Hồ Gươm lớn nhất', 'Tuỳ ý', 'Không có'], 0, 'Hồ Tây ~5km², lớn nhất nội thành.'),
    Q('Hồ Bảy Mẫu?', ['Trong Công viên Thống Nhất', 'Ba Đình', 'Tuỳ ý', 'Không có'], 0, 'Hồ Bảy Mẫu trong CV Thống Nhất.'),
    Q('Ý nghĩa các hồ HN?', ['Điều hoà khí hậu, không gian xanh, di tích văn hoá', 'Vô bổ', 'Tuỳ ý', 'Không cần'], 0, 'Hồ là "lá phổi" của HN.'),
  ]),

  M(23, 'Không gian sáng tạo Hà Nội — Phố đi bộ', [
    Q('Phố đi bộ quanh Hồ Gươm?', ['Cuối tuần (tối thứ 6 đến tối CN)', 'Hàng ngày', 'Tuỳ ý', 'Không có'], 0, 'Phố đi bộ HN thu hút du khách.'),
    Q('Hoạt động phố đi bộ?', ['Trình diễn nghệ thuật, ẩm thực, văn hoá', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Phố đi bộ là không gian văn hoá sống.'),
    Q('Phố sách HN?', ['Phố 19/12 — không gian văn hoá đọc', 'Hàng Bài', 'Tuỳ ý', 'Không có'], 0, 'Phố Sách 19/12 hoạt động từ 2017.'),
    Q('Không gian sáng tạo khác?', ['Complex 01, Tổ chim xanh, Manzi, Hanoi Creative City', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN có nhiều không gian sáng tạo.'),
  ]),

  M(24, 'Đêm nghệ thuật Hà Nội — Sáng tạo đương đại', [
    Q('Lễ hội Thiết kế Sáng tạo HN tổ chức?', ['Hàng năm, từ 2021', 'Một lần', 'Tuỳ ý', 'Không có'], 0, 'Lễ hội Thiết kế Sáng tạo thường niên.'),
    Q('Đêm Hà Nội?', ['Phố đi bộ + hoạt động văn hoá nghệ thuật', 'Im lặng', 'Tuỳ ý', 'Không có'], 0, 'HN ban đêm sống động với nhiều hoạt động.'),
    Q('Du lịch văn hoá HN?', ['Phát triển mạnh, kết hợp di sản + sáng tạo', 'Không có', 'Tuỳ ý', 'Suy giảm'], 0, 'Du lịch HN đa dạng và phát triển.'),
    Q('Vai trò HS Hà Nội?', ['Tự hào, giữ gìn, lan toả di sản', 'Vô bổ', 'Tuỳ ý', 'Mặc kệ'], 0, 'HS là chủ nhân tương lai của HN.'),
  ]),

  M(25, 'Kinh tế Hà Nội hiện đại', [
    Q('Kinh tế HN hiện?', ['Đa ngành, dịch vụ chiếm tỉ trọng lớn', 'Nông nghiệp', 'Tuỳ ý', 'Đơn ngành'], 0, 'HN là trung tâm kinh tế lớn.'),
    Q('Khu công nghệ cao?', ['Hoà Lạc Hi-Tech Park', 'Không có', 'Tuỳ ý', 'Khác'], 0, 'Hoà Lạc là Khu CNC lớn.'),
    Q('Trung tâm tài chính?', ['Vincom, Lotte, các ngân hàng lớn', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN có nhiều tổ chức tài chính.'),
    Q('Du lịch HN?', ['Đóng góp lớn cho GDP, hàng triệu lượt khách/năm', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Du lịch là ngành chính của HN.'),
    Q('Khởi nghiệp HN?', ['Hệ sinh thái startup đang phát triển', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN có nhiều startup, vườn ươm.'),
  ]),

  M(26, 'Giao thông Hà Nội', [
    Q('Đường sắt đô thị?', ['Cát Linh - Hà Đông (2021), Nhổn - ga Hà Nội (2024)', 'Không có', 'Tuỳ ý', '1980'], 0, '2 tuyến metro hoạt động.'),
    Q('Vành đai Hà Nội?', ['Vành đai 1, 2, 3, 3.5, 4 (đang xây)', 'Chỉ 1 vành đai', 'Tuỳ ý', 'Không có'], 0, 'HN có nhiều vành đai.'),
    Q('Cầu nổi tiếng nối 2 bờ sông Hồng?', ['Long Biên, Chương Dương, Thanh Trì, Nhật Tân, Vĩnh Tuy', 'Chỉ 1 cầu', 'Tuỳ ý', 'Không có'], 0, 'Nhiều cầu lớn nối 2 bờ.'),
    Q('Sân bay quốc tế?', ['Nội Bài (Sóc Sơn)', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Nội Bài là sân bay chính.'),
    Q('Thách thức giao thông HN?', ['Tắc đường, ô nhiễm, an toàn', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN đối mặt nhiều thách thức giao thông.'),
  ]),

  M(27, 'Giáo dục Hà Nội', [
    Q('ĐH lớn ở HN?', ['ĐH Quốc gia HN, ĐH Bách khoa HN, ĐH Kinh tế Quốc dân, ĐH Y HN...', 'Không có', 'Tuỳ ý', '1 trường'], 0, 'HN có nhiều ĐH hàng đầu VN.'),
    Q('Trường THPT chuyên nổi tiếng?', ['Amsterdam, Khoa học Tự nhiên, Sư Phạm, Chu Văn An', 'Không có', 'Tuỳ ý', '1 trường'], 0, 'HN có nhiều trường THPT chuyên top đầu.'),
    Q('Hệ thống GD HN?', ['Mầm non, Tiểu, THCS, THPT, ĐH-CĐ-Nghề', 'Tuỳ ý', 'Không có', 'Chỉ ĐH'], 0, 'Hệ thống GD đầy đủ các cấp.'),
    Q('Hợp tác quốc tế GD HN?', ['Nhiều trường liên kết quốc tế', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN dẫn đầu hợp tác quốc tế GD.'),
  ]),

  M(28, 'Môi trường Hà Nội', [
    Q('Ô nhiễm không khí HN?', ['Vấn đề nghiêm trọng, AQI thường cao', 'Tốt', 'Tuỳ ý', 'Không có'], 0, 'HN có vấn đề ô nhiễm không khí.'),
    Q('Nguyên nhân ô nhiễm?', ['Giao thông + công nghiệp + xây dựng + đốt rơm', 'Không có', 'Tuỳ ý', '1 nguyên nhân'], 0, 'Đa nguyên nhân ô nhiễm.'),
    Q('Giải pháp?', ['Phương tiện công cộng, năng lượng sạch, cấm đốt rơm, trồng cây', 'Mặc kệ', 'Tuỳ ý', 'Không có'], 0, 'Đa giải pháp cần thiết.'),
    Q('Sông Tô Lịch?', ['Bị ô nhiễm nặng, có dự án làm sạch', 'Trong sạch', 'Tuỳ ý', 'Không có'], 0, 'Sông Tô Lịch ô nhiễm, đang được xử lý.'),
    Q('Vai trò HS?', ['Sống xanh, bảo vệ môi trường, tuyên truyền', 'Vô bổ', 'Tuỳ ý', 'Mặc kệ'], 0, 'HS có vai trò bảo vệ môi trường.'),
  ]),

  M(29, 'Phụ nữ Hà Nội — Hiện đại + truyền thống', [
    Q('Hình ảnh phụ nữ HN?', ['Vừa truyền thống vừa hiện đại, "công - dung - ngôn - hạnh" + năng động', 'Tuỳ ý', 'Không có', 'Mặc kệ'], 0, 'Phụ nữ HN kết hợp truyền thống + hiện đại.'),
    Q('Áo dài HN?', ['Trang phục truyền thống được giữ gìn', 'Mất đi', 'Tuỳ ý', 'Không có'], 0, 'Áo dài HN có dấu ấn riêng.'),
    Q('Phụ nữ HN trong xã hội?', ['Tham gia chính trị, kinh tế, văn hoá', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Phụ nữ HN đóng góp đa dạng.'),
  ]),

  M(30, 'Người Hà Nội — Văn hoá ứng xử', [
    Q('Đặc trưng văn hoá HN?', ['Thanh lịch, tao nhã, có chữ nghĩa', 'Tuỳ ý', 'Không có', 'Vô bổ'], 0, '"Người HN thanh lịch" là truyền thống.'),
    Q('Khẩu hiệu của HN?', ['"Văn minh - Lịch sự - Thân thiện"', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'Slogan của HN.'),
    Q('Ứng xử người HN nên?', ['Lễ phép, nhường nhịn, không ồn ào nơi công cộng', 'Tuỳ ý', 'Ồn ào', 'Mặc kệ'], 0, 'Văn hoá HN coi trọng phép tắc.'),
    Q('Bảo tồn nét văn hoá HN?', ['Giáo dục thế hệ trẻ, hành xử văn minh', 'Tuỳ ý', 'Mặc kệ', 'Không cần'], 0, 'Văn hoá HN cần được giữ gìn.'),
  ]),

  M(31, 'Hà Nội — Du lịch + Quảng bá', [
    Q('Slogan du lịch HN?', ['"Hà Nội — Đến để yêu"', 'Tuỳ ý', 'Không có', 'Khác'], 0, '"Đến để yêu" là slogan du lịch HN.'),
    Q('Khách du lịch HN?', ['Hàng chục triệu lượt/năm', 'Không có', 'Tuỳ ý', '1 triệu'], 0, 'HN là điểm đến du lịch lớn.'),
    Q('Điểm đến nổi tiếng?', ['Hồ Gươm, phố cổ, Văn Miếu, Lăng Bác, Tây Hồ', 'Không có', 'Tuỳ ý', '1 điểm'], 0, 'HN có nhiều điểm du lịch.'),
    Q('Loại hình du lịch HN?', ['Văn hoá, ẩm thực, sinh thái, MICE', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'Du lịch HN đa dạng.'),
    Q('Quảng bá HN ra TG?', ['Qua sự kiện quốc tế, mạng xã hội, di sản UNESCO', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN có nhiều kênh quảng bá.'),
  ]),

  M(32, 'Hà Nội tương lai — Quy hoạch 2050', [
    Q('Quy hoạch HN 2050?', ['Trở thành đô thị thông minh, xanh, văn hiến', 'Như cũ', 'Tuỳ ý', 'Không có'], 0, 'Quy hoạch dài hạn của HN.'),
    Q('Đô thị thông minh?', ['Tích hợp công nghệ vào quản lý đô thị', 'Tuỳ ý', 'Không có', 'Vô bổ'], 0, 'Smart city là xu thế.'),
    Q('Đô thị xanh?', ['Nhiều cây xanh, không gian mở, giao thông sạch', 'Tuỳ ý', 'Không có', 'Vô bổ'], 0, 'Đô thị xanh ưu tiên môi trường.'),
    Q('Thách thức HN?', ['Dân số, hạ tầng, môi trường, giữ bản sắc', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'HN đối mặt nhiều thách thức.'),
    Q('Vai trò thế hệ trẻ?', ['Xây dựng HN văn minh, hiện đại, bản sắc', 'Vô bổ', 'Tuỳ ý', 'Mặc kệ'], 0, 'Thế hệ trẻ là tương lai HN.'),
  ]),

  M(33, 'Ôn tập HK2', [
    Q('Hà Nội Thành phố Sáng tạo UNESCO 2019?', ['Đúng', 'Sai', 'Tuỳ ý', 'Không biết'], 0, 'UNESCO 2019.'),
    Q('Phở HN nổi tiếng?', ['Đúng', 'Sai', 'Tuỳ ý', 'Không biết'], 0, 'Phở là biểu tượng HN.'),
    Q('Hoàng thành Thăng Long?', ['Di sản UNESCO 2010', 'Tuỳ ý', 'Không có', 'Sai'], 0, 'UNESCO 2010.'),
    Q('Cầu Long Biên?', ['Cầu lịch sử, Pháp xây 1898-1902', 'Mới', 'Tuỳ ý', 'Không có'], 0, 'Long Biên cầu lịch sử.'),
    Q('SEA Games 31?', ['Tổ chức HN 2022', 'Tuỳ ý', 'Không có', 'Khác'], 0, 'SEA Games 31 tại HN.'),
  ]),

  M(34, 'Trải nghiệm — Tham quan di tích HN', [
    Q('Trước khi tham quan cần?', ['Tìm hiểu thông tin, chuẩn bị', 'Đi luôn', 'Tuỳ ý', 'Mặc kệ'], 0, 'Chuẩn bị giúp tham quan ý nghĩa hơn.'),
    Q('Khi tham quan di tích?', ['Tôn trọng, giữ trật tự, không xả rác', 'Tuỳ ý', 'Ồn ào', 'Mặc kệ'], 0, 'Văn hoá tham quan.'),
    Q('Học gì từ tham quan?', ['Lịch sử, văn hoá, tự hào dân tộc', 'Vô bổ', 'Tuỳ ý', 'Không cần'], 0, 'Tham quan là học hỏi sống động.'),
    Q('Sau tham quan?', ['Ghi chép, chia sẻ, tuyên truyền', 'Quên', 'Tuỳ ý', 'Mặc kệ'], 0, 'Lan toả những điều học được.'),
  ]),

  M(35, 'Tổng kết — Tự hào là người Hà Nội', [
    Q('HN có những danh hiệu UNESCO nào?', ['Hoàng thành Thăng Long (DSTG), Bia tiến sĩ Văn Miếu, Hội Gióng, Thành phố Sáng tạo', '1', 'Tuỳ ý', 'Không có'], 0, 'HN có nhiều danh hiệu UNESCO.'),
    Q('Tự hào người HN?', ['Truyền thống lâu đời + hiện đại văn minh', 'Vô bổ', 'Tuỳ ý', 'Không có'], 0, 'Tự hào HN là di sản tinh thần.'),
    Q('Vai trò HS lớp 9 HN?', ['Học giỏi, giữ gìn văn hoá, sống văn minh', 'Vô bổ', 'Tuỳ ý', 'Mặc kệ'], 0, 'HS HN có vai trò đặc biệt.'),
    Q('Lan toả văn hoá HN?', ['Qua hành vi, mạng xã hội, kết bạn quốc tế', 'Vô bổ', 'Tuỳ ý', 'Không cần'], 0, 'Mỗi HS là đại sứ văn hoá HN.'),
    Q('Lời chúc Hà Nội?', ['Phát triển bền vững + giữ bản sắc', 'Tuỳ ý', 'Không có', 'Mặc kệ'], 0, 'Chúc HN ngày càng tốt đẹp.'),
  ]),
];

export const S9GDDP_SCENARIOS = indexBy(S9GDDP_WEEKS);
