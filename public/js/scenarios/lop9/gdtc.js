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
    Q('Thời gian khởi động tối thiểu?', ['30 giây', 'Không cần', '5–10 phút', '1 phút'], 2, '5–10 phút khởi động là khuyến nghị.'),
    Q('Sau khi tập, cần?', ['Tắm nước lạnh ngay', 'Ăn ngay', 'Dừng đột ngột', 'Thả lỏng, giãn cơ, hồi phục'], 3, 'Cool-down giúp hồi phục tốt hơn.'),
    Q('Khi bị chấn thương, nên?', ['Cố gắng tập', 'Dừng tập, sơ cứu, báo người lớn/y tế', 'Tự dán băng cá nhân rồi tập tiếp', 'Im lặng'], 1, 'An toàn là trên hết.'),
  ]),

  M(2, 'Chạy bền — Kỹ thuật chạy 800m–1500m', [
    Q('Chạy bền đòi hỏi?', ['Tốc độ tối đa', 'Sức mạnh tối đa', 'Linh hoạt', 'Sức bền tim mạch + nhịp thở đều'], 3, 'Chạy bền dựa trên sức bền aerobic.'),
    Q('Cự ly 800m thuộc?', ['Sprint', 'Chạy cự ly ngắn (sprint dưới 400m)', 'Chạy bền cự ly trung bình', 'Marathon'], 2, '800m là cự ly trung bình.'),
    Q('Nhịp thở khi chạy bền?', ['Thở nhanh và nông liên tục', 'Thở gấp', 'Nín thở', 'Đều đặn, hít sâu thở ra dài'], 3, 'Thở đều và sâu cung cấp oxy cho cơ.'),
    Q('Khi chạy bị xóc bụng?', ['Giảm tốc, thở chậm sâu, ấn vùng đau', 'Tăng tốc', 'Dừng đột ngột', 'Mặc kệ'], 0, 'Giảm tốc và điều hoà hô hấp.'),
    Q('Tư thế chạy bền đúng?', ['Ngả ra sau', 'Thân hơi nghiêng trước, vai thả lỏng, tay vung tự nhiên', 'Vai gồng', 'Tay khoanh'], 1, 'Tư thế thoải mái + tiết kiệm năng lượng.'),
  ]),

  M(3, 'Chạy bền — Bài tập sức bền', [
    Q('Phương pháp tập sức bền?', ['Chỉ sprint', 'Chỉ tập tạ nặng cho chân', 'Không tập', 'Chạy liên tục đều tốc, chạy biến tốc, chạy interval'], 3, 'Nhiều phương pháp tập sức bền hiệu quả.'),
    Q('Interval training là?', ['Đi bộ chậm rãi suốt buổi tập', 'Chạy đều', 'Dừng nghỉ', 'Xen kẽ chạy nhanh – chậm'], 3, 'Interval tăng VO₂max hiệu quả.'),
    Q('Tần suất tập bền/tuần?', ['1 buổi', '7 buổi liên tục', '3–5 buổi', 'Không cần'], 2, '3–5 buổi/tuần là khuyến nghị.'),
    Q('Để tiến bộ, cần?', ['Giữ nguyên cự ly và tốc độ trong nhiều tháng', 'Đột ngột', 'Không thay đổi', 'Tăng dần cự ly hoặc tốc độ theo nguyên tắc tăng tiến'], 3, 'Nguyên tắc progressive overload.'),
  ]),

  M(4, 'Đá cầu — Kỹ thuật cơ bản', [
    Q('Đá cầu nguồn gốc?', ['Châu Mỹ', 'Châu Phi', 'Việt Nam, Trung Quốc, Đông Á', 'Châu Âu'], 2, 'Đá cầu phổ biến ở Đông Á, đặc biệt VN.'),
    Q('Kỹ thuật đá cầu cơ bản?', ['Đá gót', 'Đá hông', 'Đá mu bàn chân, đá má trong, đá má ngoài', 'Đá gối'], 2, '3 kỹ thuật cơ bản theo phần chân tiếp xúc.'),
    Q('Sân đá cầu đơn?', ['Sân tennis', 'Dài 11,88m × rộng 6,1m', 'Sân tennis', 'Sân bóng đá'], 1, 'Sân đá cầu chính thức 11,88 × 6,1m.'),
    Q('Chiều cao lưới đá cầu (nam)?', ['1,5m', '2,5m', '2m', '1m'], 0, 'Lưới nam 1,5m; nữ 1,4m.'),
    Q('Khi đá cầu, mắt nhìn?', ['Nhìn vào đối thủ để đoán hướng', 'Theo dõi cầu liên tục', 'Nhìn chân', 'Nhìn người khác'], 1, 'Mắt theo cầu để phán đoán điểm rơi.'),
  ]),

  M(5, 'Đá cầu — Thi đấu đơn', [
    Q('Phát cầu đầu trận?', ['Bốc thăm chọn bên hoặc quyền phát', 'Tự chọn', 'Trọng tài quyết', 'Đối phương quyết'], 0, 'Bốc thăm theo luật quốc tế.'),
    Q('Một set thi đấu đơn?', ['21 điểm, chênh 2 điểm', '10 điểm', '15 điểm', '25 điểm'], 0, 'Đá cầu hiện đại: 21 điểm/set, chênh 2.'),
    Q('Lỗi khi nhận cầu?', ['Đá trả qua lưới', 'Để cầu chạm đất, ra ngoài, chạm 2 lần', 'Né cầu khi cầu bay sang phần sân mình', 'Lùi sau'], 1, 'Cầu chạm đất là mất điểm.'),
    Q('Chiến thuật đơn?', ['Chỉ tốc độ', 'Phán đoán + tốc độ + sức bền', 'Chỉ dùng kỹ thuật đá mu chính diện', 'Chỉ sức mạnh'], 1, 'Đá cầu đơn cần tổng hợp nhiều yếu tố.'),
  ]),

  M(6, 'Đá cầu — Thi đấu đôi', [
    Q('Đá cầu đôi cần?', ['Không hợp tác', 'Phối hợp đồng đội, vị trí, hỗ trợ', 'Mỗi người tự đá nửa sân, không yểm trợ', 'Tự chơi'], 1, 'Đôi đòi hỏi phối hợp ăn ý.'),
    Q('Vị trí đứng đôi?', ['Không sắp xếp', 'Trước-sau hoặc trái-phải tuỳ chiến thuật', 'Đứng chéo góc sân, đối lưng nhau', 'Cùng vị trí'], 1, '2 chiến thuật vị trí phổ biến.'),
    Q('Khi cầu sang sân nhà, ai đá?', ['Người gần cầu hơn, đồng đội yểm trợ', 'Không ai đá', 'Cả hai cùng đá', 'Người đứng sau luôn đá bóng đầu tiên'], 0, 'Phân công rõ tránh va chạm.'),
    Q('Giao tiếp trong trận?', ['Chỉ giao tiếp sau khi kết thúc set', 'Im lặng', 'Gọi tên, ra hiệu, động viên', 'Cãi nhau'], 2, 'Giao tiếp giúp phối hợp tốt.'),
  ]),

  M(7, 'Cầu lông — Kỹ thuật đôi nâng cao', [
    Q('Cầu lông đôi vị trí?', ['Cố định', 'Cùng đứng sau', 'Một người đứng giữa, một người đứng cuối sân', 'Trước-sau khi tấn công, ngang khi phòng thủ'], 3, 'Đội hình cầu lông đôi linh hoạt theo tình huống.'),
    Q('Tấn công cầu lông đôi?', ['Đập cầu mạnh + người trên lưới chặn', 'Chỉ phòng thủ', 'Đẩy bóng cao', 'Đẩy cầu cao sâu cuối sân đối thủ'], 0, 'Tấn công đập + chặn trên lưới hiệu quả.'),
    Q('Cú smash hiệu quả khi?', ['Đối phương sát', 'Cầu sát đất', 'Khi cầu rơi sát lưới ở mép sân nhà', 'Cầu ở trên cao, đối phương ở xa'], 3, 'Smash tốt nhất khi cầu cao + đối thủ xa.'),
    Q('Cú net (cầu sát lưới)?', ['Đập mạnh', 'Cuốn cao', 'Dùng cổ tay khéo léo, đưa cầu sát lưới', 'Dùng cả cánh tay vung mạnh từ trên xuống'], 2, 'Net play đòi hỏi kỹ thuật cổ tay.'),
    Q('Sân cầu lông đôi rộng?', ['5,18m × 13,4m', '6 × 12m', '6,1m × 13,4m', '5 × 11m'], 2, 'Sân đôi rộng hơn sân đơn (6,1 vs 5,18m).'),
  ]),

  M(8, 'Bóng chuyền — Đập bóng', [
    Q('Đập bóng (smash/spike) là?', ['Tấn công mạnh từ trên cao xuống sân đối phương', 'Phát bóng cao sang sân đối thủ', 'Phòng thủ', 'Chuyền'], 0, 'Spike là cú tấn công chính trong bóng chuyền.'),
    Q('Kỹ thuật đập bóng đúng?', ['Không nhảy', 'Lấy đà, nhảy cao, vung tay đập trên đỉnh đầu', 'Đập 2 tay', 'Đập sát ngực'], 1, 'Đập 1 tay từ trên đỉnh đầu sau khi nhảy.'),
    Q('Điểm tiếp xúc bóng?', ['Ngang ngực', 'Cao nhất có thể trong tầm vói', 'Khi bóng rơi sát mặt sân', 'Ngang vai'], 1, 'Tiếp xúc cao = góc đập tốt.'),
    Q('Lực đập từ?', ['Chỉ tay', 'Toàn thân: chân – hông – tay', 'Chỉ vai', 'Chỉ chân'], 1, 'Lực đập là chuỗi động học toàn thân.'),
    Q('Sau khi đập, tiếp đất?', ['Một chân duỗi thẳng cứng để giữ thăng bằng', '2 chân, đầu gối hơi gập để giảm chấn', '1 chân', 'Cứng chân'], 1, 'Tiếp đất 2 chân + chùng gối tránh chấn thương.'),
  ]),

  M(9, 'Bóng chuyền — Chắn lưới (block)', [
    Q('Chắn lưới (block) là?', ['Tấn công', 'Đỡ cú đập đối phương ngay tại lưới', 'Chuyền', 'Phát bóng từ cuối sân sang đối thủ'], 1, 'Block là kỹ thuật phòng thủ tại lưới.'),
    Q('Vị trí chắn lưới?', ['Vị trí libero ở hàng sau', 'Hàng trên (3 vị trí trước)', 'Hàng dưới', 'Sân giữa'], 1, 'Chỉ vị trí hàng trên được chắn lưới.'),
    Q('Khi chắn?', ['Không nhảy', '1 tay', 'Nhảy thẳng, 2 tay vươn cao qua lưới', 'Nhảy chéo'], 2, '2 tay vươn cao + nhảy thẳng đứng.'),
    Q('Chắn 2 người gọi là?', ['Triple block', 'Double block', 'Single block', 'Half block (chắn nửa lưới)'], 1, 'Double block hiệu quả hơn single.'),
    Q('Lỗi chạm lưới?', ['Mất điểm cho đối phương', 'Không sao', 'Cảnh cáo', 'Tuỳ trọng tài'], 0, 'Chạm lưới là lỗi mất điểm trực tiếp.'),
  ]),

  M(10, 'Bóng rổ — Ném 3 điểm', [
    Q('Vạch 3 điểm cách rổ?', ['5m', '6,75m (FIBA) hoặc 7,24m (NBA)', '4m', '10m'], 1, 'FIBA 6,75m; NBA 7,24m.'),
    Q('Tư thế ném 3 điểm?', ['Đứng kiễng chân, hai tay giơ thẳng lên cao', 'Đứng thẳng, hai chân khép sát, ném bằng một tay', 'Đứng thẳng', 'Chân rộng bằng vai, đầu gối chùng, hai tay đỡ bóng, mắt nhìn rổ'], 3, 'BEEF: Balance, Eyes, Elbow, Follow-through.'),
    Q('Khi ném, lực từ?', ['Chỉ tay', 'Chỉ vai', 'Chân – thân – tay phối hợp', 'Chỉ chân'], 2, 'Cả thân thể tham gia ném 3 điểm.'),
    Q('Bóng ra khỏi tay với?', ['Không xoay', 'Xoay xuôi', 'Xoáy ngang (sidespin) sang trái', 'Spin (xoáy) ngược'], 3, 'Backspin giúp bóng ổn định và "bounce in" khi chạm vành.'),
    Q('Để giỏi ném 3 điểm, cần?', ['Tập đều, đúng kỹ thuật, kiên trì', 'May mắn', 'Tự nhiên', 'Không tập'], 0, 'Lặp lại đúng kỹ thuật là chìa khoá.'),
  ]),

  M(11, 'Bóng rổ — Phòng thủ và tấn công', [
    Q('Phòng thủ kèm người (man-to-man)?', ['Mỗi cầu thủ kèm 1 đối thủ cố định', 'Khu vực', 'Hỗn hợp', 'Chỉ kèm người đang giữ bóng, bỏ người khác'], 0, 'Man-to-man là kèm chặt 1-1.'),
    Q('Phòng thủ khu vực (zone)?', ['Đứng tập trung quanh vạch ném phạt', 'Kèm 1-1', 'Không phòng thủ', 'Mỗi cầu thủ phòng thủ 1 khu vực sân'], 3, 'Zone defense phân chia khu vực sân.'),
    Q('Pick and roll là?', ['Ném 3 điểm sau khi nhận bóng từ chuyền dài', 'Phát bóng', 'Chiến thuật chắn + lăn tới rổ', 'Phòng thủ'], 2, 'Pick and roll là chiến thuật tấn công kinh điển.'),
    Q('Lỗi cá nhân khi?', ['Phạm lỗi với đối thủ (đẩy, chặn không hợp lệ...)', 'Phòng thủ tốt', 'Đánh đầu', 'Ném tốt'], 0, 'Personal foul khi phạm luật với đối thủ.'),
  ]),

  M(12, 'Bóng đá — Sút phạt', [
    Q('Đá phạt trực tiếp do?', ['Tự chọn', 'Phạm lỗi cấm hoặc handball trong vòng', 'Bóng ra ngoài đường biên ngang', 'Lỗi việt vị của tiền đạo'], 1, 'Đá phạt trực tiếp khi có lỗi nghiêm trọng.'),
    Q('Hàng rào cách bóng?', ['Tối thiểu 9,15m (10 yards)', '5m', '15m', '20m'], 0, '9,15m là luật FIFA.'),
    Q('Kỹ thuật đá phạt cong?', ['Dùng mu ngoài bàn chân, đá thẳng tâm bóng', 'Mũi giày', 'Dùng gót chân giật ngược về sau', 'Dùng mu trong bàn chân, đá lệch tâm bóng'], 3, 'Mu trong + đá lệch tâm tạo độ xoáy cong.'),
    Q('Đá phạt 11m (penalty)?', ['Đá phạt trực tiếp tại chấm 11m, không hàng rào', 'Có hàng rào', '20m', 'Tuỳ chọn'], 0, 'Penalty kick tại 11m, chỉ thủ môn cản.'),
    Q('Khi đá phạt, mắt nhìn?', ['Nhìn bóng + định hướng đích trước, không nhìn thủ môn', 'Nhắm mắt', 'Nhìn thủ môn', 'Nhìn lung tung'], 0, 'Định hướng trước, tập trung vào bóng khi đá.'),
  ]),

  M(13, 'Bóng đá — Phòng thủ và tấn công cơ bản', [
    Q('Phòng thủ cá nhân tốt khi?', ['Đứng xa', 'Chờ đối thủ chuyền sai rồi mới di chuyển', 'Bám sát, chặn đường chuyền, lấy bóng đúng lúc', 'Mặc kệ'], 2, 'Phòng thủ chủ động.'),
    Q('Phối hợp tấn công cơ bản?', ['Chuyền – chạy chỗ – mở khoảng trống', 'Ôm bóng', 'Sút xa từ giữa sân về phía khung thành', 'Chuyền ngược về thủ môn để câu giờ'], 0, 'Bóng đá hiện đại tập trung phối hợp.'),
    Q('Việt vị xảy ra khi?', ['Trong vòng cấm', 'Khi cầu thủ chạy nhanh hơn hậu vệ', 'Cầu thủ tấn công đứng dưới hậu vệ cuối khi bóng được chuyền', 'Tại trung lộ'], 2, 'Luật việt vị bảo vệ tính công bằng.'),
    Q('Thẻ vàng có nghĩa?', ['Đổi cầu thủ', 'Phạt tiền', 'Cảnh cáo', 'Truất quyền'], 2, 'Thẻ vàng cảnh cáo; 2 vàng = đỏ = truất.'),
  ]),

  M(14, 'Ôn tập + Kiểm tra giữa HK1', [
    Q('Khởi động trước tập có ý nghĩa?', ['Làm nóng cơ sau buổi tập là đủ', 'Tốn sức', 'Không cần', 'Tránh chấn thương, tăng hiệu quả'], 3, 'Khởi động bắt buộc trước khi tập.'),
    Q('Chạy bền cần?', ['Linh hoạt tối đa', 'Tốc độ tối đa', 'Sức mạnh tối đa', 'Sức bền + nhịp thở đều'], 3, 'Aerobic endurance là then chốt.'),
    Q('Đá cầu cú nào cơ bản?', ['Đá gối', 'Đá hông', 'Mu bàn chân + má trong + má ngoài', 'Đá đầu'], 2, '3 kỹ thuật cơ bản.'),
    Q('Bóng chuyền — đập bóng cần?', ['Đứng yên dưới đất rồi đập bóng ngang vai', 'Nhảy cao + vung tay từ trên đỉnh đầu', 'Không nhảy', 'Đập sát đất'], 1, 'Đập bóng tốt = nhảy cao + tiếp xúc trên đỉnh.'),
    Q('Bóng rổ — ném 3 điểm cách rổ?', ['6,75m (FIBA)', '20m', '10m', '4m'], 0, '6,75m theo FIBA.'),
  ]),

  M(15, 'Võ thuật — Vovinam giới thiệu', [
    Q('Vovinam – Việt Võ Đạo có nguồn gốc?', ['Hàn Quốc', 'Việt Nam, sáng tổ Nguyễn Lộc, 1938', 'Trung Quốc', 'Nhật Bản'], 1, 'Vovinam do Nguyễn Lộc sáng lập tại Hà Nội 1938.'),
    Q('Đặc trưng kỹ thuật Vovinam?', ['Chỉ vật', 'Đòn chân tấn công + đòn tay phối hợp + đòn vật, khoá', 'Chỉ đấm', 'Chỉ đá'], 1, 'Vovinam toàn diện: tay + chân + vật + khoá.'),
    Q('Tinh thần Vovinam?', ['Cương nhu phối triển, võ đạo dân tộc', 'Cứng nhắc', 'Chỉ tự vệ', 'Chỉ tập đối kháng, không tập quyền'], 0, '"Cương nhu phối triển" là triết lý Vovinam.'),
    Q('Lễ tiết khi luyện tập?', ['Chỉ chào khi gặp sư trưởng môn', 'Sau buổi', 'Chào sư, chào đồng môn, lễ phép', 'Không cần'], 2, 'Võ đạo coi trọng lễ tiết.'),
  ]),

  M(16, 'Võ thuật — Vovinam bài quyền nhập môn', [
    Q('Bài quyền nhập môn Vovinam?', ['Nhập môn quyền', 'Tứ trụ quyền', 'Long hổ quyền', 'Thái cực'], 0, 'Nhập môn quyền dành cho người mới.'),
    Q('Bài quyền luyện?', ['Chỉ đứng', 'Tư thế cơ bản, tấn pháp, đòn tay-chân, di chuyển', 'Chỉ đá', 'Chỉ đấm'], 1, 'Quyền là chuỗi kỹ thuật cơ bản tổng hợp.'),
    Q('Tấn pháp cơ bản?', ['Chỉ có tấn pháp đứng thẳng hai chân', 'Một tấn pháp duy nhất cho mọi đòn', 'Trung bình tấn, đinh tấn, hạc tấn, quỳ tấn', 'Đứng thẳng'], 2, 'Tấn pháp là nền tảng võ thuật.'),
    Q('Khi tập quyền cần?', ['Tập trung, chính xác, có lực và nhịp', 'Cẩu thả', 'Tập nhanh hết bài, không cần dừng định hình', 'Bắt chước động tác mà không hiểu ý nghĩa'], 0, 'Quyền cần kết hợp chính xác + lực + nhịp.'),
  ]),

  M(17, 'Võ thuật — Karatedo', [
    Q('Karatedo nguồn gốc?', ['Trung Quốc', 'Okinawa, Nhật Bản', 'Việt Nam', 'Hàn Quốc'], 1, 'Karatedo phát triển từ Okinawa, Nhật Bản.'),
    Q('Karatedo nghĩa là?', ['Có vũ khí', 'Đấu kiếm', 'Không thủ đạo — dùng tay không', 'Nhu thuật — kỹ thuật dùng đòn vật ngã'], 2, 'Kara = không, te = tay, do = đạo.'),
    Q('Kỹ thuật Karatedo gồm?', ['Chỉ đá', 'Chỉ vật', 'Chỉ đấm', 'Tsuki (đấm), Keri (đá), Uke (đỡ), Kata (quyền)'], 3, '4 nhóm kỹ thuật cơ bản.'),
    Q('Đai cao nhất Karatedo?', ['Đai trắng', 'Đai vàng', 'Đai đỏ', 'Đai đen (kuro-obi) với nhiều đẳng (dan)'], 3, 'Đai đen có nhiều đẳng (1–10 dan).'),
    Q('Tinh thần Karatedo?', ['Đánh nhanh thắng nhanh trong mọi tình huống', 'Hung hăng', 'Karate ni sente nashi — Karate không đánh trước', 'Tấn công trước'], 2, 'Tinh thần phòng thủ và tự kiềm chế.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Chạy bền + thở đều giúp?', ['Tốn sức', 'Tăng sức bền tim mạch', 'Không tác dụng', 'Giảm sức bền'], 1, 'Chạy bền cải thiện hệ tim mạch.'),
    Q('Bóng chuyền — chắn lưới (block)?', ['Hàng trên, nhảy thẳng, 2 tay qua lưới', '1 tay', 'Không nhảy', 'Hàng dưới'], 0, 'Block kỹ thuật phòng thủ tại lưới.'),
    Q('Ném 3 điểm dùng nguyên tắc?', ['POP (Position, Orientation, Push)', 'BEEF', 'XYZ (eXtend, Yield, Zoom)', 'ABC (Aim, Bend, Catch)'], 1, 'BEEF: Balance, Eyes, Elbow, Follow-through.'),
    Q('Vovinam triết lý?', ['Cương nhu phối triển', 'Nhu luôn', 'Chỉ tập đòn cứng cường lực', 'Cương luôn'], 0, '"Cương nhu phối triển" là triết lý cốt lõi.'),
    Q('Karatedo — Karate ni sente nashi?', ['Đánh trước', 'Phản công', 'Không đánh trước', 'Luôn ra đòn quyết định trước'], 2, 'Tinh thần tự kiềm chế và phòng thủ.'),
  ]),

  // ───── HK2 ─────
  M(19, 'Bơi sải — Kỹ thuật cơ bản', [
    Q('Bơi sải (freestyle) là?', ['Kiểu bơi nhanh nhất, vung tay luân phiên trên đầu', 'Bơi bướm', 'Bơi ếch', 'Bơi ngửa'], 0, 'Freestyle = front crawl, nhanh nhất.'),
    Q('Hô hấp khi bơi sải?', ['Ngẩng đầu', 'Hít bằng miệng khi đầu úp xuống nước', 'Nín thở', 'Quay đầu sang ngang, hít vào khi tay vung qua đầu'], 3, 'Quay đầu hít vào kỹ thuật chuẩn.'),
    Q('Đạp chân bơi sải?', ['Không đạp', 'Đạp mạnh chậm', 'Đập chân nhanh, đầu gối hơi gập, gối-cổ chân thả lỏng', 'Đạp ếch hai chân cùng lúc, co rồi đẩy'], 2, 'Flutter kick nhanh đều.'),
    Q('Tư thế thân?', ['Toàn thân chìm sâu dưới mặt nước 30cm', 'Ngẩng cao', 'Lưng cong xuống, hông võng dưới chân', 'Thẳng, sát mặt nước, không nhô lên cao'], 3, 'Tư thế ngang tiết kiệm năng lượng.'),
  ]),

  M(20, 'Bơi ếch — Kỹ thuật cơ bản', [
    Q('Bơi ếch (breaststroke) đặc trưng?', ['Tay luân phiên', '2 tay ra trước rồi đẩy ra ngoài, chân đạp ếch', 'Chân vẫy', 'Tay luân phiên vung qua đầu như bơi sải'], 1, 'Breaststroke: 2 tay đối xứng + chân đạp ếch.'),
    Q('Đạp chân ếch?', ['Co gối + xoay bàn chân ra ngoài + đạp về sau', 'Đập chân', 'Duỗi thẳng hai chân, đập lên xuống nhanh', 'Không đạp'], 0, 'Frog kick là kỹ thuật riêng.'),
    Q('Hô hấp khi bơi ếch?', ['Hít vào liên tục dưới nước qua mũi', 'Nín thở', 'Hít vào khi đầu nâng lên thì kéo tay', 'Hít sâu'], 2, 'Đồng bộ hô hấp + động tác tay.'),
    Q('Bơi ếch chậm hơn sải vì?', ['Tốn sức hơn', 'Không có lý do', 'Khó hơn', 'Có pha trượt + đối xứng'], 3, 'Pha trượt làm bơi ếch chậm hơn.'),
  ]),

  M(21, 'An toàn dưới nước', [
    Q('Trước khi xuống nước?', ['Khởi động kỹ, kiểm tra sức khoẻ, không ăn quá no', 'Cứ nhảy', 'Chỉ làm ướt mặt rồi nhảy xuống ngay', 'Ăn no một bữa lớn để có sức bơi lâu'], 0, 'An toàn xuống nước là quy tắc tiên quyết.'),
    Q('Khi bị chuột rút dưới nước?', ['Lặn sâu', 'Hoảng loạn', 'Quẫy mạnh', 'Bình tĩnh, kéo bóp cơ, nổi lên kêu cứu'], 3, 'Chuột rút cần bình tĩnh xử lý.'),
    Q('Cứu người đuối nước?', ['Nhảy ngay', 'Quay phim', 'Mặc kệ', 'Gọi cứu hộ, ném vật nổi, không tự lao xuống nếu không biết bơi'], 3, 'Tự bảo vệ trước khi cứu người khác.'),
    Q('Bể bơi an toàn cần?', ['Có cứu hộ, độ sâu rõ ràng, vệ sinh', 'Không cứu hộ', 'Có nhạc lớn và quầy bar quanh bể', 'Quan trọng nông'], 0, 'Bể bơi tiêu chuẩn cần cứu hộ.'),
  ]),

  M(22, 'Đá cầu — Thi đấu nâng cao', [
    Q('Cú đá tấn công mạnh?', ['Đá nhẹ', 'Đá xoáy cầu đi ngang sát mặt lưới', 'Đá quét hoặc đá mu cao + xa', 'Đá thấp'], 2, 'Đá tấn công cần lực + chính xác.'),
    Q('Cú đỡ cầu phòng thủ?', ['Đá cầu thẳng nhanh trở lại đối thủ', 'Đập mạnh ngay', 'Bỏ qua', 'Đá nhẹ + hướng lên cao để có thời gian phản ứng'], 3, 'Đỡ cao tạo thời gian phòng thủ.'),
    Q('Chiến thuật trong trận đôi?', ['Cả hai đều tấn công không phòng thủ', 'Phân vai tấn công + phòng thủ rõ ràng', 'Cùng làm 1 việc', 'Không chiến thuật'], 1, 'Phối hợp đôi cần phân vai rõ.'),
    Q('Sự kiện đá cầu lớn?', ['Giải vô địch bóng rổ Bắc Mỹ', 'Wimbledon', 'SEA Games, Giải đá cầu thế giới', 'World Cup'], 2, 'Đá cầu là môn thi đấu tại SEA Games.'),
  ]),

  M(23, 'Cầu lông — Chiến thuật đôi', [
    Q('Tấn công đôi tối ưu khi?', ['Đối thủ ở thế phòng thủ, cầu cao gần lưới', 'Khi đối thủ vừa thực hiện cú đập mạnh', 'Đối thủ tấn công', 'Cầu thấp'], 0, 'Chọn thời điểm tấn công thông minh.'),
    Q('Phòng thủ đôi?', ['Trước-sau', 'Một người đứng trước, một người đứng sau', 'Đứng ngang, hai người chia đôi sân', 'Cùng vị trí'], 2, 'Đội hình ngang khi phòng thủ.'),
    Q('Cú smash + drop nâng cao?', ['Đập rồi giả vờ smash → drop bất ngờ', 'Chỉ drop', 'Đập smash thẳng liên tục cho đến khi ăn điểm', 'Chỉ smash'], 0, 'Đánh lừa đối thủ bằng deception.'),
    Q('Sự kiện cầu lông VN?', ['Vietnam Open, SEA Games, ASIAD', 'Olympic chỉ vàng', 'World Cup bóng đá', 'Giải bóng đá ngoại hạng Anh (Premier League)'], 0, 'Vietnam Open là giải BWF tổ chức tại VN.'),
  ]),

  M(24, 'Bóng chuyền — Phối hợp đội', [
    Q('Vị trí libero?', ['Chuyên phòng thủ, không được phát + tấn công trên lưới', 'Chuyên đập bóng tấn công ở hàng trên', 'Phát bóng', 'Tấn công'], 0, 'Libero chuyên đỡ bóng, mặc áo khác màu.'),
    Q('Setter (chuyền 2) làm?', ['Chuyền bóng tới attacker để tấn công', 'Chặn các cú đập tại lưới', 'Phát bóng mở đầu mỗi pha', 'Đập bóng kết thúc pha tấn công'], 0, 'Setter là "nhạc trưởng" tấn công.'),
    Q('Số người mỗi đội?', ['5', '7', '4', '6 trên sân'], 3, 'Bóng chuyền 6 người/sân.'),
    Q('Cú phát mạnh phổ biến?', ['Phát bóng bằng đầu gối', 'Phát tay dưới', 'Phát đẩy', 'Phát đập (jump serve)'], 3, 'Jump serve là cú phát mạnh phổ biến.'),
    Q('Set bóng chuyền tới?', ['15 điểm', '30 điểm', '21 điểm', '25 điểm, chênh 2 (set 5 đến 15)'], 3, '25 điểm theo luật FIVB.'),
  ]),

  M(25, 'Bóng rổ — Thi đấu', [
    Q('Bóng rổ một đội bao nhiêu người trên sân?', ['6', '4', '5', '7'], 2, 'Bóng rổ 5 người/sân.'),
    Q('Một trận chia mấy hiệp?', ['5 hiệp', '3 hiệp', '4 hiệp × 10 phút (FIBA)', '2 hiệp'], 2, 'FIBA: 4 × 10 phút; NBA: 4 × 12.'),
    Q('Điểm 1, 2, 3 từ?', ['Tất cả các cú ném đều được 3 điểm', 'Ném phạt (1), trong vạch 3 (2), ngoài vạch 3 (3)', 'Mọi cú ném vào rổ đều được 2 điểm', 'Ném phạt 2 điểm, ném sân 1 điểm'], 1, 'Quy tắc tính điểm rõ ràng.'),
    Q('5 lỗi cá nhân?', ['Phạt tiền', 'Không sao', 'Cảnh cáo', 'Bị truất quyền thi đấu (NCAA/FIBA)'], 3, '5 lỗi = bị truất (NBA là 6 lỗi).'),
  ]),

  M(26, 'Bóng đá — Thi đấu chiến thuật', [
    Q('Đội hình phổ biến?', ['Đội hình không cố định, đổi từng pha', '4-4-2, 4-3-3, 3-5-2', 'Chỉ 4-4-2', '2-2-6'], 1, 'Nhiều đội hình theo chiến thuật.'),
    Q('Số người mỗi đội (11 người)?', ['10', '12', '11 trên sân kể thủ môn', '9'], 2, 'Bóng đá 11 người/sân.'),
    Q('Thời gian trận đấu chuẩn?', ['120 phút', '70 phút', '90 phút (2 hiệp × 45)', '60 phút'], 2, '90 phút chính thức + bù giờ.'),
    Q('Khi hoà ở loại trực tiếp?', ['Tung đồng xu', 'Hiệp phụ + sút penalty nếu vẫn hoà', 'Tính bàn thắng sân khách để phân định', 'Đá lại'], 1, 'Quy trình giải quyết hoà rõ ràng.'),
  ]),

  M(27, 'Thể chất — Sức mạnh và linh hoạt', [
    Q('Tập sức mạnh dùng?', ['Chỉ kéo dãn', 'Tạ, bodyweight (chống đẩy, gập bụng)', 'Chỉ cần đi bộ nhẹ hằng ngày là đủ', 'Chỉ chạy'], 1, 'Sức mạnh tập với tạ hoặc trọng lượng cơ thể.'),
    Q('Tập linh hoạt?', ['Chạy bền tốc độ cao', 'Nâng tạ nặng tối đa', 'Tập sprint cự ly ngắn', 'Giãn cơ tĩnh + động, yoga, pilates'], 3, 'Stretching tăng linh hoạt.'),
    Q('Nguyên tắc tập luyện?', ['Quá sức', 'Đột ngột', 'Khởi động – tập – thả lỏng, tăng tiến dần', 'Tập cường độ tối đa ngay từ phút đầu'], 2, 'Quy trình tập an toàn.'),
    Q('Hồi phục cần?', ['Nhịn ăn để giảm cân nhanh hơn', 'Tập liên tục', 'Uống nước có ga thay cho nước lọc', 'Ngủ đủ, dinh dưỡng, nước'], 3, 'Hồi phục quan trọng như tập luyện.'),
  ]),

  M(28, 'Dinh dưỡng cho người tập thể thao', [
    Q('Carbohydrate cung cấp?', ['Vitamin', 'Nguyên liệu chính xây dựng cơ bắp', 'Năng lượng chính cho cơ thể', 'Khoáng chất giúp xương chắc khỏe'], 2, 'Carb là nguồn năng lượng chính.'),
    Q('Protein cần cho?', ['Xây và phục hồi cơ', 'Vitamin', 'Tăng độ dẻo dai cho khớp', 'Năng lượng'], 0, 'Protein xây cơ.'),
    Q('Trước tập 1 giờ nên?', ['Ăn nhiều đồ chiên rán giàu dầu mỡ', 'Ăn nhẹ, dễ tiêu (chuối, bánh mì)', 'Ăn một bữa thật no trước khi tập', 'Nhịn ăn để cơ thể đốt mỡ nhanh hơn'], 1, 'Ăn nhẹ trước tập 1 giờ giúp duy trì năng lượng.'),
    Q('Uống nước khi tập?', ['Một lần nhiều', 'Uống đều, từng ngụm nhỏ', 'Không uống', 'Chỉ uống nước ngọt có ga để bổ sung đường'], 1, 'Hydration đều giúp tránh mất nước.'),
    Q('Sau tập nên ăn?', ['Chỉ ăn rau xanh và trái cây', 'Nhịn ăn 3 giờ để giảm cân', 'Chỉ rau', 'Carb + protein trong 30–60 phút (cửa sổ vàng)'], 3, 'Anabolic window giúp hồi phục cơ.'),
  ]),

  M(29, 'Bệnh và chấn thương — Phòng tránh', [
    Q('Chấn thương phổ biến khi tập?', ['Đau bụng', 'Đau đầu do căng thẳng học tập', 'Cảm cúm', 'Bong gân, căng cơ, trật khớp'], 3, 'Chấn thương cơ-khớp phổ biến trong thể thao.'),
    Q('Sơ cứu RICE?', ['Rest, Iron, Care, Exercise', 'Rest, Ice, Compression, Elevation', 'Run, Ice, Cry, Eat', 'Rub, Ice, Carry, Eat'], 1, 'RICE là quy trình sơ cứu cơ bản.'),
    Q('Để tránh chấn thương?', ['Khởi động, đúng kỹ thuật, không quá sức', 'Bỏ khởi động', 'Tập càng nhanh và càng nặng càng tốt', 'Tập nhiều'], 0, 'Phòng > chữa.'),
    Q('Khi chấn thương nặng?', ['Tự nắn khớp và uống thuốc giảm đau', 'Đợi tự khỏi', 'Đến cơ sở y tế ngay', 'Chườm nóng rồi xoa bóp mạnh chỗ đau'], 2, 'Chấn thương nặng cần y tế chuyên môn.'),
  ]),

  M(30, 'Đạo đức trong thể thao', [
    Q('Fair play (chơi đẹp) là?', ['Phạm lỗi cố ý', 'Trung thực, tôn trọng luật, đối thủ, trọng tài', 'Khiêu khích', 'Gian lận'], 1, 'Fair play là tinh thần thể thao cao đẹp.'),
    Q('Doping (dùng chất cấm) là?', ['Khôn ngoan', 'Vi phạm đạo đức + luật thể thao', 'Được phép nếu không bị phát hiện', 'Cách hợp pháp để nâng thành tích'], 1, 'Doping vi phạm cả đạo đức và luật.'),
    Q('Khi thua trận?', ['Đổ lỗi', 'Bỏ giải', 'Khiêu khích', 'Tôn trọng đối thủ, rút kinh nghiệm'], 3, 'Tinh thần thể thao thể hiện khi thua.'),
    Q('Khi thắng trận?', ['Khiêu khích', 'Khiêm tốn, tôn trọng đối thủ', 'Khoe khoang', 'Hung hăng'], 1, 'Khiêm tốn khi chiến thắng là phẩm chất tốt.'),
  ]),

  M(31, 'Luyện sức bền — Chạy 1500m', [
    Q('Chiến thuật chạy 1500m?', ['Chạy chậm cả', 'Sprint từ đầu', 'Chạy bộ cùng nhịp với bạn bên cạnh', 'Bắt đầu vừa phải, giữ nhịp, tăng tốc cuối'], 3, 'Pacing là then chốt chạy bền.'),
    Q('Đảm bảo đủ nước?', ['Chỉ uống khi cảm thấy rất khát', 'Uống trước-trong-sau khi chạy', 'Chỉ sau', 'Không uống'], 1, 'Hydration đầy đủ giúp duy trì hiệu suất.'),
    Q('Để chạy nhanh hơn?', ['Chỉ chạy chậm', 'Tăng cường interval + sức mạnh chân', 'Chỉ tập sức bền không cần sức mạnh', 'Bỏ tập'], 1, 'Interval + sức mạnh tăng VO₂max.'),
    Q('Trang phục chạy?', ['Giày thường', 'Mặc áo khoác dày để toát mồ hôi nhiều', 'Quần áo dày', 'Thoáng, hút mồ hôi, giày chuyên dụng'], 3, 'Trang phục phù hợp giúp hiệu suất.'),
  ]),

  M(32, 'Tổ chức trận đấu nhỏ', [
    Q('Trận đấu giao hữu cần?', ['Không cần trọng tài, các đội tự xử', 'Trọng tài, luật rõ ràng, tinh thần fair play', 'Không luật', 'Không trọng tài'], 1, 'Tổ chức cần đầy đủ và fair.'),
    Q('Vai trò đội trưởng?', ['Im lặng', 'Đứng nhìn', 'Chỉ ghi điểm, không cần lãnh đạo đội', 'Dẫn dắt, động viên, giao tiếp với trọng tài'], 3, 'Đội trưởng có vai trò lãnh đạo.'),
    Q('Trọng tài cần?', ['Áp dụng luật khác nhau cho mỗi đội', 'Công bằng, hiểu luật, quyết đoán', 'Chỉ thổi còi khi có bàn thắng', 'Thiên vị'], 1, 'Trọng tài phải vô tư và hiểu luật.'),
    Q('Khi có tranh chấp?', ['Cãi nhau', 'Đánh nhau', 'Bỏ trận', 'Tôn trọng quyết định trọng tài'], 3, 'Tôn trọng trọng tài là tinh thần thể thao.'),
  ]),

  M(33, 'Ôn tập HK2', [
    Q('Bơi sải đặc trưng?', ['Hai tay vung cùng lúc ra trước rồi đẩy ngang', 'Không vung tay', 'Tay luân phiên trên đầu + đập chân nhanh', 'Tay đối xứng'], 2, 'Freestyle: tay luân phiên + flutter kick.'),
    Q('Sơ cứu chấn thương cơ khớp?', ['Heimlich', 'ABC (Airway, Breathing, Circulation)', 'RICE', 'Hô hấp nhân tạo và ép tim'], 2, 'RICE cho cơ-khớp; CPR khi ngừng tim.'),
    Q('Fair play là?', ['Gian lận', 'Thắng bằng mọi giá', 'Chỉ tuân thủ luật khi có trọng tài', 'Trung thực, tôn trọng đối thủ và luật'], 3, 'Fair play là tinh thần thể thao.'),
    Q('Bóng chuyền — libero?', ['Chuyên phòng thủ', 'Tấn công', 'Chuyền 2 đưa bóng cho chủ công', 'Phát bóng mở đầu mỗi pha'], 0, 'Libero chuyên đỡ bóng.'),
    Q('Bóng đá — đội hình phổ biến?', ['6-3-1', '4-4-2, 4-3-3', '5-4-1 phòng thủ siêu chặt', '2-2-6'], 1, 'Các đội hình hiện đại.'),
  ]),

  M(34, 'Thể chất suốt đời — Kế hoạch cá nhân', [
    Q('Tập thể dục thường xuyên?', ['Tốn sức', 'Giảm bệnh tim mạch, tiểu đường, béo phì', 'Không tác dụng', 'Tăng bệnh'], 1, 'Tập thể dục có nhiều lợi ích sức khoẻ.'),
    Q('WHO khuyến nghị người 5–17 tuổi?', ['10 phút', '5 phút', '30 phút mỗi tuần là đủ', '≥ 60 phút hoạt động trung bình-mạnh/ngày'], 3, 'WHO: ≥ 60 phút/ngày cho trẻ em + thanh thiếu niên.'),
    Q('Hoạt động nào tốt?', ['Xem video thể thao trên điện thoại', 'Ngồi nhiều', 'Đi bộ, chạy, đạp xe, bơi, các môn bóng', 'Chơi game vận động bằng tay cầm'], 2, 'Nhiều hoạt động tốt cho sức khoẻ.'),
    Q('Kế hoạch tập cá nhân cần?', ['Bị động', 'Tập theo cảm hứng, không cần lịch trình', 'Không kế hoạch', 'Mục tiêu rõ, lịch cụ thể, đa dạng môn'], 3, 'Kế hoạch giúp duy trì thói quen.'),
    Q('Để duy trì lâu dài?', ['Chọn môn yêu thích, có bạn cùng tập', 'Ép mình', 'Đơn độc', 'Đặt mục tiêu thành tích cao ngay từ đầu'], 0, 'Yêu thích + bạn tập tăng độ bền lâu dài.'),
  ]),

  M(35, 'Tổng kết — Kiểm tra cuối kì', [
    Q('Khởi động trước tập?', ['Bắt buộc, tránh chấn thương', 'Không cần', 'Chỉ cần thiết khi tập sức mạnh', 'Có thể bỏ qua nếu đã quen tập'], 0, 'Khởi động là quy tắc an toàn.'),
    Q('Chạy 1500m chiến thuật?', ['Sprint giữa quãng để vượt đối thủ', 'Sprint từ đầu', 'Pacing đều + sprint cuối', 'Chạy chậm cả'], 2, 'Pacing là then chốt.'),
    Q('Bóng chuyền số người/sân?', ['6', '5', '7', '11'], 0, 'Bóng chuyền 6/sân.'),
    Q('Bóng rổ số người/sân?', ['4', '5', '6', '7'], 1, 'Bóng rổ 5/sân.'),
    Q('Fair play là?', ['Chỉ áp dụng khi có trọng tài quan sát', 'Hung hăng', 'Gian lận', 'Trung thực + tôn trọng'], 3, 'Fair play là tinh thần thể thao cao đẹp.'),
  ]),
];

export const S9GDTC_SCENARIOS = indexBy(S9GDTC_WEEKS);
