// ============================================================
// Lớp 8 · NGHỆ THUẬT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Âm nhạc + Mỹ thuật theo CTGD 2018 môn Nghệ thuật.
// ID prefix: "S8NT-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8NT', 'nghe-thuat', n, title, qs, opts);

export const S8NT_WEEKS = [
  // ──────────────── HK1: ÂM NHẠC + MỸ THUẬT ────────────────
  M(1, 'Âm nhạc — Ôn tập kiến thức nhạc lý cơ bản', [
    Q('7 nốt nhạc cơ bản?', ['Do, Re, Mi, Fa, Sol, La, Si', 'A, B, C, D, E, F, G', 'Cả A và B (2 cách gọi khác nhau)', 'Chỉ Do, Re, Mi'], 2, 'Tên Latin (Do, Re, Mi…) và tên Anh (C, D, E…) là 2 cách gọi cùng các nốt.'),
    Q('Khoá Sol đặt ở dòng?', ['Dòng 2 (đếm từ dưới)', 'Dòng 1', 'Dòng 5', 'Dòng 3'], 0, 'Khoá Sol xác định vị trí Sol ở dòng 2 (treble clef).'),
    Q('Trường độ nốt đen?', ['1 phách', '2 phách', '1/2 phách', '4 phách'], 0, 'Nốt đen (♩) = 1 phách. Nốt trắng = 2 phách. Tròn = 4 phách. Móc đơn = 1/2.'),
    Q('Nhịp 4/4 nghĩa là?', ['Mỗi ô nhịp có 4 phách, mỗi phách = nốt đen', '4 ô nhịp', '4 dòng', '4 bài hát'], 0, '4/4: 4 phách/ô nhịp, đơn vị phách là nốt đen (1/4).'),
    Q('Dấu lặng đen?', ['Im lặng tương đương 1 phách', '2 phách', '1/2 phách', 'Không có'], 0, 'Dấu lặng đen (𝄽) = nghỉ im lặng 1 phách.'),
  ]),

  M(2, 'Âm nhạc — Đảo phách (syncopation)', [
    Q('Đảo phách (syncopation) là?', ['Nhấn vào phách yếu hoặc nửa phách', 'Nhấn phách mạnh', 'Không có nhấn', 'Đảo nốt'], 0, 'Đảo phách = di chuyển trọng âm khỏi phách mạnh sang phách yếu/nửa phách.'),
    Q('Đảo phách tạo cảm giác?', ['Lệch nhịp, hấp dẫn, sôi động', 'Đều đặn', 'Nhàm chán', 'Trang nghiêm'], 0, 'Đảo phách làm âm nhạc giật, lệch quen thuộc → hấp dẫn, sôi động.'),
    Q('Đảo phách xuất hiện nhiều trong?', ['Jazz, funk, rock, dân ca VN…', 'Chỉ nhạc cổ điển', 'Chỉ thánh ca', 'Không có ở đâu'], 0, 'Jazz là vương quốc của đảo phách; cũng có trong funk, rock và nhiều dân ca VN.'),
    Q('Ví dụ đảo phách trong dân ca VN?', ['Lý cây đa, hát then…', 'Quốc ca', 'Tiến quân ca', 'Chỉ trong jazz'], 0, 'Nhiều bài dân ca VN có đảo phách tạo nét đặc trưng vùng miền.'),
    Q('Khi gặp đảo phách, cần?', ['Đếm chính xác, cảm nhận chỗ nhấn lệch', 'Bỏ qua', 'Đếm sai', 'Không cần đếm'], 0, 'Đảo phách khó vì lệch quen thuộc — phải đếm và cảm chính xác.'),
  ]),

  M(3, 'Âm nhạc — Hợp âm 7 (Seventh chord)', [
    Q('Hợp âm 7 gồm?', ['4 nốt: chồng 3 quãng 3 lên nốt gốc', '3 nốt', '5 nốt', '2 nốt'], 0, 'Hợp âm 7 = hợp âm 3 nốt + thêm 1 quãng 3 (tổng 4 nốt).'),
    Q('Hợp âm C7 gồm?', ['C, E, G, Bb', 'C, E, G', 'C, E, G, B', 'C, D, E, F'], 0, 'C7 = C-E-G-Bb (dominant 7). C-E-G-B là Cmaj7.'),
    Q('Sự khác biệt C7 và Cmaj7?', ['C7 có Bb (b7); Cmaj7 có B (M7)', 'Không khác', 'Cmaj7 thấp hơn', 'C7 cao hơn'], 0, 'C7: nốt 7 giáng nửa cung (b7=Bb); Cmaj7: nốt 7 không giáng (M7=B).'),
    Q('Hợp âm 7 tạo cảm giác?', ['Phong phú, cần giải quyết về hợp âm chủ', 'Bình ổn', 'Yên tĩnh', 'Tĩnh tại'], 0, 'Hợp âm 7 (đặc biệt V7) tạo tension, đòi hỏi giải quyết về I (hợp âm chủ).'),
    Q('Trong nhạc Jazz, hợp âm 7 đóng vai trò?', ['Cốt lõi của hoà thanh jazz', 'Phụ', 'Không dùng', 'Hiếm gặp'], 0, 'Hoà thanh jazz xây trên các hợp âm 7 (và mở rộng đến 9, 11, 13).'),
  ]),

  M(4, 'Âm nhạc — Kỹ thuật hát nâng cao', [
    Q('Hít thở khi hát?', ['Hít bụng (diaphragmatic) — sâu, giữ hơi', 'Hít ngực nông', 'Nín thở', 'Hít qua miệng'], 0, 'Hít thở bụng (sâu, dùng cơ hoành) là kỹ thuật nền tảng của ca hát chuyên nghiệp.'),
    Q('Khẩu hình mở rộng giúp?', ['Âm thanh vang, tròn, rõ', 'Âm yếu', 'Không có tác dụng', 'Âm nhỏ'], 0, 'Mở khẩu hình (đặc biệt nguyên âm) giúp âm vang, tròn, rõ tiếng.'),
    Q('Khởi giọng (warm-up) trước hát?', ['Bắt buộc, tránh chấn thương dây thanh', 'Không cần', 'Mất thời gian', 'Chỉ ca sĩ chuyên nghiệp cần'], 0, 'Warm-up làm ấm dây thanh, tránh chấn thương — bắt buộc trước mọi buổi hát.'),
    Q('Khi hát nốt cao?', ['Mở khẩu hình rộng hơn, hít thở sâu, đẩy hơi đều', 'Cố gồng cổ', 'Hét', 'Nín thở'], 0, 'Nốt cao cần kỹ thuật: mở khẩu hình, hỗ trợ hơi thở, không gồng cổ (gây tổn thương).'),
    Q('Cảm xúc trong hát?', ['Truyền tải nội dung bài, không chỉ phát âm', 'Không cần', 'Chỉ kỹ thuật', 'Càng vô cảm càng tốt'], 0, 'Hát hay = kỹ thuật + cảm xúc + diễn đạt nội dung.'),
  ]),

  M(5, 'Âm nhạc — Recorder/Sáo nâng cao', [
    Q('Recorder (sáo dọc) cầm?', ['Tay trái trên (4 lỗ trên), tay phải dưới (3 lỗ dưới + 1 sau)', 'Tay phải trên', 'Tuỳ ý', 'Cầm ngang'], 0, 'Tay trái trên (B, A, G), tay phải dưới (F, E, D + lỗ ngón cái sau).'),
    Q('Khi thổi nốt cao trên recorder?', ['Bịt nửa lỗ ngón cái sau (overblow)', 'Thổi mạnh', 'Mở hết các lỗ', 'Bịt hết'], 0, 'Nốt cao: bịt nửa lỗ ngón cái (overblow) + thổi mạnh hơn.'),
    Q('Sáo trúc VN khác recorder ở?', ['Thổi ngang, 6 lỗ bấm, không lỗ ngón cái', 'Thổi dọc', 'Có 8 lỗ', 'Có lỗ ngón cái'], 0, 'Sáo VN thổi ngang, 6 lỗ bấm; recorder thổi dọc, 7 lỗ + 1 ngón cái.'),
    Q('Sáo trúc dùng trong âm nhạc?', ['Dân ca, nhạc cổ truyền VN', 'Chỉ thính phòng', 'Chỉ rock', 'Không dùng'], 0, 'Sáo trúc là nhạc cụ truyền thống VN, phổ biến trong dân ca và nhạc cổ truyền.'),
    Q('Hơi thổi nhạc cụ hơi cần?', ['Đều, kiểm soát từ cơ hoành', 'Mạnh ngắt quãng', 'Yếu', 'Bất kỳ'], 0, 'Hơi đều và kiểm soát tốt từ cơ hoành cho âm ổn định và đẹp.'),
  ]),

  M(6, 'Âm nhạc — Nhạc sĩ Bach (J.S. Bach)', [
    Q('J.S. Bach là?', ['Nhạc sĩ Baroque Đức (1685–1750), bậc thầy phức điệu', 'Nhạc sĩ Romantic', 'Nhạc sĩ Jazz', 'Nhạc sĩ rock'], 0, 'Johann Sebastian Bach là đại diện đỉnh cao thời Baroque, nổi tiếng nhạc phức điệu (counterpoint).'),
    Q('Tác phẩm nổi tiếng của Bach?', ['Bình quân luật (WTC), Toccata BWV 565, Brandenburg', 'Symphony 9', '4 mùa', 'Moonlight'], 0, 'Bach: WTC, Toccata & Fugue d-moll BWV 565, Brandenburg Concertos, Mass in B minor…'),
    Q('Phức điệu (polyphony) là?', ['Nhiều bè giai điệu độc lập đan xen', '1 bè giai điệu', '2 bè cùng nốt', 'Đệm hợp âm'], 0, 'Phức điệu = nhiều giai điệu độc lập tiến hành đồng thời.'),
    Q('Bach làm việc chính ở?', ['Leipzig (nhà thờ Thomaskirche), 27 năm', 'Vienna', 'Paris', 'London'], 0, 'Bach đảm nhiệm Kantor ở Thomaskirche, Leipzig từ 1723 đến cuối đời (27 năm).'),
    Q('Ảnh hưởng của Bach đến âm nhạc?', ['Bậc thầy phức điệu, ảnh hưởng đến hầu hết nhạc sĩ sau này', 'Không đáng kể', 'Chỉ trong thời Baroque', 'Chỉ nhạc nhà thờ'], 0, 'Bach được coi là "cha đẻ của âm nhạc Tây phương", ảnh hưởng Mozart, Beethoven, Chopin…'),
  ]),

  M(7, 'Âm nhạc — Nhạc sĩ Mozart (W.A. Mozart)', [
    Q('Mozart là?', ['Nhạc sĩ Classical Áo (1756–1791), thần đồng âm nhạc', 'Baroque', 'Romantic', 'Modern'], 0, 'Wolfgang Amadeus Mozart — thần đồng âm nhạc, đại diện đỉnh cao thời Classical.'),
    Q('Tác phẩm nổi tiếng của Mozart?', ['Eine kleine Nachtmusik, Symphony 40, Requiem, Magic Flute', 'Toccata BWV 565', 'Symphony 9', '4 mùa'], 0, 'Mozart: Eine kleine Nachtmusik K.525, Symphony 40, Requiem, Cây sáo thần (Magic Flute)…'),
    Q('Mozart bắt đầu sáng tác lúc?', ['~5 tuổi', '20 tuổi', '30 tuổi', '50 tuổi'], 0, 'Mozart sáng tác từ ~5 tuổi, biểu diễn khắp châu Âu lúc 6 tuổi.'),
    Q('Đặc trưng âm nhạc Mozart?', ['Cân đối, trong sáng, du dương, có nhiều opera nổi tiếng', 'Phức tạp tối tăm', 'Buồn bã', 'Hỗn loạn'], 0, 'Âm nhạc Mozart: cân đối Classical, trong sáng, du dương, vui tươi (nhưng cũng có chiều sâu).'),
    Q('Mozart mất ở tuổi?', ['35 (1791)', '50', '80', '20'], 0, 'Mozart mất rất trẻ, năm 1791, ở tuổi 35.'),
  ]),

  M(8, 'Âm nhạc — Nhạc sĩ Beethoven (L. van Beethoven)', [
    Q('Beethoven là?', ['Nhạc sĩ chuyển giao Classical-Romantic Đức (1770–1827)', 'Baroque', 'Modern', 'Renaissance'], 0, 'Ludwig van Beethoven nối giữa Classical (Mozart) và Romantic (Schubert, Wagner…).'),
    Q('Tác phẩm nổi tiếng của Beethoven?', ['Symphony 5, 9 (Ode to Joy), Moonlight Sonata, Für Elise', 'Brandenburg', 'Eine kleine Nachtmusik', '4 mùa'], 0, 'Beethoven: Symphony 5 (C minor), 9 (Choral với Ode to Joy), Moonlight Sonata, Für Elise…'),
    Q('Beethoven bị?', ['Điếc dần từ ~28 tuổi nhưng vẫn sáng tác', 'Mù', 'Câm', 'Bình thường'], 0, 'Beethoven mất thính lực dần từ ~28 tuổi, hoàn toàn điếc cuối đời nhưng vẫn sáng tác kiệt tác.'),
    Q('Symphony 9 nổi tiếng vì?', ['Có hợp xướng "Ode to Joy", biểu tượng đoàn kết nhân loại', 'Ngắn', 'Đơn giản', 'Không có gì đặc biệt'], 0, 'Symphony 9 lần đầu đưa hợp xướng vào giao hưởng; "Ode to Joy" là quốc ca EU.'),
    Q('Tinh thần âm nhạc Beethoven?', ['Đấu tranh, vượt số phận, hào hùng', 'Êm dịu', 'Buồn thảm', 'Vô cảm'], 0, 'Âm nhạc Beethoven mạnh mẽ, đấu tranh, vượt số phận — phản ánh chính cuộc đời ông.'),
  ]),

  M(9, 'Mỹ thuật — Luật xa gần (perspective)', [
    Q('Luật xa gần (perspective) là?', ['Quy tắc thể hiện không gian 3D trên mặt phẳng 2D', 'Luật tô màu', 'Luật vẽ tay', 'Quy tắc kích thước'], 0, 'Luật xa gần (perspective) thể hiện chiều sâu không gian trên mặt phẳng 2D.'),
    Q('Vật ở xa được vẽ?', ['Nhỏ hơn, mờ hơn, ít chi tiết hơn', 'To hơn, rõ hơn', 'Giống nhau', 'Mất hẳn'], 0, 'Vật xa: kích thước nhỏ hơn, màu sắc mờ hơn (atmospheric perspective), ít chi tiết.'),
    Q('Đường tầm mắt (horizon line) là?', ['Đường ngang mắt người xem', 'Đường trời', 'Đường đất', 'Đường vẽ'], 0, 'Horizon line = đường ngang mắt người vẽ, là chuẩn để xác định điểm tụ.'),
    Q('Điểm tụ (vanishing point) là?', ['Điểm trên đường tầm mắt mà các đường song song hội tụ', 'Tâm bức tranh', 'Góc tranh', 'Điểm sáng'], 0, 'Vanishing point: nơi các đường thẳng song song trong thực tế tụ về 1 điểm trên đường tầm mắt.'),
    Q('Perspective 1 điểm tụ?', ['Mọi đường vào sâu hội tụ về 1 điểm (vd nhìn dọc đường ray)', '2 điểm', '3 điểm', '0 điểm'], 0, '1-point perspective: nhìn thẳng (đường ray, hành lang) — đường hội tụ 1 điểm.'),
  ]),

  M(10, 'Mỹ thuật — Ký hoạ chân dung', [
    Q('Ký hoạ là?', ['Vẽ nhanh để ghi nhận hình ảnh, tỉ lệ, đặc điểm', 'Vẽ chi tiết cực kỳ', 'Tô màu', 'Chép tranh'], 0, 'Ký hoạ = vẽ nhanh, nắm bắt đặc điểm chính (tỉ lệ, dáng, biểu cảm), không cần chi tiết.'),
    Q('Tỉ lệ chuẩn khuôn mặt người (mắt)?', ['Mắt nằm giữa chiều cao đầu', 'Mắt ở 1/3 trên', 'Mắt ở 2/3 dưới', 'Mắt ở đỉnh đầu'], 0, 'Quy tắc cơ bản: mắt nằm giữa đỉnh đầu và cằm (1/2 chiều cao đầu).'),
    Q('Khoảng cách giữa 2 mắt?', ['~1 con mắt', '2 con mắt', '0.5 con mắt', '3 con mắt'], 0, 'Khoảng cách 2 mắt ~bằng chiều rộng 1 con mắt.'),
    Q('Tỉ lệ chuẩn cơ thể người trưởng thành?', ['~7,5 đầu', '5 đầu', '10 đầu', '3 đầu'], 0, 'Người lớn chuẩn ~7,5–8 đầu. Trẻ em ít hơn (~4–5 đầu).'),
    Q('Khi ký hoạ chân dung cần?', ['Quan sát đặc điểm riêng, không vẽ theo công thức cứng', 'Vẽ ai cũng giống nhau', 'Tô đầy mặt', 'Tránh nhìn người'], 0, 'Ký hoạ tốt: quan sát kỹ đặc điểm riêng (mắt, mũi, miệng, tỉ lệ riêng) của từng người.'),
  ]),

  M(11, 'Mỹ thuật — Tranh tự do (chủ đề học đường)', [
    Q('Khi vẽ tranh tự do cần?', ['Có ý tưởng, bố cục, thể hiện cảm xúc cá nhân', 'Sao chép', 'Vẽ ngẫu nhiên', 'Bắt chước hoàn toàn'], 0, 'Tranh tự do cần ý tưởng riêng, bố cục cân, thể hiện cảm xúc cá nhân.'),
    Q('Bố cục tranh?', ['Sắp xếp các yếu tố theo nguyên tắc cân bằng, điểm nhấn', 'Tuỳ ý', 'Càng đầy càng tốt', 'Trống'], 0, 'Bố cục tốt: cân bằng, có điểm nhấn (focal point), dẫn dắt mắt người xem.'),
    Q('Chủ đề "học đường" có thể vẽ?', ['Lớp học, giờ ra chơi, thầy cô bạn bè, hoạt động trường', 'Chỉ chân dung', 'Chỉ phong cảnh', 'Chỉ tĩnh vật'], 0, 'Chủ đề học đường rất phong phú: lớp học, sân trường, hoạt động, thầy trò…'),
    Q('Hoà sắc nóng-lạnh tạo?', ['Tương phản, gây cảm xúc', 'Không có tác dụng', 'Gây rối', 'Đơn điệu'], 0, 'Tương phản màu nóng (đỏ, cam, vàng) và lạnh (xanh dương, lục, tím) tăng biểu cảm.'),
    Q('Sau khi vẽ xong, cần?', ['Tự đánh giá, học hỏi từ tranh', 'Vứt đi', 'Không xem lại', 'Phá huỷ'], 0, 'Đánh giá tranh giúp nhận ra điểm mạnh-yếu để cải thiện lần sau.'),
  ]),

  M(12, 'Mỹ thuật — Đồ hoạ ấn phẩm (poster, áp phích)', [
    Q('Đồ hoạ ấn phẩm gồm?', ['Poster, áp phích, tờ rơi, bìa sách, logo', 'Chỉ tranh treo', 'Chỉ áo', 'Chỉ điêu khắc'], 0, 'Đồ hoạ ấn phẩm: poster, áp phích, tờ rơi, bìa sách, logo, banner…'),
    Q('Đặc trưng poster?', ['Hình ảnh đậm, chữ ngắn-mạnh, truyền tải thông điệp', 'Chi tiết phức tạp', 'Không có chữ', 'Mờ nhạt'], 0, 'Poster tốt: hình ảnh nổi bật, chữ ít nhưng đậm/rõ, thông điệp 1 câu là chính.'),
    Q('Mục đích poster cổ động?', ['Tuyên truyền 1 chủ đề (bảo vệ MT, sức khoẻ, học tập…)', 'Trang trí thuần', 'Bán hàng', 'Khoe tài'], 0, 'Poster cổ động: tuyên truyền thông điệp xã hội cụ thể (chống thuốc lá, bảo vệ MT…).'),
    Q('Màu sắc poster?', ['Tương phản mạnh để nổi bật từ xa', 'Mờ nhạt', 'Đơn sắc', 'Tuỳ ý'], 0, 'Poster dán xa cần màu tương phản mạnh để bắt mắt từ khoảng cách.'),
    Q('Chữ trên poster?', ['Lớn, dễ đọc, ngắn gọn, font đậm', 'Nhỏ', 'Mờ', 'Cầu kì'], 0, 'Chữ poster: lớn, đậm, ngắn gọn — đọc được trong 3 giây.'),
  ]),

  M(13, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Lý', [
    Q('Thời Lý (1009–1225) nổi tiếng về?', ['Kiến trúc Phật giáo, gốm men ngọc, điêu khắc rồng', 'Thuỷ chiến', 'Tranh sơn dầu', 'Nhiếp ảnh'], 0, 'Mỹ thuật thời Lý đỉnh cao: kiến trúc chùa tháp, gốm men ngọc, điêu khắc rồng đặc trưng.'),
    Q('Chùa tiêu biểu thời Lý?', ['Chùa Một Cột (1049)', 'Chùa Trấn Quốc', 'Chùa Hương', 'Chùa Bái Đính'], 0, 'Chùa Một Cột (Diên Hựu, 1049) là kiệt tác kiến trúc thời Lý — đoá sen vươn lên mặt nước.'),
    Q('Rồng thời Lý có đặc điểm?', ['Thân uốn lượn đều, mềm mại, nhiều khoang', 'Thô bạo', 'Cứng đơ', 'Giống Trung Quốc'], 0, 'Rồng thời Lý: thân uốn nhiều khoang đều, mềm mại, dáng vẻ thanh thoát — đặc trưng VN.'),
    Q('Gốm men ngọc?', ['Men xanh nhạt như ngọc bích', 'Men đen', 'Men trắng tinh', 'Không có men'], 0, 'Gốm Lý nổi tiếng men ngọc (celadon) màu xanh ngọc bích, hoa văn thanh tao.'),
    Q('Tháp thời Lý cao tầng vì?', ['Biểu tượng Phật giáo, ảnh hưởng tâm linh', 'Để ở', 'Để chiến đấu', 'Trang trí thuần'], 0, 'Tháp đa tầng là biểu tượng vũ trụ Phật giáo, ảnh hưởng ý nghĩa tâm linh sâu sắc.'),
  ]),

  M(14, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Trần', [
    Q('Thời Trần (1225–1400) phát triển?', ['Kiến trúc đền, lăng tẩm, gốm hoa nâu, điêu khắc khoẻ', 'Tranh sơn dầu', 'Nhiếp ảnh', 'Truyện tranh'], 0, 'Mỹ thuật Trần phát triển trên nền Lý, thêm chất khoẻ khoắn, gốm hoa nâu đặc trưng.'),
    Q('Đặc điểm gốm thời Trần?', ['Hoa nâu trên nền trắng ngà', 'Men ngọc xanh', 'Đen tuyền', 'Trắng tinh'], 0, 'Gốm hoa nâu Trần: vẽ hoa văn nâu trên nền men trắng ngà.'),
    Q('Rồng thời Trần?', ['Khoẻ khoắn hơn Lý, mạnh mẽ', 'Yếu hơn Lý', 'Giống hệt Lý', 'Không có rồng'], 0, 'Rồng Trần: khoẻ khoắn, mạnh mẽ hơn rồng Lý, phản ánh tinh thần thượng võ.'),
    Q('Lăng mộ tiêu biểu thời Trần?', ['An sinh, Long Hưng (Thái Bình)', 'Tự Đức', 'Ba Vì', 'Hà Nội'], 0, 'Khu lăng An sinh, Long Hưng (Thái Bình) là di tích lăng tẩm tiêu biểu nhà Trần.'),
    Q('Tinh thần thời Trần phản ánh trong nghệ thuật?', ['Hào hùng (3 lần đánh thắng Nguyên-Mông)', 'Buồn bã', 'Yếu đuối', 'Vô cảm'], 0, 'Tinh thần Đông A — chiến thắng Nguyên-Mông — phản ánh qua nét khoẻ khoắn của nghệ thuật.'),
  ]),

  M(15, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Lê', [
    Q('Thời Lê (1428–1788) nổi tiếng?', ['Tượng đá lăng mộ, gốm hoa lam Chu Đậu', 'Tranh sơn dầu', 'Đồng hồ', 'Cơ khí'], 0, 'Mỹ thuật Lê: tượng đá lăng mộ (Lam Kinh, lăng vua Lê), gốm hoa lam Chu Đậu nổi tiếng quốc tế.'),
    Q('Gốm Chu Đậu (Hải Dương)?', ['Hoa lam (cobalt xanh dương), xuất khẩu nhiều nước', 'Men ngọc', 'Hoa nâu', 'Đen tuyền'], 0, 'Gốm Chu Đậu: hoa lam xanh trên nền trắng, xuất khẩu khắp Đông Nam Á.'),
    Q('Đình làng phát triển ở?', ['Thời Lê Trung Hưng (XVI–XVIII)', 'Lý', 'Trần', 'Nguyễn'], 0, 'Đình làng phát triển mạnh thời Lê Trung Hưng (XVI–XVIII).'),
    Q('Đình làng có chức năng?', ['Nơi sinh hoạt cộng đồng + thờ thành hoàng', 'Chỉ thờ cúng', 'Chỉ họp', 'Chỉ chợ'], 0, 'Đình là trung tâm văn hoá làng: thờ thành hoàng + sinh hoạt cộng đồng (họp, hội hè).'),
    Q('Điêu khắc đình làng?', ['Sinh động, đời thường (cảnh sinh hoạt, lao động)', 'Cứng đơ', 'Tôn giáo thuần', 'Trừu tượng'], 0, 'Điêu khắc đình làng đặc trưng: cảnh sinh hoạt nhân gian, lao động — gần gũi đời thường.'),
  ]),

  M(16, 'Mỹ thuật — Mỹ thuật thời Nguyễn', [
    Q('Thời Nguyễn (1802–1945) nổi tiếng?', ['Kiến trúc cung đình Huế, tranh khắc gỗ, gốm Bát Tràng', 'Tranh sơn dầu phương Tây', 'Tượng đồng cận đại', 'Tranh acrylic'], 0, 'Mỹ thuật Nguyễn: cung đình Huế, tranh khắc gỗ dân gian (Đông Hồ, Hàng Trống), gốm Bát Tràng.'),
    Q('Cung đình Huế là di sản?', ['UNESCO Di sản văn hoá thế giới (1993)', 'Di tích quốc gia', 'Chỉ địa phương', 'Không di sản'], 0, 'Quần thể di tích cố đô Huế được UNESCO công nhận năm 1993.'),
    Q('Tranh Đông Hồ (Bắc Ninh) là?', ['Tranh khắc gỗ dân gian, in giấy điệp', 'Tranh sơn dầu', 'Tranh lụa', 'Tranh acrylic'], 0, 'Tranh Đông Hồ khắc gỗ nhiều bản, in trên giấy điệp (giấy dó phủ vỏ điệp).'),
    Q('Chủ đề tranh Đông Hồ?', ['Đời sống nhân dân, mong ước (lợn, gà, đám cưới chuột…)', 'Vua chúa', 'Trừu tượng', 'Khoa học'], 0, 'Tranh Đông Hồ thể hiện đời sống nhân dân, mong ước phồn thực (lợn nái, gà đông cáo, đám cưới chuột).'),
    Q('Tranh Hàng Trống (Hà Nội)?', ['Tranh dân gian, vẽ tay tinh tế hơn Đông Hồ', 'Tranh khắc gỗ', 'Tranh thuỷ mặc', 'Tranh sơn dầu'], 0, 'Tranh Hàng Trống: in nét đen, sau đó vẽ tay tô màu — tinh tế, dùng trong nhà thờ tổ.'),
  ]),

  M(17, 'Âm nhạc — Dân ca quốc tế (Folk music)', [
    Q('Dân ca là?', ['Bài hát của nhân dân, truyền miệng, không rõ tác giả', 'Nhạc cổ điển', 'Nhạc pop hiện đại', 'Nhạc rock'], 0, 'Dân ca = folk music: bài hát của nhân dân, truyền miệng qua nhiều thế hệ.'),
    Q('Dân ca Anh nổi tiếng?', ['Greensleeves, Scarborough Fair', 'La Cumparsita', 'Auld Lang Syne (cũng Scotland)', 'Edelweiss'], 0, 'Dân ca Anh: Greensleeves, Scarborough Fair là 2 bài tiêu biểu.'),
    Q('Dân ca Mỹ tiêu biểu?', ['Oh Susanna, Yankee Doodle, Country Roads', 'Greensleeves', 'La Cumparsita', 'Edelweiss'], 0, 'Dân ca/folk Mỹ: Oh Susanna (Stephen Foster), Yankee Doodle, Country Roads…'),
    Q('Đặc trưng dân ca các nước?', ['Phản ánh văn hoá, đời sống, ngôn ngữ vùng đó', 'Giống nhau', 'Phổ quát', 'Vô nghĩa'], 0, 'Mỗi dân tộc có dân ca riêng phản ánh văn hoá, đời sống và ngôn ngữ của họ.'),
    Q('Học dân ca quốc tế giúp?', ['Hiểu văn hoá thế giới, mở rộng âm nhạc', 'Mất bản sắc', 'Không có lợi', 'Quên dân ca VN'], 0, 'Học dân ca thế giới mở rộng hiểu biết văn hoá; vẫn giữ và yêu dân ca VN.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Đảo phách là?', ['Nhấn phách yếu', 'Nhấn phách mạnh', 'Không nhấn', 'Đảo nốt'], 0, 'Định nghĩa.'),
    Q('Bach thuộc thời?', ['Baroque', 'Classical', 'Romantic', 'Modern'], 0, '1685–1750.'),
    Q('Đường tầm mắt là?', ['Ngang mắt người vẽ', 'Đường trời', 'Đường đất', 'Trung tâm tranh'], 0, 'Perspective.'),
    Q('Tranh Đông Hồ ở?', ['Bắc Ninh', 'Hà Nội', 'Huế', 'Sài Gòn'], 0, 'Làng Đông Hồ.'),
    Q('Hợp âm C7 có nốt?', ['C-E-G-Bb', 'C-E-G-B', 'C-E-G', 'C-D-E'], 0, 'Dominant 7th.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Âm nhạc — Thể loại nhạc thính phòng (chamber music)', [
    Q('Nhạc thính phòng là?', ['Nhạc cho nhóm nhỏ (2–9 nhạc cụ), không có nhạc trưởng', 'Nhạc dàn lớn', 'Nhạc 1 người', 'Nhạc pop'], 0, 'Chamber music: nhạc cho 2–9 người chơi, biểu diễn trong phòng nhỏ, không có nhạc trưởng.'),
    Q('Tứ tấu dây gồm?', ['2 violin, 1 viola, 1 cello', '4 violin', '3 violin + cello', '4 piano'], 0, 'String quartet kinh điển: 2 violins + viola + cello.'),
    Q('Tam tấu piano?', ['Piano + violin + cello', 'Piano + flute + violin', '3 piano', 'Piano + 2 cello'], 0, 'Piano trio: piano + violin + cello (kết hợp piano + 2 dây).'),
    Q('Đặc trưng nhạc thính phòng?', ['Tinh tế, đối thoại giữa các nhạc cụ', 'Hoành tráng', 'Hỗn loạn', 'Đơn điệu'], 0, 'Chamber music: tinh tế, các nhạc cụ "trò chuyện" với nhau như đối thoại.'),
    Q('Nhạc sĩ tứ tấu nổi tiếng?', ['Haydn (cha đẻ tứ tấu), Mozart, Beethoven', 'Wagner', 'Verdi', 'Puccini'], 0, 'Haydn (cha đẻ) → Mozart → Beethoven phát triển string quartet đến đỉnh cao.'),
  ]),

  M(20, 'Âm nhạc — Nhạc kịch (Opera) cơ bản', [
    Q('Opera là?', ['Sân khấu kịch + âm nhạc + giọng hát + dàn nhạc', 'Bài hát ngắn', 'Nhạc thuần tuý', 'Phim'], 0, 'Opera = nghệ thuật tổng hợp: kịch + âm nhạc + giọng hát + dàn nhạc + sân khấu.'),
    Q('Opera có nguồn gốc?', ['Ý (Italy), cuối thế kỷ XVI', 'Đức', 'Pháp', 'Anh'], 0, 'Opera ra đời ở Florence (Ý) cuối XVI; tiếng Ý "opera" = tác phẩm.'),
    Q('Phần solo trong opera?', ['Aria (đoạn hát đơn thể hiện cảm xúc)', 'Chorus', 'Recitative', 'Overture'], 0, 'Aria = đoạn hát đơn diễn cảm xúc nhân vật. Recitative = nói-hát đẩy cốt truyện.'),
    Q('Mozart viết opera nổi tiếng?', ['Cây sáo thần (Magic Flute), Don Giovanni, Le nozze di Figaro', 'Carmen', 'La Traviata', 'Aida'], 0, 'Mozart: Magic Flute, Don Giovanni, Le nozze di Figaro (Đám cưới Figaro)…'),
    Q('Opera có ở VN?', ['Có — chèo, tuồng, cải lương là dạng opera VN', 'Không', 'Mới có gần đây', 'Chỉ học opera Tây'], 0, 'Chèo, tuồng, cải lương là dạng opera truyền thống VN — kết hợp kịch + âm nhạc + diễn.'),
  ]),

  M(21, 'Mỹ thuật — Tranh sơn dầu cơ bản', [
    Q('Sơn dầu là?', ['Loại sơn dùng dầu (linseed) làm chất kết dính', 'Sơn nước', 'Acrylic', 'Phấn'], 0, 'Sơn dầu dùng dầu lanh (linseed) làm chất kết dính các sắc tố — bền màu, lâu khô.'),
    Q('Ưu điểm sơn dầu?', ['Bền màu, có thể chồng lớp, sửa được lâu', 'Khô nhanh', 'Rẻ', 'Không màu'], 0, 'Sơn dầu: bền hàng trăm năm, có thể chồng lớp tinh tế, sửa được khi còn ướt.'),
    Q('Sơn dầu khô?', ['Rất chậm (vài ngày đến vài tuần)', 'Tức thì', '1 giờ', 'Không bao giờ khô'], 0, 'Sơn dầu khô bằng phản ứng oxy hoá — chậm (mặt khô ~2-3 ngày, khô hẳn ~6 tháng).'),
    Q('Họa sĩ sơn dầu nổi tiếng thế giới?', ['Da Vinci, Van Gogh, Picasso, Rembrandt', 'Bach', 'Mozart', 'Edison'], 0, 'Da Vinci (Mona Lisa), Van Gogh (Đêm đầy sao), Rembrandt, Picasso… là họa sĩ sơn dầu danh tiếng.'),
    Q('Họa sĩ sơn dầu VN tiêu biểu?', ['Tô Ngọc Vân, Trần Văn Cẩn, Nguyễn Phan Chánh', 'Picasso', 'Van Gogh', 'Da Vinci'], 0, 'Tô Ngọc Vân (Thiếu nữ bên hoa huệ), Trần Văn Cẩn, Nguyễn Phan Chánh… là các họa sĩ VN nổi tiếng.'),
  ]),

  M(22, 'Mỹ thuật — Tranh lụa Việt Nam', [
    Q('Tranh lụa là?', ['Tranh vẽ trên nền lụa, đặc trưng VN và châu Á', 'Tranh trên giấy', 'Tranh trên gỗ', 'Tranh trên kim loại'], 0, 'Tranh lụa: vẽ trên lụa tằm, kỹ thuật đặc biệt của VN và Đông Á.'),
    Q('Kỹ thuật tranh lụa?', ['Nhuộm và rửa lụa nhiều lần để tạo độ trong', 'Vẽ nhanh', 'Vẽ tô', 'Phun sơn'], 0, 'Kỹ thuật: vẽ → rửa → vẽ lại nhiều lần → tạo độ trong, trong veo đặc trưng.'),
    Q('Đặc trưng tranh lụa VN?', ['Mềm mại, thanh thoát, trữ tình', 'Mạnh mẽ, gồ ghề', 'Hỗn loạn', 'Cứng đơ'], 0, 'Tranh lụa mềm mại, thanh thoát, trữ tình — phù hợp tâm hồn Á Đông.'),
    Q('Họa sĩ tranh lụa VN tiêu biểu?', ['Nguyễn Phan Chánh, Lê Phổ, Nguyễn Tiến Chung', 'Tô Ngọc Vân (sơn dầu chính)', 'Bùi Xuân Phái', 'Trần Văn Cẩn'], 0, 'Nguyễn Phan Chánh là bậc thầy tranh lụa VN; Lê Phổ, Nguyễn Tiến Chung cũng nổi tiếng.'),
    Q('Tranh lụa "Chơi ô ăn quan" của?', ['Nguyễn Phan Chánh (1931)', 'Tô Ngọc Vân', 'Lê Phổ', 'Bùi Xuân Phái'], 0, '"Chơi ô ăn quan" (1931) của Nguyễn Phan Chánh — kiệt tác tranh lụa VN.'),
  ]),

  M(23, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Pháp thuộc', [
    Q('Trường Mỹ thuật Đông Dương thành lập?', ['1925 tại Hà Nội', '1900', '1945', '1975'], 0, 'École des Beaux-Arts de l\'Indochine thành lập 1925 tại Hà Nội, do Pháp lập.'),
    Q('Hiệu trưởng đầu tiên?', ['Victor Tardieu', 'Picasso', 'Bùi Xuân Phái', 'Tô Ngọc Vân'], 0, 'Victor Tardieu — họa sĩ Pháp, hiệu trưởng đầu tiên Trường Mỹ thuật Đông Dương.'),
    Q('Họa sĩ thế hệ đầu nổi tiếng?', ['Nguyễn Phan Chánh, Tô Ngọc Vân, Trần Văn Cẩn, Nguyễn Gia Trí', 'Picasso', 'Bùi Xuân Phái', 'Nguyễn Tư Nghiêm'], 0, '4 họa sĩ thế hệ đầu tiêu biểu của trường: Phan Chánh, Tô Ngọc Vân, Trần Văn Cẩn, Gia Trí.'),
    Q('Tranh sơn mài VN phát triển?', ['Từ thời Pháp thuộc, Nguyễn Gia Trí khai phá', 'Thời Lý', 'Thời Nguyễn', 'Sau 1975'], 0, 'Sơn mài truyền thống chỉ dùng trang trí; Nguyễn Gia Trí phát triển thành tranh nghệ thuật từ ~1930.'),
    Q('Tinh thần mỹ thuật giai đoạn này?', ['Kết hợp truyền thống VN + kỹ thuật phương Tây', 'Chỉ Tây', 'Chỉ truyền thống', 'Vô bản sắc'], 0, 'Họa sĩ Đông Dương: học kỹ thuật Tây nhưng vẽ về VN, dùng cảm xúc và chất liệu VN.'),
  ]),

  M(24, 'Âm nhạc — Nhạc Romantic (Chopin, Schumann, Schubert)', [
    Q('Thời Romantic kéo dài?', ['~1820–1900', '1500–1600', '1700–1750', '1900–2000'], 0, 'Romantic period: ~1820–1900, sau Classical (Mozart, Beethoven).'),
    Q('Chopin nổi tiếng về?', ['Nhạc piano (Nocturne, Etude, Mazurka, Polonaise)', 'Symphony', 'Opera', 'Sonata violin'], 0, 'Frédéric Chopin (1810–1849): bậc thầy piano, Nocturne, Etude, Mazurka, Polonaise.'),
    Q('Schubert nổi tiếng về?', ['Lieder (ca khúc nghệ thuật) + Unfinished Symphony', 'Opera', 'Concerto', 'Bài hát pop'], 0, 'Franz Schubert (1797–1828): bậc thầy Lieder (>600 bài) + Symphony số 8 "Unfinished".'),
    Q('Đặc trưng âm nhạc Romantic?', ['Cảm xúc mãnh liệt, cá nhân, hoành tráng', 'Cân đối lạnh lùng', 'Đơn giản', 'Không có cảm xúc'], 0, 'Romantic: đề cao cá nhân, cảm xúc mãnh liệt (tình yêu, thiên nhiên, dân tộc).'),
    Q('Nhạc Romantic ảnh hưởng đến?', ['Cảm xúc, dân tộc, hình tượng anh hùng', 'Toán học', 'Khoa học', 'Không có'], 0, 'Romantic gắn với phong trào dân tộc (Chopin-Ba Lan, Smetana-Séc, Sibelius-Phần Lan…).'),
  ]),

  M(25, 'Âm nhạc — Nhạc dân ca Việt Nam vùng miền', [
    Q('Dân ca Bắc Bộ tiêu biểu?', ['Quan họ Bắc Ninh, hát chèo, hát xẩm', 'Lý ngựa ô', 'Vọng cổ', 'Ví dặm'], 0, 'Bắc Bộ: quan họ Bắc Ninh (UNESCO), chèo, ca trù, hát xẩm.'),
    Q('Dân ca Trung Bộ tiêu biểu?', ['Hò Huế, ca Huế, ví dặm Nghệ Tĩnh, bài chòi', 'Vọng cổ', 'Quan họ', 'Lý ngựa ô'], 0, 'Trung Bộ: ca Huế (đặc trưng), hò Huế, ví dặm Nghệ-Tĩnh, bài chòi Quảng Nam…'),
    Q('Dân ca Nam Bộ tiêu biểu?', ['Đờn ca tài tử, vọng cổ, hò sông nước, lý', 'Quan họ', 'Chèo', 'Ca trù'], 0, 'Nam Bộ: đờn ca tài tử (UNESCO), vọng cổ, hò Nam Bộ, các điệu lý.'),
    Q('Đặc trưng dân ca quan họ?', ['Đối đáp nam-nữ, áo tứ thân, nón quai thao', 'Solo', 'Múa lân', 'Hát rap'], 0, 'Quan họ: hát đối đáp liền anh-liền chị, trang phục áo tứ thân, nón quai thao.'),
    Q('Đờn ca tài tử Nam Bộ?', ['Nhạc thính phòng dân gian, nhạc cụ chủ đạo: đờn kìm, tranh, cò, độc huyền', 'Hợp xướng lớn', 'Nhạc giao hưởng', 'Nhạc trẻ'], 0, 'Đờn ca tài tử: nhạc thính phòng dân gian, có dàn nhạc 4–6 cụ + hát ngẫu hứng.'),
  ]),

  M(26, 'Mỹ thuật — Thiết kế ứng dụng (graphic design)', [
    Q('Graphic design là?', ['Thiết kế truyền thông trực quan (logo, poster, bao bì, web…)', 'Vẽ tranh', 'Điêu khắc', 'Nhiếp ảnh'], 0, 'Graphic design: thiết kế truyền thông qua hình ảnh — logo, poster, UI, bao bì…'),
    Q('Phần mềm thiết kế phổ biến?', ['Adobe Photoshop, Illustrator, Canva, Figma', 'Excel', 'Notepad', 'PowerPoint chỉ'], 0, 'Photoshop (ảnh), Illustrator (vector), Canva (đơn giản), Figma (UI/web).'),
    Q('Logo tốt cần?', ['Đơn giản, dễ nhớ, ý nghĩa, mở rộng được', 'Phức tạp', 'Nhiều màu', 'Có chữ dài'], 0, 'Logo tốt: đơn giản, dễ nhớ, có ý nghĩa, nhận dạng ở mọi kích thước.'),
    Q('Nguyên tắc thiết kế cơ bản?', ['Cân bằng, tương phản, lặp lại, căn chỉnh', 'Tuỳ ý', 'Đầy mọi chỗ', 'Trống mọi chỗ'], 0, 'CRAP: Contrast (tương phản), Repetition (lặp lại), Alignment (căn chỉnh), Proximity (gần xa).'),
    Q('Màu sắc trong thiết kế?', ['Truyền tải cảm xúc, có ý nghĩa văn hoá', 'Tuỳ thích', 'Không quan trọng', 'Càng nhiều càng tốt'], 0, 'Màu có nghĩa: đỏ (nóng, cảnh báo), xanh dương (tin cậy), xanh lá (tự nhiên)…'),
  ]),

  M(27, 'Mỹ thuật — Tranh vẽ đời sống', [
    Q('Tranh đời sống (genre painting) là?', ['Tranh thể hiện cảnh sinh hoạt hàng ngày', 'Chân dung', 'Phong cảnh', 'Trừu tượng'], 0, 'Genre painting: tranh thể hiện cảnh đời sống hàng ngày của người dân.'),
    Q('Họa sĩ VN nổi tiếng tranh đời sống?', ['Bùi Xuân Phái (phố cổ Hà Nội), Tô Ngọc Vân (thiếu nữ)', 'Mozart', 'Beethoven', 'Bach'], 0, 'Bùi Xuân Phái: phố cổ Hà Nội. Tô Ngọc Vân: "Thiếu nữ bên hoa huệ"…'),
    Q('Bùi Xuân Phái nổi tiếng?', ['Vẽ phố cổ Hà Nội ("Phố Phái")', 'Tranh sơn dầu Tây', 'Trừu tượng', 'Acrylic'], 0, '"Phố Phái" — tranh phố cổ Hà Nội của Bùi Xuân Phái — biểu tượng văn hoá Hà Nội.'),
    Q('Tranh "Em Thuý" của?', ['Trần Văn Cẩn (1944)', 'Tô Ngọc Vân', 'Bùi Xuân Phái', 'Nguyễn Phan Chánh'], 0, '"Em Thuý" (1944) của Trần Văn Cẩn — bảo vật quốc gia, chân dung trẻ em VN.'),
    Q('Vẽ đời sống cần?', ['Quan sát kỹ, nắm bắt đặc trưng, tình cảm', 'Sao chép ảnh', 'Vẽ tự do', 'Bịa'], 0, 'Vẽ đời sống đòi hỏi quan sát kỹ con người, cảnh vật và truyền cảm xúc người vẽ.'),
  ]),

  M(28, 'Âm nhạc — Nhạc cụ dân tộc Việt Nam', [
    Q('Đàn bầu là?', ['Nhạc cụ 1 dây độc đáo của VN', 'Nhạc cụ phương Tây', 'Đàn 2 dây', 'Nhạc cụ Trung Quốc'], 0, 'Đàn bầu (độc huyền cầm): nhạc cụ 1 dây độc nhất vô nhị của VN.'),
    Q('Đàn tranh có bao nhiêu dây?', ['16 (hoặc 17, 21 dây hiện đại)', '5', '4', '6'], 0, 'Đàn tranh: 16 dây cổ truyền; hiện đại có 17 và 21 dây.'),
    Q('Đàn nhị (đàn cò) thuộc nhóm?', ['Dây kéo (cung)', 'Dây gảy', 'Hơi', 'Gõ'], 0, 'Đàn nhị/đàn cò: 2 dây, kéo bằng cung — thuộc nhóm dây kéo.'),
    Q('Sáo trúc VN làm bằng?', ['Trúc/tre', 'Kim loại', 'Nhựa', 'Gỗ'], 0, 'Sáo trúc truyền thống làm bằng cây trúc — nhẹ, vang.'),
    Q('Đàn đáy là nhạc cụ?', ['3 dây, gõ-gảy, dùng trong ca trù', 'Phương Tây', '6 dây', 'Khôngdây'], 0, 'Đàn đáy: 3 dây, cần dài, dùng đệm trong ca trù (di sản UNESCO).'),
  ]),

  M(29, 'Âm nhạc — Hình thức bài hát (verse-chorus, A-B-A)', [
    Q('Hình thức A-B-A (3 phần) là?', ['Câu 1 (A) → câu 2 khác (B) → quay lại câu 1 (A)', 'A-A-A', 'A-B-C', 'A-B-C-D'], 0, 'Hình thức 3 phần A-B-A (ternary form): A (mở) → B (đối) → A (trở lại).'),
    Q('Verse-Chorus phổ biến trong?', ['Nhạc pop, rock, dân ca hiện đại', 'Chỉ cổ điển', 'Chỉ jazz', 'Chỉ chèo'], 0, 'Hình thức verse-chorus thống trị nhạc pop, rock hiện đại.'),
    Q('Verse là?', ['Đoạn kể, mỗi lần lời khác', 'Đoạn lặp', 'Đoạn cuối', 'Đoạn mở đầu'], 0, 'Verse: đoạn lời thay đổi mỗi lần lặp — kể câu chuyện.'),
    Q('Chorus (điệp khúc) là?', ['Đoạn lặp, lời giống nhau, dễ nhớ', 'Đoạn kể', 'Đoạn mở', 'Đoạn cuối'], 0, 'Chorus: đoạn lặp với cùng lời, thường là cao trào, dễ nhớ — "hook" của bài hát.'),
    Q('Bridge trong bài hát là?', ['Đoạn chuyển khác biệt giữa các chorus', 'Cầu', 'Verse mới', 'Chorus mới'], 0, 'Bridge: đoạn khác biệt (thường ở 2/3 bài) tạo điểm nhấn trước chorus cuối.'),
  ]),

  M(30, 'Mỹ thuật — Trang trí và ứng dụng (ergonomic design)', [
    Q('Trang trí ứng dụng nghĩa là?', ['Trang trí gắn với chức năng (đồ vật dùng được)', 'Trang trí thuần tuý', 'Vẽ tranh treo', 'Điêu khắc'], 0, 'Trang trí ứng dụng: nghệ thuật gắn với vật dụng (ấm, áo, đồ nội thất, sản phẩm…).'),
    Q('Khi trang trí đồ vật cần?', ['Phù hợp công năng, không cản trở chức năng', 'Càng phức tạp càng tốt', 'Không quan tâm công năng', 'Sao chép'], 0, 'Trang trí ứng dụng tốt: phù hợp công năng, đẹp + dùng được.'),
    Q('Trang trí vải/áo dùng?', ['Hoa văn, in, thêu, dệt', 'Sơn dầu', 'Khắc gỗ', 'Đắp tượng'], 0, 'Trang trí vải: in, dệt, thêu, batik (sáp ong) — phù hợp chất liệu mềm.'),
    Q('Họa tiết truyền thống VN?', ['Mây, sóng, hoa sen, rồng phượng', 'Hoa hồng Tây', 'Sao 5 cánh', 'Họa tiết kỹ thuật'], 0, 'Họa tiết VN truyền thống: mây, sóng, hoa sen, rồng phượng, trống đồng…'),
    Q('Trang trí trong nhà cần?', ['Hài hoà tổng thể, tạo không gian dễ chịu', 'Đầy mọi nơi', 'Trống', 'Tuỳ ý'], 0, 'Trang trí nhà: hài hoà tổng thể, tạo cảm giác dễ chịu, phù hợp công năng.'),
  ]),

  M(31, 'Âm nhạc — Sáng tác và biểu diễn nhóm', [
    Q('Sáng tác bài hát đơn giản gồm?', ['Lời + giai điệu + đệm hoà thanh', 'Chỉ lời', 'Chỉ giai điệu', 'Chỉ đệm'], 0, '3 thành phần: lời (lyrics), giai điệu (melody), đệm hoà thanh (chords).'),
    Q('Cấu trúc 1 bài hát phổ biến?', ['Intro – Verse – Chorus – Verse – Chorus – Bridge – Chorus – Outro', 'Chỉ verse', 'Chỉ chorus', 'Tuỳ ý'], 0, 'Cấu trúc phổ biến: intro → verse → chorus → verse → chorus → bridge → chorus → outro.'),
    Q('Khi biểu diễn nhóm, cần?', ['Tập luyện chung, đồng đều, phối hợp', 'Tự do', 'Cạnh tranh nhau', 'Át tiếng nhau'], 0, 'Biểu diễn nhóm: phối hợp, đồng đều, lắng nghe nhau, tôn trọng vai trò mỗi người.'),
    Q('Vai trò trong ban nhạc?', ['Hát chính, hát bè, guitar, bass, trống, keyboard…', 'Tất cả như nhau', 'Chỉ hát', 'Chỉ chơi nhạc cụ'], 0, 'Ban nhạc có nhiều vai trò: hát chính, bè, các nhạc cụ — mỗi người có vai trò riêng.'),
    Q('Tinh thần khi biểu diễn?', ['Tự tin, vui vẻ, truyền cảm xúc cho khán giả', 'Sợ hãi', 'Lạnh lùng', 'Vô cảm'], 0, 'Biểu diễn cần tự tin + cảm xúc thật + giao lưu với khán giả.'),
  ]),

  M(32, 'Mỹ thuật — Sắp đặt (Installation art)', [
    Q('Sắp đặt (installation art) là?', ['Tác phẩm 3D đặt trong không gian, người xem đi vào trải nghiệm', 'Tranh treo', 'Tượng nhỏ', 'Phim'], 0, 'Installation art: tác phẩm 3D trong không gian, người xem trải nghiệm trực tiếp.'),
    Q('Đặc trưng sắp đặt?', ['Tương tác với không gian + người xem', 'Tĩnh', 'Khô khan', 'Tách rời người xem'], 0, 'Installation tương tác mạnh với không gian và người xem — không thể tách rời.'),
    Q('Vật liệu trong sắp đặt?', ['Đa dạng: gỗ, kim loại, vải, ánh sáng, âm thanh, video', 'Chỉ sơn', 'Chỉ giấy', 'Chỉ đá'], 0, 'Sắp đặt dùng đủ vật liệu: tự nhiên, công nghệ, ánh sáng, âm thanh, video…'),
    Q('Nghệ sĩ sắp đặt nổi tiếng quốc tế?', ['Yayoi Kusama (chấm tròn), Olafur Eliasson (ánh sáng)', 'Mozart', 'Van Gogh', 'Picasso'], 0, 'Yayoi Kusama (chấm tròn, infinity rooms), Olafur Eliasson (ánh sáng, thiên nhiên)…'),
    Q('Sắp đặt ở VN?', ['Nguyễn Mạnh Hùng, Đinh Q. Lê và nhiều nghệ sĩ trẻ', 'Không có', 'Chỉ ở Tây', 'Chỉ trong bảo tàng'], 0, 'VN có nhiều nghệ sĩ sắp đặt: Nguyễn Mạnh Hùng, Đinh Q. Lê, Lê Quý Anh Hào…'),
  ]),

  M(33, 'Mỹ thuật — Nhiếp ảnh (photography) cơ bản', [
    Q('Nhiếp ảnh là?', ['Nghệ thuật ghi hình bằng máy ảnh', 'Vẽ tay', 'Khắc gỗ', 'Điêu khắc'], 0, 'Nhiếp ảnh = photography: nghệ thuật ghi hình bằng máy ảnh.'),
    Q('Bố cục 1/3 (rule of thirds) là?', ['Chia khung thành 3x3, đặt chủ thể ở giao điểm', 'Đặt giữa', 'Đặt góc', 'Tuỳ ý'], 0, 'Rule of thirds: chia khung 3x3, đặt chủ thể ở 1 trong 4 giao điểm để bố cục đẹp.'),
    Q('Ánh sáng tự nhiên tốt nhất?', ['Golden hour (sáng sớm/chiều muộn) — ánh sáng ấm, dịu', 'Trưa nắng gắt', 'Tối hẳn', 'Bất kỳ lúc nào'], 0, 'Golden hour (~1h sau bình minh / trước hoàng hôn) cho ánh sáng vàng đẹp nhất.'),
    Q('Tốc độ màn trập (shutter speed)?', ['Thời gian màn trập mở — ảnh hưởng độ mờ chuyển động', 'Khẩu độ', 'ISO', 'Tiêu cự'], 0, 'Shutter speed: thời gian mở màn trập. Nhanh → đóng băng chuyển động; chậm → mờ chuyển động.'),
    Q('Khẩu độ (aperture) ảnh hưởng?', ['Độ sâu trường ảnh (xoá phông)', 'Tốc độ', 'ISO', 'Tiêu cự'], 0, 'Khẩu độ lớn (f/1.8): xoá phông mạnh; nhỏ (f/16): rõ từ gần đến xa.'),
  ]),

  M(34, 'Tổng kết — Triển lãm/biểu diễn cuối năm', [
    Q('Triển lãm mỹ thuật cần?', ['Chọn tác phẩm, sắp xếp không gian, ánh sáng, chú thích', 'Treo tuỳ ý', 'Không cần sắp xếp', 'Chỉ trưng bày 1 tác phẩm'], 0, 'Triển lãm: tuyển chọn → bố cục không gian → ánh sáng → chú thích cho từng tác phẩm.'),
    Q('Biểu diễn âm nhạc cuối kì cần?', ['Tập luyện, chuẩn bị nhạc cụ, trang phục, sân khấu', 'Tự nhiên', 'Không tập', 'Không cần nhạc cụ'], 0, 'Biểu diễn: tập luyện kỹ + chuẩn bị nhạc cụ + trang phục + sân khấu + âm thanh.'),
    Q('Vai trò khán giả?', ['Tôn trọng, lắng nghe, vỗ tay đúng lúc', 'Nói chuyện', 'Quay video không xin phép', 'Bỏ về'], 0, 'Khán giả lịch sự: yên lặng nghe, vỗ tay đúng lúc (cuối tác phẩm/chương), tôn trọng người biểu diễn.'),
    Q('Đánh giá nghệ thuật dựa trên?', ['Ý tưởng, kỹ thuật, cảm xúc, tổng thể', 'Chỉ kỹ thuật', 'Chỉ cảm xúc', 'Chỉ giá tiền'], 0, 'Đánh giá đa chiều: ý tưởng (concept) + kỹ thuật + cảm xúc + tổng thể tác phẩm.'),
    Q('Cảm xúc sau khi tham gia?', ['Trân trọng nghệ thuật, học hỏi từ bạn bè', 'Khinh chê', 'Vô cảm', 'Ganh ghét'], 0, 'Học nghệ thuật: trân trọng cái đẹp, học hỏi từ đồng nghiệp, không ganh đua.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Nhịp 4/4 có?', ['4 phách/ô nhịp', '2 phách', '3 phách', '6 phách'], 0, 'Số chỉ nhịp.'),
    Q('Chùa Một Cột xây thời?', ['Lý', 'Trần', 'Lê', 'Nguyễn'], 0, '1049.'),
    Q('Beethoven Symphony số mấy có Ode to Joy?', ['9', '5', '6', '7'], 0, 'Choral Symphony.'),
    Q('Tranh "Em Thuý" của?', ['Trần Văn Cẩn', 'Tô Ngọc Vân', 'Bùi Xuân Phái', 'Phan Chánh'], 0, '1944.'),
    Q('Đàn bầu có bao nhiêu dây?', ['1', '2', '3', '4'], 0, 'Độc huyền.'),
  ]),
];

export const S8NT_SCENARIOS = indexBy(S8NT_WEEKS);
