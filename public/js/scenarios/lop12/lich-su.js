// ============================================================
// Lớp 12 · LỊCH SỬ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Kết nối tri thức) + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12SU-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12SU', 'lich-su', n, title, qs, opts);

export const H12SU_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Liên hợp quốc - Sự ra đời và tổ chức', [
    Q('Liên hợp quốc (UN) được thành lập vào năm nào?', ['1945 (sau Hội nghị San Francisco)', '1919', '1950', '1989'], 0, 'Hiến chương UN có hiệu lực 24/10/1945.'),
    Q('Trụ sở chính của Liên hợp quốc đặt tại?', ['Paris', 'New York (Hoa Kỳ)', 'Geneva', 'Tokyo'], 1, 'Trụ sở tại New York, Mỹ.'),
    Q('Cơ quan có quyền lực lớn nhất trong Liên hợp quốc là?', ['Đại hội đồng', 'Ban Thư kí', 'Hội đồng Bảo an (5 thành viên thường trực có quyền phủ quyết)', 'Toà án Quốc tế'], 2, 'UN Security Council.'),
    Q('5 nước thành viên thường trực Hội đồng Bảo an gồm?', ['Mỹ, Anh, Pháp, Đức, Nga', 'Mỹ, Đức, Nhật, Trung, Nga', 'Mỹ, Anh, Pháp, Italia, Nhật', 'Mỹ, Anh, Pháp, Nga, Trung Quốc'], 3, 'P5.'),
    Q('Việt Nam gia nhập Liên hợp quốc vào năm nào?', ['1977 (thành viên thứ 149)', '1945', '1986', '1995'], 0, '20/9/1977 VN trở thành thành viên UN.'),
    Q('Mục tiêu cốt lõi của Liên hợp quốc?', ['Phát triển chiến tranh', 'Duy trì hoà bình và an ninh quốc tế, phát triển quan hệ hữu nghị, hợp tác', 'Bành trướng lãnh thổ', 'Cấm vận'], 1, 'Hiến chương Điều 1.'),
  ]),

  M(2, 'Trật tự thế giới trong Chiến tranh lạnh', [
    Q('Hội nghị Ianta (Yalta, 2/1945) có sự tham gia của?', ['Mỹ, Trung Quốc, Nhật', 'Mỹ, Pháp, Đức', 'Mỹ, Liên Xô, Anh (Roosevelt, Stalin, Churchill)', 'Anh, Pháp, Nga'], 2, 'Yalta Conference - Tam cường.'),
    Q('Trật tự hai cực Ianta hình thành sau?', ['Chiến tranh thế giới thứ nhất', 'Năm 1989', 'Chiến tranh Triều Tiên', 'Chiến tranh thế giới thứ hai (1945)'], 3, 'Yalta system - bipolar world.'),
    Q('Chiến tranh lạnh là?', ['Sự đối đầu căng thẳng giữa hai phe TBCN (Mỹ) và XHCN (Liên Xô), không có chiến tranh trực tiếp giữa hai siêu cường', 'Cuộc chiến tranh nóng', 'Hoà bình hoàn toàn', 'Liên minh'], 0, 'Cold War - không đối đầu vũ lực trực tiếp.'),
    Q('Học thuyết Truman (3/1947) đánh dấu?', ['Hợp tác Mỹ-Xô', 'Mở đầu Chiến tranh lạnh do Mỹ phát động chống Liên Xô và XHCN', 'Kết thúc Chiến tranh lạnh', 'Thành lập NATO'], 1, 'Truman Doctrine - khởi đầu Chiến tranh lạnh.'),
    Q('Khối quân sự NATO thành lập năm 1949 do?', ['Liên Xô đứng đầu', 'Pháp riêng', 'Mỹ đứng đầu, gồm Mỹ và các nước Tây Âu', 'Đông Âu'], 2, 'North Atlantic Treaty Organization.'),
    Q('Đối trọng với NATO, Liên Xô thành lập?', ['EU', 'OECD', 'ASEAN', 'Tổ chức Hiệp ước Warsaw (1955)'], 3, 'Warsaw Pact đối trọng NATO.'),
  ]),

  M(3, 'Trật tự thế giới sau Chiến tranh lạnh', [
    Q('Chiến tranh lạnh chính thức kết thúc khi?', ['Năm 1989 (cuộc gặp Malta giữa Gorbachev và Bush)', '1945', '1975', '2001'], 0, 'Tuyên bố tại Malta 12/1989.'),
    Q('Liên Xô tan rã vào năm nào?', ['1989', '12/1991', '2000', '1985'], 1, 'Liên bang Xô viết giải thể 25/12/1991.'),
    Q('Trật tự thế giới sau Chiến tranh lạnh có xu hướng?', ['Lưỡng cực', 'Đơn cực Mỹ tuyệt đối', 'Đa cực, nhiều trung tâm quyền lực', 'Quay lại lưỡng cực'], 2, 'Multipolar world emerging.'),
    Q('Các trung tâm quyền lực kinh tế mới sau 1991 bao gồm?', ['Chỉ Mỹ', 'Không có', 'Chỉ Trung Quốc', 'Mỹ, EU, Nhật Bản, Trung Quốc, Nga, các nước mới nổi (BRICS)'], 3, 'Multiple power centers.'),
    Q('Xu thế toàn cầu hoá kinh tế tăng tốc nhờ?', ['Cách mạng KH-CN, sự phát triển công ty xuyên quốc gia, các tổ chức quốc tế (WTO, IMF)', 'Chiến tranh lạnh', 'Cô lập', 'Bảo hộ'], 0, 'Globalization drivers.'),
    Q('Thách thức của trật tự thế giới mới?', ['Không có thách thức', 'Khủng bố quốc tế, xung đột sắc tộc/tôn giáo, biến đổi khí hậu, cách biệt giàu nghèo', 'Hoà bình tuyệt đối', 'Đối đầu lưỡng cực'], 1, 'Global challenges post-Cold War.'),
  ]),

  M(4, 'ASEAN - Sự ra đời và phát triển', [
    Q('ASEAN được thành lập vào ngày?', ['8/8/1965', '1/1/1970', '8/8/1967 tại Bangkok (Tuyên bố Bangkok)', '8/8/1975'], 2, '8/8/1967 - Bangkok Declaration.'),
    Q('5 nước sáng lập ASEAN gồm?', ['Tất cả Đông Nam Á', 'VN, Lào, Campuchia, Thái Lan, Myanmar', 'Singapore, Brunei, Malaysia, Indonesia, Lào', 'Indonesia, Malaysia, Philippines, Singapore, Thái Lan'], 3, '5 nước sáng lập 1967.'),
    Q('Việt Nam gia nhập ASEAN vào năm?', ['28/7/1995', '1975', '1967', '2000'], 0, 'VN là thành viên thứ 7 năm 1995.'),
    Q('Hiện nay ASEAN có bao nhiêu thành viên?', ['5', '10 nước', '7', '15'], 1, '10 quốc gia Đông Nam Á (trừ Đông Timor).'),
    Q('Mục tiêu của ASEAN khi thành lập?', ['Đối đầu', 'Liên minh quân sự chống Trung Quốc', 'Thúc đẩy hợp tác kinh tế, văn hoá, hoà bình và ổn định khu vực', 'Bành trướng'], 2, 'Bangkok Declaration objectives.'),
    Q('Hiến chương ASEAN có hiệu lực vào năm?', ['1967', '2015', '2000', '15/12/2008'], 3, 'ASEAN Charter 2008.'),
  ]),

  M(5, 'Cộng đồng ASEAN', [
    Q('Cộng đồng ASEAN chính thức thành lập vào?', ['31/12/2015 (tuyên bố tại Kuala Lumpur)', '1995', '2008', '2020'], 0, 'ASEAN Community established 2015.'),
    Q('Cộng đồng ASEAN gồm 3 trụ cột?', ['Kinh tế, an ninh, văn hoá', 'Cộng đồng Chính trị-An ninh (APSC), Cộng đồng Kinh tế (AEC), Cộng đồng Văn hoá-Xã hội (ASCC)', 'Quân sự, ngoại giao, văn hoá', 'Y tế, giáo dục, văn hoá'], 1, 'Ba trụ cột AC.'),
    Q('Cộng đồng Kinh tế ASEAN (AEC) hướng tới?', ['Cô lập', 'Đối đầu thương mại', 'Thị trường và cơ sở sản xuất chung, lưu thông tự do hàng hoá, dịch vụ, đầu tư, lao động kĩ năng', 'Bảo hộ tuyệt đối'], 2, 'AEC blueprint.'),
    Q('Vai trò Việt Nam trong ASEAN?', ['Không tham gia', 'Quan sát viên', 'Đứng ngoài', 'Tích cực, đảm nhận Chủ tịch nhiều lần (1998, 2010, 2020), đóng góp vào Tầm nhìn ASEAN'], 3, 'VN là thành viên chủ động.'),
    Q('Phương châm hoạt động đặc trưng của ASEAN?', ['Đồng thuận (consensus) và không can thiệp vào công việc nội bộ', 'Đối đầu', 'Bỏ phiếu đa số tuyệt đối', 'Quyền phủ quyết'], 0, 'ASEAN Way.'),
    Q('Thách thức của ASEAN hiện nay?', ['Không có thách thức', 'Cạnh tranh nước lớn (Mỹ - Trung), biển Đông, chênh lệch phát triển, dịch bệnh, biến đổi khí hậu', 'Đối đầu nội bộ tuyệt đối', 'Suy thoái'], 1, 'Multiple challenges.'),
  ]),

  M(6, 'Cách mạng tháng Tám 1945 - Bối cảnh và diễn biến', [
    Q('Tình hình thế giới đầu năm 1945 thuận lợi cho cách mạng VN do?', ['Mỹ thắng', 'Chiến tranh kéo dài', 'Phát xít Đức bại trận, Nhật đầu hàng Đồng minh (8/1945)', 'Anh thua'], 2, 'Cơ hội khi Nhật đầu hàng.'),
    Q('Mặt trận Việt Minh được thành lập vào?', ['10/1930', '12/1946', '2/9/1945', '19/5/1941 (Hội nghị Trung ương 8)'], 3, 'Việt Nam Độc lập Đồng minh.'),
    Q('Đại hội Quốc dân Tân Trào (16-17/8/1945) đã?', ['Quyết định Tổng khởi nghĩa, lập Uỷ ban Dân tộc Giải phóng do Hồ Chí Minh đứng đầu', 'Bầu Bảo Đại làm vua', 'Hoãn cách mạng', 'Đầu hàng Nhật'], 0, 'Tân Trào - quyết định tổng khởi nghĩa.'),
    Q('Tổng khởi nghĩa Cách mạng tháng Tám bắt đầu từ?', ['Sài Gòn', 'Hà Nội (19/8/1945)', 'Huế', 'Hải Phòng'], 1, 'Hà Nội khởi nghĩa thắng lợi 19/8.'),
    Q('Vua Bảo Đại thoái vị vào ngày?', ['19/8/1945', '2/9/1945', '30/8/1945 tại Huế', '23/9/1945'], 2, 'Bảo Đại trao ấn kiếm 30/8 tại Ngọ Môn.'),
    Q('Cách mạng tháng Tám thành công trong bao lâu?', ['Vài năm', '1 năm', '1 tháng', 'Khoảng 15 ngày (từ 14 đến 28/8/1945)'], 3, 'Tổng khởi nghĩa diễn ra nhanh chóng.'),
  ]),

  M(7, 'Tuyên ngôn Độc lập và ý nghĩa Cách mạng tháng Tám', [
    Q('Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập vào ngày?', ['2/9/1945 tại Quảng trường Ba Đình, Hà Nội', '19/8/1945', '23/9/1945', '6/1/1946'], 0, '2/9/1945 - khai sinh VNDCCH.'),
    Q('Tên nước được tuyên bố trong Tuyên ngôn Độc lập?', ['Đại Việt', 'Việt Nam Dân chủ Cộng hoà', 'Cộng hoà XHCN VN', 'An Nam'], 1, 'VNDCCH.'),
    Q('Tuyên ngôn Độc lập trích dẫn câu nói nổi tiếng từ?', ['Kinh Thánh', 'Hiến pháp Anh', 'Tuyên ngôn Độc lập Mỹ (1776) và Tuyên ngôn Nhân quyền Pháp (1791)', 'Luận ngữ'], 2, 'Trích dẫn các văn kiện nhân quyền.'),
    Q('Cách mạng tháng Tám có ý nghĩa lịch sử lớn nhất là?', ['Mở đường cho chiến tranh', 'Chỉ kinh tế', 'Không có ý nghĩa', 'Đánh đổ ách thống trị thực dân Pháp, phong kiến, mở ra kỉ nguyên độc lập, tự do'], 3, 'Kỉ nguyên độc lập dân tộc.'),
    Q('Nguyên nhân thắng lợi cơ bản của Cách mạng tháng Tám?', ['Sự lãnh đạo đúng đắn của Đảng Cộng sản Đông Dương + chuẩn bị lâu dài + thời cơ chín muồi', 'Chỉ may mắn', 'Chỉ thời cơ', 'Vũ trang hùng mạnh'], 0, 'Lãnh đạo + chuẩn bị + thời cơ.'),
    Q('Cách mạng tháng Tám là cuộc cách mạng?', ['Tư sản', 'Dân tộc dân chủ nhân dân', 'XHCN trực tiếp', 'Phong kiến'], 1, 'Dân tộc dân chủ nhân dân.'),
  ]),

  M(8, 'Kháng chiến chống Pháp 1945-1950 - Giai đoạn đầu', [
    Q('Sau 2/9/1945, nước Việt Nam Dân chủ Cộng hoà phải đối mặt với?', ['Hoà bình hoàn toàn', 'Phát triển ổn định', 'Thù trong giặc ngoài, ngân khố trống rỗng, nạn đói, nạn dốt — "ngàn cân treo sợi tóc"', 'Liên minh quốc tế hỗ trợ mạnh'], 2, '"Ngàn cân treo sợi tóc".'),
    Q('Hiệp định Sơ bộ Pháp-Việt được kí ngày?', ['2/9/1945', '19/12/1946', '14/9/1946', '6/3/1946'], 3, 'Sơ bộ - Hồ Chí Minh & Sainteny.'),
    Q('Tạm ước Việt-Pháp 14/9/1946 được kí tại?', ['Fontainebleau (Pháp) — sau là Tạm ước tại Paris', 'Hà Nội', 'Sài Gòn', 'Geneva'], 0, 'Tạm ước Paris.'),
    Q('Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh ngày?', ['2/9/1945', '19/12/1946', '7/5/1954', '30/4/1975'], 1, 'Toàn quốc kháng chiến 19/12/1946.'),
    Q('Đường lối kháng chiến của Đảng năm 1946 là?', ['Đầu hàng', 'Chiến tranh chớp nhoáng', 'Toàn dân, toàn diện, trường kì, tự lực cánh sinh', 'Du kích đơn thuần'], 2, 'Đường lối kháng chiến trường kì.'),
    Q('Chiến dịch Việt Bắc Thu - Đông năm?', ['1946', '1954', '1950', '1947 (đánh bại cuộc tấn công của Pháp lên Việt Bắc)'], 3, 'Việt Bắc Thu-Đông 1947 thắng lợi.'),
  ]),

  M(9, 'Kháng chiến chống Pháp 1950-1953 - Bước phát triển', [
    Q('Chiến dịch Biên giới Thu-Đông diễn ra năm?', ['1950 - giải phóng tuyến biên giới Việt-Trung', '1947', '1953', '1954'], 0, 'Biên giới 1950 thắng lớn.'),
    Q('Ý nghĩa lớn nhất của chiến dịch Biên giới 1950?', ['Phá vỡ thế bao vây', 'Phá thế bị bao vây, mở cửa biên giới Việt-Trung, ta chủ động phản công', 'Tạm hoãn chiến tranh', 'Đầu hàng'], 1, 'Mở thông với phe XHCN.'),
    Q('Đại hội Đảng lần thứ II diễn ra vào năm?', ['1930', '1954', '2/1951 (Tuyên Quang)', '1960'], 2, 'Đại hội II - lập Đảng Lao động VN.'),
    Q('Tên gọi Đảng sau Đại hội II?', ['Đảng CS Đông Dương', 'Việt Nam Quốc dân đảng', 'Đảng CS Việt Nam', 'Đảng Lao động Việt Nam'], 3, '1951-1976 = Đảng Lao động VN.'),
    Q('Kế hoạch Navarre của Pháp (1953) nhằm?', ['Giành thắng lợi quân sự quyết định trong 18 tháng để kết thúc chiến tranh', 'Đàm phán', 'Rút quân', 'Liên minh với Việt Minh'], 0, 'Kế hoạch Navarre.'),
    Q('Để đối phó kế hoạch Navarre, ta chủ trương?', ['Đầu hàng', 'Phân tán lực lượng địch, mở chiến cuộc đông xuân 1953-1954', 'Rút lui hoàn toàn', 'Đàm phán ngay'], 1, 'Phân tán địch, chủ động tấn công.'),
  ]),

  M(10, 'Chiến dịch Điện Biên Phủ và Hiệp định Genève 1954', [
    Q('Chiến dịch Điện Biên Phủ diễn ra từ?', ['1955', '1953', '13/3 - 7/5/1954 (56 ngày đêm)', '1950-1954'], 2, '56 ngày đêm.'),
    Q('Tổng chỉ huy chiến dịch Điện Biên Phủ?', ['Hồ Chí Minh', 'Lê Duẩn', 'Trần Hưng Đạo', 'Đại tướng Võ Nguyên Giáp'], 3, 'Tổng tư lệnh Võ Nguyên Giáp.'),
    Q('Phương châm chiến dịch Điện Biên Phủ?', ['Đánh chắc tiến chắc (sau khi đổi từ "đánh nhanh thắng nhanh")', 'Đánh nhanh thắng nhanh', 'Du kích', 'Phòng ngự'], 0, 'Đại tướng Võ Nguyên Giáp đổi phương châm.'),
    Q('Chiến dịch ĐBP kết thúc ngày 7/5/1954 với?', ['Pháp thắng', 'Pháp đầu hàng, ta bắt sống tướng De Castries cùng toàn bộ Bộ chỉ huy', 'Hoà hoãn', 'Pháp chủ động rút lui'], 1, 'De Castries đầu hàng.'),
    Q('Hiệp định Genève về Đông Dương được kí ngày?', ['7/5/1954', '21/7/1954', '2/9/1945', '1956'], 1, 'Genève 21/7/1954.'),
    Q('Theo Hiệp định Genève, VN tạm thời chia cắt ở vĩ tuyến?', ['Vĩ tuyến 16', 'Vĩ tuyến 18', 'Vĩ tuyến 17 (sông Bến Hải, Quảng Trị)', 'Vĩ tuyến 20'], 2, 'Vĩ tuyến 17 tạm chia cắt.'),
  ]),

  M(11, 'Miền Bắc xây dựng CNXH (1954-1965)', [
    Q('Sau Hiệp định Genève, miền Bắc bước vào thời kì?', ['Chiến tranh', 'Cách mạng dân chủ tư sản', 'Vẫn chống Pháp', 'Hoà bình, xây dựng CNXH'], 3, 'MB lên CNXH.'),
    Q('Đại hội Đảng lần thứ III (9/1960) xác định?', ['Đường lối cách mạng XHCN ở miền Bắc + cách mạng dân tộc dân chủ ở miền Nam', 'Đường lối kháng Pháp', 'Đầu hàng', 'Liên minh tư bản'], 0, 'Hai nhiệm vụ chiến lược.'),
    Q('Kế hoạch 5 năm lần thứ nhất ở miền Bắc?', ['1955-1960', '1961-1965', '1966-1970', '1976-1980'], 1, 'Kế hoạch 5 năm I (1961-1965).'),
    Q('Sự kiện Vịnh Bắc Bộ (5/8/1964) Mỹ?', ['Đàm phán', 'Rút quân', 'Lấy cớ để mở rộng chiến tranh phá hoại miền Bắc bằng không quân và hải quân', 'Cấp viện trợ'], 2, 'Gulf of Tonkin Incident.'),
    Q('Phong trào "Thi đua hai tốt" ở miền Bắc nhằm?', ['Đầu hàng', 'Chỉ sản xuất', 'Chỉ học', 'Vừa sản xuất vừa chiến đấu (dạy tốt - học tốt; sản xuất tốt - chiến đấu tốt)'], 3, 'Thi đua hai tốt.'),
    Q('Miền Bắc trở thành?', ['Hậu phương lớn của miền Nam', 'Tiền tuyến', 'Kẻ thù', 'Đối lập'], 0, 'Hậu phương XHCN.'),
  ]),

  M(12, 'Miền Nam đấu tranh chống Mỹ-Diệm (1954-1965)', [
    Q('Mục tiêu Mỹ ở miền Nam sau 1954?', ['Trao trả độc lập', 'Biến miền Nam thành thuộc địa kiểu mới và căn cứ quân sự', 'Liên minh với VNDCCH', 'Rút lui'], 1, 'Neocolonialism.'),
    Q('Ngô Đình Diệm được Mỹ dựng lên làm?', ['Vua', 'Thủ tướng VNDCCH', 'Tổng thống Việt Nam Cộng hoà (10/1955)', 'Đại sứ'], 2, 'VNCH 1955.'),
    Q('Phong trào "Đồng khởi" nổ ra ở?', ['Hà Nội', 'Đà Nẵng', 'Sài Gòn', 'Bến Tre (1/1960), sau lan ra toàn miền Nam'], 3, 'Bến Tre - quê hương Đồng khởi.'),
    Q('Sự kiện thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam?', ['20/12/1960', '1955', '1965', '1975'], 0, 'MTDTGPMN 20/12/1960.'),
    Q('Chiến lược "Chiến tranh đặc biệt" (1961-1965) của Mỹ dựa vào?', ['Quân Mỹ trực tiếp', 'Quân nguỵ Sài Gòn + cố vấn Mỹ + ấp chiến lược', 'Đồng minh quốc tế', 'Vũ khí hạt nhân'], 1, 'Special War.'),
    Q('Chiến thắng Ấp Bắc (1/1963) chứng minh?', ['Mỹ thắng', 'Hoà bình', 'Quân Giải phóng có khả năng đánh bại chiến tranh đặc biệt của Mỹ', 'Mỹ rút'], 2, 'Ấp Bắc - thắng lợi chiến thuật.'),
  ]),

  M(13, 'Chiến tranh cục bộ và Tết Mậu Thân 1968', [
    Q('Mỹ chuyển sang chiến lược "Chiến tranh cục bộ" từ?', ['1961', '1973', '1968', '1965 (đưa quân viễn chinh Mỹ ồ ạt vào miền Nam)'], 3, 'Đổ quân Mỹ 1965.'),
    Q('Thời điểm chiến lược "Chiến tranh cục bộ" đạt đỉnh, quân Mỹ ở miền Nam khoảng?', ['Hơn 500.000 (1968-1969)', '10.000', '100.000', '1 triệu'], 0, '~536.000 (1968).'),
    Q('Chiến thắng Vạn Tường (8/1965) là?', ['Thất bại', 'Chứng minh ta có thể đánh thắng chiến tranh cục bộ của Mỹ', 'Hoà', 'Mỹ rút quân'], 1, 'Vạn Tường - thắng lớn.'),
    Q('Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra năm?', ['1965', '1972', '1968', '1975'], 2, 'Tết Mậu Thân 1968.'),
    Q('Ý nghĩa lớn nhất của Tết Mậu Thân 1968?', ['Quân sự hoàn toàn', 'Không có ý nghĩa', 'Giải phóng hoàn toàn', 'Làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ chấp nhận ngồi vào bàn đàm phán Paris'], 3, 'Buộc Mỹ đàm phán.'),
    Q('Hội nghị Paris bắt đầu vào?', ['13/5/1968', '1965', '1972', '1975'], 0, 'Đàm phán Paris bắt đầu 1968.'),
  ]),

  M(14, 'Việt Nam hoá chiến tranh - 1972 - Hiệp định Paris 1973', [
    Q('Chiến lược "Việt Nam hoá chiến tranh" của Nixon (1969) nhằm?', ['Chiếm đóng vĩnh viễn', 'Rút dần quân Mỹ, "thay màu da xác chết" - dùng quân nguỵ là chính, vũ khí Mỹ', 'Liên minh', 'Đầu hàng'], 1, 'Vietnamization.'),
    Q('Cuộc Tiến công chiến lược năm 1972 mở đầu bằng?', ['Đông khởi', 'Tết Mậu Thân', 'Chiến dịch Quảng Trị (30/3/1972) - phá vỡ phòng tuyến địch', 'ĐBP'], 2, 'Mặt trận Quảng Trị 1972.'),
    Q('Để đối phó cuộc tấn công 1972, Mỹ?', ['Rút quân', 'Hoà', 'Đầu hàng', 'Mở chiến dịch ném bom miền Bắc lần 2 (Linebacker), đỉnh điểm là "Điện Biên Phủ trên không" 12/1972'], 3, 'Linebacker II.'),
    Q('"Điện Biên Phủ trên không" (18-29/12/1972) là?', ['Trận chiến đấu 12 ngày đêm bảo vệ Hà Nội, Hải Phòng, bắn rơi nhiều B-52', 'Bại của ta', 'Mỹ thắng', 'Hoà'], 0, 'Chiến thắng B-52.'),
    Q('Hiệp định Paris được kí ngày?', ['2/9/1945', '27/1/1973', '30/4/1975', '21/7/1954'], 1, 'Paris Agreement 1973.'),
    Q('Theo Hiệp định Paris, Mỹ phải?', ['Tiếp tục chiến tranh', 'Cấp viện trợ', 'Rút hết quân Mỹ và đồng minh trong 60 ngày, công nhận độc lập, chủ quyền, thống nhất VN', 'Đầu hàng vô điều kiện'], 2, 'Mỹ rút quân.'),
  ]),

  M(15, 'Tổng tiến công và nổi dậy Mùa Xuân 1975', [
    Q('Sau Hiệp định Paris, miền Nam tiếp tục chiến đấu vì?', ['Hoà bình', 'Quyết định ngẫu nhiên', 'Tự ý', 'Quân nguỵ Sài Gòn vẫn còn, Mỹ vẫn viện trợ; ta tiếp tục cuộc đấu tranh giải phóng'], 3, 'Vẫn còn chính quyền Sài Gòn.'),
    Q('Chiến thắng đường 14 Phước Long (1/1975) cho thấy?', ['Khả năng giải phóng miền Nam khi Mỹ không can thiệp trực tiếp được nữa', 'Ta yếu', 'Mỹ trở lại', 'Hoà bình'], 0, 'Phước Long - "trận thăm dò".'),
    Q('Chiến dịch Tây Nguyên (3/1975) đánh đòn quyết định ở?', ['Đà Nẵng', 'Buôn Ma Thuột (10/3/1975)', 'Sài Gòn', 'Huế'], 1, 'Buôn Ma Thuột - đột phá.'),
    Q('Sau Tây Nguyên, ta giải phóng Huế ngày?', ['30/4/1975', '29/3/1975 Đà Nẵng', '26/3/1975', '2/5/1975'], 2, 'Huế 26/3, Đà Nẵng 29/3.'),
    Q('Chiến dịch Hồ Chí Minh mang tên Chủ tịch HCM bắt đầu vào?', ['1/4/1975', '2/5/1975', '30/4/1975', '26/4/1975'], 3, 'Chiến dịch HCM mở màn 26/4.'),
    Q('Sài Gòn được giải phóng vào ngày?', ['30/4/1975 (lúc 11h30 cờ MTDTGP cắm trên Dinh Độc Lập)', '26/4/1975', '1/5/1975', '2/5/1975'], 0, '30/4/1975 - Ngày Giải phóng.'),
  ]),

  M(16, 'Đấu tranh bảo vệ Tổ quốc từ sau 1975', [
    Q('Sau 1975, đất nước thống nhất, miền Nam và miền Bắc?', ['Tiếp tục chia cắt', 'Cùng đi lên CNXH, thống nhất về mặt nhà nước', 'Đối lập', 'Riêng biệt'], 1, 'Thống nhất Tổ quốc.'),
    Q('Tên nước được thay đổi thành?', ['VNDCCH', 'Đại Việt', 'Cộng hoà XHCN Việt Nam (2/7/1976)', 'An Nam'], 2, 'CHXHCN VN từ 7/1976.'),
    Q('Chiến tranh bảo vệ biên giới Tây Nam (1977-1979) chống?', ['Trung Quốc', 'Mỹ', 'Pháp', 'Tập đoàn Pol Pot - Khmer Đỏ (Campuchia Dân chủ)'], 3, 'Pol Pot xâm lược biên giới Tây Nam.'),
    Q('Quân tình nguyện VN giúp Campuchia lật đổ Pol Pot vào?', ['1/1979', '1975', '1989', '1991'], 0, '7/1/1979 giải phóng Phnom Penh.'),
    Q('Chiến tranh biên giới phía Bắc xảy ra vào?', ['1975', '2-3/1979 chống Trung Quốc xâm lược biên giới phía Bắc', '1989', '1990'], 1, 'Biên giới phía Bắc 2/1979.'),
    Q('Quần đảo Hoàng Sa bị chiếm đóng trái phép từ?', ['1958', '1988', '1/1974 (Trung Quốc dùng vũ lực)', '2014'], 2, 'TQ chiếm 1/1974.'),
  ]),

  M(17, 'Ôn tập học kì 1', [
    Q('Liên hợp quốc thành lập năm?', ['1919', '1989', '1950', '24/10/1945'], 3, 'UN 1945.'),
    Q('5 nước sáng lập ASEAN là?', ['Indonesia, Malaysia, Philippines, Singapore, Thái Lan', 'VN, Lào, Campuchia, Thái Lan, Myanmar', 'Singapore, Brunei, Malaysia, Indonesia, Lào', 'Tất cả Đông Nam Á'], 0, '5 nước Bangkok Declaration 1967.'),
    Q('Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày?', ['19/8/1945', '2/9/1945', '23/9/1945', '6/1/1946'], 1, '2/9/1945 tại Ba Đình.'),
    Q('Chiến thắng Điện Biên Phủ năm?', ['1945', '1968', '7/5/1954', '1975'], 2, '7/5/1954.'),
    Q('Tết Mậu Thân 1968 buộc Mỹ?', ['Đầu hàng', 'Sử dụng hạt nhân', 'Tăng quân', 'Tuyên bố "phi Mỹ hoá chiến tranh" và chấp nhận đàm phán Paris'], 3, 'Buộc đàm phán.'),
    Q('Sài Gòn được giải phóng ngày?', ['30/4/1975', '7/5/1954', '2/9/1945', '21/7/1954'], 0, '30/4/1975.'),
  ]),

  M(18, 'Kiểm tra học kì 1', [
    Q('Hội đồng Bảo an Liên hợp quốc có bao nhiêu thành viên thường trực có quyền phủ quyết?', ['3', '5 (Mỹ, Anh, Pháp, Nga, Trung Quốc)', '7', '10'], 1, '5 thành viên P5.'),
    Q('Trật tự hai cực Ianta tan rã khi?', ['Chiến tranh', '1945', 'Liên Xô tan rã (12/1991), chiến tranh lạnh kết thúc', '1975'], 2, '1991.'),
    Q('VN gia nhập ASEAN năm?', ['1967', '1986', '2007', '28/7/1995'], 3, '1995 - thành viên thứ 7.'),
    Q('Mặt trận Việt Minh thành lập năm?', ['19/5/1941 (Hội nghị TƯ 8)', '1930', '1945', '1946'], 0, 'Việt Minh 5/1941.'),
    Q('Đảng đổi tên thành "Đảng Lao động Việt Nam" tại Đại hội?', ['I (1935)', 'II (2/1951)', 'III (1960)', 'IV (1976)'], 1, 'Đại hội II 1951.'),
    Q('Hiệp định Paris kí năm?', ['1954', '1975', '1973', '1995'], 2, '27/1/1973.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Việt Nam trước đổi mới (1976-1985)', [
    Q('Sau 1975, VN đối mặt khó khăn?', ['Phát triển nhanh', 'Không khó khăn', 'Hoà bình giàu có', 'Hậu quả chiến tranh nặng nề, bao vây cấm vận, cơ chế kế hoạch hoá tập trung quan liêu kém hiệu quả'], 3, 'Khó khăn lớn sau 1975.'),
    Q('Kế hoạch 5 năm 1976-1980 ưu tiên?', ['Khôi phục, phát triển kinh tế-xã hội sau chiến tranh, công nghiệp hoá nhanh', 'Du lịch', 'Bỏ kế hoạch', 'Tư nhân hoá'], 0, 'KH 5 năm 1976-1980.'),
    Q('Tình trạng kinh tế VN cuối thập niên 70 - đầu 80?', ['Thịnh vượng', 'Khủng hoảng kinh tế-xã hội nghiêm trọng, lạm phát cao, đời sống khó khăn', 'Ổn định', 'Tăng trưởng mạnh'], 1, 'Khủng hoảng kinh tế.'),
    Q('Nguyên nhân khủng hoảng kinh tế-xã hội cuối thập niên 80?', ['Chỉ thiên tai', 'Quá tự do', 'Cơ chế bao cấp, kế hoạch hoá tập trung lạc hậu + hậu quả chiến tranh + cấm vận', 'Quốc tế hoá nhanh'], 2, 'Cơ chế cũ + cấm vận.'),
    Q('Trước đổi mới, đặc trưng kinh tế là?', ['Thị trường', 'Đa thành phần', 'Tự do hoàn toàn', 'Cơ chế bao cấp, kế hoạch hoá tập trung, một thành phần kinh tế (quốc doanh, tập thể)'], 3, 'Bao cấp.'),
    Q('Tiền đề trực tiếp dẫn đến Đổi mới?', ['Khủng hoảng kinh tế-xã hội trầm trọng + thực tiễn "khoán" trong nông nghiệp', 'Chiến tranh', 'Bên ngoài áp đặt', 'Đại hội Đảng VI'], 0, 'Khủng hoảng buộc đổi mới.'),
  ]),

  M(20, 'Đại hội Đảng VI (12/1986) và đường lối Đổi mới', [
    Q('Đại hội Đảng VI diễn ra vào?', ['12/1976', '12/1986 tại Hà Nội', '1991', '1996'], 1, 'Đại hội VI 12/1986.'),
    Q('Tổng Bí thư được bầu tại Đại hội VI là?', ['Lê Duẩn', 'Đỗ Mười', 'Nguyễn Văn Linh', 'Lê Khả Phiêu'], 2, 'TBT Nguyễn Văn Linh - "khai phá đổi mới".'),
    Q('Đường lối Đổi mới được Đảng đề ra tại?', ['Đại hội V', 'Đại hội VIII', 'Đại hội VII', 'Đại hội VI (12/1986)'], 3, 'Đại hội VI - khởi xướng Đổi mới.'),
    Q('Nội dung cốt lõi của Đổi mới về kinh tế?', ['Phát triển kinh tế hàng hoá nhiều thành phần theo định hướng XHCN, xoá bao cấp', 'Quay lại bao cấp', 'Tư nhân hoá toàn bộ', 'Đóng cửa'], 0, 'Đổi mới kinh tế.'),
    Q('Khẩu hiệu nổi tiếng của TBT Nguyễn Văn Linh?', ['"Đoàn kết - đoàn kết - đại đoàn kết"', '"Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật"', '"Không gì quý hơn độc lập tự do"', '"Tất cả vì miền Nam"'], 1, 'Đại hội VI - nhìn thẳng sự thật.'),
    Q('Đổi mới phải toàn diện nhưng?', ['Bỏ chính trị', 'Chỉ chính trị', 'Đổi mới kinh tế là trọng tâm, đồng thời từng bước đổi mới các lĩnh vực khác', 'Quay lại cũ'], 2, 'Kinh tế là trọng tâm.'),
  ]),

  M(21, 'Đổi mới và thành tựu (1986-2000)', [
    Q('Thành tựu nổi bật về nông nghiệp những năm đầu Đổi mới?', ['Mất mùa', 'Giảm năng suất', 'Không thay đổi', 'Từ thiếu lương thực trở thành nước xuất khẩu gạo lớn (1989)'], 3, '1989 - VN xuất khẩu gạo lớn thứ 3 thế giới.'),
    Q('Khoán 10 (4/1988) ở nông nghiệp là?', ['Giao đất cho hộ nông dân tự chủ sản xuất, thừa nhận hộ là đơn vị kinh tế tự chủ', 'Quay lại tập thể', 'Hợp tác xã 100%', 'Quốc doanh'], 0, 'Khoán 10 - giao đất cho hộ.'),
    Q('VN gia nhập ASEAN vào năm?', ['1986', '28/7/1995', '1990', '2007'], 1, 'ASEAN 7/1995.'),
    Q('Mỹ bỏ cấm vận VN vào năm?', ['1986', '1995', '3/2/1994 (Tổng thống Clinton tuyên bố)', '2001'], 2, 'Bill Clinton bỏ cấm vận 1994.'),
    Q('Mỹ và VN bình thường hoá quan hệ vào năm?', ['1986', '1994', '2001', '11/7/1995'], 3, 'Bình thường hoá 7/1995.'),
    Q('Thành tựu lớn về quan hệ đối ngoại đầu Đổi mới?', ['Phá thế bị bao vây cấm vận, mở rộng quan hệ đa phương hoá, đa dạng hoá', 'Cô lập', 'Đóng cửa', 'Chiến tranh'], 0, 'Phá bao vây cấm vận.'),
  ]),

  M(22, 'Việt Nam thời kì đẩy mạnh Đổi mới (2000-nay)', [
    Q('VN gia nhập WTO vào năm?', ['1995', '11/1/2007', '2001', '2015'], 1, 'WTO 1/2007.'),
    Q('GDP VN tăng trưởng trung bình giai đoạn 2000-2020 khoảng?', ['1-2%/năm', '15%/năm', '6-7%/năm (thuộc nhóm cao trong khu vực và thế giới)', 'Âm'], 2, 'Tăng trưởng GDP 6-7%.'),
    Q('Tổng kim ngạch xuất khẩu VN tăng?', ['Giảm', 'Đứng yên', 'Không đổi', 'Tăng vượt bậc, VN trở thành một trong các nền kinh tế xuất khẩu lớn của khu vực'], 3, 'XK tăng mạnh.'),
    Q('Việt Nam đảm nhận vai trò Chủ tịch luân phiên ASEAN năm?', ['1998 và 2010 và 2020', '1995', '2007', '2015'], 0, 'Chủ tịch 1998, 2010, 2020.'),
    Q('Hiệp định CPTPP (TPP-11) có hiệu lực với VN từ?', ['2000', '14/1/2019', '2020', '2022'], 1, 'CPTPP hiệu lực 1/2019.'),
    Q('Hiệp định EVFTA giữa VN và Liên minh châu Âu có hiệu lực từ?', ['2010', '2015', '1/8/2020', '2022'], 2, 'EVFTA 8/2020.'),
  ]),

  M(23, 'Lịch sử đối ngoại VN - Thời cổ trung đại', [
    Q('Đường lối đối ngoại của các triều đại phong kiến VN nhằm?', ['Bành trướng', 'Mở rộng đất đai vô hạn', 'Liên minh quân sự', 'Bảo vệ độc lập, chủ quyền và toàn vẹn lãnh thổ; giữ quan hệ hoà hảo với các nước láng giềng'], 3, 'Hoà hiếu + bảo vệ chủ quyền.'),
    Q('Sách lược "ngoại giao mềm dẻo" của các triều đại phong kiến VN với Trung Hoa thể hiện qua?', ['Triều cống nhưng giữ độc lập trên thực tế, "trong xưng đế, ngoài xưng vương"', 'Đối đầu', 'Sáp nhập', 'Liên minh quân sự'], 0, '"Trong đế ngoài vương".'),
    Q('Triều đại Lê sơ và đối ngoại?', ['Chỉ chiến tranh', 'Hoà hiếu với nhà Minh sau kháng chiến + thiết lập quan hệ với Champa, Ai Lao', 'Cô lập', 'Bành trướng'], 1, 'Lê Lợi hoà hiếu sau khởi nghĩa Lam Sơn.'),
    Q('Quan hệ giữa VN và các nước Đông Nam Á thời phong kiến chủ yếu là?', ['Đối đầu liên tục', 'Hoàn toàn cô lập', 'Giao thương, ngoại giao, có lúc liên minh có lúc tranh chấp', 'Sáp nhập'], 2, 'Đa dạng quan hệ.'),
    Q('Đại Việt thời Lý-Trần đã đối phó các cuộc xâm lược của?', ['Chỉ Mông Cổ', 'Chỉ Nguyên', 'Chỉ Tống', 'Tống (Lý), Mông-Nguyên (Trần) - giành thắng lợi vẻ vang'], 3, 'Đánh Tống và Mông-Nguyên.'),
    Q('Nguyên tắc đối ngoại xuyên suốt của các triều đại VN?', ['Độc lập, tự chủ, hoà hiếu, bảo vệ toàn vẹn lãnh thổ', 'Đối đầu', 'Liên minh chống tất cả', 'Đầu hàng'], 0, 'Nguyên tắc đối ngoại truyền thống.'),
  ]),

  M(24, 'Đối ngoại VN thời cận đại (1858-1945)', [
    Q('Triều Nguyễn (đầu thế kỉ XIX) thi hành chính sách đối ngoại?', ['Mở cửa', 'Bế quan toả cảng, sai lầm khi từ chối canh tân (như Nhật Bản)', 'Liên minh quốc tế', 'Chiến tranh'], 1, 'Bế quan tỏa cảng sai lầm.'),
    Q('Sau khi Pháp xâm lược (1858), VN trở thành?', ['Độc lập', 'Đồng minh Pháp', 'Thuộc địa của Pháp, mất quyền đối ngoại độc lập', 'Liên bang'], 2, 'Pháp đặt nền cai trị thuộc địa.'),
    Q('Phan Bội Châu chủ trương đối ngoại nào?', ['Cầu viện Pháp', 'Cô lập', 'Liên minh Anh', 'Dựa vào Nhật Bản để chống Pháp (phong trào Đông Du)'], 3, 'Đông Du 1905.'),
    Q('Nguyễn Ái Quốc đến Pháp năm 1917 với mục đích?', ['Tìm đường cứu nước, sau gửi Yêu sách 8 điểm tới Hội nghị Versailles (1919)', 'Du lịch', 'Học tiếng Pháp', 'Du học bình thường'], 0, 'NAQ - tìm con đường cứu nước.'),
    Q('Yêu sách của nhân dân An Nam (1919) gửi tới?', ['Hội Quốc liên', 'Hội nghị Versailles tại Paris (sau CTTG I)', 'Đại hội Đảng XHCN Pháp', 'Comintern'], 1, 'Yêu sách 1919.'),
    Q('Nguyễn Ái Quốc tham gia thành lập Đảng Cộng sản Pháp năm?', ['1917', '1925', '1920 (Đại hội Tours)', '1930'], 2, 'Đại hội Tours 12/1920.'),
  ]),

  M(25, 'Đối ngoại VN thời kì kháng chiến chống Pháp và chống Mỹ', [
    Q('Sau 2/9/1945, Chính phủ VNDCCH nỗ lực đối ngoại bằng?', ['Đối đầu mọi quốc gia', 'Cô lập', 'Đóng cửa', 'Tranh thủ ủng hộ quốc tế, gửi thư tới các nguyên thủ thế giới khẳng định nền độc lập'], 3, 'Đối ngoại đa phương.'),
    Q('Trung Quốc và Liên Xô lần lượt công nhận VNDCCH vào?', ['1/1950 (Trung Quốc) và 1/1950 (Liên Xô)', '1945', '1954', '1960'], 0, 'Công nhận 1950.'),
    Q('Trong kháng chiến chống Mỹ, VNDCCH nhận được sự ủng hộ từ?', ['Chỉ Mỹ', 'Liên Xô, Trung Quốc, các nước XHCN, phong trào hoà bình quốc tế, kiều bào', 'Không có', 'Chỉ Pháp'], 1, 'Ủng hộ quốc tế rộng rãi.'),
    Q('Hội nghị Paris kéo dài bao lâu?', ['1 năm', '6 tháng', 'Gần 5 năm (5/1968 - 1/1973), thể hiện cuộc đấu tranh ngoại giao quyết liệt', '10 năm'], 2, 'Đàm phán Paris kéo dài.'),
    Q('Đại diện chính của VNDCCH tại Hội nghị Paris là?', ['Hồ Chí Minh', 'Trường Chinh', 'Phạm Văn Đồng', 'Lê Đức Thọ (cố vấn đặc biệt), Xuân Thuỷ (trưởng đoàn)'], 3, 'Lê Đức Thọ - Xuân Thuỷ.'),
    Q('Nguyên tắc đối ngoại của VNDCCH trong kháng chiến?', ['Độc lập, tự chủ, kết hợp ngoại giao - quân sự - chính trị', 'Thoả hiệp vô nguyên tắc', 'Đầu hàng', 'Đối đầu mọi nước'], 0, 'Ngoại giao kết hợp đấu tranh.'),
  ]),

  M(26, 'Đối ngoại VN thời kì Đổi mới (1986-nay)', [
    Q('Đường lối đối ngoại của VN thời Đổi mới?', ['Cô lập', 'Đa dạng hoá, đa phương hoá quan hệ đối ngoại; VN là bạn, đối tác tin cậy của các nước', 'Đối đầu', 'Liên minh quân sự một chiều'], 1, 'Đa phương hoá, đa dạng hoá.'),
    Q('Tổng số đối tác chiến lược toàn diện của VN (đến 2024)?', ['1', '0', 'Hơn 5 (gồm Trung Quốc, Liên bang Nga, Ấn Độ, Hàn Quốc, Mỹ, Nhật Bản, Úc…)', '20'], 2, 'Mạng lưới đối tác đa phương.'),
    Q('VN bình thường hoá quan hệ với Mỹ vào năm?', ['1986', '1994', '2001', '11/7/1995'], 3, 'Bình thường hoá 7/1995.'),
    Q('VN đảm nhận Uỷ viên không thường trực Hội đồng Bảo an LHQ nhiệm kì?', ['2008-2009 và 2020-2021 (2 lần)', 'Chỉ 1', 'Không bao giờ', '2030'], 0, '2 nhiệm kì.'),
    Q('VN đã kí các hiệp định FTA thế hệ mới như?', ['Chỉ ASEAN', 'CPTPP, EVFTA, UKVFTA, RCEP… mở rộng hội nhập quốc tế', 'Chỉ trong khu vực', 'Không kí FTA nào'], 1, 'Nhiều FTA thế hệ mới.'),
    Q('Nguyên tắc cốt lõi trong đối ngoại VN hiện nay?', ['Đối đầu', 'Đầu hàng', 'Độc lập, tự chủ; hoà bình, hợp tác và phát triển; đa phương hoá, đa dạng hoá', 'Bành trướng'], 2, 'Đường lối đối ngoại hiện đại.'),
  ]),

  M(27, 'Vai trò và vị thế VN trong khu vực và quốc tế', [
    Q('Vị thế VN trên trường quốc tế hiện nay?', ['Cô lập', 'Bị cô lập', 'Không có vị thế', 'Tăng cao, được công nhận và tôn trọng; đối tác tin cậy của nhiều nước'], 3, 'Vị thế cao trên trường QT.'),
    Q('VN đã tham gia lực lượng gìn giữ hoà bình LHQ từ?', ['2014 (lần đầu tham gia)', '1986', '1995', '2020'], 0, 'Tham gia PKO từ 2014.'),
    Q('VN tổ chức thành công Hội nghị Thượng đỉnh Mỹ-Triều lần 2 năm?', ['2018', '2/2019 tại Hà Nội', '2020', '2022'], 1, 'Hội nghị Mỹ-Triều 2/2019.'),
    Q('VN đảm nhận vai trò Chủ tịch ASEAN năm 2020 với chủ đề?', ['"Đối đầu"', '"Bành trướng"', '"Gắn kết và Chủ động thích ứng" (Cohesive and Responsive)', '"Đóng cửa"'], 2, 'ASEAN 2020.'),
    Q('VN đã thiết lập quan hệ ngoại giao với bao nhiêu nước (đến 2024)?', ['Khoảng 50', '30', '100', 'Trên 190 nước (gần như toàn bộ thành viên LHQ)'], 3, 'Quan hệ rộng khắp.'),
    Q('Đường lối đối ngoại VN hiện nay tiếp tục theo phương châm?', ['"Bạn với tất cả", đối tác tin cậy, thành viên có trách nhiệm của cộng đồng quốc tế', 'Đối đầu', 'Cô lập', 'Đầu hàng'], 0, 'Đối tác tin cậy.'),
  ]),

  M(28, 'Hồ Chí Minh - Quê hương và những năm tháng đầu đời', [
    Q('Chủ tịch Hồ Chí Minh sinh năm?', ['1880', '19/5/1890', '1900', '1911'], 1, 'Sinh 19/5/1890.'),
    Q('Quê hương Chủ tịch Hồ Chí Minh?', ['Hà Nội', 'Huế', 'Làng Kim Liên (Sen), Nam Đàn, Nghệ An', 'Sài Gòn'], 2, 'Kim Liên, Nam Đàn, Nghệ An.'),
    Q('Tên khai sinh của Chủ tịch Hồ Chí Minh?', ['Nguyễn Ái Quốc', 'Lý Thuỵ', 'Nguyễn Tất Thành', 'Nguyễn Sinh Cung'], 3, 'Tên khai sinh: Nguyễn Sinh Cung.'),
    Q('Cha của Chủ tịch Hồ Chí Minh là?', ['Nguyễn Sinh Sắc - Phó bảng', 'Phan Bội Châu', 'Phan Châu Trinh', 'Hoàng Hoa Thám'], 0, 'Phó bảng Nguyễn Sinh Sắc.'),
    Q('Tên gọi "Nguyễn Tất Thành" được Người dùng khi?', ['Khi đi tìm đường cứu nước', 'Khi vào học Trường Quốc học Huế và rời đi tìm đường cứu nước', 'Khi ở Pháp', 'Khi về VN'], 1, 'Nguyễn Tất Thành - thời niên thiếu.'),
    Q('Ngày Người ra đi tìm đường cứu nước?', ['19/5/1890', '2/9/1945', '5/6/1911 tại bến cảng Nhà Rồng, Sài Gòn', '6/1/1946'], 2, '5/6/1911 tại Bến Nhà Rồng.'),
  ]),

  M(29, 'Hồ Chí Minh - Hoạt động ở nước ngoài (1911-1941)', [
    Q('Hành trình tìm đường cứu nước của Người đi qua các châu lục?', ['Chỉ châu Á', 'Chỉ châu Mỹ', 'Chỉ châu Âu', 'Á, Âu, Phi, Mỹ'], 3, 'Đi qua nhiều châu lục.'),
    Q('Người gửi "Yêu sách của nhân dân An Nam" tại Hội nghị Versailles (1919) với tên?', ['Nguyễn Ái Quốc', 'Nguyễn Sinh Cung', 'Nguyễn Tất Thành', 'Lý Thuỵ'], 0, 'Nguyễn Ái Quốc - 1919.'),
    Q('Người đọc Luận cương của Lênin về vấn đề dân tộc và thuộc địa vào năm?', ['1917', '7/1920', '1925', '1930'], 1, 'Luận cương Lênin 7/1920.'),
    Q('Tại Đại hội Tours (12/1920), Người trở thành?', ['Đảng viên Đảng XHCN Pháp', 'Tổng Bí thư', 'Một trong những người sáng lập Đảng Cộng sản Pháp', 'Quan sát viên'], 2, 'Đồng sáng lập ĐCS Pháp.'),
    Q('Người sáng lập "Hội VN Cách mạng Thanh niên" tại Quảng Châu năm?', ['1920', '1945', '1930', '6/1925'], 3, 'HVNCM Thanh niên 1925.'),
    Q('Hội nghị thành lập Đảng Cộng sản VN diễn ra ở đâu, khi nào?', ['3/2/1930 tại Cửu Long (Hương Cảng, Trung Quốc)', 'Pác Bó, 1941', 'Hà Nội, 1945', 'Sài Gòn, 1976'], 0, '3/2/1930 tại Hương Cảng.'),
  ]),

  M(30, 'Hồ Chí Minh - Lãnh đạo cách mạng (1941-1945)', [
    Q('Sau 30 năm hoạt động ở nước ngoài, Người trở về VN vào?', ['1930', '28/1/1941 tại Pác Bó (Cao Bằng)', '1945', '1946'], 1, 'Pác Bó 28/1/1941.'),
    Q('Tại Pác Bó, Người chủ trì Hội nghị Trung ương 8 (5/1941) quyết định?', ['Khôi phục kinh tế', 'Hoà hoãn Pháp', 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, thành lập Việt Minh', 'Đầu hàng Nhật'], 2, 'TƯ 8 (1941) - Việt Minh.'),
    Q('Tên gọi "Hồ Chí Minh" được Người dùng từ năm?', ['1941', '1946', '1945', '1942 (khi bị bắt ở Quảng Tây, Trung Quốc)'], 3, 'Tên Hồ Chí Minh - 1942.'),
    Q('Tác phẩm "Nhật ký trong tù" được viết khi?', ['Bị giam ở Quảng Tây (1942-1943) - viết bằng chữ Hán', '1930', '1945', '1946'], 0, 'Nhật ký trong tù 1942-1943.'),
    Q('Ngày 2/9/1945, Người đọc Tuyên ngôn Độc lập tại?', ['Pác Bó', 'Quảng trường Ba Đình, Hà Nội', 'Sài Gòn', 'Huế'], 1, 'Tuyên ngôn Độc lập tại Ba Đình.'),
    Q('Trong Tuyên ngôn Độc lập, Người trích dẫn 2 văn kiện nổi tiếng của?', ['Liên Xô và Trung Quốc', 'Anh và Pháp', 'Mỹ (1776) và Pháp (1791)', 'Pháp và Liên Xô'], 2, 'Trích dẫn TNDL Mỹ và Pháp.'),
  ]),

  M(31, 'Hồ Chí Minh - Lãnh đạo kháng chiến và xây dựng đất nước (1945-1969)', [
    Q('Sau Cách mạng tháng Tám, Chủ tịch HCM phải đối mặt với?', ['Hoà bình hoàn toàn', 'Không có thách thức', 'Phát triển ổn định', '"Giặc đói, giặc dốt, giặc ngoại xâm" và muôn vàn khó khăn'], 3, '3 thứ giặc.'),
    Q('Chủ tịch HCM ra "Lời kêu gọi Toàn quốc kháng chiến" vào?', ['19/12/1946', '2/9/1945', '7/5/1954', '30/4/1975'], 0, '19/12/1946.'),
    Q('Câu nói nổi tiếng "Không có gì quý hơn độc lập, tự do" do Người tuyên bố trong?', ['Tuyên ngôn Độc lập', 'Lời kêu gọi chống Mỹ cứu nước (17/7/1966)', 'Hiệp định Genève', 'Đại hội II'], 1, '17/7/1966.'),
    Q('Chủ tịch HCM qua đời vào ngày?', ['2/9/1945', '30/4/1975', '2/9/1969', '7/5/1954'], 2, 'Qua đời 2/9/1969 tại Hà Nội.'),
    Q('Di chúc của Người được công bố và để lại lời căn dặn?', ['Chiến tranh tiếp tục', 'Không quan trọng', 'Đầu hàng', 'Đoàn kết, độc lập, tự do, hạnh phúc, đoàn kết quốc tế và xây dựng đất nước đàng hoàng to đẹp hơn'], 3, 'Di chúc HCM.'),
    Q('Lăng Chủ tịch Hồ Chí Minh được khánh thành tại?', ['Hà Nội (Quảng trường Ba Đình) - 29/8/1975', 'Sài Gòn', 'Nghệ An', 'Huế'], 0, 'Lăng Bác tại Ba Đình.'),
  ]),

  M(32, 'Tư tưởng và đạo đức Hồ Chí Minh', [
    Q('Tư tưởng Hồ Chí Minh là?', ['Của riêng cá nhân', 'Hệ thống quan điểm toàn diện và sâu sắc về cách mạng VN, kế thừa và phát triển chủ nghĩa Mác-Lênin', 'Sao chép từ nước khác', 'Không có hệ thống'], 1, 'Tư tưởng HCM.'),
    Q('Nội dung cốt lõi của tư tưởng HCM về cách mạng giải phóng dân tộc?', ['Liên minh tư bản', 'Cách mạng tư sản', 'Cách mạng giải phóng dân tộc phải đi theo con đường cách mạng vô sản', 'Cải lương'], 2, 'Cách mạng vô sản.'),
    Q('Tư tưởng HCM về Nhà nước nhấn mạnh?', ['Quân chủ', 'Độc tài', 'Quý tộc', 'Nhà nước của dân, do dân, vì dân'], 3, 'Nhà nước của dân, do dân, vì dân.'),
    Q('Tư tưởng HCM về đoàn kết?', ['Đại đoàn kết toàn dân + đoàn kết quốc tế', 'Chỉ trong nước', 'Đối lập', 'Chia rẽ'], 0, 'Đại đoàn kết.'),
    Q('Đạo đức Hồ Chí Minh có những phẩm chất cốt lõi?', ['Chỉ trung thành', 'Cần - Kiệm - Liêm - Chính, chí công vô tư; trung với nước, hiếu với dân', 'Cá nhân', 'Lợi ích riêng'], 1, 'Cần-Kiệm-Liêm-Chính.'),
    Q('Phong cách Hồ Chí Minh nổi bật ở?', ['Quan cách', 'Xa cách', 'Giản dị, gần gũi nhân dân, nói đi đôi với làm', 'Hình thức'], 2, 'Giản dị, gần dân.'),
  ]),

  M(33, 'Di sản Hồ Chí Minh trong cách mạng và xây dựng đất nước', [
    Q('Hồ Chí Minh được UNESCO tôn vinh là?', ['Nhà khoa học', 'Nhà toán học', 'Nhà thơ', 'Anh hùng giải phóng dân tộc và Nhà văn hoá kiệt xuất của Việt Nam (1987)'], 3, 'UNESCO 1987 nhân kỉ niệm 100 năm sinh.'),
    Q('Học tập và làm theo tư tưởng, đạo đức, phong cách HCM là?', ['Chủ trương lớn, thường xuyên, lâu dài của Đảng và toàn dân tộc', 'Phong trào ngắn hạn', 'Bắt buộc bên ngoài', 'Hình thức'], 0, 'Học tập và làm theo HCM.'),
    Q('Cuộc vận động "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh" được phát động theo Chỉ thị?', ['Chỉ thị 03 (2011)', 'Chỉ thị 06-CT/TW (2006) - mở đầu, sau đó Chỉ thị 03-CT/TW (2011), Chỉ thị 05-CT/TW (2016)', 'Chỉ thị 50', 'Không có'], 1, 'Các chỉ thị nối tiếp.'),
    Q('Bảo tàng Hồ Chí Minh ở Hà Nội khánh thành?', ['1945', '1969', '1990 (kỉ niệm 100 năm ngày sinh)', '2000'], 2, '19/5/1990.'),
    Q('Khu di tích Kim Liên (quê Bác) thuộc?', ['Hà Nội', 'Cao Bằng', 'Huế', 'Nam Đàn, Nghệ An'], 3, 'Kim Liên, Nghệ An.'),
    Q('Tư tưởng HCM tiếp tục soi đường cho cách mạng VN trong giai đoạn?', ['Đổi mới, hội nhập quốc tế, xây dựng và bảo vệ Tổ quốc', 'Đã lỗi thời', 'Không còn ý nghĩa', 'Chỉ trong chiến tranh'], 0, 'Tư tưởng HCM trong Đổi mới.'),
  ]),

  M(34, 'Ôn tập tổng hợp cả năm', [
    Q('Liên Xô tan rã vào năm?', ['1989', '12/1991', '2000', '1985'], 1, '25/12/1991.'),
    Q('VN gia nhập ASEAN với tư cách thành viên thứ?', ['1', '10', '7 (28/7/1995)', '15'], 2, 'Thành viên thứ 7.'),
    Q('Đại hội Đảng VI (12/1986) đề ra đường lối?', ['Bao cấp', 'Tập trung kế hoạch hoá', 'Cách mạng văn hoá', 'Đổi mới toàn diện đất nước'], 3, 'Khởi xướng Đổi mới.'),
    Q('VN gia nhập WTO vào năm?', ['2007', '2001', '1995', '2015'], 0, '11/1/2007.'),
    Q('Hồ Chí Minh ra đi tìm đường cứu nước vào ngày?', ['19/5/1890', '5/6/1911', '2/9/1945', '5/6/1925'], 1, '5/6/1911 tại Bến Nhà Rồng.'),
    Q('Người trở về Tổ quốc sau 30 năm tại?', ['Hà Nội', 'Sài Gòn', 'Pác Bó, Cao Bằng (28/1/1941)', 'Tân Trào'], 2, 'Pác Bó 1941.'),
  ]),

  M(35, 'Tổng ôn - chuẩn bị thi tốt nghiệp THPT', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Lịch sử?', ['Tự luận', 'Vấn đáp', '60 câu', '40 câu trắc nghiệm, 50 phút, 4 mức độ'], 3, '40 TN, 50 phút.'),
    Q('Trật tự thế giới hai cực Ianta hình thành sau?', ['CTTG II (1945) qua các hội nghị Yalta, Potsdam', 'CTTG I', 'Chiến tranh lạnh kết thúc', 'CMCN'], 0, 'Sau CTTG II.'),
    Q('Hiệp định Genève (1954) lấy đường nào làm giới tuyến tạm thời ở VN?', ['Vĩ tuyến 16', 'Vĩ tuyến 17 (sông Bến Hải)', 'Vĩ tuyến 38', 'Sông Hồng'], 1, 'Vĩ tuyến 17.'),
    Q('Chiến dịch nào quyết định kết thúc cuộc kháng chiến chống Pháp?', ['Việt Bắc 1947', 'Biên giới 1950', 'Điện Biên Phủ 1954', 'Hoà Bình 1952'], 2, 'ĐBP - quyết định chiến lược.'),
    Q('"Điện Biên Phủ trên không" (12/1972) là?', ['Trận ở Điện Biên Phủ', 'Tổng tấn công', 'Hiệp định Paris', 'Cuộc chiến đấu 12 ngày đêm bảo vệ Hà Nội, Hải Phòng chống B-52'], 3, 'Linebacker II 12 ngày đêm.'),
    Q('Lời khuyên khi làm bài thi Lịch sử?', ['Đọc kĩ câu hỏi + nhớ chính xác mốc thời gian + làm câu dễ trước + quản lí thời gian', 'Đoán', 'Học thuộc lòng máy móc', 'Bỏ qua mốc'], 0, 'Kĩ năng làm bài.'),
  ]),
];

export const H12SU_SCENARIOS = indexBy(H12SU_WEEKS);
