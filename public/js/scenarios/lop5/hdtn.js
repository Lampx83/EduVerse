// ============================================================
// Lớp 5 · HOẠT ĐỘNG TRẢI NGHIỆM — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn HĐTN Lớp 5.
// ID prefix: "P5HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5HDTN', 'hdtn', n, title, qs, opts);

export const P5HDTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Em là HS lớp 5 — Năm cuối tiểu học', [
    Q('Lớp 5 là?', ['Lớp đầu cấp Tiểu học', 'Lớp đầu THCS', 'Lớp cuối cấp Tiểu học', 'Lớp mẫu giáo'], 2, 'Lớp 5 là cuối tiểu học.'),
    Q('HS lớp 5 cần?', ['Chỉ lo học mình, không quan tâm em nhỏ', 'Bắt nạt', 'Gương mẫu cho em lớp dưới', 'Cãi cha mẹ'], 2, 'Gương mẫu cho em nhỏ.'),
    Q('Mục tiêu năm học?', ['Bỏ học', 'Chỉ tập trung điểm số môn yêu thích', 'Học tốt, rèn nề nếp chuẩn bị lên cấp 2', 'Chỉ chơi'], 2, 'Học tốt và chuẩn bị cấp 2.'),
    Q('Em nên?', ['Không kế hoạch', 'Bỏ mặc', 'Tuỳ tiện', 'Đặt mục tiêu rõ ràng cho năm cuối cấp'], 3, 'Đặt mục tiêu rõ ràng.'),
  ]),

  M(2, 'Kỹ năng học tập tự lập', [
    Q('Tự lập học tập là?', ['Bỏ qua', 'Tự lên kế hoạch và làm bài', 'Bố mẹ làm hộ', 'Chép bạn'], 1, 'Tự lên kế hoạch và làm bài.'),
    Q('Trước khi học em nên?', ['Mở ngay', 'Hỏi mẹ', 'Soạn sách vở, dụng cụ', 'Bỏ qua'], 2, 'Chuẩn bị đầy đủ.'),
    Q('Khi học khó em?', ['Suy nghĩ, tra cứu, hỏi nếu cần', 'Chép bài giải có sẵn trên mạng', 'Đợi cô giải', 'Bỏ luôn'], 0, 'Suy nghĩ trước khi hỏi.'),
    Q('Học tự lập giúp em?', ['Phụ thuộc người khác nhiều hơn', 'Mệt thêm', 'Mất bạn', 'Tự tin và hiểu sâu hơn'], 3, 'Tự tin và hiểu sâu hơn.'),
  ]),

  M(3, 'Kế hoạch tuần', [
    Q('Kế hoạch tuần là?', ['Lịch 1 ngày', 'Lịch 1 tháng', 'Lịch học kỳ cả năm', 'Lịch làm việc cho 7 ngày'], 3, '7 ngày trong tuần.'),
    Q('Kế hoạch giúp em?', ['Mất thời gian', 'Chỉ cần ghi nhớ trong đầu là đủ', 'Không quên việc và làm đúng giờ', 'Khiến em làm chậm hơn trước'], 2, 'Không quên và đúng giờ.'),
    Q('Kế hoạch tuần em nên có?', ['Thời gian học, chơi, giúp việc, nghỉ', 'Chỉ ngủ', 'Chỉ học', 'Chỉ chơi'], 0, 'Cân đối các hoạt động.'),
    Q('Khi việc thay đổi em?', ['Giữ nguyên kế hoạch cũ dù không hợp', 'Đổ lỗi cho người khác đã làm xáo trộn', 'Bỏ kế hoạch', 'Điều chỉnh kế hoạch'], 3, 'Linh hoạt điều chỉnh.'),
  ]),

  M(4, 'Quản lý thời gian', [
    Q('Quản lý thời gian là?', ['Sắp xếp thời gian hợp lý', 'Không quan tâm', 'Tuỳ tiện', 'Lãng phí'], 0, 'Sắp xếp hợp lý.'),
    Q('Việc khẩn cấp em?', ['Làm trước', 'Làm sau khi đã chơi xong', 'Để cuối', 'Chờ bố mẹ nhắc mới làm'], 0, 'Việc khẩn cấp làm trước.'),
    Q('Việc không quan trọng?', ['Làm trước', 'Làm sau hoặc bỏ', 'Làm ngay trước việc khẩn cấp', 'Dành nhiều thời gian nhất cho nó'], 1, 'Để sau hoặc bỏ.'),
    Q('Để dùng thời gian tốt em?', ['Bỏ qua', 'Tuỳ hứng', 'Có lịch và làm theo', 'Không lập'], 2, 'Lịch và thực hiện theo.'),
  ]),

  M(5, 'Làm việc nhóm', [
    Q('Làm việc nhóm cần?', ['Mỗi người một ý', 'Một bạn làm hết, cả nhóm ghi tên', 'Hợp tác, phân công', 'Bỏ nhóm'], 2, 'Hợp tác và phân công.'),
    Q('Khi có ý kiến khác?', ['Khẳng định ý mình đúng, không thay đổi', 'Lắng nghe và thảo luận', 'Bỏ nhóm', 'Lờ đi để giữ hoà khí giả tạo'], 1, 'Lắng nghe và thảo luận.'),
    Q('Trưởng nhóm nên?', ['Tự quyết định mọi việc một mình', 'Lắng nghe và dẫn dắt', 'Áp đặt', 'Bỏ mặc'], 1, 'Lắng nghe và dẫn dắt.'),
    Q('Thành viên nhóm nên?', ['Chỉ làm phần dễ, đùn phần khó cho bạn', 'Ngồi không', 'Đóng góp tích cực, tôn trọng', 'Làm xong việc mình rồi mặc kệ nhóm'], 2, 'Đóng góp và tôn trọng.'),
  ]),

  M(6, 'Tổ chức sinh nhật bạn', [
    Q('Sinh nhật bạn em nên?', ['Đợi bạn nhắc mới nhớ ra', 'Mượn dịp xin quà ngược lại', 'Bỏ qua', 'Tặng quà, lời chúc chân thành'], 3, 'Tặng quà và lời chúc.'),
    Q('Quà sinh nhật?', ['Quà cũ', 'Đắt nhất', 'Phù hợp, ý nghĩa', 'Không quà'], 2, 'Phù hợp và ý nghĩa.'),
    Q('Khi tổ chức tiệc?', ['Mời bạn, chuẩn bị chu đáo', 'Để mỗi người tự mang đồ riêng', 'Cãi nhau', 'Bỏ mặc'], 0, 'Chu đáo trong tổ chức.'),
    Q('Sau tiệc?', ['Dọn dẹp gọn gàng', 'Đợi chủ nhà tự dọn một mình', 'Để rác lại cho người sau dọn', 'Bỏ bừa'], 0, 'Dọn dẹp sau tiệc.'),
  ]),

  M(7, 'Dã ngoại an toàn', [
    Q('Trước khi đi dã ngoại?', ['Đi ngay', 'Bỏ qua', 'Chuẩn bị đồ dùng, kế hoạch', 'Không chuẩn bị'], 2, 'Chuẩn bị đầy đủ.'),
    Q('Khi đi em phải?', ['Bỏ đoàn', 'Theo đoàn, không tách riêng', 'Lạc lung tung', 'Đi nhanh lên phía trước một mình'], 1, 'Theo đoàn để an toàn.'),
    Q('Bị lạc em nên?', ['Đứng yên, gọi điện người lớn', 'Chạy lung tung', 'Khóc thầm', 'Bỏ vào rừng'], 0, 'Đứng yên và gọi điện.'),
    Q('Khi gặp động vật lạ?', ['Tìm cách dụ con vật theo mình', 'Lại gần vuốt ve cho thân thiện', 'Ném đá để xua con vật đi', 'Tránh xa, báo người lớn'], 3, 'Tránh xa và báo người lớn.'),
  ]),

  M(8, 'Các nghề trong cộng đồng', [
    Q('Nghề trong cộng đồng gồm?', ['Chỉ giáo viên', 'Chỉ bác sĩ', 'Chỉ có nghề trong nhà nước', 'Bác sĩ, giáo viên, thợ, nông dân, công an…'], 3, 'Rất nhiều nghề trong cộng đồng.'),
    Q('Nghề nào cũng?', ['Đáng quý, có ích cho xã hội', 'Không cần', 'Chỉ nghề lương cao mới đáng quý', 'Chỉ nghề trí óc mới có giá trị'], 0, 'Mọi nghề đều đáng quý.'),
    Q('Em yêu nghề nào?', ['Cô chọn', 'Tự chọn theo sở thích', 'Bạn chọn', 'Cha mẹ chọn'], 1, 'Tự chọn theo sở thích.'),
    Q('Để làm nghề em cần?', ['Chỉ cần năng khiếu bẩm sinh là đủ', 'Đợi lớn lên rồi mới bắt đầu học', 'Bỏ học', 'Học tập tốt, rèn kĩ năng'], 3, 'Học và rèn kĩ năng.'),
  ]),

  M(9, 'Tham gia Đội Thiếu niên Tiền phong', [
    Q('Đội TNTP HCM là?', ['Tổ chức của thiếu niên Việt Nam', 'Trường học', 'Công ty', 'Câu lạc bộ thể thao'], 0, 'Đội TNTP Hồ Chí Minh.'),
    Q('Khăn quàng đỏ của đội viên?', ['Khăn thường', 'Đồ trang trí', 'Một phần lá cờ Tổ quốc', 'Phụ kiện chỉ dùng khi chào cờ'], 2, 'Một phần lá cờ Tổ quốc.'),
    Q('Ngày thành lập Đội?', ['19/5', '22/12', '15/5/1941', '2/9'], 2, 'Đội thành lập 15/5/1941.'),
    Q('Đội viên cần?', ['Bỏ học', 'Chỉ học giỏi, không cần rèn hành vi', 'Chỉ đeo khăn quàng là đủ', 'Học giỏi, hành tốt, gương mẫu'], 3, 'Học giỏi và gương mẫu.'),
  ]),

  M(10, 'Ngày Quốc khánh 2/9', [
    Q('Ngày Quốc khánh là?', ['30/4', '1/5', '2/9', '20/11'], 2, '2/9 là Quốc khánh.'),
    Q('Sự kiện 2/9/1945?', ['Ngày sinh Bác', 'Giải phóng miền Nam', 'Bác Hồ đọc Tuyên ngôn Độc lập', 'Ngày Nhà giáo'], 2, 'Bác Hồ đọc Tuyên ngôn Độc lập.'),
    Q('Tuyên ngôn Độc lập đọc tại?', ['Đà Nẵng', 'Cố đô Huế', 'TP.HCM', 'Quảng trường Ba Đình, Hà Nội'], 3, 'Quảng trường Ba Đình.'),
    Q('Ngày này em nên?', ['Coi như ngày nghỉ bình thường', 'Chỉ đi chơi cho thỏa thích', 'Treo cờ, tự hào về dân tộc', 'Không treo'], 2, 'Treo cờ và tự hào dân tộc.'),
  ]),

  M(11, 'Ngày Nhà giáo Việt Nam 20/11', [
    Q('20/11 là?', ['Ngày Quốc khánh', 'Ngày Phụ nữ', 'Ngày Nhà giáo Việt Nam', 'Ngày Trẻ em'], 2, '20/11 - Ngày Nhà giáo VN.'),
    Q('Việc làm tri ân thầy cô?', ['Bỏ học', 'Chỉ chúc qua loa rồi đi chơi', 'Trêu cô', 'Tặng hoa, chúc mừng, học tốt'], 3, 'Tặng hoa và học tốt.'),
    Q('Lời chúc thầy cô?', ['"Bỏ học"', '"Thầy cô vất vả quá"', '"Không thích cô"', '"Chúc thầy cô mạnh khoẻ, hạnh phúc"'], 3, 'Lời chúc chân thành.'),
    Q('Quà ý nghĩa nhất?', ['Học tốt, ngoan ngoãn', 'Hoa to nhất', 'Quà lạ', 'Quà đắt'], 0, 'Học tốt và ngoan là món quà tốt nhất.'),
  ]),

  M(12, 'Ngày Quân đội Nhân dân 22/12', [
    Q('22/12 là?', ['Ngày Phụ nữ', 'Ngày Trẻ em', 'Ngày Nhà giáo', 'Ngày thành lập Quân đội Nhân dân VN'], 3, '22/12 là Ngày QĐND VN.'),
    Q('Quân đội VN có vai trò?', ['Buôn bán', 'Trang trí', 'Du lịch', 'Bảo vệ Tổ quốc'], 3, 'Bảo vệ Tổ quốc.'),
    Q('Em tri ân các chú bộ đội?', ['Coi như ngày nghỉ bình thường', 'Viết thư, hát, học tốt', 'Không quan tâm', 'Chỉ quan tâm khi gặp trực tiếp'], 1, 'Tri ân qua hành động cụ thể.'),
    Q('Hình tượng chú bộ đội?', ['Áo vàng, mũ rơm', 'Trang phục giống công an', 'Áo xanh, mũ cối, dũng cảm', 'Áo trắng'], 2, 'Áo xanh và mũ cối là hình ảnh quen thuộc.'),
  ]),

  M(13, 'Kỹ năng tự bảo vệ - Phòng tránh đuối nước', [
    Q('Đuối nước có thể xảy ra ở?', ['Ao hồ sông biển bể bơi', 'Trên cây', 'Trên mây', 'Trên cạn'], 0, 'Nơi có nước đều có nguy cơ.'),
    Q('Trước khi xuống nước?', ['Khởi động, có người lớn', 'Một mình', 'Bơi ngay sau khi vừa ăn no', 'Xuống ngay'], 0, 'Khởi động và có người lớn.'),
    Q('Khi thấy người đuối nước?', ['Gọi người lớn, ném phao/cây dài', 'Bỏ chạy', 'Nhảy xuống cứu', 'Quay video đăng mạng xã hội'], 0, 'Gọi người lớn, không tự nhảy xuống.'),
    Q('Em nên học?', ['Sợ nước', 'Không học', 'Tránh nước', 'Bơi để tự bảo vệ'], 3, 'Học bơi là kỹ năng sống.'),
  ]),

  M(14, 'Kỹ năng tự bảo vệ - Phòng cháy', [
    Q('Khi có cháy em?', ['Trốn dưới gầm', 'Mở cửa sổ', 'Thoát ra, gọi 114', 'Cứu đồ trước'], 2, 'Thoát ra và gọi 114.'),
    Q('Khói nhiều em nên?', ['Chạy nhanh đứng', 'Cúi thấp, lấy khăn ướt che mũi miệng', 'Ngồi yên', 'Đứng thẳng'], 1, 'Cúi thấp và che mũi miệng.'),
    Q('Số điện thoại cứu hoả?', ['114', '115', '112', '113'], 0, '114 là cứu hoả.'),
    Q('Trong nhà em nên?', ['Nghịch lửa', 'Đốt rác trong nhà', 'Không nghịch lửa, để bật lửa xa tầm tay', 'Để bật lửa nơi dễ lấy'], 2, 'Không nghịch lửa.'),
  ]),

  M(15, 'Kỹ năng tự bảo vệ - Người lạ', [
    Q('Khi người lạ rủ đi?', ['Tin lời hứa cho kẹo của họ', 'Đi vài bước cho lịch sự rồi quay lại', 'Từ chối, báo người lớn', 'Đi theo'], 2, 'Tuyệt đối không đi theo.'),
    Q('Khi bị quấy rối?', ['Chịu đựng', 'Tự xử lý', 'Hô to và bỏ chạy, kể với cha mẹ', 'Im lặng'], 2, 'Hô to và kể với cha mẹ.'),
    Q('Không cho người lạ biết?', ['Địa chỉ, số điện thoại, ảnh', 'Hình emoji', 'Lời chào', 'Tên trường'], 0, 'Không cho thông tin cá nhân.'),
    Q('Khi có người lạ vào nhà?', ['Đưa đồ', 'Mở luôn', 'Không mở cửa khi 1 mình', 'Mời vào'], 2, 'Không mở cửa khi 1 mình.'),
  ]),

  M(16, 'Tham gia hoạt động cộng đồng', [
    Q('Hoạt động cộng đồng là?', ['Việc làm vì lợi ích chung của khu phố/xã', 'Việc cá nhân', 'Việc chỉ dành cho người lớn tuổi', 'Việc làm để được khen thưởng cá nhân'], 0, 'Vì lợi ích chung.'),
    Q('Ví dụ hoạt động?', ['Đi xem các bạn khác dọn vệ sinh', 'Bỏ rác', 'Dọn vệ sinh, trồng cây, ủng hộ', 'Phá cây'], 2, 'Dọn vệ sinh, trồng cây.'),
    Q('Tham gia em được?', ['Mất gì', 'Yêu thương cộng đồng, bạn mới', 'Tốn thời gian học tập', 'Bị bắt buộc phải tham gia'], 1, 'Yêu cộng đồng và có bạn mới.'),
    Q('Khi cộng đồng có người khó khăn?', ['Chia sẻ, ủng hộ', 'Bỏ mặc', 'Coi đó là việc của chính quyền', 'Khinh thường'], 0, 'Chia sẻ và ủng hộ.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('HK1 em đã trải nghiệm?', ['Tự lập, kế hoạch, làm việc nhóm, kỹ năng tự vệ', 'Không gì', 'Chỉ học', 'Chỉ chơi'], 0, 'Nhiều trải nghiệm bổ ích.'),
    Q('Lập kế hoạch quan trọng vì?', ['Chỉ phù hợp với người lớn', 'Mất thời gian', 'Khiến em cứng nhắc, thiếu linh hoạt', 'Sống hiệu quả'], 3, 'Giúp sống hiệu quả.'),
    Q('Kỹ năng tự bảo vệ?', ['Chỉ cần khi gặp người lớn', 'Khiến em sợ hãi, mất tự tin', 'Cứu mạng và an toàn', 'Không cần'], 2, 'Cứu mạng và an toàn.'),
    Q('Em đã trưởng thành hơn?', ['Tệ hơn', 'Không thay đổi', 'Tự lập và có trách nhiệm', 'Quên hết'], 2, 'Tự lập và có trách nhiệm hơn.'),
  ]),

  M(18, 'Tổng kết HK1', [
    Q('Tự đánh giá em?', ['Bỏ qua', 'Ghi điểm cao hơn thực tế', 'Trung thực, công bằng', 'Chê bai bản thân quá mức'], 2, 'Trung thực và công bằng.'),
    Q('Điều em làm tốt?', ['Ghi nhận và phát huy', 'Giấu đi để bạn không bắt chước', 'Cho rằng đã đủ, không cần làm thêm', 'Khoe khoang khắp nơi với mọi người'], 0, 'Phát huy điểm tốt.'),
    Q('Điều cần cải thiện?', ['Lập kế hoạch sửa đổi', 'Đổ lỗi cho hoàn cảnh khách quan', 'Né tránh không nhắc đến nữa', 'Bỏ qua'], 0, 'Lập kế hoạch cải thiện.'),
    Q('Mục tiêu HK2?', ['Đặt rõ ràng và thực hiện', 'Bỏ qua', 'Đặt thật cao để gây ấn tượng', 'Tới đâu hay tới đó, không lên kế hoạch'], 0, 'Đặt mục tiêu rõ ràng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Mừng Tết - Truyền thống gia đình', [
    Q('Tết là dịp?', ['Bỏ nhà', 'Sum họp gia đình, tri ân tổ tiên', 'Đi chơi xa nhà', 'Cãi nhau'], 1, 'Sum họp và tri ân.'),
    Q('Em giúp gia đình?', ['Dọn nhà, gói bánh, chúc Tết', 'Đi chơi', 'Đợi bố mẹ nhờ mới làm', 'Bỏ mặc'], 0, 'Cùng tham gia chuẩn bị Tết.'),
    Q('Khi nhận lì xì em?', ['Mở đếm ngay', 'Cảm ơn và chúc lại', 'So sánh với lì xì của bạn khác', 'Chê ít'], 1, 'Cảm ơn và chúc lại.'),
    Q('Truyền thống Tết đẹp?', ['Nhậu say', 'Cãi nhau', 'Cúng tổ tiên, chúc Tết, lì xì', 'Đốt pháo lậu'], 2, 'Truyền thống đẹp.'),
  ]),

  M(20, 'Em yêu lao động trong gia đình', [
    Q('Việc nhà em có thể làm?', ['Quét, lau, rửa bát, cắm cơm', 'Không làm', 'Bỏ mặc', 'Chỉ chơi'], 0, 'Nhiều việc phù hợp.'),
    Q('Làm việc nhà em?', ['Đỡ đần cha mẹ, biết quý sức lao động', 'Mệt vô ích', 'Mất thời gian', 'Bị mắng'], 0, 'Đỡ đần cha mẹ.'),
    Q('Khi mẹ mệt?', ['Tự giác làm thêm việc nhà', 'Đợi mẹ nhắc', 'Bỏ chơi', 'Nói mẹ tự sắp xếp thời gian nghỉ'], 0, 'Tự giác làm thêm.'),
    Q('Làm việc nhà giúp em?', ['Mất thời gian học tập', 'Mất bạn', 'Tự lập, có kỹ năng sống', 'Khiến em mệt mỏi cả ngày'], 2, 'Tự lập và có kỹ năng.'),
  ]),

  M(21, 'Ngày Quốc tế Phụ nữ 8/3', [
    Q('8/3 là?', ['Ngày Trẻ em', 'Ngày Quốc khánh', 'Ngày Quốc tế Phụ nữ', 'Ngày Nhà giáo'], 2, '8/3 là Ngày Quốc tế Phụ nữ.'),
    Q('Em chúc mẹ, cô, bà 8/3?', ['Lời chúc và quà ý nghĩa', 'Đợi sang ngày khác mới chúc', 'Chỉ chúc qua tin nhắn cho nhanh', 'Bỏ qua'], 0, 'Lời chúc chân thành.'),
    Q('Quà ý nghĩa cho mẹ?', ['Quà đắt', 'Hoa hồng héo', 'Thiệp tự làm, giúp việc nhà', 'Không quà'], 2, 'Tự làm và giúp việc nhà.'),
    Q('Tôn trọng phụ nữ là?', ['Bắt nạt', 'Lễ phép, giúp đỡ, không trêu', 'Khinh thường', 'Coi phụ nữ chỉ làm việc nhà'], 1, 'Lễ phép và giúp đỡ.'),
  ]),

  M(22, 'Bảo vệ môi trường - Hành động cộng đồng', [
    Q('Hành động bảo vệ môi trường?', ['Phá cây', 'Xả rác', 'Đốt rừng', 'Trồng cây, dọn rác, tiết kiệm'], 3, 'Hành động tích cực.'),
    Q('Trong cộng đồng em có thể?', ['Bỏ qua', 'Chờ người lớn làm thay', 'Tham gia ngày Chủ nhật xanh', 'Chỉ làm khi được trả công'], 2, 'Tham gia Chủ nhật xanh.'),
    Q('Phân loại rác giúp?', ['Mất thời gian', 'Tái chế và giảm ô nhiễm', 'Chỉ cần khi rác quá nhiều', 'Tốn nhiều túi rác hơn'], 1, 'Tái chế và giảm ô nhiễm.'),
    Q('Em là?', ['Sứ giả môi trường tại trường, nhà', 'Người vô can', 'Không quan tâm', 'Người gây ô nhiễm'], 0, 'Sứ giả môi trường.'),
  ]),

  M(23, 'Kỹ năng giao tiếp', [
    Q('Giao tiếp tốt cần?', ['Nói lí nhí cho khỏi mất lòng', 'Nói thật to để mọi người nghe rõ', 'Chen ngang', 'Lắng nghe và nói rõ ràng'], 3, 'Lắng nghe và nói rõ.'),
    Q('Khi người khác nói em?', ['Vừa nghe vừa làm việc khác', 'Lắng nghe, không ngắt lời', 'Gật đầu nhưng không thực sự nghe', 'Ngắt lời'], 1, 'Lắng nghe không ngắt lời.'),
    Q('Khi không đồng ý?', ['Im rồi giận', 'Cãi gay gắt', 'Bỏ đi không nói lời nào', 'Nói lịch sự, không gay gắt'], 3, 'Lịch sự và bình tĩnh.'),
    Q('Lời nói em nên?', ['Thô lỗ', 'Lừa dối', 'Khoe khoang điều mình biết', 'Lịch sự, chân thành'], 3, 'Lịch sự và chân thành.'),
  ]),

  M(24, 'Quản lý cảm xúc', [
    Q('Khi tức giận em?', ['Đánh người', 'Hít sâu, đếm 1-10', 'Đập đồ', 'Giận dỗi và bỏ đi nơi khác'], 1, 'Hít sâu và bình tĩnh.'),
    Q('Khi buồn em?', ['Khóc một mình', 'Giữ trong lòng', 'Chia sẻ với người tin tưởng', 'Đập đồ'], 2, 'Chia sẻ là cách hay.'),
    Q('Cảm xúc tích cực?', ['Vui, hy vọng, biết ơn', 'Tức giận', 'Lo lắng, căng thẳng', 'Sợ hãi'], 0, 'Cảm xúc tích cực giúp em khoẻ.'),
    Q('Khi vui em nên?', ['Khoe quá độ', 'Chia sẻ niềm vui', 'Cười phá lên', 'Giữ kín không cho ai biết'], 1, 'Chia sẻ niềm vui.'),
  ]),

  M(25, 'Tổ chức tham quan, dã ngoại lớp', [
    Q('Khi đi dã ngoại em mang?', ['Đồ chơi điện tử', 'Đồ cần thiết, không quá nặng', 'Tất cả đồ', 'Không mang gì'], 1, 'Đồ cần thiết và gọn nhẹ.'),
    Q('Đến nơi em nên?', ['Tự đi riêng', 'Theo nhóm, nghe cô hướng dẫn', 'Bỏ đoàn để chụp ảnh riêng', 'Lén ra'], 1, 'Theo nhóm và nghe cô.'),
    Q('Trong rừng/núi em nên?', ['Đốt rác', 'Hái thoải mái', 'Bẻ cây', 'Không bẻ cành, hái hoa'], 3, 'Bảo vệ thiên nhiên.'),
    Q('Sau dã ngoại em?', ['Để bừa', 'Bỏ rác tại chỗ', 'Mang rác về, giữ sạch', 'Chôn rác xuống đất cho khuất mắt'], 2, 'Mang rác về bỏ đúng nơi.'),
  ]),

  M(26, 'Ngày Giải phóng miền Nam 30/4 và 1/5', [
    Q('30/4 là?', ['20/11', '8/3', 'Quốc khánh', 'Ngày Giải phóng miền Nam, thống nhất đất nước'], 3, '30/4 là ngày thống nhất.'),
    Q('1/5 là?', ['Ngày Quốc tế Lao động', 'Quốc khánh', 'Ngày trẻ em', 'Ngày Giỗ Tổ Hùng Vương'], 0, '1/5 là Quốc tế Lao động.'),
    Q('Em nên?', ['Coi như ngày bình thường khác', 'Chỉ nhớ vào dịp lễ lớn', 'Tri ân các thế hệ đi trước', 'Không quan tâm'], 2, 'Tri ân thế hệ đi trước.'),
    Q('Ý nghĩa 30/4?', ['Mất nước', 'Không có gì', 'Chiến tranh', 'Đất nước thống nhất, hoà bình'], 3, 'Đất nước thống nhất và hoà bình.'),
  ]),

  M(27, 'Ngày Quốc tế Thiếu nhi 1/6', [
    Q('1/6 là?', ['Ngày Quốc tế Thiếu nhi', 'Quốc khánh', '20/11', 'Ngày Gia đình Việt Nam'], 0, '1/6 là Ngày Trẻ em.'),
    Q('Quyền trẻ em?', ['Học, chơi, bảo vệ, phát triển', 'Bỏ học', 'Không quyền', 'Bắt nạt'], 0, 'Trẻ em có nhiều quyền cơ bản.'),
    Q('Em nên?', ['Chỉ đòi quyền lợi cho riêng mình', 'Trân trọng và biết bổn phận', 'Đòi hỏi', 'Cho rằng mọi thứ là đương nhiên có'], 1, 'Trân trọng quyền và biết bổn phận.'),
    Q('Trong ngày 1/6 em?', ['Bỏ mặc', 'Chỉ ở nhà xem TV cả ngày', 'Tham gia sinh hoạt cộng đồng vui khoẻ', 'Đòi quà mới chịu tham gia'], 2, 'Sinh hoạt cộng đồng vui khoẻ.'),
  ]),

  M(28, 'Hướng nghiệp - Em mơ làm gì?', [
    Q('Hướng nghiệp là?', ['Mất thời gian', 'Chỉ dành cho học sinh cấp 3', 'Chọn nghề theo ý bố mẹ là đủ', 'Tìm hiểu nghề và định hướng'], 3, 'Tìm hiểu nghề.'),
    Q('Để làm nghề em mơ ước?', ['Chỉ mơ mà không hành động', 'Bỏ học', 'Đợi may mắn đến tự nhiên', 'Học tốt, rèn kỹ năng'], 3, 'Học và rèn kỹ năng.'),
    Q('Khi chưa biết mơ gì?', ['Tìm hiểu, trải nghiệm dần', 'Chọn đại một nghề cho xong', 'Bắt chước ước mơ của bạn thân', 'Bỏ qua'], 0, 'Tìm hiểu dần.'),
    Q('Mỗi nghề đều?', ['Không cần', 'Chỉ nghề nổi tiếng mới đáng làm', 'Đáng quý và cần xã hội', 'Chỉ cần thiết cho người làm nghề đó'], 2, 'Đáng quý và cần thiết.'),
  ]),

  M(29, 'Hoạt động Đội cuối cấp', [
    Q('Đội viên cuối cấp nên?', ['Bắt nạt', 'Chỉ lo việc của riêng mình', 'Gương mẫu, dẫn dắt em lớp dưới', 'Bắt em lớp dưới phục tùng'], 2, 'Gương mẫu và dẫn dắt.'),
    Q('Sinh hoạt Đội cuối tuần?', ['Chỉ tham gia khi có quà', 'Đến điểm danh rồi xin về sớm', 'Tham gia tích cực', 'Tham gia hình thức, không đóng góp'], 2, 'Tham gia tích cực.'),
    Q('Khăn quàng đỏ em?', ['Gấp lại để trong cặp cho gọn', 'Buộc quanh cổ tay làm phụ kiện', 'Giữ sạch, đeo đúng cách', 'Chỉ đeo khi có hoạt động Đội'], 2, 'Giữ sạch và đeo đúng.'),
    Q('Lời hứa đội viên?', ['Chỉ đọc thuộc lòng cho có', 'Hứa qua loa rồi quên ngay', 'Cố gắng học tập, rèn luyện', 'Chỉ thực hiện khi có người nhắc'], 2, 'Cố gắng học và rèn luyện.'),
  ]),

  M(30, 'Chuẩn bị lên cấp 2', [
    Q('Cấp 2 khác cấp 1?', ['Chỉ chơi', 'Nhiều môn, nhiều thầy cô, tự lập hơn', 'Y như cấp 1', 'Bỏ học'], 1, 'Nhiều môn và tự lập hơn.'),
    Q('Em cần chuẩn bị?', ['Kiến thức nền và kỹ năng tự học', 'Không cần', 'Lên cấp 2 mới bắt đầu học', 'Chỉ cần mua sách giáo khoa mới'], 0, 'Kiến thức và kỹ năng tự học.'),
    Q('Lo lắng lên cấp 2?', ['Bỏ học', 'Bình thường, vượt qua bằng nỗ lực', 'Đòi bố mẹ chuyển trường gần nhà', 'Trốn tránh không muốn lên lớp'], 1, 'Tự tin vượt qua.'),
    Q('Bạn mới cấp 2 em?', ['Làm quen, thân thiện', 'Bỏ mặc', 'Chỉ chơi với bạn cũ tiểu học', 'Tẩy chay'], 0, 'Làm quen thân thiện.'),
  ]),

  M(31, 'Tạm biệt cấp 1 - Tri ân thầy cô', [
    Q('Tri ân thầy cô tiểu học?', ['Chỉ tri ân giáo viên chủ nhiệm cuối', 'Đợi đến 20/11 mới tri ân', 'Bỏ qua', 'Lời cảm ơn, học tốt mãi'], 3, 'Lời cảm ơn và học tốt.'),
    Q('Lễ ra trường em?', ['Đến muộn rồi vào sau', 'Nô đùa, làm ồn trong lễ', 'Tham gia trang trọng, ghi nhớ', 'Lén dùng điện thoại trong lễ'], 2, 'Trang trọng và ghi nhớ.'),
    Q('Kỉ vật cấp 1?', ['Lưu giữ và trân trọng', 'Đem cho em họ chưa đi học', 'Bỏ qua', 'Giữ vài hôm rồi vứt đi'], 0, 'Lưu giữ kỉ vật.'),
    Q('Lời tạm biệt thầy cô?', ['Nói qua loa cho xong chuyện', 'Đợi bạn nói thay mình', 'Chân thành và cảm ơn', 'Chỉ vẫy tay tạm biệt'], 2, 'Chân thành và cảm ơn.'),
  ]),

  M(32, 'Tạm biệt bạn bè cấp 1', [
    Q('Bạn cấp 1 sau này?', ['Coi nhau như người xa lạ', 'Đổi số điện thoại cho mất liên lạc', 'Xóa hết ảnh kỉ niệm cho gọn', 'Vẫn giữ liên lạc, là kỉ niệm đẹp'], 3, 'Giữ liên lạc và kỉ niệm đẹp.'),
    Q('Khi bạn lên trường khác?', ['Trách bạn vì đã chọn trường khác', 'Khoá hết liên lạc cho đỡ buồn', 'Tuyệt giao', 'Chúc và giữ liên lạc'], 3, 'Chúc và giữ liên lạc.'),
    Q('Lưu bút em?', ['Viết theo mẫu trên mạng', 'Viết tên người khác cho vui', 'Bỏ trắng', 'Viết lời chân thành'], 3, 'Lời chân thành trong lưu bút.'),
    Q('Tình bạn cấp 1?', ['Sẽ phai nhạt khi lên cấp 2', 'Kỉ niệm đẹp một thời thơ ấu', 'Chỉ là quan hệ qua đường', 'Nên cố quên đi để tập trung học'], 1, 'Kỉ niệm đẹp thời thơ ấu.'),
  ]),

  M(33, 'Tổng kết - Em đã trưởng thành', [
    Q('Sau 5 năm tiểu học em?', ['Tệ hơn', 'Vẫn như khi vào lớp 1', 'Không thay đổi', 'Có kiến thức và kỹ năng'], 3, 'Có kiến thức và kỹ năng.'),
    Q('Em biết ơn?', ['Cha mẹ, thầy cô, bạn bè', 'Chỉ cha mẹ ruột', 'Không ai', 'Chỉ mình'], 0, 'Cha mẹ, thầy cô, bạn bè.'),
    Q('Tự đánh giá bản thân?', ['Hạ thấp giá trị bản thân', 'Phóng đại thành tích của mình', 'Chỉ nhìn vào khuyết điểm', 'Trung thực, công bằng'], 3, 'Trung thực và công bằng.'),
    Q('Trưởng thành nghĩa là?', ['Tự lập, có trách nhiệm', 'Lớn xác', 'Khoe khoang', 'Bắt nạt'], 0, 'Tự lập và có trách nhiệm.'),
  ]),

  M(34, 'Hành trang lên cấp 2', [
    Q('Hành trang cấp 2 gồm?', ['Kiến thức, kỹ năng, đạo đức', 'Chỉ tiền', 'Chỉ sách vở', 'Không gì'], 0, 'Kiến thức, kỹ năng, đạo đức.'),
    Q('Kỹ năng cần?', ['Chỉ học vẹt', 'Tự học, làm việc nhóm, giao tiếp', 'Không cần', 'Chỉ chơi'], 1, 'Nhiều kỹ năng cần thiết.'),
    Q('Đạo đức cần?', ['Bắt nạt', 'Hơn thua với bạn bè', 'Trung thực, biết ơn, trách nhiệm', 'Ích kỉ, chỉ nghĩ cho mình'], 2, 'Đức tính tốt.'),
    Q('Tinh thần lên cấp 2?', ['Lo lắng', 'Bỏ học', 'Lo lắng vì kiến thức nặng hơn', 'Tự tin và sẵn sàng'], 3, 'Tự tin và sẵn sàng.'),
  ]),

  M(35, 'Bế giảng - Bước vào cấp 2', [
    Q('Lễ bế giảng em?', ['Đến muộn rồi xin vào', 'Cười đùa làm ồn trong lễ', 'Xin về sau khi nhận giấy khen', 'Tham gia trang trọng'], 3, 'Trang trọng và đầy đủ.'),
    Q('Cảm xúc bế giảng?', ['Buồn chán', 'Vô cảm', 'Bồi hồi, vui mừng và tự hào', 'Tức giận'], 2, 'Bồi hồi và tự hào.'),
    Q('Lời hứa với thầy cô?', ['Học tốt ở cấp 2', 'Cố gắng nhưng không cần xuất sắc', 'Bỏ học', 'Chỉ giữ liên lạc thầy cô cũ'], 0, 'Hứa học tốt cấp 2.'),
    Q('Bước vào cấp 2 em?', ['Bỏ học', 'Tự tin, mang theo những gì đã học', 'Bỏ quên kiến thức cũ đã học', 'Coi cấp 1 là quá khứ không liên quan'], 1, 'Tự tin và áp dụng những gì đã học.'),
  ]),
];

export const P5HDTN_SCENARIOS = indexBy(P5HDTN_WEEKS);
