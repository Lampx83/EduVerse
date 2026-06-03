// ============================================================
// Lớp 5 · CÔNG NGHỆ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Công nghệ Lớp 5.
// ID prefix: "P5CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5CN', 'cong-nghe', n, title, qs, opts);

export const P5CN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Vai trò của công nghệ', [
    Q('Công nghệ giúp con người?', ['Làm việc nhanh hơn, tốt hơn', 'Lười biếng', 'Mệt mỏi', 'Không lợi'], 0, 'Công nghệ giúp việc nhanh và tốt hơn.'),
    Q('Ví dụ về công nghệ trong nhà?', ['Cây cảnh trong chậu', 'Chén bát', 'Tivi, tủ lạnh, máy giặt', 'Ghế gỗ'], 2, 'Tivi, tủ lạnh, máy giặt là sản phẩm công nghệ.'),
    Q('Sử dụng công nghệ em cần?', ['Đúng cách, an toàn', 'Tuỳ tiện', 'Dùng quá công suất cho phép', 'Không quan tâm'], 0, 'Đúng cách và an toàn.'),
    Q('Công nghệ có thể có hại nếu?', ['Dùng đúng', 'Dùng sai cách', 'Bảo quản tốt', 'Không dùng'], 1, 'Dùng sai gây nguy hiểm.'),
  ]),

  M(2, 'Trồng rau ăn lá — Chuẩn bị', [
    Q('Rau ăn lá phổ biến?', ['Rau muống, cải, mồng tơi', 'Hành tỏi (lấy củ)', 'Khoai tây', 'Cà rốt'], 0, 'Rau muống, cải, mồng tơi.'),
    Q('Chuẩn bị trồng rau cần?', ['Chỉ cần nước tưới là đủ', 'Hạt giống và phân bón, không cần đất', 'Đất và dụng cụ, không cần hạt', 'Đất, hạt giống, dụng cụ'], 3, 'Đất, hạt giống, dụng cụ là cơ bản.'),
    Q('Đất trồng rau tốt nhất?', ['Đất khô cứng', 'Đất tơi xốp, ẩm', 'Cát khô', 'Đất phèn'], 1, 'Đất tơi xốp và ẩm.'),
    Q('Vị trí trồng rau lá?', ['Trong tủ', 'Nắng gắt cả ngày', 'Nơi có ánh nắng vừa', 'Tối hoàn toàn'], 2, 'Nắng vừa, không quá gắt.'),
  ]),

  M(3, 'Trồng rau ăn lá — Gieo hạt', [
    Q('Trước khi gieo, đất cần?', ['Đổ nước nhiều', 'Làm tơi, có rãnh', 'Nén chặt', 'Để khô'], 1, 'Làm tơi và có rãnh.'),
    Q('Khi gieo hạt em nên?', ['Đè sâu', 'Để trên mặt', 'Rắc đều, lấp đất mỏng', 'Vứt bừa'], 2, 'Rắc đều và lấp mỏng.'),
    Q('Tưới sau gieo?', ['Không tưới', 'Tưới nhẹ bằng vòi phun', 'Đổ nước nhiều', 'Tưới nước nóng'], 1, 'Tưới nhẹ tránh trôi hạt.'),
    Q('Bao lâu hạt nảy mầm?', ['Vài ngày', 'Vài giây', 'Một năm', 'Một tháng'], 0, 'Hạt rau lá nảy trong vài ngày.'),
  ]),

  M(4, 'Trồng rau — Chăm sóc và thu hoạch', [
    Q('Chăm sóc rau gồm?', ['Tưới, làm cỏ, bón phân', 'Bỏ mặc', 'Chỉ phun thuốc trừ sâu mỗi ngày', 'Chỉ tưới nước, không cần làm cỏ'], 0, 'Tưới, làm cỏ, bón phân.'),
    Q('Tưới rau thường vào?', ['Không tưới', 'Đêm khuya', 'Sáng sớm hoặc chiều mát', 'Trưa nắng gắt'], 2, 'Sáng sớm hoặc chiều mát.'),
    Q('Khi rau bị sâu em nên?', ['Phun thuốc bừa', 'Phun thuốc trừ sâu nồng độ cao', 'Chặt cây', 'Bắt sâu hoặc dùng biện pháp sinh học'], 3, 'Bắt sâu hoặc sinh học là an toàn.'),
    Q('Khi nào thu hoạch?', ['Ngay khi cây vừa ra lá thật', 'Khi cây mới gieo', 'Khi héo', 'Khi cây đủ lớn, lá xanh tốt'], 3, 'Khi cây đủ lớn và xanh tốt.'),
  ]),

  M(5, 'Chăm sóc gà', [
    Q('Gà cần được?', ['Cho ăn uống đầy đủ, ở chỗ sạch', 'Nhốt chật', 'Bỏ đói', 'Không vệ sinh'], 0, 'Cho ăn uống và vệ sinh.'),
    Q('Thức ăn cho gà?', ['Cám, ngô, gạo, rau', 'Chỉ cho ăn thóc nguyên hạt', 'Bánh kẹo và đồ ngọt', 'Thức ăn thừa của người'], 0, 'Cám, ngô, gạo, rau.'),
    Q('Chuồng gà cần?', ['Sạch, thoáng, có mái che', 'Ngập nước', 'Tối, kín gió, ít ánh sáng', 'Nắng gắt'], 0, 'Sạch, thoáng và có mái.'),
    Q('Khi gà bệnh em nên?', ['Báo người lớn, tách riêng', 'Để chung', 'Đánh gà', 'Bỏ mặc'], 0, 'Báo người lớn và tách riêng.'),
  ]),

  M(6, 'Chăm sóc cá cảnh', [
    Q('Cá cảnh sống ở?', ['Bể nước sạch', 'Trên cạn', 'Nước bẩn', 'Trong cát'], 0, 'Bể nước sạch.'),
    Q('Cho cá ăn?', ['Rất nhiều', 'Lượng vừa đủ, không thừa', 'Không cho', 'Cho cả ngày'], 1, 'Vừa đủ tránh ô nhiễm nước.'),
    Q('Thay nước bể cá?', ['Thay hết mỗi ngày', 'Không bao giờ', 'Thay khi nước chuyển màu đục', 'Định kì 1 phần, không thay hết'], 3, 'Thay 1 phần định kì.'),
    Q('Cá cần?', ['Oxy trong nước (sủi khí)', 'Đá nước', 'Không oxy', 'Sôi nước'], 0, 'Cần oxy hoà tan.'),
  ]),

  M(7, 'An toàn điện trong nhà — Cơ bản', [
    Q('Điện có thể gây?', ['Vui vẻ', 'Giật, cháy nổ', 'Không hại', 'Mát mẻ'], 1, 'Điện có thể giật và gây cháy.'),
    Q('Khi tay ướt em?', ['Cứ chạm', 'Nhúng vào', 'KHÔNG chạm vào ổ điện', 'Bấm thử'], 2, 'Tuyệt đối không chạm khi tay ướt.'),
    Q('Dây điện hở em?', ['Quấn băng dính rồi dùng', 'Báo người lớn, không tự sửa', 'Tự sửa', 'Cắt bỏ đoạn dây bị hở'], 1, 'Báo người lớn để sửa đúng cách.'),
    Q('Ổ điện trẻ em không dùng?', ['Cho em chơi', 'Cần bịt kín', 'Đút que vào', 'Mở thoải mái'], 1, 'Bịt kín ổ điện không dùng.'),
  ]),

  M(8, 'An toàn điện — Nâng cao', [
    Q('Khi sấm sét em?', ['Ra ngoài cây cao', 'Dùng nhiều', 'Đứng dưới cây cao trú mưa', 'Không dùng thiết bị điện'], 3, 'Không dùng thiết bị điện khi sét.'),
    Q('Cầu dao điện dùng để?', ['Trang trí', 'Đo lượng điện đã dùng', 'Không dùng', 'Ngắt điện khẩn cấp'], 3, 'Cầu dao ngắt điện khi cần.'),
    Q('Khi thấy người bị điện giật?', ['Ngắt điện rồi gọi cấp cứu, không sờ trực tiếp', 'Dùng tay kéo nạn nhân ra ngay', 'Bỏ chạy', 'Sờ vào kéo ra'], 0, 'Ngắt điện trước, không sờ trực tiếp.'),
    Q('Phích cắm rút?', ['Cắn dây', 'Kéo cả phích lẫn dây cùng lúc', 'Kéo dây', 'Cầm phích, không kéo dây'], 3, 'Cầm phích, không kéo dây.'),
  ]),

  M(9, 'Sử dụng quạt máy', [
    Q('Quạt máy chạy bằng?', ['Điện', 'Hơi nước nóng', 'Sức gió tự nhiên', 'Tay quay thủ công'], 0, 'Quạt máy chạy bằng điện.'),
    Q('Bộ phận chính của quạt?', ['Bánh xe', 'Động cơ, cánh quạt', 'Lò xo và bánh răng', 'Ốc vít'], 1, 'Động cơ và cánh quạt.'),
    Q('Khi quạt đang chạy em?', ['KHÔNG cho tay vào cánh', 'Cho que vào', 'Cho tay', 'Lay quạt'], 0, 'Không cho tay vào cánh đang quay.'),
    Q('Vệ sinh quạt cần?', ['Phun nước', 'Không vệ sinh', 'Lau lúc chạy', 'Tắt điện trước khi lau'], 3, 'Tắt điện trước khi lau.'),
  ]),

  M(10, 'Sử dụng bàn ủi (bàn là)', [
    Q('Bàn ủi dùng để?', ['Đập gập mép quần áo', 'Là phẳng quần áo', 'Cắt vải thành miếng nhỏ', 'Hâm nóng thức ăn nhanh'], 1, 'Là phẳng quần áo.'),
    Q('Bàn ủi nóng có thể?', ['Vô hại', 'Làm mát da khi chạm vào', 'Tốt cho da', 'Gây bỏng'], 3, 'Bàn ủi nóng gây bỏng nguy hiểm.'),
    Q('Sau khi dùng bàn ủi?', ['Để cắm điện', 'Vứt sàn', 'Đặt thấp', 'Rút điện, đặt nơi cao tránh trẻ nhỏ'], 3, 'Rút điện và đặt nơi an toàn.'),
    Q('Khi là quần áo em nên?', ['Là khô', 'Theo nhiệt độ phù hợp loại vải', 'Không cần biết', 'Là nhiệt cao nhất'], 1, 'Theo nhiệt độ phù hợp.'),
  ]),

  M(11, 'Máy vi tính — Vai trò', [
    Q('Máy vi tính giúp?', ['Mất thời gian', 'Học tập, làm việc, giải trí', 'Không lợi', 'Chỉ chơi game'], 1, 'Học tập, làm việc, giải trí.'),
    Q('Bộ phận chính của máy tính?', ['Màn hình, bàn phím, chuột, CPU', 'Ăng-ten', 'Bánh xe', 'Loa ngoài và đĩa CD'], 0, 'Màn hình, bàn phím, chuột, CPU.'),
    Q('Chức năng của CPU?', ['Phát âm thanh', 'Hiển thị', 'Xử lý thông tin', 'Nhập liệu từ bàn phím'], 2, 'CPU là bộ xử lý.'),
    Q('Màn hình để?', ['Xử lý các phép tính', 'In tài liệu ra giấy', 'Nhập liệu', 'Hiển thị thông tin'], 3, 'Màn hình hiển thị.'),
  ]),

  M(12, 'Máy vi tính — An toàn', [
    Q('Khoảng cách mắt - màn hình?', ['Sát mắt', 'Khoảng 10-20 cm là đủ', 'Khoảng 50-70 cm', '3m'], 2, '50-70 cm là an toàn cho mắt.'),
    Q('Sau bao lâu nên nghỉ mắt?', ['Không nghỉ', 'Cả ngày liền', 'Mỗi 30 phút nghỉ vài phút', '1 tuần'], 2, 'Mỗi 30 phút nghỉ vài phút.'),
    Q('Khi mưa to em?', ['Tắt máy và rút điện', 'Cứ dùng', 'Lau bằng nước', 'Đút phích vào ổ ướt'], 0, 'Tắt máy và rút điện.'),
    Q('Lướt internet em?', ['Vào trang lành mạnh', 'Nhấn link lạ', 'Trang lạ bất kì', 'Cho người lạ thông tin'], 0, 'Chỉ vào trang an toàn.'),
  ]),

  M(13, 'Sử dụng internet an toàn', [
    Q('Khi gặp nội dung xấu?', ['Xem tiếp', 'Lưu lại', 'Chia sẻ bạn', 'Tắt và báo người lớn'], 3, 'Tắt và báo người lớn.'),
    Q('KHÔNG nên cho người lạ?', ['Câu hỏi học', 'Thông tin cá nhân (tên, địa chỉ, ảnh)', 'Lời chào', 'Hình emoji'], 1, 'Không cho thông tin cá nhân.'),
    Q('Mật khẩu nên?', ['Mạnh, không chia sẻ ai', 'Cho bạn dùng chung', 'Đơn giản', 'Ghi nơi dễ thấy'], 0, 'Mật khẩu mạnh và bảo mật.'),
    Q('Khi bị bắt nạt trên mạng?', ['Im lặng chịu đựng một mình', 'Trả đũa', 'Tự xử lý', 'Báo cha mẹ, không trả đũa'], 3, 'Báo cha mẹ ngay.'),
  ]),

  M(14, 'Ôn tập an toàn điện và thiết bị', [
    Q('Bảo quản điện thoại em?', ['Để chỗ ướt', 'Sạc đúng, không rơi', 'Sạc qua đêm', 'Để rơi'], 1, 'Sạc đúng và không rơi.'),
    Q('Khi không dùng thiết bị?', ['Để chạy mãi', 'Để chế độ chờ (standby) cả đêm', 'Mở mức cao', 'Tắt và rút điện'], 3, 'Tắt và rút điện tiết kiệm.'),
    Q('Pin hỏng em?', ['Đập vỡ rồi vứt đi', 'Bỏ vào thùng pin riêng', 'Vứt thùng rác thường', 'Cho em bé'], 1, 'Pin hỏng phải xử lý đúng cách.'),
    Q('Tiết kiệm điện bằng?', ['Bỏ mặc', 'Tắt thiết bị khi không dùng', 'Mở nhiều', 'Bật cả ngày'], 1, 'Tắt khi không dùng.'),
  ]),

  M(15, 'Lắp ghép mô hình — Giới thiệu', [
    Q('Mô hình lắp ghép là?', ['Tranh vẽ trên giấy', 'Đồ chơi từ các chi tiết ghép', 'Bánh kẹo', 'Quần áo'], 1, 'Đồ chơi từ chi tiết ghép lại.'),
    Q('Vật liệu lắp ghép?', ['Đinh và búa lớn', 'Que, ốc vít, bánh xe…', 'Đất sét ướt', 'Dây điện và pin cao áp'], 1, 'Que, ốc vít, bánh xe.'),
    Q('Dụng cụ cần?', ['Mỏ hàn nhiệt độ cao', 'Cờ-lê, tua vít', 'Cưa gỗ tay', 'Búa lớn'], 1, 'Cờ-lê và tua vít là cơ bản.'),
    Q('Trước khi lắp em nên?', ['Lắp ngay', 'Đọc hướng dẫn', 'Tháo rời các chi tiết ra trước', 'Bỏ qua'], 1, 'Đọc hướng dẫn trước.'),
  ]),

  M(16, 'Lắp ghép mô hình xe', [
    Q('Xe có bộ phận?', ['Cánh quạt và đuôi lái', 'Vây bơi và mang cá', 'Mỏ và lông vũ', 'Khung, bánh, trục'], 3, 'Khung, bánh, trục.'),
    Q('Bánh xe cần?', ['Lắp chắc vào trục, quay được', 'Lắp lỏng cho dễ tháo lại', 'Tách rời', 'Cố định'], 0, 'Lắp chắc và quay được.'),
    Q('Khi lắp em phải?', ['Vội vàng', 'Cẩu thả', 'Bỏ qua bước kiểm tra', 'Cẩn thận, không vội'], 3, 'Cẩn thận và không vội.'),
    Q('Sản phẩm hoàn thành em?', ['Tháo rời ngay lập tức', 'Bỏ vào thùng rác', 'Kiểm tra hoạt động', 'Bỏ qua'], 2, 'Kiểm tra hoạt động.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('HK1 em đã học?', ['Chỉ trồng rau', 'Không gì', 'Chỉ máy tính', 'Trồng rau, chăm gà-cá, an toàn điện, máy tính, lắp ghép'], 3, 'Nhiều nội dung HK1.'),
    Q('Sản phẩm công nghệ giúp em?', ['Chỉ làm phức tạp thêm', 'Học tập, sinh hoạt thuận tiện', 'Mất nhiều thời gian học', 'Khó khăn'], 1, 'Học và sinh hoạt thuận tiện.'),
    Q('Khi dùng thiết bị cần?', ['Không quan tâm', 'Tuỳ tiện', 'Đúng cách, an toàn', 'Dùng vượt công suất thiết kế'], 2, 'Đúng cách và an toàn.'),
    Q('Bảo vệ môi trường khi dùng công nghệ?', ['Tiết kiệm điện nước', 'Xả thải', 'Lãng phí', 'Phá thiết bị'], 0, 'Tiết kiệm điện nước.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Em chăm sóc rau bằng cách?', ['Phun thuốc trừ sâu liên tục', 'Tưới, làm cỏ, bón phân', 'Bỏ mặc', 'Tưới thật nhiều nước cùng lúc'], 1, 'Tưới, làm cỏ, bón phân.'),
    Q('An toàn điện cơ bản?', ['Tay khô, không chạm dây hở', 'Cắn dây', 'Tay ướt vẫn dùng', 'Đổ nước'], 0, 'Tay khô và không chạm dây hở.'),
    Q('Sử dụng máy tính đúng?', ['Sát màn hình', 'Tư thế đúng, nghỉ mắt', 'Ngồi nghiêng người sát màn hình', 'Dùng cả ngày'], 1, 'Tư thế đúng và nghỉ mắt.'),
    Q('Khi lắp ghép xong?', ['Bỏ bừa', 'Cất gọn dụng cụ', 'Để dụng cụ rải rác trên bàn', 'Tháo rời sản phẩm vừa lắp'], 1, 'Cất gọn dụng cụ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bếp đơn giản — Sandwich', [
    Q('Sandwich gồm?', ['Cơm trắng và trứng chiên', 'Bún tươi và rau sống', 'Phở bò có nước dùng', 'Bánh mì + nhân kẹp'], 3, 'Bánh mì kẹp nhân.'),
    Q('Nhân sandwich có thể?', ['Bột mì sống và muối', 'Đường nâu và bơ tan chảy', 'Trứng, jambon, rau, phô mai', 'Mì gói khô chưa nấu'], 2, 'Trứng, jambon, rau, phô mai.'),
    Q('Khi cắt bánh em dùng?', ['Dao to sắc', 'Dao cắt bánh nhỏ, người lớn giúp', 'Kéo cắt giấy thường', 'Xé bằng tay không'], 1, 'Dao nhỏ và nhờ người lớn giúp.'),
    Q('Trước khi làm em?', ['Bỏ qua', 'Rửa tay sạch', 'Lau qua tay bằng khăn ướt', 'Tay bẩn cũng được'], 1, 'Rửa tay là quan trọng nhất.'),
  ]),

  M(20, 'Salad rau quả', [
    Q('Salad là?', ['Món xào', 'Rau quả trộn, ăn sống/sơ chế', 'Món chiên', 'Món luộc'], 1, 'Rau quả trộn ăn sống.'),
    Q('Nguyên liệu salad?', ['Mì tôm và xúc xích', 'Cơm nguội và thịt kho', 'Bánh quy và sô cô la', 'Xà lách, cà chua, dưa chuột'], 3, 'Rau quả tươi.'),
    Q('Rau quả trước khi trộn?', ['Ngâm muối qua đêm', 'Để bẩn', 'Chần qua nước sôi nóng', 'Rửa sạch, để ráo'], 3, 'Rửa sạch và để ráo.'),
    Q('Salad tốt cho?', ['Không gì', 'Sức khoẻ, nhiều vitamin', 'Tăng cân nhanh chóng', 'Hại sức khoẻ'], 1, 'Tốt cho sức khoẻ.'),
  ]),

  M(21, 'An toàn trong bếp', [
    Q('Trong bếp em không nên?', ['Rửa rau', 'Giúp mẹ', 'Dọn chén', 'Đùa nghịch với lửa, dao'], 3, 'Không đùa với lửa và dao.'),
    Q('Khi cầm dao em?', ['Cầm chuôi như búa', 'Vung loạn', 'Cẩn thận, lưỡi hướng xa', 'Chỉ vào người'], 2, 'Cẩn thận và hướng lưỡi xa người.'),
    Q('Khi nồi nóng em?', ['Cầm trực tiếp bằng tay không', 'Áp mặt', 'Dùng găng tay/khăn dày', 'Tay không'], 2, 'Dùng găng tay tránh bỏng.'),
    Q('Khi bị bỏng nhẹ?', ['Bỏ qua', 'Bôi kem đánh răng', 'Bôi mỡ', 'Rửa nước mát ngay'], 3, 'Rửa nước mát ngay là sơ cứu đúng.'),
  ]),

  M(22, 'Trồng rau thuỷ canh đơn giản', [
    Q('Thuỷ canh là?', ['Trồng cát', 'Trồng trên đá', 'Trồng đất khô', 'Trồng rau bằng nước (không đất)'], 3, 'Trồng bằng nước (dung dịch dinh dưỡng).'),
    Q('Ưu điểm thuỷ canh?', ['Tốn nhiều nước hơn trồng đất', 'Tốn đất', 'Sạch, không sâu bệnh đất', 'Bẩn hơn'], 2, 'Sạch và không sâu bệnh đất.'),
    Q('Thuỷ canh cần?', ['Dung dịch dinh dưỡng, ánh sáng', 'Đất phù sa và phân chuồng', 'Đá sỏi và mùn cưa', 'Cát mịn để giữ ẩm'], 0, 'Dung dịch và ánh sáng.'),
    Q('Rau phù hợp thuỷ canh?', ['Lúa nước cao sản', 'Khoai lang và khoai tây', 'Mía đường dài ngày', 'Xà lách, cải'], 3, 'Rau lá ngắn ngày.'),
  ]),

  M(23, 'Chăm sóc cây cảnh trong nhà', [
    Q('Cây cảnh trong nhà cần?', ['Ánh sáng vừa, tưới hợp lý', 'Tối hoàn toàn', 'Nắng gắt', 'Không tưới'], 0, 'Ánh sáng vừa và tưới đúng.'),
    Q('Cây nào dễ chăm trong nhà?', ['Hoa hồng', 'Mía đường ngoài đồng', 'Lưỡi hổ, trầu bà', 'Lúa nước cấy trong chậu'], 2, 'Lưỡi hổ, trầu bà dễ chăm.'),
    Q('Lá vàng có thể do?', ['Cây vui', 'Không lý do', 'Trời lạnh', 'Tưới quá nhiều/ít'], 3, 'Tưới sai gây lá vàng.'),
    Q('Cây cảnh giúp?', ['Tốn nước tưới hàng ngày', 'Gây dị ứng cho cả nhà', 'Hút hết oxy ban đêm', 'Làm sạch không khí, trang trí'], 3, 'Sạch không khí và đẹp.'),
  ]),

  M(24, 'Lắp ghép mô hình cơ khí phức tạp', [
    Q('Mô hình phức tạp gồm?', ['1 phần', 'Không cần', 'Nhiều bộ phận, cần chính xác', 'Đơn giản'], 2, 'Nhiều bộ phận và chính xác.'),
    Q('Khi lắp khó em?', ['Dùng búa đập cho khớp', 'Đọc lại hướng dẫn, kiên trì', 'Trách bạn cùng nhóm', 'Bỏ dở giữa chừng'], 1, 'Đọc lại và kiên trì.'),
    Q('Tua vít dùng để?', ['Đập dẹp đầu đinh', 'Đo độ dài chi tiết', 'Vặn ốc vít', 'Cắt rời dây nối'], 2, 'Vặn ốc vít.'),
    Q('Cờ-lê dùng để?', ['Cắt giấy', 'Bẻ cong thanh kim loại', 'Vặn ốc lục giác', 'Đo dài'], 2, 'Vặn ốc lục giác.'),
  ]),

  M(25, 'Mô hình chuyển động', [
    Q('Bánh răng dùng để?', ['Giữ chặt bánh xe đứng yên', 'Đo khoảng cách giữa hai trục', 'Truyền chuyển động', 'Trang trí'], 2, 'Truyền chuyển động giữa các trục.'),
    Q('Khi bánh răng A quay, bánh răng B?', ['Quay nhanh hơn', 'Đứng yên', 'Cùng chiều', 'Quay ngược chiều'], 3, '2 bánh răng ăn khớp quay ngược chiều.'),
    Q('Mô hình xe có động cơ?', ['Bay lên không trung', 'Tự chạy được', 'Đứng yên', 'Bơi dưới nước được'], 1, 'Có động cơ thì tự chạy.'),
    Q('Để xe chạy lâu?', ['Không cần', 'Pin yếu', 'Pin tốt và cơ khí trơn', 'Cơ khí kẹt'], 2, 'Pin tốt và cơ khí trơn tru.'),
  ]),

  M(26, 'Vật liệu sản phẩm công nghệ', [
    Q('Vật liệu kim loại?', ['Vải bông và lụa tơ tằm', 'Gỗ thông và tre nứa', 'Sắt, nhôm, đồng', 'Nhựa PET và cao su'], 2, 'Sắt, nhôm, đồng là kim loại.'),
    Q('Vật liệu phi kim?', ['Đồng đỏ và đồng thau', 'Vàng và bạc nguyên chất', 'Sắt thép và inox', 'Gỗ, nhựa, vải'], 3, 'Gỗ, nhựa, vải là phi kim.'),
    Q('Tái chế nhựa giúp?', ['Tốn tiền', 'Bảo vệ môi trường', 'Hại môi trường', 'Làm tăng giá thành sản phẩm'], 1, 'Tái chế bảo vệ môi trường.'),
    Q('Kim loại bền hơn?', ['Tất cả các loại trên', 'Chỉ bền hơn gỗ thông', 'Chỉ bền hơn giấy bìa', 'Chỉ bền hơn nhựa thường'], 0, 'Kim loại bền hơn các loại này nói chung.'),
  ]),

  M(27, 'Sản phẩm tái chế', [
    Q('Tái chế là?', ['Đốt rác thải để phát điện', 'Tận dụng vật cũ làm vật mới', 'Vứt đi', 'Chôn rác xuống lòng đất sâu'], 1, 'Tận dụng vật cũ.'),
    Q('Em có thể tái chế?', ['Vứt chai sông', 'Đốt chai', 'Đập vỡ chai', 'Chai nhựa làm chậu cây'], 3, 'Chai nhựa làm chậu cây.'),
    Q('Tái chế giấy?', ['Vẽ tranh, làm thiệp', 'Bỏ thẳng vào thùng rác chung', 'Vò nát', 'Đốt để giảm thể tích'], 0, 'Tận dụng giấy cũ làm sản phẩm.'),
    Q('Tái chế giúp?', ['Tiết kiệm và bảo vệ môi trường', 'Chỉ phù hợp cho người lớn', 'Làm ô nhiễm thêm môi trường', 'Tốn tiền'], 0, 'Tiết kiệm và bảo vệ môi trường.'),
  ]),

  M(28, 'Ôn nấu ăn — Trứng ốp la', [
    Q('Trứng ốp la là?', ['Trứng luộc', 'Trứng sống', 'Trứng chiên đơn giản', 'Trứng nướng'], 2, 'Trứng chiên trong chảo.'),
    Q('Trước khi chiên cần?', ['Không cần dầu', 'Đập trên chảo lạnh', 'Chiên trứng nguyên vỏ', 'Đập trứng ra bát, có chảo nóng và dầu'], 3, 'Bát, chảo nóng và dầu.'),
    Q('Khi chiên em?', ['Cẩn thận tránh dầu bắn', 'Đổ nước vào', 'Đứng sát', 'Khuấy mạnh'], 0, 'Cẩn thận tránh dầu bắn.'),
    Q('Sau khi nấu xong?', ['Để bếp cháy', 'Tắt bếp, dọn dẹp', 'Vứt chảo', 'Bỏ chạy'], 1, 'Tắt bếp và dọn dẹp.'),
  ]),

  M(29, 'Sử dụng tủ lạnh', [
    Q('Tủ lạnh dùng để?', ['Trang trí', 'Nấu chín thức ăn nhanh', 'Sưởi ấm phòng vào mùa đông', 'Bảo quản thức ăn lâu hơn'], 3, 'Bảo quản thức ăn.'),
    Q('Ngăn đông để?', ['Rau tươi', 'Hoa quả', 'Đồ đông lạnh, thịt cá', 'Đồ khô'], 2, 'Ngăn đông cho đồ cấp đông.'),
    Q('Ngăn mát để?', ['Đồ đông cứng', 'Đồ khô', 'Rau, sữa, đồ ăn tươi', 'Bánh kẹo'], 2, 'Rau, sữa, đồ tươi.'),
    Q('Mở tủ lạnh em nên?', ['Đập cửa', 'Để mở luôn', 'Mở lâu', 'Nhanh, đóng kín lại'], 3, 'Nhanh và đóng kín lại.'),
  ]),

  M(30, 'Lò vi sóng — Sử dụng an toàn', [
    Q('Lò vi sóng làm nóng bằng?', ['Điện trở', 'Hơi nước áp suất cao', 'Ngọn lửa nhỏ bên trong', 'Sóng vi ba'], 3, 'Sóng vi ba làm nóng đồ ăn.'),
    Q('Không cho vào lò vi sóng?', ['Đồ kim loại', 'Đồ sứ tráng men kim loại', 'Đồ chịu nhiệt', 'Đồ thuỷ tinh'], 0, 'Kim loại gây tia lửa.'),
    Q('Lấy đồ nóng em?', ['Áp mặt', 'Tay không', 'Thổi mạnh cho nguội bớt', 'Dùng găng tay/khăn'], 3, 'Dùng găng tay tránh bỏng.'),
    Q('Đậy đồ trong lò?', ['Bịt kim loại', 'Không đậy', 'Nắp chuyên dụng có lỗ thoát', 'Kín mít'], 2, 'Nắp có lỗ thoát hơi.'),
  ]),

  M(31, 'Sửa chữa nhỏ trong nhà', [
    Q('Khi bóng đèn hỏng?', ['Tháo ra chơi đùa', 'Bỏ mặc', 'Tự sửa', 'Báo người lớn để thay'], 3, 'Báo người lớn để thay an toàn.'),
    Q('Đinh lỏng em?', ['Bỏ qua', 'Rút hẳn đinh ra vứt đi', 'Tự đóng', 'Báo người lớn đóng lại'], 3, 'Báo người lớn giúp.'),
    Q('Vòi nước rỉ?', ['Để chảy', 'Tự cạy', 'Bỏ qua', 'Báo người lớn sửa'], 3, 'Báo người lớn để khoá hoặc sửa.'),
    Q('Vít lỏng em?', ['Đập búa cho chặt lại', 'Bỏ qua', 'Cắt bỏ phần đầu vít', 'Vặn lại bằng tua vít'], 3, 'Vặn lại bằng tua vít.'),
  ]),

  M(32, 'Tiết kiệm điện - nước trong gia đình', [
    Q('Tiết kiệm điện?', ['Dùng đèn sợi đốt', 'Tắt khi không dùng, dùng đèn LED', 'Mở nhiều thiết bị', 'Bật cả ngày'], 1, 'Tắt và dùng đèn LED.'),
    Q('Tiết kiệm nước?', ['Đổ thừa', 'Tắm rất lâu', 'Khoá vòi, hứng nước rửa rau tưới cây', 'Để chảy'], 2, 'Khoá vòi và tái sử dụng.'),
    Q('Đồng hồ điện đo?', ['Thời gian', 'Lượng điện đã dùng', 'Áp suất', 'Nhiệt độ'], 1, 'Đo lượng điện tiêu thụ (kWh).'),
    Q('Vì sao cần tiết kiệm?', ['Để được khen ngoan', 'Không lý do', 'Bắt buộc', 'Tiền và môi trường'], 3, 'Tiết kiệm tiền và bảo vệ môi trường.'),
  ]),

  M(33, 'Sản phẩm em yêu thích', [
    Q('Em chọn sản phẩm công nghệ em yêu vì?', ['Vì có nhiều màu sắc lạ', 'Hữu ích cho cuộc sống', 'Vì có giá tiền cao nhất', 'Đẹp mã'], 1, 'Hữu ích là quan trọng nhất.'),
    Q('Khi giới thiệu sản phẩm em?', ['Khoe giá tiền của sản phẩm', 'Im lặng', 'Chê sản phẩm khác', 'Nói công dụng, cách dùng'], 3, 'Nói công dụng và cách dùng.'),
    Q('Bảo quản sản phẩm em?', ['Bỏ mặc', 'Dùng theo cách mình thích', 'Đúng hướng dẫn', 'Tháo rời ra xem cấu tạo'], 2, 'Theo hướng dẫn.'),
    Q('Khi sản phẩm hỏng em?', ['Đập bỏ vì giận', 'Tự sửa', 'Báo người lớn để sửa', 'Vứt vào thùng rác chung'], 2, 'Báo người lớn.'),
  ]),

  M(34, 'Ôn tập cuối năm', [
    Q('Cả năm em đã học?', ['Không gì', 'Chỉ máy tính', 'Chỉ trồng rau', 'Trồng trọt, chăn nuôi, an toàn điện, máy tính, nấu ăn'], 3, 'Rất nhiều mảng kiến thức.'),
    Q('Công nghệ giúp em?', ['Tốn tiền mà không cần thiết', 'Làm con người lười biếng hơn', 'Gây căng thẳng mắt và đầu', 'Cuộc sống tốt hơn nếu dùng đúng'], 3, 'Tốt hơn nếu dùng đúng.'),
    Q('An toàn là?', ['Khi nào nhớ', 'Ưu tiên hàng đầu khi dùng công nghệ', 'Bỏ qua', 'Không cần'], 1, 'Ưu tiên hàng đầu.'),
    Q('Tiết kiệm tài nguyên?', ['Chỉ dành cho người lớn lo', 'Lãng phí tốt hơn', 'Bảo vệ Trái Đất', 'Làm giảm chất lượng cuộc sống'], 2, 'Bảo vệ Trái Đất.'),
  ]),

  M(35, 'Kiểm tra cuối năm', [
    Q('Em chăm cây bằng cách?', ['Tưới, làm cỏ, bón phân', 'Cắt bỏ hết lá vàng', 'Phun thuốc diệt cỏ mạnh', 'Bỏ mặc'], 0, 'Tưới, làm cỏ, bón phân.'),
    Q('An toàn điện?', ['Tay ướt', 'Tay khô, không chạm dây hở, có cầu dao', 'Cắn dây', 'Cắm nhiều phích vào một ổ'], 1, 'Quy tắc an toàn điện.'),
    Q('Internet an toàn?', ['Cho hết', 'Tự xử lý', 'Im lặng', 'Không cho người lạ thông tin, báo cha mẹ khi gặp xấu'], 3, 'Bảo mật và báo cha mẹ.'),
    Q('Lên cấp 2 em vẫn?', ['Chỉ chơi điện thoại', 'Quên hết kiến thức đã học', 'Học công nghệ và áp dụng vào cuộc sống', 'Bỏ môn vì khó hơn'], 2, 'Tiếp tục học và ứng dụng.'),
  ]),
];

export const P5CN_SCENARIOS = indexBy(P5CN_WEEKS);
