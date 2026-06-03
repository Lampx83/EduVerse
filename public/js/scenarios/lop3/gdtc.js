// ============================================================
// Lớp 3 · GIÁO DỤC THỂ CHẤT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn GDTC Lớp 3.
// ID prefix: "P3GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3GDTC', 'gdtc', n, title, qs, opts);

export const P3GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Tập hợp hàng dọc, hàng ngang', [
    Q('Khẩu lệnh "Tập hợp!" em nên?', ['Cười đùa', 'Chạy lung tung', 'Đứng yên', 'Nhanh chóng xếp hàng theo vị trí'], 3, 'Tập hợp nhanh, ngay ngắn.'),
    Q('Đứng nghiêm thì hai tay?', ['Chống nạnh', 'Vung loạn xạ', 'Đút túi', 'Để xuôi theo thân, các ngón tay khép'], 3, 'Tư thế nghiêm chuẩn.'),
    Q('"Nghỉ!" thì em đứng thế nào?', ['Vẫn nghiêm cứng', 'Nằm xuống', 'Ngồi xuống', 'Chân trái hoặc phải bước sang nhẹ, hai tay thả lỏng'], 3, 'Tư thế thả lỏng nhưng vẫn trong hàng.'),
    Q('Khi tập hợp hàng dọc, em đứng?', ['Chéo nhau', 'Đứng so le, mỗi bạn lệch một bước', 'Hàng ngang', 'Theo hàng dọc, nhìn theo gáy bạn phía trước'], 3, 'Hàng dọc: nhìn gáy bạn trước.'),
    Q('Khẩu lệnh "Bên trái – quay!" em quay?', ['Đứng yên', 'Sang phải', 'Quay lưng', 'Sang trái 90 độ'], 3, 'Quay trái 90 độ.'),
  ]),

  M(2, 'Đi đều giữ hàng', [
    Q('Đi đều là?', ['Đi theo nhịp, tay vung đều, hàng ngũ thẳng', 'Đi nhanh chậm tuỳ ý', 'Chạy nhẹ theo nhịp đếm 1-2', 'Đứng yên'], 0, 'Đi đều theo nhịp đếm.'),
    Q('Đi đều đếm theo?', ['Đếm ngẫu nhiên', '"1 – 2, 1 – 2…"', 'Không đếm', '"1 – 2 – 3"'], 1, 'Đếm 1–2 đều.'),
    Q('Khi đi đều, tay em?', ['Vung tự nhiên theo nhịp chân', 'Để yên', 'Chống nạnh', 'Vẫy loạn xạ'], 0, 'Vung tay đối nghịch với chân.'),
    Q('Để giữ hàng đều, em cần?', ['Bước tuỳ ý', 'Đi nhanh hơn bạn', 'Đi chậm bỏ hàng', 'Bước cùng chân, cùng nhịp với cả tổ'], 3, 'Đồng đều với cả hàng.'),
    Q('Khi đi đều mà bị tụt hàng, em nên?', ['Bỏ hàng', 'Đứng lại', 'Chạy vượt lên', 'Bước nhanh hơn để theo kịp'], 3, 'Theo kịp giữ hàng đều.'),
  ]),

  M(3, 'Bài thể dục liên hoàn (1)', [
    Q('Bài thể dục liên hoàn gồm?', ['Các động tác rời rạc', 'Nhiều động tác nối tiếp theo thứ tự', 'Một động tác duy nhất', 'Không có thứ tự'], 1, 'Liên hoàn = nối tiếp các động tác.'),
    Q('Trước khi tập thể dục, em cần?', ['Uống nhiều nước', 'Ăn một bữa thật no để có sức', 'Khởi động làm nóng cơ thể', 'Tập ngay'], 2, 'Khởi động tránh chấn thương.'),
    Q('Khởi động gồm?', ['Xoay cổ, vai, hông, gối, cổ chân', 'Nằm xuống', 'Chỉ đứng yên', 'Chạy thật nhanh'], 0, 'Xoay các khớp là khởi động cơ bản.'),
    Q('Động tác vươn thở (tay lên cao) giúp?', ['Mỏi tay', 'Hít sâu, mở rộng lồng ngực', 'Đau lưng', 'Không tác dụng'], 1, 'Vươn thở giúp hô hấp sâu.'),
    Q('Khi tập, em nên?', ['Nín thở', 'Thở hổn hển', 'Hít thở đều và đúng nhịp', 'Không thở'], 2, 'Hít thở đều giúp giữ sức.'),
  ]),

  M(4, 'Bài thể dục liên hoàn (2)', [
    Q('Động tác tay nghiêng sang hai bên giúp?', ['Đau đầu', 'Mỏi chân', 'Mở rộng vai, cổ tay, sườn', 'Không tác dụng'], 2, 'Vận động phần thân trên.'),
    Q('Động tác chân (đá chân trước) giúp?', ['Đau lưng', 'Tăng linh hoạt khớp hông và sức cơ chân', 'Không tác dụng', 'Mỏi vai'], 1, 'Vận động phần chân.'),
    Q('Khi tập sai động tác, em nên?', ['Cười cho qua', 'Bỏ tập', 'Nhờ cô sửa và tập lại', 'Bỏ qua'], 2, 'Tập đúng quan trọng hơn nhanh.'),
    Q('Sau khi tập xong, em nên?', ['Hít thở sâu thư giãn, uống nước', 'Ăn nhiều ngay', 'Ngồi yên ngay', 'Tắm nước lạnh ngay'], 0, 'Thư giãn nhẹ và bù nước.'),
    Q('Tập bài thể dục đều đặn giúp?', ['Khoẻ mạnh, dẻo dai', 'Béo phì', 'Không tác dụng', 'Yếu đi'], 0, 'Tập thường xuyên cho sức khoẻ tốt.'),
  ]),

  M(5, 'Trò chơi: Mèo đuổi chuột', [
    Q('Trò "Mèo đuổi chuột" có?', ['Toàn lớp làm mèo', 'Không có ai', '1 bạn làm mèo, 1 bạn làm chuột, các bạn còn lại nắm tay tạo vòng', 'Hai mèo'], 2, 'Trò chơi dân gian quen thuộc.'),
    Q('Khi chơi, em nên?', ['Bỏ chơi giữa chừng', 'Đẩy mạnh bạn', 'Vui vẻ, công bằng, không gian lận', 'Cãi nhau'], 2, 'Chơi đẹp, đúng luật.'),
    Q('Mèo bắt được chuột thì?', ['Đánh chuột', 'Cãi nhau', 'Hai bạn đổi vai cho người khác', 'Chuột tiếp tục chạy, mèo bắt bạn khác'], 2, 'Đổi vai để mọi người cùng chơi.'),
    Q('Trò chơi tập thể giúp em?', ['Đoàn kết, vui vẻ và rèn thể lực', 'Mệt mỏi', 'Không có ích', 'Cô đơn'], 0, 'Chơi cùng nhau là rèn cả thể chất và tinh thần.'),
    Q('Khi va vào bạn lúc chơi, em nên?', ['Đổ lỗi cho bạn', 'Xin lỗi và hỏi bạn có sao không', 'Bỏ chạy', 'Đánh lại'], 1, 'Lịch sự ngay cả khi chơi.'),
  ]),

  M(6, 'Chạy ngắn — Kĩ thuật xuất phát', [
    Q('Khi xuất phát chạy, em cần?', ['Nằm sấp xuống đất rồi bật dậy chạy', 'Đứng thẳng đơ', 'Ngồi xuống', 'Tư thế hơi cúi, sẵn sàng lao đi khi có hiệu lệnh'], 3, 'Tư thế xuất phát hợp lý.'),
    Q('Hiệu lệnh chạy thường là?', ['Thầy cô đếm to "Một, hai, ba" rồi vỗ vai', 'Vỗ tay', 'Im lặng', '"Vào chỗ! – Sẵn sàng! – Chạy!" hoặc tiếng còi'], 3, 'Hiệu lệnh rõ ràng khởi động chạy.'),
    Q('Khi chạy, mắt em nhìn?', ['Cúi xuống chân', 'Nhắm mắt', 'Thẳng phía trước', 'Nhìn ra sau'], 2, 'Nhìn thẳng giúp giữ thăng bằng.'),
    Q('Tay khi chạy?', ['Để xuôi', 'Chống nạnh', 'Co lại, vung tự nhiên theo nhịp chân', 'Để trên đầu'], 2, 'Vung tay đối nghịch chân.'),
    Q('Khi cán đích, em nên?', ['Chạy hết tốc lực qua vạch đích, không chậm lại', 'Đi bộ qua', 'Dừng trước vạch', 'Quay lại'], 0, 'Chạy hết qua vạch đích.'),
  ]),

  M(7, 'Chạy 30m', [
    Q('Chạy 30m là cự ly?', ['Dài, cần giữ sức và thở đều', 'Marathon', 'Trung bình', 'Ngắn, đòi hỏi tốc độ tối đa'], 3, '30m là cự ly chạy ngắn.'),
    Q('Trước khi chạy 30m em nên?', ['Không chuẩn bị', 'Ăn một bữa thật no để có năng lượng', 'Khởi động kĩ các khớp', 'Uống nhiều nước có ga'], 2, 'Khởi động tránh chấn thương.'),
    Q('Khi chạy 30m, em cần?', ['Chạy chậm', 'Đi bộ nhanh để giữ sức về đích', 'Dùng hết sức, chạy nhanh nhất có thể', 'Chạy giữ tốc độ đều như chạy bền'], 2, 'Cự ly ngắn chạy tốc độ tối đa.'),
    Q('Để cải thiện chạy 30m, em nên?', ['Tập quá sức', 'Tập đều đặn các bài chạy ngắn', 'Chỉ tập một lần', 'Không tập'], 1, 'Luyện tập đều mới tiến bộ.'),
    Q('Sau khi chạy nhanh, em nên?', ['Đi bộ chậm vài phút để cơ thể hồi phục', 'Tắm ngay nước lạnh', 'Uống nước lạnh ào ào', 'Ngồi sụp ngay'], 0, 'Hạ nhiệt từ từ là an toàn.'),
  ]),

  M(8, 'Bật xa tại chỗ', [
    Q('Bật xa tại chỗ là?', ['Chạy đà rồi bật', 'Bước đi', 'Nhảy bằng một chân', 'Đứng yên rồi bật cả hai chân ra phía trước'], 3, 'Bật xa tại chỗ không chạy đà.'),
    Q('Tư thế chuẩn bị bật?', ['Co một chân', 'Đứng thẳng đứng', 'Hai chân rộng bằng vai, hơi khuỵu gối, vung tay sau', 'Ngồi xổm'], 2, 'Tư thế tạo lực bật.'),
    Q('Khi bật, em vung tay?', ['Vung ra sau', 'Ra trước mạnh mẽ để hỗ trợ lực bật', 'Để xuôi', 'Khoanh tay'], 1, 'Vung tay trước giúp bật xa hơn.'),
    Q('Tiếp đất bằng?', ['Một chân', 'Mông ngồi xuống', 'Hai chân, hơi khuỵu gối để giảm chấn', 'Hai chân duỗi thẳng, không khuỵu gối'], 2, 'Tiếp đất an toàn giảm chấn thương.'),
    Q('Bật xa giúp rèn?', ['Không tác dụng', 'Đau gối', 'Sức mạnh cơ chân và sự bùng nổ', 'Yếu đi'], 2, 'Bật rèn sức mạnh cơ chân.'),
  ]),

  M(9, 'Nhảy dây cá nhân (1)', [
    Q('Nhảy dây cá nhân, em cầm dây bằng?', ['Hai tay, mỗi tay một đầu', 'Buộc vào người', 'Không cầm', 'Một tay'], 0, 'Mỗi tay cầm một đầu dây.'),
    Q('Khi nhảy, em bật?', ['Ngồi xuống', 'Nhẹ bằng hai chân, ngay khi dây sắp chạm chân', 'Đứng yên', 'Bật rất cao'], 1, 'Bật vừa đủ qua dây.'),
    Q('Tay quay dây bằng?', ['Cổ tay là chính', 'Vai và khuỷu tay vung mạnh', 'Toàn thân', 'Cả cánh tay'], 0, 'Quay bằng cổ tay nhẹ nhàng, đỡ mỏi.'),
    Q('Khi mới tập, em nên?', ['Bỏ tập', 'Bật cao ngay', 'Quay chậm, bật nhẹ, dần tăng tốc', 'Quay nhanh ngay'], 2, 'Tập chậm trước, nhanh sau.'),
    Q('Nhảy dây rèn?', ['Yếu đi', 'Không có lợi', 'Đau khớp', 'Sự nhanh nhẹn, phối hợp và bền sức'], 3, 'Nhảy dây là bài tập toàn thân tốt.'),
  ]),

  M(10, 'Nhảy dây cá nhân (2) — Kĩ thuật nâng cao', [
    Q('Nhảy dây chân chéo (1 chân trước 1 chân sau) là?', ['Chỉ dành cho vận động viên chuyên nghiệp', 'Cấm tập', 'Không an toàn', 'Kĩ thuật biến tấu vui, thử thách phối hợp'], 3, 'Biến tấu rèn phối hợp.'),
    Q('Nhảy dây 2 vòng/lần bật (double under) là?', ['Bật cao một lần, quay dây nửa vòng', 'Quay 1 vòng', 'Không quay', 'Quay dây 2 vòng trong một lần bật cao'], 3, 'Kĩ thuật nâng cao đòi hỏi bật cao.'),
    Q('Khi vướng dây, em nên?', ['Dừng lại sửa và tiếp tục', 'Tức giận đập dây', 'Quát bạn', 'Bỏ cuộc'], 0, 'Bình tĩnh tập lại là đúng.'),
    Q('Muốn nhảy dây nhiều cái liên tục, em cần?', ['Bền sức và giữ nhịp đều', 'Vội vàng', 'Hấp tấp', 'Bật cao quá'], 0, 'Bền và đều là chìa khoá.'),
    Q('Nên nhảy dây bao nhiêu phút mỗi ngày?', ['2 giờ liên tục', 'Không nhảy', '10–15 phút là vừa với lớp 3', '30 giây'], 2, '10–15 phút là an toàn và hiệu quả.'),
  ]),

  M(11, 'Đá cầu (1) — Kĩ thuật cơ bản', [
    Q('Đá cầu là môn?', ['Đá bằng tay', 'Dùng chân tâng cầu lông gà', 'Đá bằng đầu', 'Đá vào cầu môn'], 1, 'Đá cầu = tâng cầu bằng chân.'),
    Q('Cầu lông gà thường có?', ['Bằng sắt', 'Toàn nhựa cứng', 'Bằng giấy', 'Lông gà và đế nhựa hoặc cao su'], 3, 'Cấu tạo đặc trưng cầu đá.'),
    Q('Tâng cầu bằng?', ['Đầu gối', 'Ngón chân', 'Mu bàn chân, má trong, má ngoài', 'Gót chân'], 2, 'Các vị trí chân khác nhau.'),
    Q('Mắt khi đá cầu nhìn?', ['Nhắm mắt', 'Theo cầu để canh thời điểm tâng', 'Nhìn người khác', 'Nhìn xuống'], 1, 'Nhìn cầu giữ nhịp.'),
    Q('Khi tập đá cầu, em nên?', ['Đá mạnh hết sức', 'Đá vào bạn', 'Tâng chậm và đều trước', 'Tâng nhanh ngay'], 2, 'Tập chậm trước, nhanh sau.'),
  ]),

  M(12, 'Đá cầu (2) — Tâng cầu liên tục', [
    Q('Tâng cầu liên tục bằng mu bàn chân nghĩa là?', ['Đá cầu lên đều bằng mu chân, đếm số lần', 'Đá vào bạn', 'Đá xuống đất', 'Đá xa ra'], 0, 'Tâng tại chỗ, đếm số lần.'),
    Q('Để tâng cầu lâu, em cần?', ['Đá thật mạnh', 'Đá không đều', 'Lực vừa phải và đều, cân bằng tốt', 'Nhắm mắt'], 2, 'Đều và cân bằng là chìa khoá.'),
    Q('Trò chơi tâng cầu nhiều người là?', ['Chỉ một người chơi', 'Đánh nhau', 'Đá bóng', 'Đá luân phiên cho nhau, không để rơi'], 3, 'Chơi tập thể vui và bổ ích.'),
    Q('Sau khi đá cầu, em nên?', ['Thả lỏng cơ chân, đi bộ nhẹ', 'Tắm lạnh ngay', 'Ngừng đột ngột', 'Ngồi sụp'], 0, 'Hạ nhiệt và thả lỏng cơ.'),
    Q('Đá cầu là môn?', ['Của Mỹ', 'Không có ở Việt Nam', 'Truyền thống Việt Nam, có thi đấu quốc tế', 'Của châu Phi'], 2, 'Đá cầu phát triển ở nhiều nước Đông Nam Á.'),
  ]),

  M(13, 'Bóng rổ mini (1) — Cầm bóng và chuyền', [
    Q('Cầm bóng rổ đúng cách là?', ['Hai tay ôm bóng, các ngón mở tự nhiên', 'Kẹp bóng giữa hai chân', 'Một tay nắm chặt', 'Để bóng trên đầu'], 0, 'Hai tay ôm chắc nhưng không gồng.'),
    Q('Chuyền bóng cho bạn em nên?', ['Đá bóng', 'Quăng bừa', 'Đẩy bằng hai tay, hướng đến ngực bạn', 'Ném mạnh vào mặt bạn'], 2, 'Chuyền bằng hai tay đến ngực là chuẩn.'),
    Q('Trước khi chuyền, em nên?', ['Im lặng ném', 'Quát to', 'Gọi tên bạn nhận để bạn chuẩn bị', 'Đánh lừa bạn'], 2, 'Báo hiệu để bạn sẵn sàng.'),
    Q('Bóng rổ là môn?', ['Đối kháng đánh nhau', 'Chỉ chơi một mình', 'Đồng đội, cần phối hợp', 'Cá nhân'], 2, 'Bóng rổ đề cao đồng đội.'),
    Q('Khi nhận bóng, tay em?', ['Mở rộng đón bóng, kéo về thân', 'Để bóng đập vào ngực', 'Quay lưng đi', 'Nhắm mắt'], 0, 'Mở tay đón và kéo về cho an toàn.'),
  ]),

  M(14, 'Bóng rổ mini (2) — Dẫn bóng', [
    Q('Dẫn bóng (dribble) là?', ['Ném bóng đi xa', 'Cầm bóng chạy', 'Đập bóng xuống đất liên tục bằng một tay', 'Đá bóng'], 2, 'Dribble là kỹ thuật cơ bản bóng rổ.'),
    Q('Khi dẫn bóng, em nên?', ['Đập bóng vừa tầm hông, tay đẩy nhẹ', 'Đứng yên', 'Đập bóng cao quá đầu', 'Đập bóng thật mạnh'], 0, 'Đập vừa tầm dễ kiểm soát.'),
    Q('Mắt nhìn ở đâu khi dẫn bóng?', ['Nhìn phía trước, không cúi xuống bóng', 'Cúi nhìn bóng liên tục', 'Nhìn ra sau', 'Nhắm mắt'], 0, 'Nhìn phía trước để quan sát đồng đội/đối thủ.'),
    Q('Dẫn bóng bằng?', ['Khuỷu tay', 'Lòng bàn tay đập mạnh xuống bóng', 'Các ngón tay, không phải lòng bàn tay đập', 'Cánh tay'], 2, 'Ngón tay điều khiển bóng tốt hơn.'),
    Q('Trong bóng rổ, nếu cầm bóng chạy là?', ['Không có luật', 'Đúng luật', 'Phạm luật (gọi là "đi bộ")', 'Khuyến khích'], 2, 'Phải dẫn bóng khi di chuyển.'),
  ]),

  M(15, 'Bơi an toàn — Kiến thức (1)', [
    Q('Trước khi xuống nước em cần?', ['Ăn no rồi xuống', 'Không cần chuẩn bị', 'Khởi động và biết sâu nông của vùng nước', 'Nhảy ngay'], 2, 'An toàn là quan trọng nhất.'),
    Q('Khi bơi ở sông, hồ, em PHẢI?', ['Đi với bạn cùng tuổi không biết bơi', 'Đi một mình', 'Bơi vào ban đêm', 'Có người lớn đi cùng giám sát'], 3, 'Phải có người lớn biết bơi giám sát.'),
    Q('Khi bị đuối nước, em nên?', ['Lặn xuống sâu', 'Đập tay bơm nước', 'Bình tĩnh, kêu cứu và cố nổi lên', 'Hoảng loạn'], 2, 'Bình tĩnh tăng cơ hội sống sót.'),
    Q('Thấy bạn đuối nước, em nên?', ['Cười nhạo', 'Nhảy xuống ôm bạn', 'Tự tìm phao, nhảy xuống kéo bạn lên', 'Gọi to người lớn, KHÔNG tự nhảy xuống cứu'], 3, 'Trẻ con không tự cứu, phải gọi người lớn.'),
    Q('Khi đi bơi, em nên mặc?', ['Đồ bơi phù hợp, có thể có phao tập bơi', 'Áo nặng', 'Cởi trần', 'Quần áo dài bình thường'], 0, 'Đồ bơi và phao hỗ trợ an toàn.'),
  ]),

  M(16, 'Bơi an toàn — Kiến thức (2)', [
    Q('Phao bơi giúp em?', ['Nổi an toàn khi mới tập bơi', 'Bơi nhanh hơn', 'Không cần thiết', 'Cản trở bơi'], 0, 'Phao hỗ trợ người mới tập.'),
    Q('Nơi nào KHÔNG nên bơi?', ['Hồ bơi có cứu hộ', 'Bể tập có huấn luyện viên', 'Sông sâu, hồ vắng, biển sóng to khi không có người lớn', 'Bể bơi gia đình có người lớn'], 2, 'Nơi nguy hiểm phải tránh.'),
    Q('Sau khi ăn xong, em có nên xuống bơi ngay?', ['Không, nên chờ ít nhất 30 phút – 1 giờ', 'Ăn xong là phải bơi ngay', 'Có, càng nhanh càng tốt', 'Có, nếu ăn ít thì bơi ngay được'], 0, 'Bơi ngay sau ăn dễ bị chuột rút, đau bụng.'),
    Q('Khi xuống nước, em cảm thấy lạnh, em nên?', ['Tiếp tục bơi mãi', 'Cố ở dưới nước', 'Lên bờ, lau khô và mặc ấm', 'Lặn sâu để ấm'], 2, 'Lạnh quá có thể nguy hiểm.'),
    Q('Kĩ năng bơi quan trọng vì?', ['Chỉ cần khi đi du lịch biển', 'Để khoe khoang', 'Có thể cứu mạng mình và người khác', 'Chỉ để chơi'], 2, 'Bơi là kĩ năng sinh tồn.'),
  ]),

  M(17, 'Trò chơi dân gian: Ô ăn quan', [
    Q('Ô ăn quan là?', ['Trò chơi điện tử', 'Trò chơi mới sáng tạo', 'Trò chơi dân gian Việt Nam dùng sỏi', 'Trò chơi nhập khẩu'], 2, 'Trò dân gian lâu đời.'),
    Q('Ô ăn quan rèn?', ['Tư duy tính toán và sự kiên nhẫn', 'Đá bóng', 'Vẽ đẹp', 'Hát hay'], 0, 'Rèn tư duy và kiên nhẫn.'),
    Q('Trò chơi cần?', ['Bàn cờ vua và quân cờ', 'Bàn vẽ trên đất hoặc giấy với 10 ô vuông + 2 ô bán nguyệt và sỏi', 'Máy tính', 'Dây thừng'], 1, 'Dụng cụ rất đơn giản.'),
    Q('Người chơi mỗi lần?', ['Ngồi yên', 'Vứt sỏi đi', 'Bốc sỏi từ 1 ô và rải đều vào các ô tiếp theo', 'Cầm hết sỏi'], 2, 'Luật rải sỏi đặc trưng.'),
    Q('Trò chơi dân gian em nên?', ['Trân trọng và chơi cùng bạn bè', 'Không quan tâm', 'Chê là quê mùa', 'Quên đi vì cũ'], 0, 'Giữ gìn truyền thống.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Khẩu lệnh "Tập hợp!" em nên?', ['Chạy lung tung', 'Đứng yên', 'Nhanh chóng xếp hàng', 'Tiếp tục trò chuyện với bạn bên cạnh'], 2, 'Tập hợp nhanh, ngay ngắn.'),
    Q('Trước khi tập thể dục em phải?', ['Đứng nghỉ tại chỗ chờ hiệu lệnh', 'Tập ngay vào động tác chính cho nhanh', 'Khởi động', 'Uống nhiều'], 2, 'Khởi động chống chấn thương.'),
    Q('Khi đuối nước, em nên?', ['Im lặng', 'Lặn xuống', 'Hoảng loạn', 'Bình tĩnh kêu cứu'], 3, 'Bình tĩnh tăng cơ hội an toàn.'),
    Q('Nhảy dây rèn?', ['Đau khớp', 'Yếu đi', 'Không có lợi', 'Nhanh nhẹn và bền sức'], 3, 'Nhảy dây bài tập tốt.'),
    Q('Ô ăn quan là?', ['Trò chơi dân gian VN', 'Trò chơi nhập khẩu', 'Đá bóng', 'Trò chơi điện tử'], 0, 'Trò dân gian truyền thống.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Trò chơi dân gian: Nhảy bao bố', [
    Q('Nhảy bao bố là?', ['Chạy không bao', 'Đá bóng', 'Đi bộ thật nhanh đến đích', 'Đứng trong bao và nhảy về đích'], 3, 'Trò chơi dân gian vui nhộn.'),
    Q('Khi nhảy bao, em cần?', ['Hai tay giữ chặt miệng bao, nhảy đều', 'Bước đi bình thường', 'Bỏ tay không giữ bao', 'Một tay giữ bao, một tay vẫy về phía trước'], 0, 'Giữ bao và nhảy là kĩ thuật chính.'),
    Q('Nếu ngã trong khi nhảy, em nên?', ['Đổ lỗi cho bao', 'Bình tĩnh đứng dậy nhảy tiếp', 'Bỏ cuộc', 'Cởi bao ra, đi bộ về đích cho nhanh'], 1, 'Kiên trì là quan trọng.'),
    Q('Nhảy bao bố rèn?', ['Đau khớp', 'Sức mạnh chân, sự cân bằng và tinh thần thi đua', 'Không có ích', 'Yếu đi'], 1, 'Vận động toàn thân.'),
    Q('Khi chơi tập thể, em nên?', ['Cười nhạo bạn ngã', 'Cãi nhau', 'Bỏ cuộc', 'Cổ vũ và đoàn kết với đồng đội'], 3, 'Tinh thần đoàn kết quan trọng.'),
  ]),

  M(20, 'Trò chơi dân gian: Kéo co', [
    Q('Kéo co là môn?', ['Cá nhân', 'Chạy tiếp sức cá nhân theo lượt', 'Đối kháng đồng đội kéo dây thừng', 'Ném bóng'], 2, 'Kéo co cần cả đội phối hợp.'),
    Q('Khi kéo co, cả đội cần?', ['Buông tay', 'Nắm chặt dây, dùng sức cùng lúc theo hô hiệu', 'Mỗi người kéo một kiểu', 'Cãi nhau'], 1, 'Đồng bộ là chìa khoá thắng.'),
    Q('Tư thế kéo đúng là?', ['Chân vững, người ngả về sau, hai tay nắm chắc dây', 'Ngồi xuống', 'Quay lưng', 'Đứng thẳng'], 0, 'Ngả người tận dụng trọng lực.'),
    Q('Kéo co rèn?', ['Yếu đi', 'Sức mạnh, đoàn kết và tinh thần đồng đội', 'Cô đơn', 'Không có lợi'], 1, 'Bài tập đồng đội tốt.'),
    Q('Khi thua, em nên?', ['Chấp nhận và chúc mừng đội thắng', 'Đề nghị trọng tài cho kéo lại lần nữa', 'Cãi vã', 'Đánh đội thắng'], 0, 'Tinh thần thể thao đẹp.'),
  ]),

  M(21, 'Trò chơi dân gian: Rồng rắn lên mây', [
    Q('"Rồng rắn lên mây" có?', ['Chỉ một người', 'Một bạn làm thầy thuốc, các bạn còn lại nối đuôi thành rồng rắn', 'Không có luật', 'Hai đội đá bóng'], 1, 'Trò chơi tập thể truyền thống.'),
    Q('Bạn đầu hàng có nhiệm vụ?', ['Tấn công thầy thuốc', 'Quay lưng', 'Bỏ chạy', 'Bảo vệ "đuôi" rồng khỏi bị thầy thuốc bắt'], 3, 'Bạn đầu là người che chở.'),
    Q('Khi chơi, em nên?', ['Đánh bạn', 'Cãi nhau', 'Bóp đau bạn', 'Vui vẻ, đoàn kết, nắm chặt nhưng không bóp đau bạn'], 3, 'Chơi đẹp và an toàn.'),
    Q('Trò chơi rèn?', ['Cô đơn', 'Yếu đi', 'Sự nhanh nhẹn, phối hợp và đoàn kết', 'Không có ích'], 2, 'Bài tập đồng đội vui nhộn.'),
    Q('Bài đồng dao trong trò này?', ['"Cò lả"', '"Đếm sao"', '"Em yêu trường em"', '"Rồng rắn lên mây, có cây núc nác…"'], 3, 'Có bài đồng dao kèm theo.'),
  ]),

  M(22, 'Bóng đá mini (1) — Đá bóng', [
    Q('Đá bóng bằng?', ['Gót chân', 'Mu bàn chân hoặc má trong', 'Ngực hoặc bụng đẩy bóng đi', 'Đầu gối'], 1, 'Các vị trí chân để đá.'),
    Q('Khi sút bóng, em nhìn?', ['Bóng và mục tiêu', 'Chỉ nhìn lên trời', 'Nhìn ra sau', 'Nhắm mắt'], 0, 'Nhìn bóng và đích sút.'),
    Q('Khi chuyền bóng cho bạn, em đá?', ['Đá đi xa', 'Vừa lực, đến chân bạn', 'Đá thật mạnh', 'Đá vào người bạn'], 1, 'Chuyền chính xác cho đồng đội.'),
    Q('Bóng đá là môn?', ['Cá nhân', 'Chỉ chơi một mình', 'Đối kháng đánh nhau', 'Đồng đội, cần phối hợp'], 3, 'Bóng đá đề cao tập thể.'),
    Q('Khi va chạm với bạn, em nên?', ['Bỏ cuộc', 'Đánh lại', 'Xin lỗi và hỏi bạn có sao không', 'Quát bạn'], 2, 'Tinh thần thể thao là quan trọng.'),
  ]),

  M(23, 'Bóng đá mini (2) — Trận đấu nhỏ', [
    Q('Mỗi đội bóng đá mini lớp 3 thường có?', ['1 người', '11 người', '5 người mỗi đội (futsal mini)', '20 người'], 2, 'Đội nhỏ phù hợp sân nhỏ và học sinh.'),
    Q('Khi thủ môn bắt bóng, em (cầu thủ) nên?', ['Lùi ra và sẵn sàng nhận chuyền', 'Đánh thủ môn', 'Bỏ ra ngoài', 'Lao vào tranh bóng với thủ môn'], 0, 'Thủ môn có quyền bắt bóng trong khu vực.'),
    Q('Khi đối thủ có bóng, em nên?', ['Đánh đối thủ', 'Phòng thủ và cố lấy bóng theo luật', 'Túm áo đối thủ', 'Đẩy ngã đối thủ'], 1, 'Phòng thủ trong luật.'),
    Q('Sau trận đấu, em nên?', ['Khinh thường khi thắng', 'Khóc khi thua', 'Bắt tay đối thủ, không phân biệt thắng thua', 'Cãi nhau'], 2, 'Bắt tay là tinh thần thể thao đẹp.'),
    Q('Bóng đá rèn?', ['Thể lực, phối hợp đồng đội, kỉ luật', 'Cô đơn', 'Yếu đi', 'Không có ích'], 0, 'Môn thể thao toàn diện.'),
  ]),

  M(24, 'Đi bộ và chạy bền', [
    Q('Chạy bền khác chạy nhanh ở?', ['Không có khác biệt', 'Chạy ngắn 30m', 'Chạy nhanh hơn', 'Chạy chậm hơn nhưng đều và lâu'], 3, 'Bền là chạy đều và lâu.'),
    Q('Khi chạy bền, em nên?', ['Chạy hết sức', 'Ngừng đột ngột', 'Giữ nhịp thở đều và bước chân ổn định', 'Nín thở'], 2, 'Đều đặn là chìa khoá bền.'),
    Q('Đi bộ thường xuyên giúp?', ['Không có lợi', 'Yếu đi', 'Khoẻ mạnh, ít bệnh tim mạch', 'Béo phì'], 2, 'Đi bộ là vận động tốt cho mọi lứa tuổi.'),
    Q('Khi chạy bị mệt quá, em nên?', ['Nằm xuống', 'Ngồi sụp', 'Chuyển sang đi bộ, không dừng đột ngột', 'Dừng đứng im'], 2, 'Hạ nhiệt từ từ.'),
    Q('Trước khi chạy bền, em nên?', ['Khởi động đầy đủ', 'Không chuẩn bị', 'Ăn một bữa thật no để có sức chạy', 'Uống nhiều nước có ga'], 0, 'Khởi động kĩ.'),
  ]),

  M(25, 'Trò chơi: Cướp cờ', [
    Q('Trò "Cướp cờ" có?', ['Hai đội đối kháng, lá cờ ở giữa, ai cướp về sân mình trước thắng', 'Một đội', 'Không có cờ', 'Không có luật'], 0, 'Trò chơi cổ điển.'),
    Q('Khi ra cướp cờ, em cần?', ['Chậm chạp', 'Đứng yên', 'Nhanh nhẹn, quan sát đối thủ', 'Nhắm mắt'], 2, 'Nhanh nhẹn và tinh ý.'),
    Q('Nếu bị đối phương vỗ trúng ở sân địch?', ['Vẫn được cờ', 'Cãi trọng tài', 'Bị loại lượt đó', 'Đánh lại đối phương'], 2, 'Tuân theo luật chơi.'),
    Q('Trò cướp cờ rèn?', ['Không có ích', 'Cô đơn', 'Nhanh nhẹn, chiến thuật và tinh thần đồng đội', 'Yếu đi'], 2, 'Vận động và tư duy.'),
    Q('Khi chơi, em nên?', ['Gian lận', 'Bỏ cuộc', 'Tôn trọng luật và công bằng', 'Cãi vã'], 2, 'Công bằng là tinh thần thể thao.'),
  ]),

  M(26, 'Tư thế đúng khi ngồi học', [
    Q('Ngồi học đúng tư thế là?', ['Mặt sát sách', 'Lưng thẳng, mắt cách sách 30cm', 'Nằm gục', 'Cong lưng'], 1, 'Tư thế đúng bảo vệ cột sống và mắt.'),
    Q('Ngồi sai tư thế lâu sẽ?', ['Đau lưng, cong vẹo cột sống, cận thị', 'Khoẻ hơn', 'Cao hơn', 'Không sao'], 0, 'Tư thế sai gây nhiều hậu quả.'),
    Q('Ghế ngồi học nên?', ['Thấp lè tè', 'Cao quá đầu', 'Ghế nhựa lung lay', 'Vừa với chiều cao, chân chạm đất'], 3, 'Ghế vừa giúp tư thế đúng.'),
    Q('Sau 30–45 phút học, em nên?', ['Ngồi liên tục cả ngày', 'Đứng dậy vận động nhẹ', 'Gục đầu xuống bàn ngủ một giấc', 'Ăn vặt liên tục để đỡ buồn ngủ'], 1, 'Vận động giữa giờ bảo vệ sức khoẻ.'),
    Q('Tay viết và tay giữ vở?', ['Hai tay khoanh', 'Tay giữ vở chống cằm', 'Tay viết co lên', 'Đều phải đặt thoải mái, vai không lệch'], 3, 'Vị trí tay đúng giúp viết lâu không mỏi.'),
  ]),

  M(27, 'Vệ sinh cá nhân khi vận động', [
    Q('Sau khi vận động em nên?', ['Để mồ hôi tự khô trên người', 'Tắm nước lạnh ngay', 'Lau mồ hôi, thay đồ khô, uống nước', 'Uống nước đá ào ào'], 2, 'Vệ sinh sau vận động giữ sức khoẻ.'),
    Q('Trang phục thể dục nên?', ['Áo dài rườm rà', 'Quần jeans chật', 'Gọn gàng, thoáng mát, thấm mồ hôi', 'Cởi trần'], 2, 'Trang phục phù hợp giúp vận động hiệu quả.'),
    Q('Giày thể thao nên?', ['Vừa chân, có đế chống trượt', 'Quá chật', 'Đi dép tổ ong', 'Quá rộng'], 0, 'Giày vừa và an toàn.'),
    Q('Trước khi vận động em không nên ăn?', ['Ăn nhẹ trước 1 giờ', 'Quá no, đồ nhiều dầu mỡ', 'Không ăn gì cả', 'Uống ít nước'], 1, 'Ăn no rồi vận động gây đau bụng.'),
    Q('Khi bị thương nhẹ, em nên?', ['Tự bôi thuốc lạ', 'Cố tập tiếp', 'Im lặng chịu', 'Báo cô và đến phòng y tế'], 3, 'Báo cô để xử lý đúng.'),
  ]),

  M(28, 'Trò chơi: Bịt mắt bắt dê', [
    Q('Trò "Bịt mắt bắt dê" là?', ['Không có ai', 'Cả lớp bịt mắt', '1 bạn bị bắt', '1 bạn bịt mắt đi bắt các bạn khác'], 3, 'Trò chơi dân gian quen thuộc.'),
    Q('Người bị bịt mắt cần?', ['Nhìn lén', 'Bỏ cuộc', 'Dùng tai nghe và tay sờ để định vị', 'Đứng yên'], 2, 'Phát triển giác quan khác khi mất thị giác.'),
    Q('Khi bị bắt, em nên?', ['Tháo khăn bịt mắt của bạn ra', 'Bỏ chạy mãi', 'Đứng yên cho người bịt mắt sờ đoán', 'Đẩy người bịt mắt'], 2, 'Tuân theo luật chơi.'),
    Q('Trò chơi rèn?', ['Yếu đi', 'Lười nhác', 'Không có ích', 'Thính giác và sự nhanh nhẹn'], 3, 'Phát triển giác quan.'),
    Q('Khi chơi, em nên?', ['Vui vẻ và an toàn cho mọi người', 'Đẩy bạn ngã', 'Trêu chọc quá đáng', 'Cãi nhau'], 0, 'An toàn là trên hết.'),
  ]),

  M(29, 'Ném bóng vào đích', [
    Q('Ném bóng vào đích cần?', ['Canh khoảng cách và lực ném', 'Ném thật mạnh', 'Nhắm mắt', 'Đứng quay lưng'], 0, 'Kĩ thuật và sự tập trung.'),
    Q('Tư thế ném bóng đúng?', ['Chân trái trước (với người thuận phải), tay sau vung trước', 'Quay lưng đích', 'Ngồi xuống', 'Đứng thẳng đứng'], 0, 'Tư thế tạo lực ném tốt.'),
    Q('Khi ném trượt, em nên?', ['Bỏ cuộc', 'Đập đồ', 'Bình tĩnh, ném lại, rút kinh nghiệm', 'Tức giận'], 2, 'Kiên trì là quan trọng.'),
    Q('Ném bóng vào đích rèn?', ['Không có lợi', 'Sự tập trung, chính xác và lực cánh tay', 'Đau mắt', 'Yếu đi'], 1, 'Phát triển kĩ năng vận động.'),
    Q('Em ném bóng nên ném ở đâu?', ['Lên trời ngẫu nhiên', 'Khu vực an toàn, không có người đi qua', 'Vào người bạn', 'Vào cửa kính'], 1, 'An toàn là quan trọng nhất.'),
  ]),

  M(30, 'Múa tập thể đơn giản', [
    Q('Múa tập thể là?', ['Đứng yên', 'Cãi nhau', 'Một người múa', 'Cùng nhau biểu diễn động tác theo nhạc'], 3, 'Múa cùng nhau.'),
    Q('Khi múa nhóm, em cần?', ['Không múa', 'Đứng yên', 'Đồng đều với cả nhóm', 'Múa khác hẳn để nổi bật'], 2, 'Đồng đều tạo hiệu ứng đẹp.'),
    Q('Học múa giúp em?', ['Mệt mỏi', 'Cảm thụ âm nhạc, vận động và biểu diễn', 'Yếu đi', 'Không có lợi'], 1, 'Múa tốt cho cả thể chất và tinh thần.'),
    Q('Khi quên động tác, em nên?', ['Tự nghĩ ra động tác riêng khác đội', 'Nhìn bạn bên cạnh và tiếp tục', 'Bỏ chạy', 'Đứng yên cả buổi'], 1, 'Linh hoạt là chìa khoá.'),
    Q('Trang phục múa nên?', ['Chật chội', 'Cồng kềnh', 'Gọn gàng, đẹp mắt, dễ vận động', 'Bừa bộn'], 2, 'Trang phục hỗ trợ múa.'),
  ]),

  M(31, 'Đứng lên ngồi xuống — Squat đơn giản', [
    Q('Squat (đứng lên ngồi xuống) đúng là?', ['Gối chụm vào trong', 'Lưng thẳng, gối không vượt mũi chân, hạ mông như ngồi ghế', 'Cúi lưng', 'Nhón gót lên'], 1, 'Tư thế squat đúng bảo vệ gối.'),
    Q('Squat rèn?', ['Không có gì', 'Cơ ngực', 'Cơ đùi, mông, lưng dưới', 'Cơ tay'], 2, 'Squat là bài tập nửa thân dưới.'),
    Q('Khi tập squat, em nên?', ['Không thở', 'Hít vào khi xuống, thở ra khi lên', 'Thở loạn', 'Nín thở'], 1, 'Hít thở đúng nhịp.'),
    Q('Số lần tập squat phù hợp lớp 3?', ['10–15 cái mỗi lượt', '100 cái liên tục', '1 cái rồi nghỉ', 'Không tập'], 0, 'Số lượng vừa phải.'),
    Q('Sau khi tập squat, em nên?', ['Thả lỏng và duỗi chân nhẹ', 'Tắm nước lạnh', 'Chạy ngay', 'Ngồi sụp'], 0, 'Thả lỏng tránh đau cơ.'),
  ]),

  M(32, 'Plank đơn giản — Giữ thăng bằng', [
    Q('Plank là?', ['Ngồi xổm', 'Đứng thẳng', 'Tư thế chống tay/khuỷu tay, giữ người thẳng', 'Nằm ngửa'], 2, 'Plank là bài giữ tĩnh.'),
    Q('Khi plank, em cần?', ['Đẩy mông cao', 'Cong lưng', 'Võng bụng xuống', 'Giữ lưng và mông thẳng hàng, không võng'], 3, 'Đường thẳng là chuẩn.'),
    Q('Plank rèn?', ['Yếu đi', 'Đau lưng', 'Không có gì', 'Cơ bụng, cơ lưng và sự ổn định cơ thể'], 3, 'Plank là bài tập core hiệu quả.'),
    Q('Lớp 3 nên plank?', ['10–20 giây mỗi lượt', '1 giây', '10 phút liên tục', 'Không bao giờ'], 0, 'Thời gian vừa sức.'),
    Q('Khi run hoặc đau lưng khi plank, em nên?', ['Nghỉ và tập lại sau', 'Bỏ tập thể dục', 'Cố giữ đến cùng', 'Cố nhịn đau, tăng thời gian giữ lâu hơn'], 0, 'Nghỉ khi cơ thể báo hiệu.'),
  ]),

  M(33, 'Đá cầu thi đấu nhóm', [
    Q('Đá cầu nhóm 3–5 người tâng qua lại nghĩa là?', ['Đá ra xa', 'Đá vào đầu nhau', 'Chỉ một người đá', 'Cầu không được rơi, mỗi bạn đá luân phiên'], 3, 'Phối hợp đá luân phiên.'),
    Q('Khi nhận cầu, em nên?', ['Quan sát và sẵn sàng tâng cầu lên', 'Bắt cầu bằng tay rồi tung lên', 'Bỏ chạy', 'Đá ra xa'], 0, 'Sẵn sàng nhận và tâng tiếp.'),
    Q('Khi cầu rơi, em nên?', ['Đổ lỗi cho bạn', 'Cãi nhau', 'Nhặt lên và bắt đầu lại, không đổ lỗi', 'Bỏ cuộc'], 2, 'Tinh thần thể thao đẹp.'),
    Q('Đá cầu nhóm rèn?', ['Yếu đi', 'Phối hợp đồng đội và kĩ thuật cá nhân', 'Cô đơn', 'Không có ích'], 1, 'Vừa cá nhân vừa đồng đội.'),
    Q('Đá cầu là môn?', ['Của Nhật', 'Truyền thống Việt Nam', 'Của Anh', 'Của Mỹ'], 1, 'Đá cầu phổ biến ở Đông Nam Á.'),
  ]),

  M(34, 'Trò chơi: Đá kiện', [
    Q('Đá kiện giống đá cầu nhưng?', ['Dùng tay', 'Dùng "kiện" tự làm từ bao và lông gà hoặc giấy', 'Dùng cầu lông', 'Dùng bóng đá'], 1, 'Kiện là biến thể dân gian.'),
    Q('Đá kiện rèn?', ['Đau chân', 'Sự khéo léo và nhanh nhẹn', 'Không có lợi', 'Yếu đi'], 1, 'Trò chơi vận động.'),
    Q('Em có thể tự làm kiện bằng?', ['Quả bóng tennis cứng', 'Túi nhỏ nhồi cát/đậu hoặc bọc tiền xu kèm tua giấy', 'Sắt nặng', 'Vật sắc nhọn'], 1, 'Vật liệu an toàn.'),
    Q('Khi đá kiện, em nên?', ['Đá vào kính', 'Đá trong phòng có đồ dễ vỡ', 'Đá ở nơi rộng rãi, không vướng người', 'Đá vào người bạn'], 2, 'An toàn là quan trọng.'),
    Q('Trò chơi dân gian giúp em?', ['Cô đơn', 'Không có ích', 'Gắn kết bạn bè và giữ truyền thống', 'Bỏ quên truyền thống'], 2, 'Trò dân gian giàu giá trị.'),
  ]),

  M(35, 'Tổng kết cuối năm', [
    Q('Trong năm em đã học?', ['Chỉ nhảy dây', 'Chỉ chạy', 'Bài thể dục liên hoàn, chạy, bật, nhảy dây, đá cầu, bóng rổ…', 'Không học gì'], 2, 'Đa dạng kĩ năng vận động.'),
    Q('Trước khi tập luôn cần?', ['Ăn một bữa thật no để có sức', 'Khởi động', 'Uống nhiều', 'Ngủ một giấc ngắn ngay trước khi tập'], 1, 'Khởi động bảo vệ cơ thể.'),
    Q('Bơi an toàn cần?', ['Không cần ai', 'Bơi đêm', 'Đi một mình', 'Có người lớn giám sát'], 3, 'An toàn là trên hết.'),
    Q('Trò chơi dân gian em đã học?', ['Chỉ điện tử', 'Mèo đuổi chuột, ô ăn quan, nhảy bao bố, kéo co…', 'Một trò duy nhất', 'Không có gì'], 1, 'Nhiều trò dân gian quý.'),
    Q('Để khoẻ mạnh, em cần?', ['Thức khuya', 'Vận động đều, ăn uống hợp lí, ngủ đủ', 'Ăn nhiều đồ ngọt', 'Lười vận động'], 1, 'Lối sống lành mạnh toàn diện.'),
  ], { difficulty: 2 }),
];

export const P3GDTC_SCENARIOS = indexBy(P3GDTC_WEEKS);
