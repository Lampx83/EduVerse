// ============================================================
// Lớp 5 · KHOA HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK GDPT 2018.
// ID prefix: "P5KH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5KH', 'khoa-hoc', n, title, qs, opts);

export const P5KH_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Sự sinh sản', [
    Q('Em được sinh ra từ?', ['Cây cối', 'Từ một quả trứng tự nở ra', 'Cha và mẹ', 'Trứng gà'], 2, 'Mọi đứa trẻ đều có cha và mẹ.'),
    Q('Quá trình mỗi đứa trẻ được tạo thành nhờ?', ['Sự thụ tinh giữa tế bào trứng và tinh trùng', 'Vật lý', 'Hoá học', 'Phép màu'], 0, 'Trứng + tinh trùng → hợp tử → phôi → thai.'),
    Q('Em bé phát triển trong cơ thể mẹ ở đâu?', ['Trong dạ dày', 'Ngoài cơ thể', 'Trong tim', 'Bụng (tử cung) của mẹ'], 3, 'Em bé phát triển trong tử cung của người mẹ.'),
    Q('Thời gian thai kì trung bình khoảng?', ['9 tháng', '12 tháng', '6 tháng', '3 tháng'], 0, 'Khoảng 9 tháng (40 tuần).'),
    Q('Mỗi gia đình nên có?', ['Càng nhiều con càng tốt', 'Càng ít càng tốt, chỉ nên có 1 con', 'Không có con', '1–2 con để nuôi dạy tốt'], 3, 'Theo khuyến nghị: 1–2 con để chăm sóc, giáo dục tốt.'),
    Q('Đặc điểm di truyền do?', ['Cả cha lẫn mẹ', 'Cha truyền cho con', 'Mẹ truyền cho con', 'Thầy giáo'], 0, 'Đặc điểm di truyền do cha và mẹ truyền lại.'),
  ]),

  M(2, 'Nam hay nữ — Cơ quan sinh dục', [
    Q('Đặc điểm sinh học phân biệt nam và nữ là?', ['Tóc dài hay ngắn', 'Sở thích', 'Cơ quan sinh dục', 'Quần áo'], 2, 'Cơ quan sinh dục là đặc điểm sinh học.'),
    Q('Đặc điểm nào sau đây KHÔNG phải đặc điểm sinh học?', ['Tóc dài', 'Có râu', 'Có kinh nguyệt', 'Cơ quan sinh dục khác nhau'], 0, 'Tóc dài/ngắn là đặc điểm xã hội, không phải sinh học.'),
    Q('Nam và nữ cần?', ['Được tôn trọng và đối xử bình đẳng', 'Ưu ái nam giới', 'Ưu ái nữ giới', 'Phân biệt đối xử'], 0, 'Bình đẳng giới là quan trọng.'),
    Q('Quan niệm "trọng nam khinh nữ" là?', ['Phù hợp với xã hội hiện nay', 'Đúng vì con trai nối dõi tông đường', 'Sai', 'Không có ý kiến'], 2, 'Đó là quan niệm cũ, không đúng.'),
    Q('Ai cũng có quyền?', ['Cả 3 đáp án', 'Được yêu thương', 'Vui chơi', 'Học tập'], 0, 'Trẻ em đều có quyền cơ bản.'),
    Q('Hành vi nào thể hiện bình đẳng nam — nữ?', ['Chỉ bạn nữ phải dọn lớp', 'Chỉ bạn nam được làm lớp trưởng', 'Bạn nam và bạn nữ cùng chơi và học', 'Phân biệt khi xếp hàng'], 2, 'Bình đẳng = cùng tham gia hoạt động.'),
  ]),

  M(3, 'Thiếu niên — Tuổi dậy thì', [
    Q('Tuổi dậy thì ở nữ thường bắt đầu từ?', ['20–25 tuổi', '5–7 tuổi', '10–14 tuổi', '30 tuổi'], 2, 'Nữ thường dậy thì từ 10–14 tuổi.'),
    Q('Tuổi dậy thì ở nam thường bắt đầu từ?', ['5–7 tuổi', '20 tuổi', '12–15 tuổi', '30 tuổi'], 2, 'Nam thường dậy thì từ 12–15 tuổi.'),
    Q('Biểu hiện dậy thì ở nữ?', ['Có kinh nguyệt, ngực phát triển', 'Vỡ tiếng', 'Mọc râu', 'Không có thay đổi'], 0, 'Đặc trưng nữ: kinh nguyệt, ngực phát triển.'),
    Q('Biểu hiện dậy thì ở nam?', ['Vỡ tiếng, mọc râu', 'Không thay đổi', 'Ngực phát triển', 'Có kinh nguyệt'], 0, 'Đặc trưng nam: vỡ tiếng, mọc râu.'),
    Q('Ở tuổi này em nên?', ['Vệ sinh cơ thể sạch sẽ, ăn đủ chất, tập thể dục', 'Bỏ học', 'Ăn nhiều đồ ngọt', 'Không quan tâm'], 0, 'Chăm sóc cơ thể đúng cách.'),
    Q('Cảm xúc tuổi này thường?', ['Không có cảm xúc', 'Ổn định', 'Luôn vui vẻ', 'Dễ thay đổi, có lúc buồn vui thất thường'], 3, 'Cảm xúc thường thay đổi mạnh.'),
  ]),

  M(4, 'Vệ sinh cơ thể tuổi dậy thì', [
    Q('Vệ sinh cơ thể hằng ngày nên?', ['Không tắm', 'Chỉ tắm 1 tuần/lần', 'Tắm rửa thường xuyên', 'Tuỳ thích'], 2, 'Tắm rửa, vệ sinh hằng ngày.'),
    Q('Vệ sinh răng miệng cần?', ['Không cần', 'Đánh răng 2 lần/ngày', 'Tuần 1 lần', 'Chỉ khi đau'], 1, 'Sáng và tối.'),
    Q('Quần áo lót cần?', ['Tuỳ thích', 'Thay hàng ngày', 'Không cần thay', 'Thay 1 tuần/lần'], 1, 'Thay quần áo lót hằng ngày.'),
    Q('Khi đến kì kinh nguyệt, bạn nữ nên?', ['Nghỉ học hoàn toàn', 'Không ăn', 'Vệ sinh sạch sẽ, dùng băng vệ sinh', 'Không vệ sinh'], 2, 'Vệ sinh sạch sẽ là cần thiết.'),
    Q('Tập thể dục đều giúp?', ['Béo phì', 'Tăng cân nhanh chóng', 'Yếu đi', 'Cơ thể khoẻ mạnh'], 3, 'Tập thể dục → khoẻ mạnh.'),
    Q('Khi gặp khó khăn ở tuổi dậy thì, nên?', ['Bỏ học', 'Tâm sự với cha mẹ/thầy cô', 'Giấu kín', 'Lo lắng một mình'], 1, 'Chia sẻ với người tin cậy.'),
  ]),

  M(5, 'Dùng thuốc an toàn', [
    Q('Khi nào nên uống thuốc?', ['Khi bị bệnh và có chỉ dẫn của bác sĩ', 'Khi nào cũng được', 'Khi vui', 'Khi đói'], 0, 'Có chỉ dẫn của bác sĩ.'),
    Q('Thuốc kháng sinh dùng để?', ['Giải khát', 'Diệt vi khuẩn gây bệnh', 'Làm đẹp', 'Tăng cân'], 1, 'Kháng sinh diệt vi khuẩn.'),
    Q('Tự ý uống thuốc có thể?', ['Không sao', 'Có lợi', 'Gây hại cho sức khoẻ', 'Tốt hơn'], 2, 'Tự ý uống có thể gây nhờn thuốc, độc.'),
    Q('Thuốc cần được bảo quản?', ['Để cạnh bếp lửa cho khô', 'Nơi sạch, khô, tránh ánh nắng', 'Trong nước', 'Nơi ẩm ướt'], 1, 'Bảo quản đúng cách để giữ chất lượng.'),
    Q('Thuốc hết hạn nên?', ['Vẫn uống', 'Vứt bỏ', 'Để dành', 'Đem cho người khác dùng'], 1, 'Thuốc hết hạn có thể gây hại.'),
    Q('Khi bị đau nhẹ, em nên?', ['Bỏ qua', 'Uống nhiều thuốc', 'Tự uống thuốc', 'Nghỉ ngơi và báo người lớn'], 3, 'Báo người lớn, nghỉ ngơi.'),
  ]),

  M(6, 'Phòng tránh bệnh sốt rét', [
    Q('Bệnh sốt rét do gì gây ra?', ['Virus cúm gây ra', 'Nấm mốc trong không khí', 'Vi khuẩn', 'Kí sinh trùng plasmodium'], 3, 'Kí sinh trùng sốt rét.'),
    Q('Sốt rét lây truyền qua?', ['Không khí', 'Muỗi anophen', 'Tiếp xúc tay', 'Uống chung nguồn nước với người bệnh'], 1, 'Muỗi anophen đốt người bệnh sang người khoẻ.'),
    Q('Phòng sốt rét cần?', ['Uống nhiều nước', 'Ngủ màn, diệt muỗi', 'Ăn nhiều', 'Tắm nắng'], 1, 'Ngủ màn + diệt muỗi.'),
    Q('Triệu chứng sốt rét?', ['Sốt từng cơn, rét run rồi nóng', 'Đau bụng', 'Đau răng', 'Nhức tay'], 0, 'Đặc trưng: rét run rồi sốt cao.'),
    Q('Khi nghi sốt rét, cần?', ['Tự mua thuốc', 'Đến cơ sở y tế khám', 'Bỏ qua', 'Tắm nước lạnh'], 1, 'Khám và điều trị kịp thời.'),
    Q('Nơi muỗi sinh sản thường ở?', ['Bãi cát', 'Vũng nước đọng', 'Nhà sạch', 'Trên cao'], 1, 'Muỗi đẻ trong nước đọng.'),
  ]),

  M(7, 'Phòng tránh bệnh sốt xuất huyết', [
    Q('Sốt xuất huyết do?', ['Nấm mốc trong nhà', 'Không khí', 'Vi khuẩn', 'Virus dengue qua muỗi vằn'], 3, 'Virus dengue truyền qua muỗi vằn.'),
    Q('Triệu chứng sốt xuất huyết?', ['Ho khan', 'Đau bụng đơn thuần', 'Sốt cao, đau cơ, có thể xuất huyết', 'Mệt mỏi nhẹ'], 2, 'Sốt cao + xuất huyết dưới da.'),
    Q('Phòng sốt xuất huyết cần?', ['Uống thuốc bổ', 'Diệt muỗi, lăng quăng, ngủ màn', 'Uống nhiều nước cam tăng đề kháng', 'Không cần'], 1, 'Quan trọng: diệt muỗi và lăng quăng.'),
    Q('Muỗi vằn thường hoạt động khi nào?', ['Ban đêm', 'Chỉ chiều', 'Ban ngày', 'Cả ngày lẫn đêm'], 2, 'Muỗi vằn (Aedes) hoạt động ban ngày.'),
    Q('Lăng quăng (bọ gậy) sống ở?', ['Nước trong các vật chứa quanh nhà', 'Trên cây', 'Trên cao', 'Trong đất'], 0, 'Lu, chum, lốp xe có nước → lăng quăng.'),
    Q('Khi sốt cao liên tục, cần?', ['Tự uống thuốc hạ sốt', 'Đắp chăn cho ra mồ hôi', 'Tắm lạnh', 'Đến bệnh viện ngay'], 3, 'Sốt cao cần khám bệnh kịp thời.'),
  ]),

  M(8, 'Phòng tránh HIV/AIDS (kiến thức cơ bản)', [
    Q('HIV là?', ['Vi khuẩn', 'Một loại nấm sống ở da', 'Một loại thuốc điều trị bệnh', 'Virus gây suy giảm miễn dịch'], 3, 'HIV = Human Immunodeficiency Virus.'),
    Q('HIV lây truyền qua?', ['Đường máu, từ mẹ sang con, đường tình dục', 'Hơi thở', 'Bắt tay, ôm, ăn chung', 'Vết muỗi đốt'], 0, 'Ba con đường lây chính.'),
    Q('HIV KHÔNG lây qua?', ['Mẹ sang con', 'Bắt tay, ôm, dùng chung bát đĩa', 'Quan hệ tình dục', 'Truyền máu'], 1, 'Tiếp xúc thông thường không lây HIV.'),
    Q('Người nhiễm HIV cần?', ['Được yêu thương, không kì thị', 'Đuổi học', 'Xa lánh', 'Cách ly hoàn toàn'], 0, 'Không kì thị, ủng hộ điều trị.'),
    Q('Phòng tránh HIV cần?', ['Ăn chung', 'Không dùng chung bơm kim tiêm', 'Bắt tay', 'Ngủ chung phòng'], 1, 'Tránh dùng chung kim tiêm là một biện pháp.'),
    Q('Người nhiễm HIV ở giai đoạn cuối được gọi là?', ['Cảm cúm', 'Bệnh AIDS', 'Tiểu đường', 'Sốt rét'], 1, 'AIDS = giai đoạn cuối của HIV.'),
  ]),

  M(9, 'An toàn — Phòng tránh tai nạn đuối nước', [
    Q('Để phòng đuối nước, không nên?', ['Học bơi', 'Tự đi tắm sông một mình', 'Tuân thủ quy định ở bể bơi', 'Bơi với phao + người lớn'], 1, 'Tự ý tắm sông rất nguy hiểm.'),
    Q('Khi thấy người đuối nước, KHÔNG biết bơi nên?', ['Hô hoán + ném phao/sào', 'Im lặng', 'Tự lao xuống nước kéo người lên', 'Nhảy xuống cứu'], 0, 'Không tự nhảy xuống nếu không biết bơi.'),
    Q('Học bơi là kỹ năng?', ['Chỉ cho nam', 'Chỉ cho người lớn', 'Không cần thiết', 'Quan trọng để phòng đuối nước'], 3, 'Học bơi cứu mạng.'),
    Q('Trước khi bơi nên?', ['Nhảy ngay', 'Uống nước đá', 'Ăn no rồi nhảy xuống', 'Khởi động, kiểm tra sức khoẻ'], 3, 'Khởi động để tránh chuột rút.'),
    Q('Khu vực có biển báo "Nguy hiểm, cấm tắm" thì?', ['Không được tắm', 'Tắm thử', 'Tắm nếu có nhiều người cùng tắm', 'Vẫn tắm thoải mái'], 0, 'Phải tuyệt đối tuân thủ.'),
    Q('Khi bị chuột rút khi bơi, nên?', ['Hoảng sợ vùng vẫy', 'Bình tĩnh, kêu cứu, đập chân duỗi cơ', 'Lặn sâu', 'Bơi nhanh hơn để hết chuột rút'], 1, 'Bình tĩnh + báo người cứu.'),
  ]),

  M(10, 'An toàn — Phòng tránh tai nạn giao thông & điện', [
    Q('Khi đi bộ qua đường nên?', ['Đi vào vạch dành cho người đi bộ', 'Chạy nhanh qua', 'Băng qua chỗ tối', 'Đi giữa đường'], 0, 'Đi đúng vạch kẻ + nhìn 2 phía.'),
    Q('Đèn đỏ giao thông nghĩa?', ['Đi nhanh', 'Rẽ phải được phép', 'Đi tiếp', 'Dừng lại'], 3, 'Đèn đỏ = dừng.'),
    Q('Tay ướt có nên sờ vào ổ điện?', ['Có, nếu thật nhanh thì không sao', 'Không, rất nguy hiểm', 'Tuỳ vào loại ổ điện', 'Có nếu trời mưa'], 1, 'Tay ướt sờ điện → giật điện chết người.'),
    Q('Khi thấy dây điện đứt rơi xuống đường?', ['Cầm lên', 'Tránh xa và báo người lớn', 'Lại gần xem', 'Nhảy qua'], 1, 'Tránh xa, gọi cứu trợ.'),
    Q('Khi đi xe đạp cần?', ['Đi đúng phần đường, đội mũ bảo hiểm', 'Buông tay lái', 'Đi giữa đường', 'Đèo 2–3 người'], 0, 'An toàn giao thông xe đạp.'),
    Q('Đồ chơi nguy hiểm là?', ['Búp bê', 'Đồ chơi sắc nhọn hoặc cháy nổ', 'Bộ lego', 'Bóng cao su'], 1, 'Tránh đồ chơi sắc nhọn, cháy nổ.'),
  ]),

  M(11, 'An toàn — Phòng tránh ngộ độc', [
    Q('Thực phẩm bị ôi thiu thì?', ['Không ăn, vứt bỏ', 'Hâm lại ăn', 'Vẫn ăn', 'Cho vật nuôi ăn vì chúng khoẻ hơn người'], 0, 'Thực phẩm hỏng có thể gây ngộ độc.'),
    Q('Trước khi ăn nên?', ['Rửa tay sạch', 'Không cần rửa', 'Lau qua loa', 'Chỉ vẩy tay'], 0, 'Rửa tay tránh vi khuẩn.'),
    Q('Khi bị ngộ độc thực phẩm, dấu hiệu?', ['Đau bụng, nôn, tiêu chảy', 'Học giỏi hơn', 'Cao thêm', 'Mọc tóc'], 0, 'Triệu chứng ngộ độc thực phẩm.'),
    Q('Hoá chất tẩy rửa nên?', ['Để gần đồ ăn', 'Để trong tủ lạnh', 'Để cùng nước uống', 'Để xa tầm tay trẻ em'], 3, 'Tránh nhầm lẫn ngộ độc.'),
    Q('Khi nghi ngộ độc, cần?', ['Đến cơ sở y tế ngay', 'Uống thật nhiều nước', 'Tự uống thuốc', 'Đi ngủ'], 0, 'Đến cơ sở y tế khẩn cấp.'),
    Q('Đồ ăn ngoài đường không vệ sinh có thể?', ['Tăng cân', 'Tốt cho sức khoẻ', 'Không ảnh hưởng', 'Gây ngộ độc'], 3, 'Chọn nơi vệ sinh để ăn.'),
  ]),

  M(12, 'Năng lượng — vai trò của năng lượng', [
    Q('Năng lượng là?', ['Không khí', 'Cái có thể làm vật chuyển động hoặc làm việc', 'Một loại chất rắn nhìn thấy được', 'Một loài sinh vật sống'], 1, 'Năng lượng → làm vật chuyển động/biến đổi.'),
    Q('Nguồn năng lượng phổ biến của con người?', ['Khoáng chất trong đất', 'Nước biển', 'Thức ăn', 'Đá vôi nghiền nhỏ'], 2, 'Thức ăn → năng lượng cho cơ thể.'),
    Q('Năng lượng dùng để?', ['Chỉ để trang trí nhà cửa', 'Chỉ ăn', 'Chạy máy, sưởi ấm, chiếu sáng', 'Chỉ ngủ'], 2, 'Năng lượng phục vụ đời sống.'),
    Q('Nếu mất điện thì?', ['Không ảnh hưởng', 'Nhiều thiết bị không hoạt động', 'Mọi thứ tốt hơn', 'Tất cả vẫn chạy'], 1, 'Mất điện → tivi, đèn, tủ lạnh… ngừng hoạt động.'),
    Q('Năng lượng có dạng?', ['Cơ năng, điện, nhiệt, ánh sáng', 'Chỉ 1 dạng', 'Không có dạng', 'Chỉ có dạng cơ năng và nhiệt'], 0, 'Nhiều dạng năng lượng khác nhau.'),
    Q('Trẻ em cần năng lượng để?', ['Chỉ để khóc', 'Không cần', 'Học tập, vui chơi, phát triển', 'Chỉ để ngủ'], 2, 'Năng lượng từ thức ăn cho mọi hoạt động.'),
  ]),

  M(13, 'Năng lượng mặt trời', [
    Q('Mặt trời là?', ['Vệ tinh', 'Hành tinh', 'Một ngôi sao toả nhiệt và ánh sáng', 'Đám mây'], 2, 'Mặt trời là ngôi sao gần Trái Đất nhất.'),
    Q('Năng lượng mặt trời được dùng để?', ['Không dùng được', 'Chỉ làm hỏng đồ', 'Phơi quần áo, làm khô, làm muối, pin mặt trời', 'Chỉ chiếu sáng'], 2, 'Nhiều ứng dụng năng lượng mặt trời.'),
    Q('Pin mặt trời chuyển đổi năng lượng mặt trời thành?', ['Hoá năng', 'Nhiệt năng', 'Điện năng', 'Cơ năng'], 2, 'Pin mặt trời → điện.'),
    Q('Năng lượng mặt trời là?', ['Có hạn', 'Nguồn năng lượng cạn kiệt sau vài năm', 'Gây ô nhiễm', 'Sạch và vô tận'], 3, 'Năng lượng sạch, tái tạo.'),
    Q('Cây xanh dùng năng lượng mặt trời để?', ['Hít thở', 'Sinh sản', 'Đi chuyển', 'Quang hợp'], 3, 'Quang hợp cần ánh sáng mặt trời.'),
    Q('Hoạt động nào dùng năng lượng mặt trời?', ['Ép mía', 'Phơi thóc', 'Xay gạo', 'Nướng bánh trong lò'], 1, 'Phơi thóc trực tiếp dùng nắng mặt trời.'),
  ]),

  M(14, 'Năng lượng gió — nước', [
    Q('Năng lượng gió được dùng để?', ['Chạy thuyền buồm, cối xay gió, máy phát điện', 'Đốt cháy', 'Đun nước', 'Trực tiếp sưởi ấm nhà cửa'], 0, 'Gió → cối xay, máy phát điện gió.'),
    Q('Năng lượng nước được dùng để?', ['Quay tuabin, sản xuất điện (thủy điện)', 'Đốt để tạo nhiệt', 'Sưởi ấm trực tiếp', 'Phơi khô quần áo'], 0, 'Thủy điện dùng năng lượng nước.'),
    Q('Hai loại năng lượng trên thuộc?', ['Năng lượng độc', 'Năng lượng bẩn', 'Năng lượng hết', 'Năng lượng sạch, tái tạo'], 3, 'Sạch và có thể tái tạo.'),
    Q('Cối xay gió chuyển năng lượng gió thành?', ['Ánh sáng', 'Hoá năng', 'Nhiệt năng làm nóng không khí', 'Cơ năng / điện'], 3, 'Cối xay → cơ năng (hoặc điện qua tuabin).'),
    Q('Việt Nam có nhiều nhà máy thủy điện ở?', ['Đồng bằng', 'Sa mạc', 'Biển khơi', 'Vùng núi'], 3, 'Vùng núi có nhiều sông suối thuận lợi.'),
    Q('Năng lượng nước, gió, mặt trời gọi chung là?', ['Năng lượng hoá thạch', 'Năng lượng tái tạo', 'Năng lượng hoá học', 'Năng lượng hạt nhân'], 1, 'Đều là tái tạo, sạch.'),
  ]),

  M(15, 'Năng lượng than đá, dầu mỏ, khí đốt', [
    Q('Than đá, dầu mỏ, khí đốt thuộc?', ['Năng lượng mặt trời', 'Năng lượng tái tạo', 'Năng lượng gió', 'Năng lượng hoá thạch (không tái tạo)'], 3, 'Hoá thạch, có hạn.'),
    Q('Khi đốt than đá có thải?', ['Hơi nước sạch tinh khiết', 'Khí oxi có lợi cho cây', 'Nước sạch', 'Khói, khí CO₂, bụi gây ô nhiễm'], 3, 'Đốt than gây ô nhiễm.'),
    Q('Dầu mỏ dùng để?', ['Sản xuất xăng dầu, nhựa', 'Nấu cơm', 'Pha trà', 'Làm bánh'], 0, 'Lọc thành xăng, dầu, nhựa.'),
    Q('Năng lượng hoá thạch ngày càng?', ['Cạn kiệt', 'Tăng lên', 'Không thay đổi', 'Tự sinh ra'], 0, 'Có hạn → ngày càng hết.'),
    Q('Việc tiết kiệm năng lượng là?', ['Có hại', 'Chỉ có lợi cho nhà giàu', 'Không cần thiết', 'Bảo vệ môi trường và tài nguyên'], 3, 'Tiết kiệm = bảo vệ.'),
    Q('Khí đốt thường dùng để?', ['Làm phân bón', 'Trồng cây', 'Làm bánh trực tiếp', 'Đun nấu, sưởi ấm'], 3, 'Bình gas, bếp gas → đun nấu.'),
  ]),

  M(16, 'Vai trò của điện trong đời sống', [
    Q('Điện được sản xuất ở?', ['Đường dây tải điện gần nhà', 'Nhà máy điện (thủy, nhiệt, mặt trời, gió, hạt nhân)', 'Bãi rác', 'Trường học'], 1, 'Nhà máy điện sản xuất điện năng.'),
    Q('Đồ dùng nào dùng điện?', ['Tivi, tủ lạnh, đèn điện, quạt', 'Cây xanh', 'Bút chì', 'Bàn ghế gỗ trong lớp'], 0, 'Các thiết bị điện.'),
    Q('Tiết kiệm điện là?', ['Mở tủ lạnh lâu', 'Tăng quạt tối đa', 'Tắt thiết bị khi không dùng', 'Bật đèn cả ngày'], 2, 'Tắt thiết bị → tiết kiệm.'),
    Q('Để an toàn điện, không nên?', ['Lắp aptomat', 'Sờ ổ điện bằng tay ướt, cắm quá nhiều thiết bị', 'Tắt điện trước khi sửa', 'Dùng đúng công suất'], 1, 'Hành vi nguy hiểm.'),
    Q('Đèn LED so với đèn sợi đốt?', ['Tối hơn', 'Tốn điện hơn', 'Như nhau', 'Tiết kiệm điện hơn'], 3, 'LED hiệu suất cao hơn.'),
    Q('Khi cháy nổ điện, cần?', ['Ngắt cầu dao và báo người lớn', 'Dùng nước dập', 'Tiếp tục dùng', 'Bỏ chạy'], 0, 'Ngắt điện trước.'),
  ]),

  M(17, 'Mạch điện đơn giản', [
    Q('Mạch điện cần có?', ['Chỉ bóng đèn', 'Chỉ dây', 'Nguồn điện, dây dẫn, vật tiêu thụ', 'Chỉ pin'], 2, 'Đầy đủ 3 thành phần.'),
    Q('Vật dẫn điện?', ['Gỗ khô', 'Cao su', 'Thuỷ tinh khô', 'Kim loại, than'], 3, 'Kim loại dẫn điện tốt.'),
    Q('Vật cách điện?', ['Nước muối', 'Kim loại', 'Lõi chì của bút chì', 'Nhựa, cao su, gỗ khô'], 3, 'Cách điện = không cho điện qua.'),
    Q('Công tắc dùng để?', ['Giảm điện', 'Tăng điện', 'Đóng/ngắt mạch điện', 'Chiếu sáng'], 2, 'Công tắc điều khiển dòng điện.'),
    Q('Pin là?', ['Vật cách điện', 'Dụng cụ chiếu sáng', 'Vật dẫn điện', 'Nguồn điện hoá học'], 3, 'Pin → nguồn điện.'),
    Q('Khi mạch hở, đèn?', ['Sáng yếu', 'Không sáng', 'Vẫn sáng', 'Sáng chập chờn rồi mới tắt'], 1, 'Hở mạch → không có dòng điện → đèn không sáng.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Em được sinh ra từ?', ['Hạt giống tự nảy mầm', 'Đám mây trên trời', 'Cơn gió mùa xuân', 'Cha và mẹ'], 3, 'Cha + mẹ.'),
    Q('Tuổi dậy thì cần chú ý?', ['Chỉ chơi', 'Vệ sinh, dinh dưỡng, tâm lý', 'Không cần', 'Chỉ ăn'], 1, 'Chăm sóc cơ thể và tâm lý.'),
    Q('HIV KHÔNG lây qua?', ['Bắt tay', 'Truyền máu', 'Quan hệ tình dục', 'Mẹ sang con'], 0, 'Bắt tay an toàn.'),
    Q('Năng lượng tái tạo gồm?', ['Than đá', 'Khí đốt', 'Dầu mỏ', 'Mặt trời, gió, nước'], 3, 'Sạch và tái tạo.'),
    Q('An toàn điện không nên?', ['Sờ ổ điện tay ướt', 'Tắt khi không dùng', 'Dùng đúng công suất', 'Lắp aptomat'], 0, 'Tay ướt + điện = nguy hiểm.'),
    Q('Khi ngộ độc thực phẩm, cần?', ['Đi ngủ', 'Đến cơ sở y tế', 'Tự uống thuốc', 'Bỏ qua'], 1, 'Khám và điều trị.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Sự biến đổi chất — hỗn hợp', [
    Q('Hỗn hợp là?', ['Hai hay nhiều chất trộn lẫn không tạo chất mới', 'Một chất duy nhất', 'Chất tinh khiết', 'Nguyên tố'], 0, 'Hỗn hợp giữ nguyên chất cũ.'),
    Q('Ví dụ hỗn hợp?', ['Nước cất', 'Muối + nước, gạo + đậu', 'Đường tinh', 'Bột sắt nguyên chất'], 1, 'Trộn không tạo chất mới.'),
    Q('Cách tách muối khỏi hỗn hợp muối + cát?', ['Đốt cháy hỗn hợp ở lửa to', 'Để yên', 'Khuấy mạnh cho muối nổi lên', 'Hoà nước, lọc cát, đun bay hơi nước'], 3, 'Hoà tan + lọc + bay hơi.'),
    Q('Cách tách dầu khỏi nước?', ['Đun sôi cho dầu bay hơi hết', 'Dùng phễu chiết', 'Khuấy mạnh để dầu tan vào nước', 'Lọc bằng giấy'], 1, 'Dầu nổi trên nước → chiết.'),
    Q('Lọc tách được?', ['Lỏng với lỏng', 'Chất rắn không tan với nước', 'Khí với khí', 'Chất tan hoàn toàn'], 1, 'Lọc tách rắn không tan.'),
    Q('Cát + nước là?', ['Hỗn hợp', 'Chất tinh khiết', 'Dung dịch', 'Hoá hợp'], 0, 'Trộn nhau không tạo chất mới.'),
  ]),

  M(20, 'Dung dịch', [
    Q('Dung dịch là?', ['Hỗn hợp không đều', 'Hỗn hợp đồng nhất của chất tan trong dung môi', 'Hỗn hợp các chất khí trộn lại', 'Chất rắn'], 1, 'Dung dịch = hỗn hợp đồng nhất.'),
    Q('Ví dụ dung dịch?', ['Dầu + nước', 'Cát + nước', 'Sỏi + đá', 'Nước muối, nước đường'], 3, 'Tan hoàn toàn, đồng nhất.'),
    Q('Dung môi phổ biến là?', ['Bột sắt mịn', 'Cát mịn', 'Nước', 'Mùn cưa khô'], 2, 'Nước là dung môi phổ biến nhất.'),
    Q('Cách tách muối khỏi dung dịch nước muối?', ['Để yên', 'Lọc qua giấy lọc nhiều lần', 'Đun cho bay hơi nước', 'Khuấy thật mạnh để muối lắng xuống'], 2, 'Cô cạn → còn muối.'),
    Q('Khi cho đường vào nước rồi khuấy, ta được?', ['Chất tinh khiết', 'Một loại chất rắn không tan', 'Hỗn hợp không đều', 'Dung dịch đường'], 3, 'Đường tan hết → dung dịch.'),
    Q('Tăng tốc độ tan có thể bằng?', ['Đập vỡ chén', 'Để yên + làm lạnh', 'Tắt bếp', 'Khuấy + đun nóng'], 3, 'Khuấy + nóng → tan nhanh hơn.'),
  ]),

  M(21, 'Sự biến đổi hoá học', [
    Q('Sự biến đổi hoá học là?', ['Không thay đổi gì', 'Chỉ đổi hình dạng', 'Chỉ đổi vị trí', 'Chất biến đổi thành chất khác'], 3, 'Có chất mới tạo thành.'),
    Q('Ví dụ biến đổi hoá học?', ['Đốt giấy, sắt gỉ', 'Đập vỡ kính', 'Nung nóng nước → hơi', 'Cắt giấy'], 0, 'Đốt giấy → tro, khí (chất mới).'),
    Q('Ví dụ KHÔNG phải biến đổi hoá học?', ['Lên men cơm', 'Nước đông thành đá', 'Đốt củi', 'Sắt gỉ'], 1, 'Nước → đá chỉ đổi thể (vật lý).'),
    Q('Khi vôi sống + nước:', ['Mát lạnh', 'Chỉ thay đổi hình dạng', 'Không phản ứng', 'Toả nhiệt, tạo vôi tôi (chất mới)'], 3, 'Tạo vôi tôi + toả nhiệt.'),
    Q('Sắt để lâu ngoài trời?', ['Thành vàng', 'Bị gỉ (hoá học)', 'Không đổi', 'Thành đồng'], 1, 'Sắt + oxi → gỉ sắt.'),
    Q('Sự biến đổi nào là vật lý?', ['Nước bay hơi', 'Sắt gỉ', 'Lên men sữa', 'Đốt giấy'], 0, 'Bay hơi chỉ đổi thể.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Sự sinh sản của thực vật có hoa', [
    Q('Hoa có chức năng?', ['Quang hợp', 'Sinh sản', 'Hô hấp', 'Vận chuyển nước'], 1, 'Hoa là cơ quan sinh sản của thực vật có hoa.'),
    Q('Cơ quan sinh sản đực của hoa?', ['Nhụy hoa chứa hạt phấn', 'Nhị', 'Đài hoa màu xanh phía dưới', 'Cánh hoa có màu sắc rực rỡ'], 1, 'Nhị mang hạt phấn.'),
    Q('Cơ quan sinh sản cái của hoa?', ['Nhị mang túi phấn vàng', 'Nhụy', 'Đài hoa bao bọc bên ngoài', 'Cánh hoa thu hút côn trùng'], 1, 'Nhụy có bầu nhuỵ chứa noãn.'),
    Q('Quá trình thụ phấn là?', ['Lá rụng', 'Hạt phấn rơi lên đầu nhuỵ', 'Cây chết', 'Hoa nở'], 1, 'Hạt phấn → đầu nhuỵ → thụ tinh.'),
    Q('Côn trùng thụ phấn nhờ?', ['Màu xanh của lá cây', 'Rễ cắm sâu trong đất', 'Mật hoa', 'Gỗ cứng của thân cây'], 2, 'Côn trùng tới hút mật → chuyển phấn.'),
    Q('Sau thụ tinh, bầu nhuỵ phát triển thành?', ['Rễ phụ mọc thêm', 'Quả', 'Cành mới đâm ra', 'Lá non xanh tươi'], 1, 'Bầu nhuỵ → quả chứa hạt.'),
  ]),

  M(23, 'Sự nảy mầm của hạt — Sinh sản thực vật', [
    Q('Hạt nảy mầm cần?', ['Băng tuyết', 'Đất khô', 'Nước, không khí, nhiệt độ thích hợp', 'Ánh sáng mạnh'], 2, '3 yếu tố: nước, khí, nhiệt.'),
    Q('Hạt giống gồm?', ['Chỉ phôi', 'Chỉ rễ', 'Chỉ vỏ', 'Vỏ, phôi, chất dinh dưỡng dự trữ'], 3, 'Vỏ + phôi + dinh dưỡng.'),
    Q('Cây mọc từ?', ['Đá vỡ tự nứt ra thành cây non', 'Cát mịn ven sông', 'Giọt nước mưa rơi xuống đất', 'Hạt hoặc bộ phận sinh dưỡng của cây mẹ'], 3, 'Hạt hoặc thân, lá, rễ (giâm, chiết, ghép).'),
    Q('Cây khoai lang sinh sản bằng?', ['Hạt nhỏ trong quả khoai', 'Rễ phụ', 'Củ', 'Lá khoai cắm xuống đất'], 2, 'Khoai lang mọc từ củ/dây.'),
    Q('Cây mía sinh sản bằng?', ['Thân (giâm)', 'Hạt mía gieo xuống đất', 'Lá mía cắm vào đất ẩm', 'Rễ mía tách ra trồng riêng'], 0, 'Mía giâm bằng đoạn thân.'),
    Q('Cách trồng cây bằng cành gọi là?', ['Chiết cành', 'Ghép cành', 'Giâm cành', 'Tất cả là cách trồng vô tính'], 3, 'Đều thuộc sinh sản vô tính.'),
  ]),

  M(24, 'Sự sinh sản của động vật', [
    Q('Động vật sinh sản bằng?', ['Đâm cành mới ra từ cơ thể', 'Hạt rơi xuống đất nảy mầm', 'Đẻ trứng hoặc đẻ con', 'Rễ mọc xuống đất sinh con'], 2, 'Đẻ trứng hoặc đẻ con.'),
    Q('Loài nào đẻ con?', ['Cá, ếch', 'Rắn, thằn lằn', 'Gà, vịt', 'Bò, chó, mèo'], 3, 'Thú có vú thường đẻ con.'),
    Q('Loài nào đẻ trứng?', ['Bò sữa nuôi con bằng sữa', 'Trâu kéo cày trên ruộng', 'Gà, vịt, rùa', 'Mèo nhà nuôi con nhỏ'], 2, 'Chim, bò sát, lưỡng cư thường đẻ trứng.'),
    Q('Trứng được thụ tinh sẽ?', ['Cứng lại', 'Tan ra', 'Vẫn là trứng', 'Phát triển thành con non'], 3, 'Trứng thụ tinh phát triển thành con.'),
    Q('Con non của thú có vú được nuôi bằng?', ['Hạt và quả tự nhiên', 'Cỏ tươi trên đồng', 'Nước lã từ ao hồ', 'Sữa mẹ'], 3, 'Sữa mẹ là nguồn dinh dưỡng đầu.'),
    Q('Bướm trải qua các giai đoạn?', ['Trứng → sâu → nhộng → bướm', 'Trứng → bướm', 'Sâu → bướm', 'Bướm → trứng → bướm'], 0, 'Vòng đời 4 giai đoạn.'),
  ]),

  M(25, 'Sự sinh sản của ếch — gà', [
    Q('Ếch đẻ?', ['Con dưới nước', 'Con trên cạn', 'Trứng trên cây', 'Trứng dưới nước'], 3, 'Ếch đẻ trứng dưới nước.'),
    Q('Nòng nọc là giai đoạn nào của ếch?', ['Ếch già', 'Ấu trùng dưới nước', 'Trứng vừa được đẻ ra', 'Ếch trưởng thành'], 1, 'Trứng → nòng nọc → ếch con → ếch lớn.'),
    Q('Gà mái đẻ trứng. Trứng được ấp bằng?', ['Nước đá', 'Mặt trời trực tiếp', 'Vùi trong cát khô để giữ nhiệt', 'Hơi ấm cơ thể mẹ hoặc lò ấp'], 3, 'Cần nhiệt độ ổn định để ấp.'),
    Q('Sau bao lâu thì gà con nở?', ['Khoảng 21 ngày', '7 ngày', '1 ngày', '60 ngày'], 0, 'Trứng gà ấp ~ 21 ngày.'),
    Q('Khi vừa nở, gà con đã?', ['Chạy nhanh', 'Bay xa', 'Bơi giỏi', 'Đi lại được'], 3, 'Gà con vừa nở đã tự đi lại.'),
    Q('Sự khác biệt giữa gà và ếch?', ['Gà đẻ trứng trên cạn, ếch đẻ trứng dưới nước', 'Cả 2 đều đẻ trứng dưới nước', 'Gà đẻ con, ếch đẻ trứng', 'Cả 2 đều đẻ con'], 0, 'Môi trường đẻ trứng khác nhau.'),
  ]),

  M(26, 'Sự sinh sản của thú', [
    Q('Thú là động vật?', ['Không sinh sản', 'Đẻ hạt', 'Đẻ trứng', 'Đẻ con và nuôi bằng sữa mẹ'], 3, 'Thú có vú: đẻ con, nuôi sữa.'),
    Q('Thú con khi sinh ra đã?', ['Có hình dáng giống mẹ', 'Như cái trứng', 'Như cá', 'Như con sâu'], 0, 'Giống mẹ thu nhỏ.'),
    Q('Đa số thú con sinh ra một lứa?', ['10 000 trứng', '1–vài con', '1 000 trứng', '100 trứng'], 1, 'Thú thường đẻ ít con/lứa.'),
    Q('Vai trò của sữa mẹ với thú con?', ['Chỉ uống cho vui', 'Làm thú con bị bệnh khi uống', 'Không có vai trò', 'Nguồn dinh dưỡng quan trọng'], 3, 'Sữa mẹ giàu dinh dưỡng.'),
    Q('Trong các loài sau, loài nào là thú?', ['Cá sấu', 'Cá chép', 'Cá voi, dơi', 'Gà mái cũng là một loài thú'], 2, 'Cá voi và dơi đều là thú.'),
    Q('Thú con cần được mẹ?', ['Bỏ rơi', 'Chăm sóc, bảo vệ', 'Bán đi', 'Để con tự kiếm ăn ngay từ nhỏ'], 1, 'Sự chăm sóc của mẹ rất quan trọng.'),
  ]),

  M(27, 'Môi trường và tài nguyên thiên nhiên', [
    Q('Môi trường là?', ['Mọi thứ xung quanh ảnh hưởng tới sự sống', 'Chỉ là đất', 'Chỉ là nước', 'Chỉ là không khí'], 0, 'Môi trường gồm đất, nước, khí, sinh vật.'),
    Q('Tài nguyên thiên nhiên gồm?', ['Đất, nước, khoáng sản, rừng, biển', 'Máy tính', 'Sách vở', 'Quần áo'], 0, 'Tài nguyên do thiên nhiên cung cấp.'),
    Q('Tài nguyên nào có thể tái tạo?', ['Dầu mỏ', 'Than đá', 'Rừng, nước, đất', 'Quặng sắt và đồng'], 2, 'Có thể phục hồi khi sử dụng hợp lý.'),
    Q('Tài nguyên KHÔNG tái tạo?', ['Nguồn nước ngầm trong lòng đất', 'Đất canh tác đã bạc màu', 'Rừng nguyên sinh hàng trăm năm', 'Than đá, dầu mỏ'], 3, 'Hình thành mất hàng triệu năm.'),
    Q('Sử dụng tài nguyên cần?', ['Tiết kiệm và hợp lý', 'Khai thác triệt để', 'Lãng phí', 'Khai thác càng nhiều càng có lợi'], 0, 'Đảm bảo phát triển bền vững.'),
    Q('Việc trồng rừng giúp?', ['Mất đất', 'Không có lợi', 'Bảo vệ môi trường', 'Làm thu hẹp đất trồng lúa'], 2, 'Rừng giữ đất, lọc khí, điều hoà khí hậu.'),
  ]),

  M(28, 'Tác động của con người tới môi trường', [
    Q('Hoạt động nào gây ô nhiễm môi trường?', ['Đi xe đạp', 'Tiết kiệm điện', 'Trồng cây', 'Xả rác, đốt rừng, xả khí thải'], 3, 'Hành vi gây hại môi trường.'),
    Q('Hành vi bảo vệ môi trường?', ['Xả nước thải ra sông', 'Vứt rác đúng nơi quy định', 'Đốt rác', 'Phá rừng'], 1, 'Vứt rác đúng nơi giúp giữ sạch.'),
    Q('Phá rừng dẫn đến?', ['Nhiều mưa hơn', 'Đất tốt hơn', 'Lũ lụt, xói mòn đất, hạn hán', 'Mát mẻ hơn'], 2, 'Mất rừng → nhiều hậu quả xấu.'),
    Q('Khí thải xe ô tô gây?', ['Ô nhiễm không khí', 'Không ảnh hưởng', 'Sạch không khí', 'Làm tốt cho cây'], 0, 'CO₂, NO₂, bụi mịn → ô nhiễm.'),
    Q('Nước thải chưa xử lý thải ra sông gây?', ['Sạch sông', 'Ô nhiễm nước', 'Không ảnh hưởng', 'Tốt cho cá'], 1, 'Ô nhiễm nguồn nước.'),
    Q('Việc em có thể làm?', ['Tiết kiệm điện nước, không xả rác, trồng cây', 'Đốt rác', 'Vứt rác bừa', 'Phá cây'], 0, 'Hành động nhỏ có ý nghĩa lớn.'),
  ]),

  M(29, 'Bảo vệ môi trường', [
    Q('Bảo vệ môi trường là việc của?', ['Mọi người', 'Chỉ người lớn', 'Chỉ chính phủ', 'Chỉ trẻ em'], 0, 'Trách nhiệm chung của toàn xã hội.'),
    Q('3R trong môi trường?', ['Read — Run — Reuse', 'Rest — Run — Read', 'Run — Read — Rest', 'Giảm thiểu — tái sử dụng — tái chế (Reduce — Reuse — Recycle)'], 3, 'Reduce — Reuse — Recycle.'),
    Q('Sử dụng túi vải thay túi ni-lông là?', ['Lãng phí', 'Gây hại', 'Bảo vệ môi trường', 'Không có ý nghĩa'], 2, 'Giảm rác thải nhựa.'),
    Q('Cây xanh giúp?', ['Không có tác dụng', 'Tăng CO₂', 'Lọc không khí, giảm CO₂', 'Gây ô nhiễm'], 2, 'Cây quang hợp → lọc khí.'),
    Q('Hành vi nào tốt nhất?', ['Vứt pin xuống đất', 'Đi bộ, xe đạp thay xe máy khi gần', 'Đi xe máy mọi nơi', 'Phá rừng'], 1, 'Giảm khí thải.'),
    Q('Pin đã hỏng nên?', ['Vứt vào nước', 'Vứt xuống đất', 'Bỏ vào nơi thu gom pin đã qua sử dụng', 'Đập vỡ ra cho khô rồi vứt'], 2, 'Pin chứa kim loại nặng → cần thu gom đúng.'),
  ]),

  M(30, 'Vai trò của môi trường với con người', [
    Q('Môi trường cung cấp cho con người?', ['Điện thoại', 'Vàng bạc đá quý', 'Đồ chơi và quần áo', 'Không khí, nước, thức ăn, nguyên liệu'], 3, 'Mọi nhu cầu cơ bản từ môi trường.'),
    Q('Nếu môi trường ô nhiễm, sức khoẻ con người?', ['Bị ảnh hưởng xấu', 'Khoẻ hơn', 'Tốt hơn', 'Không ảnh hưởng'], 0, 'Ô nhiễm → bệnh tật.'),
    Q('Nước sạch là?', ['Có mùi', 'Có màu', 'Có vị mặn', 'Không màu, không mùi, không vị, không có vi khuẩn gây bệnh'], 3, 'Tiêu chuẩn nước sạch.'),
    Q('Việc xử lý rác giúp?', ['Tốn kém vô ích', 'Có hại', 'Không cần thiết', 'Bảo vệ sức khoẻ và môi trường'], 3, 'Rác xử lý đúng → tránh ô nhiễm.'),
    Q('Cộng đồng cần làm gì cho môi trường?', ['Đốt phá', 'Tuyên truyền, hành động chung tay', 'Đổ rác', 'Không quan tâm'], 1, 'Cộng đồng cùng bảo vệ môi trường.'),
    Q('Một trong các vấn đề môi trường toàn cầu?', ['Mưa rào mùa hạ', 'Ăn nhiều rau', 'Trồng cây', 'Biến đổi khí hậu'], 3, 'Biến đổi khí hậu — thách thức toàn cầu.'),
  ]),

  M(31, 'Sự phụ thuộc lẫn nhau trong tự nhiên', [
    Q('Cây xanh cần gì?', ['Tiền để mua phân bón', 'Bài hát mỗi sáng', 'Ánh sáng, nước, chất khoáng, không khí', 'Đồ chơi'], 2, 'Yếu tố sống của cây.'),
    Q('Động vật cần?', ['Ánh sáng đèn điện ban đêm', 'Điện thoại', 'Phấn hoa các loài cây', 'Không khí, nước, thức ăn'], 3, 'Yếu tố sống của động vật.'),
    Q('Chuỗi thức ăn ví dụ?', ['Nước → khí → đất', 'Cỏ → bò → người', 'Sỏi → đá → cát', 'Sách → bút → vở'], 1, 'Năng lượng truyền qua chuỗi thức ăn.'),
    Q('Nếu mất một mắt xích trong chuỗi thức ăn?', ['Không ảnh hưởng', 'Cả chuỗi bị ảnh hưởng', 'Tốt hơn', 'Các loài còn lại sống tốt hơn'], 1, 'Mắt xích bị ảnh hưởng → cả chuỗi.'),
    Q('Quan hệ giữa cây và động vật?', ['Không quan hệ', 'Cây cung cấp thức ăn, oxi cho động vật', 'Đối nghịch', 'Tách biệt'], 1, 'Cây — động vật phụ thuộc lẫn nhau.'),
    Q('Đa dạng sinh học là?', ['Sự phong phú của các loài', 'Một loài duy nhất', 'Chỉ tính số lượng cá thể của một loài', 'Chỉ là cây'], 0, 'Đa dạng → hệ sinh thái bền vững.'),
  ]),

  M(32, 'Nước trong đời sống', [
    Q('Nước có ở các thể?', ['Chỉ rắn', 'Rắn, lỏng, khí', 'Chỉ khí', 'Chỉ lỏng'], 1, '3 thể: nước, đá, hơi nước.'),
    Q('Vòng tuần hoàn của nước trong tự nhiên?', ['Đứng yên', 'Bay hơi → ngưng tụ → mưa → chảy', 'Chỉ 1 chiều', 'Không vận động'], 1, 'Vòng tuần hoàn nước.'),
    Q('Nước sạch cần để?', ['Uống, nấu ăn, sinh hoạt', 'Chỉ tắm', 'Tưới hoa thôi', 'Chỉ rửa xe'], 0, 'Nhiều mục đích.'),
    Q('Cách tiết kiệm nước?', ['Khoá vòi khi không dùng, tái sử dụng nước rửa rau', 'Dùng nhiều nước', 'Để nước chảy tự do', 'Mở vòi cả ngày'], 0, 'Hành vi tiết kiệm nước.'),
    Q('Bệnh từ nước bẩn?', ['Hết bệnh', 'Cao hơn', 'Tiêu chảy, đau bụng, dịch tả', 'Khoẻ hơn'], 2, 'Nước bẩn gây nhiều bệnh.'),
    Q('Làm sạch nước có thể bằng?', ['Khuấy mạnh cho cặn lắng nhanh', 'Không cần', 'Đun sôi, lọc, dùng máy lọc', 'Để bụi rơi'], 2, 'Đun sôi diệt vi khuẩn.'),
  ]),

  M(33, 'Không khí — sự cháy', [
    Q('Không khí gồm chủ yếu?', ['Cacbon', 'Hơi nước', 'Nitơ và oxi', 'Khí mê-tan'], 2, 'Khí quyển ~ 78% N₂, 21% O₂.'),
    Q('Khí cần cho sự cháy?', ['Hidro có sẵn trong không khí', 'Oxi', 'Khí CO₂ làm lửa cháy mạnh', 'Nitơ chiếm phần lớn không khí'], 1, 'Cháy cần oxi.'),
    Q('Khí cần cho hô hấp?', ['Hơi nước', 'Oxi', 'Nitơ giúp phổi co bóp', 'CO₂ nuôi tế bào'], 1, 'Hít vào lấy oxi, thở ra CO₂.'),
    Q('Khi đậy kín ngọn nến, nến?', ['Tắt vì hết oxi', 'Cháy mãi', 'Cháy bùng lên rồi tắt ngay', 'Sáng hơn'], 0, 'Hết oxi → nến tắt.'),
    Q('Khói lửa thải ra?', ['Khí oxi tinh khiết', 'CO₂, hơi nước, bụi', 'Hơi nước sạch để uống', 'Nước sạch'], 1, 'Sản phẩm cháy.'),
    Q('Khi gặp cháy nhỏ, nên?', ['Quạt thêm', 'Dùng nước, chăn ướt, bình chữa cháy', 'Bỏ chạy', 'Đứng nhìn'], 1, 'Dập tắt sớm trước khi lan.'),
  ]),

  M(34, 'Ôn tập cuối cấp — Sinh vật & Môi trường', [
    Q('Cây xanh có vai trò?', ['Lọc khí, cung cấp oxi, làm thực phẩm', 'Chỉ làm đẹp', 'Có hại', 'Không vai trò'], 0, 'Cây quan trọng cho sự sống.'),
    Q('Động vật có ích?', ['Muỗi, chuột phá hoại', 'Côn trùng phá nhà', 'Bò sữa, gà, ong', 'Sâu phá hoa màu'], 2, 'Có lợi cho con người.'),
    Q('Bảo vệ động vật hoang dã giúp?', ['Có hại', 'Cân bằng sinh thái', 'Lãng phí', 'Tốn kém ngân sách quốc gia'], 1, 'Đa dạng sinh học.'),
    Q('Hành vi đúng?', ['Phá rừng', 'Vứt rác xuống sông', 'Không xả rác bừa, tiết kiệm nước, trồng cây', 'Đốt rác'], 2, 'Bảo vệ môi trường.'),
    Q('Trẻ em có thể bảo vệ môi trường bằng?', ['Để người lớn lo, trẻ em chưa cần', 'Đốt giấy', 'Phân loại rác, tiết kiệm điện, nói "không" với túi ni-lông', 'Phá đồ'], 2, 'Hành động nhỏ thiết thực.'),
    Q('Trồng cây gây rừng là?', ['Hành động bảo vệ môi trường', 'Có hại', 'Tốn công sức và không hiệu quả', 'Lãng phí'], 0, 'Rừng đem lại lợi ích lớn.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp Khoa học 5', [
    Q('Cơ thể sinh ra do?', ['Cha và mẹ', 'Đất tự sinh ra cơ thể người', 'Mây trên trời tạo ra em bé', 'Cây cối nở ra trẻ em'], 0, 'Sinh sản hữu tính.'),
    Q('Năng lượng sạch?', ['Khí đốt', 'Than đá đốt trong nhà máy', 'Mặt trời, gió, nước', 'Dầu mỏ'], 2, 'Năng lượng tái tạo.'),
    Q('Vật dẫn điện?', ['Kim loại', 'Vỏ nhựa của dây điện', 'Gỗ khô', 'Cao su'], 0, 'Kim loại dẫn điện.'),
    Q('Hỗn hợp đồng nhất là?', ['Đá + nước', 'Sỏi + cát', 'Cát + nước', 'Dung dịch'], 3, 'Dung dịch — đồng nhất.'),
    Q('Thú con được nuôi bằng?', ['Sữa mẹ', 'Lá non trên cây', 'Hạt thóc xay nhỏ', 'Cỏ tươi trên đồng'], 0, 'Thú có vú: sữa mẹ.'),
    Q('Bảo vệ môi trường cần?', ['Mọi người chung tay', 'Chỉ trẻ em', 'Chỉ người lớn', 'Một mình chính phủ'], 0, 'Trách nhiệm chung.'),
  ]),
];

export const P5KH_SCENARIOS = indexBy(P5KH_WEEKS);
