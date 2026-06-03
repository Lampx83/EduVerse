// ============================================================
// Lớp 7 — Giáo dục thể chất (GDTC) · 35 tuần
// Bám sát Chương trình GDPT 2018 môn GDTC cấp THCS.
// Trọng tâm: chạy ngắn, chạy bền, nhảy xa, nhảy cao, bóng,
// cầu lông, đá cầu, thể dục liên hoàn, an toàn tập luyện.
// ============================================================

import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7GDTC', 'gdtc', n, title, qs, opts);

export const S7GDTC_WEEKS = [
  // ───────────── HK1 ─────────────

  M(1, 'Khởi động và an toàn tập luyện', [
    Q('Tại sao phải khởi động trước khi tập thể dục?', ['Làm nóng cơ, giảm nguy cơ chấn thương', 'Cho vui', 'Không cần thiết', 'Để mất sức'], 0, 'Khởi động làm tăng nhiệt cơ, lưu thông máu, làm dẻo khớp → giảm chấn thương.'),
    Q('Thứ tự khởi động đúng là?', ['Không cần thứ tự', 'Khởi động chung → khởi động chuyên môn', 'Khởi động chuyên môn trước', 'Bỏ qua khởi động chung'], 1, 'Khởi động chung (toàn thân) trước, rồi đến chuyên môn (phù hợp bài tập sắp tới).'),
    Q('Thời gian khởi động hợp lý cho một buổi tập là?', ['Không khởi động', '30 giây', '30 phút', '5-10 phút'], 3, 'Khởi động khoảng 5-10 phút là phù hợp cho học sinh.'),
    Q('Khi tập luyện thấy chóng mặt, đau ngực thì nên?', ['Im lặng', 'Dừng tập, báo giáo viên', 'Chạy nhanh hơn', 'Cố tập tiếp'], 1, 'Có dấu hiệu bất thường → dừng ngay và báo giáo viên/người lớn.'),
    Q('Sau buổi tập nên làm gì?', ['Uống nước đá lạnh ngay', 'Dừng đột ngột', 'Ngồi bệt xuống', 'Thả lỏng (cool-down) và uống nước từ từ'], 3, 'Thả lỏng giúp cơ phục hồi, uống nước từ từ tránh sốc.'),
  ]),

  M(2, 'Chạy ngắn — kỹ thuật xuất phát thấp', [
    Q('Chạy 100m thuộc loại chạy nào?', ['Chạy đường dài', 'Chạy bền', 'Chạy trung bình', 'Chạy ngắn (cự ly ngắn)'], 3, '100m thuộc cự ly ngắn (60m, 100m, 200m, 400m).'),
    Q('Tư thế xuất phát thấp trong chạy ngắn dùng để?', ['Giữ tốc độ ổn định suốt cự ly', 'Tăng tốc nhanh trong vài bước đầu', 'Đứng nghỉ', 'Chạy chậm'], 1, 'Xuất phát thấp giúp đẩy người về phía trước, tăng tốc nhanh.'),
    Q('Ba khẩu lệnh chuẩn trong chạy ngắn là?', ['"Bắt đầu - giữa - kết thúc"', '"Vào chỗ" - "Sẵn sàng" - "Chạy"', '"Đứng - ngồi - chạy"', '"Một - hai - ba"'], 1, 'Ba khẩu lệnh chính thức: Vào chỗ → Sẵn sàng → Chạy (tiếng súng/còi).'),
    Q('Trong khi chạy nước rút (100m), hơi thở nên?', ['Ngắn, gấp, phối hợp với bước chân', 'Không cần quan tâm', 'Nín hoàn toàn', 'Thở rất sâu chậm'], 0, 'Chạy nước rút: hơi thở nhanh, nông, phối hợp với bước.'),
    Q('Đích đến trong chạy 100m: vận động viên nên?', ['Chạy hết tốc lực qua vạch đích (đâm đích)', 'Đi bộ qua đích', 'Dừng lại trước đích', 'Giảm tốc trước đích'], 0, 'Phải chạy hết tốc lực, có thể nghiêng người (đâm đích) để qua vạch.'),
  ]),

  M(3, 'Chạy ngắn — kỹ thuật về đích', [
    Q('Kỹ thuật "đánh ngực" về đích trong chạy ngắn là?', ['Nhảy lên', 'Đẩy ngực ra trước khi đến vạch để cắt đích sớm', 'Đập tay vào ngực', 'Quay người'], 1, 'Kỹ thuật cắt đích bằng ngực giúp giành lợi thế thời gian.'),
    Q('Sau khi qua đích, vận động viên nên?', ['Giảm tốc dần, đi bộ vài bước', 'Dừng đột ngột', 'Chạy ngược lại', 'Ngồi bệt xuống'], 0, 'Giảm tốc dần để cơ thể thích nghi, tránh chấn thương.'),
    Q('Trong giai đoạn chạy giữa quãng (100m), bước chân nên thế nào?', ['Dài, đều, tốc độ cao', 'Ngắn, chậm', 'Không quan tâm', 'Bước nhảy'], 0, 'Giai đoạn chạy giữa: bước dài, tần số cao để giữ tốc độ.'),
    Q('Tay vung khi chạy ngắn nên?', ['Vung ngược hướng chân, song song trục cơ thể', 'Khoanh tay', 'Vung loạn', 'Bỏ thõng'], 0, 'Tay vung trước-sau song song trục thân, ngược hướng chân.'),
    Q('Để cải thiện tốc độ chạy ngắn cần luyện gì?', ['Chỉ tập tay', 'Chỉ chạy chậm', 'Sức mạnh tốc độ, kỹ thuật, phản xạ xuất phát', 'Không tập gì'], 2, 'Chạy ngắn cần cả: sức mạnh, tốc độ, kỹ thuật và phản xạ.'),
  ]),

  M(4, 'Chạy bền — đi/chạy luân phiên', [
    Q('"Chạy bền" rèn luyện chủ yếu yếu tố gì?', ['Tốc độ tối đa', 'Sức mạnh tối đa', 'Sức bền tim mạch và hô hấp', 'Khéo léo'], 2, 'Chạy bền (sức bền): rèn hệ tim mạch, hô hấp, sức bền cơ.'),
    Q('Đối với học sinh mới tập, kỹ thuật "đi/chạy luân phiên" có tác dụng gì?', ['Rút ngắn thời gian hoàn thành cự ly', 'Giảm hiệu quả', 'Mất thời gian', 'Làm quen dần, tránh quá sức'], 3, 'Đi/chạy luân phiên giúp cơ thể thích nghi tăng dần với sức bền.'),
    Q('Hơi thở khi chạy bền nên?', ['Nhanh và nông', 'Sâu, đều, kết hợp mũi-miệng', 'Không quan tâm', 'Nín thở'], 1, 'Chạy bền: thở sâu, đều, theo nhịp bước (vd 3 bước hít - 3 bước thở).'),
    Q('Tốc độ chạy bền nên?', ['Vừa phải, ổn định, có thể duy trì lâu', 'Chạy nước rút từ đầu đến cuối', 'Chạy rồi nghỉ', 'Càng nhanh càng tốt'], 0, 'Chạy bền: tốc độ vừa phải, có thể nói chuyện được mới đúng.'),
    Q('Lợi ích của chạy bền là?', ['Không có lợi', 'Hại sức khoẻ', 'Tăng sức bền tim phổi, giảm stress, tốt cho sức khoẻ', 'Chỉ làm mệt'], 2, 'Chạy bền thường xuyên: khoẻ tim phổi, giảm stress, kiểm soát cân nặng.'),
  ]),

  M(5, 'Nhảy xa — kỹ thuật "ưỡn thân"', [
    Q('Nhảy xa gồm mấy giai đoạn chính?', ['4 giai đoạn: chạy đà, giậm nhảy, trên không, tiếp đất', '6 giai đoạn', '2 giai đoạn', '1 giai đoạn'], 0, '4 giai đoạn: chạy đà → giậm nhảy → bay trên không → tiếp đất.'),
    Q('Trong nhảy xa, chân giậm nhảy là?', ['Chân thuận, mạnh hơn', 'Chân không thuận', 'Đổi chân luân phiên mỗi lần nhảy', 'Cả hai chân cùng lúc'], 0, 'Thường dùng chân thuận làm chân giậm (mạnh hơn).'),
    Q('Khi tiếp đất trong nhảy xa, nên?', ['Tiếp bằng mông', 'Hai chân chạm đất cùng lúc, đầu gối hơi khuỵu', 'Một chân', 'Tiếp bằng tay'], 1, 'Hai chân cùng tiếp, gối khuỵu để giảm chấn — bảo vệ khớp.'),
    Q('Tại sao phải chạy đà trong nhảy xa?', ['Không cần đà', 'Để mệt', 'Trang trí', 'Tạo tốc độ ngang để chuyển thành xa'], 3, 'Đà tạo tốc độ ngang, kết hợp lực giậm → tạo quỹ đạo bay xa.'),
    Q('Vạch giậm nhảy là gì?', ['Vạch trang trí', 'Vạch xuất phát', 'Vạch quy định nơi giậm nhảy; bước qua = phạm luật', 'Vạch đích'], 2, 'Vạch giậm: chân không được bước qua, nếu phạm coi như nhảy hỏng.'),
  ]),

  M(6, 'Nhảy cao — kiểu "bước qua"', [
    Q('Kiểu nhảy cao "bước qua" thực hiện như thế nào?', ['Chân giậm đẩy, chân lăng vung qua xà rồi đến chân giậm', 'Trườn người', 'Nhảy hai chân cùng lúc', 'Không qua xà'], 0, 'Bước qua: chân lăng vung qua xà trước, chân giậm qua sau như "bước".'),
    Q('Chân giậm nhảy cao là?', ['Chân thuận (mạnh)', 'Đổi chân giậm theo từng lần nhảy', 'Chân yếu', 'Cả hai'], 0, 'Chân giậm thường là chân thuận để tạo lực bật cao nhất.'),
    Q('Trong nhảy cao, hướng chạy đà thường?', ['Song song với xà', 'Ngẫu nhiên', 'Vuông góc với xà', 'Chéo (khoảng 30-45 độ) với xà'], 3, 'Kiểu "bước qua" chạy đà chéo 30-45 độ với xà.'),
    Q('Khi qua xà, nên?', ['Bám xà', 'Đẩy xà', 'Chạm nhẹ', 'Không chạm xà'], 3, 'Mục tiêu là qua xà mà không làm xà rơi.'),
    Q('Tiếp đất sau khi qua xà nên?', ['Hai chân cùng lúc lưng còng', 'Chân lăng tiếp đất trước, đầu gối khuỵu', 'Ngã ngửa', 'Đầu xuống trước'], 1, 'Kiểu bước qua tiếp đất bằng chân lăng (chân vung qua trước).'),
  ]),

  M(7, 'Bóng đá — kỹ thuật dẫn bóng', [
    Q('Khi dẫn bóng trong bóng đá, nên chạm bóng bằng?', ['Gót chân', 'Mũi chân duy nhất', 'Má trong, má ngoài, mu giữa bàn chân tuỳ tình huống', 'Lòng bàn chân áp sát mặt sân'], 2, 'Dẫn bóng linh hoạt: má trong (đổi hướng), má ngoài (lừa), mu (tốc độ).'),
    Q('Khoảng cách bóng khi dẫn nên?', ['Không cần', 'Đá thật mạnh', 'Càng xa càng tốt', 'Gần chân, kiểm soát được, không để bị cướp'], 3, 'Bóng cần gần chân để kiểm soát và xử lý nhanh khi đối phương áp sát.'),
    Q('Trong bóng đá, "chuyền bóng ngắn" thường dùng kỹ thuật?', ['Đá bằng mu chính diện bàn chân', 'Đá bằng má trong bàn chân', 'Đá bằng mũi chân', 'Đá bằng gót'], 1, 'Chuyền ngắn: má trong cho độ chính xác cao.'),
    Q('Khi sút cầu môn, kỹ thuật phổ biến nhất là?', ['Đá bằng gót', 'Đá bằng đầu gối', 'Dùng tay', 'Đá bằng mu bàn chân (mu chính diện)'], 3, 'Sút mạnh thường dùng mu bàn chân → bóng đi mạnh và chính diện.'),
    Q('Một trận bóng đá tiêu chuẩn có bao nhiêu cầu thủ mỗi đội trên sân?', ['5', '11', '9', '7'], 1, 'Bóng đá 11 người, bao gồm thủ môn.'),
  ]),

  M(8, 'Bóng rổ — kỹ thuật dẫn và chuyền bóng', [
    Q('Khi dẫn bóng rổ, tay nên?', ['Đập bóng xuống đất bằng ngón và phần dưới bàn tay', 'Dùng cả hai tay đập', 'Cầm bóng chạy', 'Đập bằng mu bàn tay'], 0, 'Dẫn bóng rổ: dùng đầu ngón và mu trong tay đẩy bóng xuống đất, nhịp nhàng.'),
    Q('"Đi bộ" (travel) trong bóng rổ là lỗi gì?', ['Chuyền bóng', 'Đập bóng', 'Cầm bóng chạy quá 2 bước mà không đập bóng', 'Đứng yên'], 2, 'Travel: di chuyển quá 2 bước với bóng trong tay mà không dẫn → phạm luật.'),
    Q('Một quả ném rổ thông thường (2 điểm hoặc 3 điểm) được tính khi nào?', ['Bóng đi qua vành rổ từ trên xuống', 'Bóng chạm bảng', 'Bóng chạm vành', 'Bóng đập đất'], 0, 'Ghi điểm khi bóng đi xuyên qua vành rổ từ trên.'),
    Q('Kỹ thuật chuyền bóng phổ biến trong bóng rổ là?', ['Chuyền trước ngực (chest pass), chuyền đập đất (bounce)', 'Đá bóng', 'Đập đầu', 'Đẩy bằng vai'], 0, 'Hai kiểu chuyền cơ bản: chest pass và bounce pass.'),
    Q('Trận bóng rổ tiêu chuẩn FIBA có bao nhiêu người mỗi đội trên sân?', ['5', '7', '11', '6'], 0, 'Bóng rổ 5 người mỗi đội trên sân (12 trong danh sách).'),
  ]),

  M(9, 'Bóng chuyền — kỹ thuật chuyền bóng cao', [
    Q('Kỹ thuật "chuyền bóng cao tay" trong bóng chuyền dùng phần nào của tay?', ['Các đầu ngón tay, đặt như "rọ" trước trán', 'Cả tay nắm', 'Mu bàn tay đập', 'Lòng bàn tay đập'], 0, 'Chuyền cao tay: dùng đầu ngón tay tạo "rọ" trên trán đẩy bóng đi.'),
    Q('Kỹ thuật "đệm bóng" (chuyền thấp tay) dùng phần nào?', ['Mặt cẳng tay (cẳng tay khép sát)', 'Lưng bàn tay', 'Khuỷu tay', 'Đầu ngón tay'], 0, 'Đệm bóng: hai cẳng tay khép, mặt cẳng tay đỡ bóng nảy lên.'),
    Q('Một đội bóng chuyền trên sân có bao nhiêu người?', ['7', '11', '5', '6'], 3, 'Bóng chuyền tiêu chuẩn: 6 người mỗi đội trên sân.'),
    Q('Mỗi đội được chạm bóng tối đa mấy lần trước khi đưa qua lưới?', ['1 lần', '3 lần', '7 lần', '5 lần'], 1, 'Tối đa 3 lần chạm (chắn không tính); thường: đỡ - chuyền - đập.'),
    Q('Tư thế chuẩn bị bóng chuyền là?', ['Khoanh tay', 'Ngồi xổm', 'Hai chân rộng bằng vai, gối khuỵu, trọng tâm thấp, tay hờ trước', 'Đứng thẳng cứng'], 2, 'Tư thế thấp giúp di chuyển nhanh và đỡ bóng dễ.'),
  ]),

  M(10, 'Cầu lông — kỹ thuật phát cầu thấp tay', [
    Q('Kỹ thuật phát cầu thấp tay (low serve) thường dùng trong?', ['Không dùng', 'Phát cầu cao', 'Chỉ tập', 'Đánh đôi và đánh đơn để khống chế'], 3, 'Phát cầu thấp tay phổ biến ở đánh đôi để buộc đối thủ đỡ thấp.'),
    Q('Trong đánh đôi cầu lông, vị trí phát cầu là?', ['Ngoài sân', 'Bất kỳ chỗ nào', 'Trên lưới', 'Trong ô phát cầu, không chạm vạch'], 3, 'Phát cầu phải đứng trong ô phát cầu hợp lệ, không chạm/giẫm vạch.'),
    Q('Cầu chạm lưới khi phát cầu nhưng vẫn rơi đúng ô thì?', ['Đối thủ thắng', 'Phát lại', 'Hợp lệ — tiếp tục chơi', 'Mất điểm'], 2, 'Luật BWF hiện đại: cầu chạm lưới khi phát vẫn hợp lệ nếu rơi đúng ô.'),
    Q('Vợt cầu lông cầm như thế nào để vung linh hoạt?', ['Cầm chặt cứng', 'Cầm bằng hai tay', 'Cầm vợt "bắt tay" (V của ngón cái-trỏ thẳng với cạnh vợt)', 'Cầm gần đầu vợt'], 2, 'Kiểu cầm "bắt tay" (handshake grip) là cơ bản, linh hoạt nhất.'),
    Q('Trong đánh đôi cầu lông, mỗi đội có?', ['2 người', '4 người', '3 người', '1 người'], 0, 'Đôi: 2 người mỗi đội (tổng 4 trên sân).'),
  ]),

  M(11, 'Cầu lông — kỹ thuật đánh cao thuận tay', [
    Q('Đánh cao thuận tay (forehand clear) là?', ['Đánh cầu cao và sâu về cuối sân đối phương', 'Bỏ nhỏ', 'Đập cầu xuống', 'Phát cầu'], 0, 'Clear: đánh cầu bay cao, xa về cuối sân để đẩy đối phương lùi.'),
    Q('Khi đánh cao thuận tay, điểm tiếp xúc cầu nên ở?', ['Trên đầu, hơi trước người', 'Sau lưng', 'Dưới hông', 'Sát đất'], 0, 'Điểm chạm cầu trên đầu, hơi trước người giúp đánh xa và mạnh.'),
    Q('Cú "đập cầu" (smash) khác clear ở điểm gì?', ['Giống hệt nhau', 'Không có gì khác', 'Smash bay nhanh xuống đất; clear bay cao và xa', 'Smash chỉ bay ngang'], 2, 'Smash là cú đánh xuống mạnh, ăn điểm; clear là phòng thủ/đẩy đối thủ về sau.'),
    Q('"Bỏ nhỏ" (drop shot) trong cầu lông là?', ['Đánh cầu nhẹ rơi sát lưới đối phương', 'Đập mạnh', 'Phát cầu', 'Đánh cao'], 0, 'Drop: đánh cầu nhẹ rơi sát lưới → khó đỡ vì đối thủ đứng xa.'),
    Q('Lỗi thường gặp khi đánh forehand clear là?', ['Đánh sớm', 'Nhìn cầu', 'Đánh cầu khi đã đi qua khỏi đầu (muộn)', 'Cầm vợt đúng'], 2, 'Đánh muộn → cầu xuống thấp → không thể đẩy xa.'),
  ]),

  M(12, 'Đá cầu — kỹ thuật tâng cầu cơ bản', [
    Q('Tâng cầu bằng má trong bàn chân là kỹ thuật?', ['Không tồn tại', 'Khó nhất', 'Chỉ dành cho VĐV', 'Cơ bản, dễ kiểm soát'], 3, 'Tâng má trong là kỹ thuật cơ bản đầu tiên, dễ kiểm soát hướng cầu.'),
    Q('Khi tâng cầu, mắt nên?', ['Nhìn xuống đất', 'Nhìn theo cầu', 'Nhắm mắt', 'Nhìn người khác'], 1, 'Luôn nhìn theo cầu để phản ứng đúng vị trí và lực.'),
    Q('Khi đá cầu nhóm, mục tiêu chính là?', ['Đá cầu xa nhất', 'Phối hợp giữ cầu trên không lâu nhất', 'Đá cầu thật mạnh', 'Đẩy ngã bạn'], 1, 'Đá cầu nhóm/đồng đội: phối hợp giữ cầu lâu, hỗ trợ nhau.'),
    Q('Tư thế đứng đá cầu chuẩn là?', ['Trọng tâm thấp, hai chân hơi rộng, gối khuỵu', 'Đứng thẳng cứng', 'Ngồi xổm', 'Một chân'], 0, 'Tư thế thấp giúp di chuyển và phản ứng nhanh.'),
    Q('Cầu (quả cầu đá) thường được làm từ?', ['Gỗ ép cứng bọc da', 'Thuỷ tinh', 'Đế cao su + chùm lông vũ/nhựa', 'Nhựa cứng'], 2, 'Cầu đá: đế cao su gắn chùm lông hoặc nhựa dẻo.'),
  ]),

  M(13, 'Đá cầu — phối hợp nhóm 3 người', [
    Q('Khi đá cầu 3 người, đội hình phổ biến là?', ['Ngẫu nhiên', 'Hàng dọc', 'Tam giác', 'Hàng ngang'], 2, 'Đội hình tam giác giúp chuyền cầu thuận lợi mọi hướng.'),
    Q('Để chuyền cầu cho bạn trong nhóm, cần?', ['Đá thật mạnh', 'Đá vào mặt bạn', 'Đá nhẹ, đúng hướng, vừa tầm bạn', 'Đá ra xa'], 2, 'Chuyền chuẩn: lực vừa, hướng đúng, độ cao vừa tầm cho bạn xử lý.'),
    Q('Khi bạn lỡ cầu, em nên?', ['Khuyến khích, không trách móc', 'Tức giận', 'Bỏ chơi', 'Chế giễu'], 0, 'Tinh thần đồng đội: động viên nhau khi mắc lỗi.'),
    Q('"Chuyền cầu chéo" giữa các thành viên có lợi ích gì?', ['Làm rối', 'Giúp giữ cầu lâu trên không một chỗ', 'Đánh lừa đối phương trong thi đấu, tạo nhịp', 'Giảm tốc'], 2, 'Chuyền chéo tạo bất ngờ và đa dạng phối hợp.'),
    Q('Trong tập đá cầu nhóm, ai chịu trách nhiệm khi cầu rơi giữa hai người?', ['Người lớn tuổi hơn', 'Cả hai cùng có trách nhiệm; cần giao tiếp gọi cầu', 'Không ai', 'Người gần hơn'], 1, 'Phối hợp nhóm: cần "gọi cầu" (la to "tôi") để tránh va chạm và rơi cầu.'),
  ]),

  M(14, 'Thể dục liên hoàn — bài tay không', [
    Q('"Thể dục liên hoàn" là gì?', ['Trò chơi', 'Khởi động đơn', 'Chuỗi các động tác nối tiếp thành bài hoàn chỉnh', 'Một động tác lặp lại'], 2, 'Thể dục liên hoàn: chuỗi 8-32 động tác liền mạch (vd: 8 nhịp × N động tác).'),
    Q('Bài thể dục tay không thường gồm các nhóm động tác nào?', ['Chỉ chân', 'Tay, vặn mình, chân, lưng-bụng, toàn thân, nhảy', 'Chỉ tay', 'Không có cấu trúc'], 1, 'Cấu trúc chuẩn: tay → ngực-vai → chân → vặn mình → lưng bụng → toàn thân → nhảy → điều hoà.'),
    Q('Khi tập thể dục liên hoàn theo nhịp, điều quan trọng nhất là?', ['Bỏ qua nhịp', 'Mỗi người tự do', 'Đúng nhịp, đúng động tác, đồng đều cả nhóm', 'Càng nhanh càng tốt'], 2, 'Liên hoàn nhóm: đồng đều và đúng nhịp tạo tính thẩm mỹ và sức khoẻ.'),
    Q('Lợi ích của thể dục liên hoàn là?', ['Phát triển toàn diện, rèn nhịp điệu, ý thức tập thể', 'Chỉ rèn tay', 'Chỉ làm mệt', 'Chỉ phát triển cơ tay và cơ vai'], 0, 'Thể dục liên hoàn rèn cả thể chất, phối hợp và kỷ luật tập thể.'),
    Q('Khi quên động tác giữa bài liên hoàn, nên?', ['Cố giữ nhịp, làm theo bạn, vào lại càng sớm càng tốt', 'Dừng hẳn', 'Bỏ chạy', 'Cười lớn'], 0, 'Giữ nhịp + nhìn bạn → vào lại nhanh để bài không bị "vỡ".'),
  ]),

  M(15, 'Trò chơi vận động phối hợp', [
    Q('Trò chơi vận động giúp ích gì cho học sinh?', ['Lãng phí thời gian', 'Chỉ làm mệt', 'Rèn thể lực, phản xạ, tinh thần đồng đội, vui vẻ', 'Không có ích'], 2, 'Trò chơi vận động: học mà chơi — rèn thể lực và kỹ năng xã hội.'),
    Q('Khi tham gia trò chơi vận động, cần tuân thủ?', ['Bỏ qua luật', 'Đánh thắng mọi giá', 'Luật chơi và sự chỉ dẫn của giáo viên', 'Tự do hoàn toàn'], 2, 'Tuân thủ luật + tôn trọng đối phương là tinh thần fair-play.'),
    Q('Khi bạn cùng đội mắc lỗi, em nên?', ['Động viên, không trách móc', 'Bỏ chơi', 'La hét', 'Đổ lỗi'], 0, 'Tinh thần đồng đội: chia sẻ trách nhiệm, động viên bạn.'),
    Q('Nếu trong trò chơi xảy ra va chạm nhỏ, em nên?', ['Im lặng đi tiếp', 'Đánh lại', 'Xin lỗi nếu cần, kiểm tra bạn có sao không', 'Cãi nhau'], 2, 'Văn hoá thể thao: xin lỗi khi gây va chạm vô tình, hỏi thăm bạn.'),
    Q('Khi đội đối phương thắng, em nên?', ['Tức giận', 'Đổ lỗi trọng tài', 'Chúc mừng, học hỏi kinh nghiệm', 'Phản ứng thái quá, tranh cãi với đối thủ'], 2, 'Tinh thần fair-play: thắng không kiêu, thua không nản, học hỏi đối thủ.'),
  ]),

  M(16, 'Ôn tập giữa kỳ — kỹ thuật cơ bản', [
    Q('Khẩu lệnh xuất phát chạy ngắn là?', ['"Vào chỗ - Sẵn sàng - Chạy"', '"Đứng - ngồi - chạy"', '"Một - hai - ba"', '"Chuẩn bị - Bắt đầu"'], 0, 'Ôn tuần 2.'),
    Q('Nhảy xa gồm mấy giai đoạn chính?', ['4', '2', '1', '6'], 0, 'Ôn tuần 5.'),
    Q('Đội bóng đá tiêu chuẩn có bao nhiêu cầu thủ trên sân?', ['11', '7', '5', '9'], 0, 'Ôn tuần 7.'),
    Q('Đội bóng chuyền có bao nhiêu người trên sân?', ['7', '11', '5', '6'], 3, 'Ôn tuần 9.'),
    Q('Trong đánh đôi cầu lông, mỗi đội có?', ['1', '2', '4', '3'], 1, 'Ôn tuần 10.'),
  ]),

  M(17, 'An toàn trong tập luyện', [
    Q('Khi bị bong gân nhẹ, sơ cứu đúng cách là?', ['Xoa nóng', 'Tiếp tục tập', 'RICE: Nghỉ - Chườm đá - Băng ép - Kê cao', 'Bóp mạnh'], 2, 'RICE = Rest, Ice, Compression, Elevation — sơ cứu chuẩn cho bong gân.'),
    Q('Trang phục thể thao nên?', ['Đi chân đất', 'Giày da', 'Gọn, thoáng, giày phù hợp môn tập', 'Quần áo dài rộng'], 2, 'Trang phục thể thao: gọn, thấm hút, giày chuyên dụng cho môn.'),
    Q('Trước khi chạy/nhảy ngoài trời nắng, nên?', ['Không uống nước', 'Tập giữa trưa', 'Không cần chuẩn bị', 'Đội mũ, uống đủ nước, chọn giờ mát'], 3, 'Tránh sốc nhiệt: nắng to → mũ, nước, chọn giờ sáng/chiều mát.'),
    Q('Khi bạn cùng tập bị ngất, em nên?', ['Lay mạnh', 'Quay phim lại để xem sau', 'Tự xốc bạn dậy cho ngồi lên', 'Báo người lớn ngay, không tự ý xốc dậy'], 3, 'Báo người lớn/giáo viên ngay, để bạn nằm yên ở chỗ thoáng.'),
    Q('Uống nước khi tập đúng cách là?', ['Uống ừng ực', 'Chỉ uống khi tập xong', 'Không uống', 'Uống từng ngụm nhỏ, đều đặn'], 3, 'Uống ngụm nhỏ, đều đặn → tránh sốc, đảm bảo cơ thể đủ nước.'),
  ]),

  M(18, 'Kiểm tra cuối kỳ I — kỹ thuật', [
    Q('Sau khi qua đích chạy ngắn nên?', ['Giảm tốc dần, đi bộ', 'Ngồi bệt', 'Chạy ngược', 'Dừng đột ngột'], 0, 'Tổng hợp.'),
    Q('Chân giậm nhảy xa thường là?', ['Chân thuận', 'Hai chân', 'Chân tiếp đất khi rơi xuống hố cát', 'Chân không thuận'], 0, 'Tổng hợp.'),
    Q('Sơ cứu bong gân nhẹ dùng phương pháp?', ['Xoa nóng', 'Bóp mạnh', 'RICE', 'Tập tiếp'], 2, 'Tổng hợp.'),
    Q('Tâng cầu cơ bản dùng phần nào của bàn chân?', ['Mu chính diện', 'Má trong', 'Mũi chân', 'Gót'], 1, 'Tổng hợp.'),
    Q('Mỗi đội bóng chuyền được chạm bóng tối đa mấy lần?', ['5', '1', '7', '3'], 3, 'Tổng hợp.'),
  ]),

  // ───────────── HK2 ─────────────

  M(19, 'Chạy bền — nâng cao quãng đường', [
    Q('Để tăng dần quãng đường chạy bền, nên?', ['Tăng từ từ (10% mỗi tuần), không tăng đột ngột', 'Tuỳ hứng', 'Tăng gấp đôi mỗi tuần', 'Chỉ một quãng cố định'], 0, 'Nguyên tắc 10%: tăng cự ly không quá 10% mỗi tuần để cơ thể thích nghi an toàn.'),
    Q('Trong chạy bền, "đau xóc bụng" thường do?', ['Chạy chậm', 'Quần áo đẹp', 'Không liên quan ăn', 'Thở không đều hoặc ăn no trước khi chạy'], 3, 'Xóc bụng thường do thở nông + ăn no/uống nhiều trước khi chạy.'),
    Q('Khi đau xóc bụng đang chạy, nên?', ['Nín thở', 'Ngồi sụp xuống', 'Giảm tốc, thở sâu, ấn nhẹ chỗ đau', 'Cố chạy nhanh hơn'], 2, 'Chậm lại, thở sâu, ấn nhẹ vào chỗ đau và đi bộ vài phút.'),
    Q('Khoảng cách giữa các buổi chạy bền nên?', ['Chạy liên tục mỗi ngày', 'Có ngày nghỉ giữa các buổi', 'Càng dày buổi càng tốt', 'Cách nhau cả tuần'], 1, 'Cần ngày nghỉ để cơ phục hồi (xen kẽ vận động nhẹ).'),
    Q('Chỉ số tốt cho thấy chạy bền tiến bộ là?', ['Cùng quãng đường nhưng nhịp tim thấp hơn, ít mệt hơn', 'Không thay đổi', 'Đau hơn', 'Mệt hơn nhiều'], 0, 'Tiến bộ thể hiện qua việc cùng tải nhưng cơ thể ít gắng sức hơn.'),
  ]),

  M(20, 'Nhảy xa — toàn bài phối hợp', [
    Q('Chạy đà nhảy xa cần?', ['Chạy chậm đều', 'Chạy chậm rồi dừng trước vạch giậm', 'Chạy nhanh từ đầu', 'Tốc độ tăng dần, đến vạch là cực đại'], 3, 'Đà tăng dần, đạt tốc độ cực đại ngay trước vạch giậm.'),
    Q('Khi đà của em hay bị "lệch" vạch giậm, nên?', ['Đo lại đà bằng cách chạy thử nhiều lần', 'Bỏ qua', 'Nhảy bừa', 'Đoán đại'], 0, 'Cần đo đà chuẩn: chạy thử và đếm bước, đánh dấu điểm xuất phát đúng.'),
    Q('Trong giai đoạn trên không, để bay xa hơn nên?', ['Ưỡn thân, vung tay phối hợp', 'Quay tròn', 'Buông xuôi', 'Co người tròn'], 0, 'Kiểu "ưỡn thân" giữ thăng bằng + tay vung tạo lực phụ.'),
    Q('Khoảng cách nhảy xa được đo từ?', ['Vạch giậm đến gót chân', 'Điểm xuất phát đến điểm xa nhất', 'Vạch giậm đến điểm xa nhất', 'Vạch giậm đến điểm tiếp đất gần vạch giậm nhất'], 3, 'Đo từ vạch giậm đến vết tiếp đất GẦN vạch giậm nhất (gồm cả vết tay nếu chạm).'),
    Q('Lỗi phổ biến khi tiếp đất nhảy xa là?', ['Tiếp đất xa', 'Hai chân cùng tiếp', 'Gối khuỵu', 'Ngã ngửa về sau (gần vạch giậm) → mất khoảng cách'], 3, 'Ngã ngửa làm vết tay/mông gần vạch giậm → tính khoảng nhỏ hơn.'),
  ]),

  M(21, 'Nhảy cao — hoàn thiện kỹ thuật bước qua', [
    Q('Mức xà cần được điều chỉnh thế nào trong tập?', ['Cao ngay từ đầu', 'Cố định một mức', 'Tuỳ ý nhảy', 'Tăng dần phù hợp khả năng'], 3, 'Tăng dần theo khả năng để đảm bảo an toàn và tiến bộ.'),
    Q('Khi bị rớt xà 3 lần liên tiếp ở cùng một mức trong thi đấu, vận động viên?', ['Nhảy lại', 'Bị loại', 'Bỏ qua', 'Vẫn tiếp tục'], 1, 'Luật điền kinh: 3 lần rớt liên tiếp tại một mức xà → bị loại.'),
    Q('Để bật cao hơn, cần luyện?', ['Không tập', 'Chỉ chạy bộ', 'Sức mạnh chân (cơ đùi, mông) và kỹ thuật giậm', 'Chỉ tập tay'], 2, 'Nhảy cao đòi hỏi cơ chân + kỹ thuật giậm + nhịp đà chuẩn.'),
    Q('Sai lầm khi giậm nhảy là?', ['Giậm đúng nhịp', 'Đặt cả bàn chân và giậm muộn', 'Tốc độ đủ', 'Tư thế đúng'], 1, 'Giậm muộn / cả bàn chân → mất lực bật và độ chính xác.'),
    Q('Sau khi qua xà, để an toàn cần?', ['Tiếp bằng đầu', 'Tiếp bằng tay', 'Tiếp đất bằng đệm rơi (đệm nhảy)', 'Tiếp xuống sân cứng'], 2, 'Phải có đệm rơi (mattress) đủ dày để bảo vệ khi tiếp đất.'),
  ]),

  M(22, 'Bóng đá — kỹ thuật chuyền và sút', [
    Q('Khi chuyền bóng cho đồng đội đang chạy, nên?', ['Chuyền vào chân đứng yên của bạn', 'Chuyền sau lưng bạn', 'Đứng giữ bóng', 'Chuyền vào không gian phía trước bạn'], 3, 'Chuyền "đón đường chạy" — bóng đến đúng nơi đồng đội sẽ tới.'),
    Q('Khi đá phạt trực tiếp, người sút mong muốn gì?', ['Bóng trở lại', 'Bóng vào lưới (ghi bàn) trực tiếp', 'Bóng chạm đồng đội', 'Bóng ra ngoài'], 1, 'Đá phạt trực tiếp: cầu thủ có thể sút thẳng vào lưới ghi bàn.'),
    Q('Vị trí "thủ môn" có gì khác các vị trí khác?', ['Không được bắt bóng', 'Không khác', 'Được dùng tay trong vòng cấm địa của đội mình', 'Không được di chuyển'], 2, 'Thủ môn là cầu thủ duy nhất được phép dùng tay (trong vòng 16m50 đội nhà).'),
    Q('"Việt vị" (offside) là lỗi gì?', ['Đứng ngoài sân', 'Chuyền sai', 'Đá ra biên', 'Cầu thủ tấn công đứng gần khung thành đối phương sát hơn bóng và hậu vệ thứ 2'], 3, 'Offside: lúc bóng được chuyền, cầu thủ nhận bóng đứng "trước" cả bóng và hậu vệ áp chót đối phương.'),
    Q('Khi đối phương phạm lỗi, hành xử fair-play là?', ['Mắng chửi', 'Đánh trả', 'Bỏ trận', 'Bình tĩnh, không trả đũa, chờ trọng tài xử lý'], 3, 'Fair-play: kiềm chế, tin tưởng trọng tài, không trả đũa.'),
  ]),

  M(23, 'Bóng rổ — kỹ thuật ném rổ', [
    Q('Khi ném rổ, mắt nhìn vào?', ['Nhìn đường bay của bóng sau khi ném', 'Nhìn bảng rổ thay vì vành rổ', 'Người canh', 'Vành rổ (mục tiêu)'], 3, 'Nhìn vào vành rổ giúp tập trung và định hướng cú ném.'),
    Q('"Tay dẫn" và "tay đỡ" khi ném rổ là?', ['Cả hai cùng đẩy', 'Đập bằng đầu', 'Chỉ một tay', 'Tay thuận đẩy bóng, tay không thuận đỡ bên'], 3, 'Tay thuận là tay ném chính; tay kia chỉ đỡ phía bên để bóng cân bằng.'),
    Q('Quỹ đạo cú ném rổ tốt là?', ['Đường thẳng', 'Hình zigzag', 'Hình vòng cung cao', 'Đi xuống'], 2, 'Vòng cung cao → bóng rơi gần thẳng xuống → dễ vào rổ.'),
    Q('Khoảng cách vạch 3 điểm trong bóng rổ FIBA khoảng?', ['6.75 m', '3 m', '1 m', '15 m'], 0, 'FIBA: vạch 3 điểm khoảng 6.75m từ tâm rổ.'),
    Q('Số lần phạm lỗi cá nhân tối đa của mỗi cầu thủ trong một trận FIBA là?', ['7 lỗi', '5 lỗi', '3 lỗi', '10 lỗi'], 1, 'FIBA: 5 lỗi cá nhân là bị loại khỏi trận.'),
  ]),

  M(24, 'Bóng chuyền — phát bóng cao tay', [
    Q('Phát bóng cao tay (tennis serve) trong bóng chuyền là?', ['Đá bóng', 'Đẩy bóng nhẹ', 'Ném bóng', 'Tung bóng lên rồi đập bằng bàn tay trên đầu'], 3, 'Phát cao tay: tung bóng + đập từ trên đầu giống tennis serve.'),
    Q('Khi đập bóng tấn công, điểm tiếp xúc tốt nhất là?', ['Ngang hông', 'Trên cao điểm bật nhảy, hơi trước người', 'Sau lưng', 'Sát đất'], 1, 'Tiếp xúc bóng ở điểm cao nhất + hơi trước người → bóng đi mạnh và xuống.'),
    Q('"Chắn lưới" (block) trong bóng chuyền là?', ['Bật nhảy đưa tay qua lưới chặn cú đập đối phương', 'Phát bóng', 'Chạy lùi', 'Đỡ bóng dưới sân'], 0, 'Block: hai tay đưa qua lưới chắn đường bóng đập của đối phương.'),
    Q('Một set bóng chuyền hiện đại đấu đến bao nhiêu điểm?', ['30 điểm', '21 điểm', '25 điểm (cách 2)', '15 điểm'], 2, 'Bóng chuyền hiện đại: 25 điểm/set, phải hơn ít nhất 2 điểm.'),
    Q('Khi bóng chạm lưới rồi qua sân đối phương trong lúc đập, được tính?', ['Mất điểm', 'Lỗi chạm lưới, mất quyền giao bóng', 'Phát lại', 'Hợp lệ'], 3, 'Bóng chạm mép lưới rồi vẫn qua sân đối phương → hợp lệ.'),
  ]),

  M(25, 'Cầu lông — di chuyển và kỹ thuật phối hợp', [
    Q('Trong sân cầu lông, vị trí "trung tâm" (base) ở đâu?', ['Giữa sân, hơi lùi sau vạch giao bóng', 'Góc sân', 'Sát lưới', 'Sát cuối sân'], 0, 'Base = vị trí về giữa sân sau mỗi pha đánh để đỡ được mọi hướng.'),
    Q('Bước "bước chéo" (split step) trong cầu lông dùng để?', ['Sẵn sàng phản xạ trước cú đánh của đối thủ', 'Tấn công', 'Nghỉ ngơi', 'Phát cầu'], 0, 'Split step: bật nhẹ hai chân trước khi đối thủ đánh → phản xạ nhanh hơn.'),
    Q('Khi đối thủ đánh sâu cuối sân, em cần?', ['Tiến lên', 'Quay lưng', 'Di chuyển lùi nhanh, đánh trả từ sau', 'Đứng yên'], 2, 'Di chuyển nhanh về cuối sân để có vị trí đánh trả tốt.'),
    Q('"Bỏ nhỏ giả" (deception drop) là?', ['Đỡ cầu', 'Giả vung như đập rồi đánh nhẹ rơi sát lưới', 'Đập thật mạnh', 'Phát cầu cao'], 1, 'Đánh lừa: vung mạnh như đập nhưng kết thúc nhẹ → đối thủ đứng lùi hụt.'),
    Q('Để cầu chính xác, cần?', ['Không cần luyện', 'Tập kỹ thuật + lặp lại nhiều lần', 'Đánh nhanh', 'Đánh mạnh'], 1, 'Độ chính xác đến từ kỹ thuật chuẩn + lặp lại đủ nhiều.'),
  ]),

  M(26, 'Đá cầu — kỹ thuật đỡ và đánh cầu nâng cao', [
    Q('Đỡ cầu cao bằng đầu/ngực là kỹ thuật nâng cao trong?', ['Bóng chuyền hơi', 'Đá cầu thi đấu', 'Cầu lông', 'Bóng đá'], 1, 'Đỡ cầu bằng đầu/ngực là kỹ thuật nâng cao trong đá cầu.'),
    Q('Khi muốn chuyền cầu cho đồng đội qua đầu mình, nên?', ['Đẩy mạnh', 'Đá cầu bay vòng cung cao về phía đồng đội', 'Đá ngang', 'Đá thấp ngang'], 1, 'Chuyền cao vòng cung cho đồng đội tấn công cú quyết định.'),
    Q('Trong đá cầu thi đấu, vạch lưới cao khoảng bao nhiêu?', ['2.5 m', '3 m', '0.5 m', '1.6 m cho nam (chuẩn quốc tế)'], 3, 'Đá cầu thi đấu: lưới ~1.5-1.6m tuỳ giới tính/giải.'),
    Q('Khi cầu rơi vào ô đối phương sau cú đập, đội em được?', ['Đá lại', 'Tính điểm', 'Đổi sân', 'Mất điểm'], 1, 'Cầu rơi đúng ô đối phương = ghi điểm.'),
    Q('Để rèn phản xạ đá cầu, nên?', ['Chỉ xem', 'Tập một mình mãi', 'Không tập', 'Tập đôi/nhóm thường xuyên'], 3, 'Tập đôi/nhóm tạo tình huống đa dạng → rèn phản xạ tốt.'),
  ]),

  M(27, 'Thể dục liên hoàn — bài có dụng cụ', [
    Q('Bài thể dục với cờ/gậy/vòng có lợi ích gì?', ['Làm chậm bài', 'Chỉ phù hợp với học sinh nữ', 'Tăng tính thẩm mỹ và rèn phối hợp tay-mắt', 'Chỉ trang trí'], 2, 'Dụng cụ giúp bài đẹp hơn, rèn phối hợp mắt-tay-cơ thể.'),
    Q('Khi cầm dụng cụ tập, an toàn cần?', ['Giữ chắc, không vung ra phía bạn', 'Vung ngẫu nhiên', 'Không cần ý', 'Quăng dụng cụ'], 0, 'An toàn: cầm chắc, kiểm soát biên độ, không gây va chạm với bạn.'),
    Q('Khi tập thể dục đồng diễn (lớn), điều quan trọng nhất là?', ['Đồng đều: cùng nhịp, cùng động tác, cùng hướng', 'Mỗi người tự do', 'Mỗi người khác', 'Càng nhanh càng tốt'], 0, 'Đồng diễn cần tính đồng đều cao → tập luyện kỹ và đúng nhịp.'),
    Q('Bài thể dục liên hoàn cuối thường có phần?', ['Tăng tốc', 'Nhảy mạnh', 'Điều hoà (thả lỏng) toàn thân', 'Hét to'], 2, 'Kết bài là động tác điều hoà/thả lỏng để cơ thể bình tĩnh lại.'),
    Q('Lợi ích nổi bật của thể dục liên hoàn nhóm là?', ['Rèn tinh thần kỷ luật và đoàn kết', 'Chỉ tốn sức', 'Gây ức chế', 'Chỉ rèn riêng cơ tay và cơ chân'], 0, 'Thể dục liên hoàn nhóm rèn kỷ luật, đoàn kết, sự kiên trì.'),
  ]),

  M(28, 'Thể lực chung — bài tập tăng cường', [
    Q('Bài "plank" (chống đẩy giữ) chủ yếu rèn nhóm cơ nào?', ['Chỉ chân', 'Chỉ tay', 'Cổ tay và cẳng tay', 'Cơ lõi (bụng, lưng, mông)'], 3, 'Plank rèn core (cơ lõi) — bụng, lưng dưới, mông.'),
    Q('"Chống đẩy" (push-up) rèn nhóm cơ nào?', ['Ngực, tay sau (triceps), vai', 'Cơ đùi sau và bắp chân', 'Chỉ bụng', 'Chỉ chân'], 0, 'Push-up: ngực + triceps + vai trước + cơ lõi giữ thăng bằng.'),
    Q('Bài "squat" (ngồi xổm) rèn?', ['Cơ đùi, mông, lưng dưới', 'Cơ ngực và cơ vai', 'Bàn tay', 'Cánh tay'], 0, 'Squat là bài "vua" của tập chân: đùi trước, đùi sau, mông, core.'),
    Q('Để tập thể lực an toàn, cần?', ['Bỏ qua khởi động', 'Tư thế đúng, tăng dần khối lượng, không quá sức', 'Tập càng nặng càng tốt', 'Không cần kỹ thuật'], 1, 'Nguyên tắc: kỹ thuật trước số lượng/khối lượng; tăng dần để tránh chấn thương.'),
    Q('Sau buổi tập thể lực, cơ "mỏi nhẹ" 1-2 ngày là?', ['Cần đi viện', 'Bình thường (DOMS)', 'Phải dừng tập', 'Bất thường, nguy hiểm'], 1, 'DOMS = mỏi cơ chậm, bình thường khi tập tải mới; nghỉ + ăn uống đủ sẽ hồi.'),
  ]),

  M(29, 'Dinh dưỡng cho người tập thể thao', [
    Q('Trước khi tập thể thao 1-2 tiếng nên ăn?', ['Nhẹ, dễ tiêu (chuối, bánh mì)', 'Uống nước ngọt có ga cho nhanh tỉnh', 'Ăn no nê', 'Đồ chiên mỡ'], 0, 'Bữa trước tập: nhẹ và dễ tiêu để có năng lượng mà không nặng bụng.'),
    Q('Sau tập, cơ thể cần?', ['Chỉ uống nước có ga', 'Nhịn ăn', 'Ngủ ngay', 'Bù nước, đạm và carb để phục hồi'], 3, 'Sau tập: nước + carb + đạm trong 30-60 phút giúp phục hồi tốt.'),
    Q('Nước là thành phần chiếm bao nhiêu phần trăm cơ thể người?', ['90%', '100%', '20%', 'Khoảng 60-70%'], 3, 'Cơ thể người có ~60-70% nước → uống đủ rất quan trọng.'),
    Q('Vận động viên nên uống nước thế nào?', ['Trước - trong - sau khi tập, đủ nhu cầu', 'Chỉ trước tập', 'Chỉ khi khát', 'Càng ít càng tốt'], 0, 'Uống đều cả trước, trong, sau tập; không đợi khát mới uống.'),
    Q('Đồ uống có ga / đường cao trong khi tập có hại vì?', ['Tăng sức nhanh', 'Không ảnh hưởng', 'Khó tiêu, gây xóc bụng, làm chậm hấp thụ nước', 'Tốt cho cơ thể'], 2, 'Đường cao trong nước ngọt làm chậm tiêu hoá, có thể gây xóc bụng khi tập.'),
  ]),

  M(30, 'Trò chơi dân gian vận động', [
    Q('Trò chơi "kéo co" rèn?', ['Phản xạ', 'Khéo léo', 'Sức mạnh, tinh thần đồng đội', 'Cân bằng'], 2, 'Kéo co rèn sức kéo + sự đồng lòng của cả đội.'),
    Q('Trò "nhảy dây" rèn chủ yếu?', ['Chỉ trí nhớ', 'Chỉ tay', 'Sức bền, phối hợp tay-chân, nhịp điệu', 'Chỉ rèn cơ bắp tay'], 2, 'Nhảy dây là bài tập tim mạch + phối hợp + nhịp điệu rất tốt.'),
    Q('Trò "rồng rắn lên mây" giúp ích gì?', ['Chỉ phù hợp với trẻ mẫu giáo', 'Vận động + tinh thần tập thể + phản xạ', 'Mệt vô lý', 'Chỉ trang trí'], 1, 'Trò chơi dân gian vận động vừa rèn thể chất vừa rèn tinh thần tập thể.'),
    Q('Trò "đá cầu lá chuối/cầu lông gà" là dạng đá cầu?', ['Truyền thống dân gian', 'Của nước ngoài', 'Hiện đại', 'Không tồn tại'], 0, 'Trò đá cầu lá chuối/cầu lông gà có nguồn gốc dân gian Việt.'),
    Q('Lợi ích chung của trò chơi dân gian là?', ['Giữ gìn văn hoá + rèn thể chất + gắn kết cộng đồng', 'Lạc hậu, vô ích', 'Chỉ trẻ con chơi', 'Không cần thiết'], 0, 'Trò chơi dân gian: giá trị văn hoá + sức khoẻ + cộng đồng.'),
  ]),

  M(31, 'Bài thể dục buổi sáng', [
    Q('Tập thể dục buổi sáng có lợi ích gì?', ['Mệt cả ngày', 'Khởi động cơ thể, tỉnh táo cả ngày', 'Hại sức khoẻ', 'Chỉ phù hợp với người lớn tuổi'], 1, 'Tập buổi sáng giúp tỉnh táo, tăng trao đổi chất, năng lượng cho ngày.'),
    Q('Bài thể dục buổi sáng nên?', ['Nhẹ, đơn giản, kéo dài 10-15 phút', 'Tập đến kiệt sức', 'Nặng và lâu', 'Bỏ qua khởi động'], 0, 'Bài buổi sáng nên vừa phải để khởi động cơ thể, không gây mệt.'),
    Q('Trước khi tập thể dục buổi sáng, nên?', ['Ăn bữa sáng đầy đủ trước khi tập', 'Uống cà phê nhiều', 'Nhịn nước', 'Uống một chút nước, vệ sinh nhẹ'], 3, 'Một chút nước + vệ sinh nhẹ là đủ; không nên ăn no trước tập.'),
    Q('Buổi sáng nên ưu tiên hình thức tập nào?', ['Không tập', 'Khởi động, kéo giãn, đi bộ/chạy nhẹ', 'Thi đấu căng', 'Tập gym nặng'], 1, 'Sáng sớm: vận động nhẹ-vừa phù hợp; tập nặng nên vào chiều/tối.'),
    Q('Sau khi tập sáng, nên?', ['Đi ngủ tiếp', 'Tắm rửa sạch sẽ, ăn sáng đầy đủ', 'Tập tiếp ngay', 'Bỏ bữa sáng'], 1, 'Tắm + bữa sáng đầy đủ → khởi đầu ngày khoẻ mạnh.'),
  ]),

  M(32, 'Tinh thần fair-play trong thi đấu', [
    Q('"Fair-play" nghĩa là?', ['Bỏ trận', 'Thắng bằng mọi giá', 'Thi đấu trung thực, tôn trọng đối thủ và luật', 'Gian lận thông minh'], 2, 'Fair-play = tinh thần "chơi đẹp": trung thực, tôn trọng, đúng luật.'),
    Q('Khi đối thủ ngã, hành xử fair-play là?', ['Tiếp tục đá', 'Dừng tấn công, đỡ bạn dậy', 'Lợi dụng để ghi điểm', 'Cười nhạo'], 1, 'Văn hoá thể thao: dừng lại, đỡ đối thủ, ưu tiên sức khoẻ.'),
    Q('Khi trọng tài quyết định sai (theo cảm nhận của em), em nên?', ['Đánh trọng tài', 'Bỏ trận', 'Bình tĩnh, không phản ứng thô lỗ', 'La hét'], 2, 'Tin tưởng trọng tài; nếu không đồng ý, đội trưởng có thể trao đổi lịch sự.'),
    Q('Khi thua trận, hành vi đẹp là?', ['Bắt tay đối thủ, chúc mừng họ', 'Khóc lóc', 'Phá phách', 'Đổ lỗi'], 0, 'Văn hoá thể thao: thua không nản, vẫn bắt tay chúc mừng.'),
    Q('Tinh thần đồng đội KHÔNG bao gồm?', ['Hỗ trợ bạn', 'Tôn trọng nhau', 'Tự đề cao mình, hạ thấp bạn', 'Cùng chia sẻ vinh quang và thất bại'], 2, 'Đồng đội: tôn trọng, hỗ trợ, chia sẻ — không bao gồm tự đề cao.'),
  ]),

  M(33, 'Đo lường và đánh giá thể lực', [
    Q('Để đánh giá sức bền tim mạch, thường đo?', ['Cân nặng', 'Chiều cao nhảy', 'Quãng đường chạy được trong thời gian cố định (vd 6 phút)', 'Sức nâng tạ'], 2, 'Test sức bền tim mạch điển hình: chạy 6/12 phút (Cooper test).'),
    Q('Để đo sức mạnh cánh tay học sinh, hay dùng bài?', ['Chống đẩy (push-up) tối đa trong thời gian quy định', 'Đo cao', 'Đếm hơi thở', 'Đứng yên'], 0, 'Test sức mạnh tay: số lần chống đẩy đúng kỹ thuật trong 30-60s.'),
    Q('Để đo sức bật, bài test phổ biến là?', ['Đứng yên', 'Chạy bền', 'Hít sâu', 'Nhảy xa tại chỗ hoặc bật cao tại chỗ'], 3, 'Test sức bật: nhảy xa tại chỗ (standing long jump) hoặc bật cao (vertical jump).'),
    Q('Để đo độ dẻo, bài test cơ bản là?', ['Chạy nhanh', 'Đứng yên', 'Gập thân tới (sit and reach)', 'Chống đẩy'], 2, 'Sit and reach: gập thân về trước, đo khoảng cách tay vươn được.'),
    Q('Kết quả đo thể lực dùng để?', ['Chế giễu bạn yếu', 'Loại bạn yếu', 'Không có ý nghĩa', 'Theo dõi tiến bộ, điều chỉnh kế hoạch tập'], 3, 'Đánh giá thể lực để biết điểm yếu/mạnh và điều chỉnh kế hoạch tập luyện.'),
  ]),

  M(34, 'Thể thao và cuộc sống', [
    Q('Tập thể thao đều đặn có lợi gì cho sức khoẻ tinh thần?', ['Giảm stress, tăng tự tin, ngủ tốt hơn', 'Không liên quan', 'Hại tinh thần', 'Tăng lo âu'], 0, 'Vận động giúp cơ thể tiết endorphin → giảm stress, tăng cảm xúc tích cực.'),
    Q('Một người ít vận động dễ gặp vấn đề gì?', ['Không có vấn đề', 'Thông minh hơn', 'Béo phì, bệnh tim mạch, đái tháo đường tuýp 2', 'Khoẻ hơn'], 2, 'Lối sống ít vận động liên quan đến nhiều bệnh mãn tính.'),
    Q('Khuyến nghị thời gian vận động cho trẻ vị thành niên (WHO) là?', ['5 phút/ngày', 'Ít nhất 60 phút/ngày, vừa-mạnh', 'Không cần', '5 phút/tuần'], 1, 'WHO: trẻ 5-17 tuổi nên vận động vừa-mạnh ít nhất 60 phút mỗi ngày.'),
    Q('Khi chọn môn thể thao để theo lâu dài, nên?', ['Chọn môn người khác bắt', 'Chọn môn em yêu thích và phù hợp thể trạng', 'Không cần chọn', 'Theo trào lưu'], 1, 'Theo môn mình thích → duy trì lâu dài, hiệu quả thực sự.'),
    Q('"Thể thao học đường" có mục tiêu chính là?', ['Tìm tài năng thi đấu', 'Lãng phí thời gian', 'Phát triển toàn diện về thể chất, tinh thần và kỹ năng xã hội', 'Loại học sinh yếu'], 2, 'GDTC ở trường: phát triển toàn diện, không phải chỉ tuyển VĐV.'),
  ]),

  M(35, 'Kiểm tra cuối kỳ II — tổng hợp', [
    Q('Khi bị bong gân nhẹ, sơ cứu đúng cách là?', ['RICE', 'Tập tiếp', 'Xoa nóng', 'Bóp mạnh'], 0, 'Ôn tuần 17.'),
    Q('Nguyên tắc tăng cự ly chạy bền là?', ['Tăng gấp đôi mỗi tuần', 'Tuỳ hứng', 'Cố định', 'Tăng từ từ ~10% mỗi tuần'], 3, 'Ôn tuần 19.'),
    Q('Một set bóng chuyền hiện đại đấu đến bao nhiêu điểm?', ['30', '25 (cách 2)', '21', '15'], 1, 'Ôn tuần 24.'),
    Q('Bài "plank" rèn nhóm cơ nào chủ yếu?', ['Chỉ chân', 'Cơ cổ tay và cẳng tay', 'Chỉ tay', 'Cơ lõi (bụng-lưng-mông)'], 3, 'Ôn tuần 28.'),
    Q('Fair-play nghĩa là?', ['Thắng bằng mọi giá', 'Gian lận', 'Bỏ trận', 'Thi đấu trung thực, tôn trọng đối thủ'], 3, 'Ôn tuần 32.'),
  ]),
];

export const S7GDTC_SCENARIOS = indexBy(S7GDTC_WEEKS);
