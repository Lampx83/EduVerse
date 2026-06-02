// ============================================================
// Lớp 1 · HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) — 35 tuần
// Bám CT GDPT 2018 · HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết.
// Mạch: Bản thân → Gia đình → Nhà trường → Cộng đồng → Tự nhiên.
// ID prefix: "P1HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1HDTN', 'htn', n, title, qs, opts);

export const P1HDTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Chào năm học mới', [
    Q('Ngày khai giảng em đến trường với tâm trạng?', ['Háo hức, vui vẻ', 'Buồn ngủ', 'Sợ hãi', 'Cáu giận'], 0, 'Ngày khai giảng là ngày vui đầu năm học.'),
    Q('Đến trường ngày khai giảng em mặc?', ['Đồng phục sạch sẽ, gọn gàng', 'Đồ chơi ở nhà', 'Đồ ngủ', 'Đồ thể thao bẩn'], 0, 'Mặc đồng phục sạch, gọn gàng.'),
    Q('Khi cô giáo đọc tên, em?', ['Đứng dậy “Có ạ!” rõ ràng', 'Im lặng', 'Cười to', 'Bỏ ra ngoài'], 0, 'Đứng dậy thưa “Có ạ!” lễ phép.'),
    Q('Khai giảng giúp em cảm thấy?', ['Mình đã là học sinh, có trách nhiệm', 'Mình vẫn là em bé', 'Buồn vì xa nhà', 'Không có gì khác'], 0, 'Em đã là học sinh, cần có trách nhiệm.'),
  ]),

  M(2, 'Giới thiệu bản thân', [
    Q('Câu giới thiệu lễ phép là?', ['Em chào cô và các bạn, em tên là…', 'Tao tên là…', 'Ờ thì…', 'Hỏi gì hỏi nhiều'], 0, 'Có lời chào, rồi nói tên.'),
    Q('Giọng nói khi giới thiệu nên?', ['Rõ ràng, đủ nghe', 'Lí nhí', 'Quát to', 'Cười nhăn nhở'], 0, 'Giọng rõ ràng, đủ nghe.'),
    Q('Thông tin KHÔNG nên kể trước lớp?', ['Tên em', 'Sở thích', 'Mật khẩu điện thoại bố mẹ', 'Tên lớp'], 2, 'Thông tin riêng tư không kể cho ai.'),
    Q('Khi bạn giới thiệu, em nên?', ['Lắng nghe, vỗ tay khi bạn xong', 'Nói chuyện riêng', 'Trêu bạn', 'Quay lưng'], 0, 'Lắng nghe để tôn trọng bạn.'),
  ]),

  M(3, 'Làm quen bạn mới', [
    Q('Để làm quen bạn, em?', ['Chủ động chào, hỏi tên bạn', 'Đứng im đợi', 'Chạy đi chỗ khác', 'Lè lưỡi với bạn'], 0, 'Chủ động chào và hỏi tên bạn.'),
    Q('Khi bạn buồn, em nên?', ['Hỏi han, an ủi bạn', 'Trêu chọc', 'Quay đi', 'Cười nhạo'], 0, 'Hỏi han và an ủi bạn.'),
    Q('Khi giận bạn, em nên?', ['Nói rõ điều em không thích', 'Đánh bạn', 'Mách cô vô cớ', 'Bỏ chơi mãi'], 0, 'Nói rõ điều em không hài lòng.'),
    Q('Một người bạn tốt là?', ['Biết chia sẻ và lắng nghe', 'Hay đòi đồ của mình', 'Hay nói xấu mình', 'Hay đánh mình'], 0, 'Bạn tốt biết chia sẻ và lắng nghe.'),
  ]),

  M(4, 'Em là học sinh lớp 1', [
    Q('Hằng ngày, học sinh lớp 1 cần?', ['Đi học đúng giờ, mặc đồng phục', 'Đi học khi nào thích', 'Mặc đồ ngủ', 'Mang đồ chơi đi học'], 0, 'Đi học đúng giờ, mặc đồng phục.'),
    Q('Trong lớp, em phải?', ['Lắng nghe, giơ tay khi muốn nói', 'Nói chen ngang', 'Đi lại tự do', 'Ngủ'], 0, 'Lắng nghe và giơ tay xin phát biểu.'),
    Q('Khi muốn ra ngoài, em?', ['Giơ tay xin phép cô', 'Đi ra luôn', 'Trốn ra', 'Khóc bỏ ra'], 0, 'Phải giơ tay xin phép cô giáo.'),
    Q('Vào lớp, em đi giày?', ['Để gọn ở giá, đi dép trong lớp (nếu có quy định)', 'Đi giày bẩn lên ghế', 'Cởi vứt giữa lối', 'Mang giày vào tủ bạn'], 0, 'Cất giày gọn theo quy định.'),
  ]),

  M(5, 'Em đeo cặp đúng cách', [
    Q('Cặp sách em đeo?', ['Hai quai vai cho cân', 'Một quai', 'Cầm ngược', 'Đội lên đầu'], 0, 'Đeo hai quai để lưng không lệch.'),
    Q('Cặp KHÔNG nên?', ['Nhồi quá nặng, lệch một bên', 'Có đủ sách hôm nay', 'Sắp gọn vở', 'Buộc dây gọn'], 0, 'Không nhồi nhét quá nặng.'),
    Q('Đầu giờ em sắp sách vở?', ['Theo thời khoá biểu', 'Theo ý thích', 'Toàn truyện tranh', 'Toàn đồ chơi'], 0, 'Sắp theo thời khoá biểu để khỏi quên.'),
    Q('Khi cặp hỏng quai, em?', ['Nhờ bố mẹ sửa hoặc đổi', 'Vẫn đeo lệch', 'Vứt cặp đi', 'Đổ lỗi cho cô'], 0, 'Nhờ bố mẹ sửa hoặc đổi để đeo đúng.'),
  ]),

  M(6, 'Tự phục vụ – đánh răng, rửa mặt', [
    Q('Một ngày em đánh răng?', ['Ít nhất 2 lần (sáng và tối)', '1 lần/tuần', 'Không cần', 'Khi đau răng mới đánh'], 0, 'Sáng – tối, ít nhất 2 lần/ngày.'),
    Q('Khi đánh răng, em chải?', ['Cả mặt ngoài, trong và mặt nhai', 'Chỉ mặt ngoài', 'Đầu lưỡi', 'Lợi đến chảy máu'], 0, 'Chải đủ ba mặt: ngoài, trong, mặt nhai.'),
    Q('Sau khi đánh răng em?', ['Súc miệng nhiều lần với nước sạch', 'Để bọt trên răng', 'Uống kem đánh răng', 'Đi ngủ luôn'], 0, 'Súc miệng nhiều lần với nước sạch.'),
    Q('Rửa mặt em dùng?', ['Khăn riêng, nước sạch', 'Khăn của người khác', 'Áo của mình', 'Nước bẩn'], 0, 'Dùng khăn riêng và nước sạch.'),
  ]),

  M(7, 'Tự phục vụ – mặc quần áo, gấp đồ', [
    Q('Gấp áo em làm?', ['Gấp tay áo vào, rồi gấp đôi thân', 'Vò áo lại', 'Vắt lên ghế', 'Vứt xuống sàn'], 0, 'Gấp tay áo trước, rồi gấp đôi thân.'),
    Q('Quần áo bẩn em?', ['Bỏ vào giỏ đồ bẩn', 'Vứt sàn', 'Cất chung đồ sạch', 'Đem ra cửa sổ'], 0, 'Bỏ giỏ đồ bẩn để giặt.'),
    Q('Khi áo bị tuột cúc, em?', ['Nhờ người lớn khâu lại', 'Bỏ áo đi', 'Cứ mặc vậy mãi', 'Cắt áo'], 0, 'Nhờ người lớn khâu lại.'),
    Q('Tự mặc đồ giúp em?', ['Tự lập, không phiền mẹ', 'Phụ thuộc mẹ', 'Mất thời gian vô ích', 'Ốm nhanh'], 0, 'Tự mặc đồ giúp em tự lập.'),
  ]),

  M(8, 'Giữ gìn lớp học sạch đẹp', [
    Q('Khi ăn xong em vứt rác?', ['Vào thùng rác', 'Dưới bàn', 'Sau lưng', 'Ngoài cửa sổ'], 0, 'Vứt vào thùng rác.'),
    Q('Khi thấy giấy rơi ở lớp em?', ['Nhặt bỏ vào thùng rác', 'Bước qua', 'Đá đi chỗ khác', 'Bảo bạn nhặt'], 0, 'Tự giác nhặt cho lớp sạch.'),
    Q('Bàn ghế trong lớp em nên?', ['Ngồi ngay ngắn, không khắc vẽ', 'Khắc tên', 'Vẽ bậy', 'Bóc keo'], 0, 'Không khắc, không vẽ bậy.'),
    Q('Sau giờ học em?', ['Sắp ghế gọn, lau bảng nếu được phân công', 'Chạy ra cổng luôn', 'Vứt sách trên bàn', 'Bỏ rác trong ngăn bàn'], 0, 'Sắp ghế gọn, hoàn thành phần việc.'),
  ]),

  M(9, 'Em làm việc nhà', [
    Q('Việc nhà phù hợp lớp 1?', ['Gấp quần áo, dọn bàn ăn', 'Bê tủ lạnh', 'Đun bếp ga một mình', 'Sửa điện'], 0, 'Việc nhẹ nhàng, an toàn.'),
    Q('Trước khi ăn, em có thể giúp?', ['Bày bát đũa', 'Bê nồi nước sôi', 'Dùng dao thái thịt', 'Mở bếp ga'], 0, 'Bày bát đũa là việc vừa sức và an toàn.'),
    Q('Khi giúp việc nhà em cảm thấy?', ['Vui vì giúp được bố mẹ', 'Buồn', 'Sợ', 'Ghét bố mẹ'], 0, 'Vui vì đã giúp được bố mẹ.'),
    Q('Khi không biết làm, em?', ['Hỏi bố mẹ cách làm', 'Làm bừa', 'Trốn đi chơi', 'Khóc'], 0, 'Hỏi bố mẹ cách làm cho đúng.'),
  ]),

  M(10, 'Yêu thương ông bà cha mẹ', [
    Q('Khi ông bà ốm, em?', ['Hỏi thăm và lấy nước', 'Quát to', 'Mở loa nhạc lớn', 'Mặc kệ'], 0, 'Hỏi thăm và lấy nước cho ông bà.'),
    Q('Đi học về em chào?', ['Ông bà, bố mẹ', 'Không chào ai', 'Chỉ chào bạn', 'Chỉ chào tivi'], 0, 'Chào ông bà, bố mẹ khi về.'),
    Q('Khi bố mẹ đi làm về mệt, em?', ['Lấy nước, hỏi han', 'Đòi mua đồ chơi', 'Khóc nhõng nhẽo', 'Bật tivi to'], 0, 'Lấy nước, hỏi han bố mẹ.'),
    Q('Em thể hiện yêu thương bằng?', ['Lời nói, việc làm nhỏ hằng ngày', 'Chỉ khi mua đồ', 'Chỉ ngày lễ', 'Không cần thể hiện'], 0, 'Yêu thương qua lời nói và việc làm nhỏ hằng ngày.'),
  ]),

  M(11, 'An toàn khi đi học', [
    Q('Đi học em đi bên?', ['Phải lề đường, trên vỉa hè', 'Giữa đường', 'Bên trái', 'Trong làn ô tô'], 0, 'Đi vỉa hè bên phải, an toàn.'),
    Q('Khi qua đường em?', ['Nhìn trái-phải, đi vạch cho người đi bộ', 'Lao qua nhanh', 'Đi giữa làn xe', 'Nhắm mắt qua'], 0, 'Quan sát và đi đúng vạch cho người đi bộ.'),
    Q('Nếu bị người lạ rủ đi, em?', ['Từ chối và chạy về gặp người tin cậy', 'Đi theo', 'Nhận quà', 'Lên xe người lạ'], 0, 'Từ chối, tìm người lớn tin cậy.'),
    Q('Khi đi xe máy với bố mẹ em?', ['Đội mũ bảo hiểm', 'Đứng trên yên', 'Đứng giữa xe', 'Cởi mũ cho mát'], 0, 'Phải đội mũ bảo hiểm.'),
  ]),

  M(12, 'An toàn khi ở nhà', [
    Q('Em KHÔNG được chơi với?', ['Ổ điện, lửa, dao kéo', 'Sách vở', 'Búp bê', 'Lego'], 0, 'Ổ điện, lửa, dao kéo rất nguy hiểm.'),
    Q('Khi mở cửa cho khách lạ, em?', ['Không tự mở, gọi người lớn', 'Mở ngay', 'Cho khách vào nhà', 'Đưa khách lên phòng'], 0, 'Không tự mở cho người lạ; gọi người lớn.'),
    Q('Khi bị bỏng nhẹ, em?', ['Báo người lớn, ngâm vùng bỏng vào nước mát sạch', 'Bôi kem đánh răng', 'Bôi mỡ', 'Giấu đi'], 0, 'Ngâm nước mát sạch và báo người lớn.'),
    Q('Số điện thoại cứu hoả ở Việt Nam là?', ['114', '113', '115', '116'], 0, '114 là cứu hoả; 113 cảnh sát; 115 y tế.'),
  ]),

  M(13, 'Lễ hội mùa thu – Tết Trung thu', [
    Q('Tết Trung thu vào?', ['Rằm tháng 8 âm lịch', 'Rằm tháng 7', 'Rằm tháng 1', 'Rằm tháng 12'], 0, 'Trung thu là Rằm tháng 8 âm lịch.'),
    Q('Bánh đặc trưng Trung thu?', ['Bánh nướng, bánh dẻo', 'Bánh chưng', 'Bánh mì', 'Bánh tét'], 0, 'Trung thu có bánh nướng, bánh dẻo.'),
    Q('Đèn Trung thu hay có hình?', ['Ông sao, cá chép', 'Hộp giấy đen', 'Tròn trơn không hình', 'Hình vuông to'], 0, 'Đèn ông sao, đèn cá chép quen thuộc.'),
    Q('Trung thu trẻ em làm gì?', ['Phá cỗ, rước đèn', 'Đi học cả ngày', 'Đi làm', 'Tự ở nhà'], 0, 'Trẻ em phá cỗ, rước đèn.'),
  ]),

  M(14, 'Em yêu trường em', [
    Q('Trong trường em có?', ['Lớp học, sân chơi, thư viện', 'Chợ và quán phở', 'Bến xe', 'Nhà máy'], 0, 'Trong trường có lớp học, sân chơi, thư viện.'),
    Q('Người làm việc ở trường gồm?', ['Cô/thầy, bác bảo vệ, cô lao công', 'Bác sĩ và y tá', 'Công an', 'Lính cứu hoả'], 0, 'Cô thầy, bác bảo vệ, cô lao công…'),
    Q('Gặp bác bảo vệ em?', ['Chào lễ phép', 'Quay đi', 'Không chào', 'Trêu bác'], 0, 'Chào lễ phép.'),
    Q('Em giữ gìn trường lớp bằng?', ['Không vẽ bậy, vứt rác đúng chỗ', 'Vẽ bậy lên tường', 'Bẻ cây', 'Đập kính'], 0, 'Không vẽ bậy, vứt rác đúng chỗ.'),
  ]),

  M(15, 'Tôn sư trọng đạo – 20/11', [
    Q('Ngày Nhà giáo Việt Nam là?', ['20/11', '20/10', '8/3', '1/6'], 0, '20/11 là Ngày Nhà giáo Việt Nam.'),
    Q('Để cảm ơn cô giáo em có thể?', ['Vẽ một tấm thiệp', 'Đập bàn', 'Trêu cô', 'Không nói gì'], 0, 'Vẽ thiệp tặng cô là việc dễ thương.'),
    Q('Trong giờ học em thể hiện kính trọng bằng?', ['Lắng nghe, làm bài đầy đủ', 'Nói chuyện riêng', 'Ngủ', 'Bỏ học'], 0, 'Lắng nghe và làm bài là cách kính trọng cô.'),
    Q('Gặp cô ngoài đường em?', ['Chào lễ phép', 'Lờ đi', 'Quay đầu chạy', 'Trêu cô'], 0, 'Chào lễ phép khi gặp cô.'),
  ]),

  M(16, 'Cảnh quan nhà trường', [
    Q('Cây xanh trong trường giúp?', ['Bóng mát, không khí trong lành', 'Mất chỗ chơi', 'Hết oxy', 'Gây bụi'], 0, 'Cây xanh cho bóng mát và không khí trong lành.'),
    Q('Em chăm cây bằng?', ['Tưới nước, không bẻ cành', 'Bẻ cành', 'Khắc tên lên thân', 'Vặt lá'], 0, 'Tưới nước, không phá hoại cây.'),
    Q('Khi thấy bạn vứt rác bừa, em?', ['Nhắc bạn nhặt bỏ thùng rác', 'Cười theo', 'Vứt thêm', 'Mặc kệ'], 0, 'Nhắc bạn bỏ rác đúng chỗ.'),
    Q('Trường đẹp giúp em?', ['Học tập vui hơn', 'Mệt mỏi', 'Sợ đến trường', 'Bỏ học'], 0, 'Trường đẹp giúp việc học vui hơn.'),
  ]),

  M(17, 'Em thi đua học tập', [
    Q('Khi cô giao bài, em?', ['Cố gắng làm hết, ngay ngắn', 'Bỏ qua', 'Chép bài bạn', 'Cười'], 0, 'Cố gắng làm hết bài và viết ngay ngắn.'),
    Q('Khi không hiểu bài, em?', ['Hỏi cô hoặc bạn', 'Bỏ qua', 'Khóc', 'Bỏ học'], 0, 'Hỏi cô hoặc bạn để hiểu.'),
    Q('Bạn được điểm cao, em?', ['Chúc mừng và học hỏi', 'Ghen tị', 'Trêu chọc', 'Cãi bạn'], 0, 'Chúc mừng và học hỏi từ bạn.'),
    Q('Học tập tốt mang lại?', ['Niềm vui, tự tin', 'Mệt mỏi vô ích', 'Bị bạn ghét', 'Tự ti'], 0, 'Học tốt giúp em vui và tự tin.'),
  ]),

  M(18, 'Tổng kết HK1', [
    Q('Kết thúc HK1 em đã?', ['Trưởng thành hơn', 'Không thay đổi', 'Yếu hơn', 'Quên hết'], 0, 'Em đã trưởng thành hơn so với đầu năm.'),
    Q('Khi nhận xét cuối kì, em nên?', ['Bình tĩnh lắng nghe', 'Khóc', 'Tránh đi', 'Cãi cô'], 0, 'Bình tĩnh lắng nghe để tiến bộ.'),
    Q('Việc gì em làm tốt nhất HK1?', ['Tự mình ghi nhớ và chia sẻ', 'Không có gì tốt', 'Phải hỏi mẹ', 'Bỏ qua câu này'], 0, 'Tự nhớ điều mình làm tốt để tự hào.'),
    Q('HK2 em sẽ?', ['Cố gắng hơn nữa', 'Lười hơn', 'Bỏ học', 'Chán nản'], 0, 'Sang HK2 cố gắng hơn nữa.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Chào HK2 – Mục tiêu của em', [
    Q('Đầu HK2 em nên?', ['Đặt mục tiêu nhỏ cho mình', 'Quên hết HK1', 'Bỏ học', 'Khóc'], 0, 'Đặt mục tiêu nhỏ để cố gắng.'),
    Q('Mục tiêu phù hợp lớp 1?', ['Viết đẹp hơn, đọc trôi chảy hơn', 'Học giỏi nhất nước', 'Không cần mục tiêu', 'Mua đồ chơi mới'], 0, 'Mục tiêu vừa sức và rõ ràng.'),
    Q('Để đạt mục tiêu em cần?', ['Cố gắng mỗi ngày', 'Đợi may mắn', 'Sao chép bạn', 'Đổ lỗi'], 0, 'Mỗi ngày một chút sẽ đạt được.'),
    Q('Khi gặp khó khăn em?', ['Nhờ cô, bố mẹ giúp', 'Bỏ cuộc', 'Khóc', 'Trách bạn'], 0, 'Nhờ người lớn giúp đỡ.'),
  ]),

  M(20, 'Đón Tết cùng gia đình', [
    Q('Tết Nguyên đán vào?', ['Mùng 1 tháng Giêng âm lịch', 'Ngày 1/1 dương lịch', 'Rằm tháng Tám', 'Rằm tháng Bảy'], 0, 'Mùng 1 tháng Giêng âm lịch.'),
    Q('Trước Tết em giúp?', ['Dọn dẹp, lau bàn ghế', 'Vứt rác khắp nhà', 'Ngồi xem tivi suốt', 'Cãi nhau với em'], 0, 'Cùng giúp dọn nhà đón Tết.'),
    Q('Mâm cỗ ngày Tết miền Bắc thường có?', ['Bánh chưng', 'Bánh mì', 'Pizza', 'Mì gói'], 0, 'Bánh chưng là món truyền thống.'),
    Q('Khi chúc Tết em nói?', ['Lời chúc lễ phép, vui vẻ', 'Đòi tiền lì xì', 'Im lặng', 'Quay đi'], 0, 'Nói lời chúc lễ phép.'),
  ]),

  M(21, 'Lì xì và lễ phép ngày Tết', [
    Q('Nhận lì xì em?', ['Nhận bằng hai tay, cảm ơn', 'Giật tiền', 'Mở ngay trước mặt khách', 'Đếm tiền chê ít'], 0, 'Nhận hai tay và cảm ơn.'),
    Q('Khi khách đến chơi Tết, em?', ['Chào lễ phép, mời nước', 'Lờ đi', 'Trốn vào phòng', 'Trêu khách'], 0, 'Chào hỏi lễ phép và mời nước.'),
    Q('Số tiền lì xì em làm gì?', ['Đưa bố mẹ giữ giúp', 'Tiêu ngay', 'Mua thật nhiều bánh', 'Giấu kĩ một mình'], 0, 'Đưa bố mẹ giữ giúp.'),
    Q('Lì xì có ý nghĩa?', ['May mắn, lời chúc tốt lành', 'Chỉ là tiền', 'Khoe của', 'So bì'], 0, 'Lì xì mang ý nghĩa may mắn, tốt lành.'),
  ]),

  M(22, 'Trò chơi dân gian ngày Tết', [
    Q('Trò chơi nào KHÔNG phải dân gian?', ['Bịt mắt bắt dê', 'Rồng rắn lên mây', 'Ô ăn quan', 'Trò chơi điện tử'], 3, 'Trò chơi điện tử là hiện đại.'),
    Q('Khi chơi cùng bạn ngày Tết em?', ['Vui vẻ, không hơn thua', 'Đánh nhau ăn thua', 'Gian lận', 'Cãi nhau'], 0, 'Chơi vui vẻ là chính.'),
    Q('Ô ăn quan dùng?', ['Sỏi nhỏ và bàn vẽ trên đất/giấy', 'Bàn cờ vua', 'Quân bài', 'Bóng đá'], 0, 'Ô ăn quan chơi với sỏi và bàn vẽ.'),
    Q('Sau khi chơi, em?', ['Cất gọn đồ, không xả rác', 'Vứt sỏi lung tung', 'Bỏ về', 'Cãi nhau ai thắng'], 0, 'Cất gọn và giữ sân sạch.'),
  ]),

  M(23, 'Mùa xuân và cây xanh', [
    Q('Mùa xuân ở miền Bắc có thời tiết?', ['Mát mẻ, hay mưa phùn', 'Nắng gắt', 'Lạnh tuyết', 'Bão lớn'], 0, 'Miền Bắc mùa xuân mát mẻ, mưa phùn.'),
    Q('Tết trồng cây do ai phát động?', ['Bác Hồ', 'Bố em', 'Bạn em', 'Cô lao công'], 0, 'Bác Hồ phát động Tết trồng cây.'),
    Q('Em chăm cây bằng?', ['Tưới nước, bắt sâu', 'Bẻ cành', 'Bóc vỏ', 'Đốt lá'], 0, 'Tưới nước, bắt sâu cho cây khoẻ.'),
    Q('Trồng cây giúp?', ['Không khí trong lành, bóng mát', 'Mất đất', 'Gây bụi', 'Hết oxy'], 0, 'Cây xanh giúp không khí trong lành.'),
  ]),

  M(24, 'Sinh hoạt cộng đồng – xóm em', [
    Q('Hàng xóm gặp em, em?', ['Chào lễ phép', 'Quay đi', 'Lè lưỡi', 'Không nói gì'], 0, 'Chào hỏi lễ phép.'),
    Q('Trong xóm, em không nên?', ['Mở loa thật to', 'Tham gia dọn vệ sinh', 'Cười nói vừa phải', 'Chào hàng xóm'], 0, 'Không mở loa to làm phiền người khác.'),
    Q('Khi hàng xóm cần giúp đỡ, em?', ['Báo bố mẹ giúp đỡ', 'Mặc kệ', 'Trêu chọc', 'Đóng cửa'], 0, 'Báo bố mẹ để giúp đỡ.'),
    Q('Xóm sạch đẹp nhờ?', ['Mọi người cùng giữ gìn', 'Một mình bác tổ trưởng', 'May mắn', 'Tự nhiên'], 0, 'Tất cả cùng giữ gìn.'),
  ]),

  M(25, 'Quốc tế Phụ nữ 8/3', [
    Q('Ngày 8/3 là ngày?', ['Quốc tế Phụ nữ', 'Quốc tế Thiếu nhi', 'Quốc khánh', 'Nhà giáo Việt Nam'], 0, '8/3 là Quốc tế Phụ nữ.'),
    Q('Em làm gì cho mẹ ngày 8/3?', ['Tặng thiệp, giúp việc nhà', 'Đòi mua quà', 'Khóc nhõng nhẽo', 'Cãi mẹ'], 0, 'Tặng thiệp và giúp việc nhà.'),
    Q('Trong lớp em chúc?', ['Cô giáo và các bạn nữ', 'Chỉ bạn thân', 'Không chúc ai', 'Trêu các bạn nữ'], 0, 'Chúc cô và các bạn nữ.'),
    Q('Lời chúc nên?', ['Chân thành, lịch sự', 'Trêu chọc', 'Bông đùa thô', 'Không có'], 0, 'Chân thành và lịch sự.'),
  ]),

  M(26, 'Em yêu bộ đội – 22/12 / 30/4', [
    Q('Bộ đội bảo vệ?', ['Tổ quốc, nhân dân', 'Chỉ một xóm', 'Chỉ trường em', 'Tự bản thân'], 0, 'Bộ đội bảo vệ Tổ quốc và nhân dân.'),
    Q('Để cảm ơn bộ đội, em?', ['Học giỏi, ngoan ngoãn', 'Đập phá đồ', 'Bỏ học', 'Cãi cô'], 0, 'Học giỏi cũng là cách cảm ơn.'),
    Q('Gặp chú bộ đội ngoài đường em?', ['Chào lễ phép', 'Quay đi', 'Lè lưỡi', 'Sợ hãi bỏ chạy'], 0, 'Chào hỏi lễ phép.'),
    Q('Khi thấy ảnh chú bộ đội canh giữ biển đảo, em cảm thấy?', ['Biết ơn và tự hào', 'Sợ hãi', 'Buồn chán', 'Lạnh nhạt'], 0, 'Cảm thấy biết ơn và tự hào.'),
  ]),

  M(27, 'Em bảo vệ môi trường', [
    Q('Em bỏ rác?', ['Đúng nơi quy định', 'Ra đường', 'Xuống sông', 'Vứt ra cửa sổ'], 0, 'Bỏ rác đúng nơi quy định.'),
    Q('Khi đánh răng em?', ['Hứng nước vào cốc, không xả liên tục', 'Mở vòi cả lúc đánh', 'Xả mạnh nhất', 'Không cần tiết kiệm'], 0, 'Hứng nước vào cốc để tiết kiệm.'),
    Q('Em phân loại rác?', ['Rác tái chế và rác bỏ đi', 'Trộn lẫn cho gọn', 'Đốt tất cả', 'Chôn xuống đất'], 0, 'Phân loại để dễ tái chế.'),
    Q('Em nên dùng?', ['Túi vải, bình nước cá nhân', 'Túi ni-lông mỗi lần', 'Cốc nhựa dùng 1 lần', 'Ống hút nhựa'], 0, 'Túi vải và bình cá nhân thân thiện môi trường.'),
  ]),

  M(28, 'Em yêu thiên nhiên', [
    Q('Khi đi công viên em không nên?', ['Hái hoa, bẻ cành', 'Ngắm hoa', 'Hít thở không khí', 'Chụp ảnh'], 0, 'Không được hái hoa, bẻ cành.'),
    Q('Khi gặp con vật nhỏ, em?', ['Quan sát từ xa, không bắt', 'Bắt về', 'Đánh chết', 'Ném đá'], 0, 'Quan sát từ xa, không gây hại.'),
    Q('Nước em uống nên?', ['Nước sạch đun sôi/để nguội', 'Nước ao', 'Nước mưa lẫn bụi', 'Nước nhiễm bẩn'], 0, 'Nước sạch đun sôi mới an toàn.'),
    Q('Yêu thiên nhiên là?', ['Giữ gìn, không phá hoại', 'Chiếm hữu hoa', 'Đốt rừng', 'Vứt rác xuống suối'], 0, 'Yêu là giữ gìn, không phá hoại.'),
  ]),

  M(29, 'Hành vi ứng xử nơi công cộng', [
    Q('Trên xe buýt em?', ['Nhường ghế người già, em nhỏ', 'Chạy nhảy', 'Ăn vặt bừa', 'Đùa to'], 0, 'Nhường ghế cho người già, em nhỏ.'),
    Q('Trong thư viện em?', ['Giữ im lặng', 'Cười nói to', 'Chạy đùa', 'Đập sách'], 0, 'Thư viện cần giữ im lặng.'),
    Q('Khi xếp hàng em?', ['Xếp trật tự, không chen', 'Chen ngang', 'Đẩy bạn', 'La hét'], 0, 'Xếp trật tự, không chen lấn.'),
    Q('Khi va chạm bạn, em?', ['Xin lỗi nhẹ nhàng', 'Cãi nhau', 'Trừng mắt', 'Bỏ đi'], 0, 'Xin lỗi nhẹ nhàng.'),
  ]),

  M(30, 'Ngày Quốc tế Thiếu nhi 1/6', [
    Q('Ngày 1/6 là?', ['Quốc tế Thiếu nhi', 'Quốc khánh', 'Quốc tế Phụ nữ', 'Nhà giáo Việt Nam'], 0, '1/6 là Quốc tế Thiếu nhi.'),
    Q('Ngày này em được?', ['Tham gia hoạt động vui chơi', 'Đi làm thay bố', 'Ở nhà ngủ cả ngày', 'Bị mắng'], 0, 'Em được tham gia hoạt động vui chơi.'),
    Q('Quyền cơ bản của trẻ em là?', ['Được học, được vui chơi, được bảo vệ', 'Được tự ý nghỉ học', 'Được làm gì cũng được', 'Không có quyền gì'], 0, 'Trẻ em có quyền học, vui chơi, được bảo vệ.'),
    Q('Khi thấy bạn bị bắt nạt, em?', ['Báo cô/thầy/người lớn', 'Cười theo', 'Bỏ chạy', 'Đánh lại bạn xấu'], 0, 'Báo người lớn để bảo vệ bạn.'),
  ]),

  M(31, 'Em làm thẻ giới thiệu bản thân', [
    Q('Thẻ giới thiệu nên có?', ['Tên, lớp, sở thích', 'Số CCCD bố', 'Mật khẩu Wi-Fi', 'Số tài khoản ngân hàng'], 0, 'Tên, lớp, sở thích là phù hợp.'),
    Q('Khi viết thẻ em chữ nên?', ['Rõ ràng, đẹp', 'Cẩu thả', 'Quá nhỏ không đọc được', 'Tô lem nhem'], 0, 'Chữ rõ ràng, sạch đẹp.'),
    Q('Em trang trí thẻ bằng?', ['Hình em yêu thích, màu tươi', 'Bôi đen hết', 'Vẽ bậy', 'Xé góc thẻ'], 0, 'Hình em yêu thích, màu tươi.'),
    Q('Khi giới thiệu thẻ trước lớp em?', ['Tự tin, mỉm cười', 'Cúi gằm', 'Quay lưng', 'Bỏ ra ngoài'], 0, 'Tự tin và mỉm cười.'),
  ]),

  M(32, 'Em tham gia hoạt động lớp', [
    Q('Khi cô chia nhóm, em?', ['Vui vẻ tham gia với bạn', 'Khóc đòi nhóm khác', 'Im lặng không làm', 'Bỏ ra ngoài'], 0, 'Vui vẻ tham gia với bạn.'),
    Q('Khi nhóm cần em làm việc, em?', ['Cố gắng hoàn thành phần của mình', 'Đẩy việc cho bạn', 'Ngồi không', 'Trốn việc'], 0, 'Hoàn thành phần việc của mình.'),
    Q('Khi nhóm cãi nhau, em?', ['Nói chuyện hoà nhã, nhờ cô giúp', 'Hét to nhất', 'Đánh bạn', 'Bỏ đi'], 0, 'Hoà nhã và nhờ cô giúp.'),
    Q('Khi nhóm thắng cuộc, em?', ['Vui và cảm ơn các bạn', 'Khoe khoang', 'Coi thường bạn yếu', 'Im lặng'], 0, 'Vui chung và cảm ơn các bạn.'),
  ]),

  M(33, 'Em yêu nghề – ước mơ của em', [
    Q('Ước mơ của em nên?', ['Là điều em yêu thích', 'Bắt chước bạn', 'Bố mẹ áp đặt', 'Không cần có'], 0, 'Là điều em yêu thích và phù hợp với mình.'),
    Q('Nghề bác sĩ giúp?', ['Chữa bệnh cho mọi người', 'Lái máy bay', 'Bán hàng', 'Sửa xe'], 0, 'Bác sĩ chữa bệnh cứu người.'),
    Q('Nghề giáo viên?', ['Dạy học cho học sinh', 'Trồng lúa', 'Bán đồ', 'Lái tàu'], 0, 'Giáo viên dạy học.'),
    Q('Để đạt ước mơ em cần?', ['Học tập chăm chỉ từ bây giờ', 'Đợi may mắn', 'Bỏ học', 'Lười biếng'], 0, 'Học tập chăm chỉ từ bây giờ.'),
  ]),

  M(34, 'Em chia tay bạn nghỉ hè', [
    Q('Trước nghỉ hè em nên?', ['Tạm biệt cô và bạn lịch sự', 'Im lặng bỏ về', 'Cãi cô', 'Không đến lớp'], 0, 'Tạm biệt lễ phép trước khi nghỉ hè.'),
    Q('Trong hè em không nên?', ['Quên hết kiến thức', 'Đọc truyện', 'Ôn lại bài cũ', 'Đi dã ngoại'], 0, 'Nên duy trì ôn bài để khỏi quên.'),
    Q('Khi đi bơi mùa hè, em?', ['Đi cùng người lớn ở nơi an toàn', 'Tự ra ao sâu', 'Bơi một mình', 'Trốn bố mẹ đi bơi'], 0, 'Phải có người lớn và nơi an toàn.'),
    Q('Khi nắng nóng em?', ['Đội mũ, uống đủ nước', 'Chạy ngoài trưa lâu', 'Nhịn nước', 'Cởi áo phơi nắng'], 0, 'Đội mũ, uống nước đầy đủ.'),
  ]),

  M(35, 'Tổng kết – Em lên Lớp 2', [
    Q('Sau một năm em đã?', ['Trưởng thành, biết tự lập hơn', 'Không thay đổi', 'Yếu đi', 'Quên hết'], 0, 'Em đã lớn hơn và tự lập hơn.'),
    Q('Lên Lớp 2 em sẽ?', ['Tự tin và cố gắng hơn', 'Bỏ học', 'Lười hơn', 'Khóc'], 0, 'Tự tin và cố gắng hơn nữa.'),
    Q('Em cảm ơn ai đã đồng hành cùng em?', ['Cô, bố mẹ, bạn bè', 'Không cần cảm ơn ai', 'Chỉ cảm ơn tivi', 'Chỉ cảm ơn đồ chơi'], 0, 'Cảm ơn cô, bố mẹ, bạn bè đã đồng hành.'),
    Q('Lời chúc em dành cho lớp?', ['Vui vẻ, mạnh khoẻ, học giỏi', 'Không có gì', 'Cãi nhau', 'Quên nhau'], 0, 'Lời chúc tốt đẹp cho cả lớp.'),
  ]),
];

export const P1HDTN_SCENARIOS = indexBy(P1HDTN_WEEKS);
