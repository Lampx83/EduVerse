// ============================================================
// Lớp 5 · GIÁO DỤC THỂ CHẤT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn GDTC Lớp 5.
// ID prefix: "P5GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5GDTC', 'gdtc', n, title, qs, opts);

export const P5GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Giới thiệu — Đội hình đội ngũ', [
    Q('Trước khi tập, em nên?', ['Khởi động kĩ các khớp','Tập luôn','Ăn no','Uống nhiều nước'], 0, 'Khởi động kĩ để tránh chấn thương.'),
    Q('Đội hình hàng ngang là?', ['Các bạn đứng cạnh nhau theo hàng','Đứng theo cột','Vòng tròn','Lung tung'], 0, 'Hàng ngang đứng cạnh nhau.'),
    Q('Đội hình hàng dọc?', ['Đứng theo cột (người sau – người trước)','Hàng ngang','Vòng tròn','Tản mác'], 0, 'Hàng dọc xếp theo cột.'),
    Q('Hô "Nghiêm!" em phải?', ['Đứng thẳng, tay áp đùi','Ngồi xuống','Chạy','Nhảy'], 0, 'Đứng nghiêm tay áp đùi.'),
  ]),

  M(2, 'Bài thể dục liên hoàn — Động tác 1-3', [
    Q('Bài thể dục liên hoàn lớp 5 có?', ['10 động tác','5 động tác','3 động tác','20 động tác'], 0, 'Lớp 5 có 10 động tác liên hoàn.'),
    Q('Động tác 1 thường là?', ['Vươn thở','Tay','Chân','Toàn thân'], 0, 'Vươn thở mở đầu để hít sâu.'),
    Q('Khi tập vươn thở em nên?', ['Hít vào - thở ra theo nhịp','Nín thở','Thở vội','Không cần'], 0, 'Hít vào - thở ra theo nhịp.'),
    Q('Mục đích bài thể dục?', ['Khoẻ mạnh, dẻo dai','Mệt thêm','Béo lên','Không có mục đích'], 0, 'Khoẻ mạnh và dẻo dai.'),
  ]),

  M(3, 'Bài thể dục liên hoàn — Động tác 4-6', [
    Q('Động tác tay giúp?', ['Khoẻ cơ vai và cánh tay','Khoẻ chân','Khoẻ bụng','Không có gì'], 0, 'Khoẻ cơ vai và tay.'),
    Q('Động tác chân giúp?', ['Khoẻ cơ chân và đùi','Khoẻ tay','Khoẻ bụng','Khoẻ mặt'], 0, 'Khoẻ cơ chân.'),
    Q('Khi tập em nên?', ['Theo đúng nhịp hô','Tự ý nhanh','Quá chậm','Bỏ giữa'], 0, 'Theo đúng nhịp hô.'),
    Q('Sau buổi tập cần?', ['Thả lỏng, hồi phục','Ngồi luôn','Uống nước đá','Tắm ngay'], 0, 'Thả lỏng và hồi phục.'),
  ]),

  M(4, 'Bài thể dục liên hoàn — Động tác 7-10', [
    Q('Động tác toàn thân giúp?', ['Phối hợp cả cơ thể','Chỉ tay','Chỉ chân','Không gì'], 0, 'Phối hợp toàn thân.'),
    Q('Động tác cuối thường là?', ['Điều hoà','Vươn thở','Chạy nhanh','Nhảy cao'], 0, 'Điều hoà để hồi sức.'),
    Q('Tập 10 động tác liên hoàn cần?', ['Nhớ thứ tự và đúng nhịp','Tuỳ ý','Đổi thứ tự','Bỏ giữa'], 0, 'Nhớ thứ tự và nhịp.'),
    Q('Sau khi học xong, em có thể?', ['Tự tập ở nhà mỗi sáng','Quên ngay','Không tập nữa','Chỉ tập ở lớp'], 0, 'Tự tập ở nhà cũng tốt.'),
  ]),

  M(5, 'Chạy 80m', [
    Q('Chạy 80m yêu cầu?', ['Chạy nhanh và đúng kĩ thuật','Đi bộ','Chạy chậm','Bò'], 0, 'Chạy nhanh đúng kĩ thuật.'),
    Q('Xuất phát chạy 80m?', ['Tư thế chuẩn bị "vào chỗ"','Đứng nghiêm','Ngồi','Nằm'], 0, '"Vào chỗ" rồi "sẵn sàng" rồi chạy.'),
    Q('Khi chạy em nên?', ['Đánh tay và thở đều','Không thở','Đi thẳng tay','Nhảy lò cò'], 0, 'Đánh tay và thở đều.'),
    Q('Khi về đích em nên?', ['Chạy hết tốc lực qua vạch','Dừng trước vạch','Đi bộ về','Quay lại'], 0, 'Chạy hết qua vạch đích.'),
  ]),

  M(6, 'Chạy 80m (luyện tập)', [
    Q('Để chạy nhanh hơn em cần?', ['Luyện tập đều, thở đúng','Ăn nhiều','Ngủ nhiều','Không tập'], 0, 'Luyện tập và thở đúng.'),
    Q('Bước chân khi chạy?', ['Tự nhiên, không quá dài','Rất dài','Rất ngắn','Lệch'], 0, 'Tự nhiên, không quá dài/ngắn.'),
    Q('Tay khi chạy?', ['Đánh tay nhịp nhàng','Không đánh','Đánh loạn','Khoanh tay'], 0, 'Đánh tay nhịp nhàng giúp đẩy người tới.'),
    Q('Khi chạy em không nên?', ['Nhìn xuống đất','Nhìn về phía trước','Thở đều','Đánh tay'], 0, 'Không nên cúi nhìn xuống đất.'),
  ]),

  M(7, 'Bật xa tại chỗ', [
    Q('Bật xa giúp khoẻ?', ['Cơ chân, sức bật','Chỉ tay','Chỉ mặt','Không gì'], 0, 'Khoẻ cơ chân và sức bật.'),
    Q('Tư thế chuẩn bị?', ['Đứng hai chân rộng bằng vai','Đứng chụm','Đứng một chân','Ngồi'], 0, 'Hai chân rộng bằng vai.'),
    Q('Khi bật?', ['Khuỵu gối, đánh tay, bật mạnh','Đứng thẳng bật','Bật không khuỵu','Bật một chân'], 0, 'Khuỵu gối và đánh tay tạo lực.'),
    Q('Tiếp đất?', ['Hai chân chùng gối, không ngã','Chân thẳng','Một chân','Ngã ngửa'], 0, 'Chùng gối để hấp thụ lực.'),
  ]),

  M(8, 'Bật xa — Luyện tập', [
    Q('Đo bật xa từ?', ['Vạch xuất phát đến gót chân gần nhất','Đỉnh đầu','Mũi chân xa nhất','Đâu cũng được'], 0, 'Đo đến gót chân gần vạch nhất.'),
    Q('Để bật xa hơn em cần?', ['Luyện cơ chân và kĩ thuật','Ăn nhiều','Ngủ ngày','Không tập'], 0, 'Luyện cơ và kĩ thuật.'),
    Q('Bật xa thuộc môn?', ['Điền kinh','Bóng đá','Bơi','Cờ vua'], 0, 'Bật xa là môn điền kinh.'),
    Q('Trước khi bật?', ['Khởi động chân kĩ','Bật ngay','Ăn no','Uống nước đá'], 0, 'Khởi động chân kĩ tránh chấn thương.'),
  ]),

  M(9, 'Nhảy dây — Nhảy tốc độ', [
    Q('Nhảy dây tốc độ là?', ['Nhảy nhanh nhất có thể trong 1 phút','Nhảy chậm','Đếm 10 cái','Đi bộ'], 0, 'Nhảy nhanh tối đa trong 1 phút.'),
    Q('Khi nhảy em nên?', ['Nhảy nhẹ trên mũi chân','Nhảy bằng cả bàn chân','Dậm gót','Nhảy 1 chân'], 0, 'Nhảy nhẹ trên mũi chân.'),
    Q('Quay dây?', ['Quay bằng cổ tay','Quay bằng cánh tay','Quay vai','Không quay'], 0, 'Quay bằng cổ tay.'),
    Q('Để nhảy nhiều cái em cần?', ['Phối hợp tay-chân nhịp nhàng','Nhảy bừa','Nhảy nhanh','Không phối hợp'], 0, 'Tay-chân phối hợp nhịp nhàng.'),
  ]),

  M(10, 'Nhảy dây — Kĩ thuật nâng cao', [
    Q('Nhảy dây 2 chân là?', ['Nhảy cả 2 chân cùng lúc','Nhảy 1 chân','Nhảy lò cò','Chạy'], 0, 'Hai chân nhảy cùng lúc.'),
    Q('Nhảy dây chéo tay?', ['Bắt chéo tay khi quay dây','Tay thẳng','Không tay','Một tay'], 0, 'Bắt chéo tay tạo vòng nhỏ.'),
    Q('Nhảy dây giúp em?', ['Khoẻ tim mạch, nhanh nhẹn','Mệt thêm','Béo lên','Không lợi'], 0, 'Khoẻ tim mạch và nhanh nhẹn.'),
    Q('Khi mỏi em nên?', ['Nghỉ một chút rồi nhảy tiếp','Cố quá sức','Bỏ luôn','Đi ngủ'], 0, 'Nghỉ ngắn rồi tiếp tục.'),
  ]),

  M(11, 'Đá cầu — Tâng cầu cá nhân', [
    Q('Đá cầu là môn?', ['Truyền thống Việt Nam','Của Pháp','Của Mỹ','Hiện đại'], 0, 'Đá cầu là môn truyền thống VN.'),
    Q('Tâng cầu bằng?', ['Mu bàn chân, đùi, đầu gối','Tay','Lưng','Đầu'], 0, 'Mu bàn chân, đùi, đầu gối là chính.'),
    Q('Để tâng được nhiều em cần?', ['Mắt nhìn cầu, chân phối hợp','Mắt nhắm','Tay đánh cầu','Quay lưng'], 0, 'Mắt nhìn và chân phối hợp.'),
    Q('Khi tâng em đứng?', ['Trụ 1 chân, chân kia tâng','Cả 2 chân nhảy','Ngồi','Nằm'], 0, 'Trụ 1 chân và tâng bằng chân kia.'),
  ]),

  M(12, 'Đá cầu 3 người', [
    Q('Đá cầu 3 người là?', ['3 người chuyền cầu cho nhau','1 người tự đá','2 người đá','5 người'], 0, '3 người chuyền nhau giữ cầu.'),
    Q('Mục tiêu đá cầu 3 người?', ['Giữ cầu không rơi lâu nhất','Đá rơi nhanh','Đập cầu','Đá ra ngoài'], 0, 'Giữ cầu không rơi.'),
    Q('Vị trí 3 người?', ['Tam giác đều','Hàng ngang','Hàng dọc','Lung tung'], 0, 'Tam giác đều dễ chuyền.'),
    Q('Khi chuyền cầu em nên?', ['Báo bạn rồi đá nhẹ','Đá mạnh','Im lặng','Đá sang chỗ khác'], 0, 'Báo bạn và đá vừa lực.'),
  ]),

  M(13, 'Bóng đá mini — Luật cơ bản', [
    Q('Bóng đá mini có?', ['5-7 người mỗi đội','11 người','3 người','20 người'], 0, 'Bóng đá mini 5-7 người.'),
    Q('Mục tiêu bóng đá?', ['Đưa bóng vào lưới đối thủ','Cầm bóng','Đá ra ngoài','Đá vào lưới mình'], 0, 'Đưa bóng vào lưới đối thủ.'),
    Q('Cầu thủ KHÔNG được dùng?', ['Tay (trừ thủ môn)','Chân','Đầu','Ngực'], 0, 'Không dùng tay (trừ thủ môn).'),
    Q('Thủ môn là?', ['Người giữ khung thành','Tiền đạo','Trọng tài','Khán giả'], 0, 'Thủ môn giữ khung thành.'),
  ]),

  M(14, 'Bóng đá mini — Luyện tập', [
    Q('Chuyền bóng cho bạn dùng?', ['Lòng trong bàn chân','Mũi chân','Gót chân','Mu bàn chân (xa)'], 0, 'Lòng trong bàn chân chuyền chính xác.'),
    Q('Sút bóng vào gôn dùng?', ['Mu bàn chân (lực mạnh)','Lòng trong','Gót','Tay'], 0, 'Mu bàn chân sút mạnh.'),
    Q('Tinh thần đồng đội?', ['Chuyền bóng và phối hợp','Tự ý mình','Cãi bạn','Bỏ trận'], 0, 'Chuyền và phối hợp là quan trọng.'),
    Q('Khi thua trận, em nên?', ['Chấp nhận và rút kinh nghiệm','Cãi trọng tài','Bỏ về','Đánh nhau'], 0, 'Chấp nhận và rút kinh nghiệm.'),
  ]),

  M(15, 'Bóng rổ mini', [
    Q('Bóng rổ ghi điểm bằng?', ['Ném bóng vào rổ','Đá bóng','Đập bóng','Cầm bóng'], 0, 'Ném bóng vào rổ.'),
    Q('Dẫn bóng bóng rổ?', ['Đập bóng xuống sàn','Cầm chạy','Đá bóng','Tung bóng'], 0, 'Đập bóng xuống sàn (dribble).'),
    Q('Khi ném rổ em dùng?', ['Hai tay hoặc một tay đẩy bóng','Chân','Đầu','Vai'], 0, 'Hai tay hoặc một tay đẩy.'),
    Q('Số người mỗi đội bóng rổ?', ['5 người','3 người','7 người','11 người'], 0, 'Mỗi đội bóng rổ 5 người chính.'),
  ]),

  M(16, 'Cầu lông đôi', [
    Q('Cầu lông đôi là?', ['2 người đánh 2 người','1 đánh 1','3 đánh 3','5 đánh 5'], 0, 'Đôi là 2 người đánh 2 người.'),
    Q('Cầu lông dùng?', ['Vợt và quả cầu lông','Vợt và bóng','Gậy','Tay'], 0, 'Vợt và quả cầu lông.'),
    Q('Khi đánh đôi em cần?', ['Phối hợp với bạn cùng cặp','Tự đánh','Cãi nhau','Bỏ bạn'], 0, 'Phối hợp với cặp đôi.'),
    Q('Vợt cầu lông cầm?', ['Như cầm tay bắt tay','Như cầm búa','Như cầm dao','Như cầm bút'], 0, 'Cầm vợt như bắt tay.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('HK1 em đã học những môn nào?', ['Thể dục liên hoàn, chạy, bật xa, đá cầu, bóng đá…','Chỉ thể dục','Chỉ chạy','Không gì'], 0, 'Nhiều nội dung HK1.'),
    Q('Để khoẻ em cần?', ['Tập thể dục đều đặn','Không tập','Ăn nhiều','Ngủ nhiều'], 0, 'Tập thể dục đều đặn.'),
    Q('Trước khi tập luôn phải?', ['Khởi động','Bỏ qua','Ăn no','Uống nước đá'], 0, 'Khởi động trước khi tập.'),
    Q('Sau tập phải?', ['Thả lỏng và hồi phục','Ngồi luôn','Tắm lạnh','Uống nước đá'], 0, 'Thả lỏng và hồi phục.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khi kiểm tra em nên?', ['Tự tin, làm hết khả năng','Run','Bỏ cuộc','Cãi cô'], 0, 'Tự tin và cố gắng hết sức.'),
    Q('Khi thua bạn em nên?', ['Chúc mừng bạn và cố gắng','Cãi','Khóc','Bỏ về'], 0, 'Tinh thần thể thao là chúc mừng.'),
    Q('Đánh giá thể chất gồm?', ['Sức bền, sức mạnh, nhanh nhẹn','Chỉ sức mạnh','Chỉ chiều cao','Chỉ cân nặng'], 0, 'Sức bền, sức mạnh, nhanh nhẹn.'),
    Q('Để tiến bộ?', ['Luyện tập đều và đúng kĩ thuật','Tập ngẫu hứng','Không tập','Tập quá sức'], 0, 'Đều đặn và đúng kĩ thuật.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Đi bộ thể thao', [
    Q('Đi bộ thể thao khác đi bộ thường?', ['Đi nhanh, có kỹ thuật','Đi chậm','Đi nghiêng','Đi lùi'], 0, 'Đi nhanh và có kỹ thuật.'),
    Q('Khi đi bộ thể thao em?', ['Đánh tay, bước dài hơn','Khoanh tay','Bước rất ngắn','Lệch người'], 0, 'Đánh tay và bước dài hơn bình thường.'),
    Q('Đi bộ thể thao có quy định?', ['Luôn có 1 chân chạm đất','Hai chân rời đất','Một chân duy nhất','Không quy định'], 0, 'Luôn có ít nhất 1 chân chạm đất.'),
    Q('Đi bộ thể thao tốt cho?', ['Tim mạch và xương khớp','Mắt','Răng','Tai'], 0, 'Tốt cho tim mạch và xương khớp.'),
  ]),

  M(20, 'Bơi sải — Bước cơ bản (mô phỏng)', [
    Q('Bơi sải là?', ['Kiểu bơi nhanh nhất','Bơi chậm nhất','Bơi đứng','Bơi ếch'], 0, 'Bơi sải (crawl) là nhanh nhất.'),
    Q('Khi bơi sải tay?', ['Vẫy luân phiên trên không và dưới nước','Hai tay cùng vẫy','Khoanh tay','Không vẫy'], 0, 'Tay vẫy luân phiên.'),
    Q('Khi bơi sải chân?', ['Đập chân lên xuống liên tục','Co chân','Đạp ếch','Không đập'], 0, 'Đập chân lên xuống.'),
    Q('Thở khi bơi sải?', ['Nghiêng đầu hít vào - úp mặt thở ra','Há mồm hít trong nước','Không thở','Thở dồn'], 0, 'Nghiêng hít - úp thở.'),
  ]),

  M(21, 'An toàn dưới nước', [
    Q('Trước khi bơi cần?', ['Khởi động và đi vệ sinh','Ăn no','Uống nước','Bỏ qua'], 0, 'Khởi động và đi vệ sinh trước.'),
    Q('Khi xuống nước em phải?', ['Có người lớn giám sát','Đi một mình','Lén lút','Không cần'], 0, 'Phải có người lớn giám sát.'),
    Q('Nếu bị chuột rút em nên?', ['Bình tĩnh, gọi cứu hộ','Hoảng loạn','Vẫy nước','Im lặng chìm'], 0, 'Bình tĩnh và gọi cứu hộ.'),
    Q('Em KHÔNG nên?', ['Bơi nơi ao hồ sâu một mình','Bơi nơi an toàn có giám sát','Bơi sau khi khởi động','Bơi với áo phao'], 0, 'Không bơi nơi sâu một mình.'),
  ]),

  M(22, 'Kéo co tập thể', [
    Q('Kéo co là?', ['Trò chơi đồng đội kéo dây','Trò 1 người','Đua chạy','Đẩy cây'], 0, 'Kéo co là trò chơi tập thể.'),
    Q('Mục tiêu kéo co?', ['Kéo đối thủ qua vạch','Cãi nhau','Ngồi xuống','Bỏ cuộc'], 0, 'Kéo đối thủ qua vạch.'),
    Q('Khi kéo em nên?', ['Đồng lòng, dùng cả lực chân','Tự ý','Cười đùa','Buông dây'], 0, 'Đồng lòng và dùng lực chân.'),
    Q('Tư thế kéo?', ['Chân trước-sau, ngả người','Đứng thẳng','Ngồi','Nằm'], 0, 'Chân trước-sau và ngả người.'),
  ]),

  M(23, 'Trò chơi vận động — "Mèo đuổi chuột"', [
    Q('Trò chơi này giúp?', ['Nhanh nhẹn và đoàn kết','Mệt thêm','Buồn','Không lợi'], 0, 'Nhanh nhẹn và đoàn kết.'),
    Q('Khi chơi em nên?', ['Tuân thủ luật chơi','Phá luật','Đánh bạn','Bỏ giữa'], 0, 'Tuân thủ luật chơi.'),
    Q('Khi thua em nên?', ['Vui vẻ chơi tiếp','Cãi','Khóc','Bỏ về'], 0, 'Vui vẻ chơi tiếp.'),
    Q('Trò chơi vận động là?', ['Trò chơi có hoạt động cơ thể','Trò ngồi','Đọc sách','Xem TV'], 0, 'Có hoạt động cơ thể.'),
  ]),

  M(24, 'Đá cầu — Thi đấu', [
    Q('Sân đá cầu?', ['Có lưới chia 2 bên','Không lưới','Hình tròn','Tuỳ ý'], 0, 'Có lưới chia đôi sân.'),
    Q('Phát cầu em?', ['Tung cầu và đá qua lưới','Cầm tay','Ném tay','Đá vào lưới mình'], 0, 'Tung cầu rồi đá qua lưới.'),
    Q('Khi đối thủ phát cầu em?', ['Đỡ và đá trả qua lưới','Bỏ qua','Bắt tay','Cãi'], 0, 'Đỡ và đá trả qua lưới.'),
    Q('Tinh thần thi đấu?', ['Fair-play, tôn trọng đối thủ','Chơi xấu','Cãi vã','Bỏ thua'], 0, 'Fair-play và tôn trọng đối thủ.'),
  ]),

  M(25, 'Bóng đá mini — Thi đấu', [
    Q('Đá bóng phải biết?', ['Chuyền, sút, dẫn bóng','Chỉ đá mạnh','Chỉ chạy','Không cần kĩ thuật'], 0, 'Chuyền, sút, dẫn bóng là cơ bản.'),
    Q('Khi mất bóng em nên?', ['Truy cản và cướp lại','Bỏ','Cãi trọng tài','Đứng yên'], 0, 'Truy cản và cướp lại.'),
    Q('Hành vi xấu trong bóng đá?', ['Đánh đối thủ, cãi trọng tài','Chuyền bóng','Sút bóng','Cản phá'], 0, 'Đánh đối thủ là hành vi xấu.'),
    Q('Sau trận em nên?', ['Bắt tay đối thủ','Cãi','Bỏ về luôn','Đánh nhau'], 0, 'Bắt tay là tinh thần thể thao.'),
  ]),

  M(26, 'Bóng rổ — Ném rổ', [
    Q('Ném rổ phía xa nên?', ['Hai tay đẩy trên ngực','Một tay','Vứt','Đá'], 0, 'Hai tay đẩy ngực cho lực ổn định.'),
    Q('Ném rổ gần nên?', ['Một tay đẩy bóng nhẹ','Hai tay mạnh','Đá','Đập'], 0, 'Một tay nhẹ khi gần rổ.'),
    Q('Khi ném em phải?', ['Nhìn vào rổ','Nhắm mắt','Nhìn bóng','Nhìn bạn'], 0, 'Nhìn vào rổ để định hướng.'),
    Q('Bóng vào rổ em được?', ['1-2-3 điểm tuỳ vị trí','10 điểm','100 điểm','Không điểm'], 0, '1-2-3 điểm tuỳ vị trí ném.'),
  ]),

  M(27, 'Cầu lông — Đánh đôi', [
    Q('Khi đánh đôi cần?', ['Phối hợp di chuyển với bạn','Tự đánh','Cãi nhau','Lấn sân'], 0, 'Phối hợp di chuyển.'),
    Q('Vị trí cơ bản đôi?', ['Trên-dưới hoặc trái-phải','Lung tung','Cùng một chỗ','Ngoài sân'], 0, 'Trên-dưới hoặc trái-phải.'),
    Q('Khi bạn đánh em?', ['Sẵn sàng vị trí hỗ trợ','Đứng yên','Bỏ chạy','Cãi'], 0, 'Sẵn sàng hỗ trợ.'),
    Q('Sau trận em?', ['Bắt tay đối thủ và đồng đội','Không bắt tay','Cãi','Bỏ về'], 0, 'Bắt tay là phép lịch sự thể thao.'),
  ]),

  M(28, 'Nhảy dây nhóm', [
    Q('Nhảy dây nhóm là?', ['Nhiều người nhảy chung 1 dây dài','1 người nhảy','2 người','Không có dây'], 0, 'Nhiều người chung 1 dây dài.'),
    Q('Hai bạn cầm dây cần?', ['Quay đều và nhịp nhàng','Quay loạn','Quay nhanh quá','Không quay'], 0, 'Đều và nhịp nhàng.'),
    Q('Người nhảy nên?', ['Vào đúng nhịp','Vào bất kì lúc nào','Đứng yên','Bỏ ra'], 0, 'Vào đúng nhịp dây.'),
    Q('Nhảy dây nhóm rèn?', ['Tinh thần đồng đội','Tinh thần cá nhân','Sự ích kỉ','Cô độc'], 0, 'Tinh thần đồng đội.'),
  ]),

  M(29, 'Trò chơi vận động dân gian', [
    Q('Trò "Bịt mắt bắt dê" là?', ['Trò dân gian VN','Trò phương Tây','Trò mới','Không có'], 0, 'Trò dân gian Việt Nam.'),
    Q('Trò "Rồng rắn lên mây" là?', ['Dân gian VN','Mỹ','Nhật','Hàn'], 0, 'Trò dân gian VN.'),
    Q('Lợi ích trò chơi dân gian?', ['Vui và gắn bó văn hoá','Mệt','Buồn','Vô ích'], 0, 'Vui và giữ văn hoá.'),
    Q('Em chơi trò dân gian em cần?', ['Đoàn kết và đúng luật','Cãi','Chơi xấu','Bỏ giữa'], 0, 'Đoàn kết và đúng luật.'),
  ]),

  M(30, 'Chạy bền 400m', [
    Q('Chạy bền 400m yêu cầu?', ['Sức bền, phân phối sức','Chạy nhanh hết sức','Đi bộ','Bỏ giữa'], 0, 'Sức bền và phân phối sức.'),
    Q('Khi chạy bền em nên?', ['Chạy đều, thở đều','Chạy hết tốc','Chạy chậm','Đi bộ'], 0, 'Chạy đều và thở đều.'),
    Q('Thở khi chạy bền?', ['Hít bằng mũi, thở bằng miệng','Nín thở','Há mồm hít','Không thở'], 0, 'Hít mũi - thở miệng.'),
    Q('Khi mệt em nên?', ['Giảm tốc nhưng không dừng','Dừng ngay','Ngồi xuống','Khóc'], 0, 'Giảm tốc nhưng vẫn chạy.'),
  ]),

  M(31, 'Bài thể dục liên hoàn — Ôn tập', [
    Q('Ôn 10 động tác cần?', ['Nhớ thứ tự và đúng nhịp','Tuỳ ý','Đổi thứ tự','Bỏ giữa'], 0, 'Nhớ thứ tự và đúng nhịp.'),
    Q('Tập đều mỗi sáng giúp?', ['Khoẻ, tinh thần tốt','Mệt thêm','Béo','Buồn'], 0, 'Khoẻ và tinh thần tốt.'),
    Q('Khi tập sai em?', ['Sửa lại, không nản','Bỏ luôn','Đổ lỗi','Cãi cô'], 0, 'Sửa lại và không nản.'),
    Q('Lên cấp 2 em vẫn nên?', ['Tập thể dục đều','Bỏ tập','Lười','Không quan tâm'], 0, 'Tập thể dục cả đời.'),
  ]),

  M(32, 'Đá cầu — Kiểm tra kĩ thuật', [
    Q('Kiểm tra tâng cầu?', ['Đếm số lần liên tục không rơi','Đá xa nhất','Đá nhanh nhất','Đá ra ngoài'], 0, 'Số lần liên tục không rơi.'),
    Q('Để tâng nhiều?', ['Lực vừa, mắt nhìn cầu','Lực mạnh','Mắt nhắm','Quay đầu'], 0, 'Lực vừa và mắt nhìn.'),
    Q('Khi cầu rơi em?', ['Nhặt lên và tâng tiếp','Bỏ cuộc','Cãi','Đá vào bạn'], 0, 'Nhặt lên và tiếp tục.'),
    Q('Đá cầu giúp em?', ['Khéo léo và khoẻ chân','Mệt','Buồn','Vô ích'], 0, 'Khéo léo và khoẻ chân.'),
  ]),

  M(33, 'Bóng đá - bóng rổ — Thi đấu giao hữu', [
    Q('Giao hữu là?', ['Thi đấu giao lưu, không quá căng thẳng','Đấu giải','Đấu loại','Cãi nhau'], 0, 'Giao lưu nhẹ nhàng.'),
    Q('Tinh thần giao hữu?', ['Vui, học hỏi, kết bạn','Đánh nhau','Cãi','Chơi xấu'], 0, 'Vui và kết bạn.'),
    Q('Khi thắng em nên?', ['Khiêm tốn, không chế giễu','Khoe khoang','Chế giễu','Khinh thường'], 0, 'Khiêm tốn không chế giễu.'),
    Q('Khi thua em nên?', ['Học hỏi điểm tốt của đối thủ','Cãi','Bỏ về','Đánh nhau'], 0, 'Học hỏi từ đối thủ.'),
  ]),

  M(34, 'Tổng ôn cuối năm', [
    Q('Cả năm em học những môn?', ['Thể dục, chạy, bật, nhảy dây, đá cầu, bóng đá, bóng rổ, cầu lông, kéo co, bơi','Chỉ chạy','Chỉ bóng','Không có'], 0, 'Rất nhiều môn thể thao.'),
    Q('Để khoẻ suốt đời em cần?', ['Thói quen tập thể dục','Lười','Không tập','Chỉ ngủ'], 0, 'Thói quen tập đều đặn.'),
    Q('Trước khi tập luôn?', ['Khởi động','Bỏ qua','Ăn no','Uống nước đá'], 0, 'Khởi động luôn cần thiết.'),
    Q('Tinh thần thể thao?', ['Fair-play, đoàn kết, tôn trọng','Chơi xấu','Cãi','Bỏ cuộc'], 0, 'Fair-play và tôn trọng.'),
  ]),

  M(35, 'Kiểm tra cuối năm', [
    Q('Khi kiểm tra em nên?', ['Tự tin, cố gắng hết sức','Run','Bỏ cuộc','Cãi cô'], 0, 'Tự tin và cố gắng.'),
    Q('Khi thua bạn?', ['Chúc mừng và cố gắng','Cãi','Khóc','Bỏ về'], 0, 'Chúc mừng và cố gắng tiếp.'),
    Q('Sau cấp 1 em sẽ?', ['Tiếp tục tập thể dục ở cấp 2','Bỏ','Lười','Không quan tâm'], 0, 'Tiếp tục cấp 2.'),
    Q('Lời cảm ơn thầy cô môn thể dục?', ['Chân thành, giữ thói quen tập','Im lặng','Quên','Cãi'], 0, 'Chân thành và giữ thói quen.'),
  ]),
];

export const P5GDTC_SCENARIOS = indexBy(P5GDTC_WEEKS);
