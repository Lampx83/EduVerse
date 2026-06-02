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
    Q('Khi lên lớp 3, em cảm thấy?', ['Tự hào và sẵn sàng học tập chăm chỉ hơn', 'Sợ hãi và muốn về lớp 2', 'Chán nản', 'Không quan tâm'], 0, 'Lên lớp mới là niềm vui và trách nhiệm.'),
    Q('Lớp 3 có gì khác lớp 2?', ['Bài học sâu hơn, em cần tự lập hơn', 'Không có gì khác', 'Dễ hơn', 'Không cần học'], 0, 'Lớp 3 yêu cầu cao hơn về tự lập.'),
    Q('Em giới thiệu về mình với bạn mới nên?', ['Lễ phép, vui vẻ, nói rõ tên và sở thích', 'Im lặng', 'Hét tên to', 'Cãi nhau'], 0, 'Giới thiệu thân thiện tạo tình bạn.'),
    Q('Trong lớp mới, em nên?', ['Kết bạn với tất cả các bạn', 'Chỉ chơi với bạn cũ', 'Tẩy chay bạn mới', 'Cô đơn'], 0, 'Cởi mở kết bạn là tốt.'),
    Q('Bạn nào mới chuyển đến lớp em, em nên?', ['Chào hỏi và giúp bạn làm quen', 'Mặc kệ bạn', 'Trêu chọc bạn', 'Tẩy chay'], 0, 'Đón bạn mới là tình bạn đẹp.'),
  ]),

  M(2, 'Tổ chức góc học tập ở nhà', [
    Q('Góc học tập của em nên?', ['Có bàn, ghế, đèn đủ sáng, gọn gàng', 'Nằm trên giường', 'Trên sàn nhà bừa bộn', 'Trong nhà tắm'], 0, 'Góc học tập đúng chuẩn.'),
    Q('Đèn học nên đặt ở?', ['Phía bên tay không thuận viết (trái nếu thuận tay phải)', 'Sau lưng', 'Chiếu thẳng vào mắt', 'Trên đầu'], 0, 'Đèn từ phía đối diện tay viết tránh bóng đổ.'),
    Q('Sách vở trên bàn em nên?', ['Sắp xếp gọn gàng theo môn', 'Vứt bừa', 'Chồng cao', 'Để dưới đất'], 0, 'Gọn gàng dễ tìm và đẹp mắt.'),
    Q('Trước khi học, em nên?', ['Dọn bàn và chuẩn bị đủ dụng cụ', 'Bày bừa', 'Ăn vặt', 'Bật ti vi'], 0, 'Chuẩn bị tốt là nửa chặng đường.'),
    Q('Khi học, em nên?', ['Tập trung, không bật ti vi hay điện thoại', 'Vừa học vừa xem ti vi', 'Vừa học vừa chơi điện thoại', 'Vừa học vừa ăn'], 0, 'Tập trung giúp học hiệu quả.'),
  ]),

  M(3, 'Kế hoạch tuần', [
    Q('Kế hoạch tuần là?', ['Bảng ghi các việc cần làm trong tuần', 'Sách bài tập', 'Quyển truyện', 'Sổ ghi điểm'], 0, 'Kế hoạch giúp sắp xếp thời gian.'),
    Q('Một tuần có?', ['7 ngày', '5 ngày', '10 ngày', '30 ngày'], 0, '7 ngày trong tuần.'),
    Q('Lập kế hoạch tuần giúp em?', ['Không quên việc, làm việc hiệu quả', 'Quên nhiều hơn', 'Lười hơn', 'Mất thời gian'], 0, 'Kế hoạch giúp hiệu quả.'),
    Q('Trong kế hoạch tuần nên có?', ['Học, chơi, giúp gia đình, ngủ đủ', 'Chỉ học', 'Chỉ chơi', 'Chỉ ngủ'], 0, 'Cân bằng các hoạt động.'),
    Q('Cuối tuần em nên?', ['Xem lại kế hoạch và rút kinh nghiệm', 'Quên hết', 'Bỏ kế hoạch', 'Xé kế hoạch'], 0, 'Đánh giá để cải thiện.'),
  ]),

  M(4, 'An toàn khi đi xe đạp (1)', [
    Q('Khi đi xe đạp, em nên?', ['Đội mũ bảo hiểm', 'Không đội mũ', 'Đội mũ vành thay mũ bảo hiểm', 'Đội nón lá'], 0, 'Mũ bảo hiểm bảo vệ đầu khi ngã.'),
    Q('Đi xe đạp ở đâu?', ['Đường có ít xe, sát lề đường', 'Giữa đường lớn', 'Đường cao tốc', 'Trên vỉa hè đông người'], 0, 'Sát lề và đường an toàn.'),
    Q('Khi rẽ trái/phải, em nên?', ['Giơ tay xin đường và quan sát', 'Rẽ luôn không báo', 'Phanh gấp', 'Nhắm mắt'], 0, 'Báo hiệu trước khi chuyển hướng.'),
    Q('Đèn đỏ giao thông em?', ['Dừng lại trước vạch', 'Đi tiếp', 'Vòng tránh', 'Phanh giữa ngã tư'], 0, 'Tuân thủ đèn tín hiệu.'),
    Q('Không nên đi xe đạp khi?', ['Trời mưa to, tối hoặc đường trơn nguy hiểm', 'Trời nắng đẹp', 'Đường khô', 'Có người lớn đi cùng'], 0, 'Tránh điều kiện nguy hiểm.'),
  ]),

  M(5, 'An toàn khi đi xe đạp (2)', [
    Q('Khi đi xe đạp em KHÔNG nên?', ['Buông cả hai tay khi đang chạy', 'Cầm chắc tay lái', 'Phanh khi cần', 'Đi đúng làn'], 0, 'Buông tay rất nguy hiểm.'),
    Q('Trước khi đi xe, em kiểm tra?', ['Phanh, xích, bánh xe có đủ hơi không', 'Không cần', 'Chỉ kiểm tra chuông', 'Chỉ kiểm tra yên'], 0, 'Kiểm tra xe đảm bảo an toàn.'),
    Q('Khi chở bạn ngồi sau, em nên?', ['Không nên — xe đạp trẻ em không thiết kế chở 2', 'Vô tư chở', 'Chở 3 người', 'Chở bạn đứng sau'], 0, 'Xe đạp trẻ em chỉ chở 1.'),
    Q('Trang phục đi xe đạp nên?', ['Gọn gàng, dễ vận động', 'Áo dài rộng quét đất', 'Quần xộc xệch', 'Cài váy vào xích'], 0, 'Trang phục gọn tránh tai nạn.'),
    Q('Khi gặp sự cố trên đường (ngã, hỏng xe), em nên?', ['Đứng vào lề an toàn và gọi người lớn', 'Đứng giữa đường', 'Bỏ xe chạy', 'Khóc to'], 0, 'Đảm bảo an toàn rồi xử lý.'),
  ]),

  M(6, 'Tổ chức sinh nhật (1)', [
    Q('Tổ chức sinh nhật cần?', ['Lên kế hoạch: mời ai, làm gì, chuẩn bị gì', 'Không cần kế hoạch', 'Tự nhiên xảy ra', 'Bỏ mặc'], 0, 'Kế hoạch giúp tiệc thành công.'),
    Q('Khi mời bạn đến sinh nhật, em nên?', ['Mời sớm và lễ phép', 'Mời sát giờ', 'Quát mời', 'Mời bằng tin nhắn hỗn'], 0, 'Mời lịch sự và đúng thời gian.'),
    Q('Khi bạn tặng quà, em nên?', ['Nhận bằng hai tay và cảm ơn', 'Giật lấy', 'Chê quà', 'Mở quà ngay ra so sánh'], 0, 'Nhận quà lịch sự.'),
    Q('Khi đến dự sinh nhật bạn, em nên?', ['Đến đúng giờ, mang quà nhỏ (nếu có), chúc mừng bạn', 'Đến muộn', 'Không chúc gì', 'Phá đám tiệc'], 0, 'Lễ phép và đúng giờ.'),
    Q('Tiệc sinh nhật quan trọng nhất là?', ['Niềm vui, tình bạn, không phải quà đắt tiền', 'Quà đắt tiền', 'Tiệc xa hoa', 'Khoe khoang'], 0, 'Ý nghĩa hơn hình thức.'),
  ]),

  M(7, 'Tổ chức sinh nhật (2) — Làm thiệp tặng', [
    Q('Thiệp sinh nhật tự làm có ý nghĩa hơn vì?', ['Thể hiện tình cảm chân thành của em', 'Đắt tiền', 'Đẹp hơn thiệp mua', 'Lung linh'], 0, 'Tự làm thể hiện tâm huyết.'),
    Q('Trên thiệp em nên ghi?', ['Lời chúc tốt đẹp và tên người nhận, tên em', 'Lời nói xấu', 'Để trống', 'Vẽ bậy'], 0, 'Lời chúc chân thành.'),
    Q('Trang trí thiệp có thể bằng?', ['Vẽ, dán giấy, nơ, dán hình', 'Đinh sắt', 'Bùn đất', 'Vật sắc nhọn'], 0, 'Vật liệu an toàn.'),
    Q('Em làm thiệp tặng bạn vào dịp?', ['Sinh nhật, lễ Tết, ngày của Mẹ/Bố…', 'Khi giận bạn', 'Khi muốn trêu bạn', 'Không bao giờ'], 0, 'Nhiều dịp ý nghĩa.'),
    Q('Khi nhận thiệp từ bạn, em nên?', ['Cảm ơn và giữ gìn', 'Vứt đi', 'Chê', 'Xé bỏ'], 0, 'Trân trọng tình cảm của bạn.'),
  ]),

  M(8, 'Ngày của Bố — Ngày của Mẹ', [
    Q('Ngày của Mẹ ở nhiều nước (Mother\'s Day) là?', ['Chủ nhật thứ hai của tháng 5', 'Tháng 1', 'Tháng 12', 'Không có ngày'], 0, 'Ngày của Mẹ thường vào tháng 5.'),
    Q('Em có thể tặng mẹ gì nhân ngày này?', ['Hoa, thiệp tự làm, lời chúc, giúp việc nhà', 'Không tặng gì', 'Cãi mẹ', 'Đòi quà'], 0, 'Quà nhỏ tâm huyết.'),
    Q('Ngày của Bố ở nhiều nước (Father\'s Day) là?', ['Chủ nhật thứ ba của tháng 6', 'Tháng 1', 'Tháng 12', 'Không có'], 0, 'Ngày của Bố thường vào tháng 6.'),
    Q('Bố mẹ vất vả vì?', ['Vì yêu thương và lo cho con cái', 'Vì sở thích', 'Vì bị bắt', 'Vì không có việc khác'], 0, 'Bố mẹ vất vả vì con.'),
    Q('Em thể hiện lòng biết ơn bố mẹ bằng?', ['Vâng lời, học giỏi, giúp đỡ', 'Cãi lại', 'Đòi quà', 'Bỏ nhà'], 0, 'Hành động cụ thể thể hiện lòng biết ơn.'),
  ]),

  M(9, 'Em làm việc nhà', [
    Q('Việc nhà phù hợp với lớp 3 là?', ['Quét nhà, lau bàn, gấp quần áo, rửa chén nhỏ', 'Nấu cơm lớn', 'Vận hành máy giặt phức tạp', 'Sửa điện'], 0, 'Việc nhẹ vừa sức.'),
    Q('Khi giúp việc nhà, em nên?', ['Vui vẻ, không miễn cưỡng', 'Cau có', 'Đòi tiền', 'Trốn việc'], 0, 'Tinh thần tích cực.'),
    Q('Mẹ nấu cơm, em có thể giúp?', ['Rửa rau, nhặt rau, dọn bàn', 'Bật bếp gas một mình', 'Cầm dao thái thịt', 'Đứng nhìn'], 0, 'Việc an toàn cho lớp 3.'),
    Q('Giúp việc nhà giúp em?', ['Tự lập và yêu thương gia đình hơn', 'Yếu đi', 'Không có lợi', 'Mất thời gian'], 0, 'Trưởng thành và gắn kết gia đình.'),
    Q('Khi bạn không giúp việc nhà, em nên?', ['Làm gương và rủ bạn cùng làm', 'Cãi nhau với bạn', 'Mách cô', 'Tẩy chay bạn'], 0, 'Khuyên bạn nhẹ nhàng.'),
  ]),

  M(10, 'Tham gia hoạt động Đội Thiếu niên Tiền phong Hồ Chí Minh', [
    Q('Đội Thiếu niên Tiền phong Hồ Chí Minh là?', ['Tổ chức của thiếu niên Việt Nam từ 9–15 tuổi', 'Của người lớn', 'Của trẻ sơ sinh', 'Của nước ngoài'], 0, 'Đội TNTP Hồ Chí Minh dành cho thiếu niên.'),
    Q('Khăn quàng đỏ của đội viên có ý nghĩa?', ['Là một phần của Quốc kì, tượng trưng máu đào của các anh hùng', 'Trang trí', 'Để chùi tay', 'Không có ý nghĩa'], 0, 'Khăn quàng đỏ thiêng liêng.'),
    Q('Khi đeo khăn quàng, em nên?', ['Đeo đúng cách, giữ sạch sẽ', 'Cuộn lại nhét túi', 'Vẽ bậy lên', 'Quên đeo'], 0, 'Tôn trọng khăn quàng.'),
    Q('Ngày thành lập Đội là?', ['15/5/1941', '2/9/1945', '20/11', '1/6'], 0, '15/5 là ngày thành lập Đội.'),
    Q('Phong trào của Đội như "Kế hoạch nhỏ" giúp em?', ['Tham gia hoạt động xã hội ý nghĩa', 'Mất thời gian', 'Không có ích', 'Cô đơn'], 0, 'Phong trào Đội bổ ích.'),
  ]),

  M(11, 'Em yêu lao động', [
    Q('Lao động giúp em?', ['Khoẻ mạnh, tự lập, biết quý công sức', 'Yếu đi', 'Lười hơn', 'Không có lợi'], 0, 'Lao động đem lại nhiều giá trị.'),
    Q('Lao động ở trường có thể là?', ['Trực nhật, lau bảng, tưới cây, dọn lớp', 'Đánh nhau', 'Phá đồ', 'Vẽ bậy'], 0, 'Lao động tập thể ở trường.'),
    Q('Khi trực nhật, em nên?', ['Làm cẩn thận, đầy đủ', 'Làm qua loa', 'Trốn việc', 'Đùn cho bạn'], 0, 'Trách nhiệm với việc được giao.'),
    Q('Bạn không làm trực nhật, em nên?', ['Khuyên bạn cùng làm', 'Mách cô luôn', 'Đánh bạn', 'Bỏ cuộc'], 0, 'Khuyên trước, mách sau nếu cần.'),
    Q('Sau khi lao động em nên?', ['Rửa tay sạch sẽ', 'Để bẩn', 'Lau vào quần áo', 'Vứt giẻ bừa'], 0, 'Vệ sinh sau lao động.'),
  ]),

  M(12, 'Em tham gia hoạt động cộng đồng', [
    Q('Hoạt động cộng đồng là?', ['Hoạt động chung của nhiều người trong khu phố/làng', 'Hoạt động một mình', 'Hoạt động cấm', 'Không có'], 0, 'Cộng đồng là chung.'),
    Q('Em có thể tham gia?', ['Trồng cây khu phố, dọn rác, ủng hộ người khó khăn', 'Phá phách', 'Vẽ bậy lên tường', 'Trốn việc'], 0, 'Việc làm tích cực cho cộng đồng.'),
    Q('Khi tham gia hoạt động, em nên?', ['Tích cực, hợp tác và lễ phép', 'Lười biếng', 'Cãi vã', 'Phá hoại'], 0, 'Thái độ tích cực là quan trọng.'),
    Q('Tham gia hoạt động cộng đồng giúp em?', ['Yêu nơi mình sống và biết chia sẻ', 'Cô đơn', 'Mất thời gian', 'Không có lợi'], 0, 'Phát triển tình cảm xã hội.'),
    Q('Ngày Môi trường thế giới là?', ['5/6', '8/3', '20/11', '2/9'], 0, '5/6 là ngày Môi trường thế giới.'),
  ]),

  M(13, 'Ứng phó thiên tai cơ bản (1) — Bão lũ', [
    Q('Khi nghe tin có bão, em nên?', ['Nghe theo hướng dẫn của bố mẹ và chính quyền', 'Ra ngoài chơi', 'Trèo lên mái nhà', 'Bơi ra biển'], 0, 'Tuân theo hướng dẫn để an toàn.'),
    Q('Trong bão, em nên?', ['Ở trong nhà, tránh cửa sổ', 'Đứng dưới cây to', 'Ra ngoài đi dạo', 'Tắm mưa'], 0, 'Ở nơi an toàn trong nhà.'),
    Q('Lũ ập đến, em nên?', ['Lên cao và gọi người lớn', 'Lội xuống nước', 'Lấy đồ chơi trước', 'Ngủ'], 0, 'Lên cao tránh nước.'),
    Q('Đồ dùng cần chuẩn bị khi có bão lũ?', ['Đèn pin, nước uống, lương thực khô, áo mưa', 'Đồ chơi', 'TV', 'Vàng bạc'], 0, 'Đồ thiết yếu cho an toàn.'),
    Q('Sau bão lũ, em nên?', ['Không tự ý chơi gần dây điện rơi, nước đọng', 'Nghịch nước', 'Sờ dây điện', 'Bơi trong nước lũ'], 0, 'Nguy hiểm rình rập sau bão lũ.'),
  ]),

  M(14, 'Ứng phó thiên tai cơ bản (2) — Cháy nổ', [
    Q('Khi có cháy ở nhà, em nên?', ['Chạy ra ngoài, gọi 114 báo cứu hoả', 'Lấy đồ trước', 'Trốn vào tủ', 'Ngủ tiếp'], 0, 'Thoát hiểm là ưu tiên đầu tiên.'),
    Q('Số điện thoại cứu hoả là?', ['114', '113', '115', '911'], 0, '114 ở Việt Nam là cứu hoả.'),
    Q('Khi có khói nhiều, em nên?', ['Cúi thấp người và bịt mũi miệng bằng khăn ướt', 'Đứng thẳng', 'Hít thật sâu', 'Chạy nhanh'], 0, 'Khói nóng bay lên cao, cúi thấp tránh khói.'),
    Q('Để phòng cháy, em không nên?', ['Chơi với diêm, lửa, bật lửa', 'Bật đèn', 'Mở tủ lạnh', 'Đánh răng'], 0, 'Chơi lửa rất nguy hiểm.'),
    Q('Khi quần áo bắt lửa, em nên?', ['Dừng – Nằm – Lăn (Stop, Drop, Roll)', 'Chạy nhanh hơn', 'Cởi áo trong không khí', 'Đứng yên khóc'], 0, 'Lăn dập lửa là kĩ thuật cứu mạng.'),
  ]),

  M(15, 'Dã ngoại (1) — Chuẩn bị', [
    Q('Trước khi đi dã ngoại, em nên?', ['Chuẩn bị: nước uống, đồ ăn nhẹ, mũ, kem chống nắng', 'Không cần chuẩn bị', 'Mang đồ chơi nặng', 'Mang đồ điện tử đắt tiền'], 0, 'Chuẩn bị giúp an toàn và thoải mái.'),
    Q('Em nên mang theo điều gì cho an toàn?', ['Thẻ thông tin liên hệ của bố mẹ', 'Đồ trang sức', 'Tiền nhiều', 'Vũ khí'], 0, 'Thẻ liên hệ phòng khi đi lạc.'),
    Q('Khi đi dã ngoại, em nên đi cùng?', ['Người lớn và đoàn có hướng dẫn', 'Một mình', 'Bạn cùng lứa không có người lớn', 'Người lạ'], 0, 'Phải có người lớn đi cùng.'),
    Q('Trang phục dã ngoại nên?', ['Gọn gàng, giày đi bộ, mũ', 'Váy dài lê thê', 'Giày cao gót', 'Dép tổ ong'], 0, 'Trang phục phù hợp hoạt động.'),
    Q('Vì sao cần báo bố mẹ điểm đến và thời gian về?', ['Để bố mẹ biết và liên hệ khi cần', 'Để bố mẹ lo', 'Không cần thiết', 'Để khoe'], 0, 'An toàn cho cả em và gia đình.'),
  ]),

  M(16, 'Dã ngoại (2) — Khi đến nơi', [
    Q('Khi dã ngoại, em không nên?', ['Tự ý xa nhóm và bỏ trốn', 'Đi cùng nhóm', 'Hỏi người lớn khi cần', 'Tuân thủ lịch trình'], 0, 'Xa nhóm rất nguy hiểm.'),
    Q('Rác sau khi ăn em nên?', ['Gom lại và mang về vứt vào thùng rác', 'Để tại chỗ', 'Chôn xuống đất', 'Đổ xuống suối'], 0, 'Bảo vệ môi trường thiên nhiên.'),
    Q('Khi gặp động vật hoang dã, em nên?', ['Đứng yên quan sát từ xa, không trêu chọc', 'Đuổi bắt', 'Đánh nó', 'Cho nó ăn lung tung'], 0, 'Tôn trọng động vật và an toàn.'),
    Q('Đi xa nhóm và bị lạc, em nên?', ['Đứng yên một chỗ và gọi to', 'Đi lung tung tìm', 'Khóc trốn vào bụi', 'Bỏ chạy'], 0, 'Đứng yên dễ được tìm thấy hơn.'),
    Q('Sau dã ngoại em nên?', ['Kể lại trải nghiệm và rút kinh nghiệm', 'Quên đi', 'Không kể ai', 'Phàn nàn'], 0, 'Chia sẻ trải nghiệm là tích cực.'),
  ]),

  M(17, 'Em tham gia phong trào "Kế hoạch nhỏ"', [
    Q('Phong trào "Kế hoạch nhỏ" là?', ['Phong trào thu gom giấy vụn, vỏ chai để gây quỹ', 'Mua đồ mới', 'Vứt đồ', 'Đập phá'], 0, 'Phong trào quen thuộc của Đội.'),
    Q('Tham gia "Kế hoạch nhỏ" em rèn?', ['Tiết kiệm, lao động, tinh thần đồng đội', 'Lười biếng', 'Cô đơn', 'Không có lợi'], 0, 'Giáo dục đa giá trị.'),
    Q('Quỹ thu được từ "Kế hoạch nhỏ" thường dùng?', ['Giúp bạn nghèo, các hoạt động Đội', 'Mua đồ chơi cho mình', 'Khoe khoang', 'Tiêu hoang'], 0, 'Mục đích cộng đồng.'),
    Q('Em có thể đóng góp bằng?', ['Giấy vụn, vỏ chai, lon nhôm sạch', 'Đồ ăn thừa', 'Rác bẩn', 'Đồ nguy hiểm'], 0, 'Đồ tái chế sạch.'),
    Q('Vì sao "Kế hoạch nhỏ" có ý nghĩa?', ['Vừa bảo vệ môi trường, vừa giúp bạn nghèo', 'Không có ý nghĩa', 'Mất thời gian', 'Vô bổ'], 0, 'Lợi ích kép.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Em đã tổ chức góc học tập như thế nào?', ['Gọn gàng, đủ sáng', 'Bừa bộn', 'Trên giường', 'Không có'], 0, 'Góc học tập đúng chuẩn.'),
    Q('Khi đi xe đạp em luôn?', ['Đội mũ bảo hiểm', 'Không đội', 'Buông tay', 'Đi giữa đường'], 0, 'An toàn là trên hết.'),
    Q('Số điện thoại cứu hoả là?', ['114', '113', '115', '911'], 0, '114 cứu hoả.'),
    Q('Việc nhà em thường làm?', ['Quét nhà, gấp quần áo, lau bàn', 'Sửa điện', 'Nấu cơm lớn', 'Không làm'], 0, 'Việc nhẹ vừa sức.'),
    Q('Đội TNTP HCM thành lập ngày?', ['15/5/1941', '2/9', '20/11', '1/6'], 0, '15/5 là ngày thành lập Đội.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Đón Tết cổ truyền', [
    Q('Tết cổ truyền của Việt Nam là?', ['Tết Nguyên Đán (Tết Âm lịch)', 'Tết Tây 1/1', 'Trung Thu', 'Quốc Khánh'], 0, 'Tết Nguyên Đán là Tết lớn nhất.'),
    Q('Tết em giúp gia đình?', ['Dọn nhà, gói bánh, trang trí nhà', 'Đi chơi cả ngày', 'Ngủ cả Tết', 'Cãi nhau'], 0, 'Giúp gia đình chuẩn bị Tết.'),
    Q('Khi chúc Tết, em nên?', ['Lễ phép, dùng lời chúc tốt đẹp', 'Cười cợt', 'Đòi lì xì', 'Không chúc'], 0, 'Văn hoá chúc Tết.'),
    Q('Tiền lì xì nên?', ['Tiết kiệm hoặc dùng đúng việc', 'Tiêu hết ngay', 'Khoe khoang', 'Đánh bạc'], 0, 'Dùng tiền có ích.'),
    Q('Trang phục Tết em nên?', ['Đẹp, gọn gàng, lịch sự', 'Bẩn thỉu', 'Quá hở', 'Quá luộm thuộm'], 0, 'Trang phục đẹp đón năm mới.'),
  ]),

  M(20, 'Tự giới thiệu và giao tiếp', [
    Q('Khi gặp người lạ (người lớn), em nên?', ['Lễ phép chào và giới thiệu tên', 'Im lặng', 'Quát to', 'Trốn'], 0, 'Giao tiếp lễ phép.'),
    Q('Khi nói chuyện với người lớn, em nên?', ['Nhìn vào mắt, nói rõ ràng và xưng "cháu"', 'Nhìn xuống đất', 'Cười cợt', 'Quay lưng'], 0, 'Giao tiếp tự tin và lễ phép.'),
    Q('Khi nghe người khác nói, em nên?', ['Lắng nghe, không cắt lời', 'Cắt lời', 'Quát to', 'Bỏ đi'], 0, 'Lắng nghe là kĩ năng quan trọng.'),
    Q('Khi không hiểu, em nên?', ['Lễ phép hỏi lại', 'Im lặng', 'Bịa đáp', 'Bỏ qua'], 0, 'Hỏi để hiểu là tốt.'),
    Q('Khi cần xin phép, em nên?', ['Lễ phép hỏi và đợi câu trả lời', 'Tự ý làm', 'Quát đòi', 'Khóc'], 0, 'Xin phép lịch sự.'),
  ]),

  M(21, 'Em tham gia ngày 8/3', [
    Q('Ngày 8/3 là?', ['Ngày Quốc tế Phụ nữ', 'Ngày Nhà giáo', 'Ngày Quốc khánh', 'Ngày sinh nhật em'], 0, '8/3 tôn vinh phụ nữ.'),
    Q('Em có thể làm gì cho mẹ, bà, cô ngày 8/3?', ['Tặng hoa, thiệp, lời chúc, giúp việc nhà', 'Quên đi', 'Không làm gì', 'Đòi quà'], 0, 'Thể hiện lòng biết ơn.'),
    Q('Lời chúc nào hay cho mẹ ngày 8/3?', ['"Chúc mẹ luôn vui khoẻ, hạnh phúc"', '"Mẹ cho con tiền"', '"Mẹ đi đâu thế"', 'Không chúc gì'], 0, 'Lời chúc chân thành.'),
    Q('Em yêu thương phụ nữ trong gia đình bằng?', ['Vâng lời, quan tâm, giúp đỡ', 'Đòi hỏi', 'Cãi vã', 'Hỗn láo'], 0, 'Hành động hàng ngày là quan trọng.'),
    Q('Phụ nữ Việt Nam có vai trò?', ['Quan trọng trong gia đình và xã hội', 'Không quan trọng', 'Chỉ ở nhà', 'Bị coi thường'], 0, 'Phụ nữ bình đẳng và quan trọng.'),
  ]),

  M(22, 'An toàn khi ở nhà một mình', [
    Q('Khi ở nhà một mình, em nên?', ['Khoá cửa, không mở cho người lạ', 'Mở cửa cho mọi người', 'Ra ngoài đi chơi', 'Bật bếp gas chơi'], 0, 'Khoá cửa là an toàn.'),
    Q('Có người lạ gõ cửa, em nên?', ['Không mở, gọi cho bố mẹ', 'Mở ngay', 'Cãi vã qua cửa', 'Mở cửa rồi trốn'], 0, 'An toàn là ưu tiên hàng đầu.'),
    Q('Em KHÔNG nên tự ý dùng?', ['Bếp gas, dao to, ổ điện', 'Đèn bàn', 'TV (xem phù hợp)', 'Đồ chơi'], 0, 'Đồ nguy hiểm cần người lớn.'),
    Q('Khi có sự cố ở nhà (cháy, lụt, người lạ), em nên?', ['Gọi bố mẹ và hàng xóm tin cậy', 'Im lặng', 'Tự xử lý liều', 'Trốn'], 0, 'Cầu cứu người lớn.'),
    Q('Số điện thoại cấp cứu (y tế) là?', ['115', '114', '113', '911'], 0, '115 là cấp cứu y tế ở Việt Nam.'),
  ]),

  M(23, 'Phòng tránh tai nạn thương tích', [
    Q('Khi đi cầu thang, em nên?', ['Bám tay vịn, đi từng bậc', 'Chạy nhảy', 'Trượt tay vịn', 'Nhảy 3 bậc'], 0, 'Cầu thang nguy hiểm nếu không cẩn thận.'),
    Q('Khi đường ướt, em nên?', ['Đi cẩn thận, chậm rãi', 'Chạy nhảy', 'Đi giày cao gót', 'Đùa giỡn'], 0, 'Tránh trượt ngã.'),
    Q('Vật sắc nhọn (dao, kéo) em?', ['Cầm cẩn thận, không vung vẩy', 'Đùa giỡn với nó', 'Chỉ vào người', 'Ném đi'], 0, 'Vật sắc rất nguy hiểm.'),
    Q('Khi bị thương nhỏ (xước), em nên?', ['Rửa sạch và báo người lớn', 'Để nguyên', 'Bôi đất', 'Bôi nước bẩn'], 0, 'Vệ sinh vết thương ngay.'),
    Q('Khi thấy bạn bị ngã đau, em nên?', ['Đỡ bạn dậy và báo người lớn', 'Cười nhạo', 'Bỏ đi', 'Bắt chước'], 0, 'Giúp đỡ bạn.'),
  ]),

  M(24, 'Em làm bạn với sách', [
    Q('Đọc sách giúp em?', ['Mở rộng hiểu biết, phát triển ngôn ngữ', 'Đau mắt', 'Mất thời gian', 'Yếu đi'], 0, 'Đọc sách rất bổ ích.'),
    Q('Em nên đọc sách?', ['Mỗi ngày một chút, theo lứa tuổi', 'Chỉ khi cô bắt', 'Không bao giờ', 'Chỉ đọc khi không có gì làm'], 0, 'Thói quen đọc đều đặn.'),
    Q('Tư thế đọc sách đúng?', ['Ngồi thẳng, sách cách mắt 30cm, đủ sáng', 'Nằm đọc', 'Đọc thiếu sáng', 'Đọc trên xe rung lắc'], 0, 'Bảo vệ mắt khi đọc.'),
    Q('Sách hay em nên?', ['Chia sẻ với bạn cùng đọc', 'Giấu kín', 'Vẽ bậy vào', 'Xé'], 0, 'Chia sẻ niềm vui đọc sách.'),
    Q('Thư viện trường là?', ['Nơi em mượn sách để đọc', 'Chỗ ngủ', 'Nơi chơi điện thoại', 'Sân bóng'], 0, 'Tận dụng thư viện.'),
  ]),

  M(25, 'Em tham gia ngày Sách Việt Nam', [
    Q('Ngày Sách Việt Nam là?', ['21/4 hằng năm', '1/1', '20/11', '2/9'], 0, '21/4 tôn vinh sách và văn hoá đọc.'),
    Q('Em có thể làm gì nhân ngày Sách?', ['Tham gia hội sách, đọc sách cùng bạn, giới thiệu sách hay', 'Đốt sách', 'Vứt sách', 'Không quan tâm'], 0, 'Lan toả văn hoá đọc.'),
    Q('Khi giới thiệu sách hay, em nên?', ['Nói tóm tắt nội dung và cảm nhận của em', 'Bịa nội dung', 'Chê sách', 'Khoe khoang'], 0, 'Chia sẻ chân thành.'),
    Q('Sách em nên đọc ở lớp 3?', ['Sách thiếu nhi: truyện cổ tích, khoa học, lịch sử…', 'Sách người lớn phức tạp', 'Sách bạo lực', 'Không cần đọc'], 0, 'Sách phù hợp lứa tuổi.'),
    Q('Văn hoá đọc giúp xã hội?', ['Phát triển, có nhiều người hiểu biết', 'Tụt hậu', 'Không liên quan', 'Lãng phí'], 0, 'Văn hoá đọc nuôi dưỡng trí tuệ.'),
  ]),

  M(26, 'Em yêu trường lớp', [
    Q('Em thể hiện yêu trường lớp bằng?', ['Giữ vệ sinh, tham gia hoạt động, bảo vệ tài sản', 'Vẽ bậy', 'Phá đồ', 'Trốn học'], 0, 'Hành động cụ thể yêu trường.'),
    Q('Thấy bạn vẽ bậy lên tường, em nên?', ['Khuyên bạn dừng lại', 'Vẽ cùng', 'Mặc kệ', 'Cười nhạo'], 0, 'Bảo vệ trường lớp.'),
    Q('Sân trường nên?', ['Sạch đẹp, có cây xanh', 'Bẩn thỉu', 'Có rác', 'Trống không'], 0, 'Sân trường xanh sạch.'),
    Q('Khi tan học, em nên?', ['Tự dọn chỗ ngồi, bỏ rác vào thùng', 'Để bừa', 'Đẩy bạn dọn', 'Chạy ngay ra'], 0, 'Trách nhiệm với chỗ ngồi.'),
    Q('Tham gia phong trào "Trường học xanh – sạch – đẹp" em nên?', ['Tích cực và thật lòng', 'Làm cho có', 'Trốn việc', 'Phá phách'], 0, 'Tham gia chân thành.'),
  ]),

  M(27, 'Tự đánh giá bản thân', [
    Q('Tự đánh giá bản thân là?', ['Xem mình đã làm tốt/chưa tốt việc gì', 'Khen mình mãi', 'Chê mình mãi', 'Không quan tâm'], 0, 'Tự đánh giá khách quan.'),
    Q('Khi tự đánh giá, em nên?', ['Trung thực, không tự dối lừa', 'Phóng đại', 'Hạ thấp', 'Bịa đặt'], 0, 'Trung thực với bản thân.'),
    Q('Phát hiện việc mình làm chưa tốt, em nên?', ['Cố gắng sửa và rút kinh nghiệm', 'Bỏ qua', 'Đổ lỗi', 'Buông xuôi'], 0, 'Cải thiện bản thân.'),
    Q('Phát hiện việc mình làm tốt, em nên?', ['Tự hào và tiếp tục phát huy', 'Khoe khoang', 'Quên đi', 'Hạ thấp'], 0, 'Khẳng định và phát huy điểm mạnh.'),
    Q('Tự đánh giá thường xuyên giúp em?', ['Trưởng thành và tiến bộ', 'Tự ti', 'Tự kiêu', 'Không có lợi'], 0, 'Tự nhận thức là chìa khoá trưởng thành.'),
  ]),

  M(28, 'Em tham gia ngày 30/4 – 1/5', [
    Q('Ngày 30/4 là?', ['Ngày Giải phóng miền Nam, thống nhất đất nước', 'Ngày 1/1', 'Ngày 8/3', 'Ngày 20/11'], 0, '30/4/1975 đất nước thống nhất.'),
    Q('Ngày 1/5 là?', ['Ngày Quốc tế Lao động', 'Ngày Nhà giáo', 'Ngày Quốc khánh', 'Ngày sinh nhật'], 0, '1/5 tôn vinh người lao động.'),
    Q('Trong dịp lễ này, nhà nhà thường?', ['Treo cờ Tổ quốc', 'Đóng kín cửa', 'Cãi nhau', 'Đập phá'], 0, 'Treo cờ thể hiện tình yêu nước.'),
    Q('Em có thể làm gì dịp lễ?', ['Tham gia hoạt động cộng đồng, tìm hiểu lịch sử', 'Không làm gì', 'Phá phách', 'Cãi nhau'], 0, 'Tận dụng ngày lễ ý nghĩa.'),
    Q('Lòng biết ơn với người có công, em thể hiện?', ['Học tốt, sống có ích', 'Quên đi', 'Coi thường', 'Chê bai'], 0, 'Hành động cụ thể.'),
  ]),

  M(29, 'Đoàn kết xây dựng tập thể', [
    Q('Lớp đoàn kết là?', ['Mọi bạn yêu thương, giúp đỡ nhau', 'Chia phe', 'Cãi nhau', 'Tẩy chay bạn'], 0, 'Đoàn kết là sức mạnh tập thể.'),
    Q('Bạn mới chuyển đến em nên?', ['Đón tiếp và giúp bạn hoà nhập', 'Tẩy chay', 'Trêu chọc', 'Mặc kệ'], 0, 'Đón bạn mới là biểu hiện đoàn kết.'),
    Q('Khi có mâu thuẫn với bạn, em nên?', ['Bình tĩnh nói chuyện, không bạo lực', 'Đánh nhau', 'Im lặng giận', 'Mách cô luôn'], 0, 'Giải quyết bằng đối thoại.'),
    Q('Trong hoạt động nhóm, em nên?', ['Lắng nghe và đóng góp ý kiến', 'Áp đặt ý mình', 'Im lặng', 'Phá nhóm'], 0, 'Hợp tác và tôn trọng.'),
    Q('Tập thể đoàn kết sẽ?', ['Đạt nhiều thành tích, mọi người vui vẻ', 'Yếu đi', 'Tan rã', 'Buồn bã'], 0, 'Đoàn kết mạnh hơn.'),
  ]),

  M(30, 'Em yêu thiên nhiên', [
    Q('Yêu thiên nhiên em nên?', ['Bảo vệ cây cối, động vật, không xả rác', 'Bẻ cành', 'Bắt động vật', 'Vẽ bậy lên cây'], 0, 'Hành động bảo vệ cụ thể.'),
    Q('Thấy bạn bắt chim non, em nên?', ['Khuyên bạn thả chim', 'Bắt cùng', 'Mặc kệ', 'Cười cổ vũ'], 0, 'Bảo vệ động vật.'),
    Q('Em có thể trồng?', ['Cây xanh, hoa, rau trong chậu', 'Cây cấm', 'Không trồng được gì', 'Chỉ trồng to'], 0, 'Mọi người đều có thể trồng cây.'),
    Q('Đi dã ngoại em nên?', ['Mang rác về vứt đúng thùng', 'Để rác tại chỗ', 'Đốt rác', 'Đổ xuống suối'], 0, 'Bảo vệ thiên nhiên sạch đẹp.'),
    Q('Tham gia ngày Trái Đất (22/4) em có thể?', ['Trồng cây, dọn rác, tiết kiệm điện nước', 'Phá rừng', 'Đốt rác', 'Không làm gì'], 0, 'Hành động vì Trái Đất.'),
  ]),

  M(31, 'Em chuẩn bị cho hè', [
    Q('Cuối năm học, em nên?', ['Tổng kết bài học và sắp xếp sách vở gọn gàng', 'Vứt sách', 'Xé sách', 'Quên hết'], 0, 'Tổng kết tốt cho năm sau.'),
    Q('Mùa hè em sẽ?', ['Nghỉ ngơi, học thêm, đi du lịch, giúp gia đình', 'Chơi game cả ngày', 'Ngủ cả ngày', 'Cãi vã'], 0, 'Hè là thời gian phát triển toàn diện.'),
    Q('Đọc sách trong hè giúp em?', ['Tiếp tục học và mở mang kiến thức', 'Lười đi', 'Đau mắt', 'Không có lợi'], 0, 'Hè không nên ngừng đọc.'),
    Q('Khi đi chơi hè em nên?', ['Báo bố mẹ điểm đến và giờ về', 'Tự ý đi', 'Trốn nhà', 'Bỏ ăn'], 0, 'An toàn là trên hết.'),
    Q('Hè em có thể giúp gia đình?', ['Việc nhà phù hợp lứa tuổi', 'Không làm gì', 'Cãi nhau', 'Đòi hỏi'], 0, 'Giúp đỡ gia đình là tốt.'),
  ]),

  M(32, 'Tham gia ngày Quốc tế Thiếu nhi 1/6', [
    Q('Ngày 1/6 là?', ['Ngày Quốc tế Thiếu nhi', 'Ngày Nhà giáo', 'Ngày Quốc khánh', 'Ngày Phụ nữ'], 0, '1/6 dành cho thiếu nhi.'),
    Q('Dịp 1/6 trẻ em được?', ['Quan tâm, tặng quà, vui chơi', 'Bị phạt', 'Cấm chơi', 'Không có gì đặc biệt'], 0, 'Ngày của trẻ em.'),
    Q('Em có thể tham gia?', ['Văn nghệ, trò chơi, đọc sách, dã ngoại', 'Đánh nhau', 'Phá đồ', 'Trốn'], 0, 'Hoạt động lành mạnh.'),
    Q('Trẻ em có quyền gì?', ['Học tập, vui chơi, được bảo vệ và yêu thương', 'Bị bóc lột', 'Bị bỏ rơi', 'Không có quyền'], 0, 'Quyền trẻ em là cơ bản.'),
    Q('Em biết ơn người lớn vì?', ['Đã chăm sóc, dạy dỗ, bảo vệ em', 'Không có gì', 'Bị bắt biết ơn', 'Không quan tâm'], 0, 'Biết ơn là phẩm chất tốt.'),
  ]),

  M(33, 'Tổng kết hoạt động năm học', [
    Q('Trong năm em đã tham gia hoạt động?', ['Nhiều: lao động, văn nghệ, dã ngoại, phong trào…', 'Không tham gia gì', 'Một hoạt động', 'Không nhớ'], 0, 'Đa dạng hoạt động trải nghiệm.'),
    Q('Hoạt động em yêu thích nhất là?', ['Có thể là một hoạt động ý nghĩa em nhớ', 'Không có gì', 'Hoạt động phá hoại', 'Không quan tâm'], 0, 'Mỗi em có hoạt động riêng yêu thích.'),
    Q('Bạn nào em quý mến nhất, em có thể?', ['Viết thư, làm thiệp tặng bạn', 'Quên bạn', 'Cãi nhau', 'Tẩy chay'], 0, 'Gìn giữ tình bạn.'),
    Q('Cô giáo, em nên?', ['Cảm ơn và chúc cô mạnh khoẻ', 'Quên cô', 'Hỗn láo', 'Không chào'], 0, 'Biết ơn thầy cô.'),
    Q('Em rút ra bài học gì từ năm học?', ['Sự cố gắng, đoàn kết và tình yêu thương', 'Không có bài học', 'Học để chấm dứt', 'Bỏ học'], 0, 'Bài học từ trải nghiệm.'),
  ]),

  M(34, 'Lễ tổng kết và chia tay', [
    Q('Lễ tổng kết là?', ['Buổi lễ kết thúc năm học, tôn vinh các bạn xuất sắc', 'Buổi cãi nhau', 'Buổi phá phách', 'Không có'], 0, 'Lễ tổng kết trang trọng.'),
    Q('Trong lễ tổng kết em nên?', ['Trang phục đẹp, đúng giờ, nghiêm túc', 'Đến muộn', 'Quần áo lôi thôi', 'Phá đám'], 0, 'Tôn trọng buổi lễ.'),
    Q('Khi được khen thưởng, em nên?', ['Lễ phép nhận và cảm ơn', 'Khoe khoang', 'Cười cợt', 'Bỏ đi'], 0, 'Khiêm tốn khi được khen.'),
    Q('Khi bạn được khen, em nên?', ['Chúc mừng và học hỏi', 'Ghen tị', 'Nói xấu', 'Khinh thường'], 0, 'Tinh thần đẹp.'),
    Q('Cuối lễ, em chia tay bạn bè thầy cô bằng?', ['Lời chúc và cái ôm thân tình', 'Cãi nhau', 'Lờ đi', 'Khóc nhè'], 0, 'Chia tay ấm áp.'),
  ]),

  M(35, 'Sẵn sàng lên Lớp 4', [
    Q('Lên lớp 4 em cần?', ['Học tập cố gắng hơn, tự lập hơn', 'Lười hơn', 'Quên kiến thức cũ', 'Bỏ học'], 0, 'Lớp 4 yêu cầu cao hơn.'),
    Q('Trong hè để chuẩn bị lên lớp 4, em nên?', ['Đọc sách, ôn bài nhẹ, rèn kĩ năng', 'Chơi game cả ngày', 'Ngủ', 'Không làm gì'], 0, 'Duy trì thói quen học.'),
    Q('Khi gặp bạn cũ lớp 3 ở lớp 4, em nên?', ['Vẫn giữ tình bạn và đoàn kết với bạn mới', 'Quên bạn cũ', 'Chỉ chơi bạn cũ', 'Tẩy chay bạn mới'], 0, 'Cởi mở với mọi người.'),
    Q('Mục tiêu của em lên lớp 4 là?', ['Học tập tốt và rèn phẩm chất', 'Đứng nhất bằng mọi giá', 'Không có mục tiêu', 'Chơi cả năm'], 0, 'Mục tiêu lành mạnh.'),
    Q('Em cảm ơn ai đã giúp em hoàn thành Lớp 3?', ['Bố mẹ, thầy cô, bạn bè', 'Không ai cả', 'Một mình em', 'Quên hết'], 0, 'Biết ơn những người đồng hành.'),
  ], { difficulty: 2 }),
];

export const P3HDTN_SCENARIOS = indexBy(P3HDTN_WEEKS);
