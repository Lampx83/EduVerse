// ============================================================
// Lớp 10 · CÔNG NGHỆ (định hướng Cơ khí) — 35 tuần
// Bám CTGD 2018 (CN 10 - Cơ khí: Vẽ kỹ thuật → Thiết kế kỹ thuật → Gia công kim loại → ATLĐ).
// ID prefix: "H10CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10CN', 'cong-nghe', n, title, qs, opts);

export const H10CN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Khái quát về công nghệ', [
    Q('Công nghệ là?', ['Ứng dụng khoa học để tạo ra sản phẩm, dịch vụ', 'Khoa học thuần', 'Nghệ thuật', 'Triết học'], 0, 'Công nghệ = ứng dụng tri thức KHKT vào sản xuất, đời sống.'),
    Q('Vai trò của công nghệ trong đời sống?', ['Chỉ phục vụ giải trí, không liên quan sản xuất', 'Làm con người mất việc làm hoàn toàn', 'Tăng năng suất, tiện nghi, chất lượng cuộc sống', 'Chỉ tốn tiền'], 2, 'Công nghệ giúp tăng năng suất, tiện nghi, chất lượng cuộc sống.'),
    Q('Cách mạng công nghiệp 4.0 đặc trưng bởi?', ['Hơi nước', 'Điện và động cơ đốt trong (CMCN 2.0)', 'Dây chuyền sản xuất', 'AI, IoT, big data, robot'], 3, 'CMCN 4.0: AI, IoT, big data, blockchain, robot, in 3D.'),
    Q('Nghề cơ khí làm gì?', ['Trồng cây', 'Lái xe', 'Dạy học', 'Thiết kế, chế tạo, gia công, sửa chữa máy móc kim loại'], 3, 'Cơ khí: thiết kế, chế tạo, gia công và sửa chữa máy móc, thiết bị kim loại.'),
    Q('Ngành cơ khí có vai trò?', ['Phụ trợ', 'Chỉ trang trí', 'Chỉ phục vụ ngành xây dựng dân dụng', 'Nền tảng cho công nghiệp chế tạo'], 3, 'Cơ khí là nền tảng cho mọi ngành công nghiệp chế tạo.'),
    Q('Ứng dụng cơ khí trong đời sống?', ['Chỉ ô tô', 'Chỉ dùng trong các nhà máy lớn', 'Ô tô, máy bay, máy gia dụng, thiết bị y tế', 'Chỉ máy bay'], 2, 'Cơ khí có mặt mọi nơi: ô tô, máy bay, máy gia dụng, thiết bị y tế, công cụ.'),
  ]),

  M(2, 'Vẽ kỹ thuật - giới thiệu', [
    Q('Vẽ kỹ thuật là?', ['Vẽ tự do', 'Ngôn ngữ chung của kỹ thuật để mô tả vật thể', 'Vẽ truyện', 'Vẽ tranh'], 1, 'Vẽ kỹ thuật là ngôn ngữ chung của ngành kỹ thuật, mô tả chính xác vật thể.'),
    Q('Bản vẽ kỹ thuật được vẽ trên?', ['Vải bạt hoặc vải canvas', 'Giấy A4, A3 hoặc phần mềm CAD', 'Tấm gỗ dán hoặc ván ép', 'Giấy báo'], 1, 'Bản vẽ vẽ trên giấy khổ A4, A3, A2... hoặc bản vẽ số trên phần mềm CAD.'),
    Q('Khổ giấy A4 có kích thước?', ['210 × 297 mm', '500 × 700 mm', '297 × 420 mm', '100 × 100 mm'], 0, 'A4: 210 mm × 297 mm; A3: 297 × 420; A2: 420 × 594.'),
    Q('Tỉ lệ bản vẽ là?', ['Sai số', 'Kích thước thực', 'Tỉ số kích thước vẽ và kích thước thực', 'Kích thước vẽ'], 2, 'Tỉ lệ = kích thước trên bản vẽ / kích thước thật.'),
    Q('Tỉ lệ 1:1 nghĩa là?', ['Vẽ nhỏ hơn', 'Vẽ với tỉ lệ ngẫu nhiên do người vẽ chọn', 'Vẽ lớn hơn', 'Vẽ bằng kích thước thật'], 3, 'Tỉ lệ 1:1 là vẽ với kích thước bằng kích thước thật.'),
    Q('Tỉ lệ 1:5 nghĩa là?', ['Vẽ thu nhỏ 5 lần', 'Không xác định', 'Bằng kích thước thật', 'Vẽ phóng to 5 lần'], 0, 'Tỉ lệ 1:5 là 1 đơn vị trên bản vẽ = 5 đơn vị thực.'),
  ]),

  M(3, 'Tiêu chuẩn bản vẽ - đường nét và chữ', [
    Q('Đường liền đậm dùng để vẽ?', ['Đường kích thước', 'Cạnh khuất', 'Cạnh thấy của vật thể', 'Đường tâm'], 2, 'Nét liền đậm vẽ cạnh thấy (cạnh nhìn thấy được).'),
    Q('Đường đứt mảnh dùng vẽ?', ['Đường tâm', 'Trục đối xứng', 'Cạnh khuất, đường khuất', 'Cạnh thấy'], 2, 'Đường đứt mảnh vẽ cạnh khuất (không nhìn thấy).'),
    Q('Đường chấm gạch mảnh dùng vẽ?', ['Cạnh khuất', 'Cạnh thấy', 'Trục đối xứng, đường tâm', 'Kích thước'], 2, 'Chấm gạch mảnh: trục đối xứng, đường tâm tròn.'),
    Q('Chiều dày nét liền đậm so với mảnh?', ['Bằng nhau', 'Khoảng 2 lần', '1/2 lần', '5 lần'], 1, 'Nét đậm dày ~2 lần nét mảnh (tỉ lệ 2:1).'),
    Q('Chữ viết trên bản vẽ thường?', ['Viết tay tự do theo nét chữ cá nhân', 'Tô màu', 'Cong vẹo', 'Đứng, đều, in hoa rõ ràng'], 3, 'Chữ viết kỹ thuật: đứng (hoặc nghiêng 75°), in đậm, dễ đọc.'),
    Q('Ký hiệu vật liệu thường ghi ở?', ['Lề trên', 'Giữa bản vẽ', 'Lề dưới', 'Khung tên (title block)'], 3, 'Khung tên ghi tên chi tiết, vật liệu, người vẽ, tỉ lệ.'),
  ]),

  M(4, 'Hình chiếu vuông góc', [
    Q('Hình chiếu là?', ['Hình ảnh vật thể trên mặt phẳng chiếu', 'Bóng đổ của vật thể dưới ánh sáng mặt trời', 'Bản đồ', 'Bức tranh phối cảnh có màu sắc thực'], 0, 'Hình chiếu = hình ảnh thu được khi chiếu vật thể lên mặt phẳng chiếu.'),
    Q('Phép chiếu vuông góc dùng?', ['Tia chiếu đồng quy', 'Tia chiếu vuông góc với mặt phẳng chiếu', 'Tia chiếu nghiêng', 'Không tia chiếu'], 1, 'Phép chiếu vuông góc (orthographic): tia chiếu vuông góc với MP chiếu.'),
    Q('Hình chiếu đứng cho thấy?', ['Mặt trên', 'Mặt sau', 'Mặt bên', 'Mặt trước của vật thể'], 3, 'Hình chiếu đứng (front view): nhìn từ phía trước.'),
    Q('Hình chiếu bằng cho thấy?', ['Mặt bên', 'Mặt trên của vật thể', 'Mặt sau', 'Mặt trước'], 1, 'Hình chiếu bằng (top view): nhìn từ trên xuống.'),
    Q('Hình chiếu cạnh cho thấy?', ['Mặt sau', 'Mặt bên của vật thể', 'Mặt trước', 'Mặt trên'], 1, 'Hình chiếu cạnh (side view): nhìn từ bên phải/trái.'),
    Q('Trên bản vẽ vẽ tối thiểu mấy hình chiếu?', ['3 hình chiếu vuông góc', '1', '10', '5'], 0, '3 hình chiếu chính: đứng, bằng, cạnh đủ mô tả hầu hết vật thể.'),
  ]),

  M(5, 'Hình chiếu trục đo', [
    Q('Hình chiếu trục đo dùng để?', ['Thể hiện vật thể 3D trực quan', 'Tô màu', 'Chỉ 2D', 'Đo kích thước'], 0, 'Trục đo (axonometric) thể hiện 3D trực quan trên 1 hình.'),
    Q('Hình chiếu trục đo đều có?', ['3 trục khác nhau', '2 trục', '1 trục', '3 trục đo và 3 hệ số biến dạng bằng nhau'], 3, 'Trục đo đều (isometric): 3 trục cách nhau 120°, hệ số biến dạng bằng nhau.'),
    Q('Hình chiếu trục đo vuông góc đều thường dùng?', ['Đo chính xác', 'Biểu diễn vật thể đơn giản', 'Bản vẽ chính thức', 'Sản xuất'], 1, 'Trục đo đều dùng để biểu diễn trực quan, đơn giản, dễ vẽ.'),
    Q('Hệ số biến dạng theo trục là?', ['Kích thước thực', 'Sai số đo', 'Tỉ số kích thước trên hình chiếu trục đo và kích thước thực', 'Kích thước vẽ'], 2, 'Hệ số biến dạng quy định kích thước theo từng trục bị thu hay phóng bao nhiêu.'),
    Q('Trong hình chiếu trục đo, hình tròn thường vẽ thành?', ['Hình tròn', 'Đa giác', 'Hình vuông', 'Hình elip'], 3, 'Hình tròn trong không gian biểu diễn thành elip trên hình chiếu trục đo.'),
    Q('Hình chiếu trục đo có ưu điểm?', ['Đơn giản nhất', 'Đo kích thước trực tiếp bằng thước thẳng dễ', 'Chính xác tuyệt đối', 'Trực quan, dễ hình dung'], 3, 'Trục đo ưu điểm: trực quan; nhược: khó đo kích thước chính xác.'),
  ]),

  M(6, 'Ghi kích thước trên bản vẽ', [
    Q('Ghi kích thước cần?', ['Ghi tùy theo thói quen của người vẽ', 'Không cần', 'Đầy đủ, rõ ràng, đúng quy định', 'Chỉ vài kích thước'], 2, 'Kích thước phải đầy đủ, không trùng lặp, đúng quy định.'),
    Q('Đơn vị kích thước mặc định trên bản vẽ?', ['Inch (in)', 'Milimet (mm)', 'Mét (m)', 'Centimet (cm)'], 1, 'Đơn vị mặc định trong VTC là mm; không ghi đơn vị nếu là mm.'),
    Q('Đường kích thước có?', ['Không có mũi tên', '2 mũi tên ở 2 đầu', 'Chấm tròn', '1 mũi tên'], 1, 'Đường kích thước có 2 mũi tên chỉ giới hạn.'),
    Q('Đường gióng dùng để?', ['Trang trí', 'Tô bóng', 'Đánh dấu', 'Xác định phạm vi đo'], 3, 'Đường gióng (extension line) kéo từ vật thể đến đường kích thước.'),
    Q('Kích thước đường kính ký hiệu?', ['∅', 'R (chỉ bán kính cung tròn)', '□ (cạnh vuông)', 'Δ (chênh lệch sai số)'], 0, 'Đường kính dùng ∅ (vd ∅20); R cho bán kính.'),
    Q('Kích thước bán kính ký hiệu?', ['∅ (ký hiệu đường kính)', 'S (chỉ độ dày tấm)', 'R', '□ (cạnh hình vuông)'], 2, 'Bán kính dùng R (vd R10); đường kính dùng ∅.'),
  ]),

  M(7, 'Đọc và phân tích bản vẽ chi tiết', [
    Q('Bản vẽ chi tiết thể hiện?', ['1 chi tiết của sản phẩm', 'Toàn bộ sản phẩm', 'Sơ đồ lắp', 'Sơ đồ mạch'], 0, 'Bản vẽ chi tiết = bản vẽ của 1 chi tiết riêng để chế tạo.'),
    Q('Khung tên bản vẽ chứa thông tin?', ['Chỉ tên', 'Chỉ kích thước', 'Tên chi tiết, vật liệu, tỉ lệ, người vẽ', 'Chỉ tỉ lệ'], 2, 'Khung tên: tên chi tiết, vật liệu, tỉ lệ, số bản vẽ, người vẽ - duyệt.'),
    Q('Đọc bản vẽ cần xem theo thứ tự?', ['Đọc tự do, phần nào trước cũng được', 'Chỉ hình chiếu', 'Khung tên → hình chiếu → kích thước → yêu cầu kỹ thuật', 'Đảo ngược'], 2, 'Đọc bản vẽ: khung tên → hình chiếu (hình dung 3D) → kích thước → yêu cầu kỹ thuật.'),
    Q('Yêu cầu kỹ thuật trên bản vẽ ghi?', ['Chỉ kích thước', 'Chỉ vật liệu', 'Độ chính xác, độ nhám, xử lý nhiệt', 'Chỉ tỉ lệ'], 2, 'Yêu cầu kỹ thuật: dung sai, độ nhám bề mặt, xử lý nhiệt, mạ.'),
    Q('Dung sai là?', ['Sai số cho phép của kích thước', 'Tỉ lệ giữa kích thước bản vẽ và thực', 'Đường tâm', 'Kích thước thực'], 0, 'Dung sai: phạm vi sai số cho phép giữa kích thước thực và kích thước danh nghĩa.'),
    Q('Độ nhám bề mặt được ký hiệu?', ['Bằng ∅', 'Bằng dấu chấm', 'Bằng ký hiệu tam giác hoặc Ra', 'Bằng R'], 2, 'Độ nhám: dùng dấu tam giác cũ hoặc ký hiệu Ra (vd Ra 1.6).'),
  ]),

  M(8, 'Bản vẽ lắp', [
    Q('Bản vẽ lắp thể hiện?', ['1 chi tiết', 'Sơ đồ mạch', 'Sự lắp ghép các chi tiết thành sản phẩm', 'Mặt cắt'], 2, 'Bản vẽ lắp (assembly drawing) thể hiện sản phẩm gồm nhiều chi tiết ghép.'),
    Q('Trên bản vẽ lắp có?', ['Chỉ vật liệu', 'Chỉ kích thước', 'Chỉ hình', 'Bảng kê các chi tiết'], 3, 'Bản vẽ lắp có bảng kê (BOM): số thứ tự, tên chi tiết, số lượng, vật liệu.'),
    Q('Số chỉ vị trí chi tiết trên bản vẽ lắp?', ['Mũi tên', 'Ký hiệu chữ', 'Chữ số', 'Vòng tròn có số hiệu, nối bằng đường dóng'], 3, 'Mỗi chi tiết được đánh số hiệu trong vòng tròn, kéo về vị trí trên hình.'),
    Q('Bản vẽ lắp cần thể hiện?', ['Chỉ kích thước', 'Chỉ độ nhám', 'Chỉ vật liệu', 'Mối lắp ghép giữa các chi tiết'], 3, 'Bản vẽ lắp thể hiện cách các chi tiết khớp nối, lắp ghép với nhau.'),
    Q('Bản vẽ lắp phục vụ?', ['Lắp ráp, sửa chữa, hướng dẫn', 'Trang trí', 'Tô màu', 'Chế tạo chi tiết'], 0, 'Bản vẽ lắp giúp công nhân biết cách lắp ráp đúng.'),
    Q('Mặt cắt trên bản vẽ lắp dùng để?', ['Đo kích thước', 'Trang trí', 'Tô bóng', 'Thể hiện cấu trúc bên trong'], 3, 'Mặt cắt cho thấy chi tiết bên trong các mối lắp ghép.'),
  ]),

  M(9, 'Vẽ kỹ thuật bằng CAD', [
    Q('CAD viết tắt là?', ['Computer-Aided Design', 'Cad Auto Design', 'Central Auto Drive', 'Computer-Auto Drawing'], 0, 'CAD = Computer-Aided Design — thiết kế có máy tính hỗ trợ.'),
    Q('Phần mềm CAD phổ biến?', ['Photoshop', 'Illustrator', 'Word, Excel', 'AutoCAD, SolidWorks, Inventor, Fusion 360'], 3, 'Phần mềm CAD: AutoCAD (2D), SolidWorks, Inventor, Fusion 360 (3D).'),
    Q('Ưu điểm của CAD so với vẽ tay?', ['Kém chính xác', 'Chậm hơn', 'Chính xác, dễ sửa, dễ chia sẻ', 'Khó dùng'], 2, 'CAD: chính xác cao, dễ sửa, dễ chia sẻ, kết nối với CAM/CNC.'),
    Q('Bản vẽ CAD có thể xuất ra?', ['Chỉ DWG', 'Không xuất được', 'Chỉ in giấy', 'File PDF, DWG, in giấy'], 3, 'CAD xuất nhiều định dạng: DWG, DXF, PDF, STEP, in trực tiếp.'),
    Q('CAM là?', ['Computer-Aided Manufacturing', 'Computer-Auto Mode', 'Camera', 'Central Auto Machine'], 0, 'CAM = sản xuất có máy tính hỗ trợ, dùng để tạo G-code cho máy CNC.'),
    Q('Quy trình CAD/CAM/CNC giúp?', ['Tốn nhân công', 'Tự động hoá chế tạo, độ chính xác cao', 'Chậm hơn', 'Không chính xác'], 1, 'CAD → CAM → CNC: thiết kế → sinh G-code → gia công tự động chính xác.'),
  ]),

  M(10, 'Thiết kế kỹ thuật - khái quát', [
    Q('Thiết kế kỹ thuật là?', ['Sao chép', 'Quá trình giải quyết vấn đề kỹ thuật bằng sản phẩm', 'Mô phỏng', 'Vẽ ý tưởng tự do không theo quy trình'], 1, 'Thiết kế kỹ thuật: quy trình có hệ thống để giải quyết vấn đề bằng sản phẩm.'),
    Q('Quy trình thiết kế gồm các bước?', ['Xác định vấn đề → ý tưởng → thiết kế → chế tạo → đánh giá', 'Chỉ vẽ', 'Chỉ đánh giá', 'Chỉ chế tạo'], 0, 'Quy trình: vấn đề - ý tưởng - thiết kế chi tiết - chế tạo - đánh giá - cải tiến.'),
    Q('Bước xác định vấn đề cần?', ['Vẽ ngay', 'Làm rõ nhu cầu, ràng buộc', 'Đánh giá ngay', 'Chế tạo ngay'], 1, 'Bước 1: xác định nhu cầu, đối tượng, ràng buộc, mục tiêu thiết kế.'),
    Q('Brainstorming là?', ['Sửa lỗi', 'Đánh giá', 'Phân tích', 'Phương pháp tạo nhiều ý tưởng tự do'], 3, 'Brainstorming: kỹ thuật phát ý tưởng tự do, không phê phán ban đầu.'),
    Q('Sau khi có ý tưởng, bước tiếp là?', ['Phân tích, chọn ý tưởng tốt nhất, vẽ chi tiết', 'Chế tạo ngay', 'Bán ngay', 'Vứt bỏ'], 0, 'Phân tích ưu - nhược, chọn ý tưởng tốt nhất rồi vẽ chi tiết để chế tạo.'),
    Q('Đánh giá sản phẩm dựa trên?', ['Chỉ rẻ', 'Chức năng, an toàn, thẩm mỹ, giá thành', 'Chỉ chức năng', 'Chỉ đẹp'], 1, 'Tiêu chí: chức năng đạt yêu cầu, an toàn, dễ dùng, thẩm mỹ, giá thành hợp lý.'),
  ]),

  M(11, 'Phương pháp thiết kế sáng tạo', [
    Q('Sáng tạo trong thiết kế là?', ['Đưa ra giải pháp mới và hữu ích', 'Lặp lại', 'Không thay đổi', 'Sao chép'], 0, 'Sáng tạo: kết hợp tri thức tạo ra giải pháp mới, có giá trị.'),
    Q('Tư duy thiết kế (Design Thinking) gồm?', ['Đồng cảm, định nghĩa, ý tưởng, mẫu thử, thử nghiệm', 'Vẽ - bán', 'Chỉ thử nghiệm', 'Chỉ vẽ'], 0, 'Design Thinking: Empathize, Define, Ideate, Prototype, Test.'),
    Q('Prototype (mẫu thử) dùng để?', ['Trang trí', 'Kiểm tra ý tưởng trước khi sản xuất hàng loạt', 'Vứt bỏ', 'Bán ngay'], 1, 'Prototype giúp kiểm tra thiết kế, phát hiện vấn đề trước khi sản xuất hàng loạt.'),
    Q('In 3D giúp gì cho thiết kế?', ['Chỉ in được vật thể đơn giản và phẳng', 'Tạo nhanh prototype phức tạp', 'Không có ích', 'Tốn kém luôn'], 1, '3D printing tạo prototype nhanh, chi phí thấp, hình dạng phức tạp.'),
    Q('Phản hồi của người dùng giúp?', ['Cải tiến sản phẩm', 'Làm chậm quá trình phát triển sản phẩm', 'Không quan tâm', 'Khiến nhà thiết kế bị áp lực vô lý'], 0, 'Phản hồi người dùng (UX research) là nguồn quan trọng cải tiến sản phẩm.'),
    Q('Thiết kế bền vững (sustainable design) ưu tiên?', ['Sản xuất nhanh, giao hàng đúng hạn', 'Vật liệu tái chế, tiết kiệm năng lượng', 'Đẹp duy nhất', 'Vật liệu đắt'], 1, 'Thiết kế bền vững: ít tài nguyên, tái chế, tuổi thọ cao, ít ô nhiễm.'),
  ]),

  M(12, 'Vật liệu cơ khí - Kim loại đen', [
    Q('Kim loại đen gồm?', ['Gang và thép', 'Đồng và nhôm', 'Vàng và bạc', 'Chì và kẽm'], 0, 'Kim loại đen = thép + gang (gốc từ sắt - Fe).'),
    Q('Thép có thành phần chính?', ['Sắt và đồng', 'Sắt và niken', 'Sắt và nhôm', 'Sắt và cacbon (<2,14%)'], 3, 'Thép: hợp kim Fe-C với C < 2,14%.'),
    Q('Gang có thành phần?', ['Sắt thuần', 'Sắt và đồng', 'Sắt và cacbon (>2,14%)', 'Sắt và niken'], 2, 'Gang: hợp kim Fe-C với C 2,14% - 6,67% (thường 2-4%).'),
    Q('Thép dùng để?', ['Đồ trang sức', 'Sản xuất linh kiện điện tử siêu nhỏ', 'Trang trí', 'Chế tạo máy móc, kết cấu công trình'], 3, 'Thép dùng làm máy, kết cấu, ô tô, tàu, cầu, đường ray.'),
    Q('Gang đặc tính?', ['Chịu kéo tốt', 'Cứng, giòn, dễ đúc, chịu nén', 'Mềm dẻo', 'Chống gỉ tốt'], 1, 'Gang cứng, giòn, dễ đúc, chịu nén tốt - dùng đúc thân máy, ống.'),
    Q('Thép không gỉ (inox) chứa?', ['Vàng (Au) để tăng độ bóng', 'Bạc (Ag) để chống khuẩn', 'Crom và niken', 'Đồng và nhôm'], 2, 'Inox = thép hợp kim chứa ≥10,5% Cr, thường thêm Ni để chống gỉ tốt.'),
  ]),

  M(13, 'Vật liệu cơ khí - Kim loại màu', [
    Q('Kim loại màu KHÔNG bao gồm?', ['Nhôm (kim loại màu)', 'Kẽm (kim loại màu)', 'Thép', 'Đồng (kim loại màu)'], 2, 'Kim loại màu = kim loại không sắt: đồng, nhôm, chì, kẽm, niken...'),
    Q('Đồng (Cu) có tính?', ['Giòn, dễ gãy khi uốn', 'Nặng hơn sắt rất nhiều', 'Cách điện', 'Dẫn điện và dẫn nhiệt tốt'], 3, 'Đồng dẫn điện, dẫn nhiệt rất tốt; dùng làm dây điện, ống dẫn nhiệt.'),
    Q('Nhôm (Al) có ưu điểm?', ['Nhẹ, chống gỉ tốt', 'Nặng hơn thép, khó vận chuyển', 'Dễ gỉ sét khi gặp không khí ẩm', 'Dẫn điện kém'], 0, 'Nhôm nhẹ, chống gỉ (do lớp Al₂O₃), dùng máy bay, ô tô, đồ gia dụng.'),
    Q('Hợp kim đồng - thiếc gọi là?', ['Nhôm nguyên chất (Al)', 'Inox (thép không gỉ)', 'Đồng thau (bronze)', 'Thép hợp kim cacbon thấp'], 2, 'Bronze: Cu + Sn. Đồng thau khác là Brass (Cu + Zn).'),
    Q('Vàng, bạc thuộc nhóm?', ['Hợp kim', 'Phi kim', 'Kim loại đen', 'Kim loại quý'], 3, 'Vàng (Au), bạc (Ag), bạch kim (Pt) là kim loại quý.'),
    Q('Titanium (Ti) có đặc tính?', ['Rất nặng', 'Nhẹ, bền, chống ăn mòn', 'Mềm, dễ uốn dẻo như chì', 'Dễ gỉ sét trong môi trường ẩm'], 1, 'Ti nhẹ như nhôm nhưng bền như thép, chống ăn mòn — dùng hàng không, y sinh.'),
  ]),

  M(14, 'Vật liệu phi kim', [
    Q('Vật liệu phi kim cơ khí thường gồm?', ['Vàng, bạc và đồng nguyên chất', 'Nhựa, cao su, gỗ, gốm', 'Nhôm và hợp kim nhôm-magie', 'Thép cacbon và gang đúc'], 1, 'Phi kim: nhựa, cao su, gỗ, gốm sứ, composite.'),
    Q('Nhựa có ưu điểm?', ['Nặng hơn kim loại cùng thể tích', 'Khó tạo hình', 'Nhẹ, dễ tạo hình, cách điện', 'Dẫn điện'], 2, 'Nhựa nhẹ, dễ ép phun, cách điện, chống ăn mòn.'),
    Q('Cao su có tính chất?', ['Đàn hồi cao', 'Giòn, dễ vỡ khi va đập', 'Cứng, không biến dạng được', 'Dẫn điện'], 0, 'Cao su đàn hồi cao, dùng làm lốp, gioăng, ron.'),
    Q('Composite là?', ['Vật liệu tổng hợp từ 2 hay nhiều thành phần', 'Phi kim đơn', 'Vật liệu thuần', 'Kim loại'], 0, 'Composite kết hợp 2+ vật liệu (vd sợi thuỷ tinh + nhựa) để tăng tính năng.'),
    Q('Sợi carbon composite ưu điểm?', ['Giá rẻ', 'Nặng tương đương thép xây dựng', 'Nhẹ, bền cao', 'Dễ gãy'], 2, 'Carbon fiber composite cực nhẹ và bền cao, dùng máy bay, xe đua, đồ thể thao.'),
    Q('Gốm sứ kỹ thuật có ưu điểm?', ['Dễ vỡ ở nhiệt thấp', 'Dẫn điện', 'Mềm, dễ tạo hình bằng tay', 'Chịu nhiệt, chống mài mòn'], 3, 'Gốm kỹ thuật chịu nhiệt rất cao, chống mài mòn, cách điện.'),
  ]),

  M(15, 'Phương pháp gia công cơ khí - Đúc', [
    Q('Đúc là phương pháp?', ['Cắt kim loại bằng dao tiện', 'Gò tấm kim loại thành hình', 'Hàn nối hai chi tiết kim loại', 'Rót kim loại lỏng vào khuôn'], 3, 'Đúc (casting): rót kim loại nung chảy vào khuôn, để nguội thành chi tiết.'),
    Q('Đúc thích hợp với chi tiết?', ['Hình dạng phức tạp, khối lượng lớn', 'Đơn giản', 'Mỏng manh', 'Nhỏ xíu'], 0, 'Đúc thích hợp cho chi tiết phức tạp, khối lượng lớn (thân máy, lưỡi tuabin).'),
    Q('Khuôn đúc thường làm bằng?', ['Nhựa PVC và polyme dẻo', 'Cát, kim loại', 'Giấy bìa ép nhiều lớp', 'Vải bông và vải bố dày'], 1, 'Khuôn đúc: cát (đúc cát), kim loại (đúc khuôn cố định), sáp (đúc mẫu sáp).'),
    Q('Đúc cát thường dùng cho?', ['Không bao giờ', 'Chi tiết lớn, sản xuất ít', 'Chi tiết cực mịn', 'Chi tiết nhỏ hàng loạt'], 1, 'Đúc cát phổ biến với chi tiết lớn, sản xuất ít.'),
    Q('Đúc áp lực (die casting) dùng cho?', ['Tô màu', 'Không dùng', 'Chi tiết lớn duy nhất', 'Sản xuất hàng loạt chi tiết nhỏ - vừa'], 3, 'Đúc áp lực dùng khuôn kim loại, áp lực cao, năng suất cao cho hàng loạt.'),
    Q('Ưu điểm của đúc?', ['Tốc độ rất nhanh', 'Tạo được hình dạng phức tạp', 'Bề mặt cực mịn', 'Chính xác cao'], 1, 'Ưu: hình dạng phức tạp. Nhược: bề mặt thô, cần gia công sau.'),
  ]),

  M(16, 'Gia công cơ khí - Cắt gọt và hàn', [
    Q('Gia công cắt gọt gồm?', ['Gò, dập, uốn tấm kim loại', 'Đúc khuôn cát và đúc áp lực', 'Hàn hồ quang, hàn TIG, hàn MIG', 'Tiện, phay, bào, khoan, mài'], 3, 'Cắt gọt: tiện (turning), phay (milling), bào (planing), khoan (drilling), mài (grinding).'),
    Q('Tiện (turning) dùng cho chi tiết?', ['Chi tiết hình vuông hoặc lập phương', 'Phức tạp', 'Tròn xoay', 'Chi tiết dạng mặt phẳng lớn'], 2, 'Tiện gia công chi tiết tròn xoay (trục, bạc, đai ốc).'),
    Q('Phay (milling) dùng cho chi tiết?', ['Mặt cầu', 'Lỗ tròn xuyên qua chi tiết', 'Tròn xoay', 'Mặt phẳng, rãnh, bánh răng'], 3, 'Phay tạo mặt phẳng, rãnh, bánh răng — đa dạng nhất trong cắt gọt.'),
    Q('Khoan (drilling) tạo?', ['Mặt phẳng', 'Lỗ tròn', 'Bánh răng', 'Rãnh chữ T hoặc rãnh then'], 1, 'Khoan tạo lỗ tròn xuyên qua hoặc lỗ không xuyên.'),
    Q('Hàn (welding) là?', ['Tách rời kim loại bằng dao cắt', 'Rót kim loại nóng chảy vào khuôn', 'Gò, dát tấm kim loại bằng búa', 'Nối kim loại bằng nung chảy'], 3, 'Hàn: nối các chi tiết kim loại bằng nung chảy tại mối nối.'),
    Q('Hàn hồ quang dùng?', ['Khí gas', 'Tia hồ quang điện', 'Tia laser', 'Siêu âm'], 1, 'Hàn hồ quang: tia hồ quang điện giữa que hàn và vật hàn để nung chảy.'),
  ]),

  M(17, 'Máy CNC và tự động hoá', [
    Q('CNC viết tắt là?', ['Computer Numerical Control', 'Center New Code', 'Central Numeric Control', 'Computer Network Center'], 0, 'CNC = Computer Numerical Control — điều khiển số bằng máy tính.'),
    Q('Máy CNC hoạt động dựa trên?', ['Cảm tính', 'Chương trình G-code', 'Thủ công', 'Ngẫu nhiên'], 1, 'CNC chạy theo G-code do CAM sinh ra từ bản vẽ CAD.'),
    Q('Ưu điểm của máy CNC?', ['Tốc độ chậm hơn máy thủ công nhiều', 'Thủ công', 'Chính xác cao, lặp lại được, tự động', 'Không chính xác'], 2, 'CNC cho độ chính xác cao, lặp lại tốt, tự động hoá, giảm nhân công.'),
    Q('Robot công nghiệp dùng trong?', ['Dạy học', 'Nấu ăn ở nhà', 'Hàn, lắp ráp, sơn, đóng gói', 'Trồng cây'], 2, 'Robot công nghiệp: hàn, lắp ráp, sơn xe, đóng gói, vận chuyển kho.'),
    Q('Nhà máy thông minh (Smart Factory) đặc trưng?', ['IoT, AI, robot, dữ liệu thời gian thực', 'Chỉ máy đơn', 'Thủ công', 'Lạc hậu'], 0, 'Smart factory: IoT cảm biến, AI dự báo, robot, big data thời gian thực.'),
    Q('In 3D kim loại đang được ứng dụng?', ['Chế tạo chi tiết phức tạp, prototype', 'Dệt may', 'Trồng cây', 'Văn phòng'], 0, '3D printing kim loại: chế tạo chi tiết phức tạp, prototype nhanh, ngành hàng không.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Vẽ kỹ thuật là?', ['Vẽ tranh', 'Phác họa ý tưởng tùy hứng không quy chuẩn', 'Vẽ truyện', 'Ngôn ngữ chung kỹ thuật mô tả vật thể'], 3, 'Vẽ kỹ thuật là ngôn ngữ chung ngành kỹ thuật.'),
    Q('Khổ giấy A4?', ['500 × 700', '210 × 297 mm', '297 × 420', '100 × 100'], 1, 'A4: 210 × 297 mm.'),
    Q('3 hình chiếu chính?', ['Đứng - bằng - cạnh', 'Trong - ngoài', 'Trái - phải - giữa', 'Trên - dưới - giữa'], 0, '3 hình chiếu vuông góc cơ bản.'),
    Q('Đơn vị kích thước mặc định?', ['inch (in)', 'mét (m)', 'mm', 'centimet (cm)'], 2, 'Đơn vị mặc định là mm.'),
    Q('Thép là?', ['Nhôm hợp kim', 'Fe tinh khiết', 'Fe-C với C>2,14%', 'Hợp kim Fe-C với C<2,14%'], 3, 'Thép: Fe-C với C dưới 2,14%.'),
    Q('CNC là?', ['Chế tạo bằng tay', 'Điều khiển số bằng máy tính', 'Phần mềm vẽ', 'Hệ điều hành'], 1, 'CNC = Computer Numerical Control.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'An toàn lao động cơ khí - khái quát', [
    Q('An toàn lao động là?', ['Chỉ luật', 'Chỉ áo bảo hộ', 'Tổng thể biện pháp ngăn ngừa tai nạn và bệnh nghề nghiệp', 'Chỉ máy'], 2, 'ATLĐ: tổ chức + kỹ thuật + thiết bị để ngăn ngừa tai nạn và bệnh nghề nghiệp.'),
    Q('Mục đích chính của ATLĐ?', ['Bảo vệ tính mạng và sức khoẻ người LĐ', 'Tăng năng suất', 'Mỹ quan', 'Giảm chi phí'], 0, 'ATLĐ trước hết bảo vệ tính mạng, sức khoẻ người lao động.'),
    Q('Trang bị bảo hộ cá nhân (PPE) cơ bản?', ['Chỉ mũ', 'Chỉ kính', 'Không cần', 'Mũ, kính, găng, giày bảo hộ'], 3, 'PPE: mũ, kính, khẩu trang, găng tay, áo bảo hộ, giày bảo hộ.'),
    Q('Khi vào xưởng cơ khí cần?', ['Mặc gì cũng được', 'Đi dép', 'Mang đầy đủ PPE', 'Áo dài tay rộng'], 2, 'Bắt buộc PPE: kính, găng, giày bảo hộ; không mặc đồ rộng/váy có thể vướng máy.'),
    Q('Tóc dài khi vào xưởng cần?', ['Buộc gọn, đội mũ', 'Cắt ngắn', 'Xõa tự nhiên cho mát đầu', 'Xoã ra'], 0, 'Tóc dài phải buộc gọn và đội mũ để tránh vướng máy quay.'),
    Q('Khi xảy ra tai nạn, việc đầu tiên là?', ['Tắt máy, sơ cứu, báo cáo', 'Chạy đi', 'Im lặng', 'Tiếp tục làm'], 0, 'Tai nạn: tắt máy, sơ cứu nạn nhân, gọi cấp cứu, báo cáo.'),
  ]),

  M(20, 'Nguy cơ tai nạn trong xưởng cơ khí', [
    Q('Nguy cơ chính trong xưởng cơ khí?', ['Cắt, va đập, điện giật, bỏng, hoá chất', 'Chỉ cắt', 'Chỉ điện', 'Chỉ nguy cơ té ngã đơn giản'], 0, 'Nguy cơ: cắt, va đập, kẹt, điện giật, bỏng, hít hoá chất, tiếng ồn.'),
    Q('Để tránh điện giật cần?', ['Cắm bừa', 'Không cần', 'Kiểm tra dây, dùng nối đất, không tay ướt', 'Sửa khi đang điện'], 2, 'Phòng giật điện: dây không hở, có nối đất, găng cách điện, tay khô.'),
    Q('Để tránh cắt khi tiện - phay cần?', ['Đưa tay sát', 'Không đưa tay vào vùng cắt khi máy chạy', 'Vừa làm vừa chơi', 'Không nhìn'], 1, 'Tuyệt đối không đưa tay vào vùng cắt khi máy chạy; dùng dụng cụ gắp phoi.'),
    Q('Tiếng ồn lớn trong xưởng cần?', ['Bịt tay', 'Đeo nút tai chống ồn', 'La hét', 'Chấp nhận'], 1, 'Tiếng ồn trên 85 dB cần đeo nút tai/chụp tai chống ồn.'),
    Q('Mảnh kim loại bắn cần phòng bằng?', ['Kính bảo hộ', 'Khẩu trang', 'Găng tay vải dày', 'Giày bảo hộ mũi sắt'], 0, 'Kính bảo hộ bảo vệ mắt khỏi mảnh phoi, tia hàn.'),
    Q('Khi hàn cần?', ['Không kính', 'Kính hàn, găng dài, áo da, thoáng khí', 'Áo cộc', 'Kính thường'], 1, 'Hàn cần kính hàn (chống tia UV), găng dài, áo da/bông, nơi thoáng khí.'),
  ]),

  M(21, 'Phòng cháy chữa cháy trong xưởng', [
    Q('Tam giác cháy gồm?', ['Nhiệt + nước', 'Lửa + gió', 'Khí + áp', 'Nhiệt + nhiên liệu + oxy'], 3, 'Tam giác cháy: nhiệt độ + chất cháy + oxy. Mất 1 yếu tố thì cháy tắt.'),
    Q('Để dập cháy ta loại bỏ?', ['Không cần', 'Chỉ nhiệt', 'Một trong 3 yếu tố của tam giác cháy', 'Tất cả'], 2, 'Dập cháy bằng cách bỏ nhiệt (nước), bỏ oxy (chăn), bỏ nhiên liệu (cô lập).'),
    Q('Bình chữa cháy ABC dùng cho?', ['Chỉ điện', 'Chỉ kim loại', 'Chỉ rắn', 'Đa năng: chất rắn, lỏng, khí'], 3, 'Bình ABC (bột) dùng cho cháy chất rắn (A), lỏng (B), khí (C).'),
    Q('Cháy điện KHÔNG được dùng?', ['Nước', 'Bình bột', 'Bình CO₂', 'Chăn dày phủ ngọn lửa'], 0, 'KHÔNG dùng nước cho cháy điện (dẫn điện) → dùng CO₂ hoặc bình bột.'),
    Q('Cách sử dụng bình chữa cháy?', ['Phun trên ngọn', 'Không có quy tắc', 'Rút chốt, ngắm gốc lửa, bóp cò, quét', 'Lắc bình mạnh rồi xịt vào tường'], 2, 'PASS: Pull chốt, Aim ngắm gốc lửa, Squeeze bóp cò, Sweep quét.'),
    Q('Khi cháy cần?', ['Vứt đồ', 'Báo động, gọi 114, di tản theo lối thoát', 'Chạy lung tung', 'Núp dưới gầm bàn chờ cứu hộ'], 1, 'Có cháy: hô báo động, gọi 114, di tản theo lối thoát, không dùng thang máy.'),
  ]),

  M(22, 'Vệ sinh và bảo trì máy móc', [
    Q('Bảo trì máy là?', ['Hoạt động duy trì máy hoạt động tốt và kéo dài tuổi thọ', 'Phá huỷ', 'Sửa khi hỏng', 'Bỏ máy'], 0, 'Bảo trì: kiểm tra, vệ sinh, bôi trơn, thay phụ tùng định kỳ.'),
    Q('Bảo trì phòng ngừa (preventive) là?', ['Không cần', 'Bảo trì theo lịch trước khi hỏng', 'Chỉ bảo trì khi nhận thấy có tiếng kêu lạ', 'Sau khi hỏng'], 1, 'PM (Preventive Maintenance): lịch định kỳ để tránh hỏng đột xuất.'),
    Q('Bôi trơn máy có tác dụng?', ['Tăng ma sát', 'Làm chi tiết máy nhanh mòn hơn', 'Giảm ma sát, mài mòn, sinh nhiệt', 'Trang trí'], 2, 'Dầu mỡ bôi trơn giảm ma sát, mài mòn, sinh nhiệt → kéo dài tuổi thọ.'),
    Q('Khi máy có tiếng kêu lạ cần?', ['Đập máy', 'Bỏ qua', 'Tiếp tục', 'Tắt máy kiểm tra ngay'], 3, 'Tiếng kêu bất thường thường báo hỏng hóc; phải tắt máy kiểm tra.'),
    Q('Vệ sinh máy nên?', ['Không lau', 'Lau khi nào thấy máy quá bẩn', 'Lau sạch sau mỗi ca làm', 'Lau khi hỏng'], 2, 'Lau sạch máy sau mỗi ca giúp phát hiện sớm hư hỏng và tránh tích phoi.'),
    Q('Phoi (chip) trong tiện - phay cần?', ['Để trên máy', 'Gom và xử lý đúng cách', 'Đốt phoi tại chỗ để xử lý nhanh', 'Vứt bừa'], 1, 'Phoi cần gom vào thùng riêng, có thể tái chế; không để bừa gây tai nạn.'),
  ]),

  M(23, 'Dụng cụ cầm tay trong cơ khí', [
    Q('Dụng cụ đo cơ bản?', ['Chỉ thước thẳng', 'Cân điện tử đo khối lượng', 'Thước cặp, panme, thước thẳng', 'Không cần'], 2, 'Dụng cụ đo: thước thẳng, thước cặp (caliper), panme (micrometer), đồng hồ so.'),
    Q('Thước cặp đo được?', ['Chỉ độ sâu', 'Kích thước trong, ngoài, độ sâu', 'Chỉ trong', 'Chỉ ngoài'], 1, 'Caliper đo kích thước ngoài (hàm chính), trong (hàm phụ) và độ sâu (cây thăm).'),
    Q('Panme đo được kích thước với độ chính xác?', ['1 mm', '0,1 mm', '0,001 mm', '0,01 mm'], 3, 'Micrometer thường có độ chính xác 0,01 mm.'),
    Q('Dụng cụ cắt cầm tay?', ['Tô vít', 'Cưa sắt, dũa, đục', 'Chỉ búa', 'Chỉ kìm'], 1, 'Cắt cầm tay: cưa sắt, dũa (file), đục (chisel).'),
    Q('Búa dùng để?', ['Mài nhẵn bề mặt kim loại', 'Khoan lỗ tròn xuyên chi tiết', 'Cắt đứt phôi kim loại', 'Gõ, đóng đinh'], 3, 'Búa: gõ đập, đóng/nhổ đinh, gò kim loại.'),
    Q('Kìm dùng để?', ['Mài bóng bề mặt phôi', 'Kẹp, cắt dây, uốn', 'Đo chính xác kích thước chi tiết', 'Khoan lỗ tròn trên kim loại'], 1, 'Kìm: kẹp giữ, cắt dây, uốn — nhiều loại (mỏ nhọn, mỏ bằng, cắt).'),
  ]),

  M(24, 'Mối ghép trong cơ khí', [
    Q('Mối ghép cố định gồm?', ['Hàn, ren, đinh tán', 'Khớp xoay', 'Chuyển động', 'Bản lề'], 0, 'Cố định: hàn (welding), ren (thread), đinh tán (rivet), keo dán.'),
    Q('Mối ghép động gồm?', ['Bản lề, ổ trượt, ổ lăn', 'Đinh tán', 'Mối ghép ren (bulông - đai ốc)', 'Mối hàn nóng chảy kim loại'], 0, 'Mối ghép động: bản lề, ổ trượt (bushing), ổ lăn (bearing).'),
    Q('Ren (vít) phổ biến nhất là?', ['Ren tròn', 'Ren tam giác (metric)', 'Ren răng cưa', 'Ren vuông'], 1, 'Ren tam giác metric (M) phổ biến nhất; vd M6, M10.'),
    Q('Đinh tán dùng cho?', ['Cần tháo lắp', 'Trang trí', 'Ghép vĩnh viễn, không tháo lắp', 'Tạm thời'], 2, 'Rivet: mối ghép vĩnh viễn, không tháo lắp được (trừ phá huỷ rivet).'),
    Q('Hàn khác đinh tán ở?', ['Bắt vít', 'Nung chảy kim loại nối với nhau', 'Dùng đinh', 'Dán keo'], 1, 'Hàn nối kim loại bằng nung chảy; đinh tán dùng đinh xuyên qua lỗ.'),
    Q('Ổ lăn (bearing) giúp?', ['Cách điện', 'Tăng ma sát', 'Giảm ma sát trục quay', 'Cách nhiệt'], 2, 'Bearing dùng bi/đũa lăn để giảm ma sát giữa trục và ổ.'),
  ]),

  M(25, 'Truyền động cơ khí', [
    Q('Truyền động cơ khí là?', ['Đứng yên', 'Cách nhiệt', 'Cách điện', 'Truyền chuyển động từ chi tiết dẫn sang chi tiết bị dẫn'], 3, 'Truyền động: truyền chuyển động và lực từ trục động sang trục công tác.'),
    Q('Truyền động đai (belt) gồm?', ['Đai vuông', 'Đai zigzag', 'Đai phẳng, đai chữ V', 'Đai tròn'], 2, 'Đai: phẳng, V, răng — dùng trong động cơ ô tô, máy may.'),
    Q('Truyền động xích (chain) phổ biến ở?', ['Xe đạp, xe máy', 'Đồng hồ', 'Tàu thuỷ', 'Máy bay'], 0, 'Xích dùng trong xe đạp, xe máy, máy nông nghiệp.'),
    Q('Truyền động bánh răng (gear) cho?', ['Ngẫu nhiên', 'Tỉ số truyền chính xác', 'Truyền lực một chiều duy nhất', 'Tỉ số truyền thay đổi liên tục'], 1, 'Bánh răng cho tỉ số truyền chính xác, dùng nhiều trong hộp số ô tô.'),
    Q('Tỉ số truyền của 2 bánh răng =?', ['Z₁/Z₂ (số răng bánh dẫn/bị dẫn)', 'Z₂/Z₁ (số răng bánh bị dẫn/dẫn)', 'Z₁ × Z₂', '1'], 1, 'Tỉ số truyền i = n₁/n₂ = Z₂/Z₁ (số răng).'),
    Q('Hộp số ô tô dùng?', ['Truyền động xích như xe đạp', 'Truyền động bánh răng', 'Truyền động bằng lò xo xoắn', 'Truyền động đai (dây curoa)'], 1, 'Hộp số ô tô dùng bộ bánh răng để thay đổi tỉ số truyền và momen.'),
  ]),

  M(26, 'Động cơ và năng lượng', [
    Q('Động cơ là?', ['Cách điện', 'Trang trí', 'Máy biến đổi năng lượng sang cơ năng', 'Phát nhiệt'], 2, 'Động cơ chuyển đổi năng lượng (điện, nhiệt, gió) thành cơ năng.'),
    Q('Động cơ điện hoạt động dựa trên?', ['Trọng lực', 'Áp suất', 'Ánh sáng', 'Lực từ tác dụng lên dòng điện'], 3, 'Động cơ điện dùng lực điện từ trên dây dẫn có dòng điện trong từ trường.'),
    Q('Động cơ đốt trong gồm các kỳ?', ['2 kỳ', '1 kỳ', '6 kỳ', 'Hút - nén - nổ - xả (4 kỳ)'], 3, 'Động cơ 4 kỳ: hút - nén - nổ (sinh công) - xả.'),
    Q('Nhiên liệu xăng dùng trong động cơ?', ['Otto (đánh lửa)', 'Động cơ điện một chiều (DC)', 'Diesel', 'Hơi nước'], 0, 'Động cơ xăng (Otto) dùng bugi đánh lửa; diesel tự bốc cháy do nén.'),
    Q('Động cơ điện ngày càng phát triển vì?', ['Sạch, hiệu suất cao', 'Tốn xăng', 'Lạc hậu', 'Phát ra tiếng ồn lớn khi vận hành'], 0, 'Động cơ điện sạch, hiệu suất cao, đang phát triển nhanh (xe điện).'),
    Q('Năng lượng tái tạo cho động cơ gồm?', ['Dầu mỏ', 'Mặt trời, gió, thuỷ điện', 'Than đá', 'Khí gas'], 1, 'Năng lượng tái tạo: mặt trời, gió, thuỷ điện, sinh khối, địa nhiệt.'),
  ]),

  M(27, 'Bảo dưỡng và sửa chữa', [
    Q('Bảo dưỡng định kỳ ô tô gồm?', ['Thay dầu, lọc, kiểm tra phanh, lốp', 'Chỉ rửa', 'Chỉ thay biển số', 'Chỉ đánh bóng'], 0, 'BD định kỳ: thay dầu nhớt, lọc dầu/gió/nhiên liệu, kiểm tra phanh, lốp, đèn.'),
    Q('Dầu nhớt động cơ ô tô thường thay sau?', ['100.000 km', '5.000 - 10.000 km', '100 km', '1 km'], 1, 'Dầu nhớt thay sau 5.000-10.000 km tuỳ loại dầu và xe.'),
    Q('Lốp xe cần thay khi?', ['Chạy 100 km', '1 năm', 'Mòn hết gai hoặc nứt vỡ', 'Không thay'], 2, 'Lốp thay khi mòn gai (1,6 mm), nứt vỡ, hoặc già hoá > 6 năm.'),
    Q('Khi sửa chữa cần?', ['Sửa khi máy chạy', 'Dùng tay', 'Tắt máy, ngắt nguồn, dùng dụng cụ phù hợp', 'Sửa nhanh để máy chạy lại sớm'], 2, 'Sửa chữa: tắt máy, ngắt nguồn, dùng dụng cụ chuẩn, mặc PPE.'),
    Q('Khắc phục sự cố cần?', ['Sửa ngay', 'Đập máy', 'Bỏ qua', 'Chẩn đoán nguyên nhân trước khi sửa'], 3, 'Chẩn đoán đúng nguyên nhân trước khi sửa giúp tiết kiệm thời gian và chi phí.'),
    Q('Hồ sơ bảo dưỡng giúp?', ['Theo dõi lịch sử, dự báo hỏng hóc', 'Vô dụng', 'Làm phức tạp quy trình bảo trì', 'Tốn thời gian'], 0, 'Hồ sơ bảo dưỡng (logbook) giúp theo dõi, dự báo, lập kế hoạch.'),
  ]),

  M(28, 'Sản phẩm cơ khí trong đời sống', [
    Q('Sản phẩm cơ khí trong gia đình gồm?', ['Chỉ tủ', 'Tủ lạnh, máy giặt, quạt, nồi cơm điện', 'Chỉ ghế', 'Chỉ giường'], 1, 'Cơ khí gia dụng: tủ lạnh, máy giặt, quạt, máy xay, nồi cơm điện.'),
    Q('Xe đạp gồm các bộ phận cơ bản?', ['Khung, bánh, xích, phanh, ghi đông', 'Chỉ khung', 'Chỉ bánh', 'Chỉ ghi đông'], 0, 'Xe đạp: khung, bánh xe, bộ truyền xích, phanh, ghi đông, yên.'),
    Q('Ô tô có các hệ thống chính?', ['Động cơ, truyền lực, lái, phanh, treo', 'Chỉ động cơ', 'Chỉ bánh', 'Không có hệ thống'], 0, 'Ô tô: động cơ, truyền lực (hộp số), lái, phanh, treo, điện, an toàn.'),
    Q('Xe máy điện ưu điểm?', ['Tốn xăng', 'Sạch, êm, ít bảo dưỡng', 'Phức tạp', 'Tốc độ chậm hơn xe xăng nhiều'], 1, 'Xe máy điện sạch, êm, ít bảo dưỡng nhưng cần sạc và pin có hạn.'),
    Q('Robot trong nhà phổ biến?', ['Robot cảnh sát', 'Robot giáo viên', 'Robot bác sĩ', 'Robot hút bụi, lau nhà'], 3, 'Robot hút bụi (Roomba), robot lau nhà đang trở nên phổ biến trong gia đình.'),
    Q('Thiết bị cơ khí y tế phổ biến?', ['Máy MRI, CT, máy thở, ghế nha', 'Ống nghe và nhiệt kế thủy ngân', 'Sổ ghi chép bệnh án', 'Bút chì'], 0, 'Cơ khí y tế: MRI, CT, máy X-quang, máy thở, ghế nha khoa, dụng cụ phẫu thuật.'),
  ]),

  M(29, 'Dự án thiết kế kỹ thuật', [
    Q('Dự án thiết kế cần bắt đầu bằng?', ['Vẽ ngay', 'Chế tạo', 'Mua vật tư', 'Đặt câu hỏi: vấn đề gì cần giải quyết?'], 3, 'Dự án thiết kế: bắt đầu bằng xác định vấn đề và mục tiêu.'),
    Q('Sau khi xác định vấn đề, bước tiếp là?', ['Vứt bỏ', 'Chuyển sang vấn đề khác để tránh khó', 'Nghiên cứu giải pháp đã có', 'Chế tạo ngay'], 2, 'Nghiên cứu giải pháp sẵn có để tham khảo, tránh "phát minh lại bánh xe".'),
    Q('Tiêu chí của thiết kế kỹ thuật?', ['Chỉ rẻ', 'Chỉ đẹp', 'Chức năng, an toàn, kinh tế, thẩm mỹ, bền vững', 'Chỉ chức năng'], 2, 'Tiêu chí thiết kế: chức năng, an toàn, kinh tế, thẩm mỹ, bền vững với môi trường.'),
    Q('Phương pháp đánh giá thiết kế?', ['Đánh giá theo cảm tính cá nhân', 'Bỏ qua', 'Test, thu phản hồi, so sánh', 'Tự khen'], 2, 'Đánh giá: test thực tế, thu phản hồi người dùng, so sánh với tiêu chí.'),
    Q('Iteration (lặp) trong thiết kế nghĩa là?', ['Chỉ 1 lần', 'Bỏ giữa chừng', 'Cải tiến qua nhiều vòng', 'Không cần'], 2, 'Thiết kế tốt thường qua nhiều vòng cải tiến: thử - đánh giá - sửa.'),
    Q('Báo cáo dự án cần?', ['Không cần', 'Mô tả vấn đề, giải pháp, kết quả, bài học', 'Chỉ vấn đề', 'Chỉ kết quả'], 1, 'Báo cáo: trình bày vấn đề, quá trình, giải pháp, kết quả, bài học rút ra.'),
  ]),

  M(30, 'Nghề cơ khí ở Việt Nam', [
    Q('Cơ khí là ngành?', ['Cơ bản, nền tảng cho công nghiệp', 'Tương lai mờ', 'Tay nghề thấp', 'Phụ trợ'], 0, 'Cơ khí là ngành cơ bản, nền tảng cho mọi ngành công nghiệp chế tạo.'),
    Q('Việt Nam phát triển cơ khí ở?', ['Chỉ lắp ráp', 'Cơ khí chế tạo, lắp ráp, sửa chữa', 'Chỉ sửa chữa', 'Không phát triển'], 1, 'VN có cơ khí chế tạo, lắp ráp (ô tô, xe máy), sửa chữa, công nghiệp hỗ trợ.'),
    Q('Các trường đào tạo cơ khí?', ['ĐHBK HN, ĐHBK HCM, ĐH Cần Thơ, các CĐ kỹ thuật', 'Chỉ 1 trường', 'Chỉ trường tư', 'Chỉ học nghề tại các xưởng tư nhân'], 0, 'Nhiều trường: ĐHBK HN, HCM, Đà Nẵng, Cần Thơ, ĐH Công nghiệp, các CĐ kỹ thuật.'),
    Q('Cơ hội việc làm cơ khí ở VN?', ['Rất ít, chủ yếu phải tự khởi nghiệp', 'Hạn chế', 'Lớn, đặc biệt khi FDI đầu tư', 'Chỉ ở nước ngoài'], 2, 'Cơ khí VN có nhu cầu lớn từ DN FDI (Samsung, Honda, Toyota...).'),
    Q('Kỹ sư cơ khí cần kỹ năng?', ['Chỉ lý thuyết', 'Chỉ tay nghề', 'Kỹ thuật + ngoại ngữ + làm việc nhóm', 'Không cần'], 2, 'KS cơ khí cần: kỹ thuật, tiếng Anh (đọc tài liệu, làm DN FDI), teamwork, sáng tạo.'),
    Q('Mức lương cơ khí ở VN?', ['Tăng theo kinh nghiệm và kỹ năng', 'Thấp hơn nhiều ngành dịch vụ khác', 'Không phụ thuộc trình độ tay nghề', 'Cố định'], 0, 'Mức lương tăng theo kinh nghiệm; kỹ sư có kỹ năng tốt, ngoại ngữ tốt thu nhập cao.'),
  ]),

  M(31, 'Cơ khí và môi trường', [
    Q('Sản xuất cơ khí gây tác động môi trường?', ['Không gây gì', 'Tiêu thụ năng lượng, phát thải, chất thải', 'Vô hại', 'Chỉ giúp'], 1, 'Cơ khí tiêu thụ điện, nước, phát thải CO₂, NOx, chất thải dầu mỡ.'),
    Q('Sản xuất sạch hơn (cleaner production) là?', ['Xử lý sau', 'Tăng chất thải', 'Giảm chất thải tại nguồn', 'Bỏ qua'], 2, 'Cleaner production: tối ưu quy trình để giảm chất thải, năng lượng tại nguồn.'),
    Q('Tái chế kim loại có ưu điểm?', ['Không có ưu', 'Tiết kiệm tài nguyên, giảm năng lượng', 'Tốn năng lượng hơn', 'Làm ô nhiễm môi trường nặng hơn'], 1, 'Tái chế kim loại tiết kiệm nguyên liệu thô, giảm năng lượng so với sản xuất mới.'),
    Q('Vật liệu thân thiện môi trường gồm?', ['Composite sinh học, vật liệu tái chế', 'Nhựa khó phân huỷ', 'Hoá chất độc', 'Kim loại quý'], 0, 'Vật liệu xanh: composite sinh học, vật liệu tái chế, không độc.'),
    Q('Tiết kiệm năng lượng trong cơ khí?', ['Dùng động cơ hiệu suất cao, biến tần', 'Lãng phí', 'Tăng tiêu thụ', 'Không quan tâm'], 0, 'Tiết kiệm năng lượng: động cơ hiệu suất cao, biến tần, bảo trì tốt.'),
    Q('Kinh tế tuần hoàn trong cơ khí?', ['Tạo nhiều rác', 'Tái sử dụng - tái chế - tái sản xuất', 'Khai thác cạn kiệt', 'Vứt bỏ'], 1, 'Kinh tế tuần hoàn: thiết kế để tái sử dụng, tái chế, tái sản xuất.'),
  ]),

  M(32, 'Công nghệ in 3D và cách mạng cơ khí', [
    Q('In 3D (additive manufacturing) là?', ['Cắt bỏ', 'Tạo vật thể bằng cách thêm vật liệu lớp này lớp khác', 'Rót kim loại lỏng vào khuôn cát', 'Nối kim loại bằng nung chảy mối ghép'], 1, 'In 3D: thêm vật liệu theo từng lớp dựa trên mô hình số.'),
    Q('Vật liệu in 3D phổ biến?', ['Chỉ vải', 'Chỉ giấy', 'Nhựa (PLA, ABS), nhựa nylon, kim loại', 'Chỉ gỗ'], 2, 'Vật liệu: PLA, ABS, PETG, nylon, resin, kim loại (Ti, thép, nhôm).'),
    Q('Ưu điểm của in 3D?', ['Tốc độ cao', 'Hình dạng phức tạp, prototype nhanh, tuỳ chỉnh', 'Giá rẻ tuyệt đối', 'Sản xuất hàng loạt'], 1, 'In 3D: hình dạng phức tạp, prototype nhanh, sản phẩm tuỳ chỉnh cá nhân hoá.'),
    Q('Ứng dụng in 3D trong y tế?', ['Đo nhiệt', 'In bộ phận thay thế (răng, khớp, mô)', 'Phẫu thuật', 'Khám bệnh'], 1, 'In 3D y tế: răng giả, khớp háng, dụng cụ phẫu thuật, mô hình giải phẫu, in mô.'),
    Q('In 3D trong hàng không?', ['Không dùng', 'Chi tiết phức tạp, nhẹ', 'Chỉ trang trí', 'Cấm dùng'], 1, 'Hàng không dùng in 3D titan/nhôm cho chi tiết phức tạp, giảm trọng lượng.'),
    Q('Nhược điểm của in 3D?', ['Không có nhược', 'Tốc độ chậm với sản xuất hàng loạt, vật liệu hạn chế', 'Không an toàn', 'Đắt nhất'], 1, 'In 3D chậm khi sản xuất hàng loạt, chi phí vật liệu cao, độ bền chưa bằng đúc/rèn.'),
  ]),

  M(33, 'Cơ khí thông minh - Industry 4.0', [
    Q('Industry 4.0 trong cơ khí gồm?', ['Chỉ máy đơn', 'Lạc hậu', 'CNC + robot + IoT + AI + dữ liệu lớn', 'Chỉ thủ công'], 2, 'Industry 4.0: CNC, robot, IoT, AI, big data, digital twin, dùng dữ liệu thời gian thực.'),
    Q('Digital twin là?', ['Trò chơi mô phỏng nhà máy 3D', 'Phim hoạt hình về dây chuyền sản xuất', 'Cánh tay robot điều khiển bằng AI', 'Bản sao số của thiết bị/sản phẩm thực'], 3, 'Digital twin: mô phỏng số đồng bộ với thiết bị thật để giám sát, dự đoán.'),
    Q('IoT trong nhà máy giúp?', ['Gây nhiễu hệ thống điều khiển máy', 'Giám sát thiết bị thời gian thực', 'Làm chậm', 'Tăng chi phí mà không có lợi ích'], 1, 'IoT cảm biến giám sát thiết bị 24/7, phát hiện hỏng sớm, dự báo bảo trì.'),
    Q('AI giúp gì cho cơ khí?', ['Gây hỏng', 'Dự báo hỏng hóc, tối ưu sản xuất', 'Vô dụng', 'Tăng chi phí'], 1, 'AI dự báo hỏng hóc (predictive maintenance), tối ưu quy trình, phát hiện lỗi.'),
    Q('Cobot (collaborative robot) là?', ['Chỉ thay thế người', 'Robot tự hành thay thế công nhân hoàn toàn', 'Robot làm việc cùng người', 'Vô dụng'], 2, 'Cobot làm việc an toàn cùng con người, hỗ trợ trong dây chuyền.'),
    Q('Tương lai cơ khí ở VN?', ['Đóng cửa', 'Cấm phát triển', 'Hướng đến tự động hoá và cơ khí thông minh', 'Quay lại thủ công'], 2, 'VN đang đẩy mạnh tự động hoá, cơ khí thông minh để cạnh tranh quốc tế.'),
  ]),

  M(34, 'Hướng nghiệp cơ khí', [
    Q('Học cơ khí có thể làm việc tại?', ['Nhà máy ô tô, xe máy, điện tử, dầu khí', 'Không có nơi', 'Chỉ tư nhân', 'Chỉ nhà nước'], 0, 'Cơ khí làm việc tại: Honda, Toyota, Samsung, dầu khí, đóng tàu, hàng không.'),
    Q('Vị trí công việc cơ khí gồm?', ['Chỉ thiết kế', 'Chỉ bán', 'Kỹ sư thiết kế, kỹ sư sản xuất, bảo trì, QC', 'Chỉ vận hành'], 2, 'Vị trí: thiết kế, sản xuất, bảo trì, kiểm soát chất lượng, R&D, dự án.'),
    Q('Cơ khí cần học tốt môn?', ['Chỉ Lý', 'Chỉ vẽ', 'Chỉ Toán', 'Toán, Lý, vẽ kỹ thuật, ngoại ngữ'], 3, 'Cơ khí cần Toán, Lý vững; vẽ kỹ thuật, tin học, tiếng Anh.'),
    Q('Cơ khí có cần sáng tạo không?', ['Chỉ làm theo', 'Không cần', 'Cấm sáng tạo', 'Có (đặc biệt R&D, thiết kế)'], 3, 'Sáng tạo rất quan trọng, đặc biệt ở các vị trí R&D, thiết kế, cải tiến.'),
    Q('Kỹ năng mềm cho cơ khí?', ['Không cần', 'Chỉ kỹ thuật', 'Giao tiếp, làm nhóm, giải quyết vấn đề', 'Bỏ qua'], 2, 'Soft skills: giao tiếp, teamwork, problem-solving, quản lý dự án quan trọng.'),
    Q('Học sinh quan tâm cơ khí nên?', ['Chỉ chơi game', 'Bỏ học', 'Tham gia CLB robotics, tìm hiểu CAD/3D', 'Đợi đến đại học rồi tìm hiểu sau'], 2, 'Học sinh nên tham gia CLB robotics, tìm hiểu CAD, in 3D, đọc về xe/máy bay.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Vẽ kỹ thuật là?', ['Ngôn ngữ chung kỹ thuật', 'Phác họa ý tưởng tự do bằng bút chì', 'Vẽ truyện', 'Vẽ tranh'], 0, 'Vẽ kỹ thuật là ngôn ngữ chung.'),
    Q('3 hình chiếu chính?', ['Trên - dưới - giữa', 'Trái - phải', 'Đứng - bằng - cạnh', 'Trong - ngoài'], 2, 'Đứng - bằng - cạnh.'),
    Q('CNC là?', ['Bằng tay', 'Điều khiển số bằng máy tính', 'Bằng cảm tính', 'Ngẫu nhiên'], 1, 'CNC = Computer Numerical Control.'),
    Q('Thép là?', ['Fe tinh khiết', 'Đồng nguyên chất (Cu 99,9%)', 'Nhôm nguyên chất (Al 99,5%)', 'Hợp kim Fe-C với C<2,14%'], 3, 'Thép: hợp kim Fe-C với C<2,14%.'),
    Q('Khi vào xưởng cần?', ['Mặc bừa', 'Áo dài tay rộng', 'Đầy đủ PPE', 'Đi dép'], 2, 'Bắt buộc PPE: mũ, kính, găng, giày bảo hộ.'),
    Q('In 3D giúp?', ['Sản xuất hàng loạt rẻ', 'Sản xuất hàng loạt với chi phí thấp', 'Tạo prototype nhanh', 'Bỏ qua thiết kế'], 2, 'In 3D nhanh chóng tạo prototype để kiểm thử.'),
  ]),
];

export const H10CN_SCENARIOS = indexBy(H10CN_WEEKS);
