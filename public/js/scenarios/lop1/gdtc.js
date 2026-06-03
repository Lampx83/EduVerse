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
    Q('Trang phục giờ GDTC nên là?', ['Giày cao gót', 'Dép lê', 'Đồng phục thể thao, giày thể thao', 'Quần áo bó cứng'], 2, 'Quần áo thể thao và giày thể thao để dễ vận động.'),
    Q('Trước khi tập, em cần?', ['Khởi động làm nóng', 'Tập luôn cho nhanh', 'Ngồi xuống nghỉ', 'Uống thật nhiều nước'], 0, 'Phải khởi động làm nóng để tránh chấn thương.'),
    Q('Khi cô/thầy ra hiệu lệnh, em phải?', ['Cười đùa', 'Bỏ ra ngoài', 'Lắng nghe và thực hiện', 'Nói chuyện riêng'], 2, 'Lắng nghe và thực hiện đúng hiệu lệnh.'),
    Q('Sau giờ tập em nên?', ['Tắm nước lạnh ngay', 'Nằm xuống sân', 'Uống nước từng ngụm nhỏ', 'Uống ực một lần thật nhiều'], 2, 'Uống từng ngụm nhỏ, không tắm lạnh ngay.'),
  ]),

  M(2, 'Tư thế đứng nghiêm – đứng nghỉ', [
    Q('“Nghiêm!” yêu cầu em?', ['Đứng thẳng, hai tay áp sát thân, mắt nhìn thẳng', 'Quay phải', 'Ngồi xuống', 'Quay đằng sau'], 0, 'Đứng nghiêm: thân thẳng, hai tay áp sát, mắt nhìn thẳng.'),
    Q('Khi “Nghỉ!”, chân nào hơi chùng?', ['Chân trái', 'Cả hai', 'Không chân nào', 'Chân phải'], 0, 'Đứng nghỉ: chân trái hơi chùng.'),
    Q('Hai bàn chân khi đứng nghiêm tạo hình?', ['Chữ X (bắt chéo)', 'Song song', 'Vuông góc', 'Chữ V (mở khoảng 45°)'], 3, 'Hai gót khép, mũi chân mở chữ V.'),
    Q('Khi đứng nghiêm, mắt nhìn?', ['Xuống đất', 'Lên trời', 'Thẳng phía trước', 'Nhắm lại'], 2, 'Nhìn thẳng phía trước.'),
  ]),

  M(3, 'Quay phải – quay trái', [
    Q('Khẩu lệnh “Bên phải, quay!” em xoay theo?', ['Bên trái', 'Đằng sau', 'Đứng yên', 'Bên phải'], 3, 'Xoay sang bên phải.'),
    Q('“Bên trái, quay!” em xoay sang?', ['Đằng sau', 'Đứng yên', 'Bên phải', 'Bên trái'], 3, 'Xoay sang bên trái.'),
    Q('Khi quay, em dùng?', ['Mũi chân nhảy lên', 'Gót chân làm trụ', 'Cả bàn chân', 'Bằng đầu gối'], 1, 'Lấy gót chân làm trụ để quay gọn.'),
    Q('Sau khi quay, tư thế em phải?', ['Cười đùa', 'Chạy đi', 'Đứng nghiêm', 'Ngồi xuống'], 2, 'Quay xong trở lại tư thế nghiêm.'),
  ]),

  M(4, 'Đi đều theo hàng', [
    Q('Đi đều cần?', ['Mỗi người một kiểu', 'Đi giật lùi', 'Bước cùng chân, đều nhịp', 'Chạy thật nhanh'], 2, 'Đi đều: cùng chân, đều nhịp.'),
    Q('Khi đi đều, tay vung?', ['Để yên', 'Khoanh trước ngực', 'Giơ lên cao', 'Tự nhiên ngược với chân'], 3, 'Tay vung ngược chiều với chân tự nhiên.'),
    Q('Khoảng cách giữa hai bạn nên?', ['Càng sát càng tốt', 'Đủ rộng, không đạp gót nhau', 'Không cần đều', 'Càng xa càng tốt'], 1, 'Đủ rộng để không đạp gót bạn.'),
    Q('Đi đều giúp em?', ['Mất bạn', 'Buồn ngủ', 'Mệt mỏi', 'Rèn nề nếp, kỉ luật'], 3, 'Rèn nề nếp và kỉ luật.'),
  ]),

  M(5, 'Đi thường, đi nhanh', [
    Q('Đi thường khác đi nhanh ở chỗ?', ['Cao hơn', 'Quay đầu', 'Nhảy lên', 'Nhịp bước (chậm hơn)'], 3, 'Đi thường có nhịp chậm hơn đi nhanh.'),
    Q('Khi đi nhanh, tay em?', ['Giơ lên trời', 'Vung mạnh hơn theo nhịp', 'Khoanh trước ngực', 'Đút túi quần'], 1, 'Tay vung mạnh hơn cho cân bằng.'),
    Q('Lưng khi đi nên?', ['Vẹo sang một bên', 'Khom xuống', 'Ngửa ra sau', 'Thẳng'], 3, 'Lưng thẳng để dáng đẹp.'),
    Q('Trước khi tăng tốc em nên?', ['Cười to', 'Khởi động chân tay', 'Tăng tốc luôn', 'Nhắm mắt'], 1, 'Khởi động trước khi tăng tốc tránh đau cơ.'),
  ]),

  M(6, 'Chạy nhanh ngắn', [
    Q('Khi chạy nhanh, em nhìn?', ['Nhắm mắt', 'Quay sang bạn', 'Thẳng phía trước', 'Xuống chân'], 2, 'Nhìn thẳng phía trước để không vấp.'),
    Q('Khi xuất phát em nên?', ['Nằm sấp', 'Đứng thẳng đơ', 'Hơi khom người, dồn lực', 'Ngồi xổm'], 2, 'Hơi khom người để dồn lực bật đi.'),
    Q('Khi về đích em phải?', ['Nhảy lên', 'Giảm tốc dần, không dừng đột ngột', 'Dừng phắt lại', 'Ngã xuống'], 1, 'Giảm tốc dần để không bị ngã.'),
    Q('Khi chạy thấy mệt, em?', ['Khóc to', 'Báo cô để nghỉ', 'Bỏ chạy ra ngoài', 'Cố sức ngất xỉu'], 1, 'Nói với cô/thầy để được nghỉ.'),
  ]),

  M(7, 'Bài thể dục buổi sáng – tay', [
    Q('Động tác tay giúp?', ['Hết khát', 'No bụng', 'Khỏe chân', 'Khởi động vai và cánh tay'], 3, 'Động tác tay làm nóng vai và cánh tay.'),
    Q('Khi giơ tay lên cao, lưng em?', ['Vẹo sang', 'Thẳng', 'Ngửa ngược', 'Cong xuống'], 1, 'Giữ lưng thẳng để đúng tư thế.'),
    Q('Tay vươn cao em nên hít vào hay thở ra?', ['Nín thở', 'Hít vào', 'Thở ra', 'Vừa hít vừa thở liên tục'], 1, 'Vươn cao kết hợp hít vào.'),
    Q('Tập thể dục buổi sáng giúp em?', ['Tỉnh táo, khỏe mạnh', 'Buồn ngủ', 'Học kém', 'Mệt cả ngày'], 0, 'Thể dục buổi sáng cho cơ thể khoẻ, tinh thần tỉnh táo.'),
  ]),

  M(8, 'Bài TD buổi sáng – chân', [
    Q('Động tác chân giúp?', ['Khoẻ tay', 'Khoẻ chân, dẻo hông', 'No bụng', 'Hết đau đầu'], 1, 'Tăng sức cơ chân và độ dẻo của hông.'),
    Q('Khi đứng bằng một chân để giữ thăng bằng, em nên?', ['Nhắm mắt', 'Quay đầu', 'Cười to', 'Mắt nhìn một điểm cố định'], 3, 'Nhìn một điểm cố định để giữ thăng bằng.'),
    Q('Khi tập, nếu mất thăng bằng em nên?', ['Ngã ra sau', 'Hạ chân kia xuống, đứng lại', 'Cố nhảy lên', 'Ôm bạn cạnh'], 1, 'Hạ chân xuống đứng vững lại.'),
    Q('Tập đều đặn động tác chân giúp?', ['Đi đứng vững vàng', 'Đi chậm hơn', 'Khó đi hơn', 'Quên đường'], 0, 'Chân khoẻ giúp đi đứng vững vàng.'),
  ]),

  M(9, 'Bài TD buổi sáng – lườn, bụng', [
    Q('Động tác lườn giúp?', ['Dẻo eo, hai bên sườn', 'No bụng', 'Hết đau răng', 'Khoẻ tay'], 0, 'Tăng độ dẻo cho phần eo (lườn).'),
    Q('Khi nghiêng lườn, em nên?', ['Ngửa hẳn về sau', 'Cúi gập về trước', 'Giữ lưng dài, không gập về trước', 'Xoắn cổ'], 2, 'Giữ lưng dài, chỉ nghiêng sang bên.'),
    Q('Động tác bụng giúp?', ['Khoẻ cơ bụng', 'Khoẻ tóc', 'Khoẻ tai', 'Khoẻ tay'], 0, 'Tập cơ bụng cho khoẻ vùng bụng.'),
    Q('Nếu thấy chóng mặt em nên?', ['Bỏ ra ngoài', 'Báo cô, ngồi nghỉ', 'Cố tập tiếp', 'Tự ra vòi nước rửa mặt'], 1, 'Báo cô và ngồi nghỉ.'),
  ]),

  M(10, 'Nhảy bước nhỏ tại chỗ', [
    Q('Khi nhảy, em tiếp đất bằng?', ['Cả bàn chân giậm mạnh', 'Đầu gối', 'Mũi bàn chân, gối hơi chùng', 'Gót chân cứng'], 2, 'Mũi chân tiếp đất, gối chùng để êm.'),
    Q('Nhảy tại chỗ, em nên nhìn?', ['Thẳng phía trước', 'Lên trời', 'Xuống chân', 'Nhắm mắt'], 0, 'Nhìn thẳng phía trước.'),
    Q('Tay khi nhảy nên?', ['Đút túi', 'Giơ cao mãi', 'Vung tự nhiên giữ thăng bằng', 'Khoanh trước ngực'], 2, 'Tay vung tự nhiên giúp thăng bằng.'),
    Q('Trước khi nhảy nhiều em nên?', ['Nhảy luôn', 'Ngồi xuống', 'Khởi động chân', 'Uống thật no nước'], 2, 'Khởi động chân tránh chấn thương.'),
  ]),

  M(11, 'Bật xa tại chỗ', [
    Q('Để bật xa, em?', ['Nhắm mắt nhảy', 'Đứng thẳng nhảy', 'Khuỵu gối lấy đà rồi bật mạnh', 'Ngồi xuống nhảy'], 2, 'Khuỵu gối lấy đà rồi bật mạnh đi.'),
    Q('Khi bật xa, hai tay?', ['Khoanh trước ngực', 'Vung mạnh ra trước', 'Để yên', 'Cho vào túi'], 1, 'Vung tay ra trước giúp bật xa hơn.'),
    Q('Tiếp đất khi bật xa?', ['Ngã sấp', 'Hai chân, gối chùng', 'Gập người ra trước', 'Một chân'], 1, 'Tiếp đất hai chân, gối chùng cho êm.'),
    Q('Trước khi bật em phải?', ['Uống thật nhiều nước', 'Nín thở thật lâu', 'Khởi động kĩ', 'Bật luôn'], 2, 'Khởi động kĩ để tránh đau cơ.'),
  ]),

  M(12, 'Ném bóng – tay không thuận', [
    Q('Ném bóng đi xa, em đứng?', ['Hai chân khép sát', 'Một chân nhón', 'Chân trước chân sau vững vàng', 'Ngồi xổm'], 2, 'Chân trước chân sau vững để ném mạnh.'),
    Q('Khi ném, mắt em nhìn?', ['Lên trời', 'Xuống đất', 'Quay đi', 'Đích nhắm'], 3, 'Mắt nhìn đích để ném trúng.'),
    Q('Sau khi ném, em nên?', ['Để tay tiếp tục đi theo bóng', 'Bỏ ra ngoài', 'Quay lưng', 'Co tay ngay lại'], 0, 'Tay đi theo bóng cho lực mượt.'),
    Q('Khi nhặt bóng, em phải?', ['Chú ý xung quanh, tránh va chạm', 'Đẩy bạn', 'Chạy ào ra giành', 'Đá bóng đi'], 0, 'Chú ý xung quanh để an toàn.'),
  ]),

  M(13, 'Bắt bóng bằng hai tay', [
    Q('Khi bắt bóng, em đặt tay?', ['Khoanh tay', 'Hai tay khum mở trước ngực', 'Hai tay sau lưng', 'Một tay'], 1, 'Hai bàn tay khum, sẵn sàng đón bóng.'),
    Q('Mắt em khi bắt bóng?', ['Nhìn lên trời', 'Nhìn xuống chân', 'Nhìn theo bóng', 'Nhắm lại'], 2, 'Nhìn theo bóng để bắt chính xác.'),
    Q('Khi bóng chạm tay, em nên?', ['Hơi rút tay về cho êm', 'Đẩy tay ra trước', 'Cứng đờ', 'Quay lưng lại'], 0, 'Rút tay về để giảm lực và bắt chắc.'),
    Q('Nếu trượt bóng, em nên?', ['Đứng yên chờ bạn nhặt giúp', 'Đổ lỗi cho bạn', 'Nhặt lại, tập tiếp', 'Đá bóng đi cho khuất mắt'], 2, 'Nhặt lại bóng và tập tiếp.'),
  ]),

  M(14, 'Đi trên vạch kẻ thẳng', [
    Q('Đi trên vạch kẻ giúp?', ['Hết khát', 'Khoẻ tay', 'Rèn thăng bằng', 'No bụng'], 2, 'Rèn cảm giác thăng bằng.'),
    Q('Khi đi, mắt em nhìn?', ['Nhắm lại', 'Nhìn trời', 'Phía trước, hơi xuống vạch', 'Quay sang bạn'], 2, 'Nhìn phía trước, hơi hướng xuống vạch.'),
    Q('Hai tay giữ thăng bằng nên?', ['Đút túi', 'Dang ngang nhẹ', 'Khoanh trước ngực', 'Giơ cao mãi'], 1, 'Dang ngang nhẹ giúp thăng bằng.'),
    Q('Nếu bước lệch ra ngoài vạch?', ['Tiếp tục đi lệch tới đích', 'Cố nhảy thật xa', 'Nhắm mắt đi tiếp cho nhanh', 'Đứng lại, bước trở về vạch'], 3, 'Đứng lại rồi bước trở lại vạch.'),
  ]),

  M(15, 'Đi trên ván hẹp', [
    Q('Trước khi đi ván, em kiểm tra?', ['Ván tự bay', 'Ván đẹp', 'Ván chắc, không trơn', 'Ván dài'], 2, 'Kiểm tra ván chắc và không trơn.'),
    Q('Khi đi ván, em đi?', ['Vừa đi vừa quay', 'Nhảy lò cò', 'Chậm, từng bước chắc', 'Chạy thật nhanh'], 2, 'Đi chậm và chắc để khỏi ngã.'),
    Q('Tay khi đi ván?', ['Khoanh trước ngực', 'Đút túi', 'Dang ngang giữ thăng bằng', 'Giơ cao mãi'], 2, 'Dang ngang để thăng bằng.'),
    Q('Nếu mất thăng bằng em?', ['Cố nhảy', 'Ngồi xuống ván', 'La hét', 'Hạ chân xuống đất, dừng lại'], 3, 'Hạ chân xuống đất an toàn.'),
  ]),

  M(16, 'Trò chơi: Mèo đuổi chuột', [
    Q('Trong trò Mèo đuổi chuột, mèo phải?', ['Đuổi bạn ra cổng', 'Cào bạn', 'Đánh chuột', 'Bắt được chuột'], 3, 'Mèo bắt được chuột là thắng.'),
    Q('Khi chơi em không được?', ['Chạy nhẹ nhàng theo vòng', 'Xô đẩy, đánh bạn', 'Vỗ tay', 'Bịt mắt bạn để bắt dễ hơn'], 1, 'Không xô đẩy, đánh bạn.'),
    Q('Vai trò các bạn ngoài vòng?', ['Nắm tay tạo hang, cổ vũ', 'Đẩy mèo ngã', 'Đứng im không cho mèo qua', 'Đè chuột'], 0, 'Bạn ngoài nắm tay tạo hang và cổ vũ.'),
    Q('Mục đích trò chơi là?', ['Giành thắng bằng mọi giá', 'Bắt bạn', 'Chọc giận bạn', 'Vận động vui vẻ, đoàn kết'], 3, 'Trò chơi để vận động và đoàn kết.'),
  ]),

  M(17, 'Trò chơi: Bịt mắt bắt dê', [
    Q('Người bịt mắt phải?', ['Quay đầu', 'Hé mắt', 'Mở mắt', 'Bịt kín mắt, không nhìn trộm'], 3, 'Bịt kín mắt mới công bằng.'),
    Q('Khi bị bắt em phải?', ['Tháo khăn bịt mắt ra ngay', 'Tiếp tục làm người đi tìm', 'Cãi cô', 'Vào thay làm “dê”'], 3, 'Bạn bị bắt sẽ vào thay vị trí.'),
    Q('Sân chơi nên?', ['Có nhiều đá', 'Bằng phẳng, không vật cản', 'Có nhiều bậc thang', 'Trơn trượt vì mới rửa'], 1, 'Sân bằng phẳng để an toàn.'),
    Q('Trò chơi rèn?', ['Cãi nhau', 'Hét to', 'Phản xạ, thính giác, vui vẻ', 'Đánh bạn'], 2, 'Rèn phản xạ, thính giác và sự vui vẻ.'),
  ]),

  M(18, 'Đánh giá HK1', [
    Q('Kết thúc HK1, em đã biết?', ['Không biết gì', 'Chỉ biết chạy', 'Chỉ biết ngồi', 'Đứng nghiêm, đi đều, ném-bắt bóng'], 3, 'Em đã học nhiều kĩ năng cơ bản.'),
    Q('Khi đánh giá, em nên?', ['Làm qua loa cho xong', 'Tự tin thể hiện', 'Bỏ giờ học', 'Sợ hãi'], 1, 'Tự tin thể hiện điều đã học.'),
    Q('Nếu chưa làm tốt, em sẽ?', ['Trách cô', 'Đổ lỗi bạn', 'Tập luyện thêm', 'Bỏ cuộc'], 2, 'Tập luyện thêm để tiến bộ.'),
    Q('Sau khi kiểm tra, em nên?', ['Cảm ơn cô, dọn dụng cụ', 'Bỏ về luôn', 'Cãi bạn', 'Vứt dụng cụ'], 0, 'Cảm ơn cô và dọn gọn dụng cụ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Khởi động đầu giờ', [
    Q('Khởi động giúp?', ['Mệt thêm', 'Đói bụng', 'Mất nước nhanh', 'Làm nóng cơ, tránh chấn thương'], 3, 'Làm nóng cơ giúp tránh chấn thương.'),
    Q('Thứ tự khởi động hợp lí?', ['Ngẫu nhiên', 'Chân → đầu', 'Cổ → vai → tay → eo → chân', 'Bụng → cổ'], 2, 'Từ trên xuống: cổ, vai, tay, eo, chân.'),
    Q('Khởi động nên?', ['Nhẹ nhàng, tăng dần', 'Mạnh ngay từ đầu', 'Ngồi yên', 'Chạy hết sức'], 0, 'Nhẹ nhàng rồi tăng dần.'),
    Q('Sau khởi động, em cảm thấy?', ['Lạnh hơn', 'Người ấm, sẵn sàng tập', 'Đói lả', 'Buồn ngủ'], 1, 'Người ấm lên, sẵn sàng tập.'),
  ]),

  M(20, 'Đi vượt chướng ngại vật thấp', [
    Q('Khi đi qua chướng ngại thấp, em?', ['Cúi gập người', 'Nhắm mắt', 'Nhảy hết sức', 'Nâng cao đầu gối, nhìn phía trước'], 3, 'Nâng cao đầu gối qua vật, nhìn thẳng.'),
    Q('Trước khi đi, em phải?', ['Quan sát chướng ngại', 'Lao vào luôn', 'Nhắm mắt bước qua cho dũng cảm', 'Quay đi'], 0, 'Quan sát kĩ vật cản.'),
    Q('Nếu vướng chân, em?', ['Khóc to', 'Cố lao tiếp', 'Đá vật ra xa', 'Dừng lại, đi lại'], 3, 'Dừng lại, đi lại cho đúng.'),
    Q('Mục đích bài tập?', ['Để buồn', 'Để mệt', 'Để đánh nhau', 'Rèn khéo léo, phản xạ'], 3, 'Rèn khéo léo và phản xạ.'),
  ]),

  M(21, 'Chạy theo vạch kẻ thẳng', [
    Q('Chạy theo vạch giúp?', ['Hết oxy', 'Mất bạn', 'Giữ hướng, không lệch', 'Mệt nhanh'], 2, 'Giúp giữ thẳng hướng.'),
    Q('Tay khi chạy?', ['Đút túi', 'Vung tự nhiên trước-sau', 'Giơ cao', 'Khoanh ngực'], 1, 'Tay vung trước-sau theo nhịp.'),
    Q('Hơi thở khi chạy?', ['Nín thở', 'Hít mũi, thở miệng đều', 'Hét to', 'Cười to'], 1, 'Hít mũi thở miệng, đều đặn.'),
    Q('Nếu hết hơi em?', ['Ngã ra sân', 'Đi bộ chậm rồi nghỉ', 'Cố chạy nhanh thêm', 'La hét'], 1, 'Đi bộ chậm rồi nghỉ lấy hơi.'),
  ]),

  M(22, 'Nghỉ Tết – Trò chơi dân gian: Kéo co', [
    Q('Kéo co cần?', ['Hai đội cân sức, một sợi dây dài', 'Một người chơi', 'Một quả bóng', 'Một cái thước'], 0, 'Hai đội kéo dây — cân sức là vui nhất.'),
    Q('Khi kéo, em nên?', ['Ngồi xổm', 'Đứng thẳng đơ', 'Chùng gối, ngả người ra sau, kéo đều', 'Nhảy lên'], 2, 'Chùng gối, ngả người ra sau để dồn lực.'),
    Q('Đội thắng là đội?', ['Đứng yên lâu nhất', 'Kéo được khăn/vạch sang phía mình', 'Hét to nhất', 'Chạy nhanh nhất'], 1, 'Kéo được vạch/khăn sang phía mình.'),
    Q('Khi chơi xong, em nên?', ['Bắt tay đội bạn, không tức tối', 'Trêu chọc đội thua', 'Giành dây kéo về phần mình', 'Vứt dây'], 0, 'Bắt tay nhau, vui vẻ chấp nhận kết quả.'),
  ]),

  M(23, 'Trò chơi dân gian: Rồng rắn lên mây', [
    Q('Trong trò Rồng rắn, các bạn?', ['Đứng tách rời', 'Chạy lung tung', 'Nắm áo bạn trước thành hàng dài', 'Ngồi yên'], 2, 'Nắm áo bạn trước tạo thành rồng rắn.'),
    Q('Người “thầy thuốc” sẽ làm gì?', ['Đứng im', 'Trả lời câu hỏi rồi đuổi bắt “đuôi rắn”', 'Đi theo đuôi rắn cùng các bạn', 'Đánh bạn'], 1, 'Trả lời rồi đuổi bắt đuôi rắn.'),
    Q('Khi chơi, em không được?', ['Xô đẩy mạnh', 'Chạy nhịp nhàng', 'Hát vần', 'Nắm chặt áo bạn phía trước'], 0, 'Không được xô đẩy mạnh.'),
    Q('Trò chơi giúp em?', ['Buồn ngủ', 'Cãi nhau', 'Đoàn kết, nhanh nhẹn', 'Mệt mỏi'], 2, 'Đoàn kết và nhanh nhẹn.'),
  ]),

  M(24, 'Ném vòng vào cọc', [
    Q('Khi ném vòng, em nhắm?', ['Chân của mình', 'Cọc đích', 'Bạn bên cạnh', 'Đám mây trên cao'], 1, 'Nhắm cọc để ném trúng.'),
    Q('Tư thế ném?', ['Hai chân khép', 'Ngồi xổm', 'Nằm sấp', 'Chân trước chân sau, tay xuôi vòng'], 3, 'Chân trước chân sau, tay tự nhiên đưa vòng.'),
    Q('Sau khi ném, em?', ['Đẩy bạn', 'Tranh cãi', 'Chạy ào ra', 'Đợi đến lượt mình rồi nhặt'], 3, 'Đợi lượt rồi mới ra nhặt.'),
    Q('Nếu trượt, em?', ['Đổi sang ném bằng chân', 'Trách bạn', 'Đứng sát cọc rồi thả vòng', 'Tập lại, không nản'], 3, 'Tập lại cho khéo hơn.'),
  ]),

  M(25, 'Đá bóng – tâng bóng đơn giản', [
    Q('Khi đá bóng, em đặt chân trụ?', ['Lên trên bóng', 'Cách bóng 2 mét', 'Sau lưng bóng', 'Cạnh quả bóng, mũi chỉ hướng đá'], 3, 'Chân trụ cạnh bóng, mũi chỉ hướng đá.'),
    Q('Mắt em khi đá bóng?', ['Nhắm mắt', 'Nhìn trời', 'Nhìn bóng và đích', 'Quay đi'], 2, 'Vừa nhìn bóng vừa nhắm đích.'),
    Q('Khi sút bóng, em chú ý?', ['Không sút vào người bạn', 'Sút lên trời', 'Sút vào cửa sổ', 'Sút mạnh nhất có thể'], 0, 'Tránh sút vào người bạn và đồ vật.'),
    Q('Sau khi tập, em?', ['Cất bóng đúng chỗ', 'Vứt bóng', 'Đem bóng về nhà', 'Đá bóng đi xa'], 0, 'Cất bóng đúng chỗ.'),
  ]),

  M(26, 'Tâng bóng bằng tay', [
    Q('Tâng bóng cần?', ['Cầm chặt', 'Đẩy nhẹ bằng lòng bàn tay, nhìn theo bóng', 'Đá lên', 'Đập mạnh'], 1, 'Lòng bàn tay đẩy nhẹ, mắt theo bóng.'),
    Q('Khi tập tâng, em đứng?', ['Ngồi xổm', 'Một chân', 'Hai chân khép sát', 'Hai chân rộng bằng vai'], 3, 'Hai chân rộng bằng vai để vững.'),
    Q('Nếu bóng rơi, em?', ['Lấy chân giữ bóng lại', 'Đổi sang đá bóng cho dễ', 'Đá bóng đi', 'Nhặt và tập lại'], 3, 'Nhặt lên tập lại.'),
    Q('Mục tiêu tập?', ['Đau tay', 'Mệt mỏi', 'Khéo léo tay và mắt', 'Cãi nhau'], 2, 'Rèn sự khéo léo tay-mắt.'),
  ]),

  M(27, 'Bài thể dục đồng diễn (ôn)', [
    Q('Đồng diễn cần?', ['Mỗi người một kiểu', 'Cả lớp làm cùng nhịp', 'Ngồi xuống', 'Im lặng đứng yên'], 1, 'Tất cả cùng nhịp cho đẹp mắt.'),
    Q('Khi quên động tác, em?', ['Bỏ ra ngoài', 'Đứng yên giữa hàng', 'Liếc nhìn bạn để theo kịp', 'Tự ý đổi sang động tác khác'], 2, 'Quan sát bạn để theo kịp nhịp.'),
    Q('Hàng ngũ đồng diễn cần?', ['Chen lấn', 'Đẩy nhau', 'Thẳng và đều', 'Lộn xộn'], 2, 'Đứng hàng thẳng và đều.'),
    Q('Đồng diễn rèn?', ['Tinh thần tập thể', 'Cãi nhau', 'Ích kỉ', 'Buồn ngủ'], 0, 'Rèn tinh thần tập thể.'),
  ]),

  M(28, 'Đi nhanh chuyển sang chạy', [
    Q('Chuyển từ đi sang chạy nên?', ['Quay lưng chạy', 'Tăng nhịp dần, không đột ngột', 'Lao vọt lên ngay', 'Dừng lại rồi chạy'], 1, 'Tăng nhịp từ từ.'),
    Q('Khi chạy phải giữ?', ['Đẩy bạn', 'Hàng và khoảng cách', 'Chen lấn', 'Bám sát gót bạn'], 1, 'Giữ hàng và khoảng cách an toàn.'),
    Q('Hơi thở khi chạy?', ['Hít sâu, thở đều', 'Nín thở', 'Cười to', 'Há mồm hét'], 0, 'Hít sâu thở đều cho có sức.'),
    Q('Sau khi về đích?', ['Nằm xuống', 'Ngồi phịch ngay', 'Uống nước thật nhanh', 'Đi bộ chậm, hít thở sâu'], 3, 'Đi bộ chậm và hít thở sâu để hồi phục.'),
  ]),

  M(29, 'Trò chơi: Cướp cờ', [
    Q('Cướp cờ chia?', ['Một đội duy nhất', 'Hai đội đối diện, có cờ giữa sân', 'Không đội nào', 'Cả lớp đứng yên'], 1, 'Hai đội đối diện, cờ đặt giữa sân.'),
    Q('Khi cầm cờ chạy về, nếu bị chạm em?', ['Vẫn được tính điểm cờ', 'Mất lượt cướp', 'Vẫn ăn cờ', 'Đánh bạn'], 1, 'Bị chạm là mất lượt.'),
    Q('Khi chơi em phải?', ['Lén giấu cờ trong áo', 'Đánh bạn', 'Xô đẩy bạn', 'Tuân thủ luật, không xô đẩy'], 3, 'Tuân thủ luật chơi, không xô đẩy.'),
    Q('Trò chơi rèn?', ['Lười biếng', 'Nhanh nhẹn, đoàn kết', 'Buồn ngủ', 'Tức giận'], 1, 'Rèn nhanh nhẹn và tinh thần đồng đội.'),
  ]),

  M(30, 'Trò chơi: Nhảy bao bố', [
    Q('Nhảy bao bố em đứng?', ['Ngoài bao', 'Cầm bao chạy', 'Trong bao, hai tay giữ miệng bao', 'Trên bao'], 2, 'Đứng trong bao, tay giữ miệng bao.'),
    Q('Để nhảy nhanh, em?', ['Nhảy một chân', 'Quay vòng', 'Nhảy hai chân cùng lúc, nhịp đều', 'Cởi bao bố ra rồi chạy'], 2, 'Nhảy hai chân, nhịp đều.'),
    Q('Khi ngã, em nên?', ['Nằm im', 'Bỏ cuộc', 'Khóc to', 'Đứng dậy, tiếp tục'], 3, 'Đứng dậy nhảy tiếp.'),
    Q('Sau khi chơi, em?', ['Vứt bao đi', 'Xé bao', 'Mang về nhà', 'Gập bao gọn gàng'], 3, 'Cất bao gọn gàng cho lần sau.'),
  ]),

  M(31, 'An toàn khi tập luyện', [
    Q('Trước khi tập, em kiểm tra?', ['Tóc có thơm không', 'Có ai xem không', 'Sân tập sạch, không vật sắc', 'Áo có đẹp không'], 2, 'Đảm bảo sân an toàn, không vật sắc.'),
    Q('Khi đau, em phải?', ['Cố tập tiếp', 'Báo ngay cho cô/thầy', 'Đổ lỗi cho bạn', 'Giấu đi'], 1, 'Báo ngay cho cô/thầy để xử lí.'),
    Q('Trang phục an toàn?', ['Đi dép lê', 'Buộc dây giày gọn, không đeo trang sức', 'Mặc áo dài', 'Đeo vòng to'], 1, 'Buộc dây giày, không đeo trang sức gây vướng.'),
    Q('Sau khi tập, em không nên?', ['Lau khô mồ hôi', 'Uống nước từng ngụm', 'Tắm ngay bằng nước lạnh', 'Đi bộ nhẹ'], 2, 'Tránh tắm lạnh ngay sau khi tập.'),
  ]),

  M(32, 'Tập hợp – dóng hàng', [
    Q('Khẩu lệnh “Tập hợp!” em phải?', ['Đi chỗ khác', 'Chạy đến vị trí, đứng hàng ngay', 'Ngồi xuống', 'Đứng im'], 1, 'Nhanh chóng tập hợp đứng hàng.'),
    Q('Dóng hàng dọc, em nhìn?', ['Nhìn chân bạn phía trước', 'Bạn bên cạnh', 'Nhìn cô đứng phía trên', 'Gáy bạn phía trước'], 3, 'Nhìn gáy bạn phía trước để dóng thẳng.'),
    Q('Dóng hàng ngang, em nhìn?', ['Bạn bên phải/trái để thẳng hàng', 'Quay sau', 'Trần nhà', 'Xuống chân'], 0, 'Nhìn bạn cùng hàng để dóng thẳng.'),
    Q('Khoảng cách trong hàng?', ['Một cánh tay', 'Hai mét', 'Một bước chân', 'Sát gáy bạn'], 0, 'Khoảng một cánh tay là vừa.'),
  ]),

  M(33, 'Ôn tập – Đi, chạy, nhảy, bóng', [
    Q('Khi ôn tập, em nên?', ['Bỏ qua phần khó', 'Tập đầy đủ và đúng kĩ thuật', 'Làm cho có', 'Cười đùa'], 1, 'Tập đầy đủ và đúng kĩ thuật.'),
    Q('Nếu một động tác chưa tốt?', ['Bỏ qua', 'Hỏi cô và tập thêm', 'Tự tập sai thêm vài lần', 'Đổ lỗi'], 1, 'Hỏi cô, tập thêm cho tiến bộ.'),
    Q('Khi bạn làm tốt, em?', ['Cười nhạo', 'Khen ngợi, học hỏi', 'Trêu bạn', 'Ghét bạn'], 1, 'Khen ngợi và học hỏi bạn.'),
    Q('Sau ôn tập em cảm thấy?', ['Mệt mỏi không học', 'Tự tin hơn', 'Sợ hãi', 'Quên hết các động tác đã học'], 1, 'Ôn tập giúp em tự tin hơn.'),
  ]),

  M(34, 'Kiểm tra cuối năm', [
    Q('Khi tới lượt, em nên?', ['Bình tĩnh thực hiện', 'Bỏ ra ngoài', 'Cuống cuồng', 'Chen lên làm trước bạn'], 0, 'Bình tĩnh thực hiện cho tốt.'),
    Q('Nghe hiệu lệnh em phải?', ['Cãi cô', 'Im lặng đứng yên', 'Làm đúng theo lệnh', 'Làm theo ý mình'], 2, 'Làm đúng theo hiệu lệnh.'),
    Q('Nếu sai, em nên?', ['Cãi cô', 'Nản chí, bỏ', 'Bình tĩnh, làm lại đúng', 'Đổ lỗi bạn'], 2, 'Bình tĩnh làm lại cho đúng.'),
    Q('Sau khi kiểm tra, em?', ['Cảm ơn cô', 'Cãi bạn', 'Vứt dụng cụ', 'Bỏ về luôn'], 0, 'Cảm ơn cô, dọn gọn dụng cụ.'),
  ]),

  M(35, 'Tổng kết – Trò chơi dân gian tổng hợp', [
    Q('Tổng kết năm, lớp tổ chức?', ['Cãi nhau', 'Trò chơi vận động vui vẻ', 'Ngồi im', 'Bỏ lớp'], 1, 'Tổ chức trò chơi vận động vui vẻ.'),
    Q('Tinh thần chơi là?', ['Hơn thua nhau', 'Trêu chọc bạn', 'Vui là chính, đoàn kết', 'Phải thắng bằng mọi giá'], 2, 'Vui là chính, đề cao đoàn kết.'),
    Q('Sau một năm em đã?', ['Khoẻ hơn, nhanh nhẹn hơn', 'Yếu hơn', 'Lười hơn', 'Quên hết'], 0, 'Khoẻ hơn và nhanh nhẹn hơn.'),
    Q('Em sẽ tiếp tục?', ['Ngồi xem điện thoại nhiều', 'Lười vận động', 'Tập thể dục đều đặn', 'Bỏ tập'], 2, 'Tiếp tục tập thể dục đều đặn.'),
  ]),
];

export const P1GDTC_SCENARIOS = indexBy(P1GDTC_WEEKS);
