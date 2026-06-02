// ============================================================
// Lớp 8 · HĐTN-HN — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Kỹ năng sống · Hướng nghiệp · Sức khoẻ tinh thần · Cộng đồng.
// Key: "S8HDTN-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8HDTN_LESSONS = {
  'S8HDTN-w01-quiz': L(
    'Khám phá bản thân — Tính cách và sở thích',
    'Hiểu mình là bước đầu để chọn đường đi đúng.',
    ['Nhận diện tính cách.', 'Liệt kê sở thích.', 'Phân biệt sở thích vs đam mê.'],
    [
      { h: 'Tại sao cần khám phá bản thân?' },
      { p: 'Để chọn nghề, chọn bạn, chọn cách sống phù hợp — tránh đi sai đường.' },
      { h: 'Các phương pháp' },
      { ul: ['Tự quan sát: khi nào em vui/buồn/hứng thú?', 'Hỏi bạn bè, gia đình.', 'Trắc nghiệm tính cách (MBTI, Big Five).', 'Thử nghiệm — làm nhiều việc khác nhau.'] },
      { h: 'Sở thích vs Đam mê' },
      { ul: ['Sở thích: thích làm khi rảnh — có thể đổi.', 'Đam mê: làm nhiều giờ không chán, có nỗ lực vươn lên — bền vững.'] },
    ],
    [
      { q: 'MBTI có 16 loại — em tự tìm hiểu thuộc loại nào.', a: '16personalities.com (miễn phí). VD: INFJ, ENTP...' },
      { q: 'Nhảy ngắn ngày là sở thích hay đam mê?', a: 'Sở thích. Đam mê là khi làm nhiều năm vẫn hứng thú và tiến bộ.' },
    ]
  ),

  'S8HDTN-w02-quiz': L(
    'Phong cách học tập — Xác định kiểu học của em',
    'Mỗi người học hiệu quả khác nhau. Biết kiểu của mình giúp học nhanh hơn.',
    ['Hiểu 4 phong cách VARK.', 'Tự xác định kiểu.', 'Áp dụng học tập.'],
    [
      { h: '4 phong cách VARK' },
      { ul: ['V — Visual: học qua hình ảnh, sơ đồ, video.', 'A — Auditory: học qua nghe — bài giảng, podcast.', 'R — Read/Write: học qua đọc-viết.', 'K — Kinesthetic: học qua làm — thực hành, vận động.'] },
      { h: 'Tự xác định' },
      { p: 'Khi học bài mới, em thấy dễ tiếp thu nhất qua: xem video? nghe thầy giảng? đọc sách? làm thí nghiệm? → đó là kiểu của em.' },
      { h: 'Áp dụng' },
      { ul: ['Visual: vẽ mindmap, dùng flashcard.', 'Auditory: ghi âm bài giảng, nghe lại.', 'R/W: ghi chú chi tiết, viết tóm tắt.', 'Kinesthetic: thực hành, di chuyển khi ôn.'] },
    ],
    [
      { q: 'VARK là viết tắt của gì?', a: 'Visual, Auditory, Read/Write, Kinesthetic.' },
      { q: 'Em thuộc nhóm Kinesthetic — học toán thế nào?', a: 'Cầm bút giải nhiều bài, đứng dậy đi qua đi lại khi học công thức.' },
    ]
  ),

  'S8HDTN-w03-quiz': L(
    'Kỹ năng quản lý thời gian',
    'Thời gian là tài sản duy nhất ai cũng có 24h/ngày — dùng khôn ngoan.',
    ['Hiểu ma trận Eisenhower.', 'Quy tắc Pomodoro.', 'Tránh trì hoãn.'],
    [
      { h: 'Ma trận Eisenhower' },
      { ul: ['Khẩn + Quan trọng: làm ngay.', 'Không khẩn + Quan trọng: lên lịch (vùng vàng — học, sức khoẻ).', 'Khẩn + Không quan trọng: uỷ thác/giảm.', 'Không khẩn + Không quan trọng: bỏ.'] },
      { h: 'Pomodoro' },
      { p: 'Học 25 phút tập trung → nghỉ 5 phút. Sau 4 vòng → nghỉ 15-30 phút.' },
      { h: 'Tránh trì hoãn (procrastination)' },
      { ul: ['Chia việc lớn thành bước nhỏ.', 'Bắt đầu chỉ 5 phút — đà sẽ kéo tiếp.', 'Tắt thông báo điện thoại.', 'Học cùng bạn (accountability).'] },
    ],
    [
      { q: 'Pomodoro làm trong bao lâu?', a: '25 phút tập trung + 5 phút nghỉ.' },
      { q: 'Việc "học tiếng Anh" thuộc ô nào Eisenhower?', a: 'Không khẩn + Quan trọng — vùng vàng cần đầu tư dài hạn.' },
    ]
  ),

  'S8HDTN-w04-quiz': L(
    'Kỹ năng phản biện (critical thinking)',
    'Phản biện không phải cãi — là tự hỏi "Có đúng không?" trước khi tin.',
    ['Hiểu critical thinking.', 'Đặt câu hỏi đúng.', 'Phân biệt với tranh cãi.'],
    [
      { h: 'Critical thinking là gì?' },
      { p: 'Kỹ năng phân tích thông tin một cách khách quan, đánh giá lập luận, không tin mù quáng.' },
      { h: '5 câu hỏi cốt lõi' },
      { ul: ['Ai nói điều này?', 'Họ có lợi ích gì khi nói?', 'Có bằng chứng nào?', 'Có cách giải thích khác không?', 'Tôi có đang bị thiên kiến nào không?'] },
      { h: 'Khác tranh cãi' },
      { ul: ['Critical thinking: tìm sự thật, sẵn sàng đổi ý nếu sai.', 'Tranh cãi để thắng: cố chứng minh mình đúng, không nghe người khác.'] },
    ],
    [
      { q: 'Bạn share tin "Uống nước chanh chữa COVID" — em làm gì?', a: 'Hỏi: nguồn nào? có bằng chứng khoa học? WHO/CDC nói gì? Kiểm tra trước khi share.' },
      { q: 'Critical thinking khác cãi vã ở đâu?', a: 'Critical thinking tìm sự thật, sẵn sàng đổi ý. Cãi vã chỉ để thắng.' },
    ]
  ),

  'S8HDTN-w05-quiz': L(
    'Quản lý cảm xúc tuổi dậy thì',
    'Tuổi dậy thì có nhiều cảm xúc xáo trộn. Học quản lý là kỹ năng sống còn.',
    ['Nhận diện cảm xúc.', 'Kỹ thuật bình tĩnh.', 'Khi nào cần giúp đỡ.'],
    [
      { h: 'Vì sao cảm xúc xáo trộn?' },
      { p: 'Hormone thay đổi mạnh; não chưa phát triển hoàn thiện vùng kiểm soát cảm xúc (đến 25 tuổi); nhiều áp lực học tập + xã hội.' },
      { h: 'Nhận diện' },
      { p: 'Gọi tên cảm xúc: "Tôi đang TỨC GIẬN", "Tôi đang LO LẮNG". Gọi tên là bước đầu kiểm soát.' },
      { h: 'Kỹ thuật bình tĩnh' },
      { ul: ['Hít sâu 4-7-8: hít 4s, giữ 7s, thở 8s.', 'Đếm ngược 100 → 1.', 'Rời khỏi tình huống 5-10 phút.', 'Vận động nhẹ.', 'Viết nhật ký.'] },
      { h: 'Khi nào cần giúp đỡ?' },
      { ul: ['Buồn kéo dài 2+ tuần.', 'Mất ngủ thường xuyên.', 'Có suy nghĩ tự hại.', 'Cô lập bạn bè, gia đình.'] },
      { note: 'Gọi tổng đài tâm lý 1800-1567 (miễn phí) hoặc nói chuyện thầy cô, người thân tin cậy.' },
    ],
    [
      { q: 'Kỹ thuật 4-7-8 là gì?', a: 'Hít 4 giây, giữ 7 giây, thở ra 8 giây — giúp bình tĩnh nhanh.' },
      { q: 'Buồn 1 tuần có cần lo?', a: 'Bình thường nếu có lý do (thất bại bài thi...). Lo khi buồn 2+ tuần không lý do.' },
    ]
  ),

  'S8HDTN-w06-quiz': L(
    'Kỹ năng giao tiếp hiệu quả',
    'Giao tiếp tốt là kỹ năng cốt lõi cho mọi mối quan hệ và công việc.',
    ['Lắng nghe chủ động.', 'Nói rõ ràng.', 'Ngôn ngữ cơ thể.'],
    [
      { h: 'Lắng nghe chủ động' },
      { ul: ['Nhìn vào mắt người nói.', 'Không cắt lời.', 'Gật đầu, ậm ừ thể hiện đang nghe.', 'Tóm lại điều người nói: "Ý bạn là...".'] },
      { h: 'Nói rõ ràng' },
      { ul: ['Suy nghĩ trước khi nói.', 'Câu ngắn, ý rõ.', 'Tránh "ờ", "à" quá nhiều.', 'Tốc độ vừa phải.'] },
      { h: 'Ngôn ngữ cơ thể' },
      { ul: ['Mở (tay không khoanh, người hướng đối phương).', 'Mắt nhìn, không lảng đi.', 'Cười phù hợp.', 'Khoảng cách phù hợp (~1m).'] },
    ],
    [
      { q: 'Cắt lời người khác là sai gì?', a: 'Thiếu tôn trọng, không lắng nghe — kỹ năng giao tiếp kém.' },
      { q: 'Ngôn ngữ cơ thể chiếm bao nhiêu % giao tiếp?', a: 'Khoảng 55-70% — quan trọng hơn cả lời nói.' },
    ]
  ),

  'S8HDTN-w07-quiz': L(
    'Tình bạn — Tình yêu lành mạnh tuổi học trò',
    'Tuổi 13-14 bắt đầu có tình cảm. Cần phân biệt lành mạnh và không lành mạnh.',
    ['Đặc điểm tình bạn lành mạnh.', 'Tình yêu tuổi học trò.', 'Ranh giới an toàn.'],
    [
      { h: 'Tình bạn lành mạnh' },
      { ul: ['Tôn trọng lẫn nhau.', 'Cùng tiến bộ.', 'Chia sẻ vui buồn.', 'Tôn trọng quyền riêng tư.'] },
      { h: 'Tình yêu học trò' },
      { ul: ['Cảm xúc tự nhiên — không có gì xấu.', 'Tập trung quý mến, hỗ trợ học tập.', 'Không nên chiếm thời gian học quá nhiều.', 'Không nên có quan hệ tình dục — chưa đủ chín chắn và pháp luật bảo vệ < 16t.'] },
      { h: 'Ranh giới an toàn' },
      { ul: ['Không bị ép bất cứ điều gì khiến em không thoải mái.', 'Không chia sẻ ảnh nhạy cảm — nguy cơ "revenge porn".', 'Báo người lớn nếu bị quấy rối.'] },
      { note: 'Pháp luật VN bảo vệ trẻ em dưới 16 tuổi — mọi quan hệ tình dục với <16t đều là tội phạm.' },
    ],
    [
      { q: 'Bạn yêu đòi gửi ảnh nhạy cảm — em làm gì?', a: 'Từ chối dứt khoát. Nói thẳng "Mình không thoải mái". Nếu bạn ép — báo gia đình/thầy cô.' },
      { q: 'Yêu sớm có sai không?', a: 'Cảm xúc không sai. Sai là khi ảnh hưởng học tập hoặc vượt ranh giới an toàn.' },
    ]
  ),

  'S8HDTN-w08-quiz': L(
    'Hướng nghiệp — Mô hình Holland (RIASEC)',
    'Mô hình Holland phân con người thành 6 nhóm — giúp chọn nghề phù hợp.',
    ['Hiểu 6 nhóm RIASEC.', 'Tự xác định nhóm.', 'Liên kết với nghề.'],
    [
      { h: '6 nhóm Holland (RIASEC)' },
      { ul: ['R — Realistic (Thực tế): thích làm tay, máy móc, ngoài trời.', 'I — Investigative (Khám phá): thích nghiên cứu, khoa học.', 'A — Artistic (Nghệ sĩ): thích sáng tạo, tự do.', 'S — Social (Xã hội): thích giúp người, dạy.', 'E — Enterprising (Kinh doanh): thích lãnh đạo, thuyết phục.', 'C — Conventional (Quy củ): thích tổ chức, dữ liệu, quy trình.'] },
      { h: 'Tự xác định' },
      { p: 'Trắc nghiệm Holland online (free) — chọn 3 nhóm cao nhất → "Holland Code" (VD: ISA).' },
      { h: 'Liên kết nghề' },
      { ul: ['R: kỹ sư, thợ máy, nông nghiệp.', 'I: bác sĩ, nhà khoa học, lập trình viên.', 'A: hoạ sĩ, nhạc sĩ, nhà văn, designer.', 'S: giáo viên, y tá, công tác xã hội.', 'E: kinh doanh, marketing, luật sư.', 'C: kế toán, hành chính, IT support.'] },
    ],
    [
      { q: 'Em thích vẽ + giúp đỡ + kể chuyện — Holland Code?', a: 'ASE hoặc SAE — phù hợp giáo viên mỹ thuật, designer giáo dục.' },
      { q: 'Bác sĩ thuộc nhóm nào?', a: 'I (Investigative) + S (Social) — IS.' },
    ]
  ),

  'S8HDTN-w09-quiz': L(
    'Hướng nghiệp — 10 nhóm ngành lớn theo Holland',
    'Có hàng nghìn nghề nhưng có thể nhóm thành 10 nhóm lớn.',
    ['Biết 10 nhóm ngành.', 'Liên kết với Holland.', 'Định hướng sơ bộ.'],
    [
      { h: '10 nhóm ngành lớn' },
      { ul: ['1. CNTT — Khoa học máy tính.', '2. Kỹ thuật — Cơ khí, điện, xây dựng.', '3. Y dược — Sức khoẻ.', '4. Khoa học tự nhiên — Toán, Lý, Hoá, Sinh.', '5. Khoa học xã hội — Tâm lý, Lịch sử, Văn.', '6. Kinh tế — Tài chính, kế toán, kinh doanh.', '7. Luật — Pháp lý.', '8. Sư phạm — Giáo dục.', '9. Nghệ thuật — Mỹ thuật, âm nhạc, thiết kế.', '10. Nông-Lâm-Ngư.'] },
      { h: 'Liên kết Holland' },
      { ul: ['I: 1, 3, 4.', 'R: 2, 10.', 'A: 9.', 'S: 5, 8.', 'E: 6, 7.', 'C: 6.'] },
      { h: 'Lưu ý' },
      { p: 'Hầu hết nghề kết hợp nhiều nhóm. VD: Bác sĩ cần I (khoa học) + S (chăm sóc người).' },
    ],
    [
      { q: 'CNTT cần Holland chính?', a: 'I (Investigative) — nghiên cứu, giải quyết vấn đề.' },
      { q: 'Giáo viên cần?', a: 'S (Social) — yêu trẻ + I/A tuỳ môn dạy.' },
    ]
  ),

  'S8HDTN-w10-quiz': L(
    'An toàn mạng nâng cao — Quyền riêng tư cá nhân',
    'Riêng tư trên mạng quan trọng như khoá cửa nhà.',
    ['Hiểu thông tin cá nhân.', 'Cài đặt riêng tư.', 'Tránh "doxxing".'],
    [
      { h: 'Thông tin cá nhân (PII)' },
      { p: 'Bao gồm: họ tên thật, ngày sinh, địa chỉ, số điện thoại, CCCD, ảnh nhận diện, trường học, lịch trình hằng ngày.' },
      { h: 'Cài đặt riêng tư' },
      { ul: ['Facebook: Profile chỉ bạn bè thấy.', 'Instagram: Account riêng tư.', 'TikTok: Tắt chia sẻ vị trí.', 'Không check-in vị trí thực tế.'] },
      { h: 'Doxxing' },
      { p: 'Là hành vi đào tìm và phát tán thông tin cá nhân của ai đó lên mạng — vô cùng nguy hiểm. Có thể bị bắt nạt, hành hung.' },
      { h: 'Phòng tránh' },
      { ul: ['Không công khai địa chỉ, trường lớp.', 'Hạn chế ảnh có địa danh dễ nhận.', 'Cài đặt mật khẩu mạnh.', 'Không nhận lời mời người lạ.'] },
    ],
    [
      { q: 'Đăng "Đang đi du lịch Đà Lạt!" + ảnh nhà — sao nguy hiểm?', a: 'Kẻ xấu biết em không có nhà → đột nhập trộm.' },
      { q: 'Doxxing là gì?', a: 'Đào và phát tán thông tin cá nhân ai đó — vi phạm pháp luật ở VN.' },
    ]
  ),

  'S8HDTN-w11-quiz': L(
    'An toàn mạng nâng cao — Deepfake và tin giả',
    'AI tạo deepfake quá thật — phân biệt thật-giả ngày càng khó.',
    ['Hiểu deepfake.', 'Nhận biết tin giả.', 'Kiểm chứng nguồn.'],
    [
      { h: 'Deepfake' },
      { p: 'AI tạo video/âm thanh giả mạo mặt + giọng người thật. Có thể giả lời người nổi tiếng nói điều họ chưa từng nói.' },
      { h: 'Tác hại' },
      { ul: ['Lừa đảo: giả người thân gọi xin tiền.', 'Bôi nhọ chính trị: video giả phát ngôn.', 'Bắt nạt: ghép mặt người vào video xấu.'] },
      { h: 'Nhận biết tin giả' },
      { ul: ['Tiêu đề giật gân, dùng từ tuyệt đối ("100%", "kinh hoàng").', 'Không có nguồn, không có tên tác giả.', 'URL trông giống nhưng khác (vnexpress.org thay vì .net).', 'Ảnh ghép, video bị cắt ngữ cảnh.'] },
      { h: 'Kiểm chứng' },
      { ul: ['Tìm cùng tin trên báo lớn (VTV, Tuoi Tre, Thanh Nien).', 'Google reverse image search ảnh.', 'Trang fact-check: vnfactcheck.com.'] },
    ],
    [
      { q: 'Video bạn thân video call xin tiền gấp — em làm gì?', a: 'Gọi lại số điện thoại thật của bạn để xác minh. Có thể là deepfake.' },
      { q: 'Tin "WHO khuyến cáo không tiêm vắc xin" — kiểm tra thế nào?', a: 'Lên website WHO chính thức who.int. Không tin tiêu đề giật gân từ trang lạ.' },
    ]
  ),

  'S8HDTN-w12-quiz': L(
    'Bảo vệ môi trường — Biến đổi khí hậu',
    'Biến đổi khí hậu là khủng hoảng lớn nhất thế kỷ. HS có thể góp phần.',
    ['Hiểu BĐKH.', 'Tác động ở VN.', 'Hành động cá nhân.'],
    [
      { h: 'Biến đổi khí hậu là gì?' },
      { p: 'Trái đất nóng lên do khí nhà kính (CO₂, methane) từ đốt nhiên liệu hoá thạch, chăn nuôi, phá rừng. Hậu quả: thời tiết cực đoan.' },
      { h: 'Tác động ở VN' },
      { ul: ['Đồng bằng sông Cửu Long sạt lở, nhiễm mặn.', 'Bão mạnh hơn, ngập lụt miền Trung.', 'Nắng nóng kỷ lục.', 'Đa dạng sinh học giảm.'] },
      { h: 'Hành động cá nhân' },
      { ul: ['Tiết kiệm điện (tắt khi không dùng).', 'Đi bộ/đạp xe thay vì xe máy ngắn.', 'Ăn rau quả nhiều hơn thịt (chăn nuôi tốn CO₂).', 'Giảm rác thải nhựa.', 'Trồng cây.'] },
      { note: 'Cá nhân nhỏ, cộng đồng lớn. 8 tỷ người mỗi người 1 hành động nhỏ = thay đổi toàn cầu.' },
    ],
    [
      { q: 'Ăn thịt bò nhiều có hại BĐKH?', a: 'Có. Chăn nuôi bò thải methane (khí nhà kính mạnh hơn CO₂ 25 lần). Giảm thịt đỏ giúp giảm phát thải.' },
      { q: 'Việt Nam bị ảnh hưởng BĐKH nặng nhất ở đâu?', a: 'Đồng bằng sông Cửu Long — sạt lở, nhiễm mặn, mất đất.' },
    ]
  ),

  'S8HDTN-w13-quiz': L(
    'Tiêu dùng có trách nhiệm',
    'Mỗi đồng em chi tiêu là 1 "lá phiếu" — chọn sản phẩm có trách nhiệm = ủng hộ DN tốt.',
    ['Hiểu tiêu dùng có trách nhiệm.', 'Nhận diện sản phẩm tốt.', 'Tránh lãng phí.'],
    [
      { h: 'Tiêu dùng có trách nhiệm' },
      { p: 'Chọn mua sản phẩm/dịch vụ ít hại môi trường, đối xử công bằng với người lao động, không gây hại sức khoẻ.' },
      { h: 'Nhận diện sản phẩm tốt' },
      { ul: ['Bao bì tái chế được.', 'Sản xuất tại VN — giảm vận chuyển.', 'Không bóc lột lao động trẻ em.', 'Không thử nghiệm trên động vật (mỹ phẩm).', 'Có chứng nhận organic, fair trade.'] },
      { h: 'Tránh lãng phí' },
      { ul: ['Mua đủ dùng, không thừa.', 'Sửa thay vì vứt.', 'Cho/tặng đồ cũ thay vì bỏ.', 'Tránh "fast fashion" (quần áo dùng 1 lần).'] },
    ],
    [
      { q: 'Fast fashion có hại gì?', a: 'Quần áo rẻ + thay liên tục → rác thải khổng lồ, lao động giá rẻ bị bóc lột, tốn nước.' },
      { q: 'Cách giảm rác nhựa khi đi học?', a: 'Mang bình nước riêng, hộp cơm riêng, túi vải.' },
    ]
  ),

  'S8HDTN-w14-quiz': L(
    'Tham gia hoạt động cộng đồng — Tình nguyện',
    'Tình nguyện vừa giúp người vừa rèn nhân cách bản thân.',
    ['Lợi ích tình nguyện.', 'Hình thức HS có thể tham gia.', 'Tinh thần đúng.'],
    [
      { h: 'Lợi ích' },
      { ul: ['Giúp người khó khăn.', 'Rèn kỹ năng giao tiếp, làm việc nhóm.', 'Hiểu xã hội rộng hơn.', 'Có kinh nghiệm cho hồ sơ học bổng.', 'Cảm giác hạnh phúc.'] },
      { h: 'Hình thức HS có thể' },
      { ul: ['Dạy kèm em nhỏ trong xóm.', 'Quyên góp sách cũ cho trường vùng cao.', 'Dọn rác bãi biển/công viên.', 'Hiến tóc cho bệnh nhân ung thư (tóc nữ dài).', 'Hỗ trợ người già/khuyết tật ở khu phố.'] },
      { h: 'Tinh thần đúng' },
      { p: 'Tình nguyện vì thấy cần thiết, không để khoe khoang hay vì điểm thưởng. Giúp đỡ với sự tôn trọng — không thương hại.' },
    ],
    [
      { q: 'Tình nguyện chỉ để có điểm cộng — sai gì?', a: 'Mất ý nghĩa tốt đẹp. Người được giúp cảm nhận được sự không chân thành.' },
      { q: 'Tổ chức tình nguyện ở VN cho HS?', a: 'Đoàn Thanh niên, Hội Chữ thập đỏ, các CLB ở trường.' },
    ]
  ),

  'S8HDTN-w15-quiz': L(
    'Phòng chống xâm hại — Quyền cơ thể',
    'Cơ thể em là của em. Không ai có quyền xâm phạm.',
    ['Hiểu quyền cơ thể.', 'Nhận diện xâm hại.', 'Cách phản ứng.'],
    [
      { h: 'Quyền cơ thể' },
      { p: 'Em có quyền tuyệt đối với cơ thể mình. Không ai — kể cả người thân — được chạm vào em mà không có sự đồng ý.' },
      { h: 'Vùng riêng tư' },
      { p: 'Vùng kín (do quần lót che), miệng, ngực. Không ai được chạm/nhìn/yêu cầu em chụp ảnh nơi này.' },
      { h: 'Quy tắc 5 ngón tay' },
      { ul: ['Bố mẹ — ôm, hôn.', 'Người thân — ôm 1 cái.', 'Hàng xóm — bắt tay.', 'Người lạ — chào.', 'Không quen — không chạm.'] },
      { h: 'Khi bị xâm hại' },
      { ul: ['Hét to "Không!" — chạy.', 'Báo người lớn tin cậy NGAY.', 'Gọi 111 (Tổng đài bảo vệ trẻ em).', 'Không che giấu vì sợ — không phải lỗi em.'] },
      { note: 'Xâm hại trẻ em là tội rất nặng. Pháp luật VN bảo vệ trẻ — em không có gì phải sợ khi tố cáo.' },
    ],
    [
      { q: 'Người thân đụng vùng kín nói "đó là yêu thương" — đúng không?', a: 'KHÔNG. Đó là xâm hại. Báo ngay người lớn khác hoặc gọi 111.' },
      { q: 'Tổng đài bảo vệ trẻ em VN?', a: '111 — miễn phí, hoạt động 24/7.' },
    ]
  ),

  'S8HDTN-w16-quiz': L(
    'Kỹ năng sống — Đối phó stress',
    'Stress là phần của cuộc sống. Quan trọng là biết quản lý.',
    ['Nhận biết stress.', 'Nguyên nhân.', 'Kỹ thuật giảm stress.'],
    [
      { h: 'Dấu hiệu stress' },
      { ul: ['Thể chất: đau đầu, đau bụng, mất ngủ.', 'Cảm xúc: cáu gắt, lo lắng, buồn.', 'Hành vi: ăn nhiều/ít, lười học.', 'Suy nghĩ: tiêu cực, khó tập trung.'] },
      { h: 'Nguyên nhân ở HS' },
      { ul: ['Áp lực học tập, thi cử.', 'Mâu thuẫn bạn bè/gia đình.', 'So sánh trên mạng xã hội.', 'Thay đổi cơ thể tuổi dậy thì.'] },
      { h: 'Giảm stress' },
      { ul: ['Vận động: chạy bộ, yoga, nhảy.', 'Ngủ đủ 8 tiếng.', 'Trò chuyện với người tin cậy.', 'Mindfulness — thiền 10 phút/ngày.', 'Hạn chế mạng xã hội.', 'Sở thích lành mạnh.'] },
    ],
    [
      { q: 'Trước thi căng thẳng — em làm gì?', a: 'Hít thở sâu, nghĩ "Mình đã ôn rồi". Đi vệ sinh, uống nước. Không học bài 30 phút trước thi.' },
      { q: 'Stress kéo dài 2+ tuần — phải làm gì?', a: 'Nói chuyện thầy cô, gia đình. Nếu cần — gặp chuyên gia tâm lý.' },
    ]
  ),

  'S8HDTN-w17-quiz': L(
    'Định hướng học tập THPT',
    'Lớp 8 là lúc bắt đầu nghĩ về THPT — chọn trường, chọn ngành.',
    ['Các loại THPT.', 'Tiêu chí chọn.', 'Chuẩn bị từ lớp 8.'],
    [
      { h: 'Các loại THPT' },
      { ul: ['THPT công lập: học phí thấp, chất lượng đồng đều.', 'Trường chuyên: cho HS giỏi, thi tuyển.', 'THPT tư thục: chất lượng + học phí cao.', 'GDTX (giáo dục thường xuyên): vừa học vừa làm.', 'Trường nghề: học nghề kết hợp văn hoá.'] },
      { h: 'Tiêu chí chọn' },
      { ul: ['Điểm thi của em.', 'Vị trí địa lý.', 'Định hướng tương lai (ĐH, du học, nghề).', 'Khả năng tài chính gia đình.'] },
      { h: 'Chuẩn bị từ lớp 8' },
      { ul: ['Học tốt 3 môn thi vào THPT: Toán, Văn, Anh.', 'Tham gia hoạt động ngoại khoá (lợi thế phỏng vấn trường chuyên/tư thục).', 'Tìm hiểu trường mong muốn.', 'Có kế hoạch ôn thi cuối lớp 9.'] },
    ],
    [
      { q: 'Em thích KHTN — nên chọn THPT gì?', a: 'Trường chuyên Lý/Hoá/Sinh hoặc THPT công lập có ban KHTN tốt.' },
      { q: 'Lớp 8 nên ôn môn gì cho thi vào 10?', a: 'Toán, Văn, Anh — 3 môn thi chính ở hầu hết tỉnh thành.' },
    ]
  ),

  'S8HDTN-w18-quiz': L(
    'Ôn tập HK1',
    'Tổng kết HK1: kỹ năng tự thân, hướng nghiệp, an toàn, môi trường.',
    ['Hệ thống kỹ năng.', 'Hướng nghiệp Holland.', 'An toàn mạng + môi trường.'],
    [
      { h: 'Kỹ năng tự thân' },
      { ul: ['Khám phá bản thân, phong cách học.', 'Quản lý thời gian, phản biện.', 'Quản lý cảm xúc, giao tiếp.', 'Tình bạn lành mạnh.'] },
      { h: 'Hướng nghiệp' },
      { ul: ['Holland Code (RIASEC).', '10 nhóm ngành lớn.'] },
      { h: 'An toàn & môi trường' },
      { ul: ['Quyền riêng tư, deepfake, tin giả.', 'Biến đổi khí hậu, tiêu dùng có trách nhiệm.', 'Tình nguyện, phòng chống xâm hại.', 'Stress, định hướng THPT.'] },
    ],
    [
      { q: '3 kỹ năng quan trọng nhất em đã học HK1?', a: 'Quản lý thời gian, phản biện, giao tiếp (hoặc tự chọn).' },
      { q: 'Mô hình hướng nghiệp đã học?', a: 'Holland RIASEC — 6 nhóm.' },
    ]
  ),

  'S8HDTN-w19-quiz': L(
    'Khám phá nghề — 10 nhóm ngành lớn (1)',
    'Đi sâu vào 3 nhóm đầu: CNTT, Kỹ thuật, Y dược.',
    ['CNTT.', 'Kỹ thuật.', 'Y dược.'],
    [
      { h: 'CNTT — Khoa học máy tính' },
      { ul: ['Nghề: lập trình viên, kỹ sư AI, data scientist, kỹ sư an ninh mạng, game developer, UI/UX designer.', 'Holland: I + C.', 'Trường: ĐH Bách khoa, ĐH CN-ĐHQG, ĐH FPT, HUST.', 'Lương khởi điểm: 10-20tr/tháng.'] },
      { h: 'Kỹ thuật' },
      { ul: ['Nghề: kỹ sư cơ khí, điện, xây dựng, ô tô, hàng không.', 'Holland: R + I.', 'Trường: ĐH Bách khoa, GTVT, Xây dựng, BK TP.HCM.'] },
      { h: 'Y dược' },
      { ul: ['Nghề: bác sĩ, dược sĩ, điều dưỡng, kỹ thuật viên y học.', 'Holland: I + S.', 'Trường: ĐH Y Hà Nội, Y Dược TP.HCM, Y Huế.', 'Đặc thù: học 6-8 năm, áp lực cao.'] },
    ],
    [
      { q: 'Lập trình viên cần Holland gì?', a: 'I (Investigative) + C (Conventional).' },
      { q: 'Bác sĩ học bao lâu?', a: '6 năm ĐH + 18 tháng nội trú (tổng ~8 năm).' },
    ]
  ),

  'S8HDTN-w20-quiz': L(
    'Khám phá nghề — 10 nhóm ngành lớn (2)',
    'Tiếp tục với: KH tự nhiên, KH xã hội, Kinh tế, Luật.',
    ['KH tự nhiên.', 'KH xã hội.', 'Kinh tế + Luật.'],
    [
      { h: 'Khoa học tự nhiên' },
      { ul: ['Nghề: nhà toán học, vật lý, hoá học, sinh học, môi trường.', 'Holland: I.', 'Trường: ĐH KHTN, Sư phạm.', 'Hướng: nghiên cứu hoặc giảng dạy.'] },
      { h: 'Khoa học xã hội & Nhân văn' },
      { ul: ['Nghề: nhà tâm lý, lịch sử, ngôn ngữ, văn học, xã hội học.', 'Holland: S + A + I.', 'Trường: ĐH KHXH-NV, ĐH Văn hoá.'] },
      { h: 'Kinh tế' },
      { ul: ['Nghề: kế toán, tài chính, marketing, quản trị kinh doanh, ngoại thương.', 'Holland: E + C.', 'Trường: ĐH Kinh tế Quốc dân, Ngoại thương, FTU.'] },
      { h: 'Luật' },
      { ul: ['Nghề: luật sư, công chứng, kiểm sát, toà án.', 'Holland: E + S.', 'Trường: ĐH Luật Hà Nội, Luật TP.HCM.'] },
    ],
    [
      { q: 'Em thích đọc + viết + tranh luận — nghề nào?', a: 'Nhà báo, luật sư, nhà nghiên cứu xã hội học.' },
      { q: 'Kinh tế và Luật cần Holland chính?', a: 'Cả 2 cần E (Enterprising — thuyết phục, lãnh đạo).' },
    ]
  ),

  'S8HDTN-w21-quiz': L(
    'Khám phá nghề — 10 nhóm ngành lớn (3)',
    '3 nhóm còn lại: Sư phạm, Nghệ thuật, Nông-Lâm-Ngư.',
    ['Sư phạm.', 'Nghệ thuật.', 'Nông-Lâm-Ngư.'],
    [
      { h: 'Sư phạm' },
      { ul: ['Nghề: giáo viên các cấp, giảng viên ĐH.', 'Holland: S + (I/A/C tuỳ môn dạy).', 'Trường: ĐH Sư phạm Hà Nội, TP.HCM.', 'Đặc thù: ổn định, tâm huyết.'] },
      { h: 'Nghệ thuật' },
      { ul: ['Nghề: hoạ sĩ, nhạc sĩ, diễn viên, designer, kiến trúc sư, đạo diễn.', 'Holland: A.', 'Trường: ĐH Mỹ thuật, Học viện Âm nhạc, Sân khấu Điện ảnh, Kiến trúc.', 'Đặc thù: cạnh tranh cao, cần tài năng + nỗ lực.'] },
      { h: 'Nông-Lâm-Ngư' },
      { ul: ['Nghề: kỹ sư nông nghiệp, lâm nghiệp, thuỷ sản, thú y.', 'Holland: R + I.', 'Trường: ĐH Nông nghiệp, Lâm nghiệp.', 'Tương lai: nông nghiệp công nghệ cao, organic.'] },
    ],
    [
      { q: 'Em yêu vẽ + máy tính — nghề kết hợp?', a: 'Game designer, UI/UX designer, hoạt hình 3D.' },
      { q: 'Nông nghiệp lương thấp — đúng không?', a: 'Sai. Nông nghiệp công nghệ cao (smart farm) lương cao, tương lai sáng.' },
    ]
  ),

  'S8HDTN-w22-quiz': L(
    'Lập mục tiêu cá nhân — SMART goal',
    'Mục tiêu rõ ràng giúp tiến bộ. SMART là công cụ kinh điển.',
    ['Hiểu SMART.', 'Viết mục tiêu SMART.', 'Theo dõi.'],
    [
      { h: 'SMART' },
      { ul: ['S — Specific: cụ thể, rõ ràng.', 'M — Measurable: đo được.', 'A — Achievable: khả thi.', 'R — Relevant: phù hợp.', 'T — Time-bound: có thời hạn.'] },
      { h: 'Ví dụ' },
      { ul: ['Sai: "Tôi muốn học giỏi tiếng Anh".', 'Đúng: "Trong 6 tháng, tôi đạt 70 từ vựng mới/tuần và làm 1 đề IELTS Reading mỗi tuần".'] },
      { h: 'Theo dõi' },
      { ul: ['Ghi lên giấy/app.', 'Review mỗi tuần.', 'Điều chỉnh nếu cần.', 'Ăn mừng khi đạt.'] },
    ],
    [
      { q: 'Mục tiêu "Em chạy nhanh hơn" — SMART chưa?', a: 'Chưa. SMART: "Trong 3 tháng, em chạy 1500m từ 8\' xuống 7\' bằng tập 3 lần/tuần".' },
      { q: 'Vì sao mục tiêu cần đo được?', a: 'Để biết có tiến bộ không. "Học giỏi hơn" không đo được. "Tăng 1 điểm trung bình" thì đo được.' },
    ]
  ),

  'S8HDTN-w23-quiz': L(
    'Mindset cố định vs Mindset phát triển',
    'Cách em nghĩ về khả năng quyết định em tiến xa được bao nhiêu.',
    ['Hiểu 2 mindset.', 'Tự nhận diện.', 'Chuyển sang growth mindset.'],
    [
      { h: 'Fixed mindset (cố định)' },
      { ul: ['Tin tài năng bẩm sinh — không đổi được.', '"Tôi không giỏi toán" — không tin có thể giỏi.', 'Sợ thử thách vì sợ lộ "không giỏi".', 'Bỏ cuộc nhanh khi thất bại.'] },
      { h: 'Growth mindset (phát triển)' },
      { ul: ['Tin khả năng phát triển qua nỗ lực.', '"Tôi CHƯA giỏi toán — sẽ giỏi nếu cố".', 'Đón nhận thử thách.', 'Coi thất bại là bài học.'] },
      { h: 'Chuyển đổi' },
      { ul: ['Thêm chữ "CHƯA" vào câu phủ định.', 'Khen NỖ LỰC, không chỉ kết quả.', 'Học từ thất bại.'] },
      { note: 'Nghiên cứu của Carol Dweck — growth mindset HS giỏi hơn nhiều ở dài hạn.' },
    ],
    [
      { q: 'Đổi câu "Mình dốt văn" theo growth mindset.', a: '"Mình chưa giỏi văn — sẽ tiến bộ nếu đọc nhiều và luyện viết".' },
      { q: 'Khen đúng cách?', a: 'Khen nỗ lực ("Em đã cố gắng nhiều") — không chỉ khen tài ("Em thông minh quá").' },
    ]
  ),

  'S8HDTN-w24-quiz': L(
    'Quản lý tài chính cá nhân cơ bản',
    'Học quản lý tiền từ tuổi 13 — kỹ năng cả đời.',
    ['Tiền tiêu vặt.', 'Quy tắc 50-30-20.', 'Tiết kiệm.'],
    [
      { h: 'Tiền tiêu vặt' },
      { p: 'Tiền bố mẹ cho hằng tuần/tháng. Đây là cơ hội tập quản lý.' },
      { h: 'Quy tắc 50-30-20' },
      { ul: ['50% — Nhu cầu (đồ ăn, học liệu).', '30% — Sở thích (truyện, đồ chơi).', '20% — Tiết kiệm (heo đất, tài khoản).'] },
      { h: 'Tiết kiệm' },
      { ul: ['Tiết kiệm trước, chi tiêu sau.', 'Mục tiêu cụ thể: "200k mua sách Cô Mê đã".', 'Tránh mua bốc đồng — chờ 24h trước khi mua.'] },
      { h: 'Cảnh báo' },
      { ul: ['Không cho bạn vay nhiều — mất tình bạn.', 'Không mua nợ thẻ tín dụng.', 'Cẩn thận lừa đảo online.'] },
    ],
    [
      { q: 'Em có 100k/tuần — chia theo 50-30-20?', a: '50k nhu cầu, 30k sở thích, 20k tiết kiệm.' },
      { q: 'Mua bốc đồng là gì?', a: 'Thấy là mua không suy nghĩ. Chờ 24h thường thấy không cần thiết.' },
    ]
  ),

  'S8HDTN-w25-quiz': L(
    'Sức khoẻ tinh thần — Tự chăm sóc bản thân',
    'Tinh thần cũng cần chăm như cơ thể.',
    ['Self-care là gì.', 'Các hoạt động.', 'Đặt ranh giới.'],
    [
      { h: 'Self-care' },
      { p: 'Là các hoạt động chủ động duy trì sức khoẻ thể chất, tinh thần và cảm xúc.' },
      { h: 'Các hoạt động' },
      { ul: ['Thể chất: ngủ đủ 8h, ăn lành mạnh, vận động 30p/ngày.', 'Tinh thần: đọc sách, thiền, viết nhật ký.', 'Xã hội: gặp bạn tốt, hạn chế người tiêu cực.', 'Sở thích lành mạnh: vẽ, nhạc, thể thao.'] },
      { h: 'Đặt ranh giới' },
      { ul: ['Nói "không" khi cần.', 'Hạn chế mạng xã hội.', 'Tránh người độc hại.', 'Cho mình giờ một mình.'] },
      { note: 'Self-care không phải ích kỷ — là cần thiết. Bình đầy thì mới rót cho người khác.' },
    ],
    [
      { q: 'Self-care chỉ là spa và mua sắm?', a: 'Sai. Self-care chủ yếu là thói quen lành mạnh: ngủ, ăn, vận động, mối quan hệ tốt.' },
      { q: 'Bạn rủ "đi chơi" mà em mệt — em làm gì?', a: 'Nói thẳng "Mình cần nghỉ hôm nay". Bạn tốt sẽ hiểu.' },
    ]
  ),

  'S8HDTN-w26-quiz': L(
    'Phòng chống nghiện game và mạng xã hội',
    'Game/MXH thiết kế gây nghiện. Hiểu để tự bảo vệ.',
    ['Dấu hiệu nghiện.', 'Cơ chế gây nghiện.', 'Cách phòng tránh.'],
    [
      { h: 'Dấu hiệu nghiện' },
      { ul: ['Chơi/dùng nhiều giờ mỗi ngày.', 'Cảm thấy bứt rứt nếu không có.', 'Ảnh hưởng học tập, sức khoẻ.', 'Mất hứng thú với hoạt động khác.', 'Nói dối về thời gian dùng.'] },
      { h: 'Cơ chế gây nghiện' },
      { p: 'Game và MXH tận dụng dopamine — hoá chất "vui vẻ" trong não. Mỗi like, mỗi trận thắng tiết ra dopamine, gây thèm chơi tiếp.' },
      { h: 'Phòng tránh' },
      { ul: ['Giới hạn thời gian (1-2h/ngày).', 'Tắt thông báo.', 'Để điện thoại xa khi học/ngủ.', 'Thay thế bằng sở thích khác (thể thao, vẽ).', 'Hẹn bạn ngoài đời thay vì chat.'] },
    ],
    [
      { q: 'Game free-to-play kiếm tiền thế nào?', a: 'Bán in-game items, quảng cáo. Càng giữ người chơi lâu, càng nhiều tiền — nên thiết kế để gây nghiện.' },
      { q: 'Cách giảm dùng điện thoại?', a: 'Đặt timer, để điện thoại xa, tìm sở thích offline, hẹn bạn gặp trực tiếp.' },
    ]
  ),

  'S8HDTN-w27-quiz': L(
    'Trở thành công dân số có trách nhiệm',
    'Mỗi click, mỗi post của em đều có hậu quả. Hãy là công dân số tốt.',
    ['Nguyên tắc công dân số.', 'Trách nhiệm hành vi.', 'Bảo vệ người khác.'],
    [
      { h: 'Nguyên tắc' },
      { ul: ['Tử tế như ngoài đời.', 'Tôn trọng quyền riêng tư người khác.', 'Không tin và lan tin chưa kiểm chứng.', 'Sử dụng công nghệ có chừng mực.', 'Tôn trọng quyền tác giả.'] },
      { h: 'Trách nhiệm' },
      { ul: ['Suy nghĩ trước khi post.', 'Không tham gia hate speech.', 'Báo cáo nội dung xấu.', 'Hỗ trợ bạn bị bắt nạt mạng.'] },
      { h: 'Bảo vệ' },
      { ul: ['Không chia sẻ ảnh người khác không xin phép.', 'Không tham gia "shaming" online.', 'Hỗ trợ nạn nhân — không phải kẻ bắt nạt.'] },
    ],
    [
      { q: 'Thấy bạn bị mọi người chế giễu trên mạng — em làm gì?', a: 'Ủng hộ bạn (comment tích cực, nhắn riêng), báo nội dung xấu. Không cười theo.' },
      { q: '"Suy nghĩ trước khi post" có vai trò gì?', a: 'Tránh hối tiếc. Post lên internet rất khó xoá triệt để.' },
    ]
  ),

  'S8HDTN-w28-quiz': L(
    'Hợp tác và làm việc nhóm',
    'Kỹ năng nhóm là một trong những kỹ năng quan trọng nhất thế kỷ 21.',
    ['Vai trò trong nhóm.', 'Giải quyết xung đột.', 'Đánh giá đồng đẳng.'],
    [
      { h: 'Vai trò trong nhóm' },
      { ul: ['Trưởng nhóm: điều phối, ra quyết định.', 'Thư ký: ghi chép.', 'Sáng tạo: nghĩ ý tưởng.', 'Thực thi: làm nhanh, đúng.', 'Phản biện: kiểm tra, hỏi khó.'] },
      { h: 'Giải quyết xung đột' },
      { ul: ['Lắng nghe các bên.', 'Tìm điểm chung.', 'Tập trung vào vấn đề, không chỉ trích cá nhân.', 'Compromise (nhượng bộ).'] },
      { h: 'Đánh giá đồng đẳng' },
      { p: 'Đánh giá thành viên dựa: đóng góp + hợp tác + chất lượng. Công bằng — không vì thân quen.' },
    ],
    [
      { q: 'Bạn không đóng góp nhưng đòi tên trong bài — em làm gì?', a: 'Báo thầy cô. Đánh giá đồng đẳng trung thực — không bao che.' },
      { q: 'Vai trò "phản biện" có cần không?', a: 'Rất cần. Người hỏi khó giúp nhóm tránh sai lầm.' },
    ]
  ),

  'S8HDTN-w29-quiz': L(
    'Sáng tạo và đổi mới (creativity & innovation)',
    'Sáng tạo không chỉ dành cho hoạ sĩ — là kỹ năng ai cũng cần.',
    ['Hiểu sáng tạo.', 'Rèn sáng tạo.', 'Đổi mới khác sáng tạo.'],
    [
      { h: 'Sáng tạo' },
      { p: 'Là khả năng tạo ý tưởng mới, kết nối các điều cũ theo cách lạ.' },
      { h: 'Đổi mới (innovation)' },
      { p: 'Là biến ý tưởng sáng tạo thành sản phẩm/giải pháp thực tế có giá trị.' },
      { h: 'Rèn sáng tạo' },
      { ul: ['Quan sát nhiều, đọc nhiều, đi nhiều.', 'Đặt câu hỏi "What if?" (nếu thì sao?).', 'Liệt kê ý tưởng tự do (brainstorming) trước khi đánh giá.', 'Thử và sai.', 'Nghỉ ngơi — nhiều ý tưởng hay đến lúc nghỉ.'] },
      { h: 'Ví dụ' },
      { p: 'iPhone là đổi mới — kết hợp ý tưởng cũ (điện thoại + máy tính cầm tay + máy nghe nhạc) thành sản phẩm mới.' },
    ],
    [
      { q: 'Sáng tạo có phải bẩm sinh?', a: 'Không. Sáng tạo có thể rèn luyện qua quan sát, đọc, thử nghiệm.' },
      { q: 'Brainstorming nguyên tắc?', a: 'Đưa ra càng nhiều ý tưởng càng tốt, KHÔNG phê phán trong khi brainstorm.' },
    ]
  ),

  'S8HDTN-w30-quiz': L(
    'Kỹ năng thuyết trình',
    'Thuyết trình hiệu quả là kỹ năng cần cả đời — học từ sớm.',
    ['Chuẩn bị nội dung.', 'Thiết kế slide.', 'Trình bày.'],
    [
      { h: 'Chuẩn bị nội dung' },
      { ul: ['Hiểu khán giả.', 'Cấu trúc 3 phần: mở-thân-kết.', 'Mở đầu thu hút (câu hỏi, số liệu, câu chuyện).', 'Tập trung 3-5 ý chính.', 'Kết thúc mạnh, kêu gọi hành động.'] },
      { h: 'Thiết kế slide' },
      { ul: ['Mỗi slide 1 ý.', 'Chữ to (>24pt), ít chữ.', 'Hình ảnh thay vì văn bản nếu được.', '6-10-30 rule: max 6 dòng, font 30pt, 10 phút/slide.'] },
      { h: 'Trình bày' },
      { ul: ['Tự tin — đứng thẳng, mắt nhìn khán giả.', 'Tốc độ vừa phải.', 'Không đọc slide.', 'Tương tác — hỏi khán giả.', 'Quản lý thời gian.'] },
    ],
    [
      { q: 'Slide có 50 chữ — sai gì?', a: 'Quá nhiều. Slide là phụ trợ, không phải đọc thay người trình bày.' },
      { q: 'Khán giả không tương tác — em làm gì?', a: 'Hỏi câu mở: "Có bao nhiêu bạn từng...?", "Bạn nghĩ sao về...?".' },
    ]
  ),

  'S8HDTN-w31-quiz': L(
    'Hoạt động cộng đồng — Bảo vệ môi trường địa phương',
    'Bắt đầu từ phố/khu vực mình sống — tác động lớn dần.',
    ['Quan sát vấn đề địa phương.', 'Lập kế hoạch.', 'Thực hiện và đánh giá.'],
    [
      { h: 'Quan sát vấn đề' },
      { ul: ['Đường ngập rác.', 'Sông/hồ ô nhiễm.', 'Cây xanh ít.', 'Ô nhiễm không khí.'] },
      { h: 'Lập kế hoạch' },
      { ul: ['Chọn 1 vấn đề.', 'Tìm hiểu nguyên nhân.', 'Đề xuất giải pháp khả thi.', 'Phân vai trong nhóm.', 'Lịch trình thực hiện.'] },
      { h: 'Thực hiện' },
      { ul: ['Hoạt động dọn rác.', 'Tuyên truyền hàng xóm.', 'Trồng cây.', 'Vận động chính quyền (gửi thư, đề xuất).'] },
      { h: 'Đánh giá' },
      { p: 'Sau 1 tháng: kết quả thế nào? Bài học gì? Tiếp theo làm gì?' },
    ],
    [
      { q: 'Phố em ngập rác — bắt đầu thế nào?', a: 'Tổ chức 1 ngày dọn rác cùng bạn bè. Đặt thùng rác. Tuyên truyền nguyên nhân.' },
      { q: 'Một mình HS làm được gì?', a: 'Nhiều! Tổ chức bạn bè, ảnh hưởng gia đình, đề xuất tổ chức. Nhỏ + nhiều = thay đổi lớn.' },
    ]
  ),

  'S8HDTN-w32-quiz': L(
    'Kỹ năng giải quyết vấn đề',
    'Cuộc sống đầy vấn đề. Học cách giải quyết là kỹ năng nền tảng.',
    ['Quy trình 5 bước.', 'Tư duy phản biện.', 'Vận dụng.'],
    [
      { h: '5 bước giải quyết vấn đề' },
      { ul: ['1. Xác định vấn đề rõ ràng.', '2. Phân tích nguyên nhân.', '3. Đưa ra nhiều giải pháp.', '4. Chọn giải pháp tốt nhất.', '5. Thực hiện và đánh giá.'] },
      { h: 'Tư duy phản biện trong giải quyết' },
      { ul: ['Đừng vội kết luận.', 'Tìm thêm thông tin.', 'Cân nhắc nhiều góc nhìn.', 'Đánh giá rủi ro/lợi ích.'] },
      { h: 'Vận dụng' },
      { p: 'VD: Em bị điểm kém Toán. Bước 1: Vấn đề "Điểm Toán giảm 3 điểm trong 2 tháng". Bước 2: Tại sao? (Không hiểu bài? Lười làm? Mệt?). Bước 3: Giải pháp (hỏi thầy, học nhóm, ngủ đủ). Bước 4: Chọn (học nhóm + ngủ đủ). Bước 5: Thực hiện 1 tháng và đánh giá.' },
    ],
    [
      { q: '5 bước giải quyết vấn đề?', a: 'Xác định → Phân tích → Đề xuất → Chọn → Thực hiện-Đánh giá.' },
      { q: 'Vì sao đưa ra nhiều giải pháp?', a: 'Vì giải pháp đầu thường không phải tốt nhất. So sánh sẽ thấy được lựa chọn hay hơn.' },
    ]
  ),

  'S8HDTN-w33-quiz': L(
    'Định hướng tương lai — Tầm nhìn 5-10 năm',
    'Có tầm nhìn dài hạn giúp em không lạc trong những lo toan ngắn hạn.',
    ['Tầm nhìn (vision) là gì.', 'Xây tầm nhìn cá nhân.', 'Kế hoạch ngược (backwards planning).'],
    [
      { h: 'Tầm nhìn cá nhân' },
      { p: 'Bức tranh tương lai mà em muốn — về bản thân, công việc, gia đình, đóng góp.' },
      { h: 'Xây tầm nhìn' },
      { ul: ['Tưởng tượng 5-10 năm sau em đang làm gì?', 'Em ở đâu, với ai?', 'Em đóng góp gì?', 'Em cảm thấy thế nào?'] },
      { h: 'Backwards planning' },
      { ul: ['10 năm: tầm nhìn lớn.', '5 năm: mục tiêu trung gian.', '1 năm: mục tiêu năm tới.', 'Tháng này: bước đi cụ thể.'] },
      { note: 'Tầm nhìn không phải để khoá cứng — mà để có định hướng. Có thể điều chỉnh khi em hiểu mình hơn.' },
    ],
    [
      { q: 'Sao cần tầm nhìn 10 năm khi mới 13?', a: 'Để định hướng — chọn THPT, chọn nghề. Không cần chính xác, nhưng có hướng.' },
      { q: 'Backwards planning hoạt động thế nào?', a: 'Đi ngược từ mục tiêu xa → mục tiêu gần → bước cụ thể tuần này.' },
    ]
  ),

  'S8HDTN-w34-quiz': L(
    'Tham gia hoạt động ngoại khoá và CLB',
    'Ngoại khoá phát triển kỹ năng và xây dựng mối quan hệ — quan trọng như học chính khoá.',
    ['Lợi ích ngoại khoá.', 'Các loại CLB.', 'Chọn đúng và tham gia tích cực.'],
    [
      { h: 'Lợi ích' },
      { ul: ['Phát triển kỹ năng (lãnh đạo, làm nhóm).', 'Khám phá đam mê.', 'Mở rộng mạng lưới bạn bè.', 'Lợi thế phỏng vấn trường, học bổng.', 'Niềm vui và sức khoẻ tinh thần.'] },
      { h: 'Các loại CLB' },
      { ul: ['Học thuật: Toán, Tiếng Anh, Khoa học.', 'Nghệ thuật: Âm nhạc, Mỹ thuật, Múa.', 'Thể thao: Bóng đá, Bóng rổ, Cờ.', 'Xã hội: Tình nguyện, Môi trường.', 'Công nghệ: Lập trình, Robotics.'] },
      { h: 'Chọn đúng và tham gia tích cực' },
      { ul: ['Chọn CLB em THỰC SỰ thích — không vì bạn.', '2-3 CLB là vừa đủ — không tham.', 'Cam kết tham gia đều — không bỏ giữa chừng.', 'Đảm bảo cân bằng học chính khoá.'] },
    ],
    [
      { q: 'Tham gia 5 CLB cùng lúc có tốt không?', a: 'Không. Tham không sâu — không tiến bộ. 2-3 CLB là vừa.' },
      { q: 'CLB nào lợi cho hồ sơ học bổng?', a: 'CLB em đam mê + có thành tích/lãnh đạo. Chứ không phải CLB "kêu" mà em không cống hiến.' },
    ]
  ),

  'S8HDTN-w35-quiz': L(
    'Tổng kết — Hành trang vào lớp 9',
    'Tổng kết HĐTN 8 — chuẩn bị cho lớp 9 và thi chuyển cấp.',
    ['Tổng kết kỹ năng.', 'Hành trang.', 'Định hướng lớp 9.'],
    [
      { h: 'Tổng kết kỹ năng đã học' },
      { ul: ['Tự thân: hiểu mình, quản lý thời gian-cảm xúc.', 'Giao tiếp: lắng nghe, thuyết trình, hợp tác.', 'Tư duy: phản biện, giải quyết vấn đề, sáng tạo.', 'Hướng nghiệp: Holland, 10 nhóm ngành.', 'Cuộc sống: an toàn mạng, môi trường, tài chính.'] },
      { h: 'Hành trang vào lớp 9' },
      { ul: ['Tầm nhìn tương lai rõ hơn.', 'Mục tiêu THPT cụ thể.', 'Kế hoạch ôn thi.', 'Thói quen học tốt.', 'Mối quan hệ tích cực.'] },
      { h: 'Lớp 9' },
      { ul: ['Năm thi chuyển cấp — quan trọng nhất THCS.', 'Ôn Toán-Văn-Anh (3 môn thi).', 'Định hướng trường THPT.', 'Giữ sức khoẻ tinh thần.'] },
      { note: 'Em đã trưởng thành nhiều. Mỗi kỹ năng học được là 1 viên gạch xây tương lai.' },
    ],
    [
      { q: '3 kỹ năng em sẽ mang vào lớp 9?', a: 'Tự chọn: quản lý thời gian, growth mindset, giải quyết vấn đề... và áp dụng thực sự.' },
      { q: 'Sai lầm cần tránh ở lớp 9?', a: 'Học vẹt không hiểu, ngủ thiếu, áp lực tự sinh, không nhờ giúp khi khó.' },
    ]
  ),
};
