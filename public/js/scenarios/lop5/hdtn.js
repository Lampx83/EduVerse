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
    Q('Lớp 5 là?', ['Lớp cuối cấp Tiểu học','Lớp đầu THCS','Lớp 1','Lớp mẫu giáo'], 0, 'Lớp 5 là cuối tiểu học.'),
    Q('HS lớp 5 cần?', ['Gương mẫu cho em lớp dưới','Bắt nạt','Lười','Cãi cha mẹ'], 0, 'Gương mẫu cho em nhỏ.'),
    Q('Mục tiêu năm học?', ['Học tốt, rèn nề nếp chuẩn bị lên cấp 2','Chỉ chơi','Bỏ học','Không có'], 0, 'Học tốt và chuẩn bị cấp 2.'),
    Q('Em nên?', ['Đặt mục tiêu rõ ràng cho năm cuối cấp','Không kế hoạch','Tuỳ tiện','Bỏ mặc'], 0, 'Đặt mục tiêu rõ ràng.'),
  ]),

  M(2, 'Kỹ năng học tập tự lập', [
    Q('Tự lập học tập là?', ['Tự lên kế hoạch và làm bài','Bố mẹ làm hộ','Chép bạn','Bỏ qua'], 0, 'Tự lên kế hoạch và làm bài.'),
    Q('Trước khi học em nên?', ['Soạn sách vở, dụng cụ','Mở ngay','Bỏ qua','Hỏi mẹ'], 0, 'Chuẩn bị đầy đủ.'),
    Q('Khi học khó em?', ['Suy nghĩ, tra cứu, hỏi nếu cần','Bỏ luôn','Đợi cô giải','Khóc'], 0, 'Suy nghĩ trước khi hỏi.'),
    Q('Học tự lập giúp em?', ['Tự tin và hiểu sâu hơn','Mệt thêm','Vô ích','Mất bạn'], 0, 'Tự tin và hiểu sâu hơn.'),
  ]),

  M(3, 'Kế hoạch tuần', [
    Q('Kế hoạch tuần là?', ['Lịch làm việc cho 7 ngày','Lịch 1 ngày','Lịch 1 tháng','Không có'], 0, '7 ngày trong tuần.'),
    Q('Kế hoạch giúp em?', ['Không quên việc và làm đúng giờ','Mất thời gian','Mệt','Vô ích'], 0, 'Không quên và đúng giờ.'),
    Q('Kế hoạch tuần em nên có?', ['Thời gian học, chơi, giúp việc, nghỉ','Chỉ chơi','Chỉ học','Chỉ ngủ'], 0, 'Cân đối các hoạt động.'),
    Q('Khi việc thay đổi em?', ['Điều chỉnh kế hoạch','Bỏ kế hoạch','Cãi','Khóc'], 0, 'Linh hoạt điều chỉnh.'),
  ]),

  M(4, 'Quản lý thời gian', [
    Q('Quản lý thời gian là?', ['Sắp xếp thời gian hợp lý','Lãng phí','Không quan tâm','Tuỳ tiện'], 0, 'Sắp xếp hợp lý.'),
    Q('Việc khẩn cấp em?', ['Làm trước','Để cuối','Bỏ','Quên'], 0, 'Việc khẩn cấp làm trước.'),
    Q('Việc không quan trọng?', ['Làm sau hoặc bỏ','Làm trước','Cãi','Khóc'], 0, 'Để sau hoặc bỏ.'),
    Q('Để dùng thời gian tốt em?', ['Có lịch và làm theo','Tuỳ hứng','Bỏ qua','Không lập'], 0, 'Lịch và thực hiện theo.'),
  ]),

  M(5, 'Làm việc nhóm', [
    Q('Làm việc nhóm cần?', ['Hợp tác, phân công','Mỗi người một ý','Cãi','Bỏ nhóm'], 0, 'Hợp tác và phân công.'),
    Q('Khi có ý kiến khác?', ['Lắng nghe và thảo luận','Cãi','Hét','Bỏ nhóm'], 0, 'Lắng nghe và thảo luận.'),
    Q('Trưởng nhóm nên?', ['Lắng nghe và dẫn dắt','Áp đặt','Quát','Bỏ mặc'], 0, 'Lắng nghe và dẫn dắt.'),
    Q('Thành viên nhóm nên?', ['Đóng góp tích cực, tôn trọng','Ngồi không','Cãi','Phá'], 0, 'Đóng góp và tôn trọng.'),
  ]),

  M(6, 'Tổ chức sinh nhật bạn', [
    Q('Sinh nhật bạn em nên?', ['Tặng quà, lời chúc chân thành','Quên','Trêu','Bỏ qua'], 0, 'Tặng quà và lời chúc.'),
    Q('Quà sinh nhật?', ['Phù hợp, ý nghĩa','Đắt nhất','Không quà','Quà cũ'], 0, 'Phù hợp và ý nghĩa.'),
    Q('Khi tổ chức tiệc?', ['Mời bạn, chuẩn bị chu đáo','Bỏ mặc','Tuỳ ý','Cãi nhau'], 0, 'Chu đáo trong tổ chức.'),
    Q('Sau tiệc?', ['Dọn dẹp gọn gàng','Bỏ bừa','Vứt','Phá'], 0, 'Dọn dẹp sau tiệc.'),
  ]),

  M(7, 'Dã ngoại an toàn', [
    Q('Trước khi đi dã ngoại?', ['Chuẩn bị đồ dùng, kế hoạch','Đi ngay','Không chuẩn bị','Bỏ qua'], 0, 'Chuẩn bị đầy đủ.'),
    Q('Khi đi em phải?', ['Theo đoàn, không tách riêng','Tự đi','Bỏ đoàn','Lạc lung tung'], 0, 'Theo đoàn để an toàn.'),
    Q('Bị lạc em nên?', ['Đứng yên, gọi điện người lớn','Chạy lung tung','Khóc thầm','Bỏ vào rừng'], 0, 'Đứng yên và gọi điện.'),
    Q('Khi gặp động vật lạ?', ['Tránh xa, báo người lớn','Sờ','Trêu','Bắt'], 0, 'Tránh xa và báo người lớn.'),
  ]),

  M(8, 'Các nghề trong cộng đồng', [
    Q('Nghề trong cộng đồng gồm?', ['Bác sĩ, giáo viên, thợ, nông dân, công an…','Chỉ bác sĩ','Chỉ giáo viên','Không có'], 0, 'Rất nhiều nghề trong cộng đồng.'),
    Q('Nghề nào cũng?', ['Đáng quý, có ích cho xã hội','Tệ','Vô ích','Không cần'], 0, 'Mọi nghề đều đáng quý.'),
    Q('Em yêu nghề nào?', ['Tự chọn theo sở thích','Cha mẹ chọn','Cô chọn','Bạn chọn'], 0, 'Tự chọn theo sở thích.'),
    Q('Để làm nghề em cần?', ['Học tập tốt, rèn kĩ năng','Bỏ học','Lười','Cãi'], 0, 'Học và rèn kĩ năng.'),
  ]),

  M(9, 'Tham gia Đội Thiếu niên Tiền phong', [
    Q('Đội TNTP HCM là?', ['Tổ chức của thiếu niên Việt Nam','Câu lạc bộ thể thao','Công ty','Trường học'], 0, 'Đội TNTP Hồ Chí Minh.'),
    Q('Khăn quàng đỏ của đội viên?', ['Một phần lá cờ Tổ quốc','Đồ trang trí','Không quan trọng','Khăn thường'], 0, 'Một phần lá cờ Tổ quốc.'),
    Q('Ngày thành lập Đội?', ['15/5/1941','2/9','19/5','22/12'], 0, 'Đội thành lập 15/5/1941.'),
    Q('Đội viên cần?', ['Học giỏi, hành tốt, gương mẫu','Lười','Cãi','Bỏ học'], 0, 'Học giỏi và gương mẫu.'),
  ]),

  M(10, 'Ngày Quốc khánh 2/9', [
    Q('Ngày Quốc khánh là?', ['2/9','30/4','1/5','20/11'], 0, '2/9 là Quốc khánh.'),
    Q('Sự kiện 2/9/1945?', ['Bác Hồ đọc Tuyên ngôn Độc lập','Giải phóng miền Nam','Ngày sinh Bác','Ngày Nhà giáo'], 0, 'Bác Hồ đọc Tuyên ngôn Độc lập.'),
    Q('Tuyên ngôn Độc lập đọc tại?', ['Quảng trường Ba Đình, Hà Nội','TP.HCM','Huế','Đà Nẵng'], 0, 'Quảng trường Ba Đình.'),
    Q('Ngày này em nên?', ['Treo cờ, tự hào về dân tộc','Quên','Không treo','Cãi'], 0, 'Treo cờ và tự hào dân tộc.'),
  ]),

  M(11, 'Ngày Nhà giáo Việt Nam 20/11', [
    Q('20/11 là?', ['Ngày Nhà giáo Việt Nam','Ngày Quốc khánh','Ngày Phụ nữ','Ngày Trẻ em'], 0, '20/11 - Ngày Nhà giáo VN.'),
    Q('Việc làm tri ân thầy cô?', ['Tặng hoa, chúc mừng, học tốt','Quên','Trêu cô','Bỏ học'], 0, 'Tặng hoa và học tốt.'),
    Q('Lời chúc thầy cô?', ['"Chúc thầy cô mạnh khoẻ, hạnh phúc"','"Thầy cô vất vả quá"','"Không thích cô"','"Bỏ học"'], 0, 'Lời chúc chân thành.'),
    Q('Quà ý nghĩa nhất?', ['Học tốt, ngoan ngoãn','Quà đắt','Hoa to nhất','Quà lạ'], 0, 'Học tốt và ngoan là món quà tốt nhất.'),
  ]),

  M(12, 'Ngày Quân đội Nhân dân 22/12', [
    Q('22/12 là?', ['Ngày thành lập Quân đội Nhân dân VN','Ngày Phụ nữ','Ngày Nhà giáo','Ngày Trẻ em'], 0, '22/12 là Ngày QĐND VN.'),
    Q('Quân đội VN có vai trò?', ['Bảo vệ Tổ quốc','Buôn bán','Du lịch','Trang trí'], 0, 'Bảo vệ Tổ quốc.'),
    Q('Em tri ân các chú bộ đội?', ['Viết thư, hát, học tốt','Quên','Không quan tâm','Cãi'], 0, 'Tri ân qua hành động cụ thể.'),
    Q('Hình tượng chú bộ đội?', ['Áo xanh, mũ cối, dũng cảm','Áo trắng','Áo đỏ','Không có'], 0, 'Áo xanh và mũ cối là hình ảnh quen thuộc.'),
  ]),

  M(13, 'Kỹ năng tự bảo vệ - Phòng tránh đuối nước', [
    Q('Đuối nước có thể xảy ra ở?', ['Ao hồ sông biển bể bơi','Trên cạn','Trên cây','Trên mây'], 0, 'Nơi có nước đều có nguy cơ.'),
    Q('Trước khi xuống nước?', ['Khởi động, có người lớn','Xuống ngay','Ăn no','Một mình'], 0, 'Khởi động và có người lớn.'),
    Q('Khi thấy người đuối nước?', ['Gọi người lớn, ném phao/cây dài','Nhảy xuống cứu','Bỏ chạy','Cười'], 0, 'Gọi người lớn, không tự nhảy xuống.'),
    Q('Em nên học?', ['Bơi để tự bảo vệ','Không học','Sợ nước','Tránh nước'], 0, 'Học bơi là kỹ năng sống.'),
  ]),

  M(14, 'Kỹ năng tự bảo vệ - Phòng cháy', [
    Q('Khi có cháy em?', ['Thoát ra, gọi 114','Cứu đồ trước','Trốn dưới gầm','Mở cửa sổ'], 0, 'Thoát ra và gọi 114.'),
    Q('Khói nhiều em nên?', ['Cúi thấp, lấy khăn ướt che mũi miệng','Đứng thẳng','Chạy nhanh đứng','Ngồi yên'], 0, 'Cúi thấp và che mũi miệng.'),
    Q('Số điện thoại cứu hoả?', ['114','113','115','112'], 0, '114 là cứu hoả.'),
    Q('Trong nhà em nên?', ['Không nghịch lửa, để bật lửa xa tầm tay','Nghịch lửa','Để bật lửa nơi dễ lấy','Đốt rác trong nhà'], 0, 'Không nghịch lửa.'),
  ]),

  M(15, 'Kỹ năng tự bảo vệ - Người lạ', [
    Q('Khi người lạ rủ đi?', ['Từ chối, báo người lớn','Đi theo','Im','Sợ'], 0, 'Tuyệt đối không đi theo.'),
    Q('Khi bị quấy rối?', ['Hô to và bỏ chạy, kể với cha mẹ','Im lặng','Chịu đựng','Tự xử lý'], 0, 'Hô to và kể với cha mẹ.'),
    Q('Không cho người lạ biết?', ['Địa chỉ, số điện thoại, ảnh','Lời chào','Tên trường','Hình emoji'], 0, 'Không cho thông tin cá nhân.'),
    Q('Khi có người lạ vào nhà?', ['Không mở cửa khi 1 mình','Mở luôn','Mời vào','Đưa đồ'], 0, 'Không mở cửa khi 1 mình.'),
  ]),

  M(16, 'Tham gia hoạt động cộng đồng', [
    Q('Hoạt động cộng đồng là?', ['Việc làm vì lợi ích chung của khu phố/xã','Việc cá nhân','Vô ích','Mệt'], 0, 'Vì lợi ích chung.'),
    Q('Ví dụ hoạt động?', ['Dọn vệ sinh, trồng cây, ủng hộ','Bỏ rác','Phá cây','Cãi'], 0, 'Dọn vệ sinh, trồng cây.'),
    Q('Tham gia em được?', ['Yêu thương cộng đồng, bạn mới','Mệt','Buồn','Mất gì'], 0, 'Yêu cộng đồng và có bạn mới.'),
    Q('Khi cộng đồng có người khó khăn?', ['Chia sẻ, ủng hộ','Bỏ mặc','Cười','Khinh thường'], 0, 'Chia sẻ và ủng hộ.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('HK1 em đã trải nghiệm?', ['Tự lập, kế hoạch, làm việc nhóm, kỹ năng tự vệ','Chỉ chơi','Chỉ học','Không gì'], 0, 'Nhiều trải nghiệm bổ ích.'),
    Q('Lập kế hoạch quan trọng vì?', ['Sống hiệu quả','Mất thời gian','Vô ích','Mệt'], 0, 'Giúp sống hiệu quả.'),
    Q('Kỹ năng tự bảo vệ?', ['Cứu mạng và an toàn','Vô ích','Mệt','Không cần'], 0, 'Cứu mạng và an toàn.'),
    Q('Em đã trưởng thành hơn?', ['Tự lập và có trách nhiệm','Không thay đổi','Tệ hơn','Quên hết'], 0, 'Tự lập và có trách nhiệm hơn.'),
  ]),

  M(18, 'Tổng kết HK1', [
    Q('Tự đánh giá em?', ['Trung thực, công bằng','Khoe','Chê','Bỏ qua'], 0, 'Trung thực và công bằng.'),
    Q('Điều em làm tốt?', ['Ghi nhận và phát huy','Quên','Khoe','Im'], 0, 'Phát huy điểm tốt.'),
    Q('Điều cần cải thiện?', ['Lập kế hoạch sửa đổi','Bỏ qua','Cãi','Khóc'], 0, 'Lập kế hoạch cải thiện.'),
    Q('Mục tiêu HK2?', ['Đặt rõ ràng và thực hiện','Tuỳ ý','Bỏ qua','Cãi'], 0, 'Đặt mục tiêu rõ ràng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Mừng Tết - Truyền thống gia đình', [
    Q('Tết là dịp?', ['Sum họp gia đình, tri ân tổ tiên','Cãi nhau','Đi chơi xa nhà','Bỏ nhà'], 0, 'Sum họp và tri ân.'),
    Q('Em giúp gia đình?', ['Dọn nhà, gói bánh, chúc Tết','Đi chơi','Cãi','Bỏ mặc'], 0, 'Cùng tham gia chuẩn bị Tết.'),
    Q('Khi nhận lì xì em?', ['Cảm ơn và chúc lại','Mở đếm ngay','Chê ít','Im'], 0, 'Cảm ơn và chúc lại.'),
    Q('Truyền thống Tết đẹp?', ['Cúng tổ tiên, chúc Tết, lì xì','Cãi nhau','Đốt pháo lậu','Nhậu say'], 0, 'Truyền thống đẹp.'),
  ]),

  M(20, 'Em yêu lao động trong gia đình', [
    Q('Việc nhà em có thể làm?', ['Quét, lau, rửa bát, cắm cơm','Không làm','Chỉ chơi','Bỏ mặc'], 0, 'Nhiều việc phù hợp.'),
    Q('Làm việc nhà em?', ['Đỡ đần cha mẹ, biết quý sức lao động','Mệt vô ích','Mất thời gian','Bị mắng'], 0, 'Đỡ đần cha mẹ.'),
    Q('Khi mẹ mệt?', ['Tự giác làm thêm việc nhà','Đợi mẹ nhắc','Cãi','Bỏ chơi'], 0, 'Tự giác làm thêm.'),
    Q('Làm việc nhà giúp em?', ['Tự lập, có kỹ năng sống','Vô ích','Mất bạn','Buồn'], 0, 'Tự lập và có kỹ năng.'),
  ]),

  M(21, 'Ngày Quốc tế Phụ nữ 8/3', [
    Q('8/3 là?', ['Ngày Quốc tế Phụ nữ','Ngày Quốc khánh','Ngày Trẻ em','Ngày Nhà giáo'], 0, '8/3 là Ngày Quốc tế Phụ nữ.'),
    Q('Em chúc mẹ, cô, bà 8/3?', ['Lời chúc và quà ý nghĩa','Quên','Trêu','Bỏ qua'], 0, 'Lời chúc chân thành.'),
    Q('Quà ý nghĩa cho mẹ?', ['Thiệp tự làm, giúp việc nhà','Quà đắt','Hoa hồng héo','Không quà'], 0, 'Tự làm và giúp việc nhà.'),
    Q('Tôn trọng phụ nữ là?', ['Lễ phép, giúp đỡ, không trêu','Trêu','Bắt nạt','Khinh thường'], 0, 'Lễ phép và giúp đỡ.'),
  ]),

  M(22, 'Bảo vệ môi trường - Hành động cộng đồng', [
    Q('Hành động bảo vệ môi trường?', ['Trồng cây, dọn rác, tiết kiệm','Đốt rừng','Xả rác','Phá cây'], 0, 'Hành động tích cực.'),
    Q('Trong cộng đồng em có thể?', ['Tham gia ngày Chủ nhật xanh','Bỏ qua','Cãi','Phá'], 0, 'Tham gia Chủ nhật xanh.'),
    Q('Phân loại rác giúp?', ['Tái chế và giảm ô nhiễm','Mất thời gian','Vô ích','Tốn'], 0, 'Tái chế và giảm ô nhiễm.'),
    Q('Em là?', ['Sứ giả môi trường tại trường, nhà','Người vô can','Người gây ô nhiễm','Không quan tâm'], 0, 'Sứ giả môi trường.'),
  ]),

  M(23, 'Kỹ năng giao tiếp', [
    Q('Giao tiếp tốt cần?', ['Lắng nghe và nói rõ ràng','Hét','Im','Chen ngang'], 0, 'Lắng nghe và nói rõ.'),
    Q('Khi người khác nói em?', ['Lắng nghe, không ngắt lời','Ngắt lời','Cười','Bỏ đi'], 0, 'Lắng nghe không ngắt lời.'),
    Q('Khi không đồng ý?', ['Nói lịch sự, không gay gắt','Hét','Cãi gay gắt','Im rồi giận'], 0, 'Lịch sự và bình tĩnh.'),
    Q('Lời nói em nên?', ['Lịch sự, chân thành','Thô lỗ','Lừa dối','Khoe'], 0, 'Lịch sự và chân thành.'),
  ]),

  M(24, 'Quản lý cảm xúc', [
    Q('Khi tức giận em?', ['Hít sâu, đếm 1-10','Đập đồ','Hét','Đánh người'], 0, 'Hít sâu và bình tĩnh.'),
    Q('Khi buồn em?', ['Chia sẻ với người tin tưởng','Giữ trong lòng','Khóc một mình','Đập đồ'], 0, 'Chia sẻ là cách hay.'),
    Q('Cảm xúc tích cực?', ['Vui, hy vọng, biết ơn','Tức giận','Sợ hãi','Buồn'], 0, 'Cảm xúc tích cực giúp em khoẻ.'),
    Q('Khi vui em nên?', ['Chia sẻ niềm vui','Khoe quá độ','Cười phá lên','Im'], 0, 'Chia sẻ niềm vui.'),
  ]),

  M(25, 'Tổ chức tham quan, dã ngoại lớp', [
    Q('Khi đi dã ngoại em mang?', ['Đồ cần thiết, không quá nặng','Tất cả đồ','Không mang gì','Đồ chơi điện tử'], 0, 'Đồ cần thiết và gọn nhẹ.'),
    Q('Đến nơi em nên?', ['Theo nhóm, nghe cô hướng dẫn','Tự đi riêng','Lén ra','Cãi'], 0, 'Theo nhóm và nghe cô.'),
    Q('Trong rừng/núi em nên?', ['Không bẻ cành, hái hoa','Hái thoải mái','Bẻ cây','Đốt rác'], 0, 'Bảo vệ thiên nhiên.'),
    Q('Sau dã ngoại em?', ['Mang rác về, giữ sạch','Bỏ rác tại chỗ','Đốt','Để bừa'], 0, 'Mang rác về bỏ đúng nơi.'),
  ]),

  M(26, 'Ngày Giải phóng miền Nam 30/4 và 1/5', [
    Q('30/4 là?', ['Ngày Giải phóng miền Nam, thống nhất đất nước','Quốc khánh','8/3','20/11'], 0, '30/4 là ngày thống nhất.'),
    Q('1/5 là?', ['Ngày Quốc tế Lao động','Tết','Quốc khánh','Ngày trẻ em'], 0, '1/5 là Quốc tế Lao động.'),
    Q('Em nên?', ['Tri ân các thế hệ đi trước','Quên','Không quan tâm','Cãi'], 0, 'Tri ân thế hệ đi trước.'),
    Q('Ý nghĩa 30/4?', ['Đất nước thống nhất, hoà bình','Mất nước','Chiến tranh','Không có gì'], 0, 'Đất nước thống nhất và hoà bình.'),
  ]),

  M(27, 'Ngày Quốc tế Thiếu nhi 1/6', [
    Q('1/6 là?', ['Ngày Quốc tế Thiếu nhi','Tết','Quốc khánh','20/11'], 0, '1/6 là Ngày Trẻ em.'),
    Q('Quyền trẻ em?', ['Học, chơi, bảo vệ, phát triển','Bắt nạt','Bỏ học','Không quyền'], 0, 'Trẻ em có nhiều quyền cơ bản.'),
    Q('Em nên?', ['Trân trọng và biết bổn phận','Đòi hỏi','Lười','Cãi'], 0, 'Trân trọng quyền và biết bổn phận.'),
    Q('Trong ngày 1/6 em?', ['Tham gia sinh hoạt cộng đồng vui khoẻ','Bỏ mặc','Cãi','Buồn'], 0, 'Sinh hoạt cộng đồng vui khoẻ.'),
  ]),

  M(28, 'Hướng nghiệp - Em mơ làm gì?', [
    Q('Hướng nghiệp là?', ['Tìm hiểu nghề và định hướng','Không quan trọng','Vô ích','Mất thời gian'], 0, 'Tìm hiểu nghề.'),
    Q('Để làm nghề em mơ ước?', ['Học tốt, rèn kỹ năng','Bỏ học','Lười','Cãi'], 0, 'Học và rèn kỹ năng.'),
    Q('Khi chưa biết mơ gì?', ['Tìm hiểu, trải nghiệm dần','Bỏ qua','Cãi','Khóc'], 0, 'Tìm hiểu dần.'),
    Q('Mỗi nghề đều?', ['Đáng quý và cần xã hội','Tệ','Vô ích','Không cần'], 0, 'Đáng quý và cần thiết.'),
  ]),

  M(29, 'Hoạt động Đội cuối cấp', [
    Q('Đội viên cuối cấp nên?', ['Gương mẫu, dẫn dắt em lớp dưới','Bắt nạt','Lười','Cãi'], 0, 'Gương mẫu và dẫn dắt.'),
    Q('Sinh hoạt Đội cuối tuần?', ['Tham gia tích cực','Trốn','Lười','Bỏ về'], 0, 'Tham gia tích cực.'),
    Q('Khăn quàng đỏ em?', ['Giữ sạch, đeo đúng cách','Bỏ','Vứt','Bẩn'], 0, 'Giữ sạch và đeo đúng.'),
    Q('Lời hứa đội viên?', ['Cố gắng học tập, rèn luyện','Bỏ','Lười','Cãi'], 0, 'Cố gắng học và rèn luyện.'),
  ]),

  M(30, 'Chuẩn bị lên cấp 2', [
    Q('Cấp 2 khác cấp 1?', ['Nhiều môn, nhiều thầy cô, tự lập hơn','Y như cấp 1','Chỉ chơi','Bỏ học'], 0, 'Nhiều môn và tự lập hơn.'),
    Q('Em cần chuẩn bị?', ['Kiến thức nền và kỹ năng tự học','Không cần','Lười','Cãi'], 0, 'Kiến thức và kỹ năng tự học.'),
    Q('Lo lắng lên cấp 2?', ['Bình thường, vượt qua bằng nỗ lực','Bỏ học','Khóc','Cãi'], 0, 'Tự tin vượt qua.'),
    Q('Bạn mới cấp 2 em?', ['Làm quen, thân thiện','Tẩy chay','Trêu','Bỏ mặc'], 0, 'Làm quen thân thiện.'),
  ]),

  M(31, 'Tạm biệt cấp 1 - Tri ân thầy cô', [
    Q('Tri ân thầy cô tiểu học?', ['Lời cảm ơn, học tốt mãi','Quên','Cãi','Bỏ qua'], 0, 'Lời cảm ơn và học tốt.'),
    Q('Lễ ra trường em?', ['Tham gia trang trọng, ghi nhớ','Trốn','Phá','Bỏ về'], 0, 'Trang trọng và ghi nhớ.'),
    Q('Kỉ vật cấp 1?', ['Lưu giữ và trân trọng','Vứt','Phá','Bỏ qua'], 0, 'Lưu giữ kỉ vật.'),
    Q('Lời tạm biệt thầy cô?', ['Chân thành và cảm ơn','Trêu','Im','Bỏ'], 0, 'Chân thành và cảm ơn.'),
  ]),

  M(32, 'Tạm biệt bạn bè cấp 1', [
    Q('Bạn cấp 1 sau này?', ['Vẫn giữ liên lạc, là kỉ niệm đẹp','Quên','Tránh','Cãi'], 0, 'Giữ liên lạc và kỉ niệm đẹp.'),
    Q('Khi bạn lên trường khác?', ['Chúc và giữ liên lạc','Tuyệt giao','Buồn','Cãi'], 0, 'Chúc và giữ liên lạc.'),
    Q('Lưu bút em?', ['Viết lời chân thành','Trêu','Cãi','Bỏ trắng'], 0, 'Lời chân thành trong lưu bút.'),
    Q('Tình bạn cấp 1?', ['Kỉ niệm đẹp một thời thơ ấu','Vô nghĩa','Buồn','Quên'], 0, 'Kỉ niệm đẹp thời thơ ấu.'),
  ]),

  M(33, 'Tổng kết - Em đã trưởng thành', [
    Q('Sau 5 năm tiểu học em?', ['Có kiến thức và kỹ năng','Không thay đổi','Tệ hơn','Quên'], 0, 'Có kiến thức và kỹ năng.'),
    Q('Em biết ơn?', ['Cha mẹ, thầy cô, bạn bè','Không ai','Chỉ mình','Quên'], 0, 'Cha mẹ, thầy cô, bạn bè.'),
    Q('Tự đánh giá bản thân?', ['Trung thực, công bằng','Khoe','Chê','Tự ti'], 0, 'Trung thực và công bằng.'),
    Q('Trưởng thành nghĩa là?', ['Tự lập, có trách nhiệm','Lớn xác','Khoe khoang','Bắt nạt'], 0, 'Tự lập và có trách nhiệm.'),
  ]),

  M(34, 'Hành trang lên cấp 2', [
    Q('Hành trang cấp 2 gồm?', ['Kiến thức, kỹ năng, đạo đức','Chỉ sách vở','Chỉ tiền','Không gì'], 0, 'Kiến thức, kỹ năng, đạo đức.'),
    Q('Kỹ năng cần?', ['Tự học, làm việc nhóm, giao tiếp','Chỉ chơi','Chỉ học vẹt','Không cần'], 0, 'Nhiều kỹ năng cần thiết.'),
    Q('Đạo đức cần?', ['Trung thực, biết ơn, trách nhiệm','Lười','Cãi','Bắt nạt'], 0, 'Đức tính tốt.'),
    Q('Tinh thần lên cấp 2?', ['Tự tin và sẵn sàng','Lo lắng','Sợ','Bỏ học'], 0, 'Tự tin và sẵn sàng.'),
  ]),

  M(35, 'Bế giảng - Bước vào cấp 2', [
    Q('Lễ bế giảng em?', ['Tham gia trang trọng','Trốn','Phá','Bỏ về'], 0, 'Trang trọng và đầy đủ.'),
    Q('Cảm xúc bế giảng?', ['Bồi hồi, vui mừng và tự hào','Buồn chán','Tức giận','Vô cảm'], 0, 'Bồi hồi và tự hào.'),
    Q('Lời hứa với thầy cô?', ['Học tốt ở cấp 2','Bỏ học','Lười','Quên'], 0, 'Hứa học tốt cấp 2.'),
    Q('Bước vào cấp 2 em?', ['Tự tin, mang theo những gì đã học','Lo sợ','Bỏ học','Khóc'], 0, 'Tự tin và áp dụng những gì đã học.'),
  ]),
];

export const P5HDTN_SCENARIOS = indexBy(P5HDTN_WEEKS);
