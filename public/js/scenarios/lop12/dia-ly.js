// ============================================================
// Lớp 12 · ĐỊA LÍ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Kết nối tri thức) + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12DIA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12DIA', 'dia-ly', n, title, qs, opts);

export const H12DIA_WEEKS = [
  // ──────────────── HK1 — Địa lí tự nhiên & Dân cư ────────────────
  M(1, 'Vị trí địa lí và phạm vi lãnh thổ Việt Nam', [
    Q('Việt Nam nằm ở rìa phía?', ['Đông bán đảo Đông Dương, gần trung tâm Đông Nam Á', 'Tây bán đảo Đông Dương', 'Bắc Đông Á', 'Nam Trung Á'], 0, 'Đông bán đảo Đông Dương.'),
    Q('Hệ toạ độ địa lí phần đất liền VN khoảng?', ['5° - 30° Bắc', '8°34\'B - 23°23\'B; 102°09\'Đ - 109°24\'Đ', '90° - 100° Đông', '0° - 23° Bắc'], 1, 'Toạ độ phần đất liền.'),
    Q('Diện tích phần đất liền VN khoảng?', ['Khoảng 100 nghìn km²', 'Trên 500 nghìn km²', 'Khoảng 331 nghìn km²', '50 nghìn km²'], 2, '~331.212 km².'),
    Q('VN tiếp giáp các nước trên đất liền?', ['Chỉ Trung Quốc', 'Trung Quốc, Lào, Thái Lan', 'Lào, Campuchia, Thái Lan', 'Trung Quốc, Lào, Campuchia'], 3, '3 nước láng giềng trên đất liền.'),
    Q('VN có vùng biển rộng khoảng?', ['Khoảng 1 triệu km² (gấp ~3 lần diện tích đất liền)', '100 nghìn km²', '500 nghìn km²', '2 triệu km²'], 0, '~1 triệu km².'),
    Q('Ý nghĩa kinh tế của vị trí địa lí VN?', ['Bất lợi cho giao thương', 'Thuận lợi cho giao thương quốc tế, nằm trên ngã tư đường hàng hải và hàng không quốc tế', 'Cô lập', 'Khô hạn'], 1, 'Nằm trên tuyến giao thương quốc tế.'),
  ]),

  M(2, 'Thiên nhiên nhiệt đới ẩm gió mùa', [
    Q('Khí hậu VN có tính chất?', ['Ôn đới', 'Cận cực', 'Nhiệt đới ẩm gió mùa', 'Sa mạc'], 2, 'Nhiệt đới ẩm gió mùa - đặc trưng.'),
    Q('Nguyên nhân khí hậu VN mang tính nhiệt đới?', ['Vị trí ôn đới', 'Vĩ độ 0°', 'Vĩ độ cao', 'Vị trí trong vành đai nội chí tuyến Bắc bán cầu'], 3, 'Nội chí tuyến.'),
    Q('Tính ẩm cao thể hiện qua?', ['Lượng mưa và độ ẩm tương đối cao', 'Khô hạn', 'Tuyết rơi nhiều', 'Sương mù dày đặc quanh năm'], 0, 'Mưa nhiều, độ ẩm cao.'),
    Q('Gió mùa mùa đông ở miền Bắc do?', ['Cao áp Thái Bình Dương', 'Cao áp Siberia (gió Đông Bắc), thời tiết lạnh và khô (nửa đầu mùa đông) - lạnh ẩm (nửa cuối)', 'Áp thấp xích đạo', 'Không có gió'], 1, 'Gió mùa Đông Bắc.'),
    Q('Gió mùa mùa hạ chủ yếu thổi từ?', ['Đông Bắc', 'Bắc', 'Tây Nam (đầu mùa từ Bắc Ấn Độ Dương, giữa - cuối từ áp cao chí tuyến Nam bán cầu)', 'Đông'], 2, 'Gió mùa Tây Nam.'),
    Q('Đặc điểm địa hình do tác động của khí hậu nhiệt đới ẩm?', ['Đồng bằng phẳng', 'Băng tuyết', 'Sa mạc', 'Phong hoá mạnh, xâm thực mạnh ở miền núi, bồi tụ ở đồng bằng'], 3, 'Tropical landforms.'),
  ]),

  M(3, 'Sự phân hoá thiên nhiên', [
    Q('Thiên nhiên VN phân hoá theo các chiều?', ['Bắc - Nam, Đông - Tây, theo độ cao', 'Chỉ Bắc - Nam', 'Chỉ Đông - Tây', 'Chỉ theo độ cao'], 0, '3 chiều phân hoá.'),
    Q('Phân hoá Bắc - Nam thể hiện rõ ở?', ['Chỉ địa hình', 'Khí hậu (Bắc có 4 mùa rõ, Nam có 2 mùa mưa-khô; nhiệt độ tăng dần từ Bắc vào Nam)', 'Chỉ dân số', 'Không phân hoá'], 1, 'Bắc 4 mùa, Nam 2 mùa.'),
    Q('Ranh giới phân chia khí hậu Bắc - Nam chính là?', ['Đèo Cù Mông', 'Đèo Ngang', 'Đèo Hải Vân (gần dãy Bạch Mã)', 'Đèo Cả'], 2, 'Bạch Mã - Hải Vân.'),
    Q('Phân hoá Đông - Tây thể hiện?', ['Bằng nhau', 'Không có', 'Chỉ trên cao', 'Vùng biển, đồng bằng ven biển, vùng đồi núi (mỗi vùng có đặc trưng riêng)'], 3, 'Đông sang Tây: biển → đồng bằng → núi.'),
    Q('Phân hoá theo độ cao có 3 đai?', ['Nhiệt đới gió mùa, cận nhiệt đới gió mùa trên núi, ôn đới gió mùa trên núi', 'Sa mạc và xích đạo', 'Cực và ôn đới', 'Chỉ 1 đai'], 0, '3 đai cao.'),
    Q('Đai ôn đới gió mùa trên núi xuất hiện ở?', ['Đồng bằng', 'Núi cao trên 2600m (chủ yếu ở Hoàng Liên Sơn)', 'Ven biển', 'Trung du'], 1, 'Hoàng Liên Sơn > 2600m.'),
  ]),

  M(4, 'Thực hành về thiên nhiên VN', [
    Q('Khi đọc bản đồ khí hậu, ta chú ý các yếu tố?', ['Chỉ nhiệt độ', 'Chỉ mưa', 'Nhiệt độ, lượng mưa, gió, mùa khí hậu', 'Chỉ gió'], 2, '4 yếu tố khí hậu.'),
    Q('Vẽ biểu đồ khí hậu (nhiệt độ + lượng mưa) thường dùng dạng?', ['Tròn', 'Hình quạt', 'Đường thẳng', 'Cột (lượng mưa) kết hợp đường (nhiệt độ) - climograph'], 3, 'Biểu đồ kết hợp.'),
    Q('Phân tích biểu đồ khí hậu Hà Nội cho thấy?', ['Mùa đông lạnh có tháng dưới 18°C, mùa hạ nóng ẩm mưa nhiều', 'Khô hạn', 'Quanh năm nóng', 'Có tuyết'], 0, 'Khí hậu HN.'),
    Q('Khí hậu TP. Hồ Chí Minh có đặc điểm?', ['4 mùa rõ rệt', 'Nhiệt độ cao quanh năm (>25°C), có 2 mùa rõ: mưa và khô', 'Có tuyết', 'Mùa đông lạnh'], 1, 'Khí hậu Nam Bộ.'),
    Q('Vùng nào có lượng mưa lớn nhất nước ta?', ['Đồng bằng sông Hồng', 'Tây Nguyên', 'Một số vùng núi đón gió ẩm như Bắc Quang (Hà Giang), Huế-Thừa Thiên', 'Tây Bắc khô'], 2, 'Bắc Quang, Huế nhiều mưa.'),
    Q('Hiện tượng gió phơn (gió Lào) phổ biến ở?', ['Đồng bằng sông Cửu Long', 'Cao nguyên Nam Bộ', 'Đông Bắc', 'Bắc Trung Bộ (gió Tây khô nóng từ Lào sang)'], 3, 'Gió phơn Bắc Trung Bộ.'),
  ]),

  M(5, 'Sử dụng tài nguyên và bảo vệ môi trường', [
    Q('Tài nguyên thiên nhiên VN có đặc điểm?', ['Đa dạng nhưng đang bị suy thoái, cạn kiệt do khai thác quá mức', 'Phong phú nhưng không bị suy thoái', 'Vô hạn', 'Khan hiếm hoàn toàn'], 0, 'Đa dạng nhưng suy thoái.'),
    Q('Tài nguyên đất ở VN có vấn đề?', ['Mở rộng', 'Đất nông nghiệp giảm (chuyển sang đất phi nông nghiệp), đất bị thoái hoá, xói mòn', 'Tăng năng suất tự nhiên', 'Không vấn đề'], 1, 'Suy thoái đất.'),
    Q('Tài nguyên nước có vấn đề?', ['Vô tận', 'Không có nước', 'Ô nhiễm các sông và nguồn nước ngầm, phụ thuộc nguồn nước từ ngoài lãnh thổ', 'Hoàn toàn ổn định'], 2, 'Ô nhiễm và phụ thuộc.'),
    Q('Tài nguyên rừng ở VN?', ['Tăng cả về lượng và chất', 'Không thay đổi', 'Mất hết', 'Diện tích rừng có tăng nhưng chất lượng rừng suy giảm'], 3, 'Tăng lượng giảm chất.'),
    Q('Vấn đề ô nhiễm môi trường nổi cộm ở VN?', ['Ô nhiễm nước, không khí (đô thị), rác thải, suy thoái đất', 'Chỉ tiếng ồn', 'Chỉ ánh sáng', 'Không có ô nhiễm'], 0, 'Đa dạng ô nhiễm.'),
    Q('Biện pháp bảo vệ môi trường?', ['Khai thác triệt để', 'Sử dụng tài nguyên hợp lí, phát triển kinh tế xanh, nâng cao ý thức cộng đồng', 'Bỏ mặc', 'Phá rừng'], 1, 'Bảo vệ MT bền vững.'),
  ]),

  M(6, 'Dân số VN', [
    Q('Dân số VN năm 2023 khoảng?', ['Dưới 50 triệu', '200 triệu', 'Trên 100 triệu (đứng thứ 3 Đông Nam Á)', '50 triệu'], 2, '~100 triệu người.'),
    Q('Đặc điểm dân số VN?', ['Đông và trẻ', 'Ổn định', 'Già hoàn toàn', 'Đông dân, cơ cấu dân số đang chuyển từ trẻ sang già hoá'], 3, 'Đông + đang già hoá.'),
    Q('VN bước vào thời kì "cơ cấu dân số vàng" từ khoảng?', ['Năm 2007 và dự báo kết thúc khoảng 2040', 'Năm 2000', 'Năm 2020', 'Năm 1990'], 0, '2007 - cơ cấu vàng.'),
    Q('Cơ cấu dân số vàng là?', ['Người già nhiều', 'Tỉ lệ người trong độ tuổi lao động chiếm tỉ trọng cao (gấp đôi người phụ thuộc)', 'Trẻ em đa số', 'Không có ý nghĩa'], 1, 'Cơ cấu dân số thuận lợi.'),
    Q('Mật độ dân số VN cao tập trung ở?', ['Vùng núi cao', 'Tây Bắc', 'Đồng bằng sông Hồng và đồng bằng sông Cửu Long', 'Trường Sơn'], 2, '2 đồng bằng lớn.'),
    Q('Việt Nam có bao nhiêu dân tộc?', ['Khoảng 20', 'Chỉ 1', '100', '54 dân tộc anh em'], 3, '54 dân tộc.'),
  ]),

  M(7, 'Lao động và việc làm', [
    Q('Nguồn lao động VN có ưu điểm?', ['Đông, trẻ, cần cù, sáng tạo, dễ tiếp thu công nghệ mới', 'Già hoá nhanh', 'Lười biếng', 'Thiếu hụt'], 0, 'Ưu điểm lao động VN.'),
    Q('Hạn chế của lao động VN?', ['Không có', 'Năng suất chưa cao, tỉ lệ qua đào tạo còn thấp, cơ cấu chưa hợp lí', 'Quá nhiều', 'Quá già'], 1, 'Hạn chế chất lượng lao động.'),
    Q('Phân bố lao động không đều — chủ yếu tập trung?', ['Vùng núi', 'Tây Nguyên', 'Đồng bằng và đô thị (đông), miền núi và nông thôn (thưa hơn)', 'Trường Sơn'], 2, 'Tập trung đồng bằng.'),
    Q('Vấn đề việc làm ở VN?', ['Thiếu hụt nghiêm trọng việc làm', 'Không có vấn đề', 'Dư thừa việc làm', 'Sức ép việc làm lớn, thất nghiệp ở đô thị + thiếu việc làm ở nông thôn'], 3, 'Sức ép việc làm.'),
    Q('Hướng giải quyết việc làm?', ['Phát triển sản xuất, đào tạo nghề, xuất khẩu lao động, đa dạng hoá ngành nghề', 'Không có', 'Đóng cửa', 'Hạn chế lao động'], 0, 'Multi-strategy.'),
    Q('Xuất khẩu lao động VN tập trung tới các nước?', ['Châu Phi', 'Hàn Quốc, Nhật Bản, Đài Loan, các nước Trung Đông…', 'Nam Mỹ', 'Châu Đại Dương'], 1, 'Thị trường lao động chính.'),
  ]),

  M(8, 'Đô thị hoá', [
    Q('Đô thị hoá là?', ['Giảm dân thành thị', 'Phá đô thị', 'Quá trình kinh tế-xã hội phức tạp, biểu hiện ở sự gia tăng dân số đô thị, lan toả lối sống thành thị', 'Cô lập'], 2, 'Urbanization.'),
    Q('Tỉ lệ dân số thành thị VN có xu hướng?', ['Giảm', 'Bằng 100%', 'Không đổi', 'Tăng nhanh trong những năm gần đây'], 3, 'Tỉ lệ thành thị tăng.'),
    Q('Đặc điểm đô thị hoá VN?', ['Trình độ thấp so với khu vực, phân bố không đều, đô thị hoá tự phát ở nhiều nơi', 'Đồng đều cao', 'Phát triển vượt trội thế giới', 'Đồng đều'], 0, 'Trình độ đô thị hoá còn thấp.'),
    Q('Đô thị có quy mô lớn nhất VN?', ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'], 1, 'TP.HCM lớn nhất về dân số.'),
    Q('Hai đô thị đặc biệt của VN?', ['Hà Nội và Đà Nẵng', 'Hải Phòng và Cần Thơ', 'Hà Nội và TP. Hồ Chí Minh', 'Huế và Đà Nẵng'], 2, '2 đô thị đặc biệt.'),
    Q('Tác động của đô thị hoá?', ['Chỉ tiêu cực', 'Không tác động', 'Chỉ tích cực', 'Cả tích cực (kinh tế, văn hoá) và tiêu cực (sức ép hạ tầng, ô nhiễm, bất bình đẳng)'], 3, '2 mặt của đô thị hoá.'),
  ]),

  M(9, 'Thực hành về dân cư - lao động - đô thị hoá', [
    Q('Tháp dân số cho thấy?', ['Cơ cấu dân số theo tuổi và giới tính', 'Chỉ tổng số dân', 'Chỉ giới tính', 'Mật độ'], 0, 'Population pyramid.'),
    Q('Tháp dân số VN năm 2009 so với 1999?', ['Trẻ hoá', 'Có dấu hiệu già hoá (đáy hẹp lại, đỉnh rộng ra)', 'Không đổi', 'Mất cân đối hoàn toàn'], 1, 'Già hoá dân số.'),
    Q('Khi phân tích biểu đồ về thay đổi cơ cấu dân số nông thôn - thành thị nên dùng?', ['Biểu đồ tròn', 'Đường thẳng', 'Biểu đồ miền hoặc cột chồng theo thời gian', 'Hình quạt 3D'], 2, 'Biểu đồ miền hợp với cơ cấu.'),
    Q('Nguyên nhân lao động VN tập trung ở đồng bằng?', ['Khí hậu lạnh', 'Sa mạc', 'Núi cao', 'Đất đai thuận lợi, dân cư đông từ lâu, cơ sở hạ tầng phát triển'], 3, 'Điều kiện thuận lợi đồng bằng.'),
    Q('Để giảm sức ép việc làm cần?', ['Đa dạng hoá ngành nghề, đào tạo nghề, phát triển nông thôn, xuất khẩu lao động', 'Tăng sinh', 'Bỏ học', 'Cô lập'], 0, 'Giải pháp đa chiều.'),
    Q('Tốc độ đô thị hoá cao có thể gây ra?', ['Lợi ích duy nhất', 'Tắc nghẽn giao thông, ô nhiễm, thiếu nhà ở, áp lực việc làm tại đô thị', 'Không tác động', 'Đô thị nhỏ lại'], 1, 'Mặt trái đô thị hoá.'),
  ]),

  M(10, 'Chuyển dịch cơ cấu kinh tế VN', [
    Q('Cơ cấu kinh tế VN đang chuyển dịch theo hướng?', ['Tăng tỉ trọng nông nghiệp', 'Không đổi', 'Giảm tỉ trọng nông-lâm-thuỷ sản, tăng tỉ trọng công nghiệp - xây dựng và dịch vụ', 'Quay lại nông nghiệp'], 2, 'Công nghiệp hoá, hiện đại hoá.'),
    Q('Khu vực kinh tế có đóng góp lớn nhất vào GDP hiện nay?', ['Nông nghiệp', 'Khai khoáng', 'Lâm nghiệp', 'Dịch vụ'], 3, 'Dịch vụ chiếm tỉ trọng lớn nhất.'),
    Q('Cơ cấu thành phần kinh tế VN đa dạng gồm?', ['Kinh tế nhà nước, kinh tế tập thể, kinh tế tư nhân, kinh tế có vốn FDI', 'Chỉ quốc doanh', 'Chỉ tư nhân', 'Chỉ FDI'], 0, 'Đa thành phần kinh tế.'),
    Q('Cơ cấu lãnh thổ chuyển dịch theo?', ['Bằng phẳng', 'Hình thành các vùng kinh tế trọng điểm, khu công nghiệp, khu chế xuất', 'Cô lập vùng', 'Quay lại tự cấp'], 1, 'Phát triển vùng kinh tế.'),
    Q('Mục tiêu chuyển dịch cơ cấu kinh tế?', ['Quay lại nông nghiệp', 'Đóng cửa', 'Đẩy mạnh CNH-HĐH, hội nhập quốc tế, nâng cao năng suất và đời sống', 'Cô lập'], 2, 'CNH-HĐH.'),
    Q('Khó khăn trong chuyển dịch cơ cấu kinh tế?', ['Không có', 'Quá thuận lợi', 'Quá nhanh', 'Chất lượng nguồn nhân lực thấp, công nghệ lạc hậu, cơ sở hạ tầng chưa đồng bộ'], 3, 'Thách thức CNH-HĐH.'),
  ]),

  M(11, 'Nông nghiệp - Trồng trọt', [
    Q('Cây trồng chính của nông nghiệp VN?', ['Lúa gạo (cây lương thực số 1)', 'Cây cà phê duy nhất', 'Cây cao su', 'Cây cà chua'], 0, 'Lúa - cây lương thực chính.'),
    Q('VN là một trong những nước xuất khẩu hàng đầu thế giới về?', ['Lúa mì', 'Gạo, cà phê, hồ tiêu, hạt điều, cao su', 'Lúa mạch', 'Ngô'], 1, 'Nhiều mặt hàng nông sản xuất khẩu hàng đầu.'),
    Q('Đồng bằng sông Cửu Long là vùng trọng điểm sản xuất?', ['Lúa mì', 'Cao su', 'Lúa gạo lớn nhất cả nước, sản xuất hơn một nửa sản lượng cả nước', 'Chè'], 2, 'Vựa lúa lớn nhất.'),
    Q('Cây cao su trồng tập trung ở?', ['ĐB sông Hồng', 'ĐB sông Cửu Long', 'Tây Bắc', 'Đông Nam Bộ và Tây Nguyên'], 3, 'Cao su Đông Nam Bộ và TN.'),
    Q('Cây cà phê trồng nhiều nhất ở?', ['Tây Nguyên', 'ĐB sông Hồng', 'Đông Bắc', 'ĐB sông Cửu Long'], 0, 'Cà phê Tây Nguyên đứng đầu.'),
    Q('Cây chè trồng nhiều nhất ở vùng nào?', ['Tây Nguyên', 'Trung du và miền núi Bắc Bộ (Thái Nguyên, Phú Thọ)', 'Đồng bằng sông Cửu Long', 'Đông Nam Bộ'], 1, 'Chè TD-MNBB.'),
  ]),

  M(12, 'Nông nghiệp - Chăn nuôi và thuỷ sản', [
    Q('Chăn nuôi chiếm tỉ trọng?', ['Đa số trong nông nghiệp', 'Bằng 0', 'Có xu hướng tăng nhưng vẫn nhỏ hơn trồng trọt', 'Không đổi'], 2, 'Chăn nuôi đang tăng.'),
    Q('Đàn lợn nuôi nhiều nhất ở?', ['Tây Bắc', 'Tây Nguyên', 'Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng và Trung du miền núi Bắc Bộ'], 3, 'Lợn miền Bắc nhiều.'),
    Q('Đàn bò sữa nuôi nhiều ở?', ['Tây Nguyên (Mộc Châu, Lâm Đồng…)', 'Bắc Bộ', 'Đông Nam Bộ', 'ĐB sông Cửu Long'], 0, 'Bò sữa cao nguyên mát.'),
    Q('Đàn gia cầm phân bố chủ yếu ở?', ['Vùng núi cao', 'Đồng bằng (Bắc Bộ và Nam Bộ) - gần nguồn thức ăn và thị trường', 'Cao nguyên', 'Trường Sơn'], 1, 'Gia cầm đồng bằng.'),
    Q('Ngành thuỷ sản VN có ưu thế nhờ?', ['Khí hậu lạnh', 'Sa mạc rộng', 'Bờ biển dài, vùng biển rộng, nhiều ngư trường lớn, nhiều sông hồ đầm phá', 'Cao nguyên'], 2, 'Tiềm năng thuỷ sản.'),
    Q('Tỉnh có sản lượng thuỷ sản lớn?', ['Sơn La', 'Lai Châu', 'Hà Giang', 'Kiên Giang, Cà Mau, Bình Thuận, Bà Rịa-Vũng Tàu… (ven biển)'], 3, 'Tỉnh ven biển dẫn đầu.'),
  ]),

  M(13, 'Lâm nghiệp', [
    Q('Diện tích đất lâm nghiệp VN chiếm khoảng?', ['Phần lớn diện tích đất (rừng phòng hộ + rừng đặc dụng + rừng sản xuất)', '10%', '1%', 'Không có'], 0, 'Rừng chiếm tỉ lệ lớn.'),
    Q('3 loại rừng chính ở VN?', ['Nhiệt đới, ôn đới, sa mạc', 'Phòng hộ, đặc dụng, sản xuất', 'Lá rộng, lá kim, hỗn hợp', 'Già, trung niên, non'], 1, '3 loại theo chức năng.'),
    Q('Rừng phòng hộ có chức năng?', ['Khai thác gỗ', 'Du lịch', 'Bảo vệ nguồn nước, đất, chống xói mòn, hạn chế thiên tai', 'Trồng cao su'], 2, 'Rừng phòng hộ bảo vệ.'),
    Q('Vườn quốc gia thuộc loại rừng?', ['Sản xuất', 'Lúa nước', 'Phòng hộ', 'Rừng đặc dụng (bảo vệ đa dạng sinh học, nghiên cứu khoa học, du lịch)'], 3, 'Đặc dụng.'),
    Q('Vấn đề nóng của lâm nghiệp VN?', ['Suy giảm chất lượng rừng tự nhiên, cháy rừng, chặt phá rừng', 'Rừng tăng quá nhanh', 'Không có vấn đề', 'Rừng quá tốt'], 0, 'Suy thoái rừng tự nhiên.'),
    Q('Biện pháp bảo vệ rừng?', ['Đốt rừng', 'Trồng rừng, giao đất giao rừng, tăng cường giám sát, xử lí vi phạm, giáo dục cộng đồng', 'Phá rừng', 'Cô lập'], 1, 'Bảo vệ rừng đa chiều.'),
  ]),

  M(14, 'Công nghiệp - Cơ cấu ngành', [
    Q('Công nghiệp VN có cơ cấu ngành?', ['Đơn ngành', 'Chỉ khai thác', 'Đa dạng gồm nhiều ngành: chế biến, khai khoáng, điện-năng lượng, sản xuất và phân phối điện-nước', 'Chỉ chế biến'], 2, 'Đa ngành CN.'),
    Q('Ngành công nghiệp chiếm tỉ trọng lớn nhất trong cơ cấu công nghiệp VN?', ['Khai khoáng', 'Cấp nước', 'Sản xuất điện', 'Công nghiệp chế biến chế tạo'], 3, 'Chế biến chế tạo dẫn đầu.'),
    Q('Ngành dầu khí VN có vai trò?', ['Quan trọng, đóng góp lớn cho ngân sách và xuất khẩu', 'Không quan trọng', 'Suy thoái hoàn toàn', 'Mới hình thành'], 0, 'Dầu khí - ngành mũi nhọn.'),
    Q('Nguồn năng lượng tái tạo đang được đẩy mạnh phát triển ở VN?', ['Than đá', 'Thuỷ điện, điện gió, điện mặt trời', 'Hạt nhân duy nhất', 'Dầu khí'], 1, 'Năng lượng tái tạo.'),
    Q('Ngành dệt may có đặc điểm?', ['Thâm dụng vốn cao', 'Chỉ phục vụ nội địa', 'Thâm dụng lao động, kim ngạch xuất khẩu lớn', 'Không xuất khẩu'], 2, 'Dệt may - lao động.'),
    Q('VN xuất khẩu điện thoại - linh kiện điện tử nhờ?', ['Tự thiết kế hoàn toàn', 'Không xuất khẩu', 'Có công nghệ nguồn', 'Là điểm đến của nhiều tập đoàn FDI lớn (Samsung, LG, Intel…)'], 3, 'FDI điện tử lớn.'),
  ]),

  M(15, 'Công nghiệp - Phân bố lãnh thổ', [
    Q('Công nghiệp VN phân bố tập trung ở?', ['Đồng bằng và ven biển, đặc biệt các đô thị lớn và vùng KTTĐ', 'Cao nguyên', 'Tây Bắc', 'Núi cao'], 0, 'Đồng bằng và ven biển.'),
    Q('Trung tâm công nghiệp lớn nhất phía Bắc?', ['Hải Phòng', 'Hà Nội (cùng vùng kinh tế trọng điểm Bắc Bộ)', 'Hạ Long', 'Lào Cai'], 1, 'Hà Nội + vùng.'),
    Q('Trung tâm công nghiệp lớn nhất phía Nam?', ['Cần Thơ', 'Mỹ Tho', 'TP. Hồ Chí Minh và Đông Nam Bộ (Đồng Nai, Tây Ninh)', 'Sóc Trăng'], 2, 'TP.HCM + Đông Nam Bộ (sau 2025, Bình Dương và BR-VT đã thuộc TP.HCM).'),
    Q('Khu công nghiệp, khu chế xuất tập trung nhiều ở?', ['Cao nguyên đá', 'Trường Sơn', 'Tây Bắc', 'Vùng kinh tế trọng điểm phía Nam và Bắc'], 3, 'KCN tập trung ở các vùng KTTĐ.'),
    Q('Trung tâm công nghiệp miền Trung lớn nhất?', ['Đà Nẵng', 'Quy Nhơn', 'Quảng Ngãi', 'Huế'], 0, 'Đà Nẵng - trung tâm CN miền Trung.'),
    Q('Yếu tố quan trọng nhất quyết định sự phân bố công nghiệp?', ['Chỉ tài nguyên', 'Tổng hợp nhiều yếu tố: tài nguyên, lao động, thị trường, cơ sở hạ tầng, chính sách', 'Chỉ thị trường', 'Chỉ lao động'], 1, 'Đa yếu tố.'),
  ]),

  M(16, 'Một số ngành công nghiệp trọng điểm', [
    Q('Công nghiệp năng lượng gồm?', ['Chỉ điện', 'Chỉ than', 'Khai thác than, dầu khí, sản xuất điện (thuỷ điện, nhiệt điện, năng lượng tái tạo)', 'Chỉ dầu'], 2, 'CN năng lượng đa dạng.'),
    Q('Nhà máy thuỷ điện công suất lớn nhất VN?', ['Hoà Bình', 'Trị An', 'Ialy', 'Sơn La'], 3, 'Sơn La - lớn nhất.'),
    Q('Vùng khai thác than đá lớn nhất?', ['Quảng Ninh', 'Tây Nguyên', 'Lào Cai', 'Đồng bằng sông Cửu Long'], 0, 'Than Quảng Ninh.'),
    Q('Khai thác dầu khí tập trung ở?', ['Tây Bắc', 'Thềm lục địa phía Nam (bể Cửu Long, Nam Côn Sơn)', 'Đồng bằng Bắc Bộ', 'Tây Nguyên'], 1, 'Dầu khí thềm lục địa.'),
    Q('Công nghiệp chế biến lương thực - thực phẩm phát triển nhờ?', ['Khí hậu khắc nghiệt', 'Không có nguyên liệu', 'Nguồn nguyên liệu nông-thuỷ sản dồi dào, thị trường lớn', 'Lao động ít'], 2, 'Nguyên liệu nông sản phong phú.'),
    Q('Công nghiệp sản xuất hàng tiêu dùng (dệt may, da giày) là?', ['Đột phá công nghệ cao', 'Chỉ phục vụ nội địa', 'Không có ý nghĩa', 'Ngành thâm dụng lao động, xuất khẩu chủ lực'], 3, 'Dệt may, da giày.'),
  ]),

  M(17, 'Ôn tập học kì 1', [
    Q('VN nằm ở rìa phía nào của bán đảo Đông Dương?', ['Đông', 'Tây', 'Bắc', 'Nam'], 0, 'Rìa Đông bán đảo Đông Dương.'),
    Q('Khí hậu VN có tính chất chủ đạo?', ['Ôn đới', 'Nhiệt đới ẩm gió mùa', 'Cận cực', 'Sa mạc'], 1, 'Nhiệt đới ẩm gió mùa.'),
    Q('Cơ cấu dân số vàng VN dự kiến kết thúc khoảng?', ['2020', '2050', '2040', '2030'], 2, 'Khoảng 2040.'),
    Q('Đô thị có quy mô dân số lớn nhất VN?', ['Hà Nội', 'Hải Phòng', 'Đà Nẵng', 'TP. Hồ Chí Minh'], 3, 'TP.HCM lớn nhất.'),
    Q('Vùng nào là vựa lúa lớn nhất nước ta?', ['ĐB sông Cửu Long', 'ĐB sông Hồng', 'Bắc Trung Bộ', 'Tây Nguyên'], 0, 'ĐB sông Cửu Long.'),
    Q('Trung tâm công nghiệp lớn nhất miền Trung?', ['Quy Nhơn', 'Đà Nẵng', 'Huế', 'Vinh'], 1, 'Đà Nẵng.'),
  ]),

  M(18, 'Kiểm tra học kì 1', [
    Q('Đường bờ biển VN dài khoảng?', ['Khoảng 1.000 km', '5.000 km', 'Khoảng 3.260 km', '500 km'], 2, '~3.260 km bờ biển.'),
    Q('Gió mùa Tây Nam ở VN hoạt động vào?', ['Mùa đông', 'Mùa thu', 'Quanh năm', 'Mùa hạ (từ tháng 5 đến tháng 10)'], 3, 'Mùa hạ.'),
    Q('Cây cà phê VN xuất khẩu đứng thứ?', ['Hàng đầu thế giới (thường nằm trong nhóm dẫn đầu)', '1 thế giới', 'Cuối', 'Không xuất khẩu'], 0, 'VN cà phê hàng đầu thế giới.'),
    Q('Khu vực kinh tế chiếm tỉ trọng lớn nhất trong GDP VN hiện nay?', ['Nông-lâm-thuỷ sản', 'Dịch vụ', 'Công nghiệp', 'Khai khoáng'], 1, 'Dịch vụ dẫn đầu.'),
    Q('Đồng bằng sông Hồng có mật độ dân số?', ['Thấp', 'Trung bình', 'Cao nhất cả nước', 'Bằng 0'], 2, 'ĐBSH mật độ cao nhất.'),
    Q('Vùng động lực kinh tế phía Nam (Đông Nam Bộ) sau sáp nhập 2025 gồm?', ['Toàn miền Nam', 'Chỉ Cần Thơ', 'Chỉ TP.HCM', 'TP. Hồ Chí Minh, Đồng Nai, Tây Ninh'], 3, 'Sau sắp xếp: Bình Dương & BR-VT→TP.HCM, Bình Phước→Đồng Nai, Long An→Tây Ninh.'),
  ]),

  // ──────────────── HK2 — Dịch vụ + Vùng ────────────────
  M(19, 'Dịch vụ - Giao thông vận tải', [
    Q('Mạng lưới giao thông VN có đặc điểm?', ['Đa dạng: đường bộ, sắt, hàng không, sông, biển, đường ống', 'Đơn dạng', 'Chỉ đường bộ', 'Chỉ hàng không'], 0, 'GTVT đa dạng.'),
    Q('Loại hình giao thông phát triển nhanh nhất hiện nay?', ['Đường sắt', 'Hàng không và đường bộ cao tốc', 'Đường sông', 'Đường ống'], 1, 'Hàng không + cao tốc.'),
    Q('Tuyến đường bộ quan trọng nhất?', ['Đường ven biển', 'Đường biên giới', 'Quốc lộ 1A (xuyên Bắc - Nam) và đường Hồ Chí Minh', 'Đường vành đai 5'], 2, 'QL 1A + HCM.'),
    Q('Cảng biển lớn nhất miền Bắc?', ['Cẩm Phả', 'Nghi Sơn', 'Cái Lân', 'Hải Phòng'], 3, 'Hải Phòng - cảng lớn nhất MB.'),
    Q('Sân bay quốc tế lớn nhất VN về lượng khách?', ['Tân Sơn Nhất (TP.HCM)', 'Nội Bài', 'Đà Nẵng', 'Cam Ranh'], 0, 'Tân Sơn Nhất số 1.'),
    Q('Đường sắt Bắc - Nam (Thống Nhất) dài khoảng?', ['1.000 km', 'Khoảng 1.726 km, nối Hà Nội với TP.HCM', '500 km', '3.000 km'], 1, 'Đường sắt Thống Nhất.'),
  ]),

  M(20, 'Dịch vụ - Thông tin liên lạc và Bưu chính viễn thông', [
    Q('Bưu chính viễn thông VN phát triển?', ['Chậm', 'Không thay đổi', 'Nhanh chóng, mạng lưới phủ rộng, công nghệ hiện đại', 'Đã ngừng phát triển'], 2, 'BCVT tăng tốc.'),
    Q('Mạng di động VN hiện nay phổ biến công nghệ?', ['Chỉ 2G', 'Chưa có', 'Chỉ 3G', '4G phổ biến, 5G đang được triển khai'], 3, '4G + 5G.'),
    Q('Tỉ lệ người dùng internet VN?', ['Cao, chiếm tỉ lệ lớn dân số (>70%)', 'Rất thấp dưới 10%', 'Bằng 0', '10%'], 0, 'Internet phổ cập cao.'),
    Q('VN có vai trò?', ['Không quan trọng trong khu vực', 'Là một trong các nước có tốc độ tăng trưởng số người dùng internet, smartphone, thanh toán điện tử cao', 'Tụt hậu', 'Không tham gia số hoá'], 1, 'Tăng trưởng số nhanh.'),
    Q('Chuyển đổi số ở VN được đẩy mạnh nhằm?', ['Cô lập', 'Quay lại truyền thống', 'Phát triển kinh tế số, chính phủ số, xã hội số', 'Không có mục tiêu'], 2, 'Chuyển đổi số.'),
    Q('Ngành bưu chính chuyển dịch theo hướng?', ['Thư truyền thống', 'Quay lại điện báo', 'Đóng cửa', 'Logistics, thương mại điện tử, dịch vụ chuyển phát nhanh'], 3, 'BC chuyển sang logistics.'),
  ]),

  M(21, 'Dịch vụ - Thương mại', [
    Q('Thương mại VN gồm?', ['Nội thương và ngoại thương (xuất - nhập khẩu)', 'Chỉ nội thương', 'Chỉ ngoại thương', 'Chỉ chợ truyền thống'], 0, 'Nội + ngoại thương.'),
    Q('Cán cân thương mại VN trong nhiều năm gần đây?', ['Nhập siêu nặng', 'Có xu hướng xuất siêu (xuất nhiều hơn nhập)', 'Cân bằng tuyệt đối', 'Không có thương mại'], 1, 'Xuất siêu nhiều năm.'),
    Q('Đối tác thương mại lớn của VN?', ['Chỉ Lào', 'Chỉ Campuchia', 'Trung Quốc, Hoa Kỳ, Hàn Quốc, Nhật Bản, EU, ASEAN', 'Chỉ châu Phi'], 2, 'Đối tác đa dạng lớn.'),
    Q('Mặt hàng xuất khẩu chủ lực của VN?', ['Chỉ gạo', 'Chỉ than', 'Chỉ cao su', 'Điện thoại - linh kiện, máy tính, dệt may, da giày, nông-thuỷ sản'], 3, 'Đa dạng hàng xuất khẩu.'),
    Q('Mặt hàng nhập khẩu chính?', ['Máy móc thiết bị, nguyên liệu sản xuất, điện tử, hoá chất', 'Lương thực', 'Sản phẩm thủ công', 'Đồ chơi'], 0, 'Nhập máy móc + nguyên liệu.'),
    Q('Nội thương VN phát triển với?', ['Chỉ chợ', 'Hệ thống siêu thị, trung tâm thương mại, thương mại điện tử phát triển nhanh', 'Chỉ cửa hàng nhỏ', 'Không có'], 1, 'Bán lẻ đa kênh.'),
  ]),

  M(22, 'Dịch vụ - Du lịch', [
    Q('Du lịch VN có tiềm năng nhờ?', ['Khí hậu lạnh giá quanh năm', 'Sa mạc rộng', 'Tài nguyên du lịch tự nhiên (biển, núi, vịnh) và nhân văn (di sản, lễ hội) phong phú', 'Không có gì đặc biệt'], 2, 'Tiềm năng du lịch lớn.'),
    Q('Di sản nào của VN được UNESCO công nhận?', ['Chỉ một di sản', 'Đang chờ', 'Không có', 'Nhiều di sản: Vịnh Hạ Long, Phong Nha-Kẻ Bàng, Hội An, Mỹ Sơn, cố đô Huế, Thành nhà Hồ, Hoàng thành Thăng Long'], 3, 'Nhiều di sản UNESCO.'),
    Q('Du lịch biển nổi tiếng ở?', ['Nha Trang, Đà Nẵng, Phú Quốc, Hạ Long, Mũi Né…', 'Tây Bắc', 'Cao Bằng', 'Trường Sơn'], 0, 'Du lịch biển - ven biển.'),
    Q('Du lịch sinh thái phát triển ở?', ['Đô thị', 'Vườn quốc gia, khu bảo tồn (Phong Nha, Cát Tiên, U Minh, Cúc Phương…)', 'Khu công nghiệp', 'Sa mạc'], 1, 'VQG + KBT.'),
    Q('Vai trò của du lịch?', ['Không quan trọng', 'Chỉ giải trí', 'Ngành kinh tế quan trọng, góp phần phát triển kinh tế-xã hội, giao lưu văn hoá', 'Phá hoại môi trường'], 2, 'Du lịch - ngành kinh tế.'),
    Q('Thách thức của du lịch VN?', ['Không có', 'Quá hoàn hảo', 'Quá nhiều khách', 'Hạ tầng chưa đồng bộ, ô nhiễm môi trường, cạnh tranh khu vực, dịch bệnh'], 3, 'Thách thức du lịch.'),
  ]),

  M(23, 'Vùng Trung du và miền núi Bắc Bộ', [
    Q('Vùng Trung du và miền núi Bắc Bộ có vị trí?', ['Phía Bắc đất nước, tiếp giáp Trung Quốc và Lào', 'Giữa cả nước', 'Phía Nam', 'Đông Nam'], 0, 'Vùng cực Bắc.'),
    Q('Đặc điểm địa hình vùng TD-MNBB?', ['Đồng bằng phẳng', 'Đồi núi cao và hiểm trở nhất nước ta (Hoàng Liên Sơn, Đông Bắc)', 'Sa mạc', 'Biển'], 1, 'Đồi núi cao.'),
    Q('Khí hậu vùng có nét đặc trưng?', ['Quanh năm nóng', 'Khô hạn', 'Có một mùa đông lạnh nhất cả nước', 'Sa mạc'], 2, 'Mùa đông lạnh.'),
    Q('Cây công nghiệp lâu năm chủ lực vùng TD-MNBB?', ['Cao su', 'Hồ tiêu', 'Cà phê', 'Chè (cây chè chiếm phần lớn diện tích cả nước)'], 3, 'Chè - cây chủ lực.'),
    Q('Khoáng sản nổi bật của vùng?', ['Than đá (Quảng Ninh), sắt, apatit, đồng, thiếc - khoáng sản phong phú', 'Dầu khí', 'Bạc', 'Vàng'], 0, 'Than Quảng Ninh + nhiều khoáng sản.'),
    Q('Tiềm năng thuỷ điện vùng lớn nhờ?', ['Sông ngắn', 'Sông lớn, độ dốc cao (sông Đà, sông Lô, sông Gâm)', 'Khí hậu khô', 'Không có sông'], 1, 'Hệ thống sông lớn dốc.'),
  ]),

  M(24, 'Vùng Đồng bằng sông Hồng', [
    Q('Đồng bằng sông Hồng được bồi tụ bởi?', ['Sông Mê Kông', 'Sông Đà Rằng', 'Sông Hồng và sông Thái Bình', 'Sông Cửu Long'], 2, 'Sông Hồng + Thái Bình.'),
    Q('Đặc điểm dân số ĐBSH?', ['Thưa thớt', 'Bằng 0', 'Trung bình', 'Mật độ dân số cao nhất cả nước'], 3, 'Mật độ cao nhất.'),
    Q('ĐBSH có trung tâm chính trị - kinh tế?', ['Hà Nội (thủ đô)', 'TP.HCM', 'Đà Nẵng', 'Hải Phòng'], 0, 'Hà Nội - thủ đô.'),
    Q('Thế mạnh nông nghiệp ĐBSH?', ['Cao su', 'Lúa nước (cây lương thực), rau màu, chăn nuôi lợn-gia cầm', 'Cà phê', 'Cao nguyên hoa'], 1, 'Lúa và rau màu.'),
    Q('Công nghiệp ĐBSH phát triển ngành?', ['Chỉ nông nghiệp', 'Khai khoáng dầu khí', 'Cơ khí, điện tử, hoá chất, dệt may, chế biến lương thực', 'Cao su'], 2, 'CN đa ngành.'),
    Q('Khó khăn lớn nhất của ĐBSH?', ['Khí hậu sa mạc', 'Không có sông', 'Quá ít dân', 'Mật độ dân số quá cao gây sức ép việc làm, đất đai, môi trường'], 3, 'Sức ép dân số.'),
  ]),

  M(25, 'Vùng Bắc Trung Bộ', [
    Q('Bắc Trung Bộ kéo dài từ?', ['Thanh Hoá đến Huế', 'Quảng Ninh đến Quảng Bình', 'Quảng Trị đến Quảng Ngãi', 'Đà Nẵng đến Phan Thiết'], 0, 'Sau sáp nhập 2025: Thanh Hoá, Nghệ An, Hà Tĩnh, Quảng Trị (gộp Quảng Bình), Huế.'),
    Q('Địa hình BTB có đặc điểm?', ['Đồng bằng rộng', 'Hẹp ngang, có cả núi - đồi - đồng bằng - biển (4 dạng địa hình từ Tây sang Đông)', 'Sa mạc', 'Cao nguyên'], 1, 'Hẹp ngang đa dạng.'),
    Q('Khí hậu BTB có hiện tượng?', ['Tuyết rơi', 'Quanh năm ôn hoà', 'Gió phơn Tây Nam khô nóng (gió Lào), bão lụt nhiều', 'Sa mạc'], 2, 'Gió phơn + bão lũ.'),
    Q('BTB có thế mạnh nông nghiệp?', ['Cà phê', 'Chè', 'Cao su', 'Cây công nghiệp ngắn ngày, cây ăn quả, chăn nuôi, thuỷ sản ven biển'], 3, 'Đa dạng nông nghiệp.'),
    Q('BTB có khu kinh tế biển quan trọng?', ['Vũng Áng (Hà Tĩnh), Nghi Sơn (Thanh Hoá), Hòn La (Quảng Trị)…', 'Phú Mỹ', 'Dung Quất', 'Long Sơn'], 0, 'KCB ven biển BTB (Hòn La nay thuộc Quảng Trị, gộp từ Quảng Bình cũ).'),
    Q('Di sản UNESCO ở Bắc Trung Bộ?', ['Hội An', 'Quần thể di tích cố đô Huế, Phong Nha-Kẻ Bàng, Thành nhà Hồ', 'Hoàng thành Thăng Long', 'Vịnh Hạ Long'], 1, 'Huế + Phong Nha + Thành nhà Hồ.'),
  ]),

  M(26, 'Vùng Duyên hải Nam Trung Bộ', [
    Q('Duyên hải Nam Trung Bộ sau sáp nhập 2025 gồm?', ['Quảng Ninh - Hà Tĩnh', 'TP.HCM - Cà Mau', 'Đà Nẵng, Quảng Ngãi, Gia Lai, Khánh Hoà', 'Cao Bằng - Lạng Sơn'], 2, 'Quảng Nam→Đà Nẵng, Kon Tum→Quảng Ngãi, Bình Định→Gia Lai, Ninh Thuận→Khánh Hoà.'),
    Q('Khí hậu DHNTB có đặc điểm?', ['Mưa nhiều quanh năm', 'Sương mù', 'Quá lạnh', 'Khí hậu khô hạn nhất cả nước, mùa khô kéo dài (đặc biệt Ninh Thuận, Bình Thuận)'], 3, 'Khô hạn nhất.'),
    Q('DHNTB có tiềm năng?', ['Đánh bắt thuỷ sản, sản xuất muối, du lịch biển, điện gió, điện mặt trời', 'Lúa nước', 'Cà phê', 'Cao su'], 0, 'Tiềm năng đa dạng ven biển.'),
    Q('Các bãi biển du lịch nổi tiếng DHNTB?', ['Vịnh Hạ Long', 'Mỹ Khê (Đà Nẵng), Nha Trang, Mũi Né', 'Phú Quốc', 'Đảo Phú Quý'], 1, 'Bãi biển nổi tiếng.'),
    Q('Khu kinh tế Dung Quất nổi bật về?', ['Du lịch', 'Dệt may', 'Lọc dầu (nhà máy lọc dầu đầu tiên VN)', 'Thuỷ điện'], 2, 'Lọc dầu Dung Quất.'),
    Q('DHNTB phù hợp phát triển điện gió, điện mặt trời nhờ?', ['Quá ẩm', 'Mưa nhiều', 'Lạnh giá', 'Số giờ nắng cao + gió ven biển mạnh + bức xạ cao'], 3, 'ĐK năng lượng tái tạo tốt.'),
  ]),

  M(27, 'Phát triển kinh tế biển và bảo vệ chủ quyền biển đảo (DHNTB)', [
    Q('DHNTB có lợi thế biển?', ['Bờ biển dài, nhiều vũng vịnh sâu, ngư trường lớn (Hoàng Sa, Trường Sa - Khánh Hoà)', 'Không có biển', 'Chỉ có sông', 'Cao nguyên'], 0, 'Tiềm năng biển lớn.'),
    Q('Ngành kinh tế biển then chốt?', ['Lâm nghiệp núi cao', 'Đánh bắt - nuôi trồng thuỷ sản, du lịch, vận tải biển, dầu khí', 'Trồng cao su', 'Cà phê'], 1, 'Kinh tế biển đa ngành.'),
    Q('Quần đảo Trường Sa thuộc tỉnh nào quản lí?', ['Đà Nẵng', 'Quảng Ngãi', 'Khánh Hoà (huyện đảo Trường Sa)', 'Bình Thuận'], 2, 'Trường Sa - Khánh Hoà.'),
    Q('Quần đảo Hoàng Sa thuộc?', ['Khánh Hoà', 'Bình Định', 'Quảng Nam', 'TP. Đà Nẵng (huyện đảo Hoàng Sa)'], 3, 'Hoàng Sa - Đà Nẵng.'),
    Q('Việc bảo vệ chủ quyền biển đảo cần?', ['Củng cố lực lượng, đối thoại hoà bình, hợp tác phát triển, tôn trọng luật pháp quốc tế (UNCLOS 1982)', 'Để mặc', 'Đối đầu vũ trang', 'Đàm phán đầu hàng'], 0, 'Bảo vệ chủ quyền - hoà bình.'),
    Q('Cảng nước sâu quan trọng ở DHNTB?', ['Cảng Hải Phòng', 'Cảng Cam Ranh, Vân Phong, Quy Nhơn', 'Cảng Hòn Gai', 'Cảng Cát Lái'], 1, 'Cảng nước sâu DHNTB.'),
  ]),

  M(28, 'Vùng Tây Nguyên', [
    Q('Tây Nguyên sau sáp nhập 2025 gồm các tỉnh?', ['Lai Châu, Sơn La, Điện Biên', 'Quảng Trị, Quảng Ngãi', 'Đắk Lắk, Lâm Đồng', 'Khánh Hoà, Gia Lai'], 2, 'Tây Nguyên còn 2 tỉnh: Đắk Lắk (gộp Phú Yên), Lâm Đồng (gộp Đắk Nông, Bình Thuận). Kon Tum→Quảng Ngãi, Gia Lai về vùng DHMT.'),
    Q('Địa hình Tây Nguyên là?', ['Đồng bằng', 'Sa mạc', 'Núi cao trên 3000m', 'Các cao nguyên xếp tầng (Kon Tum, Pleiku, Đắk Lắk, Lâm Viên, Di Linh)'], 3, 'Cao nguyên xếp tầng.'),
    Q('Khí hậu Tây Nguyên có?', ['Hai mùa rõ rệt: mùa mưa và mùa khô', '4 mùa', 'Sa mạc', 'Băng tuyết'], 0, '2 mùa mưa-khô.'),
    Q('Tây Nguyên có thế mạnh trồng?', ['Lúa nước', 'Cây công nghiệp lâu năm: cà phê (lớn nhất cả nước), cao su, hồ tiêu, chè, ca cao', 'Cây ăn quả nhiệt đới', 'Lúa mì'], 1, 'Cây CN lâu năm.'),
    Q('Vấn đề quan trọng của Tây Nguyên?', ['Quá thuận lợi', 'Không có vấn đề', 'Suy thoái rừng, xói mòn đất, thiếu nước mùa khô, dân tộc thiểu số đa dạng cần chính sách phù hợp', 'Quá hoàn hảo'], 2, 'Thách thức TN.'),
    Q('Tây Nguyên có tiềm năng năng lượng?', ['Không có', 'Than đá', 'Hạt nhân', 'Thuỷ điện (sông Sê San, Sêrêpôk) và điện gió, điện mặt trời'], 3, 'Thuỷ điện + năng lượng tái tạo.'),
  ]),

  M(29, 'Vùng Đông Nam Bộ', [
    Q('Đông Nam Bộ là vùng?', ['Có nền kinh tế phát triển năng động nhất cả nước, GDP đầu người cao', 'Nông nghiệp truyền thống', 'Khó khăn nhất', 'Mới phát triển'], 0, 'ĐNB phát triển nhất.'),
    Q('Trung tâm kinh tế của ĐNB?', ['Cần Thơ', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'], 1, 'TP.HCM dẫn đầu.'),
    Q('Cây trồng quan trọng nhất ĐNB?', ['Lúa nước', 'Chè', 'Cao su (lớn nhất cả nước), cà phê, tiêu, điều, cây ăn quả', 'Lúa mì'], 2, 'Cao su số 1.'),
    Q('Ngành công nghiệp ĐNB tập trung?', ['Khai thác than', 'Không có', 'Chỉ thủ công', 'Chế biến chế tạo, dầu khí, điện tử, dệt may, hoá chất, sản xuất xe…'], 3, 'CN đa dạng phát triển mạnh.'),
    Q('Dầu khí ĐNB tập trung ở?', ['Thềm lục địa phía Nam (bể Cửu Long, Nam Côn Sơn)', 'Trên đất liền', 'Sa mạc', 'Núi cao'], 0, 'Thềm lục địa.'),
    Q('Vùng kinh tế trọng điểm phía Nam có vai trò?', ['Không quan trọng', 'Đầu tàu kinh tế cả nước, đóng góp lớn nhất vào GDP, ngân sách, xuất khẩu', 'Suy thoái', 'Trung bình'], 1, 'Đầu tàu kinh tế.'),
  ]),

  M(30, 'Vùng Đồng bằng sông Cửu Long', [
    Q('ĐB sông Cửu Long được bồi tụ bởi?', ['Sông Hồng', 'Sông Đồng Nai', 'Sông Cửu Long (sông Mê Kông) - đoạn cuối ở VN', 'Sông Đà Rằng'], 2, 'Sông Mê Kông.'),
    Q('ĐBSCL có địa hình?', ['Núi cao', 'Sa mạc', 'Cao nguyên', 'Thấp và bằng phẳng, có nhiều kênh rạch, vùng ngập nước'], 3, 'Thấp, bằng phẳng.'),
    Q('Vai trò nông nghiệp của ĐBSCL?', ['Vựa lúa và vựa trái cây lớn nhất, trung tâm thuỷ sản hàng đầu cả nước', 'Không quan trọng', 'Trồng chè', 'Cao su'], 0, 'Vựa lúa và trái cây + thuỷ sản.'),
    Q('Sản lượng lúa ĐBSCL chiếm khoảng?', ['10%', 'Hơn một nửa sản lượng lúa cả nước', '5%', '100%'], 1, 'Hơn 50% sản lượng lúa.'),
    Q('Cây ăn quả nổi tiếng ĐBSCL?', ['Vải Lục Ngạn', 'Mận Bắc Hà', 'Xoài, sầu riêng, chôm chôm, bưởi, dừa, thanh long', 'Hồng Đà Lạt'], 2, 'Cây ăn quả nhiệt đới.'),
    Q('Trung tâm vùng ĐBSCL?', ['Sóc Trăng', 'Cà Mau', 'Long Xuyên', 'Cần Thơ (thành phố trực thuộc trung ương)'], 3, 'Cần Thơ trung tâm.'),
  ]),

  M(31, 'Thách thức và phát triển bền vững ĐB sông Cửu Long', [
    Q('Thách thức lớn nhất với ĐBSCL hiện nay?', ['Biến đổi khí hậu - nước biển dâng, xâm nhập mặn, sạt lở bờ sông bờ biển', 'Lũ quét', 'Tuyết rơi', 'Sa mạc hoá'], 0, 'BĐKH + xâm nhập mặn.'),
    Q('Nguyên nhân xâm nhập mặn gia tăng ở ĐBSCL?', ['Mưa quá nhiều', 'Nước biển dâng, lưu lượng sông Mê Kông giảm do thuỷ điện thượng nguồn, khai thác cát', 'Khí hậu lạnh', 'Đất nhiều'], 1, 'Đa nguyên nhân.'),
    Q('Sạt lở bờ sông bờ biển ở ĐBSCL do?', ['Quá nhiều phù sa', 'Khô hạn', 'Thiếu phù sa từ thượng nguồn (do thuỷ điện), khai thác cát bừa bãi, biến đổi khí hậu', 'Mưa ít'], 2, 'Sạt lở do thiếu phù sa.'),
    Q('Giải pháp thích ứng BĐKH cho ĐBSCL?', ['Bỏ vùng', 'Tăng khai thác cát', 'Phá rừng ngập mặn', 'Chuyển đổi mô hình canh tác (lúa-tôm, lúa-cá), trồng cây chịu mặn, xây dựng hệ thống cấp nước'], 3, 'Thích ứng thuận thiên.'),
    Q('Nghị quyết 120/NQ-CP (2017) về?', ['Phát triển bền vững ĐBSCL thích ứng với biến đổi khí hậu', 'Quy hoạch đô thị', 'Du lịch', 'Giao thông'], 0, 'NQ 120 cho ĐBSCL.'),
    Q('Hợp tác quốc tế cho ĐBSCL bao gồm?', ['Đối đầu', 'Hợp tác Mê Kông - các nước (Lào, Campuchia, Thái, Trung Quốc) trong quản lí nguồn nước', 'Cô lập', 'Đóng cửa'], 1, 'Hợp tác Mê Kông.'),
  ]),

  M(32, 'Các vùng kinh tế trọng điểm', [
    Q('Vùng kinh tế trọng điểm (KTTĐ) là?', ['Vùng nông nghiệp', 'Vùng khó khăn', 'Vùng hội tụ đầy đủ các thế mạnh, tập trung tiềm lực kinh tế và hấp dẫn các nhà đầu tư', 'Vùng cô lập'], 2, 'Vùng KTTĐ - đầu tàu.'),
    Q('VN có mấy vùng kinh tế trọng điểm?', ['1', '0', '10', '4 vùng (Bắc Bộ, miền Trung, phía Nam, ĐBSCL)'], 3, '4 vùng KTTĐ.'),
    Q('Vùng động lực kinh tế Bắc Bộ (sau sáp nhập 2025) gồm các tỉnh, thành chính?', ['Hà Nội, Hải Phòng, Quảng Ninh, Bắc Ninh, Hưng Yên', 'Cao Bằng - Lạng Sơn', 'Lai Châu - Điện Biên', 'Hà Giang - Cao Bằng'], 0, 'Hải Dương nay thuộc Hải Phòng, Vĩnh Phúc thuộc Phú Thọ; vùng động lực phía Bắc còn Hà Nội, Hải Phòng, Quảng Ninh, Bắc Ninh, Hưng Yên.'),
    Q('Vùng KTTĐ phía Nam dẫn đầu cả nước về?', ['Khai khoáng', 'Tổng GDP, xuất khẩu, thu hút FDI', 'Lâm nghiệp', 'Cao su'], 1, 'Vùng KTTĐ Nam - đầu tàu.'),
    Q('Vùng động lực kinh tế miền Trung (sau sáp nhập 2025) gồm?', ['Tất cả miền Trung', 'Chỉ Đà Nẵng', 'Huế, Đà Nẵng, Quảng Ngãi, Gia Lai', 'Chỉ Huế'], 2, 'Sau sắp xếp: Quảng Nam→Đà Nẵng, Bình Định→Gia Lai; vùng động lực miền Trung gồm Huế, Đà Nẵng, Quảng Ngãi, Gia Lai.'),
    Q('Vai trò của các vùng KTTĐ?', ['Cô lập', 'Bị hỗ trợ', 'Phụ thuộc', 'Đầu tàu kinh tế, dẫn dắt và lan toả phát triển cho các vùng khác'], 3, 'Lan toả phát triển.'),
  ]),

  M(33, 'Phát triển kinh tế biển - Tổng quát', [
    Q('VN có biển rộng và bờ biển dài, biển VN là một phần của?', ['Biển Đông (một phần của Thái Bình Dương)', 'Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'], 0, 'Biển Đông.'),
    Q('Tiềm năng kinh tế biển VN gồm?', ['Chỉ đánh bắt', 'Thuỷ sản, du lịch, dầu khí, vận tải biển - cảng biển, năng lượng tái tạo (điện gió ngoài khơi)', 'Chỉ vận tải', 'Chỉ dầu khí'], 1, 'Đa ngành kinh tế biển.'),
    Q('Chiến lược phát triển kinh tế biển VN nhằm?', ['Khai thác cạn kiệt', 'Bỏ biển', 'Đưa VN trở thành quốc gia mạnh về biển, làm giàu từ biển trên nền tảng bền vững', 'Cô lập biển'], 2, 'Chiến lược biển bền vững.'),
    Q('Hệ thống đảo và quần đảo VN gồm?', ['Chỉ một đảo', '5 đảo', 'Không có đảo', 'Hàng nghìn đảo, trong đó có 2 quần đảo lớn: Hoàng Sa, Trường Sa'], 3, 'Hệ thống đảo phong phú.'),
    Q('Phát triển kinh tế biển phải gắn với?', ['Bảo vệ môi trường biển, bảo vệ chủ quyền và an ninh biển đảo', 'Khai thác triệt để', 'Cô lập', 'Đối đầu'], 0, 'Phát triển + bảo vệ chủ quyền.'),
    Q('Khu kinh tế ven biển có vai trò?', ['Không quan trọng', 'Đầu mối liên kết kinh tế biển với kinh tế đất liền, thu hút đầu tư', 'Phá hoại', 'Cô lập'], 1, 'KKT ven biển - kết nối.'),
  ]),

  M(34, 'Bảo vệ chủ quyền biển đảo và hợp tác quốc tế', [
    Q('VN khẳng định chủ quyền với Hoàng Sa và Trường Sa dựa trên?', ['Mới đây', 'Không có cơ sở', 'Bằng chứng lịch sử lâu đời (bản đồ, tư liệu thời Nguyễn và trước đó) và cơ sở pháp lý quốc tế', 'Tuyên bố đơn phương'], 2, 'Lịch sử + pháp lý.'),
    Q('UNCLOS 1982 là?', ['Hiệp định song phương', 'Không liên quan biển', 'Hiệp định du lịch', 'Công ước Liên hợp quốc về Luật biển - khung pháp lý quốc tế về biển'], 3, 'UNCLOS - khung pháp lý.'),
    Q('VN giải quyết tranh chấp biển Đông theo nguyên tắc?', ['Hoà bình, trên cơ sở luật pháp quốc tế (đặc biệt UNCLOS 1982), đối thoại', 'Sử dụng vũ lực', 'Đối đầu', 'Cô lập'], 0, 'Giải quyết hoà bình.'),
    Q('ASEAN và Trung Quốc đang đàm phán?', ['Tuyên bố chiến tranh', 'Bộ Quy tắc ứng xử ở Biển Đông (COC)', 'Liên minh quân sự', 'Bỏ Biển Đông'], 1, 'COC đang đàm phán.'),
    Q('Người dân VN có thể góp phần bảo vệ chủ quyền biển đảo bằng?', ['Bỏ mặc', 'Đối đầu', 'Hiểu biết và lan toả thông tin đúng, tham gia phát triển kinh tế biển, ủng hộ ngư dân bám biển', 'Bỏ biển'], 2, 'Vai trò công dân.'),
    Q('Hợp tác quốc tế về biển bao gồm?', ['Cô lập', 'Đóng cửa', 'Không hợp tác', 'Nghiên cứu khoa học biển, ứng phó BĐKH, bảo vệ tài nguyên biển, an ninh hàng hải'], 3, 'Hợp tác đa lĩnh vực.'),
  ]),

  M(35, 'Tổng ôn - chuẩn bị thi tốt nghiệp THPT', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Địa lí?', ['40 câu trắc nghiệm, 50 phút, có sử dụng Atlat Địa lí VN', 'Tự luận', '60 câu', 'Vấn đáp'], 0, '40 TN, 50 phút + Atlat.'),
    Q('Atlat Địa lí VN là?', ['Cấm sử dụng', 'Tài liệu được phép sử dụng khi thi (Atlat Địa lí VN do NXB Giáo dục phát hành)', 'Sách giáo khoa', 'Tài liệu bí mật'], 1, 'Atlat được dùng khi thi.'),
    Q('Kĩ năng khi đọc Atlat?', ['Đọc lướt', 'Bỏ qua chú giải', 'Xác định trang, đọc chú giải, nhận dạng kí hiệu - màu sắc - đường nét, liên hệ với câu hỏi', 'Đoán'], 2, 'Kĩ năng đọc Atlat.'),
    Q('Vùng có cơ cấu sản xuất nông nghiệp đa dạng nhất?', ['Tây Bắc', 'Vùng cực bắc', 'Trường Sơn', 'Đồng bằng sông Cửu Long'], 3, 'ĐBSCL đa dạng nhất.'),
    Q('Hai trung tâm kinh tế lớn nhất VN?', ['Hà Nội và TP. Hồ Chí Minh', 'Hà Nội và Đà Nẵng', 'Hải Phòng và Cần Thơ', 'Huế và Đà Nẵng'], 0, 'Hà Nội và TP.HCM.'),
    Q('Lời khuyên khi làm bài Địa lí?', ['Đoán', 'Đọc kĩ câu hỏi, dùng Atlat hợp lí, phân biệt câu lí thuyết và câu biểu đồ, quản lí thời gian', 'Học thuộc lòng', 'Bỏ Atlat'], 1, 'Kĩ năng thi Địa.'),
  ]),
];

export const H12DIA_SCENARIOS = indexBy(H12DIA_WEEKS);
