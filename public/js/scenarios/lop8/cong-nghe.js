// ============================================================
// Lớp 8 · CÔNG NGHỆ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Vẽ kĩ thuật, gia công cơ khí, kỹ thuật điện theo CTGD 2018.
// ID prefix: "S8CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8CN', 'cong-nghe', n, title, qs, opts);

export const S8CN_WEEKS = [
  // ──────────────── HK1: VẼ KĨ THUẬT + GIA CÔNG CƠ KHÍ ────────────────
  M(1, 'Vai trò của vẽ kĩ thuật trong sản xuất và đời sống', [
    Q('Vẽ kĩ thuật dùng để?', ['Giải trí', 'Trang trí', 'Vẽ tranh nghệ thuật', 'Truyền đạt ý tưởng thiết kế giữa người thiết kế và người sản xuất'], 3, 'Bản vẽ KT là ngôn ngữ giao tiếp giữa người thiết kế và người chế tạo, xây dựng.'),
    Q('Bản vẽ kĩ thuật phải?', ['Vẽ tự do', 'Không cần chính xác', 'Vẽ đẹp như tranh', 'Chính xác, theo quy ước thống nhất'], 3, 'Bản vẽ KT phải tuân theo các tiêu chuẩn (TCVN), thống nhất quy ước.'),
    Q('Lĩnh vực nào dùng bản vẽ KT?', ['Chỉ kiến trúc', 'Chỉ xây dựng', 'Cơ khí, xây dựng, kiến trúc, điện', 'Chỉ cơ khí'], 2, 'Bản vẽ KT dùng trong mọi ngành kỹ thuật.'),
    Q('Hai loại bản vẽ KT chính?', ['Bản vẽ tay và bản vẽ máy', 'Bản vẽ đen trắng và màu', 'Bản vẽ 2D và 3D', 'Bản vẽ cơ khí và bản vẽ xây dựng'], 3, '2 loại chính theo lĩnh vực: cơ khí (chế tạo máy) và xây dựng (công trình).'),
    Q('Người không biết đọc bản vẽ?', ['Không thể chế tạo, thi công theo thiết kế', 'Không ảnh hưởng', 'Chỉ làm chậm hơn', 'Vẫn làm được'], 0, 'Không đọc được bản vẽ thì không thể chế tạo/thi công đúng thiết kế.'),
  ]),

  M(2, 'Hình chiếu — Khái niệm và phương pháp', [
    Q('Hình chiếu là gì?', ['Hình thu được trên mặt phẳng chiếu khi chiếu vật thể', 'Bóng của vật', 'Hình ảnh chụp', 'Hình vẽ tự do'], 0, 'Hình chiếu = hình của vật thể trên mp chiếu, có được nhờ phép chiếu (vuông góc hoặc xiên).'),
    Q('Phép chiếu vuông góc?', ['Tia chiếu hội tụ', 'Tia chiếu tuỳ ý', 'Tia chiếu song song nhưng nghiêng', 'Các tia chiếu vuông góc với mp chiếu'], 3, 'Phép chiếu vuông góc: tia chiếu ⊥ mp chiếu — phép chiếu cơ bản nhất.'),
    Q('Phép chiếu xuyên tâm dùng trong?', ['Bản vẽ kĩ thuật', 'Vẽ phối cảnh, hội hoạ', 'Sơ đồ điện', 'Bản đồ'], 1, 'Phép chiếu xuyên tâm (các tia hội tụ về 1 điểm) dùng trong vẽ phối cảnh, hội hoạ.'),
    Q('Bản vẽ kĩ thuật dùng phép chiếu nào?', ['Phép chiếu xiên góc', 'Vuông góc', 'Xuyên tâm', 'Phép chiếu trục đo'], 1, 'Bản vẽ KT chuẩn dùng phép chiếu vuông góc để giữ chính xác kích thước.'),
    Q('Mp chiếu đứng nằm ở vị trí?', ['Bên cạnh', 'Đứng trước vật thể', 'Phía dưới', 'Phía trên'], 1, 'Mp chiếu đứng (P1) dựng đứng phía trước/sau vật thể.'),
  ]),

  M(3, 'Ba mặt phẳng chiếu — Hình chiếu đứng, bằng, cạnh', [
    Q('Hình chiếu đứng có được khi chiếu từ?', ['Trước ra sau', 'Trên xuống', 'Dưới lên', 'Bên trái sang phải'], 0, 'Hình chiếu đứng: chiếu vật thể từ trước ra sau lên mp chiếu đứng.'),
    Q('Hình chiếu bằng có được khi chiếu từ?', ['Trước ra', 'Trên xuống', 'Dưới lên', 'Bên ngang'], 1, 'Hình chiếu bằng: chiếu từ trên xuống lên mp chiếu bằng.'),
    Q('Hình chiếu cạnh có được khi chiếu từ?', ['Trước ra sau', 'Trên xuống', 'Dưới lên', 'Trái sang phải'], 3, 'Hình chiếu cạnh: chiếu từ bên trái sang lên mp chiếu cạnh.'),
    Q('Vị trí 3 hình chiếu trên bản vẽ?', ['HC bằng dưới HC đứng; HC cạnh bên phải HC đứng', 'HC bằng trên HC đứng; HC cạnh bên trái', 'Chỉ vẽ 1 hình', 'Cùng 1 vị trí'], 0, 'Quy ước: HCĐ ở giữa; HCB dưới HCĐ; HCC bên phải HCĐ.'),
    Q('Để biểu diễn đầy đủ vật thể đơn giản cần?', ['5 hình', 'Chỉ 1 hình', 'Tối thiểu 2 hình chiếu', '10 hình'], 2, 'Vật thể đơn giản thường cần 2–3 hình chiếu để biểu diễn đầy đủ.'),
  ]),

  M(4, 'Hình chiếu các khối hình học cơ bản', [
    Q('Hình chiếu đứng của hình hộp chữ nhật?', ['Hình chữ nhật', 'Hình tròn', 'Hình tam giác', 'Hình thang'], 0, 'Hình hộp CN: cả 3 hình chiếu đều là hình chữ nhật (với kích thước khác nhau).'),
    Q('Hình chiếu đứng của hình lăng trụ tam giác đều?', ['Hình thang', 'Hình tròn', 'Hình tam giác đều', 'Hình chữ nhật'], 3, 'Lăng trụ tam giác: HC đứng/cạnh là HCN, HC bằng là tam giác đều.'),
    Q('Hình chiếu của hình cầu?', ['Elip ở hình chiếu cạnh', 'Tam giác', 'HCN có đường chéo', 'Cả 3 hình chiếu là hình tròn'], 3, 'Hình cầu: cả 3 hình chiếu đều là hình tròn cùng đường kính.'),
    Q('Hình chiếu đứng của hình trụ tròn (trục thẳng đứng)?', ['Hình tam giác', 'Hình tròn', 'Hình chữ nhật', 'Elip do trục nghiêng'], 2, 'Trụ tròn trục đứng: HCĐ là HCN, HC bằng là hình tròn.'),
    Q('Hình chiếu đứng của hình nón (đỉnh trên)?', ['Hình thang', 'Tam giác cân', 'HCN có đường chéo nối đỉnh', 'Hình tròn'], 1, 'Hình nón: HCĐ là tam giác cân, HC bằng là hình tròn (có chấm đỉnh ở tâm).'),
  ]),

  M(5, 'Bản vẽ các khối tròn xoay', [
    Q('Khối tròn xoay được tạo thành khi?', ['Cắt khối', 'Ghép nhiều khối', 'Quay hình phẳng quanh trục cố định', 'Vẽ tay'], 2, 'Khối tròn xoay = quay 1 hình phẳng quanh trục cố định một vòng.'),
    Q('Các khối tròn xoay điển hình?', ['Trụ, nón, cầu', 'Hộp, lăng trụ', 'Tứ diện', 'Tháp, kim tự tháp'], 0, 'Hình trụ, hình nón, hình cầu là 3 khối tròn xoay cơ bản.'),
    Q('Hình trụ tạo thành khi quay?', ['Hình thang quanh đáy lớn', 'Tam giác', 'Hình chữ nhật quanh 1 cạnh', 'Nửa hình tròn quanh đường kính'], 2, 'Hình trụ = quay HCN quanh 1 cạnh.'),
    Q('Hình nón tạo thành khi quay?', ['HCN quanh 1 cạnh', 'Hình thang quanh cạnh bên', 'Nửa hình tròn quanh đường kính', 'Tam giác vuông quanh 1 cạnh góc vuông'], 3, 'Hình nón = quay tam giác vuông quanh 1 cạnh góc vuông.'),
    Q('Hình cầu tạo thành khi quay?', ['Hình tròn', 'Nửa hình tròn quanh đường kính', 'HCN quanh đường trung trực', 'Tam giác'], 1, 'Hình cầu = quay nửa hình tròn quanh đường kính.'),
  ]),

  M(6, 'Khái niệm về bản vẽ kĩ thuật — Hình cắt', [
    Q('Hình cắt dùng để?', ['Đo kích thước', 'Đánh dấu màu', 'Trang trí', 'Biểu diễn cấu tạo bên trong của vật thể'], 3, 'Hình cắt dùng khi cần thể hiện cấu tạo bên trong (lỗ, rãnh) của vật.'),
    Q('Khi cắt vật thể, ta tưởng tượng?', ['Vẽ đè lên', 'Cắt thật vật', 'Bỏ luôn vật', 'Dùng mp tưởng tượng cắt vật, bỏ phần ở giữa người quan sát và mp cắt'], 3, 'Dùng mp cắt tưởng tượng, bỏ phần trước mp cắt, vẽ phần còn lại.'),
    Q('Phần vật bị cắt được kí hiệu?', ['Tô đen', 'Gạch chéo bằng nét liền mảnh', 'Nét đứt', 'Chấm chấm'], 1, 'Phần bị mp cắt cắt qua được gạch chéo bằng nét liền mảnh (gạch vật liệu).'),
    Q('Hình cắt khác hình chiếu ở?', ['Không khác', 'Có gạch vật liệu, thể hiện cấu trúc bên trong', 'Đẹp hơn', 'Đơn giản hơn'], 1, 'Hình cắt = hình chiếu + gạch vật liệu để lộ cấu tạo bên trong.'),
    Q('Khi nào dùng hình cắt?', ['Chỉ khi vẽ tay', 'Luôn dùng', 'Không bao giờ', 'Khi vật có cấu tạo phức tạp bên trong (lỗ, rãnh)'], 3, 'Dùng hình cắt khi cần làm rõ cấu tạo bên trong mà hình chiếu thông thường không lộ.'),
  ]),

  M(7, 'Bản vẽ chi tiết', [
    Q('Bản vẽ chi tiết gồm?', ['Hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên', 'Chỉ hình vẽ', 'Chỉ tên gọi', 'Chỉ kích thước'], 0, '4 thành phần: hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên.'),
    Q('Hình biểu diễn trên bản vẽ chi tiết?', ['Hình chiếu, hình cắt, mặt cắt', 'Chỉ hình chiếu đứng', 'Ảnh chụp', 'Sơ đồ khối nguyên lý'], 0, 'Có thể dùng hình chiếu, hình cắt, mặt cắt để biểu diễn đầy đủ chi tiết.'),
    Q('Kích thước cho biết?', ['Độ lớn của chi tiết', 'Vật liệu', 'Khối lượng', 'Màu sắc'], 0, 'Kích thước thể hiện độ lớn (chiều dài, rộng, đường kính, góc…).'),
    Q('Yêu cầu kĩ thuật ghi?', ['Tỉ lệ bản vẽ và khổ giấy', 'Tên người vẽ', 'Ngày vẽ', 'Vật liệu, độ nhám, dung sai, nhiệt luyện'], 3, 'YCKT gồm: vật liệu, dung sai, độ nhám bề mặt, gia công đặc biệt.'),
    Q('Khung tên ghi?', ['Chỉ ngày', 'Tên chi tiết, vật liệu, tỉ lệ, người vẽ, ngày tháng', 'Chỉ tên người vẽ', 'Chỉ kích thước'], 1, 'Khung tên là phần ID của bản vẽ — đặt ở góc dưới phải.'),
  ]),

  M(8, 'Biểu diễn ren — Quy ước vẽ ren', [
    Q('Ren được dùng để?', ['Đánh dấu', 'Ghép nối, truyền lực, chỉnh vị trí', 'Không có công dụng', 'Trang trí'], 1, 'Ren dùng để ghép nối các chi tiết (bu lông + đai ốc), truyền lực (vít me), điều chỉnh.'),
    Q('Ren ngoài là?', ['Ren xoắn', 'Ren chuông', 'Ren bên trong lỗ', 'Ren trên mặt ngoài của trục'], 3, 'Ren ngoài tạo trên mặt ngoài (bu lông, vít); ren trong tạo trong lỗ (đai ốc).'),
    Q('Đường đỉnh ren vẽ bằng?', ['Nét lượn sóng', 'Nét chấm', 'Nét liền đậm', 'Nét đứt'], 2, 'Quy ước: đường đỉnh ren — nét liền đậm; đường chân ren — nét liền mảnh.'),
    Q('Đường chân ren vẽ bằng?', ['Không vẽ', 'Nét đứt', 'Nét liền đậm', 'Nét liền mảnh'], 3, 'Đường chân ren — nét liền mảnh để phân biệt với đường đỉnh.'),
    Q('Ren bị che khuất vẽ bằng?', ['Nét liền', 'Không vẽ', 'Nét đứt', 'Nét lượn sóng'], 2, 'Ren khuất: tất cả đường (đỉnh, chân) đều vẽ bằng nét đứt.'),
  ]),

  M(9, 'Bản vẽ lắp', [
    Q('Bản vẽ lắp dùng để?', ['Chế tạo từng chi tiết', 'Quảng cáo', 'Diễn tả hình dạng, kết cấu của sản phẩm sau khi lắp ráp', 'Bán hàng'], 2, 'Bản vẽ lắp diễn tả cách lắp ráp các chi tiết thành sản phẩm hoàn chỉnh.'),
    Q('Khác biệt bản vẽ lắp và bản vẽ chi tiết?', ['Không khác', 'Lắp = nhiều chi tiết ghép, có bảng kê; chi tiết = một chi tiết riêng', 'Lắp đơn giản hơn', 'Chi tiết phức tạp hơn'], 1, 'Bản vẽ lắp có bảng kê các chi tiết; bản vẽ chi tiết chỉ vẽ 1 chi tiết.'),
    Q('Bảng kê trên bản vẽ lắp ghi?', ['Chỉ tên', 'Chỉ số lượng', 'STT, tên gọi, vật liệu, số lượng từng chi tiết', 'Chỉ ghi tên cụm chi tiết chính'], 2, 'Bảng kê = danh sách chi tiết với STT, tên, vật liệu, số lượng.'),
    Q('Số vị trí trên bản vẽ lắp dùng để?', ['Trang trí', 'Đánh dấu vị trí từng chi tiết tương ứng bảng kê', 'Đánh giá', 'Không có ý nghĩa'], 1, 'Mỗi chi tiết có 1 số vị trí (đặt trong vòng tròn) liên kết với bảng kê.'),
    Q('Trình tự đọc bản vẽ lắp?', ['Khung tên → bảng kê → hình biểu diễn → kích thước → phân tích', 'Hình biểu diễn → khung tên → bảng kê → kích thước', 'Chỉ xem hình', 'Chỉ đọc kích thước'], 0, 'Trình tự chuẩn: khung tên → bảng kê → hình → kích thước → phân tích chi tiết.'),
  ]),

  M(10, 'Bản vẽ nhà', [
    Q('Bản vẽ nhà gồm?', ['Chỉ mặt đứng', 'Chỉ ảnh chụp', 'Chỉ mặt bằng', 'Mặt bằng, mặt đứng, mặt cắt'], 3, '3 loại hình chính: mặt bằng (nhìn xuống), mặt đứng (nhìn từ ngoài), mặt cắt.'),
    Q('Mặt bằng là?', ['Mái nhà', 'Khu sân vườn quanh nhà', 'Hình cắt ngang ngôi nhà ngang qua cửa', 'Mặt đất'], 2, 'Mặt bằng = hình cắt ngang nhà ở vị trí ngang cửa sổ, nhìn xuống.'),
    Q('Mặt đứng là?', ['Hình cắt', 'Hình tự do', 'Hình chiếu vuông góc nhìn mặt ngoài', 'Hình từ trên'], 2, 'Mặt đứng = hình chiếu vuông góc nhìn từ ngoài vào mặt trước/sau/bên của nhà.'),
    Q('Mặt cắt là?', ['Ảnh chụp', 'Mặt bằng', 'Hình cắt nhà theo mp thẳng đứng', 'Hình chiếu bằng'], 2, 'Mặt cắt = cắt nhà theo mp thẳng đứng để thấy cấu tạo các tầng, mái…'),
    Q('Ký hiệu cửa đi trên mặt bằng?', ['Tam giác', 'Đường thẳng + cung tròn thể hiện hướng mở', 'Hình vuông', 'Chấm tròn'], 1, 'Cửa đi: đoạn thẳng vuông góc tường + cung tròn 1/4 thể hiện hướng mở.'),
  ]),

  M(11, 'Vật liệu cơ khí', [
    Q('Vật liệu cơ khí chia thành 2 nhóm chính?', ['Tốt và xấu', 'Nặng và nhẹ', 'Kim loại và phi kim loại', 'Cứng và mềm'], 2, '2 nhóm: kim loại (thép, gang, đồng, nhôm…) và phi kim loại (nhựa, cao su, gỗ…).'),
    Q('Kim loại đen gồm?', ['Đồng, nhôm', 'Sắt, thép, gang', 'Kẽm, thiếc', 'Vàng, bạc'], 1, 'Kim loại đen = hợp kim chứa Fe (sắt, thép, gang).'),
    Q('Kim loại màu gồm?', ['Sắt, thép', 'Đồng, nhôm, kẽm và hợp kim của chúng', 'Gang xám, gang trắng', 'Carbon'], 1, 'Kim loại màu = không chứa Fe (đồng, nhôm, kẽm, niken…).'),
    Q('Tính chất cơ bản của vật liệu cơ khí?', ['Cơ tính, lý tính, hoá tính, công nghệ tính', 'Chỉ màu sắc', 'Chỉ giá', 'Chỉ độ cứng'], 0, '4 nhóm: cơ tính (độ bền, dẻo), lý tính (nhiệt, điện), hoá tính, công nghệ tính.'),
    Q('Vật liệu nào dùng làm dây điện?', ['Cao su', 'Gang dẻo phủ men', 'Đồng, nhôm', 'Thép không gỉ (inox)'], 2, 'Đồng/nhôm dẫn điện tốt nên dùng làm dây dẫn; cao su bọc cách điện.'),
  ]),

  M(12, 'Dụng cụ cơ khí — Đo, vạch dấu', [
    Q('Thước cặp dùng để?', ['Đo khối lượng', 'Đo nhiệt độ', 'Đo chiều dài, đường kính trong/ngoài, độ sâu', 'Đo áp suất'], 2, 'Thước cặp đo được kích thước ngoài, trong, độ sâu với độ chính xác 0,1 hoặc 0,02 mm.'),
    Q('Pan-me (micrometer) đo?', ['Áp suất', 'Nhiệt độ', 'Khối lượng', 'Kích thước nhỏ với độ chính xác cao (0,01 mm)'], 3, 'Pan-me đo kích thước nhỏ chính xác đến 0,01 mm hoặc cao hơn.'),
    Q('Êke dùng để?', ['Đo nhiệt độ', 'Đo độ dài', 'Đo và kiểm tra góc vuông', 'Đo đường kính'], 2, 'Êke = thước đo góc vuông (90°), dùng kiểm tra và vạch dấu.'),
    Q('Mũi vạch dùng để?', ['Mài kim loại', 'Vạch dấu lên kim loại', 'Vẽ trên giấy', 'Cắt kim loại'], 1, 'Mũi vạch = dụng cụ vạch đường lên kim loại để chuẩn bị cắt, khoan.'),
    Q('Compa vạch dấu khác compa vẽ ở?', ['Đẹp hơn', 'Có đầu nhọn cứng để vạch lên kim loại', 'Lớn hơn', 'Không khác'], 1, 'Compa vạch dấu có 2 đầu nhọn cứng (thép tôi) để vạch dấu lên kim loại.'),
  ]),

  M(13, 'Dụng cụ tháo lắp và kẹp chặt', [
    Q('Cờ-lê (cle) dùng để?', ['Mài bóng bề mặt kim loại', 'Vặn bu lông, đai ốc', 'Cắt kim loại', 'Đo kích thước chi tiết'], 1, 'Cờ-lê dùng vặn (siết/nới) bu lông, đai ốc; có nhiều kích thước khác nhau.'),
    Q('Tua-vít dùng để?', ['Vặn vít', 'Cắt phôi kim loại mỏng', 'Vặn bu lông lớn', 'Khoan lỗ trên gỗ'], 0, 'Tua-vít chuyên vặn các loại vít (vít đầu chữ thập, đầu dẹp…).'),
    Q('Kìm dùng để?', ['Mài sắc lưỡi dao', 'Khoan lỗ trên kim loại', 'Đo đường kính dây', 'Kẹp, cắt dây'], 3, 'Kìm dùng kẹp giữ chi tiết, cắt dây kim loại.'),
    Q('Êtô (ê-tô) dùng để?', ['Đo độ phẳng bề mặt', 'Vạch dấu', 'Bôi trơn', 'Kẹp chặt chi tiết khi gia công'], 3, 'Êtô = dụng cụ kẹp giữ chi tiết khi cưa, dũa, khoan…'),
    Q('Mỏ-lết khác cờ-lê?', ['Có thể điều chỉnh kích thước miệng kẹp', 'Bằng nhựa', 'Không khác', 'To hơn'], 0, 'Mỏ-lết (cờ-lê điều chỉnh) có thể thay đổi kích thước, dùng cho nhiều cỡ bu lông.'),
  ]),

  M(14, 'Cưa và dũa kim loại', [
    Q('Cưa kim loại dùng để?', ['Mài bóng', 'Đo độ dày phôi', 'Cắt kim loại thành các đoạn', 'Khoan lỗ'], 2, 'Cưa cắt kim loại thành các đoạn theo kích thước yêu cầu.'),
    Q('Lưỡi cưa kim loại làm bằng?', ['Nhựa cứng ABS', 'Thép tôi cứng', 'Hợp kim đồng thau', 'Gỗ lim ép'], 1, 'Lưỡi cưa làm từ thép hợp kim tôi cứng để cắt được kim loại.'),
    Q('Khi cưa, cần?', ['Kẹp chặt phôi vào êtô, cưa từ từ', 'Đẩy mạnh và nhanh', 'Cầm tay', 'Không cần kẹp'], 0, 'Phải kẹp phôi vào êtô, cưa với lực đều, nhịp nhàng.'),
    Q('Dũa dùng để?', ['Vặn ốc', 'Khoan lỗ', 'Cắt rời', 'Tạo độ nhẵn, sửa hình dáng bề mặt'], 3, 'Dũa làm nhẵn, sửa nhỏ hình dáng bề mặt kim loại sau cưa, đột.'),
    Q('An toàn khi cưa, dũa?', ['Không cần PPE', 'Ngồi sai tư thế', 'Đeo dép', 'Đeo kính bảo hộ, kẹp chặt phôi, giữ tư thế đúng'], 3, 'PPE: kính bảo hộ, găng tay; kẹp chặt phôi; tư thế đứng vững — bắt buộc.'),
  ]),

  M(15, 'Khoan kim loại', [
    Q('Khoan dùng để?', ['Cắt phôi', 'Tạo lỗ trên kim loại', 'Vặn ốc', 'Mài nhẵn bề mặt sau khoan'], 1, 'Khoan tạo lỗ tròn xuyên qua hoặc lỗ kín trên vật liệu.'),
    Q('Mũi khoan thường làm bằng?', ['Gỗ cứng đã sấy', 'Đồng thau', 'Nhựa kĩ thuật cứng', 'Thép gió (HSS)'], 3, 'Mũi khoan thông dụng làm từ thép gió (high speed steel — HSS) chịu nhiệt và mài mòn tốt.'),
    Q('Trước khi khoan cần?', ['Khoan ngay', 'Bôi dầu', 'Đánh dấu tâm, đột tâm để mũi khoan không lệch', 'Mài bóng vị trí cần khoan'], 2, 'Đánh dấu + đột tâm tạo điểm dẫn giúp mũi khoan vào đúng vị trí.'),
    Q('An toàn khi khoan?', ['Đeo kính, kẹp chặt phôi, không cầm tay', 'Cầm phôi bằng tay', 'Đứng quá gần', 'Mở áo dài'], 0, 'PPE bắt buộc; phôi phải kẹp chặt; không đeo trang sức, áo dài lòng thòng.'),
    Q('Khoan kim loại cứng cần?', ['Khoan thật mạnh', 'Không cần dầu', 'Tốc độ cao', 'Tốc độ thấp, dùng dầu làm nguội'], 3, 'Kim loại cứng: khoan tốc độ thấp + dầu/dung dịch làm nguội để bảo vệ mũi.'),
  ]),

  M(16, 'Mối ghép cố định và mối ghép động', [
    Q('Mối ghép cố định là?', ['Các chi tiết xoay tròn quanh trục', 'Có chuyển động', 'Các chi tiết trượt dọc theo nhau', 'Các chi tiết ghép không có chuyển động tương đối'], 3, 'Mối ghép cố định: 2 chi tiết được liên kết, không có chuyển động tương đối.'),
    Q('Mối ghép động là?', ['Có chuyển động tương đối giữa các chi tiết (trượt, xoay)', 'Không chuyển động', 'Cố định', 'Hàn cứng'], 0, 'Mối ghép động: các chi tiết có thể chuyển động tương đối (bản lề, ổ trục…).'),
    Q('Mối ghép bằng đinh tán thuộc?', ['Mối ghép cố định không tháo được', 'Mối ghép động', 'Tạm thời', 'Tháo được'], 0, 'Đinh tán = mối ghép cố định không tháo được (muốn tháo phải phá huỷ).'),
    Q('Mối ghép bằng ren là?', ['Tạm thời', 'Không tháo được', 'Mối ghép động', 'Mối ghép cố định tháo được'], 3, 'Mối ghép ren (bu lông + đai ốc): tháo được nhiều lần.'),
    Q('Ví dụ mối ghép động?', ['Mối ghép hàn điện', 'Bản lề cửa, ổ trục', 'Bu lông', 'Đinh tán'], 1, 'Bản lề, ổ trục, khớp xoay là các mối ghép động điển hình.'),
  ]),

  M(17, 'Truyền chuyển động — Cơ cấu đai, bánh răng, xích', [
    Q('Truyền động đai dùng?', ['Trục các-đăng nối thẳng', 'Xích con lăn qua đĩa xích', 'Đai (dây) qua 2 bánh đai', 'Bánh răng'], 2, 'Truyền động đai: dùng dây đai liên kết 2 bánh đai để truyền chuyển động.'),
    Q('Tỉ số truyền i = ?', ['n1 + n2', 'n1/n2 = D2/D1', 'D2 × D1', 'n1 − n2'], 1, 'Tỉ số truyền i = số vòng dẫn/bị dẫn = đường kính bị dẫn/dẫn.'),
    Q('Truyền động bánh răng có ưu điểm?', ['Hoạt động êm khi quay chậm', 'Trượt nhiều', 'Hỏng nhanh', 'Tỉ số truyền chính xác, không trượt'], 3, 'Bánh răng: tỉ số truyền chính xác, không trượt, truyền công suất lớn.'),
    Q('Truyền động xích dùng khi?', ['Không có ứng dụng', 'Khoảng cách 2 trục lớn, cần chính xác', 'Khoảng cách nhỏ', 'Trục cùng tâm'], 1, 'Xích dùng khi khoảng cách 2 trục lớn và cần chính xác (xe đạp, xe máy).'),
    Q('Trong xe đạp, từ đĩa đến líp dùng truyền động?', ['Xích', 'Bánh răng', 'Trục các-đăng', 'Đai thang qua puly'], 0, 'Xe đạp dùng truyền động xích từ đĩa (bàn đạp) đến líp (bánh sau).'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Phép chiếu dùng trong bản vẽ KT?', ['Phép chiếu trục đo', 'Phép chiếu xiên góc', 'Vuông góc', 'Xuyên tâm'], 2, 'Bản vẽ KT chuẩn dùng phép chiếu vuông góc.'),
    Q('Hình chiếu đứng có được khi chiếu từ?', ['Trước ra sau', 'Trái sang', 'Trên xuống', 'Dưới lên'], 0, 'Định nghĩa.'),
    Q('Bản vẽ chi tiết có mấy phần?', ['4 (hình, kích thước, YCKT, khung tên)', '5', '2', '3'], 0, '4 thành phần.'),
    Q('Mối ghép ren thuộc loại?', ['Tạm thời', 'Cố định, tháo được', 'Cố định không tháo được', 'Cố định không tháo'], 1, 'Ren tháo lắp nhiều lần.'),
    Q('Đường đỉnh ren vẽ bằng?', ['Lượn sóng', 'Nét đứt', 'Nét liền mảnh', 'Nét liền đậm'], 3, 'Quy ước.'),
  ]),

  // ──────────────── HK2: KỸ THUẬT ĐIỆN ────────────────
  M(19, 'Vai trò của điện năng trong sản xuất và đời sống', [
    Q('Điện năng có vai trò?', ['Chỉ giải trí', 'Chỉ dùng trong công nghiệp nặng', 'Chỉ thắp sáng', 'Nguồn động lực và năng lượng cho mọi ngành sản xuất, sinh hoạt'], 3, 'Điện năng là nguồn năng lượng phổ biến nhất, ứng dụng trong mọi lĩnh vực.'),
    Q('Điện năng được sản xuất từ?', ['Chỉ nước', 'Chỉ gió', 'Nhiệt năng, thuỷ năng, năng lượng gió, mặt trời, nguyên tử', 'Chỉ than'], 2, 'Có nhiều nguồn: nhiệt điện, thuỷ điện, gió, mặt trời, điện hạt nhân…'),
    Q('Điện năng được truyền đến hộ tiêu thụ qua?', ['Đường dây tải điện', 'Xe chở', 'Sóng vô tuyến từ trạm phát', 'Đường ống'], 0, 'Điện năng truyền tải qua hệ thống đường dây cao thế → trung thế → hạ thế đến hộ dùng.'),
    Q('Tại sao truyền tải điện cao áp?', ['Để đẹp', 'Tiết kiệm dây', 'Bắt buộc', 'Giảm tổn thất trên đường dây'], 3, 'Truyền cao áp + dòng nhỏ → giảm tổn thất công suất (P_hao = I²R).'),
    Q('Hộ gia đình VN dùng điện áp?', ['380V', '220V — 50Hz', '12V', '110V — 60Hz'], 1, 'Lưới điện dân dụng VN: 220V xoay chiều, tần số 50Hz.'),
  ]),

  M(20, 'An toàn điện', [
    Q('Tai nạn điện thường do?', ['Chạm vật mang điện, chạm điện do hỏng cách điện, phóng điện', 'Mất điện', 'Điện yếu', 'Đèn cháy'], 0, '3 nguyên nhân chính: chạm trực tiếp, gián tiếp (cách điện hỏng), phóng điện.'),
    Q('Dòng điện qua người bao nhiêu là nguy hiểm?', ['1 A', '10 A', '0.1 A là an toàn', 'Từ 10 mA trở lên có thể nguy hiểm; ≥100 mA gây tử vong'], 3, 'Dòng ≥10 mA: có thể nguy hiểm; ≥100 mA qua tim: rất nguy hiểm có thể chết.'),
    Q('Quy tắc an toàn khi sửa điện?', ['Cắt nguồn điện trước, kiểm tra bằng bút thử điện', 'Đeo dây kim loại', 'Đứng chân trần', 'Sửa khi đang có điện'], 0, 'Cắt nguồn (CB/cầu dao), kiểm tra hết điện rồi mới sửa.'),
    Q('Khi có người bị điện giật, đầu tiên cần?', ['Cắt nguồn điện ngay', 'Bỏ chạy', 'Lao vào kéo ra', 'Gọi điện thoại'], 0, 'Việc đầu tiên: cắt nguồn điện. Nếu không cắt được, dùng vật cách điện gạt nạn nhân ra.'),
    Q('Dụng cụ bảo hộ khi làm việc với điện?', ['Găng vải', 'Tay không', 'Dép nhựa thông thường', 'Găng tay cao su, ủng cách điện, kìm có cán cách điện'], 3, 'PPE điện: găng cao su, ủng cách điện, dụng cụ có tay cầm cách điện.'),
  ]),

  M(21, 'Dụng cụ bảo vệ an toàn điện và sơ cứu nạn nhân bị điện giật', [
    Q('Bút thử điện dùng để?', ['Kiểm tra điện áp thấp ≤500V', 'Đo dòng', 'Đo điện trở', 'Đo công suất'], 0, 'Bút thử điện kiểm tra có điện hay không ở mạng điện sinh hoạt (≤500V).'),
    Q('Khi bút thử điện sáng?', ['Pha–trung tính nối tắt', 'Mất điện', 'Có điện', 'Hỏng pin'], 2, 'Đèn neon trong bút sáng = có điện áp giữa đầu bút và tay người dùng.'),
    Q('Khi tách nạn nhân khỏi nguồn điện?', ['Lay gọi nạn nhân thật to để tỉnh', 'Dội nước', 'Đứng trên vật cách điện khô, dùng gậy gỗ/nhựa gạt dây', 'Túm tay nạn nhân'], 2, 'Đứng cách điện, dùng vật cách điện gạt dây/đẩy nạn nhân.'),
    Q('Sau khi tách khỏi nguồn, cần?', ['Để yên', 'Cho uống nước', 'Đắp chăn', 'Kiểm tra hô hấp, hô hấp nhân tạo nếu cần'], 3, 'Kiểm tra hô hấp, tim mạch. Nếu ngừng thở: hô hấp nhân tạo + ép tim ngoài lồng ngực.'),
    Q('Gọi cấp cứu số?', ['114', '115', '113', '112'], 1, '115 = cấp cứu y tế ở Việt Nam.'),
  ]),

  M(22, 'Vật liệu kĩ thuật điện', [
    Q('Vật liệu dẫn điện?', ['Đồng, nhôm, sắt, vàng', 'Gỗ khô', 'Sứ, thuỷ tinh', 'Nhựa, cao su'], 0, 'Kim loại dẫn điện tốt: đồng (tốt nhất sau bạc), nhôm, sắt.'),
    Q('Vật liệu cách điện?', ['Sắt non làm lõi', 'Cao su, nhựa, sứ, thuỷ tinh, gỗ khô', 'Nhôm dẫn điện', 'Đồng nguyên chất'], 1, 'Cách điện = điện trở rất lớn: cao su, nhựa, sứ, thuỷ tinh, dầu cách điện…'),
    Q('Vật liệu dẫn từ?', ['Sắt non, thép kĩ thuật điện', 'Đồng đỏ dùng làm cuộn dây', 'Nhôm dùng làm dây tải điện', 'Cao su'], 0, 'Vật liệu dẫn từ tốt: sắt non, thép silic (lõi máy biến áp, động cơ).'),
    Q('Đồng được dùng làm?', ['Vỏ cách điện', 'Vỏ cầu dao', 'Dây dẫn điện', 'Đế ổ cắm'], 2, 'Đồng dẫn điện rất tốt + dẻo → dùng làm dây dẫn, cuộn dây.'),
    Q('Cao su dùng để?', ['Bọc cách điện cho dây dẫn', 'Làm tiếp xúc', 'Làm cầu dao', 'Làm lõi dây'], 0, 'Cao su cách điện rất tốt + đàn hồi → bọc dây dẫn.'),
  ]),

  M(23, 'Đồ dùng điện — Phân loại', [
    Q('Đồ dùng điện trong gia đình phân thành 3 nhóm?', ['Đắt-rẻ', 'To-nhỏ', 'Điện-nhiệt, điện-cơ, điện-quang', 'Mới-cũ'], 2, '3 nhóm theo nguyên lý biến đổi năng lượng.'),
    Q('Bàn là (bàn ủi) thuộc nhóm?', ['Điện-từ (động cơ rung)', 'Điện-cơ', 'Điện-nhiệt', 'Điện-quang'], 2, 'Bàn là biến điện năng → nhiệt năng làm nóng đế bàn.'),
    Q('Quạt điện thuộc nhóm?', ['Điện-từ (cuộn cảm)', 'Điện-cơ', 'Điện-nhiệt', 'Điện-quang'], 1, 'Quạt điện: điện năng → cơ năng quay cánh.'),
    Q('Bóng đèn thuộc nhóm?', ['Điện-nhiệt', 'Điện-quang', 'Điện-cơ', 'Điện-từ (cuộn từ trường)'], 1, 'Bóng đèn biến điện năng thành quang năng (ánh sáng).'),
    Q('Tủ lạnh thuộc nhóm?', ['Điện-nhiệt', 'Điện-cơ (động cơ máy nén)', 'Không phân loại', 'Điện-quang'], 1, 'Tủ lạnh: dùng động cơ máy nén → thuộc điện-cơ.'),
  ]),

  M(24, 'Đồ dùng điện loại điện-nhiệt — Bàn là, nồi cơm', [
    Q('Nguyên lý điện-nhiệt dựa trên?', ['Cảm ứng', 'Từ trường', 'Ánh sáng', 'Tác dụng nhiệt của dòng điện qua dây điện trở (Q=I²Rt)'], 3, 'Dòng điện qua dây điện trở → toả nhiệt theo định luật Jun-Lenxo (Q=I²Rt).'),
    Q('Dây đốt nóng làm bằng?', ['Đồng nguyên chất tinh khiết', 'Nhôm dùng làm dây dẫn', 'Hợp kim chịu nhiệt: niken-crom (nichrom)', 'Sắt non'], 2, 'Nichrom (Ni-Cr) có điện trở suất cao và chịu nhiệt độ rất cao mà không cháy.'),
    Q('Bàn là gồm?', ['Chỉ dây đốt', 'Chỉ đế', 'Dây đốt + đế (vỏ) + bộ điều nhiệt', 'Chỉ điều nhiệt'], 2, 'Cấu tạo: dây đốt nóng, đế bàn (gang/inox), bộ điều nhiệt (rơ-le nhiệt), tay cầm.'),
    Q('Nồi cơm điện có?', ['Chỉ mâm nhiệt', 'Không có rơ-le', 'Chỉ lòng nồi', 'Mâm nhiệt + lòng nồi + rơ-le tự ngắt khi cơm chín'], 3, 'Nồi cơm điện dùng rơ-le nhiệt: khi nước cạn, nhiệt độ tăng đột ngột → ngắt tự động.'),
    Q('An toàn khi dùng đồ điện-nhiệt?', ['Để vải gần', 'Cắm điện cả ngày', 'Không để vải, giấy gần khi đang nóng; rút phích khi dùng xong', 'Đổ nước vào bàn là nóng'], 2, 'Phòng cháy: không để vật cháy gần; rút phích sau khi dùng.'),
  ]),

  M(25, 'Đồ dùng điện loại điện-quang — Bóng đèn sợi đốt và huỳnh quang', [
    Q('Đèn sợi đốt phát sáng nhờ?', ['Đi-ốt phát quang LED', 'Cảm ứng', 'Phóng điện', 'Sợi đốt vonfram nóng đến nhiệt độ cao'], 3, 'Đèn sợi đốt: dòng điện làm sợi vonfram nóng ~2500°C → phát ra ánh sáng.'),
    Q('Nhược điểm đèn sợi đốt?', ['Hiệu suất phát quang thấp (90% năng lượng → nhiệt)', 'Quá đắt', 'Không sáng', 'Khó dùng'], 0, '~90% điện năng biến thành nhiệt, chỉ ~10% thành ánh sáng → rất phí.'),
    Q('Đèn huỳnh quang (đèn ống) phát sáng nhờ?', ['Phóng điện qua hơi thuỷ ngân, kích thích lớp huỳnh quang', 'Sợi nóng', 'Đi-ốt phát quang LED gắn ống', 'Mặt trời'], 0, 'Đèn huỳnh quang: phóng điện trong ống chứa Hg → tia UV → kích thích bột huỳnh quang.'),
    Q('Ưu điểm đèn huỳnh quang so với sợi đốt?', ['Mau hỏng', 'Đắt hơn nhiều', 'Hiệu suất cao gấp 4–5 lần, tuổi thọ dài hơn', 'Sáng yếu'], 2, 'Hiệu suất phát quang cao gấp 4–5 lần đèn sợi đốt, tuổi thọ ~5000h.'),
    Q('Đèn LED có ưu điểm gì?', ['Tốn điện', 'Cồng kềnh', 'Hiệu suất thấp', 'Hiệu suất rất cao, tuổi thọ dài, nhỏ gọn'], 3, 'LED: hiệu suất cao nhất hiện nay, ít phát nhiệt, tuổi thọ ~25 000h.'),
  ]),

  M(26, 'Đồ dùng điện loại điện-cơ — Quạt điện, máy bơm', [
    Q('Quạt điện dùng?', ['Động cơ điện 1 pha (hoặc 3 pha)', 'Sợi đốt', 'Điện trở', 'Cuộn dây nichrom đốt nóng'], 0, 'Quạt dùng động cơ điện xoay chiều, phần lớn là 1 pha cho gia đình.'),
    Q('Cấu tạo cơ bản động cơ điện?', ['3 phần', 'Stator (cố định) và Rotor (quay)', 'Chỉ stator', 'Chỉ rotor'], 1, 'Động cơ điện cơ bản: stator (phần đứng yên) + rotor (phần quay).'),
    Q('Số tốc độ của quạt điện thường có?', ['10 tốc độ', '1 tốc độ', '3 tốc độ', '5 tốc độ'], 2, 'Quạt thông dụng có 3 mức (số 1, 2, 3) tốc độ tăng dần.'),
    Q('Máy bơm nước dùng để?', ['Vận chuyển nước lên cao hoặc đi xa', 'Đun nước', 'Làm nóng', 'Lọc nước'], 0, 'Máy bơm biến điện năng → cơ năng → bơm nước.'),
    Q('Bảo dưỡng quạt điện cần?', ['Không cần', 'Lau bụi cánh, tra dầu vào trục định kỳ', 'Đổ nước vào', 'Tháo tung mọi tháng'], 1, 'Vệ sinh cánh, tra dầu trục giúp quạt chạy bền và êm.'),
  ]),

  M(27, 'Máy biến áp 1 pha', [
    Q('Máy biến áp dùng để?', ['Tăng/giảm điện áp xoay chiều', 'Đo điện áp', 'Biến AC sang DC', 'Biến đổi tần số'], 0, 'Biến áp thay đổi điện áp xoay chiều mà không đổi tần số.'),
    Q('Máy biến áp gồm?', ['Lõi sắt + 2 cuộn dây sơ cấp và thứ cấp', 'Chỉ cuộn dây', '3 cuộn dây', 'Chỉ lõi sắt'], 0, 'Cấu tạo cơ bản: lõi thép silic + cuộn sơ cấp + cuộn thứ cấp.'),
    Q('Tỉ số biến áp k = U1/U2 = ?', ['P2/P1 (công suất ngược)', 'R1/R2 (điện trở cuộn dây)', 'N1/N2 (tỉ số vòng dây)', 'I1/I2 (tỉ số dòng điện)'], 2, 'U1/U2 = N1/N2, trong đó N là số vòng dây sơ/thứ cấp.'),
    Q('Máy tăng áp có?', ['N1 = N2', 'N1 > N2', 'N2 > N1 (số vòng thứ cấp lớn hơn)', 'Không có cuộn dây'], 2, 'Tăng áp: U2 > U1 → N2 > N1.'),
    Q('Ứng dụng máy biến áp?', ['Truyền tải điện, sạc điện thoại, thiết bị điện tử', 'Đèn LED chiếu sáng phòng', 'Đun nước', 'Quạt trần làm mát'], 0, 'Ứng dụng: trạm biến áp, adapter sạc, ổn áp…'),
  ]),

  M(28, 'Đặc điểm mạng điện trong nhà', [
    Q('Mạng điện trong nhà ở VN có điện áp?', ['12V', '380V', '110V', '220V'], 3, 'Điện sinh hoạt VN: 220V xoay chiều.'),
    Q('Đặc điểm tải tiêu thụ trong nhà?', ['Chỉ động cơ', 'Đồng nhất', 'Đa dạng, công suất khác nhau', 'Chỉ chiếu sáng'], 2, 'Trong nhà có nhiều loại tải: chiếu sáng, đun nấu, làm lạnh, điện tử…'),
    Q('Mạng điện trong nhà phải?', ['Bố trí theo sở thích người dùng', 'Càng phức tạp càng tốt', 'Đảm bảo an toàn, đủ công suất, tin cậy', 'Tiết kiệm vô tội vạ'], 2, 'Yêu cầu: an toàn người và thiết bị, đủ công suất, dễ vận hành.'),
    Q('Cấu trúc cơ bản mạng điện trong nhà?', ['Chỉ 1 dây', 'Chỉ mạch chính', 'Mạch chính + nhiều mạch nhánh', 'Không cấu trúc'], 2, 'Từ công tơ → mạch chính (dây nguồn) → các mạch nhánh cấp cho từng phòng.'),
    Q('Mạch nhánh thường có?', ['Chỉ đồ dùng', 'Không có gì', 'Cầu chì/CB riêng, ổ cắm, công tắc, đồ dùng', 'Chỉ ổ cắm'], 2, 'Mạch nhánh: từ CB nhánh → công tắc/ổ cắm → đồ dùng điện.'),
  ]),

  M(29, 'Thiết bị đóng-cắt và lấy điện', [
    Q('Thiết bị đóng-cắt mạch điện?', ['Quạt điện trần', 'Bóng đèn', 'Công tắc, cầu dao, CB (aptomat)', 'Tủ lạnh'], 2, 'Công tắc (cho mạch nhánh), cầu dao/CB (cho mạch chính) đóng-cắt mạch điện.'),
    Q('Aptomat (CB) khác cầu chì?', ['Không khác', 'CB chỉ đóng tay', 'Cầu chì tự động', 'Tự động ngắt khi quá tải/ngắn mạch, có thể đóng lại; cầu chì cháy phải thay'], 3, 'CB tự ngắt rồi đóng lại được; cầu chì cháy 1 lần, phải thay dây mới.'),
    Q('Ổ cắm điện 1 pha có?', ['5 chấu', '2 hoặc 3 cực (chấu)', '10 chấu', '1 chấu'], 1, 'Ổ cắm 1 pha: 2 chấu (L+N) hoặc 3 chấu (L+N+PE — có dây tiếp đất).'),
    Q('Phích cắm phải?', ['Lỏng cho dễ rút', 'Tự chế', 'Khớp với ổ cắm, không lỏng', 'Cắm chéo'], 2, 'Phích phải khít với ổ cắm — lỏng gây tia lửa, nóng, có thể cháy.'),
    Q('Khi rút phích, kéo?', ['Cả dây nguồn lẫn thân phích', 'Dây nguồn', 'Mạnh tay', 'Phần thân phích'], 3, 'Phải kéo thân phích, không kéo dây để tránh đứt dây ở chân phích.'),
  ]),

  M(30, 'Thiết bị bảo vệ — Cầu chì, CB chống dòng dò (RCBO)', [
    Q('Cầu chì hoạt động dựa trên?', ['Cơ học', 'Quang điện', 'Cảm ứng từ', 'Nóng chảy của dây chì khi dòng quá lớn'], 3, 'Dây chì nóng chảy khi I vượt giá trị định mức → ngắt mạch.'),
    Q('CB chống dòng dò (RCBO/RCD) bảo vệ?', ['Tăng dòng', 'Người khỏi điện giật khi có dòng rò xuống đất', 'Đèn không cháy', 'Quạt không hỏng'], 1, 'RCD/RCBO phát hiện dòng rò (vd 30 mA) → ngắt mạch trong tích tắc, cứu người.'),
    Q('Khi CB nhảy, cần?', ['Phá huỷ CB', 'Đóng lại ngay', 'Tìm và sửa nguyên nhân trước khi đóng lại', 'Buộc CB không nhảy'], 2, 'CB nhảy = có sự cố (quá tải/chạm chập). Phải sửa nguyên nhân rồi mới đóng lại.'),
    Q('Vị trí lắp CB chính?', ['Bên trong tường', 'Cuối mạch', 'Đầu vào nguồn của tủ điện', 'Trên trần'], 2, 'CB chính lắp ngay sau công tơ điện ở đầu vào tủ điện, ngắt được toàn bộ mạng nhà.'),
    Q('Dây nối đất (PE) có chức năng?', ['Dẫn dòng rò xuống đất, bảo vệ người', 'Giảm điện áp', 'Tăng dòng', 'Trang trí'], 0, 'Dây PE nối vỏ kim loại thiết bị xuống đất, tránh chạm vỏ → điện giật.'),
  ]),

  M(31, 'Sơ đồ điện — Sơ đồ nguyên lý và sơ đồ lắp đặt', [
    Q('Sơ đồ nguyên lý thể hiện?', ['Vị trí lắp thực tế', 'Nguyên lý hoạt động, mối liên hệ điện giữa các phần tử', 'Mặt bằng', 'Cách trang trí'], 1, 'Sơ đồ nguyên lý mô tả mạch về mặt logic — KHÔNG quan tâm vị trí thực tế.'),
    Q('Sơ đồ lắp đặt thể hiện?', ['Kích thước nhà', 'Vị trí lắp đặt cụ thể của các phần tử trên thực địa', 'Công thức tính', 'Nguyên lý'], 1, 'Sơ đồ lắp đặt = bản vẽ chỉ rõ vị trí, đường dây, cao độ trên tường nhà.'),
    Q('Ký hiệu công tắc 2 cực?', ['Hình vuông', 'Đường ngang + dấu chéo cắt mạch', 'Hình tròn', 'Tam giác'], 1, 'KH công tắc: đoạn thẳng có dấu nghiêng/cắt thể hiện đóng-mở mạch.'),
    Q('Ký hiệu cầu chì?', ['Hình tròn', 'Hình chữ nhật nhỏ trên đường dây', 'Hình vuông', 'Tam giác'], 1, 'Cầu chì: hình chữ nhật nhỏ trên dây, có chấm tròn 2 đầu.'),
    Q('Trước khi lắp thực tế, cần?', ['Lắp luôn', 'Không cần sơ đồ', 'Vẽ sơ đồ nguyên lý → lắp đặt → liệt kê vật liệu', 'Vẽ tự do'], 2, 'Trình tự: phân tích yêu cầu → sơ đồ nguyên lý → sơ đồ lắp đặt → bảng vật liệu → lắp thực.'),
  ]),

  M(32, 'Thiết kế mạch điện đơn giản — 1 công tắc điều khiển 1 bóng đèn', [
    Q('Mạch 1 công tắc 1 đèn cần?', ['2 công tắc', 'Chỉ công tắc', 'Chỉ đèn', '1 nguồn + 1 công tắc + 1 bóng đèn + dây dẫn'], 3, 'Mạch đơn giản nhất: nguồn → công tắc → đèn → về nguồn.'),
    Q('Công tắc lắp ở dây nào?', ['Dây trung tính (N)', 'Cả 2 dây', 'Dây nào tiện đi dây hơn', 'Dây pha (L) — để khi tắt thì đèn không còn điện áp'], 3, 'Quy tắc: công tắc PHẢI lắp ở dây pha (nóng) để tắt = ngắt điện áp khỏi đèn — an toàn khi thay bóng.'),
    Q('Mạch 2 công tắc 2 nơi điều khiển 1 đèn (cầu thang)?', ['3 công tắc', '1 công tắc', 'Dùng 2 công tắc 3 cực (công tắc cầu thang)', '2 công tắc 2 cực'], 2, 'Mạch cầu thang dùng công tắc 3 cực (2 vị trí công tắc — 1 đèn).'),
    Q('Trước khi lắp mạch?', ['Không cần cắt', 'Cắt điện toàn bộ', 'Để có điện', 'Chỉ cắt mạch nhánh tại phòng đó'], 1, 'Phải cắt CB chính trước khi lắp đặt/sửa chữa.'),
    Q('Sau khi lắp, kiểm tra bằng?', ['Không kiểm tra', 'Bật ngay', 'Đồng hồ vạn năng đo thông mạch, sau đó cấp điện thử', 'Quan sát bằng mắt thấy đúng là được'], 2, 'Đo thông mạch (chế độ buzz) trước khi cấp điện để tránh ngắn mạch.'),
  ]),

  M(33, 'Sử dụng hợp lý và tiết kiệm điện năng', [
    Q('Tiết kiệm điện năng giúp?', ['Lãng phí tiền', 'Tăng ô nhiễm', 'Giảm chi phí, bảo vệ môi trường, giảm phụ tải lưới', 'Không có lợi'], 2, 'Tiết kiệm điện = lợi cho gia đình + môi trường + giảm áp lực lưới điện.'),
    Q('Biện pháp tiết kiệm điện trong nhà?', ['Tắt khi không dùng, dùng đèn LED, mua thiết bị nhãn năng lượng cao', 'Dùng đèn sợi đốt', 'Để mọi thứ luôn bật', 'Không dùng năng lượng cao'], 0, 'Tắt khi không dùng, thay LED, chọn thiết bị 5 sao, hợp lý hoá thời gian dùng.'),
    Q('Giờ cao điểm thường?', ['Không có giờ cao điểm', '0–6h', '17h–22h — phụ tải lưới cao nhất', '12h trưa'], 2, 'Giờ cao điểm thường buổi tối 17–22h. Nên giảm tiêu thụ trong giờ này.'),
    Q('Nhãn năng lượng 5 sao?', ['Đắt nhất', 'Không có ý nghĩa', 'Hiệu suất cao nhất, tiết kiệm điện nhất', 'Hiệu suất thấp'], 2, 'Nhãn năng lượng: số sao càng cao càng tiết kiệm điện (5 sao là cao nhất).'),
    Q('Điều hoà nên đặt nhiệt độ?', ['Đặt thấp nhất cho mát nhanh', '26–28°C để tiết kiệm và phù hợp sức khoẻ', '30°C', '16°C'], 1, '26–28°C là khuyến nghị tiết kiệm điện và tốt cho sức khoẻ (chênh ngoài trời ≤7°C).'),
  ]),

  M(34, 'Tính toán tiêu thụ điện năng trong gia đình', [
    Q('Công thức tính điện năng tiêu thụ?', ['A = R · t', 'A = U/I', 'A = P · t', 'A = U · I'], 2, 'A (Wh hoặc kWh) = P (W) × t (h).'),
    Q('Đơn vị điện năng trên hoá đơn?', ['kWh (số điện)', 'V (vôn — hiệu điện thế)', 'A (ampe — cường độ dòng)', 'W (oát — công suất tức thời)'], 0, 'Hoá đơn tính theo kWh (1 kWh = 1000W·h).'),
    Q('Tủ lạnh 150W chạy 24h tiêu thụ?', ['3,6 kWh', '36 kWh', '360 kWh', '0,36 kWh'], 0, 'A = 0,15 × 24 = 3,6 kWh.'),
    Q('Đèn LED 10W thắp 5h?', ['500 kWh', '5 kWh', '50 Wh = 0,05 kWh', '0,5 kWh'], 2, 'A = 10 × 5 = 50 Wh = 0,05 kWh.'),
    Q('Để giảm hoá đơn điện?', ['Tăng thời gian', 'Giảm thời gian sử dụng hoặc dùng thiết bị công suất nhỏ hơn', 'Không thể giảm', 'Tăng công suất'], 1, 'A = P·t — muốn giảm A: giảm P hoặc t.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Điện áp sinh hoạt VN?', ['110V/60Hz', '380V', '12V', '220V/50Hz'], 3, 'Chuẩn VN.'),
    Q('Hình chiếu đứng nhìn từ?', ['Dưới lên', 'Trước ra sau', 'Trái sang', 'Trên xuống'], 1, 'Định nghĩa.'),
    Q('Dây dẫn điện thường làm bằng?', ['Cao su', 'Sứ cách điện', 'Sắt non dẫn từ', 'Đồng/nhôm'], 3, 'Đồng nhôm dẫn điện tốt.'),
    Q('Bóng đèn LED ưu điểm chính?', ['Rất nóng', 'Mau hỏng', 'Sáng yếu', 'Tiết kiệm điện, tuổi thọ cao'], 3, 'LED hiệu suất cao, tuổi thọ dài.'),
    Q('1 kWh = ?', ['10000 Wh', '10 Wh', '1000 Wh', '100 Wh'], 2, '1 kWh = 1000 Wh.'),
  ]),
];

export const S8CN_SCENARIOS = indexBy(S8CN_WEEKS);
