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
    Q('Lớp 5 là lớp cuối cấp của trường?', ['Mầm non','Tiểu học','THCS','THPT'], 1, 'Lớp 5 là lớp cuối cấp Tiểu học.'),
    Q('Là HS lớp 5, em cần?', ['Gương mẫu, học tốt để làm anh chị các em lớp dưới','Chỉ lo chơi vì sắp hết cấp','Ăn hiếp các em lớp dưới','Lười học vì cuối cấp'], 0, 'HS lớp 5 cần gương mẫu cho lớp dưới.'),
    Q('Em được giao làm tổ trưởng, em nên?', ['Hét bạn để bạn nghe','Nhẹ nhàng nhắc nhở và làm gương','Bắt bạn làm hộ phần của em','Mặc kệ tổ'], 1, 'Làm gương và nhắc nhẹ là cách dẫn dắt tổ.'),
    Q('Năm cuối tiểu học, em đặt mục tiêu nào?', ['Học tốt, rèn nề nếp để lên cấp 2','Nghỉ học cho khoẻ','Chỉ chơi','Cãi lại thầy cô'], 0, 'Đặt mục tiêu học tốt để chuẩn bị cấp 2.'),
    Q('Bạn nào xứng đáng là HS lớp 5?', ['Bạn Hoa giúp em lớp 1 buộc dây giày','Bạn Tú trêu em lớp 2 khóc','Bạn Lan tranh sân chơi của em lớp dưới','Bạn Nam đẩy ngã em nhỏ'], 0, 'Giúp em nhỏ là biểu hiện đàn anh đàn chị.'),
  ]),

  M(2, 'Biết ơn tổ tiên', [
    Q('Vì sao em phải biết ơn tổ tiên?', ['Vì tổ tiên đã sinh thành, gây dựng nên dòng họ','Vì sách bắt phải nhớ','Vì sợ bị mắng','Vì cô giáo dạy thế'], 0, 'Tổ tiên là cội nguồn của dòng họ, gia đình.'),
    Q('Việc làm nào thể hiện biết ơn tổ tiên?', ['Thắp hương, dọn dẹp bàn thờ tổ tiên cùng cha mẹ','Vẽ bậy lên ảnh thờ','Không tham gia giỗ chạp','Chê bàn thờ cũ kĩ'], 0, 'Cùng dọn bàn thờ và thắp hương là biết ơn tổ tiên.'),
    Q('Ngày Giỗ Tổ Hùng Vương là?', ['Mùng 10 tháng 3 âm lịch','Mùng 3 tháng 10 dương lịch','Mùng 2 tháng 9','Mùng 1 tháng 1'], 0, 'Giỗ Tổ Hùng Vương là 10/3 âm lịch.'),
    Q('Câu ca dao nào về tổ tiên?', ['"Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba"','"Ai về Bình Định mà coi"','"Ếch ngồi đáy giếng"','"Đi một ngày đàng học một sàng khôn"'], 0, 'Đây là câu ca dao về Giỗ Tổ Hùng Vương.'),
    Q('Khi gia đình có giỗ, em nên?', ['Tham gia phụ giúp, lễ phép với người lớn','Trốn đi chơi','Ăn vụng đồ cúng','Cãi nhau với anh chị họ'], 0, 'Tham gia giỗ là biết ơn tổ tiên.'),
  ]),

  M(3, 'Kính trọng và biết ơn thầy cô giáo', [
    Q('Vì sao em phải biết ơn thầy cô giáo?', ['Vì thầy cô dạy em nên người','Vì sợ thầy cô phạt','Vì phải làm theo bạn','Vì sách bảo thế'], 0, 'Thầy cô có công lao dạy dỗ em.'),
    Q('Ngày Nhà giáo Việt Nam là?', ['20/11','22/12','8/3','19/5'], 0, '20/11 là Ngày Nhà giáo Việt Nam.'),
    Q('Việc làm thể hiện biết ơn thầy cô?', ['Học tập chăm chỉ, ngoan ngoãn','Lười học, nói chuyện trong lớp','Bỏ tiết','Cãi lại thầy cô'], 0, 'Học chăm và ngoan là cách tri ân thầy cô.'),
    Q('Khi gặp thầy cô cũ ngoài đường, em nên?', ['Lễ phép chào hỏi','Giả vờ không thấy','Quay mặt đi','Cười cợt'], 0, 'Vẫn chào hỏi thầy cô cũ là biết ơn.'),
    Q('Câu tục ngữ nào nói về thầy cô?', ['"Không thầy đố mày làm nên"','"Có công mài sắt có ngày nên kim"','"Ăn quả nhớ kẻ trồng cây"','"Lá lành đùm lá rách"'], 0, '"Không thầy đố mày làm nên" nói về vai trò người thầy.'),
  ]),

  M(4, 'Biết ơn cha mẹ', [
    Q('Vì sao em phải biết ơn cha mẹ?', ['Vì cha mẹ sinh ra, nuôi dưỡng và yêu thương em','Vì cha mẹ mua quà cho em','Vì cha mẹ bắt em phải nhớ','Vì sợ cha mẹ buồn'], 0, 'Cha mẹ có công sinh thành, dưỡng dục.'),
    Q('Việc làm thể hiện biết ơn cha mẹ?', ['Vâng lời, giúp đỡ việc nhà, học tốt','Đòi quà liên tục','Cãi cha mẹ','Bỏ nhà đi chơi'], 0, 'Vâng lời và giúp việc nhà là biết ơn cha mẹ.'),
    Q('Bài thơ "Công cha như núi…" nói về?', ['Công lao cha mẹ','Cảnh đẹp quê hương','Tình bạn','Học tập'], 0, 'Câu "Công cha như núi Thái Sơn, Nghĩa mẹ như nước trong nguồn chảy ra" nói về công lao cha mẹ.'),
    Q('Mẹ đi làm về mệt, em nên?', ['Pha nước, bóp vai cho mẹ','Đòi mẹ chơi cùng ngay','Đòi mẹ nấu món em thích','Mặc kệ mẹ'], 0, 'Quan tâm khi mẹ mệt là biết ơn.'),
    Q('Ngày của Mẹ, em làm gì?', ['Làm thiệp hoặc giúp mẹ việc nhà','Đòi mẹ mua quà cho em','Đi chơi cả ngày','Không quan tâm'], 0, 'Tự tay làm thiệp hoặc giúp việc là cách hay nhất.'),
  ]),

  M(5, 'Kính trọng người già', [
    Q('Người già cần?', ['Sự kính trọng, quan tâm, chăm sóc','Bị bỏ mặc','Bị chê là chậm','Bị quát mắng'], 0, 'Người già cần sự kính trọng và chăm sóc.'),
    Q('Trên xe buýt, thấy cụ già không có chỗ ngồi, em nên?', ['Nhường ghế cho cụ','Giả vờ ngủ','Quay mặt đi','Cười nhạo cụ'], 0, 'Nhường ghế cho người già là nét đẹp văn hoá.'),
    Q('Bà cụ qua đường khó khăn, em nên?', ['Dắt bà qua đường','Cười rồi đi','Đi vượt qua bà','Mặc kệ'], 0, 'Giúp người già qua đường là việc tốt.'),
    Q('Lời nào lễ phép với người già?', ['"Cháu chào cụ ạ"','"Ê cụ"','"Ông già"','"Đi đi cho con qua"'], 0, '"Cháu chào cụ ạ" là cách xưng hô lễ phép.'),
    Q('Ngày Quốc tế Người cao tuổi là?', ['1/10','1/6','1/5','1/1'], 0, 'Ngày Quốc tế Người cao tuổi là 1/10.'),
  ]),

  M(6, 'Tự lập', [
    Q('Tự lập là?', ['Tự làm việc của mình, không ỉ lại','Bắt người khác làm hộ','Không cần ai giúp dù khó','Chỉ làm khi có thưởng'], 0, 'Tự lập là tự lo việc của mình.'),
    Q('Việc nào HS lớp 5 có thể tự làm?', ['Tự gấp chăn, soạn sách vở','Tự lái xe máy','Tự đi làm kiếm tiền','Tự nấu bữa lớn'], 0, 'Gấp chăn, soạn sách là việc phù hợp lứa tuổi.'),
    Q('Bạn nào tự lập?', ['Bạn Hoa tự chuẩn bị bữa sáng đơn giản','Bạn Tú đợi mẹ đút mới ăn','Bạn Lan để mẹ soạn cặp','Bạn Nam đợi bố chở mới đi học'], 0, 'Tự chuẩn bị bữa sáng đơn giản là tự lập.'),
    Q('Tự lập có lợi gì?', ['Em trưởng thành và đỡ đần cha mẹ','Em mệt hơn','Em mất bạn','Em bị cô phạt'], 0, 'Tự lập giúp em trưởng thành và đỡ đần cha mẹ.'),
    Q('Tự lập KHÔNG có nghĩa là?', ['Không bao giờ nhờ ai giúp dù việc quá sức','Tự làm việc trong khả năng','Có ý thức trách nhiệm','Biết tự lo bản thân'], 0, 'Việc quá sức vẫn có thể nhờ giúp, không phải là yếu kém.'),
  ]),

  M(7, 'Tự chủ', [
    Q('Tự chủ là?', ['Biết kiểm soát cảm xúc và hành vi','Làm theo bạn','Tức là nổi nóng ngay','Cứ thích thì làm'], 0, 'Tự chủ là làm chủ cảm xúc và hành vi của mình.'),
    Q('Khi bạn trêu chọc, em tự chủ là?', ['Bình tĩnh khuyên bạn dừng','Đánh bạn ngay','Khóc oà','Mách cô nhưng không thật'], 0, 'Bình tĩnh khuyên bạn là biểu hiện tự chủ.'),
    Q('Bạn rủ trốn học đi chơi, em tự chủ?', ['Từ chối và khuyên bạn đi học','Đi theo cho vui','Rủ thêm bạn khác','Nhận lời rồi mách cô'], 0, 'Từ chối điều xấu là tự chủ.'),
    Q('Người không tự chủ thường?', ['Dễ bị bạn xấu lôi kéo','Học giỏi','Được mọi người tin','Có nhiều bạn tốt'], 0, 'Thiếu tự chủ dễ bị lôi kéo.'),
    Q('Em làm gì khi thấy mình sắp nổi nóng?', ['Hít thở sâu, đếm 1-10','Đập bàn','Hét to','Đánh bạn'], 0, 'Hít thở sâu giúp lấy lại bình tĩnh.'),
  ]),

  M(8, 'Có trách nhiệm với hành vi của mình', [
    Q('Có trách nhiệm là?', ['Dám nhận và sửa lỗi khi mình làm sai','Đổ lỗi cho người khác','Trốn tránh','Khóc cho qua chuyện'], 0, 'Trách nhiệm là dám nhận và sửa lỗi.'),
    Q('Em làm vỡ bình hoa, em nên?', ['Thừa nhận, xin lỗi và dọn dẹp','Đổ lỗi cho em','Giấu mảnh vỡ đi','Bỏ chạy'], 0, 'Thừa nhận và dọn dẹp là có trách nhiệm.'),
    Q('Bạn nào có trách nhiệm?', ['Bạn Hoa nhận bài làm chưa tốt và làm lại','Bạn Tú đổ lỗi cho bố mẹ không nhắc','Bạn Lan giấu điểm kém','Bạn Nam chép bài bạn'], 0, 'Nhận và sửa lỗi là có trách nhiệm.'),
    Q('Người có trách nhiệm sẽ?', ['Được mọi người tin tưởng','Bị bạn xa lánh','Bị cô ghét','Bị bố mẹ phạt'], 0, 'Người có trách nhiệm được tin tưởng.'),
    Q('Em hứa giúp bạn ôn bài nhưng quên, em nên?', ['Xin lỗi bạn và sắp xếp ôn lại','Lờ đi như không có gì','Đổ lỗi bận','Tránh mặt bạn'], 0, 'Giữ lời hứa và sửa sai là trách nhiệm.'),
  ]),

  M(9, 'Tôn trọng phụ nữ', [
    Q('Vì sao cần tôn trọng phụ nữ?', ['Vì phụ nữ có vai trò quan trọng trong gia đình và xã hội','Vì phụ nữ yếu đuối','Vì sợ bị mắng','Vì bắt buộc'], 0, 'Phụ nữ có vai trò quan trọng và đáng được tôn trọng.'),
    Q('Bạn nam tôn trọng bạn nữ là?', ['Không trêu chọc, biết giúp đỡ bạn nữ','Trêu kéo tóc bạn nữ','Cười nhạo bạn nữ khóc','Đẩy bạn nữ ngã'], 0, 'Không trêu và biết giúp đỡ là tôn trọng.'),
    Q('Ngày Quốc tế Phụ nữ là?', ['8/3','20/10','1/6','2/9'], 0, '8/3 là Ngày Quốc tế Phụ nữ.'),
    Q('Ngày Phụ nữ Việt Nam là?', ['20/10','8/3','19/5','22/12'], 0, '20/10 là Ngày Phụ nữ Việt Nam.'),
    Q('Việc làm tôn trọng mẹ, chị, bà của em?', ['Giúp việc nhà, tặng hoa ngày 8/3 hoặc 20/10','Đòi mẹ phục vụ','Trêu chị khóc','Quát bà'], 0, 'Giúp việc nhà và tặng hoa là tôn trọng phụ nữ.'),
  ]),

  M(10, 'Hợp tác với mọi người xung quanh', [
    Q('Hợp tác là?', ['Cùng nhau làm việc để đạt mục tiêu chung','Mỗi người làm riêng','Bắt người khác làm','Không cần ai'], 0, 'Hợp tác là làm việc cùng nhau vì mục tiêu chung.'),
    Q('Khi làm việc nhóm, em nên?', ['Lắng nghe, chia sẻ ý kiến và phân công công bằng','Tự làm hết để được khen','Mặc kệ nhóm','Cãi nhau với bạn'], 0, 'Lắng nghe và phân công công bằng là hợp tác tốt.'),
    Q('Hợp tác mang lại lợi ích gì?', ['Công việc nhanh, hiệu quả, gắn kết mọi người','Mất nhiều thời gian','Cãi nhau nhiều','Không lợi gì'], 0, 'Hợp tác giúp việc nhanh và gắn kết.'),
    Q('Bạn nào hợp tác tốt?', ['Bạn Hoa lắng nghe ý kiến cả nhóm rồi đưa ra giải pháp','Bạn Tú tự ý làm theo ý mình','Bạn Lan từ chối góp ý','Bạn Nam bỏ nhóm'], 0, 'Lắng nghe và tổng hợp là hợp tác tốt.'),
    Q('Trong tổ trực nhật, em nên?', ['Cùng bạn phân công và làm hết phần của mình','Để bạn làm hết','Chỉ làm phần dễ','Bỏ về sớm'], 0, 'Phân công và làm hết phần mình là hợp tác.'),
  ]),

  M(11, 'Tình bạn', [
    Q('Người bạn tốt là?', ['Người luôn chia sẻ vui buồn và giúp em tiến bộ','Người chỉ chơi vui với em','Người cho em chép bài','Người làm theo ý em'], 0, 'Bạn tốt cùng tiến bộ và chia sẻ vui buồn.'),
    Q('Khi bạn buồn, em nên?', ['Lắng nghe và an ủi bạn','Cười nhạo bạn','Mách cả lớp','Tránh xa bạn'], 0, 'Lắng nghe là cách an ủi tốt.'),
    Q('Khi bạn làm sai, em nên?', ['Góp ý chân thành để bạn sửa','Mách thầy cô để bạn bị phạt','Đi nói xấu bạn','Không quan tâm'], 0, 'Góp ý chân thành là bạn tốt.'),
    Q('Câu tục ngữ nào về tình bạn?', ['"Học thầy không tày học bạn"','"Có công mài sắt có ngày nên kim"','"Ăn quả nhớ kẻ trồng cây"','"Tay làm hàm nhai"'], 0, '"Học thầy không tày học bạn" nói về vai trò người bạn.'),
    Q('Bạn rủ em chơi điện tử thay vì học, em nên?', ['Khuyên bạn cùng học rồi chơi sau','Bỏ học đi chơi với bạn','Mách cô để bạn bị phạt','Tuyệt giao với bạn'], 0, 'Khuyên bạn cùng học là bạn tốt và biết tự chủ.'),
  ]),

  M(12, 'Yêu hoà bình', [
    Q('Hoà bình là?', ['Không có chiến tranh, mọi người sống yên ổn','Có chiến tranh','Tranh giành','Cãi nhau'], 0, 'Hoà bình là không chiến tranh, sống yên ổn.'),
    Q('Em yêu hoà bình bằng cách?', ['Sống thân ái, không gây gổ với bạn','Đánh nhau với bạn','Cãi nhau với anh chị','Trêu chọc bạn khác'], 0, 'Sống thân ái là biểu hiện yêu hoà bình.'),
    Q('Ngày Quốc tế Hoà bình là?', ['21/9','1/6','8/3','2/9'], 0, 'Ngày Quốc tế Hoà bình là 21/9.'),
    Q('Biểu tượng của hoà bình là?', ['Chim bồ câu trắng','Hổ','Đại bàng','Diều hâu'], 0, 'Chim bồ câu trắng là biểu tượng hoà bình.'),
    Q('Khi có xung đột với bạn, em nên?', ['Bình tĩnh nói chuyện để giải quyết','Đánh nhau','Mách cô để bạn bị phạt','Tuyệt giao luôn'], 0, 'Đối thoại hoà bình là cách giải quyết tốt.'),
  ]),

  M(13, 'Em yêu Tổ quốc Việt Nam', [
    Q('Quốc kì Việt Nam là?', ['Cờ đỏ sao vàng','Cờ ba sọc','Cờ trắng','Cờ xanh'], 0, 'Quốc kì Việt Nam là cờ đỏ sao vàng.'),
    Q('Quốc ca Việt Nam là?', ['Tiến quân ca','Bài ca hi vọng','Trường ca sông Lô','Quê hương'], 0, 'Quốc ca là bài "Tiến quân ca" của Văn Cao.'),
    Q('Khi hát Quốc ca, em nên?', ['Đứng nghiêm, mắt nhìn quốc kì','Vừa hát vừa cười','Ngồi xem','Nói chuyện riêng'], 0, 'Đứng nghiêm chào cờ là tôn trọng Tổ quốc.'),
    Q('Em yêu Tổ quốc bằng cách?', ['Học tập tốt, giữ gìn truyền thống','Chê đất nước mình','Không quan tâm','Bỏ học'], 0, 'Học tốt là cách yêu Tổ quốc thiết thực.'),
    Q('Bác Hồ là?', ['Vị lãnh tụ kính yêu của dân tộc Việt Nam','Một nhà thơ','Một ca sĩ','Một thương nhân'], 0, 'Bác Hồ là vị lãnh tụ kính yêu.'),
  ]),

  M(14, 'Giữ gìn truyền thống văn hoá dân tộc', [
    Q('Truyền thống văn hoá VN gồm?', ['Áo dài, phở, bánh chưng, dân ca, lễ hội','Chỉ có công nghệ hiện đại','Chỉ có món Tây','Chỉ có nhạc nước ngoài'], 0, 'Áo dài, phở, bánh chưng… là truyền thống VN.'),
    Q('Em giữ gìn truyền thống bằng cách?', ['Tìm hiểu, mặc áo dài dịp lễ, ăn món truyền thống','Chê truyền thống cũ kĩ','Chỉ thích đồ ngoại','Không quan tâm'], 0, 'Tìm hiểu và trân trọng là giữ gìn truyền thống.'),
    Q('Lễ hội truyền thống nổi tiếng VN?', ['Hội Lim, hội Gióng, hội đền Hùng','Halloween','Lễ tạ ơn','Carnival'], 0, 'Đây là các lễ hội truyền thống VN.'),
    Q('Trang phục truyền thống của phụ nữ VN?', ['Áo dài','Áo vest','Đầm dạ hội','Áo kimono'], 0, 'Áo dài là trang phục truyền thống VN.'),
    Q('Khi bạn nước ngoài hỏi về VN, em nên?', ['Tự hào giới thiệu nét đẹp văn hoá VN','Chê VN','Im lặng','Nói VN không có gì'], 0, 'Tự hào giới thiệu là yêu văn hoá dân tộc.'),
  ]),

  M(15, 'Liên Hợp Quốc — giới thiệu', [
    Q('Liên Hợp Quốc là?', ['Tổ chức quốc tế lớn nhất thế giới','Một công ty','Một trường học','Một câu lạc bộ'], 0, 'Liên Hợp Quốc (UN) là tổ chức quốc tế lớn nhất.'),
    Q('Liên Hợp Quốc thành lập năm?', ['1945','1900','2000','1975'], 0, 'Liên Hợp Quốc thành lập ngày 24/10/1945.'),
    Q('Trụ sở chính của Liên Hợp Quốc ở?', ['New York (Mỹ)','Paris (Pháp)','Hà Nội','Tokyo'], 0, 'Trụ sở chính của LHQ ở New York.'),
    Q('Việt Nam gia nhập Liên Hợp Quốc năm?', ['1977','1945','2000','1990'], 0, 'Việt Nam gia nhập LHQ năm 1977.'),
    Q('Liên Hợp Quốc giúp gì?', ['Giữ hoà bình, hợp tác phát triển giữa các nước','Gây chiến tranh','Tổ chức thi đấu','Buôn bán'], 0, 'LHQ giữ hoà bình và thúc đẩy hợp tác.'),
  ]),

  M(16, 'Bảo vệ tài nguyên thiên nhiên', [
    Q('Tài nguyên thiên nhiên là?', ['Đất, nước, rừng, khoáng sản…','Tiền bạc','Đồ nhân tạo','Sách vở'], 0, 'Tài nguyên thiên nhiên là đất, nước, rừng…'),
    Q('Vì sao phải bảo vệ tài nguyên?', ['Vì tài nguyên có hạn, dùng cạn sẽ hết','Vì có vô hạn','Vì sách bảo','Vì không quan trọng'], 0, 'Tài nguyên có hạn, cần dùng tiết kiệm.'),
    Q('Việc làm bảo vệ tài nguyên rừng?', ['Trồng cây, không chặt phá rừng bừa bãi','Đốt rừng làm rẫy','Săn bắn động vật quý','Khai thác gỗ trái phép'], 0, 'Trồng cây và bảo vệ rừng là đúng.'),
    Q('Em tiết kiệm nước bằng cách?', ['Khoá vòi khi đánh răng, không xả nước thừa','Mở nước chảy cả ngày','Tắm rất lâu','Đổ nước ra sân chơi'], 0, 'Khoá vòi và không xả thừa là tiết kiệm nước.'),
    Q('Em tiết kiệm điện bằng cách?', ['Tắt đèn khi ra khỏi phòng','Bật đèn cả ngày','Mở quạt và điều hoà cùng lúc','Để ti vi cả đêm'], 0, 'Tắt đèn khi không dùng là tiết kiệm điện.'),
  ]),

  M(17, 'Bảo vệ môi trường', [
    Q('Môi trường gồm?', ['Không khí, nước, đất, cây xanh quanh ta','Chỉ có cây','Chỉ có nước','Chỉ có không khí'], 0, 'Môi trường gồm mọi thứ quanh ta.'),
    Q('Hành vi bảo vệ môi trường?', ['Bỏ rác đúng nơi, trồng cây, không xả rác','Đổ rác xuống sông','Đốt rác bừa bãi','Hái hoa bẻ cành'], 0, 'Bỏ rác đúng nơi và trồng cây là bảo vệ môi trường.'),
    Q('Em phân loại rác bằng cách?', ['Tách rác hữu cơ – tái chế – nguy hại','Trộn lẫn hết','Đốt tất cả','Vứt xuống sông'], 0, 'Phân loại rác giúp tái chế và xử lí đúng.'),
    Q('Ngày Môi trường Thế giới là?', ['5/6','1/6','8/3','22/4'], 0, 'Ngày Môi trường Thế giới là 5/6.'),
    Q('Tác hại của ô nhiễm môi trường?', ['Gây bệnh, biến đổi khí hậu, hại động vật','Làm đẹp','Tiết kiệm tiền','Vô hại'], 0, 'Ô nhiễm gây nhiều tác hại nghiêm trọng.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Bài học ôn tập kì I chủ yếu về?', ['Biết ơn, kính trọng, tự lập, tự chủ, trách nhiệm','Toán học','Khoa học','Lịch sử'], 0, 'Các bài học kì I xoay quanh đạo đức cá nhân.'),
    Q('Câu nào KHÔNG đúng?', ['Vâng lời mọi điều dù sai','Biết ơn cha mẹ','Tự lập trong việc của mình','Có trách nhiệm với hành vi'], 0, 'Vâng lời cần đúng đắn, không phải mọi điều.'),
    Q('Là HS lớp 5 gương mẫu, em nên?', ['Học tốt, ngoan ngoãn, giúp đỡ em nhỏ','Bắt nạt em nhỏ','Lười học','Cãi thầy cô'], 0, 'Gương mẫu là học tốt và biết giúp em nhỏ.'),
    Q('Hành vi tự chủ là?', ['Bình tĩnh khi bị trêu, từ chối điều xấu','Nổi nóng ngay','Theo bạn xấu','Đánh nhau'], 0, 'Tự chủ là làm chủ cảm xúc và hành vi.'),
    Q('Có trách nhiệm với hành vi là?', ['Dám nhận lỗi và sửa sai','Đổ lỗi','Trốn tránh','Khóc lóc'], 0, 'Trách nhiệm là nhận và sửa lỗi.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Tôn trọng phụ nữ (tiếp)', [
    Q('Trong gia đình, vai trò của mẹ?', ['Rất quan trọng, cần được kính trọng','Không quan trọng','Chỉ nấu cơm','Chỉ giặt giũ'], 0, 'Mẹ có vai trò rất quan trọng.'),
    Q('Bạn nam KHÔNG nên?', ['Trêu kéo tóc, đẩy bạn nữ','Giúp bạn nữ bê bàn','Nhường bạn nữ','Chào hỏi lễ phép'], 0, 'Không trêu chọc bạn nữ.'),
    Q('Khi mẹ và chị làm việc nhà, em nên?', ['Cùng làm, không ỉ lại vì là con trai','Ngồi xem','Đòi ăn','Đi chơi'], 0, 'Nam hay nữ đều cần chia sẻ việc nhà.'),
    Q('Bà Triệu, Hai Bà Trưng là?', ['Nữ anh hùng dân tộc','Nhà văn','Ca sĩ','Hoạ sĩ'], 0, 'Đây là các nữ anh hùng dân tộc VN.'),
    Q('Em chúc mẹ ngày 8/3 bằng?', ['Lời chúc chân thành, thiệp tự làm','Đòi mẹ mua quà','Im lặng','Trêu mẹ'], 0, 'Lời chúc và thiệp tự làm là tốt nhất.'),
  ]),

  M(20, 'Hợp tác với mọi người (thực hành)', [
    Q('Khi làm dự án nhóm, em nên?', ['Phân công, tôn trọng ý kiến mọi người','Tự làm hết','Bỏ nhóm','Cãi nhau'], 0, 'Phân công và tôn trọng là hợp tác.'),
    Q('Nếu nhóm có bạn lười, em nên?', ['Khuyên nhẹ nhàng và động viên bạn cùng làm','Đuổi bạn ra','Mách cô','Tự làm hết'], 0, 'Khuyên và động viên là cách tốt.'),
    Q('Trong tổ trực nhật, hợp tác là?', ['Phân công và cùng làm cho xong','Mỗi người một ý','Cãi nhau','Không ai làm'], 0, 'Phân công rõ và cùng làm là hợp tác.'),
    Q('Hợp tác giúp em?', ['Học được nhiều từ bạn, công việc nhanh','Bị mệt','Mất bạn','Không lợi gì'], 0, 'Hợp tác giúp học hỏi và làm việc nhanh.'),
    Q('Bạn nào hợp tác KÉM?', ['Bạn ai làm việc nấy, không phối hợp','Bạn Hoa lắng nghe nhóm','Bạn Lan đưa ý kiến','Bạn Nam phân công công bằng'], 0, 'Không phối hợp là kém hợp tác.'),
  ]),

  M(21, 'Tình bạn (thực hành)', [
    Q('Bạn xin chép bài kiểm tra, em nên?', ['Từ chối và rủ bạn cùng ôn lại','Cho chép cho vui','Cho chép vì sợ mất bạn','Mách cô để bạn bị phạt'], 0, 'Từ chối và giúp bạn ôn mới là bạn tốt.'),
    Q('Bạn buồn vì điểm kém, em nên?', ['Động viên và giúp bạn ôn lại','Cười nhạo','Khoe điểm cao của mình','Nói bạn ngu'], 0, 'Động viên và giúp đỡ là bạn tốt.'),
    Q('Bạn bị bắt nạt, em nên?', ['Bênh vực và báo người lớn','Cười a dua','Quay clip','Mặc kệ'], 0, 'Bênh vực và báo người lớn là đúng.'),
    Q('Tình bạn đẹp dựa trên?', ['Sự chân thành, tin tưởng, giúp nhau tiến bộ','Sự nịnh nọt','Sự lợi dụng','Tiền bạc'], 0, 'Chân thành và cùng tiến bộ là tình bạn đẹp.'),
    Q('Khi bạn làm em buồn, em nên?', ['Bình tĩnh nói chuyện thẳng thắn','Giận lâu','Đi nói xấu bạn','Tuyệt giao'], 0, 'Trò chuyện thẳng thắn để hiểu nhau.'),
  ]),

  M(22, 'Em yêu quê hương — Tết cổ truyền', [
    Q('Tết Nguyên Đán là?', ['Tết cổ truyền lớn nhất của dân tộc VN','Tết của phương Tây','Lễ hội nước ngoài','Ngày thường'], 0, 'Tết Nguyên Đán là Tết cổ truyền VN.'),
    Q('Phong tục đẹp ngày Tết?', ['Chúc Tết ông bà, lì xì, ăn bánh chưng','Cãi nhau','Đốt pháo lậu','Ăn nhậu say'], 0, 'Chúc Tết và lì xì là phong tục đẹp.'),
    Q('Khi nhận lì xì, em nên?', ['Cảm ơn lễ phép và chúc lại','Mở ra đếm ngay','Chê ít','Bỏ vào túi không nói'], 0, 'Cảm ơn và chúc lại là lễ phép.'),
    Q('Bánh truyền thống Tết miền Bắc?', ['Bánh chưng','Bánh xèo','Bánh mì','Bánh donut'], 0, 'Bánh chưng là bánh Tết miền Bắc.'),
    Q('Em yêu quê hương ngày Tết bằng cách?', ['Cùng gia đình giữ phong tục, giúp việc nhà','Đi chơi không về','Cãi cha mẹ','Phá đồ đạc'], 0, 'Cùng gia đình giữ phong tục là yêu quê.'),
  ]),

  M(23, 'Em yêu hoà bình (thực hành)', [
    Q('Trong lớp, em yêu hoà bình bằng cách?', ['Không gây gổ, hoà giải khi bạn cãi nhau','Khích bạn đánh nhau','Chia phe','Trêu chọc'], 0, 'Hoà giải xung đột là yêu hoà bình.'),
    Q('Khi xem tin chiến tranh, em cảm thấy?', ['Thương xót và mong hoà bình','Vui mừng','Không quan tâm','Cười'], 0, 'Cảm thông với nạn nhân và mong hoà bình.'),
    Q('Em viết thư cho bạn nước ngoài, nội dung?', ['Chia sẻ về hoà bình, hữu nghị','Chê bạn','Khoe vũ khí','Đe doạ'], 0, 'Chia sẻ hoà bình là yêu hoà bình.'),
    Q('Biểu tượng hoà bình thế giới?', ['Chim bồ câu trắng và cành ô liu','Đại bàng','Hổ','Súng'], 0, 'Bồ câu trắng và cành ô liu là biểu tượng hoà bình.'),
    Q('Việt Nam có yêu hoà bình không?', ['Có, Việt Nam luôn yêu chuộng hoà bình','Không','Chỉ thích chiến tranh','Không quan tâm'], 0, 'Việt Nam luôn yêu chuộng hoà bình.'),
  ]),

  M(24, 'Em yêu Tổ quốc Việt Nam (tiếp)', [
    Q('Thủ đô Việt Nam là?', ['Hà Nội','TP. Hồ Chí Minh','Đà Nẵng','Huế'], 0, 'Hà Nội là thủ đô Việt Nam.'),
    Q('Quốc khánh Việt Nam là?', ['2/9','30/4','1/5','20/11'], 0, 'Quốc khánh là 2/9, ngày Bác Hồ đọc Tuyên ngôn Độc lập.'),
    Q('Ngày Giải phóng miền Nam là?', ['30/4','2/9','19/5','22/12'], 0, '30/4/1975 là ngày Giải phóng miền Nam, thống nhất đất nước.'),
    Q('Em tự hào về Việt Nam vì?', ['Lịch sử lâu đời, văn hoá phong phú, con người anh dũng','Không có gì','VN nghèo','VN nhỏ'], 0, 'VN có lịch sử và văn hoá đáng tự hào.'),
    Q('Khi nghe Quốc ca, em?', ['Đứng nghiêm trang','Vừa nghe vừa nói chuyện','Ngồi xem điện thoại','Cười đùa'], 0, 'Đứng nghiêm khi nghe Quốc ca.'),
  ]),

  M(25, 'Liên Hợp Quốc (tiếp)', [
    Q('UNICEF là tổ chức của LHQ giúp?', ['Trẻ em','Người già','Doanh nghiệp','Quân đội'], 0, 'UNICEF là Quỹ Nhi đồng LHQ.'),
    Q('WHO là tổ chức về?', ['Y tế thế giới','Giáo dục','Quân sự','Kinh tế'], 0, 'WHO là Tổ chức Y tế Thế giới.'),
    Q('UNESCO là tổ chức về?', ['Giáo dục, khoa học, văn hoá','Y tế','Thể thao','Kinh tế'], 0, 'UNESCO là tổ chức về giáo dục, khoa học, văn hoá.'),
    Q('Việt Nam là thành viên LHQ từ năm?', ['1977','1945','1990','2000'], 0, 'VN gia nhập LHQ năm 1977.'),
    Q('Quyền cơ bản của trẻ em được LHQ bảo vệ?', ['Quyền sống, học tập, được bảo vệ và phát triển','Quyền bắt nạt','Quyền bỏ học','Quyền không vâng lời'], 0, 'LHQ bảo vệ các quyền cơ bản của trẻ em.'),
  ]),

  M(26, 'Quyền của trẻ em', [
    Q('Trẻ em có quyền?', ['Được sống, học tập, vui chơi, được bảo vệ','Bắt nạt người khác','Không vâng lời','Bỏ học'], 0, 'Trẻ em có các quyền cơ bản được pháp luật bảo vệ.'),
    Q('Bên cạnh quyền, trẻ em còn có?', ['Bổn phận với gia đình, nhà trường, xã hội','Không có gì','Chỉ quyền','Chỉ chơi'], 0, 'Trẻ em có quyền và bổn phận.'),
    Q('Em thấy bạn bị đánh, em nên?', ['Báo người lớn để bảo vệ bạn','Bỏ mặc','A dua','Quay clip'], 0, 'Báo người lớn để bảo vệ bạn.'),
    Q('Ngày Quốc tế Thiếu nhi?', ['1/6','8/3','20/11','2/9'], 0, '1/6 là Ngày Quốc tế Thiếu nhi.'),
    Q('Bổn phận quan trọng của trẻ em?', ['Học tập tốt, vâng lời cha mẹ, kính thầy yêu bạn','Chỉ chơi','Cãi cha mẹ','Bỏ học'], 0, 'Đây là bổn phận quan trọng nhất.'),
  ]),

  M(27, 'Bảo vệ tài nguyên thiên nhiên (tiếp)', [
    Q('Rừng có vai trò?', ['Điều hoà khí hậu, giữ đất, cho gỗ','Không quan trọng','Chỉ để đốt','Cản trở giao thông'], 0, 'Rừng có vai trò rất quan trọng.'),
    Q('Bảo vệ rừng là?', ['Trồng cây, không chặt phá, không đốt','Đốt rừng','Săn bắn','Khai thác trái phép'], 0, 'Trồng cây và bảo vệ rừng là đúng.'),
    Q('Tài nguyên nước cần?', ['Sử dụng tiết kiệm, không gây ô nhiễm','Lãng phí','Xả thải bừa','Không quan tâm'], 0, 'Nước cần tiết kiệm và bảo vệ.'),
    Q('Khoáng sản (than, dầu) cần?', ['Khai thác hợp lí, có kế hoạch','Khai thác bừa bãi','Không khai thác','Vứt bỏ'], 0, 'Khoáng sản có hạn nên cần khai thác hợp lí.'),
    Q('Bạn nào bảo vệ tài nguyên?', ['Bạn Hoa tắt đèn khi ra khỏi phòng','Bạn Tú để vòi nước chảy','Bạn Lan đốt rác trong nhà','Bạn Nam bẻ cành cây'], 0, 'Tắt đèn là tiết kiệm điện, bảo vệ tài nguyên.'),
  ]),

  M(28, 'Bảo vệ môi trường (tiếp)', [
    Q('Ô nhiễm không khí do?', ['Khói xe, khói nhà máy, đốt rác','Trồng cây','Đi xe đạp','Tắt máy khi dừng'], 0, 'Khói bụi là nguồn ô nhiễm không khí.'),
    Q('Để giảm ô nhiễm, em nên?', ['Đi bộ, đi xe đạp, trồng cây','Đốt rác bừa bãi','Xả khói','Chặt cây'], 0, 'Đi bộ, đi xe đạp giảm ô nhiễm.'),
    Q('Phân loại rác giúp?', ['Tái chế và xử lí đúng','Mất thời gian vô ích','Tốn tiền','Không lợi gì'], 0, 'Phân loại giúp tái chế hiệu quả.'),
    Q('Rác hữu cơ là?', ['Vỏ hoa quả, thức ăn thừa','Chai nhựa','Pin','Kim loại'], 0, 'Rác hữu cơ là rác có thể phân huỷ.'),
    Q('Túi nilon có hại vì?', ['Khó phân huỷ, gây ô nhiễm lâu dài','Có lợi','Dễ phân huỷ','Tốt cho đất'], 0, 'Túi nilon khó phân huỷ, hại môi trường.'),
  ]),

  M(29, 'Em yêu lao động', [
    Q('Lao động là?', ['Hoạt động làm ra của cải vật chất, tinh thần','Việc xấu','Không cần thiết','Chỉ người lớn làm'], 0, 'Lao động tạo ra của cải.'),
    Q('Em yêu lao động bằng cách?', ['Giúp việc nhà, lao động ở trường','Lười biếng','Trốn việc','Chê việc'], 0, 'Tham gia lao động phù hợp là yêu lao động.'),
    Q('Câu tục ngữ nào về lao động?', ['"Tay làm hàm nhai, tay quai miệng trễ"','"Đói cho sạch rách cho thơm"','"Có công mài sắt có ngày nên kim"','"Ăn quả nhớ kẻ trồng cây"'], 0, '"Tay làm hàm nhai" nói về vai trò lao động.'),
    Q('Bạn nào yêu lao động?', ['Bạn Hoa giúp mẹ rửa bát','Bạn Tú trốn lao động trường','Bạn Lan chê việc bẩn','Bạn Nam ngồi xem'], 0, 'Giúp mẹ là yêu lao động.'),
    Q('Lao động giúp em?', ['Khoẻ mạnh, biết quý sức lao động','Mệt mỏi vô ích','Mất bạn','Không lợi gì'], 0, 'Lao động giúp khoẻ và biết quý công sức.'),
  ]),

  M(30, 'Trung thực', [
    Q('Trung thực là?', ['Nói và làm đúng sự thật','Nói dối','Lừa lọc','Giấu giếm'], 0, 'Trung thực là nói và làm đúng sự thật.'),
    Q('Em nhặt được tiền rơi, em nên?', ['Tìm trả người mất hoặc nộp cô','Giữ làm của riêng','Mua đồ chơi','Giấu đi'], 0, 'Trả lại của rơi là trung thực.'),
    Q('Trong kiểm tra, em nên?', ['Tự làm, không nhìn bài bạn','Chép bài bạn','Mang phao','Hỏi bạn'], 0, 'Tự làm bài là trung thực.'),
    Q('Em làm sai, em nên?', ['Thừa nhận và xin lỗi','Đổ lỗi cho người khác','Nói dối','Trốn tránh'], 0, 'Thừa nhận lỗi là trung thực.'),
    Q('Người trung thực được?', ['Mọi người tin yêu','Bạn xa lánh','Cô ghét','Không ai chơi'], 0, 'Người trung thực được tin yêu.'),
  ]),

  M(31, 'Tự trọng', [
    Q('Tự trọng là?', ['Coi trọng phẩm giá bản thân','Khinh thường mình','Coi mình hơn mọi người','Tự kiêu'], 0, 'Tự trọng là coi trọng phẩm giá mình.'),
    Q('Người tự trọng?', ['Không làm việc xấu, không hổ thẹn','Hay nói dối','Ăn cắp vặt','Lừa bạn'], 0, 'Người tự trọng không làm việc xấu.'),
    Q('Bạn nào tự trọng?', ['Bạn Hoa không lấy đồ của bạn dù rất thích','Bạn Tú lấy lén bút bạn','Bạn Lan nói dối cô','Bạn Nam ăn cắp tiền mẹ'], 0, 'Không lấy đồ người khác là tự trọng.'),
    Q('Tự trọng KHÔNG có nghĩa là?', ['Kiêu căng, coi thường người khác','Giữ phẩm giá','Không làm việc xấu','Trung thực'], 0, 'Tự trọng không phải kiêu căng.'),
    Q('Khi bị trêu chọc, người tự trọng?', ['Bình tĩnh, không trả đũa hèn hạ','Đánh nhau','Khóc lóc','Nói xấu lại'], 0, 'Bình tĩnh và không trả đũa hèn là tự trọng.'),
  ]),

  M(32, 'Giữ lời hứa', [
    Q('Giữ lời hứa là?', ['Làm đúng điều đã hứa','Hứa cho qua','Quên ngay','Đổi ý liên tục'], 0, 'Giữ lời hứa là làm đúng điều đã hứa.'),
    Q('Trước khi hứa em nên?', ['Suy nghĩ kĩ xem mình có làm được không','Hứa bừa','Hứa cho vui','Hứa rồi quên'], 0, 'Suy nghĩ kĩ trước khi hứa.'),
    Q('Lỡ không giữ được lời hứa, em nên?', ['Xin lỗi và giải thích chân thành','Trốn tránh','Đổ lỗi','Im lặng'], 0, 'Xin lỗi và giải thích là đúng.'),
    Q('Người giữ lời hứa được?', ['Mọi người tin tưởng','Bạn xa lánh','Cô ghét','Không ai tin'], 0, 'Giữ lời hứa được mọi người tin tưởng.'),
    Q('Em hứa giúp bạn ôn bài Toán, em nên?', ['Thu xếp đến đúng hẹn','Quên luôn','Đi chơi','Hẹn lần khác liên tục'], 0, 'Đến đúng hẹn là giữ lời hứa.'),
  ]),

  M(33, 'Em là HS cuối cấp', [
    Q('HS lớp 5 cần chuẩn bị gì cho cấp 2?', ['Học tốt, rèn nề nếp, kĩ năng tự học','Lười học','Cãi cha mẹ','Bỏ bê'], 0, 'Chuẩn bị kiến thức và nề nếp.'),
    Q('Em nên đối với em lớp dưới?', ['Yêu thương, làm gương','Bắt nạt','Cướp đồ chơi','Chê bai'], 0, 'Làm anh chị tốt cho em lớp dưới.'),
    Q('Khi lớp có em mới chuyển đến, em nên?', ['Đón tiếp, làm quen, giúp đỡ bạn','Tẩy chay','Trêu chọc','Bỏ mặc'], 0, 'Đón tiếp bạn mới là việc tốt.'),
    Q('Em tổ chức lễ ra trường, em nên?', ['Tham gia tích cực, ghi nhớ kỉ niệm','Trốn','Phá đám','Không quan tâm'], 0, 'Tham gia tích cực ghi nhớ kỉ niệm.'),
    Q('Thái độ tốt khi lên cấp 2?', ['Tự tin, sẵn sàng học hỏi','Lo lắng quá độ','Chán nản','Bỏ học'], 0, 'Tự tin và sẵn sàng học hỏi.'),
  ]),

  M(34, 'Ôn tập học kì II', [
    Q('Bài học kì II xoay quanh?', ['Phụ nữ, hợp tác, bạn bè, Tổ quốc, LHQ, môi trường','Chỉ toán','Chỉ khoa học','Chỉ thể dục'], 0, 'Nhiều chủ đề đạo đức xã hội.'),
    Q('Yêu Tổ quốc là?', ['Học tốt, giữ truyền thống, bảo vệ môi trường VN','Chê đất nước','Không quan tâm','Bỏ học'], 0, 'Yêu Tổ quốc qua hành động cụ thể.'),
    Q('Hợp tác tốt cần?', ['Lắng nghe, chia sẻ, phân công công bằng','Tự ý làm','Cãi nhau','Bỏ nhóm'], 0, 'Hợp tác cần lắng nghe và phân công.'),
    Q('Bảo vệ môi trường là?', ['Bỏ rác đúng nơi, tiết kiệm điện nước','Xả rác','Phá rừng','Lãng phí'], 0, 'Hành vi cụ thể bảo vệ môi trường.'),
    Q('Trung thực là?', ['Nói và làm đúng sự thật','Nói dối','Lừa lọc','Giấu giếm'], 0, 'Trung thực là sự thật.'),
  ]),

  M(35, 'Tổng kết — Bước vào cấp 2', [
    Q('5 năm tiểu học đã dạy em?', ['Kiến thức nền và đạo đức làm người','Chỉ chơi','Chỉ ngủ','Không gì cả'], 0, 'Tiểu học cho em nền tảng kiến thức và đạo đức.'),
    Q('Em biết ơn thầy cô tiểu học bằng cách?', ['Học tốt ở cấp 2, vẫn lễ phép khi gặp lại','Quên thầy cô','Không nhớ tên','Tránh mặt'], 0, 'Học tốt và lễ phép là biết ơn thầy cô.'),
    Q('Khi rời tiểu học, em mang theo?', ['Kỉ niệm đẹp và bài học đạo đức','Buồn phiền','Hờn dỗi','Không gì cả'], 0, 'Kỉ niệm và bài học là hành trang quý.'),
    Q('Lên cấp 2, em cần?', ['Tiếp tục giữ đạo đức và học tốt','Bỏ hết','Chỉ chơi','Cãi thầy cô'], 0, 'Giữ đạo đức và học tốt suốt đời.'),
    Q('Lời chia tay đẹp với bạn bè?', ['Chúc nhau học tốt, giữ liên lạc','Trêu nhau','Hờn dỗi','Im lặng'], 0, 'Lời chúc chân thành và giữ liên lạc.'),
  ]),
];

export const P5DD_SCENARIOS = indexBy(P5DD_WEEKS);
