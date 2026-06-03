// ============================================================
// Lớp 1 · TỰ NHIÊN & XÃ HỘI — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018: Gia đình · Trường học · Cộng đồng địa phương
// → Thực vật · Động vật · Cơ thể người · Trái Đất – Bầu trời.
// ID prefix: "P1TNXH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1TNXH', 'tnxh', n, title, qs, opts);

export const P1TNXH_WEEKS = [
  // ──────────────── HK1 — GIA ĐÌNH · TRƯỜNG HỌC · CỘNG ĐỒNG ────────────────
  M(1, 'Gia đình của em', [
    Q('Trong gia đình em thường có những ai?', ['Bố, mẹ và các con', 'Chỉ có em', 'Chỉ có bạn bè', 'Chỉ có bố'], 0, 'Gia đình cơ bản gồm bố, mẹ và các con.'),
    Q('Người sinh ra em là?', ['Bố mẹ', 'Cô giáo', 'Bác hàng xóm', 'Bạn bè'], 0, 'Bố mẹ là người sinh ra em.'),
    Q('Bố của bố em gọi là?', ['Ông nội', 'Chú ruột', 'Ông ngoại', 'Bác'], 0, 'Bố của bố = ông nội.'),
    Q('Mẹ của mẹ em gọi là?', ['Cô', 'Mẹ kế', 'Bà nội', 'Bà ngoại'], 3, 'Mẹ của mẹ = bà ngoại.'),
    Q('Hành động lễ phép với ông bà là?', ['Bỏ đi chơi', 'Không nghe lời', 'Cãi lại', 'Chào hỏi, vâng lời'], 3, 'Lễ phép = chào hỏi, vâng lời.'),
    Q('Trong gia đình em yêu thương ai?', ['Chỉ yêu em bé', 'Chỉ yêu bố', 'Tất cả mọi người', 'Không yêu ai'], 2, 'Yêu thương tất cả thành viên trong gia đình.'),
  ]),

  M(2, 'Đồ dùng trong nhà', [
    Q('Đồ dùng để ngồi là?', ['Cái chổi', 'Cái ghế', 'Cái nồi', 'Cái chậu'], 1, 'Cái ghế dùng để ngồi.'),
    Q('Đồ dùng để nấu cơm là?', ['Cái giường', 'Nồi cơm điện', 'Cái tủ', 'Cái bàn'], 1, 'Nồi cơm điện dùng nấu cơm.'),
    Q('Đồ dùng để ngủ là?', ['Cái ghế', 'Cái chậu', 'Cái bàn', 'Cái giường'], 3, 'Cái giường để ngủ.'),
    Q('Đồ dùng để quét nhà là?', ['Cái nồi', 'Cái thìa', 'Cái bát', 'Cái chổi'], 3, 'Chổi để quét nhà.'),
    Q('Sau khi dùng xong đồ vật, em nên?', ['Đập vỡ', 'Ném đi', 'Vứt bừa bãi', 'Cất gọn vào chỗ cũ'], 3, 'Cất gọn để giữ nhà ngăn nắp.'),
    Q('Đồ dùng nguy hiểm trẻ em KHÔNG nên tự dùng:', ['Dao, kéo, bếp lửa', 'Chổi quét', 'Sách vở', 'Bút chì'], 0, 'Dao, kéo, bếp dễ gây tai nạn.'),
  ]),

  M(3, 'Công việc nhà em làm được', [
    Q('Việc bạn nhỏ lớp 1 có thể giúp mẹ là?', ['Tự gấp quần áo của mình', 'Sửa điện', 'Nấu cơm bằng bếp gas', 'Đi chợ một mình'], 0, 'Việc nhẹ phù hợp lứa tuổi.'),
    Q('Sau khi ăn xong, em nên?', ['Ném bát', 'Bỏ bát đi chơi', 'Để bát trên giường', 'Mang bát ra bồn rửa'], 3, 'Phụ dọn bát đũa giúp gia đình.'),
    Q('Đồ chơi chơi xong em nên?', ['Ném ra sân', 'Đập vỡ', 'Bỏ giữa nhà', 'Cất vào hộp'], 3, 'Cất gọn để không vấp ngã, không mất đồ.'),
    Q('Việc giúp đỡ bố mẹ thể hiện?', ['Sự lười biếng', 'Sự ngại ngùng', 'Tình yêu thương', 'Sự ích kỷ'], 2, 'Yêu thương qua hành động giúp đỡ.'),
    Q('Khi mẹ mệt, em nên?', ['Khóc to', 'Bỏ đi chơi', 'Đòi mẹ chơi cùng', 'Hỏi thăm và rót nước cho mẹ'], 3, 'Quan tâm khi người thân không khoẻ.'),
    Q('Hành động nào KHÔNG tốt?', ['Tự dọn đồ chơi', 'Vứt rác bừa bãi', 'Mời ông bà ăn cơm', 'Chào bố mẹ khi đi học'], 1, 'Vứt rác bừa làm bẩn nhà.'),
  ]),

  M(4, 'An toàn ở nhà (1) — Tránh điện, lửa', [
    Q('Hành động nguy hiểm cần TRÁNH là?', ['Tưới cây', 'Cắm ngón tay vào ổ điện', 'Rửa tay sạch', 'Đọc sách'], 1, 'Chọc vào ổ điện bị điện giật.'),
    Q('Tay ướt có nên chạm vào ổ điện?', ['Chỉ chạm 1 lần', 'Không, rất nguy hiểm', 'Được, nếu tay khô ráo', 'Có, nếu lau nhẹ trước'], 1, 'Nước dẫn điện → dễ bị giật.'),
    Q('Khi bếp đang cháy lửa, em nên?', ['Ném giấy vào lửa', 'Đứng xa', 'Lại gần xem', 'Nghịch quanh bếp'], 1, 'Đứng xa để tránh bỏng.'),
    Q('Thấy nồi nước sôi trên bếp, em làm gì?', ['Mở nắp ngay', 'Đổ tay thử', 'Tự bê xuống', 'Báo người lớn'], 3, 'Trẻ nhỏ không tự bê nồi nóng.'),
    Q('Nếu thấy khói/lửa to ở nhà, em phải?', ['Hô lớn báo người lớn và chạy ra', 'Trốn dưới giường', 'Tiếp tục chơi', 'Đóng kín cửa'], 0, 'Báo người lớn và thoát ra nơi an toàn.'),
    Q('Số điện thoại cứu hoả ở Việt Nam là?', ['115', '113', '116', '114'], 3, '114 = cứu hoả.'),
  ]),

  M(5, 'An toàn ở nhà (2) — Tránh ngộ độc, té ngã', [
    Q('Thấy chai thuốc lạ, em có nên uống thử không?', ['Uống ít thôi', 'Chia bạn cùng uống', 'Có, nếu nhãn còn mới', 'Không, rất nguy hiểm'], 3, 'Có thể là thuốc/hoá chất gây ngộ độc.'),
    Q('Thức ăn rơi xuống đất bẩn, em nên?', ['Đưa em bé ăn', 'Nhặt lên ăn', 'Cất vào tủ', 'Bỏ đi'], 3, 'Bỏ đi để tránh vi khuẩn.'),
    Q('Trên cầu thang em nên?', ['Trượt cầu thang', 'Chạy nhảy nô đùa', 'Đẩy bạn', 'Đi từng bậc cẩn thận'], 3, 'Đi cẩn thận để không bị ngã.'),
    Q('Khi sàn nhà ướt, em nên?', ['Nhảy lên', 'Chạy nhanh qua', 'Trượt chân chơi', 'Đi cẩn thận'], 3, 'Sàn ướt rất trơn, dễ ngã.'),
    Q('Khi nghi ngờ ai bị ngộ độc, cần?', ['Để mặc', 'Báo người lớn, gọi 115', 'Đùa giỡn', 'Cho uống thêm thuốc lạ'], 1, '115 là số cấp cứu.'),
    Q('Đồ chơi nhỏ có nên cho vào miệng?', ['Cho em ăn thử', 'Có, nếu nhỏ vừa miệng', 'Không, dễ hóc nghẹn', 'Ngậm tí thôi'], 2, 'Dễ hóc nghẹn nguy hiểm.'),
  ]),

  M(6, 'Lớp học của em', [
    Q('Em đang học lớp mấy?', ['Lớp Lá (mẫu giáo)', 'Lớp mầm', 'Lớp 1', 'Lớp Chồi'], 2, 'Sách này dành cho lớp 1.'),
    Q('Người trực tiếp dạy em là?', ['Lao công', 'Cô/thầy giáo chủ nhiệm', 'Bác sĩ', 'Bảo vệ'], 1, 'Thầy/cô chủ nhiệm dạy lớp em.'),
    Q('Khi gặp thầy cô, em nên?', ['Chạy đi', 'Cười to', 'Quay đi', 'Chào lễ phép'], 3, 'Chào thầy cô là lễ phép.'),
    Q('Trong lớp học có?', ['Giường ngủ', 'Bể bơi', 'Bảng, bàn, ghế, sách vở', 'Bếp ăn'], 2, 'Đồ dùng cơ bản trong lớp.'),
    Q('Khi muốn phát biểu, em phải?', ['Im lặng', 'Đứng lên chạy', 'Hét to', 'Giơ tay xin phép'], 3, 'Giơ tay là quy tắc lớp học.'),
    Q('Em đến lớp để làm gì?', ['Chỉ chơi', 'Để ngủ trưa với bạn', 'Xem TV', 'Học và làm quen bạn bè'], 3, 'Đến lớp để học và chơi cùng bạn.'),
  ]),

  M(7, 'Đồ dùng học tập', [
    Q('Đồ dùng để viết là?', ['Thước kẻ', 'Cục tẩy', 'Cặp sách', 'Bút'], 3, 'Bút để viết.'),
    Q('Đồ dùng để đọc là?', ['Bút chì', 'Vở ô li', 'Sách', 'Bảng con'], 2, 'Sách để đọc, để học.'),
    Q('Đồ dùng để đo, kẻ thẳng là?', ['Cái chậu', 'Cái thước', 'Cái cốc', 'Cái mũ'], 1, 'Thước dùng để đo và kẻ.'),
    Q('Đồ dùng đựng sách vở khi đi học là?', ['Cái rổ', 'Cái nồi', 'Cái bình', 'Cặp sách'], 3, 'Cặp sách (ba lô) đựng sách vở.'),
    Q('Sau khi học xong, em nên?', ['Vứt sách bừa bãi', 'Bỏ quên ở lớp', 'Xé sách', 'Cất sách vở vào cặp'], 3, 'Cất gọn để dùng cho ngày mai.'),
    Q('Giữ gìn đồ dùng học tập là?', ['Vẽ bẩn lên sách', 'Xé trang sách', 'Đập vỡ thước', 'Bọc bìa cẩn thận'], 3, 'Giữ gìn để dùng lâu, không tốn tiền.'),
  ]),

  M(8, 'An toàn ở trường', [
    Q('Trong sân trường, em nên?', ['Leo lên cây cao', 'Đu vào cổng', 'Chạy nhảy xô đẩy mạnh', 'Chơi nhẹ nhàng, an toàn'], 3, 'Chơi an toàn để không bị thương.'),
    Q('Khi xuống cầu thang trường, em phải?', ['Trượt cầu thang', 'Chen lấn', 'Đi hàng đôi, vịn tay', 'Chạy nhanh'], 2, 'Đi cẩn thận tránh ngã chấn thương.'),
    Q('Bạn rủ em trèo lên hàng rào, em sẽ?', ['Im lặng đi theo', 'Từ chối và báo cô', 'Trèo cùng', 'Cười cợt'], 1, 'Hành động nguy hiểm, cần từ chối.'),
    Q('Khi bị bạn đánh, em nên?', ['Đánh lại', 'Báo thầy cô', 'Im lặng chịu đựng', 'Khóc rồi bỏ học'], 1, 'Báo thầy cô để được giúp đỡ.'),
    Q('Em không nên mang vật gì đến trường?', ['Dao, vật sắc nhọn', 'Sách vở', 'Cặp sách', 'Hộp bút màu'], 0, 'Dao, vật sắc nhọn rất nguy hiểm.'),
    Q('Khi bị đau ở trường, em đến đâu?', ['Thư viện', 'Cổng trường', 'Phòng y tế', 'Sân bóng'], 2, 'Phòng y tế chăm sóc khi đau.'),
  ]),

  M(9, 'Bạn bè trong lớp', [
    Q('Khi bạn bị ngã, em nên?', ['Đến đỡ bạn dậy', 'Chỉ trỏ trêu', 'Chạy đi mách cô rồi thôi', 'Cười nhạo'], 0, 'Giúp đỡ bạn khi gặp khó khăn.'),
    Q('Khi bạn không có bút, em có?', ['Giấu bút đi', 'Mách cô liền', 'Cười bạn', 'Cho bạn mượn'], 3, 'Chia sẻ thể hiện tình bạn.'),
    Q('Bạn nói chuyện với em, em nên?', ['Quay đi', 'Lắng nghe', 'Bịt tai', 'Nói to át đi'], 1, 'Lịch sự lắng nghe khi bạn nói.'),
    Q('Một người bạn tốt là?', ['Biết chia sẻ, giúp đỡ', 'Hay đòi quà', 'Hay bắt nạt', 'Hay nói xấu'], 0, 'Bạn tốt giúp nhau cùng tiến bộ.'),
    Q('Trong lớp em có bạn yếu hơn, em nên?', ['Trêu chọc', 'Yêu thương, giúp đỡ', 'Cười nhạo', 'Tránh xa'], 1, 'Yêu thương bạn cùng lớp.'),
    Q('Khi tranh cãi với bạn, em nên?', ['Đánh nhau', 'Giận luôn', 'Nói chuyện nhẹ nhàng', 'Mách phụ huynh ngay'], 2, 'Hoà nhã trao đổi để hiểu nhau.'),
  ]),

  M(10, 'An toàn khi tham gia giao thông (1)', [
    Q('Em đi bộ trên đường ở đâu?', ['Giữa đường', 'Lòng đường', 'Trên xe ô tô đậu', 'Vỉa hè'], 3, 'Vỉa hè dành cho người đi bộ.'),
    Q('Khi qua đường, em phải?', ['Đi giữa đường', 'Chạy băng qua', 'Đi vào vạch trắng dành cho người đi bộ', 'Nhảy qua'], 2, 'Vạch kẻ ngang (sọc ngựa vằn) cho người đi bộ.'),
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Chạy nhanh', 'Chuẩn bị', 'Dừng lại', 'Đi chậm lại'], 2, 'Đỏ = dừng.'),
    Q('Đèn giao thông màu xanh nghĩa là?', ['Dừng lại', 'Đi', 'Chạy lùi', 'Chuẩn bị dừng'], 1, 'Xanh = được đi.'),
    Q('Đèn vàng nghĩa là?', ['Dừng lại', 'Chuẩn bị dừng', 'Chạy nhanh', 'Được phép đi nhanh'], 1, 'Vàng = đi chậm, chuẩn bị dừng.'),
    Q('Trẻ em đi qua đường nên?', ['Vừa đi vừa chơi', 'Nắm tay người lớn', 'Chạy thật nhanh', 'Đi một mình'], 1, 'Nắm tay người lớn cho an toàn.'),
  ]),

  M(11, 'An toàn khi tham gia giao thông (2)', [
    Q('Khi ngồi sau xe máy với bố mẹ, em phải?', ['Nhắm mắt', 'Đứng lên', 'Đội mũ bảo hiểm', 'Bỏ tay ra hai bên'], 2, 'Đội mũ bảo hiểm là bắt buộc.'),
    Q('Khi ngồi trong ô tô, em nên?', ['Thắt dây an toàn', 'Đứng lên', 'Mở cửa lúc xe chạy', 'Thò đầu ra ngoài'], 0, 'Thắt dây an toàn để bảo vệ.'),
    Q('Em có nên chơi đùa giữa đường?', ['Chỉ chơi tí', 'Không, rất nguy hiểm', 'Được, nếu đường ít xe', 'Có, vào buổi tối'], 1, 'Đường có xe → cấm chơi.'),
    Q('Đi xe đạp khi nào?', ['Đi đêm khuya một mình', 'Đi ban ngày, có người lớn', 'Đi giữa lòng đường', 'Đi ngược chiều'], 1, 'An toàn nhất khi có người lớn.'),
    Q('Phương tiện giao thông đường bộ là?', ['Máy bay', 'Ô tô, xe máy', 'Thuyền', 'Tàu thuỷ'], 1, 'Đường bộ: ô tô, xe máy, xe đạp...'),
    Q('Khi xe buýt đang chạy, em không nên?', ['Thò đầu/tay ra cửa sổ', 'Nhường ghế', 'Ngồi yên', 'Vịn chắc tay'], 0, 'Thò đầu/tay ra rất nguy hiểm.'),
  ]),

  M(12, 'Nơi em sống', [
    Q('Nơi nhiều gia đình cùng sinh sống gọi là?', ['Lớp học', 'Siêu thị', 'Xóm/phường/thôn', 'Bệnh viện'], 2, 'Xóm/làng/phường là cộng đồng dân cư.'),
    Q('Hàng xóm là?', ['Người bán hàng', 'Người trong lớp', 'Người ở nhà bên cạnh', 'Người ở rất xa'], 2, 'Hàng xóm = người ở gần nhà.'),
    Q('Khi gặp hàng xóm, em nên?', ['Phớt lờ', 'Trốn đi', 'Quát to', 'Chào hỏi lễ phép'], 3, 'Chào hỏi để tạo tình cảm tốt.'),
    Q('Vùng có nhiều ruộng đồng, cây cối là?', ['Làng quê', 'Vùng biển', 'Sa mạc', 'Thành phố'], 0, 'Làng quê có ruộng, vườn, cây.'),
    Q('Vùng có nhiều nhà cao tầng, xe cộ là?', ['Bãi biển', 'Làng quê', 'Thành phố', 'Núi cao'], 2, 'Thành phố nhiều nhà cao, đông xe.'),
    Q('Em cần giữ vệ sinh nơi mình ở bằng cách?', ['Để rác giữa đường', 'Đốt rác trong nhà', 'Vứt rác bừa bãi', 'Bỏ rác đúng nơi quy định'], 3, 'Bỏ rác đúng chỗ → môi trường sạch.'),
  ]),

  M(13, 'Một số nghề trong cộng đồng', [
    Q('Người chữa bệnh là?', ['Tài xế', 'Bác sĩ', 'Nông dân', 'Giáo viên'], 1, 'Bác sĩ chữa bệnh ở bệnh viện.'),
    Q('Người dạy học là?', ['Đầu bếp', 'Bác sĩ', 'Giáo viên', 'Tài xế'], 2, 'Giáo viên (thầy/cô) dạy học.'),
    Q('Người lái xe chở khách là?', ['Bộ đội', 'Thuỷ thủ', 'Phi công', 'Tài xế'], 3, 'Tài xế lái xe.'),
    Q('Người trồng lúa, rau là?', ['Công nhân', 'Thợ may', 'Bác sĩ', 'Nông dân'], 3, 'Nông dân làm nghề nông.'),
    Q('Người giữ gìn an ninh trật tự là?', ['Đầu bếp', 'Công an', 'Giáo viên', 'Bác sĩ'], 1, 'Công an giữ an ninh.'),
    Q('Mọi nghề lương thiện đều?', ['Chỉ bác sĩ là tốt', 'Chỉ vài nghề được coi trọng', 'Không cần thiết', 'Đáng quý'], 3, 'Nghề nào chân chính cũng đáng quý.'),
  ]),

  M(14, 'Các bộ phận bên ngoài cơ thể (1)', [
    Q('Bộ phận trên cùng của cơ thể là?', ['Cánh tay', 'Bụng', 'Bàn chân', 'Đầu'], 3, 'Đầu ở trên cùng.'),
    Q('Em dùng gì để nhìn?', ['Tai (đôi tai)', 'Mũi', 'Miệng', 'Mắt'], 3, 'Mắt để nhìn.'),
    Q('Em dùng gì để nghe?', ['Mũi', 'Lưỡi', 'Tai', 'Đôi mắt'], 2, 'Tai để nghe.'),
    Q('Em dùng gì để ngửi?', ['Mũi', 'Mắt', 'Lưỡi', 'Tai'], 0, 'Mũi để ngửi.'),
    Q('Em dùng gì để nếm?', ['Mắt', 'Răng', 'Đôi môi', 'Lưỡi'], 3, 'Lưỡi để nếm vị.'),
    Q('Em dùng gì để nói?', ['Mũi', 'Miệng', 'Mắt', 'Lưỡi'], 1, 'Miệng để nói, để ăn.'),
  ]),

  M(15, 'Các bộ phận bên ngoài cơ thể (2)', [
    Q('Em dùng gì để cầm, viết?', ['Khuỷu tay', 'Đầu gối', 'Bờ vai', 'Tay'], 3, 'Tay để cầm nắm, viết.'),
    Q('Em dùng gì để đi, chạy?', ['Đầu gối', 'Chân', 'Bàn tay', 'Khuỷu tay'], 1, 'Chân để đi.'),
    Q('Một bàn tay có mấy ngón?', ['3', '5', '4', '6'], 1, 'Một bàn tay có 5 ngón.'),
    Q('Một bàn chân có mấy ngón?', ['4', '5', '3', '6'], 1, 'Một bàn chân có 5 ngón.'),
    Q('Em có mấy con mắt?', ['3', '2', '1', '4'], 1, 'Em có 2 mắt.'),
    Q('Bảo vệ cơ thể em nên?', ['Chơi vật sắc nhọn', 'Mặc đủ ấm, đội mũ khi nắng', 'Đùa nghịch với lửa', 'Không tắm rửa'], 1, 'Mặc phù hợp thời tiết để khoẻ mạnh.'),
  ]),

  M(16, 'Giữ vệ sinh thân thể', [
    Q('Mỗi ngày em nên đánh răng mấy lần?', ['5 lần', '1 lần', '0 lần', '2 lần'], 3, 'Sáng và tối – 2 lần/ngày.'),
    Q('Khi nào nên rửa tay?', ['Sau khi đi vệ sinh', 'Sau khi chơi bẩn', 'Cả ba lúc trên', 'Trước khi ăn'], 2, 'Rửa tay nhiều thời điểm để sạch khuẩn.'),
    Q('Rửa tay bằng?', ['Khăn ướt nhiều lần', 'Nước cống', 'Nước sạch và xà phòng', 'Chỉ nước lã'], 2, 'Xà phòng và nước sạch.'),
    Q('Cắt móng tay để?', ['Cho đẹp', 'Không cắt', 'Để dài', 'Đỡ giữ vi khuẩn'], 3, 'Móng tay sạch → ít vi khuẩn.'),
    Q('Sau khi chơi xong, em nên?', ['Đi tắm/rửa tay chân', 'Ăn liền', 'Để bẩn vậy', 'Đi ngủ ngay'], 0, 'Vệ sinh thân thể sau khi chơi.'),
    Q('Em tắm mỗi ngày để?', ['Sạch, thơm, khoẻ', 'Bẩn hơn', 'Tốn nước', 'Mệt người'], 0, 'Tắm rửa giúp cơ thể sạch.'),
  ]),

  M(17, 'Ăn uống lành mạnh, an toàn', [
    Q('Trước khi ăn em nên?', ['Chạy nhảy', 'Rửa tay sạch', 'Ăn liền', 'Xem TV'], 1, 'Rửa tay để không đưa vi khuẩn vào miệng.'),
    Q('Em cần uống mấy nước mỗi ngày?', ['Không uống', 'Chỉ nước ngọt', 'Rất ít', 'Đủ nước'], 3, 'Uống đủ nước lọc tốt cho sức khoẻ.'),
    Q('Đồ ăn nào tốt cho sức khoẻ?', ['Đồ chiên rán nhiều', 'Bánh kẹo nhiều', 'Nước ngọt nhiều', 'Cơm, rau, thịt, cá'], 3, 'Bữa ăn cân bằng tốt nhất.'),
    Q('Em KHÔNG nên ăn thức ăn?', ['Ôi thiu, hết hạn', 'Trái cây tươi', 'Nóng vừa', 'Cơm nhà'], 0, 'Thức ăn ôi thiu gây ngộ độc.'),
    Q('Khi ăn, em nên?', ['Nhai kỹ, ăn từ tốn', 'Vừa nằm vừa ăn', 'Nhai vội', 'Vừa ăn vừa chạy'], 0, 'Nhai kỹ tốt cho tiêu hoá.'),
    Q('Sau khi ăn em không nên?', ['Uống nước', 'Chạy nhảy mạnh ngay', 'Súc miệng', 'Nghỉ ngơi nhẹ'], 1, 'Ăn xong chạy mạnh dễ đau bụng.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Người sinh ra em là?', ['Cô giáo', 'Bố mẹ', 'Bạn bè', 'Hàng xóm'], 1, 'Bố mẹ là người sinh ra em.'),
    Q('Khi qua đường, em đi vào?', ['Vạch ngang dành cho người đi bộ', 'Lòng đường', 'Trên xe đậu', 'Giữa đường'], 0, 'Vạch sọc ngựa vằn cho người đi bộ.'),
    Q('Đèn giao thông đỏ nghĩa là?', ['Đi nhanh', 'Chuẩn bị đi', 'Dừng', 'Chuẩn bị'], 2, 'Đỏ = dừng.'),
    Q('Em rửa tay bằng?', ['Nước cống', 'Khăn ướt', 'Chỉ nước lã', 'Nước và xà phòng'], 3, 'Xà phòng + nước sạch.'),
    Q('Hành động giúp bố mẹ là?', ['Vứt rác bừa', 'Đập đồ', 'Tự cất đồ chơi, gấp áo', 'Bày bừa'], 2, 'Việc nhẹ phù hợp tuổi em.'),
    Q('Trong lớp muốn nói, em phải?', ['Hét to', 'Đứng dậy chạy', 'Giơ tay xin phép', 'Im lặng luôn'], 2, 'Giơ tay xin phép là nội quy.'),
    Q('Em có mấy ngón tay (cả 2 bàn)?', ['8', '12', '10', '5'], 2, '2 bàn tay × 5 = 10 ngón.'),
    Q('Số gọi cứu hoả là?', ['116', '115', '114', '113'], 2, '114 = cứu hoả.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — THỰC VẬT · ĐỘNG VẬT · CƠ THỂ NGƯỜI · TRÁI ĐẤT ────────────────
  M(19, 'Cây xanh quanh em', [
    Q('Cây xanh giúp ta có?', ['Không khí trong lành', 'Tiếng ồn', 'Ô nhiễm', 'Khói bụi'], 0, 'Cây nhả ô-xi giúp không khí sạch.'),
    Q('Một cây thường có những bộ phận nào?', ['Rễ, thân, lá', 'Chỉ có lá', 'Chỉ có rễ', 'Chỉ có thân'], 0, 'Cây gồm rễ, thân, lá (và hoa, quả).'),
    Q('Phần nào của cây hút nước, hút chất?', ['Rễ', 'Quả cây', 'Lá cây', 'Hoa cây'], 0, 'Rễ hút nước và chất dinh dưỡng từ đất.'),
    Q('Cây cần gì để sống?', ['Chỉ rác', 'Nước, ánh sáng, không khí', 'Không cần gì', 'Chỉ bóng tối'], 1, 'Cây cần nước, ánh sáng mặt trời, không khí.'),
    Q('Việc làm bảo vệ cây xanh là?', ['Đốt cây', 'Tưới nước, không bẻ cành', 'Bẻ cành, hái lá bừa', 'Khắc tên vào thân cây'], 1, 'Chăm sóc, không phá hoại cây.'),
    Q('Cây cho ta?', ['Tiếng ồn', 'Bóng mát, gỗ, quả', 'Sương mù', 'Cát bụi'], 1, 'Cây cho bóng mát, gỗ, hoa, quả.'),
  ]),

  M(20, 'Một số loại rau và quả', [
    Q('Rau nào em hay ăn?', ['Hoa cúc, hoa hồng', 'Rau muống, rau cải', 'Lá khô', 'Vỏ trấu'], 1, 'Đều là rau ăn lá phổ biến.'),
    Q('Quả nào màu đỏ, tròn?', ['Dưa leo', 'Quả cam', 'Cà chua', 'Dưa hấu vỏ xanh'], 2, 'Cà chua chín đỏ.'),
    Q('Quả nào màu vàng, dài cong?', ['Táo', 'Chuối', 'Dưa hấu', 'Nho chùm tím'], 1, 'Chuối chín màu vàng, dài cong.'),
    Q('Trước khi ăn rau, quả tươi, em phải?', ['Lau bằng áo', 'Ăn liền', 'Rửa sạch', 'Để bẩn vậy'], 2, 'Rửa sạch để bỏ vi khuẩn, hoá chất.'),
    Q('Ăn rau, quả tốt cho?', ['Béo phì', 'Sức khoẻ, da đẹp, ít táo bón', 'Đau bụng', 'Sâu răng'], 1, 'Rau quả có vitamin, chất xơ.'),
    Q('Quả nào KHÔNG phải trái cây?', ['Quả táo', 'Quả xoài', 'Cà rốt', 'Quả cam'], 2, 'Cà rốt là củ/rau.'),
  ]),

  M(21, 'Một số con vật quen thuộc (1)', [
    Q('Con vật nào kêu "meo meo"?', ['Bò (ụm bò)', 'Mèo', 'Chó (gâu gâu)', 'Gà (cục tác)'], 1, 'Mèo kêu meo meo.'),
    Q('Con vật nào trông nhà, kêu "gâu gâu"?', ['Chó', 'Vịt (cạp cạp)', 'Mèo (meo meo)', 'Bò (ụm bò)'], 0, 'Chó kêu gâu gâu, trông nhà.'),
    Q('Con vật nào cho ta sữa?', ['Con ếch', 'Con cá', 'Bò', 'Gà mái'], 2, 'Bò cho sữa.'),
    Q('Con vật nào đẻ trứng, gáy ò ó o?', ['Gà trống', 'Con lợn', 'Con vịt', 'Con bò'], 0, 'Gà trống gáy ò ó o.'),
    Q('Con vật nào bơi dưới nước?', ['Con mèo', 'Con chó', 'Cá', 'Con gà'], 2, 'Cá sống và bơi dưới nước.'),
    Q('Em cần làm gì với con vật nuôi?', ['Yêu thương, chăm sóc', 'Bỏ đói', 'Trêu chọc', 'Đánh đập'], 0, 'Đối xử nhẹ nhàng với con vật.'),
  ]),

  M(22, 'Tết Nguyên Đán quê em', [
    Q('Tết Nguyên Đán là?', ['Trung Thu', 'Tết Tây', 'Tết cổ truyền Việt Nam', 'Quốc khánh'], 2, 'Tết Nguyên Đán là Tết âm lịch của VN.'),
    Q('Hoa nào nở chơi Tết miền Bắc?', ['Hoa đào', 'Hoa mai', 'Hoa hồng', 'Hoa cúc'], 0, 'Miền Bắc chơi hoa đào.'),
    Q('Hoa nào nở chơi Tết miền Nam?', ['Hoa hồng', 'Hoa mai', 'Hoa đào', 'Hoa sen'], 1, 'Miền Nam chơi hoa mai vàng.'),
    Q('Bánh truyền thống Tết là?', ['Bánh kem', 'Bánh chưng, bánh tét', 'Bánh mì', 'Bánh tiêu'], 1, 'Bánh chưng (Bắc), bánh tét (Nam).'),
    Q('Khi được lì xì, em nên?', ['Cảm ơn lễ phép', 'Giật lấy ngay', 'Bóc liền tại chỗ', 'Đòi thêm'], 0, 'Cảm ơn lễ phép khi nhận lì xì.'),
    Q('Tết là dịp để?', ['Bỏ học mãi', 'Sum họp gia đình', 'Đập phá đồ', 'Cãi nhau'], 1, 'Tết để gia đình sum vầy.'),
  ]),

  M(23, 'Con vật nuôi và con vật hoang dã', [
    Q('Con vật nào được nuôi trong nhà?', ['Hổ, sư tử', 'Cá sấu', 'Voi, gấu', 'Chó, mèo'], 3, 'Chó mèo là vật nuôi quen thuộc.'),
    Q('Con vật nào sống trong rừng?', ['Gà, vịt', 'Mèo, chó', 'Bò, lợn', 'Hổ, voi'], 3, 'Hổ, voi sống ở rừng.'),
    Q('Khi thấy con chó lạ, em nên?', ['Ném đá', 'Chạy lại vuốt', 'Đuổi đánh', 'Đứng yên, không trêu'], 3, 'Đứng yên để không bị cắn.'),
    Q('Con vật nào biết bay?', ['Chim', 'Con cá', 'Con bò', 'Con heo'], 0, 'Chim biết bay.'),
    Q('Con vật nào sống dưới nước?', ['Con khỉ', 'Con voi', 'Con hổ', 'Cá, tôm'], 3, 'Cá, tôm sống dưới nước.'),
    Q('Hành động bảo vệ động vật là?', ['Nhốt vào lồng nhỏ', 'Săn bắt', 'Không phá tổ chim, không hành hạ', 'Ném đá'], 2, 'Không phá tổ, không hành hạ là yêu động vật.'),
  ]),

  M(24, 'Bốn mùa trong năm', [
    Q('Một năm có mấy mùa?', ['5', '2', '4', '3'], 2, 'Một năm thường có 4 mùa.'),
    Q('Mùa nào trời nóng nhất?', ['Hạ', 'Mùa đông', 'Mùa thu', 'Mùa xuân'], 0, 'Mùa hạ (hè) nóng nhất.'),
    Q('Mùa nào trời lạnh nhất?', ['Mùa xuân', 'Đông', 'Mùa thu', 'Mùa hạ'], 1, 'Mùa đông lạnh nhất.'),
    Q('Mùa nào hoa nở, ấm áp?', ['Xuân', 'Mùa hạ', 'Mùa thu', 'Mùa đông'], 0, 'Mùa xuân hoa nở, ấm dần.'),
    Q('Mùa nào lá vàng rụng?', ['Mùa hạ', 'Thu', 'Mùa đông', 'Mùa xuân'], 1, 'Mùa thu lá vàng rụng.'),
    Q('Mùa hè em mặc?', ['Áo mỏng, mát', 'Áo dày', 'Khăn len', 'Áo bông'], 0, 'Hè nóng → mặc mỏng mát.'),
  ]),

  M(25, 'Thời tiết hôm nay', [
    Q('Trời có nắng gọi là?', ['Trời mưa', 'Trời nhiều mây', 'Trời tuyết', 'Trời nắng'], 3, 'Có nắng = trời nắng.'),
    Q('Trời có mưa rơi gọi là?', ['Trời nắng', 'Trời bão', 'Trời tuyết', 'Trời mưa'], 3, 'Có mưa = trời mưa.'),
    Q('Khi trời mưa ra ngoài, em cần?', ['Áo mưa hoặc ô', 'Mũ rộng vành chống nắng', 'Kính râm', 'Không cần gì'], 0, 'Áo mưa/ô để không bị ướt.'),
    Q('Khi trời nắng to, em nên?', ['Đứng phơi nắng lâu', 'Đội mũ, mặc áo nhẹ', 'Mặc áo bông', 'Đeo khăn len'], 1, 'Đội mũ chống nắng.'),
    Q('Khi trời lạnh, em nên?', ['Mặc áo cộc', 'Để chân trần', 'Mặc đủ ấm', 'Đi tắm nước lạnh'], 2, 'Mặc đủ ấm để không ốm.'),
    Q('Khi có sấm sét, em không nên?', ['Tắt thiết bị điện', 'Vào nhà tránh', 'Đứng dưới cây to', 'Đóng cửa sổ'], 2, 'Đứng dưới cây to dễ bị sét đánh.'),
  ]),

  M(26, 'Mặt Trời và ban ngày', [
    Q('Ban ngày em nhìn thấy?', ['Mặt Trăng', 'Mặt Trời', 'Cả hai luôn', 'Không thấy gì'], 1, 'Ban ngày nhìn thấy Mặt Trời.'),
    Q('Mặt Trời cho ta?', ['Bóng tối', 'Ánh sáng và hơi ấm', 'Tiếng sấm', 'Gió mạnh'], 1, 'Mặt Trời cho sáng và ấm.'),
    Q('Em có nên nhìn thẳng vào Mặt Trời?', ['Không, hại mắt', 'Cứ nhìn lâu lâu', 'Chỉ buổi trưa', 'Có, khi trời nhiều mây'], 0, 'Nhìn thẳng Mặt Trời rất hại mắt.'),
    Q('Khi không có ánh sáng Mặt Trời lâu thì?', ['Cây vẫn xanh tốt', 'Cây ra nhiều quả', 'Cây lớn nhanh', 'Cây không sống được'], 3, 'Cây cần ánh sáng để sống.'),
    Q('Mặt Trời mọc ở hướng?', ['Hướng Nam', 'Hướng Tây', 'Hướng Bắc', 'Đông'], 3, 'Mặt Trời mọc ở phía Đông.'),
    Q('Buổi trưa Mặt Trời ở?', ['Dưới đất', 'Không thấy', 'Cao trên đỉnh đầu', 'Thấp gần đường chân trời'], 2, 'Buổi trưa Mặt Trời lên cao nhất.'),
  ]),

  M(27, 'Mặt Trăng và ban đêm', [
    Q('Ban đêm em nhìn thấy?', ['Mặt Trời', 'Mặt Trăng và các ngôi sao', 'Cầu vồng', 'Mưa'], 1, 'Đêm có Mặt Trăng và sao.'),
    Q('Đêm rằm trăng có hình?', ['Vuông', 'Tròn', 'Lưỡi liềm', 'Tam giác'], 1, 'Trăng rằm tròn vành vạnh.'),
    Q('Đêm cuối tháng trăng?', ['Không thấy / rất mảnh', 'Tròn vành vạnh', 'Lưỡi liềm to', 'Đỏ rực'], 0, 'Cuối tháng trăng khuyết hết, gần như không thấy.'),
    Q('Tết Trung Thu là vào?', ['Rằm tháng Tám', 'Quốc khánh', 'Mùng 1 Tết', 'Rằm tháng Giêng'], 0, 'Trung Thu = rằm 15/8 âm lịch.'),
    Q('Ban đêm em nên?', ['La hét', 'Chạy nhảy ngoài đường', 'Đi ngủ đúng giờ', 'Thức xem TV khuya'], 2, 'Ngủ đủ giấc để khoẻ.'),
    Q('Các ngôi sao ban đêm trông?', ['Sáng nhấp nháy', 'Tối thui', 'Có màu đen', 'To như Mặt Trăng'], 0, 'Sao nhỏ, sáng nhấp nháy.'),
  ]),

  M(28, 'Ngày và đêm', [
    Q('Sự khác nhau giữa ngày và đêm là?', ['Cả hai đều tối', 'Ngày sáng, đêm tối', 'Ngày tối', 'Cả hai đều sáng'], 1, 'Ngày có Mặt Trời sáng, đêm tối.'),
    Q('Một ngày có mấy giờ?', ['36', '12', '48', '24'], 3, 'Một ngày = 24 giờ.'),
    Q('Em đi học thường vào?', ['Ban đêm', 'Cả ngày lẫn đêm', 'Ban ngày', 'Không đi'], 2, 'Học sinh học ban ngày.'),
    Q('Em đi ngủ thường vào?', ['Trưa', 'Ban đêm', 'Sáng sớm', 'Ban ngày'], 1, 'Trẻ em ngủ ban đêm là chính.'),
    Q('Sau khi Mặt Trời lặn là?', ['Buổi tối', 'Buổi sáng', 'Bình minh', 'Buổi trưa'], 0, 'Mặt Trời lặn → tối.'),
    Q('Em nên dậy lúc?', ['Trưa, sau giờ học', 'Đêm khuya', 'Sáng sớm', 'Chiều tối'], 2, 'Dậy sớm để chuẩn bị đi học.'),
  ]),

  M(29, 'Nước trong cuộc sống', [
    Q('Em uống nước nào tốt?', ['Nước ao', 'Nước mưa chưa lọc', 'Nước sạch đun sôi để nguội', 'Nước cống'], 2, 'Nước sạch, đun sôi an toàn.'),
    Q('Nước có ở đâu?', ['Chỉ ngoài đường', 'Chỉ trong chai', 'Sông, hồ, biển, vòi nước', 'Không ở đâu'], 2, 'Nước có nhiều nơi trong tự nhiên.'),
    Q('Em cần nước để làm gì?', ['Uống, tắm, nấu ăn, tưới cây', 'Vứt rác', 'Rửa xe ô tô mỗi ngày', 'Đốt lửa'], 0, 'Nước cần cho rất nhiều việc.'),
    Q('Tiết kiệm nước nghĩa là?', ['Vặn vòi vô tội vạ', 'Tắt vòi khi đánh răng', 'Tắm rất lâu', 'Để vòi chảy quên'], 1, 'Tắt vòi khi không dùng = tiết kiệm.'),
    Q('Không nên đổ gì xuống sông?', ['Lá khô tự nhiên', 'Cát sạch', 'Rác, dầu', 'Nước sạch'], 2, 'Rác/dầu làm ô nhiễm nước.'),
    Q('Khi đi bơi, em cần?', ['Bơi đêm', 'Bơi một mình', 'Tự xuống chỗ sâu', 'Có người lớn trông'], 3, 'Trẻ em phải có người lớn giám sát.'),
  ]),

  M(30, 'Giữ vệ sinh môi trường', [
    Q('Em vứt rác vào?', ['Gốc cây', 'Thùng rác', 'Sân nhà người khác', 'Vỉa hè'], 1, 'Bỏ rác vào thùng rác.'),
    Q('Hành động làm ô nhiễm môi trường là?', ['Trồng cây', 'Vứt rác bừa bãi', 'Tưới hoa', 'Quét nhà'], 1, 'Vứt rác bừa làm bẩn môi trường.'),
    Q('Phân loại rác là?', ['Đốt hết', 'Để rác hữu cơ riêng, vô cơ riêng', 'Vứt xuống sông', 'Trộn tất cả'], 1, 'Phân loại giúp tái chế tốt hơn.'),
    Q('Trồng cây xanh giúp?', ['Không khí trong lành', 'Ô nhiễm hơn', 'Nhiều khói bụi', 'Mất bóng mát'], 0, 'Cây làm sạch không khí.'),
    Q('Khi thấy bạn xả rác, em nên?', ['Mặc kệ', 'Nhắc bạn nhặt lên', 'Cổ vũ bạn', 'Cười và làm theo'], 1, 'Nhắc nhở bạn giữ vệ sinh chung.'),
    Q('Môi trường sạch giúp em?', ['Khoẻ mạnh', 'Đau ốm', 'Mệt mỏi', 'Bị bệnh'], 0, 'Môi trường sạch → sức khoẻ tốt.'),
  ]),

  M(31, 'Phòng tránh muỗi, côn trùng', [
    Q('Để tránh muỗi đốt, ban đêm em nên?', ['Tắt đèn ngủ ngoài sân', 'Để chậu nước trong phòng', 'Mở cửa toang', 'Ngủ trong màn'], 3, 'Ngủ màn (mùng) chống muỗi.'),
    Q('Bệnh nguy hiểm do muỗi truyền là?', ['Đau mắt', 'Sốt xuất huyết', 'Cảm cúm thường', 'Đau răng'], 1, 'Muỗi vằn truyền sốt xuất huyết.'),
    Q('Để không có muỗi sinh sản, em nên?', ['Vứt rác bừa', 'Trữ nước đọng lâu', 'Để chậu hoa nhiều nước cũ', 'Đổ nước đọng'], 3, 'Muỗi đẻ ở nước đọng → đổ đi.'),
    Q('Khi bị ong/kiến cắn, em nên?', ['Báo người lớn', 'Bóp mạnh chỗ cắn', 'Tiếp tục chơi', 'Bỏ qua'], 0, 'Báo người lớn để xử trí.'),
    Q('Em có nên trêu chọc tổ ong, tổ kiến?', ['Có, để xem chúng phản ứng', 'Nếu rảnh', 'Tuỳ, nếu tổ ở xa', 'Không, rất nguy hiểm'], 3, 'Bị đốt rất đau, có thể nguy hiểm.'),
    Q('Sau khi đi ngoài đồng, em nên?', ['Lên giường ngủ luôn', 'Để bẩn', 'Tắm rửa sạch', 'Ăn ngay'], 2, 'Tắm rửa để bỏ vi khuẩn.'),
  ]),

  M(32, 'Khi bị ốm', [
    Q('Khi bị sốt em cần?', ['Tự uống thuốc bất kỳ', 'Tắm nước lạnh', 'Báo người lớn', 'Chạy chơi ngoài nắng'], 2, 'Báo người lớn để được chăm sóc.'),
    Q('Để phòng ốm, em nên?', ['Thức khuya', 'Tắm khuya', 'Mặc ấm khi lạnh, ăn uống đủ', 'Tắm nước lạnh khi nóng'], 2, 'Mặc phù hợp + ăn đủ chất → khoẻ.'),
    Q('Em có tự ý uống thuốc trong tủ?', ['Cho bạn cùng uống', 'Có, nếu thấy giống thuốc cũ', 'Không, rất nguy hiểm', 'Uống thử ít'], 2, 'Tự uống thuốc gây ngộ độc.'),
    Q('Khi ho/hắt hơi, em nên?', ['Quay đi, che miệng', 'Hét to', 'Phun thẳng vào bạn', 'Không che'], 0, 'Che miệng tránh lây bệnh.'),
    Q('Số gọi cấp cứu y tế là?', ['113', '116', '115', '114'], 2, '115 = cấp cứu.'),
    Q('Tiêm vắc-xin giúp em?', ['Phòng bệnh', 'Mệt mỏi mãi', 'Bị bệnh', 'Đau lâu'], 0, 'Vắc-xin giúp cơ thể chống bệnh.'),
  ]),

  M(33, 'Trang phục phù hợp', [
    Q('Mùa hè em mặc?', ['Khăn len', 'Áo mỏng, ngắn tay', 'Áo mưa', 'Áo bông dày'], 1, 'Hè nóng → mặc mát.'),
    Q('Mùa đông em mặc?', ['Áo tắm', 'Áo cộc', 'Áo mưa mỏng', 'Áo ấm, áo bông'], 3, 'Đông lạnh → mặc ấm.'),
    Q('Khi trời mưa em cần?', ['Quạt giấy', 'Kính râm', 'Áo bông', 'Áo mưa hoặc ô'], 3, 'Áo mưa/ô tránh ướt.'),
    Q('Đi ra nắng to em cần?', ['Ô tô bự', 'Áo bông', 'Mũ rộng vành', 'Khăn quàng len'], 2, 'Mũ rộng vành chống nắng.'),
    Q('Khi đi ngủ em mặc?', ['Áo bơi', 'Áo vest', 'Đồ ngủ thoải mái', 'Đồng phục'], 2, 'Đồ ngủ rộng rãi dễ chịu.'),
    Q('Em nên giặt giũ quần áo?', ['Mỗi năm 1 lần', 'Khi rách', 'Không bao giờ', 'Khi bẩn'], 3, 'Bẩn là giặt để giữ sạch.'),
  ]),

  M(34, 'Hoạt động ngoài trời và vận động', [
    Q('Tập thể dục đều mỗi ngày giúp em?', ['Béo bệu', 'Mệt mãi', 'Khoẻ mạnh', 'Yếu hơn'], 2, 'Vận động giúp cơ thể khoẻ.'),
    Q('Hoạt động ngoài trời nào tốt?', ['Nằm cả ngày', 'Ngồi xem TV', 'Chơi điện tử lâu', 'Đá bóng, đá cầu, chạy bộ'], 3, 'Vận động ngoài trời khoẻ và vui.'),
    Q('Khi chơi ngoài trời nắng to, em nên?', ['Đội mũ, uống nước', 'Cởi áo phơi nắng', 'Chạy đến kiệt sức', 'Ở quá lâu'], 0, 'Bảo vệ đầu, bổ sung nước.'),
    Q('Khi chơi xong em nên?', ['Ăn liền tay bẩn', 'Rửa tay rửa mặt', 'Đi ngủ liền', 'Để bẩn vậy'], 1, 'Vệ sinh sau khi chơi.'),
    Q('Trẻ em nên xem TV/điện thoại?', ['Có giới hạn, ngắt nghỉ', 'Không bao giờ ngắt', 'Đến đêm khuya', 'Cả ngày'], 0, 'Xem ít, nghỉ mắt để bảo vệ thị lực.'),
    Q('Sau bữa ăn em nên?', ['Nhảy dây mạnh', 'Nghỉ ngơi nhẹ', 'Chạy ngay rất mạnh', 'Đi bơi liền'], 1, 'Ăn xong nên nghỉ nhẹ rồi mới vận động.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Bố mẹ là người?', ['Hàng xóm', 'Người lạ', 'Sinh và nuôi nấng em', 'Bạn cùng lớp'], 2, 'Bố mẹ sinh và nuôi em.'),
    Q('Đèn giao thông xanh nghĩa là?', ['Lùi xe', 'Đi', 'Dừng lại', 'Chuẩn bị dừng'], 1, 'Xanh = được đi.'),
    Q('Em có mấy mắt?', ['1', '4', '2', '3'], 2, '2 mắt để nhìn.'),
    Q('Một năm có mấy mùa?', ['4', '3', '5', '2'], 0, '4 mùa: xuân, hạ, thu, đông.'),
    Q('Mặt Trời mọc ở hướng?', ['Đông', 'Hướng Tây', 'Hướng Nam', 'Hướng Bắc'], 0, 'Mặt Trời mọc hướng Đông.'),
    Q('Em vứt rác vào?', ['Thùng rác', 'Xuống sông', 'Vỉa hè', 'Gốc cây'], 0, 'Bỏ rác đúng nơi.'),
    Q('Để tránh muỗi đốt, em nên?', ['Tắt đèn ngoài sân', 'Để nước đọng quanh nhà', 'Mở cửa toang', 'Ngủ trong màn'], 3, 'Ngủ màn (mùng) phòng muỗi.'),
    Q('Số gọi cứu hoả là?', ['114', '115', '116', '113'], 0, '114 = cứu hoả.'),
    Q('Trước khi ăn em nên?', ['Rửa tay sạch', 'Xem TV', 'Chạy chơi', 'Ăn liền'], 0, 'Rửa tay chống vi khuẩn.'),
    Q('Bảo vệ cây xanh là?', ['Khắc tên', 'Chặt phá', 'Đốt cây', 'Tưới nước, không bẻ cành'], 3, 'Chăm sóc, không phá hoại cây.'),
  ], { difficulty: 2 }),
];

export const P1TNXH_SCENARIOS = indexBy(P1TNXH_WEEKS);
