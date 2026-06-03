// ============================================================
// Lớp 5 · ĐẠO ĐỨC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Đạo đức Lớp 5.
// ID prefix: "P5DD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5DD', 'dao-duc', n, title, qs, opts);

export const P5DD_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Em là học sinh lớp 5', [
    Q('Lớp 5 là lớp cuối cấp của trường?', ['Tiểu học', 'Trung học cơ sở', 'Trung học phổ thông', 'Mầm non'], 0, 'Lớp 5 là lớp cuối cấp Tiểu học.'),
    Q('Là HS lớp 5, em cần?', ['Chỉ lo chơi vì sắp hết cấp', 'Lười học vì cuối cấp', 'Ăn hiếp các em lớp dưới', 'Gương mẫu, học tốt để làm anh chị các em lớp dưới'], 3, 'HS lớp 5 cần gương mẫu cho lớp dưới.'),
    Q('Em được giao làm tổ trưởng, em nên?', ['Mặc kệ tổ', 'Bắt bạn làm hộ phần của em', 'Nhẹ nhàng nhắc nhở và làm gương', 'Hét bạn để bạn nghe'], 2, 'Làm gương và nhắc nhẹ là cách dẫn dắt tổ.'),
    Q('Năm cuối tiểu học, em đặt mục tiêu nào?', ['Cãi lại thầy cô', 'Học tốt, rèn nề nếp để lên cấp 2', 'Nghỉ học cho khoẻ', 'Chỉ chơi'], 1, 'Đặt mục tiêu học tốt để chuẩn bị cấp 2.'),
    Q('Bạn nào xứng đáng là HS lớp 5?', ['Bạn Nam đẩy ngã em nhỏ', 'Bạn Hoa giúp em lớp 1 buộc dây giày', 'Bạn Lan tranh sân chơi của em lớp dưới', 'Bạn Tú trêu em lớp 2 khóc'], 1, 'Giúp em nhỏ là biểu hiện đàn anh đàn chị.'),
  ]),

  M(2, 'Biết ơn tổ tiên', [
    Q('Vì sao em phải biết ơn tổ tiên?', ['Vì sợ bị mắng', 'Vì tổ tiên đã sinh thành, gây dựng nên dòng họ', 'Vì sách bắt phải nhớ', 'Vì cô giáo dạy thế'], 1, 'Tổ tiên là cội nguồn của dòng họ, gia đình.'),
    Q('Việc làm nào thể hiện biết ơn tổ tiên?', ['Vẽ bậy lên ảnh thờ', 'Chê bàn thờ cũ kĩ', 'Không tham gia giỗ chạp', 'Thắp hương, dọn dẹp bàn thờ tổ tiên cùng cha mẹ'], 3, 'Cùng dọn bàn thờ và thắp hương là biết ơn tổ tiên.'),
    Q('Ngày Giỗ Tổ Hùng Vương là?', ['Mùng 3 tháng 10 dương lịch', 'Mùng 1 tháng 1', 'Mùng 10 tháng 3 âm lịch', 'Mùng 2 tháng 9'], 2, 'Giỗ Tổ Hùng Vương là 10/3 âm lịch.'),
    Q('Câu ca dao nào về tổ tiên?', ['"Ếch ngồi đáy giếng"', '"Đi một ngày đàng học một sàng khôn"', '"Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba"', '"Ai về Bình Định mà coi"'], 2, 'Đây là câu ca dao về Giỗ Tổ Hùng Vương.'),
    Q('Khi gia đình có giỗ, em nên?', ['Ăn vụng đồ cúng', 'Cãi nhau với anh chị họ', 'Tham gia phụ giúp, lễ phép với người lớn', 'Trốn đi chơi'], 2, 'Tham gia giỗ là biết ơn tổ tiên.'),
  ]),

  M(3, 'Kính trọng và biết ơn thầy cô giáo', [
    Q('Vì sao em phải biết ơn thầy cô giáo?', ['Vì sách bảo thế', 'Vì thầy cô dạy em nên người', 'Vì phải làm theo bạn', 'Vì sợ thầy cô phạt'], 1, 'Thầy cô có công lao dạy dỗ em.'),
    Q('Ngày Nhà giáo Việt Nam là?', ['19/5', '22/12', '8/3', '20/11'], 3, '20/11 là Ngày Nhà giáo Việt Nam.'),
    Q('Việc làm thể hiện biết ơn thầy cô?', ['Bỏ tiết', 'Lười học, nói chuyện trong lớp', 'Học tập chăm chỉ, ngoan ngoãn', 'Cãi lại thầy cô'], 2, 'Học chăm và ngoan là cách tri ân thầy cô.'),
    Q('Khi gặp thầy cô cũ ngoài đường, em nên?', ['Lễ phép chào hỏi', 'Giả vờ không thấy', 'Quay mặt đi', 'Cười cợt'], 0, 'Vẫn chào hỏi thầy cô cũ là biết ơn.'),
    Q('Câu tục ngữ nào nói về thầy cô?', ['"Lá lành đùm lá rách"', '"Không thầy đố mày làm nên"', '"Ăn quả nhớ kẻ trồng cây"', '"Có công mài sắt có ngày nên kim"'], 1, '"Không thầy đố mày làm nên" nói về vai trò người thầy.'),
  ]),

  M(4, 'Biết ơn cha mẹ', [
    Q('Vì sao em phải biết ơn cha mẹ?', ['Vì cha mẹ sinh ra, nuôi dưỡng và yêu thương em', 'Vì sợ cha mẹ buồn', 'Vì cha mẹ bắt em phải nhớ', 'Vì cha mẹ mua quà cho em'], 0, 'Cha mẹ có công sinh thành, dưỡng dục.'),
    Q('Việc làm thể hiện biết ơn cha mẹ?', ['Bỏ nhà đi chơi', 'Vâng lời, giúp đỡ việc nhà, học tốt', 'Cãi cha mẹ', 'Đòi quà liên tục'], 1, 'Vâng lời và giúp việc nhà là biết ơn cha mẹ.'),
    Q('Bài thơ "Công cha như núi…" nói về?', ['Công lao cha mẹ', 'Cảnh đẹp quê hương', 'Tình bạn', 'Học tập'], 0, 'Câu "Công cha như núi Thái Sơn, Nghĩa mẹ như nước trong nguồn chảy ra" nói về công lao cha mẹ.'),
    Q('Mẹ đi làm về mệt, em nên?', ['Đòi mẹ chơi cùng ngay', 'Mặc kệ mẹ', 'Đòi mẹ nấu món em thích', 'Pha nước, bóp vai cho mẹ'], 3, 'Quan tâm khi mẹ mệt là biết ơn.'),
    Q('Ngày của Mẹ, em làm gì?', ['Làm thiệp hoặc giúp mẹ việc nhà', 'Đòi mẹ mua quà cho em', 'Không quan tâm', 'Đi chơi cả ngày'], 0, 'Tự tay làm thiệp hoặc giúp việc là cách hay nhất.'),
  ]),

  M(5, 'Kính trọng người già', [
    Q('Người già cần?', ['Bị quát mắng', 'Bị chê là chậm', 'Sự kính trọng, quan tâm, chăm sóc', 'Bị bỏ mặc'], 2, 'Người già cần sự kính trọng và chăm sóc.'),
    Q('Trên xe buýt, thấy cụ già không có chỗ ngồi, em nên?', ['Quay mặt đi', 'Cười nhạo cụ', 'Nhường ghế cho cụ', 'Giả vờ ngủ'], 2, 'Nhường ghế cho người già là nét đẹp văn hoá.'),
    Q('Bà cụ qua đường khó khăn, em nên?', ['Đi vượt qua bà', 'Cười rồi đi', 'Mặc kệ', 'Dắt bà qua đường'], 3, 'Giúp người già qua đường là việc tốt.'),
    Q('Lời nào lễ phép với người già?', ['"Cháu chào cụ ạ"', '"Đi đi cho con qua"', '"Ê cụ"', '"Ông già"'], 0, '"Cháu chào cụ ạ" là cách xưng hô lễ phép.'),
    Q('Ngày Quốc tế Người cao tuổi là?', ['1/5', '1/6', '1/1', '1/10'], 3, 'Ngày Quốc tế Người cao tuổi là 1/10.'),
  ]),

  M(6, 'Tự lập', [
    Q('Tự lập là?', ['Bắt người khác làm hộ', 'Tự làm việc của mình, không ỉ lại', 'Không cần ai giúp dù khó', 'Chỉ làm khi có thưởng'], 1, 'Tự lập là tự lo việc của mình.'),
    Q('Việc nào HS lớp 5 có thể tự làm?', ['Tự nấu bữa lớn', 'Tự gấp chăn, soạn sách vở', 'Tự lái xe máy', 'Tự đi làm kiếm tiền'], 1, 'Gấp chăn, soạn sách là việc phù hợp lứa tuổi.'),
    Q('Bạn nào tự lập?', ['Bạn Lan để mẹ soạn cặp', 'Bạn Hoa tự chuẩn bị bữa sáng đơn giản', 'Bạn Nam đợi bố chở mới đi học', 'Bạn Tú đợi mẹ đút mới ăn'], 1, 'Tự chuẩn bị bữa sáng đơn giản là tự lập.'),
    Q('Tự lập có lợi gì?', ['Em mệt hơn', 'Em trưởng thành và đỡ đần cha mẹ', 'Em mất bạn', 'Em bị cô phạt'], 1, 'Tự lập giúp em trưởng thành và đỡ đần cha mẹ.'),
    Q('Tự lập KHÔNG có nghĩa là?', ['Có ý thức trách nhiệm', 'Biết tự lo bản thân', 'Tự làm việc trong khả năng', 'Không bao giờ nhờ ai giúp dù việc quá sức'], 3, 'Việc quá sức vẫn có thể nhờ giúp, không phải là yếu kém.'),
  ]),

  M(7, 'Tự chủ', [
    Q('Tự chủ là?', ['Biết kiểm soát cảm xúc và hành vi', 'Làm theo bạn', 'Tức là nổi nóng ngay', 'Cứ thích thì làm'], 0, 'Tự chủ là làm chủ cảm xúc và hành vi của mình.'),
    Q('Khi bạn trêu chọc, em tự chủ là?', ['Đánh bạn ngay', 'Bình tĩnh khuyên bạn dừng', 'Mách cô nhưng không thật', 'Khóc oà'], 1, 'Bình tĩnh khuyên bạn là biểu hiện tự chủ.'),
    Q('Bạn rủ trốn học đi chơi, em tự chủ?', ['Nhận lời rồi mách cô', 'Rủ thêm bạn khác', 'Từ chối và khuyên bạn đi học', 'Đi theo cho vui'], 2, 'Từ chối điều xấu là tự chủ.'),
    Q('Người không tự chủ thường?', ['Được mọi người tin', 'Học giỏi', 'Có nhiều bạn tốt', 'Dễ bị bạn xấu lôi kéo'], 3, 'Thiếu tự chủ dễ bị lôi kéo.'),
    Q('Em làm gì khi thấy mình sắp nổi nóng?', ['Đánh bạn', 'Đập bàn', 'Hít thở sâu, đếm 1-10', 'Hét to'], 2, 'Hít thở sâu giúp lấy lại bình tĩnh.'),
  ]),

  M(8, 'Có trách nhiệm với hành vi của mình', [
    Q('Có trách nhiệm là?', ['Trốn tránh', 'Đổ lỗi cho người khác', 'Khóc cho qua chuyện', 'Dám nhận và sửa lỗi khi mình làm sai'], 3, 'Trách nhiệm là dám nhận và sửa lỗi.'),
    Q('Em làm vỡ bình hoa, em nên?', ['Thừa nhận, xin lỗi và dọn dẹp', 'Đổ lỗi cho em', 'Bỏ chạy', 'Giấu mảnh vỡ đi'], 0, 'Thừa nhận và dọn dẹp là có trách nhiệm.'),
    Q('Bạn nào có trách nhiệm?', ['Bạn Lan giấu điểm kém', 'Bạn Tú đổ lỗi cho bố mẹ không nhắc', 'Bạn Nam chép bài bạn', 'Bạn Hoa nhận bài làm chưa tốt và làm lại'], 3, 'Nhận và sửa lỗi là có trách nhiệm.'),
    Q('Người có trách nhiệm sẽ?', ['Bị bố mẹ phạt', 'Được mọi người tin tưởng', 'Bị bạn xa lánh', 'Bị cô ghét'], 1, 'Người có trách nhiệm được tin tưởng.'),
    Q('Em hứa giúp bạn ôn bài nhưng quên, em nên?', ['Xin lỗi bạn và sắp xếp ôn lại', 'Lờ đi như không có gì', 'Đổ lỗi bận', 'Tránh mặt bạn'], 0, 'Giữ lời hứa và sửa sai là trách nhiệm.'),
  ]),

  M(9, 'Tôn trọng phụ nữ', [
    Q('Vì sao cần tôn trọng phụ nữ?', ['Vì sợ bị mắng', 'Vì bắt buộc', 'Vì phụ nữ yếu đuối', 'Vì phụ nữ có vai trò quan trọng trong gia đình và xã hội'], 3, 'Phụ nữ có vai trò quan trọng và đáng được tôn trọng.'),
    Q('Bạn nam tôn trọng bạn nữ là?', ['Không trêu chọc, biết giúp đỡ bạn nữ', 'Đẩy bạn nữ ngã', 'Cười nhạo bạn nữ khóc', 'Trêu kéo tóc bạn nữ'], 0, 'Không trêu và biết giúp đỡ là tôn trọng.'),
    Q('Ngày Quốc tế Phụ nữ là?', ['1/6', '20/10', '8/3', '2/9'], 2, '8/3 là Ngày Quốc tế Phụ nữ.'),
    Q('Ngày Phụ nữ Việt Nam là?', ['19/5', '8/3', '22/12', '20/10'], 3, '20/10 là Ngày Phụ nữ Việt Nam.'),
    Q('Việc làm tôn trọng mẹ, chị, bà của em?', ['Trêu chị khóc', 'Đòi mẹ phục vụ', 'Giúp việc nhà, tặng hoa ngày 8/3 hoặc 20/10', 'Quát bà'], 2, 'Giúp việc nhà và tặng hoa là tôn trọng phụ nữ.'),
  ]),

  M(10, 'Hợp tác với mọi người xung quanh', [
    Q('Hợp tác là?', ['Không cần ai', 'Bắt người khác làm', 'Cùng nhau làm việc để đạt mục tiêu chung', 'Mỗi người làm riêng'], 2, 'Hợp tác là làm việc cùng nhau vì mục tiêu chung.'),
    Q('Khi làm việc nhóm, em nên?', ['Cãi nhau với bạn', 'Mặc kệ nhóm', 'Lắng nghe, chia sẻ ý kiến và phân công công bằng', 'Tự làm hết để được khen'], 2, 'Lắng nghe và phân công công bằng là hợp tác tốt.'),
    Q('Hợp tác mang lại lợi ích gì?', ['Không lợi gì', 'Mất nhiều thời gian', 'Công việc nhanh, hiệu quả, gắn kết mọi người', 'Cãi nhau nhiều'], 2, 'Hợp tác giúp việc nhanh và gắn kết.'),
    Q('Bạn nào hợp tác tốt?', ['Bạn Nam bỏ nhóm', 'Bạn Tú tự ý làm theo ý mình', 'Bạn Lan từ chối góp ý', 'Bạn Hoa lắng nghe ý kiến cả nhóm rồi đưa ra giải pháp'], 3, 'Lắng nghe và tổng hợp là hợp tác tốt.'),
    Q('Trong tổ trực nhật, em nên?', ['Cùng bạn phân công và làm hết phần của mình', 'Để bạn làm hết', 'Bỏ về sớm', 'Chỉ làm phần dễ'], 0, 'Phân công và làm hết phần mình là hợp tác.'),
  ]),

  M(11, 'Tình bạn', [
    Q('Người bạn tốt là?', ['Người luôn chia sẻ vui buồn và giúp em tiến bộ', 'Người làm theo ý em', 'Người cho em chép bài', 'Người chỉ chơi vui với em'], 0, 'Bạn tốt cùng tiến bộ và chia sẻ vui buồn.'),
    Q('Khi bạn buồn, em nên?', ['Lắng nghe và an ủi bạn', 'Cười nhạo bạn', 'Mách cả lớp', 'Tránh xa bạn'], 0, 'Lắng nghe là cách an ủi tốt.'),
    Q('Khi bạn làm sai, em nên?', ['Góp ý chân thành để bạn sửa', 'Đi nói xấu bạn', 'Không quan tâm', 'Mách thầy cô để bạn bị phạt'], 0, 'Góp ý chân thành là bạn tốt.'),
    Q('Câu tục ngữ nào về tình bạn?', ['"Ăn quả nhớ kẻ trồng cây"', '"Học thầy không tày học bạn"', '"Có công mài sắt có ngày nên kim"', '"Tay làm hàm nhai"'], 1, '"Học thầy không tày học bạn" nói về vai trò người bạn.'),
    Q('Bạn rủ em chơi điện tử thay vì học, em nên?', ['Khuyên bạn cùng học rồi chơi sau', 'Tuyệt giao với bạn', 'Bỏ học đi chơi với bạn', 'Mách cô để bạn bị phạt'], 0, 'Khuyên bạn cùng học là bạn tốt và biết tự chủ.'),
  ]),

  M(12, 'Yêu hoà bình', [
    Q('Hoà bình là?', ['Cãi nhau', 'Tranh giành', 'Không có chiến tranh, mọi người sống yên ổn', 'Có chiến tranh'], 2, 'Hoà bình là không chiến tranh, sống yên ổn.'),
    Q('Em yêu hoà bình bằng cách?', ['Cãi nhau với anh chị', 'Sống thân ái, không gây gổ với bạn', 'Đánh nhau với bạn', 'Trêu chọc bạn khác'], 1, 'Sống thân ái là biểu hiện yêu hoà bình.'),
    Q('Ngày Quốc tế Hoà bình là?', ['8/3', '2/9', '21/9', '1/6'], 2, 'Ngày Quốc tế Hoà bình là 21/9.'),
    Q('Biểu tượng của hoà bình là?', ['Đại bàng', 'Chim sẻ nâu', 'Diều hâu', 'Chim bồ câu trắng'], 3, 'Chim bồ câu trắng là biểu tượng hoà bình.'),
    Q('Khi có xung đột với bạn, em nên?', ['Đánh nhau', 'Tuyệt giao luôn', 'Mách cô để bạn bị phạt', 'Bình tĩnh nói chuyện để giải quyết'], 3, 'Đối thoại hoà bình là cách giải quyết tốt.'),
  ]),

  M(13, 'Em yêu Tổ quốc Việt Nam', [
    Q('Quốc kì Việt Nam là?', ['Cờ ba sọc', 'Cờ trắng', 'Cờ đỏ sao vàng', 'Cờ xanh'], 2, 'Quốc kì Việt Nam là cờ đỏ sao vàng.'),
    Q('Quốc ca Việt Nam là?', ['Quê hương', 'Bài ca hi vọng', 'Tiến quân ca', 'Trường ca sông Lô'], 2, 'Quốc ca là bài "Tiến quân ca" của Văn Cao.'),
    Q('Khi hát Quốc ca, em nên?', ['Nói chuyện riêng', 'Ngồi xem', 'Vừa hát vừa cười', 'Đứng nghiêm, mắt nhìn quốc kì'], 3, 'Đứng nghiêm chào cờ là tôn trọng Tổ quốc.'),
    Q('Em yêu Tổ quốc bằng cách?', ['Không quan tâm', 'Bỏ học', 'Chê đất nước mình', 'Học tập tốt, giữ gìn truyền thống'], 3, 'Học tốt là cách yêu Tổ quốc thiết thực.'),
    Q('Bác Hồ là?', ['Một ca sĩ', 'Một thương nhân', 'Vị lãnh tụ kính yêu của dân tộc Việt Nam', 'Một nhà thơ'], 2, 'Bác Hồ là vị lãnh tụ kính yêu.'),
  ]),

  M(14, 'Giữ gìn truyền thống văn hoá dân tộc', [
    Q('Truyền thống văn hoá VN gồm?', ['Áo dài, phở, bánh chưng, dân ca, lễ hội', 'Chỉ có món Tây', 'Chỉ có công nghệ hiện đại', 'Chỉ có nhạc nước ngoài'], 0, 'Áo dài, phở, bánh chưng… là truyền thống VN.'),
    Q('Em giữ gìn truyền thống bằng cách?', ['Chỉ thích đồ ngoại', 'Chê truyền thống cũ kĩ', 'Không quan tâm', 'Tìm hiểu, mặc áo dài dịp lễ, ăn món truyền thống'], 3, 'Tìm hiểu và trân trọng là giữ gìn truyền thống.'),
    Q('Lễ hội truyền thống nổi tiếng VN?', ['Hội Lim, hội Gióng, hội đền Hùng', 'Lễ tạ ơn', 'Halloween', 'Carnival'], 0, 'Đây là các lễ hội truyền thống VN.'),
    Q('Trang phục truyền thống của phụ nữ VN?', ['Áo dài', 'Áo vest', 'Áo kimono', 'Đầm dạ hội'], 0, 'Áo dài là trang phục truyền thống VN.'),
    Q('Khi bạn nước ngoài hỏi về VN, em nên?', ['Chê VN', 'Im lặng', 'Tự hào giới thiệu nét đẹp văn hoá VN', 'Nói VN không có gì'], 2, 'Tự hào giới thiệu là yêu văn hoá dân tộc.'),
  ]),

  M(15, 'Liên Hợp Quốc — giới thiệu', [
    Q('Liên Hợp Quốc là?', ['Một câu lạc bộ', 'Một công ty', 'Một trường học', 'Tổ chức quốc tế lớn nhất thế giới'], 3, 'Liên Hợp Quốc (UN) là tổ chức quốc tế lớn nhất.'),
    Q('Liên Hợp Quốc thành lập năm?', ['1900', '2000', '1975', '1945'], 3, 'Liên Hợp Quốc thành lập ngày 24/10/1945.'),
    Q('Trụ sở chính của Liên Hợp Quốc ở?', ['Hà Nội', 'Paris (Pháp)', 'Geneva (Thụy Sĩ)', 'New York (Mỹ)'], 3, 'Trụ sở chính của LHQ ở New York.'),
    Q('Việt Nam gia nhập Liên Hợp Quốc năm?', ['2000', '1990', '1945', '1977'], 3, 'Việt Nam gia nhập LHQ năm 1977.'),
    Q('Liên Hợp Quốc giúp gì?', ['Giữ hoà bình, hợp tác phát triển giữa các nước', 'Gây chiến tranh', 'Buôn bán', 'Tổ chức thi đấu'], 0, 'LHQ giữ hoà bình và thúc đẩy hợp tác.'),
  ]),

  M(16, 'Bảo vệ tài nguyên thiên nhiên', [
    Q('Tài nguyên thiên nhiên là?', ['Đất, nước, rừng, khoáng sản…', 'Đồ nhân tạo', 'Sách vở', 'Tiền bạc'], 0, 'Tài nguyên thiên nhiên là đất, nước, rừng…'),
    Q('Vì sao phải bảo vệ tài nguyên?', ['Vì có vô hạn', 'Vì tài nguyên có hạn, dùng cạn sẽ hết', 'Vì sách bảo', 'Vì không quan trọng'], 1, 'Tài nguyên có hạn, cần dùng tiết kiệm.'),
    Q('Việc làm bảo vệ tài nguyên rừng?', ['Trồng cây, không chặt phá rừng bừa bãi', 'Đốt rừng làm rẫy', 'Săn bắn động vật quý', 'Khai thác gỗ trái phép'], 0, 'Trồng cây và bảo vệ rừng là đúng.'),
    Q('Em tiết kiệm nước bằng cách?', ['Tắm rất lâu', 'Khoá vòi khi đánh răng, không xả nước thừa', 'Mở nước chảy cả ngày', 'Đổ nước ra sân chơi'], 1, 'Khoá vòi và không xả thừa là tiết kiệm nước.'),
    Q('Em tiết kiệm điện bằng cách?', ['Tắt đèn khi ra khỏi phòng', 'Để ti vi cả đêm', 'Bật đèn cả ngày', 'Mở quạt và điều hoà cùng lúc'], 0, 'Tắt đèn khi không dùng là tiết kiệm điện.'),
  ]),

  M(17, 'Bảo vệ môi trường', [
    Q('Môi trường gồm?', ['Chỉ có không khí', 'Không khí, nước, đất, cây xanh quanh ta', 'Chỉ có cây', 'Chỉ có nước'], 1, 'Môi trường gồm mọi thứ quanh ta.'),
    Q('Hành vi bảo vệ môi trường?', ['Bỏ rác đúng nơi, trồng cây, không xả rác', 'Đổ rác xuống sông', 'Đốt rác bừa bãi', 'Hái hoa bẻ cành'], 0, 'Bỏ rác đúng nơi và trồng cây là bảo vệ môi trường.'),
    Q('Em phân loại rác bằng cách?', ['Trộn lẫn hết', 'Vứt xuống sông', 'Đốt tất cả', 'Tách rác hữu cơ – tái chế – nguy hại'], 3, 'Phân loại rác giúp tái chế và xử lí đúng.'),
    Q('Ngày Môi trường Thế giới là?', ['5/6', '1/6', '22/4', '8/3'], 0, 'Ngày Môi trường Thế giới là 5/6.'),
    Q('Tác hại của ô nhiễm môi trường?', ['Tiết kiệm tiền', 'Gây bệnh, biến đổi khí hậu, hại động vật', 'Vô hại', 'Làm đẹp'], 1, 'Ô nhiễm gây nhiều tác hại nghiêm trọng.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Bài học ôn tập kì I chủ yếu về?', ['Khoa học', 'Biết ơn, kính trọng, tự lập, tự chủ, trách nhiệm', 'Toán học', 'Lịch sử'], 1, 'Các bài học kì I xoay quanh đạo đức cá nhân.'),
    Q('Câu nào KHÔNG đúng?', ['Vâng lời mọi điều dù sai', 'Biết ơn cha mẹ', 'Tự lập trong việc của mình', 'Có trách nhiệm với hành vi'], 0, 'Vâng lời cần đúng đắn, không phải mọi điều.'),
    Q('Là HS lớp 5 gương mẫu, em nên?', ['Bắt nạt em nhỏ', 'Học tốt, ngoan ngoãn, giúp đỡ em nhỏ', 'Lười học', 'Cãi thầy cô'], 1, 'Gương mẫu là học tốt và biết giúp em nhỏ.'),
    Q('Hành vi tự chủ là?', ['Đánh nhau', 'Nổi nóng ngay', 'Theo bạn xấu', 'Bình tĩnh khi bị trêu, từ chối điều xấu'], 3, 'Tự chủ là làm chủ cảm xúc và hành vi.'),
    Q('Có trách nhiệm với hành vi là?', ['Trốn tránh', 'Khóc lóc', 'Đổ lỗi', 'Dám nhận lỗi và sửa sai'], 3, 'Trách nhiệm là nhận và sửa lỗi.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Tôn trọng phụ nữ (tiếp)', [
    Q('Trong gia đình, vai trò của mẹ?', ['Rất quan trọng, cần được kính trọng', 'Chỉ lo việc bếp núc trong nhà', 'Chỉ nấu cơm', 'Chỉ giặt giũ'], 0, 'Mẹ có vai trò rất quan trọng.'),
    Q('Bạn nam KHÔNG nên?', ['Chào hỏi lễ phép', 'Trêu kéo tóc, đẩy bạn nữ', 'Nhường bạn nữ', 'Giúp bạn nữ bê bàn'], 1, 'Không trêu chọc bạn nữ.'),
    Q('Khi mẹ và chị làm việc nhà, em nên?', ['Đi chơi', 'Ngồi xem', 'Cùng làm, không ỉ lại vì là con trai', 'Đòi ăn'], 2, 'Nam hay nữ đều cần chia sẻ việc nhà.'),
    Q('Bà Triệu, Hai Bà Trưng là?', ['Nữ thi sĩ thời Lý', 'Nữ anh hùng dân tộc', 'Hoạ sĩ', 'Nhà văn'], 1, 'Đây là các nữ anh hùng dân tộc VN.'),
    Q('Em chúc mẹ ngày 8/3 bằng?', ['Im lặng', 'Đòi mẹ mua quà', 'Trêu mẹ', 'Lời chúc chân thành, thiệp tự làm'], 3, 'Lời chúc và thiệp tự làm là tốt nhất.'),
  ]),

  M(20, 'Hợp tác với mọi người (thực hành)', [
    Q('Khi làm dự án nhóm, em nên?', ['Phân công, tôn trọng ý kiến mọi người', 'Tự làm hết', 'Cãi nhau', 'Bỏ nhóm'], 0, 'Phân công và tôn trọng là hợp tác.'),
    Q('Nếu nhóm có bạn lười, em nên?', ['Khuyên nhẹ nhàng và động viên bạn cùng làm', 'Mách cô', 'Đuổi bạn ra', 'Tự làm hết'], 0, 'Khuyên và động viên là cách tốt.'),
    Q('Trong tổ trực nhật, hợp tác là?', ['Cãi nhau', 'Phân công và cùng làm cho xong', 'Mỗi người một ý', 'Không ai làm'], 1, 'Phân công rõ và cùng làm là hợp tác.'),
    Q('Hợp tác giúp em?', ['Mất bạn', 'Không lợi gì', 'Học được nhiều từ bạn, công việc nhanh', 'Bị mệt'], 2, 'Hợp tác giúp học hỏi và làm việc nhanh.'),
    Q('Bạn nào hợp tác KÉM?', ['Bạn ai làm việc nấy, không phối hợp', 'Bạn Lan đưa ý kiến', 'Bạn Hoa lắng nghe nhóm', 'Bạn Nam phân công công bằng'], 0, 'Không phối hợp là kém hợp tác.'),
  ]),

  M(21, 'Tình bạn (thực hành)', [
    Q('Bạn xin chép bài kiểm tra, em nên?', ['Từ chối và rủ bạn cùng ôn lại', 'Cho chép vì sợ mất bạn', 'Mách cô để bạn bị phạt', 'Cho chép cho vui'], 0, 'Từ chối và giúp bạn ôn mới là bạn tốt.'),
    Q('Bạn buồn vì điểm kém, em nên?', ['Động viên và giúp bạn ôn lại', 'Khoe điểm cao của mình', 'Cười nhạo', 'Nói bạn ngu'], 0, 'Động viên và giúp đỡ là bạn tốt.'),
    Q('Bạn bị bắt nạt, em nên?', ['Cười a dua', 'Bênh vực và báo người lớn', 'Mặc kệ', 'Quay clip'], 1, 'Bênh vực và báo người lớn là đúng.'),
    Q('Tình bạn đẹp dựa trên?', ['Sự chân thành, tin tưởng, giúp nhau tiến bộ', 'Sự lợi dụng', 'Tiền bạc', 'Sự nịnh nọt'], 0, 'Chân thành và cùng tiến bộ là tình bạn đẹp.'),
    Q('Khi bạn làm em buồn, em nên?', ['Đi nói xấu bạn', 'Tuyệt giao', 'Bình tĩnh nói chuyện thẳng thắn', 'Giận lâu'], 2, 'Trò chuyện thẳng thắn để hiểu nhau.'),
  ]),

  M(22, 'Em yêu quê hương — Tết cổ truyền', [
    Q('Tết Nguyên Đán là?', ['Tết của phương Tây', 'Ngày thường', 'Lễ hội nước ngoài', 'Tết cổ truyền lớn nhất của dân tộc VN'], 3, 'Tết Nguyên Đán là Tết cổ truyền VN.'),
    Q('Phong tục đẹp ngày Tết?', ['Đốt pháo lậu', 'Ăn nhậu say', 'Chúc Tết ông bà, lì xì, ăn bánh chưng', 'Cãi nhau'], 2, 'Chúc Tết và lì xì là phong tục đẹp.'),
    Q('Khi nhận lì xì, em nên?', ['Cảm ơn lễ phép và chúc lại', 'Mở ra đếm ngay', 'Chê ít', 'Bỏ vào túi không nói'], 0, 'Cảm ơn và chúc lại là lễ phép.'),
    Q('Bánh truyền thống Tết miền Bắc?', ['Bánh mì', 'Bánh donut', 'Bánh xèo', 'Bánh chưng'], 3, 'Bánh chưng là bánh Tết miền Bắc.'),
    Q('Em yêu quê hương ngày Tết bằng cách?', ['Cùng gia đình giữ phong tục, giúp việc nhà', 'Phá đồ đạc', 'Đi chơi không về', 'Cãi cha mẹ'], 0, 'Cùng gia đình giữ phong tục là yêu quê.'),
  ]),

  M(23, 'Em yêu hoà bình (thực hành)', [
    Q('Trong lớp, em yêu hoà bình bằng cách?', ['Không gây gổ, hoà giải khi bạn cãi nhau', 'Khích bạn đánh nhau', 'Trêu chọc', 'Chia phe'], 0, 'Hoà giải xung đột là yêu hoà bình.'),
    Q('Khi xem tin chiến tranh, em cảm thấy?', ['Tò mò muốn xem thêm cảnh đánh nhau', 'Không quan tâm', 'Thương xót và mong hoà bình', 'Vui mừng'], 2, 'Cảm thông với nạn nhân và mong hoà bình.'),
    Q('Em viết thư cho bạn nước ngoài, nội dung?', ['Khoe vũ khí', 'Đe doạ', 'Chê bạn', 'Chia sẻ về hoà bình, hữu nghị'], 3, 'Chia sẻ hoà bình là yêu hoà bình.'),
    Q('Biểu tượng hoà bình thế giới?', ['Đại bàng', 'Chim bồ câu trắng và cành ô liu', 'Đại bàng và lá cờ đỏ', 'Thanh kiếm bắt chéo trên khiên'], 1, 'Bồ câu trắng và cành ô liu là biểu tượng hoà bình.'),
    Q('Việt Nam có yêu hoà bình không?', ['Không quan tâm', 'Có, Việt Nam luôn yêu chuộng hoà bình', 'Không, Việt Nam thích gây chiến với nước khác', 'Chỉ thích chiến tranh'], 1, 'Việt Nam luôn yêu chuộng hoà bình.'),
  ]),

  M(24, 'Em yêu Tổ quốc Việt Nam (tiếp)', [
    Q('Thủ đô Việt Nam là?', ['TP. Hồ Chí Minh', 'Cố đô Huế', 'Đà Nẵng', 'Hà Nội'], 3, 'Hà Nội là thủ đô Việt Nam.'),
    Q('Quốc khánh Việt Nam là?', ['2/9', '30/4', '1/5', '20/11'], 0, 'Quốc khánh là 2/9, ngày Bác Hồ đọc Tuyên ngôn Độc lập.'),
    Q('Ngày Giải phóng miền Nam là?', ['2/9', '30/4', '19/5', '22/12'], 1, '30/4/1975 là ngày Giải phóng miền Nam, thống nhất đất nước.'),
    Q('Em tự hào về Việt Nam vì?', ['Không có gì', 'Lịch sử lâu đời, văn hoá phong phú, con người anh dũng', 'VN nhỏ', 'VN nghèo'], 1, 'VN có lịch sử và văn hoá đáng tự hào.'),
    Q('Khi nghe Quốc ca, em?', ['Cười đùa', 'Vừa nghe vừa nói chuyện', 'Đứng nghiêm trang', 'Ngồi xem điện thoại'], 2, 'Đứng nghiêm khi nghe Quốc ca.'),
  ]),

  M(25, 'Liên Hợp Quốc (tiếp)', [
    Q('UNICEF là tổ chức của LHQ giúp?', ['Trẻ em', 'Doanh nghiệp', 'Người già', 'Quân đội'], 0, 'UNICEF là Quỹ Nhi đồng LHQ.'),
    Q('WHO là tổ chức về?', ['Kinh tế', 'Giáo dục', 'Y tế thế giới', 'Quân sự'], 2, 'WHO là Tổ chức Y tế Thế giới.'),
    Q('UNESCO là tổ chức về?', ['Y tế và phòng chống dịch bệnh', 'Thể thao', 'Kinh tế', 'Giáo dục, khoa học, văn hoá'], 3, 'UNESCO là tổ chức về giáo dục, khoa học, văn hoá.'),
    Q('Việt Nam là thành viên LHQ từ năm?', ['2000', '1945', '1990', '1977'], 3, 'VN gia nhập LHQ năm 1977.'),
    Q('Quyền cơ bản của trẻ em được LHQ bảo vệ?', ['Quyền sống, học tập, được bảo vệ và phát triển', 'Quyền không vâng lời', 'Quyền bắt nạt', 'Quyền bỏ học'], 0, 'LHQ bảo vệ các quyền cơ bản của trẻ em.'),
  ]),

  M(26, 'Quyền của trẻ em', [
    Q('Trẻ em có quyền?', ['Bỏ học', 'Không vâng lời', 'Bắt nạt người khác', 'Được sống, học tập, vui chơi, được bảo vệ'], 3, 'Trẻ em có các quyền cơ bản được pháp luật bảo vệ.'),
    Q('Bên cạnh quyền, trẻ em còn có?', ['Chỉ quyền', 'Không có gì', 'Chỉ chơi', 'Bổn phận với gia đình, nhà trường, xã hội'], 3, 'Trẻ em có quyền và bổn phận.'),
    Q('Em thấy bạn bị đánh, em nên?', ['Hùa theo trêu chọc bạn bị đánh', 'Báo người lớn để bảo vệ bạn', 'Quay clip', 'Bỏ mặc'], 1, 'Báo người lớn để bảo vệ bạn.'),
    Q('Ngày Quốc tế Thiếu nhi?', ['20/11', '2/9', '8/3', '1/6'], 3, '1/6 là Ngày Quốc tế Thiếu nhi.'),
    Q('Bổn phận quan trọng của trẻ em?', ['Cãi cha mẹ', 'Học tập tốt, vâng lời cha mẹ, kính thầy yêu bạn', 'Bỏ học', 'Chỉ chơi'], 1, 'Đây là bổn phận quan trọng nhất.'),
  ]),

  M(27, 'Bảo vệ tài nguyên thiên nhiên (tiếp)', [
    Q('Rừng có vai trò?', ['Điều hoà khí hậu, giữ đất, cho gỗ', 'Chỉ để lấy củi đun bếp', 'Chỉ để đốt', 'Cản trở giao thông'], 0, 'Rừng có vai trò rất quan trọng.'),
    Q('Bảo vệ rừng là?', ['Săn bắn', 'Khai thác trái phép', 'Trồng cây, không chặt phá, không đốt', 'Đốt rừng'], 2, 'Trồng cây và bảo vệ rừng là đúng.'),
    Q('Tài nguyên nước cần?', ['Lãng phí', 'Xả thải bừa', 'Sử dụng tiết kiệm, không gây ô nhiễm', 'Không quan tâm'], 2, 'Nước cần tiết kiệm và bảo vệ.'),
    Q('Khoáng sản (than, dầu) cần?', ['Vứt bỏ', 'Khai thác bừa bãi', 'Không khai thác', 'Khai thác hợp lí, có kế hoạch'], 3, 'Khoáng sản có hạn nên cần khai thác hợp lí.'),
    Q('Bạn nào bảo vệ tài nguyên?', ['Bạn Tú để vòi nước chảy', 'Bạn Nam bẻ cành cây', 'Bạn Lan đốt rác trong nhà', 'Bạn Hoa tắt đèn khi ra khỏi phòng'], 3, 'Tắt đèn là tiết kiệm điện, bảo vệ tài nguyên.'),
  ]),

  M(28, 'Bảo vệ môi trường (tiếp)', [
    Q('Ô nhiễm không khí do?', ['Tắt máy khi dừng', 'Trồng cây', 'Khói xe, khói nhà máy, đốt rác', 'Đi xe đạp'], 2, 'Khói bụi là nguồn ô nhiễm không khí.'),
    Q('Để giảm ô nhiễm, em nên?', ['Xả khói', 'Đốt rác bừa bãi', 'Chặt cây', 'Đi bộ, đi xe đạp, trồng cây'], 3, 'Đi bộ, đi xe đạp giảm ô nhiễm.'),
    Q('Phân loại rác giúp?', ['Tốn tiền', 'Không lợi gì', 'Mất thời gian vô ích', 'Tái chế và xử lí đúng'], 3, 'Phân loại giúp tái chế hiệu quả.'),
    Q('Rác hữu cơ là?', ['Vỏ hoa quả, thức ăn thừa', 'Kim loại', 'Chai nhựa', 'Túi ni-lông đựng đồ'], 0, 'Rác hữu cơ là rác có thể phân huỷ.'),
    Q('Túi nilon có hại vì?', ['Khó phân huỷ, gây ô nhiễm lâu dài', 'Tốt cho đất', 'Dễ phân huỷ', 'Có lợi'], 0, 'Túi nilon khó phân huỷ, hại môi trường.'),
  ]),

  M(29, 'Em yêu lao động', [
    Q('Lao động là?', ['Chỉ người lớn làm', 'Hoạt động làm ra của cải vật chất, tinh thần', 'Việc xấu', 'Không cần thiết'], 1, 'Lao động tạo ra của cải.'),
    Q('Em yêu lao động bằng cách?', ['Chê việc', 'Trốn việc', 'Lười biếng', 'Giúp việc nhà, lao động ở trường'], 3, 'Tham gia lao động phù hợp là yêu lao động.'),
    Q('Câu tục ngữ nào về lao động?', ['"Đói cho sạch rách cho thơm"', '"Có công mài sắt có ngày nên kim"', '"Ăn quả nhớ kẻ trồng cây"', '"Tay làm hàm nhai, tay quai miệng trễ"'], 3, '"Tay làm hàm nhai" nói về vai trò lao động.'),
    Q('Bạn nào yêu lao động?', ['Bạn Hoa giúp mẹ rửa bát', 'Bạn Nam ngồi xem', 'Bạn Lan chê việc bẩn', 'Bạn Tú trốn lao động trường'], 0, 'Giúp mẹ là yêu lao động.'),
    Q('Lao động giúp em?', ['Mất bạn', 'Mệt mỏi vô ích', 'Khoẻ mạnh, biết quý sức lao động', 'Không lợi gì'], 2, 'Lao động giúp khoẻ và biết quý công sức.'),
  ]),

  M(30, 'Trung thực', [
    Q('Trung thực là?', ['Lừa lọc', 'Giấu giếm', 'Nói và làm đúng sự thật', 'Nói dối'], 2, 'Trung thực là nói và làm đúng sự thật.'),
    Q('Em nhặt được tiền rơi, em nên?', ['Tìm trả người mất hoặc nộp cô', 'Giữ làm của riêng', 'Giấu đi', 'Mua đồ chơi'], 0, 'Trả lại của rơi là trung thực.'),
    Q('Trong kiểm tra, em nên?', ['Tự làm, không nhìn bài bạn', 'Mang phao', 'Chép bài bạn', 'Hỏi bạn'], 0, 'Tự làm bài là trung thực.'),
    Q('Em làm sai, em nên?', ['Đổ lỗi cho người khác', 'Trốn tránh', 'Thừa nhận và xin lỗi', 'Nói dối'], 2, 'Thừa nhận lỗi là trung thực.'),
    Q('Người trung thực được?', ['Mọi người tin yêu', 'Cô ghét', 'Không ai chơi', 'Bạn xa lánh'], 0, 'Người trung thực được tin yêu.'),
  ]),

  M(31, 'Tự trọng', [
    Q('Tự trọng là?', ['Coi trọng phẩm giá bản thân', 'Tự kiêu', 'Khinh thường mình', 'Coi mình hơn mọi người'], 0, 'Tự trọng là coi trọng phẩm giá mình.'),
    Q('Người tự trọng?', ['Ăn cắp vặt', 'Lừa bạn', 'Không làm việc xấu, không hổ thẹn', 'Hay nói dối'], 2, 'Người tự trọng không làm việc xấu.'),
    Q('Bạn nào tự trọng?', ['Bạn Hoa không lấy đồ của bạn dù rất thích', 'Bạn Tú lấy lén bút bạn', 'Bạn Nam ăn cắp tiền mẹ', 'Bạn Lan nói dối cô'], 0, 'Không lấy đồ người khác là tự trọng.'),
    Q('Tự trọng KHÔNG có nghĩa là?', ['Giữ phẩm giá', 'Trung thực', 'Không làm việc xấu', 'Kiêu căng, coi thường người khác'], 3, 'Tự trọng không phải kiêu căng.'),
    Q('Khi bị trêu chọc, người tự trọng?', ['Đánh nhau', 'Nói xấu lại', 'Khóc lóc', 'Bình tĩnh, không trả đũa hèn hạ'], 3, 'Bình tĩnh và không trả đũa hèn là tự trọng.'),
  ]),

  M(32, 'Giữ lời hứa', [
    Q('Giữ lời hứa là?', ['Hứa cho qua', 'Quên ngay', 'Đổi ý liên tục', 'Làm đúng điều đã hứa'], 3, 'Giữ lời hứa là làm đúng điều đã hứa.'),
    Q('Trước khi hứa em nên?', ['Hứa rồi quên', 'Suy nghĩ kĩ xem mình có làm được không', 'Hứa cho vui', 'Hứa bừa'], 1, 'Suy nghĩ kĩ trước khi hứa.'),
    Q('Lỡ không giữ được lời hứa, em nên?', ['Trốn tránh', 'Xin lỗi và giải thích chân thành', 'Đổ lỗi', 'Im lặng'], 1, 'Xin lỗi và giải thích là đúng.'),
    Q('Người giữ lời hứa được?', ['Cô ghét', 'Mọi người tin tưởng', 'Bạn xa lánh', 'Không ai tin'], 1, 'Giữ lời hứa được mọi người tin tưởng.'),
    Q('Em hứa giúp bạn ôn bài Toán, em nên?', ['Quên luôn', 'Thu xếp đến đúng hẹn', 'Đi chơi', 'Hẹn lần khác liên tục'], 1, 'Đến đúng hẹn là giữ lời hứa.'),
  ]),

  M(33, 'Em là HS cuối cấp', [
    Q('HS lớp 5 cần chuẩn bị gì cho cấp 2?', ['Chỉ chơi game cho thoải mái', 'Học tốt, rèn nề nếp, kĩ năng tự học', 'Cãi cha mẹ', 'Lười học'], 1, 'Chuẩn bị kiến thức và nề nếp.'),
    Q('Em nên đối với em lớp dưới?', ['Chê bai', 'Bắt nạt', 'Yêu thương, làm gương', 'Cướp đồ chơi'], 2, 'Làm anh chị tốt cho em lớp dưới.'),
    Q('Khi lớp có em mới chuyển đến, em nên?', ['Trêu chọc', 'Bỏ mặc', 'Tẩy chay', 'Đón tiếp, làm quen, giúp đỡ bạn'], 3, 'Đón tiếp bạn mới là việc tốt.'),
    Q('Em tổ chức lễ ra trường, em nên?', ['Không quan tâm', 'Phá đám', 'Tham gia tích cực, ghi nhớ kỉ niệm', 'Đến muộn rồi về sớm cho xong'], 2, 'Tham gia tích cực ghi nhớ kỉ niệm.'),
    Q('Thái độ tốt khi lên cấp 2?', ['Chán nản', 'Tự tin, sẵn sàng học hỏi', 'Bỏ học', 'Lo lắng quá độ'], 1, 'Tự tin và sẵn sàng học hỏi.'),
  ]),

  M(34, 'Ôn tập học kì II', [
    Q('Bài học kì II xoay quanh?', ['Chỉ thể dục', 'Phụ nữ, hợp tác, bạn bè, Tổ quốc, LHQ, môi trường', 'Chỉ toán', 'Chỉ khoa học'], 1, 'Nhiều chủ đề đạo đức xã hội.'),
    Q('Yêu Tổ quốc là?', ['Học tốt, giữ truyền thống, bảo vệ môi trường VN', 'Chê đất nước', 'Bỏ học', 'Không quan tâm'], 0, 'Yêu Tổ quốc qua hành động cụ thể.'),
    Q('Hợp tác tốt cần?', ['Tự ý làm', 'Cãi nhau', 'Lắng nghe, chia sẻ, phân công công bằng', 'Bỏ nhóm'], 2, 'Hợp tác cần lắng nghe và phân công.'),
    Q('Bảo vệ môi trường là?', ['Lãng phí', 'Phá rừng', 'Xả rác', 'Bỏ rác đúng nơi, tiết kiệm điện nước'], 3, 'Hành vi cụ thể bảo vệ môi trường.'),
    Q('Trung thực là?', ['Lừa lọc', 'Giấu giếm', 'Nói và làm đúng sự thật', 'Nói dối'], 2, 'Trung thực là sự thật.'),
  ]),

  M(35, 'Tổng kết — Bước vào cấp 2', [
    Q('5 năm tiểu học đã dạy em?', ['Không gì cả', 'Chỉ ngủ', 'Kiến thức nền và đạo đức làm người', 'Chỉ chơi'], 2, 'Tiểu học cho em nền tảng kiến thức và đạo đức.'),
    Q('Em biết ơn thầy cô tiểu học bằng cách?', ['Học tốt ở cấp 2, vẫn lễ phép khi gặp lại', 'Tránh mặt', 'Không nhớ tên', 'Quên thầy cô'], 0, 'Học tốt và lễ phép là biết ơn thầy cô.'),
    Q('Khi rời tiểu học, em mang theo?', ['Không gì cả', 'Kỉ niệm đẹp và bài học đạo đức', 'Hờn dỗi', 'Buồn phiền'], 1, 'Kỉ niệm và bài học là hành trang quý.'),
    Q('Lên cấp 2, em cần?', ['Bỏ hết', 'Cãi thầy cô', 'Tiếp tục giữ đạo đức và học tốt', 'Chỉ chơi'], 2, 'Giữ đạo đức và học tốt suốt đời.'),
    Q('Lời chia tay đẹp với bạn bè?', ['Chúc nhau học tốt, giữ liên lạc', 'Hờn dỗi', 'Im lặng', 'Trêu nhau'], 0, 'Lời chúc chân thành và giữ liên lạc.'),
  ]),
];

export const P5DD_SCENARIOS = indexBy(P5DD_WEEKS);
