// ============================================================
// Lớp 1 · GDTC — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám CT GDPT 2018: đội hình đội ngũ, bài thể dục buổi sáng,
// đi – chạy – nhảy, ném/bắt bóng, đi trên ván hẹp, trò chơi
// vận động dân gian, an toàn khi tập luyện.
// ID prefix: "P1GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1GDTC', 'gdtc', n, title, qs, opts);

export const P1GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Làm quen môn GDTC', [
    Q('Trang phục giờ GDTC nên là?', ['Đồng phục thể thao, giày thể thao', 'Giày cao gót', 'Quần áo bó cứng', 'Dép lê'], 0, 'Quần áo thể thao và giày thể thao để dễ vận động.'),
    Q('Trước khi tập, em cần?', ['Khởi động làm nóng', 'Tập luôn cho nhanh', 'Ngồi xuống nghỉ', 'Uống thật nhiều nước'], 0, 'Phải khởi động làm nóng để tránh chấn thương.'),
    Q('Khi cô/thầy ra hiệu lệnh, em phải?', ['Lắng nghe và thực hiện', 'Nói chuyện riêng', 'Bỏ ra ngoài', 'Cười đùa'], 0, 'Lắng nghe và thực hiện đúng hiệu lệnh.'),
    Q('Sau giờ tập em nên?', ['Uống nước từng ngụm nhỏ', 'Uống ực một lần thật nhiều', 'Tắm nước lạnh ngay', 'Nằm xuống sân'], 0, 'Uống từng ngụm nhỏ, không tắm lạnh ngay.'),
  ]),

  M(2, 'Tư thế đứng nghiêm – đứng nghỉ', [
    Q('“Nghiêm!” yêu cầu em?', ['Đứng thẳng, hai tay áp sát thân, mắt nhìn thẳng', 'Ngồi xuống', 'Chạy', 'Quay phải'], 0, 'Đứng nghiêm: thân thẳng, hai tay áp sát, mắt nhìn thẳng.'),
    Q('Khi “Nghỉ!”, chân nào hơi chùng?', ['Cả hai', 'Chân trái', 'Chân phải', 'Không chân nào'], 1, 'Đứng nghỉ: chân trái hơi chùng.'),
    Q('Hai bàn chân khi đứng nghiêm tạo hình?', ['Chữ V (mở khoảng 45°)', 'Chữ T', 'Song song', 'Vuông góc'], 0, 'Hai gót khép, mũi chân mở chữ V.'),
    Q('Khi đứng nghiêm, mắt nhìn?', ['Thẳng phía trước', 'Xuống đất', 'Lên trời', 'Nhắm lại'], 0, 'Nhìn thẳng phía trước.'),
  ]),

  M(3, 'Quay phải – quay trái', [
    Q('Khẩu lệnh “Bên phải, quay!” em xoay theo?', ['Bên phải', 'Bên trái', 'Đằng sau', 'Đứng yên'], 0, 'Xoay sang bên phải.'),
    Q('“Bên trái, quay!” em xoay sang?', ['Bên phải', 'Bên trái', 'Đằng sau', 'Đứng yên'], 1, 'Xoay sang bên trái.'),
    Q('Khi quay, em dùng?', ['Gót chân làm trụ', 'Cả bàn chân', 'Mũi chân nhảy lên', 'Bằng đầu gối'], 0, 'Lấy gót chân làm trụ để quay gọn.'),
    Q('Sau khi quay, tư thế em phải?', ['Đứng nghiêm', 'Ngồi xuống', 'Cười đùa', 'Chạy đi'], 0, 'Quay xong trở lại tư thế nghiêm.'),
  ]),

  M(4, 'Đi đều theo hàng', [
    Q('Đi đều cần?', ['Bước cùng chân, đều nhịp', 'Mỗi người một kiểu', 'Chạy thật nhanh', 'Đi giật lùi'], 0, 'Đi đều: cùng chân, đều nhịp.'),
    Q('Khi đi đều, tay vung?', ['Tự nhiên ngược với chân', 'Để yên', 'Khoanh trước ngực', 'Giơ lên cao'], 0, 'Tay vung ngược chiều với chân tự nhiên.'),
    Q('Khoảng cách giữa hai bạn nên?', ['Đủ rộng, không đạp gót nhau', 'Càng sát càng tốt', 'Càng xa càng tốt', 'Không cần đều'], 0, 'Đủ rộng để không đạp gót bạn.'),
    Q('Đi đều giúp em?', ['Rèn nề nếp, kỉ luật', 'Mệt mỏi', 'Buồn ngủ', 'Mất bạn'], 0, 'Rèn nề nếp và kỉ luật.'),
  ]),

  M(5, 'Đi thường, đi nhanh', [
    Q('Đi thường khác đi nhanh ở chỗ?', ['Nhịp bước (chậm hơn)', 'Cao hơn', 'Quay đầu', 'Nhảy lên'], 0, 'Đi thường có nhịp chậm hơn đi nhanh.'),
    Q('Khi đi nhanh, tay em?', ['Vung mạnh hơn theo nhịp', 'Khoanh trước ngực', 'Giơ lên trời', 'Đút túi quần'], 0, 'Tay vung mạnh hơn cho cân bằng.'),
    Q('Lưng khi đi nên?', ['Thẳng', 'Khom xuống', 'Ngửa ra sau', 'Vẹo sang một bên'], 0, 'Lưng thẳng để dáng đẹp.'),
    Q('Trước khi tăng tốc em nên?', ['Khởi động chân tay', 'Tăng tốc luôn', 'Cười to', 'Nhắm mắt'], 0, 'Khởi động trước khi tăng tốc tránh đau cơ.'),
  ]),

  M(6, 'Chạy nhanh ngắn', [
    Q('Khi chạy nhanh, em nhìn?', ['Thẳng phía trước', 'Xuống chân', 'Nhắm mắt', 'Quay sang bạn'], 0, 'Nhìn thẳng phía trước để không vấp.'),
    Q('Khi xuất phát em nên?', ['Hơi khom người, dồn lực', 'Đứng thẳng đơ', 'Ngồi xổm', 'Nằm sấp'], 0, 'Hơi khom người để dồn lực bật đi.'),
    Q('Khi về đích em phải?', ['Giảm tốc dần, không dừng đột ngột', 'Dừng phắt lại', 'Nhảy lên', 'Ngã xuống'], 0, 'Giảm tốc dần để không bị ngã.'),
    Q('Khi chạy thấy mệt, em?', ['Báo cô để nghỉ', 'Cố sức ngất xỉu', 'Bỏ chạy ra ngoài', 'Khóc to'], 0, 'Nói với cô/thầy để được nghỉ.'),
  ]),

  M(7, 'Bài thể dục buổi sáng – tay', [
    Q('Động tác tay giúp?', ['Khởi động vai và cánh tay', 'Khỏe chân', 'No bụng', 'Hết khát'], 0, 'Động tác tay làm nóng vai và cánh tay.'),
    Q('Khi giơ tay lên cao, lưng em?', ['Thẳng', 'Cong xuống', 'Ngửa ngược', 'Vẹo sang'], 0, 'Giữ lưng thẳng để đúng tư thế.'),
    Q('Tay vươn cao em nên hít vào hay thở ra?', ['Hít vào', 'Thở ra', 'Nín thở', 'Không quan trọng'], 0, 'Vươn cao kết hợp hít vào.'),
    Q('Tập thể dục buổi sáng giúp em?', ['Tỉnh táo, khỏe mạnh', 'Mệt cả ngày', 'Buồn ngủ', 'Học kém'], 0, 'Thể dục buổi sáng cho cơ thể khoẻ, tinh thần tỉnh táo.'),
  ]),

  M(8, 'Bài TD buổi sáng – chân', [
    Q('Động tác chân giúp?', ['Khoẻ chân, dẻo hông', 'Khoẻ tay', 'No bụng', 'Hết đau đầu'], 0, 'Tăng sức cơ chân và độ dẻo của hông.'),
    Q('Khi đứng bằng một chân để giữ thăng bằng, em nên?', ['Mắt nhìn một điểm cố định', 'Nhắm mắt', 'Quay đầu', 'Cười to'], 0, 'Nhìn một điểm cố định để giữ thăng bằng.'),
    Q('Khi tập, nếu mất thăng bằng em nên?', ['Hạ chân kia xuống, đứng lại', 'Cố nhảy lên', 'Ngã ra sau', 'Ôm bạn cạnh'], 0, 'Hạ chân xuống đứng vững lại.'),
    Q('Tập đều đặn động tác chân giúp?', ['Đi đứng vững vàng', 'Đi chậm hơn', 'Khó đi hơn', 'Quên đường'], 0, 'Chân khoẻ giúp đi đứng vững vàng.'),
  ]),

  M(9, 'Bài TD buổi sáng – lườn, bụng', [
    Q('Động tác lườn giúp?', ['Dẻo eo, hai bên sườn', 'Khoẻ tay', 'No bụng', 'Hết đau răng'], 0, 'Tăng độ dẻo cho phần eo (lườn).'),
    Q('Khi nghiêng lườn, em nên?', ['Giữ lưng dài, không gập về trước', 'Cúi gập về trước', 'Ngửa hẳn về sau', 'Xoắn cổ'], 0, 'Giữ lưng dài, chỉ nghiêng sang bên.'),
    Q('Động tác bụng giúp?', ['Khoẻ cơ bụng', 'Khoẻ tay', 'Khoẻ tóc', 'Khoẻ tai'], 0, 'Tập cơ bụng cho khoẻ vùng bụng.'),
    Q('Nếu thấy chóng mặt em nên?', ['Báo cô, ngồi nghỉ', 'Cố tập tiếp', 'Bỏ ra ngoài', 'Khóc'], 0, 'Báo cô và ngồi nghỉ.'),
  ]),

  M(10, 'Nhảy bước nhỏ tại chỗ', [
    Q('Khi nhảy, em tiếp đất bằng?', ['Mũi bàn chân, gối hơi chùng', 'Gót chân cứng', 'Cả bàn chân giậm mạnh', 'Đầu gối'], 0, 'Mũi chân tiếp đất, gối chùng để êm.'),
    Q('Nhảy tại chỗ, em nên nhìn?', ['Thẳng phía trước', 'Xuống chân', 'Lên trời', 'Nhắm mắt'], 0, 'Nhìn thẳng phía trước.'),
    Q('Tay khi nhảy nên?', ['Vung tự nhiên giữ thăng bằng', 'Khoanh trước ngực', 'Đút túi', 'Giơ cao mãi'], 0, 'Tay vung tự nhiên giúp thăng bằng.'),
    Q('Trước khi nhảy nhiều em nên?', ['Khởi động chân', 'Nhảy luôn', 'Ăn no', 'Ngồi xuống'], 0, 'Khởi động chân tránh chấn thương.'),
  ]),

  M(11, 'Bật xa tại chỗ', [
    Q('Để bật xa, em?', ['Khuỵu gối lấy đà rồi bật mạnh', 'Đứng thẳng nhảy', 'Ngồi xuống nhảy', 'Nhắm mắt nhảy'], 0, 'Khuỵu gối lấy đà rồi bật mạnh đi.'),
    Q('Khi bật xa, hai tay?', ['Vung mạnh ra trước', 'Để yên', 'Khoanh trước ngực', 'Cho vào túi'], 0, 'Vung tay ra trước giúp bật xa hơn.'),
    Q('Tiếp đất khi bật xa?', ['Hai chân, gối chùng', 'Một chân', 'Ngã sấp', 'Gập người ra trước'], 0, 'Tiếp đất hai chân, gối chùng cho êm.'),
    Q('Trước khi bật em phải?', ['Khởi động kĩ', 'Bật luôn', 'Ăn no', 'Uống thật nhiều nước'], 0, 'Khởi động kĩ để tránh đau cơ.'),
  ]),

  M(12, 'Ném bóng – tay không thuận', [
    Q('Ném bóng đi xa, em đứng?', ['Chân trước chân sau vững vàng', 'Hai chân khép sát', 'Một chân nhón', 'Ngồi xổm'], 0, 'Chân trước chân sau vững để ném mạnh.'),
    Q('Khi ném, mắt em nhìn?', ['Đích nhắm', 'Xuống đất', 'Lên trời', 'Quay đi'], 0, 'Mắt nhìn đích để ném trúng.'),
    Q('Sau khi ném, em nên?', ['Để tay tiếp tục đi theo bóng', 'Co tay ngay lại', 'Bỏ ra ngoài', 'Quay lưng'], 0, 'Tay đi theo bóng cho lực mượt.'),
    Q('Khi nhặt bóng, em phải?', ['Chú ý xung quanh, tránh va chạm', 'Chạy ào ra giành', 'Đẩy bạn', 'Đá bóng đi'], 0, 'Chú ý xung quanh để an toàn.'),
  ]),

  M(13, 'Bắt bóng bằng hai tay', [
    Q('Khi bắt bóng, em đặt tay?', ['Hai tay khum mở trước ngực', 'Hai tay sau lưng', 'Một tay', 'Khoanh tay'], 0, 'Hai bàn tay khum, sẵn sàng đón bóng.'),
    Q('Mắt em khi bắt bóng?', ['Nhìn theo bóng', 'Nhắm lại', 'Nhìn lên trời', 'Nhìn xuống chân'], 0, 'Nhìn theo bóng để bắt chính xác.'),
    Q('Khi bóng chạm tay, em nên?', ['Hơi rút tay về cho êm', 'Đẩy tay ra trước', 'Cứng đờ', 'Quay lưng lại'], 0, 'Rút tay về để giảm lực và bắt chắc.'),
    Q('Nếu trượt bóng, em nên?', ['Nhặt lại, tập tiếp', 'Khóc', 'Bỏ về', 'Đổ lỗi cho bạn'], 0, 'Nhặt lại bóng và tập tiếp.'),
  ]),

  M(14, 'Đi trên vạch kẻ thẳng', [
    Q('Đi trên vạch kẻ giúp?', ['Rèn thăng bằng', 'Khoẻ tay', 'No bụng', 'Hết khát'], 0, 'Rèn cảm giác thăng bằng.'),
    Q('Khi đi, mắt em nhìn?', ['Phía trước, hơi xuống vạch', 'Nhắm lại', 'Nhìn trời', 'Quay sang bạn'], 0, 'Nhìn phía trước, hơi hướng xuống vạch.'),
    Q('Hai tay giữ thăng bằng nên?', ['Dang ngang nhẹ', 'Khoanh trước ngực', 'Đút túi', 'Giơ cao mãi'], 0, 'Dang ngang nhẹ giúp thăng bằng.'),
    Q('Nếu bước lệch ra ngoài vạch?', ['Đứng lại, bước trở về vạch', 'Cố nhảy thật xa', 'Khóc', 'Bỏ về'], 0, 'Đứng lại rồi bước trở lại vạch.'),
  ]),

  M(15, 'Đi trên ván hẹp', [
    Q('Trước khi đi ván, em kiểm tra?', ['Ván chắc, không trơn', 'Ván tự bay', 'Ván đẹp', 'Ván dài'], 0, 'Kiểm tra ván chắc và không trơn.'),
    Q('Khi đi ván, em đi?', ['Chậm, từng bước chắc', 'Chạy thật nhanh', 'Nhảy lò cò', 'Vừa đi vừa quay'], 0, 'Đi chậm và chắc để khỏi ngã.'),
    Q('Tay khi đi ván?', ['Dang ngang giữ thăng bằng', 'Khoanh trước ngực', 'Đút túi', 'Giơ cao mãi'], 0, 'Dang ngang để thăng bằng.'),
    Q('Nếu mất thăng bằng em?', ['Hạ chân xuống đất, dừng lại', 'Cố nhảy', 'Ngồi xuống ván', 'La hét'], 0, 'Hạ chân xuống đất an toàn.'),
  ]),

  M(16, 'Trò chơi: Mèo đuổi chuột', [
    Q('Trong trò Mèo đuổi chuột, mèo phải?', ['Bắt được chuột', 'Đuổi bạn ra cổng', 'Đánh chuột', 'Cào bạn'], 0, 'Mèo bắt được chuột là thắng.'),
    Q('Khi chơi em không được?', ['Xô đẩy, đánh bạn', 'Cười', 'Vỗ tay', 'Cổ vũ'], 0, 'Không xô đẩy, đánh bạn.'),
    Q('Vai trò các bạn ngoài vòng?', ['Nắm tay tạo hang, cổ vũ', 'Bỏ về', 'Đẩy mèo ngã', 'Đè chuột'], 0, 'Bạn ngoài nắm tay tạo hang và cổ vũ.'),
    Q('Mục đích trò chơi là?', ['Vận động vui vẻ, đoàn kết', 'Bắt bạn', 'Chọc giận bạn', 'Giành thắng bằng mọi giá'], 0, 'Trò chơi để vận động và đoàn kết.'),
  ]),

  M(17, 'Trò chơi: Bịt mắt bắt dê', [
    Q('Người bịt mắt phải?', ['Bịt kín mắt, không nhìn trộm', 'Hé mắt', 'Mở mắt', 'Quay đầu'], 0, 'Bịt kín mắt mới công bằng.'),
    Q('Khi bị bắt em phải?', ['Vào thay làm “dê”', 'Khóc', 'Bỏ về', 'Cãi cô'], 0, 'Bạn bị bắt sẽ vào thay vị trí.'),
    Q('Sân chơi nên?', ['Bằng phẳng, không vật cản', 'Có nhiều đá', 'Dốc', 'Có hố'], 0, 'Sân bằng phẳng để an toàn.'),
    Q('Trò chơi rèn?', ['Phản xạ, thính giác, vui vẻ', 'Cãi nhau', 'Đánh bạn', 'Hét to'], 0, 'Rèn phản xạ, thính giác và sự vui vẻ.'),
  ]),

  M(18, 'Đánh giá HK1', [
    Q('Kết thúc HK1, em đã biết?', ['Đứng nghiêm, đi đều, ném-bắt bóng', 'Không biết gì', 'Chỉ biết ngồi', 'Chỉ biết chạy'], 0, 'Em đã học nhiều kĩ năng cơ bản.'),
    Q('Khi đánh giá, em nên?', ['Tự tin thể hiện', 'Sợ hãi', 'Bỏ giờ học', 'Khóc'], 0, 'Tự tin thể hiện điều đã học.'),
    Q('Nếu chưa làm tốt, em sẽ?', ['Tập luyện thêm', 'Bỏ cuộc', 'Trách cô', 'Đổ lỗi bạn'], 0, 'Tập luyện thêm để tiến bộ.'),
    Q('Sau khi kiểm tra, em nên?', ['Cảm ơn cô, dọn dụng cụ', 'Bỏ về luôn', 'Vứt dụng cụ', 'Cãi bạn'], 0, 'Cảm ơn cô và dọn gọn dụng cụ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Khởi động đầu giờ', [
    Q('Khởi động giúp?', ['Làm nóng cơ, tránh chấn thương', 'Mệt thêm', 'Đói bụng', 'Mất nước nhanh'], 0, 'Làm nóng cơ giúp tránh chấn thương.'),
    Q('Thứ tự khởi động hợp lí?', ['Cổ → vai → tay → eo → chân', 'Chân → đầu', 'Bụng → cổ', 'Ngẫu nhiên'], 0, 'Từ trên xuống: cổ, vai, tay, eo, chân.'),
    Q('Khởi động nên?', ['Nhẹ nhàng, tăng dần', 'Mạnh ngay từ đầu', 'Chạy hết sức', 'Ngồi yên'], 0, 'Nhẹ nhàng rồi tăng dần.'),
    Q('Sau khởi động, em cảm thấy?', ['Người ấm, sẵn sàng tập', 'Lạnh hơn', 'Buồn ngủ', 'Đói lả'], 0, 'Người ấm lên, sẵn sàng tập.'),
  ]),

  M(20, 'Đi vượt chướng ngại vật thấp', [
    Q('Khi đi qua chướng ngại thấp, em?', ['Nâng cao đầu gối, nhìn phía trước', 'Cúi gập người', 'Nhảy hết sức', 'Nhắm mắt'], 0, 'Nâng cao đầu gối qua vật, nhìn thẳng.'),
    Q('Trước khi đi, em phải?', ['Quan sát chướng ngại', 'Lao vào luôn', 'Khóc', 'Quay đi'], 0, 'Quan sát kĩ vật cản.'),
    Q('Nếu vướng chân, em?', ['Dừng lại, đi lại', 'Cố lao tiếp', 'Đá vật ra xa', 'Khóc to'], 0, 'Dừng lại, đi lại cho đúng.'),
    Q('Mục đích bài tập?', ['Rèn khéo léo, phản xạ', 'Để mệt', 'Để buồn', 'Để đánh nhau'], 0, 'Rèn khéo léo và phản xạ.'),
  ]),

  M(21, 'Chạy theo vạch kẻ thẳng', [
    Q('Chạy theo vạch giúp?', ['Giữ hướng, không lệch', 'Mệt nhanh', 'Hết oxy', 'Mất bạn'], 0, 'Giúp giữ thẳng hướng.'),
    Q('Tay khi chạy?', ['Vung tự nhiên trước-sau', 'Khoanh ngực', 'Đút túi', 'Giơ cao'], 0, 'Tay vung trước-sau theo nhịp.'),
    Q('Hơi thở khi chạy?', ['Hít mũi, thở miệng đều', 'Nín thở', 'Hét to', 'Cười to'], 0, 'Hít mũi thở miệng, đều đặn.'),
    Q('Nếu hết hơi em?', ['Đi bộ chậm rồi nghỉ', 'Cố chạy nhanh thêm', 'Ngã ra sân', 'La hét'], 0, 'Đi bộ chậm rồi nghỉ lấy hơi.'),
  ]),

  M(22, 'Nghỉ Tết – Trò chơi dân gian: Kéo co', [
    Q('Kéo co cần?', ['Hai đội cân sức, một sợi dây dài', 'Một người chơi', 'Một quả bóng', 'Một cái thước'], 0, 'Hai đội kéo dây — cân sức là vui nhất.'),
    Q('Khi kéo, em nên?', ['Chùng gối, ngả người ra sau, kéo đều', 'Đứng thẳng đơ', 'Ngồi xổm', 'Nhảy lên'], 0, 'Chùng gối, ngả người ra sau để dồn lực.'),
    Q('Đội thắng là đội?', ['Kéo được khăn/vạch sang phía mình', 'Đứng yên lâu nhất', 'Hét to nhất', 'Chạy nhanh nhất'], 0, 'Kéo được vạch/khăn sang phía mình.'),
    Q('Khi chơi xong, em nên?', ['Bắt tay đội bạn, không tức tối', 'Trêu chọc đội thua', 'Bỏ về', 'Vứt dây'], 0, 'Bắt tay nhau, vui vẻ chấp nhận kết quả.'),
  ]),

  M(23, 'Trò chơi dân gian: Rồng rắn lên mây', [
    Q('Trong trò Rồng rắn, các bạn?', ['Nắm áo bạn trước thành hàng dài', 'Đứng tách rời', 'Ngồi yên', 'Chạy lung tung'], 0, 'Nắm áo bạn trước tạo thành rồng rắn.'),
    Q('Người “thầy thuốc” sẽ làm gì?', ['Trả lời câu hỏi rồi đuổi bắt “đuôi rắn”', 'Đứng im', 'Đi về', 'Đánh bạn'], 0, 'Trả lời rồi đuổi bắt đuôi rắn.'),
    Q('Khi chơi, em không được?', ['Xô đẩy mạnh', 'Hát vần', 'Cười', 'Chạy nhịp nhàng'], 0, 'Không được xô đẩy mạnh.'),
    Q('Trò chơi giúp em?', ['Đoàn kết, nhanh nhẹn', 'Cãi nhau', 'Mệt mỏi', 'Buồn ngủ'], 0, 'Đoàn kết và nhanh nhẹn.'),
  ]),

  M(24, 'Ném vòng vào cọc', [
    Q('Khi ném vòng, em nhắm?', ['Cọc đích', 'Trời', 'Đất', 'Bạn bên cạnh'], 0, 'Nhắm cọc để ném trúng.'),
    Q('Tư thế ném?', ['Chân trước chân sau, tay xuôi vòng', 'Hai chân khép', 'Ngồi xổm', 'Nằm sấp'], 0, 'Chân trước chân sau, tay tự nhiên đưa vòng.'),
    Q('Sau khi ném, em?', ['Đợi đến lượt mình rồi nhặt', 'Chạy ào ra', 'Tranh cãi', 'Đẩy bạn'], 0, 'Đợi lượt rồi mới ra nhặt.'),
    Q('Nếu trượt, em?', ['Tập lại, không nản', 'Khóc', 'Bỏ về', 'Trách bạn'], 0, 'Tập lại cho khéo hơn.'),
  ]),

  M(25, 'Đá bóng – tâng bóng đơn giản', [
    Q('Khi đá bóng, em đặt chân trụ?', ['Cạnh quả bóng, mũi chỉ hướng đá', 'Lên trên bóng', 'Sau lưng bóng', 'Cách bóng 2 mét'], 0, 'Chân trụ cạnh bóng, mũi chỉ hướng đá.'),
    Q('Mắt em khi đá bóng?', ['Nhìn bóng và đích', 'Nhắm mắt', 'Nhìn trời', 'Quay đi'], 0, 'Vừa nhìn bóng vừa nhắm đích.'),
    Q('Khi sút bóng, em chú ý?', ['Không sút vào người bạn', 'Sút mạnh nhất có thể', 'Sút lên trời', 'Sút vào cửa sổ'], 0, 'Tránh sút vào người bạn và đồ vật.'),
    Q('Sau khi tập, em?', ['Cất bóng đúng chỗ', 'Vứt bóng', 'Đem bóng về nhà', 'Đá bóng đi xa'], 0, 'Cất bóng đúng chỗ.'),
  ]),

  M(26, 'Tâng bóng bằng tay', [
    Q('Tâng bóng cần?', ['Đẩy nhẹ bằng lòng bàn tay, nhìn theo bóng', 'Đập mạnh', 'Cầm chặt', 'Đá lên'], 0, 'Lòng bàn tay đẩy nhẹ, mắt theo bóng.'),
    Q('Khi tập tâng, em đứng?', ['Hai chân rộng bằng vai', 'Hai chân khép sát', 'Một chân', 'Ngồi xổm'], 0, 'Hai chân rộng bằng vai để vững.'),
    Q('Nếu bóng rơi, em?', ['Nhặt và tập lại', 'Bỏ về', 'Khóc', 'Đá bóng đi'], 0, 'Nhặt lên tập lại.'),
    Q('Mục tiêu tập?', ['Khéo léo tay và mắt', 'Đau tay', 'Mệt mỏi', 'Cãi nhau'], 0, 'Rèn sự khéo léo tay-mắt.'),
  ]),

  M(27, 'Bài thể dục đồng diễn (ôn)', [
    Q('Đồng diễn cần?', ['Cả lớp làm cùng nhịp', 'Mỗi người một kiểu', 'Im lặng đứng yên', 'Ngồi xuống'], 0, 'Tất cả cùng nhịp cho đẹp mắt.'),
    Q('Khi quên động tác, em?', ['Liếc nhìn bạn để theo kịp', 'Đứng yên giữa hàng', 'Bỏ ra ngoài', 'Khóc'], 0, 'Quan sát bạn để theo kịp nhịp.'),
    Q('Hàng ngũ đồng diễn cần?', ['Thẳng và đều', 'Lộn xộn', 'Chen lấn', 'Đẩy nhau'], 0, 'Đứng hàng thẳng và đều.'),
    Q('Đồng diễn rèn?', ['Tinh thần tập thể', 'Cãi nhau', 'Ích kỉ', 'Buồn ngủ'], 0, 'Rèn tinh thần tập thể.'),
  ]),

  M(28, 'Đi nhanh chuyển sang chạy', [
    Q('Chuyển từ đi sang chạy nên?', ['Tăng nhịp dần, không đột ngột', 'Lao vọt lên ngay', 'Dừng lại rồi chạy', 'Quay lưng chạy'], 0, 'Tăng nhịp từ từ.'),
    Q('Khi chạy phải giữ?', ['Hàng và khoảng cách', 'Bám sát gót bạn', 'Chen lấn', 'Đẩy bạn'], 0, 'Giữ hàng và khoảng cách an toàn.'),
    Q('Hơi thở khi chạy?', ['Hít sâu, thở đều', 'Nín thở', 'Há mồm hét', 'Cười to'], 0, 'Hít sâu thở đều cho có sức.'),
    Q('Sau khi về đích?', ['Đi bộ chậm, hít thở sâu', 'Ngồi phịch ngay', 'Uống nước thật nhanh', 'Nằm xuống'], 0, 'Đi bộ chậm và hít thở sâu để hồi phục.'),
  ]),

  M(29, 'Trò chơi: Cướp cờ', [
    Q('Cướp cờ chia?', ['Hai đội đối diện, có cờ giữa sân', 'Một đội duy nhất', 'Không đội nào', 'Cả lớp đứng yên'], 0, 'Hai đội đối diện, cờ đặt giữa sân.'),
    Q('Khi cầm cờ chạy về, nếu bị chạm em?', ['Mất lượt cướp', 'Vẫn ăn cờ', 'Khóc', 'Đánh bạn'], 0, 'Bị chạm là mất lượt.'),
    Q('Khi chơi em phải?', ['Tuân thủ luật, không xô đẩy', 'Xô đẩy bạn', 'Đánh bạn', 'Ăn vạ'], 0, 'Tuân thủ luật chơi, không xô đẩy.'),
    Q('Trò chơi rèn?', ['Nhanh nhẹn, đoàn kết', 'Tức giận', 'Lười biếng', 'Buồn ngủ'], 0, 'Rèn nhanh nhẹn và tinh thần đồng đội.'),
  ]),

  M(30, 'Trò chơi: Nhảy bao bố', [
    Q('Nhảy bao bố em đứng?', ['Trong bao, hai tay giữ miệng bao', 'Ngoài bao', 'Trên bao', 'Cầm bao chạy'], 0, 'Đứng trong bao, tay giữ miệng bao.'),
    Q('Để nhảy nhanh, em?', ['Nhảy hai chân cùng lúc, nhịp đều', 'Nhảy một chân', 'Đi bộ', 'Quay vòng'], 0, 'Nhảy hai chân, nhịp đều.'),
    Q('Khi ngã, em nên?', ['Đứng dậy, tiếp tục', 'Nằm im', 'Khóc to', 'Bỏ cuộc'], 0, 'Đứng dậy nhảy tiếp.'),
    Q('Sau khi chơi, em?', ['Gập bao gọn gàng', 'Vứt bao đi', 'Mang về nhà', 'Xé bao'], 0, 'Cất bao gọn gàng cho lần sau.'),
  ]),

  M(31, 'An toàn khi tập luyện', [
    Q('Trước khi tập, em kiểm tra?', ['Sân tập sạch, không vật sắc', 'Áo có đẹp không', 'Tóc có thơm không', 'Có ai xem không'], 0, 'Đảm bảo sân an toàn, không vật sắc.'),
    Q('Khi đau, em phải?', ['Báo ngay cho cô/thầy', 'Cố tập tiếp', 'Giấu đi', 'Đổ lỗi cho bạn'], 0, 'Báo ngay cho cô/thầy để xử lí.'),
    Q('Trang phục an toàn?', ['Buộc dây giày gọn, không đeo trang sức', 'Đi dép lê', 'Đeo vòng to', 'Mặc áo dài'], 0, 'Buộc dây giày, không đeo trang sức gây vướng.'),
    Q('Sau khi tập, em không nên?', ['Tắm ngay bằng nước lạnh', 'Lau khô mồ hôi', 'Uống nước từng ngụm', 'Đi bộ nhẹ'], 0, 'Tránh tắm lạnh ngay sau khi tập.'),
  ]),

  M(32, 'Tập hợp – dóng hàng', [
    Q('Khẩu lệnh “Tập hợp!” em phải?', ['Chạy đến vị trí, đứng hàng ngay', 'Đứng im', 'Đi chỗ khác', 'Ngồi xuống'], 0, 'Nhanh chóng tập hợp đứng hàng.'),
    Q('Dóng hàng dọc, em nhìn?', ['Gáy bạn phía trước', 'Trời', 'Đất', 'Bạn bên cạnh'], 0, 'Nhìn gáy bạn phía trước để dóng thẳng.'),
    Q('Dóng hàng ngang, em nhìn?', ['Bạn bên phải/trái để thẳng hàng', 'Trần nhà', 'Xuống chân', 'Quay sau'], 0, 'Nhìn bạn cùng hàng để dóng thẳng.'),
    Q('Khoảng cách trong hàng?', ['Một cánh tay', 'Hai mét', 'Sát gáy bạn', 'Tuỳ ý'], 0, 'Khoảng một cánh tay là vừa.'),
  ]),

  M(33, 'Ôn tập – Đi, chạy, nhảy, bóng', [
    Q('Khi ôn tập, em nên?', ['Tập đầy đủ và đúng kĩ thuật', 'Làm cho có', 'Bỏ qua phần khó', 'Cười đùa'], 0, 'Tập đầy đủ và đúng kĩ thuật.'),
    Q('Nếu một động tác chưa tốt?', ['Hỏi cô và tập thêm', 'Bỏ qua', 'Khóc', 'Đổ lỗi'], 0, 'Hỏi cô, tập thêm cho tiến bộ.'),
    Q('Khi bạn làm tốt, em?', ['Khen ngợi, học hỏi', 'Ghét bạn', 'Trêu bạn', 'Cười nhạo'], 0, 'Khen ngợi và học hỏi bạn.'),
    Q('Sau ôn tập em cảm thấy?', ['Tự tin hơn', 'Sợ hãi', 'Buồn', 'Mệt mỏi không học'], 0, 'Ôn tập giúp em tự tin hơn.'),
  ]),

  M(34, 'Kiểm tra cuối năm', [
    Q('Khi tới lượt, em nên?', ['Bình tĩnh thực hiện', 'Cuống cuồng', 'Khóc', 'Bỏ ra ngoài'], 0, 'Bình tĩnh thực hiện cho tốt.'),
    Q('Nghe hiệu lệnh em phải?', ['Làm đúng theo lệnh', 'Làm theo ý mình', 'Cãi cô', 'Im lặng đứng yên'], 0, 'Làm đúng theo hiệu lệnh.'),
    Q('Nếu sai, em nên?', ['Bình tĩnh, làm lại đúng', 'Nản chí, bỏ', 'Đổ lỗi bạn', 'Cãi cô'], 0, 'Bình tĩnh làm lại cho đúng.'),
    Q('Sau khi kiểm tra, em?', ['Cảm ơn cô', 'Bỏ về luôn', 'Vứt dụng cụ', 'Cãi bạn'], 0, 'Cảm ơn cô, dọn gọn dụng cụ.'),
  ]),

  M(35, 'Tổng kết – Trò chơi dân gian tổng hợp', [
    Q('Tổng kết năm, lớp tổ chức?', ['Trò chơi vận động vui vẻ', 'Ngồi im', 'Cãi nhau', 'Bỏ lớp'], 0, 'Tổ chức trò chơi vận động vui vẻ.'),
    Q('Tinh thần chơi là?', ['Vui là chính, đoàn kết', 'Phải thắng bằng mọi giá', 'Hơn thua nhau', 'Trêu chọc bạn'], 0, 'Vui là chính, đề cao đoàn kết.'),
    Q('Sau một năm em đã?', ['Khoẻ hơn, nhanh nhẹn hơn', 'Lười hơn', 'Yếu hơn', 'Quên hết'], 0, 'Khoẻ hơn và nhanh nhẹn hơn.'),
    Q('Em sẽ tiếp tục?', ['Tập thể dục đều đặn', 'Bỏ tập', 'Ngồi xem điện thoại nhiều', 'Lười vận động'], 0, 'Tiếp tục tập thể dục đều đặn.'),
  ]),
];

export const P1GDTC_SCENARIOS = indexBy(P1GDTC_WEEKS);
