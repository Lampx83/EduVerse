// ============================================================
// Lớp 6 · NGỮ VĂN — 36 tuần
// Bám chương trình GDPT 2018 (Kết nối / Cánh Diều / Chân trời).
// HK1: T1–18 · HK2: T19–36.
// Nội dung gốc, biên soạn lại để luyện tập — không trích nguyên SGK.
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6NV', 'ngu-van', n, title, qs, opts);

export const S6NV_WEEKS = [
  // ──────────────────── HK1 ────────────────────

  M(1, 'Truyện đồng thoại (1): Đặc trưng thể loại', [
    Q('Truyện đồng thoại thường lấy nhân vật chính là?', ['Loài vật, đồ vật được nhân hoá', 'Nhà bác học', 'Học sinh', 'Vua chúa'], 0, 'Đồng thoại dùng loài vật/đồ vật biết nói, biết nghĩ — mang tính người.'),
    Q('Đặc trưng cốt lõi của truyện đồng thoại là?', ['Nhân hoá', 'Có nhiều nhân vật lịch sử', 'Phóng đại con số', 'Tả cảnh nhiều'], 0, 'Nhân hoá là thủ pháp cơ bản: con vật suy nghĩ, nói chuyện như người.'),
    Q('Truyện "Bài học đường đời đầu tiên" của Tô Hoài kể về?', ['Dế Mèn kiêu căng và bài học vì cái chết của Dế Choắt', 'Dế Mèn làm vua', 'Dế Mèn đi học', 'Dế Mèn cưới vợ'], 0, 'Sự ngông cuồng của Dế Mèn dẫn đến cái chết của Dế Choắt — bài học cay đắng đầu đời.'),
    Q('Nhân vật Dế Mèn ở đầu truyện có tính cách nổi bật là?', ['Khiêm tốn, trầm tính', 'Lười biếng, ham ăn', 'Hiền lành, nhút nhát', 'Kiêu căng, hống hách'], 3, 'Mèn tự đắc vì cường tráng, hay bắt nạt kẻ yếu.'),
    Q('Bài học Mèn rút ra ở cuối đoạn trích là gì?', ['Phải đi xa nhà', 'Không nên kiêu căng, biết suy nghĩ trước khi hành động', 'Phải im lặng tuyệt đối', 'Phải đánh nhiều hơn'], 1, 'Cái chết của Choắt khiến Mèn ăn năn — biết suy xét, nhận lỗi.'),
    Q('Trong đồng thoại, vì sao tác giả nhân hoá con vật?', ['Để khoe vốn từ', 'Vì con vật biết viết', 'Để truyền bài học sống cho người đọc một cách nhẹ nhàng', 'Để doạ trẻ em'], 2, 'Mượn chuyện con vật để nói chuyện đời, dễ tiếp nhận với bạn đọc nhỏ tuổi.'),
  ]),

  M(2, 'Truyện đồng thoại (2): Nhân vật và tình huống', [
    Q('Nhân vật phụ Dế Choắt trong truyện được miêu tả là?', ['Giàu có, kiêu kì', 'Thông minh, mưu mẹo', 'Khoẻ mạnh, hung dữ', 'Yếu ớt, ốm yếu, hiền lành'], 3, 'Choắt là đối lập với Mèn — gầy gò, yếu đuối.'),
    Q('Tình huống đẩy truyện đến đỉnh điểm là?', ['Mèn lạc trong rừng', 'Mèn được phong vương', 'Choắt đi học xa', 'Mèn trêu chị Cốc khiến Choắt bị ăn đòn oan'], 3, 'Trò trêu chọc tai hại của Mèn → Cốc trút giận lên Choắt.'),
    Q('Lời trăng trối của Choắt khuyên Mèn điều gì?', ['Phải đánh nhiều bạn hơn', 'Sống phải giàu có', 'Phải đi xa nhà', 'Sống nên biết suy nghĩ, đừng kiêu căng hại người'], 3, 'Choắt khuyên Mèn — đó là bài học cốt lõi của đoạn trích.'),
    Q('Yếu tố nào KHÔNG phải đặc trưng đồng thoại?', ['Mang ý nghĩa giáo dục', 'Nhân vật là loài vật được nhân hoá', 'Có yếu tố tưởng tượng', 'Bắt buộc có yếu tố lịch sử có thật'], 3, 'Đồng thoại không cần bám sự thật lịch sử.'),
    Q('Ngôi kể trong "Bài học đường đời đầu tiên" là?', ['Ngôi thứ hai', 'Ngôi thứ ba toàn tri', 'Ngôi thứ nhất (Dế Mèn xưng "tôi")', 'Không xác định'], 2, 'Mèn tự kể chuyện đời mình — xưng "tôi".'),
    Q('Tác dụng của ngôi kể thứ nhất ở đây?', ['Chỉ thuật khô khan', 'Giấu cảm xúc', 'Khó hiểu tâm lý', 'Bộc lộ trực tiếp suy nghĩ, ăn năn của nhân vật'], 3, 'Ngôi 1 giúp lời ăn năn của Mèn chân thật, gần gũi.'),
  ]),

  M(3, 'Truyện cổ tích: Đặc trưng thể loại', [
    Q('Truyện cổ tích thường có nhân vật?', ['Nhân vật lịch sử có thật', 'Người nổi tiếng đương thời', 'Nhà bác học', 'Kiểu nhân vật (người mồ côi, người út, dũng sĩ…)'], 3, 'Cổ tích xây nhân vật theo "kiểu" — đại diện một lớp người trong xã hội.'),
    Q('Yếu tố đặc trưng của cổ tích là?', ['Yếu tố kì ảo, hoang đường', 'Bám sự kiện lịch sử', 'Số liệu chính xác', 'Phỏng vấn nhân chứng'], 0, 'Bụt, tiên, vật thần kì… là chất liệu của cổ tích.'),
    Q('Kết thúc phổ biến của truyện cổ tích thần kì?', ['Cả hai cùng chết', 'Bi kịch không lối thoát', 'Bỏ ngỏ không kết', 'Người tốt được hạnh phúc, kẻ ác bị trừng phạt'], 3, 'Cổ tích thể hiện ước mơ công bằng của nhân dân.'),
    Q('"Thạch Sanh" thuộc kiểu cổ tích nào?', ['Cổ tích sinh hoạt', 'Cổ tích thần kì về người dũng sĩ', 'Truyện cười', 'Cổ tích loài vật'], 1, 'Thạch Sanh là dũng sĩ, có cung thần, đàn thần — yếu tố kì ảo.'),
    Q('Ý nghĩa truyện cổ tích đối với người đọc?', ['Quảng cáo sản phẩm', 'Cung cấp sự kiện sử học', 'Dạy cách kiếm tiền', 'Gửi gắm ước mơ công bằng, lòng nhân ái'], 3, 'Cổ tích là tiếng nói khát vọng công bằng, nhân ái của nhân dân.'),
    Q('Mô típ "người em út" thường gặp ở cổ tích Việt Nam là?', ['Người hiền lành bị thiệt thòi nhưng cuối cùng được đền đáp', 'Người út luôn thua', 'Người út luôn ác', 'Người út là vua'], 0, 'Người út hiền — qua thử thách thì được hạnh phúc (Tấm, Sọ Dừa…).'),
  ]),

  M(4, 'Truyện truyền thuyết', [
    Q('Truyền thuyết khác cổ tích ở điểm nào?', ['Gắn với nhân vật và sự kiện lịch sử có cốt lõi sự thật', 'Không có yếu tố tưởng tượng', 'Không có cốt truyện', 'Không có nhân vật'], 0, 'Truyền thuyết có "lõi" lịch sử + tô đậm bằng kì ảo.'),
    Q('"Thánh Gióng" thể hiện điều gì?', ['Cách chăn nuôi', 'Cách may áo', 'Tinh thần chống ngoại xâm của dân tộc', 'Cách trồng lúa'], 2, 'Gióng là biểu tượng sức mạnh chống ngoại xâm của người Việt cổ.'),
    Q('Chi tiết Gióng lớn nhanh như thổi, ăn bao nhiêu cũng không no có ý nghĩa?', ['Trẻ con phải ăn nhiều', 'Gióng tham ăn', 'Sức mạnh nhân dân nuôi anh hùng cứu nước', 'Khen mẹ Gióng nấu ăn ngon'], 2, 'Cả làng góp gạo nuôi Gióng — sức mạnh tập thể tạo nên anh hùng.'),
    Q('Chi tiết kì ảo trong "Sự tích Hồ Gươm" là?', ['Lê Lợi đi học', 'Lê Lợi xây thành', 'Rùa thần đòi lại gươm', 'Trận đánh quân Minh'], 2, 'Rùa thần — yếu tố kì ảo thể hiện ý trời ủng hộ nghĩa quân.'),
    Q('Ý nghĩa của việc Lê Lợi trả gươm?', ['Vì gươm quá nặng', 'Vì sợ rùa', 'Vì gươm bị gãy', 'Khát vọng hoà bình sau chiến tranh'], 3, 'Đất nước thanh bình thì gươm trở về với thần — biểu tượng cho hoà bình.'),
    Q('Truyền thuyết và cổ tích giống nhau ở chỗ?', ['Đều có nhân vật là loài vật', 'Đều ghi sự kiện chính xác như sử', 'Đều có yếu tố tưởng tượng kì ảo', 'Đều bằng văn xuôi hiện đại'], 2, 'Cả hai đều dùng yếu tố kì ảo để truyền tải ý nghĩa.'),
  ]),

  M(5, 'Thơ lục bát — đặc điểm và cách gieo vần', [
    Q('Thơ lục bát có cấu trúc câu là?', ['Hai câu đều 6 chữ', 'Hai câu đều 8 chữ', 'Một câu 6 chữ, một câu 8 chữ luân phiên', 'Câu nào cũng 7 chữ'], 2, '"Lục" = 6, "bát" = 8 — luân phiên 6–8.'),
    Q('Tiếng thứ 6 của câu lục thường vần với?', ['Không cần vần', 'Tiếng thứ 8 của câu bát', 'Tiếng đầu câu sau', 'Tiếng thứ 6 của câu bát ngay sau'], 3, 'Quy tắc gieo vần lục bát: tiếng 6 câu lục vần với tiếng 6 câu bát.'),
    Q('Tiếng thứ 8 của câu bát vần với?', ['Tiếng thứ 6 của câu lục tiếp theo', 'Tiếng thứ 8 câu bát sau', 'Tiếng đầu câu trước', 'Không cần vần'], 0, 'Tiếng 8 câu bát → vần với tiếng 6 câu lục liền sau, tạo móc xích.'),
    Q('Lục bát thường gieo vần loại nào?', ['Vần trắc (T)', 'Cả bằng và trắc xen kẽ', 'Vần bằng (B)', 'Không có vần'], 2, 'Vần lục bát là vần bằng.'),
    Q('Luật bằng trắc lục bát: tiếng thứ 2 câu lục thường mang thanh?', ['Bằng hoặc trắc đều được', 'Trắc', 'Bằng', 'Bỏ trống'], 2, 'Tiếng 2 = B, tiếng 4 = T, tiếng 6 = B — luật cơ bản câu lục.'),
    Q('Câu nào sau đây ĐÚNG dạng lục bát?', ['"Trên trời mây trắng như bông / Ở dưới cánh đồng bông trắng như mây"', '"Em đi học sớm mai"', '"Hè về phượng nở đỏ"', '"Mặt trời đỏ rực / Buổi sáng tinh mơ"'], 0, 'Hai câu 6 và 8, vần "bông – đồng – bông" theo móc xích.'),
  ]),

  M(6, 'Văn miêu tả (1): Tả người', [
    Q('Mục đích của văn tả người là?', ['Kể chuyện đời', 'Liệt kê số đo', 'Bàn luận triết lí', 'Giúp người đọc hình dung rõ ngoại hình, tính cách nhân vật'], 3, 'Tả người = vẽ chân dung bằng ngôn từ.'),
    Q('Khi tả ngoại hình, cần chú ý?', ['Chỉ tả chiều cao', 'Chỉ tả màu áo', 'Chi tiết tiêu biểu (nét mặt, ánh mắt, nụ cười…)', 'Liệt kê tất cả từ đầu đến chân'], 2, 'Chọn chi tiết tiêu biểu, có dấu ấn — không liệt kê dàn trải.'),
    Q('Để tả tính cách qua hành động, ta nên?', ['Liệt kê khẩu hiệu', 'Tả cử chỉ, lời nói, việc làm cụ thể', 'Chỉ nói "rất tốt"', 'Tả chỗ ở'], 1, 'Hành động cụ thể bộc lộ tính cách — "show, don\'t tell".'),
    Q('Bố cục bài văn tả người gồm?', ['Chỉ thân bài', 'Mở – Kết', 'Mở bài – Thân bài – Kết bài', 'Một đoạn duy nhất'], 2, 'Bố cục 3 phần là cơ bản của văn miêu tả.'),
    Q('Trong "Bà tôi rất hiền, mái tóc bạc như cước, đôi mắt hiền từ", đặc điểm tiêu biểu là?', ['Bộ váy', 'Mái tóc và đôi mắt', 'Đôi giày', 'Chiếc khăn'], 1, 'Tóc bạc + mắt hiền — chi tiết tiêu biểu thể hiện tuổi già nhân hậu.'),
    Q('Phép tu từ nào hay dùng khi tả người?', ['So sánh, nhân hoá', 'Hoán dụ về tỉ giá', 'Tỉ lệ phần trăm', 'Liệt kê số liệu'], 0, 'So sánh + nhân hoá làm chân dung sinh động.'),
  ]),

  M(7, 'Văn miêu tả (2): Tả cảnh', [
    Q('Khi tả cảnh, trình tự hợp lí thường là?', ['Từ cảm xúc đến số liệu', 'Lung tung không trình tự', 'Chỉ tả phần kết', 'Từ bao quát đến chi tiết (hoặc từ xa đến gần)'], 3, 'Trình tự không gian (xa→gần) hoặc thời gian giúp bài chặt chẽ.'),
    Q('Tả cảnh cần huy động giác quan nào?', ['Chỉ mắt', 'Không cần giác quan', 'Chỉ tai', 'Mắt, tai, mũi, da (thị, thính, khứu, xúc giác)…'], 3, 'Tả đa giác quan → cảnh sống động.'),
    Q('"Buổi sớm, sương la đà trên mặt hồ như khói." sử dụng?', ['Hoán dụ', 'So sánh', 'Liệt kê', 'Điệp ngữ'], 1, '"Sương như khói" — so sánh ngang bằng.'),
    Q('Khi tả cảnh có người, cần?', ['Tách cảnh và người', 'Lồng hoạt động của người vào cảnh', 'Chỉ tả cây cối', 'Bỏ con người'], 1, 'Cảnh có sự sống — người hoạt động làm cảnh sinh động.'),
    Q('Cảm xúc của người viết trong bài tả cảnh nên?', ['Không cần', 'Tách biệt, viết riêng', 'Chỉ viết ở kết bài', 'Lồng vào hình ảnh một cách tự nhiên'], 3, 'Tả cảnh ngụ tình — cảm xúc đi cùng hình ảnh.'),
    Q('Câu nào tả cảnh THẤT BẠI?', ['"Tiếng chim ríu rít trong vòm lá."', '"Nắng vàng như mật trải đều trên cánh đồng."', '"Mặt trời lên đỏ rực phía Đông."', '"Cảnh đẹp lắm." (chung chung)'], 3, 'Câu chung chung không gợi hình — không phải tả cảnh tốt.'),
  ]),

  M(8, 'Biện pháp tu từ: So sánh', [
    Q('So sánh là?', ['Đặt hai từ giống nhau', 'Đối chiếu sự vật này với sự vật khác có nét tương đồng', 'Liệt kê', 'Đếm số lượng'], 1, 'So sánh = đối chiếu để làm nổi bật đặc điểm.'),
    Q('Cấu tạo đầy đủ của phép so sánh gồm mấy yếu tố?', ['2 yếu tố', '5 yếu tố', '4 yếu tố: vế A, phương diện, từ so sánh, vế B', '3 yếu tố'], 2, 'A – phương diện – từ so sánh – B (có thể khuyết phương diện hoặc từ so sánh).'),
    Q('"Trẻ em như búp trên cành" — từ so sánh là?', ['búp trên cành', 'trẻ em', 'như', 'trên cành'], 2, '"Như" là từ so sánh.'),
    Q('"Đường vô xứ Nghệ quanh quanh / Non xanh nước biếc như tranh hoạ đồ" — vế B là?', ['Non xanh', 'Đường vô xứ Nghệ', 'Nước biếc', 'Tranh hoạ đồ'], 3, 'Vế B = đối tượng được dùng để so sánh.'),
    Q('Tác dụng của so sánh trong văn miêu tả?', ['Làm hình ảnh sinh động, gợi cảm', 'Tăng số chữ', 'Đánh đố người đọc', 'Làm câu dài hơn'], 0, 'So sánh giúp người đọc hình dung cụ thể, sống động.'),
    Q('Có mấy kiểu so sánh chính?', ['Chỉ ngang bằng', 'So sánh ngang bằng và so sánh không ngang bằng', 'Chỉ không ngang bằng', 'Bốn kiểu'], 1, 'Ngang bằng (như, là…) và không ngang bằng (hơn, kém, chẳng bằng…).'),
  ]),

  M(9, 'Biện pháp tu từ: Nhân hoá', [
    Q('Nhân hoá là?', ['Đặt tên cho người', 'So sánh hai vật', 'Đếm số lượng vật', 'Gọi/tả vật bằng từ vốn dùng cho người'], 3, 'Nhân hoá = "gán" đặc điểm con người cho vật.'),
    Q('"Ông trời mặc áo giáp đen ra trận" — phép nhân hoá là?', ['Gọi trời là "ông", trời "mặc áo", "ra trận"', 'Liệt kê đồ vật', 'So sánh trời với áo', 'Điệp từ'], 0, 'Trời được nhân hoá thành "ông" có hành động như người ra trận.'),
    Q('Có mấy kiểu nhân hoá phổ biến?', ['3 kiểu: dùng từ gọi người; dùng từ chỉ hoạt động/đặc điểm người; trò chuyện với vật', '2 kiểu', '1 kiểu', '5 kiểu'], 0, 'Ba kiểu nhân hoá cơ bản trong SGK.'),
    Q('"Lá vàng trước ngõ khẽ đưa vèo" — nhân hoá ở từ?', ['khẽ đưa vèo (hoạt động của người)', 'lá vàng', 'trước ngõ', 'vèo (từ tượng thanh)'], 0, '"Khẽ đưa" là hành động được nhân hoá cho lá.'),
    Q('"Trâu ơi ta bảo trâu này" — kiểu nhân hoá nào?', ['Dùng từ chỉ hoạt động', 'So sánh', 'Liệt kê', 'Trò chuyện, xưng hô với vật như với người'], 3, 'Gọi trâu bằng "ơi" – trò chuyện như với người.'),
    Q('Tác dụng nhân hoá?', ['Đánh đố', 'Tăng số chữ', 'Làm sự vật trở nên gần gũi, có hồn', 'Làm câu khó hiểu'], 2, 'Nhân hoá làm thế giới vật trở nên sống động, gần với con người.'),
  ]),

  M(10, 'Biện pháp tu từ: Ẩn dụ và hoán dụ', [
    Q('Ẩn dụ là?', ['So sánh có từ "như"', 'Lặp từ', 'Đếm số lượng', 'Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng'], 3, 'Ẩn dụ ~ so sánh ngầm — bỏ vế A và từ so sánh.'),
    Q('"Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền" — ẩn dụ "thuyền – bến" chỉ?', ['Cảnh biển', 'Người con trai – người con gái (tình yêu xa)', 'Nghề đánh cá', 'Phương tiện đi lại'], 1, 'Ẩn dụ chỉ tình yêu đôi lứa: thuyền (chàng) – bến (nàng).'),
    Q('Hoán dụ là?', ['Gọi tên sự vật này bằng tên sự vật khác có quan hệ gần gũi (bộ phận – toàn thể, dấu hiệu – đối tượng…)', 'Liệt kê', 'Lặp lại', 'So sánh xa nhau'], 0, 'Hoán dụ dựa vào quan hệ gần gũi (không phải tương đồng).'),
    Q('"Áo nâu cùng với áo xanh / Nông thôn cùng với thị thành đứng lên" — "áo nâu", "áo xanh" hoán dụ chỉ?', ['Hai màu sắc', 'Hai cửa hàng', 'Hai loại áo', 'Nông dân và công nhân'], 3, 'Lấy dấu hiệu trang phục để chỉ tầng lớp người.'),
    Q('Điểm khác cơ bản giữa ẩn dụ và hoán dụ?', ['Không khác gì', 'Hoán dụ chỉ dùng cho người', 'Ẩn dụ dài hơn', 'Ẩn dụ dựa vào tương đồng, hoán dụ dựa vào quan hệ gần gũi'], 3, 'Bản chất: tương đồng (ẩn dụ) vs liên hệ gần gũi (hoán dụ).'),
    Q('"Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao" — "cây" ẩn dụ chỉ?', ['Con người, cá nhân', 'Khu rừng', 'Cây cối thật', 'Núi đá'], 0, '"Cây" chỉ cá nhân; bài học về sức mạnh đoàn kết.'),
  ]),

  M(11, 'Từ đơn, từ phức, từ ghép, từ láy (1)', [
    Q('Từ đơn là?', ['Từ chỉ có một âm', 'Từ chỉ dùng một lần', 'Từ chỉ có một tiếng', 'Từ có nhiều tiếng'], 2, 'Từ đơn = 1 tiếng có nghĩa: nhà, đi, học…'),
    Q('Từ phức gồm?', ['Câu ghép', 'Chỉ từ láy', 'Chỉ từ ghép', 'Từ ghép và từ láy'], 3, 'Từ phức = từ có ≥ 2 tiếng, gồm 2 loại: ghép + láy.'),
    Q('Từ nào là từ đơn?', ['nhà cửa', 'nhà', 'lung linh', 'sạch sẽ'], 1, '"Nhà" — 1 tiếng — từ đơn.'),
    Q('Từ ghép là?', ['Từ chỉ một âm tiết', 'Từ có tiếng lặp âm', 'Từ gồm các tiếng có nghĩa kết hợp lại', 'Từ vô nghĩa'], 2, 'Các tiếng trong từ ghép đều có nghĩa.'),
    Q('Từ nào là từ ghép?', ['rì rào', 'lung linh', 'quần áo', 'lấp lánh'], 2, '"Quần" và "áo" đều có nghĩa → từ ghép.'),
    Q('Tách "bàn ghế" thì?', ['Là từ láy', 'Không tách được', 'Là từ đơn', '"Bàn" và "ghế" đều có nghĩa → từ ghép'], 3, 'Cả hai tiếng đều mang nghĩa, ghép tạo nghĩa khái quát.'),
  ]),

  M(12, 'Từ đơn, từ phức, từ ghép, từ láy (2)', [
    Q('Từ láy là?', ['Từ phức có quan hệ láy âm giữa các tiếng', 'Từ đơn lặp lại', 'Từ Hán Việt', 'Từ ghép nghĩa'], 0, 'Các tiếng trong từ láy lặp âm đầu, vần hoặc cả hai.'),
    Q('Từ nào là từ láy?', ['bàn ghế', 'nhà cửa', 'lung linh', 'sách vở'], 2, '"Lung linh" — láy âm "l" và vần "ung/inh".'),
    Q('Phân loại từ láy theo cấu tạo gồm?', ['Láy toàn bộ và láy bộ phận', 'Láy chính và phụ', 'Láy đơn và kép', 'Láy âm và láy nghĩa'], 0, 'Láy toàn bộ (xanh xanh) vs láy bộ phận (lung linh).'),
    Q('"Xanh xanh" là từ láy?', ['Láy bộ phận âm đầu', 'Không phải từ láy', 'Láy toàn bộ', 'Láy bộ phận vần'], 2, 'Lặp lại nguyên tiếng → láy toàn bộ.'),
    Q('"Rì rào" láy bộ phận nào?', ['Không láy', 'Láy toàn bộ', 'Láy âm đầu "r"', 'Láy vần'], 2, 'Cùng phụ âm đầu "r" → láy âm.'),
    Q('"Lác đác" láy bộ phận nào?', ['Láy toàn bộ', 'Láy vần "ác"', 'Từ ghép', 'Láy âm đầu'], 1, 'Cùng vần "ác" → láy vần.'),
  ]),

  M(13, 'Nghĩa của từ — từ nhiều nghĩa', [
    Q('Nghĩa gốc của từ là?', ['Nghĩa dùng nhiều nhất', 'Nghĩa mới phát sinh', 'Nghĩa hài hước', 'Nghĩa xuất hiện đầu tiên, làm cơ sở cho các nghĩa khác'], 3, 'Nghĩa gốc = nghĩa ban đầu; nghĩa chuyển sinh ra trên cơ sở nghĩa gốc.'),
    Q('"Chân" trong "chân người" và "chân bàn" — quan hệ là?', ['Từ đồng nghĩa', 'Từ trái nghĩa', 'Từ nhiều nghĩa (cùng một từ, nghĩa chuyển)', 'Từ đồng âm'], 2, '"Chân bàn" là nghĩa chuyển của "chân" (bộ phận nâng đỡ).'),
    Q('Nghĩa chuyển hình thành dựa trên?', ['Quan hệ với nghĩa gốc (tương đồng/gần gũi)', 'Cách viết', 'Sự ngẫu nhiên', 'Số tiếng'], 0, 'Nghĩa chuyển có liên hệ với nghĩa gốc — không phải tách rời.'),
    Q('"Mắt" trong "mắt na" là?', ['Nghĩa gốc', 'Từ đồng âm', 'Nghĩa chuyển (chỉ bộ phận giống mắt người)', 'Từ láy'], 2, '"Mắt na" — nghĩa chuyển từ "mắt" (cơ quan thị giác).'),
    Q('Để giải thích nghĩa của từ, có thể?', ['Dùng từ đồng nghĩa hoặc trình bày khái niệm', 'Đếm số chữ cái', 'Chỉ phiên âm', 'Chỉ tra từ trái nghĩa'], 0, 'Hai cách: dùng từ đồng nghĩa hoặc khái niệm hoá.'),
    Q('"Ngọt" trong "đường ngọt" (vị giác) và "lời ngọt" (lời nói dễ chịu) là?', ['Từ ghép', 'Từ trái nghĩa', 'Từ nhiều nghĩa', 'Từ đồng âm'], 2, 'Cùng cảm giác "dễ chịu" → nghĩa chuyển từ vị giác sang lời nói.'),
  ]),

  M(14, 'Từ đồng âm, đồng nghĩa, trái nghĩa', [
    Q('Từ đồng âm là?', ['Các từ giống âm nhưng nghĩa hoàn toàn khác nhau', 'Từ nhiều nghĩa', 'Từ trái nghĩa', 'Từ cùng nghĩa'], 0, 'Đồng âm: âm giống, nghĩa không liên quan.'),
    Q('"Đường" (đi) và "đường" (ăn) là?', ['Từ đồng âm', 'Từ nhiều nghĩa', 'Từ trái nghĩa', 'Từ đồng nghĩa'], 0, 'Hai nghĩa không liên quan → đồng âm.'),
    Q('Từ đồng nghĩa là?', ['Các từ gần nghĩa hoặc cùng nghĩa', 'Cùng số chữ', 'Cùng vần', 'Cùng âm'], 0, 'Đồng nghĩa: nghĩa giống/gần nhau, có thể thay thế trong một số ngữ cảnh.'),
    Q('Cặp nào là từ đồng nghĩa?', ['Cao – thấp', 'Đen – trắng', 'To – nhỏ', 'Học sinh – học trò'], 3, 'Hai từ cùng chỉ "người đi học".'),
    Q('Cặp nào là từ trái nghĩa?', ['Mẹ – má', 'Đẹp – xấu', 'Học sinh – học trò', 'Quả – trái'], 1, '"Đẹp" và "xấu" đối lập về tính chất.'),
    Q('Phân biệt từ đồng âm và từ nhiều nghĩa dựa vào?', ['Cách viết hoa', 'Số dấu thanh', 'Có hay không có mối liên hệ giữa các nghĩa', 'Số âm tiết'], 2, 'Đồng âm: nghĩa rời nhau. Nhiều nghĩa: có liên hệ với nghĩa gốc.'),
  ]),

  M(15, 'Câu trần thuật đơn (Ai là gì? Ai làm gì? Ai thế nào?)', [
    Q('Câu trần thuật đơn là?', ['Câu cảm thán', 'Câu hỏi ngắn', 'Câu có nhiều cụm C–V', 'Câu chỉ có một cụm chủ – vị làm nòng cốt'], 3, 'Một cụm C–V duy nhất tạo nòng cốt câu.'),
    Q('Câu "Bạn Lan là học sinh giỏi." thuộc kiểu?', ['Ai là gì?', 'Câu hỏi', 'Ai làm gì?', 'Ai thế nào?'], 0, 'Vị ngữ có từ "là" + danh từ → "Ai là gì?"'),
    Q('Câu "Em đang đọc sách." thuộc kiểu?', ['Ai là gì?', 'Câu cảm', 'Ai thế nào?', 'Ai làm gì?'], 3, 'Vị ngữ là cụm động từ "đang đọc sách" → "Ai làm gì?"'),
    Q('Câu "Bầu trời rất xanh." thuộc kiểu?', ['Ai làm gì?', 'Câu hỏi', 'Ai là gì?', 'Ai thế nào?'], 3, 'Vị ngữ là tính từ → "Ai thế nào?"'),
    Q('Trong "Hà Nội là thủ đô của Việt Nam.", từ làm vị ngữ chính là?', ['thủ đô', 'là thủ đô của Việt Nam', 'Hà Nội', 'Việt Nam'], 1, 'Cả cụm "là thủ đô của Việt Nam" làm vị ngữ.'),
    Q('Câu trần thuật đơn dùng để?', ['Chỉ để bộc lộ cảm xúc', 'Chỉ để hỏi', 'Kể, tả, giới thiệu, nhận xét', 'Chỉ để yêu cầu'], 2, 'Chức năng chính: kể/tả/giới thiệu/nhận xét.'),
  ]),

  M(16, 'Chủ ngữ — Vị ngữ', [
    Q('Chủ ngữ là?', ['Bộ phận chỉ thời gian', 'Bộ phận nêu sự vật/hiện tượng được nói đến trong câu', 'Bộ phận chỉ nơi chốn', 'Bộ phận chỉ mục đích'], 1, 'Chủ ngữ trả lời câu hỏi "Ai?", "Cái gì?", "Con gì?".'),
    Q('Vị ngữ là?', ['Bộ phận nêu hoạt động, đặc điểm, trạng thái của sự vật ở chủ ngữ', 'Bộ phận chỉ thời gian', 'Bộ phận chỉ địa điểm', 'Bộ phận đứng đầu câu'], 0, 'Vị ngữ trả lời câu hỏi "Làm gì?", "Là gì?", "Thế nào?".'),
    Q('Trong "Mẹ em đang nấu cơm.", chủ ngữ là?', ['Mẹ em', 'đang nấu cơm', 'Mẹ em đang', 'Mẹ em đang nấu'], 0, '"Mẹ em" — bộ phận được nói đến.'),
    Q('Trong câu trên, vị ngữ là?', ['nấu cơm', 'đang nấu', 'nấu', 'đang nấu cơm'], 3, '"Đang nấu cơm" — hành động của chủ ngữ.'),
    Q('Chủ ngữ thường do?', ['Danh từ, đại từ, cụm danh từ đảm nhiệm', 'Động từ', 'Phó từ', 'Tính từ'], 0, 'Chủ ngữ chính do danh từ/cụm danh từ/đại từ làm.'),
    Q('Câu nào có chủ ngữ là đại từ?', ['Em rất chăm học.', 'Cây phượng đang nở.', 'Mặt trời đỏ rực.', 'Bút mực mới mua.'], 0, '"Em" là đại từ làm chủ ngữ.'),
  ]),

  M(17, 'Trạng ngữ', [
    Q('Trạng ngữ là?', ['Vị ngữ phụ', 'Thành phần phụ bổ sung ý về thời gian, nơi chốn, nguyên nhân… cho câu', 'Bộ phận chỉ chủ thể', 'Thành phần chính của câu'], 1, 'Trạng ngữ là thành phần phụ, làm rõ hoàn cảnh.'),
    Q('"Sáng nay, em đi học sớm." — trạng ngữ là?', ['em đi học', 'đi học sớm', 'đi học', 'Sáng nay'], 3, '"Sáng nay" trạng ngữ chỉ thời gian.'),
    Q('Trạng ngữ chỉ nơi chốn trong "Ở vườn, hoa nở rộ." là?', ['hoa nở rộ', 'Ở vườn', 'hoa nở', 'nở rộ'], 1, '"Ở vườn" — chỉ địa điểm.'),
    Q('Trạng ngữ chỉ nguyên nhân trong "Vì trời mưa, lớp tan muộn." là?', ['tan muộn', 'lớp tan muộn', 'trời mưa', 'Vì trời mưa'], 3, '"Vì trời mưa" — chỉ nguyên nhân.'),
    Q('Khi viết, trạng ngữ thường được ngăn cách với nòng cốt bằng?', ['Dấu hai chấm', 'Dấu chấm', 'Dấu phẩy', 'Dấu hỏi'], 2, 'Trạng ngữ đầu câu thường tách bằng dấu phẩy.'),
    Q('Câu nào KHÔNG có trạng ngữ?', ['Em đi học.', 'Vì rét, em mặc áo ấm.', 'Tại sân trường, các bạn xếp hàng.', 'Sáng nay, em đi học.'], 0, 'Câu đầu chỉ có C–V, không có trạng ngữ.'),
  ]),

  M(18, 'Ôn tập học kì 1', [
    Q('Tổng hợp: Truyện đồng thoại nổi bật thường dùng thủ pháp?', ['Nhân hoá', 'Phỏng vấn', 'Liệt kê', 'Trắc nghiệm'], 0, 'Nhân hoá là đặc trưng cơ bản.'),
    Q('Tổng hợp: Truyền thuyết khác cổ tích ở chỗ?', ['Có nhiều nhân vật hơn', 'Có lõi sự thật lịch sử', 'Không có yếu tố kì ảo', 'Dài hơn'], 1, 'Truyền thuyết bám sự kiện/nhân vật lịch sử.'),
    Q('Tổng hợp: Câu lục bát đúng có cấu trúc?', ['4 chữ – 4 chữ', '7 chữ – 7 chữ', '6 chữ – 8 chữ luân phiên', '5 chữ – 7 chữ'], 2, 'Lục (6) – Bát (8).'),
    Q('Tổng hợp: "Mặt trời như quả cầu lửa" là phép?', ['So sánh', 'Điệp ngữ', 'Hoán dụ', 'Nhân hoá'], 0, 'Dùng từ "như" — so sánh.'),
    Q('Tổng hợp: "Áo nâu" chỉ "nông dân" là phép?', ['Nhân hoá', 'Ẩn dụ', 'Hoán dụ', 'So sánh'], 2, 'Lấy dấu hiệu trang phục → quan hệ gần gũi → hoán dụ.'),
    Q('Tổng hợp: Câu "Sáng nay, em đi học." có trạng ngữ là?', ['em đi học', 'Sáng nay', 'đi học', 'em'], 1, '"Sáng nay" trạng ngữ chỉ thời gian.'),
    Q('Tổng hợp: "Lung linh" thuộc loại?', ['Từ Hán Việt', 'Từ láy bộ phận', 'Từ đơn', 'Từ ghép'], 1, 'Láy âm "l" + vần khác → láy bộ phận.'),
  ]),

  // ──────────────────── HK2 ────────────────────

  M(19, 'Ký, hồi ký (1): Đặc trưng thể loại', [
    Q('Ký là thể loại?', ['Chỉ ghi số liệu', 'Đặt theo cốt truyện cổ tích', 'Ghi chép sự việc, con người có thật bằng cảm nhận của người viết', 'Hoàn toàn hư cấu'], 2, 'Ký = ghi chép thực + cảm nhận chủ quan.'),
    Q('Đặc điểm chung của ký là?', ['Không có cảm xúc', 'Có yếu tố thật + cái "tôi" trữ tình của người viết', 'Hoàn toàn tưởng tượng', 'Chỉ kể lại như sử'], 1, 'Người viết thường hiện diện qua cái "tôi" cảm xúc.'),
    Q('Hồi ký là ký kể về?', ['Sự việc đã qua trong cuộc đời người viết hoặc người khác', 'Truyền thuyết', 'Cổ tích', 'Tương lai'], 0, '"Hồi" = nhớ lại — sự việc quá khứ.'),
    Q('Ngôi kể thường dùng trong hồi ký?', ['Ngôi thứ ba toàn tri', 'Ngôi thứ hai', 'Ngôi thứ nhất "tôi"', 'Không xác định'], 2, 'Người kể là người trong cuộc — xưng "tôi".'),
    Q('Ưu thế của ngôi thứ nhất trong hồi ký?', ['Khô khan', 'Lạnh lùng', 'Chân thực, cảm xúc trực tiếp', 'Khó hiểu'], 2, '"Tôi" làm câu chuyện gần gũi, chân thực.'),
    Q('Ký khác truyện hư cấu ở điểm cốt lõi?', ['Bịa hoàn toàn', 'Tôn trọng sự thật của sự việc, con người', 'Có ít từ hơn', 'Có nhiều thoại hơn'], 1, 'Ký bám sự thật, dù vẫn có cảm nhận chủ quan.'),
  ]),

  M(20, 'Ký, hồi ký (2): Đọc – cảm nhận', [
    Q('Khi đọc một đoạn hồi ký, cần chú ý?', ['Chỉ số chữ', 'Chỉ dấu câu', 'Sự việc, không gian, thời gian và cảm xúc người viết', 'Chỉ tốc độ đọc'], 2, 'Đọc ký = nắm "ai – ở đâu – khi nào – cảm thế nào".'),
    Q('Trong hồi ký, chi tiết nhỏ thường có tác dụng?', ['Không có vai trò gì', 'Làm câu dài', 'Gợi cảm xúc sâu sắc, làm sống dậy kỉ niệm', 'Đánh đố người đọc'], 2, 'Chi tiết nhỏ → đắc địa, làm sống lại kí ức.'),
    Q('Cái "tôi" trong hồi ký thường?', ['Im lặng', 'Không hiện diện', 'Vừa kể vừa bộc lộ cảm xúc, suy ngẫm', 'Chỉ kể khô khan'], 2, 'Cái "tôi" trữ tình là linh hồn của ký.'),
    Q('Hồi ký "Tuổi thơ tôi" thường gợi cảm hứng?', ['Hận thù', 'Trân quý kỉ niệm, lòng biết ơn', 'Dửng dưng', 'Sợ hãi'], 1, 'Hồi ký tuổi thơ → kỉ niệm + lòng biết ơn quá khứ.'),
    Q('Khi viết một đoạn hồi ký ngắn về kỉ niệm, cần?', ['Kể cụ thể + bộc lộ cảm xúc', 'Liệt kê khô khan', 'Chỉ tả ngoại hình', 'Chỉ ghi ngày tháng'], 0, 'Sự kiện + cảm xúc mới làm nên hồi ký.'),
    Q('Ngôn ngữ ký thường?', ['Toàn số liệu', 'Toàn kí hiệu', 'Giàu hình ảnh, giàu cảm xúc', 'Khô khan như báo cáo'], 2, 'Ký nghiêng về văn học → cần giàu hình ảnh.'),
  ]),

  M(21, 'Thơ có yếu tố tự sự, miêu tả (1)', [
    Q('Thơ có yếu tố tự sự là loại thơ?', ['Chỉ bộc lộ cảm xúc thuần tuý', 'Có kể lại sự việc/câu chuyện trong bài', 'Chỉ miêu tả', 'Không có nhân vật'], 1, 'Thơ tự sự = thơ có "kể chuyện" qua các sự việc.'),
    Q('Thơ có yếu tố miêu tả khi?', ['Có nhiều hình ảnh tả người, cảnh, vật', 'Chỉ có lập luận', 'Chỉ có thoại', 'Chỉ có số liệu'], 0, 'Hình ảnh tả cảnh/người/vật xuất hiện nhiều.'),
    Q('Yếu tố tự sự trong thơ giúp?', ['Bài thơ dài hơn', 'Triệt tiêu cảm xúc', 'Câu chuyện sinh động, dễ hình dung', 'Câu thơ khó hiểu'], 2, 'Tự sự + thơ → vừa kể vừa lay động cảm xúc.'),
    Q('Bài thơ có hình ảnh "mẹ đội nón ra đồng" — đó là yếu tố?', ['Miêu tả', 'Số liệu', 'Đối thoại', 'Lập luận'], 0, 'Hình ảnh cụ thể → miêu tả.'),
    Q('Khi đọc thơ có yếu tố tự sự, cần chú ý?', ['Chỉ số dòng', 'Chỉ vần điệu', 'Cốt sự việc + cảm xúc tác giả gửi gắm', 'Chỉ tên tác giả'], 2, 'Hiểu sự việc → mới hiểu cảm xúc.'),
    Q('Tự sự và trữ tình trong thơ?', ['Trái nghĩa hoàn toàn', 'Là một', 'Không bao giờ gặp nhau', 'Có thể đan xen, bổ trợ cho nhau'], 3, 'Thơ hiện đại thường đan xen kể – tả – cảm.'),
  ]),

  M(22, 'Thơ có yếu tố tự sự, miêu tả (2)', [
    Q('Trong câu thơ "Mẹ ru cái lẽ ở đời / Sữa nuôi phần xác, hát nuôi phần hồn", yếu tố nổi bật là?', ['Trữ tình (cảm xúc về mẹ) + chút tự sự', 'Lập luận', 'Đối thoại', 'Số liệu'], 0, 'Câu thơ giàu cảm xúc, có "kể" việc mẹ ru con.'),
    Q('Hình ảnh giàu tính tạo hình trong thơ thường tác động đến giác quan?', ['Chỉ vị giác', 'Không tác động', 'Thị giác và thính giác', 'Chỉ xúc giác'], 2, 'Hình ảnh thơ chủ yếu gợi nhìn và nghe.'),
    Q('Khi thơ kể về một câu chuyện ngắn, người đọc nên?', ['Chỉ tính số dòng', 'Hình dung sự việc rồi cảm nhận cảm xúc', 'Bỏ qua sự việc', 'Chỉ đọc kết'], 1, 'Nắm sự việc → cảm nhận thông điệp.'),
    Q('Nhịp thơ ảnh hưởng đến?', ['Số trang', 'Màu giấy', 'Cách in', 'Cảm xúc và mạch tự sự'], 3, 'Nhịp = "hơi thở" của thơ.'),
    Q('Thơ có yếu tố miêu tả khác văn miêu tả ở chỗ?', ['Dài hơn', 'Hình ảnh thơ cô đọng, giàu sức gợi, có nhạc tính', 'Có nhiều nhân vật hơn', 'Không có cảm xúc'], 1, 'Thơ cô đọng + nhạc + ngữ điệu.'),
    Q('Đọc thơ đúng cách cần?', ['Bỏ hình ảnh', 'Bỏ vần', 'Đọc thành tiếng theo nhịp, ngẫm hình ảnh, cảm xúc', 'Đọc nhanh'], 2, 'Đọc chậm theo nhịp, hình dung hình ảnh.'),
  ]),

  M(23, 'Văn bản nghị luận (đặc trưng cơ bản)', [
    Q('Văn bản nghị luận dùng để?', ['Bộc lộ cảm xúc thuần tuý', 'Tả cảnh', 'Trình bày ý kiến, thuyết phục người đọc về một vấn đề', 'Kể chuyện'], 2, 'Mục đích nghị luận = thuyết phục.'),
    Q('Yếu tố cốt lõi của nghị luận là?', ['Đối thoại nhiều', 'Cốt truyện, nhân vật', 'Hình ảnh, nhịp', 'Luận điểm, luận cứ, lập luận'], 3, 'Ba yếu tố cốt lõi của nghị luận.'),
    Q('Luận điểm là?', ['Dẫn chứng', 'Câu kết', 'Câu mở đầu', 'Ý kiến chính người viết muốn người đọc tin'], 3, 'Luận điểm = quan điểm cần thuyết phục.'),
    Q('Luận cứ là?', ['Hình ảnh thơ', 'Lí lẽ và dẫn chứng để làm rõ luận điểm', 'Đối thoại', 'Cảm xúc'], 1, 'Luận cứ = chất liệu chứng minh luận điểm.'),
    Q('Trong nghị luận, dẫn chứng tốt nên?', ['Chung chung, không nguồn rõ', 'Bịa đặt', 'Lệch chủ đề', 'Cụ thể, xác thực, đúng vấn đề'], 3, 'Dẫn chứng tốt = thật, chuẩn, sát.'),
    Q('Câu nào sau đây là luận điểm?', ['Em rất buồn.', 'Hôm qua trời mưa.', 'Đọc sách giúp mở rộng hiểu biết.', 'Hoa nở đỏ rực.'], 2, 'Là một quan điểm cần bàn luận, có thể bảo vệ bằng lí lẽ.'),
  ]),

  M(24, 'Văn bản thông tin', [
    Q('Văn bản thông tin nhằm?', ['Bộc lộ cảm xúc cá nhân', 'Cung cấp thông tin, kiến thức, hướng dẫn về một đối tượng', 'Tả cảnh thơ mộng', 'Kể chuyện hư cấu'], 1, 'Chức năng chính: cung cấp thông tin.'),
    Q('Đặc điểm văn bản thông tin?', ['Đậm chất thơ', 'Chính xác, khách quan, mạch lạc', 'Toàn đối thoại', 'Cảm tính, mơ hồ'], 1, 'Yêu cầu: chính xác + khách quan.'),
    Q('Cấu trúc phổ biến của văn bản thông tin?', ['Khổ thơ', 'Mở thân kết của truyện', 'Tiêu đề – sapo/mở đầu – các phần thông tin – kết thúc', 'Đối thoại'], 2, 'Thông tin thường tổ chức theo phần/đề mục rõ ràng.'),
    Q('Thông tin được trình bày sinh động hơn nhờ?', ['Vần điệu', 'Yếu tố hoang đường', 'Bảng, biểu đồ, hình ảnh, sơ đồ', 'Thoại nhân vật'], 2, 'Yếu tố phi ngôn ngữ giúp người đọc dễ nắm.'),
    Q('Khi đọc văn bản thông tin, cần?', ['Chỉ đọc kết', 'Chỉ đọc tiêu đề', 'Đọc lướt vô tội vạ', 'Nắm ý chính từng phần, dữ liệu quan trọng'], 3, 'Cần ghi nhận ý chính + số liệu quan trọng.'),
    Q('Văn bản thông tin và văn bản nghị luận khác nhau ở?', ['Phông chữ', 'Thông tin nhằm cung cấp; nghị luận nhằm thuyết phục', 'Cách in', 'Số chữ'], 1, 'Mục đích là khác biệt cốt lõi.'),
  ]),

  M(25, 'Văn kể chuyện (1): Cách kể, ngôi kể', [
    Q('Văn kể chuyện là?', ['Lập luận', 'Tả cảnh', 'Trình bày một chuỗi sự việc có nhân vật, có ý nghĩa', 'Bộc lộ cảm xúc thuần'], 2, 'Kể chuyện = trình bày sự việc theo trình tự.'),
    Q('Ngôi thứ nhất trong văn kể là?', ['Người kể là phụ huynh', 'Người kể là cô giáo', 'Người kể xưng "tôi/em…"', 'Người kể giấu mình, gọi tên nhân vật'], 2, 'Ngôi 1: người kể trong câu chuyện.'),
    Q('Ngôi thứ ba trong văn kể là?', ['Người kể là tác giả phát biểu', 'Người kể giấu mình, gọi nhân vật bằng tên', 'Người kể là nhân vật chính', 'Người kể xưng "tôi"'], 1, 'Ngôi 3: người kể đứng ngoài.'),
    Q('Ưu thế ngôi 1?', ['Chân thực, dễ bộc lộ cảm xúc trực tiếp', 'Khô khan', 'Lạnh lùng', 'Khó hiểu'], 0, '"Tôi" → chân thực, gần gũi.'),
    Q('Ưu thế ngôi 3?', ['Bao quát, có thể kể nhiều nhân vật, nhiều nơi', 'Chỉ kể được 1 nhân vật', 'Không kể được nội tâm', 'Bó hẹp'], 0, 'Ngôi 3 toàn tri có thể bao quát nhiều tuyến.'),
    Q('Chọn ngôi kể nào tuỳ thuộc?', ['Số trang', 'Mục đích kể và hiệu quả nghệ thuật mong muốn', 'Phông chữ', 'Sở thích bút'], 1, 'Tuỳ vào điều người viết muốn nhấn mạnh.'),
  ]),

  M(26, 'Văn kể chuyện (2): Trình tự sự việc', [
    Q('Trình tự kể phổ biến nhất là?', ['Theo bảng chữ cái', 'Theo độ dài', 'Theo thời gian xảy ra sự việc', 'Theo độ tuổi'], 2, 'Trình tự thời gian là cách kể cơ bản.'),
    Q('Khi muốn gây bất ngờ, người kể có thể?', ['Bắt buộc kể tuần tự', 'Đảo trật tự, bắt đầu từ kết quả/cao trào', 'Bỏ kết bài', 'Bỏ mở bài'], 1, 'Đảo trật tự (kết-thân-mở) gây tò mò, hấp dẫn.'),
    Q('Bố cục bài văn kể chuyện?', ['Hai phần', 'Bốn phần cố định', 'Một đoạn duy nhất', 'Mở bài – Thân bài (chuỗi sự việc) – Kết bài'], 3, 'Bố cục 3 phần cơ bản.'),
    Q('Thân bài kể chuyện nên?', ['Tả cảnh là chính', 'Lập luận triết học', 'Liệt kê tất cả mọi thứ', 'Sự việc tiêu biểu, có cao trào và giải quyết'], 3, 'Chọn lọc sự việc tiêu biểu, có nút thắt.'),
    Q('Kết bài kể chuyện thường?', ['Lặp lại mở bài', 'Nêu kết quả, bài học/cảm nghĩ', 'Đặt câu hỏi vô tận', 'Trống không'], 1, 'Kết: kết quả + cảm nghĩ/bài học.'),
    Q('Khi kể, để câu chuyện hấp dẫn cần?', ['Không có nhân vật', 'Toàn liệt kê', 'Khô khan', 'Có chi tiết sinh động, lời thoại tự nhiên'], 3, 'Chi tiết + thoại giúp truyện sống.'),
  ]),

  M(27, 'Văn biểu cảm', [
    Q('Văn biểu cảm dùng để?', ['Liệt kê số liệu', 'Báo cáo sự kiện', 'Hướng dẫn cách làm', 'Bộc lộ tình cảm, cảm xúc của người viết'], 3, 'Văn biểu cảm = nói cảm xúc.'),
    Q('Đối tượng biểu cảm có thể là?', ['Chỉ con người', 'Chỉ đồ vật', 'Người, sự vật, cảnh, sự việc gợi cảm xúc cho người viết', 'Chỉ cảnh'], 2, 'Mọi thứ khơi cảm xúc đều có thể biểu cảm.'),
    Q('Cảm xúc trong văn biểu cảm cần?', ['Chân thật, sâu sắc', 'Vô cảm', 'Giả tạo', 'Khoa trương trống rỗng'], 0, 'Chân thật là gốc của biểu cảm.'),
    Q('Câu nào mang tính biểu cảm rõ?', ['Sông dài 5km.', 'Sông có 3 cầu.', 'Đoàn 30 người đi qua sông.', '"Ôi, dòng sông quê hương yêu dấu của tôi!"'], 3, 'Lời gọi + tính từ cảm xúc → biểu cảm.'),
    Q('Văn biểu cảm có thể kết hợp?', ['Tự sự + miêu tả để làm nền cho cảm xúc', 'Toàn số liệu', 'Toàn công thức', 'Toàn bảng biểu'], 0, 'Kể + tả + cảm → văn biểu cảm hiện đại.'),
    Q('Khi viết bài biểu cảm về một người thân, cần?', ['Tả ngoại hình khô khan', 'Chỉ liệt kê tên tuổi', 'Chép tiểu sử', 'Chọn kỉ niệm, chi tiết đáng nhớ + bộc lộ cảm xúc'], 3, 'Kỉ niệm cụ thể + cảm xúc — đúng văn biểu cảm.'),
  ]),

  M(28, 'Lập dàn ý bài văn', [
    Q('Vai trò của dàn ý?', ['Tăng số trang', 'Làm bài dài hơn', 'Không cần thiết', 'Giúp bài viết mạch lạc, đủ ý, không lan man'], 3, 'Dàn ý = "khung xương" của bài văn.'),
    Q('Dàn ý gồm mấy phần chính?', ['5 phần', '1 phần', '2 phần', '3 phần: Mở bài – Thân bài – Kết bài'], 3, 'Ba phần là cấu trúc cơ bản.'),
    Q('Mở bài nên?', ['Giới thiệu đối tượng và cảm hứng/khuynh hướng chung', 'Trống không', 'Toàn câu hỏi', 'Đi vào kết quả ngay'], 0, 'Mở bài giới thiệu + dẫn dắt vào chủ đề.'),
    Q('Thân bài nên?', ['Triển khai các ý chính theo trình tự hợp lí', 'Chỉ 1 câu', 'Liệt kê hỗn loạn', 'Bỏ trống'], 0, 'Thân bài là phần triển khai chính.'),
    Q('Kết bài nên?', ['Lặp y mở bài', 'Khái quát, nêu cảm nghĩ hoặc bài học', 'Mở thêm vấn đề mới không liên quan', 'Chỉ kể lại sự việc đã nêu ở thân bài'], 1, 'Kết: tổng kết + đọng lại cảm xúc/ý nghĩa.'),
    Q('Mỗi ý lớn trong dàn ý nên?', ['Đứng trơ trọi', 'Không cần làm rõ', 'Có ý nhỏ làm rõ', 'Trùng nhau'], 2, 'Ý lớn → ý nhỏ làm rõ → đoạn văn.'),
  ]),

  M(29, 'Mở đoạn, thân đoạn, kết đoạn', [
    Q('Đoạn văn là?', ['Đơn vị tạo nên văn bản, có một ý chính', 'Một trang giấy', 'Một chữ', 'Câu đơn lẻ'], 0, 'Đoạn = nhóm câu xoay quanh một ý chính.'),
    Q('Câu chủ đề của đoạn thường?', ['Luôn ở giữa', 'Đứng bên lề', 'Mở đoạn (diễn dịch) hoặc kết đoạn (quy nạp)', 'Luôn nằm rải rác ở mọi câu trong đoạn'], 2, 'Vị trí phổ biến: đầu (diễn dịch) hoặc cuối (quy nạp).'),
    Q('Thân đoạn dùng để?', ['Tách khỏi câu chủ đề', 'Đi lạc chủ đề', 'Đặt câu hỏi vô nghĩa', 'Triển khai, làm rõ câu chủ đề bằng lí lẽ/dẫn chứng'], 3, 'Thân đoạn = bộ phận làm rõ ý chính.'),
    Q('Kết đoạn (trong đoạn quy nạp) nên?', ['Mở vấn đề mới', 'Lặp y câu đầu', 'Chốt lại ý chính rút ra từ các câu trước', 'Đưa thêm dẫn chứng mới chưa nhắc ở trên'], 2, 'Quy nạp: từ dẫn chứng → kết luận ở cuối.'),
    Q('Đoạn diễn dịch là?', ['Câu chủ đề ở giữa', 'Không có chủ đề', 'Câu chủ đề ở đầu, các câu sau làm rõ', 'Câu chủ đề ở cuối'], 2, 'Diễn dịch: tổng → phân.'),
    Q('Liên kết đoạn cần?', ['Dùng từ nối, đại từ, lặp ý phù hợp', 'Trộn ngẫu nhiên', 'Ngắt tuỳ ý', 'Bỏ mặc'], 0, 'Phương tiện liên kết giúp đoạn gắn kết mạch lạc.'),
  ]),

  M(30, 'Dấu câu: chấm, phẩy, chấm hỏi, chấm than', [
    Q('Dấu chấm dùng để?', ['Kết thúc câu cảm', 'Kết thúc câu hỏi', 'Kết thúc câu trần thuật', 'Liệt kê'], 2, 'Câu trần thuật kết thúc bằng dấu chấm.'),
    Q('Dấu phẩy dùng để?', ['Ngăn cách thành phần câu, các bộ phận đồng chức', 'Đặt cuối bài', 'Đặt giữa từ', 'Kết thúc câu'], 0, 'Phẩy tách bộ phận, làm rõ cấu trúc câu.'),
    Q('Câu nào dùng dấu phẩy đúng?', ['Hôm nay, em đi học sớm.', 'Hôm nay em, đi học sớm.', 'Hôm nay em đi, học sớm.', 'Hôm nay em đi học sớm,'], 0, 'Tách trạng ngữ "Hôm nay" với nòng cốt câu.'),
    Q('Dấu chấm hỏi dùng?', ['Tách thành phần', 'Kết thúc trần thuật', 'Kết thúc câu hỏi', 'Kết thúc cảm thán'], 2, 'Đặc trưng câu hỏi.'),
    Q('Dấu chấm than dùng?', ['Đầu câu', 'Tách thành phần', 'Kết thúc câu cảm thán/cầu khiến mạnh', 'Giữa từ'], 2, 'Cảm xúc mạnh + lời kêu gọi.'),
    Q('Câu "Ôi, đẹp quá!" — dấu cuối là?', ['Chấm hỏi', 'Chấm than', 'Dấu chấm', 'Dấu ba chấm'], 1, 'Câu cảm thán → kết bằng dấu chấm than.'),
  ]),

  M(31, 'Dấu chấm phẩy, hai chấm, ngoặc kép', [
    Q('Dấu chấm phẩy (;) dùng để?', ['Đặt giữa từ', 'Mở thoại', 'Ngăn cách các vế câu ghép phức tạp hoặc các bộ phận liệt kê có cấu tạo phức', 'Kết thúc câu'], 2, 'Chấm phẩy mạnh hơn phẩy, yếu hơn chấm.'),
    Q('Dấu hai chấm (:) thường dùng để?', ['Mở câu hỏi', 'Báo trước phần giải thích, liệt kê hoặc lời dẫn', 'Kết thúc câu', 'Tách thành phần đồng chức nhỏ'], 1, 'Hai chấm = "sắp tới là phần làm rõ ở dưới".'),
    Q('Câu nào dùng dấu hai chấm đúng?', ['Em mua nhiều đồ: bút, vở, thước.', 'Em mua đồ.', 'Em: mua đồ rồi đi học.', 'Em mua: rồi đi học.'], 0, 'Hai chấm dẫn ra danh sách liệt kê.'),
    Q('Dấu ngoặc kép ("…") thường dùng để?', ['Đánh dấu lời dẫn trực tiếp, tên tác phẩm hoặc nghĩa đặc biệt', 'Tách trạng ngữ', 'Ngắt từ', 'Kết thúc câu'], 0, 'Trích nguyên văn, tên tác phẩm, nghĩa đặc biệt.'),
    Q('Câu nào dùng ngoặc kép đúng?', ['"Các em" cần chăm học.', 'Cô nói các em cần chăm học."', 'Cô nói các em "cần" chăm học.', 'Cô nói: "Các em cần chăm học."'], 3, 'Lời dẫn trực tiếp được đặt trong ngoặc kép.'),
    Q('Khi viết tên tác phẩm trong bài, có thể?', ['Đặt trong ngoặc đơn', 'Để trống', 'Đặt sau dấu chấm', 'Đặt trong ngoặc kép, ví dụ: "Dế Mèn phiêu lưu kí"'], 3, 'Quy ước: tên tác phẩm trong ngoặc kép hoặc in nghiêng.'),
  ]),

  M(32, 'Phép tu từ điệp ngữ', [
    Q('Điệp ngữ là?', ['Phép so sánh', 'Phép lặp một từ/ngữ/câu để nhấn mạnh, gợi cảm', 'Phép ẩn dụ', 'Phép hoán dụ'], 1, 'Điệp = lặp có chủ ý nghệ thuật.'),
    Q('"Đoàn kết, đoàn kết, đại đoàn kết" sử dụng?', ['Ẩn dụ', 'Điệp ngữ', 'So sánh', 'Nhân hoá'], 1, 'Từ "đoàn kết" được lặp lại → điệp ngữ nhấn mạnh.'),
    Q('Tác dụng của điệp ngữ?', ['Tăng số chữ vô nghĩa', 'Nhấn mạnh ý, tạo nhạc tính, gây ấn tượng', 'Làm bài khó hiểu', 'Đánh đố'], 1, 'Nhấn mạnh + tạo nhịp + đậm cảm xúc.'),
    Q('Phân biệt điệp ngữ với lỗi lặp từ ở chỗ?', ['Điệp có dụng ý nghệ thuật; lặp từ là lỗi diễn đạt', 'Điệp xấu hơn', 'Không khác gì', 'Lặp từ luôn đẹp'], 0, 'Có dụng ý → điệp. Không dụng ý → lỗi lặp.'),
    Q('Các kiểu điệp ngữ phổ biến?', ['Điệp nối tiếp, điệp cách quãng, điệp vòng', 'Điệp ngang', 'Điệp dọc', 'Điệp tròn'], 0, 'Ba kiểu cơ bản trong SGK.'),
    Q('"Học, học nữa, học mãi" thuộc kiểu?', ['Điệp nối tiếp (lặp liền)', 'Không phải điệp', 'Điệp cách quãng', 'Điệp vòng'], 0, 'Lặp "học" liền kề → nối tiếp.'),
  ]),

  M(33, 'Phép tu từ liệt kê', [
    Q('Liệt kê là?', ['So sánh', 'Đối thoại', 'Lặp 1 từ', 'Sắp xếp nối tiếp hàng loạt từ/cụm cùng loại để diễn tả đầy đủ'], 3, 'Liệt kê = "kể ra hàng loạt" có ý đồ.'),
    Q('Câu "Trong vườn có cam, chanh, bưởi, ổi, mít…" sử dụng?', ['Liệt kê', 'Điệp ngữ', 'Ẩn dụ', 'Hoán dụ'], 0, 'Kể hàng loạt các loại cây → liệt kê.'),
    Q('Tác dụng của liệt kê?', ['Rút gọn nội dung, làm câu ngắn lại', 'Diễn tả phong phú, nhấn mạnh số lượng/mức độ', 'Đánh đố', 'Làm rối câu'], 1, 'Liệt kê làm rõ sự phong phú, đa dạng.'),
    Q('Liệt kê theo cặp là?', ['Liệt kê hỗn loạn', 'Liệt kê tăng tiến theo mức độ', 'Các đối tượng được sắp xếp thành từng cặp', 'Liệt kê 1 từ'], 2, 'Cặp: cha-mẹ, anh-em, vợ-chồng…'),
    Q('Liệt kê tăng tiến là?', ['Lẫn lộn', 'Không có thứ tự', 'Các đối tượng tăng dần về mức độ/ý nghĩa', 'Giảm dần'], 2, 'Tăng tiến: từ nhỏ → lớn, từ ít → nhiều.'),
    Q('Câu "Một, hai, ba, bốn, năm…" thuộc liệt kê?', ['Không trình tự', 'Theo trình tự (số đếm)', 'Theo cặp', 'Theo cảm xúc'], 1, 'Liệt kê có trình tự (tăng dần).'),
  ]),

  M(34, 'Từ Hán Việt — bước đầu', [
    Q('Từ Hán Việt là?', ['Từ tiếng Anh', 'Từ mượn gốc Hán, đọc theo âm Hán Việt', 'Từ thuần Việt', 'Từ tiếng Pháp'], 1, 'Từ Hán mượn vào tiếng Việt, đọc âm HV.'),
    Q('Từ nào sau đây là Hán Việt?', ['Phụ huynh', 'Ba má', 'Cha mẹ', 'Mẹ cha'], 0, '"Phụ huynh" gốc Hán, "cha mẹ" thuần Việt.'),
    Q('Cặp nào tương ứng Thuần Việt – Hán Việt?', ['Sông – giang', 'Cao – thấp', 'Mẹ – cha', 'Đi – chạy'], 0, '"Sông" (thuần Việt) – "giang" (Hán Việt).'),
    Q('Sử dụng từ Hán Việt cần?', ['Càng nhiều càng tốt', 'Tuỳ tiện', 'Không cần để ý', 'Đúng nghĩa, đúng sắc thái, đúng văn cảnh'], 3, 'Lạm dụng → câu kém tự nhiên; thiếu → mất trang trọng.'),
    Q('Từ Hán Việt thường tạo sắc thái?', ['Vô cảm', 'Hài hước thuần Việt', 'Trang trọng, cổ kính, khái quát', 'Bình dân thuần tuý'], 2, 'HV mang sắc thái trang trọng, học thuật.'),
    Q('"Tổ quốc" là từ?', ['Thuần Việt', 'Tiếng địa phương', 'Hán Việt, mang sắc thái trang trọng', 'Phiên âm tiếng Anh'], 2, '"Tổ" + "quốc" — gốc Hán, sắc thái trang trọng.'),
  ]),

  M(35, 'Mở rộng vốn từ theo chủ đề (gia đình – thiên nhiên – quê hương)', [
    Q('Nhóm từ nào thuộc chủ đề "gia đình"?', ['Máy bay, xe lửa', 'Sông, suối, núi, đồi', 'Cha, mẹ, anh, chị, em, ông, bà', 'Trường, lớp, bảng, ghế'], 2, 'Các từ chỉ thành viên gia đình.'),
    Q('Nhóm từ nào thuộc chủ đề "thiên nhiên"?', ['Cặp, bút, vở', 'Tivi, tủ lạnh', 'Sông, núi, biển, rừng, mây, gió', 'Cha, mẹ, anh, em'], 2, 'Các yếu tố thuộc tự nhiên.'),
    Q('Nhóm từ nào gắn với "quê hương"?', ['Luỹ tre, đồng lúa, dòng sông, bến đò', 'Máy tính, robot', 'Thẻ ngân hàng', 'Phòng họp, văn phòng'], 0, 'Hình ảnh đặc trưng của quê hương Việt Nam.'),
    Q('Trong câu "Quê hương là chùm khế ngọt", "chùm khế" gợi?', ['Hình ảnh thân thuộc, gần gũi của quê', 'Sự khô khan', 'Sự dữ dội', 'Sự xa lạ'], 0, 'Hình ảnh nhỏ bé, ngọt ngào, thân thuộc.'),
    Q('Từ ngữ nào thể hiện tình cảm với quê hương?', ['Lạnh lùng', 'Thờ ơ, dửng dưng', 'Ghét bỏ', 'Yêu thương, gắn bó, nhớ nhung'], 3, 'Cảm xúc tích cực gắn liền với quê hương.'),
    Q('Khi viết về gia đình, nên?', ['Liệt kê tên tuổi', 'Chọn chi tiết nhỏ, kỉ niệm thật + cảm xúc chân thành', 'Toàn lập luận', 'Chép tiểu sử'], 1, 'Kỉ niệm cụ thể + cảm xúc → bài hay.'),
  ]),

  M(36, 'Ôn tập học kì 2 — Tổng kết Lớp 6', [
    Q('Hệ thống thể loại đã học gồm?', ['Chỉ truyện', 'Chỉ thơ', 'Đồng thoại, cổ tích, truyền thuyết, ký, thơ, nghị luận, thông tin', 'Chỉ nghị luận'], 2, 'Lớp 6 phủ nhiều thể loại — truyện, thơ, ký, nghị luận, thông tin.'),
    Q('Biện pháp tu từ đã học gồm?', ['Chỉ so sánh', 'Chỉ điệp ngữ', 'Chỉ ẩn dụ', 'So sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ, liệt kê'], 3, 'Sáu biện pháp chính học ở lớp 6.'),
    Q('Câu trần thuật đơn gồm các kiểu?', ['Chỉ "Ai làm gì?"', 'Ai là gì? / Ai làm gì? / Ai thế nào?', 'Chỉ "Ai thế nào?"', 'Chỉ "Ai là gì?"'], 1, 'Ba kiểu cơ bản của câu trần thuật đơn.'),
    Q('Thành phần phụ chỉ hoàn cảnh (thời gian, nơi chốn, nguyên nhân) là?', ['Bổ ngữ chính', 'Trạng ngữ', 'Chủ ngữ', 'Vị ngữ'], 1, 'Trạng ngữ — thành phần phụ bổ sung hoàn cảnh.'),
    Q('Văn nghị luận yêu cầu?', ['Luận điểm rõ + luận cứ thuyết phục + lập luận chặt', 'Cảm xúc tuỳ tiện', 'Liệt kê số liệu thuần', 'Toàn dẫn chứng hoang đường'], 0, 'Ba yếu tố cốt lõi của nghị luận.'),
    Q('Khi viết bài văn (kể/tả/biểu cảm), bố cục cần?', ['Mở – Thân – Kết rõ ràng, mạch lạc', '2 phần', '1 đoạn', '5 phần cố định'], 0, 'Ba phần cơ bản, luôn giữ.'),
    Q('Điều quan trọng nhất khi viết là?', ['Diễn đạt rõ, dùng từ đúng, có cảm xúc/lí lẽ phù hợp', 'Dùng nhiều từ Hán Việt', 'Viết thật dài', 'Đặt nhiều dấu chấm than'], 0, 'Rõ ý + đúng từ + cảm/lí phù hợp văn cảnh.'),
  ]),
];

export const S6NV_SCENARIOS = indexBy(S6NV_WEEKS);
