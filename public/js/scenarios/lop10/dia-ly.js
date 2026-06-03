// ============================================================
// Lớp 10 · ĐỊA LÝ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Địa 10: Địa lý tự nhiên đại cương — Địa lý dân cư - kinh tế - xã hội đại cương).
// ID prefix: "H10DIA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10DIA', 'dia-ly', n, title, qs, opts);

export const H10DIA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Môn Địa lý với định hướng nghề', [
    Q('Địa lý nghiên cứu về?', ['Tâm lý', 'Cấu tạo nguyên tử và phản ứng hoá học', 'Văn học', 'Trái Đất và mối quan hệ con người - môi trường'], 3, 'Địa lý nghiên cứu Trái Đất, tự nhiên và mối quan hệ con người - tự nhiên - kinh tế xã hội.'),
    Q('Địa lý chia thành 2 nhánh lớn?', ['Tự nhiên và Kinh tế - Xã hội', 'Vật lý và hoá học', 'Đông và Tây', 'Cổ và mới'], 0, 'Địa lý tự nhiên và địa lý kinh tế - xã hội là 2 nhánh chính.'),
    Q('Nghề nghiệp liên quan đến địa lý?', ['Kế toán', 'Bác sĩ', 'Bản đồ học, quy hoạch, khí tượng, du lịch...', 'Luật sư'], 2, 'Địa lý mở ra nghề: bản đồ, GIS, khí tượng, quy hoạch, du lịch, môi trường.'),
    Q('Phương pháp nghiên cứu địa lý cơ bản?', ['Chỉ thí nghiệm', 'Chỉ đọc sách', 'Hỏi đáp', 'Bản đồ, thực địa, GIS, viễn thám'], 3, 'Bản đồ, thực địa, GIS, viễn thám là phương pháp chính.'),
    Q('GIS viết tắt là?', ['General Index Software', 'Geographic Information System', 'Geological Industrial Standard', 'Global Internet Service'], 1, 'GIS = Hệ thông tin địa lý — công cụ quản lý dữ liệu không gian.'),
    Q('Tỉ lệ bản đồ 1:1.000.000 nghĩa là?', ['1cm trên bản đồ = 1.000.000 cm thực địa = 10 km', '1cm = 1km', '1cm = 1m', '1cm = 100m'], 0, '1cm bản đồ ↔ 1.000.000 cm thực = 10 km.'),
  ]),

  M(2, 'Trái Đất trong vũ trụ', [
    Q('Hệ Mặt Trời nằm trong?', ['Dải Andromeda', 'Thiên hà M87', 'Thiên hà Ngân Hà', 'Magellan'], 2, 'Hệ Mặt Trời nằm trong thiên hà Ngân Hà (Milky Way).'),
    Q('Hệ Mặt Trời có?', ['9 hành tinh', '8 hành tinh', '10 hành tinh', '7 hành tinh'], 1, 'Sau khi Pluto bị loại (2006), hệ Mặt Trời có 8 hành tinh.'),
    Q('Trái Đất là hành tinh thứ mấy tính từ Mặt Trời?', ['Thứ 1 (gần Mặt Trời nhất, trước Kim Tinh)', 'Thứ 8 (xa nhất, ngoài Hải Vương)', 'Thứ 3', 'Thứ 5 (ngay sau Hoả Tinh)'], 2, 'Thứ tự: Thuỷ - Kim - Trái Đất - Hoả - Mộc - Thổ - Thiên Vương - Hải Vương.'),
    Q('Khoảng cách Trái Đất - Mặt Trời trung bình?', ['1 triệu km', '1 tỷ km', '1.000 km', '~150 triệu km (1 AU)'], 3, 'Khoảng cách trung bình ~149,6 triệu km = 1 đơn vị thiên văn (AU).'),
    Q('Trái Đất có dạng?', ['Hình nón', 'Hình cầu hơi dẹt ở 2 cực', 'Hình hộp', 'Phẳng như mặt bàn, có rìa rơi'], 1, 'Trái Đất là geoid — gần cầu, hơi dẹt ở cực, phình ở xích đạo.'),
    Q('Mặt Trăng là?', ['Hành tinh', 'Sao chổi', 'Vệ tinh tự nhiên của Trái Đất', 'Tiểu hành tinh'], 2, 'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất.'),
  ]),

  M(3, 'Vận động tự quay quanh trục', [
    Q('Trái Đất tự quay quanh trục với chu kỳ?', ['24 giờ', '30 ngày', '12 giờ', '365 ngày'], 0, 'Trái Đất tự quay 1 vòng ~24 giờ (1 ngày đêm).'),
    Q('Hướng tự quay của Trái Đất?', ['Nam lên Bắc', 'Từ Tây sang Đông', 'Bắc xuống Nam', 'Từ Đông sang Tây'], 1, 'Trái Đất tự quay từ Tây sang Đông, gây mặt trời mọc đằng Đông.'),
    Q('Hệ quả vận động tự quay gây ra?', ['Bốn mùa xuân hạ thu đông', 'Chu kỳ Mặt Trăng tròn khuyết', 'Ngày đêm + lệch hướng chuyển động + giờ địa phương', 'Một năm 365 ngày'], 2, 'Tự quay → ngày đêm, lệch hướng (Coriolis), giờ khác nhau theo kinh độ.'),
    Q('Một ngày được chia thành?', ['12 múi', '100 múi', '24 múi giờ', '60 múi'], 2, '24 múi giờ, mỗi múi rộng 15 độ kinh tuyến.'),
    Q('Việt Nam thuộc múi giờ?', ['+5', '+9', '+7 (GMT+7)', '+8'], 2, 'Việt Nam dùng giờ Đông Dương GMT+7.'),
    Q('Lực Coriolis làm vật chuyển động ở Bắc bán cầu?', ['Lệch trái', 'Lệch về bên phải', 'Không lệch', 'Đi thẳng'], 1, 'Bắc bán cầu vật chuyển động bị lệch về phải; Nam bán cầu lệch trái.'),
  ]),

  M(4, 'Vận động quanh Mặt Trời', [
    Q('Trái Đất quay quanh Mặt Trời với chu kỳ?', ['30 ngày', '24 giờ', '365 ngày 6 giờ', '12 tháng dương lịch 365'], 2, 'Chu kỳ quay quanh Mặt Trời ~365,25 ngày (năm thiên văn).'),
    Q('Quỹ đạo Trái Đất quanh Mặt Trời có dạng?', ['Elip', 'Tròn hoàn hảo, Mặt Trời ở tâm', 'Tam giác', 'Hình xoắn ốc mở rộng dần'], 0, 'Quỹ đạo elip với Mặt Trời ở 1 tiêu điểm.'),
    Q('Trục Trái Đất nghiêng với mặt phẳng quỹ đạo?', ['90°', '0°', '66°33′ (hay nghiêng 23°27′ so với pháp tuyến)', '45°'], 2, 'Trục nghiêng 66°33′ — nguyên nhân các mùa.'),
    Q('Mùa hè ở Bắc bán cầu khi?', ['Không thay đổi', 'Bắc bán cầu hướng nghiêng về Mặt Trời', 'Quay ngược', 'Tránh xa Mặt Trời'], 1, 'Hè BBC: BBC nghiêng về phía Mặt Trời, nhận nhiều bức xạ hơn.'),
    Q('Vào ngày 21/6 (hạ chí), Mặt Trời chiếu thẳng đứng tại?', ['Chí tuyến Nam', 'Chí tuyến Bắc (23°27′B)', 'Cực Bắc', 'Xích đạo'], 1, 'Hạ chí 21-22/6, Mặt Trời ở thiên đỉnh tại chí tuyến Bắc.'),
    Q('Hệ quả chính của vận động quanh Mặt Trời?', ['Ngày - đêm', 'Giờ địa phương theo kinh độ', 'Các mùa và chuyển động biểu kiến của Mặt Trời', 'Lực Coriolis'], 2, 'Các mùa, chuyển động biểu kiến và các đới khí hậu là hệ quả chính.'),
  ]),

  M(5, 'Cấu trúc và thạch quyển', [
    Q('Trái Đất có cấu trúc 3 lớp chính?', ['Cực - Xích đạo - Trung gian', 'Vỏ - Manti - Nhân', 'Đất - Nước - Không khí', 'Vỏ - Khí - Nước'], 1, 'Trái Đất từ ngoài vào: vỏ, manti, nhân.'),
    Q('Thạch quyển gồm?', ['Toàn manti', 'Toàn vỏ', 'Vỏ và phần trên manti', 'Nhân ngoài'], 2, 'Thạch quyển = vỏ Trái Đất + phần cứng của manti trên.'),
    Q('Vỏ Trái Đất chia thành?', ['Vỏ lục địa và vỏ đại dương', 'Vỏ trong và vỏ ngoài', 'Vỏ nóng và vỏ lạnh', 'Vỏ trên và vỏ dưới'], 0, 'Vỏ lục địa dày ~30-70 km, chủ yếu granit; vỏ đại dương mỏng ~5-10 km, chủ yếu bazan.'),
    Q('Lý thuyết kiến tạo mảng cho biết?', ['Vỏ Trái Đất chia thành các mảng di chuyển', 'Vỏ đứng yên', 'Vỏ là 1 khối liền', 'Vỏ là chất lỏng'], 0, 'Thạch quyển chia thành các mảng di chuyển trên manti mềm.'),
    Q('Động đất và núi lửa hay xảy ra ở?', ['Giữa mảng', 'Sa mạc', 'Trong lục địa', 'Ranh giới các mảng kiến tạo'], 3, 'Tương tác giữa các mảng tại ranh giới gây ra động đất, núi lửa.'),
    Q('"Vành đai lửa Thái Bình Dương" là?', ['Vành đai sa mạc', 'Vành đai rừng', 'Vùng nhiều núi lửa, động đất quanh Thái Bình Dương', 'Vành đai băng'], 2, 'Ring of Fire bao quanh Thái Bình Dương tập trung 75% núi lửa thế giới.'),
  ]),

  M(6, 'Khí quyển - Cấu trúc và thành phần', [
    Q('Khí quyển Trái Đất gồm các tầng?', ['Chỉ 1 tầng', 'Đối lưu, bình lưu, trung lưu, nhiệt lưu, ngoại lưu', 'Trắng và xanh', 'Lạnh và nóng'], 1, '5 tầng: troposphere → stratosphere → mesosphere → thermosphere → exosphere.'),
    Q('Tầng đối lưu là?', ['Tầng ozone', 'Tầng sát mặt đất, nơi diễn ra thời tiết', 'Tầng lạnh nhất', 'Tầng vũ trụ'], 1, 'Tầng đối lưu (0-12 km) là nơi tạo ra hầu hết hiện tượng thời tiết.'),
    Q('Tầng ozone (O₃) nằm ở?', ['Nhiệt lưu', 'Đối lưu', 'Ngoại lưu', 'Tầng bình lưu'], 3, 'Tầng ozone ở stratosphere, hấp thu tia UV gây hại.'),
    Q('Thành phần chính của không khí?', ['N₂ (~78%) và O₂ (~21%)', 'He và H₂', 'CH₄ và NH₃', 'CO₂ và H₂O'], 0, 'Không khí khô: 78% N₂, 21% O₂, 1% khác (Ar, CO₂...).'),
    Q('Khí nào gây hiệu ứng nhà kính chính?', ['Ne (Neon, khí trơ tầng cao)', 'CO₂, CH₄, H₂O', 'N₂ (Nitơ, chiếm 78% khí quyển)', 'O₂ (Oxy, duy trì sự sống)'], 1, 'Greenhouse gases: CO₂, methane, hơi nước giữ nhiệt cho Trái Đất.'),
    Q('Ô nhiễm không khí chủ yếu do?', ['Hoạt động công nghiệp, giao thông', 'Nước biển', 'Cây xanh', 'Xói mòn đất do mưa lũ'], 0, 'Đốt nhiên liệu hoá thạch trong công nghiệp và giao thông gây ô nhiễm.'),
  ]),

  M(7, 'Bức xạ và nhiệt độ không khí', [
    Q('Nguồn gốc nhiệt của Trái Đất chủ yếu từ?', ['Bên trong Trái Đất', 'Mặt Trăng', 'Bức xạ Mặt Trời', 'Sao Hoả'], 2, 'Bức xạ Mặt Trời là nguồn năng lượng chính cho Trái Đất.'),
    Q('Bức xạ tới đất phụ thuộc?', ['Vĩ độ + thời điểm trong năm', 'Chỉ thời tiết', 'Chỉ giờ', 'Không phụ thuộc gì'], 0, 'Lượng bức xạ tới phụ thuộc góc tới (vĩ độ) và thời điểm trong năm.'),
    Q('Vùng nào nhận nhiều bức xạ nhất?', ['Sa mạc Sahara duy nhất', 'Hai cực Bắc - Nam', 'Vĩ độ cao', 'Xích đạo'], 3, 'Vùng xích đạo nhận bức xạ lớn nhất do tia chiếu gần vuông góc.'),
    Q('Yếu tố ảnh hưởng đến nhiệt độ không khí?', ['Chỉ lục địa', 'Vĩ độ, độ cao, lục địa - đại dương', 'Chỉ độ cao', 'Chỉ vĩ độ'], 1, 'Vĩ độ, độ cao, ven biển, lục địa đều ảnh hưởng nhiệt độ.'),
    Q('Lên cao 100m, nhiệt độ giảm trung bình?', ['5°C', '100°C', '~0,6°C', '10°C'], 2, 'Trong tầng đối lưu, nhiệt giảm ~0,6°C mỗi 100m độ cao.'),
    Q('Vùng cực có nhiệt độ thấp do?', ['Cây nhiều', 'Sông nhiều', 'Góc tới nhỏ + thời gian chiếu sáng ngắn', 'Không có lý do'], 2, 'Tia tới xiên + đêm cực dài → cực rất lạnh.'),
  ]),

  M(8, 'Khí áp và gió', [
    Q('Khí áp là?', ['Lực điện', 'Lực hấp dẫn', 'Lực hút Mặt Trời', 'Sức ép của không khí lên bề mặt'], 3, 'Khí áp = lực không khí ép lên đơn vị diện tích bề mặt.'),
    Q('Khí áp giảm khi?', ['Ban ngày', 'Xuống thấp', 'Lên cao', 'Ban đêm'], 2, 'Lên cao, mật độ không khí giảm → khí áp giảm.'),
    Q('Gió thổi từ nơi?', ['Áp cao đến áp thấp', 'Áp thấp đến áp cao', 'Nóng đến lạnh', 'Cùng áp'], 0, 'Gió là chuyển động không khí từ vùng áp cao về áp thấp.'),
    Q('Gió Tín phong (mậu dịch) thổi ở?', ['Trên cao', 'Giữa chí tuyến và xích đạo', 'Vùng cực, từ áp cao cực về vĩ độ 60°', 'Ôn đới'], 1, 'Gió Tín phong thổi từ áp cao chí tuyến về áp thấp xích đạo.'),
    Q('Gió Tây ôn đới thổi ở?', ['Chí tuyến', 'Xích đạo', 'Vĩ độ 30-60° hai bán cầu', 'Vùng cực, từ 60° về 90°'], 2, 'Gió Tây ôn đới thổi từ chí tuyến về vĩ độ 60°.'),
    Q('Gió mùa hình thành do?', ['Tự quay Trái Đất', 'Hấp dẫn Mặt Trăng', 'Dãy núi cao chắn gió mùa', 'Chênh lệch nhiệt giữa lục địa và đại dương'], 3, 'Mùa hè lục địa nóng (hút gió), mùa đông lục địa lạnh (đẩy gió) — sinh gió mùa.'),
  ]),

  M(9, 'Lượng mưa và sự phân bố', [
    Q('Mưa hình thành khi?', ['Đất khô', 'Hơi nước ngưng tụ thành giọt đủ nặng', 'Gió yếu', 'Nắng to'], 1, 'Hơi nước bốc lên gặp lạnh ngưng tụ thành giọt, rơi xuống thành mưa.'),
    Q('Khu vực mưa nhiều nhất là?', ['Chí tuyến trên đất liền', 'Xích đạo', 'Hai cực, do tuyết rơi quanh năm', 'Sa mạc'], 1, 'Vùng xích đạo mưa nhiều do hội tụ gió và bốc hơi mạnh.'),
    Q('Sa mạc thường nằm ở vĩ độ?', ['Xích đạo', 'Chí tuyến (~30°)', 'Ôn đới', 'Hai cực (~80-90°), khô lạnh'], 1, 'Áp cao chí tuyến → không khí đi xuống, khô → sa mạc Sahara, Atacama...'),
    Q('Hiệu ứng phơn (foehn) tạo ra?', ['Gió khô nóng ở sườn khuất gió', 'Không khí lạnh dày đặc ở sườn đón gió', 'Mưa nhiều', 'Tuyết rơi dày trên đỉnh núi cao'], 0, 'Phơn: gió vượt núi, sườn khuất nóng và khô.'),
    Q('Mưa frontal xảy ra khi?', ['Đất nóng', 'Trời nắng', 'Hai khối khí nóng - lạnh gặp nhau', 'Băng tan'], 2, 'Mưa front: 2 khối khí khác nhiệt độ gặp nhau → khối nóng bốc lên gây mưa.'),
    Q('Ảnh hưởng của địa hình đến mưa?', ['Chỉ vùng núi', 'Chỉ ven biển', 'Sườn đón gió nhiều mưa hơn sườn khuất', 'Đều như nhau'], 2, 'Địa hình nâng không khí lên → ngưng tụ → sườn đón gió mưa nhiều.'),
  ]),

  M(10, 'Thuỷ quyển và vòng tuần hoàn nước', [
    Q('Thuỷ quyển bao gồm?', ['Chỉ băng', 'Chỉ đại dương', 'Chỉ sông', 'Tất cả nước trên Trái Đất'], 3, 'Thuỷ quyển = đại dương + sông + hồ + băng + nước ngầm + hơi nước.'),
    Q('Tỉ lệ nước mặn trên Trái Đất?', ['~97%', '50%', '10%', '3%'], 0, 'Khoảng 97% là nước mặn (đại dương), chỉ 3% là ngọt.'),
    Q('Phần lớn nước ngọt nằm dưới dạng?', ['Sông hồ', 'Nước ngầm', 'Băng tuyết ở 2 cực và núi cao', 'Hơi nước'], 2, '~69% nước ngọt là băng tuyết; 30% nước ngầm; ~1% sông hồ.'),
    Q('Vòng tuần hoàn nước gồm các giai đoạn?', ['Chỉ bốc hơi', 'Không có chu kỳ', 'Chỉ mưa', 'Bốc hơi → ngưng tụ → mưa → dòng chảy → bốc hơi'], 3, 'Bốc hơi - ngưng tụ - mưa - dòng chảy bề mặt/ngầm tạo vòng tuần hoàn.'),
    Q('Năng lượng nào điều khiển vòng tuần hoàn nước?', ['Bức xạ Mặt Trời', 'Năng lượng địa nhiệt từ lòng đất', 'Sức người', 'Nhiệt lượng từ núi lửa phun trào'], 0, 'Mặt Trời cung cấp năng lượng làm bốc hơi nước.'),
    Q('Nước ngầm hình thành từ?', ['Đại dương', 'Mưa thấm xuống đất', 'Băng tan ở hai cực chảy ngầm', 'Mạch suối'], 1, 'Nước mưa thấm qua đất tạo tầng nước ngầm trong các tầng đá thấm.'),
  ]),

  M(11, 'Thổ nhưỡng và sinh quyển', [
    Q('Thổ nhưỡng (đất) là?', ['Tầng đá', 'Lớp nước ngầm bên dưới mặt đất', 'Không khí', 'Lớp vật chất tơi xốp trên bề mặt nuôi cây'], 3, 'Đất là lớp tơi xốp trên cùng, sản phẩm phong hoá + tích luỹ hữu cơ.'),
    Q('Đất hình thành do?', ['Chỉ gió', 'Phong hoá đá + sinh vật + khí hậu + thời gian', 'Chỉ đá', 'Chỉ nước'], 1, 'Các nhân tố hình thành đất: đá mẹ, khí hậu, sinh vật, địa hình, thời gian, con người.'),
    Q('Đất ferralit (đỏ vàng) phổ biến ở?', ['Sa mạc', 'Ôn đới khô', 'Vùng cực, băng giá quanh năm', 'Vùng nhiệt đới ẩm'], 3, 'Đất ferralit hình thành ở nhiệt đới ẩm với mưa nhiều, phong hoá mạnh.'),
    Q('Sinh quyển bao gồm?', ['Chỉ vi sinh vật', 'Chỉ thực vật', 'Tất cả sinh vật trên Trái Đất', 'Chỉ động vật'], 2, 'Sinh quyển = mọi sinh vật + môi trường mà chúng tồn tại.'),
    Q('Đới khí hậu nhiệt đới có thảm thực vật?', ['Tundra', 'Taiga (rừng lá kim ôn đới lạnh)', 'Rừng nhiệt đới ẩm, savan', 'Đồng cỏ ôn đới'], 2, 'Nhiệt đới: rừng mưa ẩm (xích đạo), savan (gió mùa khô hạn).'),
    Q('Đa dạng sinh học là?', ['Phong phú về loài, gen, hệ sinh thái', 'Chỉ vi khuẩn', 'Chỉ động vật lớn', 'Chỉ nhiều cây'], 0, 'Đa dạng sinh học gồm 3 mức: gen, loài, hệ sinh thái.'),
  ]),

  M(12, 'Các đới khí hậu trên Trái Đất', [
    Q('Trái Đất có bao nhiêu vành đai khí hậu chính?', ['5 đới (1 nhiệt + 2 ôn + 2 hàn)', '3', '10', '7'], 0, '5 đới: nhiệt đới (1), ôn đới (2), hàn đới (2).'),
    Q('Đới nhiệt đới giới hạn từ?', ['30° Bắc', 'Vĩ tuyến 60°', 'Cực Bắc', 'Chí tuyến Bắc đến chí tuyến Nam'], 3, 'Đới nhiệt đới: 23°27′ Bắc → 23°27′ Nam (giữa 2 chí tuyến).'),
    Q('Đới ôn đới ở?', ['Trên 80°', 'Giữa xích đạo và chí tuyến', 'Giữa chí tuyến và vòng cực', 'Trong vòng cực'], 2, 'Đới ôn đới: vĩ độ 23°27′ - 66°33′ ở 2 bán cầu.'),
    Q('Đới hàn đới có đặc điểm?', ['Nóng quanh năm', 'Mưa nhiều', 'Lạnh quanh năm, có băng', 'Ấm áp, mưa nhiều quanh năm'], 2, 'Hàn đới: lạnh quanh năm, có băng tuyết, mùa hè ngắn.'),
    Q('Việt Nam thuộc đới khí hậu?', ['Nhiệt đới gió mùa', 'Ôn đới', 'Hàn đới', 'Cận cực'], 0, 'Việt Nam nằm trong vùng nhiệt đới ẩm gió mùa.'),
    Q('Khí hậu cận xích đạo có mùa?', ['Mùa khô và mùa mưa rõ rệt', 'Không có mùa', 'Tuyết quanh năm', '4 mùa rõ rệt'], 0, 'Cận xích đạo (như Đông Nam Á gió mùa) có 2 mùa: khô và mưa.'),
  ]),

  M(13, 'Dân cư - Sự gia tăng dân số', [
    Q('Dân số thế giới năm 2023 khoảng?', ['10 tỷ', '3 tỷ', '5 tỷ', '8 tỷ'], 3, 'Dân số thế giới đạt 8 tỷ người vào tháng 11/2022.'),
    Q('Tỉ suất gia tăng tự nhiên =?', ['Tỉ suất di cư', 'Sinh + tử', 'Tỉ suất sinh - tỉ suất tử', 'Sinh chia tử'], 2, 'Gia tăng tự nhiên = tỉ suất sinh thô - tỉ suất tử thô.'),
    Q('Các nước phát triển có tỉ suất sinh?', ['Không đo được', 'Cao, tăng dân số nhanh', 'Trung bình', 'Thấp'], 3, 'Nước phát triển có sinh thấp, tử thấp, dân số già hoá.'),
    Q('Các nước đang phát triển thường?', ['Không tăng', 'Dân số già', 'Sinh cao, dân số trẻ', 'Sinh thấp'], 2, 'Nước đang phát triển sinh cao, dân số trẻ, gia tăng nhanh.'),
    Q('Bùng nổ dân số xảy ra khi?', ['Sinh thấp', 'Sinh cao, tử giảm nhanh', 'Không thay đổi', 'Tử cao'], 1, 'Bùng nổ dân số: y tế tiến bộ → tử giảm nhanh, sinh chưa giảm kịp.'),
    Q('Việt Nam có tổng dân số khoảng?', ['50 triệu', '~100 triệu', '10 triệu', '200 triệu'], 1, 'Việt Nam ~100 triệu người (2023), đứng thứ 15 thế giới.'),
  ]),

  M(14, 'Cơ cấu dân số', [
    Q('Cơ cấu dân số theo tuổi gồm?', ['Trẻ em, lao động, người già', 'Thành thị và nông thôn', 'Nam và nữ', 'Học và làm việc'], 0, 'Cơ cấu tuổi chia thành: <15, 15-64, ≥65.'),
    Q('Cơ cấu dân số trẻ là khi?', ['Tỉ lệ dưới 15 tuổi cao', 'Tỉ lệ nam cao', 'Tỉ lệ nữ cao', 'Tỉ lệ trên 65 cao'], 0, 'Dân số trẻ: tỉ lệ dưới 15 tuổi cao (>35%).'),
    Q('Dân số già là khi?', ['Tỉ lệ dưới 15 cao', 'Không có người già', 'Cân bằng', 'Tỉ lệ trên 65 tuổi >7%'], 3, 'Dân số già: tỉ lệ ≥65 tuổi vượt 7% theo định nghĩa LHQ.'),
    Q('Tháp dân số trẻ có hình?', ['Đáy hẹp', 'Hình chữ nhật', 'Đảo ngược', 'Đáy rộng - đỉnh nhọn'], 3, 'Tháp dân số trẻ: đáy rộng (nhiều trẻ em), đỉnh nhọn (ít người già).'),
    Q('Cơ cấu dân số theo giới tính được biểu thị qua?', ['Diện tích', 'Tỉ số giới tính (nam/100 nữ)', 'Tỉ lệ học vấn', 'GDP bình quân đầu người'], 1, 'Tỉ số giới tính = số nam trên 100 nữ.'),
    Q('Việt Nam đang ở giai đoạn?', ['Bùng nổ', 'Cơ cấu dân số vàng (đang già hoá)', 'Suy thoái', 'Dân số trẻ'], 1, 'VN có cơ cấu dân số vàng nhưng đang già hoá nhanh.'),
  ]),

  M(15, 'Phân bố dân cư và đô thị hoá', [
    Q('Mật độ dân số là?', ['Tỉ lệ sinh', 'Số người/đơn vị diện tích', 'Tổng dân số', 'Tỉ lệ tử'], 1, 'Mật độ dân số = số dân / diện tích, đơn vị người/km².'),
    Q('Khu vực đông dân nhất thế giới?', ['Châu Úc', 'Châu Phi', 'Bắc Mỹ', 'Đông Á - Nam Á - ĐNA'], 3, 'Đông Á (Trung Quốc), Nam Á (Ấn Độ), ĐNA tập trung đông dân nhất.'),
    Q('Yếu tố ảnh hưởng phân bố dân cư?', ['Chỉ do tốc độ gia tăng tự nhiên', 'Tự nhiên (khí hậu, nước) + KT-XH (việc làm)', 'Chỉ tự nhiên', 'Chỉ chính trị'], 1, 'Tự nhiên và kinh tế - xã hội đều ảnh hưởng phân bố dân cư.'),
    Q('Đô thị hoá là quá trình?', ['Tăng diện tích nông thôn', 'Tăng tỉ lệ dân thành thị + lan rộng đô thị', 'Giảm dân thành thị', 'Không đổi'], 1, 'Đô thị hoá: dân thành thị tăng + lan toả lối sống, văn hoá đô thị.'),
    Q('Đô thị hoá quá nhanh gây?', ['Hoà bình', 'Sạch sẽ', 'Giàu lên ngay', 'Ô nhiễm, kẹt xe, thiếu nhà ở'], 3, 'Đô thị hoá quá nhanh khiến hạ tầng quá tải, ô nhiễm, nghèo đô thị.'),
    Q('Tỉ lệ dân thành thị Việt Nam (2023)?', ['10%', '5%', '90%', '~40%'], 3, 'VN đô thị hoá ~40-42% (2023), thấp hơn trung bình thế giới (~55%).'),
  ]),

  M(16, 'Nguồn lao động và việc làm', [
    Q('Nguồn lao động bao gồm?', ['Dân số trong độ tuổi lao động có khả năng làm việc', 'Trẻ em', 'Toàn dân', 'Người già'], 0, 'Nguồn lao động: người trong độ tuổi lao động (15-60/65) có khả năng làm việc.'),
    Q('Chất lượng lao động phụ thuộc?', ['Chỉ tuổi', 'Trình độ học vấn, kỹ năng, sức khoẻ', 'Chỉ giới tính', 'Chỉ chiều cao'], 1, 'Chất lượng lao động = học vấn + kỹ năng + sức khoẻ + thái độ.'),
    Q('Việt Nam có lợi thế?', ['Lao động ít', 'Lao động trẻ, dồi dào', 'Không có lợi thế', 'Dân số già'], 1, 'VN có lực lượng lao động trẻ, dồi dào — lợi thế dân số vàng.'),
    Q('Thất nghiệp là?', ['Người về hưu', 'Người có khả năng nhưng không có việc làm', 'Người không muốn làm', 'Trẻ em'], 1, 'Thất nghiệp: người trong độ tuổi lao động, có khả năng, có nhu cầu nhưng không có việc.'),
    Q('Cơ cấu lao động theo ngành ở VN đang chuyển dịch?', ['Giảm tất cả', 'Tăng nông nghiệp', 'Giảm nông nghiệp, tăng công nghiệp và dịch vụ', 'Không đổi'], 2, 'VN dịch chuyển cơ cấu: giảm tỉ trọng nông nghiệp, tăng CN-DV.'),
    Q('Xu hướng việc làm hiện đại?', ['Chỉ nông trại', 'Số hoá, làm việc từ xa, AI', 'Chỉ giấy bút', 'Chỉ nhà máy'], 1, 'Việc làm hiện đại: số hoá, làm việc từ xa, AI thay đổi thị trường lao động.'),
  ]),

  M(17, 'Các ngành kinh tế - Tổng quan', [
    Q('Cơ cấu kinh tế chia thành?', ['Trồng trọt - chăn nuôi', 'Vật chất - tinh thần', 'Nông nghiệp - Công nghiệp - Dịch vụ', 'Sản xuất - tiêu dùng'], 2, 'Ba khu vực kinh tế: I (NN), II (CN), III (DV).'),
    Q('Nước phát triển có cơ cấu kinh tế?', ['Đồng đều', 'Công nghiệp cao', 'Dịch vụ chiếm tỉ trọng cao nhất', 'Nông nghiệp cao'], 2, 'Nước phát triển: dịch vụ chiếm 70-80% GDP.'),
    Q('GDP là?', ['Lương trung bình', 'Tổng sản phẩm trong nước', 'Dân số', 'Thu nhập cá nhân'], 1, 'GDP = Gross Domestic Product — tổng giá trị sản xuất trong nước 1 năm.'),
    Q('GDP bình quân đầu người =?', ['Sinh / tử', 'Lương / số người', 'GDP / dân số', 'Diện tích / GDP'], 2, 'GDP per capita = GDP tổng / số dân.'),
    Q('Quốc gia có GDP cao nhất thế giới?', ['Đức (nền kinh tế lớn nhất EU)', 'Hoa Kỳ', 'Nhật (cường quốc công nghệ châu Á)', 'Việt Nam'], 1, 'Hoa Kỳ là nền kinh tế lớn nhất thế giới về GDP danh nghĩa.'),
    Q('Việt Nam có GDP đứng nhóm?', ['Cuối bảng', 'Đang phát triển, top 35-40 thế giới', 'Top 5, ngang Anh và Pháp', 'Top 1, vượt Hoa Kỳ và Trung Quốc'], 1, 'VN khoảng top 35-40 thế giới về GDP danh nghĩa.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Trái Đất có dạng?', ['Hộp lập phương 6 mặt phẳng', 'Đĩa phẳng', 'Nón cụt, đỉnh hướng Bắc cực', 'Cầu hơi dẹt 2 cực'], 3, 'Trái Đất là geoid — gần cầu, hơi dẹt 2 cực.'),
    Q('Hệ quả tự quay quanh trục?', ['Tháng âm lịch theo Mặt Trăng', 'Ngày đêm + lệch hướng', 'Năm dương lịch 365 ngày', 'Bốn mùa xuân hạ thu đông'], 1, 'Tự quay → ngày đêm, lực Coriolis, giờ địa phương.'),
    Q('Hệ quả vận động quanh Mặt Trời?', ['Các mùa', 'Giờ địa phương khác nhau theo kinh độ', 'Ngày đêm', 'Lực hấp dẫn'], 0, 'Quanh Mặt Trời + trục nghiêng → các mùa.'),
    Q('Việt Nam thuộc đới khí hậu?', ['Nhiệt đới gió mùa', 'Hàn đới', 'Ôn đới', 'Sa mạc'], 0, 'VN nằm ở nhiệt đới ẩm gió mùa.'),
    Q('Cơ cấu kinh tế chia thành?', ['NN - CN - DV', 'Già - trẻ', 'Lớn - nhỏ', 'Đông - Tây'], 0, '3 khu vực: nông nghiệp, công nghiệp, dịch vụ.'),
    Q('Đô thị hoá là?', ['Giảm dân', 'Tăng tỉ lệ dân thành thị', 'Không đổi', 'Tăng nông thôn'], 1, 'Đô thị hoá: dân thành thị tăng + lan lối sống đô thị.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Địa lý nông nghiệp', [
    Q('Nông nghiệp gồm?', ['Trồng trọt, chăn nuôi, lâm nghiệp, thuỷ sản', 'Chỉ nuôi cá', 'Chỉ trồng cây', 'Chỉ trồng lúa'], 0, 'Nông nghiệp mở rộng gồm trồng trọt, chăn nuôi, lâm nghiệp, thuỷ sản.'),
    Q('Cây lương thực chính trên thế giới?', ['Cà phê, ca cao', 'Chè, bông', 'Lúa mì, lúa gạo, ngô', 'Cao su, tiêu'], 2, '3 cây lương thực chính: lúa mì, lúa gạo, ngô.'),
    Q('Vùng trồng lúa gạo lớn nhất thế giới?', ['Bắc Mỹ', 'Châu Âu', 'Đông Á - ĐNA', 'Châu Phi'], 2, 'Trung Quốc, Ấn Độ, ĐNA là vùng trồng lúa gạo lớn nhất.'),
    Q('Yếu tố nào quan trọng nhất với nông nghiệp?', ['Chỉ lao động', 'Đất, nước, khí hậu', 'Chỉ vốn', 'Chỉ thị trường'], 1, 'Đất, nước, khí hậu là 3 yếu tố tự nhiên cốt lõi của nông nghiệp.'),
    Q('Nông nghiệp hữu cơ là?', ['Nuôi cá biển', 'Chỉ trồng cây kiểng', 'Không dùng hoá chất tổng hợp', 'Dùng nhiều hoá chất'], 2, 'Organic farming không dùng hoá chất tổng hợp, hướng đến bền vững.'),
    Q('Nông nghiệp công nghệ cao đặc trưng bởi?', ['Tự động hoá, nhà kính, tưới nhỏ giọt, IoT', 'Không cần khoa học', 'Thủ công', 'Lạc hậu'], 0, 'High-tech agriculture: tự động hoá, IoT, AI, nhà kính, tưới nhỏ giọt.'),
  ]),

  M(20, 'Trồng trọt', [
    Q('Cây lương thực ôn đới chủ yếu là?', ['Chè, cây công nghiệp vùng cận nhiệt', 'Cao su', 'Lúa gạo, kê', 'Lúa mì, lúa mạch, ngô'], 3, 'Vùng ôn đới: lúa mì, lúa mạch, ngô là cây lương thực chính.'),
    Q('Cây công nghiệp lâu năm gồm?', ['Sắn, cây lương thực ngắn ngày', 'Khoai tây', 'Lúa gạo', 'Cao su, cà phê, ca cao, chè'], 3, 'Cao su, cà phê, ca cao, chè là cây công nghiệp lâu năm.'),
    Q('Việt Nam đứng đầu thế giới về xuất khẩu?', ['Bông, cây công nghiệp xứ khô', 'Lúa mì', 'Cacao, nguyên liệu sô-cô-la', 'Hồ tiêu (và thứ 2 cà phê)'], 3, 'VN top đầu thế giới về xuất khẩu hồ tiêu, cà phê (thứ 2), gạo (thứ 3).'),
    Q('Vùng trồng cà phê lớn nhất Việt Nam?', ['Đông Nam Bộ', 'Tây Nguyên', 'Đồng bằng sông Hồng', 'Trung Bộ'], 1, 'Tây Nguyên (Đắk Lắk, Lâm Đồng) là vùng cà phê lớn nhất VN.'),
    Q('Cây ăn quả nhiệt đới VN xuất khẩu mạnh?', ['Thanh long, vải, xoài, sầu riêng', 'Cherry', 'Táo, lê', 'Nho, đặc sản vùng ôn đới khô'], 0, 'Thanh long, vải, xoài, sầu riêng là trái cây xuất khẩu chủ lực của VN.'),
    Q('Cây dược liệu Việt Nam nổi tiếng?', ['Nhân sâm', 'Linh chi', 'Sâm Ngọc Linh', 'Tam thất'], 2, 'Sâm Ngọc Linh ở Kon Tum - Quảng Nam là đặc sản dược liệu của VN.'),
  ]),

  M(21, 'Chăn nuôi và thuỷ sản', [
    Q('Vật nuôi chính trên thế giới?', ['Bò, trâu, lợn, gà, dê, cừu', 'Chỉ cá', 'Chỉ bò', 'Chỉ gà'], 0, 'Vật nuôi chính: bò, trâu, lợn, gà, dê, cừu.'),
    Q('Vùng nuôi bò sữa lớn nhất thế giới?', ['Châu Âu, Bắc Mỹ, New Zealand', 'Sa mạc', 'Bắc Cực', 'Châu Phi'], 0, 'Châu Âu, Bắc Mỹ, NZ có nền chăn nuôi bò sữa phát triển.'),
    Q('Chăn nuôi gia cầm phát triển mạnh ở?', ['Chỉ nhiệt đới', 'Chỉ cực', 'Chỉ ôn đới', 'Mọi vùng có nhu cầu thực phẩm'], 3, 'Gia cầm dễ nuôi, phát triển ở mọi vùng có nhu cầu thực phẩm.'),
    Q('Thuỷ sản gồm?', ['Đánh bắt và nuôi trồng', 'Chỉ đánh bắt', 'Chỉ nuôi', 'Chỉ chế biến'], 0, 'Thuỷ sản chia thành đánh bắt tự nhiên và nuôi trồng.'),
    Q('Việt Nam xuất khẩu thuỷ sản chủ lực là?', ['Cua biển', 'Cá ngừ chỉ', 'Cá tra, tôm', 'Sò huyết'], 2, 'Cá tra (basa) và tôm là 2 mặt hàng thuỷ sản xuất khẩu chủ lực của VN.'),
    Q('Đánh bắt quá mức gây?', ['Không vấn đề', 'Hoà bình', 'Tăng cá', 'Cạn kiệt nguồn lợi thuỷ sản'], 3, 'Đánh bắt quá mức (overfishing) làm cạn kiệt nguồn lợi, mất cân bằng sinh thái.'),
  ]),

  M(22, 'Địa lý lâm nghiệp', [
    Q('Rừng có vai trò?', ['Chỉ làm đẹp', 'Chỉ gỗ', 'Điều hoà khí hậu, giữ nước, gỗ, ĐDSH', 'Không vai trò'], 2, 'Rừng: điều hoà khí hậu, chống xói mòn, giữ nước, gỗ, đa dạng sinh học.'),
    Q('Rừng nhiệt đới ẩm tập trung ở?', ['Amazon, Congo, ĐNA', 'Châu Âu', 'Sa mạc Sahara', 'Bắc cực'], 0, 'Amazon, Congo, ĐNA có rừng nhiệt đới ẩm rộng lớn.'),
    Q('Phá rừng gây?', ['Tốt cho khí hậu', 'Mát hơn', 'Lũ lụt, xói mòn, biến đổi khí hậu', 'Mưa nhiều'], 2, 'Phá rừng → lũ, xói mòn, mất ĐDSH, tăng CO₂.'),
    Q('Việt Nam có tỉ lệ che phủ rừng?', ['5%', '80%', '10%', '~42%'], 3, 'VN che phủ rừng ~42% (2022), tăng đều qua trồng rừng.'),
    Q('Vườn quốc gia là?', ['Khu thương mại', 'Khu bảo tồn đa dạng sinh học', 'Khu công nghiệp', 'Khu dân cư'], 1, 'Vườn quốc gia là khu bảo tồn ĐDSH, nghiên cứu, du lịch sinh thái.'),
    Q('Lâm nghiệp bền vững là?', ['Không khai thác gì', 'Khai thác cạn kiệt', 'Khai thác đi đôi với trồng và bảo vệ', 'Chỉ trồng'], 2, 'Lâm nghiệp bền vững: khai thác có kế hoạch + trồng mới + bảo vệ.'),
  ]),

  M(23, 'Công nghiệp - Tổng quan', [
    Q('Công nghiệp là?', ['Vận tải', 'Hoạt động chế biến nguyên liệu thành sản phẩm', 'Buôn bán', 'Trồng trọt'], 1, 'Công nghiệp = chế biến nguyên liệu thành tư liệu sản xuất và tiêu dùng.'),
    Q('Công nghiệp chia thành 2 nhóm?', ['Lớn và nhỏ', 'Nặng và nhẹ', 'Cao và thấp', 'Trong và ngoài'], 1, 'CN nặng (sắt thép, hoá chất) và CN nhẹ (dệt may, thực phẩm).'),
    Q('Năng lượng là ngành?', ['Công nghiệp năng lượng (điện, dầu khí, than)', 'Du lịch', 'Dịch vụ', 'Nông nghiệp'], 0, 'Ngành năng lượng (điện, dầu khí, than) thuộc CN nặng.'),
    Q('Việt Nam có thế mạnh CN nào?', ['Vi mạch siêu nhỏ', 'Dệt may, điện tử, da giày, chế biến', 'Robot công nghiệp tự hành', 'Hàng không vũ trụ'], 1, 'VN mạnh về dệt may, điện tử lắp ráp, da giày, chế biến thuỷ sản.'),
    Q('Cách mạng công nghiệp 4.0 đặc trưng?', ['AI, IoT, big data, robot', 'Dây chuyền', 'Điện khí hoá và sản xuất hàng loạt', 'Hơi nước'], 0, 'CMCN 4.0: AI, IoT, big data, robot, in 3D.'),
    Q('Yếu tố ảnh hưởng phân bố CN?', ['Không gì', 'Chỉ đất', 'Chỉ khí hậu', 'Nguyên liệu, năng lượng, lao động, thị trường'], 3, 'Phân bố CN phụ thuộc nguyên liệu, năng lượng, lao động, vốn, thị trường, hạ tầng.'),
  ]),

  M(24, 'Một số ngành công nghiệp chính', [
    Q('Công nghiệp điện lực gồm?', ['Nhiệt điện, thuỷ điện, năng lượng tái tạo', 'Chỉ dầu', 'Chỉ hạt nhân', 'Chỉ than'], 0, 'Điện lực: nhiệt điện than/khí, thuỷ điện, hạt nhân, gió, mặt trời.'),
    Q('Công nghiệp dầu khí lớn ở?', ['Sa mạc Sahara', 'Cực Bắc', 'Trung Đông, Nga, Bắc Mỹ', 'Tây Tạng'], 2, 'Trung Đông (Arab Saudi, UAE), Nga, Mỹ là nước dầu khí lớn.'),
    Q('Công nghiệp sản xuất thép lớn ở?', ['Châu Phi', 'Châu Mỹ Latin', 'Trung Quốc, Nhật, Hàn, EU, Mỹ, Ấn', 'Châu Úc'], 2, 'Trung Quốc dẫn đầu sản xuất thép thế giới.'),
    Q('Công nghiệp điện tử - tin học tập trung ở?', ['Châu Phi', 'Châu Úc', 'Đông Á (Trung, Hàn, Nhật, Đài Loan), Mỹ, EU', 'Châu Phi'], 2, 'Trung Quốc, Đài Loan, Hàn Quốc, Nhật là trung tâm điện tử thế giới.'),
    Q('Công nghiệp dệt may VN đứng?', ['Top 1, vượt Trung Quốc về kim ngạch', 'Top 3 thế giới', 'Cuối bảng', 'Top 50'], 1, 'VN nằm trong top 3 thế giới về xuất khẩu dệt may.'),
    Q('Công nghiệp chế biến lương thực thực phẩm phát triển ở?', ['Chỉ thành thị', 'Chỉ ven biển', 'Chỉ nông thôn', 'Mọi nơi có nguyên liệu'], 3, 'CN chế biến phát triển ở khắp nơi có nguyên liệu nông nghiệp/thuỷ sản.'),
  ]),

  M(25, 'Địa lý dịch vụ', [
    Q('Dịch vụ là khu vực kinh tế?', ['Khai khoáng', 'Phục vụ sản xuất và tiêu dùng', 'Chế tạo hàng hoá', 'Trồng cây'], 1, 'Dịch vụ phục vụ nhu cầu sản xuất, tiêu dùng và xã hội.'),
    Q('Dịch vụ gồm 3 nhóm chính?', ['Cá nhân, gia đình, xã hội', 'Đắt, rẻ, vừa', 'Sản xuất, tiêu dùng, công cộng', 'Quốc gia, quốc tế, địa phương'], 2, 'DV sản xuất (logistics, tài chính), tiêu dùng (bán lẻ, du lịch), công cộng (giáo dục, y tế).'),
    Q('Du lịch là?', ['Nông nghiệp', 'Ngành dịch vụ phục vụ du khách', 'Khai mỏ', 'Ngành công nghiệp nặng'], 1, 'Du lịch là dịch vụ phục vụ nhu cầu nghỉ dưỡng, tham quan.'),
    Q('Việt Nam có thế mạnh du lịch nào?', ['Du lịch vũ trụ', 'Du lịch biển, văn hoá, sinh thái', 'Du lịch sa mạc', 'Du lịch băng tuyết'], 1, 'VN mạnh du lịch biển (Hạ Long, Phú Quốc), văn hoá (Huế, Hội An), sinh thái (Phong Nha).'),
    Q('Tài chính - ngân hàng tập trung ở?', ['Đô thị lớn', 'Sa mạc', 'Nông thôn', 'Vùng cực'], 0, 'NY, London, Tokyo, Singapore, HK là trung tâm tài chính lớn nhất thế giới.'),
    Q('Tỉ trọng dịch vụ trong GDP các nước phát triển?', ['30%', '70-80%', '50%', '10%'], 1, 'Nước phát triển: dịch vụ chiếm 70-80% GDP.'),
  ]),

  M(26, 'Giao thông vận tải và thông tin liên lạc', [
    Q('Các loại hình giao thông gồm?', ['Chỉ sắt', 'Chỉ đường bộ', 'Chỉ hàng không', 'Đường bộ, sắt, thuỷ, hàng không, ống dẫn'], 3, '5 loại hình chính: đường bộ, sắt, thuỷ, hàng không, ống dẫn.'),
    Q('Vận tải hàng hoá đường dài tốt nhất bằng?', ['Đường bộ', 'Đường ống dẫn dầu khí', 'Đường biển', 'Hàng không'], 2, 'Đường biển vận chuyển hàng hoá lớn, đường dài rẻ nhất.'),
    Q('Vận tải nhanh nhất là?', ['Đường thuỷ', 'Đường bộ', 'Hàng không', 'Đường sắt'], 2, 'Hàng không là phương thức nhanh nhất, dùng cho hàng giá trị cao và hành khách.'),
    Q('Cảng biển lớn nhất thế giới?', ['Singapore', 'Hamburg', 'New York', 'Thượng Hải'], 3, 'Cảng Thượng Hải là cảng container lớn nhất thế giới.'),
    Q('Sân bay quốc tế lớn nhất VN?', ['Đà Nẵng', 'Cát Bi', 'Tân Sơn Nhất và Nội Bài', 'Phú Bài'], 2, 'Tân Sơn Nhất (HCM) và Nội Bài (HN) là 2 sân bay quốc tế lớn nhất VN.'),
    Q('Internet làm thay đổi?', ['Chỉ liên lạc', 'Chỉ giải trí', 'Không gì', 'Cách giao tiếp, kinh doanh, học tập'], 3, 'Internet cách mạng hoá mọi mặt: kinh doanh, giáo dục, giao tiếp, giải trí.'),
  ]),

  M(27, 'Thương mại quốc tế', [
    Q('Thương mại quốc tế là?', ['Tiêu dùng', 'Buôn bán trong nước', 'Trao đổi hàng hoá - dịch vụ giữa các nước', 'Sản xuất'], 2, 'Thương mại quốc tế = xuất - nhập khẩu giữa các quốc gia.'),
    Q('Xuất khẩu là?', ['Sản xuất trong nước', 'Tiêu dùng trong nước', 'Bán hàng ra nước ngoài', 'Mua hàng nước ngoài'], 2, 'Xuất khẩu (export): bán hàng hoá, dịch vụ ra nước ngoài.'),
    Q('Nhập khẩu là?', ['Mua hàng nước ngoài', 'Bán hàng ra nước ngoài', 'Đầu tư', 'Vay nợ'], 0, 'Nhập khẩu (import): mua hàng từ nước ngoài.'),
    Q('Cán cân thương mại =?', ['Xuất khẩu - Nhập khẩu', 'Sinh - tử', 'Xuất + Nhập', 'GDP - GNI'], 0, 'Cán cân thương mại = giá trị xuất khẩu - giá trị nhập khẩu.'),
    Q('WTO viết tắt là?', ['Hiệp hội các quốc gia Đông Nam Á', 'Tổ chức Thương mại Thế giới', 'Liên minh châu Âu', 'Liên Hợp Quốc'], 1, 'WTO = World Trade Organization — tổ chức điều phối thương mại thế giới.'),
    Q('Việt Nam gia nhập WTO năm?', ['1995', '2000', '2015', '2007'], 3, 'VN chính thức trở thành thành viên WTO ngày 11/1/2007.'),
  ]),

  M(28, 'Toàn cầu hoá và hội nhập quốc tế', [
    Q('Toàn cầu hoá là?', ['Cách ly', 'Chỉ kinh tế', 'Chỉ văn hoá', 'Quá trình gắn kết kinh tế - văn hoá - chính trị các nước'], 3, 'Toàn cầu hoá (globalization) gắn kết các quốc gia trên mọi lĩnh vực.'),
    Q('Hệ quả tích cực của toàn cầu hoá?', ['Mở rộng thị trường, chuyển giao công nghệ', 'Mất bản sắc', 'Cô lập', 'Cạn kiệt nhanh tài nguyên thiên nhiên'], 0, 'TCH mở rộng thị trường, công nghệ, đầu tư, giao lưu văn hoá.'),
    Q('Hệ quả tiêu cực của toàn cầu hoá?', ['Phân hoá giàu nghèo, mất bản sắc, dịch bệnh lan nhanh', 'Hoà bình', 'Bình đẳng tuyệt đối', 'Sạch sẽ'], 0, 'TCH có thể gia tăng bất bình đẳng, ô nhiễm, dịch bệnh lan nhanh.'),
    Q('ASEAN là?', ['Hiệp hội các quốc gia Đông Nam Á', 'Liên minh châu Âu', 'Khối quân sự Bắc Đại Tây Dương', 'Liên Hợp Quốc'], 0, 'ASEAN thành lập 1967, hiện có 10 thành viên ĐNA.'),
    Q('Việt Nam gia nhập ASEAN năm?', ['2000', '1967', '2007', '1995'], 3, 'VN gia nhập ASEAN ngày 28/7/1995.'),
    Q('FTA viết tắt là?', ['Hiệp định Thương mại tự do', 'Bảo hiểm', 'Đầu tư trực tiếp', 'Vay vốn'], 0, 'FTA = Free Trade Agreement — hiệp định thương mại tự do.'),
  ]),

  M(29, 'Môi trường và tài nguyên', [
    Q('Môi trường là?', ['Chỉ xã hội', 'Chỉ không khí', 'Tổng thể các yếu tố tự nhiên - xã hội bao quanh con người', 'Chỉ tự nhiên'], 2, 'Môi trường = tổng thể tự nhiên + xã hội + nhân tạo xung quanh con người.'),
    Q('Tài nguyên thiên nhiên chia thành?', ['Tái tạo và không tái tạo', 'Lớn và nhỏ', 'Mới và cũ', 'Cao và thấp'], 0, 'Tài nguyên tái tạo (nước, gió, mặt trời) và không tái tạo (khoáng sản, dầu).'),
    Q('Tài nguyên không tái tạo là?', ['Năng lượng mặt trời', 'Gió, nguồn năng lượng vô tận', 'Nước, có thể tái tạo qua mưa', 'Khoáng sản, dầu khí'], 3, 'Khoáng sản, dầu khí, than đá là tài nguyên không tái tạo.'),
    Q('Năng lượng tái tạo gồm?', ['Hạt nhân', 'Mặt trời, gió, thuỷ, sinh khối', 'Khí gas', 'Than, dầu'], 1, 'Năng lượng tái tạo: mặt trời, gió, thuỷ điện, sinh khối, địa nhiệt.'),
    Q('Ô nhiễm môi trường gồm?', ['Chỉ không khí', 'Chỉ nước', 'Chỉ đất', 'Không khí, nước, đất, tiếng ồn'], 3, 'Các loại ô nhiễm: không khí, nước, đất, tiếng ồn, ánh sáng, phóng xạ.'),
    Q('Biến đổi khí hậu do?', ['Khí nhà kính tăng (CO₂, CH₄)', 'Mặt trời nguội', 'Núi lửa phun', 'Trái Đất xa Mặt Trời'], 0, 'BĐKH chủ yếu do tích luỹ khí nhà kính từ hoạt động con người.'),
  ]),

  M(30, 'Phát triển bền vững', [
    Q('Phát triển bền vững là?', ['Khai thác cạn kiệt', 'Đáp ứng nhu cầu hiện tại mà không tổn hại tương lai', 'Tăng GDP bằng mọi giá', 'Phá rừng'], 1, 'PTBV (Brundtland, 1987): đáp ứng nhu cầu hiện tại mà không tổn hại thế hệ sau.'),
    Q('PTBV dựa trên 3 trụ cột?', ['Kinh tế - Xã hội - Môi trường', 'Cá nhân - gia đình - xã hội', 'Đất - nước - không khí', 'Sản xuất - tiêu dùng - lưu thông'], 0, 'PTBV cân bằng 3 trụ cột: kinh tế + xã hội + môi trường.'),
    Q('17 Mục tiêu PTBV (SDGs) do?', ['ASEAN, công bố tại Hội nghị Bali', 'Liên Hợp Quốc đề ra 2015', 'WTO, ban hành cùng hiệp định Doha', 'EU, thông qua tại Hội nghị Paris'], 1, 'LHQ ban hành 17 SDGs năm 2015 cho tới 2030.'),
    Q('Năng lượng xanh là?', ['Năng lượng đắt', 'Năng lượng sạch không thải nhiều khí nhà kính', 'Năng lượng cao', 'Năng lượng nguy hiểm'], 1, 'Năng lượng xanh: mặt trời, gió, thuỷ, ít phát thải CO₂.'),
    Q('Tăng trưởng xanh là?', ['Suy thoái', 'Không tăng', 'Tăng trưởng kinh tế gắn với bảo vệ môi trường', 'Tăng trưởng nhanh bằng mọi giá'], 2, 'Tăng trưởng xanh: phát triển kinh tế thân thiện môi trường.'),
    Q('Hành động cá nhân cho PTBV?', ['Lãng phí', 'Đốt rác', 'Tiết kiệm điện, nước, phân loại rác', 'Phá rừng'], 2, 'Cá nhân: tiết kiệm tài nguyên, phân loại rác, đi xe đạp/công cộng.'),
  ]),

  M(31, 'Các tổ chức quốc tế', [
    Q('Liên Hợp Quốc (LHQ) thành lập năm?', ['2000', '1919', '1945', '1900'], 2, 'LHQ thành lập ngày 24/10/1945 sau Thế chiến II.'),
    Q('Cơ quan cao nhất của LHQ là?', ['Tổng thư ký', 'Hội đồng Bảo an', 'Toà án quốc tế', 'Đại hội đồng'], 3, 'Đại hội đồng LHQ gồm 193 thành viên, mỗi nước 1 phiếu.'),
    Q('Hội đồng Bảo an LHQ có 5 thành viên thường trực?', ['Mỹ, Nhật, Đức, Anh, Pháp', 'Mỹ, Trung, Ấn, Anh, Pháp', 'Mỹ, Nga, Trung, Anh, Pháp', 'Anh, Pháp, Đức, Ý, Tây Ban Nha'], 2, 'P5: Mỹ, Nga, Trung Quốc, Anh, Pháp — có quyền phủ quyết.'),
    Q('IMF là?', ['UNESCO', 'Quỹ Tiền tệ Quốc tế', 'Tổ chức Thương mại Thế giới', 'Liên Hợp Quốc'], 1, 'IMF = International Monetary Fund — Quỹ Tiền tệ Quốc tế.'),
    Q('WHO là?', ['Tổ chức Lao động Quốc tế', 'Tổ chức Y tế Thế giới', 'Quỹ Nhi đồng', 'Tổ chức Thương mại'], 1, 'WHO = World Health Organization — Tổ chức Y tế Thế giới.'),
    Q('Việt Nam gia nhập LHQ năm?', ['1977', '1945', '2007', '1995'], 0, 'VN gia nhập LHQ ngày 20/9/1977.'),
  ]),

  M(32, 'Liên minh khu vực', [
    Q('Liên minh châu Âu (EU) hiện có?', ['10', '27 thành viên', '50', '15'], 1, 'EU hiện có 27 thành viên sau khi Anh rời (Brexit 2020).'),
    Q('Đồng tiền chung EU là?', ['Pound (đồng tiền của Vương quốc Anh)', 'USD (đô la Mỹ, dự trữ quốc tế)', 'Yen (đồng tiền Nhật Bản)', 'Euro'], 3, 'Đồng Euro lưu hành trong khu vực Eurozone từ 1999.'),
    Q('NAFTA (nay USMCA) gồm?', ['Mỹ - Brazil - Argentina', 'Nhật - Hàn - Trung', 'Anh - Pháp - Đức', 'Mỹ - Canada - Mexico'], 3, 'USMCA (2020) thay NAFTA, gồm Mỹ - Canada - Mexico.'),
    Q('ASEAN có?', ['15', '10 thành viên', '20', '5'], 1, 'ASEAN 10: Brunei, Campuchia, Indonesia, Lào, Malaysia, Myanmar, Philippines, Singapore, Thái Lan, Việt Nam.'),
    Q('AEC (cộng đồng kinh tế ASEAN) thành lập?', ['2007', '1995', '2020', '2015'], 3, 'AEC chính thức hình thành 31/12/2015.'),
    Q('APEC là?', ['Quỹ nhân đạo', 'Diễn đàn Hợp tác Kinh tế châu Á - Thái Bình Dương', 'Hiệp định thương mại', 'Tổ chức quân sự'], 1, 'APEC là diễn đàn kinh tế gồm 21 nền kinh tế quanh Thái Bình Dương.'),
  ]),

  M(33, 'Việt Nam hội nhập quốc tế', [
    Q('Việt Nam là thành viên của các tổ chức?', ['LHQ, WTO, ASEAN, APEC...', 'Không tham gia', 'Chỉ LHQ', 'Chỉ ASEAN'], 0, 'VN là thành viên của LHQ, WTO, ASEAN, APEC, UNESCO, WHO...'),
    Q('VN đã ký các FTA lớn như?', ['Chỉ với Trung Quốc', 'Chỉ với Mỹ', 'EVFTA, CPTPP, RCEP', 'Chỉ ASEAN'], 2, 'VN tham gia EVFTA (EU), CPTPP (Thái Bình Dương), RCEP, nhiều FTA song phương.'),
    Q('EVFTA là?', ['FTA Việt - Trung', 'FTA Việt - Nhật', 'FTA Việt - Mỹ', 'FTA Việt Nam - EU'], 3, 'EVFTA = EU-Vietnam Free Trade Agreement, có hiệu lực 8/2020.'),
    Q('CPTPP gồm?', ['27 nước', '11 nước Thái Bình Dương', '3 nước', '50 nước'], 1, 'CPTPP 11 thành viên: Nhật, Canada, Úc, NZ, VN, Singapore, Malaysia, Brunei, Mexico, Chile, Peru.'),
    Q('VN gia nhập APEC năm?', ['2020', '2007', '1995', '1998'], 3, 'VN gia nhập APEC năm 1998 và đã 2 lần đăng cai (2006, 2017).'),
    Q('Định hướng đối ngoại của VN?', ['Đóng cửa', 'Theo 1 nước', 'Chống tất cả', 'Đa phương, đa dạng, độc lập'], 3, 'VN theo đường lối đối ngoại độc lập, tự chủ, đa phương hoá, đa dạng hoá.'),
  ]),

  M(34, 'Địa lý ứng dụng - GIS và viễn thám', [
    Q('GIS là?', ['Truyền hình vệ tinh', 'Hệ phân tích thời tiết', 'Hệ định vị', 'Hệ thông tin địa lý'], 3, 'GIS = Geographic Information System — quản lý dữ liệu không gian.'),
    Q('Viễn thám (remote sensing) là?', ['Đi thực địa', 'Nghe đài', 'Đọc bản đồ giấy', 'Thu thập thông tin về Trái Đất từ xa (vệ tinh, máy bay)'], 3, 'Viễn thám: thu thập thông tin từ xa qua vệ tinh, máy bay, drone.'),
    Q('GPS là?', ['Hệ định vị toàn cầu', 'Hệ thời tiết', 'Hệ tài chính', 'Hệ bản đồ'], 0, 'GPS = Global Positioning System — định vị toàn cầu qua vệ tinh.'),
    Q('Ứng dụng GIS trong đời sống?', ['Quy hoạch đô thị, giao thông, môi trường', 'Chỉ quân đội', 'Chỉ học sinh dùng', 'Không có ứng dụng'], 0, 'GIS dùng rộng rãi trong quy hoạch, môi trường, kinh doanh, y tế công cộng.'),
    Q('Bản đồ số khác bản đồ giấy ở?', ['Đắt hơn', 'Có thể tương tác, cập nhật, phân tích', 'Không khác', 'Khó dùng'], 1, 'Bản đồ số tương tác, cập nhật và phân tích được — Google Maps là ví dụ.'),
    Q('Big data trong địa lý dùng để?', ['Vô dụng', 'Phân tích xu hướng dân cư, giao thông, môi trường', 'Chỉ giải trí', 'Chỉ nghiên cứu'], 1, 'Big data trong địa lý phân tích di chuyển, dân cư, môi trường ở quy mô lớn.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Trái Đất có 5 đới khí hậu chính?', ['Đúng (1 nhiệt + 2 ôn + 2 hàn)', 'Sai, chỉ có nhiệt đới và ôn đới', 'Có 7 đới', 'Có 3 đới'], 0, '5 đới: nhiệt đới (1), ôn đới (2), hàn đới (2).'),
    Q('Vòng tuần hoàn nước gồm?', ['Bốc hơi → ngưng tụ → mưa → dòng chảy', 'Mưa → bốc hơi → đóng băng → tan', 'Chỉ mưa', 'Chỉ bốc hơi'], 0, 'Bốc hơi - ngưng tụ - mưa - dòng chảy tạo chu trình nước.'),
    Q('Đô thị hoá quá nhanh gây?', ['Giàu lên ngay', 'Sạch sẽ', 'Quá tải hạ tầng, ô nhiễm', 'Hoà bình'], 2, 'Đô thị hoá nhanh khiến hạ tầng quá tải, ô nhiễm, nghèo đô thị.'),
    Q('Cơ cấu kinh tế hiện đại?', ['Đồng đều', 'CN nặng cao', 'Nông nghiệp cao', 'Dịch vụ chiếm tỉ trọng cao'], 3, 'Nước phát triển: dịch vụ chiếm 70-80% GDP.'),
    Q('Phát triển bền vững dựa trên?', ['Chỉ xã hội', 'Kinh tế - Xã hội - Môi trường', 'Chỉ kinh tế', 'Chỉ môi trường'], 1, 'PTBV cân bằng 3 trụ cột: KT - XH - MT.'),
    Q('VN hội nhập kinh tế qua?', ['Không hội nhập', 'Chỉ WTO', 'WTO, ASEAN, EVFTA, CPTPP, RCEP', 'Chỉ ASEAN'], 2, 'VN hội nhập sâu qua nhiều tổ chức và FTA lớn.'),
  ]),
];

export const H10DIA_SCENARIOS = indexBy(H10DIA_WEEKS);
