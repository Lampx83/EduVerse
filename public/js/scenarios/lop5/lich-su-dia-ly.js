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
    Q('Thực dân Pháp nổ súng xâm lược Việt Nam năm nào?', ['1945', '1884', '1858', '1930'], 2, 'Tháng 9/1858, Pháp tấn công Đà Nẵng.'),
    Q('Pháp nổ súng đầu tiên ở?', ['Sài Gòn', 'Hà Nội', 'Huế (kinh đô triều Nguyễn)', 'Đà Nẵng'], 3, 'Đà Nẵng là nơi Pháp đổ bộ đầu tiên.'),
    Q('Triều đình nhà nào đã ký các hiệp ước đầu hàng?', ['Triều Lý (thế kỉ XI)', 'Triều Trần (thế kỉ XIII)', 'Triều Hậu Lê (thế kỉ XV)', 'Nguyễn'], 3, 'Triều Nguyễn ký các hiệp ước.'),
    Q('Hiệp ước nào đánh dấu Việt Nam thành nước thuộc địa?', ['Versailles', 'Patenotre (1884)', 'Nhâm Tuất (1862)', 'Giáp Tuất (1874)'], 1, 'Hiệp ước Patenotre 1884.'),
    Q('Nước ta bị chia thành mấy kì dưới thời Pháp thuộc?', ['3', '2', '4', '5'], 0, 'Bắc Kỳ, Trung Kỳ, Nam Kỳ.'),
    Q('Phản ứng của nhân dân ta trước cuộc xâm lược?', ['Không quan tâm', 'Ủng hộ Pháp', 'Kiên quyết đứng lên kháng chiến', 'Đầu hàng hoàn toàn'], 2, 'Nhân dân khắp nơi đứng lên kháng chiến.'),
  ]),

  M(2, 'Trương Định — Bình Tây Đại nguyên soái', [
    Q('Trương Định là người lãnh đạo nghĩa quân ở?', ['Nam Kỳ (Gò Công)', 'Bắc Kỳ', 'Hà Nội', 'Trung Kỳ'], 0, 'Trương Định ở Gò Công (Nam Kỳ).'),
    Q('Khi triều đình ra lệnh giải binh, Trương Định?', ['Hợp tác với Pháp', 'Bỏ trốn', 'Đầu hàng', 'Tiếp tục cùng nhân dân đánh giặc'], 3, 'Ông chọn đứng về phía nhân dân.'),
    Q('Nhân dân tôn xưng Trương Định là?', ['Bình Tây Đại nguyên soái', 'Hoàng đế', 'Quốc trưởng', 'Đại tướng'], 0, 'Nhân dân tôn ông là "Bình Tây Đại nguyên soái".'),
    Q('Trương Định hi sinh năm?', ['1858', '1864', '1884', '1885'], 1, 'Trương Định hi sinh năm 1864.'),
    Q('Hình ảnh Trương Định thể hiện?', ['Sự phản bội', 'Lòng yêu nước, gắn bó với dân', 'Sự nhút nhát', 'Sự bất hợp tác với dân'], 1, 'Tinh thần yêu nước, vì dân.'),
    Q('Cuộc khởi nghĩa Trương Định thuộc?', ['Phong trào Cần Vương', 'Phong trào Đông Du', 'Phong trào Văn Thân', 'Phong trào kháng Pháp ở Nam Kỳ'], 3, 'Kháng Pháp ở Nam Kỳ.'),
  ]),

  M(3, 'Nguyễn Trường Tộ — Mong muốn canh tân', [
    Q('Nguyễn Trường Tộ chủ trương?', ['Đầu hàng Pháp', 'Bài trừ ngoại quốc', 'Bế quan toả cảng', 'Canh tân (đổi mới) đất nước'], 3, 'Ông đề xuất canh tân.'),
    Q('Nguyễn Trường Tộ là người tỉnh?', ['Nghệ An', 'Thanh Hoá', 'Hà Tĩnh', 'Quảng Bình'], 0, 'Ông quê Nghệ An.'),
    Q('Đề nghị canh tân được vua nào tiếp nhận?', ['Hàm Nghi', 'Minh Mạng', 'Tự Đức (nhưng không thực hiện)', 'Gia Long'], 2, 'Vua Tự Đức không thực hiện đề nghị.'),
    Q('Lĩnh vực canh tân ông đề xuất?', ['Cấm sách', 'Tăng thuế', 'Mở rộng giao thương, học khoa học kỹ thuật, cải cách giáo dục', 'Đánh giặc'], 2, 'Cải cách toàn diện.'),
    Q('Vì sao đề nghị canh tân không thành?', ['Dân không ủng hộ', 'Triều đình bảo thủ, không hành động kịp', 'Pháp ngăn cản', 'Tự ông rút lui'], 1, 'Triều đình lúc đó bảo thủ.'),
    Q('Bài học từ Nguyễn Trường Tộ?', ['Phải bài trừ', 'Phải đầu hàng', 'Phải giữ nguyên', 'Phải biết đổi mới để mạnh lên'], 3, 'Tinh thần đổi mới, học hỏi.'),
  ]),

  M(4, 'Phong trào Cần Vương — Tôn Thất Thuyết', [
    Q('Phong trào Cần Vương do ai khởi xướng?', ['Trương Định', 'Phan Châu Trinh', 'Phan Bội Châu', 'Tôn Thất Thuyết nhân danh vua Hàm Nghi'], 3, 'Cần Vương = giúp vua đánh giặc.'),
    Q('"Cần Vương" có nghĩa?', ['Đầu hàng vua', 'Theo Pháp', 'Giúp vua đánh giặc', 'Lật vua'], 2, 'Cần = giúp; Vương = vua.'),
    Q('Phong trào Cần Vương bắt đầu năm?', ['1930', '1885', '1884', '1858'], 1, 'Chiếu Cần Vương ban năm 1885.'),
    Q('Vua nào ban Chiếu Cần Vương?', ['Đồng Khánh', 'Bảo Đại', 'Hàm Nghi', 'Tự Đức'], 2, 'Vua Hàm Nghi.'),
    Q('Một cuộc khởi nghĩa tiêu biểu trong phong trào?', ['Khởi nghĩa Nam Kỳ', 'Khởi nghĩa Ba Đình (CMT8)', 'Khởi nghĩa Hương Khê (Phan Đình Phùng)', 'Khởi nghĩa Yên Bái'], 2, 'Hương Khê — Phan Đình Phùng.'),
    Q('Phong trào Cần Vương thất bại do?', ['Thiếu sự lãnh đạo thống nhất, vũ khí kém', 'Vua đầu hàng', 'Pháp không đánh', 'Dân không tham gia'], 0, 'Hạn chế của phong trào phong kiến.'),
  ]),

  M(5, 'Phan Bội Châu — Phong trào Đông Du', [
    Q('Phan Bội Châu chủ trương?', ['Đưa thanh niên sang Nhật học, đánh Pháp giành độc lập', 'Hợp tác với Pháp', 'Đầu hàng', 'Giữ nguyên'], 0, 'Phong trào Đông Du.'),
    Q('Phong trào Đông Du diễn ra khoảng?', ['1858', '1885', '1930', '1905–1908'], 3, 'Phan Bội Châu khởi xướng từ 1905.'),
    Q('Đông Du là?', ['Sang Mỹ du học', 'Sang Trung Quốc du học', 'Sang Pháp du học', 'Sang Nhật du học'], 3, 'Đông Du = du học sang Nhật.'),
    Q('Phan Bội Châu quê ở?', ['Hà Nội', 'Nghệ An', 'Sài Gòn', 'Thừa Thiên Huế'], 1, 'Phan Bội Châu quê Nghệ An.'),
    Q('Tổ chức Phan Bội Châu lập?', ['Đoàn TNCS', 'Việt Nam Quang Phục Hội', 'Hội Liên hiệp Phụ nữ', 'Đảng Cộng sản'], 1, 'VN Quang phục hội (1912).'),
    Q('Vì sao phong trào Đông Du thất bại?', ['Học sinh không học', 'Không có người tham gia', 'Nhật Bản câu kết với Pháp, trục xuất du học sinh', 'Phan Bội Châu bỏ cuộc'], 2, 'Nhật trục xuất du học sinh Việt Nam.'),
  ]),

  M(6, 'Phan Châu Trinh — Duy tân, dân chủ', [
    Q('Phan Châu Trinh chủ trương?', ['Duy tân, dân chủ, nâng cao dân trí', 'Đầu hàng Pháp', 'Cầu viện Trung Quốc', 'Bạo động vũ trang'], 0, 'Khai dân trí, chấn dân khí, hậu dân sinh.'),
    Q('"Khai dân trí" là?', ['Đóng cửa trường', 'Cấm dân nói', 'Cấm dân học', 'Mở mang trí tuệ cho dân'], 3, 'Nâng cao tri thức cho người dân.'),
    Q('Phan Châu Trinh quê ở?', ['Quảng Nam', 'Quảng Ngãi', 'Quảng Bình', 'Quảng Trị'], 0, 'Quê ở Quảng Nam.'),
    Q('Phong trào của Phan Châu Trinh được gọi là?', ['Yên Bái', 'Đông Du', 'Cần Vương', 'Duy Tân'], 3, 'Phong trào Duy Tân (1906).'),
    Q('Sự khác biệt với Phan Bội Châu?', ['Cùng chủ trương bạo động', 'Phan Châu Trinh chủ trương ôn hoà, không bạo động', 'Cùng cầu viện Nhật', 'Cùng đầu hàng'], 1, 'Khác biệt phương pháp đấu tranh.'),
    Q('Phong trào Duy Tân kết thúc do?', ['Thắng lợi', 'Tự giải tán', 'Dân không tham gia', 'Pháp đàn áp, bắt bớ'], 3, 'Pháp đàn áp khốc liệt.'),
  ]),

  M(7, 'Nguyễn Tất Thành ra đi tìm đường cứu nước', [
    Q('Nguyễn Tất Thành (Bác Hồ) ra đi tìm đường cứu nước ngày?', ['5/6/1911', '2/9/1945', '30/4/1975', '19/5/1890'], 0, 'Ngày 5/6/1911 tại bến cảng Nhà Rồng.'),
    Q('Bác Hồ ra đi từ bến cảng nào?', ['Hải Phòng', 'Hạ Long', 'Nhà Rồng (Sài Gòn)', 'Đà Nẵng'], 2, 'Bến Nhà Rồng — Sài Gòn.'),
    Q('Khi đó Bác Hồ làm việc với danh nghĩa?', ['Phụ bếp trên tàu', 'Khách du lịch', 'Thuyền trưởng', 'Sĩ quan'], 0, 'Bác làm phụ bếp với tên Văn Ba.'),
    Q('Tên dùng khi đó của Bác?', ['Nguyễn Ái Quốc', 'Nguyễn Sinh Cung', 'Hồ Chí Minh', 'Văn Ba'], 3, 'Trên tàu Bác lấy tên Văn Ba.'),
    Q('Mục đích ra đi của Bác?', ['Du học', 'Tìm con đường cứu nước', 'Buôn bán', 'Du lịch'], 1, 'Tìm đường giải phóng dân tộc.'),
    Q('Bác đã đi qua những châu lục nào?', ['Chỉ châu Á', 'Chỉ châu Mỹ', 'Á, Âu, Phi, Mỹ', 'Chỉ châu Âu'], 2, 'Bác đã đi nhiều châu lục.'),
  ]),

  M(8, 'Đảng Cộng sản Việt Nam ra đời (3/2/1930)', [
    Q('Đảng Cộng sản Việt Nam ra đời ngày?', ['5/6/1911', '3/2/1930', '7/5/1954', '2/9/1945'], 1, 'Ngày 3/2/1930.'),
    Q('Ai chủ trì hội nghị thành lập Đảng?', ['Lê Hồng Phong', 'Nguyễn Ái Quốc', 'Hà Huy Tập', 'Trần Phú'], 1, 'Nguyễn Ái Quốc chủ trì.'),
    Q('Hội nghị thành lập Đảng diễn ra ở?', ['Hà Nội', 'Sài Gòn', 'Hương Cảng (Hong Kong)', 'Quảng Châu (Trung Quốc)'], 2, 'Tại Hương Cảng (Cửu Long), Trung Quốc.'),
    Q('Đảng Cộng sản Việt Nam ra đời từ sự hợp nhất của?', ['Triều đình', '5 tổ chức công đoàn', '2 đảng quốc tế', '3 tổ chức cộng sản ở Việt Nam'], 3, 'Hợp nhất Đông Dương CSĐ, An Nam CSĐ, Đông Dương CSLĐ.'),
    Q('Tổng Bí thư đầu tiên của Đảng?', ['Nguyễn Ái Quốc', 'Trần Phú', 'Trường Chinh', 'Lê Hồng Phong'], 1, 'Tổng Bí thư đầu tiên: Trần Phú (10/1930).'),
    Q('Sự ra đời của Đảng có ý nghĩa?', ['Chỉ là sự kiện địa phương ở Nam Bộ', 'Bước ngoặt vĩ đại của cách mạng Việt Nam', 'Không có ý nghĩa', 'Chỉ là một sự kiện nhỏ'], 1, 'Bước ngoặt vĩ đại.'),
  ]),

  M(9, 'Xô viết Nghệ — Tĩnh (1930–1931)', [
    Q('Xô viết Nghệ — Tĩnh diễn ra ở?', ['Nam Kỳ', 'Bắc Kỳ', 'Nghệ An và Hà Tĩnh', 'Trung Kỳ ven biển'], 2, 'Nghệ An và Hà Tĩnh.'),
    Q('Xô viết Nghệ — Tĩnh xảy ra năm?', ['1885', '1945', '1954', '1930–1931'], 3, 'Cao trào 1930–1931.'),
    Q('Hình thức đấu tranh chính?', ['Biểu tình của công nhân, nông dân', 'Cầu viện', 'Du học', 'Đầu hàng'], 0, 'Biểu tình và đấu tranh quần chúng.'),
    Q('Tại sao gọi là "Xô viết"?', ['Vì ở nước Nga', 'Vì gọi tuỳ ý', 'Vì thiết lập chính quyền cách mạng kiểu Xô viết', 'Vì có người Nga'], 2, 'Lập chính quyền Xô viết tại các làng xã.'),
    Q('Kết quả phong trào?', ['Không có ý nghĩa', 'Lập nhà nước mới', 'Thắng lợi hoàn toàn', 'Bị Pháp đàn áp khốc liệt nhưng có ý nghĩa lớn'], 3, 'Diễn tập đầu tiên cho cách mạng Việt Nam.'),
    Q('Ý nghĩa Xô viết Nghệ — Tĩnh?', ['Thắng lợi', 'Không có gì', 'Phong trào nhỏ lẻ', 'Khẳng định sức mạnh của giai cấp công — nông'], 3, 'Sức mạnh công nông lần đầu được khẳng định.'),
  ]),

  M(10, 'Cách mạng Tháng Tám (1945)', [
    Q('Cách mạng Tháng Tám thành công năm?', ['1954', '1975', '1945', '1930'], 2, 'Tháng 8/1945.'),
    Q('Cách mạng Tháng Tám diễn ra trong bối cảnh?', ['Nhật đầu hàng Đồng minh', 'Pháp xâm lược', 'Mỹ tham chiến', 'Trung Quốc xâm lược'], 0, 'Cơ hội ngàn năm có một.'),
    Q('Hà Nội khởi nghĩa ngày?', ['23/8/1945', '19/8/1945', '2/9/1945', '25/8/1945'], 1, 'Tổng khởi nghĩa Hà Nội 19/8.'),
    Q('Lãnh tụ tối cao của CMT8?', ['Võ Nguyên Giáp', 'Hồ Chí Minh', 'Trần Phú', 'Phạm Văn Đồng'], 1, 'Chủ tịch Hồ Chí Minh.'),
    Q('Kết quả CMT8?', ['Lật đổ chế độ thực dân — phong kiến, lập nước Việt Nam Dân chủ Cộng hoà', 'Bị đàn áp', 'Pháp tái chiếm và thiết lập chế độ thuộc địa', 'Không có kết quả'], 0, 'Cách mạng thành công.'),
    Q('Tổ chức lãnh đạo CMT8?', ['Triều Nguyễn', 'Quân đội phát xít Nhật', 'Mặt trận Việt Minh do ĐCS lãnh đạo', 'Chính quyền thực dân Pháp'], 2, 'Việt Minh do Đảng lãnh đạo.'),
  ]),

  M(11, 'Tuyên ngôn Độc lập 2/9/1945', [
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['2/9/1945', '19/5/1890', '5/6/1911', '7/5/1954'], 0, 'Ngày 2/9/1945.'),
    Q('Bác Hồ đọc Tuyên ngôn tại?', ['Sài Gòn', 'Kì Đài Huế', 'Quảng trường Ba Đình (Hà Nội)', 'Đà Nẵng'], 2, 'Quảng trường Ba Đình, Hà Nội.'),
    Q('Tuyên ngôn Độc lập khai sinh nước?', ['Cộng hoà XHCN Việt Nam', 'Việt Nam Dân chủ Cộng hoà', 'Đại Việt', 'Đại Nam'], 1, 'Việt Nam Dân chủ Cộng hoà.'),
    Q('Mở đầu Tuyên ngôn trích dẫn?', ['Sách Khổng', 'Hiệp ước', 'Tuyên ngôn Độc lập Mỹ và Nhân quyền — Dân quyền Pháp', 'Kinh Phật'], 2, 'Trích 2 tuyên ngôn nổi tiếng.'),
    Q('Câu mở đầu Tuyên ngôn?', ['"Một nghìn năm…"', '"Hỡi đồng bào…"', '"Tất cả mọi người sinh ra đều có quyền bình đẳng…"', '"Việt Nam dân tộc"'], 2, 'Trích từ tuyên ngôn Mỹ.'),
    Q('Ý nghĩa Tuyên ngôn?', ['Tuyên bố hoà bình', 'Tuyên bố chiến tranh', 'Khẳng định nền độc lập của Việt Nam trước thế giới', 'Không có ý nghĩa'], 2, 'Văn kiện lịch sử khai sinh nước.'),
  ]),

  M(12, 'Kháng chiến chống Pháp (1945–1954)', [
    Q('Toàn quốc kháng chiến bắt đầu ngày?', ['7/5/1954', '19/12/1946', '20/7/1954', '2/9/1945'], 1, 'Lời kêu gọi 19/12/1946.'),
    Q('Ai ra Lời kêu gọi toàn quốc kháng chiến?', ['Phạm Văn Đồng', 'Võ Nguyên Giáp', 'Chủ tịch Hồ Chí Minh', 'Trường Chinh'], 2, 'Bác Hồ ra lời kêu gọi.'),
    Q('Câu nổi tiếng trong Lời kêu gọi?', ['"Mỗi người dân là một chiến sĩ"', '"Không có gì quý hơn độc lập tự do"', '"Thà hi sinh tất cả, chứ nhất định không chịu mất nước…"', '"Vì lợi ích trăm năm"'], 2, 'Câu nổi tiếng của Bác.'),
    Q('Quân đội Việt Nam giai đoạn này tên?', ['Bộ đội Cụ Hồ', 'Quân đội Quốc gia', 'Vệ binh', 'Vệ quốc đoàn → Quân đội Nhân dân Việt Nam'], 3, 'Tên gọi qua các giai đoạn.'),
    Q('Chiến thắng Việt Bắc Thu — Đông năm?', ['1947', '1954', '1975', '1945'], 0, 'Chiến thắng Việt Bắc thu đông 1947.'),
    Q('Chiến dịch Biên Giới năm?', ['1947', '1945', '1950', '1954'], 2, 'Chiến dịch Biên giới 1950.'),
  ]),

  M(13, 'Chiến thắng Điện Biên Phủ (7/5/1954)', [
    Q('Chiến thắng Điện Biên Phủ ngày?', ['2/9/1945', '7/5/1954', '30/4/1975', '19/12/1946'], 1, 'Ngày 7/5/1954.'),
    Q('Chỉ huy mặt trận Điện Biên Phủ?', ['Hồ Chí Minh', 'Đại tướng Võ Nguyên Giáp', 'Phạm Văn Đồng', 'Trường Chinh'], 1, 'Tổng tư lệnh: Võ Nguyên Giáp.'),
    Q('Điện Biên Phủ thuộc tỉnh?', ['Điện Biên', 'Lai Châu', 'Sơn La', 'Lào Cai'], 0, 'Thuộc tỉnh Điện Biên (trước thuộc Lai Châu).'),
    Q('Khẩu hiệu trong chiến dịch?', ['"Vì học tập"', '"Vì hoà bình"', '"Tất cả cho tiền tuyến, tất cả để chiến thắng"', '"Vì nhân dân"'], 2, 'Tinh thần toàn dân chi viện.'),
    Q('Chiến thắng Điện Biên Phủ buộc Pháp?', ['Đầu hàng', 'Ký Hiệp định Giơ-ne-vơ, rút khỏi Đông Dương', 'Tiếp tục đánh', 'Bỏ thuộc địa'], 1, 'Pháp ký Giơ-ne-vơ 21/7/1954.'),
    Q('Anh hùng La Văn Cầu nổi tiếng vì?', ['Là phi công', 'Bắn rơi máy bay', 'Bắt sống chỉ huy', 'Nhờ đồng đội chặt cánh tay để tiếp tục chiến đấu'], 3, 'Tấm gương dũng cảm trong chiến dịch.'),
  ]),

  M(14, 'Hiệp định Giơ-ne-vơ — đất nước chia cắt', [
    Q('Hiệp định Giơ-ne-vơ ký năm?', ['1945', '1954', '1975', '1973'], 1, 'Ngày 21/7/1954.'),
    Q('Hiệp định chia cắt đất nước ở vĩ tuyến?', ['16', '18', '17', '20'], 2, 'Vĩ tuyến 17 (sông Bến Hải).'),
    Q('Sông nào là giới tuyến quân sự tạm thời?', ['Sông Cửu Long', 'Sông Hồng', 'Sông Mã', 'Sông Bến Hải'], 3, 'Sông Bến Hải.'),
    Q('Theo Hiệp định, sau 2 năm sẽ?', ['Chiến tranh tiếp', 'Đầu hàng', 'Tổng tuyển cử thống nhất đất nước', 'Chia luôn'], 2, 'Tổng tuyển cử 1956 — bị Mỹ — Diệm phá hoại.'),
    Q('Cầu nào nối hai bờ giới tuyến?', ['Cầu Tràng Tiền', 'Cầu Long Biên', 'Cầu Mỹ Thuận', 'Cầu Hiền Lương'], 3, 'Cầu Hiền Lương trên sông Bến Hải.'),
    Q('Vì sao đất nước chưa thống nhất sau 1954?', ['Pháp ngăn cản', 'Liên Xô can thiệp', 'Mỹ — Diệm phá hoại tổng tuyển cử', 'Dân không muốn'], 2, 'Mỹ — Diệm phá vỡ Hiệp định.'),
  ]),

  M(15, 'Kháng chiến chống Mỹ — giai đoạn đầu', [
    Q('Cuộc kháng chiến chống Mỹ ở miền Nam Việt Nam?', ['1930–1945', '1945–1954', '1858–1884', '1954–1975'], 3, 'Hơn 20 năm kháng chiến.'),
    Q('Phong trào Đồng Khởi năm?', ['1968', '1954', '1959–1960', '1945'], 2, 'Phong trào Đồng Khởi (1959–1960) ở Bến Tre.'),
    Q('Đồng Khởi nổ ra ở tỉnh?', ['Cà Mau', 'An Giang', 'Sài Gòn', 'Bến Tre'], 3, 'Bắt đầu ở Bến Tre.'),
    Q('Mặt trận lãnh đạo cách mạng miền Nam?', ['Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (1960)', 'Đoàn Thanh niên', 'Mặt trận Việt Minh', 'Hội Nông dân'], 0, 'Thành lập 20/12/1960.'),
    Q('Đường mòn nối hậu phương — tiền tuyến?', ['Đường biển', 'Đường Trường Sơn (Hồ Chí Minh)', 'Đường 1A', 'Đường ray'], 1, 'Đường Trường Sơn huyền thoại.'),
    Q('Đường Trường Sơn còn gọi là?', ['Đường biên giới', 'Đường sắt Bắc — Nam', 'Đường ven biển', 'Đường Hồ Chí Minh'], 3, 'Đường Hồ Chí Minh.'),
  ]),

  M(16, 'Tết Mậu Thân 1968', [
    Q('Tết Mậu Thân là năm?', ['1975', '1968', '1958', '1954'], 1, 'Năm 1968.'),
    Q('Đặc điểm của cuộc tổng tiến công Mậu Thân?', ['Chỉ ở Huế', 'Chỉ đánh nông thôn', 'Đồng loạt đánh vào nhiều đô thị miền Nam', 'Chỉ ở Sài Gòn'], 2, 'Đồng loạt nhiều đô thị.'),
    Q('Ý nghĩa lớn của Mậu Thân 1968?', ['Không có ý nghĩa', 'Làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải đàm phán', 'Thắng lợi hoàn toàn', 'Bị đánh tan'], 1, 'Buộc Mỹ ngồi vào bàn đàm phán Paris.'),
    Q('Sau Mậu Thân, Mỹ buộc phải?', ['Đầu hàng', 'Tăng quân', 'Tuyên bố "phi Mỹ hoá" chiến tranh', 'Rút ngay'], 2, 'Phi Mỹ hoá → Việt Nam hoá chiến tranh.'),
    Q('Hội nghị Paris bắt đầu năm?', ['1973', '1968', '1975', '1954'], 1, 'Bắt đầu năm 1968.'),
    Q('Hiệp định Paris ký năm?', ['1975', '1954', '1973', '1968'], 2, 'Ngày 27/1/1973.'),
  ]),

  M(17, 'Đại thắng mùa Xuân 1975 — Thống nhất đất nước', [
    Q('Đất nước thống nhất ngày?', ['30/4/1975', '2/9/1975', '7/5/1954', '21/7/1954'], 0, 'Ngày 30/4/1975.'),
    Q('Chiến dịch quyết định?', ['Chiến dịch Biên giới', 'Chiến dịch Tây Bắc', 'Chiến dịch Hồ Chí Minh', 'Chiến dịch Việt Bắc'], 2, 'Chiến dịch Hồ Chí Minh (4/1975).'),
    Q('Xe tăng nào tiến vào Dinh Độc Lập đầu tiên?', ['Xe tăng 200', 'Xe tăng 100', 'Xe tăng 999', 'Xe tăng 390'], 3, 'Xe tăng 390 húc đổ cổng Dinh Độc Lập.'),
    Q('Ai là Tổng thống nguỵ quyền Sài Gòn cuối cùng?', ['Trần Văn Hương', 'Dương Văn Minh', 'Nguyễn Văn Thiệu', 'Ngô Đình Diệm'], 1, 'Dương Văn Minh tuyên bố đầu hàng.'),
    Q('Ý nghĩa Đại thắng mùa Xuân 1975?', ['Không có ý nghĩa', 'Bị chia cắt thêm', 'Hai miền tiếp tục bị chia cắt lâu dài', 'Kết thúc chiến tranh, non sông thu về một mối'], 3, 'Đất nước thống nhất hoàn toàn.'),
    Q('Sài Gòn được đổi tên?', ['Thành phố Bác Hồ', 'Thành phố Hồ Chí Minh', 'Thành phố Hoa', 'Thành phố Đỏ'], 1, 'Đổi tên TP. Hồ Chí Minh (1976).'),
  ]),

  M(18, 'Ôn tập học kỳ I — Lịch sử Việt Nam', [
    Q('Pháp xâm lược Việt Nam năm?', ['1945', '1858', '1930', '1884'], 1, '1858 — Pháp nổ súng Đà Nẵng.'),
    Q('Đảng CSVN ra đời?', ['30/4/1975', '7/5/1954', '2/9/1945', '3/2/1930'], 3, 'Ngày 3/2/1930.'),
    Q('Cách mạng Tháng 8?', ['1968', '1975', '1954', '1945'], 3, 'CMT8/1945.'),
    Q('Tuyên ngôn Độc lập?', ['30/4/1975', '2/9/1945', '7/5/1954', '19/8/1945'], 1, '2/9/1945 tại Ba Đình.'),
    Q('Điện Biên Phủ?', ['30/4/1975', '19/12/1946', '2/9/1945', '7/5/1954'], 3, 'Ngày 7/5/1954.'),
    Q('Giải phóng miền Nam thống nhất đất nước?', ['30/4/1975', '7/5/1954', '2/9/1945', '21/7/1954'], 0, 'Ngày 30/4/1975.'),
  ]),

  // ──────────────── HK2 — Địa lý ────────────────
  M(19, 'Vị trí địa lý Việt Nam', [
    Q('Việt Nam nằm ở khu vực?', ['Đông Bắc Á', 'Đông Nam Á', 'Trung Á', 'Nam Á (gần Ấn Độ)'], 1, 'Đông Nam Á.'),
    Q('Việt Nam giáp biển ở phía?', ['Đông', 'Phía Bắc (giáp Trung Quốc)', 'Phía Nam (giáp Cam-pu-chia)', 'Phía Tây (giáp Lào)'], 0, 'Biển Đông ở phía Đông.'),
    Q('Việt Nam giáp với các nước?', ['Nhật, Hàn, Triều', 'Mỹ, Pháp, Đức', 'Trung Quốc, Lào, Campuchia', 'Anh, Ý, Tây Ban Nha'], 2, '3 nước láng giềng.'),
    Q('Phần đất liền VN có hình?', ['Hình vuông', 'Hình tròn', 'Chữ S', 'Hình chữ L kéo dài'], 2, 'Hình chữ S kéo dài.'),
    Q('Diện tích đất liền VN khoảng?', ['331 000 km²', '1 000 000 km²', '100 000 km²', '50 000 km²'], 0, '~ 331 000 km².'),
    Q('Phần biển VN gồm vịnh nào?', ['Vịnh Đại Tây Dương', 'Vịnh Ba Tư', 'Vịnh Bắc Bộ và vịnh Thái Lan', 'Vịnh Mexico'], 2, 'Vịnh Bắc Bộ + vịnh Thái Lan.'),
  ]),

  M(20, 'Địa hình Việt Nam', [
    Q('Địa hình VN chủ yếu là?', ['Đồng bằng', 'Sa mạc', 'Cao nguyên băng', 'Đồi núi (3/4)'], 3, '3/4 diện tích là đồi núi.'),
    Q('Đỉnh núi cao nhất VN?', ['Tản Viên', 'Bà Đen', 'Phan Xi Păng', 'Bạch Mã'], 2, 'Phan Xi Păng (3 143 m).'),
    Q('Phan Xi Păng thuộc dãy?', ['Bạch Mã', 'Tam Đảo', 'Trường Sơn', 'Hoàng Liên Sơn'], 3, 'Dãy Hoàng Liên Sơn (Tây Bắc).'),
    Q('Hai đồng bằng lớn nhất VN?', ['ĐB Trung Bộ', 'ĐB Thanh Hoá', 'ĐB Bình Định', 'ĐB sông Hồng và ĐB sông Cửu Long'], 3, 'Hai vùng đồng bằng phù sa lớn.'),
    Q('Dãy núi chính ở Trường Sơn chạy theo hướng?', ['Vòng tròn', 'Bắc — Nam', 'Tây Bắc — Đông Nam', 'Đông — Tây'], 2, 'Dãy Trường Sơn dài ~ 1 100 km.'),
    Q('Cao nguyên lớn ở Tây Nguyên?', ['Mộc Châu', 'Sơn La', 'Đồng Văn', 'Cao nguyên Lâm Viên, Mơ Nông, Plei-cu, Đắk Lắk'], 3, 'Tây Nguyên — nhiều cao nguyên.'),
  ]),

  M(21, 'Khí hậu Việt Nam', [
    Q('Khí hậu Việt Nam là?', ['Nhiệt đới ẩm gió mùa', 'Sa mạc', 'Ôn đới', 'Hàn đới'], 0, 'Nhiệt đới ẩm gió mùa.'),
    Q('VN có mấy mùa rõ rệt ở miền Bắc?', ['4 mùa', '1 mùa', '2 mùa', 'Không có mùa'], 0, 'Miền Bắc 4 mùa: xuân, hạ, thu, đông.'),
    Q('Miền Nam có?', ['Sa mạc', '2 mùa (mưa và khô)', '4 mùa', 'Tuyết phủ'], 1, 'Miền Nam 2 mùa.'),
    Q('Gió mùa Đông Bắc thổi vào VN khi nào?', ['Mùa đông', 'Mùa thu', 'Mùa xuân', 'Mùa hè'], 0, 'Gió mùa Đông Bắc → mùa đông.'),
    Q('Gió mùa Tây Nam thổi vào?', ['Mùa thu', 'Mùa đông', 'Mùa hè', 'Mùa xuân'], 2, 'Gió mùa Tây Nam → mùa hè.'),
    Q('Bão thường xảy ra ở VN vào?', ['Không có bão', 'Tháng 6 — 11', 'Tháng 12', 'Tháng 1 — 3'], 1, 'Mùa bão từ tháng 6 đến tháng 11.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Sông ngòi Việt Nam', [
    Q('Hai con sông lớn nhất VN?', ['Sông Đà', 'Sông Hương', 'Sông Hồng và sông Mê Kông (Cửu Long)', 'Sông Mã'], 2, 'Sông Hồng và sông Mê Kông.'),
    Q('Sông Cửu Long là?', ['Sông cạn', 'Sông phụ', 'Đoạn cuối của sông Mê Kông ở VN', 'Sông riêng biệt'], 2, 'Sông Mê Kông chảy qua VN gọi là Cửu Long.'),
    Q('"Cửu Long" có nghĩa?', ['9 con sông', '9 cái cầu', '9 con rồng (9 cửa)', '9 ngọn núi'], 2, '"Cửu" = 9; sông Cửu Long đổ ra biển qua 9 cửa.'),
    Q('Sông ngòi VN có đặc điểm?', ['Đông Nam — Tây Bắc', 'Rất thưa', 'Dày đặc, hướng Tây Bắc — Đông Nam', 'Cạn nước'], 2, 'Mạng lưới dày, chủ yếu chảy theo TB — ĐN.'),
    Q('Mùa nước lớn của sông VN thường vào?', ['Suốt năm như nhau', 'Mùa mưa (hè — thu)', 'Mùa đông', 'Mùa xuân'], 1, 'Mùa mưa nhiều nước, lũ.'),
    Q('Sông ngòi cung cấp?', ['Chỉ làm cảnh', 'Nước tưới, thuỷ điện, giao thông, phù sa', 'Không có ích', 'Chỉ tắm'], 1, 'Vai trò quan trọng.'),
  ]),

  M(23, 'Biển và đảo Việt Nam', [
    Q('Biển VN là một bộ phận của?', ['Thái Bình Dương trực tiếp', 'Đại Tây Dương', 'Biển Đông', 'Ấn Độ Dương'], 2, 'Một phần của Biển Đông.'),
    Q('Hai quần đảo lớn của VN?', ['Hoàng Sa và Trường Sa', 'Phú Quốc, Côn Đảo', 'Cô Tô, Bạch Long Vĩ', 'Lý Sơn, Phú Quý'], 0, 'Hoàng Sa, Trường Sa.'),
    Q('Đảo lớn nhất VN?', ['Phú Quốc', 'Côn Đảo', 'Phú Quý', 'Cát Bà'], 0, 'Đảo Phú Quốc (Kiên Giang).'),
    Q('Vịnh nổi tiếng được UNESCO công nhận?', ['Vịnh Vân Phong', 'Vịnh Cam Ranh', 'Vịnh Xuân Đài', 'Vịnh Hạ Long'], 3, 'Hạ Long — di sản thiên nhiên thế giới.'),
    Q('Tài nguyên biển VN?', ['Cá, dầu khí, muối, du lịch', 'Chỉ đá', 'Không có gì', 'Chỉ cát'], 0, 'Tài nguyên đa dạng.'),
    Q('Chủ quyền biển đảo cần?', ['Bán đi', 'Cho thuê', 'Bảo vệ, gìn giữ', 'Bỏ qua'], 2, 'Trách nhiệm của mọi công dân.'),
  ]),

  M(24, 'Dân cư và dân tộc Việt Nam', [
    Q('Việt Nam có bao nhiêu dân tộc?', ['100 dân tộc', '54 dân tộc', '10 dân tộc', '5 dân tộc'], 1, '54 dân tộc anh em.'),
    Q('Dân tộc đông nhất?', ['Dân tộc Mường (vùng Hoà Bình)', 'Dân tộc Tày (vùng Đông Bắc)', 'Dân tộc Thái (vùng Tây Bắc)', 'Kinh'], 3, 'Kinh chiếm ~ 85% dân số.'),
    Q('Dân tộc thiểu số phân bố chủ yếu ở?', ['Miền núi', 'Bờ biển', 'Đồng bằng', 'Đô thị'], 0, 'Các vùng núi cao, trung du.'),
    Q('Dân số VN khoảng (cập nhật ~ 100 triệu)?', ['500 triệu', '10 triệu', '100 triệu', '1 tỷ'], 2, 'VN ~ 100 triệu người.'),
    Q('Đoàn kết các dân tộc là?', ['Sức mạnh của dân tộc Việt Nam', 'Chỉ là khẩu hiệu, ít tác dụng thực tế', 'Có hại', 'Lãng phí'], 0, 'Tinh thần đại đoàn kết.'),
    Q('Mỗi dân tộc có?', ['Tiếng nói, phong tục, văn hoá riêng', 'Giống hệt nhau', 'Chỉ tên gọi khác', 'Không có gì'], 0, 'Đa dạng văn hoá.'),
  ]),

  M(25, 'Các vùng kinh tế', [
    Q('Việt Nam được chia thành mấy vùng kinh tế lớn?', ['100 vùng', '2 vùng', '10 vùng', '6 hoặc 7 vùng'], 3, 'Thường chia 6-7 vùng.'),
    Q('Vùng kinh tế trọng điểm Bắc Bộ trung tâm là?', ['Cần Thơ', 'TP HCM', 'Hà Nội — Hải Phòng', 'Đà Nẵng'], 2, 'Tam giác Hà Nội — Hải Phòng — Quảng Ninh.'),
    Q('Vùng kinh tế trọng điểm phía Nam trung tâm là?', ['Cần Thơ', 'TP HCM', 'Đà Nẵng', 'Hà Nội'], 1, 'TP HCM — Bình Dương — Đồng Nai — Vũng Tàu.'),
    Q('ĐB sông Cửu Long là vựa?', ['Cao su', 'Cà phê', 'Lúa gạo, trái cây, thuỷ sản', 'Chè và cây ăn quả ôn đới'], 2, 'Trọng điểm lúa, thuỷ sản, trái cây.'),
    Q('Tây Nguyên thế mạnh trồng?', ['Lúa nước', 'Cà phê, cao su, hồ tiêu', 'Dâu tằm', 'Lê, táo'], 1, 'Cây công nghiệp lâu năm.'),
    Q('Trung du và miền núi Bắc Bộ thế mạnh?', ['Trồng cao su', 'Cây chè, cây ăn quả, khoáng sản', 'Lúa nước hai vụ', 'Trồng cà phê'], 1, 'Cây công nghiệp, khoáng sản.'),
  ]),

  M(26, 'Châu Á — Châu Âu (sơ lược)', [
    Q('Châu Á là châu lục?', ['Nhỏ nhất', 'Lớn nhất thế giới', 'Lạnh nhất', 'Nóng nhất'], 1, 'Châu Á — châu lục lớn nhất.'),
    Q('Việt Nam thuộc châu?', ['Châu Âu (gần Nga)', 'Châu Phi (gần Ai Cập)', 'Á', 'Châu Mỹ (gần Hoa Kỳ)'], 2, 'Việt Nam ở châu Á.'),
    Q('Núi cao nhất châu Á và thế giới?', ['Phan Xi Păng', 'Phú Sĩ', 'Dãy Alps (châu Âu)', 'Everest (Himalaya)'], 3, 'Everest 8 848 m.'),
    Q('Châu Âu nổi tiếng với?', ['Rừng nhiệt đới', 'Khí hậu ôn đới, công nghiệp phát triển', 'Băng tuyết bao phủ', 'Sa mạc khô'], 1, 'Châu Âu — ôn đới, công nghiệp.'),
    Q('Sông dài nhất châu Âu?', ['Sông Mê Kông', 'Sông Hằng', 'Sông Volga', 'Sông Nile'], 2, 'Volga ở Nga — dài nhất châu Âu.'),
    Q('Thủ đô nước Pháp?', ['Paris', 'London', 'Madrid', 'Berlin'], 0, 'Paris.'),
  ]),

  M(27, 'Châu Phi — Châu Mỹ', [
    Q('Châu Phi nổi tiếng?', ['Nhiều băng tuyết', 'Nhiều núi cao nhất', 'Hoang mạc Sahara lớn nhất, có nhiều động vật hoang dã', 'Ít người'], 2, 'Sahara — hoang mạc lớn nhất.'),
    Q('Sông dài nhất thế giới?', ['Sông Nile', 'Sông Mê Kông', 'Sông Volga', 'Sông Amazon'], 0, 'Sông Nile (~ 6 650 km).'),
    Q('Châu Mỹ chia thành?', ['Đông Mỹ và Tây Mỹ', 'Mỹ và Mexico', 'Mỹ và Canada', 'Bắc Mỹ và Nam Mỹ'], 3, 'Bắc Mỹ + Nam Mỹ.'),
    Q('Quốc gia lớn nhất Nam Mỹ?', ['Argentina', 'Brazil', 'Peru (dãy Andes)', 'Colombia'], 1, 'Brazil — diện tích lớn nhất.'),
    Q('Quốc gia có nền kinh tế đứng đầu thế giới?', ['Hoa Kỳ (Mỹ)', 'Lào (Đông Nam Á)', 'Pháp (Tây Âu)', 'Việt Nam'], 0, 'Hoa Kỳ — nền kinh tế số 1 thế giới.'),
    Q('Rừng Amazon nằm ở?', ['Châu Phi', 'Nam Mỹ', 'Châu Á', 'Bắc Mỹ'], 1, 'Rừng Amazon — "lá phổi xanh".'),
  ]),

  M(28, 'Châu Đại Dương — Châu Nam Cực', [
    Q('Châu Đại Dương gồm?', ['Chỉ có một nước', 'Australia, New Zealand và nhiều đảo Thái Bình Dương', 'Không có nước', 'Chỉ là đảo nhỏ'], 1, 'Châu Đại Dương — nhiều quốc đảo.'),
    Q('Quốc gia lớn nhất châu Đại Dương?', ['Vương quốc Tonga', 'Australia', 'Cộng hoà Fiji', 'New Zealand'], 1, 'Australia.'),
    Q('Châu Nam Cực là?', ['Châu lục lạnh nhất, có băng phủ quanh năm', 'Nhiều rừng nhất', 'Đông dân nhất', 'Châu lục nóng nhất'], 0, 'Lạnh nhất, băng tuyết bao phủ.'),
    Q('Châu Nam Cực có dân cư sinh sống thường xuyên?', ['Không, chỉ có nhà khoa học nghiên cứu', 'Vài chục triệu', 'Hàng triệu dân', 'Hàng ngàn dân'], 0, 'Chỉ có trạm nghiên cứu khoa học.'),
    Q('Động vật đặc trưng châu Nam Cực?', ['Voi rừng châu Phi', 'Gấu nâu', 'Chim cánh cụt', 'Sư tử thảo nguyên'], 2, 'Chim cánh cụt.'),
    Q('Động vật đặc trưng Australia?', ['Sư tử (đặc trưng châu Phi)', 'Kangaroo (chuột túi), koala', 'Voi (đặc trưng Đông Nam Á)', 'Gấu trúc'], 1, 'Kangaroo, koala đặc trưng Úc.'),
  ]),

  M(29, 'Khoáng sản Việt Nam', [
    Q('Khoáng sản chính của VN?', ['Uranium', 'Kim cương', 'Than đá, dầu mỏ, sắt, apatit, bô-xít', 'Vàng nhiều như cát'], 2, 'Một số loại khoáng sản chính.'),
    Q('Than đá tập trung ở?', ['Lâm Đồng', 'Cà Mau', 'Quảng Ninh', 'Đà Nẵng'], 2, 'Quảng Ninh — vùng than nổi tiếng.'),
    Q('Dầu mỏ và khí đốt khai thác ở?', ['Tây Bắc', 'Thềm lục địa phía Nam (Bà Rịa — Vũng Tàu)', 'Bắc Bộ', 'Tây Nguyên'], 1, 'Vùng biển phía Nam.'),
    Q('Bô-xít có nhiều ở?', ['Vùng biển ven bờ Quảng Ninh', 'Bắc Bộ', 'Tây Nguyên', 'Đồng bằng'], 2, 'Tây Nguyên có trữ lượng bô-xít lớn.'),
    Q('Khai thác khoáng sản cần?', ['Không khai thác', 'Khai thác triệt để', 'Hợp lý, tiết kiệm, bảo vệ môi trường', 'Bỏ phí'], 2, 'Phát triển bền vững.'),
    Q('Khoáng sản là tài nguyên?', ['Vô tận', 'Tái tạo nhanh', 'Không tái tạo', 'Có thể tạo ra'], 2, 'Cần hàng triệu năm hình thành.'),
  ]),

  M(30, 'Nông nghiệp Việt Nam', [
    Q('Cây lương thực chính của VN?', ['Ngô (lương thực phụ)', 'Lúa gạo', 'Lúa mì', 'Khoai lang, sắn'], 1, 'Cây lương thực chính: lúa.'),
    Q('VN là nước xuất khẩu gạo lớn?', ['Không xuất khẩu', 'Chỉ nhập khẩu', 'Cuối thế giới', 'Top thế giới (top 3)'], 3, 'Top 3 thế giới về xuất khẩu gạo.'),
    Q('Cây công nghiệp lâu năm chính?', ['Cà phê, cao su, chè, hồ tiêu', 'Lúa nước (cây lương thực)', 'Mía (cây công nghiệp hàng năm)', 'Đậu phộng'], 0, 'Cây công nghiệp lâu năm chủ lực.'),
    Q('Vùng trồng cà phê nổi tiếng?', ['Tây Nguyên', 'ĐB sông Hồng', 'Trung Bộ ven biển', 'Bắc Bộ'], 0, 'Tây Nguyên — vương quốc cà phê.'),
    Q('Vùng trồng chè nổi tiếng?', ['TP HCM', 'Trung du, miền núi Bắc Bộ (Thái Nguyên)', 'Tây Nguyên', 'Cà Mau'], 1, 'Thái Nguyên nổi tiếng chè.'),
    Q('Ngành chăn nuôi chính?', ['Voi rừng Tây Nguyên', 'Hổ Đông Dương', 'Bò, lợn, gà, vịt', 'Sư tử châu Phi'], 2, 'Gia súc, gia cầm.'),
  ]),

  M(31, 'Công nghiệp Việt Nam', [
    Q('Ngành công nghiệp quan trọng của VN?', ['Dệt may, da giày, điện tử, chế biến', 'Đóng tàu vũ trụ', 'Vũ khí hạt nhân', 'Tàu sân bay'], 0, 'Dệt may, da giày, điện tử…'),
    Q('Trung tâm công nghiệp lớn nhất?', ['Thành phố Vinh (Nghệ An)', 'TP HCM', 'Cần Thơ', 'Đà Nẵng'], 1, 'TP HCM — trung tâm lớn nhất.'),
    Q('Sản phẩm xuất khẩu chủ lực của VN?', ['Điện thoại, dệt may, gạo, thuỷ sản, cà phê', 'Vàng nguyên khối, đá quý', 'Kim cương', 'Đồ cổ và cổ vật khảo cổ'], 0, 'Hàng xuất khẩu chủ lực.'),
    Q('Khu công nghiệp tập trung ở?', ['Sa mạc', 'Quanh các thành phố lớn (HN, HCM, Đà Nẵng…)', 'Núi cao', 'Trên biển'], 1, 'Gần đô thị, hạ tầng tốt.'),
    Q('Phát triển công nghiệp giúp?', ['Lãng phí', 'Không có lợi', 'Có hại', 'Tăng năng suất, thu nhập, hiện đại hoá'], 3, 'Đẩy mạnh CNH — HĐH.'),
    Q('Công nghiệp cần?', ['Bỏ qua', 'Phá môi trường', 'Không quan tâm môi trường', 'Đi đôi với bảo vệ môi trường'], 3, 'Phát triển xanh, bền vững.'),
  ]),

  M(32, 'Giao thông — Du lịch Việt Nam', [
    Q('Quốc lộ chính nối Bắc — Nam?', ['Đường Hồ Chí Minh trên bộ', 'Quốc lộ 5', 'Quốc lộ 1A', 'Quốc lộ 6'], 2, 'QL 1A xuyên Việt.'),
    Q('Sân bay quốc tế lớn nhất VN?', ['Tân Sơn Nhất (TP HCM)', 'Phú Quốc', 'Nội Bài (HN)', 'Đà Nẵng'], 0, 'Tân Sơn Nhất — đông khách nhất.'),
    Q('Cảng biển lớn nhất VN?', ['Cảng Quy Nhơn', 'Cảng Sài Gòn / Hải Phòng / Cái Mép', 'Cảng Cà Mau', 'Cảng Vũng Áng'], 1, 'Các cảng chính.'),
    Q('Di sản thiên nhiên thế giới ở VN?', ['Đồi cỏ', 'Toà nhà', 'Sân vận động', 'Vịnh Hạ Long, Phong Nha — Kẻ Bàng'], 3, 'Di sản thiên nhiên UNESCO.'),
    Q('Di sản văn hoá thế giới ở VN?', ['Đà Lạt', 'Cố đô Huế, Phố cổ Hội An, Mỹ Sơn, Hoàng thành Thăng Long', 'Phú Quốc', 'Khu du lịch Sa Pa (Lào Cai)'], 1, 'Di sản văn hoá UNESCO.'),
    Q('Du lịch VN đem lại?', ['Phá hoại tài nguyên nếu không quản lý tốt', 'Lãng phí', 'Việc làm, thu nhập, quảng bá đất nước', 'Không đem lại lợi ích kinh tế nào'], 2, 'Ngành kinh tế quan trọng.'),
  ]),

  M(33, 'Ôn tập — Lịch sử Việt Nam', [
    Q('Năm 1858 sự kiện gì?', ['Cách mạng Tháng Tám thành công', 'Pháp xâm lược VN', 'Đại thắng mùa Xuân', 'Đảng CSVN ra đời'], 1, '1858: Pháp nổ súng xâm lược.'),
    Q('Bác Hồ ra đi tìm đường cứu nước?', ['2/9/1945', '7/5/1954', '3/2/1930', '5/6/1911'], 3, 'Ngày 5/6/1911.'),
    Q('Tuyên ngôn Độc lập?', ['7/5/1954', '30/4/1975', '3/2/1930', '2/9/1945'], 3, '2/9/1945.'),
    Q('Chiến thắng Điện Biên Phủ?', ['7/5/1954', '30/4/1975', '3/2/1930', '2/9/1945'], 0, '7/5/1954.'),
    Q('Thống nhất đất nước?', ['21/7/1954', '7/5/1954', '30/4/1975', '2/9/1945'], 2, '30/4/1975.'),
    Q('Đổi mới đất nước bắt đầu năm?', ['1986', '1954', '1945', '1975'], 0, 'Đại hội VI (12/1986).'),
  ]),

  M(34, 'Ôn tập — Địa lý Việt Nam và thế giới', [
    Q('Việt Nam thuộc châu?', ['Châu Phi (gần Ai Cập)', 'Châu Mỹ (gần Hoa Kỳ)', 'Châu Âu (gần Pháp)', 'Á'], 3, 'Châu Á.'),
    Q('Hình dáng VN?', ['Hình chữ U mở ra biển', 'Hình chữ I thẳng đứng', 'Chữ S', 'Hình chữ O khép kín'], 2, 'Hình chữ S.'),
    Q('Khí hậu VN?', ['Sa mạc', 'Hàn đới', 'Nhiệt đới gió mùa', 'Ôn đới'], 2, 'Nhiệt đới ẩm gió mùa.'),
    Q('Núi cao nhất VN?', ['Phan Xi Păng', 'Bạch Mã', 'Bà Đen', 'Tản Viên'], 0, 'Phan Xi Păng 3 143 m.'),
    Q('Sông dài nhất chảy qua VN?', ['Sông Mã (Thanh Hoá)', 'Sông Đà (Tây Bắc)', 'Sông Hồng (Bắc Bộ)', 'Mê Kông (Cửu Long)'], 3, 'Sông Mê Kông.'),
    Q('Châu lục nhỏ nhất?', ['Châu Mỹ', 'Châu Á', 'Châu Phi', 'Châu Đại Dương'], 3, 'Châu Đại Dương nhỏ nhất.'),
  ]),

  M(35, 'Ôn cuối cấp — Đổi mới đất nước', [
    Q('Đại hội nào khởi xướng công cuộc đổi mới?', ['Đại hội I', 'Đại hội XII', 'Đại hội X', 'Đại hội VI (1986)'], 3, 'Đại hội VI (12/1986).'),
    Q('Đổi mới nhằm?', ['Đóng cửa', 'Cô lập', 'Đưa đất nước thoát nghèo, hội nhập, phát triển', 'Bỏ phát triển'], 2, 'Mục tiêu đổi mới.'),
    Q('VN gia nhập ASEAN năm?', ['2007', '1975', '1995', '1986'], 2, 'Năm 1995.'),
    Q('VN gia nhập WTO năm?', ['2007', '1995', '2000', '1986'], 0, 'Năm 2007.'),
    Q('Thành tựu lớn của đổi mới?', ['Không có gì', 'Tăng trưởng kinh tế, giảm nghèo, hội nhập quốc tế', 'Mất chủ quyền', 'Suy thoái'], 1, 'Đời sống nhân dân được nâng cao.'),
    Q('Trách nhiệm của học sinh trong công cuộc đổi mới?', ['Đi chơi', 'Bỏ học', 'Không cần làm gì', 'Học tập tốt, rèn luyện đạo đức, yêu Tổ quốc'], 3, 'Học tốt — đóng góp tương lai.'),
  ]),
];

export const P5LSDL_SCENARIOS = indexBy(P5LSDL_WEEKS);
