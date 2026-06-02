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
    Q('SWOT bản thân gồm?', ['Strengths, Weaknesses, Opportunities, Threats', 'SOS', 'SMART', 'STAR'], 0, 'SWOT analysis cho bản thân.'),
    Q('Strengths là?', ['Điểm mạnh', 'Điểm yếu', 'Cơ hội', 'Thách thức'], 0, 'S = Strengths = điểm mạnh.'),
    Q('Để biết điểm mạnh?', ['Phản chiếu kinh nghiệm + hỏi người thân + trắc nghiệm', 'Đoán', 'Bốc thăm', 'Tuỳ ý'], 0, 'Nhiều cách để khám phá bản thân.'),
    Q('Điểm yếu nên?', ['Nhận biết + cải thiện hoặc bù đắp', 'Giấu', 'Phớt lờ', 'Tự ti'], 0, 'Nhận biết điểm yếu là bước đầu phát triển.'),
  ]),

  M(2, 'Mục tiêu SMART', [
    Q('SMART viết tắt?', ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Simple, Many, Active, Real, Top', 'Tuỳ ý', 'Không có'], 0, 'SMART = 5 tiêu chí mục tiêu hiệu quả.'),
    Q('Specific là?', ['Cụ thể, rõ ràng', 'Đơn giản', 'Đặc biệt', 'Nhỏ'], 0, 'S = Specific = cụ thể.'),
    Q('Measurable là?', ['Đo lường được', 'Đơn giản', 'Khả thi', 'Lớn'], 0, 'M = đo lường được để theo dõi tiến độ.'),
    Q('Time-bound là?', ['Có thời hạn rõ ràng', 'Không thời hạn', 'Vô hạn', 'Tuỳ ý'], 0, 'T = có deadline rõ.'),
    Q('Ví dụ SMART tốt?', ['Đạt 8 điểm Toán giữa kì II, vào 31/3/2026', '"Học giỏi hơn"', 'Cố gắng', 'Tuỳ ý'], 0, 'Mục tiêu SMART rõ ràng và đo được.'),
  ]),

  M(3, 'Quản lý thời gian — Time-block', [
    Q('Time-blocking là?', ['Phân chia thời gian thành các khối cho từng công việc', 'Đếm giờ', 'Bấm giờ', 'Tuỳ ý'], 0, 'Time-block tăng năng suất.'),
    Q('Pomodoro?', ['25 phút làm + 5 phút nghỉ', '10 phút', '60 phút', 'Tuỳ ý'], 0, 'Pomodoro Technique: 25-5.'),
    Q('Ma trận Eisenhower phân loại?', ['Quan trọng / Khẩn cấp (4 ô)', 'A-B-C', 'Tuỳ ý', 'Không có'], 0, 'Eisenhower Matrix: 4 nhóm việc.'),
    Q('Ưu tiên việc nào?', ['Quan trọng + khẩn cấp; rồi quan trọng + không khẩn', 'Khẩn cấp trước', 'Dễ trước', 'Tuỳ ý'], 0, 'Quan trọng + khẩn = ưu tiên cao nhất.'),
    Q('Multitasking?', ['Giảm năng suất; nên tập trung 1 việc', 'Tăng năng suất', 'Tuỳ ý', 'Tốt'], 0, 'Nghiên cứu chứng minh multitasking phản tác dụng.'),
  ]),

  M(4, 'Kỹ năng học tập hiệu quả', [
    Q('Active recall?', ['Tự gọi lại thông tin từ trí nhớ', 'Đọc lại', 'Highlight', 'Tuỳ ý'], 0, 'Active recall mạnh hơn passive reading.'),
    Q('Spaced repetition?', ['Ôn lại theo khoảng cách tăng dần', 'Ôn liên tục', 'Ôn 1 lần', 'Tuỳ ý'], 0, 'Spaced repetition (Anki, Quizlet) tối ưu trí nhớ dài hạn.'),
    Q('Feynman technique?', ['Giải thích đơn giản như dạy người khác', 'Học thuộc', 'Đọc to', 'Tuỳ ý'], 0, 'Feynman: dạy người khác giúp hiểu sâu.'),
    Q('Mind map?', ['Sơ đồ tư duy gắn ý chính + nhánh', 'Liệt kê', 'Bảng', 'Tuỳ ý'], 0, 'Mind map giúp tổ chức ý tưởng.'),
    Q('Học vào buổi nào tốt?', ['Tuỳ chronotype; sáng + đầu chiều thường tốt', 'Chỉ đêm', 'Chỉ sáng', 'Tuỳ ý'], 0, 'Mỗi người có thời gian học tối ưu khác nhau.'),
  ]),

  M(5, 'Chuẩn bị thi vào 10 — Lộ trình', [
    Q('Bắt đầu ôn thi vào 10?', ['Từ đầu lớp 9 hoặc sớm hơn', 'Tháng 5', '1 tuần trước', 'Tuỳ ý'], 0, 'Lộ trình dài giúp ôn kỹ.'),
    Q('Môn thi vào 10 (Hà Nội)?', ['Thường có Toán, Văn, Anh + môn thứ 4', 'Chỉ Toán Văn', 'Tất cả môn', 'Tuỳ ý'], 0, 'Thường thi 3-4 môn vào 10.'),
    Q('Lộ trình ôn?', ['Củng cố kiến thức → luyện đề → tập trung điểm yếu', 'Luyện đề ngay', 'Học vẹt', 'Tuỳ ý'], 0, 'Củng cố trước, luyện đề sau.'),
    Q('Làm đề thi thử?', ['Theo lịch định kỳ, mô phỏng phòng thi', 'Không cần', 'Cuối kì', 'Tuỳ ý'], 0, 'Đề thi thử giúp làm quen áp lực.'),
    Q('Tâm lý ôn thi?', ['Bình tĩnh, kiên trì, không hoảng loạn', 'Lo lắng', 'Bỏ cuộc', 'Tuỳ ý'], 0, 'Tâm lý vững là yếu tố quan trọng.'),
  ]),

  M(6, 'Kỹ năng làm bài thi', [
    Q('Khi nhận đề?', ['Đọc toàn bộ + phân bổ thời gian từng phần', 'Làm ngay', 'Tuỳ ý', 'Bỏ qua dễ'], 0, 'Đọc + phân bổ thời gian là bước đầu.'),
    Q('Câu dễ nên?', ['Làm trước, lấy điểm chắc', 'Bỏ', 'Để sau', 'Tuỳ ý'], 0, 'Câu dễ làm trước đảm bảo điểm.'),
    Q('Khi gặp câu khó?', ['Đánh dấu, làm câu khác, quay lại', 'Bỏ luôn', 'Mất giờ với 1 câu', 'Tuỳ ý'], 0, 'Đừng kẹt 1 câu, đánh dấu rồi quay lại.'),
    Q('Trước khi nộp?', ['Kiểm tra lại toàn bộ', 'Nộp ngay', 'Tuỳ ý', 'Không cần'], 0, 'Soát lại tránh lỗi nhỏ.'),
    Q('Trắc nghiệm — câu không biết?', ['Loại trừ đáp án sai trước, đoán có cơ sở', 'Bỏ trống', 'Đoán bừa', 'Tuỳ ý'], 0, 'Loại trừ giúp đoán tốt hơn.'),
  ]),

  M(7, 'Quản lý stress thi cử', [
    Q('Stress là?', ['Phản ứng tâm-sinh khi đối mặt áp lực', 'Bệnh', 'Yếu đuối', 'Tuỳ ý'], 0, 'Stress là phản ứng tự nhiên.'),
    Q('Stress có thể?', ['Có lợi (giúp tập trung) hoặc có hại (mất ngủ, lo lắng)', 'Chỉ hại', 'Chỉ lợi', 'Tuỳ ý'], 0, 'Stress vừa phải giúp tập trung; quá mức gây hại.'),
    Q('Kỹ thuật thở 4-7-8?', ['Hít 4s – nín 7s – thở 8s', 'Hít sâu mãi', '4-4-4', 'Tuỳ ý'], 0, 'Thở 4-7-8 giúp giảm căng thẳng.'),
    Q('Khi quá lo lắng?', ['Tâm sự với người tin cậy, vận động, ngủ đủ', 'Im lặng chịu', 'Uống cafe', 'Tuỳ ý'], 0, 'Chia sẻ + vận động + ngủ đủ giúp giảm lo lắng.'),
    Q('Ngủ trước thi?', ['Ngủ đủ 7-8 tiếng', 'Thức cả đêm', '3 tiếng', 'Tuỳ ý'], 0, 'Ngủ đủ giúp não hoạt động tốt nhất.'),
  ]),

  M(8, 'Hướng nghiệp — RIASEC (Holland)', [
    Q('RIASEC viết tắt?', ['Realistic, Investigative, Artistic, Social, Enterprising, Conventional', 'A-B-C', 'Tuỳ ý', 'Không có'], 0, '6 nhóm tính cách nghề nghiệp của John Holland.'),
    Q('Realistic phù hợp?', ['Nghề thực tiễn, kỹ thuật, ngoài trời', 'Văn phòng', 'Nghệ thuật', 'Tuỳ ý'], 0, 'R thích làm việc tay chân, kỹ thuật.'),
    Q('Investigative phù hợp?', ['Nghiên cứu, phân tích, khoa học', 'Bán hàng', 'Vận động', 'Tuỳ ý'], 0, 'I thích tư duy, nghiên cứu.'),
    Q('Artistic phù hợp?', ['Sáng tạo, nghệ thuật, tự do', 'Văn phòng', 'Nông nghiệp', 'Tuỳ ý'], 0, 'A thích sáng tạo + tự do.'),
    Q('Social phù hợp?', ['Giúp đỡ, dạy học, tư vấn', 'Cô đơn', 'Tính toán', 'Tuỳ ý'], 0, 'S thích làm việc với người.'),
    Q('Enterprising phù hợp?', ['Lãnh đạo, kinh doanh, thuyết phục', 'Ẩn dật', 'Vẽ', 'Tuỳ ý'], 0, 'E thích lãnh đạo, kinh doanh.'),
    Q('Conventional phù hợp?', ['Quy củ, kế toán, văn phòng', 'Phá cách', 'Tuỳ ý', 'Vô tổ chức'], 0, 'C thích trật tự, quy chuẩn.'),
  ]),

  M(9, 'Hướng nghiệp — Big Five (OCEAN)', [
    Q('Big Five viết tắt?', ['Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'A-B-C-D-E', 'Tuỳ ý', 'Không có'], 0, 'OCEAN là 5 nét tính cách lớn.'),
    Q('Openness cao?', ['Cởi mở, thích cái mới, sáng tạo', 'Bảo thủ', 'Tuỳ ý', 'Đóng'], 0, 'O cao = sáng tạo, cởi mở.'),
    Q('Conscientiousness cao?', ['Có trách nhiệm, kỷ luật, tổ chức', 'Bừa bộn', 'Vô tổ chức', 'Tuỳ ý'], 0, 'C cao = kỷ luật, đáng tin.'),
    Q('Extraversion cao?', ['Hướng ngoại, năng lượng từ người khác', 'Hướng nội', 'Tuỳ ý', 'Cô đơn'], 0, 'E cao = hướng ngoại.'),
    Q('Agreeableness cao?', ['Thân thiện, hợp tác, đồng cảm', 'Khó tính', 'Tuỳ ý', 'Đối đầu'], 0, 'A cao = dễ hợp tác.'),
    Q('Neuroticism cao?', ['Dễ lo lắng, nhạy cảm cảm xúc', 'Bình thản', 'Vô cảm', 'Tuỳ ý'], 0, 'N cao = dễ stress.'),
  ]),

  M(10, 'Định hướng nghề — Kết hợp tự nhận thức', [
    Q('Bước chọn nghề?', ['Tự nhận thức → khám phá nghề → đối sánh → quyết định', 'Tuỳ ý', 'Hỏi bạn', 'Bốc thăm'], 0, 'Quy trình chọn nghề có hệ thống.'),
    Q('Khám phá nghề?', ['Đọc, hỏi người làm nghề, thử nghiệm', 'Chỉ đọc', 'Tuỳ ý', 'Không cần'], 0, 'Đa cách khám phá.'),
    Q('Job shadowing?', ['Đi theo quan sát người làm nghề 1-2 ngày', 'Học nghề', 'Phỏng vấn', 'Tuỳ ý'], 0, 'Shadowing giúp hiểu nghề thực tế.'),
    Q('Khi không chắc?', ['Tham vấn chuyên gia hướng nghiệp', 'Bốc thăm', 'Tuỳ ý', 'Đoán'], 0, 'Tham vấn chuyên gia rất hữu ích.'),
    Q('Quyết định nghề?', ['Dựa năng lực + sở thích + cơ hội + giá trị bản thân', 'Tiền', 'Bạn chọn', 'Tuỳ ý'], 0, 'Quyết định cần cân nhắc đa yếu tố.'),
  ]),

  M(11, 'Sức khoẻ tâm lý tuổi dậy thì', [
    Q('Tuổi dậy thì có?', ['Thay đổi cơ thể + cảm xúc + tâm lý', 'Chỉ cơ thể', 'Chỉ tâm lý', 'Không có'], 0, 'Dậy thì là giai đoạn nhiều thay đổi.'),
    Q('Cảm xúc dao động?', ['Bình thường, do hormone', 'Bệnh', 'Lỗi', 'Tuỳ ý'], 0, 'Dao động cảm xúc do hormone là tự nhiên.'),
    Q('Khi buồn kéo dài?', ['Có thể là dấu hiệu trầm cảm, cần tâm sự + tìm giúp đỡ', 'Im lặng chịu', 'Mặc kệ', 'Tuỳ ý'], 0, 'Buồn kéo dài cần được hỗ trợ.'),
    Q('Tự chăm sóc tâm lý?', ['Ngủ đủ, vận động, ăn uống, hobby, kết nối xã hội', 'Cô lập', 'Tuỳ ý', 'Không cần'], 0, 'Self-care nhiều mặt.'),
    Q('Khi cần giúp đỡ tâm lý?', ['Gặp tư vấn tâm lý trường, gia đình, đường dây nóng', 'Im lặng', 'Tự xử', 'Tuỳ ý'], 0, 'Có nhiều nguồn hỗ trợ tâm lý.'),
  ]),

  M(12, 'Ôn tập + Đánh giá HK1', [
    Q('SMART là?', ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Tuỳ ý', 'Không có', 'A-B-C'], 0, '5 tiêu chí mục tiêu SMART.'),
    Q('Pomodoro?', ['25 phút làm + 5 phút nghỉ', '60 phút', '10 phút', 'Tuỳ ý'], 0, 'Pomodoro Technique.'),
    Q('RIASEC số nhóm?', ['6 nhóm', '5 nhóm', '4 nhóm', '7 nhóm'], 0, 'R-I-A-S-E-C có 6 nhóm.'),
    Q('Big Five số yếu tố?', ['5 yếu tố OCEAN', '4', '6', '3'], 0, 'Big Five = 5 yếu tố.'),
    Q('Kỹ thuật thở giảm stress?', ['4-7-8', 'Nín thở', 'Thở gấp', 'Tuỳ ý'], 0, 'Thở 4-7-8 hiệu quả.'),
  ]),

  M(13, 'Trải nghiệm thực tế — Volunteer', [
    Q('Volunteer (tình nguyện) là?', ['Đóng góp công sức không vì lương', 'Đi làm thuê', 'Bắt buộc', 'Tuỳ ý'], 0, 'Tình nguyện vì cộng đồng, không vụ lợi.'),
    Q('Lợi ích tham gia volunteer cho HS?', ['Trải nghiệm, kỹ năng, mở rộng quan hệ, ý thức xã hội', 'Vô bổ', 'Tốn thời gian', 'Tuỳ ý'], 0, 'Volunteer mang nhiều giá trị.'),
    Q('Hoạt động phù hợp HS lớp 9?', ['Dạy kèm em nhỏ, dọn vệ sinh, ủng hộ thiên tai', 'Việc nặng', 'Tuỳ ý', 'Không có'], 0, 'Volunteer phù hợp tuổi.'),
    Q('Đăng ký volunteer ở đâu?', ['CLB Đoàn-Đội, tổ chức phi chính phủ', 'Tự đi', 'Tuỳ ý', 'Không có'], 0, 'Đoàn-Đội + NGO có nhiều cơ hội.'),
  ]),

  M(14, 'Trải nghiệm thực tế — Internship (cho HS)', [
    Q('Internship là?', ['Thực tập, làm việc thử ở môi trường thật', 'Học', 'Tham quan', 'Tuỳ ý'], 0, 'Internship giúp trải nghiệm nghề.'),
    Q('Lợi ích internship cho HS?', ['Hiểu nghề, rèn kỹ năng, mở rộng quan hệ', 'Vô bổ', 'Tuỳ ý', 'Tốn'], 0, 'Internship trực tiếp trải nghiệm.'),
    Q('Ở VN, HS có thể tìm internship qua?', ['Người thân, trường, chương trình hè', 'Tự đi', 'Tuỳ ý', 'Không có'], 0, 'Nhiều kênh tìm internship.'),
    Q('Lưu ý khi internship?', ['Học hỏi, lễ phép, đúng giờ, hỏi câu hỏi tốt', 'Tuỳ ý', 'Mặc kệ', 'Không học'], 0, 'Thái độ tốt quan trọng nhất.'),
  ]),

  M(15, 'Kỹ năng sống — Nấu ăn cơ bản', [
    Q('Bữa sáng đơn giản tự nấu?', ['Trứng ốp, mì gói, bánh mì kẹp, cháo', 'Quá phức tạp', 'Không thể', 'Tuỳ ý'], 0, 'Bữa sáng đơn giản có thể tự làm.'),
    Q('An toàn khi nấu?', ['Cẩn thận với dao, bếp, nước sôi', 'Tuỳ ý', 'Không cần', 'Mặc kệ'], 0, 'An toàn bếp là tối quan trọng.'),
    Q('Vệ sinh khi nấu?', ['Rửa tay, dụng cụ sạch, không nhiễm chéo', 'Tuỳ ý', 'Không cần', 'Mặc kệ'], 0, 'Vệ sinh tránh ngộ độc.'),
    Q('Học công thức ở đâu?', ['Sách, YouTube, hỏi cha mẹ', 'Đoán', 'Tuỳ ý', 'Không cần'], 0, 'Nhiều nguồn học nấu ăn.'),
  ]),

  M(16, 'Kỹ năng sống — Giặt, gấp quần áo', [
    Q('Giặt quần áo trắng?', ['Riêng, không lẫn màu', 'Lẫn', 'Tuỳ ý', 'Không cần'], 0, 'Giặt riêng tránh phai màu.'),
    Q('Nhiệt độ giặt?', ['Tuỳ chất liệu (xem nhãn)', 'Nóng nhất', 'Lạnh nhất', 'Tuỳ ý'], 0, 'Xem nhãn để chọn nhiệt độ phù hợp.'),
    Q('Gấp áo gọn?', ['Phẳng phiu, theo nếp, xếp thẳng', 'Vò', 'Tuỳ ý', 'Không gấp'], 0, 'Gấp gọn tiết kiệm không gian.'),
    Q('Phơi quần áo?', ['Lộn trái nếu sợ bạc màu, nơi thoáng', 'Phơi nắng gắt', 'Tuỳ ý', 'Không phơi'], 0, 'Phơi đúng cách bảo vệ vải.'),
  ]),

  M(17, 'Kỹ năng sống — Quản lý tiền (Financial literacy)', [
    Q('Tiền tiêu vặt nên?', ['Lập kế hoạch chi tiêu + tiết kiệm', 'Tiêu hết ngay', 'Tuỳ ý', 'Không cần'], 0, 'Quản lý tiền từ sớm.'),
    Q('Quy tắc 50-30-20?', ['50% nhu cầu thiết yếu, 30% mong muốn, 20% tiết kiệm', 'Tuỳ ý', '100% tiêu', '50-50', 'Tuỳ ý'], 0, 'Quy tắc 50-30-20 phổ biến.'),
    Q('Tiết kiệm có ích khi?', ['Có quỹ dự phòng, mua thứ lớn', 'Tuỳ ý', 'Vô bổ', 'Không cần'], 0, 'Tiết kiệm tạo an toàn tài chính.'),
    Q('Cảnh giác lừa đảo tài chính?', ['Đa cấp, "việc nhẹ lương cao", scam online', 'Tuỳ ý', 'Tin hết', 'Không có'], 0, 'Cảnh giác để bảo vệ tiền.'),
    Q('Phương pháp ghi chép chi tiêu?', ['Sổ ghi, app, Excel đơn giản', 'Đoán', 'Không ghi', 'Tuỳ ý'], 0, 'Theo dõi chi tiêu là bước đầu quản lý tiền.'),
  ]),

  M(18, 'Ôn tập HK1 — Tổng hợp', [
    Q('Kỹ năng sống thiết yếu?', ['Nấu ăn, giặt, quản tiền, giao tiếp', 'Chỉ học', 'Tuỳ ý', 'Không cần'], 0, 'Kỹ năng sống đa dạng.'),
    Q('SMART có 5 tiêu chí?', ['Đúng', 'Sai', 'Tuỳ ý', 'Không biết'], 0, 'SMART = 5 tiêu chí.'),
    Q('Hướng nghiệp dùng?', ['RIASEC + Big Five + tự nhận thức', 'Bốc thăm', 'Tuỳ ý', 'Đoán'], 0, 'Hướng nghiệp khoa học.'),
    Q('Quản lý stress?', ['Thở 4-7-8, vận động, ngủ đủ, chia sẻ', 'Im lặng', 'Tuỳ ý', 'Mặc kệ'], 0, 'Nhiều cách quản lý stress.'),
    Q('Volunteer mang lại?', ['Trải nghiệm + kỹ năng + ý thức xã hội', 'Vô bổ', 'Tuỳ ý', 'Tốn'], 0, 'Volunteer rất giá trị.'),
  ]),

  // ───── HK2 — Phòng chống tệ nạn + Hoàn thiện ─────
  M(19, 'Phòng chống tệ nạn — Ma tuý', [
    Q('Ma tuý là?', ['Chất gây nghiện, gây nghiêm trọng cho cơ thể và xã hội', 'Vô hại', 'Tuỳ ý', 'Có ích'], 0, 'Ma tuý cực kỳ nguy hiểm.'),
    Q('Hậu quả ma tuý?', ['Tổn hại sức khoẻ, tâm thần, lan truyền HIV, vi phạm pháp luật', 'Không có', 'Tuỳ ý', 'Có lợi'], 0, 'Ma tuý gây nhiều hậu quả nghiêm trọng.'),
    Q('Khi bị rủ rê?', ['Kiên quyết từ chối, báo người lớn/công an', 'Thử cho biết', 'Hùa theo', 'Tuỳ ý'], 0, 'Tuyệt đối không thử ma tuý.'),
    Q('Pháp luật về ma tuý?', ['Cấm tuyệt đối sản xuất, mua bán, sử dụng', 'Tự do', 'Tuỳ ý', 'Cho phép'], 0, 'Việt Nam cấm tuyệt đối.'),
    Q('Ma tuý "mới"?', ['Cần sa tổng hợp, "nước vui", "bùa lưỡi" cũng là ma tuý', 'Vô hại', 'Tuỳ ý', 'Hợp pháp'], 0, 'Ma tuý "mới" rất tinh vi, cảnh giác cao.'),
  ]),

  M(20, 'Phòng chống tệ nạn — Cờ bạc, mại dâm', [
    Q('Cờ bạc là?', ['Hoạt động ăn thua bằng tiền/của cải', 'Vô hại', 'Tuỳ ý', 'Có lợi'], 0, 'Cờ bạc bị pháp luật cấm.'),
    Q('Cá độ online?', ['Cũng là cờ bạc, bị pháp luật cấm', 'Hợp pháp', 'Tuỳ ý', 'Vô hại'], 0, 'Cá độ online cũng vi phạm pháp luật.'),
    Q('Hậu quả cờ bạc?', ['Mất tiền, gia đình tan vỡ, vi phạm pháp luật', 'Không có', 'Tuỳ ý', 'Có lợi'], 0, 'Cờ bạc gây hậu quả nghiêm trọng.'),
    Q('Mại dâm bị?', ['Pháp luật cấm', 'Tự do', 'Tuỳ ý', 'Khuyến khích'], 0, 'Mại dâm là tệ nạn xã hội bị cấm.'),
    Q('Phòng tránh tệ nạn?', ['Sống lành mạnh, biết "không", chọn bạn tốt, mục tiêu rõ', 'Thử', 'Tuỳ ý', 'Mặc kệ'], 0, 'Phòng tránh từ bên trong.'),
  ]),

  M(21, 'Phòng chống bạo lực học đường', [
    Q('Bạo lực học đường gồm?', ['Vật lý + tinh thần + mạng (cyberbullying)', 'Chỉ đánh nhau', 'Chỉ chửi', 'Tuỳ ý'], 0, 'BLHĐ đa dạng hình thức.'),
    Q('Khi bị bạo lực?', ['Báo thầy cô, gia đình, đường dây nóng', 'Im lặng', 'Trả đũa', 'Tuỳ ý'], 0, 'Không im lặng; báo người lớn tin cậy.'),
    Q('Khi chứng kiến?', ['Báo người lớn, không hùa theo', 'Quay phim đăng mạng', 'Hùa theo', 'Tuỳ ý'], 0, 'Đứng về phía nạn nhân.'),
    Q('Cyberbullying?', ['Bắt nạt qua mạng, hành hung tâm lý', 'Vô hại', 'Tuỳ ý', 'Vui'], 0, 'Cyberbullying gây hậu quả nghiêm trọng.'),
    Q('Đường dây tư vấn?', ['111 — Tổng đài bảo vệ trẻ em', '113', '114', 'Tuỳ ý'], 0, '111 là tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  M(22, 'Tình bạn — Tình yêu tuổi học trò', [
    Q('Tình bạn đẹp dựa trên?', ['Tôn trọng, tin cậy, chia sẻ', 'Lợi dụng', 'Tuỳ ý', 'Hời hợt'], 0, 'Tình bạn chân thành cần 3 yếu tố.'),
    Q('Tình yêu tuổi học trò?', ['Cảm xúc tự nhiên, nhưng cần ưu tiên học tập', 'Bị cấm', 'Tự do hoàn toàn', 'Tuỳ ý'], 0, 'Tình yêu tuổi học sinh cần cân bằng.'),
    Q('Khi có rung động?', ['Bình thường, không quá tự ti hoặc bốc đồng', 'Hoảng loạn', 'Mặc kệ', 'Tuỳ ý'], 0, 'Rung động tuổi mới lớn là tự nhiên.'),
    Q('Không nên?', ['Có quan hệ tình dục sớm, chia sẻ ảnh nhạy cảm online', 'Học chăm', 'Đi chơi nhóm', 'Tuỳ ý'], 0, 'Cần biết giới hạn an toàn.'),
    Q('Khi gặp khó khăn cảm xúc?', ['Tâm sự với người tin cậy, không tự cô lập', 'Im lặng', 'Tuỳ ý', 'Mặc kệ'], 0, 'Chia sẻ giúp giải toả.'),
  ]),

  M(23, 'Giao tiếp hiệu quả', [
    Q('Lắng nghe chủ động?', ['Tập trung, không cắt lời, hỏi để hiểu rõ', 'Vừa nghe vừa làm việc khác', 'Tuỳ ý', 'Mặc kệ'], 0, 'Active listening là kỹ năng quan trọng.'),
    Q('Giao tiếp phi ngôn ngữ?', ['Ánh mắt, cử chỉ, tư thế', 'Chỉ lời', 'Tuỳ ý', 'Không có'], 0, 'Body language chiếm phần lớn giao tiếp.'),
    Q('I-message?', ['"Tôi cảm thấy..." thay vì "Bạn luôn..."', 'Đổ lỗi', 'Tuỳ ý', 'Im lặng'], 0, 'I-message giảm xung đột.'),
    Q('Khi bất đồng?', ['Lắng nghe + tìm điểm chung + giải pháp win-win', 'Cãi nhau', 'Im lặng', 'Tuỳ ý'], 0, 'Giải quyết xung đột tích cực.'),
    Q('Giao tiếp với người lớn?', ['Lễ phép, rõ ràng, tự tin', 'Sợ', 'Tuỳ ý', 'Mặc kệ'], 0, 'Lễ phép + tự tin.'),
  ]),

  M(24, 'Tự lập + Trách nhiệm gia đình', [
    Q('Tự lập là?', ['Tự làm việc của mình, không phụ thuộc', 'Tuỳ ý', 'Phụ thuộc', 'Lười'], 0, 'Tự lập là kỹ năng quan trọng.'),
    Q('Trách nhiệm trong gia đình?', ['Giúp việc nhà, quan tâm cha mẹ, học giỏi', 'Mặc kệ', 'Tuỳ ý', 'Đòi hỏi'], 0, 'HS có trách nhiệm với gia đình.'),
    Q('Khi cha mẹ vất vả?', ['Quan tâm, giúp đỡ, không đòi hỏi quá nhiều', 'Mặc kệ', 'Đòi nhiều', 'Tuỳ ý'], 0, 'Hiểu và chia sẻ với cha mẹ.'),
    Q('Mâu thuẫn với cha mẹ?', ['Bình tĩnh trò chuyện, không cãi gắt', 'Cãi nhau', 'Im lặng giận', 'Tuỳ ý'], 0, 'Trò chuyện cởi mở giải quyết mâu thuẫn.'),
  ]),

  M(25, 'Tham gia hoạt động cộng đồng', [
    Q('Hoạt động Đoàn-Đội?', ['Tham gia tích cực, học hỏi kỹ năng', 'Trốn', 'Tuỳ ý', 'Mặc kệ'], 0, 'Đoàn-Đội rèn nhiều kỹ năng.'),
    Q('Sự kiện cộng đồng?', ['Hiến máu, bảo vệ môi trường, ủng hộ thiên tai', 'Vô bổ', 'Tuỳ ý', 'Không cần'], 0, 'Đóng góp cho cộng đồng đa dạng.'),
    Q('CLB sở thích?', ['Mở rộng kỹ năng, gặp người cùng sở thích', 'Vô bổ', 'Tuỳ ý', 'Tốn thời gian'], 0, 'CLB phát triển toàn diện.'),
    Q('Lãnh đạo CLB?', ['Học kỹ năng lãnh đạo, làm việc nhóm', 'Vô bổ', 'Tuỳ ý', 'Tốn'], 0, 'Vai trò lãnh đạo rèn kỹ năng quý.'),
  ]),

  M(26, 'Bảo vệ môi trường — Sống xanh', [
    Q('Sống xanh là?', ['Sinh hoạt thân thiện với môi trường', 'Tuỳ ý', 'Tốn kém', 'Khó'], 0, 'Sống xanh là xu thế toàn cầu.'),
    Q('3R?', ['Reduce – Reuse – Recycle', '3 trả lời', 'A-B-C', 'Tuỳ ý'], 0, '3R là nguyên tắc bảo vệ môi trường.'),
    Q('Việc HS có thể làm?', ['Tiết kiệm điện-nước, phân loại rác, hạn chế nhựa dùng 1 lần', 'Mặc kệ', 'Tuỳ ý', 'Không thể'], 0, 'HS góp phần bảo vệ môi trường.'),
    Q('Biến đổi khí hậu?', ['Vấn đề toàn cầu, do hoạt động con người', 'Tự nhiên', 'Tuỳ ý', 'Không có'], 0, 'BĐKH có nguyên nhân nhân tạo lớn.'),
    Q('Carbon footprint?', ['Lượng CO₂ thải ra từ hoạt động cá nhân', 'Dấu chân', 'Tuỳ ý', 'Vô bổ'], 0, 'Carbon footprint đo tác động cá nhân.'),
  ]),

  M(27, 'Tổ chức công việc cá nhân', [
    Q('Lập kế hoạch tuần?', ['Liệt kê việc, ưu tiên, phân bổ thời gian', 'Tuỳ ý', 'Không cần', 'Mặc kệ'], 0, 'Kế hoạch tuần tăng năng suất.'),
    Q('Bullet journal?', ['Sổ ghi chú có cấu trúc, kết hợp todo + nhật ký', 'Vẽ', 'Tuỳ ý', 'Vô bổ'], 0, 'BuJo là phương pháp organize phổ biến.'),
    Q('App quản lý công việc?', ['Notion, Todoist, Google Calendar', 'Word', 'Tuỳ ý', 'Excel'], 0, 'Nhiều app hỗ trợ tổ chức.'),
    Q('Đánh giá cuối tuần?', ['Nhìn lại + rút kinh nghiệm + lập kế hoạch tuần mới', 'Bỏ qua', 'Tuỳ ý', 'Không cần'], 0, 'Reflection cuối tuần quan trọng.'),
  ]),

  M(28, 'Đối mặt thất bại + Kiên trì', [
    Q('Thất bại là?', ['Một phần tự nhiên của học tập và phát triển', 'Tận thế', 'Vô vọng', 'Tuỳ ý'], 0, 'Thất bại không đáng sợ.'),
    Q('Growth mindset?', ['Tin rằng năng lực có thể phát triển qua nỗ lực', 'Cố định', 'Tuỳ ý', 'Không có'], 0, 'Carol Dweck — Growth mindset.'),
    Q('Khi thất bại?', ['Phân tích nguyên nhân, rút kinh nghiệm, thử lại', 'Bỏ cuộc', 'Đổ lỗi', 'Tuỳ ý'], 0, 'Học từ thất bại để tiến bộ.'),
    Q('Resilience (kiên cường)?', ['Khả năng phục hồi sau khó khăn', 'Yếu đuối', 'Tuỳ ý', 'Vô cảm'], 0, 'Resilience là kỹ năng sống quan trọng.'),
    Q('Câu chuyện truyền cảm hứng?', ['Edison thử nghiệm bóng đèn 1000 lần', 'Tuỳ ý', 'Không có', 'Vô bổ'], 0, 'Edison kiên trì là tấm gương.'),
  ]),

  M(29, 'Chuẩn bị cho cấp 3 — Thông tin trường THPT', [
    Q('Tìm hiểu trường THPT cần?', ['Chương trình, điểm chuẩn, môi trường, cơ sở vật chất', 'Chỉ điểm chuẩn', 'Tuỳ ý', 'Không cần'], 0, 'Chọn trường cần thông tin đầy đủ.'),
    Q('Các loại trường THPT?', ['Công lập, chuyên, tư thục, GDTX', 'Chỉ công lập', 'Tuỳ ý', 'Không có'], 0, 'Nhiều loại trường THPT.'),
    Q('Trường chuyên có?', ['Lớp chuyên các môn, đầu vào cao', 'Bình thường', 'Tuỳ ý', 'Không có gì đặc biệt'], 0, 'Trường chuyên có chương trình nâng cao.'),
    Q('Lựa chọn ban?', ['Ban KHTN, KHXH, hoặc tự nhiên + xã hội tuỳ chương trình mới', 'Chỉ 1 ban', 'Tuỳ ý', 'Không có'], 0, 'CT GDPT 2018: tự chọn môn linh hoạt.'),
  ]),

  M(30, 'Kế hoạch học tập trung – dài hạn', [
    Q('Kế hoạch ngắn hạn?', ['Tuần, tháng, học kỳ', 'Năm', 'Đời', 'Tuỳ ý'], 0, 'Ngắn hạn cụ thể.'),
    Q('Kế hoạch dài hạn?', ['Năm, 5 năm, 10 năm', 'Ngày', 'Tuỳ ý', 'Không cần'], 0, 'Dài hạn định hướng lớn.'),
    Q('Kết nối ngắn + dài hạn?', ['Mục tiêu lớn → chia nhỏ thành bước hành động', 'Tuỳ ý', 'Riêng biệt', 'Không cần'], 0, 'Top-down planning.'),
    Q('Review kế hoạch?', ['Định kỳ điều chỉnh theo thực tế', 'Cứng nhắc', 'Tuỳ ý', 'Không'], 0, 'Linh hoạt điều chỉnh kế hoạch.'),
    Q('Vision board?', ['Hình ảnh trực quan về mục tiêu', 'Vẽ', 'Tuỳ ý', 'Vô bổ'], 0, 'Vision board giúp duy trì động lực.'),
  ]),

  M(31, 'Suy nghĩ tích cực + Lòng biết ơn', [
    Q('Positive thinking?', ['Tập trung mặt tích cực, học từ tiêu cực', 'Bỏ qua thực tế', 'Tuỳ ý', 'Mê tín'], 0, 'Positive thinking thực tế và có ích.'),
    Q('Lòng biết ơn (gratitude)?', ['Cảm kích những điều tốt đẹp', 'Đòi hỏi', 'Tuỳ ý', 'Không cần'], 0, 'Gratitude tăng hạnh phúc.'),
    Q('Gratitude journal?', ['Viết 3 điều biết ơn mỗi ngày', 'Tuỳ ý', 'Không cần', 'Vô bổ'], 0, 'Thói quen tăng tích cực.'),
    Q('Self-talk tích cực?', ['Nói với mình lời động viên', 'Chê bai', 'Tuỳ ý', 'Tự ti'], 0, 'Self-talk ảnh hưởng tâm lý.'),
    Q('Khi gặp khó?', ['Tự nhủ "Mình có thể học từ điều này"', 'Bỏ cuộc', 'Tuỳ ý', 'Tự ti'], 0, 'Reframing tạo động lực.'),
  ]),

  M(32, 'Kỹ năng số — Sử dụng công cụ học tập', [
    Q('Google Workspace cho HS?', ['Docs, Sheets, Slides, Drive, Meet', 'Chỉ Gmail', 'Tuỳ ý', 'Không có'], 0, 'Google Workspace miễn phí cho HS.'),
    Q('Note app?', ['Notion, Evernote, OneNote', 'Word', 'Tuỳ ý', 'Excel'], 0, 'Note apps hỗ trợ học tập.'),
    Q('Quizlet, Anki?', ['App flashcard để học từ vựng, kiến thức', 'Game', 'Tuỳ ý', 'Vô bổ'], 0, 'Flashcard apps dùng spaced repetition.'),
    Q('Khan Academy?', ['Khoá học miễn phí về Toán, KH, Lịch sử...', 'YouTube giải trí', 'Tuỳ ý', 'Vô bổ'], 0, 'Khan Academy chất lượng cao, miễn phí.'),
    Q('AI hỗ trợ học tập?', ['Dùng có đạo đức: gợi ý, giải thích, không thay tư duy', 'Copy', 'Tuỳ ý', 'Gian lận'], 0, 'Dùng AI đúng cách.'),
  ]),

  M(33, 'Ôn tập HK2 — Tổng hợp', [
    Q('Phòng tránh tệ nạn?', ['Sống lành mạnh, biết "không", chọn bạn tốt', 'Thử', 'Tuỳ ý', 'Mặc kệ'], 0, 'Phòng tránh chủ động.'),
    Q('Giao tiếp hiệu quả?', ['Lắng nghe + I-message + body language', 'Tuỳ ý', 'Im lặng', 'Cãi'], 0, 'Giao tiếp đa kỹ năng.'),
    Q('Growth mindset?', ['Năng lực phát triển qua nỗ lực', 'Cố định', 'Tuỳ ý', 'Không có'], 0, 'Growth mindset của Dweck.'),
    Q('Sống xanh — 3R?', ['Reduce-Reuse-Recycle', 'Run-Read-Rest', 'Tuỳ ý', 'Không có'], 0, '3R bảo vệ môi trường.'),
    Q('Đường dây bảo vệ trẻ em?', ['111', '113', '114', '115'], 0, '111 là tổng đài quốc gia.'),
  ]),

  M(34, 'Tổng kết — Kỹ năng sống suốt đời', [
    Q('Kỹ năng sống quan trọng nhất?', ['Học suốt đời, thích ứng, giao tiếp, tự chăm sóc', 'Một kỹ năng', 'Tuỳ ý', 'Không có'], 0, 'Kỹ năng sống đa dạng và liên kết.'),
    Q('21st century skills?', ['Tư duy phản biện, sáng tạo, giao tiếp, hợp tác', 'Học thuộc', 'Tuỳ ý', 'Không có'], 0, '4C skills cho thế kỷ 21.'),
    Q('Sức khoẻ toàn diện?', ['Thể chất + tinh thần + xã hội', 'Chỉ thể chất', 'Tuỳ ý', 'Không có'], 0, 'WHO định nghĩa sức khoẻ toàn diện.'),
    Q('Hạnh phúc lâu dài đến từ?', ['Quan hệ, ý nghĩa, đóng góp, biết ơn', 'Tiền', 'Tuỳ ý', 'May'], 0, 'Hạnh phúc bền dựa trên nhiều trụ cột.'),
    Q('Hành trình học hỏi?', ['Suốt đời, không dừng ở tốt nghiệp', 'Đến lớp 12', 'Đến đại học', 'Tuỳ ý'], 0, 'Lifelong learning là mindset.'),
  ]),

  M(35, 'Kết thúc cấp 2 — Chia tay và tiếp tục', [
    Q('Lễ tri ân thầy cô + bạn bè?', ['Thể hiện lòng biết ơn + giữ kỷ niệm', 'Tuỳ ý', 'Không cần', 'Mặc kệ'], 0, 'Tri ân là nét đẹp văn hoá.'),
    Q('Lưu giữ kỷ niệm?', ['Album ảnh, sổ lưu bút, hộp kỷ niệm', 'Tuỳ ý', 'Vô bổ', 'Không cần'], 0, 'Lưu giữ kỷ niệm có ý nghĩa.'),
    Q('Giữ liên lạc bạn bè?', ['Qua mạng xã hội + gặp định kỳ', 'Quên', 'Tuỳ ý', 'Cắt đứt'], 0, 'Tình bạn cấp 2 có thể bền lâu.'),
    Q('Sẵn sàng cho cấp 3?', ['Tự tin, có mục tiêu, kỹ năng tự học', 'Lo lắng', 'Tuỳ ý', 'Hoảng loạn'], 0, 'Chuẩn bị tinh thần cho hành trình mới.'),
    Q('Lời chúc cho hành trình tiếp theo?', ['Tiếp tục học, sống có ý nghĩa, hạnh phúc', 'Tuỳ ý', 'Bỏ cuộc', 'Mặc kệ'], 0, 'Chúc nhau hành trình tốt đẹp.'),
  ]),
];

export const S9HDTN_SCENARIOS = indexBy(S9HDTN_WEEKS);
