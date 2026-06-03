// ============================================================
// Lớp 9 · HOẠT ĐỘNG TRẢI NGHIỆM — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018: SMART, chuẩn bị thi 10, hướng nghiệp RIASEC+Big Five, kỹ năng sống tự lập.
// 4–5 câu/tuần · ID prefix: "S9HDTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9HDTN', 'hdtn', n, title, qs, opts);

export const S9HDTN_WEEKS = [
  // ───── HK1 — Quản lý bản thân + Chuẩn bị thi 10 ─────
  M(1, 'Khám phá bản thân — Điểm mạnh điểm yếu', [
    Q('SWOT bản thân gồm?', ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Situation, Objective, Strategy', 'Strengths, Weaknesses, Opportunities, Threats', 'Situation, Task, Action, Result'], 2, 'SWOT analysis cho bản thân.'),
    Q('Strengths là?', ['Cơ hội', 'Điểm yếu', 'Thách thức', 'Điểm mạnh'], 3, 'S = Strengths = điểm mạnh.'),
    Q('Để biết điểm mạnh?', ['Bốc thăm', 'Phản chiếu kinh nghiệm + hỏi người thân + trắc nghiệm', 'So sánh hơn-thua với bạn cùng lớp', 'Chỉ dựa vào điểm số môn học'], 1, 'Nhiều cách để khám phá bản thân.'),
    Q('Điểm yếu nên?', ['Giấu kín, không cho ai biết', 'Phớt lờ', 'Tự ti, ngừng cố gắng vì biết mình kém', 'Nhận biết + cải thiện hoặc bù đắp'], 3, 'Nhận biết điểm yếu là bước đầu phát triển.'),
  ]),

  M(2, 'Mục tiêu SMART', [
    Q('SMART viết tắt?', ['Simple, Many, Active, Real, Top', 'Strong, Modern, Active, Real, Tough', 'Smart, Modern, Ambitious, Right, Trendy', 'Specific, Measurable, Achievable, Relevant, Time-bound'], 3, 'SMART = 5 tiêu chí mục tiêu hiệu quả.'),
    Q('Specific là?', ['Đơn giản', 'Đặc biệt', 'Nhỏ, dễ đạt trong 1 ngày', 'Cụ thể, rõ ràng'], 3, 'S = Specific = cụ thể.'),
    Q('Measurable là?', ['Đo lường được', 'Đơn giản', 'Khả thi', 'Lớn, tham vọng'], 0, 'M = đo lường được để theo dõi tiến độ.'),
    Q('Time-bound là?', ['Thời gian linh hoạt, không gò bó', 'Không thời hạn', 'Vô hạn', 'Có thời hạn rõ ràng'], 3, 'T = có deadline rõ.'),
    Q('Ví dụ SMART tốt?', ['Trở thành học sinh giỏi nhất lớp', 'Cố gắng', '"Học giỏi hơn"', 'Đạt 8 điểm Toán giữa kì II, vào 31/3/2026'], 3, 'Mục tiêu SMART rõ ràng và đo được.'),
  ]),

  M(3, 'Quản lý thời gian — Time-block', [
    Q('Time-blocking là?', ['Học liên tục không nghỉ giữa các môn', 'Phân chia thời gian thành các khối cho từng công việc', 'Bấm giờ', 'Đếm giờ'], 1, 'Time-block tăng năng suất.'),
    Q('Pomodoro?', ['25 phút làm + 5 phút nghỉ', '45 phút làm + 15 phút nghỉ', '10 phút', '60 phút'], 0, 'Pomodoro Technique: 25-5.'),
    Q('Ma trận Eisenhower phân loại?', ['Theo độ khó: A (khó), B (trung bình), C (dễ)', 'Quan trọng / Khẩn cấp (4 ô)', 'Theo môn học và thời lượng dự kiến', 'Theo người giao việc và hạn nộp'], 1, 'Eisenhower Matrix: 4 nhóm việc.'),
    Q('Ưu tiên việc nào?', ['Khẩn cấp trước', 'Dễ trước', 'Việc mình thích trước, việc khó để cuối', 'Quan trọng + khẩn cấp; rồi quan trọng + không khẩn'], 3, 'Quan trọng + khẩn = ưu tiên cao nhất.'),
    Q('Multitasking?', ['Giảm năng suất; nên tập trung 1 việc', 'Tốt, vì làm được nhiều việc cùng lúc', 'Phù hợp với mọi loại công việc trí óc', 'Tăng năng suất'], 0, 'Nghiên cứu chứng minh multitasking phản tác dụng.'),
  ]),

  M(4, 'Kỹ năng học tập hiệu quả', [
    Q('Active recall?', ['Tự gọi lại thông tin từ trí nhớ', 'Đọc lướt qua nhanh nhiều lần', 'Đọc lại', 'Highlight'], 0, 'Active recall mạnh hơn passive reading.'),
    Q('Spaced repetition?', ['Ôn lại theo khoảng cách tăng dần', 'Ôn 1 lần', 'Ôn liên tục', 'Ôn dồn 1 ngày trước kiểm tra'], 0, 'Spaced repetition (Anki, Quizlet) tối ưu trí nhớ dài hạn.'),
    Q('Feynman technique?', ['Đọc to', 'Ghi chép lại nguyên văn sách giáo khoa', 'Học thuộc', 'Giải thích đơn giản như dạy người khác'], 3, 'Feynman: dạy người khác giúp hiểu sâu.'),
    Q('Mind map?', ['Sơ đồ tư duy gắn ý chính + nhánh', 'Liệt kê', 'Bảng so sánh các khái niệm theo cột', 'Danh sách câu hỏi và đáp án ngắn'], 0, 'Mind map giúp tổ chức ý tưởng.'),
    Q('Học vào buổi nào tốt?', ['Đêm khuya sau 12h cho yên tĩnh', 'Chỉ đêm', 'Tuỳ chronotype; sáng + đầu chiều thường tốt', 'Chỉ sáng'], 2, 'Mỗi người có thời gian học tối ưu khác nhau.'),
  ]),

  M(5, 'Chuẩn bị thi vào 10 — Lộ trình', [
    Q('Bắt đầu ôn thi vào 10?', ['Tháng 5', '1 tuần trước', 'Từ đầu lớp 9 hoặc sớm hơn', 'Đợi đến học kỳ 2 lớp 9 mới bắt đầu'], 2, 'Lộ trình dài giúp ôn kỹ.'),
    Q('Môn thi vào 10 (Hà Nội)?', ['Tất cả môn', 'Chỉ Toán Văn', 'Thường có Toán, Văn, Anh + môn thứ 4', 'Toán, Văn, Anh, Sử, Địa cố định'], 2, 'Thường thi 3-4 môn vào 10.'),
    Q('Lộ trình ôn?', ['Học vẹt', 'Luyện đề ngay', 'Củng cố kiến thức → luyện đề → tập trung điểm yếu', 'Học thuộc lòng đáp án các đề năm trước'], 2, 'Củng cố trước, luyện đề sau.'),
    Q('Làm đề thi thử?', ['Cuối kì', 'Chỉ làm 1 lần ngay trước ngày thi', 'Theo lịch định kỳ, mô phỏng phòng thi', 'Không cần'], 2, 'Đề thi thử giúp làm quen áp lực.'),
    Q('Tâm lý ôn thi?', ['Bỏ cuộc', 'Lo lắng', 'Bình tĩnh, kiên trì, không hoảng loạn', 'Lo lắng cao độ để có động lực học'], 2, 'Tâm lý vững là yếu tố quan trọng.'),
  ]),

  M(6, 'Kỹ năng làm bài thi', [
    Q('Khi nhận đề?', ['Làm theo thứ tự câu 1 đến hết', 'Bỏ qua dễ', 'Đọc toàn bộ + phân bổ thời gian từng phần', 'Làm ngay'], 2, 'Đọc + phân bổ thời gian là bước đầu.'),
    Q('Câu dễ nên?', ['Làm trước, lấy điểm chắc', 'Để sau', 'Làm cùng câu khó để tiết kiệm giấy nháp', 'Lướt qua nhanh, không trình bày kỹ'], 0, 'Câu dễ làm trước đảm bảo điểm.'),
    Q('Khi gặp câu khó?', ['Bỏ luôn', 'Hỏi giám thị gợi ý hướng giải', 'Mất giờ với 1 câu', 'Đánh dấu, làm câu khác, quay lại'], 3, 'Đừng kẹt 1 câu, đánh dấu rồi quay lại.'),
    Q('Trước khi nộp?', ['Không cần', 'Nộp ngay', 'Đếm số câu đã làm rồi nộp', 'Kiểm tra lại toàn bộ'], 3, 'Soát lại tránh lỗi nhỏ.'),
    Q('Trắc nghiệm — câu không biết?', ['Bỏ trống', 'Loại trừ đáp án sai trước, đoán có cơ sở', 'Luôn chọn đáp án dài nhất', 'Đoán bừa'], 1, 'Loại trừ giúp đoán tốt hơn.'),
  ]),

  M(7, 'Quản lý stress thi cử', [
    Q('Stress là?', ['Yếu đuối', 'Cảm xúc tiêu cực hoàn toàn nên loại bỏ', 'Phản ứng tâm-sinh khi đối mặt áp lực', 'Bệnh tâm thần cần dùng thuốc'], 2, 'Stress là phản ứng tự nhiên.'),
    Q('Stress có thể?', ['Luôn xuất hiện cùng trầm cảm', 'Chỉ hại', 'Có lợi (giúp tập trung) hoặc có hại (mất ngủ, lo lắng)', 'Chỉ lợi'], 2, 'Stress vừa phải giúp tập trung; quá mức gây hại.'),
    Q('Kỹ thuật thở 4-7-8?', ['Hít sâu mãi', 'Hít 4s – nín 7s – thở 8s', 'Hít 7s – nín 4s – thở 8s', '4-4-4'], 1, 'Thở 4-7-8 giúp giảm căng thẳng.'),
    Q('Khi quá lo lắng?', ['Im lặng chịu', 'Uống cafe', 'Tâm sự với người tin cậy, vận động, ngủ đủ', 'Uống thuốc an thần để dễ ngủ'], 2, 'Chia sẻ + vận động + ngủ đủ giúp giảm lo lắng.'),
    Q('Ngủ trước thi?', ['3 tiếng', 'Chỉ chợp mắt 30 phút cho tỉnh táo', 'Thức cả đêm', 'Ngủ đủ 7-8 tiếng'], 3, 'Ngủ đủ giúp não hoạt động tốt nhất.'),
  ]),

  M(8, 'Hướng nghiệp — RIASEC (Holland)', [
    Q('RIASEC viết tắt?', ['Realistic, Investigative, Artistic, Social, Enterprising, Conventional', 'Reading, Inquiry, Analysis, Sport, Engineering, Coding', 'Real, Independent, Active, Sociable, Engaged, Calm', 'Right, Intelligent, Athletic, Strong, Easy, Cool'], 0, '6 nhóm tính cách nghề nghiệp của John Holland.'),
    Q('Realistic phù hợp?', ['Nghề thực tiễn, kỹ thuật, ngoài trời', 'Nghệ thuật', 'Nghề tư vấn tâm lý, chăm sóc', 'Văn phòng'], 0, 'R thích làm việc tay chân, kỹ thuật.'),
    Q('Investigative phù hợp?', ['Vận động', 'Nghiên cứu, phân tích, khoa học', 'Nghề biểu diễn, ca hát, vũ đạo', 'Bán hàng'], 1, 'I thích tư duy, nghiên cứu.'),
    Q('Artistic phù hợp?', ['Nông nghiệp', 'Sáng tạo, nghệ thuật, tự do', 'Văn phòng', 'Nghề kế toán, ngân hàng, thống kê'], 1, 'A thích sáng tạo + tự do.'),
    Q('Social phù hợp?', ['Lập trình, sửa máy, kỹ thuật', 'Cô đơn', 'Tính toán', 'Giúp đỡ, dạy học, tư vấn'], 3, 'S thích làm việc với người.'),
    Q('Enterprising phù hợp?', ['Lãnh đạo, kinh doanh, thuyết phục', 'Nghiên cứu khoa học, phòng thí nghiệm', 'Thư ký, đánh máy, lưu trữ hồ sơ', 'Ẩn dật'], 0, 'E thích lãnh đạo, kinh doanh.'),
    Q('Conventional phù hợp?', ['Vô tổ chức', 'Quy củ, kế toán, văn phòng', 'Phá cách', 'Khởi nghiệp, lãnh đạo đội nhóm'], 1, 'C thích trật tự, quy chuẩn.'),
  ]),

  M(9, 'Hướng nghiệp — Big Five (OCEAN)', [
    Q('Big Five viết tắt?', ['A-B-C-D-E', 'Optimism, Curiosity, Empathy, Ambition, Nobility', 'Openness, Charisma, Empathy, Awareness, Nurture', 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism'], 3, 'OCEAN là 5 nét tính cách lớn.'),
    Q('Openness cao?', ['Cởi mở, thích cái mới, sáng tạo', 'Khép kín, chỉ thích quen thuộc', 'Hướng ngoại, năng nổ giao tiếp', 'Bảo thủ'], 0, 'O cao = sáng tạo, cởi mở.'),
    Q('Conscientiousness cao?', ['Bừa bộn', 'Có trách nhiệm, kỷ luật, tổ chức', 'Cởi mở, thích thử cái mới', 'Vô tổ chức'], 1, 'C cao = kỷ luật, đáng tin.'),
    Q('Extraversion cao?', ['Cô đơn', 'Có trách nhiệm, kỷ luật cao', 'Hướng nội', 'Hướng ngoại, năng lượng từ người khác'], 3, 'E cao = hướng ngoại.'),
    Q('Agreeableness cao?', ['Đối đầu', 'Khó tính', 'Cẩn thận, kỷ luật, đúng giờ', 'Thân thiện, hợp tác, đồng cảm'], 3, 'A cao = dễ hợp tác.'),
    Q('Neuroticism cao?', ['Bình thản', 'Dễ lo lắng, nhạy cảm cảm xúc', 'Cởi mở, sáng tạo, ưa khám phá', 'Vô cảm'], 1, 'N cao = dễ stress.'),
  ]),

  M(10, 'Định hướng nghề — Kết hợp tự nhận thức', [
    Q('Bước chọn nghề?', ['Chọn nghề lương cao nhất hiện tại', 'Tự nhận thức → khám phá nghề → đối sánh → quyết định', 'Bốc thăm', 'Hỏi bạn'], 1, 'Quy trình chọn nghề có hệ thống.'),
    Q('Khám phá nghề?', ['Chỉ đọc', 'Đọc, hỏi người làm nghề, thử nghiệm', 'Chỉ xem tên nghề trên danh sách trường ĐH', 'Không cần'], 1, 'Đa cách khám phá.'),
    Q('Job shadowing?', ['Phỏng vấn', 'Đi theo quan sát người làm nghề 1-2 ngày', 'Xem video review nghề trên YouTube', 'Học nghề'], 1, 'Shadowing giúp hiểu nghề thực tế.'),
    Q('Khi không chắc?', ['Tham vấn chuyên gia hướng nghiệp', 'Đợi đến lớp 12 mới quyết định', 'Chọn ngành nào điểm chuẩn thấp nhất', 'Bốc thăm'], 0, 'Tham vấn chuyên gia rất hữu ích.'),
    Q('Quyết định nghề?', ['Chọn theo nghề bố mẹ đang làm', 'Chọn nghề có thu nhập cao nhất', 'Bạn chọn', 'Dựa năng lực + sở thích + cơ hội + giá trị bản thân'], 3, 'Quyết định cần cân nhắc đa yếu tố.'),
  ]),

  M(11, 'Sức khoẻ tâm lý tuổi dậy thì', [
    Q('Tuổi dậy thì có?', ['Chỉ cơ thể', 'Thay đổi cơ thể + cảm xúc + tâm lý', 'Chỉ tâm lý', 'Chỉ thay đổi chiều cao và cân nặng'], 1, 'Dậy thì là giai đoạn nhiều thay đổi.'),
    Q('Cảm xúc dao động?', ['Bệnh lý cần đi khám tâm thần', 'Lỗi tính cách cần thay đổi', 'Dấu hiệu yếu đuối phải khắc phục', 'Bình thường, do hormone'], 3, 'Dao động cảm xúc do hormone là tự nhiên.'),
    Q('Khi buồn kéo dài?', ['Im lặng chịu', 'Có thể là dấu hiệu trầm cảm, cần tâm sự + tìm giúp đỡ', 'Mặc kệ', 'Cố gắng tự giải quyết một mình'], 1, 'Buồn kéo dài cần được hỗ trợ.'),
    Q('Tự chăm sóc tâm lý?', ['Học và làm bài liên tục không nghỉ', 'Ngủ đủ, vận động, ăn uống, hobby, kết nối xã hội', 'Cô lập', 'Không cần'], 1, 'Self-care nhiều mặt.'),
    Q('Khi cần giúp đỡ tâm lý?', ['Gặp tư vấn tâm lý trường, gia đình, đường dây nóng', 'Tự uống thuốc bổ não cho khỏe', 'Im lặng', 'Tự đọc sách self-help và giải quyết một mình'], 0, 'Có nhiều nguồn hỗ trợ tâm lý.'),
  ]),

  M(12, 'Ôn tập + Đánh giá HK1', [
    Q('SMART là?', ['Simple, Modern, Active, Real, Top', 'Strong, Measurable, Ambitious, Right, Timely', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Smart, Meaningful, Ambitious, Reliable, Tested'], 2, '5 tiêu chí mục tiêu SMART.'),
    Q('Pomodoro?', ['25 phút làm + 5 phút nghỉ', '60 phút', '50 phút làm + 10 phút nghỉ', '10 phút'], 0, 'Pomodoro Technique.'),
    Q('RIASEC số nhóm?', ['4 nhóm', '7 nhóm', '6 nhóm', '5 nhóm'], 2, 'R-I-A-S-E-C có 6 nhóm.'),
    Q('Big Five số yếu tố?', ['6', '4', '5 yếu tố OCEAN', '3'], 2, 'Big Five = 5 yếu tố.'),
    Q('Kỹ thuật thở giảm stress?', ['Nín thở', '4-7-8', 'Thở gấp', 'Hít vào thật nhanh, thở ra thật mạnh'], 1, 'Thở 4-7-8 hiệu quả.'),
  ]),

  M(13, 'Trải nghiệm thực tế — Volunteer', [
    Q('Volunteer (tình nguyện) là?', ['Đóng góp công sức không vì lương', 'Đi làm thuê', 'Đi làm thêm để có thêm thu nhập', 'Bắt buộc'], 0, 'Tình nguyện vì cộng đồng, không vụ lợi.'),
    Q('Lợi ích tham gia volunteer cho HS?', ['Trải nghiệm, kỹ năng, mở rộng quan hệ, ý thức xã hội', 'Tốn thời gian', 'Không có lợi ích vì còn nhỏ', 'Chỉ để cộng điểm hồ sơ thi cử'], 0, 'Volunteer mang nhiều giá trị.'),
    Q('Hoạt động phù hợp HS lớp 9?', ['Làm việc tại công xưởng, bốc vác', 'Lái xe đưa đón người già', 'Dạy kèm em nhỏ, dọn vệ sinh, ủng hộ thiên tai', 'Việc nặng'], 2, 'Volunteer phù hợp tuổi.'),
    Q('Đăng ký volunteer ở đâu?', ['Chỉ trung tâm thương mại lớn', 'Tự lập kế hoạch và đi một mình', 'Đăng tin tìm việc trên Facebook', 'CLB Đoàn-Đội, tổ chức phi chính phủ'], 3, 'Đoàn-Đội + NGO có nhiều cơ hội.'),
  ]),

  M(14, 'Trải nghiệm thực tế — Internship (cho HS)', [
    Q('Internship là?', ['Học thuộc lý thuyết ngành nghề', 'Tham quan', 'Thực tập, làm việc thử ở môi trường thật', 'Đi làm có lương cố định hàng tháng'], 2, 'Internship giúp trải nghiệm nghề.'),
    Q('Lợi ích internship cho HS?', ['Hiểu nghề, rèn kỹ năng, mở rộng quan hệ', 'Không phù hợp với học sinh', 'Tốn nhiều tiền và thời gian', 'Chỉ dành cho sinh viên đại học'], 0, 'Internship trực tiếp trải nghiệm.'),
    Q('Ở VN, HS có thể tìm internship qua?', ['Tự liên hệ doanh nghiệp lớn', 'Người thân, trường, chương trình hè', 'Phải qua trung tâm môi giới có phí', 'Chỉ thông qua trường quốc tế'], 1, 'Nhiều kênh tìm internship.'),
    Q('Lưu ý khi internship?', ['Chỉ quan sát, không cần hỏi gì', 'Học hỏi, lễ phép, đúng giờ, hỏi câu hỏi tốt', 'Mặc kệ', 'Không học'], 1, 'Thái độ tốt quan trọng nhất.'),
  ]),

  M(15, 'Kỹ năng sống — Nấu ăn cơ bản', [
    Q('Bữa sáng đơn giản tự nấu?', ['Súp gà nấm hương 5 món hầm', 'Không thể', 'Quá phức tạp', 'Trứng ốp, mì gói, bánh mì kẹp, cháo'], 3, 'Bữa sáng đơn giản có thể tự làm.'),
    Q('An toàn khi nấu?', ['Cẩn thận với dao, bếp, nước sôi', 'Vừa nấu vừa xem điện thoại cho vui', 'Không cần', 'Mặc kệ'], 0, 'An toàn bếp là tối quan trọng.'),
    Q('Vệ sinh khi nấu?', ['Chỉ rửa tay khi xong bữa', 'Mặc kệ', 'Rửa tay, dụng cụ sạch, không nhiễm chéo', 'Không cần'], 2, 'Vệ sinh tránh ngộ độc.'),
    Q('Học công thức ở đâu?', ['Xem TikTok review món ăn rồi làm theo', 'Sách, YouTube, hỏi cha mẹ', 'Không cần', 'Tự sáng tạo công thức theo cảm tính'], 1, 'Nhiều nguồn học nấu ăn.'),
  ]),

  M(16, 'Kỹ năng sống — Giặt, gấp quần áo', [
    Q('Giặt quần áo trắng?', ['Giặt chung tất cả màu cho tiện', 'Lẫn với áo màu sậm để tiết kiệm nước', 'Riêng, không lẫn màu', 'Không cần'], 2, 'Giặt riêng tránh phai màu.'),
    Q('Nhiệt độ giặt?', ['Nóng nhất', 'Lạnh nhất', 'Tuỳ chất liệu (xem nhãn)', 'Luôn ở mức 60°C cho sạch khuẩn'], 2, 'Xem nhãn để chọn nhiệt độ phù hợp.'),
    Q('Gấp áo gọn?', ['Vò tròn rồi nhét vào tủ', 'Không gấp', 'Treo móc ngay cả áo phông', 'Phẳng phiu, theo nếp, xếp thẳng'], 3, 'Gấp gọn tiết kiệm không gian.'),
    Q('Phơi quần áo?', ['Phơi nắng gắt', 'Phơi trong phòng kín không có gió', 'Lộn trái nếu sợ bạc màu, nơi thoáng', 'Không phơi'], 2, 'Phơi đúng cách bảo vệ vải.'),
  ]),

  M(17, 'Kỹ năng sống — Quản lý tiền (Financial literacy)', [
    Q('Tiền tiêu vặt nên?', ['Để cha mẹ giữ hộ hết tiền', 'Không cần', 'Lập kế hoạch chi tiêu + tiết kiệm', 'Tiêu hết ngay'], 2, 'Quản lý tiền từ sớm.'),
    Q('Quy tắc 50-30-20?', ['50% mong muốn, 30% nhu cầu, 20% tiết kiệm', '50% nhu cầu thiết yếu, 30% mong muốn, 20% tiết kiệm', '50-50', '50% tiết kiệm, 30% đầu tư, 20% chi tiêu', '100% tiêu'], 1, 'Quy tắc 50-30-20 phổ biến.'),
    Q('Tiết kiệm có ích khi?', ['Chỉ tích trữ tiền mặt trong nhà', 'Có quỹ dự phòng, mua thứ lớn', 'Chỉ khi đã có nhiều tiền dư', 'Không cần'], 1, 'Tiết kiệm tạo an toàn tài chính.'),
    Q('Cảnh giác lừa đảo tài chính?', ['Đầu tư ngân hàng có giấy phép', 'Tin hết', 'Đa cấp, "việc nhẹ lương cao", scam online', 'Vay tiêu dùng của ngân hàng nhà nước'], 2, 'Cảnh giác để bảo vệ tiền.'),
    Q('Phương pháp ghi chép chi tiêu?', ['Nhớ trong đầu, không cần ghi', 'Không ghi', 'Ước lượng tổng cuối tháng cho nhanh', 'Sổ ghi, app, Excel đơn giản'], 3, 'Theo dõi chi tiêu là bước đầu quản lý tiền.'),
  ]),

  M(18, 'Ôn tập HK1 — Tổng hợp', [
    Q('Kỹ năng sống thiết yếu?', ['Nấu ăn, giặt, quản tiền, giao tiếp', 'Chỉ học', 'Không cần', 'Chỉ cần biết dùng điện thoại'], 0, 'Kỹ năng sống đa dạng.'),
    Q('SMART có 5 tiêu chí?', ['Sai, chỉ có 4 tiêu chí', 'Sai, có 6 tiêu chí', 'Sai, có 3 tiêu chí', 'Đúng'], 3, 'SMART = 5 tiêu chí.'),
    Q('Hướng nghiệp dùng?', ['Cảm tính nhất thời, sở thích phim ảnh', 'Tử vi, cung hoàng đạo, bói toán', 'Bốc thăm', 'RIASEC + Big Five + tự nhận thức'], 3, 'Hướng nghiệp khoa học.'),
    Q('Quản lý stress?', ['Mặc kệ', 'Uống nước tăng lực để học suốt đêm', 'Im lặng', 'Thở 4-7-8, vận động, ngủ đủ, chia sẻ'], 3, 'Nhiều cách quản lý stress.'),
    Q('Volunteer mang lại?', ['Chỉ tăng điểm rèn luyện cuối kỳ', 'Trải nghiệm + kỹ năng + ý thức xã hội', 'Lãng phí thời gian học bài', 'Gánh nặng tài chính cho gia đình'], 1, 'Volunteer rất giá trị.'),
  ]),

  // ───── HK2 — Phòng chống tệ nạn + Hoàn thiện ─────
  M(19, 'Phòng chống tệ nạn — Ma tuý', [
    Q('Ma tuý là?', ['Vô hại', 'Thuốc chữa bệnh được kê đơn', 'Chất gây nghiện, gây nghiêm trọng cho cơ thể và xã hội', 'Có ích'], 2, 'Ma tuý cực kỳ nguy hiểm.'),
    Q('Hậu quả ma tuý?', ['Giúp giảm stress hiệu quả', 'Tổn hại sức khoẻ, tâm thần, lan truyền HIV, vi phạm pháp luật', 'Chỉ ảnh hưởng đến người dùng nặng', 'Có lợi'], 1, 'Ma tuý gây nhiều hậu quả nghiêm trọng.'),
    Q('Khi bị rủ rê?', ['Hùa theo', 'Kiên quyết từ chối, báo người lớn/công an', 'Im lặng tránh xa, không nói với ai', 'Thử cho biết'], 1, 'Tuyệt đối không thử ma tuý.'),
    Q('Pháp luật về ma tuý?', ['Cho phép', 'Chỉ cấm mua bán, được dùng cá nhân', 'Cho phép cần sa y tế có đơn', 'Cấm tuyệt đối sản xuất, mua bán, sử dụng'], 3, 'Việt Nam cấm tuyệt đối.'),
    Q('Ma tuý "mới"?', ['Chỉ là chất kích thích nhẹ', 'Hợp pháp', 'Vô hại', 'Cần sa tổng hợp, "nước vui", "bùa lưỡi" cũng là ma tuý'], 3, 'Ma tuý "mới" rất tinh vi, cảnh giác cao.'),
  ]),

  M(20, 'Phòng chống tệ nạn — Cờ bạc, mại dâm', [
    Q('Cờ bạc là?', ['Vô hại', 'Có lợi', 'Trò chơi giải trí lành mạnh', 'Hoạt động ăn thua bằng tiền/của cải'], 3, 'Cờ bạc bị pháp luật cấm.'),
    Q('Cá độ online?', ['Hợp pháp', 'Đầu tư tài chính có tính rủi ro', 'Cũng là cờ bạc, bị pháp luật cấm', 'Vô hại'], 2, 'Cá độ online cũng vi phạm pháp luật.'),
    Q('Hậu quả cờ bạc?', ['Mất tiền, gia đình tan vỡ, vi phạm pháp luật', 'Có thể làm giàu nhanh chóng', 'Có lợi', 'Chỉ ảnh hưởng người chơi, không ai khác'], 0, 'Cờ bạc gây hậu quả nghiêm trọng.'),
    Q('Mại dâm bị?', ['Hợp pháp hoá để quản lý', 'Pháp luật cấm', 'Tự do nghề nghiệp cá nhân', 'Khuyến khích'], 1, 'Mại dâm là tệ nạn xã hội bị cấm.'),
    Q('Phòng tránh tệ nạn?', ['Thử một lần cho biết rồi tránh', 'Chỉ tham gia khi có người lớn dẫn', 'Sống lành mạnh, biết "không", chọn bạn tốt, mục tiêu rõ', 'Mặc kệ'], 2, 'Phòng tránh từ bên trong.'),
  ]),

  M(21, 'Phòng chống bạo lực học đường', [
    Q('Bạo lực học đường gồm?', ['Chỉ đánh nhau', 'Chỉ hành vi đánh nhau gây thương tích', 'Vật lý + tinh thần + mạng (cyberbullying)', 'Chỉ chửi'], 2, 'BLHĐ đa dạng hình thức.'),
    Q('Khi bị bạo lực?', ['Chuyển trường để tránh đối mặt', 'Im lặng', 'Báo thầy cô, gia đình, đường dây nóng', 'Trả đũa'], 2, 'Không im lặng; báo người lớn tin cậy.'),
    Q('Khi chứng kiến?', ['Quay phim đăng mạng', 'Hùa theo', 'Đứng xem cho biết chuyện gì', 'Báo người lớn, không hùa theo'], 3, 'Đứng về phía nạn nhân.'),
    Q('Cyberbullying?', ['Vô hại', 'Chỉ comment đùa giỡn, không hại', 'Cách kết bạn online phổ biến', 'Bắt nạt qua mạng, hành hung tâm lý'], 3, 'Cyberbullying gây hậu quả nghiêm trọng.'),
    Q('Đường dây tư vấn?', ['115 — Cấp cứu y tế', '111 — Tổng đài bảo vệ trẻ em', '113', '114'], 1, '111 là tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  M(22, 'Tình bạn — Tình yêu tuổi học trò', [
    Q('Tình bạn đẹp dựa trên?', ['Lợi dụng', 'Hùa theo mọi việc bạn làm', 'Hời hợt', 'Tôn trọng, tin cậy, chia sẻ'], 3, 'Tình bạn chân thành cần 3 yếu tố.'),
    Q('Tình yêu tuổi học trò?', ['Cảm xúc tự nhiên, nhưng cần ưu tiên học tập', 'Phải né tránh hoàn toàn để học tốt', 'Tự do hoàn toàn', 'Bị cấm'], 0, 'Tình yêu tuổi học sinh cần cân bằng.'),
    Q('Khi có rung động?', ['Bình thường, không quá tự ti hoặc bốc đồng', 'Tỏ tình ngay để không bỏ lỡ', 'Mặc kệ', 'Hoảng loạn'], 0, 'Rung động tuổi mới lớn là tự nhiên.'),
    Q('Không nên?', ['Đi chơi nhóm', 'Có quan hệ tình dục sớm, chia sẻ ảnh nhạy cảm online', 'Tặng quà giá trị lớn cho bạn', 'Học chăm'], 1, 'Cần biết giới hạn an toàn.'),
    Q('Khi gặp khó khăn cảm xúc?', ['Mặc kệ', 'Đăng status úp mở lên mạng xã hội', 'Tâm sự với người tin cậy, không tự cô lập', 'Im lặng'], 2, 'Chia sẻ giúp giải toả.'),
  ]),

  M(23, 'Giao tiếp hiệu quả', [
    Q('Lắng nghe chủ động?', ['Gật đầu liên tục cho có lệ', 'Vừa nghe vừa làm việc khác', 'Mặc kệ', 'Tập trung, không cắt lời, hỏi để hiểu rõ'], 3, 'Active listening là kỹ năng quan trọng.'),
    Q('Giao tiếp phi ngôn ngữ?', ['Ánh mắt, cử chỉ, tư thế', 'Tin nhắn văn bản và email', 'Giọng nói qua điện thoại', 'Chỉ lời'], 0, 'Body language chiếm phần lớn giao tiếp.'),
    Q('I-message?', ['Đổ lỗi', '"Tôi cảm thấy..." thay vì "Bạn luôn..."', 'Nói xa xôi để bạn tự hiểu', 'Im lặng'], 1, 'I-message giảm xung đột.'),
    Q('Khi bất đồng?', ['Cãi nhau', 'Ai to tiếng hơn thì thắng', 'Im lặng', 'Lắng nghe + tìm điểm chung + giải pháp win-win'], 3, 'Giải quyết xung đột tích cực.'),
    Q('Giao tiếp với người lớn?', ['Lễ phép, rõ ràng, tự tin', 'Nói trống không cho thân mật', 'Mặc kệ', 'Cúi đầu, không dám nhìn mặt'], 0, 'Lễ phép + tự tin.'),
  ]),

  M(24, 'Tự lập + Trách nhiệm gia đình', [
    Q('Tự lập là?', ['Từ chối mọi sự giúp đỡ', 'Tự làm việc của mình, không phụ thuộc', 'Né tránh trách nhiệm gia đình', 'Phụ thuộc'], 1, 'Tự lập là kỹ năng quan trọng.'),
    Q('Trách nhiệm trong gia đình?', ['Mặc kệ', 'Chỉ tập trung học, không cần làm gì khác', 'Giúp việc nhà, quan tâm cha mẹ, học giỏi', 'Đòi hỏi'], 2, 'HS có trách nhiệm với gia đình.'),
    Q('Khi cha mẹ vất vả?', ['Quan tâm, giúp đỡ, không đòi hỏi quá nhiều', 'Đòi nhiều', 'Đợi cha mẹ nhờ mới làm', 'Mặc kệ'], 0, 'Hiểu và chia sẻ với cha mẹ.'),
    Q('Mâu thuẫn với cha mẹ?', ['Cãi nhau', 'Bình tĩnh trò chuyện, không cãi gắt', 'Bỏ đi để cha mẹ tự suy nghĩ', 'Im lặng giận'], 1, 'Trò chuyện cởi mở giải quyết mâu thuẫn.'),
  ]),

  M(25, 'Tham gia hoạt động cộng đồng', [
    Q('Hoạt động Đoàn-Đội?', ['Mặc kệ', 'Chỉ tham gia khi bị bắt buộc', 'Tham gia tích cực, học hỏi kỹ năng', 'Tham gia chỉ để có giấy chứng nhận'], 2, 'Đoàn-Đội rèn nhiều kỹ năng.'),
    Q('Sự kiện cộng đồng?', ['Hiến máu, bảo vệ môi trường, ủng hộ thiên tai', 'Chỉ tổ chức bởi chính quyền cấp cao', 'Chỉ phù hợp với người trưởng thành', 'Không cần'], 0, 'Đóng góp cho cộng đồng đa dạng.'),
    Q('CLB sở thích?', ['Cản trở việc học chính khoá', 'Tốn thời gian', 'Mở rộng kỹ năng, gặp người cùng sở thích', 'Chỉ phù hợp với HS giỏi xuất sắc'], 2, 'CLB phát triển toàn diện.'),
    Q('Lãnh đạo CLB?', ['Áp lực tinh thần không cần thiết', 'Học kỹ năng lãnh đạo, làm việc nhóm', 'Chỉ dành cho HS giỏi nhất lớp', 'Lãng phí thời gian học chính'], 1, 'Vai trò lãnh đạo rèn kỹ năng quý.'),
  ]),

  M(26, 'Bảo vệ môi trường — Sống xanh', [
    Q('Sống xanh là?', ['Sinh hoạt thân thiện với môi trường', 'Phong cách sống chỉ ăn thực vật', 'Chỉ mua sản phẩm nhập khẩu cao cấp', 'Tốn kém'], 0, 'Sống xanh là xu thế toàn cầu.'),
    Q('3R?', ['3 trả lời', 'Reduce – Reuse – Recycle', 'Reduce, Renew, Restore', 'Repair, Replace, Remove'], 1, '3R là nguyên tắc bảo vệ môi trường.'),
    Q('Việc HS có thể làm?', ['Không thể', 'Tiết kiệm điện-nước, phân loại rác, hạn chế nhựa dùng 1 lần', 'Chỉ mua sản phẩm có nhãn \'xanh\'', 'Mặc kệ'], 1, 'HS góp phần bảo vệ môi trường.'),
    Q('Biến đổi khí hậu?', ['Vấn đề toàn cầu, do hoạt động con người', 'Chỉ ảnh hưởng đến vùng cực', 'Tự nhiên', 'Sẽ tự khắc phục trong 10 năm tới'], 0, 'BĐKH có nguyên nhân nhân tạo lớn.'),
    Q('Carbon footprint?', ['Dấu chân', 'Diện tích đất bị ô nhiễm hoá chất', 'Lượng CO₂ thải ra từ hoạt động cá nhân', 'Vết chân để lại trên cát ven biển'], 2, 'Carbon footprint đo tác động cá nhân.'),
  ]),

  M(27, 'Tổ chức công việc cá nhân', [
    Q('Lập kế hoạch tuần?', ['Làm việc theo cảm hứng, nhớ đến đâu làm đó', 'Không cần', 'Liệt kê việc, ưu tiên, phân bổ thời gian', 'Mặc kệ'], 2, 'Kế hoạch tuần tăng năng suất.'),
    Q('Bullet journal?', ['Sổ ghi chú có cấu trúc, kết hợp todo + nhật ký', 'Loại đạn dùng trong súng bắn giấy', 'Sổ vẽ tranh dạng truyện tranh', 'Phương pháp ghi chép quá mất thời gian'], 0, 'BuJo là phương pháp organize phổ biến.'),
    Q('App quản lý công việc?', ['Notion, Todoist, Google Calendar', 'Microsoft Word soạn văn bản', 'Zalo, Messenger nhắn nhóm', 'Excel làm bảng tính số liệu'], 0, 'Nhiều app hỗ trợ tổ chức.'),
    Q('Đánh giá cuối tuần?', ['Nhìn lại + rút kinh nghiệm + lập kế hoạch tuần mới', 'Chỉ tổng kết điểm số đạt được', 'Bỏ qua', 'Không cần'], 0, 'Reflection cuối tuần quan trọng.'),
  ]),

  M(28, 'Đối mặt thất bại + Kiên trì', [
    Q('Thất bại là?', ['Tận thế', 'Vô vọng', 'Bằng chứng không nên tiếp tục cố gắng', 'Một phần tự nhiên của học tập và phát triển'], 3, 'Thất bại không đáng sợ.'),
    Q('Growth mindset?', ['Tin năng lực do gen quyết định hoàn toàn', 'Cố định', 'Tin rằng năng lực có thể phát triển qua nỗ lực', 'Tin chỉ thiên tài mới thành công'], 2, 'Carol Dweck — Growth mindset.'),
    Q('Khi thất bại?', ['Giấu kín, không cho ai biết', 'Phân tích nguyên nhân, rút kinh nghiệm, thử lại', 'Bỏ cuộc', 'Đổ lỗi'], 1, 'Học từ thất bại để tiến bộ.'),
    Q('Resilience (kiên cường)?', ['Khả năng phục hồi sau khó khăn', 'Sức chịu đựng vật lý cao', 'Yếu đuối', 'Vô cảm'], 0, 'Resilience là kỹ năng sống quan trọng.'),
    Q('Câu chuyện truyền cảm hứng?', ['Edison thử nghiệm bóng đèn 1000 lần', 'Newton phát hiện trọng lực ngay lần đầu', 'Bill Gates bỏ học rồi thành tỷ phú', 'Einstein luôn đạt điểm tuyệt đối ở trường'], 0, 'Edison kiên trì là tấm gương.'),
  ]),

  M(29, 'Chuẩn bị cho cấp 3 — Thông tin trường THPT', [
    Q('Tìm hiểu trường THPT cần?', ['Chỉ điểm chuẩn', 'Không cần', 'Khoảng cách từ nhà đến trường', 'Chương trình, điểm chuẩn, môi trường, cơ sở vật chất'], 3, 'Chọn trường cần thông tin đầy đủ.'),
    Q('Các loại trường THPT?', ['Công lập, chuyên, tư thục, GDTX', 'Tiểu học, THCS, THPT, đại học', 'Chỉ công lập', 'Công lập, dân lập, quốc tế song ngữ'], 0, 'Nhiều loại trường THPT.'),
    Q('Trường chuyên có?', ['Chỉ dành cho con cán bộ', 'Bình thường', 'Không có gì đặc biệt', 'Lớp chuyên các môn, đầu vào cao'], 3, 'Trường chuyên có chương trình nâng cao.'),
    Q('Lựa chọn ban?', ['Trường tự sắp xếp theo điểm thi', 'Chỉ 1 ban', 'Chỉ ban A khối tự nhiên', 'Ban KHTN, KHXH, hoặc tự nhiên + xã hội tuỳ chương trình mới'], 3, 'CT GDPT 2018: tự chọn môn linh hoạt.'),
  ]),

  M(30, 'Kế hoạch học tập trung – dài hạn', [
    Q('Kế hoạch ngắn hạn?', ['Cả cuộc đời sự nghiệp', '3 đến 5 năm sắp tới', 'Tuần, tháng, học kỳ', 'Cả năm học 36 tuần'], 2, 'Ngắn hạn cụ thể.'),
    Q('Kế hoạch dài hạn?', ['Không cần', 'Năm, 5 năm, 10 năm', 'Một buổi học cụ thể', 'Một tuần học tiếp theo'], 1, 'Dài hạn định hướng lớn.'),
    Q('Kết nối ngắn + dài hạn?', ['Mục tiêu lớn → chia nhỏ thành bước hành động', 'Bắt đầu từ việc nhỏ rồi mới nghĩ lớn', 'Không cần', 'Riêng biệt'], 0, 'Top-down planning.'),
    Q('Review kế hoạch?', ['Lập một lần và giữ nguyên cả năm', 'Không cần xem lại đến khi xong mục tiêu', 'Cứng nhắc', 'Định kỳ điều chỉnh theo thực tế'], 3, 'Linh hoạt điều chỉnh kế hoạch.'),
    Q('Vision board?', ['Bảng ghi chép chi tiêu hàng ngày', 'Sơ đồ tổ chức công ty', 'Tranh vẽ tự do không có chủ đề', 'Hình ảnh trực quan về mục tiêu'], 3, 'Vision board giúp duy trì động lực.'),
  ]),

  M(31, 'Suy nghĩ tích cực + Lòng biết ơn', [
    Q('Positive thinking?', ['Tập trung mặt tích cực, học từ tiêu cực', 'Bỏ qua thực tế', 'Chỉ nghĩ đến mặt tích cực, lờ tiêu cực', 'Mê tín'], 0, 'Positive thinking thực tế và có ích.'),
    Q('Lòng biết ơn (gratitude)?', ['Cảm kích những điều tốt đẹp', 'Không cần', 'Đòi hỏi', 'Hài lòng với mọi thứ, không phấn đấu'], 0, 'Gratitude tăng hạnh phúc.'),
    Q('Gratitude journal?', ['Ghi chép danh sách việc cần làm', 'Viết 3 điều biết ơn mỗi ngày', 'Không cần', 'Nhật ký than thở chuyện buồn'], 1, 'Thói quen tăng tích cực.'),
    Q('Self-talk tích cực?', ['Tự trách mình mỗi khi mắc lỗi', 'Nói với mình lời động viên', 'Chê bai', 'So sánh mình với bạn giỏi hơn'], 1, 'Self-talk ảnh hưởng tâm lý.'),
    Q('Khi gặp khó?', ['Tự nhủ \'Mình thật vô dụng\'', 'Tự nhủ "Mình có thể học từ điều này"', 'Bỏ cuộc', 'Đổ lỗi cho hoàn cảnh và người khác'], 1, 'Reframing tạo động lực.'),
  ]),

  M(32, 'Kỹ năng số — Sử dụng công cụ học tập', [
    Q('Google Workspace cho HS?', ['Chỉ có công cụ trả phí giáo viên', 'Docs, Sheets, Slides, Drive, Meet', 'Chỉ Gmail', 'Chỉ Google Tìm kiếm và YouTube'], 1, 'Google Workspace miễn phí cho HS.'),
    Q('Note app?', ['Microsoft Excel cho bảng tính', 'Microsoft Word cho văn bản dài', 'Notion, Evernote, OneNote', 'Google Calendar lịch hẹn'], 2, 'Note apps hỗ trợ học tập.'),
    Q('Quizlet, Anki?', ['Trang mạng xã hội chia sẻ ảnh', 'Game giải trí giết thời gian', 'App flashcard để học từ vựng, kiến thức', 'Website xem phim miễn phí'], 2, 'Flashcard apps dùng spaced repetition.'),
    Q('Khan Academy?', ['Trang web chỉ dành cho người Mỹ', 'Khóa học lập trình có học phí cao', 'YouTube giải trí', 'Khoá học miễn phí về Toán, KH, Lịch sử...'], 3, 'Khan Academy chất lượng cao, miễn phí.'),
    Q('AI hỗ trợ học tập?', ['Gian lận', 'Cấm tuyệt đối vì làm HS lười', 'Sao chép nguyên văn bài AI trả lời', 'Dùng có đạo đức: gợi ý, giải thích, không thay tư duy'], 3, 'Dùng AI đúng cách.'),
  ]),

  M(33, 'Ôn tập HK2 — Tổng hợp', [
    Q('Phòng tránh tệ nạn?', ['Tránh xa toàn bộ bạn bè cùng lớp', 'Sống lành mạnh, biết "không", chọn bạn tốt', 'Mặc kệ', 'Thử một lần cho biết để miễn dịch'], 1, 'Phòng tránh chủ động.'),
    Q('Giao tiếp hiệu quả?', ['Im lặng', 'Nói thật to và nhanh để được chú ý', 'Tranh luận đến khi mình thắng', 'Lắng nghe + I-message + body language'], 3, 'Giao tiếp đa kỹ năng.'),
    Q('Growth mindset?', ['Tin số phận đã định sẵn từ khi sinh', 'Tin chỉ học giỏi mới có giá trị', 'Cố định', 'Năng lực phát triển qua nỗ lực'], 3, 'Growth mindset của Dweck.'),
    Q('Sống xanh — 3R?', ['Reduce, Renew, Restore', 'Run-Read-Rest', 'Refuse, Reduce, Reset', 'Reduce-Reuse-Recycle'], 3, '3R bảo vệ môi trường.'),
    Q('Đường dây bảo vệ trẻ em?', ['113', '115', '114', '111'], 3, '111 là tổng đài quốc gia.'),
  ]),

  M(34, 'Tổng kết — Kỹ năng sống suốt đời', [
    Q('Kỹ năng sống quan trọng nhất?', ['Chỉ học thật giỏi để có việc lương cao', 'Có bằng cấp càng nhiều càng tốt', 'Học suốt đời, thích ứng, giao tiếp, tự chăm sóc', 'Một kỹ năng'], 2, 'Kỹ năng sống đa dạng và liên kết.'),
    Q('21st century skills?', ['Học thuộc', 'Đọc hiểu, viết tay đẹp, tính nhẩm', 'Sử dụng máy tính bỏ túi và smartphone', 'Tư duy phản biện, sáng tạo, giao tiếp, hợp tác'], 3, '4C skills cho thế kỷ 21.'),
    Q('Sức khoẻ toàn diện?', ['Chỉ thể chất khoẻ mạnh là đủ', 'Chỉ thể chất', 'Có nhiều tiền và địa vị xã hội', 'Thể chất + tinh thần + xã hội'], 3, 'WHO định nghĩa sức khoẻ toàn diện.'),
    Q('Hạnh phúc lâu dài đến từ?', ['Quan hệ, ý nghĩa, đóng góp, biết ơn', 'May mắn ngẫu nhiên không thể kiểm soát', 'Thu nhập càng cao càng hạnh phúc', 'Sở hữu nhiều tài sản vật chất'], 0, 'Hạnh phúc bền dựa trên nhiều trụ cột.'),
    Q('Hành trình học hỏi?', ['Đến đại học', 'Suốt đời, không dừng ở tốt nghiệp', 'Đến lớp 12', 'Khi đã có việc làm ổn định'], 1, 'Lifelong learning là mindset.'),
  ]),

  M(35, 'Kết thúc cấp 2 — Chia tay và tiếp tục', [
    Q('Lễ tri ân thầy cô + bạn bè?', ['Tổ chức linh đình tốn kém', 'Không cần', 'Thể hiện lòng biết ơn + giữ kỷ niệm', 'Mặc kệ'], 2, 'Tri ân là nét đẹp văn hoá.'),
    Q('Lưu giữ kỷ niệm?', ['Album ảnh, sổ lưu bút, hộp kỷ niệm', 'Lãng phí thời gian học hành', 'Không cần', 'Xoá hết cho gọn không gian'], 0, 'Lưu giữ kỷ niệm có ý nghĩa.'),
    Q('Giữ liên lạc bạn bè?', ['Chỉ giữ vài bạn thân nhất', 'Đợi bạn chủ động liên hệ trước', 'Cắt đứt', 'Qua mạng xã hội + gặp định kỳ'], 3, 'Tình bạn cấp 2 có thể bền lâu.'),
    Q('Sẵn sàng cho cấp 3?', ['Lo lắng', 'Hoảng loạn', 'Lo lắng vì chương trình khó hơn', 'Tự tin, có mục tiêu, kỹ năng tự học'], 3, 'Chuẩn bị tinh thần cho hành trình mới.'),
    Q('Lời chúc cho hành trình tiếp theo?', ['Tiếp tục học, sống có ý nghĩa, hạnh phúc', 'Mặc kệ', 'Bỏ cuộc', 'Đi làm kiếm tiền sớm cho khoẻ'], 0, 'Chúc nhau hành trình tốt đẹp.'),
  ]),
];

export const S9HDTN_SCENARIOS = indexBy(S9HDTN_WEEKS);
