// ============================================================
// Lớp 12 · CÔNG NGHỆ — Định hướng CÔNG NGHỆ ĐIỆN - ĐIỆN TỬ (KNTT)
// HK1 (1–18): Công nghệ Điện. HK2 (19–35): Công nghệ Điện tử.
// ID prefix: "H12CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12CN', 'cong-nghe', n, title, qs, opts);

export const H12CN_WEEKS = [
  // ──────────────── HK1 — Công nghệ Điện ────────────────
  M(1, 'Giới thiệu chung về kĩ thuật điện', [
    Q('Kĩ thuật điện là lĩnh vực?', ['Cơ khí', 'Nghiên cứu và ứng dụng các hiện tượng điện-từ vào sản xuất và đời sống', 'Hoá học', 'Sinh học'], 1, 'Electrical engineering.'),
    Q('Các ngành chính của kĩ thuật điện?', ['Chỉ điện gia dụng', 'Điện năng (sản xuất-truyền tải-phân phối), điện tử, tự động hoá, điện lạnh', 'Chỉ điện tử', 'Chỉ điện công nghiệp'], 1, 'Đa nhánh.'),
    Q('Dòng điện một chiều (DC) có đặc điểm?', ['Đổi chiều liên tục', 'Cường độ và chiều không đổi theo thời gian', 'Không có cường độ', 'Tự sinh'], 1, 'Direct Current.'),
    Q('Dòng điện xoay chiều (AC) có?', ['Cường độ không đổi', 'Cường độ và chiều thay đổi tuần hoàn theo thời gian (thường hình sin)', 'Không thay đổi', 'Chỉ chiều thay đổi'], 1, 'Alternating Current.'),
    Q('Điện áp lưới sinh hoạt Việt Nam?', ['110V', '220V, 50Hz', '380V', '600V'], 1, '220V/50Hz.'),
    Q('Công suất điện P = ?', ['U + I', 'U × I (với dòng một chiều); U × I × cosφ (với xoay chiều)', 'U − I', 'U / I'], 1, 'P = UI.'),
  ]),

  M(2, 'Ngành nghề trong kĩ thuật điện', [
    Q('Kĩ sư điện làm việc?', ['Chỉ thiết kế', 'Thiết kế, vận hành, bảo trì hệ thống điện công nghiệp và dân dụng', 'Sửa cơ khí', 'Lập trình AI'], 1, 'Đa nhiệm.'),
    Q('Thợ điện dân dụng đảm trách?', ['Sản xuất chip', 'Lắp đặt, sửa chữa hệ thống điện trong nhà và toà nhà', 'Vận hành nhà máy điện', 'Truyền tải cao thế'], 1, 'Điện dân dụng.'),
    Q('Kĩ thuật viên điện - điện tử cần kĩ năng?', ['Chỉ lý thuyết', 'Đọc bản vẽ, sử dụng đồng hồ đo, tuân thủ an toàn lao động, sửa chữa thiết bị', 'Chỉ ngoại ngữ', 'Chỉ tin học'], 1, 'Kĩ năng nghề.'),
    Q('Để theo nghề kĩ thuật điện học sinh nên?', ['Bỏ Toán-Lí', 'Chú trọng Toán, Vật lí, Công nghệ; rèn kĩ năng thực hành', 'Chỉ học Văn', 'Không học gì'], 1, 'Định hướng STEM.'),
    Q('Cơ hội nghề nghiệp ngành điện tại Việt Nam?', ['Hạn hẹp', 'Lớn do nhu cầu năng lượng, công nghiệp hoá, năng lượng tái tạo', 'Đang giảm', 'Không có'], 1, 'Triển vọng tốt.'),
    Q('An toàn nghề điện đòi hỏi?', ['Bỏ qua', 'Trang bị bảo hộ, tuân thủ quy trình, kiểm tra trước khi làm việc, ngắt điện trước khi sửa', 'Làm bừa', 'Không cần'], 1, 'An toàn LĐ.'),
  ]),

  M(3, 'Dòng điện xoay chiều ba pha', [
    Q('Dòng điện xoay chiều 3 pha gồm?', ['1 pha', '3 dòng xoay chiều cùng tần số, cùng biên độ, lệch nhau 120°', '2 pha', '4 pha'], 1, '3 pha 120°.'),
    Q('Ưu điểm của dòng 3 pha so với 1 pha?', ['Tốn cáp hơn', 'Truyền tải công suất lớn, hiệu suất cao, vận hành động cơ ba pha tốt', 'Không có ưu điểm', 'Chậm hơn'], 1, 'Ưu việt cho công nghiệp.'),
    Q('Mạch 3 pha có 2 cách nối phổ biến?', ['Sao và tam giác', 'Song song và nối tiếp', 'Chuỗi và mắt lưới', 'Tròn và vuông'], 0, 'Y (sao) và Δ (tam giác).'),
    Q('Trong nối sao có dây trung tính, điện áp dây quan hệ với điện áp pha?', ['U_d = U_p', 'U_d = √3 × U_p', 'U_d = 3 × U_p', 'U_d = U_p / √3'], 1, 'U_d = √3 U_p (≈ 380V/220V).'),
    Q('Trong nối tam giác, dòng dây quan hệ với dòng pha?', ['I_d = I_p', 'I_d = √3 × I_p', 'I_d = 3 I_p', 'I_d = I_p / √3'], 1, 'I_d = √3 I_p.'),
    Q('Lưới hạ áp 380V/220V phổ biến ở Việt Nam là?', ['1 pha 2 dây', '3 pha 4 dây (3 dây pha + 1 dây trung tính), nối sao', '3 pha 3 dây', 'DC'], 1, '3 pha 4 dây.'),
  ]),

  M(4, 'Hệ thống điện quốc gia', [
    Q('Hệ thống điện quốc gia gồm?', ['Chỉ nhà máy', 'Nguồn (nhà máy), truyền tải, phân phối, hộ tiêu thụ', 'Chỉ tải', 'Chỉ truyền tải'], 1, '4 khâu chính.'),
    Q('Vì sao phải truyền tải điện ở điện áp cao?', ['Cho đẹp', 'Giảm tổn hao công suất do dòng điện nhỏ đi (P_hao = I²R)', 'Tăng tổn hao', 'Không có lí do'], 1, 'Giảm I để giảm I²R.'),
    Q('Cấp điện áp truyền tải siêu cao của VN?', ['100V', '500kV (đường dây 500kV Bắc-Nam)', '220V', '380V'], 1, '500kV.'),
    Q('Máy biến áp tăng áp dùng ở?', ['Hộ gia đình', 'Đầu nguồn truyền tải, sau nhà máy điện', 'Đèn pin', 'Sạc điện thoại'], 1, 'Trạm tăng áp.'),
    Q('Máy biến áp hạ áp dùng ở?', ['Đầu nguồn', 'Trạm phân phối gần hộ tiêu thụ (hạ về 380V/220V)', 'Truyền tải xa', 'Máy phát'], 1, 'Trạm hạ áp.'),
    Q('Tần số lưới điện Việt Nam?', ['60Hz', '50Hz', '100Hz', '0Hz'], 1, '50Hz.'),
  ]),

  M(5, 'Sản xuất điện năng', [
    Q('Nhà máy thuỷ điện sản xuất điện nhờ?', ['Hơi nước', 'Năng lượng nước chảy quay tua bin', 'Gió', 'Mặt trời'], 1, 'Thuỷ năng.'),
    Q('Nhà máy nhiệt điện than dùng?', ['Nước trực tiếp', 'Đốt than → hơi nước cao áp quay tua bin → máy phát', 'Gió', 'Hạt nhân'], 1, 'Nhiệt năng.'),
    Q('Điện gió và điện mặt trời thuộc nhóm?', ['Năng lượng hoá thạch', 'Năng lượng tái tạo', 'Hạt nhân', 'Sinh khối'], 1, 'Tái tạo.'),
    Q('Pin mặt trời chuyển?', ['Cơ năng → điện', 'Quang năng → điện năng (hiệu ứng quang điện)', 'Nhiệt → điện', 'Hoá → điện'], 1, 'Photovoltaic.'),
    Q('Nhà máy điện hạt nhân dùng?', ['Đốt than', 'Phản ứng phân hạch hạt nhân toả nhiệt → hơi nước → tua bin', 'Sóng biển', 'Gió'], 1, 'Nuclear power.'),
    Q('Xu hướng năng lượng VN đến 2030?', ['Chỉ than', 'Tăng tỉ trọng năng lượng tái tạo, giảm dần điện than', 'Bỏ điện', 'Chỉ thuỷ điện'], 1, 'Quy hoạch điện VIII.'),
  ]),

  M(6, 'Mạng điện sản xuất quy mô nhỏ', [
    Q('Mạng điện sản xuất quy mô nhỏ thường dùng?', ['Chỉ 1 pha', 'Mạng hạ áp 3 pha 380V/220V', 'Cao áp 110kV', 'Siêu cao áp'], 1, 'Hạ áp 3 pha.'),
    Q('Tải 3 pha gồm?', ['Chỉ động cơ', 'Động cơ điện 3 pha, lò điện, máy hàn, hệ chiếu sáng 1 pha…', 'Chỉ đèn', 'Chỉ quạt'], 1, 'Đa tải.'),
    Q('Khi tải 3 pha đối xứng?', ['Dây trung tính có dòng lớn', 'Dòng dây trung tính bằng 0 (lí tưởng)', 'Cháy dây', 'Không có dòng pha'], 1, 'Cân bằng pha.'),
    Q('Để bảo vệ mạng điện sản xuất dùng?', ['Không cần', 'Cầu chì, aptomat (CB), rơle nhiệt, chống sét, nối đất bảo vệ', 'Băng dính', 'Dây thường'], 1, 'Thiết bị bảo vệ.'),
    Q('Aptomat (CB) tự ngắt khi?', ['Bình thường', 'Quá tải hoặc ngắn mạch', 'Đủ tải', 'Không tải'], 1, 'Bảo vệ tự động.'),
    Q('Nối đất bảo vệ giúp?', ['Tăng điện áp vỏ', 'Đưa dòng rò xuống đất, tránh giật khi vỏ thiết bị bị rò điện', 'Tăng tổn hao', 'Không tác dụng'], 1, 'Earthing.'),
  ]),

  M(7, 'Mạch điện hạ áp sinh hoạt', [
    Q('Mạch điện hạ áp sinh hoạt 1 pha 2 dây gồm?', ['3 dây', 'Dây pha (L) và dây trung tính (N)', '4 dây', '1 dây'], 1, '1 pha 2 dây.'),
    Q('Mạch hạ áp 1 pha 3 dây gồm?', ['L + N + PE (dây tiếp đất bảo vệ)', 'L + L + N', 'N + N + PE', 'L + L + L'], 0, 'L, N, PE.'),
    Q('Công tơ điện đo?', ['Cường độ tức thời', 'Điện năng tiêu thụ (kWh) qua thời gian', 'Điện áp', 'Tần số'], 1, 'Energy meter.'),
    Q('Một bóng đèn 60W dùng 5 giờ tiêu thụ?', ['60 Wh', '300 Wh = 0,3 kWh', '12 Wh', '5 Wh'], 1, '60 × 5 = 300 Wh.'),
    Q('Cầu chì có tác dụng?', ['Trang trí', 'Bảo vệ mạch khi quá dòng (chì nóng chảy ngắt mạch)', 'Tăng dòng', 'Tăng áp'], 1, 'Fuse.'),
    Q('Trong mạch chiếu sáng dùng công tắc một cực, công tắc đặt ở?', ['Dây trung tính', 'Dây pha (L) — để khi ngắt thì bóng đèn không còn điện áp', 'Bất kỳ', 'Không cần'], 1, 'Công tắc trên dây pha.'),
  ]),

  M(8, 'Tính toán mạch điện hạ áp — bài tập', [
    Q('Một ấm điện 220V-1000W dùng đúng điện áp định mức. Cường độ dòng?', ['I = 1A', 'I = P/U = 1000/220 ≈ 4,55 A', '10 A', '0,45 A'], 1, 'I = P/U.'),
    Q('Điện trở của ấm trên?', ['R = U/I = 220/4,55 ≈ 48,4 Ω', 'R = P × U', 'R = U × I', 'R = P/U'], 0, 'Ôm: R=U/I = U²/P = 48,4Ω.'),
    Q('Một hộ tiêu thụ trong tháng dùng 250 kWh. Đơn giá trung bình 2.000 đ/kWh. Tiền điện?', ['250.000 đ', '500.000 đ', '125.000 đ', '2.000.000 đ'], 1, '250×2000 = 500.000 đ.'),
    Q('Hai bóng đèn 220V-100W mắc nối tiếp vào lưới 220V. Mỗi bóng nhận điện áp?', ['220V', '110V', '0V', '440V'], 1, 'Chia đều: 110V/bóng.'),
    Q('Khi đó công suất mỗi bóng?', ['Bằng định mức 100W', 'Nhỏ hơn nhiều so với 100W (vì U giảm còn 110V, P giảm theo U²)', 'Lớn hơn', 'Bằng 0'], 1, 'P~U², ≈ 25W.'),
    Q('Để dùng đúng định mức, hai bóng đèn 220V phải?', ['Mắc nối tiếp', 'Mắc song song với nhau, mỗi bóng nối thẳng vào 220V', 'Mắc nối đất', 'Không nối'], 1, 'Song song.'),
  ]),

  M(9, 'Hệ thống điện trong gia đình — Tổng quan', [
    Q('Hệ thống điện trong gia đình thường có sơ đồ?', ['Phức tạp ngẫu nhiên', 'Từ công tơ → tủ điện (CB tổng + CB nhánh) → các ổ cắm và thiết bị', 'Không có quy chuẩn', 'Trộn lẫn'], 1, 'Sơ đồ chuẩn.'),
    Q('Tủ điện trong nhà có?', ['Chỉ aptomat tổng', 'Aptomat tổng + nhiều aptomat nhánh (chiếu sáng, ổ cắm, điều hoà…)', 'Chỉ cầu chì', 'Không có gì'], 1, 'Phân chia nhánh.'),
    Q('Vì sao tách aptomat nhánh?', ['Đẹp', 'Cô lập sự cố, bảo trì an toàn, bảo vệ chọn lọc', 'Tốn kém', 'Không có lí do'], 1, 'Selective protection.'),
    Q('Tiết diện dây dẫn chọn theo?', ['Tuỳ ý', 'Dòng tải tính toán (I) và độ sụt áp cho phép', 'Theo màu', 'Theo giá'], 1, 'Cable sizing.'),
    Q('Ổ cắm 3 chấu gồm?', ['L + N', 'L + N + PE (tiếp đất)', 'L + L + N', '3 chấu L'], 1, 'Có dây tiếp đất.'),
    Q('Tại sao phải có dây tiếp đất (PE) cho thiết bị có vỏ kim loại?', ['Đẹp', 'Chống điện giật khi rò điện ra vỏ', 'Tăng công suất', 'Tăng tốc'], 1, 'An toàn.'),
  ]),

  M(10, 'Thiết bị điện trong gia đình', [
    Q('Thiết bị chiếu sáng phổ biến hiện nay?', ['Đèn sợi đốt', 'Đèn LED — hiệu suất cao, tuổi thọ dài', 'Đèn dầu', 'Đèn nến'], 1, 'LED.'),
    Q('Thiết bị điện gia dụng tiêu thụ nhiều điện?', ['Đèn LED', 'Điều hoà, bình nóng lạnh, tủ lạnh, máy giặt', 'Đèn ngủ', 'Điều khiển từ xa'], 1, 'High power.'),
    Q('Để tiết kiệm điện điều hoà nên?', ['Đặt 16°C', 'Đặt 25-27°C, bảo dưỡng, dùng inverter, tắt khi không cần', 'Bật suốt ngày', 'Đặt thật lạnh'], 1, 'Tiết kiệm.'),
    Q('Bình nóng lạnh nên?', ['Bật cả ngày', 'Bật trước khi dùng 15-30 phút, có chống giật ELCB', 'Không cần ELCB', 'Cắm thẳng tay vào dây'], 1, 'An toàn + tiết kiệm.'),
    Q('Inverter trong máy điều hoà giúp?', ['Tăng tốn điện', 'Điều khiển tần số máy nén → tiết kiệm điện, ổn định nhiệt độ', 'Tăng tiếng ồn', 'Không có tác dụng'], 1, 'Variable speed.'),
    Q('Nhãn năng lượng 5 sao trên thiết bị nghĩa là?', ['Tốn điện nhất', 'Tiết kiệm điện nhất trong nhóm sản phẩm cùng loại', 'Mới ra', 'Đắt nhất'], 1, 'Energy label.'),
  ]),

  M(11, 'Thiết kế mạch điện gia đình đơn giản', [
    Q('Bước đầu thiết kế mạch điện gia đình?', ['Mua dây', 'Khảo sát nhu cầu phụ tải, sơ đồ mặt bằng, vị trí thiết bị', 'Đập tường', 'Tự lắp'], 1, 'Khảo sát + bản vẽ.'),
    Q('Tính tổng công suất gia đình bằng?', ['Cộng công suất các thiết bị dự kiến dùng, nhân hệ số đồng thời', 'Lấy đại 1 con số', 'Mua bừa', 'Không tính'], 0, 'Có hệ số đồng thời <1.'),
    Q('Chọn aptomat tổng dựa trên?', ['Tuỳ ý', 'Dòng tính toán tổng, có hệ số dự phòng', 'Dây dài', 'Màu sắc'], 1, 'I_CB ≥ I_tt.'),
    Q('Cho gia đình tải tính toán 6 kW, U=220V, cos φ ≈ 1. Dòng?', ['1A', 'I = P/(U cosφ) ≈ 27,3 A', '60 A', '6 A'], 1, '6000/220 ≈ 27,3 A.'),
    Q('Để đảm bảo an toàn nên có?', ['Không gì', 'Chống giật RCBO/ELCB ở các nhánh ổ cắm, bình nóng lạnh', 'Chỉ aptomat thường', 'Chỉ cầu chì'], 1, 'RCBO 30mA.'),
    Q('Sơ đồ nguyên lí khác sơ đồ lắp đặt ở chỗ?', ['Không khác', 'Nguyên lí biểu diễn nguyên tắc hoạt động; lắp đặt mô tả bố trí thực tế trên mặt bằng', 'Cùng một thứ', 'Tuỳ vẽ'], 1, 'Hai loại bản vẽ.'),
  ]),

  M(12, 'Thực hành — Lắp đặt mạch chiếu sáng đơn giản', [
    Q('Mạch chiếu sáng 1 bóng đèn dùng 1 công tắc gồm?', ['Bóng + công tắc + cầu chì/aptomat, nguồn 220V', 'Chỉ bóng', 'Chỉ công tắc', 'Chỉ dây'], 0, 'Cơ bản.'),
    Q('Mạch điều khiển 1 bóng đèn từ 2 vị trí dùng?', ['1 công tắc đơn', '2 công tắc 3 cực (cầu thang)', 'Không thể', '3 công tắc'], 1, 'Cầu thang.'),
    Q('Khi lắp đặt, dây tiếp đất có màu?', ['Đen', 'Vàng sọc xanh lá (chuẩn IEC)', 'Đỏ', 'Trắng'], 1, 'PE - vàng/xanh lá.'),
    Q('Dây trung tính (N) thường màu?', ['Vàng/xanh', 'Xanh dương (chuẩn IEC)', 'Đen', 'Đỏ'], 1, 'N - xanh dương.'),
    Q('Dây pha (L) có thể màu?', ['Vàng/xanh', 'Nâu, đen, xám (khác với N và PE)', 'Xanh dương', 'Vàng sọc xanh'], 1, 'L thường nâu/đen.'),
    Q('Trước khi đấu nối phải?', ['Cứ làm', 'Ngắt điện đầu nguồn, kiểm tra bằng bút thử điện', 'Bỏ qua', 'Cầm trần tay'], 1, 'An toàn.'),
  ]),

  M(13, 'An toàn điện', [
    Q('Tai nạn điện thường gặp?', ['Không có', 'Điện giật, hồ quang, cháy nổ do điện', 'Sốt cao', 'Đau bụng'], 1, '3 nhóm chính.'),
    Q('Ngưỡng nguy hiểm với người ở 50Hz?', ['1A', 'Khoảng 30 mA trở lên có thể gây nguy hiểm tim', '10A', '100A'], 1, '30mA ngưỡng RCBO.'),
    Q('Khi thấy người bị điện giật phải?', ['Lôi ngay tay không', 'Ngắt nguồn điện trước, sau đó dùng vật cách điện tách nạn nhân', 'Đổ nước', 'Đứng nhìn'], 1, 'Cứu hộ đúng cách.'),
    Q('Sau khi tách nạn nhân khỏi nguồn điện cần?', ['Bỏ về nhà', 'Sơ cứu (hô hấp nhân tạo + ép tim nếu cần) và gọi cấp cứu 115', 'Chờ tự khỏi', 'Cho ăn'], 1, 'Sơ cứu CPR.'),
    Q('Thiết bị bảo vệ cá nhân khi sửa điện?', ['Không cần', 'Găng cách điện, giày cách điện, kính, mũ; bút thử điện', 'Áo cotton', 'Đi chân trần'], 1, 'PPE.'),
    Q('Phòng tránh điện giật trong gia đình?', ['Đi chân trần khi tay ướt sờ thiết bị', 'Lắp RCBO, tiếp đất thiết bị, không dùng điện khi tay ướt, xa nước', 'Cắm trần dây', 'Bỏ qua'], 1, 'Phòng ngừa.'),
  ]),

  M(14, 'Tiết kiệm điện năng', [
    Q('Tiết kiệm điện mang lại lợi ích?', ['Tăng chi phí', 'Giảm chi phí, giảm phát thải CO₂, đảm bảo an ninh năng lượng', 'Gây hỏng', 'Vô ích'], 1, 'Lợi ích đa diện.'),
    Q('Biện pháp tiết kiệm điện hộ gia đình?', ['Để máy ở chế độ chờ', 'Tắt thiết bị khi không dùng, dùng LED, inverter, nhãn năng lượng cao', 'Bật quên', 'Mở cửa khi điều hoà'], 1, 'Hành vi tốt.'),
    Q('Một bóng LED 10W thay sợi đốt 60W cùng độ sáng, 1 năm dùng 4h/ngày tiết kiệm?', ['(60-10) × 4 × 365 / 1000 = 73 kWh', '60 kWh', '0 kWh', '500 kWh'], 0, '50W × 4h × 365 = 73 kWh.'),
    Q('Để điều hoà tiết kiệm, chênh nhiệt độ trong-ngoài không quá?', ['1°C', '5-8°C, nhiệt độ phòng 25-27°C', '20°C', '30°C'], 1, 'Khuyến nghị.'),
    Q('Giờ cao điểm điện lưới?', ['Đêm khuya', 'Sáng 9h30-11h30 và tối 17h-20h (theo giá điện sản xuất)', 'Trưa 12h-13h', '3h sáng'], 1, 'Giờ cao điểm.'),
    Q('Lắp đặt điện mặt trời mái nhà giúp?', ['Tăng tiền điện', 'Giảm phụ thuộc lưới, có thể bán điện dư cho EVN (theo chính sách)', 'Phá lưới', 'Không lợi'], 1, 'PV rooftop.'),
  ]),

  M(15, 'Ôn tập điện', [
    Q('Điện áp lưới sinh hoạt VN?', ['110V', '220V', '380V', '500V'], 1, '220V/50Hz.'),
    Q('Lưới 3 pha 4 dây hạ áp có điện áp dây/pha?', ['380/110V', '380/220V', '220/110V', '500/220V'], 1, '380/220V.'),
    Q('Aptomat tự ngắt khi?', ['Bình thường', 'Quá tải hoặc ngắn mạch', 'Đủ tải', 'Không tải'], 1, 'CB.'),
    Q('Tiết kiệm điện thực hiện bằng?', ['Bật suốt', 'Dùng LED, inverter, tắt khi không dùng, dán nhãn năng lượng cao', 'Bỏ tủ lạnh', 'Đập điều hoà'], 1, 'Hành vi.'),
    Q('Cầu chì có chức năng?', ['Tăng dòng', 'Bảo vệ quá dòng - chì nóng chảy ngắt mạch', 'Đo điện', 'Không có'], 1, 'Fuse.'),
    Q('Dây tiếp đất PE có màu?', ['Đỏ', 'Vàng sọc xanh lá', 'Xanh dương', 'Đen'], 1, 'PE chuẩn.'),
  ]),

  M(16, 'Ôn tập HK1 (1)', [
    Q('Tần số điện lưới VN?', ['60Hz', '50Hz', '100Hz', '0Hz'], 1, '50Hz.'),
    Q('Năng lượng tái tạo gồm?', ['Than, dầu', 'Mặt trời, gió, thuỷ điện nhỏ, sinh khối', 'Hạt nhân', 'Khí'], 1, 'Renewable.'),
    Q('Để truyền tải điện đi xa hiệu quả phải?', ['Tăng dòng', 'Tăng điện áp, giảm dòng → giảm tổn hao I²R', 'Giảm áp', 'Không thay đổi'], 1, 'Cao áp.'),
    Q('Pin mặt trời dựa trên?', ['Hiệu ứng nhiệt điện', 'Hiệu ứng quang điện', 'Hoá năng', 'Cơ năng'], 1, 'Photovoltaic.'),
    Q('Khi gặp tai nạn điện giật, bước ĐẦU TIÊN?', ['Lôi nạn nhân bằng tay không', 'Ngắt nguồn điện', 'Tưới nước', 'Bỏ chạy'], 1, 'An toàn cứu hộ.'),
    Q('Ổ cắm 3 chấu có chấu thứ 3 nối?', ['Cùng L', 'Dây tiếp đất PE', 'Cùng N', 'Treo lơ lửng'], 1, 'PE chấu giữa.'),
  ]),

  M(17, 'Ôn tập HK1 (2)', [
    Q('Mạch 3 pha nối sao có dây trung tính, ưu điểm?', ['Không cung cấp được 1 pha', 'Cung cấp đồng thời tải 3 pha 380V và 1 pha 220V', 'Không có ưu điểm', 'Phải có máy biến áp riêng'], 1, '4 dây.'),
    Q('Công thức tính điện năng tiêu thụ?', ['A = P × t', 'A = I × U', 'A = R × t', 'A = U × t'], 0, 'A=Pt, đơn vị kWh.'),
    Q('Một động cơ ghi 380V-3kW, cosφ=0,8. Dòng dây khi nối sao?', ['I = P/(√3 U cosφ) = 3000/(√3×380×0,8) ≈ 5,7 A', '10A', '20A', '100A'], 0, 'Tam giác công thức tương tự.'),
    Q('Thiết bị bảo vệ chống giật phát hiện?', ['Dòng quá tải', 'Dòng rò chạm đất (RCBO/ELCB)', 'Điện áp thấp', 'Tần số'], 1, 'Dòng rò.'),
    Q('Nhà máy điện gió chuyển?', ['Quang → điện', 'Động năng gió → cơ → điện', 'Nhiệt → điện', 'Hoá → điện'], 1, 'Wind power.'),
    Q('Để dùng điện an toàn cho trẻ em?', ['Cắm bừa', 'Lắp nắp che ổ cắm, dạy trẻ không chạm thiết bị có điện', 'Cho trẻ tự khám phá', 'Mở ổ cắm'], 1, 'An toàn trẻ em.'),
  ]),

  M(18, 'Thi học kỳ I — Điện', [
    Q('Điện áp pha của lưới hạ áp 380/220V là?', ['380V', '220V', '110V', '500V'], 1, 'U_pha = 220V.'),
    Q('Điện áp dây của lưới hạ áp 380/220V là?', ['380V', '220V', '110V', '50V'], 0, 'U_dây = 380V.'),
    Q('Năng lượng điện 1 kWh tương đương?', ['1 W', '1000 W trong 1 giờ = 3,6 MJ', '60 W', '100W'], 1, '1kWh = 3,6 MJ.'),
    Q('Để bảo vệ chống giật, RCBO/ELCB ngưỡng 30mA dùng cho?', ['Đường dây tải lớn', 'Mạch ổ cắm nhà ở, bình nóng lạnh', 'Lưới cao áp', 'Không dùng'], 1, '30mA an toàn người.'),
    Q('Tiết kiệm điện đem lại lợi ích nào?', ['Tốn nhiều hơn', 'Giảm chi phí + giảm phát thải + an ninh năng lượng', 'Hỏng thiết bị', 'Vô ích'], 1, 'Lợi ích đa dạng.'),
    Q('Truyền tải điện đi xa, để giảm tổn hao phải?', ['Giảm áp', 'Tăng áp lên cao (110, 220, 500 kV)', 'Tăng dòng', 'Tăng tiết diện vô hạn'], 1, 'Tăng U giảm I.'),
  ]),

  // ──────────────── HK2 — Công nghệ Điện tử ────────────────
  M(19, 'Khái quát về Kĩ thuật điện tử', [
    Q('Điện tử học là ngành?', ['Cơ học', 'Nghiên cứu, ứng dụng các linh kiện và mạch điện tử để xử lí tín hiệu, thông tin', 'Hoá', 'Sinh'], 1, 'Electronics.'),
    Q('Phân loại tín hiệu cơ bản gồm?', ['Số và tương tự', 'Cao và thấp', 'Đỏ và xanh', 'Sin và cos'], 0, 'Analog & Digital.'),
    Q('Tín hiệu tương tự (analog) có?', ['Hai mức', 'Giá trị thay đổi liên tục theo thời gian', 'Chỉ 0', 'Chỉ 1'], 1, 'Continuous.'),
    Q('Tín hiệu số (digital) có?', ['Liên tục', 'Hai mức rời rạc (0 và 1)', 'Vô số mức', 'Không mức'], 1, 'Binary.'),
    Q('Bộ ADC dùng để?', ['Chuyển số → tương tự', 'Chuyển tín hiệu tương tự thành số', 'Khuếch đại', 'Phát sóng'], 1, 'Analog→Digital.'),
    Q('Bộ DAC dùng để?', ['Chuyển tương tự → số', 'Chuyển số → tương tự', 'Lưu trữ', 'Tăng áp'], 1, 'Digital→Analog.'),
  ]),

  M(20, 'Ngành nghề trong kĩ thuật điện tử', [
    Q('Kĩ sư điện tử thường làm việc trong?', ['Chỉ nông nghiệp', 'Thiết kế mạch, viễn thông, IoT, ô tô, y tế, công nghiệp', 'Chỉ nhà hàng', 'Chỉ ngân hàng'], 1, 'Đa lĩnh vực.'),
    Q('Lĩnh vực mới nổi của kĩ thuật điện tử?', ['Chỉ radio cũ', 'IoT, AI trên thiết bị nhúng, xe điện, robot', 'Chỉ truyền hình', 'Không có'], 1, 'Xu hướng.'),
    Q('Để theo nghề kĩ thuật điện tử cần?', ['Bỏ Toán-Lí', 'Toán, Vật lí, Tin học, kĩ năng thực hành mạch, lập trình vi điều khiển', 'Chỉ ngoại ngữ', 'Chỉ Văn'], 1, 'STEM + thực hành.'),
    Q('Kĩ năng quan trọng cho người làm điện tử?', ['Chỉ lý thuyết', 'Đọc sơ đồ mạch, hàn linh kiện, đo lường, lập trình MCU', 'Chỉ vẽ', 'Chỉ giao tiếp'], 1, 'Kĩ năng nghề.'),
    Q('Thiết bị đo cơ bản?', ['Cân', 'Đồng hồ vạn năng (VOM), dao động kí (oscilloscope), nguồn DC', 'Cờ-lê', 'Búa'], 1, 'Multimeter + oscilloscope.'),
    Q('An toàn khi làm việc với mạch điện tử?', ['Bỏ qua', 'Dùng kính bảo hộ khi hàn, thông gió, không sờ tay vào nguồn cao áp tụ điện chưa xả', 'Tay ướt', 'Không cần'], 1, 'An toàn.'),
  ]),

  M(21, 'Linh kiện thụ động — Điện trở, tụ, cuộn cảm', [
    Q('Điện trở (R) có đơn vị?', ['Henry', 'Ôm (Ω)', 'Fara', 'Volt'], 1, 'Ohm.'),
    Q('Tụ điện (C) có đơn vị?', ['Henry', 'Fara (F)', 'Ohm', 'Watt'], 1, 'Farad.'),
    Q('Cuộn cảm (L) có đơn vị?', ['Fara', 'Henry (H)', 'Ôm', 'Volt'], 1, 'Henry.'),
    Q('Điện trở mắc nối tiếp có?', ['R = R1 + R2', 'R = R1 × R2', 'R = R1 / R2', 'R = 0'], 0, 'Nối tiếp cộng.'),
    Q('Điện trở mắc song song có?', ['R = R1 + R2', '1/R = 1/R1 + 1/R2', 'R = max(R1,R2)', 'R = R1 × R2'], 1, 'Song song nghịch đảo cộng.'),
    Q('Tụ điện trong mạch DC ở chế độ xác lập?', ['Dẫn điện như dây', 'Không dẫn (như mạch hở)', 'Tăng dần', 'Phát sáng'], 1, 'DC ổn định: I=0 qua tụ.'),
  ]),

  M(22, 'Linh kiện tích cực — Diode, transistor, IC', [
    Q('Diode cho dòng đi theo?', ['Hai chiều', 'Một chiều — từ anode (A) sang cathode (K) khi phân cực thuận', 'Không chiều', 'Tuỳ ý'], 1, 'Diode.'),
    Q('Diode chỉnh lưu dùng để?', ['Khuếch đại', 'Chuyển AC → DC', 'Đo nhiệt', 'Đo áp'], 1, 'Rectifier.'),
    Q('LED là?', ['Diode phát quang khi phân cực thuận', 'Cuộn cảm', 'Điện trở phát sáng', 'Tụ điện'], 0, 'Light Emitting Diode.'),
    Q('Transistor BJT có 3 cực?', ['A-K-G', 'Base (B), Collector (C), Emitter (E)', 'Drain-Gate-Source', 'L-N-PE'], 1, 'BJT.'),
    Q('Transistor có chức năng?', ['Chỉ chiếu sáng', 'Khuếch đại tín hiệu hoặc đóng cắt (switch)', 'Đo lường', 'Phát điện'], 1, 'Amp + switch.'),
    Q('IC là?', ['Linh kiện rời', 'Mạch tích hợp - nhiều linh kiện trên 1 chip nhỏ', 'Cáp dẫn', 'Pin'], 1, 'Integrated Circuit.'),
  ]),

  M(23, 'Thực hành — Nhận diện và đo linh kiện', [
    Q('Đo điện trở bằng VOM cần?', ['Mạch đang có điện', 'Ngắt nguồn điện, tháo điện trở khỏi mạch (hoặc chân kia)', 'Đo trực tiếp khi đang cấp điện', 'Tuỳ ý'], 1, 'Đo điện trở phải ngắt nguồn.'),
    Q('Đọc giá trị điện trở qua vạch màu, 4 vạch: nâu-đen-đỏ-vàng kim. Giá trị?', ['10 Ω ±5%', '1.000 Ω ±5% = 1 kΩ', '100 Ω', '10 kΩ ±10%'], 1, '1, 0, ×10²=1000Ω, dung sai 5%.'),
    Q('Để phân biệt anode và cathode của diode bằng VOM ở thang Diode test?', ['Đèn báo chiều dẫn', 'Que đỏ ở A, đen ở K → đồng hồ hiện điện áp ngưỡng ~0,6V (Si)', 'Bất kỳ chiều nào', 'Không thể'], 1, 'Diode test.'),
    Q('LED khi mắc cần?', ['Mắc thẳng vào pin lớn', 'Mắc nối tiếp điện trở hạn dòng phù hợp', 'Không cần R', 'Mắc song song nhiều LED bừa'], 1, 'R hạn dòng.'),
    Q('Tụ điện phân cực (electrolytic) khi mắc phải chú ý?', ['Tuỳ chiều', 'Đúng cực: chân dài (+) chân ngắn (−); mắc ngược có thể nổ', 'Mắc ngược cũng được', 'Không cần phân biệt'], 1, 'Phân cực.'),
    Q('Khi hàn linh kiện cần?', ['Đốt cháy', 'Mỏ hàn nóng đúng nhiệt, dùng thiếc + nhựa thông, hàn nhanh ~2-3s', 'Hàn 10 phút', 'Tay không'], 1, 'Hàn đúng kĩ thuật.'),
  ]),

  M(24, 'Mạch điện tử tương tự — Khái quát', [
    Q('Mạch điện tử tương tự xử lí?', ['Tín hiệu số', 'Tín hiệu tương tự (analog)', 'Điện 1 pha', 'DC ổn định'], 1, 'Analog circuits.'),
    Q('Khối nguồn DC trong mạch tương tự?', ['Chỉ pin', 'Biến áp → chỉnh lưu → lọc → ổn áp', 'Chỉ ổn áp', 'Chỉ tụ'], 1, '4 khối.'),
    Q('Mạch chỉnh lưu 1 nửa chu kỳ dùng?', ['1 diode', '2 diode', '4 diode', '0 diode'], 0, 'Half-wave: 1 diode.'),
    Q('Mạch chỉnh lưu cầu (toàn kỳ) dùng?', ['1 diode', '2 diode', '4 diode', '8 diode'], 2, 'Full bridge: 4 diodes.'),
    Q('Tụ lọc sau chỉnh lưu có tác dụng?', ['Tăng điện áp 10 lần', 'San bằng nhấp nhô, tạo điện áp DC mượt hơn', 'Cản dòng', 'Tăng tần số'], 1, 'Smoothing.'),
    Q('IC ổn áp 7805 cho điện áp?', ['+3,3V', '+5V cố định', '+12V', '+24V'], 1, 'L7805 = +5V.'),
  ]),

  M(25, 'Khuếch đại thuật toán (Op-amp)', [
    Q('Op-amp là?', ['Một loại tụ', 'Khuếch đại thuật toán — IC khuếch đại tín hiệu với hệ số khuếch đại rất lớn', 'Một loại điện trở', 'Một loại diode'], 1, 'Operational Amplifier.'),
    Q('Op-amp lý tưởng có?', ['Trở kháng vào nhỏ', 'Trở kháng vào vô cùng lớn, trở kháng ra bằng 0, hệ số KĐ vô cùng', 'Hệ số KĐ rất nhỏ', 'Trở kháng ra lớn'], 1, 'Lý tưởng.'),
    Q('Op-amp có 2 đầu vào là?', ['+ và −', '+ (không đảo) và − (đảo)', 'A và K', 'B và C'], 1, 'Hai chân vào.'),
    Q('Mạch KĐ đảo có hệ số khuếch đại?', ['Av = +R2/R1', 'Av = −R_f/R_in', 'Av = R_f + R_in', 'Av = 1'], 1, 'Inverting amp.'),
    Q('Mạch KĐ không đảo có?', ['Av = −R_f/R_in', 'Av = 1 + R_f/R_in', 'Av = R_f − R_in', 'Av = 0'], 1, 'Non-inverting.'),
    Q('Op-amp 741 là?', ['IC khuếch đại thuật toán phổ biến', 'Vi điều khiển', 'Diode', 'Transistor'], 0, '741 op-amp.'),
  ]),

  M(26, 'Thực hành — Mạch khuếch đại tín hiệu', [
    Q('Khi lắp mạch KĐ đảo dùng op-amp, R_in = 1kΩ, R_f = 10kΩ thì Av?', ['+10', '−10', '−1', '0'], 1, 'Av = -R_f/R_in = -10.'),
    Q('Nguồn cấp đôi cho op-amp thường?', ['Chỉ +5V', '±12V hoặc ±15V đối xứng (V_CC và V_EE)', 'Chỉ 0V', 'AC 220V'], 1, 'Dual supply.'),
    Q('Để đo tín hiệu sin tại đầu ra dùng?', ['Bút thử điện', 'Dao động kí (oscilloscope)', 'Cân', 'Nhiệt kế'], 1, 'Oscilloscope.'),
    Q('Hiện tượng cắt đỉnh (clipping) xảy ra khi?', ['Bình thường', 'Tín hiệu ra vượt mức nguồn cấp - đỉnh bị cắt phẳng', 'Tín hiệu nhỏ', 'Không có'], 1, 'Saturation.'),
    Q('Để tránh nhiễu khi lắp mạch tương tự?', ['Để dây dài lung tung', 'Dây ngắn, mass chung, có tụ lọc nguồn 0.1μF gần IC', 'Bỏ tụ', 'Bỏ mass'], 1, 'Bypass cap.'),
    Q('Khi mạch không hoạt động đúng cần?', ['Đập', 'Kiểm tra nguồn, hàn lại, đo tín hiệu từng khối', 'Bỏ luôn', 'Mua mới'], 1, 'Debug.'),
  ]),

  M(27, 'Điện tử số — Tín hiệu và cổng logic', [
    Q('Tín hiệu số 2 mức thường gọi?', ['Cao và thấp - 1 và 0', '+ và −', '* và /', 'A và B'], 0, 'HIGH/LOW.'),
    Q('Cổng AND có đầu ra 1 khi?', ['Một đầu vào 1', 'Tất cả đầu vào đều 1', 'Tất cả đầu vào đều 0', 'Một đầu vào 0'], 1, 'AND.'),
    Q('Cổng OR có đầu ra 1 khi?', ['Mọi đầu vào 0', 'Có ít nhất một đầu vào 1', 'Tất cả đầu vào 1', 'Không xác định'], 1, 'OR.'),
    Q('Cổng NOT làm gì?', ['Cộng', 'Đảo: 0 → 1, 1 → 0', 'Nhân', 'Chia'], 1, 'Inverter.'),
    Q('Cổng NAND tương đương?', ['AND + NOT', 'AND', 'OR', 'NOT'], 0, 'NAND = NOT(AND).'),
    Q('Cổng XOR có đầu ra 1 khi?', ['Cả hai đầu vào bằng nhau', 'Hai đầu vào khác nhau', 'Cả hai đều 0', 'Cả hai đều 1'], 1, 'Exclusive OR.'),
  ]),

  M(28, 'Mạch xử lí tín hiệu số', [
    Q('Hệ đếm nhị phân có?', ['10 chữ số', '2 chữ số (0 và 1)', '8 chữ số', '16 chữ số'], 1, 'Binary.'),
    Q('Số 1011₂ ở hệ thập phân?', ['9', '11', '13', '15'], 1, '8+0+2+1=11.'),
    Q('Số 13₁₀ ở nhị phân?', ['1100', '1101', '1110', '1111'], 1, '13 = 8+4+1 = 1101.'),
    Q('Mạch tổ hợp (combinational) khác mạch tuần tự (sequential) ở chỗ?', ['Không khác', 'Tổ hợp: đầu ra chỉ phụ thuộc đầu vào hiện tại; tuần tự: có trạng thái nhớ', 'Tổ hợp có nhớ', 'Tuần tự không có nhớ'], 1, '2 loại mạch số.'),
    Q('Flip-Flop là phần tử?', ['Tổ hợp', 'Tuần tự cơ bản — lưu 1 bit (D, JK, T, SR)', 'Diode', 'Tụ điện'], 1, 'Lưu trữ 1 bit.'),
    Q('Bộ nhớ máy tính dùng?', ['Diode đơn lẻ', 'Mảng tế bào nhớ (DRAM dùng tụ + transistor; SRAM dùng flip-flop)', 'Cảm biến', 'Cuộn cảm'], 1, 'Memory cell.'),
  ]),

  M(29, 'Thực hành — Mạch logic số', [
    Q('IC 7408 là?', ['4 cổng AND 2 đầu vào', '4 cổng OR', '6 cổng NOT', '4 NAND'], 0, '7408 quad AND.'),
    Q('IC 7400 là?', ['Quad NAND 2 đầu vào', 'Quad AND', '6 NOT', 'Quad OR'], 0, '7400 quad NAND.'),
    Q('IC 7404 là?', ['Quad AND', '6 cổng NOT (Hex Inverter)', 'Quad OR', 'Flip-flop'], 1, '7404.'),
    Q('Để thử cổng logic dùng?', ['Bút', 'LED nối qua điện trở vào đầu ra để hiển thị 0/1', 'Cảm xúc', 'Tay'], 1, 'LED tester.'),
    Q('Đầu vào cổng số khi để hở (floating)?', ['Là 0', 'Bất định - cần kéo lên VCC bằng pull-up hoặc kéo xuống GND bằng pull-down', 'Là 1', 'An toàn'], 1, 'Pull-up/down.'),
    Q('Bảng chân lý của XOR 2 đầu vào (A,B): A=0,B=0?', ['1', '0', 'X', 'Z'], 1, '0 XOR 0 = 0.'),
  ]),

  M(30, 'Vi điều khiển — Khái quát', [
    Q('Vi điều khiển (MCU) là?', ['Một loại tụ', 'IC tích hợp CPU + bộ nhớ + ngoại vi cơ bản trên 1 chip', 'Cảm biến đơn', 'Pin'], 1, 'Microcontroller.'),
    Q('Vi điều khiển khác vi xử lí (μP) ở chỗ?', ['Giống y nhau', 'MCU tích hợp sẵn RAM, ROM, ngoại vi; μP chỉ là CPU, cần chip ngoại vi rời', 'Vi xử lí nhỏ hơn', 'MCU không có CPU'], 1, 'Tích hợp.'),
    Q('Ứng dụng MCU?', ['Chỉ máy tính lớn', 'Thiết bị gia dụng thông minh, đồ chơi, IoT, ô tô, robot, công nghiệp', 'Chỉ điện thoại', 'Không có'], 1, 'Rất rộng.'),
    Q('Họ MCU phổ biến cho học sinh?', ['Chỉ Intel x86', 'AVR (Arduino), ESP32, STM32, PIC', 'Chỉ MIPS', 'Chỉ POWER'], 1, 'Phổ thông.'),
    Q('Bộ nhớ Flash trong MCU dùng để?', ['Lưu dữ liệu RAM tạm', 'Lưu chương trình - giữ được khi mất điện', 'Hiển thị', 'Cảm biến nhiệt'], 1, 'Non-volatile.'),
    Q('Ngoại vi quan trọng của MCU gồm?', ['Không có', 'GPIO, ADC, Timer/PWM, UART/I2C/SPI', 'Chỉ ADC', 'Chỉ Timer'], 1, 'Đa ngoại vi.'),
  ]),

  M(31, 'Bo mạch lập trình Arduino', [
    Q('Arduino Uno dùng vi điều khiển?', ['ESP32', 'ATmega328P (AVR 8-bit)', 'STM32F4', 'PIC16F'], 1, 'ATmega328P.'),
    Q('Arduino Uno có bao nhiêu chân digital I/O?', ['8', '14', '32', '40'], 1, '14 chân digital.'),
    Q('Arduino Uno có ngõ vào tương tự (ADC)?', ['0', '6 chân (A0-A5)', '10 chân', '16 chân'], 1, '6 ADC.'),
    Q('Điện áp logic của Arduino Uno?', ['3.3V', '5V', '12V', '24V'], 1, '5V.'),
    Q('Hàm setup() trong Arduino IDE chạy?', ['Liên tục', 'Một lần khi khởi động', 'Khi tắt', 'Không bao giờ'], 1, 'setup() chạy 1 lần.'),
    Q('Hàm loop() chạy?', ['Một lần', 'Lặp đi lặp lại sau khi setup()', 'Khi nhấn nút', 'Không chạy'], 1, 'loop() lặp.'),
  ]),

  M(32, 'Thực hành — Lập trình Arduino cơ bản', [
    Q('Hàm bật chân digital lên mức cao?', ['pinMode(pin, HIGH)', 'digitalWrite(pin, HIGH)', 'analogWrite(pin, 255)', 'digitalRead(pin)'], 1, 'digitalWrite.'),
    Q('Hàm đặt chế độ chân là OUTPUT?', ['digitalWrite(pin, OUTPUT)', 'pinMode(pin, OUTPUT)', 'mode(pin)', 'setMode'], 1, 'pinMode.'),
    Q('Hàm đọc giá trị tương tự?', ['digitalRead', 'analogRead(pin) — trả 0-1023', 'analogWrite', 'pinRead'], 1, 'ADC 10-bit.'),
    Q('Hàm tạm dừng 1 giây?', ['delay(1)', 'delay(1000) // ms', 'sleep(1)', 'wait(1)'], 1, 'delay tính ms.'),
    Q('Để in giá trị ra Serial Monitor?', ['print()', 'Serial.println(val)', 'echo()', 'show()'], 1, 'Serial.println.'),
    Q('Để khởi tạo Serial 9600 baud?', ['Serial.begin(9600)', 'Serial.start()', 'Serial = 9600', 'open(9600)'], 0, 'Trong setup().'),
  ]),

  M(33, 'Dự án — Mạch ứng dụng đơn giản', [
    Q('Mạch đèn LED chớp nháy cần?', ['Chỉ pin', 'Arduino + LED + điện trở hạn dòng (220Ω) + dây nối', 'Chỉ LED', 'Chỉ điện trở'], 1, 'Blink basics.'),
    Q('Để đọc cảm biến nhiệt độ LM35 (0-1V tỉ lệ 10mV/°C) dùng?', ['digitalRead', 'analogRead rồi chuyển đổi', 'Serial', 'pinMode'], 1, 'ADC.'),
    Q('Mạch điều khiển động cơ DC cần?', ['Nối trực tiếp Arduino', 'Có driver (transistor/H-bridge L298) - không nối trực tiếp dòng lớn vào Arduino', 'Không cần driver', 'Bỏ pin'], 1, 'Power driver.'),
    Q('Cảm biến siêu âm HC-SR04 đo?', ['Nhiệt độ', 'Khoảng cách bằng sóng siêu âm', 'Ánh sáng', 'Độ ẩm'], 1, 'Distance.'),
    Q('IoT (Internet of Things) là?', ['Internet người dùng', 'Mạng các thiết bị thông minh kết nối Internet và trao đổi dữ liệu', 'Mạng xã hội', 'Trò chơi'], 1, 'IoT.'),
    Q('Module ESP32/ESP8266 dùng cho IoT vì?', ['Không có Wi-Fi', 'Tích hợp Wi-Fi/Bluetooth, lập trình được bằng Arduino IDE', 'Chỉ có Ethernet', 'Đắt'], 1, 'IoT MCU.'),
  ]),

  M(34, 'Ôn tập cả năm', [
    Q('Diode dẫn theo chiều?', ['Hai chiều', 'Một chiều A→K khi phân cực thuận', 'Không chiều', 'Tuỳ ý'], 1, 'Diode.'),
    Q('Op-amp có đặc điểm lí tưởng?', ['Trở kháng vào nhỏ', 'Trở kháng vào lớn, trở kháng ra nhỏ, hệ số KĐ rất lớn', 'KĐ nhỏ', 'Không có'], 1, 'Ideal.'),
    Q('Cổng AND đầu ra 1 khi?', ['Một đầu vào 1', 'Mọi đầu vào đều 1', 'Mọi đầu vào 0', 'Không xác định'], 1, 'AND.'),
    Q('Số 1010₂ thập phân?', ['8', '10', '12', '20'], 1, '8+2=10.'),
    Q('Arduino Uno điện áp logic?', ['3.3V', '5V', '12V', '24V'], 1, '5V.'),
    Q('Tần số lưới VN?', ['60Hz', '50Hz', '100Hz', '0Hz'], 1, '50Hz.'),
  ]),

  M(35, 'Thi học kỳ II — Điện tử', [
    Q('IC 7805 cho điện áp?', ['+3.3V', '+5V', '+12V', '+15V'], 1, '+5V ổn áp.'),
    Q('Mạch chỉnh lưu cầu dùng?', ['1 diode', '2 diode', '4 diode', '8 diode'], 2, 'Full bridge.'),
    Q('Op-amp với R_f=20k, R_in=2k mạch đảo có Av?', ['+10', '−10', '−1', '+1'], 1, '-20/2 = -10.'),
    Q('Cổng NOR cho đầu ra 1 khi?', ['Có ít nhất 1 đầu vào 1', 'Tất cả đầu vào đều 0', 'Tất cả đầu vào 1', 'Đầu vào khác nhau'], 1, 'NOR = NOT(OR).'),
    Q('Hàm Arduino đặt PWM trên chân?', ['digitalWrite', 'analogWrite(pin, 0-255)', 'pinMode', 'Serial'], 1, 'PWM = analogWrite.'),
    Q('Một dự án IoT đo nhiệt độ và gửi lên đám mây cần?', ['Chỉ cảm biến', 'Cảm biến + MCU có Wi-Fi (ESP32/ESP8266) + mã lập trình + dịch vụ cloud', 'Chỉ cloud', 'Chỉ pin'], 1, 'Đủ thành phần.'),
  ]),
];

export const H12CN_SCENARIOS = indexBy(H12CN_WEEKS);
