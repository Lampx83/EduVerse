// ============================================================
// Lớp 8 · HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Phong cách học, kỹ năng sống, hướng nghiệp, an toàn mạng theo CTGD 2018.
// ID prefix: "S8HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8HDTN', 'hdtn', n, title, qs, opts);

export const S8HDTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Khám phá bản thân — Tính cách và sở thích', [
    Q('Tính cách (personality) là?', ['Đặc điểm tâm lý ổn định, phân biệt người này với người khác', 'Trang phục', 'Ngoại hình', 'Trí thông minh'], 0, 'Tính cách là tập hợp đặc điểm tâm lý ổn định của mỗi cá nhân.'),
    Q('Hiểu bản thân giúp?', ['Định hướng học tập, nghề nghiệp, mối quan hệ phù hợp', 'Tự cao', 'Không có lợi', 'Mất thời gian'], 0, 'Hiểu bản thân là nền tảng để chọn con đường phù hợp.'),
    Q('Cách hiểu bản thân?', ['Tự suy ngẫm + hỏi người thân + test tâm lý', 'Tự dối mình', 'Không cần hiểu', 'Chỉ dựa người khác'], 0, 'Kết hợp tự phản tỉnh, lắng nghe người thân và test khoa học (MBTI, DISC…) cho kết quả tốt.'),
    Q('Điểm mạnh của bản thân?', ['Việc mình làm tốt, giúp ta tự tin và phát triển', 'Tự khoe', 'Không tồn tại', 'Không có ý nghĩa'], 0, 'Điểm mạnh = khả năng/đặc điểm tốt → cần phát huy.'),
    Q('Điểm yếu là?', ['Việc cần cải thiện — không phải xấu hổ', 'Khuyết tật vĩnh viễn', 'Không thay đổi được', 'Vô nghĩa'], 0, 'Điểm yếu = cơ hội cải thiện; biết thì sửa được — không có gì phải xấu hổ.'),
  ]),

  M(2, 'Phong cách học tập — Xác định kiểu học của em', [
    Q('Phong cách học (learning style) gồm?', ['Thị giác, thính giác, vận động, đọc/viết', 'Chỉ thị giác', 'Chỉ thính giác', 'Không có khái niệm'], 0, 'Mô hình VARK: Visual (thị giác), Auditory (thính), Reading/Writing, Kinesthetic (vận động).'),
    Q('Người học thị giác (visual) học tốt nhất khi?', ['Có hình ảnh, sơ đồ, video', 'Nghe nói', 'Đọc văn bản dài', 'Chỉ thực hành'], 0, 'Visual learners ghi nhớ tốt qua hình ảnh, sơ đồ tư duy, infographic.'),
    Q('Người học thính giác (auditory)?', ['Nghe giảng, podcast, thảo luận', 'Đọc thầm', 'Vẽ', 'Làm thực hành'], 0, 'Auditory: học tốt qua nghe — giảng bài, podcast, thảo luận nhóm.'),
    Q('Người học vận động (kinesthetic)?', ['Thực hành, thí nghiệm, vận động', 'Ngồi yên đọc', 'Chỉ nghe', 'Chỉ xem'], 0, 'Kinesthetic: học bằng làm — thí nghiệm, thực hành, vận động.'),
    Q('Phong cách học có cố định?', ['Không — kết hợp nhiều phong cách hiệu quả hơn', 'Có, cố định 1 kiểu', 'Tuỳ vào di truyền', 'Không thể thay đổi'], 0, 'Mỗi người có phong cách trội, nhưng kết hợp đa phương pháp học hiệu quả nhất.'),
  ]),

  M(3, 'Kỹ năng quản lý thời gian', [
    Q('Quản lý thời gian là?', ['Lập kế hoạch và sử dụng thời gian hiệu quả', 'Đếm giờ', 'Đeo đồng hồ', 'Không có ý nghĩa'], 0, 'Quản lý thời gian = lập kế hoạch + ưu tiên + theo dõi để sử dụng thời gian hiệu quả.'),
    Q('Ma trận Eisenhower phân loại?', ['Quan trọng × Khẩn cấp (4 ô)', 'Dễ × Khó', 'Vui × Buồn', 'Việc nhà × việc trường'], 0, 'Ma trận Eisenhower: 4 ô (quan trọng/không, khẩn cấp/không) → ưu tiên.'),
    Q('Việc cần làm trước?', ['Quan trọng + khẩn cấp', 'Không quan trọng + không khẩn', 'Vui', 'Dễ làm'], 0, 'Việc quan trọng + khẩn cấp = ưu tiên cao nhất (ô 1).'),
    Q('Việc nào nên loại bỏ?', ['Không quan trọng + không khẩn cấp', 'Quan trọng + khẩn', 'Quan trọng + không khẩn', 'Khẩn + không quan trọng'], 0, 'Ô 4: không quan trọng + không khẩn → cắt bỏ (lướt mạng, game thủ).'),
    Q('Phương pháp Pomodoro?', ['25 phút tập trung + 5 phút nghỉ, lặp lại', 'Học 5 giờ liên tục', 'Học 10 phút', 'Tuỳ ý'], 0, 'Pomodoro: 25 phút tập trung + 5 phút nghỉ, sau 4 cycle nghỉ dài 15-30 phút.'),
  ]),

  M(4, 'Kỹ năng phản biện (critical thinking)', [
    Q('Phản biện (critical thinking) là?', ['Đánh giá thông tin dựa trên bằng chứng, không tin theo cảm tính', 'Phản đối mọi thứ', 'Cãi lại', 'Im lặng'], 0, 'Critical thinking = đánh giá có hệ thống dựa trên bằng chứng, logic.'),
    Q('Đặc trưng người phản biện?', ['Đặt câu hỏi, kiểm chứng nguồn, suy nghĩ logic', 'Tin mọi thứ', 'Cãi cãi', 'Không suy nghĩ'], 0, 'Người phản biện: đặt câu hỏi "Có bằng chứng không?", "Nguồn đáng tin?", suy nghĩ logic.'),
    Q('Khi đọc tin tức, cần?', ['Kiểm chứng nguồn, đối chiếu nhiều nơi', 'Tin ngay', 'Chia sẻ ngay', 'Phớt lờ'], 0, 'Tin tức: kiểm chứng nguồn, đối chiếu nhiều nguồn uy tín trước khi tin/chia sẻ.'),
    Q('Logical fallacy phổ biến?', ['Khái quát hoá vội vàng, tấn công cá nhân, nguỵ biện đám đông', 'Suy luận đúng', 'Bằng chứng cụ thể', 'Định nghĩa rõ ràng'], 0, 'Logical fallacy = lỗi nguỵ biện: vội khái quát, ad hominem (tấn công cá nhân), bandwagon (đám đông)…'),
    Q('Phản biện trong học tập?', ['Đặt câu hỏi, không chấp nhận thụ động', 'Học vẹt', 'Sao chép', 'Chấp nhận hết'], 0, 'Học chủ động = đặt câu hỏi, phản biện, hiểu sâu thay vì nhớ bề mặt.'),
  ]),

  M(5, 'Quản lý cảm xúc tuổi dậy thì', [
    Q('Tuổi dậy thì là?', ['Giai đoạn chuyển từ trẻ em sang người lớn, 10–18 tuổi', 'Tuổi nhỏ', 'Tuổi già', 'Tuỳ ý'], 0, 'Dậy thì: 10–18 tuổi (gái sớm hơn trai 1–2 năm), biến đổi mạnh về thể chất và tâm lý.'),
    Q('Cảm xúc tuổi dậy thì thường?', ['Mãnh liệt, biến động, dễ tự ti hoặc nổi giận', 'Bình thường', 'Yên tĩnh', 'Vô cảm'], 0, 'Do hormone biến động, cảm xúc tuổi dậy thì mãnh liệt và thay đổi nhanh.'),
    Q('Cách quản lý cơn giận?', ['Hít thở sâu, đếm đến 10, đi ra chỗ khác', 'Đập đồ', 'Quát người khác', 'Tự đánh mình'], 0, 'Kỹ thuật hạ nhiệt: hít thở sâu, đếm, tách khỏi tình huống.'),
    Q('Khi buồn bã, nên?', ['Chia sẻ với người tin cậy, vận động, làm điều thích', 'Im lặng chịu đựng', 'Ăn nhiều', 'Tự cô lập'], 0, 'Chia sẻ với người tin cậy (bố mẹ, bạn thân, giáo viên), vận động giảm stress.'),
    Q('Khi có suy nghĩ tự hại?', ['Báo người lớn/tổng đài 111/1900599930 ngay', 'Im lặng', 'Tự xử lý', 'Tránh xa người'], 0, 'Suy nghĩ tự hại = báo người lớn NGAY. Tổng đài 111 (trẻ em), 1900599930 (tâm lý khẩn cấp).'),
  ]),

  M(6, 'Kỹ năng giao tiếp hiệu quả', [
    Q('Giao tiếp hiệu quả gồm?', ['Lắng nghe + nói rõ + ngôn ngữ cơ thể', 'Chỉ nói', 'Chỉ nghe', 'Chỉ viết'], 0, 'Giao tiếp tốt: lắng nghe chủ động + nói rõ ràng + ngôn ngữ cơ thể phù hợp.'),
    Q('Lắng nghe chủ động (active listening)?', ['Tập trung, không ngắt lời, phản hồi xác nhận', 'Vâng vâng cho qua', 'Vừa nghe vừa làm việc khác', 'Ngắt lời ngay'], 0, 'Active listening: tập trung, gật đầu, hỏi lại để xác nhận hiểu.'),
    Q('Ngôn ngữ cơ thể quan trọng vì?', ['Chiếm ~55% ý nghĩa truyền tải (theo Mehrabian)', 'Không quan trọng', 'Chỉ lời nói quan trọng', 'Chỉ giọng'], 0, 'Nghiên cứu Mehrabian: trong giao tiếp cảm xúc, ngôn ngữ cơ thể 55%, giọng 38%, lời 7%.'),
    Q('Khi không hiểu, nên?', ['Hỏi lại lịch sự', 'Giả vờ hiểu', 'Bỏ đi', 'Im lặng'], 0, 'Hỏi lại lịch sự ("Bạn có thể nói rõ hơn không?") tốt hơn giả vờ hiểu.'),
    Q('Giao tiếp với người lớn tuổi cần?', ['Lễ phép, nhường lời, lắng nghe', 'Tự do', 'Nói át', 'Vô lễ'], 0, 'Văn hoá VN: lễ phép, kính trọng, nhường lời cho người lớn tuổi.'),
  ]),

  M(7, 'Tình bạn — Tình yêu lành mạnh tuổi học trò', [
    Q('Tình bạn lành mạnh dựa trên?', ['Tôn trọng, tin cậy, chân thành, cùng tiến bộ', 'Lợi dụng', 'Đố kỵ', 'Bao che'], 0, 'Tình bạn lành mạnh = tôn trọng + tin cậy + chân thành + giúp nhau tiến bộ.'),
    Q('Tình bạn không lành mạnh?', ['Rủ rê làm điều xấu, bắt ép, ích kỷ', 'Cùng học', 'Chia sẻ', 'Vui chơi lành mạnh'], 0, 'Tình bạn xấu: rủ rê làm điều sai (trốn học, hút thuốc, bắt nạt…).'),
    Q('Tình cảm tuổi học trò là?', ['Bình thường, cần điều chỉnh phù hợp', 'Sai trái', 'Phải cấm tuyệt', 'Không tồn tại'], 0, 'Cảm xúc rung động tuổi dậy thì là tự nhiên — cần điều chỉnh phù hợp lứa tuổi.'),
    Q('Khi có cảm tình với bạn khác giới?', ['Giữ tình bạn trong sáng, ưu tiên học tập', 'Yêu đương ồ ạt', 'Bỏ học', 'Theo đuổi mọi giá'], 0, 'Tuổi học trò: giữ tình cảm trong sáng, ưu tiên học tập + phát triển bản thân.'),
    Q('Áp lực bạn bè (peer pressure) là?', ['Bị bạn ép làm điều mình không muốn', 'Bạn giúp đỡ', 'Lời khuyên tốt', 'Học hỏi'], 0, 'Peer pressure tiêu cực: bị bạn ép làm điều xấu (hút thuốc, trốn học…). Cần biết từ chối.'),
  ]),

  M(8, 'Hướng nghiệp — Mô hình Holland (RIASEC)', [
    Q('Holland Code (RIASEC) gồm?', ['6 loại: Realistic, Investigative, Artistic, Social, Enterprising, Conventional', '4 loại', '10 loại', '8 loại'], 0, 'John Holland: 6 nhóm tính cách-nghề nghiệp R-I-A-S-E-C.'),
    Q('Realistic (R) phù hợp nghề?', ['Kỹ thuật, cơ khí, nông nghiệp, xây dựng', 'Nghệ thuật', 'Giáo viên', 'Văn phòng'], 0, 'R = thực tế, thích làm việc tay, máy móc: kỹ sư, thợ, nông dân, lính…'),
    Q('Investigative (I) phù hợp?', ['Khoa học, nghiên cứu, y tế, lập trình', 'Bán hàng', 'Nghệ thuật', 'Hành chính'], 0, 'I = ưa khám phá, nghiên cứu: nhà khoa học, bác sĩ, lập trình viên, nhà phân tích…'),
    Q('Artistic (A) phù hợp?', ['Nghệ thuật, thiết kế, văn chương, âm nhạc', 'Kỹ thuật', 'Y tế', 'Kế toán'], 0, 'A = sáng tạo, nghệ thuật: hoạ sĩ, nhạc sĩ, nhà thiết kế, nhà văn…'),
    Q('Social (S) phù hợp?', ['Giáo dục, y tế, công tác xã hội, tư vấn', 'Kỹ thuật', 'Tài chính', 'Khoa học'], 0, 'S = thích giúp người: giáo viên, bác sĩ, công tác xã hội, tư vấn, điều dưỡng…'),
  ]),

  M(9, 'Hướng nghiệp — 10 nhóm ngành lớn theo Holland', [
    Q('Enterprising (E) phù hợp?', ['Kinh doanh, quản lý, marketing, luật', 'Kỹ thuật', 'Khoa học cơ bản', 'Nghệ thuật thuần'], 0, 'E = khởi nghiệp, lãnh đạo, thuyết phục: doanh nhân, quản lý, sale, luật sư…'),
    Q('Conventional (C) phù hợp?', ['Kế toán, ngân hàng, hành chính, thư viện', 'Phiêu lưu', 'Nghệ thuật tự do', 'Khám phá'], 0, 'C = thích trật tự, quy củ: kế toán, ngân hàng, hành chính, thư viện, thống kê…'),
    Q('Hướng nghiệp có ý nghĩa?', ['Chọn nghề phù hợp năng lực + sở thích + nhu cầu XH', 'Không quan trọng', 'Chọn ngẫu nhiên', 'Theo bố mẹ tuyệt đối'], 0, 'Chọn nghề tốt: cân bằng năng lực + sở thích + cơ hội thị trường.'),
    Q('Nguyên tắc chọn nghề?', ['Biết mình + biết nghề + biết xã hội', 'Theo trào lưu', 'Theo bạn', 'Tự nhiên đến'], 0, 'Hướng nghiệp 3 trụ cột: hiểu mình + hiểu nghề + hiểu thị trường lao động.'),
    Q('Khi chưa biết thích gì?', ['Trải nghiệm nhiều, đọc về các nghề, gặp người làm nghề', 'Bỏ cuộc', 'Chọn đại', 'Để cha mẹ quyết'], 0, 'Cách khám phá: trải nghiệm thực tế, đọc về các nghề, phỏng vấn người trong nghề.'),
  ]),

  M(10, 'An toàn mạng nâng cao — Quyền riêng tư cá nhân', [
    Q('Quyền riêng tư trên mạng?', ['Quyền kiểm soát thông tin cá nhân của mình', 'Quyền lấy thông tin người khác', 'Không có quyền', 'Vô nghĩa'], 0, 'Quyền riêng tư: cá nhân kiểm soát ai được biết và sử dụng thông tin của mình.'),
    Q('Thông tin nhạy cảm KHÔNG nên đăng?', ['CMND, địa chỉ, số ĐT, ảnh nhạy cảm, lịch trình hằng ngày', 'Ảnh chụp lớp học', 'Tên', 'Sở thích'], 0, 'KHÔNG đăng: CMND, địa chỉ, số ĐT, ảnh nhạy cảm, lịch trình hằng ngày (kẻ xấu lợi dụng).'),
    Q('Khi bạn xin số ĐT?', ['Chỉ chia sẻ với người tin cậy', 'Cho mọi người', 'Đăng công khai', 'Không cho ai'], 0, 'Chia sẻ thông tin liên lạc có chọn lọc — chỉ người tin cậy.'),
    Q('Cài đặt quyền riêng tư mạng XH?', ['Chỉ bạn bè được xem, không cho người lạ', 'Công khai mọi thứ', 'Mặc định', 'Không quan tâm'], 0, 'Cài private: chỉ bạn bè/follow xem; không cho người lạ tiếp cận thông tin.'),
    Q('Khi vô tình lộ thông tin?', ['Xoá ngay, đổi mật khẩu, báo người lớn', 'Im lặng', 'Đăng tiếp', 'Trách bản thân'], 0, 'Hành động: xoá ngay, đổi mật khẩu liên quan, báo người lớn để được hỗ trợ.'),
  ]),

  M(11, 'An toàn mạng nâng cao — Deepfake và tin giả', [
    Q('Deepfake là?', ['AI tạo video/audio giả mạo người thật', 'Phim thật', 'Phim hài', 'Hoạt hình'], 0, 'Deepfake: dùng AI tạo video/audio giả mạo gần như thật về người có thật.'),
    Q('Deepfake nguy hiểm vì?', ['Gây tin giả, vu khống, lừa đảo, tống tiền', 'Vô hại', 'Chỉ giải trí', 'Không có tác hại'], 0, 'Deepfake dùng để lừa đảo, vu khống chính trị gia, người nổi tiếng, tống tiền nạn nhân.'),
    Q('Dấu hiệu nhận biết deepfake?', ['Cử động mắt-môi không tự nhiên, ánh sáng lệch, chất lượng âm-hình không đồng bộ', 'Rõ nét', 'Tự nhiên', 'Không nhận biết được'], 0, 'Deepfake cũ có dấu hiệu: mắt nhấp, môi lệch, da quá mịn, ánh sáng/bóng không nhất quán.'),
    Q('Khi gặp video nghi deepfake?', ['Kiểm chứng nguồn, không chia sẻ', 'Chia sẻ ngay', 'Tin ngay', 'Báo cáo người trong video'], 0, 'Kiểm chứng qua nguồn uy tín; nếu nghi giả, không chia sẻ + báo cáo nền tảng.'),
    Q('Pháp luật VN về deepfake?', ['Tạo/lan truyền deepfake có thể bị xử lý hình sự', 'Hợp pháp', 'Tự do', 'Khuyến khích'], 0, 'Luật An ninh mạng VN: lan truyền nội dung sai sự thật, gây hậu quả nghiêm trọng — xử lý hình sự.'),
  ]),

  M(12, 'Bảo vệ môi trường — Biến đổi khí hậu', [
    Q('Biến đổi khí hậu (climate change) chủ yếu do?', ['Khí nhà kính (CO2, methane) từ hoạt động con người', 'Tự nhiên hoàn toàn', 'Mặt trời', 'Chu kỳ'], 0, 'IPCC: 95% chắc chắn biến đổi khí hậu hiện tại do con người (đốt nhiên liệu hoá thạch, phá rừng).'),
    Q('Hậu quả biến đổi khí hậu?', ['Nóng lên, nước biển dâng, thời tiết cực đoan, mất đa dạng sinh học', 'Mát đi', 'Không có hậu quả', 'Có lợi'], 0, 'BĐKH: nóng lên, băng tan, biển dâng, bão tăng, hạn-lũ-cháy rừng cực đoan, tuyệt chủng.'),
    Q('VN bị ảnh hưởng BĐKH?', ['Nặng — đặc biệt ĐB Sông Cửu Long bị xâm nhập mặn, nước biển dâng', 'Không bị', 'Có lợi', 'Ít'], 0, 'VN trong top 5 quốc gia bị ảnh hưởng BĐKH nặng nhất (đặc biệt Mekong, Hải Phòng).'),
    Q('Hành động cá nhân giảm BĐKH?', ['Tiết kiệm năng lượng, ít thịt đỏ, đi xe đạp/công cộng, trồng cây', 'Tiêu thụ nhiều', 'Đi máy bay nhiều', 'Phá rừng'], 0, 'Cá nhân: tiết kiệm điện, ăn ít thịt đỏ, đi xe công cộng, trồng cây, tái chế.'),
    Q('Thoả thuận khí hậu Paris (2015)?', ['Mục tiêu giữ nóng lên dưới 2°C (lý tưởng 1.5°C)', 'Bỏ giảm phát thải', 'Tăng phát thải', 'Không có thoả thuận'], 0, 'Paris Agreement: 196 nước cam kết giữ nhiệt độ tăng <2°C, mục tiêu 1.5°C so với tiền công nghiệp.'),
  ]),

  M(13, 'Tiêu dùng có trách nhiệm', [
    Q('Tiêu dùng có trách nhiệm là?', ['Mua sắm có ý thức về tác động môi trường-xã hội', 'Mua mọi thứ', 'Không mua gì', 'Mua hàng rẻ'], 0, 'Responsible consumption: mua có suy nghĩ về tác động đến môi trường và xã hội.'),
    Q('3R trong môi trường?', ['Reduce, Reuse, Recycle (giảm, tái sử dụng, tái chế)', 'Read, Write, Repeat', 'Run, Rest, Relax', 'Right, Real, Recent'], 0, '3R nổi tiếng: Reduce (giảm) > Reuse (tái sử dụng) > Recycle (tái chế) — thứ tự ưu tiên.'),
    Q('Ưu tiên nhất trong 3R?', ['Reduce (giảm tiêu thụ ngay từ đầu)', 'Recycle', 'Reuse', 'Tuỳ ý'], 0, 'Reduce hiệu quả nhất: không tạo rác/tiêu thụ ngay từ đầu.'),
    Q('Sản phẩm thân thiện môi trường?', ['Túi vải thay nilon, sản phẩm tái chế, hữu cơ', 'Đồ nhựa dùng 1 lần', 'Đồ độc hại', 'Đồ không phân huỷ'], 0, 'Sản phẩm xanh: túi vải, đồ tái chế, hữu cơ, ít bao bì, sản xuất bền vững.'),
    Q('Thực phẩm bền vững?', ['Mua đủ ăn, ít đồ chế biến, địa phương, mùa vụ', 'Mua thừa', 'Đồ chế biến nhiều', 'Nhập khẩu xa'], 0, 'Bền vững: mua đủ (giảm lãng phí), thực phẩm tươi, địa phương, theo mùa.'),
  ]),

  M(14, 'Tham gia hoạt động cộng đồng — Tình nguyện', [
    Q('Tình nguyện là?', ['Tự nguyện đóng góp thời gian, công sức cho cộng đồng', 'Bị ép buộc', 'Trả lương', 'Hoạt động kinh doanh'], 0, 'Tình nguyện: hoạt động tự nguyện, không vì lợi ích vật chất, vì cộng đồng.'),
    Q('HS có thể tham gia hoạt động gì?', ['Dọn rác công viên, dạy kèm em nhỏ, thăm trại trẻ mồ côi', 'Chỉ học bài', 'Chỉ chơi', 'Không tham gia'], 0, 'HS có thể: bảo vệ MT (dọn rác, trồng cây), dạy em nhỏ, thăm trại trẻ mồ côi/người già…'),
    Q('Lợi ích tình nguyện cho HS?', ['Rèn kỹ năng, lòng nhân ái, hiểu xã hội, networking', 'Mất thời gian', 'Tốn tiền', 'Không có lợi'], 0, 'Tình nguyện: rèn kỹ năng mềm + đồng cảm + mở rộng quan hệ + đẹp hồ sơ cá nhân.'),
    Q('Tổ chức tình nguyện uy tín ở VN?', ['Mùa hè xanh, Tiếp sức mùa thi, Hội Chữ thập đỏ, UNICEF', 'Bất kỳ', 'Tự lập', 'Không cần tổ chức'], 0, 'Tổ chức uy tín: Đoàn TNCS HCM, Hội CTĐ, UNICEF, Save the Children, các CLB sinh viên uy tín.'),
    Q('Khi tham gia tình nguyện, cần?', ['Cam kết đến cùng, tôn trọng người được giúp', 'Bỏ giữa chừng', 'Khoe trên MXH', 'Coi thường người được giúp'], 0, 'Tinh thần tình nguyện: cam kết đến cùng, tôn trọng phẩm giá người được giúp.'),
  ]),

  M(15, 'Phòng chống xâm hại — Quyền cơ thể', [
    Q('Quyền cơ thể của trẻ em?', ['Cơ thể là của mình, không ai được động chạm khi không cho phép', 'Người lớn được động chạm', 'Tuỳ ý người khác', 'Không có quyền'], 0, 'Trẻ em có quyền bất khả xâm phạm về cơ thể. KHÔNG ai được chạm vào khi không cho phép.'),
    Q('Vùng riêng tư của cơ thể?', ['Vùng được che bởi đồ tắm', 'Không có vùng riêng tư', 'Cả cơ thể', 'Chỉ mặt'], 0, 'Vùng riêng tư = vùng được che bởi đồ tắm + miệng — không cho ai chạm vào.'),
    Q('Quy tắc 5 ngón tay?', ['Mức độ tiếp xúc theo độ thân thiết', 'Đếm tiền', 'Đếm bạn', 'Không có'], 0, 'Quy tắc 5 ngón: ôm hôn (ngón cái-bố mẹ), khoác tay (trỏ-anh em), nắm tay (giữa-bạn), bắt tay (nhẫn-quen), vẫy (út-người lạ).'),
    Q('Khi ai đó chạm vào em bất thường?', ['Hét to "Không!", chạy đi, kể người tin cậy', 'Im lặng', 'Sợ hãi', 'Nghĩ là lỗi của mình'], 0, '3 bước: NÓI KHÔNG (hét to), CHẠY ĐI (rời khỏi), KỂ LẠI (cho người tin cậy).'),
    Q('Tổng đài bảo vệ trẻ em?', ['111 (miễn phí, 24/7)', '113', '114', '115'], 0, 'Tổng đài 111 — Tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  M(16, 'Kỹ năng sống — Đối phó stress', [
    Q('Stress (căng thẳng) là?', ['Phản ứng tự nhiên với áp lực', 'Bệnh', 'Yếu đuối', 'Không có thật'], 0, 'Stress là phản ứng tự nhiên — vừa phải có lợi, quá nhiều có hại.'),
    Q('Nguyên nhân stress ở HS?', ['Học hành, kỳ thi, gia đình, bạn bè, ngoại hình', 'Chỉ học', 'Chỉ gia đình', 'Không có'], 0, 'HS THCS stress chủ yếu: học+thi, kỳ vọng gia đình, quan hệ bạn bè, hình ảnh bản thân.'),
    Q('Triệu chứng stress nặng?', ['Mất ngủ, lo âu kéo dài, mất tập trung, đau dạ dày', 'Vui vẻ', 'Khoẻ mạnh', 'Tự tin'], 0, 'Stress nặng: mất ngủ, lo âu, kém tập trung, đau dạ dày, đau đầu, ăn không ngon.'),
    Q('Cách giảm stress?', ['Vận động, ngủ đủ, thư giãn, chia sẻ, viết nhật ký', 'Im lặng chịu đựng', 'Ăn nhiều', 'Tự cô lập'], 0, 'Giải toả stress: thể thao, ngủ 8h, thư giãn (thiền, nghe nhạc), chia sẻ với người tin cậy.'),
    Q('Khi stress quá mức?', ['Tìm hỗ trợ chuyên gia (bác sĩ, tư vấn tâm lý)', 'Tự chữa', 'Bỏ qua', 'Trách bản thân'], 0, 'Stress kéo dài cần chuyên gia (bác sĩ, nhà tâm lý). Trường học có tư vấn học đường.'),
  ]),

  M(17, 'Định hướng học tập THPT', [
    Q('Sau THCS, HS có lựa chọn?', ['THPT công lập, THPT tư thục, GDTX, trường nghề', 'Chỉ THPT công', 'Chỉ tư thục', 'Không có lựa chọn'], 0, 'Sau THCS: THPT (công/tư), Giáo dục thường xuyên, Trường nghề (TC nghề + văn hoá).'),
    Q('Thi vào THPT công lập ở Hà Nội?', ['3 môn: Toán, Văn, Tiếng Anh (+ môn 4 tuỳ năm)', 'Chỉ 1 môn', '10 môn', 'Không thi'], 0, 'HN: thi 3 môn Toán, Văn, Anh (đôi khi thêm môn 4 đột xuất). Một số tỉnh khác có quy định riêng.'),
    Q('Trường chuyên dành cho?', ['HS xuất sắc, đam mê 1 môn', 'Tất cả HS', 'HS yếu', 'Không tồn tại'], 0, 'Trường chuyên (HN-Amsterdam, KHTN, NTH…) cho HS xuất sắc, đam mê 1 môn cụ thể.'),
    Q('Trường nghề có lợi thế?', ['Học nghề thực tế, có việc làm sớm', 'Không có lợi', 'Bằng cấp thấp hơn', 'Tốn kém'], 0, 'Trường nghề: học nghề thực tế (kỹ thuật, công nghệ…), có việc làm sớm, đáp ứng nhu cầu thị trường.'),
    Q('Chọn THPT cần?', ['Năng lực bản thân + định hướng nghề + điều kiện gia đình', 'Theo bạn', 'Ngẫu nhiên', 'Cha mẹ quyết tuyệt đối'], 0, 'Chọn THPT: cân nhắc năng lực + định hướng tương lai + điều kiện gia đình.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Phong cách học VARK gồm mấy loại?', ['4', '3', '5', '6'], 0, 'V-A-R-K.'),
    Q('Pomodoro chia thời gian?', ['25p tập trung + 5p nghỉ', '60p + 15p', '10p + 1p', 'Tuỳ ý'], 0, 'Pomodoro.'),
    Q('Holland Code có mấy nhóm?', ['6', '4', '8', '10'], 0, 'RIASEC.'),
    Q('Quyền riêng tư trẻ em: không đăng?', ['CMND, địa chỉ', 'Sở thích', 'Ảnh lớp', 'Tên'], 0, 'Thông tin nhạy cảm.'),
    Q('Tổng đài bảo vệ trẻ em?', ['111', '113', '114', '115'], 0, '24/7 miễn phí.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Khám phá nghề — 10 nhóm ngành lớn (1)', [
    Q('Nhóm ngành CNTT gồm?', ['Lập trình, AI, an ninh mạng, dữ liệu, web/mobile', 'Sản xuất phần cứng', 'Chỉ game', 'Chỉ web'], 0, 'CNTT đa dạng: software dev, AI/ML, cybersecurity, data, web/mobile, devops, sysadmin.'),
    Q('Triển vọng nghề CNTT?', ['Rất cao, nhu cầu lớn, lương tốt', 'Bão hoà', 'Sắp lỗi thời', 'Khó tìm việc'], 0, 'CNTT là 1 trong những ngành phát triển mạnh nhất, lương cao, có thể làm remote.'),
    Q('Nhóm ngành Kỹ thuật gồm?', ['Cơ khí, điện-điện tử, xây dựng, hoá học, vật liệu, ô tô', 'Chỉ cơ khí', 'Chỉ xây dựng', 'Chỉ điện'], 0, 'Engineering: cơ khí, điện-điện tử, xây dựng, hoá, vật liệu, ô tô, môi trường…'),
    Q('Yêu cầu chung ngành kỹ thuật?', ['Giỏi Toán-Lý, tư duy logic, kiên trì', 'Vẽ đẹp', 'Hát hay', 'Nói nhiều'], 0, 'Kỹ thuật cần Toán-Lý tốt + tư duy logic + kiên trì giải vấn đề.'),
    Q('Ngành Y tế gồm?', ['Bác sĩ, dược sĩ, điều dưỡng, y tế công cộng, nha sĩ', 'Chỉ bác sĩ', 'Chỉ điều dưỡng', 'Chỉ dược'], 0, 'Y tế đa dạng: bác sĩ (đa khoa, chuyên khoa), dược sĩ, điều dưỡng, y tế cộng đồng, nha…'),
  ]),

  M(20, 'Khám phá nghề — 10 nhóm ngành lớn (2)', [
    Q('Ngành Giáo dục gồm?', ['Giáo viên các cấp, GD đặc biệt, đào tạo trực tuyến, EdTech', 'Chỉ tiểu học', 'Chỉ THPT', 'Chỉ đại học'], 0, 'Giáo dục: GV mầm non → tiểu học → THCS → THPT → ĐH; GD đặc biệt; EdTech mới phát triển.'),
    Q('Ngành Kinh tế-Tài chính?', ['Ngân hàng, kế toán, kiểm toán, đầu tư, marketing', 'Chỉ ngân hàng', 'Chỉ kế toán', 'Chỉ marketing'], 0, 'Kinh tế-Tài chính: ngân hàng, kế toán-kiểm toán, đầu tư-chứng khoán, marketing, sales…'),
    Q('Ngành Nghệ thuật-Truyền thông?', ['Báo chí, PR, thiết kế, phim ảnh, âm nhạc, viết lách', 'Chỉ báo chí', 'Chỉ phim', 'Chỉ ca hát'], 0, 'Nghệ thuật-Truyền thông: báo chí, PR-quảng cáo, thiết kế đồ hoạ-UI/UX, phim ảnh, âm nhạc…'),
    Q('Ngành Luật?', ['Luật sư, công tố, thẩm phán, tư vấn pháp lý', 'Chỉ luật sư', 'Không có chức danh khác', 'Tự do'], 0, 'Luật: luật sư (tư vấn, tranh tụng), kiểm sát viên, thẩm phán, công chứng, pháp chế doanh nghiệp…'),
    Q('Ngành Du lịch-Khách sạn?', ['HDV, quản lý KS-resort, ẩm thực, sự kiện', 'Chỉ HDV', 'Chỉ khách sạn', 'Tự do'], 0, 'Du lịch-Khách sạn: HDV, quản lý KS-resort, bếp-ẩm thực, MICE (sự kiện hội thảo).'),
  ]),

  M(21, 'Khám phá nghề — 10 nhóm ngành lớn (3)', [
    Q('Ngành Nông-Lâm-Thuỷ sản hiện đại?', ['Nông nghiệp công nghệ cao, thuỷ sản, lâm nghiệp bền vững', 'Lạc hậu', 'Chỉ trồng lúa', 'Không có tương lai'], 0, 'Nông-Lâm-Thuỷ hiện đại: ứng dụng công nghệ cao, nông nghiệp hữu cơ, thuỷ sản bền vững.'),
    Q('Ngành Quân đội-Công an?', ['Sĩ quan QĐ, công an, biên phòng, cảnh sát biển', 'Chỉ lính', 'Chỉ cảnh sát', 'Tự do'], 0, 'Lực lượng vũ trang: QĐ (sĩ quan, kỹ thuật quân sự), CAND (an ninh, cảnh sát, điều tra)…'),
    Q('Ngành Khoa học cơ bản?', ['Toán, Lý, Hoá, Sinh, KHMT — nghiên cứu khoa học', 'Không có việc làm', 'Lạc hậu', 'Chỉ giảng dạy'], 0, 'KH cơ bản đào tạo nhà nghiên cứu, giảng viên ĐH; cũng làm phân tích dữ liệu, AI, R&D…'),
    Q('Ngành Logistics-Vận tải?', ['Quản lý chuỗi cung ứng, vận tải, kho bãi, xuất nhập khẩu', 'Chỉ lái xe', 'Chỉ kho', 'Không có ngành'], 0, 'Logistics phát triển mạnh: quản lý chuỗi cung ứng, vận tải đa phương thức, XNK…'),
    Q('Ngành mới nổi?', ['AI/Data, Green Energy, Esports, Influencer, Web3/Crypto', 'Không có', 'Lạc hậu', 'Chỉ truyền thống'], 0, 'Nghề mới: AI, năng lượng xanh, esports, content creator, blockchain… đang bùng nổ.'),
  ]),

  M(22, 'Lập mục tiêu cá nhân — SMART goal', [
    Q('SMART goal là?', ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Speed, Mass…', 'Simple', 'Không có'], 0, 'SMART: cụ thể, đo được, khả thi, liên quan, có thời hạn.'),
    Q('Mục tiêu không SMART?', ['"Học giỏi hơn"', '"Đạt điểm TB Toán ≥8.0 cuối HK2"', '"Đọc 12 cuốn sách trong 6 tháng"', '"Chạy 5km trong 30 phút trong 3 tháng"'], 0, '"Học giỏi hơn" không cụ thể/đo được/thời hạn → không SMART.'),
    Q('Mục tiêu cần?', ['Viết ra, theo dõi, đánh giá định kỳ', 'Giữ trong đầu', 'Nói cho vui', 'Tuỳ ý'], 0, 'Mục tiêu viết ra + theo dõi tăng xác suất đạt được lên 42% (nghiên cứu Dr. Matthews).'),
    Q('Khi không đạt mục tiêu?', ['Phân tích lý do, điều chỉnh, tiếp tục', 'Bỏ cuộc', 'Trách bản thân', 'Đổ lỗi'], 0, 'Không đạt = học từ thất bại, điều chỉnh, tiếp tục — đó là tinh thần Growth Mindset.'),
    Q('Chia mục tiêu lớn?', ['Thành các mục tiêu nhỏ, có thể hành động ngay', 'Giữ nguyên', 'Bỏ luôn', 'Đợi'], 0, 'Mục tiêu lớn → chia nhỏ (quý, tháng, tuần, ngày) → dễ thực hiện và theo dõi.'),
  ]),

  M(23, 'Mindset cố định vs Mindset phát triển', [
    Q('Growth Mindset (tư duy phát triển) là?', ['Tin rằng năng lực có thể phát triển qua nỗ lực', 'Năng lực cố định', 'Không thể thay đổi', 'Phụ thuộc trời'], 0, 'Carol Dweck: tin rằng năng lực phát triển được qua nỗ lực, học hỏi, kiên trì.'),
    Q('Fixed Mindset là?', ['Tin năng lực cố định, không thay đổi được', 'Năng lực phát triển', 'Học hỏi', 'Cố gắng'], 0, 'Fixed Mindset: tin rằng "thông minh là bẩm sinh", "không phải tuýp người đó" → giới hạn bản thân.'),
    Q('Người có Growth Mindset?', ['Đón nhận thử thách, học từ thất bại, kiên trì', 'Tránh thử thách', 'Bỏ cuộc khi khó', 'Sợ sai'], 0, 'Growth Mindset: đón nhận thử thách + xem nỗ lực là con đường + học từ thất bại.'),
    Q('Câu nói thể hiện Growth Mindset?', ['"Tôi chưa giỏi VIỆC NÀY"', '"Tôi không có tài"', '"Khó quá tôi bỏ"', '"Mình kém Toán"'], 0, 'Thêm chữ "CHƯA" (yet): "Chưa giỏi" thay vì "không giỏi" — thể hiện khả năng phát triển.'),
    Q('Rèn Growth Mindset bằng?', ['Khen nỗ lực thay vì kết quả, đón nhận thử thách', 'Khen tài năng', 'Tránh thử thách', 'Sợ sai'], 0, 'Khen nỗ lực-quá trình (không phải tài năng) giúp rèn Growth Mindset.'),
  ]),

  M(24, 'Quản lý tài chính cá nhân cơ bản', [
    Q('Tiền tiêu vặt nên?', ['Lập kế hoạch chi tiêu, có quỹ tiết kiệm', 'Tiêu hết', 'Giấu', 'Đưa người khác'], 0, 'Kỹ năng tài chính: lập kế hoạch chi tiêu + tiết kiệm + đầu tư (sau này).'),
    Q('Quy tắc 50/30/20?', ['50% nhu cầu, 30% mong muốn, 20% tiết kiệm', 'Tuỳ ý', '100% tiêu', '100% tiết kiệm'], 0, 'Quy tắc 50/30/20: 50% nhu cầu thiết yếu, 30% mong muốn, 20% tiết kiệm/đầu tư.'),
    Q('Phân biệt "nhu cầu" và "mong muốn"?', ['Nhu cầu: thiết yếu (ăn, học); mong muốn: thêm vào (game, đồ chơi)', 'Giống nhau', 'Không có gì khác', 'Tuỳ ý'], 0, 'Nhu cầu (needs): thiết yếu sống/học. Mong muốn (wants): thêm vào, không cần thiết.'),
    Q('Tiết kiệm bằng cách?', ['Có quỹ heo đất/tài khoản, đặt mục tiêu rõ', 'Không tiết kiệm', 'Khoe khoang', 'Tuỳ ý'], 0, 'Tiết kiệm: có nơi cụ thể (heo đất, tài khoản), đặt mục tiêu cụ thể (sách, học bổng…).'),
    Q('Tránh bẫy tiêu xài?', ['Quảng cáo, FOMO mua hàng theo trend, ăn vặt quá đà', 'Sống tằn tiện', 'Không tiêu gì', 'Đầu tư'], 0, 'Bẫy tiêu xài: quảng cáo, FOMO, ăn vặt — tổng lại số tiền không nhỏ.'),
  ]),

  M(25, 'Sức khoẻ tinh thần — Tự chăm sóc bản thân', [
    Q('Self-care (tự chăm sóc) gồm?', ['Thể chất, tinh thần, cảm xúc, xã hội', 'Chỉ thể chất', 'Chỉ tinh thần', 'Chỉ giải trí'], 0, 'Self-care toàn diện: ăn uống-ngủ-tập (thể chất), thiền-đọc (tinh thần), cảm xúc, kết nối XH.'),
    Q('Ngủ đủ cho HS THCS?', ['8–10 giờ/đêm', '4–5 giờ', '12 giờ', 'Tuỳ ý'], 0, 'WHO khuyến cáo HS THCS: 8–10 giờ/đêm để não phát triển và phục hồi.'),
    Q('Ăn uống lành mạnh?', ['Đa dạng nhóm thực phẩm, ít đồ chế biến', 'Chỉ thịt', 'Đồ ngọt nhiều', 'Bỏ bữa'], 0, 'Tháp dinh dưỡng: rau-quả nhiều, đạm vừa, ít đồ ngọt-chiên-mặn-bột tinh chế.'),
    Q('Vận động thể chất?', ['≥60 phút/ngày (WHO khuyến cáo)', '5 phút', '10 phút', '5 giờ'], 0, 'WHO: trẻ 5–17 tuổi cần ≥60 phút hoạt động thể chất trung bình-mạnh/ngày.'),
    Q('Thời gian màn hình (screen time)?', ['Giới hạn ≤2h giải trí/ngày', 'Tuỳ ý', '10 giờ', 'Không cần học'], 0, 'WHO khuyến cáo: HS hạn chế ≤2h giải trí/ngày (chưa kể học).'),
  ]),

  M(26, 'Phòng chống nghiện game và mạng xã hội', [
    Q('Nghiện game là?', ['Mất kiểm soát thời gian chơi, ảnh hưởng học tập, sức khoẻ, quan hệ', 'Chơi giải trí', 'Chơi cuối tuần', '1 giờ/ngày'], 0, 'WHO 2018: gaming disorder = rối loạn — mất kiểm soát, ưu tiên game hơn mọi việc, ảnh hưởng đời sống.'),
    Q('Dấu hiệu nghiện game?', ['Bỏ học, mất ngủ, cáu khi không chơi, dối trá', 'Chơi vui', 'Vừa phải', 'Không có dấu hiệu'], 0, 'Dấu hiệu: chơi mất kiểm soát, bỏ học, mất ngủ, cáu gắt khi không chơi, dối trá thời gian chơi.'),
    Q('Tác hại nghiện game?', ['Học sa sút, mất bạn thật, sức khoẻ giảm, nợ nần', 'Có lợi', 'Không hại', 'Khoẻ thêm'], 0, 'Nghiện game: học sa sút, mất quan hệ thực, mắt-cột sống, có thể nợ nần (mua đồ trong game).'),
    Q('Quản lý thời gian chơi game?', ['Đặt giới hạn (≤1–2h/ngày), không chơi trước ngủ', 'Chơi không giới hạn', 'Chơi đêm', 'Bỏ học để chơi'], 0, 'Quản lý: đặt giới hạn rõ, không chơi trước ngủ (ảnh hưởng giấc ngủ), ưu tiên việc khác.'),
    Q('Nếu đã nghiện?', ['Tìm hỗ trợ từ gia đình, chuyên gia tâm lý', 'Tự cai', 'Im lặng', 'Tiếp tục'], 0, 'Nghiện nặng cần hỗ trợ chuyên môn — tâm lý học đường, gia đình, các trung tâm cai nghiện.'),
  ]),

  M(27, 'Trở thành công dân số có trách nhiệm', [
    Q('Công dân số (digital citizen) là?', ['Người sử dụng công nghệ có trách nhiệm, đạo đức, an toàn', 'Người dùng nhiều', 'Người không dùng', 'Người chuyên gia'], 0, 'Digital citizen = công dân thời số: sử dụng công nghệ có trách nhiệm, đạo đức, an toàn.'),
    Q('Quyền số gồm?', ['Riêng tư, tự do biểu đạt, tiếp cận internet, an toàn', 'Không có quyền', 'Chỉ kinh tế', 'Chỉ giải trí'], 0, 'Quyền số: riêng tư, tự do biểu đạt (trong khuôn khổ), tiếp cận internet, an toàn online.'),
    Q('Trách nhiệm số?', ['Tôn trọng người khác, không vi phạm bản quyền, chống tin giả', 'Không có trách nhiệm', 'Chỉ quyền', 'Tự do tuyệt đối'], 0, 'Trách nhiệm: tôn trọng người khác (không bắt nạt), tôn trọng bản quyền, không lan truyền tin giả.'),
    Q('Dấu chân số (digital footprint) là?', ['Dữ liệu cá nhân để lại trên internet', 'Vết chân thật', 'Không tồn tại', 'Vô hại'], 0, 'Digital footprint = mọi thứ ta đăng/click/để lại online — gần như không xoá được hoàn toàn.'),
    Q('Bảo vệ dấu chân số bằng?', ['Đăng có ý thức, kiểm tra cài đặt riêng tư', 'Đăng mọi thứ', 'Không quan tâm', 'Để mặc'], 0, 'Trước khi đăng: "Mình có muốn nhà tuyển dụng/gia đình thấy 10 năm sau không?".'),
  ]),

  M(28, 'Hợp tác và làm việc nhóm', [
    Q('Làm việc nhóm hiệu quả cần?', ['Mục tiêu chung, phân vai, giao tiếp, tôn trọng', 'Cá nhân', 'Im lặng', 'Cạnh tranh'], 0, 'Teamwork tốt: mục tiêu chung + phân công + giao tiếp + tôn trọng đa dạng.'),
    Q('Vai trò trong nhóm?', ['Trưởng nhóm, thư ký, kỹ thuật, thiết kế, kiểm tra…', 'Tất cả như nhau', '1 người làm hết', 'Tuỳ ý'], 0, 'Phân vai theo điểm mạnh: leader, thư ký, kỹ thuật/nội dung, thiết kế, kiểm tra chất lượng…'),
    Q('Xung đột nhóm xử lý?', ['Đối thoại, lắng nghe, tìm giải pháp đôi bên cùng có lợi', 'Bỏ qua', 'Cãi nhau', 'Tách nhóm'], 0, 'Conflict resolution: đối thoại + lắng nghe + tìm win-win.'),
    Q('Khi đồng đội yếu kém?', ['Giúp đỡ, hướng dẫn, không chê bai', 'Loại bỏ', 'Chế giễu', 'Mặc kệ'], 0, 'Teamwork là cùng nhau tiến bộ — giúp đỡ đồng đội yếu là kỹ năng lãnh đạo.'),
    Q('Đánh giá làm việc nhóm?', ['Cả quá trình + kết quả, đóng góp từng người', 'Chỉ kết quả', 'Tuỳ ý', 'Bỏ qua'], 0, 'Đánh giá fair: quá trình + kết quả + đóng góp cụ thể của từng thành viên.'),
  ]),

  M(29, 'Sáng tạo và đổi mới (creativity & innovation)', [
    Q('Sáng tạo (creativity) là?', ['Tạo ra ý tưởng mới hữu ích', 'Sao chép', 'Bắt chước', 'Học thuộc'], 0, 'Sáng tạo = tạo ý tưởng mới có giá trị/hữu ích.'),
    Q('Đổi mới (innovation)?', ['Biến ý tưởng sáng tạo thành sản phẩm/giải pháp thực tế', 'Chỉ nghĩ', 'Không liên quan', 'Bắt chước'], 0, 'Innovation = thực hiện sáng tạo thành sản phẩm/dịch vụ thực tế có giá trị.'),
    Q('Rèn sáng tạo bằng?', ['Brainstorming, đặt câu hỏi "Tại sao? Có cách khác?"', 'Học thuộc', 'Sao chép', 'Tránh suy nghĩ'], 0, 'Kỹ thuật: brainstorming, mind map, 5W1H, đặt câu hỏi mở…'),
    Q('Tinh thần "Think outside the box"?', ['Suy nghĩ vượt khuôn mẫu', 'Theo lối mòn', 'Sợ sai', 'Bắt chước'], 0, 'Sáng tạo cần suy nghĩ vượt khuôn mẫu, dám thử cái mới.'),
    Q('Sai lầm khi sáng tạo?', ['Là bước học hỏi, không phải thất bại', 'Đáng xấu hổ', 'Phải tránh tuyệt đối', 'Là yếu kém'], 0, 'Sáng tạo cần dám sai — mỗi sai lầm là 1 bài học để cải thiện.'),
  ]),

  M(30, 'Kỹ năng thuyết trình', [
    Q('Thuyết trình tốt cần?', ['Nội dung rõ + cấu trúc + ngôn ngữ cơ thể + slide hỗ trợ', 'Đọc văn bản', 'Nói nhanh', 'Slide đầy chữ'], 0, '4 yếu tố: nội dung tốt + cấu trúc rõ + giao tiếp tự tin + slide hỗ trợ chứ không thay người nói.'),
    Q('Cấu trúc thuyết trình cổ điển?', ['Mở đầu + Thân + Kết', 'Tuỳ ý', 'Chỉ thân', 'Chỉ kết'], 0, '3 phần kinh điển: mở (giới thiệu, hook), thân (nội dung), kết (tóm tắt, kêu gọi).'),
    Q('Slide tốt?', ['1 ý chính/slide, ít chữ, nhiều hình ảnh', 'Nhiều chữ', 'Đọc nguyên slide', 'Không cần slide'], 0, 'Quy tắc 6x6 hoặc 1 ý/slide: ít chữ, nhiều hình ảnh trực quan; slide là gợi nhớ, không phải kịch bản.'),
    Q('Khi run lúc thuyết trình?', ['Hít thở sâu, tập trung vào nội dung, tập trước nhiều lần', 'Bỏ chạy', 'Đọc văn bản', 'Nói nhỏ'], 0, 'Quản lý run: hít thở sâu + tập nhiều lần + tập trung vào việc truyền đạt, không phải bản thân.'),
    Q('Tương tác khán giả?', ['Đặt câu hỏi, eye contact, ví dụ liên quan', 'Đứng im đọc', 'Nói nhanh cho xong', 'Tránh ánh mắt'], 0, 'Tương tác: nhìn vào khán giả, đặt câu hỏi, ví dụ gần gũi → giữ chú ý.'),
  ]),

  M(31, 'Hoạt động cộng đồng — Bảo vệ môi trường địa phương', [
    Q('Hoạt động bảo vệ MT HS có thể làm?', ['Dọn rác công viên, hồ; trồng cây; tuyên truyền tiết kiệm điện', 'Phá rừng', 'Xả rác', 'Bỏ mặc'], 0, 'HS có thể tổ chức: dọn rác công viên/hồ, trồng cây, tuyên truyền tiết kiệm điện-nước-rác.'),
    Q('Phân loại rác tại nguồn?', ['Hữu cơ, vô cơ tái chế, nguy hại — 3 loại chính', 'Vứt chung', '10 loại', 'Không phân loại'], 0, 'Phân loại: hữu cơ (rau, thức ăn) + tái chế (giấy, nhựa, kim loại) + nguy hại (pin, hoá chất).'),
    Q('Tham gia ngày Trái Đất (Earth Day)?', ['22/4 hằng năm', '5/6', '10/12', '1/1'], 0, '22/4 là Ngày Trái Đất; 5/6 là Ngày MT thế giới.'),
    Q('Tổ chức 1 hoạt động cần?', ['Kế hoạch, phân công, vật tư, đo lường kết quả', 'Tự phát', 'Không chuẩn bị', 'Tuỳ ý'], 0, 'Tổ chức hoạt động: kế hoạch SMART + phân công + vật tư + đo lường tác động.'),
    Q('Sau hoạt động?', ['Đánh giá, chia sẻ kết quả, lên kế hoạch tiếp', 'Bỏ qua', 'Khoe khoang đơn thuần', 'Không làm gì tiếp'], 0, 'Sau hoạt động: đánh giá, chia sẻ để truyền cảm hứng + lên kế hoạch tiếp theo.'),
  ]),

  M(32, 'Kỹ năng giải quyết vấn đề', [
    Q('Quy trình giải quyết vấn đề?', ['Xác định → phân tích → đề xuất giải pháp → chọn → thực hiện → đánh giá', 'Hành động ngay', 'Bỏ qua', 'Tuỳ ý'], 0, 'Problem solving 6 bước: identify → analyze → brainstorm → choose → execute → evaluate.'),
    Q('Khi gặp vấn đề khó?', ['Chia nhỏ thành các vấn đề nhỏ hơn', 'Bỏ cuộc', 'Né tránh', 'Đổ lỗi'], 0, 'Vấn đề lớn = nhiều vấn đề nhỏ. Chia nhỏ để giải quyết từng phần.'),
    Q('Phương pháp 5 Whys?', ['Hỏi "Tại sao?" 5 lần để tìm gốc rễ', 'Tìm giải pháp', 'Đếm', 'Không liên quan'], 0, '5 Whys (Toyota): hỏi "Tại sao?" liên tiếp 5 lần để tìm nguyên nhân gốc rễ vấn đề.'),
    Q('Brainstorming là?', ['Đề xuất nhiều ý tưởng, không phê phán giai đoạn đầu', 'Tự ý', 'Phê bình ngay', 'Đợi'], 0, 'Brainstorming: quy tắc 1 là KHÔNG phê phán giai đoạn đề xuất — ý nào cũng ghi.'),
    Q('Sau khi giải quyết, cần?', ['Đánh giá hiệu quả, học bài học', 'Bỏ qua', 'Tự khen', 'Tự chê'], 0, 'Reflect/review: đánh giá hiệu quả + ghi nhận bài học cho lần sau.'),
  ]),

  M(33, 'Định hướng tương lai — Tầm nhìn 5-10 năm', [
    Q('Tầm nhìn cá nhân (personal vision)?', ['Hình dung mình muốn trở thành ai trong 5-10 năm', 'Lo nghĩ', 'Vô vọng', 'Không có ý nghĩa'], 0, 'Vision: hình dung rõ về tương lai 5-10 năm → định hướng hành động hôm nay.'),
    Q('Tầm nhìn cần?', ['Cụ thể, truyền cảm hứng, khả thi', 'Mơ mộng viển vông', 'Quá dễ', 'Tuỳ ý'], 0, 'Tầm nhìn tốt: cụ thể (vẽ được trong đầu) + truyền cảm hứng + có thể đạt nếu nỗ lực.'),
    Q('Từ tầm nhìn → mục tiêu?', ['Chia tầm nhìn 10 năm → mục tiêu 5 năm → 1 năm → tháng → tuần', 'Không cần', 'Chỉ tầm nhìn', 'Chỉ mục tiêu ngắn'], 0, 'Chia tầm nhìn dài hạn → mục tiêu trung-ngắn hạn → kế hoạch hành động hằng ngày.'),
    Q('Khi tầm nhìn thay đổi?', ['Bình thường — điều chỉnh khi hiểu mình hơn', 'Thất bại', 'Phải giữ cố định', 'Không thể thay'], 0, 'Tầm nhìn không phải lời thề bất biến — điều chỉnh khi hiểu bản thân và thế giới hơn là bình thường.'),
    Q('Hành động cụ thể từ tầm nhìn?', ['Việc làm hôm nay phải dẫn đến tầm nhìn', 'Không liên quan', 'Tuỳ ý', 'Để sau'], 0, 'Mỗi hành động hằng ngày phải nhất quán với tầm nhìn dài hạn — bridge the gap.'),
  ]),

  M(34, 'Tham gia hoạt động ngoại khoá và CLB', [
    Q('Hoạt động ngoại khoá là?', ['Hoạt động ngoài giờ học chính: CLB, thể thao, văn nghệ, tình nguyện', 'Chỉ học', 'Chỉ giải trí', 'Không quan trọng'], 0, 'Ngoại khoá: CLB, thể thao, văn nghệ, tình nguyện, debate, mô hình LHQ…'),
    Q('Lợi ích hoạt động ngoại khoá?', ['Phát triển kỹ năng mềm, mạng lưới, hồ sơ đẹp', 'Mất thời gian', 'Hao tiền', 'Không có lợi'], 0, 'Ngoại khoá: rèn kỹ năng mềm, mạng lưới bạn bè, hồ sơ ấn tượng (cho xét tuyển sau này).'),
    Q('Chọn CLB nào?', ['Theo đam mê + có thời gian dành cho', 'Theo bạn', 'Càng nhiều càng tốt', 'Tuỳ ý'], 0, 'Chọn CLB: theo đam mê thực sự + đảm bảo có thời gian (chất hơn lượng).'),
    Q('Cân bằng học và ngoại khoá?', ['Ưu tiên học chính, ngoại khoá ~5-10h/tuần', 'Bỏ học', 'Không ngoại khoá', 'Tuỳ ý'], 0, 'Cân bằng: học chính là ưu tiên 1; ngoại khoá ~5-10h/tuần là hợp lý cho HS.'),
    Q('Khi quá tải?', ['Cắt bớt ngoại khoá, ưu tiên học và sức khoẻ', 'Tiếp tục cố', 'Bỏ học', 'Bỏ ngoại khoá tất cả'], 0, 'Quá tải = cắt bớt ngoại khoá ít quan trọng, ưu tiên học chính và sức khoẻ.'),
  ]),

  M(35, 'Tổng kết — Hành trang vào lớp 9', [
    Q('Lớp 9 quan trọng vì?', ['Kì thi vào THPT cuối năm — bước ngoặt định hướng', 'Bình thường', 'Không quan trọng', 'Chỉ chơi'], 0, 'Lớp 9: thi vào THPT — bước ngoặt định hướng giáo dục và nghề nghiệp tương lai.'),
    Q('Chuẩn bị lớp 9?', ['Ôn kỹ kiến thức 6-8, lập kế hoạch học thi, giữ sức khoẻ', 'Chơi nhiều', 'Lơ là', 'Đợi giờ'], 0, 'Chuẩn bị: ôn nền tảng 6-8, lập kế hoạch học thi, giữ sức khoẻ tinh thần.'),
    Q('Tinh thần học lớp 9?', ['Nghiêm túc, kiên trì, tự tin, biết nghỉ ngơi', 'Ép quá sức', 'Lơ là', 'Tuỳ ý'], 0, 'Học lớp 9: nghiêm túc + kiên trì + tự tin + biết nghỉ ngơi để tránh kiệt sức.'),
    Q('Khi thi không như mong đợi?', ['Có nhiều con đường: trường khác, GDTX, trường nghề', 'Bỏ học', 'Kết thúc tương lai', 'Tuyệt vọng'], 0, 'Một kì thi không quyết định cả đời. Có nhiều con đường: trường khác, GDTX, trường nghề.'),
    Q('Tổng kết HĐTN lớp 8 đã giúp em?', ['Hiểu mình, kỹ năng sống, định hướng nghề', 'Không giúp gì', 'Mất thời gian', 'Tuỳ ý'], 0, 'HĐTN lớp 8: hiểu mình + kỹ năng sống + định hướng nghề — nền tảng cho lớp 9 và THPT.'),
  ]),
];

export const S8HDTN_SCENARIOS = indexBy(S8HDTN_WEEKS);
