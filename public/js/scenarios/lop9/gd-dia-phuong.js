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
    Q('Hà Nội trở thành thủ đô của nước VNDCCH năm?', ['1986', '1954', '1945, sau Cách mạng Tháng Tám', '1975'], 2, 'Hà Nội là thủ đô VNDCCH từ 02/9/1945.'),
    Q('Quảng trường Ba Đình tổ chức?', ['Lễ tuyên bố độc lập 2/9/1945', 'Lễ duyệt binh 7/5/1954 sau Điện Biên Phủ', 'Lễ hội', 'Lễ duyệt binh'], 0, 'Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình.'),
    Q('Ý nghĩa Hà Nội là thủ đô?', ['Chỉ là trung tâm hành chính của Bắc Bộ', 'Trung tâm chính trị, văn hoá, biểu tượng độc lập', 'Một đô thị loại I như nhiều tỉnh khác', 'Chỉ thành phố'], 1, 'Hà Nội mang tầm vóc thủ đô.'),
  ]),

  M(2, 'Hà Nội — 60 ngày đêm khói lửa (1946)', [
    Q('Toàn quốc kháng chiến bắt đầu?', ['02/9/1945', 'Đêm 19/12/1946', '07/5/1954', '30/4/1975'], 1, 'Toàn quốc kháng chiến nổ ra đêm 19/12/1946.'),
    Q('Lời kêu gọi toàn quốc kháng chiến do?', ['Chủ tịch Hồ Chí Minh', 'Quang Trung', 'Lê Lợi', 'Trần Hưng Đạo'], 0, 'Lời kêu gọi của Bác Hồ.'),
    Q('60 ngày đêm Hà Nội kháng chiến?', ['1946-1948', '19/12/1946 – 17/2/1947', '1947-1954', '1945-1947'], 1, '60 ngày đêm chiến đấu kiên cường tại Hà Nội.'),
    Q('Mục tiêu giữ Hà Nội?', ['Phản công giành lại toàn bộ Đông Dương', 'Ghìm chân địch để chính phủ rút ra ATK', 'Tấn công địch', 'Chờ viện'], 1, 'Hà Nội cầm cự để chính phủ rút an toàn.'),
    Q('Khẩu hiệu?', ['"Không có gì quý hơn độc lập tự do"', 'Khẩu hiệu khác', '"Quyết tử cho Tổ quốc quyết sinh"', '"Thà hi sinh tất cả chứ không chịu mất nước"'], 2, 'Khẩu hiệu "Quyết tử cho Tổ quốc quyết sinh".'),
  ]),

  M(3, 'Trung đoàn Thủ đô — Anh hùng Hà Nội', [
    Q('Trung đoàn Thủ đô?', ['Đơn vị du kích tự phát của nhân dân phố cổ', 'Lực lượng chiến đấu giữ Hà Nội 1946-1947', 'Sư đoàn', 'Quân đoàn'], 1, 'Trung đoàn Thủ đô anh hùng.'),
    Q('Khu vực chiến đấu chính?', ['Ngoại thành', 'Khu vực ngoại thành phía Bắc sông Hồng', 'Toàn thành phố', 'Liên khu I (phố cổ)'], 3, 'Liên khu I là chiến tuyến chính.'),
    Q('Rút khỏi Hà Nội đêm?', ['17/2/1947', '1954', '1949', '1948'], 0, 'Trung đoàn Thủ đô rút an toàn đêm 17/2/1947.'),
    Q('Ý nghĩa 60 ngày đêm?', ['Giành lại toàn bộ Hà Nội trong 60 ngày', 'Tạo điều kiện cho cuộc kháng chiến lâu dài', 'Chiến thắng', 'Chỉ là cuộc nổi dậy nhỏ lẻ thất bại'], 1, 'Ghìm chân địch + bảo vệ căn cứ.'),
  ]),

  M(4, 'Hà Nội trong kháng chiến (1947-1954)', [
    Q('Hà Nội bị Pháp chiếm 1947-1954?', ['Hoàn toàn yên', 'Vẫn có cơ sở cách mạng bí mật', 'Toàn bộ dân Hà Nội theo Pháp', 'Không còn hoạt động cách mạng nào'], 1, 'Cơ sở cách mạng vẫn hoạt động trong vùng tạm chiếm.'),
    Q('Đóng góp Hà Nội cho Điện Biên Phủ?', ['Chỉ đóng góp tinh thần, không vật chất', 'Chỉ là hậu cứ chính trị', 'Người, lương thực, vũ khí', 'Chủ yếu là vũ khí từ Liên Xô viện trợ'], 2, 'Hà Nội đóng góp lớn cho chiến thắng Điện Biên.'),
    Q('Tiếp quản Thủ đô?', ['10/10/1954', '1975', '1945', '1986'], 0, 'Ngày 10/10/1954, quân ta tiếp quản Hà Nội.'),
    Q('Sự kiện 10/10/1954?', ['Mỹ đến', 'Pháp đến', 'Quân ta vào Hà Nội, Pháp rút', 'Liên Xô bàn giao Hà Nội cho VN'], 2, 'Giải phóng Thủ đô sau 9 năm.'),
  ]),

  M(5, 'Hà Nội — Hậu phương lớn (1954-1965)', [
    Q('Sau 1954, Hà Nội?', ['Không có gì', 'Trung tâm thương mại tự do kiểu Hong Kong', 'Thủ đô của miền Bắc XHCN, xây dựng kinh tế', 'Tiếp tục chiến tranh'], 2, 'Hà Nội xây dựng XHCN ở miền Bắc.'),
    Q('Xây dựng cơ sở vật chất?', ['Chỉ tập trung quân sự, không kinh tế', 'Nhà máy, trường học, bệnh viện', 'Chủ yếu là chợ và cửa hàng tư nhân', 'Chỉ phục hồi công trình cũ thời Pháp'], 1, 'Hà Nội phát triển hạ tầng XHCN.'),
    Q('Trường ĐH lớn ở HN sau 1954?', ['ĐH Tổng hợp, ĐH Bách khoa, ĐH Sư phạm', 'ĐH Luật, ĐH Ngoại thương, ĐH FPT', 'Chỉ có ĐH Đông Dương cũ tiếp tục hoạt động', 'Chỉ 1 trường'], 0, 'Các trường ĐH lớn hình thành sau 1954.'),
    Q('Hỗ trợ miền Nam?', ['Tự lo miền Bắc', 'Mặc kệ', '"Tất cả cho tiền tuyến"', '"Mỗi người làm việc bằng hai"'], 2, 'Khẩu hiệu thời chiến.'),
  ]),

  M(6, 'Chiến tranh phá hoại miền Bắc — Hà Nội', [
    Q('Mỹ ném bom Hà Nội từ?', ['1964 (sự kiện Vịnh Bắc Bộ)', '1954', '1975', '1985'], 0, 'Chiến tranh phá hoại bắt đầu 1964.'),
    Q('Mục đích Mỹ ném bom?', ['Phá hoại miền Bắc XHCN, gây áp lực đàm phán', 'Thử nghiệm vũ khí mới của Mỹ', 'Ngăn miền Bắc hỗ trợ Lào, Campuchia', 'Hoà bình'], 0, 'Mỹ muốn ép VN nhân nhượng.'),
    Q('Hà Nội ứng phó?', ['Di tản toàn bộ dân ra nước ngoài', 'Đầu hàng', 'Sơ tán + xây hầm + tiếp tục sản xuất', 'Mặc kệ'], 2, 'Hà Nội kiên cường chống chiến tranh phá hoại.'),
    Q('Phòng không Hà Nội?', ['Mặc kệ', 'Không bắn được', 'Chỉ dùng pháo cao xạ, không có tên lửa', 'Bắn rơi nhiều máy bay Mỹ'], 3, 'Lực lượng phòng không HN rất hiệu quả.'),
  ]),

  M(7, '"Điện Biên Phủ trên không" — 12/1972 (Phần 1)', [
    Q('Chiến dịch Linebacker II của Mỹ?', ['Đàm phán', 'Chiến dịch hỗ trợ quân đội VNCH ở miền Nam', 'Hoà bình', 'Ném bom B-52 vào Hà Nội, Hải Phòng'], 3, 'Chiến dịch đánh bom rải thảm B-52.'),
    Q('Thời gian "Hà Nội 12 ngày đêm"?', ['1975', '1968', '12/1965', '18 – 30/12/1972'], 3, '12 ngày đêm 12/1972.'),
    Q('B-52 là?', ['Tên lửa', 'Máy bay tiêm kích phản lực thế hệ mới', 'Tàu sân bay lớn của Hải quân Mỹ', 'Máy bay ném bom chiến lược của Mỹ'], 3, 'B-52 là máy bay ném bom mạnh nhất của Mỹ.'),
    Q('Mục tiêu Mỹ?', ['Đánh sập tinh thần kháng chiến, ép ký Hiệp định', 'Hoà bình', 'Chỉ thử nghiệm máy bay B-52 mới', 'Hỗ trợ đồng minh ASEAN chống cộng'], 0, 'Mỹ định đánh sập ý chí kháng chiến của VN.'),
  ]),

  M(8, '"Điện Biên Phủ trên không" — 12/1972 (Phần 2)', [
    Q('Số B-52 bị bắn rơi?', ['1', 'Không bắn rơi được chiếc B-52 nào', '100', '34 chiếc (theo VN)'], 3, 'VN bắn rơi 34 B-52 + nhiều máy bay khác.'),
    Q('Vũ khí chính bắn B-52?', ['Máy bay MIG', 'Pháo cao xạ 100mm là chủ lực', 'Súng bộ binh phòng không 12,7mm', 'Tên lửa SAM-2'], 3, 'SAM-2 là chủ lực bắn B-52.'),
    Q('Trận Khâm Thiên — Bệnh viện Bạch Mai?', ['Bình yên', 'Bị bom B-52 huỷ diệt nặng nề', 'Chỉ bị bắn pháo, không có thiệt hại', 'Pháp tái chiếm trong thời gian này'], 1, 'Khâm Thiên, Bạch Mai bị tàn phá nghiêm trọng.'),
    Q('Ý nghĩa thắng lợi 12/1972?', ['Mỹ tiếp tục ném bom miền Bắc đến 1975', '"Điện Biên Phủ trên không", buộc Mỹ ký Hiệp định Paris', 'Không có tác động đến tiến trình hoà bình', 'Buộc VN phải ký hoà ước có lợi cho Mỹ'], 1, 'Mỹ buộc phải ký Hiệp định Paris 27/1/1973.'),
    Q('Hiệp định Paris ký?', ['30/4/1975 sau giải phóng miền Nam', 'Ký tại Genève (Thụy Sĩ) như 1954', 'Mỹ ở lại', '27/1/1973, Mỹ rút khỏi VN'], 3, 'Hiệp định Paris kết thúc can thiệp Mỹ.'),
  ]),

  M(9, 'Hà Nội — Niềm vui giải phóng miền Nam (1975)', [
    Q('Hà Nội đón tin Sài Gòn giải phóng?', ['Lo lắng', 'Lo ngại chiến tranh sẽ tiếp tục', 'Vỡ oà niềm vui chiến thắng', 'Không quan tâm'], 2, '30/4/1975 — niềm vui toàn dân tộc.'),
    Q('Sau 1975, Hà Nội?', ['Chỉ là thủ đô của miền Bắc XHCN', 'Thủ đô của nước Việt Nam thống nhất', 'Mất vai trò thủ đô do Sài Gòn lớn hơn', 'Vẫn riêng'], 1, '02/7/1976, CHXHCN VN ra đời.'),
    Q('Nhiệm vụ Hà Nội thời kỳ này?', ['Xây dựng và khôi phục đất nước thống nhất', 'Chỉ tổ chức lễ kỷ niệm thường niên', 'Nghỉ ngơi', 'Phục hồi kiến trúc Pháp thời thuộc địa'], 0, 'Hà Nội dẫn đầu công cuộc xây dựng.'),
  ]),

  M(10, 'Hà Nội thời bao cấp (1976-1986)', [
    Q('Thời bao cấp?', ['Kinh tế nông nghiệp hộ gia đình tự cấp', 'Mô hình hợp tác xã chỉ ở nông thôn', 'Kinh tế kế hoạch tập trung, tem phiếu', 'Thị trường tự do'], 2, 'Bao cấp là mô hình kinh tế đặc thù.'),
    Q('Cuộc sống Hà Nội bao cấp?', ['Phồn vinh nhờ viện trợ Liên Xô dồi dào', 'Tự do mua bán như sau Đổi mới', 'Khó khăn về vật chất, tem phiếu', 'Sung túc'], 2, 'Bao cấp khan hiếm hàng hoá.'),
    Q('Bến xe, chợ Hà Nội bao cấp?', ['Chợ Bến Thành, chợ Lớn', 'Đồng Xuân, Hôm, Hàng Bè', 'Big C, Metro siêu thị hiện đại', 'Vincom'], 1, 'Chợ truyền thống là tâm điểm thời đó.'),
    Q('Phương tiện giao thông phổ biến?', ['Ô tô riêng', 'Xe máy Honda Cub nhập khẩu Nhật', 'Máy bay', 'Xe đạp, tàu điện, xích lô'], 3, 'Xe đạp là biểu tượng Hà Nội bao cấp.'),
  ]),

  M(11, 'Đổi mới 1986 — Hà Nội bước vào kinh tế thị trường', [
    Q('Đại hội VI của Đảng (1986)?', ['Đề ra đường lối Đổi mới', 'Bao cấp tiếp', 'Tiếp tục mô hình kế hoạch hoá tập trung', 'Đề ra kế hoạch 5 năm lần thứ 6'], 0, 'Đại hội VI khởi xướng Đổi mới.'),
    Q('Đổi mới chuyển từ?', ['Kinh tế thị trường tự do hoàn toàn → kế hoạch', 'Kế hoạch hoá tập trung → kinh tế thị trường định hướng XHCN', 'Tự cung tự cấp → công nghiệp nặng XHCN', 'Không đổi'], 1, 'Chuyển đổi kinh tế cơ bản.'),
    Q('Hà Nội sau Đổi mới?', ['Phát triển nhanh, thu hút đầu tư', 'Không thay đổi', 'Giảm dân số do di cư ra ngoại thành', 'Suy giảm'], 0, 'Đổi mới thúc đẩy HN phát triển.'),
    Q('Khu công nghiệp Hà Nội?', ['Chỉ có khu chế xuất Tân Thuận', 'Toàn bộ tập trung ở phố Hàng Bài', '1 khu', 'Bắc Thăng Long, Nam Thăng Long, Hà Nội-Đài Tư'], 3, 'Nhiều KCN hình thành ở HN.'),
  ]),

  M(12, 'Hà Nội mở rộng — 2008', [
    Q('Hà Nội mở rộng năm?', ['2008, sáp nhập Hà Tây + một phần Vĩnh Phúc, Hoà Bình', '2015', '2000', '1986'], 0, 'Nghị quyết 15/2008/QH12 mở rộng Hà Nội.'),
    Q('Diện tích HN sau mở rộng?', ['Như cũ', 'Khoảng 3.358 km² (gấp hơn 3 lần)', '1.000 km²', 'Khoảng 921 km² như trước mở rộng'], 1, 'HN mở rộng gấp hơn 3 lần diện tích cũ.'),
    Q('Dân số HN hiện nay?', ['20 triệu', '1 triệu', 'Khoảng 4 triệu người trong nội thành', 'Hơn 8 triệu người'], 3, 'HN có hơn 8 triệu dân (2024).'),
    Q('Ý nghĩa mở rộng?', ['Tạo không gian phát triển, quy hoạch lớn', 'Tăng thuế thu được cho địa phương', 'Giảm diện tích đất nông nghiệp ngoại thành', 'Không cần'], 0, 'Tạo điều kiện cho phát triển dài hạn.'),
  ]),

  M(13, '1000 năm Thăng Long - Hà Nội (2010)', [
    Q('Đại lễ 1000 năm Thăng Long - Hà Nội?', ['2020', '2008', '2015', 'Tổ chức 10/2010'], 3, 'Đại lễ 1000 năm tổ chức 1-10/10/2010.'),
    Q('Đỉnh điểm?', ['02/9/2010', '30/4/2010', '01/9/2010 — Quốc khánh đặc biệt', '10/10/2010 — đúng 1000 năm Lý Công Uẩn dời đô'], 3, 'Lý Công Uẩn dời đô về Thăng Long năm 1010.'),
    Q('Lý Công Uẩn dời đô từ?', ['Hoa Lư (Ninh Bình) ra Đại La, đổi tên Thăng Long', 'Bắc Ninh', 'Phú Thọ', 'Cổ Loa (Đông Anh) ra Đại La'], 0, 'Năm 1010, dời từ Hoa Lư về Đại La.'),
    Q('Công trình 1000 năm?', ['Chỉ trùng tu Văn Miếu - Quốc Tử Giám', 'Đường Vành đai 3, cầu Thanh Trì, Bảo tàng HN', 'Sân bay Nội Bài T2 và cầu Long Biên mới', 'Khu đô thị Mỹ Đình mở rộng và Vincom'], 1, 'Nhiều công trình lớn hoàn thành dịp 1000 năm.'),
    Q('Di sản phi vật thể được UNESCO ghi danh dịp 1000 năm?', ['Hoàng thành Thăng Long (di sản TG 2010)', 'Lễ hội Đền Hùng được UNESCO ghi danh', 'Hồ Gươm', 'Phố cổ Hà Nội được UNESCO công nhận'], 0, 'Hoàng thành Thăng Long được UNESCO công nhận 2010.'),
  ]),

  M(14, 'Hà Nội — SEA Games 31 (2022)', [
    Q('SEA Games 31 tổ chức?', ['5/2022 tại Hà Nội (và một số tỉnh)', 'Đà Nẵng', 'TP.HCM', '7/2020 hoãn do dịch COVID-19'], 0, 'SEA Games 31 tại Hà Nội + tỉnh lân cận.'),
    Q('Vận động hội ĐNA?', ['Giải vô địch bóng đá U23 Đông Nam Á', 'Sự kiện thể thao lớn nhất ĐNA', 'World Cup', 'Olympic'], 1, 'SEA Games là Đại hội Thể thao Đông Nam Á.'),
    Q('VN đứng?', ['Đứng nhì sau Thái Lan', '3', '2', 'Nhất toàn đoàn (205 HCV)'], 3, 'VN dẫn đầu toàn đoàn SEA Games 31.'),
    Q('Ý nghĩa với Hà Nội?', ['Chỉ là sự kiện thể thao không có tác động', 'Quảng bá hình ảnh thủ đô, nâng cấp hạ tầng', 'Gây quá tải giao thông và tăng nợ công', 'Giảm số khách quốc tế đến HN năm 2022'], 1, 'SEA Games là cơ hội nâng tầm thủ đô.'),
  ]),

  M(15, 'Hà Nội — Thành phố sáng tạo UNESCO (2019)', [
    Q('UNESCO công nhận Hà Nội là?', ['Thành phố Sáng tạo về Thiết kế (2019)', 'Di sản', 'Thành phố Di sản văn hoá thế giới', 'Khu bảo tồn'], 0, 'Hà Nội gia nhập mạng lưới UCCN 2019.'),
    Q('UCCN là?', ['UN Children\'s Cultural Network', 'United Cities Cooperation Network', 'Cụ thể khác', 'UNESCO Creative Cities Network'], 3, 'UCCN = Mạng lưới Thành phố Sáng tạo UNESCO.'),
    Q('Lĩnh vực Hà Nội được công nhận?', ['Âm nhạc', 'Văn học', 'Ẩm thực', 'Thiết kế (Design)'], 3, 'HN gia nhập với lĩnh vực Thiết kế.'),
    Q('Không gian sáng tạo Hà Nội?', ['Chỉ tập trung tại Bảo tàng Mỹ thuật VN', 'Phố đi bộ, Vincom Center, các complex art', 'Không có không gian sáng tạo nào hoạt động', 'Tất cả bị thu hẹp sau dịch COVID-19'], 1, 'Nhiều không gian sáng tạo phát triển.'),
    Q('Lễ hội Thiết kế Sáng tạo Hà Nội?', ['Một lần', 'Tổ chức hàng năm từ 2021', 'Tổ chức 5 năm một lần theo kế hoạch', 'Chỉ tổ chức online sau dịch COVID-19'], 1, 'Lễ hội Thiết kế Sáng tạo HN là sự kiện thường niên.'),
  ]),

  M(16, 'Kiến trúc Hà Nội — Truyền thống + hiện đại', [
    Q('Kiến trúc truyền thống HN?', ['Chỉ có nhà sàn dân tộc thiểu số', 'Phố cổ 36 phố phường, nhà cổ Pháp', 'Chỉ toàn cao ốc và trung tâm thương mại', 'Chung cư'], 1, 'HN có kho tàng kiến trúc đa dạng.'),
    Q('Nhà Hà Nội cổ?', ['Biệt thự', 'Nhà rông kiểu Tây Nguyên', 'Chung cư', 'Nhà ống truyền thống'], 3, 'Nhà ống là kiến trúc đặc trưng phố cổ.'),
    Q('Kiến trúc Pháp ở HN?', ['Chỉ là vài biệt thự nhỏ ở Ba Đình', 'Phủ Chủ tịch, Nhà hát Lớn, Khách sạn Metropole', 'Đã bị phá huỷ hết sau 1954', 'Bưu điện trung tâm Sài Gòn và Nhà thờ Đức Bà'], 1, 'Nhiều công trình Pháp tiêu biểu.'),
    Q('Kiến trúc hiện đại HN?', ['Chỉ giữ nguyên kiến trúc cổ, không xây mới', 'Keangnam Landmark 72, Lotte Center, Vincom Skyline', 'Cổ kính', 'Bitexco Tower, Landmark 81 TP.HCM'], 1, 'HN có nhiều cao ốc hiện đại.'),
    Q('Cầu nổi tiếng HN?', ['Cầu khác', 'Sông Hồng không có cầu lớn nào nổi tiếng', 'Long Biên (lịch sử), Nhật Tân (hiện đại)', 'Cầu Mỹ Thuận và cầu Cần Thơ'], 2, 'Long Biên + Nhật Tân là 2 cầu biểu tượng.'),
  ]),

  M(17, 'Làng nghề truyền thống Hà Nội', [
    Q('Làng gốm Bát Tràng?', ['Mới hình thành sau Đổi mới 1986', 'Nổi tiếng từ thế kỷ 14, ở Gia Lâm', 'Làng gốm ở Bình Dương, không phải HN', 'Mới được công nhận năm 2010'], 1, 'Bát Tràng có lịch sử hàng trăm năm.'),
    Q('Làng lụa Vạn Phúc?', ['Làng nghề đã thất truyền hoàn toàn', 'Làng nghề ở Nam Định, không phải HN', 'Bát Tràng', 'Hà Đông, dệt lụa truyền thống'], 3, 'Vạn Phúc nổi tiếng lụa tơ tằm.'),
    Q('Làng đúc đồng Ngũ Xã?', ['Chỉ làm đồ sắt và nông cụ thông thường', 'Tây Hồ, đúc tượng và đồ đồng', 'Đã chuyển sang sản xuất công nghiệp', 'Nằm ở Đan Phượng, làm đồ gỗ mỹ nghệ'], 1, 'Ngũ Xã là làng nghề đúc đồng nổi tiếng.'),
    Q('Làng nghề HN hôm nay?', ['Mất đi', 'Cứng nhắc', 'Chỉ duy trì cách làm thủ công truyền thống', 'Kết hợp truyền thống + công nghệ + du lịch'], 3, 'Làng nghề HN đổi mới sáng tạo.'),
    Q('Bảo tồn làng nghề?', ['Mặc kệ', 'Đào tạo nghề, xúc tiến thương mại, du lịch', 'Đóng cửa hết và chuyển sang công nghiệp', 'Chỉ cấm xuất khẩu sản phẩm ra nước ngoài'], 1, 'Cần nhiều giải pháp bảo tồn.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Toàn quốc kháng chiến?', ['07/5/1954', '19/12/1946', '30/4/1975', '02/9/1945'], 1, '19/12/1946 — Toàn quốc kháng chiến.'),
    Q('Tiếp quản Thủ đô?', ['10/10/1954', '30/4/1975', '02/9/1945', '19/5/1954 ngày sinh Bác Hồ'], 0, 'Giải phóng Thủ đô 10/10/1954.'),
    Q('Điện Biên Phủ trên không?', ['1965', '1975', '12/1972', '1968'], 2, '12 ngày đêm 12/1972.'),
    Q('1000 năm Thăng Long - HN?', ['2020', '2008', '2010', '2000'], 2, 'Đại lễ 10/2010.'),
    Q('Hà Nội Thành phố Sáng tạo UNESCO?', ['2020', '2019', '2010', '2015 cùng dịp kỷ niệm 1005 năm Thăng Long'], 1, 'UNESCO công nhận 2019.'),
  ]),

  // ───── HK2 ─────
  M(19, 'Văn hoá Hà Nội — Ẩm thực', [
    Q('Phở Hà Nội?', ['Du nhập từ Pháp đầu thế kỷ 20', 'Đặc sản nổi tiếng, gốc Nam Định + HN', 'TP.HCM', 'Đà Nẵng'], 1, 'Phở là biểu tượng ẩm thực Hà Nội.'),
    Q('Bún chả Hà Nội?', ['Mới xuất hiện sau Đổi mới 1986', 'Đặc sản TP.HCM được mang ra Bắc', 'Chỉ có ở Hải Phòng, không phải HN', 'Nổi tiếng quốc tế, Tổng thống Obama ăn 2016'], 3, 'Bún chả HN nổi tiếng sau chuyến thăm của Obama.'),
    Q('Chả cá Lã Vọng?', ['Đã thất truyền sau chiến tranh', 'Mới mở từ năm 2000 ở Times City', 'TP.HCM', 'Đặc sản phố Chả Cá, Hà Nội'], 3, 'Chả cá Lã Vọng có từ thế kỷ 19.'),
    Q('Cốm Vòng?', ['Có thể làm bằng máy quanh năm', 'Quanh năm', 'Đặc sản mùa thu Hà Nội', 'Mùa đông'], 2, 'Cốm Vòng làng Vòng là đặc sản mùa thu.'),
    Q('Bánh cuốn Thanh Trì?', ['TP.HCM', 'Đặc sản Thanh Trì, HN', 'Đặc sản làng Phú Thượng, Tây Hồ', 'Đặc sản Đông Anh, gần Cổ Loa'], 1, 'Bánh cuốn Thanh Trì truyền thống.'),
  ]),

  M(20, 'Lễ hội truyền thống Hà Nội', [
    Q('Lễ hội Gò Đống Đa?', ['Mùng 5 Tết Nguyên Đán, kỷ niệm Quang Trung đại phá quân Thanh', 'Trung thu', 'Mùng 1 Tết Nguyên Đán, lễ chùa đầu năm', '15/8 âm lịch, kỷ niệm trận Ngọc Hồi'], 0, 'Lễ hội Đống Đa kỷ niệm chiến thắng 1789.'),
    Q('Hội Cổ Loa?', ['Mùng 10/3 âm lịch như giỗ Tổ Hùng Vương', 'Mùng 6 Tết, tưởng nhớ An Dương Vương', 'Tổ chức ở Mê Linh, gắn với Hai Bà Trưng', 'Đầu tháng 4 âm lịch, lễ Phật đản'], 1, 'Hội Cổ Loa ở Đông Anh.'),
    Q('Hội Chùa Hương?', ['Chỉ tổ chức trong 3 ngày Tết Nguyên Đán', 'Tháng Giêng đến tháng 3 âm lịch, ở Mỹ Đức', 'Tháng 7 âm lịch, lễ Vu Lan ở Sóc Sơn', 'Tháng 10 âm lịch, ở quận Long Biên'], 1, 'Chùa Hương là điểm hành hương lớn.'),
    Q('Hội Gióng?', ['Tổ chức tại Gia Lâm, di sản 2015', 'Sóc Sơn, di sản UNESCO 2010', 'Ở Mê Linh, kỷ niệm Hai Bà Trưng', 'Tổ chức tại Hà Đông, làng lụa Vạn Phúc'], 1, 'Hội Gióng được UNESCO ghi danh 2010.'),
    Q('Ý nghĩa lễ hội?', ['Chỉ là hoạt động giải trí mùa xuân', 'Giữ gìn truyền thống, gắn kết cộng đồng', 'Hiện đại hoá thay vì giữ truyền thống', 'Thu hút khách du lịch tăng GDP địa phương'], 1, 'Lễ hội duy trì văn hoá và cộng đồng.'),
  ]),

  M(21, 'Di tích lịch sử Hà Nội', [
    Q('Văn Miếu - Quốc Tử Giám?', ['Trường mới xây dựng năm 1945', 'Trường đại học đầu tiên VN, 1076', 'Lâu đài Pháp xây năm 1888', 'Khu chợ đầu mối thời Lý - Trần'], 1, 'Văn Miếu thờ Khổng Tử + danh nhân.'),
    Q('Hoàng thành Thăng Long?', ['Di sản UNESCO năm 1993 cùng Cố đô Huế', 'Chỉ là di tích quốc gia đặc biệt', 'Khu di tích tỉnh được công nhận năm 2000', 'Di sản UNESCO 2010'], 3, 'Hoàng thành được công nhận DSTG 2010.'),
    Q('Cổ Loa?', ['Lăng mộ vua nhà Trần ở Đông Anh', 'Kinh đô An Dương Vương, di tích thành cổ', 'Pháo đài Pháp xây dựng thế kỷ 19', 'Khu phố cổ thời Nguyễn ở Long Biên'], 1, 'Cổ Loa là di tích lịch sử quan trọng.'),
    Q('Đền Ngọc Sơn?', ['Đền thờ Hai Bà Trưng tại Mê Linh', 'Trên Hồ Gươm, gắn với truyền thuyết Hồ Hoàn Kiếm', 'Đền Quán Thánh trên Hồ Tây', 'Đền Đô (Bắc Ninh), thờ 8 vị vua Lý'], 1, 'Đền Ngọc Sơn biểu tượng Hồ Gươm.'),
    Q('Lăng Chủ tịch Hồ Chí Minh?', ['Phú Thọ, hoàn thành 1969', 'Sóc Sơn, hoàn thành 1990', '1945', 'Ba Đình, hoàn thành 1975'], 3, 'Lăng Bác hoàn thành 29/8/1975.'),
  ]),

  M(22, 'Hồ Gươm - Hồ Tây - Hồ Bảy Mẫu', [
    Q('Hồ Gươm gắn với?', ['Truyền thuyết Sơn Tinh - Thuỷ Tinh', 'Truyền thuyết Lạc Long Quân - Âu Cơ', 'Truyền thuyết Lê Lợi trả gươm', 'Truyền thuyết An Dương Vương xây thành'], 2, 'Truyền thuyết Lê Lợi trả gươm thần.'),
    Q('Hồ Tây?', ['Hồ nhân tạo mới được đào năm 1954', 'Hồ Gươm lớn nhất', 'Hồ Trúc Bạch là hồ lớn nhất nội thành', 'Hồ lớn nhất nội thành HN'], 3, 'Hồ Tây ~5km², lớn nhất nội thành.'),
    Q('Hồ Bảy Mẫu?', ['Trong Công viên Thống Nhất', 'Trong khuôn viên Lăng Bác, Ba Đình', 'Thuộc khu phố cổ Hoàn Kiếm', 'Ba Đình'], 0, 'Hồ Bảy Mẫu trong CV Thống Nhất.'),
    Q('Ý nghĩa các hồ HN?', ['Chỉ là cảnh quan du lịch đơn thuần', 'Không cần', 'Gây ngập úng khu vực xung quanh', 'Điều hoà khí hậu, không gian xanh, di tích văn hoá'], 3, 'Hồ là "lá phổi" của HN.'),
  ]),

  M(23, 'Không gian sáng tạo Hà Nội — Phố đi bộ', [
    Q('Phố đi bộ quanh Hồ Gươm?', ['Chỉ mở vào dịp Tết Nguyên Đán', 'Cuối tuần (tối thứ 6 đến tối CN)', 'Mở 24/24 tất cả các ngày trong tuần', 'Hàng ngày'], 1, 'Phố đi bộ HN thu hút du khách.'),
    Q('Hoạt động phố đi bộ?', ['Trình diễn nghệ thuật, ẩm thực, văn hoá', 'Chủ yếu là buôn bán hàng rong', 'Chỉ là khu vực cấm xe cộ qua lại', 'Không gian thi đấu thể thao đường phố'], 0, 'Phố đi bộ là không gian văn hoá sống.'),
    Q('Phố sách HN?', ['Hàng Bài', 'Phố Hàng Mã, gần chợ Đồng Xuân', 'Phố 19/12 — không gian văn hoá đọc', 'Đường Nguyễn Huệ, gần Hồ Gươm'], 2, 'Phố Sách 19/12 hoạt động từ 2017.'),
    Q('Không gian sáng tạo khác?', ['Chỉ có Bảo tàng Mỹ thuật là duy nhất', 'Mới chỉ là đề án, chưa hoạt động', 'Complex 01, Tổ chim xanh, Manzi, Hanoi Creative City', 'Saigon Centre và Bitexco ở TP.HCM'], 2, 'HN có nhiều không gian sáng tạo.'),
  ]),

  M(24, 'Đêm nghệ thuật Hà Nội — Sáng tạo đương đại', [
    Q('Lễ hội Thiết kế Sáng tạo HN tổ chức?', ['Một lần duy nhất năm 2019 khi gia nhập UCCN', '5 năm một lần, theo chu kỳ đánh giá UCCN', 'Hàng năm, từ 2021', 'Một lần'], 2, 'Lễ hội Thiết kế Sáng tạo thường niên.'),
    Q('Đêm Hà Nội?', ['Im lặng', 'Phố đi bộ + hoạt động văn hoá nghệ thuật', 'Chỉ có các quán bar và karaoke', 'Mới được phép hoạt động sau 2020'], 1, 'HN ban đêm sống động với nhiều hoạt động.'),
    Q('Du lịch văn hoá HN?', ['Chỉ phát triển du lịch ẩm thực đơn thuần', 'Suy giảm', 'Phát triển mạnh, kết hợp di sản + sáng tạo', 'Tập trung vào du lịch nghỉ dưỡng biển'], 2, 'Du lịch HN đa dạng và phát triển.'),
    Q('Vai trò HS Hà Nội?', ['Chỉ tập trung vào việc thi cử và học hành', 'Học theo lối sống đô thị nước ngoài', 'Tự hào, giữ gìn, lan toả di sản', 'Mặc kệ'], 2, 'HS là chủ nhân tương lai của HN.'),
  ]),

  M(25, 'Kinh tế Hà Nội hiện đại', [
    Q('Kinh tế HN hiện?', ['Đơn ngành', 'Tập trung vào công nghiệp nặng và khai khoáng', 'Đa ngành, dịch vụ chiếm tỉ trọng lớn', 'Nông nghiệp'], 2, 'HN là trung tâm kinh tế lớn.'),
    Q('Khu công nghệ cao?', ['Hoà Lạc Hi-Tech Park', 'Khu CNC Đà Nẵng đặt tại Hoà Vang', 'Khu CNC TP.HCM tại Quận 9', 'Khu chế xuất Tân Thuận và Linh Trung'], 0, 'Hoà Lạc là Khu CNC lớn.'),
    Q('Trung tâm tài chính?', ['Chưa có trung tâm tài chính lớn', 'Chỉ có chợ Đồng Xuân làm trung tâm thương mại', 'Vincom, Lotte, các ngân hàng lớn', 'Toàn bộ tập trung tại khu phố cổ Hoàn Kiếm'], 2, 'HN có nhiều tổ chức tài chính.'),
    Q('Du lịch HN?', ['Chỉ có khách nội địa, không có quốc tế', 'Đóng góp không đáng kể vào GDP', 'Chủ yếu thu hút khách từ TP.HCM ra', 'Đóng góp lớn cho GDP, hàng triệu lượt khách/năm'], 3, 'Du lịch là ngành chính của HN.'),
    Q('Khởi nghiệp HN?', ['Chưa có startup nào thành công', 'Startup chỉ tập trung tại TP.HCM', 'Chỉ có vài quỹ đầu tư hoạt động nhỏ lẻ', 'Hệ sinh thái startup đang phát triển'], 3, 'HN có nhiều startup, vườn ươm.'),
  ]),

  M(26, 'Giao thông Hà Nội', [
    Q('Đường sắt đô thị?', ['Tuyến Yên Viên - Ngọc Hồi (1995)', '1980', 'Chưa có tuyến đường sắt đô thị nào', 'Cát Linh - Hà Đông (2021), Nhổn - ga Hà Nội (2024)'], 3, '2 tuyến metro hoạt động.'),
    Q('Vành đai Hà Nội?', ['Chỉ 1 vành đai', 'Vành đai 1 và Vành đai 2 đã hoàn thành', 'Vành đai 1, 2, 3, 3.5, 4 (đang xây)', 'Chỉ có Vành đai 3 đang khai thác'], 2, 'HN có nhiều vành đai.'),
    Q('Cầu nổi tiếng nối 2 bờ sông Hồng?', ['Long Biên, Chương Dương, Thanh Trì, Nhật Tân, Vĩnh Tuy', 'Cầu Phú Mỹ, Sài Gòn, Bình Lợi (TP.HCM)', 'Chỉ 1 cầu', 'Chỉ có cầu Long Biên là cầu duy nhất'], 0, 'Nhiều cầu lớn nối 2 bờ.'),
    Q('Sân bay quốc tế?', ['Sân bay quân sự Gia Lâm', 'Tân Sơn Nhất (TP.HCM) gần nhất', 'Nội Bài (Sóc Sơn)', 'Cát Bi (Hải Phòng) phục vụ HN'], 2, 'Nội Bài là sân bay chính.'),
    Q('Thách thức giao thông HN?', ['Giao thông HN hoàn toàn thông thoáng', 'Chỉ có vấn đề thiếu xe buýt công cộng', 'Đã có metro nên không còn ùn tắc', 'Tắc đường, ô nhiễm, an toàn'], 3, 'HN đối mặt nhiều thách thức giao thông.'),
  ]),

  M(27, 'Giáo dục Hà Nội', [
    Q('ĐH lớn ở HN?', ['ĐH Quốc gia HN, ĐH Bách khoa HN, ĐH Kinh tế Quốc dân, ĐH Y HN...', 'Chỉ có duy nhất ĐH Quốc gia HN', '1 trường', 'ĐH Quốc gia TP.HCM và RMIT Việt Nam'], 0, 'HN có nhiều ĐH hàng đầu VN.'),
    Q('Trường THPT chuyên nổi tiếng?', ['Amsterdam, Khoa học Tự nhiên, Sư Phạm, Chu Văn An', 'Chỉ có Trường Chu Văn An là chuyên', '1 trường', 'THPT Lê Hồng Phong và Năng khiếu TP.HCM'], 0, 'HN có nhiều trường THPT chuyên top đầu.'),
    Q('Hệ thống GD HN?', ['Chỉ có Tiểu học và THCS, không có THPT', 'Chỉ có Mầm non và Tiểu học công lập', 'Mầm non, Tiểu, THCS, THPT, ĐH-CĐ-Nghề', 'Chỉ ĐH'], 2, 'Hệ thống GD đầy đủ các cấp.'),
    Q('Hợp tác quốc tế GD HN?', ['Nhiều trường liên kết quốc tế', 'Chỉ có 1 trường ĐH liên kết quốc tế', 'Hợp tác chỉ có ý nghĩa hình thức', 'Chưa có chương trình liên kết quốc tế nào'], 0, 'HN dẫn đầu hợp tác quốc tế GD.'),
  ]),

  M(28, 'Môi trường Hà Nội', [
    Q('Ô nhiễm không khí HN?', ['Tốt nhất cả nước, AQI rất thấp', 'Vấn đề nghiêm trọng, AQI thường cao', 'Chỉ ô nhiễm vào mùa hè do bụi đường', 'AQI thường ở mức trung bình quanh năm'], 1, 'HN có vấn đề ô nhiễm không khí.'),
    Q('Nguyên nhân ô nhiễm?', ['Chỉ do thời tiết, không do con người', '1 nguyên nhân', 'Giao thông + công nghiệp + xây dựng + đốt rơm', 'Chỉ do nhà máy điện than khu vực phía Bắc'], 2, 'Đa nguyên nhân ô nhiễm.'),
    Q('Giải pháp?', ['Phương tiện công cộng, năng lượng sạch, cấm đốt rơm, trồng cây', 'Chỉ cần di dời nhà máy ra khỏi nội thành', 'Mặc kệ', 'Chỉ cần lắp máy lọc khí ở mỗi nhà'], 0, 'Đa giải pháp cần thiết.'),
    Q('Sông Tô Lịch?', ['Đã được cải tạo hoàn toàn, nước trong', 'Đã bị lấp để làm đường giao thông', 'Bị ô nhiễm nặng, có dự án làm sạch', 'Trong sạch'], 2, 'Sông Tô Lịch ô nhiễm, đang được xử lý.'),
    Q('Vai trò HS?', ['Sống xanh, bảo vệ môi trường, tuyên truyền', 'Chỉ cần học giỏi, không cần hành động', 'Chỉ là nhiệm vụ của người lớn', 'Mặc kệ'], 0, 'HS có vai trò bảo vệ môi trường.'),
  ]),

  M(29, 'Phụ nữ Hà Nội — Hiện đại + truyền thống', [
    Q('Hình ảnh phụ nữ HN?', ['Vừa truyền thống vừa hiện đại, "công - dung - ngôn - hạnh" + năng động', 'Chỉ giữ truyền thống, không hiện đại', 'Chỉ tập trung sự nghiệp, bỏ gia đình', 'Mặc kệ'], 0, 'Phụ nữ HN kết hợp truyền thống + hiện đại.'),
    Q('Áo dài HN?', ['Chỉ mặc trong các dịp cưới hỏi', 'Áo dài chỉ là sản phẩm thời trang TP.HCM', 'Mất đi', 'Trang phục truyền thống được giữ gìn'], 3, 'Áo dài HN có dấu ấn riêng.'),
    Q('Phụ nữ HN trong xã hội?', ['Chỉ tham gia công việc gia đình', 'Tham gia chính trị, kinh tế, văn hoá', 'Chỉ làm trong ngành dịch vụ giáo dục', 'Không tham gia hoạt động xã hội'], 1, 'Phụ nữ HN đóng góp đa dạng.'),
  ]),

  M(30, 'Người Hà Nội — Văn hoá ứng xử', [
    Q('Đặc trưng văn hoá HN?', ['Mạnh bạo, phóng khoáng, thoải mái', 'Thanh lịch, tao nhã, có chữ nghĩa', 'Năng động, kinh doanh, thực dụng', 'Mộc mạc, chân chất, đậm chất dân quê'], 1, '"Người HN thanh lịch" là truyền thống.'),
    Q('Khẩu hiệu của HN?', ['"Vì Hà Nội - Vì cả nước"', '"Hà Nội - Thành phố vì hoà bình"', '"Hà Nội - Trái tim Việt Nam"', '"Văn minh - Lịch sự - Thân thiện"'], 3, 'Slogan của HN.'),
    Q('Ứng xử người HN nên?', ['Tự nhiên, suồng sã, theo cảm xúc', 'Tranh luận lớn tiếng để bảo vệ ý kiến', 'Mặc kệ', 'Lễ phép, nhường nhịn, không ồn ào nơi công cộng'], 3, 'Văn hoá HN coi trọng phép tắc.'),
    Q('Bảo tồn nét văn hoá HN?', ['Mặc kệ', 'Không cần', 'Giáo dục thế hệ trẻ, hành xử văn minh', 'Chỉ bảo tồn các công trình kiến trúc cổ'], 2, 'Văn hoá HN cần được giữ gìn.'),
  ]),

  M(31, 'Hà Nội — Du lịch + Quảng bá', [
    Q('Slogan du lịch HN?', ['"Hà Nội — Đến để yêu"', '"Đường Tự Do, sống tự hào"', '"Hà Nội - Trái tim Việt Nam"', '"Hà Nội - Vẻ đẹp tiềm ẩn"'], 0, '"Đến để yêu" là slogan du lịch HN.'),
    Q('Khách du lịch HN?', ['Không có thống kê chính thức', '1 triệu', 'Khoảng 500 nghìn lượt/năm', 'Hàng chục triệu lượt/năm'], 3, 'HN là điểm đến du lịch lớn.'),
    Q('Điểm đến nổi tiếng?', ['Chỉ có một điểm là Hồ Gươm', '1 điểm', 'Đã không còn điểm du lịch nổi tiếng', 'Hồ Gươm, phố cổ, Văn Miếu, Lăng Bác, Tây Hồ'], 3, 'HN có nhiều điểm du lịch.'),
    Q('Loại hình du lịch HN?', ['Chỉ tập trung du lịch lễ hội tâm linh', 'Chỉ phát triển du lịch nghỉ dưỡng biển', 'Văn hoá, ẩm thực, sinh thái, MICE', 'Chỉ duy nhất du lịch ẩm thực phố cổ'], 2, 'Du lịch HN đa dạng.'),
    Q('Quảng bá HN ra TG?', ['Qua sự kiện quốc tế, mạng xã hội, di sản UNESCO', 'Chỉ qua các đại sứ quán nước ngoài', 'Chỉ qua truyền hình trong nước', 'Chủ yếu qua đài phát thanh quốc tế'], 0, 'HN có nhiều kênh quảng bá.'),
  ]),

  M(32, 'Hà Nội tương lai — Quy hoạch 2050', [
    Q('Quy hoạch HN 2050?', ['Trở thành đô thị thông minh, xanh, văn hiến', 'Giữ nguyên mô hình phát triển hiện tại', 'Như cũ', 'Chỉ tập trung phát triển công nghiệp nặng'], 0, 'Quy hoạch dài hạn của HN.'),
    Q('Đô thị thông minh?', ['Chỉ là tự động hoá nhà máy công nghiệp', 'Chỉ là việc lắp camera giám sát đô thị', 'Tích hợp công nghệ vào quản lý đô thị', 'Đô thị chỉ dành cho người làm IT'], 2, 'Smart city là xu thế.'),
    Q('Đô thị xanh?', ['Chỉ trồng cỏ ở các công viên trung tâm', 'Nhiều cây xanh, không gian mở, giao thông sạch', 'Chỉ là khẩu hiệu, không có hành động cụ thể', 'Phát triển nông nghiệp đô thị toàn diện'], 1, 'Đô thị xanh ưu tiên môi trường.'),
    Q('Thách thức HN?', ['Dân số, hạ tầng, môi trường, giữ bản sắc', 'Chỉ có vấn đề ô nhiễm môi trường', 'Chỉ là thiếu vốn đầu tư hạ tầng', 'Không còn thách thức lớn nào'], 0, 'HN đối mặt nhiều thách thức.'),
    Q('Vai trò thế hệ trẻ?', ['Chỉ cần học giỏi, không cần đóng góp', 'Xây dựng HN văn minh, hiện đại, bản sắc', 'Đợi thế hệ trước hoàn thiện rồi mới đóng góp', 'Mặc kệ'], 1, 'Thế hệ trẻ là tương lai HN.'),
  ]),

  M(33, 'Ôn tập HK2', [
    Q('Hà Nội Thành phố Sáng tạo UNESCO 2019?', ['Đúng', 'Chỉ là tin đồn, chưa được xác nhận', 'Sai, UNESCO chưa từng công nhận HN', 'Chỉ đúng với danh hiệu Di sản, không Sáng tạo'], 0, 'UNESCO 2019.'),
    Q('Phở HN nổi tiếng?', ['Chưa được kiểm chứng quốc tế', 'Đúng', 'Chỉ nổi tiếng trong nước, không quốc tế', 'Sai, phở Nam Định mới nổi tiếng nhất'], 1, 'Phở là biểu tượng HN.'),
    Q('Hoàng thành Thăng Long?', ['Di sản UNESCO 2002 cùng phố cổ Hội An', 'Chỉ là di tích cấp quốc gia, chưa quốc tế', 'Di sản UNESCO 2010', 'Được UNESCO ghi danh năm 2019'], 2, 'UNESCO 2010.'),
    Q('Cầu Long Biên?', ['Cầu mới xây năm 2010 dịp đại lễ 1000 năm', 'Cầu do người Việt thiết kế năm 1954', 'Cầu lịch sử, Pháp xây 1898-1902', 'Cầu Nhật Tân do Nhật Bản tài trợ'], 2, 'Long Biên cầu lịch sử.'),
    Q('SEA Games 31?', ['Tổ chức tại TP.HCM năm 2022', 'Tổ chức HN 2022', 'Đã hoãn sang 2023 do dịch COVID-19', 'VN chỉ làm chủ nhà một số môn nhỏ'], 1, 'SEA Games 31 tại HN.'),
  ]),

  M(34, 'Trải nghiệm — Tham quan di tích HN', [
    Q('Trước khi tham quan cần?', ['Tìm hiểu thông tin, chuẩn bị', 'Đến chụp ảnh check-in là đủ', 'Mặc kệ', 'Đi luôn'], 0, 'Chuẩn bị giúp tham quan ý nghĩa hơn.'),
    Q('Khi tham quan di tích?', ['Tự do chụp ảnh ở mọi khu vực', 'Cười nói to để bạn bè cùng vui', 'Tôn trọng, giữ trật tự, không xả rác', 'Mặc kệ'], 2, 'Văn hoá tham quan.'),
    Q('Học gì từ tham quan?', ['Chỉ là chuyến đi chơi giải trí', 'Lịch sử, văn hoá, tự hào dân tộc', 'Không cần', 'Học kỹ năng chụp ảnh và sống ảo'], 1, 'Tham quan là học hỏi sống động.'),
    Q('Sau tham quan?', ['Mặc kệ', 'Đăng ảnh check-in lên mạng là xong', 'Ghi chép, chia sẻ, tuyên truyền', 'Quên đi vì đã hoàn thành nhiệm vụ'], 2, 'Lan toả những điều học được.'),
  ]),

  M(35, 'Tổng kết — Tự hào là người Hà Nội', [
    Q('HN có những danh hiệu UNESCO nào?', ['1', 'Chỉ Hoàng thành Thăng Long là duy nhất', 'Hoàng thành Thăng Long (DSTG), Bia tiến sĩ Văn Miếu, Hội Gióng, Thành phố Sáng tạo', 'Phố cổ Hội An và Cố đô Huế (không phải HN)'], 2, 'HN có nhiều danh hiệu UNESCO.'),
    Q('Tự hào người HN?', ['Chỉ nên tự hào về ẩm thực và phố cổ', 'Chỉ những người sinh ở HN mới đáng tự hào', 'Không có gì đặc biệt so với thành phố khác', 'Truyền thống lâu đời + hiện đại văn minh'], 3, 'Tự hào HN là di sản tinh thần.'),
    Q('Vai trò HS lớp 9 HN?', ['Học giỏi, giữ gìn văn hoá, sống văn minh', 'Chỉ cần học giỏi, không cần văn hoá', 'Mặc kệ', 'Tập trung kiếm tiền, bỏ qua văn hoá'], 0, 'HS HN có vai trò đặc biệt.'),
    Q('Lan toả văn hoá HN?', ['Chỉ qua các kênh chính thức của nhà nước', 'Chỉ qua việc viết sách báo trong nước', 'Qua hành vi, mạng xã hội, kết bạn quốc tế', 'Không cần'], 2, 'Mỗi HS là đại sứ văn hoá HN.'),
    Q('Lời chúc Hà Nội?', ['Chỉ tập trung phát triển kinh tế thuần tuý', 'Mặc kệ', 'Phát triển bền vững + giữ bản sắc', 'Chỉ giữ nguyên hiện trạng không phát triển'], 2, 'Chúc HN ngày càng tốt đẹp.'),
  ]),
];

export const S9GDDP_SCENARIOS = indexBy(S9GDDP_WEEKS);
