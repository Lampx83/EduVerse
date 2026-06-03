// ============================================================
// Lớp 8 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Văn 8: thơ tiền chiến, truyện kí hiện đại,
// nghị luận trung đại, các kiểu câu, hành động nói, hội thoại).
// ID prefix: "S8NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8NV', 'ngu-van', n, title, qs, opts);

export const S8NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Tôi đi học — Thanh Tịnh', [
    Q('Tác giả truyện "Tôi đi học" là ai?', ['Thanh Tịnh', 'Ngô Tất Tố', 'Nam Cao', 'Nguyên Hồng'], 0, 'Thanh Tịnh (1911–1988), tác giả "Tôi đi học".'),
    Q('Truyện "Tôi đi học" kể về kỉ niệm gì?', ['Tuổi thơ ở quê', 'Người thầy đầu tiên', 'Buổi tựu trường đầu tiên', 'Một ngày hè'], 2, 'Hồi tưởng buổi tựu trường đầu tiên.'),
    Q('Tâm trạng nhân vật "tôi" trong truyện là?', ['Chán nản', 'Sợ hãi và buồn bã', 'Tức giận', 'Hồi hộp, bỡ ngỡ, háo hức'], 3, 'Tâm trạng pha trộn: hồi hộp, bỡ ngỡ, háo hức.'),
    Q('Truyện được viết theo phương thức nào là chính?', ['Nghị luận', 'Hành chính', 'Thuyết minh', 'Tự sự kết hợp miêu tả và biểu cảm'], 3, 'Tự sự + miêu tả + biểu cảm tạo nên cảm xúc trữ tình.'),
    Q('Hình ảnh "tôi" và mẹ trong ngày đầu đi học gợi điều gì?', ['Sự hờ hững', 'Tình cảm gia đình ấm áp', 'Sự xa cách', 'Sự nghiêm khắc'], 1, 'Tình mẹ con ấm áp, người mẹ là điểm tựa.'),
    Q('Đặc sắc nghệ thuật của truyện là?', ['Nhân vật phản diện sống động', 'Châm biếm sắc sảo', 'Cốt truyện li kì', 'Giọng văn nhẹ nhàng, hình ảnh giàu chất thơ'], 3, 'Giọng văn trữ tình, hình ảnh giàu chất thơ.'),
  ]),

  M(2, 'Trong lòng mẹ — Nguyên Hồng', [
    Q('"Trong lòng mẹ" trích từ tác phẩm nào?', ['Đất nước đứng lên', 'Nắng đồng bằng', 'Sống mòn', 'Những ngày thơ ấu'], 3, 'Trích "Những ngày thơ ấu" — hồi kí của Nguyên Hồng.'),
    Q('Tác giả "Những ngày thơ ấu" là?', ['Nguyên Hồng', 'Nam Cao', 'Thanh Tịnh', 'Ngô Tất Tố'], 0, 'Nguyên Hồng (1918–1982).'),
    Q('Đoạn trích thể hiện tình cảm gì?', ['Tình bạn bè', 'Lòng căm thù giặc', 'Tình yêu thương mẹ vô bờ của bé Hồng', 'Tình yêu quê'], 2, 'Tình yêu thương mẹ sâu sắc, mãnh liệt.'),
    Q('Nhân vật bà cô trong đoạn trích là người?', ['Cay nghiệt, gieo rắc hoài nghi', 'Hiền lành, yêu cháu', 'Vô tâm', 'Lạnh lùng nhưng tốt'], 0, 'Bà cô cay nghiệt, dùng lời lẽ độc địa xúc phạm mẹ Hồng.'),
    Q('Thể loại của tác phẩm là?', ['Truyện ngắn', 'Tuỳ bút', 'Hồi kí', 'Tiểu thuyết'], 2, 'Hồi kí — Nguyên Hồng kể lại tuổi thơ.'),
    Q('Khoảnh khắc cảm động nhất là khi?', ['Hồng được mẹ ôm vào lòng', 'Hồng cãi bà cô', 'Mẹ Hồng về', 'Hồng đi học'], 0, 'Khoảnh khắc Hồng được nằm trong lòng mẹ, hạnh phúc trào dâng.'),
  ]),

  M(3, 'Tức nước vỡ bờ — Ngô Tất Tố', [
    Q('"Tức nước vỡ bờ" trích từ tiểu thuyết nào?', ['Việc làng', 'Tắt đèn', 'Lều chõng', 'Tập án cái đình'], 1, 'Trích "Tắt đèn" của Ngô Tất Tố.'),
    Q('Nhân vật chính trong đoạn trích là?', ['Anh Dậu', 'Cai lệ', 'Nghị Quế', 'Chị Dậu'], 3, 'Chị Dậu — người vợ thương chồng, bảo vệ chồng.'),
    Q('Lúc đầu chị Dậu đối với cai lệ thế nào?', ['Hung dữ', 'Lạnh lùng', 'Van xin, nhẫn nhịn', 'Chế giễu'], 2, 'Chị van xin tha thiết để bảo vệ chồng.'),
    Q('Hành động cuối cùng của chị Dậu thể hiện điều gì?', ['Sự nhu nhược', 'Sức phản kháng mạnh mẽ khi bị dồn đến đường cùng', 'Sự sợ hãi', 'Sự bất lực'], 1, '"Tức nước vỡ bờ" — bị áp bức cùng cực thì vùng lên.'),
    Q('Cai lệ tượng trưng cho?', ['Người tốt', 'Bộ máy thực dân – phong kiến tàn ác', 'Người trí thức', 'Người dân nghèo'], 1, 'Cai lệ là tay sai của bộ máy áp bức tàn bạo.'),
    Q('Giá trị hiện thực chủ yếu của đoạn trích?', ['Ca ngợi triều đình', 'Tả cảnh đẹp', 'Phơi bày nỗi khổ của người nông dân', 'Kể chuyện cổ tích'], 2, 'Tố cáo xã hội tàn bạo, phơi bày bi kịch nông dân.'),
  ]),

  M(4, 'Lão Hạc — Nam Cao', [
    Q('Tác giả truyện "Lão Hạc" là?', ['Nguyên Hồng', 'Thanh Tịnh', 'Nam Cao', 'Ngô Tất Tố'], 2, 'Nam Cao (1917–1951).'),
    Q('Số phận lão Hạc trong truyện là?', ['Hạnh phúc', 'Bi thảm, phải tự kết liễu', 'Giàu sang', 'Bình thường'], 1, 'Lão Hạc tự tử bằng bả chó để giữ tiền cho con.'),
    Q('Cậu Vàng trong truyện là?', ['Con trai lão Hạc', 'Con chó lão Hạc yêu thương', 'Người hàng xóm', 'Một địa chủ'], 1, 'Con chó cậu Vàng — kỉ vật của con trai lão Hạc.'),
    Q('Vì sao lão Hạc bán cậu Vàng?', ['Vì sợ chó cắn', 'Vì túng quẫn, sợ ăn vào tiền dành cho con', 'Vì cần tiền cờ bạc', 'Vì ghét chó'], 1, 'Lão quá nghèo, muốn giữ vẹn tiền và mảnh vườn cho con.'),
    Q('Phẩm chất nổi bật của lão Hạc là?', ['Lười biếng', 'Tham lam', 'Tự trọng và yêu con sâu sắc', 'Ích kỉ'], 2, 'Lão Hạc giàu lòng tự trọng, hi sinh vì con.'),
    Q('Nghệ thuật đặc sắc của truyện là?', ['Cốt truyện li kì', 'Lời thoại dài', 'Tả cảnh hùng vĩ', 'Miêu tả tâm lí nhân vật tinh tế'], 3, 'Nam Cao bậc thầy phân tích tâm lí nhân vật.'),
  ]),

  M(5, 'Trường từ vựng', [
    Q('Trường từ vựng là?', ['Tập hợp từ có ít nhất một nét nghĩa chung', 'Từ trái nghĩa', 'Từ đồng nghĩa', 'Một câu'], 0, 'Định nghĩa: nhóm từ có nét nghĩa chung.'),
    Q('Trong các từ sau, từ nào thuộc trường "bộ phận cơ thể người"?', ['đi, chạy, nhảy', 'cao, thấp', 'mắt, mũi, tai, miệng', 'đỏ, xanh, vàng'], 2, 'Đều là bộ phận cơ thể.'),
    Q('"vui, buồn, giận, hờn" thuộc trường nào?', ['Hành động', 'Âm thanh', 'Màu sắc', 'Trạng thái cảm xúc'], 3, 'Đều chỉ cảm xúc.'),
    Q('Trường từ vựng "động vật" gồm?', ['mặn, ngọt, chua', 'sáng, tối', 'bàn, ghế, tủ', 'chó, mèo, gà, vịt'], 3, 'Đều là động vật.'),
    Q('Một từ có thể thuộc?', ['Mọi câu', 'Chỉ 1 trường', 'Nhiều trường nghĩa', 'Không trường nào'], 2, 'Một từ có thể tham gia nhiều trường khác nhau.'),
    Q('"chân bàn", "chân núi" — từ "chân" được dùng theo cách?', ['Nghĩa gốc', 'Đồng nghĩa', 'Trái nghĩa', 'Chuyển trường, chuyển nghĩa ẩn dụ'], 3, 'Chuyển trường: từ bộ phận cơ thể → bộ phận đồ vật.'),
  ]),

  M(6, 'Từ tượng hình — Từ tượng thanh', [
    Q('Từ tượng hình là từ?', ['Chỉ màu sắc', 'Mô phỏng âm thanh', 'Chỉ tình cảm', 'Gợi tả hình ảnh, dáng vẻ'], 3, 'Tượng hình gợi hình dáng (lom khom, lả lướt…).'),
    Q('Từ tượng thanh là từ?', ['Chỉ vị trí', 'Gợi tả hình ảnh', 'Mô phỏng âm thanh tự nhiên hoặc con người', 'Chỉ hành động'], 2, 'Tượng thanh mô phỏng âm thanh (rì rào, ầm ầm…).'),
    Q('Từ nào sau đây là từ tượng hình?', ['rì rào', 'lom khom', 'róc rách', 'vi vu'], 1, '"Lom khom" gợi dáng còng. Các từ khác là tượng thanh.'),
    Q('Từ nào sau đây là tượng thanh?', ['thướt tha', 'nhấp nhô', 'ríu rít', 'lảo đảo'], 2, '"Ríu rít" mô phỏng âm thanh chim hót.'),
    Q('Tác dụng chính của từ tượng hình, tượng thanh?', ['Thay từ Hán Việt', 'Làm câu ngắn lại', 'Tăng tính biểu cảm, sinh động cho câu văn', 'Không có tác dụng'], 2, 'Tạo hình ảnh và âm thanh sinh động.'),
    Q('Trong "Lao xao, chim hót líu lo" có?', ['Cả tượng hình và tượng thanh', 'Không có loại nào', 'Chỉ tượng thanh', 'Chỉ tượng hình'], 2, '"Lao xao", "líu lo" đều là tượng thanh.'),
  ]),

  M(7, 'Cô bé bán diêm — An-đéc-xen', [
    Q('Tác giả "Cô bé bán diêm" là?', ['Tô-xtôi (Nga)', 'Bach (Pháp)', 'Grim (Đức)', 'An-đéc-xen (Đan Mạch)'], 3, 'An-đéc-xen — nhà văn Đan Mạch nổi tiếng truyện cổ.'),
    Q('Cô bé bán diêm kết thúc thế nào?', ['Trở nên giàu có', 'Đoàn tụ với gia đình', 'Chết cóng trong đêm giao thừa', 'Bay lên trời'], 2, 'Cô bé chết trong đêm giao thừa lạnh giá.'),
    Q('Mỗi lần quẹt diêm, cô bé thấy gì?', ['Quái vật', 'Tuyết rơi', 'Một mộng tưởng đẹp đẽ', 'Ngôi sao'], 2, 'Lò sưởi, bàn ăn, cây thông, bà nội — các mộng tưởng.'),
    Q('Hình ảnh "bà nội" trong mộng tưởng có ý nghĩa?', ['Người duy nhất yêu thương cô bé', 'Người ác', 'Người nghèo', 'Người xa lạ'], 0, 'Bà nội là người yêu thương cô bé nhất.'),
    Q('Truyện thể hiện thái độ gì của tác giả?', ['Đồng cảm với trẻ em nghèo và phê phán xã hội vô tâm', 'Khuyên trẻ học giỏi', 'Chế giễu trẻ con', 'Ca ngợi sự giàu sang'], 0, 'Lòng nhân ái sâu sắc và lời tố cáo xã hội thờ ơ.'),
    Q('Truyện thuộc thể loại?', ['Hồi kí', 'Nghị luận', 'Tiểu thuyết', 'Truyện cổ tích/truyện ngắn lãng mạn'], 3, 'Truyện ngắn lãng mạn pha chất cổ tích.'),
  ]),

  M(8, 'Đánh nhau với cối xay gió — Xéc-van-tét', [
    Q('"Đánh nhau với cối xay gió" trích từ tác phẩm nào?', ['Robin Hood', 'Đôn Ki-hô-tê', 'Người khốn khổ', 'Romeo và Juliet'], 1, 'Trích tiểu thuyết "Đôn Ki-hô-tê" của Xéc-van-tét.'),
    Q('Đôn Ki-hô-tê là người?', ['Mộng tưởng, đầu óc hiệp sĩ điên cuồng', 'Thực tế, khôn ngoan', 'Hèn nhát', 'Lười biếng'], 0, 'Mê truyện hiệp sĩ tới mức hoang tưởng.'),
    Q('Xan-chô Pan-xa là người?', ['Lãng mạn, mộng tưởng', 'Ác độc', 'Thực tế, tỉnh táo, hài hước', 'Lười biếng'], 2, 'Thực tế, đối lập với Đôn Ki-hô-tê.'),
    Q('Đôn Ki-hô-tê tưởng cối xay gió là?', ['Quái vật biển', 'Thiên thần', 'Lâu đài', 'Người khổng lồ'], 3, 'Tưởng là người khổng lồ và lao vào đánh.'),
    Q('Cặp nhân vật chính thể hiện?', ['Cùng tính cách', 'Hai mặt đối lập của con người: lí tưởng và thực tế', 'Là cha con', 'Yêu nhau'], 1, 'Cặp đôi đối lập kinh điển trong văn học.'),
    Q('Tác giả Xéc-van-tét là người?', ['Italia', 'Bồ Đào Nha', 'Tây Ban Nha', 'Hy Lạp'], 2, 'Miguel de Cervantes — nhà văn Tây Ban Nha.'),
  ]),

  M(9, 'Chiếc lá cuối cùng — O. Hen-ri', [
    Q('Tác giả "Chiếc lá cuối cùng" là?', ['Hemingway', 'Tolstoy', 'O. Hen-ri', 'Mark Twain'], 2, 'O. Henry — nhà văn Mỹ chuyên truyện ngắn.'),
    Q('Giôn-xi trong truyện mắc bệnh gì?', ['Viêm phổi', 'Ung thư', 'Sốt rét', 'Tâm thần'], 0, 'Viêm phổi nặng, suy sụp tinh thần.'),
    Q('Giôn-xi tin rằng?', ['Cô sẽ khỏi', 'Bạn sẽ cứu cô', 'Có phép màu', 'Khi chiếc lá cuối cùng rụng, cô sẽ chết'], 3, 'Niềm tin tuyệt vọng vào chiếc lá thường xuân.'),
    Q('Ai đã vẽ chiếc lá cuối cùng?', ['Xiu — bạn cùng phòng của Giôn-xi', 'Cụ Bơ-men', 'Giôn-xi', 'Bác sĩ'], 1, 'Cụ Bơ-men vẽ trong đêm mưa rét và chết vì sưng phổi.'),
    Q('Chiếc lá cuối cùng là?', ['Kiệt tác do cụ Bơ-men vẽ', 'Lá thật', 'Sao chép', 'Hư cấu'], 0, 'Bức kiệt tác — đánh đổi bằng mạng cụ Bơ-men.'),
    Q('Thông điệp chính của truyện?', ['Bệnh tật đáng sợ', 'Mùa thu buồn', 'Nghệ thuật chân chính phục vụ con người, lòng nhân ái cao cả', 'Tiền bạc là tất cả'], 2, 'Ca ngợi lòng nhân ái và nghệ thuật vì con người.'),
  ]),

  M(10, 'Trợ từ — Thán từ', [
    Q('Trợ từ là?', ['Từ chỉ hành động', 'Từ chỉ thời gian', 'Từ chuyên đứng trước danh từ', 'Từ chuyên đi kèm để nhấn mạnh hoặc đánh giá'], 3, 'Trợ từ: nhấn mạnh hoặc bộc lộ thái độ (chính, ngay, những…).'),
    Q('Từ nào là trợ từ trong "Nó ăn những hai bát cơm"?', ['nó — đại từ chủ ngữ', 'bát — danh từ chỉ đơn vị', 'những', 'ăn — động từ chính'], 2, '"Những" là trợ từ nhấn mạnh số lượng nhiều.'),
    Q('Thán từ là từ?', ['Chỉ hành động', 'Chỉ sự vật', 'Chỉ phương hướng', 'Bộc lộ cảm xúc hoặc dùng để gọi đáp'], 3, 'Thán từ: ôi, a, vâng, dạ, ơi…'),
    Q('Trong "Ôi, đẹp quá!" — thán từ là?', ['quá — phó từ chỉ mức độ', 'Ôi', 'đẹp — tính từ miêu tả', 'Cả câu'], 1, '"Ôi" bộc lộ cảm xúc ngạc nhiên, thán phục.'),
    Q('Thán từ "vâng, dạ" thuộc loại?', ['Nghi vấn', 'Phủ định', 'Bộc lộ cảm xúc', 'Gọi đáp'], 3, 'Là thán từ gọi đáp lễ phép.'),
    Q('Vị trí thán từ thường ở?', ['Cuối câu', 'Đầu câu, tách bằng dấu phẩy', 'Giữa câu', 'Không vị trí cố định'], 1, 'Thường đầu câu, ngăn cách bằng dấu phẩy hoặc chấm than.'),
  ]),

  M(11, 'Tình thái từ', [
    Q('Tình thái từ là?', ['Từ chỉ sự vật', 'Từ chỉ tình cảm', 'Từ thêm vào câu để cấu tạo câu nghi vấn, cầu khiến, cảm thán hoặc biểu thị sắc thái tình cảm', 'Từ chỉ hành động'], 2, 'Định nghĩa SGK 8.'),
    Q('Trong "Anh đi à?" — tình thái từ là?', ['à', 'đi — vừa là động từ vừa là tình thái từ', 'đi — động từ chính của câu', 'Anh — đại từ xưng hô'], 0, '"À" là tình thái từ nghi vấn.'),
    Q('Tình thái từ cảm thán thường gặp?', ['thay, sao, ơi', 'mà, kia', 'à, ư, hả', 'nhé, nào'], 0, 'Thay, sao, ơi… dùng để bộc lộ cảm xúc.'),
    Q('Trong "Đi học nhé!" — "nhé" là tình thái từ?', ['Cầu khiến', 'Nghi vấn', 'Phủ định', 'Cảm thán'], 0, '"Nhé" làm câu mang sắc thái cầu khiến, nhắc nhở.'),
    Q('Khi dùng tình thái từ cần chú ý?', ['Số tiếng', 'Tiếng Hán', 'Chính tả', 'Sắc thái biểu cảm và quan hệ vai giao tiếp'], 3, 'Phù hợp ngữ cảnh và quan hệ.'),
    Q('"Em ăn cơm đi nào!" — tình thái từ là?', ['ăn — động từ chính', 'đi nào', 'Em — đại từ xưng hô', 'cơm — bổ ngữ chỉ vật'], 1, '"Đi nào" thúc giục, cầu khiến.'),
  ]),

  M(12, 'Ôn dịch, thuốc lá — Văn bản nhật dụng', [
    Q('"Ôn dịch, thuốc lá" thuộc kiểu văn bản?', ['Trữ tình', 'Nhật dụng (nghị luận – thuyết minh)', 'Cổ tích', 'Tự sự kết hợp miêu tả'], 1, 'Văn bản nhật dụng, có yếu tố thuyết minh – nghị luận.'),
    Q('Đề tài của văn bản là?', ['Giao thông', 'Bảo vệ rừng', 'Ô nhiễm nước', 'Tác hại của thuốc lá'], 3, 'Cảnh báo về tác hại nghiêm trọng của thuốc lá.'),
    Q('Tác giả ví thuốc lá với gì?', ['Thuốc bổ', 'Thực phẩm', 'Bệnh nhẹ', 'Ôn dịch (đại dịch)'], 3, 'So sánh thuốc lá với "ôn dịch" để nhấn mức nguy hiểm.'),
    Q('Văn bản kêu gọi điều gì?', ['Hút nhiều hơn', 'Toàn xã hội cùng chống thuốc lá', 'Trồng thuốc lá', 'Bán thuốc lá'], 1, 'Lời kêu gọi cộng đồng phòng chống thuốc lá.'),
    Q('Đặc điểm nổi bật của VB nhật dụng?', ['Có tính thời sự, gắn với đời sống đương đại', 'Cổ điển, xa rời thực tế', 'Toàn thơ', 'Không có nội dung cụ thể'], 0, 'Văn bản nhật dụng nói về vấn đề bức thiết hiện đại.'),
    Q('Phương thức biểu đạt chính?', ['Tự sự kết hợp biểu cảm', 'Biểu cảm', 'Thuyết minh kết hợp nghị luận', 'Miêu tả'], 2, 'Cung cấp thông tin + lập luận thuyết phục.'),
  ]),

  M(13, 'Câu ghép', [
    Q('Câu ghép là?', ['Câu có 2 hay nhiều cụm CV không bao chứa nhau', 'Câu rút gọn', 'Câu có 1 cụm CV', 'Câu hỏi'], 0, 'Hai hay nhiều cụm chủ-vị, không bao chứa nhau.'),
    Q('Câu "Trời mưa nên đường ướt" là?', ['Câu nghi vấn', 'Câu đơn', 'Câu ghép có quan hệ nguyên nhân – kết quả', 'Câu cảm thán'], 2, 'Hai vế nối bằng QHT "nên", chỉ nguyên nhân – kết quả.'),
    Q('Các vế câu ghép có thể nối bằng?', ['Dấu phẩy/dấu hai chấm', 'Cặp từ hô ứng', 'Tất cả các cách trên', 'Quan hệ từ'], 2, 'Nhiều cách: QHT, cặp từ hô ứng, dấu câu.'),
    Q('"Tuy nhà nghèo nhưng nó học giỏi" — quan hệ giữa hai vế?', ['Tương phản', 'Nguyên nhân', 'Lựa chọn', 'Bổ sung'], 0, 'Cặp "Tuy…nhưng…" → tương phản (nhượng bộ).'),
    Q('"Vì trời mưa to nên trận đấu hoãn lại" — cặp quan hệ từ chỉ?', ['Tương phản', 'Mục đích', 'Nguyên nhân – kết quả', 'Điều kiện – kết quả'], 2, 'Vì… nên… → nguyên nhân – kết quả.'),
    Q('"Nếu trời nắng thì chúng ta đi cắm trại" — quan hệ?', ['Nguyên nhân – kết quả', 'Tương phản', 'Tăng tiến', 'Điều kiện – kết quả'], 3, 'Nếu… thì… → điều kiện – kết quả.'),
  ]),

  M(14, 'Dấu ngoặc đơn, dấu hai chấm', [
    Q('Dấu ngoặc đơn dùng để?', ['Đánh dấu lời trích dẫn', 'Liệt kê', 'Đánh dấu phần chú thích/giải thích thêm', 'Kết thúc câu'], 2, 'Bổ sung, giải thích, thuyết minh.'),
    Q('Trong "Nguyễn Du (1765–1820) là đại thi hào dân tộc" — phần trong ngoặc đơn là?', ['Năm sinh – năm mất', 'Lời nhân vật', 'Câu hỏi', 'Lời trích'], 0, 'Chú thích năm sinh – năm mất.'),
    Q('Dấu hai chấm KHÔNG được dùng để?', ['Báo trước phần giải thích', 'Kết thúc câu cảm', 'Báo trước lời trích dẫn', 'Liệt kê'], 1, 'Kết câu cảm dùng dấu "!"; dấu : không kết câu cảm.'),
    Q('Trong "Mẹ bảo: \'Con học bài đi!\'" — dấu hai chấm để?', ['Giải thích', 'Đánh dấu câu hỏi tu từ', 'Liệt kê', 'Báo trước lời thoại'], 3, 'Báo trước lời nói trực tiếp.'),
    Q('Dấu hai chấm trong "Vườn nhà em có nhiều loại cây: xoài, ổi, mít" để?', ['Báo trước phần liệt kê', 'Phủ định', 'Lời thoại', 'Nhấn mạnh ý phía sau'], 0, 'Báo trước liệt kê.'),
    Q('Khi viết, dấu ngoặc đơn được đặt?', ['Sau phần chú thích', 'Bất kì', 'Bao quanh phần chú thích', 'Trước phần chú thích'], 2, 'Phần chú thích nằm trong cặp ngoặc đơn.'),
  ]),

  M(15, 'Dấu ngoặc kép', [
    Q('Dấu ngoặc kép KHÔNG dùng để?', ['Kết thúc câu', 'Đánh dấu tên tác phẩm', 'Đánh dấu lời dẫn trực tiếp', 'Đánh dấu từ ngữ hiểu theo nghĩa đặc biệt/mỉa mai'], 0, 'Kết thúc câu là chấm/hỏi/than, không phải ngoặc kép.'),
    Q('"Truyện Kiều" — dấu ngoặc kép dùng để?', ['Đánh dấu tên tác phẩm', 'Liệt kê', 'Lời dẫn', 'Mỉa mai'], 0, 'Đánh dấu tên tác phẩm.'),
    Q('Trong "Cô ấy thật \'thông minh\' khi quên cả ví" — ngoặc kép thể hiện?', ['Tên tác phẩm', 'Lời trích', 'Liệt kê', 'Nghĩa mỉa mai, ngược'], 3, 'Thể hiện ý mỉa mai, ngược nghĩa.'),
    Q('Lời dẫn trực tiếp được đánh dấu bằng?', ['Dấu chấm', 'Dấu ngoặc kép', 'Dấu hai chấm', 'Dấu ngoặc đơn'], 1, 'Lời dẫn trực tiếp đặt trong ngoặc kép.'),
    Q('"Bài thơ \'Quê hương\' của Tế Hanh rất hay" — ngoặc kép cho?', ['Phủ định', 'Lời dẫn', 'Tên tác phẩm', 'Mỉa mai'], 2, 'Đánh dấu tên bài thơ.'),
    Q('Trước dấu mở ngoặc kép cho lời dẫn, thường có dấu?', ['Hai chấm', 'Dấu phẩy', 'Chấm hỏi', 'Chấm than'], 0, 'Mẹ bảo: "Con học đi!" — có dấu hai chấm trước.'),
  ]),

  M(16, 'Văn bản thuyết minh', [
    Q('Văn bản thuyết minh nhằm?', ['Kể chuyện', 'Khuyên răn', 'Cung cấp tri thức khách quan về sự vật, hiện tượng', 'Bộc lộ cảm xúc'], 2, 'Cung cấp thông tin khách quan.'),
    Q('Yêu cầu chính của VB thuyết minh?', ['Giàu hình ảnh, biểu cảm', 'Giàu cảm xúc', 'Hài hước', 'Chính xác, khoa học, rõ ràng'], 3, 'Tính khoa học và chính xác là then chốt.'),
    Q('Các phương pháp thuyết minh thường gặp?', ['Phóng đại', 'Mỉa mai', 'Bịa đặt', 'Nêu định nghĩa, liệt kê, so sánh, dùng số liệu, phân loại'], 3, 'Các phương pháp thuyết minh phổ biến.'),
    Q('Khi thuyết minh đồ vật, cần?', ['Phóng tác', 'Bộc lộ tình yêu', 'Kể chuyện cổ tích', 'Mô tả cấu tạo, công dụng, cách sử dụng'], 3, 'Tập trung vào cấu tạo – công dụng.'),
    Q('Ngôn ngữ thuyết minh?', ['Châm biếm', 'Tối nghĩa', 'Hoa mỹ, ẩn dụ nhiều', 'Trong sáng, chính xác, dễ hiểu'], 3, 'Ngôn ngữ rõ ràng, đúng.'),
    Q('"Cái phích" — đoạn văn giới thiệu cấu tạo phích nước là?', ['Nghị luận', 'Thuyết minh', 'Miêu tả cảnh vật', 'Biểu cảm'], 1, 'Cung cấp tri thức về phích → thuyết minh.'),
  ]),

  M(17, 'Hai cây phong — Ai-ma-tốp', [
    Q('Tác giả "Hai cây phong" là người nước nào?', ['Hoa Kỳ', 'nước Đức', 'Nga (Liên Xô cũ – Cư-rơ-gư-xtan)', 'Trung Quốc'], 2, 'Tsinghiz Aitmatov — nhà văn Cư-rơ-gư-xtan (Liên Xô cũ).'),
    Q('Văn bản trích từ tác phẩm nào?', ['Cánh buồm đỏ thắm', 'Chiến tranh và hoà bình', 'Người thầy đầu tiên', 'Anna Karenina'], 2, 'Trích "Người thầy đầu tiên".'),
    Q('Hai cây phong gắn với?', ['Cuộc chiến', 'Mối tình đầu', 'Thành phố', 'Tuổi thơ và ký ức về thầy Đuy-sen'], 3, 'Biểu tượng kí ức tuổi thơ và biết ơn người thầy.'),
    Q('Hai cây phong được tả qua góc nhìn?', ['Người hoạ sĩ', 'Cả hai', 'Đứa trẻ', 'Người đi đường'], 1, 'Người kể vừa là hoạ sĩ, vừa là đứa trẻ năm xưa.'),
    Q('Tâm trạng nhân vật khi nhớ về hai cây phong?', ['Bồi hồi, yêu thương, biết ơn', 'Lạnh nhạt', 'Sợ hãi', 'Tức giận'], 0, 'Bồi hồi xúc động, biết ơn thầy Đuy-sen.'),
    Q('Hình tượng hai cây phong mang ý nghĩa?', ['Biểu tượng quê hương, kỉ niệm, tình thầy trò', 'Đồ trang trí', 'Một loài cây bình thường', 'Cây thuốc'], 0, 'Biểu tượng giàu sức gợi cảm.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('"Tôi đi học" của ai?', ['Ngô Tất Tố', 'Thanh Tịnh', 'Nguyên Hồng', 'Nam Cao'], 1, 'Thanh Tịnh.'),
    Q('"Lão Hạc" do ai sáng tác?', ['Tô Hoài', 'Nguyên Hồng', 'Ngô Tất Tố', 'Nam Cao'], 3, 'Nam Cao.'),
    Q('Thán từ trong "Ôi, đẹp quá!" là?', ['đẹp — tính từ chỉ vẻ đẹp', 'Ôi', 'quá — phó từ chỉ mức độ', 'Cả câu đều là thán từ'], 1, 'Ôi — thán từ.'),
    Q('Câu "Trời mưa nên đường trơn" là câu?', ['Đơn mở rộng thành phần', 'Ghép', 'Cảm thán', 'Đơn có trạng ngữ chỉ nguyên nhân'], 1, 'Có 2 cụm CV — câu ghép.'),
    Q('Dấu ngoặc kép dùng đánh dấu tên?', ['Địa danh', 'Số thứ tự chương mục', 'Tên riêng người nổi tiếng', 'Tác phẩm'], 3, 'Tên tác phẩm.'),
    Q('Tượng hình khác tượng thanh ở chỗ?', ['Một bên gợi hình, một bên gợi âm', 'Đều gợi âm', 'Không phân biệt', 'Đều gợi hình'], 0, 'Tượng hình gợi hình; tượng thanh mô phỏng âm.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Nhớ rừng — Thế Lữ', [
    Q('Tác giả bài thơ "Nhớ rừng" là?', ['Huy Cận', 'Xuân Diệu', 'Thế Lữ', 'Lưu Trọng Lư'], 2, 'Thế Lữ (1907–1989), một trong những thủ lĩnh phong trào Thơ mới.'),
    Q('Nhân vật trữ tình trong "Nhớ rừng" là?', ['Con hổ trong vườn bách thú', 'Con sư tử', 'Người lữ khách', 'Người tù'], 0, 'Con hổ — biểu tượng cho khát vọng tự do.'),
    Q('Tâm trạng chủ đạo của con hổ là?', ['Bình thản', 'Vui vẻ', 'Hài lòng', 'Uất hận, chán ghét cuộc sống tù túng'], 3, 'Uất hận với cảnh tù túng, khao khát rừng già.'),
    Q('Bài thơ thể hiện khát vọng gì?', ['Học hành', 'Tình yêu đôi lứa', 'Yêu nước', 'Khát vọng tự do'], 3, 'Khát vọng tự do mãnh liệt, kín đáo bộc lộ tinh thần dân tộc.'),
    Q('Hình ảnh rừng già được miêu tả?', ['Khô cằn', 'Nhỏ bé', 'Hùng vĩ, bí ẩn, đầy sức sống', 'Tàn tạ'], 2, 'Rừng già hùng vĩ, là biểu tượng quá khứ vàng son.'),
    Q('"Nhớ rừng" thuộc phong trào?', ['Văn học kháng chiến', 'Văn học hiện thực phê phán', 'Thơ Đường', 'Thơ mới'], 3, 'Thơ mới (1932–1945).'),
  ]),

  M(20, 'Quê hương — Tế Hanh', [
    Q('Tác giả bài thơ "Quê hương" là?', ['Xuân Diệu', 'Huy Cận', 'Lưu Trọng Lư', 'Tế Hanh'], 3, 'Tế Hanh (1921–2009).'),
    Q('Quê hương của Tế Hanh ở?', ['Sài Gòn', 'Làng quê ven sông Hương — Huế', 'Hà Nội', 'Làng chài ven biển Quảng Ngãi'], 3, 'Làng chài ven biển ở Quảng Ngãi.'),
    Q('Hình ảnh trung tâm trong bài thơ?', ['Bến đò', 'Cánh buồm và đoàn thuyền đánh cá', 'Cánh đồng lúa', 'Cây đa'], 1, 'Đoàn thuyền và cánh buồm trắng.'),
    Q('"Cánh buồm giương to như mảnh hồn làng" — biện pháp nghệ thuật?', ['Điệp ngữ', 'Nhân hoá', 'Hoán dụ', 'So sánh – ẩn dụ'], 3, 'So sánh — ẩn dụ độc đáo: cánh buồm = mảnh hồn làng.'),
    Q('Cảm xúc chủ đạo của bài thơ?', ['Nỗi nhớ quê tha thiết', 'Tức giận', 'Vui vẻ', 'Buồn chán'], 0, 'Nỗi nhớ quê hương trong xa cách.'),
    Q('Bài thơ thuộc dòng?', ['Ca dao', 'Thơ mới', 'Thơ tự do hiện đại', 'Thơ Đường luật'], 1, 'Tế Hanh thuộc phong trào Thơ mới.'),
  ]),

  M(21, 'Khi con tu hú — Tố Hữu', [
    Q('"Khi con tu hú" do ai sáng tác?', ['Tế Hanh', 'Thế Lữ', 'Hồ Chí Minh', 'Tố Hữu'], 3, 'Tố Hữu (1920–2002).'),
    Q('Bài thơ được sáng tác trong hoàn cảnh nào?', ['Hoà bình', 'Khi đi du học', 'Tác giả bị giam trong nhà lao Thừa Phủ (Huế) — 1939', 'Khi lên Tây Bắc'], 2, 'Tố Hữu sáng tác khi bị giam ở nhà lao Thừa Phủ, Huế.'),
    Q('Tiếng tu hú gợi điều gì?', ['Nỗi sợ', 'Cảnh chiến tranh', 'Mùa đông', 'Mùa hè và khát vọng tự do'], 3, 'Âm thanh mùa hè, khơi gợi khao khát tự do.'),
    Q('Tâm trạng nhân vật trữ tình?', ['Mệt mỏi', 'Vui sướng', 'Bình thản', 'Ngột ngạt, uất ức, khao khát phá tan ngục tù'], 3, 'Người tù khao khát thoát khỏi gông cùm.'),
    Q('Thể thơ của bài là?', ['Thất ngôn bát cú', 'Thất ngôn tứ tuyệt Đường luật', 'Ngũ ngôn', 'Lục bát'], 3, 'Bài thơ viết theo thể lục bát.'),
    Q('Câu thơ kết thể hiện?', ['Sự bình thản', 'Niềm vui', 'Niềm hi vọng', 'Sự ngột ngạt, đau khổ'], 3, '"Ngột làm sao chết uất thôi…" — bức bối, ngột ngạt.'),
  ]),

  M(22, 'Tức cảnh Pác Bó — Hồ Chí Minh', [
    Q('Bài "Tức cảnh Pác Bó" của ai?', ['Hồ Chí Minh', 'Trường Chinh', 'Phạm Văn Đồng', 'Tố Hữu'], 0, 'Hồ Chí Minh (1890–1969).'),
    Q('Bài thơ ra đời ở đâu?', ['Côn Đảo (nhà tù), 1932', 'Trung Quốc', 'Hà Nội', 'Pác Bó (Cao Bằng), 1941'], 3, 'Pác Bó – Cao Bằng, sau khi Bác về nước.'),
    Q('Thể thơ?', ['Thất ngôn tứ tuyệt', 'Lục bát', 'Song thất lục bát', 'Thất ngôn bát cú Đường luật'], 0, 'Thất ngôn tứ tuyệt — bốn câu bảy tiếng.'),
    Q('"Sáng ra bờ suối, tối vào hang" thể hiện?', ['Sự sang trọng', 'Sự ốm yếu', 'Sự cô đơn', 'Cuộc sống gian khổ nhưng vẫn ung dung'], 3, 'Phong thái ung dung, lạc quan dù gian khổ.'),
    Q('"Cuộc đời cách mạng thật là sang" — chữ "sang" thể hiện?', ['Niềm tự hào, tinh thần lạc quan cách mạng', 'Sự châm biếm', 'Giàu vật chất', 'Sự kiêu ngạo'], 0, 'Tinh thần cao đẹp, ung dung của người chiến sĩ.'),
    Q('Phong cách thơ Bác trong bài là?', ['Bi luỵ', 'Khô khan', 'Cầu kì, hoa mỹ', 'Cổ điển kết hợp hiện đại, giản dị mà sâu sắc'], 3, 'Đặc trưng thơ Hồ Chủ tịch.'),
  ]),

  M(23, 'Ngắm trăng — Hồ Chí Minh', [
    Q('"Ngắm trăng" (Vọng nguyệt) trích từ tập?', ['Sông núi', 'Đường kách mệnh', 'Truyện và kí', 'Nhật kí trong tù'], 3, '"Ngục trung nhật kí" — Nhật kí trong tù (1942–1943).'),
    Q('Bác viết "Nhật kí trong tù" bằng?', ['Chữ Hán', 'Tiếng Việt', 'Chữ Pháp', 'Chữ Nôm'], 0, 'Bằng chữ Hán.'),
    Q('Hoàn cảnh sáng tác?', ['Khi đi nước ngoài', 'Khi học ở Pháp', 'Hoà bình', 'Khi Bác bị Tưởng Giới Thạch giam tại nhà tù Trung Quốc'], 3, '1942–1943, bị giam tại Quảng Tây, Trung Quốc.'),
    Q('Bài thơ thể hiện tâm hồn nào của Bác?', ['Mệt mỏi', 'Lãnh đạm', 'Yêu thiên nhiên, ung dung, vượt lên hoàn cảnh', 'Bi quan'], 2, 'Tâm hồn yêu thiên nhiên, phong thái thi sĩ – chiến sĩ.'),
    Q('Hình ảnh trăng – người trong bài có quan hệ?', ['Đối lập', 'Không liên quan', 'Tri kỉ, bạn bè', 'Chủ — khách (trăng làm khách)'], 2, 'Trăng và người như đôi bạn tri kỉ.'),
    Q('Thể thơ của bài?', ['Thất ngôn bát cú Đường luật', 'Lục bát', 'Thất ngôn tứ tuyệt', 'Song thất lục bát'], 2, 'Thất ngôn tứ tuyệt.'),
  ]),

  M(24, 'Đi đường — Hồ Chí Minh', [
    Q('Bài "Đi đường" (Tẩu lộ) thuộc tập?', ['Đường kách mệnh', 'Sông núi', 'Nhật kí trong tù', 'Truyện và kí'], 2, 'Cùng tập với "Ngắm trăng".'),
    Q('Hình ảnh "đường" trong bài có nghĩa?', ['Đường đi thực và đường đời/đường cách mạng', 'Chỉ đường vật lí', 'Đường thủy', 'Đường biển'], 0, 'Nghĩa kép: đường đi và đường đời.'),
    Q('"Lên đến tận cùng…thu vào tầm mắt muôn trùng…" thể hiện?', ['Niềm vui chiến thắng và tầm nhìn người chiến sĩ', 'Khó khăn của hành trình', 'Sự mệt mỏi', 'Lời than'], 0, 'Vượt khó để đạt thành quả lớn lao.'),
    Q('Triết lí bài thơ?', ['Đừng cố gắng', 'Hãy nghỉ ngơi', 'Càng gian nan càng thành công, đường đời nhiều thử thách nhưng vượt qua sẽ tới đích', 'Cuộc đời dễ dàng'], 2, 'Lời triết lí về kiên trì.'),
    Q('Thể thơ?', ['Ngũ ngôn', 'Thất ngôn bát cú Đường luật', 'Tứ tuyệt thất ngôn', 'Lục bát'], 2, 'Tứ tuyệt Đường luật.'),
    Q('Bản dịch quen thuộc của bài là của?', ['Nam Trân', 'Tố Hữu', 'Xuân Diệu', 'Huy Cận'], 0, 'Dịch giả Nam Trân.'),
  ]),

  M(25, 'Chiếu dời đô — Lí Công Uẩn', [
    Q('Tác giả "Chiếu dời đô" là?', ['Lí Thường Kiệt', 'Trần Quốc Tuấn', 'Lí Công Uẩn (Lý Thái Tổ)', 'Nguyễn Trãi'], 2, 'Lý Thái Tổ ban chiếu dời đô năm 1010.'),
    Q('Nội dung chính của chiếu?', ['Phê bình triều thần', 'Tuyên bố dời đô từ Hoa Lư về Đại La', 'Ca ngợi quân Tống', 'Khen Hoa Lư'], 1, 'Quyết định dời đô từ Hoa Lư về Đại La (Thăng Long).'),
    Q('Đại La được mô tả là vùng đất?', ['Hẹp, hiểm trở', 'Núi cao', 'Hoang vu', 'Trung tâm, rộng rãi, địa thế đẹp, dân thịnh'], 3, 'Vùng đất "trung tâm trời đất", có thế rồng cuộn hổ ngồi.'),
    Q('Thể văn?', ['Hịch — văn hiệu triệu tướng sĩ', 'Truyện', 'Cáo — văn tổng kết chiến thắng', 'Chiếu — văn nghị luận trung đại'], 3, 'Chiếu — văn bản nhà vua ban bố.'),
    Q('Lí lẽ của tác giả dựa trên?', ['Sự kiện lịch sử và lợi ích lâu dài cho quốc gia', 'Truyền thuyết', 'Cảm xúc', 'Tâm linh'], 0, 'Dẫn nhà Thương – Chu dời đô và phân tích lợi ích.'),
    Q('Văn bản thể hiện?', ['Sự nóng nảy', 'Sự do dự, thiếu quyết đoán', 'Tham vọng cá nhân', 'Tầm nhìn xa, lòng yêu nước, vì dân vì nước'], 3, 'Tầm vóc một nhà lãnh đạo lớn.'),
  ]),

  M(26, 'Hịch tướng sĩ — Trần Quốc Tuấn', [
    Q('Tác giả "Hịch tướng sĩ" là?', ['Nguyễn Trãi', 'Trần Quốc Tuấn', 'Lí Thường Kiệt', 'Lê Lợi'], 1, 'Hưng Đạo Vương Trần Quốc Tuấn.'),
    Q('Hịch được viết trong hoàn cảnh nào?', ['Khi xảy ra nội loạn', 'Khi đất nước thanh bình', 'Sau khi thắng trận', 'Trước cuộc kháng chiến chống Mông – Nguyên lần II (1285)'], 3, 'Khích lệ tướng sĩ trước cuộc kháng chiến chống Mông – Nguyên.'),
    Q('Mục đích của hịch?', ['Báo cáo công lao', 'Thuyết phục, khích lệ tướng sĩ học binh thư, chuẩn bị chiến đấu', 'Thông báo nội bộ', 'Kể chuyện'], 1, 'Khơi gợi lòng yêu nước, căm thù giặc, sẵn sàng chiến đấu.'),
    Q('Tác giả bộc lộ tâm trạng?', ['Hờ hững', 'Bình thản', 'Lo lắng, đau xót khi nước nguy nan', 'Vui mừng'], 2, '"Ta thường tới bữa quên ăn, nửa đêm vỗ gối…"'),
    Q('Thể loại?', ['Cáo — văn tổng kết, tuyên bố', 'Hịch — văn nghị luận trung đại', 'Chiếu — vua ban bố mệnh lệnh', 'Tấu — bề tôi dâng vua'], 1, 'Hịch — văn bản hiệu triệu.'),
    Q('Giọng văn nổi bật?', ['Lạnh nhạt', 'Hùng hồn, đanh thép, đầy nhiệt huyết', 'Châm biếm hài hước', 'Êm dịu, trữ tình'], 1, 'Giọng hùng hồn, kết hợp lý và tình.'),
  ]),

  M(27, 'Câu nghi vấn — Câu cầu khiến', [
    Q('Câu nghi vấn dùng để?', ['Tả cảnh', 'Khẳng định', 'Ra lệnh', 'Hỏi (và một số chức năng khác như cầu khiến, cảm thán…)'], 3, 'Chức năng chính là hỏi, ngoài ra có nhiều chức năng khác.'),
    Q('Dấu kết câu nghi vấn thường dùng?', [',', '.', '?', 'Dấu chấm than'], 2, 'Dấu chấm hỏi.'),
    Q('"Anh đi đâu đấy?" thuộc kiểu câu?', ['Trần thuật', 'Cảm thán', 'Nghi vấn', 'Cầu khiến'], 2, 'Có từ nghi vấn "đâu" và dấu "?".'),
    Q('Câu cầu khiến dùng để?', ['Hỏi để lấy thông tin', 'Bộc lộ cảm xúc', 'Ra lệnh, yêu cầu, đề nghị, khuyên bảo', 'Khen ngợi, tán thưởng'], 2, 'Mục đích: bảo người khác làm/không làm gì.'),
    Q('Trong "Đừng nói chuyện trong giờ học!" — đây là?', ['Nghi vấn', 'Cầu khiến', 'Cảm thán', 'Trần thuật'], 1, 'Cầu khiến (cấm đoán).'),
    Q('Câu cầu khiến thường có từ?', ['à, ư, hả', 'và, hoặc', 'hãy, đừng, chớ, nào, đi', 'ôi, chao'], 2, 'Các từ cầu khiến điển hình.'),
  ]),

  M(28, 'Câu cảm thán — Câu trần thuật', [
    Q('Câu cảm thán dùng để?', ['Liệt kê', 'Hỏi để lấy thông tin', 'Bộc lộ cảm xúc trực tiếp', 'Tả cảnh'], 2, 'Bộc lộ cảm xúc, tình cảm.'),
    Q('Câu cảm thán thường kết bằng dấu?', ['!', '.', 'Dấu chấm hỏi', ','], 0, 'Dấu chấm than.'),
    Q('"Ôi, đẹp quá!" là câu?', ['Nghi vấn', 'Cầu khiến', 'Trần thuật', 'Cảm thán'], 3, 'Có thán từ "Ôi" và dấu "!".'),
    Q('Câu trần thuật dùng để?', ['Cầu khiến', 'Cảm thán', 'Đặt câu hỏi để lấy thông tin', 'Trần thuật, kể, thông báo, miêu tả… (không có chức năng nghi vấn, cầu khiến, cảm thán)'], 3, 'Mục đích chính: trần thuật, thông báo.'),
    Q('Câu trần thuật kết bằng dấu?', ['Dấu hai chấm', 'Dấu chấm (đôi khi chấm than/ba chấm)', 'Dấu ngoặc kép', 'Dấu hỏi'], 1, 'Thường dùng dấu chấm.'),
    Q('Trong các câu sau, đâu là câu trần thuật?', ['Trời mưa à?', 'Trời mưa rất to.', 'Ôi, mưa to quá!', 'Đừng đi mưa!'], 1, 'Câu kể sự việc, kết bằng dấu chấm.'),
  ]),

  M(29, 'Câu phủ định', [
    Q('Câu phủ định là?', ['Câu khẳng định', 'Câu cảm thán', 'Câu chứa từ phủ định để phản bác hoặc xác nhận sự không có/không xảy ra', 'Câu hỏi'], 2, 'Định nghĩa SGK 8.'),
    Q('Từ phủ định điển hình?', ['à, ư, nhỉ', 'hãy, đừng', 'không, chưa, chẳng, đâu (có)', 'mà, kia'], 2, 'Các từ chuyên dùng phủ định.'),
    Q('"Hôm nay tôi không đi học" thuộc kiểu?', ['Trần thuật phủ định', 'Nghi vấn', 'Trần thuật khẳng định', 'Cầu khiến'], 0, 'Câu phủ định miêu tả sự việc không xảy ra.'),
    Q('"Cậu nói thế đâu có đúng!" là phủ định?', ['Bác bỏ', 'Miêu tả', 'Cảm thán', 'Khẳng định'], 0, 'Phủ định bác bỏ ý người khác.'),
    Q('Phủ định kép "không phải không…" thực chất biểu thị?', ['Khẳng định', 'Cảm thán', 'Nghi vấn', 'Phủ định mạnh'], 0, 'Hai lần phủ định = khẳng định.'),
    Q('"Tôi chưa làm bài tập" — từ phủ định?', ['Tôi — chủ ngữ xưng hô', 'bài tập', 'làm — động từ chính', 'chưa'], 3, '"Chưa" là từ phủ định.'),
  ]),

  M(30, 'Hành động nói', [
    Q('Hành động nói là?', ['Cử chỉ', 'Hành động được thực hiện bằng lời nói nhằm mục đích nhất định', 'Hành động im lặng', 'Hành động viết ra giấy'], 1, 'Định nghĩa: dùng lời để thực hiện ý định.'),
    Q('Các kiểu hành động nói thường gặp?', ['Hỏi, trình bày, điều khiển, hứa hẹn, bộc lộ cảm xúc', 'Đi, đứng', 'Ngủ, nghỉ', 'Ăn, uống'], 0, 'Phân loại theo mục đích nói.'),
    Q('Khi nói "Tôi xin hứa sẽ học chăm" — hành động nói thuộc?', ['Hỏi xin ý kiến', 'Hứa hẹn', 'Điều khiển', 'Cảm xúc'], 1, 'Hành động hứa.'),
    Q('"Bạn có thể đóng cửa giúp mình không?" — hành động nói?', ['Hứa hẹn sẽ giúp đỡ', 'Hỏi đơn thuần', 'Cảm thán', 'Cầu khiến gián tiếp (qua câu nghi vấn)'], 3, 'Hình thức nghi vấn nhưng mục đích cầu khiến.'),
    Q('Hành động nói có thể được thực hiện?', ['Cả trực tiếp và gián tiếp', 'Không cách nào', 'Gián tiếp', 'Trực tiếp'], 0, 'Cả hai cách — gián tiếp thường lịch sự hơn.'),
    Q('"Cô ấy là học sinh giỏi" — hành động nói?', ['Hứa hẹn về thành tích', 'Cảm xúc', 'Hỏi về kết quả học tập', 'Trình bày'], 3, 'Khẳng định một sự kiện.'),
  ]),

  M(31, 'Hội thoại — Lượt lời', [
    Q('Vai xã hội trong hội thoại được xác định bởi?', ['Ngẫu nhiên', 'Quan hệ trên – dưới, ngang hàng, thân – sơ', 'Tuổi tác duy nhất', 'Giới tính'], 1, 'Vai xã hội nhiều chiều: trên/dưới + thân/sơ.'),
    Q('Lượt lời là?', ['Một câu', 'Phần nói của mỗi người trong hội thoại', 'Một từ', 'Toàn bộ cuộc thoại'], 1, 'Lượt lời = phần đối thoại của một người.'),
    Q('Khi tham gia hội thoại, cần?', ['Nói tự do', 'Cướp lời', 'Tôn trọng lượt lời người khác, không cắt ngang vô lí', 'Im lặng'], 2, 'Lịch sự, tôn trọng đối phương.'),
    Q('Người vai dưới khi nói với vai trên cần?', ['Im lặng tuyệt đối', 'Lễ phép, thận trọng', 'Cộc lốc', 'Quát mắng'], 1, 'Đảm bảo phép tắc xã hội.'),
    Q('Khi không tham gia mà chỉ nghe, đó là?', ['Trả lời', 'Vai chính', 'Vai im lặng / không tham gia lượt lời', 'Đặt câu hỏi'], 2, 'Người nghe — không nhất thiết phải lên tiếng.'),
    Q('Trong bữa cơm gia đình, lượt lời nên có?', ['Phải nói liên tục', 'Không quy tắc gì', 'Quy tắc tôn trọng, không nói khi đang ăn', 'Phải im lặng tuyệt đối'], 2, 'Văn hoá ứng xử trong gia đình.'),
  ]),

  M(32, 'Văn nghị luận — Luận điểm, luận cứ', [
    Q('Văn nghị luận là?', ['Văn kể chuyện', 'Văn biểu cảm', 'Văn bản trình bày ý kiến, quan điểm và thuyết phục người đọc bằng lí lẽ, dẫn chứng', 'Văn tả cảnh'], 2, 'Đặc trưng: thuyết phục bằng lí lẽ và dẫn chứng.'),
    Q('Luận điểm là?', ['Câu chuyện', 'Đoạn văn miêu tả', 'Ý kiến, tư tưởng, quan điểm chính cần khẳng định', 'Lời dẫn'], 2, 'Luận điểm = tư tưởng được bảo vệ.'),
    Q('Luận cứ là?', ['Câu cảm', 'Tên người', 'Câu hỏi', 'Lí lẽ và dẫn chứng dùng để làm rõ luận điểm'], 3, 'Bao gồm lí lẽ + bằng chứng.'),
    Q('Lập luận là?', ['Cách tả cảnh', 'Cách tổ chức, sắp xếp luận điểm, luận cứ để thuyết phục', 'Cách trình bày dẫn chứng', 'Cách kể chuyện'], 1, 'Lập luận = phương pháp triển khai.'),
    Q('Yêu cầu của một bài văn nghị luận tốt?', ['Cốt truyện li kì', 'Hình ảnh đẹp', 'Luận điểm rõ ràng, luận cứ xác đáng, lập luận chặt chẽ', 'Cảm xúc dạt dào'], 2, 'Tiêu chuẩn của văn nghị luận.'),
    Q('"Học, học nữa, học mãi" là?', ['Câu cầu khiến đơn thuần', 'Câu cảm thán', 'Một luận điểm về tinh thần tự học', 'Câu hỏi'], 2, 'Lời khuyên của Lê-nin, thường dùng làm luận điểm.'),
  ]),

  M(33, 'Bàn luận về phép học — Nguyễn Thiếp', [
    Q('"Bàn luận về phép học" của ai?', ['Nguyễn Trãi', 'Phan Bội Châu', 'Nguyễn Thiếp (La Sơn Phu Tử)', 'Lê Quý Đôn'], 2, 'La Sơn Phu Tử Nguyễn Thiếp (1723–1804).'),
    Q('Thể loại?', ['Chiếu — vua ban bố mệnh lệnh', 'Hịch — hiệu triệu tướng sĩ', 'Cáo — tổng kết, tuyên bố', 'Tấu — văn nghị luận trung đại dâng vua'], 3, 'Tấu — bài tấu dâng vua Quang Trung.'),
    Q('Tác giả phê phán lối học nào?', ['Học để giúp dân', 'Học khoa cử', 'Học hết sức', 'Chuộng hình thức, cầu danh lợi, không thực chất'], 3, 'Phê phán lối học cầu danh lợi, không thực chất.'),
    Q('Phương pháp học đúng theo tác giả?', ['Học vẹt', 'Không cần thầy', 'Học từ thấp đến cao, học rộng rồi tóm gọn, học đi đôi với hành', 'Học gấp rút'], 2, 'Học có hệ thống, kết hợp lí thuyết với thực hành.'),
    Q('Mục đích cao nhất của việc học theo tác giả?', ['Đỗ đạt làm quan', 'Kiếm tiền', 'Học để làm người, để hữu ích cho nước nhà', 'Vui chơi'], 2, 'Học để làm người và phục vụ xã hội.'),
    Q('Văn bản thể hiện tinh thần?', ['Đề cao việc học chân chính, lòng yêu nước', 'Chống học hành', 'Không quan tâm', 'Chế giễu kẻ học'], 0, 'Đề cao giáo dục, lòng yêu nước thiết tha.'),
  ]),

  M(34, 'Đi bộ ngao du — Ru-xô', [
    Q('Tác giả "Đi bộ ngao du" là?', ['Vôn-te', 'Ru-xô (Pháp)', 'Đi-đơ-rô', 'Mông-te-xki-ơ'], 1, 'Jean-Jacques Rousseau (1712–1778), nhà tư tưởng Pháp.'),
    Q('Văn bản trích từ tác phẩm nào?', ['Ê-min hay Về giáo dục', 'Khế ước xã hội', 'Bàn về bất bình đẳng', 'Tự thuật'], 0, 'Trích "Ê-min hay Về giáo dục".'),
    Q('Theo Ru-xô, đi bộ ngao du có lợi ích gì?', ['Tự do, hiểu biết, tăng cường sức khoẻ, tâm hồn thanh thản', 'Mất thì giờ', 'Nguy hiểm', 'Tốn kém'], 0, 'Liệt kê 3 lợi ích: tự do – hiểu biết – sức khoẻ.'),
    Q('Phương pháp lập luận chủ yếu?', ['Tự sự kể chuyện hành trình', 'Miêu tả', 'Biểu cảm thuần', 'Nghị luận có dẫn chứng cụ thể từ bản thân'], 3, 'Nghị luận kết hợp dẫn chứng thực tế từ chính tác giả.'),
    Q('Văn bản thể hiện quan niệm gì?', ['Đề cao quyền lực', 'Đề cao tự do cá nhân và giáo dục tự nhiên', 'Đề cao danh vọng', 'Đề cao tài chính'], 1, 'Tư tưởng tiến bộ thời Khai sáng Pháp.'),
    Q('Văn phong của Ru-xô trong bài?', ['Giản dị, chân thành, gần gũi', 'Khô khan', 'Cầu kì', 'Bi luỵ'], 0, 'Giản dị, đầy sức thuyết phục.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('"Nhớ rừng" của ai?', ['Tế Hanh', 'Thế Lữ', 'Hồ Chí Minh', 'Tố Hữu'], 1, 'Thế Lữ.'),
    Q('"Quê hương" của Tế Hanh có hình ảnh trung tâm?', ['Cánh đồng lúa', 'Núi rừng', 'Dòng sông', 'Cánh buồm và con thuyền'], 3, 'Cánh buồm và đoàn thuyền đánh cá.'),
    Q('"Tức cảnh Pác Bó" – tâm trạng?', ['Sợ hãi', 'Bi luỵ', 'Buồn chán', 'Ung dung, lạc quan'], 3, 'Phong thái ung dung của Bác.'),
    Q('"Hịch tướng sĩ" do ai viết?', ['Trần Quốc Tuấn', 'Nguyễn Trãi', 'Lê Lợi', 'Lí Thường Kiệt'], 0, 'Hưng Đạo Vương.'),
    Q('Câu "Ôi, đẹp quá!" thuộc kiểu?', ['Nghi vấn', 'Trần thuật', 'Cảm thán', 'Cầu khiến'], 2, 'Câu cảm thán.'),
    Q('Văn bản nghị luận đòi hỏi?', ['Mô tả phong cảnh', 'Cốt truyện ly kì', 'Luận điểm, luận cứ, lập luận chặt chẽ', 'Cảm xúc tuôn trào'], 2, 'Ba yếu tố căn bản.'),
  ]),
];

export const S8NV_SCENARIOS = indexBy(S8NV_WEEKS);
