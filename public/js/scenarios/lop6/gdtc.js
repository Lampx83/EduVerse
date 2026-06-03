// ============================================================
// Lớp 6 · GDTC — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám CT GDPT 2018 cấp THCS: Đội hình đội ngũ, Bài TD liên hoàn,
// Chạy ngắn – chạy bền, Nhảy xa – Bật cao, Ném bóng, Trò chơi vận động,
// Thể thao tự chọn (Bóng đá/Bóng rổ/Cầu lông/Bóng chuyền),
// An toàn – Sơ cứu – Dinh dưỡng – Lối sống lành mạnh.
// ID prefix: "S6GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6GDTC', 'gdtc', n, title, qs, opts);

export const S6GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Lợi ích của tập luyện thể dục thể thao', [
    Q('Tập luyện TDTT đều đặn KHÔNG mang lại lợi ích nào sau đây?', ['Phát triển chiều cao, cân nặng hợp lý', 'Giúp học giỏi hơn nhờ tinh thần minh mẫn', 'Giúp tăng cân nhanh nhờ ăn được nhiều đồ ngọt', 'Tăng sức khỏe, sức đề kháng'], 2, 'Tập TDTT không khuyến khích ăn nhiều đồ ngọt — đó không phải lợi ích.'),
    Q('Theo khuyến cáo của Tổ chức Y tế Thế giới (WHO), trẻ 6–17 tuổi nên vận động cường độ vừa – mạnh ít nhất bao nhiêu phút mỗi ngày?', ['15 phút', '30 phút', '180 phút', '60 phút'], 3, 'WHO khuyến cáo trẻ em – vị thành niên nên vận động ít nhất 60 phút/ngày.'),
    Q('Lợi ích nào sau đây của vận động liên quan đến TINH THẦN?', ['Tăng cân nhanh', 'Giảm căng thẳng, giúp ngủ ngon hơn', 'Cơ bắp nở nang', 'Da rám nắng'], 1, 'Vận động kích thích endorphin — giảm stress, cải thiện giấc ngủ.'),
    Q('Học sinh ngồi học liên tục nhiều giờ KHÔNG vận động sẽ dễ bị?', ['Cao lớn nhanh hơn', 'Học giỏi hơn', 'Ngủ ít hơn', 'Đau lưng, mỏi mắt, cong vẹo cột sống'], 3, 'Ngồi lâu một tư thế là yếu tố nguy cơ của cong vẹo cột sống và mỏi mắt.'),
    Q('Phát biểu nào ĐÚNG về vai trò của TDTT với học tập?', ['Tập TDTT làm giảm trí nhớ', 'Vận động hợp lý giúp tăng tập trung, tiếp thu bài tốt hơn', 'Tập TDTT làm mất thời gian học', 'Chỉ học sinh giỏi mới cần tập TDTT'], 1, 'Vận động làm tăng tuần hoàn não, cải thiện khả năng tập trung.'),
    Q('Để duy trì thói quen tập luyện, em nên?', ['Chỉ tập khi sắp thi thể dục', 'Tập thật nặng một hôm rồi nghỉ luôn cả tuần', 'Tập lúc đói lả hoặc no căng', 'Tập đều đặn mỗi ngày với cường độ phù hợp'], 3, 'Tập đều mỗi ngày, cường độ vừa sức là nguyên tắc cơ bản.'),
    Q('Một biểu hiện cho thấy em ĐÃ tập luyện quá sức?', ['Ăn ngon miệng hơn', 'Mệt kéo dài, đau cơ nhiều ngày, mất ngủ', 'Cảm thấy thoải mái, dễ ngủ', 'Mạch đập hồi phục trong vài phút'], 1, 'Mệt kéo dài, đau cơ dai dẳng là dấu hiệu quá tải.'),
  ]),

  M(2, 'Khởi động và hồi tĩnh', [
    Q('Mục đích chính của KHỞI ĐỘNG trước khi tập luyện là?', ['Giúp ngủ ngon', 'Giảm sức đề kháng', 'Làm nóng cơ thể, tăng nhịp tim dần dần, phòng chấn thương', 'Làm cho cơ thể mệt mỏi'], 2, 'Khởi động làm ấm cơ – tăng tuần hoàn – giảm nguy cơ chấn thương.'),
    Q('Trình tự khởi động hợp lý là?', ['Khởi động chung (chạy nhẹ, xoay khớp) → khởi động chuyên môn → tập chính', 'Tập chính ngay → khởi động sau', 'Căng cơ tĩnh mạnh → chạy nước rút → tập chính', 'Ngồi nghỉ → tập chính'], 0, 'Khởi động đi từ chung đến chuyên môn, từ nhẹ đến mạnh.'),
    Q('Trong khởi động, ta thường xoay các khớp theo thứ tự?', ['Chỉ xoay khớp gối', 'Từ khớp lớn ở thân về các khớp nhỏ ở chi', 'Không cần xoay khớp', 'Từ cổ → vai → khuỷu → cổ tay → hông → gối → cổ chân (hoặc ngược lại có hệ thống)'], 3, 'Xoay khớp có hệ thống từ trên xuống dưới (hoặc dưới lên), không bỏ sót.'),
    Q('HỒI TĨNH sau buổi tập có tác dụng?', ['Không có tác dụng gì', 'Tăng nhịp tim đột ngột', 'Làm cơ thể nóng thêm', 'Giúp nhịp tim, hơi thở trở về bình thường, giảm đau mỏi cơ'], 3, 'Hồi tĩnh giúp cơ thể chuyển dần về trạng thái nghỉ, đào thải axit lactic.'),
    Q('Bài tập nào phù hợp cho phần HỒI TĨNH?', ['Đi bộ chậm, hít thở sâu, căng giãn cơ nhẹ nhàng', 'Nâng tạ nặng', 'Bật cao tối đa', 'Chạy nước rút 100m'], 0, 'Hồi tĩnh ưu tiên cường độ thấp, hít thở sâu và căng giãn nhẹ.'),
    Q('Nếu BỎ QUA khởi động và tập ngay với cường độ cao, nguy cơ lớn nhất là?', ['Tăng thành tích', 'Khỏe mạnh hơn', 'Chấn thương cơ – khớp – dây chằng', 'Tinh thần phấn chấn'], 2, 'Bỏ khởi động làm cơ chưa sẵn sàng — dễ căng cơ, bong gân.'),
  ]),

  M(3, 'Đội hình đội ngũ — Tập hợp, dóng hàng', [
    Q('Khẩu lệnh "Thành 4 hàng dọc — TẬP HỢP!" gồm mấy phần?', ['1 phần', '3 phần', 'Không có phần nào', '2 phần: dự lệnh và động lệnh'], 3, '"Thành 4 hàng dọc" là dự lệnh; "TẬP HỢP!" là động lệnh.'),
    Q('Khi tập hợp hàng dọc, người làm chuẩn (tiểu đội/tổ trưởng) đứng ở đâu?', ['Đứng đầu hàng', 'Đứng cuối hàng', 'Đứng tách khỏi hàng', 'Đứng giữa hàng'], 0, 'Tổ trưởng đứng đầu hàng làm chuẩn để các bạn xếp theo.'),
    Q('Khi dóng hàng DỌC, em quay mặt nhìn vào đâu?', ['Nhìn lên trời', 'Nhìn bạn bên trái', 'Nhìn gáy bạn phía trước', 'Nhắm mắt lại'], 2, 'Hàng dọc: nhìn gáy bạn phía trước để hàng thẳng.'),
    Q('Khi dóng hàng NGANG, khẩu lệnh "Nhìn bên phải — THẲNG!" yêu cầu em?', ['Chạy về chỗ', 'Quay đầu sang phải, chỉnh hàng cho thẳng', 'Quay sang trái', 'Cúi đầu xuống'], 1, 'Nhìn bên phải để chuẩn theo bạn chuẩn ở phía phải hàng.'),
    Q('Khoảng cách giữa hai bạn liền nhau trong hàng dọc thường là?', ['Cách nhau 3 mét', 'Sát vào nhau không khoảng cách', 'Một cánh tay đưa thẳng phía trước chạm vai bạn trước', 'Tùy ý mỗi bạn'], 2, 'Khoảng cách chuẩn ≈ 1 cánh tay duỗi thẳng.'),
    Q('Việc giữ đội hình đội ngũ nghiêm túc có ý nghĩa?', ['Rèn kỷ luật, ý thức tổ chức, tinh thần đồng đội', 'Chỉ để biểu diễn', 'Không có ý nghĩa', 'Làm mất thời gian'], 0, 'ĐHĐN rèn kỷ luật và tinh thần tập thể.'),
  ]),

  M(4, 'Đội hình đội ngũ — Điểm số, quay tại chỗ', [
    Q('Khi điểm số trong hàng dọc, bạn đầu hàng hô số mấy?', ['Không hô', 'Hô "Hai!"', 'Hô "Một!"', 'Hô "Xong!"'], 2, 'Bạn đầu hàng bắt đầu điểm số bằng "Một!".'),
    Q('Khi điểm số xong, bạn cuối cùng phải làm gì?', ['Chạy ra khỏi hàng', 'Hô lại từ đầu', 'Im lặng', 'Hô số của mình kèm "Hết!"'], 3, 'Bạn cuối hô số mình + "Hết!" để báo kết thúc điểm số.'),
    Q('Khẩu lệnh "Bên phải — QUAY!" yêu cầu em xoay người mấy độ?', ['360°', '45°', '180°', '90° sang phải'], 3, 'Quay phải = xoay 90° sang phải.'),
    Q('Khẩu lệnh "Đằng sau — QUAY!" yêu cầu em xoay mấy độ?', ['180°', '90°', '270°', '360°'], 0, 'Đằng sau quay = xoay nửa vòng, 180°.'),
    Q('Khi quay tại chỗ, em xoay trên gót chân nào?', ['Nhảy lên xoay', 'Trên gót chân thuận với hướng quay và mũi chân kia', 'Trên đầu mũi cả hai chân', 'Trên hai gót cùng lúc'], 1, 'Kỹ thuật quay: trên gót chân + mũi chân kia, giữ thân thẳng.'),
    Q('Lợi ích của tập điểm số và quay tại chỗ?', ['Không có lợi ích', 'Nâng cao khả năng tập trung, phản xạ và phối hợp tập thể', 'Làm chậm phản xạ', 'Gây mất trật tự'], 1, 'Rèn phản xạ – kỷ luật – phối hợp đội.'),
  ]),

  M(5, 'Bài thể dục liên hoàn — Động tác tay, chân, lườn', [
    Q('Bài thể dục liên hoàn thường có bao nhiêu động tác?', ['2–3 động tác', '8–10 động tác', '20 động tác', '50 động tác'], 1, 'Bài TD liên hoàn cấp THCS thường 8–10 động tác.'),
    Q('Mục đích của động tác TAY trong bài TD liên hoàn?', ['Phát triển cơ chân', 'Không có mục đích', 'Tăng chiều cao tức thì', 'Phát triển nhóm cơ tay – vai – ngực'], 3, 'Mỗi động tác hướng đến nhóm cơ tương ứng.'),
    Q('Khi thực hiện động tác LƯỜN, em cần?', ['Đứng yên', 'Giữ chân thẳng, nghiêng thân hông sang hai bên đúng biên độ', 'Nhảy lên cao', 'Co gối thật nhiều'], 1, 'Động tác lườn nghiêng thân, kéo giãn cơ vùng eo.'),
    Q('Nhịp đếm trong bài thể dục thường là?', ['2×8 hoặc 4×8 nhịp', 'Không có nhịp', '1 nhịp', '100 nhịp'], 0, 'Thường tính theo 2×8 hoặc 4×8 nhịp.'),
    Q('Khi tập bài TD liên hoàn, hơi thở nên?', ['Không cần để ý hơi thở', 'Nín thở suốt bài', 'Thở gấp liên tục', 'Phối hợp hít vào – thở ra theo động tác'], 3, 'Phối hợp hít – thở giúp bài tập hiệu quả hơn.'),
    Q('Lỗi nào sau đây THƯỜNG GẶP khi tập bài TD liên hoàn?', ['Thở đều', 'Nhịp đều, đẹp', 'Động tác đúng biên độ', 'Động tác qua loa, không hết biên độ, sai nhịp'], 3, 'Lỗi phổ biến: làm cho có, không đúng biên độ.'),
  ]),

  M(6, 'Bài thể dục liên hoàn — Động tác bụng, vặn mình, toàn thân', [
    Q('Động tác BỤNG trong bài TD nhằm phát triển nhóm cơ nào?', ['Cơ bụng – cơ lưng', 'Cơ tay', 'Không phát triển cơ', 'Cơ chân'], 0, 'Động tác bụng tác động lên cơ bụng và cơ lưng.'),
    Q('Khi tập động tác vặn mình, em cần lưu ý?', ['Không cần khởi động', 'Vặn từ từ, hết biên độ, không giật cục', 'Vặn mạnh đột ngột để tăng hiệu quả', 'Nín thở khi vặn'], 1, 'Vặn từ từ, không giật để tránh trật lưng.'),
    Q('Động tác TOÀN THÂN (ví dụ ngồi xổm – đứng lên – bật) huy động nhiều nhóm cơ. Tác dụng chính?', ['Giảm sức mạnh', 'Tăng sức mạnh và sự phối hợp toàn thân', 'Chỉ tăng chiều cao', 'Chỉ tăng sức mạnh tay'], 1, 'Toàn thân phối hợp nhiều nhóm cơ — tăng sức mạnh tổng quát.'),
    Q('Khi tập bài TD theo nhịp đếm của giáo viên, đội hình em phải?', ['Lộn xộn, mỗi người một nhịp', 'Đồng đều, đúng nhịp, đúng hướng', 'Quay đầu nói chuyện', 'Tự do nghỉ giữa chừng'], 1, 'Đồng bộ là yêu cầu cốt lõi của bài TD tập thể.'),
    Q('Bài TD liên hoàn nên tập vào thời điểm nào trong ngày?', ['Lúc đang sốt cao', 'Buổi sáng hoặc giữa buổi học (thể dục giữa giờ), khi cơ thể đã tỉnh táo', 'Lúc khuya gần đi ngủ', 'Ngay sau bữa ăn no'], 1, 'Sáng hoặc thể dục giữa giờ là phù hợp nhất.'),
    Q('Để tập bài TD đẹp, ngoài nhớ động tác, em cần?', ['Khí thế, tinh thần nghiêm túc và phối hợp đồng đội', 'Đứng yên xem bạn tập', 'Tự do biến tấu động tác', 'Cười đùa'], 0, 'Thái độ nghiêm túc và phối hợp là yếu tố quan trọng.'),
  ]),

  M(7, 'Chạy cự ly ngắn — Tư thế xuất phát', [
    Q('Cự ly ngắn ở cấp THCS thường là?', ['5 000m', '42 km', '10 km', '50m, 60m, 100m'], 3, 'Chạy ngắn THCS: 50m, 60m, 100m.'),
    Q('Có mấy loại xuất phát chính trong chạy cự ly ngắn?', ['Không có loại nào', '4 loại', '2 loại: xuất phát cao và xuất phát thấp', '1 loại'], 2, 'Xuất phát cao (thường dùng ở THCS) và xuất phát thấp (dùng bàn đạp).'),
    Q('Khẩu lệnh trong chạy cự ly ngắn theo thứ tự là?', ['"Vào chỗ!" → "Sẵn sàng!" → tiếng súng/còi (Chạy!)', '"Nghỉ!" → "Chạy!"', 'Không có khẩu lệnh', '"Chạy!" → "Vào chỗ!"'], 0, 'Quy chuẩn: Vào chỗ – Sẵn sàng – Chạy.'),
    Q('Tư thế xuất phát CAO: chân thuận đặt ở đâu?', ['Quỳ một gối', 'Hai chân sát vạch', 'Đặt phía sau, chân kia phía trước', 'Đặt trước, cách vạch xuất phát ngắn; chân kia phía sau'], 3, 'Chân thuận trước, chân không thuận phía sau, trọng tâm dồn về chân trước.'),
    Q('Khi nghe lệnh "Sẵn sàng!", em phải?', ['Đứng thẳng người', 'Quay lưng lại', 'Hạ thấp trọng tâm, hơi đổ người về trước, sẵn sàng đạp xuất phát', 'Ngồi xổm'], 2, 'Hạ thấp trọng tâm, dồn lực để bật khi có lệnh.'),
    Q('Khi nghe tiếng súng/còi xuất phát, em?', ['Quay đầu nhìn bạn bên cạnh', 'Đi bộ chậm', 'Đạp mạnh chân sau, lao người về trước nhanh nhất có thể', 'Đứng yên xem'], 2, 'Phản xạ nhanh — đạp chân sau và lao về trước.'),
  ]),

  M(8, 'Chạy cự ly ngắn — Chạy giữa quãng và về đích', [
    Q('Giai đoạn CHẠY GIỮA QUÃNG yêu cầu?', ['Duy trì tốc độ tối đa, bước dài đều, tay đánh phối hợp', 'Chạy chậm dần', 'Chỉ chạy bằng gót chân', 'Vừa chạy vừa nhìn xung quanh'], 0, 'Giữ tốc độ cao, kỹ thuật ổn định.'),
    Q('Khi chạy ngắn, lòng bàn chân tiếp đất chủ yếu bằng phần nào?', ['Cả bàn chân', 'Chỉ gót chân', 'Nửa trước bàn chân (mũi và ức bàn)', 'Mép ngoài bàn chân'], 2, 'Tiếp đất bằng nửa trước bàn chân để phản lực nhanh.'),
    Q('Cách đánh tay khi chạy cự ly ngắn?', ['Đánh tay ngang đầu', 'Tay khuỳu ~90°, đánh trước – sau theo nhịp chân, không bắt chéo thân', 'Khoanh tay trước ngực', 'Vung tay ra sau lưng'], 1, 'Tay đánh trước – sau, không bắt chéo, gập khoảng 90°.'),
    Q('Khi VỀ ĐÍCH, kỹ thuật thường dùng là?', ['Quay lưng lại', 'Đánh đích bằng ngực hoặc vai (lao người về phía trước ở mét cuối)', 'Nhảy lên cao', 'Chạy chậm lại trước vạch'], 1, 'Đánh đích bằng ngực/vai để rút ngắn thời gian qua vạch.'),
    Q('Khi vừa qua đích, em KHÔNG NÊN?', ['Hít thở sâu', 'Đi bộ thả lỏng', 'Dừng đột ngột và ngồi sụp xuống ngay', 'Tiếp tục chạy chậm dần để hồi tĩnh'], 2, 'Dừng đột ngột dễ chóng mặt, choáng — nên giảm dần rồi đi bộ.'),
    Q('Trong tập luyện chạy ngắn, để tránh chấn thương em cần?', ['Chạy chân đất trên đường nhựa nóng', 'Mang dép lê khi chạy', 'Khởi động kỹ, đặc biệt khớp cổ chân, gối; chạy trên mặt sân bằng phẳng', 'Bỏ qua khởi động'], 2, 'Khởi động kỹ + mặt sân an toàn + giày phù hợp.'),
  ]),

  M(9, 'Chạy bền — Kỹ thuật và phân phối sức', [
    Q('Chạy bền là chạy với cự ly?', ['Chỉ 50m', 'Đứng tại chỗ', 'Cự ly trung bình – dài (ví dụ 500m, 800m, 1000m trở lên)', 'Dưới 100m'], 2, 'Chạy bền — cự ly dài, đòi hỏi sức bền.'),
    Q('Phân phối sức trong chạy bền hợp lý là?', ['Dừng nghỉ giữa chừng', 'Đi bộ suốt đường rồi nước rút cuối', 'Khởi đầu vừa phải, duy trì tốc độ đều, tăng tốc khi gần đích', 'Chạy hết tốc lực ngay từ đầu'], 2, 'Đều tốc độ ở giữa, tăng tốc cuối là chiến thuật phổ biến.'),
    Q('Cách thở hợp lý khi chạy bền?', ['Nín thở càng lâu càng tốt', 'Hít sâu bằng mũi, thở ra bằng miệng theo nhịp chân (vd 3 bước hít – 3 bước thở)', 'Thở loạn xạ', 'Chỉ thở bằng miệng và rất nhanh'], 1, 'Thở có nhịp giúp duy trì oxy và tránh đau hông.'),
    Q('Bước chạy bền thường?', ['Bước vừa phải, êm, tiếp đất bằng cả bàn chân hoặc gần gót', 'Bước rất ngắn, tiếp đất bằng mũi chân để chạy nhanh', 'Bước rất dài, đạp mạnh tối đa', 'Nhảy lò cò'], 0, 'Bước êm để tiết kiệm năng lượng.'),
    Q('Khi chạy bền cảm thấy "cực điểm" (mệt nhất), nên?', ['Dừng lại ngay', 'Ngồi xuống nghỉ', 'Giảm tốc một chút, điều hòa hơi thở, kiên trì vượt qua', 'Tăng tốc tối đa'], 2, '"Cực điểm" là giai đoạn cơ thể chuyển trạng thái — vượt qua sẽ ổn hơn.'),
    Q('Tác dụng của chạy bền đối với cơ thể?', ['Làm giảm dung tích phổi', 'Không có tác dụng', 'Phát triển hệ tim mạch – hô hấp, tăng sức bền chung', 'Chỉ phát triển cơ tay'], 2, 'Chạy bền cải thiện tim, phổi và sức bền.'),
  ]),

  M(10, 'Chạy bền — An toàn và tập luyện thường xuyên', [
    Q('Trước khi chạy bền em cần?', ['Ăn no căng bụng', 'Nhịn nước hoàn toàn', 'Tập ngay không chuẩn bị', 'Uống đủ nước, khởi động kỹ, kiểm tra giày dép'], 3, 'Uống nước + khởi động + giày phù hợp.'),
    Q('Trong khi chạy bền nếu bị "xóc hông" em nên?', ['Nhịn thở', 'Bỏ chạy ngay', 'Giảm tốc, hít sâu vào, thở ra dài; có thể ấn nhẹ vào chỗ đau', 'Tăng tốc tối đa'], 2, 'Xóc hông thường do thở sai — điều chỉnh nhịp thở.'),
    Q('Tần suất tập chạy bền phù hợp cho HS lớp 6?', ['5 lần/ngày', '2–3 lần/tuần, mỗi lần phù hợp sức', '1 lần/tháng', 'Không cần tập'], 1, '2–3 buổi/tuần là khuyến cáo chung.'),
    Q('Khi chạy bền trời nắng nóng, em nên?', ['Mặc áo len dày', 'Không uống nước', 'Chạy giữa trưa, đội mũ dày', 'Chạy sáng sớm hoặc chiều mát, mặc thoáng, uống nước đủ'], 3, 'Tránh nắng gắt, mặc thoáng, bù nước.'),
    Q('Dấu hiệu cần DỪNG chạy ngay?', ['Đau ngực, chóng mặt, khó thở dữ dội, mắt hoa', 'Mệt nhẹ vẫn nói được', 'Vã mồ hôi', 'Mặt hơi đỏ'], 0, 'Đau ngực + chóng mặt + khó thở là dấu hiệu nguy hiểm.'),
    Q('Sau khi chạy bền nên?', ['Uống nước đá ừng ực', 'Ngồi sụp xuống ngay', 'Đi bộ chậm, hít thở sâu, căng giãn cơ chân', 'Tắm nước lạnh ngay khi còn ướt mồ hôi đầm đìa'], 2, 'Hồi tĩnh từ từ và bù nước hợp lý.'),
  ]),

  M(11, 'Nhảy xa — Chạy đà và giậm nhảy', [
    Q('Một lần nhảy xa gồm mấy giai đoạn chính?', ['2 giai đoạn', '4 giai đoạn: chạy đà – giậm nhảy – bay trên không – tiếp đất', '5 giai đoạn', '1 giai đoạn'], 1, 'Chuẩn 4 giai đoạn của kỹ thuật nhảy xa.'),
    Q('Mục tiêu của giai đoạn CHẠY ĐÀ là?', ['Đạt tốc độ tối ưu để chuẩn bị giậm nhảy', 'Nhảy lò cò', 'Giữ tốc độ đều và chậm để tiết kiệm sức cho cú nhảy', 'Chạy thật chậm'], 0, 'Chạy đà tạo tốc độ tối đa kiểm soát được.'),
    Q('Khi giậm nhảy, em đạp bằng?', ['Một chân thuận (chân giậm), đạp mạnh xuống ván giậm', 'Cả hai chân', 'Gót cả hai chân', 'Mũi chân không thuận'], 0, 'Giậm bằng một chân — chân giậm.'),
    Q('Lực giậm nhảy hiệu quả phải có hướng?', ['Hướng ngang sang phải', 'Hướng lên cao và hơi về trước', 'Hướng ra sau lưng', 'Hướng xuống đất'], 1, 'Lực hướng lên + ra trước để bay xa.'),
    Q('Điểm giậm nhảy KHÔNG được vượt qua?', ['Vạch xuất phát chạy đà phía sau', 'Vạch xuất phát chạy ngắn', 'Đường biên sân', 'Vạch giậm (mép ván giậm)'], 3, 'Quá vạch giậm = phạm quy, không tính thành tích.'),
    Q('Lỗi thường gặp khi chạy đà – giậm nhảy?', ['Bước đà chuẩn xác, giậm đúng chân thuận', 'Đà sai bước, giậm hụt ván hoặc đạp lên ván nhưng không bật được', 'Khởi động kỹ', 'Tốc độ chạy đà ổn định'], 1, 'Đà sai – giậm hụt là lỗi phổ biến cần luyện đo đà.'),
  ]),

  M(12, 'Nhảy xa — Bay trên không và tiếp đất', [
    Q('Trong giai đoạn BAY TRÊN KHÔNG, mục tiêu là?', ['Giữ thăng bằng, kéo dài quỹ đạo bay và chuẩn bị tiếp đất tốt', 'Co chân lại tối đa', 'Quay vòng trong không trung', 'Vùng vẫy lung tung'], 0, 'Giữ thăng bằng và chuẩn bị duỗi chân về trước để tiếp đất.'),
    Q('Khi sắp TIẾP ĐẤT, hai chân nên?', ['Đá ngược về sau', 'Co chặt vào ngực', 'Tách rộng ra hai bên', 'Duỗi thẳng về phía trước, gối hơi gập'], 3, 'Duỗi chân về trước, gối hơi gập để tiếp đất xa và an toàn.'),
    Q('Khi tiếp đất, em tiếp xúc cát bằng phần nào trước?', ['Hai gót chân, sau đó cả bàn chân và khuỵu gối hoãn xung', 'Hai bàn tay', 'Mũi chân, sau đó đứng thẳng người ngay lập tức', 'Đầu gối'], 0, 'Gót xuống trước, khuỵu gối để giảm chấn.'),
    Q('Sau khi tiếp đất, người nên?', ['Đứng yên rồi nhảy ngược lại', 'Quay người sang ngang', 'Lao về phía trước hoặc đứng vững — KHÔNG ngã ngửa', 'Ngã ngửa về sau'], 2, 'Nếu ngã ngửa, dấu vết tính từ điểm ngã ngửa → mất thành tích.'),
    Q('Thành tích nhảy xa đo từ đâu?', ['Từ mép vạch giậm tới dấu cơ thể gần vạch giậm nhất trên cát', 'Từ vai bạn', 'Từ vạch xuất phát chạy đà', 'Từ điểm bay cao nhất'], 0, 'Đo từ vạch giậm đến dấu cơ thể gần nhất chạm cát.'),
    Q('Bài tập bổ trợ nhảy xa hiệu quả?', ['Chỉ chạy ngắn', 'Ngồi xem TV', 'Bật xa tại chỗ, bật cóc, lò cò chân thuận', 'Ăn nhiều đồ ngọt'], 2, 'Các bài bật giúp tăng sức mạnh chân giậm.'),
  ]),

  M(13, 'Bật cao tại chỗ — Kỹ thuật', [
    Q('Bật cao tại chỗ KHÔNG bao gồm giai đoạn nào?', ['Chuẩn bị (chùng gối lấy đà)', 'Chạy đà 30m trước khi bật', 'Trên không (vươn người)', 'Bật nhảy (đạp mạnh hai chân)'], 1, 'Bật cao TẠI CHỖ không có chạy đà.'),
    Q('Khi chuẩn bị bật, đầu gối nên?', ['Khuỵu xuống khoảng 90–100°, thân hơi đổ trước', 'Khuỵu sát đất ngồi xuống', 'Hướng vào trong', 'Thẳng cứng'], 0, 'Khuỵu vừa phải để tích lực.'),
    Q('Khi bật, hai tay nên?', ['Khoanh trước ngực', 'Vung mạnh từ sau ra trước – lên cao theo nhịp bật', 'Chống vào hông', 'Để yên thân hai bên'], 1, 'Tay vung phối hợp giúp tăng độ cao.'),
    Q('Khi tiếp đất sau khi bật, em cần?', ['Khuỵu gối hoãn xung, không đập gót cứng', 'Tiếp đất bằng gót cứng đơ', 'Tiếp đất bằng mặt', 'Tiếp đất bằng đầu gối'], 0, 'Khuỵu gối giảm chấn — bảo vệ khớp.'),
    Q('Bật cao tại chỗ giúp phát triển?', ['Sức mạnh tay', 'Sự dẻo của cột sống', 'Sức bền tim mạch', 'Sức mạnh bột phát của chân (sức bật)'], 3, 'Sức bật chân.'),
    Q('Khi tập bật cao, em nên tập trên?', ['Mặt sân phẳng, có độ đàn hồi vừa (sân tập, thảm)', 'Đá sỏi', 'Bề mặt cứng trơn', 'Cát lún'], 0, 'Mặt sân phẳng, có độ đàn hồi vừa phải.'),
  ]),

  M(14, 'Bật cao — Bài tập bổ trợ và an toàn', [
    Q('Bài tập bổ trợ tăng sức bật?', ['Ngồi xổm – đứng lên (squat), bật cóc, nhảy dây', 'Đi bộ chậm', 'Ngủ trưa', 'Nằm dài xem điện thoại'], 0, 'Squat, bật cóc, nhảy dây — kinh điển cho sức bật.'),
    Q('Nhảy dây tác động chính lên nhóm cơ và hệ nào?', ['Chỉ cơ tay', 'Cơ chân, hệ tim mạch – hô hấp, sự khéo léo phối hợp', 'Chỉ cơ bụng', 'Không tác động'], 1, 'Toàn diện: chân, tim mạch, phối hợp.'),
    Q('Số lần bật/lượt phù hợp cho HS lớp 6 mới tập?', ['1 lần rồi nghỉ cả tuần', 'Mỗi đợt 8–10 lần, có nghỉ giữa, tăng dần khi đã quen', 'Tập rất nhiều lần liên tục, đến kiệt sức', '500 lần liên tục'], 1, 'Tăng dần theo nguyên tắc vừa sức.'),
    Q('Chấn thương thường gặp khi tập bật?', ['Bong gân cổ chân, đau đầu gối, đau gót', 'Cảm cúm', 'Đau bụng', 'Sổ mũi'], 0, 'Khớp cổ chân – gối – gót là điểm chịu lực lớn.'),
    Q('Để phòng chấn thương khi bật, em cần?', ['Khởi động kỹ khớp cổ chân – gối – hông; mang giày có đệm', 'Bỏ qua khởi động', 'Tập khi đang sốt', 'Đi chân đất trên sân xi măng'], 0, 'Khởi động + giày phù hợp.'),
    Q('Khi bật tiếp đất bị đau khớp gối thì?', ['Vẫn chạy tiếp', 'Bóp dầu nóng ngay khi mới chấn thương', 'Tiếp tục bật cố', 'Dừng tập, chườm lạnh, báo người lớn nếu đau nhiều hoặc sưng'], 3, 'Chấn thương cấp ưu tiên chườm lạnh, không xoa dầu nóng ngay.'),
  ]),

  M(15, 'Ném bóng xa — Kỹ thuật ném', [
    Q('Ném bóng xa gồm mấy giai đoạn chính?', ['10 giai đoạn', '0 giai đoạn', '4 giai đoạn: chuẩn bị – chạy đà – ra sức cuối – giữ thăng bằng', '1 giai đoạn'], 2, 'Chuẩn 4 giai đoạn.'),
    Q('Khi ném, lực được truyền từ?', ['Chỉ vai', 'Chỉ cổ tay', 'Chỉ ngón cái', 'Từ chân – hông – thân – vai – cánh tay – cổ tay – ngón tay (phối hợp toàn thân)'], 3, 'Ném tốt huy động lực toàn thân theo chuỗi.'),
    Q('Tư thế chân khi ra sức cuối (đứng tại chỗ ném)?', ['Ngồi xổm để ném', 'Chân ngược bên tay ném đặt trước, chân bên tay ném ở sau làm trụ đạp', 'Hai chân khép sát', 'Chỉ chân thuận'], 1, 'Chân nghịch ở trước, chân thuận sau làm trụ đạp.'),
    Q('Góc ném ra để bóng đi xa NHẤT, lý thuyết gần?', ['90° (ném thẳng lên)', '180°', 'Khoảng 40°–45° so với mặt đất', '0° (ném ngang)'], 2, 'Góc ~45° lý thuyết cho tầm xa nhất khi sức cản không đáng kể.'),
    Q('Khi vừa ném xong, em cần?', ['Quay lưng lại ngay', 'Đứng yên cứng', 'Bước đệm chân sau ra trước để giữ thăng bằng, không vượt vạch giới hạn', 'Lao luôn theo bóng'], 2, 'Bước đệm giữ thăng bằng, tránh vượt vạch.'),
    Q('Lỗi hay gặp khi ném bóng xa?', ['Đứng đúng tư thế', 'Thở đều', 'Chỉ dùng cổ tay, không phối hợp toàn thân; ngã người ra sau', 'Phối hợp tốt cả thân'], 2, 'Không phối hợp toàn thân — bóng đi gần.'),
  ]),

  M(16, 'Ném bóng — An toàn khi tập', [
    Q('Quy tắc AN TOÀN quan trọng nhất khi tập ném?', ['Ném vào bạn cho vui', 'Ném ngược ra sau', 'Chỉ ném khi PHÍA TRƯỚC không có người, theo hiệu lệnh giáo viên', 'Ném bất cứ lúc nào'], 2, 'Phải kiểm tra phía ném trống và theo hiệu lệnh.'),
    Q('Khi nhặt bóng về, lớp phải?', ['Ai nhặt nấy ném thêm', 'Một số bạn vẫn ném tiếp', 'Vừa nhặt vừa ném', 'Tất cả dừng ném, đợi nhặt xong mới ném tiếp'], 3, 'Tuyệt đối không ném khi có người trong vùng nhặt bóng.'),
    Q('Trước khi ném, khởi động trọng tâm cần làm?', ['Chỉ xoay cổ', 'Chỉ khởi động chân', 'Không khởi động', 'Khởi động khớp vai, khuỷu, cổ tay, hông kỹ lưỡng'], 3, 'Vai – khuỷu – cổ tay – hông là khớp chịu tải khi ném.'),
    Q('Trang phục phù hợp khi tập ném?', ['Quần áo thể dục, giày phù hợp, không đeo trang sức sắc nhọn', 'Áo dài thướt tha', 'Áo có đồng hồ kim loại sắc cạnh', 'Dép tông'], 0, 'Quần áo gọn gàng, an toàn.'),
    Q('Khi đau vai sau khi ném, em nên?', ['Dừng tập, báo giáo viên/người lớn; chườm lạnh nếu đau cấp', 'Bỏ qua coi thường', 'Tiếp tục ném mạnh hơn', 'Tự kéo căng tay mạnh'], 0, 'Nghe cơ thể — dừng và xử lý sớm.'),
    Q('Khi đứng quan sát bạn tập ném, em đứng ở đâu?', ['Phía sau hoặc bên cạnh khu vực ném, ở khoảng cách an toàn', 'Trong vùng rơi bóng', 'Ngay cạnh sát người ném', 'Ngay trước hướng ném'], 0, 'Quan sát từ phía sau/bên, khoảng cách an toàn.'),
  ]),

  M(17, 'Trò chơi vận động dân gian (kéo co, mèo đuổi chuột)', [
    Q('Trò KÉO CO rèn luyện chính?', ['Khả năng ca hát', 'Sức mạnh, sức bền và tinh thần đồng đội', 'Chỉ sự khéo léo của ngón tay', 'Chỉ trí nhớ'], 1, 'Kéo co là trò sức mạnh tập thể.'),
    Q('Khi kéo co, hai đội đứng ở vị trí?', ['Ngồi xuống đất', 'Đứng vuông góc với dây', 'Hai bên vạch giữa, mỗi đội nắm một đầu dây', 'Cùng một bên'], 2, 'Hai đội đối diện qua vạch giữa.'),
    Q('Đội nào THẮNG trong kéo co?', ['Đội nào nhiều người hơn dù không kéo', 'Đội nào hét to hơn', 'Đội kéo được khăn buộc giữa dây qua mốc quy định về phía mình', 'Đội mặc áo đẹp hơn'], 2, 'Thắng khi kéo dấu hiệu giữa dây qua mốc.'),
    Q('An toàn khi chơi kéo co?', ['Đi chân đất trên sân ướt', 'Đứng sát đối thủ', 'Quấn dây quanh tay cho chắc', 'Nắm dây chắc, không quấn dây quanh tay hay cổ; mang giày bám sân'], 3, 'Tuyệt đối không quấn dây vào tay/cổ — rất nguy hiểm.'),
    Q('Trò "MÈO ĐUỔI CHUỘT" rèn luyện chủ yếu?', ['Sự nhanh nhẹn, khéo léo, phản xạ và tinh thần tập thể', 'Trí nhớ thuộc lòng', 'Khả năng ca hát', 'Sức mạnh tối đa'], 0, 'Trò chơi rèn nhanh nhẹn và phản xạ.'),
    Q('Vai trò của trò chơi dân gian trong giờ GDTC?', ['Chỉ để biểu diễn', 'Làm mất thời gian', 'Vận động vui vẻ, gắn kết bạn bè, giữ gìn văn hóa truyền thống', 'Không có vai trò'], 2, 'Vừa vận động vừa bảo tồn văn hóa.'),
  ]),

  M(18, 'Ôn tập học kì 1', [
    Q('Trong các giai đoạn nhảy xa, giai đoạn nào quyết định LỰC bay?', ['Đứng nghỉ', 'Giậm nhảy', 'Tiếp đất', 'Chạy đà'], 1, 'Giậm nhảy quyết định lực bật lên và ra trước.'),
    Q('Khẩu lệnh chạy cự ly ngắn THEO THỨ TỰ?', ['"Chạy!" – "Sẵn sàng!" – "Vào chỗ!"', '"Nghỉ!" – "Nghiêm!" – "Chạy!"', '"Vào chỗ!" – "Sẵn sàng!" – tín hiệu xuất phát', '"Sẵn sàng!" – "Vào chỗ!" – "Chạy!"'], 2, 'Quy chuẩn: Vào chỗ – Sẵn sàng – tín hiệu Chạy.'),
    Q('Vì sao cần KHỞI ĐỘNG trước khi tập?', ['Để mất thời gian', 'Để mệt trước khi tập', 'Phòng chấn thương, làm ấm cơ, tăng nhịp tim từ từ', 'Không có lý do'], 2, 'Mục đích chính của khởi động.'),
    Q('Trong bài thể dục liên hoàn, yêu cầu cốt lõi của tập thể là?', ['Vừa tập vừa nói chuyện', 'Tự do biến tấu', 'Đồng đều, đúng nhịp, đúng động tác', 'Ai nhanh hơn thì hơn'], 2, 'Đồng đều và đúng nhịp.'),
    Q('Cách đo thành tích nhảy xa?', ['Từ vạch giậm tới dấu cơ thể GẦN VẠCH NHẤT trên cát', 'Từ vạch xuất phát chạy đà', 'Đo chiều cao bật', 'Từ bạn cuối hàng'], 0, 'Đo tới dấu gần vạch giậm nhất.'),
    Q('Nguyên tắc tập luyện vừa sức nghĩa là?', ['Tập quá khả năng để vượt giới hạn', 'Tập đúng khả năng từng người, tăng dần phù hợp', 'Không bao giờ tập nặng', 'Không cần tập'], 1, 'Vừa sức + tăng dần là nguyên tắc cơ bản.'),
    Q('Trong chạy bền, "cực điểm" là?', ['Lúc xuất phát', 'Lúc về đích', 'Lúc dễ chịu nhất', 'Lúc mệt mỏi nhất do mất cân đối oxy — nếu vượt qua sẽ ổn'], 3, 'Cực điểm là giai đoạn mệt nhất trong chạy bền.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bóng đá — Chuyền bóng cơ bản', [
    Q('Trong bóng đá, kỹ thuật chuyền bóng ngắn chính xác THƯỜNG dùng?', ['Gót chân', 'Lòng trong bàn chân', 'Đầu ngón chân', 'Mu bàn chân'], 1, 'Lòng trong = chuyền ngắn chính xác.'),
    Q('Khi chuyền bóng bằng lòng trong, mắt cá chân nên?', ['Gập tối đa xuống', 'Giữ chắc (khóa cổ chân) để bề mặt tiếp xúc bóng ổn định', 'Lỏng, tự do', 'Quay hẳn ra ngoài'], 1, 'Khóa cổ chân giúp đường chuyền chuẩn.'),
    Q('Để chuyền chính xác, mắt nên?', ['Nhìn xuống bóng khi tiếp xúc, rồi ngẩng lên xem bóng đi', 'Luôn nhìn lên trời', 'Nhắm mắt khi chuyền', 'Nhìn bạn đối phương'], 0, 'Quan sát bóng khi chạm + quan sát đồng đội.'),
    Q('Chuyền bóng DÀI thường dùng?', ['Đầu gối', 'Gót chân', 'Lòng trong bàn chân', 'Mu giữa bàn chân, có lực mạnh hơn'], 3, 'Chuyền dài bằng mu giữa cho lực và quỹ đạo bay xa.'),
    Q('Trước khi chuyền, em nên?', ['Chuyền đại không cần nhìn', 'Bỏ chạy', 'Chuyền cho khán giả', 'Quan sát vị trí đồng đội và đối phương'], 3, 'Quan sát giúp chuyền đúng người.'),
    Q('Khi nhận bóng, kỹ thuật ĐỠ bóng tốt là?', ['Cứng bàn chân, chặn bóng nảy xa', 'Đá bóng đi luôn', 'Khi bóng chạm chân, hơi kéo về sau để giảm tốc, ôm bóng vào sát', 'Giậm mạnh lên bóng'], 2, 'Đỡ êm bằng cách rút chân kiểu "hoãn xung".'),
  ]),

  M(20, 'Bóng đá — Dẫn bóng', [
    Q('Dẫn bóng tốc độ thấp thường dùng?', ['Mu trong hoặc lòng trong, chạm bóng nhẹ và liên tục', 'Đưa tay nhặt bóng', 'Ngồi xổm đẩy bóng', 'Đá thật mạnh rồi đuổi'], 0, 'Dẫn bóng = chạm bóng nhẹ, sát chân.'),
    Q('Khi dẫn bóng, khoảng cách bóng – chân nên?', ['Càng xa càng tốt', 'Dính cứng vào chân', 'Cách 5 mét', 'Trong tầm với một bước chạy, để bảo vệ và đổi hướng được'], 3, 'Bóng trong tầm chạm để kiểm soát.'),
    Q('Khi dẫn bóng đối mặt đối phương, em nên?', ['Đứng yên cho mất bóng', 'Đổi tốc độ, đổi hướng đột ngột, dùng thân che bóng', 'Sút đại', 'Đưa bóng cho đối phương'], 1, 'Đổi nhịp + che bóng = kỹ thuật cơ bản qua người.'),
    Q('Khi dẫn bóng, mắt nên?', ['Luân phiên nhìn bóng và quan sát xung quanh (đồng đội, đối phương, không gian)', 'Chỉ nhìn xuống chân', 'Nhắm mắt', 'Chỉ nhìn lên trời'], 0, 'Vừa nhìn bóng vừa quan sát môi trường.'),
    Q('Trong tập luyện, để dẫn bóng tốt em nên?', ['Không cần luyện', 'Tập bằng tay', 'Chỉ tập một chân', 'Tập với cả chân thuận và chân không thuận'], 3, 'Cả hai chân giúp cầu thủ toàn diện.'),
    Q('Lỗi phổ biến khi dẫn bóng của HS mới?', ['Bóng luôn sát chân', 'Đổi tốc độ tốt', 'Đầu luôn ngẩng quan sát', 'Đẩy bóng quá xa khỏi chân, để mất bóng'], 3, 'Đẩy bóng quá xa = dễ mất bóng.'),
  ]),

  M(21, 'Bóng đá — Sút bóng', [
    Q('Sút bóng có lực MẠNH thường dùng?', ['Lòng trong bàn chân (má trong)', 'Lòng ngoài chỉ', 'Mu chính diện bàn chân', 'Đầu ngón chân'], 2, 'Mu chính diện cho lực sút mạnh.'),
    Q('Khi sút, chân trụ đặt?', ['Sau bóng 2 mét', 'Ngay cạnh bóng, mũi chân trụ chỉ hướng định sút', 'Trước bóng 2 mét', 'Đặt lên trên bóng'], 1, 'Chân trụ cạnh bóng, mũi chân chỉ hướng sút.'),
    Q('Khi sút, mắt em nên?', ['Nhìn khán giả', 'Nhìn lên trời', 'Nhắm mắt', 'Nhìn bóng tại điểm tiếp xúc, rồi mới ngẩng'], 3, 'Quan sát bóng tại điểm chạm để sút chuẩn.'),
    Q('Khi tiếp xúc bóng, mu bàn chân cần?', ['Thả lỏng cổ chân để bóng đi nhẹ nhàng', 'Khóa căng (duỗi mũi chân), tiếp xúc trọn vào tâm bóng', 'Quay vào trong', 'Gập lên'], 1, 'Khóa mu chân + chạm tâm bóng = lực và độ chính xác.'),
    Q('Sau khi sút, chân sút nên?', ['Đá ngược ra sau', 'Khoanh lại', 'Dừng ngay tại chỗ tiếp xúc', 'Tiếp tục vung theo hướng sút (đường chuyển động tiếp)'], 3, 'Vung tiếp giúp truyền hết lực + giảm chấn thương.'),
    Q('An toàn khi sút trong giờ học?', ['Sút khi đã quan sát, theo hiệu lệnh và vào mục tiêu được chỉ định', 'Sút khi có người đứng ngay trước mặt mình ở cự ly gần không có hiệu lệnh', 'Sút vào người bạn cho vui', 'Sút ra ngoài cửa sổ lớp'], 0, 'Tuân thủ hiệu lệnh và sút vào mục tiêu an toàn.'),
  ]),

  M(22, 'Bóng đá — Luật cơ bản và tinh thần fair-play', [
    Q('Một trận bóng đá tiêu chuẩn có mấy cầu thủ mỗi đội trên sân?', ['11 người (kể cả thủ môn)', '15 người', '7 người', '5 người'], 0, 'Bóng đá 11 người là chuẩn FIFA.'),
    Q('Trong bóng đá, ai được phép DÙNG TAY chơi bóng trong vùng cấm địa đội mình?', ['Tất cả cầu thủ', 'Không ai', 'Chỉ thủ môn', 'Tiền đạo'], 2, 'Chỉ thủ môn trong vùng cấm của đội mình.'),
    Q('Tình huống nào dẫn đến QUẢ PHẠT ĐỀN (penalty)?', ['Hết hiệp 1', 'Việt vị', 'Bóng ra biên ngang', 'Phạm lỗi của hậu vệ trong vòng cấm địa đội mình'], 3, 'Phạm lỗi nghiêm trọng trong vòng 16m50.'),
    Q('Khi bóng ra ngoài biên dọc, đội thực hiện quả NÉM BIÊN cần?', ['Ném bằng hai tay từ sau đầu qua đầu, hai chân chạm đất khi ném', 'Ngồi xuống ném', 'Dùng chân đá biên', 'Ném bằng một tay'], 0, 'Quy chuẩn quả ném biên.'),
    Q('Tinh thần FAIR-PLAY trong bóng đá nghĩa là?', ['Thi đấu trung thực, tôn trọng đối thủ và trọng tài', 'Chửi đối thủ', 'Chơi gian lận miễn thắng', 'Chỉ thắng mới quan trọng'], 0, 'Fair-play = chơi đẹp, tôn trọng đối thủ.'),
    Q('Khi đồng đội mắc lỗi sút hỏng, em nên?', ['Cười nhạo', 'Trách mắng nặng nề', 'Bỏ trận', 'Động viên, khích lệ, cùng sửa sai ở tình huống sau'], 3, 'Tinh thần đồng đội luôn động viên nhau.'),
  ]),

  M(23, 'Bóng rổ — Dẫn bóng và chuyền', [
    Q('Dẫn bóng (dribble) trong bóng rổ là?', ['Cầm bóng chạy', 'Đá bóng', 'Đập bóng xuống sàn liên tục bằng một tay', 'Đội bóng trên đầu'], 2, 'Dribble = đập bóng xuống sàn.'),
    Q('Khi dẫn bóng, em dùng?', ['Nắm chặt bóng và chạy', 'Đá bóng đi', 'Một tay (đổi tay khi cần), đầu ngón và lòng bàn tay điều khiển bóng', 'Cả hai tay cùng lúc'], 2, 'Một tay tại một thời điểm.'),
    Q('Lỗi "double dribble" (hai lần dẫn) là?', ['Đập bóng một lần', 'Dẫn bóng bằng hai tay cùng lúc hoặc dừng dẫn rồi dẫn lại', 'Ném rổ', 'Chuyền bóng'], 1, 'Hai lần dẫn = lỗi mất bóng.'),
    Q('Lỗi "travel" (chạy bước) là?', ['Ném rổ trượt', 'Chuyền bóng cho đồng đội', 'Cầm bóng và đi/chạy quá số bước cho phép mà không đập bóng', 'Đập bóng liên tục'], 2, 'Chạy bước = mất bóng.'),
    Q('Kỹ thuật chuyền bóng phổ biến nhất trong bóng rổ?', ['Chuyền bằng đầu', 'Chuyền bằng lưng', 'Chuyền hai tay trước ngực (chest pass) và chuyền nảy (bounce pass)', 'Chuyền bằng chân'], 2, 'Chest pass và bounce pass — hai kiểu cơ bản nhất.'),
    Q('Khi chuyền chest pass, lực chính từ?', ['Đẩy bóng từ ngực ra, duỗi khuỷu, bật cổ tay và ngón tay theo', 'Chỉ dùng lực của hai vai, khuỷu giữ nguyên', 'Chỉ cổ tay', 'Vai và hông'], 0, 'Đẩy từ ngực, khuỷu duỗi, ngón tay bật theo.'),
  ]),

  M(24, 'Bóng rổ — Ném rổ cơ bản', [
    Q('Khi ném rổ tại chỗ, tay ném đặt?', ['Đẩy bằng đầu', 'Phía sau bóng (đỡ và đẩy bóng đi), tay kia đỡ bên cạnh giữ bóng', 'Đá bóng lên', 'Cầm bóng bằng hai tay đẩy ngang'], 1, 'Một tay ném, một tay đỡ giữ bóng.'),
    Q('Khi ném rổ, ngón tay tiếp xúc bóng cuối cùng (follow-through) là?', ['Lòng bàn tay', 'Mu bàn tay', 'Đầu ngón tay, cổ tay bật xuống về phía rổ', 'Khuỷu tay'], 2, 'Follow-through bằng đầu ngón và cổ tay bật.'),
    Q('Một quả ném rổ trong vạch 3 điểm thông thường được tính?', ['5 điểm', '1 điểm', '3 điểm', '2 điểm'], 3, 'Ném vào trong vạch 3 điểm = 2 điểm.'),
    Q('Quả phạt đền (free throw) tính?', ['3 điểm', '1 điểm', '0 điểm', '2 điểm'], 1, 'Free throw = 1 điểm.'),
    Q('Khi ném rổ, mắt em nên?', ['Nhìn bóng', 'Nhìn xuống chân', 'Nhìn vào vành rổ (mục tiêu)', 'Nhắm mắt'], 2, 'Tập trung vào vành rổ.'),
    Q('Tư thế chân khi ném rổ tại chỗ?', ['Hai chân khép sát, đứng cứng', 'Hai chân rộng bằng vai, gối hơi khuỵu để lấy đà bật lên', 'Một chân kiễng', 'Ngồi xổm'], 1, 'Chân rộng bằng vai, khuỵu gối lấy lực.'),
  ]),

  M(25, 'Cầu lông — Cách cầm vợt và giao cầu', [
    Q('Kiểu cầm vợt cầu lông cơ bản gọi là cách cầm?', ['Cầm bằng hai tay', 'Cầm vợt như cầm búa', 'Cầm ở đầu vợt', 'Cách cầm thuận tay (forehand) — như "bắt tay" với cán vợt'], 3, 'Forehand grip — như bắt tay với cán.'),
    Q('Cách cầm vợt trái tay (backhand) thường?', ['Buông cán hoàn toàn', 'Cầm ở đầu mặt vợt', 'Cầm bằng hai tay như gậy bóng chày', 'Xoay ngón cái áp dọc theo cạnh cán vợt để đẩy lực'], 3, 'Backhand grip — ngón cái áp cạnh cán.'),
    Q('Khi giao cầu trong cầu lông, vị trí mặt vợt khi đánh cầu phải?', ['Dưới thắt lưng (cầu được đánh từ dưới lên, mặt vợt và đầu vợt thấp hơn tay cầm tại điểm chạm)', 'Ở trên thắt lưng người giao', 'Cao trên đầu', 'Ngang vai'], 0, 'Luật: thời điểm chạm cầu, vợt phải ở dưới thắt lưng.'),
    Q('Khi giao cầu ngắn, kỹ thuật phổ biến là?', ['Tung cầu cao tự đánh', 'Giao mạnh hết sức', 'Giao bằng chân', 'Cú giao tay trái với động tác nhẹ, cầu sát mép lưới đối phương'], 3, 'Giao ngắn — đẩy nhẹ, cầu sát mép lưới.'),
    Q('Vợt cầu lông gồm các phần chính?', ['Chỉ có một thanh thẳng', 'Có bánh xe', 'Đầu vợt (mặt căng dây) – thân vợt – chuôi cán (có quấn cán)', 'Hai mặt vợt'], 2, 'Đầu – thân – cán là ba phần cơ bản.'),
    Q('Khi giao cầu, chân giao của em phải?', ['Chạm đất trong ô giao của mình, không giẫm vạch', 'Nhảy lên không trung', 'Bước qua vạch giao cầu', 'Đứng ngoài sân'], 0, 'Chân chạm đất trong ô giao, không giẫm vạch.'),
  ]),

  M(26, 'Cầu lông — Luật đánh đơn và đánh đôi', [
    Q('Trong cầu lông, hiện tại sân thi đấu sử dụng cách tính điểm phổ biến nào (rally point)?', ['Không tính điểm', 'Chỉ bên giao mới được điểm', 'Mỗi pha cầu xong đều có điểm cho bên thắng pha', 'Tính theo thời gian'], 2, 'Rally point — bên thắng pha luôn được điểm.'),
    Q('Một set (ván) cầu lông thường kết thúc khi một bên đạt?', ['11 điểm', '25 điểm', '15 điểm', '21 điểm (cách biệt 2, đến tối đa 30)'], 3, '21 điểm/set; cách biệt 2, lên đến 30.'),
    Q('Một trận cầu lông tiêu chuẩn bao nhiêu set?', ['Best of 7', 'Best of 1', 'Best of 3 (thắng 2/3 set)', 'Best of 5'], 2, 'Best of 3.'),
    Q('Trong đánh ĐƠN, ô giao cầu được xác định bởi?', ['Tỉ số chẵn → giao bên phải, tỉ số lẻ → giao bên trái (theo điểm của bên giao)', 'Theo vị trí giao của lần trước, đổi luân phiên hai bên', 'Luôn giao bên phải', 'Luôn giao bên trái'], 0, 'Quy tắc: điểm chẵn giao bên phải, điểm lẻ giao bên trái.'),
    Q('Trong đánh ĐÔI, sân giao cầu (phần dọc) so với đánh đơn?', ['Giống hệt', 'Rộng và dài hơn ở mọi tình huống', 'Ngắn hơn theo chiều dọc khi giao, nhưng rộng hơn theo chiều ngang', 'Hẹp hơn nhưng dài bằng'], 2, 'Sân giao đánh đôi: rộng hơn ngang nhưng ngắn hơn dọc.'),
    Q('Cầu được tính RA NGOÀI khi?', ['Rơi vào trong sân', 'Chưa qua lưới', 'Rơi đúng vạch biên', 'Rơi ngoài đường biên thuộc sân thi đấu'], 3, 'Cầu rơi đúng vạch vẫn tính trong sân; ngoài biên = out.'),
  ]),

  M(27, 'Bóng chuyền — Chuyền cao tay (búng tay)', [
    Q('Kỹ thuật chuyền cao tay (búng/đặt bóng) trong bóng chuyền dùng?', ['Mười đầu ngón tay tiếp xúc bóng phía trên trán', 'Cẳng tay khép', 'Lòng bàn tay đập mạnh', 'Đầu húc bóng'], 0, 'Búng bóng bằng đầu ngón tay trên trán.'),
    Q('Khi chuyền cao tay, tư thế tay đỡ bóng tạo hình?', ['Hai tay áp sát thân', 'Hai bàn tay tạo hình "tổ chim" trước trán, ngón cái và trỏ tạo hình tam giác', 'Một tay duỗi, một tay co', 'Hai tay duỗi thẳng'], 1, 'Hình tổ chim / tam giác giữa ngón cái – trỏ.'),
    Q('Khi chuyền cao tay, lực được tạo bởi?', ['Chỉ ngực', 'Chỉ ngón tay', 'Chỉ lưng', 'Duỗi chân – hông – tay – cổ tay – ngón tay phối hợp'], 3, 'Toàn thân phối hợp, không chỉ tay.'),
    Q('Khi đỡ bóng cao tay, em đứng?', ['Khép chân, đứng thẳng cứng', 'Ngả hẳn ra sau', 'Hai chân rộng bằng vai, một chân hơi trước, gối hơi khuỵu, mặt ngẩng theo bóng', 'Quay lưng lại bóng'], 2, 'Tư thế cơ bản giúp đỡ chính xác.'),
    Q('Lỗi "cầm bóng" (dính bóng / two-hits in one) trong bóng chuyền là?', ['Chắn bóng', 'Phục vụ', 'Bóng dừng ở tay quá lâu (giữ/đẩy bóng) thay vì bật rời ngay', 'Đập bóng bằng cẳng tay'], 2, 'Bóng phải bật rời ngay, không "ôm".'),
    Q('Chuyền cao tay thường dùng trong tình huống?', ['Chuyền 2 dựng bóng cho đồng đội tấn công, bóng tới ở tầm trán trở lên', 'Đập bóng', 'Đỡ bóng phát rất mạnh sát người', 'Phát bóng'], 0, 'Chuyền 2 dựng bóng — kinh điển dùng búng tay.'),
  ]),

  M(28, 'Bóng chuyền — Đệm bóng (bumping)', [
    Q('Đệm bóng dùng phần cơ thể nào tiếp xúc bóng?', ['Phần trong cẳng tay (gần cổ tay), hai tay khép lại', 'Lòng bàn tay', 'Mu bàn tay', 'Đầu ngón tay xòe rộng như chuyền cao tay'], 0, 'Đệm = phần trong cẳng tay, hai tay khép.'),
    Q('Khi đệm bóng, hai bàn tay nên?', ['Chỉ dùng một tay', 'Hai bàn tay khép vào nhau (chồng hoặc đan), khuỷu tay duỗi thẳng', 'Hai bàn tay xòe sang hai bên', 'Nắm chặt vợt'], 1, 'Hai tay khép + khuỷu duỗi tạo mặt phẳng đệm.'),
    Q('Tư thế chân khi chuẩn bị đệm?', ['Hai chân duỗi thẳng', 'Ngồi xổm', 'Hai chân rộng bằng vai, một chân hơi trước, gối khuỵu hạ thấp trọng tâm', 'Khép sát, đứng thẳng'], 2, 'Hạ thấp trọng tâm để phản xạ nhanh.'),
    Q('Khi đệm, lực đẩy bóng đi chủ yếu nhờ?', ['Đập tay vào bóng', 'Đẩy bằng cổ tay', 'Duỗi chân – nhún hông – đẩy tay từ dưới lên (không vung mạnh)', 'Vung tay mạnh'], 2, 'Lực từ chân, không "vung tay" đập bóng.'),
    Q('Đệm bóng thường dùng để?', ['Chắn bóng trên lưới', 'Tấn công (smash)', 'Phục vụ', 'Đỡ bước 1 (đỡ phát bóng, đỡ bóng nhanh – mạnh ở tầm thấp)'], 3, 'Đệm = chuyền 1, đỡ phát.'),
    Q('Lỗi phổ biến khi đệm?', ['Mắt theo bóng', 'Hai chân đứng vững', 'Khuỷu duỗi thẳng', 'Khuỷu tay khuỵu (gãy tay đệm), bóng bay lung tung'], 3, 'Khuỷu khuỵu = mặt đệm không phẳng → bóng đi sai.'),
  ]),

  M(29, 'An toàn trong tập luyện thể thao', [
    Q('Trước khi tập, kiểm tra sân tập KHÔNG bao gồm?', ['Sĩ số học sinh giỏi Toán', 'Mặt sân có vật sắc, đá, kính vỡ không', 'Sân có ướt trơn không', 'Trang thiết bị (cột, lưới, banh) có chắc chắn không'], 0, 'Sĩ số HS giỏi Toán không liên quan an toàn sân tập.'),
    Q('Khi tập trời nắng nóng, cần?', ['Mặc áo len dày', 'Nhịn nước', 'Không cần lưu ý', 'Mặc đồ thoáng, đội mũ, uống nước thường xuyên, tránh nắng đỉnh'], 3, 'Thoáng – nước – tránh đỉnh nắng.'),
    Q('Trang phục tập luyện phù hợp?', ['Áo dài', 'Dép tông', 'Quần áo thể dục co giãn, gọn gàng, giày phù hợp môn', 'Quần jeans bó cứng'], 2, 'Quần áo thể thao + giày phù hợp.'),
    Q('Khi cảm thấy chóng mặt, đau ngực khi tập, em phải?', ['Tắm nước lạnh ngay', 'Tăng cường độ', 'Dừng tập, ngồi nghỉ chỗ thoáng, báo giáo viên/người lớn ngay', 'Cố gắng tập tiếp'], 2, 'Dừng + báo người lớn — không cố gắng.'),
    Q('Quy tắc khi sử dụng dụng cụ chung (banh, vợt, dây)?', ['Cất gọn sau khi tập, không ném tung dụng cụ vào người khác', 'Đem về nhà', 'Vứt bừa sau khi dùng', 'Đập phá nếu hỏng'], 0, 'Bảo quản và ứng xử an toàn với dụng cụ.'),
    Q('Khi tập trong điều kiện thời tiết XẤU (mưa to, sấm chớp), em nên?', ['Tiếp tục tập ngoài trời', 'Đứng dưới cây cao', 'Vào nơi an toàn trú ẩn, không tập ngoài trời khi có sấm chớp', 'Cầm vợt kim loại'], 2, 'An toàn ưu tiên — không tập khi có sấm.'),
  ]),

  M(30, 'Sơ cứu chấn thương đơn giản', [
    Q('Khi bạn bị BONG GÂN cổ chân nhẹ, nguyên tắc sơ cứu phổ biến RICE gồm?', ['Rest – Ice – Compression – Elevation (Nghỉ – Chườm lạnh – Băng ép – Kê cao)', 'Chạy nhanh – Nóng – Đập – Hạ thấp', 'Xoa dầu nóng – Bóp mạnh – Đi tiếp – Kê thấp', 'Không cần làm gì'], 0, 'Nguyên tắc RICE cho chấn thương mềm.'),
    Q('Khi mới bị bong gân, em CHƯỜM gì?', ['Chườm nóng ngay', 'Không cần xử lý', 'Chườm lạnh trong 24–48h đầu (10–20 phút mỗi lần, có lớp khăn ngăn)', 'Xoa dầu nóng ngay'], 2, 'Chườm LẠNH trong 24–48h đầu để giảm sưng.'),
    Q('Khi bị TRẦY XƯỚC nhẹ ngoài da, bước đầu tiên?', ['Đắp đất vào', 'Để mặc kệ', 'Rửa sạch vết thương bằng nước sạch (hoặc nước muối), sát khuẩn rồi che/băng', 'Bôi dầu nóng'], 2, 'Rửa sạch – sát khuẩn – che chắn.'),
    Q('Khi bị chảy MÁU MŨI (do va chạm nhẹ), tư thế đúng?', ['Ngửa đầu ra sau', 'Nhét bông sâu vào họng', 'Cúi đầu hơi về trước, bóp nhẹ cánh mũi 5–10 phút, thở bằng miệng', 'Nằm ngửa'], 2, 'Cúi trước + bóp mũi — tránh máu chảy xuống họng.'),
    Q('Khi gặp tai nạn NẶNG (gãy xương rõ, bất tỉnh, chảy máu nhiều), việc CẦN làm là?', ['Bế nạn nhân chạy', 'Tự xử lý mọi việc', 'Cho uống nước', 'Gọi người lớn / cấp cứu 115, không di chuyển nạn nhân nếu nghi gãy xương cột sống'], 3, 'Gọi cấp cứu, giữ nguyên hiện trường nếu cần.'),
    Q('Số điện thoại CẤP CỨU 115 ở Việt Nam dùng để?', ['Báo cứu nạn cứu hộ', 'Báo cháy', 'Báo công an', 'Gọi xe cứu thương – cấp cứu y tế'], 3, '115 = cấp cứu y tế.'),
  ]),

  M(31, 'Dinh dưỡng cho người vận động', [
    Q('Người vận động cần đặc biệt chú ý bổ sung?', ['Chỉ đồ chiên rán', 'Chỉ đường ngọt', 'Chỉ nước có gas', 'Nước, đủ năng lượng (tinh bột), đạm, vitamin – khoáng'], 3, 'Dinh dưỡng cân đối: nước – tinh bột – đạm – vitamin.'),
    Q('Khi vận động ra mồ hôi nhiều, em mất nhiều?', ['Tinh bột', 'Nước và muối khoáng (điện giải)', 'Chất béo', 'Vitamin K'], 1, 'Mồ hôi = nước + muối khoáng.'),
    Q('Nên uống nước khi nào trong buổi tập?', ['Không nên uống', 'Chỉ uống khi rất khát đến lả', 'Uống ngụm nhỏ trước, trong (chia nhỏ) và sau khi tập', 'Chỉ uống sau khi tập xong'], 2, 'Uống chia nhỏ trước – trong – sau.'),
    Q('Bữa ăn TRƯỚC khi tập 1–2 giờ nên?', ['Nhịn ăn hoàn toàn', 'Ăn thật nhiều kẹo', 'Ăn vừa phải, ưu tiên tinh bột dễ tiêu (cơm, bánh mì), ít dầu mỡ', 'Ăn rất no đồ chiên rán nhiều dầu mỡ'], 2, 'Tinh bột dễ tiêu, không quá no.'),
    Q('Sau khi tập nặng, bổ sung gì giúp phục hồi?', ['Chỉ nước ngọt có gas', 'Nước, ít muối khoáng, một chút đạm và tinh bột', 'Cà phê đậm', 'Nước tăng lực có nhiều caffeine'], 1, 'Nước + carbs + đạm là khuyến cáo phục hồi.'),
    Q('Thực phẩm nên HẠN CHẾ trong khẩu phần học sinh vận động?', ['Sữa, trứng', 'Rau xanh, trái cây tươi', 'Đồ chiên rán nhiều dầu, nước ngọt có gas nhiều đường, snack nhiều muối', 'Cơm, bánh mì'], 2, 'Đồ chiên + nước ngọt nhiều đường + snack mặn.'),
  ]),

  M(32, 'Nghỉ ngơi và giấc ngủ với HS', [
    Q('Học sinh THCS (11–14 tuổi) cần ngủ mỗi đêm khoảng?', ['5–6 giờ', '8–10 giờ', '14–16 giờ', '3–4 giờ'], 1, 'Khuyến cáo 8–10 giờ/đêm cho lứa tuổi này.'),
    Q('Thiếu ngủ kéo dài có thể dẫn đến?', ['Giảm tập trung, dễ cáu gắt, suy giảm trí nhớ, sức đề kháng kém', 'Học tốt hơn', 'Không ảnh hưởng', 'Tăng chiều cao nhanh hơn'], 0, 'Thiếu ngủ ảnh hưởng học tập, tâm trạng, miễn dịch.'),
    Q('Để ngủ ngon, trước khi đi ngủ KHÔNG nên?', ['Đọc sách nhẹ', 'Dùng điện thoại / chơi game cường độ cao sát giờ ngủ', 'Tắt bớt đèn', 'Vệ sinh cá nhân, phòng yên tĩnh'], 1, 'Ánh sáng xanh + kích thích làm khó ngủ.'),
    Q('Sau buổi tập nặng, vai trò của giấc ngủ?', ['Cơ thể phục hồi cơ bắp, củng cố trí nhớ, tiết hormone tăng trưởng', 'Không liên quan', 'Làm tăng đau cơ', 'Làm yếu cơ'], 0, 'Ngủ là thời gian phục hồi quan trọng.'),
    Q('Lịch sinh hoạt khoa học cho HS bao gồm?', ['Lười vận động', 'Ăn vặt liên tục', 'Ngủ đủ – ăn đúng bữa – vận động đều – học tập điều độ', 'Thức khuya học cố'], 2, 'Cân bằng sinh hoạt là chìa khóa.'),
    Q('Mệt mỏi liên tục, ngủ không hồi phục, em nên?', ['Báo cha mẹ, có thể khám sức khỏe để loại trừ vấn đề', 'Uống nhiều cà phê', 'Bỏ qua', 'Tập nặng hơn cho hết mệt'], 0, 'Có dấu hiệu bất thường cần báo người lớn.'),
  ]),

  M(33, 'Tư thế đúng — Đứng, ngồi, đi', [
    Q('Tư thế NGỒI HỌC đúng?', ['Vắt chéo chân ngồi nghiêng vẹo', 'Cúi gập sát mặt bàn, mắt cách vở 5cm', 'Ngả ngửa hẳn', 'Lưng tựa thẳng vào ghế, vai thả lỏng, hai chân chạm sàn, mắt cách vở 25–30cm'], 3, 'Tư thế ngồi chuẩn giảm cong vẹo và cận thị.'),
    Q('Khi NGỒI lâu, mỗi 30–45 phút em nên?', ['Đứng dậy vận động nhẹ, vươn vai 1–2 phút, nhìn xa', 'Đổi sang tư thế nằm trên bàn', 'Ngồi liên tục đến hết', 'Không cần làm gì'], 0, 'Nghỉ giải lao ngắn rất quan trọng.'),
    Q('Tư thế ĐỨNG đúng?', ['Bụng phình ra, lưng ưỡn quá mức', 'Đầu, vai, hông, mắt cá thẳng trục; bụng hơi hóp; vai thả lỏng', 'Đứng vẹo một bên hông', 'Đứng cong lưng, vai gù'], 1, 'Trục đầu – vai – hông – cổ chân thẳng.'),
    Q('Khi MANG BALÔ, đúng cách?', ['Đeo một bên vai liên tục', 'Xách bằng một tay', 'Đeo đều hai vai, balô không quá nặng (≤10–15% cân nặng), điều chỉnh dây vừa khít', 'Đeo lệch sau gáy'], 2, 'Đeo hai vai, cân đối, không quá nặng.'),
    Q('Tư thế ĐI đúng?', ['Lưng thẳng, mắt nhìn về trước, bước đều, đánh tay tự nhiên', 'Vừa đi vừa ngả ngửa', 'Đi nghiêng vẹo người', 'Cúi gằm xuống đất'], 0, 'Đi với cột sống thẳng, mắt nhìn trước.'),
    Q('Tư thế xấu kéo dài có thể gây?', ['Đau lưng, mỏi cổ – vai – gáy, cong vẹo cột sống, cận thị', 'Không có hệ quả', 'Cao lớn nhanh hơn', 'Tăng sức khỏe'], 0, 'Hậu quả phổ biến của tư thế sai.'),
  ]),

  M(34, 'Bài tập tăng SỨC BỀN tại nhà', [
    Q('Bài tập nào sau đây giúp tăng SỨC BỀN tim mạch tại nhà?', ['Nằm chơi điện thoại', 'Nhịn ăn', 'Ngồi xem TV', 'Nhảy dây, chạy bước nhỏ tại chỗ, leo cầu thang nhiều lượt'], 3, 'Bài tập cardio phù hợp tại nhà.'),
    Q('Cường độ phù hợp khi tập sức bền là?', ['Cường độ vừa đến trung bình – vẫn nói được câu ngắn khi tập', 'Cường độ rất cao đến kiệt sức ngay', 'Cường độ rất thấp, đi bộ nhẹ dưới 5 phút là đủ', 'Đứng yên'], 0, '"Có thể nói câu ngắn" — vùng cường độ vừa.'),
    Q('Thời lượng buổi tập sức bền tại nhà cho HS lớp 6?', ['1 phút', '20–30 phút, có khởi động và hồi tĩnh', 'Không cần thời lượng', '3 giờ liên tục'], 1, '20–30 phút là vừa sức.'),
    Q('Tần suất tập sức bền/tuần?', ['0 lần', '10 lần/ngày', '3–5 buổi/tuần, có ngày nghỉ phục hồi', '1 lần/năm'], 2, '3–5 buổi/tuần và có ngày nghỉ.'),
    Q('Khi tập nhảy dây tại nhà, cần lưu ý?', ['Tập trên mặt sàn có độ đàn hồi, không gian thoáng, mang giày có đệm', 'Tập trên cát lún', 'Tập trên sàn trơn trượt, đi chân đất', 'Tập sát cạnh bàn ghế sắc'], 0, 'An toàn không gian + đệm giày.'),
    Q('Theo dõi tiến bộ sức bền có thể bằng cách?', ['Không cần theo dõi', 'Đo thời gian chạy/nhảy dây cùng cự ly và xem có tăng dần không', 'Tính lượng nước uống', 'So sánh chiều cao'], 1, 'Đo lường mới biết tiến bộ.'),
  ]),

  M(35, 'Bài tập tăng SỨC MẠNH tại nhà', [
    Q('Bài tập nào sau đây dùng TRỌNG LƯỢNG CƠ THỂ để tăng sức mạnh phù hợp HS lớp 6?', ['Nâng tạ rất nặng vượt sức', 'Nằm yên', 'Không có bài nào', 'Chống đẩy (push-up), gập bụng (sit-up/crunch), squat (ngồi xuống đứng lên)'], 3, 'Bodyweight là an toàn và hiệu quả cho lứa tuổi này.'),
    Q('Khi chống đẩy đúng kỹ thuật, lưng nên?', ['Quay nghiêng', 'Võng hẳn xuống', 'Thẳng (đầu – vai – hông – gót thành đường thẳng), không võng không gù', 'Đẩy mông lên cao quá'], 2, 'Plank-line — thân thẳng.'),
    Q('Khi tập squat, đầu gối em phải?', ['Đổ vào trong (knee valgus)', 'Đổ ra ngoài hẳn', 'Cùng hướng với mũi chân, không vượt quá mũi chân quá nhiều, thân hơi đổ trước tự nhiên', 'Khóa cứng không gập'], 2, 'Đầu gối cùng hướng mũi chân + giữ trục đúng.'),
    Q('Nguyên tắc tăng tải an toàn cho HS?', ['Tăng từ từ (số lần / set / mức nặng) theo nguyên tắc vừa sức, có ngày nghỉ', 'Tăng rất nhanh số lần / mức nặng', 'Tập đến kiệt sức mỗi buổi', 'Không bao giờ tăng'], 0, 'Tiến bộ dần, có nghỉ.'),
    Q('HS lớp 6 KHÔNG nên?', ['Uống nước đủ', 'Nâng tạ rất nặng không có hướng dẫn người lớn, vượt khả năng', 'Tập bodyweight đúng kỹ thuật', 'Khởi động trước khi tập'], 1, 'Tạ quá nặng + không hướng dẫn → nguy hiểm.'),
    Q('Sau buổi tập sức mạnh, đau cơ nhẹ 1–2 ngày sau là?', ['Dấu hiệu yếu cơ vĩnh viễn', 'Bất thường, phải đi viện ngay', 'Do thiếu ngủ', 'Hiện tượng DOMS (đau cơ khởi phát muộn) bình thường — sẽ giảm dần khi quen'], 3, 'DOMS là hiện tượng bình thường khi tập mới hoặc tăng tải.'),
  ]),

  M(36, 'Ôn tập học kì 2', [
    Q('Trong bóng đá, kỹ thuật chuyền ngắn chính xác nhất dùng?', ['Đầu ngón', 'Lòng trong bàn chân', 'Mu chính diện', 'Gót chân'], 1, 'Lòng trong = chuyền ngắn chính xác.'),
    Q('Trong bóng rổ, lỗi "double dribble" là?', ['Đứng yên', 'Ném trượt rổ', 'Dẫn bóng bằng hai tay hoặc dừng dẫn rồi dẫn lại', 'Chuyền chest pass'], 2, 'Hai lần dẫn = mất bóng.'),
    Q('Trong cầu lông, set thường đến mấy điểm?', ['21 điểm (cách biệt 2, tối đa 30)', '11 điểm', '15 điểm', '25 điểm'], 0, '21 điểm/set theo chuẩn rally point.'),
    Q('Trong bóng chuyền, kỹ thuật ĐỆM bóng tiếp xúc bằng?', ['Đầu ngón tay', 'Cổ tay bật mạnh, các ngón tay xòe ôm bóng', 'Mặt trong cẳng tay (hai tay khép, khuỷu duỗi)', 'Lòng bàn tay đập'], 2, 'Đệm bằng cẳng tay.'),
    Q('Nguyên tắc sơ cứu chấn thương mềm RICE là?', ['Rest – Inject – Cut – Exit', 'Read – Imagine – Cook – Eat', 'Run – Ice – Carry – Eat', 'Rest – Ice – Compression – Elevation'], 3, 'Nghỉ – Lạnh – Băng ép – Kê cao.'),
    Q('HS THCS cần ngủ mỗi đêm khoảng?', ['14 giờ', '6 giờ', '4 giờ', '8–10 giờ'], 3, '8–10 giờ/đêm theo khuyến cáo.'),
    Q('An toàn quan trọng nhất khi tập thể thao?', ['Tự ý tập không hướng dẫn', 'Khởi động kỹ – đúng kỹ thuật – đúng cường độ vừa sức – tuân thủ hiệu lệnh', 'Tập khi đang ốm sốt', 'Bỏ qua khởi động cho nhanh'], 1, 'Bốn yếu tố cơ bản đảm bảo an toàn.'),
    Q('Tinh thần FAIR-PLAY trong thể thao có nghĩa?', ['Trung thực – tôn trọng đối thủ – tôn trọng luật và trọng tài', 'Thắng bằng mọi giá', 'Chế giễu đối thủ thua cuộc', 'Chỉ cần ghi điểm'], 0, 'Chơi đẹp, tôn trọng — giá trị cốt lõi của thể thao.'),
  ]),
];

export const S6GDTC_SCENARIOS = indexBy(S6GDTC_WEEKS);
