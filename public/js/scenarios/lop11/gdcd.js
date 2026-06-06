// ============================================================
// Lớp 11 · GDCD (GDCD/KTPL — GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT)
// 35 tuần (HK1: 1–18 · HK2: 19–35) — bộ Kết nối tri thức.
// Phần 1 (1–18): Giáo dục KINH TẾ; Phần 2 (19–35): Giáo dục PHÁP LUẬT.
// ID prefix: "H11GDCD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11GDCD', 'gdcd', n, title, qs, opts);

export const H11GDCD_WEEKS = [
  // ──────────────── HK1 — GIÁO DỤC KINH TẾ ────────────────
  M(1, 'Bài 1 (GDCD/KTPL) — Cạnh tranh trong nền kinh tế thị trường', [
    Q('Cạnh tranh trong nền kinh tế thị trường là?', ['Sự phân chia thị trường theo mệnh lệnh hành chính', 'Sự độc quyền của nhà nước', 'Sự ganh đua giữa các chủ thể kinh tế nhằm giành lợi thế trong sản xuất, tiêu thụ', 'Sự hợp tác toàn diện không tính lợi nhuận'], 2, 'Cạnh tranh là ganh đua kinh tế.'),
    Q('Mục đích chính của cạnh tranh?', ['Giành điều kiện thuận lợi nhằm thu lợi nhuận cao hơn', 'Hợp tác từ thiện', 'Bảo vệ chế độ phong kiến', 'Tăng thuế cho nhà nước'], 0, 'Vì lợi nhuận.'),
    Q('Vai trò tích cực của cạnh tranh?', ['Triệt tiêu mọi doanh nghiệp', 'Làm giàu cho riêng nhà nước', 'Phá hoại thị trường', 'Thúc đẩy sản xuất phát triển, nâng cao chất lượng và hạ giá thành'], 3, 'Động lực phát triển KT thị trường.'),
    Q('Mặt trái của cạnh tranh KHÔNG lành mạnh?', ['Tăng năng suất lao động', 'Hàng giả, hàng nhái, gian lận, độc quyền câu kết', 'Đổi mới công nghệ', 'Hạ giá thành sản phẩm'], 1, 'Cạnh tranh không lành mạnh.'),
    Q('Cạnh tranh lành mạnh dựa trên?', ['Gian lận thương mại', 'Bôi nhọ đối thủ', 'Trốn thuế', 'Đổi mới công nghệ, chất lượng, dịch vụ và tuân thủ pháp luật'], 3, 'Cạnh tranh hợp pháp.'),
    Q('Nhà nước có vai trò gì đối với cạnh tranh?', ['Cấm mọi hình thức cạnh tranh', 'Bỏ mặc thị trường', 'Thiết lập độc quyền tuyệt đối', 'Tạo môi trường cạnh tranh lành mạnh và xử lý vi phạm'], 3, 'Quản lý + bảo vệ cạnh tranh lành mạnh.'),
  ]),

  M(2, 'Bài 1 (tt) — Cạnh tranh: nhận biết và xử lý hành vi vi phạm', [
    Q('Doanh nghiệp A bí mật câu kết với B để định giá là hình thức?', ['Cạnh tranh không lành mạnh – thoả thuận hạn chế cạnh tranh', 'Cạnh tranh lành mạnh', 'Khuyến mãi hợp pháp', 'Tự do kinh doanh'], 0, 'Thoả thuận hạn chế cạnh tranh – cấm.'),
    Q('Hành vi nào sau đây là cạnh tranh không lành mạnh?', ['Cải tiến dịch vụ chăm sóc khách hàng', 'Quảng cáo gian dối, nói xấu đối thủ', 'Đầu tư R&D đổi mới sản phẩm', 'Giảm giá nhờ tiết kiệm chi phí'], 1, 'Gian dối, nói xấu là vi phạm.'),
    Q('Hậu quả của cạnh tranh không lành mạnh?', ['Không ảnh hưởng đến ai', 'Gây thiệt hại cho người tiêu dùng và doanh nghiệp chân chính', 'Có lợi cho người tiêu dùng', 'Phát triển kinh tế'], 1, 'Tác hại nhiều bên.'),
    Q('Khi phát hiện hành vi cạnh tranh không lành mạnh, công dân nên?', ['Hùa theo', 'Thông báo cho cơ quan có thẩm quyền hoặc khiếu nại theo PL', 'Bỏ mặc', 'Tự xử lý bằng vũ lực'], 1, 'Phản ánh đúng PL.'),
    Q('Luật điều chỉnh trực tiếp vấn đề cạnh tranh ở VN?', ['Luật Cạnh tranh', 'Luật Hình sự', 'Luật Đất đai', 'Luật Hôn nhân và gia đình'], 0, 'Luật Cạnh tranh 2018.'),
    Q('Ý thức trách nhiệm của học sinh với cạnh tranh lành mạnh?', ['Tiêu dùng hàng giả', 'Không quan tâm', 'Cổ vũ gian lận', 'Học tập, tiêu dùng thông minh, ủng hộ hàng chính hãng'], 3, 'Tiêu dùng có trách nhiệm.'),
  ]),

  M(3, 'Bài 2 — Cung – cầu trong nền kinh tế thị trường', [
    Q('Cầu là?', ['Số lượng hàng hoá nhà sản xuất bán ra', 'Tổng dân số', 'Khối lượng hàng hoá, dịch vụ mà người tiêu dùng sẵn sàng và có khả năng mua trong một thời gian nhất định', 'Toàn bộ nhu cầu mong muốn dù không có khả năng chi trả'], 2, 'Cầu = mong muốn + khả năng chi trả.'),
    Q('Cung là?', ['Toàn bộ hàng tồn kho không bán', 'Tổng nhu cầu xã hội', 'Mức lương trung bình', 'Khối lượng hàng hoá, dịch vụ mà người sản xuất sẵn sàng đưa ra thị trường'], 3, 'Cung từ phía sản xuất.'),
    Q('Khi cầu tăng và cung không đổi thì giá có xu hướng?', ['Không đổi', 'Bằng 0', 'Tăng', 'Giảm'], 2, 'Quy luật cung – cầu.'),
    Q('Khi cung tăng và cầu không đổi thì giá có xu hướng?', ['Giảm', 'Tăng', 'Không đổi', 'Tăng đột biến vô hạn'], 0, 'Cung tăng → giá giảm.'),
    Q('Quan hệ cung – cầu ảnh hưởng đến?', ['Chỉ ảnh hưởng tới khí hậu', 'Giá cả thị trường và quyết định sản xuất, tiêu dùng', 'Chỉ ảnh hưởng đến chính sách quân sự', 'Không ảnh hưởng kinh tế'], 1, 'Quyết định kinh tế.'),
    Q('Vận dụng quy luật cung – cầu, người sản xuất nên?', ['Sản xuất tuỳ tiện', 'Mở rộng sản xuất khi cầu lớn hơn cung và giá tăng', 'Thu hẹp sản xuất khi giá tăng', 'Không cần quan sát thị trường'], 1, 'Sản xuất theo tín hiệu giá.'),
  ]),

  M(4, 'Bài 2 (tt) — Vận dụng quan hệ cung – cầu', [
    Q('Khi giá xăng tăng cao, người tiêu dùng có xu hướng?', ['Tăng tiêu dùng xăng', 'Không phản ứng', 'Bỏ phương tiện hoàn toàn ngay lập tức', 'Giảm sử dụng xăng, tìm phương tiện thay thế'], 3, 'Cầu giảm khi giá tăng.'),
    Q('Nhà nước can thiệp cung – cầu bằng?', ['Cấm mọi giao dịch', 'Đóng cửa thị trường', 'Chính sách giá, thuế, dự trữ quốc gia', 'Bỏ mặc thị trường tuyệt đối'], 2, 'Vai trò điều tiết.'),
    Q('Vào dịp Tết, cầu thực phẩm tăng — nhà sản xuất nên?', ['Tăng cung và đảm bảo chất lượng, giá hợp lý', 'Giữ nguyên sản lượng', 'Giảm sản lượng', 'Bỏ sản xuất'], 0, 'Tăng cung đáp ứng cầu.'),
    Q('Hiện tượng "khan hàng – tăng giá đột biến" cho thấy?', ['Thị trường cân bằng', 'Cung nhỏ hơn cầu', 'Cung lớn hơn cầu', 'Cung = cầu'], 1, 'Cung < Cầu.'),
    Q('Khi dịch bệnh khiến cầu khẩu trang tăng vọt, biện pháp nào hợp lý?', ['Doanh nghiệp ép giá vô tội vạ', 'Không làm gì cả', 'Cấm bán khẩu trang', 'Nhà nước tăng dự trữ, doanh nghiệp tăng sản xuất, kiểm soát giá'], 3, 'Phối hợp NN + DN.'),
    Q('Học sinh cần làm gì khi tham gia thị trường với tư cách người tiêu dùng?', ['Tiêu dùng hợp lý, thông minh, có trách nhiệm', 'Mua sắm phung phí', 'Mua hàng không rõ nguồn gốc', 'Bỏ qua chất lượng'], 0, 'Tiêu dùng thông minh.'),
  ]),

  M(5, 'Bài 3 — Lạm phát', [
    Q('Lạm phát là?', ['Sự gia tăng mức giá chung của hàng hoá, dịch vụ trong một thời gian dài', 'Sự giảm giá hàng hoá liên tục', 'Sự tăng lương đồng đều', 'Sự ổn định giá tuyệt đối'], 0, 'Tăng mức giá chung kéo dài.'),
    Q('Lạm phát phi mã là?', ['Tỉ lệ lạm phát 2 hoặc 3 chữ số trong một năm', 'Tỉ lệ thấp ổn định', 'Giảm phát', 'Không có giá cả'], 0, '10–999%/năm.'),
    Q('Nguyên nhân chủ yếu của lạm phát?', ['Giá vàng thế giới ổn định', 'Năng suất tăng', 'Hàng hoá dư thừa', 'Cung tiền lớn hơn cầu hàng hoá; chi phí đẩy; cầu kéo'], 3, 'Cung tiền + chi phí đẩy + cầu kéo.'),
    Q('Hậu quả của lạm phát cao đối với người dân?', ['Giảm sức mua, đời sống khó khăn, nhất là người có thu nhập cố định', 'Tăng sức mua', 'Đời sống dễ chịu hơn', 'Không ảnh hưởng'], 0, 'Giảm thực thu nhập.'),
    Q('Để kiểm soát lạm phát, nhà nước có thể?', ['Không can thiệp', 'Tăng thuế hàng tiêu dùng vô tội vạ', 'Sử dụng chính sách tiền tệ và tài khoá phù hợp', 'In tiền vô hạn'], 2, 'CSTT + CSTK.'),
    Q('Lạm phát vừa phải (1 chữ số/năm) thường?', ['Là lạm phát siêu tốc', 'Phù hợp với phát triển kinh tế, là mục tiêu của nhiều quốc gia', 'Rất nguy hiểm', 'Phá vỡ kinh tế'], 1, 'Lạm phát vừa phải.'),
  ]),

  M(6, 'Bài 3 (tt) — Vận dụng kiến thức lạm phát', [
    Q('Khi xảy ra lạm phát cao, học sinh và gia đình nên?', ['Vay tiền không kiểm soát', 'Mua sắm tùy tiện', 'Bỏ học để đi làm tăng ca', 'Chi tiêu hợp lý, tiết kiệm, đầu tư khôn ngoan'], 3, 'Tiêu dùng có kế hoạch.'),
    Q('Ngân hàng trung ương kiểm soát lạm phát bằng?', ['Tự do in tiền không kiểm soát', 'Bỏ chính sách tiền tệ', 'Chỉ phát hành trái phiếu duy nhất', 'Tăng lãi suất, giảm cung tiền khi cần'], 3, 'Công cụ CSTT.'),
    Q('Vai trò của Nhà nước trong kiểm soát giá cả mặt hàng thiết yếu?', ['Bỏ mặc giá tuyệt đối', 'Cấm mua bán', 'In tiền tự do', 'Bình ổn giá điện, xăng, dầu, thực phẩm khi cần'], 3, 'Bình ổn giá.'),
    Q('Người gửi tiết kiệm chịu thiệt khi lạm phát?', ['Cao hơn lãi suất tiết kiệm', 'Thấp hơn lãi suất', 'Bằng lãi suất', 'Bằng 0'], 0, 'Lãi suất thực âm.'),
    Q('Doanh nghiệp ứng phó lạm phát bằng?', ['Tăng giá tuỳ tiện', 'Bỏ kinh doanh', 'Trốn thuế', 'Quản trị chi phí, tối ưu nguồn lực, đa dạng hoá'], 3, 'Quản trị chi phí.'),
    Q('Học sinh có thể đóng góp gì để góp phần ổn định kinh tế?', ['Tiêu xài lãng phí', 'Học tốt, lao động sáng tạo, tiêu dùng có trách nhiệm', 'Lười học', 'Không cần quan tâm kinh tế'], 1, 'Trách nhiệm thanh thiếu niên.'),
  ]),

  M(7, 'Bài 4 — Thất nghiệp', [
    Q('Thất nghiệp là?', ['Người về hưu', 'Tình trạng người trong độ tuổi lao động có khả năng và mong muốn làm việc nhưng không có việc làm', 'Người không có nhu cầu lao động', 'Trẻ em chưa đến tuổi lao động'], 1, 'Định nghĩa lao động.'),
    Q('Tỉ lệ thất nghiệp là?', ['Tổng số dân', 'Tổng số học sinh', 'Tỉ lệ người về hưu', 'Tỉ số người thất nghiệp trên tổng lực lượng lao động'], 3, 'Tỉ lệ thất nghiệp.'),
    Q('Thất nghiệp tự nguyện là?', ['Trẻ em chưa đi làm', 'Người lao động chủ động không nhận việc với mức lương hiện hành', 'Bị đuổi việc', 'Không có việc do thiên tai'], 1, 'Tự nguyện không làm.'),
    Q('Thất nghiệp cơ cấu xảy ra khi?', ['Doanh nghiệp tuyển dụng dễ dàng', 'Người lao động lười', 'Cơ cấu lao động không phù hợp cơ cấu kinh tế', 'Kinh tế tăng trưởng nóng'], 2, 'Lệch cơ cấu.'),
    Q('Hậu quả của thất nghiệp cao?', ['Giảm sản lượng, gia tăng tệ nạn xã hội, đời sống khó khăn', 'Tăng GDP', 'Ổn định xã hội', 'Không ảnh hưởng'], 0, 'Hậu quả KT-XH.'),
    Q('Để giảm thất nghiệp, nhà nước cần?', ['Đóng cửa thị trường lao động', 'Hạn chế giáo dục', 'Đào tạo nghề, tạo việc làm, hỗ trợ doanh nghiệp', 'Cấm tuyển dụng'], 2, 'Đào tạo + tạo việc làm.'),
  ]),

  M(8, 'Bài 4 (tt) — Vận dụng kiến thức thất nghiệp', [
    Q('Khi bị thất nghiệp, người lao động nên?', ['Đi vay nặng lãi', 'Học thêm kỹ năng, tìm việc mới, đăng ký hỗ trợ', 'Bỏ cuộc', 'Không cần tìm hiểu'], 1, 'Chủ động nâng cao kỹ năng.'),
    Q('Bảo hiểm thất nghiệp có vai trò?', ['Chỉ hỗ trợ người về hưu', 'Không có vai trò', 'Hỗ trợ tài chính tạm thời cho người mất việc', 'Hỗ trợ trẻ em'], 2, 'An sinh xã hội.'),
    Q('Trung tâm dịch vụ việc làm có chức năng?', ['Bán đất', 'Quản lý quân đội', 'Tư vấn, giới thiệu việc làm, đào tạo nghề', 'Cho vay tiền tuỳ tiện'], 2, 'Hỗ trợ tìm việc.'),
    Q('Yếu tố nào giúp giảm thất nghiệp cơ cấu?', ['Đào tạo lại nghề phù hợp với nhu cầu mới của nền kinh tế', 'Cấm chuyển đổi nghề', 'Bỏ giáo dục nghề', 'Phân công lại mệnh lệnh'], 0, 'Đào tạo lại.'),
    Q('Học sinh chuẩn bị gì để giảm nguy cơ thất nghiệp tương lai?', ['Không học ngoại ngữ', 'Không học CNTT', 'Học tốt, rèn kỹ năng mềm, kỹ năng số', 'Bỏ học'], 2, 'Kỹ năng + ngoại ngữ + số.'),
    Q('Trách nhiệm của công dân khi tham gia thị trường lao động?', ['Tuân thủ pháp luật, đóng BHXH, BHYT, BHTN', 'Trốn thuế', 'Trốn BHXH', 'Vi phạm hợp đồng'], 0, 'Trách nhiệm pháp lý.'),
  ]),

  M(9, 'Bài 5 — Thị trường lao động và việc làm', [
    Q('Thị trường lao động là?', ['Nơi mua bán đất đai', 'Nơi mua bán chứng khoán', 'Nơi tổ chức hôn nhân', 'Nơi diễn ra việc trao đổi sức lao động giữa người mua (DN) và người bán (NLĐ)'], 3, 'Mua bán sức lao động.'),
    Q('Yếu tố quyết định giá cả sức lao động (tiền lương)?', ['Quan hệ cung – cầu lao động và năng suất, trình độ', 'Mệnh lệnh hành chính tuyệt đối', 'May rủi', 'Quan hệ cá nhân'], 0, 'Cung – cầu + năng suất.'),
    Q('Việc làm là?', ['Mọi việc kể cả vi phạm pháp luật', 'Học tập', 'Vui chơi', 'Hoạt động lao động tạo thu nhập và không bị PL cấm'], 3, 'Hợp pháp + tạo thu nhập.'),
    Q('Xu hướng thị trường lao động hiện nay?', ['Bỏ yêu cầu trình độ', 'Đòi hỏi nhân lực chất lượng cao, kỹ năng số, ngoại ngữ', 'Chỉ cần lao động giản đơn', 'Giảm yêu cầu kỹ năng'], 1, 'Yêu cầu kỹ năng cao.'),
    Q('Cung lao động bao gồm?', ['Toàn bộ người lao động có nhu cầu làm việc', 'Toàn bộ học sinh', 'Toàn bộ dân số', 'Toàn bộ trẻ em'], 0, 'Người lao động sẵn sàng làm việc.'),
    Q('Cầu lao động đến từ?', ['Trẻ em', 'Chính phủ duy nhất', 'Các doanh nghiệp, cơ quan, tổ chức cần tuyển dụng', 'Trường học'], 2, 'Bên tuyển dụng.'),
  ]),

  M(10, 'Bài 5 (tt) — Định hướng nghề nghiệp', [
    Q('Để lựa chọn nghề phù hợp, học sinh cần?', ['Hiểu năng lực, sở thích bản thân và nhu cầu xã hội', 'Chọn ngẫu nhiên', 'Theo bạn bè', 'Theo cảm tính nhất thời'], 0, 'Hiểu mình + hiểu xã hội.'),
    Q('Một nguồn thông tin nghề nghiệp đáng tin cậy?', ['Quảng cáo phi pháp', 'Tự suy đoán', 'Trang web tuyển sinh chính thức và bộ phận hướng nghiệp', 'Tin đồn'], 2, 'Nguồn chính thống.'),
    Q('Pháp luật lao động Việt Nam bảo vệ?', ['Quyền và lợi ích hợp pháp của người lao động', 'Chỉ chủ doanh nghiệp', 'Chỉ nhà nước', 'Không bảo vệ ai'], 0, 'Quyền lao động.'),
    Q('Hợp đồng lao động cần có nội dung cơ bản?', ['Chỉ tên doanh nghiệp', 'Chỉ chữ ký', 'Công việc, mức lương, thời gian, quyền và nghĩa vụ', 'Mọi thứ tuỳ ý'], 2, 'Nội dung HĐLĐ.'),
    Q('Khi tham gia thị trường lao động, học sinh chú ý?', ['Đọc kỹ hợp đồng, đảm bảo hợp pháp, không vi phạm cam kết', 'Ký bừa', 'Trốn tránh trách nhiệm', 'Tham gia hoạt động phi pháp'], 0, 'Đọc kỹ HĐ.'),
    Q('Xu hướng việc làm cho lao động trẻ?', ['Không có ngành mới', 'Ngành công nghệ thông tin, dịch vụ, sáng tạo nội dung số', 'Chỉ nông nghiệp truyền thống', 'Chỉ thủ công lạc hậu'], 1, 'CNTT + dịch vụ.'),
  ]),

  M(11, 'Bài 6 — Ý tưởng, cơ hội kinh doanh và năng lực cần thiết của người kinh doanh', [
    Q('Ý tưởng kinh doanh là?', ['Bất kỳ suy nghĩ ngẫu nhiên nào', 'Quyết định tài chính cá nhân', 'Một bài tập về nhà', 'Suy nghĩ, sáng kiến mới về sản phẩm/dịch vụ có khả năng đem lại lợi nhuận'], 3, 'Sáng kiến KD.'),
    Q('Cơ hội kinh doanh là?', ['Vận may bất kỳ', 'Mệnh lệnh hành chính', 'Điều kiện thuận lợi để triển khai ý tưởng kinh doanh và thu lợi nhuận', 'Mọi thời điểm trong ngày'], 2, 'Hoàn cảnh thuận lợi để KD.'),
    Q('Năng lực cần thiết của người kinh doanh KHÔNG bao gồm?', ['Năng lực giao tiếp', 'Sự gian dối, vi phạm pháp luật', 'Năng lực chuyên môn', 'Năng lực quản lý'], 1, 'Gian dối là sai phạm.'),
    Q('Để có ý tưởng kinh doanh tốt cần?', ['Quan sát nhu cầu thị trường, học hỏi, sáng tạo', 'Sao chép mù quáng', 'Tuỳ tiện', 'Bỏ qua khách hàng'], 0, 'Quan sát + sáng tạo.'),
    Q('Người kinh doanh thành công cần?', ['Có đam mê, kiên trì, trách nhiệm và tuân thủ pháp luật', 'Liều lĩnh phi pháp', 'May mắn vô căn cứ', 'Lừa đảo khách hàng'], 0, 'Đam mê + đạo đức.'),
    Q('Học sinh THPT có thể làm gì để rèn năng lực kinh doanh?', ['Không cần học gì', 'Vay tiền lãi cao để thử', 'Tham gia CLB kinh doanh, dự án khởi nghiệp học sinh, học tài chính cá nhân', 'Bỏ học để kinh doanh ngay'], 2, 'Rèn từ sớm, học có hệ thống.'),
  ]),

  M(12, 'Bài 6 (tt) — Đánh giá cơ hội kinh doanh', [
    Q('Tiêu chí đánh giá một cơ hội kinh doanh tốt?', ['Phi pháp nhưng lời nhanh', 'Chỉ dựa cảm tính', 'Có nhu cầu thị trường, khả năng triển khai và sinh lợi nhuận', 'Không có thị trường nhưng vẫn làm'], 2, 'Thị trường + khả thi + lợi nhuận.'),
    Q('SWOT trong kinh doanh là?', ['Tên một công ty', 'Loại thuế', 'Tên một loại hợp đồng', 'Điểm mạnh – yếu – cơ hội – thách thức'], 3, 'Strengths-Weaknesses-Opportunities-Threats.'),
    Q('Rủi ro kinh doanh có thể đến từ?', ['Chỉ ngôn ngữ', 'Thị trường, công nghệ, tài chính, pháp lý', 'Không có rủi ro', 'Chỉ thời tiết'], 1, 'Rủi ro đa dạng.'),
    Q('Khởi nghiệp đổi mới sáng tạo là?', ['Mô hình kinh doanh dựa trên sản phẩm/dịch vụ có yếu tố sáng tạo và tiềm năng tăng trưởng nhanh', 'Buôn bán nhỏ truyền thống', 'Mở quán nước cố định', 'Bán hàng đa cấp trá hình'], 0, 'Startup đổi mới.'),
    Q('Nhà nước hỗ trợ khởi nghiệp đổi mới sáng tạo bằng?', ['Không có chính sách', 'Thu thuế cao bất thường', 'Quỹ hỗ trợ, cơ chế ưu đãi, vườn ươm', 'Cấm hoàn toàn'], 2, 'Chính sách hỗ trợ.'),
    Q('Người kinh doanh cần tuân thủ?', ['Chỉ lợi nhuận tối đa bằng mọi giá', 'Chỉ luật riêng của mình', 'Không cần đạo đức', 'Pháp luật, đạo đức kinh doanh, trách nhiệm xã hội'], 3, 'Pháp luật + đạo đức.'),
  ]),

  M(13, 'Bài 7 — Đạo đức kinh doanh', [
    Q('Đạo đức kinh doanh là?', ['Các chuẩn mực, nguyên tắc đạo đức điều chỉnh hành vi của chủ thể kinh doanh', 'Bộ quy tắc tuỳ ý', 'Tập quán lạc hậu', 'Không có ý nghĩa thực tiễn'], 0, 'Chuẩn mực đạo đức trong KD.'),
    Q('Biểu hiện của đạo đức kinh doanh?', ['Trốn thuế', 'Trung thực, tôn trọng khách hàng, đối tác, bảo vệ môi trường', 'Lừa dối khách hàng', 'Xả thải bừa bãi'], 1, 'Hành vi đạo đức.'),
    Q('Vai trò của đạo đức kinh doanh?', ['Tăng uy tín doanh nghiệp, phát triển bền vững', 'Giảm lợi nhuận lâu dài', 'Phá hoại doanh nghiệp', 'Không có tác dụng'], 0, 'Uy tín + bền vững.'),
    Q('Hành vi vi phạm đạo đức kinh doanh?', ['Chăm sóc khách hàng', 'Sản xuất hàng giả, hàng kém chất lượng, gây ô nhiễm', 'Đầu tư R&D', 'Trả lương đúng hạn'], 1, 'Hành vi vi phạm.'),
    Q('Trách nhiệm xã hội của doanh nghiệp (CSR) là?', ['Trốn nghĩa vụ', 'Đóng góp cho cộng đồng, bảo vệ môi trường, nhân quyền', 'Chỉ tối đa lợi nhuận', 'Bóc lột lao động'], 1, 'CSR.'),
    Q('Học sinh nên ủng hộ doanh nghiệp như thế nào?', ['Doanh nghiệp gây ô nhiễm', 'Doanh nghiệp trốn thuế', 'Doanh nghiệp có đạo đức và trách nhiệm xã hội', 'Doanh nghiệp gian lận'], 2, 'Ủng hộ DN tử tế.'),
  ]),

  M(14, 'Bài 8 — Văn hoá tiêu dùng', [
    Q('Văn hoá tiêu dùng là?', ['Mua sắm tuỳ tiện', 'Tiêu dùng theo mệnh lệnh', 'Không tiêu dùng gì', 'Các giá trị, chuẩn mực, hành vi tiêu dùng có ý thức và trách nhiệm'], 3, 'Chuẩn mực tiêu dùng.'),
    Q('Đặc điểm văn hoá tiêu dùng Việt Nam?', ['Tiết kiệm, ưu tiên hàng Việt, có truyền thống', 'Chỉ thích hàng ngoại đắt tiền', 'Tiêu dùng phung phí', 'Không có đặc trưng'], 0, 'Tiết kiệm + dân tộc.'),
    Q('Xu hướng tiêu dùng hiện đại?', ['Tiêu dùng phá hoại môi trường', 'Tiêu dùng ngẫu nhiên', 'Không quan tâm chất lượng', 'Tiêu dùng bền vững, xanh, có trách nhiệm với môi trường'], 3, 'Tiêu dùng bền vững.'),
    Q('Để xây dựng văn hoá tiêu dùng văn minh, mỗi người cần?', ['Tiêu dùng theo trào lưu', 'Lãng phí', 'Mua hàng giả', 'Có kiến thức, hiểu sản phẩm, lựa chọn thông minh, ủng hộ hàng Việt chất lượng'], 3, 'Tiêu dùng có hiểu biết.'),
    Q('Tiêu dùng không lành mạnh KHÔNG bao gồm?', ['Tiêu dùng tiết kiệm', 'Hàng giả', 'Hàng phi pháp', 'Hàng phung phí'], 0, 'Tiết kiệm là lành mạnh.'),
    Q('Trách nhiệm của người tiêu dùng?', ['Im lặng khi bị lừa', 'Khuyến khích gian lận', 'Tuân thủ pháp luật, từ chối hàng giả, phản ánh vi phạm', 'Mua hàng giả'], 2, 'Trách nhiệm tiêu dùng.'),
  ]),

  M(15, 'Ôn tập phần Giáo dục kinh tế', [
    Q('Cạnh tranh trong kinh tế thị trường là?', ['Phân chia mệnh lệnh', 'Ganh đua giữa các chủ thể kinh tế', 'Đứng yên', 'Hợp tác từ thiện'], 1, 'Cạnh tranh KT.'),
    Q('Khi cầu lớn hơn cung, giá có xu hướng?', ['Về 0', 'Tăng', 'Giảm', 'Không đổi'], 1, 'Cung – cầu.'),
    Q('Lạm phát ảnh hưởng đến?', ['Sức mua của đồng tiền', 'Tuổi thọ con người', 'Diện tích đất nước', 'Thời tiết'], 0, 'Giảm sức mua.'),
    Q('Người thất nghiệp là?', ['Trẻ em', 'Người về hưu', 'Học sinh đang học', 'Người trong tuổi LĐ, có khả năng và mong muốn làm việc nhưng không có việc'], 3, 'Định nghĩa thất nghiệp.'),
    Q('Năng lực cốt lõi của người kinh doanh?', ['Chuyên môn, quản lý, giao tiếp, sáng tạo', 'Gian dối', 'Liều lĩnh phi pháp', 'May mắn duy nhất'], 0, 'Năng lực toàn diện.'),
    Q('Đạo đức kinh doanh có vai trò?', ['Triệt tiêu lợi nhuận', 'Phá hoại DN', 'Không có tác dụng', 'Tăng uy tín, phát triển bền vững'], 3, 'Uy tín + bền vững.'),
  ]),

  M(16, 'Luyện tập tổng hợp phần kinh tế (1)', [
    Q('Doanh nghiệp X gian lận xuất xứ hàng hoá để bán giá cao là?', ['Hành vi hợp pháp', 'Sáng tạo', 'Đạo đức kinh doanh', 'Cạnh tranh không lành mạnh và vi phạm pháp luật'], 3, 'Gian lận xuất xứ.'),
    Q('Khi cung > cầu kéo dài, người sản xuất nên?', ['Tăng sản lượng vô tội vạ', 'Ép giá đối thủ', 'Bỏ kinh doanh', 'Giảm sản lượng, đa dạng hoá hoặc đổi mới sản phẩm'], 3, 'Điều chỉnh sản xuất.'),
    Q('Để chống lạm phát cao, NN có thể?', ['Thắt chặt tiền tệ, giảm cung tiền', 'In tiền tự do', 'Tăng cung tiền không kiểm soát', 'Bỏ chính sách tiền tệ'], 0, 'CSTT thắt chặt.'),
    Q('Người tiêu dùng thông minh sẽ?', ['Theo trào lưu mù quáng', 'Mua hàng giả vì rẻ', 'Tìm hiểu sản phẩm, so sánh giá, đọc nhãn mác', 'Mua không suy nghĩ'], 2, 'Tiêu dùng thông minh.'),
    Q('Tổ chức bảo vệ quyền lợi người tiêu dùng?', ['Hội Bảo vệ Người tiêu dùng Việt Nam', 'NATO', 'WTO', 'OPEC'], 0, 'Vinastas.'),
    Q('Để phát triển kinh tế bền vững, doanh nghiệp cần?', ['Tối đa lợi nhuận bằng mọi giá', 'Bỏ qua môi trường', 'Bóc lột người lao động', 'Cân bằng lợi nhuận – môi trường – xã hội'], 3, 'Bền vững.'),
  ]),

  M(17, 'Luyện tập tổng hợp phần kinh tế (2)', [
    Q('Anh A bị cho nghỉ việc do công ty thu hẹp sản xuất là?', ['Thất nghiệp tự nguyện', 'Không phải thất nghiệp', 'Là nghỉ hưu', 'Thất nghiệp do chu kỳ kinh tế'], 3, 'Cyclical unemployment.'),
    Q('Doanh nghiệp đầu tư R&D, hạ giá thành sản phẩm là?', ['Trốn thuế', 'Cạnh tranh lành mạnh', 'Cạnh tranh không lành mạnh', 'Vi phạm pháp luật'], 1, 'Cạnh tranh đúng PL.'),
    Q('Hiện tượng "thổi giá ảo" trong kinh doanh BĐS là?', ['Đạo đức tốt', 'Hợp pháp', 'Hành vi gian lận, gây bất ổn thị trường', 'Sáng tạo kinh doanh'], 2, 'Thổi giá là vi phạm.'),
    Q('Người tiêu dùng có quyền?', ['Tự xử lý vi phạm bằng vũ lực', 'Bỏ qua', 'Khiếu nại, tố cáo khi quyền lợi bị xâm phạm', 'Im lặng chịu đựng'], 2, 'Quyền khiếu nại.'),
    Q('Hành vi tiêu dùng có trách nhiệm với môi trường?', ['Sử dụng nhiều túi nilon', 'Mua sắm dư thừa', 'Hạn chế đồ nhựa dùng một lần, ưu tiên hàng tái chế', 'Xả rác bừa bãi'], 2, 'Tiêu dùng xanh.'),
    Q('Khởi nghiệp cần chú ý điều gì?', ['Bỏ qua pháp luật', 'Vay nặng lãi tuỳ tiện', 'Không cần kế hoạch', 'Tuân thủ pháp luật, khảo sát thị trường, quản lý rủi ro'], 3, 'Khởi nghiệp có chuẩn bị.'),
  ]),

  M(18, 'Thi học kỳ I — Phần Giáo dục kinh tế', [
    Q('Cạnh tranh trong KTTT mang vai trò?', ['Phá vỡ KT', 'Không có vai trò', 'Động lực thúc đẩy sản xuất, đổi mới', 'Triệt tiêu sản xuất'], 2, 'Động lực phát triển.'),
    Q('Cung – cầu quyết định?', ['Quân số quân đội', 'Diện tích đất nước', 'Cấp bậc quan chức', 'Giá cả thị trường'], 3, 'Giá cả.'),
    Q('Lạm phát phi mã là?', ['Giảm phát', 'Từ 10 đến dưới 1000%/năm', 'Dưới 10%/năm', '0%'], 1, 'Phi mã.'),
    Q('Thị trường lao động trao đổi?', ['Đất đai', 'Chứng khoán', 'Hôn nhân', 'Sức lao động giữa người LĐ và người sử dụng LĐ'], 3, 'Mua bán sức LĐ.'),
    Q('Ý tưởng kinh doanh tốt cần?', ['Vô căn cứ', 'Phi pháp', 'Theo cảm tính ngẫu nhiên', 'Có nhu cầu thị trường và khả thi'], 3, 'Thực tiễn + khả thi.'),
    Q('Tiêu dùng bền vững là?', ['Tiêu dùng theo lời người khác', 'Tiêu dùng có trách nhiệm với môi trường và xã hội', 'Tiêu dùng phung phí', 'Tiêu dùng phi pháp'], 1, 'Tiêu dùng bền vững.'),
  ]),

  // ──────────────── HK2 — GIÁO DỤC PHÁP LUẬT ────────────────
  M(19, 'Bài 9 — Quyền bình đẳng của công dân trước pháp luật', [
    Q('Mọi công dân bình đẳng trước pháp luật nghĩa là?', ['Cán bộ có đặc quyền', 'Người có học có quyền hơn', 'Đều có quyền và nghĩa vụ như nhau theo PL, không phân biệt nguồn gốc, giới tính, tôn giáo', 'Người giàu có quyền hơn'], 2, 'Bình đẳng PL.'),
    Q('Cơ sở pháp lý của quyền bình đẳng?', ['Mệnh lệnh cá nhân', 'Tôn giáo riêng', 'Hiến pháp năm 2013 và pháp luật Việt Nam', 'Tập quán tự phát'], 2, 'Hiến pháp + PL.'),
    Q('Mọi vi phạm pháp luật đều bị xử lí?', ['Theo quy định của pháp luật, không phân biệt thân thế', 'Tuỳ tiện', 'Phụ thuộc gia thế', 'Phụ thuộc tôn giáo'], 0, 'Xử lý bình đẳng.'),
    Q('Bình đẳng về quyền của công dân thể hiện ở?', ['Chỉ nam giới được làm việc', 'Phân biệt vùng miền', 'Tham gia quản lý nhà nước, học tập, lao động, kinh doanh', 'Chỉ một số người được học'], 2, 'Quyền công dân.'),
    Q('Bình đẳng về nghĩa vụ?', ['Người có chức không cần đóng thuế', 'Người già miễn mọi nghĩa vụ tuyệt đối', 'Mọi công dân đều phải thực hiện nghĩa vụ với nhà nước và xã hội như đóng thuế, bảo vệ Tổ quốc', 'Người nghèo không cần đóng thuế'], 2, 'Nghĩa vụ bình đẳng.'),
    Q('Trách nhiệm của HS với quyền bình đẳng?', ['Không quan tâm', 'Tôn trọng quyền bình đẳng, phản đối sự phân biệt đối xử', 'Im lặng khi thấy bất công', 'Cổ vũ phân biệt'], 1, 'Tôn trọng + bảo vệ.'),
  ]),

  M(20, 'Bài 10 — Quyền bình đẳng giữa các giới', [
    Q('Bình đẳng giới là?', ['Phân biệt theo giới', 'Nam và nữ có vị thế ngang nhau trong các lĩnh vực của đời sống xã hội và gia đình', 'Nữ có quyền hơn nam', 'Nam có quyền hơn nữ'], 1, 'Bình đẳng nam – nữ.'),
    Q('Luật điều chỉnh trực tiếp vấn đề này?', ['Luật Bình đẳng giới 2006', 'Luật Hôn nhân và gia đình duy nhất', 'Luật Dân sự duy nhất', 'Luật Hình sự duy nhất'], 0, 'Luật BĐG 2006.'),
    Q('Lĩnh vực thường có bất bình đẳng giới?', ['Không có', 'Chỉ trong thi đấu thể thao', 'Chỉ trong thực phẩm', 'Chính trị, lao động, giáo dục, gia đình'], 3, 'Đa lĩnh vực.'),
    Q('Bạo lực gia đình là?', ['Hợp pháp', 'Tự do cá nhân', 'Không liên quan PL', 'Hành vi xâm phạm thể chất, tinh thần, kinh tế trong gia đình'], 3, 'Bạo lực gia đình – cấm.'),
    Q('Bình đẳng giới trong gia đình thể hiện ở?', ['Chia sẻ công việc nhà, quyết định chung, chăm sóc con cái', 'Phụ nữ làm mọi việc nhà', 'Nam giới quyết định mọi việc', 'Không cần chia sẻ'], 0, 'Chia sẻ trong gia đình.'),
    Q('Trách nhiệm của HS với bình đẳng giới?', ['Cổ vũ định kiến', 'Phân biệt đối xử', 'Im lặng trước bất công giới', 'Tôn trọng bạn khác giới, phản đối định kiến giới'], 3, 'Tôn trọng + bảo vệ.'),
  ]),

  M(21, 'Bài 11 — Bình đẳng giữa các dân tộc', [
    Q('Bình đẳng giữa các dân tộc nghĩa là?', ['Phân biệt vùng miền', 'Các dân tộc trong cộng đồng Việt Nam đều có quyền và nghĩa vụ ngang nhau', 'Dân tộc đa số có quyền hơn', 'Dân tộc thiểu số bị hạn chế quyền'], 1, 'Bình đẳng các dân tộc.'),
    Q('Cơ sở pháp lý?', ['Hiến pháp 2013 và các luật có liên quan', 'Tập quán địa phương', 'Mệnh lệnh cá nhân', 'Tôn giáo'], 0, 'Hiến pháp + PL.'),
    Q('Bình đẳng dân tộc thể hiện ở?', ['Không ở đâu cả', 'Chính trị, kinh tế, văn hoá, giáo dục, ngôn ngữ', 'Chỉ kinh tế', 'Chỉ văn hoá'], 1, 'Đa lĩnh vực.'),
    Q('Chính sách của nhà nước với các dân tộc thiểu số?', ['Phân biệt đối xử', 'Cấm dùng tiếng dân tộc', 'Hỗ trợ phát triển kinh tế – xã hội, ưu tiên giáo dục, bảo tồn văn hoá', 'Cô lập'], 2, 'Hỗ trợ phát triển.'),
    Q('Hành vi vi phạm bình đẳng dân tộc?', ['Học tiếng dân tộc', 'Tham gia hoạt động cộng đồng', 'Kỳ thị, chia rẽ dân tộc', 'Tôn trọng phong tục'], 2, 'Kỳ thị – vi phạm.'),
    Q('Trách nhiệm của công dân với bình đẳng dân tộc?', ['Im lặng trước vi phạm', 'Tôn trọng văn hoá, ngôn ngữ, phong tục, đoàn kết các dân tộc', 'Phân biệt đối xử', 'Cổ vũ kỳ thị'], 1, 'Đoàn kết dân tộc.'),
  ]),

  M(22, 'Bài 12 — Bình đẳng giữa các tôn giáo', [
    Q('Bình đẳng giữa các tôn giáo nghĩa là?', ['Các tôn giáo đều bình đẳng trước pháp luật', 'Tôn giáo lớn có quyền hơn', 'Tôn giáo đông tín đồ được ưu tiên hơn', 'Phân biệt tôn giáo'], 0, 'Bình đẳng tôn giáo.'),
    Q('Nội dung quyền tự do tín ngưỡng, tôn giáo?', ['Chỉ theo tôn giáo của chính quyền', 'Tự do theo hoặc không theo một tôn giáo, không ai được ép buộc', 'Phải theo một tôn giáo nhất định', 'Cấm mọi tôn giáo'], 1, 'Tự do tín ngưỡng.'),
    Q('Hành vi nào bị nghiêm cấm trong lĩnh vực tôn giáo?', ['Lợi dụng tôn giáo chống phá nhà nước, gây mất đoàn kết', 'Sinh hoạt tôn giáo bình thường', 'Tổ chức lễ hội hợp pháp', 'Truyền giáo theo PL'], 0, 'Lợi dụng tôn giáo – cấm.'),
    Q('Quan hệ giữa Nhà nước Việt Nam và các tôn giáo?', ['Cấm tôn giáo', 'Áp đặt tôn giáo', 'Bỏ mặc', 'Tôn trọng quyền tự do tín ngưỡng và đoàn kết tôn giáo'], 3, 'Tôn trọng + đoàn kết.'),
    Q('Một tổ chức tôn giáo hợp pháp ở VN cần?', ['Lừa đảo tín đồ', 'Được Nhà nước công nhận và đăng ký hoạt động đúng PL', 'Hoạt động ngầm', 'Bất chấp PL'], 1, 'Đăng ký + công nhận.'),
    Q('Trách nhiệm công dân với bình đẳng tôn giáo?', ['Cản trở hoạt động tôn giáo hợp pháp', 'Tôn trọng quyền tự do tín ngưỡng của người khác, đoàn kết tôn giáo', 'Kỳ thị', 'Ép buộc theo tôn giáo của mình'], 1, 'Tôn trọng + đoàn kết.'),
  ]),

  M(23, 'Bài 13 — Quyền và nghĩa vụ công dân trong tham gia quản lí nhà nước và xã hội', [
    Q('Quyền tham gia quản lý nhà nước và xã hội thể hiện ở?', ['Không có quyền', 'Tham gia bầu cử, ứng cử, đóng góp ý kiến, giám sát', 'Chỉ bầu cử', 'Chỉ đóng thuế'], 1, 'Đa hình thức.'),
    Q('Cơ sở pháp lý?', ['Tập quán', 'Mệnh lệnh cá nhân', 'Tôn giáo', 'Hiến pháp 2013 và Luật Tổ chức chính quyền địa phương, Luật trưng cầu ý dân…'], 3, 'Hiến pháp + Luật.'),
    Q('Hình thức tham gia trực tiếp?', ['Chỉ tin đồn', 'Chỉ tin tưởng cảm tính', 'Bầu cử, ứng cử, biểu quyết khi NN tổ chức trưng cầu ý dân', 'Chỉ qua mạng xã hội'], 2, 'Trực tiếp.'),
    Q('Hình thức tham gia gián tiếp?', ['Không có hình thức nào', 'Thông qua đại biểu Quốc hội, HĐND, các tổ chức chính trị – xã hội', 'Chỉ tự làm', 'Chỉ qua người thân'], 1, 'Gián tiếp.'),
    Q('Nghĩa vụ công dân khi tham gia?', ['Tôn trọng pháp luật, thực hiện đúng quy định, không lợi dụng', 'Tuỳ tiện', 'Phá hoại', 'Trốn tránh'], 0, 'Nghĩa vụ pháp lý.'),
    Q('Học sinh có thể tham gia bằng cách?', ['Bỏ mặc', 'Cản trở hoạt động', 'Phá hoại tài sản công', 'Đóng góp ý kiến cho nhà trường, tham gia hoạt động đoàn, đội'], 3, 'Tham gia phù hợp lứa tuổi.'),
  ]),

  M(24, 'Bài 14 — Quyền và nghĩa vụ công dân về bầu cử và ứng cử', [
    Q('Nguyên tắc bầu cử ở Việt Nam?', ['Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín', 'Đại diện, gián tiếp', 'Công khai danh tính', 'Bỏ phiếu công khai'], 0, '4 nguyên tắc bầu cử.'),
    Q('Tuổi được đi bầu cử (cử tri) ở Việt Nam?', ['Đủ 16 tuổi', 'Đủ 25 tuổi', 'Đủ 18 tuổi trở lên', 'Đủ 21 tuổi'], 2, 'Đủ 18 tuổi.'),
    Q('Tuổi được ứng cử đại biểu Quốc hội/HĐND?', ['Đủ 18 tuổi', 'Đủ 25 tuổi', 'Đủ 30 tuổi', 'Đủ 21 tuổi trở lên'], 3, 'Đủ 21 tuổi.'),
    Q('Hành vi nào vi phạm pháp luật bầu cử?', ['Mua chuộc cử tri, ép buộc bỏ phiếu, làm sai lệch kết quả', 'Đi bầu cử đúng giờ', 'Tự nguyện ứng cử', 'Tuyên truyền hợp pháp'], 0, 'Vi phạm bầu cử.'),
    Q('Ý nghĩa của quyền bầu cử, ứng cử?', ['Không có ý nghĩa', 'Chỉ là thủ tục', 'Thể hiện chủ quyền nhân dân, hình thức dân chủ trực tiếp', 'Hình thức'], 2, 'Dân chủ trực tiếp.'),
    Q('Trách nhiệm công dân?', ['Bỏ phiếu ngẫu nhiên', 'Đi bầu cử đầy đủ, tự giác, đúng pháp luật', 'Không đi bầu', 'Đi bầu hộ'], 1, 'Tham gia tự giác.'),
  ]),

  M(25, 'Bài 15 — Quyền khiếu nại, tố cáo của công dân', [
    Q('Khiếu nại là?', ['Trình báo lực lượng vũ trang', 'Đăng ký kết hôn', 'Đề nghị cơ quan có thẩm quyền xem xét lại quyết định/hành vi hành chính khi cho rằng quyền lợi mình bị xâm phạm', 'Tố giác tội phạm'], 2, 'Khiếu nại quyết định hành chính.'),
    Q('Tố cáo là?', ['Đề nghị tăng lương', 'Đăng ký kinh doanh', 'Báo cho cơ quan có thẩm quyền về hành vi vi phạm pháp luật của bất kỳ ai', 'Khiếu nại nội bộ'], 2, 'Tố cáo hành vi VPPL.'),
    Q('Người khiếu nại có thể là?', ['Chỉ doanh nghiệp', 'Chỉ người nước ngoài', 'Cá nhân, cơ quan, tổ chức có quyền lợi bị xâm phạm', 'Bất kỳ ai dù không bị xâm phạm'], 2, 'Chủ thể bị xâm phạm.'),
    Q('Người tố cáo có quyền?', ['Phải tự đi điều tra', 'Được bảo vệ bí mật danh tính và an toàn', 'Phải công khai danh tính bắt buộc', 'Không được bảo vệ'], 1, 'Bảo vệ người tố cáo.'),
    Q('Hành vi vi phạm khi tố cáo?', ['Cung cấp chứng cứ', 'Khai báo trung thực', 'Tố cáo sai sự thật, vu khống, lợi dụng tố cáo để bôi nhọ', 'Tố cáo đúng pháp luật'], 2, 'Vu khống – vi phạm.'),
    Q('Ý nghĩa của quyền khiếu nại, tố cáo?', ['Bảo vệ quyền lợi công dân và đấu tranh chống tiêu cực', 'Không có ý nghĩa', 'Gây rối', 'Phá hoại nhà nước'], 0, 'Bảo vệ + chống tiêu cực.'),
  ]),

  M(26, 'Bài 16 — Quyền và nghĩa vụ công dân về bảo vệ Tổ quốc', [
    Q('Bảo vệ Tổ quốc là?', ['Nghĩa vụ thiêng liêng và quyền cao quý của công dân', 'Quyền riêng của quân đội', 'Quyền riêng của nam giới', 'Không phải nghĩa vụ công dân'], 0, 'Nghĩa vụ + quyền.'),
    Q('Cơ sở pháp lý của nghĩa vụ bảo vệ Tổ quốc?', ['Hiến pháp 2013 và Luật Nghĩa vụ quân sự, Luật Quốc phòng', 'Tự nguyện cá nhân', 'Tập quán địa phương', 'Tôn giáo'], 0, 'Hiến pháp + luật chuyên ngành.'),
    Q('Tuổi gọi nhập ngũ?', ['Tự nguyện hoàn toàn', 'Đủ 18 đến hết 25 tuổi (kéo dài đến 27 với sinh viên trì hoãn)', 'Đủ 16', 'Trên 30'], 1, 'Đủ 18 – 25/27.'),
    Q('Hành vi vi phạm nghĩa vụ bảo vệ Tổ quốc?', ['Học quân sự', 'Trốn tránh nghĩa vụ quân sự, làm lộ bí mật quốc gia', 'Tham gia phòng thủ dân sự', 'Bảo vệ ANTT'], 1, 'Trốn nghĩa vụ – vi phạm.'),
    Q('Quân đội Nhân dân Việt Nam có vai trò?', ['Chỉ luyện tập biểu diễn', 'Bảo vệ Tổ quốc, bảo vệ Đảng, Nhà nước, Nhân dân, chế độ XHCN', 'Chỉ bảo vệ một nhóm người', 'Không có vai trò'], 1, 'Quân đội nhân dân.'),
    Q('Trách nhiệm HS với bảo vệ Tổ quốc?', ['Học tốt, rèn luyện, tham gia GDQP-AN, sẵn sàng nhập ngũ', 'Thờ ơ', 'Trốn tránh', 'Phá hoại tinh thần dân tộc'], 0, 'Học tốt + rèn luyện.'),
  ]),

  M(27, 'Bài 17 — Quyền bất khả xâm phạm về thân thể của công dân', [
    Q('Quyền bất khả xâm phạm về thân thể nghĩa là?', ['Không ai bị bắt, giam giữ trừ trường hợp do PL quy định', 'Cảnh sát có quyền bắt bất kỳ ai tuỳ ý', 'Người giàu được miễn bị bắt', 'Không có quyền này'], 0, 'Quyền cơ bản về thân thể.'),
    Q('Việc bắt người chỉ được tiến hành?', ['Theo quy định của BLTTHS, có lệnh hoặc trường hợp phạm tội quả tang/đặc biệt', 'Tuỳ tiện', 'Theo cảm tính', 'Khi có tin đồn'], 0, 'Có trình tự PL.'),
    Q('Phạm tội quả tang là?', ['Đang thực hiện tội phạm hoặc ngay sau khi thực hiện thì bị phát hiện', 'Tin đồn về tội phạm', 'Bị nghi ngờ', 'Khai báo của hàng xóm'], 0, 'Quả tang.'),
    Q('Người bị bắt có quyền?', ['Được biết lý do, được thông báo cho gia đình, được nhờ luật sư', 'Không có quyền nào', 'Bị tra tấn buộc khai', 'Bị giam vô thời hạn'], 0, 'Quyền của người bị bắt.'),
    Q('Hành vi vi phạm quyền bất khả xâm phạm thân thể?', ['Bắt người phạm tội quả tang', 'Bảo vệ nạn nhân', 'Báo công an', 'Tự ý bắt, giam giữ người khác trái pháp luật'], 3, 'Bắt trái PL – vi phạm.'),
    Q('Trách nhiệm công dân?', ['Bỏ mặc', 'Bao che vi phạm', 'Tôn trọng thân thể người khác, không tự ý bắt giữ, báo cho cơ quan có thẩm quyền', 'Tự xử lý bằng vũ lực'], 2, 'Tôn trọng + báo PL.'),
  ]),

  M(28, 'Bài 18 — Quyền bất khả xâm phạm về chỗ ở của công dân', [
    Q('Quyền bất khả xâm phạm về chỗ ở nghĩa là?', ['Chính quyền địa phương có quyền tuỳ tiện', 'Không ai được tự ý vào chỗ ở của người khác nếu không có sự đồng ý', 'Cảnh sát có thể vào bất kỳ nhà nào', 'Hàng xóm có quyền vào nhà nhau'], 1, 'Quyền về chỗ ở.'),
    Q('Khám xét chỗ ở chỉ được tiến hành khi?', ['Tuỳ tiện', 'Theo lời đồn', 'Theo cảm tính', 'Có căn cứ và lệnh khám của cơ quan có thẩm quyền'], 3, 'Phải có lệnh.'),
    Q('Hành vi vi phạm?', ['Cứu hộ khẩn cấp theo PL', 'Tự ý vào nhà người khác để lấy đồ', 'Vào nhà mình', 'Được mời vào nhà'], 1, 'Tự ý xâm nhập – vi phạm.'),
    Q('Khi bị xâm phạm chỗ ở, công dân nên?', ['Im lặng', 'Bao che', 'Báo cho cơ quan công an, chính quyền địa phương', 'Tự xử lý bằng vũ lực'], 2, 'Báo cơ quan có thẩm quyền.'),
    Q('Trường hợp ngoại lệ được vào chỗ ở mà không cần đồng ý?', ['Bán hàng', 'Tự ý vào', 'Cứu hộ, truy bắt tội phạm quả tang theo quy định PL', 'Tham quan'], 2, 'Ngoại lệ luật định.'),
    Q('Trách nhiệm của công dân?', ['Tự ý xâm nhập', 'Bao che cho hành vi xâm phạm', 'Không quan tâm', 'Tôn trọng chỗ ở của người khác, tuân thủ pháp luật'], 3, 'Tôn trọng chỗ ở.'),
  ]),

  M(29, 'Bài 19 — Quyền bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín', [
    Q('Thư tín, điện thoại, điện tín của công dân?', ['Không có quyền bảo mật', 'Được bảo đảm an toàn và bí mật theo Hiến pháp và pháp luật', 'Được công khai bởi nhà cung cấp', 'Có thể bị bất kỳ ai đọc'], 1, 'Bí mật thư tín.'),
    Q('Ai có quyền kiểm soát thư tín, điện thoại?', ['Bất kỳ ai', 'Chỉ cơ quan có thẩm quyền trong trường hợp do PL quy định', 'Cha mẹ có quyền tuỳ tiện', 'Hàng xóm'], 1, 'Chỉ cơ quan có thẩm quyền.'),
    Q('Hành vi vi phạm?', ['Nhận tin nhắn từ bạn', 'Gọi điện thoại bình thường', 'Bóc thư người khác, nghe lén điện thoại, đọc trộm tin nhắn', 'Đọc thư của mình'], 2, 'Đọc trộm – vi phạm.'),
    Q('Khi phát hiện vi phạm, công dân nên?', ['Im lặng', 'Tự xử lý bằng vũ lực', 'Bao che', 'Thông báo cho cơ quan có thẩm quyền'], 3, 'Báo PL.'),
    Q('Ý nghĩa của quyền này?', ['Bảo vệ quyền riêng tư và an toàn cá nhân', 'Không có ý nghĩa', 'Gây phiền phức', 'Cản trở pháp luật'], 0, 'Quyền riêng tư.'),
    Q('Trách nhiệm HS?', ['Đăng tin riêng tư của người khác lên mạng', 'Chia sẻ ảnh nhạy cảm của người khác', 'Tôn trọng riêng tư người khác, không đọc trộm tin nhắn', 'Đọc trộm tin nhắn bạn'], 2, 'Tôn trọng riêng tư.'),
  ]),

  M(30, 'Bài 20 — Quyền và nghĩa vụ công dân về tự do ngôn luận, báo chí và tiếp cận thông tin', [
    Q('Tự do ngôn luận là?', ['Vu khống người khác', 'Lăng mạ vô tội vạ', 'Công dân có quyền tự do phát biểu, bày tỏ quan điểm trong khuôn khổ pháp luật', 'Phát biểu tuỳ tiện không giới hạn'], 2, 'Trong khuôn khổ PL.'),
    Q('Tự do báo chí ở Việt Nam?', ['Được pháp luật bảo đảm trong khuôn khổ PL', 'Không có', 'Vô giới hạn', 'Chỉ dành cho nhà báo nước ngoài'], 0, 'Quyền pháp lý.'),
    Q('Quyền tiếp cận thông tin nghĩa là?', ['Truy cập trái phép dữ liệu', 'Đánh cắp dữ liệu', 'Công dân được tiếp cận thông tin của các cơ quan nhà nước theo PL', 'Tiếp cận mọi bí mật'], 2, 'Theo PL.'),
    Q('Hành vi nào VI PHẠM tự do ngôn luận, báo chí?', ['Bày tỏ ý kiến hợp pháp', 'Tham gia phản biện xã hội đúng PL', 'Đăng tin sai sự thật, vu khống, gây thù hằn dân tộc', 'Đăng tin có kiểm chứng'], 2, 'Tin sai – vi phạm.'),
    Q('Vi phạm về thông tin trên mạng có thể bị?', ['Khen thưởng', 'Hợp pháp hoá', 'Xử phạt hành chính hoặc truy cứu hình sự tuỳ mức độ', 'Không bị xử lý'], 2, 'Xử lý theo PL.'),
    Q('Trách nhiệm công dân và HS khi sử dụng mạng xã hội?', ['Đăng tin sai để câu like', 'Bôi nhọ người khác', 'Lan truyền tin chưa kiểm chứng', 'Đăng tin trung thực, không lan truyền tin sai, tôn trọng người khác'], 3, 'Sử dụng MXH có trách nhiệm.'),
  ]),

  M(31, 'Bài 21 — Quyền và nghĩa vụ công dân về tự do tín ngưỡng và tôn giáo', [
    Q('Quyền tự do tín ngưỡng, tôn giáo nghĩa là?', ['Mọi người có quyền theo hoặc không theo một tôn giáo nào', 'Phải theo một tôn giáo nhất định', 'Cấm theo tôn giáo', 'Chỉ một tôn giáo được phép'], 0, 'Tự do tín ngưỡng.'),
    Q('Nhà nước Việt Nam?', ['Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo của công dân', 'Cấm tôn giáo', 'Áp đặt tôn giáo', 'Bỏ mặc'], 0, 'Bảo đảm quyền.'),
    Q('Hoạt động tôn giáo hợp pháp phải?', ['Bất chấp PL', 'Trái thuần phong', 'Phá hoại đoàn kết dân tộc', 'Tuân thủ pháp luật và không trái thuần phong mỹ tục'], 3, 'Hợp pháp.'),
    Q('Hành vi lợi dụng tôn giáo để?', ['Tổ chức từ thiện', 'Sinh hoạt cộng đồng', 'Trục lợi, chống phá nhà nước, gây mất đoàn kết là vi phạm PL', 'Hành lễ hợp pháp'], 2, 'Lợi dụng tôn giáo – vi phạm.'),
    Q('Công dân có nghĩa vụ?', ['Cản trở hoạt động tôn giáo hợp pháp', 'Ép buộc theo tôn giáo', 'Lợi dụng tôn giáo', 'Tôn trọng quyền tự do tín ngưỡng, tôn giáo của người khác'], 3, 'Tôn trọng người khác.'),
    Q('Học sinh có trách nhiệm?', ['Kỳ thị', 'Cổ vũ mê tín dị đoan', 'Lợi dụng tôn giáo', 'Tôn trọng tôn giáo của bạn, không kỳ thị, tham gia chống lợi dụng tôn giáo'], 3, 'Tôn trọng + chống mê tín.'),
  ]),

  M(32, 'Ôn tập phần Giáo dục pháp luật (1) — Quyền bình đẳng và dân chủ', [
    Q('Mọi công dân bình đẳng về?', ['Học lực', 'Quyền và nghĩa vụ theo PL', 'Tài sản', 'Sức khoẻ'], 1, 'Quyền + nghĩa vụ.'),
    Q('Bình đẳng giới là?', ['Nữ trên nam', 'Nam trên nữ', 'Phân biệt giới', 'Nam và nữ có địa vị ngang nhau'], 3, 'Ngang nhau.'),
    Q('Quyền tham gia quản lý NN thể hiện rõ nhất qua?', ['Du lịch', 'Bầu cử, ứng cử, đóng góp ý kiến', 'Mua sắm', 'Tiêu dùng'], 1, 'Bầu cử + ứng cử.'),
    Q('Tuổi đi bầu cử ở Việt Nam?', ['Đủ 21', 'Đủ 16', 'Đủ 30', 'Đủ 18 tuổi'], 3, '18 tuổi.'),
    Q('Khiếu nại được thực hiện khi?', ['Nhập ngũ', 'Quyền lợi bị xâm phạm bởi quyết định/hành vi hành chính', 'Tố giác tội phạm', 'Đăng ký kinh doanh'], 1, 'Khiếu nại HC.'),
    Q('Bảo vệ Tổ quốc là?', ['Nghĩa vụ thiêng liêng và quyền cao quý của công dân', 'Tự nguyện hoàn toàn', 'Chỉ của quân đội', 'Chỉ của nam giới'], 0, 'Nghĩa vụ + quyền.'),
  ]),

  M(33, 'Ôn tập phần Giáo dục pháp luật (2) — Quyền tự do dân chủ và tự do cá nhân', [
    Q('Bắt người chỉ được tiến hành?', ['Theo cảm tính', 'Theo trình tự PL quy định (có lệnh, hoặc quả tang…)', 'Tuỳ tiện', 'Khi có tin đồn'], 1, 'Trình tự PL.'),
    Q('Tự ý vào nhà người khác là?', ['Không liên quan PL', 'Vi phạm quyền bất khả xâm phạm chỗ ở', 'Quyền tự do', 'Hợp pháp'], 1, 'Xâm phạm chỗ ở.'),
    Q('Đọc trộm tin nhắn người khác là?', ['Không liên quan PL', 'Vi phạm quyền bí mật thư tín, điện tín', 'Hợp pháp', 'Khuyến khích'], 1, 'Xâm phạm bí mật riêng tư.'),
    Q('Tự do ngôn luận nằm trong giới hạn?', ['Bất chấp PL', 'Tuỳ ý cá nhân', 'Không gây hại cho an ninh quốc gia, danh dự, nhân phẩm người khác', 'Vô hạn'], 2, 'Trong khuôn khổ PL.'),
    Q('Đăng tin sai sự thật trên mạng xã hội bị?', ['Xử phạt theo Luật An ninh mạng và quy định liên quan', 'Khen thưởng', 'Không liên quan PL', 'Tăng like vô hại'], 0, 'Xử phạt theo PL.'),
    Q('Tự do tín ngưỡng, tôn giáo phải?', ['Bất chấp PL', 'Trái thuần phong', 'Phá hoại đoàn kết dân tộc', 'Tuân thủ pháp luật và thuần phong mỹ tục'], 3, 'Tuân thủ PL.'),
  ]),

  M(34, 'Tổng ôn cả năm', [
    Q('Cạnh tranh lành mạnh trong KTTT là?', ['Gian dối', 'Bôi nhọ đối thủ', 'Trốn thuế', 'Đổi mới, nâng chất lượng, tuân thủ pháp luật'], 3, 'Cạnh tranh đúng PL.'),
    Q('Cung – cầu quyết định?', ['Số dân', 'Giá cả thị trường', 'Quân số', 'Diện tích'], 1, 'Giá cả.'),
    Q('Lạm phát ảnh hưởng đến?', ['Diện tích đất', 'Khí hậu', 'Sức mua của tiền', 'Tuổi thọ'], 2, 'Giảm sức mua.'),
    Q('Mọi công dân bình đẳng trước?', ['Tôn giáo', 'Học vấn', 'Pháp luật', 'Thiên nhiên'], 2, 'Hiến pháp.'),
    Q('Bảo vệ Tổ quốc là?', ['Chỉ của Nhà nước', 'Quyền và nghĩa vụ của công dân', 'Chỉ của quân đội', 'Chỉ của nam giới'], 1, 'Của công dân.'),
    Q('Tự do ngôn luận, báo chí phải?', ['Vô giới hạn', 'Bất chấp PL', 'Tuỳ tiện', 'Tuân thủ pháp luật'], 3, 'Trong khuôn khổ PL.'),
  ]),

  M(35, 'Thi học kỳ II — Tổng hợp', [
    Q('Cạnh tranh không lành mạnh KHÔNG bao gồm?', ['Hàng giả', 'Quảng cáo gian dối', 'Câu kết định giá', 'Đầu tư đổi mới công nghệ'], 3, 'Đổi mới là lành mạnh.'),
    Q('Khi cầu lớn hơn cung, giá có xu hướng?', ['Tăng', 'Giảm', 'Không đổi', 'Về 0'], 0, 'Quy luật cung cầu.'),
    Q('Lạm phát phi mã là?', ['Trên 1000%/năm liên tục', 'Bằng 0', 'Từ 10% đến dưới 1000%/năm', 'Dưới 10%/năm'], 2, 'Phi mã = 2 hoặc 3 chữ số.'),
    Q('Tuổi tối thiểu được ứng cử đại biểu QH?', ['Đủ 30', 'Đủ 21 tuổi', 'Đủ 18', 'Đủ 25'], 1, '21 tuổi.'),
    Q('Tự ý khám xét chỗ ở của người khác là?', ['Không liên quan PL', 'Vi phạm pháp luật', 'Hợp pháp', 'Tự do cá nhân'], 1, 'Vi phạm PL.'),
    Q('Trách nhiệm HS với pháp luật?', ['Vi phạm', 'Cản trở thực thi PL', 'Học hỏi, tuân thủ và tuyên truyền pháp luật', 'Không quan tâm'], 2, 'Tuân thủ + lan toả.'),
  ]),
];

export const H11GDCD_SCENARIOS = indexBy(H11GDCD_WEEKS);
