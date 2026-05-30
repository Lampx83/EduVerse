// ============================================================
// Lớp 2 · TỰ NHIÊN & XÃ HỘI — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám CT GDPT 2018: Gia đình · Trường học · Cộng đồng địa phương
// → Thực vật · Động vật · Cơ thể người · Trái Đất – Bầu trời.
// ID prefix: "P2TNXH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2TNXH', 'tnxh', n, title, qs, opts);

export const P2TNXH_WEEKS = [
  // ──────────────── HK1 — GIA ĐÌNH · TRƯỜNG HỌC · CỘNG ĐỒNG ────────────────
  M(1, 'Các thế hệ trong gia đình', [
    Q('Trong gia đình, thế hệ lớn tuổi nhất thường là?', ['Ông bà', 'Bố mẹ', 'Anh chị', 'Em bé'], 0, 'Ông bà là thế hệ đi trước, lớn tuổi nhất.'),
    Q('Bố mẹ của em thuộc thế hệ thứ mấy nếu tính từ ông bà?', ['Thứ nhất', 'Thứ hai', 'Thứ ba', 'Thứ tư'], 1, 'Ông bà = thế hệ 1, bố mẹ = thế hệ 2, em = thế hệ 3.'),
    Q('Gia đình có ông bà, bố mẹ và các con sống cùng nhau gọi là gia đình mấy thế hệ?', ['1 thế hệ', '2 thế hệ', '3 thế hệ', '4 thế hệ'], 2, 'Có 3 thế hệ: ông bà – bố mẹ – con cháu.'),
    Q('Em gọi bố của bố em là gì?', ['Ông nội', 'Ông ngoại', 'Bác', 'Cậu'], 0, 'Bố của bố là ông nội.'),
    Q('Em gọi mẹ của mẹ em là gì?', ['Bà nội', 'Bà ngoại', 'Cô', 'Dì'], 1, 'Mẹ của mẹ là bà ngoại.'),
    Q('Việc làm thể hiện kính trọng ông bà là?', ['Cãi lại ông bà', 'Mời ông bà ăn cơm trước', 'Đòi quà liên tục', 'Bỏ đi chơi khi ông bà gọi'], 1, 'Mời ông bà ăn trước thể hiện lễ phép, kính trọng.'),
  ]),

  M(2, 'Nghề nghiệp của người thân', [
    Q('Người chữa bệnh cho bệnh nhân là?', ['Giáo viên', 'Bác sĩ', 'Công an', 'Nông dân'], 1, 'Bác sĩ làm việc tại bệnh viện, trạm y tế.'),
    Q('Người dạy học cho em ở trường là?', ['Bác sĩ', 'Giáo viên', 'Tài xế', 'Đầu bếp'], 1, 'Giáo viên (thầy/cô) dạy học.'),
    Q('Người trồng lúa, rau ngoài đồng là?', ['Công nhân', 'Nông dân', 'Kỹ sư', 'Thợ may'], 1, 'Nông dân làm nghề nông.'),
    Q('Người lái xe ô tô chở khách là?', ['Phi công', 'Tài xế', 'Thuỷ thủ', 'Bộ đội'], 1, 'Tài xế lái xe.'),
    Q('Khi được hỏi về nghề của bố mẹ, em nên?', ['Trả lời lễ phép, rõ ràng', 'Không trả lời', 'Nói dối nghề khác', 'Bỏ chạy'], 0, 'Trả lời lễ phép, trung thực.'),
    Q('Mọi nghề nghiệp lương thiện đều?', ['Đáng quý, đáng trân trọng', 'Không cần thiết', 'Chỉ nghề bác sĩ là tốt', 'Nghề nào cũng xấu'], 0, 'Mọi nghề chân chính đều đáng quý.'),
  ]),

  M(3, 'Sinh hoạt gia đình hàng ngày', [
    Q('Buổi sáng trước khi đi học em nên làm gì?', ['Ngủ tiếp', 'Đánh răng, rửa mặt, ăn sáng', 'Xem TV cả buổi', 'Chơi game'], 1, 'Vệ sinh và ăn sáng đầy đủ.'),
    Q('Bữa cơm gia đình thường có mấy bữa chính trong ngày?', ['1 bữa', '2 bữa', '3 bữa', '5 bữa'], 2, 'Sáng – trưa – tối: 3 bữa chính.'),
    Q('Việc em có thể giúp đỡ bố mẹ ở nhà là?', ['Quét nhà, dọn bàn ăn', 'Nấu ăn bằng bếp gas một mình', 'Sửa điện', 'Lái xe máy'], 0, 'Việc nhẹ phù hợp lứa tuổi.'),
    Q('Trẻ em lớp 2 nên ngủ mỗi ngày khoảng mấy giờ?', ['3–4 giờ', '5–6 giờ', '9–10 giờ', '15 giờ'], 2, 'Trẻ tiểu học cần ngủ 9–10 giờ/ngày.'),
    Q('Sau khi ăn xong, em nên?', ['Bỏ bát đũa ngổn ngang', 'Cảm ơn và dọn bát của mình', 'Chạy đi xem TV ngay', 'Đòi ăn thêm bánh kẹo'], 1, 'Lễ phép cảm ơn và phụ dọn bàn.'),
    Q('Hoạt động nào KHÔNG phù hợp trong sinh hoạt gia đình lành mạnh?', ['Cùng ăn cơm', 'Cùng trò chuyện', 'Cãi nhau to tiếng', 'Cùng xem phim cuối tuần'], 2, 'Cãi nhau làm mất hoà khí gia đình.'),
  ]),

  M(4, 'An toàn ở nhà (1) — Tránh điện, bếp lửa', [
    Q('Hành động nguy hiểm cần TRÁNH ở nhà là?', ['Rửa tay sạch', 'Cắm ngón tay vào ổ điện', 'Đọc sách', 'Tưới cây'], 1, 'Chọc vào ổ điện có thể bị điện giật.'),
    Q('Khi tay ướt, em có nên chạm vào ổ điện không?', ['Có, không sao', 'Không, rất nguy hiểm', 'Tuỳ ý', 'Chỉ chạm 1 lần'], 1, 'Nước dẫn điện → dễ bị giật.'),
    Q('Khi bếp gas đang cháy, em nên?', ['Đứng xa, tránh chạm vào', 'Lại gần xem cho rõ', 'Ném giấy vào lửa', 'Đùa nghịch quanh bếp'], 0, 'Đứng xa để tránh bỏng và cháy nổ.'),
    Q('Thấy nồi nước sôi trên bếp, em làm gì?', ['Tự bê xuống', 'Báo người lớn, không tự ý chạm', 'Đổ tay vào thử', 'Đậy nắp thật chặt rồi để đó'], 1, 'Trẻ em không tự bê nồi nóng.'),
    Q('Nếu thấy có khói, có lửa to ở nhà, em phải?', ['Trốn dưới gầm giường', 'Hô lớn báo người lớn, chạy ra ngoài', 'Tiếp tục chơi', 'Đóng kín cửa lại'], 1, 'Báo người lớn và thoát ra nơi an toàn.'),
    Q('Số điện thoại gọi cứu hoả ở Việt Nam là?', ['113', '114', '115', '116'], 1, '114 là số cứu hoả; 113 công an, 115 cấp cứu.'),
  ]),

  M(5, 'An toàn ở nhà (2) — Phòng tránh ngộ độc', [
    Q('Khi thấy chai thuốc lạ, em có nên uống thử không?', ['Có, vì tò mò', 'Không, rất nguy hiểm', 'Uống ít thôi', 'Chia bạn cùng uống'], 1, 'Có thể là thuốc, hoá chất gây ngộ độc.'),
    Q('Chai nước rửa chén, thuốc tẩy nên để ở đâu?', ['Trên bàn ăn', 'Nơi xa tầm tay trẻ em', 'Trong tủ lạnh chung với đồ ăn', 'Cạnh giường ngủ'], 1, 'Để xa tầm với trẻ, có nắp đậy.'),
    Q('Trước khi ăn trái cây, em nên?', ['Rửa sạch dưới vòi nước', 'Lau qua áo', 'Ăn ngay cho nhanh', 'Để nguyên đất cát'], 0, 'Rửa sạch để tránh ngộ độc, vi khuẩn.'),
    Q('Thức ăn có mùi lạ, ôi thiu thì em nên?', ['Ăn cố cho hết', 'Bỏ đi, không ăn', 'Cho em bé ăn thử', 'Cất đi mai ăn'], 1, 'Thức ăn ôi thiu gây ngộ độc.'),
    Q('Khi nghi ngờ ai đó bị ngộ độc, cần?', ['Để mặc', 'Báo người lớn, gọi 115', 'Cho uống thêm thuốc lạ', 'Cười đùa'], 1, '115 là số cấp cứu.'),
    Q('Đồ ăn còn nóng, em nên?', ['Bốc tay ăn ngay', 'Đợi nguội bớt mới ăn', 'Đổ vào miệng cho nhanh', 'Cho vào tủ lạnh ngay khi nóng'], 1, 'Tránh bỏng miệng.'),
  ]),

  M(6, 'Trường học của em', [
    Q('Em đang học lớp mấy?', ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 5'], 1, 'Sách này dành cho lớp 2.'),
    Q('Người dạy lớp em hàng ngày gọi là?', ['Hiệu trưởng', 'Giáo viên chủ nhiệm', 'Bảo vệ', 'Lao công'], 1, 'GVCN trực tiếp dạy và quản lớp.'),
    Q('Khi gặp thầy cô, em nên?', ['Quay đi', 'Chào lễ phép', 'Cười to', 'Chạy đi chỗ khác'], 1, 'Chào thầy cô là lễ phép.'),
    Q('Trong lớp học có gì?', ['Bảng, bàn, ghế, sách vở', 'Bếp ăn', 'Giường ngủ', 'Bể bơi'], 0, 'Đó là đồ dùng cơ bản trong lớp.'),
    Q('Khi vào lớp muộn, em nên?', ['Chạy thẳng vào chỗ', 'Xin phép thầy cô rồi vào', 'Đứng ngoài cả tiết', 'Bỏ về'], 1, 'Xin phép thể hiện lễ phép.'),
    Q('Trường học là nơi để em?', ['Chỉ ăn uống', 'Học tập, vui chơi cùng bạn bè', 'Ngủ cả ngày', 'Chỉ xem TV'], 1, 'Học và rèn luyện toàn diện.'),
  ]),

  M(7, 'Các phòng chức năng trong trường', [
    Q('Nơi em mượn sách đọc ở trường là?', ['Phòng y tế', 'Thư viện', 'Phòng bảo vệ', 'Nhà vệ sinh'], 1, 'Thư viện cho mượn sách.'),
    Q('Khi bị đau bụng ở trường, em đến đâu?', ['Phòng y tế', 'Thư viện', 'Phòng họp', 'Sân bóng'], 0, 'Phòng y tế chăm sóc khi đau ốm.'),
    Q('Phòng học môn Tin học có gì đặc biệt?', ['Có máy tính', 'Có lò vi sóng', 'Có giường', 'Có bể cá'], 0, 'Phòng Tin có nhiều máy tính.'),
    Q('Khu vực sân trường dùng để?', ['Chào cờ, vui chơi', 'Nấu ăn', 'Tắm rửa', 'Ngủ'], 0, 'Sân để chào cờ và sinh hoạt ngoài trời.'),
    Q('Phòng thể chất (thể dục) dùng để?', ['Học hát', 'Tập thể dục, vận động', 'Vẽ tranh', 'Học toán'], 1, 'Phòng GDTC để vận động.'),
    Q('Khi vào thư viện, em phải?', ['Nói to, cười lớn', 'Giữ trật tự', 'Chạy nhảy', 'Ăn uống'], 1, 'Thư viện cần yên tĩnh.'),
  ]),

  M(8, 'Cán bộ, nhân viên nhà trường', [
    Q('Người đứng đầu nhà trường là?', ['Hiệu trưởng', 'Bảo vệ', 'Lao công', 'Học sinh'], 0, 'Hiệu trưởng quản lý nhà trường.'),
    Q('Người gác cổng, đảm bảo an ninh trường là?', ['Giáo viên', 'Bảo vệ', 'Hiệu phó', 'Đầu bếp'], 1, 'Bảo vệ trông coi trường.'),
    Q('Người dọn dẹp vệ sinh trường là?', ['Lao công', 'Bác sĩ', 'Tài xế', 'Phi công'], 0, 'Lao công giữ trường sạch sẽ.'),
    Q('Người nấu ăn cho học sinh bán trú là?', ['Nhân viên cấp dưỡng', 'Giáo viên Toán', 'Bảo vệ', 'Thư ký'], 0, 'Cấp dưỡng phụ trách bếp ăn.'),
    Q('Khi gặp bác bảo vệ, em nên?', ['Trêu chọc', 'Chào hỏi lễ phép', 'Phớt lờ', 'Cãi nhau'], 1, 'Tôn trọng mọi người trong trường.'),
    Q('Ai trong trường cũng?', ['Có công việc riêng quan trọng', 'Không cần thiết', 'Chỉ thầy cô là quan trọng', 'Chỉ hiệu trưởng có ích'], 0, 'Mỗi người một việc, đều quan trọng.'),
  ]),

  M(9, 'Bạn bè trong lớp', [
    Q('Khi bạn bị ngã, em nên?', ['Cười nhạo', 'Đến đỡ bạn, hỏi thăm', 'Bỏ đi', 'Chụp ảnh trêu'], 1, 'Quan tâm bạn khi gặp khó khăn.'),
    Q('Khi bạn không có bút, em có?', ['Cho bạn mượn', 'Giấu bút đi', 'Cười bạn', 'Mách cô'], 0, 'Chia sẻ thể hiện tình bạn.'),
    Q('Hành động thể hiện đoàn kết là?', ['Cãi nhau', 'Cùng làm việc nhóm', 'Đánh nhau', 'Bỏ rơi bạn yếu'], 1, 'Đoàn kết là cùng nhau cố gắng.'),
    Q('Khi không đồng ý với bạn, em nên?', ['Đánh bạn', 'Nói chuyện ôn tồn', 'Không nói gì rồi giận', 'Mách phụ huynh ngay'], 1, 'Trao đổi nhẹ nhàng để hiểu nhau.'),
    Q('Một người bạn tốt là người?', ['Hay nói xấu', 'Biết chia sẻ, giúp đỡ', 'Hay đòi quà', 'Hay bắt nạt bạn yếu'], 1, 'Bạn tốt giúp đỡ nhau cùng tiến bộ.'),
    Q('Trong lớp em có bạn khuyết tật, em nên?', ['Trêu chọc', 'Yêu thương, giúp đỡ', 'Tránh xa', 'Cười nhạo'], 1, 'Yêu thương bạn có hoàn cảnh khó khăn.'),
  ]),

  M(10, 'Cộng đồng địa phương', [
    Q('Nơi em sinh sống cùng nhiều gia đình khác gọi là?', ['Trường học', 'Xóm/phường', 'Bệnh viện', 'Siêu thị'], 1, 'Xóm/làng/phường là cộng đồng dân cư.'),
    Q('Hàng xóm là?', ['Người ở nhà bên cạnh', 'Người ở rất xa', 'Người trong lớp', 'Người bán hàng'], 0, 'Hàng xóm là người sống gần nhà.'),
    Q('Khi gặp hàng xóm, em nên?', ['Chào hỏi lễ phép', 'Phớt lờ', 'Trốn đi', 'Quát to'], 0, 'Chào hỏi tạo quan hệ tốt.'),
    Q('Nhà văn hoá thôn/phường dùng để?', ['Họp dân, sinh hoạt cộng đồng', 'Ngủ', 'Nấu ăn riêng', 'Để xe máy'], 0, 'Nơi sinh hoạt chung của cộng đồng.'),
    Q('Khi có lễ hội ở địa phương, em nên?', ['Tham gia với gia đình', 'Phá hỏng đồ', 'Ở nhà cả ngày', 'Chen lấn xô đẩy'], 0, 'Lễ hội giúp gắn kết cộng đồng.'),
    Q('Việc làm góp phần xây dựng cộng đồng đẹp là?', ['Vứt rác bừa bãi', 'Giữ vệ sinh chung', 'Phá cây xanh', 'Viết bậy lên tường'], 1, 'Mỗi người sạch → cộng đồng sạch.'),
  ]),

  M(11, 'Hoạt động mua bán ở chợ/siêu thị', [
    Q('Nơi có nhiều người bán nhiều loại hàng tươi sống là?', ['Chợ', 'Bệnh viện', 'Trường học', 'Thư viện'], 0, 'Chợ là nơi mua bán hàng hoá.'),
    Q('Ở siêu thị, em chọn hàng rồi đem ra đâu để trả tiền?', ['Quầy thu ngân', 'Nhà vệ sinh', 'Kho hàng', 'Cửa ra'], 0, 'Quầy thu ngân (tính tiền).'),
    Q('Khi mua hàng, em cần?', ['Lấy không cần trả tiền', 'Trả đúng số tiền', 'Đòi giảm thật rẻ', 'Ăn cắp'], 1, 'Trao đổi mua – bán bằng tiền.'),
    Q('Khi đi chợ cùng mẹ, em nên?', ['Chạy lung tung', 'Đi cạnh mẹ, không lạc', 'Nghịch hàng hoá', 'Tự đi một mình về'], 1, 'Đi cạnh người lớn để an toàn.'),
    Q('Ở siêu thị, hàng hoá thường được?', ['Bày lung tung', 'Sắp xếp theo loại trên kệ', 'Để ngoài trời mưa', 'Để dưới đất'], 1, 'Sắp xếp gọn gàng, dễ tìm.'),
    Q('Khi nhận tiền thừa, em nên?', ['Bỏ túi không nói', 'Đếm lại và cảm ơn', 'Đòi thêm', 'Vứt đi'], 1, 'Đếm lại và cảm ơn lịch sự.'),
  ]),

  M(12, 'Bưu điện và ngân hàng', [
    Q('Bưu điện làm công việc gì?', ['Gửi thư, bưu phẩm', 'Khám bệnh', 'Dạy học', 'Bán rau'], 0, 'Bưu điện chuyển thư, bưu kiện.'),
    Q('Khi muốn gửi thư cho người thân ở xa, em đến?', ['Bưu điện', 'Trạm xăng', 'Bệnh viện', 'Trường học'], 0, 'Bưu điện chuyển thư đi xa.'),
    Q('Ngân hàng là nơi để?', ['Gửi tiền, vay tiền', 'Chữa bệnh', 'Mua rau', 'Học tiếng Anh'], 0, 'Ngân hàng nhận giữ tiền, cho vay.'),
    Q('Khi vào ngân hàng cùng bố mẹ, em nên?', ['Chạy nhảy ồn ào', 'Ngồi yên, giữ trật tự', 'Mở tủ tự ý', 'Khóc đòi quà'], 1, 'Giữ trật tự nơi công cộng.'),
    Q('Người làm việc ở ngân hàng giao dịch với khách là?', ['Giao dịch viên', 'Bác sĩ', 'Tài xế', 'Nông dân'], 0, 'Giao dịch viên hỗ trợ khách.'),
    Q('Tiền em tiết kiệm có thể gửi vào đâu để an toàn?', ['Gầm giường', 'Ngân hàng', 'Trên đường', 'Đốt đi'], 1, 'Gửi ngân hàng an toàn, có lãi.'),
  ]),

  M(13, 'Trạm y tế xã/phường', [
    Q('Khi bị ốm nhẹ ở địa phương, em đến đâu?', ['Trạm y tế xã/phường', 'Bưu điện', 'Trường học', 'Chợ'], 0, 'Trạm y tế khám bệnh ban đầu.'),
    Q('Người khám bệnh ở trạm y tế là?', ['Bác sĩ, y tá', 'Giáo viên', 'Tài xế', 'Lao công'], 0, 'Bác sĩ và nhân viên y tế.'),
    Q('Trẻ em đi tiêm phòng ở đâu gần nhất?', ['Trạm y tế', 'Bưu điện', 'Siêu thị', 'Công viên'], 0, 'Trạm y tế làm công tác tiêm chủng.'),
    Q('Tiêm phòng giúp em?', ['Phòng tránh bệnh', 'Lớn nhanh tức thời', 'Không cần ăn', 'Bay được'], 0, 'Vắc-xin giúp phòng bệnh.'),
    Q('Khi đến trạm y tế, em nên?', ['Khóc lóc ầm ĩ', 'Bình tĩnh, nghe lời bác sĩ', 'Cắn bác sĩ', 'Chạy ra ngoài'], 1, 'Hợp tác để được khám tốt.'),
    Q('Số điện thoại cấp cứu ở Việt Nam là?', ['113', '114', '115', '119'], 2, '115 là số cấp cứu y tế.'),
  ]),

  M(14, 'Trạm xăng', [
    Q('Trạm xăng là nơi để?', ['Đổ xăng cho xe', 'Khám bệnh', 'Mua sách', 'Cắt tóc'], 0, 'Trạm xăng cung cấp nhiên liệu.'),
    Q('Ở trạm xăng, hành vi nào RẤT nguy hiểm?', ['Tắt máy xe khi đổ xăng', 'Dùng lửa, hút thuốc', 'Đứng yên chờ', 'Trả tiền'], 1, 'Xăng dễ cháy nổ khi gặp lửa.'),
    Q('Khi đổ xăng, người lớn thường?', ['Bật bật lửa xem', 'Tắt máy xe', 'Đi điện thoại lung tung', 'Hút thuốc'], 1, 'Tắt máy để an toàn.'),
    Q('Em có nên chạy nhảy trong trạm xăng không?', ['Có', 'Không, rất nguy hiểm', 'Chạy thật nhanh', 'Vừa chạy vừa hát'], 1, 'Trạm xăng dễ cháy → không nô đùa.'),
    Q('Xe máy, ô tô dùng xăng để?', ['Trang trí', 'Chạy được', 'Lau bóng', 'Uống'], 1, 'Xăng là nhiên liệu cho động cơ.'),
    Q('Nhân viên trạm xăng làm việc?', ['Lúc nào cũng nguy hiểm', 'Cần được tôn trọng', 'Không quan trọng', 'Ai cũng làm được'], 1, 'Là nghề lao động hợp pháp, đáng quý.'),
  ]),

  M(15, 'An toàn giao thông địa phương', [
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Đi', 'Dừng lại', 'Chuẩn bị đi', 'Quay đầu'], 1, 'Đèn đỏ → dừng lại.'),
    Q('Đèn giao thông màu xanh nghĩa là?', ['Dừng lại', 'Được đi', 'Chuẩn bị dừng', 'Quay xe'], 1, 'Đèn xanh → được đi.'),
    Q('Khi qua đường, em nên đi ở đâu?', ['Vạch kẻ trắng dành cho người đi bộ', 'Giữa đường', 'Chéo qua đường', 'Nhắm mắt chạy qua'], 0, 'Vạch kẻ là nơi an toàn nhất.'),
    Q('Ngồi sau xe máy của bố mẹ, em phải?', ['Đội mũ bảo hiểm', 'Đứng lên', 'Thả tay đùa', 'Quay mặt ra sau'], 0, 'Đội mũ bảo hiểm bắt buộc.'),
    Q('Đi bộ trên đường có vỉa hè, em nên đi ở?', ['Vỉa hè', 'Lòng đường', 'Giữa làn xe', 'Trên dải phân cách'], 0, 'Vỉa hè dành cho người đi bộ.'),
    Q('Khi qua đường, em cần?', ['Nhìn trái – phải, không có xe mới qua', 'Vừa qua vừa nghe nhạc', 'Chạy thật nhanh', 'Nhắm mắt'], 0, 'Quan sát cẩn thận trước khi qua.'),
  ]),

  M(16, 'Đường phố ban ngày – ban đêm', [
    Q('Ban ngày đường phố thường?', ['Đông đúc xe cộ, người đi lại', 'Vắng tanh', 'Đóng cửa hoàn toàn', 'Không có ai'], 0, 'Ban ngày là giờ làm việc, đi học.'),
    Q('Ban đêm đường phố thường?', ['Ít người, ít xe hơn ban ngày', 'Đông hơn ban ngày', 'Y nguyên ban ngày', 'Đầy trẻ em chơi'], 0, 'Ban đêm mọi người về nghỉ.'),
    Q('Ban đêm, đèn đường có tác dụng?', ['Trang trí', 'Chiếu sáng để đi lại an toàn', 'Sưởi ấm', 'Làm sạch không khí'], 1, 'Đèn đường giúp nhìn rõ ban đêm.'),
    Q('Trẻ em có nên đi chơi một mình ban đêm không?', ['Nên', 'Không nên, cần có người lớn đi cùng', 'Tuỳ thích', 'Chỉ khi có bạn cùng tuổi'], 1, 'Ban đêm không an toàn cho trẻ đi một mình.'),
    Q('Đèn pha xe ô tô ban đêm để?', ['Trang trí', 'Soi đường, báo hiệu', 'Làm nóng máy', 'Chơi nhạc'], 1, 'Đèn pha chiếu sáng đường đi.'),
    Q('Khi đi bộ ban đêm, em nên mặc?', ['Quần áo tối màu', 'Quần áo sáng màu, có phản quang', 'Quần áo lẫn vào đêm', 'Không mặc gì'], 1, 'Sáng màu để người khác dễ thấy.'),
  ]),

  M(17, 'Nghề lao động phổ biến ở địa phương', [
    Q('Ở nông thôn, nghề phổ biến thường là?', ['Trồng trọt, chăn nuôi', 'Phi công', 'Phi hành gia', 'Lập trình viên'], 0, 'Nông thôn chủ yếu làm nông.'),
    Q('Ở thành phố thường có nhiều?', ['Ruộng lúa', 'Công ty, văn phòng, nhà máy', 'Đồng cỏ', 'Rừng cây'], 1, 'Thành phố là trung tâm thương mại, công nghiệp.'),
    Q('Người đánh bắt cá ở biển gọi là?', ['Ngư dân', 'Nông dân', 'Thợ may', 'Bác sĩ'], 0, 'Ngư dân làm nghề biển.'),
    Q('Người làm bánh mì, bánh ngọt gọi là?', ['Thợ làm bánh', 'Kỹ sư', 'Bác sĩ', 'Giáo viên'], 0, 'Thợ làm bánh / đầu bếp bánh.'),
    Q('Mọi nghề lao động chân chính đều?', ['Đáng quý, có ích cho xã hội', 'Vô ích', 'Chỉ một số nghề là tốt', 'Không cần thiết'], 0, 'Mọi nghề chân chính đều đáng tôn trọng.'),
    Q('Sản phẩm em ăn hàng ngày (gạo, rau) là nhờ công của ai?', ['Nông dân', 'Phi công', 'Thuỷ thủ', 'Diễn viên'], 0, 'Nông dân làm ra lương thực.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('Gia đình có 3 thế hệ gồm?', ['Ông bà – bố mẹ – con cháu', 'Bố – mẹ – em bé', 'Cô – dì – chú', 'Hàng xóm'], 0, '3 thế hệ điển hình.'),
    Q('Số điện thoại cứu hoả là?', ['113', '114', '115', '116'], 1, '114 = cứu hoả.'),
    Q('Số điện thoại cấp cứu y tế là?', ['113', '114', '115', '116'], 2, '115 = cấp cứu.'),
    Q('Đèn giao thông màu vàng nghĩa là?', ['Đi tiếp thật nhanh', 'Đi chậm lại, chuẩn bị dừng', 'Quay đầu', 'Bóp còi'], 1, 'Đèn vàng = chuẩn bị dừng.'),
    Q('Khi vào thư viện, em phải?', ['Hát to', 'Giữ trật tự', 'Chạy nhảy', 'Ăn quà'], 1, 'Thư viện cần yên tĩnh.'),
    Q('Người đứng đầu nhà trường là?', ['Bảo vệ', 'Hiệu trưởng', 'Lao công', 'Học sinh giỏi'], 1, 'Hiệu trưởng lãnh đạo trường.'),
    Q('Nơi mua bán nhiều hàng hoá nhất ở địa phương là?', ['Chợ/siêu thị', 'Bệnh viện', 'Bưu điện', 'Trường học'], 0, 'Chợ và siêu thị là nơi mua bán.'),
    Q('Khi qua đường, em nên đi vào?', ['Giữa đường', 'Vạch kẻ dành cho người đi bộ', 'Bất kỳ chỗ nào', 'Chạy ngang'], 1, 'Vạch kẻ = nơi an toàn.'),
    Q('Hành vi đúng khi gặp người lớn là?', ['Quay đi', 'Chào lễ phép', 'Trêu chọc', 'Phớt lờ'], 1, 'Lễ phép với mọi người.'),
    Q('Khi thấy chai thuốc lạ, em nên?', ['Uống thử', 'Không chạm, báo người lớn', 'Đưa em bé chơi', 'Đổ ra đất'], 1, 'Tránh ngộ độc.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — THỰC VẬT · ĐỘNG VẬT · CƠ THỂ NGƯỜI · TRÁI ĐẤT ────────────────
  M(19, 'Cây có rễ – thân – lá', [
    Q('Ba bộ phận chính của cây là?', ['Rễ – thân – lá', 'Rễ – cành – đất', 'Hoa – quả – hạt', 'Lá – gió – nắng'], 0, 'Cây gồm rễ, thân, lá là 3 bộ phận chính.'),
    Q('Bộ phận của cây nằm dưới đất, hút nước là?', ['Rễ', 'Thân', 'Lá', 'Hoa'], 0, 'Rễ hút nước và chất dinh dưỡng.'),
    Q('Bộ phận của cây nâng đỡ và đưa nước lên là?', ['Rễ', 'Thân', 'Lá', 'Quả'], 1, 'Thân nâng đỡ và vận chuyển nước.'),
    Q('Lá cây thường có màu gì?', ['Đỏ', 'Vàng', 'Xanh lục (xanh lá)', 'Đen'], 2, 'Lá thường xanh lục nhờ chất diệp lục.'),
    Q('Lá cây giúp cây?', ['Quang hợp (chế tạo thức ăn)', 'Đi lại', 'Bay', 'Hát'], 0, 'Lá quang hợp tạo chất dinh dưỡng.'),
    Q('Rễ có chức năng chính là?', ['Hút nước, giữ cây', 'Bay đi', 'Chạy', 'Đẻ con'], 0, 'Rễ hút nước và bám đất giữ cây.'),
  ]),

  M(20, 'Cây ra hoa, kết quả', [
    Q('Bộ phận nào của cây có hương thơm và sặc sỡ?', ['Hoa', 'Rễ', 'Thân', 'Lá khô'], 0, 'Hoa nhiều màu, có hương.'),
    Q('Sau khi hoa nở rồi tàn thường tạo ra?', ['Quả', 'Rễ', 'Đá', 'Khói'], 0, 'Hoa → quả.'),
    Q('Trong quả thường có?', ['Hạt', 'Lá', 'Đất', 'Đá'], 0, 'Hạt nằm trong quả để gieo trồng tiếp.'),
    Q('Hạt rơi xuống đất, gặp điều kiện tốt sẽ?', ['Mọc thành cây con', 'Bay lên trời', 'Hoá thành đá', 'Thành con vật'], 0, 'Hạt nảy mầm thành cây con.'),
    Q('Quả nào sau đây ăn được?', ['Quả cam', 'Quả độc lạ chưa biết', 'Hạt thuốc', 'Quả mọc trên cây thuốc lá'], 0, 'Quả cam là quả ăn được phổ biến.'),
    Q('Để cây ra hoa, kết quả tốt, cần?', ['Đủ nước, đủ ánh sáng, đất tốt', 'Bóng tối hoàn toàn', 'Đổ thuốc tẩy', 'Đốt gốc cây'], 0, 'Cây cần nước, ánh sáng, đất tốt.'),
  ]),

  M(21, 'Phân loại cây', [
    Q('Cây nào ưa nắng?', ['Cây lúa', 'Cây dương xỉ trong rừng tối', 'Nấm', 'Rêu trong hang'], 0, 'Lúa cần nắng nhiều.'),
    Q('Cây nào ưa râm/bóng?', ['Lúa', 'Trầu bà / dương xỉ', 'Lạc', 'Ngô'], 1, 'Trầu bà, dương xỉ sống tốt nơi ít nắng.'),
    Q('Cây gỗ là loại cây?', ['Thân cứng, to, cao', 'Thân mềm, nhỏ', 'Không có thân', 'Sống dưới nước'], 0, 'Cây gỗ thân cứng (xoan, bàng, lim).'),
    Q('Cây thân thảo là?', ['Thân mềm, nhỏ (rau, lúa, cỏ)', 'Thân cứng to', 'Thân bằng đá', 'Không có thân'], 0, 'Thân thảo mềm, vòng đời ngắn.'),
    Q('Cây nào dưới đây là cây gỗ?', ['Cây bàng', 'Rau muống', 'Cỏ may', 'Cây lúa'], 0, 'Bàng có thân gỗ to.'),
    Q('Cây nào là cây thân thảo?', ['Cây xoan', 'Cây lim', 'Cây rau cải', 'Cây mít'], 2, 'Rau cải thân mềm.'),
  ]),

  M(22, 'Cây Tết: mai, đào, quất', [
    Q('Miền Bắc Tết thường chơi hoa gì?', ['Hoa đào', 'Hoa mai', 'Hoa sen', 'Hoa cúc'], 0, 'Miền Bắc → đào hồng.'),
    Q('Miền Nam Tết thường chơi hoa gì?', ['Hoa đào', 'Hoa mai', 'Hoa hồng', 'Hoa lan'], 1, 'Miền Nam → mai vàng.'),
    Q('Quả quất chơi Tết có màu?', ['Vàng cam', 'Đen', 'Trắng', 'Xanh tím'], 0, 'Quất chín màu vàng cam, tượng trưng tài lộc.'),
    Q('Hoa đào có màu đặc trưng?', ['Hồng', 'Vàng', 'Tím đen', 'Trắng tinh'], 0, 'Đào hoa hồng (có đào trắng nhưng phổ biến là hồng).'),
    Q('Hoa mai có màu đặc trưng?', ['Vàng', 'Đỏ', 'Đen', 'Xanh'], 0, 'Mai vàng rực rỡ.'),
    Q('Cây Tết thường được trang trí trong nhà để?', ['Tạo không khí Tết, may mắn', 'Làm bữa ăn', 'Lau nhà', 'Đốt sưởi'], 0, 'Trang trí ngày Tết.'),
  ]),

  M(23, 'Động vật sống dưới nước', [
    Q('Con nào sống dưới nước?', ['Cá', 'Mèo', 'Gà', 'Chó'], 0, 'Cá sống trong nước.'),
    Q('Cá thở bằng?', ['Phổi', 'Mang', 'Da', 'Cánh'], 1, 'Cá có mang để lấy ôxy từ nước.'),
    Q('Con vật nào dưới đây sống ở biển?', ['Mực, tôm', 'Voi', 'Hươu', 'Chó'], 0, 'Mực, tôm là động vật biển.'),
    Q('Cua di chuyển bằng cách?', ['Bay', 'Bò ngang', 'Đi thẳng đứng', 'Lăn'], 1, 'Cua bò ngang là đặc điểm dễ nhận.'),
    Q('Đặc điểm chung của cá là?', ['Có vảy, có vây, sống trong nước', 'Có lông, biết bay', 'Có 4 chân', 'Có cánh'], 0, 'Cá: vảy, vây, sống dưới nước.'),
    Q('Loài nào KHÔNG sống dưới nước?', ['Tôm', 'Mực', 'Bò', 'Cá'], 2, 'Bò sống trên cạn.'),
  ]),

  M(24, 'Động vật trên cạn', [
    Q('Con nào sống trên cạn?', ['Cá', 'Mèo', 'Mực', 'Tôm'], 1, 'Mèo sống trên cạn.'),
    Q('Bò ăn gì?', ['Cỏ', 'Cá', 'Thịt sống', 'Đá'], 0, 'Bò ăn cỏ.'),
    Q('Chó là loài?', ['Vật nuôi trong nhà', 'Sống trong nước', 'Bay được', 'Có vảy như cá'], 0, 'Chó là vật nuôi quen thuộc.'),
    Q('Gà có mấy chân?', ['2 chân', '4 chân', '6 chân', '0 chân'], 0, 'Gà có 2 chân.'),
    Q('Mèo thường ăn?', ['Cá, thịt', 'Cỏ', 'Đá', 'Lá khô'], 0, 'Mèo ăn thịt, cá.'),
    Q('Đặc điểm chung của thú có vú (chó, mèo, bò) là?', ['Có lông, đẻ con, nuôi con bằng sữa', 'Có vảy, đẻ trứng', 'Biết bay', 'Sống dưới nước'], 0, 'Thú có vú: có lông, đẻ con, có sữa.'),
  ]),

  M(25, 'Động vật biết bay', [
    Q('Con nào biết bay?', ['Chim', 'Cá', 'Bò', 'Cua'], 0, 'Chim bay được nhờ cánh.'),
    Q('Chim bay được nhờ?', ['Cánh và lông vũ', 'Vảy', 'Mang', '4 chân'], 0, 'Chim có cánh phủ lông vũ.'),
    Q('Ong làm ra?', ['Mật ong', 'Tơ', 'Sữa', 'Trứng vịt'], 0, 'Ong làm mật.'),
    Q('Bướm thường hút gì từ hoa?', ['Mật hoa', 'Nước biển', 'Xăng', 'Dầu ăn'], 0, 'Bướm hút mật hoa.'),
    Q('Con nào KHÔNG bay được?', ['Chim sẻ', 'Bướm', 'Gà công nghiệp lớn', 'Ong'], 2, 'Gà thường chỉ bay rất thấp, gần như không bay.'),
    Q('Đặc điểm chung của côn trùng (ong, bướm) là?', ['Có 6 chân, thân chia đốt', 'Có 4 chân, có lông vũ', 'Có vảy', 'Đẻ con'], 0, 'Côn trùng có 6 chân.'),
  ]),

  M(26, 'Bộ máy vận động (xương + cơ)', [
    Q('Bộ máy vận động của người gồm?', ['Xương và cơ (bắp)', 'Tim và phổi', 'Dạ dày và ruột', 'Mắt và tai'], 0, 'Xương + cơ tạo nên bộ máy vận động.'),
    Q('Xương có chức năng?', ['Nâng đỡ cơ thể', 'Tiêu hoá thức ăn', 'Hít thở', 'Nhìn'], 0, 'Xương là khung nâng đỡ cơ thể.'),
    Q('Cơ (bắp) giúp em?', ['Vận động, cử động', 'Nhìn', 'Nghe', 'Ngửi'], 0, 'Cơ co giãn → cử động.'),
    Q('Để xương chắc khoẻ, em cần?', ['Uống sữa, ăn đủ chất, vận động', 'Nhịn ăn', 'Nằm cả ngày', 'Ăn nhiều đồ ngọt'], 0, 'Sữa và vận động giúp xương chắc.'),
    Q('Ngồi học sai tư thế có thể bị?', ['Cong vẹo cột sống', 'Cao thêm nhanh', 'Khoẻ hơn', 'Mọc răng nhanh'], 0, 'Sai tư thế → cong vẹo cột sống.'),
    Q('Để cơ thể khoẻ mạnh, em nên?', ['Tập thể dục đều đặn', 'Lười vận động', 'Ngồi cả ngày', 'Ăn rồi ngủ'], 0, 'Tập thể dục giúp cơ – xương khoẻ.'),
  ]),

  M(27, 'Bộ máy hô hấp (mũi – khí quản – phổi)', [
    Q('Bộ phận giúp em thở là?', ['Phổi', 'Dạ dày', 'Gan', 'Tim'], 0, 'Phổi là cơ quan hô hấp chính.'),
    Q('Không khí vào cơ thể qua đâu trước tiên?', ['Mũi', 'Tai', 'Mắt', 'Bàn chân'], 0, 'Không khí qua mũi → khí quản → phổi.'),
    Q('Đường đi của không khí khi hít vào là?', ['Mũi → khí quản → phổi', 'Mắt → tai → phổi', 'Miệng → dạ dày → phổi', 'Tai → mũi → tim'], 0, 'Đường hô hấp: mũi – khí quản – phổi.'),
    Q('Để phổi khoẻ, em nên?', ['Hít thở không khí trong lành, không hút thuốc', 'Hít khói thuốc', 'Ngồi gần đám cháy', 'Ngậm miệng cả ngày'], 0, 'Tránh khói, bụi.'),
    Q('Khi trời lạnh, em nên?', ['Mặc ấm, giữ ấm cổ – ngực', 'Cởi áo', 'Tắm nước lạnh lâu', 'Đi chân đất'], 0, 'Giữ ấm tránh bệnh hô hấp.'),
    Q('Khi hắt hơi, sổ mũi, em nên?', ['Che miệng – mũi bằng khuỷu tay/khăn', 'Hắt thẳng vào bạn', 'Không che gì', 'Hét lớn'], 0, 'Che để tránh lây bệnh cho người khác.'),
  ]),

  M(28, 'Bộ máy tiêu hoá (miệng – dạ dày – ruột)', [
    Q('Đường đi của thức ăn là?', ['Miệng → dạ dày → ruột', 'Mũi → phổi → ruột', 'Tai → mắt → miệng', 'Tay → chân → bụng'], 0, 'Miệng – thực quản – dạ dày – ruột.'),
    Q('Bộ phận nhai và nghiền thức ăn đầu tiên là?', ['Miệng (răng)', 'Dạ dày', 'Ruột', 'Gan'], 0, 'Răng nhai nhỏ thức ăn.'),
    Q('Dạ dày có chức năng?', ['Co bóp, nghiền và tiêu hoá thức ăn', 'Lọc máu', 'Thở', 'Bơm máu'], 0, 'Dạ dày tiêu hoá thức ăn.'),
    Q('Để tiêu hoá tốt, em nên?', ['Ăn chậm, nhai kỹ', 'Nuốt vội', 'Vừa ăn vừa chạy', 'Bỏ bữa'], 0, 'Nhai kỹ giúp dễ tiêu.'),
    Q('Sau khi ăn no, em KHÔNG nên?', ['Nghỉ ngơi nhẹ', 'Chạy nhảy mạnh ngay', 'Đi bộ chậm', 'Đọc sách'], 1, 'Vận động mạnh sau ăn dễ đau bụng.'),
    Q('Để tránh đau bụng, em nên?', ['Ăn chín, uống sôi, rửa tay trước khi ăn', 'Ăn thức ăn ôi thiu', 'Không rửa tay', 'Uống nước lã'], 0, 'Ăn sạch, uống sạch, tay sạch.'),
  ]),

  M(29, 'Vệ sinh răng miệng', [
    Q('Em nên đánh răng mấy lần mỗi ngày?', ['1 lần', 'Ít nhất 2 lần (sáng và tối)', '5 lần', '0 lần'], 1, 'Sáng sau ngủ dậy và tối trước khi ngủ.'),
    Q('Đánh răng đúng cách giúp?', ['Răng chắc khoẻ, không sâu', 'Răng vàng đi', 'Răng rụng nhanh', 'Hôi miệng hơn'], 0, 'Phòng sâu răng, viêm lợi.'),
    Q('Ăn nhiều đồ ngọt mà không vệ sinh có thể bị?', ['Sâu răng', 'Mọc cánh', 'Cao thêm nhanh', 'Khoẻ hơn'], 0, 'Đường + vi khuẩn → sâu răng.'),
    Q('Nên thay bàn chải đánh răng?', ['1 năm 1 lần', '3 tháng 1 lần', 'Cả đời 1 cái', 'Mỗi ngày 1 cái'], 1, 'Khoảng 3 tháng thay 1 lần.'),
    Q('Khi đau răng, em nên?', ['Báo bố mẹ, đến nha sĩ', 'Nhịn cho qua', 'Tự nhổ răng', 'Ăn thật nhiều đường'], 0, 'Nha sĩ khám và chữa răng.'),
    Q('Để giữ răng đẹp, em nên?', ['Đánh răng + súc miệng + hạn chế kẹo', 'Ăn nhiều kẹo dẻo', 'Không đánh răng', 'Cắn vật cứng'], 0, 'Vệ sinh + ăn uống hợp lý.'),
  ]),

  M(30, 'Vệ sinh tay – phòng bệnh', [
    Q('Khi nào em cần rửa tay?', ['Trước khi ăn, sau khi đi vệ sinh', 'Chỉ khi tay quá bẩn nhìn thấy', 'Cả tuần 1 lần', 'Không cần'], 0, 'Trước ăn, sau vệ sinh, sau chơi.'),
    Q('Rửa tay bằng gì là tốt nhất?', ['Nước sạch + xà phòng', 'Đất', 'Cát', 'Nước lã đục'], 0, 'Xà phòng diệt vi khuẩn.'),
    Q('Rửa tay đủ lâu khoảng?', ['1 giây', '20 giây (hát bài Happy Birthday 2 lần)', '5 phút liên tục', '1 giờ'], 1, 'Khoảng 20 giây với xà phòng.'),
    Q('Tay bẩn có thể mang vào miệng?', ['Vi khuẩn, giun sán', 'Vàng', 'Đường', 'Không gì cả'], 0, 'Tay bẩn → bệnh tiêu chảy, giun sán.'),
    Q('Khi ho, hắt hơi em nên?', ['Che miệng – mũi', 'Hắt vào bạn', 'Không làm gì', 'Quay mặt lên trời'], 0, 'Tránh lây bệnh hô hấp.'),
    Q('Hành động giúp phòng bệnh tốt là?', ['Rửa tay, ăn chín, uống sôi', 'Ăn đồ ôi', 'Không tắm', 'Đi chân đất nơi bẩn'], 0, 'Vệ sinh cá nhân giúp phòng bệnh.'),
  ]),

  M(31, 'Trái Đất hình cầu', [
    Q('Trái Đất có hình?', ['Vuông', 'Cầu (tròn như quả bóng)', 'Tam giác', 'Phẳng như tờ giấy'], 1, 'Trái Đất hình cầu.'),
    Q('Trái Đất quay quanh?', ['Mặt Trời', 'Mặt Trăng', 'Sao Hoả', 'Trên đỉnh đầu em'], 0, 'Trái Đất quay quanh Mặt Trời.'),
    Q('Trên Trái Đất có gì cho con người sinh sống?', ['Đất, nước, không khí', 'Toàn lửa', 'Toàn đá', 'Không có gì'], 0, 'Trái Đất có điều kiện cho sự sống.'),
    Q('Phần lớn bề mặt Trái Đất được bao phủ bởi?', ['Đất', 'Nước (biển, đại dương)', 'Đá lửa', 'Băng đá hoàn toàn'], 1, 'Khoảng 70% bề mặt là nước.'),
    Q('Em đang đứng trên?', ['Trái Đất', 'Mặt Trăng', 'Sao Kim', 'Mặt Trời'], 0, 'Tất cả con người đều sống trên Trái Đất.'),
    Q('Một quả địa cầu là mô hình của?', ['Trái Đất', 'Mặt Trời', 'Quả bóng đá', 'Quả táo'], 0, 'Địa cầu mô phỏng Trái Đất.'),
  ]),

  M(32, 'Mặt Trời mọc Đông – lặn Tây', [
    Q('Mặt Trời mọc ở hướng nào?', ['Đông', 'Tây', 'Nam', 'Bắc'], 0, 'Mặt Trời mọc ở phía Đông.'),
    Q('Mặt Trời lặn ở hướng nào?', ['Đông', 'Tây', 'Nam', 'Bắc'], 1, 'Mặt Trời lặn ở phía Tây.'),
    Q('Buổi sáng nhìn Mặt Trời, em đang nhìn về hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 0, 'Sáng Mặt Trời ở phía Đông.'),
    Q('Buổi chiều tối Mặt Trời ở hướng?', ['Đông', 'Tây', 'Trên đỉnh đầu', 'Dưới chân'], 1, 'Chiều Mặt Trời ngả về Tây.'),
    Q('Mặt Trời mang lại cho Trái Đất?', ['Ánh sáng và hơi ấm', 'Bóng tối', 'Mưa đá', 'Tuyết'], 0, 'Mặt Trời chiếu sáng và sưởi ấm.'),
    Q('Em có nên nhìn thẳng vào Mặt Trời không?', ['Có, để ngắm cho rõ', 'Không, sẽ hỏng mắt', 'Nhìn lâu mới tốt', 'Nhìn 1 mắt thôi'], 1, 'Tia sáng mạnh hại mắt.'),
  ]),

  M(33, 'Mặt Trăng tròn – khuyết', [
    Q('Mặt Trăng nhìn rõ nhất vào?', ['Ban ngày', 'Ban đêm', 'Lúc mưa to', 'Lúc bão'], 1, 'Đêm tối, Mặt Trăng dễ nhìn.'),
    Q('Mặt Trăng quay quanh?', ['Mặt Trời', 'Trái Đất', 'Sao Hoả', 'Em'], 1, 'Mặt Trăng là vệ tinh của Trái Đất.'),
    Q('Trong 1 tháng âm lịch, Mặt Trăng tròn nhất vào?', ['Mùng 1', 'Ngày Rằm (15)', 'Mùng 7', 'Cuối tháng'], 1, 'Trăng Rằm tròn và sáng nhất.'),
    Q('Trăng khuyết là khi?', ['Trăng tròn đầy', 'Trăng chỉ thấy một phần', 'Không có trăng', 'Trăng vuông'], 1, 'Trăng khuyết = chỉ thấy 1 phần.'),
    Q('Đêm không trăng (mùng 1 âm) là vì?', ['Trăng bị giấu, Mặt Trăng nằm cùng phía Mặt Trời', 'Trăng vỡ', 'Trăng đi du lịch', 'Trái Đất biến mất'], 0, 'Trăng non, gần như không thấy.'),
    Q('Tết Trung thu rơi vào?', ['Rằm tháng Tám âm lịch', 'Rằm tháng Giêng', 'Mùng 1 Tết', 'Tháng 12 dương lịch'], 0, '15/8 âm lịch là Trung thu.'),
  ]),

  M(34, 'Các vì sao đêm', [
    Q('Trên bầu trời đêm có rất nhiều?', ['Ngôi sao', 'Con cá', 'Cái cây', 'Toà nhà'], 0, 'Sao là các thiên thể phát sáng.'),
    Q('Ngôi sao gần Trái Đất nhất là?', ['Mặt Trời', 'Sao Bắc Đẩu', 'Sao Hôm', 'Sao Mai'], 0, 'Mặt Trời là 1 ngôi sao gần nhất.'),
    Q('Vì sao ban ngày em không thấy sao?', ['Vì có ánh sáng Mặt Trời quá mạnh', 'Vì sao biến mất', 'Vì sao đi ngủ', 'Vì Trái Đất quay'], 0, 'Ánh sáng Mặt Trời át sáng các sao.'),
    Q('Sao chổi có đặc điểm?', ['Có đuôi sáng kéo dài', 'Hình vuông', 'Phát ra tiếng', 'Nóng như Mặt Trời'], 0, 'Sao chổi có đuôi dài đặc trưng.'),
    Q('Để quan sát sao tốt, em nên ở?', ['Nơi tối, ít đèn', 'Giữa phố đèn sáng', 'Trong nhà đóng cửa', 'Dưới gầm bàn'], 0, 'Ít ô nhiễm ánh sáng → thấy sao rõ.'),
    Q('Khoa học nghiên cứu các vì sao gọi là?', ['Thiên văn', 'Sinh học', 'Toán học', 'Vẽ tranh'], 0, 'Thiên văn học nghiên cứu vũ trụ.'),
  ]),

  M(35, 'Phương hướng cơ bản', [
    Q('Bốn phương hướng chính là?', ['Đông – Tây – Nam – Bắc', 'Trên – Dưới – Trái – Phải', 'Trước – Sau – Trên – Dưới', 'Đỏ – Vàng – Xanh – Tím'], 0, '4 hướng chính: Đông, Tây, Nam, Bắc.'),
    Q('Mặt Trời mọc ở hướng Đông, vậy nếu em quay mặt về phía Mặt Trời mọc, sau lưng em là?', ['Tây', 'Đông', 'Nam', 'Bắc'], 0, 'Đối diện Đông là Tây.'),
    Q('Khi em mặt hướng Đông, tay phải em chỉ về?', ['Nam', 'Bắc', 'Đông', 'Tây'], 0, 'Mặt Đông, sau lưng Tây, phải Nam, trái Bắc.'),
    Q('Dụng cụ giúp xác định phương hướng là?', ['La bàn', 'Thước kẻ', 'Máy ảnh', 'Đồng hồ báo thức'], 0, 'La bàn chỉ phương hướng.'),
    Q('Kim la bàn thường chỉ về hướng?', ['Bắc', 'Nam', 'Đông', 'Tây'], 0, 'Kim nam châm chỉ hướng Bắc.'),
    Q('Đối diện hướng Nam là?', ['Đông', 'Tây', 'Bắc', 'Lên'], 2, 'Nam ↔ Bắc đối diện.'),
  ]),

  M(36, 'Ôn tập cuối năm', [
    Q('Ba bộ phận chính của cây là?', ['Rễ – thân – lá', 'Hoa – quả – hạt', 'Đất – nước – gió', 'Tay – chân – đầu'], 0, '3 bộ phận chính cây xanh.'),
    Q('Rễ cây có chức năng?', ['Hút nước, giữ cây', 'Quang hợp', 'Bay', 'Thở thay phổi'], 0, 'Rễ hút nước và bám đất.'),
    Q('Phổi giúp em?', ['Thở (hô hấp)', 'Tiêu hoá', 'Nhìn', 'Đi lại'], 0, 'Phổi là cơ quan hô hấp.'),
    Q('Tim trong cơ thể có chức năng?', ['Bơm máu đi nuôi cơ thể', 'Tiêu hoá', 'Hô hấp', 'Vận động'], 0, 'Tim bơm máu khắp cơ thể.'),
    Q('Trái Đất có hình?', ['Cầu', 'Vuông', 'Phẳng', 'Tam giác'], 0, 'Trái Đất hình cầu.'),
    Q('Mặt Trời mọc – lặn ở hướng?', ['Mọc Đông – lặn Tây', 'Mọc Tây – lặn Đông', 'Mọc Bắc – lặn Nam', 'Cố định một chỗ'], 0, 'Đông mọc – Tây lặn.'),
    Q('Cá thở bằng?', ['Mang', 'Phổi', 'Da', 'Cánh'], 0, 'Cá có mang.'),
    Q('1 tuần có?', ['5 ngày', '7 ngày', '10 ngày', '12 ngày'], 1, '1 tuần = 7 ngày.'),
    Q('1 năm có?', ['10 tháng', '12 tháng', '15 tháng', '7 tháng'], 1, '1 năm = 12 tháng.'),
    Q('Số điện thoại cấp cứu y tế là?', ['113', '114', '115', '116'], 2, '115 = cấp cứu.'),
  ], { difficulty: 3 }),
];

export const P2TNXH_SCENARIOS = indexBy(P2TNXH_WEEKS);
