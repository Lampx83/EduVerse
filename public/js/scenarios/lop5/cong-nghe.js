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
    Q('Công nghệ giúp con người?', ['Làm việc nhanh hơn, tốt hơn','Lười biếng','Mệt mỏi','Không lợi'], 0, 'Công nghệ giúp việc nhanh và tốt hơn.'),
    Q('Ví dụ về công nghệ trong nhà?', ['Tivi, tủ lạnh, máy giặt','Ghế gỗ','Chén bát','Đá'], 0, 'Tivi, tủ lạnh, máy giặt là sản phẩm công nghệ.'),
    Q('Sử dụng công nghệ em cần?', ['Đúng cách, an toàn','Tuỳ tiện','Phá hoại','Không quan tâm'], 0, 'Đúng cách và an toàn.'),
    Q('Công nghệ có thể có hại nếu?', ['Dùng sai cách','Dùng đúng','Không dùng','Bảo quản tốt'], 0, 'Dùng sai gây nguy hiểm.'),
  ]),

  M(2, 'Trồng rau ăn lá — Chuẩn bị', [
    Q('Rau ăn lá phổ biến?', ['Rau muống, cải, mồng tơi','Khoai tây','Cà rốt','Hành tỏi (lấy củ)'], 0, 'Rau muống, cải, mồng tơi.'),
    Q('Chuẩn bị trồng rau cần?', ['Đất, hạt giống, dụng cụ','Sắt','Nhựa','Pin'], 0, 'Đất, hạt giống, dụng cụ là cơ bản.'),
    Q('Đất trồng rau tốt nhất?', ['Đất tơi xốp, ẩm','Đất khô cứng','Cát khô','Đất phèn'], 0, 'Đất tơi xốp và ẩm.'),
    Q('Vị trí trồng rau lá?', ['Nơi có ánh nắng vừa','Tối hoàn toàn','Nắng gắt cả ngày','Trong tủ'], 0, 'Nắng vừa, không quá gắt.'),
  ]),

  M(3, 'Trồng rau ăn lá — Gieo hạt', [
    Q('Trước khi gieo, đất cần?', ['Làm tơi, có rãnh','Nén chặt','Để khô','Đổ nước nhiều'], 0, 'Làm tơi và có rãnh.'),
    Q('Khi gieo hạt em nên?', ['Rắc đều, lấp đất mỏng','Đè sâu','Vứt bừa','Để trên mặt'], 0, 'Rắc đều và lấp mỏng.'),
    Q('Tưới sau gieo?', ['Tưới nhẹ bằng vòi phun','Đổ nước nhiều','Không tưới','Tưới nước nóng'], 0, 'Tưới nhẹ tránh trôi hạt.'),
    Q('Bao lâu hạt nảy mầm?', ['Vài ngày','Vài giây','Một tháng','Một năm'], 0, 'Hạt rau lá nảy trong vài ngày.'),
  ]),

  M(4, 'Trồng rau — Chăm sóc và thu hoạch', [
    Q('Chăm sóc rau gồm?', ['Tưới, làm cỏ, bón phân','Đốt','Phá','Bỏ mặc'], 0, 'Tưới, làm cỏ, bón phân.'),
    Q('Tưới rau thường vào?', ['Sáng sớm hoặc chiều mát','Trưa nắng gắt','Đêm khuya','Không tưới'], 0, 'Sáng sớm hoặc chiều mát.'),
    Q('Khi rau bị sâu em nên?', ['Bắt sâu hoặc dùng biện pháp sinh học','Phun thuốc bừa','Bỏ ăn','Chặt cây'], 0, 'Bắt sâu hoặc sinh học là an toàn.'),
    Q('Khi nào thu hoạch?', ['Khi cây đủ lớn, lá xanh tốt','Khi cây mới gieo','Khi héo','Tuỳ ý'], 0, 'Khi cây đủ lớn và xanh tốt.'),
  ]),

  M(5, 'Chăm sóc gà', [
    Q('Gà cần được?', ['Cho ăn uống đầy đủ, ở chỗ sạch','Bỏ đói','Nhốt chật','Không vệ sinh'], 0, 'Cho ăn uống và vệ sinh.'),
    Q('Thức ăn cho gà?', ['Cám, ngô, gạo, rau','Sắt','Đá','Pin'], 0, 'Cám, ngô, gạo, rau.'),
    Q('Chuồng gà cần?', ['Sạch, thoáng, có mái che','Bẩn','Nắng gắt','Ngập nước'], 0, 'Sạch, thoáng và có mái.'),
    Q('Khi gà bệnh em nên?', ['Báo người lớn, tách riêng','Bỏ mặc','Để chung','Đánh gà'], 0, 'Báo người lớn và tách riêng.'),
  ]),

  M(6, 'Chăm sóc cá cảnh', [
    Q('Cá cảnh sống ở?', ['Bể nước sạch','Nước bẩn','Trên cạn','Trong cát'], 0, 'Bể nước sạch.'),
    Q('Cho cá ăn?', ['Lượng vừa đủ, không thừa','Rất nhiều','Không cho','Cho cả ngày'], 0, 'Vừa đủ tránh ô nhiễm nước.'),
    Q('Thay nước bể cá?', ['Định kì 1 phần, không thay hết','Thay hết mỗi ngày','Không bao giờ','Tuỳ ý'], 0, 'Thay 1 phần định kì.'),
    Q('Cá cần?', ['Oxy trong nước (sủi khí)','Không oxy','Sôi nước','Đá nước'], 0, 'Cần oxy hoà tan.'),
  ]),

  M(7, 'An toàn điện trong nhà — Cơ bản', [
    Q('Điện có thể gây?', ['Giật, cháy nổ','Mát mẻ','Không hại','Vui vẻ'], 0, 'Điện có thể giật và gây cháy.'),
    Q('Khi tay ướt em?', ['KHÔNG chạm vào ổ điện','Cứ chạm','Nhúng vào','Bấm thử'], 0, 'Tuyệt đối không chạm khi tay ướt.'),
    Q('Dây điện hở em?', ['Báo người lớn, không tự sửa','Tự sửa','Cắt','Quấn băng dính rồi dùng'], 0, 'Báo người lớn để sửa đúng cách.'),
    Q('Ổ điện trẻ em không dùng?', ['Cần bịt kín','Mở thoải mái','Cho em chơi','Đút que vào'], 0, 'Bịt kín ổ điện không dùng.'),
  ]),

  M(8, 'An toàn điện — Nâng cao', [
    Q('Khi sấm sét em?', ['Không dùng thiết bị điện','Dùng nhiều','Tắm','Ra ngoài cây cao'], 0, 'Không dùng thiết bị điện khi sét.'),
    Q('Cầu dao điện dùng để?', ['Ngắt điện khẩn cấp','Trang trí','Chơi','Không dùng'], 0, 'Cầu dao ngắt điện khi cần.'),
    Q('Khi thấy người bị điện giật?', ['Ngắt điện rồi gọi cấp cứu, không sờ trực tiếp','Sờ vào kéo ra','Bỏ chạy','Cười'], 0, 'Ngắt điện trước, không sờ trực tiếp.'),
    Q('Phích cắm rút?', ['Cầm phích, không kéo dây','Kéo dây','Đá','Cắn dây'], 0, 'Cầm phích, không kéo dây.'),
  ]),

  M(9, 'Sử dụng quạt máy', [
    Q('Quạt máy chạy bằng?', ['Điện','Tay','Hơi','Nước'], 0, 'Quạt máy chạy bằng điện.'),
    Q('Bộ phận chính của quạt?', ['Động cơ, cánh quạt','Bánh xe','Búa','Ốc vít'], 0, 'Động cơ và cánh quạt.'),
    Q('Khi quạt đang chạy em?', ['KHÔNG cho tay vào cánh','Cho tay','Cho que vào','Lay quạt'], 0, 'Không cho tay vào cánh đang quay.'),
    Q('Vệ sinh quạt cần?', ['Tắt điện trước khi lau','Lau lúc chạy','Phun nước','Không vệ sinh'], 0, 'Tắt điện trước khi lau.'),
  ]),

  M(10, 'Sử dụng bàn ủi (bàn là)', [
    Q('Bàn ủi dùng để?', ['Là phẳng quần áo','Đập','Cắt','Ăn'], 0, 'Là phẳng quần áo.'),
    Q('Bàn ủi nóng có thể?', ['Gây bỏng','Mát','Vô hại','Tốt cho da'], 0, 'Bàn ủi nóng gây bỏng nguy hiểm.'),
    Q('Sau khi dùng bàn ủi?', ['Rút điện, đặt nơi cao tránh trẻ nhỏ','Để cắm điện','Vứt sàn','Đặt thấp'], 0, 'Rút điện và đặt nơi an toàn.'),
    Q('Khi là quần áo em nên?', ['Theo nhiệt độ phù hợp loại vải','Là nhiệt cao nhất','Không cần biết','Là khô'], 0, 'Theo nhiệt độ phù hợp.'),
  ]),

  M(11, 'Máy vi tính — Vai trò', [
    Q('Máy vi tính giúp?', ['Học tập, làm việc, giải trí','Chỉ chơi game','Không lợi','Mất thời gian'], 0, 'Học tập, làm việc, giải trí.'),
    Q('Bộ phận chính của máy tính?', ['Màn hình, bàn phím, chuột, CPU','Bánh xe','Pin','Ăng-ten'], 0, 'Màn hình, bàn phím, chuột, CPU.'),
    Q('Chức năng của CPU?', ['Xử lý thông tin','Hiển thị','Nhập','Phát âm thanh'], 0, 'CPU là bộ xử lý.'),
    Q('Màn hình để?', ['Hiển thị thông tin','Nhập liệu','Xử lý','In ấn'], 0, 'Màn hình hiển thị.'),
  ]),

  M(12, 'Máy vi tính — An toàn', [
    Q('Khoảng cách mắt - màn hình?', ['Khoảng 50-70 cm','Sát mắt','3m','Tuỳ ý'], 0, '50-70 cm là an toàn cho mắt.'),
    Q('Sau bao lâu nên nghỉ mắt?', ['Mỗi 30 phút nghỉ vài phút','Cả ngày liền','Không nghỉ','1 tuần'], 0, 'Mỗi 30 phút nghỉ vài phút.'),
    Q('Khi mưa to em?', ['Tắt máy và rút điện','Cứ dùng','Lau bằng nước','Đút phích vào ổ ướt'], 0, 'Tắt máy và rút điện.'),
    Q('Lướt internet em?', ['Vào trang lành mạnh','Trang lạ bất kì','Nhấn link lạ','Cho người lạ thông tin'], 0, 'Chỉ vào trang an toàn.'),
  ]),

  M(13, 'Sử dụng internet an toàn', [
    Q('Khi gặp nội dung xấu?', ['Tắt và báo người lớn','Xem tiếp','Chia sẻ bạn','Lưu lại'], 0, 'Tắt và báo người lớn.'),
    Q('KHÔNG nên cho người lạ?', ['Thông tin cá nhân (tên, địa chỉ, ảnh)','Lời chào','Câu hỏi học','Hình emoji'], 0, 'Không cho thông tin cá nhân.'),
    Q('Mật khẩu nên?', ['Mạnh, không chia sẻ ai','Đơn giản','Cho bạn dùng chung','Ghi nơi dễ thấy'], 0, 'Mật khẩu mạnh và bảo mật.'),
    Q('Khi bị bắt nạt trên mạng?', ['Báo cha mẹ, không trả đũa','Trả đũa','Im','Tự xử lý'], 0, 'Báo cha mẹ ngay.'),
  ]),

  M(14, 'Ôn tập an toàn điện và thiết bị', [
    Q('Bảo quản điện thoại em?', ['Sạc đúng, không rơi','Sạc qua đêm','Để rơi','Để chỗ ướt'], 0, 'Sạc đúng và không rơi.'),
    Q('Khi không dùng thiết bị?', ['Tắt và rút điện','Để chạy mãi','Mở mức cao','Quên'], 0, 'Tắt và rút điện tiết kiệm.'),
    Q('Pin hỏng em?', ['Bỏ vào thùng pin riêng','Vứt thùng rác thường','Đốt','Cho em bé'], 0, 'Pin hỏng phải xử lý đúng cách.'),
    Q('Tiết kiệm điện bằng?', ['Tắt thiết bị khi không dùng','Bật cả ngày','Mở nhiều','Bỏ mặc'], 0, 'Tắt khi không dùng.'),
  ]),

  M(15, 'Lắp ghép mô hình — Giới thiệu', [
    Q('Mô hình lắp ghép là?', ['Đồ chơi từ các chi tiết ghép','Bánh kẹo','Quần áo','Sách'], 0, 'Đồ chơi từ chi tiết ghép lại.'),
    Q('Vật liệu lắp ghép?', ['Que, ốc vít, bánh xe…','Đất sét ướt','Nước','Khí'], 0, 'Que, ốc vít, bánh xe.'),
    Q('Dụng cụ cần?', ['Cờ-lê, tua vít','Búa lớn','Cưa','Lửa'], 0, 'Cờ-lê và tua vít là cơ bản.'),
    Q('Trước khi lắp em nên?', ['Đọc hướng dẫn','Lắp ngay','Bỏ qua','Vứt'], 0, 'Đọc hướng dẫn trước.'),
  ]),

  M(16, 'Lắp ghép mô hình xe', [
    Q('Xe có bộ phận?', ['Khung, bánh, trục','Cánh','Vây','Mỏ'], 0, 'Khung, bánh, trục.'),
    Q('Bánh xe cần?', ['Lắp chắc vào trục, quay được','Cố định','Tách rời','Không quan trọng'], 0, 'Lắp chắc và quay được.'),
    Q('Khi lắp em phải?', ['Cẩn thận, không vội','Vội vàng','Cẩu thả','Phá'], 0, 'Cẩn thận và không vội.'),
    Q('Sản phẩm hoàn thành em?', ['Kiểm tra hoạt động','Vứt','Phá','Bỏ qua'], 0, 'Kiểm tra hoạt động.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('HK1 em đã học?', ['Trồng rau, chăm gà-cá, an toàn điện, máy tính, lắp ghép','Chỉ trồng rau','Chỉ máy tính','Không gì'], 0, 'Nhiều nội dung HK1.'),
    Q('Sản phẩm công nghệ giúp em?', ['Học tập, sinh hoạt thuận tiện','Khó khăn','Vô ích','Buồn'], 0, 'Học và sinh hoạt thuận tiện.'),
    Q('Khi dùng thiết bị cần?', ['Đúng cách, an toàn','Tuỳ tiện','Phá','Không quan tâm'], 0, 'Đúng cách và an toàn.'),
    Q('Bảo vệ môi trường khi dùng công nghệ?', ['Tiết kiệm điện nước','Lãng phí','Xả thải','Phá thiết bị'], 0, 'Tiết kiệm điện nước.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Em chăm sóc rau bằng cách?', ['Tưới, làm cỏ, bón phân','Phá','Bỏ mặc','Đốt'], 0, 'Tưới, làm cỏ, bón phân.'),
    Q('An toàn điện cơ bản?', ['Tay khô, không chạm dây hở','Tay ướt vẫn dùng','Cắn dây','Đổ nước'], 0, 'Tay khô và không chạm dây hở.'),
    Q('Sử dụng máy tính đúng?', ['Tư thế đúng, nghỉ mắt','Sát màn hình','Dùng cả ngày','Tuỳ ý'], 0, 'Tư thế đúng và nghỉ mắt.'),
    Q('Khi lắp ghép xong?', ['Cất gọn dụng cụ','Vứt','Bỏ bừa','Phá'], 0, 'Cất gọn dụng cụ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bếp đơn giản — Sandwich', [
    Q('Sandwich gồm?', ['Bánh mì + nhân kẹp','Cơm','Phở','Bún'], 0, 'Bánh mì kẹp nhân.'),
    Q('Nhân sandwich có thể?', ['Trứng, jambon, rau, phô mai','Đất','Cát','Sắt'], 0, 'Trứng, jambon, rau, phô mai.'),
    Q('Khi cắt bánh em dùng?', ['Dao cắt bánh nhỏ, người lớn giúp','Dao to sắc','Tay','Búa'], 0, 'Dao nhỏ và nhờ người lớn giúp.'),
    Q('Trước khi làm em?', ['Rửa tay sạch','Tay bẩn cũng được','Vứt','Bỏ qua'], 0, 'Rửa tay là quan trọng nhất.'),
  ]),

  M(20, 'Salad rau quả', [
    Q('Salad là?', ['Rau quả trộn, ăn sống/sơ chế','Món xào','Món luộc','Món chiên'], 0, 'Rau quả trộn ăn sống.'),
    Q('Nguyên liệu salad?', ['Xà lách, cà chua, dưa chuột','Đất','Sắt','Đá'], 0, 'Rau quả tươi.'),
    Q('Rau quả trước khi trộn?', ['Rửa sạch, để ráo','Để bẩn','Đốt','Vứt'], 0, 'Rửa sạch và để ráo.'),
    Q('Salad tốt cho?', ['Sức khoẻ, nhiều vitamin','Hại sức khoẻ','Không gì','Béo'], 0, 'Tốt cho sức khoẻ.'),
  ]),

  M(21, 'An toàn trong bếp', [
    Q('Trong bếp em không nên?', ['Đùa nghịch với lửa, dao','Giúp mẹ','Rửa rau','Dọn chén'], 0, 'Không đùa với lửa và dao.'),
    Q('Khi cầm dao em?', ['Cẩn thận, lưỡi hướng xa','Vung loạn','Cầm chuôi như búa','Chỉ vào người'], 0, 'Cẩn thận và hướng lưỡi xa người.'),
    Q('Khi nồi nóng em?', ['Dùng găng tay/khăn dày','Tay không','Sờ','Áp mặt'], 0, 'Dùng găng tay tránh bỏng.'),
    Q('Khi bị bỏng nhẹ?', ['Rửa nước mát ngay','Bôi kem đánh răng','Bỏ qua','Bôi mỡ'], 0, 'Rửa nước mát ngay là sơ cứu đúng.'),
  ]),

  M(22, 'Trồng rau thuỷ canh đơn giản', [
    Q('Thuỷ canh là?', ['Trồng rau bằng nước (không đất)','Trồng đất khô','Trồng cát','Trồng trên đá'], 0, 'Trồng bằng nước (dung dịch dinh dưỡng).'),
    Q('Ưu điểm thuỷ canh?', ['Sạch, không sâu bệnh đất','Bẩn hơn','Tốn đất','Khó'], 0, 'Sạch và không sâu bệnh đất.'),
    Q('Thuỷ canh cần?', ['Dung dịch dinh dưỡng, ánh sáng','Đất','Cát','Đá'], 0, 'Dung dịch và ánh sáng.'),
    Q('Rau phù hợp thuỷ canh?', ['Xà lách, cải','Lúa','Khoai','Mía'], 0, 'Rau lá ngắn ngày.'),
  ]),

  M(23, 'Chăm sóc cây cảnh trong nhà', [
    Q('Cây cảnh trong nhà cần?', ['Ánh sáng vừa, tưới hợp lý','Tối hoàn toàn','Nắng gắt','Không tưới'], 0, 'Ánh sáng vừa và tưới đúng.'),
    Q('Cây nào dễ chăm trong nhà?', ['Lưỡi hổ, trầu bà','Hoa hồng','Lúa','Mía'], 0, 'Lưỡi hổ, trầu bà dễ chăm.'),
    Q('Lá vàng có thể do?', ['Tưới quá nhiều/ít','Cây vui','Trời lạnh','Không lý do'], 0, 'Tưới sai gây lá vàng.'),
    Q('Cây cảnh giúp?', ['Làm sạch không khí, trang trí','Hại','Vô ích','Mệt'], 0, 'Sạch không khí và đẹp.'),
  ]),

  M(24, 'Lắp ghép mô hình cơ khí phức tạp', [
    Q('Mô hình phức tạp gồm?', ['Nhiều bộ phận, cần chính xác','1 phần','Đơn giản','Không cần'], 0, 'Nhiều bộ phận và chính xác.'),
    Q('Khi lắp khó em?', ['Đọc lại hướng dẫn, kiên trì','Bỏ','Cãi','Đập'], 0, 'Đọc lại và kiên trì.'),
    Q('Tua vít dùng để?', ['Vặn ốc vít','Cắt','Đập','Đo'], 0, 'Vặn ốc vít.'),
    Q('Cờ-lê dùng để?', ['Vặn ốc lục giác','Cắt giấy','Đo dài','Đốt'], 0, 'Vặn ốc lục giác.'),
  ]),

  M(25, 'Mô hình chuyển động', [
    Q('Bánh răng dùng để?', ['Truyền chuyển động','Trang trí','Đập','Đo'], 0, 'Truyền chuyển động giữa các trục.'),
    Q('Khi bánh răng A quay, bánh răng B?', ['Quay ngược chiều','Cùng chiều','Đứng yên','Quay nhanh hơn'], 0, '2 bánh răng ăn khớp quay ngược chiều.'),
    Q('Mô hình xe có động cơ?', ['Tự chạy được','Đứng yên','Bay','Bơi'], 0, 'Có động cơ thì tự chạy.'),
    Q('Để xe chạy lâu?', ['Pin tốt và cơ khí trơn','Pin yếu','Cơ khí kẹt','Không cần'], 0, 'Pin tốt và cơ khí trơn tru.'),
  ]),

  M(26, 'Vật liệu sản phẩm công nghệ', [
    Q('Vật liệu kim loại?', ['Sắt, nhôm, đồng','Gỗ','Nhựa','Vải'], 0, 'Sắt, nhôm, đồng là kim loại.'),
    Q('Vật liệu phi kim?', ['Gỗ, nhựa, vải','Sắt','Đồng','Vàng'], 0, 'Gỗ, nhựa, vải là phi kim.'),
    Q('Tái chế nhựa giúp?', ['Bảo vệ môi trường','Hại môi trường','Vô ích','Tốn tiền'], 0, 'Tái chế bảo vệ môi trường.'),
    Q('Kim loại bền hơn?', ['Giấy','Gỗ','Nhựa','Tất cả các loại trên'], 3, 'Kim loại bền hơn các loại này nói chung.'),
  ]),

  M(27, 'Sản phẩm tái chế', [
    Q('Tái chế là?', ['Tận dụng vật cũ làm vật mới','Vứt đi','Đốt','Chôn'], 0, 'Tận dụng vật cũ.'),
    Q('Em có thể tái chế?', ['Chai nhựa làm chậu cây','Đập vỡ chai','Đốt chai','Vứt chai sông'], 0, 'Chai nhựa làm chậu cây.'),
    Q('Tái chế giấy?', ['Vẽ tranh, làm thiệp','Đốt','Vứt','Vò nát'], 0, 'Tận dụng giấy cũ làm sản phẩm.'),
    Q('Tái chế giúp?', ['Tiết kiệm và bảo vệ môi trường','Hại','Vô ích','Tốn tiền'], 0, 'Tiết kiệm và bảo vệ môi trường.'),
  ]),

  M(28, 'Ôn nấu ăn — Trứng ốp la', [
    Q('Trứng ốp la là?', ['Trứng chiên đơn giản','Trứng luộc','Trứng sống','Trứng nướng'], 0, 'Trứng chiên trong chảo.'),
    Q('Trước khi chiên cần?', ['Đập trứng ra bát, có chảo nóng và dầu','Đập trên chảo lạnh','Chiên trứng nguyên vỏ','Không cần dầu'], 0, 'Bát, chảo nóng và dầu.'),
    Q('Khi chiên em?', ['Cẩn thận tránh dầu bắn','Đứng sát','Khuấy mạnh','Đổ nước vào'], 0, 'Cẩn thận tránh dầu bắn.'),
    Q('Sau khi nấu xong?', ['Tắt bếp, dọn dẹp','Để bếp cháy','Bỏ chạy','Vứt chảo'], 0, 'Tắt bếp và dọn dẹp.'),
  ]),

  M(29, 'Sử dụng tủ lạnh', [
    Q('Tủ lạnh dùng để?', ['Bảo quản thức ăn lâu hơn','Sưởi','Nấu','Trang trí'], 0, 'Bảo quản thức ăn.'),
    Q('Ngăn đông để?', ['Đồ đông lạnh, thịt cá','Rau tươi','Hoa quả','Đồ khô'], 0, 'Ngăn đông cho đồ cấp đông.'),
    Q('Ngăn mát để?', ['Rau, sữa, đồ ăn tươi','Đồ đông cứng','Đồ khô','Bánh kẹo'], 0, 'Rau, sữa, đồ tươi.'),
    Q('Mở tủ lạnh em nên?', ['Nhanh, đóng kín lại','Mở lâu','Để mở luôn','Đập cửa'], 0, 'Nhanh và đóng kín lại.'),
  ]),

  M(30, 'Lò vi sóng — Sử dụng an toàn', [
    Q('Lò vi sóng làm nóng bằng?', ['Sóng vi ba','Lửa','Điện trở','Hơi'], 0, 'Sóng vi ba làm nóng đồ ăn.'),
    Q('Không cho vào lò vi sóng?', ['Đồ kim loại','Đồ thuỷ tinh','Đồ sứ','Đồ chịu nhiệt'], 0, 'Kim loại gây tia lửa.'),
    Q('Lấy đồ nóng em?', ['Dùng găng tay/khăn','Tay không','Áp mặt','Thổi'], 0, 'Dùng găng tay tránh bỏng.'),
    Q('Đậy đồ trong lò?', ['Nắp chuyên dụng có lỗ thoát','Kín mít','Không đậy','Bịt kim loại'], 0, 'Nắp có lỗ thoát hơi.'),
  ]),

  M(31, 'Sửa chữa nhỏ trong nhà', [
    Q('Khi bóng đèn hỏng?', ['Báo người lớn để thay','Tự sửa','Đập','Bỏ mặc'], 0, 'Báo người lớn để thay an toàn.'),
    Q('Đinh lỏng em?', ['Báo người lớn đóng lại','Tự đóng','Bỏ qua','Phá'], 0, 'Báo người lớn giúp.'),
    Q('Vòi nước rỉ?', ['Báo người lớn sửa','Tự cạy','Để chảy','Bỏ qua'], 0, 'Báo người lớn để khoá hoặc sửa.'),
    Q('Vít lỏng em?', ['Vặn lại bằng tua vít','Đập','Bỏ qua','Cắt'], 0, 'Vặn lại bằng tua vít.'),
  ]),

  M(32, 'Tiết kiệm điện - nước trong gia đình', [
    Q('Tiết kiệm điện?', ['Tắt khi không dùng, dùng đèn LED','Bật cả ngày','Mở nhiều thiết bị','Dùng đèn sợi đốt'], 0, 'Tắt và dùng đèn LED.'),
    Q('Tiết kiệm nước?', ['Khoá vòi, hứng nước rửa rau tưới cây','Để chảy','Đổ thừa','Tắm rất lâu'], 0, 'Khoá vòi và tái sử dụng.'),
    Q('Đồng hồ điện đo?', ['Lượng điện đã dùng','Thời gian','Nhiệt độ','Áp suất'], 0, 'Đo lượng điện tiêu thụ (kWh).'),
    Q('Vì sao cần tiết kiệm?', ['Tiền và môi trường','Khoe','Không lý do','Bắt buộc'], 0, 'Tiết kiệm tiền và bảo vệ môi trường.'),
  ]),

  M(33, 'Sản phẩm em yêu thích', [
    Q('Em chọn sản phẩm công nghệ em yêu vì?', ['Hữu ích cho cuộc sống','Đẹp mã','Đắt','Lạ'], 0, 'Hữu ích là quan trọng nhất.'),
    Q('Khi giới thiệu sản phẩm em?', ['Nói công dụng, cách dùng','Khoe','Chê sản phẩm khác','Im lặng'], 0, 'Nói công dụng và cách dùng.'),
    Q('Bảo quản sản phẩm em?', ['Đúng hướng dẫn','Tuỳ ý','Phá','Bỏ mặc'], 0, 'Theo hướng dẫn.'),
    Q('Khi sản phẩm hỏng em?', ['Báo người lớn để sửa','Tự sửa','Vứt','Đập'], 0, 'Báo người lớn.'),
  ]),

  M(34, 'Ôn tập cuối năm', [
    Q('Cả năm em đã học?', ['Trồng trọt, chăn nuôi, an toàn điện, máy tính, nấu ăn','Chỉ máy tính','Chỉ trồng rau','Không gì'], 0, 'Rất nhiều mảng kiến thức.'),
    Q('Công nghệ giúp em?', ['Cuộc sống tốt hơn nếu dùng đúng','Hại','Vô ích','Buồn'], 0, 'Tốt hơn nếu dùng đúng.'),
    Q('An toàn là?', ['Ưu tiên hàng đầu khi dùng công nghệ','Không cần','Khi nào nhớ','Bỏ qua'], 0, 'Ưu tiên hàng đầu.'),
    Q('Tiết kiệm tài nguyên?', ['Bảo vệ Trái Đất','Không quan trọng','Lãng phí tốt hơn','Vô ích'], 0, 'Bảo vệ Trái Đất.'),
  ]),

  M(35, 'Kiểm tra cuối năm', [
    Q('Em chăm cây bằng cách?', ['Tưới, làm cỏ, bón phân','Phá','Bỏ mặc','Đốt'], 0, 'Tưới, làm cỏ, bón phân.'),
    Q('An toàn điện?', ['Tay khô, không chạm dây hở, có cầu dao','Tay ướt','Đùa','Cắn dây'], 0, 'Quy tắc an toàn điện.'),
    Q('Internet an toàn?', ['Không cho người lạ thông tin, báo cha mẹ khi gặp xấu','Cho hết','Tự xử lý','Im lặng'], 0, 'Bảo mật và báo cha mẹ.'),
    Q('Lên cấp 2 em vẫn?', ['Học công nghệ và áp dụng vào cuộc sống','Bỏ','Quên','Lười'], 0, 'Tiếp tục học và ứng dụng.'),
  ]),
];

export const P5CN_SCENARIOS = indexBy(P5CN_WEEKS);
