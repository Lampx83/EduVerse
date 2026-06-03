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
    Q('7 nốt nhạc cơ bản?', ['Cả A và B (2 cách gọi khác nhau)', 'Do, Re, Mi, Fa, Sol, La, Si', 'Chỉ Do, Re, Mi', 'A, B, C, D, E, F, G'], 0, 'Tên Latin (Do, Re, Mi…) và tên Anh (C, D, E…) là 2 cách gọi cùng các nốt.'),
    Q('Khoá Sol đặt ở dòng?', ['Dòng 2 (đếm từ dưới)', 'Dòng 1', 'Dòng 5', 'Dòng 3'], 0, 'Khoá Sol xác định vị trí Sol ở dòng 2 (treble clef).'),
    Q('Trường độ nốt đen?', ['1 phách', '4 phách', '1/2 phách', '2 phách'], 0, 'Nốt đen (♩) = 1 phách. Nốt trắng = 2 phách. Tròn = 4 phách. Móc đơn = 1/2.'),
    Q('Nhịp 4/4 nghĩa là?', ['Mỗi ô nhịp có 4 phách, mỗi phách = nốt đen', '4 ô nhịp', '4 bài hát', '4 dòng'], 0, '4/4: 4 phách/ô nhịp, đơn vị phách là nốt đen (1/4).'),
    Q('Dấu lặng đen?', ['2 phách', 'Im lặng tương đương 1 phách', '1/2 phách', 'Im lặng tương đương 2 phách'], 1, 'Dấu lặng đen (𝄽) = nghỉ im lặng 1 phách.'),
  ]),

  M(2, 'Âm nhạc — Đảo phách (syncopation)', [
    Q('Đảo phách (syncopation) là?', ['Không có nhấn', 'Đảo nốt', 'Nhấn vào phách yếu hoặc nửa phách', 'Nhấn phách mạnh'], 2, 'Đảo phách = di chuyển trọng âm khỏi phách mạnh sang phách yếu/nửa phách.'),
    Q('Đảo phách tạo cảm giác?', ['Trang nghiêm', 'Lệch nhịp, hấp dẫn, sôi động', 'Đều đặn', 'Nhàm chán'], 1, 'Đảo phách làm âm nhạc giật, lệch quen thuộc → hấp dẫn, sôi động.'),
    Q('Đảo phách xuất hiện nhiều trong?', ['Jazz, funk, rock, dân ca VN…', 'Chỉ thánh ca', 'Không có ở đâu', 'Chỉ nhạc cổ điển'], 0, 'Jazz là vương quốc của đảo phách; cũng có trong funk, rock và nhiều dân ca VN.'),
    Q('Ví dụ đảo phách trong dân ca VN?', ['Chỉ trong jazz', 'Tiến quân ca', 'Quốc ca', 'Lý cây đa, hát then…'], 3, 'Nhiều bài dân ca VN có đảo phách tạo nét đặc trưng vùng miền.'),
    Q('Khi gặp đảo phách, cần?', ['Đếm sai', 'Bỏ qua', 'Đếm chính xác, cảm nhận chỗ nhấn lệch', 'Không cần đếm'], 2, 'Đảo phách khó vì lệch quen thuộc — phải đếm và cảm chính xác.'),
  ]),

  M(3, 'Âm nhạc — Hợp âm 7 (Seventh chord)', [
    Q('Hợp âm 7 gồm?', ['2 nốt', '3 nốt', '4 nốt: chồng 3 quãng 3 lên nốt gốc', '5 nốt'], 2, 'Hợp âm 7 = hợp âm 3 nốt + thêm 1 quãng 3 (tổng 4 nốt).'),
    Q('Hợp âm C7 gồm?', ['C, E, G', 'C, D, E, F', 'C, E, G, B', 'C, E, G, Bb'], 3, 'C7 = C-E-G-Bb (dominant 7). C-E-G-B là Cmaj7.'),
    Q('Sự khác biệt C7 và Cmaj7?', ['C7 cao hơn', 'Không khác', 'C7 có Bb (b7); Cmaj7 có B (M7)', 'Cmaj7 thấp hơn'], 2, 'C7: nốt 7 giáng nửa cung (b7=Bb); Cmaj7: nốt 7 không giáng (M7=B).'),
    Q('Hợp âm 7 tạo cảm giác?', ['Bình ổn', 'Yên tĩnh', 'Phong phú, cần giải quyết về hợp âm chủ', 'Tĩnh tại'], 2, 'Hợp âm 7 (đặc biệt V7) tạo tension, đòi hỏi giải quyết về I (hợp âm chủ).'),
    Q('Trong nhạc Jazz, hợp âm 7 đóng vai trò?', ['Chỉ làm hợp âm phụ trợ cho hợp âm 3', 'Hiếm gặp', 'Không dùng', 'Cốt lõi của hoà thanh jazz'], 3, 'Hoà thanh jazz xây trên các hợp âm 7 (và mở rộng đến 9, 11, 13).'),
  ]),

  M(4, 'Âm nhạc — Kỹ thuật hát nâng cao', [
    Q('Hít thở khi hát?', ['Nín thở', 'Hít ngực nông', 'Hít qua miệng', 'Hít bụng (diaphragmatic) — sâu, giữ hơi'], 3, 'Hít thở bụng (sâu, dùng cơ hoành) là kỹ thuật nền tảng của ca hát chuyên nghiệp.'),
    Q('Khẩu hình mở rộng giúp?', ['Âm thanh vang, tròn, rõ', 'Không có tác dụng', 'Âm yếu', 'Âm nhỏ'], 0, 'Mở khẩu hình (đặc biệt nguyên âm) giúp âm vang, tròn, rõ tiếng.'),
    Q('Khởi giọng (warm-up) trước hát?', ['Bắt buộc, tránh chấn thương dây thanh', 'Mất thời gian', 'Chỉ ca sĩ chuyên nghiệp cần', 'Không cần'], 0, 'Warm-up làm ấm dây thanh, tránh chấn thương — bắt buộc trước mọi buổi hát.'),
    Q('Khi hát nốt cao?', ['Hát to hết sức để át dàn nhạc', 'Mở khẩu hình rộng hơn, hít thở sâu, đẩy hơi đều', 'Cố gồng cổ', 'Nín thở'], 1, 'Nốt cao cần kỹ thuật: mở khẩu hình, hỗ trợ hơi thở, không gồng cổ (gây tổn thương).'),
    Q('Cảm xúc trong hát?', ['Không cần', 'Chỉ kỹ thuật', 'Càng vô cảm càng tốt', 'Truyền tải nội dung bài, không chỉ phát âm'], 3, 'Hát hay = kỹ thuật + cảm xúc + diễn đạt nội dung.'),
  ]),

  M(5, 'Âm nhạc — Recorder/Sáo nâng cao', [
    Q('Recorder (sáo dọc) cầm?', ['Tay nào trên cũng được, miễn bịt kín lỗ', 'Tay phải trên', 'Cầm ngang', 'Tay trái trên (4 lỗ trên), tay phải dưới (3 lỗ dưới + 1 sau)'], 3, 'Tay trái trên (B, A, G), tay phải dưới (F, E, D + lỗ ngón cái sau).'),
    Q('Khi thổi nốt cao trên recorder?', ['Bịt nửa lỗ ngón cái sau (overblow)', 'Mở hết các lỗ', 'Thổi mạnh', 'Bịt hết'], 0, 'Nốt cao: bịt nửa lỗ ngón cái (overblow) + thổi mạnh hơn.'),
    Q('Sáo trúc VN khác recorder ở?', ['Thổi ngang, 6 lỗ bấm, không lỗ ngón cái', 'Có 8 lỗ', 'Thổi dọc', 'Có lỗ ngón cái'], 0, 'Sáo VN thổi ngang, 6 lỗ bấm; recorder thổi dọc, 7 lỗ + 1 ngón cái.'),
    Q('Sáo trúc dùng trong âm nhạc?', ['Chỉ thính phòng', 'Dân ca, nhạc cổ truyền VN', 'Chỉ rock', 'Không dùng'], 1, 'Sáo trúc là nhạc cụ truyền thống VN, phổ biến trong dân ca và nhạc cổ truyền.'),
    Q('Hơi thổi nhạc cụ hơi cần?', ['Hơi nhẹ, thổi bằng miệng (không dùng cơ hoành)', 'Hơi mạnh tối đa, thổi hết sức', 'Mạnh ngắt quãng', 'Đều, kiểm soát từ cơ hoành'], 3, 'Hơi đều và kiểm soát tốt từ cơ hoành cho âm ổn định và đẹp.'),
  ]),

  M(6, 'Âm nhạc — Nhạc sĩ Bach (J.S. Bach)', [
    Q('J.S. Bach là?', ['Nhạc sĩ Baroque Đức (1685–1750), bậc thầy phức điệu', 'Nhạc sĩ Romantic', 'Nhạc sĩ Jazz', 'Nhạc sĩ rock'], 0, 'Johann Sebastian Bach là đại diện đỉnh cao thời Baroque, nổi tiếng nhạc phức điệu (counterpoint).'),
    Q('Tác phẩm nổi tiếng của Bach?', ['Bình quân luật (WTC), Toccata BWV 565, Brandenburg', '4 mùa', 'Moonlight', 'Symphony 9'], 0, 'Bach: WTC, Toccata & Fugue d-moll BWV 565, Brandenburg Concertos, Mass in B minor…'),
    Q('Phức điệu (polyphony) là?', ['Đệm hợp âm', '2 bè cùng nốt', 'Nhiều bè giai điệu độc lập đan xen', '1 bè giai điệu'], 2, 'Phức điệu = nhiều giai điệu độc lập tiến hành đồng thời.'),
    Q('Bach làm việc chính ở?', ['Paris (nhà thờ Đức Bà), 20 năm', 'London', 'Leipzig (nhà thờ Thomaskirche), 27 năm', 'Vienna'], 2, 'Bach đảm nhiệm Kantor ở Thomaskirche, Leipzig từ 1723 đến cuối đời (27 năm).'),
    Q('Ảnh hưởng của Bach đến âm nhạc?', ['Bậc thầy phức điệu, ảnh hưởng đến hầu hết nhạc sĩ sau này', 'Không đáng kể', 'Chỉ nhạc nhà thờ', 'Chỉ trong thời Baroque'], 0, 'Bach được coi là "cha đẻ của âm nhạc Tây phương", ảnh hưởng Mozart, Beethoven, Chopin…'),
  ]),

  M(7, 'Âm nhạc — Nhạc sĩ Mozart (W.A. Mozart)', [
    Q('Mozart là?', ['Modern', 'Baroque', 'Nhạc sĩ Classical Áo (1756–1791), thần đồng âm nhạc', 'Romantic'], 2, 'Wolfgang Amadeus Mozart — thần đồng âm nhạc, đại diện đỉnh cao thời Classical.'),
    Q('Tác phẩm nổi tiếng của Mozart?', ['4 mùa', 'Eine kleine Nachtmusik, Symphony 40, Requiem, Magic Flute', 'Symphony 9', 'Toccata BWV 565'], 1, 'Mozart: Eine kleine Nachtmusik K.525, Symphony 40, Requiem, Cây sáo thần (Magic Flute)…'),
    Q('Mozart bắt đầu sáng tác lúc?', ['50 tuổi', '30 tuổi', '20 tuổi', '~5 tuổi'], 3, 'Mozart sáng tác từ ~5 tuổi, biểu diễn khắp châu Âu lúc 6 tuổi.'),
    Q('Đặc trưng âm nhạc Mozart?', ['Cân đối, trong sáng, du dương, có nhiều opera nổi tiếng', 'Buồn bã', 'Phức tạp tối tăm', 'Hỗn loạn'], 0, 'Âm nhạc Mozart: cân đối Classical, trong sáng, du dương, vui tươi (nhưng cũng có chiều sâu).'),
    Q('Mozart mất ở tuổi?', ['80', '20', '50', '35 (1791)'], 3, 'Mozart mất rất trẻ, năm 1791, ở tuổi 35.'),
  ]),

  M(8, 'Âm nhạc — Nhạc sĩ Beethoven (L. van Beethoven)', [
    Q('Beethoven là?', ['Baroque', 'Nhạc sĩ chuyển giao Classical-Romantic Đức (1770–1827)', 'Renaissance', 'Modern'], 1, 'Ludwig van Beethoven nối giữa Classical (Mozart) và Romantic (Schubert, Wagner…).'),
    Q('Tác phẩm nổi tiếng của Beethoven?', ['4 mùa', 'Brandenburg', 'Symphony 5, 9 (Ode to Joy), Moonlight Sonata, Für Elise', 'Eine kleine Nachtmusik'], 2, 'Beethoven: Symphony 5 (C minor), 9 (Choral với Ode to Joy), Moonlight Sonata, Für Elise…'),
    Q('Beethoven bị?', ['Mù dần từ tuổi trung niên nhưng vẫn sáng tác', 'Bình thường', 'Điếc dần từ ~28 tuổi nhưng vẫn sáng tác', 'Liệt nửa người sau cơn đột quỵ'], 2, 'Beethoven mất thính lực dần từ ~28 tuổi, hoàn toàn điếc cuối đời nhưng vẫn sáng tác kiệt tác.'),
    Q('Symphony 9 nổi tiếng vì?', ['Là bản giao hưởng ngắn nhất của Beethoven', 'Không có gì đặc biệt', 'Đơn giản', 'Có hợp xướng "Ode to Joy", biểu tượng đoàn kết nhân loại'], 3, 'Symphony 9 lần đầu đưa hợp xướng vào giao hưởng; "Ode to Joy" là quốc ca EU.'),
    Q('Tinh thần âm nhạc Beethoven?', ['Êm dịu', 'Buồn thảm', 'Vô cảm', 'Đấu tranh, vượt số phận, hào hùng'], 3, 'Âm nhạc Beethoven mạnh mẽ, đấu tranh, vượt số phận — phản ánh chính cuộc đời ông.'),
  ]),

  M(9, 'Mỹ thuật — Luật xa gần (perspective)', [
    Q('Luật xa gần (perspective) là?', ['Quy tắc kích thước', 'Luật tô màu', 'Luật vẽ tay', 'Quy tắc thể hiện không gian 3D trên mặt phẳng 2D'], 3, 'Luật xa gần (perspective) thể hiện chiều sâu không gian trên mặt phẳng 2D.'),
    Q('Vật ở xa được vẽ?', ['To hơn, rõ hơn', 'Giống nhau', 'Nhỏ hơn, mờ hơn, ít chi tiết hơn', 'Mất hẳn'], 2, 'Vật xa: kích thước nhỏ hơn, màu sắc mờ hơn (atmospheric perspective), ít chi tiết.'),
    Q('Đường tầm mắt (horizon line) là?', ['Đường vẽ', 'Đường đất', 'Đường trời', 'Đường ngang mắt người xem'], 3, 'Horizon line = đường ngang mắt người vẽ, là chuẩn để xác định điểm tụ.'),
    Q('Điểm tụ (vanishing point) là?', ['Tâm bức tranh', 'Điểm trên đường tầm mắt mà các đường song song hội tụ', 'Góc tranh', 'Điểm sáng'], 1, 'Vanishing point: nơi các đường thẳng song song trong thực tế tụ về 1 điểm trên đường tầm mắt.'),
    Q('Perspective 1 điểm tụ?', ['0 điểm', 'Mọi đường vào sâu hội tụ về 1 điểm (vd nhìn dọc đường ray)', '2 điểm', '3 điểm'], 1, '1-point perspective: nhìn thẳng (đường ray, hành lang) — đường hội tụ 1 điểm.'),
  ]),

  M(10, 'Mỹ thuật — Ký hoạ chân dung', [
    Q('Ký hoạ là?', ['Vẽ chi tiết cực kỳ', 'Chép tranh', 'Vẽ nhanh để ghi nhận hình ảnh, tỉ lệ, đặc điểm', 'Tô màu'], 2, 'Ký hoạ = vẽ nhanh, nắm bắt đặc điểm chính (tỉ lệ, dáng, biểu cảm), không cần chi tiết.'),
    Q('Tỉ lệ chuẩn khuôn mặt người (mắt)?', ['Mắt ở đỉnh đầu', 'Mắt nằm giữa chiều cao đầu', 'Mắt ở 1/3 trên', 'Mắt ở 2/3 dưới'], 1, 'Quy tắc cơ bản: mắt nằm giữa đỉnh đầu và cằm (1/2 chiều cao đầu).'),
    Q('Khoảng cách giữa 2 mắt?', ['3 con mắt', '2 con mắt', '~1 con mắt', '0.5 con mắt'], 2, 'Khoảng cách 2 mắt ~bằng chiều rộng 1 con mắt.'),
    Q('Tỉ lệ chuẩn cơ thể người trưởng thành?', ['5 đầu', '10 đầu', '3 đầu', '~7,5 đầu'], 3, 'Người lớn chuẩn ~7,5–8 đầu. Trẻ em ít hơn (~4–5 đầu).'),
    Q('Khi ký hoạ chân dung cần?', ['Vẽ ai cũng giống nhau', 'Tô đầy mặt', 'Quan sát đặc điểm riêng, không vẽ theo công thức cứng', 'Tránh nhìn người'], 2, 'Ký hoạ tốt: quan sát kỹ đặc điểm riêng (mắt, mũi, miệng, tỉ lệ riêng) của từng người.'),
  ]),

  M(11, 'Mỹ thuật — Tranh tự do (chủ đề học đường)', [
    Q('Khi vẽ tranh tự do cần?', ['Bắt chước hoàn toàn', 'Sao chép', 'Vẽ ngẫu nhiên', 'Có ý tưởng, bố cục, thể hiện cảm xúc cá nhân'], 3, 'Tranh tự do cần ý tưởng riêng, bố cục cân, thể hiện cảm xúc cá nhân.'),
    Q('Bố cục tranh?', ['Vẽ ngẫu hứng, không cần sắp xếp trước', 'Càng đầy càng tốt', 'Để trống phần lớn khung tranh', 'Sắp xếp các yếu tố theo nguyên tắc cân bằng, điểm nhấn'], 3, 'Bố cục tốt: cân bằng, có điểm nhấn (focal point), dẫn dắt mắt người xem.'),
    Q('Chủ đề "học đường" có thể vẽ?', ['Chỉ chân dung', 'Chỉ phong cảnh', 'Chỉ tĩnh vật', 'Lớp học, giờ ra chơi, thầy cô bạn bè, hoạt động trường'], 3, 'Chủ đề học đường rất phong phú: lớp học, sân trường, hoạt động, thầy trò…'),
    Q('Hoà sắc nóng-lạnh tạo?', ['Đơn điệu', 'Tương phản, gây cảm xúc', 'Gây rối', 'Không có tác dụng'], 1, 'Tương phản màu nóng (đỏ, cam, vàng) và lạnh (xanh dương, lục, tím) tăng biểu cảm.'),
    Q('Sau khi vẽ xong, cần?', ['Không xem lại', 'Tự đánh giá, học hỏi từ tranh', 'Phá huỷ', 'Vứt đi'], 1, 'Đánh giá tranh giúp nhận ra điểm mạnh-yếu để cải thiện lần sau.'),
  ]),

  M(12, 'Mỹ thuật — Đồ hoạ ấn phẩm (poster, áp phích)', [
    Q('Đồ hoạ ấn phẩm gồm?', ['Chỉ điêu khắc', 'Poster, áp phích, tờ rơi, bìa sách, logo', 'Chỉ áo', 'Chỉ tranh treo'], 1, 'Đồ hoạ ấn phẩm: poster, áp phích, tờ rơi, bìa sách, logo, banner…'),
    Q('Đặc trưng poster?', ['Mờ nhạt', 'Không có chữ', 'Hình ảnh đậm, chữ ngắn-mạnh, truyền tải thông điệp', 'Chi tiết phức tạp'], 2, 'Poster tốt: hình ảnh nổi bật, chữ ít nhưng đậm/rõ, thông điệp 1 câu là chính.'),
    Q('Mục đích poster cổ động?', ['Khoe tài', 'Tuyên truyền 1 chủ đề (bảo vệ MT, sức khoẻ, học tập…)', 'Bán hàng', 'Trang trí thuần'], 1, 'Poster cổ động: tuyên truyền thông điệp xã hội cụ thể (chống thuốc lá, bảo vệ MT…).'),
    Q('Màu sắc poster?', ['Phối nhiều màu pastel nhẹ nhàng', 'Mờ nhạt', 'Đơn sắc', 'Tương phản mạnh để nổi bật từ xa'], 3, 'Poster dán xa cần màu tương phản mạnh để bắt mắt từ khoảng cách.'),
    Q('Chữ trên poster?', ['Cầu kì', 'Mảnh, font script uốn lượn cầu kỳ', 'Lớn, dễ đọc, ngắn gọn, font đậm', 'Nhỏ, nhiều dòng giải thích chi tiết'], 2, 'Chữ poster: lớn, đậm, ngắn gọn — đọc được trong 3 giây.'),
  ]),

  M(13, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Lý', [
    Q('Thời Lý (1009–1225) nổi tiếng về?', ['Kiến trúc Phật giáo, gốm men ngọc, điêu khắc rồng', 'Nhiếp ảnh', 'Thuỷ chiến', 'Tranh sơn dầu'], 0, 'Mỹ thuật thời Lý đỉnh cao: kiến trúc chùa tháp, gốm men ngọc, điêu khắc rồng đặc trưng.'),
    Q('Chùa tiêu biểu thời Lý?', ['Chùa Trấn Quốc', 'Chùa Bái Đính', 'Chùa Hương', 'Chùa Một Cột (1049)'], 3, 'Chùa Một Cột (Diên Hựu, 1049) là kiệt tác kiến trúc thời Lý — đoá sen vươn lên mặt nước.'),
    Q('Rồng thời Lý có đặc điểm?', ['Giống Trung Quốc', 'Cứng đơ', 'Thô bạo', 'Thân uốn lượn đều, mềm mại, nhiều khoang'], 3, 'Rồng thời Lý: thân uốn nhiều khoang đều, mềm mại, dáng vẻ thanh thoát — đặc trưng VN.'),
    Q('Gốm men ngọc?', ['Men đen', 'Men trắng tinh', 'Men xanh nhạt như ngọc bích', 'Không có men'], 2, 'Gốm Lý nổi tiếng men ngọc (celadon) màu xanh ngọc bích, hoa văn thanh tao.'),
    Q('Tháp thời Lý cao tầng vì?', ['Là nơi ở của vua và hoàng tộc', 'Biểu tượng Phật giáo, ảnh hưởng tâm linh', 'Để chiến đấu', 'Trang trí thuần'], 1, 'Tháp đa tầng là biểu tượng vũ trụ Phật giáo, ảnh hưởng ý nghĩa tâm linh sâu sắc.'),
  ]),

  M(14, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Trần', [
    Q('Thời Trần (1225–1400) phát triển?', ['Nhiếp ảnh', 'Truyện tranh', 'Kiến trúc đền, lăng tẩm, gốm hoa nâu, điêu khắc khoẻ', 'Tranh sơn dầu'], 2, 'Mỹ thuật Trần phát triển trên nền Lý, thêm chất khoẻ khoắn, gốm hoa nâu đặc trưng.'),
    Q('Đặc điểm gốm thời Trần?', ['Đen tuyền', 'Men ngọc xanh', 'Hoa nâu trên nền trắng ngà', 'Trắng tinh'], 2, 'Gốm hoa nâu Trần: vẽ hoa văn nâu trên nền men trắng ngà.'),
    Q('Rồng thời Trần?', ['Không có rồng', 'Giống hệt Lý', 'Khoẻ khoắn hơn Lý, mạnh mẽ', 'Yếu hơn Lý'], 2, 'Rồng Trần: khoẻ khoắn, mạnh mẽ hơn rồng Lý, phản ánh tinh thần thượng võ.'),
    Q('Lăng mộ tiêu biểu thời Trần?', ['An sinh, Long Hưng (Thái Bình)', 'Khu lăng Lam Kinh (Thanh Hoá)', 'Tự Đức', 'Hà Nội'], 0, 'Khu lăng An sinh, Long Hưng (Thái Bình) là di tích lăng tẩm tiêu biểu nhà Trần.'),
    Q('Tinh thần thời Trần phản ánh trong nghệ thuật?', ['Buồn bã', 'Vô cảm', 'Hào hùng (3 lần đánh thắng Nguyên-Mông)', 'Yếu đuối'], 2, 'Tinh thần Đông A — chiến thắng Nguyên-Mông — phản ánh qua nét khoẻ khoắn của nghệ thuật.'),
  ]),

  M(15, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Lê', [
    Q('Thời Lê (1428–1788) nổi tiếng?', ['Tượng đá lăng mộ, gốm hoa lam Chu Đậu', 'Cơ khí', 'Tranh sơn dầu', 'Đồng hồ'], 0, 'Mỹ thuật Lê: tượng đá lăng mộ (Lam Kinh, lăng vua Lê), gốm hoa lam Chu Đậu nổi tiếng quốc tế.'),
    Q('Gốm Chu Đậu (Hải Dương)?', ['Hoa nâu', 'Hoa lam (cobalt xanh dương), xuất khẩu nhiều nước', 'Men ngọc', 'Đen tuyền'], 1, 'Gốm Chu Đậu: hoa lam xanh trên nền trắng, xuất khẩu khắp Đông Nam Á.'),
    Q('Đình làng phát triển ở?', ['Thời Lý (XI–XII)', 'Nguyễn', 'Thời Trần (XIII–XIV)', 'Thời Lê Trung Hưng (XVI–XVIII)'], 3, 'Đình làng phát triển mạnh thời Lê Trung Hưng (XVI–XVIII).'),
    Q('Đình làng có chức năng?', ['Chỉ họp', 'Chỉ chợ', 'Chỉ thờ cúng', 'Nơi sinh hoạt cộng đồng + thờ thành hoàng'], 3, 'Đình là trung tâm văn hoá làng: thờ thành hoàng + sinh hoạt cộng đồng (họp, hội hè).'),
    Q('Điêu khắc đình làng?', ['Trừu tượng', 'Sinh động, đời thường (cảnh sinh hoạt, lao động)', 'Cứng đơ', 'Tôn giáo thuần'], 1, 'Điêu khắc đình làng đặc trưng: cảnh sinh hoạt nhân gian, lao động — gần gũi đời thường.'),
  ]),

  M(16, 'Mỹ thuật — Mỹ thuật thời Nguyễn', [
    Q('Thời Nguyễn (1802–1945) nổi tiếng?', ['Kiến trúc cung đình Huế, tranh khắc gỗ, gốm Bát Tràng', 'Tranh acrylic', 'Tranh sơn dầu phương Tây', 'Tượng đồng cận đại'], 0, 'Mỹ thuật Nguyễn: cung đình Huế, tranh khắc gỗ dân gian (Đông Hồ, Hàng Trống), gốm Bát Tràng.'),
    Q('Cung đình Huế là di sản?', ['UNESCO Di sản văn hoá thế giới (1993)', 'Không di sản', 'Chỉ địa phương', 'Di tích quốc gia'], 0, 'Quần thể di tích cố đô Huế được UNESCO công nhận năm 1993.'),
    Q('Tranh Đông Hồ (Bắc Ninh) là?', ['Tranh lụa', 'Tranh sơn dầu', 'Tranh acrylic', 'Tranh khắc gỗ dân gian, in giấy điệp'], 3, 'Tranh Đông Hồ khắc gỗ nhiều bản, in trên giấy điệp (giấy dó phủ vỏ điệp).'),
    Q('Chủ đề tranh Đông Hồ?', ['Khoa học', 'Đời sống nhân dân, mong ước (lợn, gà, đám cưới chuột…)', 'Trừu tượng', 'Vua chúa'], 1, 'Tranh Đông Hồ thể hiện đời sống nhân dân, mong ước phồn thực (lợn nái, gà đông cáo, đám cưới chuột).'),
    Q('Tranh Hàng Trống (Hà Nội)?', ['Tranh khắc gỗ', 'Tranh thuỷ mặc', 'Tranh dân gian, vẽ tay tinh tế hơn Đông Hồ', 'Tranh sơn dầu'], 2, 'Tranh Hàng Trống: in nét đen, sau đó vẽ tay tô màu — tinh tế, dùng trong nhà thờ tổ.'),
  ]),

  M(17, 'Âm nhạc — Dân ca quốc tế (Folk music)', [
    Q('Dân ca là?', ['Bài hát của nhân dân, truyền miệng, không rõ tác giả', 'Nhạc cổ điển', 'Nhạc pop hiện đại', 'Nhạc rock'], 0, 'Dân ca = folk music: bài hát của nhân dân, truyền miệng qua nhiều thế hệ.'),
    Q('Dân ca Anh nổi tiếng?', ['Edelweiss', 'Auld Lang Syne (cũng Scotland)', 'La Cumparsita', 'Greensleeves, Scarborough Fair'], 3, 'Dân ca Anh: Greensleeves, Scarborough Fair là 2 bài tiêu biểu.'),
    Q('Dân ca Mỹ tiêu biểu?', ['Greensleeves', 'Edelweiss', 'Oh Susanna, Yankee Doodle, Country Roads', 'La Cumparsita'], 2, 'Dân ca/folk Mỹ: Oh Susanna (Stephen Foster), Yankee Doodle, Country Roads…'),
    Q('Đặc trưng dân ca các nước?', ['Phản ánh văn hoá, đời sống, ngôn ngữ vùng đó', 'Chỉ là giai điệu giải trí, không mang nội dung', 'Phổ quát', 'Giống nhau'], 0, 'Mỗi dân tộc có dân ca riêng phản ánh văn hoá, đời sống và ngôn ngữ của họ.'),
    Q('Học dân ca quốc tế giúp?', ['Mất bản sắc', 'Quên dân ca VN', 'Hiểu văn hoá thế giới, mở rộng âm nhạc', 'Không có lợi'], 2, 'Học dân ca thế giới mở rộng hiểu biết văn hoá; vẫn giữ và yêu dân ca VN.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Đảo phách là?', ['Nhấn phách mạnh', 'Đảo nốt', 'Không nhấn', 'Nhấn phách yếu'], 3, 'Định nghĩa.'),
    Q('Bach thuộc thời?', ['Baroque', 'Modern', 'Classical', 'Romantic'], 0, '1685–1750.'),
    Q('Đường tầm mắt là?', ['Ngang mắt người vẽ', 'Trung tâm tranh', 'Đường trời', 'Đường đất'], 0, 'Perspective.'),
    Q('Tranh Đông Hồ ở?', ['Thừa Thiên Huế', 'Hà Nội', 'Bắc Ninh', 'Sài Gòn'], 2, 'Làng Đông Hồ.'),
    Q('Hợp âm C7 có nốt?', ['C-E-G (hợp âm C trưởng cơ bản)', 'C-E-G-B', 'C-E-G-B (hợp âm Cmaj7)', 'C-E-G-Bb'], 3, 'Dominant 7th.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Âm nhạc — Thể loại nhạc thính phòng (chamber music)', [
    Q('Nhạc thính phòng là?', ['Nhạc cho nhóm nhỏ (2–9 nhạc cụ), không có nhạc trưởng', 'Nhạc dàn lớn', 'Nhạc 1 người', 'Nhạc pop'], 0, 'Chamber music: nhạc cho 2–9 người chơi, biểu diễn trong phòng nhỏ, không có nhạc trưởng.'),
    Q('Tứ tấu dây gồm?', ['4 violin', '3 violin + cello', '2 violin, 1 viola, 1 cello', '4 piano'], 2, 'String quartet kinh điển: 2 violins + viola + cello.'),
    Q('Tam tấu piano?', ['Piano + 2 cello', 'Piano + flute + violin', 'Piano + violin + cello', '3 piano'], 2, 'Piano trio: piano + violin + cello (kết hợp piano + 2 dây).'),
    Q('Đặc trưng nhạc thính phòng?', ['Đơn điệu', 'Hỗn loạn', 'Hoành tráng', 'Tinh tế, đối thoại giữa các nhạc cụ'], 3, 'Chamber music: tinh tế, các nhạc cụ "trò chuyện" với nhau như đối thoại.'),
    Q('Nhạc sĩ tứ tấu nổi tiếng?', ['Haydn (cha đẻ tứ tấu), Mozart, Beethoven', 'Wagner', 'Puccini', 'Tchaikovsky, Brahms, Dvořák'], 0, 'Haydn (cha đẻ) → Mozart → Beethoven phát triển string quartet đến đỉnh cao.'),
  ]),

  M(20, 'Âm nhạc — Nhạc kịch (Opera) cơ bản', [
    Q('Opera là?', ['Sân khấu kịch + âm nhạc + giọng hát + dàn nhạc', 'Nhạc thuần tuý', 'Bài hát ngắn', 'Bản nhạc nền cho phim chiếu rạp'], 0, 'Opera = nghệ thuật tổng hợp: kịch + âm nhạc + giọng hát + dàn nhạc + sân khấu.'),
    Q('Opera có nguồn gốc?', ['Ý (Italy), cuối thế kỷ XVI', 'Anh, thời nữ hoàng Elizabeth I', 'Đức, đầu thế kỷ XVIII (thời Bach)', 'Pháp, thời vua Louis XIV'], 0, 'Opera ra đời ở Florence (Ý) cuối XVI; tiếng Ý "opera" = tác phẩm.'),
    Q('Phần solo trong opera?', ['Recitative', 'Overture', 'Chorus', 'Aria (đoạn hát đơn thể hiện cảm xúc)'], 3, 'Aria = đoạn hát đơn diễn cảm xúc nhân vật. Recitative = nói-hát đẩy cốt truyện.'),
    Q('Mozart viết opera nổi tiếng?', ['Cây sáo thần (Magic Flute), Don Giovanni, Le nozze di Figaro', 'Carmen', 'La Traviata', 'Aida (của Giuseppe Verdi)'], 0, 'Mozart: Magic Flute, Don Giovanni, Le nozze di Figaro (Đám cưới Figaro)…'),
    Q('Opera có ở VN?', ['Chỉ học opera Tây', 'Không — VN chưa từng dàn dựng opera', 'Có — chèo, tuồng, cải lương là dạng opera VN', 'Mới có gần đây'], 2, 'Chèo, tuồng, cải lương là dạng opera truyền thống VN — kết hợp kịch + âm nhạc + diễn.'),
  ]),

  M(21, 'Mỹ thuật — Tranh sơn dầu cơ bản', [
    Q('Sơn dầu là?', ['Loại sơn dùng dầu (linseed) làm chất kết dính', 'Acrylic', 'Bột màu khô vẽ trên giấy ráp', 'Sơn nước'], 0, 'Sơn dầu dùng dầu lanh (linseed) làm chất kết dính các sắc tố — bền màu, lâu khô.'),
    Q('Ưu điểm sơn dầu?', ['Khô nhanh', 'Không màu', 'Khô tức thì sau vài phút vẽ', 'Bền màu, có thể chồng lớp, sửa được lâu'], 3, 'Sơn dầu: bền hàng trăm năm, có thể chồng lớp tinh tế, sửa được khi còn ướt.'),
    Q('Sơn dầu khô?', ['Rất chậm (vài ngày đến vài tuần)', 'Không bao giờ khô', '1 giờ', 'Tức thì'], 0, 'Sơn dầu khô bằng phản ứng oxy hoá — chậm (mặt khô ~2-3 ngày, khô hẳn ~6 tháng).'),
    Q('Họa sĩ sơn dầu nổi tiếng thế giới?', ['Edison', 'Claude Monet, Vincent van Gogh, Paul Cézanne', 'Mozart', 'Da Vinci, Van Gogh, Picasso, Rembrandt'], 3, 'Da Vinci (Mona Lisa), Van Gogh (Đêm đầy sao), Rembrandt, Picasso… là họa sĩ sơn dầu danh tiếng.'),
    Q('Họa sĩ sơn dầu VN tiêu biểu?', ['Van Gogh', 'Picasso', 'Tô Ngọc Vân, Trần Văn Cẩn, Nguyễn Phan Chánh', 'Da Vinci'], 2, 'Tô Ngọc Vân (Thiếu nữ bên hoa huệ), Trần Văn Cẩn, Nguyễn Phan Chánh… là các họa sĩ VN nổi tiếng.'),
  ]),

  M(22, 'Mỹ thuật — Tranh lụa Việt Nam', [
    Q('Tranh lụa là?', ['Tranh trên gỗ', 'Tranh vẽ trên nền lụa, đặc trưng VN và châu Á', 'Tranh trên kim loại', 'Tranh trên giấy'], 1, 'Tranh lụa: vẽ trên lụa tằm, kỹ thuật đặc biệt của VN và Đông Á.'),
    Q('Kỹ thuật tranh lụa?', ['Vẽ tô đậm một lớp duy nhất như sơn dầu', 'Nhuộm và rửa lụa nhiều lần để tạo độ trong', 'Phun sơn', 'Vẽ nhanh'], 1, 'Kỹ thuật: vẽ → rửa → vẽ lại nhiều lần → tạo độ trong, trong veo đặc trưng.'),
    Q('Đặc trưng tranh lụa VN?', ['Mềm mại, thanh thoát, trữ tình', 'Cứng đơ', 'Mạnh mẽ, gồ ghề', 'Hỗn loạn'], 0, 'Tranh lụa mềm mại, thanh thoát, trữ tình — phù hợp tâm hồn Á Đông.'),
    Q('Họa sĩ tranh lụa VN tiêu biểu?', ['Nguyễn Phan Chánh, Lê Phổ, Nguyễn Tiến Chung', 'Trần Văn Cẩn', 'Tô Ngọc Vân (sơn dầu chính)', 'Bùi Xuân Phái'], 0, 'Nguyễn Phan Chánh là bậc thầy tranh lụa VN; Lê Phổ, Nguyễn Tiến Chung cũng nổi tiếng.'),
    Q('Tranh lụa "Chơi ô ăn quan" của?', ['Tô Ngọc Vân', 'Nguyễn Phan Chánh (1931)', 'Lê Phổ', 'Bùi Xuân Phái'], 1, '"Chơi ô ăn quan" (1931) của Nguyễn Phan Chánh — kiệt tác tranh lụa VN.'),
  ]),

  M(23, 'Mỹ thuật — Lịch sử mỹ thuật VN thời Pháp thuộc', [
    Q('Trường Mỹ thuật Đông Dương thành lập?', ['1975', '1900', '1925 tại Hà Nội', '1945'], 2, 'École des Beaux-Arts de l\'Indochine thành lập 1925 tại Hà Nội, do Pháp lập.'),
    Q('Hiệu trưởng đầu tiên?', ['Bùi Xuân Phái', 'Tô Ngọc Vân', 'Victor Tardieu', 'Picasso'], 2, 'Victor Tardieu — họa sĩ Pháp, hiệu trưởng đầu tiên Trường Mỹ thuật Đông Dương.'),
    Q('Họa sĩ thế hệ đầu nổi tiếng?', ['Nguyễn Tư Nghiêm', 'Nguyễn Phan Chánh, Tô Ngọc Vân, Trần Văn Cẩn, Nguyễn Gia Trí', 'Bùi Xuân Phái', 'Picasso'], 1, '4 họa sĩ thế hệ đầu tiêu biểu của trường: Phan Chánh, Tô Ngọc Vân, Trần Văn Cẩn, Gia Trí.'),
    Q('Tranh sơn mài VN phát triển?', ['Từ thời Pháp thuộc, Nguyễn Gia Trí khai phá', 'Thời Nguyễn', 'Sau 1975', 'Thời Lý'], 0, 'Sơn mài truyền thống chỉ dùng trang trí; Nguyễn Gia Trí phát triển thành tranh nghệ thuật từ ~1930.'),
    Q('Tinh thần mỹ thuật giai đoạn này?', ['Kết hợp truyền thống VN + kỹ thuật phương Tây', 'Vô bản sắc', 'Chỉ Tây', 'Chỉ truyền thống'], 0, 'Họa sĩ Đông Dương: học kỹ thuật Tây nhưng vẽ về VN, dùng cảm xúc và chất liệu VN.'),
  ]),

  M(24, 'Âm nhạc — Nhạc Romantic (Chopin, Schumann, Schubert)', [
    Q('Thời Romantic kéo dài?', ['1700–1750', '1500–1600', '~1820–1900', '1900–2000'], 2, 'Romantic period: ~1820–1900, sau Classical (Mozart, Beethoven).'),
    Q('Chopin nổi tiếng về?', ['Symphony', 'Opera (các vở kịch lớn)', 'Nhạc piano (Nocturne, Etude, Mazurka, Polonaise)', 'Sonata violin'], 2, 'Frédéric Chopin (1810–1849): bậc thầy piano, Nocturne, Etude, Mazurka, Polonaise.'),
    Q('Schubert nổi tiếng về?', ['Bài hát pop', 'Concerto', 'Lieder (ca khúc nghệ thuật) + Unfinished Symphony', 'Opera (các vở nhạc kịch sân khấu lớn)'], 2, 'Franz Schubert (1797–1828): bậc thầy Lieder (>600 bài) + Symphony số 8 "Unfinished".'),
    Q('Đặc trưng âm nhạc Romantic?', ['Cân đối lạnh lùng', 'Cảm xúc mãnh liệt, cá nhân, hoành tráng', 'Không có cảm xúc', 'Đơn giản'], 1, 'Romantic: đề cao cá nhân, cảm xúc mãnh liệt (tình yêu, thiên nhiên, dân tộc).'),
    Q('Nhạc Romantic ảnh hưởng đến?', ['Khoa học', 'Chỉ ảnh hưởng đến kỹ thuật chơi đàn', 'Cảm xúc, dân tộc, hình tượng anh hùng', 'Toán học'], 2, 'Romantic gắn với phong trào dân tộc (Chopin-Ba Lan, Smetana-Séc, Sibelius-Phần Lan…).'),
  ]),

  M(25, 'Âm nhạc — Nhạc dân ca Việt Nam vùng miền', [
    Q('Dân ca Bắc Bộ tiêu biểu?', ['Vọng cổ', 'Quan họ Bắc Ninh, hát chèo, hát xẩm', 'Ví dặm', 'Lý ngựa ô'], 1, 'Bắc Bộ: quan họ Bắc Ninh (UNESCO), chèo, ca trù, hát xẩm.'),
    Q('Dân ca Trung Bộ tiêu biểu?', ['Vọng cổ', 'Quan họ', 'Lý ngựa ô', 'Hò Huế, ca Huế, ví dặm Nghệ Tĩnh, bài chòi'], 3, 'Trung Bộ: ca Huế (đặc trưng), hò Huế, ví dặm Nghệ-Tĩnh, bài chòi Quảng Nam…'),
    Q('Dân ca Nam Bộ tiêu biểu?', ['Quan họ', 'Đờn ca tài tử, vọng cổ, hò sông nước, lý', 'Nhã nhạc cung đình', 'Ca trù'], 1, 'Nam Bộ: đờn ca tài tử (UNESCO), vọng cổ, hò Nam Bộ, các điệu lý.'),
    Q('Đặc trưng dân ca quan họ?', ['Hát rap', 'Múa lân', 'Hát solo một người, không có bạn diễn', 'Đối đáp nam-nữ, áo tứ thân, nón quai thao'], 3, 'Quan họ: hát đối đáp liền anh-liền chị, trang phục áo tứ thân, nón quai thao.'),
    Q('Đờn ca tài tử Nam Bộ?', ['Nhạc thính phòng dân gian, nhạc cụ chủ đạo: đờn kìm, tranh, cò, độc huyền', 'Hợp xướng lớn', 'Nhạc giao hưởng', 'Nhạc trẻ'], 0, 'Đờn ca tài tử: nhạc thính phòng dân gian, có dàn nhạc 4–6 cụ + hát ngẫu hứng.'),
  ]),

  M(26, 'Mỹ thuật — Thiết kế ứng dụng (graphic design)', [
    Q('Graphic design là?', ['Thiết kế truyền thông trực quan (logo, poster, bao bì, web…)', 'Nhiếp ảnh', 'Điêu khắc', 'Vẽ tranh'], 0, 'Graphic design: thiết kế truyền thông qua hình ảnh — logo, poster, UI, bao bì…'),
    Q('Phần mềm thiết kế phổ biến?', ['Notepad', 'Microsoft Word (xử lý văn bản)', 'PowerPoint chỉ', 'Adobe Photoshop, Illustrator, Canva, Figma'], 3, 'Photoshop (ảnh), Illustrator (vector), Canva (đơn giản), Figma (UI/web).'),
    Q('Logo tốt cần?', ['Đơn giản, dễ nhớ, ý nghĩa, mở rộng được', 'Phức tạp', 'Nhiều màu', 'Có chữ dài'], 0, 'Logo tốt: đơn giản, dễ nhớ, có ý nghĩa, nhận dạng ở mọi kích thước.'),
    Q('Nguyên tắc thiết kế cơ bản?', ['Trống mọi chỗ', 'Đầy mọi chỗ', 'Tự do sáng tạo, không theo nguyên tắc nào', 'Cân bằng, tương phản, lặp lại, căn chỉnh'], 3, 'CRAP: Contrast (tương phản), Repetition (lặp lại), Alignment (căn chỉnh), Proximity (gần xa).'),
    Q('Màu sắc trong thiết kế?', ['Truyền tải cảm xúc, có ý nghĩa văn hoá', 'Tuỳ thích', 'Càng nhiều càng tốt', 'Chỉ để trang trí, không có ý nghĩa biểu đạt'], 0, 'Màu có nghĩa: đỏ (nóng, cảnh báo), xanh dương (tin cậy), xanh lá (tự nhiên)…'),
  ]),

  M(27, 'Mỹ thuật — Tranh vẽ đời sống', [
    Q('Tranh đời sống (genre painting) là?', ['Phong cảnh', 'Trừu tượng', 'Chân dung', 'Tranh thể hiện cảnh sinh hoạt hàng ngày'], 3, 'Genre painting: tranh thể hiện cảnh đời sống hàng ngày của người dân.'),
    Q('Họa sĩ VN nổi tiếng tranh đời sống?', ['Beethoven', 'Mozart', 'Bùi Xuân Phái (phố cổ Hà Nội), Tô Ngọc Vân (thiếu nữ)', 'Nguyễn Du (tác giả Truyện Kiều)'], 2, 'Bùi Xuân Phái: phố cổ Hà Nội. Tô Ngọc Vân: "Thiếu nữ bên hoa huệ"…'),
    Q('Bùi Xuân Phái nổi tiếng?', ['Vẽ phố cổ Hà Nội ("Phố Phái")', 'Trừu tượng', 'Acrylic', 'Tranh sơn dầu Tây'], 0, '"Phố Phái" — tranh phố cổ Hà Nội của Bùi Xuân Phái — biểu tượng văn hoá Hà Nội.'),
    Q('Tranh "Em Thuý" của?', ['Nguyễn Phan Chánh', 'Bùi Xuân Phái', 'Tô Ngọc Vân', 'Trần Văn Cẩn (1944)'], 3, '"Em Thuý" (1944) của Trần Văn Cẩn — bảo vật quốc gia, chân dung trẻ em VN.'),
    Q('Vẽ đời sống cần?', ['Tưởng tượng hoàn toàn không quan sát thực tế', 'Sao chép ảnh', 'Quan sát kỹ, nắm bắt đặc trưng, tình cảm', 'Vẽ tự do'], 2, 'Vẽ đời sống đòi hỏi quan sát kỹ con người, cảnh vật và truyền cảm xúc người vẽ.'),
  ]),

  M(28, 'Âm nhạc — Nhạc cụ dân tộc Việt Nam', [
    Q('Đàn bầu là?', ['Nhạc cụ phương Tây', 'Đàn 2 dây', 'Nhạc cụ Trung Quốc', 'Nhạc cụ 1 dây độc đáo của VN'], 3, 'Đàn bầu (độc huyền cầm): nhạc cụ 1 dây độc nhất vô nhị của VN.'),
    Q('Đàn tranh có bao nhiêu dây?', ['5', '6', '4', '16 (hoặc 17, 21 dây hiện đại)'], 3, 'Đàn tranh: 16 dây cổ truyền; hiện đại có 17 và 21 dây.'),
    Q('Đàn nhị (đàn cò) thuộc nhóm?', ['Bộ gõ (như trống, mõ, sênh)', 'Dây gảy', 'Bộ hơi (như sáo, kèn)', 'Dây kéo (cung)'], 3, 'Đàn nhị/đàn cò: 2 dây, kéo bằng cung — thuộc nhóm dây kéo.'),
    Q('Sáo trúc VN làm bằng?', ['Nhựa PVC ép khuôn', 'Trúc/tre', 'Gỗ mun cứng (như clarinet)', 'Kim loại'], 1, 'Sáo trúc truyền thống làm bằng cây trúc — nhẹ, vang.'),
    Q('Đàn đáy là nhạc cụ?', ['Khôngdây', '6 dây', '3 dây, gõ-gảy, dùng trong ca trù', 'Phương Tây'], 2, 'Đàn đáy: 3 dây, cần dài, dùng đệm trong ca trù (di sản UNESCO).'),
  ]),

  M(29, 'Âm nhạc — Hình thức bài hát (verse-chorus, A-B-A)', [
    Q('Hình thức A-B-A (3 phần) là?', ['Câu 1 (A) → câu 2 khác (B) → quay lại câu 1 (A)', 'A-B-C-D', 'A-B-C (3 phần khác nhau, không quay lại)', 'A-A-A (lặp một câu xuyên suốt)'], 0, 'Hình thức 3 phần A-B-A (ternary form): A (mở) → B (đối) → A (trở lại).'),
    Q('Verse-Chorus phổ biến trong?', ['Chỉ cổ điển', 'Chỉ jazz', 'Nhạc pop, rock, dân ca hiện đại', 'Chỉ chèo'], 2, 'Hình thức verse-chorus thống trị nhạc pop, rock hiện đại.'),
    Q('Verse là?', ['Đoạn mở đầu', 'Đoạn cuối', 'Đoạn lặp', 'Đoạn kể, mỗi lần lời khác'], 3, 'Verse: đoạn lời thay đổi mỗi lần lặp — kể câu chuyện.'),
    Q('Chorus (điệp khúc) là?', ['Đoạn cuối', 'Đoạn lặp, lời giống nhau, dễ nhớ', 'Đoạn kể', 'Đoạn mở'], 1, 'Chorus: đoạn lặp với cùng lời, thường là cao trào, dễ nhớ — "hook" của bài hát.'),
    Q('Bridge trong bài hát là?', ['Đoạn intro mở đầu trước verse', 'Chorus mới', 'Đoạn chuyển khác biệt giữa các chorus', 'Verse mới'], 2, 'Bridge: đoạn khác biệt (thường ở 2/3 bài) tạo điểm nhấn trước chorus cuối.'),
  ]),

  M(30, 'Mỹ thuật — Trang trí và ứng dụng (ergonomic design)', [
    Q('Trang trí ứng dụng nghĩa là?', ['Điêu khắc', 'Vẽ tranh treo', 'Trang trí gắn với chức năng (đồ vật dùng được)', 'Trang trí thuần tuý'], 2, 'Trang trí ứng dụng: nghệ thuật gắn với vật dụng (ấm, áo, đồ nội thất, sản phẩm…).'),
    Q('Khi trang trí đồ vật cần?', ['Không quan tâm công năng', 'Phù hợp công năng, không cản trở chức năng', 'Sao chép', 'Càng phức tạp càng tốt'], 1, 'Trang trí ứng dụng tốt: phù hợp công năng, đẹp + dùng được.'),
    Q('Trang trí vải/áo dùng?', ['Hoa văn, in, thêu, dệt', 'Đắp tượng', 'Sơn dầu', 'Khắc gỗ'], 0, 'Trang trí vải: in, dệt, thêu, batik (sáp ong) — phù hợp chất liệu mềm.'),
    Q('Họa tiết truyền thống VN?', ['Hoa hồng Tây', 'Sao 5 cánh', 'Mây, sóng, hoa sen, rồng phượng', 'Họa tiết kỹ thuật'], 2, 'Họa tiết VN truyền thống: mây, sóng, hoa sen, rồng phượng, trống đồng…'),
    Q('Trang trí trong nhà cần?', ['Hài hoà tổng thể, tạo không gian dễ chịu', 'Đầy mọi nơi', 'Để trống mọi bức tường cho thoáng', 'Mỗi phòng trang trí một phong cách khác hẳn'], 0, 'Trang trí nhà: hài hoà tổng thể, tạo cảm giác dễ chịu, phù hợp công năng.'),
  ]),

  M(31, 'Âm nhạc — Sáng tác và biểu diễn nhóm', [
    Q('Sáng tác bài hát đơn giản gồm?', ['Chỉ lời', 'Chỉ đệm', 'Chỉ giai điệu', 'Lời + giai điệu + đệm hoà thanh'], 3, '3 thành phần: lời (lyrics), giai điệu (melody), đệm hoà thanh (chords).'),
    Q('Cấu trúc 1 bài hát phổ biến?', ['Chỉ verse', 'Intro – Verse – Chorus – Verse – Chorus – Bridge – Chorus – Outro', 'Verse – Verse – Verse (lặp lại verse liên tục)', 'Chỉ chorus'], 1, 'Cấu trúc phổ biến: intro → verse → chorus → verse → chorus → bridge → chorus → outro.'),
    Q('Khi biểu diễn nhóm, cần?', ['Cạnh tranh nhau', 'Át tiếng nhau', 'Tập luyện chung, đồng đều, phối hợp', 'Mỗi người chơi tốc độ riêng theo cảm hứng'], 2, 'Biểu diễn nhóm: phối hợp, đồng đều, lắng nghe nhau, tôn trọng vai trò mỗi người.'),
    Q('Vai trò trong ban nhạc?', ['Chỉ chơi nhạc cụ', 'Tất cả như nhau', 'Hát chính, hát bè, guitar, bass, trống, keyboard…', 'Chỉ hát'], 2, 'Ban nhạc có nhiều vai trò: hát chính, bè, các nhạc cụ — mỗi người có vai trò riêng.'),
    Q('Tinh thần khi biểu diễn?', ['Sợ hãi', 'Lạnh lùng', 'Tự tin, vui vẻ, truyền cảm xúc cho khán giả', 'Vô cảm'], 2, 'Biểu diễn cần tự tin + cảm xúc thật + giao lưu với khán giả.'),
  ]),

  M(32, 'Mỹ thuật — Sắp đặt (Installation art)', [
    Q('Sắp đặt (installation art) là?', ['Tranh treo', 'Phim ngắn chiếu trong rạp', 'Tượng nhỏ', 'Tác phẩm 3D đặt trong không gian, người xem đi vào trải nghiệm'], 3, 'Installation art: tác phẩm 3D trong không gian, người xem trải nghiệm trực tiếp.'),
    Q('Đặc trưng sắp đặt?', ['Khô khan', 'Tách rời người xem', 'Hoàn toàn tĩnh, không thay đổi theo thời gian', 'Tương tác với không gian + người xem'], 3, 'Installation tương tác mạnh với không gian và người xem — không thể tách rời.'),
    Q('Vật liệu trong sắp đặt?', ['Chỉ đá', 'Đa dạng: gỗ, kim loại, vải, ánh sáng, âm thanh, video', 'Chỉ sơn', 'Chỉ giấy'], 1, 'Sắp đặt dùng đủ vật liệu: tự nhiên, công nghệ, ánh sáng, âm thanh, video…'),
    Q('Nghệ sĩ sắp đặt nổi tiếng quốc tế?', ['Yayoi Kusama (chấm tròn), Olafur Eliasson (ánh sáng)', 'Mozart', 'Van Gogh', 'Picasso'], 0, 'Yayoi Kusama (chấm tròn, infinity rooms), Olafur Eliasson (ánh sáng, thiên nhiên)…'),
    Q('Sắp đặt ở VN?', ['Chỉ trong bảo tàng', 'Chỉ ở Tây', 'Chưa từng có nghệ sĩ VN làm sắp đặt', 'Nguyễn Mạnh Hùng, Đinh Q. Lê và nhiều nghệ sĩ trẻ'], 3, 'VN có nhiều nghệ sĩ sắp đặt: Nguyễn Mạnh Hùng, Đinh Q. Lê, Lê Quý Anh Hào…'),
  ]),

  M(33, 'Mỹ thuật — Nhiếp ảnh (photography) cơ bản', [
    Q('Nhiếp ảnh là?', ['Nghệ thuật ghi hình bằng máy ảnh', 'Khắc gỗ', 'Vẽ tay', 'Điêu khắc'], 0, 'Nhiếp ảnh = photography: nghệ thuật ghi hình bằng máy ảnh.'),
    Q('Bố cục 1/3 (rule of thirds) là?', ['Đặt góc', 'Đặt giữa', 'Đặt chủ thể chính ngay giữa khung hình', 'Chia khung thành 3x3, đặt chủ thể ở giao điểm'], 3, 'Rule of thirds: chia khung 3x3, đặt chủ thể ở 1 trong 4 giao điểm để bố cục đẹp.'),
    Q('Ánh sáng tự nhiên tốt nhất?', ['Trưa nắng gắt', 'Bất kỳ lúc nào', 'Tối hẳn', 'Golden hour (sáng sớm/chiều muộn) — ánh sáng ấm, dịu'], 3, 'Golden hour (~1h sau bình minh / trước hoàng hôn) cho ánh sáng vàng đẹp nhất.'),
    Q('Tốc độ màn trập (shutter speed)?', ['ISO (độ nhạy sáng của cảm biến)', 'Tiêu cự', 'Khẩu độ', 'Thời gian màn trập mở — ảnh hưởng độ mờ chuyển động'], 3, 'Shutter speed: thời gian mở màn trập. Nhanh → đóng băng chuyển động; chậm → mờ chuyển động.'),
    Q('Khẩu độ (aperture) ảnh hưởng?', ['Tốc độ', 'ISO (độ sáng và nhiễu của ảnh)', 'Độ sâu trường ảnh (xoá phông)', 'Tiêu cự'], 2, 'Khẩu độ lớn (f/1.8): xoá phông mạnh; nhỏ (f/16): rõ từ gần đến xa.'),
  ]),

  M(34, 'Tổng kết — Triển lãm/biểu diễn cuối năm', [
    Q('Triển lãm mỹ thuật cần?', ['Chỉ trưng bày 1 tác phẩm', 'Chọn tác phẩm, sắp xếp không gian, ánh sáng, chú thích', 'Không cần sắp xếp', 'Treo tuỳ ý'], 1, 'Triển lãm: tuyển chọn → bố cục không gian → ánh sáng → chú thích cho từng tác phẩm.'),
    Q('Biểu diễn âm nhạc cuối kì cần?', ['Không cần nhạc cụ', 'Tập luyện, chuẩn bị nhạc cụ, trang phục, sân khấu', 'Tự nhiên', 'Không tập'], 1, 'Biểu diễn: tập luyện kỹ + chuẩn bị nhạc cụ + trang phục + sân khấu + âm thanh.'),
    Q('Vai trò khán giả?', ['Bình luận to tiếng giữa tiết mục', 'Tôn trọng, lắng nghe, vỗ tay đúng lúc', 'Nói chuyện', 'Quay video không xin phép'], 1, 'Khán giả lịch sự: yên lặng nghe, vỗ tay đúng lúc (cuối tác phẩm/chương), tôn trọng người biểu diễn.'),
    Q('Đánh giá nghệ thuật dựa trên?', ['Chỉ giá tiền', 'Chỉ cảm xúc', 'Ý tưởng, kỹ thuật, cảm xúc, tổng thể', 'Chỉ kỹ thuật'], 2, 'Đánh giá đa chiều: ý tưởng (concept) + kỹ thuật + cảm xúc + tổng thể tác phẩm.'),
    Q('Cảm xúc sau khi tham gia?', ['Trân trọng nghệ thuật, học hỏi từ bạn bè', 'Ganh ghét', 'Vô cảm', 'Khinh chê'], 0, 'Học nghệ thuật: trân trọng cái đẹp, học hỏi từ đồng nghiệp, không ganh đua.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Nhịp 4/4 có?', ['4 phách/ô nhịp', '2 phách', '3 phách', '6 phách'], 0, 'Số chỉ nhịp.'),
    Q('Chùa Một Cột xây thời?', ['Trần (XIII–XIV)', 'Nguyễn', 'Lê sơ (XV)', 'Lý'], 3, '1049.'),
    Q('Beethoven Symphony số mấy có Ode to Joy?', ['6', '5', '9', '7'], 2, 'Choral Symphony.'),
    Q('Tranh "Em Thuý" của?', ['Tô Ngọc Vân', 'Bùi Xuân Phái', 'Trần Văn Cẩn', 'Phan Chánh'], 2, '1944.'),
    Q('Đàn bầu có bao nhiêu dây?', ['2', '3', '4', '1'], 3, 'Độc huyền.'),
  ]),
];

export const S8NT_SCENARIOS = indexBy(S8NT_WEEKS);
