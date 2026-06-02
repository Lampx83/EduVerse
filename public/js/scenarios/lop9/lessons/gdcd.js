// ============================================================
// Lớp 9 · GDCD — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Mạch: HK1 đạo đức công dân + lý tưởng thanh niên; HK2 pháp luật cơ bản.
// Key trùng id quiz: "S9GDCD-wNN-quiz".
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
      { ul: ['Công bằng khi đánh giá người khác.', 'Không vì tình riêng mà làm trái lẽ phải.', 'Dám đấu tranh chống thiên vị, vụ lợi.', 'Không nhận hối lộ, không bao che cái sai.'] },
      { h: 'Ý nghĩa' },
      { p: 'Người chí công vô tư được mọi người tin yêu, kính trọng; góp phần làm cho xã hội công bằng, dân chủ, văn minh.' },
      { h: 'Rèn luyện' },
      { ul: ['Ủng hộ người làm đúng, phê phán việc sai dù là bạn thân.', 'Đánh giá khách quan, không vì cảm tính.', 'Học tập tấm gương Bác Hồ về sự liêm khiết.'] },
      { note: 'Bác Hồ dạy: "Phải để việc công, việc nước lên trên việc tư, việc nhà".' },
    ],
    [
      { q: 'Lớp trưởng bao che cho bạn thân vi phạm nội quy. Hành vi này thể hiện điều gì?', a: 'Trái với chí công vô tư — đặt tình riêng lên trên lẽ phải, vi phạm nguyên tắc công bằng và làm mất uy tín của vị trí lãnh đạo lớp.' },
      { q: 'Em rèn chí công vô tư bằng cách nào?', a: 'Ủng hộ người làm đúng, phê phán việc sai dù là bạn thân; đánh giá người khác dựa trên hành vi thực tế, không thiên vị vì quan hệ.' },
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
      { h: 'Cách rèn luyện' },
      { ul: ['Tập suy nghĩ trước khi hành động.', 'Học cách hít thở sâu khi nổi giận.', 'Không tham gia trào lưu nhất thời.', 'Lên kế hoạch và bám theo.'] },
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
      { h: 'Vận dụng trong lớp' },
      { p: 'Họp lớp bàn kế hoạch là dân chủ. Sau khi biểu quyết, mọi người phải tuân theo là kỉ luật. Hai mặt đi liền nhau.' },
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
      { h: 'Bằng việc làm gì?' },
      { ul: ['Tham gia mít-tinh, viết thư ủng hộ.', 'Quyên góp giúp đỡ trẻ em vùng chiến sự.', 'Học hỏi văn hoá các dân tộc khác.'] },
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
      { h: 'Việt Nam đã quan hệ với bao nhiêu nước?' },
      { p: 'Việt Nam có quan hệ ngoại giao với 192 quốc gia, là thành viên của 70+ tổ chức quốc tế (LHQ, ASEAN, WTO, APEC).' },
      { note: 'SEA Games, giao lưu sinh viên quốc tế là biểu hiện cụ thể của tình hữu nghị.' },
    ],
    [
      { q: 'Một bạn châu Phi đến học cùng lớp. Em thể hiện tình hữu nghị thế nào?', a: 'Tôn trọng, chủ động làm quen, giới thiệu văn hoá Việt Nam, tìm hiểu về đất nước của bạn; không kỳ thị màu da hay phong tục.' },
      { q: 'Vì sao Việt Nam coi trọng quan hệ với các nước ASEAN?', a: 'ASEAN là láng giềng, có nhiều điểm tương đồng văn hoá - lịch sử; hợp tác kinh tế lớn; cùng nhau giữ hoà bình khu vực Đông Nam Á.' },
    ]
  ),

  'S9GDCD-w06-quiz': L(
    'Hợp tác cùng phát triển',
    'Hợp tác là xu thế tất yếu của thời đại — không một quốc gia hay cá nhân nào có thể đứng riêng lẻ mà thành công.',
    ['Hiểu khái niệm hợp tác.', 'Biết nguyên tắc và ý nghĩa của hợp tác.', 'Thể hiện tinh thần hợp tác trong học tập.'],
    [
      { h: 'Hợp tác là gì?' },
      { p: 'Hợp tác là cùng chung sức làm việc, giúp đỡ, hỗ trợ lẫn nhau trong công việc, lĩnh vực nào đó vì mục đích chung.' },
      { h: 'Nguyên tắc hợp tác' },
      { ul: ['Bình đẳng đôi bên.', 'Cùng có lợi.', 'Không xâm phạm lợi ích của nhau.', 'Tôn trọng độc lập, chủ quyền.'] },
      { h: 'Ý nghĩa' },
      { ul: ['Cùng giải quyết các vấn đề chung.', 'Tận dụng được thế mạnh của mỗi bên.', 'Thúc đẩy phát triển nhanh hơn.', 'Xây dựng mối quan hệ bền vững.'] },
      { h: 'Việt Nam và hợp tác quốc tế' },
      { p: 'VN tham gia nhiều tổ chức quốc tế: WTO, APEC, ASEAN, CPTPP, RCEP. Đây là nguồn lực lớn cho phát triển kinh tế.' },
      { note: 'Trong lớp học, hợp tác làm việc nhóm là rèn luyện tinh thần hợp tác từ nhỏ.' },
    ],
    [
      { q: 'Trong nhóm thuyết trình, mỗi bạn làm một phần riêng lẻ. Có phải hợp tác không?', a: 'Chưa thật sự hợp tác. Hợp tác đòi hỏi trao đổi, hỗ trợ, kết nối các phần thành một sản phẩm chung. Cần thảo luận, góp ý nhau để bài hoàn chỉnh.' },
      { q: 'Vì sao VN cần hợp tác quốc tế?', a: 'Để tiếp cận công nghệ, vốn, thị trường; giải quyết các vấn đề xuyên biên giới (khí hậu, an ninh, dịch bệnh); nâng cao vị thế quốc gia.' },
    ]
  ),

  'S9GDCD-w07-quiz': L(
    'Kế thừa và phát huy truyền thống tốt đẹp của dân tộc',
    'Truyền thống là gốc rễ của dân tộc. Biết kế thừa và phát huy là cách thanh niên thể hiện trách nhiệm với cha ông và tương lai.',
    ['Hiểu khái niệm truyền thống tốt đẹp.', 'Kể được các truyền thống nổi bật của VN.', 'Biết cách kế thừa và phát huy.'],
    [
      { h: 'Khái niệm' },
      { p: 'Truyền thống tốt đẹp của dân tộc là những giá trị tinh thần được hình thành trong quá trình lịch sử lâu dài, được truyền từ thế hệ này sang thế hệ khác.' },
      { h: 'Truyền thống tiêu biểu của VN' },
      { ul: ['Yêu nước, đấu tranh chống ngoại xâm.', 'Đoàn kết, tương thân tương ái.', 'Cần cù lao động.', 'Hiếu học, tôn sư trọng đạo.', 'Tôn trọng đạo lí, sống nghĩa tình.', 'Văn hoá: áo dài, ẩm thực, lễ Tết.'] },
      { h: 'Cách kế thừa và phát huy' },
      { ul: ['Tìm hiểu, học hỏi về truyền thống.', 'Tự hào, bảo vệ trước cái sai.', 'Vận dụng vào cuộc sống hiện đại.', 'Loại bỏ những gì lỗi thời (mê tín, hủ tục).', 'Sáng tạo cái mới trên nền truyền thống.'] },
      { h: 'Phân biệt' },
      { p: 'Truyền thống tốt đẹp ≠ hủ tục lạc hậu. Hủ tục (tảo hôn, trọng nam khinh nữ) cần xoá bỏ.' },
      { note: '"Uống nước nhớ nguồn" — phát huy truyền thống là cách trả ơn cha ông tốt đẹp nhất.' },
    ],
    [
      { q: 'Em thấy bạn coi thường truyền thống áo dài, gọi là "quê". Em phản ứng thế nào?', a: 'Em giải thích áo dài là biểu tượng đẹp của dân tộc, được thế giới ngưỡng mộ. Mặc áo dài là tự hào, không phải "quê". Chính bạn nên thử mặc và sẽ thấy đẹp.' },
      { q: 'Phong tục tảo hôn ở vùng cao có nên duy trì không?', a: 'Không. Đó là hủ tục lạc hậu, vi phạm Luật Hôn nhân Gia đình, ảnh hưởng sức khoẻ và tương lai trẻ em. Cần bài trừ và thay bằng giáo dục giới tính khoa học.' },
    ]
  ),

  'S9GDCD-w08-quiz': L(
    'Năng động, sáng tạo',
    'Trong thế kỉ 21, năng động và sáng tạo là hai phẩm chất sống còn — giúp em thích nghi với thế giới đổi mới không ngừng.',
    ['Hiểu khái niệm năng động, sáng tạo.', 'Phân biệt với hoạt động bừa bãi.', 'Biết cách rèn luyện hai phẩm chất.'],
    [
      { h: 'Năng động là gì?' },
      { p: 'Năng động là tích cực, chủ động, dám nghĩ, dám làm, không thụ động chờ đợi.' },
      { h: 'Sáng tạo là gì?' },
      { p: 'Sáng tạo là say mê tìm tòi, phát hiện cái mới, đề xuất giải pháp mới có hiệu quả cao hơn cách cũ.' },
      { h: 'Mối quan hệ' },
      { ul: ['Năng động là điều kiện của sáng tạo.', 'Sáng tạo là kết quả của năng động.', 'Hai phẩm chất bổ sung lẫn nhau.'] },
      { h: 'Biểu hiện trong học tập' },
      { ul: ['Chủ động tìm tài liệu mở rộng.', 'Tìm nhiều cách giải cho 1 bài toán.', 'Đặt câu hỏi, không học vẹt.', 'Áp dụng kiến thức vào thực tế.'] },
      { h: 'Cách rèn luyện' },
      { ul: ['Đặt câu hỏi "Tại sao?", "Có cách nào khác?".', 'Tham gia CLB sáng tạo, dự án.', 'Đọc sách, học cái mới.', 'Không sợ thất bại khi thử nghiệm.'] },
      { note: 'Sáng tạo không phải là "phát minh ra cái chưa ai biết" — đôi khi là tổ hợp cái cũ thành cái mới.' },
    ],
    [
      { q: 'Bạn em nghĩ ra cách dùng app Quizlet để học từ vựng nhanh hơn. Đó có phải sáng tạo?', a: 'Có. Sáng tạo là tìm cách làm hiệu quả hơn — bạn đã áp dụng công cụ mới vào việc học thay vì chép thủ công. Đây là sáng tạo phù hợp với HS.' },
      { q: 'Năng động khác hiếu động thế nào?', a: 'Năng động là chủ động có mục tiêu; hiếu động là quậy phá thiếu suy nghĩ. Năng động dẫn đến kết quả tích cực, hiếu động thường gây phiền hà.' },
    ]
  ),

  'S9GDCD-w09-quiz': L(
    'Làm việc có năng suất, chất lượng, hiệu quả',
    'Làm việc không chỉ là "có làm" — mà phải năng suất, chất lượng và hiệu quả. Đây là yêu cầu của lao động hiện đại.',
    ['Hiểu khái niệm năng suất, chất lượng, hiệu quả.', 'Biết các yếu tố quyết định.', 'Rèn luyện thói quen làm việc khoa học.'],
    [
      { h: '3 khái niệm' },
      { ul: ['Năng suất: lượng sản phẩm trên 1 đơn vị thời gian.', 'Chất lượng: sản phẩm tốt, đáp ứng yêu cầu.', 'Hiệu quả: kết quả đạt được so với chi phí bỏ ra.'] },
      { h: 'Yếu tố quyết định' },
      { ul: ['Năng lực, trình độ của người làm việc.', 'Phương pháp, công cụ.', 'Kỉ luật, tổ chức công việc.', 'Sáng tạo và đổi mới.', 'Sức khoẻ thể chất, tinh thần.'] },
      { h: 'Trong học tập' },
      { ul: ['Lập kế hoạch trước khi học.', 'Sử dụng phương pháp phù hợp (sơ đồ tư duy, Pomodoro).', 'Tập trung 100% trong thời gian học.', 'Đánh giá và điều chỉnh.'] },
      { h: 'Ý nghĩa' },
      { p: 'Người làm việc năng suất - chất lượng - hiệu quả sẽ thành công hơn trong nghề nghiệp, được đánh giá cao, có thu nhập tốt.' },
      { note: 'Học 4 tiếng tập trung tốt hơn học 8 tiếng vừa làm vừa lướt điện thoại.' },
    ],
    [
      { q: 'Em học 3 tiếng nhưng ngồi 6 tiếng vì hay lướt mạng. Đánh giá?', a: 'Năng suất thấp, hiệu quả kém. Em nên dùng phương pháp Pomodoro: 25 phút tập trung tuyệt đối + 5 phút nghỉ. Hoàn thành nhanh hơn và mệt ít hơn.' },
      { q: 'Bạn làm bài rất nhanh nhưng nhiều lỗi. Đánh giá?', a: 'Năng suất cao nhưng chất lượng thấp — không hiệu quả. Cần cân bằng: chậm lại để kiểm tra, hoặc giữ tốc độ nhưng tăng cẩn thận.' },
    ]
  ),

  'S9GDCD-w10-quiz': L(
    'Lý tưởng sống của thanh niên',
    'Lý tưởng sống là kim chỉ nam cho cuộc đời thanh niên. Có lý tưởng đúng đắn, em sẽ vững vàng trước mọi sóng gió.',
    ['Hiểu khái niệm lý tưởng sống.', 'Biết lý tưởng sống của thanh niên VN.', 'Tự xác định lý tưởng cho bản thân.'],
    [
      { h: 'Lý tưởng sống là gì?' },
      { p: 'Lý tưởng sống là mục tiêu cao đẹp mà con người mơ ước và phấn đấu đạt tới — định hướng cho hành động cả cuộc đời.' },
      { h: 'Lý tưởng sống của thanh niên VN' },
      { p: 'Phấn đấu thực hiện mục tiêu xây dựng nước Việt Nam dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh; vì sự nghiệp dân tộc và hạnh phúc của bản thân.' },
      { h: 'Biểu hiện cụ thể' },
      { ul: ['Học tập tốt, rèn luyện đạo đức.', 'Tham gia hoạt động xã hội tích cực.', 'Có ước mơ nghề nghiệp rõ ràng.', 'Sống có trách nhiệm với gia đình, đất nước.', 'Lao động cần cù, sáng tạo.'] },
      { h: 'Ý nghĩa' },
      { ul: ['Có động lực vượt khó.', 'Sống ý nghĩa, có mục đích.', 'Đóng góp cho xã hội.', 'Hạnh phúc khi đạt được mục tiêu.'] },
      { note: 'Lý tưởng không phải điều xa vời — bắt đầu từ việc học tốt mỗi ngày, ước mơ nghề nghiệp em theo đuổi.' },
    ],
    [
      { q: 'Lý tưởng "kiếm thật nhiều tiền" có đúng không?', a: 'Chưa đủ. Lý tưởng đúng phải kết hợp giá trị bản thân và giá trị xã hội. Em có thể giàu nhưng cần qua con đường lương thiện và đóng góp cho cộng đồng.' },
      { q: 'Em chưa có lý tưởng rõ ràng. Em làm gì?', a: 'Hỏi bản thân: việc gì làm tôi thấy ý nghĩa? Tôi muốn để lại gì cho đời? Trải nghiệm các hoạt động, đọc tiểu sử người thành công. Lý tưởng sẽ rõ dần qua thời gian.' },
    ]
  ),

  'S9GDCD-w11-quiz': L(
    'Trách nhiệm của thanh niên trong sự nghiệp CNH-HĐH đất nước',
    'Thanh niên là lực lượng quyết định công nghiệp hoá - hiện đại hoá. Hiểu rõ trách nhiệm là bước đầu hành động.',
    ['Hiểu khái niệm CNH-HĐH.', 'Nắm vai trò và trách nhiệm của thanh niên.', 'Có kế hoạch hành động cụ thể.'],
    [
      { h: 'CNH-HĐH là gì?' },
      { p: 'Công nghiệp hoá là chuyển từ nông nghiệp sang công nghiệp. Hiện đại hoá là áp dụng công nghệ tiên tiến nhất. CNH-HĐH gắn liền với phát triển kinh tế tri thức.' },
      { h: 'Vai trò của thanh niên' },
      { ul: ['Lực lượng nòng cốt, xung kích.', 'Tiếp thu khoa học - công nghệ nhanh.', 'Đầy nhiệt huyết, sáng tạo.', 'Là tương lai và sức mạnh của dân tộc.'] },
      { h: 'Trách nhiệm cụ thể' },
      { ul: ['Học tập, rèn luyện toàn diện.', 'Có lý tưởng cách mạng, trung thành với Đảng.', 'Rèn luyện thể chất, tinh thần.', 'Lao động sáng tạo.', 'Tham gia bảo vệ Tổ quốc.', 'Tích cực hội nhập quốc tế.'] },
      { h: 'Nhiệm vụ HS' },
      { ul: ['Học tốt các môn, đặc biệt STEM và ngoại ngữ.', 'Phát triển kĩ năng số.', 'Tham gia hoạt động Đoàn, đội.', 'Định hướng nghề nghiệp phù hợp xu hướng.'] },
      { note: 'Mỗi giờ học tốt của em hôm nay là đóng góp cho đất nước ngày mai.' },
    ],
    [
      { q: 'Em là HS lớp 9, đóng góp gì cho CNH-HĐH?', a: 'Học tốt — đặc biệt Toán/Lý/Hoá/Anh; tự học công nghệ; rèn kĩ năng số; tham gia CLB STEM; chuẩn bị tâm thế nghề nghiệp phù hợp xu thế (CNTT, năng lượng tái tạo, công nghệ y sinh).' },
      { q: 'CNH-HĐH có cần ngành Văn, Sử, Địa không?', a: 'Có. Phát triển hài hoà cần cả khoa học tự nhiên và xã hội. Văn hoá - lịch sử là nền tảng tinh thần; Văn - Sử - Địa đào tạo nhà giáo dục, truyền thông, ngoại giao — đều quan trọng.' },
    ]
  ),

  'S9GDCD-w12-quiz': L(
    'Ôn tập học kì I — Đạo đức công dân',
    'Tuần 12 hệ thống lại 11 bài đạo đức HK1 — chuẩn bị cho bài kiểm tra giữa kì.',
    ['Tổng kết các phẩm chất đã học.', 'Hiểu mối liên hệ giữa các phẩm chất.', 'Vận dụng vào tình huống thực.'],
    [
      { h: 'Các phẩm chất đã học' },
      { ul: ['Chí công vô tư.', 'Tự chủ.', 'Dân chủ và kỉ luật.', 'Bảo vệ hoà bình.', 'Tình hữu nghị, hợp tác.', 'Kế thừa truyền thống.', 'Năng động, sáng tạo.', 'Làm việc năng suất - chất lượng - hiệu quả.', 'Lý tưởng sống.', 'Trách nhiệm thanh niên.'] },
      { h: 'Mối liên hệ' },
      { ul: ['Có lý tưởng → năng động, sáng tạo → hiệu quả.', 'Tự chủ + chí công vô tư → uy tín cá nhân.', 'Dân chủ + kỉ luật → sức mạnh tập thể.', 'Hợp tác + hữu nghị → phát triển quốc gia.'] },
      { h: 'Dạng đề' },
      { ul: ['Khái niệm, biểu hiện.', 'Phân tích tình huống.', 'Liên hệ bản thân.', 'Đề xuất giải pháp.'] },
      { h: 'Mẹo ôn' },
      { ul: ['Lập sơ đồ tư duy 11 phẩm chất.', 'Tự tạo 3-5 tình huống cho mỗi phẩm chất.', 'Học theo cặp, hỏi đáp lẫn nhau.'] },
      { note: 'Đạo đức không phải học thuộc — đạo đức là rèn qua hành động hằng ngày.' },
    ],
    [
      { q: 'Tình huống: bạn rủ em quay cóp. Vận dụng phẩm chất gì để từ chối?', a: 'Tự chủ (không bị lôi kéo) + chí công vô tư (làm theo lẽ phải) + lý tưởng sống (rèn năng lực thật để xây dựng đất nước).' },
      { q: 'Vì sao chí công vô tư khó nhất khi áp dụng với người thân?', a: 'Vì tình cảm dễ làm mờ lí trí. Khi người thân sai, ta dễ bao che. Chí công vô tư đòi hỏi vượt lên tình riêng để giữ lẽ phải — rèn từ việc nhỏ trong gia đình.' },
    ]
  ),

  'S9GDCD-w13-quiz': L(
    'Kiểm tra giữa HK1',
    'Bài kiểm tra giữa HK1 — đánh giá năng lực sau 12 tuần học.',
    ['Vận dụng kiến thức vào đề thi.', 'Trình bày bài có hệ thống.', 'Tự đánh giá kết quả.'],
    [
      { h: 'Cấu trúc đề thường gặp' },
      { ul: ['Trắc nghiệm: 5-10 câu khái niệm.', 'Tự luận ngắn: khái niệm, biểu hiện.', 'Tình huống: phân tích + đề xuất xử lí.', 'Liên hệ bản thân.'] },
      { h: 'Lưu ý làm bài' },
      { ul: ['Đọc kĩ đề, gạch chân từ khoá.', 'Phân bố thời gian: dễ trước, khó sau.', 'Câu tình huống: nêu phẩm chất + lí do + cách giải quyết.', 'Câu liên hệ: nói thật về bản thân và kế hoạch rèn luyện.'] },
      { h: 'Mẫu trả lời câu tình huống' },
      { p: '(1) Xác định tình huống thuộc phẩm chất gì. (2) Phân tích đúng/sai của các bên. (3) Đề xuất cách giải quyết phù hợp. (4) Rút ra bài học cho bản thân.' },
      { h: 'Tâm lý làm bài' },
      { ul: ['Ngủ đủ tối hôm trước.', 'Đến sớm, hít thở sâu trước khi bắt đầu.', 'Không nhìn bài bạn — đó là mất tự chủ và vi phạm chí công vô tư.', 'Tin vào sự chuẩn bị của bản thân.'] },
      { note: 'Bài kiểm tra GDCD đánh giá cách em hiểu cuộc sống, không chỉ thuộc lòng — hãy viết bằng trải nghiệm thật.' },
    ],
    [
      { q: 'Đề: "Em hãy nêu trách nhiệm của HS lớp 9 trong việc kế thừa và phát huy truyền thống dân tộc". Cấu trúc?', a: '(1) Khái niệm truyền thống. (2) Nêu 3-4 truyền thống VN. (3) Trách nhiệm: tìm hiểu, học tập, tự hào, vận dụng, loại bỏ hủ tục. (4) Liên hệ bản thân (việc làm cụ thể).' },
      { q: 'Em không kịp làm hết bài. Cách xử lý?', a: 'Câu chưa làm: viết ý chính dạng gạch đầu dòng — giám thị sẽ thấy em hiểu vấn đề. Đừng bỏ trống. Câu đã làm: gạch dưới ý chính cho dễ chấm.' },
    ]
  ),

  'S9GDCD-w14-quiz': L(
    'Quyền và nghĩa vụ của công dân trong hôn nhân — Nguyên tắc',
    'HK2 chuyển sang pháp luật — bắt đầu với hôn nhân và gia đình. Kiến thức này theo các em suốt đời.',
    ['Hiểu khái niệm hôn nhân theo pháp luật.', 'Nắm các nguyên tắc cơ bản.', 'Phân biệt hôn nhân hợp pháp và không hợp pháp.'],
    [
      { h: 'Hôn nhân là gì?' },
      { p: 'Hôn nhân là quan hệ giữa vợ và chồng sau khi đã kết hôn — được pháp luật công nhận và bảo vệ.' },
      { h: 'Các nguyên tắc cơ bản (Luật HNGĐ 2014)' },
      { ul: ['Tự nguyện, tiến bộ — không ép buộc.', 'Một vợ một chồng.', 'Vợ chồng bình đẳng.', 'Tôn trọng truyền thống tốt đẹp.', 'Không phân biệt tôn giáo, dân tộc.', 'Bảo vệ quyền phụ nữ, trẻ em.'] },
      { h: 'Độ tuổi kết hôn' },
      { ul: ['Nam: từ đủ 20 tuổi trở lên.', 'Nữ: từ đủ 18 tuổi trở lên.', 'Dưới tuổi này là tảo hôn — vi phạm pháp luật.'] },
      { h: 'Đăng kí kết hôn' },
      { p: 'Phải đăng kí tại UBND xã/phường. Không đăng kí thì hôn nhân không có giá trị pháp lý — quyền lợi không được bảo vệ.' },
      { note: 'Hôn nhân là quyết định quan trọng cả đời — đừng vội vàng theo cảm xúc.' },
    ],
    [
      { q: 'Anh chị họ kết hôn được không?', a: 'Pháp luật cấm kết hôn giữa người có cùng dòng máu trực hệ trong vòng 3 đời (anh chị em họ cùng ông bà). Vì lý do sức khoẻ gen và đạo lý truyền thống.' },
      { q: 'Một bạn nữ 17 tuổi muốn kết hôn vì đã có thai. Pháp luật xử thế nào?', a: 'Pháp luật không cho phép kết hôn vì chưa đủ 18 tuổi. Bạn cần giải pháp khác: được hỗ trợ chăm sóc thai sản, học tập tiếp; cha của thai nhi có trách nhiệm pháp lý dù chưa cưới hỏi.' },
    ]
  ),

  'S9GDCD-w15-quiz': L(
    'Quyền tự do kinh doanh và nghĩa vụ đóng thuế',
    'Kinh doanh và thuế là hai mặt của cùng một vấn đề — quyền lợi đi đôi với nghĩa vụ.',
    ['Hiểu quyền tự do kinh doanh.', 'Nắm nghĩa vụ đóng thuế.', 'Biết các hành vi vi phạm.'],
    [
      { h: 'Quyền tự do kinh doanh' },
      { p: 'Công dân có quyền lựa chọn hình thức tổ chức kinh tế, ngành nghề và quy mô kinh doanh — trong khuôn khổ pháp luật cho phép.' },
      { h: 'Điều kiện kinh doanh' },
      { ul: ['Có giấy phép đăng kí kinh doanh.', 'Đủ điều kiện về vốn, cơ sở vật chất.', 'Đối với ngành có điều kiện: phải đủ các giấy phép phụ (y tế, an toàn thực phẩm...).'] },
      { h: 'Nghĩa vụ đóng thuế' },
      { p: 'Đóng thuế là nghĩa vụ công dân — nguồn thu chủ yếu của ngân sách Nhà nước để đầu tư giáo dục, y tế, hạ tầng.' },
      { h: 'Các loại thuế phổ biến' },
      { ul: ['Thuế thu nhập cá nhân (lương cao).', 'Thuế giá trị gia tăng (VAT) — 8-10%.', 'Thuế thu nhập doanh nghiệp — 20%.', 'Thuế tiêu thụ đặc biệt (thuốc lá, rượu).'] },
      { h: 'Hành vi vi phạm' },
      { ul: ['Trốn thuế.', 'Kinh doanh trái phép (không giấy phép, hàng cấm).', 'Buôn lậu, hàng giả.', 'Bị xử phạt hành chính hoặc hình sự.'] },
      { note: 'Đóng thuế là đóng góp xây dựng đất nước — không phải "mất tiền".' },
    ],
    [
      { q: 'Em muốn mở quán bán bánh tráng trộn online. Cần làm gì?', a: 'Đăng kí hộ kinh doanh tại UBND xã. Đóng thuế khoán theo doanh thu. Đảm bảo vệ sinh ATTP. Nếu bán nhỏ lẻ dưới ngưỡng (100 triệu/năm) có thể miễn thuế.' },
      { q: 'Người buôn ma tuý "kinh doanh tự do" được không?', a: 'Không. Ma tuý là hàng cấm. Quyền tự do kinh doanh chỉ áp dụng cho hàng hoá - dịch vụ pháp luật cho phép. Buôn ma tuý bị xử lý hình sự rất nặng (tử hình nếu nhiều).' },
    ]
  ),

  'S9GDCD-w16-quiz': L(
    'Quyền và nghĩa vụ lao động của công dân',
    'Lao động vừa là quyền vừa là nghĩa vụ. Hiểu rõ giúp em biết bảo vệ mình khi đi làm sau này.',
    ['Hiểu khái niệm lao động.', 'Nắm quyền và nghĩa vụ.', 'Biết tuổi tối thiểu được lao động.'],
    [
      { h: 'Lao động là gì?' },
      { p: 'Lao động là hoạt động có mục đích của con người nhằm tạo ra sản phẩm/dịch vụ phục vụ nhu cầu xã hội — là nguồn gốc của cải vật chất và tinh thần.' },
      { h: 'Quyền lao động' },
      { ul: ['Tự do chọn nghề.', 'Tự do tìm việc làm.', 'Tự do nâng cao trình độ.', 'Được hưởng lương theo công sức.', 'Được nghỉ ngơi, chăm sóc sức khoẻ.', 'Được bảo hiểm xã hội, y tế.'] },
      { h: 'Nghĩa vụ lao động' },
      { ul: ['Tự nuôi sống bản thân.', 'Tạo ra của cải cho xã hội.', 'Đóng góp xây dựng đất nước.', 'Tuân thủ kỉ luật lao động.', 'Bảo vệ tài sản tập thể.'] },
      { h: 'Tuổi lao động' },
      { ul: ['Tối thiểu: đủ 15 tuổi (với một số việc nhẹ).', 'Đủ 18 tuổi: làm mọi nghề pháp luật cho phép.', 'Dưới 15 tuổi: không được làm các công việc nặng, độc hại.'] },
      { note: 'Lao động trẻ em (dưới 15 tuổi) là vi phạm pháp luật và đạo đức — nhiều nơi trên thế giới vẫn còn tình trạng này.' },
    ],
    [
      { q: 'Em 14 tuổi, có thể nhận làm phục vụ quán cà phê không?', a: 'Pháp luật không cho phép vì chưa đủ 15 tuổi. Một số việc rất nhẹ (giúp việc nhà, biểu diễn nghệ thuật) có thể được nhưng phải có sự đồng ý của cha mẹ và cơ quan có thẩm quyền.' },
      { q: 'Anh trai em bị bóc lột — làm 12 tiếng/ngày, không trả đủ lương. Anh nên làm gì?', a: 'Khiếu nại lên phòng LĐTBXH huyện hoặc liên đoàn lao động địa phương. Có thể khởi kiện ra toà nếu công ty vi phạm hợp đồng. Đó là quyền được pháp luật bảo vệ.' },
    ]
  ),

  'S9GDCD-w17-quiz': L(
    'Vi phạm pháp luật và trách nhiệm pháp lý',
    'Pháp luật và đời sống đi liền nhau — biết các loại vi phạm và trách nhiệm giúp em tránh và biết phản ứng đúng.',
    ['Hiểu khái niệm vi phạm pháp luật.', 'Phân loại 4 loại vi phạm.', 'Biết 4 loại trách nhiệm pháp lý.'],
    [
      { h: 'Vi phạm pháp luật là gì?' },
      { p: 'Là hành vi trái pháp luật, có lỗi, do người có năng lực pháp lý thực hiện, xâm hại các quan hệ xã hội được pháp luật bảo vệ.' },
      { h: 'Yếu tố cấu thành' },
      { ul: ['Hành vi (làm hoặc không làm).', 'Trái pháp luật.', 'Có lỗi (cố ý hoặc vô ý).', 'Người thực hiện có năng lực trách nhiệm.', 'Xâm hại quan hệ xã hội.'] },
      { h: '4 loại vi phạm' },
      { ul: ['Hình sự: tội phạm — nguy hiểm cho xã hội (giết người, trộm cắp).', 'Hành chính: vi phạm quản lý nhà nước (vượt đèn đỏ).', 'Dân sự: tranh chấp tài sản, hợp đồng.', 'Kỉ luật: vi phạm quy định nội bộ cơ quan, trường học.'] },
      { h: '4 loại trách nhiệm pháp lý' },
      { ul: ['Hình sự: phạt tù, cải tạo, tử hình.', 'Hành chính: phạt tiền, cảnh cáo.', 'Dân sự: bồi thường thiệt hại.', 'Kỉ luật: khiển trách, đuổi việc, hạ bậc.'] },
      { h: 'Tuổi chịu trách nhiệm' },
      { ul: ['Từ đủ 14 tuổi: chịu trách nhiệm hình sự với một số tội nặng.', 'Từ đủ 16 tuổi: chịu trách nhiệm hình sự đầy đủ.', 'Từ đủ 14 tuổi: chịu trách nhiệm hành chính.', 'Dân sự: tuỳ từng quan hệ.'] },
      { note: 'HS đã có thể chịu trách nhiệm pháp lý — không phải "trẻ con thì không sao".' },
    ],
    [
      { q: 'Em 15 tuổi đánh người bị thương nặng. Trách nhiệm gì?', a: 'Có thể chịu trách nhiệm hình sự về tội cố ý gây thương tích (nếu thương tích từ 11% trở lên) — Bộ luật Hình sự 2015 quy định người từ đủ 14 tuổi chịu trách nhiệm cho một số tội đặc biệt nghiêm trọng.' },
      { q: 'Bạn em mượn xe đạp rồi bán mất. Trách nhiệm gì?', a: 'Trách nhiệm dân sự (bồi thường). Có thể có cả trách nhiệm hình sự về tội "lạm dụng tín nhiệm chiếm đoạt tài sản" nếu giá trị lớn và cố ý.' },
    ]
  ),

  'S9GDCD-w18-quiz': L(
    'Ôn tập học kì I',
    'Tuần cuối HK1 — ôn tổng hợp toàn bộ đạo đức và bước đầu pháp luật.',
    ['Hệ thống toàn bộ HK1.', 'Vận dụng đa dạng tình huống.', 'Chuẩn bị thi cuối kì tốt.'],
    [
      { h: 'Nội dung HK1' },
      { ul: ['Đạo đức: 11 phẩm chất từ chí công vô tư đến trách nhiệm thanh niên.', 'Pháp luật: hôn nhân, kinh doanh - thuế, lao động, vi phạm pháp luật.'] },
      { h: 'Mối liên hệ đạo đức - pháp luật' },
      { ul: ['Đạo đức tạo ra ý thức tự giác tuân thủ pháp luật.', 'Pháp luật bảo vệ các giá trị đạo đức.', 'Hai mặt bổ sung lẫn nhau.'] },
      { h: 'Dạng đề thường gặp' },
      { ul: ['Trắc nghiệm khái niệm, phân loại.', 'Tự luận: phân tích nội dung 1 phẩm chất / 1 quyền.', 'Tình huống pháp lý.', 'Liên hệ bản thân và đề xuất giải pháp.'] },
      { h: 'Lời khuyên' },
      { ul: ['Vẽ sơ đồ tư duy tổng kết.', 'Tự đặt câu hỏi cho mình.', 'Đọc kĩ điều luật cơ bản (tuổi, mức phạt).', 'Thực hành phân tích tình huống.'] },
      { note: 'GDCD lớp 9 là môn thi vào 10 ở nhiều tỉnh — đầu tư công sức xứng đáng.' },
    ],
    [
      { q: 'Đề: "Phân tích mối quan hệ giữa quyền và nghĩa vụ lao động". Cấu trúc?', a: '(1) Khái niệm lao động. (2) Quyền: liệt kê 4-5 quyền cơ bản. (3) Nghĩa vụ: 4-5 nghĩa vụ. (4) Mối quan hệ: quyền đi đôi với nghĩa vụ — không thể chỉ có một mặt. (5) Liên hệ bản thân.' },
      { q: 'Em chưa nắm chắc 4 loại vi phạm. Học thế nào?', a: 'Lập bảng so sánh 4 cột: Tên - Đặc điểm - Ví dụ - Trách nhiệm. Thuộc bảng và áp dụng vào 10 tình huống thực tế. Sau 2-3 lần sẽ nhớ chắc.' },
    ]
  ),

  'S9GDCD-w19-quiz': L(
    'Quyền tham gia quản lý nhà nước, quản lý xã hội',
    'Đây là quyền chính trị quan trọng của công dân — thể hiện vai trò làm chủ đất nước.',
    ['Hiểu khái niệm và nội dung quyền.', 'Biết các hình thức tham gia.', 'Có ý thức tham gia phù hợp tuổi.'],
    [
      { h: 'Quyền này là gì?' },
      { p: 'Là quyền tham gia bàn bạc, thảo luận, quyết định những vấn đề chung của đất nước và cộng đồng — bằng nhiều hình thức.' },
      { h: 'Nội dung cụ thể' },
      { ul: ['Tham gia bầu cử, ứng cử.', 'Tham gia thảo luận các vấn đề chung.', 'Kiến nghị với cơ quan nhà nước.', 'Giám sát hoạt động của Nhà nước.'] },
      { h: 'Các hình thức tham gia' },
      { ul: ['Trực tiếp: bỏ phiếu, biểu quyết.', 'Gián tiếp: qua đại biểu (Quốc hội, HĐND).', 'Đóng góp ý kiến qua các kênh: hộp thư, mạng xã hội chính thức.', 'Tham gia tổ chức xã hội: Đoàn TN, Hội Phụ nữ.'] },
      { h: 'Quy định độ tuổi' },
      { ul: ['Đủ 18 tuổi: được bầu cử.', 'Đủ 21 tuổi: được ứng cử đại biểu QH, HĐND.'] },
      { h: 'HS lớp 9 tham gia thế nào?' },
      { ul: ['Tham gia Đoàn TN, các hoạt động chính trị-xã hội của trường.', 'Đóng góp ý kiến xây dựng lớp, trường.', 'Tìm hiểu các vấn đề xã hội.', 'Tham gia bầu cử cán bộ lớp.'] },
      { note: 'Quyền chính trị càng dùng càng vững — đừng thờ ơ với việc của đất nước.' },
    ],
    [
      { q: 'Em 14 tuổi có quyền tham gia quản lý nhà nước không?', a: 'Có. Không phải đến 18 tuổi mới có quyền — em đã có thể đóng góp ý kiến, kiến nghị, tham gia các tổ chức Đoàn. Quyền bầu cử mới đợi đủ 18.' },
      { q: 'Có nên đăng tải bài chỉ trích chính sách Nhà nước không?', a: 'Có quyền góp ý, phản biện nhưng phải tuân thủ pháp luật: có căn cứ, có thái độ xây dựng, không xuyên tạc, không vu khống. Tốt nhất qua các kênh chính thức.' },
    ]
  ),

  'S9GDCD-w20-quiz': L(
    'Nghĩa vụ bảo vệ Tổ quốc',
    'Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng — gắn liền với tình yêu nước truyền thống của dân tộc Việt.',
    ['Hiểu khái niệm bảo vệ Tổ quốc.', 'Nắm các nội dung của nghĩa vụ.', 'Có ý thức và hành động cụ thể.'],
    [
      { h: 'Bảo vệ Tổ quốc là gì?' },
      { p: 'Là bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ; bảo vệ chế độ XHCN và Nhà nước CHXHCN Việt Nam.' },
      { h: 'Nội dung của nghĩa vụ' },
      { ul: ['Xây dựng lực lượng quốc phòng toàn dân.', 'Thực hiện nghĩa vụ quân sự.', 'Tham gia bảo vệ trật tự, an toàn xã hội.', 'Bảo vệ chủ quyền biển đảo.'] },
      { h: 'Nghĩa vụ quân sự' },
      { ul: ['Nam: từ đủ 18 đến 25 tuổi (đến 27 tuổi nếu được đào tạo cao).', 'Tham gia 24 tháng tại ngũ.', 'Một số trường hợp được miễn, hoãn theo quy định.'] },
      { h: 'HS lớp 9 thực hiện thế nào?' },
      { ul: ['Học tốt môn Giáo dục Quốc phòng (lên cấp 3).', 'Rèn sức khoẻ.', 'Tham gia phong trào "Đền ơn đáp nghĩa", "Áo lụa tặng bà".', 'Hiểu biết về biển đảo (Hoàng Sa, Trường Sa).', 'Cảnh giác trước thông tin sai lệch về chủ quyền.'] },
      { note: 'Bảo vệ Tổ quốc không chỉ là cầm súng — mà là mỗi hành động bảo vệ giá trị dân tộc.' },
    ],
    [
      { q: 'Em là nữ, có nghĩa vụ quân sự không?', a: 'Pháp luật VN khuyến khích nữ tự nguyện tham gia. Trong trường hợp đặc biệt (chiến tranh) có thể được huy động. Nữ vẫn có thể đăng kí tham gia quân đội như nghề chuyên nghiệp.' },
      { q: 'Bạn nói "Hoàng Sa thuộc Trung Quốc" theo thông tin trên mạng. Em ứng xử thế nào?', a: 'Bình tĩnh giải thích: Hoàng Sa thuộc chủ quyền Việt Nam theo lịch sử và pháp luật quốc tế. Đây là vấn đề chủ quyền — cần dùng nguồn chính thống (Cổng TTĐT Bộ Ngoại giao) để có thông tin đúng.' },
    ]
  ),

  'S9GDCD-w21-quiz': L(
    'Sống có đạo đức và tuân theo pháp luật',
    'Đây là chủ đề tổng kết — kết hợp đạo đức cá nhân và ý thức pháp luật để trở thành công dân tốt.',
    ['Hiểu mối quan hệ đạo đức - pháp luật.', 'Nhận biết người sống có đạo đức và tuân pháp luật.', 'Tự rèn luyện hai mặt này.'],
    [
      { h: 'Sống có đạo đức là gì?' },
      { p: 'Là nghĩ đến lợi ích của tập thể, xã hội, không vì lợi ích cá nhân mà làm hại người khác; có lòng nhân ái, vị tha.' },
      { h: 'Tuân theo pháp luật là gì?' },
      { p: 'Là sống và hành động trong khuôn khổ các quy định pháp luật, không vi phạm các điều luật đã ban hành.' },
      { h: 'Mối quan hệ' },
      { ul: ['Người có đạo đức tự giác tuân thủ pháp luật.', 'Pháp luật bảo vệ và phát huy đạo đức xã hội.', 'Hai mặt thống nhất, bổ sung cho nhau.'] },
      { h: 'Biểu hiện trong cuộc sống' },
      { ul: ['Yêu thương, giúp đỡ mọi người.', 'Trung thực, lễ phép.', 'Tham gia hoạt động cộng đồng.', 'Không xả rác, không vi phạm giao thông.', 'Bảo vệ tài sản công.', 'Tố cáo cái sai.'] },
      { h: 'Ý nghĩa' },
      { ul: ['Được mọi người tin yêu.', 'Góp phần xây dựng xã hội văn minh.', 'Bản thân thanh thản, có ích.', 'Là tấm gương cho người khác.'] },
      { note: '"Tu thân, tề gia, trị quốc, bình thiên hạ" — đạo đức cá nhân là gốc của mọi sự nghiệp.' },
    ],
    [
      { q: 'Một người giàu nhưng trốn thuế và đối xử tệ với nhân viên. Có phải sống có đạo đức không?', a: 'Không. Trốn thuế là vi phạm pháp luật; đối xử tệ là thiếu đạo đức. Tiền bạc không tạo nên giá trị con người — cách sống mới quan trọng.' },
      { q: 'Em rèn luyện 2 mặt này từ việc nhỏ nào?', a: 'Đạo đức: chào hỏi lễ phép, giúp bạn yếu, không nói xấu sau lưng. Pháp luật: đội mũ bảo hiểm, không vượt đèn đỏ, không xả rác, không sử dụng app vi phạm.' },
    ]
  ),

  'S9GDCD-w22-quiz': L(
    'Pháp luật và kỉ luật',
    'Pháp luật và kỉ luật cùng điều chỉnh hành vi — nhưng có khác biệt quan trọng cần phân biệt.',
    ['Hiểu khái niệm pháp luật và kỉ luật.', 'So sánh hai khái niệm.', 'Có ý thức tuân thủ cả hai.'],
    [
      { h: 'Pháp luật' },
      { ul: ['Do Nhà nước ban hành.', 'Áp dụng cho toàn xã hội.', 'Bắt buộc, có chế tài.', 'Đảm bảo bằng sức mạnh Nhà nước.'] },
      { h: 'Kỉ luật' },
      { ul: ['Do cơ quan, tổ chức ban hành.', 'Áp dụng trong phạm vi đó.', 'Bắt buộc với thành viên.', 'Đảm bảo bằng tổ chức nội bộ.'] },
      { h: 'Điểm chung' },
      { ul: ['Đều là quy tắc xử sự.', 'Đều mang tính bắt buộc.', 'Đều nhằm bảo vệ lợi ích chung.'] },
      { h: 'Mối quan hệ' },
      { p: 'Kỉ luật của các tổ chức không được trái pháp luật. Pháp luật là khung lớn, kỉ luật là quy định cụ thể bên trong.' },
      { h: 'Ví dụ' },
      { ul: ['Pháp luật: không vi phạm giao thông.', 'Kỉ luật trường: không đi muộn, mặc đồng phục.', 'Kỉ luật công ty: làm việc 8 tiếng/ngày.'] },
      { note: 'Tuân kỉ luật là tập làm quen với việc tuân thủ pháp luật khi trưởng thành.' },
    ],
    [
      { q: 'Nội quy lớp em yêu cầu "Phạt tiền 50.000đ nếu đi muộn". Có hợp pháp không?', a: 'Không. Kỉ luật trường không được phạt tiền HS — chỉ có thể nhắc nhở, khiển trách. Phạt tiền là chế tài hình sự/hành chính của Nhà nước, lớp không có thẩm quyền.' },
      { q: 'Em vi phạm kỉ luật trường nhưng không vi phạm pháp luật. Có bị truy tố không?', a: 'Không truy tố hình sự. Em chỉ bị xử lý kỉ luật của trường (khiển trách, cảnh cáo, đuổi học). Trừ khi hành vi vi phạm cả pháp luật (đánh bạn gây thương tích).' },
    ]
  ),

  'S9GDCD-w23-quiz': L(
    'Trách nhiệm pháp lý — Các loại cụ thể',
    'Hiểu chi tiết hơn về 4 loại trách nhiệm pháp lý — kiến thức quan trọng cho mọi công dân.',
    ['Phân biệt 4 loại trách nhiệm pháp lý.', 'Nắm chế tài cụ thể của từng loại.', 'Liên hệ với hành vi vi phạm phổ biến.'],
    [
      { h: 'Trách nhiệm hình sự' },
      { ul: ['Áp dụng khi vi phạm Bộ luật Hình sự.', 'Toà án nhân dân ra phán quyết.', 'Hình phạt: cảnh cáo, phạt tiền, cải tạo, tù có thời hạn, tù chung thân, tử hình.', 'Ví dụ: trộm cắp, đánh người gây thương tích.'] },
      { h: 'Trách nhiệm hành chính' },
      { ul: ['Áp dụng khi vi phạm quản lý nhà nước.', 'Cơ quan hành chính xử lý (Công an, Thanh tra).', 'Hình phạt: cảnh cáo, phạt tiền, tịch thu phương tiện, tước giấy phép.', 'Ví dụ: vượt đèn đỏ, xả rác bừa bãi.'] },
      { h: 'Trách nhiệm dân sự' },
      { ul: ['Áp dụng khi vi phạm quan hệ dân sự.', 'Toà án dân sự xử lý theo yêu cầu của các bên.', 'Hình thức: bồi thường thiệt hại, xin lỗi công khai.', 'Ví dụ: làm vỡ đồ của người khác, vi phạm hợp đồng.'] },
      { h: 'Trách nhiệm kỉ luật' },
      { ul: ['Áp dụng khi vi phạm quy định nội bộ.', 'Cơ quan, tổ chức xử lý.', 'Hình thức: khiển trách, cảnh cáo, hạ bậc lương, đuổi việc, đuổi học.', 'Ví dụ: HS đánh nhau, công chức trễ giờ thường xuyên.'] },
      { h: 'Một hành vi có thể nhiều trách nhiệm' },
      { p: 'Ví dụ: lái xe say rượu gây tai nạn → hình sự (gây tai nạn) + hành chính (lái xe say) + dân sự (bồi thường) + kỉ luật (nếu là công chức).' },
      { note: 'Vi phạm nhỏ tích tụ thành vi phạm lớn — đừng coi thường bất kì luật nào.' },
    ],
    [
      { q: 'Em làm vỡ điện thoại của bạn vô tình. Trách nhiệm gì?', a: 'Trách nhiệm dân sự — bồi thường giá trị điện thoại. Không phải hình sự vì là vô ý và không nghiêm trọng. Có thể thương lượng với bạn trước, không cần kiện ra toà.' },
      { q: 'Cảnh sát phạt em vượt đèn đỏ 1 triệu đồng. Em không đồng ý vì "có ai bị tai nạn đâu". Phản hồi?', a: 'Phạt là trách nhiệm hành chính — vi phạm Luật Giao thông là chịu phạt, không cần có hậu quả. Em có thể khiếu nại nếu cho rằng cảnh sát sai (không có camera, nhầm biển báo). Còn nếu thật sự vi phạm thì phải nộp phạt.' },
    ]
  ),

  'S9GDCD-w24-quiz': L(
    'Quyền và nghĩa vụ lao động — Tiếp',
    'Tuần này đào sâu hơn về quyền lao động — hợp đồng lao động, bảo hiểm xã hội, an toàn lao động.',
    ['Hiểu hợp đồng lao động.', 'Biết bảo hiểm xã hội.', 'Nắm các quyền cơ bản tại nơi làm việc.'],
    [
      { h: 'Hợp đồng lao động' },
      { p: 'Là thoả thuận giữa người lao động và người sử dụng lao động về điều kiện làm việc, lương, thời gian, quyền và nghĩa vụ.' },
      { h: 'Nội dung tối thiểu trong HĐLĐ' },
      { ul: ['Công việc và địa điểm làm việc.', 'Thời hạn HĐ.', 'Mức lương, hình thức trả lương.', 'Thời gian làm việc, nghỉ ngơi.', 'Bảo hiểm xã hội, y tế.', 'Đào tạo, nâng cao trình độ.'] },
      { h: 'Bảo hiểm xã hội' },
      { ul: ['BHXH bắt buộc: cho người làm việc theo HĐLĐ.', 'BHYT: chăm sóc sức khoẻ.', 'BH thất nghiệp: hỗ trợ khi mất việc.', 'Trợ cấp khi ốm đau, thai sản, hưu trí.'] },
      { h: 'Quyền cơ bản tại nơi làm việc' },
      { ul: ['Không bị phân biệt đối xử.', 'Được trả lương đúng hạn, đủ.', 'Nghỉ phép có lương (12 ngày/năm).', 'Làm việc trong môi trường an toàn.', 'Có quyền nghỉ việc theo luật.', 'Được tham gia công đoàn.'] },
      { h: 'An toàn lao động' },
      { p: 'Người sử dụng lao động phải trang bị bảo hộ lao động, đào tạo an toàn, kiểm tra định kì. Tai nạn lao động được bồi thường.' },
      { note: 'Trước khi kí HĐLĐ, đọc thật kĩ — đừng kí "cho có" để rồi bị thiệt thòi.' },
    ],
    [
      { q: 'Chị họ em mới đi làm, công ty đề nghị "không kí HĐLĐ để lương cao". Đánh giá?', a: 'Cực rủi ro. Không HĐLĐ → không BHXH, không BH thất nghiệp, không được bảo vệ khi bị sa thải/tai nạn. Lương "cao" không bù được mất mát dài hạn. Phải kí HĐLĐ chính thức.' },
      { q: 'Anh em bị tai nạn lao động không được bồi thường vì "tự gây ra". Có đúng không?', a: 'Tuỳ. Nếu tai nạn do thiết bị không an toàn, môi trường nguy hiểm → công ty có lỗi và phải bồi thường. Nếu do người lao động vi phạm nghiêm trọng quy định an toàn → có thể không được bồi thường đầy đủ. Cần xem xét cụ thể.' },
    ]
  ),

  'S9GDCD-w25-quiz': L(
    'Hôn nhân — Tiếp',
    'Tuần này tìm hiểu sâu hơn về quyền và nghĩa vụ vợ chồng, ly hôn, và bảo vệ trẻ em.',
    ['Nắm quyền và nghĩa vụ vợ chồng.', 'Hiểu các quy định về ly hôn.', 'Biết về bảo vệ trẻ em trong gia đình.'],
    [
      { h: 'Quyền và nghĩa vụ vợ chồng' },
      { ul: ['Bình đẳng về mọi mặt.', 'Tôn trọng tự do tín ngưỡng, nghề nghiệp.', 'Cùng nuôi dạy con cái.', 'Cùng chia sẻ việc nhà.', 'Tài sản chung được sử dụng vì lợi ích gia đình.'] },
      { h: 'Tài sản trong hôn nhân' },
      { ul: ['Tài sản chung: tạo lập trong hôn nhân.', 'Tài sản riêng: trước khi kết hôn, thừa kế cá nhân.', 'Khi ly hôn: tài sản chung chia đôi.'] },
      { h: 'Ly hôn' },
      { ul: ['Là chấm dứt hôn nhân theo bản án/quyết định của Toà.', 'Khi nào: vợ chồng đồng ý hoặc một bên xin ly hôn (có lý do chính đáng).', 'Toà cân nhắc: quyền lợi của con, chia tài sản, nghĩa vụ cấp dưỡng.'] },
      { h: 'Bảo vệ trẻ em sau ly hôn' },
      { ul: ['Cha mẹ vẫn có nghĩa vụ với con.', 'Người không trực tiếp nuôi phải cấp dưỡng.', 'Trẻ trên 7 tuổi được hỏi ý kiến muốn ở với ai.', 'Trẻ vẫn được gặp cha mẹ không trực tiếp nuôi.'] },
      { h: 'Bạo lực gia đình' },
      { p: 'Pháp luật cấm. Người bị bạo lực có quyền yêu cầu cấm tiếp xúc, ly hôn, khởi kiện. Hàng xóm có nghĩa vụ báo cáo khi chứng kiến.' },
      { note: 'Hôn nhân tốt cần sự bình đẳng, tôn trọng và chia sẻ — không phải sự thống trị của một bên.' },
    ],
    [
      { q: 'Bố mẹ ly hôn, em 12 tuổi muốn ở với mẹ. Toà có hỏi không?', a: 'Có. Từ 7 tuổi, Toà phải hỏi ý kiến trẻ. Em được trình bày nguyện vọng nhưng Toà quyết định dựa trên lợi ích tốt nhất của em (môi trường, điều kiện chăm sóc).' },
      { q: 'Bố em hay đánh mẹ. Em làm gì?', a: 'Đây là bạo lực gia đình — vi phạm pháp luật. Em hỗ trợ mẹ báo công an, tổ dân phố hoặc hội phụ nữ. Có đường dây nóng 111 (bảo vệ trẻ em) hoặc 1900545559 (chống bạo lực gia đình). Tuyệt đối không im lặng.' },
    ]
  ),

  'S9GDCD-w26-quiz': L(
    'Tệ nạn xã hội — Phòng chống',
    'Tệ nạn xã hội phá hoại bản thân, gia đình và xã hội. Hiểu để tránh xa và biết bảo vệ người thân.',
    ['Nắm khái niệm và các loại tệ nạn.', 'Hiểu nguyên nhân và tác hại.', 'Biết cách phòng tránh và xử lý.'],
    [
      { h: 'Tệ nạn xã hội là gì?' },
      { p: 'Là hành vi sai lệch chuẩn mực đạo đức và pháp luật, gây hậu quả xấu cho bản thân, gia đình và xã hội.' },
      { h: 'Các tệ nạn phổ biến' },
      { ul: ['Ma tuý: tàn phá sức khoẻ, tinh thần.', 'Cờ bạc: phá tan tài sản, gia đình.', 'Mại dâm: ảnh hưởng đạo đức xã hội.', 'Rượu chè quá độ.', 'Game online quá mức (game addiction).'] },
      { h: 'Nguyên nhân' },
      { ul: ['Cá nhân: thiếu hiểu biết, ý chí kém, bị lôi kéo.', 'Gia đình: thiếu quan tâm, mâu thuẫn.', 'Xã hội: thiếu việc làm, môi trường xấu.', 'Áp lực tâm lý: stress học hành, công việc.'] },
      { h: 'Tác hại' },
      { ul: ['Tàn phá sức khoẻ thể chất, tinh thần.', 'Tan vỡ gia đình.', 'Gây mất an ninh trật tự.', 'Lan truyền HIV/AIDS, bệnh xã hội.', 'Phá hoại kinh tế cá nhân và xã hội.'] },
      { h: 'Cách phòng tránh' },
      { ul: ['Sống lành mạnh, có mục tiêu.', 'Có bạn tốt, tránh xa môi trường xấu.', 'Học cách từ chối quyết đoán.', 'Tham gia hoạt động thể thao, văn nghệ.', 'Tâm sự với người thân khi gặp khó khăn.'] },
      { note: 'Một lần "thử cho biết" có thể là khởi đầu cho cả đời nghiện ngập — đừng bao giờ.' },
    ],
    [
      { q: 'Bạn rủ em "thử cỏ một lần cho biết, không nghiện đâu". Em phản ứng?', a: 'Kiên quyết từ chối. Cỏ (cần sa) cũng là ma tuý — vi phạm pháp luật. "Một lần" có thể dẫn đến nhiều lần. Có thể giải thích cho bạn về tác hại và rủ bạn làm việc khác lành mạnh.' },
      { q: 'Anh trai em nghiện game, bỏ học. Gia đình em xử lý thế nào?', a: 'Cần giúp anh có nhận thức về tác hại; tìm hoạt động thay thế (thể thao, sở thích mới); giảm thời gian truy cập; nếu nặng cần tư vấn tâm lý hoặc gửi đến trung tâm điều trị nghiện game. Đừng đổ lỗi, hãy đồng hành.' },
    ]
  ),

  'S9GDCD-w27-quiz': L(
    'Quyền tự do tín ngưỡng, tôn giáo',
    'Việt Nam là quốc gia đa tôn giáo — tôn trọng tự do tín ngưỡng là nguyên tắc cốt lõi.',
    ['Hiểu khái niệm tín ngưỡng, tôn giáo.', 'Nắm quyền tự do tôn giáo.', 'Phân biệt với mê tín dị đoan.'],
    [
      { h: 'Tín ngưỡng - Tôn giáo' },
      { ul: ['Tín ngưỡng: niềm tin con người với cái thiêng liêng (thờ tổ tiên).', 'Tôn giáo: hệ thống tín ngưỡng có giáo lý, giáo luật, tổ chức (Phật giáo, Công giáo, Tin lành, Hồi giáo...).'] },
      { h: 'Quyền tự do tín ngưỡng, tôn giáo' },
      { ul: ['Tự do theo hoặc không theo tôn giáo.', 'Bình đẳng giữa các tôn giáo.', 'Tự do thực hành tín ngưỡng trong khuôn khổ pháp luật.', 'Không ai được ép buộc người khác.'] },
      { h: 'Mê tín dị đoan' },
      { ul: ['Là tin vào điều phi khoa học, gây hại.', 'Ví dụ: bói toán dự đoán tương lai, đốt vàng mã quá mức, chữa bệnh bằng phép màu thay vì đi bệnh viện.', 'Pháp luật cấm, đặc biệt khi gây hậu quả.'] },
      { h: 'Phân biệt' },
      { p: 'Tín ngưỡng/tôn giáo chính tín: dạy người ta sống thiện, không gây hại. Mê tín dị đoan: gây tâm lý sợ hãi, kinh tế cạn kiệt, đôi khi hại sức khoẻ.' },
      { h: 'Trách nhiệm công dân' },
      { ul: ['Tôn trọng các tôn giáo khác.', 'Không phân biệt người theo đạo khác.', 'Lên án mê tín dị đoan.', 'Không lợi dụng tôn giáo để lừa đảo.'] },
      { note: 'Bạn em theo Công giáo, em theo Phật giáo — vẫn có thể là bạn tốt. Tôn giáo không phải rào cản.' },
    ],
    [
      { q: 'Bạn em không theo tôn giáo nào. Em có nên xa lánh?', a: 'Không. Không theo tôn giáo cũng là một lựa chọn cá nhân hợp pháp. Tôn trọng quan điểm khác biệt là nguyên tắc cơ bản của quyền tự do tín ngưỡng.' },
      { q: 'Bà em chữa bệnh ung thư bằng "uống nước thánh", không đi bệnh viện. Em ứng xử thế nào?', a: 'Đây là mê tín dị đoan, có thể nguy hiểm tính mạng. Em nhẹ nhàng giải thích, đưa bằng chứng khoa học. Cùng cha mẹ thuyết phục bà đi bệnh viện. Tôn giáo chính tín không cấm chữa bệnh y học.' },
    ]
  ),

  'S9GDCD-w28-quiz': L(
    'Quyền sở hữu tài sản và bảo vệ tài sản',
    'Tài sản là kết quả lao động. Pháp luật bảo vệ quyền sở hữu giúp xã hội yên ổn và phát triển.',
    ['Hiểu khái niệm quyền sở hữu.', 'Nắm 3 quyền cụ thể.', 'Biết cách bảo vệ tài sản hợp pháp.'],
    [
      { h: 'Quyền sở hữu là gì?' },
      { p: 'Là quyền của chủ sở hữu đối với tài sản của mình — bao gồm 3 quyền: chiếm hữu, sử dụng, định đoạt.' },
      { h: '3 quyền cụ thể' },
      { ul: ['Quyền chiếm hữu: nắm giữ, quản lý tài sản.', 'Quyền sử dụng: khai thác công dụng, hưởng lợi.', 'Quyền định đoạt: quyết định số phận (bán, tặng, vứt, chuyển nhượng).'] },
      { h: 'Các loại tài sản' },
      { ul: ['Vật: nhà, xe, tiền, đồ vật.', 'Tiền: VNĐ, ngoại tệ.', 'Giấy tờ có giá: cổ phiếu, sổ tiết kiệm.', 'Quyền tài sản: bản quyền, thương hiệu.'] },
      { h: 'Bảo vệ tài sản' },
      { ul: ['Đăng kí quyền sở hữu (nhà đất, xe).', 'Giữ giấy tờ chứng minh.', 'Mua bảo hiểm tài sản (nhà cửa, xe).', 'Báo công an khi bị trộm cắp.', 'Khởi kiện ra Toà khi có tranh chấp.'] },
      { h: 'Nghĩa vụ chủ sở hữu' },
      { ul: ['Sử dụng đúng pháp luật.', 'Đóng thuế (nhà, đất, thu nhập).', 'Không xâm phạm quyền lợi người khác.', 'Bảo vệ môi trường khi sử dụng tài sản.'] },
      { note: 'Tài sản người khác là "bất khả xâm phạm" — không tự ý lấy dù chỉ đùa.' },
    ],
    [
      { q: 'Em nhặt được ví trên đường. Em có được "sở hữu" không?', a: 'Không. Em chỉ chiếm hữu tạm thời. Phải tìm cách trả lại chủ. Sau 1 năm tìm chủ không thấy, theo Bộ luật Dân sự em có thể được sở hữu (nếu giá trị nhỏ) hoặc giao Nhà nước.' },
      { q: 'Bạn lấy bút của em mà nói "Chỉ mượn thôi". Có vi phạm không?', a: 'Mượn mà không xin phép = chiếm hữu không hợp pháp. Nếu trả ngay thì thuộc dân sự nhẹ. Nếu không trả, dùng nhiều ngày như của mình → có thể vi phạm dân sự, thậm chí hình sự nếu giá trị lớn.' },
    ]
  ),

  'S9GDCD-w29-quiz': L(
    'Quyền khiếu nại, tố cáo',
    'Khiếu nại và tố cáo là hai công cụ pháp lý quan trọng để công dân tự bảo vệ và bảo vệ xã hội.',
    ['Phân biệt khiếu nại và tố cáo.', 'Biết thủ tục cơ bản.', 'Có thái độ trách nhiệm khi sử dụng.'],
    [
      { h: 'Khiếu nại' },
      { p: 'Là việc công dân yêu cầu cơ quan, tổ chức có thẩm quyền xem xét lại quyết định, hành vi mà mình cho là trái pháp luật, xâm hại quyền lợi của mình.' },
      { h: 'Tố cáo' },
      { p: 'Là việc công dân báo cho cơ quan có thẩm quyền về hành vi vi phạm pháp luật của bất kì ai gây hại cho lợi ích Nhà nước, tập thể, công dân khác.' },
      { h: 'Phân biệt' },
      { ul: ['Khiếu nại: bảo vệ quyền lợi của chính mình.', 'Tố cáo: bảo vệ lợi ích chung.', 'Khiếu nại: với quyết định/hành vi của cán bộ NN.', 'Tố cáo: với bất kì ai vi phạm pháp luật.'] },
      { h: 'Thủ tục cơ bản' },
      { ul: ['Khiếu nại: gửi đơn lên cấp ra quyết định; nếu không hài lòng, kiện ra Toà hành chính.', 'Tố cáo: gửi đến cơ quan có thẩm quyền (công an, viện kiểm sát).'] },
      { h: 'Trách nhiệm khi khiếu nại - tố cáo' },
      { ul: ['Trình bày trung thực, có bằng chứng.', 'Không bịa đặt vu khống.', 'Tuân thủ thủ tục pháp luật.', 'Được pháp luật bảo vệ (bí mật danh tính tố cáo).'] },
      { h: 'Tố cáo bịa đặt' },
      { p: 'Là hành vi vi phạm pháp luật, có thể bị xử lý hình sự về tội vu khống.' },
      { note: 'Đừng "tố giác để trả thù" — chỉ tố giác khi có bằng chứng thực sự.' },
    ],
    [
      { q: 'Em bị thầy giáo trừ điểm sai. Em làm gì?', a: 'Trao đổi thẳng với thầy trước, đưa căn cứ. Nếu không được, gửi đơn khiếu nại lên hiệu trưởng. Đây là khiếu nại — bảo vệ quyền lợi học tập của chính mình.' },
      { q: 'Em chứng kiến anh hàng xóm trồng cần sa trong nhà. Em làm gì?', a: 'Tố cáo lên công an phường — đây là tội phạm hình sự. Pháp luật bảo vệ danh tính người tố cáo. Im lặng là tiếp tay cho tệ nạn xã hội.' },
    ]
  ),

  'S9GDCD-w30-quiz': L(
    'Quyền tự do ngôn luận',
    'Tự do ngôn luận là quyền dân chủ cơ bản — nhưng phải thực hiện đúng đắn để không gây hại cho người khác.',
    ['Hiểu quyền tự do ngôn luận.', 'Biết các giới hạn theo pháp luật.', 'Sử dụng quyền này có trách nhiệm.'],
    [
      { h: 'Quyền tự do ngôn luận' },
      { p: 'Là quyền công dân được tham gia bàn bạc, thảo luận, đóng góp ý kiến vào những vấn đề chung của đất nước, xã hội.' },
      { h: 'Cách thực hiện' },
      { ul: ['Phát biểu trong các cuộc họp.', 'Viết bài cho báo, tạp chí.', 'Đăng tải lên mạng xã hội.', 'Kiến nghị với cơ quan có thẩm quyền.', 'Tham gia chương trình tiếp xúc cử tri.'] },
      { h: 'Giới hạn' },
      { p: 'Tự do ngôn luận không phải là "muốn nói gì thì nói". Phải trong khuôn khổ pháp luật, không xâm phạm:' },
      { ul: ['Lợi ích quốc gia, dân tộc.', 'Trật tự, an toàn xã hội.', 'Quyền và lợi ích hợp pháp của người khác.', 'Đạo đức, thuần phong mỹ tục.'] },
      { h: 'Các hành vi bị cấm' },
      { ul: ['Tung tin sai sự thật.', 'Vu khống, xúc phạm danh dự người khác.', 'Xuyên tạc lịch sử, phá hoại đoàn kết dân tộc.', 'Kích động bạo lực, chiến tranh.', 'Lộ bí mật Nhà nước.'] },
      { h: 'Trên mạng xã hội' },
      { ul: ['Suy nghĩ kĩ trước khi đăng.', 'Kiểm chứng thông tin.', 'Không xúc phạm cá nhân.', 'Không lan truyền tin chưa xác minh.'] },
      { note: 'Tự do = trách nhiệm. Một câu nói có thể làm tan vỡ uy tín cả đời người.' },
    ],
    [
      { q: 'Em chê chính sách của trường trên Facebook. Có vi phạm không?', a: 'Có quyền góp ý nhưng phải đúng mực: nêu vấn đề cụ thể, đề xuất giải pháp, không xúc phạm thầy cô. Nếu viết với thái độ xây dựng — đó là sử dụng quyền tự do ngôn luận đúng đắn.' },
      { q: 'Em đọc tin "Sắp có chiến tranh" trên Facebook, em chia sẻ lên trang mình. Hậu quả?', a: 'Có thể vi phạm pháp luật nếu tin sai sự thật, gây hoang mang xã hội. Phạt 5-10 triệu đồng theo Nghị định 15/2020, có thể truy cứu hình sự. Nguyên tắc: KHÔNG share tin chưa kiểm chứng.' },
    ]
  ),

  'S9GDCD-w31-quiz': L(
    'Bảo vệ Tổ quốc — Tiếp',
    'Tuần này đi sâu hơn vào nội dung cụ thể của nghĩa vụ bảo vệ Tổ quốc trong bối cảnh hiện nay.',
    ['Hiểu các hình thức bảo vệ Tổ quốc.', 'Nắm Luật Nghĩa vụ Quân sự.', 'Có ý thức thực hiện.'],
    [
      { h: 'Bảo vệ Tổ quốc bao gồm' },
      { ul: ['Quân sự: bảo vệ chủ quyền lãnh thổ, biển đảo.', 'Kinh tế: xây dựng nền kinh tế tự chủ.', 'Văn hoá: bảo vệ giá trị truyền thống.', 'Chính trị: bảo vệ chế độ.', 'Tư tưởng: chống lại "diễn biến hoà bình".', 'Môi trường: bảo vệ tài nguyên thiên nhiên.'] },
      { h: 'Luật Nghĩa vụ Quân sự' },
      { ul: ['Đối tượng: nam công dân 18-25 tuổi (đến 27 nếu có đào tạo cao).', 'Thời gian: 24 tháng tại ngũ.', 'Trường hợp tạm hoãn: đang học cao đẳng, đại học.', 'Trường hợp miễn: có bệnh, là con duy nhất của liệt sĩ.', 'Trốn nghĩa vụ: bị xử lý hành chính hoặc hình sự.'] },
      { h: 'Dân quân tự vệ' },
      { p: 'Là lực lượng vũ trang quần chúng, không thoát ly sản xuất. Tham gia khi có tình huống an ninh, thiên tai.' },
      { h: 'HS thực hiện nghĩa vụ thế nào?' },
      { ul: ['Học tốt môn Giáo dục Quốc phòng và An ninh (cấp 3).', 'Rèn sức khoẻ, kỹ năng sống.', 'Hiểu biết về chủ quyền biển đảo (Hoàng Sa, Trường Sa thuộc VN).', 'Tham gia hoạt động "Đền ơn đáp nghĩa".', 'Cảnh giác trước thông tin sai lệch.'] },
      { h: 'Đề cao tinh thần cảnh giác' },
      { p: 'Trên mạng có nhiều thông tin xuyên tạc về lịch sử, chủ quyền VN — cần biết chọn lọc, dùng nguồn chính thống.' },
      { note: 'Hoàng Sa và Trường Sa là máu thịt của VN — đừng để ai làm lung lay điều đó.' },
    ],
    [
      { q: 'Em nam, đang học đại học, có phải đi nghĩa vụ?', a: 'Được tạm hoãn trong thời gian học. Sau khi tốt nghiệp, nếu chưa quá 27 tuổi, có thể được gọi nhập ngũ. Một số nghề (bác sĩ, kĩ sư) cần thiết có thể được miễn hoặc gọi sau.' },
      { q: 'Bạn nói "Hoàng Sa là tranh chấp, không rõ ràng". Em phản hồi?', a: 'Hoàng Sa thuộc chủ quyền VN có đầy đủ bằng chứng lịch sử và pháp lý: bản đồ cổ thời Nguyễn, công ước quốc tế. Trung Quốc chiếm đóng từ 1974 không hợp pháp. Đây không phải "tranh chấp" — đây là chủ quyền VN bị xâm phạm.' },
    ]
  ),

  'S9GDCD-w32-quiz': L(
    'Ôn tập pháp luật — Tổng hợp',
    'Tuần ôn tập toàn bộ pháp luật HK2 — chuẩn bị cho phần thi vào 10 nhiều tỉnh.',
    ['Hệ thống các luật đã học.', 'Vận dụng đa dạng tình huống.', 'Tự đánh giá năng lực.'],
    [
      { h: 'Các luật trọng tâm' },
      { ul: ['Luật Hôn nhân và Gia đình.', 'Luật Doanh nghiệp, Luật Quản lý thuế.', 'Bộ luật Lao động.', 'Bộ luật Hình sự, Bộ luật Dân sự.', 'Luật Nghĩa vụ Quân sự.', 'Luật Khiếu nại, Tố cáo.', 'Luật Tín ngưỡng, Tôn giáo.'] },
      { h: 'Sơ đồ quan hệ pháp luật' },
      { ul: ['Hiến pháp (đỉnh) → Luật → Nghị định → Thông tư.', 'Tất cả văn bản phải phù hợp Hiến pháp.', 'Hiến pháp 2013 là Hiến pháp hiện hành.'] },
      { h: 'Dạng đề' },
      { ul: ['Nêu khái niệm, nội dung quyền/nghĩa vụ.', 'Phân biệt các loại trách nhiệm.', 'Phân tích tình huống pháp lý.', 'Đề xuất cách giải quyết đúng pháp luật.', 'Liên hệ bản thân.'] },
      { h: 'Mẹo làm bài' },
      { ul: ['Đọc kĩ tình huống, xác định vấn đề pháp lý.', 'Trả lời theo cấu trúc: căn cứ pháp luật → phân tích → kết luận.', 'Trích dẫn điều luật cụ thể nếu nhớ.'] },
      { note: 'Pháp luật bảo vệ em — nhưng em phải biết luật mới được bảo vệ.' },
    ],
    [
      { q: 'Đề: "Phân biệt trách nhiệm hình sự và trách nhiệm hành chính". Cấu trúc?', a: 'Lập bảng so sánh 4 cột: (1) Cơ sở pháp lý, (2) Cơ quan xử lý, (3) Hình phạt, (4) Ví dụ. Hình sự: BLHS, Toà án, từ phạt tiền đến tử hình. Hành chính: Luật XLVPHC, cơ quan hành chính, cảnh cáo + phạt tiền.' },
      { q: 'Em chưa nắm vững luật. Phương pháp ôn?', a: 'Học theo "tình huống cụ thể": với mỗi luật, tự nghĩ 3 tình huống thực tế và giải quyết. Khi nhớ tình huống sẽ nhớ luật. Đừng học thuộc điều luật khô khan.' },
    ]
  ),

  'S9GDCD-w33-quiz': L(
    'Sống có đạo đức và tuân pháp luật — Vận dụng',
    'Tuần này vận dụng tổng hợp đạo đức và pháp luật vào tình huống thực — chuẩn bị cho thi vào 10.',
    ['Tổng hợp đạo đức và pháp luật.', 'Vận dụng vào đa dạng tình huống.', 'Có ý thức công dân toàn diện.'],
    [
      { h: 'Người công dân tốt' },
      { ul: ['Có đạo đức: nhân ái, trung thực, trách nhiệm.', 'Tuân pháp luật: hiểu và làm theo luật.', 'Có lý tưởng: phấn đấu vì bản thân và đất nước.', 'Có kĩ năng: học tập, lao động, ứng xử.'] },
      { h: 'Vận dụng trong các tình huống' },
      { ul: ['Gia đình: hiếu thảo, chia sẻ, tôn trọng.', 'Trường học: học tập, tuân nội quy, đoàn kết bạn bè.', 'Cộng đồng: tham gia hoạt động, giúp đỡ.', 'Trên mạng: ứng xử văn minh, không tung tin giả.', 'Trước cám dỗ: tự chủ, không thử ma tuý.'] },
      { h: 'Khi gặp xung đột đạo đức - pháp luật' },
      { p: 'Đôi khi có vẻ mâu thuẫn (bạn rủ làm sai → đạo đức nói "tình bạn" nhưng pháp luật cấm). Lúc đó: tuân pháp luật là cách bảo vệ bạn thực sự (giúp bạn không sai lầm thêm).' },
      { h: 'Tự đánh giá' },
      { ul: ['Em đã sống có đạo đức ở mức nào?', 'Em đã tuân pháp luật ở mức nào?', 'Còn điểm yếu nào cần khắc phục?', 'Em cam kết gì trong tương lai?'] },
      { note: 'Người tốt không phải người không bao giờ sai — mà là người luôn cố gắng sửa và làm tốt hơn.' },
    ],
    [
      { q: 'Đề: "Liên hệ bản thân em đã sống có đạo đức và tuân pháp luật như thế nào?". Cách trả lời?', a: '(1) Trong gia đình: cụ thể những gì em đã làm. (2) Trong học tập: kết quả, tham gia hoạt động. (3) Tuân pháp luật: an toàn giao thông, không hút thuốc, không tham gia tệ nạn. (4) Tự nhận xét điểm còn yếu. (5) Cam kết cải thiện.' },
      { q: 'Em từng vi phạm (vượt đèn đỏ). Có nên kể vào bài kiểm tra không?', a: 'Có thể kể với tinh thần "tự nhận lỗi và sửa": từ đó em hiểu hơn về tầm quan trọng của pháp luật, đã cam kết và đang thực hiện đúng. Sự trung thực được đánh giá cao.' },
    ]
  ),

  'S9GDCD-w34-quiz': L(
    'Định hướng nghề nghiệp và trách nhiệm thanh niên',
    'Tuần áp chót — định hướng nghề và xác định trách nhiệm thanh niên trong giai đoạn mới.',
    ['Nắm các nguyên tắc chọn nghề.', 'Hiểu trách nhiệm thanh niên VN.', 'Có kế hoạch cụ thể cho bản thân.'],
    [
      { h: 'Tầm quan trọng của chọn nghề' },
      { p: 'Chọn nghề là chọn cuộc đời — quyết định môi trường, thu nhập, hạnh phúc cá nhân. Cần đầu tư thời gian suy nghĩ kĩ.' },
      { h: '4 yếu tố cần cân nhắc' },
      { ul: ['Tôi muốn gì? (sở thích, đam mê)', 'Tôi giỏi gì? (năng lực)', 'Xã hội cần gì? (nhu cầu, xu hướng)', 'Tôi có điều kiện gì? (gia đình, hoàn cảnh)'] },
      { h: 'Các nghề xu hướng' },
      { ul: ['Công nghệ thông tin, AI.', 'Năng lượng tái tạo.', 'Y tế, chăm sóc người già.', 'Giáo dục - nghệ thuật.', 'Nông nghiệp công nghệ cao.', 'Quản lý dữ liệu, an ninh mạng.'] },
      { h: 'Trách nhiệm thanh niên VN' },
      { ul: ['Học tập, rèn luyện trở thành công dân có ích.', 'Tham gia xây dựng kinh tế.', 'Bảo vệ Tổ quốc.', 'Giữ gìn và phát huy văn hoá dân tộc.', 'Hội nhập quốc tế.', 'Sống có lý tưởng, đạo đức.'] },
      { h: 'Kế hoạch cá nhân' },
      { ul: ['Mục tiêu nghề trong 10 năm tới.', 'Học gì sau lớp 9?', 'Học kĩ năng gì?', 'Rèn sức khoẻ, tâm lý ra sao?', 'Tham gia hoạt động xã hội gì?'] },
      { note: 'Tuổi 15 chưa cần quyết định chắc chắn — nhưng cần bắt đầu suy nghĩ và thử nghiệm.' },
    ],
    [
      { q: 'Em chưa biết nên chọn nghề gì. Em nên làm gì?', a: 'Bắt đầu từ "loại trừ": nghề nào chắc chắn không thích. Trải nghiệm: tham gia CLB, làm tình nguyện, xem video nghề. Hỏi: cha mẹ, thầy cô, người làm nghề. Theo thời gian sẽ rõ dần — không cần vội.' },
      { q: 'Bố mẹ muốn em làm bác sĩ, em thích nghệ thuật. Em làm gì?', a: 'Tôn trọng nguyện vọng bố mẹ nhưng cần thảo luận thẳng. Có thể tìm điểm chung: thiết kế y khoa, minh hoạ khoa học. Chứng minh sự nghiêm túc của em qua kết quả học tập và sản phẩm thực tế.' },
    ]
  ),

  'S9GDCD-w35-quiz': L(
    'Đề ôn thi cuối cấp — Tổng kết',
    'Tuần cuối — luyện đề tổng hợp và tổng kết toàn bộ chương trình GDCD cấp THCS.',
    ['Vận dụng kiến thức cả năm vào đề.', 'Tự đánh giá năng lực.', 'Sẵn sàng cho thi cuối cấp.'],
    [
      { h: 'Cấu trúc đề thi vào 10 (GDCD)' },
      { ul: ['Trắc nghiệm: 20-30 câu (50-60%).', 'Tự luận: 2-3 câu (40-50%).', 'Thời gian: 60-90 phút tuỳ tỉnh.', 'Nội dung: chủ yếu lớp 9, có liên hệ lớp 6-8.'] },
      { h: 'Phân bố thời gian' },
      { ul: ['Trắc nghiệm: 1 phút/câu.', 'Tự luận ngắn: 10-15 phút.', 'Tự luận dài: 20-25 phút.', 'Dành 5 phút cuối kiểm tra lại.'] },
      { h: 'Kĩ năng viết tự luận' },
      { ul: ['Mở bài: nêu vấn đề.', 'Thân bài: phân tích theo hệ thống (khái niệm → biểu hiện → ý nghĩa → liên hệ).', 'Kết bài: tóm tắt và rút bài học.', 'Câu văn rõ ràng, có dẫn chứng.'] },
      { h: 'Tổng kết toàn cấp' },
      { p: 'Sau 4 năm GDCD cấp 2, các em đã được trang bị: hiểu biết về đạo đức, pháp luật cơ bản; kĩ năng tự nhận thức, ứng xử; tinh thần công dân và trách nhiệm với cộng đồng. Đây là hành trang quý giá cho cấp 3 và cả cuộc đời.' },
      { h: 'Lời chúc' },
      { p: 'Chúc các em thi vào 10 đạt kết quả tốt, vào được trường mong ước. Hãy mang theo những giá trị đạo đức và ý thức pháp luật đã học để trở thành công dân có ích cho gia đình, xã hội và Tổ quốc.' },
      { note: '"Thi cử chỉ là một chặng đường — cuộc đời mới là kì thi dài nhất, mà em là chính giám khảo của mình".' },
    ],
    [
      { q: 'Đề: "Trách nhiệm của thanh niên Việt Nam trong giai đoạn hiện nay". Cấu trúc bài viết?', a: 'Mở bài: nêu vai trò thanh niên. Thân bài: (1) Trách nhiệm với bản thân: học tập, rèn luyện. (2) Với gia đình: hiếu thảo, hỗ trợ. (3) Với đất nước: lao động, bảo vệ Tổ quốc. (4) Hội nhập quốc tế. Kết bài: liên hệ bản thân và cam kết.' },
      { q: 'Đêm trước thi em rất lo lắng. Em làm gì?', a: 'Ăn nhẹ, không uống cà phê. Nghe nhạc nhẹ thư giãn. Đi ngủ sớm (10h). Tin tưởng vào sự chuẩn bị 1 năm qua. Sáng hôm sau dậy sớm, ăn sáng đầy đủ. Đến điểm thi sớm 15-30 phút. Hít thở sâu trước khi bắt đầu. Tự nhủ: "Tôi đã chuẩn bị tốt, tôi sẽ làm được".' },
    ]
  ),
};
