// ============================================================
// Lớp 11 · GIÁO DỤC QUỐC PHÒNG VÀ AN NINH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018, bộ Kết nối tri thức.
// ID prefix: "H11GDQP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11GDQP', 'gdqp', n, title, qs, opts);

export const H11GDQP_WEEKS = [
  // ──────────────── HK1 — Lý thuyết ────────────────
  M(1, 'Bài 1 — Bảo vệ chủ quyền lãnh thổ, biên giới quốc gia (phần 1)', [
    Q('Lãnh thổ quốc gia gồm các bộ phận?', ['Vùng đất, vùng nước, vùng trời và lòng đất thuộc chủ quyền của quốc gia', 'Chỉ vùng đất', 'Chỉ vùng biển', 'Chỉ vùng trời'], 0, '4 bộ phận lãnh thổ.'),
    Q('Biên giới quốc gia là?', ['Đường và mặt thẳng đứng xác định giới hạn lãnh thổ quốc gia', 'Một con sông', 'Một dãy núi bất kỳ', 'Không có khái niệm'], 0, 'Định nghĩa biên giới.'),
    Q('Chủ quyền quốc gia là?', ['Quyền tối cao của quốc gia đối với lãnh thổ và dân cư của mình', 'Quyền của một địa phương', 'Quyền cá nhân', 'Quyền của tổ chức xã hội'], 0, 'Chủ quyền.'),
    Q('Việt Nam có chung biên giới đất liền với các quốc gia nào?', ['Trung Quốc, Lào, Campuchia', 'Thái Lan, Myanmar', 'Indonesia, Philippines', 'Nhật Bản, Hàn Quốc'], 0, 'Biên giới đất liền VN.'),
    Q('Đường cơ sở dùng để xác định?', ['Các vùng biển thuộc chủ quyền và quyền chủ quyền quốc gia', 'Đường giao thông', 'Đường sắt', 'Đường bay'], 0, 'Đường cơ sở.'),
    Q('Bảo vệ chủ quyền lãnh thổ là trách nhiệm của?', ['Toàn Đảng, toàn dân, toàn quân', 'Chỉ quân đội', 'Chỉ Bộ đội Biên phòng', 'Chỉ công an'], 0, 'Trách nhiệm toàn dân.'),
  ]),

  M(2, 'Bài 1 — Bảo vệ chủ quyền lãnh thổ, biên giới quốc gia (phần 2)', [
    Q('Việt Nam có chủ quyền không thể tranh cãi với hai quần đảo?', ['Hoàng Sa và Trường Sa', 'Bạch Long Vĩ và Cô Tô', 'Phú Quốc và Côn Đảo', 'Cát Bà và Lý Sơn'], 0, 'Hai quần đảo của VN.'),
    Q('Vùng đặc quyền kinh tế (EEZ) của Việt Nam rộng?', ['200 hải lý tính từ đường cơ sở', '12 hải lý', '24 hải lý', '500 hải lý'], 0, 'EEZ 200 hải lý.'),
    Q('Lãnh hải Việt Nam rộng?', ['12 hải lý tính từ đường cơ sở', '200 hải lý', '24 hải lý', '50 hải lý'], 0, 'Lãnh hải 12 hải lý.'),
    Q('Trong vùng đặc quyền kinh tế, Việt Nam có quyền?', ['Chủ quyền về thăm dò, khai thác, bảo tồn và quản lý tài nguyên', 'Quyền tuyệt đối như lãnh thổ đất liền', 'Không có quyền nào', 'Chỉ quyền đi lại'], 0, 'Quyền chủ quyền EEZ.'),
    Q('Cơ quan trực tiếp quản lý biên giới đất liền của Việt Nam là?', ['Bộ đội Biên phòng', 'Cảnh sát giao thông', 'Hải quan', 'Kiểm lâm'], 0, 'BĐBP.'),
    Q('Học sinh có thể góp phần bảo vệ chủ quyền bằng cách?', ['Học tập, tìm hiểu pháp luật, không phát tán thông tin sai lệch về biên giới, biển đảo', 'Phát tán tin giả về biển đảo', 'Tự ý vượt biên', 'Im lặng trước sai trái'], 0, 'Trách nhiệm HS.'),
  ]),

  M(3, 'Bài 2 — Luật Nghĩa vụ quân sự và trách nhiệm của học sinh (phần 1)', [
    Q('Luật Nghĩa vụ quân sự (NVQS) quy định?', ['Nghĩa vụ và quyền của công dân về phục vụ trong Quân đội nhân dân Việt Nam', 'Quyền đi du lịch', 'Quyền sở hữu nhà', 'Nghĩa vụ đóng thuế'], 0, 'Luật NVQS.'),
    Q('Nghĩa vụ quân sự là?', ['Nghĩa vụ vẻ vang của công dân phục vụ trong Quân đội nhân dân Việt Nam', 'Một loại lao động trả lương cao', 'Quyền lựa chọn tuyệt đối', 'Nghĩa vụ chỉ của nam giới'], 0, 'Nghĩa vụ vẻ vang.'),
    Q('Đối tượng đăng ký nghĩa vụ quân sự?', ['Công dân nam đủ 17 tuổi trở lên; công dân nữ trong độ tuổi nếu có ngành nghề chuyên môn phù hợp', 'Chỉ trẻ em', 'Chỉ người cao tuổi', 'Mọi công dân không phân biệt tuổi'], 0, 'Đăng ký NVQS.'),
    Q('Độ tuổi gọi nhập ngũ trong thời bình?', ['Đủ 18 đến hết 25 tuổi (đến 27 với người được đào tạo cao đẳng, đại học tạm hoãn)', '14 đến 18', '30 đến 40', '50 đến 60'], 0, 'Tuổi nhập ngũ.'),
    Q('Thời hạn phục vụ tại ngũ trong thời bình của hạ sĩ quan, binh sĩ?', ['24 tháng', '6 tháng', '60 tháng', '3 tháng'], 0, '24 tháng.'),
    Q('Trốn tránh nghĩa vụ quân sự sẽ?', ['Bị xử lý theo pháp luật (xử phạt hành chính hoặc hình sự)', 'Được khen thưởng', 'Không bị xử lý', 'Được thưởng tiền'], 0, 'Chế tài.'),
  ]),

  M(4, 'Bài 2 — Luật Nghĩa vụ quân sự và trách nhiệm của học sinh (phần 2)', [
    Q('Học sinh có trách nhiệm gì với Luật NVQS?', ['Tìm hiểu, chấp hành nghiêm túc, sẵn sàng đăng ký và nhập ngũ khi đến tuổi', 'Bỏ qua', 'Trốn tránh', 'Phản đối'], 0, 'Trách nhiệm HS.'),
    Q('Khi học sinh nam đủ 17 tuổi cần?', ['Đăng ký nghĩa vụ quân sự lần đầu theo thông báo của cơ quan quân sự địa phương', 'Bỏ qua không cần khai báo', 'Tự ý rời nơi cư trú', 'Không cần làm gì'], 0, 'Đăng ký lần đầu.'),
    Q('Đối tượng được tạm hoãn gọi nhập ngũ trong thời bình bao gồm?', ['Học sinh, sinh viên đang học tập ở các cơ sở giáo dục theo quy định', 'Mọi công dân', 'Người trốn nghĩa vụ', 'Người vi phạm pháp luật'], 0, 'Tạm hoãn.'),
    Q('Hành vi nào sau đây vi phạm Luật NVQS?', ['Trốn tránh đăng ký, giả mạo giấy tờ để không phải nhập ngũ', 'Đăng ký đầy đủ', 'Tham gia khám tuyển', 'Nhập ngũ đúng hạn'], 0, 'Vi phạm.'),
    Q('Người hoàn thành NVQS được hưởng?', ['Các chế độ, chính sách theo quy định (việc làm, học tập, hỗ trợ xã hội)', 'Không có quyền lợi gì', 'Bị phạt tiền', 'Phải tự lo hoàn toàn'], 0, 'Chính sách.'),
    Q('Để chuẩn bị tốt cho NVQS, học sinh cần?', ['Rèn luyện sức khoẻ, học tập tốt, tu dưỡng đạo đức, tìm hiểu pháp luật', 'Bỏ học', 'Lười rèn luyện', 'Hút thuốc, uống rượu'], 0, 'Chuẩn bị NVQS.'),
  ]),

  M(5, 'Bài 3 — Phòng chống tệ nạn xã hội (phần 1)', [
    Q('Tệ nạn xã hội là?', ['Hiện tượng xã hội tiêu cực, vi phạm chuẩn mực đạo đức, pháp luật, gây hại cho xã hội', 'Phong trào tích cực', 'Lễ hội văn hoá', 'Hoạt động kinh tế'], 0, 'TNXH.'),
    Q('Một số tệ nạn xã hội phổ biến thời kỳ hội nhập?', ['Ma tuý, mại dâm, cờ bạc, mê tín dị đoan, tội phạm công nghệ cao', 'Học tập tốt', 'Tập thể thao', 'Làm việc thiện'], 0, 'Các loại TNXH.'),
    Q('Tác hại của ma tuý đối với người sử dụng?', ['Suy giảm sức khoẻ, mất kiểm soát hành vi, lệ thuộc, dễ phạm tội', 'Tăng cường sức khoẻ', 'Cải thiện trí nhớ', 'Không có tác hại'], 0, 'Tác hại ma tuý.'),
    Q('Cờ bạc gây ra hậu quả?', ['Mất tài sản, gia đình tan vỡ, dễ phạm tội để có tiền chơi', 'Tăng thu nhập ổn định', 'Cải thiện sức khoẻ', 'Không gây hậu quả'], 0, 'Tác hại cờ bạc.'),
    Q('Khi phát hiện bạn bè có dấu hiệu sa vào TNXH, học sinh nên?', ['Khuyên ngăn, báo cho thầy cô, gia đình, cơ quan chức năng', 'Tham gia cùng', 'Im lặng', 'Cô lập bạn vĩnh viễn'], 0, 'Trách nhiệm.'),
    Q('Mê tín dị đoan khác tín ngưỡng chân chính ở chỗ?', ['Mê tín không có cơ sở khoa học, gây hại; tín ngưỡng văn hoá lành mạnh được pháp luật tôn trọng', 'Giống hệt nhau', 'Mê tín tốt hơn', 'Tín ngưỡng vi phạm pháp luật'], 0, 'Phân biệt.'),
  ]),

  M(6, 'Bài 3 — Phòng chống tệ nạn xã hội (phần 2)', [
    Q('Tệ nạn xã hội mới trong thời kỳ hội nhập, đặc biệt với học sinh?', ['Nghiện game online, nghiện mạng xã hội, lừa đảo trên không gian mạng', 'Tập đọc sách', 'Học ngoại ngữ', 'Đi tình nguyện'], 0, 'TNXH mới.'),
    Q('Nguyên nhân chính khiến học sinh dễ sa vào TNXH?', ['Thiếu hiểu biết, bạn bè rủ rê, gia đình thiếu quan tâm, thử cho biết', 'Học giỏi quá', 'Được giáo dục đầy đủ', 'Có lối sống lành mạnh'], 0, 'Nguyên nhân.'),
    Q('Để phòng chống TNXH, học sinh cần?', ['Sống lành mạnh, không tò mò thử, kiên quyết từ chối, có người bạn tốt', 'Tò mò thử cho biết', 'Theo bạn bè xấu', 'Im lặng khi bị rủ rê'], 0, 'Phòng tránh.'),
    Q('Pháp luật Việt Nam quy định hành vi sử dụng trái phép ma tuý?', ['Là hành vi vi phạm pháp luật, bị xử lý hành chính hoặc hình sự tuỳ mức độ', 'Là quyền tự do cá nhân', 'Không bị xử lý', 'Được khuyến khích'], 0, 'PL ma tuý.'),
    Q('Khi bị dụ dỗ sử dụng chất kích thích, học sinh nên?', ['Kiên quyết từ chối, báo cho người lớn tin cậy', 'Thử cho biết', 'Im lặng', 'Đi cùng bạn xấu'], 0, 'Ứng phó.'),
    Q('Vai trò của gia đình trong phòng chống TNXH cho con em?', ['Quan tâm, lắng nghe, giáo dục, làm gương; phối hợp với nhà trường', 'Mặc kệ', 'Cấm đoán cực đoan không giải thích', 'Đẩy hết cho nhà trường'], 0, 'Vai trò gia đình.'),
  ]),

  M(7, 'Bài 3 — Phòng chống tệ nạn xã hội (phần 3 - kỹ năng)', [
    Q('Khi nhận được lời mời tham gia cá độ trực tuyến, em sẽ?', ['Từ chối thẳng, chặn liên lạc, báo gia đình/thầy cô nếu cần', 'Tham gia thử', 'Rủ thêm bạn', 'Lừa người khác mất tiền'], 0, 'Kỹ năng từ chối.'),
    Q('Dấu hiệu nhận biết người nghiện ma tuý?', ['Thay đổi tính tình, mệt mỏi, lén lút, sa sút học tập, có dụng cụ lạ', 'Học tập tiến bộ', 'Vui vẻ hoà đồng', 'Khoẻ mạnh tăng cân đều'], 0, 'Dấu hiệu nghiện.'),
    Q('Cờ bạc online trá hình dưới dạng "game" có đặc điểm?', ['Có yếu tố may rủi đổi tiền/quà có giá trị, mua bán tài khoản, đặt cược', 'Game học tập miễn phí', 'Trò chơi giáo dục', 'Sách điện tử'], 0, 'Dấu hiệu cờ bạc online.'),
    Q('Hậu quả của nghiện game đối với học sinh?', ['Giảm sức khoẻ, sa sút học tập, thu mình, dễ mâu thuẫn gia đình', 'Học tốt hơn', 'Tăng cường thể chất', 'Cải thiện quan hệ'], 0, 'Tác hại nghiện game.'),
    Q('Để giúp một bạn đang sa vào TNXH, cách nào hiệu quả nhất?', ['Tâm sự, rủ tham gia hoạt động lành mạnh, báo cho người lớn tin cậy nếu cần', 'Cô lập bạn', 'Bêu xấu', 'Mặc kệ'], 0, 'Giúp bạn.'),
    Q('Tổng đài quốc gia bảo vệ trẻ em (Việt Nam) là?', ['111', '113', '114', '115'], 0, 'Tổng đài 111.'),
  ]),

  M(8, 'Bài 4 — Một số vấn đề về vi phạm pháp luật bảo vệ môi trường (phần 1)', [
    Q('Bảo vệ môi trường là?', ['Trách nhiệm của toàn xã hội nhằm giữ cho môi trường sống trong lành, bền vững', 'Trách nhiệm của một số người', 'Việc của riêng nhà nước', 'Không cần thiết'], 0, 'BVMT.'),
    Q('Hành vi nào sau đây vi phạm pháp luật về bảo vệ môi trường?', ['Đổ chất thải nguy hại bừa bãi, đốt rừng, xả thải chưa xử lý', 'Phân loại rác', 'Trồng cây', 'Tiết kiệm nước'], 0, 'Hành vi VPPL.'),
    Q('Ô nhiễm môi trường là?', ['Sự biến đổi tính chất môi trường vượt quy chuẩn, gây ảnh hưởng xấu cho sức khoẻ và sinh vật', 'Việc tốt cho con người', 'Hoạt động cải tạo môi trường', 'Bảo vệ thiên nhiên'], 0, 'ÔNMT.'),
    Q('Ô nhiễm nguồn nước thường do?', ['Nước thải sinh hoạt, công nghiệp, nông nghiệp chưa xử lý xả thẳng ra môi trường', 'Trồng rừng đầu nguồn', 'Bảo vệ hồ', 'Lọc nước trước khi xả'], 0, 'Ô nhiễm nước.'),
    Q('Một trong những hậu quả của ô nhiễm không khí là?', ['Tăng các bệnh hô hấp, tim mạch, ảnh hưởng phát triển trẻ em', 'Cải thiện sức khoẻ', 'Tăng tuổi thọ', 'Không có hậu quả'], 0, 'Hậu quả.'),
    Q('Biến đổi khí hậu chủ yếu do?', ['Hoạt động phát thải khí nhà kính từ con người (CO₂, CH₄…)', 'Trồng nhiều cây', 'Tiết kiệm điện', 'Đi xe đạp'], 0, 'Biến đổi khí hậu.'),
  ]),

  M(9, 'Bài 4 — Một số vấn đề về vi phạm pháp luật bảo vệ môi trường (phần 2)', [
    Q('Luật Bảo vệ môi trường quy định?', ['Quyền và nghĩa vụ của cá nhân, tổ chức trong bảo vệ môi trường', 'Quyền tự do gây ô nhiễm', 'Cho phép xả thải tuỳ ý', 'Không có chế tài'], 0, 'Luật BVMT.'),
    Q('Vi phạm pháp luật về môi trường có thể bị xử lý?', ['Hành chính, hình sự hoặc bồi thường thiệt hại tuỳ mức độ', 'Không bị xử lý', 'Được khen thưởng', 'Chỉ bị nhắc nhở'], 0, 'Chế tài.'),
    Q('Khi phát hiện cơ sở sản xuất xả thải gây ô nhiễm, em nên?', ['Báo cho cơ quan chức năng, không tự ý hành xử bạo lực', 'Im lặng', 'Tự xông vào phá', 'Tung tin sai sự thật'], 0, 'Cách báo.'),
    Q('Phân loại rác tại nguồn giúp?', ['Tăng hiệu quả tái chế, giảm ô nhiễm, tiết kiệm tài nguyên', 'Tăng rác thải', 'Gây ô nhiễm', 'Không có tác dụng'], 0, 'Phân loại rác.'),
    Q('Hành vi nào giúp bảo vệ môi trường ngay trong trường học?', ['Tiết kiệm điện nước, không xả rác bừa bãi, trồng cây, đi xe đạp/xe buýt', 'Vứt rác bừa bãi', 'Hái cây cảnh', 'Để vòi nước chảy tự do'], 0, 'Hành động BVMT.'),
    Q('Mục tiêu phát triển bền vững yêu cầu?', ['Phát triển kinh tế gắn với xã hội và bảo vệ môi trường', 'Phát triển kinh tế bằng mọi giá', 'Bỏ qua môi trường', 'Chỉ bảo tồn không phát triển'], 0, 'PTBV.'),
  ]),

  M(10, 'Bài 4 — Một số vấn đề về vi phạm pháp luật bảo vệ môi trường (phần 3)', [
    Q('Hành vi phá rừng trái pháp luật?', ['Là tội phạm môi trường, có thể bị xử lý hình sự', 'Là quyền tự do', 'Không bị xử lý', 'Được khuyến khích'], 0, 'Phá rừng.'),
    Q('Buôn bán động vật hoang dã quý hiếm?', ['Là hành vi vi phạm nghiêm trọng pháp luật Việt Nam và Công ước CITES', 'Là kinh doanh hợp pháp', 'Không bị xử lý', 'Được khuyến khích'], 0, 'CITES.'),
    Q('Học sinh có thể góp phần BVMT qua hoạt động?', ['Trồng cây, làm sạch trường lớp, tuyên truyền, tham gia ngày môi trường thế giới (5/6)', 'Không tham gia', 'Phá hoại cây xanh', 'Vứt rác xuống sông'], 0, 'Hành động HS.'),
    Q('Khái niệm "kinh tế tuần hoàn" nhằm?', ['Giảm khai thác tài nguyên, tái sử dụng, tái chế chất thải', 'Tăng khai thác tuỳ ý', 'Xả thải nhiều hơn', 'Không liên quan'], 0, 'Circular economy.'),
    Q('3R trong bảo vệ môi trường là?', ['Reduce - Reuse - Recycle (Giảm thiểu - Tái sử dụng - Tái chế)', 'Run - Read - Repeat', 'Rich - Rare - Royal', 'Red - Round - Right'], 0, '3R.'),
    Q('Để giảm rác thải nhựa, học sinh có thể?', ['Mang theo bình nước cá nhân, hạn chế dùng ống hút và túi nilon một lần', 'Dùng nhiều túi nilon hơn', 'Vứt vỏ chai bừa bãi', 'Đốt rác nhựa tại nhà'], 0, 'Giảm nhựa.'),
  ]),

  M(11, 'Bài 5 — Phòng không nhân dân (phần 1)', [
    Q('Phòng không nhân dân là?', ['Hoạt động của toàn dân nhằm phòng tránh, đánh trả tiến công đường không và khắc phục hậu quả', 'Hoạt động của riêng quân đội', 'Hoạt động chỉ trong thời bình', 'Hoạt động kinh tế'], 0, 'PKND.'),
    Q('Mục đích của phòng không nhân dân?', ['Bảo vệ tính mạng, tài sản nhân dân và mục tiêu kinh tế - quốc phòng', 'Tấn công nước khác', 'Phá hoại', 'Tăng phát thải'], 0, 'Mục đích.'),
    Q('Lực lượng nòng cốt của PKND?', ['Bộ đội phòng không, dân quân tự vệ và lực lượng dự bị động viên', 'Chỉ học sinh', 'Chỉ cảnh sát giao thông', 'Chỉ kiểm lâm'], 0, 'Lực lượng.'),
    Q('Mục tiêu địch thường tiến công đường không gồm?', ['Cơ quan đầu não, sân bay, cầu cảng, nhà máy, đầu mối giao thông, khu dân cư đông đúc', 'Vùng hoang vắng', 'Đồng cỏ', 'Khu rừng nguyên sinh'], 0, 'Mục tiêu.'),
    Q('Phương tiện tiến công đường không hiện đại có thể bao gồm?', ['Máy bay, tên lửa hành trình, máy bay không người lái (UAV)', 'Chỉ máy bay cánh quạt cũ', 'Chỉ khinh khí cầu', 'Chỉ tàu thuỷ'], 0, 'Phương tiện.'),
    Q('Khi nghe tiếng còi báo động phòng không, người dân nên?', ['Bình tĩnh, nhanh chóng di chuyển vào hầm/nơi trú ẩn an toàn theo hướng dẫn', 'Đứng giữa đường nhìn lên trời', 'Hoảng loạn chạy lung tung', 'Bỏ qua tín hiệu'], 0, 'Ứng phó.'),
  ]),

  M(12, 'Bài 5 — Phòng không nhân dân (phần 2)', [
    Q('Hầm trú ẩn cá nhân, gia đình nên?', ['Có vị trí gần nhà, kết cấu vững, có thông hơi, dễ sơ tán', 'Đặt giữa đường', 'Không cần thông hơi', 'Càng yếu càng tốt'], 0, 'Hầm trú ẩn.'),
    Q('Khi địch tiến công đường không, học sinh đang trong trường nên?', ['Tuân theo hướng dẫn của giáo viên và cán bộ, di chuyển vào hầm/khu vực an toàn theo phương án đã tập', 'Tự ý chạy ra ngoài đường', 'Núp dưới gốc cây cô độc gần cột điện', 'Đứng nhìn ra cửa sổ'], 0, 'Sơ tán trong trường.'),
    Q('Một trong các biện pháp nguỵ trang phòng không?', ['Tắt đèn, che chắn nguồn sáng vào ban đêm khi có lệnh', 'Bật hết đèn cho sáng', 'Đốt lửa to', 'Giương cờ lớn'], 0, 'Nguỵ trang đêm.'),
    Q('Sơ cứu người bị thương khi có thương vong cần?', ['Đảm bảo an toàn, cầm máu, băng bó, gọi cấp cứu, đưa đến nơi an toàn', 'Bỏ mặc', 'Di chuyển nạn nhân thô bạo', 'Cho uống thuốc bừa'], 0, 'Sơ cứu cơ bản.'),
    Q('Trách nhiệm của học sinh trong PKND là?', ['Học và tập theo hướng dẫn, biết các tín hiệu báo động, biết sơ tán và sơ cứu cơ bản', 'Không quan tâm', 'Coi đó là việc người lớn', 'Phá hoại hầm'], 0, 'Trách nhiệm HS.'),
    Q('Sau khi có cảnh báo "an toàn", người dân nên?', ['Tuân thủ hướng dẫn của lực lượng chức năng, kiểm tra sức khoẻ, hỗ trợ người yếu thế', 'Tự ý đi vào khu vực có thể còn nguy hiểm', 'Bỏ về ngay lập tức', 'Tranh giành đồ đạc'], 0, 'Sau báo động.'),
  ]),

  M(13, 'Bài 5 — Phòng không nhân dân (phần 3 - tổ chức)', [
    Q('Cấp tổ chức cao nhất chỉ đạo PKND ở Việt Nam là?', ['Chính phủ và Ban chỉ đạo PKND các cấp', 'Tổ dân phố', 'Câu lạc bộ', 'Cá nhân'], 0, 'Tổ chức PKND.'),
    Q('Ở địa phương, lực lượng PKND được biên chế trong?', ['Dân quân tự vệ và lực lượng dự bị động viên', 'Hội phụ nữ thuần tuý', 'Hội cựu chiến binh đứng riêng', 'Đoàn thanh niên đứng riêng'], 0, 'DQTV.'),
    Q('Khẩu hiệu của PKND thể hiện?', ['"Toàn dân, toàn diện, tự lực, tự cường"', 'Tự do tuỳ ý', 'Mặc kệ', 'Im lặng'], 0, 'Phương châm.'),
    Q('Tín hiệu báo động phòng không bằng còi thường là?', ['Hồi còi dài lặp lại theo quy định của chính quyền địa phương', 'Một tiếng còi xe máy', 'Tiếng chuông trường học', 'Tiếng chuông điện thoại'], 0, 'Tín hiệu còi.'),
    Q('Khu vực trọng yếu thường được bố trí?', ['Lực lượng phòng không, hệ thống cảnh báo và phương án sơ tán', 'Không bố trí gì', 'Không cảnh báo', 'Đèn neon trang trí'], 0, 'Khu trọng yếu.'),
    Q('Diễn tập PKND nhằm?', ['Nâng cao khả năng phản ứng và phối hợp khi có tình huống', 'Lãng phí', 'Doạ dân', 'Phô trương vũ khí'], 0, 'Mục đích diễn tập.'),
  ]),

  M(14, 'Bài 5 — Phòng không nhân dân (phần 4 - kỹ năng cá nhân)', [
    Q('Một bộ vật dụng khẩn cấp cá nhân nên gồm?', ['Nước, lương khô, đèn pin, sạc dự phòng, thuốc thiết yếu, giấy tờ tuỳ thân', 'Đồ chơi điện tử', 'Trang sức quý', 'Mỹ phẩm'], 0, 'Túi khẩn cấp.'),
    Q('Khi sơ tán vào hầm cần?', ['Bình tĩnh, hỗ trợ người già, trẻ em, người khuyết tật; nghe theo hướng dẫn', 'Chen lấn xô đẩy', 'Bỏ mặc người yếu', 'Tranh giành chỗ'], 0, 'Văn minh sơ tán.'),
    Q('Khi gặp người bị ngất do hoảng loạn nên?', ['Đặt nằm nơi thoáng, nâng chân cao, kiểm tra hô hấp, gọi y tế', 'Tát mạnh để tỉnh', 'Lay mạnh', 'Bỏ mặc'], 0, 'Sơ cứu ngất.'),
    Q('Nếu có cháy nhỏ sau sự cố, kỹ năng đầu tiên là?', ['Cảnh báo mọi người, ngắt nguồn điện/gas, dùng bình chữa cháy hoặc thoát hiểm an toàn', 'Hít khói thử', 'Quay video câu like', 'Đứng nhìn'], 0, 'Cháy.'),
    Q('Khi điện thoại không có sóng do sự cố, nên?', ['Sử dụng các phương tiện khác (radio, kẻng, loa địa phương) để nắm thông tin', 'Hoảng loạn', 'Đập máy', 'Bỏ chạy ngẫu nhiên'], 0, 'Mất sóng.'),
    Q('Để chuẩn bị tâm lý cho tình huống khẩn cấp, học sinh nên?', ['Tham gia diễn tập, học cách bình tĩnh, biết số điện thoại khẩn cấp (113, 114, 115)', 'Bỏ qua diễn tập', 'Tin đồn nhảm', 'Phớt lờ'], 0, 'Tâm lý sẵn sàng.'),
  ]),

  M(15, 'Bài 5 — Phòng không nhân dân (phần 5 - tổng kết)', [
    Q('Phòng không nhân dân thể hiện đường lối?', ['"Toàn dân, toàn diện" của Đảng và Nhà nước trong bảo vệ Tổ quốc', 'Riêng lẻ', 'Cục bộ', 'Không có chiến lược'], 0, 'Đường lối.'),
    Q('Bảo vệ tài sản công khi sơ tán cần?', ['Phối hợp với chính quyền, không tự ý chiếm đoạt, có biên bản nếu được giao trông coi', 'Tự ý sử dụng', 'Chiếm đoạt', 'Đốt bỏ'], 0, 'Tài sản công.'),
    Q('Lực lượng dân quân tự vệ (DQTV) là?', ['Lực lượng vũ trang quần chúng không thoát ly sản xuất, công tác', 'Quân đội chính quy chuyên nghiệp', 'Lực lượng cảnh sát giao thông', 'Đội thiếu niên tiền phong'], 0, 'DQTV.'),
    Q('Khi tham gia hoạt động PKND, học sinh nên?', ['Chấp hành nghiêm túc, thể hiện ý thức trách nhiệm công dân', 'Bỏ qua', 'Lười biếng', 'Trêu đùa'], 0, 'Trách nhiệm.'),
    Q('Một trong các phương án PKND tại trường học là?', ['Sơ đồ và phương án sơ tán, vị trí hầm/trại tạm, đội cứu thương học sinh', 'Không có phương án', 'Khoá cửa nhốt học sinh', 'Bỏ rơi học sinh'], 0, 'Phương án trường.'),
    Q('Phòng không nhân dân được coi là?', ['Bộ phận của nền quốc phòng toàn dân', 'Hoạt động du lịch', 'Hoạt động thể thao', 'Hoạt động giải trí'], 0, 'QPTD.'),
  ]),

  M(16, 'Ôn tập học kì 1 (phần 1)', [
    Q('Lãnh thổ quốc gia gồm?', ['Vùng đất, vùng nước, vùng trời và lòng đất', 'Chỉ vùng đất', 'Chỉ vùng biển', 'Chỉ vùng trời'], 0, 'Lãnh thổ.'),
    Q('Lãnh hải Việt Nam rộng?', ['12 hải lý từ đường cơ sở', '200 hải lý', '24 hải lý', '50 hải lý'], 0, 'Lãnh hải.'),
    Q('Độ tuổi gọi nhập ngũ thời bình?', ['18 đến hết 25 (đến 27 với người tạm hoãn để học đại học)', '14 đến 17', '30 đến 40', 'Trên 50'], 0, 'Tuổi nhập ngũ.'),
    Q('Tác hại của ma tuý?', ['Hại sức khoẻ, lệ thuộc, vi phạm pháp luật', 'Tăng trí nhớ', 'Tăng cường thể chất', 'Không có hại'], 0, 'Ma tuý.'),
    Q('Hành vi nào bảo vệ môi trường?', ['Phân loại rác, tiết kiệm điện nước, trồng cây', 'Đốt rừng', 'Xả thải bừa bãi', 'Săn bắt động vật quý'], 0, 'BVMT.'),
    Q('Phòng không nhân dân là?', ['Hoạt động của toàn dân phòng tránh tiến công đường không và khắc phục hậu quả', 'Hoạt động kinh tế', 'Du lịch', 'Thể thao'], 0, 'PKND.'),
  ]),

  M(17, 'Ôn tập học kì 1 (phần 2)', [
    Q('Việt Nam có chủ quyền với 2 quần đảo?', ['Hoàng Sa và Trường Sa', 'Bạch Long Vĩ - Cô Tô', 'Phú Quốc - Côn Đảo', 'Cát Bà - Lý Sơn'], 0, '2 quần đảo VN.'),
    Q('Trốn tránh nghĩa vụ quân sự?', ['Bị xử lý theo pháp luật', 'Được khen', 'Không xử lý', 'Được tiền'], 0, 'Chế tài NVQS.'),
    Q('Nghiện game gây hậu quả?', ['Giảm sức khoẻ, sa sút học tập', 'Học tốt hơn', 'Khoẻ hơn', 'Quan hệ tốt hơn'], 0, 'Nghiện game.'),
    Q('Xả nước thải chưa xử lý ra sông là?', ['Vi phạm pháp luật về bảo vệ môi trường', 'Hợp pháp', 'Khuyến khích', 'Không bị xử lý'], 0, 'VPPL MT.'),
    Q('Khi nghe còi báo động PK, học sinh nên?', ['Bình tĩnh, sơ tán vào nơi trú ẩn theo hướng dẫn', 'Đứng giữa đường', 'Hoảng loạn chạy lung tung', 'Bỏ qua'], 0, 'Sơ tán.'),
    Q('Tổng đài bảo vệ trẻ em?', ['111', '113', '114', '115'], 0, '111.'),
  ]),

  M(18, 'Kiểm tra cuối học kì 1', [
    Q('Vùng đặc quyền kinh tế của Việt Nam rộng?', ['200 hải lý từ đường cơ sở', '12 hải lý', '24 hải lý', '500 hải lý'], 0, 'EEZ.'),
    Q('Đối tượng đăng ký NVQS lần đầu?', ['Công dân nam đủ 17 tuổi', 'Trẻ 10 tuổi', 'Người trên 50', 'Mọi công dân'], 0, 'Đăng ký NVQS.'),
    Q('Hành vi vi phạm pháp luật bảo vệ động vật hoang dã?', ['Buôn bán, săn bắt động vật quý hiếm', 'Bảo vệ rừng', 'Trồng cây', 'Phân loại rác'], 0, 'Săn bắt ĐV.'),
    Q('Lực lượng nòng cốt PKND?', ['Bộ đội phòng không, DQTV, dự bị động viên', 'Học sinh tiểu học', 'Hội phụ huynh', 'Đoàn nghệ thuật'], 0, 'Lực lượng PKND.'),
    Q('Tệ nạn xã hội mới thời kỳ hội nhập?', ['Lừa đảo trên không gian mạng, nghiện game', 'Đọc sách', 'Học ngoại ngữ', 'Tình nguyện'], 0, 'TNXH mới.'),
    Q('Khi phát hiện cơ sở xả thải gây ô nhiễm em nên?', ['Báo cho cơ quan chức năng', 'Im lặng', 'Tự ý đập phá', 'Đăng tin sai sự thật'], 0, 'Ứng phó.'),
  ]),

  // ──────────────── HK2 — Kĩ thuật quân sự ────────────────
  M(19, 'Bài 6 — Giới thiệu một số loại súng bộ binh (phần 1)', [
    Q('Súng bộ binh là?', ['Vũ khí cá nhân hoặc dùng cho tổ chiến đấu của bộ binh', 'Vũ khí hạt nhân', 'Vũ khí hoá học', 'Tên lửa hành trình'], 0, 'Súng bộ binh.'),
    Q('Súng tiểu liên AK là loại?', ['Súng bộ binh tự động, do Liên Xô thiết kế, được trang bị rộng rãi cho QĐND Việt Nam', 'Súng săn dân dụng', 'Đồ chơi', 'Vũ khí hạt nhân'], 0, 'AK.'),
    Q('Khi nghiên cứu súng, học sinh chủ yếu cần?', ['Hiểu tên gọi, công dụng, tính năng cơ bản, quy tắc an toàn — không thực hành trên súng thật', 'Tháo lắp súng thật tuỳ ý', 'Sử dụng đạn thật trong giờ học', 'Mang súng về nhà'], 0, 'An toàn học tập.'),
    Q('Súng trường CKC khác AK ở chỗ?', ['CKC bắn phát một, AK có chế độ bắn liên thanh', 'Giống nhau hoàn toàn', 'CKC là súng máy hạng nặng', 'AK chỉ bắn phát một'], 0, 'CKC vs AK.'),
    Q('Khi học các bài về súng cần tuân thủ?', ['Quy tắc an toàn tuyệt đối, hướng dẫn của giáo viên/cán bộ', 'Tự do thao tác', 'Không cần an toàn', 'Đùa nghịch với súng'], 0, 'Nguyên tắc.'),
    Q('Mục đích giáo dục quân sự về súng bộ binh cho học sinh nhằm?', ['Hiểu cơ bản về vũ khí, ý thức trách nhiệm bảo vệ Tổ quốc', 'Khuyến khích bạo lực', 'Để săn bắn', 'Để gây nguy hiểm'], 0, 'Mục đích.'),
  ]),

  M(20, 'Bài 6 — Giới thiệu súng bộ binh (phần 2 - quy tắc an toàn)', [
    Q('Khi tiếp xúc với súng (cả mô hình) cần?', ['Luôn coi như đang nạp đạn, không chĩa vào người, đặt nơi an toàn', 'Chĩa vào bạn cho vui', 'Mang đi đùa', 'Bỏ vào cặp đi học'], 0, 'Quy tắc cơ bản.'),
    Q('Phát hiện súng/đạn rơi vãi ngoài đường nên?', ['Không chạm, đánh dấu vị trí, báo cơ quan công an/ quân sự gần nhất', 'Nhặt mang về nhà', 'Đập vào tường', 'Bán cho người lạ'], 0, 'Phát hiện vũ khí.'),
    Q('Bộ phận cơ bản của súng AK gồm?', ['Báng, ốp lót tay, nòng, thân súng, khoá nòng, lò xo, hộp tiếp đạn', 'Bộ ly hợp ô tô', 'Bánh răng máy phay', 'Cánh tua-bin'], 0, 'Bộ phận AK.'),
    Q('Khi thấy người khác đùa nghịch với vũ khí, em nên?', ['Khuyên ngăn, báo người có trách nhiệm', 'Tham gia', 'Quay video câu like', 'Im lặng cổ vũ'], 0, 'Ứng phó.'),
    Q('Pháp luật Việt Nam cấm?', ['Mua bán, tàng trữ trái phép vũ khí quân dụng, vật liệu nổ, công cụ hỗ trợ', 'Học lý thuyết về vũ khí trong nhà trường', 'Sử dụng vũ khí đúng quy định', 'Diễn tập quân sự'], 0, 'PL cấm.'),
    Q('Khi thực hành mô hình súng tại trường, học sinh phải?', ['Tuân thủ tuyệt đối hướng dẫn của giáo viên, không tự ý thao tác', 'Tự do thao tác', 'Tự lắp đạn giả', 'Mang súng về nhà'], 0, 'Kỉ luật học.'),
  ]),

  M(21, 'Bài 6 — Giới thiệu thuốc nổ (phần 3 - chỉ lý thuyết, an toàn)', [
    Q('Thuốc nổ trong quân sự được dùng để?', ['Phá huỷ công trình, chướng ngại quân sự theo quy định, do lực lượng được đào tạo sử dụng', 'Đốt pháo cho vui', 'Tự chế tại nhà', 'Cho học sinh nghịch'], 0, 'Mục đích quân sự.'),
    Q('Pháp luật Việt Nam quy định việc tự chế, tàng trữ thuốc nổ trái phép?', ['Là tội phạm nghiêm trọng, có thể bị phạt tù', 'Là quyền tự do cá nhân', 'Không bị xử lý', 'Được khuyến khích'], 0, 'PL nghiêm cấm.'),
    Q('Khi phát hiện vật nghi là vật liệu nổ ở nơi công cộng, em nên?', ['Không chạm vào, sơ tán mọi người, báo công an gần nhất', 'Cầm lên xem', 'Tự ý dập tắt', 'Đập vỡ thử'], 0, 'Phát hiện vật nổ.'),
    Q('Pháo nổ tự chế dịp lễ Tết?', ['Bị nghiêm cấm, gây nhiều thương tích, có thể chết người', 'Truyền thống nên dùng', 'An toàn nếu cẩn thận', 'Không nguy hiểm'], 0, 'Cấm pháo tự chế.'),
    Q('Mục đích giáo dục về thuốc nổ với học sinh chỉ nhằm?', ['Nhận thức tác hại, biết tránh và tố giác hành vi vi phạm — không cung cấp công thức', 'Hướng dẫn tự chế', 'Khuyến khích sử dụng', 'Học cách chế tạo'], 0, 'Mục đích giáo dục.'),
    Q('Khi nghe lời rủ rê tham gia "chế pháo", học sinh nên?', ['Kiên quyết từ chối và báo người có trách nhiệm', 'Tham gia', 'Im lặng', 'Quay video đăng mạng'], 0, 'Từ chối.'),
  ]),

  M(22, 'Bài 6 — Vũ khí tự tạo (phần 4 - phòng tránh)', [
    Q('Vũ khí tự tạo là?', ['Vũ khí được chế tạo bằng vật liệu thô sơ, không nằm trong trang bị chính quy', 'Vũ khí công nghệ cao', 'Vũ khí hạt nhân', 'Tên lửa hiện đại'], 0, 'Vũ khí tự tạo.'),
    Q('Trong lịch sử kháng chiến, vũ khí tự tạo từng được sử dụng để?', ['Phù hợp với chiến tranh nhân dân, đánh địch bằng cách sáng tạo, tiết kiệm', 'Tấn công thường dân', 'Phá hoại tài sản công dân', 'Đánh nhau cá nhân'], 0, 'Truyền thống.'),
    Q('Pháp luật hiện nay nghiêm cấm?', ['Cá nhân tự chế tạo, tàng trữ, sử dụng vũ khí trái phép ngoài quy định nhà nước', 'Học lý thuyết về vũ khí', 'Diễn tập có tổ chức', 'Bảo tàng trưng bày hiện vật'], 0, 'PL cấm.'),
    Q('Khi mạng xã hội xuất hiện hướng dẫn chế tạo vũ khí, học sinh nên?', ['Không chia sẻ, báo cho cơ quan chức năng', 'Chia sẻ rộng rãi', 'Làm theo hướng dẫn', 'Khen ngợi'], 0, 'Ứng xử mạng.'),
    Q('Vũ khí tự tạo nguy hiểm vì?', ['Không an toàn, dễ phát nổ, gây thương vong cho người sử dụng và xung quanh', 'An toàn tuyệt đối', 'Có kiểm định', 'Vô hại'], 0, 'Nguy hiểm.'),
    Q('Trách nhiệm của học sinh đối với vấn đề vũ khí?', ['Tuân thủ pháp luật, không tò mò chế tạo, tố giác hành vi vi phạm', 'Tham gia chế tạo', 'Bao che', 'Khuyến khích bạn'], 0, 'Trách nhiệm HS.'),
  ]),

  M(23, 'Bài 7 — Pháp luật về quản lý vũ khí, vật liệu nổ, công cụ hỗ trợ (phần 1)', [
    Q('Vũ khí quân dụng theo pháp luật Việt Nam gồm?', ['Súng quân dụng, vũ khí hạng nặng, đạn dược dùng cho lực lượng vũ trang', 'Đồ chơi trẻ em', 'Dao bếp gia đình', 'Cuốc xẻng nông nghiệp'], 0, 'Vũ khí quân dụng.'),
    Q('Vật liệu nổ gồm?', ['Thuốc nổ và phụ kiện nổ được nhà nước quản lý chặt chẽ', 'Pháo hoa nghệ thuật do nhà nước cho phép sử dụng đúng quy định', 'Pin tiểu', 'Bóng đèn'], 0, 'Vật liệu nổ.'),
    Q('Công cụ hỗ trợ ví dụ?', ['Dùi cui điện, súng bắn đạn cao su, gậy cao su — chỉ trang bị cho lực lượng được phép', 'Mọi loại dao', 'Đồ chơi nhựa', 'Bút bi'], 0, 'CCHT.'),
    Q('Đối tượng được phép sử dụng vũ khí quân dụng?', ['Lực lượng vũ trang, người được nhà nước giao nhiệm vụ theo quy định', 'Mọi công dân', 'Học sinh', 'Trẻ em'], 0, 'Đối tượng được phép.'),
    Q('Cá nhân tàng trữ trái phép vũ khí quân dụng có thể bị?', ['Truy cứu trách nhiệm hình sự', 'Khen thưởng', 'Không xử lý', 'Tặng quà'], 0, 'Hình sự.'),
    Q('Khi phát hiện vũ khí trái phép tại địa bàn cư trú, em nên?', ['Báo công an, không tự ý xử lý', 'Tự xông vào tịch thu', 'Im lặng', 'Khoe trên mạng xã hội'], 0, 'Tố giác.'),
  ]),

  M(24, 'Bài 7 — Pháp luật quản lý vũ khí (phần 2)', [
    Q('Súng săn, súng thể thao theo PL?', ['Được phép sử dụng theo quy định, phải đăng ký, được cấp phép cho người đủ điều kiện', 'Tự do mua bán', 'Cấm tuyệt đối', 'Không cần đăng ký'], 0, 'Súng săn/thể thao.'),
    Q('Đốt pháo nổ trái phép?', ['Bị xử phạt hành chính hoặc hình sự tuỳ mức độ', 'Hợp pháp', 'Khuyến khích', 'Không bị xử lý'], 0, 'Pháo nổ trái phép.'),
    Q('Pháo hoa nghệ thuật do?', ['Tổ chức được nhà nước cấp phép thực hiện vào các dịp lễ', 'Mọi cá nhân tự đốt', 'Trẻ em tự chế', 'Cá nhân mua tự do'], 0, 'Pháo hoa hợp pháp.'),
    Q('Khi nhận tin có người tàng trữ vũ khí trái phép, em nên?', ['Báo cho cơ quan công an, không tự hành động', 'Đến tận nơi xem', 'Quay phim đăng mạng', 'Cùng tham gia'], 0, 'Ứng xử.'),
    Q('Mua bán vũ khí quân dụng trên mạng là?', ['Vi phạm pháp luật nghiêm trọng', 'Hợp pháp', 'Không bị xử lý', 'Được khuyến khích'], 0, 'Tội phạm mạng.'),
    Q('Hậu quả của việc trẻ em tiếp xúc, sử dụng vũ khí?', ['Nguy cơ thương vong, vi phạm pháp luật, hệ luỵ gia đình - xã hội', 'Hoàn toàn an toàn', 'Vui vẻ', 'Không hậu quả'], 0, 'Hậu quả.'),
  ]),

  M(25, 'Bài 7 — Pháp luật quản lý vũ khí (phần 3 - thực tiễn)', [
    Q('Mục tiêu của pháp luật quản lý vũ khí, vật liệu nổ?', ['Bảo vệ an ninh quốc gia, trật tự an toàn xã hội, tính mạng, sức khoẻ, tài sản nhân dân', 'Gây khó khăn', 'Không có mục tiêu', 'Phục vụ riêng cá nhân'], 0, 'Mục tiêu.'),
    Q('Vai trò của học sinh trong việc thực hiện pháp luật về vũ khí?', ['Tuyên truyền, tố giác hành vi vi phạm, chấp hành nghiêm', 'Phớt lờ', 'Bao che', 'Tham gia vi phạm'], 0, 'Vai trò HS.'),
    Q('Nguyên tắc quản lý vũ khí?', ['Tập trung, thống nhất, chặt chẽ, đúng quy định và đối tượng được phép', 'Tự do', 'Lỏng lẻo', 'Không quản lý'], 0, 'Nguyên tắc.'),
    Q('Khi đọc tin tức trên mạng về vũ khí trái phép, học sinh nên?', ['Phân tích cẩn thận, không chia sẻ tin chưa kiểm chứng, không bắt chước', 'Chia sẻ ngay', 'Bắt chước', 'Bình luận khích bác'], 0, 'Văn hoá mạng.'),
    Q('Pháp luật xử lý hành vi đưa vũ khí vào trường học?', ['Là hành vi đặc biệt nghiêm trọng, xử lý nghiêm khắc theo quy định', 'Bình thường', 'Không bị xử lý', 'Khen ngợi'], 0, 'Trong trường học.'),
    Q('Khi thấy bạn mang vật nghi là vũ khí đến lớp, em nên?', ['Báo cho giáo viên/ ban giám hiệu/ công an ngay', 'Im lặng', 'Cùng nghịch thử', 'Khoe với người khác'], 0, 'Ứng xử trong trường.'),
  ]),

  M(26, 'Bài 8 — Lợi dụng địa hình, địa vật (phần 1)', [
    Q('Lợi dụng địa hình, địa vật trong chiến đấu nhằm?', ['Che giấu, che đỡ, hạn chế thương vong khi tiếp cận, chiến đấu', 'Trang trí', 'Tập thể dục', 'Làm cảnh'], 0, 'Mục đích.'),
    Q('Địa hình tự nhiên có thể lợi dụng gồm?', ['Gò, đồi, mô đất, bờ ruộng, gốc cây lớn, hốc đá', 'Mặt phẳng trống trải', 'Cánh đồng trống', 'Mặt nước trống'], 0, 'Địa hình tự nhiên.'),
    Q('Địa vật nhân tạo có thể lợi dụng gồm?', ['Tường, công sự, hố giao thông, bờ rào kiên cố', 'Đèn neon trang trí', 'Tượng giấy', 'Phông phim'], 0, 'Địa vật nhân tạo.'),
    Q('Khi lợi dụng địa hình che đỡ cần đảm bảo?', ['Vật che đỡ có khả năng chống đạn, kín đáo, có lối thoát', 'Mỏng manh', 'Trống trải', 'Phản chiếu sáng mạnh'], 0, 'Yêu cầu.'),
    Q('Tư thế phổ biến khi lợi dụng địa hình?', ['Nằm, quỳ, ngồi, đứng tuỳ tình huống và vật che đỡ', 'Luôn đứng thẳng', 'Luôn nhảy lên', 'Luôn xoay tròn'], 0, 'Tư thế.'),
    Q('Khi vận động lợi dụng địa hình cần?', ['Bí mật, nhanh, gọn, không lộ vật che đỡ', 'Hô to', 'Đi chậm phô trương', 'Tự bộc lộ'], 0, 'Vận động.'),
  ]),

  M(27, 'Bài 8 — Lợi dụng địa hình, địa vật (phần 2)', [
    Q('Khi lợi dụng vật che khuất (không chống đạn) cần?', ['Hiểu vật chỉ giấu mình chứ không chống đạn, cần phối hợp với vật che đỡ', 'Tin tưởng tuyệt đối', 'Đứng lộ liễu', 'Không cần phối hợp'], 0, 'Che khuất.'),
    Q('Vận động bằng cách lê, bò, trườn dùng khi?', ['Địa hình thấp, cần tránh quan sát của đối phương', 'Đường bằng phẳng đông người qua lại', 'Sàn nhà trong lớp', 'Trên sân khấu'], 0, 'Cách vận động.'),
    Q('Khi lợi dụng bờ ruộng/ mô đất nên?', ['Nằm sát mặt đất, đầu hướng phù hợp, sử dụng vật che đỡ thuộc bên đối phương', 'Nằm hở đầu', 'Đứng thẳng', 'Ngồi nhìn lên trời'], 0, 'Kỹ thuật.'),
    Q('Khi vận động qua khu vực trống trải nguy hiểm?', ['Vận động nhanh, theo đường ziczac hoặc khi đối phương không quan sát được', 'Đi thẳng từ tốn', 'Đứng giữa nghỉ', 'Hát to'], 0, 'Khu vực trống.'),
    Q('Yêu cầu chung khi lợi dụng địa hình địa vật?', ['Quan sát kĩ trước, lợi dụng cùng phía với đối phương, đảm bảo bí mật', 'Chỉ làm theo cảm hứng', 'Bộc lộ rõ', 'Bỏ qua quan sát'], 0, 'Yêu cầu.'),
    Q('Trong điều kiện hoà bình, kỹ năng này giúp ích cho?', ['Hoạt động dã ngoại, ứng phó thiên tai, cứu nạn, an toàn cá nhân', 'Đánh nhau cá nhân', 'Trộm cắp', 'Tệ nạn xã hội'], 0, 'Ứng dụng đời thường.'),
  ]),

  M(28, 'Bài 8 — Thực hành lợi dụng địa hình, địa vật', [
    Q('Trước khi vận động trên thực địa cần?', ['Quan sát kỹ địa hình, chọn đường, vật lợi dụng phù hợp', 'Nhảy ngay', 'Hô to', 'Chạy bừa'], 0, 'Quan sát.'),
    Q('Khi vận động kết hợp lợi dụng địa vật cần?', ['Phối hợp ánh sáng, âm thanh, không tạo bóng và tiếng động lớn', 'Bật đèn pha sáng', 'Hô lớn', 'Đập gậy'], 0, 'Bí mật.'),
    Q('Khi lợi dụng địa vật cao (tường) cần?', ['Quan sát qua khe/ mép, không nhô đầu lên ngang nhau nhiều lần một chỗ', 'Đứng cao trên đỉnh tường lộ liễu', 'Vẫy tay', 'Nhảy múa trên tường'], 0, 'Quan sát.'),
    Q('Khi gặp khu vực hoả lực mạnh, không thể lợi dụng được?', ['Tìm đường vòng tránh, đợi thời cơ, xin hoả lực hỗ trợ (trong thực chiến)', 'Lao thẳng vào', 'Hô lớn', 'Đi giữa khu vực'], 0, 'Vòng tránh.'),
    Q('Khi tập luyện kỹ thuật, học sinh cần?', ['Tuân thủ hướng dẫn, bảo đảm an toàn, không đùa nghịch', 'Tự do thao tác', 'Chế giễu bạn', 'Đùa giỡn'], 0, 'Kỉ luật.'),
    Q('Kết thúc bài thực hành nên?', ['Rút kinh nghiệm, phối hợp đồng đội tốt hơn lần sau', 'Đổ lỗi cho nhau', 'Bỏ về', 'Im lặng'], 0, 'Đánh giá.'),
  ]),

  M(29, 'Bài 9 — Nhìn, nghe, phát hiện địch và chỉ mục tiêu (phần 1)', [
    Q('Nhìn, nghe phát hiện địch nhằm?', ['Sớm phát hiện đối phương để chủ động ứng phó', 'Trang trí', 'Tập thể dục', 'Làm cảnh'], 0, 'Mục đích.'),
    Q('Yêu cầu khi quan sát?', ['Cẩn thận, kiên nhẫn, có hệ thống, phối hợp các giác quan', 'Vội vàng', 'Bỏ sót', 'Chỉ nhìn 1 hướng'], 0, 'Yêu cầu quan sát.'),
    Q('Khi nghe phát hiện địch cần?', ['Tập trung, phân biệt âm thanh tự nhiên với âm thanh do hoạt động của đối phương', 'Bịt tai', 'Hét lớn', 'Bật nhạc'], 0, 'Phân biệt âm.'),
    Q('Dấu hiệu có thể nhận biết hoạt động của đối phương?', ['Tiếng động cơ, bụi cuốn lên, ánh kim phản chiếu, mùi khói nhiên liệu', 'Tiếng chim hót', 'Mùi hoa', 'Tiếng suối chảy'], 0, 'Dấu hiệu.'),
    Q('Khi quan sát ban đêm nên?', ['Tận dụng ánh sáng tự nhiên (trăng, sao), tránh nhìn trực tiếp vào nguồn sáng mạnh', 'Bật đèn pin chiếu thẳng', 'Đốt lửa to', 'Bật pháo hoa'], 0, 'Quan sát đêm.'),
    Q('Trong đời sống, kỹ năng quan sát giúp?', ['Phát hiện nguy hiểm sớm: cháy nổ, đuối nước, kẻ gian', 'Trộm cắp', 'Tệ nạn', 'Bạo lực'], 0, 'Ứng dụng đời thường.'),
  ]),

  M(30, 'Bài 9 — Chỉ mục tiêu (phần 2)', [
    Q('Chỉ mục tiêu nhằm?', ['Giúp đồng đội xác định nhanh, chính xác vị trí mục tiêu để xử trí', 'Trêu đùa', 'Làm cảnh', 'Không có mục đích'], 0, 'Mục đích chỉ mục tiêu.'),
    Q('Cách chỉ mục tiêu thường dùng?', ['Dùng phương vị/ vật chuẩn/ giờ đồng hồ (theo hướng kim) để mô tả vị trí', 'Dùng ngôn ngữ tự sáng tác mơ hồ', 'Vẽ tranh', 'Hát'], 0, 'Phương pháp.'),
    Q('Chỉ mục tiêu theo phương vị nghĩa là?', ['Cho biết góc hướng so với hướng chuẩn (Bắc) và khoảng cách', 'Hét to', 'Vẽ trên giấy', 'Đoán mò'], 0, 'Phương vị.'),
    Q('Chỉ mục tiêu theo vật chuẩn nghĩa là?', ['Lấy 1 vật dễ thấy làm mốc và mô tả mục tiêu liên hệ với vật chuẩn đó', 'Mô tả mơ hồ', 'Không cần mốc', 'Đoán'], 0, 'Vật chuẩn.'),
    Q('Khi chỉ mục tiêu cần?', ['Ngắn gọn, rõ ràng, chính xác, đủ để người nhận hiểu nhanh', 'Dài dòng', 'Mơ hồ', 'Vu vơ'], 0, 'Yêu cầu.'),
    Q('Trong đời sống, kỹ năng chỉ vị trí giúp?', ['Hướng dẫn xe cấp cứu, cứu hộ, đội tìm kiếm khi cần', 'Trêu đùa', 'Gây nhiễu', 'Không cần'], 0, 'Ứng dụng đời thường.'),
  ]),

  M(31, 'Bài 9 — Truyền tin liên lạc trong báo cáo (phần 3)', [
    Q('Truyền tin báo cáo trong huấn luyện quân sự nhằm?', ['Truyền đạt thông tin nhanh, chính xác, bảo mật', 'Trêu đùa', 'Lan tin đồn', 'Phô diễn'], 0, 'Mục đích truyền tin.'),
    Q('Các phương tiện truyền tin có thể là?', ['Bằng lời (hô gọi), tín hiệu (cờ, đèn, còi), liên lạc viên, vô tuyến', 'Chỉ vẽ tranh', 'Chỉ nhảy múa', 'Im lặng'], 0, 'Phương tiện.'),
    Q('Nội dung báo cáo cần?', ['Ngắn gọn, đầy đủ "ai, ở đâu, khi nào, làm gì, kết quả"', 'Dài dòng mơ hồ', 'Bịa đặt', 'Tô vẽ'], 0, '5W.'),
    Q('Khi truyền tin nội dung quan trọng nên?', ['Có quy ước, mã hoá nếu cần, tránh để lộ thông tin nhạy cảm', 'Hô to nơi đông người', 'Đăng mạng', 'Truyền tự do'], 0, 'Bảo mật.'),
    Q('Khi nhận tin cần?', ['Lắng nghe đầy đủ, xác nhận lại, ghi chép nếu cần để tránh hiểu nhầm', 'Nghe nửa chừng', 'Phản ứng tức thì không cần xác nhận', 'Bỏ qua'], 0, 'Tiếp nhận tin.'),
    Q('Trong đời sống thường, kỹ năng báo cáo ngắn gọn giúp?', ['Báo cháy, báo công an, gọi cấp cứu hiệu quả', 'Gây hiểu lầm', 'Lãng phí thời gian', 'Tạo hoảng loạn'], 0, 'Ứng dụng.'),
  ]),

  M(32, 'Bài 10 — Kỹ thuật sử dụng lựu đạn (phần 1 - lý thuyết)', [
    Q('Lựu đạn là?', ['Vũ khí cá nhân ném tay, dùng để sát thương sinh lực và phương tiện đối phương ở cự ly gần', 'Pháo hoa nghệ thuật', 'Đồ chơi trẻ em', 'Pin'], 0, 'Định nghĩa.'),
    Q('Trong nhà trường, học sinh chủ yếu được học?', ['Lý thuyết, mô hình tập, quy tắc an toàn — không tiếp xúc lựu đạn thật', 'Sử dụng lựu đạn thật', 'Tự chế lựu đạn', 'Đem về nhà'], 0, 'An toàn.'),
    Q('Khi tập ném lựu đạn (mô hình) cần?', ['Tuyệt đối tuân theo hướng dẫn của giáo viên, đứng đúng vị trí, ném đúng kỹ thuật', 'Ném tự do', 'Ném vào người', 'Đùa nghịch'], 0, 'Tập an toàn.'),
    Q('Khi phát hiện vật nghi là lựu đạn ngoài thực địa, em nên?', ['Không chạm vào, đánh dấu, sơ tán mọi người, báo công an/ quân sự ngay', 'Cầm lên xem', 'Đập thử', 'Đem về nhà'], 0, 'Phát hiện.'),
    Q('Hành vi tự chế, tàng trữ lựu đạn?', ['Là tội phạm nghiêm trọng', 'Hợp pháp', 'Không bị xử lý', 'Được khuyến khích'], 0, 'PL cấm.'),
    Q('Học kỹ thuật sử dụng lựu đạn trong giờ học QPAN nhằm?', ['Hiểu cơ bản, nâng cao kỹ năng và ý thức quốc phòng', 'Khuyến khích bạo lực', 'Để săn bắn', 'Đùa nghịch'], 0, 'Mục đích.'),
  ]),

  M(33, 'Bài 10 — Kỹ thuật sử dụng lựu đạn (phần 2 - tư thế cơ bản)', [
    Q('Tư thế ném lựu đạn phổ biến trong tập luyện?', ['Đứng, quỳ, nằm tuỳ tình huống và địa hình', 'Chỉ nằm ngửa', 'Chỉ ngồi xổm', 'Chỉ nhảy lên ném'], 0, 'Tư thế.'),
    Q('Khi ném (mô hình) cần?', ['Phối hợp toàn thân, cánh tay vung mạnh, chân giữ vững, bảo đảm an toàn', 'Chỉ vung cổ tay', 'Đứng yên', 'Cúi gập người tuỳ ý'], 0, 'Kỹ thuật ném.'),
    Q('Sau khi ném (mô hình) cần?', ['Hạ thấp người, tận dụng vật che đỡ tránh "mảnh văng" theo giả định', 'Đứng thẳng nhìn theo', 'Vẫy tay', 'Hô to'], 0, 'Sau khi ném.'),
    Q('Khoảng cách an toàn tối thiểu khi tập với mô hình cần?', ['Theo quy định của giáo viên và hướng dẫn an toàn', 'Tự ý quyết định', '1m bất kỳ', '0m'], 0, 'Khoảng cách.'),
    Q('Khi thấy bạn ném sai kỹ thuật, em nên?', ['Báo giáo viên để được hướng dẫn lại, không tự ý sửa cho bạn ngoài hướng dẫn', 'Mặc kệ', 'Cười nhạo', 'Quay video đăng mạng'], 0, 'Ứng xử bạn.'),
    Q('Trong đời sống, kỹ năng kỷ luật khi tập luyện giúp?', ['Hình thành ý thức tuân thủ quy tắc, an toàn cho bản thân và người xung quanh', 'Tự do tuỳ tiện', 'Coi thường an toàn', 'Hỗn loạn'], 0, 'Giá trị.'),
  ]),

  M(34, 'Ôn tập học kì 2', [
    Q('Khi tiếp xúc với mô hình súng cần?', ['Tuân thủ tuyệt đối hướng dẫn của giáo viên, không chĩa vào người', 'Thao tác tự do', 'Chĩa vào bạn', 'Mang về nhà'], 0, 'An toàn.'),
    Q('Pháp luật Việt Nam quy định việc tự chế thuốc nổ, pháo nổ?', ['Nghiêm cấm và xử lý theo pháp luật', 'Cho phép', 'Khuyến khích', 'Không xử lý'], 0, 'PL cấm.'),
    Q('Vũ khí quân dụng do ai được phép sử dụng?', ['Lực lượng vũ trang và người được nhà nước giao nhiệm vụ', 'Mọi công dân', 'Học sinh', 'Trẻ em'], 0, 'Đối tượng.'),
    Q('Khi lợi dụng địa hình địa vật cần?', ['Quan sát kỹ, bí mật, vật che đỡ vững chắc, có lối thoát', 'Lộ liễu', 'Phô trương', 'Mất quan sát'], 0, 'Lợi dụng địa hình.'),
    Q('Chỉ mục tiêu theo phương vị cần?', ['Góc hướng so với chuẩn và khoảng cách', 'Mô tả mơ hồ', 'Vẽ tự do', 'Đoán'], 0, 'Phương vị.'),
    Q('Khi phát hiện vật nghi là vũ khí, vật liệu nổ em nên?', ['Không chạm, sơ tán mọi người, báo công an', 'Cầm lên xem', 'Đập thử', 'Đem về nhà'], 0, 'Phát hiện.'),
  ]),

  M(35, 'Kiểm tra cuối học kì 2 — Tổng ôn cả năm GDQP-AN 11', [
    Q('Lãnh hải Việt Nam rộng bao nhiêu hải lý từ đường cơ sở?', ['12', '24', '200', '500'], 0, 'Lãnh hải.'),
    Q('Độ tuổi gọi nhập ngũ thời bình của công dân nam?', ['Đủ 18 đến hết 25 (đến 27 đối với người được tạm hoãn để học)', '14 đến 18', '30 đến 40', 'Trên 60'], 0, 'Tuổi nhập ngũ.'),
    Q('Hành vi nào sau đây vi phạm pháp luật bảo vệ môi trường?', ['Xả nước thải chưa xử lý ra sông', 'Phân loại rác', 'Trồng cây', 'Tiết kiệm nước'], 0, 'VPPL MT.'),
    Q('Phòng không nhân dân là?', ['Hoạt động của toàn dân nhằm phòng tránh và khắc phục hậu quả tiến công đường không', 'Hoạt động kinh tế', 'Du lịch', 'Thể thao'], 0, 'PKND.'),
    Q('Khi phát hiện vật nghi là vũ khí, vật liệu nổ em nên?', ['Không chạm vào, sơ tán mọi người, báo công an gần nhất', 'Cầm lên xem', 'Đập thử', 'Đem về'], 0, 'Phát hiện.'),
    Q('Trách nhiệm của học sinh đối với sự nghiệp bảo vệ Tổ quốc?', ['Học tập tốt, rèn luyện sức khoẻ, chấp hành pháp luật, sẵn sàng làm nghĩa vụ quân sự', 'Bỏ học', 'Trốn nghĩa vụ', 'Vi phạm pháp luật'], 0, 'Trách nhiệm HS.'),
  ]),
];

export const H11GDQP_SCENARIOS = indexBy(H11GDQP_WEEKS);
