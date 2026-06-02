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
    Q('Mĩ thuật là?', ['Nghệ thuật của cái đẹp thị giác','Môn thể dục','Môn ca hát','Môn toán'], 0, 'Mĩ thuật là nghệ thuật thị giác.'),
    Q('Đồ dùng cơ bản môn mĩ thuật?', ['Bút chì, tẩy, màu vẽ, giấy','Bóng đá','Guitar','Sách toán'], 0, 'Bút, màu, giấy là cơ bản.'),
    Q('Vẽ tự do giúp em?', ['Thể hiện ý tưởng cá nhân','Bị mắng','Mất thời gian','Không lợi gì'], 0, 'Vẽ tự do để thể hiện cá tính.'),
    Q('Trước khi vẽ, em nên?', ['Quan sát và suy nghĩ ý tưởng','Vẽ ngay','Bỏ qua','Hỏi bạn chép'], 0, 'Quan sát và lên ý tưởng trước.'),
  ]),

  M(2, 'Phối cảnh đơn giản — Đường tầm mắt', [
    Q('Đường tầm mắt là?', ['Đường ngang chia tầm nhìn (chân trời)','Đường thẳng đứng','Đường cong','Không có'], 0, 'Đường tầm mắt = đường chân trời ở mắt người vẽ.'),
    Q('Vật ở xa đường tầm mắt sẽ?', ['Nhỏ hơn, gần đường tầm mắt','To hơn','Biến mất','Không đổi'], 0, 'Càng xa càng nhỏ và gần đường tầm mắt.'),
    Q('Vật ở gần thì?', ['To hơn, chi tiết rõ hơn','Nhỏ hơn','Mờ hơn','Không đổi'], 0, 'Vật gần to và rõ hơn.'),
    Q('Phối cảnh giúp tranh?', ['Có chiều sâu, không gian thật','Phẳng','Xấu','Khó hiểu'], 0, 'Phối cảnh tạo chiều sâu cho tranh.'),
  ]),

  M(3, 'Phối cảnh — Điểm tụ', [
    Q('Điểm tụ là?', ['Điểm trên đường tầm mắt mà các đường song song hội tụ','Một góc tranh','Điểm trên trời','Không có'], 0, 'Điểm tụ nằm trên đường tầm mắt.'),
    Q('Một điểm tụ thường dùng cho?', ['Cảnh nhìn thẳng (đường, hành lang)','Cảnh nghiêng','Tĩnh vật','Chân dung'], 0, 'Phối cảnh 1 điểm tụ cho góc nhìn thẳng.'),
    Q('Đường ray xe lửa nhìn xa?', ['Hội tụ về 1 điểm','Song song','Cong','Phân tán'], 0, 'Hai đường ray hội tụ ở xa (điểm tụ).'),
    Q('Phối cảnh giúp em vẽ?', ['Nhà cửa, đường phố có chiều sâu','Chỉ vẽ phẳng','Vẽ ngẫu nhiên','Vẽ trừu tượng'], 0, 'Phối cảnh dùng vẽ nhà cửa, đường có chiều sâu.'),
  ]),

  M(4, 'Vẽ tĩnh vật nâng cao — Lọ hoa và quả', [
    Q('Tĩnh vật là?', ['Tranh các vật đứng yên (lọ, hoa, quả…)','Tranh người','Tranh phong cảnh','Tranh động vật'], 0, 'Tĩnh vật vẽ vật không di chuyển.'),
    Q('Khi xếp mẫu, em nên?', ['Xếp có chính-phụ, cao-thấp xen kẽ','Xếp đều như xếp hàng','Đặt cao bằng nhau','Để lung tung'], 0, 'Bố cục có chính-phụ.'),
    Q('Bước đầu tiên vẽ tĩnh vật?', ['Vẽ phác khung hình chung','Vẽ chi tiết','Tô màu ngay','Vẽ bóng'], 0, 'Phác khung hình chung trước.'),
    Q('Đậm nhạt giúp tranh?', ['Có khối, không gian','Phẳng','Xấu','Khó nhìn'], 0, 'Đậm nhạt tạo khối và không gian.'),
    Q('Khi tô màu tĩnh vật?', ['Quan sát màu thật và tô theo','Tô tuỳ ý','Tô đen hết','Tô trắng hết'], 0, 'Quan sát và tô theo màu thật.'),
  ]),

  M(5, 'Vẽ tĩnh vật (tiếp) — Đậm nhạt', [
    Q('Vật ở sáng nhất?', ['Phần đón nguồn sáng','Phần khuất','Bóng đổ','Phía dưới'], 0, 'Phần đón sáng là sáng nhất.'),
    Q('Bóng đổ là?', ['Bóng vật in trên mặt phẳng','Bóng trên người vẽ','Không có','Bóng trong nhà'], 0, 'Bóng đổ in trên mặt phẳng đặt vật.'),
    Q('Vẽ đậm nhạt bằng chì?', ['Dùng độ ấn và nét chì','Tô đen kịt','Tô trắng','Không tô'], 0, 'Đậm nhạt phụ thuộc độ ấn chì.'),
    Q('Chì 2B so với HB?', ['2B đậm hơn HB','HB đậm hơn','Bằng nhau','Không liên quan'], 0, '2B đậm hơn HB.'),
  ]),

  M(6, 'Chân dung tự hoạ', [
    Q('Chân dung tự hoạ là?', ['Tự vẽ chân dung của mình','Vẽ người khác','Vẽ tĩnh vật','Vẽ cảnh'], 0, 'Tự vẽ chính mình.'),
    Q('Khuôn mặt người chia làm?', ['3 phần bằng nhau (trán, mũi, miệng-cằm)','5 phần','2 phần','Không chia'], 0, 'Mặt người chia 3 phần ngang.'),
    Q('Hai mắt cách nhau khoảng?', ['Bằng chiều dài 1 mắt','Bằng cả mặt','Sát nhau','Rất xa'], 0, 'Khoảng cách 2 mắt = chiều dài 1 mắt.'),
    Q('Vẽ chân dung em nên dùng?', ['Gương soi để quan sát','Không cần','Quan sát bạn','Vẽ tưởng tượng'], 0, 'Soi gương để tự hoạ.'),
    Q('Khi vẽ tự hoạ em thể hiện?', ['Đặc điểm và cảm xúc của mình','Người khác','Đồ vật','Không gì'], 0, 'Thể hiện chính mình.'),
  ]),

  M(7, 'Hoàn thiện chân dung tự hoạ — Tô màu', [
    Q('Màu da người Á?', ['Vàng nhạt, hồng','Xanh','Đỏ','Tím'], 0, 'Da Á thường vàng nhạt, hồng.'),
    Q('Khi tô màu mặt, em nên?', ['Tô đều, có vùng sáng-tối nhẹ','Tô đen kịt','Tô loè loẹt','Không tô'], 0, 'Tô đều và có sáng tối nhẹ.'),
    Q('Vùng sáng trên mặt?', ['Trán, gò má, sống mũi','Cằm dưới','Hốc mắt','Không có'], 0, 'Trán, gò má, sống mũi đón sáng.'),
    Q('Mái tóc cần?', ['Vẽ theo lớp, hướng tóc','Tô màu đen kịt','Bỏ qua','Tô loè loẹt'], 0, 'Vẽ theo lớp và hướng tóc.'),
  ]),

  M(8, 'Vẽ tranh đề tài "Trường em"', [
    Q('Đề tài "Trường em" có thể vẽ?', ['Lớp học, sân trường, thầy cô bạn bè','Núi rừng','Đại dương','Sao Hoả'], 0, 'Cảnh quen thuộc ở trường.'),
    Q('Bố cục tranh nên?', ['Có chính-phụ, không gian','Đầy hết khung','Trống trải','Lệch hẳn một bên'], 0, 'Bố cục có chính-phụ.'),
    Q('Hình ảnh chính nên?', ['To, nổi bật, ở vị trí trung tâm','Nhỏ và lệch','Mờ','Khó thấy'], 0, 'Chính phải to và nổi bật.'),
    Q('Màu sắc tranh trường em?', ['Tươi sáng, vui tươi','Đen tối','U buồn','Một màu duy nhất'], 0, 'Tươi sáng và vui.'),
    Q('Khi vẽ thầy cô bạn bè?', ['Thể hiện cảm xúc, hoạt động','Chỉ vẽ đầu','Vẽ tĩnh','Bỏ qua'], 0, 'Thể hiện cảm xúc và hoạt động.'),
  ]),

  M(9, 'In tranh khắc gỗ (giới thiệu)', [
    Q('Tranh khắc gỗ là?', ['Khắc hình trên gỗ rồi in ra giấy','Vẽ trên gỗ','Sơn lên gỗ','Đốt gỗ'], 0, 'Khắc và in từ tấm gỗ.'),
    Q('Tranh dân gian Đông Hồ là?', ['Tranh khắc gỗ truyền thống','Tranh sơn dầu','Tranh lụa','Tranh giấy'], 0, 'Tranh Đông Hồ là khắc gỗ.'),
    Q('Tranh Đông Hồ in trên?', ['Giấy điệp','Giấy lụa','Vải','Gỗ'], 0, 'Giấy điệp là loại giấy đặc trưng.'),
    Q('Đặc điểm tranh Đông Hồ?', ['Đường nét đơn giản, màu sắc tự nhiên','Cầu kì phương Tây','Rất phức tạp','Đơn sắc'], 0, 'Đơn giản và dùng màu tự nhiên.'),
  ]),

  M(10, 'Thực hành in tranh đơn giản', [
    Q('Em có thể in tranh bằng?', ['Khoai tây, củ, mút xốp khắc hình','Sơn dầu','Bút lông thường','Phấn'], 0, 'Có thể dùng vật liệu dễ tìm.'),
    Q('Bước đầu in tranh?', ['Vẽ hình lên vật khắc','Tô màu giấy','Cắt giấy','Bỏ qua'], 0, 'Vẽ hình lên vật trước rồi khắc.'),
    Q('Sau khi khắc, em?', ['Bôi màu lên rồi áp xuống giấy','Xé bỏ','Đốt','Cất đi'], 0, 'Bôi màu rồi áp lên giấy in.'),
    Q('Tranh in có ưu điểm?', ['In được nhiều bản giống nhau','Chỉ 1 bản','Mất nhiều thời gian','Không có lợi'], 0, 'In được nhiều bản giống nhau.'),
  ]),

  M(11, 'Làm thiệp 3D — Bước 1', [
    Q('Thiệp 3D là?', ['Thiệp có hình nổi khi mở ra','Thiệp phẳng','Thiệp giấy thường','Tờ giấy trắng'], 0, 'Thiệp 3D có hình nổi khi mở.'),
    Q('Vật liệu làm thiệp 3D?', ['Giấy bìa, kéo, keo','Đất sét','Gỗ','Kim loại'], 0, 'Giấy bìa, kéo, keo là cơ bản.'),
    Q('Kĩ thuật cơ bản?', ['Gấp, cắt, dán theo lớp','Vẽ lên giấy','Đốt giấy','Xé giấy'], 0, 'Gấp, cắt, dán theo lớp tạo hình 3D.'),
    Q('Khi cắt giấy cần?', ['Cẩn thận để không đứt tay','Vội vàng','Không nhìn','Tuỳ ý'], 0, 'Cẩn thận khi cắt.'),
  ]),

  M(12, 'Làm thiệp 3D — Hoàn thiện', [
    Q('Trang trí thiệp dùng?', ['Màu vẽ, sticker, ruy băng','Bê tông','Đất sét ướt','Nước sôi'], 0, 'Trang trí bằng vật liệu mỹ thuật.'),
    Q('Thiệp 3D phù hợp tặng?', ['Bạn bè, thầy cô, người thân','Vứt đi','Tự giữ','Treo trên cây'], 0, 'Để tặng người thân yêu.'),
    Q('Lời chúc trên thiệp nên?', ['Chân thành, ngắn gọn','Dài lê thê','Không có','Cãi nhau'], 0, 'Chân thành và ngắn gọn.'),
    Q('Khi tặng thiệp, em nên?', ['Tặng bằng hai tay, lễ phép','Vứt','Đưa hờ hững','Không chào'], 0, 'Tặng bằng hai tay là lễ phép.'),
  ]),

  M(13, 'Vẽ tranh đề tài "Ước mơ"', [
    Q('Đề tài "Ước mơ" em có thể vẽ?', ['Nghề nghiệp tương lai, ước mơ cá nhân','Cảnh chiến tranh','Tĩnh vật','Núi rừng'], 0, 'Vẽ về ước mơ của mình.'),
    Q('Khi vẽ em nên?', ['Thể hiện rõ ước mơ qua hình ảnh','Vẽ trừu tượng khó hiểu','Sao chép bạn','Bỏ trắng'], 0, 'Thể hiện rõ ý tưởng.'),
    Q('Màu sắc tranh ước mơ?', ['Tươi sáng, hy vọng','U ám','Buồn bã','Đơn sắc'], 0, 'Tươi sáng thể hiện hy vọng.'),
    Q('Bố cục có thể?', ['Trung tâm, đối xứng hoặc tự do hợp lí','Lung tung','Trống trải','Lệch lạc'], 0, 'Bố cục hợp lí.'),
  ]),

  M(14, 'Tô màu tranh "Ước mơ"', [
    Q('Phối màu hài hoà nghĩa là?', ['Các màu hợp nhau, không chói','Loè loẹt','Đối nghịch','Tuỳ ý'], 0, 'Phối hài hoà là hợp nhau.'),
    Q('Bộ ba màu cơ bản?', ['Đỏ, vàng, lam','Đen, trắng, xám','Xanh, hồng, tím','Cam, lục, tím'], 0, '3 màu cơ bản: đỏ, vàng, lam.'),
    Q('Pha đỏ + vàng được?', ['Cam','Tím','Lục','Xanh'], 0, 'Đỏ + vàng = cam.'),
    Q('Pha lam + vàng được?', ['Lục','Cam','Tím','Đỏ'], 0, 'Lam + vàng = lục.'),
  ]),

  M(15, 'Vẽ tranh đề tài "Quê hương đổi mới"', [
    Q('"Quê hương đổi mới" có thể vẽ?', ['Đường mới, nhà mới, cầu mới…','Chỉ cảnh xưa','Cảnh chiến tranh','Tĩnh vật'], 0, 'Vẽ những đổi mới ở quê.'),
    Q('Hình ảnh đặc trưng quê đổi mới?', ['Đường nhựa, điện sáng, trường mới','Đường đất, nhà tranh','Không có gì','Chỉ rừng'], 0, 'Đường nhựa, điện sáng, trường mới.'),
    Q('Người dân trong tranh?', ['Vui tươi, lao động hăng say','Buồn bã','Lười biếng','Cãi nhau'], 0, 'Người dân vui tươi.'),
    Q('Màu sắc?', ['Tươi sáng, đa dạng','Đen tối','Một màu','U buồn'], 0, 'Tươi sáng và đa dạng.'),
  ]),

  M(16, 'Hoàn thiện tranh "Quê hương đổi mới"', [
    Q('Để tranh có chiều sâu?', ['Vẽ vật xa nhỏ, vật gần to','Vẽ tất cả bằng nhau','Vẽ chồng đè','Không cần'], 0, 'Phối cảnh xa-gần.'),
    Q('Bóng đổ giúp tranh?', ['Có chiều và không gian','Phẳng','Xấu','Khó nhìn'], 0, 'Bóng tạo chiều và không gian.'),
    Q('Khi hoàn thiện em nên?', ['Kiểm tra lại bố cục, màu sắc','Bỏ giữa chừng','Vẽ vội','Không kiểm tra'], 0, 'Kiểm tra trước khi nộp.'),
    Q('Khung tranh nên?', ['Ngay ngắn, sạch sẽ','Bẩn','Cong vẹo','Lệch lạc'], 0, 'Ngay ngắn và sạch sẽ.'),
  ]),

  M(17, 'Trưng bày bài cuối HK1', [
    Q('Trưng bày bài giúp?', ['Học hỏi lẫn nhau, được khen','Bị mắng','Mất bài','Không lợi gì'], 0, 'Trưng bày để chia sẻ và học hỏi.'),
    Q('Khi xem bài bạn em nên?', ['Khen điểm tốt, góp ý nhẹ nhàng','Cười nhạo','Chê bai','Phá bài'], 0, 'Khen và góp ý lịch sự.'),
    Q('Bài đẹp có?', ['Bố cục tốt, màu hài hoà, ý nghĩa','Lung tung','Tệ','Không có ý'], 0, 'Bố cục, màu, ý nghĩa.'),
    Q('Em treo bài nên?', ['Treo ngay ngắn, đề tên','Vứt sàn','Treo lệch','Không tên'], 0, 'Ngay ngắn và đề tên.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khi làm bài kiểm tra mĩ thuật, em nên?', ['Bình tĩnh, sáng tạo','Vội vàng','Sao chép','Bỏ trắng'], 0, 'Bình tĩnh và sáng tạo.'),
    Q('Thời gian làm bài cần?', ['Phân bố hợp lí cho phác - vẽ - tô','Tô màu hết giờ','Phác hết giờ','Không phân bố'], 0, 'Phân bố thời gian hợp lí.'),
    Q('Bài kiểm tra đánh giá?', ['Bố cục, đường nét, màu sắc, ý tưởng','Chỉ màu','Chỉ ý tưởng','Chỉ đường nét'], 0, 'Đánh giá tổng hợp 4 yếu tố.'),
    Q('Trước khi nộp bài?', ['Kí tên, kiểm tra lại','Vứt nộp','Không kí','Cãi cô'], 0, 'Kí tên và kiểm tra lại.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Vẽ tranh đề tài "Ngày Tết quê em"', [
    Q('"Ngày Tết quê em" có thể vẽ?', ['Bánh chưng, cây mai-đào, chợ Tết','Cảnh chiến','Tĩnh vật','Núi rừng'], 0, 'Cảnh đặc trưng ngày Tết.'),
    Q('Màu chủ đạo ngày Tết?', ['Đỏ, vàng (may mắn)','Đen','Xám','Trắng buồn'], 0, 'Đỏ vàng là màu Tết.'),
    Q('Cây miền Bắc ngày Tết?', ['Đào','Mai','Phượng','Bằng lăng'], 0, 'Miền Bắc chơi đào.'),
    Q('Cây miền Nam ngày Tết?', ['Mai','Đào','Phượng','Sấu'], 0, 'Miền Nam chơi mai vàng.'),
  ]),

  M(20, 'Hoàn thiện tranh "Ngày Tết quê em"', [
    Q('Hình ảnh chính tranh Tết?', ['Người sum họp, chúc Tết','Nhà tan vỡ','Cãi nhau','Buồn bã'], 0, 'Sum họp và chúc Tết.'),
    Q('Trang phục ngày Tết?', ['Áo dài, áo mới','Quần áo bẩn','Đồ ngủ','Đồ thể thao'], 0, 'Áo dài hoặc áo mới.'),
    Q('Cảnh nền có thể?', ['Cờ hoa, pháo bông (giấy)','Cảnh chiến','Cảnh tang','Không có gì'], 0, 'Cờ hoa, pháo bông giấy trang trí.'),
    Q('Không khí tranh?', ['Vui tươi, rộn ràng','Buồn','U ám','Tĩnh lặng'], 0, 'Vui tươi, rộn ràng.'),
  ]),

  M(21, 'Nặn — Tạo dáng người', [
    Q('Vật liệu nặn?', ['Đất nặn, đất sét','Sắt','Đá','Nước'], 0, 'Đất nặn hoặc đất sét.'),
    Q('Khi nặn người, bắt đầu từ?', ['Khối tổng thể (đầu, mình, chân tay)','Móng tay','Tóc','Mắt'], 0, 'Bắt đầu khối tổng thể.'),
    Q('Tỉ lệ người trưởng thành cao bằng?', ['Khoảng 7 - 7,5 đầu','3 đầu','10 đầu','Không tỉ lệ'], 0, 'Khoảng 7 - 7,5 đầu.'),
    Q('Trẻ em có tỉ lệ?', ['Khoảng 4 - 5 đầu','7 đầu','10 đầu','1 đầu'], 0, 'Trẻ em khoảng 4-5 đầu.'),
  ]),

  M(22, 'Vẽ tranh "Lễ hội quê em"', [
    Q('Lễ hội quê em có thể vẽ?', ['Đua thuyền, kéo co, múa lân','Cảnh chiến','Tĩnh vật','Núi rừng'], 0, 'Cảnh lễ hội đặc trưng.'),
    Q('Lễ hội có gì đặc trưng?', ['Đông người, cờ hoa, trò chơi','Vắng vẻ','Buồn bã','Tĩnh lặng'], 0, 'Đông người và vui tươi.'),
    Q('Khi vẽ nhiều người?', ['Sắp xếp xa-gần, cao-thấp','Xếp đều','Lung tung','Chồng đè'], 0, 'Sắp xếp xa gần có nhịp.'),
    Q('Không khí lễ hội?', ['Náo nhiệt, vui tươi','Buồn','Tĩnh lặng','U ám'], 0, 'Náo nhiệt và vui.'),
  ]),

  M(23, 'Vẽ tranh "Bảo vệ môi trường"', [
    Q('"Bảo vệ môi trường" có thể vẽ?', ['Trồng cây, dọn rác, phân loại','Đốt rừng','Xả rác','Phá cây'], 0, 'Hành động bảo vệ môi trường.'),
    Q('Màu sắc nên thiên về?', ['Xanh (cây cỏ, bầu trời sạch)','Đen','Xám','Đỏ máu'], 0, 'Xanh tượng trưng môi trường sạch.'),
    Q('Khẩu hiệu trên tranh?', ['"Hãy bảo vệ môi trường"','"Đốt rác"','"Phá rừng"','"Xả thải"'], 0, 'Khẩu hiệu tích cực.'),
    Q('Tranh em hướng tới?', ['Thông điệp tích cực, dễ hiểu','Khó hiểu','Tiêu cực','Không ý nghĩa'], 0, 'Thông điệp tích cực, rõ ràng.'),
  ]),

  M(24, 'Hoàn thiện tranh "Bảo vệ môi trường"', [
    Q('Cây xanh trong tranh nên?', ['Nhiều và tươi tốt','Khô héo','Cháy đen','Không có'], 0, 'Cây tươi tốt thể hiện môi trường sạch.'),
    Q('Người dân làm gì?', ['Trồng cây, nhặt rác, phân loại','Xả rác','Đốt cây','Ngồi không'], 0, 'Hành động tích cực.'),
    Q('Nguồn nước trong tranh?', ['Trong xanh','Đen ngầu','Ô nhiễm','Không có'], 0, 'Nước trong xanh là thông điệp tốt.'),
    Q('Bầu trời?', ['Xanh trong, ít khói','Đen kịt','Khói mù','Đỏ rực'], 0, 'Bầu trời xanh.'),
  ]),

  M(25, 'Vẽ tranh chân dung bạn', [
    Q('Vẽ chân dung bạn em cần?', ['Quan sát kĩ đặc điểm khuôn mặt','Vẽ tưởng tượng','Sao chép','Bỏ qua'], 0, 'Quan sát đặc điểm thật.'),
    Q('Đặc điểm cần chú ý?', ['Hình mặt, mắt, mũi, miệng, tóc','Chỉ tóc','Chỉ mắt','Không gì'], 0, 'Tất cả đặc điểm khuôn mặt.'),
    Q('Khi vẽ bạn em nên?', ['Vẽ giống nhưng vẫn lịch sự','Vẽ chế giễu','Vẽ xấu','Bôi bác'], 0, 'Vẽ giống và tôn trọng bạn.'),
    Q('Thái độ với mẫu (bạn)?', ['Tôn trọng, biết ơn','Cười nhạo','Bỏ qua','Quát nạt'], 0, 'Tôn trọng người làm mẫu.'),
  ]),

  M(26, 'In hình bằng lá cây', [
    Q('In bằng lá cây tạo?', ['Hình lá có gân đẹp','Hình tròn','Hình vuông','Không có hình'], 0, 'Lá in lên giấy có gân đẹp.'),
    Q('Bước in bằng lá?', ['Bôi màu mặt sau lá, ép lên giấy','Đốt lá','Xé lá','Vẽ lên lá'], 0, 'Bôi màu rồi ép lên giấy.'),
    Q('Lá nào in đẹp?', ['Lá có gân rõ','Lá khô vụn','Lá nát','Lá cuộn'], 0, 'Lá có gân rõ in đẹp.'),
    Q('Sản phẩm in lá dùng để?', ['Trang trí, làm thiệp','Vứt đi','Bỏ qua','Đốt'], 0, 'Trang trí hoặc làm thiệp.'),
  ]),

  M(27, 'Trang trí khăn vuông', [
    Q('Khăn vuông được trang trí theo?', ['Đối xứng qua tâm','Lung tung','Một bên','Không cần'], 0, 'Trang trí đối xứng qua tâm.'),
    Q('Hoạ tiết trang trí?', ['Hoa lá, hình kỉ hà','Mặt người','Đồ vật ngẫu nhiên','Không có'], 0, 'Hoa lá và hình kỉ hà thường dùng.'),
    Q('Màu sắc khăn?', ['Hài hoà, không quá nhiều màu','Loè loẹt','Đen tối','Một màu duy nhất'], 0, 'Hài hoà, không loè loẹt.'),
    Q('Bố cục khăn vuông có?', ['Tâm, viền và đường chéo','Lung tung','Không cấu trúc','Một mảng'], 0, 'Tâm, viền và đường chéo là cấu trúc cơ bản.'),
  ]),

  M(28, 'Xé dán giấy — Tranh tự chọn', [
    Q('Xé dán là?', ['Xé giấy màu rồi dán thành tranh','Cắt giấy','Vẽ giấy','Đốt giấy'], 0, 'Xé giấy rồi dán thành tranh.'),
    Q('Vật liệu xé dán?', ['Giấy màu, keo, giấy nền','Sắt','Nước','Đá'], 0, 'Giấy màu là vật liệu chính.'),
    Q('Khi xé giấy em nên?', ['Xé tự nhiên, không cần thẳng','Cắt thẳng','Đốt','Vò nát'], 0, 'Xé tự nhiên cho cảm giác mộc.'),
    Q('Tranh xé dán có?', ['Hiệu ứng mộc mạc, độc đáo','Phẳng nhạt','Xấu','Khó hiểu'], 0, 'Mộc mạc và độc đáo.'),
  ]),

  M(29, 'Vẽ tranh đề tài "An toàn giao thông"', [
    Q('Tranh ATGT có thể vẽ?', ['Đèn giao thông, đội mũ bảo hiểm, qua đường đúng vạch','Đua xe','Vượt đèn đỏ','Không gì'], 0, 'Cảnh tuân thủ luật giao thông.'),
    Q('Đèn đỏ nghĩa là?', ['Dừng lại','Đi tiếp','Chuẩn bị','Đi nhanh'], 0, 'Đỏ là dừng.'),
    Q('Khi qua đường em nên?', ['Đi đúng vạch, quan sát','Chạy bừa','Vừa đi vừa chơi','Đi giữa đường'], 0, 'Đi đúng vạch và quan sát.'),
    Q('Người tham gia giao thông phải?', ['Đội mũ bảo hiểm khi đi xe máy','Không cần mũ','Chở 3','Chở 4'], 0, 'Đội mũ bảo hiểm là bắt buộc.'),
  ]),

  M(30, 'Hoàn thiện tranh ATGT', [
    Q('Khẩu hiệu phù hợp?', ['"An toàn là bạn, tai nạn là thù"','"Đi nhanh"','"Vượt đèn đỏ"','"Không đội mũ"'], 0, 'Khẩu hiệu tích cực về ATGT.'),
    Q('Màu sắc tranh ATGT?', ['Tươi sáng, có màu đèn giao thông','U ám','Đen tối','Một màu'], 0, 'Tươi sáng và có đèn giao thông.'),
    Q('Đối tượng người vẽ?', ['Học sinh, người đi đường tuân thủ luật','Người vi phạm','Không có','Người buồn'], 0, 'Người tuân thủ luật.'),
    Q('Thông điệp tranh?', ['Mọi người cùng tham gia ATGT','Phá luật','Không quan tâm','Tiêu cực'], 0, 'Thông điệp tích cực.'),
  ]),

  M(31, 'Xem tranh dân gian Đông Hồ', [
    Q('Tranh Đông Hồ ở?', ['Bắc Ninh','Hà Nội','Huế','TP.HCM'], 0, 'Làng Đông Hồ ở Bắc Ninh.'),
    Q('Tranh "Đám cưới chuột" thuộc?', ['Tranh Đông Hồ','Tranh sơn dầu','Tranh lụa','Tranh giấy'], 0, '"Đám cưới chuột" là tranh Đông Hồ nổi tiếng.'),
    Q('Màu sắc tranh Đông Hồ làm từ?', ['Nguyên liệu tự nhiên (lá, vỏ sò…)','Hoá học','Sơn dầu','Chì'], 0, 'Màu từ nguyên liệu tự nhiên.'),
    Q('Tranh "Lợn đàn" có ý nghĩa?', ['Cầu sung túc, đông con','Cầu hết tiền','Cầu chiến','Vô nghĩa'], 0, 'Cầu sung túc và đông con cháu.'),
  ]),

  M(32, 'Vẽ tranh tự do — chuẩn bị triển lãm cuối cấp', [
    Q('Tranh triển lãm nên?', ['Đề tài có ý nghĩa, kỹ thuật tốt','Bừa bãi','Sao chép','Bỏ trắng'], 0, 'Ý nghĩa và kỹ thuật tốt.'),
    Q('Em chọn đề tài?', ['Theo cảm xúc, sở thích cá nhân','Sao chép bạn','Bỏ trắng','Tuỳ tiện'], 0, 'Theo cảm xúc và sở thích.'),
    Q('Trước khi vẽ?', ['Phác thảo nháp trước','Vẽ ngay','Bỏ qua','Hỏi cô'], 0, 'Phác thảo nháp trước.'),
    Q('Khi vẽ chính thức?', ['Vẽ cẩn thận, kiên trì','Vẽ vội','Bỏ giữa','Sao chép'], 0, 'Cẩn thận và kiên trì.'),
  ]),

  M(33, 'Hoàn thiện tranh triển lãm', [
    Q('Khung tranh nên?', ['Sạch, ngay ngắn, có tên tác giả','Bẩn','Lệch','Không tên'], 0, 'Sạch, ngay ngắn, có tên.'),
    Q('Kiểm tra trước trưng bày?', ['Bố cục, màu, đường nét, ý tưởng','Chỉ màu','Chỉ ý','Không kiểm tra'], 0, 'Kiểm tra toàn diện.'),
    Q('Ghi chú trên tranh?', ['Tên tác giả, lớp, đề tài','Không gì','Số điện thoại','Địa chỉ nhà'], 0, 'Tên, lớp, đề tài.'),
    Q('Khi treo tranh?', ['Ngay ngắn, đủ ánh sáng','Lệch','Tối','Chen chúc'], 0, 'Ngay ngắn và đủ sáng.'),
  ]),

  M(34, 'Triển lãm cuối năm — Xem và bình tranh', [
    Q('Khi xem tranh bạn?', ['Lắng nghe ý tác giả, khen điểm hay','Cười nhạo','Chê bai','Phá tranh'], 0, 'Lắng nghe và khen điểm hay.'),
    Q('Khi giới thiệu tranh mình?', ['Tự tin, ngắn gọn về ý tưởng','Im lặng','Lảng tránh','Khoe khoang'], 0, 'Tự tin và ngắn gọn.'),
    Q('Bình tranh nghĩa là?', ['Đánh giá, góp ý lịch sự','Chê bai','Khen sai','Im lặng'], 0, 'Đánh giá và góp ý lịch sự.'),
    Q('Cảm xúc khi triển lãm?', ['Vui, tự hào về sản phẩm','Buồn','Khó chịu','Tức giận'], 0, 'Vui và tự hào.'),
  ]),

  M(35, 'Tổng kết — Sẵn sàng cấp 2', [
    Q('Cấp 1 em đã học được?', ['Kỹ năng vẽ, nặn, in, xé dán','Không học gì','Chỉ vẽ','Chỉ tô màu'], 0, 'Nhiều kỹ năng mĩ thuật.'),
    Q('Lên cấp 2 em vẫn?', ['Học mĩ thuật, phát huy sáng tạo','Bỏ hẳn','Quên hết','Không quan tâm'], 0, 'Tiếp tục học mĩ thuật.'),
    Q('Lời cảm ơn thầy cô môn vẽ?', ['"Em cảm ơn thầy cô đã dạy em yêu cái đẹp"','Im lặng','Trêu chọc','Bỏ về'], 0, 'Lời cảm ơn chân thành.'),
    Q('Em mang theo từ môn mĩ thuật?', ['Tình yêu cái đẹp và sáng tạo','Buồn','Sự lười','Không gì'], 0, 'Tình yêu cái đẹp.'),
  ]),
];

export const P5MT_SCENARIOS = indexBy(P5MT_WEEKS);
