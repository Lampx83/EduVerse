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
    Q('Tính cách (personality) là?', ['Đặc điểm tâm lý ổn định, phân biệt người này với người khác', 'Ngoại hình', 'Trang phục', 'Trí thông minh'], 0, 'Tính cách là tập hợp đặc điểm tâm lý ổn định của mỗi cá nhân.'),
    Q('Hiểu bản thân giúp?', ['Mất thời gian', 'Tự cao', 'Định hướng học tập, nghề nghiệp, mối quan hệ phù hợp', 'Không có lợi'], 2, 'Hiểu bản thân là nền tảng để chọn con đường phù hợp.'),
    Q('Cách hiểu bản thân?', ['Chỉ dựa người khác', 'Không cần hiểu', 'Tự dối mình', 'Tự suy ngẫm + hỏi người thân + test tâm lý'], 3, 'Kết hợp tự phản tỉnh, lắng nghe người thân và test khoa học (MBTI, DISC…) cho kết quả tốt.'),
    Q('Điểm mạnh của bản thân?', ['Không có ý nghĩa', 'Việc mình làm tốt, giúp ta tự tin và phát triển', 'Tự khoe', 'Không tồn tại'], 1, 'Điểm mạnh = khả năng/đặc điểm tốt → cần phát huy.'),
    Q('Điểm yếu là?', ['Việc cần cải thiện — không phải xấu hổ', 'Khuyết tật vĩnh viễn', 'Đặc điểm bẩm sinh không liên quan đến nỗ lực', 'Không thay đổi được'], 0, 'Điểm yếu = cơ hội cải thiện; biết thì sửa được — không có gì phải xấu hổ.'),
  ]),

  M(2, 'Phong cách học tập — Xác định kiểu học của em', [
    Q('Phong cách học (learning style) gồm?', ['Thị giác, thính giác, vận động, đọc/viết', 'Chỉ thị giác', 'Không có khái niệm', 'Chỉ thính giác'], 0, 'Mô hình VARK: Visual (thị giác), Auditory (thính), Reading/Writing, Kinesthetic (vận động).'),
    Q('Người học thị giác (visual) học tốt nhất khi?', ['Có hình ảnh, sơ đồ, video', 'Đọc văn bản dài', 'Chỉ thực hành', 'Nghe nói'], 0, 'Visual learners ghi nhớ tốt qua hình ảnh, sơ đồ tư duy, infographic.'),
    Q('Người học thính giác (auditory)?', ['Làm thực hành', 'Học bằng cách vẽ sơ đồ và xem hình ảnh', 'Nghe giảng, podcast, thảo luận', 'Đọc thầm'], 2, 'Auditory: học tốt qua nghe — giảng bài, podcast, thảo luận nhóm.'),
    Q('Người học vận động (kinesthetic)?', ['Chỉ nghe', 'Thực hành, thí nghiệm, vận động', 'Chỉ xem', 'Ngồi yên đọc'], 1, 'Kinesthetic: học bằng làm — thí nghiệm, thực hành, vận động.'),
    Q('Phong cách học có cố định?', ['Không — kết hợp nhiều phong cách hiệu quả hơn', 'Có, cố định 1 kiểu', 'Không thể thay đổi', 'Tuỳ vào di truyền'], 0, 'Mỗi người có phong cách trội, nhưng kết hợp đa phương pháp học hiệu quả nhất.'),
  ]),

  M(3, 'Kỹ năng quản lý thời gian', [
    Q('Quản lý thời gian là?', ['Đeo đồng hồ', 'Đếm giờ', 'Lập kế hoạch và sử dụng thời gian hiệu quả', 'Không có ý nghĩa'], 2, 'Quản lý thời gian = lập kế hoạch + ưu tiên + theo dõi để sử dụng thời gian hiệu quả.'),
    Q('Ma trận Eisenhower phân loại?', ['Vui × Buồn', 'Dễ × Khó', 'Việc nhà × việc trường', 'Quan trọng × Khẩn cấp (4 ô)'], 3, 'Ma trận Eisenhower: 4 ô (quan trọng/không, khẩn cấp/không) → ưu tiên.'),
    Q('Việc cần làm trước?', ['Không quan trọng + không khẩn', 'Không quan trọng nhưng khẩn cấp', 'Quan trọng + khẩn cấp', 'Dễ làm'], 2, 'Việc quan trọng + khẩn cấp = ưu tiên cao nhất (ô 1).'),
    Q('Việc nào nên loại bỏ?', ['Khẩn + không quan trọng', 'Quan trọng + không khẩn', 'Quan trọng + khẩn', 'Không quan trọng + không khẩn cấp'], 3, 'Ô 4: không quan trọng + không khẩn → cắt bỏ (lướt mạng, game thủ).'),
    Q('Phương pháp Pomodoro?', ['25 phút tập trung + 5 phút nghỉ, lặp lại', 'Học 5 giờ liên tục', 'Học 10 phút', '50 phút tập trung + 10 phút nghỉ'], 0, 'Pomodoro: 25 phút tập trung + 5 phút nghỉ, sau 4 cycle nghỉ dài 15-30 phút.'),
  ]),

  M(4, 'Kỹ năng phản biện (critical thinking)', [
    Q('Phản biện (critical thinking) là?', ['Im lặng', 'Đánh giá thông tin dựa trên bằng chứng, không tin theo cảm tính', 'Cãi lại', 'Phản đối mọi thứ'], 1, 'Critical thinking = đánh giá có hệ thống dựa trên bằng chứng, logic.'),
    Q('Đặc trưng người phản biện?', ['Đặt câu hỏi, kiểm chứng nguồn, suy nghĩ logic', 'Không suy nghĩ', 'Cãi cãi', 'Tin mọi thứ'], 0, 'Người phản biện: đặt câu hỏi "Có bằng chứng không?", "Nguồn đáng tin?", suy nghĩ logic.'),
    Q('Khi đọc tin tức, cần?', ['Phớt lờ', 'Tin ngay', 'Kiểm chứng nguồn, đối chiếu nhiều nơi', 'Chia sẻ ngay'], 2, 'Tin tức: kiểm chứng nguồn, đối chiếu nhiều nguồn uy tín trước khi tin/chia sẻ.'),
    Q('Logical fallacy phổ biến?', ['Suy luận đúng', 'Khái quát hoá vội vàng, tấn công cá nhân, nguỵ biện đám đông', 'Định nghĩa rõ ràng', 'Bằng chứng cụ thể'], 1, 'Logical fallacy = lỗi nguỵ biện: vội khái quát, ad hominem (tấn công cá nhân), bandwagon (đám đông)…'),
    Q('Phản biện trong học tập?', ['Đặt câu hỏi, không chấp nhận thụ động', 'Học vẹt', 'Chấp nhận hết', 'Sao chép'], 0, 'Học chủ động = đặt câu hỏi, phản biện, hiểu sâu thay vì nhớ bề mặt.'),
  ]),

  M(5, 'Quản lý cảm xúc tuổi dậy thì', [
    Q('Tuổi dậy thì là?', ['Tuổi nhỏ', 'Giai đoạn sau khi đã trưởng thành hoàn toàn', 'Tuổi già', 'Giai đoạn chuyển từ trẻ em sang người lớn, 10–18 tuổi'], 3, 'Dậy thì: 10–18 tuổi (gái sớm hơn trai 1–2 năm), biến đổi mạnh về thể chất và tâm lý.'),
    Q('Cảm xúc tuổi dậy thì thường?', ['Vô cảm', 'Yên tĩnh', 'Bình thường', 'Mãnh liệt, biến động, dễ tự ti hoặc nổi giận'], 3, 'Do hormone biến động, cảm xúc tuổi dậy thì mãnh liệt và thay đổi nhanh.'),
    Q('Cách quản lý cơn giận?', ['Đập đồ', 'Tự đánh mình', 'Quát người khác', 'Hít thở sâu, đếm đến 10, đi ra chỗ khác'], 3, 'Kỹ thuật hạ nhiệt: hít thở sâu, đếm, tách khỏi tình huống.'),
    Q('Khi buồn bã, nên?', ['Chia sẻ với người tin cậy, vận động, làm điều thích', 'Im lặng chịu đựng', 'Ăn nhiều', 'Tự cô lập'], 0, 'Chia sẻ với người tin cậy (bố mẹ, bạn thân, giáo viên), vận động giảm stress.'),
    Q('Khi có suy nghĩ tự hại?', ['Im lặng', 'Tránh xa người', 'Báo người lớn/tổng đài 111/1900599930 ngay', 'Tự xử lý'], 2, 'Suy nghĩ tự hại = báo người lớn NGAY. Tổng đài 111 (trẻ em), 1900599930 (tâm lý khẩn cấp).'),
  ]),

  M(6, 'Kỹ năng giao tiếp hiệu quả', [
    Q('Giao tiếp hiệu quả gồm?', ['Chỉ nói', 'Chỉ nghe', 'Chỉ viết', 'Lắng nghe + nói rõ + ngôn ngữ cơ thể'], 3, 'Giao tiếp tốt: lắng nghe chủ động + nói rõ ràng + ngôn ngữ cơ thể phù hợp.'),
    Q('Lắng nghe chủ động (active listening)?', ['Vâng vâng cho qua', 'Vừa nghe vừa làm việc khác', 'Ngắt lời ngay', 'Tập trung, không ngắt lời, phản hồi xác nhận'], 3, 'Active listening: tập trung, gật đầu, hỏi lại để xác nhận hiểu.'),
    Q('Ngôn ngữ cơ thể quan trọng vì?', ['Chỉ giọng', 'Chiếm ~55% ý nghĩa truyền tải (theo Mehrabian)', 'Chỉ lời nói quan trọng', 'Chỉ ảnh hưởng khi gặp người lạ lần đầu'], 1, 'Nghiên cứu Mehrabian: trong giao tiếp cảm xúc, ngôn ngữ cơ thể 55%, giọng 38%, lời 7%.'),
    Q('Khi không hiểu, nên?', ['Giả vờ hiểu', 'Hỏi lại lịch sự', 'Im lặng', 'Gật đầu cho qua rồi tự tra lại sau'], 1, 'Hỏi lại lịch sự ("Bạn có thể nói rõ hơn không?") tốt hơn giả vờ hiểu.'),
    Q('Giao tiếp với người lớn tuổi cần?', ['Nói át', 'Lễ phép, nhường lời, lắng nghe', 'Nói chuyện thoải mái như với bạn cùng tuổi', 'Tranh luận gay gắt để bảo vệ quan điểm'], 1, 'Văn hoá VN: lễ phép, kính trọng, nhường lời cho người lớn tuổi.'),
  ]),

  M(7, 'Tình bạn — Tình yêu lành mạnh tuổi học trò', [
    Q('Tình bạn lành mạnh dựa trên?', ['Lợi dụng', 'Bao che', 'Ganh đua điểm số để cùng giỏi hơn', 'Tôn trọng, tin cậy, chân thành, cùng tiến bộ'], 3, 'Tình bạn lành mạnh = tôn trọng + tin cậy + chân thành + giúp nhau tiến bộ.'),
    Q('Tình bạn không lành mạnh?', ['Rủ rê làm điều xấu, bắt ép, ích kỷ', 'Chia sẻ', 'Vui chơi lành mạnh', 'Cùng học'], 0, 'Tình bạn xấu: rủ rê làm điều sai (trốn học, hút thuốc, bắt nạt…).'),
    Q('Tình cảm tuổi học trò là?', ['Không tồn tại', 'Sai trái', 'Bình thường, cần điều chỉnh phù hợp', 'Phải cấm tuyệt'], 2, 'Cảm xúc rung động tuổi dậy thì là tự nhiên — cần điều chỉnh phù hợp lứa tuổi.'),
    Q('Khi có cảm tình với bạn khác giới?', ['Yêu đương ồ ạt', 'Giữ tình bạn trong sáng, ưu tiên học tập', 'Bỏ học', 'Theo đuổi mọi giá'], 1, 'Tuổi học trò: giữ tình cảm trong sáng, ưu tiên học tập + phát triển bản thân.'),
    Q('Áp lực bạn bè (peer pressure) là?', ['Học hỏi', 'Bị bạn ép làm điều mình không muốn', 'Lời khuyên tốt', 'Bạn giúp đỡ'], 1, 'Peer pressure tiêu cực: bị bạn ép làm điều xấu (hút thuốc, trốn học…). Cần biết từ chối.'),
  ]),

  M(8, 'Hướng nghiệp — Mô hình Holland (RIASEC)', [
    Q('Holland Code (RIASEC) gồm?', ['6 loại: Realistic, Investigative, Artistic, Social, Enterprising, Conventional', '10 loại', '4 loại', '8 loại'], 0, 'John Holland: 6 nhóm tính cách-nghề nghiệp R-I-A-S-E-C.'),
    Q('Realistic (R) phù hợp nghề?', ['Giáo viên', 'Văn phòng', 'Kỹ thuật, cơ khí, nông nghiệp, xây dựng', 'Nghệ thuật'], 2, 'R = thực tế, thích làm việc tay, máy móc: kỹ sư, thợ, nông dân, lính…'),
    Q('Investigative (I) phù hợp?', ['Hành chính', 'Nghệ thuật', 'Bán hàng', 'Khoa học, nghiên cứu, y tế, lập trình'], 3, 'I = ưa khám phá, nghiên cứu: nhà khoa học, bác sĩ, lập trình viên, nhà phân tích…'),
    Q('Artistic (A) phù hợp?', ['Kế toán', 'Nghệ thuật, thiết kế, văn chương, âm nhạc', 'Điều dưỡng, bác sĩ, dược sĩ', 'Kỹ thuật'], 1, 'A = sáng tạo, nghệ thuật: hoạ sĩ, nhạc sĩ, nhà thiết kế, nhà văn…'),
    Q('Social (S) phù hợp?', ['Kỹ thuật', 'Giáo dục, y tế, công tác xã hội, tư vấn', 'Tài chính', 'Khoa học'], 1, 'S = thích giúp người: giáo viên, bác sĩ, công tác xã hội, tư vấn, điều dưỡng…'),
  ]),

  M(9, 'Hướng nghiệp — 10 nhóm ngành lớn theo Holland', [
    Q('Enterprising (E) phù hợp?', ['Khoa học cơ bản', 'Kinh doanh, quản lý, marketing, luật', 'Kỹ thuật', 'Nghệ thuật thuần'], 1, 'E = khởi nghiệp, lãnh đạo, thuyết phục: doanh nhân, quản lý, sale, luật sư…'),
    Q('Conventional (C) phù hợp?', ['Khám phá', 'Kế toán, ngân hàng, hành chính, thư viện', 'Phiêu lưu', 'Nghệ thuật tự do'], 1, 'C = thích trật tự, quy củ: kế toán, ngân hàng, hành chính, thư viện, thống kê…'),
    Q('Hướng nghiệp có ý nghĩa?', ['Chọn ngẫu nhiên', 'Chọn nghề phù hợp năng lực + sở thích + nhu cầu XH', 'Theo bố mẹ tuyệt đối', 'Chỉ cần chọn ngành đang hot trên mạng xã hội'], 1, 'Chọn nghề tốt: cân bằng năng lực + sở thích + cơ hội thị trường.'),
    Q('Nguyên tắc chọn nghề?', ['Tự nhiên đến', 'Theo bạn', 'Theo trào lưu', 'Biết mình + biết nghề + biết xã hội'], 3, 'Hướng nghiệp 3 trụ cột: hiểu mình + hiểu nghề + hiểu thị trường lao động.'),
    Q('Khi chưa biết thích gì?', ['Bỏ cuộc', 'Chọn đại', 'Để cha mẹ quyết', 'Trải nghiệm nhiều, đọc về các nghề, gặp người làm nghề'], 3, 'Cách khám phá: trải nghiệm thực tế, đọc về các nghề, phỏng vấn người trong nghề.'),
  ]),

  M(10, 'An toàn mạng nâng cao — Quyền riêng tư cá nhân', [
    Q('Quyền riêng tư trên mạng?', ['Không có quyền', 'Quyền kiểm soát thông tin cá nhân của mình', 'Quyền lấy thông tin người khác', 'Quyền truy cập mọi tài khoản công khai'], 1, 'Quyền riêng tư: cá nhân kiểm soát ai được biết và sử dụng thông tin của mình.'),
    Q('Thông tin nhạy cảm KHÔNG nên đăng?', ['Ảnh chụp lớp học', 'Tên trường và lớp đang học', 'CMND, địa chỉ, số ĐT, ảnh nhạy cảm, lịch trình hằng ngày', 'Sở thích'], 2, 'KHÔNG đăng: CMND, địa chỉ, số ĐT, ảnh nhạy cảm, lịch trình hằng ngày (kẻ xấu lợi dụng).'),
    Q('Khi bạn xin số ĐT?', ['Không cho ai', 'Cho mọi người', 'Đăng công khai', 'Chỉ chia sẻ với người tin cậy'], 3, 'Chia sẻ thông tin liên lạc có chọn lọc — chỉ người tin cậy.'),
    Q('Cài đặt quyền riêng tư mạng XH?', ['Công khai mọi thứ', 'Chỉ bạn bè được xem, không cho người lạ', 'Mặc định', 'Không quan tâm'], 1, 'Cài private: chỉ bạn bè/follow xem; không cho người lạ tiếp cận thông tin.'),
    Q('Khi vô tình lộ thông tin?', ['Đăng tiếp', 'Xoá ngay, đổi mật khẩu, báo người lớn', 'Trách bản thân', 'Im lặng'], 1, 'Hành động: xoá ngay, đổi mật khẩu liên quan, báo người lớn để được hỗ trợ.'),
  ]),

  M(11, 'An toàn mạng nâng cao — Deepfake và tin giả', [
    Q('Deepfake là?', ['Phim hài', 'AI tạo video/audio giả mạo người thật', 'Phim thật', 'Hoạt hình'], 1, 'Deepfake: dùng AI tạo video/audio giả mạo gần như thật về người có thật.'),
    Q('Deepfake nguy hiểm vì?', ['Không có tác hại', 'Chỉ giải trí', 'Gây tin giả, vu khống, lừa đảo, tống tiền', 'Vô hại'], 2, 'Deepfake dùng để lừa đảo, vu khống chính trị gia, người nổi tiếng, tống tiền nạn nhân.'),
    Q('Dấu hiệu nhận biết deepfake?', ['Tự nhiên', 'Cử động mắt-môi không tự nhiên, ánh sáng lệch, chất lượng âm-hình không đồng bộ', 'Không nhận biết được', 'Rõ nét'], 1, 'Deepfake cũ có dấu hiệu: mắt nhấp, môi lệch, da quá mịn, ánh sáng/bóng không nhất quán.'),
    Q('Khi gặp video nghi deepfake?', ['Kiểm chứng nguồn, không chia sẻ', 'Tin ngay', 'Chia sẻ ngay', 'Báo cáo người trong video'], 0, 'Kiểm chứng qua nguồn uy tín; nếu nghi giả, không chia sẻ + báo cáo nền tảng.'),
    Q('Pháp luật VN về deepfake?', ['Chỉ bị nhắc nhở, không có chế tài rõ ràng', 'Tạo/lan truyền deepfake có thể bị xử lý hình sự', 'Khuyến khích', 'Hợp pháp'], 1, 'Luật An ninh mạng VN: lan truyền nội dung sai sự thật, gây hậu quả nghiêm trọng — xử lý hình sự.'),
  ]),

  M(12, 'Bảo vệ môi trường — Biến đổi khí hậu', [
    Q('Biến đổi khí hậu (climate change) chủ yếu do?', ['Mặt trời', 'Chu kỳ', 'Khí nhà kính (CO2, methane) từ hoạt động con người', 'Tự nhiên hoàn toàn'], 2, 'IPCC: 95% chắc chắn biến đổi khí hậu hiện tại do con người (đốt nhiên liệu hoá thạch, phá rừng).'),
    Q('Hậu quả biến đổi khí hậu?', ['Nóng lên, nước biển dâng, thời tiết cực đoan, mất đa dạng sinh học', 'Mát đi', 'Có lợi', 'Không có hậu quả'], 0, 'BĐKH: nóng lên, băng tan, biển dâng, bão tăng, hạn-lũ-cháy rừng cực đoan, tuyệt chủng.'),
    Q('VN bị ảnh hưởng BĐKH?', ['Trung bình, chủ yếu ở miền núi phía Bắc', 'Không bị', 'Nặng — đặc biệt ĐB Sông Cửu Long bị xâm nhập mặn, nước biển dâng', 'Có lợi'], 2, 'VN trong top 5 quốc gia bị ảnh hưởng BĐKH nặng nhất (đặc biệt Mekong, Hải Phòng).'),
    Q('Hành động cá nhân giảm BĐKH?', ['Đi máy bay nhiều', 'Tiêu thụ nhiều', 'Tiết kiệm năng lượng, ít thịt đỏ, đi xe đạp/công cộng, trồng cây', 'Phá rừng'], 2, 'Cá nhân: tiết kiệm điện, ăn ít thịt đỏ, đi xe công cộng, trồng cây, tái chế.'),
    Q('Thoả thuận khí hậu Paris (2015)?', ['Tăng phát thải', 'Mục tiêu giữ nóng lên dưới 2°C (lý tưởng 1.5°C)', 'Bỏ giảm phát thải', 'Không có thoả thuận'], 1, 'Paris Agreement: 196 nước cam kết giữ nhiệt độ tăng <2°C, mục tiêu 1.5°C so với tiền công nghiệp.'),
  ]),

  M(13, 'Tiêu dùng có trách nhiệm', [
    Q('Tiêu dùng có trách nhiệm là?', ['Không mua gì', 'Mua hàng rẻ', 'Mua sắm có ý thức về tác động môi trường-xã hội', 'Mua mọi thứ'], 2, 'Responsible consumption: mua có suy nghĩ về tác động đến môi trường và xã hội.'),
    Q('3R trong môi trường?', ['Right, Real, Recent', 'Run, Rest, Relax', 'Reduce, Reuse, Recycle (giảm, tái sử dụng, tái chế)', 'Read, Write, Repeat'], 2, '3R nổi tiếng: Reduce (giảm) > Reuse (tái sử dụng) > Recycle (tái chế) — thứ tự ưu tiên.'),
    Q('Ưu tiên nhất trong 3R?', ['Recycle', 'Recover (phục hồi năng lượng từ rác)', 'Reduce (giảm tiêu thụ ngay từ đầu)', 'Refuse (từ chối hoàn toàn mọi sản phẩm)'], 2, 'Reduce hiệu quả nhất: không tạo rác/tiêu thụ ngay từ đầu.'),
    Q('Sản phẩm thân thiện môi trường?', ['Đồ nhựa dùng 1 lần', 'Túi vải thay nilon, sản phẩm tái chế, hữu cơ', 'Đồ không phân huỷ', 'Đồ độc hại'], 1, 'Sản phẩm xanh: túi vải, đồ tái chế, hữu cơ, ít bao bì, sản xuất bền vững.'),
    Q('Thực phẩm bền vững?', ['Đồ chế biến nhiều', 'Mua thừa', 'Nhập khẩu xa', 'Mua đủ ăn, ít đồ chế biến, địa phương, mùa vụ'], 3, 'Bền vững: mua đủ (giảm lãng phí), thực phẩm tươi, địa phương, theo mùa.'),
  ]),

  M(14, 'Tham gia hoạt động cộng đồng — Tình nguyện', [
    Q('Tình nguyện là?', ['Tự nguyện đóng góp thời gian, công sức cho cộng đồng', 'Hoạt động kinh doanh', 'Bị ép buộc', 'Trả lương'], 0, 'Tình nguyện: hoạt động tự nguyện, không vì lợi ích vật chất, vì cộng đồng.'),
    Q('HS có thể tham gia hoạt động gì?', ['Không tham gia', 'Chỉ chơi', 'Dọn rác công viên, dạy kèm em nhỏ, thăm trại trẻ mồ côi', 'Chỉ học bài'], 2, 'HS có thể: bảo vệ MT (dọn rác, trồng cây), dạy em nhỏ, thăm trại trẻ mồ côi/người già…'),
    Q('Lợi ích tình nguyện cho HS?', ['Không có lợi', 'Rèn kỹ năng, lòng nhân ái, hiểu xã hội, networking', 'Tốn tiền', 'Mất thời gian'], 1, 'Tình nguyện: rèn kỹ năng mềm + đồng cảm + mở rộng quan hệ + đẹp hồ sơ cá nhân.'),
    Q('Tổ chức tình nguyện uy tín ở VN?', ['Mùa hè xanh, Tiếp sức mùa thi, Hội Chữ thập đỏ, UNICEF', 'Không cần tổ chức', 'Tự lập', 'Nhóm tự phát qua mạng xã hội không rõ tổ chức'], 0, 'Tổ chức uy tín: Đoàn TNCS HCM, Hội CTĐ, UNICEF, Save the Children, các CLB sinh viên uy tín.'),
    Q('Khi tham gia tình nguyện, cần?', ['Coi thường người được giúp', 'Bỏ giữa chừng', 'Cam kết đến cùng, tôn trọng người được giúp', 'Khoe trên MXH'], 2, 'Tinh thần tình nguyện: cam kết đến cùng, tôn trọng phẩm giá người được giúp.'),
  ]),

  M(15, 'Phòng chống xâm hại — Quyền cơ thể', [
    Q('Quyền cơ thể của trẻ em?', ['Cơ thể là của mình, không ai được động chạm khi không cho phép', 'Không có quyền', 'Người lớn được động chạm', 'Tuỳ ý người khác'], 0, 'Trẻ em có quyền bất khả xâm phạm về cơ thể. KHÔNG ai được chạm vào khi không cho phép.'),
    Q('Vùng riêng tư của cơ thể?', ['Vùng được che bởi đồ tắm', 'Không có vùng riêng tư', 'Chỉ mặt', 'Cả cơ thể'], 0, 'Vùng riêng tư = vùng được che bởi đồ tắm + miệng — không cho ai chạm vào.'),
    Q('Quy tắc 5 ngón tay?', ['Đếm bạn', 'Đếm tiền', 'Mức độ tiếp xúc theo độ thân thiết', 'Năm ngón tượng trưng cho năm giác quan'], 2, 'Quy tắc 5 ngón: ôm hôn (ngón cái-bố mẹ), khoác tay (trỏ-anh em), nắm tay (giữa-bạn), bắt tay (nhẫn-quen), vẫy (út-người lạ).'),
    Q('Khi ai đó chạm vào em bất thường?', ['Sợ hãi', 'Hét to "Không!", chạy đi, kể người tin cậy', 'Im lặng', 'Nghĩ là lỗi của mình'], 1, '3 bước: NÓI KHÔNG (hét to), CHẠY ĐI (rời khỏi), KỂ LẠI (cho người tin cậy).'),
    Q('Tổng đài bảo vệ trẻ em?', ['114', '113', '111 (miễn phí, 24/7)', '115'], 2, 'Tổng đài 111 — Tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  M(16, 'Kỹ năng sống — Đối phó stress', [
    Q('Stress (căng thẳng) là?', ['Phản ứng tự nhiên với áp lực', 'Yếu đuối', 'Trạng thái buồn chán kéo dài không rõ lý do', 'Không có thật'], 0, 'Stress là phản ứng tự nhiên — vừa phải có lợi, quá nhiều có hại.'),
    Q('Nguyên nhân stress ở HS?', ['Chỉ học', 'Chỉ do mạng xã hội và game online', 'Chỉ gia đình', 'Học hành, kỳ thi, gia đình, bạn bè, ngoại hình'], 3, 'HS THCS stress chủ yếu: học+thi, kỳ vọng gia đình, quan hệ bạn bè, hình ảnh bản thân.'),
    Q('Triệu chứng stress nặng?', ['Tự tin', 'Khoẻ mạnh', 'Vui vẻ', 'Mất ngủ, lo âu kéo dài, mất tập trung, đau dạ dày'], 3, 'Stress nặng: mất ngủ, lo âu, kém tập trung, đau dạ dày, đau đầu, ăn không ngon.'),
    Q('Cách giảm stress?', ['Tự cô lập', 'Vận động, ngủ đủ, thư giãn, chia sẻ, viết nhật ký', 'Ăn nhiều', 'Im lặng chịu đựng'], 1, 'Giải toả stress: thể thao, ngủ 8h, thư giãn (thiền, nghe nhạc), chia sẻ với người tin cậy.'),
    Q('Khi stress quá mức?', ['Tự chữa', 'Bỏ qua', 'Trách bản thân', 'Tìm hỗ trợ chuyên gia (bác sĩ, tư vấn tâm lý)'], 3, 'Stress kéo dài cần chuyên gia (bác sĩ, nhà tâm lý). Trường học có tư vấn học đường.'),
  ]),

  M(17, 'Định hướng học tập THPT', [
    Q('Sau THCS, HS có lựa chọn?', ['Không có lựa chọn', 'Chỉ tư thục', 'THPT công lập, THPT tư thục, GDTX, trường nghề', 'Chỉ THPT công'], 2, 'Sau THCS: THPT (công/tư), Giáo dục thường xuyên, Trường nghề (TC nghề + văn hoá).'),
    Q('Thi vào THPT công lập ở Hà Nội?', ['10 môn', '3 môn: Toán, Văn, Tiếng Anh (+ môn 4 tuỳ năm)', 'Chỉ 1 môn', 'Không thi'], 1, 'HN: thi 3 môn Toán, Văn, Anh (đôi khi thêm môn 4 đột xuất). Một số tỉnh khác có quy định riêng.'),
    Q('Trường chuyên dành cho?', ['Tất cả HS', 'HS yếu', 'Không tồn tại', 'HS xuất sắc, đam mê 1 môn'], 3, 'Trường chuyên (HN-Amsterdam, KHTN, NTH…) cho HS xuất sắc, đam mê 1 môn cụ thể.'),
    Q('Trường nghề có lợi thế?', ['Bằng cấp thấp hơn', 'Học nghề thực tế, có việc làm sớm', 'Tốn kém', 'Không có lợi'], 1, 'Trường nghề: học nghề thực tế (kỹ thuật, công nghệ…), có việc làm sớm, đáp ứng nhu cầu thị trường.'),
    Q('Chọn THPT cần?', ['Theo bạn', 'Cha mẹ quyết tuyệt đối', 'Ngẫu nhiên', 'Năng lực bản thân + định hướng nghề + điều kiện gia đình'], 3, 'Chọn THPT: cân nhắc năng lực + định hướng tương lai + điều kiện gia đình.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Phong cách học VARK gồm mấy loại?', ['5', '4', '3', '6'], 1, 'V-A-R-K.'),
    Q('Pomodoro chia thời gian?', ['10p + 1p', '25p tập trung + 5p nghỉ', '60p + 15p', '45p tập trung + 15p nghỉ'], 1, 'Pomodoro.'),
    Q('Holland Code có mấy nhóm?', ['8', '10', '6', '4'], 2, 'RIASEC.'),
    Q('Quyền riêng tư trẻ em: không đăng?', ['Sở thích', 'Ảnh lớp', 'CMND, địa chỉ', 'Số điện thoại và mật khẩu Wi-Fi nhà'], 2, 'Thông tin nhạy cảm.'),
    Q('Tổng đài bảo vệ trẻ em?', ['113', '111', '115', '114'], 1, '24/7 miễn phí.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Khám phá nghề — 10 nhóm ngành lớn (1)', [
    Q('Nhóm ngành CNTT gồm?', ['Chỉ web', 'Chỉ game', 'Lập trình, AI, an ninh mạng, dữ liệu, web/mobile', 'Sản xuất phần cứng'], 2, 'CNTT đa dạng: software dev, AI/ML, cybersecurity, data, web/mobile, devops, sysadmin.'),
    Q('Triển vọng nghề CNTT?', ['Bão hoà', 'Rất cao, nhu cầu lớn, lương tốt', 'Sắp lỗi thời', 'Khó tìm việc'], 1, 'CNTT là 1 trong những ngành phát triển mạnh nhất, lương cao, có thể làm remote.'),
    Q('Nhóm ngành Kỹ thuật gồm?', ['Cơ khí, điện-điện tử, xây dựng, hoá học, vật liệu, ô tô', 'Chỉ điện', 'Chỉ xây dựng', 'Chỉ cơ khí'], 0, 'Engineering: cơ khí, điện-điện tử, xây dựng, hoá, vật liệu, ô tô, môi trường…'),
    Q('Yêu cầu chung ngành kỹ thuật?', ['Vẽ đẹp', 'Hát hay', 'Nói nhiều', 'Giỏi Toán-Lý, tư duy logic, kiên trì'], 3, 'Kỹ thuật cần Toán-Lý tốt + tư duy logic + kiên trì giải vấn đề.'),
    Q('Ngành Y tế gồm?', ['Bác sĩ, dược sĩ, điều dưỡng, y tế công cộng, nha sĩ', 'Chỉ điều dưỡng', 'Chỉ dược', 'Chỉ bác sĩ'], 0, 'Y tế đa dạng: bác sĩ (đa khoa, chuyên khoa), dược sĩ, điều dưỡng, y tế cộng đồng, nha…'),
  ]),

  M(20, 'Khám phá nghề — 10 nhóm ngành lớn (2)', [
    Q('Ngành Giáo dục gồm?', ['Chỉ THPT', 'Chỉ đại học', 'Chỉ tiểu học', 'Giáo viên các cấp, GD đặc biệt, đào tạo trực tuyến, EdTech'], 3, 'Giáo dục: GV mầm non → tiểu học → THCS → THPT → ĐH; GD đặc biệt; EdTech mới phát triển.'),
    Q('Ngành Kinh tế-Tài chính?', ['Chỉ marketing', 'Chỉ kế toán', 'Ngân hàng, kế toán, kiểm toán, đầu tư, marketing', 'Chỉ ngân hàng'], 2, 'Kinh tế-Tài chính: ngân hàng, kế toán-kiểm toán, đầu tư-chứng khoán, marketing, sales…'),
    Q('Ngành Nghệ thuật-Truyền thông?', ['Chỉ báo chí', 'Chỉ ca hát', 'Chỉ phim', 'Báo chí, PR, thiết kế, phim ảnh, âm nhạc, viết lách'], 3, 'Nghệ thuật-Truyền thông: báo chí, PR-quảng cáo, thiết kế đồ hoạ-UI/UX, phim ảnh, âm nhạc…'),
    Q('Ngành Luật?', ['Chỉ luật sư', 'Không có chức danh khác', 'Chỉ làm việc tại toà án nhân dân', 'Luật sư, công tố, thẩm phán, tư vấn pháp lý'], 3, 'Luật: luật sư (tư vấn, tranh tụng), kiểm sát viên, thẩm phán, công chứng, pháp chế doanh nghiệp…'),
    Q('Ngành Du lịch-Khách sạn?', ['Chỉ HDV', 'Chỉ khách sạn', 'HDV, quản lý KS-resort, ẩm thực, sự kiện', 'Chỉ giới hạn ở nhân viên lễ tân khách sạn'], 2, 'Du lịch-Khách sạn: HDV, quản lý KS-resort, bếp-ẩm thực, MICE (sự kiện hội thảo).'),
  ]),

  M(21, 'Khám phá nghề — 10 nhóm ngành lớn (3)', [
    Q('Ngành Nông-Lâm-Thuỷ sản hiện đại?', ['Không có tương lai', 'Chỉ trồng lúa', 'Lạc hậu', 'Nông nghiệp công nghệ cao, thuỷ sản, lâm nghiệp bền vững'], 3, 'Nông-Lâm-Thuỷ hiện đại: ứng dụng công nghệ cao, nông nghiệp hữu cơ, thuỷ sản bền vững.'),
    Q('Ngành Quân đội-Công an?', ['Chỉ cảnh sát', 'Sĩ quan QĐ, công an, biên phòng, cảnh sát biển', 'Chỉ lính', 'Chỉ làm bảo vệ tại các cơ quan nhà nước'], 1, 'Lực lượng vũ trang: QĐ (sĩ quan, kỹ thuật quân sự), CAND (an ninh, cảnh sát, điều tra)…'),
    Q('Ngành Khoa học cơ bản?', ['Chỉ giảng dạy', 'Lạc hậu', 'Không có việc làm', 'Toán, Lý, Hoá, Sinh, KHMT — nghiên cứu khoa học'], 3, 'KH cơ bản đào tạo nhà nghiên cứu, giảng viên ĐH; cũng làm phân tích dữ liệu, AI, R&D…'),
    Q('Ngành Logistics-Vận tải?', ['Quản lý chuỗi cung ứng, vận tải, kho bãi, xuất nhập khẩu', 'Chỉ lái xe', 'Không có ngành', 'Chỉ kho'], 0, 'Logistics phát triển mạnh: quản lý chuỗi cung ứng, vận tải đa phương thức, XNK…'),
    Q('Ngành mới nổi?', ['AI/Data, Green Energy, Esports, Influencer, Web3/Crypto', 'Chỉ có ở nước ngoài, VN chưa phát triển', 'Chỉ truyền thống', 'Lạc hậu'], 0, 'Nghề mới: AI, năng lượng xanh, esports, content creator, blockchain… đang bùng nổ.'),
  ]),

  M(22, 'Lập mục tiêu cá nhân — SMART goal', [
    Q('SMART goal là?', ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Speed, Mass…', 'Strong, Modern, Active, Rich, Tough', 'Simple'], 0, 'SMART: cụ thể, đo được, khả thi, liên quan, có thời hạn.'),
    Q('Mục tiêu không SMART?', ['"Đọc 12 cuốn sách trong 6 tháng"', '"Đạt điểm TB Toán ≥8.0 cuối HK2"', '"Học giỏi hơn"', '"Chạy 5km trong 30 phút trong 3 tháng"'], 2, '"Học giỏi hơn" không cụ thể/đo được/thời hạn → không SMART.'),
    Q('Mục tiêu cần?', ['Nói cho vui', 'Chỉ cần nói với 1 người thân là đủ', 'Viết ra, theo dõi, đánh giá định kỳ', 'Giữ trong đầu'], 2, 'Mục tiêu viết ra + theo dõi tăng xác suất đạt được lên 42% (nghiên cứu Dr. Matthews).'),
    Q('Khi không đạt mục tiêu?', ['Đổ lỗi', 'Trách bản thân', 'Bỏ cuộc', 'Phân tích lý do, điều chỉnh, tiếp tục'], 3, 'Không đạt = học từ thất bại, điều chỉnh, tiếp tục — đó là tinh thần Growth Mindset.'),
    Q('Chia mục tiêu lớn?', ['Giữ nguyên', 'Thành các mục tiêu nhỏ, có thể hành động ngay', 'Chỉ chia khi gặp khó khăn lớn', 'Bỏ luôn'], 1, 'Mục tiêu lớn → chia nhỏ (quý, tháng, tuần, ngày) → dễ thực hiện và theo dõi.'),
  ]),

  M(23, 'Mindset cố định vs Mindset phát triển', [
    Q('Growth Mindset (tư duy phát triển) là?', ['Tin rằng năng lực có thể phát triển qua nỗ lực', 'Không thể thay đổi', 'Năng lực cố định', 'Phụ thuộc trời'], 0, 'Carol Dweck: tin rằng năng lực phát triển được qua nỗ lực, học hỏi, kiên trì.'),
    Q('Fixed Mindset là?', ['Năng lực phát triển', 'Cố gắng', 'Tin năng lực cố định, không thay đổi được', 'Học hỏi'], 2, 'Fixed Mindset: tin rằng "thông minh là bẩm sinh", "không phải tuýp người đó" → giới hạn bản thân.'),
    Q('Người có Growth Mindset?', ['Đón nhận thử thách, học từ thất bại, kiên trì', 'Sợ sai', 'Tránh thử thách', 'Bỏ cuộc khi khó'], 0, 'Growth Mindset: đón nhận thử thách + xem nỗ lực là con đường + học từ thất bại.'),
    Q('Câu nói thể hiện Growth Mindset?', ['"Tôi không có tài"', '"Tôi chưa giỏi VIỆC NÀY"', '"Mình kém Toán"', '"Khó quá tôi bỏ"'], 1, 'Thêm chữ "CHƯA" (yet): "Chưa giỏi" thay vì "không giỏi" — thể hiện khả năng phát triển.'),
    Q('Rèn Growth Mindset bằng?', ['Khen tài năng', 'Tránh thử thách', 'Khen nỗ lực thay vì kết quả, đón nhận thử thách', 'Sợ sai'], 2, 'Khen nỗ lực-quá trình (không phải tài năng) giúp rèn Growth Mindset.'),
  ]),

  M(24, 'Quản lý tài chính cá nhân cơ bản', [
    Q('Tiền tiêu vặt nên?', ['Tiêu hết', 'Cất kín không dùng tới khi cần', 'Đưa người khác', 'Lập kế hoạch chi tiêu, có quỹ tiết kiệm'], 3, 'Kỹ năng tài chính: lập kế hoạch chi tiêu + tiết kiệm + đầu tư (sau này).'),
    Q('Quy tắc 50/30/20?', ['100% tiết kiệm', '100% tiêu', '30% nhu cầu, 50% mong muốn, 20% tiết kiệm', '50% nhu cầu, 30% mong muốn, 20% tiết kiệm'], 3, 'Quy tắc 50/30/20: 50% nhu cầu thiết yếu, 30% mong muốn, 20% tiết kiệm/đầu tư.'),
    Q('Phân biệt "nhu cầu" và "mong muốn"?', ['Giống nhau', 'Nhu cầu: thiết yếu (ăn, học); mong muốn: thêm vào (game, đồ chơi)', 'Không có gì khác', 'Cả hai đều là khoản chi không bắt buộc'], 1, 'Nhu cầu (needs): thiết yếu sống/học. Mong muốn (wants): thêm vào, không cần thiết.'),
    Q('Tiết kiệm bằng cách?', ['Có quỹ heo đất/tài khoản, đặt mục tiêu rõ', 'Không tiết kiệm', 'Chờ đến cuối tháng còn dư mới cất', 'Khoe khoang'], 0, 'Tiết kiệm: có nơi cụ thể (heo đất, tài khoản), đặt mục tiêu cụ thể (sách, học bổng…).'),
    Q('Tránh bẫy tiêu xài?', ['Không tiêu gì', 'Sống tằn tiện', 'Quảng cáo, FOMO mua hàng theo trend, ăn vặt quá đà', 'Đầu tư'], 2, 'Bẫy tiêu xài: quảng cáo, FOMO, ăn vặt — tổng lại số tiền không nhỏ.'),
  ]),

  M(25, 'Sức khoẻ tinh thần — Tự chăm sóc bản thân', [
    Q('Self-care (tự chăm sóc) gồm?', ['Thể chất, tinh thần, cảm xúc, xã hội', 'Chỉ giải trí', 'Chỉ tinh thần', 'Chỉ thể chất'], 0, 'Self-care toàn diện: ăn uống-ngủ-tập (thể chất), thiền-đọc (tinh thần), cảm xúc, kết nối XH.'),
    Q('Ngủ đủ cho HS THCS?', ['4–5 giờ', '8–10 giờ/đêm', '6–7 giờ/đêm như người lớn', '12 giờ'], 1, 'WHO khuyến cáo HS THCS: 8–10 giờ/đêm để não phát triển và phục hồi.'),
    Q('Ăn uống lành mạnh?', ['Chỉ thịt', 'Bỏ bữa', 'Đồ ngọt nhiều', 'Đa dạng nhóm thực phẩm, ít đồ chế biến'], 3, 'Tháp dinh dưỡng: rau-quả nhiều, đạm vừa, ít đồ ngọt-chiên-mặn-bột tinh chế.'),
    Q('Vận động thể chất?', ['10 phút', '5 phút', '5 giờ', '≥60 phút/ngày (WHO khuyến cáo)'], 3, 'WHO: trẻ 5–17 tuổi cần ≥60 phút hoạt động thể chất trung bình-mạnh/ngày.'),
    Q('Thời gian màn hình (screen time)?', ['Giới hạn ≤2h giải trí/ngày', '10 giờ', 'Không cần học', '4–5h/ngày nếu không học bài'], 0, 'WHO khuyến cáo: HS hạn chế ≤2h giải trí/ngày (chưa kể học).'),
  ]),

  M(26, 'Phòng chống nghiện game và mạng xã hội', [
    Q('Nghiện game là?', ['Mất kiểm soát thời gian chơi, ảnh hưởng học tập, sức khoẻ, quan hệ', 'Chơi cuối tuần', '1 giờ/ngày', 'Chơi giải trí'], 0, 'WHO 2018: gaming disorder = rối loạn — mất kiểm soát, ưu tiên game hơn mọi việc, ảnh hưởng đời sống.'),
    Q('Dấu hiệu nghiện game?', ['Không có dấu hiệu', 'Vừa phải', 'Chơi vui', 'Bỏ học, mất ngủ, cáu khi không chơi, dối trá'], 3, 'Dấu hiệu: chơi mất kiểm soát, bỏ học, mất ngủ, cáu gắt khi không chơi, dối trá thời gian chơi.'),
    Q('Tác hại nghiện game?', ['Không hại', 'Có lợi', 'Học sa sút, mất bạn thật, sức khoẻ giảm, nợ nần', 'Khoẻ thêm'], 2, 'Nghiện game: học sa sút, mất quan hệ thực, mắt-cột sống, có thể nợ nần (mua đồ trong game).'),
    Q('Quản lý thời gian chơi game?', ['Đặt giới hạn (≤1–2h/ngày), không chơi trước ngủ', 'Chơi không giới hạn', 'Chơi đêm', 'Bỏ học để chơi'], 0, 'Quản lý: đặt giới hạn rõ, không chơi trước ngủ (ảnh hưởng giấc ngủ), ưu tiên việc khác.'),
    Q('Nếu đã nghiện?', ['Tìm hỗ trợ từ gia đình, chuyên gia tâm lý', 'Tiếp tục', 'Tự cai', 'Im lặng'], 0, 'Nghiện nặng cần hỗ trợ chuyên môn — tâm lý học đường, gia đình, các trung tâm cai nghiện.'),
  ]),

  M(27, 'Trở thành công dân số có trách nhiệm', [
    Q('Công dân số (digital citizen) là?', ['Người không dùng', 'Người sử dụng công nghệ có trách nhiệm, đạo đức, an toàn', 'Người chuyên gia', 'Người dùng nhiều'], 1, 'Digital citizen = công dân thời số: sử dụng công nghệ có trách nhiệm, đạo đức, an toàn.'),
    Q('Quyền số gồm?', ['Riêng tư, tự do biểu đạt, tiếp cận internet, an toàn', 'Không có quyền', 'Chỉ kinh tế', 'Chỉ giải trí'], 0, 'Quyền số: riêng tư, tự do biểu đạt (trong khuôn khổ), tiếp cận internet, an toàn online.'),
    Q('Trách nhiệm số?', ['Chỉ quyền', 'Tự do tuyệt đối', 'Không có trách nhiệm', 'Tôn trọng người khác, không vi phạm bản quyền, chống tin giả'], 3, 'Trách nhiệm: tôn trọng người khác (không bắt nạt), tôn trọng bản quyền, không lan truyền tin giả.'),
    Q('Dấu chân số (digital footprint) là?', ['Dữ liệu cá nhân để lại trên internet', 'Vô hại', 'Không tồn tại', 'Vết chân thật'], 0, 'Digital footprint = mọi thứ ta đăng/click/để lại online — gần như không xoá được hoàn toàn.'),
    Q('Bảo vệ dấu chân số bằng?', ['Đăng mọi thứ', 'Đăng có ý thức, kiểm tra cài đặt riêng tư', 'Để mặc', 'Không quan tâm'], 1, 'Trước khi đăng: "Mình có muốn nhà tuyển dụng/gia đình thấy 10 năm sau không?".'),
  ]),

  M(28, 'Hợp tác và làm việc nhóm', [
    Q('Làm việc nhóm hiệu quả cần?', ['Im lặng', 'Cạnh tranh', 'Mục tiêu chung, phân vai, giao tiếp, tôn trọng', 'Cá nhân'], 2, 'Teamwork tốt: mục tiêu chung + phân công + giao tiếp + tôn trọng đa dạng.'),
    Q('Vai trò trong nhóm?', ['Ai giỏi nhất làm mọi vai trò chính', 'Tất cả như nhau', '1 người làm hết', 'Trưởng nhóm, thư ký, kỹ thuật, thiết kế, kiểm tra…'], 3, 'Phân vai theo điểm mạnh: leader, thư ký, kỹ thuật/nội dung, thiết kế, kiểm tra chất lượng…'),
    Q('Xung đột nhóm xử lý?', ['Tách nhóm', 'Đối thoại, lắng nghe, tìm giải pháp đôi bên cùng có lợi', 'Cãi nhau', 'Bỏ qua'], 1, 'Conflict resolution: đối thoại + lắng nghe + tìm win-win.'),
    Q('Khi đồng đội yếu kém?', ['Loại bỏ', 'Giúp đỡ, hướng dẫn, không chê bai', 'Chế giễu', 'Mặc kệ'], 1, 'Teamwork là cùng nhau tiến bộ — giúp đỡ đồng đội yếu là kỹ năng lãnh đạo.'),
    Q('Đánh giá làm việc nhóm?', ['Bỏ qua', 'Chỉ kết quả', 'Chỉ dựa trên điểm thuyết trình cuối', 'Cả quá trình + kết quả, đóng góp từng người'], 3, 'Đánh giá fair: quá trình + kết quả + đóng góp cụ thể của từng thành viên.'),
  ]),

  M(29, 'Sáng tạo và đổi mới (creativity & innovation)', [
    Q('Sáng tạo (creativity) là?', ['Học thuộc', 'Sao chép', 'Bắt chước', 'Tạo ra ý tưởng mới hữu ích'], 3, 'Sáng tạo = tạo ý tưởng mới có giá trị/hữu ích.'),
    Q('Đổi mới (innovation)?', ['Biến ý tưởng sáng tạo thành sản phẩm/giải pháp thực tế', 'Bắt chước', 'Không liên quan', 'Chỉ nghĩ'], 0, 'Innovation = thực hiện sáng tạo thành sản phẩm/dịch vụ thực tế có giá trị.'),
    Q('Rèn sáng tạo bằng?', ['Tránh suy nghĩ', 'Brainstorming, đặt câu hỏi "Tại sao? Có cách khác?"', 'Học thuộc', 'Sao chép'], 1, 'Kỹ thuật: brainstorming, mind map, 5W1H, đặt câu hỏi mở…'),
    Q('Tinh thần "Think outside the box"?', ['Suy nghĩ vượt khuôn mẫu', 'Bắt chước', 'Sợ sai', 'Theo lối mòn'], 0, 'Sáng tạo cần suy nghĩ vượt khuôn mẫu, dám thử cái mới.'),
    Q('Sai lầm khi sáng tạo?', ['Là bước học hỏi, không phải thất bại', 'Đáng xấu hổ', 'Là yếu kém', 'Phải tránh tuyệt đối'], 0, 'Sáng tạo cần dám sai — mỗi sai lầm là 1 bài học để cải thiện.'),
  ]),

  M(30, 'Kỹ năng thuyết trình', [
    Q('Thuyết trình tốt cần?', ['Nội dung rõ + cấu trúc + ngôn ngữ cơ thể + slide hỗ trợ', 'Nói nhanh', 'Đọc văn bản', 'Slide đầy chữ'], 0, '4 yếu tố: nội dung tốt + cấu trúc rõ + giao tiếp tự tin + slide hỗ trợ chứ không thay người nói.'),
    Q('Cấu trúc thuyết trình cổ điển?', ['Chỉ thân', 'Mở đầu + Kết luận (bỏ phần thân)', 'Mở đầu + Thân + Kết', 'Chỉ kết'], 2, '3 phần kinh điển: mở (giới thiệu, hook), thân (nội dung), kết (tóm tắt, kêu gọi).'),
    Q('Slide tốt?', ['1 ý chính/slide, ít chữ, nhiều hình ảnh', 'Đọc nguyên slide', 'Không cần slide', 'Nhiều chữ'], 0, 'Quy tắc 6x6 hoặc 1 ý/slide: ít chữ, nhiều hình ảnh trực quan; slide là gợi nhớ, không phải kịch bản.'),
    Q('Khi run lúc thuyết trình?', ['Bỏ chạy', 'Hít thở sâu, tập trung vào nội dung, tập trước nhiều lần', 'Nói nhỏ', 'Đọc văn bản'], 1, 'Quản lý run: hít thở sâu + tập nhiều lần + tập trung vào việc truyền đạt, không phải bản thân.'),
    Q('Tương tác khán giả?', ['Nói nhanh cho xong', 'Đứng im đọc', 'Đặt câu hỏi, eye contact, ví dụ liên quan', 'Tránh ánh mắt'], 2, 'Tương tác: nhìn vào khán giả, đặt câu hỏi, ví dụ gần gũi → giữ chú ý.'),
  ]),

  M(31, 'Hoạt động cộng đồng — Bảo vệ môi trường địa phương', [
    Q('Hoạt động bảo vệ MT HS có thể làm?', ['Dọn rác công viên, hồ; trồng cây; tuyên truyền tiết kiệm điện', 'Xả rác', 'Bỏ mặc', 'Phá rừng'], 0, 'HS có thể tổ chức: dọn rác công viên/hồ, trồng cây, tuyên truyền tiết kiệm điện-nước-rác.'),
    Q('Phân loại rác tại nguồn?', ['Hữu cơ, vô cơ tái chế, nguy hại — 3 loại chính', 'Không phân loại', '10 loại', 'Vứt chung'], 0, 'Phân loại: hữu cơ (rau, thức ăn) + tái chế (giấy, nhựa, kim loại) + nguy hại (pin, hoá chất).'),
    Q('Tham gia ngày Trái Đất (Earth Day)?', ['22/4 hằng năm', '1/1', '10/12', '5/6'], 0, '22/4 là Ngày Trái Đất; 5/6 là Ngày MT thế giới.'),
    Q('Tổ chức 1 hoạt động cần?', ['Không chuẩn bị', 'Chỉ cần đông người tham gia là đủ', 'Tự phát', 'Kế hoạch, phân công, vật tư, đo lường kết quả'], 3, 'Tổ chức hoạt động: kế hoạch SMART + phân công + vật tư + đo lường tác động.'),
    Q('Sau hoạt động?', ['Không làm gì tiếp', 'Đánh giá, chia sẻ kết quả, lên kế hoạch tiếp', 'Bỏ qua', 'Khoe khoang đơn thuần'], 1, 'Sau hoạt động: đánh giá, chia sẻ để truyền cảm hứng + lên kế hoạch tiếp theo.'),
  ]),

  M(32, 'Kỹ năng giải quyết vấn đề', [
    Q('Quy trình giải quyết vấn đề?', ['Hành động ngay', 'Bỏ qua', 'Xác định → phân tích → đề xuất giải pháp → chọn → thực hiện → đánh giá', 'Hỏi người khác làm hộ là xong'], 2, 'Problem solving 6 bước: identify → analyze → brainstorm → choose → execute → evaluate.'),
    Q('Khi gặp vấn đề khó?', ['Chia nhỏ thành các vấn đề nhỏ hơn', 'Đổ lỗi', 'Bỏ cuộc', 'Né tránh'], 0, 'Vấn đề lớn = nhiều vấn đề nhỏ. Chia nhỏ để giải quyết từng phần.'),
    Q('Phương pháp 5 Whys?', ['Đặt 5 mục tiêu cùng lúc cho một vấn đề', 'Tìm giải pháp', 'Hỏi "Tại sao?" 5 lần để tìm gốc rễ', 'Không liên quan'], 2, '5 Whys (Toyota): hỏi "Tại sao?" liên tiếp 5 lần để tìm nguyên nhân gốc rễ vấn đề.'),
    Q('Brainstorming là?', ['Đề xuất nhiều ý tưởng, không phê phán giai đoạn đầu', 'Phê bình ngay', 'Chỉ 1 người đưa ý tưởng, cả nhóm theo', 'Chọn ngay ý đầu tiên mà nhóm trưởng nêu'], 0, 'Brainstorming: quy tắc 1 là KHÔNG phê phán giai đoạn đề xuất — ý nào cũng ghi.'),
    Q('Sau khi giải quyết, cần?', ['Tự khen', 'Tự chê', 'Bỏ qua', 'Đánh giá hiệu quả, học bài học'], 3, 'Reflect/review: đánh giá hiệu quả + ghi nhận bài học cho lần sau.'),
  ]),

  M(33, 'Định hướng tương lai — Tầm nhìn 5-10 năm', [
    Q('Tầm nhìn cá nhân (personal vision)?', ['Vô vọng', 'Không có ý nghĩa', 'Lo nghĩ', 'Hình dung mình muốn trở thành ai trong 5-10 năm'], 3, 'Vision: hình dung rõ về tương lai 5-10 năm → định hướng hành động hôm nay.'),
    Q('Tầm nhìn cần?', ['Quá dễ', 'Cụ thể, truyền cảm hứng, khả thi', 'Sao chép tầm nhìn của thần tượng nổi tiếng', 'Mơ mộng viển vông'], 1, 'Tầm nhìn tốt: cụ thể (vẽ được trong đầu) + truyền cảm hứng + có thể đạt nếu nỗ lực.'),
    Q('Từ tầm nhìn → mục tiêu?', ['Chia tầm nhìn 10 năm → mục tiêu 5 năm → 1 năm → tháng → tuần', 'Chỉ mục tiêu ngắn', 'Không cần', 'Chỉ tầm nhìn'], 0, 'Chia tầm nhìn dài hạn → mục tiêu trung-ngắn hạn → kế hoạch hành động hằng ngày.'),
    Q('Khi tầm nhìn thay đổi?', ['Thất bại', 'Không thể thay', 'Phải giữ cố định', 'Bình thường — điều chỉnh khi hiểu mình hơn'], 3, 'Tầm nhìn không phải lời thề bất biến — điều chỉnh khi hiểu bản thân và thế giới hơn là bình thường.'),
    Q('Hành động cụ thể từ tầm nhìn?', ['Đợi đủ điều kiện lý tưởng mới bắt đầu', 'Không liên quan', 'Việc làm hôm nay phải dẫn đến tầm nhìn', 'Để sau'], 2, 'Mỗi hành động hằng ngày phải nhất quán với tầm nhìn dài hạn — bridge the gap.'),
  ]),

  M(34, 'Tham gia hoạt động ngoại khoá và CLB', [
    Q('Hoạt động ngoại khoá là?', ['Hoạt động ngoài giờ học chính: CLB, thể thao, văn nghệ, tình nguyện', 'Chỉ giải trí', 'Chỉ dành cho HS có học lực giỏi', 'Chỉ học'], 0, 'Ngoại khoá: CLB, thể thao, văn nghệ, tình nguyện, debate, mô hình LHQ…'),
    Q('Lợi ích hoạt động ngoại khoá?', ['Phát triển kỹ năng mềm, mạng lưới, hồ sơ đẹp', 'Hao tiền', 'Mất thời gian', 'Không có lợi'], 0, 'Ngoại khoá: rèn kỹ năng mềm, mạng lưới bạn bè, hồ sơ ấn tượng (cho xét tuyển sau này).'),
    Q('Chọn CLB nào?', ['Theo đam mê + có thời gian dành cho', 'Theo bạn', 'Càng nhiều càng tốt', 'Chọn CLB có nhiều thành viên nổi tiếng nhất'], 0, 'Chọn CLB: theo đam mê thực sự + đảm bảo có thời gian (chất hơn lượng).'),
    Q('Cân bằng học và ngoại khoá?', ['Không ngoại khoá', 'Bỏ học', 'Ưu tiên học chính, ngoại khoá ~5-10h/tuần', 'Dành toàn bộ cuối tuần cho ngoại khoá'], 2, 'Cân bằng: học chính là ưu tiên 1; ngoại khoá ~5-10h/tuần là hợp lý cho HS.'),
    Q('Khi quá tải?', ['Cắt bớt ngoại khoá, ưu tiên học và sức khoẻ', 'Bỏ học', 'Tiếp tục cố', 'Bỏ ngoại khoá tất cả'], 0, 'Quá tải = cắt bớt ngoại khoá ít quan trọng, ưu tiên học chính và sức khoẻ.'),
  ]),

  M(35, 'Tổng kết — Hành trang vào lớp 9', [
    Q('Lớp 9 quan trọng vì?', ['Chỉ là năm học bình thường như lớp 7, 8', 'Chỉ chơi', 'Bình thường', 'Kì thi vào THPT cuối năm — bước ngoặt định hướng'], 3, 'Lớp 9: thi vào THPT — bước ngoặt định hướng giáo dục và nghề nghiệp tương lai.'),
    Q('Chuẩn bị lớp 9?', ['Đợi giờ', 'Chơi nhiều', 'Ôn kỹ kiến thức 6-8, lập kế hoạch học thi, giữ sức khoẻ', 'Học dồn vào tháng cuối trước kỳ thi'], 2, 'Chuẩn bị: ôn nền tảng 6-8, lập kế hoạch học thi, giữ sức khoẻ tinh thần.'),
    Q('Tinh thần học lớp 9?', ['Học thuộc lòng càng nhiều càng tốt', 'Chỉ tập trung môn thi, bỏ môn còn lại', 'Nghiêm túc, kiên trì, tự tin, biết nghỉ ngơi', 'Ép quá sức'], 2, 'Học lớp 9: nghiêm túc + kiên trì + tự tin + biết nghỉ ngơi để tránh kiệt sức.'),
    Q('Khi thi không như mong đợi?', ['Có nhiều con đường: trường khác, GDTX, trường nghề', 'Tuyệt vọng', 'Bỏ học', 'Kết thúc tương lai'], 0, 'Một kì thi không quyết định cả đời. Có nhiều con đường: trường khác, GDTX, trường nghề.'),
    Q('Tổng kết HĐTN lớp 8 đã giúp em?', ['Mất thời gian', 'Hiểu mình, kỹ năng sống, định hướng nghề', 'Không giúp gì', 'Chỉ học để kiểm tra lấy điểm'], 1, 'HĐTN lớp 8: hiểu mình + kỹ năng sống + định hướng nghề — nền tảng cho lớp 9 và THPT.'),
  ]),
];

export const S8HDTN_SCENARIOS = indexBy(S8HDTN_WEEKS);
