// ============================================================
// Lớp 2 · HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) — 36 tuần
// Bám CT GDPT 2018 · 3 tiết/tuần · HK1: 1–18 · HK2: 19–36.
// Mạch: Bản thân → Gia đình → Nhà trường → Cộng đồng → Tự nhiên → Nghề.
// ID prefix: "P2HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2HDTN', 'htn', n, title, qs, opts);

export const P2HDTN_WEEKS = [
  // ──────────────── HK1 — BẢN THÂN · GIA ĐÌNH · NHÀ TRƯỜNG ────────────────
  M(1, 'Tự giới thiệu về bản thân', [
    Q('Khi tự giới thiệu trước lớp, em nên bắt đầu bằng câu nào?', ['Tao tên là…', 'Hỏi gì mà hỏi!', 'Em chào cô và các bạn, em tên là…', 'Ờ thì tên tao là…'], 2, 'Lời chào lễ phép rồi mới giới thiệu tên.'),
    Q('Khi giới thiệu, giọng nói của em nên thế nào?', ['Quát thật to cho oai', 'Vừa nói vừa cười nhăn nhở', 'Lí nhí trong miệng', 'Rõ ràng, đủ nghe, tự tin'], 3, 'Giọng rõ ràng, đủ nghe và tự tin là phù hợp.'),
    Q('Thông tin nào KHÔNG cần giới thiệu trước lớp ở Lớp 2?', ['Mật khẩu điện thoại của bố mẹ', 'Sở thích của em', 'Tên em', 'Tên lớp em đang học'], 0, 'Thông tin riêng tư như mật khẩu không được chia sẻ.'),
    Q('Khi bạn đang giới thiệu, em nên?', ['Quay lưng lại', 'Trêu chọc bạn', 'Nói chuyện riêng', 'Lắng nghe và vỗ tay khi bạn nói xong'], 3, 'Lắng nghe là tôn trọng bạn.'),
    Q('Em hãy chọn câu giới thiệu sở thích phù hợp:', ['Em thích nói xấu bạn.', 'Em thích đọc truyện và vẽ tranh.', 'Em thích ăn vạ.', 'Em thích đánh nhau.'], 1, 'Sở thích lành mạnh, tích cực.'),
  ]),

  M(2, 'Đôi tay sạch sẽ — rửa tay đúng cách', [
    Q('Em cần rửa tay khi nào?', ['Chỉ rửa khi mẹ nhắc', 'Khi tay đã sạch sẵn', 'Một tuần một lần', 'Trước khi ăn và sau khi đi vệ sinh'], 3, 'Trước khi ăn và sau khi đi vệ sinh là bắt buộc.'),
    Q('Rửa tay đúng cách cần dùng gì?', ['Chỉ nước lã', 'Nước rửa bát đặc', 'Khăn ướt thay luôn', 'Xà phòng và nước sạch'], 3, 'Xà phòng + nước sạch giúp diệt khuẩn tốt nhất.'),
    Q('Thời gian xoa xà phòng tối thiểu nên là?', ['Khoảng 20 giây (hát "Happy Birthday" 2 lần)', 'Không cần xoa, vảy nước là được', 'Khoảng 5 phút', '2 giây'], 0, 'Khoảng 20 giây đủ để loại vi khuẩn.'),
    Q('Sau khi rửa tay, em nên?', ['Để ướt rồi sờ vào thức ăn', 'Lau vào quần đang mặc', 'Lau vào áo của bạn', 'Lau bằng khăn sạch hoặc giấy sạch'], 3, 'Lau khô bằng khăn/giấy sạch.'),
    Q('Hành động nào KHÔNG đúng khi rửa tay?', ['Rửa cả cổ tay', 'Xoa lòng bàn tay', 'Mở vòi nước thật to và xả không khoá lúc xoa xà phòng', 'Chà kĩ kẽ ngón tay'], 2, 'Cần khoá vòi khi xoa xà phòng để tiết kiệm nước.'),
    Q('Tay bẩn mà em vẫn ăn bánh thì có thể bị?', ['Cao lớn nhanh', 'Đau bụng, nhiễm khuẩn', 'Mọc răng đẹp', 'Khoẻ hơn'], 1, 'Vi khuẩn vào miệng gây bệnh tiêu hoá.'),
  ]),

  M(3, 'Đánh răng đúng cách (sáng + tối)', [
    Q('Mỗi ngày em nên đánh răng mấy lần?', ['5 lần', 'Không cần đánh', 'Ít nhất 2 lần: sáng và tối', '1 lần khi nào nhớ'], 2, 'Sáng sau ngủ dậy và tối trước khi đi ngủ.'),
    Q('Khi đánh răng, em chải theo chiều nào là đúng?', ['Chải dọc và xoay tròn nhẹ nhàng', 'Chỉ chải răng cửa', 'Cắn bàn chải', 'Chải ngang qua lại thật mạnh'], 0, 'Chải dọc + xoay tròn bảo vệ men răng và lợi.'),
    Q('Bàn chải đánh răng của em nên?', ['Dùng đến khi gãy hết lông', 'Mượn của bạn', 'Dùng chung với cả nhà', 'Là bàn chải riêng, thay 3 tháng một lần'], 3, 'Mỗi người một bàn chải riêng, thay định kì.'),
    Q('Sau khi ăn kẹo ngọt, em nên?', ['Súc miệng hoặc đánh răng', 'Đi ngủ luôn', 'Uống nước ngọt', 'Ăn thêm kẹo'], 0, 'Đường gây sâu răng, cần làm sạch.'),
    Q('Ý nào KHÔNG đúng về đánh răng?', ['Đánh càng mạnh càng tốt cho lợi', 'Hơi thở thơm tho', 'Phòng sâu răng', 'Giúp răng trắng sạch'], 0, 'Đánh quá mạnh làm chảy máu lợi.'),
  ]),

  M(4, 'Mặc quần áo gọn gàng', [
    Q('Trước khi đi học, em nên?', ['Không cài cúc cho thoải mái', 'Tự kiểm tra quần áo phẳng phiu', 'Mặc nguyên đồ ngủ nhăn nhúm', 'Chờ bố mẹ mặc hộ'], 1, 'Tự kiểm tra để gọn gàng, lịch sự.'),
    Q('Áo bị bẩn thì em nên?', ['Vứt ra sân', 'Bỏ vào giỏ giặt, thay áo sạch', 'Giấu vào gầm giường', 'Mặc tiếp đến tuần sau'], 1, 'Cho vào giỏ giặt và thay áo sạch.'),
    Q('Khi áo bị tuột cúc, em làm gì?', ['Nhờ người lớn đính lại hoặc tự đính nếu được', 'Mặc luôn cho nhanh', 'Xé luôn cho rách', 'Mặc trái áo cho khỏi thấy'], 0, 'Nhờ người lớn giúp đính cúc.'),
    Q('Hành động nào là gọn gàng?', ['Áo sơ vin ngay ngắn, đi giày sạch', 'Áo bỏ ngoài quần lệch một bên', 'Tóc tai bù xù', 'Cổ áo bẻ ngược'], 0, 'Áo sơ vin ngay ngắn là gọn gàng.'),
    Q('Lợi ích của việc mặc gọn gàng?', ['Để chê bạn', 'Để ăn được nhiều hơn', 'Để khoe của', 'Được mọi người quý mến, lịch sự'], 3, 'Lịch sự và được yêu quý.'),
  ]),

  M(5, 'Em tự chải tóc', [
    Q('Buổi sáng trước khi đi học, em nên?', ['Để tóc rối bù', 'Bôi keo lung tung', 'Tự chải tóc gọn gàng', 'Cắt tóc cho mình bằng kéo'], 2, 'Tự chải tóc thể hiện em tự lập.'),
    Q('Khi tóc dài bị rối, em nên?', ['Chải từ ngọn lên dần, nhẹ nhàng', 'Giật mạnh cho đứt', 'Bỏ luôn', 'Cắt phăng đi'], 0, 'Chải từ ngọn lên gốc để gỡ rối.'),
    Q('Lược của em nên?', ['Để dưới gầm giường', 'Là lược riêng, giữ sạch sẽ', 'Dùng chung với người khác', 'Ngâm vào nước nóng cả ngày'], 1, 'Lược riêng, sạch để tránh bệnh.'),
    Q('Sau khi chải xong, em nên?', ['Nhét vào ngăn bàn', 'Bỏ tóc rụng vào thùng rác', 'Vứt tóc rụng ra sàn', 'Để tóc rụng trên ghế'], 1, 'Tóc rụng cho vào thùng rác để giữ vệ sinh.'),
    Q('Bạn nào tự lập?', ['Bạn Đan lấy lược của em chải tóc mình', 'Bạn Cốm không bao giờ chải đầu', 'Bạn Bo bắt mẹ chải hộ mỗi ngày dù đã lớp 2', 'Bạn An tự chải tóc và buộc tóc gọn'], 3, 'Tự chải tóc là biểu hiện tự lập.'),
  ]),

  M(6, 'Cất đồ dùng đúng chỗ', [
    Q('Sau khi học xong, sách vở em nên?', ['Vứt khắp bàn', 'Đặt lên ghế', 'Để dưới sàn', 'Sắp xếp gọn vào giá sách/cặp'], 3, 'Sắp xếp gọn để dễ tìm.'),
    Q('Giày dép sau khi vào nhà nên?', ['Để giữa lối đi', 'Để trên bàn ăn', 'Ném vào góc nhà', 'Xếp ngay ngắn trên giá giày'], 3, 'Xếp giày trên giá ngay ngắn.'),
    Q('Đồ chơi sau khi chơi xong em nên?', ['Để mẹ dọn', 'Giấu dưới chăn', 'Vứt ra sân', 'Tự cất vào hộp/giỏ đồ chơi'], 3, 'Tự cất đồ chơi là tự lập.'),
    Q('Lợi ích của việc cất đồ đúng chỗ?', ['Để bố mẹ mua thêm đồ mới', 'Để khoe nhiều đồ', 'Không có lợi ích gì', 'Dễ tìm, nhà gọn, không bị mất'], 3, 'Gọn gàng + dễ tìm + không mất đồ.'),
    Q('Bạn Nam vừa làm bài xong vứt bút trên ghế. Em góp ý?', ['Cười nhạo Nam', 'Nhắc Nam cất bút vào hộp bút', 'Mặc kệ Nam', 'Lấy luôn bút của Nam'], 1, 'Nhắc bạn cất gọn là góp ý chân thành.'),
    Q('Câu nào ĐÚNG?', ['Nhà gọn gàng giúp tinh thần thoải mái.', 'Càng bừa càng vui.', 'Không cần cất đồ vì mai lại dùng.', 'Cất đồ là việc của mẹ.'], 0, 'Nhà gọn → tâm trạng tốt.'),
  ]),

  M(7, 'Chuẩn bị cặp sách đi học', [
    Q('Em nên soạn cặp đi học vào lúc nào?', ['Tối hôm trước theo thời khoá biểu', 'Trên đường đến trường', 'Sáng đi học, vừa đi vừa nhét sách', 'Khi vào lớp rồi mới soạn'], 0, 'Tối hôm trước, theo TKB để khỏi quên.'),
    Q('Khi soạn cặp, em cần?', ['Mang hết toàn bộ sách trong giá', 'Kiểm tra đủ sách, vở, đồ dùng học tập theo TKB', 'Chỉ mang vở, không mang sách', 'Nhét bừa cho nhanh'], 1, 'Theo TKB, đủ sách + vở + đồ dùng.'),
    Q('Đồ dùng học tập cơ bản gồm?', ['Đồ ăn vặt nhiều loại', 'Đồ chơi siêu nhân', 'Điện thoại, máy chơi game', 'Bút, thước, tẩy, hộp bút'], 3, 'Bút + thước + tẩy là cơ bản.'),
    Q('Cặp sách quá nặng có thể gây?', ['Đau lưng, lệch vai', 'Không sao cả', 'Thông minh hơn', 'Cao lớn nhanh'], 0, 'Cặp nặng dễ làm cong vẹo cột sống.'),
    Q('Khi quên sách ở nhà, em nên?', ['Bỏ học về nhà lấy ngay', 'Khóc to giữa lớp', 'Mượn bạn nhẹ nhàng và xin lỗi cô', 'Đổ lỗi cho bố mẹ'], 2, 'Tự nhận lỗi, mượn bạn lịch sự.'),
  ]),

  M(8, 'Em yêu gia đình — vai trò mỗi người', [
    Q('Trong gia đình, ai là người sinh ra em?', ['Bố và mẹ', 'Cô giáo', 'Bạn cùng lớp', 'Hàng xóm'], 0, 'Bố mẹ sinh ra và nuôi em khôn lớn.'),
    Q('Ông bà là?', ['Bạn của em', 'Cô giáo em', 'Người lạ', 'Bố mẹ của bố hoặc mẹ em'], 3, 'Ông bà sinh ra bố mẹ em.'),
    Q('Khi bố mẹ đi làm về mệt, em nên?', ['Khóc đòi đi chơi', 'Bật ti vi thật to', 'Đòi mua đồ chơi ngay', 'Lấy nước mời bố mẹ và hỏi thăm'], 3, 'Quan tâm bố mẹ bằng hành động nhỏ.'),
    Q('Câu nào thể hiện tình yêu gia đình?', ['"Con không cần ai"', '"Con yêu cả nhà"', '"Để con yên"', '"Nhà mình chán lắm"'], 1, 'Lời yêu thương là biểu hiện đẹp.'),
    Q('Anh chị em trong nhà nên đối xử thế nào?', ['Tranh giành đồ', 'Không nói chuyện', 'Yêu thương, nhường nhịn nhau', 'Cãi nhau suốt ngày'], 2, 'Nhường nhịn để gia đình hạnh phúc.'),
    Q('Hành động nào là KHÔNG đúng với gia đình?', ['Khoe điểm tốt với bố', 'Hỏi thăm ông bà', 'Giúp mẹ quét nhà', 'Cãi lại bố mẹ to tiếng'], 3, 'Cãi lại to tiếng là vô lễ.'),
  ]),

  M(9, 'Phụ giúp mẹ làm bếp đơn giản', [
    Q('Việc nào em có thể giúp mẹ trong bếp (an toàn)?', ['Cầm dao thái thịt', 'Chiên cá ngập dầu', 'Nhặt rau, vo gạo, lau bàn', 'Bật bếp ga một mình'], 2, 'Việc nhẹ, an toàn với học sinh lớp 2.'),
    Q('Khi mẹ đang nấu, em nên?', ['Đứng xa bếp, không chạy nhảy quanh bếp', 'Đùa nghịch bên cạnh', 'Đẩy mẹ ra để nấu thử', 'Ngồi sát nồi nước sôi'], 0, 'Bếp nóng và dầu sôi rất nguy hiểm.'),
    Q('Trước khi vào bếp giúp mẹ, em nên?', ['Rửa tay sạch', 'Đeo dép bẩn', 'Bôi đất lên tay', 'Cầm sẵn đồ chơi'], 0, 'Vệ sinh tay trước khi tiếp xúc thực phẩm.'),
    Q('Khi không may đổ nước ra sàn bếp, em nên?', ['Đổ thêm cho vui', 'Lau khô ngay để không trơn trượt', 'Bỏ đi chơi', 'Lén giấu mẹ'], 1, 'Lau ngay để tránh trượt ngã.'),
    Q('Bạn nào ngoan?', ['Bạn Bo nghịch dao trong bếp', 'Bạn Lan biết nhặt rau, dọn bàn ăn giúp mẹ', 'Bạn Bi đổ canh ra bàn', 'Bạn Tí kệ mẹ làm hết, chỉ chờ ăn'], 1, 'Biết giúp việc nhỏ là ngoan.'),
  ]),

  M(10, 'Chăm sóc em nhỏ', [
    Q('Khi em bé khóc, em nên?', ['Để mặc em bé khóc', 'Dỗ dành nhẹ nhàng và gọi người lớn', 'Quát em bé thật to', 'Bịt miệng em bé'], 1, 'Dỗ dành và báo người lớn.'),
    Q('Khi chơi với em nhỏ, em chọn đồ chơi nào?', ['Bật lửa', 'Hạt nhỏ dễ nuốt', 'Đồ sắc nhọn', 'Đồ chơi mềm, an toàn'], 3, 'Đồ mềm + an toàn cho em bé.'),
    Q('Em nhỏ đòi ăn kẹo cứng, em làm gì?', ['Bẻ nhỏ viên kẹo rồi cho em ngậm', 'Không tự ý cho, hỏi ý người lớn', 'Cho em ăn thật nhiều', 'Nhét cả viên vào miệng em'], 1, 'Trẻ nhỏ dễ hóc, phải hỏi người lớn.'),
    Q('Khi bế em bé, tư thế đúng là?', ['Vừa bế vừa chạy nhảy', 'Đỡ đầu và lưng em, ngồi yên trên ghế', 'Tung em lên cao', 'Bế ngược đầu xuống'], 1, 'Đầu trẻ sơ sinh cần được đỡ.'),
    Q('Hành vi nào KHÔNG đúng với em nhỏ?', ['Đánh em vì em quấy', 'Trông em khi mẹ đi gần', 'Yêu thương, nhường đồ chơi', 'Hát cho em nghe'], 0, 'Đánh em là sai, phải yêu thương.'),
  ]),

  M(11, 'Quan tâm ông bà', [
    Q('Khi gặp ông bà, em nên?', ['Trêu ông bà', 'Khoanh tay chào lễ phép', 'Chạy thẳng đi chơi', 'Quay đi không nói gì'], 1, 'Khoanh tay chào là lễ phép.'),
    Q('Ông bà ốm, em làm gì?', ['Hỏi thăm và rót nước cho ông bà', 'Bật nhạc thật to', 'Đòi ông bà mua đồ chơi', 'Trốn vào phòng chơi game'], 0, 'Hỏi thăm và giúp việc nhỏ.'),
    Q('Cuối tuần, em có thể làm gì cùng ông bà?', ['Giấu kính của ông', 'Cãi nhau với ông bà', 'Nghe ông bà kể chuyện, đi dạo', 'Lén lấy điện thoại của bà'], 2, 'Kể chuyện + đi dạo là hoạt động đẹp.'),
    Q('Khi ông bà nói chuyện, em nên?', ['Cãi lại', 'Bịt tai', 'Ngắt lời liên tục', 'Lắng nghe và "Vâng ạ"'], 3, '"Vâng ạ" + lắng nghe = lễ phép.'),
    Q('Hành động nào thể hiện yêu ông bà?', ['Lờ đi khi ông bà gọi', 'Cười nhạo ông bà già', 'Quên sinh nhật ông', 'Vẽ tranh tặng ông bà'], 3, 'Tặng tranh là tình cảm chân thành.'),
  ]),

  M(12, 'Em chào hỏi lễ phép với người lớn', [
    Q('Khi gặp cô giáo ở ngoài đường, em nên?', ['Chạy trốn', 'Khoanh tay chào "Em chào cô ạ"', 'Giả vờ không thấy', 'Hét lên gọi cô'], 1, 'Chào lễ phép kèm "ạ".'),
    Q('Khi khách đến nhà, em nên?', ['Lễ phép chào hỏi và mời khách ngồi', 'Nói "ai đấy?" cộc lốc', 'Tắt đèn cho khách về', 'Trốn trong phòng'], 0, 'Chào và mời khách thể hiện gia giáo.'),
    Q('Câu chào nào phù hợp với bác hàng xóm?', ['"Cháu chào bác ạ"', '"Mặc kệ"', '"Ê bác!"', '"Có gì không?"'], 0, '"Cháu chào bác ạ" là lễ phép.'),
    Q('Khi được người lớn cho quà, em nên?', ['Vứt quà đi', 'Nhận bằng hai tay và cảm ơn', 'Cướp lấy quà', 'Chê quà xấu'], 1, 'Nhận hai tay + cảm ơn.'),
    Q('Hành vi nào là KHÔNG lễ phép?', ['Khoanh tay chào', 'Nói trống không với người lớn', 'Thưa gửi rõ ràng', 'Nói cảm ơn khi được giúp'], 1, 'Nói trống không là vô lễ.'),
  ]),

  M(13, 'Em yêu trường lớp — giữ gìn lớp học', [
    Q('Lớp học sạch sẽ là nhờ?', ['Tất cả học sinh và thầy cô cùng giữ gìn', 'Tự nhiên sạch', 'Bố mẹ đến quét', 'Một mình bác lao công'], 0, 'Trách nhiệm chung của cả lớp.'),
    Q('Khi ăn quà vặt trong giờ ra chơi, vỏ bánh em nên?', ['Cho vào thùng rác', 'Nhét gầm bàn', 'Để trên bàn cô giáo', 'Vứt ra sân'], 0, 'Cho vào thùng rác để giữ vệ sinh.'),
    Q('Thấy bạn vẽ bậy lên tường lớp, em nên?', ['Cười cổ vũ', 'Khuyên bạn dừng và báo cô', 'Mặc kệ', 'Vẽ thêm cùng bạn'], 1, 'Khuyên bạn và báo cô.'),
    Q('Cây cảnh trong lớp em nên?', ['Bỏ đói cho chết', 'Bứt lá chơi', 'Tưới nước, chăm sóc', 'Đổ nước nóng vào'], 2, 'Tưới + chăm sóc cây xanh.'),
    Q('Bàn ghế lớp em nên?', ['Khắc tên cho oách', 'Lấy về nhà', 'Đập cho vui', 'Giữ gìn, không vẽ bậy, không đu lên'], 3, 'Giữ gìn tài sản chung.'),
  ]),

  M(14, 'Trực nhật lớp — chia công bằng', [
    Q('Tổ trực nhật cần làm những việc gì?', ['Đứng nhìn', 'Quét lớp, lau bảng, sắp xếp bàn ghế, đổ rác', 'Chơi đùa cho vui', 'Chỉ quét lớp'], 1, 'Trực nhật gồm nhiều việc.'),
    Q('Khi đến lượt trực nhật, em nên?', ['Đẩy việc cho bạn', 'Trốn về sớm', 'Giả vờ ốm', 'Đến sớm và làm phần việc được giao'], 3, 'Tự giác làm phần của mình.'),
    Q('Bạn cùng tổ làm chậm, em nên?', ['Cười nhạo', 'Bỏ mặc bạn', 'Giúp bạn làm cho xong', 'Mách cô'], 2, 'Tinh thần đồng đội: cùng giúp nhau.'),
    Q('Sau khi trực nhật xong, dụng cụ (chổi, hốt rác) nên?', ['Mang về nhà', 'Vứt giữa lớp', 'Giấu trong ngăn bàn', 'Cất đúng nơi quy định'], 3, 'Cất gọn để lần sau dễ tìm.'),
    Q('Việc trực nhật chia thế nào là công bằng?', ['Một bạn làm tất cả', 'Cô giáo làm hết', 'Chỉ con gái mới phải làm', 'Mỗi bạn một phần, luân phiên các tổ'], 3, 'Chia đều và luân phiên.'),
    Q('Câu nào ĐÚNG?', ['Trực nhật không cần thiết.', 'Trực nhật làm em mất thời gian học.', 'Trực nhật giúp em rèn ý thức trách nhiệm.', 'Trực nhật là việc của bác lao công.'], 2, 'Trực nhật rèn trách nhiệm.'),
  ]),

  M(15, 'Giúp đỡ bạn bè trong lớp', [
    Q('Bạn quên bút, em nên?', ['Mách cô để bạn bị phạt', 'Cười chê bạn', 'Giấu bút đi', 'Cho bạn mượn bút nếu em có dư'], 3, 'Chia sẻ là tình bạn.'),
    Q('Bạn bị ngã ở sân trường, em nên?', ['Bỏ đi chơi tiếp', 'Cười nhạo bạn', 'Đẩy bạn ngã thêm', 'Đỡ bạn dậy và báo cô nếu bạn đau'], 3, 'Giúp bạn và báo cô.'),
    Q('Bạn không hiểu bài, em đã hiểu, em nên?', ['Giấu bài không cho bạn xem', 'Mách bạn ngu', 'Giảng lại cho bạn nếu cô cho phép', 'Cười bạn dốt'], 2, 'Giúp bạn cùng tiến bộ.'),
    Q('Hành vi nào KHÔNG đúng với bạn?', ['Nói xấu sau lưng bạn', 'Chia kẹo cho bạn', 'Cùng chơi với bạn', 'Khen bạn khi bạn làm tốt'], 0, 'Nói xấu sau lưng làm tổn thương bạn.'),
    Q('Bạn mới chuyển đến, em nên?', ['Đặt biệt danh xấu', 'Chờ bạn tự bắt chuyện trước rồi mới nói', 'Trêu chọc', 'Chủ động làm quen, giới thiệu lớp'], 3, 'Đón bạn mới với lòng thân thiện.'),
  ]),

  M(16, 'Ứng xử lễ phép với thầy cô', [
    Q('Khi gặp thầy cô trong trường, em nên?', ['Khoanh tay chào lễ phép', 'Chạy qua không chào', 'Hét to "thầy ơi!"', 'Giả vờ không thấy'], 0, 'Chào lễ phép.'),
    Q('Khi thầy cô giảng bài, em nên?', ['Ngủ gật', 'Lắng nghe, ghi chép', 'Nghịch bút', 'Nói chuyện riêng'], 1, 'Chú ý nghe giảng.'),
    Q('Muốn phát biểu, em nên?', ['Nói lớn cắt ngang cô', 'Giơ tay xin phát biểu', 'Đứng phắt dậy nói', 'Đập bàn'], 1, 'Giơ tay là quy định lớp học.'),
    Q('Khi mắc lỗi với thầy cô, em nên?', ['Xin lỗi và sửa sai', 'Khóc nhè không nói gì', 'Đổ lỗi cho bạn', 'Cãi lại'], 0, 'Xin lỗi + sửa sai = trưởng thành.'),
    Q('Câu nào thể hiện lễ phép?', ['"Cô ơi nói nhanh đi"', '"Thưa cô, em hỏi ạ"', '"Ê cô!"', '"Hỏi tí"'], 1, '"Thưa cô" + "ạ" là lễ phép.'),
  ]),

  M(17, 'Tham gia sinh hoạt lớp tích cực', [
    Q('Trong giờ sinh hoạt lớp, em nên?', ['Ngồi im không phát biểu', 'Chỉ nghe cô nói, không cần phát biểu', 'Làm việc riêng', 'Tham gia ý kiến, lắng nghe các bạn'], 3, 'Phát biểu và lắng nghe.'),
    Q('Khi lớp bình bầu khen thưởng, em nên?', ['Bầu cho bạn thân cho dù bạn không tốt', 'Chỉ bầu cho mình', 'Không tham gia', 'Bầu cho bạn xứng đáng, công bằng'], 3, 'Công bằng là nguyên tắc.'),
    Q('Bị bạn phê bình đúng, em nên?', ['Cãi lại', 'Giận bạn', 'Trả thù bạn', 'Tiếp thu và sửa'], 3, 'Tiếp thu góp ý là cầu tiến.'),
    Q('Khi đề xuất hoạt động cho lớp, em chọn?', ['Hoạt động nguy hiểm', 'Hoạt động chỉ mình thích', 'Hoạt động cả lớp cùng tham gia được', 'Hoạt động đắt tiền chỉ bạn giàu chơi được'], 2, 'Hoạt động phù hợp cả lớp.'),
    Q('Lợi ích của sinh hoạt lớp?', ['Mất thời gian', 'Để chơi điện thoại', 'Không có gì', 'Gắn kết tập thể, cùng tiến bộ'], 3, 'Gắn kết tập thể.'),
  ]),

  M(18, 'Sơ kết Học kì 1 — chia sẻ kĩ năng đã có', [
    Q('Sau HK1, em đã biết tự làm việc nào?', ['Chờ mẹ làm hộ tất cả', 'Chỉ ngủ', 'Không làm gì cả', 'Tự đánh răng, rửa mặt, chải tóc'], 3, 'Đó là các kĩ năng tự phục vụ cơ bản.'),
    Q('Khi đi học, em đã biết?', ['Nhờ bố mẹ soạn cặp giúp', 'Soạn cặp theo TKB', 'Quên cặp ở nhà', 'Mang đồ chơi đi học'], 1, 'Soạn cặp là kĩ năng đã rèn.'),
    Q('Trong gia đình, em đã làm được?', ['Đập bát', 'Nhặt rau, lau bàn, chào hỏi ông bà', 'Cãi mẹ', 'Ăn rồi đi chơi'], 1, 'Việc nhà nhỏ là tự lập.'),
    Q('Với bạn bè, em đã biết?', ['Đánh nhau', 'Tranh giành', 'Nói xấu bạn', 'Giúp đỡ và chia sẻ'], 3, 'Giúp đỡ + chia sẻ.'),
    Q('Với thầy cô, em đã biết?', ['Trêu thầy cô', 'Chào lễ phép, lắng nghe', 'Nói trống không', 'Cãi lại'], 1, 'Lễ phép là quan trọng.'),
    Q('Khi giữ vệ sinh lớp học, em đã biết?', ['Vứt rác ra sàn', 'Vẽ bậy lên bàn', 'Phá cây cảnh', 'Trực nhật, bỏ rác đúng chỗ'], 3, 'Giữ vệ sinh lớp học.'),
    Q('Kĩ năng nào em cần cải thiện ở HK2?', ['Lười hơn', 'Tự lập hơn, kiên trì hơn, làm việc nhóm tốt hơn', 'Khóc nhè nhiều hơn', 'Phá phách nhiều hơn'], 1, 'HK2 cần tiến bộ thêm.'),
    Q('Khi nhìn lại HK1, em nên?', ['Quên hết đi', 'Tự hào với việc làm tốt và rút kinh nghiệm với việc chưa tốt', 'Đổ lỗi cho bạn', 'Tự ti, bỏ cuộc'], 1, 'Phản tỉnh là cách trưởng thành.'),
    Q('Chia sẻ trải nghiệm HK1 với gia đình, em nên?', ['Giấu kín', 'Chỉ kể chuyện xấu', 'Không nói gì', 'Kể chuyện vui ở trường, khoe điểm tốt và việc tốt'], 3, 'Chia sẻ để gắn kết gia đình.'),
    Q('Lời chúc nào phù hợp cho cả lớp dịp tổng kết HK1?', ['"Chán quá"', '"Không quan tâm"', '"Chúc cả lớp HK2 tiến bộ và đoàn kết hơn!"', '"Cả lớp dốt quá"'], 2, 'Lời chúc tích cực tạo động lực.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — CỘNG ĐỒNG · TỰ NHIÊN · NGHỀ NGHIỆP ────────────────
  M(19, 'An toàn giao thông (1): Đèn tín hiệu', [
    Q('Đèn giao thông màu ĐỎ nghĩa là?', ['Rẽ phải', 'Đi nhanh', 'Dừng lại', 'Đi chậm'], 2, 'Đỏ = Dừng.'),
    Q('Đèn giao thông màu XANH nghĩa là?', ['Cấm rẽ', 'Đứng yên', 'Đi chậm lại và quan sát hai bên', 'Được đi'], 3, 'Xanh = Được đi.'),
    Q('Đèn giao thông màu VÀNG nghĩa là?', ['Đi nhanh hơn', 'Rẽ trái', 'Quay đầu', 'Chuẩn bị dừng'], 3, 'Vàng = Chuẩn bị dừng.'),
    Q('Khi đèn đỏ, người đi bộ nên?', ['Băng qua đường thật nhanh', 'Chạy ra giữa đường', 'Vẫy tay yêu cầu xe dừng', 'Đứng đợi trên vỉa hè'], 3, 'Đứng đợi trên vỉa hè.'),
    Q('Khi đi cùng người lớn qua ngã tư, em nên?', ['Chạy lung tung', 'Nắm tay người lớn và quan sát đèn', 'Buông tay người lớn', 'Nhắm mắt qua đường'], 1, 'Nắm tay + quan sát đèn.'),
    Q('Hành vi nào ĐÚNG?', ['Đua xe', 'Vượt đèn đỏ vì đường vắng', 'Đi xe lên vỉa hè', 'Dừng đèn đỏ kể cả khi không có xe'], 3, 'Luôn tuân thủ đèn tín hiệu.'),
  ]),

  M(20, 'An toàn giao thông (2): Đi bộ qua đường', [
    Q('Khi qua đường, em nên đi ở đâu?', ['Bất kì chỗ nào tiện', 'Ngã tư không có vạch', 'Giữa đường', 'Vạch kẻ trắng dành cho người đi bộ'], 3, 'Vạch kẻ trắng là nơi an toàn.'),
    Q('Trước khi qua đường, em nên?', ['Quan sát trái – phải – trái và lắng nghe', 'Chạy thật nhanh', 'Vừa qua đường vừa xem điện thoại', 'Nhắm mắt chạy'], 0, 'Trái – phải – trái là quy tắc.'),
    Q('Khi qua đường, tốc độ đi nên?', ['Chạy thật nhanh', 'Đứng giữa đường ngắm cảnh', 'Đi vừa phải, không chạy không đứng lại', 'Bò qua'], 2, 'Đi đều, không chạy không dừng.'),
    Q('Trẻ em qua đường tốt nhất nên?', ['Đi cùng người lớn', 'Tự đi một mình', 'Đi với em bé hơn', 'Đi nhắm mắt'], 0, 'Đi cùng người lớn an toàn nhất.'),
    Q('Khi đi bộ trên đường, em đi ở đâu?', ['Trên mui xe', 'Trên dải phân cách', 'Vỉa hè (hoặc lề đường nếu không có vỉa hè)', 'Giữa lòng đường'], 2, 'Vỉa hè là nơi của người đi bộ.'),
    Q('Hành vi nào NGUY HIỂM?', ['Đi đúng vạch kẻ', 'Nắm tay người lớn', 'Quan sát kĩ trước khi qua', 'Vừa qua đường vừa đeo tai nghe nghe nhạc to'], 3, 'Tai nghe to khiến không nghe được tiếng xe.'),
  ]),

  M(21, 'An toàn giao thông (3): Đội mũ bảo hiểm', [
    Q('Khi ngồi sau xe máy, em phải?', ['Đội mũ bảo hiểm đúng cỡ và cài quai', 'Đội mũ của mẹ rộng thùng thình', 'Đội mũ vải mềm', 'Không cần mũ'], 0, 'Mũ bảo hiểm + cài quai.'),
    Q('Mũ bảo hiểm bảo vệ bộ phận nào?', ['Đầu gối khi bị ngã xe', 'Lưng và cột sống khi va chạm', 'Đầu', 'Bàn tay khi chống xuống đường'], 2, 'Bảo vệ đầu khi va đập.'),
    Q('Quai mũ nên?', ['Buông lủng lẳng', 'Cài chặt vừa đủ, lọt một ngón tay', 'Cài cực chặt nghẹt thở', 'Không cài'], 1, 'Cài vừa khít, lọt 1 ngón tay.'),
    Q('Khi ngồi sau xe máy, tay em nên?', ['Cầm điện thoại', 'Buông xuôi', 'Vẫy bạn', 'Ôm chặt eo hoặc vai người lái'], 3, 'Ôm chắc để không ngã.'),
    Q('Hành vi nào SAI?', ['Ngồi yên trên xe', 'Đứng lên trên yên xe khi xe chạy', 'Đội mũ bảo hiểm đúng cách', 'Cài quai mũ'], 1, 'Đứng trên yên cực kì nguy hiểm.'),
    Q('Nếu mũ bảo hiểm bị nứt vỡ, em nên?', ['Dùng băng dính dán lại', 'Cho em bé đội', 'Vẫn dùng tiếp', 'Báo bố mẹ thay mũ mới'], 3, 'Mũ vỡ không còn bảo vệ được.'),
  ]),

  M(22, 'Phong tục Tết — lì xì, chúc Tết, dọn nhà, mâm ngũ quả', [
    Q('Tết Nguyên đán là Tết của?', ['Chỉ người già', 'Người nước ngoài', 'Chỉ trẻ con', 'Người Việt Nam (theo Âm lịch)'], 3, 'Tết cổ truyền của dân tộc Việt Nam.'),
    Q('Khi được lì xì, em nên?', ['Giật lấy rồi chạy', 'Mở phong bao ngay trước mặt người cho và chê ít', 'Đòi thêm', 'Nhận hai tay, cảm ơn và chúc Tết'], 3, 'Nhận hai tay + cảm ơn + chúc Tết.'),
    Q('Câu chúc Tết phù hợp với ông bà?', ['"Cho cháu tiền"', '"Chúc ông bà sống lâu, mạnh khoẻ"', '"Tết vui không?"', '"Chúc ông bà giàu to"'], 1, 'Chúc sức khoẻ là phù hợp nhất với ông bà.'),
    Q('Trước Tết, em có thể giúp gia đình?', ['Dọn dẹp nhà cửa, lau bàn thờ giúp người lớn', 'Đập vỡ đồ cũ', 'Vẽ bậy lên tường', 'Ngủ cả ngày'], 0, 'Dọn dẹp là phong tục đẹp.'),
    Q('Mâm ngũ quả ngày Tết thường có?', ['Đồ chơi', 'Đúng 1 loại quả', 'Chỉ kẹo bánh', 'Năm loại quả khác nhau'], 3, 'Năm loại quả tượng trưng phú quý.'),
    Q('Mâm ngũ quả miền Bắc thường có loại quả nào?', ['Chỉ có nho', 'Sầu riêng, dưa hấu, chôm chôm, măng cụt', 'Chỉ có táo', 'Chuối, bưởi, quýt, đào, hồng'], 3, 'Miền Bắc thường có chuối + bưởi + quýt + đào + hồng.'),
    Q('Hành vi nào KHÔNG đẹp ngày Tết?', ['Mặc quần áo đẹp đi chúc Tết', 'Mừng tuổi em nhỏ', 'Cãi nhau, làm vỡ đồ và đổ lỗi', 'Chúc Tết người lớn'], 2, 'Tết kiêng cãi nhau, làm đổ vỡ.'),
    Q('Bánh truyền thống ngày Tết miền Bắc?', ['Bánh mì', 'Bánh quy', 'Bánh chưng', 'Bánh ngọt'], 2, 'Bánh chưng vuông tượng Đất.'),
    Q('Khi đi chúc Tết, em mặc?', ['Áo rách', 'Quần áo mới, sạch sẽ, gọn gàng', 'Đồ ngủ', 'Quần áo bẩn'], 1, 'Trang phục gọn gàng + đẹp.'),
    Q('Ý nghĩa của lì xì là?', ['Để so kè ai nhiều hơn', 'Để trẻ giàu', 'Cầu may mắn, bình an cho người được mừng tuổi', 'Để khoe tiền'], 2, 'Lì xì = chúc may mắn, không phải khoe tiền.'),
  ], { difficulty: 2 }),

  M(23, 'Tiết kiệm nước', [
    Q('Khi đánh răng, em nên?', ['Không cần khoá vòi', 'Để vòi chảy đến hết', 'Hứng nước vào cốc, tắt vòi khi chải', 'Mở vòi nước chảy suốt'], 2, 'Dùng cốc + tắt vòi khi chải.'),
    Q('Khi rửa rau, mẹ nên?', ['Dùng nước vô tội vạ', 'Để vòi nước chảy liên tục', 'Không rửa', 'Dùng chậu hứng nước, rửa nhiều lần trong chậu'], 3, 'Dùng chậu tiết kiệm nước.'),
    Q('Vòi nước nhà bị rò, em nên?', ['Mặc kệ', 'Báo bố mẹ sửa ngay', 'Mở vòi to thêm', 'Tháo vòi ra'], 1, 'Báo sửa ngay để khỏi lãng phí.'),
    Q('Nước thải sau khi vo gạo có thể?', ['Đổ đi luôn', 'Tận dụng tưới cây', 'Đổ vào tủ lạnh', 'Đổ ra giường'], 1, 'Nước vo gạo tốt cho cây.'),
    Q('Câu nào ĐÚNG?', ['Nước sạch là nguồn tài nguyên có hạn, cần tiết kiệm.', 'Tiết kiệm nước làm bẩn nhà.', 'Nước trong vòi là vô tận.', 'Càng dùng nhiều nước càng tốt.'], 0, 'Nước sạch là tài nguyên có hạn.'),
    Q('Hành vi nào LÃNG PHÍ nước?', ['Để vòi nước chảy lúc xoa xà phòng', 'Sửa vòi rò', 'Tắm vòi sen thay vì ngâm bồn', 'Khoá vòi khi không dùng'], 0, 'Để vòi chảy khi không cần là lãng phí.'),
  ]),

  M(24, 'Tiết kiệm điện', [
    Q('Khi ra khỏi phòng, em nên?', ['Bật thêm đèn cho sáng', 'Mở cả điều hoà', 'Để đèn sáng suốt ngày', 'Tắt đèn, tắt quạt'], 3, 'Tắt thiết bị khi không dùng.'),
    Q('Ti vi xem xong, em nên?', ['Tắt nguồn hoàn toàn', 'Để chế độ chờ liên tục', 'Đập vào để tắt', 'Bật to hơn'], 0, 'Tắt nguồn để khỏi tốn điện.'),
    Q('Ban ngày trời sáng, em nên?', ['Bật tất cả đèn trong nhà', 'Mở cửa sổ tận dụng ánh sáng tự nhiên', 'Bật thêm đèn nháy', 'Đóng cửa và bật đèn'], 1, 'Tận dụng ánh sáng tự nhiên.'),
    Q('Mở tủ lạnh em nên?', ['Mở suốt cả ngày', 'Lấy nhanh và đóng cửa', 'Mở rồi đi chỗ khác', 'Mở thật lâu để chọn đồ'], 1, 'Đóng nhanh để giữ lạnh.'),
    Q('Tiết kiệm điện có lợi ích gì?', ['Không có lợi ích', 'Để chứng tỏ giàu', 'Để nhà tối tăm', 'Giảm hoá đơn điện và bảo vệ môi trường'], 3, 'Giảm chi phí + bảo vệ môi trường.'),
    Q('Hành vi nào TIẾT KIỆM điện?', ['Tắt đèn khi đi ngủ', 'Bật điều hoà ở 16 độ và mở cửa', 'Sạc điện thoại 24/24 dù pin đầy', 'Để máy tính chạy suốt đêm khi không dùng'], 0, 'Tắt đèn khi đi ngủ.'),
  ]),

  M(25, 'Phân loại rác', [
    Q('Rác hữu cơ là?', ['Vỏ trái cây, rau củ thừa, cơm thừa', 'Vỏ chai nhựa', 'Pin cũ', 'Mảnh kính vỡ'], 0, 'Rác hữu cơ dễ phân huỷ tự nhiên.'),
    Q('Rác tái chế là?', ['Giấy, vỏ chai nhựa, lon nhôm', 'Rau thối', 'Lá cây khô', 'Cơm thừa'], 0, 'Giấy + nhựa + kim loại có thể tái chế.'),
    Q('Pin cũ là loại rác?', ['Rác tái chế thông thường', 'Rác hữu cơ', 'Không phải rác', 'Rác nguy hại (cần thu gom riêng)'], 3, 'Pin chứa kim loại nặng, là rác nguy hại.'),
    Q('Khi uống xong chai nhựa, em nên?', ['Bóp dẹp và bỏ vào thùng rác tái chế', 'Vứt ra đường', 'Ném xuống ao', 'Đốt đi'], 0, 'Tái chế chai nhựa.'),
    Q('Vứt rác bừa bãi gây hậu quả gì?', ['Làm phố đẹp hơn', 'Cây cối tươi tốt', 'Không sao cả', 'Ô nhiễm môi trường, sinh ruồi muỗi, bệnh tật'], 3, 'Ô nhiễm + bệnh tật.'),
    Q('Việc nào em làm được ngay?', ['Đổ rác xuống cống', 'Làm ngơ với rác', 'Đốt rác trong nhà', 'Bỏ rác đúng nơi quy định, phân loại đơn giản tại nhà'], 3, 'Phân loại tại nhà là việc nhỏ + thiết thực.'),
  ]),

  M(26, 'Trồng cây xanh trong lớp/nhà', [
    Q('Cây xanh giúp gì cho không khí?', ['Làm bẩn không khí', 'Không có tác dụng', 'Gây bụi', 'Cung cấp ô-xy, làm không khí trong lành'], 3, 'Cây quang hợp tạo ô-xy.'),
    Q('Để cây sống tốt, em cần?', ['Đặt trong tủ tối', 'Đổ nước nóng', 'Tưới nước đều đặn, đủ nắng', 'Để khô không tưới'], 2, 'Nước + ánh sáng là cơ bản.'),
    Q('Cây trồng trong lớp nên?', ['Cây cổ thụ to lớn', 'Cây nhỏ, dễ chăm', 'Cây có gai sắc', 'Cây độc'], 1, 'Cây nhỏ + an toàn cho lớp học.'),
    Q('Bạn ngắt lá cây trong lớp để chơi, em nên?', ['Mặc kệ', 'Khuyên bạn không ngắt và báo cô nếu cần', 'Cùng ngắt', 'Vỗ tay khen bạn'], 1, 'Khuyên bạn bảo vệ cây.'),
    Q('Trồng cây có lợi ích gì với em?', ['Rèn tính kiên trì, yêu thiên nhiên', 'Mất thời gian', 'Bẩn tay', 'Tốn tiền'], 0, 'Trồng cây dạy kiên trì + yêu thiên nhiên.'),
    Q('Lá vàng rụng từ cây em chăm có thể?', ['Bỏ vào ngăn bàn', 'Ủ làm phân bón cho cây', 'Đốt trong lớp', 'Vứt ra đường'], 1, 'Lá rụng có thể ủ phân tự nhiên.'),
  ]),

  M(27, 'Yêu cây cối, động vật xung quanh', [
    Q('Em thấy bạn dẫm lên hoa trong vườn trường, em nên?', ['Ngắt một bông hoa khác để thay thế', 'Cùng dẫm', 'Cười khen bạn', 'Khuyên bạn dừng lại'], 3, 'Khuyên bạn yêu hoa cỏ.'),
    Q('Thấy chú chó hàng xóm bị thương, em nên?', ['Đá thêm', 'Bỏ mặc', 'Báo người lớn để giúp chú chó', 'Trêu chú chó'], 2, 'Báo người lớn giúp.'),
    Q('Bạn bắt côn trùng làm đồ chơi rồi vứt, em nên?', ['Bỏ chạy', 'Khuyên bạn không bắt, thả côn trùng về tự nhiên', 'Cùng bắt', 'Cổ vũ bạn'], 1, 'Thả côn trùng về tự nhiên.'),
    Q('Hành vi nào YÊU động vật?', ['Bỏ đói thú nuôi', 'Cho thú nuôi ăn đúng giờ', 'Nhốt chim vào lồng nhỏ chật', 'Đánh thú nuôi khi giận'], 1, 'Chăm sóc đúng cách.'),
    Q('Cây xanh, động vật là?', ['Bạn của con người', 'Đồ vô tri không cần quan tâm', 'Đồ dùng tuỳ tiện', 'Đồ chơi'], 0, 'Là bạn, cần yêu thương.'),
  ]),

  M(28, 'Bảo vệ môi trường khu phố', [
    Q('Em thấy người lớn vứt rác ra đường, em nên?', ['Vẽ bậy lên đường', 'Bỏ mặc', 'Nhặt rác bỏ vào thùng (nếu an toàn) và nói với bố mẹ', 'Cùng vứt'], 2, 'Nhặt rác + báo người lớn.'),
    Q('Khu phố sạch là nhờ?', ['Mưa rửa sạch', 'Một mình bác lao công', 'Mọi người cùng giữ gìn', 'Tự nhiên sạch'], 2, 'Trách nhiệm chung.'),
    Q('Ngày Chủ nhật xanh ở khu phố, em nên?', ['Cùng bố mẹ tham gia dọn dẹp', 'Cản trở mọi người', 'Đứng nhìn', 'Ngủ cả ngày'], 0, 'Tham gia cùng cộng đồng.'),
    Q('Khi đi dạo, vỏ kẹo của em em làm gì?', ['Ném vào bụi cây', 'Cho vào túi mang về bỏ thùng rác', 'Nhét vào lỗ tường', 'Vứt xuống cống'], 1, 'Mang về bỏ thùng rác.'),
    Q('Câu nào ĐÚNG?', ['Khu phố bẩn không ảnh hưởng ai.', 'Trẻ em không cần quan tâm môi trường.', 'Khu phố sạch giúp mọi người khoẻ mạnh.', 'Bảo vệ môi trường là việc của riêng người lớn.'], 2, 'Khu phố sạch = sức khoẻ chung.'),
  ]),

  M(29, 'Nghề nghiệp (1): Bác sĩ — chữa bệnh', [
    Q('Bác sĩ làm công việc gì?', ['Khám và chữa bệnh cho mọi người', 'Lái xe', 'Trồng lúa', 'Dạy học'], 0, 'Bác sĩ chữa bệnh.'),
    Q('Bác sĩ thường làm việc ở đâu?', ['Cánh đồng', 'Trường học', 'Công trường', 'Bệnh viện, phòng khám'], 3, 'Bệnh viện + phòng khám.'),
    Q('Khi đi khám bệnh, em nên?', ['Nói lung tung', 'Khóc và chạy ra ngoài', 'Trả lời thật về triệu chứng', 'Giấu giếm bệnh'], 2, 'Trả lời thật để bác sĩ chẩn đoán đúng.'),
    Q('Để trở thành bác sĩ, cần?', ['Học giỏi và học rất nhiều năm về y học', 'Chơi game giỏi', 'Không cần học', 'Chỉ cần nhìn ti vi'], 0, 'Học y mất nhiều năm.'),
    Q('Đức tính cần có của bác sĩ?', ['Vô tâm', 'Yêu thương người bệnh, kiên nhẫn, cẩn thận', 'Lười biếng', 'Hấp tấp'], 1, 'Y đức là yêu thương + cẩn thận.'),
    Q('Khi gặp bác sĩ ngoài đường, em nên?', ['Giả vờ không nhìn thấy vì ngại', 'Trêu chọc', 'Bỏ chạy', 'Chào lễ phép'], 3, 'Chào lễ phép như mọi người lớn khác.'),
  ]),

  M(30, 'Nghề nghiệp (2): Giáo viên — dạy học', [
    Q('Giáo viên làm công việc gì?', ['Dạy học, dạy làm người', 'Xây nhà', 'Trồng lúa', 'Khám bệnh'], 0, 'Giáo viên dạy học.'),
    Q('Để trở thành giáo viên, cần?', ['Học sư phạm, giỏi chuyên môn và yêu trẻ', 'Chỉ cần đẹp trai/xinh gái', 'Chỉ cần biết hét to', 'Không cần học'], 0, 'Học sư phạm + yêu trẻ.'),
    Q('Để biết ơn thầy cô, em nên?', ['Trốn học', 'Quên thầy cô', 'Học chăm, lễ phép, chúc mừng ngày 20/11', 'Cãi lại thầy cô'], 2, 'Học chăm + lễ phép.'),
    Q('Ngày Nhà giáo Việt Nam là ngày?', ['1/6', '8/3', '2/9', '20/11'], 3, '20/11 là ngày của thầy cô.'),
    Q('Đức tính cần có của giáo viên?', ['Lười dạy', 'Kiên nhẫn, công bằng, yêu thương học trò', 'Thiên vị', 'Nóng nảy'], 1, 'Kiên nhẫn + công bằng.'),
    Q('Khi cô giảng bài, em nên?', ['Nghịch điện thoại', 'Chú ý nghe, ghi chép', 'Nói chuyện riêng', 'Ngủ gật'], 1, 'Chú ý nghe giảng = tôn trọng cô.'),
  ]),

  M(31, 'Nghề nghiệp (3): Nông dân — trồng lúa', [
    Q('Nông dân làm công việc gì?', ['Dạy học', 'Trồng lúa, trồng rau, nuôi cá', 'Khám bệnh', 'Xây nhà'], 1, 'Nông dân làm ra lương thực.'),
    Q('Hạt gạo em ăn hàng ngày là từ?', ['Từ siêu thị tự sinh ra', 'Cây lúa do nông dân trồng', 'Trong tủ lạnh mọc ra', 'Trên trời rơi xuống'], 1, 'Lúa → gạo → cơm.'),
    Q('Khi ăn cơm, em nên?', ['Ăn hết, không để rơi vãi', 'Vứt cơm vào sọt rác', 'Đùa nghịch với cơm', 'Đổ cơm thừa đi'], 0, 'Trân trọng công sức nông dân.'),
    Q('Nghề nông gặp khó khăn nào?', ['Thời tiết nắng mưa thất thường, vất vả ngoài đồng', 'Lương cao nhất xã hội', 'Quá nhàn', 'Không cần làm gì'], 0, 'Nông dân vất vả ngoài đồng.'),
    Q('Câu ca dao nào nói về nông dân?', ['"Trời mưa lâm thâm"', '"Một đàn cò trắng phau phau"', '"Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt đắng cay muôn phần"', '"Con cò bé bé"'], 2, 'Câu ca dao nhắc trân trọng nông dân.'),
    Q('Hành vi tôn trọng nông dân?', ['Vứt cơm ra sàn', 'Chê cơm dở', 'Quý hạt gạo, không lãng phí thức ăn', 'Chê người làm ruộng'], 2, 'Quý hạt gạo = tôn trọng nông dân.'),
  ]),

  M(32, 'Nghề nghiệp (4): Công an — giữ an ninh', [
    Q('Công an làm công việc gì?', ['Dạy học', 'Khám bệnh', 'Trồng lúa', 'Giữ an ninh, bảo vệ nhân dân'], 3, 'Công an giữ an ninh.'),
    Q('Khi bị lạc đường, em nên?', ['Tìm chú công an hoặc bảo vệ nhờ giúp', 'Trốn vào bụi cây', 'Khóc và chạy lung tung', 'Đi theo người lạ'], 0, 'Tìm công an / bảo vệ là an toàn nhất.'),
    Q('Khi gặp chú công an, em nên?', ['Đi vòng sang đường khác để tránh chú', 'Trêu chú', 'Bỏ chạy', 'Chào lễ phép'], 3, 'Chào lễ phép.'),
    Q('Số điện thoại khẩn cấp của công an là?', ['119', '115', '114', '113'], 3, '113 = công an; 114 = cứu hoả; 115 = cấp cứu.'),
    Q('Đức tính cần có của công an?', ['Thiên vị', 'Dũng cảm, kỉ luật, công bằng', 'Lười nhác', 'Nhút nhát'], 1, 'Dũng cảm + kỉ luật + công bằng.'),
    Q('Khi thấy người lạ nói "Đi theo chú" mà không có bố mẹ, em nên?', ['Đi theo ngay', 'Cho người lạ địa chỉ nhà', 'Im lặng đi theo', 'Không đi, chạy về phía đông người và báo công an/người lớn tin tưởng'], 3, 'Không đi theo người lạ.'),
  ]),

  M(33, 'Nghề nghiệp (5): Kĩ sư — xây dựng, sửa máy móc', [
    Q('Kĩ sư làm công việc gì?', ['Dạy học', 'Trồng lúa', 'Thiết kế, xây dựng nhà cửa, cầu đường, máy móc', 'Khám bệnh'], 2, 'Kĩ sư xây + sửa máy + thiết kế.'),
    Q('Ngôi nhà em đang ở do ai thiết kế?', ['Giáo viên', 'Bác sĩ', 'Kĩ sư xây dựng và kiến trúc sư', 'Nông dân'], 2, 'Kĩ sư + kiến trúc sư thiết kế nhà.'),
    Q('Để trở thành kĩ sư, em cần học giỏi môn gì?', ['Chỉ học hát', 'Toán, Khoa học', 'Không cần học', 'Chỉ học vẽ'], 1, 'Toán + Khoa học là nền tảng kĩ thuật.'),
    Q('Khi đi qua công trình xây dựng, em nên?', ['Nhặt vật liệu mang về', 'Trèo lên giàn giáo', 'Đi xa ra, đội mũ nếu được, cẩn thận vật rơi', 'Đứng sát công trình ngắm nghía'], 2, 'Tránh xa, đề phòng tai nạn.'),
    Q('Đức tính cần có của kĩ sư?', ['Cẩu thả', 'Vô trách nhiệm', 'Cẩn thận, sáng tạo, ham học', 'Lười nghĩ'], 2, 'Cẩn thận + sáng tạo + ham học.'),
    Q('Câu nào ĐÚNG?', ['Nông dân là nghề kém', 'Mỗi nghề đều quan trọng và đáng quý', 'Nghề kĩ sư hơn nghề nông', 'Chỉ bác sĩ là nghề tốt'], 1, 'Không nghề nào hơn nghề nào.'),
  ]),

  M(34, 'Em ước mơ làm gì?', [
    Q('Ước mơ là gì?', ['Điều em mong muốn đạt được trong tương lai', 'Lời nói dối', 'Một loại bánh', 'Mệnh lệnh của bố mẹ'], 0, 'Ước mơ định hướng tương lai.'),
    Q('Khi nói về ước mơ với bạn, em nên?', ['Chê ước mơ của bạn', 'Cười nhạo ước mơ của bạn', 'Ép bạn theo ước mơ của em', 'Tôn trọng ước mơ của bạn dù khác mình'], 3, 'Mỗi người có ước mơ riêng.'),
    Q('Để thực hiện ước mơ, em cần?', ['Học chăm, rèn luyện, kiên trì', 'Ngồi chờ', 'Mơ rồi quên', 'Đòi bố mẹ làm hộ'], 0, 'Học + rèn luyện + kiên trì.'),
    Q('Bạn ước mơ làm ca sĩ nhưng hát chưa hay, em nên?', ['Bảo bạn bỏ ước mơ', 'Cười chê', 'Động viên bạn luyện tập thêm', 'Mặc kệ'], 2, 'Động viên thay vì chê.'),
    Q('Ước mơ nào nên TRÁNH?', ['Ước mơ trở thành giáo viên', 'Ước mơ làm nhà khoa học', 'Ước mơ trở thành bác sĩ giỏi', 'Ước mơ trở thành kẻ trộm giàu có'], 3, 'Ước mơ phải tích cực, không vi phạm pháp luật.'),
    Q('Vẽ tranh ước mơ là cách?', ['Bị điểm kém', 'Thể hiện và nhớ về ước mơ của mình', 'Lãng phí giấy', 'Không có ích'], 1, 'Vẽ giúp em hình dung và ghi nhớ.'),
  ]),

  M(35, 'Sinh hoạt câu lạc bộ — em chọn hoạt động yêu thích', [
    Q('Câu lạc bộ là?', ['Lớp học bắt buộc', 'Cuộc thi đấu', 'Nhóm các bạn cùng sở thích sinh hoạt định kì', 'Một loại bánh'], 2, 'CLB = nhóm cùng sở thích.'),
    Q('Khi chọn CLB, em nên?', ['Chọn theo bố mẹ ép', 'Không chọn gì', 'Chọn theo bạn thân', 'Chọn theo sở thích và năng lực của mình'], 3, 'Theo sở thích + năng lực bản thân.'),
    Q('Trong CLB, em nên?', ['Đoàn kết, tích cực tham gia', 'Khoe khoang', 'Phá rối', 'Đứng nhìn'], 0, 'Đoàn kết + tích cực.'),
    Q('CLB nào phù hợp với học sinh thích sách?', ['CLB bóng đá', 'CLB cờ vua', 'CLB đọc sách', 'CLB bơi lội'], 2, 'Theo sở thích đọc sách.'),
    Q('Khi không hợp với CLB đã chọn, em nên?', ['Đi học mà không tham gia', 'Trao đổi với cô và xin chuyển sang CLB phù hợp', 'Phá lớp CLB', 'Bỏ ngang giữa chừng không nói gì'], 1, 'Trao đổi và xin chuyển đúng quy trình.'),
    Q('Lợi ích lớn nhất của tham gia CLB?', ['Không có lợi ích', 'Phát triển sở thích, kết bạn mới, tự tin hơn', 'Mệt người', 'Tốn tiền'], 1, 'Phát triển sở thích + kết bạn.'),
  ]),

  M(36, 'Tổng kết cuối năm — chia sẻ trải nghiệm', [
    Q('Sau một năm Lớp 2, em đã học được điều gì về bản thân?', ['Chỉ biết chơi', 'Lười hơn trước', 'Tự phục vụ: vệ sinh, ăn mặc, soạn cặp', 'Không học được gì'], 2, 'Kĩ năng tự phục vụ là cốt lõi.'),
    Q('Em đã học được gì về gia đình?', ['Đòi đồ chơi', 'Cãi nhau với mọi người', 'Không quan tâm ai', 'Yêu thương, biết giúp việc nhỏ, lễ phép với ông bà'], 3, 'Tình cảm + giúp việc + lễ phép.'),
    Q('Em đã học được gì về nhà trường?', ['Vẽ bậy lên bàn', 'Cãi cô', 'Trêu bạn', 'Trực nhật, giữ vệ sinh, lễ phép với thầy cô, giúp bạn'], 3, 'Văn hoá học đường.'),
    Q('Em đã học được gì về cộng đồng và môi trường?', ['Phân loại rác, tiết kiệm điện nước, ATGT', 'Lãng phí điện', 'Vượt đèn đỏ', 'Vứt rác lung tung'], 0, 'Công dân nhỏ có ý thức.'),
    Q('Em đã biết những nghề nghiệp nào?', ['Chỉ biết game thủ', 'Bác sĩ, giáo viên, nông dân, công an, kĩ sư', 'Không biết nghề nào', 'Chỉ biết nghề ca sĩ'], 1, 'Năm nghề đã học trong HK2.'),
    Q('Trải nghiệm em nhớ nhất nên?', ['Là chuyện trốn học', 'Là chuyện đánh nhau', 'Là kỉ niệm tích cực để kể với gia đình', 'Là chuyện xấu'], 2, 'Kỉ niệm tích cực để chia sẻ.'),
    Q('Khi chia sẻ trải nghiệm trước lớp, em nên?', ['Nói rõ ràng, tự tin, lắng nghe bạn chia sẻ', 'Lí nhí', 'Quay lưng lại', 'Cướp lời bạn'], 0, 'Rõ ràng + lắng nghe.'),
    Q('Khi nghe bạn chia sẻ trải nghiệm, em nên?', ['Bỏ ra ngoài', 'Cười nhạo', 'Lắng nghe, vỗ tay khích lệ', 'Nói chuyện riêng'], 2, 'Tôn trọng người nói.'),
    Q('Mục tiêu cho Lớp 3 sắp tới của em?', ['Lười hơn', 'Tự lập hơn, học giỏi hơn, yêu thương mọi người hơn', 'Bỏ học', 'Cãi bố mẹ nhiều hơn'], 1, 'Đặt mục tiêu tích cực.'),
    Q('Lời cảm ơn nào phù hợp cuối năm học?', ['"Chán quá rồi"', '"Không cảm ơn ai"', '"Em cảm ơn thầy cô và các bạn đã giúp em trong năm học vừa qua"', '"Tự em làm hết"'], 2, 'Biết ơn là phẩm chất đẹp.'),
  ], { difficulty: 3 }),
];

export const P2HDTN_SCENARIOS = indexBy(P2HDTN_WEEKS);
