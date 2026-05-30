// ============================================================
// Lớp 2 · MĨ THUẬT — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám Chương trình GDPT 2018: yếu tố tạo hình, màu cơ bản,
// pha màu, trang trí, tranh dân gian Đông Hồ, xé dán, nặn.
// ID prefix: "P2MT-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2MT', 'my-thuat', n, title, qs, opts);

export const P2MT_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Đường thẳng – đường cong', [
    Q('Đường nào dưới đây là đường thẳng?', ['Đường lượn sóng', 'Đường kẻ thước', 'Đường tròn', 'Đường zíc-zắc'], 1, 'Kẻ bằng thước cho ta đường thẳng.'),
    Q('Đường cong thường gợi cảm giác?', ['Cứng, mạnh', 'Mềm mại, uyển chuyển', 'Gãy gọn', 'Sắc nhọn'], 1, 'Đường cong mềm mại, uyển chuyển.'),
    Q('Để vẽ thân con rắn nên dùng đường gì?', ['Thẳng', 'Cong/lượn sóng', 'Gãy khúc', 'Chấm rời'], 1, 'Thân rắn uốn lượn nên dùng đường cong.'),
    Q('Mặt bàn, cạnh bảng được vẽ bằng đường?', ['Cong', 'Thẳng', 'Tròn', 'Xoắn ốc'], 1, 'Cạnh bàn, cạnh bảng là đường thẳng.'),
    Q('Đường nào tạo cảm giác chuyển động mạnh, gấp?', ['Thẳng nằm ngang', 'Cong tròn', 'Gãy khúc (zíc-zắc)', 'Chấm rời'], 2, 'Đường gãy khúc gợi tia chớp, mạnh và gấp.'),
    Q('Cầu vồng thường được vẽ bằng đường?', ['Thẳng đứng', 'Cong', 'Gãy khúc', 'Chấm rời'], 1, 'Cầu vồng cong hình vòng cung.'),
  ]),

  M(2, 'Chấm tạo hình', [
    Q('Chấm to – nhỏ khác nhau giúp tranh?', ['Nhàm chán', 'Sinh động, có nhịp điệu', 'Bị xấu đi', 'Mất màu'], 1, 'Chấm có to-nhỏ giúp tranh sinh động.'),
    Q('Khi nhiều chấm xếp gần nhau, ta cảm thấy?', ['Thưa thớt', 'Dày, đậm', 'Trống rỗng', 'Sáng hơn'], 1, 'Mật độ chấm dày tạo mảng đậm.'),
    Q('Chấm có thể tạo thành?', ['Chỉ một đường', 'Đường nét, hình, mảng', 'Chỉ một hình', 'Không tạo gì'], 1, 'Nhiều chấm có thể nối thành đường, hình, mảng.'),
    Q('Dụng cụ nào dễ tạo chấm tròn nhất?', ['Thước kẻ', 'Đầu bút màu/bông tăm', 'Kéo', 'Cục tẩy'], 1, 'Chấm đầu bút hoặc bông tăm cho chấm tròn đều.'),
    Q('Để vẽ bầu trời đầy sao, ta dùng?', ['Đường thẳng dài', 'Các chấm nhỏ sáng', 'Hình vuông to', 'Đường gãy khúc'], 1, 'Sao trên trời được gợi bằng các chấm sáng nhỏ.'),
    Q('Chấm thưa cho cảm giác?', ['Đậm, nặng', 'Nhẹ, thoáng', 'Đen kịt', 'Không thấy gì'], 1, 'Chấm thưa cho mảng nhẹ, thoáng.'),
  ]),

  M(3, 'Phối hợp đường nét cơ bản', [
    Q('Phối hợp đường thẳng + cong giúp tranh?', ['Đơn điệu', 'Phong phú, hấp dẫn', 'Xấu hơn', 'Nhòe đi'], 1, 'Kết hợp nhiều loại đường làm tranh phong phú.'),
    Q('Mái nhà ngói thường được vẽ bằng đường?', ['Thẳng nghiêng', 'Tròn', 'Xoắn ốc', 'Chấm rời'], 0, 'Mái nhà ngói là hai đường thẳng nghiêng chụm đỉnh.'),
    Q('Sóng biển được gợi tả bằng đường?', ['Thẳng đứng', 'Lượn sóng', 'Gãy vuông góc', 'Chấm rời'], 1, 'Sóng vẽ bằng đường lượn sóng.'),
    Q('Để vẽ cánh đồng lúa và dãy núi, ta phối hợp?', ['Chỉ chấm', 'Đường thẳng và đường cong', 'Chỉ đường gãy', 'Không có đường'], 1, 'Ruộng – đường ngang; núi – đường cong.'),
    Q('Đường viền của lá cây có dạng?', ['Thẳng tắp', 'Cong nhẹ, có răng cưa', 'Vuông góc', 'Không có'], 1, 'Mép lá thường cong, có răng cưa nhẹ.'),
    Q('Khi vẽ một bức tranh, nên?', ['Chỉ dùng 1 loại đường', 'Phối hợp nhiều loại đường', 'Không dùng đường', 'Chỉ dùng chấm'], 1, 'Phối hợp đường giúp hình phong phú.'),
  ]),

  M(4, 'Màu cơ bản: ĐỎ', [
    Q('Màu đỏ thuộc nhóm màu?', ['Lạnh', 'Nóng', 'Trung tính', 'Không có nhóm'], 1, 'Đỏ là màu nóng.'),
    Q('Vật nào dưới đây thường có màu đỏ?', ['Lá cây non', 'Quả cà chua chín', 'Trời ban ngày', 'Cỏ'], 1, 'Cà chua chín thường đỏ.'),
    Q('Màu đỏ gợi cảm xúc?', ['Buồn, lạnh', 'Ấm áp, mạnh mẽ, vui tươi', 'Nhàm chán', 'Tối tăm'], 1, 'Đỏ thường gợi ấm, vui, mạnh.'),
    Q('Lá cờ Tổ quốc Việt Nam có nền màu?', ['Xanh', 'Đỏ', 'Vàng', 'Trắng'], 1, 'Cờ đỏ sao vàng — nền đỏ.'),
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Đi', 'Dừng lại', 'Đi chậm', 'Rẽ phải'], 1, 'Đèn đỏ — dừng lại.'),
    Q('Trong 3 màu cơ bản, có màu đỏ và?', ['Đen, trắng', 'Vàng, xanh lam', 'Hồng, tím', 'Cam, lục'], 1, 'Ba màu cơ bản: đỏ, vàng, xanh lam.'),
  ]),

  M(5, 'Màu cơ bản: VÀNG', [
    Q('Màu vàng thuộc nhóm màu?', ['Lạnh', 'Nóng', 'Tối', 'Trắng'], 1, 'Vàng là màu nóng, sáng.'),
    Q('Mặt trời thường được tô màu?', ['Xanh', 'Vàng/cam', 'Tím', 'Đen'], 1, 'Mặt trời gợi nắng — vàng/cam.'),
    Q('Quả nào dưới đây thường có vỏ vàng?', ['Cam non', 'Chuối chín', 'Dưa hấu', 'Mận'], 1, 'Chuối chín có vỏ vàng.'),
    Q('Màu vàng gợi cảm giác?', ['U buồn', 'Tươi sáng, rực rỡ', 'Lạnh giá', 'Đen tối'], 1, 'Vàng tươi sáng, rực rỡ.'),
    Q('Ngôi sao trên cờ Tổ quốc Việt Nam màu?', ['Đỏ', 'Vàng', 'Xanh', 'Trắng'], 1, 'Sao vàng nằm giữa nền đỏ.'),
    Q('Bông hoa hướng dương có màu chủ đạo?', ['Tím', 'Vàng', 'Đen', 'Xanh lam'], 1, 'Hướng dương rực rỡ màu vàng.'),
  ]),

  M(6, 'Màu cơ bản: XANH (lam)', [
    Q('Màu xanh lam thuộc nhóm màu?', ['Nóng', 'Lạnh', 'Trung tính', 'Không có'], 1, 'Xanh lam là màu lạnh.'),
    Q('Bầu trời ban ngày quang đãng có màu?', ['Đỏ', 'Xanh lam', 'Đen', 'Vàng'], 1, 'Trời thường xanh lam.'),
    Q('Nước biển trên tranh thường tô màu?', ['Cam', 'Xanh', 'Đỏ', 'Vàng'], 1, 'Biển — xanh.'),
    Q('Màu xanh lam gợi cảm xúc?', ['Nóng, gấp gáp', 'Mát mẻ, dịu, bình yên', 'Mạnh, dữ', 'Vui rộn ràng'], 1, 'Xanh lam mát mẻ, dịu.'),
    Q('Trong ba màu cơ bản KHÔNG có màu?', ['Đỏ', 'Vàng', 'Xanh lam', 'Tím'], 3, 'Tím là màu pha, không phải màu cơ bản.'),
    Q('Khi vẽ trời và biển nên dùng nhiều màu?', ['Vàng', 'Xanh', 'Đỏ', 'Đen'], 1, 'Trời – biển thường xanh.'),
  ]),

  M(7, 'Pha màu cơ bản', [
    Q('Đỏ + Vàng = ?', ['Cam', 'Tím', 'Lục', 'Nâu'], 0, 'Đỏ pha vàng cho màu cam.'),
    Q('Đỏ + Xanh lam = ?', ['Cam', 'Tím', 'Lục', 'Hồng'], 1, 'Đỏ pha xanh lam cho màu tím.'),
    Q('Vàng + Xanh lam = ?', ['Cam', 'Tím', 'Xanh lá (lục)', 'Đỏ'], 2, 'Vàng pha xanh lam cho màu xanh lá.'),
    Q('Muốn có màu cam để tô quả cam, ta pha?', ['Đỏ + xanh', 'Đỏ + vàng', 'Vàng + xanh', 'Tím + trắng'], 1, 'Cam = đỏ + vàng.'),
    Q('Muốn có màu xanh lá tô lá cây, ta pha?', ['Đỏ + vàng', 'Đỏ + xanh lam', 'Vàng + xanh lam', 'Vàng + đỏ'], 2, 'Xanh lá = vàng + xanh lam.'),
    Q('Tím là màu?', ['Cơ bản', 'Pha từ đỏ và xanh lam', 'Pha từ vàng và xanh', 'Pha từ đỏ và vàng'], 1, 'Tím pha từ đỏ + xanh lam.'),
  ]),

  M(8, 'Đậm – nhạt (sắc độ)', [
    Q('Trong một bức tranh nên có?', ['Chỉ màu đậm', 'Chỉ màu nhạt', 'Cả đậm và nhạt', 'Một màu duy nhất'], 2, 'Có đậm-nhạt thì tranh mới nổi khối.'),
    Q('Tô đậm hơn bằng cách?', ['Nhấc bút nhẹ', 'Ấn bút mạnh / tô nhiều lần', 'Tô bằng tẩy', 'Dùng giấy trắng'], 1, 'Ấn mạnh / chồng nhiều lớp → đậm.'),
    Q('Phần xa của bức tranh thường tô?', ['Đậm hơn', 'Nhạt hơn', 'Giống y phần gần', 'Đen kịt'], 1, 'Xa thường nhạt, gần đậm.'),
    Q('Ban đêm so với ban ngày thường tô?', ['Nhạt hơn', 'Đậm hơn', 'Cùng độ', 'Trắng'], 1, 'Ban đêm tối — tô đậm hơn.'),
    Q('Vẽ hai quả táo cạnh nhau, để chúng tách ra rõ thì?', ['Tô y hệt nhau', 'Một đậm một nhạt', 'Cùng tô nhạt', 'Không tô'], 1, 'Đậm-nhạt khác nhau giúp tách hình.'),
    Q('Trong sắc độ, "nhạt" nghĩa là?', ['Màu rất tối', 'Màu sáng, ít đậm', 'Màu đen', 'Không có màu'], 1, 'Nhạt = sáng, ít đậm.'),
  ]),

  M(9, 'Hình cơ bản: tam giác – vuông – tròn', [
    Q('Hình có 3 cạnh là hình?', ['Vuông', 'Tam giác', 'Tròn', 'Chữ nhật'], 1, 'Tam giác có 3 cạnh.'),
    Q('Hình có 4 cạnh bằng nhau và 4 góc vuông là?', ['Tam giác', 'Hình vuông', 'Hình tròn', 'Hình thoi'], 1, 'Vuông: 4 cạnh đều, 4 góc vuông.'),
    Q('Hình không có góc, đường viền là đường cong khép kín?', ['Tam giác', 'Vuông', 'Tròn', 'Chữ nhật'], 2, 'Hình tròn không có góc.'),
    Q('Mái nhà thường có dạng hình?', ['Tròn', 'Tam giác', 'Vuông', 'Bầu dục'], 1, 'Mái nhà ngói — tam giác.'),
    Q('Bánh xe ô tô có dạng?', ['Vuông', 'Tròn', 'Tam giác', 'Chữ nhật'], 1, 'Bánh xe — hình tròn.'),
    Q('Cửa sổ ngôi nhà em thường có dạng?', ['Tam giác', 'Vuông/chữ nhật', 'Tròn', 'Ngôi sao'], 1, 'Cửa sổ thường vuông/chữ nhật.'),
  ]),

  M(10, 'Vẽ tự do: NGÔI NHÀ', [
    Q('Một ngôi nhà cơ bản gồm các bộ phận?', ['Chỉ mái', 'Tường, mái, cửa', 'Chỉ tường', 'Chỉ cửa sổ'], 1, 'Ngôi nhà có tường, mái, cửa.'),
    Q('Mái nhà có thể vẽ bằng hình?', ['Tròn', 'Tam giác hoặc hình thang', 'Ngôi sao', 'Đường thẳng đứng đơn'], 1, 'Mái phổ biến: tam giác/hình thang.'),
    Q('Tường nhà thường vẽ bằng?', ['Hình tròn', 'Hình chữ nhật / vuông', 'Hình thoi', 'Tam giác lệch'], 1, 'Tường ~ hình chữ nhật.'),
    Q('Cảnh xung quanh ngôi nhà có thể thêm?', ['Không thêm gì', 'Cây, hoa, đường, ông mặt trời', 'Chỉ con số', 'Chỉ chữ'], 1, 'Thêm cây cối, đường, mặt trời cho sinh động.'),
    Q('Để ngôi nhà trông rõ, nên?', ['Tô cùng 1 màu nhạt khắp tranh', 'Tô đậm-nhạt phối nhiều màu', 'Không tô màu', 'Chỉ kẻ đường viền'], 1, 'Phối màu đậm-nhạt làm nhà nổi bật.'),
    Q('Khói lò sưởi nên vẽ bằng đường?', ['Thẳng đứng cứng', 'Lượn cong, uốn', 'Gãy vuông góc', 'Chấm rời'], 1, 'Khói uốn lượn — đường cong.'),
  ]),

  M(11, 'Vẽ tự do: CÁI CÂY', [
    Q('Cây gồm các bộ phận chính?', ['Chỉ lá', 'Rễ, thân, cành, lá', 'Chỉ hoa', 'Chỉ thân'], 1, 'Cây có rễ, thân, cành, lá (có thể có hoa, quả).'),
    Q('Thân cây thường tô màu?', ['Xanh lá', 'Nâu', 'Đỏ', 'Tím'], 1, 'Thân – màu nâu.'),
    Q('Tán lá cây thường tô màu?', ['Đỏ', 'Vàng đậm', 'Xanh lá', 'Đen'], 2, 'Lá – xanh lá (mùa hè).'),
    Q('Lá mùa thu thường có màu?', ['Xanh lam', 'Vàng/cam/đỏ', 'Tím', 'Trắng'], 1, 'Mùa thu lá ngả vàng/cam/đỏ.'),
    Q('Thân cây nên vẽ bằng đường?', ['Đường tròn nhỏ', 'Hai đường dọc song song / hơi cong', 'Đường gãy vuông', 'Chấm rời'], 1, 'Thân cây ~ hai đường dọc.'),
    Q('Cây thường được vẽ ở vị trí nào trong tranh?', ['Lơ lửng trên trời', 'Đứng trên mặt đất', 'Nằm ngang', 'Dưới nước'], 1, 'Cây mọc trên mặt đất.'),
  ]),

  M(12, 'Vẽ tự do: CON VẬT YÊU THÍCH', [
    Q('Khi vẽ con vật, nên bắt đầu từ?', ['Chi tiết nhỏ trước', 'Hình khối lớn (đầu, mình)', 'Tô màu trước', 'Vẽ nền trước'], 1, 'Vẽ khối lớn trước, chi tiết sau.'),
    Q('Con thỏ có đặc điểm dễ nhận biết?', ['Vòi dài', 'Tai dài', 'Cổ rất dài', 'Có sừng to'], 1, 'Thỏ tai dài.'),
    Q('Con voi có đặc điểm?', ['Tai dài, đuôi xù', 'Vòi dài, tai to', 'Bờm dày', 'Mỏ vẹt'], 1, 'Voi — vòi dài, tai to.'),
    Q('Lông mèo có thể gợi tả bằng?', ['Đường thẳng cứng', 'Nét cong ngắn, mềm', 'Đường gãy vuông', 'Hình vuông'], 1, 'Nét cong ngắn gợi lông mềm.'),
    Q('Để con vật trông sinh động, nên thêm?', ['Không cần gì', 'Mắt, miệng, đuôi và môi trường xung quanh', 'Chỉ tô đen', 'Chỉ vẽ đầu'], 1, 'Thêm chi tiết + môi trường cho sinh động.'),
    Q('Con cá vàng thường tô màu?', ['Đen', 'Vàng/cam', 'Xanh lam', 'Tím'], 1, 'Cá vàng — vàng/cam.'),
  ]),

  M(13, 'Vẽ chân dung GIA ĐÌNH', [
    Q('Tranh "gia đình" thường gồm?', ['Một mình em', 'Các thành viên trong nhà', 'Chỉ con vật', 'Chỉ đồ vật'], 1, 'Gia đình gồm nhiều thành viên.'),
    Q('Khuôn mặt người gồm các bộ phận?', ['Mắt, mũi, miệng, tai', 'Chỉ mắt', 'Chỉ miệng', 'Không có gì'], 0, 'Mặt có mắt, mũi, miệng, tai.'),
    Q('Để phân biệt bố – mẹ – em bé, ta vẽ?', ['Cùng kích thước', 'Khác kích thước, khác trang phục, kiểu tóc', 'Cùng màu áo', 'Không khác gì'], 1, 'Khác kích thước, trang phục giúp nhận ra.'),
    Q('Người lớn so với em bé thường vẽ?', ['Nhỏ hơn', 'To/cao hơn', 'Bằng nhau', 'Không cần khác biệt'], 1, 'Người lớn cao to hơn em bé.'),
    Q('Khi vẽ gia đình, biểu cảm khuôn mặt nên?', ['Buồn rầu', 'Tươi vui, ấm áp', 'Cau có', 'Không có biểu cảm'], 1, 'Gia đình vui — biểu cảm tươi.'),
    Q('Nên đặt gia đình ở khung cảnh nào?', ['Lơ lửng giữa trời', 'Trong nhà / công viên / sân vườn', 'Dưới nước sâu', 'Trên mây'], 1, 'Khung cảnh quen thuộc: nhà, công viên…'),
  ]),

  M(14, 'Vẽ trường học của em', [
    Q('Trường học của em thường có?', ['Một phòng duy nhất', 'Lớp học, sân chơi, cột cờ', 'Chỉ bãi cỏ', 'Chỉ cây cối'], 1, 'Trường có dãy lớp, sân, cột cờ.'),
    Q('Cột cờ ở trường thường có?', ['Lá cờ Tổ quốc', 'Cờ trắng', 'Lồng đèn', 'Không có gì'], 0, 'Cột cờ treo cờ Tổ quốc.'),
    Q('Sân trường giờ ra chơi nên vẽ?', ['Vắng tanh', 'Các bạn chơi đùa', 'Tối om', 'Đầy ô tô'], 1, 'Giờ ra chơi đông vui, các bạn chơi.'),
    Q('Dãy phòng học thường vẽ bằng?', ['Một hình tròn', 'Nhiều hình chữ nhật xếp cạnh, có cửa sổ', 'Tam giác chồng nhau', 'Chấm rời'], 1, 'Phòng học hình chữ nhật, có cửa sổ.'),
    Q('Để tranh trường học sinh động, em thêm?', ['Không thêm gì', 'Cây xanh, bồn hoa, các bạn học sinh', 'Bóng tối', 'Mưa to'], 1, 'Cây, hoa, các bạn — sinh động.'),
    Q('Áo đồng phục các bạn nên tô?', ['Đủ thứ màu loè loẹt', 'Cùng tông / theo trường mình', 'Đen tuyền', 'Không tô'], 1, 'Đồng phục thường cùng tông.'),
  ]),

  M(15, 'Trang trí đường viền (lặp họa tiết)', [
    Q('Trang trí đường viền là?', ['Vẽ tự do', 'Lặp một họa tiết theo dải dài', 'Tô một màu', 'Không có quy tắc'], 1, 'Đường viền — lặp họa tiết theo dải.'),
    Q('Nguyên tắc quan trọng của đường viền là?', ['Mỗi chỗ khác nhau', 'Lặp lại đều đặn', 'Tô đen kịt', 'Không có nguyên tắc'], 1, 'Họa tiết lặp lại đều.'),
    Q('Khoảng cách giữa các họa tiết trên đường viền nên?', ['Lung tung', 'Bằng nhau', 'Càng gần càng tốt', 'Càng xa càng tốt'], 1, 'Đều nhau — đẹp mắt.'),
    Q('Đường viền thường thấy trên?', ['Mặt trời', 'Mép áo, mép khăn, viền đĩa', 'Trên đám mây', 'Trong lòng đất'], 1, 'Trang trí ở mép áo, khăn, đĩa…'),
    Q('Một họa tiết hay dùng cho đường viền?', ['Mặt người', 'Hoa, lá, hình học nhỏ', 'Cả ngôi nhà', 'Cả con voi'], 1, 'Họa tiết nhỏ: hoa, lá, hình hình học.'),
    Q('Màu sắc đường viền nên?', ['Mỗi họa tiết một màu khác xa', 'Có quy luật, ăn ý với nền', 'Toàn đen', 'Toàn trắng'], 1, 'Màu có quy luật, hài hòa với nền.'),
  ]),

  M(16, 'Trang trí hình tròn (đối xứng)', [
    Q('Trang trí hình tròn thường theo nguyên tắc?', ['Lộn xộn', 'Đối xứng qua tâm', 'Một góc rỗng', 'Không quy tắc'], 1, 'Hình tròn — đối xứng qua tâm.'),
    Q('Họa tiết trung tâm hình tròn thường?', ['Lệch sang một bên', 'Nằm chính giữa', 'Ở góc', 'Bên ngoài'], 1, 'Họa tiết chính ở chính giữa.'),
    Q('Đĩa, mâm trang trí dạng?', ['Hình vuông', 'Hình tròn', 'Tam giác', 'Hình thoi'], 1, 'Đĩa, mâm — hình tròn.'),
    Q('Khi chia hình tròn để trang trí thường chia thành?', ['1 phần', 'Các phần bằng nhau (4, 6, 8…)', 'Phần to phần nhỏ tuỳ ý', 'Không cần chia'], 1, 'Chia đều giúp đối xứng.'),
    Q('Họa tiết ở các phần đối xứng nên?', ['Khác hoàn toàn', 'Giống nhau / phản chiếu', 'Tô đen', 'Bỏ trống'], 1, 'Đối xứng — giống/phản chiếu.'),
    Q('Màu sắc trang trí hình tròn nên?', ['Càng nhiều màu càng tốt', 'Hài hòa, có nhóm chính-phụ', 'Một màu đen', 'Không tô'], 1, 'Hài hòa, có chính – phụ.'),
  ]),

  M(17, 'Trang trí hình vuông (đối xứng)', [
    Q('Hình vuông trang trí thường đối xứng?', ['Không có trục', 'Qua 2 đường chéo và 2 đường giữa', 'Chỉ qua 1 góc', 'Không xác định'], 1, 'Hình vuông có nhiều trục đối xứng.'),
    Q('Họa tiết góc của hình vuông thường?', ['Khác nhau hoàn toàn', '4 góc giống nhau', 'Chỉ vẽ 1 góc', 'Bỏ trống'], 1, '4 góc giống nhau cho đối xứng.'),
    Q('Họa tiết chính trong hình vuông trang trí ở đâu?', ['Một góc', 'Chính giữa', 'Bên ngoài', 'Không có họa tiết chính'], 1, 'Họa tiết chính ở giữa.'),
    Q('Viên gạch hoa lát nền thường có dạng?', ['Hình tròn', 'Hình vuông trang trí', 'Tam giác', 'Bầu dục'], 1, 'Gạch lát thường hình vuông.'),
    Q('Để hình vuông trang trí đẹp, các họa tiết phụ nên?', ['Chen lấn họa tiết chính', 'Nhỏ hơn, làm nổi họa tiết chính', 'To hơn họa tiết chính', 'Cùng kích thước với chính'], 1, 'Phụ nhỏ hơn — làm nổi chính.'),
    Q('Màu nền và họa tiết nên?', ['Cùng một màu', 'Có độ đậm-nhạt khác nhau', 'Đen cả', 'Trắng cả'], 1, 'Tương phản đậm-nhạt giúp họa tiết nổi.'),
  ]),

  M(18, 'Triển lãm cuối HK1', [
    Q('Ba màu cơ bản là?', ['Đỏ, vàng, xanh lam', 'Tím, cam, lục', 'Đen, trắng, xám', 'Hồng, nâu, vàng'], 0, 'Ba màu cơ bản: đỏ – vàng – xanh lam.'),
    Q('Đỏ + Vàng pha ra màu?', ['Tím', 'Cam', 'Lục', 'Nâu'], 1, 'Đỏ + vàng = cam.'),
    Q('Đỏ + Xanh lam pha ra màu?', ['Cam', 'Tím', 'Lục', 'Vàng'], 1, 'Đỏ + xanh lam = tím.'),
    Q('Vàng + Xanh lam pha ra?', ['Cam', 'Tím', 'Xanh lá', 'Đỏ'], 2, 'Vàng + xanh lam = xanh lá.'),
    Q('Đường lượn sóng tạo cảm giác?', ['Cứng cáp', 'Mềm mại', 'Sắc nhọn', 'Gãy gọn'], 1, 'Đường cong/lượn — mềm mại.'),
    Q('Hình có 3 cạnh là?', ['Tam giác', 'Vuông', 'Tròn', 'Chữ nhật'], 0, 'Tam giác — 3 cạnh.'),
    Q('Trang trí hình tròn theo nguyên tắc?', ['Tự do', 'Đối xứng qua tâm', 'Lộn xộn', 'Một bên'], 1, 'Trang trí hình tròn đối xứng qua tâm.'),
    Q('Nguyên tắc của đường viền là?', ['Lặp họa tiết đều', 'Vẽ mỗi chỗ một khác', 'Không có quy tắc', 'Tô đen kịt'], 0, 'Đường viền lặp họa tiết đều.'),
    Q('Để bức tranh có chiều sâu, sắc độ cần?', ['Cùng một độ', 'Có đậm – có nhạt', 'Chỉ đậm', 'Chỉ nhạt'], 1, 'Có đậm có nhạt mới rõ khối, sâu.'),
    Q('Màu đỏ thuộc nhóm màu?', ['Lạnh', 'Nóng', 'Trung tính', 'Không có nhóm'], 1, 'Đỏ — màu nóng.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Xé dán giấy: BÔNG HOA', [
    Q('Xé dán là kĩ thuật tạo hình bằng?', ['Vẽ bút chì', 'Xé giấy màu và dán lên nền', 'Nặn đất', 'Cắt bằng dao'], 1, 'Xé dán: xé giấy màu rồi dán.'),
    Q('Để xé hình bông hoa, ta nên?', ['Cắt thẳng bằng kéo', 'Xé theo nét tay từng cánh', 'Đốt giấy', 'Vò nát'], 1, 'Xé tay theo từng cánh hoa.'),
    Q('Cánh hoa thường có dạng?', ['Tam giác nhọn', 'Bầu dục/giọt nước', 'Vuông', 'Chữ nhật'], 1, 'Cánh hoa thường bầu dục/giọt nước.'),
    Q('Nhụy hoa nằm ở vị trí?', ['Ngoài cùng', 'Chính giữa', 'Phía dưới gốc', 'Không có'], 1, 'Nhụy nằm giữa.'),
    Q('Khi dán, dùng?', ['Nước lã', 'Hồ/keo dán', 'Đất sét', 'Mực'], 1, 'Dùng hồ/keo dán.'),
    Q('Bông hoa nên xé bằng giấy màu?', ['Trùng màu nền', 'Tươi sáng, nổi trên nền', 'Đen tuyền', 'Trong suốt'], 1, 'Màu hoa nên nổi trên nền.'),
  ]),

  M(20, 'Xé dán giấy: LÁ CÂY', [
    Q('Lá cây có hình dáng chung là?', ['Tam giác nhọn cứng', 'Bầu dục, có gân giữa', 'Vuông', 'Tròn đều'], 1, 'Lá thường bầu dục, có gân giữa.'),
    Q('Lá non thường có màu?', ['Vàng úa', 'Xanh non/xanh nhạt', 'Đỏ', 'Đen'], 1, 'Lá non — xanh non/xanh nhạt.'),
    Q('Lá già/lá mùa thu có màu?', ['Xanh tươi', 'Vàng, cam, đỏ', 'Tím đậm', 'Trắng'], 1, 'Lá già — vàng/cam/đỏ.'),
    Q('Để có cảm giác lá nhiều lớp, ta dán?', ['Một lá duy nhất', 'Nhiều lá chồng nhẹ lên nhau', 'Lá rời rạc xa nhau', 'Không dán'], 1, 'Chồng lớp tạo độ dày.'),
    Q('Gân giữa của lá có thể tạo bằng?', ['Nét vẽ hoặc dải giấy mỏng', 'Cả miếng giấy lớn', 'Tô đen toàn lá', 'Không cần gân'], 0, 'Gân giữa: nét vẽ hoặc dải giấy mỏng.'),
    Q('Mép lá xé tay cho cảm giác?', ['Nhân tạo, cứng', 'Tự nhiên, mộc mạc', 'Sắc lẹm', 'Trong suốt'], 1, 'Mép xé tay tự nhiên hơn cắt kéo.'),
  ]),

  M(21, 'Xé dán giấy: CON CÁ', [
    Q('Cá có thân hình?', ['Vuông vức', 'Bầu dục/thoi dài', 'Tam giác sắc', 'Tròn đều'], 1, 'Thân cá bầu dục/thoi.'),
    Q('Đuôi cá có dạng?', ['Vuông', 'Tam giác (chữ V)', 'Tròn đều', 'Không có'], 1, 'Đuôi cá hình chữ V/tam giác.'),
    Q('Vẩy cá có thể gợi tả bằng?', ['Mảng giấy hình vảy/cung tròn nhỏ', 'Một mảng đen lớn', 'Đường thẳng dài', 'Không thể tạo'], 0, 'Vảy ~ các hình cung nhỏ.'),
    Q('Nền nước biển nên dán bằng giấy màu?', ['Đỏ', 'Xanh lam', 'Vàng', 'Đen tuyền'], 1, 'Nước biển — xanh lam.'),
    Q('Mắt cá thường được dán bằng?', ['Một miếng giấy to', 'Chấm tròn nhỏ', 'Hình vuông', 'Không có'], 1, 'Mắt cá ~ chấm tròn nhỏ.'),
    Q('Để có đàn cá, ta dán?', ['1 con duy nhất', 'Nhiều con, kích thước khác nhau', 'Tất cả y hệt nhau', 'Không có cá nào'], 1, 'Đàn cá – nhiều con khác cỡ.'),
  ]),

  M(22, '(Tết) Vẽ tranh chủ đề Tết', [
    Q('Hoa đặc trưng Tết miền Bắc là?', ['Hoa hướng dương', 'Hoa đào', 'Hoa cúc', 'Hoa sen'], 1, 'Miền Bắc — hoa đào.'),
    Q('Hoa đặc trưng Tết miền Nam là?', ['Hoa mai vàng', 'Hoa đào', 'Hoa hồng', 'Hoa lan'], 0, 'Miền Nam — hoa mai vàng.'),
    Q('Bánh truyền thống ngày Tết là?', ['Bánh mì', 'Bánh chưng / bánh tét', 'Bánh kem', 'Bánh quy'], 1, 'Bánh chưng (Bắc), bánh tét (Nam).'),
    Q('Màu chủ đạo của Tết thường là?', ['Đen – trắng', 'Đỏ – vàng', 'Tím – xám', 'Xanh đậm'], 1, 'Tết — đỏ và vàng.'),
    Q('Hoa đào có màu?', ['Tím', 'Hồng', 'Vàng', 'Xanh'], 1, 'Hoa đào — hồng.'),
    Q('Hoa mai có màu?', ['Hồng', 'Vàng', 'Đỏ', 'Tím'], 1, 'Hoa mai — vàng.'),
    Q('Phong bao lì xì truyền thống thường màu?', ['Đỏ', 'Xanh', 'Đen', 'Trắng'], 0, 'Phong bao lì xì thường đỏ.'),
    Q('Trong tranh Tết nên có?', ['Cảnh u tối', 'Gia đình sum vầy, bánh, hoa', 'Cảnh chiến tranh', 'Sa mạc'], 1, 'Tranh Tết — sum vầy, bánh, hoa.'),
  ]),

  M(23, 'Tranh dân gian: con GÀ Đông Hồ', [
    Q('Tranh Đông Hồ là dòng tranh dân gian của tỉnh nào?', ['Bắc Ninh', 'Hà Nội', 'Huế', 'Đồng Nai'], 0, 'Tranh Đông Hồ — Bắc Ninh.'),
    Q('Tranh "Gà" Đông Hồ thường tượng trưng cho?', ['Buồn rầu', 'Thịnh vượng, sung túc', 'Chiến tranh', 'Học hành'], 1, 'Gà — biểu tượng thịnh vượng.'),
    Q('Tranh "Gà mẹ con" có ý nghĩa?', ['Cô đơn', 'Gia đình đầm ấm, đông con cháu', 'Học giỏi', 'Đi xa'], 1, 'Gà mẹ con — gia đình đông đúc, ấm no.'),
    Q('Tranh Đông Hồ in trên giấy gì?', ['Giấy A4 trắng', 'Giấy điệp (giấy có quét vỏ sò)', 'Giấy báo', 'Giấy bóng kính'], 1, 'In trên giấy điệp.'),
    Q('Màu sắc tranh Đông Hồ thường?', ['Tối, u ám', 'Tươi, từ nguyên liệu tự nhiên', 'Đen trắng', 'Trong suốt'], 1, 'Màu tươi, lấy từ tự nhiên.'),
    Q('Tranh Đông Hồ làm bằng kĩ thuật?', ['Vẽ tay từng bức', 'Khắc ván gỗ rồi in', 'Chụp ảnh', 'Photocopy'], 1, 'Khắc ván gỗ rồi in lên giấy.'),
  ]),

  M(24, 'Tranh dân gian: ĐÁM CƯỚI CHUỘT', [
    Q('"Đám cưới chuột" là tranh dân gian dòng?', ['Hàng Trống', 'Đông Hồ', 'Sơn mài', 'Lụa'], 1, 'Đám cưới chuột — tranh Đông Hồ.'),
    Q('Nội dung tranh kể về?', ['Đám cưới của loài chuột', 'Hội làng', 'Đám hội mùa xuân', 'Chợ phiên'], 0, 'Tranh kể đoàn rước đám cưới của chuột.'),
    Q('Trong tranh, ngoài chuột còn có?', ['Con voi', 'Con mèo (nhận lễ vật)', 'Con bò', 'Con voi và lạc đà'], 1, 'Đoàn chuột phải dâng lễ cho mèo.'),
    Q('Tranh "Đám cưới chuột" mang tinh thần?', ['Buồn bã, đau khổ', 'Hài hước, phê phán nhẹ nhàng', 'Sợ hãi', 'Trầm lặng'], 1, 'Hài hước, châm biếm nhẹ nhàng.'),
    Q('Các nhân vật trong tranh thường được vẽ?', ['Theo phối cảnh xa-gần', 'Theo hàng/đoàn diễu hành', 'Lộn xộn', 'Chỉ một con'], 1, 'Xếp thành đoàn rước.'),
    Q('Màu sắc của tranh có đặc điểm?', ['U tối', 'Tươi, đỏ – vàng – xanh nổi bật', 'Toàn đen trắng', 'Trong suốt'], 1, 'Màu tươi đặc trưng Đông Hồ.'),
  ]),

  M(25, 'Tranh dân gian: LỢN ăn cây ráy', [
    Q('Tranh "Lợn ăn cây ráy" là tranh dòng?', ['Đông Hồ', 'Hàng Trống', 'Lụa', 'Sơn dầu'], 0, 'Tranh Đông Hồ — Bắc Ninh.'),
    Q('Con lợn trong tranh tượng trưng cho?', ['Nghèo đói', 'Sung túc, no đủ', 'Buồn rầu', 'Lười biếng'], 1, 'Lợn — sung túc, no ấm.'),
    Q('Trên lưng lợn có vẽ?', ['Xoáy âm-dương', 'Hoa hồng', 'Sao vàng', 'Chữ số'], 0, 'Xoáy âm-dương đặc trưng tranh Đông Hồ.'),
    Q('Người dân treo tranh lợn vào dịp?', ['Tết Nguyên Đán', 'Tết Trung Thu', 'Giao thừa duy nhất', 'Sinh nhật'], 0, 'Treo tranh Tết Nguyên Đán cầu sung túc.'),
    Q('Tranh dân gian Đông Hồ thường có ý nghĩa?', ['Cầu chúc may mắn, no ấm', 'Khoa học kỹ thuật', 'Thể thao', 'Quân sự'], 0, 'Tranh chúc tụng, cầu may.'),
    Q('Cây ráy trong tranh là loại?', ['Cây hoa', 'Cây thức ăn cho lợn', 'Cây cảnh trong nhà', 'Cây ăn quả'], 1, 'Ráy là cây làm thức ăn cho lợn.'),
  ]),

  M(26, 'Vẽ phong cảnh: MÙA XUÂN', [
    Q('Mùa xuân ở Việt Nam có đặc trưng?', ['Tuyết rơi', 'Hoa đào, hoa mai nở, cây đâm chồi', 'Lá vàng rụng', 'Nắng gắt'], 1, 'Xuân — hoa nở, cây đâm chồi.'),
    Q('Bầu trời mùa xuân thường?', ['Trong xanh, có mây trắng', 'Tối đen', 'Đầy bão', 'Vàng rực'], 0, 'Trời xuân trong xanh.'),
    Q('Màu chủ đạo tranh mùa xuân?', ['Đen – nâu', 'Xanh lá non, hồng, vàng', 'Xám u ám', 'Đen tuyền'], 1, 'Xuân — xanh non, hồng, vàng.'),
    Q('Chim én bay về báo hiệu?', ['Mùa hạ', 'Mùa xuân', 'Mùa thu', 'Mùa đông'], 1, 'Én về báo xuân.'),
    Q('Cây cối mùa xuân nên vẽ?', ['Khô trụi', 'Lá non, có chồi và hoa', 'Lá vàng rụng', 'Trắng tuyết'], 1, 'Cây xuân đâm chồi, nảy lộc.'),
    Q('Trang phục người trong tranh xuân thường?', ['Áo bông dày', 'Áo dài, áo mới, nhiều màu', 'Áo mưa', 'Đồ tắm biển'], 1, 'Xuân — áo mới, áo dài.'),
  ]),

  M(27, 'Vẽ phong cảnh: BÃI BIỂN', [
    Q('Bãi biển có những yếu tố chính?', ['Núi, tuyết, băng', 'Cát, nước biển, sóng, trời', 'Đường, nhà, ô tô', 'Ruộng và trâu'], 1, 'Biển: cát, nước, sóng, trời.'),
    Q('Cát biển thường tô màu?', ['Đen', 'Vàng nhạt/be', 'Đỏ tươi', 'Tím'], 1, 'Cát — vàng nhạt/be.'),
    Q('Sóng biển vẽ bằng đường?', ['Thẳng đứng', 'Lượn sóng (cong)', 'Gãy vuông', 'Chấm rời'], 1, 'Sóng — đường cong/lượn.'),
    Q('Hai màu xanh thường thấy ở biển là?', ['Đỏ và vàng', 'Xanh lam và xanh lục', 'Tím và hồng', 'Đen và xám'], 1, 'Biển thường xanh lam pha xanh lục.'),
    Q('Trên bãi biển hay có?', ['Tuyết', 'Vỏ ốc, dù, ghế tắm nắng', 'Cây thông trắng', 'Lò sưởi'], 1, 'Biển — vỏ ốc, dù, ghế.'),
    Q('Đường chân trời ngoài biển là đường?', ['Cong xuống', 'Thẳng ngang', 'Gãy khúc', 'Tròn'], 1, 'Chân trời — đường ngang.'),
  ]),

  M(28, 'Vẽ phong cảnh: ĐỒNG QUÊ – RUỘNG LÚA', [
    Q('Đồng quê Việt Nam thường có?', ['Cao ốc, ô tô', 'Cánh đồng lúa, lũy tre, con trâu', 'Sa mạc', 'Núi tuyết'], 1, 'Đồng quê: lúa, tre, trâu.'),
    Q('Cánh đồng lúa chín có màu?', ['Xanh lam', 'Vàng óng', 'Đỏ', 'Trắng'], 1, 'Lúa chín — vàng óng.'),
    Q('Cánh đồng lúa non có màu?', ['Đỏ', 'Xanh non', 'Vàng', 'Tím'], 1, 'Lúa non — xanh non.'),
    Q('Con vật gắn liền nhà nông Việt Nam là?', ['Lạc đà', 'Con trâu', 'Sư tử', 'Hươu cao cổ'], 1, 'Con trâu gắn với nhà nông.'),
    Q('Lũy tre làng vẽ bằng đường?', ['Thẳng tắp ngắn', 'Thẳng nhưng cao, hơi cong ở ngọn', 'Tròn', 'Gãy vuông'], 1, 'Tre cao, ngọn hơi cong.'),
    Q('Phía xa của ruộng nên tô?', ['Đậm hơn phía gần', 'Nhạt hơn phía gần', 'Y hệt phía gần', 'Đen tuyền'], 1, 'Xa nhạt — gần đậm.'),
  ]),

  M(29, 'Nặn đất sét: QUẢ', [
    Q('Đất nặn cần được?', ['Để khô cứng rồi nặn', 'Bóp mềm trước khi nặn', 'Đem phơi nắng to', 'Cho vào nước nóng'], 1, 'Bóp mềm cho dẻo trước khi nặn.'),
    Q('Để nặn quả cam, ta tạo hình?', ['Hình vuông', 'Hình cầu (tròn)', 'Tam giác', 'Hình thoi'], 1, 'Quả cam — hình cầu.'),
    Q('Quả chuối có dạng?', ['Hình cầu', 'Cong dài', 'Vuông', 'Tròn dẹt'], 1, 'Chuối — cong dài.'),
    Q('Quả táo khác quả cam ở chỗ?', ['Có cuống và lõm trên đỉnh', 'Cùng hình hoàn toàn', 'Vuông vức', 'Không có cuống'], 0, 'Táo có cuống và lõm trên đỉnh.'),
    Q('Để tạo cuống, lá cho quả, ta?', ['Vẽ bằng bút', 'Nặn thêm sợi/mảnh đất, gắn vào', 'Không cần làm', 'Dán giấy'], 1, 'Nặn sợi/mảnh và gắn vào.'),
    Q('Khi nặn xong, để giữ hình, ta?', ['Bóp lại', 'Đặt nhẹ nhàng nơi khô ráo', 'Ném đi', 'Cho vào nước'], 1, 'Đặt nhẹ nhàng nơi khô.'),
  ]),

  M(30, 'Nặn đất sét: CON VẬT', [
    Q('Khi nặn con vật, bắt đầu từ?', ['Chi tiết nhỏ', 'Khối lớn: đầu, mình', 'Tô màu', 'Mắt'], 1, 'Khối lớn trước, chi tiết sau.'),
    Q('Nặn con thỏ, đặc điểm nổi bật là?', ['Vòi dài', 'Hai tai dài', 'Sừng to', 'Bờm rậm'], 1, 'Thỏ — tai dài.'),
    Q('Nặn con voi, không thể thiếu?', ['Vòi và tai to', 'Cánh', 'Vây', 'Sừng'], 0, 'Voi — vòi dài, tai to.'),
    Q('Để gắn chân vào thân, ta?', ['Để rời ra', 'Ấn nhẹ và miết mép tiếp giáp', 'Buộc dây', 'Dán giấy'], 1, 'Miết mép cho dính chắc.'),
    Q('Bề mặt lông gợi tả bằng?', ['Cạo nhẵn bóng', 'Khía nhẹ bằng que/đầu nhọn', 'Đổ nước lên', 'Tô màu đen'], 1, 'Khía nhẹ tạo hiệu ứng lông.'),
    Q('Hai mắt con vật có thể là?', ['Hai viên đất nhỏ tròn', 'Hai khối vuông', 'Tam giác lớn', 'Không cần mắt'], 0, 'Hai viên đất nhỏ làm mắt.'),
  ]),

  M(31, 'Nặn đất sét: ĐỒ VẬT', [
    Q('Nặn cái cốc, ta tạo khối?', ['Hình cầu', 'Hình trụ rỗng', 'Tam giác', 'Hình thoi'], 1, 'Cốc — khối trụ rỗng.'),
    Q('Nặn cái đĩa, ta tạo?', ['Hình cầu kín', 'Hình tròn dẹt, hơi lõm giữa', 'Tam giác', 'Hình vuông cao'], 1, 'Đĩa — tròn dẹt, lõm.'),
    Q('Quai cốc nên?', ['Để rời', 'Nặn riêng rồi gắn vào', 'Cắt từ giấy', 'Không có'], 1, 'Quai nặn riêng rồi gắn.'),
    Q('Để tạo lỗ rỗng trong cốc, ta?', ['Ấn ngón cái xuống giữa khối', 'Khoét bằng kéo', 'Cho nước vào', 'Phơi nắng'], 0, 'Ấn ngón cái tạo lỗ.'),
    Q('Để đồ vật phẳng đáy, đứng vững, ta?', ['Vê tròn', 'Vỗ nhẹ phần đáy cho bằng phẳng', 'Đặt nghiêng', 'Cắt vát'], 1, 'Vỗ đáy phẳng cho đứng vững.'),
    Q('Trang trí cốc/đĩa có thể bằng?', ['Khía hoạ tiết hoặc gắn miếng đất khác màu', 'Không trang trí', 'Đập vỡ', 'Đổ keo lên'], 0, 'Khía hoặc gắn họa tiết khác màu.'),
  ]),

  M(32, 'Vẽ chủ đề: NGÀY 8/3 – MẸ VÀ CÔ GIÁO', [
    Q('Ngày 8/3 là ngày?', ['Quốc khánh', 'Quốc tế Phụ nữ', 'Tết Thiếu nhi', 'Nhà giáo Việt Nam'], 1, '8/3 — Quốc tế Phụ nữ.'),
    Q('Quà tặng phổ biến ngày 8/3 là?', ['Pháo nổ', 'Bó hoa, thiệp', 'Bánh chưng', 'Đèn lồng'], 1, 'Hoa và thiệp là quà phổ biến.'),
    Q('Tranh 8/3 nên thể hiện?', ['Đánh nhau', 'Tình cảm với mẹ, cô giáo, bà', 'Sa mạc', 'Núi lửa'], 1, 'Thể hiện tình cảm với phụ nữ thân yêu.'),
    Q('Màu sắc tranh ngày 8/3 thường?', ['U tối', 'Tươi sáng, ấm áp', 'Đen tuyền', 'Xám lạnh'], 1, 'Tươi sáng, ấm áp.'),
    Q('Loài hoa hay được vẽ tặng mẹ?', ['Hoa hồng, hoa cúc, hoa hướng dương', 'Cây xương rồng', 'Cỏ dại', 'Không có hoa'], 0, 'Hoa hồng, cúc, hướng dương…'),
    Q('Hành động trong tranh có thể là?', ['Tặng hoa, ôm mẹ, làm việc nhà giúp mẹ', 'Đánh nhau', 'Phá đồ', 'Ngủ vùi'], 0, 'Tặng hoa, ôm, giúp việc nhà.'),
  ]),

  M(33, 'Vẽ chủ đề: 30/4 – LÁ CỜ HOÀ BÌNH', [
    Q('Ngày 30/4 là ngày?', ['Quốc khánh', 'Giải phóng miền Nam, thống nhất đất nước', 'Quốc tế Lao động', 'Nhà giáo'], 1, '30/4 — Giải phóng miền Nam, thống nhất.'),
    Q('Lá cờ Tổ quốc Việt Nam có?', ['Nền đỏ – sao vàng năm cánh ở giữa', 'Nền xanh – sao đỏ', 'Ba sọc', 'Nền trắng – chữ thập đỏ'], 0, 'Cờ đỏ sao vàng năm cánh.'),
    Q('Ngôi sao trên cờ có mấy cánh?', ['3', '4', '5', '6'], 2, 'Sao 5 cánh.'),
    Q('Khi vẽ ngôi sao trên cờ, cánh sao thường?', ['Một cánh hướng xuống', 'Một cánh hướng thẳng lên', 'Lệch nghiêng', 'Không có quy chuẩn'], 1, 'Theo quy chuẩn, một cánh hướng lên.'),
    Q('Tranh 30/4 thường có hình ảnh?', ['Cờ Tổ quốc, chim bồ câu, người dân vui mừng', 'Sa mạc', 'Khủng long', 'Lò sưởi'], 0, 'Cờ, bồ câu, niềm vui sum họp.'),
    Q('Chim bồ câu trắng biểu tượng cho?', ['Chiến tranh', 'Hoà bình', 'Đói nghèo', 'Mùa đông'], 1, 'Bồ câu trắng — hoà bình.'),
  ]),

  M(34, 'Vẽ chủ đề: NGÀY HÈ', [
    Q('Mùa hè có đặc trưng?', ['Tuyết rơi', 'Nắng chói chang, ve kêu, hoa phượng đỏ', 'Lá vàng rụng', 'Sương muối'], 1, 'Hè — nắng, ve, hoa phượng đỏ.'),
    Q('Hoa phượng nở mùa hè có màu?', ['Tím', 'Đỏ rực', 'Vàng', 'Trắng'], 1, 'Hoa phượng — đỏ rực.'),
    Q('Hoạt động phổ biến của trẻ em ngày hè?', ['Đi tắm biển, thả diều, đọc sách', 'Học thi cuối kỳ', 'Đi cấy lúa Tết', 'Đi xem pháo hoa Giao thừa'], 0, 'Hè — đi biển, thả diều, đọc sách.'),
    Q('Bầu trời mùa hè trong tranh thường?', ['Xám tối', 'Xanh trong, nắng vàng', 'Đen kịt', 'Trắng phau'], 1, 'Hè trời xanh, nắng vàng.'),
    Q('Cây cối mùa hè?', ['Trụi lá', 'Xanh um, tỏa bóng mát', 'Trắng tuyết', 'Khô cằn'], 1, 'Cây xanh, tỏa bóng mát.'),
    Q('Trang phục mùa hè?', ['Áo bông dày', 'Áo phông, quần ngắn, mũ nón', 'Áo mưa', 'Áo len'], 1, 'Áo phông, quần ngắn, mũ.'),
  ]),

  M(35, 'Tổng hợp – em là họa sĩ', [
    Q('Để bố cục tranh đẹp, hình chính nên?', ['Nhỏ tí xíu ở góc', 'To, ở vị trí nổi bật', 'Bị che kín', 'Trùng màu nền'], 1, 'Hình chính to, nổi bật.'),
    Q('Hình phụ trong tranh có vai trò?', ['Quan trọng hơn hình chính', 'Hỗ trợ, làm rõ hình chính', 'Không có vai trò', 'Phá hình chính'], 1, 'Phụ tôn chính.'),
    Q('Tỉ lệ giữa các vật trong tranh nên?', ['Ai cũng bằng nhau', 'Theo thực tế (người to – kiến nhỏ…)', 'Đảo ngược (kiến to hơn voi)', 'Tuỳ ý không quy luật'], 1, 'Theo tỉ lệ thực tế.'),
    Q('Khi tô màu, tránh?', ['Có đậm – có nhạt', 'Tô lem ra ngoài và toàn cùng một độ đậm', 'Phối nhiều màu hài hòa', 'Đường viền rõ'], 1, 'Tránh lem ra ngoài, tránh đơn điệu.'),
    Q('Muốn tranh có chiều sâu, ta dùng?', ['Cùng kích cỡ vật xa-gần', 'Vật xa nhỏ – nhạt, vật gần to – đậm', 'Đảo ngược', 'Đen tuyền'], 1, 'Xa nhỏ-nhạt, gần to-đậm.'),
    Q('Sau khi vẽ xong, ta nên?', ['Vò nát', 'Xem lại, chỉnh sửa, đặt tên tranh', 'Đem bỏ', 'Tô đen tất cả'], 1, 'Xem lại, chỉnh sửa, đặt tên.'),
  ]),

  M(36, 'Triển lãm cuối năm', [
    Q('Ba màu cơ bản là?', ['Đỏ – vàng – xanh lam', 'Cam – tím – lục', 'Đen – trắng – xám', 'Hồng – nâu – be'], 0, 'Ba màu cơ bản: đỏ – vàng – xanh lam.'),
    Q('Đỏ + Xanh lam = ?', ['Cam', 'Tím', 'Lục', 'Nâu'], 1, 'Đỏ + xanh lam = tím.'),
    Q('Vàng + Xanh lam = ?', ['Cam', 'Tím', 'Xanh lá', 'Đỏ'], 2, 'Vàng + xanh lam = xanh lá.'),
    Q('Tranh dân gian Đông Hồ ở tỉnh?', ['Bắc Ninh', 'Hà Nội', 'Bắc Giang', 'Hải Phòng'], 0, 'Đông Hồ — Bắc Ninh.'),
    Q('Tranh "Đám cưới chuột" thuộc dòng?', ['Đông Hồ', 'Hàng Trống', 'Sơn mài', 'Lụa'], 0, 'Tranh Đông Hồ.'),
    Q('Con lợn xoáy âm-dương trong tranh Đông Hồ tượng trưng?', ['Sung túc, no đủ', 'Buồn rầu', 'Chiến tranh', 'Học hành đỗ đạt'], 0, 'Lợn — sung túc, no đủ.'),
    Q('Trang trí hình vuông có mấy trục đối xứng (thường dùng)?', ['1', '2', '4 (2 chéo + 2 giữa)', 'Không có trục'], 2, 'Hình vuông có nhiều trục — thường 4 trục.'),
    Q('Đường viền sử dụng nguyên tắc?', ['Lặp lại họa tiết đều', 'Lộn xộn', 'Tô đen', 'Cắt rời'], 0, 'Lặp lại đều.'),
    Q('Hoa Tết miền Bắc là?', ['Mai vàng', 'Đào hồng', 'Cúc trắng', 'Sen hồng'], 1, 'Miền Bắc — hoa đào.'),
    Q('Cờ Tổ quốc Việt Nam — sao vàng trên nền?', ['Xanh', 'Đỏ', 'Trắng', 'Vàng'], 1, 'Cờ đỏ — sao vàng.'),
  ], { difficulty: 3 }),
];

export const P2MT_SCENARIOS = indexBy(P2MT_WEEKS);
