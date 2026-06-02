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
    Q('Khẩu lệnh "Tập hợp!" em nên?', ['Nhanh chóng xếp hàng theo vị trí', 'Đứng yên', 'Chạy lung tung', 'Cười đùa'], 0, 'Tập hợp nhanh, ngay ngắn.'),
    Q('Đứng nghiêm thì hai tay?', ['Để xuôi theo thân, các ngón tay khép', 'Vung loạn xạ', 'Chống nạnh', 'Đút túi'], 0, 'Tư thế nghiêm chuẩn.'),
    Q('"Nghỉ!" thì em đứng thế nào?', ['Chân trái hoặc phải bước sang nhẹ, hai tay thả lỏng', 'Vẫn nghiêm cứng', 'Ngồi xuống', 'Nằm xuống'], 0, 'Tư thế thả lỏng nhưng vẫn trong hàng.'),
    Q('Khi tập hợp hàng dọc, em đứng?', ['Theo hàng dọc, nhìn theo gáy bạn phía trước', 'Hàng ngang', 'Tự do', 'Chéo nhau'], 0, 'Hàng dọc: nhìn gáy bạn trước.'),
    Q('Khẩu lệnh "Bên trái – quay!" em quay?', ['Sang trái 90 độ', 'Sang phải', 'Quay lưng', 'Đứng yên'], 0, 'Quay trái 90 độ.'),
  ]),

  M(2, 'Đi đều giữ hàng', [
    Q('Đi đều là?', ['Đi theo nhịp, tay vung đều, hàng ngũ thẳng', 'Đi nhanh chậm tuỳ ý', 'Chạy', 'Đứng yên'], 0, 'Đi đều theo nhịp đếm.'),
    Q('Đi đều đếm theo?', ['"1 – 2, 1 – 2…"', '"1 – 2 – 3"', 'Không đếm', 'Đếm ngẫu nhiên'], 0, 'Đếm 1–2 đều.'),
    Q('Khi đi đều, tay em?', ['Vung tự nhiên theo nhịp chân', 'Để yên', 'Vẫy loạn xạ', 'Chống nạnh'], 0, 'Vung tay đối nghịch với chân.'),
    Q('Để giữ hàng đều, em cần?', ['Bước cùng chân, cùng nhịp với cả tổ', 'Bước tuỳ ý', 'Đi nhanh hơn bạn', 'Đi chậm bỏ hàng'], 0, 'Đồng đều với cả hàng.'),
    Q('Khi đi đều mà bị tụt hàng, em nên?', ['Bước nhanh hơn để theo kịp', 'Bỏ hàng', 'Chạy vượt lên', 'Đứng lại'], 0, 'Theo kịp giữ hàng đều.'),
  ]),

  M(3, 'Bài thể dục liên hoàn (1)', [
    Q('Bài thể dục liên hoàn gồm?', ['Nhiều động tác nối tiếp theo thứ tự', 'Một động tác duy nhất', 'Các động tác rời rạc', 'Không có thứ tự'], 0, 'Liên hoàn = nối tiếp các động tác.'),
    Q('Trước khi tập thể dục, em cần?', ['Khởi động làm nóng cơ thể', 'Tập ngay', 'Ăn no', 'Uống nhiều nước'], 0, 'Khởi động tránh chấn thương.'),
    Q('Khởi động gồm?', ['Xoay cổ, vai, hông, gối, cổ chân', 'Chỉ đứng yên', 'Chạy thật nhanh', 'Nằm xuống'], 0, 'Xoay các khớp là khởi động cơ bản.'),
    Q('Động tác vươn thở (tay lên cao) giúp?', ['Hít sâu, mở rộng lồng ngực', 'Đau lưng', 'Mỏi tay', 'Không tác dụng'], 0, 'Vươn thở giúp hô hấp sâu.'),
    Q('Khi tập, em nên?', ['Hít thở đều và đúng nhịp', 'Nín thở', 'Thở hổn hển', 'Không thở'], 0, 'Hít thở đều giúp giữ sức.'),
  ]),

  M(4, 'Bài thể dục liên hoàn (2)', [
    Q('Động tác tay nghiêng sang hai bên giúp?', ['Mở rộng vai, cổ tay, sườn', 'Đau đầu', 'Mỏi chân', 'Không tác dụng'], 0, 'Vận động phần thân trên.'),
    Q('Động tác chân (đá chân trước) giúp?', ['Tăng linh hoạt khớp hông và sức cơ chân', 'Đau lưng', 'Mỏi vai', 'Không tác dụng'], 0, 'Vận động phần chân.'),
    Q('Khi tập sai động tác, em nên?', ['Nhờ cô sửa và tập lại', 'Bỏ qua', 'Cười cho qua', 'Bỏ tập'], 0, 'Tập đúng quan trọng hơn nhanh.'),
    Q('Sau khi tập xong, em nên?', ['Hít thở sâu thư giãn, uống nước', 'Ngồi yên ngay', 'Ăn nhiều ngay', 'Tắm nước lạnh ngay'], 0, 'Thư giãn nhẹ và bù nước.'),
    Q('Tập bài thể dục đều đặn giúp?', ['Khoẻ mạnh, dẻo dai', 'Béo phì', 'Yếu đi', 'Không tác dụng'], 0, 'Tập thường xuyên cho sức khoẻ tốt.'),
  ]),

  M(5, 'Trò chơi: Mèo đuổi chuột', [
    Q('Trò "Mèo đuổi chuột" có?', ['1 bạn làm mèo, 1 bạn làm chuột, các bạn còn lại nắm tay tạo vòng', 'Hai mèo', 'Không có ai', 'Toàn lớp làm mèo'], 0, 'Trò chơi dân gian quen thuộc.'),
    Q('Khi chơi, em nên?', ['Vui vẻ, công bằng, không gian lận', 'Cãi nhau', 'Đẩy mạnh bạn', 'Bỏ chơi giữa chừng'], 0, 'Chơi đẹp, đúng luật.'),
    Q('Mèo bắt được chuột thì?', ['Hai bạn đổi vai cho người khác', 'Cãi nhau', 'Đánh chuột', 'Bỏ về'], 0, 'Đổi vai để mọi người cùng chơi.'),
    Q('Trò chơi tập thể giúp em?', ['Đoàn kết, vui vẻ và rèn thể lực', 'Cô đơn', 'Mệt mỏi', 'Không có ích'], 0, 'Chơi cùng nhau là rèn cả thể chất và tinh thần.'),
    Q('Khi va vào bạn lúc chơi, em nên?', ['Xin lỗi và hỏi bạn có sao không', 'Đánh lại', 'Đổ lỗi cho bạn', 'Bỏ chạy'], 0, 'Lịch sự ngay cả khi chơi.'),
  ]),

  M(6, 'Chạy ngắn — Kĩ thuật xuất phát', [
    Q('Khi xuất phát chạy, em cần?', ['Tư thế hơi cúi, sẵn sàng lao đi khi có hiệu lệnh', 'Đứng thẳng đơ', 'Ngồi xuống', 'Nằm'], 0, 'Tư thế xuất phát hợp lý.'),
    Q('Hiệu lệnh chạy thường là?', ['"Vào chỗ! – Sẵn sàng! – Chạy!" hoặc tiếng còi', 'Vỗ tay', 'Hát', 'Im lặng'], 0, 'Hiệu lệnh rõ ràng khởi động chạy.'),
    Q('Khi chạy, mắt em nhìn?', ['Thẳng phía trước', 'Cúi xuống chân', 'Nhìn ra sau', 'Nhắm mắt'], 0, 'Nhìn thẳng giúp giữ thăng bằng.'),
    Q('Tay khi chạy?', ['Co lại, vung tự nhiên theo nhịp chân', 'Để xuôi', 'Để trên đầu', 'Chống nạnh'], 0, 'Vung tay đối nghịch chân.'),
    Q('Khi cán đích, em nên?', ['Chạy hết tốc lực qua vạch đích, không chậm lại', 'Dừng trước vạch', 'Đi bộ qua', 'Quay lại'], 0, 'Chạy hết qua vạch đích.'),
  ]),

  M(7, 'Chạy 30m', [
    Q('Chạy 30m là cự ly?', ['Ngắn, đòi hỏi tốc độ tối đa', 'Trung bình', 'Dài', 'Marathon'], 0, '30m là cự ly chạy ngắn.'),
    Q('Trước khi chạy 30m em nên?', ['Khởi động kĩ các khớp', 'Ăn no', 'Uống nhiều nước có ga', 'Không chuẩn bị'], 0, 'Khởi động tránh chấn thương.'),
    Q('Khi chạy 30m, em cần?', ['Dùng hết sức, chạy nhanh nhất có thể', 'Chạy chậm', 'Đi bộ', 'Bò'], 0, 'Cự ly ngắn chạy tốc độ tối đa.'),
    Q('Để cải thiện chạy 30m, em nên?', ['Tập đều đặn các bài chạy ngắn', 'Không tập', 'Chỉ tập một lần', 'Tập quá sức'], 0, 'Luyện tập đều mới tiến bộ.'),
    Q('Sau khi chạy nhanh, em nên?', ['Đi bộ chậm vài phút để cơ thể hồi phục', 'Ngồi sụp ngay', 'Uống nước lạnh ào ào', 'Tắm ngay nước lạnh'], 0, 'Hạ nhiệt từ từ là an toàn.'),
  ]),

  M(8, 'Bật xa tại chỗ', [
    Q('Bật xa tại chỗ là?', ['Đứng yên rồi bật cả hai chân ra phía trước', 'Chạy đà rồi bật', 'Nhảy bằng một chân', 'Bước đi'], 0, 'Bật xa tại chỗ không chạy đà.'),
    Q('Tư thế chuẩn bị bật?', ['Hai chân rộng bằng vai, hơi khuỵu gối, vung tay sau', 'Đứng thẳng đứng', 'Ngồi xổm', 'Co một chân'], 0, 'Tư thế tạo lực bật.'),
    Q('Khi bật, em vung tay?', ['Ra trước mạnh mẽ để hỗ trợ lực bật', 'Để xuôi', 'Vung ra sau', 'Khoanh tay'], 0, 'Vung tay trước giúp bật xa hơn.'),
    Q('Tiếp đất bằng?', ['Hai chân, hơi khuỵu gối để giảm chấn', 'Một chân', 'Mông ngồi xuống', 'Bụng'], 0, 'Tiếp đất an toàn giảm chấn thương.'),
    Q('Bật xa giúp rèn?', ['Sức mạnh cơ chân và sự bùng nổ', 'Đau gối', 'Yếu đi', 'Không tác dụng'], 0, 'Bật rèn sức mạnh cơ chân.'),
  ]),

  M(9, 'Nhảy dây cá nhân (1)', [
    Q('Nhảy dây cá nhân, em cầm dây bằng?', ['Hai tay, mỗi tay một đầu', 'Một tay', 'Không cầm', 'Buộc vào người'], 0, 'Mỗi tay cầm một đầu dây.'),
    Q('Khi nhảy, em bật?', ['Nhẹ bằng hai chân, ngay khi dây sắp chạm chân', 'Bật rất cao', 'Đứng yên', 'Ngồi xuống'], 0, 'Bật vừa đủ qua dây.'),
    Q('Tay quay dây bằng?', ['Cổ tay là chính', 'Cả cánh tay', 'Vai', 'Toàn thân'], 0, 'Quay bằng cổ tay nhẹ nhàng, đỡ mỏi.'),
    Q('Khi mới tập, em nên?', ['Quay chậm, bật nhẹ, dần tăng tốc', 'Quay nhanh ngay', 'Bật cao ngay', 'Bỏ tập'], 0, 'Tập chậm trước, nhanh sau.'),
    Q('Nhảy dây rèn?', ['Sự nhanh nhẹn, phối hợp và bền sức', 'Đau khớp', 'Yếu đi', 'Không có lợi'], 0, 'Nhảy dây là bài tập toàn thân tốt.'),
  ]),

  M(10, 'Nhảy dây cá nhân (2) — Kĩ thuật nâng cao', [
    Q('Nhảy dây chân chéo (1 chân trước 1 chân sau) là?', ['Kĩ thuật biến tấu vui, thử thách phối hợp', 'Cấm tập', 'Không an toàn', 'Vô bổ'], 0, 'Biến tấu rèn phối hợp.'),
    Q('Nhảy dây 2 vòng/lần bật (double under) là?', ['Quay dây 2 vòng trong một lần bật cao', 'Quay 1 vòng', 'Không quay', 'Đi bộ'], 0, 'Kĩ thuật nâng cao đòi hỏi bật cao.'),
    Q('Khi vướng dây, em nên?', ['Dừng lại sửa và tiếp tục', 'Tức giận đập dây', 'Bỏ cuộc', 'Quát bạn'], 0, 'Bình tĩnh tập lại là đúng.'),
    Q('Muốn nhảy dây nhiều cái liên tục, em cần?', ['Bền sức và giữ nhịp đều', 'Vội vàng', 'Hấp tấp', 'Bật cao quá'], 0, 'Bền và đều là chìa khoá.'),
    Q('Nên nhảy dây bao nhiêu phút mỗi ngày?', ['10–15 phút là vừa với lớp 3', '2 giờ liên tục', '30 giây', 'Không nhảy'], 0, '10–15 phút là an toàn và hiệu quả.'),
  ]),

  M(11, 'Đá cầu (1) — Kĩ thuật cơ bản', [
    Q('Đá cầu là môn?', ['Dùng chân tâng cầu lông gà', 'Đá bằng đầu', 'Đá bằng tay', 'Đá vào cầu môn'], 0, 'Đá cầu = tâng cầu bằng chân.'),
    Q('Cầu lông gà thường có?', ['Lông gà và đế nhựa hoặc cao su', 'Toàn nhựa cứng', 'Bằng sắt', 'Bằng giấy'], 0, 'Cấu tạo đặc trưng cầu đá.'),
    Q('Tâng cầu bằng?', ['Mu bàn chân, má trong, má ngoài', 'Gót chân', 'Đầu gối', 'Ngón chân'], 0, 'Các vị trí chân khác nhau.'),
    Q('Mắt khi đá cầu nhìn?', ['Theo cầu để canh thời điểm tâng', 'Nhìn xuống', 'Nhắm mắt', 'Nhìn người khác'], 0, 'Nhìn cầu giữ nhịp.'),
    Q('Khi tập đá cầu, em nên?', ['Tâng chậm và đều trước', 'Tâng nhanh ngay', 'Đá mạnh hết sức', 'Đá vào bạn'], 0, 'Tập chậm trước, nhanh sau.'),
  ]),

  M(12, 'Đá cầu (2) — Tâng cầu liên tục', [
    Q('Tâng cầu liên tục bằng mu bàn chân nghĩa là?', ['Đá cầu lên đều bằng mu chân, đếm số lần', 'Đá xa ra', 'Đá xuống đất', 'Đá vào bạn'], 0, 'Tâng tại chỗ, đếm số lần.'),
    Q('Để tâng cầu lâu, em cần?', ['Lực vừa phải và đều, cân bằng tốt', 'Đá thật mạnh', 'Đá không đều', 'Nhắm mắt'], 0, 'Đều và cân bằng là chìa khoá.'),
    Q('Trò chơi tâng cầu nhiều người là?', ['Đá luân phiên cho nhau, không để rơi', 'Chỉ một người chơi', 'Đá bóng', 'Đánh nhau'], 0, 'Chơi tập thể vui và bổ ích.'),
    Q('Sau khi đá cầu, em nên?', ['Thả lỏng cơ chân, đi bộ nhẹ', 'Ngồi sụp', 'Ngừng đột ngột', 'Tắm lạnh ngay'], 0, 'Hạ nhiệt và thả lỏng cơ.'),
    Q('Đá cầu là môn?', ['Truyền thống Việt Nam, có thi đấu quốc tế', 'Của Mỹ', 'Của châu Phi', 'Không có ở Việt Nam'], 0, 'Đá cầu phát triển ở nhiều nước Đông Nam Á.'),
  ]),

  M(13, 'Bóng rổ mini (1) — Cầm bóng và chuyền', [
    Q('Cầm bóng rổ đúng cách là?', ['Hai tay ôm bóng, các ngón mở tự nhiên', 'Một tay nắm chặt', 'Kẹp bóng giữa hai chân', 'Để bóng trên đầu'], 0, 'Hai tay ôm chắc nhưng không gồng.'),
    Q('Chuyền bóng cho bạn em nên?', ['Đẩy bằng hai tay, hướng đến ngực bạn', 'Ném mạnh vào mặt bạn', 'Đá bóng', 'Quăng bừa'], 0, 'Chuyền bằng hai tay đến ngực là chuẩn.'),
    Q('Trước khi chuyền, em nên?', ['Gọi tên bạn nhận để bạn chuẩn bị', 'Im lặng ném', 'Đánh lừa bạn', 'Quát to'], 0, 'Báo hiệu để bạn sẵn sàng.'),
    Q('Bóng rổ là môn?', ['Đồng đội, cần phối hợp', 'Cá nhân', 'Chỉ chơi một mình', 'Đối kháng đánh nhau'], 0, 'Bóng rổ đề cao đồng đội.'),
    Q('Khi nhận bóng, tay em?', ['Mở rộng đón bóng, kéo về thân', 'Để bóng đập vào ngực', 'Quay lưng đi', 'Nhắm mắt'], 0, 'Mở tay đón và kéo về cho an toàn.'),
  ]),

  M(14, 'Bóng rổ mini (2) — Dẫn bóng', [
    Q('Dẫn bóng (dribble) là?', ['Đập bóng xuống đất liên tục bằng một tay', 'Cầm bóng chạy', 'Đá bóng', 'Ném bóng đi xa'], 0, 'Dribble là kỹ thuật cơ bản bóng rổ.'),
    Q('Khi dẫn bóng, em nên?', ['Đập bóng vừa tầm hông, tay đẩy nhẹ', 'Đập bóng cao quá đầu', 'Đập bóng thật mạnh', 'Đứng yên'], 0, 'Đập vừa tầm dễ kiểm soát.'),
    Q('Mắt nhìn ở đâu khi dẫn bóng?', ['Nhìn phía trước, không cúi xuống bóng', 'Cúi nhìn bóng liên tục', 'Nhìn ra sau', 'Nhắm mắt'], 0, 'Nhìn phía trước để quan sát đồng đội/đối thủ.'),
    Q('Dẫn bóng bằng?', ['Các ngón tay, không phải lòng bàn tay đập', 'Cánh tay', 'Khuỷu tay', 'Vai'], 0, 'Ngón tay điều khiển bóng tốt hơn.'),
    Q('Trong bóng rổ, nếu cầm bóng chạy là?', ['Phạm luật (gọi là "đi bộ")', 'Đúng luật', 'Khuyến khích', 'Không có luật'], 0, 'Phải dẫn bóng khi di chuyển.'),
  ]),

  M(15, 'Bơi an toàn — Kiến thức (1)', [
    Q('Trước khi xuống nước em cần?', ['Khởi động và biết sâu nông của vùng nước', 'Nhảy ngay', 'Ăn no rồi xuống', 'Không cần chuẩn bị'], 0, 'An toàn là quan trọng nhất.'),
    Q('Khi bơi ở sông, hồ, em PHẢI?', ['Có người lớn đi cùng giám sát', 'Đi một mình', 'Đi với bạn cùng tuổi không biết bơi', 'Bơi vào ban đêm'], 0, 'Phải có người lớn biết bơi giám sát.'),
    Q('Khi bị đuối nước, em nên?', ['Bình tĩnh, kêu cứu và cố nổi lên', 'Hoảng loạn', 'Lặn xuống sâu', 'Đập tay bơm nước'], 0, 'Bình tĩnh tăng cơ hội sống sót.'),
    Q('Thấy bạn đuối nước, em nên?', ['Gọi to người lớn, KHÔNG tự nhảy xuống cứu', 'Nhảy xuống ôm bạn', 'Bỏ đi', 'Cười nhạo'], 0, 'Trẻ con không tự cứu, phải gọi người lớn.'),
    Q('Khi đi bơi, em nên mặc?', ['Đồ bơi phù hợp, có thể có phao tập bơi', 'Quần áo dài bình thường', 'Áo nặng', 'Cởi trần'], 0, 'Đồ bơi và phao hỗ trợ an toàn.'),
  ]),

  M(16, 'Bơi an toàn — Kiến thức (2)', [
    Q('Phao bơi giúp em?', ['Nổi an toàn khi mới tập bơi', 'Bơi nhanh hơn', 'Không cần thiết', 'Cản trở bơi'], 0, 'Phao hỗ trợ người mới tập.'),
    Q('Nơi nào KHÔNG nên bơi?', ['Sông sâu, hồ vắng, biển sóng to khi không có người lớn', 'Hồ bơi có cứu hộ', 'Bể bơi gia đình có người lớn', 'Bể tập có huấn luyện viên'], 0, 'Nơi nguy hiểm phải tránh.'),
    Q('Sau khi ăn xong, em có nên xuống bơi ngay?', ['Không, nên chờ ít nhất 30 phút – 1 giờ', 'Có, càng nhanh càng tốt', 'Không quan trọng', 'Ăn xong là phải bơi ngay'], 0, 'Bơi ngay sau ăn dễ bị chuột rút, đau bụng.'),
    Q('Khi xuống nước, em cảm thấy lạnh, em nên?', ['Lên bờ, lau khô và mặc ấm', 'Cố ở dưới nước', 'Lặn sâu để ấm', 'Tiếp tục bơi mãi'], 0, 'Lạnh quá có thể nguy hiểm.'),
    Q('Kĩ năng bơi quan trọng vì?', ['Có thể cứu mạng mình và người khác', 'Để khoe khoang', 'Không quan trọng', 'Chỉ để chơi'], 0, 'Bơi là kĩ năng sinh tồn.'),
  ]),

  M(17, 'Trò chơi dân gian: Ô ăn quan', [
    Q('Ô ăn quan là?', ['Trò chơi dân gian Việt Nam dùng sỏi', 'Trò chơi điện tử', 'Trò chơi nhập khẩu', 'Trò chơi mới sáng tạo'], 0, 'Trò dân gian lâu đời.'),
    Q('Ô ăn quan rèn?', ['Tư duy tính toán và sự kiên nhẫn', 'Đá bóng', 'Hát hay', 'Vẽ đẹp'], 0, 'Rèn tư duy và kiên nhẫn.'),
    Q('Trò chơi cần?', ['Bàn vẽ trên đất hoặc giấy với 10 ô vuông + 2 ô bán nguyệt và sỏi', 'Máy tính', 'Bóng', 'Dây thừng'], 0, 'Dụng cụ rất đơn giản.'),
    Q('Người chơi mỗi lần?', ['Bốc sỏi từ 1 ô và rải đều vào các ô tiếp theo', 'Vứt sỏi đi', 'Cầm hết sỏi', 'Ngồi yên'], 0, 'Luật rải sỏi đặc trưng.'),
    Q('Trò chơi dân gian em nên?', ['Trân trọng và chơi cùng bạn bè', 'Quên đi vì cũ', 'Chê là quê mùa', 'Không quan tâm'], 0, 'Giữ gìn truyền thống.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Khẩu lệnh "Tập hợp!" em nên?', ['Nhanh chóng xếp hàng', 'Đứng yên', 'Bỏ đi', 'Chạy lung tung'], 0, 'Tập hợp nhanh, ngay ngắn.'),
    Q('Trước khi tập thể dục em phải?', ['Khởi động', 'Ăn no', 'Uống nhiều', 'Ngủ'], 0, 'Khởi động chống chấn thương.'),
    Q('Khi đuối nước, em nên?', ['Bình tĩnh kêu cứu', 'Hoảng loạn', 'Lặn xuống', 'Im lặng'], 0, 'Bình tĩnh tăng cơ hội an toàn.'),
    Q('Nhảy dây rèn?', ['Nhanh nhẹn và bền sức', 'Đau khớp', 'Yếu đi', 'Không có lợi'], 0, 'Nhảy dây bài tập tốt.'),
    Q('Ô ăn quan là?', ['Trò chơi dân gian VN', 'Trò chơi điện tử', 'Trò chơi nhập khẩu', 'Đá bóng'], 0, 'Trò dân gian truyền thống.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Trò chơi dân gian: Nhảy bao bố', [
    Q('Nhảy bao bố là?', ['Đứng trong bao và nhảy về đích', 'Đá bóng', 'Chạy không bao', 'Đi bộ'], 0, 'Trò chơi dân gian vui nhộn.'),
    Q('Khi nhảy bao, em cần?', ['Hai tay giữ chặt miệng bao, nhảy đều', 'Bỏ tay không giữ bao', 'Bước đi bình thường', 'Bò'], 0, 'Giữ bao và nhảy là kĩ thuật chính.'),
    Q('Nếu ngã trong khi nhảy, em nên?', ['Bình tĩnh đứng dậy nhảy tiếp', 'Khóc', 'Bỏ cuộc', 'Đổ lỗi cho bao'], 0, 'Kiên trì là quan trọng.'),
    Q('Nhảy bao bố rèn?', ['Sức mạnh chân, sự cân bằng và tinh thần thi đua', 'Yếu đi', 'Đau khớp', 'Không có ích'], 0, 'Vận động toàn thân.'),
    Q('Khi chơi tập thể, em nên?', ['Cổ vũ và đoàn kết với đồng đội', 'Cãi nhau', 'Cười nhạo bạn ngã', 'Bỏ cuộc'], 0, 'Tinh thần đoàn kết quan trọng.'),
  ]),

  M(20, 'Trò chơi dân gian: Kéo co', [
    Q('Kéo co là môn?', ['Đối kháng đồng đội kéo dây thừng', 'Cá nhân', 'Ném bóng', 'Chạy'], 0, 'Kéo co cần cả đội phối hợp.'),
    Q('Khi kéo co, cả đội cần?', ['Nắm chặt dây, dùng sức cùng lúc theo hô hiệu', 'Mỗi người kéo một kiểu', 'Buông tay', 'Cãi nhau'], 0, 'Đồng bộ là chìa khoá thắng.'),
    Q('Tư thế kéo đúng là?', ['Chân vững, người ngả về sau, hai tay nắm chắc dây', 'Đứng thẳng', 'Ngồi xuống', 'Quay lưng'], 0, 'Ngả người tận dụng trọng lực.'),
    Q('Kéo co rèn?', ['Sức mạnh, đoàn kết và tinh thần đồng đội', 'Cô đơn', 'Yếu đi', 'Không có lợi'], 0, 'Bài tập đồng đội tốt.'),
    Q('Khi thua, em nên?', ['Chấp nhận và chúc mừng đội thắng', 'Cãi vã', 'Bỏ về', 'Đánh đội thắng'], 0, 'Tinh thần thể thao đẹp.'),
  ]),

  M(21, 'Trò chơi dân gian: Rồng rắn lên mây', [
    Q('"Rồng rắn lên mây" có?', ['Một bạn làm thầy thuốc, các bạn còn lại nối đuôi thành rồng rắn', 'Hai đội đá bóng', 'Chỉ một người', 'Không có luật'], 0, 'Trò chơi tập thể truyền thống.'),
    Q('Bạn đầu hàng có nhiệm vụ?', ['Bảo vệ "đuôi" rồng khỏi bị thầy thuốc bắt', 'Tấn công thầy thuốc', 'Bỏ chạy', 'Quay lưng'], 0, 'Bạn đầu là người che chở.'),
    Q('Khi chơi, em nên?', ['Vui vẻ, đoàn kết, nắm chặt nhưng không bóp đau bạn', 'Bóp đau bạn', 'Cãi nhau', 'Đánh bạn'], 0, 'Chơi đẹp và an toàn.'),
    Q('Trò chơi rèn?', ['Sự nhanh nhẹn, phối hợp và đoàn kết', 'Yếu đi', 'Cô đơn', 'Không có ích'], 0, 'Bài tập đồng đội vui nhộn.'),
    Q('Bài đồng dao trong trò này?', ['"Rồng rắn lên mây, có cây núc nác…"', '"Cò lả"', '"Đếm sao"', '"Em yêu trường em"'], 0, 'Có bài đồng dao kèm theo.'),
  ]),

  M(22, 'Bóng đá mini (1) — Đá bóng', [
    Q('Đá bóng bằng?', ['Mu bàn chân hoặc má trong', 'Gót chân', 'Đầu gối', 'Tay'], 0, 'Các vị trí chân để đá.'),
    Q('Khi sút bóng, em nhìn?', ['Bóng và mục tiêu', 'Chỉ nhìn lên trời', 'Nhắm mắt', 'Nhìn ra sau'], 0, 'Nhìn bóng và đích sút.'),
    Q('Khi chuyền bóng cho bạn, em đá?', ['Vừa lực, đến chân bạn', 'Đá thật mạnh', 'Đá đi xa', 'Đá vào người bạn'], 0, 'Chuyền chính xác cho đồng đội.'),
    Q('Bóng đá là môn?', ['Đồng đội, cần phối hợp', 'Cá nhân', 'Đối kháng đánh nhau', 'Chỉ chơi một mình'], 0, 'Bóng đá đề cao tập thể.'),
    Q('Khi va chạm với bạn, em nên?', ['Xin lỗi và hỏi bạn có sao không', 'Đánh lại', 'Quát bạn', 'Bỏ cuộc'], 0, 'Tinh thần thể thao là quan trọng.'),
  ]),

  M(23, 'Bóng đá mini (2) — Trận đấu nhỏ', [
    Q('Mỗi đội bóng đá mini lớp 3 thường có?', ['5 người mỗi đội (futsal mini)', '11 người', '20 người', '1 người'], 0, 'Đội nhỏ phù hợp sân nhỏ và học sinh.'),
    Q('Khi thủ môn bắt bóng, em (cầu thủ) nên?', ['Lùi ra và sẵn sàng nhận chuyền', 'Lao vào tranh bóng với thủ môn', 'Đánh thủ môn', 'Bỏ ra ngoài'], 0, 'Thủ môn có quyền bắt bóng trong khu vực.'),
    Q('Khi đối thủ có bóng, em nên?', ['Phòng thủ và cố lấy bóng theo luật', 'Đẩy ngã đối thủ', 'Túm áo đối thủ', 'Đánh đối thủ'], 0, 'Phòng thủ trong luật.'),
    Q('Sau trận đấu, em nên?', ['Bắt tay đối thủ, không phân biệt thắng thua', 'Cãi nhau', 'Khóc khi thua', 'Khinh thường khi thắng'], 0, 'Bắt tay là tinh thần thể thao đẹp.'),
    Q('Bóng đá rèn?', ['Thể lực, phối hợp đồng đội, kỉ luật', 'Yếu đi', 'Cô đơn', 'Không có ích'], 0, 'Môn thể thao toàn diện.'),
  ]),

  M(24, 'Đi bộ và chạy bền', [
    Q('Chạy bền khác chạy nhanh ở?', ['Chạy chậm hơn nhưng đều và lâu', 'Chạy nhanh hơn', 'Chạy ngắn 30m', 'Không có khác biệt'], 0, 'Bền là chạy đều và lâu.'),
    Q('Khi chạy bền, em nên?', ['Giữ nhịp thở đều và bước chân ổn định', 'Chạy hết sức', 'Nín thở', 'Ngừng đột ngột'], 0, 'Đều đặn là chìa khoá bền.'),
    Q('Đi bộ thường xuyên giúp?', ['Khoẻ mạnh, ít bệnh tim mạch', 'Béo phì', 'Yếu đi', 'Không có lợi'], 0, 'Đi bộ là vận động tốt cho mọi lứa tuổi.'),
    Q('Khi chạy bị mệt quá, em nên?', ['Chuyển sang đi bộ, không dừng đột ngột', 'Dừng đứng im', 'Ngồi sụp', 'Nằm xuống'], 0, 'Hạ nhiệt từ từ.'),
    Q('Trước khi chạy bền, em nên?', ['Khởi động đầy đủ', 'Ăn no', 'Uống nhiều nước có ga', 'Không chuẩn bị'], 0, 'Khởi động kĩ.'),
  ]),

  M(25, 'Trò chơi: Cướp cờ', [
    Q('Trò "Cướp cờ" có?', ['Hai đội đối kháng, lá cờ ở giữa, ai cướp về sân mình trước thắng', 'Một đội', 'Không có cờ', 'Không có luật'], 0, 'Trò chơi cổ điển.'),
    Q('Khi ra cướp cờ, em cần?', ['Nhanh nhẹn, quan sát đối thủ', 'Chậm chạp', 'Nhắm mắt', 'Đứng yên'], 0, 'Nhanh nhẹn và tinh ý.'),
    Q('Nếu bị đối phương vỗ trúng ở sân địch?', ['Bị loại lượt đó', 'Vẫn được cờ', 'Đánh lại đối phương', 'Cãi trọng tài'], 0, 'Tuân theo luật chơi.'),
    Q('Trò cướp cờ rèn?', ['Nhanh nhẹn, chiến thuật và tinh thần đồng đội', 'Yếu đi', 'Cô đơn', 'Không có ích'], 0, 'Vận động và tư duy.'),
    Q('Khi chơi, em nên?', ['Tôn trọng luật và công bằng', 'Gian lận', 'Cãi vã', 'Bỏ cuộc'], 0, 'Công bằng là tinh thần thể thao.'),
  ]),

  M(26, 'Tư thế đúng khi ngồi học', [
    Q('Ngồi học đúng tư thế là?', ['Lưng thẳng, mắt cách sách 30cm', 'Cong lưng', 'Mặt sát sách', 'Nằm gục'], 0, 'Tư thế đúng bảo vệ cột sống và mắt.'),
    Q('Ngồi sai tư thế lâu sẽ?', ['Đau lưng, cong vẹo cột sống, cận thị', 'Khoẻ hơn', 'Cao hơn', 'Không sao'], 0, 'Tư thế sai gây nhiều hậu quả.'),
    Q('Ghế ngồi học nên?', ['Vừa với chiều cao, chân chạm đất', 'Cao quá đầu', 'Thấp lè tè', 'Ghế nhựa lung lay'], 0, 'Ghế vừa giúp tư thế đúng.'),
    Q('Sau 30–45 phút học, em nên?', ['Đứng dậy vận động nhẹ', 'Ngồi liên tục cả ngày', 'Ngủ', 'Ăn'], 0, 'Vận động giữa giờ bảo vệ sức khoẻ.'),
    Q('Tay viết và tay giữ vở?', ['Đều phải đặt thoải mái, vai không lệch', 'Tay viết co lên', 'Tay giữ vở chống cằm', 'Hai tay khoanh'], 0, 'Vị trí tay đúng giúp viết lâu không mỏi.'),
  ]),

  M(27, 'Vệ sinh cá nhân khi vận động', [
    Q('Sau khi vận động em nên?', ['Lau mồ hôi, thay đồ khô, uống nước', 'Để mồ hôi tự khô trên người', 'Tắm nước lạnh ngay', 'Uống nước đá ào ào'], 0, 'Vệ sinh sau vận động giữ sức khoẻ.'),
    Q('Trang phục thể dục nên?', ['Gọn gàng, thoáng mát, thấm mồ hôi', 'Áo dài rườm rà', 'Quần jeans chật', 'Cởi trần'], 0, 'Trang phục phù hợp giúp vận động hiệu quả.'),
    Q('Giày thể thao nên?', ['Vừa chân, có đế chống trượt', 'Quá rộng', 'Quá chật', 'Đi dép tổ ong'], 0, 'Giày vừa và an toàn.'),
    Q('Trước khi vận động em không nên ăn?', ['Quá no, đồ nhiều dầu mỡ', 'Ăn nhẹ trước 1 giờ', 'Uống ít nước', 'Không ăn gì cả'], 0, 'Ăn no rồi vận động gây đau bụng.'),
    Q('Khi bị thương nhẹ, em nên?', ['Báo cô và đến phòng y tế', 'Im lặng chịu', 'Tự bôi thuốc lạ', 'Cố tập tiếp'], 0, 'Báo cô để xử lý đúng.'),
  ]),

  M(28, 'Trò chơi: Bịt mắt bắt dê', [
    Q('Trò "Bịt mắt bắt dê" là?', ['1 bạn bịt mắt đi bắt các bạn khác', '1 bạn bị bắt', 'Không có ai', 'Cả lớp bịt mắt'], 0, 'Trò chơi dân gian quen thuộc.'),
    Q('Người bị bịt mắt cần?', ['Dùng tai nghe và tay sờ để định vị', 'Nhìn lén', 'Bỏ cuộc', 'Đứng yên'], 0, 'Phát triển giác quan khác khi mất thị giác.'),
    Q('Khi bị bắt, em nên?', ['Đứng yên cho người bịt mắt sờ đoán', 'Đẩy người bịt mắt', 'Cãi', 'Bỏ chạy mãi'], 0, 'Tuân theo luật chơi.'),
    Q('Trò chơi rèn?', ['Thính giác và sự nhanh nhẹn', 'Yếu đi', 'Lười nhác', 'Không có ích'], 0, 'Phát triển giác quan.'),
    Q('Khi chơi, em nên?', ['Vui vẻ và an toàn cho mọi người', 'Đẩy bạn ngã', 'Cãi nhau', 'Trêu chọc quá đáng'], 0, 'An toàn là trên hết.'),
  ]),

  M(29, 'Ném bóng vào đích', [
    Q('Ném bóng vào đích cần?', ['Canh khoảng cách và lực ném', 'Ném thật mạnh', 'Nhắm mắt', 'Đứng quay lưng'], 0, 'Kĩ thuật và sự tập trung.'),
    Q('Tư thế ném bóng đúng?', ['Chân trái trước (với người thuận phải), tay sau vung trước', 'Đứng thẳng đứng', 'Ngồi xuống', 'Quay lưng đích'], 0, 'Tư thế tạo lực ném tốt.'),
    Q('Khi ném trượt, em nên?', ['Bình tĩnh, ném lại, rút kinh nghiệm', 'Tức giận', 'Đập đồ', 'Bỏ cuộc'], 0, 'Kiên trì là quan trọng.'),
    Q('Ném bóng vào đích rèn?', ['Sự tập trung, chính xác và lực cánh tay', 'Yếu đi', 'Đau mắt', 'Không có lợi'], 0, 'Phát triển kĩ năng vận động.'),
    Q('Em ném bóng nên ném ở đâu?', ['Khu vực an toàn, không có người đi qua', 'Vào người bạn', 'Vào cửa kính', 'Lên trời ngẫu nhiên'], 0, 'An toàn là quan trọng nhất.'),
  ]),

  M(30, 'Múa tập thể đơn giản', [
    Q('Múa tập thể là?', ['Cùng nhau biểu diễn động tác theo nhạc', 'Một người múa', 'Đứng yên', 'Cãi nhau'], 0, 'Múa cùng nhau.'),
    Q('Khi múa nhóm, em cần?', ['Đồng đều với cả nhóm', 'Múa khác hẳn để nổi bật', 'Không múa', 'Đứng yên'], 0, 'Đồng đều tạo hiệu ứng đẹp.'),
    Q('Học múa giúp em?', ['Cảm thụ âm nhạc, vận động và biểu diễn', 'Không có lợi', 'Mệt mỏi', 'Yếu đi'], 0, 'Múa tốt cho cả thể chất và tinh thần.'),
    Q('Khi quên động tác, em nên?', ['Nhìn bạn bên cạnh và tiếp tục', 'Bỏ chạy', 'Khóc', 'Đứng yên cả buổi'], 0, 'Linh hoạt là chìa khoá.'),
    Q('Trang phục múa nên?', ['Gọn gàng, đẹp mắt, dễ vận động', 'Cồng kềnh', 'Chật chội', 'Bừa bộn'], 0, 'Trang phục hỗ trợ múa.'),
  ]),

  M(31, 'Đứng lên ngồi xuống — Squat đơn giản', [
    Q('Squat (đứng lên ngồi xuống) đúng là?', ['Lưng thẳng, gối không vượt mũi chân, hạ mông như ngồi ghế', 'Cúi lưng', 'Gối chụm vào trong', 'Nhón gót lên'], 0, 'Tư thế squat đúng bảo vệ gối.'),
    Q('Squat rèn?', ['Cơ đùi, mông, lưng dưới', 'Cơ tay', 'Cơ ngực', 'Không có gì'], 0, 'Squat là bài tập nửa thân dưới.'),
    Q('Khi tập squat, em nên?', ['Hít vào khi xuống, thở ra khi lên', 'Nín thở', 'Thở loạn', 'Không thở'], 0, 'Hít thở đúng nhịp.'),
    Q('Số lần tập squat phù hợp lớp 3?', ['10–15 cái mỗi lượt', '100 cái liên tục', '1 cái rồi nghỉ', 'Không tập'], 0, 'Số lượng vừa phải.'),
    Q('Sau khi tập squat, em nên?', ['Thả lỏng và duỗi chân nhẹ', 'Ngồi sụp', 'Chạy ngay', 'Tắm nước lạnh'], 0, 'Thả lỏng tránh đau cơ.'),
  ]),

  M(32, 'Plank đơn giản — Giữ thăng bằng', [
    Q('Plank là?', ['Tư thế chống tay/khuỷu tay, giữ người thẳng', 'Nằm ngửa', 'Đứng thẳng', 'Ngồi xổm'], 0, 'Plank là bài giữ tĩnh.'),
    Q('Khi plank, em cần?', ['Giữ lưng và mông thẳng hàng, không võng', 'Võng bụng xuống', 'Đẩy mông cao', 'Cong lưng'], 0, 'Đường thẳng là chuẩn.'),
    Q('Plank rèn?', ['Cơ bụng, cơ lưng và sự ổn định cơ thể', 'Đau lưng', 'Không có gì', 'Yếu đi'], 0, 'Plank là bài tập core hiệu quả.'),
    Q('Lớp 3 nên plank?', ['10–20 giây mỗi lượt', '10 phút liên tục', 'Không bao giờ', '1 giây'], 0, 'Thời gian vừa sức.'),
    Q('Khi run hoặc đau lưng khi plank, em nên?', ['Nghỉ và tập lại sau', 'Cố giữ đến cùng', 'Khóc', 'Bỏ tập thể dục'], 0, 'Nghỉ khi cơ thể báo hiệu.'),
  ]),

  M(33, 'Đá cầu thi đấu nhóm', [
    Q('Đá cầu nhóm 3–5 người tâng qua lại nghĩa là?', ['Cầu không được rơi, mỗi bạn đá luân phiên', 'Chỉ một người đá', 'Đá ra xa', 'Đá vào đầu nhau'], 0, 'Phối hợp đá luân phiên.'),
    Q('Khi nhận cầu, em nên?', ['Quan sát và sẵn sàng tâng cầu lên', 'Bỏ chạy', 'Cười', 'Đá ra xa'], 0, 'Sẵn sàng nhận và tâng tiếp.'),
    Q('Khi cầu rơi, em nên?', ['Nhặt lên và bắt đầu lại, không đổ lỗi', 'Đổ lỗi cho bạn', 'Cãi nhau', 'Bỏ cuộc'], 0, 'Tinh thần thể thao đẹp.'),
    Q('Đá cầu nhóm rèn?', ['Phối hợp đồng đội và kĩ thuật cá nhân', 'Cô đơn', 'Yếu đi', 'Không có ích'], 0, 'Vừa cá nhân vừa đồng đội.'),
    Q('Đá cầu là môn?', ['Truyền thống Việt Nam', 'Của Anh', 'Của Mỹ', 'Của Nhật'], 0, 'Đá cầu phổ biến ở Đông Nam Á.'),
  ]),

  M(34, 'Trò chơi: Đá kiện', [
    Q('Đá kiện giống đá cầu nhưng?', ['Dùng "kiện" tự làm từ bao và lông gà hoặc giấy', 'Dùng bóng đá', 'Dùng cầu lông', 'Dùng tay'], 0, 'Kiện là biến thể dân gian.'),
    Q('Đá kiện rèn?', ['Sự khéo léo và nhanh nhẹn', 'Yếu đi', 'Đau chân', 'Không có lợi'], 0, 'Trò chơi vận động.'),
    Q('Em có thể tự làm kiện bằng?', ['Túi nhỏ nhồi cát/đậu hoặc bọc tiền xu kèm tua giấy', 'Sắt nặng', 'Đá', 'Vật sắc nhọn'], 0, 'Vật liệu an toàn.'),
    Q('Khi đá kiện, em nên?', ['Đá ở nơi rộng rãi, không vướng người', 'Đá trong phòng có đồ dễ vỡ', 'Đá vào người bạn', 'Đá vào kính'], 0, 'An toàn là quan trọng.'),
    Q('Trò chơi dân gian giúp em?', ['Gắn kết bạn bè và giữ truyền thống', 'Cô đơn', 'Bỏ quên truyền thống', 'Không có ích'], 0, 'Trò dân gian giàu giá trị.'),
  ]),

  M(35, 'Tổng kết cuối năm', [
    Q('Trong năm em đã học?', ['Bài thể dục liên hoàn, chạy, bật, nhảy dây, đá cầu, bóng rổ…', 'Chỉ chạy', 'Chỉ nhảy dây', 'Không học gì'], 0, 'Đa dạng kĩ năng vận động.'),
    Q('Trước khi tập luôn cần?', ['Khởi động', 'Ăn no', 'Uống nhiều', 'Ngủ'], 0, 'Khởi động bảo vệ cơ thể.'),
    Q('Bơi an toàn cần?', ['Có người lớn giám sát', 'Đi một mình', 'Bơi đêm', 'Không cần ai'], 0, 'An toàn là trên hết.'),
    Q('Trò chơi dân gian em đã học?', ['Mèo đuổi chuột, ô ăn quan, nhảy bao bố, kéo co…', 'Chỉ điện tử', 'Không có gì', 'Một trò duy nhất'], 0, 'Nhiều trò dân gian quý.'),
    Q('Để khoẻ mạnh, em cần?', ['Vận động đều, ăn uống hợp lí, ngủ đủ', 'Lười vận động', 'Ăn nhiều đồ ngọt', 'Thức khuya'], 0, 'Lối sống lành mạnh toàn diện.'),
  ], { difficulty: 2 }),
];

export const P3GDTC_SCENARIOS = indexBy(P3GDTC_WEEKS);
