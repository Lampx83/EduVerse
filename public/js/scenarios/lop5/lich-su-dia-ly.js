// ============================================================
// Lớp 5 · LỊCH SỬ & ĐỊA LÝ — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK GDPT 2018.
// ID prefix: "P5LSDL-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5LSDL', 'lich-su-dia-ly', n, title, qs, opts);

export const P5LSDL_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Thực dân Pháp xâm lược Việt Nam', [
    Q('Thực dân Pháp nổ súng xâm lược Việt Nam năm nào?', ['1858', '1884', '1930', '1945'], 0, 'Tháng 9/1858, Pháp tấn công Đà Nẵng.'),
    Q('Pháp nổ súng đầu tiên ở?', ['Đà Nẵng', 'Sài Gòn', 'Hà Nội', 'Huế'], 0, 'Đà Nẵng là nơi Pháp đổ bộ đầu tiên.'),
    Q('Triều đình nhà nào đã ký các hiệp ước đầu hàng?', ['Lý', 'Trần', 'Lê', 'Nguyễn'], 3, 'Triều Nguyễn ký các hiệp ước.'),
    Q('Hiệp ước nào đánh dấu Việt Nam thành nước thuộc địa?', ['Patenotre (1884)', 'Giáp Tuất (1874)', 'Nhâm Tuất (1862)', 'Versailles'], 0, 'Hiệp ước Patenotre 1884.'),
    Q('Nước ta bị chia thành mấy kì dưới thời Pháp thuộc?', ['2', '3', '4', '5'], 1, 'Bắc Kỳ, Trung Kỳ, Nam Kỳ.'),
    Q('Phản ứng của nhân dân ta trước cuộc xâm lược?', ['Kiên quyết đứng lên kháng chiến', 'Đầu hàng hoàn toàn', 'Không quan tâm', 'Ủng hộ Pháp'], 0, 'Nhân dân khắp nơi đứng lên kháng chiến.'),
  ]),

  M(2, 'Trương Định — Bình Tây Đại nguyên soái', [
    Q('Trương Định là người lãnh đạo nghĩa quân ở?', ['Nam Kỳ (Gò Công)', 'Bắc Kỳ', 'Trung Kỳ', 'Hà Nội'], 0, 'Trương Định ở Gò Công (Nam Kỳ).'),
    Q('Khi triều đình ra lệnh giải binh, Trương Định?', ['Tiếp tục cùng nhân dân đánh giặc', 'Đầu hàng', 'Bỏ trốn', 'Hợp tác với Pháp'], 0, 'Ông chọn đứng về phía nhân dân.'),
    Q('Nhân dân tôn xưng Trương Định là?', ['Bình Tây Đại nguyên soái', 'Hoàng đế', 'Quốc trưởng', 'Đại tướng'], 0, 'Nhân dân tôn ông là "Bình Tây Đại nguyên soái".'),
    Q('Trương Định hi sinh năm?', ['1864', '1858', '1884', '1885'], 0, 'Trương Định hi sinh năm 1864.'),
    Q('Hình ảnh Trương Định thể hiện?', ['Lòng yêu nước, gắn bó với dân', 'Sự nhút nhát', 'Sự phản bội', 'Sự bất hợp tác với dân'], 0, 'Tinh thần yêu nước, vì dân.'),
    Q('Cuộc khởi nghĩa Trương Định thuộc?', ['Phong trào kháng Pháp ở Nam Kỳ', 'Phong trào Cần Vương', 'Phong trào Đông Du', 'Phong trào Văn Thân'], 0, 'Kháng Pháp ở Nam Kỳ.'),
  ]),

  M(3, 'Nguyễn Trường Tộ — Mong muốn canh tân', [
    Q('Nguyễn Trường Tộ chủ trương?', ['Canh tân (đổi mới) đất nước', 'Bế quan toả cảng', 'Bài trừ ngoại quốc', 'Đầu hàng Pháp'], 0, 'Ông đề xuất canh tân.'),
    Q('Nguyễn Trường Tộ là người tỉnh?', ['Nghệ An', 'Hà Tĩnh', 'Quảng Bình', 'Thanh Hoá'], 0, 'Ông quê Nghệ An.'),
    Q('Đề nghị canh tân được vua nào tiếp nhận?', ['Tự Đức (nhưng không thực hiện)', 'Gia Long', 'Minh Mạng', 'Hàm Nghi'], 0, 'Vua Tự Đức không thực hiện đề nghị.'),
    Q('Lĩnh vực canh tân ông đề xuất?', ['Mở rộng giao thương, học khoa học kỹ thuật, cải cách giáo dục', 'Đánh giặc', 'Tăng thuế', 'Cấm sách'], 0, 'Cải cách toàn diện.'),
    Q('Vì sao đề nghị canh tân không thành?', ['Triều đình bảo thủ, không hành động kịp', 'Dân không ủng hộ', 'Pháp ngăn cản', 'Tự ông rút lui'], 0, 'Triều đình lúc đó bảo thủ.'),
    Q('Bài học từ Nguyễn Trường Tộ?', ['Phải biết đổi mới để mạnh lên', 'Phải giữ nguyên', 'Phải bài trừ', 'Phải đầu hàng'], 0, 'Tinh thần đổi mới, học hỏi.'),
  ]),

  M(4, 'Phong trào Cần Vương — Tôn Thất Thuyết', [
    Q('Phong trào Cần Vương do ai khởi xướng?', ['Tôn Thất Thuyết nhân danh vua Hàm Nghi', 'Phan Bội Châu', 'Phan Châu Trinh', 'Trương Định'], 0, 'Cần Vương = giúp vua đánh giặc.'),
    Q('"Cần Vương" có nghĩa?', ['Giúp vua đánh giặc', 'Đầu hàng vua', 'Lật vua', 'Theo Pháp'], 0, 'Cần = giúp; Vương = vua.'),
    Q('Phong trào Cần Vương bắt đầu năm?', ['1885', '1858', '1884', '1930'], 0, 'Chiếu Cần Vương ban năm 1885.'),
    Q('Vua nào ban Chiếu Cần Vương?', ['Hàm Nghi', 'Tự Đức', 'Đồng Khánh', 'Bảo Đại'], 0, 'Vua Hàm Nghi.'),
    Q('Một cuộc khởi nghĩa tiêu biểu trong phong trào?', ['Khởi nghĩa Hương Khê (Phan Đình Phùng)', 'Khởi nghĩa Yên Bái', 'Khởi nghĩa Nam Kỳ', 'Khởi nghĩa Ba Đình (CMT8)'], 0, 'Hương Khê — Phan Đình Phùng.'),
    Q('Phong trào Cần Vương thất bại do?', ['Thiếu sự lãnh đạo thống nhất, vũ khí kém', 'Dân không tham gia', 'Pháp không đánh', 'Vua đầu hàng'], 0, 'Hạn chế của phong trào phong kiến.'),
  ]),

  M(5, 'Phan Bội Châu — Phong trào Đông Du', [
    Q('Phan Bội Châu chủ trương?', ['Đưa thanh niên sang Nhật học, đánh Pháp giành độc lập', 'Hợp tác với Pháp', 'Giữ nguyên', 'Đầu hàng'], 0, 'Phong trào Đông Du.'),
    Q('Phong trào Đông Du diễn ra khoảng?', ['1905–1908', '1858', '1885', '1930'], 0, 'Phan Bội Châu khởi xướng từ 1905.'),
    Q('Đông Du là?', ['Sang Nhật du học', 'Sang Pháp du học', 'Sang Mỹ du học', 'Sang Trung Quốc du học'], 0, 'Đông Du = du học sang Nhật.'),
    Q('Phan Bội Châu quê ở?', ['Nghệ An', 'Hà Nội', 'Huế', 'Sài Gòn'], 0, 'Phan Bội Châu quê Nghệ An.'),
    Q('Tổ chức Phan Bội Châu lập?', ['Việt Nam Quang Phục Hội', 'Đảng Cộng sản', 'Hội Liên hiệp Phụ nữ', 'Đoàn TNCS'], 0, 'VN Quang phục hội (1912).'),
    Q('Vì sao phong trào Đông Du thất bại?', ['Nhật Bản câu kết với Pháp, trục xuất du học sinh', 'Học sinh không học', 'Không có người tham gia', 'Phan Bội Châu bỏ cuộc'], 0, 'Nhật trục xuất du học sinh Việt Nam.'),
  ]),

  M(6, 'Phan Châu Trinh — Duy tân, dân chủ', [
    Q('Phan Châu Trinh chủ trương?', ['Duy tân, dân chủ, nâng cao dân trí', 'Bạo động vũ trang', 'Cầu viện Trung Quốc', 'Đầu hàng Pháp'], 0, 'Khai dân trí, chấn dân khí, hậu dân sinh.'),
    Q('"Khai dân trí" là?', ['Mở mang trí tuệ cho dân', 'Đóng cửa trường', 'Cấm dân học', 'Cấm dân nói'], 0, 'Nâng cao tri thức cho người dân.'),
    Q('Phan Châu Trinh quê ở?', ['Quảng Nam', 'Quảng Ngãi', 'Quảng Bình', 'Quảng Trị'], 0, 'Quê ở Quảng Nam.'),
    Q('Phong trào của Phan Châu Trinh được gọi là?', ['Duy Tân', 'Đông Du', 'Cần Vương', 'Yên Bái'], 0, 'Phong trào Duy Tân (1906).'),
    Q('Sự khác biệt với Phan Bội Châu?', ['Phan Châu Trinh chủ trương ôn hoà, không bạo động', 'Cùng chủ trương bạo động', 'Cùng cầu viện Nhật', 'Cùng đầu hàng'], 0, 'Khác biệt phương pháp đấu tranh.'),
    Q('Phong trào Duy Tân kết thúc do?', ['Pháp đàn áp, bắt bớ', 'Tự giải tán', 'Dân không tham gia', 'Thắng lợi'], 0, 'Pháp đàn áp khốc liệt.'),
  ]),

  M(7, 'Nguyễn Tất Thành ra đi tìm đường cứu nước', [
    Q('Nguyễn Tất Thành (Bác Hồ) ra đi tìm đường cứu nước ngày?', ['5/6/1911', '19/5/1890', '2/9/1945', '30/4/1975'], 0, 'Ngày 5/6/1911 tại bến cảng Nhà Rồng.'),
    Q('Bác Hồ ra đi từ bến cảng nào?', ['Nhà Rồng (Sài Gòn)', 'Hải Phòng', 'Đà Nẵng', 'Hạ Long'], 0, 'Bến Nhà Rồng — Sài Gòn.'),
    Q('Khi đó Bác Hồ làm việc với danh nghĩa?', ['Phụ bếp trên tàu', 'Thuyền trưởng', 'Khách du lịch', 'Sĩ quan'], 0, 'Bác làm phụ bếp với tên Văn Ba.'),
    Q('Tên dùng khi đó của Bác?', ['Văn Ba', 'Nguyễn Ái Quốc', 'Hồ Chí Minh', 'Nguyễn Sinh Cung'], 0, 'Trên tàu Bác lấy tên Văn Ba.'),
    Q('Mục đích ra đi của Bác?', ['Tìm con đường cứu nước', 'Du học', 'Buôn bán', 'Du lịch'], 0, 'Tìm đường giải phóng dân tộc.'),
    Q('Bác đã đi qua những châu lục nào?', ['Á, Âu, Phi, Mỹ', 'Chỉ châu Âu', 'Chỉ châu Á', 'Chỉ châu Mỹ'], 0, 'Bác đã đi nhiều châu lục.'),
  ]),

  M(8, 'Đảng Cộng sản Việt Nam ra đời (3/2/1930)', [
    Q('Đảng Cộng sản Việt Nam ra đời ngày?', ['3/2/1930', '5/6/1911', '2/9/1945', '7/5/1954'], 0, 'Ngày 3/2/1930.'),
    Q('Ai chủ trì hội nghị thành lập Đảng?', ['Nguyễn Ái Quốc', 'Trần Phú', 'Lê Hồng Phong', 'Hà Huy Tập'], 0, 'Nguyễn Ái Quốc chủ trì.'),
    Q('Hội nghị thành lập Đảng diễn ra ở?', ['Hương Cảng (Hong Kong)', 'Hà Nội', 'Sài Gòn', 'Huế'], 0, 'Tại Hương Cảng (Cửu Long), Trung Quốc.'),
    Q('Đảng Cộng sản Việt Nam ra đời từ sự hợp nhất của?', ['3 tổ chức cộng sản ở Việt Nam', '2 đảng quốc tế', '5 tổ chức công đoàn', 'Triều đình'], 0, 'Hợp nhất Đông Dương CSĐ, An Nam CSĐ, Đông Dương CSLĐ.'),
    Q('Tổng Bí thư đầu tiên của Đảng?', ['Trần Phú', 'Nguyễn Ái Quốc', 'Lê Hồng Phong', 'Trường Chinh'], 0, 'Tổng Bí thư đầu tiên: Trần Phú (10/1930).'),
    Q('Sự ra đời của Đảng có ý nghĩa?', ['Bước ngoặt vĩ đại của cách mạng Việt Nam', 'Không quan trọng', 'Chỉ là một sự kiện nhỏ', 'Không có ý nghĩa'], 0, 'Bước ngoặt vĩ đại.'),
  ]),

  M(9, 'Xô viết Nghệ — Tĩnh (1930–1931)', [
    Q('Xô viết Nghệ — Tĩnh diễn ra ở?', ['Nghệ An và Hà Tĩnh', 'Bắc Kỳ', 'Nam Kỳ', 'Trung Kỳ ven biển'], 0, 'Nghệ An và Hà Tĩnh.'),
    Q('Xô viết Nghệ — Tĩnh xảy ra năm?', ['1930–1931', '1885', '1945', '1954'], 0, 'Cao trào 1930–1931.'),
    Q('Hình thức đấu tranh chính?', ['Biểu tình của công nhân, nông dân', 'Du học', 'Cầu viện', 'Đầu hàng'], 0, 'Biểu tình và đấu tranh quần chúng.'),
    Q('Tại sao gọi là "Xô viết"?', ['Vì thiết lập chính quyền cách mạng kiểu Xô viết', 'Vì ở nước Nga', 'Vì có người Nga', 'Vì gọi tuỳ ý'], 0, 'Lập chính quyền Xô viết tại các làng xã.'),
    Q('Kết quả phong trào?', ['Bị Pháp đàn áp khốc liệt nhưng có ý nghĩa lớn', 'Thắng lợi hoàn toàn', 'Không có ý nghĩa', 'Lập nhà nước mới'], 0, 'Diễn tập đầu tiên cho cách mạng Việt Nam.'),
    Q('Ý nghĩa Xô viết Nghệ — Tĩnh?', ['Khẳng định sức mạnh của giai cấp công — nông', 'Không có gì', 'Phong trào nhỏ lẻ', 'Thắng lợi'], 0, 'Sức mạnh công nông lần đầu được khẳng định.'),
  ]),

  M(10, 'Cách mạng Tháng Tám (1945)', [
    Q('Cách mạng Tháng Tám thành công năm?', ['1945', '1930', '1954', '1975'], 0, 'Tháng 8/1945.'),
    Q('Cách mạng Tháng Tám diễn ra trong bối cảnh?', ['Nhật đầu hàng Đồng minh', 'Pháp xâm lược', 'Mỹ tham chiến', 'Trung Quốc xâm lược'], 0, 'Cơ hội ngàn năm có một.'),
    Q('Hà Nội khởi nghĩa ngày?', ['19/8/1945', '2/9/1945', '23/8/1945', '25/8/1945'], 0, 'Tổng khởi nghĩa Hà Nội 19/8.'),
    Q('Lãnh tụ tối cao của CMT8?', ['Hồ Chí Minh', 'Trần Phú', 'Võ Nguyên Giáp', 'Phạm Văn Đồng'], 0, 'Chủ tịch Hồ Chí Minh.'),
    Q('Kết quả CMT8?', ['Lật đổ chế độ thực dân — phong kiến, lập nước Việt Nam Dân chủ Cộng hoà', 'Thua', 'Không có kết quả', 'Bị đàn áp'], 0, 'Cách mạng thành công.'),
    Q('Tổ chức lãnh đạo CMT8?', ['Mặt trận Việt Minh do ĐCS lãnh đạo', 'Triều Nguyễn', 'Pháp', 'Nhật'], 0, 'Việt Minh do Đảng lãnh đạo.'),
  ]),

  M(11, 'Tuyên ngôn Độc lập 2/9/1945', [
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['2/9/1945', '19/5/1890', '5/6/1911', '7/5/1954'], 0, 'Ngày 2/9/1945.'),
    Q('Bác Hồ đọc Tuyên ngôn tại?', ['Quảng trường Ba Đình (Hà Nội)', 'Huế', 'Sài Gòn', 'Đà Nẵng'], 0, 'Quảng trường Ba Đình, Hà Nội.'),
    Q('Tuyên ngôn Độc lập khai sinh nước?', ['Việt Nam Dân chủ Cộng hoà', 'Đại Việt', 'Đại Nam', 'Cộng hoà XHCN Việt Nam'], 0, 'Việt Nam Dân chủ Cộng hoà.'),
    Q('Mở đầu Tuyên ngôn trích dẫn?', ['Tuyên ngôn Độc lập Mỹ và Nhân quyền — Dân quyền Pháp', 'Kinh Phật', 'Sách Khổng', 'Hiệp ước'], 0, 'Trích 2 tuyên ngôn nổi tiếng.'),
    Q('Câu mở đầu Tuyên ngôn?', ['"Tất cả mọi người sinh ra đều có quyền bình đẳng…"', '"Hỡi đồng bào…"', '"Việt Nam dân tộc"', '"Một nghìn năm…"'], 0, 'Trích từ tuyên ngôn Mỹ.'),
    Q('Ý nghĩa Tuyên ngôn?', ['Khẳng định nền độc lập của Việt Nam trước thế giới', 'Không có ý nghĩa', 'Tuyên bố chiến tranh', 'Tuyên bố hoà bình'], 0, 'Văn kiện lịch sử khai sinh nước.'),
  ]),

  M(12, 'Kháng chiến chống Pháp (1945–1954)', [
    Q('Toàn quốc kháng chiến bắt đầu ngày?', ['19/12/1946', '2/9/1945', '7/5/1954', '20/7/1954'], 0, 'Lời kêu gọi 19/12/1946.'),
    Q('Ai ra Lời kêu gọi toàn quốc kháng chiến?', ['Chủ tịch Hồ Chí Minh', 'Võ Nguyên Giáp', 'Trường Chinh', 'Phạm Văn Đồng'], 0, 'Bác Hồ ra lời kêu gọi.'),
    Q('Câu nổi tiếng trong Lời kêu gọi?', ['"Thà hi sinh tất cả, chứ nhất định không chịu mất nước…"', '"Không có gì quý hơn độc lập tự do"', '"Vì lợi ích trăm năm"', '"Mỗi người dân là một chiến sĩ"'], 0, 'Câu nổi tiếng của Bác.'),
    Q('Quân đội Việt Nam giai đoạn này tên?', ['Vệ quốc đoàn → Quân đội Nhân dân Việt Nam', 'Quân đội Quốc gia', 'Vệ binh', 'Bộ đội Cụ Hồ'], 0, 'Tên gọi qua các giai đoạn.'),
    Q('Chiến thắng Việt Bắc Thu — Đông năm?', ['1947', '1945', '1954', '1975'], 0, 'Chiến thắng Việt Bắc thu đông 1947.'),
    Q('Chiến dịch Biên Giới năm?', ['1950', '1947', '1954', '1945'], 0, 'Chiến dịch Biên giới 1950.'),
  ]),

  M(13, 'Chiến thắng Điện Biên Phủ (7/5/1954)', [
    Q('Chiến thắng Điện Biên Phủ ngày?', ['7/5/1954', '2/9/1945', '30/4/1975', '19/12/1946'], 0, 'Ngày 7/5/1954.'),
    Q('Chỉ huy mặt trận Điện Biên Phủ?', ['Đại tướng Võ Nguyên Giáp', 'Hồ Chí Minh', 'Phạm Văn Đồng', 'Trường Chinh'], 0, 'Tổng tư lệnh: Võ Nguyên Giáp.'),
    Q('Điện Biên Phủ thuộc tỉnh?', ['Điện Biên', 'Lai Châu', 'Sơn La', 'Lào Cai'], 0, 'Thuộc tỉnh Điện Biên (trước thuộc Lai Châu).'),
    Q('Khẩu hiệu trong chiến dịch?', ['"Tất cả cho tiền tuyến, tất cả để chiến thắng"', '"Vì hoà bình"', '"Vì học tập"', '"Vì nhân dân"'], 0, 'Tinh thần toàn dân chi viện.'),
    Q('Chiến thắng Điện Biên Phủ buộc Pháp?', ['Ký Hiệp định Giơ-ne-vơ, rút khỏi Đông Dương', 'Đầu hàng', 'Tiếp tục đánh', 'Bỏ thuộc địa'], 0, 'Pháp ký Giơ-ne-vơ 21/7/1954.'),
    Q('Anh hùng La Văn Cầu nổi tiếng vì?', ['Nhờ đồng đội chặt cánh tay để tiếp tục chiến đấu', 'Bắn rơi máy bay', 'Bắt sống chỉ huy', 'Là phi công'], 0, 'Tấm gương dũng cảm trong chiến dịch.'),
  ]),

  M(14, 'Hiệp định Giơ-ne-vơ — đất nước chia cắt', [
    Q('Hiệp định Giơ-ne-vơ ký năm?', ['1954', '1945', '1973', '1975'], 0, 'Ngày 21/7/1954.'),
    Q('Hiệp định chia cắt đất nước ở vĩ tuyến?', ['17', '16', '18', '20'], 0, 'Vĩ tuyến 17 (sông Bến Hải).'),
    Q('Sông nào là giới tuyến quân sự tạm thời?', ['Sông Bến Hải', 'Sông Hồng', 'Sông Cửu Long', 'Sông Mã'], 0, 'Sông Bến Hải.'),
    Q('Theo Hiệp định, sau 2 năm sẽ?', ['Tổng tuyển cử thống nhất đất nước', 'Chia luôn', 'Chiến tranh tiếp', 'Đầu hàng'], 0, 'Tổng tuyển cử 1956 — bị Mỹ — Diệm phá hoại.'),
    Q('Cầu nào nối hai bờ giới tuyến?', ['Cầu Hiền Lương', 'Cầu Long Biên', 'Cầu Mỹ Thuận', 'Cầu Tràng Tiền'], 0, 'Cầu Hiền Lương trên sông Bến Hải.'),
    Q('Vì sao đất nước chưa thống nhất sau 1954?', ['Mỹ — Diệm phá hoại tổng tuyển cử', 'Dân không muốn', 'Pháp ngăn cản', 'Liên Xô can thiệp'], 0, 'Mỹ — Diệm phá vỡ Hiệp định.'),
  ]),

  M(15, 'Kháng chiến chống Mỹ — giai đoạn đầu', [
    Q('Cuộc kháng chiến chống Mỹ ở miền Nam Việt Nam?', ['1954–1975', '1945–1954', '1858–1884', '1930–1945'], 0, 'Hơn 20 năm kháng chiến.'),
    Q('Phong trào Đồng Khởi năm?', ['1959–1960', '1945', '1954', '1968'], 0, 'Phong trào Đồng Khởi (1959–1960) ở Bến Tre.'),
    Q('Đồng Khởi nổ ra ở tỉnh?', ['Bến Tre', 'Cà Mau', 'An Giang', 'Sài Gòn'], 0, 'Bắt đầu ở Bến Tre.'),
    Q('Mặt trận lãnh đạo cách mạng miền Nam?', ['Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (1960)', 'Mặt trận Việt Minh', 'Hội Nông dân', 'Đoàn Thanh niên'], 0, 'Thành lập 20/12/1960.'),
    Q('Đường mòn nối hậu phương — tiền tuyến?', ['Đường Trường Sơn (Hồ Chí Minh)', 'Đường 1A', 'Đường biển', 'Đường ray'], 0, 'Đường Trường Sơn huyền thoại.'),
    Q('Đường Trường Sơn còn gọi là?', ['Đường Hồ Chí Minh', 'Đường biên giới', 'Đường ven biển', 'Đường sắt Bắc — Nam'], 0, 'Đường Hồ Chí Minh.'),
  ]),

  M(16, 'Tết Mậu Thân 1968', [
    Q('Tết Mậu Thân là năm?', ['1968', '1958', '1954', '1975'], 0, 'Năm 1968.'),
    Q('Đặc điểm của cuộc tổng tiến công Mậu Thân?', ['Đồng loạt đánh vào nhiều đô thị miền Nam', 'Chỉ đánh nông thôn', 'Chỉ ở Sài Gòn', 'Chỉ ở Huế'], 0, 'Đồng loạt nhiều đô thị.'),
    Q('Ý nghĩa lớn của Mậu Thân 1968?', ['Làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải đàm phán', 'Thắng lợi hoàn toàn', 'Không có ý nghĩa', 'Bị đánh tan'], 0, 'Buộc Mỹ ngồi vào bàn đàm phán Paris.'),
    Q('Sau Mậu Thân, Mỹ buộc phải?', ['Tuyên bố "phi Mỹ hoá" chiến tranh', 'Tăng quân', 'Rút ngay', 'Đầu hàng'], 0, 'Phi Mỹ hoá → Việt Nam hoá chiến tranh.'),
    Q('Hội nghị Paris bắt đầu năm?', ['1968', '1954', '1975', '1973'], 0, 'Bắt đầu năm 1968.'),
    Q('Hiệp định Paris ký năm?', ['1973', '1954', '1968', '1975'], 0, 'Ngày 27/1/1973.'),
  ]),

  M(17, 'Đại thắng mùa Xuân 1975 — Thống nhất đất nước', [
    Q('Đất nước thống nhất ngày?', ['30/4/1975', '2/9/1975', '7/5/1954', '21/7/1954'], 0, 'Ngày 30/4/1975.'),
    Q('Chiến dịch quyết định?', ['Chiến dịch Hồ Chí Minh', 'Chiến dịch Tây Bắc', 'Chiến dịch Việt Bắc', 'Chiến dịch Biên giới'], 0, 'Chiến dịch Hồ Chí Minh (4/1975).'),
    Q('Xe tăng nào tiến vào Dinh Độc Lập đầu tiên?', ['Xe tăng 390', 'Xe tăng 100', 'Xe tăng 200', 'Xe tăng 999'], 0, 'Xe tăng 390 húc đổ cổng Dinh Độc Lập.'),
    Q('Ai là Tổng thống nguỵ quyền Sài Gòn cuối cùng?', ['Dương Văn Minh', 'Nguyễn Văn Thiệu', 'Trần Văn Hương', 'Ngô Đình Diệm'], 0, 'Dương Văn Minh tuyên bố đầu hàng.'),
    Q('Ý nghĩa Đại thắng mùa Xuân 1975?', ['Kết thúc chiến tranh, non sông thu về một mối', 'Thua', 'Bị chia cắt thêm', 'Không có ý nghĩa'], 0, 'Đất nước thống nhất hoàn toàn.'),
    Q('Sài Gòn được đổi tên?', ['Thành phố Hồ Chí Minh', 'Thành phố Bác Hồ', 'Thành phố Đỏ', 'Thành phố Hoa'], 0, 'Đổi tên TP. Hồ Chí Minh (1976).'),
  ]),

  M(18, 'Ôn tập học kỳ I — Lịch sử Việt Nam', [
    Q('Pháp xâm lược Việt Nam năm?', ['1858', '1884', '1930', '1945'], 0, '1858 — Pháp nổ súng Đà Nẵng.'),
    Q('Đảng CSVN ra đời?', ['3/2/1930', '2/9/1945', '7/5/1954', '30/4/1975'], 0, 'Ngày 3/2/1930.'),
    Q('Cách mạng Tháng 8?', ['1945', '1954', '1975', '1968'], 0, 'CMT8/1945.'),
    Q('Tuyên ngôn Độc lập?', ['2/9/1945', '19/8/1945', '7/5/1954', '30/4/1975'], 0, '2/9/1945 tại Ba Đình.'),
    Q('Điện Biên Phủ?', ['7/5/1954', '30/4/1975', '2/9/1945', '19/12/1946'], 0, 'Ngày 7/5/1954.'),
    Q('Giải phóng miền Nam thống nhất đất nước?', ['30/4/1975', '7/5/1954', '2/9/1945', '21/7/1954'], 0, 'Ngày 30/4/1975.'),
  ]),

  // ──────────────── HK2 — Địa lý ────────────────
  M(19, 'Vị trí địa lý Việt Nam', [
    Q('Việt Nam nằm ở khu vực?', ['Đông Nam Á', 'Đông Bắc Á', 'Trung Á', 'Nam Á'], 0, 'Đông Nam Á.'),
    Q('Việt Nam giáp biển ở phía?', ['Đông', 'Tây', 'Bắc', 'Nam'], 0, 'Biển Đông ở phía Đông.'),
    Q('Việt Nam giáp với các nước?', ['Trung Quốc, Lào, Campuchia', 'Mỹ, Pháp, Đức', 'Nhật, Hàn, Triều', 'Anh, Ý, Tây Ban Nha'], 0, '3 nước láng giềng.'),
    Q('Phần đất liền VN có hình?', ['Chữ S', 'Chữ U', 'Hình tròn', 'Hình vuông'], 0, 'Hình chữ S kéo dài.'),
    Q('Diện tích đất liền VN khoảng?', ['331 000 km²', '100 000 km²', '1 000 000 km²', '50 000 km²'], 0, '~ 331 000 km².'),
    Q('Phần biển VN gồm vịnh nào?', ['Vịnh Bắc Bộ và vịnh Thái Lan', 'Vịnh Mexico', 'Vịnh Ba Tư', 'Vịnh Đại Tây Dương'], 0, 'Vịnh Bắc Bộ + vịnh Thái Lan.'),
  ]),

  M(20, 'Địa hình Việt Nam', [
    Q('Địa hình VN chủ yếu là?', ['Đồi núi (3/4)', 'Đồng bằng', 'Sa mạc', 'Cao nguyên băng'], 0, '3/4 diện tích là đồi núi.'),
    Q('Đỉnh núi cao nhất VN?', ['Phan Xi Păng', 'Bạch Mã', 'Tản Viên', 'Bà Đen'], 0, 'Phan Xi Păng (3 143 m).'),
    Q('Phan Xi Păng thuộc dãy?', ['Hoàng Liên Sơn', 'Trường Sơn', 'Bạch Mã', 'Tam Đảo'], 0, 'Dãy Hoàng Liên Sơn (Tây Bắc).'),
    Q('Hai đồng bằng lớn nhất VN?', ['ĐB sông Hồng và ĐB sông Cửu Long', 'ĐB Thanh Hoá', 'ĐB Bình Định', 'ĐB Trung Bộ'], 0, 'Hai vùng đồng bằng phù sa lớn.'),
    Q('Dãy núi chính ở Trường Sơn chạy theo hướng?', ['Tây Bắc — Đông Nam', 'Bắc — Nam', 'Đông — Tây', 'Vòng tròn'], 0, 'Dãy Trường Sơn dài ~ 1 100 km.'),
    Q('Cao nguyên lớn ở Tây Nguyên?', ['Cao nguyên Lâm Viên, Mơ Nông, Plei-cu, Đắk Lắk', 'Mộc Châu', 'Sơn La', 'Đồng Văn'], 0, 'Tây Nguyên — nhiều cao nguyên.'),
  ]),

  M(21, 'Khí hậu Việt Nam', [
    Q('Khí hậu Việt Nam là?', ['Nhiệt đới ẩm gió mùa', 'Ôn đới', 'Hàn đới', 'Sa mạc'], 0, 'Nhiệt đới ẩm gió mùa.'),
    Q('VN có mấy mùa rõ rệt ở miền Bắc?', ['4 mùa', '2 mùa', '1 mùa', 'Không có mùa'], 0, 'Miền Bắc 4 mùa: xuân, hạ, thu, đông.'),
    Q('Miền Nam có?', ['2 mùa (mưa và khô)', '4 mùa', 'Tuyết phủ', 'Sa mạc'], 0, 'Miền Nam 2 mùa.'),
    Q('Gió mùa Đông Bắc thổi vào VN khi nào?', ['Mùa đông', 'Mùa hè', 'Mùa xuân', 'Mùa thu'], 0, 'Gió mùa Đông Bắc → mùa đông.'),
    Q('Gió mùa Tây Nam thổi vào?', ['Mùa hè', 'Mùa đông', 'Mùa xuân', 'Mùa thu'], 0, 'Gió mùa Tây Nam → mùa hè.'),
    Q('Bão thường xảy ra ở VN vào?', ['Tháng 6 — 11', 'Tháng 1 — 3', 'Tháng 12', 'Không có bão'], 0, 'Mùa bão từ tháng 6 đến tháng 11.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Sông ngòi Việt Nam', [
    Q('Hai con sông lớn nhất VN?', ['Sông Hồng và sông Mê Kông (Cửu Long)', 'Sông Đà', 'Sông Mã', 'Sông Hương'], 0, 'Sông Hồng và sông Mê Kông.'),
    Q('Sông Cửu Long là?', ['Đoạn cuối của sông Mê Kông ở VN', 'Sông riêng biệt', 'Sông phụ', 'Sông cạn'], 0, 'Sông Mê Kông chảy qua VN gọi là Cửu Long.'),
    Q('"Cửu Long" có nghĩa?', ['9 con rồng (9 cửa)', '9 con sông', '9 cái cầu', '9 ngọn núi'], 0, '"Cửu" = 9; sông Cửu Long đổ ra biển qua 9 cửa.'),
    Q('Sông ngòi VN có đặc điểm?', ['Dày đặc, hướng Tây Bắc — Đông Nam', 'Rất thưa', 'Cạn nước', 'Đông Nam — Tây Bắc'], 0, 'Mạng lưới dày, chủ yếu chảy theo TB — ĐN.'),
    Q('Mùa nước lớn của sông VN thường vào?', ['Mùa mưa (hè — thu)', 'Mùa đông', 'Mùa xuân', 'Suốt năm như nhau'], 0, 'Mùa mưa nhiều nước, lũ.'),
    Q('Sông ngòi cung cấp?', ['Nước tưới, thuỷ điện, giao thông, phù sa', 'Không có ích', 'Chỉ làm cảnh', 'Chỉ tắm'], 0, 'Vai trò quan trọng.'),
  ]),

  M(23, 'Biển và đảo Việt Nam', [
    Q('Biển VN là một bộ phận của?', ['Biển Đông', 'Đại Tây Dương', 'Thái Bình Dương trực tiếp', 'Ấn Độ Dương'], 0, 'Một phần của Biển Đông.'),
    Q('Hai quần đảo lớn của VN?', ['Hoàng Sa và Trường Sa', 'Phú Quốc, Côn Đảo', 'Cô Tô, Bạch Long Vĩ', 'Lý Sơn, Phú Quý'], 0, 'Hoàng Sa, Trường Sa.'),
    Q('Đảo lớn nhất VN?', ['Phú Quốc', 'Côn Đảo', 'Cát Bà', 'Phú Quý'], 0, 'Đảo Phú Quốc (Kiên Giang).'),
    Q('Vịnh nổi tiếng được UNESCO công nhận?', ['Vịnh Hạ Long', 'Vịnh Cam Ranh', 'Vịnh Vân Phong', 'Vịnh Xuân Đài'], 0, 'Hạ Long — di sản thiên nhiên thế giới.'),
    Q('Tài nguyên biển VN?', ['Cá, dầu khí, muối, du lịch', 'Không có gì', 'Chỉ cát', 'Chỉ đá'], 0, 'Tài nguyên đa dạng.'),
    Q('Chủ quyền biển đảo cần?', ['Bảo vệ, gìn giữ', 'Bỏ qua', 'Bán đi', 'Cho thuê'], 0, 'Trách nhiệm của mọi công dân.'),
  ]),

  M(24, 'Dân cư và dân tộc Việt Nam', [
    Q('Việt Nam có bao nhiêu dân tộc?', ['54 dân tộc', '5 dân tộc', '100 dân tộc', '10 dân tộc'], 0, '54 dân tộc anh em.'),
    Q('Dân tộc đông nhất?', ['Kinh', 'Tày', 'Thái', 'Mường'], 0, 'Kinh chiếm ~ 85% dân số.'),
    Q('Dân tộc thiểu số phân bố chủ yếu ở?', ['Miền núi', 'Đồng bằng', 'Đô thị', 'Bờ biển'], 0, 'Các vùng núi cao, trung du.'),
    Q('Dân số VN khoảng (cập nhật ~ 100 triệu)?', ['100 triệu', '10 triệu', '500 triệu', '1 tỷ'], 0, 'VN ~ 100 triệu người.'),
    Q('Đoàn kết các dân tộc là?', ['Sức mạnh của dân tộc Việt Nam', 'Không quan trọng', 'Lãng phí', 'Có hại'], 0, 'Tinh thần đại đoàn kết.'),
    Q('Mỗi dân tộc có?', ['Tiếng nói, phong tục, văn hoá riêng', 'Giống hệt nhau', 'Không có gì', 'Chỉ tên gọi khác'], 0, 'Đa dạng văn hoá.'),
  ]),

  M(25, 'Các vùng kinh tế', [
    Q('Việt Nam được chia thành mấy vùng kinh tế lớn?', ['6 hoặc 7 vùng', '2 vùng', '10 vùng', '100 vùng'], 0, 'Thường chia 6-7 vùng.'),
    Q('Vùng kinh tế trọng điểm Bắc Bộ trung tâm là?', ['Hà Nội — Hải Phòng', 'TP HCM', 'Đà Nẵng', 'Cần Thơ'], 0, 'Tam giác Hà Nội — Hải Phòng — Quảng Ninh.'),
    Q('Vùng kinh tế trọng điểm phía Nam trung tâm là?', ['TP HCM', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ'], 0, 'TP HCM — Bình Dương — Đồng Nai — Vũng Tàu.'),
    Q('ĐB sông Cửu Long là vựa?', ['Lúa gạo, trái cây, thuỷ sản', 'Cà phê', 'Cao su', 'Chè'], 0, 'Trọng điểm lúa, thuỷ sản, trái cây.'),
    Q('Tây Nguyên thế mạnh trồng?', ['Cà phê, cao su, hồ tiêu', 'Lúa nước', 'Lê, táo', 'Dâu tằm'], 0, 'Cây công nghiệp lâu năm.'),
    Q('Trung du và miền núi Bắc Bộ thế mạnh?', ['Cây chè, cây ăn quả, khoáng sản', 'Lúa nước hai vụ', 'Trồng cà phê', 'Trồng cao su'], 0, 'Cây công nghiệp, khoáng sản.'),
  ]),

  M(26, 'Châu Á — Châu Âu (sơ lược)', [
    Q('Châu Á là châu lục?', ['Lớn nhất thế giới', 'Nhỏ nhất', 'Lạnh nhất', 'Nóng nhất'], 0, 'Châu Á — châu lục lớn nhất.'),
    Q('Việt Nam thuộc châu?', ['Á', 'Âu', 'Phi', 'Mỹ'], 0, 'Việt Nam ở châu Á.'),
    Q('Núi cao nhất châu Á và thế giới?', ['Everest (Himalaya)', 'Phan Xi Păng', 'Phú Sĩ', 'Alps'], 0, 'Everest 8 848 m.'),
    Q('Châu Âu nổi tiếng với?', ['Khí hậu ôn đới, công nghiệp phát triển', 'Sa mạc khô', 'Băng tuyết bao phủ', 'Rừng nhiệt đới'], 0, 'Châu Âu — ôn đới, công nghiệp.'),
    Q('Sông dài nhất châu Âu?', ['Sông Volga', 'Sông Mê Kông', 'Sông Hằng', 'Sông Nile'], 0, 'Volga ở Nga — dài nhất châu Âu.'),
    Q('Thủ đô nước Pháp?', ['Paris', 'London', 'Berlin', 'Madrid'], 0, 'Paris.'),
  ]),

  M(27, 'Châu Phi — Châu Mỹ', [
    Q('Châu Phi nổi tiếng?', ['Hoang mạc Sahara lớn nhất, có nhiều động vật hoang dã', 'Nhiều băng tuyết', 'Nhiều núi cao nhất', 'Ít người'], 0, 'Sahara — hoang mạc lớn nhất.'),
    Q('Sông dài nhất thế giới?', ['Sông Nile', 'Sông Amazon', 'Sông Mê Kông', 'Sông Volga'], 0, 'Sông Nile (~ 6 650 km).'),
    Q('Châu Mỹ chia thành?', ['Bắc Mỹ và Nam Mỹ', 'Đông Mỹ và Tây Mỹ', 'Mỹ và Canada', 'Mỹ và Mexico'], 0, 'Bắc Mỹ + Nam Mỹ.'),
    Q('Quốc gia lớn nhất Nam Mỹ?', ['Brazil', 'Argentina', 'Peru', 'Colombia'], 0, 'Brazil — diện tích lớn nhất.'),
    Q('Quốc gia có nền kinh tế đứng đầu thế giới?', ['Hoa Kỳ (Mỹ)', 'Pháp', 'Việt Nam', 'Lào'], 0, 'Hoa Kỳ — nền kinh tế số 1 thế giới.'),
    Q('Rừng Amazon nằm ở?', ['Nam Mỹ', 'Bắc Mỹ', 'Châu Phi', 'Châu Á'], 0, 'Rừng Amazon — "lá phổi xanh".'),
  ]),

  M(28, 'Châu Đại Dương — Châu Nam Cực', [
    Q('Châu Đại Dương gồm?', ['Australia, New Zealand và nhiều đảo Thái Bình Dương', 'Chỉ có một nước', 'Chỉ là đảo nhỏ', 'Không có nước'], 0, 'Châu Đại Dương — nhiều quốc đảo.'),
    Q('Quốc gia lớn nhất châu Đại Dương?', ['Australia', 'New Zealand', 'Fiji', 'Tonga'], 0, 'Australia.'),
    Q('Châu Nam Cực là?', ['Châu lục lạnh nhất, có băng phủ quanh năm', 'Châu lục nóng nhất', 'Đông dân nhất', 'Nhiều rừng nhất'], 0, 'Lạnh nhất, băng tuyết bao phủ.'),
    Q('Châu Nam Cực có dân cư sinh sống thường xuyên?', ['Không, chỉ có nhà khoa học nghiên cứu', 'Hàng triệu dân', 'Hàng ngàn dân', 'Vài chục triệu'], 0, 'Chỉ có trạm nghiên cứu khoa học.'),
    Q('Động vật đặc trưng châu Nam Cực?', ['Chim cánh cụt', 'Sư tử', 'Voi', 'Gấu nâu'], 0, 'Chim cánh cụt.'),
    Q('Động vật đặc trưng Australia?', ['Kangaroo (chuột túi), koala', 'Gấu trúc', 'Sư tử', 'Voi'], 0, 'Kangaroo, koala đặc trưng Úc.'),
  ]),

  M(29, 'Khoáng sản Việt Nam', [
    Q('Khoáng sản chính của VN?', ['Than đá, dầu mỏ, sắt, apatit, bô-xít', 'Vàng nhiều như cát', 'Kim cương', 'Uranium'], 0, 'Một số loại khoáng sản chính.'),
    Q('Than đá tập trung ở?', ['Quảng Ninh', 'Cà Mau', 'Đà Nẵng', 'Lâm Đồng'], 0, 'Quảng Ninh — vùng than nổi tiếng.'),
    Q('Dầu mỏ và khí đốt khai thác ở?', ['Thềm lục địa phía Nam (Bà Rịa — Vũng Tàu)', 'Tây Bắc', 'Tây Nguyên', 'Bắc Bộ'], 0, 'Vùng biển phía Nam.'),
    Q('Bô-xít có nhiều ở?', ['Tây Nguyên', 'Bắc Bộ', 'Đồng bằng', 'Biển'], 0, 'Tây Nguyên có trữ lượng bô-xít lớn.'),
    Q('Khai thác khoáng sản cần?', ['Hợp lý, tiết kiệm, bảo vệ môi trường', 'Khai thác triệt để', 'Bỏ phí', 'Không khai thác'], 0, 'Phát triển bền vững.'),
    Q('Khoáng sản là tài nguyên?', ['Không tái tạo', 'Tái tạo nhanh', 'Vô tận', 'Có thể tạo ra'], 0, 'Cần hàng triệu năm hình thành.'),
  ]),

  M(30, 'Nông nghiệp Việt Nam', [
    Q('Cây lương thực chính của VN?', ['Lúa gạo', 'Lúa mì', 'Ngô', 'Khoai'], 0, 'Cây lương thực chính: lúa.'),
    Q('VN là nước xuất khẩu gạo lớn?', ['Top thế giới (top 3)', 'Không xuất khẩu', 'Cuối thế giới', 'Chỉ nhập khẩu'], 0, 'Top 3 thế giới về xuất khẩu gạo.'),
    Q('Cây công nghiệp lâu năm chính?', ['Cà phê, cao su, chè, hồ tiêu', 'Lúa', 'Mía', 'Đậu phộng'], 0, 'Cây công nghiệp lâu năm chủ lực.'),
    Q('Vùng trồng cà phê nổi tiếng?', ['Tây Nguyên', 'ĐB sông Hồng', 'Bắc Bộ', 'Trung Bộ ven biển'], 0, 'Tây Nguyên — vương quốc cà phê.'),
    Q('Vùng trồng chè nổi tiếng?', ['Trung du, miền núi Bắc Bộ (Thái Nguyên)', 'Tây Nguyên', 'Cà Mau', 'TP HCM'], 0, 'Thái Nguyên nổi tiếng chè.'),
    Q('Ngành chăn nuôi chính?', ['Bò, lợn, gà, vịt', 'Hổ', 'Sư tử', 'Voi'], 0, 'Gia súc, gia cầm.'),
  ]),

  M(31, 'Công nghiệp Việt Nam', [
    Q('Ngành công nghiệp quan trọng của VN?', ['Dệt may, da giày, điện tử, chế biến', 'Đóng tàu vũ trụ', 'Tàu sân bay', 'Vũ khí hạt nhân'], 0, 'Dệt may, da giày, điện tử…'),
    Q('Trung tâm công nghiệp lớn nhất?', ['TP HCM', 'Đà Nẵng', 'Cần Thơ', 'Vinh'], 0, 'TP HCM — trung tâm lớn nhất.'),
    Q('Sản phẩm xuất khẩu chủ lực của VN?', ['Điện thoại, dệt may, gạo, thuỷ sản, cà phê', 'Vàng', 'Kim cương', 'Đồ cổ'], 0, 'Hàng xuất khẩu chủ lực.'),
    Q('Khu công nghiệp tập trung ở?', ['Quanh các thành phố lớn (HN, HCM, Đà Nẵng…)', 'Sa mạc', 'Núi cao', 'Trên biển'], 0, 'Gần đô thị, hạ tầng tốt.'),
    Q('Phát triển công nghiệp giúp?', ['Tăng năng suất, thu nhập, hiện đại hoá', 'Lãng phí', 'Có hại', 'Không có lợi'], 0, 'Đẩy mạnh CNH — HĐH.'),
    Q('Công nghiệp cần?', ['Đi đôi với bảo vệ môi trường', 'Phá môi trường', 'Không quan tâm môi trường', 'Bỏ qua'], 0, 'Phát triển xanh, bền vững.'),
  ]),

  M(32, 'Giao thông — Du lịch Việt Nam', [
    Q('Quốc lộ chính nối Bắc — Nam?', ['Quốc lộ 1A', 'Quốc lộ 5', 'Quốc lộ 6', 'Đường Hồ Chí Minh trên bộ'], 0, 'QL 1A xuyên Việt.'),
    Q('Sân bay quốc tế lớn nhất VN?', ['Tân Sơn Nhất (TP HCM)', 'Nội Bài (HN)', 'Đà Nẵng', 'Phú Quốc'], 0, 'Tân Sơn Nhất — đông khách nhất.'),
    Q('Cảng biển lớn nhất VN?', ['Cảng Sài Gòn / Hải Phòng / Cái Mép', 'Cảng Cà Mau', 'Cảng Quy Nhơn', 'Cảng Vũng Áng'], 0, 'Các cảng chính.'),
    Q('Di sản thiên nhiên thế giới ở VN?', ['Vịnh Hạ Long, Phong Nha — Kẻ Bàng', 'Đồi cỏ', 'Sân vận động', 'Toà nhà'], 0, 'Di sản thiên nhiên UNESCO.'),
    Q('Di sản văn hoá thế giới ở VN?', ['Cố đô Huế, Phố cổ Hội An, Mỹ Sơn, Hoàng thành Thăng Long', 'Sa Pa', 'Đà Lạt', 'Phú Quốc'], 0, 'Di sản văn hoá UNESCO.'),
    Q('Du lịch VN đem lại?', ['Việc làm, thu nhập, quảng bá đất nước', 'Lãng phí', 'Phá hoại', 'Vô ích'], 0, 'Ngành kinh tế quan trọng.'),
  ]),

  M(33, 'Ôn tập — Lịch sử Việt Nam', [
    Q('Năm 1858 sự kiện gì?', ['Pháp xâm lược VN', 'Đảng CSVN ra đời', 'CMT8', 'Đại thắng mùa Xuân'], 0, '1858: Pháp nổ súng xâm lược.'),
    Q('Bác Hồ ra đi tìm đường cứu nước?', ['5/6/1911', '3/2/1930', '2/9/1945', '7/5/1954'], 0, 'Ngày 5/6/1911.'),
    Q('Tuyên ngôn Độc lập?', ['2/9/1945', '3/2/1930', '7/5/1954', '30/4/1975'], 0, '2/9/1945.'),
    Q('Chiến thắng Điện Biên Phủ?', ['7/5/1954', '2/9/1945', '30/4/1975', '3/2/1930'], 0, '7/5/1954.'),
    Q('Thống nhất đất nước?', ['30/4/1975', '7/5/1954', '2/9/1945', '21/7/1954'], 0, '30/4/1975.'),
    Q('Đổi mới đất nước bắt đầu năm?', ['1986', '1975', '1954', '1945'], 0, 'Đại hội VI (12/1986).'),
  ]),

  M(34, 'Ôn tập — Địa lý Việt Nam và thế giới', [
    Q('Việt Nam thuộc châu?', ['Á', 'Âu', 'Phi', 'Mỹ'], 0, 'Châu Á.'),
    Q('Hình dáng VN?', ['Chữ S', 'Chữ O', 'Chữ U', 'Chữ I'], 0, 'Hình chữ S.'),
    Q('Khí hậu VN?', ['Nhiệt đới gió mùa', 'Ôn đới', 'Hàn đới', 'Sa mạc'], 0, 'Nhiệt đới ẩm gió mùa.'),
    Q('Núi cao nhất VN?', ['Phan Xi Păng', 'Bà Đen', 'Tản Viên', 'Bạch Mã'], 0, 'Phan Xi Păng 3 143 m.'),
    Q('Sông dài nhất chảy qua VN?', ['Mê Kông (Cửu Long)', 'Hồng', 'Đà', 'Mã'], 0, 'Sông Mê Kông.'),
    Q('Châu lục nhỏ nhất?', ['Châu Đại Dương', 'Châu Phi', 'Châu Á', 'Châu Mỹ'], 0, 'Châu Đại Dương nhỏ nhất.'),
  ]),

  M(35, 'Ôn cuối cấp — Đổi mới đất nước', [
    Q('Đại hội nào khởi xướng công cuộc đổi mới?', ['Đại hội VI (1986)', 'Đại hội I', 'Đại hội X', 'Đại hội XII'], 0, 'Đại hội VI (12/1986).'),
    Q('Đổi mới nhằm?', ['Đưa đất nước thoát nghèo, hội nhập, phát triển', 'Đóng cửa', 'Cô lập', 'Bỏ phát triển'], 0, 'Mục tiêu đổi mới.'),
    Q('VN gia nhập ASEAN năm?', ['1995', '1986', '2007', '1975'], 0, 'Năm 1995.'),
    Q('VN gia nhập WTO năm?', ['2007', '1995', '1986', '2000'], 0, 'Năm 2007.'),
    Q('Thành tựu lớn của đổi mới?', ['Tăng trưởng kinh tế, giảm nghèo, hội nhập quốc tế', 'Không có gì', 'Suy thoái', 'Mất chủ quyền'], 0, 'Đời sống nhân dân được nâng cao.'),
    Q('Trách nhiệm của học sinh trong công cuộc đổi mới?', ['Học tập tốt, rèn luyện đạo đức, yêu Tổ quốc', 'Không cần làm gì', 'Đi chơi', 'Bỏ học'], 0, 'Học tốt — đóng góp tương lai.'),
  ]),
];

export const P5LSDL_SCENARIOS = indexBy(P5LSDL_WEEKS);
