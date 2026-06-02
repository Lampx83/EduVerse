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
    Q('Cuộc CMTS Anh nổ ra vào thế kỉ?', ['XV', 'XVI', 'XVII', 'XVIII'], 2, 'Thế kỉ XVII (1642–1689).'),
    Q('Hai thế lực đối đầu trong CMTS Anh?', ['Quý tộc mới + tư sản chống chế độ phong kiến', 'Nông dân chống địa chủ', 'Công nhân chống tư bản', 'Tôn giáo chống vua'], 0, 'Liên minh quý tộc mới + tư sản chống vua Sác-lơ I.'),
    Q('Năm 1649, vua Sác-lơ I bị?', ['Đầy ải', 'Hành quyết', 'Cách chức', 'Bắt giam suốt đời'], 1, 'Bị hành quyết — sự kiện chấn động châu Âu.'),
    Q('Cuộc cách mạng kết thúc bằng?', ['Sự kiện "Cách mạng vinh quang" (Glorious Revolution) năm 1688–1689', 'Khôi phục Sác-lơ I', 'Cộng hoà tuyệt đối vĩnh viễn', 'Chiến tranh với Pháp'], 0, '1688–89: lập chế độ quân chủ lập hiến.'),
    Q('Sau cách mạng, Anh thiết lập?', ['Chế độ quân chủ lập hiến', 'Đế chế', 'Cộng hoà tổng thống', 'Phong kiến tuyệt đối'], 0, 'Quân chủ lập hiến tồn tại đến nay.'),
    Q('Ý nghĩa CMTS Anh?', ['Mở đường cho chủ nghĩa tư bản phát triển', 'Củng cố phong kiến', 'Tiêu diệt nông nô châu Phi', 'Không có ý nghĩa'], 0, 'Mở đầu thời đại của các cuộc CMTS.'),
  ]),

  M(2, 'LS — Chiến tranh giành độc lập Bắc Mỹ (1775–1783)', [
    Q('Cuộc chiến tranh giành độc lập Bắc Mỹ chống lại?', ['Pháp', 'Tây Ban Nha', 'Anh', 'Hà Lan'], 2, '13 thuộc địa Bắc Mỹ chống thực dân Anh.'),
    Q('Năm tuyên ngôn độc lập của Mỹ?', ['1773', '1776', '1789', '1812'], 1, '4 – 7 – 1776: Tuyên ngôn Độc lập.'),
    Q('Người chấp bút Tuyên ngôn Độc lập Mỹ?', ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'Benjamin Franklin'], 1, 'Thomas Jefferson là tác giả chính.'),
    Q('Tổng thống đầu tiên của Hoa Kỳ?', ['Lincoln', 'Washington', 'Jefferson', 'Adams'], 1, 'George Washington (nhậm chức 1789).'),
    Q('Hoa Kỳ ban đầu gồm bao nhiêu bang?', ['10', '13', '20', '50'], 1, '13 thuộc địa ban đầu.'),
    Q('Ý nghĩa cuộc chiến tranh?', ['Thoát ách thực dân Anh, lập quốc gia tư sản đầu tiên ở châu Mỹ', 'Mở rộng phong kiến', 'Củng cố thuộc địa', 'Liên minh với Anh'], 0, 'Lập quốc gia tư sản hợp chủng đầu tiên.'),
  ]),

  M(3, 'LS — Cách mạng tư sản Pháp 1789', [
    Q('CMTS Pháp bắt đầu năm?', ['1776', '1789', '1804', '1815'], 1, 'Năm 1789, phá ngục Bastille (14/7).'),
    Q('Ba đẳng cấp trong xã hội Pháp trước cách mạng?', ['Tăng lữ, quý tộc, đẳng cấp thứ ba', 'Vua, quan, dân', 'Nông dân, công nhân, tư sản', 'Quân, sĩ, nông'], 0, '3 đẳng cấp đặc trưng nước Pháp.'),
    Q('Đẳng cấp thứ ba gồm?', ['Tư sản, nông dân, bình dân thành thị', 'Vua và hoàng gia', 'Tăng lữ', 'Quý tộc'], 0, 'Đẳng cấp không có đặc quyền, bị áp bức.'),
    Q('Khẩu hiệu của CMTS Pháp?', ['Tự do – Bình đẳng – Bác ái', 'Tổ quốc – Danh dự – Tổ tiên', 'Cộng hoà – Dân chủ – Tự do', 'Cách mạng đời đời'], 0, 'Liberté – Égalité – Fraternité.'),
    Q('Vua Lu-i XVI bị hành quyết năm?', ['1789', '1791', '1793', '1799'], 2, 'Tháng 1 – 1793.'),
    Q('Lãnh tụ phái Gia-cô-banh là?', ['Napoleon', 'Robespierre', 'Marat', 'Danton'], 1, 'Robespierre — đỉnh cao của cách mạng.'),
  ]),

  M(4, 'LS — Cách mạng công nghiệp Anh', [
    Q('CMCN bắt đầu ở Anh khoảng cuối thế kỉ?', ['XVI', 'XVII', 'XVIII', 'XIX'], 2, 'Cuối thế kỉ XVIII (khoảng 1760).'),
    Q('Phát minh quan trọng đầu tiên của CMCN?', ['Máy hơi nước', 'Máy kéo sợi Gien-ni', 'Máy bay', 'Điện thoại'], 1, 'Máy kéo sợi Gien-ni (1764) là phát minh tiên phong.'),
    Q('Máy hơi nước được hoàn thiện bởi?', ['Newcomen', 'James Watt', 'Edison', 'Bell'], 1, 'James Watt cải tiến (1769–1782).'),
    Q('Ngành nào tiên phong CMCN?', ['Dệt vải', 'Đóng tàu', 'Khai mỏ', 'Cơ khí chế tạo ô tô'], 0, 'Dệt vải bông là ngành tiên phong.'),
    Q('Hệ quả xã hội của CMCN?', ['Hình thành hai giai cấp: tư sản công nghiệp và vô sản công nghiệp', 'Mọi người trở nên giàu có', 'Phong kiến mạnh lên', 'Không có thay đổi'], 0, 'Hai giai cấp đối lập mới.'),
    Q('CMCN làm thay đổi nền kinh tế từ?', ['Tự cung tự cấp → sản xuất công nghiệp lớn', 'Công nghiệp → nông nghiệp', 'Buôn bán → tự cung tự cấp', 'Không thay đổi'], 0, 'Nông nghiệp lạc hậu → công nghiệp hiện đại.'),
  ]),

  M(5, 'LS — Công xã Pari 1871', [
    Q('Công xã Pari thành lập năm?', ['1789', '1848', '1871', '1917'], 2, 'Ngày 18-3-1871.'),
    Q('Công xã Pari là cuộc cách mạng?', ['Của giai cấp vô sản đầu tiên', 'Của quý tộc', 'Của tăng lữ', 'Của tư sản'], 0, 'Cuộc cách mạng vô sản đầu tiên trong lịch sử.'),
    Q('Công xã Pari tồn tại?', ['72 ngày', '1 năm', '5 năm', '10 năm'], 0, 'Khoảng 72 ngày (18/3 – 28/5/1871).'),
    Q('Hoàn cảnh: Công xã Pari nổ ra trong bối cảnh?', ['Sau chiến tranh Pháp – Phổ', 'Trong WW1', 'Trong WW2', 'Trước CMTS Pháp'], 0, 'Sau thất bại của Pháp trước Phổ.'),
    Q('Tính chất Công xã Pari?', ['Nhà nước kiểu mới của giai cấp công nhân', 'Đế chế', 'Cộng hoà tư sản', 'Phong kiến'], 0, 'Nhà nước vô sản đầu tiên trong lịch sử.'),
    Q('Ý nghĩa Công xã Pari?', ['Bài học quý cho phong trào vô sản thế giới', 'Củng cố tư sản Pháp', 'Phục hồi phong kiến', 'Không có ý nghĩa'], 0, 'Bài học lớn của Marx và phong trào CN quốc tế.'),
  ]),

  M(6, 'LS — Quốc tế thứ nhất và Mác – Ăng-ghen', [
    Q('Ai là tác giả "Tuyên ngôn của Đảng Cộng sản" (1848)?', ['Mác và Ăng-ghen', 'Mác và Lê-nin', 'Lê-nin và Stalin', 'Ăng-ghen và Lenin'], 0, 'Karl Marx và Friedrich Engels.'),
    Q('Quốc tế thứ nhất thành lập năm?', ['1848', '1864', '1871', '1889'], 1, 'Năm 1864 tại London.'),
    Q('Mác là người nước?', ['Đức', 'Anh', 'Pháp', 'Nga'], 0, 'Marx — người Đức.'),
    Q('Học thuyết của Mác – Ăng-ghen gọi là?', ['Chủ nghĩa Mác', 'Chủ nghĩa tự do', 'Chủ nghĩa hiện sinh', 'Chủ nghĩa thực dụng'], 0, 'Chủ nghĩa Mác — nền tảng cách mạng vô sản.'),
    Q('Đối tượng cách mạng theo Marx là?', ['Giai cấp tư sản', 'Giai cấp công nhân thực hiện CM xã hội chủ nghĩa', 'Quý tộc', 'Nông dân'], 1, 'CN vô sản lật đổ tư sản.'),
    Q('Quốc tế thứ nhất giải tán năm?', ['1872', '1876', '1881', '1889'], 1, '1876 (sau giai đoạn ngắn).'),
  ]),

  M(7, 'LS — Các nước châu Á cuối XIX – đầu XX', [
    Q('Trung Quốc giữa thế kỉ XIX bị?', ['Các nước đế quốc xâu xé', 'Độc lập tự chủ', 'Liên minh với phương Tây bình đẳng', 'Đứng đầu thế giới'], 0, 'Trung Quốc trở thành nửa thuộc địa.'),
    Q('Chiến tranh thuốc phiện lần I (1840–1842) giữa?', ['Anh – Trung Quốc', 'Pháp – Trung Quốc', 'Nhật – Trung Quốc', 'Nga – Trung Quốc'], 0, 'Anh xâm lược Trung Quốc.'),
    Q('Cuộc Duy Tân Minh Trị (Nhật) bắt đầu năm?', ['1858', '1868', '1894', '1905'], 1, 'Năm 1868.'),
    Q('Mục tiêu Duy Tân Minh Trị?', ['Hiện đại hoá Nhật Bản theo phương Tây', 'Đóng cửa với thế giới', 'Quay lại phong kiến', 'Liên minh với Trung Quốc'], 0, 'Hiện đại hoá toàn diện.'),
    Q('Cách mạng Tân Hợi (Trung Quốc) năm?', ['1900', '1905', '1911', '1919'], 2, 'Năm 1911 — lật đổ nhà Thanh.'),
    Q('Người lãnh đạo cách mạng Tân Hợi?', ['Tôn Trung Sơn', 'Mao Trạch Đông', 'Lương Khải Siêu', 'Khang Hữu Vi'], 0, 'Tôn Trung Sơn (Sun Yat-sen).'),
  ]),

  M(8, 'LS — Phong trào giải phóng dân tộc Đông Nam Á', [
    Q('Cuối XIX, hầu hết Đông Nam Á trở thành?', ['Thuộc địa của các nước đế quốc', 'Cường quốc', 'Liên minh độc lập', 'Quốc gia phong kiến vĩ đại'], 0, 'Bị thực dân phương Tây thống trị.'),
    Q('Nước duy nhất ở ĐNÁ thoát khỏi thuộc địa?', ['Việt Nam', 'Thái Lan (Xiêm)', 'Indonesia', 'Lào'], 1, 'Xiêm — nhờ chính sách ngoại giao khôn khéo.'),
    Q('Indonesia là thuộc địa của?', ['Anh', 'Hà Lan', 'Pháp', 'Bồ Đào Nha'], 1, 'Hà Lan cai trị suốt nhiều thế kỉ.'),
    Q('Phi-líp-pin từng là thuộc địa của?', ['Tây Ban Nha → Mỹ', 'Anh', 'Pháp', 'Hà Lan'], 0, 'Bị Tây Ban Nha chiếm, sau đó Mỹ.'),
    Q('Ấn Độ là thuộc địa của?', ['Anh', 'Pháp', 'Bồ Đào Nha', 'Hà Lan'], 0, 'Bri-tích Ấn Độ thuộc Anh.'),
    Q('Phong trào giải phóng ở ĐNÁ trong giai đoạn này thường mang tính chất?', ['Yêu nước, nổi dậy nhưng còn mang nặng phong kiến', 'Hoàn toàn vô sản', 'Tự do thương mại', 'Liên minh với thực dân'], 0, 'Lãnh đạo phần lớn là sĩ phu yêu nước.'),
  ]),

  M(9, 'LS — Việt Nam: Pháp xâm lược (1858)', [
    Q('Pháp nổ súng xâm lược Việt Nam vào năm?', ['1858', '1862', '1867', '1884'], 0, '1/9/1858 — Pháp tấn công Đà Nẵng.'),
    Q('Liên quân Pháp – Tây Ban Nha tấn công đầu tiên ở?', ['Đà Nẵng', 'Sài Gòn', 'Hà Nội', 'Huế'], 0, 'Đà Nẵng — chọn vì cảng tốt, gần Huế.'),
    Q('Triều đình Huế là triều?', ['Lê', 'Trần', 'Nguyễn', 'Lý'], 2, 'Triều Nguyễn (1802–1945).'),
    Q('Vua Việt Nam khi Pháp xâm lược (1858)?', ['Minh Mạng', 'Tự Đức', 'Hàm Nghi', 'Bảo Đại'], 1, 'Tự Đức (1847–1883).'),
    Q('Người chỉ huy quân dân Đà Nẵng kháng chiến?', ['Nguyễn Tri Phương', 'Phan Thanh Giản', 'Hoàng Diệu', 'Trương Định'], 0, 'Nguyễn Tri Phương — danh tướng triều Nguyễn.'),
    Q('Sau thất bại Đà Nẵng (1859), Pháp chuyển hướng tấn công?', ['Sài Gòn (Gia Định)', 'Hà Nội', 'Huế', 'Hải Phòng'], 0, 'Tháng 2-1859 đánh Gia Định.'),
  ]),

  M(10, 'LS — Việt Nam: Hiệp ước Nhâm Tuất 1862, mất Nam Kì', [
    Q('Hiệp ước Nhâm Tuất 1862 nhường cho Pháp?', ['Bắc Kỳ', '3 tỉnh miền Đông Nam Kỳ', 'Toàn bộ Nam Kỳ', 'Trung Kỳ'], 1, '3 tỉnh: Gia Định, Định Tường, Biên Hoà + đảo Côn Lôn.'),
    Q('Đến 1867, Pháp chiếm thêm 3 tỉnh miền Tây Nam Kỳ là?', ['Vĩnh Long, An Giang, Hà Tiên', 'Hà Nội, Hải Phòng, Nam Định', 'Hà Tĩnh, Quảng Bình, Quảng Trị', 'Cà Mau, Bạc Liêu, Sóc Trăng'], 0, 'Vĩnh Long – An Giang – Hà Tiên (chiếm không tốn 1 viên đạn).'),
    Q('Người lãnh đạo nghĩa quân Gò Công chống Pháp?', ['Trương Định', 'Nguyễn Trung Trực', 'Phan Đình Phùng', 'Hoàng Hoa Thám'], 0, 'Bình Tây Đại Nguyên Soái Trương Định.'),
    Q('Câu nói nổi tiếng "Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây" của?', ['Nguyễn Trung Trực', 'Trương Định', 'Phan Đình Phùng', 'Hoàng Diệu'], 0, 'Nguyễn Trung Trực — trước khi bị xử chém.'),
    Q('Hiệp ước Nhâm Tuất bị nhân dân lên án vì?', ['Triều đình nhượng bộ, đầu hàng từng bước', 'Mở cửa kinh tế', 'Cải cách hành chính', 'Đào kênh'], 0, 'Triều đình bạc nhược, hèn nhát.'),
    Q('Phong trào kháng chiến Nam Kỳ tự phát ngoài triều đình mang đặc điểm?', ['Dân nổi dậy mà triều đình không hỗ trợ, thậm chí ngăn cản', 'Triều đình lãnh đạo', 'Có quân chính quy hỗ trợ', 'Được Pháp ủng hộ'], 0, 'Triều đình lo bảo vệ ngôi báu hơn cứu nước.'),
  ]),

  M(11, 'LS — Pháp đánh Bắc Kì lần I và II (1873, 1882)', [
    Q('Pháp đánh Bắc Kì lần I năm?', ['1858', '1862', '1873', '1882'], 2, 'Năm 1873 — Garnier đánh Hà Nội.'),
    Q('Tổng đốc Hà Nội anh dũng hi sinh năm 1873?', ['Hoàng Diệu', 'Nguyễn Tri Phương', 'Phan Thanh Giản', 'Tôn Thất Thuyết'], 1, 'Nguyễn Tri Phương bị thương, không ăn uống mà chết.'),
    Q('Trận Cầu Giấy lần I (1873), tướng Pháp Garnier bị giết do?', ['Nghĩa quân Hoàng Tá Viêm + Lưu Vĩnh Phúc', 'Quân triều đình chính quy', 'Quân Trung Quốc', 'Quân Đức'], 0, 'Liên quân Hoàng Tá Viêm – Lưu Vĩnh Phúc (Cờ Đen) phục kích.'),
    Q('Pháp đánh Bắc Kì lần II năm?', ['1873', '1882', '1884', '1885'], 1, 'Tháng 4-1882 — Henri Rivière đánh Hà Nội.'),
    Q('Tổng đốc Hà Nội năm 1882 tuẫn tiết?', ['Nguyễn Tri Phương', 'Hoàng Diệu', 'Phan Đình Phùng', 'Phan Bội Châu'], 1, 'Hoàng Diệu treo cổ tuẫn tiết.'),
    Q('Trận Cầu Giấy lần II (1883), Henri Rivière?', ['Bị giết', 'Thắng lớn', 'Rút lui an toàn', 'Đầu hàng'], 0, 'Bị giết tại Cầu Giấy — Pháp choáng váng.'),
  ]),

  M(12, 'LS — Hiệp ước Hác-măng (1883) và Pa-tơ-nốt (1884)', [
    Q('Hiệp ước Hác-măng kí năm?', ['1858', '1873', '1883', '1884'], 2, 'Tháng 8 – 1883.'),
    Q('Hiệp ước Hác-măng – Pa-tơ-nốt đánh dấu?', ['VN trở thành thuộc địa của Pháp', 'VN giành độc lập', 'VN liên minh với Pháp', 'VN làm chủ Đông Dương'], 0, 'Việt Nam mất chủ quyền hoàn toàn.'),
    Q('Theo hiệp ước, Việt Nam bị chia thành?', ['Bắc Kì (bảo hộ), Trung Kì (bảo hộ – nửa thuộc địa), Nam Kì (thuộc địa)', 'Hai miền', 'Một khối thống nhất tự trị', 'Bốn vùng độc lập'], 0, 'Chia ba kì để dễ cai trị.'),
    Q('Hiệp ước Pa-tơ-nốt (1884) là bản?', ['Sửa đổi Hác-măng để xoa dịu triều đình', 'Hiệp ước mới với Mỹ', 'Hiệp ước với Trung Quốc', 'Hiệp ước với Nga'], 0, 'Cũng do Pháp soạn, bản chất giống Hác-măng.'),
    Q('Đến 1884, Việt Nam chính thức trở thành?', ['Thuộc địa và bảo hộ của Pháp', 'Liên minh với Pháp', 'Quốc gia độc lập', 'Lệ thuộc Trung Quốc'], 0, 'Pháp hoàn thành xâm lược Việt Nam.'),
    Q('Trách nhiệm để mất nước thuộc về?', ['Triều đình nhà Nguyễn bạc nhược', 'Nhân dân', 'Phương Tây', 'Trung Quốc'], 0, 'Triều đình chịu trách nhiệm chính.'),
  ]),

  M(13, 'LS — Phong trào Cần Vương (1885–1896)', [
    Q('Chiếu Cần Vương do ai ban?', ['Vua Hàm Nghi', 'Tôn Thất Thuyết', 'Phan Đình Phùng', 'Hoàng Hoa Thám'], 0, 'Tôn Thất Thuyết thay mặt vua Hàm Nghi ban năm 1885.'),
    Q('Nội dung Chiếu Cần Vương kêu gọi?', ['Văn thân, sĩ phu, nhân dân khắp nơi đứng lên cứu nước, giúp vua', 'Đầu hàng Pháp', 'Liên minh với Pháp', 'Trốn sang Trung Quốc'], 0, 'Hiệu triệu kháng Pháp.'),
    Q('Cuộc khởi nghĩa lớn nhất trong PT Cần Vương?', ['Khởi nghĩa Hương Khê — Phan Đình Phùng', 'Khởi nghĩa Yên Thế', 'Khởi nghĩa Ba Đình', 'Khởi nghĩa Bãi Sậy'], 0, 'Hương Khê (1885–1896), Phan Đình Phùng và Cao Thắng.'),
    Q('Khởi nghĩa Ba Đình (Thanh Hoá) do ai lãnh đạo?', ['Phạm Bành – Đinh Công Tráng', 'Nguyễn Thiện Thuật', 'Phan Đình Phùng', 'Đề Thám'], 0, 'Phạm Bành và Đinh Công Tráng.'),
    Q('Khởi nghĩa Bãi Sậy (Hưng Yên) do ai lãnh đạo?', ['Nguyễn Thiện Thuật', 'Hoàng Hoa Thám', 'Phan Đình Phùng', 'Trương Định'], 0, 'Nguyễn Thiện Thuật.'),
    Q('Phong trào Cần Vương cuối cùng?', ['Thất bại do lẻ tẻ và chế độ phong kiến lỗi thời', 'Thắng lợi', 'Hoà bình', 'Pháp rút quân'], 0, 'Thất bại vì hệ tư tưởng đã lạc hậu.'),
  ]),

  M(14, 'LS — Khởi nghĩa Yên Thế (1884–1913) — Hoàng Hoa Thám', [
    Q('Khởi nghĩa Yên Thế kéo dài?', ['Khoảng 30 năm', '5 năm', '10 năm', '50 năm'], 0, '1884–1913 — gần 30 năm.'),
    Q('Lãnh tụ chính của khởi nghĩa Yên Thế?', ['Hoàng Hoa Thám (Đề Thám)', 'Phan Đình Phùng', 'Nguyễn Thiện Thuật', 'Trương Định'], 0, 'Đề Thám — "Hùm thiêng Yên Thế".'),
    Q('Đặc điểm khác biệt của Yên Thế so với Cần Vương?', ['Là phong trào nông dân tự phát, không thuộc Cần Vương', 'Cũng phò vua', 'Có vua trực tiếp lãnh đạo', 'Có Pháp giúp'], 0, 'Phong trào nông dân, không phất cờ Cần Vương.'),
    Q('Địa bàn khởi nghĩa?', ['Yên Thế (Bắc Giang)', 'Hương Khê', 'Ba Đình', 'Bãi Sậy'], 0, 'Vùng rừng núi Yên Thế.'),
    Q('Khởi nghĩa Yên Thế thất bại do?', ['Lực lượng cô lập, vũ khí thô sơ, lãnh đạo bị sát hại', 'Pháp rút', 'Vua từ chối ủng hộ', 'Nông dân không tham gia'], 0, 'Thiếu liên kết và lãnh đạo cách mạng tiến bộ.'),
    Q('Ý nghĩa khởi nghĩa Yên Thế?', ['Tinh thần đấu tranh bất khuất của nông dân Việt Nam', 'Liên minh với phong kiến', 'Liên minh với Pháp', 'Thắng lợi hoàn toàn'], 0, 'Biểu tượng kiên cường của nông dân.'),
  ]),

  M(15, 'LS — Phong trào yêu nước đầu thế kỉ XX', [
    Q('Phan Bội Châu chủ trương?', ['Bạo động vũ trang, dựa vào Nhật', 'Cải lương ôn hoà', 'Đầu hàng Pháp', 'Liên minh Trung Quốc'], 0, 'Đông Du, Việt Nam Quang phục hội.'),
    Q('Phan Châu Trinh chủ trương?', ['Cải cách văn hoá – xã hội, dựa vào Pháp tiến bộ', 'Bạo động', 'Đầu hàng Pháp', 'Liên minh quân sự với Mỹ'], 0, 'Khai dân trí, chấn dân khí, hậu dân sinh.'),
    Q('Phong trào Đông Du diễn ra giai đoạn nào?', ['1905–1909', '1885–1896', '1858–1862', '1914–1918'], 0, 'Đưa thanh niên sang Nhật học.'),
    Q('Đông Kinh nghĩa thục (1907) do ai khởi xướng?', ['Lương Văn Can, Nguyễn Quyền', 'Phan Bội Châu', 'Hoàng Hoa Thám', 'Tôn Thất Thuyết'], 0, 'Phong trào duy tân ở Hà Nội.'),
    Q('Phong trào chống thuế Trung Kì 1908?', ['Là phong trào tự phát của nông dân, ảnh hưởng từ Duy Tân', 'Do Pháp phát động', 'Do triều đình tổ chức', 'Liên minh với Mỹ'], 0, 'Nông dân Trung Kì chống thuế nặng.'),
    Q('Đặc điểm chung của phong trào yêu nước đầu XX?', ['Sĩ phu yêu nước tiến bộ tìm con đường mới sau thất bại của Cần Vương', 'Quay lại phong kiến', 'Đầu hàng Pháp', 'Không có hoạt động'], 0, 'Tiếp nối truyền thống nhưng theo khuynh hướng tư sản.'),
  ]),

  M(16, 'LS — Nguyễn Tất Thành ra đi tìm đường cứu nước', [
    Q('Nguyễn Tất Thành ra đi tìm đường cứu nước năm?', ['1858', '1905', '1911', '1920'], 2, 'Ngày 5-6-1911 từ bến Nhà Rồng.'),
    Q('Bến cảng Người ra đi?', ['Hải Phòng', 'Bến Nhà Rồng (Sài Gòn)', 'Đà Nẵng', 'Hội An'], 1, 'Bến Nhà Rồng — Sài Gòn.'),
    Q('Khi đi, Người với tên?', ['Nguyễn Ái Quốc', 'Hồ Chí Minh', 'Văn Ba', 'Lý Thuỵ'], 2, 'Lấy tên Văn Ba, làm phụ bếp trên tàu Đô đốc Latouche-Tréville.'),
    Q('Hướng đi của Nguyễn Tất Thành khác các cụ trước ở chỗ?', ['Đi sang phương Tây (Pháp) để tìm hiểu kẻ thù và con đường cứu nước', 'Đi Nhật', 'Đi Trung Quốc', 'Ở lại trong nước'], 0, 'Sang phương Tây — bước ngoặt lịch sử.'),
    Q('Ý nghĩa sự kiện 5-6-1911?', ['Mở đầu hành trình tìm đường cứu nước theo con đường mới', 'Kết thúc cách mạng', 'Liên minh với Pháp', 'Khai sinh Đảng'], 0, 'Khởi đầu hành trình lịch sử.'),
    Q('Sau này Người tiếp cận với chủ nghĩa nào?', ['Mác – Lê-nin', 'Tự do tư sản', 'Quân phiệt Nhật', 'Quân chủ lập hiến'], 0, 'Tiếp cận chủ nghĩa Mác – Lê-nin năm 1920.'),
  ]),

  M(17, 'LS — Chính sách khai thác thuộc địa lần I của Pháp (1897–1914)', [
    Q('Pháp tiến hành khai thác thuộc địa lần I sau?', ['Hoàn thành xâm lược, bình định VN', 'Trước WW1', 'Trước Pháp đánh Đà Nẵng', 'Sau WW2'], 0, 'Sau khi cơ bản dập tắt Cần Vương.'),
    Q('Mục đích khai thác thuộc địa lần I?', ['Vơ vét tài nguyên, bóc lột nhân công, biến VN thành thị trường', 'Phát triển VN', 'Giáo dục', 'Y tế'], 0, 'Vì lợi ích kinh tế của Pháp.'),
    Q('Ngành nào được Pháp chú trọng nhất?', ['Khai mỏ, đồn điền cao su, giao thông phục vụ vơ vét', 'Công nghiệp nặng', 'Hàng không', 'Khoa học'], 0, 'Khai mỏ than (Quảng Ninh), cao su (Đông Nam Bộ).'),
    Q('Tuyến đường sắt Bắc – Nam (xuyên Việt) khởi công?', ['1881', '1899', '1910', '1936'], 1, 'Pháp xây dựng từ cuối XIX, hoàn thành 1936.'),
    Q('Hệ quả về xã hội của khai thác thuộc địa lần I?', ['Xuất hiện giai cấp/tầng lớp mới: tư sản, tiểu tư sản, công nhân', 'Không thay đổi', 'Triều đình mạnh lên', 'Phong kiến hiện đại hoá'], 0, 'Hình thành các giai cấp mới.'),
    Q('Đối tượng bị bóc lột tàn tệ nhất?', ['Nông dân và công nhân Việt Nam', 'Quan lại Pháp', 'Tư sản người Pháp', 'Trí thức châu Âu'], 0, 'Nông dân chiếm 90% dân số, bị bần cùng hoá.'),
  ]),

  M(18, 'Ôn tập học kì I (Lịch sử)', [
    Q('CMTS Pháp năm?', ['1689', '1776', '1789', '1871'], 2, '1789.'),
    Q('Công xã Pari là cuộc cách mạng?', ['Vô sản đầu tiên', 'Tư sản', 'Phong kiến', 'Tôn giáo'], 0, 'Vô sản đầu tiên.'),
    Q('Pháp xâm lược VN năm?', ['1858', '1862', '1873', '1884'], 0, '1/9/1858 tại Đà Nẵng.'),
    Q('Hiệp ước biến VN thành thuộc địa Pháp?', ['Nhâm Tuất 1862', 'Giáp Tuất 1874', 'Hác-măng – Pa-tơ-nốt 1883–1884', 'Versailles 1919'], 2, 'Hác-măng – Pa-tơ-nốt.'),
    Q('Lãnh tụ Yên Thế?', ['Hoàng Hoa Thám', 'Phan Đình Phùng', 'Nguyễn Tri Phương', 'Trương Định'], 0, 'Đề Thám.'),
    Q('Nguyễn Tất Thành ra đi tìm đường cứu nước năm?', ['1858', '1905', '1911', '1920'], 2, '5/6/1911.'),
  ]),

  // ──────────────── HK2 — Địa lý + LS hiện đại ────────────────
  M(19, 'ĐL — Vị trí địa lý và phạm vi lãnh thổ VN', [
    Q('Việt Nam nằm ở?', ['Trung tâm Đông Nam Á, thuộc bán đảo Đông Dương', 'Bắc Á', 'Châu Phi', 'Châu Đại Dương'], 0, 'Trung tâm khu vực Đông Nam Á.'),
    Q('Toạ độ cực Bắc VN ở tỉnh?', ['Hà Giang', 'Cao Bằng', 'Lào Cai', 'Lai Châu'], 0, 'Lũng Cú – Đồng Văn, Hà Giang (~23°23\' B).'),
    Q('Cực Nam đất liền VN?', ['Mũi Cà Mau (Cà Mau)', 'Côn Đảo', 'Phú Quốc', 'Bến Tre'], 0, 'Đất Mũi, Cà Mau.'),
    Q('Cực Đông đất liền?', ['Mũi Đôi (Khánh Hoà)', 'Đà Nẵng', 'Quảng Ninh', 'Vũng Tàu'], 0, 'Mũi Đôi – Hòn Đầu (Khánh Hoà).'),
    Q('Diện tích phần đất liền VN khoảng?', ['100 000 km²', '331 000 km²', '500 000 km²', '1 000 000 km²'], 1, 'Khoảng 331 212 km².'),
    Q('Vùng biển VN rộng khoảng?', ['Khoảng 1 triệu km²', '100 nghìn km²', '50 nghìn km²', '10 triệu km²'], 0, 'Khoảng 1 triệu km² Biển Đông.'),
  ]),

  M(20, 'ĐL — Ảnh hưởng vị trí địa lý đến tự nhiên VN', [
    Q('VN nằm hoàn toàn trong vùng?', ['Nội chí tuyến Bắc', 'Ngoại chí tuyến', 'Cực', 'Ôn đới'], 0, 'Nội chí tuyến Bắc bán cầu.'),
    Q('Khí hậu VN có tính chất chủ đạo?', ['Nhiệt đới ẩm gió mùa', 'Hàn đới', 'Cực ôn', 'Sa mạc'], 0, 'Khí hậu nhiệt đới ẩm gió mùa.'),
    Q('Vị trí giáp Biển Đông mang đến?', ['Độ ẩm cao, mưa nhiều, sinh vật biển phong phú', 'Khô hạn', 'Lạnh giá', 'Sa mạc hoá'], 0, 'Biển Đông là nguồn ẩm chính.'),
    Q('VN nằm trên đường giao thông quốc tế?', ['Hàng hải và hàng không quan trọng giữa Đông Á – ĐNÁ – Thái Bình Dương', 'Không quan trọng', 'Chỉ đường bộ', 'Chỉ hàng không'], 0, 'Vị trí giao thông chiến lược.'),
    Q('VN nằm trong khu vực có?', ['Nhiều thiên tai (bão, lũ, hạn…)', 'Không có thiên tai', 'Chỉ động đất', 'Chỉ tuyết'], 0, 'Khu vực chịu nhiều thiên tai.'),
    Q('Tài nguyên sinh vật của VN?', ['Đa dạng sinh học cao do vị trí giao thoa', 'Nghèo nàn', 'Chỉ vài loài', 'Toàn loài ngoại lai'], 0, 'Đa dạng sinh học cao.'),
  ]),

  M(21, 'ĐL — Địa hình Việt Nam (1)', [
    Q('Địa hình VN có đặc điểm?', ['3/4 diện tích là đồi núi', '3/4 là đồng bằng', '1/2 là sa mạc', '1/2 là biển'], 0, '3/4 diện tích là đồi núi (chủ yếu là đồi núi thấp).'),
    Q('Núi cao nhất VN?', ['Phan Xi Păng (3147 m)', 'Bà Đen', 'Tản Viên', 'Yên Tử'], 0, 'Phan Xi Păng (Phanxipăng) — "nóc nhà Đông Dương".'),
    Q('Vùng núi Tây Bắc có dãy?', ['Hoàng Liên Sơn', 'Trường Sơn', 'Đông Triều', 'Ngân Sơn'], 0, 'Hoàng Liên Sơn cao đồ sộ nhất.'),
    Q('Vùng núi Đông Bắc có cấu trúc?', ['Hình cánh cung mở rộng về phía Bắc', 'Thẳng', 'Tròn', 'Phẳng'], 0, '4 cánh cung lớn: Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều.'),
    Q('Dãy Trường Sơn chạy theo hướng?', ['Tây Bắc – Đông Nam', 'Bắc – Nam thẳng', 'Đông – Tây', 'Vòng tròn'], 0, 'TB-ĐN, dài khoảng 1100 km.'),
    Q('Đồng bằng lớn nhất VN?', ['Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng', 'Đồng bằng ven biển miền Trung', 'Đồng bằng Tây Nguyên'], 0, 'ĐBSCL ~ 40 000 km².'),
  ]),

  M(22, 'ĐL — Địa hình Việt Nam (2)', [
    Q('Đồng bằng sông Hồng có diện tích?', ['~15 000 km²', '~40 000 km²', '~100 000 km²', '~5 000 km²'], 0, 'Khoảng 15 000 km².'),
    Q('Vùng có cao nguyên đất đỏ ba dan rộng nhất?', ['Tây Nguyên', 'Tây Bắc', 'Đông Bắc', 'ĐBSCL'], 0, 'Tây Nguyên với 5 cao nguyên: Kon Tum, Pleiku, Đắk Lắk, Mơ Nông, Lâm Viên.'),
    Q('Bờ biển VN dài khoảng?', ['1000 km', '2000 km', '3260 km', '5000 km'], 2, 'Khoảng 3260 km.'),
    Q('Quần đảo lớn nhất VN?', ['Hoàng Sa', 'Trường Sa', 'Phú Quốc', 'Côn Đảo'], 1, 'Trường Sa (số đảo nhiều nhất).'),
    Q('Đảo lớn nhất VN?', ['Cát Bà', 'Phú Quốc', 'Côn Đảo', 'Lý Sơn'], 1, 'Phú Quốc ~ 567 km².'),
    Q('Bờ biển miền Trung có nhiều?', ['Vũng vịnh đẹp, cát trắng', 'Đầm lầy', 'Sông lớn', 'Cao nguyên'], 0, 'Vịnh Hạ Long, Nha Trang, Cam Ranh, Lăng Cô…'),
  ]),

  M(23, 'ĐL — Khí hậu Việt Nam', [
    Q('Khí hậu VN là?', ['Nhiệt đới ẩm gió mùa', 'Ôn đới', 'Hàn đới', 'Sa mạc'], 0, 'Đặc điểm cơ bản.'),
    Q('VN có mấy mùa rõ rệt ở miền Bắc?', ['4 mùa', '2 mùa', '6 mùa', '1 mùa'], 0, 'Miền Bắc có 4 mùa rõ rệt.'),
    Q('Miền Nam có mấy mùa chính?', ['Mùa mưa và mùa khô', '4 mùa', 'Hàn đới', '6 mùa'], 0, '2 mùa: mưa (5-10) và khô (11-4).'),
    Q('Lượng mưa trung bình năm của VN?', ['100 mm', '500 mm', '1500–2000 mm', '5000 mm'], 2, '1500–2000 mm/năm, cao hơn nhiều khu vực.'),
    Q('Gió mùa mùa hạ ở VN thổi theo hướng?', ['Đông Bắc', 'Tây Nam (và Đông Nam ở miền Bắc)', 'Tây', 'Bắc'], 1, 'Gió mùa Tây Nam mang mưa lớn.'),
    Q('Gió mùa mùa đông ở miền Bắc?', ['Đông Bắc — lạnh, khô', 'Tây Nam', 'Đông Nam', 'Tây Bắc'], 0, 'Gió mùa Đông Bắc.'),
  ]),

  M(24, 'ĐL — Sông ngòi Việt Nam', [
    Q('VN có khoảng bao nhiêu con sông dài trên 10 km?', ['100', '1000', '2360', '10 000'], 2, 'Khoảng 2360 sông.'),
    Q('Sông dài nhất chảy qua VN?', ['Sông Hồng', 'Sông Mê Kông (Cửu Long)', 'Sông Đồng Nai', 'Sông Đà'], 1, 'Mê Kông qua VN ~ 230 km nhưng tổng chiều dài cả con sông >4 800 km.'),
    Q('Sông Hồng có nguồn từ?', ['Trung Quốc (Vân Nam)', 'Lào', 'VN', 'Campuchia'], 0, 'Bắt nguồn từ Vân Nam (TQ).'),
    Q('Sông ngòi VN chảy chủ yếu theo hướng?', ['Tây Bắc – Đông Nam và vòng cung', 'Bắc – Nam thẳng', 'Đông – Tây', 'Hỗn loạn'], 0, 'Hai hướng chính do địa hình quyết định.'),
    Q('Chế độ nước sông ngòi VN?', ['Theo mùa, mùa lũ và mùa cạn', 'Đều quanh năm', 'Khô cạn hoàn toàn', 'Đóng băng'], 0, 'Mùa lũ – mùa cạn do gió mùa.'),
    Q('Sông ngòi VN có giá trị?', ['Thuỷ điện, nước tưới, giao thông, thuỷ sản, du lịch', 'Không có giá trị', 'Chỉ thuỷ điện', 'Chỉ giao thông'], 0, 'Nhiều giá trị kinh tế và đời sống.'),
  ]),

  M(25, 'ĐL — Đất và sinh vật VN', [
    Q('Nhóm đất chiếm diện tích lớn nhất VN?', ['Đất feralit (đỏ vàng)', 'Đất phù sa', 'Đất mặn', 'Đất cát ven biển'], 0, 'Feralit chiếm ~65% — vùng đồi núi.'),
    Q('Đất phù sa tập trung chủ yếu ở?', ['ĐB sông Hồng, ĐB sông Cửu Long', 'Tây Nguyên', 'Tây Bắc', 'Trường Sơn'], 0, 'Hai vựa lúa lớn.'),
    Q('Đất ba dan thuận lợi cho cây?', ['Công nghiệp dài ngày: cà phê, cao su, hồ tiêu, chè', 'Lúa nước', 'Rau xanh', 'Khoai tây'], 0, 'Tây Nguyên — cà phê, cao su.'),
    Q('Hệ thực vật VN có?', ['Đa dạng — gần 12 000 loài thực vật bậc cao', '100 loài', '1000 loài', '10 loài'], 0, 'Đa dạng sinh học cao.'),
    Q('Vườn quốc gia đầu tiên của VN?', ['Cúc Phương', 'Cát Tiên', 'Yok Đôn', 'Tam Đảo'], 0, 'Cúc Phương (thành lập 1962).'),
    Q('Đa dạng sinh học VN đứng?', ['Hàng đầu Đông Nam Á', 'Trung bình thấp', 'Nghèo nhất', 'Không xếp hạng'], 0, 'VN nằm trong nhóm đa dạng sinh học cao của thế giới.'),
  ]),

  M(26, 'ĐL — Tài nguyên và môi trường VN', [
    Q('Tài nguyên khoáng sản VN nổi bật?', ['Than đá, dầu khí, bô-xít, sắt, đá vôi…', 'Chỉ vàng', 'Chỉ kim cương', 'Không có khoáng sản'], 0, 'Đa dạng khoáng sản.'),
    Q('Bô-xít tập trung nhiều ở?', ['Tây Nguyên', 'Tây Bắc', 'ĐBSCL', 'Đông Bắc'], 0, 'Tây Nguyên có trữ lượng lớn.'),
    Q('Than đá lớn nhất ở?', ['Quảng Ninh', 'Quảng Bình', 'Quảng Nam', 'Cà Mau'], 0, 'Quảng Ninh — than antraxit chất lượng cao.'),
    Q('Dầu khí chủ yếu khai thác ở?', ['Thềm lục địa phía Nam (Bà Rịa – Vũng Tàu)', 'ĐB sông Hồng', 'Tây Nguyên', 'Tây Bắc'], 0, 'Bể Cửu Long và Nam Côn Sơn.'),
    Q('Vấn đề môi trường nghiêm trọng nhất hiện nay ở VN?', ['Ô nhiễm không khí đô thị, ô nhiễm nước, suy thoái rừng', 'Tuyết quá nhiều', 'Sa mạc hoá toàn bộ', 'Không có vấn đề'], 0, 'Nhiều thách thức môi trường.'),
    Q('Phát triển bền vững yêu cầu?', ['Kết hợp tăng trưởng kinh tế với bảo vệ môi trường và công bằng xã hội', 'Tăng trưởng bằng mọi giá', 'Bỏ phát triển', 'Khai thác cạn kiệt'], 0, '3 trụ cột: kinh tế – xã hội – môi trường.'),
  ]),

  M(27, 'LS — Chiến tranh thế giới thứ nhất (1914–1918)', [
    Q('WW1 nổ ra năm?', ['1905', '1914', '1917', '1939'], 1, 'Tháng 7 – 1914.'),
    Q('Sự kiện châm ngòi WW1?', ['Hoàng tử Áo – Hung bị ám sát ở Sarajevo', 'Hitler lên cầm quyền', 'CMT10 Nga', 'Pháp xâm lược VN'], 0, 'Vụ ám sát Franz Ferdinand (28-6-1914).'),
    Q('WW1 có hai phe?', ['Phe Hiệp ước (Đồng minh) và Liên minh', 'Phe Đông và Tây', 'Phe Nam và Bắc', 'Phe Mỹ và Anh'], 0, 'Hiệp ước: Anh, Pháp, Nga; Liên minh: Đức, Áo-Hung, Ý (sau đổi phe).'),
    Q('Mỹ tham chiến vào năm?', ['1914', '1915', '1917', '1918'], 2, 'Năm 1917.'),
    Q('WW1 kết thúc năm?', ['1916', '1917', '1918', '1919'], 2, '11-11-1918, Đức đầu hàng.'),
    Q('Hậu quả WW1?', ['Khoảng 10 triệu người chết, các đế quốc lớn suy yếu, CMXHCN Nga thắng lợi', 'Hoà bình lâu dài', 'Không có hậu quả', 'Mỹ thất bại'], 0, 'Thiệt hại nặng nề về người và của.'),
  ]),

  M(28, 'LS — Cách mạng tháng Mười Nga 1917', [
    Q('CMT10 Nga thắng lợi vào?', ['Tháng 10 (theo lịch Nga cũ) năm 1917', '1905', '1914', '1922'], 0, 'Tương đương 7-11-1917 (lịch mới).'),
    Q('Lãnh tụ CMT10 Nga?', ['Lê-nin', 'Stalin', 'Marx', 'Engels'], 0, 'V.I. Lê-nin (1870–1924).'),
    Q('CMT10 Nga là cuộc?', ['Cách mạng vô sản thắng lợi đầu tiên trên thế giới', 'Cách mạng tư sản', 'Cách mạng phong kiến', 'Cách mạng tôn giáo'], 0, 'Cuộc cách mạng XHCN đầu tiên thắng lợi.'),
    Q('Sau CMT10, nước Nga thành?', ['Liên Xô (sau 1922)', 'Anh', 'Pháp', 'Đức'], 0, 'Liên bang CHXHCN Xô viết (1922).'),
    Q('Đảng lãnh đạo CMT10?', ['Đảng Bôn-sê-vích', 'Đảng Dân chủ', 'Đảng Cộng hoà', 'Đảng Tự do'], 0, 'Bolshevik (do Lenin lãnh đạo).'),
    Q('Ảnh hưởng CMT10 đến VN?', ['Cổ vũ phong trào giải phóng dân tộc, ảnh hưởng tư tưởng Nguyễn Ái Quốc', 'Không ảnh hưởng', 'Tiêu cực', 'Pháp hoá VN'], 0, 'Mở ra con đường cứu nước mới cho VN.'),
  ]),

  M(29, 'LS — Giữa hai cuộc chiến tranh thế giới (1918–1939)', [
    Q('Cuộc đại khủng hoảng kinh tế thế giới nổ ra năm?', ['1923', '1929', '1933', '1939'], 1, '1929–1933, bắt đầu từ Mỹ.'),
    Q('Hậu quả của khủng hoảng 1929–1933?', ['Suy thoái kinh tế trầm trọng, chủ nghĩa phát xít trỗi dậy', 'Hoà bình', 'Tăng trưởng mạnh', 'Không hậu quả'], 0, 'Mở đường cho phát xít Đức, Ý, Nhật.'),
    Q('Hitler lên cầm quyền ở Đức năm?', ['1925', '1929', '1933', '1939'], 2, '30-1-1933.'),
    Q('Lực lượng phát xít gồm?', ['Đức, Ý, Nhật', 'Mỹ, Anh, Pháp', 'Nga, Trung Quốc', 'Tây Ban Nha, Bồ Đào Nha'], 0, 'Trục phát xít Berlin – Roma – Tokyo.'),
    Q('Liên Xô trong giai đoạn này?', ['Xây dựng chủ nghĩa xã hội, thực hiện công nghiệp hoá', 'Khủng hoảng', 'Liên minh với phát xít', 'Tan rã'], 0, 'Kế hoạch 5 năm, công nghiệp hoá mạnh.'),
    Q('Mỹ ra khỏi khủng hoảng nhờ?', ['Chính sách Mới (New Deal) của Roosevelt', 'Chiến tranh', 'Phát xít hoá', 'Liên minh với Đức'], 0, 'New Deal (1933).'),
  ]),

  M(30, 'LS — Chiến tranh thế giới thứ hai (1939–1945)', [
    Q('WW2 bắt đầu năm?', ['1929', '1937', '1939', '1941'], 2, '1-9-1939, Đức tấn công Ba Lan.'),
    Q('Hai phe trong WW2?', ['Phe Đồng minh và phe Phát xít', 'Đông và Tây', 'Bắc và Nam', 'Cộng sản và Tư bản'], 0, 'Đồng minh: Anh, Pháp, Liên Xô, Mỹ, Trung Quốc… Phát xít: Đức, Ý, Nhật.'),
    Q('Liên Xô tham gia WW2 sau khi?', ['Đức tấn công Liên Xô (22-6-1941)', 'Tự nguyện trước', 'Mỹ yêu cầu', '1939'], 0, 'Chiến dịch Barbarossa.'),
    Q('Mỹ tham chiến sau sự kiện?', ['Nhật tấn công Trân Châu Cảng 7-12-1941', 'Đức tấn công Pháp', 'Hitler lên cầm quyền', 'Liên Xô bị tấn công'], 0, 'Pearl Harbor.'),
    Q('Mỹ ném bom nguyên tử xuống?', ['Hiroshima và Nagasaki (8-1945)', 'Tokyo', 'Berlin', 'Moskva'], 0, '6 và 9 tháng 8 – 1945.'),
    Q('WW2 kết thúc năm?', ['1944', '1945', '1946', '1949'], 1, '2-9-1945, Nhật đầu hàng.'),
  ]),

  M(31, 'LS — Việt Nam đầu thế kỉ XX đến 1918', [
    Q('Pháp khai thác thuộc địa lần I ở VN nhằm?', ['Bóc lột tài nguyên và nhân công', 'Phát triển VN', 'Trao trả độc lập', 'Giáo dục VN'], 0, 'Vì lợi ích kinh tế Pháp.'),
    Q('Đến năm 1918, kết quả tìm đường cứu nước theo khuynh hướng tư sản (Phan Bội Châu, Phan Châu Trinh)?', ['Đều thất bại', 'Thắng lợi', 'Đang thắng', 'Liên minh với Pháp'], 0, 'Các phong trào trước Đảng Cộng sản đều thất bại.'),
    Q('Người mở ra con đường cứu nước mới?', ['Nguyễn Tất Thành / Nguyễn Ái Quốc', 'Phan Bội Châu', 'Phan Châu Trinh', 'Hoàng Hoa Thám'], 0, 'Nguyễn Tất Thành ra đi 1911.'),
    Q('Tầng lớp mới ra đời trong xã hội VN đầu XX?', ['Công nhân, tư sản, tiểu tư sản', 'Quý tộc', 'Tăng lữ', 'Vua chúa'], 0, 'Khai thác thuộc địa hình thành giai cấp mới.'),
    Q('Giai cấp nào sẽ giữ vai trò lãnh đạo cách mạng VN sau này?', ['Giai cấp công nhân', 'Giai cấp tư sản', 'Giai cấp phong kiến', 'Giai cấp địa chủ'], 0, 'Giai cấp công nhân lớn lên cùng khai thác thuộc địa.'),
    Q('VN đầu XX cần con đường?', ['Cứu nước mới phù hợp thời đại — sau này là CN Mác-Lênin', 'Quay lại phong kiến', 'Đầu hàng Pháp', 'Liên minh đế quốc'], 0, 'Tiền đề cho con đường vô sản.'),
  ]),

  M(32, 'ĐL — Đặc điểm chung tự nhiên VN', [
    Q('Hai đặc điểm nổi bật về tự nhiên VN?', ['Tính chất nhiệt đới ẩm gió mùa và tính chất ven biển', 'Khô hạn và lạnh', 'Sa mạc và tuyết', 'Hàn đới và ôn đới'], 0, 'Nhiệt đới ẩm gió mùa + ven biển.'),
    Q('Tài nguyên tự nhiên VN có?', ['Đa dạng nhưng có giới hạn, cần khai thác hợp lý', 'Vô tận', 'Nghèo nàn', 'Không có'], 0, 'Tài nguyên có hạn.'),
    Q('Thiên tai thường gặp ở VN?', ['Bão, lũ lụt, hạn hán, sạt lở, xâm nhập mặn', 'Tuyết lở', 'Động đất lớn thường xuyên', 'Núi lửa nhiều'], 0, 'Nhiều thiên tai do vị trí và khí hậu.'),
    Q('VN nằm trong khu vực gió mùa?', ['Châu Á — gió mùa đông và gió mùa hạ', 'Châu Âu', 'Châu Phi', 'Châu Mỹ'], 0, 'Khu vực gió mùa châu Á.'),
    Q('Bảo vệ tài nguyên thiên nhiên là?', ['Trách nhiệm của mọi công dân và nhà nước', 'Chỉ của chính phủ', 'Không cần', 'Chỉ của nhà khoa học'], 0, 'Trách nhiệm chung của xã hội.'),
    Q('Phát triển kinh tế biển cần?', ['Khai thác bền vững + bảo vệ chủ quyền + chống ô nhiễm', 'Khai thác cạn kiệt', 'Đầu hàng', 'Không khai thác'], 0, 'Tài nguyên biển có hạn.'),
  ]),

  M(33, 'Ôn tập Lịch sử cận đại', [
    Q('CMTS Anh kết thúc bằng?', ['Cách mạng vinh quang 1688', 'Cộng hoà La Mã', 'Đế chế Napoleon', 'Cộng hoà thứ Nhất'], 0, 'Glorious Revolution.'),
    Q('Tuyên ngôn Độc lập Mỹ?', ['1776', '1789', '1804', '1812'], 0, '4-7-1776.'),
    Q('Vua bị hành quyết trong CMTS Pháp?', ['Lu-i XIV', 'Lu-i XVI', 'Na-pô-lê-ông', 'Sác-lơ I'], 1, 'Louis XVI bị xử tử 1793.'),
    Q('Công xã Pari năm?', ['1789', '1848', '1871', '1917'], 2, '1871.'),
    Q('Cách mạng tháng Mười Nga thắng lợi năm?', ['1905', '1917', '1922', '1945'], 1, '1917.'),
    Q('WW1 và WW2 kết thúc năm?', ['1918 và 1945', '1914 và 1939', '1917 và 1941', '1919 và 1944'], 0, '1918 (WW1) và 1945 (WW2).'),
  ]),

  M(34, 'Ôn tập Địa lý VN', [
    Q('VN nằm trong vùng khí hậu?', ['Nhiệt đới ẩm gió mùa', 'Ôn đới', 'Hàn đới', 'Sa mạc'], 0, 'Nhiệt đới ẩm gió mùa.'),
    Q('Núi cao nhất VN?', ['Phan Xi Păng', 'Bà Đen', 'Yên Tử', 'Tản Viên'], 0, 'Phan Xi Păng 3147 m.'),
    Q('Đồng bằng lớn nhất VN?', ['Sông Hồng', 'Sông Cửu Long', 'Ven biển miền Trung', 'Tây Nguyên'], 1, 'ĐBSCL.'),
    Q('Bờ biển VN dài?', ['1000 km', '2000 km', '3260 km', '5000 km'], 2, '~ 3260 km.'),
    Q('Đảo lớn nhất VN?', ['Cát Bà', 'Phú Quốc', 'Côn Đảo', 'Lý Sơn'], 1, 'Phú Quốc.'),
    Q('Loại đất chiếm nhiều nhất VN?', ['Feralit', 'Phù sa', 'Mặn', 'Cát'], 0, 'Đất feralit ~65%.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Pháp xâm lược VN năm?', ['1858', '1862', '1873', '1884'], 0, '1/9/1858.'),
    Q('Phong trào Cần Vương bắt đầu từ?', ['Chiếu Cần Vương 1885', '1858', '1911', '1917'], 0, 'Năm 1885.'),
    Q('Nguyễn Tất Thành ra đi cứu nước năm?', ['1858', '1905', '1911', '1920'], 2, '5/6/1911.'),
    Q('WW1 diễn ra trong giai đoạn?', ['1914–1918', '1939–1945', '1858–1918', '1917–1922'], 0, '1914–1918.'),
    Q('CMT10 Nga năm?', ['1789', '1871', '1917', '1945'], 2, '1917.'),
    Q('Khí hậu VN có đặc trưng?', ['Nhiệt đới ẩm gió mùa', 'Hàn đới ôn hoà', 'Sa mạc khô cằn', 'Hai mùa lạnh'], 0, 'Nhiệt đới ẩm gió mùa.'),
  ]),
];

export const S8LSDL_SCENARIOS = indexBy(S8LSDL_WEEKS);
