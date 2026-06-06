// ============================================================
// Lớp 12 · GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT (KNTT) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Phần 1: Giáo dục kinh tế (tuần 1–18). Phần 2: Giáo dục pháp luật (19–35).
// ID prefix: "H12GDCD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12GDCD', 'gdcd', n, title, qs, opts);

export const H12GDCD_WEEKS = [
  // ──────────────── HK1 — KINH TẾ ────────────────
  M(1, 'Tăng trưởng và phát triển kinh tế — Khái niệm', [
    Q('Tăng trưởng kinh tế là?', ['Sự gia tăng thu nhập của một cá nhân', 'Sự gia tăng về quy mô sản lượng (GDP/GNI) của nền kinh tế trong một thời kỳ nhất định', 'Sự thay đổi cơ cấu xã hội', 'Sự gia tăng dân số'], 1, 'Tăng trưởng đo bằng GDP/GNI.'),
    Q('Chỉ tiêu nào phản ánh tăng trưởng kinh tế?', ['Tuổi thọ trung bình', 'Tổng sản phẩm trong nước GDP, GDP/người', 'Chỉ số HDI', 'Tỷ lệ thất nghiệp'], 1, 'GDP, GNI là chỉ tiêu chính.'),
    Q('Phát triển kinh tế bao gồm?', ['Chỉ tăng trưởng kinh tế', 'Tăng trưởng kinh tế gắn với chuyển dịch cơ cấu kinh tế và tiến bộ xã hội', 'Chỉ chuyển dịch cơ cấu', 'Chỉ tiến bộ xã hội'], 1, 'Phát triển = tăng trưởng + chuyển dịch cơ cấu + tiến bộ xã hội.'),
    Q('GDP bình quân đầu người tính bằng?', ['GDP × dân số', 'GDP ÷ dân số trung bình', 'GDP − GNI', 'GDP + GNI'], 1, 'GDP/người = GDP / dân số.'),
    Q('Vai trò của tăng trưởng kinh tế?', ['Không quan trọng', 'Là điều kiện vật chất để giải quyết các vấn đề xã hội, xoá đói giảm nghèo', 'Gây bất ổn xã hội', 'Chỉ phục vụ doanh nghiệp'], 1, 'Cơ sở vật chất cho an sinh.'),
    Q('Tăng trưởng kinh tế bền vững nghĩa là?', ['Tăng trưởng nhanh bằng mọi giá', 'Tăng trưởng cao, ổn định, gắn với bảo vệ môi trường và công bằng xã hội', 'Chỉ chú trọng môi trường', 'Chỉ chú trọng tốc độ'], 1, 'Bền vững = kinh tế + xã hội + môi trường.'),
  ]),

  M(2, 'Tăng trưởng và phát triển kinh tế — Mối quan hệ', [
    Q('Mối quan hệ giữa tăng trưởng và phát triển?', ['Hoàn toàn đồng nhất', 'Tăng trưởng là điều kiện cần nhưng chưa đủ để phát triển', 'Đối lập nhau', 'Không liên quan'], 1, 'Tăng trưởng là một phần của phát triển.'),
    Q('Một quốc gia có GDP tăng cao nhưng ô nhiễm nặng, bất bình đẳng lớn thì?', ['Đã phát triển bền vững', 'Có tăng trưởng nhưng chưa phát triển bền vững', 'Không có tăng trưởng', 'Đã đạt mục tiêu'], 1, 'Thiếu yếu tố xã hội-môi trường.'),
    Q('Chỉ số HDI gồm yếu tố?', ['Chỉ thu nhập', 'Tuổi thọ, giáo dục, thu nhập bình quân đầu người', 'Chỉ giáo dục', 'Tỷ lệ thất nghiệp'], 1, 'HDI: 3 thành phần.'),
    Q('Để phát triển kinh tế bền vững, Việt Nam cần?', ['Khai thác tài nguyên hết mức', 'Đổi mới mô hình tăng trưởng, đầu tư khoa học công nghệ, bảo vệ môi trường', 'Đóng cửa nền kinh tế', 'Phụ thuộc vốn nước ngoài'], 1, 'Mô hình tăng trưởng xanh.'),
    Q('Công bằng xã hội trong phát triển kinh tế thể hiện ở?', ['Mọi người có thu nhập như nhau', 'Cơ hội tiếp cận giáo dục, y tế, việc làm bình đẳng', 'Chia đều của cải', 'Xoá bỏ thị trường'], 1, 'Bình đẳng cơ hội.'),
    Q('Mục tiêu phát triển kinh tế của Việt Nam đến 2030 là?', ['Nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao', 'Nước phát triển ngay', 'Nước nghèo', 'Không có mục tiêu'], 0, 'Nghị quyết Đại hội XIII.'),
  ]),

  M(3, 'Hội nhập kinh tế quốc tế — Khái niệm', [
    Q('Hội nhập kinh tế quốc tế là?', ['Quá trình một quốc gia tham gia vào nền kinh tế khu vực và thế giới', 'Đóng cửa nền kinh tế', 'Chỉ xuất khẩu', 'Chỉ nhập khẩu'], 0, 'Hội nhập = mở cửa, tham gia.'),
    Q('Hình thức hội nhập kinh tế quốc tế?', ['Chỉ song phương', 'Song phương, khu vực và toàn cầu', 'Chỉ toàn cầu', 'Chỉ khu vực'], 1, 'Đa cấp độ.'),
    Q('Việt Nam gia nhập WTO năm?', ['2000', '2007', '2010', '2015'], 1, 'Việt Nam gia nhập WTO 11/1/2007.'),
    Q('ASEAN là tổ chức hợp tác?', ['Toàn cầu', 'Khu vực Đông Nam Á', 'Châu Mỹ', 'Châu Âu'], 1, 'ASEAN: 10 nước Đông Nam Á.'),
    Q('Hiệp định CPTPP thuộc cấp độ?', ['Song phương', 'Khu vực — đa phương', 'Toàn cầu', 'Trong nước'], 1, 'CPTPP: 11 nước châu Á-Thái Bình Dương.'),
    Q('Hiệp định EVFTA ký giữa Việt Nam và?', ['Hoa Kỳ', 'Liên minh châu Âu (EU)', 'Trung Quốc', 'Nhật Bản'], 1, 'EVFTA: VN-EU.'),
  ]),

  M(4, 'Hội nhập kinh tế quốc tế — Cơ hội và thách thức', [
    Q('Cơ hội từ hội nhập kinh tế quốc tế?', ['Đóng cửa thị trường', 'Mở rộng thị trường, thu hút vốn FDI, tiếp nhận công nghệ', 'Mất chủ quyền', 'Cản trở xuất khẩu'], 1, 'Cơ hội lớn.'),
    Q('Thách thức của hội nhập?', ['Không có thách thức nào', 'Cạnh tranh khốc liệt, phụ thuộc nước ngoài, dễ bị tác động từ biến động thế giới', 'Chỉ có lợi', 'Tăng tự cung tự cấp'], 1, 'Nhiều thách thức.'),
    Q('FDI là?', ['Đầu tư trực tiếp nước ngoài', 'Đầu tư gián tiếp', 'Viện trợ', 'Vay nợ'], 0, 'Foreign Direct Investment.'),
    Q('ODA là?', ['Đầu tư trực tiếp', 'Hỗ trợ phát triển chính thức (vốn vay/viện trợ ưu đãi)', 'Vay thương mại', 'Buôn lậu'], 1, 'Official Development Assistance.'),
    Q('Để hội nhập hiệu quả, doanh nghiệp Việt cần?', ['Sản xuất manh mún', 'Nâng cao chất lượng, đổi mới công nghệ, xây dựng thương hiệu', 'Trông chờ nhà nước', 'Trốn thuế'], 1, 'Năng lực cạnh tranh.'),
    Q('Học sinh thể hiện trách nhiệm trong hội nhập bằng cách?', ['Bài xích hàng nội', 'Học ngoại ngữ, tin học, kỹ năng mềm; ưu tiên dùng hàng Việt chất lượng', 'Không học gì', 'Phụ thuộc nước ngoài'], 1, 'Trách nhiệm công dân trẻ.'),
  ]),

  M(5, 'Bảo hiểm — Khái niệm và vai trò', [
    Q('Bảo hiểm là?', ['Cá cược', 'Hoạt động chia sẻ rủi ro giữa người tham gia thông qua đóng phí', 'Tiết kiệm bắt buộc', 'Cho vay'], 1, 'Chia sẻ rủi ro.'),
    Q('Các loại hình bảo hiểm chính ở Việt Nam?', ['Chỉ y tế', 'Bảo hiểm xã hội, y tế, thất nghiệp và bảo hiểm thương mại', 'Chỉ thương mại', 'Chỉ xã hội'], 1, '4 loại chính.'),
    Q('Bảo hiểm xã hội bắt buộc áp dụng cho?', ['Mọi người', 'Người lao động có hợp đồng lao động từ 1 tháng trở lên', 'Chỉ công chức', 'Chỉ doanh nhân'], 1, 'Theo Luật BHXH.'),
    Q('Chế độ của BHXH bắt buộc gồm?', ['Chỉ hưu trí', 'Ốm đau, thai sản, tai nạn lao động, hưu trí, tử tuất', 'Chỉ thai sản', 'Chỉ tử tuất'], 1, '5 chế độ.'),
    Q('Bảo hiểm y tế (BHYT) chi trả?', ['Mọi chi phí cá nhân', 'Một phần hoặc toàn bộ chi phí khám chữa bệnh trong phạm vi quyền lợi', 'Tiền lương', 'Học phí'], 1, 'BHYT chi trả y tế.'),
    Q('Bảo hiểm thất nghiệp giúp?', ['Trả lương vĩnh viễn', 'Hỗ trợ thu nhập, đào tạo nghề, tìm việc khi mất việc làm', 'Tăng lương', 'Đầu tư chứng khoán'], 1, 'BH thất nghiệp.'),
  ]),

  M(6, 'Bảo hiểm — Trách nhiệm công dân', [
    Q('Bảo hiểm thương mại khác BHXH ở chỗ?', ['Không khác', 'Do doanh nghiệp bảo hiểm cung cấp theo hợp đồng tự nguyện, vì mục đích lợi nhuận', 'Bắt buộc', 'Do Nhà nước cấp miễn phí'], 1, 'Thương mại = tự nguyện, có lợi nhuận.'),
    Q('Nguyên tắc hoạt động bảo hiểm?', ['Lừa dối', 'Số đông bù số ít, công bằng, công khai, minh bạch', 'Bí mật', 'Chia đều'], 1, 'Nguyên tắc cơ bản.'),
    Q('Khi tham gia bảo hiểm, công dân có nghĩa vụ?', ['Khai báo gian dối', 'Đóng phí đúng hạn, kê khai trung thực', 'Trốn đóng', 'Đòi bồi thường vô căn cứ'], 1, 'Trung thực.'),
    Q('Bảo hiểm y tế hộ gia đình thuộc?', ['BHYT bắt buộc theo nhóm hộ gia đình', 'BHYT tự nguyện hoàn toàn', 'BH thương mại', 'BH xã hội'], 0, 'Theo Luật BHYT.'),
    Q('Ý nghĩa kinh tế-xã hội của bảo hiểm?', ['Không có', 'Ổn định đời sống, an sinh xã hội, huy động vốn cho nền kinh tế', 'Gây tốn kém vô ích', 'Chỉ có lợi cho công ty BH'], 1, 'Nhiều vai trò.'),
    Q('Học sinh cần làm gì với BHYT học sinh?', ['Bỏ', 'Tham gia đầy đủ theo quy định để được chăm sóc sức khoẻ', 'Trốn đóng', 'Đòi miễn'], 1, 'BHYT HSSV bắt buộc.'),
  ]),

  M(7, 'An sinh xã hội — Khái niệm', [
    Q('An sinh xã hội là?', ['Quỹ từ thiện', 'Hệ thống các chính sách của Nhà nước nhằm bảo đảm thu nhập, dịch vụ xã hội cơ bản cho mọi người', 'Bảo hiểm thương mại', 'Quỹ tín dụng'], 1, 'ASXH = chính sách Nhà nước.'),
    Q('Các trụ cột của hệ thống an sinh xã hội Việt Nam?', ['Chỉ BHXH', 'Việc làm-thu nhập tối thiểu, BHXH-BHYT, trợ giúp xã hội, dịch vụ xã hội cơ bản', 'Chỉ trợ cấp', 'Chỉ y tế'], 1, '4 trụ cột.'),
    Q('Trợ giúp xã hội dành cho?', ['Mọi người', 'Người có hoàn cảnh đặc biệt khó khăn: người già cô đơn, trẻ mồ côi, người khuyết tật…', 'Doanh nhân', 'Cán bộ'], 1, 'Nhóm yếu thế.'),
    Q('Chính sách giảm nghèo bền vững nhằm?', ['Giữ nguyên nghèo', 'Hỗ trợ người nghèo vươn lên thoát nghèo bền vững (giáo dục, vốn, việc làm)', 'Trợ cấp suốt đời', 'Cào bằng thu nhập'], 1, 'Trao "cần câu".'),
    Q('Dịch vụ xã hội cơ bản gồm?', ['Chỉ y tế', 'Giáo dục, y tế, nhà ở, nước sạch, thông tin', 'Chỉ nhà ở', 'Chỉ giáo dục'], 1, '5 dịch vụ cơ bản.'),
    Q('Mục tiêu của an sinh xã hội?', ['Tạo bất bình đẳng', 'Bảo đảm cuộc sống tối thiểu, giảm bất bình đẳng, ổn định xã hội', 'Thay thế thị trường', 'Tạo lợi nhuận'], 1, 'Ổn định xã hội.'),
  ]),

  M(8, 'An sinh xã hội — Trách nhiệm công dân', [
    Q('Ai có trách nhiệm thực hiện an sinh xã hội?', ['Chỉ Nhà nước', 'Nhà nước, doanh nghiệp, tổ chức xã hội và mỗi công dân', 'Chỉ doanh nghiệp', 'Chỉ cá nhân giàu'], 1, 'Trách nhiệm chung.'),
    Q('Công dân thực hiện trách nhiệm với ASXH bằng cách?', ['Trốn đóng BHXH', 'Tham gia BHXH, BHYT; đóng thuế đầy đủ; ủng hộ quỹ xã hội', 'Lừa đảo trợ cấp', 'Vô cảm'], 1, 'Hành vi đúng.'),
    Q('Học sinh tham gia ASXH bằng cách?', ['Đứng ngoài', 'Tham gia BHYT, các phong trào tình nguyện, giúp đỡ bạn khó khăn', 'Trục lợi', 'Bài xích'], 1, 'Hành động phù hợp lứa tuổi.'),
    Q('Quỹ Vì người nghèo, Mặt trận Tổ quốc vận động thuộc?', ['Bảo hiểm thương mại', 'Hoạt động trợ giúp xã hội — huy động cộng đồng', 'Tín dụng', 'Đầu tư'], 1, 'Quỹ cộng đồng.'),
    Q('Hành vi nào VI PHẠM pháp luật ASXH?', ['Đóng BHXH đúng hạn', 'Khai khống hồ sơ để hưởng chế độ trợ cấp', 'Tham gia BHYT', 'Giúp người nghèo'], 1, 'Trục lợi chính sách = vi phạm.'),
    Q('Ý nghĩa của ASXH với phát triển bền vững?', ['Cản trở', 'Là một trụ cột bảo đảm tăng trưởng đi đôi tiến bộ và công bằng xã hội', 'Không liên quan', 'Chỉ tốn ngân sách'], 1, 'ASXH = cốt lõi bền vững.'),
  ]),

  M(9, 'Lập kế hoạch kinh doanh — Khái niệm', [
    Q('Kế hoạch kinh doanh là?', ['Bản chép tay ngẫu nhiên', 'Tài liệu mô tả ý tưởng, mục tiêu, giải pháp, nguồn lực và kế hoạch hành động kinh doanh', 'Hợp đồng', 'Báo cáo thuế'], 1, 'Business plan.'),
    Q('Vai trò của kế hoạch kinh doanh?', ['Không cần thiết', 'Định hướng hoạt động, huy động vốn, phòng ngừa rủi ro', 'Chỉ để khoe', 'Để trốn thuế'], 1, 'Kim chỉ nam.'),
    Q('Nội dung chính của kế hoạch kinh doanh gồm?', ['Chỉ ý tưởng', 'Ý tưởng, thị trường, sản phẩm, marketing, nhân sự, tài chính, rủi ro', 'Chỉ tài chính', 'Chỉ nhân sự'], 1, 'Đa nội dung.'),
    Q('Khi nghiên cứu thị trường cần xác định?', ['Không cần', 'Khách hàng mục tiêu, đối thủ cạnh tranh, nhu cầu, xu hướng', 'Chỉ giá cả', 'Chỉ địa điểm'], 1, 'Market research.'),
    Q('SWOT trong kinh doanh là?', ['Tên doanh nghiệp', 'Phân tích điểm mạnh, điểm yếu, cơ hội, thách thức', 'Một loại thuế', 'Một loại hợp đồng'], 1, 'Strengths-Weaknesses-Opportunities-Threats.'),
    Q('Kế hoạch tài chính trong kinh doanh thể hiện?', ['Chỉ thu', 'Dự kiến doanh thu, chi phí, lợi nhuận, dòng tiền và nhu cầu vốn', 'Chỉ chi', 'Chỉ thuế'], 1, 'Financial plan.'),
  ]),

  M(10, 'Lập kế hoạch kinh doanh — Thực hành', [
    Q('Bước đầu tiên khi lập kế hoạch kinh doanh?', ['Vay vốn', 'Xác định ý tưởng và mục tiêu kinh doanh', 'Thuê nhân viên', 'Mua nhà xưởng'], 1, 'Idea → goal.'),
    Q('Mục tiêu kinh doanh nên tuân theo nguyên tắc SMART nghĩa là?', ['Bí mật', 'Cụ thể, đo lường được, khả thi, có liên quan, có thời hạn', 'Đơn giản', 'Mạnh mẽ'], 1, 'SMART.'),
    Q('An vay vốn 200 triệu lãi suất 10%/năm để mở quán trà sữa. Lãi 1 năm phải trả?', ['10 triệu', '20 triệu', '30 triệu', '200 triệu'], 1, '200 × 10% = 20 triệu.'),
    Q('Khi tính giá bán sản phẩm cần tính?', ['Chỉ giá vốn', 'Giá vốn + chi phí + lợi nhuận mong muốn, có tham chiếu thị trường', 'Tuỳ ý', 'Theo cảm tính'], 1, 'Pricing.'),
    Q('Rủi ro thường gặp khi khởi nghiệp?', ['Không có', 'Thiếu vốn, sai phân khúc thị trường, cạnh tranh khốc liệt, quản trị kém', 'Lợi nhuận quá cao', 'Khách hàng quá đông'], 1, 'Rủi ro thật.'),
    Q('Học sinh THPT có thể tập kinh doanh bằng?', ['Bỏ học đi buôn lớn', 'Các dự án nhỏ trong câu lạc bộ, hội chợ trường, bán hàng online phù hợp', 'Vay nặng lãi', 'Lừa đảo'], 1, 'Quy mô phù hợp.'),
  ]),

  M(11, 'Trách nhiệm xã hội của doanh nghiệp — Khái niệm', [
    Q('Trách nhiệm xã hội của doanh nghiệp (CSR) là?', ['Chỉ làm từ thiện', 'Cam kết của doanh nghiệp đóng góp phát triển kinh tế bền vững, nâng cao chất lượng sống cộng đồng và bảo vệ môi trường', 'Trốn thuế', 'Quảng cáo'], 1, 'CSR - Corporate Social Responsibility.'),
    Q('Các hình thức biểu hiện CSR?', ['Chỉ kinh tế', 'Trách nhiệm kinh tế, pháp lý, đạo đức, từ thiện', 'Chỉ pháp lý', 'Chỉ từ thiện'], 1, 'Tháp Carroll - 4 cấp độ.'),
    Q('Trách nhiệm kinh tế của DN là?', ['Lừa khách', 'Tạo lợi nhuận, đóng góp ngân sách, tạo việc làm, sản phẩm chất lượng', 'Phá sản', 'Trốn thuế'], 1, 'Đóng góp kinh tế.'),
    Q('Trách nhiệm pháp lý của DN là?', ['Tuỳ ý', 'Tuân thủ pháp luật về lao động, thuế, môi trường, cạnh tranh', 'Lách luật', 'Trốn luật'], 1, 'Tuân thủ pháp luật.'),
    Q('Trách nhiệm đạo đức của DN là?', ['Chỉ tối đa hoá lợi nhuận', 'Hành xử công bằng, trung thực, có đạo đức ngay cả khi pháp luật chưa quy định', 'Lừa dối', 'Bóc lột'], 1, 'Ethics.'),
    Q('Trách nhiệm từ thiện của DN thể hiện ở?', ['Đóng thuế', 'Tài trợ giáo dục, y tế, cứu trợ thiên tai, hoạt động cộng đồng', 'Lương nhân viên', 'Giá thành sản phẩm'], 1, 'Philanthropy.'),
  ]),

  M(12, 'Trách nhiệm xã hội của doanh nghiệp — Ý nghĩa', [
    Q('Vai trò của CSR với doanh nghiệp?', ['Giảm uy tín', 'Nâng cao uy tín, thu hút nhân tài, tăng lòng trung thành khách hàng, phát triển bền vững', 'Không có', 'Tốn kém vô ích'], 1, 'Lợi cả đôi đường.'),
    Q('CSR có lợi cho xã hội vì?', ['Tăng ô nhiễm', 'Bảo vệ môi trường, nâng cao chất lượng sống, giảm bất bình đẳng', 'Tăng nghèo', 'Tăng tham nhũng'], 1, 'Tác động tích cực.'),
    Q('Hành vi NÀO của doanh nghiệp VI PHẠM trách nhiệm xã hội?', ['Đóng thuế đầy đủ', 'Xả thải gây ô nhiễm, dùng lao động trẻ em', 'Trả lương đúng hạn', 'Sản phẩm an toàn'], 1, 'Vi phạm CSR.'),
    Q('Phát triển bền vững yêu cầu doanh nghiệp?', ['Chỉ vì lợi nhuận', 'Cân bằng lợi ích kinh tế, xã hội, môi trường (triple bottom line)', 'Chỉ vì cổ đông', 'Chỉ vì khách'], 1, '3 trụ cột.'),
    Q('Ví dụ CSR điển hình?', ['Trốn thuế', 'Vinamilk Quỹ sữa "Vươn cao Việt Nam", các DN trồng rừng giảm phát thải', 'Ô nhiễm', 'Lừa đảo'], 1, 'Hoạt động thực tế.'),
    Q('Người tiêu dùng có thể thúc đẩy CSR bằng cách?', ['Tẩy chay sản phẩm tốt', 'Ưu tiên mua sản phẩm của DN có trách nhiệm, tẩy chay DN vô đạo đức', 'Mua bừa', 'Bài xích'], 1, 'Sức mạnh người tiêu dùng.'),
  ]),

  M(13, 'Quản lí thu chi gia đình — Khái niệm', [
    Q('Quản lí thu chi gia đình là?', ['Tự do tiêu xài', 'Việc theo dõi, lập kế hoạch và kiểm soát các khoản thu, chi của gia đình hợp lí', 'Trốn nợ', 'Đầu tư mạo hiểm'], 1, 'Personal finance.'),
    Q('Các khoản thu của gia đình thường gồm?', ['Chỉ lương', 'Lương, kinh doanh, đầu tư, cho thuê tài sản, thu khác', 'Chỉ thưởng', 'Chỉ trợ cấp'], 1, 'Nhiều nguồn thu.'),
    Q('Các khoản chi cố định?', ['Mua xa xỉ', 'Tiền nhà, điện nước, học phí, ăn uống cơ bản, bảo hiểm', 'Du lịch', 'Quà tặng'], 1, 'Fixed expenses.'),
    Q('Khoản chi nào là chi tuỳ ý?', ['Tiền điện', 'Mua sắm xa xỉ, giải trí, du lịch', 'Học phí', 'Trả nợ'], 1, 'Discretionary spending.'),
    Q('Nguyên tắc cân đối thu chi?', ['Chi > thu', 'Chi ≤ thu và dành phần tiết kiệm/dự phòng', 'Vay càng nhiều càng tốt', 'Tiêu hết'], 1, 'Sống trong khả năng.'),
    Q('Quỹ dự phòng nên có?', ['0 đồng', 'Bằng 3–6 tháng chi tiêu cơ bản', '1 năm chi tiêu', 'Không cần'], 1, 'Emergency fund.'),
  ]),

  M(14, 'Quản lí thu chi gia đình — Lập kế hoạch', [
    Q('Gia đình anh A thu nhập 25 triệu/tháng. Chi cố định 18 triệu. Số tiền còn lại tối đa?', ['25 triệu', '7 triệu', '18 triệu', '0'], 1, '25 − 18 = 7 triệu.'),
    Q('Trong 7 triệu còn lại, anh A nên?', ['Tiêu hết', 'Phân bổ cho tiết kiệm, đầu tư và chi tuỳ ý hợp lí', 'Chỉ tiết kiệm', 'Chỉ ăn chơi'], 1, 'Cân đối.'),
    Q('Quy tắc 50/30/20 nghĩa là?', ['Không có ý nghĩa', '50% nhu cầu thiết yếu, 30% mong muốn, 20% tiết kiệm/trả nợ', '50% tiết kiệm', '50% giải trí'], 1, '50-30-20 rule.'),
    Q('Khi chi tiêu vượt thu nhập kéo dài, hậu quả?', ['Giàu lên', 'Nợ nần, mất an toàn tài chính', 'Tự cân bằng', 'Vô hại'], 1, 'Nợ.'),
    Q('Công cụ giúp theo dõi thu chi?', ['Không cần ghi chép', 'Sổ tay, bảng tính, ứng dụng quản lí tài chính (Money Lover, Misa…)', 'Trí nhớ thuần tuý', 'Không có công cụ'], 1, 'Tracking tool.'),
    Q('Để tăng thu nhập, gia đình có thể?', ['Trộm cắp', 'Học thêm kĩ năng, làm thêm việc hợp pháp, đầu tư phù hợp', 'Lừa đảo', 'Cờ bạc'], 1, 'Tăng thu hợp pháp.'),
  ]),

  M(15, 'Quản lí thu chi gia đình — Tiết kiệm và đầu tư', [
    Q('Tiết kiệm là?', ['Tiêu hết', 'Để dành một phần thu nhập cho mục tiêu tương lai', 'Vay nợ', 'Đầu tư mạo hiểm'], 1, 'Savings.'),
    Q('Đầu tư khác tiết kiệm ở chỗ?', ['Không khác', 'Đầu tư có khả năng sinh lời cao hơn nhưng kèm rủi ro lớn hơn', 'Đầu tư an toàn tuyệt đối', 'Tiết kiệm sinh lời cao'], 1, 'Risk-return trade-off.'),
    Q('Hình thức tiết kiệm phổ biến?', ['Chôn dưới đất', 'Gửi tiết kiệm ngân hàng, mua trái phiếu Chính phủ', 'Đốt tiền', 'Cho vay nặng lãi'], 1, 'Kênh hợp pháp.'),
    Q('Đầu tư rủi ro cao gồm?', ['Gửi tiết kiệm', 'Cổ phiếu, bất động sản, tiền điện tử, kinh doanh', 'Trái phiếu CP', 'Tiền mặt'], 1, 'High risk.'),
    Q('Nguyên tắc đầu tư an toàn?', ['Dồn hết một kênh', 'Không bỏ trứng vào một giỏ - đa dạng hoá', 'Vay để đầu tư', 'Mạo hiểm tối đa'], 1, 'Diversification.'),
    Q('Để đầu tư hiệu quả cần?', ['Nghe đồn', 'Có kiến thức, tìm hiểu kĩ, không dùng tiền vay nóng, đầu tư dài hạn', 'Tin tưởng "thầy" mạng', 'Vội vàng'], 1, 'Financial literacy.'),
  ]),

  M(16, 'Ôn tập HK1 — Phần kinh tế (1)', [
    Q('Phát triển kinh tế gồm?', ['Chỉ tăng GDP', 'Tăng trưởng + chuyển dịch cơ cấu + tiến bộ xã hội', 'Chỉ chuyển dịch', 'Chỉ tiến bộ XH'], 1, 'Tổng hợp 3 yếu tố.'),
    Q('Việt Nam gia nhập WTO năm?', ['2006', '2007', '2008', '2010'], 1, '11/1/2007.'),
    Q('Chế độ BHXH bắt buộc có?', ['3 chế độ', '5 chế độ: ốm đau, thai sản, TNLĐ-BNN, hưu trí, tử tuất', '7 chế độ', '2 chế độ'], 1, '5 chế độ.'),
    Q('An sinh xã hội có mấy trụ cột chính?', ['2', '3', '4', '5'], 2, '4 trụ cột.'),
    Q('SWOT là?', ['Một loại thuế', 'Phân tích S-W-O-T', 'Tên ngân hàng', 'Tên doanh nghiệp'], 1, 'Strengths-Weaknesses-Opportunities-Threats.'),
    Q('CSR có 4 trách nhiệm theo Carroll là?', ['Kinh tế, pháp lý, đạo đức, từ thiện', 'Chỉ pháp lý', 'Chỉ đạo đức', 'Chỉ kinh tế'], 0, '4 cấp độ.'),
  ]),

  M(17, 'Ôn tập HK1 — Phần kinh tế (2)', [
    Q('Quỹ dự phòng nên bằng?', ['1 tháng chi tiêu', '3-6 tháng chi tiêu', '0 đồng', '2 năm thu nhập'], 1, '3-6 tháng.'),
    Q('Quy tắc 50/30/20 là?', ['50 thiết yếu - 30 mong muốn - 20 tiết kiệm', '50 chơi - 30 tiết kiệm - 20 chi', 'Không có ý nghĩa', '50 nợ'], 0, 'Quy tắc tài chính cá nhân.'),
    Q('Tăng trưởng kinh tế đo bằng?', ['HDI', 'GDP, GNI, GDP/người', 'Tỷ lệ sinh', 'Tuổi thọ'], 1, 'Chỉ tiêu kinh tế.'),
    Q('FDI là?', ['Đầu tư trực tiếp nước ngoài', 'Hỗ trợ chính thức', 'Vay thương mại', 'Viện trợ'], 0, 'FDI.'),
    Q('Hành vi VI PHẠM trách nhiệm xã hội của DN?', ['Đóng thuế đầy đủ', 'Gây ô nhiễm môi trường, bóc lột lao động', 'Sản phẩm an toàn', 'Tài trợ học bổng'], 1, 'Tiêu cực.'),
    Q('Để đầu tư an toàn cần?', ['Mạo hiểm tối đa', 'Đa dạng hoá danh mục, tìm hiểu kĩ, dài hạn', 'Vay nóng', 'Tin lời đồn'], 1, 'Nguyên tắc.'),
  ]),

  M(18, 'Thi học kỳ I — Kinh tế', [
    Q('Phát triển bền vững nghĩa là?', ['Tăng trưởng cao bằng mọi giá', 'Đáp ứng nhu cầu hiện tại không tổn hại đến thế hệ tương lai (kinh tế-xã hội-môi trường)', 'Chỉ tăng GDP', 'Chỉ bảo vệ MT'], 1, 'Sustainable development.'),
    Q('Hội nhập kinh tế quốc tế của Việt Nam thể hiện qua?', ['Đóng cửa', 'Gia nhập WTO, ASEAN, CPTPP, EVFTA, RCEP', 'Tự cung tự cấp', 'Chỉ một hiệp định'], 1, 'Đa dạng hiệp định.'),
    Q('Học sinh tham gia BHYT là thực hiện?', ['Vi phạm', 'Trách nhiệm với an sinh xã hội và bảo vệ sức khoẻ bản thân', 'Tự nguyện hoàn toàn không bắt buộc', 'Không cần'], 1, 'BHYT HSSV.'),
    Q('Khi lập kế hoạch kinh doanh, KHÔNG được thiếu?', ['Logo đẹp', 'Phân tích thị trường, sản phẩm, tài chính, rủi ro', 'Tên thương hiệu kêu', 'Đồng phục'], 1, 'Nội dung cốt lõi.'),
    Q('Doanh nghiệp có CSR tốt thường?', ['Phá sản nhanh', 'Có uy tín, phát triển bền vững, được khách hàng tin yêu', 'Mất khách hàng', 'Bị tẩy chay'], 1, 'Lợi ích CSR.'),
    Q('Một gia đình tháng nào chi cũng > thu sẽ dẫn đến?', ['Giàu lên', 'Nợ nần và mất an toàn tài chính', 'Tự cân bằng', 'Vô hại'], 1, 'Nợ tích luỹ.'),
  ]),

  // ──────────────── HK2 — PHÁP LUẬT ────────────────
  M(19, 'Quyền và nghĩa vụ trong kinh doanh', [
    Q('Theo Hiến pháp 2013, công dân có quyền?', ['Cấm kinh doanh', 'Tự do kinh doanh trong những ngành nghề mà pháp luật không cấm', 'Chỉ kinh doanh nhỏ', 'Phải xin phép tất cả'], 1, 'Điều 33 HP 2013.'),
    Q('Quyền tự do kinh doanh bao gồm?', ['Chỉ chọn nghề', 'Chọn loại hình, ngành nghề, quy mô, hình thức tổ chức kinh doanh', 'Chỉ chọn quy mô', 'Chỉ chọn nơi'], 1, 'Quyền rộng.'),
    Q('Ngành nghề cấm kinh doanh gồm?', ['Quán ăn', 'Ma tuý, mại dâm, buôn bán người, vũ khí trái phép', 'Quần áo', 'Sách'], 1, 'Cấm theo Luật Đầu tư.'),
    Q('Nghĩa vụ của người kinh doanh?', ['Tuỳ ý', 'Đăng ký kinh doanh, kê khai và nộp thuế, bảo vệ quyền lợi NTD, tuân thủ pháp luật', 'Trốn thuế', 'Lừa khách'], 1, 'Nghĩa vụ pháp lý.'),
    Q('Hộ kinh doanh phải đăng ký tại?', ['Toà án', 'Cơ quan đăng ký kinh doanh cấp huyện', 'Bộ Công thương', 'Quốc hội'], 1, 'Cấp huyện cho hộ KD.'),
    Q('Hành vi nào hợp pháp?', ['Buôn lậu', 'Mở cửa hàng tạp hoá có đăng ký, đóng thuế', 'Bán hàng giả', 'Trốn thuế'], 1, 'Tuân thủ pháp luật.'),
  ]),

  M(20, 'Nghĩa vụ nộp thuế', [
    Q('Thuế là?', ['Khoản tự nguyện', 'Khoản nộp bắt buộc vào ngân sách Nhà nước theo quy định pháp luật', 'Phí dịch vụ', 'Tiền vay'], 1, 'Bắt buộc.'),
    Q('Các loại thuế chính ở Việt Nam?', ['Chỉ TNCN', 'Thuế GTGT, TNDN, TNCN, tiêu thụ đặc biệt, xuất nhập khẩu, tài nguyên…', 'Chỉ GTGT', 'Chỉ TNDN'], 1, 'Nhiều loại thuế.'),
    Q('Thuế thu nhập cá nhân (TNCN) áp dụng cho?', ['Mọi thu nhập không trừ', 'Cá nhân có thu nhập chịu thuế sau khi giảm trừ gia cảnh', 'Doanh nghiệp', 'Trẻ em'], 1, 'TNCN cho cá nhân.'),
    Q('Mức giảm trừ gia cảnh cho bản thân (theo quy định hiện hành)?', ['5 triệu/tháng', '11 triệu/tháng', '20 triệu/tháng', '0'], 1, '11 triệu/tháng (NQ 954/2020).'),
    Q('Hành vi trốn thuế bị xử lý?', ['Không sao', 'Phạt hành chính hoặc truy cứu trách nhiệm hình sự theo BLHS', 'Khen thưởng', 'Tự xử'], 1, 'Tội phạm trốn thuế.'),
    Q('Vai trò của thuế với xã hội?', ['Không có', 'Nguồn thu chủ yếu của NSNN để chi cho quốc phòng, giáo dục, y tế, ASXH', 'Gây nghèo', 'Tạo bất bình đẳng'], 1, 'NSNN.'),
  ]),

  M(21, 'Quyền sở hữu tài sản — Khái niệm', [
    Q('Quyền sở hữu theo Bộ luật Dân sự 2015 gồm?', ['Chỉ quyền chiếm hữu', 'Chiếm hữu, sử dụng, định đoạt', 'Chỉ định đoạt', 'Chỉ sử dụng'], 1, '3 quyền năng.'),
    Q('Quyền chiếm hữu là?', ['Bán', 'Nắm giữ, quản lí tài sản', 'Cho thuê', 'Tặng'], 1, 'Possession.'),
    Q('Quyền sử dụng là?', ['Khai thác công dụng, hưởng hoa lợi, lợi tức từ tài sản', 'Bán', 'Vứt bỏ', 'Phá huỷ'], 0, 'Use.'),
    Q('Quyền định đoạt là?', ['Cho thuê tạm', 'Quyết định số phận pháp lý của tài sản (bán, tặng, cho, phá huỷ…)', 'Chiếm hữu', 'Sử dụng'], 1, 'Disposition.'),
    Q('Các hình thức sở hữu ở Việt Nam?', ['Chỉ sở hữu tư nhân', 'Sở hữu toàn dân, tập thể, tư nhân (cá nhân, tổ chức)', 'Chỉ sở hữu Nhà nước', 'Chỉ tập thể'], 1, 'Đa dạng.'),
    Q('Đất đai ở Việt Nam thuộc sở hữu?', ['Tư nhân', 'Toàn dân do Nhà nước đại diện chủ sở hữu, quản lý', 'Tập thể', 'Doanh nghiệp'], 1, 'Điều 53 HP 2013.'),
  ]),

  M(22, 'Quyền sở hữu tài sản — Bảo vệ', [
    Q('Nghĩa vụ tôn trọng tài sản người khác thể hiện qua?', ['Tự ý lấy', 'Không lấy, không xâm phạm, không phá huỷ tài sản hợp pháp của người khác', 'Phá huỷ', 'Chiếm dụng'], 1, 'Nghĩa vụ tôn trọng.'),
    Q('Khi tài sản bị xâm phạm, chủ sở hữu có quyền?', ['Im lặng', 'Yêu cầu trả lại, đòi bồi thường, kiện ra toà án', 'Tự xử bằng bạo lực', 'Bỏ qua'], 1, 'Quyền bảo vệ.'),
    Q('A nhặt được túi tiền của B nhưng giấu để dùng riêng. Hành vi của A là?', ['Đúng', 'Vi phạm pháp luật - chiếm giữ trái phép tài sản', 'Hợp pháp', 'Khôn ngoan'], 1, 'Vi phạm BLDS, có thể bị truy cứu hình sự.'),
    Q('Quyền thừa kế là?', ['Quyền cho người khác tài sản khi còn sống', 'Quyền nhận di sản của người chết để lại', 'Quyền bán nhà', 'Quyền cho thuê'], 1, 'Inheritance.'),
    Q('Người để lại di sản có thể?', ['Không được quyết định', 'Lập di chúc định đoạt tài sản hợp pháp của mình', 'Chỉ chia đều', 'Chỉ cho con trai'], 1, 'Quyền lập di chúc.'),
    Q('Khi không có di chúc, di sản được chia theo?', ['Theo ý nhà nước', 'Theo pháp luật về thừa kế (hàng thừa kế thứ nhất, hai, ba…)', 'Tuỳ ai mạnh', 'Tuỳ địa phương'], 1, 'Thừa kế theo pháp luật.'),
  ]),

  M(23, 'Hôn nhân và gia đình — Khái niệm', [
    Q('Theo Luật Hôn nhân và gia đình 2014, hôn nhân là?', ['Quan hệ làm ăn', 'Quan hệ giữa vợ và chồng sau khi kết hôn', 'Quan hệ bạn bè', 'Hợp đồng kinh tế'], 1, 'Định nghĩa.'),
    Q('Độ tuổi kết hôn theo Luật 2014?', ['Nam 18, nữ 16', 'Nam đủ 20, nữ đủ 18', 'Cả hai đủ 18', 'Cả hai đủ 22'], 1, 'Nam 20+, nữ 18+.'),
    Q('Nguyên tắc cơ bản của hôn nhân?', ['Đa thê', 'Tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng', 'Sắp đặt', 'Bị ép buộc'], 1, '4 nguyên tắc.'),
    Q('Các trường hợp cấm kết hôn?', ['Khác địa phương', 'Người đang có vợ/chồng; cùng dòng máu trực hệ; có họ trong 3 đời…', 'Khác tôn giáo', 'Khác nghề nghiệp'], 1, 'Theo Điều 5 Luật HN&GĐ.'),
    Q('Tảo hôn là?', ['Kết hôn sớm', 'Việc lấy vợ/chồng khi một hoặc cả hai bên chưa đủ tuổi kết hôn', 'Kết hôn muộn', 'Hôn nhân đồng giới'], 1, 'Tảo hôn vi phạm pháp luật.'),
    Q('Đăng ký kết hôn tại?', ['Toà án', 'UBND cấp xã nơi cư trú của một trong hai bên', 'Bệnh viện', 'Nhà thờ'], 1, 'UBND xã.'),
  ]),

  M(24, 'Hôn nhân và gia đình — Quyền nghĩa vụ', [
    Q('Quan hệ tài sản giữa vợ chồng được chia thành?', ['Chỉ chung', 'Tài sản chung và tài sản riêng', 'Chỉ riêng', 'Không phân biệt'], 1, 'BLDS+Luật HN&GĐ.'),
    Q('Tài sản chung của vợ chồng gồm?', ['Tài sản trước hôn nhân', 'Tài sản tạo ra trong thời kỳ hôn nhân, thu nhập do lao động, kinh doanh chung', 'Của hồi môn', 'Quà tặng riêng'], 1, 'Khoản 1 Điều 33.'),
    Q('Vợ chồng có quyền và nghĩa vụ?', ['Bất bình đẳng', 'Bình đẳng, tôn trọng, yêu thương, chung thuỷ, giúp đỡ nhau', 'Vợ phục tùng', 'Chồng quyết định tất'], 1, 'Bình đẳng.'),
    Q('Cha mẹ có nghĩa vụ với con?', ['Chỉ nuôi đến 16', 'Yêu thương, nuôi dưỡng, giáo dục, không phân biệt đối xử', 'Chỉ giáo dục con trai', 'Bỏ rơi'], 1, 'Nghĩa vụ cha mẹ.'),
    Q('Con có nghĩa vụ với cha mẹ?', ['Không có nghĩa vụ', 'Yêu kính, biết ơn, phụng dưỡng cha mẹ khi già yếu', 'Chỉ con trai có', 'Chỉ con gái có'], 1, 'Nghĩa vụ con cái.'),
    Q('Bạo lực gia đình bị xử lý?', ['Là chuyện riêng', 'Theo Luật Phòng chống bạo lực gia đình, có thể bị xử phạt hành chính hoặc hình sự', 'Khen thưởng', 'Bỏ qua'], 1, 'Luật năm 2022.'),
  ]),

  M(25, 'Quyền học tập của công dân', [
    Q('Quyền học tập của công dân được quy định ở?', ['Chỉ Luật Giáo dục', 'Hiến pháp 2013 (Điều 39) và Luật Giáo dục 2019', 'Chỉ HP', 'Chỉ luật dân sự'], 1, 'HP + Luật.'),
    Q('Nội dung quyền học tập?', ['Chỉ học tiểu học', 'Học không hạn chế: học bất cứ ngành nghề nào phù hợp; học suốt đời', 'Chỉ học ngành Nhà nước chỉ định', 'Chỉ học nam'], 1, 'Quyền học rộng.'),
    Q('Trách nhiệm của Nhà nước với giáo dục?', ['Bỏ mặc', 'Phổ cập GD bắt buộc với tiểu học, đầu tư cho giáo dục, ưu tiên vùng khó khăn', 'Chỉ cho giàu', 'Cấm học'], 1, 'Phổ cập + ưu tiên.'),
    Q('Hành vi VI PHẠM quyền học tập?', ['Cho đi học', 'Cản trở con đi học, bắt nghỉ học để lao động sớm', 'Hỗ trợ học bổng', 'Tài trợ giáo dục'], 1, 'Vi phạm pháp luật.'),
    Q('Quyền sáng tạo của công dân thể hiện qua?', ['Cấm sáng chế', 'Tự do nghiên cứu khoa học, sáng tạo văn học nghệ thuật, được bảo hộ quyền tác giả-SHTT', 'Chỉ chép', 'Cấm phát minh'], 1, 'Quyền sáng tạo.'),
    Q('Quyền phát triển của công dân là?', ['Quyền không học', 'Được sống trong môi trường an toàn, chăm sóc sức khoẻ, hưởng thụ văn hoá, vui chơi', 'Quyền giàu', 'Quyền chọn lựa'], 1, 'Phát triển toàn diện.'),
  ]),

  M(26, 'Bảo vệ chăm sóc sức khoẻ', [
    Q('Quyền được chăm sóc sức khoẻ thuộc?', ['Quyền nhân thân', 'Quyền sống, quyền hưởng dịch vụ y tế cơ bản', 'Quyền sở hữu', 'Quyền chính trị'], 1, 'Quyền sống + y tế.'),
    Q('Cơ sở pháp lý chăm sóc sức khoẻ?', ['Chỉ HP', 'Hiến pháp, Luật Khám chữa bệnh, Luật BHYT', 'Chỉ BHYT', 'Chỉ KCB'], 1, 'Hệ thống PL.'),
    Q('Bảo hiểm y tế toàn dân nghĩa là?', ['Chỉ người nghèo', 'Toàn bộ dân số được tham gia BHYT, tiến tới phổ cập', 'Chỉ công chức', 'Chỉ trẻ em'], 1, 'Lộ trình BHYT toàn dân.'),
    Q('Hành vi VI PHẠM quyền chăm sóc sức khoẻ?', ['Khám bệnh', 'Hành nghề y trái phép, bán thuốc giả, từ chối cấp cứu', 'Chữa bệnh', 'Tiêm vắc xin'], 1, 'Vi phạm.'),
    Q('Trẻ em dưới 6 tuổi được?', ['Cấp BHYT miễn phí và khám chữa bệnh miễn phí', 'Phải mua BHYT đắt', 'Không được KCB', 'Tự lo'], 0, 'Chính sách trẻ em.'),
    Q('Khi đi khám BHYT đúng tuyến, mức hưởng cho người tham gia thông thường thường là?', ['100%', '80% chi phí trong phạm vi quyền lợi', '50%', '20%'], 1, '80% với người lao động thường.'),
  ]),

  M(27, 'An sinh xã hội theo pháp luật', [
    Q('Pháp luật về ASXH bao gồm?', ['Chỉ Luật BHXH', 'Luật BHXH, Luật BHYT, Luật Việc làm, Luật Người cao tuổi, Luật Trẻ em, Luật NKT…', 'Chỉ BHYT', 'Chỉ Luật Việc làm'], 1, 'Nhiều luật.'),
    Q('Đối tượng được trợ giúp xã hội?', ['Mọi người', 'Người già cô đơn không nơi nương tựa, trẻ em mồ côi, người khuyết tật nặng…', 'Người giàu', 'Cán bộ'], 1, 'Đối tượng yếu thế.'),
    Q('Người cao tuổi đủ 80 tuổi không có lương hưu được?', ['Tự lo', 'Trợ cấp xã hội hằng tháng và BHYT', 'Phạt tiền', 'Cấm ra đường'], 1, 'Luật Người cao tuổi.'),
    Q('Trẻ em được pháp luật bảo vệ trước hành vi?', ['Yêu thương', 'Xâm hại, bạo lực, bóc lột, lao động trẻ em', 'Học tập', 'Vui chơi'], 1, 'Luật Trẻ em 2016.'),
    Q('Hành vi nào vi phạm Luật Người khuyết tật?', ['Hỗ trợ NKT', 'Phân biệt đối xử, từ chối tuyển dụng vì khuyết tật', 'Tạo việc làm', 'Tài trợ học bổng'], 1, 'Vi phạm.'),
    Q('Trách nhiệm của công dân với chính sách ASXH?', ['Trục lợi', 'Tham gia, đóng góp, không khai khống, không trục lợi', 'Lừa đảo', 'Vô cảm'], 1, 'Trung thực + ủng hộ.'),
  ]),

  M(28, 'Bảo vệ di sản văn hoá và môi trường', [
    Q('Di sản văn hoá gồm?', ['Chỉ vật thể', 'Di sản văn hoá vật thể (di tích, hiện vật) và phi vật thể (lễ hội, dân ca…)', 'Chỉ phi vật thể', 'Chỉ kiến trúc'], 1, 'Hai loại.'),
    Q('Luật Di sản văn hoá ban hành lần đầu năm?', ['2001', '2005', '2010', '2018'], 0, 'Luật DSVH 2001, sửa 2009.'),
    Q('Hành vi vi phạm Luật Di sản văn hoá?', ['Tham quan', 'Lấn chiếm, xâm phạm di tích; mua bán cổ vật trái phép; phá hoại di sản', 'Học hỏi', 'Bảo tồn'], 1, 'Vi phạm.'),
    Q('Trách nhiệm của công dân với di sản?', ['Phá hoại', 'Bảo vệ, gìn giữ, phát huy giá trị; thông báo khi phát hiện vi phạm', 'Lấy về nhà', 'Tô vẽ bậy'], 1, 'Nghĩa vụ công dân.'),
    Q('Bảo vệ môi trường theo pháp luật là?', ['Tự nguyện hoàn toàn', 'Nghĩa vụ của mọi tổ chức, cá nhân theo Luật Bảo vệ MT 2020', 'Chỉ của Nhà nước', 'Tuỳ chọn'], 1, 'Nghĩa vụ pháp lý.'),
    Q('Hành vi VI PHẠM Luật BVMT?', ['Trồng cây', 'Xả thải vượt chuẩn, chặt phá rừng trái phép, săn bắt động vật hoang dã', 'Phân loại rác', 'Tiết kiệm điện'], 1, 'Vi phạm.'),
  ]),

  M(29, 'Bảo vệ tài nguyên thiên nhiên', [
    Q('Tài nguyên thiên nhiên gồm?', ['Chỉ khoáng sản', 'Đất, nước, khoáng sản, rừng, biển, không khí, đa dạng sinh học', 'Chỉ rừng', 'Chỉ biển'], 1, 'Đa dạng.'),
    Q('Tài nguyên không tái tạo gồm?', ['Năng lượng mặt trời', 'Khoáng sản (than, dầu mỏ, kim loại)', 'Gió', 'Nước'], 1, 'Non-renewable.'),
    Q('Tài nguyên tái tạo gồm?', ['Dầu mỏ', 'Năng lượng mặt trời, gió, nước, sinh khối', 'Than đá', 'Vàng'], 1, 'Renewable.'),
    Q('Hành vi vi phạm Luật Tài nguyên nước?', ['Tiết kiệm', 'Khai thác trái phép, xả thải gây ô nhiễm nguồn nước', 'Bảo vệ', 'Sử dụng tiết kiệm'], 1, 'Vi phạm.'),
    Q('Hành vi vi phạm Luật Khoáng sản?', ['Khai thác có phép', 'Khai thác trái phép, không hoàn thổ, gây ô nhiễm', 'Đóng thuế đầy đủ', 'Báo cáo môi trường'], 1, 'Khai thác lậu.'),
    Q('Trách nhiệm của công dân với tài nguyên thiên nhiên?', ['Khai thác hết', 'Sử dụng tiết kiệm, hợp lí; tố giác vi phạm', 'Bán cho nước ngoài', 'Phá hoại'], 1, 'Sử dụng bền vững.'),
  ]),

  M(30, 'Pháp luật quốc tế cơ bản', [
    Q('Pháp luật quốc tế là?', ['Luật của một quốc gia', 'Hệ thống các nguyên tắc, quy phạm điều chỉnh quan hệ giữa các quốc gia và chủ thể khác của luật QT', 'Luật của Liên hợp quốc', 'Luật riêng'], 1, 'International law.'),
    Q('Nguyên tắc cơ bản của pháp luật quốc tế?', ['Bá quyền', 'Bình đẳng chủ quyền, không can thiệp nội bộ, giải quyết hoà bình tranh chấp, tận tâm thiện chí', 'Vũ lực', 'Đe doạ'], 1, 'Nguyên tắc cơ bản.'),
    Q('Liên hợp quốc thành lập năm?', ['1919', '1945', '1950', '1975'], 1, 'UN ra đời 24/10/1945.'),
    Q('Việt Nam gia nhập LHQ năm?', ['1975', '1977', '1986', '2007'], 1, 'Việt Nam là thành viên LHQ từ 20/9/1977.'),
    Q('Điều ước quốc tế là?', ['Văn bản cấp xã', 'Thoả thuận giữa các quốc gia/chủ thể luật QT có giá trị pháp lý ràng buộc', 'Hợp đồng thương mại', 'Tuyên bố báo chí'], 1, 'Treaty.'),
    Q('Quan hệ giữa pháp luật trong nước và pháp luật quốc tế?', ['Đối lập tuyệt đối', 'Có mối quan hệ bổ sung, hỗ trợ; điều ước QT có thể được nội luật hoá', 'Không liên quan', 'Triệt tiêu nhau'], 1, 'Bổ sung.'),
  ]),

  M(31, 'WTO và hợp đồng thương mại quốc tế', [
    Q('WTO là?', ['Tổ chức quân sự', 'Tổ chức Thương mại Thế giới', 'Liên minh tôn giáo', 'Khối quân sự'], 1, 'World Trade Organization.'),
    Q('Nguyên tắc tối huệ quốc (MFN) nghĩa là?', ['Phân biệt đối xử', 'Đối xử với hàng hoá của một thành viên WTO không kém hơn đối xử với hàng từ bất kỳ thành viên nào khác', 'Đối xử tốt nhất với hàng nội', 'Cấm nhập khẩu'], 1, 'Most Favoured Nation.'),
    Q('Nguyên tắc đối xử quốc gia (NT) nghĩa là?', ['Phân biệt hàng ngoại', 'Đối xử với hàng nhập khẩu (sau khi đã thông quan) không kém hơn hàng nội', 'Cấm nhập khẩu', 'Tăng thuế nhập khẩu'], 1, 'National Treatment.'),
    Q('Hợp đồng thương mại quốc tế là?', ['Hợp đồng giữa cá nhân nội', 'Hợp đồng mua bán hàng hoá/dịch vụ giữa các bên có trụ sở thương mại tại các quốc gia khác nhau', 'Hợp đồng lao động', 'Hợp đồng vay nội địa'], 1, 'International trade contract.'),
    Q('Công ước Viên 1980 (CISG) điều chỉnh?', ['Hôn nhân', 'Hợp đồng mua bán hàng hoá quốc tế', 'Tỵ nạn', 'Hàng không'], 1, 'CISG.'),
    Q('Việt Nam tham gia CISG có hiệu lực từ?', ['1980', '01/01/2017', '2007', '2020'], 1, 'Việt Nam gia nhập CISG, hiệu lực 1/1/2017.'),
  ]),

  M(32, 'Hợp đồng thương mại quốc tế — Nội dung', [
    Q('Một hợp đồng thương mại quốc tế thường có nội dung?', ['Chỉ giá', 'Tên hàng, số lượng, chất lượng, giá cả, giao hàng, thanh toán, giải quyết tranh chấp', 'Chỉ tên hàng', 'Chỉ thời gian'], 1, 'Đầy đủ điều khoản.'),
    Q('Incoterms là?', ['Một loại thuế', 'Bộ quy tắc thương mại quốc tế của ICC quy định điều kiện giao hàng', 'Tổ chức tài chính', 'Hợp đồng mẫu'], 1, 'Incoterms by ICC.'),
    Q('FOB nghĩa là?', ['Người bán giao hàng lên tàu tại cảng đi và rủi ro chuyển từ điểm đó', 'Tự do gửi', 'Giao tại kho', 'Thuê tàu chở'], 0, 'Free On Board.'),
    Q('CIF gồm?', ['Chỉ giá hàng', 'Cost + Insurance + Freight (giá hàng + bảo hiểm + cước phí tới cảng đến)', 'Chỉ bảo hiểm', 'Chỉ cước'], 1, 'CIF.'),
    Q('Phương thức thanh toán quốc tế phổ biến?', ['Trả tiền mặt tận tay', 'L/C (tín dụng chứng từ), T/T (chuyển tiền), nhờ thu D/A, D/P', 'Chuyển tay', 'Bitcoin'], 1, 'Methods of payment.'),
    Q('Khi tranh chấp hợp đồng quốc tế, các bên có thể giải quyết tại?', ['Quán cà phê', 'Trọng tài thương mại quốc tế (VIAC, SIAC, ICC…) hoặc toà án có thẩm quyền', 'Trên mạng xã hội', 'Tự xử'], 1, 'Cơ chế giải quyết.'),
  ]),

  M(33, 'Công pháp quốc tế — Dân cư', [
    Q('Dân cư của một quốc gia bao gồm?', ['Chỉ công dân', 'Công dân, người nước ngoài, người không quốc tịch cư trú trên lãnh thổ', 'Chỉ người nước ngoài', 'Chỉ người tị nạn'], 1, '3 nhóm.'),
    Q('Quốc tịch là?', ['Hộ khẩu', 'Mối quan hệ pháp lý giữa cá nhân với một quốc gia, xác định quyền-nghĩa vụ công dân', 'Nơi sinh', 'Họ tên'], 1, 'Nationality.'),
    Q('Theo Luật Quốc tịch VN 2008, quốc tịch VN có thể có được bằng cách?', ['Mua', 'Do sinh ra, do được nhập, do trở lại, theo điều ước quốc tế', 'Tự nhận', 'Bốc thăm'], 1, 'Cách có quốc tịch.'),
    Q('Người nước ngoài tại Việt Nam được?', ['Mọi quyền như công dân', 'Hưởng các quyền theo pháp luật VN và điều ước QT, trừ quyền chính trị dành cho công dân VN', 'Không có quyền nào', 'Mọi quyền chính trị'], 1, 'Quyền có giới hạn.'),
    Q('Người tị nạn được bảo vệ theo?', ['Luật một nước', 'Công ước 1951 về vị thế người tị nạn và Nghị định thư 1967', 'Hiệp ước WTO', 'CISG'], 1, 'UN Refugee Convention.'),
    Q('Dẫn độ là?', ['Trục xuất tị nạn', 'Việc một quốc gia trao trả tội phạm cho quốc gia khác để xét xử/thi hành án theo điều ước', 'Cấp visa', 'Cấp quốc tịch'], 1, 'Extradition.'),
  ]),

  M(34, 'Công pháp quốc tế — Lãnh thổ và chủ quyền', [
    Q('Lãnh thổ quốc gia gồm?', ['Chỉ đất liền', 'Vùng đất, vùng nước (nội thuỷ, lãnh hải), vùng trời, lòng đất', 'Chỉ vùng biển', 'Chỉ vùng trời'], 1, 'Lãnh thổ toàn vẹn.'),
    Q('Theo UNCLOS 1982, lãnh hải rộng?', ['3 hải lý', '12 hải lý tính từ đường cơ sở', '24 hải lý', '200 hải lý'], 1, '12 hải lý.'),
    Q('Vùng đặc quyền kinh tế (EEZ) rộng?', ['12 hải lý', '200 hải lý tính từ đường cơ sở', '24 hải lý', '500 hải lý'], 1, 'EEZ 200 hải lý.'),
    Q('Chủ quyền quốc gia có đặc điểm?', ['Có thể chia sẻ tuỳ ý', 'Tối cao, không phụ thuộc bất kỳ quyền lực nào ngoài quốc gia', 'Bị bên ngoài quyết định', 'Tạm thời'], 1, 'Sovereignty.'),
    Q('Quần đảo Hoàng Sa và Trường Sa thuộc?', ['Trung Quốc', 'Chủ quyền Việt Nam — có đầy đủ bằng chứng lịch sử và pháp lý', 'Philippines', 'Không xác định'], 1, 'Chủ quyền VN.'),
    Q('Việt Nam giải quyết tranh chấp Biển Đông theo nguyên tắc?', ['Vũ lực', 'Hoà bình, trên cơ sở luật pháp quốc tế, đặc biệt UNCLOS 1982', 'Đơn phương', 'Im lặng'], 1, 'Hoà bình + luật QT.'),
  ]),

  M(35, 'Thi học kỳ II — Tổng ôn pháp luật', [
    Q('Quyền sở hữu theo BLDS 2015 gồm 3 quyền?', ['Mua, bán, đổi', 'Chiếm hữu, sử dụng, định đoạt', 'Thuê, mượn, vay', 'Tặng, cho, biếu'], 1, '3 quyền năng.'),
    Q('Tuổi kết hôn theo Luật HN&GĐ 2014?', ['Nam 18, nữ 16', 'Nam đủ 20, nữ đủ 18', 'Cả hai đủ 18', 'Cả hai đủ 21'], 1, '20/18.'),
    Q('WTO viết tắt của?', ['Tổ chức Y tế Thế giới', 'Tổ chức Thương mại Thế giới', 'Tổ chức Lao động QT', 'Tổ chức Du lịch TG'], 1, 'WTO.'),
    Q('Lãnh hải Việt Nam rộng?', ['3 hải lý', '12 hải lý', '24 hải lý', '200 hải lý'], 1, 'UNCLOS.'),
    Q('Đất đai ở Việt Nam thuộc sở hữu?', ['Tư nhân', 'Toàn dân do Nhà nước đại diện chủ sở hữu', 'Tập thể', 'Tổ chức nước ngoài'], 1, 'HP 2013.'),
    Q('Hành vi trục lợi chính sách an sinh xã hội?', ['Là quyền công dân', 'Là vi phạm pháp luật, bị xử lý hành chính hoặc hình sự', 'Khen thưởng', 'Cho phép'], 1, 'Trục lợi = vi phạm.'),
  ]),
];

export const H12GDCD_SCENARIOS = indexBy(H12GDCD_WEEKS);
