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
    Q('Công nghệ là?', ['Ứng dụng khoa học để tạo ra sản phẩm, dịch vụ','Khoa học thuần','Triết học','Nghệ thuật'], 0, 'Công nghệ = ứng dụng tri thức KHKT vào sản xuất, đời sống.'),
    Q('Vai trò của công nghệ trong đời sống?', ['Tăng năng suất, tiện nghi, chất lượng cuộc sống','Vô ích','Chỉ tốn tiền','Phá hoại'], 0, 'Công nghệ giúp tăng năng suất, tiện nghi, chất lượng cuộc sống.'),
    Q('Cách mạng công nghiệp 4.0 đặc trưng bởi?', ['AI, IoT, big data, robot','Hơi nước','Điện','Dây chuyền sản xuất'], 0, 'CMCN 4.0: AI, IoT, big data, blockchain, robot, in 3D.'),
    Q('Nghề cơ khí làm gì?', ['Thiết kế, chế tạo, gia công, sửa chữa máy móc kim loại','Trồng cây','Dạy học','Lái xe'], 0, 'Cơ khí: thiết kế, chế tạo, gia công và sửa chữa máy móc, thiết bị kim loại.'),
    Q('Ngành cơ khí có vai trò?', ['Nền tảng cho công nghiệp chế tạo','Phụ trợ','Không quan trọng','Chỉ trang trí'], 0, 'Cơ khí là nền tảng cho mọi ngành công nghiệp chế tạo.'),
    Q('Ứng dụng cơ khí trong đời sống?', ['Ô tô, máy bay, máy gia dụng, thiết bị y tế','Chỉ máy bay','Chỉ ô tô','Không có'], 0, 'Cơ khí có mặt mọi nơi: ô tô, máy bay, máy gia dụng, thiết bị y tế, công cụ.'),
  ]),

  M(2, 'Vẽ kỹ thuật - giới thiệu', [
    Q('Vẽ kỹ thuật là?', ['Ngôn ngữ chung của kỹ thuật để mô tả vật thể','Vẽ tranh','Vẽ truyện','Vẽ tự do'], 0, 'Vẽ kỹ thuật là ngôn ngữ chung của ngành kỹ thuật, mô tả chính xác vật thể.'),
    Q('Bản vẽ kỹ thuật được vẽ trên?', ['Giấy A4, A3 hoặc phần mềm CAD','Giấy báo','Vải','Gỗ'], 0, 'Bản vẽ vẽ trên giấy khổ A4, A3, A2... hoặc bản vẽ số trên phần mềm CAD.'),
    Q('Khổ giấy A4 có kích thước?', ['210 × 297 mm','297 × 420 mm','100 × 100 mm','500 × 700 mm'], 0, 'A4: 210 mm × 297 mm; A3: 297 × 420; A2: 420 × 594.'),
    Q('Tỉ lệ bản vẽ là?', ['Tỉ số kích thước vẽ và kích thước thực','Kích thước thực','Kích thước vẽ','Sai số'], 0, 'Tỉ lệ = kích thước trên bản vẽ / kích thước thật.'),
    Q('Tỉ lệ 1:1 nghĩa là?', ['Vẽ bằng kích thước thật','Vẽ nhỏ hơn','Vẽ lớn hơn','Sai'], 0, 'Tỉ lệ 1:1 là vẽ với kích thước bằng kích thước thật.'),
    Q('Tỉ lệ 1:5 nghĩa là?', ['Vẽ thu nhỏ 5 lần','Vẽ phóng to 5 lần','Bằng kích thước thật','Không xác định'], 0, 'Tỉ lệ 1:5 là 1 đơn vị trên bản vẽ = 5 đơn vị thực.'),
  ]),

  M(3, 'Tiêu chuẩn bản vẽ - đường nét và chữ', [
    Q('Đường liền đậm dùng để vẽ?', ['Cạnh thấy của vật thể','Cạnh khuất','Đường tâm','Đường kích thước'], 0, 'Nét liền đậm vẽ cạnh thấy (cạnh nhìn thấy được).'),
    Q('Đường đứt mảnh dùng vẽ?', ['Cạnh khuất, đường khuất','Cạnh thấy','Đường tâm','Trục đối xứng'], 0, 'Đường đứt mảnh vẽ cạnh khuất (không nhìn thấy).'),
    Q('Đường chấm gạch mảnh dùng vẽ?', ['Trục đối xứng, đường tâm','Cạnh thấy','Cạnh khuất','Kích thước'], 0, 'Chấm gạch mảnh: trục đối xứng, đường tâm tròn.'),
    Q('Chiều dày nét liền đậm so với mảnh?', ['Khoảng 2 lần','Bằng nhau','1/2 lần','5 lần'], 0, 'Nét đậm dày ~2 lần nét mảnh (tỉ lệ 2:1).'),
    Q('Chữ viết trên bản vẽ thường?', ['Đứng, đều, in hoa rõ ràng','Cong vẹo','Tô màu','Tự do'], 0, 'Chữ viết kỹ thuật: đứng (hoặc nghiêng 75°), in đậm, dễ đọc.'),
    Q('Ký hiệu vật liệu thường ghi ở?', ['Khung tên (title block)','Giữa bản vẽ','Lề trên','Lề dưới'], 0, 'Khung tên ghi tên chi tiết, vật liệu, người vẽ, tỉ lệ.'),
  ]),

  M(4, 'Hình chiếu vuông góc', [
    Q('Hình chiếu là?', ['Hình ảnh vật thể trên mặt phẳng chiếu','Bóng','Bản đồ','Tranh'], 0, 'Hình chiếu = hình ảnh thu được khi chiếu vật thể lên mặt phẳng chiếu.'),
    Q('Phép chiếu vuông góc dùng?', ['Tia chiếu vuông góc với mặt phẳng chiếu','Tia chiếu nghiêng','Tia chiếu đồng quy','Không tia chiếu'], 0, 'Phép chiếu vuông góc (orthographic): tia chiếu vuông góc với MP chiếu.'),
    Q('Hình chiếu đứng cho thấy?', ['Mặt trước của vật thể','Mặt trên','Mặt bên','Mặt sau'], 0, 'Hình chiếu đứng (front view): nhìn từ phía trước.'),
    Q('Hình chiếu bằng cho thấy?', ['Mặt trên của vật thể','Mặt trước','Mặt bên','Mặt sau'], 0, 'Hình chiếu bằng (top view): nhìn từ trên xuống.'),
    Q('Hình chiếu cạnh cho thấy?', ['Mặt bên của vật thể','Mặt trên','Mặt trước','Mặt sau'], 0, 'Hình chiếu cạnh (side view): nhìn từ bên phải/trái.'),
    Q('Trên bản vẽ vẽ tối thiểu mấy hình chiếu?', ['3 hình chiếu vuông góc','1','5','10'], 0, '3 hình chiếu chính: đứng, bằng, cạnh đủ mô tả hầu hết vật thể.'),
  ]),

  M(5, 'Hình chiếu trục đo', [
    Q('Hình chiếu trục đo dùng để?', ['Thể hiện vật thể 3D trực quan','Chỉ 2D','Đo kích thước','Tô màu'], 0, 'Trục đo (axonometric) thể hiện 3D trực quan trên 1 hình.'),
    Q('Hình chiếu trục đo đều có?', ['3 trục đo và 3 hệ số biến dạng bằng nhau','3 trục khác nhau','2 trục','1 trục'], 0, 'Trục đo đều (isometric): 3 trục cách nhau 120°, hệ số biến dạng bằng nhau.'),
    Q('Hình chiếu trục đo vuông góc đều thường dùng?', ['Biểu diễn vật thể đơn giản','Đo chính xác','Bản vẽ chính thức','Sản xuất'], 0, 'Trục đo đều dùng để biểu diễn trực quan, đơn giản, dễ vẽ.'),
    Q('Hệ số biến dạng theo trục là?', ['Tỉ số kích thước trên hình chiếu trục đo và kích thước thực','Kích thước thực','Kích thước vẽ','Sai số đo'], 0, 'Hệ số biến dạng quy định kích thước theo từng trục bị thu hay phóng bao nhiêu.'),
    Q('Trong hình chiếu trục đo, hình tròn thường vẽ thành?', ['Hình elip','Hình tròn','Hình vuông','Đa giác'], 0, 'Hình tròn trong không gian biểu diễn thành elip trên hình chiếu trục đo.'),
    Q('Hình chiếu trục đo có ưu điểm?', ['Trực quan, dễ hình dung','Chính xác tuyệt đối','Đo dễ','Đơn giản nhất'], 0, 'Trục đo ưu điểm: trực quan; nhược: khó đo kích thước chính xác.'),
  ]),

  M(6, 'Ghi kích thước trên bản vẽ', [
    Q('Ghi kích thước cần?', ['Đầy đủ, rõ ràng, đúng quy định','Tuỳ ý','Chỉ vài kích thước','Không cần'], 0, 'Kích thước phải đầy đủ, không trùng lặp, đúng quy định.'),
    Q('Đơn vị kích thước mặc định trên bản vẽ?', ['Milimet (mm)','Cm','m','Inch'], 0, 'Đơn vị mặc định trong VTC là mm; không ghi đơn vị nếu là mm.'),
    Q('Đường kích thước có?', ['2 mũi tên ở 2 đầu','1 mũi tên','Không có mũi tên','Chấm tròn'], 0, 'Đường kích thước có 2 mũi tên chỉ giới hạn.'),
    Q('Đường gióng dùng để?', ['Xác định phạm vi đo','Tô bóng','Trang trí','Đánh dấu'], 0, 'Đường gióng (extension line) kéo từ vật thể đến đường kích thước.'),
    Q('Kích thước đường kính ký hiệu?', ['∅','R','□','Δ'], 0, 'Đường kính dùng ∅ (vd ∅20); R cho bán kính.'),
    Q('Kích thước bán kính ký hiệu?', ['R','∅','□','S'], 0, 'Bán kính dùng R (vd R10); đường kính dùng ∅.'),
  ]),

  M(7, 'Đọc và phân tích bản vẽ chi tiết', [
    Q('Bản vẽ chi tiết thể hiện?', ['1 chi tiết của sản phẩm','Toàn bộ sản phẩm','Sơ đồ lắp','Sơ đồ mạch'], 0, 'Bản vẽ chi tiết = bản vẽ của 1 chi tiết riêng để chế tạo.'),
    Q('Khung tên bản vẽ chứa thông tin?', ['Tên chi tiết, vật liệu, tỉ lệ, người vẽ','Chỉ tên','Chỉ kích thước','Chỉ tỉ lệ'], 0, 'Khung tên: tên chi tiết, vật liệu, tỉ lệ, số bản vẽ, người vẽ - duyệt.'),
    Q('Đọc bản vẽ cần xem theo thứ tự?', ['Khung tên → hình chiếu → kích thước → yêu cầu kỹ thuật','Tự do','Đảo ngược','Chỉ hình chiếu'], 0, 'Đọc bản vẽ: khung tên → hình chiếu (hình dung 3D) → kích thước → yêu cầu kỹ thuật.'),
    Q('Yêu cầu kỹ thuật trên bản vẽ ghi?', ['Độ chính xác, độ nhám, xử lý nhiệt','Chỉ kích thước','Chỉ vật liệu','Chỉ tỉ lệ'], 0, 'Yêu cầu kỹ thuật: dung sai, độ nhám bề mặt, xử lý nhiệt, mạ.'),
    Q('Dung sai là?', ['Sai số cho phép của kích thước','Kích thước thực','Tỉ lệ','Đường tâm'], 0, 'Dung sai: phạm vi sai số cho phép giữa kích thước thực và kích thước danh nghĩa.'),
    Q('Độ nhám bề mặt được ký hiệu?', ['Bằng ký hiệu tam giác hoặc Ra','Bằng R','Bằng ∅','Bằng dấu chấm'], 0, 'Độ nhám: dùng dấu tam giác cũ hoặc ký hiệu Ra (vd Ra 1.6).'),
  ]),

  M(8, 'Bản vẽ lắp', [
    Q('Bản vẽ lắp thể hiện?', ['Sự lắp ghép các chi tiết thành sản phẩm','1 chi tiết','Sơ đồ mạch','Mặt cắt'], 0, 'Bản vẽ lắp (assembly drawing) thể hiện sản phẩm gồm nhiều chi tiết ghép.'),
    Q('Trên bản vẽ lắp có?', ['Bảng kê các chi tiết','Chỉ hình','Chỉ kích thước','Chỉ vật liệu'], 0, 'Bản vẽ lắp có bảng kê (BOM): số thứ tự, tên chi tiết, số lượng, vật liệu.'),
    Q('Số chỉ vị trí chi tiết trên bản vẽ lắp?', ['Vòng tròn có số hiệu, nối bằng đường dóng','Mũi tên','Chữ số','Ký hiệu chữ'], 0, 'Mỗi chi tiết được đánh số hiệu trong vòng tròn, kéo về vị trí trên hình.'),
    Q('Bản vẽ lắp cần thể hiện?', ['Mối lắp ghép giữa các chi tiết','Chỉ vật liệu','Chỉ độ nhám','Chỉ kích thước'], 0, 'Bản vẽ lắp thể hiện cách các chi tiết khớp nối, lắp ghép với nhau.'),
    Q('Bản vẽ lắp phục vụ?', ['Lắp ráp, sửa chữa, hướng dẫn','Chế tạo chi tiết','Tô màu','Trang trí'], 0, 'Bản vẽ lắp giúp công nhân biết cách lắp ráp đúng.'),
    Q('Mặt cắt trên bản vẽ lắp dùng để?', ['Thể hiện cấu trúc bên trong','Trang trí','Tô bóng','Đo kích thước'], 0, 'Mặt cắt cho thấy chi tiết bên trong các mối lắp ghép.'),
  ]),

  M(9, 'Vẽ kỹ thuật bằng CAD', [
    Q('CAD viết tắt là?', ['Computer-Aided Design','Computer-Auto Drawing','Central Auto Drive','Cad Auto Design'], 0, 'CAD = Computer-Aided Design — thiết kế có máy tính hỗ trợ.'),
    Q('Phần mềm CAD phổ biến?', ['AutoCAD, SolidWorks, Inventor, Fusion 360','Word, Excel','Photoshop','Illustrator'], 0, 'Phần mềm CAD: AutoCAD (2D), SolidWorks, Inventor, Fusion 360 (3D).'),
    Q('Ưu điểm của CAD so với vẽ tay?', ['Chính xác, dễ sửa, dễ chia sẻ','Chậm hơn','Kém chính xác','Khó dùng'], 0, 'CAD: chính xác cao, dễ sửa, dễ chia sẻ, kết nối với CAM/CNC.'),
    Q('Bản vẽ CAD có thể xuất ra?', ['File PDF, DWG, in giấy','Chỉ DWG','Chỉ in giấy','Không xuất được'], 0, 'CAD xuất nhiều định dạng: DWG, DXF, PDF, STEP, in trực tiếp.'),
    Q('CAM là?', ['Computer-Aided Manufacturing','Computer-Auto Mode','Camera','Central Auto Machine'], 0, 'CAM = sản xuất có máy tính hỗ trợ, dùng để tạo G-code cho máy CNC.'),
    Q('Quy trình CAD/CAM/CNC giúp?', ['Tự động hoá chế tạo, độ chính xác cao','Chậm hơn','Tốn nhân công','Không chính xác'], 0, 'CAD → CAM → CNC: thiết kế → sinh G-code → gia công tự động chính xác.'),
  ]),

  M(10, 'Thiết kế kỹ thuật - khái quát', [
    Q('Thiết kế kỹ thuật là?', ['Quá trình giải quyết vấn đề kỹ thuật bằng sản phẩm','Sao chép','Mô phỏng','Tự do'], 0, 'Thiết kế kỹ thuật: quy trình có hệ thống để giải quyết vấn đề bằng sản phẩm.'),
    Q('Quy trình thiết kế gồm các bước?', ['Xác định vấn đề → ý tưởng → thiết kế → chế tạo → đánh giá','Chỉ vẽ','Chỉ chế tạo','Chỉ đánh giá'], 0, 'Quy trình: vấn đề - ý tưởng - thiết kế chi tiết - chế tạo - đánh giá - cải tiến.'),
    Q('Bước xác định vấn đề cần?', ['Làm rõ nhu cầu, ràng buộc','Vẽ ngay','Chế tạo ngay','Đánh giá ngay'], 0, 'Bước 1: xác định nhu cầu, đối tượng, ràng buộc, mục tiêu thiết kế.'),
    Q('Brainstorming là?', ['Phương pháp tạo nhiều ý tưởng tự do','Đánh giá','Phân tích','Sửa lỗi'], 0, 'Brainstorming: kỹ thuật phát ý tưởng tự do, không phê phán ban đầu.'),
    Q('Sau khi có ý tưởng, bước tiếp là?', ['Phân tích, chọn ý tưởng tốt nhất, vẽ chi tiết','Chế tạo ngay','Bán ngay','Vứt bỏ'], 0, 'Phân tích ưu - nhược, chọn ý tưởng tốt nhất rồi vẽ chi tiết để chế tạo.'),
    Q('Đánh giá sản phẩm dựa trên?', ['Chức năng, an toàn, thẩm mỹ, giá thành','Chỉ đẹp','Chỉ rẻ','Chỉ chức năng'], 0, 'Tiêu chí: chức năng đạt yêu cầu, an toàn, dễ dùng, thẩm mỹ, giá thành hợp lý.'),
  ]),

  M(11, 'Phương pháp thiết kế sáng tạo', [
    Q('Sáng tạo trong thiết kế là?', ['Đưa ra giải pháp mới và hữu ích','Sao chép','Lặp lại','Không thay đổi'], 0, 'Sáng tạo: kết hợp tri thức tạo ra giải pháp mới, có giá trị.'),
    Q('Tư duy thiết kế (Design Thinking) gồm?', ['Đồng cảm, định nghĩa, ý tưởng, mẫu thử, thử nghiệm','Vẽ - bán','Chỉ vẽ','Chỉ thử nghiệm'], 0, 'Design Thinking: Empathize, Define, Ideate, Prototype, Test.'),
    Q('Prototype (mẫu thử) dùng để?', ['Kiểm tra ý tưởng trước khi sản xuất hàng loạt','Bán ngay','Vứt bỏ','Trang trí'], 0, 'Prototype giúp kiểm tra thiết kế, phát hiện vấn đề trước khi sản xuất hàng loạt.'),
    Q('In 3D giúp gì cho thiết kế?', ['Tạo nhanh prototype phức tạp','Không có ích','Chậm','Tốn kém luôn'], 0, '3D printing tạo prototype nhanh, chi phí thấp, hình dạng phức tạp.'),
    Q('Phản hồi của người dùng giúp?', ['Cải tiến sản phẩm','Vô ích','Phá hoại','Không quan tâm'], 0, 'Phản hồi người dùng (UX research) là nguồn quan trọng cải tiến sản phẩm.'),
    Q('Thiết kế bền vững (sustainable design) ưu tiên?', ['Vật liệu tái chế, tiết kiệm năng lượng','Vật liệu đắt','Nhanh','Đẹp duy nhất'], 0, 'Thiết kế bền vững: ít tài nguyên, tái chế, tuổi thọ cao, ít ô nhiễm.'),
  ]),

  M(12, 'Vật liệu cơ khí - Kim loại đen', [
    Q('Kim loại đen gồm?', ['Gang và thép','Đồng và nhôm','Vàng và bạc','Chì và kẽm'], 0, 'Kim loại đen = thép + gang (gốc từ sắt - Fe).'),
    Q('Thép có thành phần chính?', ['Sắt và cacbon (<2,14%)','Sắt và đồng','Sắt và nhôm','Sắt và niken'], 0, 'Thép: hợp kim Fe-C với C < 2,14%.'),
    Q('Gang có thành phần?', ['Sắt và cacbon (>2,14%)','Sắt thuần','Sắt và đồng','Sắt và niken'], 0, 'Gang: hợp kim Fe-C với C 2,14% - 6,67% (thường 2-4%).'),
    Q('Thép dùng để?', ['Chế tạo máy móc, kết cấu công trình','Trang trí','Đồ trang sức','Thuốc'], 0, 'Thép dùng làm máy, kết cấu, ô tô, tàu, cầu, đường ray.'),
    Q('Gang đặc tính?', ['Cứng, giòn, dễ đúc, chịu nén','Mềm dẻo','Chịu kéo tốt','Chống gỉ tốt'], 0, 'Gang cứng, giòn, dễ đúc, chịu nén tốt - dùng đúc thân máy, ống.'),
    Q('Thép không gỉ (inox) chứa?', ['Crom và niken','Đồng và nhôm','Vàng','Bạc'], 0, 'Inox = thép hợp kim chứa ≥10,5% Cr, thường thêm Ni để chống gỉ tốt.'),
  ]),

  M(13, 'Vật liệu cơ khí - Kim loại màu', [
    Q('Kim loại màu KHÔNG bao gồm?', ['Thép','Đồng','Nhôm','Kẽm'], 0, 'Kim loại màu = kim loại không sắt: đồng, nhôm, chì, kẽm, niken...'),
    Q('Đồng (Cu) có tính?', ['Dẫn điện và dẫn nhiệt tốt','Cách điện','Giòn','Nặng'], 0, 'Đồng dẫn điện, dẫn nhiệt rất tốt; dùng làm dây điện, ống dẫn nhiệt.'),
    Q('Nhôm (Al) có ưu điểm?', ['Nhẹ, chống gỉ tốt','Nặng','Dẫn điện kém','Dễ gỉ'], 0, 'Nhôm nhẹ, chống gỉ (do lớp Al₂O₃), dùng máy bay, ô tô, đồ gia dụng.'),
    Q('Hợp kim đồng - thiếc gọi là?', ['Đồng thau (bronze)','Inox','Thép','Nhôm'], 0, 'Bronze: Cu + Sn. Đồng thau khác là Brass (Cu + Zn).'),
    Q('Vàng, bạc thuộc nhóm?', ['Kim loại quý','Kim loại đen','Hợp kim','Phi kim'], 0, 'Vàng (Au), bạc (Ag), bạch kim (Pt) là kim loại quý.'),
    Q('Titanium (Ti) có đặc tính?', ['Nhẹ, bền, chống ăn mòn','Rất nặng','Dễ gỉ','Mềm'], 0, 'Ti nhẹ như nhôm nhưng bền như thép, chống ăn mòn — dùng hàng không, y sinh.'),
  ]),

  M(14, 'Vật liệu phi kim', [
    Q('Vật liệu phi kim cơ khí thường gồm?', ['Nhựa, cao su, gỗ, gốm','Thép','Nhôm','Vàng'], 0, 'Phi kim: nhựa, cao su, gỗ, gốm sứ, composite.'),
    Q('Nhựa có ưu điểm?', ['Nhẹ, dễ tạo hình, cách điện','Nặng','Dẫn điện','Khó tạo hình'], 0, 'Nhựa nhẹ, dễ ép phun, cách điện, chống ăn mòn.'),
    Q('Cao su có tính chất?', ['Đàn hồi cao','Cứng','Giòn','Dẫn điện'], 0, 'Cao su đàn hồi cao, dùng làm lốp, gioăng, ron.'),
    Q('Composite là?', ['Vật liệu tổng hợp từ 2 hay nhiều thành phần','Vật liệu thuần','Kim loại','Phi kim đơn'], 0, 'Composite kết hợp 2+ vật liệu (vd sợi thuỷ tinh + nhựa) để tăng tính năng.'),
    Q('Sợi carbon composite ưu điểm?', ['Nhẹ, bền cao','Nặng','Dễ gãy','Giá rẻ'], 0, 'Carbon fiber composite cực nhẹ và bền cao, dùng máy bay, xe đua, đồ thể thao.'),
    Q('Gốm sứ kỹ thuật có ưu điểm?', ['Chịu nhiệt, chống mài mòn','Mềm','Dễ vỡ ở nhiệt thấp','Dẫn điện'], 0, 'Gốm kỹ thuật chịu nhiệt rất cao, chống mài mòn, cách điện.'),
  ]),

  M(15, 'Phương pháp gia công cơ khí - Đúc', [
    Q('Đúc là phương pháp?', ['Rót kim loại lỏng vào khuôn','Cắt','Gò','Hàn'], 0, 'Đúc (casting): rót kim loại nung chảy vào khuôn, để nguội thành chi tiết.'),
    Q('Đúc thích hợp với chi tiết?', ['Hình dạng phức tạp, khối lượng lớn','Đơn giản','Mỏng manh','Nhỏ xíu'], 0, 'Đúc thích hợp cho chi tiết phức tạp, khối lượng lớn (thân máy, lưỡi tuabin).'),
    Q('Khuôn đúc thường làm bằng?', ['Cát, kim loại','Giấy','Vải','Nhựa'], 0, 'Khuôn đúc: cát (đúc cát), kim loại (đúc khuôn cố định), sáp (đúc mẫu sáp).'),
    Q('Đúc cát thường dùng cho?', ['Chi tiết lớn, sản xuất ít','Chi tiết nhỏ hàng loạt','Chi tiết cực mịn','Không bao giờ'], 0, 'Đúc cát phổ biến với chi tiết lớn, sản xuất ít.'),
    Q('Đúc áp lực (die casting) dùng cho?', ['Sản xuất hàng loạt chi tiết nhỏ - vừa','Chi tiết lớn duy nhất','Không dùng','Tô màu'], 0, 'Đúc áp lực dùng khuôn kim loại, áp lực cao, năng suất cao cho hàng loạt.'),
    Q('Ưu điểm của đúc?', ['Tạo được hình dạng phức tạp','Bề mặt cực mịn','Chính xác cao','Tốc độ rất nhanh'], 0, 'Ưu: hình dạng phức tạp. Nhược: bề mặt thô, cần gia công sau.'),
  ]),

  M(16, 'Gia công cơ khí - Cắt gọt và hàn', [
    Q('Gia công cắt gọt gồm?', ['Tiện, phay, bào, khoan, mài','Đúc','Hàn','Gò'], 0, 'Cắt gọt: tiện (turning), phay (milling), bào (planing), khoan (drilling), mài (grinding).'),
    Q('Tiện (turning) dùng cho chi tiết?', ['Tròn xoay','Vuông','Phức tạp','Phẳng'], 0, 'Tiện gia công chi tiết tròn xoay (trục, bạc, đai ốc).'),
    Q('Phay (milling) dùng cho chi tiết?', ['Mặt phẳng, rãnh, bánh răng','Tròn xoay','Lỗ','Mặt cầu'], 0, 'Phay tạo mặt phẳng, rãnh, bánh răng — đa dạng nhất trong cắt gọt.'),
    Q('Khoan (drilling) tạo?', ['Lỗ tròn','Mặt phẳng','Rãnh','Bánh răng'], 0, 'Khoan tạo lỗ tròn xuyên qua hoặc lỗ không xuyên.'),
    Q('Hàn (welding) là?', ['Nối kim loại bằng nung chảy','Cắt','Gò','Đúc'], 0, 'Hàn: nối các chi tiết kim loại bằng nung chảy tại mối nối.'),
    Q('Hàn hồ quang dùng?', ['Tia hồ quang điện','Khí gas','Tia laser','Siêu âm'], 0, 'Hàn hồ quang: tia hồ quang điện giữa que hàn và vật hàn để nung chảy.'),
  ]),

  M(17, 'Máy CNC và tự động hoá', [
    Q('CNC viết tắt là?', ['Computer Numerical Control','Central Numeric Control','Computer Network Center','Center New Code'], 0, 'CNC = Computer Numerical Control — điều khiển số bằng máy tính.'),
    Q('Máy CNC hoạt động dựa trên?', ['Chương trình G-code','Thủ công','Cảm tính','Ngẫu nhiên'], 0, 'CNC chạy theo G-code do CAM sinh ra từ bản vẽ CAD.'),
    Q('Ưu điểm của máy CNC?', ['Chính xác cao, lặp lại được, tự động','Thủ công','Chậm','Không chính xác'], 0, 'CNC cho độ chính xác cao, lặp lại tốt, tự động hoá, giảm nhân công.'),
    Q('Robot công nghiệp dùng trong?', ['Hàn, lắp ráp, sơn, đóng gói','Trồng cây','Dạy học','Nấu ăn ở nhà'], 0, 'Robot công nghiệp: hàn, lắp ráp, sơn xe, đóng gói, vận chuyển kho.'),
    Q('Nhà máy thông minh (Smart Factory) đặc trưng?', ['IoT, AI, robot, dữ liệu thời gian thực','Thủ công','Lạc hậu','Chỉ máy đơn'], 0, 'Smart factory: IoT cảm biến, AI dự báo, robot, big data thời gian thực.'),
    Q('In 3D kim loại đang được ứng dụng?', ['Chế tạo chi tiết phức tạp, prototype','Trồng cây','Dệt may','Văn phòng'], 0, '3D printing kim loại: chế tạo chi tiết phức tạp, prototype nhanh, ngành hàng không.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Vẽ kỹ thuật là?', ['Ngôn ngữ chung kỹ thuật mô tả vật thể','Vẽ tranh','Vẽ truyện','Tự do'], 0, 'Vẽ kỹ thuật là ngôn ngữ chung ngành kỹ thuật.'),
    Q('Khổ giấy A4?', ['210 × 297 mm','297 × 420','100 × 100','500 × 700'], 0, 'A4: 210 × 297 mm.'),
    Q('3 hình chiếu chính?', ['Đứng - bằng - cạnh','Trên - dưới - giữa','Trái - phải - giữa','Trong - ngoài'], 0, '3 hình chiếu vuông góc cơ bản.'),
    Q('Đơn vị kích thước mặc định?', ['mm','cm','m','inch'], 0, 'Đơn vị mặc định là mm.'),
    Q('Thép là?', ['Hợp kim Fe-C với C<2,14%','Fe-C với C>2,14%','Fe tinh khiết','Nhôm hợp kim'], 0, 'Thép: Fe-C với C dưới 2,14%.'),
    Q('CNC là?', ['Điều khiển số bằng máy tính','Chế tạo bằng tay','Hệ điều hành','Phần mềm vẽ'], 0, 'CNC = Computer Numerical Control.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'An toàn lao động cơ khí - khái quát', [
    Q('An toàn lao động là?', ['Tổng thể biện pháp ngăn ngừa tai nạn và bệnh nghề nghiệp','Chỉ áo bảo hộ','Chỉ máy','Chỉ luật'], 0, 'ATLĐ: tổ chức + kỹ thuật + thiết bị để ngăn ngừa tai nạn và bệnh nghề nghiệp.'),
    Q('Mục đích chính của ATLĐ?', ['Bảo vệ tính mạng và sức khoẻ người LĐ','Tăng năng suất','Giảm chi phí','Mỹ quan'], 0, 'ATLĐ trước hết bảo vệ tính mạng, sức khoẻ người lao động.'),
    Q('Trang bị bảo hộ cá nhân (PPE) cơ bản?', ['Mũ, kính, găng, giày bảo hộ','Chỉ mũ','Chỉ kính','Không cần'], 0, 'PPE: mũ, kính, khẩu trang, găng tay, áo bảo hộ, giày bảo hộ.'),
    Q('Khi vào xưởng cơ khí cần?', ['Mang đầy đủ PPE','Mặc gì cũng được','Đi dép','Áo dài tay rộng'], 0, 'Bắt buộc PPE: kính, găng, giày bảo hộ; không mặc đồ rộng/váy có thể vướng máy.'),
    Q('Tóc dài khi vào xưởng cần?', ['Buộc gọn, đội mũ','Tự do','Xoã ra','Cắt ngắn'], 0, 'Tóc dài phải buộc gọn và đội mũ để tránh vướng máy quay.'),
    Q('Khi xảy ra tai nạn, việc đầu tiên là?', ['Tắt máy, sơ cứu, báo cáo','Tiếp tục làm','Chạy đi','Im lặng'], 0, 'Tai nạn: tắt máy, sơ cứu nạn nhân, gọi cấp cứu, báo cáo.'),
  ]),

  M(20, 'Nguy cơ tai nạn trong xưởng cơ khí', [
    Q('Nguy cơ chính trong xưởng cơ khí?', ['Cắt, va đập, điện giật, bỏng, hoá chất','Chỉ điện','Chỉ cắt','Không có'], 0, 'Nguy cơ: cắt, va đập, kẹt, điện giật, bỏng, hít hoá chất, tiếng ồn.'),
    Q('Để tránh điện giật cần?', ['Kiểm tra dây, dùng nối đất, không tay ướt','Không cần','Cắm bừa','Sửa khi đang điện'], 0, 'Phòng giật điện: dây không hở, có nối đất, găng cách điện, tay khô.'),
    Q('Để tránh cắt khi tiện - phay cần?', ['Không đưa tay vào vùng cắt khi máy chạy','Đưa tay sát','Không nhìn','Vừa làm vừa chơi'], 0, 'Tuyệt đối không đưa tay vào vùng cắt khi máy chạy; dùng dụng cụ gắp phoi.'),
    Q('Tiếng ồn lớn trong xưởng cần?', ['Đeo nút tai chống ồn','Bịt tay','Chấp nhận','La hét'], 0, 'Tiếng ồn trên 85 dB cần đeo nút tai/chụp tai chống ồn.'),
    Q('Mảnh kim loại bắn cần phòng bằng?', ['Kính bảo hộ','Khẩu trang','Găng','Giày'], 0, 'Kính bảo hộ bảo vệ mắt khỏi mảnh phoi, tia hàn.'),
    Q('Khi hàn cần?', ['Kính hàn, găng dài, áo da, thoáng khí','Kính thường','Không kính','Áo cộc'], 0, 'Hàn cần kính hàn (chống tia UV), găng dài, áo da/bông, nơi thoáng khí.'),
  ]),

  M(21, 'Phòng cháy chữa cháy trong xưởng', [
    Q('Tam giác cháy gồm?', ['Nhiệt + nhiên liệu + oxy','Nhiệt + nước','Lửa + gió','Khí + áp'], 0, 'Tam giác cháy: nhiệt độ + chất cháy + oxy. Mất 1 yếu tố thì cháy tắt.'),
    Q('Để dập cháy ta loại bỏ?', ['Một trong 3 yếu tố của tam giác cháy','Tất cả','Không cần','Chỉ nhiệt'], 0, 'Dập cháy bằng cách bỏ nhiệt (nước), bỏ oxy (chăn), bỏ nhiên liệu (cô lập).'),
    Q('Bình chữa cháy ABC dùng cho?', ['Đa năng: chất rắn, lỏng, khí','Chỉ rắn','Chỉ điện','Chỉ kim loại'], 0, 'Bình ABC (bột) dùng cho cháy chất rắn (A), lỏng (B), khí (C).'),
    Q('Cháy điện KHÔNG được dùng?', ['Nước','Bình CO₂','Bình bột','Cát'], 0, 'KHÔNG dùng nước cho cháy điện (dẫn điện) → dùng CO₂ hoặc bình bột.'),
    Q('Cách sử dụng bình chữa cháy?', ['Rút chốt, ngắm gốc lửa, bóp cò, quét','Phun trên ngọn','Tự do','Không có quy tắc'], 0, 'PASS: Pull chốt, Aim ngắm gốc lửa, Squeeze bóp cò, Sweep quét.'),
    Q('Khi cháy cần?', ['Báo động, gọi 114, di tản theo lối thoát','Chạy lung tung','Trốn','Vứt đồ'], 0, 'Có cháy: hô báo động, gọi 114, di tản theo lối thoát, không dùng thang máy.'),
  ]),

  M(22, 'Vệ sinh và bảo trì máy móc', [
    Q('Bảo trì máy là?', ['Hoạt động duy trì máy hoạt động tốt và kéo dài tuổi thọ','Sửa khi hỏng','Bỏ máy','Phá huỷ'], 0, 'Bảo trì: kiểm tra, vệ sinh, bôi trơn, thay phụ tùng định kỳ.'),
    Q('Bảo trì phòng ngừa (preventive) là?', ['Bảo trì theo lịch trước khi hỏng','Sau khi hỏng','Không cần','Tuỳ ý'], 0, 'PM (Preventive Maintenance): lịch định kỳ để tránh hỏng đột xuất.'),
    Q('Bôi trơn máy có tác dụng?', ['Giảm ma sát, mài mòn, sinh nhiệt','Tăng ma sát','Vô ích','Trang trí'], 0, 'Dầu mỡ bôi trơn giảm ma sát, mài mòn, sinh nhiệt → kéo dài tuổi thọ.'),
    Q('Khi máy có tiếng kêu lạ cần?', ['Tắt máy kiểm tra ngay','Tiếp tục','Đập máy','Bỏ qua'], 0, 'Tiếng kêu bất thường thường báo hỏng hóc; phải tắt máy kiểm tra.'),
    Q('Vệ sinh máy nên?', ['Lau sạch sau mỗi ca làm','Không lau','Lau khi hỏng','Tuỳ ý'], 0, 'Lau sạch máy sau mỗi ca giúp phát hiện sớm hư hỏng và tránh tích phoi.'),
    Q('Phoi (chip) trong tiện - phay cần?', ['Gom và xử lý đúng cách','Vứt bừa','Đốt','Để trên máy'], 0, 'Phoi cần gom vào thùng riêng, có thể tái chế; không để bừa gây tai nạn.'),
  ]),

  M(23, 'Dụng cụ cầm tay trong cơ khí', [
    Q('Dụng cụ đo cơ bản?', ['Thước cặp, panme, thước thẳng','Chỉ thước thẳng','Không cần','Cân'], 0, 'Dụng cụ đo: thước thẳng, thước cặp (caliper), panme (micrometer), đồng hồ so.'),
    Q('Thước cặp đo được?', ['Kích thước trong, ngoài, độ sâu','Chỉ ngoài','Chỉ trong','Chỉ độ sâu'], 0, 'Caliper đo kích thước ngoài (hàm chính), trong (hàm phụ) và độ sâu (cây thăm).'),
    Q('Panme đo được kích thước với độ chính xác?', ['0,01 mm','1 mm','0,1 mm','0,001 mm'], 0, 'Micrometer thường có độ chính xác 0,01 mm.'),
    Q('Dụng cụ cắt cầm tay?', ['Cưa sắt, dũa, đục','Chỉ búa','Chỉ kìm','Tô vít'], 0, 'Cắt cầm tay: cưa sắt, dũa (file), đục (chisel).'),
    Q('Búa dùng để?', ['Gõ, đóng đinh','Cắt','Khoan','Mài'], 0, 'Búa: gõ đập, đóng/nhổ đinh, gò kim loại.'),
    Q('Kìm dùng để?', ['Kẹp, cắt dây, uốn','Khoan','Mài','Đo'], 0, 'Kìm: kẹp giữ, cắt dây, uốn — nhiều loại (mỏ nhọn, mỏ bằng, cắt).'),
  ]),

  M(24, 'Mối ghép trong cơ khí', [
    Q('Mối ghép cố định gồm?', ['Hàn, ren, đinh tán','Chuyển động','Bản lề','Khớp xoay'], 0, 'Cố định: hàn (welding), ren (thread), đinh tán (rivet), keo dán.'),
    Q('Mối ghép động gồm?', ['Bản lề, ổ trượt, ổ lăn','Hàn','Ren','Đinh tán'], 0, 'Mối ghép động: bản lề, ổ trượt (bushing), ổ lăn (bearing).'),
    Q('Ren (vít) phổ biến nhất là?', ['Ren tam giác (metric)','Ren vuông','Ren tròn','Ren răng cưa'], 0, 'Ren tam giác metric (M) phổ biến nhất; vd M6, M10.'),
    Q('Đinh tán dùng cho?', ['Ghép vĩnh viễn, không tháo lắp','Cần tháo lắp','Tạm thời','Trang trí'], 0, 'Rivet: mối ghép vĩnh viễn, không tháo lắp được (trừ phá huỷ rivet).'),
    Q('Hàn khác đinh tán ở?', ['Nung chảy kim loại nối với nhau','Dùng đinh','Dán keo','Bắt vít'], 0, 'Hàn nối kim loại bằng nung chảy; đinh tán dùng đinh xuyên qua lỗ.'),
    Q('Ổ lăn (bearing) giúp?', ['Giảm ma sát trục quay','Tăng ma sát','Cách điện','Cách nhiệt'], 0, 'Bearing dùng bi/đũa lăn để giảm ma sát giữa trục và ổ.'),
  ]),

  M(25, 'Truyền động cơ khí', [
    Q('Truyền động cơ khí là?', ['Truyền chuyển động từ chi tiết dẫn sang chi tiết bị dẫn','Đứng yên','Cách điện','Cách nhiệt'], 0, 'Truyền động: truyền chuyển động và lực từ trục động sang trục công tác.'),
    Q('Truyền động đai (belt) gồm?', ['Đai phẳng, đai chữ V','Đai vuông','Đai tròn','Đai zigzag'], 0, 'Đai: phẳng, V, răng — dùng trong động cơ ô tô, máy may.'),
    Q('Truyền động xích (chain) phổ biến ở?', ['Xe đạp, xe máy','Đồng hồ','Máy bay','Tàu thuỷ'], 0, 'Xích dùng trong xe đạp, xe máy, máy nông nghiệp.'),
    Q('Truyền động bánh răng (gear) cho?', ['Tỉ số truyền chính xác','Ngẫu nhiên','Không có','Tuỳ ý'], 0, 'Bánh răng cho tỉ số truyền chính xác, dùng nhiều trong hộp số ô tô.'),
    Q('Tỉ số truyền của 2 bánh răng =?', ['Z₂/Z₁ (số răng bánh bị dẫn/dẫn)','Z₁/Z₂','Z₁ × Z₂','1'], 0, 'Tỉ số truyền i = n₁/n₂ = Z₂/Z₁ (số răng).'),
    Q('Hộp số ô tô dùng?', ['Truyền động bánh răng','Đai','Xích','Lò xo'], 0, 'Hộp số ô tô dùng bộ bánh răng để thay đổi tỉ số truyền và momen.'),
  ]),

  M(26, 'Động cơ và năng lượng', [
    Q('Động cơ là?', ['Máy biến đổi năng lượng sang cơ năng','Cách điện','Phát nhiệt','Trang trí'], 0, 'Động cơ chuyển đổi năng lượng (điện, nhiệt, gió) thành cơ năng.'),
    Q('Động cơ điện hoạt động dựa trên?', ['Lực từ tác dụng lên dòng điện','Áp suất','Trọng lực','Ánh sáng'], 0, 'Động cơ điện dùng lực điện từ trên dây dẫn có dòng điện trong từ trường.'),
    Q('Động cơ đốt trong gồm các kỳ?', ['Hút - nén - nổ - xả (4 kỳ)','2 kỳ','6 kỳ','1 kỳ'], 0, 'Động cơ 4 kỳ: hút - nén - nổ (sinh công) - xả.'),
    Q('Nhiên liệu xăng dùng trong động cơ?', ['Otto (đánh lửa)','Diesel','Hơi nước','Điện'], 0, 'Động cơ xăng (Otto) dùng bugi đánh lửa; diesel tự bốc cháy do nén.'),
    Q('Động cơ điện ngày càng phát triển vì?', ['Sạch, hiệu suất cao','Tốn xăng','Ồn','Lạc hậu'], 0, 'Động cơ điện sạch, hiệu suất cao, đang phát triển nhanh (xe điện).'),
    Q('Năng lượng tái tạo cho động cơ gồm?', ['Mặt trời, gió, thuỷ điện','Than đá','Dầu mỏ','Khí gas'], 0, 'Năng lượng tái tạo: mặt trời, gió, thuỷ điện, sinh khối, địa nhiệt.'),
  ]),

  M(27, 'Bảo dưỡng và sửa chữa', [
    Q('Bảo dưỡng định kỳ ô tô gồm?', ['Thay dầu, lọc, kiểm tra phanh, lốp','Chỉ rửa','Chỉ thay biển số','Chỉ đánh bóng'], 0, 'BD định kỳ: thay dầu nhớt, lọc dầu/gió/nhiên liệu, kiểm tra phanh, lốp, đèn.'),
    Q('Dầu nhớt động cơ ô tô thường thay sau?', ['5.000 - 10.000 km','100.000 km','100 km','1 km'], 0, 'Dầu nhớt thay sau 5.000-10.000 km tuỳ loại dầu và xe.'),
    Q('Lốp xe cần thay khi?', ['Mòn hết gai hoặc nứt vỡ','Chạy 100 km','1 năm','Không thay'], 0, 'Lốp thay khi mòn gai (1,6 mm), nứt vỡ, hoặc già hoá > 6 năm.'),
    Q('Khi sửa chữa cần?', ['Tắt máy, ngắt nguồn, dùng dụng cụ phù hợp','Sửa khi máy chạy','Dùng tay','Tuỳ ý'], 0, 'Sửa chữa: tắt máy, ngắt nguồn, dùng dụng cụ chuẩn, mặc PPE.'),
    Q('Khắc phục sự cố cần?', ['Chẩn đoán nguyên nhân trước khi sửa','Sửa ngay','Bỏ qua','Đập máy'], 0, 'Chẩn đoán đúng nguyên nhân trước khi sửa giúp tiết kiệm thời gian và chi phí.'),
    Q('Hồ sơ bảo dưỡng giúp?', ['Theo dõi lịch sử, dự báo hỏng hóc','Vô dụng','Tốn thời gian','Phá hoại'], 0, 'Hồ sơ bảo dưỡng (logbook) giúp theo dõi, dự báo, lập kế hoạch.'),
  ]),

  M(28, 'Sản phẩm cơ khí trong đời sống', [
    Q('Sản phẩm cơ khí trong gia đình gồm?', ['Tủ lạnh, máy giặt, quạt, nồi cơm điện','Chỉ ghế','Chỉ giường','Chỉ tủ'], 0, 'Cơ khí gia dụng: tủ lạnh, máy giặt, quạt, máy xay, nồi cơm điện.'),
    Q('Xe đạp gồm các bộ phận cơ bản?', ['Khung, bánh, xích, phanh, ghi đông','Chỉ bánh','Chỉ khung','Chỉ ghi đông'], 0, 'Xe đạp: khung, bánh xe, bộ truyền xích, phanh, ghi đông, yên.'),
    Q('Ô tô có các hệ thống chính?', ['Động cơ, truyền lực, lái, phanh, treo','Chỉ động cơ','Chỉ bánh','Không có hệ thống'], 0, 'Ô tô: động cơ, truyền lực (hộp số), lái, phanh, treo, điện, an toàn.'),
    Q('Xe máy điện ưu điểm?', ['Sạch, êm, ít bảo dưỡng','Tốn xăng','Ồn','Phức tạp'], 0, 'Xe máy điện sạch, êm, ít bảo dưỡng nhưng cần sạc và pin có hạn.'),
    Q('Robot trong nhà phổ biến?', ['Robot hút bụi, lau nhà','Robot giáo viên','Robot cảnh sát','Robot bác sĩ'], 0, 'Robot hút bụi (Roomba), robot lau nhà đang trở nên phổ biến trong gia đình.'),
    Q('Thiết bị cơ khí y tế phổ biến?', ['Máy MRI, CT, máy thở, ghế nha','Bút chì','Vở','Bàn'], 0, 'Cơ khí y tế: MRI, CT, máy X-quang, máy thở, ghế nha khoa, dụng cụ phẫu thuật.'),
  ]),

  M(29, 'Dự án thiết kế kỹ thuật', [
    Q('Dự án thiết kế cần bắt đầu bằng?', ['Đặt câu hỏi: vấn đề gì cần giải quyết?','Vẽ ngay','Mua vật tư','Chế tạo'], 0, 'Dự án thiết kế: bắt đầu bằng xác định vấn đề và mục tiêu.'),
    Q('Sau khi xác định vấn đề, bước tiếp là?', ['Nghiên cứu giải pháp đã có','Chế tạo ngay','Vứt bỏ','Quên'], 0, 'Nghiên cứu giải pháp sẵn có để tham khảo, tránh "phát minh lại bánh xe".'),
    Q('Tiêu chí của thiết kế kỹ thuật?', ['Chức năng, an toàn, kinh tế, thẩm mỹ, bền vững','Chỉ đẹp','Chỉ rẻ','Chỉ chức năng'], 0, 'Tiêu chí thiết kế: chức năng, an toàn, kinh tế, thẩm mỹ, bền vững với môi trường.'),
    Q('Phương pháp đánh giá thiết kế?', ['Test, thu phản hồi, so sánh','Tự khen','Bỏ qua','Tuỳ ý'], 0, 'Đánh giá: test thực tế, thu phản hồi người dùng, so sánh với tiêu chí.'),
    Q('Iteration (lặp) trong thiết kế nghĩa là?', ['Cải tiến qua nhiều vòng','Chỉ 1 lần','Bỏ giữa chừng','Không cần'], 0, 'Thiết kế tốt thường qua nhiều vòng cải tiến: thử - đánh giá - sửa.'),
    Q('Báo cáo dự án cần?', ['Mô tả vấn đề, giải pháp, kết quả, bài học','Chỉ kết quả','Chỉ vấn đề','Không cần'], 0, 'Báo cáo: trình bày vấn đề, quá trình, giải pháp, kết quả, bài học rút ra.'),
  ]),

  M(30, 'Nghề cơ khí ở Việt Nam', [
    Q('Cơ khí là ngành?', ['Cơ bản, nền tảng cho công nghiệp','Phụ trợ','Tay nghề thấp','Tương lai mờ'], 0, 'Cơ khí là ngành cơ bản, nền tảng cho mọi ngành công nghiệp chế tạo.'),
    Q('Việt Nam phát triển cơ khí ở?', ['Cơ khí chế tạo, lắp ráp, sửa chữa','Chỉ sửa chữa','Chỉ lắp ráp','Không phát triển'], 0, 'VN có cơ khí chế tạo, lắp ráp (ô tô, xe máy), sửa chữa, công nghiệp hỗ trợ.'),
    Q('Các trường đào tạo cơ khí?', ['ĐHBK HN, ĐHBK HCM, ĐH Cần Thơ, các CĐ kỹ thuật','Chỉ 1 trường','Không có','Chỉ trường tư'], 0, 'Nhiều trường: ĐHBK HN, HCM, Đà Nẵng, Cần Thơ, ĐH Công nghiệp, các CĐ kỹ thuật.'),
    Q('Cơ hội việc làm cơ khí ở VN?', ['Lớn, đặc biệt khi FDI đầu tư','Hạn chế','Không có','Chỉ ở nước ngoài'], 0, 'Cơ khí VN có nhu cầu lớn từ DN FDI (Samsung, Honda, Toyota...).'),
    Q('Kỹ sư cơ khí cần kỹ năng?', ['Kỹ thuật + ngoại ngữ + làm việc nhóm','Chỉ tay nghề','Chỉ lý thuyết','Không cần'], 0, 'KS cơ khí cần: kỹ thuật, tiếng Anh (đọc tài liệu, làm DN FDI), teamwork, sáng tạo.'),
    Q('Mức lương cơ khí ở VN?', ['Tăng theo kinh nghiệm và kỹ năng','Cố định','Thấp','Không có'], 0, 'Mức lương tăng theo kinh nghiệm; kỹ sư có kỹ năng tốt, ngoại ngữ tốt thu nhập cao.'),
  ]),

  M(31, 'Cơ khí và môi trường', [
    Q('Sản xuất cơ khí gây tác động môi trường?', ['Tiêu thụ năng lượng, phát thải, chất thải','Không gây gì','Chỉ giúp','Vô hại'], 0, 'Cơ khí tiêu thụ điện, nước, phát thải CO₂, NOx, chất thải dầu mỡ.'),
    Q('Sản xuất sạch hơn (cleaner production) là?', ['Giảm chất thải tại nguồn','Xử lý sau','Bỏ qua','Tăng chất thải'], 0, 'Cleaner production: tối ưu quy trình để giảm chất thải, năng lượng tại nguồn.'),
    Q('Tái chế kim loại có ưu điểm?', ['Tiết kiệm tài nguyên, giảm năng lượng','Tốn năng lượng hơn','Không có ưu','Phá hoại'], 0, 'Tái chế kim loại tiết kiệm nguyên liệu thô, giảm năng lượng so với sản xuất mới.'),
    Q('Vật liệu thân thiện môi trường gồm?', ['Composite sinh học, vật liệu tái chế','Nhựa khó phân huỷ','Hoá chất độc','Kim loại quý'], 0, 'Vật liệu xanh: composite sinh học, vật liệu tái chế, không độc.'),
    Q('Tiết kiệm năng lượng trong cơ khí?', ['Dùng động cơ hiệu suất cao, biến tần','Lãng phí','Tăng tiêu thụ','Không quan tâm'], 0, 'Tiết kiệm năng lượng: động cơ hiệu suất cao, biến tần, bảo trì tốt.'),
    Q('Kinh tế tuần hoàn trong cơ khí?', ['Tái sử dụng - tái chế - tái sản xuất','Vứt bỏ','Tạo nhiều rác','Khai thác cạn kiệt'], 0, 'Kinh tế tuần hoàn: thiết kế để tái sử dụng, tái chế, tái sản xuất.'),
  ]),

  M(32, 'Công nghệ in 3D và cách mạng cơ khí', [
    Q('In 3D (additive manufacturing) là?', ['Tạo vật thể bằng cách thêm vật liệu lớp này lớp khác','Cắt bỏ','Đúc','Hàn'], 0, 'In 3D: thêm vật liệu theo từng lớp dựa trên mô hình số.'),
    Q('Vật liệu in 3D phổ biến?', ['Nhựa (PLA, ABS), nhựa nylon, kim loại','Chỉ giấy','Chỉ vải','Chỉ gỗ'], 0, 'Vật liệu: PLA, ABS, PETG, nylon, resin, kim loại (Ti, thép, nhôm).'),
    Q('Ưu điểm của in 3D?', ['Hình dạng phức tạp, prototype nhanh, tuỳ chỉnh','Sản xuất hàng loạt','Tốc độ cao','Giá rẻ tuyệt đối'], 0, 'In 3D: hình dạng phức tạp, prototype nhanh, sản phẩm tuỳ chỉnh cá nhân hoá.'),
    Q('Ứng dụng in 3D trong y tế?', ['In bộ phận thay thế (răng, khớp, mô)','Khám bệnh','Phẫu thuật','Đo nhiệt'], 0, 'In 3D y tế: răng giả, khớp háng, dụng cụ phẫu thuật, mô hình giải phẫu, in mô.'),
    Q('In 3D trong hàng không?', ['Chi tiết phức tạp, nhẹ','Không dùng','Chỉ trang trí','Cấm dùng'], 0, 'Hàng không dùng in 3D titan/nhôm cho chi tiết phức tạp, giảm trọng lượng.'),
    Q('Nhược điểm của in 3D?', ['Tốc độ chậm với sản xuất hàng loạt, vật liệu hạn chế','Không có nhược','Đắt nhất','Không an toàn'], 0, 'In 3D chậm khi sản xuất hàng loạt, chi phí vật liệu cao, độ bền chưa bằng đúc/rèn.'),
  ]),

  M(33, 'Cơ khí thông minh - Industry 4.0', [
    Q('Industry 4.0 trong cơ khí gồm?', ['CNC + robot + IoT + AI + dữ liệu lớn','Chỉ máy đơn','Chỉ thủ công','Lạc hậu'], 0, 'Industry 4.0: CNC, robot, IoT, AI, big data, digital twin, dùng dữ liệu thời gian thực.'),
    Q('Digital twin là?', ['Bản sao số của thiết bị/sản phẩm thực','Robot','Game','Phim'], 0, 'Digital twin: mô phỏng số đồng bộ với thiết bị thật để giám sát, dự đoán.'),
    Q('IoT trong nhà máy giúp?', ['Giám sát thiết bị thời gian thực','Vô ích','Phá hoại','Làm chậm'], 0, 'IoT cảm biến giám sát thiết bị 24/7, phát hiện hỏng sớm, dự báo bảo trì.'),
    Q('AI giúp gì cho cơ khí?', ['Dự báo hỏng hóc, tối ưu sản xuất','Vô dụng','Gây hỏng','Tăng chi phí'], 0, 'AI dự báo hỏng hóc (predictive maintenance), tối ưu quy trình, phát hiện lỗi.'),
    Q('Cobot (collaborative robot) là?', ['Robot làm việc cùng người','Chỉ thay thế người','Phá hoại','Vô dụng'], 0, 'Cobot làm việc an toàn cùng con người, hỗ trợ trong dây chuyền.'),
    Q('Tương lai cơ khí ở VN?', ['Hướng đến tự động hoá và cơ khí thông minh','Quay lại thủ công','Đóng cửa','Cấm phát triển'], 0, 'VN đang đẩy mạnh tự động hoá, cơ khí thông minh để cạnh tranh quốc tế.'),
  ]),

  M(34, 'Hướng nghiệp cơ khí', [
    Q('Học cơ khí có thể làm việc tại?', ['Nhà máy ô tô, xe máy, điện tử, dầu khí','Chỉ nhà nước','Chỉ tư nhân','Không có nơi'], 0, 'Cơ khí làm việc tại: Honda, Toyota, Samsung, dầu khí, đóng tàu, hàng không.'),
    Q('Vị trí công việc cơ khí gồm?', ['Kỹ sư thiết kế, kỹ sư sản xuất, bảo trì, QC','Chỉ thiết kế','Chỉ vận hành','Chỉ bán'], 0, 'Vị trí: thiết kế, sản xuất, bảo trì, kiểm soát chất lượng, R&D, dự án.'),
    Q('Cơ khí cần học tốt môn?', ['Toán, Lý, vẽ kỹ thuật, ngoại ngữ','Chỉ vẽ','Chỉ Toán','Chỉ Lý'], 0, 'Cơ khí cần Toán, Lý vững; vẽ kỹ thuật, tin học, tiếng Anh.'),
    Q('Cơ khí có cần sáng tạo không?', ['Có (đặc biệt R&D, thiết kế)','Không cần','Chỉ làm theo','Cấm sáng tạo'], 0, 'Sáng tạo rất quan trọng, đặc biệt ở các vị trí R&D, thiết kế, cải tiến.'),
    Q('Kỹ năng mềm cho cơ khí?', ['Giao tiếp, làm nhóm, giải quyết vấn đề','Không cần','Chỉ kỹ thuật','Bỏ qua'], 0, 'Soft skills: giao tiếp, teamwork, problem-solving, quản lý dự án quan trọng.'),
    Q('Học sinh quan tâm cơ khí nên?', ['Tham gia CLB robotics, tìm hiểu CAD/3D','Bỏ học','Chỉ chơi game','Không làm gì'], 0, 'Học sinh nên tham gia CLB robotics, tìm hiểu CAD, in 3D, đọc về xe/máy bay.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Vẽ kỹ thuật là?', ['Ngôn ngữ chung kỹ thuật','Vẽ tranh','Vẽ truyện','Tự do'], 0, 'Vẽ kỹ thuật là ngôn ngữ chung.'),
    Q('3 hình chiếu chính?', ['Đứng - bằng - cạnh','Trên - dưới - giữa','Trong - ngoài','Trái - phải'], 0, 'Đứng - bằng - cạnh.'),
    Q('CNC là?', ['Điều khiển số bằng máy tính','Bằng tay','Bằng cảm tính','Ngẫu nhiên'], 0, 'CNC = Computer Numerical Control.'),
    Q('Thép là?', ['Hợp kim Fe-C với C<2,14%','Fe tinh khiết','Al','Cu'], 0, 'Thép: hợp kim Fe-C với C<2,14%.'),
    Q('Khi vào xưởng cần?', ['Đầy đủ PPE','Mặc bừa','Đi dép','Áo dài tay rộng'], 0, 'Bắt buộc PPE: mũ, kính, găng, giày bảo hộ.'),
    Q('In 3D giúp?', ['Tạo prototype nhanh','Sản xuất hàng loạt rẻ','Bỏ qua thiết kế','Phá hoại'], 0, 'In 3D nhanh chóng tạo prototype để kiểm thử.'),
  ]),
];

export const H10CN_SCENARIOS = indexBy(H10CN_WEEKS);
