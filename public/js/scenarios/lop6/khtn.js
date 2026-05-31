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
    Q('Khoa học tự nhiên (KHTN) là ngành khoa học nghiên cứu về?', ['Các hiện tượng, sự vật trong tự nhiên', 'Lịch sử các triều đại', 'Luật pháp xã hội', 'Tâm lý con người'], 0, 'KHTN nghiên cứu các sự vật, hiện tượng trong thế giới tự nhiên.'),
    Q('KHTN ở Lớp 6 tích hợp các phân môn nào?', ['Vật lý, Hoá học, Sinh học', 'Toán, Văn, Anh', 'Sử, Địa, GDCD', 'Nhạc, Hoạ, Thể dục'], 0, 'KHTN tích hợp 3 lĩnh vực: Lý – Hoá – Sinh.'),
    Q('Lĩnh vực nào nghiên cứu về sự sống, cây cối và động vật?', ['Vật lý', 'Hoá học', 'Sinh học', 'Thiên văn'], 2, 'Sinh học nghiên cứu các sinh vật.'),
    Q('Lĩnh vực nào nghiên cứu về chất và sự biến đổi của chất?', ['Vật lý', 'Hoá học', 'Sinh học', 'Y học'], 1, 'Hoá học nghiên cứu chất.'),
    Q('Lĩnh vực nào nghiên cứu về chuyển động, lực, năng lượng?', ['Vật lý', 'Hoá học', 'Sinh học', 'Địa lý'], 0, 'Vật lý nghiên cứu vận động vật chất, năng lượng.'),
    Q('Vai trò quan trọng của KHTN đối với đời sống là?', ['Cung cấp tri thức, giúp ứng dụng vào sản xuất – đời sống', 'Chỉ để thi cử', 'Không có giá trị thực tiễn', 'Chỉ dành cho nhà khoa học'], 0, 'KHTN tạo nền tảng cho công nghệ, y học, sản xuất.'),
    Q('Khi nghiên cứu KHTN, bước đầu tiên thường là?', ['Quan sát hiện tượng', 'Kết luận ngay', 'Viết báo cáo', 'Nhận giải thưởng'], 0, 'Phương pháp KHTN bắt đầu từ quan sát.'),
  ]),

  M(2, 'Một số dụng cụ đo và kính hiển vi', [
    Q('Dụng cụ dùng để đo chiều dài là?', ['Thước', 'Cân', 'Đồng hồ', 'Nhiệt kế'], 0, 'Thước (thước kẻ, thước dây, thước cuộn) đo độ dài.'),
    Q('Dụng cụ dùng để đo khối lượng là?', ['Thước', 'Cân', 'Bình chia độ', 'Kính lúp'], 1, 'Cân đo khối lượng (kg, g).'),
    Q('Dụng cụ dùng để đo thời gian là?', ['Đồng hồ', 'Nhiệt kế', 'Thước dây', 'Ống đong'], 0, 'Đồng hồ đo thời gian (giờ, phút, giây).'),
    Q('Kính lúp dùng để?', ['Quan sát vật nhỏ với độ phóng đại không lớn', 'Đo khối lượng', 'Đo nhiệt độ', 'Cân chính xác'], 0, 'Kính lúp phóng đại vài đến vài chục lần.'),
    Q('Để quan sát tế bào, ta cần dùng?', ['Kính hiển vi', 'Kính râm', 'Kính lúp đơn giản', 'Mắt thường'], 0, 'Kính hiển vi phóng đại hàng trăm đến nghìn lần.'),
    Q('Đơn vị đo khối lượng cơ bản trong hệ SI là?', ['mét (m)', 'kilôgam (kg)', 'giây (s)', 'lít (L)'], 1, 'Kilôgam là đơn vị khối lượng chuẩn SI.'),
    Q('Bình chia độ thường được dùng để đo?', ['Thể tích chất lỏng', 'Khối lượng', 'Nhiệt độ', 'Chiều dài'], 0, 'Bình chia độ đo thể tích.'),
  ]),

  M(3, 'An toàn trong phòng thực hành', [
    Q('Khi vào phòng thực hành KHTN, em cần?', ['Tuân thủ nội quy, mặc áo bảo hộ nếu có', 'Tự ý lấy hoá chất chơi', 'Ăn uống trong phòng', 'Chạy nhảy đùa giỡn'], 0, 'An toàn là quy tắc số 1.'),
    Q('Khi đun nóng hoá chất trong ống nghiệm, em phải?', ['Hướng miệng ống nghiệm ra xa người', 'Hướng miệng ống về phía bạn', 'Đậy kín miệng ống', 'Cầm ống bằng tay không'], 0, 'Tránh hoá chất bắn vào người.'),
    Q('Khi bị hoá chất dính vào da, em cần?', ['Rửa ngay với nhiều nước sạch, báo giáo viên', 'Lau bằng giẻ bẩn', 'Bỏ qua', 'Bôi thêm hoá chất khác'], 0, 'Rửa sạch ngay rồi báo người lớn.'),
    Q('Biểu tượng đầu lâu trên chai hoá chất nghĩa là?', ['Chất độc', 'Chất ăn được', 'Chất thơm', 'Chất rẻ tiền'], 0, 'Đầu lâu = cảnh báo độc hại.'),
    Q('Hành vi nào KHÔNG được phép trong phòng thực hành?', ['Nếm thử hoá chất', 'Đeo kính bảo hộ', 'Ghi chép cẩn thận', 'Rửa tay sau khi làm thí nghiệm'], 0, 'Tuyệt đối không nếm hoá chất.'),
    Q('Sau khi làm thí nghiệm xong, em phải?', ['Dọn dẹp, rửa dụng cụ, rửa tay sạch', 'Bỏ chạy ra ngoài', 'Để nguyên hoá chất trên bàn', 'Đổ chất thải xuống bồn rửa tuỳ ý'], 0, 'Vệ sinh và xử lý chất thải đúng nơi quy định.'),
  ]),

  M(4, 'Đo chiều dài và khối lượng', [
    Q('Đơn vị đo chiều dài trong hệ SI là?', ['mét (m)', 'kilôgam', 'giây', 'lít'], 0, 'Mét là đơn vị chuẩn đo chiều dài.'),
    Q('1 mét bằng?', ['10 cm', '100 cm', '1000 cm', '10000 cm'], 1, '1 m = 100 cm = 1000 mm.'),
    Q('1 km bằng?', ['100 m', '500 m', '1000 m', '10000 m'], 2, '1 km = 1000 m.'),
    Q('Để đo chiều dài bàn học, dùng dụng cụ nào phù hợp nhất?', ['Thước cuộn / thước dây 2 m', 'Thước kẻ 20 cm', 'Cân điện tử', 'Đồng hồ bấm giờ'], 0, 'Cần thước có giới hạn đo phù hợp.'),
    Q('Khi đọc kết quả đo chiều dài, mắt phải?', ['Nhìn vuông góc với vạch chia của thước', 'Nhìn nghiêng', 'Nhắm một mắt nhìn', 'Nhìn từ xa'], 0, 'Tránh sai số do nhìn nghiêng.'),
    Q('1 kg bằng?', ['10 g', '100 g', '1000 g', '10000 g'], 2, '1 kg = 1000 g.'),
    Q('Trước khi cân vật, ta cần?', ['Điều chỉnh kim cân về số 0', 'Bỏ qua bước này', 'Đặt vật trước rồi mới chỉnh', 'Đập mạnh cân'], 0, 'Hiệu chỉnh cân về 0 trước khi cân.'),
  ]),

  M(5, 'Đo thời gian và nhiệt độ', [
    Q('Đơn vị đo thời gian trong hệ SI là?', ['giây (s)', 'mét', 'kilôgam', 'lít'], 0, 'Giây là đơn vị thời gian chuẩn.'),
    Q('1 phút bằng?', ['10 giây', '60 giây', '100 giây', '1000 giây'], 1, '1 phút = 60 s.'),
    Q('1 giờ bằng?', ['30 phút', '60 phút', '100 phút', '120 phút'], 1, '1 giờ = 60 phút = 3600 s.'),
    Q('Để đo thời gian một học sinh chạy 60 m, dụng cụ phù hợp là?', ['Đồng hồ bấm giây', 'Nhiệt kế', 'Cân', 'Thước'], 0, 'Đồng hồ bấm giây đo khoảng thời gian ngắn.'),
    Q('Nhiệt kế dùng để đo?', ['Nhiệt độ', 'Khối lượng', 'Chiều dài', 'Thời gian'], 0, 'Nhiệt kế đo nhiệt độ.'),
    Q('Nhiệt độ thường của cơ thể người khoẻ mạnh khoảng?', ['25 °C', '37 °C', '50 °C', '100 °C'], 1, 'Khoảng 36,5–37 °C.'),
    Q('Đơn vị đo nhiệt độ phổ biến ở Việt Nam là?', ['độ C (°C)', 'độ F', 'kelvin', 'lít'], 0, '°C (Celsius) thường dùng.'),
    Q('Khi đo nhiệt độ một cốc nước, ta phải nhúng bầu nhiệt kế?', ['Ngập trong nước, không chạm đáy/thành cốc', 'Trên mặt nước', 'Sát đáy cốc', 'Chỉ chạm một góc'], 0, 'Bầu chìm trong chất lỏng để đo chính xác.'),
  ]),

  M(6, 'Sự đa dạng của chất — ba thể rắn, lỏng, khí', [
    Q('Mọi vật quanh ta đều được tạo nên từ?', ['Chất', 'Ánh sáng thuần tuý', 'Suy nghĩ', 'Bóng tối'], 0, 'Chất là thành phần của mọi vật thể.'),
    Q('Chất có thể tồn tại ở mấy thể cơ bản?', ['1', '2', '3', '5'], 2, 'Ba thể: rắn, lỏng, khí.'),
    Q('Ở thể rắn, các hạt cấu tạo chất?', ['Sắp xếp chặt chẽ, dao động tại chỗ', 'Chuyển động hỗn loạn, xa nhau', 'Bay tự do', 'Biến mất'], 0, 'Hạt ở thể rắn liên kết chặt.'),
    Q('Ở thể khí, các hạt?', ['Chuyển động hỗn loạn, ở xa nhau', 'Liên kết rất chặt', 'Đứng yên hoàn toàn', 'Bám chặt vào thành bình'], 0, 'Hạt thể khí chuyển động tự do, xa nhau.'),
    Q('Khi đun nước đá, nó chuyển từ thể nào sang thể nào?', ['Rắn → lỏng', 'Lỏng → khí', 'Khí → rắn', 'Rắn → khí'], 0, 'Nước đá tan thành nước lỏng (nóng chảy).'),
    Q('Khi nước bay hơi, đó là sự chuyển thể từ?', ['Lỏng → khí', 'Khí → lỏng', 'Rắn → khí', 'Lỏng → rắn'], 0, 'Bay hơi: lỏng → khí.'),
    Q('Tính chất chung của chất ở thể lỏng là?', ['Có thể tích xác định, dễ chảy, không có hình dạng cố định', 'Có hình dạng cố định', 'Chiếm toàn bộ thể tích bình chứa', 'Không thể nhìn thấy'], 0, 'Lỏng giữ thể tích, lấy hình bình chứa.'),
  ]),

  M(7, 'Oxygen (Oxi) — vai trò với sự sống và sự cháy', [
    Q('Khí cần thiết cho hô hấp của con người và động vật là?', ['Khí oxygen (O2)', 'Khí carbon dioxide (CO2)', 'Khí nitrogen (N2)', 'Khí methane'], 0, 'O2 dùng cho hô hấp tế bào.'),
    Q('Trong không khí, oxygen chiếm khoảng bao nhiêu phần trăm thể tích?', ['1%', '21%', '50%', '78%'], 1, 'Khoảng 21% thể tích không khí là O2.'),
    Q('Oxygen rất cần cho?', ['Sự cháy và sự hô hấp', 'Việc gây ngủ', 'Việc tắt lửa', 'Việc làm lạnh'], 0, 'Oxygen duy trì cháy và hô hấp.'),
    Q('Một ngọn nến đậy kín trong cốc thuỷ tinh sẽ?', ['Tắt sau một lúc do hết O2', 'Cháy mãi mãi', 'Cháy to hơn', 'Nổ'], 0, 'Hết O2 → nến tắt.'),
    Q('Cây xanh có vai trò?', ['Giải phóng O2 nhờ quang hợp', 'Hấp thụ hết O2 trong không khí', 'Tạo ra khí độc', 'Không ảnh hưởng tới O2'], 0, 'Cây quang hợp tạo O2.'),
    Q('Khí thường dùng cho người bệnh thiếu hô hấp ở bệnh viện là?', ['Oxygen', 'Carbon dioxide', 'Helium', 'Methane'], 0, 'Bình oxy y tế hỗ trợ thở.'),
  ]),

  M(8, 'Thành phần không khí — ô nhiễm và bảo vệ', [
    Q('Thành phần chính của không khí (theo thể tích) là?', ['Nitrogen (~78%) và Oxygen (~21%)', 'Chỉ O2', 'Chỉ CO2', 'Chỉ hơi nước'], 0, 'N2 ~78%, O2 ~21%, còn lại là khí khác và hơi nước.'),
    Q('Khí carbon dioxide (CO2) trong không khí có vai trò?', ['Cung cấp cho cây quang hợp', 'Cho người thở', 'Dập lửa hoàn toàn', 'Tạo mưa axit'], 0, 'CO2 là nguyên liệu quang hợp.'),
    Q('Nguyên nhân chính gây ô nhiễm không khí ở đô thị là?', ['Khí thải từ xe cộ, nhà máy', 'Cây xanh', 'Hồ nước', 'Mưa rào'], 0, 'Xe cộ và nhà máy thải nhiều khí độc.'),
    Q('Biện pháp nào giúp giảm ô nhiễm không khí?', ['Trồng nhiều cây xanh, dùng phương tiện công cộng', 'Đốt nhiều rác', 'Phá rừng', 'Mở rộng nhà máy không xử lý khí'], 0, 'Trồng cây và giảm khí thải.'),
    Q('Khi không khí ô nhiễm nặng, em nên?', ['Đeo khẩu trang, hạn chế ra ngoài', 'Tập thể dục ngoài trời lâu hơn', 'Hít thật sâu', 'Đốt thêm lá khô'], 0, 'Bảo vệ hệ hô hấp.'),
    Q('Mưa axit chủ yếu do?', ['Khí SO2, NOx từ nhà máy thải ra hoà với nước mưa', 'Cây xanh', 'Mặt Trời', 'Đất sạch'], 0, 'SO2, NOx → axit hoà trong mưa.'),
  ]),

  M(9, 'Một số vật liệu thông dụng (1) — kim loại, nhựa', [
    Q('Vật liệu nào dẫn điện và dẫn nhiệt tốt?', ['Kim loại', 'Nhựa', 'Gỗ khô', 'Cao su'], 0, 'Kim loại dẫn điện, dẫn nhiệt tốt.'),
    Q('Đồ vật bằng nhôm, sắt, đồng được làm từ?', ['Kim loại', 'Thực vật', 'Đất sét', 'Khí'], 0, 'Đó là các kim loại phổ biến.'),
    Q('Tính chất quan trọng của nhựa là?', ['Nhẹ, cách điện, khó phân huỷ', 'Dẫn điện rất tốt', 'Rất nặng', 'Tan trong nước'], 0, 'Nhựa nhẹ, cách điện, bền lâu.'),
    Q('Nhược điểm môi trường của đồ nhựa là?', ['Khó phân huỷ, gây ô nhiễm lâu dài', 'Dễ tan trong nước', 'Tự biến mất sau 1 ngày', 'Không gây ô nhiễm'], 0, 'Nhựa tồn tại hàng trăm năm trong môi trường.'),
    Q('Để hạn chế rác thải nhựa, em nên?', ['Dùng túi vải, bình nước cá nhân, hạn chế dùng 1 lần', 'Vứt nhựa xuống biển', 'Đốt nhựa trong nhà', 'Dùng đồ nhựa rồi vứt bừa bãi'], 0, 'Giảm – tái sử dụng – tái chế.'),
    Q('Sắt để lâu trong không khí ẩm thường?', ['Bị gỉ (han gỉ)', 'Sáng hơn', 'Biến thành vàng', 'Nhẹ hơn'], 0, 'Sắt + O2 + nước → gỉ sắt.'),
  ]),

  M(10, 'Một số vật liệu thông dụng (2) — gỗ, cao su, thuỷ tinh', [
    Q('Gỗ là vật liệu có nguồn gốc?', ['Thực vật (cây xanh)', 'Khoáng sản', 'Động vật', 'Hoá chất tổng hợp'], 0, 'Gỗ lấy từ thân cây.'),
    Q('Tính chất của gỗ là?', ['Cứng vừa, dễ gia công, cách nhiệt, cách điện', 'Dẫn điện rất tốt', 'Tan trong nước', 'Trong suốt'], 0, 'Gỗ là vật liệu truyền thống cho bàn, ghế, nhà.'),
    Q('Cao su có tính chất nổi bật là?', ['Đàn hồi tốt, cách điện', 'Cứng như kim loại', 'Tan trong nước', 'Dẫn điện rất tốt'], 0, 'Cao su đàn hồi, dùng làm lốp xe, dây thun.'),
    Q('Cao su thiên nhiên lấy từ?', ['Mủ cây cao su', 'Đất sét', 'Khoáng sản', 'Tre nứa'], 0, 'Mủ cây cao su (Hevea).'),
    Q('Thuỷ tinh có đặc điểm?', ['Trong suốt, cứng, dễ vỡ', 'Mềm như đất sét', 'Dẫn điện rất tốt', 'Đàn hồi mạnh'], 0, 'Thuỷ tinh trong suốt nhưng giòn.'),
    Q('Khi thuỷ tinh vỡ, em phải?', ['Đeo găng dày, dùng chổi quét, không nhặt tay không', 'Nhặt bằng tay không', 'Bỏ qua mảnh vỡ', 'Đập thêm cho vỡ vụn'], 0, 'Mảnh thuỷ tinh sắc, dễ đứt tay.'),
  ]),

  M(11, 'Nhiên liệu và năng lượng', [
    Q('Nhiên liệu là chất khi cháy giải phóng?', ['Năng lượng (nhiệt, ánh sáng)', 'Khí O2', 'Nước nguyên chất', 'Vàng'], 0, 'Cháy nhiên liệu → toả nhiệt + ánh sáng.'),
    Q('Nhóm nhiên liệu hoá thạch gồm?', ['Than đá, dầu mỏ, khí thiên nhiên', 'Gió, nước, nắng', 'Sữa, gạo, rau', 'Sắt, đồng, nhôm'], 0, 'Hoá thạch: than, dầu, khí.'),
    Q('Xăng dùng cho xe máy, ô tô được chế biến từ?', ['Dầu mỏ', 'Nước biển', 'Cây mía', 'Quặng sắt'], 0, 'Xăng là sản phẩm chưng cất dầu mỏ.'),
    Q('Năng lượng tái tạo gồm?', ['Năng lượng mặt trời, gió, thuỷ điện', 'Than đá', 'Dầu mỏ', 'Khí thiên nhiên'], 0, 'Tái tạo: nắng, gió, nước, sinh khối.'),
    Q('Khi sử dụng nhiên liệu, em nên?', ['Tiết kiệm, đốt cháy hiệu quả', 'Đốt càng nhiều càng tốt', 'Để rò rỉ', 'Đốt bừa bãi'], 0, 'Tiết kiệm vì hoá thạch có hạn.'),
    Q('Lợi ích lớn của năng lượng mặt trời là?', ['Sạch, không cạn kiệt', 'Gây ô nhiễm nặng', 'Rất khan hiếm', 'Có thể nổ bất ngờ'], 0, 'Mặt trời cho năng lượng sạch, vô tận trong tầm con người.'),
  ]),

  M(12, 'Lương thực, thực phẩm', [
    Q('Lương thực là?', ['Gạo, ngô, khoai, sắn — chứa nhiều tinh bột', 'Thịt, cá, trứng', 'Rau, củ, quả tươi', 'Đá, cát'], 0, 'Lương thực chủ yếu là nhóm cung tinh bột.'),
    Q('Thực phẩm cung cấp đạm (protein) chủ yếu là?', ['Thịt, cá, trứng, sữa, đậu', 'Gạo, ngô', 'Bánh kẹo', 'Nước lọc'], 0, 'Đạm có trong thịt cá trứng sữa, đậu hạt.'),
    Q('Rau, củ, quả tươi cung cấp chủ yếu?', ['Vitamin và chất xơ', 'Sắt vụn', 'Đường tinh khiết', 'Dầu mỡ'], 0, 'Rau quả giàu vitamin, chất xơ.'),
    Q('Để bảo quản thực phẩm tốt, ta thường?', ['Giữ lạnh, đóng gói kín, hạn chế ẩm', 'Để ngoài trời nắng nóng', 'Mở nắp lâu ngày', 'Để chung với hoá chất tẩy rửa'], 0, 'Giữ lạnh và kín giúp lâu hỏng.'),
    Q('Thực phẩm bị ôi thiu, mốc thì?', ['Tuyệt đối không ăn, dễ ngộ độc', 'Nấu lại vẫn ăn tốt', 'Ăn ít vẫn an toàn', 'Đem cho động vật ăn'], 0, 'Nấm mốc + vi khuẩn có thể sinh độc tố.'),
    Q('Một chế độ ăn cân đối nên có?', ['Đủ tinh bột, đạm, chất béo, vitamin, khoáng, đủ nước', 'Chỉ ăn thịt', 'Chỉ ăn rau', 'Chỉ uống nước ngọt'], 0, 'Đa dạng nhóm dinh dưỡng.'),
  ]),

  M(13, 'Hỗn hợp — chất tinh khiết — dung dịch', [
    Q('Chất tinh khiết là?', ['Chất chỉ gồm 1 loại chất, có tính chất xác định', 'Hỗn hợp của nhiều chất', 'Bất kỳ chất nào trong tự nhiên', 'Chỉ có nước'], 0, 'Chất tinh khiết: 1 thành phần duy nhất.'),
    Q('Hỗn hợp là?', ['Gồm 2 chất trở lên trộn lẫn', 'Chỉ gồm 1 chất', 'Chỉ là chất rắn', 'Chỉ là chất khí'], 0, 'Hỗn hợp do nhiều chất tạo thành.'),
    Q('Khi hoà tan muối vào nước, ta được?', ['Dung dịch muối — hỗn hợp đồng nhất', 'Hỗn hợp không đồng nhất', 'Chất tinh khiết', 'Hai chất tách rời rõ ràng'], 0, 'Dung dịch là hỗn hợp đồng nhất.'),
    Q('Trong dung dịch muối – nước, nước được gọi là?', ['Dung môi', 'Chất tan', 'Hỗn hợp', 'Chất rắn'], 0, 'Dung môi hoà tan chất khác; chất tan = muối.'),
    Q('Hỗn hợp dầu và nước là?', ['Hỗn hợp không đồng nhất', 'Dung dịch đồng nhất', 'Chất tinh khiết', 'Chất rắn nguyên chất'], 0, 'Dầu nổi trên nước, tách lớp rõ.'),
    Q('Ví dụ nào là dung dịch?', ['Nước đường', 'Cát + sỏi', 'Sữa chua', 'Bùn đất'], 0, 'Nước đường là dung dịch đồng nhất.'),
  ]),

  M(14, 'Tách chất ra khỏi hỗn hợp', [
    Q('Để tách cát ra khỏi nước, ta dùng phương pháp?', ['Lọc', 'Cô cạn', 'Chưng cất', 'Nam châm hút'], 0, 'Lọc bằng giấy lọc giữ cát lại.'),
    Q('Để tách muối ra khỏi nước biển, ta dùng?', ['Cô cạn (bay hơi nước)', 'Lọc', 'Hút nam châm', 'Đông đá'], 0, 'Đun cho nước bay hơi, muối còn lại.'),
    Q('Để tách bột sắt ra khỏi bột lưu huỳnh, ta dùng?', ['Nam châm', 'Lọc', 'Cô cạn', 'Hoà nước rồi uống'], 0, 'Sắt bị nam châm hút.'),
    Q('Chưng cất phù hợp để tách?', ['Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau (ví dụ nước – rượu)', 'Cát và sỏi', 'Bột sắt và bột nhôm', 'Đường tinh khiết'], 0, 'Chưng cất dựa vào nhiệt độ sôi.'),
    Q('Khi pha cà phê bằng phin, lưới phin có vai trò?', ['Lọc (giữ bã, cho nước đi qua)', 'Cô cạn', 'Nam châm', 'Chưng cất'], 0, 'Phin = bộ lọc.'),
    Q('Khi làm nước mưa thành nước cất, ta dùng?', ['Chưng cất', 'Lọc cát', 'Cô cạn muối', 'Trộn thêm muối'], 0, 'Chưng cất cho nước tinh khiết hơn.'),
  ]),

  M(15, 'Tế bào — đơn vị cơ sở của sự sống (1)', [
    Q('Đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống là?', ['Tế bào', 'Phân tử nước', 'Nguyên tử', 'Cơ quan'], 0, 'Mọi sinh vật cấu tạo từ tế bào.'),
    Q('Người phát hiện tế bào (qua quan sát nút chai bần) là?', ['Robert Hooke', 'Newton', 'Edison', 'Einstein'], 0, 'Robert Hooke, năm 1665.'),
    Q('Để quan sát tế bào, ta cần?', ['Kính hiển vi', 'Mắt thường', 'Kính râm', 'Ống nhòm'], 0, 'Tế bào rất nhỏ, cần kính hiển vi.'),
    Q('Tế bào nhân sơ KHÁC tế bào nhân thực ở chỗ?', ['Không có nhân hoàn chỉnh (không màng nhân)', 'Lớn hơn nhiều', 'Có nhiều cơ quan tử phức tạp', 'Chỉ có ở động vật'], 0, 'Nhân sơ: vi khuẩn — không có màng nhân.'),
    Q('Ví dụ về sinh vật có tế bào nhân sơ là?', ['Vi khuẩn', 'Người', 'Cây xanh', 'Nấm men'], 0, 'Vi khuẩn (bacteria) thuộc nhân sơ.'),
    Q('Ví dụ về sinh vật có tế bào nhân thực là?', ['Cây xanh, động vật, nấm', 'Tất cả vi khuẩn', 'Virus', 'Đá'], 0, 'Thực vật, động vật, nấm có nhân hoàn chỉnh.'),
  ]),

  M(16, 'Tế bào — đơn vị cơ sở của sự sống (2)', [
    Q('Cấu tạo cơ bản của một tế bào nhân thực gồm?', ['Màng tế bào, tế bào chất, nhân', 'Chỉ có nhân', 'Chỉ có màng', 'Chỉ có ti thể'], 0, '3 phần chính: màng – chất – nhân.'),
    Q('Tế bào thực vật KHÁC tế bào động vật ở điểm?', ['Có thành tế bào (cellulose) và lục lạp', 'Không có nhân', 'Không có màng', 'Không có tế bào chất'], 0, 'Thực vật có thành cellulose và lục lạp quang hợp.'),
    Q('Cơ quan tử thực hiện quang hợp trong tế bào thực vật là?', ['Lục lạp (chloroplast)', 'Ti thể', 'Nhân', 'Ribosome'], 0, 'Lục lạp chứa diệp lục.'),
    Q('Cơ quan tử cung cấp năng lượng cho tế bào là?', ['Ti thể (mitochondria)', 'Lục lạp', 'Vách tế bào', 'Lưới nội chất'], 0, 'Ti thể: "nhà máy năng lượng".'),
    Q('Nhân tế bào có vai trò?', ['Điều khiển hoạt động sống, chứa vật chất di truyền (DNA)', 'Cung cấp năng lượng', 'Quang hợp', 'Tổng hợp dầu'], 0, 'Nhân chứa DNA.'),
    Q('Đa số tế bào có kích thước?', ['Rất nhỏ, chỉ thấy qua kính hiển vi', 'Bằng quả táo', 'Bằng quả bóng', 'Có thể thấy rõ bằng mắt thường ở mọi loài'], 0, 'Tế bào nhỏ cỡ micromet.'),
  ]),

  M(17, 'Sự lớn lên và sinh sản của tế bào', [
    Q('Tế bào lớn lên nhờ?', ['Trao đổi chất với môi trường, tăng kích thước', 'Hút nắng trực tiếp', 'Tự sinh ra từ đá', 'Không lớn lên'], 0, 'Lấy chất dinh dưỡng → tổng hợp chất → lớn lên.'),
    Q('Khi đạt kích thước nhất định, tế bào sẽ?', ['Phân chia thành 2 tế bào con', 'Biến mất', 'Đứng yên mãi', 'Hoá thành nước'], 0, 'Phân bào là cách sinh sản của tế bào.'),
    Q('Sự lớn lên và sinh sản của tế bào giúp cơ thể?', ['Lớn lên, thay thế tế bào già/chết', 'Nhỏ đi', 'Biến thành chất rắn', 'Không thay đổi'], 0, 'Cơ thể tăng trưởng, hồi phục tổn thương.'),
    Q('Khi em bị đứt tay nhẹ và lành lại, đó là nhờ?', ['Tế bào phân chia, thay thế vùng tổn thương', 'Kim loại tự dán lại', 'Tế bào hoá thành đá', 'Vi khuẩn lấp đầy'], 0, 'Tế bào da mới được sinh ra.'),
    Q('Tế bào có tuổi thọ?', ['Có giới hạn, tuỳ loại tế bào', 'Sống mãi không chết', 'Chỉ sống 1 giây', 'Không có khái niệm tuổi'], 0, 'Mỗi loại tế bào có tuổi thọ riêng.'),
    Q('Ung thư là hiện tượng?', ['Tế bào phân chia mất kiểm soát', 'Tế bào ngừng phân chia hẳn', 'Cơ thể hết tế bào', 'Tế bào hoá vàng'], 0, 'Phân chia không kiểm soát → khối u.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('KHTN Lớp 6 tích hợp 3 phân môn nào?', ['Vật lý – Hoá học – Sinh học', 'Toán – Văn – Anh', 'Sử – Địa – GDCD', 'Nhạc – Hoạ – Thể dục'], 0, 'KHTN = Lý + Hoá + Sinh.'),
    Q('Đơn vị đo chiều dài chuẩn SI là?', ['mét (m)', 'kg', 'giây', 'lít'], 0, 'Mét.'),
    Q('Đơn vị đo khối lượng chuẩn SI là?', ['mét', 'kilôgam', 'giây', 'lít'], 1, 'Kilôgam.'),
    Q('Chất có thể tồn tại ở các thể?', ['Rắn, lỏng, khí', 'Chỉ rắn', 'Chỉ lỏng', 'Chỉ khí'], 0, '3 thể cơ bản.'),
    Q('Oxygen chiếm khoảng bao nhiêu % thể tích không khí?', ['1%', '21%', '50%', '78%'], 1, '~21%.'),
    Q('Để tách muối khỏi nước biển, ta dùng?', ['Cô cạn', 'Lọc', 'Nam châm', 'Trộn dầu'], 0, 'Bay hơi nước → còn muối.'),
    Q('Để tách bột sắt khỏi cát, ta dùng?', ['Nam châm', 'Lọc bằng vải', 'Cô cạn', 'Chưng cất'], 0, 'Sắt nhiễm từ.'),
    Q('Đơn vị cấu tạo của mọi sinh vật là?', ['Tế bào', 'Phân tử', 'Cơ quan', 'Mô'], 0, 'Tế bào.'),
    Q('Tế bào thực vật KHÁC tế bào động vật vì?', ['Có thành cellulose và lục lạp', 'Không có nhân', 'Không có màng', 'Không có chất tế bào'], 0, 'Thành + lục lạp.'),
    Q('Ti thể có chức năng?', ['Cung cấp năng lượng cho tế bào', 'Quang hợp', 'Chứa DNA', 'Bảo vệ tế bào'], 0, 'Ti thể = "nhà máy ATP".'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Cơ thể đa bào — các cấp tổ chức (1): mô – cơ quan', [
    Q('Cơ thể đa bào là cơ thể được cấu tạo từ?', ['Nhiều tế bào', 'Một tế bào', 'Không có tế bào', 'Chỉ có nước'], 0, 'Đa bào = nhiều tế bào.'),
    Q('Mô là?', ['Tập hợp tế bào có cùng cấu trúc và chức năng', 'Một cơ quan đơn lẻ', 'Một loại khoáng chất', 'Tập hợp các con vật'], 0, 'Tế bào → mô.'),
    Q('Ví dụ về mô ở thực vật là?', ['Mô biểu bì lá, mô dẫn', 'Mô cơ vân ở người', 'Khoáng chất', 'Đất sét'], 0, 'Thực vật có mô biểu bì, mô dẫn (mạch gỗ, mạch rây).'),
    Q('Ví dụ về mô ở động vật là?', ['Mô cơ, mô thần kinh, mô liên kết', 'Mô dẫn nước', 'Mô lục lạp', 'Mô cellulose'], 0, 'Động vật có 4 nhóm mô chính.'),
    Q('Cơ quan là?', ['Nhiều mô khác nhau cùng phối hợp thực hiện chức năng', 'Một tế bào', 'Một mô', 'Một loại chất'], 0, 'Mô → cơ quan.'),
    Q('Ví dụ về cơ quan ở thực vật là?', ['Rễ, thân, lá, hoa', 'Tim, phổi', 'Não, dạ dày', 'Cơ vân'], 0, 'Rễ – thân – lá – hoa – quả – hạt là cơ quan của cây.'),
  ]),

  M(20, 'Cơ thể đa bào — các cấp tổ chức (2): hệ cơ quan – cơ thể', [
    Q('Hệ cơ quan là?', ['Nhiều cơ quan phối hợp thực hiện một quá trình sống', 'Một mô', 'Một tế bào', 'Một chất hoá học'], 0, 'Cơ quan → hệ cơ quan.'),
    Q('Hệ tiêu hoá ở người gồm các cơ quan như?', ['Miệng, dạ dày, ruột, gan, tuỵ', 'Tim, mạch máu', 'Phổi, khí quản', 'Não, tuỷ sống'], 0, 'Tiêu hoá: miệng → dạ dày → ruột.'),
    Q('Hệ tuần hoàn ở người gồm?', ['Tim và hệ mạch máu', 'Phổi và khí quản', 'Não và dây thần kinh', 'Thận và bàng quang'], 0, 'Tim bơm, mạch dẫn máu.'),
    Q('Hệ thần kinh ở người gồm?', ['Não, tuỷ sống, dây thần kinh', 'Tim, mạch máu', 'Phổi, khí quản', 'Dạ dày, ruột'], 0, 'Điều khiển và điều phối hoạt động.'),
    Q('Thứ tự đúng các cấp tổ chức cơ thể đa bào (từ nhỏ đến lớn) là?', ['Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', 'Cơ thể → Tế bào → Mô', 'Mô → Tế bào → Cơ quan', 'Cơ quan → Tế bào → Mô'], 0, 'Tế bào là đơn vị nhỏ nhất.'),
    Q('Ở cây xanh, hệ cơ quan gồm?', ['Hệ rễ và hệ chồi (thân + lá + hoa)', 'Hệ tim mạch', 'Hệ thần kinh trung ương', 'Hệ bài tiết'], 0, 'Thực vật có hệ rễ và hệ chồi.'),
  ]),

  M(21, 'Phân loại sinh vật — khoá lưỡng phân', [
    Q('Sinh vật được chia thành các giới chính như?', ['Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật', 'Chỉ thực vật và động vật', 'Chỉ vi khuẩn', 'Chỉ con người và cây'], 0, '5 giới truyền thống.'),
    Q('Đơn vị phân loại nhỏ nhất là?', ['Loài', 'Giới', 'Ngành', 'Lớp'], 0, 'Loài là đơn vị cơ sở.'),
    Q('Thứ tự đúng từ nhỏ đến lớn là?', ['Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới', 'Giới → Loài', 'Loài → Giới → Ngành', 'Bộ → Loài → Họ'], 0, '7 bậc phân loại cơ bản.'),
    Q('Khoá lưỡng phân là công cụ?', ['Phân loại sinh vật theo cặp đặc điểm đối lập', 'Đo chiều dài', 'Đo khối lượng', 'Đếm số ngày'], 0, 'Mỗi bước chọn 1 trong 2 đặc điểm.'),
    Q('Khi xây khoá lưỡng phân, ở mỗi bước có?', ['2 lựa chọn đối lập', '3 lựa chọn', '10 lựa chọn', 'Không có lựa chọn'], 0, '"Lưỡng" = hai.'),
    Q('Ưu điểm của khoá lưỡng phân là?', ['Dễ dùng, giúp xác định loài bằng câu hỏi đúng/sai', 'Đắt tiền', 'Cần máy tính phức tạp', 'Chỉ dùng cho động vật'], 0, 'Trực quan, dễ áp dụng tại lớp.'),
  ]),

  M(22, 'Vi khuẩn', [
    Q('Vi khuẩn là sinh vật có tế bào?', ['Nhân sơ, đơn bào, kích thước rất nhỏ', 'Nhân thực, đa bào', 'Không có tế bào', 'Lớn hơn cả người'], 0, 'Vi khuẩn = đơn bào nhân sơ.'),
    Q('Để quan sát vi khuẩn, ta cần?', ['Kính hiển vi', 'Mắt thường', 'Kính lúp đơn giản', 'Ống nhòm'], 0, 'Vi khuẩn rất nhỏ.'),
    Q('Vi khuẩn có ích cho con người, ví dụ?', ['Lên men sữa chua, làm dưa muối', 'Gây tất cả các bệnh', 'Phá tất cả thức ăn', 'Không có ích'], 0, 'Lactobacillus dùng làm sữa chua.'),
    Q('Vi khuẩn có hại có thể gây?', ['Bệnh tả, lao, viêm họng', 'Mọi điều tốt đẹp', 'Cây cao thêm', 'Trời nắng'], 0, 'Một số vi khuẩn gây bệnh nguy hiểm.'),
    Q('Để phòng tránh bệnh do vi khuẩn, ta nên?', ['Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân', 'Ăn đồ ôi', 'Không rửa tay', 'Uống nước lã'], 0, 'Vệ sinh là cách phòng tốt nhất.'),
    Q('Thuốc thường được dùng để tiêu diệt vi khuẩn gây bệnh là?', ['Kháng sinh', 'Vitamin C', 'Nước muối loãng (chỉ làm sạch)', 'Đường'], 0, 'Kháng sinh tiêu diệt/ức chế vi khuẩn — phải có chỉ định bác sĩ.'),
  ]),

  M(23, 'Virus — đặc điểm cơ bản', [
    Q('Virus có cấu tạo?', ['Chưa có cấu tạo tế bào, gồm vỏ protein và lõi vật chất di truyền', 'Đầy đủ tế bào như vi khuẩn', 'Là một tế bào nhân thực', 'Là khoáng vật'], 0, 'Virus chưa được coi là tế bào.'),
    Q('Virus sinh sản (nhân lên) ở đâu?', ['Bên trong tế bào vật chủ', 'Trong không khí khô', 'Trong đá', 'Tự do trong nước'], 0, 'Virus là ký sinh bắt buộc nội bào.'),
    Q('Kích thước virus so với vi khuẩn?', ['Nhỏ hơn nhiều', 'Lớn hơn nhiều', 'Bằng nhau', 'Không xác định'], 0, 'Virus nhỏ cỡ nanomet.'),
    Q('Ví dụ bệnh do virus gây ra ở người?', ['Cúm, COVID-19, sởi, viêm gan B', 'Lao phổi do vi khuẩn', 'Sâu răng', 'Gãy xương'], 0, 'Nhiều bệnh truyền nhiễm do virus.'),
    Q('Cách hiệu quả phòng nhiều bệnh do virus là?', ['Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi cần', 'Uống kháng sinh tuỳ ý', 'Bỏ qua', 'Tiếp xúc gần người bệnh'], 0, 'Vắc-xin tạo miễn dịch.'),
    Q('Kháng sinh có tác dụng tiêu diệt virus không?', ['Không, kháng sinh chỉ diệt vi khuẩn', 'Có, diệt mọi virus', 'Có, nhưng chỉ với cảm cúm', 'Không xác định'], 0, 'Kháng sinh KHÔNG có tác dụng với virus.'),
  ]),

  M(24, 'Nguyên sinh vật và Nấm', [
    Q('Nguyên sinh vật là?', ['Sinh vật nhân thực, phần lớn đơn bào, sống trong nước hoặc nơi ẩm', 'Sinh vật nhân sơ', 'Virus', 'Khoáng vật'], 0, 'Ví dụ: trùng roi, trùng giày, tảo.'),
    Q('Ví dụ về nguyên sinh vật là?', ['Trùng roi, trùng giày, amip', 'Vi khuẩn lao', 'Virus cúm', 'Cây xoài'], 0, 'Nguyên sinh động vật quen thuộc.'),
    Q('Nấm thuộc giới?', ['Nấm (Fungi)', 'Thực vật', 'Động vật', 'Khởi sinh'], 0, 'Nấm là giới riêng, nhân thực, không quang hợp.'),
    Q('Nấm dinh dưỡng bằng cách?', ['Hấp thụ chất hữu cơ từ môi trường', 'Quang hợp như cây', 'Săn mồi như động vật', 'Tự tổng hợp từ ánh sáng'], 0, 'Nấm là sinh vật dị dưỡng.'),
    Q('Ví dụ nấm có ích là?', ['Nấm rơm, nấm hương, nấm men làm bánh mì', 'Nấm độc xanh đen', 'Mọi loại nấm mốc trên thức ăn', 'Nấm gây hắc lào'], 0, 'Nhiều nấm dùng làm thực phẩm, men.'),
    Q('Khi gặp nấm lạ trong rừng, em phải?', ['Không hái, không ăn vì có thể là nấm độc', 'Ăn thử ngay', 'Cho bạn ăn thử', 'Đem nấu canh'], 0, 'Nấm độc có thể gây tử vong.'),
  ]),

  M(25, 'Thực vật', [
    Q('Thực vật có đặc điểm chung là?', ['Có khả năng quang hợp nhờ lục lạp', 'Săn mồi như động vật', 'Không có tế bào', 'Sống trong nước biển hết'], 0, 'Quang hợp tạo chất hữu cơ.'),
    Q('Thực vật được chia thành các nhóm chính như?', ['Rêu, Dương xỉ, Hạt trần, Hạt kín', 'Vi khuẩn, Nấm, Tảo', 'Côn trùng, Cá, Chim', 'Chỉ có cây xoài'], 0, '4 nhóm chính theo SGK.'),
    Q('Đặc điểm của thực vật Hạt kín là?', ['Hạt nằm trong quả, có hoa', 'Hạt nằm lộ trên lá noãn (như thông)', 'Không có hoa, không có hạt', 'Không có rễ'], 0, 'Hạt kín = thực vật có hoa.'),
    Q('Đặc điểm của thực vật Hạt trần là?', ['Hạt lộ trên lá noãn (không có quả thật)', 'Hạt nằm trong quả thật', 'Không có hạt', 'Không có thân'], 0, 'Ví dụ: thông, tùng, vạn tuế.'),
    Q('Rêu thường sống ở?', ['Nơi ẩm ướt, bóng râm', 'Sa mạc khô nóng', 'Trong nước biển mặn', 'Trên đá khô bốc cháy'], 0, 'Rêu ưa ẩm.'),
    Q('Vai trò của thực vật trong tự nhiên?', ['Cung cấp O2, thức ăn, nơi ở cho động vật, giữ đất, điều hoà khí hậu', 'Không có vai trò gì', 'Chỉ làm cảnh', 'Chỉ tốn nước'], 0, 'Thực vật là nền tảng của các hệ sinh thái.'),
  ]),

  M(26, 'Động vật không xương sống', [
    Q('Động vật không xương sống có đặc điểm?', ['Không có xương sống bên trong cơ thể', 'Có cột sống cứng cáp', 'Luôn có 4 chân', 'Luôn biết bay'], 0, 'Không có cột sống.'),
    Q('Đại diện nhóm Ruột khoang là?', ['Thuỷ tức, sứa, san hô', 'Cá, ếch', 'Chim, gà', 'Người'], 0, 'Ruột khoang có khoang tiêu hoá hình túi.'),
    Q('Đại diện nhóm Giun là?', ['Giun đất, giun đũa, sán', 'Bướm, ong', 'Cua, tôm', 'Cá chép'], 0, 'Giun dẹp, giun tròn, giun đốt.'),
    Q('Đại diện nhóm Thân mềm là?', ['Ốc, hến, mực', 'Châu chấu, dế', 'Chim sẻ', 'Bò'], 0, 'Thân mềm: cơ thể mềm, thường có vỏ.'),
    Q('Đại diện nhóm Chân khớp là?', ['Tôm, cua, nhện, châu chấu', 'Sứa', 'Cá', 'Cây xoài'], 0, 'Chân khớp có bộ xương ngoài, chân phân đốt.'),
    Q('Vai trò của giun đất với đất trồng?', ['Làm tơi xốp đất, tăng độ phì', 'Phá hoại rễ cây toàn bộ', 'Làm cứng đất', 'Không liên quan'], 0, 'Giun đất là "bạn của nhà nông".'),
  ]),

  M(27, 'Động vật có xương sống', [
    Q('Động vật có xương sống có đặc điểm chung?', ['Có cột sống bên trong cơ thể', 'Không có xương', 'Luôn có vảy', 'Luôn sống dưới nước'], 0, 'Cột sống là tiêu chí.'),
    Q('Cá thở bằng?', ['Mang', 'Phổi', 'Da', 'Cánh'], 0, 'Cá có mang để lấy O2 trong nước.'),
    Q('Lưỡng cư có đại diện là?', ['Ếch, nhái, cóc', 'Cá chép, cá rô', 'Rắn, thằn lằn', 'Chim, dơi'], 0, 'Lưỡng cư sống cạn và nước.'),
    Q('Bò sát có đại diện là?', ['Rắn, thằn lằn, rùa, cá sấu', 'Ếch nhái', 'Cá', 'Chim sẻ'], 0, 'Bò sát có vảy sừng, đẻ trứng.'),
    Q('Chim có đặc điểm?', ['Có lông vũ, có cánh, đẻ trứng', 'Có vảy như cá', 'Nuôi con bằng sữa', 'Có mang'], 0, 'Lông vũ là đặc trưng của lớp Chim.'),
    Q('Thú (động vật có vú) có đặc điểm?', ['Có lông mao, đẻ con, nuôi con bằng sữa', 'Đẻ trứng và không có lông', 'Sống hoàn toàn dưới nước có vảy', 'Có cánh và lông vũ'], 0, 'Thú nuôi con bằng sữa.'),
  ]),

  M(28, 'Đa dạng sinh học — bảo vệ', [
    Q('Đa dạng sinh học là?', ['Sự phong phú về loài, gen, hệ sinh thái', 'Chỉ có nhiều loài chim', 'Chỉ là số lượng động vật', 'Sự đông dân'], 0, 'Đa dạng ở 3 mức độ.'),
    Q('Việt Nam được coi là quốc gia?', ['Có đa dạng sinh học cao', 'Không có động vật', 'Chỉ có sa mạc', 'Không có rừng'], 0, 'VN nằm trong số nước có đa dạng sinh học cao.'),
    Q('Nguyên nhân làm suy giảm đa dạng sinh học là?', ['Phá rừng, săn bắt trái phép, ô nhiễm', 'Trồng rừng', 'Bảo vệ động vật hoang dã', 'Lập khu bảo tồn'], 0, 'Hoạt động con người là nguyên nhân chính.'),
    Q('Khu bảo tồn thiên nhiên có vai trò?', ['Bảo vệ các loài quý hiếm và hệ sinh thái', 'Để khai thác gỗ', 'Để xây nhà máy', 'Để trồng độc canh'], 0, 'Bảo tồn nguồn gen, sinh cảnh.'),
    Q('Hành động nào KHÔNG bảo vệ đa dạng sinh học?', ['Săn bắt động vật hoang dã trái phép', 'Trồng cây gây rừng', 'Không xả rác', 'Tham gia chiến dịch bảo vệ rừng'], 0, 'Săn bắt trái phép làm suy giảm loài.'),
    Q('Học sinh có thể bảo vệ đa dạng sinh học bằng cách?', ['Trồng cây, tiết kiệm giấy, không dùng đồ làm từ động vật quý hiếm', 'Bẻ cây bẻ cành', 'Vứt rác xuống sông', 'Bắt chim non về nuôi'], 0, 'Hành động nhỏ tạo thay đổi lớn.'),
  ]),

  M(29, 'Lực — tác dụng của lực', [
    Q('Lực là?', ['Tác dụng đẩy hoặc kéo của vật này lên vật khác', 'Một dạng chất rắn', 'Một loại hoá chất', 'Một loại tế bào'], 0, 'Lực = đẩy hoặc kéo.'),
    Q('Đơn vị đo lực là?', ['Newton (N)', 'kilôgam', 'mét', 'giây'], 0, 'Newton, ký hiệu N.'),
    Q('Dụng cụ đo lực là?', ['Lực kế', 'Cân điện tử', 'Thước', 'Đồng hồ'], 0, 'Lực kế lò xo đo độ lớn lực.'),
    Q('Lực có thể làm vật?', ['Biến dạng hoặc thay đổi chuyển động', 'Biến mất hoàn toàn', 'Tự sinh ra chất mới', 'Hoá thành ánh sáng'], 0, '2 tác dụng cơ bản của lực.'),
    Q('Ví dụ lực làm vật biến dạng là?', ['Nén lò xo, bóp quả bóng cao su', 'Đẩy xe lăn', 'Kéo xe trên đường thẳng', 'Quăng quả bóng'], 0, 'Biến dạng = thay đổi hình dạng.'),
    Q('Ví dụ lực làm thay đổi chuyển động là?', ['Đá vào quả bóng đang đứng yên', 'Bóp bóng', 'Bẻ cong thước nhựa', 'Nén lò xo'], 0, 'Lực thay đổi vận tốc.'),
  ]),

  M(30, 'Biểu diễn lực — lực tiếp xúc và không tiếp xúc', [
    Q('Lực được biểu diễn bằng?', ['Mũi tên (có gốc, phương, chiều, độ lớn)', 'Một đường thẳng không hướng', 'Một chấm tròn', 'Một con số đơn thuần'], 0, 'Lực là đại lượng vectơ.'),
    Q('Mũi tên biểu diễn lực có gốc tại?', ['Điểm đặt của lực', 'Đâu cũng được', 'Đầu kia của vật', 'Trên trời'], 0, 'Gốc = điểm đặt.'),
    Q('Lực tiếp xúc là lực?', ['Sinh ra khi hai vật tiếp xúc trực tiếp', 'Tác dụng ở xa, không cần chạm', 'Chỉ có trong sách', 'Không có thật'], 0, 'Ví dụ: tay đẩy bàn.'),
    Q('Lực không tiếp xúc là?', ['Lực hấp dẫn, lực từ giữa nam châm và sắt ở khoảng cách', 'Lực tay đẩy bàn', 'Lực kéo dây thừng', 'Lực ép quả bóng'], 0, 'Tác dụng từ xa.'),
    Q('Hai vật tương tác bằng lực thì?', ['Đồng thời tác dụng lực lên nhau', 'Chỉ một vật tác dụng', 'Không có gì xảy ra', 'Tự biến mất'], 0, 'Lực có tính tương tác (định luật III Newton).'),
    Q('Ví dụ lực không tiếp xúc trong đời sống?', ['Trái Đất hút quả táo rơi', 'Tay kéo dây cung', 'Đá vào quả bóng', 'Đẩy ghế'], 0, 'Lực hấp dẫn tác dụng từ xa.'),
  ]),

  M(31, 'Lực ma sát, lực hấp dẫn và trọng lực', [
    Q('Lực ma sát xuất hiện khi?', ['Hai mặt tiếp xúc trượt hoặc có xu hướng trượt lên nhau', 'Hai vật ở rất xa', 'Vật đứng yên trong chân không', 'Không bao giờ có'], 0, 'Ma sát chống chuyển động tương đối.'),
    Q('Ma sát có ích trong trường hợp?', ['Giữ chân không trượt khi đi bộ', 'Làm máy nóng quá nhanh', 'Mài mòn lốp xe', 'Tạo tiếng ồn'], 0, 'Không có ma sát → trơn trượt.'),
    Q('Ma sát có hại trong trường hợp?', ['Làm mòn lốp xe, làm nóng động cơ', 'Giúp viết được bằng bút chì', 'Giúp xe phanh được', 'Giúp đi lại'], 0, 'Ma sát gây mòn, tốn năng lượng.'),
    Q('Cách giảm ma sát có hại trong máy móc?', ['Bôi dầu mỡ, dùng vòng bi', 'Đổ thêm cát', 'Cho thêm đá vào', 'Để khô hoàn toàn'], 0, 'Bôi trơn để giảm mòn.'),
    Q('Lực hấp dẫn do vật nào của Trái Đất gây ra cho vật ở bề mặt?', ['Trái Đất hút mọi vật về phía nó', 'Mặt Trăng', 'Mặt Trời gần', 'Sao chổi'], 0, 'Trái Đất tạo lực hấp dẫn lên vật trên bề mặt.'),
    Q('Trọng lực tác dụng lên vật có phương và chiều?', ['Phương thẳng đứng, chiều từ trên xuống', 'Phương nằm ngang', 'Chiều từ dưới lên', 'Bất kỳ chiều nào'], 0, 'Trọng lực luôn hướng về tâm Trái Đất.'),
    Q('Một vật có khối lượng 1 kg thì trọng lượng ở Trái Đất xấp xỉ?', ['10 N', '1 N', '100 N', '0 N'], 0, 'P = 10 m ≈ 10 N với m = 1 kg.'),
  ]),

  M(32, 'Năng lượng — các dạng năng lượng', [
    Q('Năng lượng là?', ['Đại lượng đặc trưng cho khả năng thực hiện công, gây biến đổi', 'Một chất lỏng', 'Một loại tế bào', 'Một loại vi khuẩn'], 0, 'Năng lượng gắn với biến đổi.'),
    Q('Đơn vị đo năng lượng trong SI là?', ['Jun (J)', 'Newton', 'mét', 'giây'], 0, 'Jun (J).'),
    Q('Dạng năng lượng nào do chuyển động?', ['Động năng', 'Thế năng hấp dẫn', 'Hoá năng', 'Quang năng'], 0, 'Vật chuyển động → có động năng.'),
    Q('Quả táo trên cây ở độ cao h so với mặt đất có dạng năng lượng?', ['Thế năng hấp dẫn', 'Động năng', 'Nhiệt năng', 'Điện năng'], 0, 'Thế năng phụ thuộc vị trí.'),
    Q('Năng lượng do ánh sáng mang tới là?', ['Quang năng', 'Hoá năng', 'Cơ năng', 'Điện năng'], 0, 'Ánh sáng = quang năng.'),
    Q('Năng lượng dự trữ trong nhiên liệu, thức ăn là?', ['Hoá năng', 'Quang năng', 'Cơ năng', 'Điện năng'], 0, 'Hoá năng giải phóng khi xảy ra phản ứng (cháy, tiêu hoá).'),
    Q('Năng lượng nhiệt thường liên quan đến?', ['Sự chuyển động của các hạt vi mô', 'Vận tốc xe', 'Chiều cao', 'Màu sắc'], 0, 'Nhiệt năng = tổng động năng các hạt.'),
  ]),

  M(33, 'Bảo toàn và chuyển hoá năng lượng', [
    Q('Định luật bảo toàn năng lượng nói rằng?', ['Năng lượng không tự sinh ra hoặc mất đi, chỉ chuyển từ dạng này sang dạng khác', 'Năng lượng tự sinh ra từ không khí', 'Năng lượng biến mất hoàn toàn', 'Năng lượng chỉ có 1 dạng'], 0, 'Bảo toàn năng lượng.'),
    Q('Khi đèn điện sáng, năng lượng chuyển hoá chủ yếu là?', ['Điện năng → Quang năng (và nhiệt)', 'Quang năng → Điện năng', 'Cơ năng → Điện năng', 'Hoá năng → Cơ năng'], 0, 'Đèn biến điện thành ánh sáng và nhiệt.'),
    Q('Quạt điện hoạt động chuyển hoá năng lượng từ?', ['Điện năng → Cơ năng (và nhiệt, âm thanh)', 'Cơ năng → Điện năng', 'Quang năng → Cơ năng', 'Nhiệt → Hoá'], 0, 'Động cơ điện sinh chuyển động.'),
    Q('Pin mặt trời chuyển hoá năng lượng từ?', ['Quang năng → Điện năng', 'Điện năng → Quang năng', 'Cơ năng → Điện năng', 'Nhiệt → Cơ năng'], 0, 'Pin quang điện = từ ánh sáng.'),
    Q('Khi đốt củi, năng lượng chuyển hoá?', ['Hoá năng → Nhiệt năng và Quang năng', 'Cơ → Điện', 'Quang → Hoá', 'Điện → Quang'], 0, 'Phản ứng cháy giải phóng nhiệt và sáng.'),
    Q('Để tiết kiệm năng lượng ở nhà, em nên?', ['Tắt thiết bị khi không dùng, dùng đèn LED', 'Bật tất cả thiết bị suốt ngày', 'Để cửa tủ lạnh mở lâu', 'Bật điều hoà 16 °C cả ngày'], 0, 'Tiết kiệm điện giúp giảm chi phí và bảo vệ môi trường.'),
  ]),

  M(34, 'Trái Đất, Mặt Trăng, Hệ Mặt Trời', [
    Q('Hệ Mặt Trời có mấy hành tinh chính?', ['6', '7', '8', '12'], 2, '8 hành tinh sau khi Pluto được xếp lại.'),
    Q('Hành tinh nào gần Mặt Trời nhất?', ['Sao Thuỷ (Mercury)', 'Trái Đất', 'Sao Mộc', 'Sao Hải Vương'], 0, 'Sao Thuỷ là hành tinh trong cùng.'),
    Q('Hành tinh thứ ba tính từ Mặt Trời là?', ['Sao Hoả', 'Sao Kim', 'Trái Đất', 'Sao Mộc'], 2, 'Thuỷ – Kim – Trái Đất – Hoả – ...'),
    Q('Hành tinh lớn nhất trong Hệ Mặt Trời là?', ['Sao Hoả', 'Sao Mộc (Jupiter)', 'Trái Đất', 'Sao Thuỷ'], 1, 'Sao Mộc khổng lồ.'),
    Q('Mặt Trăng là?', ['Vệ tinh tự nhiên của Trái Đất', 'Một hành tinh quay quanh Mặt Trời', 'Một ngôi sao', 'Một sao chổi'], 0, 'Mặt Trăng quay quanh Trái Đất.'),
    Q('Trái Đất quay quanh Mặt Trời hết bao lâu?', ['Khoảng 1 năm (365,25 ngày)', '1 ngày', '1 tháng', '100 năm'], 0, 'Chu kỳ quay quanh Mặt Trời ≈ 1 năm.'),
    Q('Trái Đất tự quay quanh trục hết bao lâu?', ['Khoảng 24 giờ (1 ngày đêm)', '12 giờ', '1 tuần', '1 tháng'], 0, 'Tự quay → ngày và đêm.'),
  ]),

  M(35, 'Chuyển động nhìn thấy của Mặt Trời, ngày – đêm', [
    Q('Mặt Trời mọc ở hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 0, 'Mọc Đông.'),
    Q('Mặt Trời lặn ở hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 1, 'Lặn Tây.'),
    Q('Hiện tượng ngày và đêm là do?', ['Trái Đất tự quay quanh trục của nó', 'Mặt Trời tắt và sáng', 'Mặt Trăng che Mặt Trời', 'Bão từ'], 0, 'Tự quay → một nửa được chiếu sáng.'),
    Q('Phần Trái Đất hướng về Mặt Trời thì?', ['Là ban ngày', 'Là ban đêm', 'Không có gì', 'Lạnh nhất'], 0, 'Phía chiếu sáng = ngày.'),
    Q('Phần Trái Đất không hướng về Mặt Trời thì?', ['Là ban đêm', 'Là ban ngày', 'Luôn nóng nhất', 'Không tồn tại'], 0, 'Phía khuất = đêm.'),
    Q('Vì sao ta thấy Mặt Trời chuyển động từ Đông sang Tây?', ['Vì Trái Đất tự quay từ Tây sang Đông', 'Vì Mặt Trời thực sự bay', 'Vì gió thổi Mặt Trời', 'Vì ảo giác hoàn toàn'], 0, 'Chuyển động "biểu kiến" do Trái Đất quay.'),
    Q('Mặt Trăng cũng có pha (trăng tròn, khuyết) do?', ['Vị trí Mặt Trăng so với Mặt Trời và Trái Đất thay đổi', 'Mặt Trăng tự sáng tắt', 'Mặt Trời tắt một phần', 'Mặt Trăng vỡ'], 0, 'Pha Trăng do góc chiếu sáng.'),
  ]),

  M(36, 'Ôn tập Học kỳ 2 và cuối năm', [
    Q('Thứ tự đúng các cấp tổ chức cơ thể đa bào là?', ['Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', 'Cơ thể → Tế bào', 'Cơ quan → Tế bào → Mô', 'Mô → Tế bào'], 0, 'Tế bào nhỏ nhất → Cơ thể lớn nhất.'),
    Q('Khoá lưỡng phân ở mỗi bước có?', ['2 lựa chọn đối lập', '3 lựa chọn', '5 lựa chọn', '0 lựa chọn'], 0, 'Hai nhánh đối lập.'),
    Q('Kháng sinh có diệt được virus không?', ['Không', 'Có, mọi virus', 'Chỉ một số virus', 'Tuỳ trời mưa hay nắng'], 0, 'Kháng sinh chỉ với vi khuẩn.'),
    Q('Cây xanh thuộc giới?', ['Thực vật', 'Động vật', 'Nấm', 'Khởi sinh'], 0, 'Thực vật quang hợp.'),
    Q('Động vật nào sau đây thuộc lớp Thú?', ['Cá heo', 'Cá chép', 'Ếch', 'Rắn'], 0, 'Cá heo là thú biển, đẻ con, nuôi con bằng sữa.'),
    Q('Đơn vị đo lực là?', ['Newton (N)', 'kilôgam', 'mét', 'giây'], 0, 'N.'),
    Q('Trọng lực trên Trái Đất có chiều?', ['Hướng về tâm Trái Đất (xuống dưới)', 'Đi ngang', 'Đi lên trên', 'Bất kỳ'], 0, 'Trọng lực hướng xuống.'),
    Q('Khi đèn LED sáng, năng lượng chuyển hoá chủ yếu từ?', ['Điện năng → Quang năng', 'Quang năng → Điện năng', 'Cơ → Điện', 'Hoá → Cơ'], 0, 'Đèn = điện sang sáng.'),
    Q('Hệ Mặt Trời có mấy hành tinh?', ['6', '7', '8', '9'], 2, '8 hành tinh.'),
    Q('Hiện tượng ngày và đêm có là do?', ['Trái Đất tự quay quanh trục', 'Mặt Trời tắt – sáng', 'Mặt Trăng che', 'Bão từ'], 0, 'Tự quay.'),
  ], { difficulty: 3 }),
];

export const S6KHTN_SCENARIOS = indexBy(S6KHTN_WEEKS);
