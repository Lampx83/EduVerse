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
    Q('Trước khi tập, em nên?', ['Khởi động kĩ các khớp', 'Uống nhiều nước', 'Tập luôn', 'Chạy luôn một vòng sân để làm nóng'], 0, 'Khởi động kĩ để tránh chấn thương.'),
    Q('Đội hình hàng ngang là?', ['Vòng tròn', 'Lung tung', 'Các bạn đứng cạnh nhau theo hàng', 'Đứng theo cột'], 2, 'Hàng ngang đứng cạnh nhau.'),
    Q('Đội hình hàng dọc?', ['Vòng tròn', 'Hàng ngang', 'Đứng theo cột (người sau – người trước)', 'Tản mác'], 2, 'Hàng dọc xếp theo cột.'),
    Q('Hô "Nghiêm!" em phải?', ['Đứng thẳng, tay áp đùi', 'Đứng thoải mái, hai chân dang rộng', 'Đưa hai tay lên ngang vai', 'Ngồi xuống'], 0, 'Đứng nghiêm tay áp đùi.'),
  ]),

  M(2, 'Bài thể dục liên hoàn — Động tác 1-3', [
    Q('Bài thể dục liên hoàn lớp 5 có?', ['3 động tác', '10 động tác', '5 động tác', '20 động tác'], 1, 'Lớp 5 có 10 động tác liên hoàn.'),
    Q('Động tác 1 thường là?', ['Tay (đưa tay ngang)', 'Vươn thở', 'Chân (đá lăng chân)', 'Toàn thân'], 1, 'Vươn thở mở đầu để hít sâu.'),
    Q('Khi tập vươn thở em nên?', ['Nín thở', 'Không cần', 'Thở vội', 'Hít vào - thở ra theo nhịp'], 3, 'Hít vào - thở ra theo nhịp.'),
    Q('Mục đích bài thể dục?', ['Không có mục đích', 'Mệt thêm', 'Béo lên', 'Khoẻ mạnh, dẻo dai'], 3, 'Khoẻ mạnh và dẻo dai.'),
  ]),

  M(3, 'Bài thể dục liên hoàn — Động tác 4-6', [
    Q('Động tác tay giúp?', ['Khoẻ bụng', 'Khoẻ cơ vai và cánh tay', 'Khoẻ chân', 'Không có gì'], 1, 'Khoẻ cơ vai và tay.'),
    Q('Động tác chân giúp?', ['Khoẻ bụng', 'Khoẻ mặt', 'Khoẻ tay', 'Khoẻ cơ chân và đùi'], 3, 'Khoẻ cơ chân.'),
    Q('Khi tập em nên?', ['Quá chậm', 'Theo đúng nhịp hô', 'Tự ý nhanh', 'Bỏ giữa'], 1, 'Theo đúng nhịp hô.'),
    Q('Sau buổi tập cần?', ['Ngồi luôn', 'Tắm ngay', 'Thả lỏng, hồi phục', 'Uống nước đá'], 2, 'Thả lỏng và hồi phục.'),
  ]),

  M(4, 'Bài thể dục liên hoàn — Động tác 7-10', [
    Q('Động tác toàn thân giúp?', ['Phối hợp cả cơ thể', 'Chỉ chân', 'Chỉ tay', 'Không gì'], 0, 'Phối hợp toàn thân.'),
    Q('Động tác cuối thường là?', ['Nhảy cao', 'Điều hoà', 'Chạy nhanh', 'Vươn thở'], 1, 'Điều hoà để hồi sức.'),
    Q('Tập 10 động tác liên hoàn cần?', ['Nhớ thứ tự và đúng nhịp', 'Chỉ cần tập động tác mình thích', 'Đổi thứ tự', 'Bỏ giữa'], 0, 'Nhớ thứ tự và nhịp.'),
    Q('Sau khi học xong, em có thể?', ['Không tập nữa', 'Tự tập ở nhà mỗi sáng', 'Chỉ tập ở lớp', 'Quên ngay'], 1, 'Tự tập ở nhà cũng tốt.'),
  ]),

  M(5, 'Chạy 80m', [
    Q('Chạy 80m yêu cầu?', ['Chạy chậm', 'Chạy nhanh và đúng kĩ thuật', 'Đi bộ nhanh giữ sức đến vạch đích', 'Chạy nước rút ngay vài bước đầu rồi đi bộ'], 1, 'Chạy nhanh đúng kĩ thuật.'),
    Q('Xuất phát chạy 80m?', ['Tư thế chuẩn bị "vào chỗ"', 'Ngồi xổm chống hai tay xuống đất', 'Đứng nghiêm', 'Đứng nghiêng người, tay chống hông'], 0, '"Vào chỗ" rồi "sẵn sàng" rồi chạy.'),
    Q('Khi chạy em nên?', ['Đi thẳng tay', 'Nhảy lò cò', 'Đánh tay và thở đều', 'Không thở'], 2, 'Đánh tay và thở đều.'),
    Q('Khi về đích em nên?', ['Đi bộ về', 'Quay lại', 'Dừng trước vạch', 'Chạy hết tốc lực qua vạch'], 3, 'Chạy hết qua vạch đích.'),
  ]),

  M(6, 'Chạy 80m (luyện tập)', [
    Q('Để chạy nhanh hơn em cần?', ['Ngủ nhiều', 'Luyện tập đều, thở đúng', 'Ăn nhiều', 'Không tập'], 1, 'Luyện tập và thở đúng.'),
    Q('Bước chân khi chạy?', ['Bước chéo chân để tăng tốc', 'Rất dài', 'Tự nhiên, không quá dài', 'Rất ngắn'], 2, 'Tự nhiên, không quá dài/ngắn.'),
    Q('Tay khi chạy?', ['Đánh tay nhịp nhàng', 'Khoanh tay', 'Không đánh', 'Đánh loạn'], 0, 'Đánh tay nhịp nhàng giúp đẩy người tới.'),
    Q('Khi chạy em không nên?', ['Thở đều', 'Nhìn xuống đất', 'Nhìn về phía trước', 'Đánh tay'], 1, 'Không nên cúi nhìn xuống đất.'),
  ]),

  M(7, 'Bật xa tại chỗ', [
    Q('Bật xa giúp khoẻ?', ['Cơ chân, sức bật', 'Chỉ mặt', 'Chỉ tay', 'Không gì'], 0, 'Khoẻ cơ chân và sức bật.'),
    Q('Tư thế chuẩn bị?', ['Đứng chụm', 'Đứng một chân', 'Ngồi xổm, hai tay đặt sau lưng', 'Đứng hai chân rộng bằng vai'], 3, 'Hai chân rộng bằng vai.'),
    Q('Khi bật?', ['Bật một chân', 'Đứng thẳng bật', 'Khuỵu gối, đánh tay, bật mạnh', 'Bật không khuỵu'], 2, 'Khuỵu gối và đánh tay tạo lực.'),
    Q('Tiếp đất?', ['Một chân', 'Ngã ngửa', 'Hai chân chùng gối, không ngã', 'Chân thẳng'], 2, 'Chùng gối để hấp thụ lực.'),
  ]),

  M(8, 'Bật xa — Luyện tập', [
    Q('Đo bật xa từ?', ['Vạch xuất phát đến gót chân gần nhất', 'Đâu cũng được', 'Đỉnh đầu', 'Mũi chân xa nhất'], 0, 'Đo đến gót chân gần vạch nhất.'),
    Q('Để bật xa hơn em cần?', ['Không tập', 'Luyện cơ chân và kĩ thuật', 'Ngủ ngày', 'Ăn nhiều'], 1, 'Luyện cơ và kĩ thuật.'),
    Q('Bật xa thuộc môn?', ['Thể dục dụng cụ', 'Bóng đá', 'Cờ vua', 'Điền kinh'], 3, 'Bật xa là môn điền kinh.'),
    Q('Trước khi bật?', ['Ăn nhẹ một quả chuối lấy sức', 'Khởi động chân kĩ', 'Uống nước đá', 'Bật ngay'], 1, 'Khởi động chân kĩ tránh chấn thương.'),
  ]),

  M(9, 'Nhảy dây — Nhảy tốc độ', [
    Q('Nhảy dây tốc độ là?', ['Đếm 10 cái', 'Nhảy nhanh nhất có thể trong 1 phút', 'Nhảy chậm', 'Nhảy đếm số lần trong 3 phút'], 1, 'Nhảy nhanh tối đa trong 1 phút.'),
    Q('Khi nhảy em nên?', ['Nhảy nhẹ trên mũi chân', 'Nhảy 1 chân', 'Nhảy bằng cả bàn chân', 'Dậm gót'], 0, 'Nhảy nhẹ trên mũi chân.'),
    Q('Quay dây?', ['Quay bằng cánh tay', 'Quay vai', 'Không quay', 'Quay bằng cổ tay'], 3, 'Quay bằng cổ tay.'),
    Q('Để nhảy nhiều cái em cần?', ['Không phối hợp', 'Nhảy nhanh', 'Phối hợp tay-chân nhịp nhàng', 'Nhảy bừa'], 2, 'Tay-chân phối hợp nhịp nhàng.'),
  ]),

  M(10, 'Nhảy dây — Kĩ thuật nâng cao', [
    Q('Nhảy dây 2 chân là?', ['Đổi chân liên tục từng nhịp dây', 'Nhảy 1 chân', 'Nhảy lò cò', 'Nhảy cả 2 chân cùng lúc'], 3, 'Hai chân nhảy cùng lúc.'),
    Q('Nhảy dây chéo tay?', ['Không tay', 'Tay thẳng', 'Một tay', 'Bắt chéo tay khi quay dây'], 3, 'Bắt chéo tay tạo vòng nhỏ.'),
    Q('Nhảy dây giúp em?', ['Khoẻ tim mạch, nhanh nhẹn', 'Mệt thêm', 'Không lợi', 'Béo lên'], 0, 'Khoẻ tim mạch và nhanh nhẹn.'),
    Q('Khi mỏi em nên?', ['Đi ngủ', 'Bỏ luôn', 'Nghỉ một chút rồi nhảy tiếp', 'Cố quá sức'], 2, 'Nghỉ ngắn rồi tiếp tục.'),
  ]),

  M(11, 'Đá cầu — Tâng cầu cá nhân', [
    Q('Đá cầu là môn?', ['Của Pháp', 'Của Mỹ', 'Truyền thống Việt Nam', 'Hiện đại'], 2, 'Đá cầu là môn truyền thống VN.'),
    Q('Tâng cầu bằng?', ['Mu bàn chân, đùi, đầu gối', 'Lòng bàn chân (gan bàn chân)', 'Gót chân', 'Cạnh ngoài bàn chân'], 0, 'Mu bàn chân, đùi, đầu gối là chính.'),
    Q('Để tâng được nhiều em cần?', ['Tay đánh cầu', 'Mắt nhìn cầu, chân phối hợp', 'Mắt nhắm', 'Quay lưng'], 1, 'Mắt nhìn và chân phối hợp.'),
    Q('Khi tâng em đứng?', ['Cả 2 chân nhảy', 'Trụ 1 chân, chân kia tâng', 'Hai chân chụm sát, tâng bằng đầu gối', 'Đứng kiễng hai gót chân lên'], 1, 'Trụ 1 chân và tâng bằng chân kia.'),
  ]),

  M(12, 'Đá cầu 3 người', [
    Q('Đá cầu 3 người là?', ['3 người chuyền cầu cho nhau', '2 người đá', '5 người', '1 người tự đá'], 0, '3 người chuyền nhau giữ cầu.'),
    Q('Mục tiêu đá cầu 3 người?', ['Đá ra ngoài', 'Đập cầu', 'Giữ cầu không rơi lâu nhất', 'Đá rơi nhanh'], 2, 'Giữ cầu không rơi.'),
    Q('Vị trí 3 người?', ['Hàng ngang', 'Tam giác đều', 'Hàng dọc', 'Lung tung'], 1, 'Tam giác đều dễ chuyền.'),
    Q('Khi chuyền cầu em nên?', ['Im lặng', 'Báo bạn rồi đá nhẹ', 'Đá mạnh', 'Đá sang chỗ khác'], 1, 'Báo bạn và đá vừa lực.'),
  ]),

  M(13, 'Bóng đá mini — Luật cơ bản', [
    Q('Bóng đá mini có?', ['3 người', '11 người', '20 người', '5-7 người mỗi đội'], 3, 'Bóng đá mini 5-7 người.'),
    Q('Mục tiêu bóng đá?', ['Đá ra ngoài', 'Đá vào lưới mình', 'Đưa bóng vào lưới đối thủ', 'Cầm bóng'], 2, 'Đưa bóng vào lưới đối thủ.'),
    Q('Cầu thủ KHÔNG được dùng?', ['Tay (trừ thủ môn)', 'Đầu (đánh đầu)', 'Chân (đá bóng)', 'Ngực (giữ bóng)'], 0, 'Không dùng tay (trừ thủ môn).'),
    Q('Thủ môn là?', ['Người giữ khung thành', 'Tiền đạo', 'Trọng tài', 'Khán giả'], 0, 'Thủ môn giữ khung thành.'),
  ]),

  M(14, 'Bóng đá mini — Luyện tập', [
    Q('Chuyền bóng cho bạn dùng?', ['Lòng trong bàn chân', 'Mu bàn chân (xa)', 'Mũi chân', 'Gót chân'], 0, 'Lòng trong bàn chân chuyền chính xác.'),
    Q('Sút bóng vào gôn dùng?', ['Gót chân (sút giật về sau)', 'Lòng bàn tay đập bóng', 'Mu bàn chân (lực mạnh)', 'Lòng trong'], 2, 'Mu bàn chân sút mạnh.'),
    Q('Tinh thần đồng đội?', ['Chuyền bóng và phối hợp', 'Tự ý mình', 'Bỏ trận', 'Cãi bạn'], 0, 'Chuyền và phối hợp là quan trọng.'),
    Q('Khi thua trận, em nên?', ['Đổ lỗi cho đồng đội đá kém', 'Cãi trọng tài', 'Đánh nhau', 'Chấp nhận và rút kinh nghiệm'], 3, 'Chấp nhận và rút kinh nghiệm.'),
  ]),

  M(15, 'Bóng rổ mini', [
    Q('Bóng rổ ghi điểm bằng?', ['Đập bóng', 'Ném bóng vào rổ', 'Đá bóng', 'Cầm bóng'], 1, 'Ném bóng vào rổ.'),
    Q('Dẫn bóng bóng rổ?', ['Cầm chạy', 'Đập bóng xuống sàn', 'Đá bóng', 'Tung bóng'], 1, 'Đập bóng xuống sàn (dribble).'),
    Q('Khi ném rổ em dùng?', ['Chân (đá bóng vào rổ)', 'Hai tay hoặc một tay đẩy bóng', 'Vai (hích bóng vào rổ)', 'Đầu (đánh đầu vào rổ)'], 1, 'Hai tay hoặc một tay đẩy.'),
    Q('Số người mỗi đội bóng rổ?', ['7 người', '3 người', '5 người', '11 người'], 2, 'Mỗi đội bóng rổ 5 người chính.'),
  ]),

  M(16, 'Cầu lông đôi', [
    Q('Cầu lông đôi là?', ['5 đánh 5', '2 người đánh 2 người', '1 đánh 1', '3 đánh 3'], 1, 'Đôi là 2 người đánh 2 người.'),
    Q('Cầu lông dùng?', ['Gậy và bóng nhỏ', 'Vợt và quả cầu lông', 'Vợt và bóng', 'Tay không và quả cầu lông'], 1, 'Vợt và quả cầu lông.'),
    Q('Khi đánh đôi em cần?', ['Tự đánh', 'Bỏ bạn', 'Phối hợp với bạn cùng cặp', 'Cãi nhau'], 2, 'Phối hợp với cặp đôi.'),
    Q('Vợt cầu lông cầm?', ['Như cầm tay bắt tay', 'Như cầm dao', 'Như cầm bút', 'Như cầm búa'], 0, 'Cầm vợt như bắt tay.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('HK1 em đã học những môn nào?', ['Chỉ chạy', 'Không gì', 'Chỉ thể dục', 'Thể dục liên hoàn, chạy, bật xa, đá cầu, bóng đá…'], 3, 'Nhiều nội dung HK1.'),
    Q('Để khoẻ em cần?', ['Ngủ nhiều', 'Ăn nhiều', 'Không tập', 'Tập thể dục đều đặn'], 3, 'Tập thể dục đều đặn.'),
    Q('Trước khi tập luôn phải?', ['Tập ngay động tác khó nhất', 'Khởi động', 'Bỏ qua', 'Uống nước đá'], 1, 'Khởi động trước khi tập.'),
    Q('Sau tập phải?', ['Tắm lạnh', 'Thả lỏng và hồi phục', 'Ngồi luôn', 'Uống nước đá'], 1, 'Thả lỏng và hồi phục.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khi kiểm tra em nên?', ['Cãi cô', 'Run và bỏ giữa các động tác', 'Tự tin, làm hết khả năng', 'Bỏ cuộc'], 2, 'Tự tin và cố gắng hết sức.'),
    Q('Khi thua bạn em nên?', ['Cãi trọng tài đã xử ép mình', 'Khóc trước mặt cả lớp', 'Bỏ về không bắt tay bạn', 'Chúc mừng bạn và cố gắng'], 3, 'Tinh thần thể thao là chúc mừng.'),
    Q('Đánh giá thể chất gồm?', ['Chỉ chiều cao', 'Chỉ sức mạnh', 'Sức bền, sức mạnh, nhanh nhẹn', 'Chỉ cân nặng'], 2, 'Sức bền, sức mạnh, nhanh nhẹn.'),
    Q('Để tiến bộ?', ['Không tập', 'Luyện tập đều và đúng kĩ thuật', 'Tập quá sức', 'Tập ngẫu hứng'], 1, 'Đều đặn và đúng kĩ thuật.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Đi bộ thể thao', [
    Q('Đi bộ thể thao khác đi bộ thường?', ['Đi lùi', 'Đi nghiêng', 'Đi chậm', 'Đi nhanh, có kỹ thuật'], 3, 'Đi nhanh và có kỹ thuật.'),
    Q('Khi đi bộ thể thao em?', ['Đánh tay, bước dài hơn', 'Khoanh tay', 'Bước rất ngắn', 'Lệch người'], 0, 'Đánh tay và bước dài hơn bình thường.'),
    Q('Đi bộ thể thao có quy định?', ['Không quy định', 'Hai chân rời đất', 'Luôn có 1 chân chạm đất', 'Một chân duy nhất'], 2, 'Luôn có ít nhất 1 chân chạm đất.'),
    Q('Đi bộ thể thao tốt cho?', ['Thính giác và khả năng nghe xa', 'Tim mạch và xương khớp', 'Men răng và lợi', 'Thị lực và khả năng nhìn xa'], 1, 'Tốt cho tim mạch và xương khớp.'),
  ]),

  M(20, 'Bơi sải — Bước cơ bản (mô phỏng)', [
    Q('Bơi sải là?', ['Bơi đứng', 'Bơi ếch', 'Kiểu bơi nhanh nhất', 'Bơi chậm nhất'], 2, 'Bơi sải (crawl) là nhanh nhất.'),
    Q('Khi bơi sải tay?', ['Hai tay cùng vẫy', 'Khoanh tay', 'Vẫy luân phiên trên không và dưới nước', 'Không vẫy'], 2, 'Tay vẫy luân phiên.'),
    Q('Khi bơi sải chân?', ['Đạp ếch', 'Đập chân lên xuống liên tục', 'Không đập', 'Co chân'], 1, 'Đập chân lên xuống.'),
    Q('Thở khi bơi sải?', ['Thở dồn', 'Há mồm hít trong nước', 'Nghiêng đầu hít vào - úp mặt thở ra', 'Không thở'], 2, 'Nghiêng hít - úp thở.'),
  ]),

  M(21, 'An toàn dưới nước', [
    Q('Trước khi bơi cần?', ['Ăn no rồi xuống bể bơi luôn', 'Khởi động và đi vệ sinh', 'Bỏ qua', 'Uống nước'], 1, 'Khởi động và đi vệ sinh trước.'),
    Q('Khi xuống nước em phải?', ['Lén lút', 'Có người lớn giám sát', 'Không cần', 'Đi một mình'], 1, 'Phải có người lớn giám sát.'),
    Q('Nếu bị chuột rút em nên?', ['Bình tĩnh, gọi cứu hộ', 'Hoảng loạn', 'Im lặng chìm', 'Vẫy nước'], 0, 'Bình tĩnh và gọi cứu hộ.'),
    Q('Em KHÔNG nên?', ['Bơi nơi an toàn có giám sát', 'Bơi với áo phao', 'Bơi sau khi khởi động', 'Bơi nơi ao hồ sâu một mình'], 3, 'Không bơi nơi sâu một mình.'),
  ]),

  M(22, 'Kéo co tập thể', [
    Q('Kéo co là?', ['Trò 1 người', 'Đua chạy', 'Đẩy cây', 'Trò chơi đồng đội kéo dây'], 3, 'Kéo co là trò chơi tập thể.'),
    Q('Mục tiêu kéo co?', ['Cãi nhau', 'Bỏ cuộc', 'Ngồi xuống', 'Kéo đối thủ qua vạch'], 3, 'Kéo đối thủ qua vạch.'),
    Q('Khi kéo em nên?', ['Mỗi bạn tự kéo theo nhịp của mình', 'Đồng lòng, dùng cả lực chân', 'Cười đùa', 'Buông dây'], 1, 'Đồng lòng và dùng lực chân.'),
    Q('Tư thế kéo?', ['Ngồi xổm, hai tay nắm dây', 'Nằm sấp, kẹp dây dưới nách', 'Chân trước-sau, ngả người', 'Đứng thẳng'], 2, 'Chân trước-sau và ngả người.'),
  ]),

  M(23, 'Trò chơi vận động — "Mèo đuổi chuột"', [
    Q('Trò chơi này giúp?', ['Không lợi', 'Mệt thêm', 'Giảm khả năng phản xạ', 'Nhanh nhẹn và đoàn kết'], 3, 'Nhanh nhẹn và đoàn kết.'),
    Q('Khi chơi em nên?', ['Tuân thủ luật chơi', 'Đánh bạn', 'Phá luật', 'Bỏ giữa'], 0, 'Tuân thủ luật chơi.'),
    Q('Khi thua em nên?', ['Vui vẻ chơi tiếp', 'Cãi rằng mình không bị bắt', 'Khóc và không chơi nữa', 'Bỏ về giữa giờ ra chơi'], 0, 'Vui vẻ chơi tiếp.'),
    Q('Trò chơi vận động là?', ['Xem TV', 'Đọc sách', 'Trò chơi có hoạt động cơ thể', 'Trò ngồi'], 2, 'Có hoạt động cơ thể.'),
  ]),

  M(24, 'Đá cầu — Thi đấu', [
    Q('Sân đá cầu?', ['Sân hình tròn không chia bên', 'Có lưới chia 2 bên', 'Hình tròn', 'Không lưới'], 1, 'Có lưới chia đôi sân.'),
    Q('Phát cầu em?', ['Tung cầu và đá qua lưới', 'Ném tay', 'Cầm tay', 'Đá vào lưới mình'], 0, 'Tung cầu rồi đá qua lưới.'),
    Q('Khi đối thủ phát cầu em?', ['Cãi rằng đối thủ phát sai luật', 'Bỏ qua', 'Bắt tay', 'Đỡ và đá trả qua lưới'], 3, 'Đỡ và đá trả qua lưới.'),
    Q('Tinh thần thi đấu?', ['Bỏ thua', 'Cãi vã', 'Fair-play, tôn trọng đối thủ', 'Chơi xấu'], 2, 'Fair-play và tôn trọng đối thủ.'),
  ]),

  M(25, 'Bóng đá mini — Thi đấu', [
    Q('Đá bóng phải biết?', ['Chỉ chạy', 'Chỉ đá mạnh', 'Chuyền, sút, dẫn bóng', 'Không cần kĩ thuật'], 2, 'Chuyền, sút, dẫn bóng là cơ bản.'),
    Q('Khi mất bóng em nên?', ['Cãi trọng tài', 'Đứng yên', 'Bỏ vị trí về sân nhà chờ bóng', 'Truy cản và cướp lại'], 3, 'Truy cản và cướp lại.'),
    Q('Hành vi xấu trong bóng đá?', ['Cản phá', 'Sút bóng', 'Đánh đối thủ, cãi trọng tài', 'Chuyền bóng'], 2, 'Đánh đối thủ là hành vi xấu.'),
    Q('Sau trận em nên?', ['Bỏ về luôn', 'Bắt tay đối thủ', 'Đánh nhau', 'Cãi với trọng tài về tỉ số'], 1, 'Bắt tay là tinh thần thể thao.'),
  ]),

  M(26, 'Bóng rổ — Ném rổ', [
    Q('Ném rổ phía xa nên?', ['Đập bóng xuống đất rồi ném lên', 'Một tay', 'Đá bóng cao vào rổ', 'Hai tay đẩy trên ngực'], 3, 'Hai tay đẩy ngực cho lực ổn định.'),
    Q('Ném rổ gần nên?', ['Hai tay mạnh', 'Đập bóng xuống sàn bật lên rổ', 'Một tay đẩy bóng nhẹ', 'Đá nhẹ bóng vào rổ'], 2, 'Một tay nhẹ khi gần rổ.'),
    Q('Khi ném em phải?', ['Nhắm mắt', 'Nhìn bạn', 'Nhìn bóng', 'Nhìn vào rổ'], 3, 'Nhìn vào rổ để định hướng.'),
    Q('Bóng vào rổ em được?', ['10 điểm', '100 điểm', 'Không điểm', '1-2-3 điểm tuỳ vị trí'], 3, '1-2-3 điểm tuỳ vị trí ném.'),
  ]),

  M(27, 'Cầu lông — Đánh đôi', [
    Q('Khi đánh đôi cần?', ['Lấn sân', 'Phối hợp di chuyển với bạn', 'Cãi nhau', 'Tự đánh'], 1, 'Phối hợp di chuyển.'),
    Q('Vị trí cơ bản đôi?', ['Cùng một chỗ', 'Ngoài sân', 'Trên-dưới hoặc trái-phải', 'Lung tung'], 2, 'Trên-dưới hoặc trái-phải.'),
    Q('Khi bạn đánh em?', ['Sẵn sàng vị trí hỗ trợ', 'Bỏ chạy', 'Đứng yên', 'Cãi nhau với bạn cùng đôi'], 0, 'Sẵn sàng hỗ trợ.'),
    Q('Sau trận em?', ['Bỏ về không thu dọn vợt', 'Bắt tay đối thủ và đồng đội', 'Không bắt tay', 'Cãi với đồng đội vì lỗi cuối trận'], 1, 'Bắt tay là phép lịch sự thể thao.'),
  ]),

  M(28, 'Nhảy dây nhóm', [
    Q('Nhảy dây nhóm là?', ['2 người', 'Không có dây', '1 người nhảy', 'Nhiều người nhảy chung 1 dây dài'], 3, 'Nhiều người chung 1 dây dài.'),
    Q('Hai bạn cầm dây cần?', ['Quay loạn', 'Quay nhanh quá', 'Quay đều và nhịp nhàng', 'Không quay'], 2, 'Đều và nhịp nhàng.'),
    Q('Người nhảy nên?', ['Đứng ngoài vung dây thay người quay', 'Vào đúng nhịp', 'Đứng yên', 'Vào bất kì lúc nào'], 1, 'Vào đúng nhịp dây.'),
    Q('Nhảy dây nhóm rèn?', ['Sự ích kỉ', 'Tinh thần cá nhân', 'Tinh thần đồng đội', 'Cô độc'], 2, 'Tinh thần đồng đội.'),
  ]),

  M(29, 'Trò chơi vận động dân gian', [
    Q('Trò "Bịt mắt bắt dê" là?', ['Trò mới', 'Trò phương Tây', 'Trò dân gian VN', 'Trò chơi của Trung Quốc'], 2, 'Trò dân gian Việt Nam.'),
    Q('Trò "Rồng rắn lên mây" là?', ['Hàn Quốc', 'Dân gian VN', 'Nước Mỹ', 'Nhật Bản'], 1, 'Trò dân gian VN.'),
    Q('Lợi ích trò chơi dân gian?', ['Vui và gắn bó văn hoá', 'Chỉ tốn thời gian học bài', 'Dễ bị thương vì luật đã cũ', 'Làm mất hứng học tập của bạn'], 0, 'Vui và giữ văn hoá.'),
    Q('Em chơi trò dân gian em cần?', ['Chơi xấu', 'Đoàn kết và đúng luật', 'Bỏ giữa', 'Tự đổi luật chơi theo ý mình'], 1, 'Đoàn kết và đúng luật.'),
  ]),

  M(30, 'Chạy bền 400m', [
    Q('Chạy bền 400m yêu cầu?', ['Sức bền, phân phối sức', 'Chạy nhanh hết sức', 'Đi bộ nhanh và đi đều đến đích', 'Bỏ giữa'], 0, 'Sức bền và phân phối sức.'),
    Q('Khi chạy bền em nên?', ['Đi bộ nhanh xen kẽ chạy nước rút', 'Chạy hết tốc', 'Chạy đều, thở đều', 'Chạy chậm'], 2, 'Chạy đều và thở đều.'),
    Q('Thở khi chạy bền?', ['Há mồm hít', 'Hít bằng mũi, thở bằng miệng', 'Không thở', 'Nín thở'], 1, 'Hít mũi - thở miệng.'),
    Q('Khi mệt em nên?', ['Cố chạy hết tốc lực đến đích', 'Ngồi xuống', 'Giảm tốc nhưng không dừng', 'Dừng ngay'], 2, 'Giảm tốc nhưng vẫn chạy.'),
  ]),

  M(31, 'Bài thể dục liên hoàn — Ôn tập', [
    Q('Ôn 10 động tác cần?', ['Bỏ giữa', 'Nhớ thứ tự và đúng nhịp', 'Tập theo nhịp riêng của mỗi bạn', 'Đổi thứ tự'], 1, 'Nhớ thứ tự và đúng nhịp.'),
    Q('Tập đều mỗi sáng giúp?', ['Mệt thêm', 'Giảm chiều cao do tập nặng', 'Tăng cân nhanh do ăn nhiều hơn', 'Khoẻ, tinh thần tốt'], 3, 'Khoẻ và tinh thần tốt.'),
    Q('Khi tập sai em?', ['Đổ lỗi', 'Bỏ luôn', 'Sửa lại, không nản', 'Cãi cô'], 2, 'Sửa lại và không nản.'),
    Q('Lên cấp 2 em vẫn nên?', ['Tập thể dục đều', 'Chỉ tập khi nào có giờ thể dục', 'Bỏ tập', 'Không quan tâm'], 0, 'Tập thể dục cả đời.'),
  ]),

  M(32, 'Đá cầu — Kiểm tra kĩ thuật', [
    Q('Kiểm tra tâng cầu?', ['Đếm số lần liên tục không rơi', 'Đá ra ngoài', 'Đá nhanh nhất', 'Đá xa nhất'], 0, 'Số lần liên tục không rơi.'),
    Q('Để tâng nhiều?', ['Lực vừa, mắt nhìn cầu', 'Quay đầu', 'Mắt nhắm', 'Lực mạnh'], 0, 'Lực vừa và mắt nhìn.'),
    Q('Khi cầu rơi em?', ['Đá vào bạn', 'Bỏ cuộc', 'Nhặt lên và tâng tiếp', 'Đổ lỗi cho bạn phát cầu quá mạnh'], 2, 'Nhặt lên và tiếp tục.'),
    Q('Đá cầu giúp em?', ['Làm chân nhanh bị to ra', 'Chỉ giúp giải trí, không tập luyện', 'Khéo léo và khoẻ chân', 'Làm chậm phản xạ tay'], 2, 'Khéo léo và khoẻ chân.'),
  ]),

  M(33, 'Bóng đá - bóng rổ — Thi đấu giao hữu', [
    Q('Giao hữu là?', ['Thi đấu giao lưu, không quá căng thẳng', 'Cãi nhau', 'Đấu giải', 'Đấu loại'], 0, 'Giao lưu nhẹ nhàng.'),
    Q('Tinh thần giao hữu?', ['Chơi xấu', 'Đánh nhau', 'Vui, học hỏi, kết bạn', 'Tranh cãi tỉ số với đối thủ'], 2, 'Vui và kết bạn.'),
    Q('Khi thắng em nên?', ['Khinh thường', 'Khiêm tốn, không chế giễu', 'Chế giễu', 'Khoe khoang'], 1, 'Khiêm tốn không chế giễu.'),
    Q('Khi thua em nên?', ['Học hỏi điểm tốt của đối thủ', 'Bỏ về không bắt tay bạn', 'Cãi rằng mình đã chạm trước', 'Đánh nhau'], 0, 'Học hỏi từ đối thủ.'),
  ]),

  M(34, 'Tổng ôn cuối năm', [
    Q('Cả năm em học những môn?', ['Chỉ bóng', 'Thể dục, chạy, bật, nhảy dây, đá cầu, bóng đá, bóng rổ, cầu lông, kéo co, bơi', 'Chỉ học môn bóng và môn chạy', 'Chỉ chạy'], 1, 'Rất nhiều môn thể thao.'),
    Q('Để khoẻ suốt đời em cần?', ['Chỉ ngủ', 'Không tập', 'Chỉ tập khi có giờ thể dục ở lớp', 'Thói quen tập thể dục'], 3, 'Thói quen tập đều đặn.'),
    Q('Trước khi tập luôn?', ['Khởi động', 'Uống nước đá', 'Ăn no để có sức tập lâu', 'Bỏ qua'], 0, 'Khởi động luôn cần thiết.'),
    Q('Tinh thần thể thao?', ['Chơi xấu', 'Bỏ cuộc', 'Fair-play, đoàn kết, tôn trọng', 'Hơn thua bằng mọi giá để thắng'], 2, 'Fair-play và tôn trọng.'),
  ]),

  M(35, 'Kiểm tra cuối năm', [
    Q('Khi kiểm tra em nên?', ['Tự tin, cố gắng hết sức', 'Lo lắng và bỏ bớt động tác khó', 'Bỏ cuộc', 'Cãi cô'], 0, 'Tự tin và cố gắng.'),
    Q('Khi thua bạn?', ['Chúc mừng và cố gắng', 'Bỏ về không xem bạn nhận thưởng', 'Cãi trọng tài rằng tính điểm sai', 'Khóc vì không được hạng cao'], 0, 'Chúc mừng và cố gắng tiếp.'),
    Q('Sau cấp 1 em sẽ?', ['Không quan tâm', 'Chỉ tập khi có giờ thể dục ở trường', 'Đợi đến khi lớn rồi mới tập', 'Tiếp tục tập thể dục ở cấp 2'], 3, 'Tiếp tục cấp 2.'),
    Q('Lời cảm ơn thầy cô môn thể dục?', ['Chân thành, giữ thói quen tập', 'Tranh luận về điểm số cuối kì', 'Quên ngay sau khi học xong cấp 1', 'Im lặng'], 0, 'Chân thành và giữ thói quen.'),
  ]),
];

export const P5GDTC_SCENARIOS = indexBy(P5GDTC_WEEKS);
