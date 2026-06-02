// ============================================================
// Lớp 9 · GDCD — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Key trùng id quiz: "S9GDCD-wNN-quiz".
// Văn phong nghiêm túc, chuẩn cấp THCS cuối cấp.
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9GDCD_LESSONS = {
  'S9GDCD-w01-quiz': L(
    'Chí công vô tư',
    'Mở đầu lớp 9, các em học về phẩm chất đạo đức cốt lõi — chí công vô tư — nền tảng của người công dân tử tế trong xã hội pháp quyền.',
    ['Hiểu khái niệm và biểu hiện của chí công vô tư.', 'Phân biệt chí công vô tư với thiên vị, vụ lợi.', 'Biết rèn luyện phẩm chất này trong học tập và sinh hoạt.'],
    [
      { h: 'Khái niệm' },
      { p: 'Chí công vô tư là phẩm chất đạo đức của con người, thể hiện ở sự công bằng, không thiên vị, giải quyết công việc theo lẽ phải, đặt lợi ích chung lên trên lợi ích cá nhân.' },
      { h: 'Biểu hiện' },
      { ul: ['Công bằng khi đánh giá người khác.', 'Không vì tình riêng mà làm trái lẽ phải.', 'Dám đấu tranh chống thiên vị, vụ lợi.'] },
      { h: 'Ý nghĩa' },
      { p: 'Người chí công vô tư được mọi người tin yêu, kính trọng; góp phần làm cho xã hội công bằng, dân chủ, văn minh.' },
      { note: 'Bác Hồ dạy: "Phải để việc công, việc nước lên trên việc tư, việc nhà".' },
    ],
    [
      { q: 'Lớp trưởng bao che cho bạn thân vi phạm nội quy. Hành vi này thể hiện điều gì?', a: 'Trái với chí công vô tư — đặt tình riêng lên trên lẽ phải, vi phạm nguyên tắc công bằng.' },
      { q: 'Em rèn chí công vô tư bằng cách nào?', a: 'Ủng hộ người làm đúng, phê phán việc sai dù là bạn thân; đánh giá người khác dựa trên hành vi thực tế.' },
    ]
  ),

  'S9GDCD-w02-quiz': L(
    'Tự chủ',
    'Tuần này các em rèn luyện phẩm chất tự chủ — khả năng làm chủ bản thân trong mọi hoàn cảnh, đặc biệt cần thiết khi bước vào giai đoạn ôn thi căng thẳng.',
    ['Hiểu thế nào là tự chủ.', 'Nhận biết biểu hiện của tự chủ.', 'Rèn luyện tính tự chủ qua tình huống thực tế.'],
    [
      { h: 'Khái niệm' },
      { p: 'Tự chủ là làm chủ bản thân — làm chủ suy nghĩ, tình cảm, hành vi trong mọi hoàn cảnh, biết bình tĩnh, tự tin, không bị lôi kéo trước cám dỗ.' },
      { h: 'Biểu hiện' },
      { ul: ['Bình tĩnh, tự tin trước khó khăn.', 'Không nóng nảy, không vội vã.', 'Biết kiềm chế cảm xúc tiêu cực.', 'Kiên định lập trường, không a dua.'] },
      { h: 'Ý nghĩa' },
      { p: 'Tự chủ giúp con người sống đúng đắn, có văn hoá; vượt qua khó khăn, cám dỗ; được mọi người tôn trọng.' },
      { note: 'Tự chủ KHÁC bảo thủ: người tự chủ vẫn lắng nghe và tiếp thu cái đúng.' },
    ],
    [
      { q: 'Bạn rủ em trốn học đi chơi game. Người tự chủ phản ứng thế nào?', a: 'Kiên quyết từ chối, giải thích cho bạn hiểu việc đó sai, có thể khuyên bạn cùng quay lại lớp học.' },
      { q: 'Khi bị điểm kém, em mất tự chủ thường có biểu hiện gì?', a: 'Nóng nảy, chán nản, bỏ học. Người tự chủ sẽ bình tĩnh tìm nguyên nhân và xây dựng kế hoạch cải thiện.' },
    ]
  ),

  'S9GDCD-w03-quiz': L(
    'Dân chủ và kỉ luật',
    'Dân chủ và kỉ luật là hai mặt không thể tách rời của một xã hội văn minh — đây là nội dung quan trọng trong chương trình GDCD cuối cấp.',
    ['Hiểu khái niệm dân chủ và kỉ luật.', 'Thấy được mối quan hệ giữa hai phạm trù.', 'Vận dụng được trong môi trường lớp học.'],
    [
      { h: 'Dân chủ là gì?' },
      { p: 'Dân chủ là mọi người được làm chủ công việc của tập thể, xã hội; được biết, được bàn, được tham gia, được kiểm tra giám sát.' },
      { h: 'Kỉ luật là gì?' },
      { p: 'Kỉ luật là những quy định chung của tập thể, xã hội mà mọi người phải tuân theo nhằm tạo sự thống nhất hành động để đạt mục tiêu chung.' },
      { h: 'Mối quan hệ' },
      { ul: ['Dân chủ là để mọi người phát huy quyền làm chủ.', 'Kỉ luật là điều kiện đảm bảo cho dân chủ thực hiện có hiệu quả.', 'Dân chủ và kỉ luật tạo nên sức mạnh tập thể.'] },
      { note: 'Dân chủ không phải làm theo ý mình; kỉ luật không phải mất tự do.' },
    ],
    [
      { q: 'Lớp họp bàn kế hoạch trại — đây là biểu hiện gì?', a: 'Đây là dân chủ — mọi thành viên được bàn bạc, đóng góp ý kiến cho công việc chung.' },
      { q: 'Sau khi lớp đã biểu quyết, em có quyền tự ý làm khác không?', a: 'Không. Đó là vi phạm kỉ luật. Em có thể bảo lưu ý kiến nhưng phải thực hiện theo quyết định chung của tập thể.' },
    ]
  ),

  'S9GDCD-w04-quiz': L(
    'Bảo vệ hoà bình',
    'Trong bối cảnh thế giới còn nhiều xung đột, bảo vệ hoà bình là trách nhiệm của mọi công dân, không riêng quốc gia nào.',
    ['Hiểu khái niệm hoà bình và bảo vệ hoà bình.', 'Nhận biết biểu hiện yêu hoà bình.', 'Có thái độ tích cực bảo vệ hoà bình.'],
    [
      { h: 'Hoà bình là gì?' },
      { p: 'Hoà bình là trạng thái không có chiến tranh hay xung đột vũ trang; quan hệ hiểu biết, tôn trọng, bình đẳng và hợp tác giữa các quốc gia, dân tộc.' },
      { h: 'Biểu hiện lòng yêu hoà bình' },
      { ul: ['Sống hoà thuận, không bạo lực.', 'Tôn trọng, hiểu biết các dân tộc khác.', 'Giải quyết mâu thuẫn bằng đàm phán.', 'Lên án chiến tranh phi nghĩa.'] },
      { h: 'Trách nhiệm' },
      { p: 'Bảo vệ hoà bình là trách nhiệm của mọi quốc gia, mọi người. Việt Nam là dân tộc yêu chuộng hoà bình do đã trải qua nhiều cuộc chiến tranh giành độc lập.' },
      { note: 'Liên Hợp Quốc (UN) thành lập 1945 — tổ chức quốc tế lớn nhất bảo vệ hoà bình.' },
    ],
    [
      { q: 'Em thấy hai bạn xô xát trong lớp. Người yêu hoà bình sẽ làm gì?', a: 'Bình tĩnh can ngăn, mời cô giáo nếu cần; sau đó giúp hai bạn ngồi lại nói chuyện để hoá giải mâu thuẫn.' },
      { q: 'Bạn nước ngoài đến lớp em. Em ứng xử thế nào để thể hiện yêu hoà bình?', a: 'Tôn trọng, lịch sự, tìm hiểu văn hoá của bạn; không kỳ thị, chế giễu ngôn ngữ hay phong tục của bạn.' },
    ]
  ),

  'S9GDCD-w05-quiz': L(
    'Tình hữu nghị giữa các dân tộc trên thế giới',
    'Trong thời đại toàn cầu hoá, tình hữu nghị giữa các dân tộc là điều kiện cần thiết để cùng phát triển và giải quyết các vấn đề toàn cầu.',
    ['Hiểu khái niệm tình hữu nghị giữa các dân tộc.', 'Thấy được ý nghĩa của hữu nghị quốc tế.', 'Biết thể hiện tình hữu nghị qua hành vi cụ thể.'],
    [
      { h: 'Khái niệm' },
      { p: 'Tình hữu nghị giữa các dân tộc trên thế giới là quan hệ bạn bè thân thiện giữa nước này với nước khác.' },
      { h: 'Ý nghĩa' },
      { ul: ['Tạo điều kiện cùng hợp tác phát triển.', 'Duy trì hoà bình, an ninh quốc tế.', 'Giúp giải quyết các vấn đề toàn cầu: khí hậu, dịch bệnh, đói nghèo.'] },
      { h: 'Chính sách đối ngoại của Việt Nam' },
      { p: 'Việt Nam thực hiện đường lối đối ngoại hoà bình, hữu nghị, hợp tác với tất cả các nước trên cơ sở tôn trọng độc lập, chủ quyền, bình đẳng và cùng có lợi.' },
      { note: 'SEA Games, giao lưu sinh viên quốc tế là biểu hiện cụ thể của tình hữu nghị.' },
    ],
    [
      { q: 'Một bạn châu Phi đến học cùng lớp. Em thể hiện tình hữu nghị thế nào?', a: 'Tôn trọng, chủ động làm quen, giới thiệu văn hoá Việt Nam, tìm hiểu về đất nước của bạn; không kỳ thị màu da hay phong tục.' },
      { q: 'Việt Nam tham gia ASEAN có phải biểu hiện tình hữu nghị không?', a: 'Có. Tham gia ASEAN là biểu hiện rõ nét của tình hữu nghị khu vực — cùng hợp tác phát triển, duy trì hoà bình Đông Nam Á.' },
    ]
  ),

  'S9GDCD-w06-quiz': L(
    'Hợp tác cùng phát triển',
    'Trong thế giới ngày nay, không quốc gia nào có thể tự giải quyết mọi vấn đề. Hợp tác cùng phát triển là xu thế tất yếu.',
    ['Hiểu khái niệm hợp tác và nguyên tắc hợp tác của Việt Nam.', 'Thấy được ý nghĩa của hợp tác quốc tế.', 'Rèn tinh thần hợp tác trong học tập.'],
    [
      { h: 'Hợp tác là gì?' },
      { p: 'Hợp tác là cùng chung sức làm việc, giúp đỡ, hỗ trợ lẫn nhau trong công việc, lĩnh vực nào đó vì lợi ích chung.' },
      { h: 'Nguyên tắc hợp tác của Việt Nam' },
      { ul: ['Tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ.', 'Bình đẳng, các bên cùng có lợi.', 'Không can thiệp công việc nội bộ của nhau.', 'Giải quyết bất đồng bằng đàm phán hoà bình.'] },
      { h: 'Ý nghĩa' },
      { p: 'Hợp tác giúp giải quyết các vấn đề toàn cầu (biến đổi khí hậu, dịch bệnh, khủng bố); thúc đẩy phát triển kinh tế, văn hoá, khoa học công nghệ.' },
      { note: 'Việt Nam đã hợp tác trong các tổ chức ASEAN, APEC, WTO, UN.' },
    ],
    [
      { q: 'Lớp em phân công làm dự án nhóm. Hợp tác tốt nghĩa là gì?', a: 'Chia việc rõ ràng, lắng nghe ý kiến, giúp đỡ thành viên yếu, cùng nhau hoàn thành mục tiêu chung — không đùn đẩy hay làm thay người khác.' },
      { q: 'Việt Nam hợp tác chống COVID-19 với quốc tế bằng cách nào?', a: 'Tiếp nhận vắc-xin từ COVAX, gửi y bác sĩ hỗ trợ nước bạn, chia sẻ kinh nghiệm chống dịch — thể hiện tinh thần hợp tác vì sức khoẻ nhân loại.' },
    ]
  ),

  'S9GDCD-w07-quiz': L(
    'Kế thừa và phát huy truyền thống tốt đẹp của dân tộc',
    'Dân tộc Việt Nam có nhiều truyền thống tốt đẹp được hun đúc qua hàng nghìn năm — trách nhiệm của thế hệ trẻ là kế thừa và phát huy.',
    ['Kể được truyền thống tốt đẹp của dân tộc.', 'Phân biệt truyền thống tốt đẹp với hủ tục.', 'Có hành động cụ thể kế thừa, phát huy truyền thống.'],
    [
      { h: 'Truyền thống tốt đẹp của dân tộc' },
      { ul: ['Yêu nước, bất khuất chống ngoại xâm.', 'Đoàn kết, nhân nghĩa.', 'Cần cù, sáng tạo trong lao động.', 'Hiếu học, tôn sư trọng đạo.', 'Hiếu thảo, kính trên nhường dưới.'] },
      { h: 'Phân biệt với hủ tục' },
      { p: 'Truyền thống tốt đẹp đem lại giá trị tích cực cho con người và xã hội. Hủ tục (tảo hôn, trọng nam khinh nữ, mê tín dị đoan) cần xoá bỏ.' },
      { h: 'Trách nhiệm của HS' },
      { p: 'Tự hào, giữ gìn và phát huy truyền thống bằng học tập tốt, lao động cần cù, sống có đạo đức; lên án các thói hư tật xấu, hủ tục.' },
      { note: '"Uống nước nhớ nguồn" là truyền thống đạo lý quý báu của dân tộc.' },
    ],
    [
      { q: 'Bạn em nói "Truyền thống là chuyện cũ kĩ, không hợp thời nữa". Em phản hồi thế nào?', a: 'Truyền thống tốt đẹp như yêu nước, hiếu học, cần cù sáng tạo luôn có giá trị thời đại. Chính nhờ những truyền thống ấy mà dân tộc ta tồn tại và phát triển.' },
      { q: 'Em phát huy truyền thống hiếu học bằng cách nào?', a: 'Chăm chỉ học tập, đặt mục tiêu cao, không ngại khó khăn; biết ơn thầy cô; chia sẻ kiến thức với bạn yếu hơn.' },
    ]
  ),

  'S9GDCD-w08-quiz': L(
    'Năng động, sáng tạo',
    'Trong thời đại 4.0, năng động và sáng tạo là phẩm chất không thể thiếu — đặc biệt khi các em chuẩn bị bước vào cấp 3 và đời sống lao động.',
    ['Hiểu khái niệm năng động, sáng tạo.', 'Nhận biết biểu hiện và ý nghĩa.', 'Rèn luyện qua học tập, sinh hoạt.'],
    [
      { h: 'Khái niệm' },
      { ul: ['Năng động: tích cực, chủ động, dám nghĩ dám làm.', 'Sáng tạo: say mê nghiên cứu, tìm tòi ra cái mới, cách giải quyết mới.'] },
      { h: 'Biểu hiện' },
      { ul: ['Tự giác học tập, không chờ ai nhắc.', 'Tìm cách giải bài tập khác sách giáo khoa.', 'Đề xuất ý tưởng mới trong hoạt động nhóm.'] },
      { h: 'Ý nghĩa' },
      { p: 'Năng động, sáng tạo là điều kiện để vượt qua khó khăn, hoàn cảnh; rút ngắn thời gian, đạt hiệu quả cao; tạo nên thành công cá nhân và đóng góp cho xã hội.' },
      { note: 'Người năng động sáng tạo không bao giờ chịu khoanh tay đứng nhìn.' },
    ],
    [
      { q: 'Một bài toán em chưa giải được. Người năng động sáng tạo làm gì?', a: 'Đọc lại lý thuyết, thử nhiều cách tiếp cận, hỏi thầy cô hoặc bạn, tìm tài liệu trên mạng — chứ không bỏ cuộc hay chép bài bạn.' },
      { q: 'Trong dự án nhóm, em thể hiện sáng tạo thế nào?', a: 'Đề xuất chủ đề mới, cách trình bày khác lạ, ứng dụng công nghệ; không sao chép nguyên ý tưởng từ nhóm khác.' },
    ]
  ),

  'S9GDCD-w09-quiz': L(
    'Làm việc có năng suất, chất lượng, hiệu quả',
    'Trong giai đoạn ôn thi cuối cấp, làm việc có năng suất, chất lượng, hiệu quả là kỹ năng then chốt để đạt kết quả tốt.',
    ['Hiểu khái niệm năng suất, chất lượng, hiệu quả.', 'Phân biệt ba khía cạnh và mối liên hệ.', 'Biết cách rèn luyện trong học tập.'],
    [
      { h: 'Khái niệm' },
      { p: 'Làm việc có năng suất, chất lượng, hiệu quả là tạo ra nhiều sản phẩm có giá trị cao về cả nội dung và hình thức trong một thời gian nhất định.' },
      { h: 'Ba yếu tố' },
      { ul: ['Năng suất: số lượng công việc hoàn thành trong thời gian.', 'Chất lượng: giá trị, đúng yêu cầu.', 'Hiệu quả: kết quả so với nguồn lực bỏ ra.'] },
      { h: 'Ý nghĩa' },
      { p: 'Giúp cá nhân nâng cao mức sống; đóng góp cho gia đình và xã hội; xây dựng đất nước giàu mạnh.' },
      { note: 'Học vẹt nhiều không bằng học hiểu sâu — chất lượng quan trọng hơn số lượng.' },
    ],
    [
      { q: 'Em học 8 tiếng nhưng kết quả vẫn kém. Vấn đề ở đâu?', a: 'Có thể thiếu chất lượng và hiệu quả — học không tập trung, không có phương pháp. Cần giảm thời gian học nhưng tăng tập trung, ôn tập có hệ thống.' },
      { q: 'Làm bài kiểm tra 60 phút, em phân bổ thời gian thế nào?', a: 'Đọc đề 3 phút, làm câu dễ trước, câu khó sau; dành 5 phút cuối kiểm tra lại — đây là nguyên tắc làm việc có hiệu quả.' },
    ]
  ),

  'S9GDCD-w10-quiz': L(
    'Lý tưởng sống của thanh niên',
    'Thanh niên là chủ nhân tương lai của đất nước. Có lý tưởng sống đúng đắn là kim chỉ nam cho mọi hành động.',
    ['Hiểu khái niệm lý tưởng sống.', 'Xác định lý tưởng sống của thanh niên Việt Nam ngày nay.', 'Xây dựng được lý tưởng sống cho bản thân.'],
    [
      { h: 'Lý tưởng sống là gì?' },
      { p: 'Lý tưởng sống là mục đích cao đẹp mà con người mơ ước, hướng tới và quyết tâm thực hiện trong suốt cuộc đời.' },
      { h: 'Lý tưởng sống của thanh niên VN' },
      { p: 'Phấn đấu thực hiện mục tiêu xây dựng nước Việt Nam dân giàu, nước mạnh, xã hội dân chủ, công bằng, văn minh; đóng góp xây dựng quê hương, đất nước.' },
      { h: 'Biểu hiện' },
      { ul: ['Học tập, rèn luyện vì ngày mai.', 'Chủ động, sáng tạo trong công việc.', 'Sống đạo đức, tử tế với mọi người.', 'Đấu tranh chống tiêu cực.'] },
      { note: 'Lý tưởng phải đi đôi với hành động cụ thể — không phải lời nói suông.' },
    ],
    [
      { q: 'Một bạn nói "Lý tưởng là chuyện viển vông, tôi chỉ cần kiếm thật nhiều tiền". Đúng hay sai?', a: 'Sai. Kiếm tiền không sai nhưng chỉ chạy theo tiền mà không có lý tưởng đóng góp cho xã hội thì cuộc sống sẽ trống rỗng, dễ rơi vào tiêu cực.' },
      { q: 'Lý tưởng của em ở tuổi 15 là gì?', a: 'Học giỏi để thi đậu trường THPT mong muốn, sau này theo đuổi nghề có ích cho xã hội; rèn luyện đạo đức, sức khoẻ để trở thành công dân tốt.' },
    ]
  ),

  'S9GDCD-w11-quiz': L(
    'Trách nhiệm của thanh niên trong sự nghiệp công nghiệp hoá - hiện đại hoá',
    'CNH-HĐH là sự nghiệp lớn của dân tộc. Thanh niên Việt Nam có vai trò xung kích, sáng tạo trong sự nghiệp này.',
    ['Hiểu khái niệm CNH-HĐH.', 'Xác định vai trò và trách nhiệm của thanh niên.', 'Có hành động thiết thực phù hợp lứa tuổi.'],
    [
      { h: 'CNH-HĐH là gì?' },
      { p: 'CNH-HĐH là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế-xã hội từ sử dụng sức lao động thủ công sang sử dụng phổ biến sức lao động kết hợp với công nghệ tiên tiến.' },
      { h: 'Vai trò của thanh niên' },
      { p: 'Thanh niên là lực lượng nòng cốt, xung kích, sáng tạo. Đảng và Nhà nước luôn coi thanh niên là rường cột của quốc gia.' },
      { h: 'Trách nhiệm của HS' },
      { ul: ['Học tập tốt, đặc biệt môn khoa học và công nghệ.', 'Rèn luyện đạo đức, sức khoẻ.', 'Trau dồi kỹ năng số, ngoại ngữ.', 'Tham gia hoạt động cộng đồng.'] },
      { note: 'Học giỏi hôm nay là chuẩn bị cho đất nước mai sau.' },
    ],
    [
      { q: 'Em có thể đóng góp gì cho CNH-HĐH ở tuổi 15?', a: 'Học giỏi các môn STEM, ngoại ngữ; rèn kỹ năng số; sống có kỷ luật, có lý tưởng — đó chính là chuẩn bị nguồn nhân lực chất lượng cho tương lai.' },
      { q: 'Vì sao thanh niên được coi là rường cột?', a: 'Vì thanh niên có sức trẻ, sáng tạo, dám nghĩ dám làm; là lực lượng tiếp nhận và ứng dụng công nghệ mới nhanh nhất.' },
    ]
  ),

  'S9GDCD-w12-quiz': L(
    'Ôn tập học kì I — Đạo đức công dân',
    'Tổng kết các phẩm chất đạo đức đã học trong HK1, hệ thống hoá thành nền tảng đạo đức cho người công dân tương lai.',
    ['Hệ thống hoá các phẩm chất đạo đức đã học.', 'Vận dụng tổng hợp vào tình huống thực tế.', 'Tự đánh giá bản thân theo từng phẩm chất.'],
    [
      { h: 'Hệ thống phẩm chất' },
      { ul: ['Chí công vô tư — Tự chủ — Dân chủ và kỉ luật.', 'Bảo vệ hoà bình — Hữu nghị — Hợp tác.', 'Kế thừa truyền thống — Năng động sáng tạo.', 'Năng suất chất lượng hiệu quả — Lý tưởng sống — Trách nhiệm thanh niên.'] },
      { h: 'Mối liên hệ' },
      { p: 'Các phẩm chất bổ sung cho nhau: tự chủ làm nền cho dân chủ; năng động sáng tạo gắn với năng suất hiệu quả; lý tưởng định hướng cho mọi phẩm chất khác.' },
      { note: 'Đạo đức là gốc của con người, pháp luật là khung của xã hội — cả hai cùng tồn tại.' },
    ],
    [
      { q: 'Bạn em quay cóp trong giờ kiểm tra. Em vận dụng phẩm chất nào để xử lý?', a: 'Chí công vô tư (không bao che), tự chủ (không hùa theo), trách nhiệm (góp ý với bạn hoặc báo cô) — tổng hợp nhiều phẩm chất đạo đức.' },
      { q: 'Em tự đánh giá phẩm chất nào của mình còn yếu nhất?', a: 'Mỗi em sẽ có câu trả lời riêng; quan trọng là dám nhìn nhận và lập kế hoạch rèn luyện cụ thể.' },
    ]
  ),

  'S9GDCD-w13-quiz': L(
    'Kiểm tra giữa HK1',
    'Bài kiểm tra giữa kì giúp các em đánh giá mức độ nắm bài, làm quen cấu trúc đề thi cuối cấp.',
    ['Hệ thống các phẩm chất đạo đức đã học.', 'Làm quen cấu trúc đề kiểm tra trắc nghiệm.', 'Rèn kỹ năng phân tích tình huống.'],
    [
      { h: 'Cấu trúc đề kiểm tra' },
      { ul: ['Trắc nghiệm: 40-50% — nắm khái niệm, biểu hiện.', 'Tự luận: 50-60% — phân tích tình huống thực tế.'] },
      { h: 'Chiến lược làm bài' },
      { p: 'Đọc kỹ đề, làm câu dễ trước, câu khó sau. Câu tình huống nên: nêu vấn đề → vận dụng phẩm chất phù hợp → đưa giải pháp cụ thể.' },
      { note: 'Đáp án GDCD không có "đúng tuyệt đối" — cần lập luận hợp lý, đạo đức và pháp luật.' },
    ],
    [
      { q: 'Đề hỏi "Em xử lý thế nào nếu bạn vứt rác bừa bãi?". Hướng làm?', a: 'Nêu vấn đề (bạn vi phạm vệ sinh chung) → vận dụng phẩm chất (tự chủ, trách nhiệm) → giải pháp (nhắc nhở nhẹ nhàng, cùng dọn rác, nếu lặp lại thì báo lớp trưởng).' },
      { q: 'Câu trắc nghiệm 4 đáp án đều "có vẻ đúng" — chọn thế nào?', a: 'Chọn đáp án chính xác nhất, đầy đủ nhất; loại đáp án quá tuyệt đối ("luôn luôn", "mãi mãi") hoặc quá hạn chế.' },
    ]
  ),

  'S9GDCD-w14-quiz': L(
    'Quyền và nghĩa vụ của công dân trong hôn nhân — Nguyên tắc',
    'Chuyển sang phần Pháp luật, các em học các quyền và nghĩa vụ cơ bản của công dân — bắt đầu từ hôn nhân.',
    ['Hiểu khái niệm hôn nhân theo pháp luật VN.', 'Nắm nguyên tắc cơ bản của chế độ hôn nhân.', 'Có thái độ đúng về tình yêu tuổi học trò.'],
    [
      { h: 'Hôn nhân là gì?' },
      { p: 'Hôn nhân là quan hệ giữa vợ và chồng sau khi đã kết hôn (Luật Hôn nhân và Gia đình 2014).' },
      { h: 'Nguyên tắc cơ bản' },
      { ul: ['Tự nguyện, tiến bộ.', 'Một vợ một chồng.', 'Vợ chồng bình đẳng.', 'Tôn trọng, bảo vệ trẻ em và phụ nữ.', 'Không phân biệt tôn giáo, dân tộc, biên giới.'] },
      { h: 'Tuổi kết hôn' },
      { p: 'Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên (Luật HN&GĐ 2014). Dưới tuổi là tảo hôn — vi phạm pháp luật.' },
      { note: 'Tình yêu tuổi học trò không phải sai, nhưng kết hôn ở tuổi vị thành niên là vi phạm pháp luật và có hại lâu dài.' },
    ],
    [
      { q: 'Bạn em 17 tuổi định "cưới chui". Em khuyên gì?', a: 'Đây là tảo hôn — vi phạm Luật HN&GĐ. Khuyên bạn chờ đủ tuổi, tập trung học tập; nếu cần thì báo phụ huynh hoặc thầy cô.' },
      { q: 'Bố mẹ ép em kết hôn — đúng hay sai?', a: 'Sai — vi phạm nguyên tắc tự nguyện. Em có quyền từ chối và được pháp luật bảo vệ; có thể nhờ chính quyền địa phương can thiệp.' },
    ]
  ),

  'S9GDCD-w15-quiz': L(
    'Quyền tự do kinh doanh và nghĩa vụ đóng thuế',
    'Trong nền kinh tế thị trường, công dân có quyền tự do kinh doanh nhưng phải tuân thủ pháp luật, đặc biệt là nghĩa vụ thuế.',
    ['Hiểu khái niệm quyền tự do kinh doanh.', 'Nắm khái niệm và ý nghĩa của thuế.', 'Có thái độ đúng về nghĩa vụ thuế.'],
    [
      { h: 'Quyền tự do kinh doanh' },
      { p: 'Công dân có quyền lựa chọn hình thức tổ chức kinh tế, ngành nghề, quy mô kinh doanh theo quy định của pháp luật và phải đăng ký với cơ quan có thẩm quyền.' },
      { h: 'Nghĩa vụ đóng thuế' },
      { p: 'Thuế là khoản thu bắt buộc mà tổ chức, cá nhân phải nộp cho nhà nước theo quy định của pháp luật. Một số loại thuế: GTGT (VAT), TNDN, TNCN, thuế tiêu thụ đặc biệt.' },
      { h: 'Vai trò của thuế' },
      { ul: ['Là nguồn thu chính của ngân sách nhà nước.', 'Dùng đầu tư phát triển kinh tế-xã hội: trường học, bệnh viện, đường xá.', 'Điều tiết kinh tế vĩ mô.'] },
      { note: 'Trốn thuế, gian lận thuế là vi phạm pháp luật, có thể bị xử lý hành chính hoặc hình sự.' },
    ],
    [
      { q: 'Người bán hàng không xuất hoá đơn cho khách — vì sao họ làm vậy?', a: 'Để trốn thuế GTGT. Đây là hành vi vi phạm pháp luật, ảnh hưởng đến ngân sách quốc gia. Khách hàng nên yêu cầu hoá đơn.' },
      { q: 'Mua bán online nhỏ lẻ có phải đóng thuế không?', a: 'Có, nếu doanh thu vượt mức quy định (hiện 100 triệu/năm cho cá nhân kinh doanh). Cần đăng ký mã số thuế và kê khai.' },
    ]
  ),

  'S9GDCD-w16-quiz': L(
    'Quyền và nghĩa vụ lao động của công dân',
    'Lao động là quyền và nghĩa vụ của công dân — vừa là phương tiện sinh sống vừa đóng góp cho xã hội.',
    ['Hiểu lao động là quyền và nghĩa vụ.', 'Nắm các quy định cơ bản về lao động chưa thành niên.', 'Có thái độ đúng về lao động.'],
    [
      { h: 'Lao động là gì?' },
      { p: 'Lao động là hoạt động có mục đích của con người, dùng sức và trí tuệ tạo ra của cải vật chất và tinh thần cho xã hội.' },
      { h: 'Quyền và nghĩa vụ lao động' },
      { ul: ['Quyền: tự do làm việc, chọn nghề, được trả công.', 'Nghĩa vụ: lao động để tự nuôi mình, gia đình; góp xây đất nước.'] },
      { h: 'Lao động chưa thành niên' },
      { ul: ['Người lao động chưa thành niên là dưới 18 tuổi.', 'Đủ 15 tuổi mới được giao kết HĐLĐ với một số công việc.', 'Dưới 15 chỉ được làm công việc nhẹ, có sự đồng ý của cha mẹ.', 'Cấm sử dụng lao động trẻ em ở công việc nặng nhọc, độc hại.'] },
      { note: 'Pháp luật bảo vệ đặc biệt người lao động chưa thành niên.' },
    ],
    [
      { q: 'Em 14 tuổi xin đi bưng bê quán cà phê đêm — có được không?', a: 'Không. Em chưa đủ 15 tuổi, công việc đêm thuộc loại không phù hợp với lao động chưa thành niên. Vi phạm Luật Lao động.' },
      { q: 'Người sử dụng lao động trẻ em làm việc 10 tiếng/ngày — vi phạm gì?', a: 'Vi phạm Luật Lao động — lao động chưa thành niên không được làm quá 8 giờ/ngày (15-18 tuổi) và không được làm các công việc nặng nhọc.' },
    ]
  ),

  'S9GDCD-w17-quiz': L(
    'Vi phạm pháp luật và trách nhiệm pháp lý',
    'Hiểu rõ vi phạm pháp luật và trách nhiệm pháp lý giúp công dân tránh xa hành vi sai trái.',
    ['Hiểu khái niệm vi phạm pháp luật.', 'Phân biệt 4 loại vi phạm và 4 loại trách nhiệm pháp lý.', 'Có ý thức tuân thủ pháp luật.'],
    [
      { h: 'Vi phạm pháp luật' },
      { p: 'Là hành vi trái pháp luật, có lỗi do người có năng lực trách nhiệm pháp lý thực hiện, xâm hại đến các quan hệ xã hội được pháp luật bảo vệ.' },
      { h: '4 loại vi phạm pháp luật' },
      { ul: ['Hình sự (tội phạm): cướp, giết, ma tuý.', 'Hành chính: vượt đèn đỏ, gây mất trật tự.', 'Dân sự: không thực hiện hợp đồng, gây thiệt hại.', 'Kỉ luật: vi phạm nội quy cơ quan, trường học.'] },
      { h: '4 loại trách nhiệm pháp lý' },
      { ul: ['Hình sự: tù, phạt tù chung thân, tử hình.', 'Hành chính: phạt tiền, cảnh cáo.', 'Dân sự: bồi thường thiệt hại.', 'Kỉ luật: khiển trách, cách chức.'] },
      { note: 'Trẻ em từ đủ 14 tuổi đã có thể chịu trách nhiệm hình sự với một số tội nghiêm trọng.' },
    ],
    [
      { q: 'Bạn 15 tuổi cướp giật điện thoại — chịu trách nhiệm gì?', a: 'Trách nhiệm hình sự (cướp giật tài sản, Điều 171 BLHS). Người 14-16 tuổi chịu TNHS với tội rất nghiêm trọng và đặc biệt nghiêm trọng.' },
      { q: 'Vượt đèn đỏ — vi phạm gì?', a: 'Vi phạm hành chính, bị phạt tiền theo Nghị định xử phạt VPHC trong lĩnh vực giao thông đường bộ.' },
    ]
  ),

  'S9GDCD-w18-quiz': L(
    'Ôn tập học kì I',
    'Tổng kết toàn bộ kiến thức HK1 gồm cả đạo đức và pháp luật, chuẩn bị cho kiểm tra cuối kì.',
    ['Hệ thống hoá kiến thức HK1.', 'Vận dụng tổng hợp vào tình huống pháp luật-đạo đức.', 'Rèn kỹ năng làm bài thi.'],
    [
      { h: 'Hai mảng kiến thức HK1' },
      { ul: ['Đạo đức: 11 phẩm chất từ chí công vô tư đến trách nhiệm thanh niên.', 'Pháp luật: hôn nhân, kinh doanh, lao động, vi phạm và trách nhiệm pháp lý.'] },
      { h: 'Liên hệ đạo đức và pháp luật' },
      { p: 'Đạo đức là gốc của pháp luật; pháp luật là tối thiểu hoá yêu cầu đạo đức. Người có đạo đức thường không vi phạm pháp luật.' },
      { note: 'Đề HK1 thường có cả câu trắc nghiệm và tình huống — cần làm chủ cả hai dạng.' },
    ],
    [
      { q: 'Tình huống đạo đức + pháp luật giao thoa: bạn nhỏ bán hàng rong giữa đêm. Phân tích?', a: 'Đạo đức: hoàn cảnh khó khăn cần đồng cảm. Pháp luật: vi phạm Luật Lao động về lao động trẻ em. Giải pháp: báo cơ quan bảo vệ trẻ em, hỗ trợ gia đình.' },
      { q: 'Phương pháp ôn tập hiệu quả tuần cuối?', a: 'Lập sơ đồ tư duy hệ thống khái niệm; làm đề năm trước; trao đổi nhóm về tình huống.' },
    ]
  ),

  'S9GDCD-w19-quiz': L(
    'Quyền tham gia quản lý nhà nước, quản lý xã hội',
    'Mở đầu HK2, các em học các quyền chính trị cơ bản của công dân — bắt đầu từ quyền tham gia quản lý nhà nước.',
    ['Hiểu khái niệm quyền tham gia QLNN-QLXH.', 'Phân biệt hình thức trực tiếp và gián tiếp.', 'Có ý thức thực hiện quyền này.'],
    [
      { h: 'Khái niệm' },
      { p: 'Quyền tham gia quản lý nhà nước, quản lý xã hội là quyền của công dân tham gia bàn bạc, tổ chức thực hiện, giám sát đánh giá các hoạt động, các công việc chung của nhà nước và xã hội.' },
      { h: 'Hai hình thức' },
      { ul: ['Trực tiếp: tự mình trực tiếp tham gia (bầu cử, ứng cử, biểu quyết).', 'Gián tiếp: thông qua đại biểu Quốc hội, HĐND.'] },
      { h: 'Ý nghĩa' },
      { p: 'Là quyền chính trị cơ bản, thể hiện bản chất dân chủ của nhà nước; tạo điều kiện để công dân làm chủ.' },
      { note: 'Đủ 18 tuổi có quyền bầu cử, đủ 21 tuổi có quyền ứng cử ĐBQH/HĐND.' },
    ],
    [
      { q: 'Em 15 tuổi tham gia QLNN bằng cách nào?', a: 'Học tốt về pháp luật; góp ý kiến qua các cuộc họp lớp/trường; tham gia hoạt động Đoàn-Đội; theo dõi tin tức chính trị.' },
      { q: 'Bố em đi bầu cử — đây là hình thức tham gia nào?', a: 'Trực tiếp — bố trực tiếp thực hiện quyền bầu cử để chọn người đại diện.' },
    ]
  ),

  'S9GDCD-w20-quiz': L(
    'Nghĩa vụ bảo vệ Tổ quốc',
    'Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và cao quý của mỗi công dân Việt Nam.',
    ['Hiểu khái niệm bảo vệ Tổ quốc.', 'Nắm nội dung nghĩa vụ bảo vệ Tổ quốc.', 'Có hành động thiết thực bảo vệ Tổ quốc.'],
    [
      { h: 'Bảo vệ Tổ quốc là gì?' },
      { p: 'Là bảo vệ độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ; bảo vệ chế độ XHCN và Nhà nước CHXHCN Việt Nam.' },
      { h: 'Nội dung' },
      { ul: ['Xây dựng lực lượng quốc phòng toàn dân.', 'Thực hiện nghĩa vụ quân sự.', 'Bảo vệ trật tự, an ninh xã hội.', 'Thực hiện chính sách hậu phương quân đội.'] },
      { h: 'Nghĩa vụ quân sự' },
      { p: 'Công dân nam đủ 18 tuổi gọi nhập ngũ, độ tuổi 18-25 (CN-CĐ-ĐH đến 27). Nữ tự nguyện đăng ký.' },
      { note: 'Bảo vệ Tổ quốc không chỉ là cầm súng — còn là học tập, lao động, bảo vệ chủ quyền số.' },
    ],
    [
      { q: 'HS lớp 9 có thể bảo vệ Tổ quốc thế nào?', a: 'Học giỏi để xây đất nước; rèn sức khoẻ; giữ gìn bí mật quốc gia; chống thông tin xấu trên mạng; tham gia hoạt động Đoàn-Đội.' },
      { q: 'Anh em trốn nghĩa vụ quân sự — vi phạm gì?', a: 'Vi phạm Luật Nghĩa vụ Quân sự, có thể bị xử lý hành chính hoặc hình sự tuỳ mức độ.' },
    ]
  ),

  'S9GDCD-w21-quiz': L(
    'Sống có đạo đức và tuân theo pháp luật',
    'Bài học tổng kết mối quan hệ đạo đức - pháp luật, định hướng cho công dân tương lai.',
    ['Hiểu mối quan hệ đạo đức - pháp luật.', 'Phân biệt và liên hệ hai phạm trù.', 'Có ý thức sống đạo đức + tuân pháp luật.'],
    [
      { h: 'Sống có đạo đức' },
      { p: 'Là suy nghĩ, hành động theo những chuẩn mực đạo đức xã hội: biết chăm lo lợi ích chung; luôn tôn trọng lẽ phải, đấu tranh chống cái sai.' },
      { h: 'Tuân theo pháp luật' },
      { p: 'Là sống và hành động theo những quy định bắt buộc của pháp luật.' },
      { h: 'Mối quan hệ' },
      { ul: ['Đạo đức là gốc; pháp luật là khuôn.', 'Người có đạo đức tốt thường tự giác tuân pháp luật.', 'Người tuân pháp luật mà thiếu đạo đức vẫn có thể làm hại xã hội (theo luật mà thiếu nhân).', 'Đạo đức + pháp luật là điều kiện cho xã hội văn minh.'] },
      { note: '"Pháp luật bất vị thân" — pháp luật không phân biệt người thân hay người ngoài.' },
    ],
    [
      { q: 'Một người tuân pháp luật nhưng đối xử tệ với cha mẹ — đánh giá thế nào?', a: 'Người này thiếu đạo đức. Tuân pháp luật là điều kiện cần nhưng chưa đủ. Sống tử tế còn cần lòng hiếu thảo, yêu thương.' },
      { q: 'Đạo đức xã hội thay đổi theo thời đại — đúng không?', a: 'Đúng. Có những chuẩn mực đạo đức đã thay đổi (ví dụ: bình đẳng nam-nữ). Nhưng giá trị cốt lõi (yêu thương, trung thực) luôn tồn tại.' },
    ]
  ),

  'S9GDCD-w22-quiz': L(
    'Pháp luật và kỉ luật',
    'Pháp luật và kỉ luật đều là quy tắc xử sự — phân biệt rõ hai khái niệm giúp công dân có ứng xử phù hợp.',
    ['Phân biệt pháp luật và kỉ luật.', 'Nắm mối quan hệ giữa hai phạm trù.', 'Có ý thức tuân thủ cả hai.'],
    [
      { h: 'Pháp luật' },
      { p: 'Là các quy tắc xử sự chung, có tính bắt buộc, do nhà nước ban hành, bảo đảm thực hiện bằng các biện pháp giáo dục, thuyết phục, cưỡng chế.' },
      { h: 'Kỉ luật' },
      { p: 'Là quy định, quy ước của một cộng đồng (tập thể) về hành vi cần tuân theo nhằm đảm bảo phối hợp hành động.' },
      { h: 'So sánh' },
      { ul: ['Phạm vi: pháp luật cả nước; kỉ luật trong tập thể.', 'Cơ quan ban hành: nhà nước / cơ quan, đoàn thể.', 'Mức độ cưỡng chế: pháp luật mạnh hơn.', 'Mối liên hệ: kỉ luật không trái pháp luật.'] },
      { note: 'Nội quy nhà trường là kỉ luật; vi phạm pháp luật trong trường còn bị xử lý theo pháp luật.' },
    ],
    [
      { q: 'Đi học muộn — vi phạm gì?', a: 'Kỉ luật nhà trường, có thể bị nhắc nhở hoặc xử lý theo nội quy.' },
      { q: 'Đánh bạn gây thương tích trong trường — vi phạm gì?', a: 'Vi phạm cả kỉ luật (nội quy) và pháp luật (cố ý gây thương tích). Bị xử lý theo cả hai.' },
    ]
  ),

  'S9GDCD-w23-quiz': L(
    'Trách nhiệm pháp lý — Các loại cụ thể',
    'Đi sâu vào 4 loại trách nhiệm pháp lý: hình sự, hành chính, dân sự, kỉ luật.',
    ['Phân biệt rõ 4 loại trách nhiệm pháp lý.', 'Nhận biết hình thức xử phạt từng loại.', 'Vận dụng vào tình huống thực tế.'],
    [
      { h: 'Trách nhiệm hình sự' },
      { p: 'Áp dụng cho tội phạm. Hình phạt: cảnh cáo, phạt tiền, cải tạo không giam giữ, tù có thời hạn, tù chung thân, tử hình.' },
      { h: 'Trách nhiệm hành chính' },
      { p: 'Áp dụng cho VPHC. Hình thức: cảnh cáo, phạt tiền, tước quyền sử dụng giấy phép.' },
      { h: 'Trách nhiệm dân sự' },
      { p: 'Áp dụng cho vi phạm dân sự. Biện pháp: bồi thường thiệt hại, thực hiện nghĩa vụ.' },
      { h: 'Trách nhiệm kỉ luật' },
      { p: 'Áp dụng trong nội bộ cơ quan, trường học: khiển trách, cảnh cáo, hạ bậc lương, sa thải/đuổi học.' },
      { note: 'Một hành vi có thể chịu nhiều loại trách nhiệm cùng lúc.' },
    ],
    [
      { q: 'Một CSGT nhận hối lộ — chịu trách nhiệm gì?', a: 'Hình sự (tội nhận hối lộ) + Kỉ luật (cách chức, sa thải). Một hành vi nhưng nhiều loại trách nhiệm.' },
      { q: 'Vô ý gây cháy nhà hàng xóm — chịu trách nhiệm gì?', a: 'Hình sự (nếu thiệt hại lớn) + Dân sự (bồi thường thiệt hại). Có thể không nếu thiệt hại nhỏ và là tai nạn.' },
    ]
  ),

  'S9GDCD-w24-quiz': L(
    'Quyền và nghĩa vụ lao động — Tiếp',
    'Đi sâu vào HĐLĐ, lương, BHXH và các quyền cơ bản của người lao động hiện đại.',
    ['Hiểu khái niệm hợp đồng lao động.', 'Nắm các loại bảo hiểm bắt buộc.', 'Biết quyền của người lao động.'],
    [
      { h: 'Hợp đồng lao động (HĐLĐ)' },
      { p: 'Là sự thoả thuận giữa người lao động và người sử dụng lao động về việc làm có trả lương, điều kiện làm việc, quyền và nghĩa vụ của mỗi bên.' },
      { h: 'Các loại HĐLĐ' },
      { ul: ['HĐLĐ không xác định thời hạn.', 'HĐLĐ xác định thời hạn (tối đa 36 tháng).'] },
      { h: 'Tiền lương và BHXH' },
      { ul: ['Lương tối thiểu vùng do Chính phủ quy định.', 'BHXH bắt buộc: hưu trí, ốm đau, thai sản, tai nạn lao động, tử tuất.', 'BHYT, BHTN bắt buộc với HĐLĐ ≥1 tháng.'] },
      { note: 'Hiểu HĐLĐ giúp người trẻ bảo vệ quyền lợi khi đi làm.' },
    ],
    [
      { q: 'Người sử dụng LĐ không đóng BHXH cho NLĐ — vi phạm gì?', a: 'Vi phạm Luật BHXH. NLĐ có thể khiếu nại lên cơ quan BHXH hoặc tố cáo lên Thanh tra Lao động.' },
      { q: 'Em đi làm thêm hè — có cần ký HĐLĐ không?', a: 'Có. Dù là việc thời vụ vẫn nên ký HĐLĐ để bảo vệ quyền lợi (lương, bảo hiểm tai nạn).' },
    ]
  ),

  'S9GDCD-w25-quiz': L(
    'Hôn nhân — Tiếp',
    'Đi sâu vào quyền và nghĩa vụ vợ chồng, hậu quả pháp lý của tảo hôn và hôn nhân cận huyết.',
    ['Nắm quyền và nghĩa vụ vợ chồng.', 'Hiểu hậu quả của tảo hôn và hôn nhân cận huyết.', 'Có thái độ phê phán các hủ tục.'],
    [
      { h: 'Quyền và nghĩa vụ vợ chồng' },
      { ul: ['Yêu thương, chung thuỷ.', 'Bình đẳng, tôn trọng nhau.', 'Cùng chăm sóc, giáo dục con.', 'Đại diện hợp pháp cho nhau.', 'Bình đẳng về tài sản chung.'] },
      { h: 'Tảo hôn' },
      { p: 'Kết hôn khi chưa đủ tuổi — vi phạm Luật HN&GĐ. Hậu quả: hôn nhân vô hiệu, ảnh hưởng sức khoẻ, học tập, kinh tế.' },
      { h: 'Hôn nhân cận huyết' },
      { p: 'Kết hôn giữa những người có cùng dòng máu trực hệ; giữa 3 đời. Cấm theo luật vì hậu quả về di truyền, sức khoẻ.' },
      { note: 'Một số dân tộc thiểu số còn duy trì hủ tục cận huyết — cần được tuyên truyền xoá bỏ.' },
    ],
    [
      { q: 'Hậu quả về sức khoẻ của hôn nhân cận huyết?', a: 'Con sinh ra có nguy cơ cao mắc bệnh di truyền (thalassemia, bạch tạng), dị tật, chậm phát triển trí tuệ.' },
      { q: 'Em phát hiện trong làng có tảo hôn — em làm gì?', a: 'Báo cho cha mẹ, thầy cô, chính quyền địa phương (UBND xã, Hội Phụ nữ) để can thiệp kịp thời.' },
    ]
  ),

  'S9GDCD-w26-quiz': L(
    'Tệ nạn xã hội — Phòng chống',
    'Tệ nạn xã hội đe doạ nghiêm trọng đến cá nhân, gia đình và xã hội — đặc biệt với lứa tuổi thanh thiếu niên.',
    ['Hiểu khái niệm tệ nạn xã hội.', 'Nhận biết các tệ nạn phổ biến.', 'Biết cách phòng tránh và xử lý.'],
    [
      { h: 'Tệ nạn xã hội là gì?' },
      { p: 'Là hiện tượng xã hội tiêu cực, biểu hiện bằng những hành vi sai lệch chuẩn mực đạo đức, pháp luật, gây hậu quả xấu cho cá nhân, gia đình và xã hội.' },
      { h: 'Các tệ nạn phổ biến' },
      { ul: ['Ma tuý — nguy hiểm nhất.', 'Cờ bạc.', 'Mại dâm.', 'Mê tín dị đoan.', 'Bạo lực, trộm cướp.'] },
      { h: 'Phòng chống' },
      { ul: ['Sống lành mạnh, có lý tưởng.', 'Chọn bạn tốt mà chơi.', 'Khi bị rủ rê, kiên quyết từ chối.', 'Báo người lớn, công an khi gặp tình huống nguy hiểm.'] },
      { note: 'Người chưa thành niên cũng bị xử lý hình sự với tội ma tuý nghiêm trọng.' },
    ],
    [
      { q: 'Bạn rủ em thử "cỏ" để biết cảm giác — em làm gì?', a: 'Kiên quyết từ chối, giải thích cho bạn về tác hại. Nếu bạn vẫn dùng, báo phụ huynh hoặc thầy cô để can thiệp.' },
      { q: 'Vì sao ma tuý nguy hiểm nhất trong các tệ nạn?', a: 'Vì gây nghiện rất nhanh, phá huỷ sức khoẻ, gia đình, dễ dẫn đến tội phạm khác (cướp, giết). HIV/AIDS lây qua tiêm chích chung.' },
    ]
  ),

  'S9GDCD-w27-quiz': L(
    'Quyền tự do tín ngưỡng, tôn giáo',
    'Việt Nam tôn trọng quyền tự do tín ngưỡng, tôn giáo của công dân, nhưng phải tuân thủ pháp luật.',
    ['Hiểu khái niệm tín ngưỡng, tôn giáo.', 'Nắm quyền tự do tín ngưỡng theo pháp luật VN.', 'Phân biệt với mê tín dị đoan.'],
    [
      { h: 'Khái niệm' },
      { ul: ['Tín ngưỡng: niềm tin của con người vào điều thiêng liêng.', 'Tôn giáo: hệ thống tín ngưỡng có tổ chức, giáo lý, lễ nghi.'] },
      { h: 'Quyền tự do tín ngưỡng, tôn giáo' },
      { p: 'Công dân có quyền theo hoặc không theo tôn giáo nào. Tôn giáo bình đẳng trước pháp luật. Nhà nước tôn trọng và bảo hộ quyền này.' },
      { h: 'Phân biệt với mê tín dị đoan' },
      { ul: ['Tôn giáo: có giáo lý, đạo đức hướng thiện.', 'Mê tín: tin nhảm nhí gây thiệt hại (bói toán, đồng cốt lừa tiền).'] },
      { note: 'Lợi dụng tôn giáo chống nhà nước, gây mất trật tự là vi phạm pháp luật.' },
    ],
    [
      { q: 'Bạn em theo đạo Phật, bạn khác theo Công giáo — em ứng xử thế nào?', a: 'Tôn trọng cả hai, không phân biệt; tìm hiểu để hiểu thêm văn hoá; không bài xích, kỳ thị.' },
      { q: 'Cô đồng bảo phải nộp 50 triệu giải hạn — đây là gì?', a: 'Mê tín dị đoan, lợi dụng tín ngưỡng để trục lợi — vi phạm pháp luật. Cần báo công an.' },
    ]
  ),

  'S9GDCD-w28-quiz': L(
    'Quyền sở hữu tài sản và bảo vệ tài sản',
    'Quyền sở hữu là một trong những quyền cơ bản của công dân, được pháp luật bảo vệ.',
    ['Hiểu khái niệm quyền sở hữu.', 'Phân biệt 3 quyền: chiếm hữu, sử dụng, định đoạt.', 'Biết bảo vệ tài sản hợp pháp.'],
    [
      { h: 'Quyền sở hữu' },
      { p: 'Quyền của công dân đối với tài sản thuộc quyền sở hữu hợp pháp của mình. Gồm 3 quyền:' },
      { ul: ['Chiếm hữu: nắm giữ, quản lý tài sản.', 'Sử dụng: khai thác công dụng, hưởng lợi từ tài sản.', 'Định đoạt: quyết định tài sản (bán, tặng, huỷ).'] },
      { h: 'Trách nhiệm' },
      { ul: ['Tôn trọng tài sản của người khác — không lấy cắp, chiếm đoạt.', 'Bảo vệ tài sản của mình hợp pháp.', 'Khi nhặt được phải trả lại chủ hoặc giao công an.'] },
      { note: 'Tài sản nhà nước, tài sản công cộng cũng được pháp luật bảo vệ — không phá hoại.' },
    ],
    [
      { q: 'Em nhặt được ví có 5 triệu — em làm gì?', a: 'Trả lại chủ nếu biết, không biết thì giao công an. Đây là nghĩa vụ pháp lý — tự ý lấy là chiếm đoạt tài sản người khác.' },
      { q: 'Bạn em phá thiết bị thể thao trường — vi phạm gì?', a: 'Vi phạm dân sự (phải bồi thường) + kỉ luật trường + có thể hình sự nếu thiệt hại lớn (huỷ hoại tài sản).' },
    ]
  ),

  'S9GDCD-w29-quiz': L(
    'Quyền khiếu nại, tố cáo',
    'Khiếu nại và tố cáo là công cụ pháp lý quan trọng để công dân bảo vệ quyền của mình và xã hội.',
    ['Phân biệt khiếu nại và tố cáo.', 'Nắm thủ tục khiếu nại, tố cáo cơ bản.', 'Có ý thức sử dụng đúng đắn.'],
    [
      { h: 'Quyền khiếu nại' },
      { p: 'Quyền của công dân đề nghị cơ quan có thẩm quyền xem xét lại các quyết định hành chính, hành vi hành chính khi có căn cứ cho rằng quyết định đó trái pháp luật, xâm phạm quyền lợi của mình.' },
      { h: 'Quyền tố cáo' },
      { p: 'Quyền của công dân báo cho cơ quan có thẩm quyền biết về hành vi vi phạm pháp luật của bất kỳ cơ quan, tổ chức, cá nhân nào gây thiệt hại hoặc đe doạ gây thiệt hại đến lợi ích nhà nước, lợi ích hợp pháp của công dân.' },
      { h: 'So sánh' },
      { ul: ['Khiếu nại: bảo vệ quyền của chính mình.', 'Tố cáo: bảo vệ lợi ích nhà nước, người khác.', 'Cả hai đều phải đúng sự thật.'] },
      { note: 'Khiếu nại, tố cáo sai sự thật là vi phạm pháp luật, có thể bị xử lý hình sự.' },
    ],
    [
      { q: 'Bạn bị thầy cho điểm sai do nhầm — bạn thực hiện quyền gì?', a: 'Khiếu nại — đề nghị thầy/cô giám hiệu xem lại kết quả. Đây là khiếu nại vì bảo vệ quyền của chính bạn.' },
      { q: 'Em phát hiện hàng xóm buôn ma tuý — em thực hiện quyền gì?', a: 'Tố cáo — báo công an. Đây là bảo vệ lợi ích xã hội, không liên quan trực tiếp đến em.' },
    ]
  ),

  'S9GDCD-w30-quiz': L(
    'Quyền tự do ngôn luận',
    'Tự do ngôn luận là quyền chính trị cơ bản, nhưng phải thực hiện trong khuôn khổ pháp luật.',
    ['Hiểu khái niệm quyền tự do ngôn luận.', 'Phân biệt tự do ngôn luận đúng đắn và lạm dụng.', 'Có ý thức sử dụng quyền trên không gian mạng.'],
    [
      { h: 'Khái niệm' },
      { p: 'Quyền tự do ngôn luận là quyền của công dân được tham gia bàn bạc, thảo luận, đóng góp ý kiến vào những vấn đề chung của đất nước, xã hội.' },
      { h: 'Hình thức thực hiện' },
      { ul: ['Phát biểu trong các cuộc họp.', 'Viết bài đăng báo, mạng xã hội.', 'Gửi đơn thư, kiến nghị.'] },
      { h: 'Giới hạn' },
      { p: 'Không lợi dụng tự do ngôn luận để: xuyên tạc, chống nhà nước; vu khống, xúc phạm danh dự người khác; gây mất trật tự xã hội. Vi phạm có thể bị xử lý theo Luật ANM, Luật ATTT Mạng, BLHS.' },
      { note: 'Trên mạng xã hội cần tỉnh táo — phát biểu chịu trách nhiệm trước pháp luật.' },
    ],
    [
      { q: 'Đăng Facebook nói xấu thầy cô — vi phạm gì?', a: 'Vi phạm Luật An ninh mạng, có thể bị phạt hành chính hoặc hình sự (tội làm nhục, vu khống). Vi phạm cả đạo đức.' },
      { q: 'Góp ý cho trường về nội quy — đúng hay sai?', a: 'Đúng, đây là thực hiện quyền tự do ngôn luận tích cực, đóng góp xây dựng — nên thực hiện qua kênh chính thức (họp, hộp thư góp ý).' },
    ]
  ),

  'S9GDCD-w31-quiz': L(
    'Bảo vệ Tổ quốc — Tiếp',
    'Bảo vệ Tổ quốc trong thời đại mới còn bao gồm bảo vệ chủ quyền biển đảo, an ninh mạng, an ninh phi truyền thống.',
    ['Hiểu nội dung bảo vệ Tổ quốc thời hiện đại.', 'Nắm các thách thức an ninh mới.', 'Có hành động thiết thực phù hợp.'],
    [
      { h: 'Chủ quyền biển đảo' },
      { p: 'Việt Nam có chủ quyền với hai quần đảo Hoàng Sa, Trường Sa và vùng biển theo Công ước LHQ về Luật Biển (UNCLOS 1982). Bảo vệ chủ quyền là nghĩa vụ thiêng liêng.' },
      { h: 'An ninh mạng' },
      { ul: ['Chống tấn công mạng vào hạ tầng quan trọng.', 'Chống thông tin xấu, độc trên mạng.', 'Bảo vệ thông tin cá nhân.'] },
      { h: 'An ninh phi truyền thống' },
      { ul: ['Khủng bố, tội phạm xuyên quốc gia.', 'Dịch bệnh, biến đổi khí hậu.', 'An ninh năng lượng, lương thực.'] },
      { note: 'Bảo vệ Tổ quốc thời 4.0 cần kết hợp truyền thống và hiện đại.' },
    ],
    [
      { q: 'Em chia sẻ thông tin sai về chủ quyền biển đảo trên Facebook — hậu quả?', a: 'Vi phạm Luật An ninh mạng, có thể bị phạt hành chính hoặc xử lý hình sự nếu nghiêm trọng. Cần kiểm tra nguồn trước khi chia sẻ.' },
      { q: 'HS làm gì để bảo vệ chủ quyền biển đảo?', a: 'Tìm hiểu lịch sử, pháp lý về chủ quyền; chia sẻ thông tin chính thống; ủng hộ ngư dân, chiến sĩ; lên án thông tin sai lệch.' },
    ]
  ),

  'S9GDCD-w32-quiz': L(
    'Ôn tập pháp luật — Tổng hợp',
    'Hệ thống hoá toàn bộ kiến thức pháp luật HK2 chuẩn bị cho thi cuối kì và thi vào 10.',
    ['Hệ thống các quyền và nghĩa vụ công dân.', 'Vận dụng tổng hợp.', 'Rèn kỹ năng làm bài thi pháp luật.'],
    [
      { h: 'Các quyền cơ bản đã học' },
      { ul: ['Quyền tham gia QLNN, QLXH.', 'Quyền tự do tín ngưỡng, tôn giáo.', 'Quyền sở hữu tài sản.', 'Quyền khiếu nại, tố cáo.', 'Quyền tự do ngôn luận.', 'Quyền và nghĩa vụ hôn nhân, lao động, kinh doanh.'] },
      { h: 'Các nghĩa vụ' },
      { ul: ['Bảo vệ Tổ quốc.', 'Đóng thuế.', 'Tuân thủ pháp luật.', 'Tôn trọng quyền của người khác.'] },
      { note: 'Quyền luôn đi đôi với nghĩa vụ — không có quyền tuyệt đối.' },
    ],
    [
      { q: 'Một câu hỏi vận dụng "Bạn 16 tuổi đi làm bị quỵt lương" — phân tích?', a: 'Bạn có quyền và nghĩa vụ lao động; bị quỵt lương — vi phạm Luật LĐ. Bạn có quyền khiếu nại lên cơ quan LĐ-TBXH, kiện ra toà án dân sự.' },
      { q: 'Phương pháp ôn pháp luật hiệu quả?', a: 'Lập bảng so sánh các quyền-nghĩa vụ; nhớ con số quan trọng (tuổi, năm luật); làm tình huống thực tế.' },
    ]
  ),

  'S9GDCD-w33-quiz': L(
    'Sống có đạo đức và tuân pháp luật — Vận dụng',
    'Vận dụng tổng hợp đạo đức và pháp luật vào tình huống đời thực — chuẩn bị làm công dân trưởng thành.',
    ['Vận dụng tổng hợp đạo đức + pháp luật.', 'Phân tích các tình huống phức tạp.', 'Xây dựng kế hoạch sống đúng đắn.'],
    [
      { h: 'Nguyên tắc vận dụng' },
      { ul: ['Đặt câu hỏi: vi phạm đạo đức nào? Pháp luật nào?', 'Tìm giải pháp đạt cả hai mục tiêu.', 'Hành động cụ thể, có lộ trình.'] },
      { h: 'Các tình huống điển hình' },
      { ul: ['Tranh chấp tài sản.', 'Tệ nạn xã hội xâm nhập trường học.', 'Bạo lực gia đình.', 'An toàn giao thông.'] },
      { note: 'Người sống có đạo đức + tuân pháp luật là công dân lý tưởng của xã hội văn minh.' },
    ],
    [
      { q: 'Anh em đánh em gái — em vận dụng gì?', a: 'Đạo đức: bạo lực gia đình là sai. Pháp luật: vi phạm Luật Phòng chống bạo lực gia đình. Giải pháp: báo cha mẹ, nếu nghiêm trọng báo công an, Hội Phụ nữ.' },
      { q: 'Em xây kế hoạch sống đúng đắn 5 năm tới?', a: 'Học giỏi để vào THPT tốt; rèn đạo đức (trung thực, có trách nhiệm); tuân pháp luật giao thông, ANM; tham gia hoạt động xã hội.' },
    ]
  ),

  'S9GDCD-w34-quiz': L(
    'Định hướng nghề nghiệp và trách nhiệm thanh niên',
    'Cuối lớp 9 là thời điểm quan trọng để chọn hướng nghề nghiệp — gắn với trách nhiệm xã hội của thanh niên.',
    ['Hiểu vai trò của định hướng nghề nghiệp.', 'Liên hệ với trách nhiệm thanh niên.', 'Bắt đầu xây dựng định hướng cá nhân.'],
    [
      { h: 'Vì sao cần định hướng nghề nghiệp?' },
      { ul: ['Giúp lựa chọn cấp 3 đúng hướng (THPT, GDTX, GDNN).', 'Tiết kiệm thời gian, công sức.', 'Phát huy năng lực bản thân.', 'Đóng góp đúng nhu cầu xã hội.'] },
      { h: 'Yếu tố để chọn nghề' },
      { ul: ['Năng lực, sở thích cá nhân.', 'Nhu cầu xã hội.', 'Điều kiện gia đình.', 'Xu hướng nghề tương lai (AI, năng lượng tái tạo, chăm sóc sức khoẻ).'] },
      { h: 'Liên hệ với trách nhiệm thanh niên' },
      { p: 'Chọn nghề không chỉ vì lương cao mà còn vì đóng góp cho cộng đồng. Nghề nào cũng có giá trị nếu làm hết mình.' },
      { note: 'Trắc nghiệm hướng nghiệp (Holland, MBTI) là công cụ tham khảo, không phải quyết định cuối.' },
    ],
    [
      { q: 'Bố muốn em học bác sĩ, em thích vẽ. Xử lý thế nào?', a: 'Trao đổi thẳng thắn với bố mẹ về sở thích, năng lực; tìm hiểu kỹ về các nghề liên quan đến vẽ (kiến trúc, design, hoạ sĩ); chọn nghề dựa trên năng lực + đam mê + nhu cầu xã hội.' },
      { q: 'Nghề tương lai nào đang phát triển?', a: 'AI/ML engineer, Data Scientist, năng lượng tái tạo, chăm sóc sức khoẻ, kinh doanh số, sáng tạo nội dung số — đặc biệt cần kỹ năng số.' },
    ]
  ),

  'S9GDCD-w35-quiz': L(
    'Đề ôn thi cuối cấp — Tổng kết',
    'Đề ôn cuối cấp tổng hợp toàn bộ kiến thức đạo đức + pháp luật, chuẩn bị cho thi vào 10 và bước tiếp cuộc đời.',
    ['Hệ thống toàn bộ kiến thức cấp THCS môn GDCD.', 'Làm chủ kỹ năng làm bài thi tổng hợp.', 'Có định hướng đạo đức + pháp luật cho cấp 3.'],
    [
      { h: 'Hệ thống kiến thức 4 năm' },
      { ul: ['Lớp 6: gia đình, tự nhận thức, công dân nhỏ.', 'Lớp 7: quyền tự do tín ngưỡng, đoàn kết, tình bạn.', 'Lớp 8: pháp luật cơ bản, vi phạm.', 'Lớp 9: tổng hợp đạo đức + pháp luật công dân.'] },
      { h: 'Cấu trúc đề thi vào 10' },
      { p: 'Mỗi tỉnh có cấu trúc khác nhau. Thường gồm: trắc nghiệm khái niệm, tự luận tình huống, vận dụng cao. Cần ôn theo đề tỉnh mình.' },
      { h: 'Lời khuyên cuối' },
      { p: 'Sống tử tế bắt đầu từ những việc nhỏ — chào hỏi lễ phép, không vứt rác, không vượt đèn đỏ, không bắt nạt bạn. Đó chính là sự kết tinh của 4 năm học GDCD.' },
      { note: 'Chúc các em thi tốt và trở thành công dân có ích cho xã hội!' },
    ],
    [
      { q: 'Đề thi hỏi "Em hiểu thế nào về câu Đói cho sạch, rách cho thơm?". Hướng làm?', a: 'Giải thích câu tục ngữ → liên hệ phẩm chất liêm khiết, tự trọng → ví dụ thực tế (không lấy của người khác dù khó khăn) → bài học cho HS.' },
      { q: 'Lời khuyên cho bản thân khi vào cấp 3?', a: 'Giữ vững đạo đức, tuân thủ pháp luật, có lý tưởng sống; chăm chỉ học tập; rèn sức khoẻ; tham gia hoạt động xã hội tích cực.' },
    ]
  ),
};
