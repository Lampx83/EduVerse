// ============================================================
// Lớp 9 · GIÁO DỤC THỂ CHẤT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn GDTC Lớp 9: chạy bền, đá cầu, cầu lông, bóng chuyền, bóng rổ, bóng đá, võ thuật, bơi.
// 4–5 câu/tuần · ID prefix: "S9GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9GDTC', 'gdtc', n, title, qs, opts);

export const S9GDTC_WEEKS = [
  // ───── HK1 ─────
  M(1, 'Khởi động và an toàn thể thao', [
    Q('Mục đích khởi động?', ['Làm nóng cơ thể, tránh chấn thương', 'Mệt thêm', 'Tốn thời gian', 'Không cần'], 0, 'Khởi động giúp tăng nhiệt cơ và linh hoạt khớp.'),
    Q('Thời gian khởi động tối thiểu?', ['5–10 phút', '30 giây', '1 phút', 'Không cần'], 0, '5–10 phút khởi động là khuyến nghị.'),
    Q('Sau khi tập, cần?', ['Thả lỏng, giãn cơ, hồi phục', 'Dừng đột ngột', 'Tắm nước lạnh ngay', 'Ăn ngay'], 0, 'Cool-down giúp hồi phục tốt hơn.'),
    Q('Khi bị chấn thương, nên?', ['Dừng tập, sơ cứu, báo người lớn/y tế', 'Cố gắng tập', 'Im lặng', 'Tự xử'], 0, 'An toàn là trên hết.'),
  ]),

  M(2, 'Chạy bền — Kỹ thuật chạy 800m–1500m', [
    Q('Chạy bền đòi hỏi?', ['Sức bền tim mạch + nhịp thở đều', 'Sức mạnh tối đa', 'Tốc độ tối đa', 'Linh hoạt'], 0, 'Chạy bền dựa trên sức bền aerobic.'),
    Q('Cự ly 800m thuộc?', ['Chạy bền cự ly trung bình', 'Sprint', 'Marathon', 'Đi bộ'], 0, '800m là cự ly trung bình.'),
    Q('Nhịp thở khi chạy bền?', ['Đều đặn, hít sâu thở ra dài', 'Nín thở', 'Thở gấp', 'Tuỳ ý'], 0, 'Thở đều và sâu cung cấp oxy cho cơ.'),
    Q('Khi chạy bị xóc bụng?', ['Giảm tốc, thở chậm sâu, ấn vùng đau', 'Dừng đột ngột', 'Tăng tốc', 'Mặc kệ'], 0, 'Giảm tốc và điều hoà hô hấp.'),
    Q('Tư thế chạy bền đúng?', ['Thân hơi nghiêng trước, vai thả lỏng, tay vung tự nhiên', 'Ngả ra sau', 'Vai gồng', 'Tay khoanh'], 0, 'Tư thế thoải mái + tiết kiệm năng lượng.'),
  ]),

  M(3, 'Chạy bền — Bài tập sức bền', [
    Q('Phương pháp tập sức bền?', ['Chạy liên tục đều tốc, chạy biến tốc, chạy interval', 'Chỉ sprint', 'Không tập', 'Tuỳ ý'], 0, 'Nhiều phương pháp tập sức bền hiệu quả.'),
    Q('Interval training là?', ['Xen kẽ chạy nhanh – chậm', 'Chạy đều', 'Đi bộ', 'Dừng nghỉ'], 0, 'Interval tăng VO₂max hiệu quả.'),
    Q('Tần suất tập bền/tuần?', ['3–5 buổi', '1 buổi', '7 buổi liên tục', 'Không cần'], 0, '3–5 buổi/tuần là khuyến nghị.'),
    Q('Để tiến bộ, cần?', ['Tăng dần cự ly hoặc tốc độ theo nguyên tắc tăng tiến', 'Đột ngột', 'Không thay đổi', 'Tuỳ ý'], 0, 'Nguyên tắc progressive overload.'),
  ]),

  M(4, 'Đá cầu — Kỹ thuật cơ bản', [
    Q('Đá cầu nguồn gốc?', ['Việt Nam, Trung Quốc, Đông Á', 'Châu Âu', 'Châu Mỹ', 'Châu Phi'], 0, 'Đá cầu phổ biến ở Đông Á, đặc biệt VN.'),
    Q('Kỹ thuật đá cầu cơ bản?', ['Đá mu bàn chân, đá má trong, đá má ngoài', 'Đá gót', 'Đá gối', 'Đá hông'], 0, '3 kỹ thuật cơ bản theo phần chân tiếp xúc.'),
    Q('Sân đá cầu đơn?', ['Dài 11,88m × rộng 6,1m', 'Sân tennis', 'Sân bóng đá', 'Sân tennis'], 0, 'Sân đá cầu chính thức 11,88 × 6,1m.'),
    Q('Chiều cao lưới đá cầu (nam)?', ['1,5m', '1m', '2m', '2,5m'], 0, 'Lưới nam 1,5m; nữ 1,4m.'),
    Q('Khi đá cầu, mắt nhìn?', ['Theo dõi cầu liên tục', 'Nhìn chân', 'Nhìn người khác', 'Tuỳ ý'], 0, 'Mắt theo cầu để phán đoán điểm rơi.'),
  ]),

  M(5, 'Đá cầu — Thi đấu đơn', [
    Q('Phát cầu đầu trận?', ['Bốc thăm chọn bên hoặc quyền phát', 'Tự chọn', 'Đối phương quyết', 'Trọng tài quyết'], 0, 'Bốc thăm theo luật quốc tế.'),
    Q('Một set thi đấu đơn?', ['21 điểm, chênh 2 điểm', '10 điểm', '15 điểm', '25 điểm'], 0, 'Đá cầu hiện đại: 21 điểm/set, chênh 2.'),
    Q('Lỗi khi nhận cầu?', ['Để cầu chạm đất, ra ngoài, chạm 2 lần', 'Đá trả qua lưới', 'Lùi sau', 'Tránh'], 0, 'Cầu chạm đất là mất điểm.'),
    Q('Chiến thuật đơn?', ['Phán đoán + tốc độ + sức bền', 'Chỉ sức mạnh', 'Chỉ tốc độ', 'Tuỳ ý'], 0, 'Đá cầu đơn cần tổng hợp nhiều yếu tố.'),
  ]),

  M(6, 'Đá cầu — Thi đấu đôi', [
    Q('Đá cầu đôi cần?', ['Phối hợp đồng đội, vị trí, hỗ trợ', 'Solo', 'Tự chơi', 'Không hợp tác'], 0, 'Đôi đòi hỏi phối hợp ăn ý.'),
    Q('Vị trí đứng đôi?', ['Trước-sau hoặc trái-phải tuỳ chiến thuật', 'Cùng vị trí', 'Tuỳ ý', 'Không sắp xếp'], 0, '2 chiến thuật vị trí phổ biến.'),
    Q('Khi cầu sang sân nhà, ai đá?', ['Người gần cầu hơn, đồng đội yểm trợ', 'Cả hai cùng đá', 'Không ai đá', 'Tuỳ ý'], 0, 'Phân công rõ tránh va chạm.'),
    Q('Giao tiếp trong trận?', ['Gọi tên, ra hiệu, động viên', 'Im lặng', 'Cãi nhau', 'Tuỳ ý'], 0, 'Giao tiếp giúp phối hợp tốt.'),
  ]),

  M(7, 'Cầu lông — Kỹ thuật đôi nâng cao', [
    Q('Cầu lông đôi vị trí?', ['Trước-sau khi tấn công, ngang khi phòng thủ', 'Cố định', 'Tuỳ ý', 'Cùng đứng sau'], 0, 'Đội hình cầu lông đôi linh hoạt theo tình huống.'),
    Q('Tấn công cầu lông đôi?', ['Đập cầu mạnh + người trên lưới chặn', 'Chỉ phòng thủ', 'Đẩy bóng cao', 'Tuỳ ý'], 0, 'Tấn công đập + chặn trên lưới hiệu quả.'),
    Q('Cú smash hiệu quả khi?', ['Cầu ở trên cao, đối phương ở xa', 'Cầu sát đất', 'Đối phương sát', 'Tuỳ ý'], 0, 'Smash tốt nhất khi cầu cao + đối thủ xa.'),
    Q('Cú net (cầu sát lưới)?', ['Dùng cổ tay khéo léo, đưa cầu sát lưới', 'Đập mạnh', 'Cuốn cao', 'Tuỳ ý'], 0, 'Net play đòi hỏi kỹ thuật cổ tay.'),
    Q('Sân cầu lông đôi rộng?', ['6,1m × 13,4m', '5,18m × 13,4m', '6 × 12m', '5 × 11m'], 0, 'Sân đôi rộng hơn sân đơn (6,1 vs 5,18m).'),
  ]),

  M(8, 'Bóng chuyền — Đập bóng', [
    Q('Đập bóng (smash/spike) là?', ['Tấn công mạnh từ trên cao xuống sân đối phương', 'Phòng thủ', 'Chuyền', 'Phát'], 0, 'Spike là cú tấn công chính trong bóng chuyền.'),
    Q('Kỹ thuật đập bóng đúng?', ['Lấy đà, nhảy cao, vung tay đập trên đỉnh đầu', 'Đập sát ngực', 'Không nhảy', 'Đập 2 tay'], 0, 'Đập 1 tay từ trên đỉnh đầu sau khi nhảy.'),
    Q('Điểm tiếp xúc bóng?', ['Cao nhất có thể trong tầm vói', 'Ngang vai', 'Ngang ngực', 'Bất kỳ'], 0, 'Tiếp xúc cao = góc đập tốt.'),
    Q('Lực đập từ?', ['Toàn thân: chân – hông – tay', 'Chỉ tay', 'Chỉ chân', 'Chỉ vai'], 0, 'Lực đập là chuỗi động học toàn thân.'),
    Q('Sau khi đập, tiếp đất?', ['2 chân, đầu gối hơi gập để giảm chấn', '1 chân', 'Cứng chân', 'Tuỳ ý'], 0, 'Tiếp đất 2 chân + chùng gối tránh chấn thương.'),
  ]),

  M(9, 'Bóng chuyền — Chắn lưới (block)', [
    Q('Chắn lưới (block) là?', ['Đỡ cú đập đối phương ngay tại lưới', 'Tấn công', 'Chuyền', 'Phát'], 0, 'Block là kỹ thuật phòng thủ tại lưới.'),
    Q('Vị trí chắn lưới?', ['Hàng trên (3 vị trí trước)', 'Hàng dưới', 'Tuỳ ý', 'Sân giữa'], 0, 'Chỉ vị trí hàng trên được chắn lưới.'),
    Q('Khi chắn?', ['Nhảy thẳng, 2 tay vươn cao qua lưới', 'Nhảy chéo', '1 tay', 'Không nhảy'], 0, '2 tay vươn cao + nhảy thẳng đứng.'),
    Q('Chắn 2 người gọi là?', ['Double block', 'Single block', 'Triple block', 'Solo'], 0, 'Double block hiệu quả hơn single.'),
    Q('Lỗi chạm lưới?', ['Mất điểm cho đối phương', 'Không sao', 'Cảnh cáo', 'Tuỳ trọng tài'], 0, 'Chạm lưới là lỗi mất điểm trực tiếp.'),
  ]),

  M(10, 'Bóng rổ — Ném 3 điểm', [
    Q('Vạch 3 điểm cách rổ?', ['6,75m (FIBA) hoặc 7,24m (NBA)', '4m', '5m', '10m'], 0, 'FIBA 6,75m; NBA 7,24m.'),
    Q('Tư thế ném 3 điểm?', ['Chân rộng bằng vai, đầu gối chùng, hai tay đỡ bóng, mắt nhìn rổ', 'Đứng thẳng', 'Quỳ', 'Tuỳ ý'], 0, 'BEEF: Balance, Eyes, Elbow, Follow-through.'),
    Q('Khi ném, lực từ?', ['Chân – thân – tay phối hợp', 'Chỉ tay', 'Chỉ chân', 'Chỉ vai'], 0, 'Cả thân thể tham gia ném 3 điểm.'),
    Q('Bóng ra khỏi tay với?', ['Spin (xoáy) ngược', 'Không xoay', 'Xoay xuôi', 'Tuỳ ý'], 0, 'Backspin giúp bóng ổn định và "bounce in" khi chạm vành.'),
    Q('Để giỏi ném 3 điểm, cần?', ['Tập đều, đúng kỹ thuật, kiên trì', 'May mắn', 'Tự nhiên', 'Không tập'], 0, 'Lặp lại đúng kỹ thuật là chìa khoá.'),
  ]),

  M(11, 'Bóng rổ — Phòng thủ và tấn công', [
    Q('Phòng thủ kèm người (man-to-man)?', ['Mỗi cầu thủ kèm 1 đối thủ cố định', 'Khu vực', 'Hỗn hợp', 'Tuỳ ý'], 0, 'Man-to-man là kèm chặt 1-1.'),
    Q('Phòng thủ khu vực (zone)?', ['Mỗi cầu thủ phòng thủ 1 khu vực sân', 'Kèm 1-1', 'Tuỳ ý', 'Không phòng thủ'], 0, 'Zone defense phân chia khu vực sân.'),
    Q('Pick and roll là?', ['Chiến thuật chắn + lăn tới rổ', 'Phòng thủ', 'Phát bóng', 'Ném 3'], 0, 'Pick and roll là chiến thuật tấn công kinh điển.'),
    Q('Lỗi cá nhân khi?', ['Phạm lỗi với đối thủ (đẩy, chặn không hợp lệ...)', 'Đánh đầu', 'Ném tốt', 'Phòng thủ tốt'], 0, 'Personal foul khi phạm luật với đối thủ.'),
  ]),

  M(12, 'Bóng đá — Sút phạt', [
    Q('Đá phạt trực tiếp do?', ['Phạm lỗi cấm hoặc handball trong vòng', 'Tự chọn', 'Tuỳ ý', 'Không có'], 0, 'Đá phạt trực tiếp khi có lỗi nghiêm trọng.'),
    Q('Hàng rào cách bóng?', ['Tối thiểu 9,15m (10 yards)', '5m', '15m', '20m'], 0, '9,15m là luật FIFA.'),
    Q('Kỹ thuật đá phạt cong?', ['Dùng mu trong bàn chân, đá lệch tâm bóng', 'Mũi giày', 'Gót', 'Tuỳ ý'], 0, 'Mu trong + đá lệch tâm tạo độ xoáy cong.'),
    Q('Đá phạt 11m (penalty)?', ['Đá phạt trực tiếp tại chấm 11m, không hàng rào', 'Có hàng rào', 'Tuỳ chọn', '20m'], 0, 'Penalty kick tại 11m, chỉ thủ môn cản.'),
    Q('Khi đá phạt, mắt nhìn?', ['Nhìn bóng + định hướng đích trước, không nhìn thủ môn', 'Nhìn thủ môn', 'Nhìn lung tung', 'Nhắm mắt'], 0, 'Định hướng trước, tập trung vào bóng khi đá.'),
  ]),

  M(13, 'Bóng đá — Phòng thủ và tấn công cơ bản', [
    Q('Phòng thủ cá nhân tốt khi?', ['Bám sát, chặn đường chuyền, lấy bóng đúng lúc', 'Đứng xa', 'Mặc kệ', 'Tuỳ ý'], 0, 'Phòng thủ chủ động.'),
    Q('Phối hợp tấn công cơ bản?', ['Chuyền – chạy chỗ – mở khoảng trống', 'Ôm bóng', 'Đá xa', 'Tuỳ ý'], 0, 'Bóng đá hiện đại tập trung phối hợp.'),
    Q('Việt vị xảy ra khi?', ['Cầu thủ tấn công đứng dưới hậu vệ cuối khi bóng được chuyền', 'Tuỳ ý', 'Trong vòng cấm', 'Tại trung lộ'], 0, 'Luật việt vị bảo vệ tính công bằng.'),
    Q('Thẻ vàng có nghĩa?', ['Cảnh cáo', 'Truất quyền', 'Phạt tiền', 'Đổi cầu thủ'], 0, 'Thẻ vàng cảnh cáo; 2 vàng = đỏ = truất.'),
  ]),

  M(14, 'Ôn tập + Kiểm tra giữa HK1', [
    Q('Khởi động trước tập có ý nghĩa?', ['Tránh chấn thương, tăng hiệu quả', 'Tốn sức', 'Không cần', 'Tuỳ ý'], 0, 'Khởi động bắt buộc trước khi tập.'),
    Q('Chạy bền cần?', ['Sức bền + nhịp thở đều', 'Tốc độ tối đa', 'Sức mạnh tối đa', 'Linh hoạt tối đa'], 0, 'Aerobic endurance là then chốt.'),
    Q('Đá cầu cú nào cơ bản?', ['Mu bàn chân + má trong + má ngoài', 'Đá gối', 'Đá đầu', 'Đá hông'], 0, '3 kỹ thuật cơ bản.'),
    Q('Bóng chuyền — đập bóng cần?', ['Nhảy cao + vung tay từ trên đỉnh đầu', 'Đập sát đất', 'Không nhảy', 'Tuỳ ý'], 0, 'Đập bóng tốt = nhảy cao + tiếp xúc trên đỉnh.'),
    Q('Bóng rổ — ném 3 điểm cách rổ?', ['6,75m (FIBA)', '4m', '10m', '20m'], 0, '6,75m theo FIBA.'),
  ]),

  M(15, 'Võ thuật — Vovinam giới thiệu', [
    Q('Vovinam – Việt Võ Đạo có nguồn gốc?', ['Việt Nam, sáng tổ Nguyễn Lộc, 1938', 'Trung Quốc', 'Nhật Bản', 'Hàn Quốc'], 0, 'Vovinam do Nguyễn Lộc sáng lập tại Hà Nội 1938.'),
    Q('Đặc trưng kỹ thuật Vovinam?', ['Đòn chân tấn công + đòn tay phối hợp + đòn vật, khoá', 'Chỉ đấm', 'Chỉ đá', 'Chỉ vật'], 0, 'Vovinam toàn diện: tay + chân + vật + khoá.'),
    Q('Tinh thần Vovinam?', ['Cương nhu phối triển, võ đạo dân tộc', 'Cứng nhắc', 'Chỉ tự vệ', 'Tuỳ ý'], 0, '"Cương nhu phối triển" là triết lý Vovinam.'),
    Q('Lễ tiết khi luyện tập?', ['Chào sư, chào đồng môn, lễ phép', 'Tuỳ ý', 'Không cần', 'Sau buổi'], 0, 'Võ đạo coi trọng lễ tiết.'),
  ]),

  M(16, 'Võ thuật — Vovinam bài quyền nhập môn', [
    Q('Bài quyền nhập môn Vovinam?', ['Nhập môn quyền', 'Long hổ quyền', 'Tứ trụ quyền', 'Thái cực'], 0, 'Nhập môn quyền dành cho người mới.'),
    Q('Bài quyền luyện?', ['Tư thế cơ bản, tấn pháp, đòn tay-chân, di chuyển', 'Chỉ đá', 'Chỉ đấm', 'Chỉ đứng'], 0, 'Quyền là chuỗi kỹ thuật cơ bản tổng hợp.'),
    Q('Tấn pháp cơ bản?', ['Trung bình tấn, đinh tấn, hạc tấn, quỳ tấn', 'Đứng thẳng', 'Tuỳ ý', 'Không có'], 0, 'Tấn pháp là nền tảng võ thuật.'),
    Q('Khi tập quyền cần?', ['Tập trung, chính xác, có lực và nhịp', 'Tuỳ ý', 'Cẩu thả', 'Nhanh'], 0, 'Quyền cần kết hợp chính xác + lực + nhịp.'),
  ]),

  M(17, 'Võ thuật — Karatedo', [
    Q('Karatedo nguồn gốc?', ['Okinawa, Nhật Bản', 'Trung Quốc', 'Hàn Quốc', 'Việt Nam'], 0, 'Karatedo phát triển từ Okinawa, Nhật Bản.'),
    Q('Karatedo nghĩa là?', ['Không thủ đạo — dùng tay không', 'Có vũ khí', 'Vật', 'Đấu kiếm'], 0, 'Kara = không, te = tay, do = đạo.'),
    Q('Kỹ thuật Karatedo gồm?', ['Tsuki (đấm), Keri (đá), Uke (đỡ), Kata (quyền)', 'Chỉ đấm', 'Chỉ đá', 'Chỉ vật'], 0, '4 nhóm kỹ thuật cơ bản.'),
    Q('Đai cao nhất Karatedo?', ['Đai đen (kuro-obi) với nhiều đẳng (dan)', 'Đai trắng', 'Đai vàng', 'Đai đỏ'], 0, 'Đai đen có nhiều đẳng (1–10 dan).'),
    Q('Tinh thần Karatedo?', ['Karate ni sente nashi — Karate không đánh trước', 'Tấn công trước', 'Hung hăng', 'Tuỳ ý'], 0, 'Tinh thần phòng thủ và tự kiềm chế.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Chạy bền + thở đều giúp?', ['Tăng sức bền tim mạch', 'Giảm sức bền', 'Không tác dụng', 'Tốn sức'], 0, 'Chạy bền cải thiện hệ tim mạch.'),
    Q('Bóng chuyền — chắn lưới (block)?', ['Hàng trên, nhảy thẳng, 2 tay qua lưới', 'Hàng dưới', '1 tay', 'Không nhảy'], 0, 'Block kỹ thuật phòng thủ tại lưới.'),
    Q('Ném 3 điểm dùng nguyên tắc?', ['BEEF', 'ABC', 'XYZ', 'POP'], 0, 'BEEF: Balance, Eyes, Elbow, Follow-through.'),
    Q('Vovinam triết lý?', ['Cương nhu phối triển', 'Cương luôn', 'Nhu luôn', 'Tuỳ ý'], 0, '"Cương nhu phối triển" là triết lý cốt lõi.'),
    Q('Karatedo — Karate ni sente nashi?', ['Không đánh trước', 'Đánh trước', 'Tuỳ ý', 'Phản công'], 0, 'Tinh thần tự kiềm chế và phòng thủ.'),
  ]),

  // ───── HK2 ─────
  M(19, 'Bơi sải — Kỹ thuật cơ bản', [
    Q('Bơi sải (freestyle) là?', ['Kiểu bơi nhanh nhất, vung tay luân phiên trên đầu', 'Bơi ếch', 'Bơi ngửa', 'Bơi bướm'], 0, 'Freestyle = front crawl, nhanh nhất.'),
    Q('Hô hấp khi bơi sải?', ['Quay đầu sang ngang, hít vào khi tay vung qua đầu', 'Ngẩng đầu', 'Nín thở', 'Tuỳ ý'], 0, 'Quay đầu hít vào kỹ thuật chuẩn.'),
    Q('Đạp chân bơi sải?', ['Đập chân nhanh, đầu gối hơi gập, gối-cổ chân thả lỏng', 'Đạp mạnh chậm', 'Không đạp', 'Tuỳ ý'], 0, 'Flutter kick nhanh đều.'),
    Q('Tư thế thân?', ['Thẳng, sát mặt nước, không nhô lên cao', 'Cong', 'Ngẩng cao', 'Sâu'], 0, 'Tư thế ngang tiết kiệm năng lượng.'),
  ]),

  M(20, 'Bơi ếch — Kỹ thuật cơ bản', [
    Q('Bơi ếch (breaststroke) đặc trưng?', ['2 tay ra trước rồi đẩy ra ngoài, chân đạp ếch', 'Tay luân phiên', 'Chân vẫy', 'Tuỳ ý'], 0, 'Breaststroke: 2 tay đối xứng + chân đạp ếch.'),
    Q('Đạp chân ếch?', ['Co gối + xoay bàn chân ra ngoài + đạp về sau', 'Đập chân', 'Không đạp', 'Tuỳ ý'], 0, 'Frog kick là kỹ thuật riêng.'),
    Q('Hô hấp khi bơi ếch?', ['Hít vào khi đầu nâng lên thì kéo tay', 'Hít sâu', 'Nín thở', 'Tuỳ ý'], 0, 'Đồng bộ hô hấp + động tác tay.'),
    Q('Bơi ếch chậm hơn sải vì?', ['Có pha trượt + đối xứng', 'Khó hơn', 'Tốn sức hơn', 'Không có lý do'], 0, 'Pha trượt làm bơi ếch chậm hơn.'),
  ]),

  M(21, 'An toàn dưới nước', [
    Q('Trước khi xuống nước?', ['Khởi động kỹ, kiểm tra sức khoẻ, không ăn quá no', 'Cứ nhảy', 'Ăn no', 'Tuỳ ý'], 0, 'An toàn xuống nước là quy tắc tiên quyết.'),
    Q('Khi bị chuột rút dưới nước?', ['Bình tĩnh, kéo bóp cơ, nổi lên kêu cứu', 'Hoảng loạn', 'Quẫy mạnh', 'Lặn sâu'], 0, 'Chuột rút cần bình tĩnh xử lý.'),
    Q('Cứu người đuối nước?', ['Gọi cứu hộ, ném vật nổi, không tự lao xuống nếu không biết bơi', 'Nhảy ngay', 'Mặc kệ', 'Quay phim'], 0, 'Tự bảo vệ trước khi cứu người khác.'),
    Q('Bể bơi an toàn cần?', ['Có cứu hộ, độ sâu rõ ràng, vệ sinh', 'Không cứu hộ', 'Tuỳ ý', 'Quan trọng nông'], 0, 'Bể bơi tiêu chuẩn cần cứu hộ.'),
  ]),

  M(22, 'Đá cầu — Thi đấu nâng cao', [
    Q('Cú đá tấn công mạnh?', ['Đá quét hoặc đá mu cao + xa', 'Đá nhẹ', 'Đá thấp', 'Tuỳ ý'], 0, 'Đá tấn công cần lực + chính xác.'),
    Q('Cú đỡ cầu phòng thủ?', ['Đá nhẹ + hướng lên cao để có thời gian phản ứng', 'Đập mạnh ngay', 'Bỏ qua', 'Tuỳ ý'], 0, 'Đỡ cao tạo thời gian phòng thủ.'),
    Q('Chiến thuật trong trận đôi?', ['Phân vai tấn công + phòng thủ rõ ràng', 'Cùng làm 1 việc', 'Tuỳ ý', 'Không chiến thuật'], 0, 'Phối hợp đôi cần phân vai rõ.'),
    Q('Sự kiện đá cầu lớn?', ['SEA Games, Giải đá cầu thế giới', 'World Cup', 'Wimbledon', 'NBA'], 0, 'Đá cầu là môn thi đấu tại SEA Games.'),
  ]),

  M(23, 'Cầu lông — Chiến thuật đôi', [
    Q('Tấn công đôi tối ưu khi?', ['Đối thủ ở thế phòng thủ, cầu cao gần lưới', 'Cầu thấp', 'Đối thủ tấn công', 'Tuỳ ý'], 0, 'Chọn thời điểm tấn công thông minh.'),
    Q('Phòng thủ đôi?', ['Đứng ngang, hai người chia đôi sân', 'Trước-sau', 'Tuỳ ý', 'Cùng vị trí'], 0, 'Đội hình ngang khi phòng thủ.'),
    Q('Cú smash + drop nâng cao?', ['Đập rồi giả vờ smash → drop bất ngờ', 'Chỉ smash', 'Chỉ drop', 'Tuỳ ý'], 0, 'Đánh lừa đối thủ bằng deception.'),
    Q('Sự kiện cầu lông VN?', ['Vietnam Open, SEA Games, ASIAD', 'World Cup bóng đá', 'Olympic chỉ vàng', 'Tuỳ ý'], 0, 'Vietnam Open là giải BWF tổ chức tại VN.'),
  ]),

  M(24, 'Bóng chuyền — Phối hợp đội', [
    Q('Vị trí libero?', ['Chuyên phòng thủ, không được phát + tấn công trên lưới', 'Tấn công', 'Phát bóng', 'Tuỳ ý'], 0, 'Libero chuyên đỡ bóng, mặc áo khác màu.'),
    Q('Setter (chuyền 2) làm?', ['Chuyền bóng tới attacker để tấn công', 'Đập', 'Phát', 'Chắn'], 0, 'Setter là "nhạc trưởng" tấn công.'),
    Q('Số người mỗi đội?', ['6 trên sân', '5', '7', '4'], 0, 'Bóng chuyền 6 người/sân.'),
    Q('Cú phát mạnh phổ biến?', ['Phát đập (jump serve)', 'Phát tay dưới', 'Phát đẩy', 'Tuỳ ý'], 0, 'Jump serve là cú phát mạnh phổ biến.'),
    Q('Set bóng chuyền tới?', ['25 điểm, chênh 2 (set 5 đến 15)', '21 điểm', '15 điểm', '30 điểm'], 0, '25 điểm theo luật FIVB.'),
  ]),

  M(25, 'Bóng rổ — Thi đấu', [
    Q('Bóng rổ một đội bao nhiêu người trên sân?', ['5', '6', '4', '7'], 0, 'Bóng rổ 5 người/sân.'),
    Q('Một trận chia mấy hiệp?', ['4 hiệp × 10 phút (FIBA)', '2 hiệp', '3 hiệp', '5 hiệp'], 0, 'FIBA: 4 × 10 phút; NBA: 4 × 12.'),
    Q('Điểm 1, 2, 3 từ?', ['Ném phạt (1), trong vạch 3 (2), ngoài vạch 3 (3)', 'Tuỳ ý', 'Chỉ 2', 'Chỉ 3'], 0, 'Quy tắc tính điểm rõ ràng.'),
    Q('5 lỗi cá nhân?', ['Bị truất quyền thi đấu (NCAA/FIBA)', 'Không sao', 'Cảnh cáo', 'Phạt tiền'], 0, '5 lỗi = bị truất (NBA là 6 lỗi).'),
  ]),

  M(26, 'Bóng đá — Thi đấu chiến thuật', [
    Q('Đội hình phổ biến?', ['4-4-2, 4-3-3, 3-5-2', 'Chỉ 4-4-2', '2-2-6', 'Tuỳ ý'], 0, 'Nhiều đội hình theo chiến thuật.'),
    Q('Số người mỗi đội (11 người)?', ['11 trên sân kể thủ môn', '10', '9', '12'], 0, 'Bóng đá 11 người/sân.'),
    Q('Thời gian trận đấu chuẩn?', ['90 phút (2 hiệp × 45)', '60 phút', '120 phút', '70 phút'], 0, '90 phút chính thức + bù giờ.'),
    Q('Khi hoà ở loại trực tiếp?', ['Hiệp phụ + sút penalty nếu vẫn hoà', 'Đá lại', 'Tung đồng xu', 'Tuỳ ý'], 0, 'Quy trình giải quyết hoà rõ ràng.'),
  ]),

  M(27, 'Thể chất — Sức mạnh và linh hoạt', [
    Q('Tập sức mạnh dùng?', ['Tạ, bodyweight (chống đẩy, gập bụng)', 'Chỉ chạy', 'Chỉ kéo dãn', 'Tuỳ ý'], 0, 'Sức mạnh tập với tạ hoặc trọng lượng cơ thể.'),
    Q('Tập linh hoạt?', ['Giãn cơ tĩnh + động, yoga, pilates', 'Chạy', 'Tạ', 'Tuỳ ý'], 0, 'Stretching tăng linh hoạt.'),
    Q('Nguyên tắc tập luyện?', ['Khởi động – tập – thả lỏng, tăng tiến dần', 'Đột ngột', 'Quá sức', 'Tuỳ ý'], 0, 'Quy trình tập an toàn.'),
    Q('Hồi phục cần?', ['Ngủ đủ, dinh dưỡng, nước', 'Tập liên tục', 'Bỏ ăn', 'Tuỳ ý'], 0, 'Hồi phục quan trọng như tập luyện.'),
  ]),

  M(28, 'Dinh dưỡng cho người tập thể thao', [
    Q('Carbohydrate cung cấp?', ['Năng lượng chính cho cơ thể', 'Cơ', 'Xương', 'Vitamin'], 0, 'Carb là nguồn năng lượng chính.'),
    Q('Protein cần cho?', ['Xây và phục hồi cơ', 'Năng lượng', 'Xương', 'Vitamin'], 0, 'Protein xây cơ.'),
    Q('Trước tập 1 giờ nên?', ['Ăn nhẹ, dễ tiêu (chuối, bánh mì)', 'Ăn no', 'Bỏ ăn', 'Tuỳ ý'], 0, 'Ăn nhẹ trước tập 1 giờ giúp duy trì năng lượng.'),
    Q('Uống nước khi tập?', ['Uống đều, từng ngụm nhỏ', 'Một lần nhiều', 'Không uống', 'Tuỳ ý'], 0, 'Hydration đều giúp tránh mất nước.'),
    Q('Sau tập nên ăn?', ['Carb + protein trong 30–60 phút (cửa sổ vàng)', 'Bỏ ăn', 'Chỉ rau', 'Tuỳ ý'], 0, 'Anabolic window giúp hồi phục cơ.'),
  ]),

  M(29, 'Bệnh và chấn thương — Phòng tránh', [
    Q('Chấn thương phổ biến khi tập?', ['Bong gân, căng cơ, trật khớp', 'Cảm cúm', 'Đau bụng', 'Tuỳ ý'], 0, 'Chấn thương cơ-khớp phổ biến trong thể thao.'),
    Q('Sơ cứu RICE?', ['Rest, Ice, Compression, Elevation', 'Run, Ice, Cry, Eat', 'Rest, Iron, Care, Exercise', 'Tuỳ ý'], 0, 'RICE là quy trình sơ cứu cơ bản.'),
    Q('Để tránh chấn thương?', ['Khởi động, đúng kỹ thuật, không quá sức', 'Tập nhiều', 'Bỏ khởi động', 'Tuỳ ý'], 0, 'Phòng > chữa.'),
    Q('Khi chấn thương nặng?', ['Đến cơ sở y tế ngay', 'Tự xử', 'Đợi tự khỏi', 'Tuỳ ý'], 0, 'Chấn thương nặng cần y tế chuyên môn.'),
  ]),

  M(30, 'Đạo đức trong thể thao', [
    Q('Fair play (chơi đẹp) là?', ['Trung thực, tôn trọng luật, đối thủ, trọng tài', 'Gian lận', 'Khiêu khích', 'Phạm lỗi cố ý'], 0, 'Fair play là tinh thần thể thao cao đẹp.'),
    Q('Doping (dùng chất cấm) là?', ['Vi phạm đạo đức + luật thể thao', 'Tốt', 'Tuỳ ý', 'Khôn ngoan'], 0, 'Doping vi phạm cả đạo đức và luật.'),
    Q('Khi thua trận?', ['Tôn trọng đối thủ, rút kinh nghiệm', 'Đổ lỗi', 'Khiêu khích', 'Bỏ giải'], 0, 'Tinh thần thể thao thể hiện khi thua.'),
    Q('Khi thắng trận?', ['Khiêm tốn, tôn trọng đối thủ', 'Khoe khoang', 'Khiêu khích', 'Hung hăng'], 0, 'Khiêm tốn khi chiến thắng là phẩm chất tốt.'),
  ]),

  M(31, 'Luyện sức bền — Chạy 1500m', [
    Q('Chiến thuật chạy 1500m?', ['Bắt đầu vừa phải, giữ nhịp, tăng tốc cuối', 'Sprint từ đầu', 'Chạy chậm cả', 'Tuỳ ý'], 0, 'Pacing là then chốt chạy bền.'),
    Q('Đảm bảo đủ nước?', ['Uống trước-trong-sau khi chạy', 'Không uống', 'Chỉ sau', 'Tuỳ ý'], 0, 'Hydration đầy đủ giúp duy trì hiệu suất.'),
    Q('Để chạy nhanh hơn?', ['Tăng cường interval + sức mạnh chân', 'Chỉ chạy chậm', 'Bỏ tập', 'Tuỳ ý'], 0, 'Interval + sức mạnh tăng VO₂max.'),
    Q('Trang phục chạy?', ['Thoáng, hút mồ hôi, giày chuyên dụng', 'Quần áo dày', 'Giày thường', 'Tuỳ ý'], 0, 'Trang phục phù hợp giúp hiệu suất.'),
  ]),

  M(32, 'Tổ chức trận đấu nhỏ', [
    Q('Trận đấu giao hữu cần?', ['Trọng tài, luật rõ ràng, tinh thần fair play', 'Tuỳ ý', 'Không trọng tài', 'Không luật'], 0, 'Tổ chức cần đầy đủ và fair.'),
    Q('Vai trò đội trưởng?', ['Dẫn dắt, động viên, giao tiếp với trọng tài', 'Đứng nhìn', 'Tuỳ ý', 'Im lặng'], 0, 'Đội trưởng có vai trò lãnh đạo.'),
    Q('Trọng tài cần?', ['Công bằng, hiểu luật, quyết đoán', 'Thiên vị', 'Tuỳ ý', 'Mơ hồ'], 0, 'Trọng tài phải vô tư và hiểu luật.'),
    Q('Khi có tranh chấp?', ['Tôn trọng quyết định trọng tài', 'Cãi nhau', 'Bỏ trận', 'Đánh nhau'], 0, 'Tôn trọng trọng tài là tinh thần thể thao.'),
  ]),

  M(33, 'Ôn tập HK2', [
    Q('Bơi sải đặc trưng?', ['Tay luân phiên trên đầu + đập chân nhanh', 'Tay đối xứng', 'Không vung tay', 'Tuỳ ý'], 0, 'Freestyle: tay luân phiên + flutter kick.'),
    Q('Sơ cứu chấn thương cơ khớp?', ['RICE', 'CPR', 'Heimlich', 'Tuỳ ý'], 0, 'RICE cho cơ-khớp; CPR khi ngừng tim.'),
    Q('Fair play là?', ['Trung thực, tôn trọng đối thủ và luật', 'Thắng bằng mọi giá', 'Gian lận', 'Tuỳ ý'], 0, 'Fair play là tinh thần thể thao.'),
    Q('Bóng chuyền — libero?', ['Chuyên phòng thủ', 'Tấn công', 'Phát', 'Tuỳ ý'], 0, 'Libero chuyên đỡ bóng.'),
    Q('Bóng đá — đội hình phổ biến?', ['4-4-2, 4-3-3', '2-2-6', '6-3-1', 'Tuỳ ý'], 0, 'Các đội hình hiện đại.'),
  ]),

  M(34, 'Thể chất suốt đời — Kế hoạch cá nhân', [
    Q('Tập thể dục thường xuyên?', ['Giảm bệnh tim mạch, tiểu đường, béo phì', 'Tăng bệnh', 'Không tác dụng', 'Tốn sức'], 0, 'Tập thể dục có nhiều lợi ích sức khoẻ.'),
    Q('WHO khuyến nghị người 5–17 tuổi?', ['≥ 60 phút hoạt động trung bình-mạnh/ngày', '10 phút', '5 phút', 'Tuỳ ý'], 0, 'WHO: ≥ 60 phút/ngày cho trẻ em + thanh thiếu niên.'),
    Q('Hoạt động nào tốt?', ['Đi bộ, chạy, đạp xe, bơi, các môn bóng', 'Ngồi nhiều', 'Game', 'Tuỳ ý'], 0, 'Nhiều hoạt động tốt cho sức khoẻ.'),
    Q('Kế hoạch tập cá nhân cần?', ['Mục tiêu rõ, lịch cụ thể, đa dạng môn', 'Tuỳ ý', 'Không kế hoạch', 'Bị động'], 0, 'Kế hoạch giúp duy trì thói quen.'),
    Q('Để duy trì lâu dài?', ['Chọn môn yêu thích, có bạn cùng tập', 'Ép mình', 'Đơn độc', 'Tuỳ ý'], 0, 'Yêu thích + bạn tập tăng độ bền lâu dài.'),
  ]),

  M(35, 'Tổng kết — Kiểm tra cuối kì', [
    Q('Khởi động trước tập?', ['Bắt buộc, tránh chấn thương', 'Tuỳ ý', 'Không cần', 'Tuỳ ý'], 0, 'Khởi động là quy tắc an toàn.'),
    Q('Chạy 1500m chiến thuật?', ['Pacing đều + sprint cuối', 'Sprint từ đầu', 'Chạy chậm cả', 'Tuỳ ý'], 0, 'Pacing là then chốt.'),
    Q('Bóng chuyền số người/sân?', ['6', '5', '7', '11'], 0, 'Bóng chuyền 6/sân.'),
    Q('Bóng rổ số người/sân?', ['5', '6', '7', '4'], 0, 'Bóng rổ 5/sân.'),
    Q('Fair play là?', ['Trung thực + tôn trọng', 'Gian lận', 'Tuỳ ý', 'Hung hăng'], 0, 'Fair play là tinh thần thể thao cao đẹp.'),
  ]),
];

export const S9GDTC_SCENARIOS = indexBy(S9GDTC_WEEKS);
