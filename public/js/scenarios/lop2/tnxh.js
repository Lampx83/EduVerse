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
    Q('Trong gia đình, thế hệ lớn tuổi nhất thường là?', ['Bố mẹ', 'Chú, dì', 'Anh chị', 'Ông bà'], 3, 'Ông bà là thế hệ đi trước, lớn tuổi nhất.'),
    Q('Bố mẹ của em thuộc thế hệ thứ mấy nếu tính từ ông bà?', ['Thứ ba', 'Thứ hai', 'Thứ tư', 'Thứ nhất'], 1, 'Ông bà = thế hệ 1, bố mẹ = thế hệ 2, em = thế hệ 3.'),
    Q('Gia đình có ông bà, bố mẹ và các con sống cùng nhau gọi là gia đình mấy thế hệ?', ['3 thế hệ', '4 thế hệ', '2 thế hệ', '1 thế hệ'], 0, 'Có 3 thế hệ: ông bà – bố mẹ – con cháu.'),
    Q('Em gọi bố của bố em là gì?', ['Ông ngoại', 'Ông nội', 'Anh trai bố', 'Chú ruột'], 1, 'Bố của bố là ông nội.'),
    Q('Em gọi mẹ của mẹ em là gì?', ['Bà nội', 'Bà ngoại', 'Cô', 'Dì ruột'], 1, 'Mẹ của mẹ là bà ngoại.'),
    Q('Việc làm thể hiện kính trọng ông bà là?', ['Cãi lại ông bà', 'Mời ông bà ăn cơm trước', 'Bỏ đi chơi khi ông bà gọi', 'Đòi quà liên tục'], 1, 'Mời ông bà ăn trước thể hiện lễ phép, kính trọng.'),
  ]),

  M(2, 'Nghề nghiệp của người thân', [
    Q('Người chữa bệnh cho bệnh nhân là?', ['Nông dân', 'Công an', 'Giáo viên', 'Bác sĩ'], 3, 'Bác sĩ làm việc tại bệnh viện, trạm y tế.'),
    Q('Người dạy học cho em ở trường là?', ['Đầu bếp', 'Giáo viên', 'Bác sĩ', 'Tài xế'], 1, 'Giáo viên (thầy/cô) dạy học.'),
    Q('Người trồng lúa, rau ngoài đồng là?', ['Thợ may', 'Ngư dân đánh cá', 'Nông dân', 'Công nhân'], 2, 'Nông dân làm nghề nông.'),
    Q('Người lái xe ô tô chở khách là?', ['Thuỷ thủ', 'Phi công', 'Tài xế', 'Bộ đội'], 2, 'Tài xế lái xe.'),
    Q('Khi được hỏi về nghề của bố mẹ, em nên?', ['Không trả lời', 'Nói dối nghề khác', 'Trả lời lễ phép, rõ ràng', 'Bỏ chạy'], 2, 'Trả lời lễ phép, trung thực.'),
    Q('Mọi nghề nghiệp lương thiện đều?', ['Chỉ nghề bác sĩ là tốt', 'Không cần thiết', 'Đáng quý, đáng trân trọng', 'Nghề nào cũng xấu'], 2, 'Mọi nghề chân chính đều đáng quý.'),
  ]),

  M(3, 'Sinh hoạt gia đình hàng ngày', [
    Q('Buổi sáng trước khi đi học em nên làm gì?', ['Đánh răng, rửa mặt, ăn sáng', 'Chơi game', 'Xem TV cả buổi', 'Ngủ tiếp'], 0, 'Vệ sinh và ăn sáng đầy đủ.'),
    Q('Bữa cơm gia đình thường có mấy bữa chính trong ngày?', ['2 bữa', '5 bữa', '1 bữa', '3 bữa'], 3, 'Sáng – trưa – tối: 3 bữa chính.'),
    Q('Việc em có thể giúp đỡ bố mẹ ở nhà là?', ['Quét nhà, dọn bàn ăn', 'Sửa điện', 'Lái xe máy', 'Nấu ăn bằng bếp gas một mình'], 0, 'Việc nhẹ phù hợp lứa tuổi.'),
    Q('Trẻ em lớp 2 nên ngủ mỗi ngày khoảng mấy giờ?', ['5–6 giờ', '9–10 giờ', '3–4 giờ', '15 giờ'], 1, 'Trẻ tiểu học cần ngủ 9–10 giờ/ngày.'),
    Q('Sau khi ăn xong, em nên?', ['Bỏ bát đũa ngổn ngang', 'Cảm ơn và dọn bát của mình', 'Đòi ăn thêm bánh kẹo', 'Chạy đi xem TV ngay'], 1, 'Lễ phép cảm ơn và phụ dọn bàn.'),
    Q('Hoạt động nào KHÔNG phù hợp trong sinh hoạt gia đình lành mạnh?', ['Cãi nhau to tiếng', 'Cùng trò chuyện', 'Cùng ăn cơm', 'Cùng xem phim cuối tuần'], 0, 'Cãi nhau làm mất hoà khí gia đình.'),
  ]),

  M(4, 'An toàn ở nhà (1) — Tránh điện, bếp lửa', [
    Q('Hành động nguy hiểm cần TRÁNH ở nhà là?', ['Cắm ngón tay vào ổ điện', 'Rửa tay sạch', 'Tưới cây', 'Đọc sách'], 0, 'Chọc vào ổ điện có thể bị điện giật.'),
    Q('Khi tay ướt, em có nên chạm vào ổ điện không?', ['Chỉ chạm 1 lần', 'Không, rất nguy hiểm', 'Có, không sao', 'Có, nếu lau khô tay sau'], 1, 'Nước dẫn điện → dễ bị giật.'),
    Q('Khi bếp gas đang cháy, em nên?', ['Lại gần xem cho rõ', 'Đứng xa, tránh chạm vào', 'Ném giấy vào lửa', 'Đùa nghịch quanh bếp'], 1, 'Đứng xa để tránh bỏng và cháy nổ.'),
    Q('Thấy nồi nước sôi trên bếp, em làm gì?', ['Đậy nắp thật chặt rồi để đó', 'Báo người lớn, không tự ý chạm', 'Tự bê xuống', 'Đổ tay vào thử'], 1, 'Trẻ em không tự bê nồi nóng.'),
    Q('Nếu thấy có khói, có lửa to ở nhà, em phải?', ['Đóng kín cửa lại', 'Trốn dưới gầm giường', 'Tiếp tục chơi', 'Hô lớn báo người lớn, chạy ra ngoài'], 3, 'Báo người lớn và thoát ra nơi an toàn.'),
    Q('Số điện thoại gọi cứu hoả ở Việt Nam là?', ['116', '115', '113', '114'], 3, '114 là số cứu hoả; 113 công an, 115 cấp cứu.'),
  ]),

  M(5, 'An toàn ở nhà (2) — Phòng tránh ngộ độc', [
    Q('Khi thấy chai thuốc lạ, em có nên uống thử không?', ['Có, vì tò mò', 'Không, rất nguy hiểm', 'Uống ít thôi', 'Chia bạn cùng uống'], 1, 'Có thể là thuốc, hoá chất gây ngộ độc.'),
    Q('Chai nước rửa chén, thuốc tẩy nên để ở đâu?', ['Trên bàn ăn', 'Cạnh giường ngủ', 'Nơi xa tầm tay trẻ em', 'Trong tủ lạnh chung với đồ ăn'], 2, 'Để xa tầm với trẻ, có nắp đậy.'),
    Q('Trước khi ăn trái cây, em nên?', ['Lau qua áo', 'Để nguyên đất cát', 'Rửa sạch dưới vòi nước', 'Ăn ngay cho nhanh'], 2, 'Rửa sạch để tránh ngộ độc, vi khuẩn.'),
    Q('Thức ăn có mùi lạ, ôi thiu thì em nên?', ['Cho em bé ăn thử', 'Cất đi mai ăn', 'Ăn cố cho hết', 'Bỏ đi, không ăn'], 3, 'Thức ăn ôi thiu gây ngộ độc.'),
    Q('Khi nghi ngờ ai đó bị ngộ độc, cần?', ['Để mặc', 'Cho uống thêm thuốc lạ', 'Cười đùa', 'Báo người lớn, gọi 115'], 3, '115 là số cấp cứu.'),
    Q('Đồ ăn còn nóng, em nên?', ['Đổ vào miệng cho nhanh', 'Bốc tay ăn ngay', 'Cho vào tủ lạnh ngay khi nóng', 'Đợi nguội bớt mới ăn'], 3, 'Tránh bỏng miệng.'),
  ]),

  M(6, 'Trường học của em', [
    Q('Em đang học lớp mấy?', ['Lớp 2', 'Lớp 4', 'Lớp 3', 'Lớp 1'], 0, 'Sách này dành cho lớp 2.'),
    Q('Người dạy lớp em hàng ngày gọi là?', ['Lao công', 'Hiệu trưởng', 'Bảo vệ', 'Giáo viên chủ nhiệm'], 3, 'GVCN trực tiếp dạy và quản lớp.'),
    Q('Khi gặp thầy cô, em nên?', ['Cười to', 'Quay đi', 'Chạy đi chỗ khác', 'Chào lễ phép'], 3, 'Chào thầy cô là lễ phép.'),
    Q('Trong lớp học có gì?', ['Giường ngủ', 'Bếp ăn', 'Bể bơi', 'Bảng, bàn, ghế, sách vở'], 3, 'Đó là đồ dùng cơ bản trong lớp.'),
    Q('Khi vào lớp muộn, em nên?', ['Đứng ngoài cả tiết', 'Lặng lẽ vào không nói gì', 'Chạy thẳng vào chỗ', 'Xin phép thầy cô rồi vào'], 3, 'Xin phép thể hiện lễ phép.'),
    Q('Trường học là nơi để em?', ['Ngủ cả ngày', 'Chỉ ăn uống', 'Chỉ xem TV', 'Học tập, vui chơi cùng bạn bè'], 3, 'Học và rèn luyện toàn diện.'),
  ]),

  M(7, 'Các phòng chức năng trong trường', [
    Q('Nơi em mượn sách đọc ở trường là?', ['Phòng bảo vệ', 'Phòng y tế', 'Nhà vệ sinh', 'Thư viện'], 3, 'Thư viện cho mượn sách.'),
    Q('Khi bị đau bụng ở trường, em đến đâu?', ['Sân bóng', 'Thư viện', 'Phòng y tế', 'Phòng họp'], 2, 'Phòng y tế chăm sóc khi đau ốm.'),
    Q('Phòng học môn Tin học có gì đặc biệt?', ['Có bể cá', 'Có giường', 'Có máy tính', 'Có lò vi sóng'], 2, 'Phòng Tin có nhiều máy tính.'),
    Q('Khu vực sân trường dùng để?', ['Chào cờ, vui chơi', 'Tắm rửa', 'Học bài trong giờ học', 'Nấu ăn'], 0, 'Sân để chào cờ và sinh hoạt ngoài trời.'),
    Q('Phòng thể chất (thể dục) dùng để?', ['Học toán', 'Học hát', 'Vẽ tranh', 'Tập thể dục, vận động'], 3, 'Phòng GDTC để vận động.'),
    Q('Khi vào thư viện, em phải?', ['Nói to, cười lớn', 'Giữ trật tự', 'Chạy nhảy', 'Ăn uống'], 1, 'Thư viện cần yên tĩnh.'),
  ]),

  M(8, 'Cán bộ, nhân viên nhà trường', [
    Q('Người đứng đầu nhà trường là?', ['Hiệu trưởng', 'Học sinh', 'Bảo vệ', 'Lao công'], 0, 'Hiệu trưởng quản lý nhà trường.'),
    Q('Người gác cổng, đảm bảo an ninh trường là?', ['Giáo viên', 'Hiệu phó', 'Bảo vệ', 'Đầu bếp'], 2, 'Bảo vệ trông coi trường.'),
    Q('Người dọn dẹp vệ sinh trường là?', ['Tài xế', 'Bác sĩ', 'Phi công', 'Lao công'], 3, 'Lao công giữ trường sạch sẽ.'),
    Q('Người nấu ăn cho học sinh bán trú là?', ['Nhân viên cấp dưỡng', 'Giáo viên Toán', 'Thư ký', 'Bảo vệ'], 0, 'Cấp dưỡng phụ trách bếp ăn.'),
    Q('Khi gặp bác bảo vệ, em nên?', ['Cãi nhau', 'Trêu chọc', 'Phớt lờ', 'Chào hỏi lễ phép'], 3, 'Tôn trọng mọi người trong trường.'),
    Q('Ai trong trường cũng?', ['Có công việc riêng quan trọng', 'Chỉ hiệu trưởng có ích', 'Không cần thiết', 'Chỉ thầy cô là quan trọng'], 0, 'Mỗi người một việc, đều quan trọng.'),
  ]),

  M(9, 'Bạn bè trong lớp', [
    Q('Khi bạn bị ngã, em nên?', ['Cười nhạo', 'Chụp ảnh trêu', 'Đến đỡ bạn, hỏi thăm', 'Giả vờ không nhìn thấy'], 2, 'Quan tâm bạn khi gặp khó khăn.'),
    Q('Khi bạn không có bút, em có?', ['Cười bạn', 'Mách cô', 'Giấu bút đi', 'Cho bạn mượn'], 3, 'Chia sẻ thể hiện tình bạn.'),
    Q('Hành động thể hiện đoàn kết là?', ['Đánh nhau', 'Cãi nhau', 'Bỏ rơi bạn yếu', 'Cùng làm việc nhóm'], 3, 'Đoàn kết là cùng nhau cố gắng.'),
    Q('Khi không đồng ý với bạn, em nên?', ['Đánh bạn', 'Nói chuyện ôn tồn', 'Không nói gì rồi giận', 'Mách phụ huynh ngay'], 1, 'Trao đổi nhẹ nhàng để hiểu nhau.'),
    Q('Một người bạn tốt là người?', ['Biết chia sẻ, giúp đỡ', 'Hay đòi quà', 'Hay nói xấu', 'Hay bắt nạt bạn yếu'], 0, 'Bạn tốt giúp đỡ nhau cùng tiến bộ.'),
    Q('Trong lớp em có bạn khuyết tật, em nên?', ['Tránh xa', 'Yêu thương, giúp đỡ', 'Cười nhạo', 'Trêu chọc'], 1, 'Yêu thương bạn có hoàn cảnh khó khăn.'),
  ]),

  M(10, 'Cộng đồng địa phương', [
    Q('Nơi em sinh sống cùng nhiều gia đình khác gọi là?', ['Trường học', 'Siêu thị', 'Bệnh viện', 'Xóm/phường'], 3, 'Xóm/làng/phường là cộng đồng dân cư.'),
    Q('Hàng xóm là?', ['Người ở nhà bên cạnh', 'Người bán hàng', 'Người trong lớp', 'Người ở rất xa'], 0, 'Hàng xóm là người sống gần nhà.'),
    Q('Khi gặp hàng xóm, em nên?', ['Quát to', 'Phớt lờ', 'Trốn đi', 'Chào hỏi lễ phép'], 3, 'Chào hỏi tạo quan hệ tốt.'),
    Q('Nhà văn hoá thôn/phường dùng để?', ['Nấu ăn riêng', 'Họp dân, sinh hoạt cộng đồng', 'Để xe máy', 'Chỉ dành cho cán bộ thôn'], 1, 'Nơi sinh hoạt chung của cộng đồng.'),
    Q('Khi có lễ hội ở địa phương, em nên?', ['Phá hỏng đồ', 'Chen lấn xô đẩy', 'Ở nhà cả ngày', 'Tham gia với gia đình'], 3, 'Lễ hội giúp gắn kết cộng đồng.'),
    Q('Việc làm góp phần xây dựng cộng đồng đẹp là?', ['Viết bậy lên tường', 'Vứt rác bừa bãi', 'Giữ vệ sinh chung', 'Phá cây xanh'], 2, 'Mỗi người sạch → cộng đồng sạch.'),
  ]),

  M(11, 'Hoạt động mua bán ở chợ/siêu thị', [
    Q('Nơi có nhiều người bán nhiều loại hàng tươi sống là?', ['Chợ', 'Trường học', 'Thư viện', 'Bệnh viện'], 0, 'Chợ là nơi mua bán hàng hoá.'),
    Q('Ở siêu thị, em chọn hàng rồi đem ra đâu để trả tiền?', ['Nhà vệ sinh', 'Kho hàng', 'Quầy thu ngân', 'Cửa ra'], 2, 'Quầy thu ngân (tính tiền).'),
    Q('Khi mua hàng, em cần?', ['Lấy không cần trả tiền', 'Trả đúng số tiền', 'Đòi giảm thật rẻ', 'Ăn cắp'], 1, 'Trao đổi mua – bán bằng tiền.'),
    Q('Khi đi chợ cùng mẹ, em nên?', ['Nghịch hàng hoá', 'Đi cạnh mẹ, không lạc', 'Tự đi một mình về', 'Chạy lung tung'], 1, 'Đi cạnh người lớn để an toàn.'),
    Q('Ở siêu thị, hàng hoá thường được?', ['Để dưới đất', 'Sắp xếp theo loại trên kệ', 'Bày lung tung', 'Để ngoài trời mưa'], 1, 'Sắp xếp gọn gàng, dễ tìm.'),
    Q('Khi nhận tiền thừa, em nên?', ['Vứt đi', 'Bỏ túi không nói', 'Đòi thêm', 'Đếm lại và cảm ơn'], 3, 'Đếm lại và cảm ơn lịch sự.'),
  ]),

  M(12, 'Bưu điện và ngân hàng', [
    Q('Bưu điện làm công việc gì?', ['Bán rau', 'Khám bệnh', 'Dạy học', 'Gửi thư, bưu phẩm'], 3, 'Bưu điện chuyển thư, bưu kiện.'),
    Q('Khi muốn gửi thư cho người thân ở xa, em đến?', ['Bưu điện', 'Trường học', 'Bệnh viện', 'Trạm xăng'], 0, 'Bưu điện chuyển thư đi xa.'),
    Q('Ngân hàng là nơi để?', ['Học tiếng Anh', 'Mua rau', 'Gửi tiền, vay tiền', 'Chữa bệnh'], 2, 'Ngân hàng nhận giữ tiền, cho vay.'),
    Q('Khi vào ngân hàng cùng bố mẹ, em nên?', ['Mở tủ tự ý', 'Ngồi yên, giữ trật tự', 'Chạy nhảy ồn ào', 'Khóc đòi quà'], 1, 'Giữ trật tự nơi công cộng.'),
    Q('Người làm việc ở ngân hàng giao dịch với khách là?', ['Giao dịch viên', 'Nông dân', 'Tài xế', 'Bác sĩ'], 0, 'Giao dịch viên hỗ trợ khách.'),
    Q('Tiền em tiết kiệm có thể gửi vào đâu để an toàn?', ['Ngân hàng', 'Đốt đi', 'Gầm giường', 'Trên đường'], 0, 'Gửi ngân hàng an toàn, có lãi.'),
  ]),

  M(13, 'Trạm y tế xã/phường', [
    Q('Khi bị ốm nhẹ ở địa phương, em đến đâu?', ['Bưu điện', 'Trạm y tế xã/phường', 'Trường học', 'Hiệu thuốc tự mua thuốc uống'], 1, 'Trạm y tế khám bệnh ban đầu.'),
    Q('Người khám bệnh ở trạm y tế là?', ['Giáo viên', 'Bác sĩ, y tá', 'Lao công', 'Tài xế'], 1, 'Bác sĩ và nhân viên y tế.'),
    Q('Trẻ em đi tiêm phòng ở đâu gần nhất?', ['Siêu thị', 'Bưu điện', 'Công viên', 'Trạm y tế'], 3, 'Trạm y tế làm công tác tiêm chủng.'),
    Q('Tiêm phòng giúp em?', ['Phòng tránh bệnh', 'Không cần ăn', 'Bay được', 'Lớn nhanh tức thời'], 0, 'Vắc-xin giúp phòng bệnh.'),
    Q('Khi đến trạm y tế, em nên?', ['Cắn bác sĩ', 'Khóc lóc ầm ĩ', 'Chạy ra ngoài', 'Bình tĩnh, nghe lời bác sĩ'], 3, 'Hợp tác để được khám tốt.'),
    Q('Số điện thoại cấp cứu ở Việt Nam là?', ['113', '119', '114', '115'], 3, '115 là số cấp cứu y tế.'),
  ]),

  M(14, 'Trạm xăng', [
    Q('Trạm xăng là nơi để?', ['Cắt tóc', 'Mua sách', 'Đổ xăng cho xe', 'Khám bệnh'], 2, 'Trạm xăng cung cấp nhiên liệu.'),
    Q('Ở trạm xăng, hành vi nào RẤT nguy hiểm?', ['Tắt máy xe khi đổ xăng', 'Dùng lửa, hút thuốc', 'Trả tiền', 'Đứng yên chờ'], 1, 'Xăng dễ cháy nổ khi gặp lửa.'),
    Q('Khi đổ xăng, người lớn thường?', ['Đi điện thoại lung tung', 'Hút thuốc', 'Tắt máy xe', 'Bật bật lửa xem'], 2, 'Tắt máy để an toàn.'),
    Q('Em có nên chạy nhảy trong trạm xăng không?', ['Vừa chạy vừa hát', 'Có, nếu ở xa cây xăng', 'Không, rất nguy hiểm', 'Chạy thật nhanh'], 2, 'Trạm xăng dễ cháy → không nô đùa.'),
    Q('Xe máy, ô tô dùng xăng để?', ['Chạy được', 'Trang trí', 'Lau bóng', 'Làm sạch động cơ'], 0, 'Xăng là nhiên liệu cho động cơ.'),
    Q('Nhân viên trạm xăng làm việc?', ['Ai cũng làm được', 'Không quan trọng bằng nghề khác', 'Cần được tôn trọng', 'Lúc nào cũng nguy hiểm'], 2, 'Là nghề lao động hợp pháp, đáng quý.'),
  ]),

  M(15, 'An toàn giao thông địa phương', [
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Dừng lại', 'Quay đầu', 'Chuẩn bị đi', 'Đi nhanh qua ngã tư'], 0, 'Đèn đỏ → dừng lại.'),
    Q('Đèn giao thông màu xanh nghĩa là?', ['Chuẩn bị dừng', 'Được đi', 'Quay xe', 'Dừng lại'], 1, 'Đèn xanh → được đi.'),
    Q('Khi qua đường, em nên đi ở đâu?', ['Giữa đường', 'Chéo qua đường', 'Vạch kẻ trắng dành cho người đi bộ', 'Nhắm mắt chạy qua'], 2, 'Vạch kẻ là nơi an toàn nhất.'),
    Q('Ngồi sau xe máy của bố mẹ, em phải?', ['Thả tay đùa', 'Đội mũ bảo hiểm', 'Quay mặt ra sau', 'Đứng lên'], 1, 'Đội mũ bảo hiểm bắt buộc.'),
    Q('Đi bộ trên đường có vỉa hè, em nên đi ở?', ['Lòng đường', 'Trên dải phân cách', 'Vỉa hè', 'Giữa làn xe'], 2, 'Vỉa hè dành cho người đi bộ.'),
    Q('Khi qua đường, em cần?', ['Vừa qua vừa nghe nhạc', 'Chạy thật nhanh', 'Nhắm mắt', 'Nhìn trái – phải, không có xe mới qua'], 3, 'Quan sát cẩn thận trước khi qua.'),
  ]),

  M(16, 'Đường phố ban ngày – ban đêm', [
    Q('Ban ngày đường phố thường?', ['Vắng tanh', 'Không có ai', 'Đông đúc xe cộ, người đi lại', 'Đóng cửa hoàn toàn'], 2, 'Ban ngày là giờ làm việc, đi học.'),
    Q('Ban đêm đường phố thường?', ['Y nguyên ban ngày', 'Đông hơn ban ngày', 'Ít người, ít xe hơn ban ngày', 'Đầy trẻ em chơi'], 2, 'Ban đêm mọi người về nghỉ.'),
    Q('Ban đêm, đèn đường có tác dụng?', ['Sưởi ấm', 'Trang trí', 'Chiếu sáng để đi lại an toàn', 'Làm sạch không khí'], 2, 'Đèn đường giúp nhìn rõ ban đêm.'),
    Q('Trẻ em có nên đi chơi một mình ban đêm không?', ['Không nên, cần có người lớn đi cùng', 'Tuỳ thích', 'Chỉ khi có bạn cùng tuổi', 'Nên, nếu đường gần nhà'], 0, 'Ban đêm không an toàn cho trẻ đi một mình.'),
    Q('Đèn pha xe ô tô ban đêm để?', ['Chơi nhạc', 'Soi đường, báo hiệu', 'Làm nóng máy', 'Trang trí'], 1, 'Đèn pha chiếu sáng đường đi.'),
    Q('Khi đi bộ ban đêm, em nên mặc?', ['Quần áo tối màu', 'Quần áo lẫn vào đêm', 'Không mặc gì', 'Quần áo sáng màu, có phản quang'], 3, 'Sáng màu để người khác dễ thấy.'),
  ]),

  M(17, 'Nghề lao động phổ biến ở địa phương', [
    Q('Ở nông thôn, nghề phổ biến thường là?', ['Trồng trọt, chăn nuôi', 'Lập trình viên', 'Phi công', 'Phi hành gia'], 0, 'Nông thôn chủ yếu làm nông.'),
    Q('Ở thành phố thường có nhiều?', ['Ruộng lúa', 'Công ty, văn phòng, nhà máy', 'Đồng cỏ', 'Rừng cây'], 1, 'Thành phố là trung tâm thương mại, công nghiệp.'),
    Q('Người đánh bắt cá ở biển gọi là?', ['Ngư dân', 'Nông dân', 'Bác sĩ', 'Thợ may'], 0, 'Ngư dân làm nghề biển.'),
    Q('Người làm bánh mì, bánh ngọt gọi là?', ['Bác sĩ', 'Thợ làm bánh', 'Đầu bếp món Á', 'Giáo viên'], 1, 'Thợ làm bánh / đầu bếp bánh.'),
    Q('Mọi nghề lao động chân chính đều?', ['Đáng quý, có ích cho xã hội', 'Chỉ một số nghề là tốt', 'Chỉ nghề trí óc mới đáng quý', 'Không cần thiết'], 0, 'Mọi nghề chân chính đều đáng tôn trọng.'),
    Q('Sản phẩm em ăn hàng ngày (gạo, rau) là nhờ công của ai?', ['Thuỷ thủ', 'Nông dân', 'Phi công', 'Diễn viên'], 1, 'Nông dân làm ra lương thực.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('Gia đình có 3 thế hệ gồm?', ['Bố – mẹ – em bé', 'Ông bà – bố mẹ – con cháu', 'Cô – dì – chú', 'Hàng xóm'], 1, '3 thế hệ điển hình.'),
    Q('Số điện thoại cứu hoả là?', ['113', '116', '114', '115'], 2, '114 = cứu hoả.'),
    Q('Số điện thoại cấp cứu y tế là?', ['113', '114', '115', '116'], 2, '115 = cấp cứu.'),
    Q('Đèn giao thông màu vàng nghĩa là?', ['Đi tiếp thật nhanh', 'Bóp còi', 'Đi chậm lại, chuẩn bị dừng', 'Quay đầu'], 2, 'Đèn vàng = chuẩn bị dừng.'),
    Q('Khi vào thư viện, em phải?', ['Ăn quà', 'Hát to', 'Chạy nhảy', 'Giữ trật tự'], 3, 'Thư viện cần yên tĩnh.'),
    Q('Người đứng đầu nhà trường là?', ['Hiệu trưởng', 'Lao công', 'Học sinh giỏi', 'Bảo vệ'], 0, 'Hiệu trưởng lãnh đạo trường.'),
    Q('Nơi mua bán nhiều hàng hoá nhất ở địa phương là?', ['Bưu điện', 'Trường học', 'Chợ/siêu thị', 'Bệnh viện'], 2, 'Chợ và siêu thị là nơi mua bán.'),
    Q('Khi qua đường, em nên đi vào?', ['Bất kỳ chỗ nào', 'Vạch kẻ dành cho người đi bộ', 'Chạy ngang', 'Giữa đường'], 1, 'Vạch kẻ = nơi an toàn.'),
    Q('Hành vi đúng khi gặp người lớn là?', ['Chào lễ phép', 'Trêu chọc', 'Quay đi', 'Phớt lờ'], 0, 'Lễ phép với mọi người.'),
    Q('Khi thấy chai thuốc lạ, em nên?', ['Không chạm, báo người lớn', 'Đưa em bé chơi', 'Uống thử', 'Đổ ra đất'], 0, 'Tránh ngộ độc.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — THỰC VẬT · ĐỘNG VẬT · CƠ THỂ NGƯỜI · TRÁI ĐẤT ────────────────
  M(19, 'Cây có rễ – thân – lá', [
    Q('Ba bộ phận chính của cây là?', ['Lá – gió – nắng', 'Rễ – cành – đất', 'Rễ – thân – lá', 'Hoa – quả – hạt'], 2, 'Cây gồm rễ, thân, lá là 3 bộ phận chính.'),
    Q('Bộ phận của cây nằm dưới đất, hút nước là?', ['Lá cây', 'Rễ', 'Hoa', 'Thân cây'], 1, 'Rễ hút nước và chất dinh dưỡng.'),
    Q('Bộ phận của cây nâng đỡ và đưa nước lên là?', ['Lá cây', 'Quả chín trên cây', 'Thân', 'Rễ cây'], 2, 'Thân nâng đỡ và vận chuyển nước.'),
    Q('Lá cây thường có màu gì?', ['Nâu sẫm như đất', 'Xanh lục (xanh lá)', 'Vàng tươi', 'Đỏ rực'], 1, 'Lá thường xanh lục nhờ chất diệp lục.'),
    Q('Lá cây giúp cây?', ['Quang hợp (chế tạo thức ăn)', 'Giữ chặt cây vào đất', 'Đi lại', 'Đào sâu xuống đất'], 0, 'Lá quang hợp tạo chất dinh dưỡng.'),
    Q('Rễ có chức năng chính là?', ['Đẻ con', 'Bay đi', 'Quang hợp tạo thức ăn', 'Hút nước, giữ cây'], 3, 'Rễ hút nước và bám đất giữ cây.'),
  ]),

  M(20, 'Cây ra hoa, kết quả', [
    Q('Bộ phận nào của cây có hương thơm và sặc sỡ?', ['Hoa', 'Lá khô', 'Thân cây', 'Rễ cây dưới đất'], 0, 'Hoa nhiều màu, có hương.'),
    Q('Sau khi hoa nở rồi tàn thường tạo ra?', ['Quả', 'Lá non', 'Thêm rễ mới', 'Một bông hoa khác'], 0, 'Hoa → quả.'),
    Q('Trong quả thường có?', ['Nước', 'Lá nhỏ', 'Hạt', 'Rễ con'], 2, 'Hạt nằm trong quả để gieo trồng tiếp.'),
    Q('Hạt rơi xuống đất, gặp điều kiện tốt sẽ?', ['Bay lên trời', 'Thành con vật', 'Hoá thành đá', 'Mọc thành cây con'], 3, 'Hạt nảy mầm thành cây con.'),
    Q('Quả nào sau đây ăn được?', ['Quả mọc trên cây thuốc lá', 'Quả cam', 'Quả độc lạ chưa biết', 'Hạt thuốc'], 1, 'Quả cam là quả ăn được phổ biến.'),
    Q('Để cây ra hoa, kết quả tốt, cần?', ['Đổ thuốc tẩy', 'Đủ nước, đủ ánh sáng, đất tốt', 'Đốt gốc cây', 'Bóng tối hoàn toàn'], 1, 'Cây cần nước, ánh sáng, đất tốt.'),
  ]),

  M(21, 'Phân loại cây', [
    Q('Cây nào ưa nắng?', ['Cây rêu mọc trên đá ẩm', 'Rêu trong hang', 'Cây lúa', 'Cây dương xỉ trong rừng tối'], 2, 'Lúa cần nắng nhiều.'),
    Q('Cây nào ưa râm/bóng?', ['Lúa nước', 'Ngô', 'Trầu bà / dương xỉ', 'Lạc (đậu phộng)'], 2, 'Trầu bà, dương xỉ sống tốt nơi ít nắng.'),
    Q('Cây gỗ là loại cây?', ['Thân mềm, nhỏ', 'Không có thân', 'Sống dưới nước', 'Thân cứng, to, cao'], 3, 'Cây gỗ thân cứng (xoan, bàng, lim).'),
    Q('Cây thân thảo là?', ['Không có thân', 'Thân bằng đá', 'Thân mềm, nhỏ (rau, lúa, cỏ)', 'Thân cứng to'], 2, 'Thân thảo mềm, vòng đời ngắn.'),
    Q('Cây nào dưới đây là cây gỗ?', ['Cỏ may', 'Cây lúa', 'Rau muống', 'Cây bàng'], 3, 'Bàng có thân gỗ to.'),
    Q('Cây nào là cây thân thảo?', ['Cây mít', 'Cây rau cải', 'Cây lim', 'Cây xoan'], 1, 'Rau cải thân mềm.'),
  ]),

  M(22, 'Cây Tết: mai, đào, quất', [
    Q('Miền Bắc Tết thường chơi hoa gì?', ['Hoa sen', 'Hoa đào', 'Hoa cúc', 'Hoa mai'], 1, 'Miền Bắc → đào hồng.'),
    Q('Miền Nam Tết thường chơi hoa gì?', ['Hoa mai', 'Hoa lan', 'Hoa đào', 'Hoa hồng'], 0, 'Miền Nam → mai vàng.'),
    Q('Quả quất chơi Tết có màu?', ['Xanh lá đậm khi chín', 'Vàng cam', 'Xanh tím', 'Tím sẫm'], 1, 'Quất chín màu vàng cam, tượng trưng tài lộc.'),
    Q('Hoa đào có màu đặc trưng?', ['Trắng tinh', 'Tím đen', 'Vàng tươi như mai', 'Hồng'], 3, 'Đào hoa hồng (có đào trắng nhưng phổ biến là hồng).'),
    Q('Hoa mai có màu đặc trưng?', ['Vàng', 'Trắng tinh', 'Đỏ thắm như đào', 'Xanh lá non'], 0, 'Mai vàng rực rỡ.'),
    Q('Cây Tết thường được trang trí trong nhà để?', ['Tạo không khí Tết, may mắn', 'Lau nhà', 'Làm bữa ăn', 'Đốt sưởi'], 0, 'Trang trí ngày Tết.'),
  ]),

  M(23, 'Động vật sống dưới nước', [
    Q('Con nào sống dưới nước?', ['Con mèo', 'Con chó', 'Con gà', 'Cá'], 3, 'Cá sống trong nước.'),
    Q('Cá thở bằng?', ['Mang', 'Mũi như người', 'Vảy trên thân', 'Phổi như người'], 0, 'Cá có mang để lấy ôxy từ nước.'),
    Q('Con vật nào dưới đây sống ở biển?', ['Con hươu', 'Con chó', 'Con voi', 'Mực, tôm'], 3, 'Mực, tôm là động vật biển.'),
    Q('Cua di chuyển bằng cách?', ['Bơi như cá', 'Đi thẳng đứng', 'Bò ngang', 'Nhảy bằng hai chân sau'], 2, 'Cua bò ngang là đặc điểm dễ nhận.'),
    Q('Đặc điểm chung của cá là?', ['Có cánh', 'Có vảy, có vây, sống trong nước', 'Có 4 chân', 'Có lông, biết bay'], 1, 'Cá: vảy, vây, sống dưới nước.'),
    Q('Loài nào KHÔNG sống dưới nước?', ['Con tôm', 'Bò', 'Con cá', 'Con mực'], 1, 'Bò sống trên cạn.'),
  ]),

  M(24, 'Động vật trên cạn', [
    Q('Con nào sống trên cạn?', ['Mèo', 'Cá chép', 'Tôm sông', 'Mực ống'], 0, 'Mèo sống trên cạn.'),
    Q('Bò ăn gì?', ['Thịt sống', 'Cá nhỏ', 'Cỏ', 'Hạt đá nhỏ'], 2, 'Bò ăn cỏ.'),
    Q('Chó là loài?', ['Sống trong nước', 'Có vảy như cá', 'Bay được', 'Vật nuôi trong nhà'], 3, 'Chó là vật nuôi quen thuộc.'),
    Q('Gà có mấy chân?', ['0 chân', '2 chân', '4 chân', '6 chân'], 1, 'Gà có 2 chân.'),
    Q('Mèo thường ăn?', ['Cỏ tươi', 'Hạt thóc', 'Cá, thịt', 'Lá khô'], 2, 'Mèo ăn thịt, cá.'),
    Q('Đặc điểm chung của thú có vú (chó, mèo, bò) là?', ['Sống dưới nước', 'Có vảy, đẻ trứng', 'Biết bay', 'Có lông, đẻ con, nuôi con bằng sữa'], 3, 'Thú có vú: có lông, đẻ con, có sữa.'),
  ]),

  M(25, 'Động vật biết bay', [
    Q('Con nào biết bay?', ['Con cua', 'Con cá', 'Chim', 'Con bò'], 2, 'Chim bay được nhờ cánh.'),
    Q('Chim bay được nhờ?', ['Mang giống cá', '4 chân', 'Cánh và lông vũ', 'Vảy bao phủ thân'], 2, 'Chim có cánh phủ lông vũ.'),
    Q('Ong làm ra?', ['Sữa ngọt', 'Mật ong', 'Trứng vịt', 'Tơ kéo sợi'], 1, 'Ong làm mật.'),
    Q('Bướm thường hút gì từ hoa?', ['Phấn hoa', 'Mật hoa', 'Dầu ăn', 'Nước biển'], 1, 'Bướm hút mật hoa.'),
    Q('Con nào KHÔNG bay được?', ['Chim sẻ', 'Gà công nghiệp lớn', 'Chim sẻ non', 'Chim bồ câu'], 1, 'Gà thường chỉ bay rất thấp, gần như không bay.'),
    Q('Đặc điểm chung của côn trùng (ong, bướm) là?', ['Đẻ con', 'Có vảy', 'Có 6 chân, thân chia đốt', 'Có 4 chân, có lông vũ'], 2, 'Côn trùng có 6 chân.'),
  ]),

  M(26, 'Bộ máy vận động (xương + cơ)', [
    Q('Bộ máy vận động của người gồm?', ['Xương và cơ (bắp)', 'Tim và phổi', 'Dạ dày và ruột', 'Mắt và tai'], 0, 'Xương + cơ tạo nên bộ máy vận động.'),
    Q('Xương có chức năng?', ['Co bóp đẩy máu', 'Nâng đỡ cơ thể', 'Tiêu hoá thức ăn', 'Hít thở'], 1, 'Xương là khung nâng đỡ cơ thể.'),
    Q('Cơ (bắp) giúp em?', ['Nhìn rõ vật xa', 'Vận động, cử động', 'Nghe được âm thanh', 'Ngửi được mùi'], 1, 'Cơ co giãn → cử động.'),
    Q('Để xương chắc khoẻ, em cần?', ['Ăn nhiều đồ ngọt', 'Nằm cả ngày', 'Nhịn ăn', 'Uống sữa, ăn đủ chất, vận động'], 3, 'Sữa và vận động giúp xương chắc.'),
    Q('Ngồi học sai tư thế có thể bị?', ['Khoẻ hơn', 'Cao thêm nhanh', 'Mọc răng nhanh', 'Cong vẹo cột sống'], 3, 'Sai tư thế → cong vẹo cột sống.'),
    Q('Để cơ thể khoẻ mạnh, em nên?', ['Tập thể dục đều đặn', 'Ngồi cả ngày', 'Lười vận động', 'Ăn rồi ngủ'], 0, 'Tập thể dục giúp cơ – xương khoẻ.'),
  ]),

  M(27, 'Bộ máy hô hấp (mũi – khí quản – phổi)', [
    Q('Bộ phận giúp em thở là?', ['Phổi', 'Tim', 'Gan', 'Dạ dày'], 0, 'Phổi là cơ quan hô hấp chính.'),
    Q('Không khí vào cơ thể qua đâu trước tiên?', ['Miệng khi ăn', 'Tai khi nghe', 'Mũi', 'Bàn chân'], 2, 'Không khí qua mũi → khí quản → phổi.'),
    Q('Đường đi của không khí khi hít vào là?', ['Mũi → khí quản → phổi', 'Tai → mũi → tim', 'Miệng → dạ dày → phổi', 'Mắt → tai → phổi'], 0, 'Đường hô hấp: mũi – khí quản – phổi.'),
    Q('Để phổi khoẻ, em nên?', ['Ngậm miệng cả ngày', 'Hít khói thuốc', 'Hít thở không khí trong lành, không hút thuốc', 'Ngồi gần đám cháy'], 2, 'Tránh khói, bụi.'),
    Q('Khi trời lạnh, em nên?', ['Đi chân đất', 'Tắm nước lạnh lâu', 'Mặc ấm, giữ ấm cổ – ngực', 'Cởi áo'], 2, 'Giữ ấm tránh bệnh hô hấp.'),
    Q('Khi hắt hơi, sổ mũi, em nên?', ['Không che gì', 'Che miệng – mũi bằng khuỷu tay/khăn', 'Hắt thẳng vào bạn', 'Hét lớn'], 1, 'Che để tránh lây bệnh cho người khác.'),
  ]),

  M(28, 'Bộ máy tiêu hoá (miệng – dạ dày – ruột)', [
    Q('Đường đi của thức ăn là?', ['Tay → chân → bụng', 'Mũi → phổi → ruột', 'Miệng → dạ dày → ruột', 'Tai → mắt → miệng'], 2, 'Miệng – thực quản – dạ dày – ruột.'),
    Q('Bộ phận nhai và nghiền thức ăn đầu tiên là?', ['Gan', 'Ruột non', 'Miệng (răng)', 'Dạ dày'], 2, 'Răng nhai nhỏ thức ăn.'),
    Q('Dạ dày có chức năng?', ['Lọc máu', 'Co bóp, nghiền và tiêu hoá thức ăn', 'Hít thở không khí', 'Bơm máu'], 1, 'Dạ dày tiêu hoá thức ăn.'),
    Q('Để tiêu hoá tốt, em nên?', ['Bỏ bữa', 'Nuốt vội', 'Vừa ăn vừa chạy', 'Ăn chậm, nhai kỹ'], 3, 'Nhai kỹ giúp dễ tiêu.'),
    Q('Sau khi ăn no, em KHÔNG nên?', ['Đọc sách', 'Nghỉ ngơi nhẹ', 'Đi bộ chậm', 'Chạy nhảy mạnh ngay'], 3, 'Vận động mạnh sau ăn dễ đau bụng.'),
    Q('Để tránh đau bụng, em nên?', ['Ăn thức ăn ôi thiu', 'Không rửa tay', 'Ăn chín, uống sôi, rửa tay trước khi ăn', 'Uống nước lã'], 2, 'Ăn sạch, uống sạch, tay sạch.'),
  ]),

  M(29, 'Vệ sinh răng miệng', [
    Q('Em nên đánh răng mấy lần mỗi ngày?', ['Ít nhất 2 lần (sáng và tối)', '0 lần', '1 lần', '5 lần'], 0, 'Sáng sau ngủ dậy và tối trước khi ngủ.'),
    Q('Đánh răng đúng cách giúp?', ['Răng vàng đi', 'Răng chắc khoẻ, không sâu', 'Răng rụng nhanh', 'Hôi miệng hơn'], 1, 'Phòng sâu răng, viêm lợi.'),
    Q('Ăn nhiều đồ ngọt mà không vệ sinh có thể bị?', ['Cao thêm nhanh', 'Sâu răng', 'Mọc cánh', 'Khoẻ hơn'], 1, 'Đường + vi khuẩn → sâu răng.'),
    Q('Nên thay bàn chải đánh răng?', ['Cả đời 1 cái', '3 tháng 1 lần', '1 năm 1 lần', 'Mỗi ngày 1 cái'], 1, 'Khoảng 3 tháng thay 1 lần.'),
    Q('Khi đau răng, em nên?', ['Báo bố mẹ, đến nha sĩ', 'Ăn thật nhiều đường', 'Nhịn cho qua', 'Tự nhổ răng'], 0, 'Nha sĩ khám và chữa răng.'),
    Q('Để giữ răng đẹp, em nên?', ['Đánh răng + súc miệng + hạn chế kẹo', 'Ăn nhiều kẹo dẻo', 'Không đánh răng', 'Cắn vật cứng'], 0, 'Vệ sinh + ăn uống hợp lý.'),
  ]),

  M(30, 'Vệ sinh tay – phòng bệnh', [
    Q('Khi nào em cần rửa tay?', ['Chỉ khi tay quá bẩn nhìn thấy', 'Không cần', 'Cả tuần 1 lần', 'Trước khi ăn, sau khi đi vệ sinh'], 3, 'Trước ăn, sau vệ sinh, sau chơi.'),
    Q('Rửa tay bằng gì là tốt nhất?', ['Cát mịn', 'Nước lã đục', 'Nước sạch + xà phòng', 'Nước mưa hứng được'], 2, 'Xà phòng diệt vi khuẩn.'),
    Q('Rửa tay đủ lâu khoảng?', ['1 giờ', '20 giây (hát bài Happy Birthday 2 lần)', '1 giây', '5 phút liên tục'], 1, 'Khoảng 20 giây với xà phòng.'),
    Q('Tay bẩn có thể mang vào miệng?', ['Chất bổ dưỡng', 'Vi khuẩn, giun sán', 'Bụi vô hại', 'Không gì cả'], 1, 'Tay bẩn → bệnh tiêu chảy, giun sán.'),
    Q('Khi ho, hắt hơi em nên?', ['Hắt hơi tự do vào không khí', 'Quay mặt lên trời', 'Hắt vào bạn', 'Che miệng – mũi'], 3, 'Tránh lây bệnh hô hấp.'),
    Q('Hành động giúp phòng bệnh tốt là?', ['Ăn đồ ôi', 'Không tắm', 'Đi chân đất nơi bẩn', 'Rửa tay, ăn chín, uống sôi'], 3, 'Vệ sinh cá nhân giúp phòng bệnh.'),
  ]),

  M(31, 'Trái Đất hình cầu', [
    Q('Trái Đất có hình?', ['Hình tròn dẹt như đồng xu', 'Phẳng như tờ giấy', 'Cầu (tròn như quả bóng)', 'Tam giác'], 2, 'Trái Đất hình cầu.'),
    Q('Trái Đất quay quanh?', ['Mặt Trăng', 'Mặt Trời', 'Trên đỉnh đầu em', 'Sao Hoả'], 1, 'Trái Đất quay quanh Mặt Trời.'),
    Q('Trên Trái Đất có gì cho con người sinh sống?', ['Đất, nước, không khí', 'Toàn đá', 'Không có gì', 'Toàn lửa'], 0, 'Trái Đất có điều kiện cho sự sống.'),
    Q('Phần lớn bề mặt Trái Đất được bao phủ bởi?', ['Đất liền và núi', 'Băng đá hoàn toàn', 'Đá lửa', 'Nước (biển, đại dương)'], 3, 'Khoảng 70% bề mặt là nước.'),
    Q('Em đang đứng trên?', ['Mặt Trăng', 'Mặt Trời', 'Trái Đất', 'Sao Kim'], 2, 'Tất cả con người đều sống trên Trái Đất.'),
    Q('Một quả địa cầu là mô hình của?', ['Quả táo', 'Mặt Trời', 'Trái Đất', 'Quả bóng đá'], 2, 'Địa cầu mô phỏng Trái Đất.'),
  ]),

  M(32, 'Mặt Trời mọc Đông – lặn Tây', [
    Q('Mặt Trời mọc ở hướng nào?', ['Đông', 'Tây', 'Bắc', 'Nam'], 0, 'Mặt Trời mọc ở phía Đông.'),
    Q('Mặt Trời lặn ở hướng nào?', ['Bắc', 'Tây', 'Đông', 'Nam'], 1, 'Mặt Trời lặn ở phía Tây.'),
    Q('Buổi sáng nhìn Mặt Trời, em đang nhìn về hướng?', ['Bắc', 'Nam', 'Đông', 'Tây'], 2, 'Sáng Mặt Trời ở phía Đông.'),
    Q('Buổi chiều tối Mặt Trời ở hướng?', ['Đông', 'Trên đỉnh đầu', 'Dưới chân', 'Tây'], 3, 'Chiều Mặt Trời ngả về Tây.'),
    Q('Mặt Trời mang lại cho Trái Đất?', ['Mưa đá', 'Bóng tối', 'Ánh sáng và hơi ấm', 'Gió mạnh và bão'], 2, 'Mặt Trời chiếu sáng và sưởi ấm.'),
    Q('Em có nên nhìn thẳng vào Mặt Trời không?', ['Có, để ngắm cho rõ', 'Nhìn lâu mới tốt', 'Nhìn 1 mắt thôi', 'Không, sẽ hỏng mắt'], 3, 'Tia sáng mạnh hại mắt.'),
  ]),

  M(33, 'Mặt Trăng tròn – khuyết', [
    Q('Mặt Trăng nhìn rõ nhất vào?', ['Lúc bão', 'Lúc mưa to', 'Ban đêm', 'Ban ngày'], 2, 'Đêm tối, Mặt Trăng dễ nhìn.'),
    Q('Mặt Trăng quay quanh?', ['Trái Đất', 'Sao Hoả', 'Mặt Trời', 'Sao Kim'], 0, 'Mặt Trăng là vệ tinh của Trái Đất.'),
    Q('Trong 1 tháng âm lịch, Mặt Trăng tròn nhất vào?', ['Mùng 1', 'Mùng 7', 'Cuối tháng', 'Ngày Rằm (15)'], 3, 'Trăng Rằm tròn và sáng nhất.'),
    Q('Trăng khuyết là khi?', ['Trăng chỉ thấy một phần', 'Không có trăng', 'Trăng tròn đầy', 'Trăng vuông'], 0, 'Trăng khuyết = chỉ thấy 1 phần.'),
    Q('Đêm không trăng (mùng 1 âm) là vì?', ['Trăng bị giấu, Mặt Trăng nằm cùng phía Mặt Trời', 'Trái Đất biến mất', 'Trăng vỡ', 'Trăng đi du lịch'], 0, 'Trăng non, gần như không thấy.'),
    Q('Tết Trung thu rơi vào?', ['Mùng 1 Tết', 'Rằm tháng Giêng', 'Rằm tháng Tám âm lịch', 'Tháng 12 dương lịch'], 2, '15/8 âm lịch là Trung thu.'),
  ]),

  M(34, 'Các vì sao đêm', [
    Q('Trên bầu trời đêm có rất nhiều?', ['Ngôi sao', 'Toà nhà', 'Con cá', 'Cái cây'], 0, 'Sao là các thiên thể phát sáng.'),
    Q('Ngôi sao gần Trái Đất nhất là?', ['Sao Bắc Đẩu', 'Sao Hôm', 'Mặt Trời', 'Sao Mai'], 2, 'Mặt Trời là 1 ngôi sao gần nhất.'),
    Q('Vì sao ban ngày em không thấy sao?', ['Vì có ánh sáng Mặt Trời quá mạnh', 'Vì Trái Đất quay', 'Vì sao đi ngủ', 'Vì sao biến mất'], 0, 'Ánh sáng Mặt Trời át sáng các sao.'),
    Q('Sao chổi có đặc điểm?', ['Phát ra tiếng', 'Hình vuông', 'Có đuôi sáng kéo dài', 'Nóng như Mặt Trời'], 2, 'Sao chổi có đuôi dài đặc trưng.'),
    Q('Để quan sát sao tốt, em nên ở?', ['Trong nhà đóng cửa', 'Nơi tối, ít đèn', 'Dưới gầm bàn', 'Giữa phố đèn sáng'], 1, 'Ít ô nhiễm ánh sáng → thấy sao rõ.'),
    Q('Khoa học nghiên cứu các vì sao gọi là?', ['Sinh học', 'Thiên văn', 'Toán học', 'Vẽ tranh'], 1, 'Thiên văn học nghiên cứu vũ trụ.'),
  ]),

  M(35, 'Phương hướng cơ bản', [
    Q('Bốn phương hướng chính là?', ['Đỏ – Vàng – Xanh – Tím', 'Trên – Dưới – Trái – Phải', 'Đông – Tây – Nam – Bắc', 'Trước – Sau – Trên – Dưới'], 2, '4 hướng chính: Đông, Tây, Nam, Bắc.'),
    Q('Mặt Trời mọc ở hướng Đông, vậy nếu em quay mặt về phía Mặt Trời mọc, sau lưng em là?', ['Tây', 'Bắc', 'Đông', 'Nam'], 0, 'Đối diện Đông là Tây.'),
    Q('Khi em mặt hướng Đông, tay phải em chỉ về?', ['Đông', 'Bắc', 'Nam', 'Tây'], 2, 'Mặt Đông, sau lưng Tây, phải Nam, trái Bắc.'),
    Q('Dụng cụ giúp xác định phương hướng là?', ['La bàn', 'Máy ảnh', 'Đồng hồ báo thức', 'Thước kẻ'], 0, 'La bàn chỉ phương hướng.'),
    Q('Kim la bàn thường chỉ về hướng?', ['Nam', 'Tây', 'Đông', 'Bắc'], 3, 'Kim nam châm chỉ hướng Bắc.'),
    Q('Đối diện hướng Nam là?', ['Đông', 'Tây', 'Đông Nam', 'Bắc'], 3, 'Nam ↔ Bắc đối diện.'),
  ]),

  M(36, 'Ôn tập cuối năm', [
    Q('Ba bộ phận chính của cây là?', ['Hoa – quả – hạt', 'Tay – chân – đầu', 'Rễ – thân – lá', 'Đất – nước – gió'], 2, '3 bộ phận chính cây xanh.'),
    Q('Rễ cây có chức năng?', ['Quang hợp', 'Hút nước, giữ cây', 'Thở thay phổi', 'Tạo ra hoa và quả'], 1, 'Rễ hút nước và bám đất.'),
    Q('Phổi giúp em?', ['Nhìn rõ vật xa', 'Tiêu hoá', 'Đi lại', 'Thở (hô hấp)'], 3, 'Phổi là cơ quan hô hấp.'),
    Q('Tim trong cơ thể có chức năng?', ['Hô hấp', 'Bơm máu đi nuôi cơ thể', 'Vận động', 'Tiêu hoá'], 1, 'Tim bơm máu khắp cơ thể.'),
    Q('Trái Đất có hình?', ['Phẳng như chiếc bánh', 'Cầu', 'Hình hộp vuông', 'Tam giác'], 1, 'Trái Đất hình cầu.'),
    Q('Mặt Trời mọc – lặn ở hướng?', ['Mọc Tây – lặn Đông', 'Mọc Bắc – lặn Nam', 'Cố định một chỗ', 'Mọc Đông – lặn Tây'], 3, 'Đông mọc – Tây lặn.'),
    Q('Cá thở bằng?', ['Phổi như người', 'Cánh chim', 'Da trơn ngoài thân', 'Mang'], 3, 'Cá có mang.'),
    Q('1 tuần có?', ['5 ngày', '7 ngày', '12 ngày', '10 ngày'], 1, '1 tuần = 7 ngày.'),
    Q('1 năm có?', ['15 tháng', '7 tháng', '12 tháng', '10 tháng'], 2, '1 năm = 12 tháng.'),
    Q('Số điện thoại cấp cứu y tế là?', ['115', '113', '116', '114'], 0, '115 = cấp cứu.'),
  ], { difficulty: 3 }),
];

export const P2TNXH_SCENARIOS = indexBy(P2TNXH_WEEKS);
