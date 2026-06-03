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
    Q('Ngày khai giảng em đến trường với tâm trạng?', ['Háo hức, vui vẻ', 'Sợ hãi', 'Buồn ngủ', 'Cáu giận'], 0, 'Ngày khai giảng là ngày vui đầu năm học.'),
    Q('Đến trường ngày khai giảng em mặc?', ['Đồng phục sạch sẽ, gọn gàng', 'Đồ ngủ', 'Đồ chơi ở nhà', 'Đồ thể thao bẩn'], 0, 'Mặc đồng phục sạch, gọn gàng.'),
    Q('Khi cô giáo đọc tên, em?', ['Cười to', 'Đứng dậy “Có ạ!” rõ ràng', 'Bỏ ra ngoài', 'Im lặng'], 1, 'Đứng dậy thưa “Có ạ!” lễ phép.'),
    Q('Khai giảng giúp em cảm thấy?', ['Mình vẫn là em bé', 'Buồn vì xa nhà', 'Mình đã là học sinh, có trách nhiệm', 'Không có gì khác'], 2, 'Em đã là học sinh, cần có trách nhiệm.'),
  ]),

  M(2, 'Giới thiệu bản thân', [
    Q('Câu giới thiệu lễ phép là?', ['Hỏi gì hỏi nhiều', 'Tao tên là…', 'Em chào cô và các bạn, em tên là…', 'Ờ thì…'], 2, 'Có lời chào, rồi nói tên.'),
    Q('Giọng nói khi giới thiệu nên?', ['Cười nhăn nhở', 'Rõ ràng, đủ nghe', 'Lí nhí', 'Quát to'], 1, 'Giọng rõ ràng, đủ nghe.'),
    Q('Thông tin KHÔNG nên kể trước lớp?', ['Mật khẩu điện thoại bố mẹ', 'Tên lớp', 'Sở thích', 'Tên em'], 0, 'Thông tin riêng tư không kể cho ai.'),
    Q('Khi bạn giới thiệu, em nên?', ['Nói chuyện riêng', 'Lắng nghe, vỗ tay khi bạn xong', 'Trêu bạn', 'Quay lưng'], 1, 'Lắng nghe để tôn trọng bạn.'),
  ]),

  M(3, 'Làm quen bạn mới', [
    Q('Để làm quen bạn, em?', ['Chạy đi chỗ khác', 'Đứng im đợi', 'Chủ động chào, hỏi tên bạn', 'Lè lưỡi với bạn'], 2, 'Chủ động chào và hỏi tên bạn.'),
    Q('Khi bạn buồn, em nên?', ['Cười nhạo', 'Hỏi han, an ủi bạn', 'Trêu chọc', 'Quay đi'], 1, 'Hỏi han và an ủi bạn.'),
    Q('Khi giận bạn, em nên?', ['Đánh bạn', 'Mách cô vô cớ', 'Nói rõ điều em không thích', 'Bỏ chơi mãi'], 2, 'Nói rõ điều em không hài lòng.'),
    Q('Một người bạn tốt là?', ['Hay nói xấu mình', 'Hay đòi đồ của mình', 'Hay đánh mình', 'Biết chia sẻ và lắng nghe'], 3, 'Bạn tốt biết chia sẻ và lắng nghe.'),
  ]),

  M(4, 'Em là học sinh lớp 1', [
    Q('Hằng ngày, học sinh lớp 1 cần?', ['Đi học khi nào thích', 'Mặc đồ ngủ', 'Đi học đúng giờ, mặc đồng phục', 'Mang đồ chơi đi học'], 2, 'Đi học đúng giờ, mặc đồng phục.'),
    Q('Trong lớp, em phải?', ['Vẽ bậy ra vở bạn bên cạnh', 'Nói chen ngang', 'Đi lại tự do', 'Lắng nghe, giơ tay khi muốn nói'], 3, 'Lắng nghe và giơ tay xin phát biểu.'),
    Q('Khi muốn ra ngoài, em?', ['Đi ra luôn', 'Giơ tay xin phép cô', 'Trốn ra', 'Khóc bỏ ra'], 1, 'Phải giơ tay xin phép cô giáo.'),
    Q('Vào lớp, em đi giày?', ['Để gọn ở giá, đi dép trong lớp (nếu có quy định)', 'Đi giày bẩn lên ghế', 'Cởi vứt giữa lối', 'Mang giày vào tủ bạn'], 0, 'Cất giày gọn theo quy định.'),
  ]),

  M(5, 'Em đeo cặp đúng cách', [
    Q('Cặp sách em đeo?', ['Một quai', 'Đội lên đầu', 'Cầm ngược', 'Hai quai vai cho cân'], 3, 'Đeo hai quai để lưng không lệch.'),
    Q('Cặp KHÔNG nên?', ['Buộc dây gọn', 'Nhồi quá nặng, lệch một bên', 'Có đủ sách hôm nay', 'Sắp gọn vở'], 1, 'Không nhồi nhét quá nặng.'),
    Q('Đầu giờ em sắp sách vở?', ['Theo ý thích', 'Toàn đồ chơi', 'Theo thời khoá biểu', 'Toàn truyện tranh'], 2, 'Sắp theo thời khoá biểu để khỏi quên.'),
    Q('Khi cặp hỏng quai, em?', ['Đổ lỗi cho cô', 'Vẫn đeo lệch', 'Vứt cặp đi', 'Nhờ bố mẹ sửa hoặc đổi'], 3, 'Nhờ bố mẹ sửa hoặc đổi để đeo đúng.'),
  ]),

  M(6, 'Tự phục vụ – đánh răng, rửa mặt', [
    Q('Một ngày em đánh răng?', ['Ít nhất 2 lần (sáng và tối)', '1 lần/tuần', 'Khi đau răng mới đánh', 'Không cần'], 0, 'Sáng – tối, ít nhất 2 lần/ngày.'),
    Q('Khi đánh răng, em chải?', ['Cả mặt ngoài, trong và mặt nhai', 'Lợi đến chảy máu', 'Chỉ mặt ngoài', 'Đầu lưỡi'], 0, 'Chải đủ ba mặt: ngoài, trong, mặt nhai.'),
    Q('Sau khi đánh răng em?', ['Để bọt trên răng', 'Uống kem đánh răng', 'Đi ngủ luôn', 'Súc miệng nhiều lần với nước sạch'], 3, 'Súc miệng nhiều lần với nước sạch.'),
    Q('Rửa mặt em dùng?', ['Nước bẩn', 'Áo của mình', 'Khăn riêng, nước sạch', 'Khăn của người khác'], 2, 'Dùng khăn riêng và nước sạch.'),
  ]),

  M(7, 'Tự phục vụ – mặc quần áo, gấp đồ', [
    Q('Gấp áo em làm?', ['Vò áo lại', 'Vứt xuống sàn', 'Vắt lên ghế', 'Gấp tay áo vào, rồi gấp đôi thân'], 3, 'Gấp tay áo trước, rồi gấp đôi thân.'),
    Q('Quần áo bẩn em?', ['Vứt sàn', 'Bỏ vào giỏ đồ bẩn', 'Đem ra cửa sổ', 'Cất chung đồ sạch'], 1, 'Bỏ giỏ đồ bẩn để giặt.'),
    Q('Khi áo bị tuột cúc, em?', ['Bỏ áo đi', 'Nhờ người lớn khâu lại', 'Cứ mặc vậy mãi', 'Cắt áo'], 1, 'Nhờ người lớn khâu lại.'),
    Q('Tự mặc đồ giúp em?', ['Tự lập, không phiền mẹ', 'Phụ thuộc mẹ', 'Mất thời gian vô ích', 'Ốm nhanh'], 0, 'Tự mặc đồ giúp em tự lập.'),
  ]),

  M(8, 'Giữ gìn lớp học sạch đẹp', [
    Q('Khi ăn xong em vứt rác?', ['Sau lưng', 'Ngoài cửa sổ', 'Dưới bàn', 'Vào thùng rác'], 3, 'Vứt vào thùng rác.'),
    Q('Khi thấy giấy rơi ở lớp em?', ['Nhặt bỏ vào thùng rác', 'Bảo bạn nhặt', 'Đá đi chỗ khác', 'Bước qua'], 0, 'Tự giác nhặt cho lớp sạch.'),
    Q('Bàn ghế trong lớp em nên?', ['Bóc keo', 'Ngồi ngay ngắn, không khắc vẽ', 'Vẽ bậy', 'Khắc tên'], 1, 'Không khắc, không vẽ bậy.'),
    Q('Sau giờ học em?', ['Bỏ rác trong ngăn bàn', 'Vứt sách trên bàn', 'Sắp ghế gọn, lau bảng nếu được phân công', 'Chạy ra cổng luôn'], 2, 'Sắp ghế gọn, hoàn thành phần việc.'),
  ]),

  M(9, 'Em làm việc nhà', [
    Q('Việc nhà phù hợp lớp 1?', ['Đun bếp ga một mình', 'Sửa điện', 'Bê tủ lạnh', 'Gấp quần áo, dọn bàn ăn'], 3, 'Việc nhẹ nhàng, an toàn.'),
    Q('Trước khi ăn, em có thể giúp?', ['Bê nồi nước sôi', 'Dùng dao thái thịt', 'Bày bát đũa', 'Mở bếp ga'], 2, 'Bày bát đũa là việc vừa sức và an toàn.'),
    Q('Khi giúp việc nhà em cảm thấy?', ['Ghét bố mẹ', 'Mệt nên không muốn làm nữa', 'Vui vì giúp được bố mẹ', 'Đòi bố mẹ thưởng tiền mới làm'], 2, 'Vui vì đã giúp được bố mẹ.'),
    Q('Khi không biết làm, em?', ['Làm bừa', 'Trốn đi chơi', 'Tự đoán rồi làm theo ý mình', 'Hỏi bố mẹ cách làm'], 3, 'Hỏi bố mẹ cách làm cho đúng.'),
  ]),

  M(10, 'Yêu thương ông bà cha mẹ', [
    Q('Khi ông bà ốm, em?', ['Hỏi thăm và lấy nước', 'Mặc kệ', 'Quát to', 'Mở loa nhạc lớn'], 0, 'Hỏi thăm và lấy nước cho ông bà.'),
    Q('Đi học về em chào?', ['Chỉ chào bạn', 'Ông bà, bố mẹ', 'Chỉ chào tivi', 'Không chào ai'], 1, 'Chào ông bà, bố mẹ khi về.'),
    Q('Khi bố mẹ đi làm về mệt, em?', ['Đòi mua đồ chơi', 'Bật tivi to', 'Khóc nhõng nhẽo', 'Lấy nước, hỏi han'], 3, 'Lấy nước, hỏi han bố mẹ.'),
    Q('Em thể hiện yêu thương bằng?', ['Chỉ khi mua đồ', 'Chỉ ngày lễ', 'Không cần thể hiện', 'Lời nói, việc làm nhỏ hằng ngày'], 3, 'Yêu thương qua lời nói và việc làm nhỏ hằng ngày.'),
  ]),

  M(11, 'An toàn khi đi học', [
    Q('Đi học em đi bên?', ['Phải lề đường, trên vỉa hè', 'Bên trái', 'Trong làn ô tô', 'Giữa đường'], 0, 'Đi vỉa hè bên phải, an toàn.'),
    Q('Khi qua đường em?', ['Lao qua nhanh', 'Đi giữa làn xe', 'Nhắm mắt qua', 'Nhìn trái-phải, đi vạch cho người đi bộ'], 3, 'Quan sát và đi đúng vạch cho người đi bộ.'),
    Q('Nếu bị người lạ rủ đi, em?', ['Lên xe người lạ', 'Từ chối và chạy về gặp người tin cậy', 'Nhận quà', 'Đi theo'], 1, 'Từ chối, tìm người lớn tin cậy.'),
    Q('Khi đi xe máy với bố mẹ em?', ['Đứng trên yên', 'Đứng giữa xe', 'Cởi mũ cho mát', 'Đội mũ bảo hiểm'], 3, 'Phải đội mũ bảo hiểm.'),
  ]),

  M(12, 'An toàn khi ở nhà', [
    Q('Em KHÔNG được chơi với?', ['Búp bê', 'Sách vở', 'Ổ điện, lửa, dao kéo', 'Diêm và bật lửa trong bếp'], 2, 'Ổ điện, lửa, dao kéo rất nguy hiểm.'),
    Q('Khi mở cửa cho khách lạ, em?', ['Đưa khách lên phòng', 'Cho khách vào nhà', 'Mở ngay', 'Không tự mở, gọi người lớn'], 3, 'Không tự mở cho người lạ; gọi người lớn.'),
    Q('Khi bị bỏng nhẹ, em?', ['Giấu đi', 'Báo người lớn, ngâm vùng bỏng vào nước mát sạch', 'Bôi kem đánh răng', 'Bôi mỡ'], 1, 'Ngâm nước mát sạch và báo người lớn.'),
    Q('Số điện thoại cứu hoả ở Việt Nam là?', ['115', '113', '114', '116'], 2, '114 là cứu hoả; 113 cảnh sát; 115 y tế.'),
  ]),

  M(13, 'Lễ hội mùa thu – Tết Trung thu', [
    Q('Tết Trung thu vào?', ['Rằm tháng 8 âm lịch', 'Rằm tháng 7', 'Rằm tháng 12', 'Rằm tháng 1'], 0, 'Trung thu là Rằm tháng 8 âm lịch.'),
    Q('Bánh đặc trưng Trung thu?', ['Bánh chưng', 'Bánh nướng, bánh dẻo', 'Bánh mì', 'Bánh tét'], 1, 'Trung thu có bánh nướng, bánh dẻo.'),
    Q('Đèn Trung thu hay có hình?', ['Tròn trơn không hình', 'Ông sao, cá chép', 'Hộp giấy đen', 'Hình vuông to'], 1, 'Đèn ông sao, đèn cá chép quen thuộc.'),
    Q('Trung thu trẻ em làm gì?', ['Đi làm', 'Đi học cả ngày', 'Tự ở nhà', 'Phá cỗ, rước đèn'], 3, 'Trẻ em phá cỗ, rước đèn.'),
  ]),

  M(14, 'Em yêu trường em', [
    Q('Trong trường em có?', ['Bến xe', 'Nhà máy', 'Lớp học, sân chơi, thư viện', 'Chợ và quán phở'], 2, 'Trong trường có lớp học, sân chơi, thư viện.'),
    Q('Người làm việc ở trường gồm?', ['Công an', 'Lính cứu hoả', 'Cô/thầy, bác bảo vệ, cô lao công', 'Bác sĩ và y tá'], 2, 'Cô thầy, bác bảo vệ, cô lao công…'),
    Q('Gặp bác bảo vệ em?', ['Trêu bác', 'Quay đi', 'Chào lễ phép', 'Không chào'], 2, 'Chào lễ phép.'),
    Q('Em giữ gìn trường lớp bằng?', ['Không vẽ bậy, vứt rác đúng chỗ', 'Bẻ cây', 'Vẽ bậy lên tường', 'Đập kính'], 0, 'Không vẽ bậy, vứt rác đúng chỗ.'),
  ]),

  M(15, 'Tôn sư trọng đạo – 20/11', [
    Q('Ngày Nhà giáo Việt Nam là?', ['1/6', '8/3', '20/11', '20/10'], 2, '20/11 là Ngày Nhà giáo Việt Nam.'),
    Q('Để cảm ơn cô giáo em có thể?', ['Trêu cô', 'Không nói gì', 'Vẽ một tấm thiệp', 'Đập bàn'], 2, 'Vẽ thiệp tặng cô là việc dễ thương.'),
    Q('Trong giờ học em thể hiện kính trọng bằng?', ['Bỏ học', 'Nói chuyện riêng', 'Lắng nghe, làm bài đầy đủ', 'Chỉ chào cô khi có điểm tốt'], 2, 'Lắng nghe và làm bài là cách kính trọng cô.'),
    Q('Gặp cô ngoài đường em?', ['Quay đầu chạy', 'Trêu cô', 'Chào lễ phép', 'Đợi cô chào trước em mới chào'], 2, 'Chào lễ phép khi gặp cô.'),
  ]),

  M(16, 'Cảnh quan nhà trường', [
    Q('Cây xanh trong trường giúp?', ['Mất chỗ chơi', 'Hết oxy', 'Gây bụi', 'Bóng mát, không khí trong lành'], 3, 'Cây xanh cho bóng mát và không khí trong lành.'),
    Q('Em chăm cây bằng?', ['Vặt lá', 'Tưới nước, không bẻ cành', 'Khắc tên lên thân', 'Bẻ cành'], 1, 'Tưới nước, không phá hoại cây.'),
    Q('Khi thấy bạn vứt rác bừa, em?', ['Nhắc bạn nhặt bỏ thùng rác', 'Cười theo', 'Mặc kệ', 'Vứt thêm'], 0, 'Nhắc bạn bỏ rác đúng chỗ.'),
    Q('Trường đẹp giúp em?', ['Bỏ học', 'Mệt mỏi', 'Học tập vui hơn', 'Sợ đến trường'], 2, 'Trường đẹp giúp việc học vui hơn.'),
  ]),

  M(17, 'Em thi đua học tập', [
    Q('Khi cô giao bài, em?', ['Chép bài bạn', 'Chỉ làm những câu em thấy dễ', 'Bỏ qua', 'Cố gắng làm hết, ngay ngắn'], 3, 'Cố gắng làm hết bài và viết ngay ngắn.'),
    Q('Khi không hiểu bài, em?', ['Bỏ học', 'Đoán đại một đáp án rồi ghi vào', 'Bỏ qua', 'Hỏi cô hoặc bạn'], 3, 'Hỏi cô hoặc bạn để hiểu.'),
    Q('Bạn được điểm cao, em?', ['Trêu chọc', 'Ghen tị', 'Chúc mừng và học hỏi', 'Cãi bạn'], 2, 'Chúc mừng và học hỏi từ bạn.'),
    Q('Học tập tốt mang lại?', ['Bị bạn ghét', 'Mệt mỏi vô ích', 'Phải học thêm rất nhiều ca tối', 'Niềm vui, tự tin'], 3, 'Học tốt giúp em vui và tự tin.'),
  ]),

  M(18, 'Tổng kết HK1', [
    Q('Kết thúc HK1 em đã?', ['Yếu hơn', 'Quên hết', 'Không thay đổi', 'Trưởng thành hơn'], 3, 'Em đã trưởng thành hơn so với đầu năm.'),
    Q('Khi nhận xét cuối kì, em nên?', ['Cãi cô', 'Bình tĩnh lắng nghe', 'Chỉ nhớ phần khen, quên phần nhắc nhở', 'Tránh đi'], 1, 'Bình tĩnh lắng nghe để tiến bộ.'),
    Q('Việc gì em làm tốt nhất HK1?', ['Tự mình ghi nhớ và chia sẻ', 'Không có gì tốt', 'Phải hỏi mẹ', 'Bỏ qua câu này'], 0, 'Tự nhớ điều mình làm tốt để tự hào.'),
    Q('HK2 em sẽ?', ['Chán nản', 'Lười hơn', 'Cố gắng hơn nữa', 'Bỏ học'], 2, 'Sang HK2 cố gắng hơn nữa.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Chào HK2 – Mục tiêu của em', [
    Q('Đầu HK2 em nên?', ['Đặt mục tiêu nhỏ cho mình', 'Bỏ học', 'Quên hết HK1', 'Đợi đến giữa kì mới bắt đầu học'], 0, 'Đặt mục tiêu nhỏ để cố gắng.'),
    Q('Mục tiêu phù hợp lớp 1?', ['Học giỏi nhất nước', 'Mua đồ chơi mới', 'Viết đẹp hơn, đọc trôi chảy hơn', 'Không cần mục tiêu'], 2, 'Mục tiêu vừa sức và rõ ràng.'),
    Q('Để đạt mục tiêu em cần?', ['Cố gắng mỗi ngày', 'Đổ lỗi', 'Sao chép bạn', 'Đợi may mắn'], 0, 'Mỗi ngày một chút sẽ đạt được.'),
    Q('Khi gặp khó khăn em?', ['Nhờ cô, bố mẹ giúp', 'Giấu không cho ai biết là mình khó', 'Trách bạn', 'Bỏ cuộc'], 0, 'Nhờ người lớn giúp đỡ.'),
  ]),

  M(20, 'Đón Tết cùng gia đình', [
    Q('Tết Nguyên đán vào?', ['Ngày 1/1 dương lịch', 'Rằm tháng Tám', 'Rằm tháng Bảy', 'Mùng 1 tháng Giêng âm lịch'], 3, 'Mùng 1 tháng Giêng âm lịch.'),
    Q('Trước Tết em giúp?', ['Cãi nhau với em', 'Vứt rác khắp nhà', 'Ngồi xem tivi suốt', 'Dọn dẹp, lau bàn ghế'], 3, 'Cùng giúp dọn nhà đón Tết.'),
    Q('Mâm cỗ ngày Tết miền Bắc thường có?', ['Bánh sinh nhật nhiều tầng', 'Bánh chưng', 'Bánh mì', 'Mì gói'], 1, 'Bánh chưng là món truyền thống.'),
    Q('Khi chúc Tết em nói?', ['Đòi tiền lì xì', 'Im lặng', 'Lời chúc lễ phép, vui vẻ', 'Quay đi'], 2, 'Nói lời chúc lễ phép.'),
  ]),

  M(21, 'Lì xì và lễ phép ngày Tết', [
    Q('Nhận lì xì em?', ['Đếm tiền chê ít', 'Nhận bằng hai tay, cảm ơn', 'Mở ngay trước mặt khách', 'Giật tiền'], 1, 'Nhận hai tay và cảm ơn.'),
    Q('Khi khách đến chơi Tết, em?', ['Trốn vào phòng', 'Trêu khách', 'Chỉ chào ông bà, không chào khách lạ', 'Chào lễ phép, mời nước'], 3, 'Chào hỏi lễ phép và mời nước.'),
    Q('Số tiền lì xì em làm gì?', ['Mua thật nhiều bánh', 'Giấu kĩ một mình', 'Đưa bố mẹ giữ giúp', 'Tiêu ngay'], 2, 'Đưa bố mẹ giữ giúp.'),
    Q('Lì xì có ý nghĩa?', ['May mắn, lời chúc tốt lành', 'Chỉ là tiền', 'So sánh xem ai được lì xì nhiều hơn', 'Khoe của'], 0, 'Lì xì mang ý nghĩa may mắn, tốt lành.'),
  ]),

  M(22, 'Trò chơi dân gian ngày Tết', [
    Q('Trò chơi nào KHÔNG phải dân gian?', ['Trò chơi điện tử', 'Bịt mắt bắt dê', 'Ô ăn quan', 'Rồng rắn lên mây'], 0, 'Trò chơi điện tử là hiện đại.'),
    Q('Khi chơi cùng bạn ngày Tết em?', ['Cãi nhau', 'Đánh nhau ăn thua', 'Vui vẻ, không hơn thua', 'Gian lận'], 2, 'Chơi vui vẻ là chính.'),
    Q('Ô ăn quan dùng?', ['Quân bài', 'Bóng đá', 'Sỏi nhỏ và bàn vẽ trên đất/giấy', 'Bàn cờ vua'], 2, 'Ô ăn quan chơi với sỏi và bàn vẽ.'),
    Q('Sau khi chơi, em?', ['Cãi nhau ai thắng', 'Vứt sỏi lung tung', 'Cất gọn đồ, không xả rác', 'Để đồ chơi lại sân cho bạn khác chơi tiếp'], 2, 'Cất gọn và giữ sân sạch.'),
  ]),

  M(23, 'Mùa xuân và cây xanh', [
    Q('Mùa xuân ở miền Bắc có thời tiết?', ['Mát mẻ, hay mưa phùn', 'Lạnh tuyết', 'Nắng gắt', 'Bão lớn'], 0, 'Miền Bắc mùa xuân mát mẻ, mưa phùn.'),
    Q('Tết trồng cây do ai phát động?', ['Bác Hồ', 'Cô lao công', 'Các bác nông dân trong làng', 'Bạn em'], 0, 'Bác Hồ phát động Tết trồng cây.'),
    Q('Em chăm cây bằng?', ['Bóc vỏ', 'Đốt lá', 'Bẻ cành', 'Tưới nước, bắt sâu'], 3, 'Tưới nước, bắt sâu cho cây khoẻ.'),
    Q('Trồng cây giúp?', ['Hết oxy', 'Mất đất', 'Gây bụi', 'Không khí trong lành, bóng mát'], 3, 'Cây xanh giúp không khí trong lành.'),
  ]),

  M(24, 'Sinh hoạt cộng đồng – xóm em', [
    Q('Hàng xóm gặp em, em?', ['Lè lưỡi', 'Quay đi', 'Không nói gì', 'Chào lễ phép'], 3, 'Chào hỏi lễ phép.'),
    Q('Trong xóm, em không nên?', ['Chào hàng xóm', 'Tham gia dọn vệ sinh', 'Cười nói vừa phải', 'Mở loa thật to'], 3, 'Không mở loa to làm phiền người khác.'),
    Q('Khi hàng xóm cần giúp đỡ, em?', ['Trêu chọc', 'Đóng cửa', 'Báo bố mẹ giúp đỡ', 'Mặc kệ'], 2, 'Báo bố mẹ để giúp đỡ.'),
    Q('Xóm sạch đẹp nhờ?', ['Tự nhiên', 'Mọi người cùng giữ gìn', 'May mắn', 'Một mình bác tổ trưởng'], 1, 'Tất cả cùng giữ gìn.'),
  ]),

  M(25, 'Quốc tế Phụ nữ 8/3', [
    Q('Ngày 8/3 là ngày?', ['Quốc khánh', 'Nhà giáo Việt Nam', 'Quốc tế Phụ nữ', 'Quốc tế Thiếu nhi'], 2, '8/3 là Quốc tế Phụ nữ.'),
    Q('Em làm gì cho mẹ ngày 8/3?', ['Cãi mẹ', 'Đòi mua quà', 'Khóc nhõng nhẽo', 'Tặng thiệp, giúp việc nhà'], 3, 'Tặng thiệp và giúp việc nhà.'),
    Q('Trong lớp em chúc?', ['Cô giáo và các bạn nữ', 'Trêu các bạn nữ', 'Chỉ bạn thân', 'Không chúc ai'], 0, 'Chúc cô và các bạn nữ.'),
    Q('Lời chúc nên?', ['Chân thành, lịch sự', 'Trêu chọc', 'Chỉ chúc khi được nhắc', 'Bông đùa thô'], 0, 'Chân thành và lịch sự.'),
  ]),

  M(26, 'Em yêu bộ đội – 22/12 / 30/4', [
    Q('Bộ đội bảo vệ?', ['Tự bản thân', 'Tổ quốc, nhân dân', 'Chỉ một xóm', 'Chỉ trường em'], 1, 'Bộ đội bảo vệ Tổ quốc và nhân dân.'),
    Q('Để cảm ơn bộ đội, em?', ['Cãi cô', 'Bỏ học', 'Đập phá đồ', 'Học giỏi, ngoan ngoãn'], 3, 'Học giỏi cũng là cách cảm ơn.'),
    Q('Gặp chú bộ đội ngoài đường em?', ['Chào lễ phép', 'Quay đi', 'Sợ hãi bỏ chạy', 'Lè lưỡi'], 0, 'Chào hỏi lễ phép.'),
    Q('Khi thấy ảnh chú bộ đội canh giữ biển đảo, em cảm thấy?', ['Biết ơn và tự hào', 'Sợ hãi', 'Lạnh nhạt', 'Buồn chán'], 0, 'Cảm thấy biết ơn và tự hào.'),
  ]),

  M(27, 'Em bảo vệ môi trường', [
    Q('Em bỏ rác?', ['Ra đường', 'Xuống sông', 'Đúng nơi quy định', 'Vứt ra cửa sổ'], 2, 'Bỏ rác đúng nơi quy định.'),
    Q('Khi đánh răng em?', ['Hứng nước vào cốc, không xả liên tục', 'Không cần tiết kiệm', 'Mở vòi cả lúc đánh', 'Xả mạnh nhất'], 0, 'Hứng nước vào cốc để tiết kiệm.'),
    Q('Em phân loại rác?', ['Chôn xuống đất', 'Rác tái chế và rác bỏ đi', 'Đốt tất cả', 'Trộn lẫn cho gọn'], 1, 'Phân loại để dễ tái chế.'),
    Q('Em nên dùng?', ['Cốc nhựa dùng 1 lần', 'Ống hút nhựa', 'Túi ni-lông mỗi lần', 'Túi vải, bình nước cá nhân'], 3, 'Túi vải và bình cá nhân thân thiện môi trường.'),
  ]),

  M(28, 'Em yêu thiên nhiên', [
    Q('Khi đi công viên em không nên?', ['Hít thở không khí', 'Ngắm hoa', 'Hái hoa, bẻ cành', 'Chụp ảnh'], 2, 'Không được hái hoa, bẻ cành.'),
    Q('Khi gặp con vật nhỏ, em?', ['Quan sát từ xa, không bắt', 'Bắt về', 'Ném đá', 'Đánh chết'], 0, 'Quan sát từ xa, không gây hại.'),
    Q('Nước em uống nên?', ['Nước nhiễm bẩn', 'Nước mưa lẫn bụi', 'Nước sạch đun sôi/để nguội', 'Nước ao'], 2, 'Nước sạch đun sôi mới an toàn.'),
    Q('Yêu thiên nhiên là?', ['Đốt rừng', 'Vứt rác xuống suối', 'Chiếm hữu hoa', 'Giữ gìn, không phá hoại'], 3, 'Yêu là giữ gìn, không phá hoại.'),
  ]),

  M(29, 'Hành vi ứng xử nơi công cộng', [
    Q('Trên xe buýt em?', ['Đùa to', 'Chạy nhảy', 'Ăn vặt bừa', 'Nhường ghế người già, em nhỏ'], 3, 'Nhường ghế cho người già, em nhỏ.'),
    Q('Trong thư viện em?', ['Chạy đùa', 'Giữ im lặng', 'Đập sách', 'Cười nói to'], 1, 'Thư viện cần giữ im lặng.'),
    Q('Khi xếp hàng em?', ['Đẩy bạn', 'La hét', 'Chen ngang', 'Xếp trật tự, không chen'], 3, 'Xếp trật tự, không chen lấn.'),
    Q('Khi va chạm bạn, em?', ['Cãi nhau', 'Trừng mắt', 'Giả vờ như không có chuyện gì', 'Xin lỗi nhẹ nhàng'], 3, 'Xin lỗi nhẹ nhàng.'),
  ]),

  M(30, 'Ngày Quốc tế Thiếu nhi 1/6', [
    Q('Ngày 1/6 là?', ['Quốc tế Phụ nữ', 'Quốc khánh', 'Nhà giáo Việt Nam', 'Quốc tế Thiếu nhi'], 3, '1/6 là Quốc tế Thiếu nhi.'),
    Q('Ngày này em được?', ['Đi làm thay bố', 'Bị mắng', 'Ở nhà ngủ cả ngày', 'Tham gia hoạt động vui chơi'], 3, 'Em được tham gia hoạt động vui chơi.'),
    Q('Quyền cơ bản của trẻ em là?', ['Được tự ý nghỉ học', 'Được làm gì cũng được', 'Được học, được vui chơi, được bảo vệ', 'Không có quyền gì'], 2, 'Trẻ em có quyền học, vui chơi, được bảo vệ.'),
    Q('Khi thấy bạn bị bắt nạt, em?', ['Báo cô/thầy/người lớn', 'Đánh lại bạn xấu', 'Cười theo', 'Bỏ chạy'], 0, 'Báo người lớn để bảo vệ bạn.'),
  ]),

  M(31, 'Em làm thẻ giới thiệu bản thân', [
    Q('Thẻ giới thiệu nên có?', ['Số tài khoản ngân hàng', 'Số CCCD bố', 'Mật khẩu Wi-Fi', 'Tên, lớp, sở thích'], 3, 'Tên, lớp, sở thích là phù hợp.'),
    Q('Khi viết thẻ em chữ nên?', ['Cẩu thả', 'Quá nhỏ không đọc được', 'Tô lem nhem', 'Rõ ràng, đẹp'], 3, 'Chữ rõ ràng, sạch đẹp.'),
    Q('Em trang trí thẻ bằng?', ['Bôi đen hết', 'Xé góc thẻ', 'Vẽ bậy', 'Hình em yêu thích, màu tươi'], 3, 'Hình em yêu thích, màu tươi.'),
    Q('Khi giới thiệu thẻ trước lớp em?', ['Tự tin, mỉm cười', 'Quay lưng', 'Bỏ ra ngoài', 'Cúi gằm'], 0, 'Tự tin và mỉm cười.'),
  ]),

  M(32, 'Em tham gia hoạt động lớp', [
    Q('Khi cô chia nhóm, em?', ['Khóc đòi nhóm khác', 'Vui vẻ tham gia với bạn', 'Im lặng không làm', 'Bỏ ra ngoài'], 1, 'Vui vẻ tham gia với bạn.'),
    Q('Khi nhóm cần em làm việc, em?', ['Trốn việc', 'Đẩy việc cho bạn', 'Cố gắng hoàn thành phần của mình', 'Ngồi không'], 2, 'Hoàn thành phần việc của mình.'),
    Q('Khi nhóm cãi nhau, em?', ['Im lặng theo ý bạn lớn tiếng nhất', 'Hét to nhất', 'Đánh bạn', 'Nói chuyện hoà nhã, nhờ cô giúp'], 3, 'Hoà nhã và nhờ cô giúp.'),
    Q('Khi nhóm thắng cuộc, em?', ['Vui và cảm ơn các bạn', 'Khoe khoang', 'Im lặng', 'Coi thường bạn yếu'], 0, 'Vui chung và cảm ơn các bạn.'),
  ]),

  M(33, 'Em yêu nghề – ước mơ của em', [
    Q('Ước mơ của em nên?', ['Không cần có', 'Bắt chước bạn', 'Bố mẹ áp đặt', 'Là điều em yêu thích'], 3, 'Là điều em yêu thích và phù hợp với mình.'),
    Q('Nghề bác sĩ giúp?', ['Lái máy bay', 'Bán hàng', 'Sửa xe', 'Chữa bệnh cho mọi người'], 3, 'Bác sĩ chữa bệnh cứu người.'),
    Q('Nghề giáo viên?', ['Bán đồ', 'Lái tàu', 'Trồng lúa', 'Dạy học cho học sinh'], 3, 'Giáo viên dạy học.'),
    Q('Để đạt ước mơ em cần?', ['Đợi may mắn', 'Lười biếng', 'Học tập chăm chỉ từ bây giờ', 'Bỏ học'], 2, 'Học tập chăm chỉ từ bây giờ.'),
  ]),

  M(34, 'Em chia tay bạn nghỉ hè', [
    Q('Trước nghỉ hè em nên?', ['Cãi cô', 'Im lặng bỏ về', 'Không đến lớp', 'Tạm biệt cô và bạn lịch sự'], 3, 'Tạm biệt lễ phép trước khi nghỉ hè.'),
    Q('Trong hè em không nên?', ['Quên hết kiến thức', 'Đi dã ngoại', 'Ôn lại bài cũ', 'Đọc truyện'], 0, 'Nên duy trì ôn bài để khỏi quên.'),
    Q('Khi đi bơi mùa hè, em?', ['Đi cùng người lớn ở nơi an toàn', 'Bơi một mình', 'Tự ra ao sâu', 'Trốn bố mẹ đi bơi'], 0, 'Phải có người lớn và nơi an toàn.'),
    Q('Khi nắng nóng em?', ['Nhịn nước', 'Cởi áo phơi nắng', 'Chạy ngoài trưa lâu', 'Đội mũ, uống đủ nước'], 3, 'Đội mũ, uống nước đầy đủ.'),
  ]),

  M(35, 'Tổng kết – Em lên Lớp 2', [
    Q('Sau một năm em đã?', ['Không thay đổi', 'Quên hết', 'Yếu đi', 'Trưởng thành, biết tự lập hơn'], 3, 'Em đã lớn hơn và tự lập hơn.'),
    Q('Lên Lớp 2 em sẽ?', ['Tự tin và cố gắng hơn', 'Buồn vì phải xa cô giáo lớp 1', 'Bỏ học', 'Lười hơn'], 0, 'Tự tin và cố gắng hơn nữa.'),
    Q('Em cảm ơn ai đã đồng hành cùng em?', ['Chỉ cảm ơn đồ chơi', 'Không cần cảm ơn ai', 'Cô, bố mẹ, bạn bè', 'Chỉ cảm ơn tivi'], 2, 'Cảm ơn cô, bố mẹ, bạn bè đã đồng hành.'),
    Q('Lời chúc em dành cho lớp?', ['Vui vẻ, mạnh khoẻ, học giỏi', 'Cãi nhau', 'Không có gì', 'Quên nhau'], 0, 'Lời chúc tốt đẹp cho cả lớp.'),
  ]),
];

export const P1HDTN_SCENARIOS = indexBy(P1HDTN_WEEKS);
