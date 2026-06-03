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
    Q('Ba màu cơ bản trong hội hoạ là?', ['Cam – Lục – Tím', 'Đỏ – Vàng – Lam', 'Đen – Trắng – Xám', 'Hồng – Nâu – Be'], 1, 'Ba màu cơ bản: Đỏ, Vàng, Lam (Lam = Xanh dương).'),
    Q('Pha Đỏ + Vàng tạo ra màu?', ['Cam', 'Lục (Xanh lá)', 'Hồng nhạt', 'Đỏ đậm hơn'], 0, 'Đỏ + Vàng = Cam.'),
    Q('Pha Vàng + Lam tạo ra màu?', ['Lục (Xanh lá)', 'Hồng', 'Xanh dương đậm hơn', 'Nâu xám'], 0, 'Vàng + Lam = Xanh lá.'),
    Q('Pha Đỏ + Lam tạo ra màu?', ['Hồng nhạt', 'Tím', 'Xám tối', 'Nâu đỏ'], 1, 'Đỏ + Lam = Tím.'),
    Q('Bánh xe màu giúp em?', ['Hiểu cách phối màu và quan hệ giữa các màu', 'Không có tác dụng', 'Trang trí xe đạp', 'Chơi vòng quay'], 0, 'Bánh xe màu là công cụ học phối màu.'),
  ]),

  M(2, 'Màu nóng – màu lạnh (1)', [
    Q('Nhóm màu nóng gồm?', ['Đen, Trắng, Xám', 'Nâu, Be, Hồng nhạt', 'Đỏ, Cam, Vàng', 'Lam, Lục, Tím'], 2, 'Đỏ, Cam, Vàng là nhóm màu nóng.'),
    Q('Nhóm màu lạnh gồm?', ['Đỏ, Cam, Vàng', 'Đen, Trắng', 'Lam, Lục, Tím', 'Nâu, Be'], 2, 'Lam, Lục, Tím là nhóm màu lạnh.'),
    Q('Màu nóng gợi cảm giác?', ['Buồn bã', 'Lạnh lẽo', 'Ấm áp, sôi động như lửa, mặt trời', 'Tĩnh lặng'], 2, 'Màu nóng gợi sự ấm áp.'),
    Q('Tranh vẽ mặt trời, lửa, ngày hội nên dùng?', ['Toàn màu lạnh', 'Chỉ đen trắng', 'Toàn xám', 'Màu nóng là chính'], 3, 'Đề tài nóng thì dùng tông nóng.'),
    Q('Vẽ một bức tranh hoàng hôn, em nên dùng?', ['Xanh lam là chính', 'Đỏ – cam – vàng làm chủ đạo', 'Chỉ màu đen', 'Toàn xám trắng'], 1, 'Hoàng hôn rực rỡ tông nóng.'),
  ]),

  M(3, 'Màu nóng – màu lạnh (2)', [
    Q('Màu lạnh gợi cảm giác?', ['Nóng bức', 'Sôi động', 'Mát mẻ, yên tĩnh như nước, bầu trời', 'Cháy bỏng'], 2, 'Màu lạnh gợi mát mẻ, yên tĩnh.'),
    Q('Vẽ cảnh biển, em nên dùng?', ['Cam vàng nóng', 'Xanh lam, xanh lá làm chủ đạo', 'Đen tối', 'Toàn đỏ'], 1, 'Biển dùng tông lạnh.'),
    Q('Trong cùng bức tranh, kết hợp màu nóng và lạnh tạo?', ['Không có hiệu ứng', 'Tranh xấu', 'Sự tương phản hấp dẫn', 'Tranh buồn'], 2, 'Tương phản nóng–lạnh tạo điểm nhấn.'),
    Q('Màu trắng và đen thuộc nhóm nào?', ['Không thuộc nhóm nóng hay lạnh — là màu trung tính', 'Thuộc nhóm màu nóng vì trắng giống ánh nắng', 'Cả hai', 'Thuộc nhóm màu lạnh vì đen giống bóng tối'], 0, 'Đen, trắng là màu trung tính.'),
    Q('Bạn vẽ cảnh mùa đông nên dùng?', ['Tông nóng: đỏ, cam', 'Đen tuyền', 'Chỉ vàng', 'Tông lạnh: lam, trắng, xám'], 3, 'Mùa đông tông lạnh.'),
  ]),

  M(4, 'Đậm – nhạt', [
    Q('Đậm – nhạt trong tranh nghĩa là?', ['Lớn nhỏ', 'Mức độ sáng tối khác nhau của màu sắc', 'Xa gần', 'Mỏng dày'], 1, 'Đậm nhạt = mức sáng tối của màu.'),
    Q('Để tạo độ đậm hơn, em có thể?', ['Pha thêm màu đen hoặc tô đè nhiều lớp', 'Để trống', 'Tô ít hơn', 'Pha thêm trắng'], 0, 'Thêm đen hoặc tô đậm tay tạo độ đậm.'),
    Q('Để tạo độ nhạt, em có thể?', ['Vẽ to ra', 'Pha thêm đen', 'Pha thêm trắng hoặc tô nhẹ tay', 'Tô đậm hơn'], 2, 'Thêm trắng làm nhạt màu.'),
    Q('Trong tranh có 3 mức độ đậm nhạt là?', ['Cao – thấp – ngang', 'Đậm – vừa – nhạt', 'Đỏ – vàng – xanh', 'To – vừa – nhỏ'], 1, '3 mức cơ bản: đậm, vừa, nhạt.'),
    Q('Đậm nhạt giúp bức tranh?', ['Khó nhìn', 'Buồn hơn', 'Phẳng lì', 'Có chiều sâu, sống động hơn'], 3, 'Đậm nhạt tạo chiều sâu.'),
  ]),

  M(5, 'Vẽ trang trí — Hình vuông cơ bản', [
    Q('Trang trí hình vuông thường có?', ['Để trống', 'Vẽ lung tung', 'Một hoạ tiết trung tâm và các hoạ tiết phụ ở 4 góc', 'Tô một màu duy nhất'], 2, 'Bố cục đối xứng quanh trung tâm.'),
    Q('Hoạ tiết thường dùng trang trí hình vuông là?', ['Cảnh chiến tranh', 'Hoa lá, hình kỉ hà', 'Hình vẽ phức tạp', 'Khuôn mặt người'], 1, 'Hoa lá, hình kỉ hà phù hợp trang trí.'),
    Q('Khi tô màu trang trí hình vuông, em nên?', ['Để trống', 'Tô đen hết', 'Chọn vài màu hài hoà, lặp lại có quy luật', 'Mỗi ô một màu lung tung'], 2, 'Phối màu hài hoà, lặp lại tạo nhịp điệu.'),
    Q('Trang trí đối xứng nghĩa là?', ['Chỉ vẽ một bên', 'Mỗi bên khác hẳn', 'Vẽ tuỳ ý', 'Các hoạ tiết hai bên giống nhau qua trục'], 3, 'Đối xứng = giống nhau qua trục.'),
    Q('Trang trí hình vuông ứng dụng vào?', ['Chỉ để chơi', 'Khăn trải bàn, gạch lát, bao bì, áo dệt thổ cẩm…', 'Không ứng dụng được', 'Tự xé bỏ'], 1, 'Có nhiều ứng dụng thực tế.'),
  ]),

  M(6, 'Vẽ theo trí nhớ', [
    Q('Vẽ theo trí nhớ là?', ['Vẽ theo mẫu thật', 'Vẽ lại hình ảnh đã thấy mà không có mẫu trước mặt', 'Vẽ ngẫu nhiên', 'Vẽ chép tranh'], 1, 'Vẽ trí nhớ: tái hiện hình ảnh đã thấy.'),
    Q('Để vẽ trí nhớ tốt, em cần?', ['Quan sát kĩ vật trước khi vẽ', 'Hỏi bạn cho biết', 'Nhắm mắt lại', 'Đoán bừa'], 0, 'Quan sát kĩ là nền tảng.'),
    Q('Vẽ trí nhớ giúp em?', ['Đá bóng giỏi', 'Đọc nhanh', 'Học toán', 'Rèn khả năng quan sát và ghi nhớ'], 3, 'Phát triển óc quan sát và trí nhớ.'),
    Q('Khi vẽ trí nhớ, em nên?', ['Tô màu trước', 'Vẽ chi tiết nhỏ nhất trước', 'Vẽ những nét chính trước, chi tiết sau', 'Vẽ ngẫu nhiên'], 2, 'Đại thể trước, chi tiết sau.'),
    Q('Sau khi vẽ trí nhớ xong, em nên?', ['So sánh với vật thật để rút kinh nghiệm', 'Vẽ lại nhiều lần cùng đề tài cho thuộc', 'Khoe bạn', 'Cất ngay không xem'], 0, 'So sánh để rút kinh nghiệm.'),
  ]),

  M(7, 'Vẽ phong cảnh đơn giản', [
    Q('Tranh phong cảnh là tranh vẽ?', ['Cảnh chiến tranh', 'Khuôn mặt người', 'Đồ vật tĩnh', 'Cảnh thiên nhiên, làng quê, phố phường…'], 3, 'Phong cảnh = cảnh thiên nhiên, nơi chốn.'),
    Q('Bố cục tranh phong cảnh thường có?', ['Tiền cảnh, trung cảnh, hậu cảnh', 'Chỉ góc trên', 'Chỉ trung tâm', 'Chỉ một lớp duy nhất'], 0, 'Ba lớp tạo chiều sâu cho tranh phong cảnh.'),
    Q('Vật ở GẦN em vẽ thế nào?', ['Tô trắng', 'To rõ, chi tiết, màu đậm', 'Không vẽ', 'Nhỏ mờ'], 1, 'Vật gần to và rõ hơn.'),
    Q('Vật ở XA em vẽ thế nào?', ['Tô đen đậm', 'Nhỏ, mờ, màu nhạt hơn', 'Chi tiết hơn vật gần', 'To rõ ràng'], 1, 'Vật xa thì nhỏ và mờ.'),
    Q('Đường chân trời trong tranh phong cảnh là?', ['Đường chéo từ góc', 'Đường viền quanh khung tranh', 'Đường thẳng đứng', 'Đường ranh giới giữa trời và đất (hoặc biển)'], 3, 'Đường chân trời phân chia trời – đất.'),
  ]),

  M(8, 'In mộc bản đơn giản', [
    Q('In mộc bản là?', ['Vẽ trực tiếp lên giấy', 'Khắc hình trên gỗ rồi in lên giấy', 'Cắt giấy dán', 'Chụp ảnh'], 1, 'Mộc bản = khắc gỗ rồi in.'),
    Q('Tranh dân gian Việt Nam in mộc bản nổi tiếng có?', ['Tranh Đông Hồ, tranh Hàng Trống', 'Tranh thuỷ mặc', 'Tranh acrylic', 'Tranh sơn dầu'], 0, 'Đông Hồ, Hàng Trống là tranh dân gian in mộc bản.'),
    Q('Trong lớp, em có thể làm "in" đơn giản bằng?', ['Vẽ tay', 'Dùng máy in', 'Khắc gỗ thật', 'In bằng củ khoai, lá cây, đế chai có sẵn hình'], 3, 'Vật liệu sẵn có cho thực hành đơn giản.'),
    Q('Trước khi in, em cần?', ['Tô màu lên bề mặt khắc/hình rồi áp lên giấy', 'Chỉ áp khô', 'Bỏ qua bước này', 'Đổ nước'], 0, 'Tô màu rồi in.'),
    Q('Đặc điểm tranh in?', ['Không in được', 'Chỉ in được một lần', 'Có thể in nhiều bản giống nhau', 'Mỗi bản phải vẽ riêng'], 2, 'Ưu điểm in là nhân bản nhanh.'),
  ]),

  M(9, 'Tranh Đông Hồ', [
    Q('Tranh Đông Hồ xuất xứ từ?', ['Làng Sình – Thừa Thiên Huế', 'Sài Gòn', 'Hà Nội', 'Làng Đông Hồ – Bắc Ninh'], 3, 'Tranh Đông Hồ là tranh dân gian Bắc Ninh.'),
    Q('Bức "Đám cưới chuột" thuộc dòng tranh?', ['Sơn dầu', 'Thuỷ mặc', 'Đông Hồ', 'Hàng Trống'], 2, '"Đám cưới chuột" là tranh Đông Hồ nổi tiếng.'),
    Q('Màu trong tranh Đông Hồ chủ yếu lấy từ?', ['Mực điện tử', 'Nguyên liệu tự nhiên (lá, vỏ sò, than)', 'Bút bi', 'Sơn công nghiệp'], 1, 'Màu tự nhiên là đặc điểm tranh Đông Hồ.'),
    Q('Giấy in tranh Đông Hồ là?', ['Giấy A4', 'Giấy điệp (có quét lớp vỏ sò)', 'Giấy gói quà', 'Giấy báo'], 1, 'Giấy điệp tạo nền lấp lánh đặc trưng.'),
    Q('Tranh "Vinh hoa", "Phú quý" thường được mua vào?', ['Ngày khai giảng', 'Mùa hè', 'Bất kì lúc nào', 'Dịp Tết để treo trong nhà'], 3, 'Tranh Đông Hồ gắn với Tết Nguyên Đán.'),
  ]),

  M(10, 'Mặt nạ giấy', [
    Q('Làm mặt nạ giấy cần?', ['Sắt thép', 'Đất sét', 'Giấy bìa, kéo, màu vẽ, dây buộc', 'Kính cường lực'], 2, 'Vật liệu đơn giản trong lớp.'),
    Q('Khi cắt giấy, em cần?', ['Cẩn thận, cầm kéo đúng cách', 'Chỉ vào mặt bạn', 'Cắt tuỳ ý không nhìn', 'Đùa giỡn với kéo'], 0, 'An toàn khi dùng kéo là quan trọng.'),
    Q('Mặt nạ nên có?', ['Chỉ một lỗ ở đỉnh đầu', 'Lỗ mắt và lỗ mũi để dễ thở', 'Không có lỗ nào', 'Bịt kín toàn bộ'], 1, 'Lỗ mắt mũi để đeo an toàn.'),
    Q('Trang trí mặt nạ có thể theo?', ['Để trắng không vẽ', 'Viết chữ kín', 'Chỉ một màu đen', 'Chủ đề con vật, hoa lá, nhân vật cổ tích'], 3, 'Đa dạng chủ đề trang trí.'),
    Q('Mặt nạ giấy dùng trong?', ['Lễ hội, trò chơi, biểu diễn ở trường', 'Làm dụng cụ học tập trong lớp', 'Đi học hàng ngày', 'Thay cho mũ bảo hiểm khi đi xe'], 0, 'Mặt nạ phục vụ lễ hội, biểu diễn.'),
  ]),

  M(11, 'Gấp giấy Origami (1) — Cơ bản', [
    Q('Origami là?', ['Đan len', 'Nặn đất sét', 'Nghệ thuật gấp giấy của Nhật Bản', 'Vẽ tranh'], 2, 'Origami = nghệ thuật gấp giấy Nhật Bản.'),
    Q('Khi gấp giấy origami, em cần?', ['Xé rách giấy', 'Gấp thẳng nếp, gọn gàng', 'Vò nhàu giấy', 'Gấp vội vàng'], 1, 'Nếp gấp thẳng là chìa khoá origami đẹp.'),
    Q('Hình cơ bản origami: hình chữ A nghĩa là?', ['Gấp đôi giấy theo hình tam giác (chéo góc)', 'Xé đôi', 'Gấp tròn', 'Cuộn lại'], 0, 'Gấp đôi chéo tạo hình tam giác.'),
    Q('Em có thể gấp origami con gì đơn giản?', ['Con hạc, máy bay, chiếc thuyền', 'Con khủng long', 'Con kì lân', 'Con voi to'], 0, 'Hạc, máy bay, thuyền là origami cơ bản.'),
    Q('Sau khi gấp xong em nên?', ['Vứt đi', 'Dìm xuống nước', 'Trưng bày hoặc tặng bạn bè', 'Đốt đi'], 2, 'Trưng bày, tặng bạn là ý nghĩa.'),
  ]),

  M(12, 'Gấp giấy Origami (2) — Con hạc giấy', [
    Q('Con hạc giấy là biểu tượng?', ['Hoà bình, may mắn', 'Đói nghèo', 'Bệnh tật', 'Chiến tranh'], 0, 'Hạc giấy là biểu tượng hoà bình.'),
    Q('Truyện nổi tiếng về 1000 con hạc giấy gắn với?', ['Cô bé bán diêm', 'Thạch Sanh', 'Cô bé Sadako ở Hiroshima', 'Tấm Cám'], 2, 'Sadako gấp 1000 hạc giấy ước hoà bình.'),
    Q('Để gấp hạc giấy, em bắt đầu từ?', ['Hình tròn', 'Tờ giấy hình vuông', 'Hình chữ nhật dài', 'Hình tam giác'], 1, 'Hạc giấy bắt đầu từ giấy vuông.'),
    Q('Khi gặp khó khăn khi gấp, em nên?', ['Nhờ cô hoặc bạn hướng dẫn', 'Đập bàn', 'Xé giấy', 'Bỏ cuộc'], 0, 'Học hỏi để vượt khó là đúng.'),
    Q('Tặng hạc giấy có ý nghĩa?', ['Khoe khoang', 'Trêu bạn', 'Không ý nghĩa gì', 'Lời chúc may mắn, hoà bình'], 3, 'Tặng hạc gửi lời chúc tốt đẹp.'),
  ]),

  M(13, 'Vẽ con vật yêu thích', [
    Q('Trước khi vẽ con vật, em nên?', ['Vẽ ngay không quan sát', 'Quan sát hình dáng và đặc điểm con vật đó', 'Đoán bừa', 'Vẽ theo cảm hứng không có hình dung'], 1, 'Quan sát giúp vẽ giống.'),
    Q('Vẽ con vật, em chú ý?', ['Tỉ lệ đầu – thân – chân – đuôi', 'Vẽ ngẫu nhiên', 'Chỉ vẽ đầu rất to', 'Vẽ thân không có chân'], 0, 'Tỉ lệ giúp con vật cân đối.'),
    Q('Để con vật sinh động, em có thể thêm?', ['Tô đen hết', 'Để nền trắng trơn', 'Bối cảnh xung quanh (cây, nhà, đồng cỏ…)', 'Không tô màu'], 2, 'Bối cảnh làm tranh sinh động.'),
    Q('Khi tô màu, em nên?', ['Bôi loạn xạ', 'Tô một màu phẳng lì', 'Tô đậm nhạt theo ánh sáng', 'Để trắng'], 2, 'Đậm nhạt tạo khối cho con vật.'),
    Q('Vẽ con vật giúp em?', ['Ghét động vật', 'Sợ động vật', 'Không có ý nghĩa', 'Yêu thiên nhiên và động vật hơn'], 3, 'Vẽ đi liền với cảm xúc yêu thương.'),
  ]),

  M(14, 'Vẽ chân dung bạn', [
    Q('Vẽ chân dung là vẽ?', ['Toàn thân từ đầu đến chân', 'Bàn tay', 'Khuôn mặt người (đầu, mặt, cổ, có thể cả vai)', 'Bàn chân'], 2, 'Chân dung tập trung vào khuôn mặt.'),
    Q('Khuôn mặt người có hình?', ['Lục giác', 'Trứng hoặc oval', 'Vuông cứng', 'Tam giác'], 1, 'Khuôn mặt cơ bản hình oval.'),
    Q('Mắt nằm ở đâu trên khuôn mặt?', ['Khoảng giữa đầu (chia đôi từ trên xuống)', 'Ngoài mặt', 'Trên trán', 'Ngay cằm'], 0, 'Mắt ở khoảng giữa khuôn mặt.'),
    Q('Khi vẽ bạn, em nên?', ['Tô bừa', 'Quan sát đặc điểm riêng của bạn', 'Vẽ ai cũng giống nhau', 'Vẽ thật xấu để trêu bạn'], 1, 'Đặc điểm riêng tạo nét cá nhân.'),
    Q('Vẽ chân dung xong, em nên?', ['Xé tan', 'Tặng bạn hoặc trưng bày, không chế nhạo', 'Vẽ thêm râu để trêu', 'Trêu chọc bạn'], 1, 'Tôn trọng người được vẽ là cần thiết.'),
  ]),

  M(15, 'Vẽ đồ vật quen thuộc', [
    Q('Vẽ tĩnh vật là vẽ?', ['Các vật không di chuyển: hoa quả, đồ dùng, bình hoa…', 'Người đang đi', 'Con vật đang chạy', 'Mây bay'], 0, 'Tĩnh vật = vật không di chuyển.'),
    Q('Bố cục tĩnh vật cần?', ['Đặt mọi vật một góc', 'Để giữa duy nhất', 'Có chính – phụ, không lộn xộn', 'Ngoài khung tranh'], 2, 'Có chính phụ giúp tranh cân đối.'),
    Q('Ánh sáng chiếu vào vật từ một bên tạo?', ['Bóng đổ và sáng – tối khác nhau trên vật', 'Vật phẳng lì', 'Mất vật', 'Tăng kích thước'], 0, 'Ánh sáng tạo khối cho vật.'),
    Q('Khi vẽ chiếc cốc, em chú ý?', ['Vẽ ngẫu nhiên', 'Miệng cốc là hình ellipse khi nhìn nghiêng', 'Miệng cốc là hình vuông', 'Không vẽ miệng'], 1, 'Miệng cốc nhìn nghiêng cho hình ellipse.'),
    Q('Vẽ tĩnh vật rèn cho em?', ['Khả năng nói chuyện', 'Khả năng chạy nhanh', 'Khả năng hát', 'Khả năng quan sát hình khối và ánh sáng'], 3, 'Tĩnh vật rèn quan sát hình khối.'),
  ]),

  M(16, 'Tạo hình từ vật liệu tái chế', [
    Q('Vật liệu tái chế có thể dùng làm mĩ thuật là?', ['Vỏ chai, hộp giấy, giấy báo cũ…', 'Chỉ giấy A4 trắng', 'Đồ mới mua', 'Vàng bạc'], 0, 'Tái chế là dùng đồ cũ làm mới.'),
    Q('Tái chế trong mĩ thuật có ý nghĩa?', ['Chỉ dành cho người lớn, học sinh không làm được', 'Bảo vệ môi trường và sáng tạo', 'Không liên quan', 'Tốn kém'], 1, 'Tái chế giảm rác và kích thích sáng tạo.'),
    Q('Vỏ chai nhựa có thể làm?', ['Bình đựng nước uống hằng ngày', 'Sách vở', 'Quần áo', 'Chậu cây, đồ trang trí, đồ chơi'], 3, 'Vỏ chai làm được nhiều đồ dùng.'),
    Q('Khi dùng kéo, dao trong tái chế, em nên?', ['Tự làm liều', 'Đùa giỡn với dụng cụ', 'Cẩn thận, nhờ người lớn giúp việc khó', 'Vung loạn xạ'], 2, 'An toàn là ưu tiên hàng đầu.'),
    Q('Sản phẩm tái chế đẹp em có thể?', ['Bán lấy tiền tiêu vặt', 'Trưng bày trong lớp, tặng bạn bè', 'Đập vỡ', 'Vứt đi ngay'], 1, 'Trưng bày để khoe và truyền cảm hứng.'),
  ]),

  M(17, 'Đường nét và họa tiết', [
    Q('Đường nét trong mĩ thuật gồm?', ['Đường thẳng, cong, gấp khúc, lượn sóng…', 'Chỉ đường thẳng', 'Không có đường', 'Chỉ đường cong'], 0, 'Nhiều loại đường nét tạo cảm xúc khác nhau.'),
    Q('Đường thẳng đứng gợi cảm giác?', ['Vững chãi, nghiêm trang', 'Loạn xạ', 'Vui tươi', 'Mềm mại'], 0, 'Đường thẳng đứng cho cảm giác vững chãi.'),
    Q('Đường lượn sóng gợi cảm giác?', ['Cứng nhắc', 'Hỗn loạn', 'Đứng yên', 'Mềm mại, uyển chuyển'], 3, 'Đường sóng mềm mại như nước.'),
    Q('Hoạ tiết là?', ['Chữ viết', 'Hình vẽ lung tung', 'Hình vẽ trang trí được lặp lại có quy luật', 'Số đếm'], 2, 'Hoạ tiết = hình trang trí lặp lại.'),
    Q('Hoạ tiết hoa lá, kỉ hà thường dùng trang trí?', ['Khăn, áo, gốm, đồ dùng…', 'Không dùng được', 'Để xé bỏ', 'Chỉ dùng vẽ chơi'], 0, 'Hoạ tiết ứng dụng vào nhiều đồ dùng.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Ba màu cơ bản là?', ['Đỏ – Vàng – Lam', 'Nâu – Be – Hồng', 'Cam – Lục – Tím', 'Đen – Trắng – Xám'], 0, '3 màu cơ bản: đỏ, vàng, lam.'),
    Q('Màu nóng gồm?', ['Lam, lục, tím', 'Nâu', 'Đỏ, cam, vàng', 'Đen trắng'], 2, 'Đỏ, cam, vàng là nóng.'),
    Q('Pha Đỏ + Lam tạo?', ['Xanh lá', 'Cam', 'Tím', 'Hồng nhạt'], 2, 'Đỏ + Lam = Tím.'),
    Q('Tranh Đông Hồ xuất xứ?', ['Bắc Ninh', 'Thừa Thiên Huế', 'Sài Gòn', 'Hà Nội'], 0, 'Làng Đông Hồ – Bắc Ninh.'),
    Q('Origami là nghệ thuật?', ['Vẽ Trung Quốc', 'Đan len Việt Nam', 'Gấp giấy Nhật Bản', 'Nặn đất Hàn Quốc'], 2, 'Origami là gấp giấy Nhật.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Vẽ tranh đề tài "Ngày Tết quê em"', [
    Q('Đề tài "Ngày Tết quê em" có thể vẽ?', ['Cảnh đại dương', 'Cảnh chiến tranh', 'Cảnh phòng thí nghiệm', 'Cảnh chợ Tết, gia đình quây quần, gói bánh chưng, chúc Tết…'], 3, 'Đa dạng cảnh Tết quê.'),
    Q('Màu sắc thường dùng cho tranh Tết?', ['Đỏ, vàng — màu tươi tắn, rực rỡ', 'Toàn nâu', 'Xám buồn', 'Đen tối'], 0, 'Tết dùng tông nóng tươi sáng.'),
    Q('Hình ảnh đặc trưng ngày Tết?', ['Bánh kem', 'Khói súng', 'Tuyết trắng', 'Bánh chưng, hoa đào, hoa mai, câu đối đỏ'], 3, 'Bánh chưng, hoa đào/mai là biểu tượng Tết.'),
    Q('Khi vẽ Tết quê, em nên?', ['Đưa cảm xúc vui tươi vào tranh', 'Vẽ một mình bạn không có ai', 'Vẽ lộn xộn', 'Vẽ buồn bã'], 0, 'Cảm xúc làm tranh sống động.'),
    Q('Tranh hoàn thành em nên?', ['Xé tan', 'Cất ngay', 'Vứt đi', 'Trưng bày ở lớp đón Tết'], 3, 'Trưng bày tạo không khí Tết.'),
  ]),

  M(20, 'Vẽ tranh đề tài "Mẹ của em"', [
    Q('Vẽ về mẹ, em nên?', ['Vẽ người khác', 'Vẽ ngẫu nhiên', 'Để trắng giấy', 'Vẽ những đặc điểm gợi nhớ mẹ và hoạt động mẹ làm'], 3, 'Đặc điểm và hoạt động tạo nét riêng.'),
    Q('Hoạt động thường vẽ về mẹ?', ['Mẹ nấu cơm, mẹ chải tóc cho con, mẹ đọc sách…', 'Mẹ ngủ cả ngày', 'Mẹ đánh nhau', 'Mẹ không làm gì'], 0, 'Hoạt động đời thường ấm áp.'),
    Q('Màu nền tranh về mẹ thường?', ['Lạnh giá', 'Ấm áp, dịu dàng', 'Đen tối', 'Hỗn loạn'], 1, 'Tông ấm gợi tình mẹ.'),
    Q('Tặng tranh cho mẹ là?', ['Món quà ý nghĩa thể hiện tình yêu', 'Không có ý nghĩa', 'Trêu chọc mẹ', 'Việc vô bổ'], 0, 'Tặng tranh tự vẽ rất ý nghĩa.'),
    Q('Ngày 8/3 hoặc ngày của Mẹ, em có thể?', ['Chỉ chúc miệng cho nhanh', 'Quên đi', 'Tặng tranh và lời chúc cho mẹ', 'Vẽ xấu để trêu'], 2, 'Dịp đặc biệt là cơ hội bày tỏ tình cảm.'),
  ]),

  M(21, 'Vẽ tranh đề tài "Quê hương em"', [
    Q('Quê hương em có thể vẽ?', ['Cảnh đồng quê, phố phường, dòng sông, ngôi nhà…', 'Cảnh không gian vũ trụ', 'Cảnh trong sách hư cấu', 'Cảnh nước ngoài'], 0, 'Quê hương là nơi em sinh ra.'),
    Q('Tranh quê có thể có?', ['Cây đa, giếng nước, sân đình hoặc nhà cao tầng, phố phường', 'Không có gì cả', 'Chỉ đồng quê', 'Chỉ đường phố'], 0, 'Tuỳ quê mỗi em có hình ảnh riêng.'),
    Q('Bố cục tranh quê cần?', ['Chỉ một lớp duy nhất', 'Tiền cảnh – trung cảnh – hậu cảnh rõ ràng', 'Lộn xộn', 'Chỉ vẽ trời'], 1, '3 lớp tạo chiều sâu.'),
    Q('Em nên đưa cảm xúc gì vào tranh quê?', ['Tình yêu và sự gắn bó với quê hương', 'Không có cảm xúc', 'Sự lạnh nhạt', 'Sự chán ghét'], 0, 'Cảm xúc làm tranh có hồn.'),
    Q('Vẽ tranh quê hương giúp em?', ['Học toán giỏi', 'Không có ý nghĩa', 'Đá bóng giỏi', 'Yêu quê hương hơn, hiểu vẻ đẹp quê mình'], 3, 'Sáng tạo gắn với tình yêu quê.'),
  ]),

  M(22, 'Tạo hình từ đất nặn', [
    Q('Đất nặn dùng để?', ['Tô lên giấy thay màu vẽ', 'Đắp lên người', 'Nặn hình con vật, đồ vật, người…', 'Vứt đi'], 2, 'Đất nặn để tạo hình.'),
    Q('Khi nặn, em nên?', ['Đập nát', 'Vê tròn, ấn dẹt, kéo dài để tạo hình', 'Bôi lên tường', 'Ăn vào'], 1, 'Các thao tác cơ bản nặn.'),
    Q('Trước khi nặn em nên?', ['Lấy đất ra ăn', 'Đùa giỡn', 'Không cần chuẩn bị', 'Rửa tay sạch, đặt khăn lót lên bàn'], 3, 'Chuẩn bị sạch sẽ là cần thiết.'),
    Q('Sau khi nặn xong em nên?', ['Rửa tay sạch sẽ, cất đất gọn gàng', 'Bỏ vào miệng', 'Vứt đất khắp nơi', 'Để bừa'], 0, 'Vệ sinh sau khi nặn.'),
    Q('Nặn hình con vật em chú ý?', ['Tỉ lệ và đặc điểm con vật', 'Chỉ nặn cục lớn', 'Nặn lung tung', 'Không nặn gì'], 0, 'Tỉ lệ và đặc điểm là chìa khoá.'),
  ]),

  M(23, 'Vẽ tranh đề tài "Bảo vệ môi trường"', [
    Q('Tranh bảo vệ môi trường có thể vẽ?', ['Xả rác', 'Đốt rừng', 'Trồng cây, dọn rác, tiết kiệm nước…', 'Săn bắn'], 2, 'Vẽ hành động tích cực bảo vệ.'),
    Q('Thông điệp tranh bảo vệ môi trường?', ['Cổ vũ xả rác bừa bãi để vẽ tiếp', 'Vô cảm', 'Không có thông điệp', 'Kêu gọi mọi người chung tay bảo vệ thiên nhiên'], 3, 'Tranh truyền tải thông điệp.'),
    Q('Khi vẽ, em nên?', ['Dùng màu sắc tươi sáng cho hành động đẹp, tối cho hành động xấu', 'Tô đen hết', 'Lung tung', 'Để trắng hết'], 0, 'Màu sắc truyền cảm xúc.'),
    Q('Sau khi vẽ xong, em có thể?', ['Xé tan', 'Cất kín', 'Vứt đi', 'Treo tranh ở lớp, kêu gọi bạn cùng bảo vệ môi trường'], 3, 'Lan toả thông điệp.'),
    Q('Em làm gì để bảo vệ môi trường ngoài đời?', ['Vứt rác đúng nơi, tiết kiệm điện nước, trồng cây', 'Đốt rác bừa', 'Xả nước hoang phí', 'Vứt rác đường'], 0, 'Hành động thực tế song song với tranh.'),
  ]),

  M(24, 'Tranh xé dán', [
    Q('Tranh xé dán là tranh?', ['Chụp ảnh', 'In bằng máy', 'Tạo hình bằng cách xé giấy và dán lên nền', 'Vẽ bằng bút'], 2, 'Xé dán: dùng giấy xé tạo hình.'),
    Q('Giấy xé dán có thể dùng?', ['Sắt thép', 'Đất sét', 'Giấy màu, báo, tạp chí cũ', 'Nhựa cứng'], 2, 'Giấy mềm dễ xé.'),
    Q('Khi xé giấy, em nên?', ['Xé rất nhanh không quan tâm', 'Cắt bằng kéo (vì đây là xé dán)', 'Xé bừa', 'Xé theo hình dự định, kiên nhẫn'], 3, 'Xé tay đặc trưng của kĩ thuật này.'),
    Q('Cạnh giấy xé tay tạo cảm giác?', ['Sắc nhọn', 'Không có gì đặc biệt', 'Cứng nhắc', 'Mộc mạc, tự nhiên (khác với cắt kéo thẳng)'], 3, 'Cạnh xé mềm mại, tự nhiên.'),
    Q('Dán giấy cần dùng?', ['Hồ dán hoặc băng dính, vừa đủ không quá nhiều', 'Không dùng gì cả', 'Ghim bấm xuyên qua giấy', 'Sắt nung'], 0, 'Hồ dán là vật liệu cơ bản.'),
  ]),

  M(25, 'Vẽ phong cảnh mùa', [
    Q('Mùa xuân thường vẽ với?', ['Tuyết trắng', 'Hoa nở, lá non, màu tươi sáng', 'Lá khô', 'Lá rụng, màu vàng'], 1, 'Mùa xuân hoa nở, lá non.'),
    Q('Mùa hè thường vẽ với?', ['Mặt trời rực rỡ, biển xanh, cây xanh đậm', 'Tuyết rơi', 'Cây trụi', 'Lá vàng'], 0, 'Hè nắng vàng, biển xanh.'),
    Q('Mùa thu thường vẽ với?', ['Lá vàng, lá đỏ rơi, trời cao trong xanh', 'Mặt trời gay gắt', 'Tuyết rơi', 'Hoa nở'], 0, 'Thu lá vàng đỏ rụng.'),
    Q('Mùa đông thường vẽ với?', ['Tuyết, lá khô, cây trụi (ở vùng có tuyết) hoặc trời xám', 'Lá xanh đậm', 'Nắng gắt', 'Hoa nở rộ'], 0, 'Đông lạnh, ít sức sống.'),
    Q('Vẽ phong cảnh mùa giúp em?', ['Quan sát thiên nhiên 4 mùa và yêu thiên nhiên', 'Học toán', 'Không có ý nghĩa', 'Đá bóng'], 0, 'Quan sát và yêu thiên nhiên.'),
  ]),

  M(26, 'Tô màu nước', [
    Q('Màu nước là?', ['Màu acrylic', 'Màu sáp khô', 'Màu phấn', 'Màu pha với nước để vẽ'], 3, 'Màu nước trong, dùng nước pha.'),
    Q('Vẽ màu nước cần?', ['Bút lông, đĩa pha màu, cốc nước', 'Bút sắt', 'Đất sét', 'Bút bi và thước kẻ'], 0, 'Dụng cụ cơ bản màu nước.'),
    Q('Khi tô màu nước, em nên?', ['Tô đậm ngay', 'Pha quá đặc', 'Pha loãng và tô từ nhạt đến đậm', 'Để khô không pha'], 2, 'Lớp nhạt trước, đậm sau.'),
    Q('Đặc điểm màu nước là?', ['Đặc kín', 'Không pha được', 'Không thấm', 'Trong, có thể chồng lớp, dễ pha loãng'], 3, 'Màu nước trong và linh hoạt.'),
    Q('Sau khi vẽ xong, em nên?', ['Rửa bút và đĩa pha sạch sẽ', 'Đổ màu xuống sàn', 'Để bừa', 'Vứt bút'], 0, 'Vệ sinh dụng cụ.'),
  ]),

  M(27, 'Đối xứng và cân đối', [
    Q('Đối xứng nghĩa là?', ['Hai bên giống nhau qua một trục', 'Hai bên khác hẳn', 'Một bên to một bên nhỏ', 'Không có trục'], 0, 'Đối xứng = giống nhau qua trục.'),
    Q('Hình nào đối xứng?', ['Hình quái dị', 'Hình lung tung', 'Hình trái tim, hình ngôi sao 5 cánh', 'Hình tam giác bất kì không đều'], 2, 'Trái tim, ngôi sao có trục đối xứng.'),
    Q('Cân đối trong tranh nghĩa là?', ['Trống rỗng', 'Lộn xộn', 'Bố cục có trọng lượng đều, hài hoà', 'Lệch về một bên'], 2, 'Cân đối giúp tranh dễ nhìn.'),
    Q('Để vẽ đối xứng, em có thể?', ['Vẽ tự do rồi tô đậm một bên', 'Vẽ bừa', 'Gấp giấy đôi và vẽ một nửa', 'Không cần đối xứng'], 2, 'Gấp giấy là cách đơn giản tạo đối xứng.'),
    Q('Đối xứng trong tự nhiên thấy ở?', ['Đống đá', 'Cánh bướm, lá cây, khuôn mặt người', 'Vũng nước', 'Đám mây bất kì'], 1, 'Tự nhiên có nhiều đối xứng.'),
  ]),

  M(28, 'Tạo mẫu giấy chúc mừng', [
    Q('Thiệp chúc mừng dùng để?', ['Dán lên cặp sách thay nhãn vở', 'Tặng người thân, bạn bè dịp sinh nhật, lễ hội', 'Vứt đi', 'Dùng làm giấy nháp khi học'], 1, 'Thiệp truyền tải tình cảm.'),
    Q('Thiệp chúc mừng nên có?', ['Trống không', 'Hình ảnh đáng sợ', 'Lời nói xấu', 'Hình vẽ đẹp, lời chúc chân thành'], 3, 'Hình và lời chúc tạo thiệp ý nghĩa.'),
    Q('Trang trí thiệp có thể dùng?', ['Đinh sắt', 'Vẽ, dán giấy, nơ, ruy băng', 'Bùn đất', 'Kim tiêm'], 1, 'Vật liệu mềm an toàn.'),
    Q('Lời chúc sinh nhật bạn nên?', ['Chân thành, vui tươi, tích cực', 'Cay đắng', 'Vô cảm', 'Buồn bã'], 0, 'Chân thành là quan trọng nhất.'),
    Q('Khi tự làm thiệp tặng, người nhận sẽ?', ['Coi như một tờ giấy bình thường', 'Cảm động và trân trọng', 'Vứt ngay', 'Không quan tâm'], 1, 'Quà tự làm có giá trị tinh thần lớn.'),
  ]),

  M(29, 'Trang trí lớp học', [
    Q('Trang trí lớp học cần?', ['Loè loẹt khó nhìn', 'Hài hoà, đẹp mắt, phù hợp lứa tuổi', 'Đáng sợ', 'Bừa bộn'], 1, 'Trang trí cần hài hoà.'),
    Q('Trang trí có thể bằng?', ['Đập phá đồ', 'Tranh vẽ, hoa giấy, dây kết, chữ thư pháp', 'Khắc tên lên bàn', 'Vẽ bậy lên tường'], 1, 'Trang trí xanh sạch đẹp.'),
    Q('Khi trang trí cùng nhau, em nên?', ['Phá đồ bạn làm', 'Một mình làm hết', 'Tranh giành', 'Hợp tác, chia việc, tôn trọng ý kiến bạn'], 3, 'Hợp tác là kỹ năng quan trọng.'),
    Q('Trang trí xong em nên?', ['Bóc xé', 'Giữ gìn không phá hỏng', 'Phá ngay', 'Vẽ bậy lên'], 1, 'Giữ gìn thành quả lao động.'),
    Q('Trang trí lớp dịp gì?', ['Không bao giờ', 'Khi phá đồ', 'Chỉ khi cô bắt', 'Tết, 20/11, sinh nhật bạn, cuối năm…'], 3, 'Nhiều dịp đáng trang trí.'),
  ]),

  M(30, 'Vẽ tranh đề tài "Trường em"', [
    Q('Tranh "Trường em" có thể vẽ?', ['Cảnh xa lạ', 'Cảnh ở nhà', 'Cảnh trên đường', 'Cổng trường, lớp học, sân trường, giờ ra chơi…'], 3, 'Trường em có nhiều cảnh đẹp.'),
    Q('Em có thể vẽ hoạt động?', ['Vẽ bậy', 'Phá phách', 'Giờ học, giờ ra chơi, chào cờ, lao động', 'Đánh nhau'], 2, 'Hoạt động tích cực ở trường.'),
    Q('Bố cục có thể có?', ['Cổng trường tiền cảnh, sân và nhà phía sau', 'Trống không', 'Chỉ một góc', 'Lộn xộn'], 0, 'Bố cục giúp tranh rõ ràng.'),
    Q('Cảm xúc em khi vẽ?', ['Yêu trường, vui tươi', 'Buồn bã', 'Tức giận', 'Chán nản'], 0, 'Tình yêu trường thể hiện qua tranh.'),
    Q('Em treo tranh ở?', ['Vứt đi', 'Lớp học, góc học tập ở nhà', 'Gấp nhỏ cất trong cặp không cho ai xem', 'Dùng làm giấy gói đồ'], 1, 'Trưng bày để khoe và giữ kỉ niệm.'),
  ]),

  M(31, 'Hoạ tiết dân tộc Việt Nam', [
    Q('Hoạ tiết trống đồng Đông Sơn có?', ['Hình ngôi sao, chim Lạc, hươu nai, hình người', 'Hình rồng phương Tây', 'Hình kim tự tháp', 'Hình ô tô'], 0, 'Trống đồng có nhiều hoa văn Việt cổ.'),
    Q('Hoa văn thổ cẩm là?', ['Hoa văn dệt trên vải của các dân tộc thiểu số', 'Khắc trên đá', 'In trên giấy', 'Vẽ trên tường'], 0, 'Thổ cẩm là hoa văn dệt.'),
    Q('Hoa văn dân tộc thường có?', ['Lộn xộn', 'Không có quy luật', 'Tính đối xứng và hình hình học', 'Vẽ bừa'], 2, 'Đối xứng và hình học là đặc trưng.'),
    Q('Em cần làm gì với hoạ tiết dân tộc?', ['Coi thường', 'Cười chê', 'Bỏ qua', 'Trân trọng, gìn giữ và học hỏi'], 3, 'Trân trọng di sản dân tộc.'),
    Q('Hoa văn dân tộc ứng dụng vào?', ['Trang phục, gốm, đồ thủ công mỹ nghệ hiện đại', 'Không có giá trị', 'Không có ứng dụng', 'Chỉ trang trí trong bảo tàng'], 0, 'Hoa văn đi vào đời sống hiện đại.'),
  ]),

  M(32, 'Thực hành phối màu', [
    Q('Phối màu hài hoà nghĩa là?', ['Không phối được', 'Các màu kết hợp tạo cảm giác dễ chịu', 'Loè loẹt', 'Đụng độ chói mắt'], 1, 'Hài hoà = dễ chịu.'),
    Q('Hai màu đối lập trên bánh xe màu (tương phản) là?', ['Lam – Lục', 'Đỏ – Cam', 'Vàng – Cam', 'Đỏ – Lục, Vàng – Tím, Cam – Lam'], 3, 'Màu tương phản nằm đối diện bánh xe.'),
    Q('Phối toàn tông lạnh tạo cảm giác?', ['Nóng bức', 'Mát mẻ, yên tĩnh', 'Sôi động', 'Hỗn loạn'], 1, 'Tông lạnh cho cảm giác mát.'),
    Q('Phối toàn tông nóng tạo cảm giác?', ['Lạnh lẽo', 'Yên tĩnh', 'Buồn bã', 'Ấm áp, sôi động'], 3, 'Tông nóng cho cảm giác ấm.'),
    Q('Để tranh nổi bật, em nên?', ['Có một màu chủ đạo và vài màu phụ', 'Mỗi vật một màu khác hẳn', 'Toàn cùng một màu', 'Không tô màu'], 0, 'Chủ đạo + phụ tạo tranh đẹp.'),
  ]),

  M(33, 'Vẽ tranh đề tài tự chọn', [
    Q('Vẽ tranh tự chọn nghĩa là?', ['Bạn chọn cho em', 'Cô bắt buộc chủ đề', 'Không vẽ gì cả', 'Em tự chọn chủ đề mình thích'], 3, 'Tự chọn để bộc lộ cá tính.'),
    Q('Trước khi vẽ, em nên?', ['Bỏ cuộc', 'Vẽ ngay không nghĩ', 'Đợi cô vẽ', 'Phác ý tưởng ra giấy, chuẩn bị màu'], 3, 'Lập kế hoạch trước khi vẽ.'),
    Q('Chủ đề nào em có thể chọn?', ['Gia đình, ước mơ, du lịch, hoạt động yêu thích…', 'Bạo lực', 'Không có chủ đề', 'Chỉ một chủ đề duy nhất'], 0, 'Đa dạng chủ đề tích cực.'),
    Q('Khi gặp khó khăn vẽ, em nên?', ['Tham khảo tranh khác hoặc hỏi cô/bạn', 'Bỏ cuộc', 'Xé tranh', 'Chép nguyên tranh của bạn cho nhanh'], 0, 'Học hỏi là cách vượt khó.'),
    Q('Bức tranh tự chọn thể hiện?', ['Không có gì', 'Sao chép bạn', 'Cá tính và cảm xúc riêng của em', 'Sao chép cô'], 2, 'Cá tính là điều đẹp nhất.'),
  ]),

  M(34, 'Trưng bày sản phẩm cuối năm', [
    Q('Trưng bày sản phẩm là?', ['Sắp xếp tranh, đồ thủ công cho người khác xem', 'Vứt sản phẩm', 'Đốt đi', 'Cất kín không cho ai biết'], 0, 'Trưng bày để chia sẻ.'),
    Q('Khi trưng bày, em nên?', ['Vứt bừa', 'Phá tranh bạn', 'Chỉ trưng bày của mình', 'Sắp xếp đẹp mắt, có tên tác giả và ngày tháng'], 3, 'Sắp xếp khoa học.'),
    Q('Khi xem tranh bạn, em nên?', ['Chê bai', 'Phá tranh bạn', 'Cười nhạo', 'Tôn trọng, nhận xét tích cực'], 3, 'Tôn trọng và góp ý xây dựng.'),
    Q('Sau triển lãm, sản phẩm em nên?', ['Xé tan', 'Cất giữ làm kỉ niệm hoặc tặng người thân', 'Vứt đi', 'Để ngoài sân trường cho khô'], 1, 'Giữ kỉ niệm sáng tạo.'),
    Q('Trưng bày giúp em?', ['Tức giận', 'Không có ý nghĩa', 'Tự tin và học hỏi từ tác phẩm của bạn', 'Buồn bã'], 2, 'Trưng bày là cơ hội học hỏi.'),
  ]),

  M(35, 'Tổng kết cuối năm', [
    Q('Trong năm em đã học các kĩ thuật?', ['Chỉ nặn', 'Vẽ, gấp, xé dán, in, nặn, trang trí…', 'Chỉ vẽ', 'Không có gì'], 1, 'Đa dạng kĩ thuật trong Lớp 3.'),
    Q('Ba màu cơ bản là?', ['Hồng – Be – Nâu', 'Đen – Trắng – Xám', 'Đỏ – Vàng – Lam', 'Cam – Lục – Tím'], 2, '3 màu cơ bản.'),
    Q('Tranh dân gian Việt Nam em đã học?', ['Thuỷ mặc', 'Đông Hồ, Hàng Trống', 'Sơn dầu', 'Acrylic'], 1, 'Hai dòng tranh dân gian tiêu biểu.'),
    Q('Origami là nghệ thuật gấp giấy của?', ['Trung Quốc', 'Nhật Bản', 'Việt Nam', 'Hàn Quốc'], 1, 'Origami Nhật Bản.'),
    Q('Để giỏi mĩ thuật hơn em cần?', ['Quan sát kĩ và luyện tập đều', 'Học vì điểm', 'Bỏ cuộc khi khó', 'Không cần làm gì'], 0, 'Quan sát và luyện tập là chìa khoá.'),
  ], { difficulty: 2 }),
];

export const P3MT_SCENARIOS = indexBy(P3MT_WEEKS);
