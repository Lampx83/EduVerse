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
    Q('Tác giả truyện "Tôi đi học" là ai?', ['Nam Cao', 'Thanh Tịnh', 'Nguyên Hồng', 'Ngô Tất Tố'], 1, 'Thanh Tịnh (1911–1988), tác giả "Tôi đi học".'),
    Q('Truyện "Tôi đi học" kể về kỉ niệm gì?', ['Buổi tựu trường đầu tiên', 'Một ngày hè', 'Tuổi thơ ở quê', 'Người thầy đầu tiên'], 0, 'Hồi tưởng buổi tựu trường đầu tiên.'),
    Q('Tâm trạng nhân vật "tôi" trong truyện là?', ['Sợ hãi và buồn bã', 'Hồi hộp, bỡ ngỡ, háo hức', 'Chán nản', 'Tức giận'], 1, 'Tâm trạng pha trộn: hồi hộp, bỡ ngỡ, háo hức.'),
    Q('Truyện được viết theo phương thức nào là chính?', ['Tự sự kết hợp miêu tả và biểu cảm', 'Nghị luận', 'Thuyết minh', 'Hành chính'], 0, 'Tự sự + miêu tả + biểu cảm tạo nên cảm xúc trữ tình.'),
    Q('Hình ảnh "tôi" và mẹ trong ngày đầu đi học gợi điều gì?', ['Tình cảm gia đình ấm áp', 'Sự xa cách', 'Sự nghiêm khắc', 'Sự hờ hững'], 0, 'Tình mẹ con ấm áp, người mẹ là điểm tựa.'),
    Q('Đặc sắc nghệ thuật của truyện là?', ['Cốt truyện li kì', 'Giọng văn nhẹ nhàng, hình ảnh giàu chất thơ', 'Châm biếm sắc sảo', 'Nhân vật phản diện sống động'], 1, 'Giọng văn trữ tình, hình ảnh giàu chất thơ.'),
  ]),

  M(2, 'Trong lòng mẹ — Nguyên Hồng', [
    Q('"Trong lòng mẹ" trích từ tác phẩm nào?', ['Bỉ vỏ', 'Những ngày thơ ấu', 'Đất nước đứng lên', 'Nắng đồng bằng'], 1, 'Trích "Những ngày thơ ấu" — hồi kí của Nguyên Hồng.'),
    Q('Tác giả "Những ngày thơ ấu" là?', ['Nguyên Hồng', 'Thanh Tịnh', 'Nam Cao', 'Ngô Tất Tố'], 0, 'Nguyên Hồng (1918–1982).'),
    Q('Đoạn trích thể hiện tình cảm gì?', ['Tình yêu thương mẹ vô bờ của bé Hồng', 'Lòng căm thù giặc', 'Tình bạn bè', 'Tình yêu quê'], 0, 'Tình yêu thương mẹ sâu sắc, mãnh liệt.'),
    Q('Nhân vật bà cô trong đoạn trích là người?', ['Hiền lành, yêu cháu', 'Cay nghiệt, gieo rắc hoài nghi', 'Vô tâm', 'Lạnh lùng nhưng tốt'], 1, 'Bà cô cay nghiệt, dùng lời lẽ độc địa xúc phạm mẹ Hồng.'),
    Q('Thể loại của tác phẩm là?', ['Truyện ngắn', 'Hồi kí', 'Tiểu thuyết', 'Tuỳ bút'], 1, 'Hồi kí — Nguyên Hồng kể lại tuổi thơ.'),
    Q('Khoảnh khắc cảm động nhất là khi?', ['Hồng được mẹ ôm vào lòng', 'Hồng cãi bà cô', 'Mẹ Hồng về', 'Hồng đi học'], 0, 'Khoảnh khắc Hồng được nằm trong lòng mẹ, hạnh phúc trào dâng.'),
  ]),

  M(3, 'Tức nước vỡ bờ — Ngô Tất Tố', [
    Q('"Tức nước vỡ bờ" trích từ tiểu thuyết nào?', ['Tắt đèn', 'Lều chõng', 'Việc làng', 'Tập án cái đình'], 0, 'Trích "Tắt đèn" của Ngô Tất Tố.'),
    Q('Nhân vật chính trong đoạn trích là?', ['Chị Dậu', 'Anh Dậu', 'Cai lệ', 'Nghị Quế'], 0, 'Chị Dậu — người vợ thương chồng, bảo vệ chồng.'),
    Q('Lúc đầu chị Dậu đối với cai lệ thế nào?', ['Hung dữ', 'Van xin, nhẫn nhịn', 'Lạnh lùng', 'Chế giễu'], 1, 'Chị van xin tha thiết để bảo vệ chồng.'),
    Q('Hành động cuối cùng của chị Dậu thể hiện điều gì?', ['Sự nhu nhược', 'Sức phản kháng mạnh mẽ khi bị dồn đến đường cùng', 'Sự bất lực', 'Sự sợ hãi'], 1, '"Tức nước vỡ bờ" — bị áp bức cùng cực thì vùng lên.'),
    Q('Cai lệ tượng trưng cho?', ['Người dân nghèo', 'Bộ máy thực dân – phong kiến tàn ác', 'Người trí thức', 'Người tốt'], 1, 'Cai lệ là tay sai của bộ máy áp bức tàn bạo.'),
    Q('Giá trị hiện thực chủ yếu của đoạn trích?', ['Phơi bày nỗi khổ của người nông dân', 'Ca ngợi triều đình', 'Tả cảnh đẹp', 'Kể chuyện cổ tích'], 0, 'Tố cáo xã hội tàn bạo, phơi bày bi kịch nông dân.'),
  ]),

  M(4, 'Lão Hạc — Nam Cao', [
    Q('Tác giả truyện "Lão Hạc" là?', ['Nam Cao', 'Ngô Tất Tố', 'Nguyên Hồng', 'Thanh Tịnh'], 0, 'Nam Cao (1917–1951).'),
    Q('Số phận lão Hạc trong truyện là?', ['Giàu sang', 'Bi thảm, phải tự kết liễu', 'Hạnh phúc', 'Bình thường'], 1, 'Lão Hạc tự tử bằng bả chó để giữ tiền cho con.'),
    Q('Cậu Vàng trong truyện là?', ['Con trai lão Hạc', 'Con chó lão Hạc yêu thương', 'Người hàng xóm', 'Một địa chủ'], 1, 'Con chó cậu Vàng — kỉ vật của con trai lão Hạc.'),
    Q('Vì sao lão Hạc bán cậu Vàng?', ['Vì ghét chó', 'Vì túng quẫn, sợ ăn vào tiền dành cho con', 'Vì cần tiền cờ bạc', 'Vì sợ chó cắn'], 1, 'Lão quá nghèo, muốn giữ vẹn tiền và mảnh vườn cho con.'),
    Q('Phẩm chất nổi bật của lão Hạc là?', ['Tham lam', 'Tự trọng và yêu con sâu sắc', 'Ích kỉ', 'Lười biếng'], 1, 'Lão Hạc giàu lòng tự trọng, hi sinh vì con.'),
    Q('Nghệ thuật đặc sắc của truyện là?', ['Miêu tả tâm lí nhân vật tinh tế', 'Cốt truyện li kì', 'Lời thoại dài', 'Tả cảnh hùng vĩ'], 0, 'Nam Cao bậc thầy phân tích tâm lí nhân vật.'),
  ]),

  M(5, 'Trường từ vựng', [
    Q('Trường từ vựng là?', ['Một câu', 'Tập hợp từ có ít nhất một nét nghĩa chung', 'Từ đồng nghĩa', 'Từ trái nghĩa'], 1, 'Định nghĩa: nhóm từ có nét nghĩa chung.'),
    Q('Trong các từ sau, từ nào thuộc trường "bộ phận cơ thể người"?', ['mắt, mũi, tai, miệng', 'đi, chạy, nhảy', 'đỏ, xanh, vàng', 'cao, thấp'], 0, 'Đều là bộ phận cơ thể.'),
    Q('"vui, buồn, giận, hờn" thuộc trường nào?', ['Hành động', 'Trạng thái cảm xúc', 'Màu sắc', 'Âm thanh'], 1, 'Đều chỉ cảm xúc.'),
    Q('Trường từ vựng "động vật" gồm?', ['chó, mèo, gà, vịt', 'bàn, ghế, tủ', 'mặn, ngọt, chua', 'sáng, tối'], 0, 'Đều là động vật.'),
    Q('Một từ có thể thuộc?', ['Chỉ 1 trường', 'Nhiều trường nghĩa', 'Không trường nào', 'Mọi câu'], 1, 'Một từ có thể tham gia nhiều trường khác nhau.'),
    Q('"chân bàn", "chân núi" — từ "chân" được dùng theo cách?', ['Chuyển trường, chuyển nghĩa ẩn dụ', 'Đồng nghĩa', 'Trái nghĩa', 'Nghĩa gốc'], 0, 'Chuyển trường: từ bộ phận cơ thể → bộ phận đồ vật.'),
  ]),

  M(6, 'Từ tượng hình — Từ tượng thanh', [
    Q('Từ tượng hình là từ?', ['Gợi tả hình ảnh, dáng vẻ', 'Mô phỏng âm thanh', 'Chỉ màu sắc', 'Chỉ tình cảm'], 0, 'Tượng hình gợi hình dáng (lom khom, lả lướt…).'),
    Q('Từ tượng thanh là từ?', ['Gợi tả hình ảnh', 'Mô phỏng âm thanh tự nhiên hoặc con người', 'Chỉ hành động', 'Chỉ vị trí'], 1, 'Tượng thanh mô phỏng âm thanh (rì rào, ầm ầm…).'),
    Q('Từ nào sau đây là từ tượng hình?', ['lom khom', 'ầm ầm', 'rì rào', 'oa oa'], 0, '"Lom khom" gợi dáng còng. Các từ khác là tượng thanh.'),
    Q('Từ nào sau đây là tượng thanh?', ['nhấp nhô', 'ríu rít', 'thướt tha', 'lảo đảo'], 1, '"Ríu rít" mô phỏng âm thanh chim hót.'),
    Q('Tác dụng chính của từ tượng hình, tượng thanh?', ['Tăng tính biểu cảm, sinh động cho câu văn', 'Làm câu ngắn lại', 'Thay từ Hán Việt', 'Không có tác dụng'], 0, 'Tạo hình ảnh và âm thanh sinh động.'),
    Q('Trong "Lao xao, chim hót líu lo" có?', ['Chỉ tượng hình', 'Chỉ tượng thanh', 'Cả tượng hình và tượng thanh', 'Không có loại nào'], 1, '"Lao xao", "líu lo" đều là tượng thanh.'),
  ]),

  M(7, 'Cô bé bán diêm — An-đéc-xen', [
    Q('Tác giả "Cô bé bán diêm" là?', ['An-đéc-xen (Đan Mạch)', 'Grim (Đức)', 'Bach (Pháp)', 'Tô-xtôi (Nga)'], 0, 'An-đéc-xen — nhà văn Đan Mạch nổi tiếng truyện cổ.'),
    Q('Cô bé bán diêm kết thúc thế nào?', ['Trở nên giàu có', 'Chết cóng trong đêm giao thừa', 'Đoàn tụ với gia đình', 'Bay lên trời'], 1, 'Cô bé chết trong đêm giao thừa lạnh giá.'),
    Q('Mỗi lần quẹt diêm, cô bé thấy gì?', ['Một mộng tưởng đẹp đẽ', 'Quái vật', 'Tuyết rơi', 'Ngôi sao'], 0, 'Lò sưởi, bàn ăn, cây thông, bà nội — các mộng tưởng.'),
    Q('Hình ảnh "bà nội" trong mộng tưởng có ý nghĩa?', ['Người duy nhất yêu thương cô bé', 'Người xa lạ', 'Người ác', 'Người nghèo'], 0, 'Bà nội là người yêu thương cô bé nhất.'),
    Q('Truyện thể hiện thái độ gì của tác giả?', ['Đồng cảm với trẻ em nghèo và phê phán xã hội vô tâm', 'Ca ngợi sự giàu sang', 'Chế giễu trẻ con', 'Khuyên trẻ học giỏi'], 0, 'Lòng nhân ái sâu sắc và lời tố cáo xã hội thờ ơ.'),
    Q('Truyện thuộc thể loại?', ['Tiểu thuyết', 'Truyện cổ tích/truyện ngắn lãng mạn', 'Hồi kí', 'Nghị luận'], 1, 'Truyện ngắn lãng mạn pha chất cổ tích.'),
  ]),

  M(8, 'Đánh nhau với cối xay gió — Xéc-van-tét', [
    Q('"Đánh nhau với cối xay gió" trích từ tác phẩm nào?', ['Đôn Ki-hô-tê', 'Robin Hood', 'Romeo và Juliet', 'Người khốn khổ'], 0, 'Trích tiểu thuyết "Đôn Ki-hô-tê" của Xéc-van-tét.'),
    Q('Đôn Ki-hô-tê là người?', ['Thực tế, khôn ngoan', 'Mộng tưởng, đầu óc hiệp sĩ điên cuồng', 'Lười biếng', 'Hèn nhát'], 1, 'Mê truyện hiệp sĩ tới mức hoang tưởng.'),
    Q('Xan-chô Pan-xa là người?', ['Lãng mạn, mộng tưởng', 'Thực tế, tỉnh táo, hài hước', 'Ác độc', 'Lười biếng'], 1, 'Thực tế, đối lập với Đôn Ki-hô-tê.'),
    Q('Đôn Ki-hô-tê tưởng cối xay gió là?', ['Người khổng lồ', 'Lâu đài', 'Thiên thần', 'Quái vật biển'], 0, 'Tưởng là người khổng lồ và lao vào đánh.'),
    Q('Cặp nhân vật chính thể hiện?', ['Hai mặt đối lập của con người: lí tưởng và thực tế', 'Cùng tính cách', 'Yêu nhau', 'Là cha con'], 0, 'Cặp đôi đối lập kinh điển trong văn học.'),
    Q('Tác giả Xéc-van-tét là người?', ['Tây Ban Nha', 'Pháp', 'Anh', 'Italia'], 0, 'Miguel de Cervantes — nhà văn Tây Ban Nha.'),
  ]),

  M(9, 'Chiếc lá cuối cùng — O. Hen-ri', [
    Q('Tác giả "Chiếc lá cuối cùng" là?', ['O. Hen-ri', 'Mark Twain', 'Hemingway', 'Tolstoy'], 0, 'O. Henry — nhà văn Mỹ chuyên truyện ngắn.'),
    Q('Giôn-xi trong truyện mắc bệnh gì?', ['Viêm phổi', 'Tâm thần', 'Ung thư', 'Sốt rét'], 0, 'Viêm phổi nặng, suy sụp tinh thần.'),
    Q('Giôn-xi tin rằng?', ['Cô sẽ khỏi', 'Khi chiếc lá cuối cùng rụng, cô sẽ chết', 'Có phép màu', 'Bạn sẽ cứu cô'], 1, 'Niềm tin tuyệt vọng vào chiếc lá thường xuân.'),
    Q('Ai đã vẽ chiếc lá cuối cùng?', ['Xiu', 'Cụ Bơ-men', 'Giôn-xi', 'Bác sĩ'], 1, 'Cụ Bơ-men vẽ trong đêm mưa rét và chết vì sưng phổi.'),
    Q('Chiếc lá cuối cùng là?', ['Lá thật', 'Kiệt tác do cụ Bơ-men vẽ', 'Hư cấu', 'Sao chép'], 1, 'Bức kiệt tác — đánh đổi bằng mạng cụ Bơ-men.'),
    Q('Thông điệp chính của truyện?', ['Nghệ thuật chân chính phục vụ con người, lòng nhân ái cao cả', 'Tiền bạc là tất cả', 'Bệnh tật đáng sợ', 'Mùa thu buồn'], 0, 'Ca ngợi lòng nhân ái và nghệ thuật vì con người.'),
  ]),

  M(10, 'Trợ từ — Thán từ', [
    Q('Trợ từ là?', ['Từ chuyên đứng trước danh từ', 'Từ chuyên đi kèm để nhấn mạnh hoặc đánh giá', 'Từ chỉ hành động', 'Từ chỉ thời gian'], 1, 'Trợ từ: nhấn mạnh hoặc bộc lộ thái độ (chính, ngay, những…).'),
    Q('Từ nào là trợ từ trong "Nó ăn những hai bát cơm"?', ['nó', 'ăn', 'những', 'bát'], 2, '"Những" là trợ từ nhấn mạnh số lượng nhiều.'),
    Q('Thán từ là từ?', ['Chỉ sự vật', 'Bộc lộ cảm xúc hoặc dùng để gọi đáp', 'Chỉ hành động', 'Chỉ phương hướng'], 1, 'Thán từ: ôi, a, vâng, dạ, ơi…'),
    Q('Trong "Ôi, đẹp quá!" — thán từ là?', ['Ôi', 'đẹp', 'quá', 'Cả câu'], 0, '"Ôi" bộc lộ cảm xúc ngạc nhiên, thán phục.'),
    Q('Thán từ "vâng, dạ" thuộc loại?', ['Bộc lộ cảm xúc', 'Gọi đáp', 'Phủ định', 'Nghi vấn'], 1, 'Là thán từ gọi đáp lễ phép.'),
    Q('Vị trí thán từ thường ở?', ['Cuối câu', 'Đầu câu, tách bằng dấu phẩy', 'Giữa câu', 'Không vị trí cố định'], 1, 'Thường đầu câu, ngăn cách bằng dấu phẩy hoặc chấm than.'),
  ]),

  M(11, 'Tình thái từ', [
    Q('Tình thái từ là?', ['Từ chỉ tình cảm', 'Từ thêm vào câu để cấu tạo câu nghi vấn, cầu khiến, cảm thán hoặc biểu thị sắc thái tình cảm', 'Từ chỉ hành động', 'Từ chỉ sự vật'], 1, 'Định nghĩa SGK 8.'),
    Q('Trong "Anh đi à?" — tình thái từ là?', ['Anh', 'đi', 'à', 'không có'], 2, '"À" là tình thái từ nghi vấn.'),
    Q('Tình thái từ cảm thán thường gặp?', ['à, ư, hả', 'nhé, nào', 'thay, sao, ơi', 'mà, kia'], 2, 'Thay, sao, ơi… dùng để bộc lộ cảm xúc.'),
    Q('Trong "Đi học nhé!" — "nhé" là tình thái từ?', ['Nghi vấn', 'Cầu khiến', 'Cảm thán', 'Phủ định'], 1, '"Nhé" làm câu mang sắc thái cầu khiến, nhắc nhở.'),
    Q('Khi dùng tình thái từ cần chú ý?', ['Sắc thái biểu cảm và quan hệ vai giao tiếp', 'Số tiếng', 'Tiếng Hán', 'Chính tả'], 0, 'Phù hợp ngữ cảnh và quan hệ.'),
    Q('"Em ăn cơm đi nào!" — tình thái từ là?', ['Em', 'ăn', 'đi nào', 'cơm'], 2, '"Đi nào" thúc giục, cầu khiến.'),
  ]),

  M(12, 'Ôn dịch, thuốc lá — Văn bản nhật dụng', [
    Q('"Ôn dịch, thuốc lá" thuộc kiểu văn bản?', ['Tự sự', 'Nhật dụng (nghị luận – thuyết minh)', 'Trữ tình', 'Cổ tích'], 1, 'Văn bản nhật dụng, có yếu tố thuyết minh – nghị luận.'),
    Q('Đề tài của văn bản là?', ['Bảo vệ rừng', 'Tác hại của thuốc lá', 'Ô nhiễm nước', 'Giao thông'], 1, 'Cảnh báo về tác hại nghiêm trọng của thuốc lá.'),
    Q('Tác giả ví thuốc lá với gì?', ['Ôn dịch (đại dịch)', 'Bệnh nhẹ', 'Thực phẩm', 'Thuốc bổ'], 0, 'So sánh thuốc lá với "ôn dịch" để nhấn mức nguy hiểm.'),
    Q('Văn bản kêu gọi điều gì?', ['Hút nhiều hơn', 'Toàn xã hội cùng chống thuốc lá', 'Trồng thuốc lá', 'Bán thuốc lá'], 1, 'Lời kêu gọi cộng đồng phòng chống thuốc lá.'),
    Q('Đặc điểm nổi bật của VB nhật dụng?', ['Có tính thời sự, gắn với đời sống đương đại', 'Cổ điển, xa rời thực tế', 'Toàn thơ', 'Không có nội dung cụ thể'], 0, 'Văn bản nhật dụng nói về vấn đề bức thiết hiện đại.'),
    Q('Phương thức biểu đạt chính?', ['Tự sự', 'Miêu tả', 'Thuyết minh kết hợp nghị luận', 'Biểu cảm'], 2, 'Cung cấp thông tin + lập luận thuyết phục.'),
  ]),

  M(13, 'Câu ghép', [
    Q('Câu ghép là?', ['Câu có 1 cụm CV', 'Câu có 2 hay nhiều cụm CV không bao chứa nhau', 'Câu hỏi', 'Câu rút gọn'], 1, 'Hai hay nhiều cụm chủ-vị, không bao chứa nhau.'),
    Q('Câu "Trời mưa nên đường ướt" là?', ['Câu đơn', 'Câu ghép có quan hệ nguyên nhân – kết quả', 'Câu cảm thán', 'Câu nghi vấn'], 1, 'Hai vế nối bằng QHT "nên", chỉ nguyên nhân – kết quả.'),
    Q('Các vế câu ghép có thể nối bằng?', ['Quan hệ từ', 'Cặp từ hô ứng', 'Dấu phẩy/dấu hai chấm', 'Tất cả các cách trên'], 3, 'Nhiều cách: QHT, cặp từ hô ứng, dấu câu.'),
    Q('"Tuy nhà nghèo nhưng nó học giỏi" — quan hệ giữa hai vế?', ['Nguyên nhân', 'Tương phản', 'Bổ sung', 'Lựa chọn'], 1, 'Cặp "Tuy…nhưng…" → tương phản (nhượng bộ).'),
    Q('"Vì trời mưa to nên trận đấu hoãn lại" — cặp quan hệ từ chỉ?', ['Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tương phản', 'Mục đích'], 0, 'Vì… nên… → nguyên nhân – kết quả.'),
    Q('"Nếu trời nắng thì chúng ta đi cắm trại" — quan hệ?', ['Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tương phản', 'Tăng tiến'], 1, 'Nếu… thì… → điều kiện – kết quả.'),
  ]),

  M(14, 'Dấu ngoặc đơn, dấu hai chấm', [
    Q('Dấu ngoặc đơn dùng để?', ['Đánh dấu lời trích dẫn', 'Đánh dấu phần chú thích/giải thích thêm', 'Kết thúc câu', 'Liệt kê'], 1, 'Bổ sung, giải thích, thuyết minh.'),
    Q('Trong "Nguyễn Du (1765–1820) là đại thi hào dân tộc" — phần trong ngoặc đơn là?', ['Lời trích', 'Năm sinh – năm mất', 'Câu hỏi', 'Lời nhân vật'], 1, 'Chú thích năm sinh – năm mất.'),
    Q('Dấu hai chấm KHÔNG được dùng để?', ['Báo trước lời trích dẫn', 'Báo trước phần giải thích', 'Liệt kê', 'Kết thúc câu cảm'], 3, 'Kết câu cảm dùng dấu "!"; dấu : không kết câu cảm.'),
    Q('Trong "Mẹ bảo: \'Con học bài đi!\'" — dấu hai chấm để?', ['Liệt kê', 'Báo trước lời thoại', 'Giải thích', 'Hỏi'], 1, 'Báo trước lời nói trực tiếp.'),
    Q('Dấu hai chấm trong "Vườn nhà em có nhiều loại cây: xoài, ổi, mít" để?', ['Lời thoại', 'Báo trước phần liệt kê', 'Hỏi', 'Phủ định'], 1, 'Báo trước liệt kê.'),
    Q('Khi viết, dấu ngoặc đơn được đặt?', ['Trước phần chú thích', 'Sau phần chú thích', 'Bao quanh phần chú thích', 'Bất kì'], 2, 'Phần chú thích nằm trong cặp ngoặc đơn.'),
  ]),

  M(15, 'Dấu ngoặc kép', [
    Q('Dấu ngoặc kép KHÔNG dùng để?', ['Đánh dấu lời dẫn trực tiếp', 'Đánh dấu tên tác phẩm', 'Đánh dấu từ ngữ hiểu theo nghĩa đặc biệt/mỉa mai', 'Kết thúc câu'], 3, 'Kết thúc câu là chấm/hỏi/than, không phải ngoặc kép.'),
    Q('"Truyện Kiều" — dấu ngoặc kép dùng để?', ['Đánh dấu tên tác phẩm', 'Lời dẫn', 'Mỉa mai', 'Liệt kê'], 0, 'Đánh dấu tên tác phẩm.'),
    Q('Trong "Cô ấy thật \'thông minh\' khi quên cả ví" — ngoặc kép thể hiện?', ['Lời trích', 'Tên tác phẩm', 'Nghĩa mỉa mai, ngược', 'Liệt kê'], 2, 'Thể hiện ý mỉa mai, ngược nghĩa.'),
    Q('Lời dẫn trực tiếp được đánh dấu bằng?', ['Dấu ngoặc đơn', 'Dấu ngoặc kép', 'Dấu chấm', 'Dấu hai chấm'], 1, 'Lời dẫn trực tiếp đặt trong ngoặc kép.'),
    Q('"Bài thơ \'Quê hương\' của Tế Hanh rất hay" — ngoặc kép cho?', ['Tên tác phẩm', 'Lời dẫn', 'Mỉa mai', 'Phủ định'], 0, 'Đánh dấu tên bài thơ.'),
    Q('Trước dấu mở ngoặc kép cho lời dẫn, thường có dấu?', ['Phẩy', 'Hai chấm', 'Chấm hỏi', 'Chấm than'], 1, 'Mẹ bảo: "Con học đi!" — có dấu hai chấm trước.'),
  ]),

  M(16, 'Văn bản thuyết minh', [
    Q('Văn bản thuyết minh nhằm?', ['Kể chuyện', 'Cung cấp tri thức khách quan về sự vật, hiện tượng', 'Bộc lộ cảm xúc', 'Khuyên răn'], 1, 'Cung cấp thông tin khách quan.'),
    Q('Yêu cầu chính của VB thuyết minh?', ['Chính xác, khoa học, rõ ràng', 'Giàu cảm xúc', 'Li kì', 'Hài hước'], 0, 'Tính khoa học và chính xác là then chốt.'),
    Q('Các phương pháp thuyết minh thường gặp?', ['Nêu định nghĩa, liệt kê, so sánh, dùng số liệu, phân loại', 'Bịa đặt', 'Phóng đại', 'Mỉa mai'], 0, 'Các phương pháp thuyết minh phổ biến.'),
    Q('Khi thuyết minh đồ vật, cần?', ['Mô tả cấu tạo, công dụng, cách sử dụng', 'Kể chuyện cổ tích', 'Phóng tác', 'Bộc lộ tình yêu'], 0, 'Tập trung vào cấu tạo – công dụng.'),
    Q('Ngôn ngữ thuyết minh?', ['Hoa mỹ, ẩn dụ nhiều', 'Trong sáng, chính xác, dễ hiểu', 'Tối nghĩa', 'Châm biếm'], 1, 'Ngôn ngữ rõ ràng, đúng.'),
    Q('"Cái phích" — đoạn văn giới thiệu cấu tạo phích nước là?', ['Tự sự', 'Thuyết minh', 'Nghị luận', 'Biểu cảm'], 1, 'Cung cấp tri thức về phích → thuyết minh.'),
  ]),

  M(17, 'Hai cây phong — Ai-ma-tốp', [
    Q('Tác giả "Hai cây phong" là người nước nào?', ['Nga (Liên Xô cũ – Cư-rơ-gư-xtan)', 'Pháp', 'Anh', 'Mỹ'], 0, 'Tsinghiz Aitmatov — nhà văn Cư-rơ-gư-xtan (Liên Xô cũ).'),
    Q('Văn bản trích từ tác phẩm nào?', ['Người thầy đầu tiên', 'Chiến tranh và hoà bình', 'Anna Karenina', 'Cánh buồm đỏ thắm'], 0, 'Trích "Người thầy đầu tiên".'),
    Q('Hai cây phong gắn với?', ['Tuổi thơ và ký ức về thầy Đuy-sen', 'Cuộc chiến', 'Mối tình đầu', 'Thành phố'], 0, 'Biểu tượng kí ức tuổi thơ và biết ơn người thầy.'),
    Q('Hai cây phong được tả qua góc nhìn?', ['Người hoạ sĩ', 'Đứa trẻ', 'Cả hai', 'Người đi đường'], 2, 'Người kể vừa là hoạ sĩ, vừa là đứa trẻ năm xưa.'),
    Q('Tâm trạng nhân vật khi nhớ về hai cây phong?', ['Bồi hồi, yêu thương, biết ơn', 'Lạnh nhạt', 'Tức giận', 'Sợ hãi'], 0, 'Bồi hồi xúc động, biết ơn thầy Đuy-sen.'),
    Q('Hình tượng hai cây phong mang ý nghĩa?', ['Biểu tượng quê hương, kỉ niệm, tình thầy trò', 'Một loài cây bình thường', 'Đồ trang trí', 'Cây thuốc'], 0, 'Biểu tượng giàu sức gợi cảm.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('"Tôi đi học" của ai?', ['Thanh Tịnh', 'Nguyên Hồng', 'Nam Cao', 'Ngô Tất Tố'], 0, 'Thanh Tịnh.'),
    Q('"Lão Hạc" do ai sáng tác?', ['Nam Cao', 'Nguyên Hồng', 'Ngô Tất Tố', 'Tô Hoài'], 0, 'Nam Cao.'),
    Q('Thán từ trong "Ôi, đẹp quá!" là?', ['Ôi', 'quá', 'đẹp', 'Không có'], 0, 'Ôi — thán từ.'),
    Q('Câu "Trời mưa nên đường trơn" là câu?', ['Đơn', 'Ghép', 'Cảm thán', 'Hỏi'], 1, 'Có 2 cụm CV — câu ghép.'),
    Q('Dấu ngoặc kép dùng đánh dấu tên?', ['Tác phẩm', 'Người', 'Địa danh', 'Số'], 0, 'Tên tác phẩm.'),
    Q('Tượng hình khác tượng thanh ở chỗ?', ['Một bên gợi hình, một bên gợi âm', 'Đều gợi âm', 'Đều gợi hình', 'Không phân biệt'], 0, 'Tượng hình gợi hình; tượng thanh mô phỏng âm.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Nhớ rừng — Thế Lữ', [
    Q('Tác giả bài thơ "Nhớ rừng" là?', ['Thế Lữ', 'Lưu Trọng Lư', 'Xuân Diệu', 'Huy Cận'], 0, 'Thế Lữ (1907–1989), một trong những thủ lĩnh phong trào Thơ mới.'),
    Q('Nhân vật trữ tình trong "Nhớ rừng" là?', ['Con hổ trong vườn bách thú', 'Người tù', 'Người lữ khách', 'Con sư tử'], 0, 'Con hổ — biểu tượng cho khát vọng tự do.'),
    Q('Tâm trạng chủ đạo của con hổ là?', ['Hài lòng', 'Uất hận, chán ghét cuộc sống tù túng', 'Bình thản', 'Vui vẻ'], 1, 'Uất hận với cảnh tù túng, khao khát rừng già.'),
    Q('Bài thơ thể hiện khát vọng gì?', ['Khát vọng tự do', 'Tình yêu đôi lứa', 'Yêu nước', 'Học hành'], 0, 'Khát vọng tự do mãnh liệt, kín đáo bộc lộ tinh thần dân tộc.'),
    Q('Hình ảnh rừng già được miêu tả?', ['Nhỏ bé', 'Hùng vĩ, bí ẩn, đầy sức sống', 'Tàn tạ', 'Khô cằn'], 1, 'Rừng già hùng vĩ, là biểu tượng quá khứ vàng son.'),
    Q('"Nhớ rừng" thuộc phong trào?', ['Thơ Đường', 'Thơ mới', 'Văn học hiện thực phê phán', 'Văn học kháng chiến'], 1, 'Thơ mới (1932–1945).'),
  ]),

  M(20, 'Quê hương — Tế Hanh', [
    Q('Tác giả bài thơ "Quê hương" là?', ['Tế Hanh', 'Huy Cận', 'Xuân Diệu', 'Lưu Trọng Lư'], 0, 'Tế Hanh (1921–2009).'),
    Q('Quê hương của Tế Hanh ở?', ['Hà Nội', 'Làng chài ven biển Quảng Ngãi', 'Huế', 'Sài Gòn'], 1, 'Làng chài ven biển ở Quảng Ngãi.'),
    Q('Hình ảnh trung tâm trong bài thơ?', ['Cánh buồm và đoàn thuyền đánh cá', 'Cây đa', 'Bến đò', 'Cánh đồng lúa'], 0, 'Đoàn thuyền và cánh buồm trắng.'),
    Q('"Cánh buồm giương to như mảnh hồn làng" — biện pháp nghệ thuật?', ['So sánh – ẩn dụ', 'Hoán dụ', 'Nhân hoá', 'Điệp ngữ'], 0, 'So sánh — ẩn dụ độc đáo: cánh buồm = mảnh hồn làng.'),
    Q('Cảm xúc chủ đạo của bài thơ?', ['Nỗi nhớ quê tha thiết', 'Vui vẻ', 'Buồn chán', 'Tức giận'], 0, 'Nỗi nhớ quê hương trong xa cách.'),
    Q('Bài thơ thuộc dòng?', ['Thơ Đường luật', 'Thơ mới', 'Thơ tự do hiện đại', 'Ca dao'], 1, 'Tế Hanh thuộc phong trào Thơ mới.'),
  ]),

  M(21, 'Khi con tu hú — Tố Hữu', [
    Q('"Khi con tu hú" do ai sáng tác?', ['Tố Hữu', 'Hồ Chí Minh', 'Thế Lữ', 'Tế Hanh'], 0, 'Tố Hữu (1920–2002).'),
    Q('Bài thơ được sáng tác trong hoàn cảnh nào?', ['Hoà bình', 'Tác giả bị giam trong nhà lao Thừa Phủ (Huế) — 1939', 'Khi đi du học', 'Khi lên Tây Bắc'], 1, 'Tố Hữu sáng tác khi bị giam ở nhà lao Thừa Phủ, Huế.'),
    Q('Tiếng tu hú gợi điều gì?', ['Mùa hè và khát vọng tự do', 'Mùa đông', 'Cảnh chiến tranh', 'Nỗi sợ'], 0, 'Âm thanh mùa hè, khơi gợi khao khát tự do.'),
    Q('Tâm trạng nhân vật trữ tình?', ['Bình thản', 'Ngột ngạt, uất ức, khao khát phá tan ngục tù', 'Vui sướng', 'Mệt mỏi'], 1, 'Người tù khao khát thoát khỏi gông cùm.'),
    Q('Thể thơ của bài là?', ['Thất ngôn bát cú', 'Lục bát', 'Tự do', 'Ngũ ngôn'], 1, 'Bài thơ viết theo thể lục bát.'),
    Q('Câu thơ kết thể hiện?', ['Niềm vui', 'Sự ngột ngạt, đau khổ', 'Niềm hi vọng', 'Sự bình thản'], 1, '"Ngột làm sao chết uất thôi…" — bức bối, ngột ngạt.'),
  ]),

  M(22, 'Tức cảnh Pác Bó — Hồ Chí Minh', [
    Q('Bài "Tức cảnh Pác Bó" của ai?', ['Hồ Chí Minh', 'Tố Hữu', 'Phạm Văn Đồng', 'Trường Chinh'], 0, 'Hồ Chí Minh (1890–1969).'),
    Q('Bài thơ ra đời ở đâu?', ['Pác Bó (Cao Bằng), 1941', 'Hà Nội', 'Paris', 'Trung Quốc'], 0, 'Pác Bó – Cao Bằng, sau khi Bác về nước.'),
    Q('Thể thơ?', ['Thất ngôn tứ tuyệt', 'Lục bát', 'Song thất lục bát', 'Tự do'], 0, 'Thất ngôn tứ tuyệt — bốn câu bảy tiếng.'),
    Q('"Sáng ra bờ suối, tối vào hang" thể hiện?', ['Sự sang trọng', 'Cuộc sống gian khổ nhưng vẫn ung dung', 'Sự cô đơn', 'Sự ốm yếu'], 1, 'Phong thái ung dung, lạc quan dù gian khổ.'),
    Q('"Cuộc đời cách mạng thật là sang" — chữ "sang" thể hiện?', ['Giàu vật chất', 'Niềm tự hào, tinh thần lạc quan cách mạng', 'Sự châm biếm', 'Sự kiêu ngạo'], 1, 'Tinh thần cao đẹp, ung dung của người chiến sĩ.'),
    Q('Phong cách thơ Bác trong bài là?', ['Cổ điển kết hợp hiện đại, giản dị mà sâu sắc', 'Cầu kì, hoa mỹ', 'Bi luỵ', 'Khô khan'], 0, 'Đặc trưng thơ Hồ Chủ tịch.'),
  ]),

  M(23, 'Ngắm trăng — Hồ Chí Minh', [
    Q('"Ngắm trăng" (Vọng nguyệt) trích từ tập?', ['Nhật kí trong tù', 'Truyện và kí', 'Đường kách mệnh', 'Sông núi'], 0, '"Ngục trung nhật kí" — Nhật kí trong tù (1942–1943).'),
    Q('Bác viết "Nhật kí trong tù" bằng?', ['Tiếng Việt', 'Chữ Hán', 'Chữ Pháp', 'Chữ Nôm'], 1, 'Bằng chữ Hán.'),
    Q('Hoàn cảnh sáng tác?', ['Hoà bình', 'Khi Bác bị Tưởng Giới Thạch giam tại nhà tù Trung Quốc', 'Khi đi nước ngoài', 'Khi học ở Pháp'], 1, '1942–1943, bị giam tại Quảng Tây, Trung Quốc.'),
    Q('Bài thơ thể hiện tâm hồn nào của Bác?', ['Mệt mỏi', 'Yêu thiên nhiên, ung dung, vượt lên hoàn cảnh', 'Bi quan', 'Lãnh đạm'], 1, 'Tâm hồn yêu thiên nhiên, phong thái thi sĩ – chiến sĩ.'),
    Q('Hình ảnh trăng – người trong bài có quan hệ?', ['Đối lập', 'Tri kỉ, bạn bè', 'Xa lạ', 'Không liên quan'], 1, 'Trăng và người như đôi bạn tri kỉ.'),
    Q('Thể thơ của bài?', ['Lục bát', 'Thất ngôn tứ tuyệt', 'Song thất lục bát', 'Tự do'], 1, 'Thất ngôn tứ tuyệt.'),
  ]),

  M(24, 'Đi đường — Hồ Chí Minh', [
    Q('Bài "Đi đường" (Tẩu lộ) thuộc tập?', ['Nhật kí trong tù', 'Sông núi', 'Đường kách mệnh', 'Truyện và kí'], 0, 'Cùng tập với "Ngắm trăng".'),
    Q('Hình ảnh "đường" trong bài có nghĩa?', ['Đường đi thực và đường đời/đường cách mạng', 'Chỉ đường vật lí', 'Đường biển', 'Đường thủy'], 0, 'Nghĩa kép: đường đi và đường đời.'),
    Q('"Lên đến tận cùng…thu vào tầm mắt muôn trùng…" thể hiện?', ['Khó khăn của hành trình', 'Niềm vui chiến thắng và tầm nhìn người chiến sĩ', 'Sự mệt mỏi', 'Lời than'], 1, 'Vượt khó để đạt thành quả lớn lao.'),
    Q('Triết lí bài thơ?', ['Càng gian nan càng thành công, đường đời nhiều thử thách nhưng vượt qua sẽ tới đích', 'Cuộc đời dễ dàng', 'Đừng cố gắng', 'Hãy nghỉ ngơi'], 0, 'Lời triết lí về kiên trì.'),
    Q('Thể thơ?', ['Lục bát', 'Tứ tuyệt thất ngôn', 'Tự do', 'Ngũ ngôn'], 1, 'Tứ tuyệt Đường luật.'),
    Q('Bản dịch quen thuộc của bài là của?', ['Nam Trân', 'Xuân Diệu', 'Tố Hữu', 'Huy Cận'], 0, 'Dịch giả Nam Trân.'),
  ]),

  M(25, 'Chiếu dời đô — Lí Công Uẩn', [
    Q('Tác giả "Chiếu dời đô" là?', ['Lí Thường Kiệt', 'Lí Công Uẩn (Lý Thái Tổ)', 'Trần Quốc Tuấn', 'Nguyễn Trãi'], 1, 'Lý Thái Tổ ban chiếu dời đô năm 1010.'),
    Q('Nội dung chính của chiếu?', ['Tuyên bố dời đô từ Hoa Lư về Đại La', 'Khen Hoa Lư', 'Ca ngợi quân Tống', 'Phê bình triều thần'], 0, 'Quyết định dời đô từ Hoa Lư về Đại La (Thăng Long).'),
    Q('Đại La được mô tả là vùng đất?', ['Hẹp, hiểm trở', 'Trung tâm, rộng rãi, địa thế đẹp, dân thịnh', 'Hoang vu', 'Núi cao'], 1, 'Vùng đất "trung tâm trời đất", có thế rồng cuộn hổ ngồi.'),
    Q('Thể văn?', ['Thơ', 'Chiếu — văn nghị luận trung đại', 'Truyện', 'Hịch'], 1, 'Chiếu — văn bản nhà vua ban bố.'),
    Q('Lí lẽ của tác giả dựa trên?', ['Cảm xúc', 'Sự kiện lịch sử và lợi ích lâu dài cho quốc gia', 'Tâm linh', 'Truyền thuyết'], 1, 'Dẫn nhà Thương – Chu dời đô và phân tích lợi ích.'),
    Q('Văn bản thể hiện?', ['Tầm nhìn xa, lòng yêu nước, vì dân vì nước', 'Tham vọng cá nhân', 'Sự nóng nảy', 'Lo sợ'], 0, 'Tầm vóc một nhà lãnh đạo lớn.'),
  ]),

  M(26, 'Hịch tướng sĩ — Trần Quốc Tuấn', [
    Q('Tác giả "Hịch tướng sĩ" là?', ['Trần Quốc Tuấn', 'Lí Thường Kiệt', 'Nguyễn Trãi', 'Lê Lợi'], 0, 'Hưng Đạo Vương Trần Quốc Tuấn.'),
    Q('Hịch được viết trong hoàn cảnh nào?', ['Khi đất nước thanh bình', 'Trước cuộc kháng chiến chống Mông – Nguyên lần II (1285)', 'Sau khi thắng trận', 'Khi xảy ra nội loạn'], 1, 'Khích lệ tướng sĩ trước cuộc kháng chiến chống Mông – Nguyên.'),
    Q('Mục đích của hịch?', ['Thuyết phục, khích lệ tướng sĩ học binh thư, chuẩn bị chiến đấu', 'Kể chuyện', 'Báo cáo công lao', 'Thông báo nội bộ'], 0, 'Khơi gợi lòng yêu nước, căm thù giặc, sẵn sàng chiến đấu.'),
    Q('Tác giả bộc lộ tâm trạng?', ['Lo lắng, đau xót khi nước nguy nan', 'Vui mừng', 'Bình thản', 'Hờ hững'], 0, '"Ta thường tới bữa quên ăn, nửa đêm vỗ gối…"'),
    Q('Thể loại?', ['Chiếu', 'Hịch — văn nghị luận trung đại', 'Cáo', 'Tấu'], 1, 'Hịch — văn bản hiệu triệu.'),
    Q('Giọng văn nổi bật?', ['Hùng hồn, đanh thép, đầy nhiệt huyết', 'Êm dịu, trữ tình', 'Châm biếm hài hước', 'Lạnh nhạt'], 0, 'Giọng hùng hồn, kết hợp lý và tình.'),
  ]),

  M(27, 'Câu nghi vấn — Câu cầu khiến', [
    Q('Câu nghi vấn dùng để?', ['Khẳng định', 'Hỏi (và một số chức năng khác như cầu khiến, cảm thán…)', 'Ra lệnh', 'Tả cảnh'], 1, 'Chức năng chính là hỏi, ngoài ra có nhiều chức năng khác.'),
    Q('Dấu kết câu nghi vấn thường dùng?', ['.', '!', '?', ','], 2, 'Dấu chấm hỏi.'),
    Q('"Anh đi đâu đấy?" thuộc kiểu câu?', ['Trần thuật', 'Nghi vấn', 'Cầu khiến', 'Cảm thán'], 1, 'Có từ nghi vấn "đâu" và dấu "?".'),
    Q('Câu cầu khiến dùng để?', ['Khen', 'Ra lệnh, yêu cầu, đề nghị, khuyên bảo', 'Hỏi', 'Bộc lộ cảm xúc'], 1, 'Mục đích: bảo người khác làm/không làm gì.'),
    Q('Trong "Đừng nói chuyện trong giờ học!" — đây là?', ['Nghi vấn', 'Cầu khiến', 'Trần thuật', 'Cảm thán'], 1, 'Cầu khiến (cấm đoán).'),
    Q('Câu cầu khiến thường có từ?', ['à, ư, hả', 'hãy, đừng, chớ, nào, đi', 'ôi, chao', 'và, hoặc'], 1, 'Các từ cầu khiến điển hình.'),
  ]),

  M(28, 'Câu cảm thán — Câu trần thuật', [
    Q('Câu cảm thán dùng để?', ['Bộc lộ cảm xúc trực tiếp', 'Hỏi', 'Tả cảnh', 'Liệt kê'], 0, 'Bộc lộ cảm xúc, tình cảm.'),
    Q('Câu cảm thán thường kết bằng dấu?', ['.', '?', '!', ','], 2, 'Dấu chấm than.'),
    Q('"Ôi, đẹp quá!" là câu?', ['Trần thuật', 'Nghi vấn', 'Cảm thán', 'Cầu khiến'], 2, 'Có thán từ "Ôi" và dấu "!".'),
    Q('Câu trần thuật dùng để?', ['Trần thuật, kể, thông báo, miêu tả… (không có chức năng nghi vấn, cầu khiến, cảm thán)', 'Hỏi', 'Cảm thán', 'Cầu khiến'], 0, 'Mục đích chính: trần thuật, thông báo.'),
    Q('Câu trần thuật kết bằng dấu?', ['Dấu chấm (đôi khi chấm than/ba chấm)', 'Dấu hỏi', 'Dấu ngoặc kép', 'Dấu hai chấm'], 0, 'Thường dùng dấu chấm.'),
    Q('Trong các câu sau, đâu là câu trần thuật?', ['Trời mưa rất to.', 'Trời mưa à?', 'Đừng đi mưa!', 'Ôi, mưa to quá!'], 0, 'Câu kể sự việc, kết bằng dấu chấm.'),
  ]),

  M(29, 'Câu phủ định', [
    Q('Câu phủ định là?', ['Câu khẳng định', 'Câu chứa từ phủ định để phản bác hoặc xác nhận sự không có/không xảy ra', 'Câu hỏi', 'Câu cảm thán'], 1, 'Định nghĩa SGK 8.'),
    Q('Từ phủ định điển hình?', ['à, ư, nhỉ', 'không, chưa, chẳng, đâu (có)', 'hãy, đừng', 'mà, kia'], 1, 'Các từ chuyên dùng phủ định.'),
    Q('"Hôm nay tôi không đi học" thuộc kiểu?', ['Trần thuật khẳng định', 'Trần thuật phủ định', 'Nghi vấn', 'Cầu khiến'], 1, 'Câu phủ định miêu tả sự việc không xảy ra.'),
    Q('"Cậu nói thế đâu có đúng!" là phủ định?', ['Miêu tả', 'Bác bỏ', 'Khẳng định', 'Cảm thán'], 1, 'Phủ định bác bỏ ý người khác.'),
    Q('Phủ định kép "không phải không…" thực chất biểu thị?', ['Phủ định mạnh', 'Khẳng định', 'Nghi vấn', 'Cảm thán'], 1, 'Hai lần phủ định = khẳng định.'),
    Q('"Tôi chưa làm bài tập" — từ phủ định?', ['Tôi', 'chưa', 'làm', 'bài tập'], 1, '"Chưa" là từ phủ định.'),
  ]),

  M(30, 'Hành động nói', [
    Q('Hành động nói là?', ['Hành động được thực hiện bằng lời nói nhằm mục đích nhất định', 'Hành động im lặng', 'Cử chỉ', 'Viết'], 0, 'Định nghĩa: dùng lời để thực hiện ý định.'),
    Q('Các kiểu hành động nói thường gặp?', ['Hỏi, trình bày, điều khiển, hứa hẹn, bộc lộ cảm xúc', 'Ăn, uống', 'Đi, đứng', 'Ngủ, nghỉ'], 0, 'Phân loại theo mục đích nói.'),
    Q('Khi nói "Tôi xin hứa sẽ học chăm" — hành động nói thuộc?', ['Hỏi', 'Hứa hẹn', 'Điều khiển', 'Cảm xúc'], 1, 'Hành động hứa.'),
    Q('"Bạn có thể đóng cửa giúp mình không?" — hành động nói?', ['Hỏi đơn thuần', 'Cầu khiến gián tiếp (qua câu nghi vấn)', 'Hứa', 'Cảm thán'], 1, 'Hình thức nghi vấn nhưng mục đích cầu khiến.'),
    Q('Hành động nói có thể được thực hiện?', ['Trực tiếp', 'Gián tiếp', 'Cả trực tiếp và gián tiếp', 'Không cách nào'], 2, 'Cả hai cách — gián tiếp thường lịch sự hơn.'),
    Q('"Cô ấy là học sinh giỏi" — hành động nói?', ['Trình bày', 'Hỏi', 'Hứa', 'Cảm xúc'], 0, 'Khẳng định một sự kiện.'),
  ]),

  M(31, 'Hội thoại — Lượt lời', [
    Q('Vai xã hội trong hội thoại được xác định bởi?', ['Quan hệ trên – dưới, ngang hàng, thân – sơ', 'Ngẫu nhiên', 'Tuổi tác duy nhất', 'Giới tính'], 0, 'Vai xã hội nhiều chiều: trên/dưới + thân/sơ.'),
    Q('Lượt lời là?', ['Phần nói của mỗi người trong hội thoại', 'Toàn bộ cuộc thoại', 'Một câu', 'Một từ'], 0, 'Lượt lời = phần đối thoại của một người.'),
    Q('Khi tham gia hội thoại, cần?', ['Tôn trọng lượt lời người khác, không cắt ngang vô lí', 'Nói tự do', 'Cướp lời', 'Im lặng'], 0, 'Lịch sự, tôn trọng đối phương.'),
    Q('Người vai dưới khi nói với vai trên cần?', ['Cộc lốc', 'Lễ phép, thận trọng', 'Quát mắng', 'Im lặng tuyệt đối'], 1, 'Đảm bảo phép tắc xã hội.'),
    Q('Khi không tham gia mà chỉ nghe, đó là?', ['Vai chính', 'Vai im lặng / không tham gia lượt lời', 'Đặt câu hỏi', 'Trả lời'], 1, 'Người nghe — không nhất thiết phải lên tiếng.'),
    Q('Trong bữa cơm gia đình, lượt lời nên có?', ['Quy tắc tôn trọng, không nói khi đang ăn', 'Không quy tắc gì', 'Phải nói liên tục', 'Phải im lặng tuyệt đối'], 0, 'Văn hoá ứng xử trong gia đình.'),
  ]),

  M(32, 'Văn nghị luận — Luận điểm, luận cứ', [
    Q('Văn nghị luận là?', ['Văn bản trình bày ý kiến, quan điểm và thuyết phục người đọc bằng lí lẽ, dẫn chứng', 'Văn kể chuyện', 'Văn tả cảnh', 'Văn biểu cảm'], 0, 'Đặc trưng: thuyết phục bằng lí lẽ và dẫn chứng.'),
    Q('Luận điểm là?', ['Ý kiến, tư tưởng, quan điểm chính cần khẳng định', 'Câu chuyện', 'Đoạn văn miêu tả', 'Lời dẫn'], 0, 'Luận điểm = tư tưởng được bảo vệ.'),
    Q('Luận cứ là?', ['Lí lẽ và dẫn chứng dùng để làm rõ luận điểm', 'Tên người', 'Câu hỏi', 'Câu cảm'], 0, 'Bao gồm lí lẽ + bằng chứng.'),
    Q('Lập luận là?', ['Cách trình bày dẫn chứng', 'Cách tổ chức, sắp xếp luận điểm, luận cứ để thuyết phục', 'Cách kể chuyện', 'Cách tả cảnh'], 1, 'Lập luận = phương pháp triển khai.'),
    Q('Yêu cầu của một bài văn nghị luận tốt?', ['Luận điểm rõ ràng, luận cứ xác đáng, lập luận chặt chẽ', 'Cốt truyện li kì', 'Hình ảnh đẹp', 'Cảm xúc dạt dào'], 0, 'Tiêu chuẩn của văn nghị luận.'),
    Q('"Học, học nữa, học mãi" là?', ['Một luận điểm về tinh thần tự học', 'Câu cảm thán', 'Câu hỏi', 'Câu cầu khiến đơn thuần'], 0, 'Lời khuyên của Lê-nin, thường dùng làm luận điểm.'),
  ]),

  M(33, 'Bàn luận về phép học — Nguyễn Thiếp', [
    Q('"Bàn luận về phép học" của ai?', ['Nguyễn Thiếp (La Sơn Phu Tử)', 'Nguyễn Trãi', 'Lê Quý Đôn', 'Phan Bội Châu'], 0, 'La Sơn Phu Tử Nguyễn Thiếp (1723–1804).'),
    Q('Thể loại?', ['Chiếu', 'Tấu — văn nghị luận trung đại dâng vua', 'Hịch', 'Cáo'], 1, 'Tấu — bài tấu dâng vua Quang Trung.'),
    Q('Tác giả phê phán lối học nào?', ['Chuộng hình thức, cầu danh lợi, không thực chất', 'Học hết sức', 'Học khoa cử', 'Học để giúp dân'], 0, 'Phê phán lối học cầu danh lợi, không thực chất.'),
    Q('Phương pháp học đúng theo tác giả?', ['Học từ thấp đến cao, học rộng rồi tóm gọn, học đi đôi với hành', 'Học vẹt', 'Học gấp rút', 'Không cần thầy'], 0, 'Học có hệ thống, kết hợp lí thuyết với thực hành.'),
    Q('Mục đích cao nhất của việc học theo tác giả?', ['Đỗ đạt làm quan', 'Học để làm người, để hữu ích cho nước nhà', 'Kiếm tiền', 'Vui chơi'], 1, 'Học để làm người và phục vụ xã hội.'),
    Q('Văn bản thể hiện tinh thần?', ['Đề cao việc học chân chính, lòng yêu nước', 'Chống học hành', 'Chế giễu kẻ học', 'Không quan tâm'], 0, 'Đề cao giáo dục, lòng yêu nước thiết tha.'),
  ]),

  M(34, 'Đi bộ ngao du — Ru-xô', [
    Q('Tác giả "Đi bộ ngao du" là?', ['Ru-xô (Pháp)', 'Vôn-te', 'Mông-te-xki-ơ', 'Đi-đơ-rô'], 0, 'Jean-Jacques Rousseau (1712–1778), nhà tư tưởng Pháp.'),
    Q('Văn bản trích từ tác phẩm nào?', ['Ê-min hay Về giáo dục', 'Khế ước xã hội', 'Bàn về bất bình đẳng', 'Tự thuật'], 0, 'Trích "Ê-min hay Về giáo dục".'),
    Q('Theo Ru-xô, đi bộ ngao du có lợi ích gì?', ['Tự do, hiểu biết, tăng cường sức khoẻ, tâm hồn thanh thản', 'Tốn kém', 'Mất thì giờ', 'Nguy hiểm'], 0, 'Liệt kê 3 lợi ích: tự do – hiểu biết – sức khoẻ.'),
    Q('Phương pháp lập luận chủ yếu?', ['Tự sự', 'Nghị luận có dẫn chứng cụ thể từ bản thân', 'Miêu tả', 'Biểu cảm thuần'], 1, 'Nghị luận kết hợp dẫn chứng thực tế từ chính tác giả.'),
    Q('Văn bản thể hiện quan niệm gì?', ['Đề cao tự do cá nhân và giáo dục tự nhiên', 'Đề cao tài chính', 'Đề cao quyền lực', 'Đề cao danh vọng'], 0, 'Tư tưởng tiến bộ thời Khai sáng Pháp.'),
    Q('Văn phong của Ru-xô trong bài?', ['Giản dị, chân thành, gần gũi', 'Cầu kì', 'Bi luỵ', 'Khô khan'], 0, 'Giản dị, đầy sức thuyết phục.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('"Nhớ rừng" của ai?', ['Thế Lữ', 'Tế Hanh', 'Tố Hữu', 'Hồ Chí Minh'], 0, 'Thế Lữ.'),
    Q('"Quê hương" của Tế Hanh có hình ảnh trung tâm?', ['Cánh đồng lúa', 'Cánh buồm và con thuyền', 'Dòng sông', 'Núi rừng'], 1, 'Cánh buồm và đoàn thuyền đánh cá.'),
    Q('"Tức cảnh Pác Bó" – tâm trạng?', ['Buồn chán', 'Ung dung, lạc quan', 'Sợ hãi', 'Bi luỵ'], 1, 'Phong thái ung dung của Bác.'),
    Q('"Hịch tướng sĩ" do ai viết?', ['Trần Quốc Tuấn', 'Lí Thường Kiệt', 'Nguyễn Trãi', 'Lê Lợi'], 0, 'Hưng Đạo Vương.'),
    Q('Câu "Ôi, đẹp quá!" thuộc kiểu?', ['Cảm thán', 'Trần thuật', 'Nghi vấn', 'Cầu khiến'], 0, 'Câu cảm thán.'),
    Q('Văn bản nghị luận đòi hỏi?', ['Luận điểm, luận cứ, lập luận chặt chẽ', 'Cốt truyện ly kì', 'Mô tả phong cảnh', 'Cảm xúc tuôn trào'], 0, 'Ba yếu tố căn bản.'),
  ]),
];

export const S8NV_SCENARIOS = indexBy(S8NV_WEEKS);
