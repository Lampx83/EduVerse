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
    Q('Sử học là khoa học nghiên cứu về?', ['Quá khứ của loài người','Tương lai','Vũ trụ vật lý','Sinh vật'], 0, 'Sử học nghiên cứu quá khứ hoạt động của loài người.'),
    Q('Đối tượng nghiên cứu của Sử học là?', ['Toàn bộ quá khứ của xã hội loài người','Chỉ vua chúa','Chỉ chiến tranh','Chỉ kinh tế'], 0, 'Đối tượng là toàn bộ quá khứ xã hội loài người — chính trị, kinh tế, văn hoá, xã hội.'),
    Q('Nhà sử học cần có phẩm chất quan trọng nào?', ['Khách quan, trung thực','Sáng tạo bừa','Bịa số liệu','Yêu thích cá nhân'], 0, 'Khách quan, trung thực và phương pháp khoa học là yêu cầu cốt lõi của nhà sử học.'),
    Q('Sử học có chức năng?', ['Khoa học, giáo dục và xã hội','Chỉ giải trí','Chỉ làm cảnh','Chỉ thi cử'], 0, 'Sử học có chức năng khoa học (tìm hiểu sự thật), giáo dục (rút bài học), xã hội (gắn kết cộng đồng).'),
    Q('Lịch sử là chuyện?', ['Đã xảy ra và được ghi nhận','Sẽ xảy ra','Đang xảy ra hôm nay','Tưởng tượng'], 0, 'Lịch sử là quá khứ đã xảy ra được nghiên cứu và ghi nhận.'),
    Q('Học lịch sử giúp người học?', ['Hiểu cội nguồn, rút bài học, định hướng tương lai','Trở nên giàu có','Cao hơn','Khoẻ hơn'], 0, 'Sử học giúp hiểu nguồn gốc, bài học quá khứ để định hướng hiện tại - tương lai.'),
  ]),

  M(2, 'Nguồn sử liệu và phương pháp nghiên cứu', [
    Q('Nguồn sử liệu chia thành 2 nhóm lớn?', ['Sơ cấp và thứ cấp','Cổ và mới','Có hình và không hình','Của Việt Nam và nước ngoài'], 0, 'Sơ cấp (gốc) và thứ cấp (gián tiếp) là hai nhóm chính.'),
    Q('Văn bia, đồ gốm, tiền cổ thuộc nhóm sử liệu?', ['Hiện vật (sơ cấp)','Truyền miệng','Phim ảnh hiện đại','Sách giáo khoa'], 0, 'Hiện vật khảo cổ là sử liệu sơ cấp quan trọng.'),
    Q('Truyền thuyết "Lạc Long Quân - Âu Cơ" thuộc loại sử liệu?', ['Truyền miệng','Hiện vật','Văn bản chính sử','Phim ảnh'], 0, 'Truyền thuyết, ca dao, tục ngữ là sử liệu truyền miệng.'),
    Q('Bộ sử "Đại Việt sử ký toàn thư" thuộc loại?', ['Sử liệu chữ viết','Sử liệu hiện vật','Truyền miệng','Phim'], 0, 'Sử thành văn (chữ viết) là loại sử liệu quan trọng.'),
    Q('Phương pháp nghiên cứu lịch sử KHÔNG bao gồm?', ['Bịa số liệu','Sưu tầm sử liệu','So sánh đối chiếu','Khảo cổ học'], 0, 'Bịa số liệu vi phạm nguyên tắc trung thực của Sử học.'),
    Q('Khảo cổ học giúp gì cho Sử học?', ['Cung cấp hiện vật, di tích để dựng lại quá khứ','Sản xuất hàng hoá','Tăng trưởng kinh tế','Du lịch'], 0, 'Khảo cổ tìm di tích, hiện vật để khôi phục bức tranh quá khứ.'),
  ]),

  M(3, 'Văn minh Ai Cập và Lưỡng Hà cổ đại', [
    Q('Văn minh Ai Cập cổ đại hình thành ven sông nào?', ['Sông Nile','Sông Hằng','Sông Hoàng Hà','Sông Tigris'], 0, 'Sông Nile là cái nôi của văn minh Ai Cập cổ đại.'),
    Q('Công trình tiêu biểu của Ai Cập cổ đại là?', ['Kim tự tháp','Vạn lý trường thành','Đấu trường Colosseum','Đền Parthenon'], 0, 'Kim tự tháp Giza là kỳ quan tiêu biểu của Ai Cập.'),
    Q('Văn minh Lưỡng Hà hình thành giữa hai sông?', ['Tigris và Euphrates','Nile và Hằng','Hằng và Ấn','Hoàng Hà và Trường Giang'], 0, 'Lưỡng Hà (Mesopotamia) nằm giữa Tigris và Euphrates ở Iraq ngày nay.'),
    Q('Bộ luật cổ nhất thế giới còn lưu giữ là?', ['Bộ luật Hammurabi','Bộ luật Hồng Đức','Bộ luật La Mã','Bộ luật Manu'], 0, 'Bộ luật Hammurabi của Babylon (~1750 TCN) là bộ luật cổ nổi tiếng.'),
    Q('Chữ viết của Ai Cập cổ đại gọi là?', ['Chữ tượng hình (hieroglyph)','Chữ Hán','Chữ Latin','Chữ La Mã'], 0, 'Hieroglyph là chữ tượng hình của Ai Cập.'),
    Q('Người Ai Cập cổ đại tin?', ['Linh hồn bất tử + thờ thần','Vô thần','Chỉ thờ tổ tiên','Không có niềm tin'], 0, 'Họ tin linh hồn bất tử, ướp xác, thờ nhiều vị thần (Ra, Osiris...).'),
  ]),

  M(4, 'Văn minh Trung Hoa cổ - trung đại', [
    Q('Văn minh Trung Hoa hình thành ven sông?', ['Hoàng Hà và Trường Giang','Mê Kông','Nile','Hằng'], 0, 'Lưu vực Hoàng Hà và Trường Giang là cái nôi của văn minh Trung Hoa.'),
    Q('Triều đại đầu tiên trong sử Trung Quốc là?', ['Hạ','Đường','Hán','Tống'], 0, 'Triều Hạ là triều đại đầu tiên (~2070 TCN, có tranh luận).'),
    Q('Người sáng lập triều Tần là?', ['Tần Thuỷ Hoàng','Khổng Tử','Lưu Bang','Tôn Quyền'], 0, 'Tần Thuỷ Hoàng (221 TCN) thống nhất Trung Hoa, lập triều Tần.'),
    Q('Công trình nổi tiếng của Trung Quốc cổ đại?', ['Vạn Lý Trường Thành','Kim tự tháp','Đền Parthenon','Đấu trường La Mã'], 0, 'Vạn Lý Trường Thành xây dựng từ thời Tần, hoàn thiện qua nhiều triều.'),
    Q('Khổng Tử sáng lập học thuyết?', ['Nho giáo','Phật giáo','Đạo giáo','Hồi giáo'], 0, 'Khổng Tử (551-479 TCN) sáng lập Nho giáo (Khổng giáo).'),
    Q('Tứ đại phát minh của Trung Quốc gồm?', ['Giấy, in ấn, la bàn, thuốc súng','Bánh xe, lửa, đồng hồ, điện','Điện, radio, TV, máy tính','Đường, muối, vàng, ngọc'], 0, 'Tứ đại phát minh: giấy, kỹ thuật in, la bàn, thuốc súng.'),
  ]),

  M(5, 'Văn minh Ấn Độ cổ - trung đại', [
    Q('Văn minh Ấn Độ cổ đại hình thành ven sông?', ['Sông Ấn (Indus) và Hằng (Ganges)','Nile','Hoàng Hà','Tigris'], 0, 'Lưu vực sông Ấn và Hằng là cái nôi văn minh Ấn Độ.'),
    Q('Tôn giáo cổ nhất ở Ấn Độ là?', ['Bà La Môn (Hindu giáo)','Phật giáo','Hồi giáo','Kitô giáo'], 0, 'Hindu giáo (Bà La Môn) là tôn giáo bản địa cổ nhất Ấn Độ.'),
    Q('Phật giáo do ai sáng lập?', ['Thái tử Tất Đạt Đa (Siddhartha Gautama)','Khổng Tử','Lão Tử','Muhammad'], 0, 'Đức Phật Thích Ca Mâu Ni sáng lập Phật giáo vào thế kỷ VI TCN.'),
    Q('Chế độ đẳng cấp ở Ấn Độ cổ chia thành?', ['4 đẳng cấp (varna)','3 đẳng cấp','5 đẳng cấp','Không có đẳng cấp'], 0, 'Bốn varna: Brahmin, Kshatriya, Vaishya, Shudra; dưới cùng là Dalit.'),
    Q('Người Ấn Độ phát minh ra?', ['Hệ thập phân và số 0','Bánh xe','Lửa','Sắt'], 0, 'Hệ thập phân Ấn-Arab và số 0 là đóng góp lớn của Ấn Độ.'),
    Q('Sử thi nổi tiếng Ấn Độ là?', ['Mahabharata và Ramayana','Iliad','Odyssey','Tây du ký'], 0, 'Mahabharata và Ramayana là hai sử thi lớn của Ấn Độ.'),
  ]),

  M(6, 'Văn minh Hy Lạp cổ đại', [
    Q('Hy Lạp cổ đại nằm ở khu vực?', ['Nam châu Âu, ven Địa Trung Hải','Bắc Phi','Đông Á','Bắc Mỹ'], 0, 'Hy Lạp ở phía nam bán đảo Balkan, ven Địa Trung Hải.'),
    Q('Mô hình thành bang (polis) tiêu biểu là?', ['Athens và Sparta','Rome và Cairo','Tokyo và Seoul','Hà Nội và Sài Gòn'], 0, 'Athens (dân chủ) và Sparta (quân phiệt) là hai thành bang nổi bật.'),
    Q('Athens nổi tiếng với chế độ?', ['Dân chủ trực tiếp','Quân chủ chuyên chế','Phong kiến','Cộng sản'], 0, 'Athens là cái nôi của nền dân chủ trực tiếp cổ đại.'),
    Q('Triết gia nổi tiếng Hy Lạp?', ['Socrates, Plato, Aristotle','Khổng Tử','Lão Tử','Phật'], 0, 'Bộ ba triết gia Hy Lạp: Socrates, Plato, Aristotle.'),
    Q('Đền Parthenon là biểu tượng của?', ['Athens cổ đại','Sparta','Rome','Babylon'], 0, 'Đền Parthenon trên đồi Acropolis là biểu tượng Athens.'),
    Q('Olympic cổ đại bắt đầu ở Hy Lạp năm?', ['776 TCN','1896','2000','100 SCN'], 0, 'Thế vận hội Olympic cổ đại bắt đầu năm 776 TCN tại Olympia.'),
  ]),

  M(7, 'Văn minh La Mã cổ đại', [
    Q('La Mã cổ đại hình thành ở bán đảo?', ['Ý (Italy)','Hy Lạp','Iberia','Balkan'], 0, 'La Mã nằm trên bán đảo Italy, ven sông Tiber.'),
    Q('La Mã trải qua các giai đoạn?', ['Vương quốc → Cộng hoà → Đế chế','Cộng hoà → Phong kiến','Đế chế → Cộng hoà','Vô chính phủ'], 0, 'Lịch sử La Mã: Vương quốc (753-509 TCN) → Cộng hoà → Đế chế.'),
    Q('Julius Caesar là?', ['Lãnh tụ chính trị - quân sự La Mã','Hoàng đế đầu tiên','Triết gia','Nông dân'], 0, 'Caesar là nhà lãnh đạo quân sự La Mã cuối thời Cộng hoà.'),
    Q('Hoàng đế đầu tiên của đế chế La Mã là?', ['Augustus','Caesar','Nero','Hadrian'], 0, 'Augustus (Octavian) lên ngôi năm 27 TCN, lập đế chế La Mã.'),
    Q('Công trình kiến trúc nổi tiếng La Mã?', ['Đấu trường Colosseum','Kim tự tháp','Vạn lý trường thành','Đền Parthenon'], 0, 'Colosseum (80 SCN) là đấu trường biểu tượng của La Mã.'),
    Q('Hệ thống pháp luật La Mã có ảnh hưởng đến?', ['Luật pháp các nước châu Âu hiện đại','Chỉ La Mã','Không ảnh hưởng ai','Chỉ Hy Lạp'], 0, 'Luật La Mã (civil law) là nền tảng của hệ thống pháp luật châu Âu.'),
  ]),

  M(8, 'Văn minh Đông Nam Á', [
    Q('Đông Nam Á cổ đại có vị trí đặc biệt vì?', ['Là cầu nối Ấn Độ - Trung Hoa, hai nền văn minh lớn','Là sa mạc','Là cực bắc','Là cực nam'], 0, 'Đông Nam Á là cầu nối giao thương Ấn Độ - Trung Hoa.'),
    Q('Hai nền văn minh ảnh hưởng lớn nhất tới ĐNA cổ?', ['Ấn Độ và Trung Hoa','Hy Lạp và La Mã','Ai Cập và Babylon','Mỹ và Anh'], 0, 'Văn minh Ấn Độ (Champa, Phù Nam...) và Trung Hoa (Việt Nam) ảnh hưởng lớn.'),
    Q('Vương quốc Phù Nam tồn tại ở?', ['Lưu vực hạ Mekong','Bắc Việt Nam','Tây Tạng','Java'], 0, 'Phù Nam (TK I-VII) là vương quốc cổ ven hạ Mekong.'),
    Q('Vương quốc Champa tồn tại ở?', ['Miền Trung Việt Nam','Miền Bắc Việt Nam','Lào','Campuchia'], 0, 'Champa (TK II-XVII) tồn tại ở miền Trung Việt Nam.'),
    Q('Angkor là đế chế của?', ['Khmer (Campuchia)','Lào','Thái Lan','Miến Điện'], 0, 'Đế chế Khmer (TK IX-XV) với đền Angkor Wat vĩ đại.'),
    Q('Borobudur ở Indonesia là?', ['Quần thể đền Phật giáo lớn nhất thế giới','Đền Hindu','Nhà thờ','Cung điện'], 0, 'Borobudur (TK IX) là quần thể đền Phật giáo trên đảo Java.'),
  ]),

  M(9, 'Văn minh Văn Lang - Âu Lạc', [
    Q('Nhà nước Văn Lang do ai lập?', ['Hùng Vương','Trần Hưng Đạo','Lý Thái Tổ','An Dương Vương'], 0, 'Vua Hùng (Lạc Long Quân) lập nhà nước Văn Lang — nhà nước đầu tiên của người Việt.'),
    Q('Văn Lang ra đời khoảng?', ['Thế kỷ VII TCN','Thế kỷ I SCN','Thế kỷ X','Thế kỷ V TCN'], 0, 'Văn Lang xuất hiện khoảng thế kỷ VII TCN.'),
    Q('Kinh đô của Văn Lang là?', ['Phong Châu (Phú Thọ)','Hà Nội','Hoa Lư','Cổ Loa'], 0, 'Kinh đô Văn Lang là Phong Châu (Phú Thọ ngày nay).'),
    Q('An Dương Vương lập nước?', ['Âu Lạc','Văn Lang','Đại Việt','Vạn Xuân'], 0, 'Thục Phán An Dương Vương đánh bại Hùng Vương, lập Âu Lạc (~257 TCN).'),
    Q('Kinh đô Âu Lạc là?', ['Cổ Loa','Phong Châu','Hoa Lư','Thăng Long'], 0, 'Cổ Loa (Đông Anh, Hà Nội) là kinh đô Âu Lạc với thành xoáy ốc nổi tiếng.'),
    Q('Văn hoá đặc trưng của thời kỳ Văn Lang là?', ['Văn hoá Đông Sơn với trống đồng','Văn hoá Sa Huỳnh','Văn hoá Óc Eo','Văn hoá Hoà Bình'], 0, 'Văn hoá Đông Sơn với trống đồng tinh xảo là đặc trưng thời Văn Lang - Âu Lạc.'),
  ]),

  M(10, 'Thời kỳ Bắc thuộc', [
    Q('Bắc thuộc bắt đầu khi?', ['Triệu Đà chiếm Âu Lạc (179 TCN)','Lý Bí khởi nghĩa','Lê Lợi khởi nghĩa','Quang Trung lên ngôi'], 0, 'Năm 179 TCN, Triệu Đà thôn tính Âu Lạc, mở đầu thời kỳ Bắc thuộc.'),
    Q('Bắc thuộc kéo dài khoảng?', ['Hơn 1000 năm (179 TCN - 938)','100 năm','500 năm','2000 năm'], 0, 'Bắc thuộc kéo dài hơn 1000 năm tới chiến thắng Bạch Đằng (938).'),
    Q('Hai Bà Trưng khởi nghĩa năm?', ['40','248','542','905'], 0, 'Khởi nghĩa Hai Bà Trưng (40-43) chống nhà Đông Hán.'),
    Q('Bà Triệu khởi nghĩa năm?', ['248','40','542','905'], 0, 'Bà Triệu khởi nghĩa năm 248 chống nhà Ngô.'),
    Q('Lý Bí dựng nước Vạn Xuân năm?', ['542 (khởi nghĩa); 544 (lên ngôi)','40','905','938'], 0, 'Lý Bí khởi nghĩa 542, lên ngôi 544 lập nước Vạn Xuân.'),
    Q('Mai Thúc Loan khởi nghĩa năm?', ['722','248','905','938'], 0, 'Khởi nghĩa Mai Thúc Loan (722) chống nhà Đường.'),
  ]),

  M(11, 'Họ Khúc và chiến thắng Bạch Đằng 938', [
    Q('Khúc Thừa Dụ giành quyền tự chủ năm?', ['905','939','938','968'], 0, 'Năm 905, Khúc Thừa Dụ lập chính quyền tự chủ ở An Nam.'),
    Q('Người chỉ huy chiến thắng Bạch Đằng năm 938 là?', ['Ngô Quyền','Lý Thường Kiệt','Trần Hưng Đạo','Lê Lợi'], 0, 'Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng năm 938.'),
    Q('Mưu kế cắm cọc nhọn trên sông Bạch Đằng do?', ['Ngô Quyền sáng tạo','Lý Thường Kiệt','Trần Quốc Toản','Trần Quốc Tuấn'], 0, 'Ngô Quyền cho cắm cọc nhọn dưới lòng sông, lợi dụng thuỷ triều phá quân Nam Hán.'),
    Q('Chiến thắng Bạch Đằng 938 có ý nghĩa?', ['Chấm dứt 1000 năm Bắc thuộc, mở kỷ nguyên độc lập','Mất nước','Bắt đầu Bắc thuộc','Không quan trọng'], 0, 'Chiến thắng kết thúc thời kỳ Bắc thuộc, mở ra kỷ nguyên độc lập.'),
    Q('Sau chiến thắng, Ngô Quyền xưng vương năm?', ['939','905','938','968'], 0, 'Ngô Quyền xưng vương 939, đóng đô Cổ Loa.'),
    Q('Sau thời Ngô là thời kỳ?', ['Loạn 12 sứ quân','Nhà Đinh','Nhà Lý','Nhà Trần'], 0, 'Sau khi nhà Ngô suy yếu, đất nước rơi vào loạn 12 sứ quân.'),
  ]),

  M(12, 'Nhà Đinh - Tiền Lê', [
    Q('Người dẹp loạn 12 sứ quân là?', ['Đinh Bộ Lĩnh','Lê Hoàn','Lý Công Uẩn','Ngô Quyền'], 0, 'Đinh Bộ Lĩnh thống nhất các sứ quân, lập nhà Đinh năm 968.'),
    Q('Đinh Bộ Lĩnh lên ngôi xưng?', ['Đinh Tiên Hoàng','Trần Thái Tông','Lê Đại Hành','Lý Thái Tổ'], 0, 'Đinh Bộ Lĩnh xưng Đinh Tiên Hoàng, đặt quốc hiệu Đại Cồ Việt.'),
    Q('Kinh đô của Đại Cồ Việt là?', ['Hoa Lư (Ninh Bình)','Cổ Loa','Thăng Long','Phú Xuân'], 0, 'Hoa Lư (Ninh Bình) là kinh đô thời Đinh - Tiền Lê - đầu Lý.'),
    Q('Lê Hoàn lên ngôi lập nhà?', ['Tiền Lê','Hậu Lê','Lê Sơ','Mạc'], 0, 'Lê Hoàn lập nhà Tiền Lê (980-1009).'),
    Q('Lê Hoàn đánh thắng quân?', ['Tống','Mông','Minh','Thanh'], 0, 'Lê Đại Hành đánh tan quân Tống xâm lược năm 981.'),
    Q('Người lập nhà Lý là?', ['Lý Công Uẩn','Lý Thường Kiệt','Lý Thái Tông','Lý Anh Tông'], 0, 'Lý Công Uẩn (Lý Thái Tổ) lên ngôi 1009, lập nhà Lý.'),
  ]),

  M(13, 'Nhà Lý (1009-1225)', [
    Q('Năm 1010, Lý Thái Tổ?', ['Dời đô từ Hoa Lư về Thăng Long','Đánh quân Tống','Lập nhà Trần','Đầu hàng Tống'], 0, 'Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.'),
    Q('Quốc hiệu thời Lý là?', ['Đại Việt','Đại Cồ Việt','Vạn Xuân','Đại Ngu'], 0, 'Năm 1054, Lý Thánh Tông đổi quốc hiệu thành Đại Việt.'),
    Q('Lý Thường Kiệt nổi tiếng với chiến thắng?', ['Như Nguyệt (1077) chống quân Tống','Bạch Đằng 938','Đống Đa','Điện Biên Phủ'], 0, 'Lý Thường Kiệt đánh tan quân Tống trên sông Như Nguyệt năm 1077.'),
    Q('Bài thơ "Nam quốc sơn hà" được cho là của?', ['Lý Thường Kiệt','Nguyễn Trãi','Trần Hưng Đạo','Lê Lợi'], 0, 'Nam quốc sơn hà — "Tuyên ngôn độc lập đầu tiên" của Việt Nam.'),
    Q('Quốc Tử Giám được lập năm?', ['1076','1010','1054','1407'], 0, 'Năm 1076, Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.'),
    Q('Nhà Lý sụp đổ năm?', ['1225','1010','1400','1428'], 0, 'Năm 1225, nhà Lý mất ngôi vào tay nhà Trần qua Lý Chiêu Hoàng → Trần Cảnh.'),
  ]),

  M(14, 'Nhà Trần (1225-1400)', [
    Q('Người sáng lập nhà Trần là?', ['Trần Cảnh (Trần Thái Tông) qua dàn xếp của Trần Thủ Độ','Trần Hưng Đạo','Trần Quốc Toản','Trần Nhật Duật'], 0, 'Trần Thủ Độ đưa Trần Cảnh lên ngôi (1226), lập nhà Trần.'),
    Q('Nhà Trần 3 lần đánh bại quân?', ['Mông - Nguyên','Tống','Minh','Thanh'], 0, 'Nhà Trần ba lần (1258, 1285, 1287-88) đánh thắng quân Mông - Nguyên.'),
    Q('Trần Hưng Đạo nổi tiếng với chiến thắng?', ['Bạch Đằng 1288','Như Nguyệt','Đống Đa','Rạch Gầm'], 0, 'Trận Bạch Đằng 1288, Trần Hưng Đạo tái dụng kế cọc nhọn, diệt quân Nguyên.'),
    Q('Hịch tướng sĩ là tác phẩm của?', ['Trần Hưng Đạo','Lý Thường Kiệt','Nguyễn Trãi','Lê Lợi'], 0, 'Hịch tướng sĩ do Trần Hưng Đạo viết, kêu gọi tướng sĩ đánh giặc.'),
    Q('Hội nghị Diên Hồng bàn về?', ['Đánh hay hoà với quân Nguyên (1284)','Thuế khoá','Khoa cử','Tôn giáo'], 0, 'Diên Hồng (1284) các bô lão đồng thanh "đánh" khi quân Nguyên sang xâm lược lần 2.'),
    Q('Chữ Nôm phát triển mạnh từ thời?', ['Trần','Lý','Đinh','Ngô'], 0, 'Chữ Nôm phát triển mạnh ở thời Trần (đặc biệt sáng tác của Nguyễn Thuyên).'),
  ]),

  M(15, 'Nhà Hồ và 20 năm Bắc thuộc lần 2', [
    Q('Người lật đổ nhà Trần lập nhà Hồ là?', ['Hồ Quý Ly','Hồ Hán Thương','Trần Thuận Tông','Mạc Đăng Dung'], 0, 'Hồ Quý Ly cướp ngôi nhà Trần năm 1400.'),
    Q('Quốc hiệu thời Hồ là?', ['Đại Ngu','Đại Việt','Vạn Xuân','Đại Cồ Việt'], 0, 'Hồ Quý Ly đổi quốc hiệu thành Đại Ngu.'),
    Q('Cải cách nổi tiếng của Hồ Quý Ly là?', ['Tiền giấy, hạn điền, hạn nô','Khoán ruộng','Lập hợp tác xã','Quân chủ lập hiến'], 0, 'Hồ Quý Ly tiến hành cải cách: tiền giấy, hạn điền, hạn nô tỳ.'),
    Q('Nhà Hồ sụp đổ năm?', ['1407 (quân Minh xâm lược)','1428','1400','1284'], 0, 'Năm 1407, quân Minh đánh bại nhà Hồ, bắt đầu thời Minh thuộc.'),
    Q('Thời Minh thuộc kéo dài?', ['20 năm (1407-1427)','100 năm','1000 năm','5 năm'], 0, 'Minh thuộc kéo dài 20 năm với chính sách đồng hoá khắc nghiệt.'),
    Q('Cuộc khởi nghĩa lớn chống Minh thành công là?', ['Lam Sơn (Lê Lợi)','Tây Sơn','Đông Sơn','Cần Vương'], 0, 'Khởi nghĩa Lam Sơn (1418-1427) do Lê Lợi lãnh đạo đánh tan quân Minh.'),
  ]),

  M(16, 'Nhà Lê Sơ (1428-1527)', [
    Q('Lê Lợi lên ngôi xưng?', ['Lê Thái Tổ','Lê Thánh Tông','Lê Nhân Tông','Lê Hiển Tông'], 0, 'Lê Lợi (Lê Thái Tổ) lên ngôi 1428 sau chiến thắng quân Minh.'),
    Q('Quốc hiệu thời Lê Sơ là?', ['Đại Việt','Đại Cồ Việt','Đại Ngu','Việt Nam'], 0, 'Lê Sơ khôi phục quốc hiệu Đại Việt.'),
    Q('Bộ luật Hồng Đức do?', ['Lê Thánh Tông ban hành','Lê Thái Tổ','Trần Thái Tông','Lý Thái Tổ'], 0, 'Lê Thánh Tông ban hành Quốc Triều Hình Luật (Hồng Đức) — bộ luật tiến bộ.'),
    Q('Lê Thánh Tông tổ chức bộ máy hành chính chia thành?', ['13 đạo (sau là thừa tuyên)','3 miền','5 vùng','10 tỉnh'], 0, 'Năm 1471, Lê Thánh Tông chia cả nước thành 13 đạo.'),
    Q('Bình Ngô Đại Cáo do ai soạn?', ['Nguyễn Trãi','Lê Lợi','Lê Thánh Tông','Trần Hưng Đạo'], 0, 'Nguyễn Trãi soạn Bình Ngô Đại Cáo — bản tuyên ngôn độc lập thứ 2.'),
    Q('Nhà Lê Sơ kết thúc khi?', ['Mạc Đăng Dung cướp ngôi (1527)','Quân Minh xâm lược','Quân Tống xâm lược','Pháp xâm lược'], 0, 'Năm 1527, Mạc Đăng Dung cướp ngôi nhà Lê, lập nhà Mạc.'),
  ]),

  M(17, 'Thời Lê - Mạc và Nam - Bắc triều', [
    Q('Nhà Mạc thành lập năm?', ['1527','1400','1428','1592'], 0, 'Mạc Đăng Dung cướp ngôi nhà Lê năm 1527, lập nhà Mạc.'),
    Q('Nguyễn Kim phù Lê chống Mạc lập?', ['Nam triều (Lê)','Bắc triều','Triều Tây Sơn','Triều Nguyễn'], 0, 'Nguyễn Kim phù trì nhà Lê lập Nam triều ở Thanh Hoá, đối đầu Bắc triều (Mạc).'),
    Q('Cuộc chiến Nam - Bắc triều kéo dài?', ['Hơn 60 năm (1533-1592)','10 năm','100 năm','5 năm'], 0, 'Chiến tranh Lê - Mạc kéo dài hơn 60 năm, nhà Mạc bị diệt năm 1592.'),
    Q('Năm 1592, nhà Mạc?', ['Bị Trịnh Tùng đánh bại, rút lên Cao Bằng','Thống nhất đất nước','Lập nhà Trịnh','Đầu hàng Pháp'], 0, 'Trịnh Tùng chiếm Thăng Long 1592; nhà Mạc rút lên Cao Bằng.'),
    Q('Sau Mạc, quyền lực thực sự nằm trong tay?', ['Chúa Trịnh','Vua Lê','Chúa Nguyễn','Quân Minh'], 0, 'Vua Lê chỉ là bù nhìn, chúa Trịnh nắm quyền thực tế ở Bắc Hà.'),
    Q('Người sáng lập dòng họ chúa Nguyễn ở Đàng Trong?', ['Nguyễn Hoàng','Nguyễn Kim','Nguyễn Ánh','Nguyễn Phúc Khoát'], 0, 'Nguyễn Hoàng vào Thuận Hoá 1558, mở đầu thời kỳ chúa Nguyễn.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Văn hoá Đông Sơn là đặc trưng thời?', ['Văn Lang - Âu Lạc','Lý','Trần','Lê'], 0, 'Văn hoá Đông Sơn với trống đồng là đặc trưng Văn Lang - Âu Lạc.'),
    Q('Ai lãnh đạo chiến thắng Bạch Đằng 938?', ['Ngô Quyền','Lý Thường Kiệt','Trần Hưng Đạo','Lê Lợi'], 0, 'Ngô Quyền chiến thắng Bạch Đằng năm 938.'),
    Q('Đại Việt là quốc hiệu thời?', ['Lý','Văn Lang','Vạn Xuân','Đại Ngu'], 0, 'Đại Việt là quốc hiệu từ thời Lý (1054) đến hết Lê Sơ.'),
    Q('Bộ luật Hồng Đức của thời nào?', ['Lê Sơ','Trần','Lý','Nguyễn'], 0, 'Hồng Đức do Lê Thánh Tông ban hành.'),
    Q('Nhà Trần ba lần đánh bại quân?', ['Mông - Nguyên','Tống','Minh','Thanh'], 0, 'Nhà Trần ba lần đánh bại Mông - Nguyên (TK XIII).'),
    Q('Khởi nghĩa Lam Sơn do ai lãnh đạo?', ['Lê Lợi','Trần Hưng Đạo','Quang Trung','Lý Thường Kiệt'], 0, 'Lê Lợi lãnh đạo khởi nghĩa Lam Sơn (1418-1427).'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Đàng Trong - Đàng Ngoài', [
    Q('Đất nước chia thành Đàng Trong - Đàng Ngoài lấy mốc?', ['Sông Gianh','Sông Hồng','Sông Mã','Sông Cửu Long'], 0, 'Sông Gianh (Quảng Bình) là ranh giới Đàng Trong (Nguyễn) - Đàng Ngoài (Trịnh).'),
    Q('Đàng Ngoài thuộc quyền?', ['Vua Lê - Chúa Trịnh','Chúa Nguyễn','Mạc','Pháp'], 0, 'Đàng Ngoài: vua Lê làm bù nhìn, chúa Trịnh nắm quyền.'),
    Q('Đàng Trong thuộc quyền?', ['Chúa Nguyễn','Chúa Trịnh','Vua Lê','Mạc'], 0, 'Đàng Trong: chúa Nguyễn cai quản từ Quảng Bình vào Nam.'),
    Q('Chiến tranh Trịnh - Nguyễn kéo dài?', ['Khoảng 50 năm (1627-1672)','1 năm','100 năm','200 năm'], 0, 'Trịnh - Nguyễn đánh nhau 7 lần lớn từ 1627-1672, không phân thắng bại.'),
    Q('Đàng Trong mở rộng lãnh thổ về phía?', ['Nam (vào ĐBSCL)','Bắc','Tây Tạng','Đông Bắc'], 0, 'Chúa Nguyễn khai phá ĐBSCL, mở mang lãnh thổ về phía nam.'),
    Q('Thời này, đạo nào du nhập vào VN?', ['Thiên Chúa giáo','Hồi giáo','Do Thái giáo','Bà La Môn'], 0, 'Thiên Chúa giáo du nhập từ TK XVI qua các giáo sĩ phương Tây.'),
  ]),

  M(20, 'Khởi nghĩa Tây Sơn (phần 1)', [
    Q('Anh em Tây Sơn gồm?', ['Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ','Lê Lợi, Lê Lai','Trần Hưng Đạo, Trần Quốc Toản','Nguyễn Trãi'], 0, 'Ba anh em Tây Sơn: Nhạc, Huệ, Lữ khởi nghĩa năm 1771.'),
    Q('Khởi nghĩa Tây Sơn bùng nổ năm?', ['1771','1428','1789','1858'], 0, 'Khởi nghĩa Tây Sơn bùng nổ năm 1771 ở Bình Định.'),
    Q('Tây Sơn lật đổ?', ['Chúa Nguyễn rồi Chúa Trịnh','Pháp','Minh','Thanh'], 0, 'Tây Sơn lần lượt diệt chúa Nguyễn (Đàng Trong) và chúa Trịnh (Đàng Ngoài).'),
    Q('Năm 1785, Nguyễn Huệ thắng quân Xiêm tại?', ['Rạch Gầm - Xoài Mút','Bạch Đằng','Đống Đa','Như Nguyệt'], 0, 'Trận Rạch Gầm - Xoài Mút (1785) đánh tan 5 vạn quân Xiêm.'),
    Q('Năm 1786, Nguyễn Huệ?', ['Tiến ra Bắc lật đổ chúa Trịnh','Đầu hàng','Chia đất','Đánh quân Thanh'], 0, 'Năm 1786, Nguyễn Huệ tiến ra Bắc tiêu diệt họ Trịnh.'),
    Q('Nguyễn Huệ lên ngôi xưng?', ['Quang Trung Hoàng đế','Lê Đại Hành','Lý Thái Tổ','Trần Thái Tông'], 0, 'Nguyễn Huệ lên ngôi cuối 1788, xưng Quang Trung Hoàng đế.'),
  ]),

  M(21, 'Tây Sơn (phần 2) - Quang Trung đại phá quân Thanh', [
    Q('Lê Chiêu Thống cầu cứu?', ['Nhà Thanh','Pháp','Anh','Bồ Đào Nha'], 0, 'Lê Chiêu Thống cầu cứu Càn Long nhà Thanh đem 29 vạn quân sang.'),
    Q('Quân Thanh tiến vào Thăng Long năm?', ['Cuối 1788','1771','1428','1858'], 0, 'Tôn Sĩ Nghị đem 29 vạn quân Thanh tiến vào Thăng Long cuối 1788.'),
    Q('Quang Trung hành quân thần tốc và đại phá quân Thanh vào?', ['Tết Kỷ Dậu 1789','1786','1771','1802'], 0, 'Tết Kỷ Dậu 1789, Quang Trung đại phá 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa.'),
    Q('Trận Ngọc Hồi - Đống Đa là?', ['Đại thắng quân Thanh của Quang Trung','Đại bại','Hoà hoãn','Đánh nhau với Pháp'], 0, 'Ngọc Hồi - Đống Đa là đỉnh cao của khởi nghĩa Tây Sơn.'),
    Q('Quang Trung mất năm?', ['1792','1789','1802','1771'], 0, 'Quang Trung Nguyễn Huệ mất đột ngột năm 1792.'),
    Q('Sau Quang Trung mất, Tây Sơn?', ['Suy yếu nhanh chóng','Đại thắng','Mở rộng lãnh thổ','Tồn tại lâu'], 0, 'Sau Quang Trung mất 1792, nội bộ Tây Sơn lục đục, suy yếu.'),
  ]),

  M(22, 'Nhà Nguyễn (1802-1858) — Thiết lập', [
    Q('Người sáng lập nhà Nguyễn là?', ['Nguyễn Ánh (Gia Long)','Nguyễn Huệ','Nguyễn Hoàng','Nguyễn Trãi'], 0, 'Nguyễn Ánh lên ngôi 1802, xưng Gia Long, lập nhà Nguyễn.'),
    Q('Quốc hiệu thời Nguyễn (1804) là?', ['Việt Nam','Đại Việt','Đại Cồ Việt','Đại Nam'], 0, 'Năm 1804, Gia Long đặt quốc hiệu Việt Nam; sau Minh Mạng đổi Đại Nam.'),
    Q('Kinh đô nhà Nguyễn là?', ['Phú Xuân (Huế)','Hà Nội','Hoa Lư','Sài Gòn'], 0, 'Phú Xuân (Huế) là kinh đô nhà Nguyễn từ 1802.'),
    Q('Bộ luật thời Nguyễn là?', ['Hoàng Việt luật lệ (luật Gia Long)','Hồng Đức','Hình thư','Triều Trần'], 0, 'Hoàng Việt luật lệ (luật Gia Long) ban hành 1815.'),
    Q('Vua Minh Mạng chia cả nước thành?', ['30 tỉnh + phủ Thừa Thiên','13 đạo','3 miền','5 xứ'], 0, 'Minh Mạng cải cách hành chính: cả nước 30 tỉnh + phủ Thừa Thiên.'),
    Q('Nhà Nguyễn thực hiện chính sách "bế quan toả cảng" với?', ['Phương Tây','Trung Quốc','Lào','Campuchia'], 0, 'Bế quan toả cảng: hạn chế giao lưu với phương Tây, dẫn tới tụt hậu.'),
  ]),

  M(23, 'Văn minh Đại Việt - Tổng quan', [
    Q('Văn minh Đại Việt là?', ['Văn minh của quốc gia Đại Việt trong thời độc lập tự chủ','Văn minh Pháp','Văn minh Trung Quốc','Văn minh Ấn Độ'], 0, 'Văn minh Đại Việt là thành tựu của quốc gia Đại Việt thời độc lập (X-XIX).'),
    Q('Cơ sở hình thành văn minh Đại Việt?', ['Truyền thống Văn Lang + tiếp thu văn minh khu vực','Mượn nguyên Trung Hoa','Tự sinh','Học từ Pháp'], 0, 'Văn minh Đại Việt kế thừa Văn Lang - Âu Lạc, tiếp thu chọn lọc văn minh khu vực.'),
    Q('Văn minh Đại Việt có những thành tựu lớn về?', ['Kinh tế, chính trị, văn hoá, giáo dục, KHKT','Chỉ chính trị','Chỉ kinh tế','Chỉ tôn giáo'], 0, 'Đa dạng: nông nghiệp, thủ công, chính trị, văn học, sử học, kiến trúc...'),
    Q('Tư tưởng chủ đạo của văn minh Đại Việt là?', ['Tam giáo đồng nguyên (Nho - Phật - Đạo)','Chỉ Nho','Chỉ Phật','Chỉ Đạo'], 0, 'Nho - Phật - Đạo cùng tồn tại và bổ sung lẫn nhau.'),
    Q('Giáo dục thời Đại Việt nổi bật với?', ['Khoa cử và Quốc Tử Giám','Trường tư thục','Đại học phương Tây','Trường nội trú'], 0, 'Khoa cử Nho học và Quốc Tử Giám là trục giáo dục chính.'),
    Q('Văn học Đại Việt phát triển mạnh ở giai đoạn nào?', ['Lý - Trần - Lê','Đinh - Tiền Lê','Nguyễn duy nhất','Bắc thuộc'], 0, 'Văn học chữ Hán và chữ Nôm phát triển rực rỡ Lý - Trần - Lê.'),
  ]),

  M(24, 'Văn minh Đại Việt - Chính trị và pháp luật', [
    Q('Mô hình nhà nước Đại Việt là?', ['Quân chủ tập quyền','Cộng hoà','Phong kiến phân quyền','Dân chủ đại nghị'], 0, 'Nhà nước Đại Việt là quân chủ tập quyền với vua đứng đầu.'),
    Q('Lý - Trần tổ chức bộ máy theo mô hình?', ['Trung ương + địa phương 3 cấp','Tỉnh - thành','Quận - huyện','Liên bang'], 0, 'Trung ương: vua + quan; địa phương 3 cấp: lộ/phủ - huyện - xã.'),
    Q('Bộ luật đầu tiên còn ghi nhận là?', ['Hình thư (Lý)','Hồng Đức (Lê)','Gia Long (Nguyễn)','Triều Trần'], 0, 'Hình thư của nhà Lý là bộ luật thành văn đầu tiên (chỉ còn tên).'),
    Q('Bộ luật tiến bộ nhất thời Lê Sơ là?', ['Quốc triều hình luật (Hồng Đức)','Hình thư','Gia Long','Triều Trần'], 0, 'Hồng Đức có nhiều điều bảo vệ phụ nữ, người yếu thế, rất tiến bộ.'),
    Q('Quân đội Đại Việt tổ chức theo nguyên tắc?', ['"Ngụ binh ư nông"','Chỉ huyền tinh nhuệ','Toàn dân quân','Quân đánh thuê'], 0, 'Ngụ binh ư nông: lính khi không chiến đấu thì làm ruộng.'),
    Q('Vua đứng đầu nhà nước, có quyền?', ['Hành pháp, lập pháp, tư pháp tối cao','Chỉ tế lễ','Chỉ ban thưởng','Không quyền'], 0, 'Vua nắm cả 3 quyền, là người ra luật, ra quyết định và xét xử cao nhất.'),
  ]),

  M(25, 'Văn minh Đại Việt - Kinh tế', [
    Q('Kinh tế chính của Đại Việt là?', ['Nông nghiệp lúa nước','Công nghiệp','Du lịch','Dịch vụ'], 0, 'Nông nghiệp lúa nước là kinh tế chủ đạo của Đại Việt.'),
    Q('Chính sách ruộng đất nổi bật thời Lý - Trần?', ['Quân điền + điền trang thái ấp','Thuê đất','Đấu thầu','Cổ phần'], 0, 'Lý - Trần có chế độ điền trang thái ấp; Lê Sơ làm quân điền chia ruộng.'),
    Q('Thủ công nghiệp Đại Việt phát triển mạnh với?', ['Gốm Bát Tràng, lụa Hà Đông, đồng Đại Bái','Dầu mỏ','Sắt thép','Điện tử'], 0, 'Các làng nghề thủ công gốm, lụa, đồng nổi tiếng cả nước.'),
    Q('Thương cảng nổi tiếng thời Đại Việt?', ['Vân Đồn, Phố Hiến, Hội An','Sài Gòn','Hải Phòng','Đà Nẵng'], 0, 'Vân Đồn (Quảng Ninh), Phố Hiến (Hưng Yên), Hội An (Quảng Nam) là cảng thị lớn.'),
    Q('Tiền đầu tiên của Đại Việt là?', ['Đồng tiền "Đại Việt" thời Đinh','Vỏ sò','Vàng nén','Đồng đô la'], 0, 'Tiền đầu tiên xuất hiện thời Đinh (TK X).'),
    Q('Tiền giấy đầu tiên ở VN thời?', ['Hồ Quý Ly','Lý','Trần','Lê'], 0, 'Hồ Quý Ly phát hành tiền giấy "Thông bảo hội sao" — đầu tiên ở VN.'),
  ]),

  M(26, 'Văn minh Đại Việt - Giáo dục và khoa cử', [
    Q('Quốc Tử Giám lập năm?', ['1076','1010','1284','1407'], 0, 'Lý Nhân Tông lập Quốc Tử Giám năm 1076.'),
    Q('Khoa thi Nho học đầu tiên ở VN tổ chức năm?', ['1075','1010','1054','1428'], 0, 'Năm 1075, khoa thi Minh kinh bác học là khoa thi Nho học đầu tiên.'),
    Q('Khoa cử Đại Việt gồm 3 cấp?', ['Hương - Hội - Đình','Phổ thông - Đại học - Sau ĐH','Tiểu - Trung - Đại','Cử nhân - Thạc sĩ - TS'], 0, 'Khoa cử 3 cấp: thi Hương → thi Hội → thi Đình.'),
    Q('Người đỗ đầu thi Đình được gọi là?', ['Trạng nguyên','Bảng nhãn','Thám hoa','Hoàng giáp'], 0, 'Trạng nguyên là người đỗ đầu thi Đình (cao nhất).'),
    Q('Văn Miếu - Quốc Tử Giám hiện ở?', ['Hà Nội','Huế','Đà Nẵng','TP.HCM'], 0, 'Văn Miếu - Quốc Tử Giám tại Hà Nội là biểu tượng giáo dục Đại Việt.'),
    Q('Bia tiến sĩ ở Văn Miếu được lập từ thời?', ['Lê Sơ (1484)','Lý','Trần','Nguyễn'], 0, 'Năm 1484, Lê Thánh Tông cho lập bia tiến sĩ tại Văn Miếu.'),
  ]),

  M(27, 'Văn minh Đại Việt - Văn học và nghệ thuật', [
    Q('Văn học Đại Việt phát triển bằng các loại chữ?', ['Chữ Hán và chữ Nôm','Chỉ chữ Hán','Chỉ chữ Nôm','Chữ Latin'], 0, 'Đại Việt dùng chữ Hán làm chữ chính thức + chữ Nôm dân tộc.'),
    Q('Tác phẩm "Truyện Kiều" của?', ['Nguyễn Du','Hồ Xuân Hương','Nguyễn Trãi','Lê Quý Đôn'], 0, 'Nguyễn Du (1766-1820) viết Truyện Kiều bằng chữ Nôm — kiệt tác văn học.'),
    Q('Hồ Xuân Hương được mệnh danh là?', ['Bà chúa thơ Nôm','Vua thơ Hán','Vua truyện','Vua sử'], 0, 'Hồ Xuân Hương — "Bà chúa thơ Nôm" với phong cách táo bạo, phá cách.'),
    Q('Nhà sử học lớn thời Trần - Lê là?', ['Lê Văn Hưu, Ngô Sĩ Liên','Nguyễn Du','Hồ Xuân Hương','Nguyễn Trãi'], 0, 'Lê Văn Hưu (Đại Việt sử ký), Ngô Sĩ Liên (Đại Việt sử ký toàn thư).'),
    Q('Kiến trúc nổi tiếng Đại Việt?', ['Chùa Một Cột, Tháp Phổ Minh, Văn Miếu','Kim tự tháp','Vạn lý trường thành','Colosseum'], 0, 'Chùa Một Cột (Lý), Tháp Phổ Minh (Trần), Văn Miếu là kiến trúc tiêu biểu.'),
    Q('Loại hình nghệ thuật biểu diễn dân gian VN?', ['Chèo, tuồng, ca trù, quan họ','Opera','Ballet','Rock'], 0, 'Chèo, tuồng, ca trù, quan họ, hát xẩm... là nghệ thuật biểu diễn truyền thống.'),
  ]),

  M(28, 'Văn minh Đại Việt - Khoa học kỹ thuật', [
    Q('Tác phẩm y học nổi tiếng của Lê Hữu Trác (Hải Thượng Lãn Ông)?', ['Hải Thượng y tông tâm lĩnh','Đại Việt sử ký','Truyện Kiều','Vũ trung tuỳ bút'], 0, 'Hải Thượng y tông tâm lĩnh là bộ sách y học lớn của Hải Thượng Lãn Ông.'),
    Q('Tuệ Tĩnh có công với ngành?', ['Y học cổ truyền VN','Toán học','Thiên văn','Quân sự'], 0, 'Tuệ Tĩnh (TK XIV) — Thánh thuốc Nam, tổ ngành y học cổ truyền VN.'),
    Q('Lê Quý Đôn là?', ['Nhà bác học lớn thời Lê - Trịnh','Vua','Tướng quân','Thầy chùa'], 0, 'Lê Quý Đôn (1726-1784) là nhà bác học lớn với nhiều tác phẩm sử, địa, văn.'),
    Q('Tác phẩm địa lý của Lê Quý Đôn?', ['Phủ Biên tạp lục','Đại Việt sử ký','Truyện Kiều','Hồng Đức'], 0, 'Phủ Biên tạp lục viết về vùng Thuận - Quảng (Đàng Trong).'),
    Q('Tác giả Đại Nam thực lục là?', ['Quốc sử quán triều Nguyễn','Lê Văn Hưu','Ngô Sĩ Liên','Nguyễn Du'], 0, 'Đại Nam thực lục do Quốc sử quán triều Nguyễn biên soạn.'),
    Q('Đại Nam nhất thống chí là?', ['Bộ địa lý lịch sử lớn triều Nguyễn','Tiểu thuyết','Thơ','Y học'], 0, 'Đại Nam nhất thống chí mô tả địa lý, hành chính cả nước thời Nguyễn.'),
  ]),

  M(29, 'Văn minh Đại Việt - Tôn giáo và tín ngưỡng', [
    Q('Ba tôn giáo lớn ở Đại Việt thời trung đại?', ['Nho - Phật - Đạo (Lão)','Hồi - Do Thái - Kitô','Hindu - Hồi - Bà La Môn','Cao Đài - Hoà Hảo'], 0, 'Tam giáo: Nho giáo, Phật giáo, Đạo giáo (Lão giáo).'),
    Q('Phật giáo phát triển mạnh nhất ở thời?', ['Lý - Trần','Lê Sơ','Nguyễn','Bắc thuộc'], 0, 'Phật giáo là quốc giáo thời Lý - Trần, ảnh hưởng sâu rộng.'),
    Q('Nho giáo lên ngôi quốc giáo thời?', ['Lê Sơ','Lý','Trần','Đinh'], 0, 'Lê Sơ (đặc biệt Lê Thánh Tông) đưa Nho giáo lên thành tư tưởng chính thức.'),
    Q('Thiên Chúa giáo du nhập VN từ?', ['TK XVI qua giáo sĩ phương Tây','TK X','TK V','TK XIX'], 0, 'Thiên Chúa giáo theo các giáo sĩ Bồ Đào Nha, Pháp vào VN từ TK XVI.'),
    Q('Tín ngưỡng dân gian VN nổi bật là?', ['Thờ cúng tổ tiên, thờ Mẫu, thờ thành hoàng','Vô thần','Thờ Mặt Trời','Thờ động vật'], 0, 'Người Việt thờ tổ tiên, thờ Mẫu, thành hoàng làng là tín ngưỡng chủ đạo.'),
    Q('Tín ngưỡng thờ Hùng Vương được tôn vinh là?', ['Di sản văn hoá phi vật thể UNESCO','Phim','Sách','Game'], 0, 'Năm 2012, UNESCO công nhận tín ngưỡng thờ Hùng Vương là di sản phi vật thể.'),
  ]),

  M(30, 'Việt Nam đầu TK XIX trước khi Pháp xâm lược', [
    Q('Đầu TK XIX, VN có vị trí?', ['Quốc gia thống nhất từ Lạng Sơn đến Cà Mau','Bị chia 2 miền','Thuộc Trung Quốc','Thuộc Pháp'], 0, 'Sau khi Gia Long thống nhất 1802, VN là quốc gia liền dải Bắc - Nam.'),
    Q('Diện tích VN đầu TK XIX khoảng?', ['Tương đương ngày nay (sau khi chiếm Tây Nguyên muộn hơn)','Chỉ Đông Bắc Bộ','Chỉ Nam Bộ','Cả Lào Campuchia'], 0, 'Lãnh thổ VN đầu TK XIX gần với hình dạng ngày nay.'),
    Q('Kinh tế VN đầu TK XIX chủ yếu?', ['Nông nghiệp tự cấp','Công nghiệp nặng','Du lịch','Dầu mỏ'], 0, 'Kinh tế nông nghiệp tự cấp, kỹ thuật canh tác lạc hậu so với phương Tây.'),
    Q('Chính sách ngoại giao của nhà Nguyễn là?', ['"Bế quan toả cảng" với phương Tây','Mở cửa hoàn toàn','Đầu hàng','Đánh tất cả'], 0, 'Bế quan toả cảng → tụt hậu, mất cơ hội canh tân.'),
    Q('Đề nghị canh tân của Nguyễn Trường Tộ bị?', ['Triều đình không chấp nhận','Chấp nhận hoàn toàn','Áp dụng ngay','Quên'], 0, 'Nguyễn Trường Tộ dâng nhiều bản điều trần nhưng bị triều đình bỏ qua.'),
    Q('Năm 1858, sự kiện gì xảy ra?', ['Pháp nổ súng tấn công Đà Nẵng','Nguyễn Ánh lên ngôi','Quang Trung đại phá quân Thanh','Mạc Đăng Dung cướp ngôi'], 0, 'Ngày 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công Đà Nẵng — mở đầu xâm lược.'),
  ]),

  M(31, 'Văn minh thế giới TK XV-XVIII', [
    Q('Phong trào Phục Hưng (Renaissance) ở châu Âu là?', ['Khôi phục văn minh Hy - La và phát triển nhân văn','Quay về Trung cổ','Cách mạng công nghiệp','Cách mạng tư sản'], 0, 'Renaissance (TK XIV-XVI) phục hưng văn hoá Hy Lạp, La Mã và đề cao con người.'),
    Q('Đại diện tiêu biểu của Phục Hưng là?', ['Leonardo da Vinci, Michelangelo','Newton','Watt','Edison'], 0, 'Leonardo da Vinci, Michelangelo, Raphael là nghệ sĩ tiêu biểu Phục Hưng.'),
    Q('Cải cách tôn giáo do?', ['Martin Luther khởi xướng','Lê-nin','Marx','Galileo'], 0, 'Luther (1517) đăng 95 luận đề, mở đầu phong trào Kháng Cách (Protestant).'),
    Q('Các cuộc phát kiến địa lý TK XV-XVI gắn với?', ['Columbus, Magellan, Vasco da Gama','Newton','Einstein','Galileo'], 0, 'Columbus phát hiện châu Mỹ (1492), Magellan đi vòng quanh thế giới (1519-22).'),
    Q('Cách mạng khoa học TK XVI-XVII gắn với?', ['Copernicus, Galileo, Newton','Marx','Lenin','Mao'], 0, 'Copernicus (nhật tâm), Galileo (kính viễn vọng), Newton (cơ học).'),
    Q('Cách mạng tư sản đầu tiên là?', ['Cách mạng Hà Lan TK XVI','Pháp 1789','Mỹ 1776','Nga 1917'], 0, 'Cách mạng tư sản Hà Lan (cuối TK XVI) là cách mạng tư sản đầu tiên thế giới.'),
  ]),

  M(32, 'Cách mạng tư sản TK XVII-XVIII', [
    Q('Cách mạng tư sản Anh nổ ra năm?', ['1642-1689','1776','1789','1917'], 0, 'Cách mạng Anh 1642-1689 với "Cách mạng Vinh Quang" 1688 kết thúc.'),
    Q('Cách mạng tư sản Mỹ là?', ['Chiến tranh giành độc lập (1775-1783)','Nội chiến','Thế chiến','Vùng vịnh'], 0, '13 bang Bắc Mỹ giành độc lập từ Anh, lập Hợp chúng quốc Hoa Kỳ.'),
    Q('Tuyên ngôn độc lập Mỹ do ai soạn chính?', ['Thomas Jefferson','Washington','Lincoln','Franklin'], 0, 'Jefferson soạn Tuyên ngôn độc lập Mỹ ký 4/7/1776.'),
    Q('Cách mạng Pháp nổ ra năm?', ['1789','1776','1648','1917'], 0, 'Cách mạng Pháp bắt đầu 14/7/1789 với phá ngục Bastille.'),
    Q('Khẩu hiệu cách mạng Pháp là?', ['"Tự do - Bình đẳng - Bác ái"','"Cải cách - mở cửa"','"Công bằng - dân chủ"','"Đổi mới"'], 0, '"Liberté, Égalité, Fraternité" là khẩu hiệu cách mạng Pháp.'),
    Q('Tuyên ngôn Nhân quyền và Dân quyền của Pháp năm?', ['1789','1776','1804','1815'], 0, 'Tuyên ngôn Nhân quyền và Dân quyền được Quốc hội Pháp thông qua 26/8/1789.'),
  ]),

  M(33, 'Cách mạng công nghiệp', [
    Q('Cách mạng công nghiệp lần thứ nhất bắt đầu ở?', ['Anh, cuối TK XVIII','Đức','Pháp','Mỹ'], 0, 'Cách mạng công nghiệp 1.0 bắt đầu ở Anh cuối TK XVIII với động cơ hơi nước.'),
    Q('Máy hơi nước do ai cải tiến nổi tiếng?', ['James Watt','Edison','Tesla','Newton'], 0, 'James Watt cải tiến máy hơi nước (1769), mở rộng dùng trong công nghiệp.'),
    Q('Phát minh nào tiêu biểu thời kỳ này?', ['Máy dệt, máy hơi nước, đầu máy xe lửa','Điện thoại','Internet','TV'], 0, 'Máy dệt (Hargreaves), máy hơi nước (Watt), đầu máy xe lửa (Stephenson) là phát minh tiêu biểu.'),
    Q('Cách mạng công nghiệp 2.0 (TK XIX-XX) dựa trên?', ['Điện và động cơ đốt trong','Internet','Hơi nước','AI'], 0, 'CMCN 2.0 với điện (Edison), động cơ đốt trong, dây chuyền (Ford).'),
    Q('Hậu quả tích cực của CMCN?', ['Tăng năng suất, đô thị hoá','Mất việc','Phá rừng','Chiến tranh'], 0, 'Năng suất bùng nổ, đô thị hoá, giai cấp công nhân hình thành.'),
    Q('Hậu quả tiêu cực của CMCN?', ['Bóc lột lao động, ô nhiễm','Hết bệnh','Không có ai thất nghiệp','Hoà bình tuyệt đối'], 0, 'CMCN gây bóc lột lao động trẻ em, phụ nữ; ô nhiễm môi trường.'),
  ]),

  M(34, 'Sử học và đời sống hiện đại', [
    Q('Vai trò của Sử học hôm nay?', ['Giáo dục công dân, bảo tồn di sản, phát triển du lịch','Chỉ thi cử','Vô dụng','Chỉ cho học giả'], 0, 'Sử học giúp giáo dục, bảo tồn di sản, phát triển công nghiệp văn hoá.'),
    Q('Di sản văn hoá VN được UNESCO công nhận gồm?', ['Vịnh Hạ Long, Phong Nha, Cố đô Huế, phố cổ Hội An...','Chỉ 1 di sản','Không có','Chỉ Hà Nội'], 0, 'VN có nhiều di sản UNESCO: Hạ Long, Phong Nha - Kẻ Bàng, Huế, Hội An, Mỹ Sơn...'),
    Q('Bảo tàng có chức năng?', ['Sưu tầm, bảo quản, trưng bày hiện vật lịch sử','Quán cà phê','Trường học','Bệnh viện'], 0, 'Bảo tàng lưu giữ, trưng bày, giáo dục công chúng về di sản.'),
    Q('Sử học hôm nay sử dụng?', ['Kỹ thuật số, AI, GIS để nghiên cứu','Chỉ giấy bút','Chỉ trí nhớ','Chỉ truyền miệng'], 0, 'Sử học hiện đại ứng dụng số hoá, AI, GIS, big data để nghiên cứu.'),
    Q('Du lịch lịch sử - văn hoá đem lại?', ['Giá trị kinh tế và bảo tồn di sản','Chỉ tốn kém','Phá hoại','Vô dụng'], 0, 'Du lịch văn hoá tạo thu nhập, đồng thời thúc đẩy bảo tồn di sản.'),
    Q('Học sinh có thể đóng góp gì cho Sử học?', ['Tìm hiểu, lan tỏa, bảo vệ di sản','Không gì','Phá hoại','Đốt sách'], 0, 'Học sinh có thể tham gia tìm hiểu, lan toả và bảo vệ di sản văn hoá lịch sử.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Văn minh Hy Lạp cổ đại nổi bật với?', ['Dân chủ Athens và triết học','Kim tự tháp','Vạn lý trường thành','Bộ luật Hammurabi'], 0, 'Hy Lạp có dân chủ Athens, triết học Socrates - Plato - Aristotle.'),
    Q('Văn minh Trung Hoa có tứ đại phát minh?', ['Giấy, in, la bàn, thuốc súng','Lửa, bánh xe, đồng hồ, điện','Internet, AI, TV, điện thoại','Vàng, bạc, đồng, sắt'], 0, 'Tứ đại phát minh Trung Hoa: giấy, in, la bàn, thuốc súng.'),
    Q('Chiến thắng Bạch Đằng 938 gắn với ai?', ['Ngô Quyền','Lý Thường Kiệt','Trần Hưng Đạo','Lê Lợi'], 0, 'Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng (938).'),
    Q('Quốc hiệu Đại Việt bắt đầu từ thời?', ['Lý (1054)','Đinh','Ngô','Lê Sơ'], 0, 'Lý Thánh Tông đổi quốc hiệu thành Đại Việt năm 1054.'),
    Q('Quang Trung đại phá quân Thanh năm?', ['1789','1858','1428','1788'], 0, 'Tết Kỷ Dậu 1789, Quang Trung đại phá 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa.'),
    Q('Cách mạng Pháp nổ ra năm?', ['1789','1776','1815','1917'], 0, 'Cách mạng Pháp ngày 14/7/1789 với phá ngục Bastille.'),
  ]),
];

export const H10SU_SCENARIOS = indexBy(H10SU_WEEKS);
