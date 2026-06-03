// ============================================================
// Lớp 8 · LỊCH SỬ & ĐỊA LÝ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018:
//  - Lịch sử 8 (cận đại): các cuộc CMTS, Công xã Pari, CMT10 Nga,
//    WW1, WW2, châu Á cận đại, VN cận đại 1858–1918.
//  - Địa lý 8: tự nhiên Việt Nam (vị trí, địa hình, khí hậu,
//    sông ngòi, đất, sinh vật), tài nguyên – môi trường.
// ID prefix: "S8LSDL-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8LSDL', 'lich-su-dia', n, title, qs, opts);

export const S8LSDL_WEEKS = [
  // ──────────────── HK1 — Lịch sử ────────────────
  M(1, 'LS — Cách mạng tư sản Anh thế kỉ XVII', [
    Q('Cuộc CMTS Anh nổ ra vào thế kỉ?', ['XVIII (1701–1800)', 'XVII', 'XV (1401–1500)', 'XVI (1501–1600)'], 1, 'Thế kỉ XVII (1642–1689).'),
    Q('Hai thế lực đối đầu trong CMTS Anh?', ['Công nhân chống tư bản', 'Tôn giáo chống vua', 'Nông dân chống địa chủ', 'Quý tộc mới + tư sản chống chế độ phong kiến'], 3, 'Liên minh quý tộc mới + tư sản chống vua Sác-lơ I.'),
    Q('Năm 1649, vua Sác-lơ I bị?', ['Bắt giam suốt đời', 'Đầy ải', 'Cách chức', 'Hành quyết'], 3, 'Bị hành quyết — sự kiện chấn động châu Âu.'),
    Q('Cuộc cách mạng kết thúc bằng?', ['Cộng hoà tuyệt đối vĩnh viễn', 'Sự kiện "Cách mạng vinh quang" (Glorious Revolution) năm 1688–1689', 'Khôi phục Sác-lơ I', 'Chiến tranh với Pháp'], 1, '1688–89: lập chế độ quân chủ lập hiến.'),
    Q('Sau cách mạng, Anh thiết lập?', ['Cộng hoà tổng thống', 'Đế chế', 'Chế độ quân chủ lập hiến', 'Phong kiến tuyệt đối'], 2, 'Quân chủ lập hiến tồn tại đến nay.'),
    Q('Ý nghĩa CMTS Anh?', ['Củng cố phong kiến', 'Tiêu diệt nông nô châu Phi', 'Không có ý nghĩa', 'Mở đường cho chủ nghĩa tư bản phát triển'], 3, 'Mở đầu thời đại của các cuộc CMTS.'),
  ]),

  M(2, 'LS — Chiến tranh giành độc lập Bắc Mỹ (1775–1783)', [
    Q('Cuộc chiến tranh giành độc lập Bắc Mỹ chống lại?', ['Anh', 'Tây Ban Nha', 'Pháp (đồng minh hỗ trợ Bắc Mỹ)', 'Hà Lan'], 0, '13 thuộc địa Bắc Mỹ chống thực dân Anh.'),
    Q('Năm tuyên ngôn độc lập của Mỹ?', ['1773', '1789', '1776', '1812'], 2, '4 – 7 – 1776: Tuyên ngôn Độc lập.'),
    Q('Người chấp bút Tuyên ngôn Độc lập Mỹ?', ['Benjamin Franklin', 'Abraham Lincoln', 'Thomas Jefferson', 'George Washington'], 2, 'Thomas Jefferson là tác giả chính.'),
    Q('Tổng thống đầu tiên của Hoa Kỳ?', ['John Adams (tổng thống thứ 2)', 'Jefferson', 'Washington', 'Lincoln'], 2, 'George Washington (nhậm chức 1789).'),
    Q('Hoa Kỳ ban đầu gồm bao nhiêu bang?', ['13', '20', '10', '50'], 0, '13 thuộc địa ban đầu.'),
    Q('Ý nghĩa cuộc chiến tranh?', ['Liên minh với Anh', 'Mở rộng phong kiến', 'Thoát ách thực dân Anh, lập quốc gia tư sản đầu tiên ở châu Mỹ', 'Củng cố thuộc địa'], 2, 'Lập quốc gia tư sản hợp chủng đầu tiên.'),
  ]),

  M(3, 'LS — Cách mạng tư sản Pháp 1789', [
    Q('CMTS Pháp bắt đầu năm?', ['1804', '1776', '1789', '1815'], 2, 'Năm 1789, phá ngục Bastille (14/7).'),
    Q('Ba đẳng cấp trong xã hội Pháp trước cách mạng?', ['Quân, sĩ, nông', 'Tăng lữ, quý tộc, đẳng cấp thứ ba', 'Vua, quan, dân', 'Nông dân, công nhân, tư sản'], 1, '3 đẳng cấp đặc trưng nước Pháp.'),
    Q('Đẳng cấp thứ ba gồm?', ['Quý tộc', 'Vua và hoàng gia', 'Tăng lữ', 'Tư sản, nông dân, bình dân thành thị'], 3, 'Đẳng cấp không có đặc quyền, bị áp bức.'),
    Q('Khẩu hiệu của CMTS Pháp?', ['Cách mạng đời đời', 'Cộng hoà – Dân chủ – Tự do', 'Tổ quốc – Danh dự – Tổ tiên', 'Tự do – Bình đẳng – Bác ái'], 3, 'Liberté – Égalité – Fraternité.'),
    Q('Vua Lu-i XVI bị hành quyết năm?', ['1793', '1799', '1789', '1791'], 0, 'Tháng 1 – 1793.'),
    Q('Lãnh tụ phái Gia-cô-banh là?', ['Marat (nhà báo phái Núi, bị ám sát 1793)', 'Danton', 'Robespierre', 'Napoleon'], 2, 'Robespierre — đỉnh cao của cách mạng.'),
  ]),

  M(4, 'LS — Cách mạng công nghiệp Anh', [
    Q('CMCN bắt đầu ở Anh khoảng cuối thế kỉ?', ['XVIII', 'XVII (giai đoạn CMTS Anh)', 'XIX (giai đoạn CM lan ra châu Âu)', 'XVI (thời kì tích lũy tư bản ban đầu)'], 0, 'Cuối thế kỉ XVIII (khoảng 1760).'),
    Q('Phát minh quan trọng đầu tiên của CMCN?', ['Máy kéo sợi Gien-ni', 'Máy bay', 'Điện thoại', 'Máy hơi nước'], 0, 'Máy kéo sợi Gien-ni (1764) là phát minh tiên phong.'),
    Q('Máy hơi nước được hoàn thiện bởi?', ['Alexander Bell (phát minh điện thoại)', 'Newcomen', 'Edison', 'James Watt'], 3, 'James Watt cải tiến (1769–1782).'),
    Q('Ngành nào tiên phong CMCN?', ['Cơ khí chế tạo ô tô', 'Khai mỏ', 'Đóng tàu', 'Dệt vải'], 3, 'Dệt vải bông là ngành tiên phong.'),
    Q('Hệ quả xã hội của CMCN?', ['Phong kiến mạnh lên', 'Không có thay đổi', 'Mọi người trở nên giàu có', 'Hình thành hai giai cấp: tư sản công nghiệp và vô sản công nghiệp'], 3, 'Hai giai cấp đối lập mới.'),
    Q('CMCN làm thay đổi nền kinh tế từ?', ['Công nghiệp → nông nghiệp', 'Buôn bán → tự cung tự cấp', 'Không thay đổi', 'Tự cung tự cấp → sản xuất công nghiệp lớn'], 3, 'Nông nghiệp lạc hậu → công nghiệp hiện đại.'),
  ]),

  M(5, 'LS — Công xã Pari 1871', [
    Q('Công xã Pari thành lập năm?', ['1848', '1871', '1917', '1789'], 1, 'Ngày 18-3-1871.'),
    Q('Công xã Pari là cuộc cách mạng?', ['Của tư sản', 'Của tăng lữ', 'Của giai cấp vô sản đầu tiên', 'Của quý tộc'], 2, 'Cuộc cách mạng vô sản đầu tiên trong lịch sử.'),
    Q('Công xã Pari tồn tại?', ['72 ngày', '1 năm', '5 năm', '10 năm'], 0, 'Khoảng 72 ngày (18/3 – 28/5/1871).'),
    Q('Hoàn cảnh: Công xã Pari nổ ra trong bối cảnh?', ['Trong WW1', 'Trước CMTS Pháp', 'Sau chiến tranh Pháp – Phổ', 'Trong WW2'], 2, 'Sau thất bại của Pháp trước Phổ.'),
    Q('Tính chất Công xã Pari?', ['Nhà nước kiểu mới của giai cấp công nhân', 'Phong kiến', 'Cộng hoà tư sản', 'Đế chế'], 0, 'Nhà nước vô sản đầu tiên trong lịch sử.'),
    Q('Ý nghĩa Công xã Pari?', ['Không có ý nghĩa', 'Phục hồi phong kiến', 'Bài học quý cho phong trào vô sản thế giới', 'Củng cố tư sản Pháp'], 2, 'Bài học lớn của Marx và phong trào CN quốc tế.'),
  ]),

  M(6, 'LS — Quốc tế thứ nhất và Mác – Ăng-ghen', [
    Q('Ai là tác giả "Tuyên ngôn của Đảng Cộng sản" (1848)?', ['Ăng-ghen và Lenin', 'Mác và Ăng-ghen', 'Mác và Lê-nin', 'Lê-nin và Stalin'], 1, 'Karl Marx và Friedrich Engels.'),
    Q('Quốc tế thứ nhất thành lập năm?', ['1848', '1864', '1871', '1889'], 1, 'Năm 1864 tại London.'),
    Q('Mác là người nước?', ['Đức', 'Pháp (nơi Mác hoạt động và viết báo)', 'Anh (nơi Mác sống lưu vong tại Luân Đôn)', 'Nga (nơi tư tưởng Mác được Lê-nin vận dụng)'], 0, 'Marx — người Đức.'),
    Q('Học thuyết của Mác – Ăng-ghen gọi là?', ['Chủ nghĩa tự do', 'Chủ nghĩa hiện sinh', 'Chủ nghĩa Mác', 'Chủ nghĩa thực dụng'], 2, 'Chủ nghĩa Mác — nền tảng cách mạng vô sản.'),
    Q('Đối tượng cách mạng theo Marx là?', ['Giai cấp tư sản', 'Giai cấp công nhân thực hiện CM xã hội chủ nghĩa', 'Nông dân', 'Quý tộc'], 1, 'CN vô sản lật đổ tư sản.'),
    Q('Quốc tế thứ nhất giải tán năm?', ['1876', '1872', '1881', '1889'], 0, '1876 (sau giai đoạn ngắn).'),
  ]),

  M(7, 'LS — Các nước châu Á cuối XIX – đầu XX', [
    Q('Trung Quốc giữa thế kỉ XIX bị?', ['Liên minh với phương Tây bình đẳng', 'Đứng đầu thế giới', 'Các nước đế quốc xâu xé', 'Độc lập tự chủ'], 2, 'Trung Quốc trở thành nửa thuộc địa.'),
    Q('Chiến tranh thuốc phiện lần I (1840–1842) giữa?', ['Pháp – Trung Quốc', 'Nga – Trung Quốc', 'Anh – Trung Quốc', 'Nhật – Trung Quốc'], 2, 'Anh xâm lược Trung Quốc.'),
    Q('Cuộc Duy Tân Minh Trị (Nhật) bắt đầu năm?', ['1868', '1858', '1894', '1905'], 0, 'Năm 1868.'),
    Q('Mục tiêu Duy Tân Minh Trị?', ['Đóng cửa với thế giới', 'Hiện đại hoá Nhật Bản theo phương Tây', 'Liên minh với Trung Quốc', 'Quay lại phong kiến'], 1, 'Hiện đại hoá toàn diện.'),
    Q('Cách mạng Tân Hợi (Trung Quốc) năm?', ['1905', '1919', '1900', '1911'], 3, 'Năm 1911 — lật đổ nhà Thanh.'),
    Q('Người lãnh đạo cách mạng Tân Hợi?', ['Tôn Trung Sơn', 'Mao Trạch Đông', 'Lương Khải Siêu', 'Khang Hữu Vi'], 0, 'Tôn Trung Sơn (Sun Yat-sen).'),
  ]),

  M(8, 'LS — Phong trào giải phóng dân tộc Đông Nam Á', [
    Q('Cuối XIX, hầu hết Đông Nam Á trở thành?', ['Quốc gia phong kiến vĩ đại', 'Thuộc địa của các nước đế quốc', 'Liên minh độc lập', 'Cường quốc'], 1, 'Bị thực dân phương Tây thống trị.'),
    Q('Nước duy nhất ở ĐNÁ thoát khỏi thuộc địa?', ['Việt Nam', 'Thái Lan (Xiêm)', 'Indonesia', 'Lào (bị Pháp đô hộ trong Liên bang Đông Dương)'], 1, 'Xiêm — nhờ chính sách ngoại giao khôn khéo.'),
    Q('Indonesia là thuộc địa của?', ['Anh (đế quốc thuộc địa lớn nhất thế kỉ XIX)', 'Hà Lan', 'Bồ Đào Nha', 'Pháp (đô hộ Đông Dương)'], 1, 'Hà Lan cai trị suốt nhiều thế kỉ.'),
    Q('Phi-líp-pin từng là thuộc địa của?', ['Pháp (thực dân tại Đông Dương)', 'Hà Lan', 'Tây Ban Nha → Mỹ', 'Anh (cai trị Miến Điện, Mã Lai)'], 2, 'Bị Tây Ban Nha chiếm, sau đó Mỹ.'),
    Q('Ấn Độ là thuộc địa của?', ['Hà Lan', 'Pháp (chỉ chiếm vài vùng nhỏ ở Pondicherry)', 'Bồ Đào Nha', 'Anh'], 3, 'Bri-tích Ấn Độ thuộc Anh.'),
    Q('Phong trào giải phóng ở ĐNÁ trong giai đoạn này thường mang tính chất?', ['Yêu nước, nổi dậy nhưng còn mang nặng phong kiến', 'Hoàn toàn vô sản', 'Tự do thương mại', 'Liên minh với thực dân'], 0, 'Lãnh đạo phần lớn là sĩ phu yêu nước.'),
  ]),

  M(9, 'LS — Việt Nam: Pháp xâm lược (1858)', [
    Q('Pháp nổ súng xâm lược Việt Nam vào năm?', ['1867', '1884', '1858', '1862'], 2, '1/9/1858 — Pháp tấn công Đà Nẵng.'),
    Q('Liên quân Pháp – Tây Ban Nha tấn công đầu tiên ở?', ['Huế (kinh đô triều Nguyễn)', 'Sài Gòn', 'Đà Nẵng', 'Hà Nội'], 2, 'Đà Nẵng — chọn vì cảng tốt, gần Huế.'),
    Q('Triều đình Huế là triều?', ['Trần (1226–1400, ba lần đánh Nguyên)', 'Lê (Hậu Lê, 1428–1789)', 'Nguyễn', 'Lý (1009–1225, dời đô Thăng Long)'], 2, 'Triều Nguyễn (1802–1945).'),
    Q('Vua Việt Nam khi Pháp xâm lược (1858)?', ['Minh Mạng', 'Hàm Nghi', 'Bảo Đại', 'Tự Đức'], 3, 'Tự Đức (1847–1883).'),
    Q('Người chỉ huy quân dân Đà Nẵng kháng chiến?', ['Hoàng Diệu', 'Nguyễn Tri Phương', 'Trương Định', 'Phan Thanh Giản'], 1, 'Nguyễn Tri Phương — danh tướng triều Nguyễn.'),
    Q('Sau thất bại Đà Nẵng (1859), Pháp chuyển hướng tấn công?', ['Sài Gòn (Gia Định)', 'Huế (kinh đô, được phòng thủ mạnh)', 'Hà Nội', 'Hải Phòng'], 0, 'Tháng 2-1859 đánh Gia Định.'),
  ]),

  M(10, 'LS — Việt Nam: Hiệp ước Nhâm Tuất 1862, mất Nam Kì', [
    Q('Hiệp ước Nhâm Tuất 1862 nhường cho Pháp?', ['Toàn bộ Nam Kỳ', 'Trung Kỳ', 'Bắc Kỳ', '3 tỉnh miền Đông Nam Kỳ'], 3, '3 tỉnh: Gia Định, Định Tường, Biên Hoà + đảo Côn Lôn.'),
    Q('Đến 1867, Pháp chiếm thêm 3 tỉnh miền Tây Nam Kỳ là?', ['Hà Nội, Hải Phòng, Nam Định', 'Vĩnh Long, An Giang, Hà Tiên', 'Cà Mau, Bạc Liêu, Sóc Trăng', 'Hà Tĩnh, Quảng Bình, Quảng Trị'], 1, 'Vĩnh Long – An Giang – Hà Tiên (chiếm không tốn 1 viên đạn).'),
    Q('Người lãnh đạo nghĩa quân Gò Công chống Pháp?', ['Phan Đình Phùng', 'Nguyễn Trung Trực', 'Hoàng Hoa Thám', 'Trương Định'], 3, 'Bình Tây Đại Nguyên Soái Trương Định.'),
    Q('Câu nói nổi tiếng "Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây" của?', ['Trương Định', 'Phan Đình Phùng', 'Hoàng Diệu', 'Nguyễn Trung Trực'], 3, 'Nguyễn Trung Trực — trước khi bị xử chém.'),
    Q('Hiệp ước Nhâm Tuất bị nhân dân lên án vì?', ['Triều đình nhượng bộ, đầu hàng từng bước', 'Cải cách hành chính', 'Mở cửa kinh tế', 'Đào kênh'], 0, 'Triều đình bạc nhược, hèn nhát.'),
    Q('Phong trào kháng chiến Nam Kỳ tự phát ngoài triều đình mang đặc điểm?', ['Được Pháp ủng hộ', 'Triều đình lãnh đạo', 'Có quân chính quy hỗ trợ', 'Dân nổi dậy mà triều đình không hỗ trợ, thậm chí ngăn cản'], 3, 'Triều đình lo bảo vệ ngôi báu hơn cứu nước.'),
  ]),

  M(11, 'LS — Pháp đánh Bắc Kì lần I và II (1873, 1882)', [
    Q('Pháp đánh Bắc Kì lần I năm?', ['1873', '1862', '1858', '1882'], 0, 'Năm 1873 — Garnier đánh Hà Nội.'),
    Q('Tổng đốc Hà Nội anh dũng hi sinh năm 1873?', ['Hoàng Diệu', 'Phan Thanh Giản', 'Tôn Thất Thuyết', 'Nguyễn Tri Phương'], 3, 'Nguyễn Tri Phương bị thương, không ăn uống mà chết.'),
    Q('Trận Cầu Giấy lần I (1873), tướng Pháp Garnier bị giết do?', ['Quân triều đình chính quy', 'Quân Trung Quốc', 'Nghĩa quân Hoàng Tá Viêm + Lưu Vĩnh Phúc', 'Quân Đức'], 2, 'Liên quân Hoàng Tá Viêm – Lưu Vĩnh Phúc (Cờ Đen) phục kích.'),
    Q('Pháp đánh Bắc Kì lần II năm?', ['1873', '1882', '1884', '1885'], 1, 'Tháng 4-1882 — Henri Rivière đánh Hà Nội.'),
    Q('Tổng đốc Hà Nội năm 1882 tuẫn tiết?', ['Phan Bội Châu', 'Nguyễn Tri Phương', 'Hoàng Diệu', 'Phan Đình Phùng'], 2, 'Hoàng Diệu treo cổ tuẫn tiết.'),
    Q('Trận Cầu Giấy lần II (1883), Henri Rivière?', ['Đầu hàng', 'Bị giết', 'Thắng lớn', 'Rút lui an toàn'], 1, 'Bị giết tại Cầu Giấy — Pháp choáng váng.'),
  ]),

  M(12, 'LS — Hiệp ước Hác-măng (1883) và Pa-tơ-nốt (1884)', [
    Q('Hiệp ước Hác-măng kí năm?', ['1883', '1858', '1884', '1873'], 0, 'Tháng 8 – 1883.'),
    Q('Hiệp ước Hác-măng – Pa-tơ-nốt đánh dấu?', ['VN liên minh với Pháp', 'VN làm chủ Đông Dương', 'VN trở thành thuộc địa của Pháp', 'VN giành độc lập'], 2, 'Việt Nam mất chủ quyền hoàn toàn.'),
    Q('Theo hiệp ước, Việt Nam bị chia thành?', ['Hai miền', 'Bắc Kì (bảo hộ), Trung Kì (bảo hộ – nửa thuộc địa), Nam Kì (thuộc địa)', 'Bốn vùng độc lập', 'Một khối thống nhất tự trị'], 1, 'Chia ba kì để dễ cai trị.'),
    Q('Hiệp ước Pa-tơ-nốt (1884) là bản?', ['Hiệp ước mới với Mỹ', 'Hiệp ước với Nga', 'Sửa đổi Hác-măng để xoa dịu triều đình', 'Hiệp ước với Trung Quốc'], 2, 'Cũng do Pháp soạn, bản chất giống Hác-măng.'),
    Q('Đến 1884, Việt Nam chính thức trở thành?', ['Quốc gia độc lập', 'Thuộc địa và bảo hộ của Pháp', 'Liên minh với Pháp', 'Lệ thuộc Trung Quốc'], 1, 'Pháp hoàn thành xâm lược Việt Nam.'),
    Q('Trách nhiệm để mất nước thuộc về?', ['Phương Tây', 'Trung Quốc', 'Nhân dân', 'Triều đình nhà Nguyễn bạc nhược'], 3, 'Triều đình chịu trách nhiệm chính.'),
  ]),

  M(13, 'LS — Phong trào Cần Vương (1885–1896)', [
    Q('Chiếu Cần Vương do ai ban?', ['Phan Đình Phùng', 'Hoàng Hoa Thám', 'Vua Hàm Nghi', 'Tôn Thất Thuyết'], 2, 'Tôn Thất Thuyết thay mặt vua Hàm Nghi ban năm 1885.'),
    Q('Nội dung Chiếu Cần Vương kêu gọi?', ['Đầu hàng Pháp', 'Văn thân, sĩ phu, nhân dân khắp nơi đứng lên cứu nước, giúp vua', 'Liên minh với Pháp', 'Trốn sang Trung Quốc'], 1, 'Hiệu triệu kháng Pháp.'),
    Q('Cuộc khởi nghĩa lớn nhất trong PT Cần Vương?', ['Khởi nghĩa Hương Khê — Phan Đình Phùng', 'Khởi nghĩa Yên Thế', 'Khởi nghĩa Ba Đình', 'Khởi nghĩa Bãi Sậy'], 0, 'Hương Khê (1885–1896), Phan Đình Phùng và Cao Thắng.'),
    Q('Khởi nghĩa Ba Đình (Thanh Hoá) do ai lãnh đạo?', ['Phạm Bành – Đinh Công Tráng', 'Đề Thám', 'Phan Đình Phùng', 'Nguyễn Thiện Thuật'], 0, 'Phạm Bành và Đinh Công Tráng.'),
    Q('Khởi nghĩa Bãi Sậy (Hưng Yên) do ai lãnh đạo?', ['Hoàng Hoa Thám', 'Trương Định', 'Nguyễn Thiện Thuật', 'Phan Đình Phùng'], 2, 'Nguyễn Thiện Thuật.'),
    Q('Phong trào Cần Vương cuối cùng?', ['Thắng lợi', 'Hoà bình', 'Pháp rút quân', 'Thất bại do lẻ tẻ và chế độ phong kiến lỗi thời'], 3, 'Thất bại vì hệ tư tưởng đã lạc hậu.'),
  ]),

  M(14, 'LS — Khởi nghĩa Yên Thế (1884–1913) — Hoàng Hoa Thám', [
    Q('Khởi nghĩa Yên Thế kéo dài?', ['50 năm', '10 năm', 'Khoảng 30 năm', '5 năm'], 2, '1884–1913 — gần 30 năm.'),
    Q('Lãnh tụ chính của khởi nghĩa Yên Thế?', ['Nguyễn Thiện Thuật', 'Trương Định', 'Phan Đình Phùng', 'Hoàng Hoa Thám (Đề Thám)'], 3, 'Đề Thám — "Hùm thiêng Yên Thế".'),
    Q('Đặc điểm khác biệt của Yên Thế so với Cần Vương?', ['Có vua trực tiếp lãnh đạo', 'Cũng phò vua', 'Là phong trào nông dân tự phát, không thuộc Cần Vương', 'Có Pháp giúp'], 2, 'Phong trào nông dân, không phất cờ Cần Vương.'),
    Q('Địa bàn khởi nghĩa?', ['Hương Khê', 'Yên Thế (Bắc Giang)', 'Bãi Sậy', 'Ba Đình'], 1, 'Vùng rừng núi Yên Thế.'),
    Q('Khởi nghĩa Yên Thế thất bại do?', ['Pháp rút', 'Lực lượng cô lập, vũ khí thô sơ, lãnh đạo bị sát hại', 'Nông dân không tham gia', 'Vua từ chối ủng hộ'], 1, 'Thiếu liên kết và lãnh đạo cách mạng tiến bộ.'),
    Q('Ý nghĩa khởi nghĩa Yên Thế?', ['Liên minh với Pháp', 'Liên minh với phong kiến', 'Thắng lợi hoàn toàn', 'Tinh thần đấu tranh bất khuất của nông dân Việt Nam'], 3, 'Biểu tượng kiên cường của nông dân.'),
  ]),

  M(15, 'LS — Phong trào yêu nước đầu thế kỉ XX', [
    Q('Phan Bội Châu chủ trương?', ['Bạo động vũ trang, dựa vào Nhật', 'Liên minh Trung Quốc', 'Cải lương ôn hoà', 'Đầu hàng Pháp'], 0, 'Đông Du, Việt Nam Quang phục hội.'),
    Q('Phan Châu Trinh chủ trương?', ['Bạo động', 'Đầu hàng Pháp', 'Cải cách văn hoá – xã hội, dựa vào Pháp tiến bộ', 'Liên minh quân sự với Mỹ'], 2, 'Khai dân trí, chấn dân khí, hậu dân sinh.'),
    Q('Phong trào Đông Du diễn ra giai đoạn nào?', ['1905–1909', '1914–1918', '1885–1896', '1858–1862'], 0, 'Đưa thanh niên sang Nhật học.'),
    Q('Đông Kinh nghĩa thục (1907) do ai khởi xướng?', ['Tôn Thất Thuyết', 'Hoàng Hoa Thám', 'Lương Văn Can, Nguyễn Quyền', 'Phan Bội Châu'], 2, 'Phong trào duy tân ở Hà Nội.'),
    Q('Phong trào chống thuế Trung Kì 1908?', ['Liên minh với Mỹ', 'Là phong trào tự phát của nông dân, ảnh hưởng từ Duy Tân', 'Do triều đình tổ chức', 'Do Pháp phát động'], 1, 'Nông dân Trung Kì chống thuế nặng.'),
    Q('Đặc điểm chung của phong trào yêu nước đầu XX?', ['Không có hoạt động', 'Sĩ phu yêu nước tiến bộ tìm con đường mới sau thất bại của Cần Vương', 'Quay lại phong kiến', 'Đầu hàng Pháp'], 1, 'Tiếp nối truyền thống nhưng theo khuynh hướng tư sản.'),
  ]),

  M(16, 'LS — Nguyễn Tất Thành ra đi tìm đường cứu nước', [
    Q('Nguyễn Tất Thành ra đi tìm đường cứu nước năm?', ['1920', '1858', '1911', '1905'], 2, 'Ngày 5-6-1911 từ bến Nhà Rồng.'),
    Q('Bến cảng Người ra đi?', ['Hội An', 'Hải Phòng', 'Bến Nhà Rồng (Sài Gòn)', 'Đà Nẵng'], 2, 'Bến Nhà Rồng — Sài Gòn.'),
    Q('Khi đi, Người với tên?', ['Văn Ba', 'Hồ Chí Minh', 'Lý Thuỵ', 'Nguyễn Ái Quốc'], 0, 'Lấy tên Văn Ba, làm phụ bếp trên tàu Đô đốc Latouche-Tréville.'),
    Q('Hướng đi của Nguyễn Tất Thành khác các cụ trước ở chỗ?', ['Đi Nhật', 'Đi sang phương Tây (Pháp) để tìm hiểu kẻ thù và con đường cứu nước', 'Đi Trung Quốc', 'Ở lại trong nước'], 1, 'Sang phương Tây — bước ngoặt lịch sử.'),
    Q('Ý nghĩa sự kiện 5-6-1911?', ['Kết thúc cách mạng', 'Liên minh với Pháp', 'Mở đầu hành trình tìm đường cứu nước theo con đường mới', 'Khai sinh Đảng'], 2, 'Khởi đầu hành trình lịch sử.'),
    Q('Sau này Người tiếp cận với chủ nghĩa nào?', ['Tự do tư sản', 'Quân chủ lập hiến', 'Mác – Lê-nin', 'Quân phiệt Nhật'], 2, 'Tiếp cận chủ nghĩa Mác – Lê-nin năm 1920.'),
  ]),

  M(17, 'LS — Chính sách khai thác thuộc địa lần I của Pháp (1897–1914)', [
    Q('Pháp tiến hành khai thác thuộc địa lần I sau?', ['Hoàn thành xâm lược, bình định VN', 'Trước Pháp đánh Đà Nẵng', 'Sau WW2', 'Trước WW1'], 0, 'Sau khi cơ bản dập tắt Cần Vương.'),
    Q('Mục đích khai thác thuộc địa lần I?', ['Vơ vét tài nguyên, bóc lột nhân công, biến VN thành thị trường', 'Giáo dục', 'Phát triển VN', 'Mở rộng y tế và bệnh viện cho người Việt'], 0, 'Vì lợi ích kinh tế của Pháp.'),
    Q('Ngành nào được Pháp chú trọng nhất?', ['Công nghiệp nặng', 'Khai mỏ, đồn điền cao su, giao thông phục vụ vơ vét', 'Hàng không', 'Khoa học'], 1, 'Khai mỏ than (Quảng Ninh), cao su (Đông Nam Bộ).'),
    Q('Tuyến đường sắt Bắc – Nam (xuyên Việt) khởi công?', ['1899', '1881', '1936', '1910'], 0, 'Pháp xây dựng từ cuối XIX, hoàn thành 1936.'),
    Q('Hệ quả về xã hội của khai thác thuộc địa lần I?', ['Xuất hiện giai cấp/tầng lớp mới: tư sản, tiểu tư sản, công nhân', 'Phong kiến hiện đại hoá', 'Không thay đổi', 'Triều đình mạnh lên'], 0, 'Hình thành các giai cấp mới.'),
    Q('Đối tượng bị bóc lột tàn tệ nhất?', ['Nông dân và công nhân Việt Nam', 'Tư sản người Pháp', 'Quan lại Pháp', 'Trí thức châu Âu'], 0, 'Nông dân chiếm 90% dân số, bị bần cùng hoá.'),
  ]),

  M(18, 'Ôn tập học kì I (Lịch sử)', [
    Q('CMTS Pháp năm?', ['1689', '1871', '1789', '1776'], 2, '1789.'),
    Q('Công xã Pari là cuộc cách mạng?', ['Tôn giáo', 'Vô sản đầu tiên', 'Phong kiến', 'Tư sản'], 1, 'Vô sản đầu tiên.'),
    Q('Pháp xâm lược VN năm?', ['1884', '1873', '1858', '1862'], 2, '1/9/1858 tại Đà Nẵng.'),
    Q('Hiệp ước biến VN thành thuộc địa Pháp?', ['Nhâm Tuất 1862', 'Versailles 1919', 'Giáp Tuất 1874', 'Hác-măng – Pa-tơ-nốt 1883–1884'], 3, 'Hác-măng – Pa-tơ-nốt.'),
    Q('Lãnh tụ Yên Thế?', ['Trương Định', 'Phan Đình Phùng', 'Nguyễn Tri Phương', 'Hoàng Hoa Thám'], 3, 'Đề Thám.'),
    Q('Nguyễn Tất Thành ra đi tìm đường cứu nước năm?', ['1920', '1905', '1858', '1911'], 3, '5/6/1911.'),
  ]),

  // ──────────────── HK2 — Địa lý + LS hiện đại ────────────────
  M(19, 'ĐL — Vị trí địa lý và phạm vi lãnh thổ VN', [
    Q('Việt Nam nằm ở?', ['Bắc Á, giáp Liên bang Nga', 'Châu Phi', 'Trung tâm Đông Nam Á, thuộc bán đảo Đông Dương', 'Châu Đại Dương'], 2, 'Trung tâm khu vực Đông Nam Á.'),
    Q('Toạ độ cực Bắc VN ở tỉnh?', ['Lai Châu', 'Cao Bằng', 'Lào Cai', 'Hà Giang'], 3, 'Lũng Cú – Đồng Văn, Hà Giang (~23°23\' B).'),
    Q('Cực Nam đất liền VN?', ['Côn Đảo', 'Phú Quốc', 'Bến Tre', 'Mũi Cà Mau (Cà Mau)'], 3, 'Đất Mũi, Cà Mau.'),
    Q('Cực Đông đất liền?', ['Vũng Tàu', 'Mũi Đôi (Khánh Hoà)', 'Quảng Ninh', 'Đà Nẵng'], 1, 'Mũi Đôi – Hòn Đầu (Khánh Hoà).'),
    Q('Diện tích phần đất liền VN khoảng?', ['500 000 km²', '1 000 000 km²', '331 000 km²', '100 000 km²'], 2, 'Khoảng 331 212 km².'),
    Q('Vùng biển VN rộng khoảng?', ['10 triệu km²', '100 nghìn km²', 'Khoảng 1 triệu km²', '50 nghìn km²'], 2, 'Khoảng 1 triệu km² Biển Đông.'),
  ]),

  M(20, 'ĐL — Ảnh hưởng vị trí địa lý đến tự nhiên VN', [
    Q('VN nằm hoàn toàn trong vùng?', ['Nội chí tuyến Bắc', 'Ôn đới', 'Ngoại chí tuyến', 'Vòng cực Bắc, gần Bắc Băng Dương'], 0, 'Nội chí tuyến Bắc bán cầu.'),
    Q('Khí hậu VN có tính chất chủ đạo?', ['Hàn đới', 'Sa mạc', 'Nhiệt đới ẩm gió mùa', 'Cực ôn'], 2, 'Khí hậu nhiệt đới ẩm gió mùa.'),
    Q('Vị trí giáp Biển Đông mang đến?', ['Độ ẩm cao, mưa nhiều, sinh vật biển phong phú', 'Lạnh giá', 'Khô hạn', 'Sa mạc hoá'], 0, 'Biển Đông là nguồn ẩm chính.'),
    Q('VN nằm trên đường giao thông quốc tế?', ['Chỉ có ý nghĩa với khu vực Đông Nam Á', 'Chỉ đường bộ', 'Chỉ hàng không', 'Hàng hải và hàng không quan trọng giữa Đông Á – ĐNÁ – Thái Bình Dương'], 3, 'Vị trí giao thông chiến lược.'),
    Q('VN nằm trong khu vực có?', ['Chỉ tuyết', 'Không có thiên tai', 'Chỉ động đất', 'Nhiều thiên tai (bão, lũ, hạn…)'], 3, 'Khu vực chịu nhiều thiên tai.'),
    Q('Tài nguyên sinh vật của VN?', ['Nghèo nàn', 'Chỉ vài loài', 'Đa dạng sinh học cao do vị trí giao thoa', 'Toàn loài ngoại lai'], 2, 'Đa dạng sinh học cao.'),
  ]),

  M(21, 'ĐL — Địa hình Việt Nam (1)', [
    Q('Địa hình VN có đặc điểm?', ['1/2 là biển', '1/2 là sa mạc', '3/4 diện tích là đồi núi', '3/4 là đồng bằng'], 2, '3/4 diện tích là đồi núi (chủ yếu là đồi núi thấp).'),
    Q('Núi cao nhất VN?', ['Phan Xi Păng (3147 m)', 'Bà Đen', 'Tản Viên', 'Yên Tử'], 0, 'Phan Xi Păng (Phanxipăng) — "nóc nhà Đông Dương".'),
    Q('Vùng núi Tây Bắc có dãy?', ['Hoàng Liên Sơn', 'Trường Sơn', 'Ngân Sơn', 'Đông Triều'], 0, 'Hoàng Liên Sơn cao đồ sộ nhất.'),
    Q('Vùng núi Đông Bắc có cấu trúc?', ['Hình cánh cung mở rộng về phía Bắc', 'Phẳng, ít chia cắt như đồng bằng', 'Các dãy núi chạy thẳng song song hướng Tây Bắc – Đông Nam', 'Khối núi tròn dạng vòm cao nguyên'], 0, '4 cánh cung lớn: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều.'),
    Q('Dãy Trường Sơn chạy theo hướng?', ['Đông – Tây', 'Bắc – Nam thẳng', 'Tây Bắc – Đông Nam', 'Vòng tròn'], 2, 'TB-ĐN, dài khoảng 1100 km.'),
    Q('Đồng bằng lớn nhất VN?', ['Đồng bằng sông Hồng', 'Đồng bằng Tây Nguyên', 'Đồng bằng sông Cửu Long', 'Đồng bằng ven biển miền Trung'], 2, 'ĐBSCL ~ 40 000 km².'),
  ]),

  M(22, 'ĐL — Địa hình Việt Nam (2)', [
    Q('Đồng bằng sông Hồng có diện tích?', ['~40 000 km²', '~100 000 km²', '~5 000 km²', '~15 000 km²'], 3, 'Khoảng 15 000 km².'),
    Q('Vùng có cao nguyên đất đỏ ba dan rộng nhất?', ['Đông Bắc', 'Tây Nguyên', 'Tây Bắc', 'ĐBSCL (chủ yếu là đất phù sa)'], 1, 'Tây Nguyên với 5 cao nguyên: Kon Tum, Pleiku, Đắk Lắk, Mơ Nông, Lâm Viên.'),
    Q('Bờ biển VN dài khoảng?', ['5000 km', '2000 km', '3260 km', '1000 km'], 2, 'Khoảng 3260 km.'),
    Q('Quần đảo lớn nhất VN?', ['Phú Quốc', 'Hoàng Sa', 'Côn Đảo', 'Trường Sa'], 3, 'Trường Sa (số đảo nhiều nhất).'),
    Q('Đảo lớn nhất VN?', ['Phú Quốc', 'Lý Sơn', 'Cát Bà', 'Côn Đảo'], 0, 'Phú Quốc ~ 567 km².'),
    Q('Bờ biển miền Trung có nhiều?', ['Cao nguyên', 'Sông lớn', 'Vũng vịnh đẹp, cát trắng', 'Đầm lầy'], 2, 'Vịnh Hạ Long, Nha Trang, Cam Ranh, Lăng Cô…'),
  ]),

  M(23, 'ĐL — Khí hậu Việt Nam', [
    Q('Khí hậu VN là?', ['Hàn đới', 'Sa mạc', 'Nhiệt đới ẩm gió mùa', 'Ôn đới'], 2, 'Đặc điểm cơ bản.'),
    Q('VN có mấy mùa rõ rệt ở miền Bắc?', ['2 mùa', '4 mùa', '6 mùa', '1 mùa'], 1, 'Miền Bắc có 4 mùa rõ rệt.'),
    Q('Miền Nam có mấy mùa chính?', ['4 mùa', '6 mùa', 'Mùa mưa và mùa khô', 'Hàn đới'], 2, '2 mùa: mưa (5-10) và khô (11-4).'),
    Q('Lượng mưa trung bình năm của VN?', ['5000 mm', '100 mm', '1500–2000 mm', '500 mm'], 2, '1500–2000 mm/năm, cao hơn nhiều khu vực.'),
    Q('Gió mùa mùa hạ ở VN thổi theo hướng?', ['Đông Bắc', 'Tây Nam (và Đông Nam ở miền Bắc)', 'Tây (gió phơn khô nóng ở Bắc Trung Bộ)', 'Bắc (gió lạnh từ lục địa châu Á)'], 1, 'Gió mùa Tây Nam mang mưa lớn.'),
    Q('Gió mùa mùa đông ở miền Bắc?', ['Đông Nam', 'Đông Bắc — lạnh, khô', 'Tây Bắc', 'Tây Nam'], 1, 'Gió mùa Đông Bắc.'),
  ]),

  M(24, 'ĐL — Sông ngòi Việt Nam', [
    Q('VN có khoảng bao nhiêu con sông dài trên 10 km?', ['1000', '100', '10 000', '2360'], 3, 'Khoảng 2360 sông.'),
    Q('Sông dài nhất chảy qua VN?', ['Sông Mê Kông (Cửu Long)', 'Sông Đà', 'Sông Đồng Nai', 'Sông Hồng'], 0, 'Mê Kông qua VN ~ 230 km nhưng tổng chiều dài cả con sông >4 800 km.'),
    Q('Sông Hồng có nguồn từ?', ['Trung Quốc (Vân Nam)', 'Việt Nam (dãy Hoàng Liên Sơn)', 'Lào (cao nguyên Bắc Lào)', 'Campuchia'], 0, 'Bắt nguồn từ Vân Nam (TQ).'),
    Q('Sông ngòi VN chảy chủ yếu theo hướng?', ['Bắc – Nam thẳng', 'Đông – Tây', 'Tây Bắc – Đông Nam và vòng cung', 'Hỗn loạn'], 2, 'Hai hướng chính do địa hình quyết định.'),
    Q('Chế độ nước sông ngòi VN?', ['Đều quanh năm', 'Khô cạn hoàn toàn', 'Đóng băng', 'Theo mùa, mùa lũ và mùa cạn'], 3, 'Mùa lũ – mùa cạn do gió mùa.'),
    Q('Sông ngòi VN có giá trị?', ['Thuỷ điện, nước tưới, giao thông, thuỷ sản, du lịch', 'Không có giá trị', 'Chỉ giao thông', 'Chỉ thuỷ điện'], 0, 'Nhiều giá trị kinh tế và đời sống.'),
  ]),

  M(25, 'ĐL — Đất và sinh vật VN', [
    Q('Nhóm đất chiếm diện tích lớn nhất VN?', ['Đất feralit (đỏ vàng)', 'Đất phù sa', 'Đất cát ven biển', 'Đất mặn'], 0, 'Feralit chiếm ~65% — vùng đồi núi.'),
    Q('Đất phù sa tập trung chủ yếu ở?', ['Tây Nguyên', 'Trường Sơn', 'Tây Bắc', 'ĐB sông Hồng, ĐB sông Cửu Long'], 3, 'Hai vựa lúa lớn.'),
    Q('Đất ba dan thuận lợi cho cây?', ['Khoai tây', 'Rau xanh', 'Lúa nước', 'Công nghiệp dài ngày: cà phê, cao su, hồ tiêu, chè'], 3, 'Tây Nguyên — cà phê, cao su.'),
    Q('Hệ thực vật VN có?', ['100 loài', '10 loài', '1000 loài', 'Đa dạng — gần 12 000 loài thực vật bậc cao'], 3, 'Đa dạng sinh học cao.'),
    Q('Vườn quốc gia đầu tiên của VN?', ['Cúc Phương', 'Tam Đảo', 'Yok Đôn', 'Cát Tiên'], 0, 'Cúc Phương (thành lập 1962).'),
    Q('Đa dạng sinh học VN đứng?', ['Nghèo nhất', 'Không xếp hạng', 'Hàng đầu Đông Nam Á', 'Trung bình thấp'], 2, 'VN nằm trong nhóm đa dạng sinh học cao của thế giới.'),
  ]),

  M(26, 'ĐL — Tài nguyên và môi trường VN', [
    Q('Tài nguyên khoáng sản VN nổi bật?', ['Không có khoáng sản', 'Chỉ kim cương', 'Chỉ vàng', 'Than đá, dầu khí, bô-xít, sắt, đá vôi…'], 3, 'Đa dạng khoáng sản.'),
    Q('Bô-xít tập trung nhiều ở?', ['ĐBSCL (chủ yếu khai thác dầu khí và thủy sản)', 'Tây Bắc', 'Tây Nguyên', 'Đông Bắc'], 2, 'Tây Nguyên có trữ lượng lớn.'),
    Q('Than đá lớn nhất ở?', ['Quảng Nam', 'Quảng Ninh', 'Quảng Bình', 'Cà Mau'], 1, 'Quảng Ninh — than antraxit chất lượng cao.'),
    Q('Dầu khí chủ yếu khai thác ở?', ['Thềm lục địa phía Nam (Bà Rịa – Vũng Tàu)', 'Tây Bắc', 'ĐB sông Hồng', 'Tây Nguyên'], 0, 'Bể Cửu Long và Nam Côn Sơn.'),
    Q('Vấn đề môi trường nghiêm trọng nhất hiện nay ở VN?', ['Không có vấn đề', 'Sa mạc hoá toàn bộ', 'Tuyết quá nhiều', 'Ô nhiễm không khí đô thị, ô nhiễm nước, suy thoái rừng'], 3, 'Nhiều thách thức môi trường.'),
    Q('Phát triển bền vững yêu cầu?', ['Kết hợp tăng trưởng kinh tế với bảo vệ môi trường và công bằng xã hội', 'Tăng trưởng bằng mọi giá', 'Khai thác cạn kiệt', 'Bỏ phát triển'], 0, '3 trụ cột: kinh tế – xã hội – môi trường.'),
  ]),

  M(27, 'LS — Chiến tranh thế giới thứ nhất (1914–1918)', [
    Q('WW1 nổ ra năm?', ['1905', '1917', '1914', '1939'], 2, 'Tháng 7 – 1914.'),
    Q('Sự kiện châm ngòi WW1?', ['Hoàng tử Áo – Hung bị ám sát ở Sarajevo', 'Hitler lên cầm quyền', 'Pháp xâm lược VN', 'CMT10 Nga'], 0, 'Vụ ám sát Franz Ferdinand (28-6-1914).'),
    Q('WW1 có hai phe?', ['Phe Đông và Tây', 'Phe Hiệp ước (Đồng minh) và Liên minh', 'Phe Mỹ và Anh', 'Phe Nam và Bắc'], 1, 'Hiệp ước: Anh, Pháp, Nga; Liên minh: Đức, Áo-Hung, Ý (sau đổi phe).'),
    Q('Mỹ tham chiến vào năm?', ['1918', '1915', '1914', '1917'], 3, 'Năm 1917.'),
    Q('WW1 kết thúc năm?', ['1917', '1919', '1918', '1916'], 2, '11-11-1918, Đức đầu hàng.'),
    Q('Hậu quả WW1?', ['Mỹ thất bại', 'Hoà bình lâu dài', 'Không có hậu quả', 'Khoảng 10 triệu người chết, các đế quốc lớn suy yếu, CMXHCN Nga thắng lợi'], 3, 'Thiệt hại nặng nề về người và của.'),
  ]),

  M(28, 'LS — Cách mạng tháng Mười Nga 1917', [
    Q('CMT10 Nga thắng lợi vào?', ['1914', 'Tháng 10 (theo lịch Nga cũ) năm 1917', '1922', '1905'], 1, 'Tương đương 7-11-1917 (lịch mới).'),
    Q('Lãnh tụ CMT10 Nga?', ['Karl Marx (mất từ năm 1883)', 'Lê-nin', 'Engels', 'Stalin'], 1, 'V.I. Lê-nin (1870–1924).'),
    Q('CMT10 Nga là cuộc?', ['Cách mạng vô sản thắng lợi đầu tiên trên thế giới', 'Cách mạng tư sản', 'Cách mạng phong kiến', 'Cách mạng tôn giáo'], 0, 'Cuộc cách mạng XHCN đầu tiên thắng lợi.'),
    Q('Sau CMT10, nước Nga thành?', ['Cộng hòa Liên bang Anh – Nga', 'Liên Xô (sau 1922)', 'Cộng hòa Pháp lần thứ ba mở rộng', 'Đế quốc Đức cải cách thành cộng hòa'], 1, 'Liên bang CHXHCN Xô viết (1922).'),
    Q('Đảng lãnh đạo CMT10?', ['Đảng Dân chủ', 'Đảng Bôn-sê-vích', 'Đảng Tự do', 'Đảng Cộng hoà'], 1, 'Bolshevik (do Lenin lãnh đạo).'),
    Q('Ảnh hưởng CMT10 đến VN?', ['Tiêu cực', 'Pháp hoá VN', 'Không ảnh hưởng', 'Cổ vũ phong trào giải phóng dân tộc, ảnh hưởng tư tưởng Nguyễn Ái Quốc'], 3, 'Mở ra con đường cứu nước mới cho VN.'),
  ]),

  M(29, 'LS — Giữa hai cuộc chiến tranh thế giới (1918–1939)', [
    Q('Cuộc đại khủng hoảng kinh tế thế giới nổ ra năm?', ['1923', '1929', '1939', '1933'], 1, '1929–1933, bắt đầu từ Mỹ.'),
    Q('Hậu quả của khủng hoảng 1929–1933?', ['Suy thoái kinh tế trầm trọng, chủ nghĩa phát xít trỗi dậy', 'Hoà bình', 'Tăng trưởng mạnh', 'Không hậu quả'], 0, 'Mở đường cho phát xít Đức, Ý, Nhật.'),
    Q('Hitler lên cầm quyền ở Đức năm?', ['1939', '1933', '1925', '1929'], 1, '30-1-1933.'),
    Q('Lực lượng phát xít gồm?', ['Mỹ, Anh, Pháp', 'Nga, Trung Quốc', 'Đức, Ý, Nhật', 'Tây Ban Nha, Bồ Đào Nha'], 2, 'Trục phát xít Berlin – Roma – Tokyo.'),
    Q('Liên Xô trong giai đoạn này?', ['Tan rã', 'Xây dựng chủ nghĩa xã hội, thực hiện công nghiệp hoá', 'Liên minh với phát xít', 'Khủng hoảng'], 1, 'Kế hoạch 5 năm, công nghiệp hoá mạnh.'),
    Q('Mỹ ra khỏi khủng hoảng nhờ?', ['Liên minh với Đức', 'Phát xít hoá', 'Chiến tranh', 'Chính sách Mới (New Deal) của Roosevelt'], 3, 'New Deal (1933).'),
  ]),

  M(30, 'LS — Chiến tranh thế giới thứ hai (1939–1945)', [
    Q('WW2 bắt đầu năm?', ['1941', '1929', '1937', '1939'], 3, '1-9-1939, Đức tấn công Ba Lan.'),
    Q('Hai phe trong WW2?', ['Cộng sản và Tư bản', 'Đông và Tây', 'Phe Đồng minh và phe Phát xít', 'Bắc và Nam'], 2, 'Đồng minh: Anh, Pháp, Liên Xô, Mỹ, Trung Quốc… Phát xít: Đức, Ý, Nhật.'),
    Q('Liên Xô tham gia WW2 sau khi?', ['Mỹ yêu cầu', '1939', 'Tự nguyện trước', 'Đức tấn công Liên Xô (22-6-1941)'], 3, 'Chiến dịch Barbarossa.'),
    Q('Mỹ tham chiến sau sự kiện?', ['Liên Xô bị tấn công', 'Hitler lên cầm quyền', 'Đức tấn công Pháp', 'Nhật tấn công Trân Châu Cảng 7-12-1941'], 3, 'Pearl Harbor.'),
    Q('Mỹ ném bom nguyên tử xuống?', ['Hiroshima và Nagasaki (8-1945)', 'Tokyo (thủ đô, bị ném bom thường nhưng không nguyên tử)', 'Moskva', 'Berlin'], 0, '6 và 9 tháng 8 – 1945.'),
    Q('WW2 kết thúc năm?', ['1949', '1945', '1946', '1944'], 1, '2-9-1945, Nhật đầu hàng.'),
  ]),

  M(31, 'LS — Việt Nam đầu thế kỉ XX đến 1918', [
    Q('Pháp khai thác thuộc địa lần I ở VN nhằm?', ['Bóc lột tài nguyên và nhân công', 'Trao trả độc lập', 'Phát triển VN', 'Giáo dục VN'], 0, 'Vì lợi ích kinh tế Pháp.'),
    Q('Đến năm 1918, kết quả tìm đường cứu nước theo khuynh hướng tư sản (Phan Bội Châu, Phan Châu Trinh)?', ['Đều thất bại', 'Đang thắng', 'Liên minh với Pháp', 'Thắng lợi'], 0, 'Các phong trào trước Đảng Cộng sản đều thất bại.'),
    Q('Người mở ra con đường cứu nước mới?', ['Phan Bội Châu', 'Phan Châu Trinh', 'Hoàng Hoa Thám', 'Nguyễn Tất Thành / Nguyễn Ái Quốc'], 3, 'Nguyễn Tất Thành ra đi 1911.'),
    Q('Tầng lớp mới ra đời trong xã hội VN đầu XX?', ['Quý tộc', 'Tăng lữ', 'Vua chúa', 'Công nhân, tư sản, tiểu tư sản'], 3, 'Khai thác thuộc địa hình thành giai cấp mới.'),
    Q('Giai cấp nào sẽ giữ vai trò lãnh đạo cách mạng VN sau này?', ['Giai cấp địa chủ', 'Giai cấp tư sản', 'Giai cấp công nhân', 'Giai cấp phong kiến'], 2, 'Giai cấp công nhân lớn lên cùng khai thác thuộc địa.'),
    Q('VN đầu XX cần con đường?', ['Liên minh đế quốc', 'Đầu hàng Pháp', 'Cứu nước mới phù hợp thời đại — sau này là CN Mác-Lênin', 'Quay lại phong kiến'], 2, 'Tiền đề cho con đường vô sản.'),
  ]),

  M(32, 'ĐL — Đặc điểm chung tự nhiên VN', [
    Q('Hai đặc điểm nổi bật về tự nhiên VN?', ['Sa mạc và tuyết', 'Tính chất nhiệt đới ẩm gió mùa và tính chất ven biển', 'Khô hạn và lạnh', 'Hàn đới và ôn đới'], 1, 'Nhiệt đới ẩm gió mùa + ven biển.'),
    Q('Tài nguyên tự nhiên VN có?', ['Chỉ có than đá và dầu mỏ', 'Nghèo nàn', 'Đa dạng nhưng có giới hạn, cần khai thác hợp lý', 'Vô tận'], 2, 'Tài nguyên có hạn.'),
    Q('Thiên tai thường gặp ở VN?', ['Núi lửa nhiều', 'Động đất lớn thường xuyên', 'Tuyết lở', 'Bão, lũ lụt, hạn hán, sạt lở, xâm nhập mặn'], 3, 'Nhiều thiên tai do vị trí và khí hậu.'),
    Q('VN nằm trong khu vực gió mùa?', ['Châu Phi', 'Châu Á — gió mùa đông và gió mùa hạ', 'Châu Mỹ', 'Châu Âu'], 1, 'Khu vực gió mùa châu Á.'),
    Q('Bảo vệ tài nguyên thiên nhiên là?', ['Trách nhiệm của mọi công dân và nhà nước', 'Chỉ của chính phủ', 'Chỉ của nhà khoa học', 'Không cần'], 0, 'Trách nhiệm chung của xã hội.'),
    Q('Phát triển kinh tế biển cần?', ['Khai thác bền vững + bảo vệ chủ quyền + chống ô nhiễm', 'Không khai thác', 'Đầu hàng', 'Khai thác cạn kiệt'], 0, 'Tài nguyên biển có hạn.'),
  ]),

  M(33, 'Ôn tập Lịch sử cận đại', [
    Q('CMTS Anh kết thúc bằng?', ['Cộng hoà thứ Nhất', 'Cộng hoà La Mã', 'Cách mạng vinh quang 1688', 'Đế chế Napoleon'], 2, 'Glorious Revolution.'),
    Q('Tuyên ngôn Độc lập Mỹ?', ['1812', '1804', '1789', '1776'], 3, '4-7-1776.'),
    Q('Vua bị hành quyết trong CMTS Pháp?', ['Na-pô-lê-ông', 'Lu-i XVI', 'Lu-i XIV', 'Sác-lơ I'], 1, 'Louis XVI bị xử tử 1793.'),
    Q('Công xã Pari năm?', ['1871', '1917', '1789', '1848'], 0, '1871.'),
    Q('Cách mạng tháng Mười Nga thắng lợi năm?', ['1945', '1922', '1917', '1905'], 2, '1917.'),
    Q('WW1 và WW2 kết thúc năm?', ['1919 và 1944', '1917 và 1941', '1914 và 1939', '1918 và 1945'], 3, '1918 (WW1) và 1945 (WW2).'),
  ]),

  M(34, 'Ôn tập Địa lý VN', [
    Q('VN nằm trong vùng khí hậu?', ['Sa mạc', 'Hàn đới', 'Ôn đới', 'Nhiệt đới ẩm gió mùa'], 3, 'Nhiệt đới ẩm gió mùa.'),
    Q('Núi cao nhất VN?', ['Yên Tử', 'Phan Xi Păng', 'Bà Đen', 'Tản Viên'], 1, 'Phan Xi Păng 3147 m.'),
    Q('Đồng bằng lớn nhất VN?', ['Tây Nguyên', 'Sông Hồng', 'Sông Cửu Long', 'Ven biển miền Trung'], 2, 'ĐBSCL.'),
    Q('Bờ biển VN dài?', ['2000 km', '1000 km', '5000 km', '3260 km'], 3, '~ 3260 km.'),
    Q('Đảo lớn nhất VN?', ['Phú Quốc', 'Côn Đảo', 'Cát Bà', 'Lý Sơn'], 0, 'Phú Quốc.'),
    Q('Loại đất chiếm nhiều nhất VN?', ['Đất mặn (chủ yếu ven biển ĐBSCL)', 'Feralit', 'Đất cát (ven biển miền Trung)', 'Phù sa'], 1, 'Đất feralit ~65%.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Pháp xâm lược VN năm?', ['1873', '1884', '1862', '1858'], 3, '1/9/1858.'),
    Q('Phong trào Cần Vương bắt đầu từ?', ['Chiếu Cần Vương 1885', '1917', '1911', '1858'], 0, 'Năm 1885.'),
    Q('Nguyễn Tất Thành ra đi cứu nước năm?', ['1920', '1858', '1905', '1911'], 3, '5/6/1911.'),
    Q('WW1 diễn ra trong giai đoạn?', ['1917–1922', '1914–1918', '1939–1945', '1858–1918'], 1, '1914–1918.'),
    Q('CMT10 Nga năm?', ['1789', '1871', '1945', '1917'], 3, '1917.'),
    Q('Khí hậu VN có đặc trưng?', ['Hàn đới ôn hoà', 'Hai mùa lạnh', 'Sa mạc khô cằn', 'Nhiệt đới ẩm gió mùa'], 3, 'Nhiệt đới ẩm gió mùa.'),
  ]),
];

export const S8LSDL_SCENARIOS = indexBy(S8LSDL_WEEKS);
