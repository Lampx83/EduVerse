// ============================================================
// Lớp 7 — Lịch sử và Địa lí (GDPT 2018, tích hợp)
// HK1 (T1–18): chủ yếu LỊCH SỬ thế giới trung đại + đầu trung đại VN
// HK2 (T19–35): chủ yếu ĐỊA LÍ các châu lục + tiếp nối LSVN trung đại
// 35 tuần · 5 câu/tuần · ID prefix: "S7LSDL-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7LSDL', 'lich-su-dia', n, title, qs, opts);

export const S7LSDL_WEEKS = [
  // ===== HK1 — LỊCH SỬ TRUNG ĐẠI =====
  M(1, 'Quá trình hình thành xã hội phong kiến Tây Âu', [
    Q('Đế quốc La Mã sụp đổ vào năm nào, mở đầu thời trung đại Tây Âu?', ['Năm 1492', 'Năm 476', 'Năm 1789', 'Năm 1000'], 1, 'Năm 476 đế quốc Tây La Mã sụp đổ — mốc mở đầu thời trung đại.'),
    Q('Hai giai cấp cơ bản trong xã hội phong kiến Tây Âu là?', ['Quý tộc và nô lệ', 'Tư sản và vô sản', 'Chủ nô và nô lệ', 'Lãnh chúa và nông nô'], 3, 'Phong kiến Tây Âu: lãnh chúa phong kiến và nông nô.'),
    Q('Lãnh địa phong kiến là?', ['Vùng đất rộng lớn của lãnh chúa, kinh tế khép kín', 'Một bộ tộc du mục', 'Một thành phố', 'Một quốc gia'], 0, 'Lãnh địa là đơn vị chính trị — kinh tế cơ bản, tự cấp tự túc.'),
    Q('Nông nô khác nô lệ ở điểm nào?', ['Là chủ ruộng đất', 'Có gia đình, công cụ riêng nhưng bị lệ thuộc vào lãnh chúa', 'Bị mua bán như hàng hoá', 'Hoàn toàn tự do'], 1, 'Nông nô có gia đình, công cụ; phải nộp tô và bị gắn với ruộng đất.'),
    Q('Người Giéc-man đã đóng vai trò gì trong sự ra đời xã hội phong kiến Tây Âu?', ['Sáng lập Hồi giáo', 'Khôi phục đế quốc La Mã', 'Tiêu diệt đế quốc Tây La Mã, lập các vương quốc mới', 'Cai trị châu Á'], 2, 'Các bộ tộc Giéc-man tràn vào, tiêu diệt La Mã, lập nên các vương quốc phong kiến.'),
  ]),

  M(2, 'Lãnh địa phong kiến và quan hệ sản xuất phong kiến', [
    Q('Đặc điểm kinh tế của lãnh địa là?', ['Chỉ trồng cây công nghiệp xuất khẩu', 'Công nghiệp phát triển', 'Mở cửa buôn bán quốc tế', 'Tự cấp tự túc, đóng kín'], 3, 'Lãnh địa là nền kinh tế khép kín, tự cung tự cấp.'),
    Q('Người đứng đầu lãnh địa gọi là?', ['Hoàng đế', 'Giáo hoàng', 'Lãnh chúa', 'Thủ lĩnh bộ lạc'], 2, 'Lãnh chúa có quyền tuyệt đối trong lãnh địa của mình.'),
    Q('Tô thuế chủ yếu nông nô phải nộp là?', ['Tô bằng vàng bạc', 'Tô lao dịch và tô hiện vật', 'Tô tiền', 'Không phải nộp gì'], 1, 'Nông nô nộp tô lao dịch (làm không công) và tô hiện vật (sản phẩm).'),
    Q('Lãnh chúa sống chủ yếu dựa vào?', ['Bóc lột nông nô', 'Đi đánh cá', 'Tự cày cấy', 'Buôn bán'], 0, 'Lãnh chúa ăn chơi xa hoa, sống nhờ tô thuế từ nông nô.'),
    Q('Vì sao gọi quan hệ giữa lãnh chúa và nông nô là quan hệ phong kiến?', ['Lãnh chúa chiếm ruộng đất, nông nô lệ thuộc và bị bóc lột địa tô', 'Hai bên bình đẳng', 'Nông nô làm chủ', 'Không có bóc lột'], 0, 'Đặc trưng phong kiến: địa chủ chiếm ruộng, nông dân lệ thuộc nộp tô.'),
  ]),

  M(3, 'Thành thị trung đại và sự xuất hiện thị dân', [
    Q('Thành thị trung đại Tây Âu ra đời từ khoảng?', ['Thế kỉ V', 'Thế kỉ XX', 'Thế kỉ XI', 'Thế kỉ XV'], 2, 'Từ thế kỉ XI, do thủ công nghiệp và thương nghiệp phát triển.'),
    Q('Cư dân chủ yếu của thành thị là?', ['Nông nô', 'Thợ thủ công và thương nhân', 'Tăng lữ', 'Lãnh chúa'], 1, 'Thành thị là nơi cư trú của thợ thủ công và thương nhân.'),
    Q('Phường hội là tổ chức của ai?', ['Những người cùng làm một nghề thủ công', 'Lãnh chúa phong kiến quản lí lãnh địa', 'Tăng lữ', 'Lãnh chúa'], 0, 'Phường hội là tổ chức của thợ thủ công cùng nghề trong thành thị.'),
    Q('Thương hội là tổ chức của?', ['Nông dân', 'Thương nhân', 'Trẻ em', 'Quân lính'], 1, 'Thương hội là hiệp hội của các thương nhân.'),
    Q('Vai trò của thành thị trung đại?', ['Phá vỡ kinh tế tự cung tự cấp, thúc đẩy kinh tế hàng hoá', 'Củng cố chế độ nông nô', 'Làm châu Âu lạc hậu', 'Không có tác dụng gì'], 0, 'Thành thị giúp kinh tế hàng hoá phát triển, làm rạn nứt chế độ phong kiến.'),
  ]),

  M(4, 'Các cuộc phát kiến địa lí lớn (XV–XVI)', [
    Q('Người Bồ Đào Nha B. Đi-a-xơ đã đi đến mũi đất nào năm 1487?', ['Mũi Bắc Cực', 'Mũi Cát-tê-rin', 'Mũi Cà Mau', 'Mũi Hảo Vọng (cực Nam châu Phi)'], 3, 'B. Đi-a-xơ tới mũi Hảo Vọng năm 1487.'),
    Q('C. Cô-lôm-bô tìm ra châu Mỹ năm?', ['1492', '1519', '1498', '1543'], 0, 'Năm 1492, Cô-lôm-bô đặt chân tới châu Mỹ.'),
    Q('Va-xcô đơ Ga-ma đã đến được?', ['Ấn Độ (1498) bằng đường biển vòng qua châu Phi', 'Châu Úc', 'Bắc Cực', 'Trung Quốc'], 0, 'Va-xcô đơ Ga-ma đến Ca-li-cút, Ấn Độ năm 1498.'),
    Q('Đoàn thám hiểm của Ma-gien-lăng đã làm được điều gì lớn?', ['Tìm ra mặt trăng', 'Đi vòng quanh thế giới bằng đường biển (1519–1522)', 'Tìm ra Mỹ trước Cô-lôm-bô', 'Tìm ra Bắc Cực'], 1, 'Đoàn của Ma-gien-lăng hoàn thành chuyến vòng quanh Trái Đất 1519–1522.'),
    Q('Hệ quả tích cực của các phát kiến địa lí?', ['Phá huỷ châu Âu', 'Mở rộng giao lưu Đông–Tây, thúc đẩy kinh tế hàng hoá', 'Không có tác động', 'Chấm dứt thương mại'], 1, 'Phát kiến địa lí mở ra giao lưu Đông–Tây và thúc đẩy chủ nghĩa tư bản.'),
  ]),

  M(5, 'Phong trào Văn hoá Phục Hưng', [
    Q('Phong trào Văn hoá Phục Hưng bắt đầu ở đâu?', ['I-ta-li-a', 'Đức (quê hương phong trào Cải cách tôn giáo)', 'Anh (nơi phát triển kịch Sếch-xpia về sau)', 'Pháp (trung tâm khai sáng thế kỉ XVIII)'], 0, 'Phục Hưng khởi đầu ở I-ta-li-a vào thế kỉ XIV.'),
    Q('Nội dung tư tưởng chính của Phục Hưng?', ['Đề cao con người, tự do, khoa học', 'Đề cao chế độ nông nô', 'Phản đối khoa học', 'Đề cao thần quyền'], 0, 'Chủ nghĩa nhân văn — đề cao con người, lí trí, khoa học.'),
    Q('Lê-ô-na đờ Vanh-xi nổi tiếng với tác phẩm nào?', ['Đền Pác-tê-nông', 'Bức tranh Mô-na Li-da', 'Tháp Ép-phen', 'Tượng Vệ Nữ Mi-lô'], 1, 'Lê-ô-na đờ Vanh-xi (Leonardo da Vinci) vẽ Mô-na Li-da.'),
    Q('Nhà thiên văn nào khẳng định Trái Đất quay quanh Mặt Trời?', ['Ga-li-lê', 'N. Cô-péc-ních', 'Anh-xtanh', 'Niu-tơn'], 1, 'Cô-péc-ních đưa ra thuyết Mặt Trời là trung tâm.'),
    Q('Vai trò của Phong trào Phục Hưng?', ['Phục hồi chế độ nô lệ', 'Làm khoa học lùi bước', 'Mở đường cho khoa học và tư tưởng tiến bộ phát triển', 'Củng cố chế độ phong kiến'], 2, 'Phục Hưng là cuộc cách mạng tư tưởng, mở đường cho khoa học hiện đại.'),
  ]),

  M(6, 'Cải cách tôn giáo và chiến tranh nông dân Đức', [
    Q('Người khởi xướng cuộc Cải cách tôn giáo ở Đức?', ['Sếch-xpia', 'Mác-tin Lu-thơ', 'Cô-péc-ních', 'Lê-ô-na đờ Vanh-xi'], 1, 'Năm 1517, Lu-thơ dán 95 luận điểm chống Giáo hội La Mã.'),
    Q('Cải cách tôn giáo lập ra giáo phái nào?', ['Hồi giáo', 'Hin-đu giáo', 'Tin Lành (Tân giáo)', 'Phật giáo'], 2, 'Đạo Tin Lành ra đời, chống lại Giáo hội Thiên Chúa La Mã.'),
    Q('Cuộc chiến tranh nông dân Đức (1524–1525) do ai lãnh đạo?', ['Lu-thơ', 'Can-vanh', 'Cô-péc-ních', 'Tô-mát Muyn-xơ'], 3, 'Tô-mát Muyn-xơ lãnh đạo nông dân Đức nổi dậy.'),
    Q('Vì sao có cuộc cải cách tôn giáo?', ['Người dân muốn vui chơi', 'Vua ra lệnh', 'Giáo hội bóc lột, cản trở phát triển tư sản', 'Tôn giáo tự nhiên thay đổi'], 2, 'Giáo hội cản trở sự phát triển của giai cấp tư sản, dẫn đến cải cách.'),
    Q('Ý nghĩa của Cải cách tôn giáo?', ['Làm khoa học chậm lại', 'Củng cố chế độ phong kiến', 'Đánh vào chế độ phong kiến, cổ vũ giai cấp tư sản', 'Không có ý nghĩa'], 2, 'Cải cách tôn giáo tấn công nền tảng tư tưởng phong kiến.'),
  ]),

  M(7, 'Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX', [
    Q('Triều đại nào ở Trung Quốc được coi là cường thịnh bậc nhất?', ['Nhà Đường (618–907)', 'Nhà Hán', 'Nhà Tần', 'Nhà Thanh'], 0, 'Nhà Đường là thời kì rực rỡ nhất trong lịch sử phong kiến Trung Quốc.'),
    Q('Người sáng lập nhà Đường là?', ['Lý Uyên (Đường Cao Tổ)', 'Tần Thuỷ Hoàng', 'Lưu Bang', 'Càn Long'], 0, 'Lý Uyên lập nhà Đường năm 618.'),
    Q('Nhà nào của Trung Quốc xâm lược nước ta lần đầu thất bại ở Bạch Đằng (938)?', ['Nguyên', 'Nam Hán', 'Tống (bị Lý Thường Kiệt chặn ở sông Như Nguyệt)', 'Minh (bị Lê Lợi đánh bại ở Chi Lăng — Xương Giang)'], 1, 'Nam Hán bị Ngô Quyền đánh bại trên sông Bạch Đằng năm 938.'),
    Q('Bốn phát minh lớn của Trung Quốc thời trung đại?', ['Lúa, ngô, khoai, sắn', 'Giấy, kĩ thuật in, la bàn, thuốc súng', 'Vàng, bạc, đồng, sắt', 'Bóng đèn, ô tô, máy bay, máy tính'], 1, '"Tứ đại phát minh" — giấy, in, la bàn, thuốc súng.'),
    Q('Nhà Thanh ở Trung Quốc do dân tộc nào lập?', ['Hán (dân tộc chủ thể của Trung Quốc)', 'Mãn Châu', 'Đột Quyết', 'Mông Cổ'], 1, 'Người Mãn lập nhà Thanh năm 1644.'),
  ]),

  M(8, 'Ấn Độ thời trung đại — Vương triều Mô-gôn', [
    Q('Vương triều Hồi giáo Đê-li ở Ấn Độ tồn tại trong khoảng?', ['Thế kỉ XIX–XX', 'Thế kỉ XIII–XVI', 'Trước Công nguyên', 'Thế kỉ V–VIII'], 1, 'Vương triều Đê-li (1206–1526) — Hồi giáo do người Thổ lập.'),
    Q('Người sáng lập Vương triều Mô-gôn là?', ['Ba-bua', 'A-sô-ca', 'Sa Gia-han', 'A-cơ-ba'], 0, 'Ba-bua lập Vương triều Mô-gôn năm 1526.'),
    Q('Vị vua Mô-gôn nào nổi tiếng vĩ đại nhất, đặt nền móng cho thịnh vượng?', ['O-răng-dép', 'A-cơ-ba', 'Ba-bua', 'Sa Gia-han'], 1, 'Hoàng đế A-cơ-ba (1556–1605) — vị vua vĩ đại nhất Mô-gôn.'),
    Q('Công trình Ta-giơ Ma-han do vua nào xây?', ['Sa Gia-han (xây cho hoàng hậu Mum-tát)', 'A-cơ-ba', 'Ba-bua', 'O-răng-dép'], 0, 'Sa Gia-han xây Taj Mahal làm lăng cho hoàng hậu Mumtaz Mahal.'),
    Q('Tôn giáo do các vua Mô-gôn theo là?', ['Thiên Chúa giáo', 'Phật giáo', 'Hin-đu giáo', 'Hồi giáo'], 3, 'Triều đại Mô-gôn theo Hồi giáo, cai trị đa số người Hin-đu.'),
  ]),

  M(9, 'Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI', [
    Q('Quốc gia phong kiến nào ở Đông Nam Á phát triển rực rỡ với đền Ăng-co Vát?', ['Cam-pu-chia (Ăng-co)', 'Thái Lan', 'Mi-an-ma', 'In-đô-nê-xi-a'], 0, 'Thời Ăng-co (IX–XV) là thời hoàng kim của Cam-pu-chia.'),
    Q('Vương quốc nào ở In-đô-nê-xi-a hùng mạnh thế kỉ VIII–IX?', ['Mô-gôn', 'Cao Mi-an', 'Sri-vi-giay-a', 'Đại Việt'], 2, 'Sri-vi-giay-a thống trị eo Ma-lắc-ca, khu vực hải đảo.'),
    Q('Đế quốc Pa-gan ở quốc gia nào hiện nay?', ['Lào (quê hương Vương quốc Lan Xang)', 'Thái Lan', 'Mi-an-ma (Myanmar)', 'Việt Nam'], 2, 'Pa-gan (Bagan) là đế quốc đầu tiên thống nhất Myanmar.'),
    Q('Đặc điểm chung của các quốc gia phong kiến Đông Nam Á trung đại?', ['Nông nghiệp lúa nước, ảnh hưởng văn hoá Ấn Độ và Trung Quốc', 'Hàng hải xuyên Đại Tây Dương', 'Công nghiệp nặng', 'Du mục thảo nguyên'], 0, 'Nông nghiệp lúa nước + ảnh hưởng văn hoá Ấn — Trung là đặc trưng chung.'),
    Q('Đền Bô-rô-bu-đua là công trình Phật giáo nổi tiếng ở?', ['Ấn Độ (nơi khởi nguồn Phật giáo)', 'Cam-pu-chia', 'In-đô-nê-xi-a (đảo Gia-va)', 'Việt Nam'], 2, 'Borobudur ở đảo Java, In-đô-nê-xi-a — di sản UNESCO.'),
  ]),

  M(10, 'Việt Nam từ Khúc Thừa Dụ đến Ngô Quyền', [
    Q('Năm 905, Khúc Thừa Dụ đã làm gì?', ['Đánh bại quân Tống', 'Lập nhà Lý', 'Tự xưng Tiết độ sứ, giành quyền tự chủ', 'Dời đô về Thăng Long'], 2, 'Khúc Thừa Dụ đánh dấu bước đầu giành quyền tự chủ từ tay nhà Đường.'),
    Q('Người kế tục Khúc Thừa Dụ cải cách hành chính, đặt nền tự chủ là?', ['Dương Đình Nghệ', 'Đinh Bộ Lĩnh', 'Khúc Hạo', 'Ngô Quyền'], 2, 'Khúc Hạo thực hiện nhiều cải cách quan trọng.'),
    Q('Năm 938, Ngô Quyền đánh bại quân nào trên sông Bạch Đằng?', ['Nam Hán', 'Quân Minh (bị Lê Lợi đánh bại năm 1427)', 'Nguyên', 'Quân Tống (bị chặn ở sông Như Nguyệt 1077)'], 0, 'Ngô Quyền đánh tan quân Nam Hán năm 938.'),
    Q('Kế đánh giặc nổi tiếng của Ngô Quyền là?', ['Đốt rừng', 'Đóng cọc nhọn đầu bịt sắt ở cửa sông Bạch Đằng', 'Đào hào quanh thành', 'Dùng voi chiến'], 1, 'Cọc Bạch Đằng — sáng tạo quân sự đặc sắc của Ngô Quyền.'),
    Q('Ý nghĩa chiến thắng Bạch Đằng 938?', ['Mở đầu Bắc thuộc', 'Không có ý nghĩa', 'Là thất bại', 'Chấm dứt hơn 1000 năm Bắc thuộc, mở thời kì độc lập lâu dài'], 3, 'Bạch Đằng 938 chấm dứt Bắc thuộc, mở kỉ nguyên độc lập tự chủ.'),
  ]),

  M(11, 'Nhà Đinh và Tiền Lê', [
    Q('Đinh Bộ Lĩnh dẹp loạn nào để thống nhất đất nước?', ['Loạn 3 vua', 'Loạn 12 sứ quân', 'Loạn An Sử', 'Loạn Hồng Bàng'], 1, 'Đinh Bộ Lĩnh dẹp 12 sứ quân, lập nước Đại Cồ Việt năm 968.'),
    Q('Quốc hiệu Đại Cồ Việt ra đời năm?', ['938', '1428', '968', '1010'], 2, 'Năm 968, Đinh Bộ Lĩnh lên ngôi, đặt tên nước Đại Cồ Việt.'),
    Q('Kinh đô của nhà Đinh — Tiền Lê đặt ở đâu?', ['Hoa Lư (Ninh Bình)', 'Cổ Loa', 'Thăng Long', 'Phú Xuân (kinh đô nhà Nguyễn sau này)'], 0, 'Hoa Lư — kinh đô tự nhiên hiểm yếu.'),
    Q('Vị vua nào lập ra nhà Tiền Lê, đánh bại quân Tống xâm lược năm 981?', ['Trần Hưng Đạo', 'Đinh Bộ Lĩnh', 'Lê Hoàn (Lê Đại Hành)', 'Lý Thường Kiệt'], 2, 'Lê Hoàn lên ngôi, đại phá quân Tống trên sông Bạch Đằng 981.'),
    Q('Đóng góp của nhà Đinh — Tiền Lê?', ['Đầu hàng nhà Tống', 'Mở rộng Bắc thuộc', 'Suy yếu đất nước', 'Củng cố nền độc lập, thống nhất đất nước, đánh bại Tống'], 3, 'Đinh — Tiền Lê đặt nền móng vững chắc cho độc lập dân tộc.'),
  ]),

  M(12, 'Nhà Lý xây dựng và phát triển đất nước', [
    Q('Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư về?', ['Phú Xuân (kinh đô nhà Nguyễn từ 1802)', 'Đại La (đổi tên thành Thăng Long)', 'Phú Xuân', 'Cổ Loa'], 1, 'Năm 1010, Lý Thái Tổ dời đô về Đại La, đổi tên Thăng Long.'),
    Q('Quốc hiệu nhà Lý đặt từ năm 1054 là?', ['Đại Cồ Việt', 'Đại Việt', 'Việt Nam', 'Đại Nam'], 1, 'Năm 1054, Lý Thánh Tông đổi quốc hiệu thành Đại Việt.'),
    Q('Văn Miếu — Quốc Tử Giám lập thời Lý nhằm?', ['Lập kho lương', 'Trại lính', 'Thờ Khổng Tử và đào tạo nhân tài', 'Thờ Phật'], 2, 'Văn Miếu (1070), Quốc Tử Giám (1076) — trường đại học đầu tiên VN.'),
    Q('Bộ luật thành văn đầu tiên của nước ta là?', ['Hình thư (thời Lý)', 'Gia Long', 'Hồng Đức', 'Hà Nội'], 0, 'Bộ Hình thư ban hành thời Lý Thái Tông (1042).'),
    Q('Lý Thường Kiệt nổi tiếng với bài thơ thần?', ['"Hịch tướng sĩ"', '"Nam quốc sơn hà"', '"Bình Ngô đại cáo"', '"Truyện Kiều"'], 1, 'Bài thơ "Nam quốc sơn hà" — bản tuyên ngôn độc lập đầu tiên.'),
  ]),

  M(13, 'Cuộc kháng chiến chống Tống thời Lý (1075–1077)', [
    Q('Lý Thường Kiệt chủ trương "tiên phát chế nhân" nghĩa là?', ['Đầu hàng trước', 'Đợi địch tới mới đánh', 'Cầu hoà ngay lập tức', 'Chủ động tấn công trước để chế ngự địch'], 3, '"Tiên phát chế nhân" — đánh phủ đầu để chế ngự kẻ địch.'),
    Q('Năm 1075, Lý Thường Kiệt tấn công vào căn cứ nào của Tống?', ['Hà Khẩu', 'Mê Linh', 'Châu Ung, châu Khâm, châu Liêm (Trung Quốc)', 'Hà Nội'], 2, 'Đánh sang đất Tống — chiến lược tấn công bất ngờ.'),
    Q('Phòng tuyến nào chặn đại quân Tống năm 1077?', ['Sông Bạch Đằng', 'Sông Hồng', 'Sông Đà', 'Sông Như Nguyệt (sông Cầu)'], 3, 'Phòng tuyến Như Nguyệt — kì tích của Lý Thường Kiệt.'),
    Q('Sau chiến thắng, Lý Thường Kiệt làm gì?', ['Đầu hàng', 'Dời đô', 'Tiếp tục đánh sâu vào Tống', 'Chủ động giảng hoà, để giữ quan hệ ổn định'], 3, 'Sau khi chiến thắng, ông chủ động giảng hoà để giữ hoà bình lâu dài.'),
    Q('Ý nghĩa cuộc kháng chiến chống Tống 1075–1077?', ['Phải cống nạp Tống', 'Thất bại', 'Mất một phần đất', 'Bảo vệ độc lập, khẳng định sức mạnh Đại Việt'], 3, 'Đại Việt khẳng định mạnh mẽ chủ quyền trước nhà Tống.'),
  ]),

  M(14, 'Nhà Trần xây dựng đất nước', [
    Q('Nhà Trần được thành lập năm?', ['1226', '1400', '1010', '1428'], 0, 'Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh năm 1226.'),
    Q('Người đặt nền móng cho nhà Trần là?', ['Trần Nhân Tông', 'Trần Quang Khải', 'Trần Hưng Đạo', 'Trần Thủ Độ'], 3, 'Trần Thủ Độ là kiến trúc sư của triều Trần.'),
    Q('Chế độ "Thái thượng hoàng" của nhà Trần nghĩa là?', ['Vua sống ẩn dật', 'Vua không có quyền', 'Vua sống ở Trung Quốc', 'Vua cha truyền ngôi cho con, ở phía sau cùng trị vì'], 3, 'Vua cha nhường ngôi nhưng vẫn cùng coi sóc triều chính.'),
    Q('Bộ luật nào ban hành thời Trần?', ['Hình thư', 'Quốc triều hình luật', 'Hồng Đức', 'Gia Long'], 1, 'Quốc triều hình luật ban hành dưới triều Trần.'),
    Q('Nhà Trần có cải cách nông nghiệp nào nổi bật?', ['Phá hết đê điều', 'Lấp sông Hồng', 'Đắp đê Đỉnh nhĩ (đê quai vạc) dọc các sông lớn', 'Cấm trồng lúa'], 2, 'Hệ thống đê Đỉnh nhĩ giúp trị thuỷ và mở rộng diện tích trồng lúa.'),
  ]),

  M(15, 'Ba lần kháng chiến chống Mông — Nguyên (XIII)', [
    Q('Quân Mông Cổ — Nguyên xâm lược Đại Việt mấy lần?', ['5 lần', '1 lần', '3 lần (1258, 1285, 1287–1288)', '2 lần'], 2, 'Ba cuộc xâm lược: 1258, 1285, 1287–1288.'),
    Q('Người chỉ huy quân Đại Việt trong các cuộc kháng chiến chống Nguyên là?', ['Lý Thường Kiệt', 'Ngô Quyền', 'Trần Hưng Đạo (Trần Quốc Tuấn)', 'Lê Lợi'], 2, 'Trần Quốc Tuấn — Hưng Đạo Vương — Đại Vương quân sự.'),
    Q('"Hịch tướng sĩ" do ai soạn?', ['Trần Hưng Đạo', 'Nguyễn Trãi', 'Quang Trung', 'Lý Thường Kiệt'], 0, 'Trần Hưng Đạo soạn để khích lệ tướng sĩ chống quân Nguyên.'),
    Q('Câu nói nổi tiếng của vua Trần Nhân Tông tại Hội nghị Diên Hồng?', ['"Cống nạp"', '"Hoà!"', '"Đầu hàng"', '"Đánh!"'], 3, 'Các bô lão đồng thanh "Đánh!" tại Hội nghị Diên Hồng.'),
    Q('Trận thuỷ chiến nổi tiếng năm 1288 nhấn chìm quân Nguyên?', ['Chương Dương', 'Bạch Đằng', 'Như Nguyệt', 'Đông Bộ Đầu'], 1, 'Trận Bạch Đằng 1288 — đỉnh cao nghệ thuật quân sự Trần Hưng Đạo.'),
  ]),

  M(16, 'Suy yếu nhà Trần — Hồ Quý Ly và cải cách', [
    Q('Cuối thế kỉ XIV, nhà Trần suy yếu chủ yếu vì?', ['Bị bão lũ liên miên', 'Bị nội chiến phía Nam', 'Vua quan ăn chơi xa xỉ, ruộng đất tập trung vào tay quý tộc', 'Bị Mông Cổ chiếm'], 2, 'Tham nhũng, phân hoá ruộng đất, khởi nghĩa nông dân nổ ra.'),
    Q('Hồ Quý Ly truất ngôi nhà Trần lập nhà Hồ năm?', ['1400', '1428', '1226', '1010'], 0, 'Hồ Quý Ly lập nhà Hồ năm 1400, đổi quốc hiệu Đại Ngu.'),
    Q('Cải cách "hạn điền" của Hồ Quý Ly là?', ['Cấm dùng tiền', 'Cấm cày ruộng', 'Giới hạn diện tích ruộng tư của quý tộc', 'Cấm học chữ Hán'], 2, 'Hạn điền hạn chế sự bành trướng ruộng tư của quý tộc.'),
    Q('Hồ Quý Ly cho phát hành loại tiền nào lần đầu?', ['Tiền nhựa', 'Tiền giấy "Thông bảo hội sao"', 'Tiền điện tử', 'Tiền vàng'], 1, 'Tiền giấy đầu tiên của Việt Nam dưới thời Hồ.'),
    Q('Nhà Hồ thất bại trước quân Minh năm?', ['1400', '1407', '1428', '1789'], 1, 'Năm 1407, nhà Hồ sụp đổ, nước ta rơi vào ách Minh thuộc.'),
  ]),

  M(17, 'Khởi nghĩa Lam Sơn và sự ra đời nhà Lê sơ', [
    Q('Lê Lợi dựng cờ khởi nghĩa Lam Sơn năm?', ['1428', '1442', '1407', '1418'], 3, 'Năm 1418, Lê Lợi khởi nghĩa tại Lam Sơn (Thanh Hoá).'),
    Q('Người được coi là quân sư xuất sắc của Lê Lợi?', ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Nguyễn Trãi', 'Hồ Quý Ly'], 2, 'Nguyễn Trãi soạn "Bình Ngô đại cáo" và là quân sư.'),
    Q('Khởi nghĩa Lam Sơn kết thúc thắng lợi năm?', ['1407', '1010', '1427 (Trận Chi Lăng — Xương Giang)', '1789'], 2, 'Năm 1427, nghĩa quân Lam Sơn đại thắng, quân Minh rút về.'),
    Q('"Bình Ngô đại cáo" được coi là?', ['Bài thơ tình', 'Truyện kể', 'Bản tuyên ngôn độc lập thứ 2 của nước ta', 'Hịch tướng sĩ'], 2, 'Nguyễn Trãi soạn — bản tuyên ngôn độc lập hùng tráng.'),
    Q('Nhà Lê sơ chính thức thành lập năm?', ['1407', '1226', '1428 (Lê Lợi lên ngôi, đặt quốc hiệu Đại Việt)', '1010'], 2, 'Lê Lợi lên ngôi vua, lập nhà Lê sơ năm 1428.'),
  ]),

  M(18, 'Ôn tập Lịch sử HK1', [
    Q('Năm 938 gắn với sự kiện nào?', ['Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng', 'Hồ Quý Ly lập nhà Hồ', 'Lý Công Uẩn dời đô', 'Lê Lợi khởi nghĩa'], 0, 'Năm 938 — chiến thắng Bạch Đằng, chấm dứt Bắc thuộc.'),
    Q('Triều đại nào dời đô về Thăng Long?', ['Nhà Lý (1010)', 'Nhà Đinh', 'Nhà Trần', 'Nhà Tiền Lê'], 0, 'Lý Công Uẩn dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.'),
    Q('Triều đại nào lập phòng tuyến sông Như Nguyệt chống Tống?', ['Nhà Hồ', 'Nhà Lê sơ', 'Nhà Lý', 'Nhà Trần'], 2, 'Lý Thường Kiệt lập phòng tuyến Như Nguyệt năm 1077.'),
    Q('Triều đại nào ba lần đánh thắng Mông — Nguyên?', ['Nhà Trần', 'Nhà Lê', 'Nhà Hồ', 'Nhà Lý'], 0, 'Nhà Trần ba lần chiến thắng quân Mông — Nguyên (1258, 1285, 1288).'),
    Q('Cuộc khởi nghĩa nào kết thúc ách đô hộ của nhà Minh?', ['Khởi nghĩa Lý Bí', 'Khởi nghĩa Bà Triệu', 'Khởi nghĩa Hai Bà Trưng', 'Khởi nghĩa Lam Sơn'], 3, 'Khởi nghĩa Lam Sơn (1418–1427) đánh đuổi quân Minh.'),
  ]),

  // ===== HK2 — ĐỊA LÍ CÁC CHÂU LỤC + TIẾP TỤC LSVN =====
  M(19, 'Châu Á — vị trí, kích thước và địa hình', [
    Q('Châu Á là châu lục có diện tích?', ['Bằng châu Phi', 'Bằng châu Âu', 'Nhỏ nhất', 'Lớn nhất thế giới (~44,4 triệu km²)'], 3, 'Châu Á rộng nhất, chiếm ~30% diện tích đất nổi.'),
    Q('Châu Á tiếp giáp với mấy đại dương?', ['5', '3 (Bắc Băng Dương, Thái Bình Dương, Ấn Độ Dương)', '1', '2'], 1, 'Châu Á giáp 3 đại dương lớn.'),
    Q('Dãy núi cao nhất thế giới ở châu Á là?', ['Hi-ma-lay-a', 'Cooc-đi-e', 'An-đét', 'An-pơ (dãy núi trẻ ở châu Âu)'], 0, 'Hi-ma-lay-a có đỉnh Everest 8848 m — cao nhất thế giới.'),
    Q('Đồng bằng nào lớn nhất châu Á?', ['Đồng bằng sông Mê Công', 'Đồng bằng Hoa Bắc', 'Đồng bằng Ấn — Hằng', 'Đồng bằng Tây Xi-bia'], 3, 'Đồng bằng Tây Xi-bia rộng nhất châu Á (~2,6 triệu km²).'),
    Q('Sơn nguyên rộng và cao nhất thế giới ở châu Á là?', ['Sơn nguyên I-ran', 'Sơn nguyên A-ráp', 'Sơn nguyên Tây Tạng', 'Sơn nguyên Đề-can'], 2, 'Tây Tạng — "nóc nhà thế giới", cao trung bình ~4500 m.'),
  ]),

  M(20, 'Khí hậu và sông ngòi châu Á', [
    Q('Khí hậu châu Á có đặc điểm gì nổi bật?', ['Chỉ có khí hậu nóng', 'Chỉ có khí hậu lạnh', 'Đa dạng nhất thế giới, phân hoá theo đới và khu vực', 'Đồng đều khắp nơi'], 2, 'Châu Á có đủ các đới khí hậu: hàn — ôn — nhiệt — xích đạo.'),
    Q('Khí hậu gió mùa châu Á tập trung ở khu vực nào?', ['Bắc Á (vùng khí hậu ôn đới lạnh)', 'Trung Á', 'Nam Á, Đông Á, Đông Nam Á', 'Tây Nam Á'], 2, 'Khu vực gió mùa: Nam Á, Đông Á, Đông Nam Á.'),
    Q('Sông dài nhất châu Á?', ['Sông Hồng', 'Sông Mê Công', 'Sông Trường Giang (~6300 km)', 'Sông Hằng'], 2, 'Trường Giang (Dương Tử) dài nhất châu Á, thứ 3 thế giới.'),
    Q('Sông nào chảy qua nhiều quốc gia Đông Nam Á?', ['Sông Hoàng Hà', 'Sông Mê Công', 'Sông Hồng', 'Sông Ấn'], 1, 'Mê Công chảy qua TQ, Mi-an-ma, Lào, Thái Lan, Cam-pu-chia, VN.'),
    Q('Khí hậu lục địa khô hạn rộng lớn ở châu Á thuộc khu vực?', ['Đông Á', 'Trung Á và Tây Nam Á', 'Nam Á (khí hậu nhiệt đới gió mùa ẩm)', 'Đông Nam Á'], 1, 'Trung Á, Tây Nam Á khô hạn, có hoang mạc rộng.'),
  ]),

  M(21, 'Dân cư — xã hội châu Á', [
    Q('Châu Á chiếm khoảng bao nhiêu phần dân số thế giới?', ['~20% (nhầm với châu Phi)', '~90% (vượt quá tổng dân số thế giới)', '~10% (nhầm với châu Âu)', '~60%'], 3, 'Châu Á có ~4,7 tỉ người, chiếm ~60% dân số thế giới.'),
    Q('Hai quốc gia đông dân nhất thế giới đều ở châu Á?', ['Trung Quốc và Ấn Độ', 'Việt Nam và Lào', 'Thái Lan và In-đô-nê-xi-a', 'Nhật Bản và Hàn Quốc'], 0, 'Trung Quốc và Ấn Độ, mỗi nước trên 1,4 tỉ dân.'),
    Q('Châu Á là cái nôi của những nền văn minh lớn nào?', ['Hi Lạp và La Mã', 'Mỹ La-tinh', 'Châu Đại Dương', 'Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa'], 3, 'Bốn nền văn minh cổ đại lớn (3 ở châu Á + Ai Cập ở Bắc Phi).'),
    Q('Tôn giáo nào ra đời ở châu Á?', ['Phật giáo, Hin-đu giáo, Hồi giáo, Ki-tô giáo', 'Chỉ Phật giáo', 'Không có tôn giáo nào', 'Chỉ Hồi giáo'], 0, '4 tôn giáo lớn đều khởi nguồn ở châu Á.'),
    Q('Việt Nam thuộc khu vực nào của châu Á?', ['Đông Nam Á', 'Đông Á', 'Trung Á', 'Nam Á (gồm Ấn Độ, Pa-ki-xtan, Băng-la-đét)'], 0, 'Việt Nam thuộc khu vực Đông Nam Á.'),
  ]),

  M(22, 'Châu Âu — vị trí, địa hình', [
    Q('Châu Âu nằm ở phía nào của lục địa Á–Âu?', ['Trung tâm', 'Phía tây', 'Phía bắc cực', 'Phía đông'], 1, 'Châu Âu là phần phía tây của lục địa Á–Âu.'),
    Q('Châu Âu có diện tích khoảng?', ['~30 triệu km²', '~10 triệu km²', '~44 triệu km²', '~1 triệu km²'], 1, 'Châu Âu ~10,18 triệu km² — nhỏ thứ hai sau châu Đại Dương.'),
    Q('Dãy núi nào ngăn cách châu Âu với châu Á?', ['An-pơ (nằm trong nội bộ Tây Âu)', 'Cap-pa', 'Pi-rê-nê', 'U-ran'], 3, 'Dãy U-ran (Ural) — ranh giới tự nhiên Âu — Á.'),
    Q('Đồng bằng lớn nhất châu Âu?', ['Đồng bằng Đông Âu (Nga)', 'Đồng bằng Hung-ga-ri', 'Đồng bằng Trung Âu', 'Đồng bằng Pa-ri'], 0, 'Đồng bằng Đông Âu rộng lớn nhất.'),
    Q('Bán đảo nào lớn nhất châu Âu?', ['Bán đảo I-ta-li-a', 'Bán đảo Xcan-đi-na-vi', 'Bán đảo Ban-căng', 'Bán đảo I-bê-rích'], 1, 'Bán đảo Scandinavi (Na Uy, Thuỵ Điển) lớn nhất châu Âu.'),
  ]),

  M(23, 'Khí hậu và dân cư châu Âu', [
    Q('Phần lớn lãnh thổ châu Âu có khí hậu?', ['Hàn đới', 'Nhiệt đới', 'Xích đạo', 'Ôn đới'], 3, 'Châu Âu chủ yếu ôn đới (ôn đới hải dương, lục địa).'),
    Q('Khí hậu ôn đới hải dương đặc trưng cho vùng nào châu Âu?', ['Bắc cực', 'Tây Âu (Anh, Pháp, Đức)', 'Đông Âu', 'Địa Trung Hải'], 1, 'Tây Âu chịu ảnh hưởng dòng biển nóng — ôn đới hải dương.'),
    Q('Khí hậu Địa Trung Hải có đặc điểm?', ['Mưa quanh năm', 'Mùa hạ nóng — khô, mùa đông ấm — mưa', 'Khô hạn quanh năm', 'Bốn mùa lạnh'], 1, 'Khí hậu Địa Trung Hải đặc trưng Nam Âu.'),
    Q('Dân cư châu Âu chủ yếu thuộc chủng tộc nào?', ['Môn-gô-lô-ít', 'Ô-xtra-lô-ít', 'Nê-grô-ít', 'Ơ-rô-pê-ô-ít (da trắng)'], 3, 'Châu Âu chủ yếu chủng Âu (Europoid) da trắng.'),
    Q('Châu Âu có đặc điểm dân cư nổi bật nào?', ['Đa số sống ở nông thôn', 'Dân số trẻ tăng nhanh', 'Mật độ rất thấp', 'Dân số già, tỉ lệ đô thị hoá cao'], 3, 'Dân số châu Âu già, tỉ lệ đô thị hoá ~75%.'),
  ]),

  M(24, 'Châu Phi — vị trí, địa hình, khí hậu', [
    Q('Châu Phi có vị trí?', ['Nằm cân xứng hai bên xích đạo', 'Hoàn toàn ở bán cầu Bắc', 'Ở vùng cực', 'Hoàn toàn ở bán cầu Nam'], 0, 'Châu Phi nằm cân xứng hai bên xích đạo → khí hậu nóng.'),
    Q('Châu Phi rộng đứng thứ mấy thế giới?', ['Thứ 5 (nhầm với châu Nam Cực)', 'Thứ 1 (vị trí của châu Á)', 'Thứ 3 (~30 triệu km²)', 'Thứ 7 (không tồn tại — chỉ có 6 châu lục)'], 2, 'Châu Phi rộng ~30,3 triệu km² — đứng thứ 3.'),
    Q('Sa mạc lớn nhất thế giới ở châu Phi là?', ['Ka-la-ha-ri', 'Gô-bi (sa mạc ở Trung Á, Mông Cổ)', 'A-ta-ca-ma', 'Xa-ha-ra'], 3, 'Xa-ha-ra ~9 triệu km² — sa mạc nóng lớn nhất thế giới.'),
    Q('Sông dài nhất châu Phi (cũng dài nhất thế giới) là?', ['Sông Nin (Nile)', 'Sông Ni-giê', 'Sông Công-gô', 'Sông Dăm-be-zi'], 0, 'Sông Nin dài ~6650 km — dài nhất thế giới.'),
    Q('Khí hậu châu Phi chủ yếu?', ['Lạnh quanh năm', 'Hàn đới', 'Khô và nóng (nhiệt đới, hoang mạc)', 'Ôn đới hải dương'], 2, 'Phần lớn châu Phi khô nóng, có sa mạc rộng lớn.'),
  ]),

  M(25, 'Dân cư — xã hội châu Phi', [
    Q('Dân cư châu Phi chủ yếu thuộc chủng tộc nào?', ['Ơ-rô-pê-ô-ít', 'Ô-xtra-lô-ít', 'Môn-gô-lô-ít', 'Nê-grô-ít (da đen)'], 3, 'Phần lớn dân châu Phi là chủng Nê-grô-ít.'),
    Q('Dân số châu Phi hiện khoảng?', ['~500 triệu', '~5 tỉ (vượt mức dân số toàn thế giới)', '~100 triệu', '~1,4 tỉ người'], 3, 'Châu Phi ~1,4 tỉ người, tăng nhanh.'),
    Q('Châu Phi là nơi phát tích của loài người, gắn với phát hiện hoá thạch ở?', ['Tây Phi', 'Đông Phi (Ê-ti-ô-pi-a, Kê-ni-a)', 'Nam Phi', 'Bắc Phi'], 1, 'Đông Phi là cái nôi loài người (hoá thạch Lucy ở Ê-ti-ô-pi-a).'),
    Q('Khó khăn lớn nhất của châu Phi hiện nay?', ['Đói nghèo, xung đột, dịch bệnh', 'Dư thừa tài nguyên', 'Đô thị hoá quá mức', 'Dân số quá già'], 0, 'Châu Phi đối mặt với đói nghèo, xung đột, dịch bệnh.'),
    Q('Ai Cập nằm ở khu vực nào của châu Phi?', ['Đông Phi', 'Nam Phi', 'Bắc Phi', 'Trung Phi'], 2, 'Ai Cập ở Bắc Phi, bên bờ sông Nin.'),
  ]),

  M(26, 'Châu Mỹ — phát kiến, vị trí, địa hình', [
    Q('Người châu Âu đầu tiên tìm ra châu Mỹ là?', ['Va-xcô đơ Ga-ma', 'B. Đi-a-xơ', 'C. Cô-lôm-bô (1492)', 'Ma-gien-lăng'], 2, 'Cô-lôm-bô tìm ra châu Mỹ năm 1492.'),
    Q('Châu Mỹ trải dài từ?', ['Chỉ ở Nam bán cầu', 'Quanh xích đạo', 'Vùng cực Bắc đến cực Nam', 'Chỉ ở Bắc bán cầu'], 2, 'Châu Mỹ kéo dài từ vòng cực Bắc đến gần cực Nam.'),
    Q('Dãy núi nào dài nhất thế giới ở châu Mỹ?', ['Hi-ma-lay-a', 'An-pơ (dãy núi trẻ ở châu Âu)', 'U-ran (ranh giới Âu — Á)', 'An-đét (Andes, ~7000 km)'], 3, 'Dãy An-đét chạy dọc bờ Tây Nam Mỹ — dài nhất thế giới.'),
    Q('Sông lớn nhất châu Mỹ (lưu lượng lớn nhất thế giới)?', ['A-ma-dôn', 'Pa-ra-na', 'Mi-xi-xi-pi', 'Cô-lô-ra-đô'], 0, 'Sông A-ma-dôn có lưu lượng nước lớn nhất thế giới.'),
    Q('Châu Mỹ được chia thành?', ['Bắc Mỹ, Trung Mỹ và Nam Mỹ', '2 phần', '5 phần', '7 phần'], 0, 'Châu Mỹ thường được chia thành Bắc — Trung — Nam Mỹ.'),
  ]),

  M(27, 'Khí hậu và dân cư châu Mỹ', [
    Q('Khí hậu châu Mỹ?', ['Chỉ có khí hậu nóng', 'Đa dạng, đủ các đới từ hàn đới đến xích đạo', 'Chỉ có khí hậu lạnh', 'Đồng đều khắp nơi'], 1, 'Châu Mỹ có đủ các đới khí hậu.'),
    Q('Rừng A-ma-dôn được mệnh danh là?', ['"Đại dương xanh"', '"Lá phổi xanh của Trái Đất"', '"Hoang mạc cát"', '"Sa mạc lớn nhất"'], 1, 'Rừng nhiệt đới A-ma-dôn là "lá phổi xanh" của Trái Đất.'),
    Q('Dân cư bản địa của châu Mỹ trước khi người châu Âu đến là?', ['Người Mã Lai', 'Người Ấn Độ', 'Người Hán', 'Người In-đi-an và E-xki-mô'], 3, 'Người In-đi-an ở Trung — Nam Mỹ, người E-xki-mô ở Bắc cực.'),
    Q('Người da đen ở châu Mỹ chủ yếu là?', ['Người bản địa', 'Người Trung Quốc nhập cư', 'Hậu duệ nô lệ bị bắt từ châu Phi', 'Người Mê-hi-cô'], 2, 'Thời thuộc địa, nô lệ châu Phi bị đưa sang châu Mỹ làm việc.'),
    Q('Châu Mỹ được gọi là "Tân thế giới" vì?', ['Người châu Âu mới phát hiện ra từ cuối thế kỉ XV', 'Có nền kinh tế mới', 'Mới có loài người', 'Mới hình thành'], 0, 'Châu Âu khám phá ra châu Mỹ cuối thế kỉ XV → "Tân thế giới".'),
  ]),

  M(28, 'Châu Đại Dương — vị trí, đặc điểm', [
    Q('Châu Đại Dương gồm?', ['Bắc Cực', 'Chỉ một đảo lớn', 'Lục địa Ô-xtrây-li-a và nhiều quần đảo Thái Bình Dương', 'Nam Cực'], 2, 'Châu Đại Dương = Australia + các quần đảo Thái Bình Dương.'),
    Q('Quốc gia lớn nhất châu Đại Dương?', ['Ô-xtrây-li-a (Úc)', 'Niu Di-lân', 'Phi-gi', 'Pa-pua Niu Ghi-nê'], 0, 'Úc chiếm phần lớn diện tích châu Đại Dương.'),
    Q('Châu Đại Dương có diện tích?', ['Bằng châu Á', 'Nhỏ nhất thế giới (~8,5 triệu km²)', 'Lớn nhất', 'Bằng châu Phi'], 1, 'Châu Đại Dương là châu lục nhỏ nhất.'),
    Q('Phần lớn lục địa Úc có khí hậu?', ['Hàn đới', 'Mưa nhiều', 'Khô hạn, nhiều hoang mạc', 'Lạnh quanh năm'], 2, 'Trung tâm Úc là hoang mạc rộng lớn.'),
    Q('Loài thú đặc trưng của Úc là?', ['Gấu trắng', 'Hươu cao cổ', 'Kăng-gu-ru và gấu túi', 'Voi (đặc trưng châu Phi và Nam Á)'], 2, 'Úc có nhiều loài thú có túi đặc trưng.'),
  ]),

  M(29, 'Việt Nam — Đất nước Đại Việt thời Lê sơ (1428–1527)', [
    Q('Vị vua nào nổi tiếng cải cách hành chính, ban hành luật Hồng Đức?', ['Lê Nhân Tông', 'Lê Thánh Tông', 'Lê Hiển Tông', 'Lê Lợi'], 1, 'Lê Thánh Tông (1460–1497) — vị vua minh quân vĩ đại.'),
    Q('Bộ luật Hồng Đức (Quốc triều hình luật) có điểm tiến bộ nào?', ['Chỉ dành cho quý tộc', 'Phân biệt giai cấp tuyệt đối', 'Bảo vệ một số quyền của phụ nữ', 'Chỉ bảo vệ vua'], 2, 'Luật Hồng Đức tiến bộ, bảo vệ phần nào quyền phụ nữ.'),
    Q('Lê Thánh Tông chia cả nước thành?', ['63 tỉnh', '13 đạo thừa tuyên', '15 bộ', '7 châu'], 1, 'Năm 1471, Lê Thánh Tông chia cả nước thành 13 đạo thừa tuyên.'),
    Q('Văn hoá thời Lê sơ ảnh hưởng tư tưởng nào?', ['Thiên Chúa giáo', 'Nho giáo độc tôn', 'Đạo giáo', 'Phật giáo'], 1, 'Nho giáo trở thành quốc giáo, chi phối giáo dục và chính trị.'),
    Q('Tác phẩm sử học nổi tiếng do Ngô Sĩ Liên biên soạn thời Lê sơ?', ['Bình Ngô đại cáo', 'Đại Việt sử ký toàn thư', 'Truyện Kiều', 'Hịch tướng sĩ'], 1, 'Ngô Sĩ Liên biên soạn Đại Việt sử ký toàn thư.'),
  ]),

  M(30, 'Việt Nam — Đại Việt thời Mạc, Trịnh — Nguyễn phân tranh', [
    Q('Nhà Mạc do ai sáng lập (1527)?', ['Nguyễn Hoàng', 'Mạc Đăng Dung', 'Trịnh Kiểm', 'Lê Lợi'], 1, 'Mạc Đăng Dung cướp ngôi nhà Lê, lập nhà Mạc 1527.'),
    Q('Cuộc chiến Nam — Bắc triều diễn ra giữa?', ['Lê và Trịnh', 'Pháp và Đại Việt', 'Trịnh và Nguyễn', 'Nhà Mạc (Bắc triều) và nhà Lê — Trịnh (Nam triều)'], 3, 'Nam — Bắc triều: Lê — Trịnh chống nhà Mạc.'),
    Q('Sông Gianh là ranh giới giữa?', ['Đông và Tây', 'Đàng Trong (chúa Nguyễn) và Đàng Ngoài (chúa Trịnh)', 'Việt Nam và Trung Quốc', 'Bắc Bộ và Trung Bộ'], 1, 'Sông Gianh chia đất nước thành Đàng Trong — Đàng Ngoài.'),
    Q('Người mở mang Đàng Trong, đặt nền móng cho chúa Nguyễn?', ['Trịnh Tùng', 'Nguyễn Hoàng', 'Mạc Đăng Dung', 'Lê Thánh Tông'], 1, 'Nguyễn Hoàng (1558) vào trấn thủ Thuận Hoá — Quảng Nam.'),
    Q('Tình trạng Trịnh — Nguyễn phân tranh kéo dài khoảng?', ['50 năm', '1000 năm', 'Hơn 200 năm', '20 năm'], 2, 'Trịnh — Nguyễn phân tranh kéo dài từ thế kỉ XVII đến cuối XVIII.'),
  ]),

  M(31, 'Việt Nam — Phong trào Tây Sơn (1771–1802)', [
    Q('Ba anh em Tây Sơn quê ở?', ['Hà Nội', 'TP HCM', 'Huế (kinh đô nhà Nguyễn về sau)', 'Bình Định'], 3, 'Ba anh em Nguyễn Nhạc — Nguyễn Huệ — Nguyễn Lữ quê Bình Định.'),
    Q('Khởi nghĩa Tây Sơn nổ ra năm?', ['1789', '1771', '1802', '1858'], 1, 'Năm 1771, ba anh em Tây Sơn dựng cờ khởi nghĩa.'),
    Q('Năm 1785, Nguyễn Huệ đánh tan quân Xiêm ở?', ['Ngọc Hồi', 'Bạch Đằng', 'Chi Lăng', 'Rạch Gầm — Xoài Mút'], 3, 'Rạch Gầm — Xoài Mút (Tiền Giang) — diệt 5 vạn quân Xiêm.'),
    Q('Tết Kỷ Dậu 1789, Quang Trung đại phá quân nào ở Ngọc Hồi — Đống Đa?', ['Quân Tống', 'Quân Nguyên', 'Quân Thanh', 'Quân Minh'], 2, 'Quang Trung — Nguyễn Huệ đại phá 29 vạn quân Thanh Tết 1789.'),
    Q('Triều đại Tây Sơn kết thúc năm?', ['1858', '1789', '1802 (khi Nguyễn Ánh lập nhà Nguyễn)', '1771'], 2, 'Năm 1802, Nguyễn Ánh đánh bại Tây Sơn, lập nhà Nguyễn.'),
  ]),

  M(32, 'Việt Nam — Nhà Nguyễn (1802–1858)', [
    Q('Người sáng lập nhà Nguyễn?', ['Lê Lợi', 'Nguyễn Huệ', 'Lý Công Uẩn', 'Nguyễn Ánh (Gia Long)'], 3, 'Nguyễn Ánh lên ngôi năm 1802, hiệu Gia Long.'),
    Q('Quốc hiệu Việt Nam chính thức xuất hiện năm?', ['1945', '1428', '1804 (thời Gia Long)', '1010'], 2, 'Năm 1804, Gia Long đổi quốc hiệu thành Việt Nam.'),
    Q('Kinh đô nhà Nguyễn đặt ở?', ['Phú Xuân (Huế)', 'Hoa Lư', 'Thăng Long', 'Hà Nội'], 0, 'Nhà Nguyễn đóng đô ở Phú Xuân (Huế).'),
    Q('Bộ luật ban hành thời Gia Long là?', ['Hoàng Việt luật lệ (Luật Gia Long)', 'Hình thư', 'Hồng Đức', 'Quốc triều hình luật'], 0, 'Luật Gia Long ban hành năm 1815.'),
    Q('Nhà Nguyễn thi hành chính sách ngoại giao gì với phương Tây?', ['Bế quan toả cảng, cấm đạo Thiên Chúa', 'Liên kết với Pháp', 'Cho phương Tây cai trị', 'Mở cửa rộng rãi'], 0, 'Nhà Nguyễn bế quan toả cảng, cấm đạo → cô lập đất nước.'),
  ]),

  M(33, 'Châu Á — Đông Nam Á: tự nhiên và dân cư', [
    Q('Đông Nam Á gồm bao nhiêu quốc gia?', ['30 quốc gia', '11 quốc gia', '5 quốc gia', '20 quốc gia'], 1, 'Đông Nam Á có 11 nước (kể cả Đông Ti-mo).'),
    Q('Đông Nam Á chia thành hai khu vực?', ['Đông Nam Á lục địa và Đông Nam Á hải đảo', 'Bắc và Nam', 'Trên và dưới', 'Đông và Tây'], 0, 'ĐNA lục địa (Việt Nam, Lào...) và hải đảo (In-đô, Phi-líp-pin...).'),
    Q('Khí hậu Đông Nam Á chủ yếu?', ['Lạnh quanh năm', 'Ôn đới', 'Hàn đới', 'Nhiệt đới gió mùa và xích đạo'], 3, 'ĐNA mang khí hậu nhiệt đới gió mùa và xích đạo ẩm.'),
    Q('Quốc gia đông dân nhất Đông Nam Á?', ['Phi-líp-pin', 'Việt Nam', 'In-đô-nê-xi-a (~280 triệu)', 'Thái Lan'], 2, 'In-đô-nê-xi-a đông dân nhất ĐNA, thứ 4 thế giới.'),
    Q('Tổ chức ASEAN được thành lập năm?', ['1945', '1995', '1967', '2000'], 2, 'ASEAN thành lập ngày 8/8/1967 tại Băng Cốc.'),
  ]),

  M(34, 'Địa lí — Vị trí, lãnh thổ Việt Nam', [
    Q('Việt Nam nằm ở khu vực?', ['Đông Nam Á, rìa đông bán đảo Đông Dương', 'Đông Bắc Á', 'Nam Á (gồm Ấn Độ và các nước lân cận)', 'Tây Á (khu vực bán đảo A-ra-bi-a)'], 0, 'Việt Nam ở Đông Nam Á, rìa đông bán đảo Đông Dương.'),
    Q('Việt Nam giáp biển nào?', ['Biển Đông', 'Biển Đỏ', 'Biển Ban-tích', 'Biển Đen'], 0, 'Phía đông và nam giáp Biển Đông.'),
    Q('Diện tích Việt Nam khoảng?', ['~331 000 km²', '~50 000 km²', '~5000 km²', '~1 triệu km²'], 0, 'Diện tích phần đất liền Việt Nam ~331 000 km².'),
    Q('Việt Nam tiếp giáp với mấy quốc gia trên đất liền?', ['10 nước', '5 nước', '1 nước', '3 nước (Trung Quốc, Lào, Cam-pu-chia)'], 3, 'Việt Nam giáp Trung Quốc, Lào, Cam-pu-chia.'),
    Q('Hai quần đảo lớn thuộc chủ quyền Việt Nam trên Biển Đông?', ['Hoàng Sa và Trường Sa', 'Cô Tô và Vân Đồn', 'Phú Quốc và Côn Đảo', 'Cát Bà và Bạch Long Vĩ'], 0, 'Hoàng Sa và Trường Sa thuộc chủ quyền Việt Nam.'),
  ]),

  M(35, 'Ôn tập Địa lí HK2 — Tổng kết', [
    Q('Châu lục nào lớn nhất thế giới?', ['Châu Á', 'Châu Mỹ', 'Châu Phi', 'Châu Âu'], 0, 'Châu Á rộng nhất ~44,4 triệu km².'),
    Q('Sa mạc Xa-ha-ra thuộc châu nào?', ['Châu Đại Dương', 'Châu Phi', 'Châu Á', 'Châu Mỹ'], 1, 'Xa-ha-ra ở Bắc Phi — sa mạc nóng lớn nhất thế giới.'),
    Q('Sông A-ma-dôn chảy ở châu nào?', ['Châu Âu', 'Châu Mỹ (Nam Mỹ)', 'Châu Á', 'Châu Phi'], 1, 'Sông A-ma-dôn chảy qua Nam Mỹ — lưu lượng lớn nhất thế giới.'),
    Q('Dãy U-ran là ranh giới giữa?', ['Châu Âu và châu Á', 'Châu Phi và châu Âu', 'Châu Mỹ và châu Phi', 'Châu Đại Dương và châu Á'], 0, 'Dãy U-ran (Ural) phân chia châu Âu và châu Á.'),
    Q('Quốc gia nào lớn nhất châu Đại Dương?', ['Ô-xtrây-li-a (Úc)', 'Niu Di-lân', 'Pa-pua Niu Ghi-nê', 'Phi-gi'], 0, 'Úc chiếm phần lớn diện tích châu Đại Dương.'),
  ]),
];

export const S7LSDL_SCENARIOS = indexBy(S7LSDL_WEEKS);
