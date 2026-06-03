// ============================================================
// Lớp 7 · GIÁO DỤC CÔNG DÂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn GDCD Lớp 7 (10 chủ đề).
// 4–5 câu/tuần · ID prefix: "S7GDCD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7GDCD', 'gdcd', n, title, qs, opts);

export const S7GDCD_WEEKS = [
  // ===== Chủ đề 1: Tự hào về truyền thống quê hương (T1–4) =====
  M(1, 'Truyền thống quê hương là gì?', [
    Q('Truyền thống quê hương là?', ['Những đặc sản mới', 'Đường phố hiện đại', 'Những toà nhà mới xây', 'Những giá trị tốt đẹp về vật chất và tinh thần được hình thành, lưu truyền qua nhiều thế hệ ở một địa phương'], 3, 'Truyền thống quê hương là di sản vật chất — tinh thần lưu truyền nhiều đời.'),
    Q('Đâu là truyền thống quê hương tốt đẹp?', ['Ăn nhậu say xỉn', 'Đốt vàng mã quá mức', 'Yêu nước, lao động cần cù, hiếu học, đoàn kết', 'Mê tín dị đoan'], 2, 'Yêu nước, hiếu học, cần cù... là truyền thống tốt đẹp.'),
    Q('Đâu KHÔNG phải truyền thống quê hương tốt đẹp?', ['Hủ tục tảo hôn, mê tín', 'Lễ hội đình làng', 'Nghề thủ công truyền thống', 'Đạo lí uống nước nhớ nguồn'], 0, 'Tảo hôn, mê tín là hủ tục cần xoá bỏ.'),
    Q('Câu tục ngữ nào nói về truyền thống quê hương?', ['Mỗi cây mỗi hoa', 'Đèn nhà ai nấy rạng', 'Cha chung không ai khóc', 'Uống nước nhớ nguồn'], 3, '"Uống nước nhớ nguồn" thể hiện đạo lí truyền thống.'),
    Q('Vì sao cần tìm hiểu truyền thống quê hương?', ['Để có quà', 'Để đi du lịch', 'Để hiểu cội nguồn, có trách nhiệm giữ gìn và phát huy', 'Để khoe khoang'], 2, 'Hiểu cội nguồn để giữ gìn và phát huy.'),
  ]),

  M(2, 'Biểu hiện của tự hào truyền thống quê hương', [
    Q('Bạn nào THỂ HIỆN tự hào quê hương?', ['Lan giới thiệu lễ hội quê mình với bạn nước ngoài', 'Bình không bao giờ về quê', 'Tú chê quê mình nghèo', 'An cấm bạn nhắc đến quê'], 0, 'Giới thiệu lễ hội quê là tự hào quê hương.'),
    Q('Hành vi nào giữ gìn truyền thống quê?', ['Phá đình làng', 'Đốt phá lễ hội', 'Tham gia hội làng, học nghề truyền thống', 'Vứt rác di tích'], 2, 'Tham gia hội làng và học nghề là giữ gìn truyền thống.'),
    Q('Hành vi nào LÀM XẤU truyền thống quê?', ['Sống đạo đức', 'Giúp đỡ hàng xóm', 'Buôn lậu, gian dối làm xấu danh quê', 'Học giỏi'], 2, 'Hành vi xấu của một người ảnh hưởng danh dự quê hương.'),
    Q('Em là HS lớp 7, em có thể làm gì cho quê hương?', ['Học giỏi, tham gia hoạt động cộng đồng phù hợp tuổi', 'Đợi lớn mới làm', 'Mặc kệ vì còn nhỏ', 'Chỉ lo bản thân'], 0, 'HS có thể đóng góp bằng học tập và hoạt động cộng đồng.'),
    Q('Quê em có nghề gốm. Em nên?', ['Bỏ quê đi', 'Tìm hiểu lịch sử, công nghệ và quảng bá', 'Coi thường nghề gốm', 'Cấm bạn nói về gốm'], 1, 'Tìm hiểu và quảng bá nghề quê là cách phát huy.'),
  ]),

  M(3, 'Ý nghĩa của tự hào truyền thống quê hương', [
    Q('Tự hào truyền thống quê hương giúp em?', ['Trở nên kiêu ngạo', 'Coi thường nơi khác', 'Sống xa rời quê', 'Có động lực sống tốt, có trách nhiệm và bản sắc'], 3, 'Tự hào đúng cách giúp ta có bản sắc và trách nhiệm.'),
    Q('Người tự hào quê hương sẽ?', ['Phá hoại quê hương', 'Chê quê mình kém', 'Bỏ quê đi mãi', 'Đóng góp xây dựng quê hương khi có điều kiện'], 3, 'Đóng góp xây dựng quê là biểu hiện tự hào thật sự.'),
    Q('Khi đi xa, người tự hào quê hương sẽ?', ['Giới thiệu quê mình một cách trung thực, lịch sự', 'Giấu giếm gốc gác', 'Nói xấu quê', 'Chê bai quê'], 0, 'Giới thiệu quê hương đầy tự hào là biểu hiện đẹp.'),
    Q('Khi quê hương gặp thiên tai, em nên?', ['Vận động ủng hộ, giúp đỡ trong khả năng', 'Đăng tin xấu', 'Vui mừng', 'Mặc kệ'], 0, 'Đoàn kết khi quê gặp khó là tình yêu quê hương.'),
  ]),

  M(4, 'Trách nhiệm gìn giữ truyền thống quê hương', [
    Q('Trách nhiệm chính của HS với truyền thống quê?', ['Đợi tuổi 18', 'Học tập, rèn luyện và tham gia hoạt động phù hợp', 'Mặc kệ người lớn', 'Chỉ chờ thưởng'], 1, 'HS có thể đóng góp ngay từ bây giờ.'),
    Q('Trường tổ chức tìm hiểu di tích quê, em nên?', ['Quậy phá', 'Trốn không đi', 'Tích cực tham gia, ghi chép, chia sẻ', 'Đi cho có'], 2, 'Tham gia tích cực là cách rèn lòng tự hào.'),
    Q('Em phát hiện bạn vẽ bậy lên di tích, em nên?', ['Mặc kệ', 'Ngăn lại, báo người có thẩm quyền', 'Cùng vẽ', 'Đăng lên mạng cười cợt'], 1, 'Bảo vệ di tích là trách nhiệm của mỗi người.'),
    Q('Cách phát huy truyền thống quê hương hiệu quả là?', ['Kết hợp giữ gìn cái cũ và đổi mới sáng tạo', 'Bỏ hết cái cũ', 'Giữ nguyên không đổi', 'Sao chép quê khác'], 0, 'Giữ gìn cốt lõi + đổi mới sáng tạo là cách phát huy.'),
  ]),

  // ===== Chủ đề 2: Quan tâm — chăm sóc người thân (T5–7) =====
  M(5, 'Quan tâm, cảm thông, chia sẻ với người thân', [
    Q('Quan tâm, cảm thông là?', ['Soi mói', 'Tò mò chuyện riêng', 'Để ý, hỏi han, đặt mình vào vị trí người khác để hiểu cảm xúc', 'Bao biện'], 2, 'Quan tâm và cảm thông là hiểu và sẻ chia.'),
    Q('Biểu hiện quan tâm người thân?', ['Hỏi thăm sức khoẻ, giúp việc nhà, lắng nghe', 'Đòi hỏi bố mẹ', 'Cãi lại ông bà', 'Chỉ ngồi xem điện thoại'], 0, 'Hỏi thăm, giúp việc, lắng nghe là quan tâm.'),
    Q('Em thấy mẹ về mệt, em nên?', ['Mặc kệ', 'Hỏi thăm, lấy nước, đỡ đần việc nhà', 'Đòi tiền tiêu vặt', 'Bật nhạc to'], 1, 'Hỏi thăm và đỡ đần là quan tâm mẹ.'),
    Q('Ông bà ốm, em nên?', ['Mặc kệ', 'Đòi ăn', 'Cãi lại', 'Thăm hỏi, chăm sóc, làm việc nhà giúp'], 3, 'Chăm sóc ông bà là biểu hiện hiếu thảo.'),
    Q('Quan tâm chia sẻ KHÔNG bao gồm?', ['Hỏi thăm sức khoẻ', 'Soi mói chuyện riêng tư', 'Lắng nghe khi gặp khó', 'Giúp đỡ việc nhà'], 1, 'Soi mói khác với quan tâm.'),
  ]),

  M(6, 'Ý nghĩa của quan tâm — chia sẻ', [
    Q('Người biết quan tâm chia sẻ sẽ?', ['Mất bạn', 'Cô đơn', 'Bị xa lánh', 'Được mọi người yêu quý, tạo gia đình hạnh phúc'], 3, 'Quan tâm chia sẻ tạo nên gia đình hạnh phúc.'),
    Q('Quan tâm chia sẻ trong gia đình giúp?', ['Gia đình xa cách', 'Tạo căng thẳng', 'Không có ý nghĩa', 'Gắn kết tình thân, ai cũng cảm thấy ấm áp'], 3, 'Quan tâm là sợi dây gắn kết gia đình.'),
    Q('Khi anh chị buồn, em nên?', ['Lắng nghe, an ủi và động viên', 'Mặc kệ', 'Cãi nhau', 'Trêu thêm'], 0, 'An ủi anh chị là quan tâm chia sẻ.'),
    Q('Câu ca dao nào nói về tình cảm gia đình?', ['Đèn nhà ai nấy rạng', 'Bán anh em xa', 'Có công mài sắt', 'Anh em như thể tay chân'], 3, '"Anh em như thể tay chân" nói về tình anh em.'),
  ]),

  M(7, 'Rèn luyện quan tâm chia sẻ trong gia đình', [
    Q('Để rèn quan tâm chia sẻ, em nên?', ['Đợi có dịp đặc biệt', 'Tập thói quen hỏi thăm, giúp đỡ người thân hàng ngày', 'Chỉ làm khi có thưởng', 'Mặc kệ'], 1, 'Thói quen hàng ngày tạo nên đức tính tốt.'),
    Q('Khi bố mẹ bận, em nên?', ['Quậy phá để được chú ý', 'Đòi bố mẹ quan tâm', 'Tự lo việc cá nhân, giúp việc nhà phù hợp', 'Bỏ học'], 2, 'Tự lo và giúp đỡ là cách quan tâm bố mẹ.'),
    Q('Hành vi nào THIẾU quan tâm gia đình?', ['Hỏi thăm ông bà', 'Ngồi điện thoại cả ngày, không nói chuyện với ai', 'Giúp mẹ nấu cơm', 'Cùng ăn tối với gia đình'], 1, 'Cách ly với gia đình là thiếu quan tâm.'),
    Q('Em làm sai khiến mẹ buồn, em nên?', ['Đổ lỗi', 'Xin lỗi và sửa sai', 'Trốn tránh', 'Cãi lại'], 1, 'Xin lỗi và sửa sai là quan tâm cảm xúc của mẹ.'),
  ]),

  // ===== Chủ đề 3: Học tập tự giác, tích cực (T8–10) =====
  M(8, 'Học tập tự giác, tích cực là gì?', [
    Q('Học tập tự giác là?', ['Học khi có quà', 'Chỉ học khi bị thúc ép', 'Tự mình thực hiện việc học mà không cần ai nhắc', 'Học khi cô đứng cạnh'], 2, 'Tự giác là chủ động trong học tập.'),
    Q('Học tập tích cực là?', ['Chỉ chép bài thụ động', 'Chỉ học thuộc', 'Chủ động tìm hiểu, đặt câu hỏi, vận dụng kiến thức', 'Đợi cô giảng lại'], 2, 'Tích cực là chủ động khám phá kiến thức.'),
    Q('Bạn nào học tự giác, tích cực?', ['Tú chép bài bạn', 'Lan tự lập kế hoạch, đọc thêm sách, hỏi cô khi không hiểu', 'Bình chỉ học khi sắp thi', 'An đợi mẹ dạy mới làm'], 1, 'Lan có thái độ tự giác và tích cực.'),
    Q('Câu tục ngữ nào về học tự giác?', ['Đèn nhà ai nấy rạng', 'Học, học nữa, học mãi', 'Trâu chậm uống nước đục', 'Lá lành đùm lá rách'], 1, '"Học, học nữa, học mãi" — Lê-nin về tinh thần tự học.'),
  ]),

  M(9, 'Biểu hiện học tập tự giác — tích cực', [
    Q('Biểu hiện học tự giác?', ['Chỉ học trước thi', 'Đợi có thưởng', 'Tự lập thời gian biểu và làm theo', 'Đợi nhắc nhở'], 2, 'Tự lập kế hoạch và làm theo là tự giác.'),
    Q('Biểu hiện học tích cực trong lớp?', ['Ngủ trong lớp', 'Tham gia phát biểu, đặt câu hỏi, hợp tác nhóm', 'Làm việc riêng', 'Im lặng cả buổi'], 1, 'Tích cực là tham gia chủ động vào bài học.'),
    Q('Hành vi nào THIẾU tự giác?', ['Phải bị mẹ giục mới ngồi học', 'Tự ôn trước thi', 'Tự kiểm tra bài tập', 'Tự đặt thời gian học'], 0, 'Phải giục mới học là thiếu tự giác.'),
    Q('Em không hiểu bài, em nên?', ['Bỏ qua', 'Mặc kệ không hiểu', 'Giấu đi', 'Hỏi thầy cô, bạn bè, tự tìm hiểu thêm'], 3, 'Tìm cách hiểu bài là học tích cực.'),
    Q('Cách rèn học tự giác hiệu quả?', ['Đặt mục tiêu cụ thể, lập kế hoạch và theo dõi', 'Học theo cảm xúc', 'Theo phong trào', 'Đợi hứng'], 0, 'Mục tiêu và kế hoạch là cốt lõi rèn tự giác.'),
  ]),

  M(10, 'Ý nghĩa của học tập tự giác — tích cực', [
    Q('Học tự giác, tích cực giúp em?', ['Bị mệt', 'Tiếp thu nhanh, nhớ lâu, đạt kết quả cao', 'Không hiệu quả', 'Mất bạn'], 1, 'Học tự giác giúp tiếp thu hiệu quả, đạt kết quả tốt.'),
    Q('Người học thụ động sẽ?', ['Hạnh phúc', 'Luôn giỏi nhất', 'Khó tiến bộ, dễ chán nản', 'Được khen'], 2, 'Học thụ động khó tiến bộ.'),
    Q('Học tự giác giúp ích cho tương lai?', ['Tạo thói quen tự học suốt đời, dễ thành công', 'Chỉ ích lợi ngắn hạn', 'Khiến mệt mỏi cả đời', 'Không có ích'], 0, 'Tự học suốt đời là chìa khoá thành công.'),
    Q('Lời khuyên cho HS muốn học tích cực?', ['Đợi cô giảng', 'Học vẹt', 'Đặt câu hỏi "tại sao", đọc trước bài, vận dụng vào thực tế', 'Chép tài liệu'], 2, 'Đặt câu hỏi và vận dụng là cách học tích cực.'),
  ]),

  // ===== Chủ đề 4: Giữ chữ tín (T11–13) =====
  M(11, 'Giữ chữ tín là gì?', [
    Q('Giữ chữ tín là?', ['Hứa cho qua chuyện', 'Nói một đằng làm một nẻo', 'Coi trọng lòng tin, biết giữ lời hứa và làm đúng cam kết', 'Quên lời hứa'], 2, 'Giữ chữ tín là làm đúng cam kết.'),
    Q('Biểu hiện giữ chữ tín?', ['Đổi ý liên tục', 'Hay trễ hẹn', 'Đúng giờ hẹn, làm đúng lời hứa, hoàn thành công việc đúng hạn', 'Bỏ giữa chừng'], 2, 'Đúng hẹn và hoàn thành đúng hạn là giữ chữ tín.'),
    Q('Câu tục ngữ nào về chữ tín?', ['Đèn nhà ai nấy rạng', 'Có công mài sắt', 'Lá lành đùm lá rách', 'Nói lời phải giữ lấy lời / Đừng như con bướm đậu rồi lại bay'], 3, 'Câu ca dao đề cao việc giữ lời hứa.'),
    Q('Bạn nào GIỮ CHỮ TÍN?', ['Lan hứa hôm sau rồi bặt vô âm tín', 'Tú hứa rồi quên', 'Bình hứa nhưng lười không làm', 'An hứa trả sách cho bạn vào thứ Hai và đã trả đúng hẹn'], 3, 'Làm đúng lời hứa là giữ chữ tín.'),
  ]),

  M(12, 'Biểu hiện giữ chữ tín trong cuộc sống', [
    Q('Trong học tập, giữ chữ tín là?', ['Bỏ bài tập', 'Đùn việc cho bạn', 'Nộp bài đúng hạn, hoàn thành nhiệm vụ được giao', 'Nộp bài trễ'], 2, 'Đúng hạn và hoàn thành là giữ chữ tín học tập.'),
    Q('Trong giao tiếp, giữ chữ tín là?', ['Hứa cho qua', 'Nói dối để được lợi', 'Nói thật, không hứa hão', 'Đổ lỗi'], 2, 'Nói thật và không hứa hão là chữ tín.'),
    Q('Em vay bạn 50.000đ, em nên?', ['Đợi bạn đòi mới trả', 'Trả một nửa rồi xin khất phần còn lại', 'Trả khi nào nhớ', 'Trả đúng hẹn dù chỉ là khoản nhỏ'], 3, 'Trả đúng hẹn dù nhỏ là giữ chữ tín.'),
    Q('Em hứa giúp bạn ôn bài chiều thứ Bảy, đột nhiên có việc?', ['Đến rồi bỏ về', 'Im lặng không đến', 'Báo bạn sớm và sắp xếp thời gian khác', 'Hủy bỏ luôn'], 2, 'Báo sớm và sắp xếp lại là giữ chữ tín linh hoạt.'),
    Q('Hành vi nào THIẾU chữ tín?', ['Trả nợ đúng hạn', 'Hoàn thành nhiệm vụ', 'Hứa đến chơi nhưng không đến mà không báo', 'Đúng giờ hẹn'], 2, 'Thất hứa mà không báo là thiếu chữ tín.'),
  ]),

  M(13, 'Ý nghĩa của giữ chữ tín', [
    Q('Người giữ chữ tín sẽ?', ['Được tin cậy, tôn trọng, dễ thành công', 'Bị xa lánh', 'Bị coi thường', 'Mất bạn'], 0, 'Giữ chữ tín tạo lòng tin và cơ hội thành công.'),
    Q('Người KHÔNG giữ chữ tín thường?', ['Mất lòng tin, mất cơ hội, bị xa lánh', 'Được mọi người yêu', 'Luôn thành công', 'Có nhiều bạn'], 0, 'Thất tín dẫn đến mất lòng tin và cơ hội.'),
    Q('Trong kinh doanh, chữ tín có vai trò gì?', ['Chỉ cần khi mới mở', 'Chỉ là khẩu hiệu', 'Chỉ cần khi gặp khách hàng lớn', 'Là yếu tố sống còn để giữ khách và phát triển'], 3, 'Chữ tín là nền tảng kinh doanh bền vững.'),
    Q('Cách rèn giữ chữ tín?', ['Hứa rồi quên', 'Đổ lỗi', 'Chỉ hứa khi chắc chắn làm được, luôn nỗ lực giữ lời', 'Hứa hẹn nhiều cho vui'], 2, 'Cân nhắc trước khi hứa và nỗ lực giữ lời.'),
  ]),

  // ===== Chủ đề 5: Bảo tồn di sản văn hoá (T14–15) =====
  M(14, 'Di sản văn hoá là gì?', [
    Q('Di sản văn hoá là?', ['Sách báo hiện đại', 'Đồ điện tử', 'Đồ dùng cũ', 'Sản phẩm vật chất, tinh thần có giá trị lịch sử, văn hoá, khoa học được truyền qua các thế hệ'], 3, 'Di sản văn hoá là tài sản có giá trị truyền đời.'),
    Q('Có mấy loại di sản văn hoá?', ['5 loại', '1 loại', '2 (vật thể và phi vật thể)', '10 loại'], 2, 'Có 2 loại: vật thể (đình, chùa, hiện vật) và phi vật thể (lễ hội, làn điệu...).'),
    Q('Cố đô Huế là?', ['Di sản văn hoá vật thể', 'Không phải di sản', 'Di sản phi vật thể', 'Di sản thiên nhiên'], 0, 'Cố đô Huế là di sản văn hoá vật thể được UNESCO công nhận.'),
    Q('Nhã nhạc cung đình Huế là?', ['Di sản vật thể', 'Di sản thiên nhiên', 'Di sản văn hoá phi vật thể', 'Không phải di sản'], 2, 'Nhã nhạc cung đình Huế là di sản phi vật thể của nhân loại.'),
    Q('Vịnh Hạ Long là?', ['Di sản văn hoá', 'Không phải di sản', 'Di sản thiên nhiên thế giới', 'Di sản phi vật thể'], 2, 'Vịnh Hạ Long là di sản thiên nhiên thế giới.'),
  ]),

  M(15, 'Bảo tồn và phát huy di sản văn hoá', [
    Q('Hành vi nào bảo tồn di sản?', ['Vẽ bậy lên di tích', 'Khắc tên mình lên tường di tích làm kỷ niệm', 'Đào bới di tích trái phép', 'Tôn trọng, giữ gìn, quảng bá di sản'], 3, 'Tôn trọng và quảng bá là bảo tồn di sản.'),
    Q('Hành vi nào VI PHẠM bảo vệ di sản?', ['Tham gia lễ hội', 'Tham quan có ý thức', 'Quảng bá lễ hội', 'Bẻ cành cây cảnh ở khu di tích'], 3, 'Bẻ cành, vẽ bậy là vi phạm bảo vệ di sản.'),
    Q('HS có thể bảo tồn di sản bằng cách?', ['Đăng tin xấu về di sản', 'Chụp ảnh đăng mạng kèm bình luận chê bai di sản', 'Mặc kệ', 'Tìm hiểu, giới thiệu, tham gia hoạt động bảo vệ di sản'], 3, 'HS có thể tìm hiểu và quảng bá di sản.'),
    Q('Vì sao phải bảo tồn di sản văn hoá?', ['Chỉ để khoe', 'Để bán cho nước ngoài', 'Giữ gìn bản sắc dân tộc và truyền cho thế hệ sau', 'Không cần thiết'], 2, 'Di sản là bản sắc cần giữ và truyền lại.'),
    Q('Khi đi tham quan di tích, em nên?', ['Vẽ tên kỉ niệm', 'Trèo lên tường', 'Tuân thủ nội quy, không xả rác, không vẽ bậy', 'Bẻ hoa'], 2, 'Tuân thủ nội quy là bảo vệ di sản.'),
  ]),

  // ===== Chủ đề 6: Ứng phó tâm lý căng thẳng (T16–17) =====
  M(16, 'Tâm lý căng thẳng là gì?', [
    Q('Tâm lý căng thẳng là?', ['Trạng thái lo lắng, áp lực ảnh hưởng đến thể chất và tinh thần', 'Đói bụng', 'Niềm vui', 'Buồn ngủ'], 0, 'Căng thẳng (stress) là trạng thái áp lực tâm lý.'),
    Q('Nguyên nhân gây căng thẳng cho HS?', ['Áp lực học tập, gia đình, bạn bè, kỳ vọng quá cao', 'Ngủ đủ', 'Đi chơi', 'Ăn ngon'], 0, 'Áp lực học tập và quan hệ là nguyên nhân phổ biến.'),
    Q('Biểu hiện của căng thẳng?', ['Khoẻ mạnh', 'Tự tin', 'Mệt mỏi, cáu gắt, mất ngủ, khó tập trung', 'Vui vẻ'], 2, 'Mệt mỏi, mất ngủ, cáu gắt là biểu hiện căng thẳng.'),
    Q('Căng thẳng kéo dài có hại?', ['Không có hại', 'Tốt cho não', 'Giúp khoẻ hơn', 'Giảm sức khoẻ, hiệu quả học tập, dễ trầm cảm'], 3, 'Căng thẳng kéo dài rất hại sức khoẻ thể chất và tinh thần.'),
  ]),

  M(17, 'Ứng phó với tâm lý căng thẳng', [
    Q('Cách ứng phó với căng thẳng?', ['Thư giãn, tập thể dục, chia sẻ với người tin cậy', 'Ăn vô độ', 'Bỏ học', 'Cô lập'], 0, 'Thư giãn, vận động, chia sẻ là cách ứng phó tốt.'),
    Q('Khi cảm thấy quá tải, em nên?', ['Bỏ cuộc', 'Tạm dừng, nghỉ ngơi, lập kế hoạch lại', 'Cố ép bản thân', 'Giấu giếm'], 1, 'Tạm dừng và lập kế hoạch hợp lý hơn.'),
    Q('Khi căng thẳng nặng kéo dài, em nên?', ['Gặp chuyên gia tâm lý hoặc người tin cậy', 'Tự xử lý một mình', 'Uống thuốc bừa bãi', 'Cố gắng học nhiều hơn để quên đi'], 0, 'Cần sự hỗ trợ chuyên môn khi căng thẳng nặng.'),
    Q('Cách phòng tránh căng thẳng?', ['Học liên tục', 'Ăn vặt nhiều', 'Thức khuya', 'Cân bằng học — chơi — nghỉ, ngủ đủ giấc, ăn uống lành mạnh'], 3, 'Cân bằng cuộc sống là cách phòng căng thẳng.'),
    Q('Hành vi nào KHÔNG nên khi căng thẳng?', ['Thức khuya chơi game để giải toả', 'Nghe nhạc', 'Đập phá đồ, gây gổ với người khác', 'Tâm sự với mẹ'], 2, 'Bạo lực là cách phản ứng sai lầm.'),
  ]),

  // ===== T18: Ôn tập HK1 =====
  M(18, 'Ôn tập học kì 1', [
    Q('Truyền thống quê hương KHÔNG bao gồm?', ['Lao động cần cù', 'Hủ tục mê tín', 'Yêu nước', 'Hiếu học'], 1, 'Hủ tục không phải truyền thống tốt đẹp.'),
    Q('Quan tâm chia sẻ trong gia đình giúp?', ['Không có tác dụng', 'Xa cách', 'Gắn kết tình thân, gia đình hạnh phúc', 'Mâu thuẫn'], 2, 'Quan tâm chia sẻ là sợi dây gắn kết.'),
    Q('Học tự giác là?', ['Học khi có thưởng', 'Tự thực hiện học tập không cần nhắc nhở', 'Học theo cảm hứng', 'Học khi bị ép'], 1, 'Tự giác là chủ động học.'),
    Q('Giữ chữ tín là?', ['Quên lời hứa', 'Làm đúng lời hứa, đúng hẹn', 'Hứa cho qua', 'Đổi ý liên tục'], 1, 'Giữ chữ tín là làm đúng cam kết.'),
    Q('Cách ứng phó căng thẳng đúng?', ['Bạo lực', 'Cô lập bản thân', 'Thư giãn, tập thể dục, chia sẻ với người tin cậy', 'Bỏ học'], 2, 'Thư giãn và chia sẻ là cách lành mạnh.'),
  ]),

  // ===== HK2 — Chủ đề 7: Phòng chống bạo lực học đường (T19–22) =====
  M(19, 'Bạo lực học đường là gì?', [
    Q('Bạo lực học đường là?', ['Cãi nhau bình thường', 'Hành vi gây tổn hại thể chất, tinh thần với HS trong và liên quan trường học', 'Tranh luận trong lớp', 'Thi đấu thể thao'], 1, 'BLHĐ là hành vi gây tổn hại trong môi trường học đường.'),
    Q('Hình thức BLHĐ phổ biến?', ['Giúp đỡ nhau', 'Đánh đập, lăng mạ, đe doạ, bạo lực mạng', 'Học nhóm', 'Khen nhau'], 1, 'Đánh, lăng mạ, đe doạ, bắt nạt mạng đều là BLHĐ.'),
    Q('Bạo lực mạng là?', ['Lăng mạ, đe doạ qua mạng xã hội, tin nhắn', 'Họp nhóm online', 'Học online', 'Chia sẻ bài giảng'], 0, 'Bạo lực mạng = lăng mạ, đe doạ qua kênh số.'),
    Q('Nguyên nhân BLHĐ?', ['Học giỏi quá', 'Đi học đều', 'Ngoan ngoãn', 'Thiếu kĩ năng kiểm soát cảm xúc, ảnh hưởng tiêu cực, thiếu giáo dục đạo đức'], 3, 'BLHĐ thường do thiếu kĩ năng và ảnh hưởng tiêu cực.'),
  ]),

  M(20, 'Hậu quả bạo lực học đường', [
    Q('Hậu quả với nạn nhân BLHĐ?', ['Khoẻ mạnh hơn', 'Tổn hại thể chất, sang chấn tâm lý, học tập giảm sút', 'Vui vẻ hơn', 'Không có ảnh hưởng'], 1, 'Nạn nhân BLHĐ bị tổn hại nặng nề.'),
    Q('Hậu quả với người gây bạo lực?', ['Bị kỉ luật, vi phạm pháp luật, hỏng tương lai', 'Học giỏi hơn', 'Có nhiều bạn', 'Được tôn trọng'], 0, 'Người gây bạo lực bị kỉ luật và ảnh hưởng tương lai.'),
    Q('Hậu quả với gia đình, nhà trường?', ['Tăng uy tín', 'Ảnh hưởng danh dự, môi trường học tập', 'Không ảnh hưởng', 'Tốt hơn'], 1, 'BLHĐ ảnh hưởng nhiều đến gia đình và nhà trường.'),
    Q('Hậu quả lâu dài của BLHĐ?', ['Có thể gây trầm cảm, tự tử ở nạn nhân', 'Không có gì nghiêm trọng', 'Tự khỏi sau vài ngày', 'Chỉ là chuyện vặt'], 0, 'BLHĐ có thể dẫn đến hậu quả nghiêm trọng lâu dài.'),
  ]),

  M(21, 'Phòng tránh bạo lực học đường', [
    Q('Khi bị bạn bắt nạt, em nên?', ['Trốn học', 'Im lặng chịu đựng', 'Đánh trả', 'Bình tĩnh tránh đi, báo thầy cô và người thân ngay'], 3, 'Báo thầy cô và người thân để được giúp đỡ.'),
    Q('Khi chứng kiến bạn bị bắt nạt, em nên?', ['Mặc kệ', 'Bênh vực và báo người lớn', 'Cùng tham gia', 'Quay clip đăng mạng'], 1, 'Bênh vực và báo thầy cô là đúng.'),
    Q('Để phòng BLHĐ, HS nên?', ['Tránh đến trường', 'Lập băng nhóm', 'Thủ vũ khí', 'Kết bạn lành mạnh, học kĩ năng giao tiếp, kiểm soát cảm xúc'], 3, 'Rèn kĩ năng và kết bạn lành mạnh là phòng tránh.'),
    Q('Khi giận, em nên?', ['Đánh người', 'Đập phá', 'La hét', 'Hít sâu, đi ra ngoài, không hành động vội'], 3, 'Kiểm soát cơn giận để tránh hậu quả đáng tiếc.'),
    Q('Khi bị đe doạ trên mạng, em nên?', ['Trả đũa lại', 'Lưu bằng chứng, chặn người đe doạ, báo người lớn', 'Im lặng chịu', 'Xoá tài khoản mạng xã hội rồi giữ kín, không cho ai biết'], 1, 'Lưu bằng chứng và báo người lớn là cách xử lý đúng.'),
  ]),

  M(22, 'Trách nhiệm chống BLHĐ', [
    Q('Trách nhiệm chính của HS?', ['Không tham gia, không cổ vũ, dám lên tiếng', 'Quay clip để đăng mạng', 'Mặc kệ', 'Đứng xem cho vui và chia sẻ lại trên nhóm lớp'], 0, 'HS có trách nhiệm chống lại BLHĐ.'),
    Q('Số điện thoại Tổng đài bảo vệ trẻ em?', ['113', '114', '115', '111'], 3, '111 là Tổng đài quốc gia bảo vệ trẻ em.'),
    Q('Khi vô tình tham gia bạo lực, em nên?', ['Đổ lỗi cho bạn', 'Dừng ngay, xin lỗi và sửa sai', 'Tiếp tục', 'Bỏ học'], 1, 'Nhận sai và sửa là việc đúng.'),
    Q('Nhà trường có vai trò gì trong chống BLHĐ?', ['Im lặng', 'Bao che', 'Đổ lỗi cho HS', 'Giáo dục, phát hiện và xử lý các vụ việc'], 3, 'Nhà trường có trách nhiệm chính trong phòng và xử lý BLHĐ.'),
  ]),

  // ===== Chủ đề 8: Quản lý tiền (T23–25) =====
  M(23, 'Quản lý tiền là gì?', [
    Q('Quản lý tiền là?', ['Tiêu hết tiền có', 'Cho người khác giữ hết', 'Giấu tiền không tiêu', 'Biết sử dụng tiền một cách hợp lý, có kế hoạch'], 3, 'Quản lý tiền là dùng tiền có kế hoạch, hợp lý.'),
    Q('Vì sao HS cần học quản lý tiền?', ['Để biết tiết kiệm, dùng tiền hợp lý, không lãng phí', 'Để giàu nhanh', 'Để khoe với bạn', 'Để đầu cơ'], 0, 'Học quản lý tiền giúp dùng tiền có ích.'),
    Q('Nguyên tắc quản lý tiền cơ bản?', ['Tiêu thoả thích', 'Vay mượn nhiều', 'Mua mọi thứ thấy hay', 'Phân biệt cần và muốn, ghi chép thu chi, tiết kiệm'], 3, 'Cần/muốn + ghi chép + tiết kiệm là cơ bản.'),
    Q('Phân biệt cần và muốn?', ['"Cần" là thứ đắt tiền, "muốn" là thứ rẻ tiền', 'Cần là muốn', 'Như nhau', '"Cần" là thiết yếu để sống/học; "muốn" là sở thích thêm'], 3, 'Cần và muốn khác nhau cơ bản về sự cần thiết.'),
  ]),

  M(24, 'Cách quản lý tiền hiệu quả', [
    Q('Khi nhận tiền tiêu vặt, em nên?', ['Chia thành: tiết kiệm, chi tiêu cần thiết, dự phòng', 'Giấu hết', 'Tiêu hết', 'Cho hết bạn'], 0, 'Chia tiền thành các phần với mục đích rõ ràng.'),
    Q('Em muốn mua đồ chơi đắt tiền không cần thiết, em nên?', ['Vay tiền mua', 'Đòi bố mẹ mua', 'Cân nhắc lại, để dành cho việc cần hơn', 'Mua ngay'], 2, 'Cân nhắc giữa cần và muốn trước khi mua.'),
    Q('Cách tiết kiệm tiền hiệu quả?', ['Giấu trong tủ rồi quên', 'Cho bạn vay', 'Tiêu ngay', 'Ống tiết kiệm, ghi chép, đặt mục tiêu cụ thể'], 3, 'Ghi chép và đặt mục tiêu giúp tiết kiệm hiệu quả.'),
    Q('Em nhận tiền mừng tuổi 2 triệu, em nên?', ['Bàn với bố mẹ để dùng đúng (mua sách, tiết kiệm)', 'Tiêu hết trong ngày', 'Mời bạn đi chơi xa xỉ', 'Mua đồ chơi đắt'], 0, 'Bàn với bố mẹ và dùng đúng mục đích.'),
    Q('Cách kiếm thêm tiền phù hợp với HS lớp 7?', ['Làm việc nhà giúp, làm sản phẩm thủ công nhỏ phù hợp', 'Bỏ học đi làm', 'Vay nợ', 'Đánh bạc'], 0, 'HS có thể kiếm thêm bằng các việc phù hợp tuổi.'),
  ]),

  M(25, 'Ý nghĩa và rèn luyện quản lý tiền', [
    Q('Người biết quản lý tiền sẽ?', ['Trở nên keo kiệt', 'Chủ động trong cuộc sống, dễ đạt mục tiêu', 'Mất bạn', 'Khổ sở'], 1, 'Quản lý tiền tốt giúp chủ động cuộc sống.'),
    Q('Người KHÔNG biết quản lý tiền thường?', ['Hạnh phúc', 'Tự tin', 'Hay thiếu hụt, mắc nợ', 'Giàu nhanh'], 2, 'Không quản lý tiền dễ dẫn đến thiếu hụt, nợ nần.'),
    Q('Để rèn quản lý tiền, em nên?', ['Bắt đầu từ ghi chép thu chi tiền tiêu vặt', 'Đợi lớn mới học', 'Không cần thiết', 'Mặc kệ'], 0, 'Bắt đầu từ ghi chép thu chi đơn giản.'),
    Q('Trước khi mua đồ, em nên?', ['Mua ngay', 'Hỏi: thật sự cần không? có giá tốt hơn không?', 'Không suy nghĩ', 'Theo bạn'], 1, 'Cân nhắc trước khi mua giúp tiêu tiền hợp lý.'),
  ]),

  // ===== Chủ đề 9: Phòng chống tệ nạn xã hội (T26–29) =====
  M(26, 'Tệ nạn xã hội là gì?', [
    Q('Tệ nạn xã hội là?', ['Hành vi sai lệch chuẩn mực xã hội, vi phạm pháp luật, đạo đức', 'Phong tục tốt đẹp', 'Lễ hội truyền thống', 'Hoạt động giải trí'], 0, 'Tệ nạn là hành vi xấu vi phạm đạo đức, pháp luật.'),
    Q('Tệ nạn xã hội nguy hiểm nhất với HS?', ['Học nhóm', 'Ma tuý, cờ bạc, mại dâm, bạo lực, game bệnh lý', 'Đọc sách', 'Tập thể dục'], 1, 'Ma tuý, cờ bạc, mại dâm là tệ nạn nguy hiểm.'),
    Q('Nguyên nhân HS sa vào tệ nạn?', ['Gia đình hạnh phúc', 'Tự tin', 'Thiếu hiểu biết, đua đòi, bạn bè rủ rê, thiếu sự quan tâm', 'Học giỏi'], 2, 'Thiếu hiểu biết và môi trường xấu dẫn đến tệ nạn.'),
    Q('Câu nào KHÔNG phải tệ nạn?', ['Đánh bạc', 'Hút ma tuý', 'Đi học đều', 'Xem clip 18+'], 2, 'Đi học đều là hành vi tốt.'),
  ]),

  M(27, 'Tác hại của tệ nạn xã hội', [
    Q('Tác hại của tệ nạn với cá nhân?', ['Cải thiện sức khoẻ', 'Học giỏi hơn', 'Huỷ hoại sức khoẻ, đạo đức, học tập, tương lai', 'Có nhiều tiền'], 2, 'Tệ nạn huỷ hoại sức khoẻ và tương lai cá nhân.'),
    Q('Tác hại của tệ nạn với gia đình?', ['Giàu lên', 'Tan vỡ, kinh tế kiệt quệ, danh dự bị tổn hại', 'Đoàn kết', 'Hạnh phúc'], 1, 'Tệ nạn làm tan vỡ gia đình.'),
    Q('Tác hại của tệ nạn với xã hội?', ['Mất trật tự, gia tăng tội phạm, kìm hãm phát triển', 'Phát triển nhanh', 'Không ảnh hưởng', 'Văn minh hơn'], 0, 'Tệ nạn cản trở sự phát triển xã hội.'),
    Q('Ma tuý đặc biệt nguy hiểm vì?', ['Gây nghiện, huỷ hoại thần kinh, lây HIV/AIDS', 'Tăng IQ', 'Tốt cho sức khoẻ', 'Không gây nghiện'], 0, 'Ma tuý gây nghiện và nhiều hệ luỵ nguy hiểm.'),
  ]),

  M(28, 'Phòng tránh tệ nạn xã hội', [
    Q('Khi bạn rủ thử ma tuý "cho biết", em nên?', ['Từ chối dứt khoát và rời đi ngay', 'Thử cho biết', 'Im lặng đồng ý', 'Đắn đo'], 0, 'Tuyệt đối không thử dù chỉ một lần.'),
    Q('Để phòng tệ nạn, em nên?', ['Đi đêm khuya', 'Vào quán net thâu đêm', 'Chơi với người xấu cho biết', 'Chọn bạn tốt, sử dụng thời gian rảnh có ích, lắng nghe gia đình'], 3, 'Chọn bạn tốt và môi trường lành mạnh.'),
    Q('Khi phát hiện bạn dùng ma tuý, em nên?', ['Trêu chọc', 'Im lặng', 'Báo gia đình bạn, thầy cô để có biện pháp giúp', 'Cùng dùng'], 2, 'Báo người lớn để giúp bạn cai nghiện.'),
    Q('Để tránh nghiện game/mạng xã hội, em nên?', ['Chơi cả đêm', 'Bỏ học chơi game', 'Vay tiền nạp game', 'Đặt giới hạn thời gian, có sở thích lành mạnh khác'], 3, 'Đặt giới hạn và có sở thích khác để cân bằng.'),
    Q('Khi gặp người lạ rủ làm việc kiếm tiền dễ, em nên?', ['Đi ngay', 'Mặc kệ luật pháp', 'Tự quyết định', 'Cảnh giác, hỏi ý kiến gia đình'], 3, 'Cảnh giác với "việc dễ tiền nhiều" của người lạ.'),
  ]),

  M(29, 'Pháp luật về phòng chống tệ nạn', [
    Q('Sử dụng ma tuý ở Việt Nam là?', ['Khuyến khích', 'Tự do cá nhân', 'Vi phạm pháp luật, có thể bị xử lý hình sự', 'Hợp pháp'], 2, 'Pháp luật cấm sử dụng và buôn bán ma tuý.'),
    Q('Đánh bạc dưới mọi hình thức là?', ['Hành vi vi phạm pháp luật', 'Trò chơi giải trí', 'Hợp pháp', 'Khuyến khích'], 0, 'Đánh bạc trái phép là vi phạm pháp luật.'),
    Q('HS chưa đủ 18 tuổi vi phạm pháp luật về tệ nạn sẽ?', ['Được khen', 'Bị xử lý theo Luật Trẻ em và pháp luật liên quan', 'Được giải thoát', 'Không bị gì'], 1, 'Trẻ em vi phạm vẫn bị xử lý theo pháp luật phù hợp.'),
    Q('Trách nhiệm của công dân trong phòng tệ nạn?', ['Tham gia', 'Tự giác chấp hành, tố giác hành vi vi phạm', 'Bao che', 'Mặc kệ'], 1, 'Công dân có trách nhiệm phòng và tố giác tệ nạn.'),
  ]),

  // ===== Chủ đề 10: Quyền và nghĩa vụ của trẻ em (T30–34) =====
  M(30, 'Quyền cơ bản của trẻ em', [
    Q('Trẻ em theo Luật Việt Nam là người?', ['Dưới 18 tuổi', 'Dưới 16 tuổi', 'Dưới 12 tuổi', 'Dưới 20 tuổi'], 1, 'Theo Luật Trẻ em 2016, trẻ em là người dưới 16 tuổi.'),
    Q('Bốn nhóm quyền cơ bản của trẻ em theo Công ước LHQ?', ['Ăn — uống — ngủ — chơi', 'Sống còn, được bảo vệ, được phát triển, được tham gia', 'Học — chơi — ngủ — ăn', 'Không có nhóm'], 1, 'Công ước LHQ về quyền trẻ em chia 4 nhóm quyền cơ bản.'),
    Q('Trẻ em có quyền được bảo vệ khỏi?', ['Bạo lực, xâm hại, bóc lột, ma tuý', 'Học tập', 'Vui chơi', 'Yêu thương'], 0, 'Trẻ em có quyền được bảo vệ khỏi mọi hình thức xâm hại.'),
    Q('Quyền được phát triển bao gồm?', ['Kết hôn sớm', 'Đi làm', 'Bỏ học', 'Học tập, vui chơi, hoạt động văn hoá, thể thao'], 3, 'Quyền phát triển bao gồm học tập, vui chơi.'),
    Q('Trẻ em có quyền tham gia có nghĩa là?', ['Không cần nghe ai', 'Tham gia mọi việc của người lớn', 'Được nêu ý kiến về các vấn đề liên quan đến mình', 'Quyết định mọi việc'], 2, 'Quyền tham gia = có tiếng nói về các vấn đề liên quan mình.'),
  ]),

  M(31, 'Nghĩa vụ của trẻ em', [
    Q('Nghĩa vụ của trẻ em với gia đình?', ['Ra lệnh', 'Không cần làm gì', 'Kính trọng, lễ phép, giúp đỡ ông bà cha mẹ', 'Đòi hỏi'], 2, 'Trẻ em có nghĩa vụ kính trọng, giúp đỡ gia đình.'),
    Q('Nghĩa vụ của trẻ em với nhà trường?', ['Bỏ học', 'Quậy phá', 'Chống đối', 'Chăm chỉ học tập, tuân thủ nội quy, kính trọng thầy cô'], 3, 'Học sinh có nghĩa vụ học tập và tuân thủ nội quy.'),
    Q('Nghĩa vụ của trẻ em với cộng đồng?', ['Mặc kệ', 'Chỉ tham gia khi được thưởng hoặc được khen', 'Tôn trọng pháp luật, bảo vệ môi trường, giúp đỡ người khác', 'Vi phạm'], 2, 'Trẻ em có trách nhiệm với cộng đồng phù hợp tuổi.'),
    Q('Nghĩa vụ với bản thân?', ['Ăn vô độ', 'Lười biếng', 'Rèn luyện đạo đức, sức khoẻ, học tập', 'Bỏ học'], 2, 'Rèn luyện bản thân là nghĩa vụ với chính mình.'),
  ]),

  M(32, 'Bảo vệ quyền trẻ em', [
    Q('Khi bị xâm hại, trẻ em nên?', ['Im lặng', 'Bỏ nhà đi', 'Trả thù', 'Báo người tin cậy, gọi 111 (Tổng đài bảo vệ trẻ em)'], 3, 'Gọi 111 hoặc báo người lớn tin cậy ngay lập tức.'),
    Q('Số điện thoại Tổng đài bảo vệ trẻ em là?', ['115', '114', '111', '113'], 2, '111 là Tổng đài quốc gia bảo vệ trẻ em.'),
    Q('Khi thấy bạn bị bạo hành gia đình, em nên?', ['Mặc kệ', 'Quay clip đăng mạng', 'Báo người lớn, cô giáo, hoặc gọi 111', 'Khuyên bạn nhịn'], 2, 'Báo người có trách nhiệm để bảo vệ bạn.'),
    Q('Trường hợp nào người lớn vi phạm quyền trẻ em?', ['Chăm sóc sức khoẻ', 'Cho trẻ đi học', 'Bắt trẻ em làm việc nặng, bỏ học', 'Yêu thương trẻ'], 2, 'Bắt trẻ làm việc nặng, bỏ học là vi phạm quyền.'),
    Q('Vai trò của Luật Trẻ em 2016?', ['Quy định quyền, bảo vệ và chăm sóc trẻ em ở VN', 'Cấm trẻ em', 'Không có vai trò', 'Hạn chế quyền trẻ'], 0, 'Luật Trẻ em 2016 là cơ sở pháp lý bảo vệ trẻ em.'),
  ]),

  M(33, 'Trách nhiệm của HS với quyền trẻ em', [
    Q('Em hiểu quyền của mình, em nên?', ['Đòi hỏi quá mức', 'Coi thường người khác', 'Lạm dụng quyền', 'Thực hiện đúng quyền và tôn trọng quyền của bạn'], 3, 'Thực hiện đúng quyền và tôn trọng người khác.'),
    Q('Khi quyền của em bị vi phạm, em nên?', ['Bày tỏ ý kiến với người tin cậy, nhờ giúp đỡ', 'Bạo lực', 'Trả thù', 'Im lặng chịu đựng'], 0, 'Bày tỏ và nhờ giúp đỡ là cách đúng.'),
    Q('Em là trẻ em, em có quyền tham gia ý kiến?', ['Không, phải đợi 18 tuổi', 'Đúng, em được phát biểu ý kiến trong gia đình, lớp', 'Chỉ con trai có quyền', 'Không cần ai nghe'], 1, 'Trẻ em có quyền tham gia ý kiến phù hợp tuổi.'),
    Q('Khi tham gia mạng xã hội, em nên?', ['Đăng địa chỉ nhà', 'Cung cấp đủ thông tin', 'Bảo vệ thông tin cá nhân, không kết bạn người lạ', 'Hẹn gặp người lạ'], 2, 'Bảo vệ thông tin cá nhân khi online.'),
    Q('Lời khuyên cho HS để bảo vệ mình?', ['Tự xử lý mọi việc', 'Học kĩ năng sống, không giấu giếm khi gặp khó, tin cậy người thân', 'Mặc kệ', 'Cô lập'], 1, 'Học kĩ năng và chia sẻ với người tin cậy.'),
  ]),

  M(34, 'Ôn tập học kì 2 — Tổng kết', [
    Q('Khi bị bắt nạt ở trường, em nên?', ['Báo thầy cô và gia đình ngay', 'Đánh trả', 'Trốn học', 'Im lặng'], 0, 'Báo thầy cô và gia đình là cách giải quyết đúng.'),
    Q('Quản lý tiền hiệu quả cần?', ['Giấu tiền', 'Vay nợ', 'Ghi chép, phân biệt cần/muốn, tiết kiệm', 'Tiêu thoả thích'], 2, 'Ghi chép và tiết kiệm là cơ bản.'),
    Q('Tệ nạn nguy hiểm nhất với HS?', ['Đọc sách', 'Ma tuý, cờ bạc, game bệnh lý', 'Học giỏi', 'Tập thể dục'], 1, 'Ma tuý, cờ bạc, game bệnh lý rất nguy hiểm.'),
    Q('Bốn nhóm quyền trẻ em?', ['Ăn — ngủ — chơi — học', 'Sống còn, bảo vệ, phát triển, tham gia', 'Học — chơi', '1 nhóm chung'], 1, '4 nhóm theo Công ước LHQ về quyền trẻ em.'),
    Q('Khi bị xâm hại, gọi số nào?', ['111', '113', '115', '114'], 0, '111 — Tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  // ===== T35: Tổng ôn cuối năm =====
  M(35, 'Tổng ôn cuối năm', [
    Q('Truyền thống quê hương cần được?', ['Giữ gìn và phát huy', 'Sao chép nơi khác', 'Chỉ lưu giữ trong bảo tàng, không dạy lại cho trẻ', 'Bỏ hết'], 0, 'Giữ gìn và phát huy là trách nhiệm chung.'),
    Q('Học tập tự giác là?', ['Học khi bị ép', 'Tự chủ động học mà không cần nhắc', 'Học vì thưởng', 'Học theo phong trào'], 1, 'Tự giác là chủ động.'),
    Q('Giữ chữ tín giúp?', ['Được tin cậy và thành công', 'Bị xa lánh', 'Mất bạn', 'Khổ sở'], 0, 'Chữ tín tạo nên uy tín và thành công.'),
    Q('Bảo tồn di sản văn hoá là?', ['Mặc kệ', 'Tôn trọng, giữ gìn, quảng bá', 'Bán đi', 'Cải biên hiện vật cho hợp thị hiếu hiện đại'], 1, 'Tôn trọng và giữ gìn là bảo tồn di sản.'),
    Q('Ứng phó căng thẳng đúng cách?', ['Cô lập', 'Bỏ học', 'Thư giãn, chia sẻ, tập thể dục', 'Bạo lực'], 2, 'Thư giãn và chia sẻ là cách lành mạnh.'),
  ]),
];

export const S7GDCD_SCENARIOS = indexBy(S7GDCD_WEEKS);
