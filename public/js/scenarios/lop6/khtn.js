// ============================================================
// Lớp 6 · KHOA HỌC TỰ NHIÊN (KHTN) — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám CT GDPT 2018: tích hợp Vật lý + Hoá học + Sinh học.
// HK1: Mở đầu KHTN · Đo lường · Chất – Vật liệu – Nhiên liệu · Hỗn hợp · Tế bào.
// HK2: Cơ thể đa bào · Phân loại sinh giới · Lực · Năng lượng · Trái Đất – Hệ Mặt Trời.
// ID prefix: "S6KHTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6KHTN', 'khtn', n, title, qs, opts);

export const S6KHTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Giới thiệu Khoa học tự nhiên — các lĩnh vực, vai trò', [
    Q('Khoa học tự nhiên (KHTN) là ngành khoa học nghiên cứu về?', ['Lịch sử các triều đại', 'Tâm lý con người', 'Các hiện tượng, sự vật trong tự nhiên', 'Luật pháp xã hội'], 2, 'KHTN nghiên cứu các sự vật, hiện tượng trong thế giới tự nhiên.'),
    Q('KHTN ở Lớp 6 tích hợp các phân môn nào?', ['Toán, Văn, Anh', 'Nhạc, Hoạ, Thể dục', 'Vật lý, Hoá học, Sinh học', 'Sử, Địa, GDCD'], 2, 'KHTN tích hợp 3 lĩnh vực: Lý – Hoá – Sinh.'),
    Q('Lĩnh vực nào nghiên cứu về sự sống, cây cối và động vật?', ['Sinh học', 'Hoá học', 'Vật lý', 'Thiên văn'], 0, 'Sinh học nghiên cứu các sinh vật.'),
    Q('Lĩnh vực nào nghiên cứu về chất và sự biến đổi của chất?', ['Vật lý', 'Y học', 'Hoá học', 'Sinh học'], 2, 'Hoá học nghiên cứu chất.'),
    Q('Lĩnh vực nào nghiên cứu về chuyển động, lực, năng lượng?', ['Sinh học', 'Địa lý', 'Vật lý', 'Hoá học'], 2, 'Vật lý nghiên cứu vận động vật chất, năng lượng.'),
    Q('Vai trò quan trọng của KHTN đối với đời sống là?', ['Không có giá trị thực tiễn', 'Chỉ để thi cử', 'Chỉ dành cho nhà khoa học', 'Cung cấp tri thức, giúp ứng dụng vào sản xuất – đời sống'], 3, 'KHTN tạo nền tảng cho công nghệ, y học, sản xuất.'),
    Q('Khi nghiên cứu KHTN, bước đầu tiên thường là?', ['Quan sát hiện tượng', 'Kết luận ngay', 'Viết báo cáo', 'Nhận giải thưởng'], 0, 'Phương pháp KHTN bắt đầu từ quan sát.'),
  ]),

  M(2, 'Một số dụng cụ đo và kính hiển vi', [
    Q('Dụng cụ dùng để đo chiều dài là?', ['Thước', 'Đồng hồ', 'Thước cặp dùng đo khối lượng nhỏ', 'Nhiệt kế'], 0, 'Thước (thước kẻ, thước dây, thước cuộn) đo độ dài.'),
    Q('Dụng cụ dùng để đo khối lượng là?', ['Cân', 'Thước dây', 'Kính lúp', 'Bình chia độ'], 0, 'Cân đo khối lượng (kg, g).'),
    Q('Dụng cụ dùng để đo thời gian là?', ['Thước dây', 'Nhiệt kế', 'Đồng hồ', 'Ống đong'], 2, 'Đồng hồ đo thời gian (giờ, phút, giây).'),
    Q('Kính lúp dùng để?', ['Cân chính xác', 'Đo nhiệt độ', 'Quan sát vật nhỏ với độ phóng đại không lớn', 'Đo khối lượng'], 2, 'Kính lúp phóng đại vài đến vài chục lần.'),
    Q('Để quan sát tế bào, ta cần dùng?', ['Mắt thường', 'Kính hiển vi', 'Kính râm', 'Kính lúp đơn giản'], 1, 'Kính hiển vi phóng đại hàng trăm đến nghìn lần.'),
    Q('Đơn vị đo khối lượng cơ bản trong hệ SI là?', ['giây (s)', 'mét (m)', 'lít (L)', 'kilôgam (kg)'], 3, 'Kilôgam là đơn vị khối lượng chuẩn SI.'),
    Q('Bình chia độ thường được dùng để đo?', ['Khối lượng', 'Chiều dài', 'Nhiệt độ', 'Thể tích chất lỏng'], 3, 'Bình chia độ đo thể tích.'),
  ]),

  M(3, 'An toàn trong phòng thực hành', [
    Q('Khi vào phòng thực hành KHTN, em cần?', ['Tuân thủ nội quy, mặc áo bảo hộ nếu có', 'Tự ý lấy hoá chất chơi', 'Chạy nhảy đùa giỡn', 'Ăn uống trong phòng'], 0, 'An toàn là quy tắc số 1.'),
    Q('Khi đun nóng hoá chất trong ống nghiệm, em phải?', ['Hướng miệng ống nghiệm ra xa người', 'Hướng miệng ống về phía bạn', 'Cầm ống bằng tay không', 'Đậy kín miệng ống'], 0, 'Tránh hoá chất bắn vào người.'),
    Q('Khi bị hoá chất dính vào da, em cần?', ['Bỏ qua', 'Bôi thêm hoá chất khác', 'Lau bằng giẻ bẩn', 'Rửa ngay với nhiều nước sạch, báo giáo viên'], 3, 'Rửa sạch ngay rồi báo người lớn.'),
    Q('Biểu tượng đầu lâu trên chai hoá chất nghĩa là?', ['Chất ăn được', 'Chất rẻ tiền', 'Chất độc', 'Chất thơm'], 2, 'Đầu lâu = cảnh báo độc hại.'),
    Q('Hành vi nào KHÔNG được phép trong phòng thực hành?', ['Nếm thử hoá chất', 'Đeo kính bảo hộ', 'Rửa tay sau khi làm thí nghiệm', 'Ghi chép cẩn thận'], 0, 'Tuyệt đối không nếm hoá chất.'),
    Q('Sau khi làm thí nghiệm xong, em phải?', ['Dọn dẹp, rửa dụng cụ, rửa tay sạch', 'Để nguyên hoá chất trên bàn', 'Đổ chất thải xuống bồn rửa tuỳ ý', 'Bỏ chạy ra ngoài'], 0, 'Vệ sinh và xử lý chất thải đúng nơi quy định.'),
  ]),

  M(4, 'Đo chiều dài và khối lượng', [
    Q('Đơn vị đo chiều dài trong hệ SI là?', ['kilôgam', 'centimet (cm) — đơn vị nhỏ hơn mét', 'mét (m)', 'kilômét (km) — đơn vị bội của mét'], 2, 'Mét là đơn vị chuẩn đo chiều dài.'),
    Q('1 mét bằng?', ['1000 cm', '10 cm', '10000 cm', '100 cm'], 3, '1 m = 100 cm = 1000 mm.'),
    Q('1 km bằng?', ['10000 m', '100 m', '500 m', '1000 m'], 3, '1 km = 1000 m.'),
    Q('Để đo chiều dài bàn học, dùng dụng cụ nào phù hợp nhất?', ['Thước kẻ 20 cm', 'Cân điện tử', 'Thước cuộn / thước dây 2 m', 'Đồng hồ bấm giờ'], 2, 'Cần thước có giới hạn đo phù hợp.'),
    Q('Khi đọc kết quả đo chiều dài, mắt phải?', ['Nhìn nghiêng', 'Nhìn từ xa', 'Nhìn vuông góc với vạch chia của thước', 'Nhắm một mắt nhìn'], 2, 'Tránh sai số do nhìn nghiêng.'),
    Q('1 kg bằng?', ['10000 g', '100 g', '1000 g', '10 g'], 2, '1 kg = 1000 g.'),
    Q('Trước khi cân vật, ta cần?', ['Điều chỉnh kim cân về số 0', 'Đặt vật trước rồi mới chỉnh', 'Đập mạnh cân', 'Bỏ qua bước này'], 0, 'Hiệu chỉnh cân về 0 trước khi cân.'),
  ]),

  M(5, 'Đo thời gian và nhiệt độ', [
    Q('Đơn vị đo thời gian trong hệ SI là?', ['phút (min)', 'giờ (h)', 'giây (s)', 'kilôgam'], 2, 'Giây là đơn vị thời gian chuẩn.'),
    Q('1 phút bằng?', ['1000 giây', '10 giây', '60 giây', '100 giây'], 2, '1 phút = 60 s.'),
    Q('1 giờ bằng?', ['120 phút', '60 phút', '100 phút', '30 phút'], 1, '1 giờ = 60 phút = 3600 s.'),
    Q('Để đo thời gian một học sinh chạy 60 m, dụng cụ phù hợp là?', ['Đồng hồ treo tường (chỉ giờ–phút)', 'Đồng hồ bấm giây', 'Đồng hồ cát', 'Nhiệt kế'], 1, 'Đồng hồ bấm giây đo khoảng thời gian ngắn.'),
    Q('Nhiệt kế dùng để đo?', ['Khối lượng', 'Thời gian', 'Nhiệt độ', 'Chiều dài'], 2, 'Nhiệt kế đo nhiệt độ.'),
    Q('Nhiệt độ thường của cơ thể người khoẻ mạnh khoảng?', ['25 °C', '100 °C', '37 °C', '50 °C'], 2, 'Khoảng 36,5–37 °C.'),
    Q('Đơn vị đo nhiệt độ phổ biến ở Việt Nam là?', ['độ C (°C)', 'kelvin', 'độ K (Kelvin) — đơn vị SI ít dùng dân dụng', 'độ F (Fahrenheit) — phổ biến ở Mỹ'], 0, '°C (Celsius) thường dùng.'),
    Q('Khi đo nhiệt độ một cốc nước, ta phải nhúng bầu nhiệt kế?', ['Chỉ chạm một góc', 'Sát đáy cốc', 'Trên mặt nước', 'Ngập trong nước, không chạm đáy/thành cốc'], 3, 'Bầu chìm trong chất lỏng để đo chính xác.'),
  ]),

  M(6, 'Sự đa dạng của chất — ba thể rắn, lỏng, khí', [
    Q('Mọi vật quanh ta đều được tạo nên từ?', ['Ánh sáng thuần tuý', 'Suy nghĩ', 'Bóng tối', 'Chất'], 3, 'Chất là thành phần của mọi vật thể.'),
    Q('Chất có thể tồn tại ở mấy thể cơ bản?', ['5', '1', '3', '2'], 2, 'Ba thể: rắn, lỏng, khí.'),
    Q('Ở thể rắn, các hạt cấu tạo chất?', ['Bay tự do', 'Chuyển động hỗn loạn, xa nhau', 'Biến mất', 'Sắp xếp chặt chẽ, dao động tại chỗ'], 3, 'Hạt ở thể rắn liên kết chặt.'),
    Q('Ở thể khí, các hạt?', ['Bám chặt vào thành bình', 'Chuyển động hỗn loạn, ở xa nhau', 'Liên kết rất chặt', 'Đứng yên hoàn toàn'], 1, 'Hạt thể khí chuyển động tự do, xa nhau.'),
    Q('Khi đun nước đá, nó chuyển từ thể nào sang thể nào?', ['Rắn → lỏng', 'Lỏng → khí', 'Rắn → khí', 'Khí → rắn'], 0, 'Nước đá tan thành nước lỏng (nóng chảy).'),
    Q('Khi nước bay hơi, đó là sự chuyển thể từ?', ['Rắn → khí', 'Lỏng → khí', 'Lỏng → rắn', 'Khí → lỏng'], 1, 'Bay hơi: lỏng → khí.'),
    Q('Tính chất chung của chất ở thể lỏng là?', ['Không thể nhìn thấy', 'Chiếm toàn bộ thể tích bình chứa', 'Có hình dạng cố định', 'Có thể tích xác định, dễ chảy, không có hình dạng cố định'], 3, 'Lỏng giữ thể tích, lấy hình bình chứa.'),
  ]),

  M(7, 'Oxygen (Oxi) — vai trò với sự sống và sự cháy', [
    Q('Khí cần thiết cho hô hấp của con người và động vật là?', ['Khí oxygen (O2)', 'Khí carbon dioxide (CO2)', 'Khí methane', 'Khí nitrogen (N2)'], 0, 'O2 dùng cho hô hấp tế bào.'),
    Q('Trong không khí, oxygen chiếm khoảng bao nhiêu phần trăm thể tích?', ['50%', '21%', '78%', '1%'], 1, 'Khoảng 21% thể tích không khí là O2.'),
    Q('Oxygen rất cần cho?', ['Sự cháy và sự hô hấp', 'Việc tắt lửa', 'Việc làm lạnh', 'Việc gây ngủ'], 0, 'Oxygen duy trì cháy và hô hấp.'),
    Q('Một ngọn nến đậy kín trong cốc thuỷ tinh sẽ?', ['Tắt sau một lúc do hết O2', 'Cháy bùng lên do tích tụ khí CO2', 'Cháy to hơn', 'Cháy mãi mãi'], 0, 'Hết O2 → nến tắt.'),
    Q('Cây xanh có vai trò?', ['Giải phóng O2 nhờ quang hợp', 'Tạo ra khí độc', 'Hấp thụ hết O2 trong không khí', 'Không ảnh hưởng tới O2'], 0, 'Cây quang hợp tạo O2.'),
    Q('Khí thường dùng cho người bệnh thiếu hô hấp ở bệnh viện là?', ['Helium', 'Oxygen', 'Carbon dioxide', 'Methane'], 1, 'Bình oxy y tế hỗ trợ thở.'),
  ]),

  M(8, 'Thành phần không khí — ô nhiễm và bảo vệ', [
    Q('Thành phần chính của không khí (theo thể tích) là?', ['Nitrogen (~78%) và Oxygen (~21%)', 'Chỉ hơi nước', 'Chỉ O2', 'Chỉ CO2'], 0, 'N2 ~78%, O2 ~21%, còn lại là khí khác và hơi nước.'),
    Q('Khí carbon dioxide (CO2) trong không khí có vai trò?', ['Cung cấp cho cây quang hợp', 'Dập lửa hoàn toàn', 'Cho người thở', 'Tạo mưa axit'], 0, 'CO2 là nguyên liệu quang hợp.'),
    Q('Nguyên nhân chính gây ô nhiễm không khí ở đô thị là?', ['Cây xanh', 'Hồ nước', 'Khí thải từ xe cộ, nhà máy', 'Mưa rào'], 2, 'Xe cộ và nhà máy thải nhiều khí độc.'),
    Q('Biện pháp nào giúp giảm ô nhiễm không khí?', ['Mở rộng nhà máy không xử lý khí', 'Phá rừng', 'Trồng nhiều cây xanh, dùng phương tiện công cộng', 'Đốt nhiều rác'], 2, 'Trồng cây và giảm khí thải.'),
    Q('Khi không khí ô nhiễm nặng, em nên?', ['Đốt thêm lá khô', 'Đeo khẩu trang, hạn chế ra ngoài', 'Hít thật sâu', 'Tập thể dục ngoài trời lâu hơn'], 1, 'Bảo vệ hệ hô hấp.'),
    Q('Mưa axit chủ yếu do?', ['Khí SO2, NOx từ nhà máy thải ra hoà với nước mưa', 'Mặt Trời', 'Cây xanh', 'Đất sạch'], 0, 'SO2, NOx → axit hoà trong mưa.'),
  ]),

  M(9, 'Một số vật liệu thông dụng (1) — kim loại, nhựa', [
    Q('Vật liệu nào dẫn điện và dẫn nhiệt tốt?', ['Kim loại', 'Gỗ khô', 'Thuỷ tinh', 'Cao su'], 0, 'Kim loại dẫn điện, dẫn nhiệt tốt.'),
    Q('Đồ vật bằng nhôm, sắt, đồng được làm từ?', ['Kim loại', 'Đất sét', 'Thực vật', 'Hợp kim phi kim'], 0, 'Đó là các kim loại phổ biến.'),
    Q('Tính chất quan trọng của nhựa là?', ['Rất nặng', 'Nhẹ, cách điện, khó phân huỷ', 'Dẫn điện rất tốt', 'Tan trong nước'], 1, 'Nhựa nhẹ, cách điện, bền lâu.'),
    Q('Nhược điểm môi trường của đồ nhựa là?', ['Không gây ô nhiễm', 'Khó phân huỷ, gây ô nhiễm lâu dài', 'Tự biến mất sau 1 ngày', 'Dễ tan trong nước'], 1, 'Nhựa tồn tại hàng trăm năm trong môi trường.'),
    Q('Để hạn chế rác thải nhựa, em nên?', ['Đốt nhựa trong nhà', 'Dùng túi vải, bình nước cá nhân, hạn chế dùng 1 lần', 'Dùng đồ nhựa rồi vứt bừa bãi', 'Vứt nhựa xuống biển'], 1, 'Giảm – tái sử dụng – tái chế.'),
    Q('Sắt để lâu trong không khí ẩm thường?', ['Biến thành vàng', 'Nhẹ hơn', 'Sáng hơn', 'Bị gỉ (han gỉ)'], 3, 'Sắt + O2 + nước → gỉ sắt.'),
  ]),

  M(10, 'Một số vật liệu thông dụng (2) — gỗ, cao su, thuỷ tinh', [
    Q('Gỗ là vật liệu có nguồn gốc?', ['Hoá chất tổng hợp', 'Khoáng sản', 'Động vật', 'Thực vật (cây xanh)'], 3, 'Gỗ lấy từ thân cây.'),
    Q('Tính chất của gỗ là?', ['Tan trong nước', 'Dẫn điện rất tốt', 'Trong suốt', 'Cứng vừa, dễ gia công, cách nhiệt, cách điện'], 3, 'Gỗ là vật liệu truyền thống cho bàn, ghế, nhà.'),
    Q('Cao su có tính chất nổi bật là?', ['Dẫn điện rất tốt', 'Đàn hồi tốt, cách điện', 'Tan trong nước', 'Cứng như kim loại'], 1, 'Cao su đàn hồi, dùng làm lốp xe, dây thun.'),
    Q('Cao su thiên nhiên lấy từ?', ['Tre nứa', 'Mủ cây cao su', 'Đất sét', 'Khoáng sản'], 1, 'Mủ cây cao su (Hevea).'),
    Q('Thuỷ tinh có đặc điểm?', ['Dẫn điện rất tốt', 'Đàn hồi mạnh', 'Trong suốt, cứng, dễ vỡ', 'Mềm như đất sét'], 2, 'Thuỷ tinh trong suốt nhưng giòn.'),
    Q('Khi thuỷ tinh vỡ, em phải?', ['Đeo găng dày, dùng chổi quét, không nhặt tay không', 'Nhặt bằng tay không', 'Đập thêm cho vỡ vụn', 'Bỏ qua mảnh vỡ'], 0, 'Mảnh thuỷ tinh sắc, dễ đứt tay.'),
  ]),

  M(11, 'Nhiên liệu và năng lượng', [
    Q('Nhiên liệu là chất khi cháy giải phóng?', ['Nước nguyên chất', 'Năng lượng (nhiệt, ánh sáng)', 'Chất rắn không cháy được', 'Khí O2'], 1, 'Cháy nhiên liệu → toả nhiệt + ánh sáng.'),
    Q('Nhóm nhiên liệu hoá thạch gồm?', ['Sữa, gạo, rau', 'Sắt, đồng, nhôm', 'Than đá, dầu mỏ, khí thiên nhiên', 'Gió, nước, nắng'], 2, 'Hoá thạch: than, dầu, khí.'),
    Q('Xăng dùng cho xe máy, ô tô được chế biến từ?', ['Quặng sắt', 'Dầu mỏ', 'Cây mía', 'Nước biển'], 1, 'Xăng là sản phẩm chưng cất dầu mỏ.'),
    Q('Năng lượng tái tạo gồm?', ['Năng lượng mặt trời, gió, thuỷ điện', 'Than đá', 'Dầu mỏ', 'Khí thiên nhiên'], 0, 'Tái tạo: nắng, gió, nước, sinh khối.'),
    Q('Khi sử dụng nhiên liệu, em nên?', ['Tiết kiệm, đốt cháy hiệu quả', 'Đốt bừa bãi', 'Đốt càng nhiều càng tốt', 'Để rò rỉ'], 0, 'Tiết kiệm vì hoá thạch có hạn.'),
    Q('Lợi ích lớn của năng lượng mặt trời là?', ['Rất khan hiếm', 'Có thể nổ bất ngờ', 'Sạch, không cạn kiệt', 'Gây ô nhiễm nặng'], 2, 'Mặt trời cho năng lượng sạch, vô tận trong tầm con người.'),
  ]),

  M(12, 'Lương thực, thực phẩm', [
    Q('Lương thực là?', ['Thịt, cá, trứng', 'Đá, cát', 'Gạo, ngô, khoai, sắn — chứa nhiều tinh bột', 'Rau, củ, quả tươi'], 2, 'Lương thực chủ yếu là nhóm cung tinh bột.'),
    Q('Thực phẩm cung cấp đạm (protein) chủ yếu là?', ['Bánh kẹo', 'Gạo, ngô', 'Nước lọc', 'Thịt, cá, trứng, sữa, đậu'], 3, 'Đạm có trong thịt cá trứng sữa, đậu hạt.'),
    Q('Rau, củ, quả tươi cung cấp chủ yếu?', ['Đường tinh khiết', 'Sắt vụn', 'Vitamin và chất xơ', 'Dầu mỡ'], 2, 'Rau quả giàu vitamin, chất xơ.'),
    Q('Để bảo quản thực phẩm tốt, ta thường?', ['Để ngoài trời nắng nóng', 'Để chung với hoá chất tẩy rửa', 'Mở nắp lâu ngày', 'Giữ lạnh, đóng gói kín, hạn chế ẩm'], 3, 'Giữ lạnh và kín giúp lâu hỏng.'),
    Q('Thực phẩm bị ôi thiu, mốc thì?', ['Ăn ít vẫn an toàn', 'Đem cho động vật ăn', 'Nấu lại vẫn ăn tốt', 'Tuyệt đối không ăn, dễ ngộ độc'], 3, 'Nấm mốc + vi khuẩn có thể sinh độc tố.'),
    Q('Một chế độ ăn cân đối nên có?', ['Đủ tinh bột, đạm, chất béo, vitamin, khoáng, đủ nước', 'Chỉ uống nước ngọt', 'Chỉ ăn rau', 'Chỉ ăn thịt'], 0, 'Đa dạng nhóm dinh dưỡng.'),
  ]),

  M(13, 'Hỗn hợp — chất tinh khiết — dung dịch', [
    Q('Chất tinh khiết là?', ['Hỗn hợp của nhiều chất', 'Chất chỉ gồm 1 loại chất, có tính chất xác định', 'Bất kỳ chất nào trong tự nhiên', 'Chỉ có nước'], 1, 'Chất tinh khiết: 1 thành phần duy nhất.'),
    Q('Hỗn hợp là?', ['Chỉ là chất rắn', 'Chỉ gồm 1 chất', 'Chỉ là chất khí', 'Gồm 2 chất trở lên trộn lẫn'], 3, 'Hỗn hợp do nhiều chất tạo thành.'),
    Q('Khi hoà tan muối vào nước, ta được?', ['Hỗn hợp không đồng nhất', 'Hai chất tách rời rõ ràng', 'Chất tinh khiết', 'Dung dịch muối — hỗn hợp đồng nhất'], 3, 'Dung dịch là hỗn hợp đồng nhất.'),
    Q('Trong dung dịch muối – nước, nước được gọi là?', ['Chất rắn', 'Hỗn hợp', 'Chất tan', 'Dung môi'], 3, 'Dung môi hoà tan chất khác; chất tan = muối.'),
    Q('Hỗn hợp dầu và nước là?', ['Hỗn hợp không đồng nhất', 'Dung dịch đồng nhất', 'Chất tinh khiết', 'Chất rắn nguyên chất'], 0, 'Dầu nổi trên nước, tách lớp rõ.'),
    Q('Ví dụ nào là dung dịch?', ['Bùn đất', 'Nước đường', 'Sữa chua', 'Cát + sỏi'], 1, 'Nước đường là dung dịch đồng nhất.'),
  ]),

  M(14, 'Tách chất ra khỏi hỗn hợp', [
    Q('Để tách cát ra khỏi nước, ta dùng phương pháp?', ['Cô cạn', 'Nam châm hút', 'Lọc', 'Chưng cất'], 2, 'Lọc bằng giấy lọc giữ cát lại.'),
    Q('Để tách muối ra khỏi nước biển, ta dùng?', ['Hút nam châm', 'Đông đá', 'Cô cạn (bay hơi nước)', 'Lọc qua giấy lọc'], 2, 'Đun cho nước bay hơi, muối còn lại.'),
    Q('Để tách bột sắt ra khỏi bột lưu huỳnh, ta dùng?', ['Hoà nước rồi uống', 'Cô cạn dung dịch', 'Cô cạn', 'Nam châm'], 3, 'Sắt bị nam châm hút.'),
    Q('Chưng cất phù hợp để tách?', ['Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau (ví dụ nước – rượu)', 'Bột sắt và bột nhôm', 'Đường tinh khiết', 'Cát và sỏi'], 0, 'Chưng cất dựa vào nhiệt độ sôi.'),
    Q('Khi pha cà phê bằng phin, lưới phin có vai trò?', ['Cô cạn', 'Chưng cất', 'Nam châm', 'Lọc (giữ bã, cho nước đi qua)'], 3, 'Phin = bộ lọc.'),
    Q('Khi làm nước mưa thành nước cất, ta dùng?', ['Cô cạn muối', 'Chưng cất', 'Lọc cát', 'Trộn thêm muối'], 1, 'Chưng cất cho nước tinh khiết hơn.'),
  ]),

  M(15, 'Tế bào — đơn vị cơ sở của sự sống (1)', [
    Q('Đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống là?', ['Nguyên tử', 'Tế bào', 'Phân tử nước', 'Cơ quan'], 1, 'Mọi sinh vật cấu tạo từ tế bào.'),
    Q('Người phát hiện tế bào (qua quan sát nút chai bần) là?', ['Newton', 'Einstein', 'Edison', 'Robert Hooke'], 3, 'Robert Hooke, năm 1665.'),
    Q('Để quan sát tế bào, ta cần?', ['Mắt thường', 'Kính râm', 'Kính hiển vi', 'Ống nhòm'], 2, 'Tế bào rất nhỏ, cần kính hiển vi.'),
    Q('Tế bào nhân sơ KHÁC tế bào nhân thực ở chỗ?', ['Không có nhân hoàn chỉnh (không màng nhân)', 'Chỉ có ở động vật', 'Lớn hơn nhiều', 'Có nhiều cơ quan tử phức tạp'], 0, 'Nhân sơ: vi khuẩn — không có màng nhân.'),
    Q('Ví dụ về sinh vật có tế bào nhân sơ là?', ['Nấm men', 'Trùng giày (động vật nguyên sinh)', 'Cây xanh', 'Vi khuẩn'], 3, 'Vi khuẩn (bacteria) thuộc nhân sơ.'),
    Q('Ví dụ về sinh vật có tế bào nhân thực là?', ['Tất cả vi khuẩn', 'Vi khuẩn lam', 'Xạ khuẩn trong đất', 'Cây xanh, động vật, nấm'], 3, 'Thực vật, động vật, nấm có nhân hoàn chỉnh.'),
  ]),

  M(16, 'Tế bào — đơn vị cơ sở của sự sống (2)', [
    Q('Cấu tạo cơ bản của một tế bào nhân thực gồm?', ['Chỉ có nhân', 'Chỉ có ti thể', 'Chỉ có màng', 'Màng tế bào, tế bào chất, nhân'], 3, '3 phần chính: màng – chất – nhân.'),
    Q('Tế bào thực vật KHÁC tế bào động vật ở điểm?', ['Không có nhân', 'Không có màng', 'Có thành tế bào (cellulose) và lục lạp', 'Không có tế bào chất'], 2, 'Thực vật có thành cellulose và lục lạp quang hợp.'),
    Q('Cơ quan tử thực hiện quang hợp trong tế bào thực vật là?', ['Không bào trung tâm', 'Ribosome', 'Ti thể', 'Lục lạp (chloroplast)'], 3, 'Lục lạp chứa diệp lục.'),
    Q('Cơ quan tử cung cấp năng lượng cho tế bào là?', ['Vách tế bào', 'Lưới nội chất', 'Lục lạp', 'Ti thể (mitochondria)'], 3, 'Ti thể: "nhà máy năng lượng".'),
    Q('Nhân tế bào có vai trò?', ['Điều khiển hoạt động sống, chứa vật chất di truyền (DNA)', 'Tổng hợp dầu', 'Quang hợp', 'Cung cấp năng lượng'], 0, 'Nhân chứa DNA.'),
    Q('Đa số tế bào có kích thước?', ['Có thể thấy rõ bằng mắt thường ở mọi loài', 'Rất nhỏ, chỉ thấy qua kính hiển vi', 'Bằng quả bóng', 'Bằng quả táo'], 1, 'Tế bào nhỏ cỡ micromet.'),
  ]),

  M(17, 'Sự lớn lên và sinh sản của tế bào', [
    Q('Tế bào lớn lên nhờ?', ['Tự sinh ra từ đá', 'Trao đổi chất với môi trường, tăng kích thước', 'Hút nắng trực tiếp', 'Không lớn lên'], 1, 'Lấy chất dinh dưỡng → tổng hợp chất → lớn lên.'),
    Q('Khi đạt kích thước nhất định, tế bào sẽ?', ['Hoá thành nước', 'Phân chia thành 2 tế bào con', 'Biến mất', 'Đứng yên mãi'], 1, 'Phân bào là cách sinh sản của tế bào.'),
    Q('Sự lớn lên và sinh sản của tế bào giúp cơ thể?', ['Lớn lên, thay thế tế bào già/chết', 'Không thay đổi', 'Nhỏ đi', 'Biến thành chất rắn'], 0, 'Cơ thể tăng trưởng, hồi phục tổn thương.'),
    Q('Khi em bị đứt tay nhẹ và lành lại, đó là nhờ?', ['Kim loại tự dán lại', 'Tế bào phân chia, thay thế vùng tổn thương', 'Vi khuẩn lấp đầy', 'Tế bào hoá thành đá'], 1, 'Tế bào da mới được sinh ra.'),
    Q('Tế bào có tuổi thọ?', ['Chỉ sống 1 giây', 'Sống mãi không chết', 'Có giới hạn, tuỳ loại tế bào', 'Không có khái niệm tuổi'], 2, 'Mỗi loại tế bào có tuổi thọ riêng.'),
    Q('Ung thư là hiện tượng?', ['Tế bào hoá vàng', 'Tế bào phân chia mất kiểm soát', 'Cơ thể hết tế bào', 'Tế bào ngừng phân chia hẳn'], 1, 'Phân chia không kiểm soát → khối u.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('KHTN Lớp 6 tích hợp 3 phân môn nào?', ['Toán – Văn – Anh', 'Sử – Địa – GDCD', 'Nhạc – Hoạ – Thể dục', 'Vật lý – Hoá học – Sinh học'], 3, 'KHTN = Lý + Hoá + Sinh.'),
    Q('Đơn vị đo chiều dài chuẩn SI là?', ['centimet (cm)', 'mét (m)', 'kilômét (km)', 'milimet (mm)'], 1, 'Mét.'),
    Q('Đơn vị đo khối lượng chuẩn SI là?', ['kilôgam', 'gam (g)', 'tấn (t)', 'miligam (mg)'], 0, 'Kilôgam.'),
    Q('Chất có thể tồn tại ở các thể?', ['Rắn, lỏng, khí', 'Chỉ lỏng', 'Chỉ rắn', 'Chỉ khí'], 0, '3 thể cơ bản.'),
    Q('Oxygen chiếm khoảng bao nhiêu % thể tích không khí?', ['21%', '1%', '50%', '78%'], 0, '~21%.'),
    Q('Để tách muối khỏi nước biển, ta dùng?', ['Nam châm', 'Trộn dầu', 'Lọc qua giấy lọc', 'Cô cạn'], 3, 'Bay hơi nước → còn muối.'),
    Q('Để tách bột sắt khỏi cát, ta dùng?', ['Nam châm', 'Cô cạn', 'Chưng cất', 'Lọc bằng vải'], 0, 'Sắt nhiễm từ.'),
    Q('Đơn vị cấu tạo của mọi sinh vật là?', ['Tế bào', 'Cơ quan', 'Hệ cơ quan', 'Phân tử'], 0, 'Tế bào.'),
    Q('Tế bào thực vật KHÁC tế bào động vật vì?', ['Không có nhân', 'Có thành cellulose và lục lạp', 'Không có màng', 'Không có chất tế bào'], 1, 'Thành + lục lạp.'),
    Q('Ti thể có chức năng?', ['Bảo vệ tế bào', 'Chứa DNA', 'Cung cấp năng lượng cho tế bào', 'Quang hợp'], 2, 'Ti thể = "nhà máy ATP".'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Cơ thể đa bào — các cấp tổ chức (1): mô – cơ quan', [
    Q('Cơ thể đa bào là cơ thể được cấu tạo từ?', ['Chỉ có nước', 'Không có tế bào', 'Một tế bào', 'Nhiều tế bào'], 3, 'Đa bào = nhiều tế bào.'),
    Q('Mô là?', ['Tập hợp các con vật', 'Một loại khoáng chất', 'Tập hợp tế bào có cùng cấu trúc và chức năng', 'Một cơ quan đơn lẻ'], 2, 'Tế bào → mô.'),
    Q('Ví dụ về mô ở thực vật là?', ['Khoáng chất', 'Đất sét', 'Mô biểu bì lá, mô dẫn', 'Mô cơ vân ở người'], 2, 'Thực vật có mô biểu bì, mô dẫn (mạch gỗ, mạch rây).'),
    Q('Ví dụ về mô ở động vật là?', ['Mô cơ, mô thần kinh, mô liên kết', 'Mô lục lạp', 'Mô cellulose', 'Mô dẫn nước'], 0, 'Động vật có 4 nhóm mô chính.'),
    Q('Cơ quan là?', ['Một mô', 'Nhiều mô khác nhau cùng phối hợp thực hiện chức năng', 'Một tế bào', 'Một loại chất'], 1, 'Mô → cơ quan.'),
    Q('Ví dụ về cơ quan ở thực vật là?', ['Não, dạ dày', 'Rễ, thân, lá, hoa', 'Tim, phổi', 'Cơ vân'], 1, 'Rễ – thân – lá – hoa – quả – hạt là cơ quan của cây.'),
  ]),

  M(20, 'Cơ thể đa bào — các cấp tổ chức (2): hệ cơ quan – cơ thể', [
    Q('Hệ cơ quan là?', ['Một mô', 'Một tế bào', 'Nhiều cơ quan phối hợp thực hiện một quá trình sống', 'Một chất hoá học'], 2, 'Cơ quan → hệ cơ quan.'),
    Q('Hệ tiêu hoá ở người gồm các cơ quan như?', ['Phổi, khí quản', 'Não, tuỷ sống', 'Tim, mạch máu', 'Miệng, dạ dày, ruột, gan, tuỵ'], 3, 'Tiêu hoá: miệng → dạ dày → ruột.'),
    Q('Hệ tuần hoàn ở người gồm?', ['Phổi và khí quản', 'Thận và bàng quang', 'Não và dây thần kinh', 'Tim và hệ mạch máu'], 3, 'Tim bơm, mạch dẫn máu.'),
    Q('Hệ thần kinh ở người gồm?', ['Não, tuỷ sống, dây thần kinh', 'Phổi, khí quản', 'Dạ dày, ruột', 'Tim, mạch máu'], 0, 'Điều khiển và điều phối hoạt động.'),
    Q('Thứ tự đúng các cấp tổ chức cơ thể đa bào (từ nhỏ đến lớn) là?', ['Mô → Tế bào → Cơ quan', 'Cơ thể → Tế bào → Mô', 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', 'Cơ quan → Tế bào → Mô'], 2, 'Tế bào là đơn vị nhỏ nhất.'),
    Q('Ở cây xanh, hệ cơ quan gồm?', ['Hệ tim mạch', 'Hệ thần kinh trung ương', 'Hệ bài tiết', 'Hệ rễ và hệ chồi (thân + lá + hoa)'], 3, 'Thực vật có hệ rễ và hệ chồi.'),
  ]),

  M(21, 'Phân loại sinh vật — khoá lưỡng phân', [
    Q('Sinh vật được chia thành các giới chính như?', ['Chỉ thực vật và động vật', 'Chỉ vi khuẩn', 'Chỉ con người và cây', 'Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật'], 3, '5 giới truyền thống.'),
    Q('Đơn vị phân loại nhỏ nhất là?', ['Loài', 'Chi (genus)', 'Họ (familia)', 'Bộ (ordo)'], 0, 'Loài là đơn vị cơ sở.'),
    Q('Thứ tự đúng từ nhỏ đến lớn là?', ['Loài → Giới → Ngành', 'Giới → Loài', 'Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới', 'Bộ → Loài → Họ'], 2, '7 bậc phân loại cơ bản.'),
    Q('Khoá lưỡng phân là công cụ?', ['Đo khối lượng', 'Phân loại sinh vật theo cặp đặc điểm đối lập', 'Đếm số ngày', 'Đo chiều dài'], 1, 'Mỗi bước chọn 1 trong 2 đặc điểm.'),
    Q('Khi xây khoá lưỡng phân, ở mỗi bước có?', ['3 lựa chọn', '2 lựa chọn đối lập', 'Không có lựa chọn', '10 lựa chọn'], 1, '"Lưỡng" = hai.'),
    Q('Ưu điểm của khoá lưỡng phân là?', ['Dễ dùng, giúp xác định loài bằng câu hỏi đúng/sai', 'Đắt tiền', 'Cần máy tính phức tạp', 'Chỉ dùng cho động vật'], 0, 'Trực quan, dễ áp dụng tại lớp.'),
  ]),

  M(22, 'Vi khuẩn', [
    Q('Vi khuẩn là sinh vật có tế bào?', ['Nhân sơ, đơn bào, kích thước rất nhỏ', 'Nhân thực, đa bào', 'Lớn hơn cả người', 'Không có tế bào'], 0, 'Vi khuẩn = đơn bào nhân sơ.'),
    Q('Để quan sát vi khuẩn, ta cần?', ['Kính lúp đơn giản', 'Ống nhòm', 'Kính hiển vi', 'Mắt thường'], 2, 'Vi khuẩn rất nhỏ.'),
    Q('Vi khuẩn có ích cho con người, ví dụ?', ['Lên men sữa chua, làm dưa muối', 'Không có ích', 'Phá tất cả thức ăn', 'Gây tất cả các bệnh'], 0, 'Lactobacillus dùng làm sữa chua.'),
    Q('Vi khuẩn có hại có thể gây?', ['Cây cao thêm', 'Bệnh tả, lao, viêm họng', 'Trời nắng', 'Mọi điều tốt đẹp'], 1, 'Một số vi khuẩn gây bệnh nguy hiểm.'),
    Q('Để phòng tránh bệnh do vi khuẩn, ta nên?', ['Không rửa tay', 'Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân', 'Ăn đồ ôi', 'Uống nước lã'], 1, 'Vệ sinh là cách phòng tốt nhất.'),
    Q('Thuốc thường được dùng để tiêu diệt vi khuẩn gây bệnh là?', ['Kháng sinh', 'Vitamin C', 'Nước muối loãng (chỉ làm sạch)', 'Thuốc giảm đau paracetamol'], 0, 'Kháng sinh tiêu diệt/ức chế vi khuẩn — phải có chỉ định bác sĩ.'),
  ]),

  M(23, 'Virus — đặc điểm cơ bản', [
    Q('Virus có cấu tạo?', ['Là một tế bào nhân thực', 'Là khoáng vật', 'Chưa có cấu tạo tế bào, gồm vỏ protein và lõi vật chất di truyền', 'Đầy đủ tế bào như vi khuẩn'], 2, 'Virus chưa được coi là tế bào.'),
    Q('Virus sinh sản (nhân lên) ở đâu?', ['Bên trong tế bào vật chủ', 'Tự do trong nước', 'Trong đá', 'Trong không khí khô'], 0, 'Virus là ký sinh bắt buộc nội bào.'),
    Q('Kích thước virus so với vi khuẩn?', ['Lớn hơn nhiều', 'Không xác định', 'Bằng nhau', 'Nhỏ hơn nhiều'], 3, 'Virus nhỏ cỡ nanomet.'),
    Q('Ví dụ bệnh do virus gây ra ở người?', ['Lao phổi do vi khuẩn', 'Cúm, COVID-19, sởi, viêm gan B', 'Gãy xương', 'Sâu răng'], 1, 'Nhiều bệnh truyền nhiễm do virus.'),
    Q('Cách hiệu quả phòng nhiều bệnh do virus là?', ['Tiếp xúc gần người bệnh', 'Uống kháng sinh tuỳ ý', 'Bỏ qua', 'Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi cần'], 3, 'Vắc-xin tạo miễn dịch.'),
    Q('Kháng sinh có tác dụng tiêu diệt virus không?', ['Không xác định', 'Có, nhưng chỉ với cảm cúm', 'Không, kháng sinh chỉ diệt vi khuẩn', 'Có, diệt mọi virus'], 2, 'Kháng sinh KHÔNG có tác dụng với virus.'),
  ]),

  M(24, 'Nguyên sinh vật và Nấm', [
    Q('Nguyên sinh vật là?', ['Khoáng vật', 'Sinh vật nhân sơ', 'Vi khuẩn cổ (Archaea)', 'Sinh vật nhân thực, phần lớn đơn bào, sống trong nước hoặc nơi ẩm'], 3, 'Ví dụ: trùng roi, trùng giày, tảo.'),
    Q('Ví dụ về nguyên sinh vật là?', ['Trùng roi, trùng giày, amip', 'Vi khuẩn lao', 'Virus cúm', 'Cây xoài'], 0, 'Nguyên sinh động vật quen thuộc.'),
    Q('Nấm thuộc giới?', ['Nấm (Fungi)', 'Động vật', 'Thực vật', 'Khởi sinh'], 0, 'Nấm là giới riêng, nhân thực, không quang hợp.'),
    Q('Nấm dinh dưỡng bằng cách?', ['Hấp thụ chất hữu cơ từ môi trường', 'Săn mồi như động vật', 'Quang hợp như cây', 'Tự tổng hợp từ ánh sáng'], 0, 'Nấm là sinh vật dị dưỡng.'),
    Q('Ví dụ nấm có ích là?', ['Nấm độc xanh đen', 'Nấm gây hắc lào', 'Mọi loại nấm mốc trên thức ăn', 'Nấm rơm, nấm hương, nấm men làm bánh mì'], 3, 'Nhiều nấm dùng làm thực phẩm, men.'),
    Q('Khi gặp nấm lạ trong rừng, em phải?', ['Cho bạn ăn thử', 'Không hái, không ăn vì có thể là nấm độc', 'Đem nấu canh', 'Ăn thử ngay'], 1, 'Nấm độc có thể gây tử vong.'),
  ]),

  M(25, 'Thực vật', [
    Q('Thực vật có đặc điểm chung là?', ['Có khả năng quang hợp nhờ lục lạp', 'Săn mồi như động vật', 'Sống trong nước biển hết', 'Không có tế bào'], 0, 'Quang hợp tạo chất hữu cơ.'),
    Q('Thực vật được chia thành các nhóm chính như?', ['Chỉ có cây xoài', 'Côn trùng, Cá, Chim', 'Vi khuẩn, Nấm, Tảo', 'Rêu, Dương xỉ, Hạt trần, Hạt kín'], 3, '4 nhóm chính theo SGK.'),
    Q('Đặc điểm của thực vật Hạt kín là?', ['Hạt nằm trong quả, có hoa', 'Không có rễ', 'Hạt nằm lộ trên lá noãn (như thông)', 'Không có hoa, không có hạt'], 0, 'Hạt kín = thực vật có hoa.'),
    Q('Đặc điểm của thực vật Hạt trần là?', ['Không có thân', 'Hạt lộ trên lá noãn (không có quả thật)', 'Hạt nằm trong quả thật', 'Không có hạt'], 1, 'Ví dụ: thông, tùng, vạn tuế.'),
    Q('Rêu thường sống ở?', ['Nơi ẩm ướt, bóng râm', 'Sa mạc khô nóng', 'Trong nước biển mặn', 'Trên đá khô bốc cháy'], 0, 'Rêu ưa ẩm.'),
    Q('Vai trò của thực vật trong tự nhiên?', ['Chỉ tốn nước', 'Không có vai trò gì', 'Chỉ làm cảnh', 'Cung cấp O2, thức ăn, nơi ở cho động vật, giữ đất, điều hoà khí hậu'], 3, 'Thực vật là nền tảng của các hệ sinh thái.'),
  ]),

  M(26, 'Động vật không xương sống', [
    Q('Động vật không xương sống có đặc điểm?', ['Luôn có 4 chân', 'Có cột sống cứng cáp', 'Không có xương sống bên trong cơ thể', 'Luôn biết bay'], 2, 'Không có cột sống.'),
    Q('Đại diện nhóm Ruột khoang là?', ['Cá, ếch', 'Giun đất, đỉa', 'Thuỷ tức, sứa, san hô', 'Chim, gà'], 2, 'Ruột khoang có khoang tiêu hoá hình túi.'),
    Q('Đại diện nhóm Giun là?', ['Cá chép', 'Cua, tôm', 'Bướm, ong', 'Giun đất, giun đũa, sán'], 3, 'Giun dẹp, giun tròn, giun đốt.'),
    Q('Đại diện nhóm Thân mềm là?', ['Châu chấu, dế', 'Giun, sán', 'Chim sẻ', 'Ốc, hến, mực'], 3, 'Thân mềm: cơ thể mềm, thường có vỏ.'),
    Q('Đại diện nhóm Chân khớp là?', ['Tôm, cua, nhện, châu chấu', 'Cây xoài', 'Trai sông, hến', 'Giun đất, rết'], 0, 'Chân khớp có bộ xương ngoài, chân phân đốt.'),
    Q('Vai trò của giun đất với đất trồng?', ['Làm cứng đất', 'Phá hoại rễ cây toàn bộ', 'Không liên quan', 'Làm tơi xốp đất, tăng độ phì'], 3, 'Giun đất là "bạn của nhà nông".'),
  ]),

  M(27, 'Động vật có xương sống', [
    Q('Động vật có xương sống có đặc điểm chung?', ['Có cột sống bên trong cơ thể', 'Không có xương', 'Luôn có vảy', 'Luôn sống dưới nước'], 0, 'Cột sống là tiêu chí.'),
    Q('Cá thở bằng?', ['Da ẩm như ếch', 'Vây trao đổi khí', 'Phổi nhỏ hai bên', 'Mang'], 3, 'Cá có mang để lấy O2 trong nước.'),
    Q('Lưỡng cư có đại diện là?', ['Chim, dơi', 'Ếch, nhái, cóc', 'Cá chép, cá rô', 'Rắn, thằn lằn'], 1, 'Lưỡng cư sống cạn và nước.'),
    Q('Bò sát có đại diện là?', ['Cá chép, cá rô', 'Rắn, thằn lằn, rùa, cá sấu', 'Ếch nhái', 'Chim sẻ'], 1, 'Bò sát có vảy sừng, đẻ trứng.'),
    Q('Chim có đặc điểm?', ['Có mang', 'Có vảy như cá', 'Nuôi con bằng sữa', 'Có lông vũ, có cánh, đẻ trứng'], 3, 'Lông vũ là đặc trưng của lớp Chim.'),
    Q('Thú (động vật có vú) có đặc điểm?', ['Đẻ trứng và không có lông', 'Có cánh và lông vũ', 'Sống hoàn toàn dưới nước có vảy', 'Có lông mao, đẻ con, nuôi con bằng sữa'], 3, 'Thú nuôi con bằng sữa.'),
  ]),

  M(28, 'Đa dạng sinh học — bảo vệ', [
    Q('Đa dạng sinh học là?', ['Chỉ có nhiều loài chim', 'Chỉ là số lượng động vật', 'Sự đông dân', 'Sự phong phú về loài, gen, hệ sinh thái'], 3, 'Đa dạng ở 3 mức độ.'),
    Q('Việt Nam được coi là quốc gia?', ['Không có rừng', 'Không có động vật', 'Chỉ có sa mạc', 'Có đa dạng sinh học cao'], 3, 'VN nằm trong số nước có đa dạng sinh học cao.'),
    Q('Nguyên nhân làm suy giảm đa dạng sinh học là?', ['Bảo vệ động vật hoang dã', 'Trồng rừng', 'Lập khu bảo tồn', 'Phá rừng, săn bắt trái phép, ô nhiễm'], 3, 'Hoạt động con người là nguyên nhân chính.'),
    Q('Khu bảo tồn thiên nhiên có vai trò?', ['Bảo vệ các loài quý hiếm và hệ sinh thái', 'Để trồng độc canh', 'Để xây nhà máy', 'Để khai thác gỗ'], 0, 'Bảo tồn nguồn gen, sinh cảnh.'),
    Q('Hành động nào KHÔNG bảo vệ đa dạng sinh học?', ['Săn bắt động vật hoang dã trái phép', 'Trồng cây gây rừng', 'Tham gia chiến dịch bảo vệ rừng', 'Không xả rác'], 0, 'Săn bắt trái phép làm suy giảm loài.'),
    Q('Học sinh có thể bảo vệ đa dạng sinh học bằng cách?', ['Bẻ cây bẻ cành', 'Trồng cây, tiết kiệm giấy, không dùng đồ làm từ động vật quý hiếm', 'Bắt chim non về nuôi', 'Vứt rác xuống sông'], 1, 'Hành động nhỏ tạo thay đổi lớn.'),
  ]),

  M(29, 'Lực — tác dụng của lực', [
    Q('Lực là?', ['Một loại hoá chất', 'Một loại tế bào', 'Một dạng chất rắn', 'Tác dụng đẩy hoặc kéo của vật này lên vật khác'], 3, 'Lực = đẩy hoặc kéo.'),
    Q('Đơn vị đo lực là?', ['kilôgam', 'Newton (N)', 'Jun (J) — đơn vị năng lượng', 'Pascal (Pa) — đơn vị áp suất'], 1, 'Newton, ký hiệu N.'),
    Q('Dụng cụ đo lực là?', ['Đồng hồ', 'Cân đồng hồ (đo khối lượng)', 'Cân điện tử', 'Lực kế'], 3, 'Lực kế lò xo đo độ lớn lực.'),
    Q('Lực có thể làm vật?', ['Biến dạng hoặc thay đổi chuyển động', 'Biến mất hoàn toàn', 'Tự sinh ra chất mới', 'Hoá thành ánh sáng'], 0, '2 tác dụng cơ bản của lực.'),
    Q('Ví dụ lực làm vật biến dạng là?', ['Đẩy xe lăn', 'Quăng quả bóng', 'Kéo xe trên đường thẳng', 'Nén lò xo, bóp quả bóng cao su'], 3, 'Biến dạng = thay đổi hình dạng.'),
    Q('Ví dụ lực làm thay đổi chuyển động là?', ['Bẻ cong thước nhựa', 'Bóp bóng', 'Nén lò xo', 'Đá vào quả bóng đang đứng yên'], 3, 'Lực thay đổi vận tốc.'),
  ]),

  M(30, 'Biểu diễn lực — lực tiếp xúc và không tiếp xúc', [
    Q('Lực được biểu diễn bằng?', ['Một chấm tròn', 'Một đường thẳng không hướng', 'Mũi tên (có gốc, phương, chiều, độ lớn)', 'Một con số đơn thuần'], 2, 'Lực là đại lượng vectơ.'),
    Q('Mũi tên biểu diễn lực có gốc tại?', ['Điểm đặt của lực', 'Đầu kia của vật', 'Đâu cũng được', 'Trên trời'], 0, 'Gốc = điểm đặt.'),
    Q('Lực tiếp xúc là lực?', ['Sinh ra khi hai vật tiếp xúc trực tiếp', 'Tác dụng ở xa, không cần chạm', 'Chỉ có trong sách', 'Không có thật'], 0, 'Ví dụ: tay đẩy bàn.'),
    Q('Lực không tiếp xúc là?', ['Lực ép quả bóng', 'Lực tay đẩy bàn', 'Lực kéo dây thừng', 'Lực hấp dẫn, lực từ giữa nam châm và sắt ở khoảng cách'], 3, 'Tác dụng từ xa.'),
    Q('Hai vật tương tác bằng lực thì?', ['Chỉ một vật tác dụng', 'Không có gì xảy ra', 'Đồng thời tác dụng lực lên nhau', 'Tự biến mất'], 2, 'Lực có tính tương tác (định luật III Newton).'),
    Q('Ví dụ lực không tiếp xúc trong đời sống?', ['Tay kéo dây cung', 'Trái Đất hút quả táo rơi', 'Đá vào quả bóng', 'Đẩy ghế'], 1, 'Lực hấp dẫn tác dụng từ xa.'),
  ]),

  M(31, 'Lực ma sát, lực hấp dẫn và trọng lực', [
    Q('Lực ma sát xuất hiện khi?', ['Hai vật ở rất xa', 'Không bao giờ có', 'Vật đứng yên trong chân không', 'Hai mặt tiếp xúc trượt hoặc có xu hướng trượt lên nhau'], 3, 'Ma sát chống chuyển động tương đối.'),
    Q('Ma sát có ích trong trường hợp?', ['Tạo tiếng ồn', 'Giữ chân không trượt khi đi bộ', 'Mài mòn lốp xe', 'Làm máy nóng quá nhanh'], 1, 'Không có ma sát → trơn trượt.'),
    Q('Ma sát có hại trong trường hợp?', ['Giúp viết được bằng bút chì', 'Làm mòn lốp xe, làm nóng động cơ', 'Giúp đi lại', 'Giúp xe phanh được'], 1, 'Ma sát gây mòn, tốn năng lượng.'),
    Q('Cách giảm ma sát có hại trong máy móc?', ['Bôi dầu mỡ, dùng vòng bi', 'Đổ thêm cát', 'Để khô hoàn toàn', 'Cho thêm đá vào'], 0, 'Bôi trơn để giảm mòn.'),
    Q('Lực hấp dẫn do vật nào của Trái Đất gây ra cho vật ở bề mặt?', ['Mặt Trăng', 'Mặt Trời gần', 'Sao chổi', 'Trái Đất hút mọi vật về phía nó'], 3, 'Trái Đất tạo lực hấp dẫn lên vật trên bề mặt.'),
    Q('Trọng lực tác dụng lên vật có phương và chiều?', ['Phương nằm ngang', 'Chiều từ dưới lên', 'Phương thẳng đứng, chiều từ trên xuống', 'Bất kỳ chiều nào'], 2, 'Trọng lực luôn hướng về tâm Trái Đất.'),
    Q('Một vật có khối lượng 1 kg thì trọng lượng ở Trái Đất xấp xỉ?', ['0 N', '1 N', '10 N', '100 N'], 2, 'P = 10 m ≈ 10 N với m = 1 kg.'),
  ]),

  M(32, 'Năng lượng — các dạng năng lượng', [
    Q('Năng lượng là?', ['Đại lượng đặc trưng cho khả năng thực hiện công, gây biến đổi', 'Một loại vi khuẩn', 'Một chất lỏng', 'Một loại tế bào'], 0, 'Năng lượng gắn với biến đổi.'),
    Q('Đơn vị đo năng lượng trong SI là?', ['Newton', 'Watt (W) — đơn vị công suất', 'Jun (J)', 'calo (cal) — đơn vị nhiệt lượng cũ'], 2, 'Jun (J).'),
    Q('Dạng năng lượng nào do chuyển động?', ['Động năng', 'Hoá năng', 'Thế năng hấp dẫn', 'Quang năng'], 0, 'Vật chuyển động → có động năng.'),
    Q('Quả táo trên cây ở độ cao h so với mặt đất có dạng năng lượng?', ['Nhiệt năng', 'Động năng', 'Thế năng hấp dẫn', 'Điện năng'], 2, 'Thế năng phụ thuộc vị trí.'),
    Q('Năng lượng do ánh sáng mang tới là?', ['Hoá năng', 'Cơ năng', 'Quang năng', 'Điện năng'], 2, 'Ánh sáng = quang năng.'),
    Q('Năng lượng dự trữ trong nhiên liệu, thức ăn là?', ['Quang năng', 'Cơ năng', 'Hoá năng', 'Điện năng'], 2, 'Hoá năng giải phóng khi xảy ra phản ứng (cháy, tiêu hoá).'),
    Q('Năng lượng nhiệt thường liên quan đến?', ['Sự chuyển động của các hạt vi mô', 'Chiều cao', 'Màu sắc', 'Vận tốc xe'], 0, 'Nhiệt năng = tổng động năng các hạt.'),
  ]),

  M(33, 'Bảo toàn và chuyển hoá năng lượng', [
    Q('Định luật bảo toàn năng lượng nói rằng?', ['Năng lượng không tự sinh ra hoặc mất đi, chỉ chuyển từ dạng này sang dạng khác', 'Năng lượng biến mất hoàn toàn', 'Năng lượng chỉ có 1 dạng', 'Năng lượng tự sinh ra từ không khí'], 0, 'Bảo toàn năng lượng.'),
    Q('Khi đèn điện sáng, năng lượng chuyển hoá chủ yếu là?', ['Hoá năng → Cơ năng', 'Điện năng → Quang năng (và nhiệt)', 'Cơ năng → Điện năng', 'Quang năng → Điện năng'], 1, 'Đèn biến điện thành ánh sáng và nhiệt.'),
    Q('Quạt điện hoạt động chuyển hoá năng lượng từ?', ['Nhiệt → Hoá', 'Quang năng → Cơ năng', 'Cơ năng → Điện năng', 'Điện năng → Cơ năng (và nhiệt, âm thanh)'], 3, 'Động cơ điện sinh chuyển động.'),
    Q('Pin mặt trời chuyển hoá năng lượng từ?', ['Cơ năng → Điện năng', 'Nhiệt → Cơ năng', 'Điện năng → Quang năng', 'Quang năng → Điện năng'], 3, 'Pin quang điện = từ ánh sáng.'),
    Q('Khi đốt củi, năng lượng chuyển hoá?', ['Hoá năng → Nhiệt năng và Quang năng', 'Cơ → Điện', 'Quang → Hoá', 'Điện → Quang'], 0, 'Phản ứng cháy giải phóng nhiệt và sáng.'),
    Q('Để tiết kiệm năng lượng ở nhà, em nên?', ['Bật tất cả thiết bị suốt ngày', 'Để cửa tủ lạnh mở lâu', 'Bật điều hoà 16 °C cả ngày', 'Tắt thiết bị khi không dùng, dùng đèn LED'], 3, 'Tiết kiệm điện giúp giảm chi phí và bảo vệ môi trường.'),
  ]),

  M(34, 'Trái Đất, Mặt Trăng, Hệ Mặt Trời', [
    Q('Hệ Mặt Trời có mấy hành tinh chính?', ['7', '12', '8', '6'], 2, '8 hành tinh sau khi Pluto được xếp lại.'),
    Q('Hành tinh nào gần Mặt Trời nhất?', ['Sao Thuỷ (Mercury)', 'Trái Đất', 'Sao Mộc', 'Sao Hải Vương'], 0, 'Sao Thuỷ là hành tinh trong cùng.'),
    Q('Hành tinh thứ ba tính từ Mặt Trời là?', ['Sao Kim', 'Sao Hoả', 'Trái Đất', 'Sao Mộc'], 2, 'Thuỷ – Kim – Trái Đất – Hoả – ...'),
    Q('Hành tinh lớn nhất trong Hệ Mặt Trời là?', ['Sao Mộc (Jupiter)', 'Sao Thuỷ', 'Trái Đất', 'Sao Hoả'], 0, 'Sao Mộc khổng lồ.'),
    Q('Mặt Trăng là?', ['Một ngôi sao', 'Vệ tinh tự nhiên của Trái Đất', 'Một hành tinh quay quanh Mặt Trời', 'Một sao chổi'], 1, 'Mặt Trăng quay quanh Trái Đất.'),
    Q('Trái Đất quay quanh Mặt Trời hết bao lâu?', ['Khoảng 1 năm (365,25 ngày)', '1 tháng', '100 năm', '1 ngày'], 0, 'Chu kỳ quay quanh Mặt Trời ≈ 1 năm.'),
    Q('Trái Đất tự quay quanh trục hết bao lâu?', ['Khoảng 24 giờ (1 ngày đêm)', '1 tuần', '1 tháng', '12 giờ'], 0, 'Tự quay → ngày và đêm.'),
  ]),

  M(35, 'Chuyển động nhìn thấy của Mặt Trời, ngày – đêm', [
    Q('Mặt Trời mọc ở hướng?', ['Bắc — hướng Sao Bắc Cực', 'Tây — nơi Mặt Trời lặn', 'Đông', 'Nam — hướng trưa Mặt Trời cao nhất'], 2, 'Mọc Đông.'),
    Q('Mặt Trời lặn ở hướng?', ['Bắc — hướng Sao Bắc Cực', 'Tây', 'Đông — nơi Mặt Trời mọc', 'Nam — hướng giữa trưa'], 1, 'Lặn Tây.'),
    Q('Hiện tượng ngày và đêm là do?', ['Mặt Trăng che Mặt Trời', 'Mặt Trời tắt và sáng', 'Bão từ', 'Trái Đất tự quay quanh trục của nó'], 3, 'Tự quay → một nửa được chiếu sáng.'),
    Q('Phần Trái Đất hướng về Mặt Trời thì?', ['Không có gì', 'Là ban đêm', 'Là ban ngày', 'Lạnh nhất'], 2, 'Phía chiếu sáng = ngày.'),
    Q('Phần Trái Đất không hướng về Mặt Trời thì?', ['Là ban ngày', 'Là ban đêm', 'Không tồn tại', 'Luôn nóng nhất'], 1, 'Phía khuất = đêm.'),
    Q('Vì sao ta thấy Mặt Trời chuyển động từ Đông sang Tây?', ['Vì Trái Đất tự quay từ Tây sang Đông', 'Vì ảo giác hoàn toàn', 'Vì Mặt Trời thực sự bay', 'Vì gió thổi Mặt Trời'], 0, 'Chuyển động "biểu kiến" do Trái Đất quay.'),
    Q('Mặt Trăng cũng có pha (trăng tròn, khuyết) do?', ['Mặt Trăng tự sáng tắt', 'Vị trí Mặt Trăng so với Mặt Trời và Trái Đất thay đổi', 'Mặt Trời tắt một phần', 'Mặt Trăng vỡ'], 1, 'Pha Trăng do góc chiếu sáng.'),
  ]),

  M(36, 'Ôn tập Học kỳ 2 và cuối năm', [
    Q('Thứ tự đúng các cấp tổ chức cơ thể đa bào là?', ['Mô → Tế bào', 'Cơ quan → Tế bào → Mô', 'Cơ thể → Tế bào', 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể'], 3, 'Tế bào nhỏ nhất → Cơ thể lớn nhất.'),
    Q('Khoá lưỡng phân ở mỗi bước có?', ['0 lựa chọn', '2 lựa chọn đối lập', '3 lựa chọn', '5 lựa chọn'], 1, 'Hai nhánh đối lập.'),
    Q('Kháng sinh có diệt được virus không?', ['Chỉ một số virus', 'Tuỳ trời mưa hay nắng', 'Có, mọi virus', 'Không'], 3, 'Kháng sinh chỉ với vi khuẩn.'),
    Q('Cây xanh thuộc giới?', ['Động vật', 'Nguyên sinh vật', 'Thực vật', 'Khởi sinh'], 2, 'Thực vật quang hợp.'),
    Q('Động vật nào sau đây thuộc lớp Thú?', ['Ếch đồng (lưỡng cư)', 'Rắn hổ mang (bò sát)', 'Cá chép', 'Cá heo'], 3, 'Cá heo là thú biển, đẻ con, nuôi con bằng sữa.'),
    Q('Đơn vị đo lực là?', ['mét — đơn vị chiều dài', 'Newton (N)', 'kilôgam', 'giây — đơn vị thời gian'], 1, 'N.'),
    Q('Trọng lực trên Trái Đất có chiều?', ['Song song mặt đất tuỳ vị trí', 'Đi lên trên', 'Hướng về tâm Trái Đất (xuống dưới)', 'Đi ngang'], 2, 'Trọng lực hướng xuống.'),
    Q('Khi đèn LED sáng, năng lượng chuyển hoá chủ yếu từ?', ['Điện năng → Quang năng', 'Hoá → Cơ', 'Quang năng → Điện năng', 'Cơ → Điện'], 0, 'Đèn = điện sang sáng.'),
    Q('Hệ Mặt Trời có mấy hành tinh?', ['6', '8', '9', '7'], 1, '8 hành tinh.'),
    Q('Hiện tượng ngày và đêm có là do?', ['Trái Đất tự quay quanh trục', 'Mặt Trời tắt – sáng', 'Mặt Trăng che', 'Bão từ'], 0, 'Tự quay.'),
  ], { difficulty: 3 }),
];

export const S6KHTN_SCENARIOS = indexBy(S6KHTN_WEEKS);
