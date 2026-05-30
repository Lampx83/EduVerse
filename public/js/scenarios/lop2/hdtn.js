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
    Q('Khi tự giới thiệu trước lớp, em nên bắt đầu bằng câu nào?', [
      'Tao tên là…',
      'Em chào cô và các bạn, em tên là…',
      'Ờ thì tên tao là…',
      'Hỏi gì mà hỏi!',
    ], 1, 'Lời chào lễ phép rồi mới giới thiệu tên.'),
    Q('Khi giới thiệu, giọng nói của em nên thế nào?', [
      'Quát thật to cho oai',
      'Lí nhí trong miệng',
      'Rõ ràng, đủ nghe, tự tin',
      'Vừa nói vừa cười nhăn nhở',
    ], 2, 'Giọng rõ ràng, đủ nghe và tự tin là phù hợp.'),
    Q('Thông tin nào KHÔNG cần giới thiệu trước lớp ở Lớp 2?', [
      'Tên em',
      'Sở thích của em',
      'Mật khẩu điện thoại của bố mẹ',
      'Tên lớp em đang học',
    ], 2, 'Thông tin riêng tư như mật khẩu không được chia sẻ.'),
    Q('Khi bạn đang giới thiệu, em nên?', [
      'Nói chuyện riêng',
      'Lắng nghe và vỗ tay khi bạn nói xong',
      'Trêu chọc bạn',
      'Quay lưng lại',
    ], 1, 'Lắng nghe là tôn trọng bạn.'),
    Q('Em hãy chọn câu giới thiệu sở thích phù hợp:', [
      'Em thích đọc truyện và vẽ tranh.',
      'Em thích đánh nhau.',
      'Em thích ăn vạ.',
      'Em thích nói xấu bạn.',
    ], 0, 'Sở thích lành mạnh, tích cực.'),
  ]),

  M(2, 'Đôi tay sạch sẽ — rửa tay đúng cách', [
    Q('Em cần rửa tay khi nào?', [
      'Trước khi ăn và sau khi đi vệ sinh',
      'Khi tay đã sạch sẵn',
      'Chỉ rửa khi mẹ nhắc',
      'Một tuần một lần',
    ], 0, 'Trước khi ăn và sau khi đi vệ sinh là bắt buộc.'),
    Q('Rửa tay đúng cách cần dùng gì?', [
      'Chỉ nước lã',
      'Xà phòng và nước sạch',
      'Nước rửa bát đặc',
      'Khăn ướt thay luôn',
    ], 1, 'Xà phòng + nước sạch giúp diệt khuẩn tốt nhất.'),
    Q('Thời gian xoa xà phòng tối thiểu nên là?', [
      '2 giây',
      'Khoảng 20 giây (hát "Happy Birthday" 2 lần)',
      'Khoảng 5 phút',
      'Không cần xoa, vảy nước là được',
    ], 1, 'Khoảng 20 giây đủ để loại vi khuẩn.'),
    Q('Sau khi rửa tay, em nên?', [
      'Lau bằng khăn sạch hoặc giấy sạch',
      'Lau vào áo của bạn',
      'Lau vào quần đang mặc',
      'Để ướt rồi sờ vào thức ăn',
    ], 0, 'Lau khô bằng khăn/giấy sạch.'),
    Q('Hành động nào KHÔNG đúng khi rửa tay?', [
      'Chà kĩ kẽ ngón tay',
      'Rửa cả cổ tay',
      'Mở vòi nước thật to và xả không khoá lúc xoa xà phòng',
      'Xoa lòng bàn tay',
    ], 2, 'Cần khoá vòi khi xoa xà phòng để tiết kiệm nước.'),
    Q('Tay bẩn mà em vẫn ăn bánh thì có thể bị?', [
      'Khoẻ hơn',
      'Đau bụng, nhiễm khuẩn',
      'Cao lớn nhanh',
      'Mọc răng đẹp',
    ], 1, 'Vi khuẩn vào miệng gây bệnh tiêu hoá.'),
  ]),

  M(3, 'Đánh răng đúng cách (sáng + tối)', [
    Q('Mỗi ngày em nên đánh răng mấy lần?', [
      '1 lần khi nào nhớ',
      'Ít nhất 2 lần: sáng và tối',
      '5 lần',
      'Không cần đánh',
    ], 1, 'Sáng sau ngủ dậy và tối trước khi đi ngủ.'),
    Q('Khi đánh răng, em chải theo chiều nào là đúng?', [
      'Chải ngang qua lại thật mạnh',
      'Chải dọc và xoay tròn nhẹ nhàng',
      'Cắn bàn chải',
      'Chỉ chải răng cửa',
    ], 1, 'Chải dọc + xoay tròn bảo vệ men răng và lợi.'),
    Q('Bàn chải đánh răng của em nên?', [
      'Dùng chung với cả nhà',
      'Là bàn chải riêng, thay 3 tháng một lần',
      'Dùng đến khi gãy hết lông',
      'Mượn của bạn',
    ], 1, 'Mỗi người một bàn chải riêng, thay định kì.'),
    Q('Sau khi ăn kẹo ngọt, em nên?', [
      'Đi ngủ luôn',
      'Súc miệng hoặc đánh răng',
      'Ăn thêm kẹo',
      'Uống nước ngọt',
    ], 1, 'Đường gây sâu răng, cần làm sạch.'),
    Q('Ý nào KHÔNG đúng về đánh răng?', [
      'Giúp răng trắng sạch',
      'Phòng sâu răng',
      'Hơi thở thơm tho',
      'Đánh càng mạnh càng tốt cho lợi',
    ], 3, 'Đánh quá mạnh làm chảy máu lợi.'),
  ]),

  M(4, 'Mặc quần áo gọn gàng', [
    Q('Trước khi đi học, em nên?', [
      'Tự kiểm tra quần áo phẳng phiu',
      'Mặc nguyên đồ ngủ nhăn nhúm',
      'Chờ bố mẹ mặc hộ',
      'Không cài cúc cho thoải mái',
    ], 0, 'Tự kiểm tra để gọn gàng, lịch sự.'),
    Q('Áo bị bẩn thì em nên?', [
      'Mặc tiếp đến tuần sau',
      'Bỏ vào giỏ giặt, thay áo sạch',
      'Giấu vào gầm giường',
      'Vứt ra sân',
    ], 1, 'Cho vào giỏ giặt và thay áo sạch.'),
    Q('Khi áo bị tuột cúc, em làm gì?', [
      'Mặc luôn cho nhanh',
      'Nhờ người lớn đính lại hoặc tự đính nếu được',
      'Xé luôn cho rách',
      'Mặc trái áo cho khỏi thấy',
    ], 1, 'Nhờ người lớn giúp đính cúc.'),
    Q('Hành động nào là gọn gàng?', [
      'Áo bỏ ngoài quần lệch một bên',
      'Áo sơ vin ngay ngắn, đi giày sạch',
      'Tóc tai bù xù',
      'Cổ áo bẻ ngược',
    ], 1, 'Áo sơ vin ngay ngắn là gọn gàng.'),
    Q('Lợi ích của việc mặc gọn gàng?', [
      'Được mọi người quý mến, lịch sự',
      'Để khoe của',
      'Để chê bạn',
      'Để ăn được nhiều hơn',
    ], 0, 'Lịch sự và được yêu quý.'),
  ]),

  M(5, 'Em tự chải tóc', [
    Q('Buổi sáng trước khi đi học, em nên?', [
      'Tự chải tóc gọn gàng',
      'Để tóc rối bù',
      'Cắt tóc cho mình bằng kéo',
      'Bôi keo lung tung',
    ], 0, 'Tự chải tóc thể hiện em tự lập.'),
    Q('Khi tóc dài bị rối, em nên?', [
      'Giật mạnh cho đứt',
      'Chải từ ngọn lên dần, nhẹ nhàng',
      'Cắt phăng đi',
      'Bỏ luôn',
    ], 1, 'Chải từ ngọn lên gốc để gỡ rối.'),
    Q('Lược của em nên?', [
      'Dùng chung với người khác',
      'Là lược riêng, giữ sạch sẽ',
      'Ngâm vào nước nóng cả ngày',
      'Để dưới gầm giường',
    ], 1, 'Lược riêng, sạch để tránh bệnh.'),
    Q('Sau khi chải xong, em nên?', [
      'Vứt tóc rụng ra sàn',
      'Bỏ tóc rụng vào thùng rác',
      'Để tóc rụng trên ghế',
      'Nhét vào ngăn bàn',
    ], 1, 'Tóc rụng cho vào thùng rác để giữ vệ sinh.'),
    Q('Bạn nào tự lập?', [
      'Bạn An tự chải tóc và buộc tóc gọn',
      'Bạn Bo bắt mẹ chải hộ mỗi ngày dù đã lớp 2',
      'Bạn Cốm không bao giờ chải đầu',
      'Bạn Đan lấy lược của em chải tóc mình',
    ], 0, 'Tự chải tóc là biểu hiện tự lập.'),
  ]),

  M(6, 'Cất đồ dùng đúng chỗ', [
    Q('Sau khi học xong, sách vở em nên?', [
      'Vứt khắp bàn',
      'Sắp xếp gọn vào giá sách/cặp',
      'Để dưới sàn',
      'Đặt lên ghế',
    ], 1, 'Sắp xếp gọn để dễ tìm.'),
    Q('Giày dép sau khi vào nhà nên?', [
      'Để giữa lối đi',
      'Xếp ngay ngắn trên giá giày',
      'Ném vào góc nhà',
      'Để trên bàn ăn',
    ], 1, 'Xếp giày trên giá ngay ngắn.'),
    Q('Đồ chơi sau khi chơi xong em nên?', [
      'Để mẹ dọn',
      'Tự cất vào hộp/giỏ đồ chơi',
      'Vứt ra sân',
      'Giấu dưới chăn',
    ], 1, 'Tự cất đồ chơi là tự lập.'),
    Q('Lợi ích của việc cất đồ đúng chỗ?', [
      'Dễ tìm, nhà gọn, không bị mất',
      'Để khoe nhiều đồ',
      'Để bố mẹ mua thêm đồ mới',
      'Không có lợi ích gì',
    ], 0, 'Gọn gàng + dễ tìm + không mất đồ.'),
    Q('Bạn Nam vừa làm bài xong vứt bút trên ghế. Em góp ý?', [
      'Mặc kệ Nam',
      'Cười nhạo Nam',
      'Nhắc Nam cất bút vào hộp bút',
      'Lấy luôn bút của Nam',
    ], 2, 'Nhắc bạn cất gọn là góp ý chân thành.'),
    Q('Câu nào ĐÚNG?', [
      'Nhà gọn gàng giúp tinh thần thoải mái.',
      'Càng bừa càng vui.',
      'Không cần cất đồ vì mai lại dùng.',
      'Cất đồ là việc của mẹ.',
    ], 0, 'Nhà gọn → tâm trạng tốt.'),
  ]),

  M(7, 'Chuẩn bị cặp sách đi học', [
    Q('Em nên soạn cặp đi học vào lúc nào?', [
      'Tối hôm trước theo thời khoá biểu',
      'Sáng đi học, vừa đi vừa nhét sách',
      'Trên đường đến trường',
      'Khi vào lớp rồi mới soạn',
    ], 0, 'Tối hôm trước, theo TKB để khỏi quên.'),
    Q('Khi soạn cặp, em cần?', [
      'Nhét bừa cho nhanh',
      'Kiểm tra đủ sách, vở, đồ dùng học tập theo TKB',
      'Mang hết toàn bộ sách trong giá',
      'Chỉ mang vở, không mang sách',
    ], 1, 'Theo TKB, đủ sách + vở + đồ dùng.'),
    Q('Đồ dùng học tập cơ bản gồm?', [
      'Bút, thước, tẩy, hộp bút',
      'Điện thoại, máy chơi game',
      'Đồ ăn vặt nhiều loại',
      'Đồ chơi siêu nhân',
    ], 0, 'Bút + thước + tẩy là cơ bản.'),
    Q('Cặp sách quá nặng có thể gây?', [
      'Cao lớn nhanh',
      'Đau lưng, lệch vai',
      'Thông minh hơn',
      'Không sao cả',
    ], 1, 'Cặp nặng dễ làm cong vẹo cột sống.'),
    Q('Khi quên sách ở nhà, em nên?', [
      'Đổ lỗi cho bố mẹ',
      'Mượn bạn nhẹ nhàng và xin lỗi cô',
      'Khóc to giữa lớp',
      'Bỏ học về nhà lấy ngay',
    ], 1, 'Tự nhận lỗi, mượn bạn lịch sự.'),
  ]),

  M(8, 'Em yêu gia đình — vai trò mỗi người', [
    Q('Trong gia đình, ai là người sinh ra em?', [
      'Cô giáo',
      'Bố và mẹ',
      'Hàng xóm',
      'Bạn cùng lớp',
    ], 1, 'Bố mẹ sinh ra và nuôi em khôn lớn.'),
    Q('Ông bà là?', [
      'Người lạ',
      'Bố mẹ của bố hoặc mẹ em',
      'Bạn của em',
      'Cô giáo em',
    ], 1, 'Ông bà sinh ra bố mẹ em.'),
    Q('Khi bố mẹ đi làm về mệt, em nên?', [
      'Đòi mua đồ chơi ngay',
      'Lấy nước mời bố mẹ và hỏi thăm',
      'Bật ti vi thật to',
      'Khóc đòi đi chơi',
    ], 1, 'Quan tâm bố mẹ bằng hành động nhỏ.'),
    Q('Câu nào thể hiện tình yêu gia đình?', [
      '"Con yêu cả nhà"',
      '"Nhà mình chán lắm"',
      '"Con không cần ai"',
      '"Để con yên"',
    ], 0, 'Lời yêu thương là biểu hiện đẹp.'),
    Q('Anh chị em trong nhà nên đối xử thế nào?', [
      'Cãi nhau suốt ngày',
      'Yêu thương, nhường nhịn nhau',
      'Tranh giành đồ',
      'Không nói chuyện',
    ], 1, 'Nhường nhịn để gia đình hạnh phúc.'),
    Q('Hành động nào là KHÔNG đúng với gia đình?', [
      'Cãi lại bố mẹ to tiếng',
      'Giúp mẹ quét nhà',
      'Hỏi thăm ông bà',
      'Khoe điểm tốt với bố',
    ], 0, 'Cãi lại to tiếng là vô lễ.'),
  ]),

  M(9, 'Phụ giúp mẹ làm bếp đơn giản', [
    Q('Việc nào em có thể giúp mẹ trong bếp (an toàn)?', [
      'Bật bếp ga một mình',
      'Nhặt rau, vo gạo, lau bàn',
      'Chiên cá ngập dầu',
      'Cầm dao thái thịt',
    ], 1, 'Việc nhẹ, an toàn với học sinh lớp 2.'),
    Q('Khi mẹ đang nấu, em nên?', [
      'Đứng xa bếp, không chạy nhảy quanh bếp',
      'Đẩy mẹ ra để nấu thử',
      'Ngồi sát nồi nước sôi',
      'Đùa nghịch bên cạnh',
    ], 0, 'Bếp nóng và dầu sôi rất nguy hiểm.'),
    Q('Trước khi vào bếp giúp mẹ, em nên?', [
      'Rửa tay sạch',
      'Bôi đất lên tay',
      'Đeo dép bẩn',
      'Cầm sẵn đồ chơi',
    ], 0, 'Vệ sinh tay trước khi tiếp xúc thực phẩm.'),
    Q('Khi không may đổ nước ra sàn bếp, em nên?', [
      'Bỏ đi chơi',
      'Lau khô ngay để không trơn trượt',
      'Lén giấu mẹ',
      'Đổ thêm cho vui',
    ], 1, 'Lau ngay để tránh trượt ngã.'),
    Q('Bạn nào ngoan?', [
      'Bạn Lan biết nhặt rau, dọn bàn ăn giúp mẹ',
      'Bạn Tí kệ mẹ làm hết, chỉ chờ ăn',
      'Bạn Bo nghịch dao trong bếp',
      'Bạn Bi đổ canh ra bàn',
    ], 0, 'Biết giúp việc nhỏ là ngoan.'),
  ]),

  M(10, 'Chăm sóc em nhỏ', [
    Q('Khi em bé khóc, em nên?', [
      'Để mặc em bé khóc',
      'Dỗ dành nhẹ nhàng và gọi người lớn',
      'Quát em bé thật to',
      'Bịt miệng em bé',
    ], 1, 'Dỗ dành và báo người lớn.'),
    Q('Khi chơi với em nhỏ, em chọn đồ chơi nào?', [
      'Đồ sắc nhọn',
      'Đồ chơi mềm, an toàn',
      'Bật lửa',
      'Hạt nhỏ dễ nuốt',
    ], 1, 'Đồ mềm + an toàn cho em bé.'),
    Q('Em nhỏ đòi ăn kẹo cứng, em làm gì?', [
      'Cho em ăn thật nhiều',
      'Không tự ý cho, hỏi ý người lớn',
      'Nhét cả viên vào miệng em',
      'Bỏ đi',
    ], 1, 'Trẻ nhỏ dễ hóc, phải hỏi người lớn.'),
    Q('Khi bế em bé, tư thế đúng là?', [
      'Bế ngược đầu xuống',
      'Đỡ đầu và lưng em, ngồi yên trên ghế',
      'Vừa bế vừa chạy nhảy',
      'Tung em lên cao',
    ], 1, 'Đầu trẻ sơ sinh cần được đỡ.'),
    Q('Hành vi nào KHÔNG đúng với em nhỏ?', [
      'Yêu thương, nhường đồ chơi',
      'Hát cho em nghe',
      'Đánh em vì em quấy',
      'Trông em khi mẹ đi gần',
    ], 2, 'Đánh em là sai, phải yêu thương.'),
  ]),

  M(11, 'Quan tâm ông bà', [
    Q('Khi gặp ông bà, em nên?', [
      'Chạy thẳng đi chơi',
      'Khoanh tay chào lễ phép',
      'Quay đi không nói gì',
      'Trêu ông bà',
    ], 1, 'Khoanh tay chào là lễ phép.'),
    Q('Ông bà ốm, em làm gì?', [
      'Hỏi thăm và rót nước cho ông bà',
      'Bật nhạc thật to',
      'Đòi ông bà mua đồ chơi',
      'Trốn vào phòng chơi game',
    ], 0, 'Hỏi thăm và giúp việc nhỏ.'),
    Q('Cuối tuần, em có thể làm gì cùng ông bà?', [
      'Nghe ông bà kể chuyện, đi dạo',
      'Cãi nhau với ông bà',
      'Giấu kính của ông',
      'Lén lấy điện thoại của bà',
    ], 0, 'Kể chuyện + đi dạo là hoạt động đẹp.'),
    Q('Khi ông bà nói chuyện, em nên?', [
      'Ngắt lời liên tục',
      'Lắng nghe và "Vâng ạ"',
      'Cãi lại',
      'Bịt tai',
    ], 1, '"Vâng ạ" + lắng nghe = lễ phép.'),
    Q('Hành động nào thể hiện yêu ông bà?', [
      'Vẽ tranh tặng ông bà',
      'Lờ đi khi ông bà gọi',
      'Quên sinh nhật ông',
      'Cười nhạo ông bà già',
    ], 0, 'Tặng tranh là tình cảm chân thành.'),
  ]),

  M(12, 'Em chào hỏi lễ phép với người lớn', [
    Q('Khi gặp cô giáo ở ngoài đường, em nên?', [
      'Chạy trốn',
      'Khoanh tay chào "Em chào cô ạ"',
      'Giả vờ không thấy',
      'Hét lên gọi cô',
    ], 1, 'Chào lễ phép kèm "ạ".'),
    Q('Khi khách đến nhà, em nên?', [
      'Trốn trong phòng',
      'Lễ phép chào hỏi và mời khách ngồi',
      'Tắt đèn cho khách về',
      'Nói "ai đấy?" cộc lốc',
    ], 1, 'Chào và mời khách thể hiện gia giáo.'),
    Q('Câu chào nào phù hợp với bác hàng xóm?', [
      '"Ê bác!"',
      '"Cháu chào bác ạ"',
      '"Có gì không?"',
      '"Mặc kệ"',
    ], 1, '"Cháu chào bác ạ" là lễ phép.'),
    Q('Khi được người lớn cho quà, em nên?', [
      'Cướp lấy quà',
      'Nhận bằng hai tay và cảm ơn',
      'Chê quà xấu',
      'Vứt quà đi',
    ], 1, 'Nhận hai tay + cảm ơn.'),
    Q('Hành vi nào là KHÔNG lễ phép?', [
      'Khoanh tay chào',
      'Thưa gửi rõ ràng',
      'Nói trống không với người lớn',
      'Nói cảm ơn khi được giúp',
    ], 2, 'Nói trống không là vô lễ.'),
  ]),

  M(13, 'Em yêu trường lớp — giữ gìn lớp học', [
    Q('Lớp học sạch sẽ là nhờ?', [
      'Một mình bác lao công',
      'Tất cả học sinh và thầy cô cùng giữ gìn',
      'Tự nhiên sạch',
      'Bố mẹ đến quét',
    ], 1, 'Trách nhiệm chung của cả lớp.'),
    Q('Khi ăn quà vặt trong giờ ra chơi, vỏ bánh em nên?', [
      'Vứt ra sân',
      'Cho vào thùng rác',
      'Nhét gầm bàn',
      'Để trên bàn cô giáo',
    ], 1, 'Cho vào thùng rác để giữ vệ sinh.'),
    Q('Thấy bạn vẽ bậy lên tường lớp, em nên?', [
      'Vẽ thêm cùng bạn',
      'Mặc kệ',
      'Khuyên bạn dừng và báo cô',
      'Cười cổ vũ',
    ], 2, 'Khuyên bạn và báo cô.'),
    Q('Cây cảnh trong lớp em nên?', [
      'Bứt lá chơi',
      'Tưới nước, chăm sóc',
      'Đổ nước nóng vào',
      'Bỏ đói cho chết',
    ], 1, 'Tưới + chăm sóc cây xanh.'),
    Q('Bàn ghế lớp em nên?', [
      'Khắc tên cho oách',
      'Giữ gìn, không vẽ bậy, không đu lên',
      'Đập cho vui',
      'Lấy về nhà',
    ], 1, 'Giữ gìn tài sản chung.'),
  ]),

  M(14, 'Trực nhật lớp — chia công bằng', [
    Q('Tổ trực nhật cần làm những việc gì?', [
      'Chỉ quét lớp',
      'Quét lớp, lau bảng, sắp xếp bàn ghế, đổ rác',
      'Chơi đùa cho vui',
      'Đứng nhìn',
    ], 1, 'Trực nhật gồm nhiều việc.'),
    Q('Khi đến lượt trực nhật, em nên?', [
      'Trốn về sớm',
      'Đến sớm và làm phần việc được giao',
      'Đẩy việc cho bạn',
      'Giả vờ ốm',
    ], 1, 'Tự giác làm phần của mình.'),
    Q('Bạn cùng tổ làm chậm, em nên?', [
      'Bỏ mặc bạn',
      'Giúp bạn làm cho xong',
      'Mách cô',
      'Cười nhạo',
    ], 1, 'Tinh thần đồng đội: cùng giúp nhau.'),
    Q('Sau khi trực nhật xong, dụng cụ (chổi, hốt rác) nên?', [
      'Vứt giữa lớp',
      'Cất đúng nơi quy định',
      'Mang về nhà',
      'Giấu trong ngăn bàn',
    ], 1, 'Cất gọn để lần sau dễ tìm.'),
    Q('Việc trực nhật chia thế nào là công bằng?', [
      'Cô giáo làm hết',
      'Mỗi bạn một phần, luân phiên các tổ',
      'Một bạn làm tất cả',
      'Chỉ con gái mới phải làm',
    ], 1, 'Chia đều và luân phiên.'),
    Q('Câu nào ĐÚNG?', [
      'Trực nhật giúp em rèn ý thức trách nhiệm.',
      'Trực nhật là việc của bác lao công.',
      'Trực nhật làm em mất thời gian học.',
      'Trực nhật không cần thiết.',
    ], 0, 'Trực nhật rèn trách nhiệm.'),
  ]),

  M(15, 'Giúp đỡ bạn bè trong lớp', [
    Q('Bạn quên bút, em nên?', [
      'Cười chê bạn',
      'Cho bạn mượn bút nếu em có dư',
      'Mách cô để bạn bị phạt',
      'Giấu bút đi',
    ], 1, 'Chia sẻ là tình bạn.'),
    Q('Bạn bị ngã ở sân trường, em nên?', [
      'Cười nhạo bạn',
      'Đỡ bạn dậy và báo cô nếu bạn đau',
      'Bỏ đi chơi tiếp',
      'Đẩy bạn ngã thêm',
    ], 1, 'Giúp bạn và báo cô.'),
    Q('Bạn không hiểu bài, em đã hiểu, em nên?', [
      'Giấu bài không cho bạn xem',
      'Giảng lại cho bạn nếu cô cho phép',
      'Cười bạn dốt',
      'Mách bạn ngu',
    ], 1, 'Giúp bạn cùng tiến bộ.'),
    Q('Hành vi nào KHÔNG đúng với bạn?', [
      'Nói xấu sau lưng bạn',
      'Cùng chơi với bạn',
      'Khen bạn khi bạn làm tốt',
      'Chia kẹo cho bạn',
    ], 0, 'Nói xấu sau lưng làm tổn thương bạn.'),
    Q('Bạn mới chuyển đến, em nên?', [
      'Lờ đi',
      'Chủ động làm quen, giới thiệu lớp',
      'Trêu chọc',
      'Đặt biệt danh xấu',
    ], 1, 'Đón bạn mới với lòng thân thiện.'),
  ]),

  M(16, 'Ứng xử lễ phép với thầy cô', [
    Q('Khi gặp thầy cô trong trường, em nên?', [
      'Chạy qua không chào',
      'Khoanh tay chào lễ phép',
      'Hét to "thầy ơi!"',
      'Giả vờ không thấy',
    ], 1, 'Chào lễ phép.'),
    Q('Khi thầy cô giảng bài, em nên?', [
      'Nói chuyện riêng',
      'Lắng nghe, ghi chép',
      'Ngủ gật',
      'Nghịch bút',
    ], 1, 'Chú ý nghe giảng.'),
    Q('Muốn phát biểu, em nên?', [
      'Nói lớn cắt ngang cô',
      'Giơ tay xin phát biểu',
      'Đứng phắt dậy nói',
      'Đập bàn',
    ], 1, 'Giơ tay là quy định lớp học.'),
    Q('Khi mắc lỗi với thầy cô, em nên?', [
      'Đổ lỗi cho bạn',
      'Xin lỗi và sửa sai',
      'Cãi lại',
      'Khóc nhè không nói gì',
    ], 1, 'Xin lỗi + sửa sai = trưởng thành.'),
    Q('Câu nào thể hiện lễ phép?', [
      '"Thưa cô, em hỏi ạ"',
      '"Ê cô!"',
      '"Cô ơi nói nhanh đi"',
      '"Hỏi tí"',
    ], 0, '"Thưa cô" + "ạ" là lễ phép.'),
  ]),

  M(17, 'Tham gia sinh hoạt lớp tích cực', [
    Q('Trong giờ sinh hoạt lớp, em nên?', [
      'Ngồi im không phát biểu',
      'Tham gia ý kiến, lắng nghe các bạn',
      'Làm việc riêng',
      'Ngủ',
    ], 1, 'Phát biểu và lắng nghe.'),
    Q('Khi lớp bình bầu khen thưởng, em nên?', [
      'Chỉ bầu cho mình',
      'Bầu cho bạn xứng đáng, công bằng',
      'Bầu cho bạn thân cho dù bạn không tốt',
      'Không tham gia',
    ], 1, 'Công bằng là nguyên tắc.'),
    Q('Bị bạn phê bình đúng, em nên?', [
      'Cãi lại',
      'Tiếp thu và sửa',
      'Giận bạn',
      'Trả thù bạn',
    ], 1, 'Tiếp thu góp ý là cầu tiến.'),
    Q('Khi đề xuất hoạt động cho lớp, em chọn?', [
      'Hoạt động chỉ mình thích',
      'Hoạt động cả lớp cùng tham gia được',
      'Hoạt động đắt tiền chỉ bạn giàu chơi được',
      'Hoạt động nguy hiểm',
    ], 1, 'Hoạt động phù hợp cả lớp.'),
    Q('Lợi ích của sinh hoạt lớp?', [
      'Mất thời gian',
      'Gắn kết tập thể, cùng tiến bộ',
      'Không có gì',
      'Để chơi điện thoại',
    ], 1, 'Gắn kết tập thể.'),
  ]),

  M(18, 'Sơ kết Học kì 1 — chia sẻ kĩ năng đã có', [
    Q('Sau HK1, em đã biết tự làm việc nào?', [
      'Tự đánh răng, rửa mặt, chải tóc',
      'Không làm gì cả',
      'Chỉ ngủ',
      'Chờ mẹ làm hộ tất cả',
    ], 0, 'Đó là các kĩ năng tự phục vụ cơ bản.'),
    Q('Khi đi học, em đã biết?', [
      'Soạn cặp theo TKB',
      'Quên cặp ở nhà',
      'Mang đồ chơi đi học',
      'Nhờ bố mẹ soạn cặp giúp',
    ], 0, 'Soạn cặp là kĩ năng đã rèn.'),
    Q('Trong gia đình, em đã làm được?', [
      'Nhặt rau, lau bàn, chào hỏi ông bà',
      'Cãi mẹ',
      'Ăn rồi đi chơi',
      'Đập bát',
    ], 0, 'Việc nhà nhỏ là tự lập.'),
    Q('Với bạn bè, em đã biết?', [
      'Giúp đỡ và chia sẻ',
      'Nói xấu bạn',
      'Đánh nhau',
      'Tranh giành',
    ], 0, 'Giúp đỡ + chia sẻ.'),
    Q('Với thầy cô, em đã biết?', [
      'Chào lễ phép, lắng nghe',
      'Cãi lại',
      'Nói trống không',
      'Trêu thầy cô',
    ], 0, 'Lễ phép là quan trọng.'),
    Q('Khi giữ vệ sinh lớp học, em đã biết?', [
      'Trực nhật, bỏ rác đúng chỗ',
      'Vẽ bậy lên bàn',
      'Vứt rác ra sàn',
      'Phá cây cảnh',
    ], 0, 'Giữ vệ sinh lớp học.'),
    Q('Kĩ năng nào em cần cải thiện ở HK2?', [
      'Tự lập hơn, kiên trì hơn, làm việc nhóm tốt hơn',
      'Lười hơn',
      'Khóc nhè nhiều hơn',
      'Phá phách nhiều hơn',
    ], 0, 'HK2 cần tiến bộ thêm.'),
    Q('Khi nhìn lại HK1, em nên?', [
      'Tự hào với việc làm tốt và rút kinh nghiệm với việc chưa tốt',
      'Quên hết đi',
      'Đổ lỗi cho bạn',
      'Tự ti, bỏ cuộc',
    ], 0, 'Phản tỉnh là cách trưởng thành.'),
    Q('Chia sẻ trải nghiệm HK1 với gia đình, em nên?', [
      'Kể chuyện vui ở trường, khoe điểm tốt và việc tốt',
      'Giấu kín',
      'Chỉ kể chuyện xấu',
      'Không nói gì',
    ], 0, 'Chia sẻ để gắn kết gia đình.'),
    Q('Lời chúc nào phù hợp cho cả lớp dịp tổng kết HK1?', [
      '"Chúc cả lớp HK2 tiến bộ và đoàn kết hơn!"',
      '"Cả lớp dốt quá"',
      '"Chán quá"',
      '"Không quan tâm"',
    ], 0, 'Lời chúc tích cực tạo động lực.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — CỘNG ĐỒNG · TỰ NHIÊN · NGHỀ NGHIỆP ────────────────
  M(19, 'An toàn giao thông (1): Đèn tín hiệu', [
    Q('Đèn giao thông màu ĐỎ nghĩa là?', [
      'Đi nhanh',
      'Dừng lại',
      'Đi chậm',
      'Rẽ phải',
    ], 1, 'Đỏ = Dừng.'),
    Q('Đèn giao thông màu XANH nghĩa là?', [
      'Dừng',
      'Được đi',
      'Cấm rẽ',
      'Đứng yên',
    ], 1, 'Xanh = Được đi.'),
    Q('Đèn giao thông màu VÀNG nghĩa là?', [
      'Đi nhanh hơn',
      'Chuẩn bị dừng',
      'Quay đầu',
      'Rẽ trái',
    ], 1, 'Vàng = Chuẩn bị dừng.'),
    Q('Khi đèn đỏ, người đi bộ nên?', [
      'Băng qua đường thật nhanh',
      'Đứng đợi trên vỉa hè',
      'Chạy ra giữa đường',
      'Vẫy tay yêu cầu xe dừng',
    ], 1, 'Đứng đợi trên vỉa hè.'),
    Q('Khi đi cùng người lớn qua ngã tư, em nên?', [
      'Nắm tay người lớn và quan sát đèn',
      'Chạy lung tung',
      'Buông tay người lớn',
      'Nhắm mắt qua đường',
    ], 0, 'Nắm tay + quan sát đèn.'),
    Q('Hành vi nào ĐÚNG?', [
      'Vượt đèn đỏ vì đường vắng',
      'Dừng đèn đỏ kể cả khi không có xe',
      'Đi xe lên vỉa hè',
      'Đua xe',
    ], 1, 'Luôn tuân thủ đèn tín hiệu.'),
  ]),

  M(20, 'An toàn giao thông (2): Đi bộ qua đường', [
    Q('Khi qua đường, em nên đi ở đâu?', [
      'Vạch kẻ trắng dành cho người đi bộ',
      'Bất kì chỗ nào tiện',
      'Giữa đường',
      'Ngã tư không có vạch',
    ], 0, 'Vạch kẻ trắng là nơi an toàn.'),
    Q('Trước khi qua đường, em nên?', [
      'Nhắm mắt chạy',
      'Quan sát trái – phải – trái và lắng nghe',
      'Vừa qua đường vừa xem điện thoại',
      'Chạy thật nhanh',
    ], 1, 'Trái – phải – trái là quy tắc.'),
    Q('Khi qua đường, tốc độ đi nên?', [
      'Chạy thật nhanh',
      'Đi vừa phải, không chạy không đứng lại',
      'Đứng giữa đường ngắm cảnh',
      'Bò qua',
    ], 1, 'Đi đều, không chạy không dừng.'),
    Q('Trẻ em qua đường tốt nhất nên?', [
      'Tự đi một mình',
      'Đi cùng người lớn',
      'Đi với em bé hơn',
      'Đi nhắm mắt',
    ], 1, 'Đi cùng người lớn an toàn nhất.'),
    Q('Khi đi bộ trên đường, em đi ở đâu?', [
      'Vỉa hè (hoặc lề đường nếu không có vỉa hè)',
      'Giữa lòng đường',
      'Trên dải phân cách',
      'Trên mui xe',
    ], 0, 'Vỉa hè là nơi của người đi bộ.'),
    Q('Hành vi nào NGUY HIỂM?', [
      'Đi đúng vạch kẻ',
      'Vừa qua đường vừa đeo tai nghe nghe nhạc to',
      'Quan sát kĩ trước khi qua',
      'Nắm tay người lớn',
    ], 1, 'Tai nghe to khiến không nghe được tiếng xe.'),
  ]),

  M(21, 'An toàn giao thông (3): Đội mũ bảo hiểm', [
    Q('Khi ngồi sau xe máy, em phải?', [
      'Đội mũ bảo hiểm đúng cỡ và cài quai',
      'Đội mũ vải mềm',
      'Không cần mũ',
      'Đội mũ của mẹ rộng thùng thình',
    ], 0, 'Mũ bảo hiểm + cài quai.'),
    Q('Mũ bảo hiểm bảo vệ bộ phận nào?', [
      'Chân',
      'Đầu',
      'Tay',
      'Bụng',
    ], 1, 'Bảo vệ đầu khi va đập.'),
    Q('Quai mũ nên?', [
      'Buông lủng lẳng',
      'Cài chặt vừa đủ, lọt một ngón tay',
      'Cài cực chặt nghẹt thở',
      'Không cài',
    ], 1, 'Cài vừa khít, lọt 1 ngón tay.'),
    Q('Khi ngồi sau xe máy, tay em nên?', [
      'Ôm chặt eo hoặc vai người lái',
      'Buông xuôi',
      'Vẫy bạn',
      'Cầm điện thoại',
    ], 0, 'Ôm chắc để không ngã.'),
    Q('Hành vi nào SAI?', [
      'Đội mũ bảo hiểm đúng cách',
      'Ngồi yên trên xe',
      'Đứng lên trên yên xe khi xe chạy',
      'Cài quai mũ',
    ], 2, 'Đứng trên yên cực kì nguy hiểm.'),
    Q('Nếu mũ bảo hiểm bị nứt vỡ, em nên?', [
      'Vẫn dùng tiếp',
      'Báo bố mẹ thay mũ mới',
      'Dùng băng dính dán lại',
      'Cho em bé đội',
    ], 1, 'Mũ vỡ không còn bảo vệ được.'),
  ]),

  M(22, 'Phong tục Tết — lì xì, chúc Tết, dọn nhà, mâm ngũ quả', [
    Q('Tết Nguyên đán là Tết của?', [
      'Người nước ngoài',
      'Người Việt Nam (theo Âm lịch)',
      'Chỉ trẻ con',
      'Chỉ người già',
    ], 1, 'Tết cổ truyền của dân tộc Việt Nam.'),
    Q('Khi được lì xì, em nên?', [
      'Mở phong bao ngay trước mặt người cho và chê ít',
      'Nhận hai tay, cảm ơn và chúc Tết',
      'Giật lấy rồi chạy',
      'Đòi thêm',
    ], 1, 'Nhận hai tay + cảm ơn + chúc Tết.'),
    Q('Câu chúc Tết phù hợp với ông bà?', [
      '"Chúc ông bà sống lâu, mạnh khoẻ"',
      '"Chúc ông bà giàu to"',
      '"Tết vui không?"',
      '"Cho cháu tiền"',
    ], 0, 'Chúc sức khoẻ là phù hợp nhất với ông bà.'),
    Q('Trước Tết, em có thể giúp gia đình?', [
      'Dọn dẹp nhà cửa, lau bàn thờ giúp người lớn',
      'Vẽ bậy lên tường',
      'Đập vỡ đồ cũ',
      'Ngủ cả ngày',
    ], 0, 'Dọn dẹp là phong tục đẹp.'),
    Q('Mâm ngũ quả ngày Tết thường có?', [
      'Đúng 1 loại quả',
      'Năm loại quả khác nhau',
      'Chỉ kẹo bánh',
      'Đồ chơi',
    ], 1, 'Năm loại quả tượng trưng phú quý.'),
    Q('Mâm ngũ quả miền Bắc thường có loại quả nào?', [
      'Chuối, bưởi, quýt, đào, hồng',
      'Sầu riêng, dưa hấu, chôm chôm, măng cụt',
      'Chỉ có táo',
      'Chỉ có nho',
    ], 0, 'Miền Bắc thường có chuối + bưởi + quýt + đào + hồng.'),
    Q('Hành vi nào KHÔNG đẹp ngày Tết?', [
      'Chúc Tết người lớn',
      'Cãi nhau, làm vỡ đồ và đổ lỗi',
      'Mặc quần áo đẹp đi chúc Tết',
      'Mừng tuổi em nhỏ',
    ], 1, 'Tết kiêng cãi nhau, làm đổ vỡ.'),
    Q('Bánh truyền thống ngày Tết miền Bắc?', [
      'Bánh chưng',
      'Bánh mì',
      'Bánh ngọt',
      'Bánh quy',
    ], 0, 'Bánh chưng vuông tượng Đất.'),
    Q('Khi đi chúc Tết, em mặc?', [
      'Quần áo mới, sạch sẽ, gọn gàng',
      'Đồ ngủ',
      'Áo rách',
      'Quần áo bẩn',
    ], 0, 'Trang phục gọn gàng + đẹp.'),
    Q('Ý nghĩa của lì xì là?', [
      'Để trẻ giàu',
      'Cầu may mắn, bình an cho người được mừng tuổi',
      'Để khoe tiền',
      'Để so kè ai nhiều hơn',
    ], 1, 'Lì xì = chúc may mắn, không phải khoe tiền.'),
  ], { difficulty: 2 }),

  M(23, 'Tiết kiệm nước', [
    Q('Khi đánh răng, em nên?', [
      'Mở vòi nước chảy suốt',
      'Hứng nước vào cốc, tắt vòi khi chải',
      'Để vòi chảy đến hết',
      'Không cần khoá vòi',
    ], 1, 'Dùng cốc + tắt vòi khi chải.'),
    Q('Khi rửa rau, mẹ nên?', [
      'Để vòi nước chảy liên tục',
      'Dùng chậu hứng nước, rửa nhiều lần trong chậu',
      'Dùng nước vô tội vạ',
      'Không rửa',
    ], 1, 'Dùng chậu tiết kiệm nước.'),
    Q('Vòi nước nhà bị rò, em nên?', [
      'Mặc kệ',
      'Báo bố mẹ sửa ngay',
      'Mở vòi to thêm',
      'Tháo vòi ra',
    ], 1, 'Báo sửa ngay để khỏi lãng phí.'),
    Q('Nước thải sau khi vo gạo có thể?', [
      'Đổ đi luôn',
      'Tận dụng tưới cây',
      'Đổ vào tủ lạnh',
      'Đổ ra giường',
    ], 1, 'Nước vo gạo tốt cho cây.'),
    Q('Câu nào ĐÚNG?', [
      'Nước sạch là nguồn tài nguyên có hạn, cần tiết kiệm.',
      'Nước trong vòi là vô tận.',
      'Tiết kiệm nước làm bẩn nhà.',
      'Càng dùng nhiều nước càng tốt.',
    ], 0, 'Nước sạch là tài nguyên có hạn.'),
    Q('Hành vi nào LÃNG PHÍ nước?', [
      'Khoá vòi khi không dùng',
      'Tắm vòi sen thay vì ngâm bồn',
      'Để vòi nước chảy lúc xoa xà phòng',
      'Sửa vòi rò',
    ], 2, 'Để vòi chảy khi không cần là lãng phí.'),
  ]),

  M(24, 'Tiết kiệm điện', [
    Q('Khi ra khỏi phòng, em nên?', [
      'Tắt đèn, tắt quạt',
      'Để đèn sáng suốt ngày',
      'Bật thêm đèn cho sáng',
      'Mở cả điều hoà',
    ], 0, 'Tắt thiết bị khi không dùng.'),
    Q('Ti vi xem xong, em nên?', [
      'Để chế độ chờ liên tục',
      'Tắt nguồn hoàn toàn',
      'Bật to hơn',
      'Đập vào để tắt',
    ], 1, 'Tắt nguồn để khỏi tốn điện.'),
    Q('Ban ngày trời sáng, em nên?', [
      'Bật tất cả đèn trong nhà',
      'Mở cửa sổ tận dụng ánh sáng tự nhiên',
      'Đóng cửa và bật đèn',
      'Bật thêm đèn nháy',
    ], 1, 'Tận dụng ánh sáng tự nhiên.'),
    Q('Mở tủ lạnh em nên?', [
      'Mở thật lâu để chọn đồ',
      'Lấy nhanh và đóng cửa',
      'Mở rồi đi chỗ khác',
      'Mở suốt cả ngày',
    ], 1, 'Đóng nhanh để giữ lạnh.'),
    Q('Tiết kiệm điện có lợi ích gì?', [
      'Giảm hoá đơn điện và bảo vệ môi trường',
      'Để nhà tối tăm',
      'Không có lợi ích',
      'Để chứng tỏ giàu',
    ], 0, 'Giảm chi phí + bảo vệ môi trường.'),
    Q('Hành vi nào TIẾT KIỆM điện?', [
      'Sạc điện thoại 24/24 dù pin đầy',
      'Tắt đèn khi đi ngủ',
      'Bật điều hoà ở 16 độ và mở cửa',
      'Để máy tính chạy suốt đêm khi không dùng',
    ], 1, 'Tắt đèn khi đi ngủ.'),
  ]),

  M(25, 'Phân loại rác', [
    Q('Rác hữu cơ là?', [
      'Vỏ trái cây, rau củ thừa, cơm thừa',
      'Vỏ chai nhựa',
      'Pin cũ',
      'Mảnh kính vỡ',
    ], 0, 'Rác hữu cơ dễ phân huỷ tự nhiên.'),
    Q('Rác tái chế là?', [
      'Giấy, vỏ chai nhựa, lon nhôm',
      'Rau thối',
      'Cơm thừa',
      'Lá cây khô',
    ], 0, 'Giấy + nhựa + kim loại có thể tái chế.'),
    Q('Pin cũ là loại rác?', [
      'Rác hữu cơ',
      'Rác nguy hại (cần thu gom riêng)',
      'Rác tái chế thông thường',
      'Không phải rác',
    ], 1, 'Pin chứa kim loại nặng, là rác nguy hại.'),
    Q('Khi uống xong chai nhựa, em nên?', [
      'Vứt ra đường',
      'Bóp dẹp và bỏ vào thùng rác tái chế',
      'Ném xuống ao',
      'Đốt đi',
    ], 1, 'Tái chế chai nhựa.'),
    Q('Vứt rác bừa bãi gây hậu quả gì?', [
      'Không sao cả',
      'Ô nhiễm môi trường, sinh ruồi muỗi, bệnh tật',
      'Làm phố đẹp hơn',
      'Cây cối tươi tốt',
    ], 1, 'Ô nhiễm + bệnh tật.'),
    Q('Việc nào em làm được ngay?', [
      'Bỏ rác đúng nơi quy định, phân loại đơn giản tại nhà',
      'Làm ngơ với rác',
      'Đốt rác trong nhà',
      'Đổ rác xuống cống',
    ], 0, 'Phân loại tại nhà là việc nhỏ + thiết thực.'),
  ]),

  M(26, 'Trồng cây xanh trong lớp/nhà', [
    Q('Cây xanh giúp gì cho không khí?', [
      'Làm bẩn không khí',
      'Cung cấp ô-xy, làm không khí trong lành',
      'Không có tác dụng',
      'Gây bụi',
    ], 1, 'Cây quang hợp tạo ô-xy.'),
    Q('Để cây sống tốt, em cần?', [
      'Tưới nước đều đặn, đủ nắng',
      'Để khô không tưới',
      'Đổ nước nóng',
      'Đặt trong tủ tối',
    ], 0, 'Nước + ánh sáng là cơ bản.'),
    Q('Cây trồng trong lớp nên?', [
      'Cây nhỏ, dễ chăm',
      'Cây cổ thụ to lớn',
      'Cây có gai sắc',
      'Cây độc',
    ], 0, 'Cây nhỏ + an toàn cho lớp học.'),
    Q('Bạn ngắt lá cây trong lớp để chơi, em nên?', [
      'Cùng ngắt',
      'Khuyên bạn không ngắt và báo cô nếu cần',
      'Mặc kệ',
      'Vỗ tay khen bạn',
    ], 1, 'Khuyên bạn bảo vệ cây.'),
    Q('Trồng cây có lợi ích gì với em?', [
      'Mất thời gian',
      'Rèn tính kiên trì, yêu thiên nhiên',
      'Tốn tiền',
      'Bẩn tay',
    ], 1, 'Trồng cây dạy kiên trì + yêu thiên nhiên.'),
    Q('Lá vàng rụng từ cây em chăm có thể?', [
      'Vứt ra đường',
      'Ủ làm phân bón cho cây',
      'Đốt trong lớp',
      'Bỏ vào ngăn bàn',
    ], 1, 'Lá rụng có thể ủ phân tự nhiên.'),
  ]),

  M(27, 'Yêu cây cối, động vật xung quanh', [
    Q('Em thấy bạn dẫm lên hoa trong vườn trường, em nên?', [
      'Cùng dẫm',
      'Khuyên bạn dừng lại',
      'Cười khen bạn',
      'Bỏ đi',
    ], 1, 'Khuyên bạn yêu hoa cỏ.'),
    Q('Thấy chú chó hàng xóm bị thương, em nên?', [
      'Đá thêm',
      'Báo người lớn để giúp chú chó',
      'Trêu chú chó',
      'Bỏ mặc',
    ], 1, 'Báo người lớn giúp.'),
    Q('Bạn bắt côn trùng làm đồ chơi rồi vứt, em nên?', [
      'Khuyên bạn không bắt, thả côn trùng về tự nhiên',
      'Cùng bắt',
      'Bỏ chạy',
      'Cổ vũ bạn',
    ], 0, 'Thả côn trùng về tự nhiên.'),
    Q('Hành vi nào YÊU động vật?', [
      'Cho thú nuôi ăn đúng giờ',
      'Đánh thú nuôi khi giận',
      'Bỏ đói thú nuôi',
      'Nhốt chim vào lồng nhỏ chật',
    ], 0, 'Chăm sóc đúng cách.'),
    Q('Cây xanh, động vật là?', [
      'Bạn của con người',
      'Đồ vô tri không cần quan tâm',
      'Đồ dùng tuỳ tiện',
      'Đồ chơi',
    ], 0, 'Là bạn, cần yêu thương.'),
  ]),

  M(28, 'Bảo vệ môi trường khu phố', [
    Q('Em thấy người lớn vứt rác ra đường, em nên?', [
      'Cùng vứt',
      'Nhặt rác bỏ vào thùng (nếu an toàn) và nói với bố mẹ',
      'Vẽ bậy lên đường',
      'Bỏ mặc',
    ], 1, 'Nhặt rác + báo người lớn.'),
    Q('Khu phố sạch là nhờ?', [
      'Một mình bác lao công',
      'Mọi người cùng giữ gìn',
      'Tự nhiên sạch',
      'Mưa rửa sạch',
    ], 1, 'Trách nhiệm chung.'),
    Q('Ngày Chủ nhật xanh ở khu phố, em nên?', [
      'Cùng bố mẹ tham gia dọn dẹp',
      'Ngủ cả ngày',
      'Đứng nhìn',
      'Cản trở mọi người',
    ], 0, 'Tham gia cùng cộng đồng.'),
    Q('Khi đi dạo, vỏ kẹo của em em làm gì?', [
      'Vứt xuống cống',
      'Cho vào túi mang về bỏ thùng rác',
      'Ném vào bụi cây',
      'Nhét vào lỗ tường',
    ], 1, 'Mang về bỏ thùng rác.'),
    Q('Câu nào ĐÚNG?', [
      'Khu phố sạch giúp mọi người khoẻ mạnh.',
      'Khu phố bẩn không ảnh hưởng ai.',
      'Bảo vệ môi trường là việc của riêng người lớn.',
      'Trẻ em không cần quan tâm môi trường.',
    ], 0, 'Khu phố sạch = sức khoẻ chung.'),
  ]),

  M(29, 'Nghề nghiệp (1): Bác sĩ — chữa bệnh', [
    Q('Bác sĩ làm công việc gì?', [
      'Dạy học',
      'Khám và chữa bệnh cho mọi người',
      'Trồng lúa',
      'Lái xe',
    ], 1, 'Bác sĩ chữa bệnh.'),
    Q('Bác sĩ thường làm việc ở đâu?', [
      'Bệnh viện, phòng khám',
      'Cánh đồng',
      'Công trường',
      'Trường học',
    ], 0, 'Bệnh viện + phòng khám.'),
    Q('Khi đi khám bệnh, em nên?', [
      'Trả lời thật về triệu chứng',
      'Giấu giếm bệnh',
      'Khóc và chạy ra ngoài',
      'Nói lung tung',
    ], 0, 'Trả lời thật để bác sĩ chẩn đoán đúng.'),
    Q('Để trở thành bác sĩ, cần?', [
      'Học giỏi và học rất nhiều năm về y học',
      'Không cần học',
      'Chỉ cần nhìn ti vi',
      'Chơi game giỏi',
    ], 0, 'Học y mất nhiều năm.'),
    Q('Đức tính cần có của bác sĩ?', [
      'Yêu thương người bệnh, kiên nhẫn, cẩn thận',
      'Lười biếng',
      'Vô tâm',
      'Hấp tấp',
    ], 0, 'Y đức là yêu thương + cẩn thận.'),
    Q('Khi gặp bác sĩ ngoài đường, em nên?', [
      'Chào lễ phép',
      'Trêu chọc',
      'Bỏ chạy',
      'Lờ đi',
    ], 0, 'Chào lễ phép như mọi người lớn khác.'),
  ]),

  M(30, 'Nghề nghiệp (2): Giáo viên — dạy học', [
    Q('Giáo viên làm công việc gì?', [
      'Dạy học, dạy làm người',
      'Khám bệnh',
      'Trồng lúa',
      'Xây nhà',
    ], 0, 'Giáo viên dạy học.'),
    Q('Để trở thành giáo viên, cần?', [
      'Học sư phạm, giỏi chuyên môn và yêu trẻ',
      'Không cần học',
      'Chỉ cần biết hét to',
      'Chỉ cần đẹp trai/xinh gái',
    ], 0, 'Học sư phạm + yêu trẻ.'),
    Q('Để biết ơn thầy cô, em nên?', [
      'Học chăm, lễ phép, chúc mừng ngày 20/11',
      'Trốn học',
      'Cãi lại thầy cô',
      'Quên thầy cô',
    ], 0, 'Học chăm + lễ phép.'),
    Q('Ngày Nhà giáo Việt Nam là ngày?', [
      '20/11',
      '8/3',
      '1/6',
      '2/9',
    ], 0, '20/11 là ngày của thầy cô.'),
    Q('Đức tính cần có của giáo viên?', [
      'Kiên nhẫn, công bằng, yêu thương học trò',
      'Nóng nảy',
      'Thiên vị',
      'Lười dạy',
    ], 0, 'Kiên nhẫn + công bằng.'),
    Q('Khi cô giảng bài, em nên?', [
      'Chú ý nghe, ghi chép',
      'Ngủ gật',
      'Nói chuyện riêng',
      'Nghịch điện thoại',
    ], 0, 'Chú ý nghe giảng = tôn trọng cô.'),
  ]),

  M(31, 'Nghề nghiệp (3): Nông dân — trồng lúa', [
    Q('Nông dân làm công việc gì?', [
      'Trồng lúa, trồng rau, nuôi cá',
      'Khám bệnh',
      'Dạy học',
      'Xây nhà',
    ], 0, 'Nông dân làm ra lương thực.'),
    Q('Hạt gạo em ăn hàng ngày là từ?', [
      'Cây lúa do nông dân trồng',
      'Trên trời rơi xuống',
      'Trong tủ lạnh mọc ra',
      'Từ siêu thị tự sinh ra',
    ], 0, 'Lúa → gạo → cơm.'),
    Q('Khi ăn cơm, em nên?', [
      'Đổ cơm thừa đi',
      'Ăn hết, không để rơi vãi',
      'Vứt cơm vào sọt rác',
      'Đùa nghịch với cơm',
    ], 1, 'Trân trọng công sức nông dân.'),
    Q('Nghề nông gặp khó khăn nào?', [
      'Thời tiết nắng mưa thất thường, vất vả ngoài đồng',
      'Quá nhàn',
      'Không cần làm gì',
      'Lương cao nhất xã hội',
    ], 0, 'Nông dân vất vả ngoài đồng.'),
    Q('Câu ca dao nào nói về nông dân?', [
      '"Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt đắng cay muôn phần"',
      '"Một đàn cò trắng phau phau"',
      '"Trời mưa lâm thâm"',
      '"Con cò bé bé"',
    ], 0, 'Câu ca dao nhắc trân trọng nông dân.'),
    Q('Hành vi tôn trọng nông dân?', [
      'Quý hạt gạo, không lãng phí thức ăn',
      'Vứt cơm ra sàn',
      'Chê cơm dở',
      'Chê người làm ruộng',
    ], 0, 'Quý hạt gạo = tôn trọng nông dân.'),
  ]),

  M(32, 'Nghề nghiệp (4): Công an — giữ an ninh', [
    Q('Công an làm công việc gì?', [
      'Giữ an ninh, bảo vệ nhân dân',
      'Trồng lúa',
      'Dạy học',
      'Khám bệnh',
    ], 0, 'Công an giữ an ninh.'),
    Q('Khi bị lạc đường, em nên?', [
      'Khóc và chạy lung tung',
      'Tìm chú công an hoặc bảo vệ nhờ giúp',
      'Đi theo người lạ',
      'Trốn vào bụi cây',
    ], 1, 'Tìm công an / bảo vệ là an toàn nhất.'),
    Q('Khi gặp chú công an, em nên?', [
      'Chào lễ phép',
      'Bỏ chạy',
      'Trêu chú',
      'Lờ đi',
    ], 0, 'Chào lễ phép.'),
    Q('Số điện thoại khẩn cấp của công an là?', [
      '113',
      '114',
      '115',
      '119',
    ], 0, '113 = công an; 114 = cứu hoả; 115 = cấp cứu.'),
    Q('Đức tính cần có của công an?', [
      'Dũng cảm, kỉ luật, công bằng',
      'Nhút nhát',
      'Thiên vị',
      'Lười nhác',
    ], 0, 'Dũng cảm + kỉ luật + công bằng.'),
    Q('Khi thấy người lạ nói "Đi theo chú" mà không có bố mẹ, em nên?', [
      'Đi theo ngay',
      'Không đi, chạy về phía đông người và báo công an/người lớn tin tưởng',
      'Cho người lạ địa chỉ nhà',
      'Im lặng đi theo',
    ], 1, 'Không đi theo người lạ.'),
  ]),

  M(33, 'Nghề nghiệp (5): Kĩ sư — xây dựng, sửa máy móc', [
    Q('Kĩ sư làm công việc gì?', [
      'Thiết kế, xây dựng nhà cửa, cầu đường, máy móc',
      'Trồng lúa',
      'Dạy học',
      'Khám bệnh',
    ], 0, 'Kĩ sư xây + sửa máy + thiết kế.'),
    Q('Ngôi nhà em đang ở do ai thiết kế?', [
      'Kĩ sư xây dựng và kiến trúc sư',
      'Bác sĩ',
      'Giáo viên',
      'Nông dân',
    ], 0, 'Kĩ sư + kiến trúc sư thiết kế nhà.'),
    Q('Để trở thành kĩ sư, em cần học giỏi môn gì?', [
      'Toán, Khoa học',
      'Chỉ học vẽ',
      'Chỉ học hát',
      'Không cần học',
    ], 0, 'Toán + Khoa học là nền tảng kĩ thuật.'),
    Q('Khi đi qua công trình xây dựng, em nên?', [
      'Đứng sát công trình ngắm nghía',
      'Đi xa ra, đội mũ nếu được, cẩn thận vật rơi',
      'Trèo lên giàn giáo',
      'Nhặt vật liệu mang về',
    ], 1, 'Tránh xa, đề phòng tai nạn.'),
    Q('Đức tính cần có của kĩ sư?', [
      'Cẩn thận, sáng tạo, ham học',
      'Cẩu thả',
      'Lười nghĩ',
      'Vô trách nhiệm',
    ], 0, 'Cẩn thận + sáng tạo + ham học.'),
    Q('Câu nào ĐÚNG?', [
      'Mỗi nghề đều quan trọng và đáng quý',
      'Nghề kĩ sư hơn nghề nông',
      'Chỉ bác sĩ là nghề tốt',
      'Nông dân là nghề kém',
    ], 0, 'Không nghề nào hơn nghề nào.'),
  ]),

  M(34, 'Em ước mơ làm gì?', [
    Q('Ước mơ là gì?', [
      'Điều em mong muốn đạt được trong tương lai',
      'Lời nói dối',
      'Mệnh lệnh của bố mẹ',
      'Một loại bánh',
    ], 0, 'Ước mơ định hướng tương lai.'),
    Q('Khi nói về ước mơ với bạn, em nên?', [
      'Tôn trọng ước mơ của bạn dù khác mình',
      'Cười nhạo ước mơ của bạn',
      'Ép bạn theo ước mơ của em',
      'Chê ước mơ của bạn',
    ], 0, 'Mỗi người có ước mơ riêng.'),
    Q('Để thực hiện ước mơ, em cần?', [
      'Học chăm, rèn luyện, kiên trì',
      'Ngồi chờ',
      'Mơ rồi quên',
      'Đòi bố mẹ làm hộ',
    ], 0, 'Học + rèn luyện + kiên trì.'),
    Q('Bạn ước mơ làm ca sĩ nhưng hát chưa hay, em nên?', [
      'Cười chê',
      'Động viên bạn luyện tập thêm',
      'Bảo bạn bỏ ước mơ',
      'Mặc kệ',
    ], 1, 'Động viên thay vì chê.'),
    Q('Ước mơ nào nên TRÁNH?', [
      'Ước mơ trở thành kẻ trộm giàu có',
      'Ước mơ trở thành bác sĩ giỏi',
      'Ước mơ trở thành giáo viên',
      'Ước mơ làm nhà khoa học',
    ], 0, 'Ước mơ phải tích cực, không vi phạm pháp luật.'),
    Q('Vẽ tranh ước mơ là cách?', [
      'Thể hiện và nhớ về ước mơ của mình',
      'Lãng phí giấy',
      'Bị điểm kém',
      'Không có ích',
    ], 0, 'Vẽ giúp em hình dung và ghi nhớ.'),
  ]),

  M(35, 'Sinh hoạt câu lạc bộ — em chọn hoạt động yêu thích', [
    Q('Câu lạc bộ là?', [
      'Nhóm các bạn cùng sở thích sinh hoạt định kì',
      'Một loại bánh',
      'Lớp học bắt buộc',
      'Cuộc thi đấu',
    ], 0, 'CLB = nhóm cùng sở thích.'),
    Q('Khi chọn CLB, em nên?', [
      'Chọn theo sở thích và năng lực của mình',
      'Chọn theo bạn thân',
      'Chọn theo bố mẹ ép',
      'Không chọn gì',
    ], 0, 'Theo sở thích + năng lực bản thân.'),
    Q('Trong CLB, em nên?', [
      'Đoàn kết, tích cực tham gia',
      'Đứng nhìn',
      'Phá rối',
      'Khoe khoang',
    ], 0, 'Đoàn kết + tích cực.'),
    Q('CLB nào phù hợp với học sinh thích sách?', [
      'CLB đọc sách',
      'CLB bóng đá',
      'CLB bơi lội',
      'CLB cờ vua',
    ], 0, 'Theo sở thích đọc sách.'),
    Q('Khi không hợp với CLB đã chọn, em nên?', [
      'Bỏ ngang giữa chừng không nói gì',
      'Trao đổi với cô và xin chuyển sang CLB phù hợp',
      'Phá lớp CLB',
      'Đi học mà không tham gia',
    ], 1, 'Trao đổi và xin chuyển đúng quy trình.'),
    Q('Lợi ích lớn nhất của tham gia CLB?', [
      'Phát triển sở thích, kết bạn mới, tự tin hơn',
      'Mệt người',
      'Tốn tiền',
      'Không có lợi ích',
    ], 0, 'Phát triển sở thích + kết bạn.'),
  ]),

  M(36, 'Tổng kết cuối năm — chia sẻ trải nghiệm', [
    Q('Sau một năm Lớp 2, em đã học được điều gì về bản thân?', [
      'Tự phục vụ: vệ sinh, ăn mặc, soạn cặp',
      'Không học được gì',
      'Chỉ biết chơi',
      'Lười hơn trước',
    ], 0, 'Kĩ năng tự phục vụ là cốt lõi.'),
    Q('Em đã học được gì về gia đình?', [
      'Yêu thương, biết giúp việc nhỏ, lễ phép với ông bà',
      'Cãi nhau với mọi người',
      'Đòi đồ chơi',
      'Không quan tâm ai',
    ], 0, 'Tình cảm + giúp việc + lễ phép.'),
    Q('Em đã học được gì về nhà trường?', [
      'Trực nhật, giữ vệ sinh, lễ phép với thầy cô, giúp bạn',
      'Vẽ bậy lên bàn',
      'Cãi cô',
      'Trêu bạn',
    ], 0, 'Văn hoá học đường.'),
    Q('Em đã học được gì về cộng đồng và môi trường?', [
      'Phân loại rác, tiết kiệm điện nước, ATGT',
      'Vứt rác lung tung',
      'Lãng phí điện',
      'Vượt đèn đỏ',
    ], 0, 'Công dân nhỏ có ý thức.'),
    Q('Em đã biết những nghề nghiệp nào?', [
      'Bác sĩ, giáo viên, nông dân, công an, kĩ sư',
      'Không biết nghề nào',
      'Chỉ biết nghề ca sĩ',
      'Chỉ biết game thủ',
    ], 0, 'Năm nghề đã học trong HK2.'),
    Q('Trải nghiệm em nhớ nhất nên?', [
      'Là kỉ niệm tích cực để kể với gia đình',
      'Là chuyện xấu',
      'Là chuyện đánh nhau',
      'Là chuyện trốn học',
    ], 0, 'Kỉ niệm tích cực để chia sẻ.'),
    Q('Khi chia sẻ trải nghiệm trước lớp, em nên?', [
      'Nói rõ ràng, tự tin, lắng nghe bạn chia sẻ',
      'Lí nhí',
      'Quay lưng lại',
      'Cướp lời bạn',
    ], 0, 'Rõ ràng + lắng nghe.'),
    Q('Khi nghe bạn chia sẻ trải nghiệm, em nên?', [
      'Lắng nghe, vỗ tay khích lệ',
      'Cười nhạo',
      'Nói chuyện riêng',
      'Bỏ ra ngoài',
    ], 0, 'Tôn trọng người nói.'),
    Q('Mục tiêu cho Lớp 3 sắp tới của em?', [
      'Tự lập hơn, học giỏi hơn, yêu thương mọi người hơn',
      'Lười hơn',
      'Cãi bố mẹ nhiều hơn',
      'Bỏ học',
    ], 0, 'Đặt mục tiêu tích cực.'),
    Q('Lời cảm ơn nào phù hợp cuối năm học?', [
      '"Em cảm ơn thầy cô và các bạn đã giúp em trong năm học vừa qua"',
      '"Chán quá rồi"',
      '"Không cảm ơn ai"',
      '"Tự em làm hết"',
    ], 0, 'Biết ơn là phẩm chất đẹp.'),
  ], { difficulty: 3 }),
];

export const P2HDTN_SCENARIOS = indexBy(P2HDTN_WEEKS);
