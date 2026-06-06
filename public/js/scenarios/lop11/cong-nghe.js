// ============================================================
// Lớp 11 · CÔNG NGHỆ (Công nghệ Cơ khí) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018, bộ Kết nối tri thức — Phần 1 Cơ khí chế tạo + Phần 2 Cơ khí động lực.
// ID prefix: "H11CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11CN', 'cong-nghe', n, title, qs, opts);

export const H11CN_WEEKS = [
  // ──────────────── HK1 — Phần 1: Cơ khí chế tạo ────────────────
  M(1, 'Bài 1 — Khái quát về cơ khí chế tạo', [
    Q('Cơ khí chế tạo là ngành?', ['Sản xuất phần mềm', 'Thiết kế và chế tạo các sản phẩm cơ khí phục vụ sản xuất, đời sống', 'Y dược', 'Nông nghiệp thuần tuý'], 1, 'Cơ khí chế tạo.'),
    Q('Sản phẩm cơ khí chế tạo bao gồm?', ['Máy móc, thiết bị, dụng cụ, chi tiết máy', 'Chỉ thuốc chữa bệnh', 'Chỉ phần mềm', 'Chỉ thực phẩm'], 0, 'Cơ khí làm ra máy móc.'),
    Q('Vai trò của cơ khí chế tạo với nền kinh tế?', ['Không đáng kể', 'Cung cấp tư liệu sản xuất, máy móc cho mọi ngành', 'Chỉ phục vụ giải trí', 'Chỉ tiêu dùng'], 1, 'Tư liệu sản xuất.'),
    Q('Đặc điểm sản phẩm cơ khí chế tạo?', ['Phải có hình dạng, kích thước, vật liệu, độ chính xác xác định', 'Tuỳ ý không cần kích thước', 'Không cần bản vẽ', 'Chỉ mang tính nghệ thuật'], 0, 'Tiêu chuẩn kỹ thuật.'),
    Q('Để chế tạo một chi tiết máy cần?', ['Bản vẽ kỹ thuật, vật liệu, phương pháp gia công, dụng cụ đo', 'Chỉ ý tưởng', 'Chỉ ảnh', 'Chỉ mô tả miệng'], 0, 'Yêu cầu chế tạo.'),
    Q('Ngành cơ khí chế tạo ở Việt Nam đang theo hướng?', ['Thủ công hoàn toàn', 'Hiện đại hoá, tự động hoá, ứng dụng số (CAD/CAM/CNC)', 'Lao động tay', 'Lùi về quá khứ'], 1, 'Industry 4.0.'),
  ]),

  M(2, 'Bài 2 — Ngành nghề trong lĩnh vực cơ khí chế tạo', [
    Q('Kỹ sư cơ khí làm công việc?', ['Bán hàng tạp hoá', 'Thiết kế, tính toán, vận hành, bảo trì máy và quy trình chế tạo', 'Soạn nhạc', 'Chăm sóc khách hàng'], 1, 'Mechanical engineer.'),
    Q('Công nhân vận hành máy CNC cần?', ['Đọc bản vẽ, hiểu lập trình G-code cơ bản, vận hành an toàn', 'Chỉ biết ấn nút', 'Không cần đọc bản vẽ', 'Chỉ làm sạch máy'], 0, 'CNC operator.'),
    Q('Thợ nguội (bench worker) chuyên?', ['Lái máy bay', 'Gia công nguội (giũa, khoan, đột, lắp ráp) bằng tay và dụng cụ', 'Quản lý nhân sự', 'Thiết kế thời trang'], 1, 'Nghề nguội.'),
    Q('Phẩm chất cần của người làm cơ khí?', ['Cẩn thận, chính xác, tuân thủ an toàn lao động, kiên nhẫn', 'Cẩu thả', 'Bỏ qua an toàn', 'Vội vàng'], 0, 'Tính nghề.'),
    Q('Để theo nghề cơ khí, học sinh nên?', ['Học vững Toán, Lý, Công nghệ; rèn kỹ năng đọc bản vẽ', 'Bỏ học', 'Chỉ học Văn', 'Không cần định hướng'], 0, 'Hướng nghiệp.'),
    Q('Cơ hội nghề cơ khí trong tương lai?', ['Đang biến mất', 'Tiếp tục phát triển nhờ tự động hoá, robot, ô tô, hàng không', 'Bị thay thế hoàn toàn bởi AI', 'Chỉ ở nông thôn'], 1, 'Tương lai nghề.'),
  ]),

  M(3, 'Bài 3 — Vật liệu kim loại đen', [
    Q('Kim loại đen gồm?', ['Sắt và hợp kim của sắt (gang, thép)', 'Đồng và nhôm', 'Vàng và bạc', 'Chì và kẽm'], 0, 'Kim loại đen = Fe và hợp kim Fe.'),
    Q('Thép khác gang ở hàm lượng cacbon (C)?', ['Thép có C ≤ 2,14%; gang có C > 2,14%', 'Thép có C cao hơn gang', 'Bằng nhau', 'Không liên quan'], 0, 'Phân biệt theo %C.'),
    Q('Gang xám có đặc tính?', ['Giòn, dễ đúc, chịu nén tốt, chịu rung, dùng đúc thân máy', 'Dẻo, dễ dát mỏng', 'Trong suốt', 'Dẻo như cao su'], 0, 'Gang xám điển hình.'),
    Q('Thép cacbon dùng phổ biến trong?', ['Khung kết cấu, chi tiết máy, dụng cụ thông dụng', 'Chỉ làm trang sức', 'Chỉ làm dây điện', 'Chỉ làm gốm'], 0, 'Thép cacbon.'),
    Q('Thép hợp kim được tạo bằng cách?', ['Thêm các nguyên tố hợp kim (Cr, Ni, Mn, Mo…) để cải thiện cơ tính', 'Pha cát', 'Thêm gỗ', 'Pha thuỷ tinh'], 0, 'Thép hợp kim.'),
    Q('Để chống ăn mòn, thép có thể?', ['Mạ, sơn, hoặc dùng thép không gỉ (inox - hợp kim chứa Cr ≥ 10,5%)', 'Bỏ ngoài trời', 'Đốt nóng', 'Đập dập'], 0, 'Chống ăn mòn.'),
  ]),

  M(4, 'Bài 4 — Vật liệu kim loại màu', [
    Q('Kim loại màu là?', ['Sắt và gang', 'Các kim loại không phải sắt và hợp kim của chúng (Cu, Al, Zn, Ni, Ti…)', 'Vật liệu phi kim', 'Vật liệu polymer'], 1, 'Kim loại màu.'),
    Q('Nhôm (Al) có đặc tính?', ['Nhẹ, dẫn điện tốt, chống ăn mòn (do lớp Al₂O₃)', 'Nặng nhất', 'Dẫn điện kém', 'Dễ gỉ trong không khí khô'], 0, 'Nhôm.'),
    Q('Đồng (Cu) thường dùng làm?', ['Dây dẫn điện, ống dẫn nhiệt, chi tiết chống ăn mòn', 'Khung xe tải hạng nặng', 'Bệ máy đúc', 'Đá lát đường'], 0, 'Đồng dẫn điện tốt.'),
    Q('Hợp kim đồng - thiếc gọi là?', ['Đồng thau (brass)', 'Đồng thiếc (bronze)', 'Inox', 'Thép gió'], 1, 'Bronze.'),
    Q('Hợp kim đồng - kẽm gọi là?', ['Đồng thau (brass)', 'Đồng thiếc (bronze)', 'Inox', 'Gang'], 0, 'Brass.'),
    Q('Titan (Ti) được dùng nhiều trong?', ['Hàng không, vũ trụ, y khoa (cấy ghép) — nhẹ và bền', 'Lưới đánh cá rẻ tiền', 'Đồ chơi nhựa', 'Gạch lát nền'], 0, 'Titan.'),
  ]),

  M(5, 'Bài 5 — Vật liệu phi kim loại', [
    Q('Vật liệu phi kim trong cơ khí gồm?', ['Sắt, đồng, nhôm', 'Chất dẻo (polymer), cao su, gốm kĩ thuật, composite', 'Chỉ gỗ tự nhiên', 'Chỉ vàng bạc'], 1, 'Phi kim cơ khí.'),
    Q('Chất dẻo (nhựa kĩ thuật) có ưu điểm?', ['Nhẹ, cách điện, chống ăn mòn, dễ tạo hình', 'Rất nặng', 'Dẫn điện tốt', 'Cứng tuyệt đối'], 0, 'Polymer.'),
    Q('Cao su có đặc tính nổi bật?', ['Đàn hồi cao, chống rung, kín khí', 'Cứng và giòn', 'Dẫn nhiệt rất tốt', 'Trong suốt như thủy tinh'], 0, 'Cao su.'),
    Q('Gốm kĩ thuật (technical ceramics) chịu được?', ['Nhiệt độ rất cao, mài mòn — dùng làm dao cắt, bộ phận động cơ', 'Va đập rất tốt như cao su', 'Hàn nguội dễ dàng', 'Dẫn điện cao'], 0, 'Gốm kỹ thuật.'),
    Q('Composite là?', ['Vật liệu tổ hợp từ 2 hay nhiều thành phần khác nhau để tận dụng ưu điểm từng thành phần', 'Hợp kim của sắt', 'Một loại nhựa đơn', 'Một loại kim loại quý'], 0, 'Composite.'),
    Q('Vật liệu phi kim được ưu tiên khi cần?', ['Giảm khối lượng, cách điện, chống ăn mòn', 'Dẫn điện tốt nhất có thể', 'Chịu lực cực cao của kết cấu chính', 'Truyền nhiệt như đồng'], 0, 'Ứng dụng.'),
  ]),

  M(6, 'Bài 6 — Vật liệu mới trong cơ khí chế tạo', [
    Q('Vật liệu nano là?', ['Vật liệu có cấu trúc ở thang nano-mét (10⁻⁹ m) với tính chất đặc biệt', 'Vật liệu lớn cỡ mét', 'Một loại gang', 'Một loại gỗ'], 0, 'Nano material.'),
    Q('Composite sợi cacbon (CFRP) được dùng cho?', ['Máy bay, ô tô đua, dụng cụ thể thao cao cấp', 'Khung thép xây dựng cầu', 'Lưới đánh cá rẻ', 'Gạch lát đường'], 0, 'CFRP.'),
    Q('Hợp kim ghi nhớ hình dạng (SMA) có tính chất?', ['Có thể trở lại hình dạng ban đầu khi gia nhiệt', 'Luôn biến dạng vĩnh viễn', 'Không thay đổi hình dạng', 'Trong suốt'], 0, 'Shape Memory Alloy.'),
    Q('Vật liệu thông minh (smart material) có khả năng?', ['Cảm nhận và phản ứng với môi trường (nhiệt, lực, từ trường…)', 'Không phản ứng gì', 'Chỉ làm trang trí', 'Chỉ chịu lực'], 0, 'Smart material.'),
    Q('Xu hướng vật liệu mới phục vụ sản phẩm cơ khí hiện đại là?', ['Nhẹ, bền, đa chức năng, thân thiện môi trường', 'Nặng và độc hại', 'Đắt và không bền', 'Khó tái chế'], 0, 'Xu hướng.'),
    Q('In 3D kim loại thường dùng vật liệu?', ['Bột kim loại (titan, thép không gỉ, nhôm) thiêu kết bằng laser', 'Gỗ', 'Cát', 'Sơn'], 0, 'Powder bed fusion.'),
  ]),

  M(7, 'Bài 7 — Phương pháp gia công đúc', [
    Q('Đúc là phương pháp gia công?', ['Rót kim loại lỏng vào khuôn để tạo hình theo lòng khuôn, sau đó để nguội', 'Cắt phôi bằng dao', 'Hàn 2 chi tiết', 'Uốn nguội'], 0, 'Casting.'),
    Q('Đúc trong khuôn cát phù hợp với?', ['Sản phẩm có hình dạng phức tạp, sản xuất đơn chiếc hoặc loạt nhỏ', 'Sản phẩm siêu chính xác hàng loạt lớn', 'Linh kiện vi mạch', 'Sợi quang học'], 0, 'Khuôn cát.'),
    Q('Ưu điểm của phương pháp đúc?', ['Tạo hình phức tạp, sử dụng nhiều loại kim loại, giá thành hợp lý cho chi tiết lớn', 'Độ chính xác và độ bóng luôn cao nhất so với mọi phương pháp', 'Không có khuyết tật', 'Không cần nung chảy kim loại'], 0, 'Ưu điểm đúc.'),
    Q('Nhược điểm thường gặp của vật đúc?', ['Có thể có rỗ khí, rỗ co, không khít, cần gia công tinh sau đúc', 'Luôn hoàn hảo', 'Không thể có lỗi', 'Cứng tuyệt đối'], 0, 'Khuyết tật đúc.'),
    Q('Đúc áp lực (die casting) thường dùng cho?', ['Sản xuất hàng loạt chi tiết nhỏ từ Al, Zn — độ chính xác cao', 'Vật siêu nặng đơn chiếc', 'Gốm', 'Nhựa'], 0, 'Die casting.'),
    Q('Sản phẩm nào sau đây thường được chế tạo bằng đúc?', ['Thân máy, bệ máy, vỏ động cơ, bánh răng cỡ lớn, tượng đồng', 'Vi xử lý CPU', 'Sợi quang', 'Bộ nhớ flash'], 0, 'Ứng dụng đúc.'),
  ]),

  M(8, 'Bài 8 — Phương pháp gia công cắt gọt', [
    Q('Gia công cắt gọt là?', ['Loại bỏ một lớp vật liệu (phoi) khỏi phôi bằng dụng cụ cắt để đạt hình dạng và kích thước mong muốn', 'Đổ kim loại lỏng vào khuôn', 'Hàn 2 vật', 'Uốn nguội'], 0, 'Machining.'),
    Q('Máy tiện chủ yếu gia công?', ['Bề mặt tròn xoay (trụ, côn, ren)', 'Bề mặt phẳng lớn', 'Lỗ không tròn xoay', 'Đường cong tự do'], 0, 'Lathe.'),
    Q('Máy phay (milling) chủ yếu gia công?', ['Bề mặt phẳng, rãnh, biên dạng, lỗ — bằng dao quay', 'Chỉ ren ngoài', 'Chỉ uốn dây', 'Chỉ đánh bóng'], 0, 'Milling.'),
    Q('Máy khoan dùng để?', ['Tạo lỗ tròn trên phôi', 'Cắt ren ngoài', 'Đúc khuôn', 'Hàn điểm'], 0, 'Drilling.'),
    Q('Dụng cụ cắt thường làm bằng?', ['Thép gió (HSS), hợp kim cứng (carbide), gốm kĩ thuật, kim cương', 'Nhôm mềm', 'Chì', 'Cao su'], 0, 'Vật liệu dao.'),
    Q('Máy CNC khác máy vạn năng truyền thống ở chỗ?', ['Được điều khiển số bằng chương trình (G-code), tự động hoá cao, độ chính xác và năng suất cao', 'Phải dùng tay quay liên tục', 'Không cần dao cắt', 'Không cần phôi'], 0, 'CNC.'),
  ]),

  M(9, 'Bài 9 — Phương pháp hàn', [
    Q('Hàn là phương pháp?', ['Nối 2 chi tiết kim loại bằng cách nung chảy cục bộ (có/không có vật liệu phụ) rồi đông đặc lại', 'Cắt phoi', 'Đúc khuôn', 'Sơn phủ'], 0, 'Welding.'),
    Q('Hàn hồ quang điện dùng?', ['Nhiệt do hồ quang giữa điện cực và vật hàn để nung chảy mép hàn', 'Khí gas đốt phôi', 'Tia laser cường độ thấp', 'Sóng âm'], 0, 'Arc welding.'),
    Q('Hàn khí (hàn hơi) dùng?', ['Nhiệt do đốt cháy hỗn hợp oxy + axetilen', 'Hồ quang điện', 'Sóng siêu âm', 'Nén lạnh'], 0, 'Oxy-axetilen.'),
    Q('Trang bị bảo hộ khi hàn KHÔNG thể thiếu?', ['Kính/mặt nạ hàn, găng tay, quần áo bảo hộ chống tia lửa', 'Mũ thời trang', 'Áo cộc tay', 'Dép lê'], 0, 'PPE hàn.'),
    Q('Mối hàn tốt cần?', ['Ngấu, không rỗ, không nứt, kích thước đúng, hình dáng đều', 'Có nhiều rỗ và nứt', 'Cháy thủng', 'Nguội nhanh hơn vật chính'], 0, 'Chất lượng mối hàn.'),
    Q('So với đinh tán, hàn có ưu điểm?', ['Mối nối kín, bền chắc, tiết kiệm vật liệu', 'Phải khoan lỗ nhiều hơn', 'Mối nối luôn lỏng', 'Phá huỷ vật liệu'], 0, 'Ưu điểm hàn.'),
  ]),

  M(10, 'Bài 10 — Thực hành chế tạo sản phẩm cơ khí', [
    Q('Bước đầu tiên khi chế tạo một chi tiết là?', ['Đọc bản vẽ kỹ thuật để hiểu yêu cầu', 'Cắt phôi ngay không cần bản vẽ', 'Sơn phủ', 'Lắp ráp'], 0, 'Đọc BVKT.'),
    Q('Đo và vạch dấu trước khi gia công nhằm?', ['Xác định vị trí và kích thước cần cắt/gia công, hạn chế sai sót', 'Trang trí', 'Tăng cân nặng phôi', 'Làm rối'], 0, 'Marking.'),
    Q('Dụng cụ đo kích thước thông dụng?', ['Thước kẹp (caliper), panme, thước lá, dưỡng', 'Cân điện tử', 'Đồng hồ đo nhiệt độ', 'Máy đo huyết áp'], 0, 'Dụng cụ đo dài.'),
    Q('An toàn lao động khi gia công cơ khí yêu cầu?', ['Trang bị bảo hộ, sử dụng máy đúng quy trình, không đùa nghịch', 'Đeo trang sức dễ vướng', 'Mặc áo rộng tay khi đứng máy quay', 'Bỏ qua cảnh báo'], 0, 'ATLĐ.'),
    Q('Kiểm tra sản phẩm sau gia công cần?', ['Đối chiếu kích thước với bản vẽ, đánh giá độ bóng, độ vuông', 'Bỏ qua', 'Đập thử cho vui', 'Xóa nhãn'], 0, 'QC.'),
    Q('5S trong xưởng cơ khí là?', ['Sàng lọc, Sắp xếp, Sạch sẽ, Săn sóc, Sẵn sàng', 'Một loại thép', 'Tên máy CNC', 'Một loại dầu nhớt'], 0, '5S.'),
  ]),

  M(11, 'Bài 11 — Quá trình sản xuất cơ khí', [
    Q('Quá trình sản xuất cơ khí là?', ['Toàn bộ hoạt động từ nguyên liệu thô đến sản phẩm hoàn thiện', 'Chỉ là lắp ráp', 'Chỉ là vận chuyển', 'Chỉ là bán hàng'], 0, 'Production process.'),
    Q('Quá trình công nghệ chính trong sản xuất cơ khí gồm?', ['Chế tạo phôi, gia công cơ, xử lý nhiệt, lắp ráp, kiểm tra, hoàn thiện', 'Chỉ tiếp khách', 'Chỉ marketing', 'Chỉ kế toán'], 0, 'Công nghệ chính.'),
    Q('Phôi (workpiece) là?', ['Sản phẩm cuối', 'Vật liệu/chi tiết ban đầu được gia công để tạo ra sản phẩm', 'Khuôn đúc', 'Dụng cụ đo'], 1, 'Phôi.'),
    Q('Lắp ráp là?', ['Kết nối các chi tiết riêng lẻ thành cụm/sản phẩm hoàn chỉnh', 'Cắt phoi', 'Đúc khuôn', 'Sơn phủ'], 0, 'Assembly.'),
    Q('Kiểm tra chất lượng (QC) nhằm?', ['Đảm bảo sản phẩm đạt tiêu chuẩn kỹ thuật và quy cách', 'Bán giá cao hơn', 'Bỏ qua khuyết tật', 'Chỉ trang trí'], 0, 'QC.'),
    Q('Bảo trì và sửa chữa thuộc?', ['Quá trình hỗ trợ giúp máy móc hoạt động ổn định, lâu dài', 'Không liên quan sản xuất', 'Chỉ làm khi máy hỏng nặng', 'Là khâu thừa'], 0, 'Maintenance.'),
  ]),

  M(12, 'Bài 12 — Dây chuyền sản xuất', [
    Q('Dây chuyền sản xuất là?', ['Chuỗi các công đoạn được tổ chức tuần tự để sản xuất hàng loạt sản phẩm', 'Một chiếc máy đơn', 'Phòng kế toán', 'Phòng họp'], 0, 'Production line.'),
    Q('Ưu điểm dây chuyền sản xuất?', ['Năng suất cao, chất lượng ổn định, giảm chi phí trên đơn vị sản phẩm', 'Luôn đắt nhất', 'Chỉ làm 1 sản phẩm/ngày', 'Không kiểm soát chất lượng'], 0, 'Ưu điểm.'),
    Q('Nhược điểm của dây chuyền chuyên dụng?', ['Kém linh hoạt khi thay đổi mẫu mã, chi phí đầu tư ban đầu cao', 'Linh hoạt tuyệt đối', 'Không cần đầu tư', 'Tự thay đổi mẫu mã'], 0, 'Nhược điểm.'),
    Q('Để cân bằng dây chuyền (line balancing) ta?', ['Phân chia khối lượng công việc đều giữa các trạm để tránh tắc nghẽn', 'Cho 1 trạm làm tất cả', 'Bỏ qua trạm cuối', 'Tăng giờ làm tuỳ ý'], 0, 'Line balancing.'),
    Q('Lean manufacturing chú trọng?', ['Loại bỏ lãng phí, dòng chảy liên tục, tôn trọng con người', 'Tăng hàng tồn kho', 'Lãng phí vật liệu', 'Sản xuất bừa bãi'], 0, 'Lean.'),
    Q('Sản xuất hàng loạt (mass production) khác sản xuất đơn chiếc ở?', ['Số lượng lớn, tiêu chuẩn hoá, sử dụng dây chuyền chuyên dụng', 'Sản phẩm độc bản', 'Không lặp lại', 'Theo yêu cầu riêng từng khách'], 0, 'Mass production.'),
  ]),

  M(13, 'Bài 13 — Robot công nghiệp', [
    Q('Robot công nghiệp là?', ['Thiết bị tự động có thể lập trình lại để thực hiện các thao tác cơ khí trong sản xuất', 'Đồ chơi trẻ em', 'Máy giặt gia đình', 'Máy tính cá nhân'], 0, 'Industrial robot.'),
    Q('Cánh tay robot 6 bậc tự do có thể?', ['Di chuyển và định hướng đầu công tác trong không gian 3D', 'Chỉ chuyển động 1 chiều', 'Chỉ quay quanh trục đứng', 'Chỉ đứng yên'], 0, 'Six DOF arm.'),
    Q('Ứng dụng phổ biến của robot trong cơ khí?', ['Hàn, sơn, lắp ráp, gắp đặt vật, kiểm tra', 'Trồng rau', 'Pha cà phê duy nhất', 'Dạy học mẫu giáo'], 0, 'Ứng dụng robot.'),
    Q('Ưu điểm dùng robot công nghiệp?', ['Chính xác, làm việc liên tục, an toàn trong môi trường độc hại', 'Mệt mỏi như người', 'Cần ngủ nghỉ', 'Không lặp lại được'], 0, 'Ưu điểm.'),
    Q('Khi vận hành robot phải lưu ý?', ['Khu vực làm việc của robot cần rào chắn, cảm biến an toàn để tránh va chạm', 'Đi lại tự do trong vùng cánh tay', 'Tắt cảm biến cho nhanh', 'Bỏ qua quy trình'], 0, 'An toàn robot.'),
    Q('Cobot (collaborative robot) khác robot công nghiệp truyền thống?', ['Được thiết kế để làm việc cùng người, tốc độ chậm và an toàn hơn', 'Nhanh và nguy hiểm hơn', 'Không thể lập trình', 'Không có cảm biến'], 0, 'Cobot.'),
  ]),

  M(14, 'Bài 14 — Tự động hoá quá trình sản xuất', [
    Q('Tự động hoá sản xuất là?', ['Ứng dụng máy móc và hệ thống điều khiển để thực hiện sản xuất với sự can thiệp tối thiểu của con người', 'Bỏ máy, làm thủ công', 'Chỉ vẽ tay', 'Chỉ ghi sổ giấy'], 0, 'Automation.'),
    Q('PLC trong tự động hoá là?', ['Bộ điều khiển logic khả trình điều khiển máy/dây chuyền', 'Một loại dầu nhớt', 'Một loại thép', 'Một loại sơn'], 0, 'PLC.'),
    Q('CAD/CAM là viết tắt của?', ['Computer-Aided Design / Computer-Aided Manufacturing', 'Central Audio Device', 'Customer Account Manager', 'Computer Audio Card'], 0, 'CAD/CAM.'),
    Q('Lợi ích của tự động hoá?', ['Tăng năng suất, đồng đều chất lượng, giảm tai nạn lao động trong công đoạn nguy hiểm', 'Tăng tai nạn', 'Giảm chất lượng', 'Tăng phế phẩm'], 0, 'Benefits.'),
    Q('Thách thức của tự động hoá?', ['Chi phí đầu tư ban đầu, cần đào tạo lại lao động, an toàn an ninh mạng', 'Không có thách thức', 'Lao động không cần học', 'Bỏ qua an ninh mạng'], 0, 'Challenges.'),
    Q('Công nghiệp 4.0 trong cơ khí kết hợp?', ['IoT, dữ liệu lớn, AI, robot, sản xuất thông minh', 'Chỉ máy hơi nước', 'Chỉ điện cơ', 'Chỉ thủ công'], 0, 'Industry 4.0.'),
  ]),

  M(15, 'Ôn tập chương III - IV', [
    Q('Phương pháp tạo hình bằng cách rót kim loại lỏng vào khuôn?', ['Đúc', 'Hàn', 'Tiện', 'Phay'], 0, 'Casting.'),
    Q('Phương pháp nối 2 chi tiết bằng nung chảy cục bộ?', ['Hàn', 'Đúc', 'Khoan', 'Mài'], 0, 'Welding.'),
    Q('Máy tiện gia công chủ yếu?', ['Bề mặt tròn xoay', 'Bề mặt phẳng lớn', 'Răng bánh răng đặc biệt bằng cách mài', 'Lỗ vuông'], 0, 'Lathe.'),
    Q('PLC là?', ['Bộ điều khiển logic khả trình', 'Tên hợp kim', 'Một loại sơn', 'Tên loại thép'], 0, 'PLC.'),
    Q('Robot công nghiệp ứng dụng nhiều ở?', ['Hàn, sơn, lắp ráp, gắp đặt', 'Pha trà', 'Trông trẻ', 'Cắt tóc'], 0, 'Robot apps.'),
    Q('CAD viết tắt của?', ['Computer-Aided Design', 'Central Audio Driver', 'Customer Application Data', 'Computer Address Drive'], 0, 'CAD.'),
  ]),

  M(16, 'Ôn tập tổng hợp Phần 1', [
    Q('Gang khác thép ở?', ['Hàm lượng C: gang > 2,14% C, thép ≤ 2,14% C', 'Màu sắc', 'Trọng lượng riêng giống nhau', 'Không khác gì'], 0, '%C.'),
    Q('Composite là?', ['Tổ hợp 2+ vật liệu tận dụng ưu điểm từng phần', 'Một loại thép', 'Một loại gốm đơn', 'Một loại nhựa đơn'], 0, 'Composite.'),
    Q('Inox chứa nguyên tố hợp kim chính?', ['Crom (Cr) ≥ 10,5%', 'Vàng', 'Bạc', 'Chì'], 0, 'Stainless steel.'),
    Q('Ưu điểm máy CNC?', ['Tự động, độ chính xác và năng suất cao', 'Phải quay tay liên tục', 'Không cần dao', 'Không cần phôi'], 0, 'CNC.'),
    Q('Hàn hồ quang dùng nguồn nhiệt từ?', ['Hồ quang điện giữa điện cực và vật hàn', 'Lò vi sóng', 'Nắng mặt trời', 'Bếp gas gia đình'], 0, 'Arc welding.'),
    Q('Robot 6 DOF tự do thực hiện?', ['Di chuyển và định hướng trong không gian 3D', 'Chỉ quay tròn 1 chỗ', 'Chỉ dịch ngang', 'Chỉ dịch dọc'], 0, '6 DOF.'),
  ]),

  M(17, 'Ôn tập cuối học kì 1', [
    Q('Vật liệu nào sau đây là kim loại đen?', ['Thép cacbon', 'Đồng thau', 'Nhôm', 'Titan'], 0, 'Black metal.'),
    Q('Gang xám phù hợp với?', ['Đúc thân máy, bệ máy chịu nén và rung', 'Dây dẫn điện', 'Vỏ máy bay', 'Sợi quang'], 0, 'Gang xám.'),
    Q('Phương pháp nào tạo lỗ tròn trên phôi?', ['Khoan', 'Đúc', 'Hàn', 'Sơn'], 0, 'Drilling.'),
    Q('Bộ phận của máy phay tạo chuyển động cắt là?', ['Trục chính mang dao phay quay tròn', 'Bệ máy đứng yên', 'Bàn máy tịnh tiến phôi mà không quay dao', 'Tủ điện'], 0, 'Spindle.'),
    Q('Tự động hoá giúp?', ['Tăng năng suất và đồng đều chất lượng', 'Tăng phế phẩm', 'Giảm an toàn', 'Giảm sản lượng'], 0, 'Automation.'),
    Q('Trang bị bắt buộc khi hàn?', ['Kính/mặt nạ hàn, găng tay, quần áo bảo hộ', 'Áo cộc tay', 'Dép lê', 'Không cần gì'], 0, 'PPE.'),
  ]),

  M(18, 'Kiểm tra cuối học kì 1', [
    Q('Sản phẩm "vỏ động cơ ô tô" thường được chế tạo phôi bằng phương pháp?', ['Đúc (đúc khuôn cát hoặc đúc áp lực)', 'Tiện toàn bộ', 'Hàn cắt tay', 'Sơn phủ'], 0, 'Casting.'),
    Q('Thép không gỉ (inox 304) chống ăn mòn nhờ?', ['Lớp Cr₂O₃ thụ động bề mặt', 'Sơn dầu', 'Mạ bạc', 'Bôi dầu nhớt'], 0, 'Passive layer.'),
    Q('CNC viết tắt của?', ['Computer Numerical Control', 'Central Network Card', 'Common Numeric Code', 'Computer Native Coder'], 0, 'CNC.'),
    Q('Hàn TIG/MIG sử dụng?', ['Khí bảo vệ (argon, CO₂) để chống oxy hoá vùng hàn', 'Không có khí bảo vệ', 'Sóng siêu âm', 'Tia X'], 0, 'Khí bảo vệ.'),
    Q('Dây chuyền tự động giúp?', ['Năng suất cao, chất lượng ổn định', 'Tăng phế phẩm', 'Giảm năng suất', 'Tăng chi phí trên đơn vị sản phẩm'], 0, 'Automation line.'),
    Q('5S là phương pháp?', ['Sàng lọc, Sắp xếp, Sạch sẽ, Săn sóc, Sẵn sàng - tổ chức nơi làm việc gọn gàng', 'Một loại thép', 'Tên máy', 'Một loại sơn'], 0, '5S.'),
  ]),

  // ──────────────── HK2 — Phần 2: Cơ khí động lực ────────────────
  M(19, 'Bài 15 — Khái quát về cơ khí động lực', [
    Q('Cơ khí động lực nghiên cứu?', ['Các máy biến đổi năng lượng thành chuyển động (động cơ, phương tiện vận tải, máy nông nghiệp…)', 'Vẽ tranh', 'Máy in văn phòng', 'Trang sức'], 0, 'Power machinery.'),
    Q('Đặc trưng của máy động lực?', ['Tạo và truyền công cơ học để dẫn động các máy công tác hoặc phương tiện', 'Chỉ trang trí', 'Không tạo công', 'Chỉ phát ánh sáng'], 0, 'Đặc trưng.'),
    Q('Các nhóm máy động lực điển hình?', ['Động cơ đốt trong, động cơ điện, tua-bin, ô tô, máy kéo, máy bay, tàu thuỷ', 'Máy giặt', 'Lò vi sóng', 'Máy đo huyết áp'], 0, 'Nhóm.'),
    Q('Vai trò cơ khí động lực với xã hội?', ['Cung cấp năng lượng cơ học cho giao thông, công nghiệp, nông nghiệp, quốc phòng', 'Không quan trọng', 'Chỉ làm cảnh', 'Chỉ làm tiếng ồn'], 0, 'Vai trò.'),
    Q('Xu hướng phát triển cơ khí động lực hiện đại?', ['Tiết kiệm nhiên liệu, giảm khí thải, điện khí hoá, thông minh hoá', 'Tăng phát thải tuỳ ý', 'Bỏ tiêu chuẩn khí thải', 'Quay lại máy hơi nước'], 0, 'Xu hướng.'),
    Q('Đào tạo nhân lực cơ khí động lực thường gắn với?', ['Trường đại học/cao đẳng kỹ thuật, kỹ thuật ô tô, hàng không, đóng tàu', 'Trường mỹ thuật', 'Trường luật', 'Trường y'], 0, 'Đào tạo.'),
  ]),

  M(20, 'Bài 16 — Ngành nghề trong lĩnh vực cơ khí động lực', [
    Q('Kỹ sư động lực ô tô làm việc tại?', ['Nhà máy lắp ráp, trung tâm bảo hành, hãng thiết kế, kiểm định', 'Bệnh viện', 'Toà án', 'Trường âm nhạc'], 0, 'Automotive engineer.'),
    Q('Kỹ thuật viên sửa chữa ô tô cần?', ['Đọc sơ đồ điện, hiểu nguyên lý động cơ và hệ thống, sử dụng máy chẩn đoán', 'Chỉ biết thay nhớt', 'Không cần học', 'Chỉ biết rửa xe'], 0, 'Auto technician.'),
    Q('Kỹ sư máy bay tham gia?', ['Thiết kế, vận hành, bảo trì máy bay và động cơ máy bay', 'Lái tàu thuỷ', 'Nuôi cá', 'Sản xuất bánh kẹo'], 0, 'Aerospace.'),
    Q('Để theo nghề cơ khí động lực nên học?', ['Vững Toán, Lý, Công nghệ, Tiếng Anh kỹ thuật', 'Chỉ Lịch sử', 'Bỏ Toán', 'Không cần ngoại ngữ'], 0, 'Hướng nghiệp.'),
    Q('Phẩm chất cần thiết của thợ sửa ô tô?', ['Trung thực, cẩn thận, ham học hỏi công nghệ mới', 'Cẩu thả', 'Gian dối', 'Lười'], 0, 'Đạo đức nghề.'),
    Q('Xu hướng việc làm cơ khí động lực sắp tới?', ['Tăng nhu cầu chuyên gia xe điện, hybrid, kỹ thuật pin, sạc, phần mềm xe', 'Biến mất hoàn toàn', 'Chỉ còn xe ngựa', 'Không có nhu cầu'], 0, 'EV trend.'),
  ]),

  M(21, 'Bài 17 — Cấu tạo chung của động cơ đốt trong', [
    Q('Động cơ đốt trong (ĐCĐT) biến đổi?', ['Hoá năng nhiên liệu thành cơ năng (qua quá trình đốt cháy bên trong xilanh)', 'Điện năng thành nhiệt năng duy nhất', 'Quang năng thành cơ năng', 'Hoá năng thành ánh sáng'], 0, 'IC engine.'),
    Q('ĐCĐT gồm 2 cơ cấu chính?', ['Cơ cấu trục khuỷu - thanh truyền và cơ cấu phân phối khí', 'Bộ phận làm mát và đèn pha', 'Hệ thống lái và hệ thống phanh', 'Bộ tản nhiệt và còi'], 0, 'Cơ cấu chính.'),
    Q('Các hệ thống chính của ĐCĐT?', ['Bôi trơn, làm mát, nhiên liệu, đánh lửa (xăng), khởi động', 'Hệ thống điều hoà cabin và túi khí duy nhất', 'Hệ thống lái và phanh', 'Hệ thống đèn xi-nhan'], 0, 'Hệ thống.'),
    Q('Xilanh - piston - thanh truyền - trục khuỷu thuộc cơ cấu?', ['Trục khuỷu - thanh truyền', 'Phân phối khí', 'Bôi trơn', 'Điều hoà cabin'], 0, 'Trục khuỷu - thanh truyền.'),
    Q('Xupap (van) thuộc cơ cấu?', ['Phân phối khí (nạp - thải)', 'Trục khuỷu', 'Đánh lửa', 'Làm mát'], 0, 'Valve train.'),
    Q('Phân loại ĐCĐT theo nhiên liệu?', ['Xăng, diesel, khí (gas, LPG, CNG), hydro', 'Chỉ xăng', 'Chỉ điện', 'Chỉ than củi'], 0, 'Phân loại theo NL.'),
  ]),

  M(22, 'Bài 18 — Nguyên lý làm việc của động cơ đốt trong 4 kỳ', [
    Q('ĐCĐT 4 kỳ thực hiện một chu trình công tác trong?', ['1 vòng quay trục khuỷu', '2 vòng quay trục khuỷu (4 hành trình piston)', '4 vòng quay', '8 vòng quay'], 1, '4-stroke.'),
    Q('Thứ tự 4 kỳ của động cơ xăng 4 kỳ?', ['Nạp - Nén - Cháy giãn nở (sinh công) - Xả', 'Xả - Nén - Nạp - Cháy', 'Cháy - Xả - Nạp - Nén', 'Nạp - Xả - Nén - Cháy'], 0, 'Otto cycle.'),
    Q('Kỳ nào sinh công?', ['Cháy - giãn nở', 'Nạp', 'Nén', 'Xả'], 0, 'Power stroke.'),
    Q('Ở động cơ diesel, hỗn hợp được đốt cháy nhờ?', ['Nén không khí đến nhiệt độ cao rồi phun nhiên liệu', 'Bugi đánh lửa', 'Tia laser', 'Sấy điện trở liên tục khi vận hành'], 0, 'Compression ignition.'),
    Q('Ở động cơ xăng, hỗn hợp xăng - không khí được đốt cháy nhờ?', ['Tia lửa điện từ bugi', 'Nén tự bốc cháy', 'Sức nóng mặt trời', 'Bộ sấy điện'], 0, 'Spark ignition.'),
    Q('So với 4 kỳ, động cơ 2 kỳ có?', ['Mỗi vòng quay trục khuỷu một lần sinh công, công suất riêng cao nhưng hiệu suất và khí thải kém hơn', 'Hiệu suất và khí thải tốt hơn 4 kỳ ở mọi mặt', 'Không có piston', 'Không có xilanh'], 0, '2-stroke.'),
  ]),

  M(23, 'Bài 19 — Hệ thống nhiên liệu', [
    Q('Hệ thống nhiên liệu có nhiệm vụ?', ['Cung cấp hỗn hợp nhiên liệu - không khí phù hợp cho động cơ ở mọi chế độ', 'Làm mát động cơ', 'Bôi trơn xupap', 'Phát điện'], 0, 'Fuel system.'),
    Q('Bộ phận tạo hỗn hợp ở động cơ xăng đời cũ là?', ['Bộ chế hoà khí (carburetor)', 'Bơm cao áp diesel', 'Bộ tản nhiệt', 'Bộ ly hợp'], 0, 'Carburetor.'),
    Q('Hệ thống phun xăng điện tử (EFI) ưu việt hơn carb ở chỗ?', ['Tỉ lệ nhiên liệu - khí chính xác, tiết kiệm, giảm khí thải', 'Cồng kềnh hơn carb', 'Lạc hậu hơn', 'Khó điều khiển hơn'], 0, 'EFI.'),
    Q('Hệ thống nhiên liệu diesel có?', ['Bơm cao áp và vòi phun phun nhiên liệu vào buồng cháy', 'Bugi đánh lửa', 'Bộ chế hoà khí', 'Cuộn dây cao áp đánh lửa'], 0, 'Diesel fuel system.'),
    Q('Common-rail diesel hiện đại?', ['Tích nhiên liệu áp suất cao trong ống chung, phun nhiều giai đoạn nhờ ECU', 'Không cần bơm cao áp', 'Đốt cháy bằng bugi', 'Phun bằng tay'], 0, 'Common rail.'),
    Q('Bộ lọc nhiên liệu có nhiệm vụ?', ['Loại bỏ cặn bẩn và nước trước khi nhiên liệu vào hệ thống phun/bơm', 'Tăng áp suất', 'Làm mát', 'Phát điện'], 0, 'Fuel filter.'),
  ]),

  M(24, 'Bài 20 — Hệ thống làm mát và hệ thống bôi trơn', [
    Q('Hệ thống làm mát có nhiệm vụ?', ['Giữ động cơ ở nhiệt độ làm việc tối ưu, tránh quá nhiệt', 'Tăng tốc xe', 'Cấp xăng', 'Phát điện'], 0, 'Cooling system.'),
    Q('Hệ thống làm mát bằng nước gồm bộ phận chính?', ['Két nước, bơm nước, van hằng nhiệt, quạt gió, áo nước', 'Bugi và bộ chia điện', 'Bộ lọc gió và bộ điều hoà', 'Bộ tản nhiệt cabin'], 0, 'Water cooling.'),
    Q('Van hằng nhiệt (thermostat) làm việc khi?', ['Đóng khi nguội để động cơ nhanh nóng, mở khi đạt nhiệt độ làm việc để cho nước chảy qua két', 'Luôn mở', 'Luôn đóng', 'Không tồn tại'], 0, 'Thermostat.'),
    Q('Hệ thống bôi trơn có nhiệm vụ?', ['Đưa dầu bôi trơn đến các bề mặt ma sát, giảm mài mòn, làm mát, làm kín', 'Tản nhiệt cabin', 'Phát điện', 'Tăng âm thanh'], 0, 'Lubrication.'),
    Q('Bơm dầu thường là?', ['Bơm bánh răng hoặc rotor, hút dầu từ cacte đẩy đi bôi trơn', 'Bơm nước rửa kính', 'Bơm khí điều hoà', 'Bơm nhiên liệu'], 0, 'Oil pump.'),
    Q('Khi đèn báo áp suất dầu sáng đỏ khi xe đang chạy nên?', ['Tắt máy ngay, kiểm tra mức dầu, không cố chạy tiếp', 'Tăng ga để bù', 'Chạy thêm cho hết xăng', 'Bỏ qua'], 0, 'An toàn.'),
  ]),

  M(25, 'Bài 21 — Cấu tạo chung của ô tô', [
    Q('Ô tô là?', ['Phương tiện giao thông đường bộ có 4 bánh trở lên, dùng động cơ tự hành', 'Đồ chơi trẻ em', 'Tàu thuỷ', 'Máy bay'], 0, 'Automobile.'),
    Q('Các phần chính của ô tô?', ['Động cơ, gầm (chassis), thân vỏ, hệ thống điện và điện tử', 'Chỉ động cơ', 'Chỉ thân vỏ', 'Chỉ bánh xe'], 0, 'Main parts.'),
    Q('Gầm xe (chassis) gồm các hệ thống?', ['Truyền lực, lái, phanh, treo, bánh xe', 'Bộ chế hoà khí và bộ chia điện', 'Bộ phận giải trí cabin và điều hoà', 'Đèn pha và còi'], 0, 'Chassis systems.'),
    Q('Thân vỏ ô tô có vai trò?', ['Tạo không gian cho người và hàng hoá, bảo vệ, đảm bảo khí động học và an toàn va chạm', 'Chỉ trang trí', 'Tăng trọng lượng vô ích', 'Tạo tiếng ồn'], 0, 'Body.'),
    Q('Khung gầm rời (body-on-frame) thường có trên?', ['Xe bán tải, SUV cỡ lớn, xe tải', 'Xe đua F1', 'Xe đạp', 'Xe lăn'], 0, 'Body-on-frame.'),
    Q('Khung gầm liền (unibody/monocoque) phổ biến ở?', ['Hầu hết xe con hiện đại — nhẹ, vận hành tốt', 'Xe tải hạng nặng', 'Tàu hoả', 'Máy kéo nông nghiệp'], 0, 'Unibody.'),
  ]),

  M(26, 'Bài 22 — Hệ thống truyền lực ô tô', [
    Q('Hệ thống truyền lực có nhiệm vụ?', ['Truyền và biến đổi mô-men, công suất từ động cơ đến bánh xe chủ động', 'Bôi trơn động cơ', 'Phát điện', 'Sấy kính'], 0, 'Powertrain.'),
    Q('Ly hợp (clutch) dùng để?', ['Nối/ngắt mô-men từ động cơ đến hộp số khi sang số', 'Phanh xe', 'Sấy nóng cabin', 'Làm mát động cơ'], 0, 'Clutch.'),
    Q('Hộp số có nhiệm vụ?', ['Thay đổi tỉ số truyền và mô-men phù hợp với điều kiện chạy', 'Phát điện', 'Đèn pha', 'Phun nhiên liệu'], 0, 'Gearbox.'),
    Q('Hộp số tự động (AT) khác hộp số tay (MT) ở?', ['Tự động chuyển số dựa trên tốc độ, tải, vị trí chân ga', 'Cần đạp côn thường xuyên hơn', 'Không thể vận hành xe', 'Không có số nào'], 0, 'AT vs MT.'),
    Q('Vi sai (differential) cho phép?', ['Hai bánh dẫn động quay khác tốc độ khi vào cua', 'Hai bánh quay cùng tốc độ tuyệt đối', 'Tăng tốc tuyến tính tuyệt đối', 'Phanh chống bó'], 0, 'Differential.'),
    Q('Cầu chủ động (drive axle) chứa?', ['Vi sai và truyền lực cuối, dẫn động bánh xe', 'Bộ tản nhiệt', 'Bộ lọc gió', 'Bộ chia điện'], 0, 'Drive axle.'),
  ]),

  M(27, 'Bài 23 — Hệ thống lái và hệ thống phanh', [
    Q('Hệ thống lái có nhiệm vụ?', ['Điều khiển hướng chuyển động của xe', 'Tăng tốc', 'Phanh xe', 'Cấp nhiên liệu'], 0, 'Steering.'),
    Q('Cơ cấu lái phổ biến trên ô tô con?', ['Cơ cấu trục răng - thanh răng (rack and pinion)', 'Cơ cấu bánh răng nón', 'Cơ cấu xích kéo', 'Cơ cấu lò xo lá'], 0, 'Rack and pinion.'),
    Q('Trợ lực lái thuỷ lực/điện giúp?', ['Giảm lực cần thiết khi đánh tay lái', 'Tăng lực đánh lái', 'Khoá vô lăng', 'Phanh xe'], 0, 'Power steering.'),
    Q('Hệ thống phanh có nhiệm vụ?', ['Giảm tốc độ hoặc dừng xe an toàn theo ý muốn lái xe', 'Tăng tốc xe', 'Lái xe', 'Cấp xăng'], 0, 'Brake.'),
    Q('Phanh đĩa khác phanh tang trống ở chỗ?', ['Tản nhiệt tốt hơn, hiệu quả cao, ổn định khi phanh liên tục', 'Tản nhiệt kém hơn nhiều', 'Chỉ dùng cho xe tải', 'Không hiệu quả'], 0, 'Disc brake.'),
    Q('ABS (Anti-lock Braking System) giúp?', ['Chống bó cứng phanh, giữ khả năng đánh lái khi phanh khẩn cấp', 'Tăng tốc tự động', 'Khoá bánh xe vĩnh viễn', 'Sang số tự động'], 0, 'ABS.'),
  ]),

  M(28, 'Bài 24 — Hệ thống điện và điện tử trên ô tô', [
    Q('Ắc-quy (battery) trên ô tô có nhiệm vụ?', ['Tích trữ điện, cấp điện cho khởi động và phụ tải khi động cơ chưa chạy', 'Phát điện cho lưới điện', 'Làm mát động cơ', 'Bôi trơn động cơ'], 0, 'Battery.'),
    Q('Máy phát (alternator) trên ô tô?', ['Tạo điện khi động cơ chạy để nạp ắc-quy và cấp tải', 'Tiêu thụ điện', 'Khởi động động cơ', 'Phanh xe'], 0, 'Alternator.'),
    Q('Máy khởi động (starter) có nhiệm vụ?', ['Quay trục khuỷu để khởi động động cơ', 'Phanh xe', 'Phát điện chính', 'Cấp nhiên liệu'], 0, 'Starter.'),
    Q('Hộp điều khiển động cơ (ECU) là?', ['Bộ xử lý điều khiển phun nhiên liệu, đánh lửa, khí xả… dựa trên cảm biến', 'Bộ tản nhiệt', 'Bộ lọc gió', 'Bộ chia điện cơ học'], 0, 'ECU.'),
    Q('Cảm biến phổ biến trên ô tô?', ['Oxy, vị trí trục khuỷu, lưu lượng khí, nhiệt độ nước…', 'Chỉ cảm biến nhiệt độ cabin', 'Chỉ cảm biến mưa', 'Không có cảm biến'], 0, 'Sensors.'),
    Q('Mạng giao tiếp CAN bus trên ô tô dùng để?', ['Kết nối các ECU/cảm biến để trao đổi dữ liệu theo chuẩn', 'Phát sóng radio AM', 'Sấy kính sau', 'Phanh tay điện tử trực tiếp'], 0, 'CAN bus.'),
  ]),

  M(29, 'Bài 25 — An toàn khi sử dụng phương tiện và bảo dưỡng ô tô', [
    Q('Bảo dưỡng định kỳ ô tô nhằm?', ['Kéo dài tuổi thọ, đảm bảo an toàn, giảm hỏng đột xuất', 'Tăng phát thải', 'Tốn tiền vô ích', 'Phá xe'], 0, 'PM.'),
    Q('Hạng mục bảo dưỡng phổ biến?', ['Thay dầu máy, lọc dầu, lọc gió, kiểm tra phanh, lốp, nước làm mát', 'Sơn lại toàn bộ mỗi tuần', 'Thay động cơ mỗi tháng', 'Bỏ qua tất cả'], 0, 'PM items.'),
    Q('Khi tham gia giao thông bằng ô tô cần?', ['Thắt dây an toàn, không sử dụng điện thoại khi lái, tuân thủ luật', 'Vượt đèn đỏ', 'Bấm còi liên tục', 'Lái khi mệt'], 0, 'An toàn GT.'),
    Q('Túi khí (airbag) hoạt động khi?', ['Cảm biến phát hiện va chạm mạnh, kích nổ trong vài mili-giây bảo vệ người ngồi', 'Khi mở cửa', 'Khi bấm còi', 'Khi đỗ xe'], 0, 'Airbag.'),
    Q('Lốp xe nên?', ['Kiểm tra áp suất định kỳ, đảo lốp, thay khi mòn quá vạch', 'Bơm cực căng tuỳ ý', 'Để hết hơi cho êm', 'Dùng đến khi nổ'], 0, 'Tires.'),
    Q('Khi xe gặp sự cố nóng máy bất thường nên?', ['Tấp vào lề an toàn, tắt máy, kiểm tra nước làm mát sau khi nguội', 'Mở nắp két nước ngay khi máy còn nóng', 'Cố chạy đến đích', 'Tăng ga để mát'], 0, 'Xử lý sự cố.'),
  ]),

  M(30, 'Ôn tập chương VI - VII', [
    Q('Chu trình 4 kỳ theo thứ tự?', ['Nạp - Nén - Cháy giãn nở - Xả', 'Xả - Nén - Nạp - Cháy', 'Cháy - Nạp - Nén - Xả', 'Nén - Nạp - Xả - Cháy'], 0, '4-stroke.'),
    Q('Bộ phận làm mát động cơ?', ['Két nước, bơm nước, van hằng nhiệt, quạt gió', 'Bugi và ECU', 'Bộ tản nhiệt cabin', 'Bộ chia điện cơ học'], 0, 'Cooling.'),
    Q('Hộp số có nhiệm vụ?', ['Biến đổi mô-men và tỉ số truyền', 'Phát điện', 'Đèn pha', 'Phun xăng'], 0, 'Gearbox.'),
    Q('ABS có chức năng?', ['Chống bó cứng phanh để giữ khả năng đánh lái', 'Tăng tốc', 'Đánh lửa', 'Phun xăng'], 0, 'ABS.'),
    Q('Máy phát điện ô tô có nhiệm vụ?', ['Tạo điện khi động cơ chạy, nạp ắc-quy', 'Tiêu thụ điện duy nhất', 'Khởi động động cơ', 'Cấp xăng'], 0, 'Alternator.'),
    Q('Diesel đốt cháy nhiên liệu nhờ?', ['Nén không khí đến nhiệt độ cao rồi phun nhiên liệu', 'Bugi đánh lửa', 'Tia laser', 'Sấy điện'], 0, 'Diesel.'),
  ]),

  M(31, 'Ôn tập tổng hợp Phần 2', [
    Q('ĐCĐT biến đổi?', ['Hoá năng nhiên liệu thành cơ năng', 'Điện năng thành quang năng', 'Quang năng thành cơ năng', 'Cơ năng thành điện năng duy nhất'], 0, 'IC engine.'),
    Q('Hệ thống truyền lực ô tô gồm?', ['Ly hợp, hộp số, trục các-đăng, vi sai, bán trục', 'Bộ tản nhiệt và quạt', 'Bộ lọc gió và bugi', 'Túi khí và dây an toàn'], 0, 'Powertrain.'),
    Q('Thanh răng - bánh răng là cơ cấu trong?', ['Hệ thống lái', 'Hệ thống phanh', 'Hệ thống làm mát', 'Hệ thống bôi trơn'], 0, 'Rack & pinion.'),
    Q('Common rail là công nghệ của?', ['Hệ thống nhiên liệu diesel hiện đại', 'Hệ thống đánh lửa xăng', 'Hệ thống lái', 'Hệ thống phanh'], 0, 'Common rail.'),
    Q('ECU đọc tín hiệu từ?', ['Các cảm biến (oxy, vị trí trục khuỷu, nhiệt độ…)', 'Đèn pha', 'Còi xe', 'Gạt mưa'], 0, 'Sensors.'),
    Q('Khi cấp cứu xe quá nhiệt KHÔNG nên?', ['Mở nắp két nước ngay khi máy còn rất nóng (nguy hiểm bỏng)', 'Tấp vào lề an toàn', 'Tắt máy', 'Chờ máy nguội'], 0, 'An toàn.'),
  ]),

  M(32, 'Ôn tập ứng dụng - Xe điện và xu hướng', [
    Q('Xe điện (BEV) khác xe đốt trong ở chỗ?', ['Sử dụng động cơ điện và pin thay cho ĐCĐT và bình xăng', 'Vẫn dùng xăng', 'Vẫn dùng diesel', 'Không có động cơ'], 0, 'BEV.'),
    Q('Ưu điểm xe điện?', ['Không phát thải tại chỗ, vận hành êm, hiệu suất cao', 'Tiếng ồn lớn', 'Phát thải nhiều', 'Hiệu suất thấp'], 0, 'EV pros.'),
    Q('Thách thức xe điện?', ['Quãng đường, hạ tầng sạc, giá pin, xử lý pin sau sử dụng', 'Không có thách thức', 'Quá rẻ', 'Quá nhẹ'], 0, 'EV cons.'),
    Q('Xe hybrid (HEV) là?', ['Kết hợp ĐCĐT và động cơ điện để tối ưu nhiên liệu', 'Chỉ điện', 'Chỉ xăng', 'Không có động cơ'], 0, 'HEV.'),
    Q('Pin lithium-ion trên xe điện cần?', ['Hệ quản lý pin (BMS) kiểm soát nhiệt và điện áp, an toàn', 'Không cần kiểm soát', 'Sạc đầy không cần ngắt', 'Để ngoài nắng to'], 0, 'BMS.'),
    Q('Hệ thống tự lái (autonomous driving) dựa trên?', ['Cảm biến (camera, radar, lidar) + AI + bản đồ số', 'Chỉ tay lái cơ học', 'Chỉ định vị GPS', 'Không cần cảm biến'], 0, 'ADAS/AD.'),
  ]),

  M(33, 'Ôn tập cuối học kì 2 (lý thuyết tổng hợp)', [
    Q('Phương pháp đúc phù hợp tạo ra?', ['Vật có hình dạng phức tạp, đặc biệt với chi tiết lớn', 'Linh kiện điện tử siêu nhỏ', 'Sợi quang', 'Bộ nhớ RAM'], 0, 'Đúc.'),
    Q('Inox 304 là loại?', ['Thép không gỉ chứa Cr và Ni, chống ăn mòn tốt', 'Hợp kim nhôm', 'Đồng thau', 'Gang xám'], 0, 'Inox.'),
    Q('Máy CNC điều khiển bằng?', ['Chương trình số (G-code)', 'Quay tay liên tục', 'Pedal đạp chân duy nhất', 'Giọng nói cảm tính'], 0, 'CNC G-code.'),
    Q('Hệ thống nhiên liệu xăng hiện đại dùng?', ['Phun xăng điện tử (EFI/GDI)', 'Bộ chế hoà khí cơ học', 'Bơm tay', 'Phễu lọc rỗng'], 0, 'EFI.'),
    Q('Ly hợp và hộp số thuộc?', ['Hệ thống truyền lực', 'Hệ thống lái', 'Hệ thống phanh', 'Hệ thống làm mát'], 0, 'Powertrain.'),
    Q('Túi khí và dây an toàn thuộc?', ['Hệ thống an toàn bị động trên ô tô', 'Hệ thống truyền lực', 'Hệ thống lái', 'Hệ thống làm mát'], 0, 'Passive safety.'),
  ]),

  M(34, 'Ôn tập tổng hợp cuối năm', [
    Q('Gang khác thép ở?', ['%C: gang > 2,14%; thép ≤ 2,14%', 'Màu sắc', 'Trọng lượng riêng', 'Không khác'], 0, '%C.'),
    Q('Composite tận dụng?', ['Ưu điểm của các thành phần kết hợp', 'Khuyết điểm', 'Trọng lượng tăng vô ích', 'Khó tạo hình'], 0, 'Composite.'),
    Q('Máy phay gia công chủ yếu?', ['Bề mặt phẳng, rãnh, biên dạng — bằng dao quay', 'Mặt tròn xoay', 'Lỗ vuông trực tiếp', 'Đường tự do bằng tay không dao'], 0, 'Milling.'),
    Q('Robot công nghiệp giúp?', ['Tăng năng suất, chính xác, an toàn ở môi trường độc hại', 'Giảm chất lượng', 'Tăng tai nạn', 'Bỏ tự động hoá'], 0, 'Robot.'),
    Q('Trong 4 kỳ, kỳ sinh công là?', ['Cháy - giãn nở', 'Nạp', 'Nén', 'Xả'], 0, 'Power stroke.'),
    Q('ABS hỗ trợ?', ['Phanh an toàn không bó cứng bánh', 'Tăng tốc tự động', 'Sang số tự động', 'Sấy kính sau'], 0, 'ABS.'),
  ]),

  M(35, 'Kiểm tra cuối học kì 2 - Tổng ôn cả năm Công nghệ 11', [
    Q('Vật liệu nào nhẹ, chống ăn mòn nhờ lớp oxit bảo vệ, dùng cho khung máy bay nhẹ và nhiều chi tiết xe hơi?', ['Nhôm (Al)', 'Gang xám', 'Đồng đỏ', 'Chì'], 0, 'Nhôm.'),
    Q('Phương pháp gia công bằng dao quay phay rãnh, biên dạng?', ['Phay', 'Tiện', 'Khoan', 'Đúc'], 0, 'Milling.'),
    Q('Hệ thống phanh ABS giúp?', ['Chống bó cứng phanh, giữ khả năng đánh lái khi phanh khẩn cấp', 'Tăng tốc', 'Sang số', 'Sấy kính'], 0, 'ABS.'),
    Q('ECU động cơ ô tô có vai trò?', ['Điều khiển phun nhiên liệu, đánh lửa, khí xả dựa trên cảm biến', 'Phát điện duy nhất', 'Làm mát', 'Bôi trơn'], 0, 'ECU.'),
    Q('Xe điện ưu việt ở chỗ?', ['Không phát thải tại chỗ, vận hành êm', 'Tiếng ồn lớn', 'Phát thải cao tại chỗ', 'Hiệu suất rất thấp'], 0, 'EV.'),
    Q('Khi sử dụng xe an toàn cần?', ['Thắt dây an toàn, tuân thủ luật giao thông, bảo dưỡng định kỳ', 'Vượt đèn đỏ', 'Bỏ qua bảo dưỡng', 'Lái khi say'], 0, 'An toàn.'),
  ]),
];

export const H11CN_SCENARIOS = indexBy(H11CN_WEEKS);
