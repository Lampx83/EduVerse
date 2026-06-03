// ============================================================
// Lớp 5 · MĨ THUẬT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Mĩ thuật Lớp 5.
// ID prefix: "P5MT-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5MT', 'my-thuat', n, title, qs, opts);

export const P5MT_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Giới thiệu chương trình — Vẽ tự do', [
    Q('Mĩ thuật là?', ['Nghệ thuật của cái đẹp thị giác', 'Môn thể dục', 'Môn toán', 'Môn ca hát'], 0, 'Mĩ thuật là nghệ thuật thị giác.'),
    Q('Đồ dùng cơ bản môn mĩ thuật?', ['Bóng đá', 'Sách toán', 'Bút chì, tẩy, màu vẽ, giấy', 'Guitar'], 2, 'Bút, màu, giấy là cơ bản.'),
    Q('Vẽ tự do giúp em?', ['Thể hiện ý tưởng cá nhân', 'Mất thời gian', 'Bị mắng', 'Không lợi gì'], 0, 'Vẽ tự do để thể hiện cá tính.'),
    Q('Trước khi vẽ, em nên?', ['Hỏi bạn chép', 'Bỏ qua', 'Vẽ ngay', 'Quan sát và suy nghĩ ý tưởng'], 3, 'Quan sát và lên ý tưởng trước.'),
  ]),

  M(2, 'Phối cảnh đơn giản — Đường tầm mắt', [
    Q('Đường tầm mắt là?', ['Đường ngang chia tầm nhìn (chân trời)', 'Đường thẳng đứng', 'Đường viền ngoài của vật thể', 'Đường cong'], 0, 'Đường tầm mắt = đường chân trời ở mắt người vẽ.'),
    Q('Vật ở xa đường tầm mắt sẽ?', ['Không đổi', 'Nhỏ hơn, gần đường tầm mắt', 'To hơn', 'Biến mất'], 1, 'Càng xa càng nhỏ và gần đường tầm mắt.'),
    Q('Vật ở gần thì?', ['Không đổi', 'To hơn, chi tiết rõ hơn', 'Nhỏ hơn', 'Mờ hơn'], 1, 'Vật gần to và rõ hơn.'),
    Q('Phối cảnh giúp tranh?', ['Phẳng như hình vẽ trên giấy', 'Có chiều sâu, không gian thật', 'Mất tỉ lệ giữa các vật', 'Khó hiểu'], 1, 'Phối cảnh tạo chiều sâu cho tranh.'),
  ]),

  M(3, 'Phối cảnh — Điểm tụ', [
    Q('Điểm tụ là?', ['Điểm chính giữa bức tranh', 'Điểm trên trời', 'Điểm trên đường tầm mắt mà các đường song song hội tụ', 'Một góc tranh'], 2, 'Điểm tụ nằm trên đường tầm mắt.'),
    Q('Một điểm tụ thường dùng cho?', ['Chân dung', 'Cảnh nghiêng', 'Cảnh nhìn thẳng (đường, hành lang)', 'Tĩnh vật'], 2, 'Phối cảnh 1 điểm tụ cho góc nhìn thẳng.'),
    Q('Đường ray xe lửa nhìn xa?', ['Hội tụ về 1 điểm', 'Cong lên ở phía xa', 'Phân tán', 'Song song'], 0, 'Hai đường ray hội tụ ở xa (điểm tụ).'),
    Q('Phối cảnh giúp em vẽ?', ['Vẽ ngẫu nhiên', 'Vẽ trừu tượng', 'Chỉ vẽ phẳng', 'Nhà cửa, đường phố có chiều sâu'], 3, 'Phối cảnh dùng vẽ nhà cửa, đường có chiều sâu.'),
  ]),

  M(4, 'Vẽ tĩnh vật nâng cao — Lọ hoa và quả', [
    Q('Tĩnh vật là?', ['Tranh phong cảnh', 'Tranh động vật', 'Tranh người', 'Tranh các vật đứng yên (lọ, hoa, quả…)'], 3, 'Tĩnh vật vẽ vật không di chuyển.'),
    Q('Khi xếp mẫu, em nên?', ['Để lung tung', 'Xếp đều như xếp hàng', 'Đặt cao bằng nhau', 'Xếp có chính-phụ, cao-thấp xen kẽ'], 3, 'Bố cục có chính-phụ.'),
    Q('Bước đầu tiên vẽ tĩnh vật?', ['Vẽ bóng', 'Vẽ chi tiết', 'Vẽ phác khung hình chung', 'Tô màu ngay'], 2, 'Phác khung hình chung trước.'),
    Q('Đậm nhạt giúp tranh?', ['Chỉ thể hiện đường nét', 'Khó nhìn', 'Có khối, không gian', 'Phẳng, thiếu chiều sâu'], 2, 'Đậm nhạt tạo khối và không gian.'),
    Q('Khi tô màu tĩnh vật?', ['Tô trắng hết', 'Tô tuỳ ý', 'Quan sát màu thật và tô theo', 'Tô đen hết'], 2, 'Quan sát và tô theo màu thật.'),
  ]),

  M(5, 'Vẽ tĩnh vật (tiếp) — Đậm nhạt', [
    Q('Vật ở sáng nhất?', ['Bóng đổ', 'Phần khuất', 'Phần đón nguồn sáng', 'Phía dưới'], 2, 'Phần đón sáng là sáng nhất.'),
    Q('Bóng đổ là?', ['Bóng trong nhà', 'Bóng bên trong vật (bóng bản thân)', 'Bóng vật in trên mặt phẳng', 'Bóng trên người vẽ'], 2, 'Bóng đổ in trên mặt phẳng đặt vật.'),
    Q('Vẽ đậm nhạt bằng chì?', ['Dùng độ ấn và nét chì', 'Tô trắng', 'Không tô', 'Tô đen kịt'], 0, 'Đậm nhạt phụ thuộc độ ấn chì.'),
    Q('Chì 2B so với HB?', ['HB đậm hơn', 'Không liên quan', 'Bằng nhau', '2B đậm hơn HB'], 3, '2B đậm hơn HB.'),
  ]),

  M(6, 'Chân dung tự hoạ', [
    Q('Chân dung tự hoạ là?', ['Vẽ tĩnh vật', 'Tự vẽ chân dung của mình', 'Vẽ cảnh', 'Vẽ người khác'], 1, 'Tự vẽ chính mình.'),
    Q('Khuôn mặt người chia làm?', ['2 phần', '3 phần bằng nhau (trán, mũi, miệng-cằm)', '5 phần', 'Không chia'], 1, 'Mặt người chia 3 phần ngang.'),
    Q('Hai mắt cách nhau khoảng?', ['Bằng cả mặt', 'Bằng chiều dài 1 mắt', 'Sát nhau', 'Rất xa'], 1, 'Khoảng cách 2 mắt = chiều dài 1 mắt.'),
    Q('Vẽ chân dung em nên dùng?', ['Gương soi để quan sát', 'Vẽ tưởng tượng', 'Không cần', 'Quan sát bạn'], 0, 'Soi gương để tự hoạ.'),
    Q('Khi vẽ tự hoạ em thể hiện?', ['Người khác', 'Không gì', 'Đặc điểm và cảm xúc của mình', 'Đồ vật'], 2, 'Thể hiện chính mình.'),
  ]),

  M(7, 'Hoàn thiện chân dung tự hoạ — Tô màu', [
    Q('Màu da người Á?', ['Xanh lam nhạt', 'Tím than', 'Vàng nhạt, hồng', 'Đỏ tươi'], 2, 'Da Á thường vàng nhạt, hồng.'),
    Q('Khi tô màu mặt, em nên?', ['Không tô', 'Tô đều, có vùng sáng-tối nhẹ', 'Tô loè loẹt', 'Tô đen kịt'], 1, 'Tô đều và có sáng tối nhẹ.'),
    Q('Vùng sáng trên mặt?', ['Trán, gò má, sống mũi', 'Hai bên thái dương', 'Cằm dưới', 'Hốc mắt'], 0, 'Trán, gò má, sống mũi đón sáng.'),
    Q('Mái tóc cần?', ['Bỏ qua', 'Tô loè loẹt', 'Vẽ theo lớp, hướng tóc', 'Tô màu đen kịt'], 2, 'Vẽ theo lớp và hướng tóc.'),
  ]),

  M(8, 'Vẽ tranh đề tài "Trường em"', [
    Q('Đề tài "Trường em" có thể vẽ?', ['Sao Hoả', 'Núi rừng', 'Lớp học, sân trường, thầy cô bạn bè', 'Đại dương'], 2, 'Cảnh quen thuộc ở trường.'),
    Q('Bố cục tranh nên?', ['Lệch hẳn một bên', 'Có chính-phụ, không gian', 'Trống trải', 'Đầy hết khung'], 1, 'Bố cục có chính-phụ.'),
    Q('Hình ảnh chính nên?', ['Mờ, nằm phía sau', 'To, nổi bật, ở vị trí trung tâm', 'Nhỏ và lệch', 'Khó thấy'], 1, 'Chính phải to và nổi bật.'),
    Q('Màu sắc tranh trường em?', ['Tươi sáng, vui tươi', 'Một màu duy nhất', 'Đen tối', 'U buồn'], 0, 'Tươi sáng và vui.'),
    Q('Khi vẽ thầy cô bạn bè?', ['Chỉ vẽ đầu', 'Bỏ qua', 'Vẽ tĩnh', 'Thể hiện cảm xúc, hoạt động'], 3, 'Thể hiện cảm xúc và hoạt động.'),
  ]),

  M(9, 'In tranh khắc gỗ (giới thiệu)', [
    Q('Tranh khắc gỗ là?', ['Đốt gỗ', 'Khắc hình trên gỗ rồi in ra giấy', 'Sơn lên gỗ', 'Vẽ trên gỗ'], 1, 'Khắc và in từ tấm gỗ.'),
    Q('Tranh dân gian Đông Hồ là?', ['Tranh lụa', 'Tranh sơn dầu', 'Tranh khắc gỗ truyền thống', 'Tranh giấy'], 2, 'Tranh Đông Hồ là khắc gỗ.'),
    Q('Tranh Đông Hồ in trên?', ['Giấy điệp', 'Ván gỗ thông', 'Vải lụa trắng', 'Giấy lụa'], 0, 'Giấy điệp là loại giấy đặc trưng.'),
    Q('Đặc điểm tranh Đông Hồ?', ['Đơn sắc', 'Rất phức tạp', 'Cầu kì phương Tây', 'Đường nét đơn giản, màu sắc tự nhiên'], 3, 'Đơn giản và dùng màu tự nhiên.'),
  ]),

  M(10, 'Thực hành in tranh đơn giản', [
    Q('Em có thể in tranh bằng?', ['Bút lông thường', 'Bút chì màu sáp', 'Sơn dầu', 'Khoai tây, củ, mút xốp khắc hình'], 3, 'Có thể dùng vật liệu dễ tìm.'),
    Q('Bước đầu in tranh?', ['Tô màu giấy', 'Cắt giấy', 'Bỏ qua', 'Vẽ hình lên vật khắc'], 3, 'Vẽ hình lên vật trước rồi khắc.'),
    Q('Sau khi khắc, em?', ['Bôi màu lên rồi áp xuống giấy', 'Ngâm vào nước cho mềm', 'Cắt nhỏ thành mảnh', 'Cất đi'], 0, 'Bôi màu rồi áp lên giấy in.'),
    Q('Tranh in có ưu điểm?', ['In được nhiều bản giống nhau', 'Không có lợi', 'Chỉ 1 bản', 'Mất nhiều thời gian'], 0, 'In được nhiều bản giống nhau.'),
  ]),

  M(11, 'Làm thiệp 3D — Bước 1', [
    Q('Thiệp 3D là?', ['Thiệp giấy thường', 'Thiệp có hình nổi khi mở ra', 'Thiệp phẳng', 'Tờ giấy trắng'], 1, 'Thiệp 3D có hình nổi khi mở.'),
    Q('Vật liệu làm thiệp 3D?', ['Đất sét', 'Đá cuội và vỏ sò', 'Kim loại', 'Giấy bìa, kéo, keo'], 3, 'Giấy bìa, kéo, keo là cơ bản.'),
    Q('Kĩ thuật cơ bản?', ['Gấp, cắt, dán theo lớp', 'Xé giấy', 'Vẽ lên giấy', 'Đốt giấy'], 0, 'Gấp, cắt, dán theo lớp tạo hình 3D.'),
    Q('Khi cắt giấy cần?', ['Không nhìn', 'Cắt theo đường gấp cũ', 'Vội vàng', 'Cẩn thận để không đứt tay'], 3, 'Cẩn thận khi cắt.'),
  ]),

  M(12, 'Làm thiệp 3D — Hoàn thiện', [
    Q('Trang trí thiệp dùng?', ['Bê tông', 'Đất sét ướt', 'Nước sôi', 'Màu vẽ, sticker, ruy băng'], 3, 'Trang trí bằng vật liệu mỹ thuật.'),
    Q('Thiệp 3D phù hợp tặng?', ['Tự giữ', 'Bạn bè, thầy cô, người thân', 'Treo trên cây', 'Vứt đi'], 1, 'Để tặng người thân yêu.'),
    Q('Lời chúc trên thiệp nên?', ['Chân thành, ngắn gọn', 'Chỉ ghi tên người tặng', 'Cãi nhau', 'Dài lê thê'], 0, 'Chân thành và ngắn gọn.'),
    Q('Khi tặng thiệp, em nên?', ['Không chào', 'Tặng bằng hai tay, lễ phép', 'Đưa hờ hững', 'Đặt vội xuống bàn'], 1, 'Tặng bằng hai tay là lễ phép.'),
  ]),

  M(13, 'Vẽ tranh đề tài "Ước mơ"', [
    Q('Đề tài "Ước mơ" em có thể vẽ?', ['Tĩnh vật', 'Nghề nghiệp tương lai, ước mơ cá nhân', 'Cảnh chiến tranh', 'Núi rừng'], 1, 'Vẽ về ước mơ của mình.'),
    Q('Khi vẽ em nên?', ['Sao chép bạn', 'Vẽ trừu tượng khó hiểu', 'Bỏ trắng', 'Thể hiện rõ ước mơ qua hình ảnh'], 3, 'Thể hiện rõ ý tưởng.'),
    Q('Màu sắc tranh ước mơ?', ['Đơn sắc', 'Buồn bã', 'Trầm tối, ít sức sống', 'Tươi sáng, hy vọng'], 3, 'Tươi sáng thể hiện hy vọng.'),
    Q('Bố cục có thể?', ['Trung tâm, đối xứng hoặc tự do hợp lí', 'Trống trải', 'Lung tung', 'Lệch lạc'], 0, 'Bố cục hợp lí.'),
  ]),

  M(14, 'Tô màu tranh "Ước mơ"', [
    Q('Phối màu hài hoà nghĩa là?', ['Mỗi vật một màu khác hẳn', 'Các màu hợp nhau, không chói', 'Đối nghịch', 'Loè loẹt'], 1, 'Phối hài hoà là hợp nhau.'),
    Q('Bộ ba màu cơ bản?', ['Cam, lục, tím', 'Đen, trắng, xám', 'Đỏ, vàng, lam', 'Xanh, hồng, tím'], 2, '3 màu cơ bản: đỏ, vàng, lam.'),
    Q('Pha đỏ + vàng được?', ['Lục lá cây', 'Cam', 'Tím nhạt', 'Xanh lam'], 1, 'Đỏ + vàng = cam.'),
    Q('Pha lam + vàng được?', ['Đỏ tươi', 'Cam đậm', 'Lục', 'Tím than'], 2, 'Lam + vàng = lục.'),
  ]),

  M(15, 'Vẽ tranh đề tài "Quê hương đổi mới"', [
    Q('"Quê hương đổi mới" có thể vẽ?', ['Tĩnh vật', 'Cảnh chiến tranh', 'Chỉ cảnh xưa', 'Đường mới, nhà mới, cầu mới…'], 3, 'Vẽ những đổi mới ở quê.'),
    Q('Hình ảnh đặc trưng quê đổi mới?', ['Đường nhựa, điện sáng, trường mới', 'Không có gì', 'Chỉ rừng', 'Đường đất, nhà tranh'], 0, 'Đường nhựa, điện sáng, trường mới.'),
    Q('Người dân trong tranh?', ['Lười biếng', 'Cãi nhau', 'Buồn bã', 'Vui tươi, lao động hăng say'], 3, 'Người dân vui tươi.'),
    Q('Màu sắc?', ['Tươi sáng, đa dạng', 'Đen tối', 'Một màu', 'U buồn'], 0, 'Tươi sáng và đa dạng.'),
  ]),

  M(16, 'Hoàn thiện tranh "Quê hương đổi mới"', [
    Q('Để tranh có chiều sâu?', ['Vẽ vật xa nhỏ, vật gần to', 'Vẽ tất cả bằng nhau', 'Không cần', 'Vẽ chồng đè'], 0, 'Phối cảnh xa-gần.'),
    Q('Bóng đổ giúp tranh?', ['Có chiều và không gian', 'Tối và rối mắt', 'Mất cảm giác khối', 'Khó nhìn'], 0, 'Bóng tạo chiều và không gian.'),
    Q('Khi hoàn thiện em nên?', ['Kiểm tra lại bố cục, màu sắc', 'Vẽ vội', 'Bỏ giữa chừng', 'Không kiểm tra'], 0, 'Kiểm tra trước khi nộp.'),
    Q('Khung tranh nên?', ['Lệch lạc', 'Có vết tay bẩn', 'Cong vẹo', 'Ngay ngắn, sạch sẽ'], 3, 'Ngay ngắn và sạch sẽ.'),
  ]),

  M(17, 'Trưng bày bài cuối HK1', [
    Q('Trưng bày bài giúp?', ['Học hỏi lẫn nhau, được khen', 'Không lợi gì', 'Bị mắng', 'Mất bài'], 0, 'Trưng bày để chia sẻ và học hỏi.'),
    Q('Khi xem bài bạn em nên?', ['Phá bài', 'Chê bai', 'Cười nhạo', 'Khen điểm tốt, góp ý nhẹ nhàng'], 3, 'Khen và góp ý lịch sự.'),
    Q('Bài đẹp có?', ['Bố cục tốt, màu hài hoà, ý nghĩa', 'Không có ý', 'Sao chép từ tranh khác', 'Lung tung'], 0, 'Bố cục, màu, ý nghĩa.'),
    Q('Em treo bài nên?', ['Không tên', 'Treo ngay ngắn, đề tên', 'Vứt sàn', 'Treo lệch'], 1, 'Ngay ngắn và đề tên.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khi làm bài kiểm tra mĩ thuật, em nên?', ['Bình tĩnh, sáng tạo', 'Bỏ trắng', 'Sao chép', 'Vội vàng'], 0, 'Bình tĩnh và sáng tạo.'),
    Q('Thời gian làm bài cần?', ['Phác hết giờ', 'Không phân bố', 'Phân bố hợp lí cho phác - vẽ - tô', 'Tô màu hết giờ'], 2, 'Phân bố thời gian hợp lí.'),
    Q('Bài kiểm tra đánh giá?', ['Bố cục, đường nét, màu sắc, ý tưởng', 'Chỉ đường nét', 'Chỉ màu', 'Chỉ ý tưởng'], 0, 'Đánh giá tổng hợp 4 yếu tố.'),
    Q('Trước khi nộp bài?', ['Vứt nộp', 'Kí tên, kiểm tra lại', 'Cãi cô', 'Không kí'], 1, 'Kí tên và kiểm tra lại.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Vẽ tranh đề tài "Ngày Tết quê em"', [
    Q('"Ngày Tết quê em" có thể vẽ?', ['Bánh chưng, cây mai-đào, chợ Tết', 'Tĩnh vật', 'Cảnh chiến', 'Núi rừng'], 0, 'Cảnh đặc trưng ngày Tết.'),
    Q('Màu chủ đạo ngày Tết?', ['Trắng buồn', 'Xanh lá nhạt', 'Nâu trầm', 'Đỏ, vàng (may mắn)'], 3, 'Đỏ vàng là màu Tết.'),
    Q('Cây miền Bắc ngày Tết?', ['Bằng lăng', 'Mai vàng', 'Đào', 'Phượng'], 2, 'Miền Bắc chơi đào.'),
    Q('Cây miền Nam ngày Tết?', ['Quất cảnh', 'Đào phai', 'Phượng', 'Mai'], 3, 'Miền Nam chơi mai vàng.'),
  ]),

  M(20, 'Hoàn thiện tranh "Ngày Tết quê em"', [
    Q('Hình ảnh chính tranh Tết?', ['Cãi nhau', 'Nhà tan vỡ', 'Buồn bã', 'Người sum họp, chúc Tết'], 3, 'Sum họp và chúc Tết.'),
    Q('Trang phục ngày Tết?', ['Áo dài, áo mới', 'Quần áo bẩn', 'Đồ ngủ', 'Đồ thể thao'], 0, 'Áo dài hoặc áo mới.'),
    Q('Cảnh nền có thể?', ['Cảnh tang', 'Không có gì', 'Cảnh chiến', 'Cờ hoa, pháo bông (giấy)'], 3, 'Cờ hoa, pháo bông giấy trang trí.'),
    Q('Không khí tranh?', ['Trang nghiêm, trầm lắng', 'Tĩnh lặng', 'Yên ả, vắng người', 'Vui tươi, rộn ràng'], 3, 'Vui tươi, rộn ràng.'),
  ]),

  M(21, 'Nặn — Tạo dáng người', [
    Q('Vật liệu nặn?', ['Bột màu khô', 'Giấy báo cứng', 'Sỏi nhỏ', 'Đất nặn, đất sét'], 3, 'Đất nặn hoặc đất sét.'),
    Q('Khi nặn người, bắt đầu từ?', ['Khối tổng thể (đầu, mình, chân tay)', 'Quần áo và phụ kiện', 'Móng tay', 'Khuôn mặt chi tiết'], 0, 'Bắt đầu khối tổng thể.'),
    Q('Tỉ lệ người trưởng thành cao bằng?', ['10 đầu', 'Khoảng 7 - 7,5 đầu', '3 đầu', 'Không tỉ lệ'], 1, 'Khoảng 7 - 7,5 đầu.'),
    Q('Trẻ em có tỉ lệ?', ['Khoảng 4 - 5 đầu', '1 đầu', '10 đầu', '7 đầu'], 0, 'Trẻ em khoảng 4-5 đầu.'),
  ]),

  M(22, 'Vẽ tranh "Lễ hội quê em"', [
    Q('Lễ hội quê em có thể vẽ?', ['Cảnh chiến', 'Đua thuyền, kéo co, múa lân', 'Núi rừng', 'Tĩnh vật'], 1, 'Cảnh lễ hội đặc trưng.'),
    Q('Lễ hội có gì đặc trưng?', ['Buồn bã', 'Tĩnh lặng', 'Đông người, cờ hoa, trò chơi', 'Vắng vẻ'], 2, 'Đông người và vui tươi.'),
    Q('Khi vẽ nhiều người?', ['Sắp xếp xa-gần, cao-thấp', 'Chồng đè', 'Xếp đều', 'Lung tung'], 0, 'Sắp xếp xa gần có nhịp.'),
    Q('Không khí lễ hội?', ['Tĩnh lặng', 'Náo nhiệt, vui tươi', 'Trang nghiêm, ít người', 'Mờ ảo, xa vắng'], 1, 'Náo nhiệt và vui.'),
  ]),

  M(23, 'Vẽ tranh "Bảo vệ môi trường"', [
    Q('"Bảo vệ môi trường" có thể vẽ?', ['Xả rác', 'Đốt rừng', 'Trồng cây, dọn rác, phân loại', 'Phá cây'], 2, 'Hành động bảo vệ môi trường.'),
    Q('Màu sắc nên thiên về?', ['Đỏ máu', 'Nâu đất khô cằn', 'Xanh (cây cỏ, bầu trời sạch)', 'Xám khói nhà máy'], 2, 'Xanh tượng trưng môi trường sạch.'),
    Q('Khẩu hiệu trên tranh?', ['"Xả thải"', '"Phá rừng"', '"Đốt rác"', '"Hãy bảo vệ môi trường"'], 3, 'Khẩu hiệu tích cực.'),
    Q('Tranh em hướng tới?', ['Thông điệp tích cực, dễ hiểu', 'Tiêu cực', 'Khó hiểu', 'Không ý nghĩa'], 0, 'Thông điệp tích cực, rõ ràng.'),
  ]),

  M(24, 'Hoàn thiện tranh "Bảo vệ môi trường"', [
    Q('Cây xanh trong tranh nên?', ['Khô héo', 'Cháy đen', 'Chỉ vẽ phác bằng chì', 'Nhiều và tươi tốt'], 3, 'Cây tươi tốt thể hiện môi trường sạch.'),
    Q('Người dân làm gì?', ['Trồng cây, nhặt rác, phân loại', 'Ngồi không', 'Xả rác', 'Đốt cây'], 0, 'Hành động tích cực.'),
    Q('Nguồn nước trong tranh?', ['Đục ngầu phù sa', 'Trong xanh', 'Đen ngầu', 'Ô nhiễm'], 1, 'Nước trong xanh là thông điệp tốt.'),
    Q('Bầu trời?', ['Xanh trong, ít khói', 'Khói mù', 'Đỏ rực', 'Đen kịt'], 0, 'Bầu trời xanh.'),
  ]),

  M(25, 'Vẽ tranh chân dung bạn', [
    Q('Vẽ chân dung bạn em cần?', ['Quan sát kĩ đặc điểm khuôn mặt', 'Vẽ tưởng tượng', 'Sao chép', 'Bỏ qua'], 0, 'Quan sát đặc điểm thật.'),
    Q('Đặc điểm cần chú ý?', ['Chỉ tóc', 'Không gì', 'Chỉ mắt', 'Hình mặt, mắt, mũi, miệng, tóc'], 3, 'Tất cả đặc điểm khuôn mặt.'),
    Q('Khi vẽ bạn em nên?', ['Vẽ xấu', 'Vẽ chế giễu', 'Vẽ giống nhưng vẫn lịch sự', 'Bôi bác'], 2, 'Vẽ giống và tôn trọng bạn.'),
    Q('Thái độ với mẫu (bạn)?', ['Cười nhạo', 'Quát nạt', 'Tôn trọng, biết ơn', 'Bỏ qua'], 2, 'Tôn trọng người làm mẫu.'),
  ]),

  M(26, 'In hình bằng lá cây', [
    Q('In bằng lá cây tạo?', ['Hình tròn', 'Hình lá có gân đẹp', 'Không có hình', 'Hình vuông'], 1, 'Lá in lên giấy có gân đẹp.'),
    Q('Bước in bằng lá?', ['Đốt lá', 'Bôi màu mặt sau lá, ép lên giấy', 'Phơi khô lá trước khi in', 'Vẽ lên lá'], 1, 'Bôi màu rồi ép lên giấy.'),
    Q('Lá nào in đẹp?', ['Lá cuộn', 'Lá có gân rõ', 'Lá khô vụn', 'Lá nát'], 1, 'Lá có gân rõ in đẹp.'),
    Q('Sản phẩm in lá dùng để?', ['Trang trí, làm thiệp', 'Lót nồi khi nấu', 'Bỏ qua', 'Vứt đi'], 0, 'Trang trí hoặc làm thiệp.'),
  ]),

  M(27, 'Trang trí khăn vuông', [
    Q('Khăn vuông được trang trí theo?', ['Đối xứng qua tâm', 'Lung tung', 'Không cần', 'Một bên'], 0, 'Trang trí đối xứng qua tâm.'),
    Q('Hoạ tiết trang trí?', ['Đồ vật ngẫu nhiên', 'Hoa lá, hình kỉ hà', 'Chữ viết tay dày đặc', 'Mặt người'], 1, 'Hoa lá và hình kỉ hà thường dùng.'),
    Q('Màu sắc khăn?', ['Một màu duy nhất', 'Hài hoà, không quá nhiều màu', 'Đen tối', 'Loè loẹt'], 1, 'Hài hoà, không loè loẹt.'),
    Q('Bố cục khăn vuông có?', ['Tâm, viền và đường chéo', 'Một mảng', 'Lung tung', 'Không cấu trúc'], 0, 'Tâm, viền và đường chéo là cấu trúc cơ bản.'),
  ]),

  M(28, 'Xé dán giấy — Tranh tự chọn', [
    Q('Xé dán là?', ['Cắt giấy', 'Vẽ giấy', 'Xé giấy màu rồi dán thành tranh', 'Đốt giấy'], 2, 'Xé giấy rồi dán thành tranh.'),
    Q('Vật liệu xé dán?', ['Bút lông và mực tàu', 'Giấy màu, keo, giấy nền', 'Đất sét nặn', 'Sáp màu tô nền'], 1, 'Giấy màu là vật liệu chính.'),
    Q('Khi xé giấy em nên?', ['Cắt thẳng', 'Xé tự nhiên, không cần thẳng', 'Dùng kéo cắt thật thẳng', 'Vò nát'], 1, 'Xé tự nhiên cho cảm giác mộc.'),
    Q('Tranh xé dán có?', ['Bề mặt nhẵn bóng như tranh in', 'Hiệu ứng mộc mạc, độc đáo', 'Khó hiểu', 'Phẳng nhạt'], 1, 'Mộc mạc và độc đáo.'),
  ]),

  M(29, 'Vẽ tranh đề tài "An toàn giao thông"', [
    Q('Tranh ATGT có thể vẽ?', ['Không gì', 'Đua xe', 'Vượt đèn đỏ', 'Đèn giao thông, đội mũ bảo hiểm, qua đường đúng vạch'], 3, 'Cảnh tuân thủ luật giao thông.'),
    Q('Đèn đỏ nghĩa là?', ['Chuẩn bị', 'Dừng lại', 'Đi nhanh', 'Đi tiếp'], 1, 'Đỏ là dừng.'),
    Q('Khi qua đường em nên?', ['Đi đúng vạch, quan sát', 'Đi giữa đường', 'Chạy bừa', 'Vừa đi vừa chơi'], 0, 'Đi đúng vạch và quan sát.'),
    Q('Người tham gia giao thông phải?', ['Đi xe dàn hàng ngang', 'Không cần mũ', 'Đội mũ bảo hiểm khi đi xe máy', 'Vượt đèn đỏ khi vội'], 2, 'Đội mũ bảo hiểm là bắt buộc.'),
  ]),

  M(30, 'Hoàn thiện tranh ATGT', [
    Q('Khẩu hiệu phù hợp?', ['"Đi nhanh"', '"An toàn là bạn, tai nạn là thù"', '"Vượt đèn đỏ"', '"Không đội mũ"'], 1, 'Khẩu hiệu tích cực về ATGT.'),
    Q('Màu sắc tranh ATGT?', ['Một màu', 'Chỉ dùng tông xám đậm', 'Tươi sáng, có màu đèn giao thông', 'Đen tối'], 2, 'Tươi sáng và có đèn giao thông.'),
    Q('Đối tượng người vẽ?', ['Người vi phạm', 'Chỉ vẽ phương tiện, không vẽ người', 'Học sinh, người đi đường tuân thủ luật', 'Người buồn'], 2, 'Người tuân thủ luật.'),
    Q('Thông điệp tranh?', ['Không quan tâm', 'Tiêu cực', 'Mọi người cùng tham gia ATGT', 'Phá luật'], 2, 'Thông điệp tích cực.'),
  ]),

  M(31, 'Xem tranh dân gian Đông Hồ', [
    Q('Tranh Đông Hồ ở?', ['TP.HCM', 'Hà Nội', 'Bắc Ninh', 'Thừa Thiên Huế'], 2, 'Làng Đông Hồ ở Bắc Ninh.'),
    Q('Tranh "Đám cưới chuột" thuộc?', ['Tranh sơn dầu', 'Tranh lụa', 'Tranh Đông Hồ', 'Tranh giấy'], 2, '"Đám cưới chuột" là tranh Đông Hồ nổi tiếng.'),
    Q('Màu sắc tranh Đông Hồ làm từ?', ['Sơn dầu', 'Nguyên liệu tự nhiên (lá, vỏ sò…)', 'Hoá học', 'Mực in công nghiệp'], 1, 'Màu từ nguyên liệu tự nhiên.'),
    Q('Tranh "Lợn đàn" có ý nghĩa?', ['Cầu sung túc, đông con', 'Cầu hết tiền', 'Chỉ để trang trí, không có ý', 'Cầu chiến'], 0, 'Cầu sung túc và đông con cháu.'),
  ]),

  M(32, 'Vẽ tranh tự do — chuẩn bị triển lãm cuối cấp', [
    Q('Tranh triển lãm nên?', ['Bỏ trắng', 'Bừa bãi', 'Đề tài có ý nghĩa, kỹ thuật tốt', 'Sao chép'], 2, 'Ý nghĩa và kỹ thuật tốt.'),
    Q('Em chọn đề tài?', ['Bỏ trắng', 'Tuỳ tiện', 'Theo cảm xúc, sở thích cá nhân', 'Sao chép bạn'], 2, 'Theo cảm xúc và sở thích.'),
    Q('Trước khi vẽ?', ['Vẽ ngay', 'Bỏ qua', 'Phác thảo nháp trước', 'Hỏi cô'], 2, 'Phác thảo nháp trước.'),
    Q('Khi vẽ chính thức?', ['Vẽ cẩn thận, kiên trì', 'Bỏ giữa', 'Sao chép', 'Vẽ vội'], 0, 'Cẩn thận và kiên trì.'),
  ]),

  M(33, 'Hoàn thiện tranh triển lãm', [
    Q('Khung tranh nên?', ['Không tên', 'Sạch, ngay ngắn, có tên tác giả', 'Mép giấy nhăn nheo', 'Treo nghiêng sang một bên'], 1, 'Sạch, ngay ngắn, có tên.'),
    Q('Kiểm tra trước trưng bày?', ['Chỉ màu', 'Bố cục, màu, đường nét, ý tưởng', 'Không kiểm tra', 'Chỉ kiểm tra bố cục'], 1, 'Kiểm tra toàn diện.'),
    Q('Ghi chú trên tranh?', ['Địa chỉ nhà', 'Số điện thoại', 'Tên tác giả, lớp, đề tài', 'Không gì'], 2, 'Tên, lớp, đề tài.'),
    Q('Khi treo tranh?', ['Treo ở nơi tối để giữ màu', 'Ngay ngắn, đủ ánh sáng', 'Treo nghiêng cho có nét lạ', 'Chen chúc'], 1, 'Ngay ngắn và đủ sáng.'),
  ]),

  M(34, 'Triển lãm cuối năm — Xem và bình tranh', [
    Q('Khi xem tranh bạn?', ['Phá tranh', 'Lắng nghe ý tác giả, khen điểm hay', 'Cười nhạo', 'Chê bai'], 1, 'Lắng nghe và khen điểm hay.'),
    Q('Khi giới thiệu tranh mình?', ['Khoe khoang', 'Tự tin, ngắn gọn về ý tưởng', 'Lảng tránh', 'Im lặng'], 1, 'Tự tin và ngắn gọn.'),
    Q('Bình tranh nghĩa là?', ['Im lặng', 'Khen sai', 'Đánh giá, góp ý lịch sự', 'Chê bai'], 2, 'Đánh giá và góp ý lịch sự.'),
    Q('Cảm xúc khi triển lãm?', ['Tức giận', 'Khó chịu', 'Tiếc nuối vì chưa hoàn hảo', 'Vui, tự hào về sản phẩm'], 3, 'Vui và tự hào.'),
  ]),

  M(35, 'Tổng kết — Sẵn sàng cấp 2', [
    Q('Cấp 1 em đã học được?', ['Chỉ tô màu', 'Kỹ năng vẽ, nặn, in, xé dán', 'Chỉ vẽ', 'Không học gì'], 1, 'Nhiều kỹ năng mĩ thuật.'),
    Q('Lên cấp 2 em vẫn?', ['Học mĩ thuật, phát huy sáng tạo', 'Không quan tâm', 'Bỏ hẳn', 'Quên hết'], 0, 'Tiếp tục học mĩ thuật.'),
    Q('Lời cảm ơn thầy cô môn vẽ?', ['Chỉ nhận quà rồi đi', 'Trêu chọc', '"Em cảm ơn thầy cô đã dạy em yêu cái đẹp"', 'Im lặng'], 2, 'Lời cảm ơn chân thành.'),
    Q('Em mang theo từ môn mĩ thuật?', ['Sự lười', 'Áp lực điểm số', 'Tình yêu cái đẹp và sáng tạo', 'Không gì'], 2, 'Tình yêu cái đẹp.'),
  ]),
];

export const P5MT_SCENARIOS = indexBy(P5MT_WEEKS);
