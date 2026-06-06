// ============================================================
// Lớp 11 · LỊCH SỬ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGDPT 2018 — bộ Kết nối tri thức (6 chủ đề: CMTS & CNTB · CNXH ·
//   Đông Nam Á · Chiến tranh bảo vệ Tổ quốc · Cải cách lớn · Biển Đông).
// ID prefix: "H11SU-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11SU', 'lich-su', n, title, qs, opts);

export const H11SU_WEEKS = [
  // ──────────────── HK1 ────────────────
  // Chủ đề 1: Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản
  M(1, 'Bài 1 — Một số vấn đề chung về cách mạng tư sản (tiền đề)', [
    Q('Cách mạng tư sản nhằm lật đổ chế độ nào là chủ yếu?', ['Chế độ cộng sản nguyên thuỷ', 'Chế độ nô lệ cổ đại', 'Chế độ phong kiến/thuộc địa', 'Chế độ XHCN'], 2, 'CMTS lật đổ phong kiến hoặc ách thuộc địa.'),
    Q('Tiền đề kinh tế của các cuộc cách mạng tư sản là?', ['Quan hệ sản xuất TBCN phát triển trong lòng XH phong kiến', 'Công nghiệp nặng đã hoàn thiện', 'Đã có chủ nghĩa đế quốc', 'Kinh tế bao cấp'], 0, 'Sự lớn mạnh của kinh tế TBCN.'),
    Q('Giai cấp lãnh đạo các cuộc CMTS điển hình là?', ['Vô sản', 'Nông dân', 'Quý tộc phong kiến', 'Tư sản (có nơi liên minh quý tộc mới)'], 3, 'Tư sản đứng đầu.'),
    Q('Động lực chủ yếu của các cuộc CMTS gồm?', ['Chỉ nô lệ', 'Tư sản, quý tộc mới, quần chúng nhân dân', 'Chỉ tăng lữ', 'Chỉ vua chúa'], 1, 'Tư sản + nhân dân.'),
    Q('Mục tiêu chung của các cuộc CMTS là?', ['Thiết lập CNXH', 'Khôi phục chế độ nô lệ', 'Bảo vệ chế độ phong kiến', 'Xoá bỏ rào cản phong kiến, mở đường cho CNTB'], 3, 'Mở đường cho CNTB.'),
    Q('Ý nghĩa lớn nhất của các cuộc CMTS là?', ['Thiết lập chế độ cộng sản', 'Không có ý nghĩa', 'Lập tức xoá bỏ áp bức bóc lột', 'Mở ra thời kỳ thắng lợi của CNTB đối với phong kiến'], 3, 'Bước ngoặt lịch sử thế giới.'),
  ]),

  M(2, 'Bài 1 (tt) — Một số cuộc CMTS tiêu biểu: Anh, Bắc Mỹ', [
    Q('Cách mạng tư sản Anh giữa thế kỷ XVII có tính chất?', ['Cuộc CMTS không triệt để, thiết lập quân chủ lập hiến', 'Cuộc CM vô sản', 'Cuộc CM phong kiến', 'Cuộc CM nô lệ'], 0, 'Quân chủ lập hiến sau 1688.'),
    Q('Lãnh đạo CMTS Anh là?', ['Vô sản', 'Tư sản và quý tộc mới', 'Chỉ nông dân', 'Chỉ tăng lữ'], 1, 'Liên minh đặc trưng của Anh.'),
    Q('Chiến tranh giành độc lập 13 thuộc địa Anh ở Bắc Mỹ kết thúc với?', ['Tây Ban Nha thắng', 'Sự ra đời của Hợp chúng quốc Hoa Kỳ', 'Anh tiếp tục cai trị', 'Pháp chiếm Bắc Mỹ'], 1, 'Hoa Kỳ độc lập 1776/1783.'),
    Q('Bản Tuyên ngôn Độc lập 1776 do ai chấp bút chính?', ['G. Washington', 'T. Jefferson', 'A. Lincoln', 'B. Franklin'], 1, 'Jefferson soạn thảo.'),
    Q('Tính chất của chiến tranh giành độc lập ở Bắc Mỹ?', ['Cách mạng tư sản dưới hình thức chiến tranh giải phóng', 'Chiến tranh phong kiến', 'Cách mạng vô sản', 'Nội chiến tôn giáo'], 0, 'Vừa giải phóng vừa CMTS.'),
    Q('Hiến pháp đầu tiên của Hoa Kỳ thông qua năm?', ['1799', '1815', '1776', '1787'], 3, 'Hiến pháp 1787.'),
  ]),

  M(3, 'Bài 1 (tt) — Cách mạng tư sản Pháp', [
    Q('Cách mạng tư sản Pháp bùng nổ năm?', ['1848', '1776', '1789', '1815'], 2, '14/7/1789 phá ngục Bastille.'),
    Q('Tuyên ngôn Nhân quyền và Dân quyền của Pháp thông qua năm?', ['1791', '1793', '1799', '1789'], 3, 'Tháng 8/1789.'),
    Q('Đỉnh cao của CMTS Pháp là thời kỳ?', ['Đế chế Napoléon', 'Phái Lập hiến', 'Phái Giacôbanh (Jacobin)', 'Đốc chính'], 2, 'Chuyên chính Giacôbanh 1793–1794.'),
    Q('Lãnh tụ tiêu biểu của phái Giacôbanh?', ['Rô-be-spie (Robespierre)', 'Napoléon', 'Ri-sơ-li-ơ', 'Lui XVI'], 0, 'Robespierre lãnh đạo.'),
    Q('Tính chất của CMTS Pháp 1789?', ['Đảo chính cung đình', 'Cuộc CMTS triệt để', 'Cuộc CM phong kiến', 'Cách mạng vô sản'], 1, 'Triệt để nhất thời kỳ cận đại.'),
    Q('Ý nghĩa quốc tế của CMTS Pháp?', ['Lập tức xoá bỏ chủ nghĩa thực dân', 'Cổ vũ phong trào cách mạng và dân chủ tư sản trên thế giới', 'Không có ảnh hưởng', 'Chỉ tác động đến Pháp'], 1, 'Tác động sâu rộng.'),
  ]),

  M(4, 'Bài 2 — Sự xác lập và phát triển của chủ nghĩa tư bản', [
    Q('CNTB chuyển sang giai đoạn đế quốc chủ nghĩa vào khoảng?', ['Giữa thế kỷ XX', 'Đầu thế kỷ XXI', 'Cuối thế kỷ XVII', 'Cuối thế kỷ XIX – đầu XX'], 3, 'Cuối XIX đầu XX.'),
    Q('Đặc trưng nổi bật của CNTB giai đoạn đế quốc?', ['Kinh tế nông nghiệp lạc hậu', 'Tự do cạnh tranh thuần tuý', 'Hình thành các tổ chức độc quyền (tơ-rớt, các-ten…)', 'Xoá bỏ tư hữu'], 2, 'Độc quyền tư bản.'),
    Q('Sự kết hợp tư bản công nghiệp và tư bản ngân hàng tạo thành?', ['Tư bản tài chính', 'Tư bản thương nghiệp', 'Tư bản nông nghiệp', 'Tư bản nhà nước thuần tuý'], 0, 'Tư bản tài chính.'),
    Q('CNTB hiện đại có đặc điểm nào sau đây?', ['Không bóc lột giá trị thặng dư', 'Khoa học – công nghệ trở thành lực lượng sản xuất trực tiếp', 'Loại bỏ vai trò nhà nước', 'Không có khủng hoảng'], 1, 'KH-CN là LLSX trực tiếp.'),
    Q('Hạn chế cố hữu của CNTB là?', ['Không có cạnh tranh', 'Không có bóc lột', 'Không có khủng hoảng kinh tế', 'Mâu thuẫn giữa LLSX xã hội hoá cao và chế độ chiếm hữu tư nhân'], 3, 'Mâu thuẫn cơ bản.'),
    Q('Tiềm năng của CNTB hiện đại thể hiện ở?', ['Khả năng tự điều chỉnh và sức mạnh KH-CN', 'Không còn khủng hoảng', 'Xoá bỏ giai cấp', 'Triệt tiêu cạnh tranh'], 0, 'Khả năng tự điều chỉnh.'),
  ]),

  // Chủ đề 2: Chủ nghĩa xã hội từ 1917 đến nay
  M(5, 'Bài 3 — Sự hình thành Liên bang Cộng hoà XHCN Xô viết', [
    Q('Cách mạng tháng Mười Nga thắng lợi năm?', ['1917', '1922', '1945', '1905'], 0, 'Tháng 10/1917 (lịch Nga).'),
    Q('Lãnh tụ Cách mạng tháng Mười Nga?', ['V.I. Lê-nin', 'Goóc-ba-chốp', 'Brê-giơ-nép', 'Xta-lin'], 0, 'Lê-nin lãnh đạo.'),
    Q('Cách mạng tháng Mười Nga thuộc loại hình cách mạng?', ['Cách mạng phong kiến', 'Đảo chính', 'Cách mạng tư sản', 'Cách mạng vô sản (XHCN) đầu tiên thắng lợi'], 3, 'Cách mạng vô sản đầu tiên.'),
    Q('Liên bang Cộng hoà XHCN Xô viết (Liên Xô) thành lập năm?', ['1922', '1945', '1917', '1919'], 0, 'Tháng 12/1922.'),
    Q('Ý nghĩa quốc tế của Cách mạng tháng Mười?', ['Chỉ là sự kiện riêng của Nga', 'Khôi phục chế độ Nga hoàng', 'Mở ra thời đại mới — thời đại quá độ lên CNXH trên phạm vi thế giới', 'Không ảnh hưởng đến phong trào cách mạng'], 2, 'Mở đầu thời đại mới.'),
    Q('Ảnh hưởng của Cách mạng tháng Mười với phong trào giải phóng dân tộc?', ['Khuyến khích thực dân', 'Cổ vũ và chỉ ra con đường cứu nước theo khuynh hướng vô sản', 'Không ảnh hưởng', 'Kìm hãm phong trào'], 1, 'Soi đường cho dân tộc thuộc địa.'),
  ]),

  M(6, 'Bài 3 (tt) — Liên Xô xây dựng CNXH (1922–1991)', [
    Q('Sau Nội chiến, Liên Xô tiến hành?', ['Cộng sản thời chiến vĩnh viễn', 'Bao cấp tuyệt đối', 'Quay lại phong kiến', 'Chính sách kinh tế mới (NEP)'], 3, 'NEP từ 1921.'),
    Q('Công cuộc công nghiệp hoá XHCN ở Liên Xô bắt đầu mạnh từ cuối những năm?', ['1940', '1960', '1910', '1920'], 3, 'Cuối thập niên 1920.'),
    Q('Liên Xô đóng vai trò gì trong Chiến tranh thế giới thứ hai?', ['Đồng minh của phát xít', 'Không tham chiến', 'Trung lập tuyệt đối', 'Lực lượng chủ chốt đánh bại phát xít Đức'], 3, 'Tiêu diệt chủ nghĩa phát xít.'),
    Q('Thành tựu khoa học-kĩ thuật nổi bật của Liên Xô?', ['Phóng vệ tinh nhân tạo đầu tiên (1957) và đưa người vào vũ trụ (1961)', 'Phát minh internet', 'Chế tạo iPhone', 'Phát minh máy hơi nước'], 0, 'Sputnik 1957 và Gagarin 1961.'),
    Q('Hạn chế lớn của mô hình XHCN Xô viết là?', ['Quá đề cao thị trường', 'Phân quyền quá rộng', 'Không có công nghiệp', 'Tập trung quan liêu, bao cấp kéo dài, chậm đổi mới'], 3, 'Mô hình bao cấp.'),
    Q('Liên Xô tan rã vào năm?', ['1989', '1991', '2000', '1985'], 1, 'Cuối 1991.'),
  ]),

  M(7, 'Bài 4 — Sự phát triển của CNXH từ sau 1945', [
    Q('Sau 1945, CNXH trở thành?', ['Hệ thống duy nhất ở châu Á', 'Một hệ thống thế giới', 'Chỉ tồn tại ở Liên Xô', 'Bị xoá bỏ'], 1, 'Hệ thống XHCN.'),
    Q('Các nước Đông Âu đi lên CNXH chủ yếu sau sự kiện?', ['Sau 1991', 'Sau 1789', 'Cách mạng tháng Mười 1917', 'Sau Chiến tranh thế giới thứ hai (1945)'], 3, 'Sau 1945.'),
    Q('Trung Quốc thành lập nước Cộng hoà Nhân dân Trung Hoa năm?', ['1945', '1949', '1954', '1976'], 1, '1/10/1949.'),
    Q('Cách mạng Cuba thắng lợi năm?', ['1949', '1954', '1959', '1975'], 2, '1959, do Phi-đen Ca-xtơ-rô lãnh đạo.'),
    Q('Hội đồng Tương trợ kinh tế (SEV) là tổ chức kinh tế của?', ['Các nước XHCN', 'Các nước trung lập', 'Các nước Mỹ La-tinh', 'Các nước tư bản'], 0, 'Khối SEV 1949.'),
    Q('CNXH trên thế giới rơi vào khủng hoảng và sụp đổ ở Đông Âu, Liên Xô vào?', ['Thập niên 1950', 'Thập niên 1960', 'Cuối thập niên 1980 – đầu 1990', 'Sau 2010'], 2, '1989–1991.'),
  ]),

  M(8, 'Bài 4 (tt) — CNXH từ 1991 đến nay; thành tựu cải cách mở cửa Trung Quốc, đổi mới Việt Nam', [
    Q('Sau 1991, CNXH vẫn được kiên trì xây dựng ở các nước?', ['Hoa Kỳ, Anh, Pháp', 'Trung Quốc, Việt Nam, Lào, Cuba, Triều Tiên', 'Đức, Nhật', 'Brazil, Ấn Độ'], 1, 'Các nước XHCN còn lại.'),
    Q('Trung Quốc bắt đầu cải cách mở cửa từ năm?', ['1949', '1966', '1978', '1992'], 2, '12/1978, Đặng Tiểu Bình khởi xướng.'),
    Q('Việt Nam tiến hành công cuộc Đổi mới từ năm?', ['2001', '1975', '1986', '1995'], 2, 'Đại hội VI (12/1986).'),
    Q('Thành tựu của Trung Quốc sau cải cách?', ['Trở thành nền kinh tế lớn thứ hai thế giới', 'Lạc hậu hơn', 'Tan rã', 'Không phát triển'], 0, 'Cường quốc kinh tế.'),
    Q('Đặc trưng của CNXH ở Trung Quốc, Việt Nam ngày nay?', ['Tư bản chủ nghĩa thuần tuý', 'Phong kiến', 'CNXH mang đặc sắc dân tộc, gắn kinh tế thị trường định hướng XHCN', 'Bao cấp thuần tuý'], 2, 'KTTT định hướng XHCN.'),
    Q('Ý nghĩa thắng lợi của công cuộc đổi mới ở Việt Nam?', ['Khẳng định sức sống và tính ưu việt của CNXH trong điều kiện mới', 'Phủ định CNXH', 'Không có ý nghĩa', 'Quay về thời bao cấp'], 0, 'Khẳng định sức sống CNXH.'),
  ]),

  // Chủ đề 3: Đông Nam Á
  M(9, 'Bài 5 — Quá trình xâm lược của thực dân phương Tây ở Đông Nam Á', [
    Q('Các nước thực dân phương Tây bắt đầu xâm lược Đông Nam Á chủ yếu từ?', ['Thế kỷ XIX', 'Thế kỷ XX', 'Thế kỷ X', 'Thế kỷ XV–XVI'], 3, 'Bồ Đào Nha, Tây Ban Nha tới từ XVI.'),
    Q('Đến cuối thế kỷ XIX – đầu XX, hầu hết các nước ĐNA trở thành?', ['Thuộc địa của các nước phương Tây', 'Cường quốc công nghiệp', 'Liên minh độc lập', 'Đế quốc'], 0, 'Thuộc địa.'),
    Q('Quốc gia ĐNA duy nhất giữ được nền độc lập tương đối?', ['In-đô-nê-xi-a', 'Phi-líp-pin', 'Việt Nam', 'Xiêm (Thái Lan)'], 3, 'Xiêm cải cách, ngoại giao khéo léo.'),
    Q('Anh xâm lược và biến nước nào thành thuộc địa quan trọng ở ĐNA?', ['In-đô-nê-xi-a', 'Miến Điện, Mã Lai, Xin-ga-po', 'Việt Nam', 'Phi-líp-pin'], 1, 'Anh ở Miến Điện, Mã Lai.'),
    Q('Pháp xâm lược các nước nào ở Đông Nam Á?', ['Việt Nam, Lào, Cam-pu-chia', 'In-đô-nê-xi-a', 'Phi-líp-pin', 'Miến Điện'], 0, 'Liên bang Đông Dương thuộc Pháp.'),
    Q('Hà Lan đặt ách thống trị lâu dài ở?', ['Thái Lan', 'Mã Lai', 'In-đô-nê-xi-a', 'Việt Nam'], 2, 'Đông Ấn Hà Lan.'),
  ]),

  M(10, 'Bài 5 (tt) — Chính sách cai trị của thực dân và hệ quả', [
    Q('Mục tiêu cai trị của thực dân ở ĐNA là?', ['Khai thác tài nguyên, bóc lột nhân công, biến ĐNA thành thị trường', 'Phát triển công nghiệp bản địa', 'Trao trả độc lập', 'Khai sáng văn hoá'], 0, 'Mục đích kinh tế là chính.'),
    Q('Hệ quả tiêu cực lớn nhất của chính sách thuộc địa?', ['Văn hoá bản địa được bảo tồn nguyên vẹn', 'Không có hệ quả', 'Kinh tế ĐNA bị lệ thuộc, phát triển méo mó, mất chủ quyền', 'Nền kinh tế phát triển toàn diện'], 2, 'Kinh tế phụ thuộc.'),
    Q('Hệ quả tích cực (ngoài ý muốn) của ách cai trị thực dân?', ['Du nhập một số yếu tố KT-XH cận đại, hình thành giai cấp mới', 'Phong kiến phục hồi', 'Không có gì', 'Xoá bỏ quan hệ tư bản'], 0, 'Du nhập tư bản phương Tây.'),
    Q('Giai cấp mới xuất hiện ở ĐNA dưới ách thực dân?', ['Tăng lữ', 'Nô lệ cổ đại', 'Tư sản dân tộc và vô sản', 'Quý tộc phong kiến'], 2, 'Giai cấp xã hội mới.'),
    Q('Phong trào đấu tranh chống thực dân ở ĐNA cuối XIX – đầu XX chủ yếu theo khuynh hướng?', ['Phong kiến và sau đó dân chủ tư sản', 'Vô sản ngay từ đầu', 'Bảo hoàng tuyệt đối', 'Không có phong trào'], 0, 'Phong kiến → dân chủ tư sản.'),
    Q('Đặc điểm chung của các phong trào yêu nước ĐNA trước 1918?', ['Đều do vô sản lãnh đạo', 'Đều thất bại do thiếu đường lối đúng đắn và lực lượng lãnh đạo phù hợp', 'Đều thắng lợi', 'Không có phong trào'], 1, 'Khủng hoảng đường lối.'),
  ]),

  M(11, 'Bài 6 — Hành trình đi đến độc lập của các dân tộc Đông Nam Á', [
    Q('Sau Chiến tranh thế giới thứ nhất, phong trào đấu tranh ở ĐNA xuất hiện thêm khuynh hướng?', ['Phong kiến', 'Quân chủ', 'Nô lệ', 'Vô sản (chịu ảnh hưởng Cách mạng tháng Mười)'], 3, 'Khuynh hướng vô sản.'),
    Q('Đảng Cộng sản nào ra đời sớm ở ĐNA?', ['Đảng Lao động Anh', 'Đảng Tự do Pháp', 'Đảng Cộng sản Đông Dương, Đảng Cộng sản In-đô-nê-xi-a', 'Đảng Cộng sản Mỹ'], 2, 'PKI 1920, ĐCSĐD 1930.'),
    Q('Cách mạng tháng Tám 1945 ở Việt Nam có ý nghĩa với ĐNA là?', ['Lập chế độ phong kiến', 'Mở đầu thắng lợi của phong trào giải phóng dân tộc sau CTTG II', 'Không có ý nghĩa', 'Khôi phục ách thực dân'], 1, 'Mở đầu thắng lợi GPDT.'),
    Q('In-đô-nê-xi-a tuyên bố độc lập năm?', ['1945', '1954', '1965', '1942'], 0, '17/8/1945.'),
    Q('Lào tuyên bố độc lập lần đầu năm?', ['1945', '1954', '1975', '1986'], 0, '12/10/1945.'),
    Q('Thắng lợi của nhân dân ba nước Đông Dương trước đế quốc Mỹ kết thúc vào năm?', ['1954', '1968', '1975', '1989'], 2, '1975.'),
  ]),

  M(12, 'Bài 6 (tt) — Công cuộc xây dựng và phát triển ở Đông Nam Á sau độc lập', [
    Q('Sau khi giành độc lập, các nước ĐNA tập trung?', ['Chiến tranh liên miên', 'Không phát triển', 'Xây dựng và phát triển đất nước, lựa chọn con đường riêng', 'Phụ thuộc lâu dài vào thực dân cũ'], 2, 'Xây dựng đất nước.'),
    Q('Một số nước ĐNA đạt thành tựu vượt bậc, được gọi là "con rồng/con hổ" châu Á?', ['Phi-líp-pin', 'Mi-an-ma', 'Cam-pu-chia', 'Xin-ga-po'], 3, 'Singapore là "con rồng".'),
    Q('Việt Nam, Lào tiến hành công cuộc đổi mới/cải cách từ?', ['Sau 2010', 'Giữa thập niên 1980', 'Thập niên 1950', 'Thập niên 1990'], 1, 'VN 1986, Lào 1986.'),
    Q('Hiệp hội các quốc gia ĐNA (ASEAN) thành lập năm?', ['1967', '1995', '1945', '1955'], 0, '8/8/1967.'),
    Q('Việt Nam gia nhập ASEAN năm?', ['1986', '1991', '1995', '2007'], 2, '28/7/1995.'),
    Q('Mục tiêu của ASEAN ngày nay?', ['Liên minh quân sự', 'Tổ chức tôn giáo', 'Liên minh thuộc địa', 'Cộng đồng ASEAN hoà bình, ổn định, hợp tác và phát triển'], 3, 'Cộng đồng ASEAN.'),
  ]),

  M(13, 'Ôn tập chủ đề 3 — Đông Nam Á cận - hiện đại', [
    Q('Đặc điểm chung của các nước ĐNA cuối XIX – đầu XX?', ['Trở thành thuộc địa hoặc lệ thuộc các nước phương Tây', 'Đều giữ độc lập', 'Đều trở thành cường quốc', 'Đều thuộc Mỹ'], 0, 'Phần lớn là thuộc địa.'),
    Q('Vì sao Xiêm giữ được độc lập tương đối?', ['Là đồng minh Hoa Kỳ', 'Cải cách của Ra-ma V và chính sách ngoại giao khéo léo giữa Anh – Pháp', 'Không bị xâm lược', 'Có quân đội mạnh nhất thế giới'], 1, 'Cải cách + ngoại giao.'),
    Q('Khuynh hướng vô sản trở thành xu thế chủ đạo trong PT GPDT ở Việt Nam từ?', ['Sau 1930', 'Trước 1900', 'Sau 1975', 'Sau 1995'], 0, 'ĐCSVN ra đời 1930.'),
    Q('Tổ chức ASEAN ngày nay có bao nhiêu thành viên?', ['7', '10', '15', '5'], 1, '10 thành viên.'),
    Q('Bài học từ con đường giành độc lập của các nước ĐNA?', ['Tránh đấu tranh', 'Đoàn kết, lựa chọn con đường phù hợp, tận dụng thời cơ', 'Phụ thuộc nước ngoài', 'Chia rẽ'], 1, 'Đoàn kết + đường lối đúng.'),
    Q('Sau khi giành độc lập, các nước ĐNA đối mặt thách thức chung?', ['Chỉ thừa hưởng nền công nghiệp tiên tiến', 'Không có thách thức', 'Khôi phục kinh tế, ổn định chính trị, đói nghèo, lạc hậu', 'Đã hoàn hảo'], 2, 'Khôi phục và phát triển.'),
  ]),

  // Chủ đề 4: Chiến tranh bảo vệ Tổ quốc và chiến tranh giải phóng dân tộc trong lịch sử Việt Nam
  M(14, 'Bài 7 — Khái quát chiến tranh bảo vệ Tổ quốc trong LSVN', [
    Q('Trong lịch sử, dân tộc Việt Nam phải đối phó chủ yếu với?', ['Chỉ thiên tai', 'Chỉ nội chiến', 'Không có ngoại xâm', 'Các thế lực ngoại xâm phương Bắc và sau này phương Tây'], 3, 'Nhiều lần chống ngoại xâm.'),
    Q('Cuộc kháng chiến chống quân Tống năm 981 do ai lãnh đạo?', ['Lê Hoàn', 'Trần Hưng Đạo', 'Quang Trung', 'Lý Thường Kiệt'], 0, 'Lê Đại Hành (Lê Hoàn).'),
    Q('Kháng chiến chống Tống lần thứ hai (1075–1077) gắn với?', ['Trần Hưng Đạo', 'Nguyễn Huệ', 'Lê Lợi', 'Lý Thường Kiệt'], 3, '"Nam quốc sơn hà…".'),
    Q('Ba lần kháng chiến chống quân Mông – Nguyên (XIII) gắn với triều?', ['Lê sơ', 'Nguyễn', 'Lý', 'Trần'], 3, 'Nhà Trần.'),
    Q('Người chỉ huy ba lần kháng chiến chống Mông – Nguyên?', ['Trần Hưng Đạo (Trần Quốc Tuấn)', 'Trần Thủ Độ', 'Lê Lợi', 'Lý Thường Kiệt'], 0, 'Hưng Đạo Đại Vương.'),
    Q('Kháng chiến chống Thanh năm 1789 do ai lãnh đạo?', ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Nguyễn Huệ (Quang Trung)', 'Lê Lợi'], 2, 'Trận Ngọc Hồi – Đống Đa.'),
  ]),

  M(15, 'Bài 7 (tt) — Nguyên nhân thắng lợi và bài học', [
    Q('Nguyên nhân thắng lợi quan trọng nhất trong các cuộc kháng chiến chống ngoại xâm?', ['Thời tiết', 'Truyền thống yêu nước, tinh thần đoàn kết toàn dân', 'May mắn', 'Quân địch yếu hơn về quân số'], 1, 'Yếu tố con người.'),
    Q('Vai trò của các lãnh tụ kiệt xuất trong kháng chiến?', ['Tăng chi phí', 'Đề ra đường lối, chiến lược, chiến thuật đúng đắn', 'Không quan trọng', 'Chỉ làm hình thức'], 1, 'Lãnh đạo tài tình.'),
    Q('Nghệ thuật quân sự nổi bật của ông cha?', ['"Lấy ít địch nhiều, lấy yếu chống mạnh", chiến tranh nhân dân', 'Chiến tranh chính quy thuần tuý', 'Phòng thủ thụ động', 'Chỉ dựa vào pháo'], 0, 'Chiến tranh nhân dân.'),
    Q('Một số kế sách quân sự tiêu biểu?', ['Đầu hàng', 'Đi đêm tránh giặc', 'Bỏ chạy', '"Vườn không nhà trống", đánh nhanh thắng nhanh, mai phục'], 3, 'Vườn không nhà trống.'),
    Q('Bài học lớn cho công cuộc xây dựng và bảo vệ Tổ quốc hiện nay?', ['Phát huy sức mạnh đại đoàn kết toàn dân tộc', 'Phân biệt vùng miền', 'Dựa hoàn toàn vào nước ngoài', 'Bỏ qua quốc phòng'], 0, 'Đại đoàn kết.'),
    Q('Ý nghĩa các cuộc kháng chiến thắng lợi với dân tộc?', ['Mất đất', 'Lệ thuộc nước ngoài', 'Phá hoại đất nước', 'Bảo vệ độc lập, chủ quyền, giữ gìn bản sắc văn hoá'], 3, 'Giữ vững độc lập, bản sắc.'),
  ]),

  M(16, 'Bài 8 — Một số cuộc khởi nghĩa và chiến tranh giải phóng trong LSVN', [
    Q('Khởi nghĩa Hai Bà Trưng nổ ra năm?', ['Năm 248', 'Năm 542', 'Năm 938', 'Năm 40'], 3, 'Năm 40, chống Đông Hán.'),
    Q('Khởi nghĩa Bà Triệu (Triệu Thị Trinh) chống quân?', ['Lương', 'Đường', 'Hán', 'Ngô'], 3, 'Năm 248, chống Đông Ngô.'),
    Q('Khởi nghĩa Lý Bí (542) lập ra?', ['Nước Vạn Xuân', 'Nhà Lý', 'Nhà Trần', 'Nhà Hậu Lê'], 0, 'Nước Vạn Xuân.'),
    Q('Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?', ['Trần Hưng Đạo', 'Lê Lợi', 'Ngô Quyền', 'Lý Thường Kiệt'], 2, 'Ngô Quyền, chấm dứt Bắc thuộc.'),
    Q('Khởi nghĩa Lam Sơn (1418–1427) do ai lãnh đạo?', ['Lê Lợi', 'Trần Hưng Đạo', 'Ngô Quyền', 'Nguyễn Huệ'], 0, 'Lê Lợi, Nguyễn Trãi.'),
    Q('Phong trào Tây Sơn (cuối XVIII) có ý nghĩa lớn nào?', ['Thiết lập chế độ thực dân', 'Khôi phục Bắc thuộc', 'Không có ý nghĩa', 'Đánh đổ các tập đoàn phong kiến Trịnh – Nguyễn và đánh tan quân Thanh'], 3, 'Thống nhất + chống ngoại xâm.'),
  ]),

  M(17, 'Bài 8 (tt) — Hai cuộc kháng chiến chống Pháp và chống Mỹ (TK XX)', [
    Q('Cách mạng tháng Tám 1945 thắng lợi mở ra?', ['Khôi phục chế độ phong kiến', 'Quay lại Pháp thuộc', 'Không có ý nghĩa', 'Kỉ nguyên độc lập, tự do, đi lên CNXH'], 3, 'Kỉ nguyên mới.'),
    Q('Chiến thắng Điện Biên Phủ (1954) có ý nghĩa?', ['Không có tác động', 'Buộc Pháp ký Hiệp định Giơ-ne-vơ, kết thúc chiến tranh Đông Dương', 'Mở đầu chiến tranh', 'Pháp thắng'], 1, 'Kết thúc kháng chiến chống Pháp.'),
    Q('Hiệp định Pa-ri về Việt Nam ký năm?', ['1954', '1968', '1973', '1975'], 2, '27/1/1973.'),
    Q('Đại thắng mùa Xuân 1975 kết thúc bằng chiến dịch?', ['Chiến dịch Biên giới', 'Chiến dịch Điện Biên Phủ', 'Chiến dịch Hồ Chí Minh', 'Chiến dịch Việt Bắc'], 2, 'Chiến dịch HCM 30/4/1975.'),
    Q('Ý nghĩa của Đại thắng mùa Xuân 1975?', ['Khởi đầu kháng chiến chống Pháp', 'Không có ý nghĩa', 'Hoàn thành cách mạng dân tộc dân chủ nhân dân, thống nhất đất nước', 'Chia cắt đất nước'], 2, 'Thống nhất đất nước.'),
    Q('Vai trò của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh?', ['Không quan trọng', 'Chỉ mang tính tinh thần', 'Cản trở phong trào', 'Nhân tố quyết định mọi thắng lợi'], 3, 'Nhân tố quyết định.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('CMTS Pháp 1789 có ý nghĩa quốc tế lớn vì?', ['Không ảnh hưởng quốc tế', 'Khởi đầu chiến tranh thế giới', 'Cổ vũ phong trào dân chủ tư sản và giải phóng dân tộc trên thế giới', 'Khôi phục phong kiến châu Âu'], 2, 'Cổ vũ phong trào.'),
    Q('CNTB chuyển sang giai đoạn đế quốc chủ nghĩa đặc trưng bởi?', ['Tự do cạnh tranh hoàn toàn', 'Phong kiến phục hồi', 'CNXH thắng lợi', 'Hình thành tổ chức độc quyền và tư bản tài chính'], 3, 'Độc quyền + tư bản tài chính.'),
    Q('Cách mạng tháng Mười Nga có ý nghĩa lớn nhất?', ['Không ý nghĩa', 'Mở ra thời đại quá độ lên CNXH trên phạm vi thế giới', 'Khôi phục chế độ Nga hoàng', 'Khởi đầu CMTS'], 1, 'Mở ra thời đại mới.'),
    Q('Đến cuối XIX – đầu XX, các nước ĐNA chủ yếu trở thành?', ['Cường quốc', 'Liên minh độc lập', 'Đế quốc', 'Thuộc địa của các nước phương Tây'], 3, 'Hệ thống thuộc địa.'),
    Q('Chiến thắng Bạch Đằng 938 do Ngô Quyền lãnh đạo có ý nghĩa?', ['Khởi đầu Bắc thuộc', 'Thiết lập chế độ thuộc địa Pháp', 'Không có ý nghĩa', 'Chấm dứt hơn 1.000 năm Bắc thuộc, mở ra nền độc lập lâu dài'], 3, 'Mở ra độc lập lâu dài.'),
    Q('Bài học chung từ các cuộc kháng chiến chống ngoại xâm?', ['Không cần quân đội', 'Phát huy sức mạnh đoàn kết toàn dân + đường lối lãnh đạo đúng đắn', 'Lệ thuộc nước ngoài', 'Bỏ chạy khi giặc tới'], 1, 'Đoàn kết + đường lối.'),
  ]),

  // ──────────────── HK2 ────────────────
  // Chủ đề 5: Một số cuộc cải cách lớn trong lịch sử Việt Nam
  M(19, 'Bài 9 — Cuộc cải cách của Hồ Quý Ly và triều Hồ (đầu XV) — bối cảnh', [
    Q('Cuối thế kỷ XIV, nhà Trần lâm vào tình trạng?', ['Mới thành lập', 'Không có vấn đề', 'Khủng hoảng, suy yếu trầm trọng', 'Cực thịnh'], 2, 'Khủng hoảng cuối Trần.'),
    Q('Hồ Quý Ly tiến hành cải cách trong bối cảnh?', ['Không có nguy cơ', 'Đang cực thịnh', 'Đất nước khủng hoảng, đe doạ ngoại xâm phương Bắc', 'Đất nước thái bình'], 2, 'Khủng hoảng + nguy cơ Minh.'),
    Q('Hồ Quý Ly lập ra triều Hồ năm?', ['1400', '1428', '1527', '1226'], 0, 'Năm 1400.'),
    Q('Mục đích cải cách của Hồ Quý Ly?', ['Mở rộng ách phong kiến', 'Không có mục đích rõ', 'Khắc phục khủng hoảng, củng cố quốc gia và tăng cường khả năng phòng thủ', 'Quay về phong kiến cổ'], 2, 'Củng cố nhà nước.'),
    Q('Một biện pháp cải cách kinh tế nổi bật của Hồ Quý Ly?', ['Trở lại trao đổi hàng đổi hàng tuyệt đối', 'Đúc tiền bằng vàng nguyên chất', 'Phát hành tiền giấy "Thông bảo hội sao"', 'Cấm sử dụng tiền'], 2, 'Tiền giấy đầu tiên ở VN.'),
    Q('Chính sách "hạn điền" của Hồ Quý Ly nhằm?', ['Khuyến khích buôn bán nước ngoài', 'Giới hạn ruộng đất tư hữu để hạn chế quyền lực địa chủ', 'Phát triển công nghiệp', 'Tăng quyền chiếm hữu ruộng đất tư'], 1, 'Hạn chế ruộng tư.'),
  ]),

  M(20, 'Bài 9 (tt) — Nội dung và ý nghĩa cải cách Hồ Quý Ly', [
    Q('Chính sách "hạn nô" của Hồ Quý Ly nhằm?', ['Không liên quan', 'Hạn chế số lượng nô tì trong nhà quý tộc', 'Khuyến khích mua nô', 'Bỏ chế độ nô tì hoàn toàn ngay lập tức'], 1, 'Hạn chế nô tì.'),
    Q('Trong giáo dục, Hồ Quý Ly đề cao?', ['Chữ Nôm và tinh thần tự cường', 'Hán hoá tuyệt đối', 'Bỏ giáo dục', 'Chỉ dạy võ thuật'], 0, 'Đề cao chữ Nôm.'),
    Q('Về quân sự, Hồ Quý Ly chú trọng?', ['Cắt giảm quân đội', 'Bỏ quốc phòng', 'Không xây thành', 'Tăng cường quân đội, xây thành Tây Đô (thành nhà Hồ)'], 3, 'Thành nhà Hồ – di sản UNESCO.'),
    Q('Hạn chế của cải cách Hồ Quý Ly?', ['Quá lâu, quá thận trọng', 'Không có nội dung mới', 'Không có hạn chế', 'Không lôi cuốn được sự ủng hộ rộng rãi, làm vội, gặp ngoại xâm'], 3, 'Mất lòng dân, ngoại xâm Minh.'),
    Q('Kết cục triều Hồ?', ['Bị quân Minh xâm lược và đánh bại (1407)', 'Tồn tại lâu dài', 'Tự nguyện thoái vị', 'Lập ra nhà Lê'], 0, 'Bị Minh chiếm 1407.'),
    Q('Ý nghĩa của cải cách Hồ Quý Ly?', ['Không có ý nghĩa', 'Khôi phục Bắc thuộc', 'Phục hồi chế độ nô lệ', 'Là cuộc cải cách táo bạo, để lại nhiều bài học về đổi mới và lòng dân'], 3, 'Bài học cải cách + lòng dân.'),
  ]),

  M(21, 'Bài 10 — Cải cách của Lê Thánh Tông (XV) — bối cảnh và mục tiêu', [
    Q('Lê Thánh Tông lên ngôi năm?', ['1428', '1460', '1497', '1527'], 1, '1460.'),
    Q('Bối cảnh khi Lê Thánh Tông cải cách?', ['Triều Lê sơ vừa được củng cố nhưng bộ máy còn nhiều bất cập', 'Đất nước đang bị Pháp xâm lược', 'Bắc thuộc lần ba', 'Phong kiến đã sụp đổ'], 0, 'Lê sơ củng cố.'),
    Q('Mục tiêu cải cách của Lê Thánh Tông?', ['Xoá bỏ chế độ phong kiến', 'Xây dựng nhà nước quân chủ trung ương tập quyền vững mạnh', 'Phân quyền tối đa', 'Lệ thuộc nước ngoài'], 1, 'Trung ương tập quyền.'),
    Q('Cải cách hành chính của Lê Thánh Tông chia cả nước thành?', ['30 trấn', '63 tỉnh', '12 đạo thừa tuyên + Phủ Trung Đô', '24 lộ'], 2, '13 đơn vị hành chính cấp đạo.'),
    Q('Bộ máy trung ương dưới Lê Thánh Tông gồm các cơ quan tiêu biểu?', ['Chỉ có Tam khôi', 'Chỉ có Lục bộ', 'Lục bộ và các cơ quan giám sát (Ngự sử đài, Hàn lâm viện…)', 'Chỉ có vua'], 2, 'Cơ cấu hoàn chỉnh.'),
    Q('Hệ thống tổ chức nhà nước Lê Thánh Tông được đánh giá là?', ['Lệ thuộc phương Bắc', 'Hoàn chỉnh và quy củ nhất trong lịch sử PK Việt Nam', 'Sơ khai nhất', 'Lỏng lẻo'], 1, 'Đỉnh cao mô hình PK VN.'),
  ]),

  M(22, 'Bài 10 (tt) — Nội dung và ý nghĩa cải cách Lê Thánh Tông', [
    Q('Bộ luật ban hành dưới thời Lê Thánh Tông là?', ['Luật Hồng Đức (Quốc triều hình luật)', 'Hoàng Việt luật lệ', 'Hình thư', 'Bộ luật Gia Long'], 0, 'Luật Hồng Đức.'),
    Q('Điểm tiến bộ của Luật Hồng Đức?', ['Hoàn toàn không tiến bộ', 'Bảo vệ một phần quyền lợi phụ nữ, lao động, nhân dân', 'Không bảo vệ ai', 'Chỉ bảo vệ vua'], 1, 'Tiến bộ về quyền phụ nữ.'),
    Q('Về giáo dục – thi cử, Lê Thánh Tông?', ['Mở rộng khoa cử Nho học, lập bia tiến sĩ ở Văn Miếu', 'Bỏ thi cử', 'Chỉ thi võ', 'Học theo phương Tây'], 0, 'Đỉnh cao khoa cử Nho học.'),
    Q('Về quân sự, Lê Thánh Tông?', ['Bỏ quân đội', 'Phân quyền quân sự', 'Lệ thuộc nước ngoài', 'Tổ chức quân đội chính quy, ban hành phép quân điền cho binh sĩ'], 3, 'Củng cố quân đội.'),
    Q('Ý nghĩa cải cách Lê Thánh Tông?', ['Không ý nghĩa', 'Đưa Đại Việt phát triển cường thịnh ở thế kỷ XV', 'Khủng hoảng', 'Mất nước'], 1, 'Cường thịnh thế kỷ XV.'),
    Q('Bài học từ cải cách Lê Thánh Tông?', ['Bỏ luật pháp', 'Hoàn thiện bộ máy nhà nước và đề cao pháp luật', 'Chia rẽ', 'Tản quyền vô tổ chức'], 1, 'Pháp luật + tổ chức.'),
  ]),

  M(23, 'Bài 11 — Cải cách của Minh Mạng (đầu XIX) — bối cảnh và nội dung hành chính', [
    Q('Minh Mạng là vua thứ mấy triều Nguyễn?', ['Vua đầu tiên', 'Vua thứ hai', 'Vua thứ ba', 'Vua cuối cùng'], 1, 'Vua thứ hai (1820–1841).'),
    Q('Bối cảnh khi Minh Mạng cải cách?', ['Đất nước đã hoàn thiện', 'Bị Pháp đô hộ', 'Đang Bắc thuộc', 'Nhà Nguyễn cần củng cố thống nhất đất nước, bộ máy địa phương cồng kềnh'], 3, 'Cần củng cố sau thống nhất.'),
    Q('Trước cải cách Minh Mạng, cả nước chia thành?', ['Đã chia thành đạo', 'Một đơn vị duy nhất', 'Bắc Thành và Gia Định Thành cùng các trấn', 'Đã chia tỉnh'], 2, 'Cồng kềnh, quyền lực địa phương lớn.'),
    Q('Cải cách hành chính nổi bật của Minh Mạng?', ['Trở lại đạo thừa tuyên', 'Bãi bỏ Bắc Thành, Gia Định Thành, chia cả nước thành các tỉnh', 'Lập thêm trấn', 'Bỏ tỉnh'], 1, 'Chia tỉnh năm 1831–1832.'),
    Q('Số đơn vị hành chính tỉnh dưới Minh Mạng?', ['30 tỉnh + phủ Thừa Thiên', '12 đạo', '63 tỉnh', '24 lộ'], 0, '30 tỉnh + Thừa Thiên.'),
    Q('Mục đích chia tỉnh của Minh Mạng?', ['Tăng quyền địa phương', 'Trao quyền cho ngoại bang', 'Bỏ chế độ quan liêu', 'Tăng cường quyền lực trung ương, kiểm soát địa phương chặt chẽ'], 3, 'Tập quyền trung ương.'),
  ]),

  M(24, 'Bài 11 (tt) — Cải cách Minh Mạng: hành chính trung ương, kết quả', [
    Q('Ở trung ương, Minh Mạng lập thêm cơ quan?', ['Nội các và Cơ mật viện', 'Quốc hội', 'Toà án nhân dân', 'Bộ Ngoại giao hiện đại'], 0, 'Nội các + Cơ mật viện.'),
    Q('Bộ luật chính dưới triều Nguyễn được biên soạn từ thời?', ['Thiệu Trị', 'Tự Đức', 'Gia Long (Hoàng Việt luật lệ — luật Gia Long)', 'Minh Mạng mới ban đầu'], 2, 'Luật Gia Long.'),
    Q('Chính sách dân tộc miền núi của Minh Mạng?', ['Tăng quyền thổ ty', 'Trao quyền cho ngoại bang', 'Bỏ chế độ trung ương', 'Bãi bỏ chế độ thổ ty, đặt quan trị nhậm như miền xuôi (cải thổ quy lưu)'], 3, 'Cải thổ quy lưu.'),
    Q('Đối với nông nghiệp, Minh Mạng?', ['Quan tâm khai hoang, lập đồn điền, đê điều', 'Bỏ nông nghiệp', 'Phát triển công nghiệp nặng', 'Chỉ phát triển ngoại thương'], 0, 'Khai hoang, đê điều.'),
    Q('Hạn chế của cải cách Minh Mạng?', ['Không có hạn chế', 'Phá vỡ chủ quyền', 'Vẫn nặng tư tưởng bảo thủ Nho giáo, chậm tiếp cận khoa học phương Tây', 'Quá mở cửa với phương Tây'], 2, 'Bảo thủ, đóng cửa.'),
    Q('Ý nghĩa lớn nhất của cải cách Minh Mạng?', ['Phá hủy bộ máy nhà nước', 'Hoàn thiện mô hình nhà nước quân chủ tập quyền, tạo nền tảng quản lí đến nay (chia tỉnh)', 'Không có ý nghĩa', 'Khôi phục Bắc thuộc'], 1, 'Mô hình chia tỉnh tồn tại lâu dài.'),
  ]),

  M(25, 'Ôn tập chủ đề 5 — Cải cách trong LSVN', [
    Q('Điểm chung của ba cuộc cải cách Hồ Quý Ly, Lê Thánh Tông, Minh Mạng?', ['Đều thất bại hoàn toàn', 'Đều bỏ quân đội', 'Đều nhằm củng cố và phát triển nhà nước', 'Đều lệ thuộc nước ngoài'], 2, 'Củng cố nhà nước.'),
    Q('Cải cách nào được đánh giá hoàn thiện nhất về mặt nhà nước trong PK VN?', ['Cả ba ngang nhau', 'Hồ Quý Ly', 'Lê Thánh Tông', 'Minh Mạng'], 2, 'Lê Thánh Tông – đỉnh cao mô hình.'),
    Q('Cải cách Minh Mạng để lại di sản nào còn ảnh hưởng đến ngày nay?', ['Chế độ thổ ty', 'Cấm thi cử', 'Mô hình tỉnh – cơ sở cho hệ thống hành chính hiện đại', 'Tiền giấy'], 2, 'Mô hình tỉnh.'),
    Q('Hạn chế chung của các cuộc cải cách phong kiến?', ['Không có hạn chế', 'Vẫn trong khuôn khổ phong kiến, chưa giải quyết tận gốc mâu thuẫn xã hội', 'Mở cửa quá mức', 'Quá nhiều dân chủ'], 1, 'Khuôn khổ phong kiến.'),
    Q('Bài học chung từ ba cuộc cải cách?', ['Không cần lòng dân', 'Sao chép nước ngoài máy móc', 'Phải dựa vào dân, làm có hệ thống và phù hợp thực tiễn', 'Tuỳ tiện'], 2, 'Hệ thống + lòng dân.'),
    Q('Tại sao cải cách Hồ Quý Ly thất bại nhanh?', ['Thiếu sự ủng hộ rộng rãi và bị ngoại xâm Minh', 'Không có nội dung', 'Quá nhanh thành công', 'Vua thoái vị tự nguyện'], 0, 'Lòng dân + ngoại xâm.'),
  ]),

  M(26, 'Sơ kết chủ đề 5 — Bài học cho công cuộc đổi mới', [
    Q('Đảng và Nhà nước Việt Nam hiện nay rút ra bài học gì từ lịch sử cải cách?', ['Cải cách phải hợp lòng dân, hợp xu thế thời đại, có tổ chức', 'Tuỳ tiện không cần dân', 'Sao chép nước ngoài', 'Không cần cải cách'], 0, 'Lòng dân + xu thế.'),
    Q('Công cuộc Đổi mới ở Việt Nam được coi là?', ['Một cuộc cải cách toàn diện, sâu sắc trong thời kỳ mới', 'Cuộc cách mạng tư sản', 'Cuộc đảo chính', 'Phong trào tự phát'], 0, 'Cải cách toàn diện 1986.'),
    Q('Yếu tố quan trọng để đổi mới thành công?', ['Tự phát', 'Sự lãnh đạo đúng đắn của Đảng + đoàn kết toàn dân', 'Không cần lãnh đạo', 'Lệ thuộc nước ngoài'], 1, 'Đảng + nhân dân.'),
    Q('Cải cách hành chính ở Việt Nam hiện nay tiếp nối truyền thống nào?', ['Không tiếp nối gì', 'Hoàn thiện bộ máy, đề cao pháp luật, cải cách hành chính tinh gọn', 'Quay về thổ ty', 'Quay về Bắc thuộc'], 1, 'Tinh gọn, pháp quyền.'),
    Q('Vai trò của KHCN trong cải cách hiện nay?', ['Không liên quan', 'Là động lực phát triển và đổi mới sáng tạo', 'Không cần thiết', 'Cản trở'], 1, 'KHCN là động lực.'),
    Q('Ý nghĩa của việc học bài học từ cải cách trong lịch sử?', ['Vận dụng vào quản lí và phát triển đất nước hôm nay', 'Chỉ để biết', 'Không có ý nghĩa', 'Chỉ phục vụ thi cử'], 0, 'Vận dụng thực tiễn.'),
  ]),

  // Chủ đề 6: Biển Đông
  M(27, 'Bài 12 — Vị trí và tầm quan trọng của Biển Đông', [
    Q('Biển Đông là biển?', ['Rìa Tây Thái Bình Dương, bán kín', 'Đại dương lớn', 'Hồ nước ngọt', 'Kín nằm sâu trong nội địa'], 0, 'Biển bán kín, rìa Tây TBD.'),
    Q('Biển Đông tiếp giáp với?', ['9 quốc gia/vùng lãnh thổ ven biển', 'Toàn bộ châu Phi', 'Chỉ Trung Quốc', 'Chỉ Việt Nam'], 0, 'Nhiều nước ven biển.'),
    Q('Biển Đông có vị trí?', ['Trên tuyến hàng hải quốc tế quan trọng nối Thái Bình Dương – Ấn Độ Dương', 'Ngoài tuyến hàng hải quốc tế', 'Chỉ phục vụ giao thông nội địa', 'Không có giá trị hàng hải'], 0, 'Tuyến hàng hải huyết mạch.'),
    Q('Biển Đông có hai quần đảo lớn?', ['Hoàng Sa và Trường Sa', 'Cát Bà và Phú Quốc', 'Lý Sơn và Côn Đảo', 'Bạch Long Vĩ và Côn Đảo'], 0, 'Hoàng Sa, Trường Sa.'),
    Q('Tài nguyên nổi bật của Biển Đông?', ['Vàng nguyên chất', 'Uranium tự nhiên dồi dào', 'Kim cương lộ thiên', 'Dầu khí, hải sản, du lịch biển, năng lượng tái tạo, khoáng sản'], 3, 'Tài nguyên đa dạng.'),
    Q('Tầm quan trọng chiến lược của Biển Đông?', ['Không có giá trị', 'Chỉ cho thể thao', 'Kinh tế, an ninh quốc phòng và giao thương khu vực, thế giới', 'Chỉ với một quốc gia'], 2, 'Chiến lược toàn diện.'),
  ]),

  M(28, 'Bài 12 (tt) — Biển Đông trong quan hệ quốc tế và khu vực', [
    Q('Khái niệm tuyến hàng hải qua Biển Đông được coi là?', ['Chỉ tàu nội địa', 'Một trong những tuyến nhộn nhịp nhất thế giới', 'Tuyến ít tàu qua lại', 'Đã bị bỏ'], 1, 'Huyết mạch quốc tế.'),
    Q('Biển Đông là khu vực có?', ['Hoàn toàn không có tranh chấp', 'Một chủ duy nhất', 'Không có nước nào quan tâm', 'Tranh chấp chủ quyền phức tạp giữa nhiều bên'], 3, 'Nhiều tranh chấp.'),
    Q('Cơ chế pháp lí cốt lõi để giải quyết tranh chấp biển?', ['Liên minh châu Âu', 'Công ước Liên hợp quốc về Luật Biển 1982 (UNCLOS)', 'Hiệp ước Véc-xai', 'NATO'], 1, 'UNCLOS 1982.'),
    Q('Việt Nam phê chuẩn UNCLOS 1982 năm?', ['2007', '1982', '1994', '1995'], 2, '1994.'),
    Q('Việt Nam chủ trương giải quyết tranh chấp Biển Đông theo?', ['Bỏ mặc', 'Đàm phán bí mật', 'Biện pháp hoà bình, tuân thủ luật pháp quốc tế, nhất là UNCLOS', 'Vũ lực đơn phương'], 2, 'Hoà bình + luật pháp quốc tế.'),
    Q('Khái niệm DOC trên Biển Đông là?', ['Hiệp ước quân sự', 'Hiệp ước thương mại WTO', 'Tổ chức bóng đá', 'Tuyên bố về ứng xử của các bên (giữa ASEAN và Trung Quốc, 2002)'], 3, 'DOC 2002.'),
  ]),

  M(29, 'Bài 13 — Việt Nam và Biển Đông: chủ quyền lịch sử', [
    Q('Việt Nam khẳng định chủ quyền với hai quần đảo nào ở Biển Đông?', ['Cát Bà và Cô Tô', 'Hoàng Sa và Trường Sa', 'Bạch Long Vĩ và Phú Quốc', 'Côn Đảo và Lý Sơn'], 1, 'Hoàng Sa, Trường Sa.'),
    Q('Cơ sở khẳng định chủ quyền của Việt Nam đối với Hoàng Sa, Trường Sa?', ['Chỉ là phỏng đoán', 'Bằng chứng lịch sử và pháp lí rõ ràng từ nhiều thế kỷ trước', 'Tuyên bố đơn phương gần đây', 'Không có cơ sở'], 1, 'Bằng chứng lịch sử lâu đời.'),
    Q('Đội Hoàng Sa được nhà Nguyễn lập ra để?', ['Tuần tra biên giới đất liền', 'Vận tải hàng hoá', 'Khai thác và xác lập, thực thi chủ quyền ở Hoàng Sa', 'Đánh bắt cá ở vịnh Bắc Bộ'], 2, 'Đội Hoàng Sa thời chúa Nguyễn – nhà Nguyễn.'),
    Q('Tài liệu, bản đồ lịch sử nào khẳng định Hoàng Sa, Trường Sa thuộc Việt Nam?', ['Bản đồ thế giới hiện đại của châu Âu duy nhất', 'Hoàn toàn không có', 'Chỉ truyền miệng', 'Phủ biên tạp lục, Đại Nam thực lục, Châu bản triều Nguyễn…'], 3, 'Nhiều bản đồ và châu bản.'),
    Q('Pháp (với tư cách bảo hộ) cũng thực thi chủ quyền ở Hoàng Sa, Trường Sa thay mặt Việt Nam thời kỳ?', ['Thuộc địa Pháp (đầu XX)', 'Thời Lý – Trần', 'Trước Công nguyên', 'Sau 1975'], 0, 'Đầu thế kỷ XX.'),
    Q('Sau 1975, ai tiếp tục quản lí và bảo vệ Hoàng Sa, Trường Sa?', ['Liên hợp quốc trực tiếp', 'Mỹ', 'Nhà nước Cộng hoà XHCN Việt Nam', 'Một tổ chức tư nhân'], 2, 'Nhà nước CHXHCN VN.'),
  ]),

  M(30, 'Bài 13 (tt) — Việt Nam và Biển Đông: chủ trương và đối ngoại', [
    Q('Chủ trương nhất quán của Việt Nam về Biển Đông?', ['Bỏ mặc', 'Thoả hiệp chủ quyền', 'Bảo vệ chủ quyền, giữ vững hoà bình, ổn định, hợp tác phát triển', 'Đối đầu vũ trang'], 2, 'Hoà bình + bảo vệ chủ quyền.'),
    Q('Việt Nam là thành viên tích cực của tổ chức nào trong vấn đề Biển Đông?', ['ASEAN, LHQ', 'Liên minh châu Âu (EU)', 'NATO', 'OPEC'], 0, 'ASEAN + LHQ.'),
    Q('Một văn bản pháp lí quan trọng của VN về biển?', ['Luật Doanh nghiệp', 'Luật Giáo dục', 'Luật Biển Việt Nam 2012', 'Luật Đất đai 2013'], 2, 'Luật Biển 2012.'),
    Q('Việt Nam và các bên đang hướng tới?', ['Bãi bỏ luật biển quốc tế', 'Đóng cửa Biển Đông', 'Bộ Quy tắc ứng xử ở Biển Đông (COC) thực chất và hiệu lực', 'Liên minh quân sự đối đầu'], 2, 'COC.'),
    Q('Ý nghĩa của việc bảo vệ chủ quyền biển đảo?', ['Chỉ tốn ngân sách', 'Lập tức xoá tranh chấp', 'Bảo vệ độc lập, toàn vẹn lãnh thổ và lợi ích phát triển lâu dài', 'Không có ý nghĩa'], 2, 'Độc lập + phát triển.'),
    Q('Trách nhiệm của công dân, học sinh với Biển Đông?', ['Không quan tâm', 'Thoả hiệp', 'Vi phạm pháp luật', 'Học tập, tuyên truyền, đoàn kết và ủng hộ chính sách của Nhà nước'], 3, 'Trách nhiệm công dân.'),
  ]),

  M(31, 'Bài 13 (tt) — Phát triển kinh tế biển bền vững', [
    Q('Chiến lược phát triển bền vững kinh tế biển VN đến 2030?', ['Đưa Việt Nam thành quốc gia mạnh về biển, giàu từ biển', 'Bỏ kinh tế biển', 'Chỉ tập trung đất liền', 'Lệ thuộc nước ngoài'], 0, 'Quốc gia mạnh về biển.'),
    Q('Các ngành kinh tế biển chính của Việt Nam?', ['Khai thác – nuôi trồng thuỷ sản, du lịch biển, dầu khí, hàng hải, năng lượng tái tạo', 'Khai thác kim cương', 'Khai thác uranium', 'Sản xuất chip bán dẫn dưới biển'], 0, 'Đa dạng ngành biển.'),
    Q('Phát triển kinh tế biển phải đi đôi với?', ['Khai thác cạn kiệt', 'Bỏ mặc môi trường', 'Cấm khai thác', 'Bảo vệ môi trường biển và an ninh quốc phòng'], 3, 'Bền vững + quốc phòng.'),
    Q('Năng lượng tái tạo biển tiêu biểu?', ['Điện hạt nhân nổi', 'Không có', 'Điện gió ngoài khơi', 'Điện than ngoài khơi'], 2, 'Điện gió biển.'),
    Q('Ý nghĩa của các đảo và quần đảo đối với phát triển kinh tế biển?', ['Chỉ có giá trị kinh tế', 'Chỉ có giá trị quân sự', 'Không có ý nghĩa', 'Là tiền tiêu, vừa kinh tế vừa an ninh quốc phòng'], 3, 'Tiền tiêu nhiều mặt.'),
    Q('Bài học xây dựng và bảo vệ chủ quyền biển đảo?', ['Đơn độc đối đầu', 'Lệ thuộc nước lớn', 'Bỏ mặc', 'Kết hợp sức mạnh dân tộc và sức mạnh thời đại, đối ngoại hoà bình'], 3, 'Dân tộc + thời đại.'),
  ]),

  M(32, 'Ôn tập chủ đề 6 — Biển Đông', [
    Q('Biển Đông được mô tả đúng nhất là?', ['Vịnh nhỏ kín', 'Biển bán kín ở rìa Tây Thái Bình Dương, có vị trí chiến lược', 'Hồ nước ngọt', 'Đại dương biệt lập'], 1, 'Biển bán kín, chiến lược.'),
    Q('UNCLOS 1982 quy định vùng biển có chủ quyền của quốc gia ven biển gồm?', ['Toàn bộ đại dương', 'Không có quyền', 'Chỉ vùng đặc quyền kinh tế', 'Nội thuỷ, lãnh hải'], 3, 'Nội thuỷ + lãnh hải có chủ quyền.'),
    Q('Vùng đặc quyền kinh tế (EEZ) theo UNCLOS rộng?', ['24 hải lí', '200 hải lí từ đường cơ sở', '500 hải lí', '12 hải lí'], 1, 'EEZ 200 hải lí.'),
    Q('Việt Nam khẳng định chủ quyền với Hoàng Sa, Trường Sa dựa trên?', ['Tuyên bố đơn phương gần đây', 'Không có căn cứ', 'Chỉ truyền thuyết', 'Bằng chứng lịch sử + cơ sở pháp lí quốc tế'], 3, 'Lịch sử + pháp lí.'),
    Q('Việt Nam, ASEAN và Trung Quốc đang đàm phán văn bản nào?', ['Hiệp ước Sài Gòn', 'Bộ Quy tắc ứng xử ở Biển Đông (COC)', 'Hiến chương Liên hợp quốc', 'NATO'], 1, 'COC.'),
    Q('Trách nhiệm bảo vệ chủ quyền biển đảo của thế hệ trẻ?', ['Học tập, lan toả thông tin chính xác, tham gia các hoạt động hướng về biển đảo', 'Bàng quan', 'Đối đầu vũ trang cá nhân', 'Không quan tâm'], 0, 'Trách nhiệm tích cực.'),
  ]),

  M(33, 'Sơ kết chủ đề 6 — Bảo vệ chủ quyền và lợi ích trên Biển Đông', [
    Q('Chính sách của VN trong giải quyết tranh chấp Biển Đông?', ['Đối đầu cứng rắn vô điều kiện', 'Hoà bình, trên cơ sở luật pháp quốc tế (UNCLOS 1982)', 'Vũ lực', 'Bỏ mặc'], 1, 'Hoà bình + luật quốc tế.'),
    Q('Vai trò của ASEAN trong vấn đề Biển Đông?', ['Không liên quan', 'Tạo cơ chế đối thoại, thúc đẩy DOC và COC', 'Đối đầu Trung Quốc', 'Bỏ mặc'], 1, 'Vai trò trung tâm.'),
    Q('Yếu tố quyết định bảo vệ chủ quyền lâu dài?', ['May mắn', 'Sức mạnh tổng hợp: kinh tế, quốc phòng, đối ngoại, đoàn kết dân tộc', 'Chỉ vũ khí', 'Chỉ ngoại giao'], 1, 'Sức mạnh tổng hợp.'),
    Q('Ý nghĩa Hoàng Sa, Trường Sa với Việt Nam?', ['Có thể nhượng bộ', 'Không quan trọng', 'Là một phần lãnh thổ thiêng liêng, không thể tách rời', 'Chỉ là điểm du lịch'], 2, 'Lãnh thổ thiêng liêng.'),
    Q('Giáo dục biển đảo có vai trò?', ['Bồi dưỡng tình yêu nước, ý thức chủ quyền cho thế hệ trẻ', 'Không có vai trò', 'Chỉ phục vụ thi cử', 'Gây mâu thuẫn'], 0, 'Bồi dưỡng tình yêu nước.'),
    Q('Bài học lớn nhất cho công cuộc bảo vệ Tổ quốc hiện nay?', ['Đơn độc', 'Phân hoá nội bộ', 'Phụ thuộc nước ngoài', 'Phát huy đại đoàn kết dân tộc kết hợp với sức mạnh thời đại'], 3, 'Đại đoàn kết + thời đại.'),
  ]),

  M(34, 'Ôn tập cuối năm — Tổng hợp lịch sử thế giới và Việt Nam cận đại', [
    Q('CMTS Anh, Mỹ, Pháp đều mở đường cho sự phát triển của?', ['Chế độ phong kiến', 'CNXH', 'Chế độ nô lệ', 'Chủ nghĩa tư bản'], 3, 'Mở đường cho CNTB.'),
    Q('Mâu thuẫn cơ bản trong xã hội tư bản chủ nghĩa?', ['Giữa các tôn giáo', 'Giữa lực lượng sản xuất xã hội hoá và chế độ chiếm hữu tư nhân', 'Giữa nông dân và địa chủ', 'Giữa nô lệ và chủ nô'], 1, 'Mâu thuẫn cơ bản.'),
    Q('Cách mạng tháng Mười Nga mở ra?', ['Thời đại tư bản hoang dã', 'Thời đại nô lệ', 'Thời đại quá độ lên CNXH trên thế giới', 'Thời đại phong kiến'], 2, 'Thời đại mới.'),
    Q('Phong trào giải phóng dân tộc ở ĐNA thế kỉ XX có hai khuynh hướng chính?', ['Quân chủ và đế chế', 'Trung lập và cấm vận', 'Dân chủ tư sản và vô sản', 'Phong kiến và nô lệ'], 2, 'Hai khuynh hướng.'),
    Q('Cải cách Lê Thánh Tông tiêu biểu cho?', ['Mô hình CNXH', 'Mô hình nhà nước quân chủ chuyên chế trung ương tập quyền hoàn chỉnh', 'Mô hình phân quyền cực đoan', 'Mô hình dân chủ tư sản'], 1, 'Quân chủ tập quyền.'),
    Q('Việt Nam chủ trương trên Biển Đông?', ['Đối đầu', 'Bỏ mặc', 'Vũ lực', 'Hoà bình, hợp tác, tuân thủ UNCLOS'], 3, 'Hoà bình + UNCLOS.'),
  ]),

  M(35, 'Thi học kỳ II — Tổng ôn cả năm', [
    Q('Cách mạng tư sản Pháp 1789 đỉnh cao là?', ['Phái Lập hiến', 'Thời kỳ Đốc chính', 'Đế chế Napoléon', 'Phái Giacôbanh'], 3, 'Robespierre và Giacôbanh.'),
    Q('Liên Xô tan rã năm?', ['1991', '2000', '1985', '1989'], 0, 'Cuối 1991.'),
    Q('Sự kiện nào mở đầu thắng lợi GPDT ở ĐNA sau CTTG II?', ['CMTS Anh', 'CMTS Pháp', 'Cách mạng tháng Tám 1945 ở Việt Nam', 'Cách mạng tháng Mười 1917'], 2, 'CM tháng Tám 1945.'),
    Q('Chiến thắng Bạch Đằng 938 do ai lãnh đạo?', ['Lê Lợi', 'Ngô Quyền', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], 1, 'Ngô Quyền.'),
    Q('Cuộc cải cách Minh Mạng đầu thế kỷ XIX để lại di sản?', ['Bãi bỏ thi cử', 'Chia cả nước thành các tỉnh – nền tảng hành chính hiện đại', 'Tiền giấy', 'Thổ ty'], 1, 'Mô hình tỉnh.'),
    Q('Chủ trương của Việt Nam về Biển Đông?', ['Bỏ mặc', 'Thoả hiệp chủ quyền', 'Bảo vệ vững chắc chủ quyền, giải quyết tranh chấp bằng biện pháp hoà bình', 'Vũ lực'], 2, 'Hoà bình + bảo vệ chủ quyền.'),
  ]),
];

export const H11SU_SCENARIOS = indexBy(H11SU_WEEKS);
