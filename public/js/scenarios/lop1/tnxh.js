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
    Q('Trong gia đình em thường có những ai?', ['Chỉ có em', 'Bố, mẹ và các con', 'Chỉ có bố', 'Chỉ có bạn bè'], 1, 'Gia đình cơ bản gồm bố, mẹ và các con.'),
    Q('Người sinh ra em là?', ['Cô giáo', 'Bố mẹ', 'Bạn bè', 'Bác hàng xóm'], 1, 'Bố mẹ là người sinh ra em.'),
    Q('Bố của bố em gọi là?', ['Ông nội', 'Ông ngoại', 'Cậu', 'Bác'], 0, 'Bố của bố = ông nội.'),
    Q('Mẹ của mẹ em gọi là?', ['Bà nội', 'Bà ngoại', 'Cô', 'Dì'], 1, 'Mẹ của mẹ = bà ngoại.'),
    Q('Hành động lễ phép với ông bà là?', ['Cãi lại', 'Chào hỏi, vâng lời', 'Bỏ đi chơi', 'Không nghe lời'], 1, 'Lễ phép = chào hỏi, vâng lời.'),
    Q('Trong gia đình em yêu thương ai?', ['Tất cả mọi người', 'Chỉ yêu em bé', 'Không yêu ai', 'Chỉ yêu bố'], 0, 'Yêu thương tất cả thành viên trong gia đình.'),
  ]),

  M(2, 'Đồ dùng trong nhà', [
    Q('Đồ dùng để ngồi là?', ['Cái ghế', 'Cái nồi', 'Cái chậu', 'Cái chổi'], 0, 'Cái ghế dùng để ngồi.'),
    Q('Đồ dùng để nấu cơm là?', ['Cái bàn', 'Nồi cơm điện', 'Cái tủ', 'Cái giường'], 1, 'Nồi cơm điện dùng nấu cơm.'),
    Q('Đồ dùng để ngủ là?', ['Cái giường', 'Cái bàn', 'Cái ghế', 'Cái chậu'], 0, 'Cái giường để ngủ.'),
    Q('Đồ dùng để quét nhà là?', ['Cái chổi', 'Cái thìa', 'Cái nồi', 'Cái bát'], 0, 'Chổi để quét nhà.'),
    Q('Sau khi dùng xong đồ vật, em nên?', ['Vứt bừa bãi', 'Cất gọn vào chỗ cũ', 'Ném đi', 'Đập vỡ'], 1, 'Cất gọn để giữ nhà ngăn nắp.'),
    Q('Đồ dùng nguy hiểm trẻ em KHÔNG nên tự dùng:', ['Dao, kéo, bếp lửa', 'Sách vở', 'Bút chì', 'Chổi quét'], 0, 'Dao, kéo, bếp dễ gây tai nạn.'),
  ]),

  M(3, 'Công việc nhà em làm được', [
    Q('Việc bạn nhỏ lớp 1 có thể giúp mẹ là?', ['Nấu cơm bằng bếp gas', 'Tự gấp quần áo của mình', 'Sửa điện', 'Đi chợ một mình'], 1, 'Việc nhẹ phù hợp lứa tuổi.'),
    Q('Sau khi ăn xong, em nên?', ['Bỏ bát đi chơi', 'Mang bát ra bồn rửa', 'Ném bát', 'Để bát trên giường'], 1, 'Phụ dọn bát đũa giúp gia đình.'),
    Q('Đồ chơi chơi xong em nên?', ['Bỏ giữa nhà', 'Cất vào hộp', 'Ném ra sân', 'Đập vỡ'], 1, 'Cất gọn để không vấp ngã, không mất đồ.'),
    Q('Việc giúp đỡ bố mẹ thể hiện?', ['Sự lười biếng', 'Tình yêu thương', 'Sự ích kỷ', 'Sự ngại ngùng'], 1, 'Yêu thương qua hành động giúp đỡ.'),
    Q('Khi mẹ mệt, em nên?', ['Đòi mẹ chơi cùng', 'Hỏi thăm và rót nước cho mẹ', 'Bỏ đi chơi', 'Khóc to'], 1, 'Quan tâm khi người thân không khoẻ.'),
    Q('Hành động nào KHÔNG tốt?', ['Tự dọn đồ chơi', 'Vứt rác bừa bãi', 'Mời ông bà ăn cơm', 'Chào bố mẹ khi đi học'], 1, 'Vứt rác bừa làm bẩn nhà.'),
  ]),

  M(4, 'An toàn ở nhà (1) — Tránh điện, lửa', [
    Q('Hành động nguy hiểm cần TRÁNH là?', ['Đọc sách', 'Cắm ngón tay vào ổ điện', 'Rửa tay sạch', 'Tưới cây'], 1, 'Chọc vào ổ điện bị điện giật.'),
    Q('Tay ướt có nên chạm vào ổ điện?', ['Có', 'Không, rất nguy hiểm', 'Chỉ chạm 1 lần', 'Tuỳ ý'], 1, 'Nước dẫn điện → dễ bị giật.'),
    Q('Khi bếp đang cháy lửa, em nên?', ['Đứng xa', 'Lại gần xem', 'Ném giấy vào lửa', 'Nghịch quanh bếp'], 0, 'Đứng xa để tránh bỏng.'),
    Q('Thấy nồi nước sôi trên bếp, em làm gì?', ['Tự bê xuống', 'Báo người lớn', 'Đổ tay thử', 'Mở nắp ngay'], 1, 'Trẻ nhỏ không tự bê nồi nóng.'),
    Q('Nếu thấy khói/lửa to ở nhà, em phải?', ['Trốn dưới giường', 'Hô lớn báo người lớn và chạy ra', 'Tiếp tục chơi', 'Đóng kín cửa'], 1, 'Báo người lớn và thoát ra nơi an toàn.'),
    Q('Số điện thoại cứu hoả ở Việt Nam là?', ['113', '114', '115', '116'], 1, '114 = cứu hoả.'),
  ]),

  M(5, 'An toàn ở nhà (2) — Tránh ngộ độc, té ngã', [
    Q('Thấy chai thuốc lạ, em có nên uống thử không?', ['Có', 'Không, rất nguy hiểm', 'Uống ít thôi', 'Chia bạn cùng uống'], 1, 'Có thể là thuốc/hoá chất gây ngộ độc.'),
    Q('Thức ăn rơi xuống đất bẩn, em nên?', ['Nhặt lên ăn', 'Bỏ đi', 'Đưa em bé ăn', 'Cất vào tủ'], 1, 'Bỏ đi để tránh vi khuẩn.'),
    Q('Trên cầu thang em nên?', ['Chạy nhảy nô đùa', 'Đi từng bậc cẩn thận', 'Trượt cầu thang', 'Đẩy bạn'], 1, 'Đi cẩn thận để không bị ngã.'),
    Q('Khi sàn nhà ướt, em nên?', ['Chạy nhanh qua', 'Đi cẩn thận', 'Nhảy lên', 'Trượt chân chơi'], 1, 'Sàn ướt rất trơn, dễ ngã.'),
    Q('Khi nghi ngờ ai bị ngộ độc, cần?', ['Để mặc', 'Báo người lớn, gọi 115', 'Cho uống thêm thuốc lạ', 'Đùa giỡn'], 1, '115 là số cấp cứu.'),
    Q('Đồ chơi nhỏ có nên cho vào miệng?', ['Có', 'Không, dễ hóc nghẹn', 'Cho em ăn thử', 'Ngậm tí thôi'], 1, 'Dễ hóc nghẹn nguy hiểm.'),
  ]),

  M(6, 'Lớp học của em', [
    Q('Em đang học lớp mấy?', ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 5'], 0, 'Sách này dành cho lớp 1.'),
    Q('Người trực tiếp dạy em là?', ['Bảo vệ', 'Cô/thầy giáo chủ nhiệm', 'Lao công', 'Bác sĩ'], 1, 'Thầy/cô chủ nhiệm dạy lớp em.'),
    Q('Khi gặp thầy cô, em nên?', ['Quay đi', 'Chào lễ phép', 'Cười to', 'Chạy đi'], 1, 'Chào thầy cô là lễ phép.'),
    Q('Trong lớp học có?', ['Bảng, bàn, ghế, sách vở', 'Bếp ăn', 'Giường ngủ', 'Bể bơi'], 0, 'Đồ dùng cơ bản trong lớp.'),
    Q('Khi muốn phát biểu, em phải?', ['Hét to', 'Giơ tay xin phép', 'Đứng lên chạy', 'Im lặng'], 1, 'Giơ tay là quy tắc lớp học.'),
    Q('Em đến lớp để làm gì?', ['Chỉ chơi', 'Học và làm quen bạn bè', 'Ngủ', 'Xem TV'], 1, 'Đến lớp để học và chơi cùng bạn.'),
  ]),

  M(7, 'Đồ dùng học tập', [
    Q('Đồ dùng để viết là?', ['Bút', 'Chổi', 'Đũa', 'Nồi'], 0, 'Bút để viết.'),
    Q('Đồ dùng để đọc là?', ['Sách', 'Ghế', 'Chăn', 'Bát'], 0, 'Sách để đọc, để học.'),
    Q('Đồ dùng để đo, kẻ thẳng là?', ['Cái thước', 'Cái cốc', 'Cái mũ', 'Cái chậu'], 0, 'Thước dùng để đo và kẻ.'),
    Q('Đồ dùng đựng sách vở khi đi học là?', ['Cặp sách', 'Cái nồi', 'Cái rổ', 'Cái bình'], 0, 'Cặp sách (ba lô) đựng sách vở.'),
    Q('Sau khi học xong, em nên?', ['Vứt sách bừa bãi', 'Cất sách vở vào cặp', 'Xé sách', 'Bỏ quên ở lớp'], 1, 'Cất gọn để dùng cho ngày mai.'),
    Q('Giữ gìn đồ dùng học tập là?', ['Vẽ bẩn lên sách', 'Bọc bìa cẩn thận', 'Xé trang sách', 'Đập vỡ thước'], 1, 'Giữ gìn để dùng lâu, không tốn tiền.'),
  ]),

  M(8, 'An toàn ở trường', [
    Q('Trong sân trường, em nên?', ['Chạy nhảy xô đẩy mạnh', 'Chơi nhẹ nhàng, an toàn', 'Leo lên cây cao', 'Đu vào cổng'], 1, 'Chơi an toàn để không bị thương.'),
    Q('Khi xuống cầu thang trường, em phải?', ['Chen lấn', 'Đi hàng đôi, vịn tay', 'Chạy nhanh', 'Trượt cầu thang'], 1, 'Đi cẩn thận tránh ngã chấn thương.'),
    Q('Bạn rủ em trèo lên hàng rào, em sẽ?', ['Trèo cùng', 'Từ chối và báo cô', 'Cười cợt', 'Im lặng đi theo'], 1, 'Hành động nguy hiểm, cần từ chối.'),
    Q('Khi bị bạn đánh, em nên?', ['Đánh lại', 'Báo thầy cô', 'Im lặng chịu đựng', 'Khóc rồi bỏ học'], 1, 'Báo thầy cô để được giúp đỡ.'),
    Q('Em không nên mang vật gì đến trường?', ['Sách vở', 'Bút', 'Dao, vật sắc nhọn', 'Cặp sách'], 2, 'Dao, vật sắc nhọn rất nguy hiểm.'),
    Q('Khi bị đau ở trường, em đến đâu?', ['Phòng y tế', 'Thư viện', 'Sân bóng', 'Cổng trường'], 0, 'Phòng y tế chăm sóc khi đau.'),
  ]),

  M(9, 'Bạn bè trong lớp', [
    Q('Khi bạn bị ngã, em nên?', ['Cười nhạo', 'Đến đỡ bạn dậy', 'Bỏ đi', 'Chỉ trỏ trêu'], 1, 'Giúp đỡ bạn khi gặp khó khăn.'),
    Q('Khi bạn không có bút, em có?', ['Cho bạn mượn', 'Giấu bút đi', 'Cười bạn', 'Mách cô liền'], 0, 'Chia sẻ thể hiện tình bạn.'),
    Q('Bạn nói chuyện với em, em nên?', ['Lắng nghe', 'Quay đi', 'Bịt tai', 'Nói to át đi'], 0, 'Lịch sự lắng nghe khi bạn nói.'),
    Q('Một người bạn tốt là?', ['Hay nói xấu', 'Biết chia sẻ, giúp đỡ', 'Hay đòi quà', 'Hay bắt nạt'], 1, 'Bạn tốt giúp nhau cùng tiến bộ.'),
    Q('Trong lớp em có bạn yếu hơn, em nên?', ['Trêu chọc', 'Yêu thương, giúp đỡ', 'Tránh xa', 'Cười nhạo'], 1, 'Yêu thương bạn cùng lớp.'),
    Q('Khi tranh cãi với bạn, em nên?', ['Đánh nhau', 'Nói chuyện nhẹ nhàng', 'Mách phụ huynh ngay', 'Giận luôn'], 1, 'Hoà nhã trao đổi để hiểu nhau.'),
  ]),

  M(10, 'An toàn khi tham gia giao thông (1)', [
    Q('Em đi bộ trên đường ở đâu?', ['Lòng đường', 'Vỉa hè', 'Giữa đường', 'Trên xe ô tô đậu'], 1, 'Vỉa hè dành cho người đi bộ.'),
    Q('Khi qua đường, em phải?', ['Chạy băng qua', 'Đi vào vạch trắng dành cho người đi bộ', 'Nhảy qua', 'Đi giữa đường'], 1, 'Vạch kẻ ngang (sọc ngựa vằn) cho người đi bộ.'),
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Đi', 'Dừng lại', 'Chuẩn bị', 'Chạy nhanh'], 1, 'Đỏ = dừng.'),
    Q('Đèn giao thông màu xanh nghĩa là?', ['Đi', 'Dừng', 'Chuẩn bị dừng', 'Chạy lùi'], 0, 'Xanh = được đi.'),
    Q('Đèn vàng nghĩa là?', ['Đi', 'Dừng lại', 'Chuẩn bị dừng', 'Chạy nhanh'], 2, 'Vàng = đi chậm, chuẩn bị dừng.'),
    Q('Trẻ em đi qua đường nên?', ['Đi một mình', 'Nắm tay người lớn', 'Chạy thật nhanh', 'Vừa đi vừa chơi'], 1, 'Nắm tay người lớn cho an toàn.'),
  ]),

  M(11, 'An toàn khi tham gia giao thông (2)', [
    Q('Khi ngồi sau xe máy với bố mẹ, em phải?', ['Đội mũ bảo hiểm', 'Đứng lên', 'Bỏ tay ra hai bên', 'Nhắm mắt'], 0, 'Đội mũ bảo hiểm là bắt buộc.'),
    Q('Khi ngồi trong ô tô, em nên?', ['Thắt dây an toàn', 'Mở cửa lúc xe chạy', 'Đứng lên', 'Thò đầu ra ngoài'], 0, 'Thắt dây an toàn để bảo vệ.'),
    Q('Em có nên chơi đùa giữa đường?', ['Có', 'Không, rất nguy hiểm', 'Tuỳ ý', 'Chỉ chơi tí'], 1, 'Đường có xe → cấm chơi.'),
    Q('Đi xe đạp khi nào?', ['Đi đêm khuya một mình', 'Đi ban ngày, có người lớn', 'Đi giữa lòng đường', 'Đi ngược chiều'], 1, 'An toàn nhất khi có người lớn.'),
    Q('Phương tiện giao thông đường bộ là?', ['Tàu thuỷ', 'Ô tô, xe máy', 'Máy bay', 'Thuyền'], 1, 'Đường bộ: ô tô, xe máy, xe đạp...'),
    Q('Khi xe buýt đang chạy, em không nên?', ['Ngồi yên', 'Thò đầu/tay ra cửa sổ', 'Vịn chắc tay', 'Nhường ghế'], 1, 'Thò đầu/tay ra rất nguy hiểm.'),
  ]),

  M(12, 'Nơi em sống', [
    Q('Nơi nhiều gia đình cùng sinh sống gọi là?', ['Lớp học', 'Xóm/phường/thôn', 'Bệnh viện', 'Siêu thị'], 1, 'Xóm/làng/phường là cộng đồng dân cư.'),
    Q('Hàng xóm là?', ['Người ở nhà bên cạnh', 'Người ở rất xa', 'Người trong lớp', 'Người bán hàng'], 0, 'Hàng xóm = người ở gần nhà.'),
    Q('Khi gặp hàng xóm, em nên?', ['Chào hỏi lễ phép', 'Phớt lờ', 'Trốn đi', 'Quát to'], 0, 'Chào hỏi để tạo tình cảm tốt.'),
    Q('Vùng có nhiều ruộng đồng, cây cối là?', ['Làng quê', 'Thành phố', 'Sa mạc', 'Biển'], 0, 'Làng quê có ruộng, vườn, cây.'),
    Q('Vùng có nhiều nhà cao tầng, xe cộ là?', ['Làng quê', 'Thành phố', 'Núi cao', 'Biển'], 1, 'Thành phố nhiều nhà cao, đông xe.'),
    Q('Em cần giữ vệ sinh nơi mình ở bằng cách?', ['Vứt rác bừa bãi', 'Bỏ rác đúng nơi quy định', 'Đốt rác trong nhà', 'Để rác giữa đường'], 1, 'Bỏ rác đúng chỗ → môi trường sạch.'),
  ]),

  M(13, 'Một số nghề trong cộng đồng', [
    Q('Người chữa bệnh là?', ['Giáo viên', 'Bác sĩ', 'Nông dân', 'Tài xế'], 1, 'Bác sĩ chữa bệnh ở bệnh viện.'),
    Q('Người dạy học là?', ['Bác sĩ', 'Giáo viên', 'Tài xế', 'Đầu bếp'], 1, 'Giáo viên (thầy/cô) dạy học.'),
    Q('Người lái xe chở khách là?', ['Phi công', 'Tài xế', 'Thuỷ thủ', 'Bộ đội'], 1, 'Tài xế lái xe.'),
    Q('Người trồng lúa, rau là?', ['Công nhân', 'Nông dân', 'Kỹ sư', 'Thợ may'], 1, 'Nông dân làm nghề nông.'),
    Q('Người giữ gìn an ninh trật tự là?', ['Bác sĩ', 'Công an', 'Đầu bếp', 'Ca sĩ'], 1, 'Công an giữ an ninh.'),
    Q('Mọi nghề lương thiện đều?', ['Đáng quý', 'Không cần thiết', 'Chỉ bác sĩ là tốt', 'Vô ích'], 0, 'Nghề nào chân chính cũng đáng quý.'),
  ]),

  M(14, 'Các bộ phận bên ngoài cơ thể (1)', [
    Q('Bộ phận trên cùng của cơ thể là?', ['Đầu', 'Chân', 'Bụng', 'Tay'], 0, 'Đầu ở trên cùng.'),
    Q('Em dùng gì để nhìn?', ['Tai', 'Mắt', 'Mũi', 'Miệng'], 1, 'Mắt để nhìn.'),
    Q('Em dùng gì để nghe?', ['Mắt', 'Tai', 'Mũi', 'Lưỡi'], 1, 'Tai để nghe.'),
    Q('Em dùng gì để ngửi?', ['Mũi', 'Mắt', 'Tay', 'Chân'], 0, 'Mũi để ngửi.'),
    Q('Em dùng gì để nếm?', ['Tay', 'Mắt', 'Lưỡi', 'Mũi'], 2, 'Lưỡi để nếm vị.'),
    Q('Em dùng gì để nói?', ['Tai', 'Miệng', 'Mắt', 'Mũi'], 1, 'Miệng để nói, để ăn.'),
  ]),

  M(15, 'Các bộ phận bên ngoài cơ thể (2)', [
    Q('Em dùng gì để cầm, viết?', ['Chân', 'Tay', 'Đầu', 'Lưng'], 1, 'Tay để cầm nắm, viết.'),
    Q('Em dùng gì để đi, chạy?', ['Tay', 'Chân', 'Đầu', 'Bụng'], 1, 'Chân để đi.'),
    Q('Một bàn tay có mấy ngón?', ['3', '4', '5', '6'], 2, 'Một bàn tay có 5 ngón.'),
    Q('Một bàn chân có mấy ngón?', ['3', '4', '5', '6'], 2, 'Một bàn chân có 5 ngón.'),
    Q('Em có mấy con mắt?', ['1', '2', '3', '4'], 1, 'Em có 2 mắt.'),
    Q('Bảo vệ cơ thể em nên?', ['Chơi vật sắc nhọn', 'Mặc đủ ấm, đội mũ khi nắng', 'Đùa nghịch với lửa', 'Không tắm rửa'], 1, 'Mặc phù hợp thời tiết để khoẻ mạnh.'),
  ]),

  M(16, 'Giữ vệ sinh thân thể', [
    Q('Mỗi ngày em nên đánh răng mấy lần?', ['0 lần', '1 lần', '2 lần', '5 lần'], 2, 'Sáng và tối – 2 lần/ngày.'),
    Q('Khi nào nên rửa tay?', ['Sau khi đi vệ sinh', 'Trước khi ăn', 'Sau khi chơi bẩn', 'Cả ba lúc trên'], 3, 'Rửa tay nhiều thời điểm để sạch khuẩn.'),
    Q('Rửa tay bằng?', ['Nước sạch và xà phòng', 'Nước cống', 'Bùn', 'Cát'], 0, 'Xà phòng và nước sạch.'),
    Q('Cắt móng tay để?', ['Đỡ giữ vi khuẩn', 'Cho đẹp', 'Để dài', 'Không cắt'], 0, 'Móng tay sạch → ít vi khuẩn.'),
    Q('Sau khi chơi xong, em nên?', ['Đi ngủ ngay', 'Đi tắm/rửa tay chân', 'Ăn liền', 'Để bẩn vậy'], 1, 'Vệ sinh thân thể sau khi chơi.'),
    Q('Em tắm mỗi ngày để?', ['Sạch, thơm, khoẻ', 'Tốn nước', 'Mệt người', 'Bẩn hơn'], 0, 'Tắm rửa giúp cơ thể sạch.'),
  ]),

  M(17, 'Ăn uống lành mạnh, an toàn', [
    Q('Trước khi ăn em nên?', ['Rửa tay sạch', 'Ăn liền', 'Chạy nhảy', 'Xem TV'], 0, 'Rửa tay để không đưa vi khuẩn vào miệng.'),
    Q('Em cần uống mấy nước mỗi ngày?', ['Không uống', 'Rất ít', 'Đủ nước', 'Chỉ nước ngọt'], 2, 'Uống đủ nước lọc tốt cho sức khoẻ.'),
    Q('Đồ ăn nào tốt cho sức khoẻ?', ['Bánh kẹo nhiều', 'Cơm, rau, thịt, cá', 'Nước ngọt nhiều', 'Đồ chiên rán nhiều'], 1, 'Bữa ăn cân bằng tốt nhất.'),
    Q('Em KHÔNG nên ăn thức ăn?', ['Nóng vừa', 'Ôi thiu, hết hạn', 'Cơm nhà', 'Trái cây tươi'], 1, 'Thức ăn ôi thiu gây ngộ độc.'),
    Q('Khi ăn, em nên?', ['Nhai kỹ, ăn từ tốn', 'Vừa ăn vừa chạy', 'Nhai vội', 'Vừa nằm vừa ăn'], 0, 'Nhai kỹ tốt cho tiêu hoá.'),
    Q('Sau khi ăn em không nên?', ['Súc miệng', 'Chạy nhảy mạnh ngay', 'Nghỉ ngơi nhẹ', 'Uống nước'], 1, 'Ăn xong chạy mạnh dễ đau bụng.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Người sinh ra em là?', ['Bố mẹ', 'Cô giáo', 'Bạn bè', 'Hàng xóm'], 0, 'Bố mẹ là người sinh ra em.'),
    Q('Khi qua đường, em đi vào?', ['Vạch ngang dành cho người đi bộ', 'Giữa đường', 'Trên xe đậu', 'Lòng đường'], 0, 'Vạch sọc ngựa vằn cho người đi bộ.'),
    Q('Đèn giao thông đỏ nghĩa là?', ['Đi', 'Dừng', 'Chuẩn bị', 'Đi nhanh'], 1, 'Đỏ = dừng.'),
    Q('Em rửa tay bằng?', ['Nước và xà phòng', 'Bùn', 'Cát', 'Nước cống'], 0, 'Xà phòng + nước sạch.'),
    Q('Hành động giúp bố mẹ là?', ['Tự cất đồ chơi, gấp áo', 'Bày bừa', 'Vứt rác bừa', 'Đập đồ'], 0, 'Việc nhẹ phù hợp tuổi em.'),
    Q('Trong lớp muốn nói, em phải?', ['Hét to', 'Giơ tay xin phép', 'Đứng dậy chạy', 'Im lặng luôn'], 1, 'Giơ tay xin phép là nội quy.'),
    Q('Em có mấy ngón tay (cả 2 bàn)?', ['5', '8', '10', '12'], 2, '2 bàn tay × 5 = 10 ngón.'),
    Q('Số gọi cứu hoả là?', ['113', '114', '115', '116'], 1, '114 = cứu hoả.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — THỰC VẬT · ĐỘNG VẬT · CƠ THỂ NGƯỜI · TRÁI ĐẤT ────────────────
  M(19, 'Cây xanh quanh em', [
    Q('Cây xanh giúp ta có?', ['Không khí trong lành', 'Khói bụi', 'Ô nhiễm', 'Tiếng ồn'], 0, 'Cây nhả ô-xi giúp không khí sạch.'),
    Q('Một cây thường có những bộ phận nào?', ['Rễ, thân, lá', 'Chỉ có lá', 'Chỉ có thân', 'Chỉ có rễ'], 0, 'Cây gồm rễ, thân, lá (và hoa, quả).'),
    Q('Phần nào của cây hút nước, hút chất?', ['Lá', 'Rễ', 'Hoa', 'Quả'], 1, 'Rễ hút nước và chất dinh dưỡng từ đất.'),
    Q('Cây cần gì để sống?', ['Nước, ánh sáng, không khí', 'Chỉ bóng tối', 'Không cần gì', 'Chỉ rác'], 0, 'Cây cần nước, ánh sáng mặt trời, không khí.'),
    Q('Việc làm bảo vệ cây xanh là?', ['Bẻ cành, hái lá bừa', 'Tưới nước, không bẻ cành', 'Khắc tên vào thân cây', 'Đốt cây'], 1, 'Chăm sóc, không phá hoại cây.'),
    Q('Cây cho ta?', ['Bóng mát, gỗ, quả', 'Khói', 'Bụi', 'Rác'], 0, 'Cây cho bóng mát, gỗ, hoa, quả.'),
  ]),

  M(20, 'Một số loại rau và quả', [
    Q('Rau nào em hay ăn?', ['Rau muống, rau cải', 'Cát', 'Sỏi', 'Giấy'], 0, 'Đều là rau ăn lá phổ biến.'),
    Q('Quả nào màu đỏ, tròn?', ['Cà chua', 'Chuối', 'Mít', 'Dưa hấu vỏ xanh'], 0, 'Cà chua chín đỏ.'),
    Q('Quả nào màu vàng, dài cong?', ['Chuối', 'Táo', 'Nho', 'Dưa hấu'], 0, 'Chuối chín màu vàng, dài cong.'),
    Q('Trước khi ăn rau, quả tươi, em phải?', ['Rửa sạch', 'Ăn liền', 'Lau bằng áo', 'Để bẩn vậy'], 0, 'Rửa sạch để bỏ vi khuẩn, hoá chất.'),
    Q('Ăn rau, quả tốt cho?', ['Sức khoẻ, da đẹp, ít táo bón', 'Sâu răng', 'Béo phì', 'Đau bụng'], 0, 'Rau quả có vitamin, chất xơ.'),
    Q('Quả nào KHÔNG phải trái cây?', ['Cam', 'Xoài', 'Cà rốt', 'Táo'], 2, 'Cà rốt là củ/rau.'),
  ]),

  M(21, 'Một số con vật quen thuộc (1)', [
    Q('Con vật nào kêu "meo meo"?', ['Mèo', 'Chó', 'Bò', 'Gà'], 0, 'Mèo kêu meo meo.'),
    Q('Con vật nào trông nhà, kêu "gâu gâu"?', ['Mèo', 'Chó', 'Bò', 'Vịt'], 1, 'Chó kêu gâu gâu, trông nhà.'),
    Q('Con vật nào cho ta sữa?', ['Bò', 'Gà', 'Cá', 'Ếch'], 0, 'Bò cho sữa.'),
    Q('Con vật nào đẻ trứng, gáy ò ó o?', ['Vịt', 'Gà trống', 'Lợn', 'Bò'], 1, 'Gà trống gáy ò ó o.'),
    Q('Con vật nào bơi dưới nước?', ['Cá', 'Mèo', 'Chó', 'Gà'], 0, 'Cá sống và bơi dưới nước.'),
    Q('Em cần làm gì với con vật nuôi?', ['Yêu thương, chăm sóc', 'Đánh đập', 'Bỏ đói', 'Trêu chọc'], 0, 'Đối xử nhẹ nhàng với con vật.'),
  ]),

  M(22, 'Tết Nguyên Đán quê em', [
    Q('Tết Nguyên Đán là?', ['Tết Tây', 'Tết cổ truyền Việt Nam', 'Trung Thu', 'Quốc khánh'], 1, 'Tết Nguyên Đán là Tết âm lịch của VN.'),
    Q('Hoa nào nở chơi Tết miền Bắc?', ['Hoa đào', 'Hoa mai', 'Hoa hồng', 'Hoa cúc'], 0, 'Miền Bắc chơi hoa đào.'),
    Q('Hoa nào nở chơi Tết miền Nam?', ['Hoa đào', 'Hoa mai', 'Hoa sen', 'Hoa hồng'], 1, 'Miền Nam chơi hoa mai vàng.'),
    Q('Bánh truyền thống Tết là?', ['Bánh chưng, bánh tét', 'Bánh kem', 'Bánh mì', 'Bánh tiêu'], 0, 'Bánh chưng (Bắc), bánh tét (Nam).'),
    Q('Khi được lì xì, em nên?', ['Giật lấy ngay', 'Cảm ơn lễ phép', 'Bóc liền tại chỗ', 'Đòi thêm'], 1, 'Cảm ơn lễ phép khi nhận lì xì.'),
    Q('Tết là dịp để?', ['Cãi nhau', 'Sum họp gia đình', 'Đập phá đồ', 'Bỏ học mãi'], 1, 'Tết để gia đình sum vầy.'),
  ]),

  M(23, 'Con vật nuôi và con vật hoang dã', [
    Q('Con vật nào được nuôi trong nhà?', ['Chó, mèo', 'Hổ, sư tử', 'Voi, gấu', 'Cá sấu'], 0, 'Chó mèo là vật nuôi quen thuộc.'),
    Q('Con vật nào sống trong rừng?', ['Hổ, voi', 'Gà, vịt', 'Mèo, chó', 'Bò, lợn'], 0, 'Hổ, voi sống ở rừng.'),
    Q('Khi thấy con chó lạ, em nên?', ['Chạy lại vuốt', 'Đứng yên, không trêu', 'Đuổi đánh', 'Ném đá'], 1, 'Đứng yên để không bị cắn.'),
    Q('Con vật nào biết bay?', ['Chim', 'Cá', 'Bò', 'Heo'], 0, 'Chim biết bay.'),
    Q('Con vật nào sống dưới nước?', ['Cá, tôm', 'Hổ', 'Voi', 'Khỉ'], 0, 'Cá, tôm sống dưới nước.'),
    Q('Hành động bảo vệ động vật là?', ['Săn bắt', 'Không phá tổ chim, không hành hạ', 'Nhốt vào lồng nhỏ', 'Ném đá'], 1, 'Không phá tổ, không hành hạ là yêu động vật.'),
  ]),

  M(24, 'Bốn mùa trong năm', [
    Q('Một năm có mấy mùa?', ['2', '3', '4', '5'], 2, 'Một năm thường có 4 mùa.'),
    Q('Mùa nào trời nóng nhất?', ['Xuân', 'Hạ', 'Thu', 'Đông'], 1, 'Mùa hạ (hè) nóng nhất.'),
    Q('Mùa nào trời lạnh nhất?', ['Xuân', 'Hạ', 'Thu', 'Đông'], 3, 'Mùa đông lạnh nhất.'),
    Q('Mùa nào hoa nở, ấm áp?', ['Xuân', 'Hạ', 'Thu', 'Đông'], 0, 'Mùa xuân hoa nở, ấm dần.'),
    Q('Mùa nào lá vàng rụng?', ['Xuân', 'Hạ', 'Thu', 'Đông'], 2, 'Mùa thu lá vàng rụng.'),
    Q('Mùa hè em mặc?', ['Áo dày', 'Áo mỏng, mát', 'Áo bông', 'Khăn len'], 1, 'Hè nóng → mặc mỏng mát.'),
  ]),

  M(25, 'Thời tiết hôm nay', [
    Q('Trời có nắng gọi là?', ['Trời nắng', 'Trời mưa', 'Trời tuyết', 'Trời nhiều mây'], 0, 'Có nắng = trời nắng.'),
    Q('Trời có mưa rơi gọi là?', ['Trời nắng', 'Trời mưa', 'Trời bão', 'Trời tuyết'], 1, 'Có mưa = trời mưa.'),
    Q('Khi trời mưa ra ngoài, em cần?', ['Áo mưa hoặc ô', 'Không cần gì', 'Mũ rộng vành chống nắng', 'Kính râm'], 0, 'Áo mưa/ô để không bị ướt.'),
    Q('Khi trời nắng to, em nên?', ['Đội mũ, mặc áo nhẹ', 'Mặc áo bông', 'Đứng phơi nắng lâu', 'Đeo khăn len'], 0, 'Đội mũ chống nắng.'),
    Q('Khi trời lạnh, em nên?', ['Mặc đủ ấm', 'Mặc áo cộc', 'Để chân trần', 'Đi tắm nước lạnh'], 0, 'Mặc đủ ấm để không ốm.'),
    Q('Khi có sấm sét, em không nên?', ['Vào nhà tránh', 'Đứng dưới cây to', 'Tắt thiết bị điện', 'Đóng cửa sổ'], 1, 'Đứng dưới cây to dễ bị sét đánh.'),
  ]),

  M(26, 'Mặt Trời và ban ngày', [
    Q('Ban ngày em nhìn thấy?', ['Mặt Trời', 'Mặt Trăng', 'Cả hai luôn', 'Không thấy gì'], 0, 'Ban ngày nhìn thấy Mặt Trời.'),
    Q('Mặt Trời cho ta?', ['Ánh sáng và hơi ấm', 'Mưa', 'Tuyết', 'Bóng tối'], 0, 'Mặt Trời cho sáng và ấm.'),
    Q('Em có nên nhìn thẳng vào Mặt Trời?', ['Có', 'Không, hại mắt', 'Chỉ buổi trưa', 'Cứ nhìn lâu lâu'], 1, 'Nhìn thẳng Mặt Trời rất hại mắt.'),
    Q('Khi không có ánh sáng Mặt Trời lâu thì?', ['Cây không sống được', 'Cây vẫn xanh tốt', 'Cây lớn nhanh', 'Cây ra nhiều quả'], 0, 'Cây cần ánh sáng để sống.'),
    Q('Mặt Trời mọc ở hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 0, 'Mặt Trời mọc ở phía Đông.'),
    Q('Buổi trưa Mặt Trời ở?', ['Thấp gần đường chân trời', 'Cao trên đỉnh đầu', 'Dưới đất', 'Không thấy'], 1, 'Buổi trưa Mặt Trời lên cao nhất.'),
  ]),

  M(27, 'Mặt Trăng và ban đêm', [
    Q('Ban đêm em nhìn thấy?', ['Mặt Trời', 'Mặt Trăng và các ngôi sao', 'Cầu vồng', 'Mưa'], 1, 'Đêm có Mặt Trăng và sao.'),
    Q('Đêm rằm trăng có hình?', ['Tròn', 'Lưỡi liềm', 'Vuông', 'Tam giác'], 0, 'Trăng rằm tròn vành vạnh.'),
    Q('Đêm cuối tháng trăng?', ['Tròn', 'Không thấy / rất mảnh', 'Vuông', 'Đỏ rực'], 1, 'Cuối tháng trăng khuyết hết, gần như không thấy.'),
    Q('Tết Trung Thu là vào?', ['Rằm tháng Tám', 'Rằm tháng Giêng', 'Mùng 1 Tết', 'Quốc khánh'], 0, 'Trung Thu = rằm 15/8 âm lịch.'),
    Q('Ban đêm em nên?', ['Đi ngủ đúng giờ', 'Thức xem TV khuya', 'Chạy nhảy ngoài đường', 'La hét'], 0, 'Ngủ đủ giấc để khoẻ.'),
    Q('Các ngôi sao ban đêm trông?', ['Sáng nhấp nháy', 'Tối thui', 'To như Mặt Trăng', 'Có màu đen'], 0, 'Sao nhỏ, sáng nhấp nháy.'),
  ]),

  M(28, 'Ngày và đêm', [
    Q('Sự khác nhau giữa ngày và đêm là?', ['Ngày sáng, đêm tối', 'Cả hai đều sáng', 'Cả hai đều tối', 'Ngày tối'], 0, 'Ngày có Mặt Trời sáng, đêm tối.'),
    Q('Một ngày có mấy giờ?', ['12', '24', '36', '48'], 1, 'Một ngày = 24 giờ.'),
    Q('Em đi học thường vào?', ['Ban ngày', 'Ban đêm', 'Cả ngày lẫn đêm', 'Không đi'], 0, 'Học sinh học ban ngày.'),
    Q('Em đi ngủ thường vào?', ['Ban ngày', 'Ban đêm', 'Sáng sớm', 'Trưa'], 1, 'Trẻ em ngủ ban đêm là chính.'),
    Q('Sau khi Mặt Trời lặn là?', ['Buổi sáng', 'Buổi tối', 'Buổi trưa', 'Bình minh'], 1, 'Mặt Trời lặn → tối.'),
    Q('Em nên dậy lúc?', ['Sáng sớm', 'Trưa', 'Chiều tối', 'Đêm khuya'], 0, 'Dậy sớm để chuẩn bị đi học.'),
  ]),

  M(29, 'Nước trong cuộc sống', [
    Q('Em uống nước nào tốt?', ['Nước sạch đun sôi để nguội', 'Nước ao', 'Nước cống', 'Nước mưa chưa lọc'], 0, 'Nước sạch, đun sôi an toàn.'),
    Q('Nước có ở đâu?', ['Sông, hồ, biển, vòi nước', 'Chỉ trong chai', 'Chỉ ngoài đường', 'Không ở đâu'], 0, 'Nước có nhiều nơi trong tự nhiên.'),
    Q('Em cần nước để làm gì?', ['Uống, tắm, nấu ăn, tưới cây', 'Đốt lửa', 'Vứt rác', 'Phá hoại'], 0, 'Nước cần cho rất nhiều việc.'),
    Q('Tiết kiệm nước nghĩa là?', ['Vặn vòi vô tội vạ', 'Tắt vòi khi đánh răng', 'Tắm rất lâu', 'Để vòi chảy quên'], 1, 'Tắt vòi khi không dùng = tiết kiệm.'),
    Q('Không nên đổ gì xuống sông?', ['Rác, dầu', 'Nước sạch', 'Cát sạch', 'Lá khô tự nhiên'], 0, 'Rác/dầu làm ô nhiễm nước.'),
    Q('Khi đi bơi, em cần?', ['Có người lớn trông', 'Tự xuống chỗ sâu', 'Bơi đêm', 'Bơi một mình'], 0, 'Trẻ em phải có người lớn giám sát.'),
  ]),

  M(30, 'Giữ vệ sinh môi trường', [
    Q('Em vứt rác vào?', ['Thùng rác', 'Gốc cây', 'Vỉa hè', 'Sân nhà người khác'], 0, 'Bỏ rác vào thùng rác.'),
    Q('Hành động làm ô nhiễm môi trường là?', ['Vứt rác bừa bãi', 'Trồng cây', 'Tưới hoa', 'Quét nhà'], 0, 'Vứt rác bừa làm bẩn môi trường.'),
    Q('Phân loại rác là?', ['Để rác hữu cơ riêng, vô cơ riêng', 'Trộn tất cả', 'Đốt hết', 'Vứt xuống sông'], 0, 'Phân loại giúp tái chế tốt hơn.'),
    Q('Trồng cây xanh giúp?', ['Không khí trong lành', 'Ô nhiễm hơn', 'Nhiều khói bụi', 'Mất bóng mát'], 0, 'Cây làm sạch không khí.'),
    Q('Khi thấy bạn xả rác, em nên?', ['Cười và làm theo', 'Nhắc bạn nhặt lên', 'Mặc kệ', 'Cổ vũ bạn'], 1, 'Nhắc nhở bạn giữ vệ sinh chung.'),
    Q('Môi trường sạch giúp em?', ['Khoẻ mạnh', 'Bị bệnh', 'Mệt mỏi', 'Đau ốm'], 0, 'Môi trường sạch → sức khoẻ tốt.'),
  ]),

  M(31, 'Phòng tránh muỗi, côn trùng', [
    Q('Để tránh muỗi đốt, ban đêm em nên?', ['Ngủ trong màn', 'Mở cửa toang', 'Tắt đèn ngủ ngoài sân', 'Để chậu nước trong phòng'], 0, 'Ngủ màn (mùng) chống muỗi.'),
    Q('Bệnh nguy hiểm do muỗi truyền là?', ['Sốt xuất huyết', 'Đau răng', 'Đau mắt', 'Cảm cúm thường'], 0, 'Muỗi vằn truyền sốt xuất huyết.'),
    Q('Để không có muỗi sinh sản, em nên?', ['Đổ nước đọng', 'Trữ nước đọng lâu', 'Để chậu hoa nhiều nước cũ', 'Vứt rác bừa'], 0, 'Muỗi đẻ ở nước đọng → đổ đi.'),
    Q('Khi bị ong/kiến cắn, em nên?', ['Báo người lớn', 'Bóp mạnh chỗ cắn', 'Bỏ qua', 'Tiếp tục chơi'], 0, 'Báo người lớn để xử trí.'),
    Q('Em có nên trêu chọc tổ ong, tổ kiến?', ['Có', 'Không, rất nguy hiểm', 'Tuỳ ý', 'Nếu rảnh'], 1, 'Bị đốt rất đau, có thể nguy hiểm.'),
    Q('Sau khi đi ngoài đồng, em nên?', ['Tắm rửa sạch', 'Lên giường ngủ luôn', 'Để bẩn', 'Ăn ngay'], 0, 'Tắm rửa để bỏ vi khuẩn.'),
  ]),

  M(32, 'Khi bị ốm', [
    Q('Khi bị sốt em cần?', ['Báo người lớn', 'Tự uống thuốc bất kỳ', 'Chạy chơi ngoài nắng', 'Tắm nước lạnh'], 0, 'Báo người lớn để được chăm sóc.'),
    Q('Để phòng ốm, em nên?', ['Mặc ấm khi lạnh, ăn uống đủ', 'Bỏ ăn', 'Thức khuya', 'Tắm khuya'], 0, 'Mặc phù hợp + ăn đủ chất → khoẻ.'),
    Q('Em có tự ý uống thuốc trong tủ?', ['Có', 'Không, rất nguy hiểm', 'Uống thử ít', 'Cho bạn cùng uống'], 1, 'Tự uống thuốc gây ngộ độc.'),
    Q('Khi ho/hắt hơi, em nên?', ['Quay đi, che miệng', 'Phun thẳng vào bạn', 'Không che', 'Hét to'], 0, 'Che miệng tránh lây bệnh.'),
    Q('Số gọi cấp cứu y tế là?', ['113', '114', '115', '116'], 2, '115 = cấp cứu.'),
    Q('Tiêm vắc-xin giúp em?', ['Phòng bệnh', 'Bị bệnh', 'Mệt mỏi mãi', 'Đau lâu'], 0, 'Vắc-xin giúp cơ thể chống bệnh.'),
  ]),

  M(33, 'Trang phục phù hợp', [
    Q('Mùa hè em mặc?', ['Áo mỏng, ngắn tay', 'Áo bông dày', 'Khăn len', 'Áo mưa'], 0, 'Hè nóng → mặc mát.'),
    Q('Mùa đông em mặc?', ['Áo ấm, áo bông', 'Áo cộc', 'Áo mưa mỏng', 'Áo tắm'], 0, 'Đông lạnh → mặc ấm.'),
    Q('Khi trời mưa em cần?', ['Áo mưa hoặc ô', 'Áo bông', 'Quạt giấy', 'Kính râm'], 0, 'Áo mưa/ô tránh ướt.'),
    Q('Đi ra nắng to em cần?', ['Mũ rộng vành', 'Áo bông', 'Khăn quàng len', 'Ô tô bự'], 0, 'Mũ rộng vành chống nắng.'),
    Q('Khi đi ngủ em mặc?', ['Đồ ngủ thoải mái', 'Áo vest', 'Đồng phục', 'Áo bơi'], 0, 'Đồ ngủ rộng rãi dễ chịu.'),
    Q('Em nên giặt giũ quần áo?', ['Khi bẩn', 'Không bao giờ', 'Khi rách', 'Mỗi năm 1 lần'], 0, 'Bẩn là giặt để giữ sạch.'),
  ]),

  M(34, 'Hoạt động ngoài trời và vận động', [
    Q('Tập thể dục đều mỗi ngày giúp em?', ['Khoẻ mạnh', 'Yếu hơn', 'Béo bệu', 'Mệt mãi'], 0, 'Vận động giúp cơ thể khoẻ.'),
    Q('Hoạt động ngoài trời nào tốt?', ['Đá bóng, đá cầu, chạy bộ', 'Ngồi xem TV', 'Nằm cả ngày', 'Chơi điện tử lâu'], 0, 'Vận động ngoài trời khoẻ và vui.'),
    Q('Khi chơi ngoài trời nắng to, em nên?', ['Đội mũ, uống nước', 'Ở quá lâu', 'Cởi áo phơi nắng', 'Chạy đến kiệt sức'], 0, 'Bảo vệ đầu, bổ sung nước.'),
    Q('Khi chơi xong em nên?', ['Rửa tay rửa mặt', 'Để bẩn vậy', 'Đi ngủ liền', 'Ăn liền tay bẩn'], 0, 'Vệ sinh sau khi chơi.'),
    Q('Trẻ em nên xem TV/điện thoại?', ['Cả ngày', 'Có giới hạn, ngắt nghỉ', 'Đến đêm khuya', 'Không bao giờ ngắt'], 1, 'Xem ít, nghỉ mắt để bảo vệ thị lực.'),
    Q('Sau bữa ăn em nên?', ['Nghỉ ngơi nhẹ', 'Chạy ngay rất mạnh', 'Đi bơi liền', 'Nhảy dây mạnh'], 0, 'Ăn xong nên nghỉ nhẹ rồi mới vận động.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Bố mẹ là người?', ['Sinh và nuôi nấng em', 'Hàng xóm', 'Bạn cùng lớp', 'Người lạ'], 0, 'Bố mẹ sinh và nuôi em.'),
    Q('Đèn giao thông xanh nghĩa là?', ['Đi', 'Dừng', 'Chuẩn bị dừng', 'Lùi xe'], 0, 'Xanh = được đi.'),
    Q('Em có mấy mắt?', ['1', '2', '3', '4'], 1, '2 mắt để nhìn.'),
    Q('Một năm có mấy mùa?', ['2', '3', '4', '5'], 2, '4 mùa: xuân, hạ, thu, đông.'),
    Q('Mặt Trời mọc ở hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 0, 'Mặt Trời mọc hướng Đông.'),
    Q('Em vứt rác vào?', ['Thùng rác', 'Vỉa hè', 'Gốc cây', 'Sông'], 0, 'Bỏ rác đúng nơi.'),
    Q('Để tránh muỗi đốt, em nên?', ['Ngủ trong màn', 'Mở cửa toang', 'Để nước đọng quanh nhà', 'Tắt đèn ngoài sân'], 0, 'Ngủ màn (mùng) phòng muỗi.'),
    Q('Số gọi cứu hoả là?', ['113', '114', '115', '116'], 1, '114 = cứu hoả.'),
    Q('Trước khi ăn em nên?', ['Rửa tay sạch', 'Chạy chơi', 'Xem TV', 'Ăn liền'], 0, 'Rửa tay chống vi khuẩn.'),
    Q('Bảo vệ cây xanh là?', ['Tưới nước, không bẻ cành', 'Chặt phá', 'Khắc tên', 'Đốt cây'], 0, 'Chăm sóc, không phá hoại cây.'),
  ], { difficulty: 2 }),
];

export const P1TNXH_SCENARIOS = indexBy(P1TNXH_WEEKS);
