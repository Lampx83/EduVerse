// ============================================================
// Lớp 2 · GDTC — 36 tuần (HK1: 1–18 · HK2: 19–36 · T22 nghỉ Tết — trò chơi dân gian)
// Bám CT GDPT 2018: Đội hình đội ngũ, Bài TD PTC, Đi-chạy-nhảy,
// Ném-bắt bóng, Tâng cầu, Trò chơi vận động, An toàn tập luyện.
// ID prefix: "P2GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2GDTC', 'gdtc', n, title, qs, opts);

export const P2GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Đứng nghiêm, đứng nghỉ', [
    Q('Khẩu lệnh "Nghiêm!" yêu cầu em làm gì?', ['Đứng thẳng, hai tay duỗi áp sát thân, mắt nhìn thẳng', 'Chạy về chỗ', 'Quay sang phải', 'Ngồi xuống nghỉ ngơi'], 0, 'Tư thế nghiêm: thân thẳng, hai gót khép, mũi bàn chân mở chữ V, mắt nhìn thẳng.'),
    Q('Khi nghe "Nghỉ!" thì chân nào được nhún chùng?', ['Chân phải chùng, chân trái làm trụ', 'Chân trái chùng, chân phải làm trụ', 'Cả hai chân', 'Không chân nào chùng'], 1, 'Đứng nghỉ: chân trái hơi chùng, trọng tâm dồn về chân phải.'),
    Q('Khi đứng nghiêm, hai bàn chân tạo thành hình gì?', ['Chữ I (hai bàn chân khép sát)', 'Chữ V (mở khoảng 45°)', 'Vuông góc', 'Song song'], 1, 'Hai gót sát nhau, mũi chân mở ra thành chữ V.'),
    Q('Mắt nhìn về đâu khi đứng nghiêm?', ['Nhắm lại', 'Nhìn lên trời', 'Nhìn xuống đất', 'Nhìn thẳng phía trước'], 3, 'Nhìn thẳng phía trước để giữ tư thế ngay ngắn.'),
    Q('Khẩu lệnh đứng nghiêm là dự lệnh hay động lệnh?', ['Cả hai', 'Không phải khẩu lệnh', 'Động lệnh', 'Dự lệnh'], 2, '"Nghiêm!" là động lệnh — hô xong là thực hiện ngay.'),
    Q('Tư thế đứng nghiêm giúp ích gì?', ['Giúp giữ trật tự, ngay ngắn khi tập trung', 'Không có ích gì', 'Giúp chạy nhanh', 'Giúp ăn no'], 0, 'Đứng nghiêm rèn nề nếp, kỷ luật và tư thế đẹp.'),
  ]),

  M(2, 'Tập hợp hàng dọc, dóng hàng', [
    Q('Khẩu lệnh tập hợp hàng dọc là?', ['"Thành 1 hàng ngang — Tập hợp!"', '"Giải tán!"', '"Thành 1 hàng dọc — Tập hợp!"', '"Nghỉ!"'], 2, 'Khẩu lệnh quy chuẩn cho hàng dọc.'),
    Q('Khi tập hợp hàng dọc, bạn tổ trưởng đứng ở đâu?', ['Đứng giữa hàng', 'Đứng đầu hàng', 'Đứng cuối hàng', 'Đứng ngoài hàng'], 1, 'Tổ trưởng làm chuẩn, đứng đầu hàng.'),
    Q('"Dóng hàng" nghĩa là gì?', ['Vỗ tay', 'Ngồi xuống nghỉ', 'Chỉnh hàng cho thẳng, đều khoảng cách', 'Chạy quanh sân'], 2, 'Dóng hàng = chỉnh thẳng và đều giữa các bạn.'),
    Q('Khi dóng hàng dọc, em nhìn theo ai để giữ thẳng?', ['Nhìn bạn bên trái', 'Nhìn gáy bạn phía trước', 'Nhìn xuống đất', 'Nhìn lên trời'], 1, 'Hàng dọc: nhìn gáy bạn phía trước để thẳng hàng.'),
    Q('Khoảng cách giữa hai bạn trong hàng dọc thường là?', ['Sát vào nhau', 'Một cánh tay đưa thẳng', 'Cách 5 mét', 'Tùy thích'], 1, 'Một cánh tay thẳng để đủ khoảng cách an toàn.'),
    Q('Hành động nào KHÔNG đúng khi đang tập hợp?', ['Đứng nhanh vào vị trí', 'Im lặng nghe khẩu lệnh', 'Giữ tư thế nghiêm', 'Đùa nghịch, xô đẩy bạn'], 3, 'Đùa nghịch dễ ngã, mất trật tự — không được phép.'),
  ]),

  M(3, 'Tập hợp hàng ngang, dóng hàng', [
    Q('Khẩu lệnh tập hợp hàng ngang là?', ['"Chạy đều!"', '"Thành 1 hàng dọc — Tập hợp!"', '"Thành 1 hàng ngang — Tập hợp!"', '"Đứng nghỉ!"'], 2, 'Khẩu lệnh chuẩn cho hàng ngang.'),
    Q('Khi dóng hàng ngang, em quay đầu sang phía nào?', ['Sang phải, nhìn vai bạn bên phải', 'Quay lưng', 'Nhìn lên', 'Nhìn xuống'], 0, 'Hàng ngang: quay nhẹ sang phải nhìn vai bạn để dóng thẳng.'),
    Q('Trong hàng ngang, bạn cao đứng ở đâu?', ['Đứng đầu bên phải hàng', 'Đứng giữa', 'Đứng ngoài hàng', 'Đứng cuối bên trái'], 0, 'Bạn cao nhất đứng đầu (bên phải) làm chuẩn.'),
    Q('Khoảng cách giữa hai bạn trong hàng ngang là?', ['Sát người', 'Một khuỷu tay chống hông', 'Cách 3 mét', 'Hai sải tay dang ngang'], 1, 'Chống hông một khuỷu tay để đều khoảng cách.'),
    Q('Khẩu lệnh "Thôi!" trong dóng hàng có nghĩa là?', ['Ngồi xuống', 'Bắt đầu chạy', 'Tan hàng', 'Dừng động tác dóng, đứng nghiêm'], 3, '"Thôi!" — kết thúc dóng, trở về tư thế nghiêm.'),
    Q('Hàng ngang thường dùng để làm gì?', ['Chạy đua', 'Tập bài thể dục phát triển chung', 'Ngủ trưa', 'Ăn cơm'], 1, 'Hàng ngang giúp cô giáo quan sát cả lớp khi tập bài TD.'),
  ]),

  M(4, 'Bài TD PTC — Động tác vươn thở', [
    Q('Động tác vươn thở tập đầu tiên trong bài TD vì sao?', ['Vì vui nhất', 'Vì khó nhất', 'Vì ngắn nhất', 'Để hít thở sâu, làm nóng cơ thể'], 3, 'Vươn thở giúp khởi động hô hấp, đưa nhịp thở vào tập.'),
    Q('Khi hít vào trong động tác vươn thở, em đưa tay thế nào?', ['Đưa hai tay lên cao, ngẩng đầu', 'Hạ tay xuống thấp', 'Vung tay sang ngang', 'Khoanh tay'], 0, 'Đưa tay lên cao mở lồng ngực để hít vào sâu.'),
    Q('Khi thở ra, em làm gì?', ['Nín thở', 'Nhảy lên', 'Hạ tay xuống và thở ra bằng miệng', 'Hét lên'], 2, 'Hạ tay nhẹ nhàng, thở ra từ từ.'),
    Q('Hít thở sâu giúp cơ thể như thế nào?', ['Đưa nhiều ô-xi vào phổi, khoẻ hơn', 'Buồn ngủ', 'No bụng', 'Đau đầu'], 0, 'Hít sâu cung cấp ô-xi cho máu và cơ bắp.'),
    Q('Nhịp đếm của bài TD lớp 2 thường là?', ['2 × 8 nhịp', 'Không đếm', '1 × 5 nhịp', '10 × 10 nhịp'], 0, 'Mỗi động tác lớp 2 thường tập 2 lần × 8 nhịp.'),
  ]),

  M(5, 'Động tác tay', [
    Q('Khi tập động tác tay, em thường đưa tay theo hướng nào?', ['Lên cao, sang ngang, ra trước', 'Chỉ khoanh tay', 'Chỉ nắm chặt', 'Chỉ đưa xuống đất'], 0, 'Tay vận động qua nhiều hướng để giãn cơ.'),
    Q('Bàn tay khi tập tay thường ở trạng thái?', ['Tuỳ thích', 'Mở rộng, các ngón duỗi thẳng', 'Nắm chặt như đấm', 'Cong queo'], 1, 'Bàn tay mở, các ngón duỗi để tư thế đẹp.'),
    Q('Động tác tay giúp phát triển nhóm cơ nào?', ['Cơ bụng', 'Cơ chân', 'Cơ vai, cơ tay', 'Cơ mặt'], 2, 'Chủ yếu rèn cơ vai và cơ tay.'),
    Q('Khi đưa tay sang ngang, em chú ý điều gì?', ['Tay cao hơn đầu', 'Bắt chéo trước ngực', 'Hai tay ngang vai, lòng bàn tay úp', 'Tay chạm đất'], 2, 'Đưa ngang đúng tầm vai để đẹp và an toàn.'),
    Q('Tập tay đúng kỹ thuật KHÔNG nên?', ['Hít thở đều', 'Mắt nhìn thẳng', 'Đưa tay giật mạnh, không kiểm soát', 'Đưa nhẹ nhàng, đúng nhịp'], 2, 'Giật mạnh dễ trật khớp vai.'),
    Q('Tư thế chuẩn bị động tác tay là?', ['Đứng nghiêm, hai tay xuôi', 'Ngồi xếp bằng', 'Nằm sấp', 'Quỳ gối'], 0, 'Bắt đầu từ tư thế đứng nghiêm.'),
  ]),

  M(6, 'Động tác chân', [
    Q('Động tác chân thường có nhịp khuỵu gối, vì sao?', ['Để nghỉ ngơi', 'Rèn cơ đùi, cơ chân', 'Để ngồi xuống', 'Để chạy nhanh'], 1, 'Khuỵu gối tăng sức cho cơ đùi.'),
    Q('Khi khuỵu gối, lưng em nên thế nào?', ['Cong về sau', 'Giữ thẳng, không cúi gập', 'Cúi gập sâu', 'Vặn sang ngang'], 1, 'Lưng thẳng để bảo vệ cột sống.'),
    Q('Hai bàn chân khi khuỵu gối nên?', ['Kiễng mũi', 'Đứng một chân', 'Cả bàn chân chạm đất', 'Nhấc cả hai chân'], 2, 'Bàn chân chạm đất giữ thăng bằng.'),
    Q('Đầu gối khi khuỵu KHÔNG nên?', ['Mở rộng vừa phải', 'Hướng cùng mũi chân', 'Hơi chùng', 'Vượt quá mũi bàn chân'], 3, 'Gối vượt mũi chân dễ đau khớp.'),
    Q('Tập động tác chân tốt giúp em?', ['Vẽ giỏi', 'Viết chữ đẹp', 'Hát hay', 'Chạy, nhảy khoẻ hơn'], 3, 'Cơ chân khoẻ là nền tảng vận động.'),
    Q('Trước khi tập chân, nên?', ['Ngồi yên 10 phút', 'Khởi động xoay cổ chân, đầu gối', 'Uống thật nhiều nước', 'Tập ngay động tác mạnh để nóng người'], 1, 'Khởi động khớp giúp tránh chấn thương.'),
  ]),

  M(7, 'Động tác lườn', [
    Q('Động tác lườn tập phần nào của cơ thể?', ['Bàn chân', 'Hai bên sườn (lườn)', 'Cổ tay', 'Đầu gối'], 1, 'Lườn = hai bên sườn, từ nách xuống hông.'),
    Q('Khi nghiêng người sang trái, tay phải làm gì?', ['Buông thõng', 'Đưa lên cao theo người, kéo căng sườn phải', 'Vỗ tay', 'Chống hông'], 1, 'Tay phía đối diện đưa lên cao tạo lực kéo.'),
    Q('Nghiêng lườn đúng KHÔNG được?', ['Hít thở đều', 'Cúi gập về trước hoặc ngả ra sau', 'Nghiêng đúng sang phải/trái', 'Giữ chân trụ vững'], 1, 'Nghiêng lườn phải đúng sang bên — không cúi hay ngả.'),
    Q('Hai chân khi tập lườn nên?', ['Nhón cả hai chân', 'Đứng vững, rộng bằng vai', 'Co một chân', 'Bắt chéo nhau'], 1, 'Chân rộng bằng vai để vững thăng bằng.'),
    Q('Lợi ích của động tác lườn?', ['Cao thêm 10 cm', 'To chân', 'Hết đói', 'Mềm dẻo cơ thân, eo gọn'], 3, 'Giúp cơ thân và eo dẻo dai.'),
  ]),

  M(8, 'Động tác bụng', [
    Q('Động tác bụng thường có nhịp gì?', ['Vỗ tay', 'Nhảy lên cao', 'Cúi gập người về trước, tay chạm mũi chân', 'Ngồi xổm'], 2, 'Cúi gập người là nhịp chính của động tác bụng.'),
    Q('Khi cúi gập, đầu gối em nên?', ['Khuỵu sâu', 'Co lên', 'Giữ thẳng (không khoá quá cứng)', 'Bắt chéo'], 2, 'Đầu gối thẳng giúp kéo căng cơ lưng-sau đùi.'),
    Q('Nếu chưa chạm được mũi chân, em nên?', ['Đè lưng bạn', 'Cố hết sức, đến mức có thể', 'Gập đầu gối thật cong để chạm dễ hơn', 'Bỏ tập'], 1, 'Tập đến mức có thể, dần sẽ dẻo hơn.'),
    Q('Khi cúi gập, em thở thế nào?', ['La hét', 'Nín thở', 'Thở ra khi cúi xuống, hít vào khi đứng lên', 'Há to miệng'], 2, 'Phối hợp thở đúng giúp động tác mượt mà.'),
    Q('Động tác bụng giúp phần nào khoẻ hơn?', ['Cơ bụng và cơ lưng', 'Cơ mắt', 'Cơ cổ tay và cơ ngón tay', 'Cơ tai'], 0, 'Tăng sức cho cơ thân giữa.'),
    Q('Trước khi tập bụng KHÔNG nên?', ['Khởi động nhẹ', 'Ăn quá no', 'Uống ngụm nước nhỏ', 'Đứng nghiêm'], 1, 'No bụng tập sẽ khó chịu, dễ buồn nôn.'),
  ]),

  M(9, 'Động tác toàn thân (phối hợp 5 động tác)', [
    Q('Bài TD PTC lớp 2 cơ bản gồm bao nhiêu động tác chính?', ['20 động tác', '2 động tác', '5 động tác', '10 động tác'], 2, 'Vươn thở, tay, chân, lườn, bụng (toàn thân) là cấu trúc chuẩn.'),
    Q('Thứ tự đúng khi tập bài thể dục là?', ['Bụng → Tay → Chân → Vươn thở → Lườn', 'Tay → Bụng → Vươn thở → Lườn → Chân', 'Tuỳ thích', 'Vươn thở → Tay → Chân → Lườn → Bụng'], 3, 'Thứ tự từ khởi động (vươn thở) đến nhóm cơ lớn.'),
    Q('Phối hợp toàn thân yêu cầu điều gì?', ['Đúng nhịp, đúng tư thế, đồng đều cả lớp', 'Tự sáng tạo nhịp', 'Im lặng tuyệt đối', 'Càng nhanh càng tốt'], 0, 'Đồng đều, đúng nhịp là quan trọng nhất.'),
    Q('Khi cô giáo đếm "1-2-3-4", em đáp lại nhịp nào?', ['Đếm to thay cô', 'Đứng nhìn', 'Tập đúng theo từng nhịp đếm', 'Im lặng và không tập'], 2, 'Thực hiện đúng nhịp cô đếm.'),
    Q('Nếu em quên động tác, em nên?', ['Tự chế động tác mới theo ý mình', 'Đứng yên giữa hàng', 'Nhìn theo bạn bên cạnh và làm theo', 'Bỏ ra ngoài'], 2, 'Quan sát bạn để theo nhịp lớp.'),
    Q('Tập bài TD đều đặn mỗi ngày giúp?', ['Lười học', 'Hay quên', 'Buồn ngủ', 'Khoẻ mạnh, dẻo dai, học tốt hơn'], 3, 'Vận động đều giúp cơ thể và trí óc đều phát triển.'),
  ]),

  M(10, 'Đi đều theo nhịp', [
    Q('Đi đều khác đi thường ở điểm nào?', ['Đi rất nhanh', 'Đi rất chậm', 'Có nhịp đếm, đánh tay đều, đặt chân theo nhịp', 'Đi giật lùi'], 2, 'Đi đều có nhịp, có đánh tay phối hợp.'),
    Q('Khi đi đều, chân trái và tay nào đi cùng nhịp?', ['Không đánh tay', 'Chân trái — tay phải', 'Cả hai tay cùng đưa', 'Chân trái — tay trái'], 1, 'Chân và tay đối diện cùng đưa lên (giao nhau).'),
    Q('Khẩu lệnh "Đi đều — bước!" thì bước chân nào trước?', ['Chân thuận của em (phải hoặc trái)', 'Chân phải', 'Cả hai chân', 'Chân trái'], 3, 'Quy ước đi đều luôn bước chân trái trước.'),
    Q('Mắt nhìn về đâu khi đi đều?', ['Liếc sang ngang', 'Nhìn thẳng phía trước', 'Ngẩng nhìn trời', 'Cúi nhìn chân'], 1, 'Nhìn thẳng giữ tư thế và hướng.'),
    Q('Khẩu lệnh dừng khi đang đi đều là?', ['"Đứng lại — đứng!"', '"Chạy nhanh!"', '"Giải tán!"', '"Ngồi xuống!"'], 0, 'Đứng lại — đứng là khẩu lệnh chuẩn.'),
    Q('Đi đều thường dùng trong dịp nào?', ['Lễ chào cờ, diễu hành', 'Ăn cơm', 'Ngủ trưa', 'Học Toán'], 0, 'Dùng trong nghi lễ, đội hình tập trung.'),
  ]),

  M(11, 'Đi và chạy nhẹ nhàng', [
    Q('Chạy nhẹ nhàng nghĩa là?', ['Chạy thật nhanh hết sức', 'Tiếp đất bằng nửa trước bàn chân, người thả lỏng', 'Vừa chạy vừa la', 'Đập gót thật mạnh'], 1, 'Tiếp đất nửa trước bàn chân — êm và đỡ chấn động.'),
    Q('Khi chạy nhẹ nhàng, tay em làm gì?', ['Để thõng cứng đờ', 'Vung sang hai bên', 'Co khuỷu, đánh tay tự nhiên trước-sau', 'Khoanh trước ngực'], 2, 'Đánh tay trước-sau giúp giữ thăng bằng.'),
    Q('Mục đích của bài đi-chạy nhẹ nhàng?', ['Làm bài tập', 'Học hát', 'Khởi động và tăng sức bền', 'Học vẽ'], 2, 'Đây là bài rèn sức bền và khởi động.'),
    Q('Nếu mệt khi chạy, em nên?', ['Ngồi sụp xuống ngay', 'Cố chạy nhanh hơn', 'Nín thở', 'Chuyển sang đi bộ, hít thở sâu'], 3, 'Hạ tốc độ rồi mới dừng để cơ thể thích nghi.'),
    Q('Hơi thở khi chạy nhẹ nên?', ['Nhịp nhàng, hít mũi-thở miệng', 'Thở dốc thật to', 'Nín thở', 'Há miệng cười'], 0, 'Hít mũi, thở miệng đều giúp đỡ mệt.'),
  ]),

  M(12, 'Chạy nhanh cự ly 15–20 m', [
    Q('Tư thế xuất phát chạy nhanh ở lớp 2 là?', ['Ngồi xếp bằng', 'Xuất phát cao (đứng, chân trước-sau)', 'Nằm sấp', 'Ngồi xổm'], 1, 'Lớp 2 dùng xuất phát cao đơn giản.'),
    Q('Khi chạy nhanh, em chạy thế nào?', ['Nhìn xuống chân', 'Liếc sang bạn bên cạnh', 'Đi bộ chậm rãi', 'Hết sức về đích, mắt nhìn đích'], 3, 'Tập trung nhìn đích, dồn sức.'),
    Q('Khi qua vạch đích, em nên?', ['Ngồi bệt xuống ngay', 'Tiếp tục chạy chậm dần rồi dừng', 'Dừng phắt tại vạch', 'Quay đầu chạy ngược'], 1, 'Chạy chậm dần để tránh ngã và chấn thương.'),
    Q('Trước khi chạy nhanh, em PHẢI?', ['Uống nước đá', 'Khởi động kỹ', 'Ăn thật no', 'Cởi giày'], 1, 'Khởi động giúp tránh đau cơ, chuột rút.'),
    Q('Cự ly chạy nhanh lớp 2 thường là?', ['1 ki-lô-mét', '15–20 mét', '500 mét', '100 mét'], 1, 'Phù hợp sức học sinh lớp 2.'),
    Q('Trên đường chạy KHÔNG nên?', ['Hô cổ vũ bạn', 'Chạy đúng làn của mình', 'Tập trung về phía đích', 'Cắt ngang, va vào bạn bên cạnh'], 3, 'Cắt ngang gây tai nạn.'),
  ]),

  M(13, 'Bật xa tại chỗ', [
    Q('Bật xa tại chỗ dùng lực bật của?', ['Cả hai chân', 'Lực của tay', 'Chỉ một chân phải', 'Chỉ một chân trái'], 0, 'Bật xa tại chỗ là bật hai chân.'),
    Q('Trước khi bật, em làm gì?', ['Đứng nghiêm bất động', 'Nằm sấp', 'Quỳ xuống', 'Khuỵu gối, đánh tay ra sau lấy đà'], 3, 'Khuỵu gối + đánh tay để lấy đà.'),
    Q('Khi tiếp đất sau khi bật, em?', ['Đập gót thật mạnh', 'Ngã ngửa ra sau', 'Chống tay xuống đất', 'Tiếp bằng nửa trước bàn chân rồi cả bàn, khuỵu gối nhẹ để giảm chấn'], 3, 'Tiếp đất đúng giúp tránh chấn thương.'),
    Q('Khi tiếp đất, gối nên?', ['Hơi khuỵu để giảm chấn động', 'Co cao lên', 'Bắt chéo nhau', 'Duỗi thẳng cứng'], 0, 'Khuỵu gối hấp thụ lực.'),
    Q('Nơi tập bật xa an toàn là?', ['Sân mềm/đệm/cát, bằng phẳng', 'Sân xi-măng cứng, có vạch kẻ', 'Mặt đường có xe', 'Sàn bê-tông trơn'], 0, 'Mặt mềm và bằng giúp an toàn.'),
    Q('Lợi ích của bật xa?', ['Tăng chiều dài tóc', 'Tăng sức bật và sức mạnh chân', 'Tăng trí nhớ tức thì', 'Tăng cân'], 1, 'Phát triển sức mạnh chi dưới.'),
  ]),

  M(14, 'Trò chơi: Mèo đuổi chuột', [
    Q('Trong trò "Mèo đuổi chuột", các bạn còn lại đứng làm gì?', ['Chạy theo mèo', 'Đứng nghiêm', 'Nắm tay nhau thành vòng tròn, giơ cao tạo "hang"', 'Ngồi xuống'], 2, 'Vòng tròn tạo "hang" để chuột chui qua.'),
    Q('"Mèo" làm gì?', ['Chui hang', 'Đuổi bắt "chuột"', 'Đứng yên', 'Ngồi xem'], 1, 'Mèo là người đuổi.'),
    Q('"Chuột" thắng khi nào?', ['Khóc to', 'Ngã xuống đất', 'Bị mèo bắt', 'Chạy về vị trí xuất phát mà không bị mèo bắt'], 3, 'Về đích an toàn là thắng.'),
    Q('Khi chơi, em KHÔNG nên?', ['Hát bài đồng dao của trò chơi', 'Xô đẩy, ngáng chân bạn', 'Giữ vòng tròn đều', 'Cười vui'], 1, 'Xô đẩy dễ ngã, gây tai nạn.'),
    Q('Trò "Mèo đuổi chuột" rèn kỹ năng nào?', ['Học vẽ', 'Tập viết', 'Học toán', 'Phản xạ, nhanh nhẹn, khéo léo'], 3, 'Phát triển phản xạ và sức nhanh.'),
  ]),

  M(15, 'Trò chơi: Nhanh lên bạn ơi', [
    Q('Trò "Nhanh lên bạn ơi" thường chia thành mấy đội?', ['Hai đội thi đua', 'Không chia đội', 'Bốn đội', 'Một đội'], 0, 'Hai đội thi tiếp sức.'),
    Q('Cách chơi tiếp sức là?', ['Cả đội chạy cùng lúc', 'Ngồi đợi hết giờ', 'Một mình chạy cả lượt', 'Bạn trước chạy về đập tay bạn sau, bạn sau mới được xuất phát'], 3, 'Đập tay/chạm tay rồi bạn sau mới chạy.'),
    Q('Đội thắng là đội?', ['Đông người nhất', 'Hoàn thành lượt chạy của cả đội nhanh nhất, đúng luật', 'Hét to nhất', 'Mặc áo đẹp nhất'], 1, 'Nhanh và đúng luật mới thắng.'),
    Q('Khi cổ vũ bạn, em nên?', ['Cãi nhau với đội kia', 'Chê bai bạn chậm', 'Hô "Nhanh lên bạn ơi!" với tinh thần tích cực', 'Ném đồ vào sân'], 2, 'Cổ vũ tích cực, không chê bai.'),
    Q('Trò chơi này rèn?', ['Khả năng vẽ', 'Khả năng hát', 'Khả năng viết', 'Sức nhanh và tinh thần đồng đội'], 3, 'Nhanh + đồng đội.'),
  ]),

  M(16, 'Trò chơi: Chim về tổ', [
    Q('Trong trò "Chim về tổ", "tổ" là?', ['Cái cây', 'Mái nhà', 'Vòng tròn nhỏ được vẽ trên sân', 'Bàn ghế'], 2, 'Tổ là các vòng tròn vẽ trên sân.'),
    Q('Số "tổ" thường ít hơn số "chim" mấy?', ['Ít hơn 1 (để 1 bạn không có tổ)', 'Bằng số chim', 'Không có tổ nào', 'Gấp đôi số chim'], 0, 'Ít hơn 1 — tạo bạn bị "loại" mỗi lượt.'),
    Q('Khẩu lệnh "Chim về tổ!" thì em làm gì?', ['Chạy thật nhanh vào một tổ trống', 'Ngồi xuống', 'Đứng yên', 'Hét lên'], 0, 'Phải nhanh chân vào tổ.'),
    Q('Bạn không tìm được tổ sẽ?', ['Bị "loại" tạm, ra ngoài chờ lượt sau', 'Bị phạt thật nặng', 'Khóc cho đến hết giờ', 'Được thưởng quà'], 0, 'Tạm dừng chơi, không bị phạt.'),
    Q('Khi tranh tổ, em PHẢI?', ['Đẩy bạn ra khỏi tổ', 'Chen lấn để giành tổ trước', 'Cấu véo bạn', 'Không xô đẩy bạn ngã'], 3, 'Chơi văn minh, không gây nguy hiểm.'),
    Q('Trò "Chim về tổ" rèn?', ['Phản xạ và nhanh nhẹn', 'Đọc thơ', 'Vẽ tranh', 'Học toán'], 0, 'Phát triển phản xạ.'),
  ]),

  M(17, 'Khởi động và hồi tĩnh', [
    Q('Vì sao phải khởi động trước khi tập?', ['Làm nóng cơ, tránh chấn thương', 'Để hết đói', 'Để dài chân', 'Để mệt sớm'], 0, 'Khởi động tăng nhiệt cơ, dẻo khớp.'),
    Q('Khởi động thường gồm?', ['Xoay khớp + chạy nhẹ + giãn cơ', 'Tập ngay động tác khó nhất', 'Đứng nhìn', 'Ngồi ăn'], 0, 'Xoay khớp + chạy nhẹ + giãn cơ là chuẩn.'),
    Q('Hồi tĩnh sau khi tập là?', ['Ngồi sụp xuống ngay', 'Đi chậm, hít thở sâu, thả lỏng cơ', 'Chạy thật nhanh thêm 1 vòng', 'Uống thật nhiều nước lạnh một lúc'], 1, 'Hồi tĩnh giảm dần nhịp tim.'),
    Q('Sau khi tập xong rất nóng, em uống nước thế nào?', ['Uống nước có ga thật nhiều', 'Tu thật nhanh nước đá', 'Không uống cả ngày', 'Uống từng ngụm nhỏ, nước mát vừa'], 3, 'Uống chậm để cơ thể hấp thụ.'),
    Q('Bỏ qua khởi động có thể gây?', ['Cao thêm', 'Chuột rút, đau cơ, trật khớp', 'No bụng', 'Học giỏi hơn'], 1, 'Không khởi động dễ chấn thương.'),
    Q('Sau giờ học GDTC, em nên?', ['Nằm xuống sàn lạnh', 'Cởi áo ra giữa sân', 'Lau mồ hôi, thay áo ướt nếu có', 'Đứng dưới quạt mạnh khi đang đẫm mồ hôi'], 2, 'Lau khô và thay áo tránh cảm.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khẩu lệnh tập hợp hàng dọc đúng là?', ['"Đứng dậy!"', '"Tan!"', '"Hàng dọc!"', '"Thành 1 hàng dọc — Tập hợp!"'], 3, 'Khẩu lệnh chuẩn.'),
    Q('Bài TD PTC lớp 2 có những động tác chính?', ['Chỉ động tác chân', 'Chỉ động tác tay', 'Vươn thở, tay, chân, lườn, bụng (toàn thân)', 'Múa, hát, vẽ, đọc, viết'], 2, '5 nhóm động tác cơ bản.'),
    Q('Khi đi đều, chân trái cùng nhịp với tay?', ['Tay trái', 'Tay phải', 'Không tay nào', 'Cả hai tay'], 1, 'Tay-chân chéo nhau.'),
    Q('Trước khi chạy nhanh PHẢI?', ['Chạy thử hết sức một vòng cho quen', 'Cởi giày', 'Khởi động', 'Uống đá'], 2, 'Khởi động kỹ.'),
    Q('Khi tiếp đất sau bật xa, em?', ['Đập gót mạnh', 'Khuỵu gối nhẹ, tiếp nửa trước bàn chân', 'Chống tay', 'Ngã ngửa'], 1, 'Kỹ thuật tiếp đất an toàn.'),
    Q('Trong trò "Mèo đuổi chuột", các bạn còn lại?', ['Chạy lung tung', 'Nắm tay tạo vòng tròn làm hang', 'Đuổi cùng mèo', 'Ngồi xem'], 1, 'Tạo hang cho chuột chui.'),
    Q('Hồi tĩnh sau tập là?', ['Đi chậm, thở sâu, thả lỏng', 'Ngồi sụp ngay', 'Uống đá lạnh', 'Chạy thêm'], 0, 'Giảm dần nhịp tim.'),
    Q('Khi đứng nghiêm, hai bàn chân tạo hình?', ['Chữ V', 'Chữ A (hai gót xa nhau)', 'Chéo nhau', 'Song song'], 0, 'Mũi chân mở thành chữ V.'),
    Q('Nếu mệt khi chạy bền, em nên?', ['Ngồi sụp xuống', 'Đi bộ, hít sâu, không dừng đột ngột', 'Cố chạy nhanh hơn', 'Nín thở'], 1, 'Giảm tốc từ từ.'),
    Q('Hành vi nào KHÔNG đúng trong giờ GDTC?', ['Mặc trang phục thể thao', 'Xô đẩy, đùa nghịch khi tập', 'Nghe khẩu lệnh nghiêm túc', 'Khởi động đầy đủ'], 1, 'Xô đẩy gây tai nạn.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Nhảy dây cá nhân (chuẩn bị)', [
    Q('Dây nhảy phù hợp khi đứng giữa dây, hai tay cầm hai đầu thì?', ['Quá dài kéo lê đất', 'Quá ngắn chỉ đến gối', 'Hai tay cầm chạm đỉnh đầu', 'Hai tay ngang nách (vừa người)'], 3, 'Dây vừa: tay cầm đến ngang nách khi đứng giữa dây.'),
    Q('Tư thế chuẩn bị nhảy dây là?', ['Hai chân chụm hoặc chếch nhẹ, tay cầm cán dây, dây sau gót', 'Quỳ xuống', 'Ngồi xổm', 'Nằm sấp'], 0, 'Bắt đầu từ tư thế đứng, dây sau gót.'),
    Q('Khi quay dây, em dùng phần nào của tay là chính?', ['Cổ tay', 'Vai vung tròn', 'Hai ngón tay cái', 'Cả cánh tay vung mạnh'], 0, 'Cổ tay quay nhỏ giúp nhịp đều và đỡ mỏi.'),
    Q('Vì sao chọn nơi tập thoáng để nhảy dây?', ['Cho mát', 'Tránh va vào người và đồ vật xung quanh', 'Để mọi người nhìn', 'Cho có gió'], 1, 'An toàn cho mình và cho bạn.'),
    Q('Giày nhảy dây nên là?', ['Dép xỏ ngón', 'Giày thể thao có đế êm, vừa chân', 'Giày cao gót', 'Đi chân đất trên bê-tông'], 1, 'Đế êm giảm chấn động.'),
  ]),

  M(20, 'Nhảy dây — bật chụm hai chân', [
    Q('Khi nhảy chụm hai chân, em bật bằng?', ['Cả hai chân, dùng nửa trước bàn chân', 'Cả bàn chân nện mạnh', 'Đầu gối', 'Một chân'], 0, 'Bật bằng nửa trước bàn chân giúp êm.'),
    Q('Nhịp nhảy chụm là?', ['Dây qua chân thì bật, đều đặn', 'Đứng yên, dây tự quay', 'Vứt dây ra rồi nhảy', 'Bật trước, dây quay sau'], 0, 'Phối hợp nhịp quay dây và bật.'),
    Q('Khi tiếp đất, gối em nên?', ['Bắt chéo', 'Cứng đờ', 'Hơi khuỵu để giảm chấn', 'Co cao'], 2, 'Khuỵu nhẹ để êm.'),
    Q('Nếu vướng dây, em nên?', ['Quăng dây sang bạn', 'Dừng lại, sửa dây rồi tập lại', 'Cố nhảy bừa', 'Tháo dây ra ném đi cho khỏi vướng'], 1, 'Vướng thì dừng, sửa và tiếp tục.'),
    Q('Nhảy dây giúp em phát triển?', ['Khả năng viết', 'Khả năng đọc', 'Sức bật, sức bền, phối hợp tay-chân', 'Khả năng vẽ'], 2, 'Phát triển toàn diện vận động.'),
    Q('Khi tập theo nhóm, khoảng cách giữa các bạn?', ['Đủ rộng để dây không quật vào người khác', 'Sát nhau', 'Đứng trong vòng tròn nhỏ', 'Đứng càng gần càng tiện quan sát'], 0, 'Giữ khoảng cách an toàn.'),
  ]),

  M(21, 'Tâng cầu — chuẩn bị, cầm cầu đúng', [
    Q('Quả cầu đá chân (cầu lông gà) gồm phần nào?', ['Bằng giấy', 'Chỉ có lông', 'Đế cầu (cao su/nhựa) và túm lông', 'Chỉ có nhựa'], 2, 'Cấu tạo: đế nặng + túm lông để bay ổn định.'),
    Q('Khi chuẩn bị tâng, em cầm cầu ở phần nào?', ['Cầm phần lông, đế hướng xuống', 'Bóp dập cầu', 'Cầm bằng miệng', 'Cầm phần đế, lông hướng xuống'], 0, 'Cầm phần lông để cầu rơi đế xuống — đá đúng.'),
    Q('Tư thế đứng chuẩn bị tâng cầu?', ['Đứng thẳng hai chân chụm', 'Đứng chân trước-chân sau, hơi khuỵu, trọng tâm thấp', 'Ngồi xổm', 'Quỳ một chân'], 1, 'Thế chân trước-sau giữ thăng bằng tốt.'),
    Q('Trước khi tâng, em thả cầu hay tung cầu?', ['Ném cầu thật mạnh xuống đất', 'Thả nhẹ cầu rơi xuống trước mu bàn chân', 'Ném lên trời', 'Đặt cầu xuống đất'], 1, 'Thả nhẹ để dễ đón.'),
    Q('Mắt em nhìn đâu khi tâng?', ['Nhìn theo cầu', 'Nhìn ra xa', 'Nhắm lại', 'Nhìn xuống chân'], 0, 'Theo dõi cầu để đón đúng nhịp.'),
  ]),

  M(22, 'Tết — Trò chơi dân gian ngày Tết', [
    Q('Trò chơi dân gian nào thường có ở ngày Tết?', ['Đá bóng chuyên nghiệp', 'Đua xe máy', 'Kéo co, đẩy gậy, nhảy bao bố, ô ăn quan', 'Chơi điện tử'], 2, 'Đây là các trò dân gian phổ biến.'),
    Q('Trò "Kéo co" cần dụng cụ gì?', ['Cây gậy ngắn', 'Quả bóng', 'Một sợi dây thừng chắc, có dấu giữa', 'Chiếc dù'], 2, 'Dây thừng có vạch giữa để xác định thắng-thua.'),
    Q('Trong "Đẩy gậy", hai người làm gì?', ['Cùng cầm hai đầu một cây gậy, đẩy đối phương ra khỏi vòng', 'Đánh gậy vào người nhau', 'Đốt gậy', 'Ném gậy lên trời'], 0, 'Đẩy gậy là môn dân tộc — đẩy ra khỏi vòng quy định.'),
    Q('Ý nghĩa của trò chơi dân gian ngày Tết?', ['Giữ gìn bản sắc văn hoá, gắn kết cộng đồng', 'Khoe của', 'Cãi nhau cho vui', 'Chỉ để giết thời gian'], 0, 'Văn hoá truyền thống và đoàn kết.'),
    Q('Khi chơi trò dân gian, em cần?', ['Tôn trọng luật chơi, an toàn, không tranh cãi', 'Cãi nhau với bạn', 'Bỏ về giữa chừng', 'Ăn gian'], 0, 'Chơi văn minh, an toàn.'),
    Q('Ngày Tết, ăn nhiều bánh kẹo mà ít vận động sẽ?', ['Dễ tăng cân, mệt mỏi', 'Học giỏi hơn', 'Khoẻ hơn', 'Cao thêm'], 0, 'Cần vận động cân bằng dinh dưỡng.'),
  ]),

  M(23, 'Tâng cầu bằng đùi/bàn chân', [
    Q('Tâng cầu bằng đùi, em chạm cầu ở vị trí nào của đùi?', ['Mặt trên đùi, gần giữa', 'Mặt sau đùi', 'Đầu gối', 'Cổ chân'], 0, 'Mặt trên giữa đùi cho cầu bay thẳng.'),
    Q('Khi tâng bằng đùi, đùi nâng cao thế nào?', ['Hạ xuống dưới gối', 'Nâng vừa phải, đùi gần song song mặt đất', 'Bắt chéo', 'Nâng cao quá vai'], 1, 'Đùi ngang để mặt tiếp xúc phẳng.'),
    Q('Tâng cầu bằng mu bàn chân, mu là?', ['Đầu ngón chân', 'Mặt trên bàn chân', 'Gót chân', 'Mặt dưới (lòng bàn chân)'], 1, 'Mu = mặt trên bàn chân.'),
    Q('Khi tâng bằng mu, cổ chân em?', ['Buông lỏng hoàn toàn', 'Khoá nhẹ, mu nằm ngang khi chạm cầu', 'Bẻ vẹo', 'Co quắp'], 1, 'Khoá cổ chân để mặt tiếp xúc ổn định.'),
    Q('Lực tâng nên?', ['Không cần lực', 'Càng mạnh càng tốt', 'Càng nhẹ càng tốt', 'Vừa phải để cầu bay lên ngang hông'], 3, 'Cầu bay ngang hông tiện đón lượt sau.'),
    Q('Tâng cầu giúp phát triển?', ['Khéo léo, thăng bằng, phối hợp mắt-chân', 'Khả năng đọc nhanh', 'Khả năng vẽ', 'Trí nhớ chữ'], 0, 'Phối hợp và khéo léo.'),
  ]),

  M(24, 'Tâng cầu di chuyển', [
    Q('Khi tâng cầu di chuyển, em phối hợp?', ['Đứng yên một chỗ', 'Chỉ dùng tay', 'Mắt nhìn cầu + chân bước nhỏ + tay giữ thăng bằng', 'Nhắm mắt + chạy thẳng'], 2, 'Phải kết hợp nhiều bộ phận.'),
    Q('Bước chân khi di chuyển tâng cầu là?', ['Nhảy chụm', 'Bước nhỏ, nhanh, linh hoạt', 'Bước dài, chậm', 'Đứng yên một chỗ tâng tại chỗ'], 1, 'Bước nhỏ để dễ điều chỉnh.'),
    Q('Khi cầu rơi xa, em nên?', ['Đứng yên nhìn', 'Ném dép theo', 'Quay đầu đi', 'Bước nhanh tới, nâng chân đón'], 3, 'Phải nhanh chân đón cầu.'),
    Q('Nếu bị mất thăng bằng, em?', ['Dừng lại, lấy lại tư thế, tâng tiếp', 'Cố tâng tiếp dù người đã loạng choạng', 'Đẩy bạn để giữ thăng bằng', 'Ngã ra sàn'], 0, 'Dừng nhịp rồi tiếp tục.'),
    Q('Khi chơi nhóm, các bạn?', ['Đứng sát nhau', 'Đứng cách nhau đủ xa để không va vào nhau', 'Đứng đối diện sát mặt', 'Đè lên người nhau'], 1, 'Khoảng cách an toàn.'),
  ]),

  M(25, 'Ném bóng nhỏ — tư thế cơ bản', [
    Q('Bóng ném ở bài này là?', ['Bóng chuyền', 'Bóng đá tiêu chuẩn', 'Bóng rổ', 'Bóng nhỏ (~ 150g), vừa tay'], 3, 'Bóng nhỏ phù hợp lứa tuổi.'),
    Q('Tư thế chuẩn bị ném bóng nhỏ là?', ['Chân trước-chân sau, người hơi nghiêng phía tay ném', 'Đứng chụm hai chân, người thẳng', 'Quỳ một chân', 'Ngồi xổm'], 0, 'Chân trước-sau ổn định và tạo lực.'),
    Q('Tay cầm bóng nên?', ['Bóp dập bóng', 'Cầm bằng hai tay đan vào nhau', 'Cầm chắc bằng các ngón, không siết quá chặt', 'Cầm bằng đầu ngón cái'], 2, 'Cầm chắc nhưng thoải mái.'),
    Q('Khi ném, cánh tay đưa từ đâu đến đâu?', ['Vung ngang', 'Từ trước ra sau', 'Đẩy thẳng từ bụng', 'Từ sau ra trước, qua đầu'], 3, 'Vung qua đầu để có lực và đường bóng đẹp.'),
    Q('Hướng ném an toàn là?', ['Hướng vào cửa kính', 'Theo hiệu lệnh, đúng hướng đích, không hướng vào bạn', 'Hướng vào lớp', 'Hướng vào bạn đối diện'], 1, 'Tuân thủ hướng đã quy định.'),
  ]),

  M(26, 'Ném bóng xa', [
    Q('Để ném xa hơn, em cần?', ['Phối hợp lực chân + xoay thân + vung tay', 'Chỉ vung tay', 'Chỉ dùng cổ tay', 'Nín thở mà ném'], 0, 'Lực toàn thân — không chỉ tay.'),
    Q('Góc ném bóng để bay xa thường khoảng?', ['Hướng xuống đất', 'Sát mặt đất', 'Chếch lên cao (~ 45°)', 'Thẳng đứng lên trời'], 2, 'Khoảng 45° cho khoảng cách xa nhất.'),
    Q('Sau khi ném, chân sau theo lực sẽ?', ['Quay lại đi lùi', 'Đứng yên cứng đờ', 'Bước lên một bước theo đà', 'Nhảy sang ngang'], 2, 'Bước theo đà giữ thăng bằng.'),
    Q('Khi cô giáo nói "Thôi!", em?', ['Chạy ra nhặt ngay', 'Tiếp tục ném thêm', 'Dừng ném ngay, đợi hiệu lệnh nhặt bóng', 'Ném thêm thật mạnh'], 2, 'Tuân theo hiệu lệnh để tránh tai nạn.'),
    Q('Khi nhặt bóng, em đi theo hướng?', ['Theo lệnh cô, đi hàng ngang ra nhặt', 'Cướp bóng của bạn', 'Chạy lung tung', 'Ném ngược lại ngay'], 0, 'Đi có trật tự.'),
    Q('Lợi ích của bài ném bóng xa?', ['Tăng sức mạnh tay, vai, thân', 'Học vẽ', 'Học chữ nhanh', 'Học hát hay'], 0, 'Phát triển nhóm cơ trên.'),
  ]),

  M(27, 'Ném bóng trúng đích', [
    Q('Ném trúng đích chú trọng?', ['Ném càng xa càng tốt', 'Lực thật mạnh', 'Sự chính xác — đường ngắm + lực vừa đủ', 'Ném thật cao'], 2, 'Chính xác quan trọng hơn mạnh.'),
    Q('Đích ngắm thường là?', ['Vòng tròn vẽ trên tường hoặc thùng/giỏ', 'Cửa sổ kính', 'Mặt bạn', 'Mái nhà'], 0, 'Đích an toàn được quy định.'),
    Q('Trước khi ném, em nên?', ['Vừa chạy vừa ném loạn', 'Hít thở, nhắm thật kỹ rồi mới ném', 'Nhắm mắt', 'Ném ngay không nhắm'], 1, 'Tập trung và ngắm cẩn thận.'),
    Q('Nếu trượt đích, em nên?', ['Bỏ ra ngoài', 'Bình tĩnh điều chỉnh lực và hướng ở lượt sau', 'Bực bội đập bóng', 'Chê bai bản thân'], 1, 'Rút kinh nghiệm — điều chỉnh.'),
    Q('Trò ném trúng đích rèn?', ['Khả năng cãi nhau', 'Khả năng la hét', 'Khả năng chạy nhanh', 'Tính chính xác, kiên nhẫn'], 3, 'Chính xác + kiên nhẫn.'),
  ]),

  M(28, 'Bắt bóng hai tay', [
    Q('Tư thế bắt bóng hai tay là?', ['Hai tay đưa ra trước, mở ngón, mắt nhìn bóng', 'Giơ một tay', 'Khoanh tay', 'Đứng nghiêm, tay xuôi'], 0, 'Hai tay đón sẵn, nhìn theo bóng.'),
    Q('Khi bóng đến, hai tay em làm gì?', ['Kéo nhẹ về phía thân để giảm lực', 'Bỏ tay ra sau', 'Cứng đờ chặn', 'Tránh sang ngang'], 0, 'Kéo nhẹ về thân giảm chấn.'),
    Q('Bàn tay khi bắt bóng nên?', ['Nắm chặt thành đấm', 'Mở rộng, các ngón hơi cong như cái rổ', 'Ngửa lòng bàn tay phẳng', 'Bắt chéo'], 1, 'Tay tạo hình rổ ôm bóng.'),
    Q('Nếu bóng đến quá nhanh và cao, em?', ['Đứng yên cho bóng đập vào người', 'Cãi nhau với người ném', 'Tránh sang bên thay vì cố bắt bằng mặt', 'Lao đầu vào đón'], 2, 'An toàn cho bản thân là trên hết.'),
    Q('Lợi ích của bắt bóng?', ['Tăng tóc dài', 'Tăng phản xạ tay và phối hợp mắt-tay', 'Tăng chiều cao 5 cm', 'Tăng cân'], 1, 'Phản xạ + phối hợp.'),
    Q('Khi tập theo cặp, khoảng cách hai bạn?', ['Phù hợp với lực ném và sức bắt (gần ở mức cơ bản)', 'Càng xa càng tốt', 'Sát mặt nhau', 'Quay lưng nhau'], 0, 'Khoảng cách hợp lý để an toàn.'),
  ]),

  M(29, 'Trò chơi: Kéo co (luật chơi, an toàn)', [
    Q('Vạch ranh giới thắng trong kéo co được xác định bởi?', ['Cô giáo đoán', 'Tiếng hô của khán giả', 'Vạch giữa dây và vạch giới hạn trên sân', 'Đội cao to hơn'], 2, 'Có vạch quy định rõ trên sân.'),
    Q('Đội thắng kéo co là đội?', ['La hét to nhất', 'Kéo được vạch giữa dây qua vạch của đội mình', 'Có người to nhất', 'Đông người hơn'], 1, 'Kéo qua vạch là thắng.'),
    Q('Vị trí tay khi cầm dây?', ['Quấn dây quanh cổ tay', 'Cầm bằng răng', 'Hai tay nắm chắc dây, không quấn vào cổ tay', 'Quấn quanh cổ'], 2, 'Tuyệt đối không quấn vào cơ thể — nguy hiểm.'),
    Q('Tư thế kéo co an toàn?', ['Quay lưng lại dây', 'Đứng thẳng cứng', 'Ngả thân về sau, chân trước khuỵu, chân sau làm trụ', 'Ngồi xuống đất'], 2, 'Ngả thân hợp lý để dồn lực.'),
    Q('Khi một bên đột nhiên buông dây?', ['Đội kia thắng', 'Đội kia có thể ngã — rất nguy hiểm; không được buông', 'Phải vỗ tay', 'Không sao'], 1, 'Buông dây gây ngã tập thể — không được làm.'),
    Q('Tinh thần khi chơi kéo co?', ['Bỏ cuộc giữa chừng', 'Cãi nhau', 'Đổ lỗi cho nhau', 'Đoàn kết, đồng đội, fair-play'], 3, 'Đồng đội là yếu tố quyết định.'),
  ]),

  M(30, 'Trò chơi: Nhảy bao bố', [
    Q('Trong "Nhảy bao bố", em đứng thế nào?', ['Trùm bao lên đầu', 'Hai chân đặt trong bao, hai tay giữ miệng bao', 'Quàng bao quanh cổ', 'Đứng ngoài bao'], 1, 'Chân trong bao, tay giữ miệng bao.'),
    Q('Cách di chuyển là?', ['Đi từng bước như bình thường', 'Bật chụm hai chân, tiến về trước', 'Bò bằng tay', 'Quay tròn'], 1, 'Bật chụm như nhảy con thỏ.'),
    Q('Nếu ngã trong khi nhảy, em?', ['Nhảy nhanh hơn để bù lại thời gian', 'Bỏ cuộc', 'Đứng dậy, tiếp tục thi đấu', 'Ngồi luôn ở đó'], 2, 'Bình tĩnh đứng dậy.'),
    Q('Bao nên là?', ['Bao có vật nhọn bên trong', 'Bao quá to lê đất', 'Bao nylon trơn', 'Bao vải thoáng, vừa kích cỡ chân'], 3, 'Bao vải an toàn, vừa kích cỡ.'),
    Q('Trò "Nhảy bao bố" rèn?', ['Khả năng vẽ', 'Khả năng đọc', 'Khả năng viết', 'Sức bật, sự khéo léo và thăng bằng'], 3, 'Sức bật + khéo léo + thăng bằng.'),
  ]),

  M(31, 'Trò chơi: Rồng rắn lên mây', [
    Q('Trong "Rồng rắn lên mây", người dẫn đầu gọi là?', ['Đuôi rồng', 'Đầu rồng (đầu rắn)', 'Thầy thuốc', 'Thợ săn'], 1, 'Người đứng đầu hàng là đầu rồng.'),
    Q('Đầu rồng có nhiệm vụ?', ['Ngồi yên', 'Bảo vệ đuôi rồng khỏi bị "thầy thuốc" bắt', 'Hát thật to', 'Bắt đuôi rồng'], 1, 'Đầu rồng dang tay che, bảo vệ đuôi.'),
    Q('Các bạn sau đầu rồng làm gì?', ['Chạy mỗi người một hướng', 'Nắm áo/vai bạn phía trước, di chuyển theo đầu', 'Tự tách thành hai hàng song song', 'Đứng yên'], 1, 'Bám chặt thành chuỗi.'),
    Q('Bài đồng dao "Rồng rắn lên mây" mang đặc trưng?', ['Trò chơi trên máy tính', 'Trò chơi quốc tế', 'Trò chơi dân gian Việt Nam', 'Bài hát nước ngoài'], 2, 'Trò dân gian VN, kèm đồng dao.'),
    Q('Khi chơi, em PHẢI?', ['Đánh bạn', 'La mắng nhau', 'Kéo thật mạnh áo bạn', 'Không kéo áo bạn mạnh đến rách, không kéo ngã'], 3, 'Chơi nhẹ nhàng, an toàn.'),
  ]),

  M(32, 'Chạy nhanh cự ly 30 m', [
    Q('Cự ly chạy nhanh 30 m yêu cầu gì?', ['Chạy zigzag', 'Đi bộ thư giãn', 'Bứt tốc nhanh và duy trì tốc độ đến đích', 'Chạy lùi'], 2, 'Bứt tốc + duy trì là yếu tố cốt lõi.'),
    Q('Vung tay khi chạy nhanh?', ['Khoanh tay', 'Co khuỷu ~ 90°, đánh tay mạnh trước-sau', 'Để thõng cứng đờ', 'Vung ngang sang hai bên'], 1, 'Đánh tay đúng tăng tốc độ.'),
    Q('Khi cô giáo phát lệnh "Sẵn sàng... Chạy!", em?', ['Ngồi xuống', 'Chờ nghe rõ "Chạy!" rồi xuất phát', 'Xuất phát trước khi nghe "Chạy!"', 'Không xuất phát'], 1, 'Chạy đúng tín hiệu — không cướp lệnh.'),
    Q('Nếu em vấp ngã giữa đường?', ['Bỏ về chỗ', 'Bình tĩnh đứng dậy chạy tiếp nếu không bị đau', 'Ngồi khóc tại chỗ', 'Quay lại đầu chạy lại'], 1, 'Đứng dậy nếu an toàn.'),
    Q('Sau khi đích, em làm gì?', ['Đi bộ chậm để hồi tĩnh, hít thở sâu', 'Chạy thêm 1 vòng', 'Uống đá lạnh', 'Ngồi sụp ngay'], 0, 'Hồi tĩnh đúng cách.'),
    Q('So với 15-20 m, cự ly 30 m yêu cầu thêm?', ['Chỉ sức mạnh tay', 'Tốc độ chậm hơn', 'Sức bền tốc độ', 'Chỉ sức bật'], 2, '30 m đòi hỏi duy trì tốc độ lâu hơn.'),
  ]),

  M(33, 'Ôn tập 5 động tác bài thể dục', [
    Q('Động tác đầu tiên của bài TD lớp 2 là?', ['Điều hoà', 'Tay', 'Vươn thở', 'Toàn thân'], 2, 'Vươn thở khởi đầu.'),
    Q('Động tác tay chú trọng cơ?', ['Cơ chân', 'Cơ vai, cơ tay', 'Cơ bụng và cơ lưng', 'Cơ mắt'], 1, 'Vai và tay.'),
    Q('Khi tập động tác chân, lưng nên?', ['Giữ thẳng', 'Cong ngược', 'Vặn ngang', 'Cúi gập sâu'], 0, 'Thẳng để bảo vệ cột sống.'),
    Q('Động tác lườn rèn phần?', ['Mắt cá chân', 'Cổ tay', 'Đầu gối', 'Hai bên sườn'], 3, 'Hai bên sườn (lườn).'),
    Q('Động tác bụng giúp cơ nào?', ['Cơ ngón chân', 'Cơ bụng và lưng', 'Cơ mặt', 'Cơ tai'], 1, 'Cơ thân giữa.'),
    Q('Mỗi động tác tập bao nhiêu nhịp ở lớp 2?', ['5 × 10 nhịp', '1 × 4 nhịp', '2 × 8 nhịp', '10 × 20 nhịp'], 2, '2 lần 8 nhịp.'),
  ]),

  M(34, 'An toàn khi tập luyện (nắng, mưa)', [
    Q('Khi nắng to, em nên?', ['Đội mũ, tập trong bóng mát nếu được; uống nước đầy đủ', 'Không uống nước cả buổi', 'Cởi áo, đứng giữa nắng', 'Tập thật lâu giữa trưa'], 0, 'Bảo vệ khỏi say nắng.'),
    Q('Trời mưa to, sân trơn ướt, em?', ['Vẫn chạy trên sân trơn', 'Vào tập trong nhà đa năng, không tập ngoài sân trơn', 'Cởi giày chạy chân đất trong mưa', 'Tập kéo co trên đất sình'], 1, 'Sân trơn dễ ngã.'),
    Q('Đang tập mà thấy chóng mặt, em PHẢI?', ['Báo cô giáo và ngồi nghỉ trong bóng mát', 'Chạy thật nhanh', 'Cố tập tiếp', 'Im lặng đi về một mình'], 0, 'Báo cô giáo ngay.'),
    Q('Trang phục GDTC phù hợp?', ['Mặc áo khoác dày khi trời nóng', 'Dép xỏ ngón', 'Áo dài, váy ngắn', 'Quần áo thể thao thoáng, giày thể thao'], 3, 'Trang phục thoáng, an toàn.'),
    Q('Trước giờ học GDTC, em KHÔNG nên?', ['Ăn quá no', 'Đi vệ sinh', 'Uống ngụm nước', 'Khởi động nhẹ'], 0, 'No quá dễ buồn nôn khi vận động.'),
    Q('Khi bị bạn va vào và đau, em?', ['Im lặng chịu đau, không nói với ai', 'Đánh lại bạn', 'Báo cô giáo, không tự ý đánh lại', 'Cãi nhau to'], 2, 'Báo cô để xử lý đúng cách.'),
  ]),

  M(35, 'Hồi tưởng kĩ năng cả năm', [
    Q('Kỹ năng nào sau đây đã học ở lớp 2?', ['Trượt tuyết', 'Lặn biển', 'Tâng cầu, bật xa, ném bóng, nhảy dây', 'Đua mô-tô'], 2, 'Đây là các kỹ năng chính của lớp 2.'),
    Q('Đội hình đội ngũ lớp 2 gồm?', ['Đội hình bóng đá 11 người', 'Đội hình duyệt binh quân đội', 'Diễu binh quốc khánh', 'Nghiêm-nghỉ, tập hợp hàng dọc/ngang, dóng hàng, đi đều'], 3, 'Các nội dung phù hợp lớp 2.'),
    Q('Trò chơi dân gian đã học?', ['Bowling', 'Mèo đuổi chuột, Chim về tổ, Kéo co, Nhảy bao bố, Rồng rắn', 'Bóng rổ, bóng chuyền chuyên nghiệp', 'Cờ vua quốc tế'], 1, 'Các trò dân gian/vận động cơ bản.'),
    Q('Quy tắc bất biến trong GDTC?', ['Tùy ý làm gì cũng được', 'Chỉ Khởi động, bỏ tập', 'Khởi động — Tập — Hồi tĩnh', 'Chỉ Tập, bỏ khởi động'], 2, 'Quy trình 3 bước.'),
    Q('Tinh thần khi tham gia GDTC?', ['Phá hỏng dụng cụ', 'Tích cực, đoàn kết, an toàn, tôn trọng luật chơi', 'Cãi nhau với bạn', 'Đi trễ về sớm'], 1, 'Giá trị cốt lõi của môn học.'),
    Q('Vì sao cần học GDTC?', ['Để xem phim', 'Phát triển thể chất, trí tuệ, ý chí và đạo đức', 'Để được nghỉ học môn khác', 'Để ăn quà'], 1, '"Khoẻ để học, khoẻ để sống".'),
  ]),

  M(36, 'Kiểm tra cuối năm', [
    Q('Khẩu lệnh "Nghiêm!" yêu cầu tư thế?', ['Khoanh tay lên đầu', 'Chạy về chỗ', 'Đứng thẳng, hai gót khép chữ V, mắt nhìn thẳng', 'Ngồi xếp bằng'], 2, 'Tư thế chuẩn.'),
    Q('Khi đi đều, chân trái cùng tay?', ['Hai tay', 'Tay phải', 'Không tay nào', 'Tay trái'], 1, 'Tay-chân chéo.'),
    Q('Tâng cầu, em cầm cầu ở phần?', ['Cầm bằng miệng', 'Bóp dập cầu', 'Đế, lông hướng xuống', 'Lông, đế hướng xuống'], 3, 'Cầm phần lông.'),
    Q('Khi bắt bóng, hai bàn tay?', ['Khoanh trước ngực', 'Bắt chéo', 'Nắm chặt thành đấm', 'Mở như rổ, kéo nhẹ về thân khi bóng đến'], 3, 'Tạo hình rổ, giảm chấn.'),
    Q('Ném bóng xa, góc ném tốt?', ['Khoảng 45° chếch lên', 'Thẳng đứng', 'Hướng xuống đất', 'Sát mặt đất'], 0, '45° đem lại tầm xa.'),
    Q('Bật xa tại chỗ — tiếp đất?', ['Nửa trước bàn chân, khuỵu gối nhẹ', 'Ngã ngửa ra sau', 'Chống tay xuống đất', 'Đập gót thật mạnh'], 0, 'Tiếp đất an toàn.'),
    Q('Trò "Mèo đuổi chuột", các bạn ngoài làm gì?', ['Ngồi xem', 'Chạy đuổi cùng mèo', 'Nắm tay tạo vòng tròn làm hang', 'Cùng làm mèo để bắt chuột nhanh hơn'], 2, 'Tạo hang.'),
    Q('Kéo co — sai lầm nguy hiểm là?', ['Quấn dây quanh cổ tay/cổ', 'Đoàn kết kéo cùng nhịp', 'Nắm chắc dây bằng hai tay', 'Ngả thân ra sau'], 0, 'Quấn dây gây thương tích nặng.'),
    Q('Nhảy bao bố di chuyển bằng cách?', ['Đi từng bước', 'Bò bằng tay', 'Quay tròn tại chỗ', 'Bật chụm hai chân'], 3, 'Bật chụm.'),
    Q('Đang tập GDTC mà chóng mặt thì?', ['Im lặng bỏ về một mình', 'Chạy thật nhanh cho đỡ chóng', 'Cố tập tiếp', 'Báo cô giáo, ngồi nghỉ trong bóng mát'], 3, 'Báo cô để được hỗ trợ.'),
  ], { difficulty: 3 }),
];

export const P2GDTC_SCENARIOS = indexBy(P2GDTC_WEEKS);
