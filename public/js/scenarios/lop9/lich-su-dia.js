// ============================================================
// Lớp 9 — Lịch sử và Địa lí (GDPT 2018, tích hợp) — 35 tuần
// HK1 (T1–18): phần LỊCH SỬ (thế giới + Việt Nam 1919–nay)
// HK2 (T19–35): phần ĐỊA LÍ (dân cư, kinh tế VN, vùng kinh tế)
// ID prefix: "S9LSDL-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9LSDL', 'lich-su-dia', n, title, qs, opts);

export const S9LSDL_WEEKS = [
  // ===== HK1 — LỊCH SỬ =====
  M(1, 'Liên Xô và các nước Đông Âu sau 1945', [
    Q('Liên Xô bước vào thời kỳ xây dựng CNXH sau Chiến tranh thế giới thứ 2 từ năm?', ['1950', '1960', '1955', '1945'], 3, 'Ngay sau khi kết thúc Thế chiến II (1945), Liên Xô bắt đầu khôi phục kinh tế và xây dựng CNXH.'),
    Q('Đặc điểm nổi bật về kinh tế Liên Xô giai đoạn 1945-1970?', ['Khủng hoảng', 'Suy thoái', 'Phụ thuộc Mỹ', 'Phát triển mạnh, trở thành cường quốc công nghiệp đứng thứ 2 thế giới'], 3, 'Đến cuối những năm 60, Liên Xô là cường quốc công nghiệp đứng sau Mỹ.'),
    Q('Liên Xô phóng vệ tinh nhân tạo đầu tiên (Sputnik 1) vào năm?', ['1957', '1955', '1961', '1969'], 0, 'Sputnik 1 phóng năm 1957, mở đầu kỷ nguyên chinh phục vũ trụ.'),
    Q('Nhà du hành vũ trụ Liên Xô đầu tiên là?', ['Valentina Tereshkova', 'Neil Armstrong', 'Yuri Gagarin', 'Phạm Tuân'], 2, 'Yuri Gagarin bay vào vũ trụ ngày 12/4/1961 trên tàu Vostok-1.'),
    Q('Khối SEV (Hội đồng tương trợ kinh tế) thành lập năm?', ['1949', '1955', '1975', '1960'], 0, 'SEV (COMECON) thành lập 1949 nhằm liên kết kinh tế các nước XHCN.'),
    Q('Liên Xô tan rã vào năm?', ['1991', '1995', '1989', '1985'], 0, 'Liên Xô chính thức tan rã ngày 25/12/1991, hình thành 15 quốc gia độc lập.'),
  ]),

  M(2, 'Sự ra đời các nước Á-Phi-Mỹ Latinh sau 1945', [
    Q('Sau Thế chiến II, hệ thống thuộc địa chủ nghĩa thực dân?', ['Không đổi', 'Sụp đổ, các nước thuộc địa giành độc lập', 'Tiếp tục mở rộng', 'Hồi sinh'], 1, 'Phong trào giải phóng dân tộc lan rộng, hàng loạt nước giành độc lập sau 1945.'),
    Q('Năm 1960 được gọi là?', ['Năm Mỹ Latinh', 'Năm châu Á', 'Năm châu Phi (17 nước giành độc lập)', 'Năm châu Âu'], 2, '1960 có 17 nước châu Phi tuyên bố độc lập ⇒ "Năm châu Phi".'),
    Q('Nước nào ở châu Á đầu tiên tuyên bố độc lập sau 1945?', ['Ấn Độ (15/8/1947)', 'Indonesia', 'Việt Nam (2/9/1945)', 'Trung Quốc'], 2, 'VN tuyên bố độc lập sớm nhất — 2/9/1945; Indonesia: 17/8/1945 (cũng sớm).'),
    Q('Trung Quốc thành lập nước CHND năm?', ['1960', '1949', '1955', '1945'], 1, 'Nước Cộng hoà Nhân dân Trung Hoa thành lập ngày 1/10/1949.'),
    Q('Cách mạng Cuba (1959) do ai lãnh đạo?', ['Hugo Chavez', 'Fidel Castro', 'Che Guevara', 'Hồ Chí Minh'], 1, 'Fidel Castro lãnh đạo cách mạng Cuba, lật đổ chính quyền Batista năm 1959.'),
    Q('Năm 1991, hệ thống nào sụp đổ?', ['Liên hợp quốc', 'Hệ thống XHCN ở Đông Âu và Liên Xô', 'Hệ thống TBCN', 'Phong trào giải phóng'], 1, 'Đông Âu 1989-1990, Liên Xô 1991 ⇒ kết thúc hệ thống XHCN hùng mạnh.'),
  ]),

  M(3, 'Mỹ — Nhật Bản — Tây Âu sau 1945', [
    Q('Sau Thế chiến II, Mỹ trở thành?', ['Cường quốc số 1 thế giới về kinh tế và quân sự', 'Nước nghèo', 'Nước nhỏ', 'Nước thua trận'], 0, 'Mỹ thu được lợi lớn từ chiến tranh: sản xuất ½ tổng sản lượng thế giới (1948).'),
    Q('Kế hoạch Marshall của Mỹ (1947) nhằm?', ['Xây thành phố mới', 'Viện trợ kinh tế cho Tây Âu để phục hồi và ngăn chặn CNXH lan rộng', 'Bảo vệ môi trường', 'Tấn công Liên Xô'], 1, 'Kế hoạch Marshall: 13 tỷ USD cho Tây Âu ⇒ phục hồi kinh tế + ảnh hưởng Mỹ.'),
    Q('NATO thành lập năm?', ['1949', '1955', '1945', '1960'], 0, 'NATO (Tổ chức Hiệp ước Bắc Đại Tây Dương) thành lập 4/1949.'),
    Q('Nhật Bản phục hồi và phát triển kinh tế giai đoạn 1960-1973 được gọi là?', ['Thần kỳ Đông Á', 'Thần kỳ Nhật Bản', 'Sự bùng nổ Nhật Bản', 'Phép màu Nhật'], 1, '"Thần kỳ Nhật Bản" — tăng trưởng GDP 9-10%/năm, vươn lên cường quốc thứ 2 thế giới (1968).'),
    Q('Nguyên nhân Nhật Bản phát triển thần kỳ?', ['Tài nguyên giàu có', 'Dân số đông', 'Diện tích lớn', 'Đầu tư mạnh KH-CN, giáo dục, quản lý hiệu quả, viện trợ Mỹ'], 3, 'Yếu tố con người + KH-CN + chính sách quản lý là then chốt.'),
    Q('Cộng đồng kinh tế châu Âu (EEC) thành lập năm?', ['1957', '1993', '1967', '1949'], 0, 'EEC thành lập theo Hiệp ước Roma 1957; sau phát triển thành EU (1993).'),
  ]),

  M(4, 'Quan hệ quốc tế — Chiến tranh lạnh và xu thế đa cực', [
    Q('Chiến tranh lạnh là?', ['Chiến tranh khu vực', 'Chiến tranh kinh tế', 'Chiến tranh nóng', 'Cuộc đối đầu căng thẳng giữa Mỹ và Liên Xô (2 cực) sau Thế chiến II'], 3, 'Chiến tranh lạnh: căng thẳng quân sự - chính trị Mỹ-Liên Xô (1947-1991), không trực tiếp đánh nhau.'),
    Q('Khối Vacsava do Liên Xô đứng đầu thành lập năm?', ['1960', '1949', '1955', '1975'], 2, 'Vacsava (Warsaw Pact) thành lập 1955, đối trọng với NATO.'),
    Q('Chiến tranh lạnh chấm dứt khi nào?', ['1975', '1989-1991 (sụp đổ Đông Âu + Liên Xô tan rã)', '1985', '2000'], 1, 'Đánh dấu bằng sự kiện sụp đổ tường Berlin 1989 + Liên Xô tan rã 1991.'),
    Q('Sau Chiến tranh lạnh, xu thế chủ đạo của thế giới?', ['Cô lập', 'Đơn cực Mỹ', 'Đa cực, hoà bình - hợp tác, toàn cầu hoá', 'Hai cực'], 2, 'Hình thành nhiều trung tâm quyền lực: Mỹ, EU, TQ, Nga, Nhật, Ấn Độ…'),
    Q('Liên hợp quốc (UN) thành lập năm?', ['1955', '1945', '1975', '1949'], 1, 'UN thành lập 24/10/1945; trụ sở tại New York.'),
    Q('Vai trò chính của Liên hợp quốc?', ['Cai trị các nước', 'Duy trì hoà bình, an ninh thế giới, phát triển hợp tác giữa các nước', 'Thương mại', 'Phân phối tài nguyên'], 1, 'UN có 4 mục tiêu chính: hoà bình, hợp tác kinh tế, nhân quyền, luật pháp quốc tế.'),
  ]),

  M(5, 'ASEAN và sự phát triển Đông Nam Á', [
    Q('ASEAN thành lập năm?', ['1967', '1985', '1976', '1965'], 0, 'ASEAN thành lập 8/8/1967 tại Bangkok với 5 thành viên ban đầu.'),
    Q('5 nước sáng lập ASEAN?', ['Việt Nam, Lào, Campuchia, Thái Lan, Myanmar', 'Thái Lan, Malaysia, Indonesia, Philippines, Singapore', 'Brunei, Việt Nam, Lào, Singapore, Thái Lan', 'Việt Nam, Singapore, Malaysia, Indonesia, Brunei'], 1, '5 nước sáng lập tại Bangkok: Thái Lan, Malaysia, Indonesia, Philippines, Singapore.'),
    Q('Việt Nam gia nhập ASEAN năm?', ['2000', '1995', '1990', '1985'], 1, 'Việt Nam gia nhập ASEAN ngày 28/7/1995, trở thành thành viên thứ 7.'),
    Q('ASEAN hiện nay có bao nhiêu thành viên?', ['10', '9', '8', '11'], 0, 'ASEAN có 10 thành viên: 5 sáng lập + Brunei (1984) + VN (1995) + Lào, Myanmar (1997) + Campuchia (1999).'),
    Q('Cộng đồng ASEAN chính thức ra đời năm?', ['2000', '2020', '2010', '2015'], 3, 'AC (ASEAN Community) chính thức hoạt động ngày 31/12/2015.'),
    Q('Mục tiêu của ASEAN?', ['Cạnh tranh', 'Phát triển kinh tế, văn hoá, xã hội + duy trì hoà bình, an ninh khu vực', 'Quân sự hoá', 'Cô lập'], 1, '3 trụ cột: chính trị-an ninh, kinh tế, văn hoá-xã hội.'),
  ]),

  M(6, 'Việt Nam 1919-1930 — Hoạt động của Nguyễn Ái Quốc', [
    Q('Sau Thế chiến I, Pháp tiến hành?', ['Chương trình khai thác thuộc địa lần 2 ở Đông Dương (1919-1929)', 'Trả độc lập cho VN', 'Hỗ trợ VN', 'Rút quân khỏi VN'], 0, 'Khai thác lần 2 với quy mô lớn để bù đắp tổn thất Thế chiến I.'),
    Q('Nguyễn Ái Quốc sinh năm?', ['1890', '1900', '1880', '1910'], 0, 'Hồ Chí Minh (Nguyễn Ái Quốc) sinh 19/5/1890 tại Nghệ An.'),
    Q('Nguyễn Ái Quốc ra đi tìm đường cứu nước năm?', ['1925', '1911', '1905', '1920'], 1, 'Ngày 5/6/1911 từ bến cảng Nhà Rồng (Sài Gòn), với cái tên Văn Ba.'),
    Q('Nguyễn Ái Quốc gửi "Yêu sách của nhân dân An Nam" tại?', ['Hội nghị Geneva', 'Hội nghị Versailles 1919', 'Hội nghị Bandung', 'Hội nghị Đông Dương'], 1, 'Yêu sách 8 điểm gửi Hội nghị Versailles 1919, công khai vấn đề Việt Nam.'),
    Q('Nguyễn Ái Quốc trở thành đảng viên Đảng Cộng sản Pháp năm?', ['1930', '1920', '1917', '1925'], 1, 'Tháng 12/1920, tại Đại hội Tours, Người bỏ phiếu sáng lập Đảng Cộng sản Pháp.'),
    Q('Việt Nam Thanh niên Cách mạng Đồng chí Hội do Nguyễn Ái Quốc thành lập năm?', ['1927', '1929', '1925', '1930'], 2, 'Tháng 6/1925 tại Quảng Châu (TQ) — đào tạo cán bộ cách mạng.'),
  ]),

  M(7, 'Đảng Cộng sản Việt Nam ra đời (3/2/1930)', [
    Q('3 tổ chức cộng sản ra đời năm 1929 ở VN?', ['Liên đoàn lao động', 'Đảng Cộng sản Việt Nam', 'Phong trào Cần Vương', 'Đông Dương CSĐ, An Nam CSĐ, Đông Dương Cộng sản Liên đoàn'], 3, '3 tổ chức: Đông Dương CSĐ (Bắc Kỳ), An Nam CSĐ (Nam Kỳ), Đông Dương CS Liên đoàn (Trung Kỳ).'),
    Q('Hội nghị hợp nhất 3 tổ chức cộng sản diễn ra ở?', ['Quảng Châu (TQ)', 'Hà Nội', 'Hong Kong (TQ)', 'Sài Gòn'], 2, 'Hội nghị tại Hong Kong (Cửu Long) đầu năm 1930, do Nguyễn Ái Quốc chủ trì.'),
    Q('Đảng Cộng sản Việt Nam thành lập ngày?', ['2/9/1930', '19/5/1930', '3/2/1930', '1/1/1930'], 2, 'Đảng CSVN ra đời 3/2/1930.'),
    Q('Cương lĩnh chính trị đầu tiên của Đảng do ai soạn thảo?', ['Nguyễn Ái Quốc', 'Lê Hồng Phong', 'Phan Đăng Lưu', 'Trần Phú'], 0, 'Nguyễn Ái Quốc soạn thảo Cương lĩnh — văn kiện chính trị đầu tiên của Đảng.'),
    Q('Cương lĩnh đầu tiên xác định cách mạng VN gồm 2 giai đoạn?', ['Cách mạng tư sản dân quyền và cách mạng XHCN', 'Cải lương', 'Hành chính', 'Quân sự'], 0, 'CM tư sản dân quyền (đánh đế quốc + phong kiến) → bỏ qua TBCN → tiến lên CNXH.'),
    Q('Ý nghĩa lịch sử của việc thành lập Đảng?', ['Gây mâu thuẫn', 'Chỉ tập hợp được công nhân, chưa lôi kéo được nông dân', 'Bước ngoặt vĩ đại trong lịch sử cách mạng VN, chấm dứt khủng hoảng đường lối', 'Chỉ là 1 sự kiện nhỏ'], 2, 'Đảng ra đời = bước ngoặt, mở ra thời kỳ mới cho cách mạng VN.'),
  ]),

  M(8, 'Phong trào cách mạng 1930-1931 — Xô Viết Nghệ-Tĩnh', [
    Q('Phong trào CM 1930-1931 đỉnh cao là?', ['Yên Bái', 'Đông Du', 'Cần Vương', 'Xô Viết Nghệ-Tĩnh'], 3, 'Đỉnh cao 1930-1931 = Xô Viết Nghệ-Tĩnh — chính quyền công nông đầu tiên.'),
    Q('Nguyên nhân phong trào 1930-1931?', ['Mỹ can thiệp', 'Khủng hoảng kinh tế thế giới + sự áp bức của Pháp + đường lối đúng của Đảng', 'Nội bộ Đảng mâu thuẫn', 'Pháp tự sụp đổ'], 1, 'Khủng hoảng 1929-1933 làm đời sống nhân dân khổ cực + Đảng lãnh đạo.'),
    Q('Đặc điểm chính quyền Xô Viết Nghệ-Tĩnh?', ['Chính quyền vua chúa', 'Chính quyền thực dân', 'Chính quyền của dân, do dân, vì dân (cách mạng đầu tiên)', 'Chính quyền quân sự'], 2, 'Chính quyền công-nông kiểu Liên Xô lần đầu xuất hiện ở VN.'),
    Q('Phong trào 1930-1931 bị Pháp đàn áp khi nào?', ['1935', '1945', '1939', 'Cuối 1931'], 3, 'Pháp đàn áp dã man từ cuối 1931, hàng vạn người bị bắt, giết.'),
    Q('Ý nghĩa lịch sử của Xô Viết Nghệ-Tĩnh?', ['Chỉ là sự kiện địa phương', 'Không có ý nghĩa', 'Thắng lợi cuối cùng', 'Cuộc tổng diễn tập đầu tiên cho thắng lợi Cách mạng tháng Tám 1945'], 3, 'Xô Viết Nghệ-Tĩnh là "cuộc tổng diễn tập" đầu tiên cho CMT8.'),
    Q('Bài học rút ra từ phong trào 1930-1931?', ['Cần đồng minh quốc tế', 'Tự phát', 'Cần vũ khí hiện đại', 'Vai trò lãnh đạo của Đảng + xây dựng khối liên minh công-nông'], 3, 'Khẳng định: cách mạng cần Đảng lãnh đạo + liên minh công-nông là then chốt.'),
  ]),

  M(9, 'Cao trào 1936-1939 — Cuộc vận động dân chủ', [
    Q('Cao trào 1936-1939 ở VN diễn ra trong bối cảnh?', ['Khủng hoảng kinh tế', 'Mặt trận Bình dân Pháp lên cầm quyền (1936), nguy cơ chiến tranh thế giới', 'Thuộc địa độc lập', 'Hòa bình'], 1, 'Mặt trận Bình dân Pháp thắng cử 1936 ⇒ nới lỏng chính sách thuộc địa.'),
    Q('Hình thức đấu tranh chủ yếu giai đoạn 1936-1939?', ['Khủng bố', 'Đấu tranh công khai, nửa công khai, hợp pháp', 'Vũ trang', 'Bí mật'], 1, 'Tận dụng cơ hội pháp lý để tổ chức quần chúng (báo chí, hội họp).'),
    Q('Mặt trận Dân chủ Đông Dương được thành lập năm?', ['1938', '1935', '1939', '1936'], 0, 'Mặt trận Dân chủ thành lập 1938, tập hợp lực lượng yêu nước, dân chủ.'),
    Q('Báo chí cách mạng giai đoạn này có?', ['Dân chúng, Tin tức, Lao động, Bạn dân...', 'An Nam', 'Pháp Việt thân thiện', 'Đông Pháp'], 0, 'Nhiều tờ báo cách mạng xuất hiện công khai.'),
    Q('Mục tiêu trước mắt giai đoạn 1936-1939?', ['Chống phát xít, chống chiến tranh, đòi quyền dân sinh dân chủ', 'Cải cách ruộng đất', 'Giành độc lập', 'Tổng khởi nghĩa'], 0, 'Khẩu hiệu: dân sinh, dân chủ, hoà bình.'),
    Q('Ý nghĩa của cao trào 1936-1939?', ['Thất bại hoàn toàn', 'Cuộc tổng diễn tập thứ 2 cho CMT8 + đào tạo cán bộ + thức tỉnh quần chúng', 'Mâu thuẫn nội bộ', 'Không ý nghĩa'], 1, 'Cuộc diễn tập thứ 2, chuẩn bị cho thắng lợi 1945.'),
  ]),

  M(10, 'Cách mạng tháng Tám 1945', [
    Q('Mặt trận Việt Minh ra đời năm?', ['1939', '1940', '1945', '1941'], 3, 'Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) thành lập 19/5/1941 tại Pác Bó.'),
    Q('Hội nghị Trung ương 8 (5/1941) do ai chủ trì?', ['Trường Chinh', 'Nguyễn Ái Quốc (Hồ Chí Minh)', 'Trần Phú', 'Lê Hồng Phong'], 1, 'Nguyễn Ái Quốc về nước 1941, chủ trì Hội nghị TƯ 8.'),
    Q('Khẩu hiệu chính của Việt Minh?', ['Đánh đuổi Nhật, Pháp', 'Đánh đuổi đế quốc Pháp - Nhật, giành độc lập', 'Cải cách ruộng đất', 'Phát triển kinh tế'], 1, 'Đánh đuổi Pháp - Nhật (cùng cai trị), giành độc lập là khẩu hiệu chính.'),
    Q('Khẩu hiệu "Phá kho thóc giải quyết nạn đói" của Đảng ra đời khi?', ['Cuối 1944', '1942', 'Tháng 3/1945', 'Năm 1940'], 2, 'Nạn đói 1945 ⇒ Đảng ra khẩu hiệu phá kho thóc Nhật chia cho dân.'),
    Q('Tổng khởi nghĩa diễn ra trong khoảng?', ['15-30/8/1945', '14-28/8/1945', '19-25/8/1945', '2-15/9/1945'], 1, 'Tổng khởi nghĩa từ 14/8 (lệnh Tổng khởi nghĩa) đến 28/8 (giành chính quyền cả nước).'),
    Q('Cách mạng tháng Tám 1945 thắng lợi do nguyên nhân?', ['Hỗ trợ Liên Xô', 'Pháp tự nguyện', 'Vũ khí Mỹ', 'Đảng lãnh đạo + thời cơ thuận lợi (Nhật đầu hàng) + sức mạnh đại đoàn kết toàn dân'], 3, '3 yếu tố: Đảng + thời cơ + sức mạnh nhân dân.'),
  ]),

  M(11, 'Tuyên ngôn Độc lập 2/9/1945 — Nước VNDCCH ra đời', [
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['2/9/1945', '19/8/1945', '23/8/1945', '15/8/1945'], 0, 'Sáng 2/9/1945, tại quảng trường Ba Đình, Hà Nội.'),
    Q('Tuyên ngôn Độc lập tuyên bố?', ['Thành lập nước Việt Nam Dân chủ Cộng hoà', 'Thành lập nước CHXHCN VN', 'Thống nhất 3 kỳ', 'Thành lập Liên bang Đông Dương'], 0, 'Khai sinh nước VNDCCH — nhà nước dân chủ nhân dân đầu tiên ở ĐNA.'),
    Q('Câu mở đầu Tuyên ngôn Độc lập trích từ?', ['Tuyên ngôn Nhân quyền của Pháp', 'Tuyên ngôn Độc lập của Mỹ 1776', 'Tuyên ngôn LHQ', 'Cả 2 đáp án A và B'], 3, 'Bác trích Tuyên ngôn Mỹ + Pháp để khẳng định quyền dân tộc, quyền con người.'),
    Q('Quốc kỳ Việt Nam có?', ['Nền đỏ, sao trắng', 'Nền đỏ, sao vàng 5 cánh ở giữa', '3 sọc đỏ vàng đỏ', 'Nền vàng, sao đỏ'], 1, 'Cờ đỏ sao vàng — biểu tượng máu cách mạng + dân tộc.'),
    Q('Quốc ca Việt Nam là bài?', ['Diệt phát xít', 'Quốc tế ca', 'Tiến quân ca (Văn Cao)', 'Trường ca sông Lô'], 2, '"Tiến quân ca" do Văn Cao sáng tác 1944, chính thức là Quốc ca từ 1946.'),
    Q('Ý nghĩa lịch sử của Cách mạng tháng Tám?', ['Cả A và B', 'Kết thúc thực dân phong kiến', 'Chỉ giành chính quyền ở Hà Nội, các tỉnh chưa hưởng ứng', 'Mở ra kỷ nguyên độc lập dân tộc + dân chủ nhân dân'], 0, 'CMT8 đập tan ách thực dân phong kiến + mở kỷ nguyên độc lập.'),
  ]),

  M(12, 'Kháng chiến chống Pháp (1945-1954) — Giai đoạn đầu', [
    Q('Sau 2/9/1945, đất nước đối mặt khó khăn?', ['Giặc đói, giặc dốt, giặc ngoại xâm + ngân khố trống', 'Phát triển kinh tế nhanh', 'Chỉ có giặc ngoại xâm', 'Hoàn toàn yên bình'], 0, '3 thứ giặc: đói (nạn đói 1945 chưa hết), dốt (95% mù chữ), ngoại xâm (Pháp, Tưởng).'),
    Q('Lời kêu gọi toàn quốc kháng chiến của Bác Hồ ngày?', ['7/5/1954', '23/9/1945', '19/12/1946', '2/9/1946'], 2, 'Đêm 19/12/1946, Bác phát "Lời kêu gọi toàn quốc kháng chiến".'),
    Q('Nội dung chính lời kêu gọi?', ['Đầu hàng', 'Thương lượng', '"Chúng ta thà hi sinh tất cả, chứ nhất định không chịu mất nước, không chịu làm nô lệ"', 'Hoà bình'], 2, 'Khẳng định quyết tâm chiến đấu bảo vệ độc lập.'),
    Q('Chiến dịch Việt Bắc thu đông 1947 ý nghĩa?', ['Đánh bại cuộc tấn công lên căn cứ địa Việt Bắc của Pháp', 'Giải phóng Hà Nội', 'Mất Việt Bắc', 'Hoà bình'], 0, 'Chiến thắng Việt Bắc thu đông 1947 bảo vệ "thủ đô kháng chiến".'),
    Q('Chiến dịch Biên giới 1950 thắng lợi giúp?', ['Khai thông biên giới Việt-Trung, mở rộng căn cứ địa, nhận viện trợ', 'Pháp tăng cường', 'Thua to', 'Mất căn cứ'], 0, 'Khai thông liên lạc quốc tế, mở giai đoạn mới của cuộc kháng chiến.'),
    Q('Đại hội II của Đảng (1951) có gì quan trọng?', ['Hoạt động bí mật hơn', 'Giải tán Đảng', 'Đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam', 'Đổi tên thành CSVN'], 2, 'Đảng đổi tên + ra công khai để lãnh đạo kháng chiến hiệu quả hơn.'),
  ]),

  M(13, 'Chiến thắng Điện Biên Phủ (7/5/1954)', [
    Q('Chiến dịch Điện Biên Phủ diễn ra khi nào?', ['1953-1954', '1955', '13/3 - 7/5/1954', '7/5/1954 - 21/7/1954'], 2, '56 ngày đêm: từ 13/3 đến 7/5/1954.'),
    Q('Tổng chỉ huy chiến dịch Điện Biên Phủ?', ['Trường Chinh', 'Đại tướng Võ Nguyên Giáp', 'Hồ Chí Minh', 'Phạm Văn Đồng'], 1, 'Đại tướng Võ Nguyên Giáp làm Tổng tư lệnh chiến dịch.'),
    Q('Quyết định lịch sử của tướng Giáp tại Điện Biên Phủ?', ['Bao vây', 'Đánh nhanh', 'Rút lui', 'Chuyển từ "đánh nhanh thắng nhanh" sang "đánh chắc tiến chắc"'], 3, 'Quyết định khó khăn nhất + đúng đắn nhất giúp Việt Nam thắng to.'),
    Q('Chiến thắng Điện Biên Phủ ngày?', ['7/5/1954', '20/7/1954', '2/9/1954', '30/4/1954'], 0, '17h30 ngày 7/5/1954, tướng De Castries đầu hàng, chiến dịch toàn thắng.'),
    Q('Hiệp định Geneva về Đông Dương ký kết ngày?', ['20/7/1954', '21/7/1954', '2/9/1954', '7/5/1954'], 0, 'Hiệp định Geneva ký ngày 20/7/1954 (đêm 21/7), chấm dứt chiến tranh.'),
    Q('Hiệp định Geneva công nhận?', ['Chia đôi VN vĩnh viễn', 'Đặt Pháp tiếp tục cai trị', 'Quân Mỹ vào VN', 'Độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của VN'], 3, 'Hiệp định Geneva ghi nhận chủ quyền VN; vĩ tuyến 17 là giới tuyến quân sự tạm thời.'),
  ]),

  M(14, 'Kháng chiến chống Mỹ 1954-1968', [
    Q('Sau Hiệp định Geneva 1954, VN bị chia cắt tạm thời tại?', ['Sông Gianh', 'Vĩ tuyến 13', 'Vĩ tuyến 17 (sông Bến Hải)', 'Đèo Hải Vân'], 2, 'Sông Bến Hải (Quảng Trị) trên vĩ tuyến 17 là giới tuyến quân sự tạm thời.'),
    Q('Mỹ thay Pháp tại miền Nam VN, dựng lên chính quyền của?', ['Ngô Đình Diệm', 'Bảo Đại', 'Dương Văn Minh', 'Nguyễn Văn Thiệu'], 0, 'Mỹ ủng hộ Ngô Đình Diệm lập chế độ Cộng hoà miền Nam, từ chối tổng tuyển cử.'),
    Q('Mặt trận Dân tộc Giải phóng miền Nam Việt Nam thành lập năm?', ['1955', '1965', '1960', '1968'], 2, 'Thành lập 20/12/1960 — tổ chức yêu nước ở miền Nam.'),
    Q('Chiến lược "Chiến tranh đặc biệt" của Mỹ ở miền Nam giai đoạn?', ['1961-1965', '1968-1973', '1954-1960', '1965-1968'], 0, '"Chiến tranh đặc biệt": dùng quân ngụy + cố vấn Mỹ, 1961-1965.'),
    Q('Sự kiện Tết Mậu Thân 1968 có ý nghĩa?', ['Thua hoàn toàn', 'Không ý nghĩa', 'Đòn quyết định buộc Mỹ phải xuống thang chiến tranh, ngồi vào bàn đàm phán', 'Thắng quân sự lớn'], 2, 'Tổng tiến công + nổi dậy Mậu Thân 1968 đánh sập ý chí Mỹ + buộc Mỹ đàm phán.'),
    Q('Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 diễn ra trên?', ['Chỉ Sài Gòn', 'Chỉ Huế', 'Chỉ Hà Nội', 'Quy mô toàn miền Nam, đánh đồng loạt 64 thành phố/thị xã'], 3, 'Tấn công đồng loạt 64 thành phố/thị xã ⇒ gây sốc cho Mỹ.'),
  ]),

  M(15, 'Tổng tiến công và nổi dậy 1975 — Giải phóng miền Nam', [
    Q('Hiệp định Paris ký ngày?', ['2/9/1973', '20/7/1973', '27/1/1973', '30/4/1973'], 2, 'Hiệp định Paris về chấm dứt chiến tranh, lập lại hoà bình ở VN ký 27/1/1973.'),
    Q('Sau Hiệp định Paris, Mỹ phải?', ['Đưa thêm vũ khí', 'Rút quân khỏi miền Nam VN, tôn trọng độc lập VN', 'Tăng quân', 'Đánh tiếp'], 1, 'Mỹ rút quân, kết thúc can thiệp trực tiếp.'),
    Q('Chiến dịch Tây Nguyên (3/1975) mở đầu bằng?', ['Trận Sài Gòn', 'Trận Huế', 'Trận Đà Nẵng', 'Trận Buôn Ma Thuột'], 3, 'Buôn Ma Thuột 10/3/1975 — đột phá khẩu, mở đầu Tổng tiến công 1975.'),
    Q('Chiến dịch Hồ Chí Minh diễn ra?', ['26/4 - 30/4/1975, giải phóng Sài Gòn', '3/1975', '5/1975', '1/4/1975'], 0, 'Chiến dịch Hồ Chí Minh từ 26/4, đỉnh cao là 30/4/1975 cắm cờ trên Dinh Độc Lập.'),
    Q('Ngày giải phóng hoàn toàn miền Nam, thống nhất đất nước?', ['2/9/1975', '15/5/1975', '30/4/1975', '7/5/1975'], 2, '30/4/1975 — sự kiện trọng đại nhất lịch sử hiện đại VN.'),
    Q('Ý nghĩa lịch sử của thắng lợi 30/4/1975?', ['Giải phóng miền Nam, thống nhất đất nước, kết thúc 30 năm chiến tranh', 'Chỉ thắng quân sự', 'Mở đầu chiến tranh', 'Không ý nghĩa'], 0, 'Kết thúc 30 năm chiến tranh giải phóng + thống nhất Tổ quốc.'),
  ]),

  M(16, 'Việt Nam sau 1975 — Đổi mới (1986 đến nay)', [
    Q('Nước CHXHCN Việt Nam ra đời?', ['1/1/1976', '30/4/1976', '2/9/1976', '2/7/1976'], 3, 'Quốc hội khóa VI (kỳ họp 1) quyết định 2/7/1976 đổi tên thành CHXHCN Việt Nam.'),
    Q('Sau 1975, đất nước gặp khó khăn?', ['Hoà bình tuyệt đối', 'Hậu quả chiến tranh nặng nề, cấm vận, mô hình kinh tế bao cấp khủng hoảng', 'Phát triển nhanh', 'Giàu mạnh'], 1, '1975-1985 khó khăn do bao cấp + chiến tranh biên giới + cấm vận Mỹ.'),
    Q('Đại hội nào của Đảng khởi xướng công cuộc Đổi mới?', ['Đại hội VI (1986)', 'Đại hội VII (1991)', 'Đại hội V (1982)', 'Đại hội VIII (1996)'], 0, 'Đại hội VI (12/1986) chính thức quyết định đường lối Đổi mới.'),
    Q('Đổi mới chuyển từ?', ['Kinh tế bao cấp sang kinh tế thị trường định hướng XHCN', 'Kinh tế thị trường sang bao cấp', 'Kinh tế nông nghiệp sang công nghiệp', 'Kinh tế tư nhân sang nhà nước'], 0, 'Chuyển cơ chế kế hoạch hoá tập trung quan liêu bao cấp ⇒ kinh tế thị trường + nhiều thành phần.'),
    Q('Việt Nam gia nhập WTO năm?', ['2000', '2007', '2010', '1995'], 1, 'VN gia nhập WTO ngày 11/1/2007 — thành viên thứ 150.'),
    Q('Thành tựu nổi bật của 35 năm Đổi mới?', ['Không có thành tựu', 'Khủng hoảng', 'Tự cô lập', 'Thoát nghèo, tăng trưởng GDP cao, hội nhập quốc tế sâu rộng'], 3, 'GDP tăng nhiều lần, tỷ lệ nghèo giảm mạnh, hội nhập sâu rộng.'),
  ]),

  M(17, 'Ôn tập học kỳ I — Phần lịch sử', [
    Q('Đảng CSVN thành lập ngày?', ['19/5/1941', '3/2/1930', '2/9/1945', '7/5/1954'], 1, '3/2/1930 tại Hong Kong, do Nguyễn Ái Quốc chủ trì hợp nhất 3 tổ chức.'),
    Q('Tuyên ngôn Độc lập đọc ngày?', ['7/5/1945', '30/4/1945', '2/9/1945', '19/8/1945'], 2, '2/9/1945 tại quảng trường Ba Đình.'),
    Q('Chiến thắng Điện Biên Phủ năm?', ['1968', '1972', '1954', '1975'], 2, '7/5/1954 — chấn động địa cầu.'),
    Q('Tổng tiến công Mậu Thân năm?', ['1975', '1972', '1968', '1965'], 2, '1968 — bước ngoặt, buộc Mỹ đàm phán.'),
    Q('Hiệp định Paris ký năm?', ['1975', '1986', '1968', '1973'], 3, '27/1/1973.'),
    Q('Đổi mới bắt đầu từ Đại hội VI năm?', ['1976', '1996', '2006', '1986'], 3, 'Đại hội VI tháng 12/1986.'),
  ]),

  M(18, 'Kiểm tra học kỳ I', [
    Q('Liên Xô tan rã năm?', ['1991', '1989', '2000', '1995'], 0, '25/12/1991.'),
    Q('ASEAN có bao nhiêu thành viên hiện nay?', ['8', '10', '9', '11'], 1, '10 thành viên ĐNA.'),
    Q('Nguyễn Ái Quốc tìm đường cứu nước năm?', ['1911', '1930', '1925', '1900'], 0, '5/6/1911 tại bến Nhà Rồng.'),
    Q('CMT8 thành công năm?', ['1954', '1941', '1930', '1945'], 3, '8/1945 — kỷ nguyên độc lập, tự do.'),
    Q('Chiến dịch Hồ Chí Minh năm?', ['1975', '1968', '1973', '1954'], 0, '4/1975 — giải phóng Sài Gòn.'),
    Q('Việt Nam gia nhập WTO năm?', ['2000', '2010', '1995', '2007'], 3, '11/1/2007.'),
  ]),

  // ===== HK2 — ĐỊA LÍ =====
  M(19, 'Cộng đồng các dân tộc Việt Nam', [
    Q('Việt Nam có bao nhiêu dân tộc?', ['54', '50', '56', '52'], 0, 'Việt Nam có 54 dân tộc anh em.'),
    Q('Dân tộc đông nhất Việt Nam?', ['Hoa, chiếm khoảng 10% dân số', 'Khmer, chiếm khoảng 12% dân số', 'Kinh (Việt) chiếm khoảng 85%', 'Tày, chiếm khoảng 20% dân số'], 2, 'Kinh chiếm ~85,3% dân số (theo Tổng điều tra 2019).'),
    Q('Dân tộc Kinh phân bố chủ yếu ở?', ['Tây Nguyên', 'Hải đảo', 'Đồng bằng, ven biển, trung du', 'Vùng núi cao'], 2, 'Kinh tập trung ở đồng bằng và ven biển — đặc trưng nông nghiệp lúa nước.'),
    Q('Các dân tộc ít người ở Bắc Bộ và Bắc Trung Bộ?', ['Khmer, Hoa', 'Bana, Ê đê', 'Tày, Nùng, Thái, Mường, H\'Mông, Dao…', 'Chăm, Khmer, Hoa (chủ yếu ở Nam Bộ)'], 2, 'Khu vực miền núi phía Bắc + Bắc Trung Bộ là nơi sinh sống của nhiều dân tộc ít người.'),
    Q('Các dân tộc Tây Nguyên?', ['Mường, Thái, Dao (cư trú chủ yếu ở Tây Bắc)', 'Bana, Ê đê, Gia Rai, Xơ Đăng, Mnông, K\'Ho…', 'Tày, Nùng', 'Khmer, Hoa'], 1, 'Tây Nguyên có nhiều dân tộc Trường Sơn - Tây Nguyên với văn hoá cồng chiêng.'),
    Q('Đặc điểm văn hoá các dân tộc VN?', ['Mâu thuẫn', 'Đa dạng, phong phú, đoàn kết, mỗi dân tộc có bản sắc riêng', 'Giống nhau hoàn toàn', 'Đồng nhất'], 1, '54 dân tộc đoàn kết, mỗi dân tộc giữ bản sắc riêng + chung văn hoá Việt.'),
  ]),

  M(20, 'Dân số và sự gia tăng dân số Việt Nam', [
    Q('Dân số Việt Nam khoảng (2023)?', ['100 triệu', '80 triệu', '110 triệu', '90 triệu'], 0, 'Dân số VN đạt mốc 100 triệu vào tháng 4/2023, đứng thứ 15 thế giới.'),
    Q('Đặc điểm dân số VN?', ['Đông dân, gia tăng còn nhanh, cơ cấu dân số trẻ đang chuyển sang già', 'Già hoá', 'Ít dân', 'Không tăng'], 0, 'Đông dân + gia tăng giảm dần + dân số đang già hoá (do tỉ suất sinh giảm).'),
    Q('Tỉ suất gia tăng dân số tự nhiên hiện nay khoảng?', ['1%', '3%', '2%', '0,9%'], 3, 'Tỉ suất gia tăng tự nhiên ~0,9-1%/năm, giảm so với 2-3% thập niên 80-90.'),
    Q('Hậu quả của gia tăng dân số nhanh trong quá khứ?', ['Phát triển kinh tế tốt', 'Áp lực việc làm, giáo dục, y tế, môi trường', 'Tăng GDP', 'Không có hậu quả'], 1, 'Gia tăng dân số nhanh tạo áp lực lên xã hội + môi trường.'),
    Q('Chính sách dân số của VN hiện nay?', ['Mỗi gia đình có từ 1-2 con, chú trọng chất lượng dân số', 'Cấm sinh', 'Khuyến khích nhiều con', 'Không quy định'], 0, 'Chính sách KHHGĐ: mỗi cặp vợ chồng 1-2 con; ưu tiên chất lượng dân số.'),
    Q('Cơ cấu dân số VN đang chuyển từ?', ['Cân bằng', 'Không đổi', 'Trẻ sang già hoá (do tuổi thọ tăng, tỉ suất sinh giảm)', 'Già sang trẻ'], 2, 'VN đã bước vào giai đoạn "già hoá dân số" từ 2011.'),
  ]),

  M(21, 'Phân bố dân cư và các loại hình quần cư', [
    Q('Mật độ dân số VN khoảng?', ['400 người/km²', '250 người/km²', '200 người/km²', '290-300 người/km²'], 3, 'Mật độ ~295 người/km² (2020), thuộc nhóm cao trên thế giới.'),
    Q('Vùng nào có mật độ dân số cao nhất VN?', ['Tây Nguyên', 'Đồng bằng sông Hồng', 'Tây Bắc', 'Đông Nam Bộ'], 1, 'ĐBSH ~1 100 người/km² — cao nhất; Đông Nam Bộ ~770 (đô thị hoá cao).'),
    Q('Vùng nào có mật độ thấp nhất?', ['Bắc Trung Bộ', 'Đông Nam Bộ', 'Đồng bằng sông Hồng', 'Tây Bắc và Tây Nguyên'], 3, 'Tây Bắc <100 người/km², Tây Nguyên ~110 người/km².'),
    Q('Dân cư VN tập trung ở?', ['Hải đảo', 'Đều khắp', 'Đồng bằng, ven biển và đô thị', 'Núi cao'], 2, 'Đồng bằng + ven biển chiếm ~75% dân số trên ~25% diện tích.'),
    Q('Quần cư nông thôn có đặc điểm?', ['Mật độ cao, công nghiệp', 'Cao tầng', 'Mật độ thấp, hoạt động chủ yếu là nông-lâm-ngư nghiệp', 'Đông đúc, dịch vụ'], 2, 'Quần cư nông thôn: làng xã, nhà thấp tầng, dân làm nông nghiệp.'),
    Q('Tỉ lệ dân thành thị VN (2023) khoảng?', ['38-40%', '50%', '20%', '30%'], 0, '~38-40% và đang tăng nhanh; xu thế đô thị hoá rõ rệt.'),
  ]),

  M(22, 'Lao động và việc làm', [
    Q('Lực lượng lao động VN khoảng?', ['40 triệu', '30 triệu', '70 triệu', '50 triệu'], 3, '~50 triệu người lao động (15 tuổi trở lên).'),
    Q('Đặc điểm nguồn lao động VN?', ['Khan hiếm', 'Già hoá, thiếu hụt lao động trẻ trầm trọng', 'Chỉ trí thức', 'Dồi dào, trẻ, cần cù, chi phí thấp; còn hạn chế về trình độ và tay nghề'], 3, 'Ưu thế số lượng + trẻ + cần cù; cần đào tạo nâng chất lượng.'),
    Q('Cơ cấu lao động VN đang chuyển dịch?', ['Từ công nghiệp sang nông nghiệp', 'Không đổi', 'Sang khai thác', 'Từ nông nghiệp sang công nghiệp và dịch vụ'], 3, 'Tỉ lệ LĐ nông nghiệp giảm từ 70% (1990) xuống ~28% (2023).'),
    Q('Vấn đề lớn về việc làm ở VN?', ['Không có vấn đề', 'Quá nhiều việc làm', 'Chỉ thiếu lao động', 'Thiếu việc làm bền vững, đặc biệt ở nông thôn và thanh niên'], 3, 'Tỉ lệ thất nghiệp + thiếu việc làm cao ở nông thôn và thanh niên.'),
    Q('Giải pháp giải quyết việc làm?', ['Cấm đi lại', 'Hạn chế việc làm', 'Đa dạng hoá ngành nghề, đào tạo nghề, xuất khẩu lao động, phát triển doanh nghiệp', 'Giảm dân số'], 2, 'Đa dạng hoá kinh tế + đào tạo + xuất khẩu LĐ + khởi nghiệp.'),
    Q('Chất lượng lao động VN cần?', ['Nâng cao trình độ chuyên môn, ngoại ngữ, tin học để hội nhập', 'Giảm trình độ', 'Không cần cải thiện', 'Chỉ học một nghề'], 0, 'Hội nhập đòi hỏi LĐ có trình độ + ngoại ngữ + kỹ năng mềm.'),
  ]),

  M(23, 'Sự phát triển kinh tế Việt Nam — Tổng quan', [
    Q('Cơ cấu kinh tế VN gồm 3 khu vực?', ['Bắc - Trung - Nam', 'CN nặng - CN nhẹ - Nông nghiệp', 'Thành thị - Nông thôn - Miền núi', 'Nông-lâm-ngư nghiệp; Công nghiệp-Xây dựng; Dịch vụ'], 3, '3 khu vực: I (Nông-lâm-ngư), II (Công nghiệp-Xây dựng), III (Dịch vụ).'),
    Q('Xu hướng chuyển dịch cơ cấu kinh tế VN?', ['Giảm tỉ trọng nông nghiệp, tăng công nghiệp và dịch vụ', 'Tăng nông nghiệp', 'Giảm dịch vụ', 'Không đổi'], 0, 'Theo hướng CNH-HĐH: giảm khu vực I, tăng khu vực II và III.'),
    Q('Năm 2023, GDP của Việt Nam khoảng?', ['200 tỷ USD', '300 tỷ USD', '600 tỷ USD', '430 tỷ USD'], 3, 'GDP 2023 ~430 tỷ USD, đứng thứ 35-37 thế giới.'),
    Q('Thành tựu nổi bật của kinh tế VN sau Đổi mới?', ['Khủng hoảng', 'Tăng trưởng cao và liên tục, hội nhập sâu rộng, thoát nghèo', 'Suy thoái', 'Cô lập'], 1, 'Tăng trưởng GDP bình quân 6-7%/năm, tỷ lệ nghèo giảm từ >60% xuống <5%.'),
    Q('Thách thức của kinh tế VN?', ['Phát triển quá nhanh', 'Thiếu lao động', 'Không có thách thức', 'Năng suất lao động thấp, công nghệ còn lạc hậu, ô nhiễm môi trường, già hoá dân số'], 3, 'Nhiều thách thức cần vượt qua để phát triển bền vững.'),
    Q('Định hướng phát triển?', ['Phát triển bền vững, kinh tế xanh, kinh tế số, đổi mới sáng tạo', 'Tự cung tự cấp', 'Phát triển nhanh bất chấp', 'Khai thác tài nguyên'], 0, 'Hướng tới phát triển bền vững + công nghệ cao + bảo vệ môi trường.'),
  ]),

  M(24, 'Ngành nông nghiệp Việt Nam', [
    Q('Nông nghiệp VN có vai trò?', ['Chỉ đóng góp dưới 5% GDP, vai trò mờ nhạt', 'Chỉ phục vụ trong nước', 'Đảm bảo an ninh lương thực, xuất khẩu lớn, tạo việc làm', 'Đang suy thoái'], 2, 'VN xuất khẩu nông sản hàng đầu thế giới (gạo, cà phê, hạt điều, tiêu, thuỷ sản…).'),
    Q('Cây lương thực chính của VN?', ['Khoai lang (cây lương thực phụ ở trung du)', 'Lúa', 'Sắn (cây lương thực phụ vùng đồi)', 'Ngô (cây lương thực phụ, đứng thứ hai)'], 1, 'Lúa là cây lương thực số 1, trồng khắp nước, đặc biệt ở 2 đồng bằng lớn.'),
    Q('VN đứng thứ mấy thế giới về xuất khẩu gạo?', ['5', '2', '3', '1'], 1, 'Hiện VN đứng thứ 2-3 thế giới về xuất khẩu gạo (sau Ấn Độ, cạnh tranh với Thái Lan).'),
    Q('Hai vùng trọng điểm lúa của VN?', ['Bắc Trung Bộ', 'ĐBSCL và ĐBSH', 'Đông Nam Bộ', 'Tây Nguyên'], 1, 'ĐBSCL: 50% sản lượng cả nước; ĐBSH: 15-20%; còn lại các vùng khác.'),
    Q('Vùng chuyên canh cây công nghiệp nổi tiếng?', ['Tây Bắc', 'Bắc Trung Bộ', 'Hải đảo', 'Tây Nguyên (cà phê), Đông Nam Bộ (cao su)'], 3, 'Tây Nguyên: cà phê (1 trong những vùng cà phê lớn nhất TG); ĐNB: cao su.'),
    Q('Ngành thuỷ sản VN phát triển ở?', ['Ven biển ĐBSCL, ven biển miền Trung và Đông Nam Bộ', 'Tây Bắc', 'Núi cao', 'Tây Nguyên'], 0, 'Thuỷ sản tập trung ven biển + ĐBSCL (cá tra, tôm); xuất khẩu hàng đầu.'),
  ]),

  M(25, 'Ngành công nghiệp Việt Nam', [
    Q('Ngành công nghiệp trọng điểm của VN?', ['Chỉ khai khoáng', 'Chỉ chế biến gỗ', 'Chỉ thủ công', 'Chế biến lương thực-thực phẩm, dệt may, điện tử, năng lượng, hoá chất, vật liệu xây dựng'], 3, 'Nhiều ngành CN trọng điểm tạo việc làm + xuất khẩu lớn.'),
    Q('Vùng công nghiệp trọng điểm phía Bắc?', ['Tây Bắc', 'Sông Hồng đơn lẻ', 'Bắc Trung Bộ', 'ĐBSH + Đông Bắc (Hà Nội, Hải Phòng, Quảng Ninh…)'], 3, 'Tam giác Hà Nội - Hải Phòng - Quảng Ninh là trung tâm CN phía Bắc.'),
    Q('Vùng công nghiệp trọng điểm phía Nam?', ['Đông Nam Bộ (TP.HCM, Bình Dương, Đồng Nai, BR-VT)', 'Đồng bằng sông Cửu Long (chuyên lúa gạo)', 'Trung Trung Bộ', 'Tây Nguyên'], 0, 'ĐNB là vùng CN phát triển nhất nước, dẫn đầu cả nước về giá trị sản xuất CN.'),
    Q('Vùng công nghiệp trọng điểm miền Trung?', ['Đà Nẵng, Quảng Nam, Quảng Ngãi, Khánh Hoà', 'Tây Nguyên', 'Tây Bắc', 'ĐBSCL (Cần Thơ, Long An, An Giang)'], 0, 'Tam giác Đà Nẵng - Dung Quất - Chu Lai là trung tâm CN miền Trung.'),
    Q('Ngành điện ở VN gồm các nguồn?', ['Chỉ hạt nhân', 'Chỉ nhiệt điện', 'Chỉ thuỷ điện', 'Thuỷ điện, nhiệt điện, năng lượng tái tạo, điện hạt nhân (dự kiến)'], 3, 'VN đa dạng nguồn: thuỷ điện ~30%, nhiệt điện than/khí ~50%, năng lượng tái tạo tăng nhanh.'),
    Q('Khu kinh tế ven biển có vai trò?', ['Chỉ phục vụ đánh bắt quy mô nhỏ ven bờ', 'Thu hút đầu tư FDI, phát triển công nghiệp - dịch vụ, kết nối logistics', 'Chỉ du lịch', 'Chỉ thuỷ sản'], 1, 'Khu kinh tế ven biển: Vũng Áng, Dung Quất, Nhơn Hội, Vân Phong, Phú Quốc…'),
  ]),

  M(26, 'Ngành dịch vụ — Giao thông vận tải, du lịch', [
    Q('Khu vực dịch vụ chiếm tỉ trọng?', ['10%', '90%', '20%', '~40-45% GDP và đang tăng'], 3, 'Dịch vụ ngày càng quan trọng, đặc biệt ở thành phố lớn.'),
    Q('Loại hình giao thông quan trọng nhất ở VN?', ['Đường hàng không', 'Đường biển', 'Đường sắt', 'Đường bộ'], 3, 'Đường bộ chiếm tỉ trọng lớn nhất về vận chuyển hàng hoá và hành khách trong nước.'),
    Q('Cảng biển lớn nhất VN?', ['Vinh (cảng cá nhỏ ở Nghệ An)', 'Quy Nhơn', 'Phan Thiết', 'Hải Phòng, Sài Gòn, Cái Mép - Thị Vải, Đà Nẵng'], 3, 'Cụm cảng Cái Mép - Thị Vải lớn nhất; cùng Hải Phòng + Sài Gòn là 3 cảng chính.'),
    Q('Sân bay quốc tế lớn nhất VN?', ['Cam Ranh', 'Tân Sơn Nhất (TP.HCM)', 'Đà Nẵng', 'Nội Bài (HN)'], 1, 'Tân Sơn Nhất ~40 triệu khách/năm (trước COVID); Nội Bài ~30 triệu.'),
    Q('Ngành du lịch VN phát triển dựa trên?', ['Di sản văn hoá-thiên nhiên, biển đảo, ẩm thực, sinh thái', 'Chỉ núi', 'Chỉ biển', 'Chỉ thành phố lớn'], 0, 'VN có nhiều di sản UNESCO + bờ biển dài 3 260 km + văn hoá phong phú.'),
    Q('Khu du lịch nổi tiếng của VN?', ['Hạ Long, Sapa, Huế, Đà Nẵng, Nha Trang, Đà Lạt, Phú Quốc…', 'Chỉ TP.HCM', 'Chỉ Hà Nội', 'VN ít điểm du lịch, khách quốc tế thưa thớt'], 0, 'Nhiều điểm đến nổi tiếng trải dài Bắc - Trung - Nam.'),
  ]),

  M(27, 'Vùng kinh tế Trung du và miền núi Bắc Bộ', [
    Q('Vùng Trung du và miền núi Bắc Bộ gồm 2 tiểu vùng?', ['Đông và Tây', 'Núi và đồi', 'Cao và thấp', 'Đông Bắc và Tây Bắc'], 3, 'Đông Bắc (rộng hơn) và Tây Bắc (hẹp, nhiều núi cao hơn).'),
    Q('Tài nguyên nổi bật của vùng?', ['Khoáng sản đa dạng (than, sắt, apatit…), thuỷ điện, lâm sản', 'Cao su', 'Lúa gạo', 'Dầu mỏ'], 0, 'Vùng giàu khoáng sản nhất nước + thuỷ năng lớn (sông Đà).'),
    Q('Nhà máy thuỷ điện lớn nhất của vùng và VN?', ['Sơn La', 'Hoà Bình', 'Lai Châu', 'Tuyên Quang'], 0, 'Thuỷ điện Sơn La (2 400 MW) lớn nhất Đông Nam Á khi khánh thành.'),
    Q('Cây công nghiệp đặc trưng của vùng?', ['Chè (Thái Nguyên, Phú Thọ, Lâm Đồng)', 'Cao su', 'Cà phê', 'Lúa (cây lương thực, không phải cây CN)'], 0, 'Chè là cây CN dài ngày nổi tiếng nhất của vùng, đặc biệt Thái Nguyên.'),
    Q('Khó khăn của vùng?', ['Không có khoáng sản', 'Khí hậu khắc nghiệt', 'Đất đai cằn cỗi hoàn toàn', 'Địa hình hiểm trở, giao thông khó khăn, dân cư thưa, trình độ phát triển thấp'], 3, 'Địa hình + cơ sở hạ tầng yếu + dân tộc thiểu số chưa được tiếp cận đầy đủ.'),
    Q('Tiềm năng phát triển du lịch của vùng?', ['Chỉ Hà Nội', 'Chỉ TP.HCM', 'Sapa, Mộc Châu, Cao Bằng, Hà Giang, Mai Châu…', 'Vùng núi cao nên không thể phát triển du lịch'], 2, 'Phong cảnh núi non hùng vĩ + văn hoá dân tộc đặc sắc.'),
  ]),

  M(28, 'Vùng kinh tế Đồng bằng sông Hồng', [
    Q('Vùng ĐBSH gồm các tỉnh thành?', ['5 tỉnh', '15 tỉnh', '10 tỉnh (Hà Nội, Hải Phòng, Vĩnh Phúc, Bắc Ninh, Hải Dương, Hưng Yên, Thái Bình, Nam Định, Hà Nam, Ninh Bình)', '20 tỉnh'], 2, 'ĐBSH có 10 tỉnh thành, là vùng có lịch sử văn hoá lâu đời nhất.'),
    Q('ĐBSH có vai trò?', ['Chỉ khai khoáng', 'Chỉ là vùng nông nghiệp', 'Trung tâm kinh tế - chính trị - văn hoá - khoa học của cả nước', 'Chủ yếu là vùng đệm bảo tồn, ít hoạt động kinh tế'], 2, 'ĐBSH là vùng kinh tế trọng điểm phía Bắc, có Hà Nội — thủ đô.'),
    Q('Đặc điểm dân cư ĐBSH?', ['Trung bình', 'Thưa thớt, mật độ dưới 200 người/km²', 'Già hoá nhanh nhất', 'Mật độ dân số rất cao (~1 100 người/km²) — cao nhất cả nước'], 3, 'ĐBSH có mật độ DS cao nhất nhưng diện tích chỉ ~4,5% cả nước.'),
    Q('Sản phẩm nông nghiệp chủ lực của ĐBSH?', ['Cà phê', 'Hồ tiêu', 'Cao su', 'Lúa gạo, thực phẩm (rau, thịt, trứng…)'], 3, 'ĐBSH thâm canh lúa nước + chăn nuôi gia súc, gia cầm phục vụ đô thị.'),
    Q('Khó khăn lớn nhất của ĐBSH?', ['Giao thông khó', 'Khí hậu xấu', 'Khoáng sản nghèo', 'Đất canh tác ít, dân số quá đông, ngập úng, ô nhiễm'], 3, 'Áp lực dân số + thiên tai (lụt) + môi trường là thách thức chính.'),
    Q('Vùng kinh tế trọng điểm Bắc Bộ gồm?', ['3 tỉnh', '10 tỉnh', '5 tỉnh', 'Hà Nội, Hải Phòng, Quảng Ninh, Hải Dương, Hưng Yên, Bắc Ninh, Vĩnh Phúc'], 3, '7 tỉnh thành tạo thành vùng kinh tế trọng điểm Bắc Bộ.'),
  ]),

  M(29, 'Vùng Bắc Trung Bộ và Duyên hải Nam Trung Bộ', [
    Q('Bắc Trung Bộ gồm các tỉnh?', ['10 tỉnh', 'Thanh Hoá, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Trị, Thừa Thiên Huế', '5 tỉnh', '3 tỉnh'], 1, '6 tỉnh từ Thanh Hoá đến Thừa Thiên Huế.'),
    Q('Đặc điểm địa hình BTB?', ['Chỉ núi', 'Hẹp ngang, núi - đồi - đồng bằng hẹp - biển', 'Chỉ biển', 'Đồng bằng rộng'], 1, 'Lát cắt từ tây sang đông: núi - đồi - đồng bằng - biển - hải đảo.'),
    Q('Duyên hải Nam Trung Bộ gồm?', ['3 tỉnh', '8 tỉnh từ Đà Nẵng đến Bình Thuận', '10 tỉnh', '5 tỉnh'], 1, 'Từ Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hoà, Ninh Thuận, Bình Thuận.'),
    Q('Thế mạnh kinh tế biển của 2 vùng?', ['Chỉ trồng cây công nghiệp dài ngày', 'Chỉ trồng trọt', 'Chỉ chăn nuôi', 'Đánh bắt thuỷ sản, du lịch biển, giao thông vận tải biển, năng lượng'], 3, 'Bờ biển dài + nhiều vịnh sâu ⇒ kinh tế biển đa dạng.'),
    Q('Khó khăn lớn nhất của BTB?', ['Đất cằn', 'Cả 3 đáp án', 'Thiên tai (bão lụt, hạn hán, gió Lào)', 'Khoáng sản nghèo'], 1, 'Cả 3 yếu tố đều khó khăn: thiên tai + tài nguyên hạn chế + đất canh tác ít.'),
    Q('Du lịch nổi tiếng vùng DHNTB?', ['Chỉ Hà Nội', 'Đà Nẵng, Hội An (di sản), Nha Trang, Mỹ Sơn…', 'Chỉ Sapa', 'Chủ yếu du lịch tâm linh, ít bãi biển'], 1, 'DHNTB có nhiều bãi biển đẹp + 2 di sản UNESCO (Hội An, Mỹ Sơn).'),
  ]),

  M(30, 'Vùng Tây Nguyên', [
    Q('Tây Nguyên gồm các tỉnh?', ['4 tỉnh', 'Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng', '3 tỉnh', '6 tỉnh'], 1, '5 tỉnh Tây Nguyên trên cao nguyên rộng lớn.'),
    Q('Đặc điểm địa hình Tây Nguyên?', ['Đồi thấp', 'Núi đá vôi', 'Đồng bằng', 'Các cao nguyên xếp tầng (cao nguyên bazan)'], 3, 'Hệ thống cao nguyên bazan với đất đỏ phong phú.'),
    Q('Cây công nghiệp số 1 Tây Nguyên?', ['Cà phê', 'Cao su', 'Hồ tiêu', 'Chè (chủ yếu ở trung du Bắc Bộ, không phải Tây Nguyên)'], 0, 'Tây Nguyên chiếm ~95% diện tích và sản lượng cà phê cả nước.'),
    Q('Việt Nam đứng thứ mấy thế giới về xuất khẩu cà phê?', ['2', '3', '5', '1'], 0, 'VN đứng thứ 2 thế giới (sau Brazil) về xuất khẩu cà phê, đặc biệt cà phê robusta.'),
    Q('Tiềm năng thuỷ điện Tây Nguyên?', ['Hạn chế do thiếu sông lớn chảy qua vùng', 'Lớn (nhiều sông từ cao nguyên đổ xuống)', 'Rất nhỏ', 'Chỉ điện gió'], 1, 'Hệ thống thuỷ điện Yali, Sê San, Sêrêpok… cung cấp điện cho cả nước.'),
    Q('Vấn đề cần quan tâm ở Tây Nguyên?', ['Không phát triển', 'Khai thác hết tài nguyên', 'Bảo vệ rừng, đất bazan; tôn trọng văn hoá đa dạng các dân tộc', 'Đô thị hoá tối đa'], 2, 'Phát triển bền vững + bảo vệ rừng + giữ gìn văn hoá cồng chiêng (di sản UNESCO).'),
  ]),

  M(31, 'Vùng Đông Nam Bộ', [
    Q('Đông Nam Bộ gồm các tỉnh thành?', ['TP.HCM, Đồng Nai, Bình Dương, BR-VT, Bình Phước, Tây Ninh', '4 tỉnh', '8 tỉnh', '3 tỉnh'], 0, '6 tỉnh thành — vùng kinh tế phát triển nhất nước.'),
    Q('Đông Nam Bộ là vùng?', ['Vùng miền núi', 'Phát triển kinh tế hàng đầu cả nước, đóng góp ~30-40% GDP', 'Vùng nghèo nhất', 'Vùng nông thôn'], 1, 'ĐNB đóng góp ~40% GDP, ~50% giá trị sản xuất công nghiệp, ~50% kim ngạch XK.'),
    Q('Trung tâm kinh tế lớn nhất ĐNB và cả nước?', ['TP.HCM', 'Vũng Tàu', 'Bình Dương', 'Biên Hoà'], 0, 'TP.HCM là siêu đô thị, đầu tàu kinh tế cả nước với ~9 triệu dân.'),
    Q('Tài nguyên đặc biệt của BR-VT?', ['Dầu khí (biển)', 'Sắt (mỏ chính ở Thái Nguyên - Hà Tĩnh)', 'Than đá', 'Apatit'], 0, 'Mỏ Bạch Hổ, Rồng… ở thềm lục địa BR-VT là nguồn dầu khí chính của VN.'),
    Q('Cây công nghiệp dài ngày chính của ĐNB?', ['Cao su', 'Cà phê', 'Chè (phù hợp khí hậu mát trung du Bắc Bộ)', 'Hồ tiêu'], 0, 'ĐNB là vùng cao su lớn nhất nước (Bình Dương, Bình Phước, Đồng Nai…).'),
    Q('Vùng kinh tế trọng điểm phía Nam có vai trò?', ['Chỉ NN', 'Đầu tàu kinh tế của cả nước, dẫn đầu về CN, dịch vụ, FDI', 'Chỉ đóng góp dưới 10% GDP cả nước', 'Chỉ DL'], 1, 'Vùng kinh tế trọng điểm phía Nam = TP.HCM + Đồng Nai + Bình Dương + BR-VT + Long An + Tiền Giang + Tây Ninh + Bình Phước.'),
  ]),

  M(32, 'Vùng Đồng bằng sông Cửu Long', [
    Q('ĐBSCL gồm bao nhiêu tỉnh thành?', ['11', '10', '12', '13'], 3, '13 tỉnh thành (Long An, Tiền Giang, Bến Tre, Trà Vinh, Vĩnh Long, Đồng Tháp, An Giang, Kiên Giang, Cần Thơ, Hậu Giang, Sóc Trăng, Bạc Liêu, Cà Mau).'),
    Q('ĐBSCL được mệnh danh?', ['Vựa than', 'Vựa lúa lớn nhất cả nước', 'Vựa khoáng sản', 'Vựa rừng'], 1, 'ĐBSCL chiếm ~50% sản lượng lúa và ~95% gạo xuất khẩu cả nước.'),
    Q('ĐBSCL còn nổi tiếng về?', ['Khoáng sản', 'Thuỷ sản (tôm, cá tra), cây ăn quả nhiệt đới', 'Rừng nguyên sinh', 'Khí hậu lạnh'], 1, 'ĐBSCL là vựa thuỷ sản (>50% sản lượng nước) + vùng cây ăn quả phong phú.'),
    Q('Thách thức lớn nhất của ĐBSCL hiện nay?', ['Đất đai cằn cỗi', 'Dân số ít', 'Biến đổi khí hậu, nước biển dâng, xâm nhập mặn, sụt lún', 'Khoáng sản cạn'], 2, 'BĐKH + nước biển dâng + xâm nhập mặn đang đe doạ nghiêm trọng vùng.'),
    Q('Sông chính của ĐBSCL?', ['Sông Đồng Nai', 'Sông Đà', 'Sông Hồng', 'Sông Cửu Long (hạ lưu Mekong), gồm 9 cửa sông đổ ra biển'], 3, 'Sông Mekong vào VN gọi là Cửu Long (9 cửa: Tiền Giang 6, Hậu Giang 3).'),
    Q('Cần Thơ là?', ['Không có vai trò', 'Tỉnh nhỏ', 'Huyện thuộc tỉnh Hậu Giang', 'Thành phố trung tâm của ĐBSCL'], 3, 'Cần Thơ là 1 trong 5 thành phố trực thuộc TW, đầu tàu kinh tế của ĐBSCL.'),
  ]),

  M(33, 'Biển đảo Việt Nam', [
    Q('Việt Nam có bờ biển dài?', ['3 260 km', '5 260 km', '4 260 km', '2 260 km'], 0, 'Bờ biển VN dài 3 260 km từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang).'),
    Q('Vùng biển VN bao gồm?', ['Chỉ ven bờ', 'Chỉ lãnh hải', 'Nội thuỷ, lãnh hải, vùng tiếp giáp lãnh hải, vùng đặc quyền kinh tế và thềm lục địa', 'Chỉ vùng đặc quyền kinh tế'], 2, 'Theo UNCLOS 1982 — VN có chủ quyền với các vùng biển này.'),
    Q('VN có 2 quần đảo lớn?', ['Cát Bà và Bạch Long Vĩ', 'Phú Quốc và Côn Đảo', 'Hoàng Sa và Trường Sa', 'Lý Sơn và Phú Quý'], 2, 'Hoàng Sa (Đà Nẵng), Trường Sa (Khánh Hoà) — chủ quyền không tranh cãi của VN.'),
    Q('Đảo nào lớn nhất Việt Nam?', ['Cát Bà', 'Lý Sơn', 'Côn Đảo', 'Phú Quốc'], 3, 'Phú Quốc (Kiên Giang) ~589 km² — đảo lớn nhất VN, là thành phố đảo.'),
    Q('Tài nguyên biển VN?', ['Chỉ du lịch', 'Chỉ có cát ven biển làm vật liệu xây dựng', 'Dầu khí, hải sản, du lịch, năng lượng tái tạo (gió, sóng)', 'Chỉ thuỷ sản'], 2, 'Biển VN giàu tài nguyên: dầu khí (BR-VT), thuỷ sản, vịnh đẹp, năng lượng.'),
    Q('Vai trò chiến lược của biển đảo?', ['Bảo vệ chủ quyền quốc gia, phát triển kinh tế biển, an ninh quốc phòng', 'Chỉ kinh tế', 'Chỉ quốc phòng', 'Chỉ có ý nghĩa về giao thông vận tải biển'], 0, 'Biển đảo có vai trò toàn diện: chủ quyền, kinh tế, an ninh, môi trường.'),
  ]),

  M(34, 'Hội nhập kinh tế quốc tế — Việt Nam và thế giới', [
    Q('Việt Nam là thành viên của các tổ chức quốc tế nào?', ['Chỉ WTO', 'Không tham gia', 'ASEAN, APEC, WTO, UN, ASEM, CPTPP, RCEP…', 'Chỉ ASEAN'], 2, 'VN tham gia tích cực nhiều tổ chức và hiệp định lớn.'),
    Q('FDI vào VN từ đâu nhiều nhất?', ['Chỉ Mỹ', 'Chỉ EU', 'Không có FDI', 'Hàn Quốc, Nhật Bản, Singapore, Trung Quốc, Đài Loan…'], 3, 'Top đầu tư FDI: Hàn (Samsung, LG), Nhật, Singapore… đa dạng nguồn vốn.'),
    Q('Mặt hàng xuất khẩu chủ lực của VN?', ['Khoáng sản thô', 'Chỉ gạo', 'Chỉ dầu mỏ', 'Điện thoại, dệt may, giày dép, nông sản, thuỷ sản, đồ gỗ'], 3, 'Cơ cấu xuất khẩu đa dạng, dẫn đầu là điện thoại + linh kiện (~20%).'),
    Q('Đối tác thương mại lớn nhất của VN?', ['Chỉ Trung Quốc', 'Chỉ EU', 'Mỹ và Trung Quốc', 'Chỉ Mỹ'], 2, 'TQ: đối tác lớn nhất (đặc biệt nhập khẩu); Mỹ: thị trường xuất khẩu lớn nhất.'),
    Q('Hiệp định CPTPP và EVFTA giúp VN?', ['Hạn chế xuất khẩu', 'Cô lập', 'Tăng nhập siêu', 'Mở rộng thị trường xuất khẩu vào các nước phát triển'], 3, 'CPTPP (11 nước) + EVFTA (EU) mở rộng thị trường, giảm thuế quan.'),
    Q('Thách thức của hội nhập?', ['Hoàn toàn có lợi', 'Tự cô lập', 'Cạnh tranh quốc tế gay gắt, năng lực doanh nghiệp còn hạn chế', 'Không có thách thức'], 2, 'Hội nhập = cơ hội + thách thức; cần nâng cao năng lực cạnh tranh.'),
  ]),

  M(35, 'Ôn tập học kỳ II — Tổng kết Địa lí', [
    Q('Việt Nam có bao nhiêu dân tộc?', ['58', '52', '56', '54'], 3, '54 dân tộc anh em.'),
    Q('Dân số VN năm 2023?', ['100 triệu', '90 triệu', '80 triệu', '110 triệu'], 0, '~100 triệu, đứng thứ 15 thế giới.'),
    Q('Vùng kinh tế trọng điểm phía Nam đứng đầu về?', ['Nông nghiệp', 'Khoáng sản', 'Thuỷ sản', 'GDP, FDI, công nghiệp, dịch vụ'], 3, 'ĐNB là vùng kinh tế phát triển nhất nước.'),
    Q('Bờ biển VN dài?', ['4 260 km', '1 260 km', '3 260 km', '2 260 km'], 2, '3 260 km từ Móng Cái đến Hà Tiên.'),
    Q('Hai quần đảo lớn của VN?', ['Lý Sơn và Côn Đảo', 'Hoàng Sa và Trường Sa', 'Bạch Long Vĩ và Vân Đồn', 'Cát Bà và Phú Quốc'], 1, 'Hoàng Sa và Trường Sa — chủ quyền của VN trên Biển Đông.'),
    Q('Đặc điểm chung của 7 vùng kinh tế VN?', ['Đều khai khoáng', 'Giống hệt nhau', 'Không có khác biệt', 'Phân hoá theo điều kiện tự nhiên, tài nguyên, lịch sử ⇒ thế mạnh khác nhau'], 3, '7 vùng kinh tế (TDMNBB, ĐBSH, BTB, DHNTB, TN, ĐNB, ĐBSCL) đa dạng thế mạnh.'),
  ]),
];

export const S9LSDL_SCENARIOS = indexBy(S9LSDL_WEEKS);
