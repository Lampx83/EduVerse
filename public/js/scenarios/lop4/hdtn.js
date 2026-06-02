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
    Q('Lên Lớp 4, em là?', ['Học sinh nhỏ hơn lớp 3', 'Anh chị của các em lớp dưới', 'Vẫn như cũ', 'Không khác gì'], 1, 'Lên Lớp 4 em đã là anh/chị, cần gương mẫu.'),
    Q('Khi gặp em lớp 1, em nên?', ['Lờ đi', 'Chào hỏi, giúp đỡ', 'Trêu chọc', 'Đẩy bạn'], 1, 'Anh chị giúp đỡ em nhỏ.'),
    Q('Vai trò của em ở Lớp 4?', ['Học sinh lớn của khối tiểu học', 'Trẻ con không quan tâm', 'Không có vai trò gì', 'Chỉ ngồi chơi'], 0, 'Lớp 4 là một trong hai lớp lớn nhất khối tiểu học.'),
    Q('Em cần làm gương cho?', ['Các em lớp dưới', 'Anh chị lớp trên', 'Người lớn', 'Thầy cô'], 0, 'Là anh/chị nên cần làm gương cho em nhỏ.'),
  ]),
  M(2, 'Tự giới thiệu bản thân', [
    Q('Khi giới thiệu bản thân em nói gì?', ['Tên, lớp, sở thích', 'Chỉ tên', 'Không nói gì', 'Cãi nhau'], 0, 'Giới thiệu cơ bản: tên, lớp, sở thích.'),
    Q('Thái độ khi giới thiệu?', ['Tự tin, lễ phép', 'Cúi gằm mặt', 'Quát to', 'Im lặng'], 0, 'Tự tin và lễ phép.'),
    Q('Khi nghe bạn giới thiệu em?', ['Lắng nghe, vỗ tay', 'Cười nhạo', 'Bỏ đi', 'Cãi'], 0, 'Tôn trọng khi bạn nói.'),
    Q('Lần đầu gặp bạn mới em nên?', ['Cười và bắt tay', 'Phớt lờ', 'Trêu chọc', 'Đẩy bạn'], 0, 'Thân thiện với bạn mới.'),
  ]),
  M(3, 'Kĩ năng học tập — Lập thời gian biểu', [
    Q('Thời gian biểu giúp?', ['Cân đối học – chơi – nghỉ', 'Mất thời gian', 'Vô ích', 'Lười hơn'], 0, 'Quản lý thời gian hợp lý.'),
    Q('Khung giờ học buổi tối phù hợp?', ['Khoảng 19:00–21:00', '00:00–02:00', '03:00–05:00', '13:00–18:00'], 0, 'Tối ôn bài và nghỉ trước 22:00.'),
    Q('Khi lập thời gian biểu em cần?', ['Đủ học, chơi, ngủ', 'Chỉ học', 'Chỉ chơi', 'Chỉ ngủ'], 0, 'Cân đối các hoạt động.'),
    Q('Khi không theo kịp thời gian biểu em?', ['Điều chỉnh hợp lý', 'Bỏ luôn', 'Khóc', 'Đổ lỗi'], 0, 'Linh hoạt điều chỉnh.'),
    Q('Một ngày nên ngủ?', ['9–10 tiếng', '3 tiếng', '0 tiếng', '15 tiếng'], 0, 'Trẻ em Lớp 4 cần 9–10 tiếng ngủ.'),
  ]),
  M(4, 'Kĩ năng tự phục vụ', [
    Q('Tự phục vụ là?', ['Tự làm việc cá nhân của mình', 'Nhờ người khác làm hết', 'Lười', 'Cãi'], 0, 'Tự lập trong sinh hoạt.'),
    Q('Việc em có thể tự làm?', ['Gấp chăn, sắp xếp sách vở', 'Nấu cơm bếp gas một mình lúc nhỏ', 'Lái xe', 'Đi làm'], 0, 'Việc phù hợp lứa tuổi.'),
    Q('Trước khi đi học em cần?', ['Soạn sách vở theo thời khoá biểu', 'Để nguyên hôm trước', 'Không cần soạn', 'Lấy bừa'], 0, 'Soạn sách đúng tiết.'),
    Q('Khi ăn xong em nên?', ['Mang bát đĩa của mình ra rửa/để vào bồn', 'Để mẹ làm hết', 'Bỏ đi chơi', 'Vứt bừa'], 0, 'Giúp đỡ việc nhà.'),
  ]),
  M(5, 'Làm việc nhóm — Phân công nhiệm vụ', [
    Q('Làm việc nhóm cần?', ['Phân công rõ ràng', 'Một người làm hết', 'Tự ý', 'Im lặng'], 0, 'Mỗi người một nhiệm vụ.'),
    Q('Khi bạn gặp khó em nên?', ['Giúp đỡ bạn', 'Cười nhạo', 'Mặc kệ', 'Trách'], 0, 'Đồng đội hỗ trợ nhau.'),
    Q('Trưởng nhóm có vai trò?', ['Điều phối, lắng nghe ý kiến', 'Quát mắng', 'Áp đặt', 'Không làm gì'], 0, 'Lãnh đạo dân chủ.'),
    Q('Khi có ý kiến trái chiều em?', ['Bàn bạc, thống nhất', 'Cãi nhau', 'Bỏ nhóm', 'Im lặng giận'], 0, 'Thảo luận để đồng thuận.'),
    Q('Kết quả nhóm là của?', ['Cả nhóm', 'Riêng trưởng nhóm', 'Người làm nhiều', 'Người làm ít'], 0, 'Thành quả chung.'),
  ]),
  M(6, 'Tôn trọng sự khác biệt', [
    Q('Mỗi bạn trong lớp?', ['Có cá tính, sở thích riêng', 'Phải giống hệt nhau', 'Không có gì đặc biệt', 'Phải im lặng'], 0, 'Tôn trọng đa dạng.'),
    Q('Khi bạn có sở thích khác em?', ['Tôn trọng', 'Cười nhạo', 'Ép bạn theo mình', 'Tránh xa'], 0, 'Tôn trọng sự khác biệt.'),
    Q('Khi bạn nói tiếng địa phương em?', ['Tôn trọng và học hỏi', 'Cười nhạo', 'Bắt chước trêu', 'Không chơi'], 0, 'Mỗi vùng miền có nét đẹp riêng.'),
    Q('Khi bạn khuyết tật em nên?', ['Quan tâm, hỗ trợ bình thường', 'Tránh xa', 'Cười nhạo', 'Lảng tránh'], 0, 'Đối xử bình đẳng và yêu thương.'),
  ]),
  M(7, 'Sắp xếp góc học tập', [
    Q('Góc học tập tốt cần?', ['Ánh sáng, yên tĩnh, gọn gàng', 'Tối, ồn, bừa bãi', 'Cạnh TV', 'Trên giường'], 0, 'Đủ sáng, yên tĩnh, ngăn nắp.'),
    Q('Khi học em ngồi?', ['Ngay ngắn, lưng thẳng', 'Cong lưng', 'Nằm', 'Quỳ'], 0, 'Tư thế ngồi đúng.'),
    Q('Khoảng cách mắt – sách?', ['25–30 cm', '5 cm', '1 m', 'Càng gần càng tốt'], 0, 'Phòng chống cận thị.'),
    Q('Sau khi học xong em?', ['Dọn bàn, xếp sách vở', 'Để nguyên', 'Vứt bừa', 'Bỏ đi'], 0, 'Giữ gọn gàng góc học tập.'),
  ]),
  M(8, 'Em yêu trường lớp', [
    Q('Em yêu trường lớp thể hiện qua?', ['Giữ vệ sinh, học chăm', 'Vẽ bậy', 'Phá hoại', 'Bỏ học'], 0, 'Hành động cụ thể.'),
    Q('Khi thấy rác trong sân?', ['Nhặt bỏ vào thùng', 'Bỏ qua', 'Đá rác', 'Vứt thêm'], 0, 'Chung tay giữ vệ sinh.'),
    Q('Trường em là nơi?', ['Học tập và rèn luyện', 'Chỉ chơi', 'Chỉ ngủ', 'Không quan trọng'], 0, 'Nơi học và rèn luyện.'),
    Q('Khi ra khỏi lớp em nên?', ['Tắt điện, đóng cửa, xếp ghế', 'Mặc kệ', 'Để bừa', 'Bật tất cả lên'], 0, 'Tiết kiệm điện và gọn gàng.'),
  ]),
  M(9, 'Nghề trong cộng đồng — Nghề giáo', [
    Q('Nghề giáo viên là?', ['Dạy học, giáo dục', 'Bán hàng', 'Xây dựng', 'Sửa xe'], 0, 'Giáo viên dạy học.'),
    Q('Ngày Nhà giáo Việt Nam?', ['20/11', '20/10', '8/3', '1/6'], 0, '20/11 hằng năm.'),
    Q('Em làm gì để thầy cô vui?', ['Chăm học, lễ phép', 'Cãi', 'Bỏ học', 'Quên ơn'], 0, 'Tri ân thầy cô.'),
    Q('Khi thầy cô giảng em?', ['Lắng nghe, ghi chép', 'Nói chuyện', 'Ngủ gật', 'Chơi'], 0, 'Tôn trọng giờ học.'),
    Q('Thầy cô là?', ['Người lái đò tri thức', 'Người bán hàng', 'Người lạ', 'Không quen'], 0, 'Hình ảnh ẩn dụ đẹp về thầy cô.'),
  ]),
  M(10, 'Nghề bác sĩ — y tế', [
    Q('Bác sĩ làm gì?', ['Khám chữa bệnh', 'Bán hàng', 'Vẽ tranh', 'Dạy học'], 0, 'Chăm sóc sức khoẻ.'),
    Q('Y tá/điều dưỡng?', ['Hỗ trợ bác sĩ, chăm bệnh nhân', 'Lái xe', 'Bán nước', 'Cắt tóc'], 0, 'Điều dưỡng chăm sóc bệnh nhân.'),
    Q('Khi bị bệnh em?', ['Nói với người lớn, đi khám', 'Giấu', 'Tự uống thuốc bừa', 'Bỏ qua'], 0, 'Báo người lớn để chữa kịp thời.'),
    Q('Khi vào bệnh viện em?', ['Đi nhẹ nói khẽ', 'Cười nói lớn', 'Chạy nhảy', 'Phá đồ'], 0, 'Giữ trật tự.'),
  ]),
  M(11, 'Nghề nông dân', [
    Q('Nông dân làm gì?', ['Trồng cây, chăn nuôi', 'Dạy học', 'Bán hàng', 'Lái xe'], 0, 'Cung cấp lương thực.'),
    Q('Hạt gạo có được nhờ?', ['Mồ hôi người nông dân', 'Tự sinh ra', 'Máy in', 'Tự nhiên'], 0, '"Ai ơi bưng bát cơm đầy..."'),
    Q('Em làm gì để biết ơn nông dân?', ['Không bỏ phí cơm', 'Vứt cơm', 'Đùa giỡn', 'Chê cơm'], 0, 'Tiết kiệm thức ăn.'),
    Q('Vùng đồng bằng sông Cửu Long nổi tiếng?', ['Vựa lúa của Việt Nam', 'Không trồng được lúa', 'Sa mạc', 'Đồi núi'], 0, 'ĐBSCL là vựa lúa lớn.'),
  ]),
  M(12, 'Nghề công nhân — kỹ sư', [
    Q('Công nhân làm việc?', ['Trong nhà máy, công trường', 'Trong rừng săn', 'Tự do', 'Trên biển'], 0, 'Sản xuất hàng hoá.'),
    Q('Kỹ sư là?', ['Người thiết kế, vận hành máy móc, công trình', 'Người bán hàng', 'Đầu bếp', 'Lái xe'], 0, 'Chuyên môn kỹ thuật.'),
    Q('Để có ngôi nhà em ở cần?', ['Kiến trúc sư, kỹ sư, công nhân xây dựng', 'Một mình ai đó', 'Tự nhiên', 'Không cần ai'], 0, 'Nhiều người chung sức.'),
    Q('An toàn lao động cần?', ['Mũ bảo hộ, găng tay', 'Không cần gì', 'Áo dài', 'Đồ ngủ'], 0, 'Đồ bảo hộ rất quan trọng.'),
  ]),
  M(13, 'Ngày Nhà giáo Việt Nam 20/11', [
    Q('20/11 là ngày?', ['Nhà giáo Việt Nam', 'Quốc khánh', 'Trẻ em', 'Phụ nữ'], 0, 'Ngày tri ân thầy cô.'),
    Q('Em làm gì vào 20/11?', ['Tặng hoa, viết thiệp, chúc thầy cô', 'Bỏ học', 'Cãi thầy', 'Không quan tâm'], 0, 'Tri ân bằng việc làm cụ thể.'),
    Q('Quà ý nghĩa nhất tặng thầy cô?', ['Kết quả học tập tốt', 'Quà đắt tiền', 'Tiền', 'Vàng'], 0, 'Học tốt là quà ý nghĩa nhất.'),
    Q('Khi viết thiệp em nên?', ['Lời chúc chân thành', 'Lời lẽ thô tục', 'Sao chép', 'Bỏ trống'], 0, 'Tự viết, chân thành.'),
  ]),
  M(14, 'Truyền thống nhà trường', [
    Q('Truyền thống trường là?', ['Những giá trị tốt đẹp truyền từ thế hệ này sang thế hệ khác', 'Việc lặt vặt', 'Cãi nhau', 'Bỏ học'], 0, 'Truyền thống = giá trị lưu truyền.'),
    Q('Em giữ truyền thống bằng cách?', ['Học giỏi, lễ phép', 'Phá quy định', 'Bỏ học', 'Cãi'], 0, 'Hành động cụ thể.'),
    Q('Phòng truyền thống trường thường có?', ['Cup, kỷ niệm chương, ảnh', 'Bàn ăn', 'Giường', 'Bếp'], 0, 'Lưu giữ kỷ vật.'),
    Q('Khi nhìn cup vô địch trường em?', ['Tự hào và cố gắng', 'Cười nhạo', 'Không quan tâm', 'Bỏ đi'], 0, 'Tự hào và phát huy.'),
  ]),
  M(15, 'Ngày 22/12 — Quân đội Nhân dân Việt Nam', [
    Q('22/12 là?', ['Ngày thành lập Quân đội Nhân dân Việt Nam', 'Quốc khánh', 'Nhà giáo', 'Trẻ em'], 0, '22/12/1944 thành lập QĐNDVN.'),
    Q('Đội Việt Nam Tuyên truyền Giải phóng quân do ai chỉ huy?', ['Đại tướng Võ Nguyên Giáp', 'Lý Thường Kiệt', 'Trần Hưng Đạo', 'Quang Trung'], 0, 'Đại tướng Võ Nguyên Giáp chỉ huy đầu tiên.'),
    Q('Em làm gì để tri ân các chú bộ đội?', ['Học tốt, tiết kiệm', 'Phá hoại', 'Lười', 'Cãi'], 0, 'Học tập và rèn luyện.'),
    Q('Anh bộ đội Cụ Hồ là?', ['Người lính sẵn sàng vì dân', 'Người ác', 'Không quen', 'Người lạ'], 0, 'Hình ảnh đẹp về bộ đội.'),
  ]),
  M(16, 'Ôn tập – Tổng kết HK1', [
    Q('Học sinh Lớp 4 cần?', ['Lễ phép, chăm học, đoàn kết', 'Lười nhác', 'Cãi nhau', 'Bỏ học'], 0, 'Phẩm chất chính.'),
    Q('Làm việc nhóm em đã học?', ['Phân công, tôn trọng ý kiến', 'Một mình làm', 'Cãi nhau', 'Bỏ cuộc'], 0, 'Kỹ năng đã rèn.'),
    Q('Em nhớ ơn?', ['Cha mẹ, thầy cô, người lao động', 'Không ai', 'Mình thôi', 'Người lạ'], 0, 'Biết ơn nhiều người.'),
    Q('Em tự tin?', ['Vào bản thân và khả năng', 'Không có gì', 'Khoe khoang', 'Tự ti'], 0, 'Tự tin lành mạnh.'),
  ]),
  M(17, 'Tết Nguyên đán — Phong tục cổ truyền', [
    Q('Tết Nguyên đán là?', ['Tết cổ truyền dân tộc', 'Tết Tây', 'Lễ hội mới', 'Chỉ là kỳ nghỉ'], 0, 'Tết âm lịch của Việt Nam.'),
    Q('Phong tục Tết?', ['Gói bánh chưng, chúc Tết, lì xì', 'Đốt nhà', 'Cãi nhau', 'Phá hoại'], 0, 'Phong tục đẹp.'),
    Q('Khi nhận lì xì em?', ['Cảm ơn, không mở trước mặt người tặng', 'Mở ngay', 'Đếm tiền', 'Đòi thêm'], 0, 'Lịch sự khi nhận lì xì.'),
    Q('Bánh chưng tượng trưng?', ['Đất (vuông)', 'Trời', 'Mặt trăng', 'Mặt trời'], 0, 'Bánh chưng vuông – đất; bánh dày tròn – trời.'),
  ]),
  M(18, 'Kiểm tra HK1', [
    Q('Em tự lập trong việc?', ['Tự phục vụ, học tập', 'Nhờ người làm hết', 'Lười nhác', 'Bỏ qua'], 0, 'Tự lập trong sinh hoạt cá nhân.'),
    Q('Khi gặp khó em?', ['Cố gắng tìm cách giải quyết', 'Bỏ cuộc', 'Đổ lỗi', 'Khóc'], 0, 'Kiên trì giải quyết.'),
    Q('Em yêu trường thể hiện?', ['Học chăm, giữ vệ sinh', 'Phá', 'Bỏ học', 'Vứt rác'], 0, 'Hành động cụ thể.'),
    Q('Trong nhóm em?', ['Tôn trọng, hợp tác', 'Một mình', 'Cãi', 'Bỏ nhóm'], 0, 'Kỹ năng làm việc nhóm.'),
    Q('Em biết ơn?', ['Người đã giúp đỡ mình', 'Không ai', 'Mình', 'Người lạ'], 0, 'Lòng biết ơn.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Chào năm mới — Mục tiêu năm mới', [
    Q('Năm mới em đặt mục tiêu để?', ['Phấn đấu tiến bộ', 'Cho có lệ', 'Đua đòi', 'Không cần'], 0, 'Mục tiêu giúp định hướng.'),
    Q('Mục tiêu cần?', ['Cụ thể, khả thi', 'Mơ hồ', 'Quá sức', 'Không thể đo'], 0, 'Nguyên tắc SMART đơn giản.'),
    Q('Khi đạt mục tiêu em?', ['Vui, ghi nhận, đặt mục tiêu tiếp', 'Tự mãn', 'Bỏ học', 'Khoe khoang'], 0, 'Tiếp tục phấn đấu.'),
    Q('Khi chưa đạt em?', ['Rút kinh nghiệm, cố gắng tiếp', 'Bỏ luôn', 'Đổ lỗi', 'Buồn mãi'], 0, 'Không nản lòng.'),
  ]),
  M(20, 'Dã ngoại — Chuẩn bị hành trang', [
    Q('Đi dã ngoại cần chuẩn bị?', ['Nước, mũ, áo mưa, đồ ăn nhẹ', 'Chỉ điện thoại', 'Không gì', 'Đồ đắt tiền'], 0, 'Hành trang cơ bản.'),
    Q('Khi đi cùng đoàn em?', ['Đi cùng cô và bạn, không tách đoàn', 'Đi một mình', 'Chạy lung tung', 'Bỏ đoàn'], 0, 'An toàn theo đoàn.'),
    Q('Khi gặp người lạ?', ['Không đi theo, báo cô', 'Đi theo ngay', 'Nhận quà', 'Cho thông tin'], 0, 'An toàn bản thân.'),
    Q('Khi bị lạc em?', ['Đứng yên, gọi điện cho cô/cha mẹ', 'Chạy lung tung', 'Khóc một chỗ', 'Theo người lạ'], 0, 'Đứng yên là nguyên tắc.'),
    Q('Khi về em?', ['Vứt rác đúng nơi, dọn dẹp', 'Vứt bừa', 'Bỏ rác lại', 'Phá cảnh quan'], 0, 'Bảo vệ môi trường.'),
  ]),
  M(21, 'Ngày Quốc tế Phụ nữ 8/3', [
    Q('8/3 là?', ['Ngày Quốc tế Phụ nữ', 'Quốc khánh', 'Tết', 'Nhà giáo'], 0, 'Ngày tôn vinh phụ nữ.'),
    Q('Em làm gì cho mẹ/cô/bà ngày 8/3?', ['Tặng hoa, thiệp, lời chúc, giúp việc nhà', 'Không quan tâm', 'Đòi quà', 'Cãi mẹ'], 0, 'Tri ân bằng hành động.'),
    Q('Phụ nữ Việt Nam có phẩm chất?', ['Anh hùng, bất khuất, trung hậu, đảm đang', 'Lười nhác', 'Yếu đuối', 'Không có gì'], 0, '8 chữ vàng Bác Hồ tặng.'),
    Q('Việc nhà em có thể giúp mẹ?', ['Quét nhà, rửa bát, gấp quần áo', 'Không làm gì', 'Phá nhà', 'Bừa bộn'], 0, 'Giúp đỡ phù hợp lứa tuổi.'),
  ]),
  M(22, 'Nghề nghệ thuật — họa sĩ, ca sĩ', [
    Q('Họa sĩ làm việc?', ['Vẽ tranh, sáng tác', 'Bán hàng', 'Lái xe', 'Dạy toán'], 0, 'Sáng tạo tranh.'),
    Q('Ca sĩ?', ['Hát, biểu diễn', 'Vẽ', 'Lái xe', 'Bán hàng'], 0, 'Biểu diễn âm nhạc.'),
    Q('Để thành nghệ sĩ giỏi cần?', ['Năng khiếu + luyện tập kiên trì', 'Chỉ chờ may mắn', 'Không cần học', 'Sao chép'], 0, 'Tài năng + nỗ lực.'),
    Q('Khi xem biểu diễn em?', ['Vỗ tay, không nói chuyện riêng', 'Cãi nhau', 'Chạy nhảy', 'Bỏ về sớm'], 0, 'Tôn trọng nghệ sĩ.'),
  ]),
  M(23, 'Nghề trong lĩnh vực giao thông', [
    Q('Tài xế xe buýt làm gì?', ['Chở khách an toàn', 'Bán hàng', 'Dạy học', 'Vẽ'], 0, 'Vận chuyển hành khách.'),
    Q('Cảnh sát giao thông?', ['Điều khiển, giữ trật tự giao thông', 'Bán hàng', 'Dạy học', 'Cắt tóc'], 0, 'Đảm bảo an toàn giao thông.'),
    Q('Em đi qua đường?', ['Vạch kẻ, nhìn trái-phải-trái', 'Chạy bừa', 'Vừa đi vừa nghịch điện thoại', 'Đi giữa đường'], 0, 'Quy tắc qua đường.'),
    Q('Khi đi xe máy với cha mẹ em?', ['Đội mũ bảo hiểm', 'Không cần', 'Đứng trên xe', 'Đùa giỡn'], 0, 'Bắt buộc đội mũ.'),
    Q('Đèn đỏ em?', ['Dừng lại', 'Đi tiếp', 'Phóng nhanh', 'Quay lại'], 0, 'Luật giao thông.'),
  ]),
  M(24, 'Ngày Giải phóng miền Nam 30/4', [
    Q('30/4/1975 là ngày?', ['Giải phóng miền Nam, thống nhất đất nước', 'Quốc khánh', 'Tết', 'Nhà giáo'], 0, 'Đại thắng mùa Xuân 1975.'),
    Q('Sau 30/4/1975, đất nước ta?', ['Thống nhất, hoà bình', 'Vẫn chia cắt', 'Chiến tranh', 'Không thay đổi'], 0, 'Bắc – Nam sum họp một nhà.'),
    Q('Em làm gì kỷ niệm 30/4?', ['Treo cờ, học về lịch sử', 'Bỏ qua', 'Phá hoại', 'Cãi nhau'], 0, 'Tự hào dân tộc.'),
    Q('Để có ngày hoà bình hôm nay nhờ?', ['Hi sinh của bao thế hệ cha anh', 'May mắn', 'Tự nhiên có', 'Người khác cho'], 0, 'Tri ân các anh hùng.'),
  ]),
  M(25, 'Ngày Quốc tế Lao động 1/5', [
    Q('1/5 là?', ['Ngày Quốc tế Lao động', 'Quốc khánh', 'Tết', 'Nhà giáo'], 0, 'Tôn vinh người lao động.'),
    Q('Lao động chân chính?', ['Đáng quý, đáng trân trọng', 'Đáng coi thường', 'Lười nhác', 'Không cần'], 0, 'Mọi lao động chân chính đều đáng quý.'),
    Q('Em là học sinh, lao động chính của em?', ['Học tập, giúp việc nhà', 'Không làm gì', 'Chỉ chơi', 'Đi làm thuê'], 0, 'Học và việc nhà phù hợp.'),
    Q('Khi gặp cô lao công em?', ['Chào hỏi, cảm ơn', 'Lờ đi', 'Cười nhạo', 'Vứt thêm rác'], 0, 'Tôn trọng người lao động.'),
  ]),
  M(26, 'Quan tâm sức khoẻ tinh thần', [
    Q('Khi buồn em nên?', ['Chia sẻ với người thân/bạn', 'Giấu kín', 'Tự hành hạ', 'Bỏ học'], 0, 'Chia sẻ giúp giảm áp lực.'),
    Q('Cảm xúc tích cực?', ['Vui, biết ơn, yêu thương', 'Buồn mãi', 'Giận dữ', 'Ghét bỏ'], 0, 'Nuôi dưỡng cảm xúc tốt.'),
    Q('Khi tức giận em nên?', ['Hít thở sâu, bình tĩnh', 'Đánh nhau', 'Đập đồ', 'Quát to'], 0, 'Quản lý cảm xúc.'),
    Q('Hoạt động nào giúp thư giãn?', ['Vẽ, đọc sách, đi bộ', 'Cãi nhau', 'Chơi game cả ngày', 'Lo lắng'], 0, 'Hoạt động lành mạnh.'),
  ]),
  M(27, 'Em tham gia hoạt động cộng đồng', [
    Q('Hoạt động cộng đồng?', ['Dọn vệ sinh, ủng hộ, hiến máu (người lớn)', 'Phá hoại', 'Bỏ rác', 'Cãi nhau'], 0, 'Việc làm vì cộng đồng.'),
    Q('Em có thể tham gia?', ['Vệ sinh khu phố, ủng hộ bạn nghèo', 'Chỉ người lớn mới làm được', 'Không làm gì', 'Cãi'], 0, 'Trẻ em cũng có thể đóng góp.'),
    Q('Ủng hộ bạn vùng lũ?', ['Quần áo, sách vở, đồ dùng', 'Đồ hỏng', 'Đồ bẩn', 'Không cần ủng hộ'], 0, 'Ủng hộ đồ còn dùng được, sạch.'),
    Q('Khi tham gia hoạt động em?', ['Tích cực, vui vẻ', 'Miễn cưỡng', 'Phá đám', 'Bỏ về'], 0, 'Tinh thần thiện nguyện.'),
  ]),
  M(28, 'Bảo vệ môi trường', [
    Q('Em bảo vệ môi trường bằng?', ['Tiết kiệm điện, nước, không xả rác', 'Lãng phí', 'Vứt rác bừa', 'Phá cây'], 0, 'Hành động cụ thể.'),
    Q('Rác phân loại?', ['Hữu cơ – Tái chế – Khác', 'Vứt chung', 'Đốt hết', 'Chôn lấp'], 0, '3R cơ bản.'),
    Q('Túi nilon?', ['Khó phân huỷ, ô nhiễm', 'Thân thiện', 'Tự tiêu huỷ', 'Không gây hại'], 0, 'Hạn chế dùng nilon.'),
    Q('Trồng cây giúp?', ['Lọc khí, chống xói mòn', 'Làm bẩn', 'Không có lợi', 'Phá nhà'], 0, 'Lợi ích to lớn.'),
    Q('Khi thấy bạn xả rác em?', ['Nhắc nhở nhẹ nhàng', 'Im lặng', 'Đánh bạn', 'Vứt thêm'], 0, 'Lên tiếng tích cực.'),
  ]),
  M(29, 'Ngày Quốc tế Thiếu nhi 1/6', [
    Q('1/6 là?', ['Ngày Quốc tế Thiếu nhi', 'Quốc khánh', 'Tết', 'Nhà giáo'], 0, 'Ngày của trẻ em.'),
    Q('Trẻ em có quyền?', ['Học tập, vui chơi, bảo vệ', 'Phải làm việc nặng', 'Không có quyền', 'Bị đánh đập'], 0, 'Công ước quyền trẻ em.'),
    Q('Trẻ em có bổn phận?', ['Học tập, lễ phép, giúp đỡ gia đình', 'Chỉ chơi', 'Không cần làm gì', 'Phá hoại'], 0, 'Quyền đi đôi với bổn phận.'),
    Q('Bác Hồ với thiếu nhi?', ['Yêu thương, dặn dò 5 điều', 'Không quan tâm', 'Lạnh nhạt', 'Phớt lờ'], 0, '5 điều Bác Hồ dạy.'),
  ]),
  M(30, 'Tổng kết hoạt động Sao Nhi đồng', [
    Q('Sao Nhi đồng dành cho?', ['Học sinh lớp 1–3 (Lớp 4 đã chuyển Đội)', 'Lớp 6', 'Người lớn', 'Trẻ mầm non'], 0, 'Lớp 4 vào Đội TNTP Hồ Chí Minh.'),
    Q('Đội Thiếu niên Tiền phong dành cho?', ['Học sinh từ 9 tuổi (lớp 4)', 'Trẻ 3 tuổi', 'Người lớn', 'Sinh viên'], 0, 'Từ 9 tuổi vào Đội.'),
    Q('Khăn quàng đỏ tượng trưng?', ['Một góc lá cờ Tổ quốc', 'Hoa', 'Bầu trời', 'Mặt trời'], 0, 'Khăn quàng đỏ – một góc cờ.'),
    Q('Em tự hào khi?', ['Được kết nạp Đội', 'Bị phê bình', 'Không tham gia', 'Bỏ Đội'], 0, 'Vinh dự được vào Đội.'),
  ]),
  M(31, 'Em làm hướng dẫn viên giới thiệu quê hương', [
    Q('Hướng dẫn viên cần?', ['Hiểu biết, giao tiếp tốt', 'Im lặng', 'Cãi khách', 'Không lễ phép'], 0, 'Nghề cần kiến thức và kỹ năng.'),
    Q('Giới thiệu quê hương em nên?', ['Tự hào, nói về đặc sản, danh lam', 'Chê', 'Im lặng', 'Bỏ qua'], 0, 'Tự hào và am hiểu.'),
    Q('Khi du khách hỏi em?', ['Trả lời lịch sự', 'Lờ đi', 'Cãi', 'Trêu'], 0, 'Văn minh với khách.'),
    Q('Bảo vệ di tích em không?', ['Khắc tên, vẽ bậy', 'Giữ gìn', 'Tôn trọng', 'Cảm ơn'], 0, 'Không phá hoại di tích.'),
  ]),
  M(32, 'Lập kế hoạch nghỉ hè', [
    Q('Nghỉ hè em nên?', ['Vui chơi + ôn bài + giúp việc nhà', 'Chỉ ngủ', 'Chơi game cả ngày', 'Không làm gì'], 0, 'Cân bằng các hoạt động.'),
    Q('Hoạt động hè bổ ích?', ['Đọc sách, học bơi, du lịch', 'Cãi nhau', 'Phá làng', 'Bỏ nhà đi'], 0, 'Hoạt động lành mạnh.'),
    Q('Khi đi bơi em cần?', ['Có người lớn giám sát', 'Đi một mình', 'Lén đi', 'Bơi ao sâu'], 0, 'An toàn nước.'),
    Q('Em có thể giúp cha mẹ?', ['Việc nhà phù hợp', 'Không làm gì', 'Phá hoại', 'Cãi'], 0, 'Giúp đỡ gia đình.'),
  ]),
  M(33, 'Tổng kết – Đánh giá bản thân', [
    Q('Sau một năm em đã?', ['Tiến bộ về nhiều mặt', 'Không thay đổi', 'Tệ hơn', 'Bỏ học'], 0, 'Tự đánh giá tiến bộ.'),
    Q('Khi đánh giá bản thân em cần?', ['Thành thật, công bằng', 'Nói dối', 'Thổi phồng', 'Coi thường mình'], 0, 'Thẳng thắn với chính mình.'),
    Q('Điểm cần cải thiện em?', ['Lập kế hoạch khắc phục', 'Bỏ qua', 'Đổ lỗi', 'Buồn'], 0, 'Hành động cụ thể.'),
    Q('Điều em tự hào?', ['Ghi nhận và phát huy', 'Tự mãn', 'Khoe khoang', 'Không quan tâm'], 0, 'Khẳng định bản thân lành mạnh.'),
  ]),
  M(34, 'Lễ ra trường khối tiểu học (chuẩn bị lên Lớp 5)', [
    Q('Lên Lớp 5 em sẽ là?', ['Anh chị lớn nhất khối tiểu học', 'Học sinh nhỏ', 'Vẫn như cũ', 'Không khác gì'], 0, 'Lớp 5 là lớp cuối tiểu học.'),
    Q('Em chuẩn bị cho Lớp 5?', ['Ôn kiến thức nền, rèn kỹ năng', 'Không cần', 'Bỏ học', 'Chơi'], 0, 'Tích luỹ kiến thức.'),
    Q('Khi chia tay thầy cô, bạn?', ['Cảm ơn, lưu kỷ niệm', 'Lờ đi', 'Cãi', 'Bỏ về'], 0, 'Trân trọng thầy cô và bạn bè.'),
    Q('Kỷ niệm Lớp 4?', ['Lưu giữ và trân trọng', 'Quên đi', 'Phá hoại', 'Cãi nhau'], 0, 'Kỷ niệm đẹp.'),
  ]),
  M(35, 'Tổng kết năm học – Cảm ơn', [
    Q('Em cảm ơn ai?', ['Cha mẹ, thầy cô, bạn bè', 'Không ai', 'Mình', 'Người lạ'], 0, 'Lòng biết ơn rộng.'),
    Q('Tổng kết năm em đã?', ['Học và rèn được nhiều điều', 'Không gì', 'Tệ đi', 'Bỏ học'], 0, 'Năm học có ý nghĩa.'),
    Q('Một mục tiêu cho hè?', ['Đọc 5 cuốn sách / học một kỹ năng mới', 'Không có', 'Lười', 'Bỏ học'], 0, 'Mục tiêu hè cụ thể.'),
    Q('Khi gặp lại bạn năm sau em?', ['Vui vẻ, chia sẻ', 'Lờ đi', 'Cãi', 'Tránh xa'], 0, 'Giữ tình bạn.'),
    Q('Em sẽ?', ['Tiếp tục cố gắng', 'Bỏ cuộc', 'Lười', 'Cãi'], 0, 'Tinh thần học suốt đời.'),
  ]),
];

export const P4HDTN_SCENARIOS = indexBy(P4HDTN_WEEKS);
