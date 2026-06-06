// ============================================================
// Lớp 12 · GIÁO DỤC QUỐC PHÒNG VÀ AN NINH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (GDQPAN 12, bộ Kết nối tri thức): Bảo vệ Tổ quốc — Tổ chức QĐND/CAND — Tuyển sinh QĐ-CA
// — Diễn biến hoà bình — Truyền thống đánh giặc địa phương — Bắn súng AK — Phương hướng — Tư thế vận động — Chạy vũ trang.
// ID prefix: "H12GDQP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12GDQP', 'gdqp', n, title, qs, opts);

export const H12GDQP_WEEKS = [
  // ──────────────── HK1 — Lý thuyết và tổ chức lực lượng ────────────────
  M(1, 'Bảo vệ Tổ quốc Việt Nam XHCN sau 1975 — Bối cảnh và nhiệm vụ', [
    Q('Sự kiện đánh dấu thống nhất đất nước về mặt Nhà nước sau 1975?', [ 'Tổng tuyển cử bầu Quốc hội khoá VI năm 1976', 'Cải cách ruộng đất', 'Đại hội VI 1986','Hiệp định Paris 1973'], 0, 'Quốc hội khoá VI thống nhất Nhà nước.'),
    Q('Tên nước Cộng hoà xã hội chủ nghĩa Việt Nam được công bố năm?', ['1945', '1954', '1975', '1976'], 3, 'Quốc hội khoá VI họp 1976.'),
    Q('Hai nhiệm vụ chiến lược của cách mạng Việt Nam sau 1975 là?', [ 'Xây dựng CNXH và bảo vệ Tổ quốc XHCN', 'Tăng dân số và phát triển nông nghiệp', 'Hợp tác quốc tế và mở cửa','Phát triển kinh tế và du lịch'], 0, 'Hai nhiệm vụ chiến lược song hành.'),
    Q('Bảo vệ Tổ quốc Việt Nam XHCN là?', [ 'Sự nghiệp của toàn dân, dưới sự lãnh đạo của Đảng', 'Việc của Bộ Quốc phòng', 'Của riêng lực lượng vũ trang','Trách nhiệm của riêng Quân đội'], 0, 'Toàn dân — toàn diện.'),
    Q('Quan điểm "kết hợp kinh tế với quốc phòng" có nghĩa là?', [ 'Phát triển kinh tế gắn với củng cố quốc phòng an ninh', 'Chỉ ưu tiên kinh tế', 'Chỉ ưu tiên quốc phòng','Tách rời hai lĩnh vực'], 0, 'Kết hợp đồng thời.'),
    Q('Đối tượng tác chiến chiến lược của ta hiện nay được xác định là?', [ 'Bất kỳ thế lực nào có hành động xâm phạm lợi ích quốc gia — dân tộc', 'Các nước phát triển', 'Các nước nhỏ','Mọi quốc gia láng giềng'], 0, 'Đối tượng theo hành vi xâm phạm.'),
  ]),

  M(2, 'Bảo vệ Tổ quốc — Quan điểm và phương châm', [
    Q('Mục tiêu bảo vệ Tổ quốc bao gồm?', [ 'Độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ; chế độ XHCN, Đảng, Nhà nước, nhân dân', 'Chỉ chế độ chính trị', 'Chỉ tài nguyên','Chỉ chủ quyền lãnh thổ'], 0, 'Mục tiêu toàn diện.'),
    Q('Sức mạnh bảo vệ Tổ quốc là?', [ 'Sức mạnh tổng hợp của toàn dân tộc kết hợp sức mạnh thời đại', 'Sức mạnh kinh tế', 'Sức mạnh ngoại giao','Sức mạnh quân sự đơn thuần'], 0, 'Tổng hợp + thời đại.'),
    Q('Lực lượng nòng cốt trong bảo vệ Tổ quốc?', [ 'Lực lượng vũ trang nhân dân', 'Hội Phụ nữ', 'Mặt trận Tổ quốc','Đoàn Thanh niên'], 0, 'Quân đội, Công an, Dân quân.'),
    Q('Phương châm xử lý các tình huống quốc phòng — an ninh?', [ 'Kiên quyết, kiên trì, giữ vững môi trường hoà bình để phát triển', 'Né tránh hoàn toàn', 'Chờ quốc tế giải quyết','Chỉ dùng vũ lực'], 0, 'Hoà bình + kiên định.'),
    Q('Quan điểm của Đảng về "đối tác — đối tượng" là?', [ 'Trong đối tác có đối tượng, trong đối tượng có đối tác', 'Luôn coi nhau là đối tượng', 'Luôn coi nhau là đối tác','Cố định một chiều'], 0, 'Linh hoạt, biện chứng.'),
    Q('Trách nhiệm của học sinh trong sự nghiệp bảo vệ Tổ quốc?', [ 'Học tập tốt, rèn luyện đạo đức, sẵn sàng tham gia nghĩa vụ quân sự khi đến tuổi', 'Chỉ đi du lịch', 'Chỉ học ngoại ngữ','Không liên quan'], 0, 'Học tập + sẵn sàng.'),
  ]),

  M(3, 'Bảo vệ Tổ quốc — Nội dung và biện pháp', [
    Q('Nền quốc phòng toàn dân được xây dựng dựa trên?', [ 'Toàn dân, toàn diện, độc lập, tự chủ, tự cường, ngày càng hiện đại', 'Sức mạnh đồng minh', 'Lực lượng đánh thuê','Riêng quân đội'], 0, 'Toàn dân, toàn diện.'),
    Q('Thế trận quốc phòng toàn dân kết hợp chặt chẽ với?', [ 'Thế trận an ninh nhân dân', 'Thương mại quốc tế', 'Bưu chính viễn thông','Du lịch'], 0, 'QPTD + ANND.'),
    Q('Xây dựng khu vực phòng thủ tỉnh, thành phố nhằm?', [ 'Phát huy sức mạnh tổng hợp tại địa phương để bảo vệ', 'Thu hút đầu tư', 'Tăng dân số','Du lịch'], 0, 'Khu vực phòng thủ vững chắc.'),
    Q('Đối ngoại quốc phòng nhằm?', [ 'Tạo môi trường hoà bình, hợp tác, củng cố vị thế đất nước', 'Cô lập quốc tế', 'Bí mật hoàn toàn','Đối đầu'], 0, 'Hợp tác — hội nhập.'),
    Q('Bảo vệ chủ quyền biển, đảo Việt Nam được thực hiện?', [ 'Bằng biện pháp hoà bình, trên cơ sở luật pháp quốc tế và UNCLOS 1982', 'Không quan tâm', 'Giao cho nước khác','Bằng vũ lực ngay lập tức'], 0, 'Hoà bình + luật pháp.'),
    Q('Học sinh THPT có thể tham gia bảo vệ Tổ quốc qua?', [ 'Tham gia GDQP-AN, hoạt động Đoàn, tuyên truyền chống tin xấu, độc trên mạng', 'Bỏ học', 'Chơi game suốt ngày','Ngủ nhiều'], 0, 'Hành động thiết thực.'),
  ]),

  M(4, 'Tổ chức Quân đội nhân dân Việt Nam — Tổng quan', [
    Q('Ngày thành lập Quân đội nhân dân Việt Nam?', [ '22/12/1944', '02/9/1945', '07/5/1954','19/8/1945'], 0, 'Đội VNTTGPQ, 22/12/1944.'),
    Q('Tên gọi đầu tiên của Quân đội nhân dân Việt Nam?', [ 'Đội Việt Nam Tuyên truyền Giải phóng quân', 'Vệ quốc đoàn', 'Quân giải phóng miền Nam','Quân đội nhân dân'], 0, 'Tiền thân.'),
    Q('Người được giao thành lập Đội Việt Nam Tuyên truyền Giải phóng quân?', [ 'Đồng chí Võ Nguyên Giáp', 'Đồng chí Trường Chinh', 'Đồng chí Lê Duẩn','Đồng chí Phạm Văn Đồng'], 0, 'Đại tướng Võ Nguyên Giáp.'),
    Q('Bản chất giai cấp của QĐND Việt Nam?', [ 'Mang bản chất giai cấp công nhân, tính nhân dân, tính dân tộc sâu sắc', 'Phong kiến', 'Trung lập','Tư sản'], 0, 'Bản chất CN-ND-DT.'),
    Q('Chức năng của Quân đội nhân dân Việt Nam là?', [ 'Đội quân chiến đấu, công tác và lao động sản xuất', 'Chỉ sản xuất', 'Chỉ công tác','Chỉ chiến đấu'], 0, 'Ba chức năng.'),
    Q('Đảng Cộng sản Việt Nam lãnh đạo Quân đội theo nguyên tắc?', [ 'Tuyệt đối, trực tiếp về mọi mặt', 'Một phần', 'Khi cần thiết','Gián tiếp'], 0, 'Tuyệt đối, trực tiếp.'),
  ]),

  M(5, 'Tổ chức Quân đội nhân dân — Hệ thống tổ chức', [
    Q('Cơ quan chỉ huy cao nhất của QĐND Việt Nam?', [ 'Bộ Quốc phòng', 'Tổng cục Chính trị', 'Quân uỷ Trung ương','Bộ Tổng Tham mưu'], 0, 'Bộ Quốc phòng quản lý nhà nước về quốc phòng.'),
    Q('QĐND Việt Nam gồm các thành phần chính?', [ 'Bộ đội chủ lực, bộ đội địa phương, bộ đội biên phòng', 'Chỉ hải quân', 'Chỉ không quân','Chỉ bộ binh'], 0, 'Ba thành phần.'),
    Q('Cấp bậc quân hàm cao nhất trong QĐND Việt Nam hiện nay?', [ 'Đại tướng', 'Thiếu tướng', 'Trung tướng','Thượng tướng'], 0, 'Đại tướng là cao nhất.'),
    Q('Các quân chủng của QĐND Việt Nam gồm?', ['Lục quân, Hải quân, Phòng không — Không quân', 'Chỉ Lục quân', 'Chỉ Hải quân', 'Chỉ Không quân'], 0, 'Ba quân chủng.'),
    Q('Quân chủng Lục quân không tổ chức thành?', [ 'Bộ Tư lệnh Quân chủng riêng (Lục quân là cơ bản, không có Bộ Tư lệnh quân chủng riêng)', 'Sư đoàn', 'Lữ đoàn','Quân đoàn'], 0, 'Lục quân không có BTL quân chủng riêng.'),
    Q('Bộ đội Biên phòng có nhiệm vụ?', ['Bảo vệ biên giới quốc gia, vùng biển, đảo', 'Quản lý đô thị', 'Cứu hộ y tế', 'Vận tải hàng hoá'], 0, 'Bảo vệ biên giới.'),
  ]),

  M(6, 'Tổ chức Công an nhân dân Việt Nam', [
    Q('Ngày truyền thống Công an nhân dân Việt Nam?', [ '19/8/1945', '03/02', '02/9','22/12'], 0, '19/8/1945 — ngày truyền thống CAND.'),
    Q('Công an nhân dân Việt Nam đặt dưới sự lãnh đạo của?', [ 'Đảng Cộng sản Việt Nam, sự thống lĩnh của Chủ tịch nước, quản lý của Chính phủ', 'Quân đội', 'Quốc hội','Một cá nhân'], 0, 'Tương tự QĐND.'),
    Q('Cấp bậc cao nhất trong CAND Việt Nam?', [ 'Đại tướng', 'Trung tướng', 'Thiếu tướng','Thượng tướng'], 0, 'Đại tướng.'),
    Q('Cơ quan quản lý nhà nước về CAND?', [ 'Bộ Công an', 'Bộ Nội vụ', 'Bộ Tư pháp','Bộ Quốc phòng'], 0, 'Bộ Công an.'),
    Q('CAND Việt Nam gồm hai lực lượng chính?', [ 'An ninh nhân dân và Cảnh sát nhân dân', 'Chỉ Cảnh sát', 'Chỉ An ninh','Cảnh sát giao thông và hình sự'], 0, 'ANND + CSND.'),
    Q('Nhiệm vụ cơ bản của CAND là?', [ 'Bảo vệ an ninh quốc gia, bảo đảm trật tự an toàn xã hội, đấu tranh phòng chống tội phạm', 'Sản xuất kinh tế', 'Quản lý ngân sách','Quân sự đối ngoại'], 0, 'Hai nhiệm vụ trụ cột.'),
  ]),

  M(7, 'Tuyển sinh đào tạo các trường QĐND — Đối tượng và tiêu chuẩn', [
    Q('Đối tượng tuyển sinh các trường QĐND chủ yếu là?', [ 'Thanh niên ngoài quân đội và quân nhân tại ngũ đủ tiêu chuẩn', 'Chỉ người nước ngoài', 'Chỉ người trên 30 tuổi','Mọi công dân'], 0, 'Hai nguồn chính.'),
    Q('Độ tuổi tuyển sinh đào tạo sĩ quan cấp phân đội từ thanh niên ngoài quân đội?', [ 'Không quá 21 tuổi (riêng quân nhân đã tại ngũ không quá 23)', 'Trên 30', 'Bất kỳ','Dưới 17'], 0, 'Theo Thông tư của BQP.'),
    Q('Tiêu chuẩn chính trị, đạo đức của thí sinh đăng ký vào trường quân đội?', [ 'Phải lý lịch chính trị rõ ràng, phẩm chất đạo đức tốt', 'Tự do', 'Chỉ cần giàu có','Không yêu cầu'], 0, 'Lý lịch + đạo đức.'),
    Q('Tiêu chuẩn sức khoẻ tuyển sinh trường quân đội?', [ 'Đạt loại 1 hoặc 2 theo quy định của Bộ Quốc phòng (một số ngành đặc thù còn cao hơn)', 'Loại 5', 'Tuỳ ý thí sinh','Không cần khám'], 0, 'Khám sức khoẻ chặt chẽ.'),
    Q('Thí sinh đăng ký dự thi vào trường quân đội phải qua bước nào trước?', [ 'Sơ tuyển tại Ban Chỉ huy quân sự cấp huyện nơi đăng ký hộ khẩu', 'Đăng ký qua mạng cá nhân', 'Không cần sơ tuyển','Tự đăng ký với trường'], 0, 'Sơ tuyển ở BCH QS huyện.'),
    Q('Sau khi tốt nghiệp, học viên các trường QĐND?', [ 'Được phong quân hàm sĩ quan và phân công công tác theo yêu cầu của Quân đội', 'Đi nước ngoài tự do', 'Không phải phục vụ Quân đội','Tự do tìm việc'], 0, 'Phân công công tác.'),
  ]),

  M(8, 'Tuyển sinh đào tạo các trường CAND — Đối tượng và tiêu chuẩn', [
    Q('Tiêu chuẩn chính trị tuyển sinh CAND?', [ 'Bảo đảm tiêu chuẩn chính trị theo quy định của Bộ Công an, lý lịch rõ ràng', 'Không cần xét', 'Chỉ cần học giỏi','Tự do'], 0, 'Chặt chẽ.'),
    Q('Độ tuổi tuyển sinh CAND đối với học sinh phổ thông?', [ 'Không quá 22 tuổi (theo quy định hiện hành của Bộ Công an)', 'Dưới 15', 'Bất kỳ','Trên 25'], 0, 'Theo TT BCA.'),
    Q('Tiêu chuẩn hình thể của tuyển sinh CAND yêu cầu?', [ 'Chiều cao, cân nặng đạt mức quy định riêng cho nam/nữ', 'Phải mập', 'Phải gầy','Không yêu cầu'], 0, 'Có chuẩn nam/nữ.'),
    Q('Sơ tuyển tuyển sinh CAND diễn ra ở?', [ 'Công an cấp huyện nơi đăng ký hộ khẩu', 'Trên mạng', 'Bộ Công an trực tiếp','Trường THPT'], 0, 'Công an huyện sơ tuyển.'),
    Q('Sau khi tốt nghiệp, học viên trường CAND?', [ 'Được phong cấp bậc, phân công công tác trong CAND', 'Chuyển sang QĐND', 'Không phục vụ ngành','Đi tìm việc tự do'], 0, 'Phục vụ CAND.'),
    Q('Học viên trường QĐND, CAND khi đào tạo được?', [ 'Trả học phí cao', 'Không có chế độ','Tự túc hoàn toàn', 'Nhà nước nuôi dưỡng, cấp phát quân trang, phụ cấp theo quy định'], 3, 'Chế độ học viên.'),
  ]),

  M(9, 'Tuyển sinh QĐ-CA — Hồ sơ và quy trình', [
    Q('Hồ sơ dự thi trường quân đội, công an cần?', [ 'Chỉ ảnh', 'Chỉ học bạ','Chỉ phiếu đăng ký', 'Phiếu sơ tuyển, lý lịch tự khai có xác nhận, giấy khám sức khoẻ, các giấy tờ khác theo quy định'], 3, 'Hồ sơ riêng + đăng ký THPT.'),
    Q('Thí sinh dự thi vào trường QĐ-CA phải đăng ký nguyện vọng?', [ 'Chỉ một nguyện vọng và không thay đổi', 'Không cần đăng ký','Tự do nhiều ngành', 'Theo các quy định cụ thể (chỉ một số nguyện vọng phù hợp khối thi và sơ tuyển)'], 3, 'Có ràng buộc riêng.'),
    Q('Nếu không trúng tuyển trường QĐ-CA, thí sinh?', [ 'Mất quyền thi tiếp', 'Cấm thi 3 năm','Phải nghỉ học', 'Được dùng kết quả thi THPT xét vào các trường đại học, cao đẳng khác'], 3, 'Bình thường như TS khác.'),
    Q('Khi nộp hồ sơ sơ tuyển, thí sinh cần?', [ 'Khai gian để dễ trúng', 'Không cần kê khai','Chỉ điền tên', 'Khai trung thực mọi nội dung trong lý lịch'], 3, 'Trung thực là bắt buộc.'),
    Q('Nội dung khám sức khoẻ tuyển sinh CAND, QĐND?', [ 'Chỉ thị lực', 'Tự khai sức khoẻ','Chỉ đo huyết áp', 'Khám toàn diện thể lực, các chuyên khoa và xét nghiệm theo quy định'], 3, 'Khám toàn diện.'),
    Q('Thông tin tuyển sinh QĐ-CA được công bố ở?', [ 'Chỉ truyền miệng', 'Chỉ ở trường THPT','Bí mật', 'Cổng thông tin Bộ Quốc phòng, Bộ Công an và phương tiện truyền thông chính thống'], 3, 'Công khai nguồn chính thống.'),
  ]),

  M(10, 'Chiến lược "Diễn biến hoà bình" — Khái niệm', [
    Q('"Diễn biến hoà bình" là chiến lược của?', [ 'Liên hợp quốc', 'Một tổ chức tôn giáo','Việt Nam', 'Các thế lực thù địch chống phá CNXH bằng biện pháp phi vũ trang'], 3, 'Chiến lược của thế lực thù địch.'),
    Q('Đặc điểm cơ bản của "diễn biến hoà bình" là?', [ 'Hợp tác hai bên cùng có lợi', 'Hoà giải dân tộc','Sử dụng quân sự công khai', 'Sử dụng các biện pháp phi vũ trang để chuyển hoá chế độ'], 3, 'Phi vũ trang là chính.'),
    Q('Mục tiêu cuối cùng của "diễn biến hoà bình" với Việt Nam?', [ 'Phát triển khoa học', 'Bảo vệ môi trường','Hợp tác kinh tế', 'Xoá bỏ vai trò lãnh đạo của Đảng và chế độ XHCN'], 3, 'Xoá bỏ chế độ XHCN.'),
    Q('Các lĩnh vực mà "diễn biến hoà bình" thường tấn công?', [ 'Chỉ văn hoá', 'Chỉ tôn giáo','Chỉ kinh tế', 'Chính trị, tư tưởng, văn hoá, kinh tế, dân tộc, tôn giáo, đối ngoại'], 3, 'Tổng hợp nhiều lĩnh vực.'),
    Q('Phương thức tiến hành "diễn biến hoà bình"?', [ 'Chỉ qua thể thao', 'Chỉ qua y tế','Chỉ qua quân sự', 'Sử dụng truyền thông, mạng xã hội, viện trợ có điều kiện, kích động chia rẽ'], 3, 'Đa dạng, tinh vi.'),
    Q('"Tự diễn biến", "tự chuyển hoá" trong nội bộ là?', [ 'Không có thật', 'Việc nhỏ','Hiện tượng tích cực', 'Hệ quả nguy hiểm khi "diễn biến hoà bình" thâm nhập vào tổ chức Đảng và xã hội'], 3, 'Hệ quả nội tại nguy hiểm.'),
  ]),

  M(11, 'Diễn biến hoà bình — Thủ đoạn cụ thể', [
    Q('Trên lĩnh vực tư tưởng — văn hoá, "diễn biến hoà bình" thường?', [ 'Phổ biến văn hoá dân tộc', 'Tăng cường giáo dục đạo đức','Khuyến khích đoàn kết', 'Truyền bá lối sống thực dụng, phai nhạt lý tưởng, xuyên tạc lịch sử'], 3, 'Tấn công tư tưởng.'),
    Q('Trên lĩnh vực kinh tế, thủ đoạn phổ biến?', [ 'Đầu tư bình đẳng', 'Chuyển giao công nghệ vô điều kiện','Hợp tác công bằng', 'Áp đặt cải cách theo hướng tư bản, gắn viện trợ với điều kiện chính trị'], 3, 'Kinh tế gắn chính trị.'),
    Q('Trên lĩnh vực dân tộc, tôn giáo, thủ đoạn là?', [ 'Tôn trọng tự do tín ngưỡng', 'Bảo vệ văn hoá dân tộc','Tăng đoàn kết', 'Kích động ly khai, lợi dụng tự do tín ngưỡng để chia rẽ khối đại đoàn kết'], 3, 'Chia rẽ.'),
    Q('Trên lĩnh vực đối ngoại, thường?', [ 'Tôn trọng độc lập', 'Hợp tác bình đẳng','Tăng cường hữu nghị', 'Cô lập Việt Nam, can thiệp công việc nội bộ với chiêu bài "dân chủ", "nhân quyền"'], 3, 'Can thiệp nội bộ.'),
    Q('Bạo loạn lật đổ thường được tiến hành?', [ 'Hoà bình ôn hoà', 'Vì lý do cá nhân','Đơn lẻ tự phát', 'Có tổ chức, có chỉ đạo từ bên ngoài, lợi dụng vấn đề bức xúc xã hội'], 3, 'Có tổ chức + chỉ đạo.'),
    Q('Lực lượng thường được lợi dụng trong bạo loạn lật đổ?', [ 'Công nhân viên chức', 'Người cao tuổi yêu nước','Bộ đội chính quy', 'Phần tử bất mãn, đối tượng có tiền án, thanh thiếu niên thiếu hiểu biết'], 3, 'Lực lượng chống đối.'),
  ]),

  M(12, 'Phòng chống Diễn biến hoà bình — Trách nhiệm', [
    Q('Quan điểm phòng chống "diễn biến hoà bình" của Đảng ta?', [ 'Chỉ chờ xảy ra mới xử lý', 'Né tránh hoàn toàn','Bị động', 'Chủ động tiến công, kết hợp phòng ngừa và đấu tranh'], 3, 'Chủ động tiến công.'),
    Q('Lực lượng nòng cốt trong phòng chống "diễn biến hoà bình"?', [ 'Chỉ Quân đội', 'Chỉ Công an','Một cá nhân', 'Toàn dân, toàn quân, dưới sự lãnh đạo của Đảng, nòng cốt là LLVTND'], 3, 'Toàn dân + LLVTND.'),
    Q('Biện pháp căn cốt phòng chống "tự diễn biến" trong nội bộ?', [ 'Phớt lờ', 'Chỉ tăng lương','Im lặng', 'Tăng cường xây dựng Đảng trong sạch, vững mạnh; nâng cao bản lĩnh chính trị cán bộ, đảng viên'], 3, 'Xây dựng nội bộ vững mạnh.'),
    Q('Trên không gian mạng, học sinh cần?', [ 'Lan truyền tin giật gân', 'Phớt lờ kiểm chứng','Chia sẻ mọi tin tức', 'Cảnh giác, không tin, không nghe, không chia sẻ thông tin xấu, độc chưa kiểm chứng'], 3, 'Cảnh giác mạng.'),
    Q('Khi phát hiện hành vi lợi dụng dân chủ chống phá Nhà nước, công dân?', [ 'Tham gia ủng hộ', 'Chia sẻ rộng rãi','Im lặng', 'Tích cực phát hiện, đấu tranh, thông báo cho cơ quan chức năng'], 3, 'Báo cơ quan chức năng.'),
    Q('Trách nhiệm của học sinh trong phòng chống "diễn biến hoà bình"?', [ 'Bỏ học', 'Tự do làm gì cũng được','Không cần', 'Học tập tốt, tu dưỡng đạo đức, chấp hành pháp luật, cảnh giác trên mạng'], 3, 'Hành động cụ thể.'),
  ]),

  M(13, 'Bạo loạn lật đổ — Nhận diện và phòng chống', [
    Q('Bạo loạn lật đổ là?', [ 'Biểu tình ôn hoà', 'Tranh luận chính trị','Tranh chấp dân sự', 'Hành động dùng bạo lực có tổ chức của lực lượng phản động hòng lật đổ chính quyền'], 3, 'Bạo lực + tổ chức + lật đổ.'),
    Q('Hình thức bạo loạn lật đổ?', [ 'Chỉ vũ trang', 'Chỉ kinh tế','Chỉ chính trị', 'Bạo loạn chính trị, bạo loạn vũ trang hoặc kết hợp cả hai'], 3, 'Đa dạng hình thức.'),
    Q('Bạo loạn lật đổ thường lợi dụng?', [ 'Mùa thu hoạch nông nghiệp', 'Tết Nguyên đán cổ truyền','Các ngày lễ lớn để chúc mừng', 'Vấn đề bức xúc xã hội, sự kiện nhạy cảm, mâu thuẫn nội bộ'], 3, 'Lợi dụng bức xúc.'),
    Q('Khi có dấu hiệu tụ tập đông người gây rối, công dân nên?', [ 'Quay video lan truyền', 'Kích động thêm','Tham gia ngay', 'Không tham gia, không tiếp tay, kịp thời báo chính quyền'], 3, 'Không tham gia + báo.'),
    Q('Lực lượng xử lý bạo loạn lật đổ là?', [ 'Tổ chức nước ngoài', 'Tự xử lý cá nhân','Người dân tự xử', 'Lực lượng vũ trang nhân dân kết hợp các lực lượng khác theo phương châm nhanh, gọn, đúng pháp luật'], 3, 'LLVTND xử lý.'),
    Q('Phương châm xử lý bạo loạn?', [ 'Thận trọng kéo dài', 'Phớt lờ','Kéo dài', 'Nhanh chóng, kiên quyết, linh hoạt, đúng đối tượng, không để lan rộng'], 3, 'Nhanh — đúng — gọn.'),
  ]),

  M(14, 'Truyền thống đánh giặc giữ nước của địa phương — Khái quát', [
    Q('Truyền thống đánh giặc giữ nước của dân tộc Việt Nam bắt nguồn từ?', [ 'Sau 1945', 'Sau 1975','Mới đây', 'Hàng nghìn năm lịch sử dựng nước và giữ nước'], 3, 'Hàng nghìn năm.'),
    Q('Đặc điểm nổi bật của nghệ thuật quân sự Việt Nam?', [ 'Phụ thuộc nước ngoài', 'Chỉ đánh chính quy','Lấy nhiều thắng ít', 'Lấy ít địch nhiều, lấy nhỏ thắng lớn, lấy yếu chống mạnh'], 3, 'Đặc trưng Việt Nam.'),
    Q('Tư tưởng quân sự xuyên suốt của dân tộc ta?', [ 'Đánh thuê', 'Chỉ dùng vũ khí hiện đại','Phòng thủ thụ động', 'Cả nước đánh giặc, toàn dân đánh giặc, lấy dân làm gốc'], 3, 'Toàn dân đánh giặc.'),
    Q('Truyền thống đánh giặc của địa phương là?', [ 'Riêng biệt hoàn toàn', 'Không liên quan','Tách rời truyền thống dân tộc', 'Một bộ phận, biểu hiện cụ thể của truyền thống đánh giặc giữ nước của dân tộc tại mỗi vùng'], 3, 'Bộ phận của truyền thống chung.'),
    Q('Việc giáo dục truyền thống đánh giặc của địa phương nhằm?', [ 'Gây mâu thuẫn vùng miền', 'Phát triển du lịch đơn thuần','Bỏ qua quá khứ', 'Khơi dậy lòng tự hào, ý thức trách nhiệm, tinh thần sẵn sàng bảo vệ Tổ quốc'], 3, 'Giáo dục lòng yêu nước.'),
    Q('Để tìm hiểu truyền thống đánh giặc địa phương, học sinh có thể?', [ 'Tự nghĩ ra', 'Tin tin đồn','Bỏ qua', 'Tham quan bảo tàng, di tích lịch sử; gặp gỡ nhân chứng; đọc sách lịch sử địa phương'], 3, 'Đa dạng nguồn.'),
  ]),

  M(15, 'Nghệ thuật đánh giặc của địa phương — Một số nét tiêu biểu', [
    Q('Cách đánh giặc đặc trưng của Việt Nam thời phong kiến?', [ 'Đánh thuê', 'Du kích thuần tuý','Đối đầu trực diện thuần tuý', 'Chiến tranh nhân dân, dựa vào địa hình, làng xã chiến đấu'], 3, 'Chiến tranh nhân dân.'),
    Q('Trong kháng chiến chống Pháp và Mỹ, mỗi địa phương đều?', [ 'Chỉ chờ chủ lực', 'Bỏ trống','Không tham gia', 'Có thế trận làng xã chiến đấu, dân quân du kích kết hợp bộ đội địa phương và chủ lực'], 3, 'Ba thứ quân.'),
    Q('Ba thứ quân ở mỗi địa phương gồm?', ['Bộ đội chủ lực, bộ đội địa phương và dân quân tự vệ', 'Bộ binh, hải quân, không quân', 'Sĩ quan, hạ sĩ quan, binh sĩ', 'Lục, hải, không'], 0, 'Ba thứ quân.'),
    Q('Dân quân tự vệ ở địa phương có vai trò?', [ 'Chỉ tập trận', 'Chỉ diễu binh','Không quan trọng', 'Lực lượng vũ trang quần chúng, nòng cốt tại chỗ trong bảo vệ địa phương'], 3, 'Vai trò tại chỗ.'),
    Q('Khu vực phòng thủ địa phương được tổ chức cấp?', [ 'Chỉ xã', 'Chỉ thôn','Chỉ Trung ương', 'Tỉnh (thành phố) và huyện (quận, thị xã, thành phố thuộc tỉnh)'], 3, 'Tỉnh và huyện.'),
    Q('Trong bảo vệ địa phương, vai trò "thế trận lòng dân" là?', [ 'Thứ yếu', 'Bị bỏ qua','Không cần', 'Nền tảng, gốc rễ tạo nên sức mạnh của khu vực phòng thủ'], 3, 'Thế trận lòng dân.'),
  ]),

  M(16, 'Truyền thống địa phương — Trách nhiệm học sinh', [
    Q('Trách nhiệm của học sinh đối với truyền thống đánh giặc giữ nước của địa phương?', [ 'Bỏ qua hoàn toàn', 'Phủ nhận','Quên đi', 'Tìm hiểu, giữ gìn, phát huy, tích cực tham gia hoạt động đền ơn đáp nghĩa'], 3, 'Giữ gìn + phát huy.'),
    Q('Các hoạt động "Đền ơn đáp nghĩa" hướng tới?', [ 'Người nước ngoài', 'Ngẫu nhiên','Người giàu', 'Thương binh, gia đình liệt sĩ, người có công với cách mạng'], 3, 'Tri ân người có công.'),
    Q('Ngày Thương binh — Liệt sĩ là?', [ '02/9', '19/8','22/12', '27/7'], 3, '27/7.'),
    Q('Học sinh thể hiện lòng biết ơn các anh hùng liệt sĩ bằng?', [ 'Không quan tâm', 'Chỉ phát biểu trên mạng','Lời nói suông', 'Học tốt, rèn luyện đạo đức, tham gia thắp hương, dọn dẹp nghĩa trang liệt sĩ'], 3, 'Hành động thực tế.'),
    Q('Việc tham gia hoạt động Đoàn — Đội về truyền thống quân sự địa phương giúp?', [ 'Không có ích', 'Cản trở học tập','Mất thời gian', 'Rèn luyện ý chí, bồi đắp lòng yêu nước và trách nhiệm công dân'], 3, 'Rèn luyện toàn diện.'),
    Q('Cách phát huy truyền thống địa phương trong thời đại số?', [ 'Chỉ giấu kín', 'Chỉ truyền miệng','Bỏ qua mạng xã hội', 'Lan toả thông tin tích cực, chia sẻ tư liệu lịch sử chính thống trên mạng'], 3, 'Lan toả số.'),
  ]),

  M(17, 'Ôn tập HK1 — Tổng hợp lý thuyết', [
    Q('Hai nhiệm vụ chiến lược của cách mạng Việt Nam là?', [ 'Du lịch và xuất khẩu', 'Văn hoá và thể thao','Sản xuất và tiêu dùng', 'Xây dựng và bảo vệ Tổ quốc Việt Nam XHCN'], 3, 'Hai nhiệm vụ chiến lược.'),
    Q('Cấp bậc cao nhất trong QĐND và CAND Việt Nam đều là?', [ 'Thiếu tướng','Thượng tướng', 'Đại tướng', 'Trung tướng'], 2, 'Đều là Đại tướng.'),
    Q('Quân đội nhân dân Việt Nam và Công an nhân dân Việt Nam đều đặt dưới sự lãnh đạo?', [ 'Của Chính phủ một mình','Trực tiếp của Quốc hội', 'Tuyệt đối, trực tiếp về mọi mặt của Đảng Cộng sản Việt Nam', 'Của một cá nhân'], 2, 'Đảng lãnh đạo tuyệt đối, trực tiếp.'),
    Q('Mục tiêu cuối cùng của "diễn biến hoà bình" với Việt Nam?', [ 'Bảo vệ môi trường','Phát triển kinh tế', 'Xoá bỏ vai trò lãnh đạo của Đảng và chế độ XHCN', 'Hợp tác văn hoá'], 2, 'Phá chế độ.'),
    Q('Cách đánh giặc đặc trưng của dân tộc Việt Nam?', [ 'Chỉ chiến tranh thông thường','Đánh thuê', 'Toàn dân đánh giặc, lấy ít địch nhiều, dựa vào dân', 'Phụ thuộc nước ngoài'], 2, 'Chiến tranh nhân dân.'),
    Q('Trách nhiệm của học sinh THPT đối với nhiệm vụ bảo vệ Tổ quốc?', [ 'Không liên quan','Bỏ học', 'Học tập, rèn luyện, GDQP-AN, sẵn sàng tham gia nghĩa vụ quân sự khi đến tuổi', 'Du lịch nhiều'], 2, 'Học + rèn + sẵn sàng.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Ngày thành lập Quân đội nhân dân Việt Nam?', [ '02/9/1945','07/5/1954', '22/12/1944', '19/8/1945'], 2, '22/12/1944.'),
    Q('Ngày truyền thống Công an nhân dân Việt Nam?', [ '02/9','22/12', '19/8/1945', '27/7'], 2, '19/8/1945.'),
    Q('Bộ đội Biên phòng có nhiệm vụ chính?', [ 'Cứu thương','Bảo vệ đô thị', 'Quản lý, bảo vệ biên giới quốc gia, vùng biển, đảo', 'Vận tải'], 2, 'Bảo vệ biên giới.'),
    Q('Hai lực lượng chính trong CAND là?', [ 'Chỉ An ninh','Cảnh sát giao thông và hình sự', 'An ninh nhân dân và Cảnh sát nhân dân', 'Chỉ Cảnh sát'], 2, 'ANND + CSND.'),
    Q('Khi đăng ký dự thi vào trường QĐ-CA, thí sinh phải sơ tuyển ở?', [ 'Không cần sơ tuyển','Trường THPT', 'BCH Quân sự cấp huyện (với QĐ) / Công an cấp huyện (với CA) nơi đăng ký hộ khẩu', 'Bộ Quốc phòng/Bộ Công an trực tiếp'], 2, 'Cấp huyện sơ tuyển.'),
    Q('Quan điểm phòng chống "diễn biến hoà bình" của Đảng?', [ 'Đơn phương','Bị động chờ', 'Chủ động tiến công, kết hợp phòng ngừa và đấu tranh', 'Bỏ qua'], 2, 'Chủ động tiến công.'),
  ]),

  // ──────────────── HK2 — Kỹ thuật quân sự ────────────────
  M(19, 'Kỹ thuật bắn súng tiểu liên AK — Khái quát', [
    Q('Súng tiểu liên AK do nước nào sản xuất ban đầu?', [ 'Pháp','Đức', 'Liên Xô (cũ)', 'Mỹ'], 2, 'Mikhail Kalashnikov thiết kế, 1947.'),
    Q('AK là viết tắt của?', [ 'Active Knife','Anti — Kalibr', 'Avtomat Kalashnikova (Tự động Kalashnikov)', 'Auto Klar'], 2, 'Tiếng Nga.'),
    Q('Tính năng cơ bản của AK?', [ 'Chỉ bắn phát một','Nặng và cồng kềnh', 'Bắn được phát một và liên thanh, cấu tạo đơn giản, bền bỉ, tin cậy', 'Phức tạp, dễ hỏng'], 2, 'Đơn giản, bền, tin cậy.'),
    Q('AK sử dụng đạn cỡ?', [ '12,7 mm','9 mm', '7,62 mm', '5,56 mm'], 2, 'Đạn 7,62 × 39 mm.'),
    Q('Tầm bắn ghi trên thước ngắm AK đến?', ['200 m', '500 m', '800 m', '1500 m'], 2, 'Thước ngắm đến 800 m.'),
    Q('Tầm bắn hiệu quả của AK với mục tiêu mặt đất?', [ '5000 m','Khoảng 50 m', 'Khoảng 400 m (mục tiêu mặt đất)', '2000 m'], 2, 'Hiệu quả ~400 m.'),
  ]),

  M(20, 'Súng tiểu liên AK — Cấu tạo và đạn', [
    Q('Hộp tiếp đạn của AK chứa được bao nhiêu viên?', ['10', '20', '30', '50'], 2, 'Hộp 30 viên là tiêu chuẩn.'),
    Q('AK hoạt động dựa trên nguyên lý?', [ 'Khí nén ngoài','Tay quay', 'Trích khí thuốc qua lỗ trích khí, đẩy bệ khoá nòng lùi', 'Lò xo điện'], 2, 'Trích khí thuốc.'),
    Q('Khối lượng AK (không có đạn) khoảng?', [ '15 kg','1 kg', '3,8 kg', '10 kg'], 2, 'Khoảng 3,8 kg.'),
    Q('Tốc độ bắn lý thuyết của AK?', [ '50 phát/phút','100 phát/phút', '600 phát/phút', '5000 phát/phút'], 2, 'Khoảng 600 phát/phút.'),
    Q('Tốc độ bắn chiến đấu (liên thanh) thực tế?', ['100 phát/phút', '600 phát/phút', '5 phát/phút', '10 phát/phút'], 0, 'Liên thanh ~ 100 phát/phút thực tế.'),
    Q('Đạn dùng cho AK gồm các loại?', [ 'Chỉ đạn cao su','Chỉ đạn thường', 'Đạn thường, đạn vạch đường, đạn xuyên cháy, đạn cháy', 'Chỉ đạn vạch đường'], 2, 'Đa dạng loại đạn.'),
  ]),

  M(21, 'Súng AK — Các bộ phận chính', [
    Q('Súng AK gồm bao nhiêu bộ phận chính?', ['3', '5', '11 bộ phận chính', '20'], 2, '11 bộ phận chính theo điều lệnh.'),
    Q('Bộ phận nào thực hiện việc dẫn hướng và ổn định đạn?', [ 'Cò','Báng súng', 'Nòng súng', 'Hộp tiếp đạn'], 2, 'Nòng có rãnh xoắn.'),
    Q('Lẫy bảo hiểm AK có chức năng?', [ 'Trích khí','Ngắm', 'Chọn chế độ bắn (an toàn — liên thanh — phát một) và khoá an toàn', 'Tiếp đạn'], 2, 'Khoá an toàn + chọn chế độ.'),
    Q('Bộ phận lê (lưỡi lê) dùng để?', [ 'Tiếp đạn','Trang trí', 'Đánh giáp lá cà, đâm gần', 'Ngắm'], 2, 'Cận chiến.'),
    Q('Báng súng có tác dụng?', [ 'Ngắm','Tiếp đạn', 'Tỳ vào vai khi bắn, giữ ổn định cho người bắn', 'Trích khí'], 2, 'Tỳ vai.'),
    Q('Trước khi sử dụng AK, người lính cần?', [ 'Không cần kiểm tra','Bóp cò ngay', 'Khám súng để bảo đảm súng an toàn, sạch, đầy đủ phụ tùng', 'Tự ý tháo lắp'], 2, 'Khám súng bắt buộc.'),
  ]),

  M(22, 'Bắn súng AK — Tư thế bắn và động tác cơ bản', [
    Q('Tư thế bắn cơ bản nhất với AK khi không có công sự?', [ 'Treo bắn','Đứng bắn', 'Nằm bắn (có tì hoặc không tì)', 'Quỳ bắn'], 2, 'Nằm bắn là cơ bản, ổn định.'),
    Q('Nằm bắn AK, người bắn lấy?', [ 'Không có điểm tựa','Hông làm điểm tựa', 'Khuỷu tay trái và phải làm điểm tựa, báng súng tỳ vào hõm vai phải', 'Đầu làm điểm tựa'], 2, 'Hai khuỷu tay + tỳ vai.'),
    Q('Hướng nằm bắn so với hướng mục tiêu thường tạo góc?', [ '0 độ','90 độ', 'Khoảng 30 độ về bên trái hướng mục tiêu', '180 độ'], 2, 'Lệch trái ~30 độ.'),
    Q('Ngắm bắn AK theo thứ tự?', [ 'Tùy ý','Đầu ruồi — đường ngắm — khe ngắm', 'Khe ngắm — đầu ruồi — mục tiêu (đường ngắm cơ bản đi qua giữa khe — đỉnh đầu ruồi — điểm ngắm)', 'Mục tiêu — báng súng — cò'], 2, 'Khe — đầu ruồi — mục tiêu.'),
    Q('Điểm ngắm cơ bản trên mục tiêu bia số 4 thường ở?', [ 'Bất kỳ','Đỉnh đầu', 'Chính giữa mép dưới mục tiêu (điểm ngắm cơ bản)', 'Mép trên'], 2, 'Chính giữa mép dưới.'),
    Q('Khi bóp cò AK, người bắn cần?', [ 'Không cần kỹ thuật','Giật mạnh', 'Bóp đều, từ từ, dứt khoát, không giật', 'Đẩy ngược'], 2, 'Bóp đều, dứt khoát.'),
  ]),

  M(23, 'Bắn AK — Bài 1b ngắm bắn mục tiêu cố định', [
    Q('Bài 1b bắn mục tiêu cố định ban ngày bằng AK sử dụng tư thế?', [ 'Chạy','Đứng bắn', 'Nằm bắn có bệ tì', 'Quỳ'], 2, 'Nằm bắn có bệ tì.'),
    Q('Số đạn cấp cho bài 1b thường là?', [ '30 viên','1 viên', '3 viên', '10 viên'], 2, '3 viên/lần bắn.'),
    Q('Cự ly bắn bài 1b thường là?', [ '1000 m','10 m', '100 m (bia số 4)', '500 m'], 2, '100 m với bia số 4.'),
    Q('Khi ngắm mà đầu ruồi lệch trái mục tiêu, đường đạn sẽ?', [ 'Lên cao','Đi đúng', 'Lệch trái', 'Lệch phải'], 2, 'Đạn đi theo đầu ruồi.'),
    Q('Khi đầu ruồi thấp hơn khe ngắm, đường đạn sẽ?', [ 'Không đổi','Đi đúng', 'Bay thấp', 'Bay cao'], 2, 'Đầu ruồi thấp → đạn thấp.'),
    Q('Yếu tố ảnh hưởng kết quả bắn?', [ 'Không có yếu tố ảnh hưởng','Chỉ thời tiết', 'Tư thế, ngắm bắn, bóp cò, hô hấp, tâm lý, thời tiết', 'Chỉ tâm lý'], 2, 'Đa yếu tố.'),
  ]),

  M(24, 'Tìm và giữ phương hướng — Khái niệm', [
    Q('Phương hướng là?', [ 'Một loại bản đồ','Một điểm cố định', 'Hướng xác định trong không gian dùng để định vị và di chuyển', 'Khoảng cách'], 2, 'Hướng định vị.'),
    Q('Bốn hướng chính trên la bàn?', ['Đông — Tây — Nam — Bắc', 'Đông — Tây — Trên — Dưới', 'Trái — Phải — Trước — Sau', 'Lên — Xuống — Vào — Ra'], 0, 'Đ — T — N — B.'),
    Q('Bốn hướng phụ?', ['Đông Bắc — Đông Nam — Tây Bắc — Tây Nam', 'Trên Bắc — Dưới Bắc', 'Cao Đông — Thấp Tây', 'Không có'], 0, 'Bốn hướng phụ kết hợp.'),
    Q('Việc xác định phương hướng quan trọng vì?', [ 'Chỉ dùng khi đi du lịch','Trang trí', 'Giúp định vị, di chuyển an toàn trong huấn luyện, chiến đấu, dã ngoại', 'Không cần thiết'], 2, 'Định vị an toàn.'),
    Q('Trong quân sự, mất phương hướng có thể dẫn đến?', [ 'Tăng tốc độ','Không sao', 'Lạc đường, lộ đội hình, ảnh hưởng nhiệm vụ', 'Vui vẻ'], 2, 'Hậu quả nghiêm trọng.'),
    Q('Người lính cần biết?', [ 'Chỉ hỏi người khác','Chỉ một cách xác định phương hướng', 'Nhiều cách: la bàn, mặt trời, sao Bắc Đẩu, đồng hồ, dấu hiệu thiên nhiên', 'Chỉ dùng la bàn'], 2, 'Đa phương pháp.'),
  ]),

  M(25, 'Tìm phương hướng bằng Mặt Trời, sao và đồng hồ', [
    Q('Buổi sáng, Mặt Trời mọc ở hướng?', [ 'Nam','Tây', 'Đông', 'Bắc'], 2, 'Mọc Đông, lặn Tây.'),
    Q('Buổi chiều, Mặt Trời lặn ở hướng?', [ 'Bắc','Đông', 'Tây', 'Nam'], 2, 'Lặn Tây.'),
    Q('Buổi trưa (gần đúng giữa trưa), bóng của vật thẳng đứng ở Bắc bán cầu chỉ về hướng?', [ 'Tây','Nam', 'Bắc', 'Đông'], 2, 'Bóng chỉ về phía Bắc (Bắc bán cầu).'),
    Q('Sao Bắc Đẩu (Bắc Cực) chỉ về hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 3, 'Polaris chỉ hướng Bắc.'),
    Q('Để tìm sao Bắc Đẩu, ta thường dựa vào chòm sao?', [ 'Thiên Lang','Tua rua', 'Đại Hùng (Gấu Lớn — Big Dipper) hoặc chòm sao Cassiopeia', 'Lạp Hộ'], 2, 'Big Dipper kéo dài.'),
    Q('Xác định phương hướng bằng đồng hồ cơ học (kim chỉ giờ) ở Bắc bán cầu (buổi sáng)?', ['Đặt kim chỉ giờ về hướng Mặt Trời, đường phân giác giữa kim giờ và số 12 chỉ hướng Nam', 'Đặt số 12 vuông góc', 'Tự suy diễn', 'Không xác định được'], 0, 'Phân giác chỉ Nam.'),
  ]),

  M(26, 'Tìm phương hướng bằng địa vật và giữ phương hướng', [
    Q('Cây cối thường phát triển rậm rạp hơn ở phía?', [ 'Phía Tây','Bóng râm liên tục', 'Phía có nhiều ánh sáng Mặt Trời (thường là hướng Nam ở Bắc bán cầu)', 'Phía Bắc lạnh'], 2, 'Phía nhiều nắng — Nam.'),
    Q('Rêu thường mọc nhiều ở phía nào của thân cây?', [ 'Mặt dưới','Phía nắng', 'Phía râm, ẩm (thường phía Bắc ở Bắc bán cầu)', 'Mặt trên'], 2, 'Phía râm ẩm.'),
    Q('Một số chùa, đình ở Việt Nam thường được xây mặt chính quay về hướng?', [ 'Đông','Tây', 'Nam (theo phong tục "thánh nhân nam diện")', 'Bắc lạnh'], 2, 'Mặt chính nhiều khi quay Nam (tham khảo).'),
    Q('Khi đã xác định được hướng, để giữ phương hướng khi di chuyển ta nên?', [ 'Đi theo cảm tính','Đi tuỳ ý', 'Chọn mốc cố định ở xa theo hướng cần đi và tiến tới mốc đó, lặp lại với mốc mới', 'Quay vòng tròn'], 2, 'Dùng mốc xa.'),
    Q('Khi bị lạc trong rừng, người lính cần?', ['Hoảng loạn chạy bừa', 'Bình tĩnh, dừng lại quan sát, xác định phương hướng, tìm mốc và liên lạc với đơn vị', 'Bỏ trang bị', 'Đi ngược lại nhanh'], 1, 'STOP: dừng — quan sát — suy nghĩ — kế hoạch.'),
    Q('Khi sương mù, mưa lớn không nhìn rõ địa vật, để giữ hướng có thể dùng?', ['Trí nhớ', 'La bàn (nếu có), GPS, hoặc dây hướng đạo', 'Đi theo gió', 'Phán đoán cảm tính'], 1, 'Công cụ kỹ thuật.'),
  ]),

  M(27, 'Tư thế động tác cơ bản khi vận động trong chiến đấu — Khái quát', [
    Q('Mục đích của các tư thế động tác cơ bản khi vận động trong chiến đấu?', ['Tập thể dục', 'Bảo đảm an toàn, bí mật, nhanh chóng tiếp cận mục tiêu', 'Đi du lịch', 'Tạo dáng'], 1, 'An toàn — bí mật — nhanh.'),
    Q('Lựa chọn tư thế vận động dựa vào?', ['Sở thích cá nhân', 'Địa hình, địa vật che khuất, che đỡ và sự uy hiếp của hoả lực địch', 'Thời gian rỗi', 'Người chỉ huy'], 1, 'Địa hình + hoả lực địch.'),
    Q('Khi địa hình thấp, hoả lực địch mạnh, người lính nên chọn tư thế?', ['Đứng đi', 'Bò hoặc lê (cao, thấp) hoặc trườn', 'Chạy thẳng', 'Đi khom'], 1, 'Tư thế thấp.'),
    Q('Khi địa vật cao, hoả lực địch không trực tiếp, có thể chọn tư thế?', ['Bò sấp', 'Đi khom hoặc chạy khom', 'Trườn', 'Lê'], 1, 'Tư thế cao hơn.'),
    Q('Nguyên tắc khi vận động dưới hoả lực địch?', ['Chậm rãi đi thẳng', 'Quan sát địa hình, chọn đường vận động ngắn nhất, tốt nhất, an toàn nhất', 'Đứng cao chạy thẳng', 'Đi theo cảm tính'], 1, 'Ngắn — tốt — an toàn.'),
    Q('Trước khi rời địa vật để vận động, người lính nên?', ['Hô lớn', 'Quan sát địch, chuẩn bị tư thế, vũ khí và phương án dự bị', 'Vứt vũ khí', 'Không cần chuẩn bị'], 1, 'Quan sát + chuẩn bị.'),
  ]),

  M(28, 'Đi khom — Chạy khom — Bò cao — Bò thấp', [
    Q('Đi khom là tư thế?', ['Đứng thẳng', 'Người gập về phía trước, lưng cúi, vận động nhẹ nhàng, vũ khí cầm tay phải', 'Nằm sấp', 'Đi lùi'], 1, 'Người gập, đi nhẹ.'),
    Q('Đi khom thường dùng khi?', ['Địa hình trống trải', 'Có địa vật che khuất ngang tầm ngực hoặc bụng và hoả lực địch không mạnh', 'Hoả lực địch rất mạnh', 'Đêm tối hoàn toàn'], 1, 'Địa vật che ngang ngực.'),
    Q('Chạy khom khác đi khom ở điểm?', ['Chậm hơn', 'Tốc độ nhanh hơn, dùng để vượt qua đoạn ngắn trong vùng nguy hiểm vừa phải', 'Đứng cao hơn', 'Không có vũ khí'], 1, 'Nhanh hơn để vượt qua.'),
    Q('Bò cao thường có hai biến thể?', ['Bò cao hai chân hai tay và bò cao hai chân một tay (tay kia cầm súng)', 'Chỉ bò cao một chân', 'Chỉ bò cao bằng đầu', 'Không có biến thể'], 0, 'Bò cao 2-2 và 2-1.'),
    Q('Bò thấp là tư thế?', ['Đứng', 'Người sát đất, dùng cẳng tay và mũi chân để di chuyển, súng tỳ trên cánh tay', 'Đi khom', 'Lăn'], 1, 'Người gần sát đất.'),
    Q('Tư thế bò thấp dùng khi?', ['Địa hình thoáng đãng', 'Địa hình bằng phẳng, vật che khuất thấp và hoả lực địch khá mạnh', 'Không có địch', 'Đêm tối có ánh đèn'], 1, 'Hoả lực địch khá mạnh.'),
  ]),

  M(29, 'Lê cao — Lê thấp — Trườn — Vọt tiến', [
    Q('Lê cao là tư thế?', ['Đứng', 'Ngồi tựa lên một bên cẳng chân, người nghiêng, dùng cẳng tay và chân để đẩy người tới', 'Nằm sấp', 'Chạy'], 1, 'Lê nghiêng người.'),
    Q('Lê thấp khác lê cao ở chỗ?', ['Tốc độ cao hơn', 'Người sát đất hơn, độ cao thấp hơn, an toàn hơn dưới hoả lực', 'Đứng thẳng', 'Có vũ khí khác'], 1, 'Sát đất hơn.'),
    Q('Trườn là tư thế?', ['Đứng', 'Người sát đất, dùng tay và chân để đẩy người về phía trước, súng kẹp giữa cánh tay', 'Đi khom', 'Lăn'], 1, 'Người sát đất hoàn toàn.'),
    Q('Trườn thường dùng khi?', ['Hoả lực địch yếu', 'Hoả lực địch mạnh, vật che khuất rất thấp', 'Địa hình bằng', 'Đêm tối nghỉ ngơi'], 1, 'Hoả lực rất mạnh.'),
    Q('Vọt tiến là động tác?', ['Đi chậm', 'Nhanh chóng vùng dậy, chạy hoặc bật người tới một vị trí mới, sau đó nằm xuống nhanh', 'Bò', 'Lê'], 1, 'Bật tiến nhanh.'),
    Q('Vọt tiến thường dùng khi?', ['Đứng yên', 'Cần vượt qua khoảng trống nhanh giữa hai địa vật che đỡ', 'Hoả lực địch yên ắng', 'Không có địch'], 1, 'Vượt khoảng trống.'),
  ]),

  M(30, 'Lăn — Mang vác — Vận dụng tổng hợp', [
    Q('Lăn (lăn người) thường dùng khi?', ['Trống trải', 'Cần rời khỏi vị trí cũ nhanh chóng để tránh hoả lực địch tập trung', 'Đi du lịch', 'Tập thể dục'], 1, 'Tránh hoả lực.'),
    Q('Khi mang vác trang bị nặng vận động, cần?', ['Tự do tuỳ thích', 'Buộc gọn, chắc; phân bổ trọng lượng hợp lý; điều chỉnh tư thế phù hợp', 'Vứt bớt', 'Tháo lung tung'], 1, 'Gọn, chắc, hợp lý.'),
    Q('Khi mang súng trường, AK trong vận động bò trườn, súng được?', ['Vứt sang một bên', 'Đặt trên cẳng tay hoặc kẹp song song với cơ thể, sẵn sàng chiến đấu', 'Bỏ trong ba lô', 'Đeo lưng buông thõng'], 1, 'Sát người, sẵn sàng.'),
    Q('Nguyên tắc chung khi vận dụng các tư thế động tác?', ['Một tư thế cho mọi tình huống', 'Linh hoạt, kết hợp nhiều tư thế tuỳ địa hình và hoả lực, vận dụng sáng tạo', 'Cố định cứng nhắc', 'Theo sở thích'], 1, 'Linh hoạt, sáng tạo.'),
    Q('Khi địa hình ban đêm hoặc tầm nhìn hạn chế, người lính cần?', ['Bật đèn lớn', 'Giữ im lặng, vận động nhẹ nhàng, lắng nghe và quan sát kỹ', 'Hô khẩu hiệu', 'Đi nhanh thẳng'], 1, 'Im lặng + cảnh giác.'),
    Q('Sau khi vận động đến vị trí mới, người lính cần?', ['Nghỉ tự do', 'Nhanh chóng ổn định vị trí, quan sát, sẵn sàng đánh trả hoặc tiếp tục cơ động', 'Bỏ vị trí', 'Trò chuyện ồn ào'], 1, 'Ổn định + sẵn sàng.'),
  ]),

  M(31, 'Chạy vũ trang — Khái niệm và ý nghĩa', [
    Q('Chạy vũ trang là?', ['Chạy thể dục', 'Chạy có mang theo trang bị, vũ khí cá nhân theo yêu cầu', 'Đi bộ thư giãn', 'Đi diễu binh'], 1, 'Chạy + mang trang bị.'),
    Q('Mục đích của huấn luyện chạy vũ trang?', ['Giải trí', 'Rèn luyện thể lực, ý chí, khả năng cơ động và sức bền cho người lính', 'Giảm cân', 'Mất thời gian'], 1, 'Rèn thể lực + ý chí.'),
    Q('Trang bị tối thiểu của chạy vũ trang thường gồm?', ['Chỉ đồng phục', 'Quân phục, giày, mũ, súng AK (hoặc dụng cụ tương đương), ba lô, các vật dụng theo quy định', 'Chỉ giày', 'Đồ thể thao thường'], 1, 'Vũ khí + trang bị.'),
    Q('Cự ly chạy vũ trang trong huấn luyện học sinh THPT thường?', ['10 km', 'Từ vài trăm mét đến 1500 — 3000 m tuỳ chương trình', '50 km', 'Không có cự ly'], 1, 'Vài trăm m đến 3 km.'),
    Q('Trước khi chạy vũ trang, người tham gia phải?', ['Ăn no', 'Khởi động kỹ, kiểm tra trang bị, sức khoẻ', 'Uống nhiều nước có ga', 'Bỏ giày'], 1, 'Khởi động + kiểm tra.'),
    Q('Ý nghĩa của chạy vũ trang đối với học sinh?', ['Vô ích', 'Rèn luyện sức khoẻ, ý chí kỷ luật, làm quen với tác phong quân sự', 'Bắt buộc vô lý', 'Chỉ vui chơi'], 1, 'Rèn luyện toàn diện.'),
  ]),

  M(32, 'Kỹ thuật chạy vũ trang — Tư thế và hơi thở', [
    Q('Tư thế chạy vũ trang đúng kỹ thuật?', ['Người ngả ngửa', 'Thân hơi ngả về trước, đầu giữ thẳng nhìn xa, tay đánh tự nhiên theo nhịp', 'Cúi gập người', 'Lưng còng xuống'], 1, 'Thân nghiêng trước nhẹ.'),
    Q('Cách thở khi chạy vũ trang?', ['Nín thở liên tục', 'Thở đều theo nhịp chân, hít vào bằng mũi, thở ra bằng miệng (hoặc cả mũi và miệng)', 'Thở dồn dập', 'Nhịn thở rồi thở mạnh'], 1, 'Thở đều theo nhịp.'),
    Q('Bước chạy vũ trang nên?', ['Quá dài, lao mạnh', 'Vừa phải, đều, tiếp đất bằng cả bàn chân hoặc nửa trước bàn chân tuỳ tốc độ', 'Lê chân', 'Nhảy cao'], 1, 'Bước đều, vừa phải.'),
    Q('Tay khi chạy nên?', ['Đung đưa loạn xạ', 'Gập khuỷu khoảng 90 độ, đánh tự nhiên dọc theo thân', 'Giữ thẳng cứng', 'Buông thõng'], 1, 'Gập 90 độ, tự nhiên.'),
    Q('Khi mang súng AK chạy, súng được mang?', ['Cầm lủng lẳng tự do', 'Đeo trên vai theo dây súng hoặc cầm tay theo quy định, sao cho gọn, chắc, không ảnh hưởng tốc độ', 'Vứt trong ba lô', 'Tháo rời từng bộ phận'], 1, 'Gọn, chắc.'),
    Q('Khi mệt, có triệu chứng chóng mặt, đau ngực khi chạy, người tham gia cần?', ['Cố chạy tiếp', 'Giảm tốc độ, báo cáo cán bộ phụ trách, có thể dừng nghỉ an toàn', 'Tăng tốc', 'Bỏ ngũ'], 1, 'An toàn là trên hết.'),
  ]),

  M(33, 'Chạy vũ trang — Phân phối sức và phục hồi', [
    Q('Cách phân phối sức trong chạy vũ trang cự ly trung bình?', ['Chạy hết sức ngay đầu', 'Khởi động — tăng tốc dần — duy trì tốc độ ổn định — tăng tốc cuối nếu còn sức', 'Chạy chậm rồi chạy mạnh đột ngột', 'Đứng nghỉ giữa chừng'], 1, 'Phân phối hợp lý.'),
    Q('Trước chạy nên?', ['Ăn no và uống nhiều', 'Ăn nhẹ trước đó vài giờ, uống đủ nước, khởi động kỹ', 'Uống nước có cồn', 'Nhịn ăn nhiều ngày'], 1, 'Ăn nhẹ + nước + khởi động.'),
    Q('Sau chạy vũ trang, nên?', ['Ngồi bệt nghỉ ngay', 'Đi bộ thả lỏng dần, hít thở sâu, giãn cơ, bổ sung nước', 'Tắm nước lạnh ngay', 'Uống nhiều bia'], 1, 'Thả lỏng + giãn cơ.'),
    Q('Nếu bị chuột rút khi chạy?', ['Cố tiếp tục', 'Dừng lại, kéo căng nhẹ nhàng cơ bị chuột rút, xoa bóp và báo cán bộ', 'Chạy nhanh hơn', 'Không cần xử lý'], 1, 'Xử lý kịp thời.'),
    Q('Để tiến bộ trong chạy vũ trang, học sinh cần?', ['Tập 1 ngày rồi nghỉ luôn', 'Luyện tập đều, tăng dần khối lượng và cường độ phù hợp sức khoẻ', 'Tập quá sức', 'Không cần tập'], 1, 'Luyện tập đều và khoa học.'),
    Q('Vai trò ý chí trong chạy vũ trang?', ['Không quan trọng', 'Rất quan trọng — giúp vượt qua mệt mỏi, rèn ý chí quyết tâm', 'Có hại', 'Vô ích'], 1, 'Ý chí quyết định.'),
  ]),

  M(34, 'Ôn tập cuối năm — Tổng hợp kỹ thuật', [
    Q('Tầm bắn hiệu quả của AK với mục tiêu mặt đất?', ['50 m', 'Khoảng 400 m', '2000 m', '5000 m'], 1, 'Khoảng 400 m.'),
    Q('Thứ tự đường ngắm cơ bản khi bắn AK?', ['Mục tiêu — khe ngắm — đầu ruồi', 'Khe ngắm — đầu ruồi — điểm ngắm trên mục tiêu', 'Báng — cò — mục tiêu', 'Tay phải — tay trái — mắt'], 1, 'Khe — đầu ruồi — điểm ngắm.'),
    Q('Sao Bắc Đẩu chỉ về hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 3, 'Polaris chỉ Bắc.'),
    Q('Khi địa hình thấp, hoả lực địch mạnh, tư thế phù hợp nhất?', ['Đứng đi', 'Trườn hoặc bò thấp', 'Chạy thẳng', 'Đi khom'], 1, 'Sát đất.'),
    Q('Vọt tiến là động tác?', ['Đi chậm', 'Bật người lên chạy nhanh đến vị trí mới rồi nằm xuống ngay', 'Đứng yên', 'Bò sấp'], 1, 'Bật tiến nhanh.'),
    Q('Trong chạy vũ trang, cách thở đúng?', ['Nín thở', 'Thở đều theo nhịp chân, hít bằng mũi, thở ra bằng miệng', 'Thở dồn dập', 'Bịt mũi'], 1, 'Thở đều nhịp.'),
  ]),

  M(35, 'Kiểm tra HK2 — Tổng hợp cả năm', [
    Q('Cấp bậc quân hàm cao nhất trong QĐND và CAND Việt Nam?', ['Thượng tướng', 'Đại tướng', 'Trung tướng', 'Thiếu tướng'], 1, 'Đại tướng.'),
    Q('Ngày thành lập QĐND Việt Nam?', ['19/8/1945', '22/12/1944', '02/9/1945', '07/5/1954'], 1, '22/12/1944.'),
    Q('Mục tiêu cuối cùng của chiến lược "diễn biến hoà bình" với Việt Nam?', ['Hợp tác kinh tế', 'Xoá bỏ vai trò lãnh đạo của Đảng và chế độ XHCN', 'Phát triển khoa học', 'Hợp tác văn hoá'], 1, 'Phá chế độ XHCN.'),
    Q('Hộp tiếp đạn tiêu chuẩn của AK chứa?', ['10 viên', '30 viên', '100 viên', '5 viên'], 1, '30 viên.'),
    Q('Buổi sáng Mặt Trời mọc ở hướng?', ['Tây', 'Đông', 'Bắc', 'Nam'], 1, 'Đông.'),
    Q('Trách nhiệm của học sinh THPT đối với nhiệm vụ bảo vệ Tổ quốc?', ['Bỏ học', 'Học tập tốt, rèn luyện đạo đức và thể lực, GDQP-AN, sẵn sàng tham gia nghĩa vụ quân sự khi đến tuổi', 'Du lịch nhiều', 'Không liên quan'], 1, 'Học + rèn + sẵn sàng.'),
  ]),
];

export const H12GDQP_SCENARIOS = indexBy(H12GDQP_WEEKS);
