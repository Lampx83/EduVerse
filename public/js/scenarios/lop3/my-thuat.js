// ============================================================
// Lớp 3 · MĨ THUẬT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Mĩ thuật Lớp 3.
// ID prefix: "P3MT-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3MT', 'my-thuat', n, title, qs, opts);

export const P3MT_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Màu sắc cơ bản và bánh xe màu', [
    Q('Ba màu cơ bản trong hội hoạ là?', ['Đỏ – Vàng – Lam', 'Cam – Lục – Tím', 'Đen – Trắng – Xám', 'Hồng – Nâu – Be'], 0, 'Ba màu cơ bản: Đỏ, Vàng, Lam (Lam = Xanh dương).'),
    Q('Pha Đỏ + Vàng tạo ra màu?', ['Cam', 'Tím', 'Lục', 'Nâu'], 0, 'Đỏ + Vàng = Cam.'),
    Q('Pha Vàng + Lam tạo ra màu?', ['Lục (Xanh lá)', 'Cam', 'Tím', 'Hồng'], 0, 'Vàng + Lam = Xanh lá.'),
    Q('Pha Đỏ + Lam tạo ra màu?', ['Tím', 'Cam', 'Lục', 'Vàng'], 0, 'Đỏ + Lam = Tím.'),
    Q('Bánh xe màu giúp em?', ['Hiểu cách phối màu và quan hệ giữa các màu', 'Trang trí xe đạp', 'Chơi vòng quay', 'Không có tác dụng'], 0, 'Bánh xe màu là công cụ học phối màu.'),
  ]),

  M(2, 'Màu nóng – màu lạnh (1)', [
    Q('Nhóm màu nóng gồm?', ['Đỏ, Cam, Vàng', 'Lam, Lục, Tím', 'Đen, Trắng, Xám', 'Nâu, Be, Hồng nhạt'], 0, 'Đỏ, Cam, Vàng là nhóm màu nóng.'),
    Q('Nhóm màu lạnh gồm?', ['Lam, Lục, Tím', 'Đỏ, Cam, Vàng', 'Đen, Trắng', 'Nâu, Be'], 0, 'Lam, Lục, Tím là nhóm màu lạnh.'),
    Q('Màu nóng gợi cảm giác?', ['Ấm áp, sôi động như lửa, mặt trời', 'Lạnh lẽo', 'Buồn bã', 'Tĩnh lặng'], 0, 'Màu nóng gợi sự ấm áp.'),
    Q('Tranh vẽ mặt trời, lửa, ngày hội nên dùng?', ['Màu nóng là chính', 'Toàn màu lạnh', 'Chỉ đen trắng', 'Toàn xám'], 0, 'Đề tài nóng thì dùng tông nóng.'),
    Q('Vẽ một bức tranh hoàng hôn, em nên dùng?', ['Đỏ – cam – vàng làm chủ đạo', 'Xanh lam là chính', 'Chỉ màu đen', 'Toàn xám trắng'], 0, 'Hoàng hôn rực rỡ tông nóng.'),
  ]),

  M(3, 'Màu nóng – màu lạnh (2)', [
    Q('Màu lạnh gợi cảm giác?', ['Mát mẻ, yên tĩnh như nước, bầu trời', 'Nóng bức', 'Sôi động', 'Cháy bỏng'], 0, 'Màu lạnh gợi mát mẻ, yên tĩnh.'),
    Q('Vẽ cảnh biển, em nên dùng?', ['Xanh lam, xanh lá làm chủ đạo', 'Toàn đỏ', 'Cam vàng nóng', 'Đen tối'], 0, 'Biển dùng tông lạnh.'),
    Q('Trong cùng bức tranh, kết hợp màu nóng và lạnh tạo?', ['Sự tương phản hấp dẫn', 'Tranh xấu', 'Tranh buồn', 'Không có hiệu ứng'], 0, 'Tương phản nóng–lạnh tạo điểm nhấn.'),
    Q('Màu trắng và đen thuộc nhóm nào?', ['Không thuộc nhóm nóng hay lạnh — là màu trung tính', 'Nóng', 'Lạnh', 'Cả hai'], 0, 'Đen, trắng là màu trung tính.'),
    Q('Bạn vẽ cảnh mùa đông nên dùng?', ['Tông lạnh: lam, trắng, xám', 'Tông nóng: đỏ, cam', 'Chỉ vàng', 'Đen tuyền'], 0, 'Mùa đông tông lạnh.'),
  ]),

  M(4, 'Đậm – nhạt', [
    Q('Đậm – nhạt trong tranh nghĩa là?', ['Mức độ sáng tối khác nhau của màu sắc', 'Lớn nhỏ', 'Xa gần', 'Mỏng dày'], 0, 'Đậm nhạt = mức sáng tối của màu.'),
    Q('Để tạo độ đậm hơn, em có thể?', ['Pha thêm màu đen hoặc tô đè nhiều lớp', 'Pha thêm trắng', 'Tô ít hơn', 'Để trống'], 0, 'Thêm đen hoặc tô đậm tay tạo độ đậm.'),
    Q('Để tạo độ nhạt, em có thể?', ['Pha thêm trắng hoặc tô nhẹ tay', 'Pha thêm đen', 'Tô đậm hơn', 'Vẽ to ra'], 0, 'Thêm trắng làm nhạt màu.'),
    Q('Trong tranh có 3 mức độ đậm nhạt là?', ['Đậm – vừa – nhạt', 'To – vừa – nhỏ', 'Cao – thấp – ngang', 'Đỏ – vàng – xanh'], 0, '3 mức cơ bản: đậm, vừa, nhạt.'),
    Q('Đậm nhạt giúp bức tranh?', ['Có chiều sâu, sống động hơn', 'Phẳng lì', 'Khó nhìn', 'Buồn hơn'], 0, 'Đậm nhạt tạo chiều sâu.'),
  ]),

  M(5, 'Vẽ trang trí — Hình vuông cơ bản', [
    Q('Trang trí hình vuông thường có?', ['Một hoạ tiết trung tâm và các hoạ tiết phụ ở 4 góc', 'Vẽ lung tung', 'Để trống', 'Tô một màu duy nhất'], 0, 'Bố cục đối xứng quanh trung tâm.'),
    Q('Hoạ tiết thường dùng trang trí hình vuông là?', ['Hoa lá, hình kỉ hà', 'Khuôn mặt người', 'Cảnh chiến tranh', 'Hình vẽ phức tạp'], 0, 'Hoa lá, hình kỉ hà phù hợp trang trí.'),
    Q('Khi tô màu trang trí hình vuông, em nên?', ['Chọn vài màu hài hoà, lặp lại có quy luật', 'Mỗi ô một màu lung tung', 'Tô đen hết', 'Để trống'], 0, 'Phối màu hài hoà, lặp lại tạo nhịp điệu.'),
    Q('Trang trí đối xứng nghĩa là?', ['Các hoạ tiết hai bên giống nhau qua trục', 'Mỗi bên khác hẳn', 'Vẽ tuỳ ý', 'Chỉ vẽ một bên'], 0, 'Đối xứng = giống nhau qua trục.'),
    Q('Trang trí hình vuông ứng dụng vào?', ['Khăn trải bàn, gạch lát, bao bì, áo dệt thổ cẩm…', 'Không ứng dụng được', 'Chỉ để chơi', 'Tự xé bỏ'], 0, 'Có nhiều ứng dụng thực tế.'),
  ]),

  M(6, 'Vẽ theo trí nhớ', [
    Q('Vẽ theo trí nhớ là?', ['Vẽ lại hình ảnh đã thấy mà không có mẫu trước mặt', 'Vẽ theo mẫu thật', 'Vẽ chép tranh', 'Vẽ ngẫu nhiên'], 0, 'Vẽ trí nhớ: tái hiện hình ảnh đã thấy.'),
    Q('Để vẽ trí nhớ tốt, em cần?', ['Quan sát kĩ vật trước khi vẽ', 'Nhắm mắt lại', 'Hỏi bạn cho biết', 'Đoán bừa'], 0, 'Quan sát kĩ là nền tảng.'),
    Q('Vẽ trí nhớ giúp em?', ['Rèn khả năng quan sát và ghi nhớ', 'Học toán', 'Đá bóng giỏi', 'Đọc nhanh'], 0, 'Phát triển óc quan sát và trí nhớ.'),
    Q('Khi vẽ trí nhớ, em nên?', ['Vẽ những nét chính trước, chi tiết sau', 'Vẽ chi tiết nhỏ nhất trước', 'Vẽ ngẫu nhiên', 'Tô màu trước'], 0, 'Đại thể trước, chi tiết sau.'),
    Q('Sau khi vẽ trí nhớ xong, em nên?', ['So sánh với vật thật để rút kinh nghiệm', 'Xé bỏ', 'Khoe bạn', 'Cất ngay không xem'], 0, 'So sánh để rút kinh nghiệm.'),
  ]),

  M(7, 'Vẽ phong cảnh đơn giản', [
    Q('Tranh phong cảnh là tranh vẽ?', ['Cảnh thiên nhiên, làng quê, phố phường…', 'Khuôn mặt người', 'Đồ vật tĩnh', 'Cảnh chiến tranh'], 0, 'Phong cảnh = cảnh thiên nhiên, nơi chốn.'),
    Q('Bố cục tranh phong cảnh thường có?', ['Tiền cảnh, trung cảnh, hậu cảnh', 'Chỉ một lớp duy nhất', 'Chỉ trung tâm', 'Chỉ góc trên'], 0, 'Ba lớp tạo chiều sâu cho tranh phong cảnh.'),
    Q('Vật ở GẦN em vẽ thế nào?', ['To rõ, chi tiết, màu đậm', 'Nhỏ mờ', 'Không vẽ', 'Tô trắng'], 0, 'Vật gần to và rõ hơn.'),
    Q('Vật ở XA em vẽ thế nào?', ['Nhỏ, mờ, màu nhạt hơn', 'To rõ ràng', 'Chi tiết hơn vật gần', 'Tô đen đậm'], 0, 'Vật xa thì nhỏ và mờ.'),
    Q('Đường chân trời trong tranh phong cảnh là?', ['Đường ranh giới giữa trời và đất (hoặc biển)', 'Đường chéo từ góc', 'Đường thẳng đứng', 'Không có'], 0, 'Đường chân trời phân chia trời – đất.'),
  ]),

  M(8, 'In mộc bản đơn giản', [
    Q('In mộc bản là?', ['Khắc hình trên gỗ rồi in lên giấy', 'Vẽ trực tiếp lên giấy', 'Cắt giấy dán', 'Chụp ảnh'], 0, 'Mộc bản = khắc gỗ rồi in.'),
    Q('Tranh dân gian Việt Nam in mộc bản nổi tiếng có?', ['Tranh Đông Hồ, tranh Hàng Trống', 'Tranh sơn dầu', 'Tranh acrylic', 'Tranh thuỷ mặc'], 0, 'Đông Hồ, Hàng Trống là tranh dân gian in mộc bản.'),
    Q('Trong lớp, em có thể làm "in" đơn giản bằng?', ['In bằng củ khoai, lá cây, đế chai có sẵn hình', 'Khắc gỗ thật', 'Dùng máy in', 'Vẽ tay'], 0, 'Vật liệu sẵn có cho thực hành đơn giản.'),
    Q('Trước khi in, em cần?', ['Tô màu lên bề mặt khắc/hình rồi áp lên giấy', 'Bỏ qua bước này', 'Chỉ áp khô', 'Đổ nước'], 0, 'Tô màu rồi in.'),
    Q('Đặc điểm tranh in?', ['Có thể in nhiều bản giống nhau', 'Mỗi bản phải vẽ riêng', 'Chỉ in được một lần', 'Không in được'], 0, 'Ưu điểm in là nhân bản nhanh.'),
  ]),

  M(9, 'Tranh Đông Hồ', [
    Q('Tranh Đông Hồ xuất xứ từ?', ['Làng Đông Hồ – Bắc Ninh', 'Hà Nội', 'Huế', 'Sài Gòn'], 0, 'Tranh Đông Hồ là tranh dân gian Bắc Ninh.'),
    Q('Bức "Đám cưới chuột" thuộc dòng tranh?', ['Đông Hồ', 'Hàng Trống', 'Sơn dầu', 'Thuỷ mặc'], 0, '"Đám cưới chuột" là tranh Đông Hồ nổi tiếng.'),
    Q('Màu trong tranh Đông Hồ chủ yếu lấy từ?', ['Nguyên liệu tự nhiên (lá, vỏ sò, than)', 'Sơn công nghiệp', 'Mực điện tử', 'Bút bi'], 0, 'Màu tự nhiên là đặc điểm tranh Đông Hồ.'),
    Q('Giấy in tranh Đông Hồ là?', ['Giấy điệp (có quét lớp vỏ sò)', 'Giấy A4', 'Giấy báo', 'Giấy gói quà'], 0, 'Giấy điệp tạo nền lấp lánh đặc trưng.'),
    Q('Tranh "Vinh hoa", "Phú quý" thường được mua vào?', ['Dịp Tết để treo trong nhà', 'Mùa hè', 'Ngày khai giảng', 'Bất kì lúc nào'], 0, 'Tranh Đông Hồ gắn với Tết Nguyên Đán.'),
  ]),

  M(10, 'Mặt nạ giấy', [
    Q('Làm mặt nạ giấy cần?', ['Giấy bìa, kéo, màu vẽ, dây buộc', 'Sắt thép', 'Kính cường lực', 'Đất sét'], 0, 'Vật liệu đơn giản trong lớp.'),
    Q('Khi cắt giấy, em cần?', ['Cẩn thận, cầm kéo đúng cách', 'Cắt tuỳ ý không nhìn', 'Đùa giỡn với kéo', 'Chỉ vào mặt bạn'], 0, 'An toàn khi dùng kéo là quan trọng.'),
    Q('Mặt nạ nên có?', ['Lỗ mắt và lỗ mũi để dễ thở', 'Bịt kín toàn bộ', 'Chỉ một lỗ ở đỉnh đầu', 'Không có lỗ nào'], 0, 'Lỗ mắt mũi để đeo an toàn.'),
    Q('Trang trí mặt nạ có thể theo?', ['Chủ đề con vật, hoa lá, nhân vật cổ tích', 'Chỉ một màu đen', 'Để trắng không vẽ', 'Viết chữ kín'], 0, 'Đa dạng chủ đề trang trí.'),
    Q('Mặt nạ giấy dùng trong?', ['Lễ hội, trò chơi, biểu diễn ở trường', 'Đi học hàng ngày', 'Ngủ', 'Tắm'], 0, 'Mặt nạ phục vụ lễ hội, biểu diễn.'),
  ]),

  M(11, 'Gấp giấy Origami (1) — Cơ bản', [
    Q('Origami là?', ['Nghệ thuật gấp giấy của Nhật Bản', 'Vẽ tranh', 'Nặn đất sét', 'Đan len'], 0, 'Origami = nghệ thuật gấp giấy Nhật Bản.'),
    Q('Khi gấp giấy origami, em cần?', ['Gấp thẳng nếp, gọn gàng', 'Gấp vội vàng', 'Xé rách giấy', 'Vò nhàu giấy'], 0, 'Nếp gấp thẳng là chìa khoá origami đẹp.'),
    Q('Hình cơ bản origami: hình chữ A nghĩa là?', ['Gấp đôi giấy theo hình tam giác (chéo góc)', 'Gấp tròn', 'Cuộn lại', 'Xé đôi'], 0, 'Gấp đôi chéo tạo hình tam giác.'),
    Q('Em có thể gấp origami con gì đơn giản?', ['Con hạc, máy bay, chiếc thuyền', 'Con voi to', 'Con khủng long', 'Con kì lân'], 0, 'Hạc, máy bay, thuyền là origami cơ bản.'),
    Q('Sau khi gấp xong em nên?', ['Trưng bày hoặc tặng bạn bè', 'Vứt đi', 'Đốt đi', 'Dìm xuống nước'], 0, 'Trưng bày, tặng bạn là ý nghĩa.'),
  ]),

  M(12, 'Gấp giấy Origami (2) — Con hạc giấy', [
    Q('Con hạc giấy là biểu tượng?', ['Hoà bình, may mắn', 'Chiến tranh', 'Đói nghèo', 'Bệnh tật'], 0, 'Hạc giấy là biểu tượng hoà bình.'),
    Q('Truyện nổi tiếng về 1000 con hạc giấy gắn với?', ['Cô bé Sadako ở Hiroshima', 'Cô bé bán diêm', 'Tấm Cám', 'Thạch Sanh'], 0, 'Sadako gấp 1000 hạc giấy ước hoà bình.'),
    Q('Để gấp hạc giấy, em bắt đầu từ?', ['Tờ giấy hình vuông', 'Hình tròn', 'Hình chữ nhật dài', 'Hình tam giác'], 0, 'Hạc giấy bắt đầu từ giấy vuông.'),
    Q('Khi gặp khó khăn khi gấp, em nên?', ['Nhờ cô hoặc bạn hướng dẫn', 'Bỏ cuộc', 'Xé giấy', 'Đập bàn'], 0, 'Học hỏi để vượt khó là đúng.'),
    Q('Tặng hạc giấy có ý nghĩa?', ['Lời chúc may mắn, hoà bình', 'Trêu bạn', 'Khoe khoang', 'Không ý nghĩa gì'], 0, 'Tặng hạc gửi lời chúc tốt đẹp.'),
  ]),

  M(13, 'Vẽ con vật yêu thích', [
    Q('Trước khi vẽ con vật, em nên?', ['Quan sát hình dáng và đặc điểm con vật đó', 'Vẽ ngay không quan sát', 'Đoán bừa', 'Vẽ theo cảm hứng không có hình dung'], 0, 'Quan sát giúp vẽ giống.'),
    Q('Vẽ con vật, em chú ý?', ['Tỉ lệ đầu – thân – chân – đuôi', 'Chỉ vẽ đầu rất to', 'Vẽ thân không có chân', 'Vẽ ngẫu nhiên'], 0, 'Tỉ lệ giúp con vật cân đối.'),
    Q('Để con vật sinh động, em có thể thêm?', ['Bối cảnh xung quanh (cây, nhà, đồng cỏ…)', 'Để nền trắng trơn', 'Tô đen hết', 'Không tô màu'], 0, 'Bối cảnh làm tranh sinh động.'),
    Q('Khi tô màu, em nên?', ['Tô đậm nhạt theo ánh sáng', 'Tô một màu phẳng lì', 'Bôi loạn xạ', 'Để trắng'], 0, 'Đậm nhạt tạo khối cho con vật.'),
    Q('Vẽ con vật giúp em?', ['Yêu thiên nhiên và động vật hơn', 'Sợ động vật', 'Ghét động vật', 'Không có ý nghĩa'], 0, 'Vẽ đi liền với cảm xúc yêu thương.'),
  ]),

  M(14, 'Vẽ chân dung bạn', [
    Q('Vẽ chân dung là vẽ?', ['Khuôn mặt người (đầu, mặt, cổ, có thể cả vai)', 'Toàn thân từ đầu đến chân', 'Bàn tay', 'Bàn chân'], 0, 'Chân dung tập trung vào khuôn mặt.'),
    Q('Khuôn mặt người có hình?', ['Trứng hoặc oval', 'Vuông cứng', 'Tam giác', 'Lục giác'], 0, 'Khuôn mặt cơ bản hình oval.'),
    Q('Mắt nằm ở đâu trên khuôn mặt?', ['Khoảng giữa đầu (chia đôi từ trên xuống)', 'Trên trán', 'Ngay cằm', 'Ngoài mặt'], 0, 'Mắt ở khoảng giữa khuôn mặt.'),
    Q('Khi vẽ bạn, em nên?', ['Quan sát đặc điểm riêng của bạn', 'Vẽ ai cũng giống nhau', 'Tô bừa', 'Vẽ thật xấu để trêu bạn'], 0, 'Đặc điểm riêng tạo nét cá nhân.'),
    Q('Vẽ chân dung xong, em nên?', ['Tặng bạn hoặc trưng bày, không chế nhạo', 'Trêu chọc bạn', 'Vẽ thêm râu để trêu', 'Xé tan'], 0, 'Tôn trọng người được vẽ là cần thiết.'),
  ]),

  M(15, 'Vẽ đồ vật quen thuộc', [
    Q('Vẽ tĩnh vật là vẽ?', ['Các vật không di chuyển: hoa quả, đồ dùng, bình hoa…', 'Người đang đi', 'Con vật đang chạy', 'Mây bay'], 0, 'Tĩnh vật = vật không di chuyển.'),
    Q('Bố cục tĩnh vật cần?', ['Có chính – phụ, không lộn xộn', 'Đặt mọi vật một góc', 'Để giữa duy nhất', 'Ngoài khung tranh'], 0, 'Có chính phụ giúp tranh cân đối.'),
    Q('Ánh sáng chiếu vào vật từ một bên tạo?', ['Bóng đổ và sáng – tối khác nhau trên vật', 'Vật phẳng lì', 'Mất vật', 'Tăng kích thước'], 0, 'Ánh sáng tạo khối cho vật.'),
    Q('Khi vẽ chiếc cốc, em chú ý?', ['Miệng cốc là hình ellipse khi nhìn nghiêng', 'Miệng cốc là hình vuông', 'Không vẽ miệng', 'Vẽ ngẫu nhiên'], 0, 'Miệng cốc nhìn nghiêng cho hình ellipse.'),
    Q('Vẽ tĩnh vật rèn cho em?', ['Khả năng quan sát hình khối và ánh sáng', 'Khả năng chạy nhanh', 'Khả năng hát', 'Khả năng nói chuyện'], 0, 'Tĩnh vật rèn quan sát hình khối.'),
  ]),

  M(16, 'Tạo hình từ vật liệu tái chế', [
    Q('Vật liệu tái chế có thể dùng làm mĩ thuật là?', ['Vỏ chai, hộp giấy, giấy báo cũ…', 'Đồ mới mua', 'Chỉ giấy A4 trắng', 'Vàng bạc'], 0, 'Tái chế là dùng đồ cũ làm mới.'),
    Q('Tái chế trong mĩ thuật có ý nghĩa?', ['Bảo vệ môi trường và sáng tạo', 'Tốn kém', 'Vô bổ', 'Không liên quan'], 0, 'Tái chế giảm rác và kích thích sáng tạo.'),
    Q('Vỏ chai nhựa có thể làm?', ['Chậu cây, đồ trang trí, đồ chơi', 'Đồ ăn', 'Quần áo', 'Sách vở'], 0, 'Vỏ chai làm được nhiều đồ dùng.'),
    Q('Khi dùng kéo, dao trong tái chế, em nên?', ['Cẩn thận, nhờ người lớn giúp việc khó', 'Tự làm liều', 'Đùa giỡn với dụng cụ', 'Vung loạn xạ'], 0, 'An toàn là ưu tiên hàng đầu.'),
    Q('Sản phẩm tái chế đẹp em có thể?', ['Trưng bày trong lớp, tặng bạn bè', 'Vứt đi ngay', 'Đốt', 'Đập vỡ'], 0, 'Trưng bày để khoe và truyền cảm hứng.'),
  ]),

  M(17, 'Đường nét và họa tiết', [
    Q('Đường nét trong mĩ thuật gồm?', ['Đường thẳng, cong, gấp khúc, lượn sóng…', 'Chỉ đường thẳng', 'Chỉ đường cong', 'Không có đường'], 0, 'Nhiều loại đường nét tạo cảm xúc khác nhau.'),
    Q('Đường thẳng đứng gợi cảm giác?', ['Vững chãi, nghiêm trang', 'Mềm mại', 'Loạn xạ', 'Vui tươi'], 0, 'Đường thẳng đứng cho cảm giác vững chãi.'),
    Q('Đường lượn sóng gợi cảm giác?', ['Mềm mại, uyển chuyển', 'Cứng nhắc', 'Đứng yên', 'Hỗn loạn'], 0, 'Đường sóng mềm mại như nước.'),
    Q('Hoạ tiết là?', ['Hình vẽ trang trí được lặp lại có quy luật', 'Hình vẽ lung tung', 'Chữ viết', 'Số đếm'], 0, 'Hoạ tiết = hình trang trí lặp lại.'),
    Q('Hoạ tiết hoa lá, kỉ hà thường dùng trang trí?', ['Khăn, áo, gốm, đồ dùng…', 'Không dùng được', 'Chỉ dùng vẽ chơi', 'Để xé bỏ'], 0, 'Hoạ tiết ứng dụng vào nhiều đồ dùng.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Ba màu cơ bản là?', ['Đỏ – Vàng – Lam', 'Cam – Lục – Tím', 'Đen – Trắng – Xám', 'Nâu – Be – Hồng'], 0, '3 màu cơ bản: đỏ, vàng, lam.'),
    Q('Màu nóng gồm?', ['Đỏ, cam, vàng', 'Lam, lục, tím', 'Đen trắng', 'Nâu'], 0, 'Đỏ, cam, vàng là nóng.'),
    Q('Pha Đỏ + Lam tạo?', ['Tím', 'Cam', 'Lục', 'Hồng'], 0, 'Đỏ + Lam = Tím.'),
    Q('Tranh Đông Hồ xuất xứ?', ['Bắc Ninh', 'Huế', 'Sài Gòn', 'Hà Nội'], 0, 'Làng Đông Hồ – Bắc Ninh.'),
    Q('Origami là nghệ thuật?', ['Gấp giấy Nhật Bản', 'Vẽ Trung Quốc', 'Nặn đất Hàn Quốc', 'Đan len Việt Nam'], 0, 'Origami là gấp giấy Nhật.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Vẽ tranh đề tài "Ngày Tết quê em"', [
    Q('Đề tài "Ngày Tết quê em" có thể vẽ?', ['Cảnh chợ Tết, gia đình quây quần, gói bánh chưng, chúc Tết…', 'Cảnh chiến tranh', 'Cảnh phòng thí nghiệm', 'Cảnh đại dương'], 0, 'Đa dạng cảnh Tết quê.'),
    Q('Màu sắc thường dùng cho tranh Tết?', ['Đỏ, vàng — màu tươi tắn, rực rỡ', 'Đen tối', 'Xám buồn', 'Toàn nâu'], 0, 'Tết dùng tông nóng tươi sáng.'),
    Q('Hình ảnh đặc trưng ngày Tết?', ['Bánh chưng, hoa đào, hoa mai, câu đối đỏ', 'Khói súng', 'Tuyết trắng', 'Bánh kem'], 0, 'Bánh chưng, hoa đào/mai là biểu tượng Tết.'),
    Q('Khi vẽ Tết quê, em nên?', ['Đưa cảm xúc vui tươi vào tranh', 'Vẽ buồn bã', 'Vẽ lộn xộn', 'Vẽ một mình bạn không có ai'], 0, 'Cảm xúc làm tranh sống động.'),
    Q('Tranh hoàn thành em nên?', ['Trưng bày ở lớp đón Tết', 'Vứt đi', 'Xé tan', 'Cất ngay'], 0, 'Trưng bày tạo không khí Tết.'),
  ]),

  M(20, 'Vẽ tranh đề tài "Mẹ của em"', [
    Q('Vẽ về mẹ, em nên?', ['Vẽ những đặc điểm gợi nhớ mẹ và hoạt động mẹ làm', 'Vẽ ngẫu nhiên', 'Vẽ người khác', 'Để trắng giấy'], 0, 'Đặc điểm và hoạt động tạo nét riêng.'),
    Q('Hoạt động thường vẽ về mẹ?', ['Mẹ nấu cơm, mẹ chải tóc cho con, mẹ đọc sách…', 'Mẹ đánh nhau', 'Mẹ ngủ cả ngày', 'Mẹ không làm gì'], 0, 'Hoạt động đời thường ấm áp.'),
    Q('Màu nền tranh về mẹ thường?', ['Ấm áp, dịu dàng', 'Lạnh giá', 'Đen tối', 'Hỗn loạn'], 0, 'Tông ấm gợi tình mẹ.'),
    Q('Tặng tranh cho mẹ là?', ['Món quà ý nghĩa thể hiện tình yêu', 'Việc vô bổ', 'Trêu chọc mẹ', 'Không có ý nghĩa'], 0, 'Tặng tranh tự vẽ rất ý nghĩa.'),
    Q('Ngày 8/3 hoặc ngày của Mẹ, em có thể?', ['Tặng tranh và lời chúc cho mẹ', 'Quên đi', 'Vẽ xấu để trêu', 'Không làm gì'], 0, 'Dịp đặc biệt là cơ hội bày tỏ tình cảm.'),
  ]),

  M(21, 'Vẽ tranh đề tài "Quê hương em"', [
    Q('Quê hương em có thể vẽ?', ['Cảnh đồng quê, phố phường, dòng sông, ngôi nhà…', 'Cảnh nước ngoài', 'Cảnh không gian vũ trụ', 'Cảnh trong sách hư cấu'], 0, 'Quê hương là nơi em sinh ra.'),
    Q('Tranh quê có thể có?', ['Cây đa, giếng nước, sân đình hoặc nhà cao tầng, phố phường', 'Chỉ đường phố', 'Chỉ đồng quê', 'Không có gì cả'], 0, 'Tuỳ quê mỗi em có hình ảnh riêng.'),
    Q('Bố cục tranh quê cần?', ['Tiền cảnh – trung cảnh – hậu cảnh rõ ràng', 'Lộn xộn', 'Chỉ một lớp duy nhất', 'Chỉ vẽ trời'], 0, '3 lớp tạo chiều sâu.'),
    Q('Em nên đưa cảm xúc gì vào tranh quê?', ['Tình yêu và sự gắn bó với quê hương', 'Sự chán ghét', 'Sự lạnh nhạt', 'Không có cảm xúc'], 0, 'Cảm xúc làm tranh có hồn.'),
    Q('Vẽ tranh quê hương giúp em?', ['Yêu quê hương hơn, hiểu vẻ đẹp quê mình', 'Học toán giỏi', 'Đá bóng giỏi', 'Không có ý nghĩa'], 0, 'Sáng tạo gắn với tình yêu quê.'),
  ]),

  M(22, 'Tạo hình từ đất nặn', [
    Q('Đất nặn dùng để?', ['Nặn hình con vật, đồ vật, người…', 'Ăn', 'Đắp lên người', 'Vứt đi'], 0, 'Đất nặn để tạo hình.'),
    Q('Khi nặn, em nên?', ['Vê tròn, ấn dẹt, kéo dài để tạo hình', 'Đập nát', 'Ăn vào', 'Bôi lên tường'], 0, 'Các thao tác cơ bản nặn.'),
    Q('Trước khi nặn em nên?', ['Rửa tay sạch, đặt khăn lót lên bàn', 'Không cần chuẩn bị', 'Đùa giỡn', 'Lấy đất ra ăn'], 0, 'Chuẩn bị sạch sẽ là cần thiết.'),
    Q('Sau khi nặn xong em nên?', ['Rửa tay sạch sẽ, cất đất gọn gàng', 'Để bừa', 'Vứt đất khắp nơi', 'Bỏ vào miệng'], 0, 'Vệ sinh sau khi nặn.'),
    Q('Nặn hình con vật em chú ý?', ['Tỉ lệ và đặc điểm con vật', 'Chỉ nặn cục lớn', 'Nặn lung tung', 'Không nặn gì'], 0, 'Tỉ lệ và đặc điểm là chìa khoá.'),
  ]),

  M(23, 'Vẽ tranh đề tài "Bảo vệ môi trường"', [
    Q('Tranh bảo vệ môi trường có thể vẽ?', ['Trồng cây, dọn rác, tiết kiệm nước…', 'Đốt rừng', 'Xả rác', 'Săn bắn'], 0, 'Vẽ hành động tích cực bảo vệ.'),
    Q('Thông điệp tranh bảo vệ môi trường?', ['Kêu gọi mọi người chung tay bảo vệ thiên nhiên', 'Phá hoại', 'Vô cảm', 'Không có thông điệp'], 0, 'Tranh truyền tải thông điệp.'),
    Q('Khi vẽ, em nên?', ['Dùng màu sắc tươi sáng cho hành động đẹp, tối cho hành động xấu', 'Tô đen hết', 'Để trắng hết', 'Lung tung'], 0, 'Màu sắc truyền cảm xúc.'),
    Q('Sau khi vẽ xong, em có thể?', ['Treo tranh ở lớp, kêu gọi bạn cùng bảo vệ môi trường', 'Vứt đi', 'Cất kín', 'Xé tan'], 0, 'Lan toả thông điệp.'),
    Q('Em làm gì để bảo vệ môi trường ngoài đời?', ['Vứt rác đúng nơi, tiết kiệm điện nước, trồng cây', 'Đốt rác bừa', 'Xả nước hoang phí', 'Vứt rác đường'], 0, 'Hành động thực tế song song với tranh.'),
  ]),

  M(24, 'Tranh xé dán', [
    Q('Tranh xé dán là tranh?', ['Tạo hình bằng cách xé giấy và dán lên nền', 'Vẽ bằng bút', 'In bằng máy', 'Chụp ảnh'], 0, 'Xé dán: dùng giấy xé tạo hình.'),
    Q('Giấy xé dán có thể dùng?', ['Giấy màu, báo, tạp chí cũ', 'Sắt thép', 'Nhựa cứng', 'Đất sét'], 0, 'Giấy mềm dễ xé.'),
    Q('Khi xé giấy, em nên?', ['Xé theo hình dự định, kiên nhẫn', 'Xé bừa', 'Xé rất nhanh không quan tâm', 'Cắt bằng kéo (vì đây là xé dán)'], 0, 'Xé tay đặc trưng của kĩ thuật này.'),
    Q('Cạnh giấy xé tay tạo cảm giác?', ['Mộc mạc, tự nhiên (khác với cắt kéo thẳng)', 'Sắc nhọn', 'Cứng nhắc', 'Không có gì đặc biệt'], 0, 'Cạnh xé mềm mại, tự nhiên.'),
    Q('Dán giấy cần dùng?', ['Hồ dán hoặc băng dính, vừa đủ không quá nhiều', 'Đinh', 'Sắt nung', 'Không dùng gì cả'], 0, 'Hồ dán là vật liệu cơ bản.'),
  ]),

  M(25, 'Vẽ phong cảnh mùa', [
    Q('Mùa xuân thường vẽ với?', ['Hoa nở, lá non, màu tươi sáng', 'Lá rụng, màu vàng', 'Tuyết trắng', 'Lá khô'], 0, 'Mùa xuân hoa nở, lá non.'),
    Q('Mùa hè thường vẽ với?', ['Mặt trời rực rỡ, biển xanh, cây xanh đậm', 'Tuyết rơi', 'Lá vàng', 'Cây trụi'], 0, 'Hè nắng vàng, biển xanh.'),
    Q('Mùa thu thường vẽ với?', ['Lá vàng, lá đỏ rơi, trời cao trong xanh', 'Hoa nở', 'Tuyết rơi', 'Mặt trời gay gắt'], 0, 'Thu lá vàng đỏ rụng.'),
    Q('Mùa đông thường vẽ với?', ['Tuyết, lá khô, cây trụi (ở vùng có tuyết) hoặc trời xám', 'Hoa nở rộ', 'Nắng gắt', 'Lá xanh đậm'], 0, 'Đông lạnh, ít sức sống.'),
    Q('Vẽ phong cảnh mùa giúp em?', ['Quan sát thiên nhiên 4 mùa và yêu thiên nhiên', 'Học toán', 'Đá bóng', 'Không có ý nghĩa'], 0, 'Quan sát và yêu thiên nhiên.'),
  ]),

  M(26, 'Tô màu nước', [
    Q('Màu nước là?', ['Màu pha với nước để vẽ', 'Màu sáp khô', 'Màu phấn', 'Màu acrylic'], 0, 'Màu nước trong, dùng nước pha.'),
    Q('Vẽ màu nước cần?', ['Bút lông, đĩa pha màu, cốc nước', 'Bút sắt', 'Đất sét', 'Kéo'], 0, 'Dụng cụ cơ bản màu nước.'),
    Q('Khi tô màu nước, em nên?', ['Pha loãng và tô từ nhạt đến đậm', 'Tô đậm ngay', 'Để khô không pha', 'Pha quá đặc'], 0, 'Lớp nhạt trước, đậm sau.'),
    Q('Đặc điểm màu nước là?', ['Trong, có thể chồng lớp, dễ pha loãng', 'Đặc kín', 'Không pha được', 'Không thấm'], 0, 'Màu nước trong và linh hoạt.'),
    Q('Sau khi vẽ xong, em nên?', ['Rửa bút và đĩa pha sạch sẽ', 'Để bừa', 'Vứt bút', 'Đổ màu xuống sàn'], 0, 'Vệ sinh dụng cụ.'),
  ]),

  M(27, 'Đối xứng và cân đối', [
    Q('Đối xứng nghĩa là?', ['Hai bên giống nhau qua một trục', 'Hai bên khác hẳn', 'Một bên to một bên nhỏ', 'Không có trục'], 0, 'Đối xứng = giống nhau qua trục.'),
    Q('Hình nào đối xứng?', ['Hình trái tim, hình ngôi sao 5 cánh', 'Hình quái dị', 'Hình lung tung', 'Không có'], 0, 'Trái tim, ngôi sao có trục đối xứng.'),
    Q('Cân đối trong tranh nghĩa là?', ['Bố cục có trọng lượng đều, hài hoà', 'Lệch về một bên', 'Lộn xộn', 'Trống rỗng'], 0, 'Cân đối giúp tranh dễ nhìn.'),
    Q('Để vẽ đối xứng, em có thể?', ['Gấp giấy đôi và vẽ một nửa', 'Vẽ bừa', 'Đoán', 'Không cần đối xứng'], 0, 'Gấp giấy là cách đơn giản tạo đối xứng.'),
    Q('Đối xứng trong tự nhiên thấy ở?', ['Cánh bướm, lá cây, khuôn mặt người', 'Đám mây bất kì', 'Vũng nước', 'Đống đá'], 0, 'Tự nhiên có nhiều đối xứng.'),
  ]),

  M(28, 'Tạo mẫu giấy chúc mừng', [
    Q('Thiệp chúc mừng dùng để?', ['Tặng người thân, bạn bè dịp sinh nhật, lễ hội', 'Vứt đi', 'Đốt', 'Ăn'], 0, 'Thiệp truyền tải tình cảm.'),
    Q('Thiệp chúc mừng nên có?', ['Hình vẽ đẹp, lời chúc chân thành', 'Lời nói xấu', 'Trống không', 'Hình ảnh đáng sợ'], 0, 'Hình và lời chúc tạo thiệp ý nghĩa.'),
    Q('Trang trí thiệp có thể dùng?', ['Vẽ, dán giấy, nơ, ruy băng', 'Đinh sắt', 'Bùn đất', 'Kim tiêm'], 0, 'Vật liệu mềm an toàn.'),
    Q('Lời chúc sinh nhật bạn nên?', ['Chân thành, vui tươi, tích cực', 'Buồn bã', 'Cay đắng', 'Vô cảm'], 0, 'Chân thành là quan trọng nhất.'),
    Q('Khi tự làm thiệp tặng, người nhận sẽ?', ['Cảm động và trân trọng', 'Vứt ngay', 'Chê', 'Không quan tâm'], 0, 'Quà tự làm có giá trị tinh thần lớn.'),
  ]),

  M(29, 'Trang trí lớp học', [
    Q('Trang trí lớp học cần?', ['Hài hoà, đẹp mắt, phù hợp lứa tuổi', 'Loè loẹt khó nhìn', 'Bừa bộn', 'Đáng sợ'], 0, 'Trang trí cần hài hoà.'),
    Q('Trang trí có thể bằng?', ['Tranh vẽ, hoa giấy, dây kết, chữ thư pháp', 'Đập phá đồ', 'Vẽ bậy lên tường', 'Khắc tên lên bàn'], 0, 'Trang trí xanh sạch đẹp.'),
    Q('Khi trang trí cùng nhau, em nên?', ['Hợp tác, chia việc, tôn trọng ý kiến bạn', 'Một mình làm hết', 'Tranh giành', 'Phá đồ bạn làm'], 0, 'Hợp tác là kỹ năng quan trọng.'),
    Q('Trang trí xong em nên?', ['Giữ gìn không phá hỏng', 'Phá ngay', 'Bóc xé', 'Vẽ bậy lên'], 0, 'Giữ gìn thành quả lao động.'),
    Q('Trang trí lớp dịp gì?', ['Tết, 20/11, sinh nhật bạn, cuối năm…', 'Không bao giờ', 'Chỉ khi cô bắt', 'Khi phá đồ'], 0, 'Nhiều dịp đáng trang trí.'),
  ]),

  M(30, 'Vẽ tranh đề tài "Trường em"', [
    Q('Tranh "Trường em" có thể vẽ?', ['Cổng trường, lớp học, sân trường, giờ ra chơi…', 'Cảnh xa lạ', 'Cảnh ở nhà', 'Cảnh trên đường'], 0, 'Trường em có nhiều cảnh đẹp.'),
    Q('Em có thể vẽ hoạt động?', ['Giờ học, giờ ra chơi, chào cờ, lao động', 'Đánh nhau', 'Vẽ bậy', 'Phá phách'], 0, 'Hoạt động tích cực ở trường.'),
    Q('Bố cục có thể có?', ['Cổng trường tiền cảnh, sân và nhà phía sau', 'Lộn xộn', 'Chỉ một góc', 'Trống không'], 0, 'Bố cục giúp tranh rõ ràng.'),
    Q('Cảm xúc em khi vẽ?', ['Yêu trường, vui tươi', 'Buồn bã', 'Chán nản', 'Tức giận'], 0, 'Tình yêu trường thể hiện qua tranh.'),
    Q('Em treo tranh ở?', ['Lớp học, góc học tập ở nhà', 'Vứt đi', 'Đốt', 'Xé'], 0, 'Trưng bày để khoe và giữ kỉ niệm.'),
  ]),

  M(31, 'Hoạ tiết dân tộc Việt Nam', [
    Q('Hoạ tiết trống đồng Đông Sơn có?', ['Hình ngôi sao, chim Lạc, hươu nai, hình người', 'Hình rồng phương Tây', 'Hình kim tự tháp', 'Hình ô tô'], 0, 'Trống đồng có nhiều hoa văn Việt cổ.'),
    Q('Hoa văn thổ cẩm là?', ['Hoa văn dệt trên vải của các dân tộc thiểu số', 'Vẽ trên tường', 'Khắc trên đá', 'In trên giấy'], 0, 'Thổ cẩm là hoa văn dệt.'),
    Q('Hoa văn dân tộc thường có?', ['Tính đối xứng và hình hình học', 'Lộn xộn', 'Không có quy luật', 'Vẽ bừa'], 0, 'Đối xứng và hình học là đặc trưng.'),
    Q('Em cần làm gì với hoạ tiết dân tộc?', ['Trân trọng, gìn giữ và học hỏi', 'Coi thường', 'Cười chê', 'Bỏ qua'], 0, 'Trân trọng di sản dân tộc.'),
    Q('Hoa văn dân tộc ứng dụng vào?', ['Trang phục, gốm, đồ thủ công mỹ nghệ hiện đại', 'Không có ứng dụng', 'Chỉ trang trí trong bảo tàng', 'Không có giá trị'], 0, 'Hoa văn đi vào đời sống hiện đại.'),
  ]),

  M(32, 'Thực hành phối màu', [
    Q('Phối màu hài hoà nghĩa là?', ['Các màu kết hợp tạo cảm giác dễ chịu', 'Đụng độ chói mắt', 'Loè loẹt', 'Không phối được'], 0, 'Hài hoà = dễ chịu.'),
    Q('Hai màu đối lập trên bánh xe màu (tương phản) là?', ['Đỏ – Lục, Vàng – Tím, Cam – Lam', 'Đỏ – Cam', 'Vàng – Cam', 'Lam – Lục'], 0, 'Màu tương phản nằm đối diện bánh xe.'),
    Q('Phối toàn tông lạnh tạo cảm giác?', ['Mát mẻ, yên tĩnh', 'Sôi động', 'Nóng bức', 'Hỗn loạn'], 0, 'Tông lạnh cho cảm giác mát.'),
    Q('Phối toàn tông nóng tạo cảm giác?', ['Ấm áp, sôi động', 'Lạnh lẽo', 'Buồn bã', 'Yên tĩnh'], 0, 'Tông nóng cho cảm giác ấm.'),
    Q('Để tranh nổi bật, em nên?', ['Có một màu chủ đạo và vài màu phụ', 'Mỗi vật một màu khác hẳn', 'Toàn cùng một màu', 'Không tô màu'], 0, 'Chủ đạo + phụ tạo tranh đẹp.'),
  ]),

  M(33, 'Vẽ tranh đề tài tự chọn', [
    Q('Vẽ tranh tự chọn nghĩa là?', ['Em tự chọn chủ đề mình thích', 'Cô bắt buộc chủ đề', 'Bạn chọn cho em', 'Không vẽ gì cả'], 0, 'Tự chọn để bộc lộ cá tính.'),
    Q('Trước khi vẽ, em nên?', ['Phác ý tưởng ra giấy, chuẩn bị màu', 'Vẽ ngay không nghĩ', 'Đợi cô vẽ', 'Bỏ cuộc'], 0, 'Lập kế hoạch trước khi vẽ.'),
    Q('Chủ đề nào em có thể chọn?', ['Gia đình, ước mơ, du lịch, hoạt động yêu thích…', 'Chỉ một chủ đề duy nhất', 'Không có chủ đề', 'Bạo lực'], 0, 'Đa dạng chủ đề tích cực.'),
    Q('Khi gặp khó khăn vẽ, em nên?', ['Tham khảo tranh khác hoặc hỏi cô/bạn', 'Bỏ cuộc', 'Xé tranh', 'Khóc'], 0, 'Học hỏi là cách vượt khó.'),
    Q('Bức tranh tự chọn thể hiện?', ['Cá tính và cảm xúc riêng của em', 'Sao chép bạn', 'Sao chép cô', 'Không có gì'], 0, 'Cá tính là điều đẹp nhất.'),
  ]),

  M(34, 'Trưng bày sản phẩm cuối năm', [
    Q('Trưng bày sản phẩm là?', ['Sắp xếp tranh, đồ thủ công cho người khác xem', 'Vứt sản phẩm', 'Cất kín không cho ai biết', 'Đốt đi'], 0, 'Trưng bày để chia sẻ.'),
    Q('Khi trưng bày, em nên?', ['Sắp xếp đẹp mắt, có tên tác giả và ngày tháng', 'Vứt bừa', 'Chỉ trưng bày của mình', 'Phá tranh bạn'], 0, 'Sắp xếp khoa học.'),
    Q('Khi xem tranh bạn, em nên?', ['Tôn trọng, nhận xét tích cực', 'Chê bai', 'Phá tranh bạn', 'Cười nhạo'], 0, 'Tôn trọng và góp ý xây dựng.'),
    Q('Sau triển lãm, sản phẩm em nên?', ['Cất giữ làm kỉ niệm hoặc tặng người thân', 'Vứt đi', 'Đốt', 'Xé tan'], 0, 'Giữ kỉ niệm sáng tạo.'),
    Q('Trưng bày giúp em?', ['Tự tin và học hỏi từ tác phẩm của bạn', 'Buồn bã', 'Tức giận', 'Không có ý nghĩa'], 0, 'Trưng bày là cơ hội học hỏi.'),
  ]),

  M(35, 'Tổng kết cuối năm', [
    Q('Trong năm em đã học các kĩ thuật?', ['Vẽ, gấp, xé dán, in, nặn, trang trí…', 'Chỉ vẽ', 'Chỉ nặn', 'Không có gì'], 0, 'Đa dạng kĩ thuật trong Lớp 3.'),
    Q('Ba màu cơ bản là?', ['Đỏ – Vàng – Lam', 'Cam – Lục – Tím', 'Đen – Trắng – Xám', 'Hồng – Be – Nâu'], 0, '3 màu cơ bản.'),
    Q('Tranh dân gian Việt Nam em đã học?', ['Đông Hồ, Hàng Trống', 'Sơn dầu', 'Acrylic', 'Thuỷ mặc'], 0, 'Hai dòng tranh dân gian tiêu biểu.'),
    Q('Origami là nghệ thuật gấp giấy của?', ['Nhật Bản', 'Trung Quốc', 'Hàn Quốc', 'Việt Nam'], 0, 'Origami Nhật Bản.'),
    Q('Để giỏi mĩ thuật hơn em cần?', ['Quan sát kĩ và luyện tập đều', 'Không cần làm gì', 'Học vì điểm', 'Bỏ cuộc khi khó'], 0, 'Quan sát và luyện tập là chìa khoá.'),
  ], { difficulty: 2 }),
];

export const P3MT_SCENARIOS = indexBy(P3MT_WEEKS);
