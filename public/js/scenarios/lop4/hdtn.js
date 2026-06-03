// ============================================================
// Lớp 4 · HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018 (3 bộ Cánh Diều / Kết nối / Chân trời).
// ID prefix: "P4HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P4HDTN', 'hdtn', n, title, qs, opts);

export const P4HDTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Em là học sinh Lớp 4', [
    Q('Lên Lớp 4, em là?', ['Anh chị của các em lớp dưới', 'Không khác gì', 'Vẫn như cũ', 'Học sinh nhỏ hơn lớp 3'], 0, 'Lên Lớp 4 em đã là anh/chị, cần gương mẫu.'),
    Q('Khi gặp em lớp 1, em nên?', ['Gọi em bằng biệt danh chế giễu', 'Trêu chọc', 'Chào hỏi, giúp đỡ', 'Đẩy bạn'], 2, 'Anh chị giúp đỡ em nhỏ.'),
    Q('Vai trò của em ở Lớp 4?', ['Chỉ ngồi chơi', 'Học sinh lớn của khối tiểu học', 'Không có vai trò gì', 'Trẻ con không quan tâm'], 1, 'Lớp 4 là một trong hai lớp lớn nhất khối tiểu học.'),
    Q('Em cần làm gương cho?', ['Các em lớp dưới', 'Thầy cô', 'Anh chị lớp trên', 'Người lớn'], 0, 'Là anh/chị nên cần làm gương cho em nhỏ.'),
  ]),
  M(2, 'Tự giới thiệu bản thân', [
    Q('Khi giới thiệu bản thân em nói gì?', ['Cãi nhau', 'Tên, lớp, sở thích', 'Chỉ tên', 'Không nói gì'], 1, 'Giới thiệu cơ bản: tên, lớp, sở thích.'),
    Q('Thái độ khi giới thiệu?', ['Quát to', 'Tự tin, lễ phép', 'Cúi gằm mặt', 'Im lặng'], 1, 'Tự tin và lễ phép.'),
    Q('Khi nghe bạn giới thiệu em?', ['Tranh nói chen vào để giới thiệu mình trước', 'Lắng nghe, vỗ tay', 'Sửa lưng bạn ngay khi bạn đang nói', 'Cười nhạo'], 1, 'Tôn trọng khi bạn nói.'),
    Q('Lần đầu gặp bạn mới em nên?', ['Cười và bắt tay', 'Trêu chọc', 'Phớt lờ', 'Đẩy bạn'], 0, 'Thân thiện với bạn mới.'),
  ]),
  M(3, 'Kĩ năng học tập — Lập thời gian biểu', [
    Q('Thời gian biểu giúp?', ['Cân đối học – chơi – nghỉ', 'Lười hơn', 'Mất thời gian', 'Chỉ áp dụng cho người lớn đi làm'], 0, 'Quản lý thời gian hợp lý.'),
    Q('Khung giờ học buổi tối phù hợp?', ['Khoảng 19:00–21:00', '00:00–02:00', '03:00–05:00', '13:00–18:00'], 0, 'Tối ôn bài và nghỉ trước 22:00.'),
    Q('Khi lập thời gian biểu em cần?', ['Chỉ học', 'Chỉ ngủ', 'Đủ học, chơi, ngủ', 'Chỉ chơi'], 2, 'Cân đối các hoạt động.'),
    Q('Khi không theo kịp thời gian biểu em?', ['Điều chỉnh hợp lý', 'Đổ lỗi', 'Cố làm cho xong dù mất ngủ', 'Bỏ luôn'], 0, 'Linh hoạt điều chỉnh.'),
    Q('Một ngày nên ngủ?', ['3 tiếng', '9–10 tiếng', '0 tiếng', '15 tiếng'], 1, 'Trẻ em Lớp 4 cần 9–10 tiếng ngủ.'),
  ]),
  M(4, 'Kĩ năng tự phục vụ', [
    Q('Tự phục vụ là?', ['Tự làm việc cá nhân của mình', 'Nhờ người khác làm hết', 'Chờ bố mẹ nhắc mới làm', 'Làm hộ việc của bạn cùng lớp'], 0, 'Tự lập trong sinh hoạt.'),
    Q('Việc em có thể tự làm?', ['Lái xe', 'Đi làm', 'Gấp chăn, sắp xếp sách vở', 'Nấu cơm bếp gas một mình lúc nhỏ'], 2, 'Việc phù hợp lứa tuổi.'),
    Q('Trước khi đi học em cần?', ['Không cần soạn', 'Lấy bừa', 'Để nguyên hôm trước', 'Soạn sách vở theo thời khoá biểu'], 3, 'Soạn sách đúng tiết.'),
    Q('Khi ăn xong em nên?', ['Để mẹ làm hết', 'Bỏ đi chơi', 'Mang bát đĩa của mình ra rửa/để vào bồn', 'Vứt bừa'], 2, 'Giúp đỡ việc nhà.'),
  ]),
  M(5, 'Làm việc nhóm — Phân công nhiệm vụ', [
    Q('Làm việc nhóm cần?', ['Im lặng', 'Một người làm hết', 'Mỗi bạn tự chọn việc mình thích, không bàn', 'Phân công rõ ràng'], 3, 'Mỗi người một nhiệm vụ.'),
    Q('Khi bạn gặp khó em nên?', ['Cười nhạo', 'Mặc kệ', 'Nhắc bạn rằng đó là lỗi của bạn', 'Giúp đỡ bạn'], 3, 'Đồng đội hỗ trợ nhau.'),
    Q('Trưởng nhóm có vai trò?', ['Chỉ ghi tên nhóm rồi để bạn tự làm hết', 'Áp đặt', 'Điều phối, lắng nghe ý kiến', 'Quát mắng'], 2, 'Lãnh đạo dân chủ.'),
    Q('Khi có ý kiến trái chiều em?', ['Im lặng giận', 'Cãi nhau', 'Bàn bạc, thống nhất', 'Bỏ nhóm'], 2, 'Thảo luận để đồng thuận.'),
    Q('Kết quả nhóm là của?', ['Cả nhóm', 'Người làm ít', 'Riêng trưởng nhóm', 'Người làm nhiều'], 0, 'Thành quả chung.'),
  ]),
  M(6, 'Tôn trọng sự khác biệt', [
    Q('Mỗi bạn trong lớp?', ['Phải giống hệt nhau', 'Phải im lặng', 'Có cá tính, sở thích riêng', 'Không có gì đặc biệt'], 2, 'Tôn trọng đa dạng.'),
    Q('Khi bạn có sở thích khác em?', ['Tránh xa', 'Tôn trọng', 'Ép bạn theo mình', 'Cười nhạo'], 1, 'Tôn trọng sự khác biệt.'),
    Q('Khi bạn nói tiếng địa phương em?', ['Tôn trọng và học hỏi', 'Không chơi', 'Cười nhạo', 'Bắt chước trêu'], 0, 'Mỗi vùng miền có nét đẹp riêng.'),
    Q('Khi bạn khuyết tật em nên?', ['Tránh xa', 'Cười nhạo', 'Lảng tránh', 'Quan tâm, hỗ trợ bình thường'], 3, 'Đối xử bình đẳng và yêu thương.'),
  ]),
  M(7, 'Sắp xếp góc học tập', [
    Q('Góc học tập tốt cần?', ['Ánh sáng, yên tĩnh, gọn gàng', 'Cạnh TV', 'Trên giường', 'Tối, ồn, bừa bãi'], 0, 'Đủ sáng, yên tĩnh, ngăn nắp.'),
    Q('Khi học em ngồi?', ['Ngay ngắn, lưng thẳng', 'Ngồi vắt chéo chân lên ghế', 'Tì cằm sát mặt bàn để nhìn rõ', 'Cong lưng'], 0, 'Tư thế ngồi đúng.'),
    Q('Khoảng cách mắt – sách?', ['5 cm', 'Càng gần càng tốt', '25–30 cm', '1 m'], 2, 'Phòng chống cận thị.'),
    Q('Sau khi học xong em?', ['Để nguyên', 'Vứt bừa', 'Dọn bàn, xếp sách vở', 'Để sách ở lớp, không mang về'], 2, 'Giữ gọn gàng góc học tập.'),
  ]),
  M(8, 'Em yêu trường lớp', [
    Q('Em yêu trường lớp thể hiện qua?', ['Giữ vệ sinh, học chăm', 'Bỏ học', 'Chỉ làm bài tập, không cần giữ vệ sinh', 'Vẽ bậy'], 0, 'Hành động cụ thể.'),
    Q('Khi thấy rác trong sân?', ['Đá rác', 'Bỏ qua', 'Vứt thêm', 'Nhặt bỏ vào thùng'], 3, 'Chung tay giữ vệ sinh.'),
    Q('Trường em là nơi?', ['Chỉ ngủ', 'Học tập và rèn luyện', 'Nơi để gặp bạn ngoài giờ học', 'Chỉ chơi'], 1, 'Nơi học và rèn luyện.'),
    Q('Khi ra khỏi lớp em nên?', ['Bật tất cả lên', 'Để bừa', 'Mặc kệ', 'Tắt điện, đóng cửa, xếp ghế'], 3, 'Tiết kiệm điện và gọn gàng.'),
  ]),
  M(9, 'Nghề trong cộng đồng — Nghề giáo', [
    Q('Nghề giáo viên là?', ['Dạy học, giáo dục', 'Xây dựng', 'Sửa xe', 'Bán hàng'], 0, 'Giáo viên dạy học.'),
    Q('Ngày Nhà giáo Việt Nam?', ['1/6', '20/11', '8/3', '20/10'], 1, '20/11 hằng năm.'),
    Q('Em làm gì để thầy cô vui?', ['Quên ơn', 'Tặng quà đắt tiền cho thầy cô', 'Chăm học, lễ phép', 'Bỏ học'], 2, 'Tri ân thầy cô.'),
    Q('Khi thầy cô giảng em?', ['Lắng nghe, ghi chép', 'Chỉ nghe, không cần ghi vì sẽ nhớ', 'Nói chuyện', 'Ngủ gật'], 0, 'Tôn trọng giờ học.'),
    Q('Thầy cô là?', ['Người bán hàng', 'Không quen', 'Người lạ', 'Người lái đò tri thức'], 3, 'Hình ảnh ẩn dụ đẹp về thầy cô.'),
  ]),
  M(10, 'Nghề bác sĩ — y tế', [
    Q('Bác sĩ làm gì?', ['Khám chữa bệnh', 'Bán hàng', 'Dạy học', 'Vẽ tranh'], 0, 'Chăm sóc sức khoẻ.'),
    Q('Y tá/điều dưỡng?', ['Cắt tóc', 'Lái xe', 'Bán nước', 'Hỗ trợ bác sĩ, chăm bệnh nhân'], 3, 'Điều dưỡng chăm sóc bệnh nhân.'),
    Q('Khi bị bệnh em?', ['Cố đi học bình thường để khỏi mất bài', 'Tự uống thuốc bừa', 'Bỏ qua', 'Nói với người lớn, đi khám'], 3, 'Báo người lớn để chữa kịp thời.'),
    Q('Khi vào bệnh viện em?', ['Cười nói lớn', 'Chạy nhảy', 'Phá đồ', 'Đi nhẹ nói khẽ'], 3, 'Giữ trật tự.'),
  ]),
  M(11, 'Nghề nông dân', [
    Q('Nông dân làm gì?', ['Lái xe', 'Dạy học', 'Bán hàng', 'Trồng cây, chăn nuôi'], 3, 'Cung cấp lương thực.'),
    Q('Hạt gạo có được nhờ?', ['Tự nhiên', 'Tự sinh ra', 'Máy in', 'Mồ hôi người nông dân'], 3, '"Ai ơi bưng bát cơm đầy..."'),
    Q('Em làm gì để biết ơn nông dân?', ['Chê cơm', 'Đùa giỡn', 'Không bỏ phí cơm', 'Vứt cơm'], 2, 'Tiết kiệm thức ăn.'),
    Q('Vùng đồng bằng sông Cửu Long nổi tiếng?', ['Đồi núi', 'Vựa lúa của Việt Nam', 'Sa mạc', 'Không trồng được lúa'], 1, 'ĐBSCL là vựa lúa lớn.'),
  ]),
  M(12, 'Nghề công nhân — kỹ sư', [
    Q('Công nhân làm việc?', ['Tại nhà riêng theo giờ tự chọn', 'Trong rừng săn', 'Trên biển', 'Trong nhà máy, công trường'], 3, 'Sản xuất hàng hoá.'),
    Q('Kỹ sư là?', ['Đầu bếp', 'Người bán hàng', 'Người thiết kế, vận hành máy móc, công trình', 'Lái xe'], 2, 'Chuyên môn kỹ thuật.'),
    Q('Để có ngôi nhà em ở cần?', ['Tự nhiên', 'Kiến trúc sư, kỹ sư, công nhân xây dựng', 'Một mình ai đó', 'Không cần ai'], 1, 'Nhiều người chung sức.'),
    Q('An toàn lao động cần?', ['Mũ bảo hộ, găng tay', 'Đồ ngủ', 'Không cần gì', 'Áo dài'], 0, 'Đồ bảo hộ rất quan trọng.'),
  ]),
  M(13, 'Ngày Nhà giáo Việt Nam 20/11', [
    Q('20/11 là ngày?', ['Nhà giáo Việt Nam', 'Quốc khánh', 'Trẻ em', 'Phụ nữ'], 0, 'Ngày tri ân thầy cô.'),
    Q('Em làm gì vào 20/11?', ['Cãi thầy', 'Bỏ học', 'Tặng hoa, viết thiệp, chúc thầy cô', 'Không quan tâm'], 2, 'Tri ân bằng việc làm cụ thể.'),
    Q('Quà ý nghĩa nhất tặng thầy cô?', ['Quà đắt tiền', 'Bó hoa lớn và thiệp đắt tiền', 'Kết quả học tập tốt', 'Phong bì lì xì'], 2, 'Học tốt là quà ý nghĩa nhất.'),
    Q('Khi viết thiệp em nên?', ['Sao chép', 'Bỏ trống', 'Lời lẽ thô tục', 'Lời chúc chân thành'], 3, 'Tự viết, chân thành.'),
  ]),
  M(14, 'Truyền thống nhà trường', [
    Q('Truyền thống trường là?', ['Bỏ học', 'Những giá trị tốt đẹp truyền từ thế hệ này sang thế hệ khác', 'Cãi nhau', 'Việc lặt vặt'], 1, 'Truyền thống = giá trị lưu truyền.'),
    Q('Em giữ truyền thống bằng cách?', ['Chỉ cần nhớ tên trường là đủ', 'Phá quy định', 'Bỏ học', 'Học giỏi, lễ phép'], 3, 'Hành động cụ thể.'),
    Q('Phòng truyền thống trường thường có?', ['Tủ thuốc và dụng cụ y tế', 'Cup, kỷ niệm chương, ảnh', 'Bàn ăn', 'Giường'], 1, 'Lưu giữ kỷ vật.'),
    Q('Khi nhìn cup vô địch trường em?', ['Cười nhạo', 'Tự hào và cố gắng', 'Nghĩ đó là của các anh chị, không liên quan', 'Không quan tâm'], 1, 'Tự hào và phát huy.'),
  ]),
  M(15, 'Ngày 22/12 — Quân đội Nhân dân Việt Nam', [
    Q('22/12 là?', ['Trẻ em', 'Quốc khánh', 'Nhà giáo', 'Ngày thành lập Quân đội Nhân dân Việt Nam'], 3, '22/12/1944 thành lập QĐNDVN.'),
    Q('Đội Việt Nam Tuyên truyền Giải phóng quân do ai chỉ huy?', ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Đại tướng Võ Nguyên Giáp', 'Quang Trung'], 2, 'Đại tướng Võ Nguyên Giáp chỉ huy đầu tiên.'),
    Q('Em làm gì để tri ân các chú bộ đội?', ['Đợi lớn rồi mới cần biết ơn', 'Học tốt, tiết kiệm', 'Tranh luận xem ai là bộ đội giỏi nhất', 'Chỉ chào khi gặp chú bộ đội mặc quân phục'], 1, 'Học tập và rèn luyện.'),
    Q('Anh bộ đội Cụ Hồ là?', ['Người lạ', 'Không quen', 'Người lính sẵn sàng vì dân', 'Người ác'], 2, 'Hình ảnh đẹp về bộ đội.'),
  ]),
  M(16, 'Ôn tập – Tổng kết HK1', [
    Q('Học sinh Lớp 4 cần?', ['Bỏ học', 'Cãi nhau', 'Lễ phép, chăm học, đoàn kết', 'Lười nhác'], 2, 'Phẩm chất chính.'),
    Q('Làm việc nhóm em đã học?', ['Một mình làm', 'Phân công, tôn trọng ý kiến', 'Bỏ cuộc', 'Cãi nhau'], 1, 'Kỹ năng đã rèn.'),
    Q('Em nhớ ơn?', ['Người lạ', 'Không ai', 'Cha mẹ, thầy cô, người lao động', 'Mình thôi'], 2, 'Biết ơn nhiều người.'),
    Q('Em tự tin?', ['Vào điểm số của bạn khác', 'Không có gì', 'Vào bản thân và khả năng', 'Khoe khoang'], 2, 'Tự tin lành mạnh.'),
  ]),
  M(17, 'Tết Nguyên đán — Phong tục cổ truyền', [
    Q('Tết Nguyên đán là?', ['Lễ hội mới', 'Chỉ là kỳ nghỉ', 'Tết cổ truyền dân tộc', 'Tết Tây'], 2, 'Tết âm lịch của Việt Nam.'),
    Q('Phong tục Tết?', ['Gói bánh chưng, chúc Tết, lì xì', 'Đi du lịch nước ngoài cả gia đình', 'Cãi nhau', 'Đốt nhà'], 0, 'Phong tục đẹp.'),
    Q('Khi nhận lì xì em?', ['Mở ngay', 'Đếm tiền', 'Đòi thêm', 'Cảm ơn, không mở trước mặt người tặng'], 3, 'Lịch sự khi nhận lì xì.'),
    Q('Bánh chưng tượng trưng?', ['Mặt trăng', 'Mặt trời', 'Trời (tròn)', 'Đất (vuông)'], 3, 'Bánh chưng vuông – đất; bánh dày tròn – trời.'),
  ]),
  M(18, 'Kiểm tra HK1', [
    Q('Em tự lập trong việc?', ['Nhờ người làm hết', 'Bỏ qua', 'Tự phục vụ, học tập', 'Lười nhác'], 2, 'Tự lập trong sinh hoạt cá nhân.'),
    Q('Khi gặp khó em?', ['Đổ lỗi', 'Cố gắng tìm cách giải quyết', 'Bỏ trống câu khó, làm câu dễ trước', 'Bỏ cuộc'], 1, 'Kiên trì giải quyết.'),
    Q('Em yêu trường thể hiện?', ['Bỏ học', 'Vứt rác', 'Chỉ đến trường khi có giờ học', 'Học chăm, giữ vệ sinh'], 3, 'Hành động cụ thể.'),
    Q('Trong nhóm em?', ['Một mình', 'Bỏ nhóm', 'Làm theo ý nhóm trưởng, không nêu ý kiến', 'Tôn trọng, hợp tác'], 3, 'Kỹ năng làm việc nhóm.'),
    Q('Em biết ơn?', ['Không ai', 'Người lạ', 'Người đã giúp đỡ mình', 'Chỉ những người trong gia đình'], 2, 'Lòng biết ơn.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Chào năm mới — Mục tiêu năm mới', [
    Q('Năm mới em đặt mục tiêu để?', ['Đua đòi', 'Không cần', 'Phấn đấu tiến bộ', 'Cho có lệ'], 2, 'Mục tiêu giúp định hướng.'),
    Q('Mục tiêu cần?', ['Quá sức', 'Không thể đo', 'Chung chung, kiểu "học giỏi hơn"', 'Cụ thể, khả thi'], 3, 'Nguyên tắc SMART đơn giản.'),
    Q('Khi đạt mục tiêu em?', ['Khoe khoang', 'Vui, ghi nhận, đặt mục tiêu tiếp', 'Bỏ học', 'Tự mãn'], 1, 'Tiếp tục phấn đấu.'),
    Q('Khi chưa đạt em?', ['Bỏ luôn', 'Buồn mãi', 'Đổ lỗi', 'Rút kinh nghiệm, cố gắng tiếp'], 3, 'Không nản lòng.'),
  ]),
  M(20, 'Dã ngoại — Chuẩn bị hành trang', [
    Q('Đi dã ngoại cần chuẩn bị?', ['Đồ đắt tiền', 'Chỉ điện thoại', 'Nước, mũ, áo mưa, đồ ăn nhẹ', 'Không gì'], 2, 'Hành trang cơ bản.'),
    Q('Khi đi cùng đoàn em?', ['Đi một mình', 'Chạy lung tung', 'Đi cùng cô và bạn, không tách đoàn', 'Bỏ đoàn'], 2, 'An toàn theo đoàn.'),
    Q('Khi gặp người lạ?', ['Không đi theo, báo cô', 'Nhận quà', 'Cho thông tin', 'Đi theo ngay'], 0, 'An toàn bản thân.'),
    Q('Khi bị lạc em?', ['Khóc một chỗ', 'Chạy lung tung', 'Theo người lạ', 'Đứng yên, gọi điện cho cô/cha mẹ'], 3, 'Đứng yên là nguyên tắc.'),
    Q('Khi về em?', ['Bỏ rác lại', 'Vứt rác đúng nơi, dọn dẹp', 'Phá cảnh quan', 'Vứt bừa'], 1, 'Bảo vệ môi trường.'),
  ]),
  M(21, 'Ngày Quốc tế Phụ nữ 8/3', [
    Q('8/3 là?', ['Nhà giáo', 'Quốc khánh', 'Ngày Quốc tế Phụ nữ', 'Ngày của Mẹ'], 2, 'Ngày tôn vinh phụ nữ.'),
    Q('Em làm gì cho mẹ/cô/bà ngày 8/3?', ['Tặng hoa, thiệp, lời chúc, giúp việc nhà', 'Không quan tâm', 'Đòi quà', 'Cãi mẹ'], 0, 'Tri ân bằng hành động.'),
    Q('Phụ nữ Việt Nam có phẩm chất?', ['Anh hùng, bất khuất, trung hậu, đảm đang', 'Yếu đuối', 'Không có gì', 'Lười nhác'], 0, '8 chữ vàng Bác Hồ tặng.'),
    Q('Việc nhà em có thể giúp mẹ?', ['Chờ mẹ nhờ rồi mới làm', 'Phá nhà', 'Quét nhà, rửa bát, gấp quần áo', 'Bừa bộn'], 2, 'Giúp đỡ phù hợp lứa tuổi.'),
  ]),
  M(22, 'Nghề nghệ thuật — họa sĩ, ca sĩ', [
    Q('Họa sĩ làm việc?', ['Lái xe', 'Vẽ tranh, sáng tác', 'Bán hàng', 'Dạy toán'], 1, 'Sáng tạo tranh.'),
    Q('Ca sĩ?', ['Lái xe', 'Sáng tác truyện tranh', 'Hát, biểu diễn', 'Bán hàng'], 2, 'Biểu diễn âm nhạc.'),
    Q('Để thành nghệ sĩ giỏi cần?', ['Không cần học', 'Năng khiếu + luyện tập kiên trì', 'Chỉ chờ may mắn', 'Sao chép'], 1, 'Tài năng + nỗ lực.'),
    Q('Khi xem biểu diễn em?', ['Cãi nhau', 'Bỏ về sớm', 'Vỗ tay, không nói chuyện riêng', 'Chạy nhảy'], 2, 'Tôn trọng nghệ sĩ.'),
  ]),
  M(23, 'Nghề trong lĩnh vực giao thông', [
    Q('Tài xế xe buýt làm gì?', ['Chở khách an toàn', 'Dạy học', 'Bán hàng', 'Sửa chữa xe buýt'], 0, 'Vận chuyển hành khách.'),
    Q('Cảnh sát giao thông?', ['Điều khiển, giữ trật tự giao thông', 'Dạy học', 'Cắt tóc', 'Bán hàng'], 0, 'Đảm bảo an toàn giao thông.'),
    Q('Em đi qua đường?', ['Vạch kẻ, nhìn trái-phải-trái', 'Đi giữa đường', 'Chạy bừa', 'Vừa đi vừa nghịch điện thoại'], 0, 'Quy tắc qua đường.'),
    Q('Khi đi xe máy với cha mẹ em?', ['Đội mũ bảo hiểm', 'Không cần', 'Đùa giỡn', 'Đứng trên xe'], 0, 'Bắt buộc đội mũ.'),
    Q('Đèn đỏ em?', ['Đi tiếp', 'Phóng nhanh', 'Quay lại', 'Dừng lại'], 3, 'Luật giao thông.'),
  ]),
  M(24, 'Ngày Giải phóng miền Nam 30/4', [
    Q('30/4/1975 là ngày?', ['Quốc khánh', 'Giải phóng miền Nam, thống nhất đất nước', 'Cách mạng Tháng Tám thành công', 'Nhà giáo'], 1, 'Đại thắng mùa Xuân 1975.'),
    Q('Sau 30/4/1975, đất nước ta?', ['Thống nhất, hoà bình', 'Chiến tranh', 'Vẫn chia cắt', 'Không thay đổi'], 0, 'Bắc – Nam sum họp một nhà.'),
    Q('Em làm gì kỷ niệm 30/4?', ['Cãi nhau', 'Bỏ qua', 'Đốt pháo ăn mừng', 'Treo cờ, học về lịch sử'], 3, 'Tự hào dân tộc.'),
    Q('Để có ngày hoà bình hôm nay nhờ?', ['Người khác cho', 'May mắn', 'Tự nhiên có', 'Hi sinh của bao thế hệ cha anh'], 3, 'Tri ân các anh hùng.'),
  ]),
  M(25, 'Ngày Quốc tế Lao động 1/5', [
    Q('1/5 là?', ['Ngày Giải phóng miền Nam', 'Quốc khánh', 'Ngày Quốc tế Lao động', 'Nhà giáo'], 2, 'Tôn vinh người lao động.'),
    Q('Lao động chân chính?', ['Đáng quý, đáng trân trọng', 'Lười nhác', 'Đáng coi thường', 'Không cần'], 0, 'Mọi lao động chân chính đều đáng quý.'),
    Q('Em là học sinh, lao động chính của em?', ['Đi làm thêm kiếm tiền sau giờ học', 'Chỉ chơi', 'Đi làm thuê', 'Học tập, giúp việc nhà'], 3, 'Học và việc nhà phù hợp.'),
    Q('Khi gặp cô lao công em?', ['Đi lối khác để khỏi làm phiền cô', 'Vứt thêm rác', 'Cười nhạo', 'Chào hỏi, cảm ơn'], 3, 'Tôn trọng người lao động.'),
  ]),
  M(26, 'Quan tâm sức khoẻ tinh thần', [
    Q('Khi buồn em nên?', ['Giấu kín', 'Bỏ học', 'Chia sẻ với người thân/bạn', 'Tự hành hạ'], 2, 'Chia sẻ giúp giảm áp lực.'),
    Q('Cảm xúc tích cực?', ['Vui, biết ơn, yêu thương', 'Giận dữ', 'Buồn mãi', 'Ghét bỏ'], 0, 'Nuôi dưỡng cảm xúc tốt.'),
    Q('Khi tức giận em nên?', ['Quát to', 'Đánh nhau', 'Đập đồ', 'Hít thở sâu, bình tĩnh'], 3, 'Quản lý cảm xúc.'),
    Q('Hoạt động nào giúp thư giãn?', ['Lo lắng', 'Cãi nhau', 'Chơi game cả ngày', 'Vẽ, đọc sách, đi bộ'], 3, 'Hoạt động lành mạnh.'),
  ]),
  M(27, 'Em tham gia hoạt động cộng đồng', [
    Q('Hoạt động cộng đồng?', ['Cãi nhau', 'Bỏ rác', 'Dọn vệ sinh, ủng hộ, hiến máu (người lớn)', 'Chỉ xem mạng xã hội, không cần làm'], 2, 'Việc làm vì cộng đồng.'),
    Q('Em có thể tham gia?', ['Chỉ người lớn mới làm được', 'Vệ sinh khu phố, ủng hộ bạn nghèo', 'Quyên góp tiền cá nhân không cần xin phép', 'Tham gia hiến máu nhân đạo cùng người lớn'], 1, 'Trẻ em cũng có thể đóng góp.'),
    Q('Ủng hộ bạn vùng lũ?', ['Không cần ủng hộ', 'Đồ hỏng', 'Quần áo, sách vở, đồ dùng', 'Đồ bẩn'], 2, 'Ủng hộ đồ còn dùng được, sạch.'),
    Q('Khi tham gia hoạt động em?', ['Miễn cưỡng', 'Phá đám', 'Tích cực, vui vẻ', 'Chỉ tham gia khi có điểm thưởng'], 2, 'Tinh thần thiện nguyện.'),
  ]),
  M(28, 'Bảo vệ môi trường', [
    Q('Em bảo vệ môi trường bằng?', ['Lãng phí', 'Vứt rác bừa', 'Tiết kiệm điện, nước, không xả rác', 'Phá cây'], 2, 'Hành động cụ thể.'),
    Q('Rác phân loại?', ['Đốt hết', 'Vứt chung', 'Hữu cơ – Tái chế – Khác', 'Chôn lấp'], 2, '3R cơ bản.'),
    Q('Túi nilon?', ['Khó phân huỷ, ô nhiễm', 'Không gây hại', 'Thân thiện', 'Tự tiêu huỷ'], 0, 'Hạn chế dùng nilon.'),
    Q('Trồng cây giúp?', ['Không có lợi', 'Lọc khí, chống xói mòn', 'Làm bẩn', 'Phá nhà'], 1, 'Lợi ích to lớn.'),
    Q('Khi thấy bạn xả rác em?', ['Vứt thêm', 'Nhắc nhở nhẹ nhàng', 'Im lặng', 'Đánh bạn'], 1, 'Lên tiếng tích cực.'),
  ]),
  M(29, 'Ngày Quốc tế Thiếu nhi 1/6', [
    Q('1/6 là?', ['Nhà giáo', 'Ngày Gia đình Việt Nam', 'Quốc khánh', 'Ngày Quốc tế Thiếu nhi'], 3, 'Ngày của trẻ em.'),
    Q('Trẻ em có quyền?', ['Học tập, vui chơi, bảo vệ', 'Không có quyền', 'Bị đánh đập', 'Phải làm việc nặng'], 0, 'Công ước quyền trẻ em.'),
    Q('Trẻ em có bổn phận?', ['Chỉ vui chơi, chưa cần học nghiêm túc', 'Không cần làm gì', 'Chỉ chơi', 'Học tập, lễ phép, giúp đỡ gia đình'], 3, 'Quyền đi đôi với bổn phận.'),
    Q('Bác Hồ với thiếu nhi?', ['Không quan tâm', 'Yêu thương, dặn dò 5 điều', 'Lạnh nhạt', 'Phớt lờ'], 1, '5 điều Bác Hồ dạy.'),
  ]),
  M(30, 'Tổng kết hoạt động Sao Nhi đồng', [
    Q('Sao Nhi đồng dành cho?', ['Học sinh THCS', 'Người lớn', 'Học sinh lớp 1–3 (Lớp 4 đã chuyển Đội)', 'Trẻ mầm non'], 2, 'Lớp 4 vào Đội TNTP Hồ Chí Minh.'),
    Q('Đội Thiếu niên Tiền phong dành cho?', ['Sinh viên', 'Người lớn', 'Học sinh từ 9 tuổi (lớp 4)', 'Trẻ 3 tuổi'], 2, 'Từ 9 tuổi vào Đội.'),
    Q('Khăn quàng đỏ tượng trưng?', ['Bầu trời', 'Một góc lá cờ Tổ quốc', 'Mặt trời', 'Ngọn lửa cách mạng'], 1, 'Khăn quàng đỏ – một góc cờ.'),
    Q('Em tự hào khi?', ['Bỏ Đội', 'Bị phê bình', 'Được kết nạp Đội', 'Không tham gia'], 2, 'Vinh dự được vào Đội.'),
  ]),
  M(31, 'Em làm hướng dẫn viên giới thiệu quê hương', [
    Q('Hướng dẫn viên cần?', ['Cãi khách', 'Không lễ phép', 'Im lặng', 'Hiểu biết, giao tiếp tốt'], 3, 'Nghề cần kiến thức và kỹ năng.'),
    Q('Giới thiệu quê hương em nên?', ['Im lặng', 'Chỉ kể nhược điểm để khách hiểu thật', 'Bỏ qua', 'Tự hào, nói về đặc sản, danh lam'], 3, 'Tự hào và am hiểu.'),
    Q('Khi du khách hỏi em?', ['Trả lời cụt lủn cho nhanh', 'Đòi tiền nếu muốn được chỉ đường', 'Trả lời lịch sự', 'Trả lời sai cho vui rồi bỏ đi'], 2, 'Văn minh với khách.'),
    Q('Bảo vệ di tích em không?', ['Giữ gìn', 'Khắc tên, vẽ bậy', 'Tôn trọng', 'Cảm ơn'], 1, 'Không phá hoại di tích.'),
  ]),
  M(32, 'Lập kế hoạch nghỉ hè', [
    Q('Nghỉ hè em nên?', ['Vui chơi + ôn bài + giúp việc nhà', 'Chỉ học cả ngày để vượt chương trình', 'Chỉ ngủ', 'Chơi game cả ngày'], 0, 'Cân bằng các hoạt động.'),
    Q('Hoạt động hè bổ ích?', ['Đọc sách, học bơi, du lịch', 'Cãi nhau', 'Phá làng', 'Bỏ nhà đi'], 0, 'Hoạt động lành mạnh.'),
    Q('Khi đi bơi em cần?', ['Có người lớn giám sát', 'Đi một mình', 'Bơi ao sâu', 'Lén đi'], 0, 'An toàn nước.'),
    Q('Em có thể giúp cha mẹ?', ['Chờ cha mẹ giao việc rồi mới làm', 'Đòi tiền công sau mỗi việc nhà', 'Chỉ giúp khi có khách đến chơi', 'Việc nhà phù hợp'], 3, 'Giúp đỡ gia đình.'),
  ]),
  M(33, 'Tổng kết – Đánh giá bản thân', [
    Q('Sau một năm em đã?', ['Không thay đổi', 'Tệ hơn', 'Bỏ học', 'Tiến bộ về nhiều mặt'], 3, 'Tự đánh giá tiến bộ.'),
    Q('Khi đánh giá bản thân em cần?', ['Nói dối', 'Thành thật, công bằng', 'Coi thường mình', 'Thổi phồng'], 1, 'Thẳng thắn với chính mình.'),
    Q('Điểm cần cải thiện em?', ['Đổ lỗi', 'So sánh với bạn để tự trách mình', 'Lập kế hoạch khắc phục', 'Bỏ qua'], 2, 'Hành động cụ thể.'),
    Q('Điều em tự hào?', ['Tự mãn', 'Ghi nhận và phát huy', 'Khoe khoang', 'Không quan tâm'], 1, 'Khẳng định bản thân lành mạnh.'),
  ]),
  M(34, 'Lễ ra trường khối tiểu học (chuẩn bị lên Lớp 5)', [
    Q('Lên Lớp 5 em sẽ là?', ['Vẫn như cũ', 'Học sinh nhỏ', 'Anh chị lớn nhất khối tiểu học', 'Không khác gì'], 2, 'Lớp 5 là lớp cuối tiểu học.'),
    Q('Em chuẩn bị cho Lớp 5?', ['Không cần', 'Bỏ học', 'Ôn kiến thức nền, rèn kỹ năng', 'Chỉ tập trung học môn mình yêu thích'], 2, 'Tích luỹ kiến thức.'),
    Q('Khi chia tay thầy cô, bạn?', ['Im lặng đi về, không chào thầy cô', 'Cảm ơn, lưu kỷ niệm', 'Hứa hẹn rồi không thực hiện', 'Chỉ chào bạn thân, bỏ qua thầy cô'], 1, 'Trân trọng thầy cô và bạn bè.'),
    Q('Kỷ niệm Lớp 4?', ['Vứt bỏ vở cũ và ảnh chụp lớp', 'Quên đi', 'Lưu giữ và trân trọng', 'Cãi nhau'], 2, 'Kỷ niệm đẹp.'),
  ]),
  M(35, 'Tổng kết năm học – Cảm ơn', [
    Q('Em cảm ơn ai?', ['Không ai', 'Chỉ thầy cô, không cần cảm ơn cha mẹ', 'Người lạ', 'Cha mẹ, thầy cô, bạn bè'], 3, 'Lòng biết ơn rộng.'),
    Q('Tổng kết năm em đã?', ['Học và rèn được nhiều điều', 'Học y như đầu năm, không tiến bộ', 'Bỏ học', 'Không gì'], 0, 'Năm học có ý nghĩa.'),
    Q('Một mục tiêu cho hè?', ['Học trước toàn bộ chương trình Lớp 5', 'Đọc 5 cuốn sách / học một kỹ năng mới', 'Bỏ học', 'Đi học thêm cả ba tháng hè'], 1, 'Mục tiêu hè cụ thể.'),
    Q('Khi gặp lại bạn năm sau em?', ['Vui vẻ, chia sẻ', 'Khoe điểm số để chứng tỏ mình giỏi hơn', 'Tránh xa', 'Ngại ngùng không dám bắt chuyện trước'], 0, 'Giữ tình bạn.'),
    Q('Em sẽ?', ['Tiếp tục cố gắng', 'Bỏ cuộc', 'Chỉ học khi có kiểm tra', 'Học cho có để bố mẹ vui'], 0, 'Tinh thần học suốt đời.'),
  ]),
];

export const P4HDTN_SCENARIOS = indexBy(P4HDTN_WEEKS);
