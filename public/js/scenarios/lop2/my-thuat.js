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
    Q('Đường nào dưới đây là đường thẳng?', ['Đường kẻ thước', 'Đường lượn sóng', 'Đường tròn', 'Đường zíc-zắc'], 0, 'Kẻ bằng thước cho ta đường thẳng.'),
    Q('Đường cong thường gợi cảm giác?', ['Sắc nhọn', 'Mềm mại, uyển chuyển', 'Cứng, mạnh', 'Gãy gọn'], 1, 'Đường cong mềm mại, uyển chuyển.'),
    Q('Để vẽ thân con rắn nên dùng đường gì?', ['Đường thẳng nằm ngang', 'Gãy khúc', 'Chấm rời', 'Cong/lượn sóng'], 3, 'Thân rắn uốn lượn nên dùng đường cong.'),
    Q('Mặt bàn, cạnh bảng được vẽ bằng đường?', ['Đường cong mềm mại', 'Đường tròn khép kín', 'Thẳng', 'Xoắn ốc'], 2, 'Cạnh bàn, cạnh bảng là đường thẳng.'),
    Q('Đường nào tạo cảm giác chuyển động mạnh, gấp?', ['Gãy khúc (zíc-zắc)', 'Cong tròn', 'Thẳng nằm ngang', 'Chấm rời'], 0, 'Đường gãy khúc gợi tia chớp, mạnh và gấp.'),
    Q('Cầu vồng thường được vẽ bằng đường?', ['Cong', 'Gãy khúc', 'Thẳng đứng', 'Chấm rời'], 0, 'Cầu vồng cong hình vòng cung.'),
  ]),

  M(2, 'Chấm tạo hình', [
    Q('Chấm to – nhỏ khác nhau giúp tranh?', ['Nhàm chán', 'Mất màu', 'Bị xấu đi', 'Sinh động, có nhịp điệu'], 3, 'Chấm có to-nhỏ giúp tranh sinh động.'),
    Q('Khi nhiều chấm xếp gần nhau, ta cảm thấy?', ['Sáng hơn', 'Dày, đậm', 'Trống rỗng', 'Thưa thớt'], 1, 'Mật độ chấm dày tạo mảng đậm.'),
    Q('Chấm có thể tạo thành?', ['Chỉ một đường', 'Chỉ một hình', 'Đường nét, hình, mảng', 'Không tạo gì'], 2, 'Nhiều chấm có thể nối thành đường, hình, mảng.'),
    Q('Dụng cụ nào dễ tạo chấm tròn nhất?', ['Lưỡi kéo cắt giấy', 'Thước kẻ', 'Cục tẩy', 'Đầu bút màu/bông tăm'], 3, 'Chấm đầu bút hoặc bông tăm cho chấm tròn đều.'),
    Q('Để vẽ bầu trời đầy sao, ta dùng?', ['Đường thẳng dài', 'Các chấm nhỏ sáng', 'Hình vuông to', 'Đường gãy khúc'], 1, 'Sao trên trời được gợi bằng các chấm sáng nhỏ.'),
    Q('Chấm thưa cho cảm giác?', ['Không thấy gì', 'Nhẹ, thoáng', 'Đậm, nặng', 'Đen kịt'], 1, 'Chấm thưa cho mảng nhẹ, thoáng.'),
  ]),

  M(3, 'Phối hợp đường nét cơ bản', [
    Q('Phối hợp đường thẳng + cong giúp tranh?', ['Phong phú, hấp dẫn', 'Đơn điệu', 'Xấu hơn', 'Nhòe đi'], 0, 'Kết hợp nhiều loại đường làm tranh phong phú.'),
    Q('Mái nhà ngói thường được vẽ bằng đường?', ['Thẳng nghiêng', 'Xoắn ốc', 'Đường tròn cong khép kín', 'Chấm rời'], 0, 'Mái nhà ngói là hai đường thẳng nghiêng chụm đỉnh.'),
    Q('Sóng biển được gợi tả bằng đường?', ['Gãy vuông góc', 'Thẳng đứng', 'Lượn sóng', 'Chấm rời'], 2, 'Sóng vẽ bằng đường lượn sóng.'),
    Q('Để vẽ cánh đồng lúa và dãy núi, ta phối hợp?', ['Đường thẳng và đường cong', 'Chỉ đường gãy', 'Chỉ chấm', 'Không có đường'], 0, 'Ruộng – đường ngang; núi – đường cong.'),
    Q('Đường viền của lá cây có dạng?', ['Vuông góc', 'Đường thẳng đều, không gân', 'Cong nhẹ, có răng cưa', 'Thẳng tắp'], 2, 'Mép lá thường cong, có răng cưa nhẹ.'),
    Q('Khi vẽ một bức tranh, nên?', ['Chỉ dùng 1 loại đường', 'Không dùng đường', 'Chỉ dùng chấm', 'Phối hợp nhiều loại đường'], 3, 'Phối hợp đường giúp hình phong phú.'),
  ]),

  M(4, 'Màu cơ bản: ĐỎ', [
    Q('Màu đỏ thuộc nhóm màu?', ['Lạnh, dịu mát', 'Không có nhóm', 'Nóng', 'Trung tính'], 2, 'Đỏ là màu nóng.'),
    Q('Vật nào dưới đây thường có màu đỏ?', ['Lá cây non', 'Quả cà chua chín', 'Cỏ non đầu mùa', 'Trời ban ngày'], 1, 'Cà chua chín thường đỏ.'),
    Q('Màu đỏ gợi cảm xúc?', ['Tối tăm', 'Nhàm chán', 'Buồn, lạnh', 'Ấm áp, mạnh mẽ, vui tươi'], 3, 'Đỏ thường gợi ấm, vui, mạnh.'),
    Q('Lá cờ Tổ quốc Việt Nam có nền màu?', ['Xanh dương biển', 'Trắng tinh khôi', 'Đỏ', 'Vàng tươi nắng'], 2, 'Cờ đỏ sao vàng — nền đỏ.'),
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Đi tiếp bình thường', 'Rẽ phải', 'Đi chậm', 'Dừng lại'], 3, 'Đèn đỏ — dừng lại.'),
    Q('Trong 3 màu cơ bản, có màu đỏ và?', ['Cam, lục', 'Hồng, tím', 'Vàng, xanh lam', 'Đen, trắng'], 2, 'Ba màu cơ bản: đỏ, vàng, xanh lam.'),
  ]),

  M(5, 'Màu cơ bản: VÀNG', [
    Q('Màu vàng thuộc nhóm màu?', ['Lạnh, dịu mát', 'Nóng', 'Trung tính', 'Tối, trầm buồn'], 1, 'Vàng là màu nóng, sáng.'),
    Q('Mặt trời thường được tô màu?', ['Vàng/cam', 'Xanh lam', 'Đen tuyền', 'Tím sẫm'], 0, 'Mặt trời gợi nắng — vàng/cam.'),
    Q('Quả nào dưới đây thường có vỏ vàng?', ['Chuối chín', 'Quả mận chín tím', 'Dưa hấu', 'Cam non'], 0, 'Chuối chín có vỏ vàng.'),
    Q('Màu vàng gợi cảm giác?', ['U buồn', 'Tươi sáng, rực rỡ', 'Lạnh giá', 'Đen tối'], 1, 'Vàng tươi sáng, rực rỡ.'),
    Q('Ngôi sao trên cờ Tổ quốc Việt Nam màu?', ['Đỏ tươi', 'Vàng', 'Trắng bạc', 'Xanh dương'], 1, 'Sao vàng nằm giữa nền đỏ.'),
    Q('Bông hoa hướng dương có màu chủ đạo?', ['Tím than', 'Xanh lam', 'Vàng', 'Đen kịt'], 2, 'Hướng dương rực rỡ màu vàng.'),
  ]),

  M(6, 'Màu cơ bản: XANH (lam)', [
    Q('Màu xanh lam thuộc nhóm màu?', ['Không có', 'Nóng, rực rỡ', 'Trung tính', 'Lạnh'], 3, 'Xanh lam là màu lạnh.'),
    Q('Bầu trời ban ngày quang đãng có màu?', ['Đen sẫm', 'Xanh lam', 'Đỏ tươi', 'Vàng cam'], 1, 'Trời thường xanh lam.'),
    Q('Nước biển trên tranh thường tô màu?', ['Xanh', 'Đỏ tươi', 'Cam sáng', 'Vàng nhạt'], 0, 'Biển — xanh.'),
    Q('Màu xanh lam gợi cảm xúc?', ['Mát mẻ, dịu, bình yên', 'Vui rộn ràng', 'Mạnh, dữ', 'Nóng, gấp gáp'], 0, 'Xanh lam mát mẻ, dịu.'),
    Q('Trong ba màu cơ bản KHÔNG có màu?', ['Đỏ tươi', 'Tím', 'Xanh lam', 'Vàng chanh'], 1, 'Tím là màu pha, không phải màu cơ bản.'),
    Q('Khi vẽ trời và biển nên dùng nhiều màu?', ['Vàng tươi', 'Đỏ rực', 'Đen tuyền', 'Xanh'], 3, 'Trời – biển thường xanh.'),
  ]),

  M(7, 'Pha màu cơ bản', [
    Q('Đỏ + Vàng = ?', ['Nâu đất', 'Xanh lá (lục)', 'Cam', 'Tím hoa cà'], 2, 'Đỏ pha vàng cho màu cam.'),
    Q('Đỏ + Xanh lam = ?', ['Xanh lá (lục)', 'Cam đậm', 'Hồng phấn', 'Tím'], 3, 'Đỏ pha xanh lam cho màu tím.'),
    Q('Vàng + Xanh lam = ?', ['Cam sáng', 'Xanh lá (lục)', 'Đỏ tươi', 'Tím than'], 1, 'Vàng pha xanh lam cho màu xanh lá.'),
    Q('Muốn có màu cam để tô quả cam, ta pha?', ['Đỏ + xanh', 'Đỏ + vàng', 'Vàng + xanh', 'Tím + trắng'], 1, 'Cam = đỏ + vàng.'),
    Q('Muốn có màu xanh lá tô lá cây, ta pha?', ['Đỏ + xanh lam', 'Vàng + xanh lam', 'Đỏ + vàng', 'Vàng + đỏ'], 1, 'Xanh lá = vàng + xanh lam.'),
    Q('Tím là màu?', ['Pha từ đỏ và xanh lam', 'Cơ bản', 'Pha từ vàng và xanh', 'Pha từ đỏ và vàng'], 0, 'Tím pha từ đỏ + xanh lam.'),
  ]),

  M(8, 'Đậm – nhạt (sắc độ)', [
    Q('Trong một bức tranh nên có?', ['Chỉ màu đậm', 'Một màu duy nhất', 'Cả đậm và nhạt', 'Chỉ màu nhạt'], 2, 'Có đậm-nhạt thì tranh mới nổi khối.'),
    Q('Tô đậm hơn bằng cách?', ['Tô bằng tẩy', 'Dùng giấy trắng', 'Ấn bút mạnh / tô nhiều lần', 'Nhấc bút nhẹ'], 2, 'Ấn mạnh / chồng nhiều lớp → đậm.'),
    Q('Phần xa của bức tranh thường tô?', ['Nhạt hơn', 'Giống y phần gần', 'Đen kịt', 'Đậm hơn'], 0, 'Xa thường nhạt, gần đậm.'),
    Q('Ban đêm so với ban ngày thường tô?', ['Đậm hơn', 'Trắng sáng hơn', 'Cùng độ', 'Nhạt hơn'], 0, 'Ban đêm tối — tô đậm hơn.'),
    Q('Vẽ hai quả táo cạnh nhau, để chúng tách ra rõ thì?', ['Một đậm một nhạt', 'Không tô', 'Tô y hệt nhau', 'Cùng tô nhạt'], 0, 'Đậm-nhạt khác nhau giúp tách hình.'),
    Q('Trong sắc độ, "nhạt" nghĩa là?', ['Màu rất tối', 'Màu đen', 'Không có màu', 'Màu sáng, ít đậm'], 3, 'Nhạt = sáng, ít đậm.'),
  ]),

  M(9, 'Hình cơ bản: tam giác – vuông – tròn', [
    Q('Hình có 3 cạnh là hình?', ['Hình tròn', 'Tam giác', 'Chữ nhật', 'Hình vuông'], 1, 'Tam giác có 3 cạnh.'),
    Q('Hình có 4 cạnh bằng nhau và 4 góc vuông là?', ['Tam giác', 'Hình vuông', 'Hình tròn', 'Hình thoi'], 1, 'Vuông: 4 cạnh đều, 4 góc vuông.'),
    Q('Hình không có góc, đường viền là đường cong khép kín?', ['Tam giác', 'Tròn', 'Hình vuông 4 cạnh', 'Chữ nhật'], 1, 'Hình tròn không có góc.'),
    Q('Mái nhà thường có dạng hình?', ['Hình vuông', 'Bầu dục', 'Tam giác', 'Hình tròn'], 2, 'Mái nhà ngói — tam giác.'),
    Q('Bánh xe ô tô có dạng?', ['Hình vuông', 'Tròn', 'Chữ nhật', 'Tam giác'], 1, 'Bánh xe — hình tròn.'),
    Q('Cửa sổ ngôi nhà em thường có dạng?', ['Ngôi sao', 'Hình tròn', 'Vuông/chữ nhật', 'Tam giác'], 2, 'Cửa sổ thường vuông/chữ nhật.'),
  ]),

  M(10, 'Vẽ tự do: NGÔI NHÀ', [
    Q('Một ngôi nhà cơ bản gồm các bộ phận?', ['Tường, mái, cửa', 'Chỉ cửa sổ', 'Chỉ mái', 'Chỉ tường'], 0, 'Ngôi nhà có tường, mái, cửa.'),
    Q('Mái nhà có thể vẽ bằng hình?', ['Ngôi sao', 'Đường thẳng đứng đơn', 'Tam giác hoặc hình thang', 'Hình tròn'], 2, 'Mái phổ biến: tam giác/hình thang.'),
    Q('Tường nhà thường vẽ bằng?', ['Hình tròn', 'Tam giác lệch', 'Hình chữ nhật / vuông', 'Hình thoi'], 2, 'Tường ~ hình chữ nhật.'),
    Q('Cảnh xung quanh ngôi nhà có thể thêm?', ['Cây, hoa, đường, ông mặt trời', 'Không thêm gì', 'Chỉ con số', 'Chỉ chữ'], 0, 'Thêm cây cối, đường, mặt trời cho sinh động.'),
    Q('Để ngôi nhà trông rõ, nên?', ['Tô đậm-nhạt phối nhiều màu', 'Không tô màu', 'Chỉ kẻ đường viền', 'Tô cùng 1 màu nhạt khắp tranh'], 0, 'Phối màu đậm-nhạt làm nhà nổi bật.'),
    Q('Khói lò sưởi nên vẽ bằng đường?', ['Lượn cong, uốn', 'Gãy vuông góc', 'Thẳng đứng cứng', 'Chấm rời'], 0, 'Khói uốn lượn — đường cong.'),
  ]),

  M(11, 'Vẽ tự do: CÁI CÂY', [
    Q('Cây gồm các bộ phận chính?', ['Chỉ thân', 'Chỉ hoa', 'Chỉ lá', 'Rễ, thân, cành, lá'], 3, 'Cây có rễ, thân, cành, lá (có thể có hoa, quả).'),
    Q('Thân cây thường tô màu?', ['Tím sẫm', 'Nâu', 'Xanh lá', 'Đỏ tươi'], 1, 'Thân – màu nâu.'),
    Q('Tán lá cây thường tô màu?', ['Xanh lá', 'Đỏ rực', 'Vàng đậm', 'Đen sẫm'], 0, 'Lá – xanh lá (mùa hè).'),
    Q('Lá mùa thu thường có màu?', ['Tím than', 'Trắng tinh', 'Xanh lam', 'Vàng/cam/đỏ'], 3, 'Mùa thu lá ngả vàng/cam/đỏ.'),
    Q('Thân cây nên vẽ bằng đường?', ['Hai đường dọc song song / hơi cong', 'Chấm rời', 'Đường gãy vuông', 'Đường tròn nhỏ'], 0, 'Thân cây ~ hai đường dọc.'),
    Q('Cây thường được vẽ ở vị trí nào trong tranh?', ['Nằm ngang', 'Dưới nước', 'Đứng trên mặt đất', 'Lơ lửng trên trời'], 2, 'Cây mọc trên mặt đất.'),
  ]),

  M(12, 'Vẽ tự do: CON VẬT YÊU THÍCH', [
    Q('Khi vẽ con vật, nên bắt đầu từ?', ['Chi tiết nhỏ trước', 'Tô màu trước', 'Hình khối lớn (đầu, mình)', 'Vẽ nền trước'], 2, 'Vẽ khối lớn trước, chi tiết sau.'),
    Q('Con thỏ có đặc điểm dễ nhận biết?', ['Tai dài', 'Cổ rất dài', 'Vòi dài', 'Có sừng to'], 0, 'Thỏ tai dài.'),
    Q('Con voi có đặc điểm?', ['Mỏ vẹt', 'Tai dài, đuôi xù', 'Vòi dài, tai to', 'Bờm dày'], 2, 'Voi — vòi dài, tai to.'),
    Q('Lông mèo có thể gợi tả bằng?', ['Hình vuông', 'Đường thẳng cứng', 'Nét cong ngắn, mềm', 'Đường gãy vuông'], 2, 'Nét cong ngắn gợi lông mềm.'),
    Q('Để con vật trông sinh động, nên thêm?', ['Chỉ vẽ đầu', 'Không cần gì', 'Mắt, miệng, đuôi và môi trường xung quanh', 'Chỉ tô đen'], 2, 'Thêm chi tiết + môi trường cho sinh động.'),
    Q('Con cá vàng thường tô màu?', ['Tím sẫm', 'Đen tuyền', 'Vàng/cam', 'Xanh lam'], 2, 'Cá vàng — vàng/cam.'),
  ]),

  M(13, 'Vẽ chân dung GIA ĐÌNH', [
    Q('Tranh "gia đình" thường gồm?', ['Một mình em', 'Chỉ đồ vật', 'Chỉ con vật', 'Các thành viên trong nhà'], 3, 'Gia đình gồm nhiều thành viên.'),
    Q('Khuôn mặt người gồm các bộ phận?', ['Chỉ mắt', 'Mắt, mũi, miệng, tai', 'Chỉ miệng', 'Không có gì'], 1, 'Mặt có mắt, mũi, miệng, tai.'),
    Q('Để phân biệt bố – mẹ – em bé, ta vẽ?', ['Không khác gì', 'Cùng màu áo', 'Cùng kích thước', 'Khác kích thước, khác trang phục, kiểu tóc'], 3, 'Khác kích thước, trang phục giúp nhận ra.'),
    Q('Người lớn so với em bé thường vẽ?', ['Nhỏ hơn', 'Bằng nhau', 'To/cao hơn', 'Không cần khác biệt'], 2, 'Người lớn cao to hơn em bé.'),
    Q('Khi vẽ gia đình, biểu cảm khuôn mặt nên?', ['Buồn rầu', 'Cau có', 'Tươi vui, ấm áp', 'Không có biểu cảm'], 2, 'Gia đình vui — biểu cảm tươi.'),
    Q('Nên đặt gia đình ở khung cảnh nào?', ['Dưới nước sâu', 'Trong nhà / công viên / sân vườn', 'Lơ lửng giữa trời', 'Trên mây'], 1, 'Khung cảnh quen thuộc: nhà, công viên…'),
  ]),

  M(14, 'Vẽ trường học của em', [
    Q('Trường học của em thường có?', ['Chỉ bãi cỏ', 'Một phòng duy nhất', 'Lớp học, sân chơi, cột cờ', 'Chỉ cây cối'], 2, 'Trường có dãy lớp, sân, cột cờ.'),
    Q('Cột cờ ở trường thường có?', ['Cờ trắng', 'Lồng đèn', 'Lá cờ Tổ quốc', 'Không có gì'], 2, 'Cột cờ treo cờ Tổ quốc.'),
    Q('Sân trường giờ ra chơi nên vẽ?', ['Đầy ô tô', 'Vắng tanh', 'Các bạn chơi đùa', 'Tối om'], 2, 'Giờ ra chơi đông vui, các bạn chơi.'),
    Q('Dãy phòng học thường vẽ bằng?', ['Tam giác chồng nhau', 'Nhiều hình chữ nhật xếp cạnh, có cửa sổ', 'Chấm rời', 'Một hình tròn'], 1, 'Phòng học hình chữ nhật, có cửa sổ.'),
    Q('Để tranh trường học sinh động, em thêm?', ['Cây xanh, bồn hoa, các bạn học sinh', 'Bóng tối', 'Mưa to', 'Không thêm gì'], 0, 'Cây, hoa, các bạn — sinh động.'),
    Q('Áo đồng phục các bạn nên tô?', ['Đủ thứ màu loè loẹt', 'Cùng tông / theo trường mình', 'Không tô', 'Đen tuyền'], 1, 'Đồng phục thường cùng tông.'),
  ]),

  M(15, 'Trang trí đường viền (lặp họa tiết)', [
    Q('Trang trí đường viền là?', ['Không có quy tắc', 'Tô một màu', 'Vẽ tự do', 'Lặp một họa tiết theo dải dài'], 3, 'Đường viền — lặp họa tiết theo dải.'),
    Q('Nguyên tắc quan trọng của đường viền là?', ['Không có nguyên tắc', 'Lặp lại đều đặn', 'Mỗi chỗ khác nhau', 'Tô đen kịt'], 1, 'Họa tiết lặp lại đều.'),
    Q('Khoảng cách giữa các họa tiết trên đường viền nên?', ['Lung tung', 'Càng xa càng tốt', 'Càng gần càng tốt', 'Bằng nhau'], 3, 'Đều nhau — đẹp mắt.'),
    Q('Đường viền thường thấy trên?', ['Mép áo, mép khăn, viền đĩa', 'Mặt trời', 'Trong lòng đất', 'Trên đám mây'], 0, 'Trang trí ở mép áo, khăn, đĩa…'),
    Q('Một họa tiết hay dùng cho đường viền?', ['Cả ngôi nhà', 'Mặt người', 'Cả con voi', 'Hoa, lá, hình học nhỏ'], 3, 'Họa tiết nhỏ: hoa, lá, hình hình học.'),
    Q('Màu sắc đường viền nên?', ['Có quy luật, ăn ý với nền', 'Mỗi họa tiết một màu khác xa', 'Toàn trắng', 'Toàn đen'], 0, 'Màu có quy luật, hài hòa với nền.'),
  ]),

  M(16, 'Trang trí hình tròn (đối xứng)', [
    Q('Trang trí hình tròn thường theo nguyên tắc?', ['Lộn xộn', 'Một góc rỗng', 'Không quy tắc', 'Đối xứng qua tâm'], 3, 'Hình tròn — đối xứng qua tâm.'),
    Q('Họa tiết trung tâm hình tròn thường?', ['Lệch sang một bên', 'Nằm chính giữa', 'Sát mép vành tròn', 'Bên ngoài'], 1, 'Họa tiết chính ở chính giữa.'),
    Q('Đĩa, mâm trang trí dạng?', ['Tam giác', 'Hình vuông', 'Hình tròn', 'Hình thoi'], 2, 'Đĩa, mâm — hình tròn.'),
    Q('Khi chia hình tròn để trang trí thường chia thành?', ['1 phần', 'Phần to phần nhỏ tuỳ ý', 'Không cần chia', 'Các phần bằng nhau (4, 6, 8…)'], 3, 'Chia đều giúp đối xứng.'),
    Q('Họa tiết ở các phần đối xứng nên?', ['Giống nhau / phản chiếu', 'Khác hoàn toàn', 'Tô đen', 'Bỏ trống'], 0, 'Đối xứng — giống/phản chiếu.'),
    Q('Màu sắc trang trí hình tròn nên?', ['Không tô', 'Càng nhiều màu càng tốt', 'Một màu đen', 'Hài hòa, có nhóm chính-phụ'], 3, 'Hài hòa, có chính – phụ.'),
  ]),

  M(17, 'Trang trí hình vuông (đối xứng)', [
    Q('Hình vuông trang trí thường đối xứng?', ['Qua 2 đường chéo và 2 đường giữa', 'Không xác định', 'Chỉ qua 1 góc', 'Không có trục'], 0, 'Hình vuông có nhiều trục đối xứng.'),
    Q('Họa tiết góc của hình vuông thường?', ['4 góc giống nhau', 'Bỏ trống', 'Khác nhau hoàn toàn', 'Chỉ vẽ 1 góc'], 0, '4 góc giống nhau cho đối xứng.'),
    Q('Họa tiết chính trong hình vuông trang trí ở đâu?', ['Bên ngoài', 'Không có họa tiết chính', 'Một góc', 'Chính giữa'], 3, 'Họa tiết chính ở giữa.'),
    Q('Viên gạch hoa lát nền thường có dạng?', ['Bầu dục', 'Hình tròn', 'Hình vuông trang trí', 'Tam giác'], 2, 'Gạch lát thường hình vuông.'),
    Q('Để hình vuông trang trí đẹp, các họa tiết phụ nên?', ['To hơn họa tiết chính', 'Chen lấn họa tiết chính', 'Cùng kích thước với chính', 'Nhỏ hơn, làm nổi họa tiết chính'], 3, 'Phụ nhỏ hơn — làm nổi chính.'),
    Q('Màu nền và họa tiết nên?', ['Có độ đậm-nhạt khác nhau', 'Trắng cả', 'Đen cả', 'Cùng một màu'], 0, 'Tương phản đậm-nhạt giúp họa tiết nổi.'),
  ]),

  M(18, 'Triển lãm cuối HK1', [
    Q('Ba màu cơ bản là?', ['Đen, trắng, xám', 'Đỏ, vàng, xanh lam', 'Hồng, nâu, vàng', 'Tím, cam, lục'], 1, 'Ba màu cơ bản: đỏ – vàng – xanh lam.'),
    Q('Đỏ + Vàng pha ra màu?', ['Tím hoa cà', 'Nâu đất', 'Cam', 'Lục xanh lá'], 2, 'Đỏ + vàng = cam.'),
    Q('Đỏ + Xanh lam pha ra màu?', ['Lục (xanh lá)', 'Tím', 'Cam sáng', 'Vàng chanh'], 1, 'Đỏ + xanh lam = tím.'),
    Q('Vàng + Xanh lam pha ra?', ['Đỏ tươi', 'Tím sẫm', 'Cam sáng', 'Xanh lá'], 3, 'Vàng + xanh lam = xanh lá.'),
    Q('Đường lượn sóng tạo cảm giác?', ['Cứng cáp', 'Gãy gọn', 'Sắc nhọn', 'Mềm mại'], 3, 'Đường cong/lượn — mềm mại.'),
    Q('Hình có 3 cạnh là?', ['Chữ nhật', 'Tam giác', 'Hình tròn', 'Hình vuông'], 1, 'Tam giác — 3 cạnh.'),
    Q('Trang trí hình tròn theo nguyên tắc?', ['Một bên', 'Lộn xộn', 'Tự do, không theo trục', 'Đối xứng qua tâm'], 3, 'Trang trí hình tròn đối xứng qua tâm.'),
    Q('Nguyên tắc của đường viền là?', ['Tô đen kịt', 'Không có quy tắc', 'Lặp họa tiết đều', 'Vẽ mỗi chỗ một khác'], 2, 'Đường viền lặp họa tiết đều.'),
    Q('Để bức tranh có chiều sâu, sắc độ cần?', ['Có đậm – có nhạt', 'Chỉ nhạt', 'Chỉ đậm', 'Cùng một độ'], 0, 'Có đậm có nhạt mới rõ khối, sâu.'),
    Q('Màu đỏ thuộc nhóm màu?', ['Trung tính', 'Lạnh, dịu mát', 'Nóng', 'Không có nhóm'], 2, 'Đỏ — màu nóng.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Xé dán giấy: BÔNG HOA', [
    Q('Xé dán là kĩ thuật tạo hình bằng?', ['Xé giấy màu và dán lên nền', 'Nặn đất', 'Vẽ bút chì', 'Cắt bằng dao'], 0, 'Xé dán: xé giấy màu rồi dán.'),
    Q('Để xé hình bông hoa, ta nên?', ['Đốt giấy', 'Xé theo nét tay từng cánh', 'Vò nát', 'Cắt thẳng bằng kéo'], 1, 'Xé tay theo từng cánh hoa.'),
    Q('Cánh hoa thường có dạng?', ['Tam giác nhọn', 'Chữ nhật', 'Bầu dục/giọt nước', 'Hình vuông cứng'], 2, 'Cánh hoa thường bầu dục/giọt nước.'),
    Q('Nhụy hoa nằm ở vị trí?', ['Trên đầu cánh hoa', 'Chính giữa', 'Phía dưới gốc', 'Ngoài cùng'], 1, 'Nhụy nằm giữa.'),
    Q('Khi dán, dùng?', ['Mực vẽ tranh', 'Nước lã', 'Hồ/keo dán', 'Đất sét'], 2, 'Dùng hồ/keo dán.'),
    Q('Bông hoa nên xé bằng giấy màu?', ['Tươi sáng, nổi trên nền', 'Đen tuyền', 'Trong suốt', 'Trùng màu nền'], 0, 'Màu hoa nên nổi trên nền.'),
  ]),

  M(20, 'Xé dán giấy: LÁ CÂY', [
    Q('Lá cây có hình dáng chung là?', ['Bầu dục, có gân giữa', 'Tam giác nhọn cứng', 'Hình vuông đều cạnh', 'Tròn đều'], 0, 'Lá thường bầu dục, có gân giữa.'),
    Q('Lá non thường có màu?', ['Đen sẫm', 'Đỏ tươi', 'Vàng úa', 'Xanh non/xanh nhạt'], 3, 'Lá non — xanh non/xanh nhạt.'),
    Q('Lá già/lá mùa thu có màu?', ['Tím đậm', 'Vàng, cam, đỏ', 'Trắng nhạt', 'Xanh tươi'], 1, 'Lá già — vàng/cam/đỏ.'),
    Q('Để có cảm giác lá nhiều lớp, ta dán?', ['Không dán', 'Một lá duy nhất', 'Lá rời rạc xa nhau', 'Nhiều lá chồng nhẹ lên nhau'], 3, 'Chồng lớp tạo độ dày.'),
    Q('Gân giữa của lá có thể tạo bằng?', ['Cả miếng giấy lớn', 'Tô đen toàn lá', 'Không cần gân', 'Nét vẽ hoặc dải giấy mỏng'], 3, 'Gân giữa: nét vẽ hoặc dải giấy mỏng.'),
    Q('Mép lá xé tay cho cảm giác?', ['Trong suốt', 'Sắc lẹm', 'Nhân tạo, cứng', 'Tự nhiên, mộc mạc'], 3, 'Mép xé tay tự nhiên hơn cắt kéo.'),
  ]),

  M(21, 'Xé dán giấy: CON CÁ', [
    Q('Cá có thân hình?', ['Tam giác sắc', 'Tròn đều', 'Vuông vức', 'Bầu dục/thoi dài'], 3, 'Thân cá bầu dục/thoi.'),
    Q('Đuôi cá có dạng?', ['Tròn đều', 'Tam giác (chữ V)', 'Hình vuông', 'Hình tròn đặc'], 1, 'Đuôi cá hình chữ V/tam giác.'),
    Q('Vẩy cá có thể gợi tả bằng?', ['Đường thẳng dài', 'Một mảng đen lớn', 'Không thể tạo', 'Mảng giấy hình vảy/cung tròn nhỏ'], 3, 'Vảy ~ các hình cung nhỏ.'),
    Q('Nền nước biển nên dán bằng giấy màu?', ['Đen tuyền', 'Xanh lam', 'Đỏ tươi', 'Vàng cam'], 1, 'Nước biển — xanh lam.'),
    Q('Mắt cá thường được dán bằng?', ['Chấm tròn nhỏ', 'Một vệt thẳng', 'Hình vuông', 'Một miếng giấy to'], 0, 'Mắt cá ~ chấm tròn nhỏ.'),
    Q('Để có đàn cá, ta dán?', ['1 con duy nhất', 'Nhiều con, kích thước khác nhau', 'Không có cá nào', 'Tất cả y hệt nhau'], 1, 'Đàn cá – nhiều con khác cỡ.'),
  ]),

  M(22, '(Tết) Vẽ tranh chủ đề Tết', [
    Q('Hoa đặc trưng Tết miền Bắc là?', ['Hoa hướng dương', 'Hoa sen', 'Hoa cúc', 'Hoa đào'], 3, 'Miền Bắc — hoa đào.'),
    Q('Hoa đặc trưng Tết miền Nam là?', ['Hoa lan', 'Hoa mai vàng', 'Hoa đào', 'Hoa hồng'], 1, 'Miền Nam — hoa mai vàng.'),
    Q('Bánh truyền thống ngày Tết là?', ['Bánh kem', 'Bánh mì', 'Bánh quy', 'Bánh chưng / bánh tét'], 3, 'Bánh chưng (Bắc), bánh tét (Nam).'),
    Q('Màu chủ đạo của Tết thường là?', ['Đen – trắng', 'Tím – xám', 'Xanh đậm', 'Đỏ – vàng'], 3, 'Tết — đỏ và vàng.'),
    Q('Hoa đào có màu?', ['Tím hoa cà', 'Hồng', 'Vàng tươi', 'Xanh lá cây'], 1, 'Hoa đào — hồng.'),
    Q('Hoa mai có màu?', ['Đỏ tươi', 'Vàng', 'Tím sẫm', 'Hồng phấn'], 1, 'Hoa mai — vàng.'),
    Q('Phong bao lì xì truyền thống thường màu?', ['Đen sẫm', 'Trắng tinh', 'Đỏ', 'Xanh lam'], 2, 'Phong bao lì xì thường đỏ.'),
    Q('Trong tranh Tết nên có?', ['Cảnh u tối', 'Cảnh chiến tranh', 'Sa mạc', 'Gia đình sum vầy, bánh, hoa'], 3, 'Tranh Tết — sum vầy, bánh, hoa.'),
  ]),

  M(23, 'Tranh dân gian: con GÀ Đông Hồ', [
    Q('Tranh Đông Hồ là dòng tranh dân gian của tỉnh nào?', ['Bắc Ninh', 'Thừa Thiên Huế', 'Đồng Nai', 'Hà Nội'], 0, 'Tranh Đông Hồ — Bắc Ninh.'),
    Q('Tranh "Gà" Đông Hồ thường tượng trưng cho?', ['Buồn rầu', 'Học hành', 'Chiến tranh', 'Thịnh vượng, sung túc'], 3, 'Gà — biểu tượng thịnh vượng.'),
    Q('Tranh "Gà mẹ con" có ý nghĩa?', ['Cuộc sống xa quê', 'Cô đơn', 'Gia đình đầm ấm, đông con cháu', 'Học giỏi'], 2, 'Gà mẹ con — gia đình đông đúc, ấm no.'),
    Q('Tranh Đông Hồ in trên giấy gì?', ['Giấy A4 trắng', 'Giấy bóng kính', 'Giấy điệp (giấy có quét vỏ sò)', 'Giấy báo'], 2, 'In trên giấy điệp.'),
    Q('Màu sắc tranh Đông Hồ thường?', ['Đen trắng', 'Tươi, từ nguyên liệu tự nhiên', 'Trong suốt', 'Tối, u ám'], 1, 'Màu tươi, lấy từ tự nhiên.'),
    Q('Tranh Đông Hồ làm bằng kĩ thuật?', ['Vẽ tay từng bức', 'Photocopy', 'Chụp ảnh', 'Khắc ván gỗ rồi in'], 3, 'Khắc ván gỗ rồi in lên giấy.'),
  ]),

  M(24, 'Tranh dân gian: ĐÁM CƯỚI CHUỘT', [
    Q('"Đám cưới chuột" là tranh dân gian dòng?', ['Tranh lụa Hà Nội', 'Đông Hồ', 'Hàng Trống', 'Sơn mài'], 1, 'Đám cưới chuột — tranh Đông Hồ.'),
    Q('Nội dung tranh kể về?', ['Chợ phiên', 'Đám hội mùa xuân', 'Hội làng', 'Đám cưới của loài chuột'], 3, 'Tranh kể đoàn rước đám cưới của chuột.'),
    Q('Trong tranh, ngoài chuột còn có?', ['Con voi', 'Con bò', 'Con voi và lạc đà', 'Con mèo (nhận lễ vật)'], 3, 'Đoàn chuột phải dâng lễ cho mèo.'),
    Q('Tranh "Đám cưới chuột" mang tinh thần?', ['Buồn bã, đau khổ', 'Trầm lặng', 'Hài hước, phê phán nhẹ nhàng', 'Sợ hãi'], 2, 'Hài hước, châm biếm nhẹ nhàng.'),
    Q('Các nhân vật trong tranh thường được vẽ?', ['Theo hàng/đoàn diễu hành', 'Lộn xộn', 'Chỉ một con', 'Theo phối cảnh xa-gần'], 0, 'Xếp thành đoàn rước.'),
    Q('Màu sắc của tranh có đặc điểm?', ['Trầm buồn, ít màu sắc', 'Toàn đen trắng', 'Trong suốt', 'Tươi, đỏ – vàng – xanh nổi bật'], 3, 'Màu tươi đặc trưng Đông Hồ.'),
  ]),

  M(25, 'Tranh dân gian: LỢN ăn cây ráy', [
    Q('Tranh "Lợn ăn cây ráy" là tranh dòng?', ['Đông Hồ', 'Tranh lụa Hà Nội', 'Hàng Trống', 'Sơn dầu'], 0, 'Tranh Đông Hồ — Bắc Ninh.'),
    Q('Con lợn trong tranh tượng trưng cho?', ['Lười biếng', 'Nghèo đói', 'Sung túc, no đủ', 'Buồn rầu'], 2, 'Lợn — sung túc, no ấm.'),
    Q('Trên lưng lợn có vẽ?', ['Sao vàng', 'Xoáy âm-dương', 'Hoa hồng', 'Chữ số'], 1, 'Xoáy âm-dương đặc trưng tranh Đông Hồ.'),
    Q('Người dân treo tranh lợn vào dịp?', ['Tết Nguyên Đán', 'Tết Trung Thu', 'Sinh nhật', 'Giao thừa duy nhất'], 0, 'Treo tranh Tết Nguyên Đán cầu sung túc.'),
    Q('Tranh dân gian Đông Hồ thường có ý nghĩa?', ['Cầu chúc may mắn, no ấm', 'Quân sự', 'Thể thao', 'Khoa học kỹ thuật'], 0, 'Tranh chúc tụng, cầu may.'),
    Q('Cây ráy trong tranh là loại?', ['Cây hoa', 'Cây thức ăn cho lợn', 'Cây ăn quả', 'Cây cảnh trong nhà'], 1, 'Ráy là cây làm thức ăn cho lợn.'),
  ]),

  M(26, 'Vẽ phong cảnh: MÙA XUÂN', [
    Q('Mùa xuân ở Việt Nam có đặc trưng?', ['Nắng gắt', 'Lá vàng rụng', 'Hoa đào, hoa mai nở, cây đâm chồi', 'Tuyết rơi'], 2, 'Xuân — hoa nở, cây đâm chồi.'),
    Q('Bầu trời mùa xuân thường?', ['Trong xanh, có mây trắng', 'Tối đen', 'Vàng rực', 'Đầy bão'], 0, 'Trời xuân trong xanh.'),
    Q('Màu chủ đạo tranh mùa xuân?', ['Đen tuyền', 'Xanh lá non, hồng, vàng', 'Đen – nâu', 'Xám u ám'], 1, 'Xuân — xanh non, hồng, vàng.'),
    Q('Chim én bay về báo hiệu?', ['Mùa hạ', 'Mùa đông', 'Mùa thu', 'Mùa xuân'], 3, 'Én về báo xuân.'),
    Q('Cây cối mùa xuân nên vẽ?', ['Trắng tuyết', 'Khô trụi', 'Lá non, có chồi và hoa', 'Lá vàng rụng'], 2, 'Cây xuân đâm chồi, nảy lộc.'),
    Q('Trang phục người trong tranh xuân thường?', ['Áo dài, áo mới, nhiều màu', 'Đồ tắm biển', 'Áo bông dày', 'Áo mưa'], 0, 'Xuân — áo mới, áo dài.'),
  ]),

  M(27, 'Vẽ phong cảnh: BÃI BIỂN', [
    Q('Bãi biển có những yếu tố chính?', ['Cát, nước biển, sóng, trời', 'Núi, tuyết, băng', 'Đường, nhà, ô tô', 'Ruộng và trâu'], 0, 'Biển: cát, nước, sóng, trời.'),
    Q('Cát biển thường tô màu?', ['Tím nhạt', 'Đỏ tươi', 'Vàng nhạt/be', 'Đen xám'], 2, 'Cát — vàng nhạt/be.'),
    Q('Sóng biển vẽ bằng đường?', ['Thẳng đứng', 'Chấm rời', 'Lượn sóng (cong)', 'Gãy vuông'], 2, 'Sóng — đường cong/lượn.'),
    Q('Hai màu xanh thường thấy ở biển là?', ['Đỏ và vàng', 'Đen và xám', 'Tím và hồng', 'Xanh lam và xanh lục'], 3, 'Biển thường xanh lam pha xanh lục.'),
    Q('Trên bãi biển hay có?', ['Cây thông trắng', 'Vỏ ốc, dù, ghế tắm nắng', 'Lò sưởi', 'Tuyết phủ trắng'], 1, 'Biển — vỏ ốc, dù, ghế.'),
    Q('Đường chân trời ngoài biển là đường?', ['Cong xuống', 'Thẳng ngang', 'Gãy khúc', 'Đường tròn khép kín'], 1, 'Chân trời — đường ngang.'),
  ]),

  M(28, 'Vẽ phong cảnh: ĐỒNG QUÊ – RUỘNG LÚA', [
    Q('Đồng quê Việt Nam thường có?', ['Núi tuyết', 'Cánh đồng lúa, lũy tre, con trâu', 'Cao ốc, ô tô', 'Sa mạc'], 1, 'Đồng quê: lúa, tre, trâu.'),
    Q('Cánh đồng lúa chín có màu?', ['Đỏ tươi', 'Xanh lam', 'Vàng óng', 'Trắng bạc'], 2, 'Lúa chín — vàng óng.'),
    Q('Cánh đồng lúa non có màu?', ['Xanh non', 'Đỏ rực', 'Tím sẫm', 'Vàng óng'], 0, 'Lúa non — xanh non.'),
    Q('Con vật gắn liền nhà nông Việt Nam là?', ['Lạc đà', 'Con trâu', 'Sư tử dũng mãnh', 'Hươu cao cổ'], 1, 'Con trâu gắn với nhà nông.'),
    Q('Lũy tre làng vẽ bằng đường?', ['Đường tròn xoắn', 'Thẳng nhưng cao, hơi cong ở ngọn', 'Gãy vuông', 'Thẳng tắp ngắn'], 1, 'Tre cao, ngọn hơi cong.'),
    Q('Phía xa của ruộng nên tô?', ['Nhạt hơn phía gần', 'Đen tuyền', 'Y hệt phía gần', 'Đậm hơn phía gần'], 0, 'Xa nhạt — gần đậm.'),
  ]),

  M(29, 'Nặn đất sét: QUẢ', [
    Q('Đất nặn cần được?', ['Cho vào nước nóng', 'Đem phơi nắng to', 'Để khô cứng rồi nặn', 'Bóp mềm trước khi nặn'], 3, 'Bóp mềm cho dẻo trước khi nặn.'),
    Q('Để nặn quả cam, ta tạo hình?', ['Hình cầu (tròn)', 'Tam giác', 'Hình vuông', 'Hình thoi'], 0, 'Quả cam — hình cầu.'),
    Q('Quả chuối có dạng?', ['Tròn dẹt', 'Khối vuông đều cạnh', 'Hình cầu', 'Cong dài'], 3, 'Chuối — cong dài.'),
    Q('Quả táo khác quả cam ở chỗ?', ['Không có cuống', 'Có cuống và lõm trên đỉnh', 'Vuông vức', 'Cùng hình hoàn toàn'], 1, 'Táo có cuống và lõm trên đỉnh.'),
    Q('Để tạo cuống, lá cho quả, ta?', ['Nặn thêm sợi/mảnh đất, gắn vào', 'Dán giấy', 'Vẽ bằng bút', 'Không cần làm'], 0, 'Nặn sợi/mảnh và gắn vào.'),
    Q('Khi nặn xong, để giữ hình, ta?', ['Cho vào nước', 'Bóp lại', 'Đặt nhẹ nhàng nơi khô ráo', 'Ném đi'], 2, 'Đặt nhẹ nhàng nơi khô.'),
  ]),

  M(30, 'Nặn đất sét: CON VẬT', [
    Q('Khi nặn con vật, bắt đầu từ?', ['Tô màu', 'Khối lớn: đầu, mình', 'Chi tiết nhỏ', 'Mắt và mũi nhỏ'], 1, 'Khối lớn trước, chi tiết sau.'),
    Q('Nặn con thỏ, đặc điểm nổi bật là?', ['Hai tai dài', 'Sừng to', 'Vòi dài', 'Bờm rậm'], 0, 'Thỏ — tai dài.'),
    Q('Nặn con voi, không thể thiếu?', ['Sừng cong dài', 'Vòi và tai to', 'Vây và đuôi cá', 'Đôi cánh rộng'], 1, 'Voi — vòi dài, tai to.'),
    Q('Để gắn chân vào thân, ta?', ['Để rời ra', 'Buộc dây', 'Ấn nhẹ và miết mép tiếp giáp', 'Dán giấy'], 2, 'Miết mép cho dính chắc.'),
    Q('Bề mặt lông gợi tả bằng?', ['Tô màu đen', 'Đổ nước lên', 'Cạo nhẵn bóng', 'Khía nhẹ bằng que/đầu nhọn'], 3, 'Khía nhẹ tạo hiệu ứng lông.'),
    Q('Hai mắt con vật có thể là?', ['Hai khối vuông', 'Không cần mắt', 'Hai viên đất nhỏ tròn', 'Tam giác lớn'], 2, 'Hai viên đất nhỏ làm mắt.'),
  ]),

  M(31, 'Nặn đất sét: ĐỒ VẬT', [
    Q('Nặn cái cốc, ta tạo khối?', ['Hình cầu', 'Hình thoi', 'Hình trụ rỗng', 'Tam giác'], 2, 'Cốc — khối trụ rỗng.'),
    Q('Nặn cái đĩa, ta tạo?', ['Hình cầu kín', 'Hình tròn dẹt, hơi lõm giữa', 'Hình vuông cao', 'Tam giác'], 1, 'Đĩa — tròn dẹt, lõm.'),
    Q('Quai cốc nên?', ['Để rời', 'Liền khối với cốc', 'Nặn riêng rồi gắn vào', 'Cắt từ giấy'], 2, 'Quai nặn riêng rồi gắn.'),
    Q('Để tạo lỗ rỗng trong cốc, ta?', ['Khoét bằng kéo', 'Ấn ngón cái xuống giữa khối', 'Phơi nắng', 'Cho nước vào'], 1, 'Ấn ngón cái tạo lỗ.'),
    Q('Để đồ vật phẳng đáy, đứng vững, ta?', ['Vê tròn', 'Cắt vát', 'Vỗ nhẹ phần đáy cho bằng phẳng', 'Đặt nghiêng'], 2, 'Vỗ đáy phẳng cho đứng vững.'),
    Q('Trang trí cốc/đĩa có thể bằng?', ['Đập vỡ', 'Khía hoạ tiết hoặc gắn miếng đất khác màu', 'Không trang trí', 'Đổ keo lên'], 1, 'Khía hoặc gắn họa tiết khác màu.'),
  ]),

  M(32, 'Vẽ chủ đề: NGÀY 8/3 – MẸ VÀ CÔ GIÁO', [
    Q('Ngày 8/3 là ngày?', ['Quốc khánh', 'Tết Thiếu nhi', 'Nhà giáo Việt Nam', 'Quốc tế Phụ nữ'], 3, '8/3 — Quốc tế Phụ nữ.'),
    Q('Quà tặng phổ biến ngày 8/3 là?', ['Bó hoa, thiệp', 'Đèn lồng', 'Pháo nổ', 'Bánh chưng'], 0, 'Hoa và thiệp là quà phổ biến.'),
    Q('Tranh 8/3 nên thể hiện?', ['Đánh nhau', 'Sa mạc', 'Núi lửa', 'Tình cảm với mẹ, cô giáo, bà'], 3, 'Thể hiện tình cảm với phụ nữ thân yêu.'),
    Q('Màu sắc tranh ngày 8/3 thường?', ['Trầm buồn, ảm đạm', 'Xám lạnh', 'Đen tuyền', 'Tươi sáng, ấm áp'], 3, 'Tươi sáng, ấm áp.'),
    Q('Loài hoa hay được vẽ tặng mẹ?', ['Hoa hồng, hoa cúc, hoa hướng dương', 'Cây xương rồng', 'Cỏ dại', 'Không có hoa'], 0, 'Hoa hồng, cúc, hướng dương…'),
    Q('Hành động trong tranh có thể là?', ['Ngủ vùi', 'Tặng hoa, ôm mẹ, làm việc nhà giúp mẹ', 'Đánh nhau', 'Phá đồ'], 1, 'Tặng hoa, ôm, giúp việc nhà.'),
  ]),

  M(33, 'Vẽ chủ đề: 30/4 – LÁ CỜ HOÀ BÌNH', [
    Q('Ngày 30/4 là ngày?', ['Quốc khánh', 'Giải phóng miền Nam, thống nhất đất nước', 'Nhà giáo', 'Quốc tế Lao động'], 1, '30/4 — Giải phóng miền Nam, thống nhất.'),
    Q('Lá cờ Tổ quốc Việt Nam có?', ['Nền xanh – sao đỏ', 'Nền đỏ – sao vàng năm cánh ở giữa', 'Nền trắng – chữ thập đỏ', 'Ba sọc'], 1, 'Cờ đỏ sao vàng năm cánh.'),
    Q('Ngôi sao trên cờ có mấy cánh?', ['3', '5', '6', '4'], 1, 'Sao 5 cánh.'),
    Q('Khi vẽ ngôi sao trên cờ, cánh sao thường?', ['Một cánh hướng xuống', 'Không có quy chuẩn', 'Lệch nghiêng', 'Một cánh hướng thẳng lên'], 3, 'Theo quy chuẩn, một cánh hướng lên.'),
    Q('Tranh 30/4 thường có hình ảnh?', ['Cờ Tổ quốc, chim bồ câu, người dân vui mừng', 'Khủng long', 'Lò sưởi', 'Sa mạc'], 0, 'Cờ, bồ câu, niềm vui sum họp.'),
    Q('Chim bồ câu trắng biểu tượng cho?', ['Đói nghèo', 'Hoà bình', 'Mùa đông', 'Chiến tranh'], 1, 'Bồ câu trắng — hoà bình.'),
  ]),

  M(34, 'Vẽ chủ đề: NGÀY HÈ', [
    Q('Mùa hè có đặc trưng?', ['Tuyết rơi', 'Lá vàng rụng', 'Nắng chói chang, ve kêu, hoa phượng đỏ', 'Sương muối'], 2, 'Hè — nắng, ve, hoa phượng đỏ.'),
    Q('Hoa phượng nở mùa hè có màu?', ['Đỏ rực', 'Vàng tươi', 'Tím nhạt', 'Trắng muốt'], 0, 'Hoa phượng — đỏ rực.'),
    Q('Hoạt động phổ biến của trẻ em ngày hè?', ['Học thi cuối kỳ', 'Đi cấy lúa Tết', 'Đi xem pháo hoa Giao thừa', 'Đi tắm biển, thả diều, đọc sách'], 3, 'Hè — đi biển, thả diều, đọc sách.'),
    Q('Bầu trời mùa hè trong tranh thường?', ['Đen kịt', 'Xanh trong, nắng vàng', 'Trắng phau', 'Xám tối'], 1, 'Hè trời xanh, nắng vàng.'),
    Q('Cây cối mùa hè?', ['Trụi lá', 'Xanh um, tỏa bóng mát', 'Khô cằn', 'Trắng tuyết'], 1, 'Cây xanh, tỏa bóng mát.'),
    Q('Trang phục mùa hè?', ['Áo phông, quần ngắn, mũ nón', 'Áo bông dày', 'Áo len', 'Áo mưa'], 0, 'Áo phông, quần ngắn, mũ.'),
  ]),

  M(35, 'Tổng hợp – em là họa sĩ', [
    Q('Để bố cục tranh đẹp, hình chính nên?', ['Nhỏ tí xíu ở góc', 'Trùng màu nền', 'Bị che kín', 'To, ở vị trí nổi bật'], 3, 'Hình chính to, nổi bật.'),
    Q('Hình phụ trong tranh có vai trò?', ['Không có vai trò', 'Quan trọng hơn hình chính', 'Phá hình chính', 'Hỗ trợ, làm rõ hình chính'], 3, 'Phụ tôn chính.'),
    Q('Tỉ lệ giữa các vật trong tranh nên?', ['Theo thực tế (người to – kiến nhỏ…)', 'Đảo ngược (kiến to hơn voi)', 'Ai cũng bằng nhau', 'Tuỳ ý không quy luật'], 0, 'Theo tỉ lệ thực tế.'),
    Q('Khi tô màu, tránh?', ['Phối nhiều màu hài hòa', 'Tô lem ra ngoài và toàn cùng một độ đậm', 'Đường viền rõ', 'Có đậm – có nhạt'], 1, 'Tránh lem ra ngoài, tránh đơn điệu.'),
    Q('Muốn tranh có chiều sâu, ta dùng?', ['Vật xa nhỏ – nhạt, vật gần to – đậm', 'Đen tuyền', 'Cùng kích cỡ vật xa-gần', 'Đảo ngược'], 0, 'Xa nhỏ-nhạt, gần to-đậm.'),
    Q('Sau khi vẽ xong, ta nên?', ['Tô đen tất cả', 'Đem bỏ', 'Vò nát', 'Xem lại, chỉnh sửa, đặt tên tranh'], 3, 'Xem lại, chỉnh sửa, đặt tên.'),
  ]),

  M(36, 'Triển lãm cuối năm', [
    Q('Ba màu cơ bản là?', ['Hồng – nâu – be', 'Cam – tím – lục', 'Đen – trắng – xám', 'Đỏ – vàng – xanh lam'], 3, 'Ba màu cơ bản: đỏ – vàng – xanh lam.'),
    Q('Đỏ + Xanh lam = ?', ['Lục (xanh lá)', 'Tím', 'Cam sáng', 'Nâu đất'], 1, 'Đỏ + xanh lam = tím.'),
    Q('Vàng + Xanh lam = ?', ['Cam sáng', 'Xanh lá', 'Đỏ tươi', 'Tím sẫm'], 1, 'Vàng + xanh lam = xanh lá.'),
    Q('Tranh dân gian Đông Hồ ở tỉnh?', ['Bắc Giang', 'Bắc Ninh', 'Hải Phòng', 'Hà Nội'], 1, 'Đông Hồ — Bắc Ninh.'),
    Q('Tranh "Đám cưới chuột" thuộc dòng?', ['Đông Hồ', 'Sơn mài', 'Hàng Trống', 'Tranh lụa Hà Nội'], 0, 'Tranh Đông Hồ.'),
    Q('Con lợn xoáy âm-dương trong tranh Đông Hồ tượng trưng?', ['Buồn rầu', 'Chiến tranh', 'Học hành đỗ đạt', 'Sung túc, no đủ'], 3, 'Lợn — sung túc, no đủ.'),
    Q('Trang trí hình vuông có mấy trục đối xứng (thường dùng)?', ['1', '2', 'Không có trục', '4 (2 chéo + 2 giữa)'], 3, 'Hình vuông có nhiều trục — thường 4 trục.'),
    Q('Đường viền sử dụng nguyên tắc?', ['Lặp lại họa tiết đều', 'Cắt rời', 'Lộn xộn', 'Tô đen'], 0, 'Lặp lại đều.'),
    Q('Hoa Tết miền Bắc là?', ['Sen hồng', 'Mai vàng', 'Đào hồng', 'Cúc trắng'], 2, 'Miền Bắc — hoa đào.'),
    Q('Cờ Tổ quốc Việt Nam — sao vàng trên nền?', ['Vàng tươi', 'Đỏ', 'Trắng tinh', 'Xanh lam'], 1, 'Cờ đỏ — sao vàng.'),
  ], { difficulty: 3 }),
];

export const P2MT_SCENARIOS = indexBy(P2MT_WEEKS);
