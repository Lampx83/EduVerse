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
    Q('Địa lý nghiên cứu về?', ['Trái Đất và mối quan hệ con người - môi trường','Tâm lý','Văn học','Toán'], 0, 'Địa lý nghiên cứu Trái Đất, tự nhiên và mối quan hệ con người - tự nhiên - kinh tế xã hội.'),
    Q('Địa lý chia thành 2 nhánh lớn?', ['Tự nhiên và Kinh tế - Xã hội','Vật lý và hoá học','Cổ và mới','Đông và Tây'], 0, 'Địa lý tự nhiên và địa lý kinh tế - xã hội là 2 nhánh chính.'),
    Q('Nghề nghiệp liên quan đến địa lý?', ['Bản đồ học, quy hoạch, khí tượng, du lịch...','Kế toán','Luật sư','Bác sĩ'], 0, 'Địa lý mở ra nghề: bản đồ, GIS, khí tượng, quy hoạch, du lịch, môi trường.'),
    Q('Phương pháp nghiên cứu địa lý cơ bản?', ['Bản đồ, thực địa, GIS, viễn thám','Chỉ đọc sách','Chỉ thí nghiệm','Hỏi đáp'], 0, 'Bản đồ, thực địa, GIS, viễn thám là phương pháp chính.'),
    Q('GIS viết tắt là?', ['Geographic Information System','General Index Software','Global Internet Service','Geological Industrial Standard'], 0, 'GIS = Hệ thông tin địa lý — công cụ quản lý dữ liệu không gian.'),
    Q('Tỉ lệ bản đồ 1:1.000.000 nghĩa là?', ['1cm trên bản đồ = 1.000.000 cm thực địa = 10 km','1cm = 1m','1cm = 1km','1cm = 100m'], 0, '1cm bản đồ ↔ 1.000.000 cm thực = 10 km.'),
  ]),

  M(2, 'Trái Đất trong vũ trụ', [
    Q('Hệ Mặt Trời nằm trong?', ['Thiên hà Ngân Hà','Dải Andromeda','Thiên hà M87','Magellan'], 0, 'Hệ Mặt Trời nằm trong thiên hà Ngân Hà (Milky Way).'),
    Q('Hệ Mặt Trời có?', ['8 hành tinh','9 hành tinh','7 hành tinh','10 hành tinh'], 0, 'Sau khi Pluto bị loại (2006), hệ Mặt Trời có 8 hành tinh.'),
    Q('Trái Đất là hành tinh thứ mấy tính từ Mặt Trời?', ['Thứ 3','Thứ 1','Thứ 5','Thứ 8'], 0, 'Thứ tự: Thuỷ - Kim - Trái Đất - Hoả - Mộc - Thổ - Thiên Vương - Hải Vương.'),
    Q('Khoảng cách Trái Đất - Mặt Trời trung bình?', ['~150 triệu km (1 AU)','1 triệu km','1 tỷ km','1.000 km'], 0, 'Khoảng cách trung bình ~149,6 triệu km = 1 đơn vị thiên văn (AU).'),
    Q('Trái Đất có dạng?', ['Hình cầu hơi dẹt ở 2 cực','Hình hộp','Phẳng','Hình nón'], 0, 'Trái Đất là geoid — gần cầu, hơi dẹt ở cực, phình ở xích đạo.'),
    Q('Mặt Trăng là?', ['Vệ tinh tự nhiên của Trái Đất','Hành tinh','Sao chổi','Tiểu hành tinh'], 0, 'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất.'),
  ]),

  M(3, 'Vận động tự quay quanh trục', [
    Q('Trái Đất tự quay quanh trục với chu kỳ?', ['24 giờ','12 giờ','365 ngày','30 ngày'], 0, 'Trái Đất tự quay 1 vòng ~24 giờ (1 ngày đêm).'),
    Q('Hướng tự quay của Trái Đất?', ['Từ Tây sang Đông','Từ Đông sang Tây','Bắc xuống Nam','Nam lên Bắc'], 0, 'Trái Đất tự quay từ Tây sang Đông, gây mặt trời mọc đằng Đông.'),
    Q('Hệ quả vận động tự quay gây ra?', ['Ngày đêm + lệch hướng chuyển động + giờ địa phương','Mùa','Năm','Tháng'], 0, 'Tự quay → ngày đêm, lệch hướng (Coriolis), giờ khác nhau theo kinh độ.'),
    Q('Một ngày được chia thành?', ['24 múi giờ','12 múi','60 múi','100 múi'], 0, '24 múi giờ, mỗi múi rộng 15 độ kinh tuyến.'),
    Q('Việt Nam thuộc múi giờ?', ['+7 (GMT+7)','+8','+9','+5'], 0, 'Việt Nam dùng giờ Đông Dương GMT+7.'),
    Q('Lực Coriolis làm vật chuyển động ở Bắc bán cầu?', ['Lệch về bên phải','Lệch trái','Không lệch','Đi thẳng'], 0, 'Bắc bán cầu vật chuyển động bị lệch về phải; Nam bán cầu lệch trái.'),
  ]),

  M(4, 'Vận động quanh Mặt Trời', [
    Q('Trái Đất quay quanh Mặt Trời với chu kỳ?', ['365 ngày 6 giờ','24 giờ','30 ngày','12 tháng dương lịch 365'], 0, 'Chu kỳ quay quanh Mặt Trời ~365,25 ngày (năm thiên văn).'),
    Q('Quỹ đạo Trái Đất quanh Mặt Trời có dạng?', ['Elip','Tròn','Vuông','Tam giác'], 0, 'Quỹ đạo elip với Mặt Trời ở 1 tiêu điểm.'),
    Q('Trục Trái Đất nghiêng với mặt phẳng quỹ đạo?', ['66°33′ (hay nghiêng 23°27′ so với pháp tuyến)','90°','45°','0°'], 0, 'Trục nghiêng 66°33′ — nguyên nhân các mùa.'),
    Q('Mùa hè ở Bắc bán cầu khi?', ['Bắc bán cầu hướng nghiêng về Mặt Trời','Tránh xa Mặt Trời','Quay ngược','Không thay đổi'], 0, 'Hè BBC: BBC nghiêng về phía Mặt Trời, nhận nhiều bức xạ hơn.'),
    Q('Vào ngày 21/6 (hạ chí), Mặt Trời chiếu thẳng đứng tại?', ['Chí tuyến Bắc (23°27′B)','Xích đạo','Chí tuyến Nam','Cực Bắc'], 0, 'Hạ chí 21-22/6, Mặt Trời ở thiên đỉnh tại chí tuyến Bắc.'),
    Q('Hệ quả chính của vận động quanh Mặt Trời?', ['Các mùa và chuyển động biểu kiến của Mặt Trời','Ngày - đêm','Giờ','Lực Coriolis'], 0, 'Các mùa, chuyển động biểu kiến và các đới khí hậu là hệ quả chính.'),
  ]),

  M(5, 'Cấu trúc và thạch quyển', [
    Q('Trái Đất có cấu trúc 3 lớp chính?', ['Vỏ - Manti - Nhân','Vỏ - Khí - Nước','Đất - Nước - Không khí','Cực - Xích đạo - Trung gian'], 0, 'Trái Đất từ ngoài vào: vỏ, manti, nhân.'),
    Q('Thạch quyển gồm?', ['Vỏ và phần trên manti','Toàn manti','Toàn vỏ','Nhân ngoài'], 0, 'Thạch quyển = vỏ Trái Đất + phần cứng của manti trên.'),
    Q('Vỏ Trái Đất chia thành?', ['Vỏ lục địa và vỏ đại dương','Vỏ trên và vỏ dưới','Vỏ trong và vỏ ngoài','Vỏ nóng và vỏ lạnh'], 0, 'Vỏ lục địa dày ~30-70 km, chủ yếu granit; vỏ đại dương mỏng ~5-10 km, chủ yếu bazan.'),
    Q('Lý thuyết kiến tạo mảng cho biết?', ['Vỏ Trái Đất chia thành các mảng di chuyển','Vỏ đứng yên','Vỏ là 1 khối liền','Vỏ là chất lỏng'], 0, 'Thạch quyển chia thành các mảng di chuyển trên manti mềm.'),
    Q('Động đất và núi lửa hay xảy ra ở?', ['Ranh giới các mảng kiến tạo','Giữa mảng','Trong lục địa','Sa mạc'], 0, 'Tương tác giữa các mảng tại ranh giới gây ra động đất, núi lửa.'),
    Q('"Vành đai lửa Thái Bình Dương" là?', ['Vùng nhiều núi lửa, động đất quanh Thái Bình Dương','Vành đai sa mạc','Vành đai rừng','Vành đai băng'], 0, 'Ring of Fire bao quanh Thái Bình Dương tập trung 75% núi lửa thế giới.'),
  ]),

  M(6, 'Khí quyển - Cấu trúc và thành phần', [
    Q('Khí quyển Trái Đất gồm các tầng?', ['Đối lưu, bình lưu, trung lưu, nhiệt lưu, ngoại lưu','Chỉ 1 tầng','Lạnh và nóng','Trắng và xanh'], 0, '5 tầng: troposphere → stratosphere → mesosphere → thermosphere → exosphere.'),
    Q('Tầng đối lưu là?', ['Tầng sát mặt đất, nơi diễn ra thời tiết','Tầng ozone','Tầng vũ trụ','Tầng lạnh nhất'], 0, 'Tầng đối lưu (0-12 km) là nơi tạo ra hầu hết hiện tượng thời tiết.'),
    Q('Tầng ozone (O₃) nằm ở?', ['Tầng bình lưu','Đối lưu','Nhiệt lưu','Ngoại lưu'], 0, 'Tầng ozone ở stratosphere, hấp thu tia UV gây hại.'),
    Q('Thành phần chính của không khí?', ['N₂ (~78%) và O₂ (~21%)','CO₂ và H₂O','He và H₂','CH₄ và NH₃'], 0, 'Không khí khô: 78% N₂, 21% O₂, 1% khác (Ar, CO₂...).'),
    Q('Khí nào gây hiệu ứng nhà kính chính?', ['CO₂, CH₄, H₂O','O₂','N₂','Ne'], 0, 'Greenhouse gases: CO₂, methane, hơi nước giữ nhiệt cho Trái Đất.'),
    Q('Ô nhiễm không khí chủ yếu do?', ['Hoạt động công nghiệp, giao thông','Cây xanh','Nước biển','Đất'], 0, 'Đốt nhiên liệu hoá thạch trong công nghiệp và giao thông gây ô nhiễm.'),
  ]),

  M(7, 'Bức xạ và nhiệt độ không khí', [
    Q('Nguồn gốc nhiệt của Trái Đất chủ yếu từ?', ['Bức xạ Mặt Trời','Bên trong Trái Đất','Mặt Trăng','Sao Hoả'], 0, 'Bức xạ Mặt Trời là nguồn năng lượng chính cho Trái Đất.'),
    Q('Bức xạ tới đất phụ thuộc?', ['Vĩ độ + thời điểm trong năm','Chỉ giờ','Chỉ thời tiết','Không phụ thuộc gì'], 0, 'Lượng bức xạ tới phụ thuộc góc tới (vĩ độ) và thời điểm trong năm.'),
    Q('Vùng nào nhận nhiều bức xạ nhất?', ['Xích đạo','Cực','Vĩ độ cao','Sa mạc Sahara duy nhất'], 0, 'Vùng xích đạo nhận bức xạ lớn nhất do tia chiếu gần vuông góc.'),
    Q('Yếu tố ảnh hưởng đến nhiệt độ không khí?', ['Vĩ độ, độ cao, lục địa - đại dương','Chỉ vĩ độ','Chỉ độ cao','Chỉ lục địa'], 0, 'Vĩ độ, độ cao, ven biển, lục địa đều ảnh hưởng nhiệt độ.'),
    Q('Lên cao 100m, nhiệt độ giảm trung bình?', ['~0,6°C','10°C','5°C','100°C'], 0, 'Trong tầng đối lưu, nhiệt giảm ~0,6°C mỗi 100m độ cao.'),
    Q('Vùng cực có nhiệt độ thấp do?', ['Góc tới nhỏ + thời gian chiếu sáng ngắn','Cây nhiều','Sông nhiều','Không có lý do'], 0, 'Tia tới xiên + đêm cực dài → cực rất lạnh.'),
  ]),

  M(8, 'Khí áp và gió', [
    Q('Khí áp là?', ['Sức ép của không khí lên bề mặt','Lực hút Mặt Trời','Lực hấp dẫn','Lực điện'], 0, 'Khí áp = lực không khí ép lên đơn vị diện tích bề mặt.'),
    Q('Khí áp giảm khi?', ['Lên cao','Xuống thấp','Ban ngày','Ban đêm'], 0, 'Lên cao, mật độ không khí giảm → khí áp giảm.'),
    Q('Gió thổi từ nơi?', ['Áp cao đến áp thấp','Áp thấp đến áp cao','Nóng đến lạnh','Cùng áp'], 0, 'Gió là chuyển động không khí từ vùng áp cao về áp thấp.'),
    Q('Gió Tín phong (mậu dịch) thổi ở?', ['Giữa chí tuyến và xích đạo','Cực','Ôn đới','Trên cao'], 0, 'Gió Tín phong thổi từ áp cao chí tuyến về áp thấp xích đạo.'),
    Q('Gió Tây ôn đới thổi ở?', ['Vĩ độ 30-60° hai bán cầu','Chí tuyến','Xích đạo','Cực'], 0, 'Gió Tây ôn đới thổi từ chí tuyến về vĩ độ 60°.'),
    Q('Gió mùa hình thành do?', ['Chênh lệch nhiệt giữa lục địa và đại dương','Hấp dẫn Mặt Trăng','Tự quay Trái Đất','Núi'], 0, 'Mùa hè lục địa nóng (hút gió), mùa đông lục địa lạnh (đẩy gió) — sinh gió mùa.'),
  ]),

  M(9, 'Lượng mưa và sự phân bố', [
    Q('Mưa hình thành khi?', ['Hơi nước ngưng tụ thành giọt đủ nặng','Đất khô','Nắng to','Gió yếu'], 0, 'Hơi nước bốc lên gặp lạnh ngưng tụ thành giọt, rơi xuống thành mưa.'),
    Q('Khu vực mưa nhiều nhất là?', ['Xích đạo','Cực','Sa mạc','Chí tuyến trên đất liền'], 0, 'Vùng xích đạo mưa nhiều do hội tụ gió và bốc hơi mạnh.'),
    Q('Sa mạc thường nằm ở vĩ độ?', ['Chí tuyến (~30°)','Xích đạo','Cực','Ôn đới'], 0, 'Áp cao chí tuyến → không khí đi xuống, khô → sa mạc Sahara, Atacama...'),
    Q('Hiệu ứng phơn (foehn) tạo ra?', ['Gió khô nóng ở sườn khuất gió','Mưa nhiều','Lạnh','Tuyết'], 0, 'Phơn: gió vượt núi, sườn khuất nóng và khô.'),
    Q('Mưa frontal xảy ra khi?', ['Hai khối khí nóng - lạnh gặp nhau','Trời nắng','Băng tan','Đất nóng'], 0, 'Mưa front: 2 khối khí khác nhiệt độ gặp nhau → khối nóng bốc lên gây mưa.'),
    Q('Ảnh hưởng của địa hình đến mưa?', ['Sườn đón gió nhiều mưa hơn sườn khuất','Đều như nhau','Chỉ ven biển','Chỉ vùng núi'], 0, 'Địa hình nâng không khí lên → ngưng tụ → sườn đón gió mưa nhiều.'),
  ]),

  M(10, 'Thuỷ quyển và vòng tuần hoàn nước', [
    Q('Thuỷ quyển bao gồm?', ['Tất cả nước trên Trái Đất','Chỉ đại dương','Chỉ sông','Chỉ băng'], 0, 'Thuỷ quyển = đại dương + sông + hồ + băng + nước ngầm + hơi nước.'),
    Q('Tỉ lệ nước mặn trên Trái Đất?', ['~97%','50%','10%','3%'], 0, 'Khoảng 97% là nước mặn (đại dương), chỉ 3% là ngọt.'),
    Q('Phần lớn nước ngọt nằm dưới dạng?', ['Băng tuyết ở 2 cực và núi cao','Sông hồ','Nước ngầm','Hơi nước'], 0, '~69% nước ngọt là băng tuyết; 30% nước ngầm; ~1% sông hồ.'),
    Q('Vòng tuần hoàn nước gồm các giai đoạn?', ['Bốc hơi → ngưng tụ → mưa → dòng chảy → bốc hơi','Chỉ bốc hơi','Chỉ mưa','Không có chu kỳ'], 0, 'Bốc hơi - ngưng tụ - mưa - dòng chảy bề mặt/ngầm tạo vòng tuần hoàn.'),
    Q('Năng lượng nào điều khiển vòng tuần hoàn nước?', ['Bức xạ Mặt Trời','Lửa','Điện','Sức người'], 0, 'Mặt Trời cung cấp năng lượng làm bốc hơi nước.'),
    Q('Nước ngầm hình thành từ?', ['Mưa thấm xuống đất','Mạch suối','Đại dương','Băng'], 0, 'Nước mưa thấm qua đất tạo tầng nước ngầm trong các tầng đá thấm.'),
  ]),

  M(11, 'Thổ nhưỡng và sinh quyển', [
    Q('Thổ nhưỡng (đất) là?', ['Lớp vật chất tơi xốp trên bề mặt nuôi cây','Tầng đá','Nước','Không khí'], 0, 'Đất là lớp tơi xốp trên cùng, sản phẩm phong hoá + tích luỹ hữu cơ.'),
    Q('Đất hình thành do?', ['Phong hoá đá + sinh vật + khí hậu + thời gian','Chỉ đá','Chỉ nước','Chỉ gió'], 0, 'Các nhân tố hình thành đất: đá mẹ, khí hậu, sinh vật, địa hình, thời gian, con người.'),
    Q('Đất ferralit (đỏ vàng) phổ biến ở?', ['Vùng nhiệt đới ẩm','Sa mạc','Cực','Ôn đới khô'], 0, 'Đất ferralit hình thành ở nhiệt đới ẩm với mưa nhiều, phong hoá mạnh.'),
    Q('Sinh quyển bao gồm?', ['Tất cả sinh vật trên Trái Đất','Chỉ thực vật','Chỉ động vật','Chỉ vi sinh vật'], 0, 'Sinh quyển = mọi sinh vật + môi trường mà chúng tồn tại.'),
    Q('Đới khí hậu nhiệt đới có thảm thực vật?', ['Rừng nhiệt đới ẩm, savan','Tundra','Taiga','Đồng cỏ ôn đới'], 0, 'Nhiệt đới: rừng mưa ẩm (xích đạo), savan (gió mùa khô hạn).'),
    Q('Đa dạng sinh học là?', ['Phong phú về loài, gen, hệ sinh thái','Chỉ nhiều cây','Chỉ động vật lớn','Chỉ vi khuẩn'], 0, 'Đa dạng sinh học gồm 3 mức: gen, loài, hệ sinh thái.'),
  ]),

  M(12, 'Các đới khí hậu trên Trái Đất', [
    Q('Trái Đất có bao nhiêu vành đai khí hậu chính?', ['5 đới (1 nhiệt + 2 ôn + 2 hàn)','3','7','10'], 0, '5 đới: nhiệt đới (1), ôn đới (2), hàn đới (2).'),
    Q('Đới nhiệt đới giới hạn từ?', ['Chí tuyến Bắc đến chí tuyến Nam','Cực Bắc','30° Bắc','Vĩ tuyến 60°'], 0, 'Đới nhiệt đới: 23°27′ Bắc → 23°27′ Nam (giữa 2 chí tuyến).'),
    Q('Đới ôn đới ở?', ['Giữa chí tuyến và vòng cực','Giữa xích đạo và chí tuyến','Trong vòng cực','Trên 80°'], 0, 'Đới ôn đới: vĩ độ 23°27′ - 66°33′ ở 2 bán cầu.'),
    Q('Đới hàn đới có đặc điểm?', ['Lạnh quanh năm, có băng','Nóng quanh năm','Mưa nhiều','Ấm áp'], 0, 'Hàn đới: lạnh quanh năm, có băng tuyết, mùa hè ngắn.'),
    Q('Việt Nam thuộc đới khí hậu?', ['Nhiệt đới gió mùa','Ôn đới','Hàn đới','Cận cực'], 0, 'Việt Nam nằm trong vùng nhiệt đới ẩm gió mùa.'),
    Q('Khí hậu cận xích đạo có mùa?', ['Mùa khô và mùa mưa rõ rệt','Tuyết quanh năm','4 mùa rõ rệt','Không có mùa'], 0, 'Cận xích đạo (như Đông Nam Á gió mùa) có 2 mùa: khô và mưa.'),
  ]),

  M(13, 'Dân cư - Sự gia tăng dân số', [
    Q('Dân số thế giới năm 2023 khoảng?', ['8 tỷ','5 tỷ','10 tỷ','3 tỷ'], 0, 'Dân số thế giới đạt 8 tỷ người vào tháng 11/2022.'),
    Q('Tỉ suất gia tăng tự nhiên =?', ['Tỉ suất sinh - tỉ suất tử','Sinh + tử','Sinh chia tử','Tỉ suất di cư'], 0, 'Gia tăng tự nhiên = tỉ suất sinh thô - tỉ suất tử thô.'),
    Q('Các nước phát triển có tỉ suất sinh?', ['Thấp','Cao','Trung bình','Không đo được'], 0, 'Nước phát triển có sinh thấp, tử thấp, dân số già hoá.'),
    Q('Các nước đang phát triển thường?', ['Sinh cao, dân số trẻ','Sinh thấp','Dân số già','Không tăng'], 0, 'Nước đang phát triển sinh cao, dân số trẻ, gia tăng nhanh.'),
    Q('Bùng nổ dân số xảy ra khi?', ['Sinh cao, tử giảm nhanh','Tử cao','Sinh thấp','Không thay đổi'], 0, 'Bùng nổ dân số: y tế tiến bộ → tử giảm nhanh, sinh chưa giảm kịp.'),
    Q('Việt Nam có tổng dân số khoảng?', ['~100 triệu','50 triệu','200 triệu','10 triệu'], 0, 'Việt Nam ~100 triệu người (2023), đứng thứ 15 thế giới.'),
  ]),

  M(14, 'Cơ cấu dân số', [
    Q('Cơ cấu dân số theo tuổi gồm?', ['Trẻ em, lao động, người già','Nam và nữ','Thành thị và nông thôn','Học và làm việc'], 0, 'Cơ cấu tuổi chia thành: <15, 15-64, ≥65.'),
    Q('Cơ cấu dân số trẻ là khi?', ['Tỉ lệ dưới 15 tuổi cao','Tỉ lệ trên 65 cao','Tỉ lệ nam cao','Tỉ lệ nữ cao'], 0, 'Dân số trẻ: tỉ lệ dưới 15 tuổi cao (>35%).'),
    Q('Dân số già là khi?', ['Tỉ lệ trên 65 tuổi >7%','Tỉ lệ dưới 15 cao','Cân bằng','Không có người già'], 0, 'Dân số già: tỉ lệ ≥65 tuổi vượt 7% theo định nghĩa LHQ.'),
    Q('Tháp dân số trẻ có hình?', ['Đáy rộng - đỉnh nhọn','Đáy hẹp','Hình chữ nhật','Đảo ngược'], 0, 'Tháp dân số trẻ: đáy rộng (nhiều trẻ em), đỉnh nhọn (ít người già).'),
    Q('Cơ cấu dân số theo giới tính được biểu thị qua?', ['Tỉ số giới tính (nam/100 nữ)','Tỉ lệ học vấn','GDP','Diện tích'], 0, 'Tỉ số giới tính = số nam trên 100 nữ.'),
    Q('Việt Nam đang ở giai đoạn?', ['Cơ cấu dân số vàng (đang già hoá)','Dân số trẻ','Bùng nổ','Suy thoái'], 0, 'VN có cơ cấu dân số vàng nhưng đang già hoá nhanh.'),
  ]),

  M(15, 'Phân bố dân cư và đô thị hoá', [
    Q('Mật độ dân số là?', ['Số người/đơn vị diện tích','Tổng dân số','Tỉ lệ sinh','Tỉ lệ tử'], 0, 'Mật độ dân số = số dân / diện tích, đơn vị người/km².'),
    Q('Khu vực đông dân nhất thế giới?', ['Đông Á - Nam Á - ĐNA','Bắc Mỹ','Châu Phi','Châu Úc'], 0, 'Đông Á (Trung Quốc), Nam Á (Ấn Độ), ĐNA tập trung đông dân nhất.'),
    Q('Yếu tố ảnh hưởng phân bố dân cư?', ['Tự nhiên (khí hậu, nước) + KT-XH (việc làm)','Chỉ tự nhiên','Chỉ chính trị','Không có'], 0, 'Tự nhiên và kinh tế - xã hội đều ảnh hưởng phân bố dân cư.'),
    Q('Đô thị hoá là quá trình?', ['Tăng tỉ lệ dân thành thị + lan rộng đô thị','Giảm dân thành thị','Tăng diện tích nông thôn','Không đổi'], 0, 'Đô thị hoá: dân thành thị tăng + lan toả lối sống, văn hoá đô thị.'),
    Q('Đô thị hoá quá nhanh gây?', ['Ô nhiễm, kẹt xe, thiếu nhà ở','Hoà bình','Sạch sẽ','Giàu lên ngay'], 0, 'Đô thị hoá quá nhanh khiến hạ tầng quá tải, ô nhiễm, nghèo đô thị.'),
    Q('Tỉ lệ dân thành thị Việt Nam (2023)?', ['~40%','10%','90%','5%'], 0, 'VN đô thị hoá ~40-42% (2023), thấp hơn trung bình thế giới (~55%).'),
  ]),

  M(16, 'Nguồn lao động và việc làm', [
    Q('Nguồn lao động bao gồm?', ['Dân số trong độ tuổi lao động có khả năng làm việc','Toàn dân','Trẻ em','Người già'], 0, 'Nguồn lao động: người trong độ tuổi lao động (15-60/65) có khả năng làm việc.'),
    Q('Chất lượng lao động phụ thuộc?', ['Trình độ học vấn, kỹ năng, sức khoẻ','Chỉ chiều cao','Chỉ giới tính','Chỉ tuổi'], 0, 'Chất lượng lao động = học vấn + kỹ năng + sức khoẻ + thái độ.'),
    Q('Việt Nam có lợi thế?', ['Lao động trẻ, dồi dào','Lao động ít','Dân số già','Không có lợi thế'], 0, 'VN có lực lượng lao động trẻ, dồi dào — lợi thế dân số vàng.'),
    Q('Thất nghiệp là?', ['Người có khả năng nhưng không có việc làm','Người không muốn làm','Trẻ em','Người về hưu'], 0, 'Thất nghiệp: người trong độ tuổi lao động, có khả năng, có nhu cầu nhưng không có việc.'),
    Q('Cơ cấu lao động theo ngành ở VN đang chuyển dịch?', ['Giảm nông nghiệp, tăng công nghiệp và dịch vụ','Tăng nông nghiệp','Không đổi','Giảm tất cả'], 0, 'VN dịch chuyển cơ cấu: giảm tỉ trọng nông nghiệp, tăng CN-DV.'),
    Q('Xu hướng việc làm hiện đại?', ['Số hoá, làm việc từ xa, AI','Chỉ nhà máy','Chỉ nông trại','Chỉ giấy bút'], 0, 'Việc làm hiện đại: số hoá, làm việc từ xa, AI thay đổi thị trường lao động.'),
  ]),

  M(17, 'Các ngành kinh tế - Tổng quan', [
    Q('Cơ cấu kinh tế chia thành?', ['Nông nghiệp - Công nghiệp - Dịch vụ','Trồng trọt - chăn nuôi','Sản xuất - tiêu dùng','Vật chất - tinh thần'], 0, 'Ba khu vực kinh tế: I (NN), II (CN), III (DV).'),
    Q('Nước phát triển có cơ cấu kinh tế?', ['Dịch vụ chiếm tỉ trọng cao nhất','Nông nghiệp cao','Công nghiệp cao','Đồng đều'], 0, 'Nước phát triển: dịch vụ chiếm 70-80% GDP.'),
    Q('GDP là?', ['Tổng sản phẩm trong nước','Thu nhập cá nhân','Lương trung bình','Dân số'], 0, 'GDP = Gross Domestic Product — tổng giá trị sản xuất trong nước 1 năm.'),
    Q('GDP bình quân đầu người =?', ['GDP / dân số','Lương / số người','Diện tích / GDP','Sinh / tử'], 0, 'GDP per capita = GDP tổng / số dân.'),
    Q('Quốc gia có GDP cao nhất thế giới?', ['Hoa Kỳ','Việt Nam','Nhật','Đức'], 0, 'Hoa Kỳ là nền kinh tế lớn nhất thế giới về GDP danh nghĩa.'),
    Q('Việt Nam có GDP đứng nhóm?', ['Đang phát triển, top 35-40 thế giới','Top 5','Cuối bảng','Top 1'], 0, 'VN khoảng top 35-40 thế giới về GDP danh nghĩa.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Trái Đất có dạng?', ['Cầu hơi dẹt 2 cực','Đĩa phẳng','Hộp','Nón'], 0, 'Trái Đất là geoid — gần cầu, hơi dẹt 2 cực.'),
    Q('Hệ quả tự quay quanh trục?', ['Ngày đêm + lệch hướng','Mùa','Năm','Tháng'], 0, 'Tự quay → ngày đêm, lực Coriolis, giờ địa phương.'),
    Q('Hệ quả vận động quanh Mặt Trời?', ['Các mùa','Ngày đêm','Giờ','Lực hấp dẫn'], 0, 'Quanh Mặt Trời + trục nghiêng → các mùa.'),
    Q('Việt Nam thuộc đới khí hậu?', ['Nhiệt đới gió mùa','Ôn đới','Hàn đới','Sa mạc'], 0, 'VN nằm ở nhiệt đới ẩm gió mùa.'),
    Q('Cơ cấu kinh tế chia thành?', ['NN - CN - DV','Đông - Tây','Già - trẻ','Lớn - nhỏ'], 0, '3 khu vực: nông nghiệp, công nghiệp, dịch vụ.'),
    Q('Đô thị hoá là?', ['Tăng tỉ lệ dân thành thị','Giảm dân','Tăng nông thôn','Không đổi'], 0, 'Đô thị hoá: dân thành thị tăng + lan lối sống đô thị.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Địa lý nông nghiệp', [
    Q('Nông nghiệp gồm?', ['Trồng trọt, chăn nuôi, lâm nghiệp, thuỷ sản','Chỉ trồng lúa','Chỉ nuôi cá','Chỉ trồng cây'], 0, 'Nông nghiệp mở rộng gồm trồng trọt, chăn nuôi, lâm nghiệp, thuỷ sản.'),
    Q('Cây lương thực chính trên thế giới?', ['Lúa mì, lúa gạo, ngô','Cà phê, ca cao','Cao su, tiêu','Chè, bông'], 0, '3 cây lương thực chính: lúa mì, lúa gạo, ngô.'),
    Q('Vùng trồng lúa gạo lớn nhất thế giới?', ['Đông Á - ĐNA','Bắc Mỹ','Châu Phi','Châu Âu'], 0, 'Trung Quốc, Ấn Độ, ĐNA là vùng trồng lúa gạo lớn nhất.'),
    Q('Yếu tố nào quan trọng nhất với nông nghiệp?', ['Đất, nước, khí hậu','Chỉ vốn','Chỉ lao động','Chỉ thị trường'], 0, 'Đất, nước, khí hậu là 3 yếu tố tự nhiên cốt lõi của nông nghiệp.'),
    Q('Nông nghiệp hữu cơ là?', ['Không dùng hoá chất tổng hợp','Dùng nhiều hoá chất','Chỉ trồng cây kiểng','Nuôi cá biển'], 0, 'Organic farming không dùng hoá chất tổng hợp, hướng đến bền vững.'),
    Q('Nông nghiệp công nghệ cao đặc trưng bởi?', ['Tự động hoá, nhà kính, tưới nhỏ giọt, IoT','Lạc hậu','Thủ công','Không cần khoa học'], 0, 'High-tech agriculture: tự động hoá, IoT, AI, nhà kính, tưới nhỏ giọt.'),
  ]),

  M(20, 'Trồng trọt', [
    Q('Cây lương thực ôn đới chủ yếu là?', ['Lúa mì, lúa mạch, ngô','Lúa gạo, kê','Cao su','Chè'], 0, 'Vùng ôn đới: lúa mì, lúa mạch, ngô là cây lương thực chính.'),
    Q('Cây công nghiệp lâu năm gồm?', ['Cao su, cà phê, ca cao, chè','Lúa gạo','Khoai tây','Sắn'], 0, 'Cao su, cà phê, ca cao, chè là cây công nghiệp lâu năm.'),
    Q('Việt Nam đứng đầu thế giới về xuất khẩu?', ['Hồ tiêu (và thứ 2 cà phê)','Lúa mì','Bông','Cacao'], 0, 'VN top đầu thế giới về xuất khẩu hồ tiêu, cà phê (thứ 2), gạo (thứ 3).'),
    Q('Vùng trồng cà phê lớn nhất Việt Nam?', ['Tây Nguyên','Đồng bằng sông Hồng','Đông Nam Bộ','Trung Bộ'], 0, 'Tây Nguyên (Đắk Lắk, Lâm Đồng) là vùng cà phê lớn nhất VN.'),
    Q('Cây ăn quả nhiệt đới VN xuất khẩu mạnh?', ['Thanh long, vải, xoài, sầu riêng','Táo, lê','Nho','Cherry'], 0, 'Thanh long, vải, xoài, sầu riêng là trái cây xuất khẩu chủ lực của VN.'),
    Q('Cây dược liệu Việt Nam nổi tiếng?', ['Sâm Ngọc Linh','Nhân sâm','Linh chi','Tam thất'], 0, 'Sâm Ngọc Linh ở Kon Tum - Quảng Nam là đặc sản dược liệu của VN.'),
  ]),

  M(21, 'Chăn nuôi và thuỷ sản', [
    Q('Vật nuôi chính trên thế giới?', ['Bò, trâu, lợn, gà, dê, cừu','Chỉ bò','Chỉ gà','Chỉ cá'], 0, 'Vật nuôi chính: bò, trâu, lợn, gà, dê, cừu.'),
    Q('Vùng nuôi bò sữa lớn nhất thế giới?', ['Châu Âu, Bắc Mỹ, New Zealand','Châu Phi','Sa mạc','Bắc Cực'], 0, 'Châu Âu, Bắc Mỹ, NZ có nền chăn nuôi bò sữa phát triển.'),
    Q('Chăn nuôi gia cầm phát triển mạnh ở?', ['Mọi vùng có nhu cầu thực phẩm','Chỉ ôn đới','Chỉ nhiệt đới','Chỉ cực'], 0, 'Gia cầm dễ nuôi, phát triển ở mọi vùng có nhu cầu thực phẩm.'),
    Q('Thuỷ sản gồm?', ['Đánh bắt và nuôi trồng','Chỉ đánh bắt','Chỉ nuôi','Chỉ chế biến'], 0, 'Thuỷ sản chia thành đánh bắt tự nhiên và nuôi trồng.'),
    Q('Việt Nam xuất khẩu thuỷ sản chủ lực là?', ['Cá tra, tôm','Cá ngừ chỉ','Cua biển','Sò huyết'], 0, 'Cá tra (basa) và tôm là 2 mặt hàng thuỷ sản xuất khẩu chủ lực của VN.'),
    Q('Đánh bắt quá mức gây?', ['Cạn kiệt nguồn lợi thuỷ sản','Tăng cá','Hoà bình','Không vấn đề'], 0, 'Đánh bắt quá mức (overfishing) làm cạn kiệt nguồn lợi, mất cân bằng sinh thái.'),
  ]),

  M(22, 'Địa lý lâm nghiệp', [
    Q('Rừng có vai trò?', ['Điều hoà khí hậu, giữ nước, gỗ, ĐDSH','Chỉ làm đẹp','Chỉ gỗ','Không vai trò'], 0, 'Rừng: điều hoà khí hậu, chống xói mòn, giữ nước, gỗ, đa dạng sinh học.'),
    Q('Rừng nhiệt đới ẩm tập trung ở?', ['Amazon, Congo, ĐNA','Bắc cực','Sa mạc Sahara','Châu Âu'], 0, 'Amazon, Congo, ĐNA có rừng nhiệt đới ẩm rộng lớn.'),
    Q('Phá rừng gây?', ['Lũ lụt, xói mòn, biến đổi khí hậu','Mưa nhiều','Mát hơn','Tốt cho khí hậu'], 0, 'Phá rừng → lũ, xói mòn, mất ĐDSH, tăng CO₂.'),
    Q('Việt Nam có tỉ lệ che phủ rừng?', ['~42%','10%','80%','5%'], 0, 'VN che phủ rừng ~42% (2022), tăng đều qua trồng rừng.'),
    Q('Vườn quốc gia là?', ['Khu bảo tồn đa dạng sinh học','Khu công nghiệp','Khu dân cư','Khu thương mại'], 0, 'Vườn quốc gia là khu bảo tồn ĐDSH, nghiên cứu, du lịch sinh thái.'),
    Q('Lâm nghiệp bền vững là?', ['Khai thác đi đôi với trồng và bảo vệ','Khai thác cạn kiệt','Không khai thác gì','Chỉ trồng'], 0, 'Lâm nghiệp bền vững: khai thác có kế hoạch + trồng mới + bảo vệ.'),
  ]),

  M(23, 'Công nghiệp - Tổng quan', [
    Q('Công nghiệp là?', ['Hoạt động chế biến nguyên liệu thành sản phẩm','Trồng trọt','Buôn bán','Vận tải'], 0, 'Công nghiệp = chế biến nguyên liệu thành tư liệu sản xuất và tiêu dùng.'),
    Q('Công nghiệp chia thành 2 nhóm?', ['Nặng và nhẹ','Cao và thấp','Trong và ngoài','Lớn và nhỏ'], 0, 'CN nặng (sắt thép, hoá chất) và CN nhẹ (dệt may, thực phẩm).'),
    Q('Năng lượng là ngành?', ['Công nghiệp năng lượng (điện, dầu khí, than)','Dịch vụ','Nông nghiệp','Du lịch'], 0, 'Ngành năng lượng (điện, dầu khí, than) thuộc CN nặng.'),
    Q('Việt Nam có thế mạnh CN nào?', ['Dệt may, điện tử, da giày, chế biến','Hàng không vũ trụ','Vi mạch siêu nhỏ','Robot'], 0, 'VN mạnh về dệt may, điện tử lắp ráp, da giày, chế biến thuỷ sản.'),
    Q('Cách mạng công nghiệp 4.0 đặc trưng?', ['AI, IoT, big data, robot','Hơi nước','Điện','Dây chuyền'], 0, 'CMCN 4.0: AI, IoT, big data, robot, in 3D.'),
    Q('Yếu tố ảnh hưởng phân bố CN?', ['Nguyên liệu, năng lượng, lao động, thị trường','Chỉ khí hậu','Chỉ đất','Không gì'], 0, 'Phân bố CN phụ thuộc nguyên liệu, năng lượng, lao động, vốn, thị trường, hạ tầng.'),
  ]),

  M(24, 'Một số ngành công nghiệp chính', [
    Q('Công nghiệp điện lực gồm?', ['Nhiệt điện, thuỷ điện, năng lượng tái tạo','Chỉ than','Chỉ dầu','Chỉ hạt nhân'], 0, 'Điện lực: nhiệt điện than/khí, thuỷ điện, hạt nhân, gió, mặt trời.'),
    Q('Công nghiệp dầu khí lớn ở?', ['Trung Đông, Nga, Bắc Mỹ','Cực Bắc','Sa mạc Sahara','Tây Tạng'], 0, 'Trung Đông (Arab Saudi, UAE), Nga, Mỹ là nước dầu khí lớn.'),
    Q('Công nghiệp sản xuất thép lớn ở?', ['Trung Quốc, Nhật, Hàn, EU, Mỹ, Ấn','Châu Phi','Châu Úc','Châu Mỹ Latin'], 0, 'Trung Quốc dẫn đầu sản xuất thép thế giới.'),
    Q('Công nghiệp điện tử - tin học tập trung ở?', ['Đông Á (Trung, Hàn, Nhật, Đài Loan), Mỹ, EU','Châu Phi','Châu Úc','Châu Phi'], 0, 'Trung Quốc, Đài Loan, Hàn Quốc, Nhật là trung tâm điện tử thế giới.'),
    Q('Công nghiệp dệt may VN đứng?', ['Top 3 thế giới','Top 1','Top 50','Cuối bảng'], 0, 'VN nằm trong top 3 thế giới về xuất khẩu dệt may.'),
    Q('Công nghiệp chế biến lương thực thực phẩm phát triển ở?', ['Mọi nơi có nguyên liệu','Chỉ thành thị','Chỉ nông thôn','Chỉ ven biển'], 0, 'CN chế biến phát triển ở khắp nơi có nguyên liệu nông nghiệp/thuỷ sản.'),
  ]),

  M(25, 'Địa lý dịch vụ', [
    Q('Dịch vụ là khu vực kinh tế?', ['Phục vụ sản xuất và tiêu dùng','Chế tạo hàng hoá','Trồng cây','Khai khoáng'], 0, 'Dịch vụ phục vụ nhu cầu sản xuất, tiêu dùng và xã hội.'),
    Q('Dịch vụ gồm 3 nhóm chính?', ['Sản xuất, tiêu dùng, công cộng','Cá nhân, gia đình, xã hội','Đắt, rẻ, vừa','Quốc gia, quốc tế, địa phương'], 0, 'DV sản xuất (logistics, tài chính), tiêu dùng (bán lẻ, du lịch), công cộng (giáo dục, y tế).'),
    Q('Du lịch là?', ['Ngành dịch vụ phục vụ du khách','Ngành công nghiệp nặng','Nông nghiệp','Khai mỏ'], 0, 'Du lịch là dịch vụ phục vụ nhu cầu nghỉ dưỡng, tham quan.'),
    Q('Việt Nam có thế mạnh du lịch nào?', ['Du lịch biển, văn hoá, sinh thái','Du lịch vũ trụ','Du lịch sa mạc','Du lịch băng tuyết'], 0, 'VN mạnh du lịch biển (Hạ Long, Phú Quốc), văn hoá (Huế, Hội An), sinh thái (Phong Nha).'),
    Q('Tài chính - ngân hàng tập trung ở?', ['Đô thị lớn','Nông thôn','Sa mạc','Vùng cực'], 0, 'NY, London, Tokyo, Singapore, HK là trung tâm tài chính lớn nhất thế giới.'),
    Q('Tỉ trọng dịch vụ trong GDP các nước phát triển?', ['70-80%','10%','30%','50%'], 0, 'Nước phát triển: dịch vụ chiếm 70-80% GDP.'),
  ]),

  M(26, 'Giao thông vận tải và thông tin liên lạc', [
    Q('Các loại hình giao thông gồm?', ['Đường bộ, sắt, thuỷ, hàng không, ống dẫn','Chỉ đường bộ','Chỉ hàng không','Chỉ sắt'], 0, '5 loại hình chính: đường bộ, sắt, thuỷ, hàng không, ống dẫn.'),
    Q('Vận tải hàng hoá đường dài tốt nhất bằng?', ['Đường biển','Đường bộ','Hàng không','Đi bộ'], 0, 'Đường biển vận chuyển hàng hoá lớn, đường dài rẻ nhất.'),
    Q('Vận tải nhanh nhất là?', ['Hàng không','Đường bộ','Đường sắt','Đường thuỷ'], 0, 'Hàng không là phương thức nhanh nhất, dùng cho hàng giá trị cao và hành khách.'),
    Q('Cảng biển lớn nhất thế giới?', ['Thượng Hải','New York','Hamburg','Singapore'], 0, 'Cảng Thượng Hải là cảng container lớn nhất thế giới.'),
    Q('Sân bay quốc tế lớn nhất VN?', ['Tân Sơn Nhất và Nội Bài','Phú Bài','Cát Bi','Đà Nẵng'], 0, 'Tân Sơn Nhất (HCM) và Nội Bài (HN) là 2 sân bay quốc tế lớn nhất VN.'),
    Q('Internet làm thay đổi?', ['Cách giao tiếp, kinh doanh, học tập','Không gì','Chỉ giải trí','Chỉ liên lạc'], 0, 'Internet cách mạng hoá mọi mặt: kinh doanh, giáo dục, giao tiếp, giải trí.'),
  ]),

  M(27, 'Thương mại quốc tế', [
    Q('Thương mại quốc tế là?', ['Trao đổi hàng hoá - dịch vụ giữa các nước','Buôn bán trong nước','Sản xuất','Tiêu dùng'], 0, 'Thương mại quốc tế = xuất - nhập khẩu giữa các quốc gia.'),
    Q('Xuất khẩu là?', ['Bán hàng ra nước ngoài','Mua hàng nước ngoài','Sản xuất trong nước','Tiêu dùng trong nước'], 0, 'Xuất khẩu (export): bán hàng hoá, dịch vụ ra nước ngoài.'),
    Q('Nhập khẩu là?', ['Mua hàng nước ngoài','Bán hàng ra nước ngoài','Đầu tư','Vay nợ'], 0, 'Nhập khẩu (import): mua hàng từ nước ngoài.'),
    Q('Cán cân thương mại =?', ['Xuất khẩu - Nhập khẩu','Xuất + Nhập','GDP - GNI','Sinh - tử'], 0, 'Cán cân thương mại = giá trị xuất khẩu - giá trị nhập khẩu.'),
    Q('WTO viết tắt là?', ['Tổ chức Thương mại Thế giới','Liên Hợp Quốc','Liên minh châu Âu','ASEAN'], 0, 'WTO = World Trade Organization — tổ chức điều phối thương mại thế giới.'),
    Q('Việt Nam gia nhập WTO năm?', ['2007','1995','2000','2015'], 0, 'VN chính thức trở thành thành viên WTO ngày 11/1/2007.'),
  ]),

  M(28, 'Toàn cầu hoá và hội nhập quốc tế', [
    Q('Toàn cầu hoá là?', ['Quá trình gắn kết kinh tế - văn hoá - chính trị các nước','Chỉ kinh tế','Chỉ văn hoá','Cách ly'], 0, 'Toàn cầu hoá (globalization) gắn kết các quốc gia trên mọi lĩnh vực.'),
    Q('Hệ quả tích cực của toàn cầu hoá?', ['Mở rộng thị trường, chuyển giao công nghệ','Mất bản sắc','Cô lập','Phá hoại'], 0, 'TCH mở rộng thị trường, công nghệ, đầu tư, giao lưu văn hoá.'),
    Q('Hệ quả tiêu cực của toàn cầu hoá?', ['Phân hoá giàu nghèo, mất bản sắc, dịch bệnh lan nhanh','Hoà bình','Bình đẳng tuyệt đối','Sạch sẽ'], 0, 'TCH có thể gia tăng bất bình đẳng, ô nhiễm, dịch bệnh lan nhanh.'),
    Q('ASEAN là?', ['Hiệp hội các quốc gia Đông Nam Á','Liên minh châu Âu','Liên Hợp Quốc','NATO'], 0, 'ASEAN thành lập 1967, hiện có 10 thành viên ĐNA.'),
    Q('Việt Nam gia nhập ASEAN năm?', ['1995','1967','2000','2007'], 0, 'VN gia nhập ASEAN ngày 28/7/1995.'),
    Q('FTA viết tắt là?', ['Hiệp định Thương mại tự do','Đầu tư trực tiếp','Vay vốn','Bảo hiểm'], 0, 'FTA = Free Trade Agreement — hiệp định thương mại tự do.'),
  ]),

  M(29, 'Môi trường và tài nguyên', [
    Q('Môi trường là?', ['Tổng thể các yếu tố tự nhiên - xã hội bao quanh con người','Chỉ tự nhiên','Chỉ xã hội','Chỉ không khí'], 0, 'Môi trường = tổng thể tự nhiên + xã hội + nhân tạo xung quanh con người.'),
    Q('Tài nguyên thiên nhiên chia thành?', ['Tái tạo và không tái tạo','Lớn và nhỏ','Mới và cũ','Cao và thấp'], 0, 'Tài nguyên tái tạo (nước, gió, mặt trời) và không tái tạo (khoáng sản, dầu).'),
    Q('Tài nguyên không tái tạo là?', ['Khoáng sản, dầu khí','Năng lượng mặt trời','Gió','Nước'], 0, 'Khoáng sản, dầu khí, than đá là tài nguyên không tái tạo.'),
    Q('Năng lượng tái tạo gồm?', ['Mặt trời, gió, thuỷ, sinh khối','Than, dầu','Hạt nhân','Khí gas'], 0, 'Năng lượng tái tạo: mặt trời, gió, thuỷ điện, sinh khối, địa nhiệt.'),
    Q('Ô nhiễm môi trường gồm?', ['Không khí, nước, đất, tiếng ồn','Chỉ không khí','Chỉ nước','Chỉ đất'], 0, 'Các loại ô nhiễm: không khí, nước, đất, tiếng ồn, ánh sáng, phóng xạ.'),
    Q('Biến đổi khí hậu do?', ['Khí nhà kính tăng (CO₂, CH₄)','Mặt trời nguội','Trái Đất xa Mặt Trời','Núi lửa phun'], 0, 'BĐKH chủ yếu do tích luỹ khí nhà kính từ hoạt động con người.'),
  ]),

  M(30, 'Phát triển bền vững', [
    Q('Phát triển bền vững là?', ['Đáp ứng nhu cầu hiện tại mà không tổn hại tương lai','Tăng GDP bằng mọi giá','Phá rừng','Khai thác cạn kiệt'], 0, 'PTBV (Brundtland, 1987): đáp ứng nhu cầu hiện tại mà không tổn hại thế hệ sau.'),
    Q('PTBV dựa trên 3 trụ cột?', ['Kinh tế - Xã hội - Môi trường','Đất - nước - không khí','Sản xuất - tiêu dùng - lưu thông','Cá nhân - gia đình - xã hội'], 0, 'PTBV cân bằng 3 trụ cột: kinh tế + xã hội + môi trường.'),
    Q('17 Mục tiêu PTBV (SDGs) do?', ['Liên Hợp Quốc đề ra 2015','WTO','EU','ASEAN'], 0, 'LHQ ban hành 17 SDGs năm 2015 cho tới 2030.'),
    Q('Năng lượng xanh là?', ['Năng lượng sạch không thải nhiều khí nhà kính','Năng lượng đắt','Năng lượng cao','Năng lượng nguy hiểm'], 0, 'Năng lượng xanh: mặt trời, gió, thuỷ, ít phát thải CO₂.'),
    Q('Tăng trưởng xanh là?', ['Tăng trưởng kinh tế gắn với bảo vệ môi trường','Tăng trưởng nhanh bằng mọi giá','Không tăng','Suy thoái'], 0, 'Tăng trưởng xanh: phát triển kinh tế thân thiện môi trường.'),
    Q('Hành động cá nhân cho PTBV?', ['Tiết kiệm điện, nước, phân loại rác','Lãng phí','Đốt rác','Phá rừng'], 0, 'Cá nhân: tiết kiệm tài nguyên, phân loại rác, đi xe đạp/công cộng.'),
  ]),

  M(31, 'Các tổ chức quốc tế', [
    Q('Liên Hợp Quốc (LHQ) thành lập năm?', ['1945','1919','1900','2000'], 0, 'LHQ thành lập ngày 24/10/1945 sau Thế chiến II.'),
    Q('Cơ quan cao nhất của LHQ là?', ['Đại hội đồng','Hội đồng Bảo an','Tổng thư ký','Toà án quốc tế'], 0, 'Đại hội đồng LHQ gồm 193 thành viên, mỗi nước 1 phiếu.'),
    Q('Hội đồng Bảo an LHQ có 5 thành viên thường trực?', ['Mỹ, Nga, Trung, Anh, Pháp','Mỹ, Nhật, Đức, Anh, Pháp','Mỹ, Trung, Ấn, Anh, Pháp','Anh, Pháp, Đức, Ý, Tây Ban Nha'], 0, 'P5: Mỹ, Nga, Trung Quốc, Anh, Pháp — có quyền phủ quyết.'),
    Q('IMF là?', ['Quỹ Tiền tệ Quốc tế','Liên Hợp Quốc','WTO','UNESCO'], 0, 'IMF = International Monetary Fund — Quỹ Tiền tệ Quốc tế.'),
    Q('WHO là?', ['Tổ chức Y tế Thế giới','Tổ chức Lao động Quốc tế','Quỹ Nhi đồng','Tổ chức Thương mại'], 0, 'WHO = World Health Organization — Tổ chức Y tế Thế giới.'),
    Q('Việt Nam gia nhập LHQ năm?', ['1977','1945','1995','2007'], 0, 'VN gia nhập LHQ ngày 20/9/1977.'),
  ]),

  M(32, 'Liên minh khu vực', [
    Q('Liên minh châu Âu (EU) hiện có?', ['27 thành viên','15','50','10'], 0, 'EU hiện có 27 thành viên sau khi Anh rời (Brexit 2020).'),
    Q('Đồng tiền chung EU là?', ['Euro','USD','Pound','Yen'], 0, 'Đồng Euro lưu hành trong khu vực Eurozone từ 1999.'),
    Q('NAFTA (nay USMCA) gồm?', ['Mỹ - Canada - Mexico','Mỹ - Brazil - Argentina','Anh - Pháp - Đức','Nhật - Hàn - Trung'], 0, 'USMCA (2020) thay NAFTA, gồm Mỹ - Canada - Mexico.'),
    Q('ASEAN có?', ['10 thành viên','5','15','20'], 0, 'ASEAN 10: Brunei, Campuchia, Indonesia, Lào, Malaysia, Myanmar, Philippines, Singapore, Thái Lan, Việt Nam.'),
    Q('AEC (cộng đồng kinh tế ASEAN) thành lập?', ['2015','2007','1995','2020'], 0, 'AEC chính thức hình thành 31/12/2015.'),
    Q('APEC là?', ['Diễn đàn Hợp tác Kinh tế châu Á - Thái Bình Dương','Hiệp định thương mại','Tổ chức quân sự','Quỹ nhân đạo'], 0, 'APEC là diễn đàn kinh tế gồm 21 nền kinh tế quanh Thái Bình Dương.'),
  ]),

  M(33, 'Việt Nam hội nhập quốc tế', [
    Q('Việt Nam là thành viên của các tổ chức?', ['LHQ, WTO, ASEAN, APEC...','Chỉ ASEAN','Chỉ LHQ','Không tham gia'], 0, 'VN là thành viên của LHQ, WTO, ASEAN, APEC, UNESCO, WHO...'),
    Q('VN đã ký các FTA lớn như?', ['EVFTA, CPTPP, RCEP','Chỉ với Trung Quốc','Chỉ với Mỹ','Chỉ ASEAN'], 0, 'VN tham gia EVFTA (EU), CPTPP (Thái Bình Dương), RCEP, nhiều FTA song phương.'),
    Q('EVFTA là?', ['FTA Việt Nam - EU','FTA Việt - Mỹ','FTA Việt - Nhật','FTA Việt - Trung'], 0, 'EVFTA = EU-Vietnam Free Trade Agreement, có hiệu lực 8/2020.'),
    Q('CPTPP gồm?', ['11 nước Thái Bình Dương','3 nước','27 nước','50 nước'], 0, 'CPTPP 11 thành viên: Nhật, Canada, Úc, NZ, VN, Singapore, Malaysia, Brunei, Mexico, Chile, Peru.'),
    Q('VN gia nhập APEC năm?', ['1998','1995','2007','2020'], 0, 'VN gia nhập APEC năm 1998 và đã 2 lần đăng cai (2006, 2017).'),
    Q('Định hướng đối ngoại của VN?', ['Đa phương, đa dạng, độc lập','Đóng cửa','Theo 1 nước','Chống tất cả'], 0, 'VN theo đường lối đối ngoại độc lập, tự chủ, đa phương hoá, đa dạng hoá.'),
  ]),

  M(34, 'Địa lý ứng dụng - GIS và viễn thám', [
    Q('GIS là?', ['Hệ thông tin địa lý','Truyền hình vệ tinh','Hệ định vị','Hệ phân tích thời tiết'], 0, 'GIS = Geographic Information System — quản lý dữ liệu không gian.'),
    Q('Viễn thám (remote sensing) là?', ['Thu thập thông tin về Trái Đất từ xa (vệ tinh, máy bay)','Đi thực địa','Đọc bản đồ giấy','Nghe đài'], 0, 'Viễn thám: thu thập thông tin từ xa qua vệ tinh, máy bay, drone.'),
    Q('GPS là?', ['Hệ định vị toàn cầu','Hệ bản đồ','Hệ thời tiết','Hệ tài chính'], 0, 'GPS = Global Positioning System — định vị toàn cầu qua vệ tinh.'),
    Q('Ứng dụng GIS trong đời sống?', ['Quy hoạch đô thị, giao thông, môi trường','Chỉ học sinh dùng','Chỉ quân đội','Không có ứng dụng'], 0, 'GIS dùng rộng rãi trong quy hoạch, môi trường, kinh doanh, y tế công cộng.'),
    Q('Bản đồ số khác bản đồ giấy ở?', ['Có thể tương tác, cập nhật, phân tích','Không khác','Đắt hơn','Khó dùng'], 0, 'Bản đồ số tương tác, cập nhật và phân tích được — Google Maps là ví dụ.'),
    Q('Big data trong địa lý dùng để?', ['Phân tích xu hướng dân cư, giao thông, môi trường','Vô dụng','Chỉ giải trí','Chỉ nghiên cứu'], 0, 'Big data trong địa lý phân tích di chuyển, dân cư, môi trường ở quy mô lớn.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Trái Đất có 5 đới khí hậu chính?', ['Đúng (1 nhiệt + 2 ôn + 2 hàn)','Sai','Có 3 đới','Có 7 đới'], 0, '5 đới: nhiệt đới (1), ôn đới (2), hàn đới (2).'),
    Q('Vòng tuần hoàn nước gồm?', ['Bốc hơi → ngưng tụ → mưa → dòng chảy','Chỉ mưa','Chỉ bốc hơi','Không có'], 0, 'Bốc hơi - ngưng tụ - mưa - dòng chảy tạo chu trình nước.'),
    Q('Đô thị hoá quá nhanh gây?', ['Quá tải hạ tầng, ô nhiễm','Hoà bình','Sạch sẽ','Giàu lên ngay'], 0, 'Đô thị hoá nhanh khiến hạ tầng quá tải, ô nhiễm, nghèo đô thị.'),
    Q('Cơ cấu kinh tế hiện đại?', ['Dịch vụ chiếm tỉ trọng cao','Nông nghiệp cao','CN nặng cao','Đồng đều'], 0, 'Nước phát triển: dịch vụ chiếm 70-80% GDP.'),
    Q('Phát triển bền vững dựa trên?', ['Kinh tế - Xã hội - Môi trường','Chỉ kinh tế','Chỉ môi trường','Chỉ xã hội'], 0, 'PTBV cân bằng 3 trụ cột: KT - XH - MT.'),
    Q('VN hội nhập kinh tế qua?', ['WTO, ASEAN, EVFTA, CPTPP, RCEP','Chỉ WTO','Chỉ ASEAN','Không hội nhập'], 0, 'VN hội nhập sâu qua nhiều tổ chức và FTA lớn.'),
  ]),
];

export const H10DIA_SCENARIOS = indexBy(H10DIA_WEEKS);
