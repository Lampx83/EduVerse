// ============================================================
// Lớp 10 · LỊCH SỬ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Sử 10: Lịch sử và Sử học — Các nền văn minh thế giới cổ - trung đại — Văn minh Đông Nam Á và Việt Nam).
// ID prefix: "H10SU-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10SU', 'lich-su', n, title, qs, opts);

export const H10SU_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Sử học là gì?', [
    Q('Sử học là khoa học nghiên cứu về?', ['Tương lai', 'Sinh vật', 'Vũ trụ vật lý', 'Quá khứ của loài người'], 3, 'Sử học nghiên cứu quá khứ hoạt động của loài người.'),
    Q('Đối tượng nghiên cứu của Sử học là?', ['Chỉ kinh tế', 'Toàn bộ quá khứ của xã hội loài người', 'Chỉ vua chúa', 'Chỉ chiến tranh'], 1, 'Đối tượng là toàn bộ quá khứ xã hội loài người — chính trị, kinh tế, văn hoá, xã hội.'),
    Q('Nhà sử học cần có phẩm chất quan trọng nào?', ['Sáng tạo bừa', 'Yêu thích cá nhân', 'Bịa số liệu', 'Khách quan, trung thực'], 3, 'Khách quan, trung thực và phương pháp khoa học là yêu cầu cốt lõi của nhà sử học.'),
    Q('Sử học có chức năng?', ['Khoa học, giáo dục và xã hội', 'Chỉ làm cảnh', 'Chỉ giải trí', 'Chỉ thi cử'], 0, 'Sử học có chức năng khoa học (tìm hiểu sự thật), giáo dục (rút bài học), xã hội (gắn kết cộng đồng).'),
    Q('Lịch sử là chuyện?', ['Tưởng tượng', 'Đang xảy ra hôm nay', 'Sẽ xảy ra', 'Đã xảy ra và được ghi nhận'], 3, 'Lịch sử là quá khứ đã xảy ra được nghiên cứu và ghi nhận.'),
    Q('Học lịch sử giúp người học?', ['Khoẻ hơn', 'Hiểu cội nguồn, rút bài học, định hướng tương lai', 'Cao hơn', 'Trở nên giàu có'], 1, 'Sử học giúp hiểu nguồn gốc, bài học quá khứ để định hướng hiện tại - tương lai.'),
  ]),

  M(2, 'Nguồn sử liệu và phương pháp nghiên cứu', [
    Q('Nguồn sử liệu chia thành 2 nhóm lớn?', ['Sơ cấp và thứ cấp', 'Của Việt Nam và nước ngoài', 'Có hình và không hình', 'Cổ và mới'], 0, 'Sơ cấp (gốc) và thứ cấp (gián tiếp) là hai nhóm chính.'),
    Q('Văn bia, đồ gốm, tiền cổ thuộc nhóm sử liệu?', ['Phim ảnh hiện đại', 'Truyền miệng', 'Sách giáo khoa', 'Hiện vật (sơ cấp)'], 3, 'Hiện vật khảo cổ là sử liệu sơ cấp quan trọng.'),
    Q('Truyền thuyết "Lạc Long Quân - Âu Cơ" thuộc loại sử liệu?', ['Hiện vật', 'Văn bản chính sử', 'Truyền miệng', 'Phim ảnh'], 2, 'Truyền thuyết, ca dao, tục ngữ là sử liệu truyền miệng.'),
    Q('Bộ sử "Đại Việt sử ký toàn thư" thuộc loại?', ['Sử liệu chữ viết', 'Sử liệu hiện vật', 'Sử liệu truyền miệng', 'Truyền miệng'], 0, 'Sử thành văn (chữ viết) là loại sử liệu quan trọng.'),
    Q('Phương pháp nghiên cứu lịch sử KHÔNG bao gồm?', ['Sưu tầm sử liệu', 'Khảo cổ học', 'So sánh đối chiếu', 'Bịa số liệu'], 3, 'Bịa số liệu vi phạm nguyên tắc trung thực của Sử học.'),
    Q('Khảo cổ học giúp gì cho Sử học?', ['Cung cấp hiện vật, di tích để dựng lại quá khứ', 'Sản xuất hàng hoá', 'Du lịch', 'Tăng trưởng kinh tế'], 0, 'Khảo cổ tìm di tích, hiện vật để khôi phục bức tranh quá khứ.'),
  ]),

  M(3, 'Văn minh Ai Cập và Lưỡng Hà cổ đại', [
    Q('Văn minh Ai Cập cổ đại hình thành ven sông nào?', ['Sông Hằng', 'Sông Tigris', 'Sông Hoàng Hà', 'Sông Nile'], 3, 'Sông Nile là cái nôi của văn minh Ai Cập cổ đại.'),
    Q('Công trình tiêu biểu của Ai Cập cổ đại là?', ['Vạn lý trường thành', 'Đền Parthenon', 'Đấu trường Colosseum', 'Kim tự tháp'], 3, 'Kim tự tháp Giza là kỳ quan tiêu biểu của Ai Cập.'),
    Q('Văn minh Lưỡng Hà hình thành giữa hai sông?', ['Hằng và Ấn', 'Nile và Hằng', 'Tigris và Euphrates', 'Hoàng Hà và Trường Giang'], 2, 'Lưỡng Hà (Mesopotamia) nằm giữa Tigris và Euphrates ở Iraq ngày nay.'),
    Q('Bộ luật cổ nhất thế giới còn lưu giữ là?', ['Bộ luật Hồng Đức', 'Bộ luật Manu', 'Bộ luật Hammurabi', 'Bộ luật La Mã'], 2, 'Bộ luật Hammurabi của Babylon (~1750 TCN) là bộ luật cổ nổi tiếng.'),
    Q('Chữ viết của Ai Cập cổ đại gọi là?', ['Chữ La Mã', 'Chữ tượng hình (hieroglyph)', 'Chữ Latin', 'Chữ Hán'], 1, 'Hieroglyph là chữ tượng hình của Ai Cập.'),
    Q('Người Ai Cập cổ đại tin?', ['Không có niềm tin', 'Vô thần', 'Chỉ thờ tổ tiên', 'Linh hồn bất tử + thờ thần'], 3, 'Họ tin linh hồn bất tử, ướp xác, thờ nhiều vị thần (Ra, Osiris...).'),
  ]),

  M(4, 'Văn minh Trung Hoa cổ - trung đại', [
    Q('Văn minh Trung Hoa hình thành ven sông?', ['Hoàng Hà và Trường Giang', 'Sông Nile và Tigris', 'Mê Kông', 'Sông Hằng và sông Ấn'], 0, 'Lưu vực Hoàng Hà và Trường Giang là cái nôi của văn minh Trung Hoa.'),
    Q('Triều đại đầu tiên trong sử Trung Quốc là?', ['Hạ', 'Đường (618-907)', 'Hán (206 TCN-220)', 'Thương (Ân Thương)'], 0, 'Triều Hạ là triều đại đầu tiên (~2070 TCN, có tranh luận).'),
    Q('Người sáng lập triều Tần là?', ['Tần Thuỷ Hoàng', 'Lưu Bang', 'Khổng Tử', 'Tôn Quyền'], 0, 'Tần Thuỷ Hoàng (221 TCN) thống nhất Trung Hoa, lập triều Tần.'),
    Q('Công trình nổi tiếng của Trung Quốc cổ đại?', ['Kim tự tháp', 'Đền Parthenon', 'Đấu trường La Mã', 'Vạn Lý Trường Thành'], 3, 'Vạn Lý Trường Thành xây dựng từ thời Tần, hoàn thiện qua nhiều triều.'),
    Q('Khổng Tử sáng lập học thuyết?', ['Đạo giáo', 'Nho giáo', 'Phật giáo', 'Hồi giáo'], 1, 'Khổng Tử (551-479 TCN) sáng lập Nho giáo (Khổng giáo).'),
    Q('Tứ đại phát minh của Trung Quốc gồm?', ['Điện, radio, TV, máy tính', 'Đường, muối, vàng, ngọc', 'Bánh xe, lửa, đồng hồ, điện', 'Giấy, in ấn, la bàn, thuốc súng'], 3, 'Tứ đại phát minh: giấy, kỹ thuật in, la bàn, thuốc súng.'),
  ]),

  M(5, 'Văn minh Ấn Độ cổ - trung đại', [
    Q('Văn minh Ấn Độ cổ đại hình thành ven sông?', ['Sông Ấn (Indus) và Hằng (Ganges)', 'Hoàng Hà', 'Sông Nile và sông Lưỡng Hà', 'Tigris'], 0, 'Lưu vực sông Ấn và Hằng là cái nôi văn minh Ấn Độ.'),
    Q('Tôn giáo cổ nhất ở Ấn Độ là?', ['Phật giáo', 'Hồi giáo', 'Bà La Môn (Hindu giáo)', 'Kitô giáo'], 2, 'Hindu giáo (Bà La Môn) là tôn giáo bản địa cổ nhất Ấn Độ.'),
    Q('Phật giáo do ai sáng lập?', ['Khổng Tử', 'Thái tử Tất Đạt Đa (Siddhartha Gautama)', 'Muhammad', 'Lão Tử'], 1, 'Đức Phật Thích Ca Mâu Ni sáng lập Phật giáo vào thế kỷ VI TCN.'),
    Q('Chế độ đẳng cấp ở Ấn Độ cổ chia thành?', ['5 đẳng cấp', '4 đẳng cấp (varna)', '3 đẳng cấp', 'Không có đẳng cấp'], 1, 'Bốn varna: Brahmin, Kshatriya, Vaishya, Shudra; dưới cùng là Dalit.'),
    Q('Người Ấn Độ phát minh ra?', ['Hệ thập phân và số 0', 'Chữ tượng hình', 'La bàn và thuốc súng', 'Bánh xe'], 0, 'Hệ thập phân Ấn-Arab và số 0 là đóng góp lớn của Ấn Độ.'),
    Q('Sử thi nổi tiếng Ấn Độ là?', ['Tây du ký', 'Iliad và Odyssey (Hy Lạp)', 'Odyssey', 'Mahabharata và Ramayana'], 3, 'Mahabharata và Ramayana là hai sử thi lớn của Ấn Độ.'),
  ]),

  M(6, 'Văn minh Hy Lạp cổ đại', [
    Q('Hy Lạp cổ đại nằm ở khu vực?', ['Nam châu Âu, ven Địa Trung Hải', 'Bắc Mỹ', 'Đông Á', 'Bắc Phi'], 0, 'Hy Lạp ở phía nam bán đảo Balkan, ven Địa Trung Hải.'),
    Q('Mô hình thành bang (polis) tiêu biểu là?', ['Tokyo và Seoul', 'Rome và Cairo', 'Hà Nội và Sài Gòn', 'Athens và Sparta'], 3, 'Athens (dân chủ) và Sparta (quân phiệt) là hai thành bang nổi bật.'),
    Q('Athens nổi tiếng với chế độ?', ['Phong kiến', 'Cộng sản', 'Dân chủ trực tiếp', 'Quân chủ chuyên chế'], 2, 'Athens là cái nôi của nền dân chủ trực tiếp cổ đại.'),
    Q('Triết gia nổi tiếng Hy Lạp?', ['Pythagoras, Euclid, Archimedes', 'Socrates, Plato, Aristotle', 'Lão Tử', 'Khổng Tử'], 1, 'Bộ ba triết gia Hy Lạp: Socrates, Plato, Aristotle.'),
    Q('Đền Parthenon là biểu tượng của?', ['Babylon', 'Athens cổ đại', 'Đế chế La Mã thời Augustus', 'Sparta'], 1, 'Đền Parthenon trên đồi Acropolis là biểu tượng Athens.'),
    Q('Olympic cổ đại bắt đầu ở Hy Lạp năm?', ['776 TCN', '1896', '2000', '100 SCN'], 0, 'Thế vận hội Olympic cổ đại bắt đầu năm 776 TCN tại Olympia.'),
  ]),

  M(7, 'Văn minh La Mã cổ đại', [
    Q('La Mã cổ đại hình thành ở bán đảo?', ['Ý (Italy)', 'Iberia', 'Balkan', 'Hy Lạp'], 0, 'La Mã nằm trên bán đảo Italy, ven sông Tiber.'),
    Q('La Mã trải qua các giai đoạn?', ['Đế chế → Cộng hoà', 'Vương quốc → Cộng hoà → Đế chế', 'Cộng hoà → Phong kiến', 'Vô chính phủ'], 1, 'Lịch sử La Mã: Vương quốc (753-509 TCN) → Cộng hoà → Đế chế.'),
    Q('Julius Caesar là?', ['Lãnh tụ chính trị - quân sự La Mã', 'Nông dân', 'Triết gia', 'Hoàng đế đầu tiên'], 0, 'Caesar là nhà lãnh đạo quân sự La Mã cuối thời Cộng hoà.'),
    Q('Hoàng đế đầu tiên của đế chế La Mã là?', ['Augustus', 'Caesar', 'Marcus Aurelius', 'Hadrian'], 0, 'Augustus (Octavian) lên ngôi năm 27 TCN, lập đế chế La Mã.'),
    Q('Công trình kiến trúc nổi tiếng La Mã?', ['Kim tự tháp', 'Vạn lý trường thành', 'Đấu trường Colosseum', 'Đền Parthenon'], 2, 'Colosseum (80 SCN) là đấu trường biểu tượng của La Mã.'),
    Q('Hệ thống pháp luật La Mã có ảnh hưởng đến?', ['Không ảnh hưởng ai', 'Luật pháp các nước châu Âu hiện đại', 'Chỉ La Mã', 'Chỉ Hy Lạp'], 1, 'Luật La Mã (civil law) là nền tảng của hệ thống pháp luật châu Âu.'),
  ]),

  M(8, 'Văn minh Đông Nam Á', [
    Q('Đông Nam Á cổ đại có vị trí đặc biệt vì?', ['Là sa mạc', 'Là cực bắc', 'Là cầu nối Ấn Độ - Trung Hoa, hai nền văn minh lớn', 'Là cực nam'], 2, 'Đông Nam Á là cầu nối giao thương Ấn Độ - Trung Hoa.'),
    Q('Hai nền văn minh ảnh hưởng lớn nhất tới ĐNA cổ?', ['Hy Lạp và La Mã', 'Ấn Độ và Trung Hoa', 'Ai Cập và Babylon', 'Mỹ và Anh'], 1, 'Văn minh Ấn Độ (Champa, Phù Nam...) và Trung Hoa (Việt Nam) ảnh hưởng lớn.'),
    Q('Vương quốc Phù Nam tồn tại ở?', ['Bắc Việt Nam', 'Lưu vực hạ Mekong', 'Tây Tạng', 'Đảo Sumatra (Indonesia)'], 1, 'Phù Nam (TK I-VII) là vương quốc cổ ven hạ Mekong.'),
    Q('Vương quốc Champa tồn tại ở?', ['Miền Bắc Việt Nam', 'Miền Trung Việt Nam', 'Bắc Lào và Vân Nam', 'Campuchia'], 1, 'Champa (TK II-XVII) tồn tại ở miền Trung Việt Nam.'),
    Q('Angkor là đế chế của?', ['Thái Lan', 'Vương quốc Lan Xang (Lào)', 'Miến Điện', 'Khmer (Campuchia)'], 3, 'Đế chế Khmer (TK IX-XV) với đền Angkor Wat vĩ đại.'),
    Q('Borobudur ở Indonesia là?', ['Đền Hindu', 'Quần thể đền Phật giáo lớn nhất thế giới', 'Nhà thờ', 'Cung điện'], 1, 'Borobudur (TK IX) là quần thể đền Phật giáo trên đảo Java.'),
  ]),

  M(9, 'Văn minh Văn Lang - Âu Lạc', [
    Q('Nhà nước Văn Lang do ai lập?', ['An Dương Vương', 'Lý Thái Tổ', 'Trần Hưng Đạo', 'Hùng Vương'], 3, 'Vua Hùng (Lạc Long Quân) lập nhà nước Văn Lang — nhà nước đầu tiên của người Việt.'),
    Q('Văn Lang ra đời khoảng?', ['Thế kỷ I SCN', 'Thế kỷ V TCN', 'Thế kỷ VII TCN', 'Thế kỷ X'], 2, 'Văn Lang xuất hiện khoảng thế kỷ VII TCN.'),
    Q('Kinh đô của Văn Lang là?', ['Cổ Loa', 'Phong Châu (Phú Thọ)', 'Hoa Lư', 'Hà Nội'], 1, 'Kinh đô Văn Lang là Phong Châu (Phú Thọ ngày nay).'),
    Q('An Dương Vương lập nước?', ['Vạn Xuân', 'Đại Việt', 'Văn Lang', 'Âu Lạc'], 3, 'Thục Phán An Dương Vương đánh bại Hùng Vương, lập Âu Lạc (~257 TCN).'),
    Q('Kinh đô Âu Lạc là?', ['Thăng Long', 'Hoa Lư', 'Phong Châu', 'Cổ Loa'], 3, 'Cổ Loa (Đông Anh, Hà Nội) là kinh đô Âu Lạc với thành xoáy ốc nổi tiếng.'),
    Q('Văn hoá đặc trưng của thời kỳ Văn Lang là?', ['Văn hoá Hoà Bình', 'Văn hoá Óc Eo', 'Văn hoá Sa Huỳnh', 'Văn hoá Đông Sơn với trống đồng'], 3, 'Văn hoá Đông Sơn với trống đồng tinh xảo là đặc trưng thời Văn Lang - Âu Lạc.'),
  ]),

  M(10, 'Thời kỳ Bắc thuộc', [
    Q('Bắc thuộc bắt đầu khi?', ['Lê Lợi khởi nghĩa', 'Quang Trung lên ngôi', 'Triệu Đà chiếm Âu Lạc (179 TCN)', 'Lý Bí khởi nghĩa'], 2, 'Năm 179 TCN, Triệu Đà thôn tính Âu Lạc, mở đầu thời kỳ Bắc thuộc.'),
    Q('Bắc thuộc kéo dài khoảng?', ['100 năm', 'Hơn 1000 năm (179 TCN - 938)', '2000 năm', '500 năm'], 1, 'Bắc thuộc kéo dài hơn 1000 năm tới chiến thắng Bạch Đằng (938).'),
    Q('Hai Bà Trưng khởi nghĩa năm?', ['248', '905', '40', '542'], 2, 'Khởi nghĩa Hai Bà Trưng (40-43) chống nhà Đông Hán.'),
    Q('Bà Triệu khởi nghĩa năm?', ['542', '40', '248', '905'], 2, 'Bà Triệu khởi nghĩa năm 248 chống nhà Ngô.'),
    Q('Lý Bí dựng nước Vạn Xuân năm?', ['542 (khởi nghĩa); 544 (lên ngôi)', '905', '40', '938'], 0, 'Lý Bí khởi nghĩa 542, lên ngôi 544 lập nước Vạn Xuân.'),
    Q('Mai Thúc Loan khởi nghĩa năm?', ['938', '248', '905', '722'], 3, 'Khởi nghĩa Mai Thúc Loan (722) chống nhà Đường.'),
  ]),

  M(11, 'Họ Khúc và chiến thắng Bạch Đằng 938', [
    Q('Khúc Thừa Dụ giành quyền tự chủ năm?', ['905', '968', '938', '939'], 0, 'Năm 905, Khúc Thừa Dụ lập chính quyền tự chủ ở An Nam.'),
    Q('Người chỉ huy chiến thắng Bạch Đằng năm 938 là?', ['Ngô Quyền', 'Lê Lợi', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], 0, 'Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng năm 938.'),
    Q('Mưu kế cắm cọc nhọn trên sông Bạch Đằng do?', ['Trần Quốc Tuấn', 'Lý Thường Kiệt', 'Ngô Quyền sáng tạo', 'Trần Quốc Toản'], 2, 'Ngô Quyền cho cắm cọc nhọn dưới lòng sông, lợi dụng thuỷ triều phá quân Nam Hán.'),
    Q('Chiến thắng Bạch Đằng 938 có ý nghĩa?', ['Chỉ là một trận đánh nhỏ tại địa phương', 'Chấm dứt 1000 năm Bắc thuộc, mở kỷ nguyên độc lập', 'Bắt đầu Bắc thuộc', 'Mất nước'], 1, 'Chiến thắng kết thúc thời kỳ Bắc thuộc, mở ra kỷ nguyên độc lập.'),
    Q('Sau chiến thắng, Ngô Quyền xưng vương năm?', ['939', '968', '938', '905'], 0, 'Ngô Quyền xưng vương 939, đóng đô Cổ Loa.'),
    Q('Sau thời Ngô là thời kỳ?', ['Nhà Lý', 'Loạn 12 sứ quân', 'Nhà Trần', 'Nhà Đinh'], 1, 'Sau khi nhà Ngô suy yếu, đất nước rơi vào loạn 12 sứ quân.'),
  ]),

  M(12, 'Nhà Đinh - Tiền Lê', [
    Q('Người dẹp loạn 12 sứ quân là?', ['Lê Hoàn', 'Lý Công Uẩn', 'Ngô Quyền', 'Đinh Bộ Lĩnh'], 3, 'Đinh Bộ Lĩnh thống nhất các sứ quân, lập nhà Đinh năm 968.'),
    Q('Đinh Bộ Lĩnh lên ngôi xưng?', ['Lê Đại Hành', 'Lý Thái Tổ', 'Trần Thái Tông', 'Đinh Tiên Hoàng'], 3, 'Đinh Bộ Lĩnh xưng Đinh Tiên Hoàng, đặt quốc hiệu Đại Cồ Việt.'),
    Q('Kinh đô của Đại Cồ Việt là?', ['Cổ Loa', 'Phú Xuân', 'Hoa Lư (Ninh Bình)', 'Thăng Long'], 2, 'Hoa Lư (Ninh Bình) là kinh đô thời Đinh - Tiền Lê - đầu Lý.'),
    Q('Lê Hoàn lên ngôi lập nhà?', ['Tiền Lê', 'Lê Sơ (do Lê Lợi lập 1428)', 'Nhà Mạc (do Mạc Đăng Dung lập)', 'Hậu Lê'], 0, 'Lê Hoàn lập nhà Tiền Lê (980-1009).'),
    Q('Lê Hoàn đánh thắng quân?', ['Quân Thanh (cuối TK XVIII)', 'Quân Minh (đầu TK XV)', 'Tống', 'Quân Mông - Nguyên'], 2, 'Lê Đại Hành đánh tan quân Tống xâm lược năm 981.'),
    Q('Người lập nhà Lý là?', ['Lý Thường Kiệt', 'Lý Thái Tông', 'Lý Công Uẩn', 'Lý Anh Tông'], 2, 'Lý Công Uẩn (Lý Thái Tổ) lên ngôi 1009, lập nhà Lý.'),
  ]),

  M(13, 'Nhà Lý (1009-1225)', [
    Q('Năm 1010, Lý Thái Tổ?', ['Lập nhà Trần', 'Dời đô từ Hoa Lư về Thăng Long', 'Đầu hàng Tống', 'Đánh quân Tống'], 1, 'Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.'),
    Q('Quốc hiệu thời Lý là?', ['Vạn Xuân', 'Đại Ngu', 'Đại Cồ Việt', 'Đại Việt'], 3, 'Năm 1054, Lý Thánh Tông đổi quốc hiệu thành Đại Việt.'),
    Q('Lý Thường Kiệt nổi tiếng với chiến thắng?', ['Bạch Đằng 938', 'Điện Biên Phủ', 'Như Nguyệt (1077) chống quân Tống', 'Đống Đa'], 2, 'Lý Thường Kiệt đánh tan quân Tống trên sông Như Nguyệt năm 1077.'),
    Q('Bài thơ "Nam quốc sơn hà" được cho là của?', ['Lê Lợi', 'Nguyễn Trãi', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], 2, 'Nam quốc sơn hà — "Tuyên ngôn độc lập đầu tiên" của Việt Nam.'),
    Q('Quốc Tử Giám được lập năm?', ['1076', '1407', '1010', '1054'], 0, 'Năm 1076, Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.'),
    Q('Nhà Lý sụp đổ năm?', ['1010', '1428', '1400', '1225'], 3, 'Năm 1225, nhà Lý mất ngôi vào tay nhà Trần qua Lý Chiêu Hoàng → Trần Cảnh.'),
  ]),

  M(14, 'Nhà Trần (1225-1400)', [
    Q('Người sáng lập nhà Trần là?', ['Trần Quốc Toản', 'Trần Nhật Duật', 'Trần Hưng Đạo', 'Trần Cảnh (Trần Thái Tông) qua dàn xếp của Trần Thủ Độ'], 3, 'Trần Thủ Độ đưa Trần Cảnh lên ngôi (1226), lập nhà Trần.'),
    Q('Nhà Trần 3 lần đánh bại quân?', ['Tống (cuối TK XI)', 'Thanh (cuối TK XVIII)', 'Mông - Nguyên', 'Minh (đầu TK XV)'], 2, 'Nhà Trần ba lần (1258, 1285, 1287-88) đánh thắng quân Mông - Nguyên.'),
    Q('Trần Hưng Đạo nổi tiếng với chiến thắng?', ['Như Nguyệt', 'Đống Đa', 'Bạch Đằng 1288', 'Rạch Gầm'], 2, 'Trận Bạch Đằng 1288, Trần Hưng Đạo tái dụng kế cọc nhọn, diệt quân Nguyên.'),
    Q('Hịch tướng sĩ là tác phẩm của?', ['Nguyễn Trãi', 'Lê Lợi', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], 3, 'Hịch tướng sĩ do Trần Hưng Đạo viết, kêu gọi tướng sĩ đánh giặc.'),
    Q('Hội nghị Diên Hồng bàn về?', ['Thuế khoá', 'Tôn giáo', 'Khoa cử', 'Đánh hay hoà với quân Nguyên (1284)'], 3, 'Diên Hồng (1284) các bô lão đồng thanh "đánh" khi quân Nguyên sang xâm lược lần 2.'),
    Q('Chữ Nôm phát triển mạnh từ thời?', ['Ngô (939-965)', 'Đinh (968-980)', 'Lý (1009-1225)', 'Trần'], 3, 'Chữ Nôm phát triển mạnh ở thời Trần (đặc biệt sáng tác của Nguyễn Thuyên).'),
  ]),

  M(15, 'Nhà Hồ và 20 năm Bắc thuộc lần 2', [
    Q('Người lật đổ nhà Trần lập nhà Hồ là?', ['Mạc Đăng Dung', 'Trần Thuận Tông', 'Hồ Hán Thương', 'Hồ Quý Ly'], 3, 'Hồ Quý Ly cướp ngôi nhà Trần năm 1400.'),
    Q('Quốc hiệu thời Hồ là?', ['Đại Cồ Việt', 'Vạn Xuân', 'Đại Ngu', 'Đại Việt'], 2, 'Hồ Quý Ly đổi quốc hiệu thành Đại Ngu.'),
    Q('Cải cách nổi tiếng của Hồ Quý Ly là?', ['Tiền giấy, hạn điền, hạn nô', 'Quân chủ lập hiến', 'Lập hợp tác xã', 'Khoán ruộng'], 0, 'Hồ Quý Ly tiến hành cải cách: tiền giấy, hạn điền, hạn nô tỳ.'),
    Q('Nhà Hồ sụp đổ năm?', ['1428', '1284', '1400', '1407 (quân Minh xâm lược)'], 3, 'Năm 1407, quân Minh đánh bại nhà Hồ, bắt đầu thời Minh thuộc.'),
    Q('Thời Minh thuộc kéo dài?', ['5 năm', '1000 năm', '20 năm (1407-1427)', '100 năm'], 2, 'Minh thuộc kéo dài 20 năm với chính sách đồng hoá khắc nghiệt.'),
    Q('Cuộc khởi nghĩa lớn chống Minh thành công là?', ['Đông Sơn', 'Lam Sơn (Lê Lợi)', 'Tây Sơn', 'Cần Vương'], 1, 'Khởi nghĩa Lam Sơn (1418-1427) do Lê Lợi lãnh đạo đánh tan quân Minh.'),
  ]),

  M(16, 'Nhà Lê Sơ (1428-1527)', [
    Q('Lê Lợi lên ngôi xưng?', ['Lê Nhân Tông', 'Lê Thánh Tông', 'Lê Thái Tổ', 'Lê Hiển Tông'], 2, 'Lê Lợi (Lê Thái Tổ) lên ngôi 1428 sau chiến thắng quân Minh.'),
    Q('Quốc hiệu thời Lê Sơ là?', ['Đại Việt', 'Việt Nam', 'Đại Cồ Việt', 'Đại Ngu'], 0, 'Lê Sơ khôi phục quốc hiệu Đại Việt.'),
    Q('Bộ luật Hồng Đức do?', ['Lý Thái Tổ', 'Lê Thái Tổ', 'Trần Thái Tông', 'Lê Thánh Tông ban hành'], 3, 'Lê Thánh Tông ban hành Quốc Triều Hình Luật (Hồng Đức) — bộ luật tiến bộ.'),
    Q('Lê Thánh Tông tổ chức bộ máy hành chính chia thành?', ['5 vùng', '13 đạo (sau là thừa tuyên)', '10 tỉnh', '3 miền'], 1, 'Năm 1471, Lê Thánh Tông chia cả nước thành 13 đạo.'),
    Q('Bình Ngô Đại Cáo do ai soạn?', ['Nguyễn Trãi', 'Trần Hưng Đạo', 'Lê Thánh Tông', 'Lê Lợi'], 0, 'Nguyễn Trãi soạn Bình Ngô Đại Cáo — bản tuyên ngôn độc lập thứ 2.'),
    Q('Nhà Lê Sơ kết thúc khi?', ['Quân Minh xâm lược', 'Mạc Đăng Dung cướp ngôi (1527)', 'Quân Tống xâm lược', 'Pháp xâm lược'], 1, 'Năm 1527, Mạc Đăng Dung cướp ngôi nhà Lê, lập nhà Mạc.'),
  ]),

  M(17, 'Thời Lê - Mạc và Nam - Bắc triều', [
    Q('Nhà Mạc thành lập năm?', ['1428', '1592', '1400', '1527'], 3, 'Mạc Đăng Dung cướp ngôi nhà Lê năm 1527, lập nhà Mạc.'),
    Q('Nguyễn Kim phù Lê chống Mạc lập?', ['Triều Nguyễn', 'Bắc triều', 'Nam triều (Lê)', 'Triều Tây Sơn'], 2, 'Nguyễn Kim phù trì nhà Lê lập Nam triều ở Thanh Hoá, đối đầu Bắc triều (Mạc).'),
    Q('Cuộc chiến Nam - Bắc triều kéo dài?', ['100 năm', '5 năm', '10 năm', 'Hơn 60 năm (1533-1592)'], 3, 'Chiến tranh Lê - Mạc kéo dài hơn 60 năm, nhà Mạc bị diệt năm 1592.'),
    Q('Năm 1592, nhà Mạc?', ['Lập nhà Trịnh', 'Thống nhất đất nước', 'Đầu hàng Pháp', 'Bị Trịnh Tùng đánh bại, rút lên Cao Bằng'], 3, 'Trịnh Tùng chiếm Thăng Long 1592; nhà Mạc rút lên Cao Bằng.'),
    Q('Sau Mạc, quyền lực thực sự nằm trong tay?', ['Quân Minh', 'Chúa Nguyễn', 'Vua Lê', 'Chúa Trịnh'], 3, 'Vua Lê chỉ là bù nhìn, chúa Trịnh nắm quyền thực tế ở Bắc Hà.'),
    Q('Người sáng lập dòng họ chúa Nguyễn ở Đàng Trong?', ['Nguyễn Ánh', 'Nguyễn Kim', 'Nguyễn Phúc Khoát', 'Nguyễn Hoàng'], 3, 'Nguyễn Hoàng vào Thuận Hoá 1558, mở đầu thời kỳ chúa Nguyễn.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Văn hoá Đông Sơn là đặc trưng thời?', ['Lý (1009-1225)', 'Lê Sơ (1428-1527)', 'Văn Lang - Âu Lạc', 'Trần (1225-1400)'], 2, 'Văn hoá Đông Sơn với trống đồng là đặc trưng Văn Lang - Âu Lạc.'),
    Q('Ai lãnh đạo chiến thắng Bạch Đằng 938?', ['Ngô Quyền', 'Lê Lợi', 'Trần Hưng Đạo', 'Lý Thường Kiệt'], 0, 'Ngô Quyền chiến thắng Bạch Đằng năm 938.'),
    Q('Đại Việt là quốc hiệu thời?', ['Văn Lang', 'Lý', 'Đại Ngu', 'Vạn Xuân'], 1, 'Đại Việt là quốc hiệu từ thời Lý (1054) đến hết Lê Sơ.'),
    Q('Bộ luật Hồng Đức của thời nào?', ['Lý (Hình thư 1042)', 'Lê Sơ', 'Trần (Quốc triều hình luật)', 'Nguyễn'], 1, 'Hồng Đức do Lê Thánh Tông ban hành.'),
    Q('Nhà Trần ba lần đánh bại quân?', ['Thanh (cuối TK XVIII)', 'Mông - Nguyên', 'Minh (đầu TK XV)', 'Tống (cuối TK XI)'], 1, 'Nhà Trần ba lần đánh bại Mông - Nguyên (TK XIII).'),
    Q('Khởi nghĩa Lam Sơn do ai lãnh đạo?', ['Quang Trung', 'Trần Hưng Đạo', 'Lê Lợi', 'Lý Thường Kiệt'], 2, 'Lê Lợi lãnh đạo khởi nghĩa Lam Sơn (1418-1427).'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Đàng Trong - Đàng Ngoài', [
    Q('Đất nước chia thành Đàng Trong - Đàng Ngoài lấy mốc?', ['Sông Cửu Long', 'Sông Hồng', 'Sông Mã', 'Sông Gianh'], 3, 'Sông Gianh (Quảng Bình) là ranh giới Đàng Trong (Nguyễn) - Đàng Ngoài (Trịnh).'),
    Q('Đàng Ngoài thuộc quyền?', ['Nhà Mạc ở Cao Bằng', 'Vua Lê - Chúa Trịnh', 'Thực dân Pháp', 'Chúa Nguyễn'], 1, 'Đàng Ngoài: vua Lê làm bù nhìn, chúa Trịnh nắm quyền.'),
    Q('Đàng Trong thuộc quyền?', ['Nhà Mạc ở Cao Bằng', 'Chúa Trịnh', 'Vua Lê', 'Chúa Nguyễn'], 3, 'Đàng Trong: chúa Nguyễn cai quản từ Quảng Bình vào Nam.'),
    Q('Chiến tranh Trịnh - Nguyễn kéo dài?', ['1 năm', '200 năm', '100 năm', 'Khoảng 50 năm (1627-1672)'], 3, 'Trịnh - Nguyễn đánh nhau 7 lần lớn từ 1627-1672, không phân thắng bại.'),
    Q('Đàng Trong mở rộng lãnh thổ về phía?', ['Bắc (giành lại đất Tống)', 'Nam (vào ĐBSCL)', 'Tây Tạng', 'Đông Bắc'], 1, 'Chúa Nguyễn khai phá ĐBSCL, mở mang lãnh thổ về phía nam.'),
    Q('Thời này, đạo nào du nhập vào VN?', ['Bà La Môn', 'Thiên Chúa giáo', 'Do Thái giáo', 'Hồi giáo'], 1, 'Thiên Chúa giáo du nhập từ TK XVI qua các giáo sĩ phương Tây.'),
  ]),

  M(20, 'Khởi nghĩa Tây Sơn (phần 1)', [
    Q('Anh em Tây Sơn gồm?', ['Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ', 'Nguyễn Trãi', 'Lê Lợi, Lê Lai', 'Trần Hưng Đạo, Trần Quốc Toản'], 0, 'Ba anh em Tây Sơn: Nhạc, Huệ, Lữ khởi nghĩa năm 1771.'),
    Q('Khởi nghĩa Tây Sơn bùng nổ năm?', ['1428', '1858', '1789', '1771'], 3, 'Khởi nghĩa Tây Sơn bùng nổ năm 1771 ở Bình Định.'),
    Q('Tây Sơn lật đổ?', ['Thực dân Pháp xâm lược', 'Quân Minh đô hộ', '29 vạn quân Thanh', 'Chúa Nguyễn rồi Chúa Trịnh'], 3, 'Tây Sơn lần lượt diệt chúa Nguyễn (Đàng Trong) và chúa Trịnh (Đàng Ngoài).'),
    Q('Năm 1785, Nguyễn Huệ thắng quân Xiêm tại?', ['Rạch Gầm - Xoài Mút', 'Như Nguyệt', 'Đống Đa', 'Bạch Đằng'], 0, 'Trận Rạch Gầm - Xoài Mút (1785) đánh tan 5 vạn quân Xiêm.'),
    Q('Năm 1786, Nguyễn Huệ?', ['Đánh quân Thanh', 'Tiến ra Bắc lật đổ chúa Trịnh', 'Chia đất', 'Đầu hàng'], 1, 'Năm 1786, Nguyễn Huệ tiến ra Bắc tiêu diệt họ Trịnh.'),
    Q('Nguyễn Huệ lên ngôi xưng?', ['Quang Trung Hoàng đế', 'Trần Thái Tông', 'Lê Đại Hành', 'Lý Thái Tổ'], 0, 'Nguyễn Huệ lên ngôi cuối 1788, xưng Quang Trung Hoàng đế.'),
  ]),

  M(21, 'Tây Sơn (phần 2) - Quang Trung đại phá quân Thanh', [
    Q('Lê Chiêu Thống cầu cứu?', ['Bồ Đào Nha', 'Triều đình Mãn Châu (Bát Kỳ)', 'Thực dân Pháp ở Đông Dương', 'Nhà Thanh'], 3, 'Lê Chiêu Thống cầu cứu Càn Long nhà Thanh đem 29 vạn quân sang.'),
    Q('Quân Thanh tiến vào Thăng Long năm?', ['Cuối 1788', '1858', '1771', '1428'], 0, 'Tôn Sĩ Nghị đem 29 vạn quân Thanh tiến vào Thăng Long cuối 1788.'),
    Q('Quang Trung hành quân thần tốc và đại phá quân Thanh vào?', ['Tết Kỷ Dậu 1789', '1771', '1802', '1786'], 0, 'Tết Kỷ Dậu 1789, Quang Trung đại phá 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa.'),
    Q('Trận Ngọc Hồi - Đống Đa là?', ['Đại bại', 'Hoà hoãn', 'Đại thắng quân Thanh của Quang Trung', 'Đánh nhau với Pháp'], 2, 'Ngọc Hồi - Đống Đa là đỉnh cao của khởi nghĩa Tây Sơn.'),
    Q('Quang Trung mất năm?', ['1792', '1802', '1771', '1789'], 0, 'Quang Trung Nguyễn Huệ mất đột ngột năm 1792.'),
    Q('Sau Quang Trung mất, Tây Sơn?', ['Suy yếu nhanh chóng', 'Đại thắng', 'Mở rộng lãnh thổ', 'Tồn tại lâu'], 0, 'Sau Quang Trung mất 1792, nội bộ Tây Sơn lục đục, suy yếu.'),
  ]),

  M(22, 'Nhà Nguyễn (1802-1858) — Thiết lập', [
    Q('Người sáng lập nhà Nguyễn là?', ['Nguyễn Hoàng', 'Nguyễn Huệ', 'Nguyễn Ánh (Gia Long)', 'Nguyễn Trãi'], 2, 'Nguyễn Ánh lên ngôi 1802, xưng Gia Long, lập nhà Nguyễn.'),
    Q('Quốc hiệu thời Nguyễn (1804) là?', ['Việt Nam', 'Đại Cồ Việt', 'Đại Nam', 'Đại Việt'], 0, 'Năm 1804, Gia Long đặt quốc hiệu Việt Nam; sau Minh Mạng đổi Đại Nam.'),
    Q('Kinh đô nhà Nguyễn là?', ['Hà Nội', 'Hoa Lư', 'Phú Xuân (Huế)', 'Sài Gòn'], 2, 'Phú Xuân (Huế) là kinh đô nhà Nguyễn từ 1802.'),
    Q('Bộ luật thời Nguyễn là?', ['Hoàng Việt luật lệ (luật Gia Long)', 'Hồng Đức', 'Hình thư', 'Triều Trần'], 0, 'Hoàng Việt luật lệ (luật Gia Long) ban hành 1815.'),
    Q('Vua Minh Mạng chia cả nước thành?', ['5 xứ', '13 đạo', '30 tỉnh + phủ Thừa Thiên', '3 miền'], 2, 'Minh Mạng cải cách hành chính: cả nước 30 tỉnh + phủ Thừa Thiên.'),
    Q('Nhà Nguyễn thực hiện chính sách "bế quan toả cảng" với?', ['Trung Quốc', 'Campuchia', 'Phương Tây', 'Xiêm La (Thái Lan)'], 2, 'Bế quan toả cảng: hạn chế giao lưu với phương Tây, dẫn tới tụt hậu.'),
  ]),

  M(23, 'Văn minh Đại Việt - Tổng quan', [
    Q('Văn minh Đại Việt là?', ['Văn minh Ấn Độ', 'Văn minh của quốc gia Đại Việt trong thời độc lập tự chủ', 'Văn minh Pháp', 'Văn minh Trung Quốc'], 1, 'Văn minh Đại Việt là thành tựu của quốc gia Đại Việt thời độc lập (X-XIX).'),
    Q('Cơ sở hình thành văn minh Đại Việt?', ['Học từ Pháp', 'Truyền thống Văn Lang + tiếp thu văn minh khu vực', 'Mượn nguyên Trung Hoa', 'Tự sinh'], 1, 'Văn minh Đại Việt kế thừa Văn Lang - Âu Lạc, tiếp thu chọn lọc văn minh khu vực.'),
    Q('Văn minh Đại Việt có những thành tựu lớn về?', ['Kinh tế, chính trị, văn hoá, giáo dục, KHKT', 'Chỉ kinh tế', 'Chỉ tôn giáo', 'Chỉ chính trị'], 0, 'Đa dạng: nông nghiệp, thủ công, chính trị, văn học, sử học, kiến trúc...'),
    Q('Tư tưởng chủ đạo của văn minh Đại Việt là?', ['Chỉ Phật', 'Chỉ Nho', 'Chỉ Đạo', 'Tam giáo đồng nguyên (Nho - Phật - Đạo)'], 3, 'Nho - Phật - Đạo cùng tồn tại và bổ sung lẫn nhau.'),
    Q('Giáo dục thời Đại Việt nổi bật với?', ['Đại học phương Tây', 'Trường tư thục', 'Khoa cử và Quốc Tử Giám', 'Trường nội trú'], 2, 'Khoa cử Nho học và Quốc Tử Giám là trục giáo dục chính.'),
    Q('Văn học Đại Việt phát triển mạnh ở giai đoạn nào?', ['Đinh - Tiền Lê', 'Bắc thuộc', 'Lý - Trần - Lê', 'Nguyễn duy nhất'], 2, 'Văn học chữ Hán và chữ Nôm phát triển rực rỡ Lý - Trần - Lê.'),
  ]),

  M(24, 'Văn minh Đại Việt - Chính trị và pháp luật', [
    Q('Mô hình nhà nước Đại Việt là?', ['Phong kiến phân quyền', 'Quân chủ tập quyền', 'Cộng hoà', 'Dân chủ đại nghị'], 1, 'Nhà nước Đại Việt là quân chủ tập quyền với vua đứng đầu.'),
    Q('Lý - Trần tổ chức bộ máy theo mô hình?', ['Liên bang', 'Trung ương + địa phương 3 cấp', 'Quận - huyện', 'Tỉnh - thành'], 1, 'Trung ương: vua + quan; địa phương 3 cấp: lộ/phủ - huyện - xã.'),
    Q('Bộ luật đầu tiên còn ghi nhận là?', ['Hồng Đức (Lê)', 'Hình thư (Lý)', 'Gia Long (Nguyễn)', 'Triều Trần'], 1, 'Hình thư của nhà Lý là bộ luật thành văn đầu tiên (chỉ còn tên).'),
    Q('Bộ luật tiến bộ nhất thời Lê Sơ là?', ['Triều Trần', 'Gia Long', 'Quốc triều hình luật (Hồng Đức)', 'Hình thư'], 2, 'Hồng Đức có nhiều điều bảo vệ phụ nữ, người yếu thế, rất tiến bộ.'),
    Q('Quân đội Đại Việt tổ chức theo nguyên tắc?', ['Quân đánh thuê', 'Chỉ huyền tinh nhuệ', 'Toàn dân quân', '"Ngụ binh ư nông"'], 3, 'Ngụ binh ư nông: lính khi không chiến đấu thì làm ruộng.'),
    Q('Vua đứng đầu nhà nước, có quyền?', ['Chỉ ban thưởng', 'Không quyền', 'Hành pháp, lập pháp, tư pháp tối cao', 'Chỉ tế lễ'], 2, 'Vua nắm cả 3 quyền, là người ra luật, ra quyết định và xét xử cao nhất.'),
  ]),

  M(25, 'Văn minh Đại Việt - Kinh tế', [
    Q('Kinh tế chính của Đại Việt là?', ['Du lịch', 'Công nghiệp', 'Dịch vụ', 'Nông nghiệp lúa nước'], 3, 'Nông nghiệp lúa nước là kinh tế chủ đạo của Đại Việt.'),
    Q('Chính sách ruộng đất nổi bật thời Lý - Trần?', ['Đấu thầu', 'Thuê đất', 'Quân điền + điền trang thái ấp', 'Cổ phần'], 2, 'Lý - Trần có chế độ điền trang thái ấp; Lê Sơ làm quân điền chia ruộng.'),
    Q('Thủ công nghiệp Đại Việt phát triển mạnh với?', ['Sắt thép', 'Điện tử', 'Gốm Bát Tràng, lụa Hà Đông, đồng Đại Bái', 'Dầu mỏ'], 2, 'Các làng nghề thủ công gốm, lụa, đồng nổi tiếng cả nước.'),
    Q('Thương cảng nổi tiếng thời Đại Việt?', ['Hải Phòng', 'Vân Đồn, Phố Hiến, Hội An', 'Đà Nẵng', 'Sài Gòn'], 1, 'Vân Đồn (Quảng Ninh), Phố Hiến (Hưng Yên), Hội An (Quảng Nam) là cảng thị lớn.'),
    Q('Tiền đầu tiên của Đại Việt là?', ['Vàng nén', 'Đồng tiền "Đại Việt" thời Đinh', 'Đồng đô la', 'Vải lụa và muối'], 1, 'Tiền đầu tiên xuất hiện thời Đinh (TK X).'),
    Q('Tiền giấy đầu tiên ở VN thời?', ['Trần (Thái Bình hưng bảo)', 'Hồ Quý Ly', 'Lý (Thuận Thiên đại bảo)', 'Lê Sơ (Hồng Đức thông bảo)'], 1, 'Hồ Quý Ly phát hành tiền giấy "Thông bảo hội sao" — đầu tiên ở VN.'),
  ]),

  M(26, 'Văn minh Đại Việt - Giáo dục và khoa cử', [
    Q('Quốc Tử Giám lập năm?', ['1010', '1407', '1076', '1284'], 2, 'Lý Nhân Tông lập Quốc Tử Giám năm 1076.'),
    Q('Khoa thi Nho học đầu tiên ở VN tổ chức năm?', ['1054', '1010', '1075', '1428'], 2, 'Năm 1075, khoa thi Minh kinh bác học là khoa thi Nho học đầu tiên.'),
    Q('Khoa cử Đại Việt gồm 3 cấp?', ['Hương - Hội - Đình', 'Tiểu - Trung - Đại', 'Cử nhân - Thạc sĩ - TS', 'Phổ thông - Đại học - Sau ĐH'], 0, 'Khoa cử 3 cấp: thi Hương → thi Hội → thi Đình.'),
    Q('Người đỗ đầu thi Đình được gọi là?', ['Trạng nguyên', 'Thám hoa', 'Bảng nhãn', 'Hoàng giáp'], 0, 'Trạng nguyên là người đỗ đầu thi Đình (cao nhất).'),
    Q('Văn Miếu - Quốc Tử Giám hiện ở?', ['Đà Nẵng', 'Hà Nội', 'TP.HCM', 'Cố đô Huế'], 1, 'Văn Miếu - Quốc Tử Giám tại Hà Nội là biểu tượng giáo dục Đại Việt.'),
    Q('Bia tiến sĩ ở Văn Miếu được lập từ thời?', ['Lê Sơ (1484)', 'Nguyễn', 'Trần (TK XIII-XIV)', 'Lý (mở Quốc Tử Giám 1076)'], 0, 'Năm 1484, Lê Thánh Tông cho lập bia tiến sĩ tại Văn Miếu.'),
  ]),

  M(27, 'Văn minh Đại Việt - Văn học và nghệ thuật', [
    Q('Văn học Đại Việt phát triển bằng các loại chữ?', ['Chỉ chữ Nôm', 'Chữ Latin', 'Chữ Hán và chữ Nôm', 'Chỉ chữ Hán'], 2, 'Đại Việt dùng chữ Hán làm chữ chính thức + chữ Nôm dân tộc.'),
    Q('Tác phẩm "Truyện Kiều" của?', ['Nguyễn Du', 'Hồ Xuân Hương', 'Lê Quý Đôn', 'Nguyễn Trãi'], 0, 'Nguyễn Du (1766-1820) viết Truyện Kiều bằng chữ Nôm — kiệt tác văn học.'),
    Q('Hồ Xuân Hương được mệnh danh là?', ['Bà chúa thơ Nôm', 'Vua thơ Hán', 'Vua truyện', 'Vua sử'], 0, 'Hồ Xuân Hương — "Bà chúa thơ Nôm" với phong cách táo bạo, phá cách.'),
    Q('Nhà sử học lớn thời Trần - Lê là?', ['Nguyễn Trãi', 'Hồ Xuân Hương', 'Nguyễn Du', 'Lê Văn Hưu, Ngô Sĩ Liên'], 3, 'Lê Văn Hưu (Đại Việt sử ký), Ngô Sĩ Liên (Đại Việt sử ký toàn thư).'),
    Q('Kiến trúc nổi tiếng Đại Việt?', ['Colosseum', 'Vạn lý trường thành', 'Chùa Một Cột, Tháp Phổ Minh, Văn Miếu', 'Kim tự tháp'], 2, 'Chùa Một Cột (Lý), Tháp Phổ Minh (Trần), Văn Miếu là kiến trúc tiêu biểu.'),
    Q('Loại hình nghệ thuật biểu diễn dân gian VN?', ['Cải lương và tân nhạc tiền chiến', 'Chèo, tuồng, ca trù, quan họ', 'Kinh kịch Trung Quốc', 'Ballet'], 1, 'Chèo, tuồng, ca trù, quan họ, hát xẩm... là nghệ thuật biểu diễn truyền thống.'),
  ]),

  M(28, 'Văn minh Đại Việt - Khoa học kỹ thuật', [
    Q('Tác phẩm y học nổi tiếng của Lê Hữu Trác (Hải Thượng Lãn Ông)?', ['Đại Việt sử ký', 'Hải Thượng y tông tâm lĩnh', 'Vũ trung tuỳ bút', 'Truyện Kiều'], 1, 'Hải Thượng y tông tâm lĩnh là bộ sách y học lớn của Hải Thượng Lãn Ông.'),
    Q('Tuệ Tĩnh có công với ngành?', ['Quân sự', 'Toán học', 'Y học cổ truyền VN', 'Thiên văn'], 2, 'Tuệ Tĩnh (TK XIV) — Thánh thuốc Nam, tổ ngành y học cổ truyền VN.'),
    Q('Lê Quý Đôn là?', ['Vua khai sáng triều Lê Trung Hưng', 'Tướng quân', 'Thầy chùa', 'Nhà bác học lớn thời Lê - Trịnh'], 3, 'Lê Quý Đôn (1726-1784) là nhà bác học lớn với nhiều tác phẩm sử, địa, văn.'),
    Q('Tác phẩm địa lý của Lê Quý Đôn?', ['Đại Việt sử ký', 'Hồng Đức', 'Phủ Biên tạp lục', 'Truyện Kiều'], 2, 'Phủ Biên tạp lục viết về vùng Thuận - Quảng (Đàng Trong).'),
    Q('Tác giả Đại Nam thực lục là?', ['Ngô Sĩ Liên', 'Lê Văn Hưu', 'Nguyễn Du', 'Quốc sử quán triều Nguyễn'], 3, 'Đại Nam thực lục do Quốc sử quán triều Nguyễn biên soạn.'),
    Q('Đại Nam nhất thống chí là?', ['Tiểu thuyết', 'Tập thơ chữ Nôm của Nguyễn Du', 'Bộ địa lý lịch sử lớn triều Nguyễn', 'Sách thuốc của Hải Thượng Lãn Ông'], 2, 'Đại Nam nhất thống chí mô tả địa lý, hành chính cả nước thời Nguyễn.'),
  ]),

  M(29, 'Văn minh Đại Việt - Tôn giáo và tín ngưỡng', [
    Q('Ba tôn giáo lớn ở Đại Việt thời trung đại?', ['Hồi - Do Thái - Kitô', 'Hindu - Hồi - Bà La Môn', 'Nho - Phật - Đạo (Lão)', 'Cao Đài - Hoà Hảo'], 2, 'Tam giáo: Nho giáo, Phật giáo, Đạo giáo (Lão giáo).'),
    Q('Phật giáo phát triển mạnh nhất ở thời?', ['Lê Sơ (Nho giáo độc tôn)', 'Nguyễn', 'Bắc thuộc', 'Lý - Trần'], 3, 'Phật giáo là quốc giáo thời Lý - Trần, ảnh hưởng sâu rộng.'),
    Q('Nho giáo lên ngôi quốc giáo thời?', ['Trần (Phật giáo còn hưng thịnh)', 'Lê Sơ', 'Đinh (vừa giành độc lập)', 'Lý (Phật giáo là quốc giáo)'], 1, 'Lê Sơ (đặc biệt Lê Thánh Tông) đưa Nho giáo lên thành tư tưởng chính thức.'),
    Q('Thiên Chúa giáo du nhập VN từ?', ['TK V theo đường Tơ Lụa', 'TK XVI qua giáo sĩ phương Tây', 'TK X cùng các nhà sư Trung Hoa', 'TK XIX'], 1, 'Thiên Chúa giáo theo các giáo sĩ Bồ Đào Nha, Pháp vào VN từ TK XVI.'),
    Q('Tín ngưỡng dân gian VN nổi bật là?', ['Thờ động vật', 'Thờ cúng tổ tiên, thờ Mẫu, thờ thành hoàng', 'Thờ Mặt Trời', 'Vô thần'], 1, 'Người Việt thờ tổ tiên, thờ Mẫu, thành hoàng làng là tín ngưỡng chủ đạo.'),
    Q('Tín ngưỡng thờ Hùng Vương được tôn vinh là?', ['Quốc bảo lưu giữ trong bảo tàng', 'Tài liệu mật của triều Nguyễn', 'Di sản văn hoá phi vật thể UNESCO', 'Lễ hội địa phương riêng tỉnh Phú Thọ'], 2, 'Năm 2012, UNESCO công nhận tín ngưỡng thờ Hùng Vương là di sản phi vật thể.'),
  ]),

  M(30, 'Việt Nam đầu TK XIX trước khi Pháp xâm lược', [
    Q('Đầu TK XIX, VN có vị trí?', ['Thuộc Pháp', 'Quốc gia thống nhất từ Lạng Sơn đến Cà Mau', 'Thuộc Trung Quốc', 'Bị chia 2 miền'], 1, 'Sau khi Gia Long thống nhất 1802, VN là quốc gia liền dải Bắc - Nam.'),
    Q('Diện tích VN đầu TK XIX khoảng?', ['Chỉ Đông Bắc Bộ', 'Chỉ Nam Bộ', 'Tương đương ngày nay (sau khi chiếm Tây Nguyên muộn hơn)', 'Cả Lào Campuchia'], 2, 'Lãnh thổ VN đầu TK XIX gần với hình dạng ngày nay.'),
    Q('Kinh tế VN đầu TK XIX chủ yếu?', ['Nông nghiệp tự cấp', 'Du lịch', 'Dầu mỏ', 'Công nghiệp nặng'], 0, 'Kinh tế nông nghiệp tự cấp, kỹ thuật canh tác lạc hậu so với phương Tây.'),
    Q('Chính sách ngoại giao của nhà Nguyễn là?', ['Đầu hàng', '"Bế quan toả cảng" với phương Tây', 'Mở cửa hoàn toàn', 'Đánh tất cả'], 1, 'Bế quan toả cảng → tụt hậu, mất cơ hội canh tân.'),
    Q('Đề nghị canh tân của Nguyễn Trường Tộ bị?', ['Chấp nhận hoàn toàn', 'Áp dụng ngay', 'Áp dụng một phần ở Nam Kỳ', 'Triều đình không chấp nhận'], 3, 'Nguyễn Trường Tộ dâng nhiều bản điều trần nhưng bị triều đình bỏ qua.'),
    Q('Năm 1858, sự kiện gì xảy ra?', ['Mạc Đăng Dung cướp ngôi', 'Quang Trung đại phá quân Thanh', 'Nguyễn Ánh lên ngôi', 'Pháp nổ súng tấn công Đà Nẵng'], 3, 'Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công Đà Nẵng — mở đầu xâm lược.'),
  ]),

  M(31, 'Văn minh thế giới TK XV-XVIII', [
    Q('Phong trào Phục Hưng (Renaissance) ở châu Âu là?', ['Cách mạng tư sản', 'Khôi phục văn minh Hy - La và phát triển nhân văn', 'Cách mạng công nghiệp', 'Quay về Trung cổ'], 1, 'Renaissance (TK XIV-XVI) phục hưng văn hoá Hy Lạp, La Mã và đề cao con người.'),
    Q('Đại diện tiêu biểu của Phục Hưng là?', ['Edison', 'James Watt', 'Leonardo da Vinci, Michelangelo', 'Newton'], 2, 'Leonardo da Vinci, Michelangelo, Raphael là nghệ sĩ tiêu biểu Phục Hưng.'),
    Q('Cải cách tôn giáo do?', ['John Calvin khởi xướng', 'Martin Luther khởi xướng', 'Galileo', 'Lê-nin'], 1, 'Luther (1517) đăng 95 luận đề, mở đầu phong trào Kháng Cách (Protestant).'),
    Q('Các cuộc phát kiến địa lý TK XV-XVI gắn với?', ['Columbus, Magellan, Vasco da Gama', 'Newton', 'Einstein', 'Galileo'], 0, 'Columbus phát hiện châu Mỹ (1492), Magellan đi vòng quanh thế giới (1519-22).'),
    Q('Cách mạng khoa học TK XVI-XVII gắn với?', ['Khổng Tử và Mạnh Tử', 'Edison, Tesla, Ford', 'Darwin, Mendel, Pasteur', 'Copernicus, Galileo, Newton'], 3, 'Copernicus (nhật tâm), Galileo (kính viễn vọng), Newton (cơ học).'),
    Q('Cách mạng tư sản đầu tiên là?', ['Cách mạng Hà Lan TK XVI', 'Pháp 1789', 'Mỹ 1776', 'Nga 1917'], 0, 'Cách mạng tư sản Hà Lan (cuối TK XVI) là cách mạng tư sản đầu tiên thế giới.'),
  ]),

  M(32, 'Cách mạng tư sản TK XVII-XVIII', [
    Q('Cách mạng tư sản Anh nổ ra năm?', ['1776', '1642-1689', '1789', '1917'], 1, 'Cách mạng Anh 1642-1689 với "Cách mạng Vinh Quang" 1688 kết thúc.'),
    Q('Cách mạng tư sản Mỹ là?', ['Nội chiến', 'Chiến tranh giành độc lập (1775-1783)', 'Vùng vịnh', 'Thế chiến'], 1, '13 bang Bắc Mỹ giành độc lập từ Anh, lập Hợp chúng quốc Hoa Kỳ.'),
    Q('Tuyên ngôn độc lập Mỹ do ai soạn chính?', ['Franklin', 'Washington', 'Thomas Jefferson', 'Lincoln'], 2, 'Jefferson soạn Tuyên ngôn độc lập Mỹ ký 4/7/1776.'),
    Q('Cách mạng Pháp nổ ra năm?', ['1648', '1917', '1789', '1776'], 2, 'Cách mạng Pháp bắt đầu 14/7/1789 với phá ngục Bastille.'),
    Q('Khẩu hiệu cách mạng Pháp là?', ['"Tự do - Bình đẳng - Bác ái"', '"Cải cách - mở cửa"', '"Công bằng - dân chủ"', '"Đổi mới"'], 0, '"Liberté, Égalité, Fraternité" là khẩu hiệu cách mạng Pháp.'),
    Q('Tuyên ngôn Nhân quyền và Dân quyền của Pháp năm?', ['1815', '1804', '1789', '1776'], 2, 'Tuyên ngôn Nhân quyền và Dân quyền được Quốc hội Pháp thông qua 26/8/1789.'),
  ]),

  M(33, 'Cách mạng công nghiệp', [
    Q('Cách mạng công nghiệp lần thứ nhất bắt đầu ở?', ['Đức (giữa TK XIX)', 'Pháp (đầu TK XIX)', 'Anh, cuối TK XVIII', 'Mỹ (sau Nội chiến)'], 2, 'Cách mạng công nghiệp 1.0 bắt đầu ở Anh cuối TK XVIII với động cơ hơi nước.'),
    Q('Máy hơi nước do ai cải tiến nổi tiếng?', ['Newton', 'Nikola Tesla', 'Edison', 'James Watt'], 3, 'James Watt cải tiến máy hơi nước (1769), mở rộng dùng trong công nghiệp.'),
    Q('Phát minh nào tiêu biểu thời kỳ này?', ['Bóng đèn điện và radio', 'Máy dệt, máy hơi nước, đầu máy xe lửa', 'Điện thoại', 'Internet'], 1, 'Máy dệt (Hargreaves), máy hơi nước (Watt), đầu máy xe lửa (Stephenson) là phát minh tiêu biểu.'),
    Q('Cách mạng công nghiệp 2.0 (TK XIX-XX) dựa trên?', ['Trí tuệ nhân tạo và dữ liệu lớn', 'Điện và động cơ đốt trong', 'Internet', 'Hơi nước'], 1, 'CMCN 2.0 với điện (Edison), động cơ đốt trong, dây chuyền (Ford).'),
    Q('Hậu quả tích cực của CMCN?', ['Mất việc', 'Chiến tranh', 'Tăng năng suất, đô thị hoá', 'Phá rừng'], 2, 'Năng suất bùng nổ, đô thị hoá, giai cấp công nhân hình thành.'),
    Q('Hậu quả tiêu cực của CMCN?', ['Bóc lột lao động, ô nhiễm', 'Không có ai thất nghiệp', 'Hết bệnh', 'Hoà bình tuyệt đối'], 0, 'CMCN gây bóc lột lao động trẻ em, phụ nữ; ô nhiễm môi trường.'),
  ]),

  M(34, 'Sử học và đời sống hiện đại', [
    Q('Vai trò của Sử học hôm nay?', ['Chỉ cho học giả', 'Chỉ thi cử', 'Vô dụng', 'Giáo dục công dân, bảo tồn di sản, phát triển du lịch'], 3, 'Sử học giúp giáo dục, bảo tồn di sản, phát triển công nghiệp văn hoá.'),
    Q('Di sản văn hoá VN được UNESCO công nhận gồm?', ['Vịnh Hạ Long, Phong Nha, Cố đô Huế, phố cổ Hội An...', 'Chỉ Hà Nội', 'Đã bị rút khỏi danh sách UNESCO', 'Chỉ 1 di sản'], 0, 'VN có nhiều di sản UNESCO: Hạ Long, Phong Nha - Kẻ Bàng, Huế, Hội An, Mỹ Sơn...'),
    Q('Bảo tàng có chức năng?', ['Bệnh viện', 'Sưu tầm, bảo quản, trưng bày hiện vật lịch sử', 'Quán cà phê', 'Trường học'], 1, 'Bảo tàng lưu giữ, trưng bày, giáo dục công chúng về di sản.'),
    Q('Sử học hôm nay sử dụng?', ['Chỉ giấy bút', 'Chỉ truyền miệng', 'Kỹ thuật số, AI, GIS để nghiên cứu', 'Chỉ trí nhớ'], 2, 'Sử học hiện đại ứng dụng số hoá, AI, GIS, big data để nghiên cứu.'),
    Q('Du lịch lịch sử - văn hoá đem lại?', ['Chỉ tốn kém', 'Giá trị kinh tế và bảo tồn di sản', 'Làm xói mòn nhanh chóng di sản', 'Vô dụng'], 1, 'Du lịch văn hoá tạo thu nhập, đồng thời thúc đẩy bảo tồn di sản.'),
    Q('Học sinh có thể đóng góp gì cho Sử học?', ['Không gì', 'Chỉ học thuộc lòng để thi', 'Tìm hiểu, lan tỏa, bảo vệ di sản', 'Đốt sách'], 2, 'Học sinh có thể tham gia tìm hiểu, lan toả và bảo vệ di sản văn hoá lịch sử.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Văn minh Hy Lạp cổ đại nổi bật với?', ['Vạn lý trường thành', 'Kim tự tháp', 'Dân chủ Athens và triết học', 'Bộ luật Hammurabi'], 2, 'Hy Lạp có dân chủ Athens, triết học Socrates - Plato - Aristotle.'),
    Q('Văn minh Trung Hoa có tứ đại phát minh?', ['Giấy, in, la bàn, thuốc súng', 'Internet, AI, TV, điện thoại', 'Lửa, bánh xe, đồng hồ, điện', 'Vàng, bạc, đồng, sắt'], 0, 'Tứ đại phát minh Trung Hoa: giấy, in, la bàn, thuốc súng.'),
    Q('Chiến thắng Bạch Đằng 938 gắn với ai?', ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Lê Lợi', 'Ngô Quyền'], 3, 'Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng (938).'),
    Q('Quốc hiệu Đại Việt bắt đầu từ thời?', ['Lê Sơ (sau khởi nghĩa Lam Sơn)', 'Lý (1054)', 'Ngô (sau Bạch Đằng 938)', 'Đinh (Đinh Bộ Lĩnh đặt Đại Cồ Việt)'], 1, 'Lý Thánh Tông đổi quốc hiệu thành Đại Việt năm 1054.'),
    Q('Quang Trung đại phá quân Thanh năm?', ['1428', '1858', '1789', '1788'], 2, 'Tết Kỷ Dậu 1789, Quang Trung đại phá 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa.'),
    Q('Cách mạng Pháp nổ ra năm?', ['1917', '1776', '1815', '1789'], 3, 'Cách mạng Pháp ngày 14/7/1789 với phá ngục Bastille.'),
  ]),
];

export const H10SU_SCENARIOS = indexBy(H10SU_WEEKS);
