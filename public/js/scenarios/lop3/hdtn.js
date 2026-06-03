// ============================================================
// Lớp 3 · HOẠT ĐỘNG TRẢI NGHIỆM — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn HĐTN Lớp 3.
// ID prefix: "P3HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3HDTN', 'hdtn', n, title, qs, opts);

export const P3HDTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Em là học sinh lớp 3', [
    Q('Khi lên lớp 3, em cảm thấy?', ['Chán nản', 'Không quan tâm', 'Sợ hãi và muốn về lớp 2', 'Tự hào và sẵn sàng học tập chăm chỉ hơn'], 3, 'Lên lớp mới là niềm vui và trách nhiệm.'),
    Q('Lớp 3 có gì khác lớp 2?', ['Bài học sâu hơn, em cần tự lập hơn', 'Không cần học', 'Không có gì khác', 'Dễ hơn'], 0, 'Lớp 3 yêu cầu cao hơn về tự lập.'),
    Q('Em giới thiệu về mình với bạn mới nên?', ['Hét tên to', 'Cãi nhau', 'Im lặng', 'Lễ phép, vui vẻ, nói rõ tên và sở thích'], 3, 'Giới thiệu thân thiện tạo tình bạn.'),
    Q('Trong lớp mới, em nên?', ['Chỉ chơi với bạn cũ', 'Cô đơn', 'Tẩy chay bạn mới', 'Kết bạn với tất cả các bạn'], 3, 'Cởi mở kết bạn là tốt.'),
    Q('Bạn nào mới chuyển đến lớp em, em nên?', ['Tẩy chay', 'Trêu chọc bạn', 'Chào hỏi và giúp bạn làm quen', 'Mặc kệ bạn'], 2, 'Đón bạn mới là tình bạn đẹp.'),
  ]),

  M(2, 'Tổ chức góc học tập ở nhà', [
    Q('Góc học tập của em nên?', ['Trong nhà tắm', 'Trên sàn nhà bừa bộn', 'Có bàn, ghế, đèn đủ sáng, gọn gàng', 'Nằm trên giường'], 2, 'Góc học tập đúng chuẩn.'),
    Q('Đèn học nên đặt ở?', ['Trên đầu', 'Phía bên tay không thuận viết (trái nếu thuận tay phải)', 'Sau lưng', 'Chiếu thẳng vào mắt'], 1, 'Đèn từ phía đối diện tay viết tránh bóng đổ.'),
    Q('Sách vở trên bàn em nên?', ['Sắp xếp gọn gàng theo môn', 'Chồng cao', 'Để dưới đất', 'Vứt bừa'], 0, 'Gọn gàng dễ tìm và đẹp mắt.'),
    Q('Trước khi học, em nên?', ['Bật ti vi', 'Bày bừa', 'Ăn vặt', 'Dọn bàn và chuẩn bị đủ dụng cụ'], 3, 'Chuẩn bị tốt là nửa chặng đường.'),
    Q('Khi học, em nên?', ['Tập trung, không bật ti vi hay điện thoại', 'Vừa học vừa ăn', 'Vừa học vừa chơi điện thoại', 'Vừa học vừa xem ti vi'], 0, 'Tập trung giúp học hiệu quả.'),
  ]),

  M(3, 'Kế hoạch tuần', [
    Q('Kế hoạch tuần là?', ['Bảng ghi các việc cần làm trong tuần', 'Sổ ghi điểm', 'Sách bài tập', 'Quyển truyện'], 0, 'Kế hoạch giúp sắp xếp thời gian.'),
    Q('Một tuần có?', ['5 ngày', '30 ngày', '10 ngày', '7 ngày'], 3, '7 ngày trong tuần.'),
    Q('Lập kế hoạch tuần giúp em?', ['Lười hơn', 'Quên nhiều hơn', 'Không quên việc, làm việc hiệu quả', 'Mất thời gian'], 2, 'Kế hoạch giúp hiệu quả.'),
    Q('Trong kế hoạch tuần nên có?', ['Chỉ chơi', 'Học, chơi, giúp gia đình, ngủ đủ', 'Chỉ học', 'Chỉ ngủ'], 1, 'Cân bằng các hoạt động.'),
    Q('Cuối tuần em nên?', ['Xem lại kế hoạch và rút kinh nghiệm', 'Xé kế hoạch', 'Bỏ kế hoạch', 'Quên hết'], 0, 'Đánh giá để cải thiện.'),
  ]),

  M(4, 'An toàn khi đi xe đạp (1)', [
    Q('Khi đi xe đạp, em nên?', ['Đội nón lá', 'Đội mũ vành thay mũ bảo hiểm', 'Đội mũ bảo hiểm', 'Không đội mũ'], 2, 'Mũ bảo hiểm bảo vệ đầu khi ngã.'),
    Q('Đi xe đạp ở đâu?', ['Giữa đường lớn', 'Trên vỉa hè đông người', 'Đường cao tốc', 'Đường có ít xe, sát lề đường'], 3, 'Sát lề và đường an toàn.'),
    Q('Khi rẽ trái/phải, em nên?', ['Giơ tay xin đường và quan sát', 'Rẽ luôn không báo', 'Nhắm mắt', 'Phanh gấp'], 0, 'Báo hiệu trước khi chuyển hướng.'),
    Q('Đèn đỏ giao thông em?', ['Vòng tránh', 'Đi tiếp', 'Dừng lại trước vạch', 'Phanh giữa ngã tư'], 2, 'Tuân thủ đèn tín hiệu.'),
    Q('Không nên đi xe đạp khi?', ['Trời mưa to, tối hoặc đường trơn nguy hiểm', 'Có người lớn đi cùng', 'Trời nắng đẹp', 'Đường khô'], 0, 'Tránh điều kiện nguy hiểm.'),
  ]),

  M(5, 'An toàn khi đi xe đạp (2)', [
    Q('Khi đi xe đạp em KHÔNG nên?', ['Cầm chắc tay lái', 'Phanh khi cần', 'Buông cả hai tay khi đang chạy', 'Đi đúng làn'], 2, 'Buông tay rất nguy hiểm.'),
    Q('Trước khi đi xe, em kiểm tra?', ['Không cần', 'Chỉ kiểm tra chuông', 'Phanh, xích, bánh xe có đủ hơi không', 'Chỉ kiểm tra yên'], 2, 'Kiểm tra xe đảm bảo an toàn.'),
    Q('Khi chở bạn ngồi sau, em nên?', ['Chở bạn đứng sau', 'Không nên — xe đạp trẻ em không thiết kế chở 2', 'Chở 3 người', 'Vô tư chở'], 1, 'Xe đạp trẻ em chỉ chở 1.'),
    Q('Trang phục đi xe đạp nên?', ['Áo dài rộng quét đất', 'Quần xộc xệch', 'Gọn gàng, dễ vận động', 'Cài váy vào xích'], 2, 'Trang phục gọn tránh tai nạn.'),
    Q('Khi gặp sự cố trên đường (ngã, hỏng xe), em nên?', ['Khóc to', 'Đứng vào lề an toàn và gọi người lớn', 'Đứng giữa đường', 'Bỏ xe chạy'], 1, 'Đảm bảo an toàn rồi xử lý.'),
  ]),

  M(6, 'Tổ chức sinh nhật (1)', [
    Q('Tổ chức sinh nhật cần?', ['Tự nhiên xảy ra', 'Bỏ mặc', 'Lên kế hoạch: mời ai, làm gì, chuẩn bị gì', 'Không cần kế hoạch'], 2, 'Kế hoạch giúp tiệc thành công.'),
    Q('Khi mời bạn đến sinh nhật, em nên?', ['Quát mời', 'Mời sớm và lễ phép', 'Mời sát giờ', 'Mời bằng tin nhắn hỗn'], 1, 'Mời lịch sự và đúng thời gian.'),
    Q('Khi bạn tặng quà, em nên?', ['Nhận bằng hai tay và cảm ơn', 'Giật lấy', 'Mở quà ngay ra so sánh', 'Chê quà'], 0, 'Nhận quà lịch sự.'),
    Q('Khi đến dự sinh nhật bạn, em nên?', ['Đến muộn', 'Không chúc gì', 'Phá đám tiệc', 'Đến đúng giờ, mang quà nhỏ (nếu có), chúc mừng bạn'], 3, 'Lễ phép và đúng giờ.'),
    Q('Tiệc sinh nhật quan trọng nhất là?', ['Khoe khoang', 'Niềm vui, tình bạn, không phải quà đắt tiền', 'Quà đắt tiền', 'Tiệc xa hoa'], 1, 'Ý nghĩa hơn hình thức.'),
  ]),

  M(7, 'Tổ chức sinh nhật (2) — Làm thiệp tặng', [
    Q('Thiệp sinh nhật tự làm có ý nghĩa hơn vì?', ['Thể hiện tình cảm chân thành của em', 'Đắt tiền', 'Đẹp hơn thiệp mua', 'Lung linh'], 0, 'Tự làm thể hiện tâm huyết.'),
    Q('Trên thiệp em nên ghi?', ['Lời chúc tốt đẹp và tên người nhận, tên em', 'Lời nói xấu', 'Để trống', 'Vẽ bậy'], 0, 'Lời chúc chân thành.'),
    Q('Trang trí thiệp có thể bằng?', ['Vẽ, dán giấy, nơ, dán hình', 'Đinh sắt', 'Bùn đất', 'Vật sắc nhọn'], 0, 'Vật liệu an toàn.'),
    Q('Em làm thiệp tặng bạn vào dịp?', ['Khi muốn trêu bạn', 'Khi giận bạn', 'Không bao giờ', 'Sinh nhật, lễ Tết, ngày của Mẹ/Bố…'], 3, 'Nhiều dịp ý nghĩa.'),
    Q('Khi nhận thiệp từ bạn, em nên?', ['Nhận nhưng quên cảm ơn bạn', 'Cất vào ngăn bàn rồi không xem lại', 'Cảm ơn và giữ gìn', 'Vứt đi'], 2, 'Trân trọng tình cảm của bạn.'),
  ]),

  M(8, 'Ngày của Bố — Ngày của Mẹ', [
    Q('Ngày của Mẹ ở nhiều nước (Mother\'s Day) là?', ['Tháng 1', 'Tháng 12', 'Không có ngày', 'Chủ nhật thứ hai của tháng 5'], 3, 'Ngày của Mẹ thường vào tháng 5.'),
    Q('Em có thể tặng mẹ gì nhân ngày này?', ['Không tặng gì', 'Hoa, thiệp tự làm, lời chúc, giúp việc nhà', 'Cãi mẹ', 'Đòi quà'], 1, 'Quà nhỏ tâm huyết.'),
    Q('Ngày của Bố ở nhiều nước (Father\'s Day) là?', ['Tháng 1', 'Tháng 12', 'Chủ nhật thứ ba của tháng 6', 'Chủ nhật thứ hai của tháng 5'], 2, 'Ngày của Bố thường vào tháng 6.'),
    Q('Bố mẹ vất vả vì?', ['Vì yêu thương và lo cho con cái', 'Vì không có việc khác', 'Vì sở thích', 'Vì bị bắt'], 0, 'Bố mẹ vất vả vì con.'),
    Q('Em thể hiện lòng biết ơn bố mẹ bằng?', ['Cãi lại', 'Bỏ nhà', 'Đòi quà', 'Vâng lời, học giỏi, giúp đỡ'], 3, 'Hành động cụ thể thể hiện lòng biết ơn.'),
  ]),

  M(9, 'Em làm việc nhà', [
    Q('Việc nhà phù hợp với lớp 3 là?', ['Vận hành máy giặt phức tạp', 'Nấu cơm lớn', 'Quét nhà, lau bàn, gấp quần áo, rửa chén nhỏ', 'Sửa điện'], 2, 'Việc nhẹ vừa sức.'),
    Q('Khi giúp việc nhà, em nên?', ['Đòi tiền', 'Cau có', 'Vui vẻ, không miễn cưỡng', 'Trốn việc'], 2, 'Tinh thần tích cực.'),
    Q('Mẹ nấu cơm, em có thể giúp?', ['Cầm dao thái thịt', 'Bật bếp gas một mình', 'Rửa rau, nhặt rau, dọn bàn', 'Đứng nhìn'], 2, 'Việc an toàn cho lớp 3.'),
    Q('Giúp việc nhà giúp em?', ['Tự lập và yêu thương gia đình hơn', 'Mất thời gian', 'Yếu đi', 'Không có lợi'], 0, 'Trưởng thành và gắn kết gia đình.'),
    Q('Khi bạn không giúp việc nhà, em nên?', ['Mách cô', 'Làm gương và rủ bạn cùng làm', 'Cãi nhau với bạn', 'Tẩy chay bạn'], 1, 'Khuyên bạn nhẹ nhàng.'),
  ]),

  M(10, 'Tham gia hoạt động Đội Thiếu niên Tiền phong Hồ Chí Minh', [
    Q('Đội Thiếu niên Tiền phong Hồ Chí Minh là?', ['Tổ chức của thiếu niên Việt Nam từ 9–15 tuổi', 'Của người lớn', 'Của nước ngoài', 'Của trẻ sơ sinh'], 0, 'Đội TNTP Hồ Chí Minh dành cho thiếu niên.'),
    Q('Khăn quàng đỏ của đội viên có ý nghĩa?', ['Không có ý nghĩa', 'Để chùi tay', 'Trang trí', 'Là một phần của Quốc kì, tượng trưng máu đào của các anh hùng'], 3, 'Khăn quàng đỏ thiêng liêng.'),
    Q('Khi đeo khăn quàng, em nên?', ['Quên đeo', 'Đeo đúng cách, giữ sạch sẽ', 'Cuộn lại nhét túi', 'Vẽ bậy lên'], 1, 'Tôn trọng khăn quàng.'),
    Q('Ngày thành lập Đội là?', ['20/11', '1/6', '15/5/1941', '2/9/1945'], 2, '15/5 là ngày thành lập Đội.'),
    Q('Phong trào của Đội như "Kế hoạch nhỏ" giúp em?', ['Tham gia hoạt động xã hội ý nghĩa', 'Cô đơn', 'Mất thời gian', 'Không có ích'], 0, 'Phong trào Đội bổ ích.'),
  ]),

  M(11, 'Em yêu lao động', [
    Q('Lao động giúp em?', ['Không có lợi', 'Khoẻ mạnh, tự lập, biết quý công sức', 'Lười hơn', 'Yếu đi'], 1, 'Lao động đem lại nhiều giá trị.'),
    Q('Lao động ở trường có thể là?', ['Phá đồ', 'Trực nhật, lau bảng, tưới cây, dọn lớp', 'Vẽ bậy', 'Đánh nhau'], 1, 'Lao động tập thể ở trường.'),
    Q('Khi trực nhật, em nên?', ['Làm cẩn thận, đầy đủ', 'Đùn cho bạn', 'Làm qua loa', 'Trốn việc'], 0, 'Trách nhiệm với việc được giao.'),
    Q('Bạn không làm trực nhật, em nên?', ['Bỏ cuộc', 'Khuyên bạn cùng làm', 'Đánh bạn', 'Mách cô luôn'], 1, 'Khuyên trước, mách sau nếu cần.'),
    Q('Sau khi lao động em nên?', ['Để bẩn', 'Rửa tay sạch sẽ', 'Vứt giẻ bừa', 'Lau vào quần áo'], 1, 'Vệ sinh sau lao động.'),
  ]),

  M(12, 'Em tham gia hoạt động cộng đồng', [
    Q('Hoạt động cộng đồng là?', ['Hoạt động chung của nhiều người trong khu phố/làng', 'Hoạt động một mình', 'Hoạt động chỉ dành cho người lớn trong cơ quan', 'Hoạt động cấm'], 0, 'Cộng đồng là chung.'),
    Q('Em có thể tham gia?', ['Phá phách', 'Trốn việc', 'Trồng cây khu phố, dọn rác, ủng hộ người khó khăn', 'Vẽ bậy lên tường'], 2, 'Việc làm tích cực cho cộng đồng.'),
    Q('Khi tham gia hoạt động, em nên?', ['Lười biếng', 'Chỉ làm khi có cô giáo nhắc nhở', 'Tích cực, hợp tác và lễ phép', 'Cãi vã'], 2, 'Thái độ tích cực là quan trọng.'),
    Q('Tham gia hoạt động cộng đồng giúp em?', ['Yêu nơi mình sống và biết chia sẻ', 'Mất thời gian', 'Cô đơn', 'Không có lợi'], 0, 'Phát triển tình cảm xã hội.'),
    Q('Ngày Môi trường thế giới là?', ['20/11', '8/3', '5/6', '2/9'], 2, '5/6 là ngày Môi trường thế giới.'),
  ]),

  M(13, 'Ứng phó thiên tai cơ bản (1) — Bão lũ', [
    Q('Khi nghe tin có bão, em nên?', ['Ra ngoài chơi', 'Bơi ra biển', 'Nghe theo hướng dẫn của bố mẹ và chính quyền', 'Trèo lên mái nhà'], 2, 'Tuân theo hướng dẫn để an toàn.'),
    Q('Trong bão, em nên?', ['Tắm mưa', 'Đứng dưới cây to', 'Ra ngoài đi dạo', 'Ở trong nhà, tránh cửa sổ'], 3, 'Ở nơi an toàn trong nhà.'),
    Q('Lũ ập đến, em nên?', ['Lấy đồ chơi trước', 'Lên cao và gọi người lớn', 'Ở yên trong tầng trệt chờ nước rút', 'Lội xuống nước'], 1, 'Lên cao tránh nước.'),
    Q('Đồ dùng cần chuẩn bị khi có bão lũ?', ['Đèn pin, nước uống, lương thực khô, áo mưa', 'Quạt điện và nồi cơm điện', 'Vàng bạc', 'Đồ chơi'], 0, 'Đồ thiết yếu cho an toàn.'),
    Q('Sau bão lũ, em nên?', ['Bơi trong nước lũ', 'Sờ dây điện', 'Không tự ý chơi gần dây điện rơi, nước đọng', 'Nghịch nước'], 2, 'Nguy hiểm rình rập sau bão lũ.'),
  ]),

  M(14, 'Ứng phó thiên tai cơ bản (2) — Cháy nổ', [
    Q('Khi có cháy ở nhà, em nên?', ['Trốn vào tủ', 'Chạy ra ngoài, gọi 114 báo cứu hoả', 'Lấy đồ trước', 'Ngủ tiếp'], 1, 'Thoát hiểm là ưu tiên đầu tiên.'),
    Q('Số điện thoại cứu hoả là?', ['911', '114', '115', '113'], 1, '114 ở Việt Nam là cứu hoả.'),
    Q('Khi có khói nhiều, em nên?', ['Đứng thẳng', 'Hít thật sâu', 'Chạy nhanh', 'Cúi thấp người và bịt mũi miệng bằng khăn ướt'], 3, 'Khói nóng bay lên cao, cúi thấp tránh khói.'),
    Q('Để phòng cháy, em không nên?', ['Mở tủ lạnh', 'Đánh răng', 'Bật đèn', 'Chơi với diêm, lửa, bật lửa'], 3, 'Chơi lửa rất nguy hiểm.'),
    Q('Khi quần áo bắt lửa, em nên?', ['Dừng – Nằm – Lăn (Stop, Drop, Roll)', 'Đứng yên khóc', 'Cởi áo trong không khí', 'Chạy nhanh hơn'], 0, 'Lăn dập lửa là kĩ thuật cứu mạng.'),
  ]),

  M(15, 'Dã ngoại (1) — Chuẩn bị', [
    Q('Trước khi đi dã ngoại, em nên?', ['Chuẩn bị: nước uống, đồ ăn nhẹ, mũ, kem chống nắng', 'Mang đồ chơi nặng', 'Không cần chuẩn bị', 'Mang đồ điện tử đắt tiền'], 0, 'Chuẩn bị giúp an toàn và thoải mái.'),
    Q('Em nên mang theo điều gì cho an toàn?', ['Đồ trang sức', 'Thẻ thông tin liên hệ của bố mẹ', 'Vũ khí', 'Tiền nhiều'], 1, 'Thẻ liên hệ phòng khi đi lạc.'),
    Q('Khi đi dã ngoại, em nên đi cùng?', ['Người lạ', 'Người lớn và đoàn có hướng dẫn', 'Bạn cùng lứa không có người lớn', 'Một mình'], 1, 'Phải có người lớn đi cùng.'),
    Q('Trang phục dã ngoại nên?', ['Giày cao gót', 'Gọn gàng, giày đi bộ, mũ', 'Dép tổ ong', 'Váy dài lê thê'], 1, 'Trang phục phù hợp hoạt động.'),
    Q('Vì sao cần báo bố mẹ điểm đến và thời gian về?', ['Để bố mẹ biết và liên hệ khi cần', 'Để bố mẹ lo', 'Để khoe', 'Không cần thiết'], 0, 'An toàn cho cả em và gia đình.'),
  ]),

  M(16, 'Dã ngoại (2) — Khi đến nơi', [
    Q('Khi dã ngoại, em không nên?', ['Tự ý xa nhóm và bỏ trốn', 'Hỏi người lớn khi cần', 'Đi cùng nhóm', 'Tuân thủ lịch trình'], 0, 'Xa nhóm rất nguy hiểm.'),
    Q('Rác sau khi ăn em nên?', ['Đổ xuống suối', 'Gom lại và mang về vứt vào thùng rác', 'Để tại chỗ', 'Chôn xuống đất'], 1, 'Bảo vệ môi trường thiên nhiên.'),
    Q('Khi gặp động vật hoang dã, em nên?', ['Cho nó ăn lung tung', 'Đánh nó', 'Đứng yên quan sát từ xa, không trêu chọc', 'Đuổi bắt'], 2, 'Tôn trọng động vật và an toàn.'),
    Q('Đi xa nhóm và bị lạc, em nên?', ['Đứng yên một chỗ và gọi to', 'Đi lung tung tìm', 'Bỏ chạy', 'Khóc trốn vào bụi'], 0, 'Đứng yên dễ được tìm thấy hơn.'),
    Q('Sau dã ngoại em nên?', ['Phàn nàn', 'Không kể ai', 'Kể lại trải nghiệm và rút kinh nghiệm', 'Quên đi'], 2, 'Chia sẻ trải nghiệm là tích cực.'),
  ]),

  M(17, 'Em tham gia phong trào "Kế hoạch nhỏ"', [
    Q('Phong trào "Kế hoạch nhỏ" là?', ['Mua đồ mới', 'Vứt đồ', 'Đập phá', 'Phong trào thu gom giấy vụn, vỏ chai để gây quỹ'], 3, 'Phong trào quen thuộc của Đội.'),
    Q('Tham gia "Kế hoạch nhỏ" em rèn?', ['Tiết kiệm, lao động, tinh thần đồng đội', 'Cô đơn', 'Lười biếng', 'Không có lợi'], 0, 'Giáo dục đa giá trị.'),
    Q('Quỹ thu được từ "Kế hoạch nhỏ" thường dùng?', ['Khoe khoang', 'Mua đồ chơi cho mình', 'Giúp bạn nghèo, các hoạt động Đội', 'Tiêu hoang'], 2, 'Mục đích cộng đồng.'),
    Q('Em có thể đóng góp bằng?', ['Rác bẩn', 'Giấy vụn, vỏ chai, lon nhôm sạch', 'Đồ ăn thừa', 'Đồ nguy hiểm'], 1, 'Đồ tái chế sạch.'),
    Q('Vì sao "Kế hoạch nhỏ" có ý nghĩa?', ['Chỉ giúp nhà trường lấy thành tích thi đua', 'Mất thời gian', 'Vừa bảo vệ môi trường, vừa giúp bạn nghèo', 'Không có ý nghĩa'], 2, 'Lợi ích kép.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Em đã tổ chức góc học tập như thế nào?', ['Trên giường', 'Bừa bộn', 'Đặt sát cửa ra vào cho tiện đi lại', 'Gọn gàng, đủ sáng'], 3, 'Góc học tập đúng chuẩn.'),
    Q('Khi đi xe đạp em luôn?', ['Buông tay', 'Đi giữa đường', 'Không đội', 'Đội mũ bảo hiểm'], 3, 'An toàn là trên hết.'),
    Q('Số điện thoại cứu hoả là?', ['115', '911', '114', '113'], 2, '114 cứu hoả.'),
    Q('Việc nhà em thường làm?', ['Sửa điện', 'Nấu cơm lớn', 'Không làm', 'Quét nhà, gấp quần áo, lau bàn'], 3, 'Việc nhẹ vừa sức.'),
    Q('Đội TNTP HCM thành lập ngày?', ['15/5/1941', '20/11', '2/9', '1/6'], 0, '15/5 là ngày thành lập Đội.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Đón Tết cổ truyền', [
    Q('Tết cổ truyền của Việt Nam là?', ['Tết Tây 1/1', 'Quốc Khánh', 'Tết Nguyên Đán (Tết Âm lịch)', 'Trung Thu'], 2, 'Tết Nguyên Đán là Tết lớn nhất.'),
    Q('Tết em giúp gia đình?', ['Đi chơi cả ngày', 'Ngủ cả Tết', 'Cãi nhau', 'Dọn nhà, gói bánh, trang trí nhà'], 3, 'Giúp gia đình chuẩn bị Tết.'),
    Q('Khi chúc Tết, em nên?', ['Đòi lì xì', 'Lễ phép, dùng lời chúc tốt đẹp', 'Cười cợt', 'Không chúc'], 1, 'Văn hoá chúc Tết.'),
    Q('Tiền lì xì nên?', ['Tiêu hết ngay', 'Khoe khoang', 'Tiết kiệm hoặc dùng đúng việc', 'Đánh bạc'], 2, 'Dùng tiền có ích.'),
    Q('Trang phục Tết em nên?', ['Bẩn thỉu', 'Quá luộm thuộm', 'Đẹp, gọn gàng, lịch sự', 'Quá hở'], 2, 'Trang phục đẹp đón năm mới.'),
  ]),

  M(20, 'Tự giới thiệu và giao tiếp', [
    Q('Khi gặp người lạ (người lớn), em nên?', ['Cúi đầu đi nhanh qua không nói gì', 'Quát to', 'Lễ phép chào và giới thiệu tên', 'Im lặng'], 2, 'Giao tiếp lễ phép.'),
    Q('Khi nói chuyện với người lớn, em nên?', ['Nhìn vào mắt, nói rõ ràng và xưng "cháu"', 'Nhìn xuống đất', 'Quay lưng', 'Cười cợt'], 0, 'Giao tiếp tự tin và lễ phép.'),
    Q('Khi nghe người khác nói, em nên?', ['Lắng nghe, không cắt lời', 'Quát to', 'Cắt lời', 'Vừa nghe vừa làm việc khác'], 0, 'Lắng nghe là kĩ năng quan trọng.'),
    Q('Khi không hiểu, em nên?', ['Bỏ qua', 'Lễ phép hỏi lại', 'Bịa đáp', 'Im lặng'], 1, 'Hỏi để hiểu là tốt.'),
    Q('Khi cần xin phép, em nên?', ['Nhắn tin rồi tự đi luôn', 'Tự ý làm', 'Lễ phép hỏi và đợi câu trả lời', 'Quát đòi'], 2, 'Xin phép lịch sự.'),
  ]),

  M(21, 'Em tham gia ngày 8/3', [
    Q('Ngày 8/3 là?', ['Ngày Nhà giáo', 'Ngày sinh nhật em', 'Ngày Quốc khánh', 'Ngày Quốc tế Phụ nữ'], 3, '8/3 tôn vinh phụ nữ.'),
    Q('Em có thể làm gì cho mẹ, bà, cô ngày 8/3?', ['Đòi quà', 'Chỉ chúc miệng cho xong rồi đi chơi', 'Tặng hoa, thiệp, lời chúc, giúp việc nhà', 'Quên đi'], 2, 'Thể hiện lòng biết ơn.'),
    Q('Lời chúc nào hay cho mẹ ngày 8/3?', ['"Mẹ đi đâu thế"', 'Không chúc gì', '"Chúc mẹ luôn vui khoẻ, hạnh phúc"', '"Mẹ cho con tiền"'], 2, 'Lời chúc chân thành.'),
    Q('Em yêu thương phụ nữ trong gia đình bằng?', ['Vâng lời, quan tâm, giúp đỡ', 'Cãi vã', 'Đòi hỏi', 'Hỗn láo'], 0, 'Hành động hàng ngày là quan trọng.'),
    Q('Phụ nữ Việt Nam có vai trò?', ['Chỉ ở nhà', 'Quan trọng trong gia đình và xã hội', 'Bị coi thường', 'Chỉ quan trọng trong việc nội trợ'], 1, 'Phụ nữ bình đẳng và quan trọng.'),
  ]),

  M(22, 'An toàn khi ở nhà một mình', [
    Q('Khi ở nhà một mình, em nên?', ['Khoá cửa, không mở cho người lạ', 'Ra ngoài đi chơi', 'Bật bếp gas chơi', 'Mở cửa cho mọi người'], 0, 'Khoá cửa là an toàn.'),
    Q('Có người lạ gõ cửa, em nên?', ['Cãi vã qua cửa', 'Mở ngay', 'Không mở, gọi cho bố mẹ', 'Mở cửa rồi trốn'], 2, 'An toàn là ưu tiên hàng đầu.'),
    Q('Em KHÔNG nên tự ý dùng?', ['Đèn bàn', 'TV (xem phù hợp)', 'Bếp gas, dao to, ổ điện', 'Đồ chơi'], 2, 'Đồ nguy hiểm cần người lớn.'),
    Q('Khi có sự cố ở nhà (cháy, lụt, người lạ), em nên?', ['Gọi bố mẹ và hàng xóm tin cậy', 'Im lặng', 'Mở cửa cho người lạ vào nhà', 'Tự xử lý liều'], 0, 'Cầu cứu người lớn.'),
    Q('Số điện thoại cấp cứu (y tế) là?', ['115', '114', '911', '113'], 0, '115 là cấp cứu y tế ở Việt Nam.'),
  ]),

  M(23, 'Phòng tránh tai nạn thương tích', [
    Q('Khi đi cầu thang, em nên?', ['Nhảy 3 bậc', 'Bám tay vịn, đi từng bậc', 'Trượt tay vịn', 'Chạy nhảy'], 1, 'Cầu thang nguy hiểm nếu không cẩn thận.'),
    Q('Khi đường ướt, em nên?', ['Chạy nhảy', 'Đi cẩn thận, chậm rãi', 'Đi giày cao gót', 'Đùa giỡn'], 1, 'Tránh trượt ngã.'),
    Q('Vật sắc nhọn (dao, kéo) em?', ['Ném đi', 'Đùa giỡn với nó', 'Cầm cẩn thận, không vung vẩy', 'Chỉ vào người'], 2, 'Vật sắc rất nguy hiểm.'),
    Q('Khi bị thương nhỏ (xước), em nên?', ['Rửa sạch và báo người lớn', 'Bôi đất', 'Bôi nước bẩn', 'Để nguyên'], 0, 'Vệ sinh vết thương ngay.'),
    Q('Khi thấy bạn bị ngã đau, em nên?', ['Cười nhạo', 'Đỡ bạn dậy và báo người lớn', 'Bắt chước', 'Quay video bạn ngã để gửi cho bạn khác'], 1, 'Giúp đỡ bạn.'),
  ]),

  M(24, 'Em làm bạn với sách', [
    Q('Đọc sách giúp em?', ['Mất thời gian', 'Đau mắt', 'Yếu đi', 'Mở rộng hiểu biết, phát triển ngôn ngữ'], 3, 'Đọc sách rất bổ ích.'),
    Q('Em nên đọc sách?', ['Không bao giờ', 'Mỗi ngày một chút, theo lứa tuổi', 'Chỉ khi cô bắt', 'Chỉ đọc khi không có gì làm'], 1, 'Thói quen đọc đều đặn.'),
    Q('Tư thế đọc sách đúng?', ['Nằm đọc', 'Đọc thiếu sáng', 'Ngồi thẳng, sách cách mắt 30cm, đủ sáng', 'Đọc trên xe rung lắc'], 2, 'Bảo vệ mắt khi đọc.'),
    Q('Sách hay em nên?', ['Chia sẻ với bạn cùng đọc', 'Đọc xong một lần rồi cất luôn', 'Vẽ bậy vào', 'Giấu kín'], 0, 'Chia sẻ niềm vui đọc sách.'),
    Q('Thư viện trường là?', ['Nơi chơi điện thoại', 'Chỗ ngủ', 'Sân bóng', 'Nơi em mượn sách để đọc'], 3, 'Tận dụng thư viện.'),
  ]),

  M(25, 'Em tham gia ngày Sách Việt Nam', [
    Q('Ngày Sách Việt Nam là?', ['20/11', '2/9', '21/4 hằng năm', '1/1'], 2, '21/4 tôn vinh sách và văn hoá đọc.'),
    Q('Em có thể làm gì nhân ngày Sách?', ['Vứt sách', 'Không quan tâm', 'Tham gia hội sách, đọc sách cùng bạn, giới thiệu sách hay', 'Đốt sách'], 2, 'Lan toả văn hoá đọc.'),
    Q('Khi giới thiệu sách hay, em nên?', ['Khoe khoang', 'Bịa nội dung', 'Chê sách', 'Nói tóm tắt nội dung và cảm nhận của em'], 3, 'Chia sẻ chân thành.'),
    Q('Sách em nên đọc ở lớp 3?', ['Sách thiếu nhi: truyện cổ tích, khoa học, lịch sử…', 'Sách người lớn phức tạp', 'Không cần đọc', 'Sách bạo lực'], 0, 'Sách phù hợp lứa tuổi.'),
    Q('Văn hoá đọc giúp xã hội?', ['Tụt hậu', 'Lãng phí', 'Phát triển, có nhiều người hiểu biết', 'Không liên quan'], 2, 'Văn hoá đọc nuôi dưỡng trí tuệ.'),
  ]),

  M(26, 'Em yêu trường lớp', [
    Q('Em thể hiện yêu trường lớp bằng?', ['Giữ vệ sinh, tham gia hoạt động, bảo vệ tài sản', 'Vẽ bậy', 'Trốn học', 'Phá đồ'], 0, 'Hành động cụ thể yêu trường.'),
    Q('Thấy bạn vẽ bậy lên tường, em nên?', ['Vẽ cùng', 'Cười nhạo', 'Khuyên bạn dừng lại', 'Mặc kệ'], 2, 'Bảo vệ trường lớp.'),
    Q('Sân trường nên?', ['Trống không', 'Có rác', 'Bẩn thỉu', 'Sạch đẹp, có cây xanh'], 3, 'Sân trường xanh sạch.'),
    Q('Khi tan học, em nên?', ['Đẩy bạn dọn', 'Chạy ngay ra', 'Tự dọn chỗ ngồi, bỏ rác vào thùng', 'Để bừa'], 2, 'Trách nhiệm với chỗ ngồi.'),
    Q('Tham gia phong trào "Trường học xanh – sạch – đẹp" em nên?', ['Làm cho có', 'Phá phách', 'Tích cực và thật lòng', 'Trốn việc'], 2, 'Tham gia chân thành.'),
  ]),

  M(27, 'Tự đánh giá bản thân', [
    Q('Tự đánh giá bản thân là?', ['Chê mình mãi', 'Khen mình mãi', 'Không quan tâm', 'Xem mình đã làm tốt/chưa tốt việc gì'], 3, 'Tự đánh giá khách quan.'),
    Q('Khi tự đánh giá, em nên?', ['Hạ thấp', 'Bịa đặt', 'Phóng đại', 'Trung thực, không tự dối lừa'], 3, 'Trung thực với bản thân.'),
    Q('Phát hiện việc mình làm chưa tốt, em nên?', ['Cố gắng sửa và rút kinh nghiệm', 'Bỏ qua', 'Đổ lỗi', 'Buông xuôi'], 0, 'Cải thiện bản thân.'),
    Q('Phát hiện việc mình làm tốt, em nên?', ['Quên đi', 'Hạ thấp', 'Khoe khoang', 'Tự hào và tiếp tục phát huy'], 3, 'Khẳng định và phát huy điểm mạnh.'),
    Q('Tự đánh giá thường xuyên giúp em?', ['Chỉ thấy khuyết điểm của bản thân', 'Trưởng thành và tiến bộ', 'Tự kiêu', 'Không có lợi'], 1, 'Tự nhận thức là chìa khoá trưởng thành.'),
  ]),

  M(28, 'Em tham gia ngày 30/4 – 1/5', [
    Q('Ngày 30/4 là?', ['Ngày 20/11', 'Ngày 8/3', 'Ngày 1/1', 'Ngày Giải phóng miền Nam, thống nhất đất nước'], 3, '30/4/1975 đất nước thống nhất.'),
    Q('Ngày 1/5 là?', ['Ngày Quốc khánh', 'Ngày Quốc tế Lao động', 'Ngày sinh nhật', 'Ngày Nhà giáo'], 1, '1/5 tôn vinh người lao động.'),
    Q('Trong dịp lễ này, nhà nhà thường?', ['Đập phá', 'Đóng kín cửa', 'Cãi nhau', 'Treo cờ Tổ quốc'], 3, 'Treo cờ thể hiện tình yêu nước.'),
    Q('Em có thể làm gì dịp lễ?', ['Tham gia hoạt động cộng đồng, tìm hiểu lịch sử', 'Phá phách', 'Chỉ ngủ và xem TV suốt ngày', 'Cãi nhau'], 0, 'Tận dụng ngày lễ ý nghĩa.'),
    Q('Lòng biết ơn với người có công, em thể hiện?', ['Quên đi', 'Coi thường', 'Học tốt, sống có ích', 'Chê bai'], 2, 'Hành động cụ thể.'),
  ]),

  M(29, 'Đoàn kết xây dựng tập thể', [
    Q('Lớp đoàn kết là?', ['Mọi bạn yêu thương, giúp đỡ nhau', 'Chia phe', 'Cãi nhau', 'Tẩy chay bạn'], 0, 'Đoàn kết là sức mạnh tập thể.'),
    Q('Bạn mới chuyển đến em nên?', ['Đón tiếp và giúp bạn hoà nhập', 'Trêu chọc', 'Mặc kệ', 'Tẩy chay'], 0, 'Đón bạn mới là biểu hiện đoàn kết.'),
    Q('Khi có mâu thuẫn với bạn, em nên?', ['Đánh nhau', 'Im lặng giận', 'Bình tĩnh nói chuyện, không bạo lực', 'Mách cô luôn'], 2, 'Giải quyết bằng đối thoại.'),
    Q('Trong hoạt động nhóm, em nên?', ['Im lặng', 'Áp đặt ý mình', 'Lắng nghe và đóng góp ý kiến', 'Phá nhóm'], 2, 'Hợp tác và tôn trọng.'),
    Q('Tập thể đoàn kết sẽ?', ['Buồn bã', 'Tan rã', 'Đạt nhiều thành tích, mọi người vui vẻ', 'Yếu đi'], 2, 'Đoàn kết mạnh hơn.'),
  ]),

  M(30, 'Em yêu thiên nhiên', [
    Q('Yêu thiên nhiên em nên?', ['Bảo vệ cây cối, động vật, không xả rác', 'Vẽ bậy lên cây', 'Bắt động vật', 'Bẻ cành'], 0, 'Hành động bảo vệ cụ thể.'),
    Q('Thấy bạn bắt chim non, em nên?', ['Cười cổ vũ', 'Khuyên bạn thả chim', 'Mặc kệ', 'Bắt cùng'], 1, 'Bảo vệ động vật.'),
    Q('Em có thể trồng?', ['Cây cấm', 'Không trồng được gì', 'Cây xanh, hoa, rau trong chậu', 'Chỉ trồng to'], 2, 'Mọi người đều có thể trồng cây.'),
    Q('Đi dã ngoại em nên?', ['Đổ xuống suối', 'Để rác tại chỗ', 'Mang rác về vứt đúng thùng', 'Đốt rác'], 2, 'Bảo vệ thiên nhiên sạch đẹp.'),
    Q('Tham gia ngày Trái Đất (22/4) em có thể?', ['Phá rừng', 'Trồng cây, dọn rác, tiết kiệm điện nước', 'Chỉ chụp ảnh đăng mạng xã hội', 'Đốt rác'], 1, 'Hành động vì Trái Đất.'),
  ]),

  M(31, 'Em chuẩn bị cho hè', [
    Q('Cuối năm học, em nên?', ['Tổng kết bài học và sắp xếp sách vở gọn gàng', 'Quên hết', 'Vứt sách', 'Xé sách'], 0, 'Tổng kết tốt cho năm sau.'),
    Q('Mùa hè em sẽ?', ['Nghỉ ngơi, học thêm, đi du lịch, giúp gia đình', 'Ngủ cả ngày', 'Cãi vã', 'Chơi game cả ngày'], 0, 'Hè là thời gian phát triển toàn diện.'),
    Q('Đọc sách trong hè giúp em?', ['Đau mắt', 'Tiếp tục học và mở mang kiến thức', 'Lười đi', 'Không có lợi'], 1, 'Hè không nên ngừng đọc.'),
    Q('Khi đi chơi hè em nên?', ['Trốn nhà', 'Báo bố mẹ điểm đến và giờ về', 'Nhịn ăn để chơi được lâu hơn', 'Tự ý đi'], 1, 'An toàn là trên hết.'),
    Q('Hè em có thể giúp gia đình?', ['Việc nhà phù hợp lứa tuổi', 'Đòi hỏi', 'Cãi nhau', 'Chờ bố mẹ nhờ mới làm'], 0, 'Giúp đỡ gia đình là tốt.'),
  ]),

  M(32, 'Tham gia ngày Quốc tế Thiếu nhi 1/6', [
    Q('Ngày 1/6 là?', ['Ngày Nhà giáo', 'Ngày Quốc tế Thiếu nhi', 'Ngày Phụ nữ', 'Ngày Quốc khánh'], 1, '1/6 dành cho thiếu nhi.'),
    Q('Dịp 1/6 trẻ em được?', ['Bị phạt', 'Không có gì đặc biệt', 'Quan tâm, tặng quà, vui chơi', 'Cấm chơi'], 2, 'Ngày của trẻ em.'),
    Q('Em có thể tham gia?', ['Văn nghệ, trò chơi, đọc sách, dã ngoại', 'Chỉ ngồi xem các bạn khác chơi', 'Đánh nhau', 'Phá đồ'], 0, 'Hoạt động lành mạnh.'),
    Q('Trẻ em có quyền gì?', ['Học tập, vui chơi, được bảo vệ và yêu thương', 'Không có quyền', 'Bị bóc lột', 'Bị bỏ rơi'], 0, 'Quyền trẻ em là cơ bản.'),
    Q('Em biết ơn người lớn vì?', ['Không có gì', 'Bị bắt biết ơn', 'Không quan tâm', 'Đã chăm sóc, dạy dỗ, bảo vệ em'], 3, 'Biết ơn là phẩm chất tốt.'),
  ]),

  M(33, 'Tổng kết hoạt động năm học', [
    Q('Trong năm em đã tham gia hoạt động?', ['Một hoạt động', 'Không nhớ', 'Không tham gia gì', 'Nhiều: lao động, văn nghệ, dã ngoại, phong trào…'], 3, 'Đa dạng hoạt động trải nghiệm.'),
    Q('Hoạt động em yêu thích nhất là?', ['Không có gì', 'Có thể là một hoạt động ý nghĩa em nhớ', 'Không quan tâm', 'Hoạt động phá hoại'], 1, 'Mỗi em có hoạt động riêng yêu thích.'),
    Q('Bạn nào em quý mến nhất, em có thể?', ['Cãi nhau', 'Viết thư, làm thiệp tặng bạn', 'Quên bạn', 'Tẩy chay'], 1, 'Gìn giữ tình bạn.'),
    Q('Cô giáo, em nên?', ['Không chào', 'Cảm ơn và chúc cô mạnh khoẻ', 'Hỗn láo', 'Quên cô'], 1, 'Biết ơn thầy cô.'),
    Q('Em rút ra bài học gì từ năm học?', ['Sự cố gắng, đoàn kết và tình yêu thương', 'Học để chấm dứt', 'Bỏ học', 'Không có bài học'], 0, 'Bài học từ trải nghiệm.'),
  ]),

  M(34, 'Lễ tổng kết và chia tay', [
    Q('Lễ tổng kết là?', ['Buổi cãi nhau', 'Buổi lễ kết thúc năm học, tôn vinh các bạn xuất sắc', 'Buổi phá phách', 'Buổi họp riêng của giáo viên chủ nhiệm'], 1, 'Lễ tổng kết trang trọng.'),
    Q('Trong lễ tổng kết em nên?', ['Trang phục đẹp, đúng giờ, nghiêm túc', 'Quần áo lôi thôi', 'Phá đám', 'Đến muộn'], 0, 'Tôn trọng buổi lễ.'),
    Q('Khi được khen thưởng, em nên?', ['Cười cợt', 'Khoe khoang', 'Nhận xong rồi chạy ngay về chỗ', 'Lễ phép nhận và cảm ơn'], 3, 'Khiêm tốn khi được khen.'),
    Q('Khi bạn được khen, em nên?', ['Nói xấu', 'Khinh thường', 'Ghen tị', 'Chúc mừng và học hỏi'], 3, 'Tinh thần đẹp.'),
    Q('Cuối lễ, em chia tay bạn bè thầy cô bằng?', ['Lời chúc và cái ôm thân tình', 'Khóc nhè', 'Lặng lẽ ra về không chào ai', 'Cãi nhau'], 0, 'Chia tay ấm áp.'),
  ]),

  M(35, 'Sẵn sàng lên Lớp 4', [
    Q('Lên lớp 4 em cần?', ['Quên kiến thức cũ', 'Lười hơn', 'Bỏ học', 'Học tập cố gắng hơn, tự lập hơn'], 3, 'Lớp 4 yêu cầu cao hơn.'),
    Q('Trong hè để chuẩn bị lên lớp 4, em nên?', ['Chơi game cả ngày', 'Chờ đến gần khai giảng mới ôn', 'Xem TV và lướt điện thoại suốt ngày', 'Đọc sách, ôn bài nhẹ, rèn kĩ năng'], 3, 'Duy trì thói quen học.'),
    Q('Khi gặp bạn cũ lớp 3 ở lớp 4, em nên?', ['Quên bạn cũ', 'Vẫn giữ tình bạn và đoàn kết với bạn mới', 'Chỉ chơi bạn cũ', 'Tẩy chay bạn mới'], 1, 'Cởi mở với mọi người.'),
    Q('Mục tiêu của em lên lớp 4 là?', ['Đứng nhất bằng mọi giá', 'Không có mục tiêu', 'Chơi cả năm', 'Học tập tốt và rèn phẩm chất'], 3, 'Mục tiêu lành mạnh.'),
    Q('Em cảm ơn ai đã giúp em hoàn thành Lớp 3?', ['Không ai cả', 'Bố mẹ, thầy cô, bạn bè', 'Quên hết', 'Một mình em'], 1, 'Biết ơn những người đồng hành.'),
  ], { difficulty: 2 }),
];

export const P3HDTN_SCENARIOS = indexBy(P3HDTN_WEEKS);
