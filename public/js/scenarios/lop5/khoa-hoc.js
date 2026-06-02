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
    Q('Em được sinh ra từ?', ['Trứng gà', 'Cha và mẹ', 'Cây cối', 'Đất'], 1, 'Mọi đứa trẻ đều có cha và mẹ.'),
    Q('Quá trình mỗi đứa trẻ được tạo thành nhờ?', ['Sự thụ tinh giữa tế bào trứng và tinh trùng', 'Hoá học', 'Vật lý', 'Phép màu'], 0, 'Trứng + tinh trùng → hợp tử → phôi → thai.'),
    Q('Em bé phát triển trong cơ thể mẹ ở đâu?', ['Bụng (tử cung) của mẹ', 'Ngoài cơ thể', 'Trong dạ dày', 'Trong tim'], 0, 'Em bé phát triển trong tử cung của người mẹ.'),
    Q('Thời gian thai kì trung bình khoảng?', ['3 tháng', '6 tháng', '9 tháng', '12 tháng'], 2, 'Khoảng 9 tháng (40 tuần).'),
    Q('Mỗi gia đình nên có?', ['Càng nhiều con càng tốt', '1–2 con để nuôi dạy tốt', 'Không có con', 'Không quan trọng'], 1, 'Theo khuyến nghị: 1–2 con để chăm sóc, giáo dục tốt.'),
    Q('Đặc điểm di truyền do?', ['Cha truyền cho con', 'Mẹ truyền cho con', 'Cả cha lẫn mẹ', 'Thầy giáo'], 2, 'Đặc điểm di truyền do cha và mẹ truyền lại.'),
  ]),

  M(2, 'Nam hay nữ — Cơ quan sinh dục', [
    Q('Đặc điểm sinh học phân biệt nam và nữ là?', ['Tóc dài hay ngắn', 'Cơ quan sinh dục', 'Quần áo', 'Sở thích'], 1, 'Cơ quan sinh dục là đặc điểm sinh học.'),
    Q('Đặc điểm nào sau đây KHÔNG phải đặc điểm sinh học?', ['Có râu', 'Có kinh nguyệt', 'Tóc dài', 'Cơ quan sinh dục khác nhau'], 2, 'Tóc dài/ngắn là đặc điểm xã hội, không phải sinh học.'),
    Q('Nam và nữ cần?', ['Được tôn trọng và đối xử bình đẳng', 'Phân biệt đối xử', 'Ưu ái nam giới', 'Ưu ái nữ giới'], 0, 'Bình đẳng giới là quan trọng.'),
    Q('Quan niệm "trọng nam khinh nữ" là?', ['Đúng', 'Sai', 'Không có ý kiến', 'Không quan trọng'], 1, 'Đó là quan niệm cũ, không đúng.'),
    Q('Ai cũng có quyền?', ['Học tập', 'Vui chơi', 'Được yêu thương', 'Cả 3 đáp án'], 3, 'Trẻ em đều có quyền cơ bản.'),
    Q('Hành vi nào thể hiện bình đẳng nam — nữ?', ['Bạn nam và bạn nữ cùng chơi và học', 'Chỉ bạn nam được làm lớp trưởng', 'Chỉ bạn nữ phải dọn lớp', 'Phân biệt khi xếp hàng'], 0, 'Bình đẳng = cùng tham gia hoạt động.'),
  ]),

  M(3, 'Thiếu niên — Tuổi dậy thì', [
    Q('Tuổi dậy thì ở nữ thường bắt đầu từ?', ['5–7 tuổi', '10–14 tuổi', '20–25 tuổi', '30 tuổi'], 1, 'Nữ thường dậy thì từ 10–14 tuổi.'),
    Q('Tuổi dậy thì ở nam thường bắt đầu từ?', ['5–7 tuổi', '12–15 tuổi', '20 tuổi', '30 tuổi'], 1, 'Nam thường dậy thì từ 12–15 tuổi.'),
    Q('Biểu hiện dậy thì ở nữ?', ['Có kinh nguyệt, ngực phát triển', 'Mọc râu', 'Vỡ tiếng', 'Không có thay đổi'], 0, 'Đặc trưng nữ: kinh nguyệt, ngực phát triển.'),
    Q('Biểu hiện dậy thì ở nam?', ['Vỡ tiếng, mọc râu', 'Có kinh nguyệt', 'Ngực phát triển', 'Không thay đổi'], 0, 'Đặc trưng nam: vỡ tiếng, mọc râu.'),
    Q('Ở tuổi này em nên?', ['Vệ sinh cơ thể sạch sẽ, ăn đủ chất, tập thể dục', 'Không quan tâm', 'Bỏ học', 'Ăn nhiều đồ ngọt'], 0, 'Chăm sóc cơ thể đúng cách.'),
    Q('Cảm xúc tuổi này thường?', ['Ổn định', 'Dễ thay đổi, có lúc buồn vui thất thường', 'Không có cảm xúc', 'Luôn vui vẻ'], 1, 'Cảm xúc thường thay đổi mạnh.'),
  ]),

  M(4, 'Vệ sinh cơ thể tuổi dậy thì', [
    Q('Vệ sinh cơ thể hằng ngày nên?', ['Tắm rửa thường xuyên', 'Không tắm', 'Chỉ tắm 1 tuần/lần', 'Tuỳ thích'], 0, 'Tắm rửa, vệ sinh hằng ngày.'),
    Q('Vệ sinh răng miệng cần?', ['Đánh răng 2 lần/ngày', 'Không cần', 'Chỉ khi đau', 'Tuần 1 lần'], 0, 'Sáng và tối.'),
    Q('Quần áo lót cần?', ['Thay hàng ngày', 'Thay 1 tuần/lần', 'Không cần thay', 'Tuỳ thích'], 0, 'Thay quần áo lót hằng ngày.'),
    Q('Khi đến kì kinh nguyệt, bạn nữ nên?', ['Vệ sinh sạch sẽ, dùng băng vệ sinh', 'Không vệ sinh', 'Nghỉ học hoàn toàn', 'Không ăn'], 0, 'Vệ sinh sạch sẽ là cần thiết.'),
    Q('Tập thể dục đều giúp?', ['Cơ thể khoẻ mạnh', 'Béo phì', 'Yếu đi', 'Không quan trọng'], 0, 'Tập thể dục → khoẻ mạnh.'),
    Q('Khi gặp khó khăn ở tuổi dậy thì, nên?', ['Tâm sự với cha mẹ/thầy cô', 'Giấu kín', 'Bỏ học', 'Lo lắng một mình'], 0, 'Chia sẻ với người tin cậy.'),
  ]),

  M(5, 'Dùng thuốc an toàn', [
    Q('Khi nào nên uống thuốc?', ['Khi bị bệnh và có chỉ dẫn của bác sĩ', 'Khi nào cũng được', 'Khi đói', 'Khi vui'], 0, 'Có chỉ dẫn của bác sĩ.'),
    Q('Thuốc kháng sinh dùng để?', ['Diệt vi khuẩn gây bệnh', 'Làm đẹp', 'Tăng cân', 'Giải khát'], 0, 'Kháng sinh diệt vi khuẩn.'),
    Q('Tự ý uống thuốc có thể?', ['Gây hại cho sức khoẻ', 'Có lợi', 'Không sao', 'Tốt hơn'], 0, 'Tự ý uống có thể gây nhờn thuốc, độc.'),
    Q('Thuốc cần được bảo quản?', ['Nơi sạch, khô, tránh ánh nắng', 'Nơi ẩm ướt', 'Trong nước', 'Tuỳ ý'], 0, 'Bảo quản đúng cách để giữ chất lượng.'),
    Q('Thuốc hết hạn nên?', ['Vứt bỏ', 'Vẫn uống', 'Để dành', 'Bán'], 0, 'Thuốc hết hạn có thể gây hại.'),
    Q('Khi bị đau nhẹ, em nên?', ['Nghỉ ngơi và báo người lớn', 'Tự uống thuốc', 'Bỏ qua', 'Uống nhiều thuốc'], 0, 'Báo người lớn, nghỉ ngơi.'),
  ]),

  M(6, 'Phòng tránh bệnh sốt rét', [
    Q('Bệnh sốt rét do gì gây ra?', ['Kí sinh trùng plasmodium', 'Vi khuẩn', 'Nấm', 'Virus'], 0, 'Kí sinh trùng sốt rét.'),
    Q('Sốt rét lây truyền qua?', ['Muỗi anophen', 'Không khí', 'Nước', 'Tiếp xúc tay'], 0, 'Muỗi anophen đốt người bệnh sang người khoẻ.'),
    Q('Phòng sốt rét cần?', ['Ngủ màn, diệt muỗi', 'Uống nhiều nước', 'Tắm nắng', 'Ăn nhiều'], 0, 'Ngủ màn + diệt muỗi.'),
    Q('Triệu chứng sốt rét?', ['Sốt từng cơn, rét run rồi nóng', 'Đau bụng', 'Đau răng', 'Nhức tay'], 0, 'Đặc trưng: rét run rồi sốt cao.'),
    Q('Khi nghi sốt rét, cần?', ['Đến cơ sở y tế khám', 'Tự mua thuốc', 'Bỏ qua', 'Tắm nước lạnh'], 0, 'Khám và điều trị kịp thời.'),
    Q('Nơi muỗi sinh sản thường ở?', ['Vũng nước đọng', 'Nhà sạch', 'Bãi cát', 'Trên cao'], 0, 'Muỗi đẻ trong nước đọng.'),
  ]),

  M(7, 'Phòng tránh bệnh sốt xuất huyết', [
    Q('Sốt xuất huyết do?', ['Virus dengue qua muỗi vằn', 'Vi khuẩn', 'Nấm', 'Không khí'], 0, 'Virus dengue truyền qua muỗi vằn.'),
    Q('Triệu chứng sốt xuất huyết?', ['Sốt cao, đau cơ, có thể xuất huyết', 'Ho khan', 'Đau bụng đơn thuần', 'Mệt mỏi nhẹ'], 0, 'Sốt cao + xuất huyết dưới da.'),
    Q('Phòng sốt xuất huyết cần?', ['Diệt muỗi, lăng quăng, ngủ màn', 'Uống thuốc bổ', 'Không cần', 'Ăn ít'], 0, 'Quan trọng: diệt muỗi và lăng quăng.'),
    Q('Muỗi vằn thường hoạt động khi nào?', ['Ban ngày', 'Ban đêm', 'Cả ngày lẫn đêm', 'Chỉ chiều'], 0, 'Muỗi vằn (Aedes) hoạt động ban ngày.'),
    Q('Lăng quăng (bọ gậy) sống ở?', ['Nước trong các vật chứa quanh nhà', 'Trên cây', 'Trong đất', 'Trên cao'], 0, 'Lu, chum, lốp xe có nước → lăng quăng.'),
    Q('Khi sốt cao liên tục, cần?', ['Đến bệnh viện ngay', 'Tự uống thuốc hạ sốt', 'Đắp chăn cho ra mồ hôi', 'Tắm lạnh'], 0, 'Sốt cao cần khám bệnh kịp thời.'),
  ]),

  M(8, 'Phòng tránh HIV/AIDS (kiến thức cơ bản)', [
    Q('HIV là?', ['Virus gây suy giảm miễn dịch', 'Vi khuẩn', 'Nấm', 'Thuốc'], 0, 'HIV = Human Immunodeficiency Virus.'),
    Q('HIV lây truyền qua?', ['Đường máu, từ mẹ sang con, đường tình dục', 'Bắt tay, ôm, ăn chung', 'Hơi thở', 'Muỗi'], 0, 'Ba con đường lây chính.'),
    Q('HIV KHÔNG lây qua?', ['Bắt tay, ôm, dùng chung bát đĩa', 'Truyền máu', 'Quan hệ tình dục', 'Mẹ sang con'], 0, 'Tiếp xúc thông thường không lây HIV.'),
    Q('Người nhiễm HIV cần?', ['Được yêu thương, không kì thị', 'Cách ly hoàn toàn', 'Xa lánh', 'Đuổi học'], 0, 'Không kì thị, ủng hộ điều trị.'),
    Q('Phòng tránh HIV cần?', ['Không dùng chung bơm kim tiêm', 'Bắt tay', 'Ăn chung', 'Ngủ chung phòng'], 0, 'Tránh dùng chung kim tiêm là một biện pháp.'),
    Q('Người nhiễm HIV ở giai đoạn cuối được gọi là?', ['Bệnh AIDS', 'Cảm cúm', 'Sốt rét', 'Tiểu đường'], 0, 'AIDS = giai đoạn cuối của HIV.'),
  ]),

  M(9, 'An toàn — Phòng tránh tai nạn đuối nước', [
    Q('Để phòng đuối nước, không nên?', ['Tự đi tắm sông một mình', 'Bơi với phao + người lớn', 'Học bơi', 'Tuân thủ quy định ở bể bơi'], 0, 'Tự ý tắm sông rất nguy hiểm.'),
    Q('Khi thấy người đuối nước, KHÔNG biết bơi nên?', ['Hô hoán + ném phao/sào', 'Nhảy xuống cứu', 'Bỏ đi', 'Im lặng'], 0, 'Không tự nhảy xuống nếu không biết bơi.'),
    Q('Học bơi là kỹ năng?', ['Quan trọng để phòng đuối nước', 'Không cần thiết', 'Chỉ cho người lớn', 'Chỉ cho nam'], 0, 'Học bơi cứu mạng.'),
    Q('Trước khi bơi nên?', ['Khởi động, kiểm tra sức khoẻ', 'Ăn no rồi nhảy xuống', 'Uống nước đá', 'Nhảy ngay'], 0, 'Khởi động để tránh chuột rút.'),
    Q('Khu vực có biển báo "Nguy hiểm, cấm tắm" thì?', ['Không được tắm', 'Vẫn tắm thoải mái', 'Tắm thử', 'Tuỳ ý'], 0, 'Phải tuyệt đối tuân thủ.'),
    Q('Khi bị chuột rút khi bơi, nên?', ['Bình tĩnh, kêu cứu, đập chân duỗi cơ', 'Hoảng sợ vùng vẫy', 'Lặn sâu', 'Bỏ áo'], 0, 'Bình tĩnh + báo người cứu.'),
  ]),

  M(10, 'An toàn — Phòng tránh tai nạn giao thông & điện', [
    Q('Khi đi bộ qua đường nên?', ['Đi vào vạch dành cho người đi bộ', 'Băng qua chỗ tối', 'Chạy nhanh qua', 'Đi giữa đường'], 0, 'Đi đúng vạch kẻ + nhìn 2 phía.'),
    Q('Đèn đỏ giao thông nghĩa?', ['Dừng lại', 'Đi tiếp', 'Đi nhanh', 'Tuỳ ý'], 0, 'Đèn đỏ = dừng.'),
    Q('Tay ướt có nên sờ vào ổ điện?', ['Không, rất nguy hiểm', 'Có', 'Tuỳ', 'Có nếu trời mưa'], 0, 'Tay ướt sờ điện → giật điện chết người.'),
    Q('Khi thấy dây điện đứt rơi xuống đường?', ['Tránh xa và báo người lớn', 'Lại gần xem', 'Cầm lên', 'Nhảy qua'], 0, 'Tránh xa, gọi cứu trợ.'),
    Q('Khi đi xe đạp cần?', ['Đi đúng phần đường, đội mũ bảo hiểm', 'Đi giữa đường', 'Đèo 2–3 người', 'Buông tay lái'], 0, 'An toàn giao thông xe đạp.'),
    Q('Đồ chơi nguy hiểm là?', ['Đồ chơi sắc nhọn hoặc cháy nổ', 'Búp bê', 'Bóng cao su', 'Bộ lego'], 0, 'Tránh đồ chơi sắc nhọn, cháy nổ.'),
  ]),

  M(11, 'An toàn — Phòng tránh ngộ độc', [
    Q('Thực phẩm bị ôi thiu thì?', ['Không ăn, vứt bỏ', 'Vẫn ăn', 'Hâm lại ăn', 'Tuỳ'], 0, 'Thực phẩm hỏng có thể gây ngộ độc.'),
    Q('Trước khi ăn nên?', ['Rửa tay sạch', 'Lau qua loa', 'Không cần rửa', 'Chỉ vẩy tay'], 0, 'Rửa tay tránh vi khuẩn.'),
    Q('Khi bị ngộ độc thực phẩm, dấu hiệu?', ['Đau bụng, nôn, tiêu chảy', 'Mọc tóc', 'Cao thêm', 'Học giỏi hơn'], 0, 'Triệu chứng ngộ độc thực phẩm.'),
    Q('Hoá chất tẩy rửa nên?', ['Để xa tầm tay trẻ em', 'Để gần đồ ăn', 'Để trong tủ lạnh', 'Để cùng nước uống'], 0, 'Tránh nhầm lẫn ngộ độc.'),
    Q('Khi nghi ngộ độc, cần?', ['Đến cơ sở y tế ngay', 'Uống thật nhiều nước', 'Tự uống thuốc', 'Đi ngủ'], 0, 'Đến cơ sở y tế khẩn cấp.'),
    Q('Đồ ăn ngoài đường không vệ sinh có thể?', ['Gây ngộ độc', 'Tốt cho sức khoẻ', 'Không ảnh hưởng', 'Tăng cân'], 0, 'Chọn nơi vệ sinh để ăn.'),
  ]),

  M(12, 'Năng lượng — vai trò của năng lượng', [
    Q('Năng lượng là?', ['Cái có thể làm vật chuyển động hoặc làm việc', 'Không khí', 'Đất', 'Cây'], 0, 'Năng lượng → làm vật chuyển động/biến đổi.'),
    Q('Nguồn năng lượng phổ biến của con người?', ['Thức ăn', 'Đất', 'Nước biển', 'Đá'], 0, 'Thức ăn → năng lượng cho cơ thể.'),
    Q('Năng lượng dùng để?', ['Chạy máy, sưởi ấm, chiếu sáng', 'Không làm gì', 'Chỉ ngủ', 'Chỉ ăn'], 0, 'Năng lượng phục vụ đời sống.'),
    Q('Nếu mất điện thì?', ['Nhiều thiết bị không hoạt động', 'Tất cả vẫn chạy', 'Không ảnh hưởng', 'Mọi thứ tốt hơn'], 0, 'Mất điện → tivi, đèn, tủ lạnh… ngừng hoạt động.'),
    Q('Năng lượng có dạng?', ['Cơ năng, điện, nhiệt, ánh sáng', 'Chỉ 1 dạng', 'Không có dạng', 'Tuỳ'], 0, 'Nhiều dạng năng lượng khác nhau.'),
    Q('Trẻ em cần năng lượng để?', ['Học tập, vui chơi, phát triển', 'Không cần', 'Chỉ để ngủ', 'Chỉ để khóc'], 0, 'Năng lượng từ thức ăn cho mọi hoạt động.'),
  ]),

  M(13, 'Năng lượng mặt trời', [
    Q('Mặt trời là?', ['Một ngôi sao toả nhiệt và ánh sáng', 'Hành tinh', 'Vệ tinh', 'Đám mây'], 0, 'Mặt trời là ngôi sao gần Trái Đất nhất.'),
    Q('Năng lượng mặt trời được dùng để?', ['Phơi quần áo, làm khô, làm muối, pin mặt trời', 'Không dùng được', 'Chỉ chiếu sáng', 'Chỉ làm hỏng đồ'], 0, 'Nhiều ứng dụng năng lượng mặt trời.'),
    Q('Pin mặt trời chuyển đổi năng lượng mặt trời thành?', ['Điện năng', 'Nhiệt năng', 'Cơ năng', 'Hoá năng'], 0, 'Pin mặt trời → điện.'),
    Q('Năng lượng mặt trời là?', ['Sạch và vô tận', 'Bẩn', 'Có hạn', 'Gây ô nhiễm'], 0, 'Năng lượng sạch, tái tạo.'),
    Q('Cây xanh dùng năng lượng mặt trời để?', ['Quang hợp', 'Hít thở', 'Đi chuyển', 'Sinh sản'], 0, 'Quang hợp cần ánh sáng mặt trời.'),
    Q('Hoạt động nào dùng năng lượng mặt trời?', ['Phơi thóc', 'Nướng bánh trong lò', 'Xay gạo', 'Ép mía'], 0, 'Phơi thóc trực tiếp dùng nắng mặt trời.'),
  ]),

  M(14, 'Năng lượng gió — nước', [
    Q('Năng lượng gió được dùng để?', ['Chạy thuyền buồm, cối xay gió, máy phát điện', 'Đốt cháy', 'Sưởi', 'Đun nước'], 0, 'Gió → cối xay, máy phát điện gió.'),
    Q('Năng lượng nước được dùng để?', ['Quay tuabin, sản xuất điện (thủy điện)', 'Đốt', 'Phơi', 'Sưởi'], 0, 'Thủy điện dùng năng lượng nước.'),
    Q('Hai loại năng lượng trên thuộc?', ['Năng lượng sạch, tái tạo', 'Năng lượng bẩn', 'Năng lượng hết', 'Năng lượng độc'], 0, 'Sạch và có thể tái tạo.'),
    Q('Cối xay gió chuyển năng lượng gió thành?', ['Cơ năng / điện', 'Hoá năng', 'Nhiệt', 'Ánh sáng'], 0, 'Cối xay → cơ năng (hoặc điện qua tuabin).'),
    Q('Việt Nam có nhiều nhà máy thủy điện ở?', ['Vùng núi', 'Đồng bằng', 'Biển khơi', 'Sa mạc'], 0, 'Vùng núi có nhiều sông suối thuận lợi.'),
    Q('Năng lượng nước, gió, mặt trời gọi chung là?', ['Năng lượng tái tạo', 'Năng lượng hoá thạch', 'Năng lượng hạt nhân', 'Năng lượng hoá học'], 0, 'Đều là tái tạo, sạch.'),
  ]),

  M(15, 'Năng lượng than đá, dầu mỏ, khí đốt', [
    Q('Than đá, dầu mỏ, khí đốt thuộc?', ['Năng lượng hoá thạch (không tái tạo)', 'Năng lượng tái tạo', 'Năng lượng mặt trời', 'Năng lượng gió'], 0, 'Hoá thạch, có hạn.'),
    Q('Khi đốt than đá có thải?', ['Khói, khí CO₂, bụi gây ô nhiễm', 'Nước sạch', 'Đường', 'Sữa'], 0, 'Đốt than gây ô nhiễm.'),
    Q('Dầu mỏ dùng để?', ['Sản xuất xăng dầu, nhựa', 'Làm bánh', 'Pha trà', 'Nấu cơm'], 0, 'Lọc thành xăng, dầu, nhựa.'),
    Q('Năng lượng hoá thạch ngày càng?', ['Cạn kiệt', 'Tăng lên', 'Không thay đổi', 'Tự sinh ra'], 0, 'Có hạn → ngày càng hết.'),
    Q('Việc tiết kiệm năng lượng là?', ['Bảo vệ môi trường và tài nguyên', 'Không cần thiết', 'Vô ích', 'Có hại'], 0, 'Tiết kiệm = bảo vệ.'),
    Q('Khí đốt thường dùng để?', ['Đun nấu, sưởi ấm', 'Làm phân bón', 'Trồng cây', 'Làm bánh trực tiếp'], 0, 'Bình gas, bếp gas → đun nấu.'),
  ]),

  M(16, 'Vai trò của điện trong đời sống', [
    Q('Điện được sản xuất ở?', ['Nhà máy điện (thủy, nhiệt, mặt trời, gió, hạt nhân)', 'Nhà ở', 'Trường học', 'Bãi rác'], 0, 'Nhà máy điện sản xuất điện năng.'),
    Q('Đồ dùng nào dùng điện?', ['Tivi, tủ lạnh, đèn điện, quạt', 'Bút chì', 'Cây xanh', 'Đá'], 0, 'Các thiết bị điện.'),
    Q('Tiết kiệm điện là?', ['Tắt thiết bị khi không dùng', 'Bật đèn cả ngày', 'Mở tủ lạnh lâu', 'Tăng quạt tối đa'], 0, 'Tắt thiết bị → tiết kiệm.'),
    Q('Để an toàn điện, không nên?', ['Sờ ổ điện bằng tay ướt, cắm quá nhiều thiết bị', 'Tắt điện trước khi sửa', 'Dùng đúng công suất', 'Lắp aptomat'], 0, 'Hành vi nguy hiểm.'),
    Q('Đèn LED so với đèn sợi đốt?', ['Tiết kiệm điện hơn', 'Tốn điện hơn', 'Như nhau', 'Tối hơn'], 0, 'LED hiệu suất cao hơn.'),
    Q('Khi cháy nổ điện, cần?', ['Ngắt cầu dao và báo người lớn', 'Dùng nước dập', 'Tiếp tục dùng', 'Bỏ chạy'], 0, 'Ngắt điện trước.'),
  ]),

  M(17, 'Mạch điện đơn giản', [
    Q('Mạch điện cần có?', ['Nguồn điện, dây dẫn, vật tiêu thụ', 'Chỉ pin', 'Chỉ dây', 'Chỉ bóng đèn'], 0, 'Đầy đủ 3 thành phần.'),
    Q('Vật dẫn điện?', ['Kim loại, than', 'Nhựa', 'Gỗ khô', 'Cao su'], 0, 'Kim loại dẫn điện tốt.'),
    Q('Vật cách điện?', ['Nhựa, cao su, gỗ khô', 'Kim loại', 'Than', 'Nước muối'], 0, 'Cách điện = không cho điện qua.'),
    Q('Công tắc dùng để?', ['Đóng/ngắt mạch điện', 'Tăng điện', 'Giảm điện', 'Chiếu sáng'], 0, 'Công tắc điều khiển dòng điện.'),
    Q('Pin là?', ['Nguồn điện hoá học', 'Vật cách điện', 'Vật dẫn điện', 'Dụng cụ chiếu sáng'], 0, 'Pin → nguồn điện.'),
    Q('Khi mạch hở, đèn?', ['Không sáng', 'Vẫn sáng', 'Sáng yếu', 'Cháy'], 0, 'Hở mạch → không có dòng điện → đèn không sáng.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Em được sinh ra từ?', ['Cha và mẹ', 'Cây', 'Đất', 'Đá'], 0, 'Cha + mẹ.'),
    Q('Tuổi dậy thì cần chú ý?', ['Vệ sinh, dinh dưỡng, tâm lý', 'Không cần', 'Chỉ chơi', 'Chỉ ăn'], 0, 'Chăm sóc cơ thể và tâm lý.'),
    Q('HIV KHÔNG lây qua?', ['Bắt tay', 'Truyền máu', 'Mẹ sang con', 'Quan hệ tình dục'], 0, 'Bắt tay an toàn.'),
    Q('Năng lượng tái tạo gồm?', ['Mặt trời, gió, nước', 'Than đá', 'Dầu mỏ', 'Khí đốt'], 0, 'Sạch và tái tạo.'),
    Q('An toàn điện không nên?', ['Sờ ổ điện tay ướt', 'Tắt khi không dùng', 'Lắp aptomat', 'Dùng đúng công suất'], 0, 'Tay ướt + điện = nguy hiểm.'),
    Q('Khi ngộ độc thực phẩm, cần?', ['Đến cơ sở y tế', 'Tự uống thuốc', 'Bỏ qua', 'Đi ngủ'], 0, 'Khám và điều trị.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Sự biến đổi chất — hỗn hợp', [
    Q('Hỗn hợp là?', ['Hai hay nhiều chất trộn lẫn không tạo chất mới', 'Một chất duy nhất', 'Chất tinh khiết', 'Nguyên tố'], 0, 'Hỗn hợp giữ nguyên chất cũ.'),
    Q('Ví dụ hỗn hợp?', ['Muối + nước, gạo + đậu', 'Nước cất', 'Đường tinh', 'Sắt'], 0, 'Trộn không tạo chất mới.'),
    Q('Cách tách muối khỏi hỗn hợp muối + cát?', ['Hoà nước, lọc cát, đun bay hơi nước', 'Đốt', 'Khuấy', 'Để yên'], 0, 'Hoà tan + lọc + bay hơi.'),
    Q('Cách tách dầu khỏi nước?', ['Dùng phễu chiết', 'Lọc bằng giấy', 'Đun', 'Khuấy'], 0, 'Dầu nổi trên nước → chiết.'),
    Q('Lọc tách được?', ['Chất rắn không tan với nước', 'Chất tan hoàn toàn', 'Khí với khí', 'Lỏng với lỏng'], 0, 'Lọc tách rắn không tan.'),
    Q('Cát + nước là?', ['Hỗn hợp', 'Chất tinh khiết', 'Dung dịch', 'Hoá hợp'], 0, 'Trộn nhau không tạo chất mới.'),
  ]),

  M(20, 'Dung dịch', [
    Q('Dung dịch là?', ['Hỗn hợp đồng nhất của chất tan trong dung môi', 'Hỗn hợp không đều', 'Chất rắn', 'Khí'], 0, 'Dung dịch = hỗn hợp đồng nhất.'),
    Q('Ví dụ dung dịch?', ['Nước muối, nước đường', 'Dầu + nước', 'Cát + nước', 'Sỏi + đá'], 0, 'Tan hoàn toàn, đồng nhất.'),
    Q('Dung môi phổ biến là?', ['Nước', 'Sắt', 'Đá', 'Gỗ'], 0, 'Nước là dung môi phổ biến nhất.'),
    Q('Cách tách muối khỏi dung dịch nước muối?', ['Đun cho bay hơi nước', 'Lọc', 'Khuấy', 'Để yên'], 0, 'Cô cạn → còn muối.'),
    Q('Khi cho đường vào nước rồi khuấy, ta được?', ['Dung dịch đường', 'Hỗn hợp không đều', 'Chất tinh khiết', 'Cát'], 0, 'Đường tan hết → dung dịch.'),
    Q('Tăng tốc độ tan có thể bằng?', ['Khuấy + đun nóng', 'Để yên + làm lạnh', 'Tắt bếp', 'Đập vỡ chén'], 0, 'Khuấy + nóng → tan nhanh hơn.'),
  ]),

  M(21, 'Sự biến đổi hoá học', [
    Q('Sự biến đổi hoá học là?', ['Chất biến đổi thành chất khác', 'Chỉ đổi hình dạng', 'Chỉ đổi vị trí', 'Không thay đổi gì'], 0, 'Có chất mới tạo thành.'),
    Q('Ví dụ biến đổi hoá học?', ['Đốt giấy, sắt gỉ', 'Cắt giấy', 'Nung nóng nước → hơi', 'Đập vỡ kính'], 0, 'Đốt giấy → tro, khí (chất mới).'),
    Q('Ví dụ KHÔNG phải biến đổi hoá học?', ['Nước đông thành đá', 'Đốt củi', 'Sắt gỉ', 'Lên men cơm'], 0, 'Nước → đá chỉ đổi thể (vật lý).'),
    Q('Khi vôi sống + nước:', ['Toả nhiệt, tạo vôi tôi (chất mới)', 'Không phản ứng', 'Chỉ thay đổi hình dạng', 'Mát lạnh'], 0, 'Tạo vôi tôi + toả nhiệt.'),
    Q('Sắt để lâu ngoài trời?', ['Bị gỉ (hoá học)', 'Không đổi', 'Thành đồng', 'Thành vàng'], 0, 'Sắt + oxi → gỉ sắt.'),
    Q('Sự biến đổi nào là vật lý?', ['Nước bay hơi', 'Đốt giấy', 'Sắt gỉ', 'Lên men sữa'], 0, 'Bay hơi chỉ đổi thể.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Sự sinh sản của thực vật có hoa', [
    Q('Hoa có chức năng?', ['Sinh sản', 'Quang hợp', 'Hô hấp', 'Vận chuyển nước'], 0, 'Hoa là cơ quan sinh sản của thực vật có hoa.'),
    Q('Cơ quan sinh sản đực của hoa?', ['Nhị', 'Nhụy', 'Đài', 'Cánh'], 0, 'Nhị mang hạt phấn.'),
    Q('Cơ quan sinh sản cái của hoa?', ['Nhụy', 'Nhị', 'Cánh', 'Đài'], 0, 'Nhụy có bầu nhuỵ chứa noãn.'),
    Q('Quá trình thụ phấn là?', ['Hạt phấn rơi lên đầu nhuỵ', 'Hoa nở', 'Lá rụng', 'Cây chết'], 0, 'Hạt phấn → đầu nhuỵ → thụ tinh.'),
    Q('Côn trùng thụ phấn nhờ?', ['Mật hoa', 'Lá', 'Rễ', 'Gỗ'], 0, 'Côn trùng tới hút mật → chuyển phấn.'),
    Q('Sau thụ tinh, bầu nhuỵ phát triển thành?', ['Quả', 'Lá', 'Rễ', 'Cành'], 0, 'Bầu nhuỵ → quả chứa hạt.'),
  ]),

  M(23, 'Sự nảy mầm của hạt — Sinh sản thực vật', [
    Q('Hạt nảy mầm cần?', ['Nước, không khí, nhiệt độ thích hợp', 'Ánh sáng mạnh', 'Đất khô', 'Băng tuyết'], 0, '3 yếu tố: nước, khí, nhiệt.'),
    Q('Hạt giống gồm?', ['Vỏ, phôi, chất dinh dưỡng dự trữ', 'Chỉ vỏ', 'Chỉ phôi', 'Chỉ rễ'], 0, 'Vỏ + phôi + dinh dưỡng.'),
    Q('Cây mọc từ?', ['Hạt hoặc bộ phận sinh dưỡng của cây mẹ', 'Đá', 'Cát', 'Nước'], 0, 'Hạt hoặc thân, lá, rễ (giâm, chiết, ghép).'),
    Q('Cây khoai lang sinh sản bằng?', ['Củ', 'Hạt', 'Lá', 'Rễ phụ'], 0, 'Khoai lang mọc từ củ/dây.'),
    Q('Cây mía sinh sản bằng?', ['Thân (giâm)', 'Hạt', 'Lá', 'Rễ'], 0, 'Mía giâm bằng đoạn thân.'),
    Q('Cách trồng cây bằng cành gọi là?', ['Giâm cành', 'Chiết cành', 'Ghép cành', 'Tất cả là cách trồng vô tính'], 3, 'Đều thuộc sinh sản vô tính.'),
  ]),

  M(24, 'Sự sinh sản của động vật', [
    Q('Động vật sinh sản bằng?', ['Đẻ trứng hoặc đẻ con', 'Hạt', 'Rễ', 'Cành'], 0, 'Đẻ trứng hoặc đẻ con.'),
    Q('Loài nào đẻ con?', ['Bò, chó, mèo', 'Gà, vịt', 'Cá, ếch', 'Bướm'], 0, 'Thú có vú thường đẻ con.'),
    Q('Loài nào đẻ trứng?', ['Gà, vịt, rùa', 'Bò', 'Trâu', 'Mèo'], 0, 'Chim, bò sát, lưỡng cư thường đẻ trứng.'),
    Q('Trứng được thụ tinh sẽ?', ['Phát triển thành con non', 'Vẫn là trứng', 'Tan ra', 'Cứng lại'], 0, 'Trứng thụ tinh phát triển thành con.'),
    Q('Con non của thú có vú được nuôi bằng?', ['Sữa mẹ', 'Cỏ', 'Nước', 'Hạt'], 0, 'Sữa mẹ là nguồn dinh dưỡng đầu.'),
    Q('Bướm trải qua các giai đoạn?', ['Trứng → sâu → nhộng → bướm', 'Trứng → bướm', 'Sâu → bướm', 'Bướm → trứng → bướm'], 0, 'Vòng đời 4 giai đoạn.'),
  ]),

  M(25, 'Sự sinh sản của ếch — gà', [
    Q('Ếch đẻ?', ['Trứng dưới nước', 'Con trên cạn', 'Trứng trên cây', 'Con dưới nước'], 0, 'Ếch đẻ trứng dưới nước.'),
    Q('Nòng nọc là giai đoạn nào của ếch?', ['Ấu trùng dưới nước', 'Ếch trưởng thành', 'Trứng', 'Ếch già'], 0, 'Trứng → nòng nọc → ếch con → ếch lớn.'),
    Q('Gà mái đẻ trứng. Trứng được ấp bằng?', ['Hơi ấm cơ thể mẹ hoặc lò ấp', 'Nước đá', 'Cát', 'Mặt trời trực tiếp'], 0, 'Cần nhiệt độ ổn định để ấp.'),
    Q('Sau bao lâu thì gà con nở?', ['Khoảng 21 ngày', '1 ngày', '7 ngày', '60 ngày'], 0, 'Trứng gà ấp ~ 21 ngày.'),
    Q('Khi vừa nở, gà con đã?', ['Đi lại được', 'Bay xa', 'Chạy nhanh', 'Bơi giỏi'], 0, 'Gà con vừa nở đã tự đi lại.'),
    Q('Sự khác biệt giữa gà và ếch?', ['Gà đẻ trứng trên cạn, ếch đẻ trứng dưới nước', 'Gà đẻ con, ếch đẻ trứng', 'Cả 2 đều đẻ con', 'Cả 2 đều đẻ trứng dưới nước'], 0, 'Môi trường đẻ trứng khác nhau.'),
  ]),

  M(26, 'Sự sinh sản của thú', [
    Q('Thú là động vật?', ['Đẻ con và nuôi bằng sữa mẹ', 'Đẻ trứng', 'Không sinh sản', 'Đẻ hạt'], 0, 'Thú có vú: đẻ con, nuôi sữa.'),
    Q('Thú con khi sinh ra đã?', ['Có hình dáng giống mẹ', 'Như cái trứng', 'Như con sâu', 'Như cá'], 0, 'Giống mẹ thu nhỏ.'),
    Q('Đa số thú con sinh ra một lứa?', ['1–vài con', '100 trứng', '1 000 trứng', '10 000 trứng'], 0, 'Thú thường đẻ ít con/lứa.'),
    Q('Vai trò của sữa mẹ với thú con?', ['Nguồn dinh dưỡng quan trọng', 'Không có vai trò', 'Chỉ uống cho vui', 'Vô ích'], 0, 'Sữa mẹ giàu dinh dưỡng.'),
    Q('Trong các loài sau, loài nào là thú?', ['Cá voi, dơi', 'Cá chép', 'Gà', 'Cá sấu'], 0, 'Cá voi và dơi đều là thú.'),
    Q('Thú con cần được mẹ?', ['Chăm sóc, bảo vệ', 'Bỏ rơi', 'Đánh', 'Bán đi'], 0, 'Sự chăm sóc của mẹ rất quan trọng.'),
  ]),

  M(27, 'Môi trường và tài nguyên thiên nhiên', [
    Q('Môi trường là?', ['Mọi thứ xung quanh ảnh hưởng tới sự sống', 'Chỉ là không khí', 'Chỉ là nước', 'Chỉ là đất'], 0, 'Môi trường gồm đất, nước, khí, sinh vật.'),
    Q('Tài nguyên thiên nhiên gồm?', ['Đất, nước, khoáng sản, rừng, biển', 'Quần áo', 'Sách vở', 'Máy tính'], 0, 'Tài nguyên do thiên nhiên cung cấp.'),
    Q('Tài nguyên nào có thể tái tạo?', ['Rừng, nước, đất', 'Dầu mỏ', 'Than đá', 'Vàng'], 0, 'Có thể phục hồi khi sử dụng hợp lý.'),
    Q('Tài nguyên KHÔNG tái tạo?', ['Than đá, dầu mỏ', 'Rừng', 'Nước', 'Đất'], 0, 'Hình thành mất hàng triệu năm.'),
    Q('Sử dụng tài nguyên cần?', ['Tiết kiệm và hợp lý', 'Tuỳ ý', 'Lãng phí', 'Khai thác triệt để'], 0, 'Đảm bảo phát triển bền vững.'),
    Q('Việc trồng rừng giúp?', ['Bảo vệ môi trường', 'Phá hoại', 'Mất đất', 'Không có lợi'], 0, 'Rừng giữ đất, lọc khí, điều hoà khí hậu.'),
  ]),

  M(28, 'Tác động của con người tới môi trường', [
    Q('Hoạt động nào gây ô nhiễm môi trường?', ['Xả rác, đốt rừng, xả khí thải', 'Trồng cây', 'Tiết kiệm điện', 'Đi xe đạp'], 0, 'Hành vi gây hại môi trường.'),
    Q('Hành vi bảo vệ môi trường?', ['Vứt rác đúng nơi quy định', 'Đốt rác', 'Xả nước thải ra sông', 'Phá rừng'], 0, 'Vứt rác đúng nơi giúp giữ sạch.'),
    Q('Phá rừng dẫn đến?', ['Lũ lụt, xói mòn đất, hạn hán', 'Mát mẻ hơn', 'Nhiều mưa hơn', 'Đất tốt hơn'], 0, 'Mất rừng → nhiều hậu quả xấu.'),
    Q('Khí thải xe ô tô gây?', ['Ô nhiễm không khí', 'Sạch không khí', 'Không ảnh hưởng', 'Làm tốt cho cây'], 0, 'CO₂, NO₂, bụi mịn → ô nhiễm.'),
    Q('Nước thải chưa xử lý thải ra sông gây?', ['Ô nhiễm nước', 'Sạch sông', 'Tốt cho cá', 'Không ảnh hưởng'], 0, 'Ô nhiễm nguồn nước.'),
    Q('Việc em có thể làm?', ['Tiết kiệm điện nước, không xả rác, trồng cây', 'Vứt rác bừa', 'Phá cây', 'Đốt rác'], 0, 'Hành động nhỏ có ý nghĩa lớn.'),
  ]),

  M(29, 'Bảo vệ môi trường', [
    Q('Bảo vệ môi trường là việc của?', ['Mọi người', 'Chỉ chính phủ', 'Chỉ người lớn', 'Chỉ trẻ em'], 0, 'Trách nhiệm chung của toàn xã hội.'),
    Q('3R trong môi trường?', ['Giảm thiểu — tái sử dụng — tái chế (Reduce — Reuse — Recycle)', 'Run — Read — Rest', 'Rest — Run — Read', 'Read — Run — Reuse'], 0, 'Reduce — Reuse — Recycle.'),
    Q('Sử dụng túi vải thay túi ni-lông là?', ['Bảo vệ môi trường', 'Gây hại', 'Lãng phí', 'Không có ý nghĩa'], 0, 'Giảm rác thải nhựa.'),
    Q('Cây xanh giúp?', ['Lọc không khí, giảm CO₂', 'Tăng CO₂', 'Gây ô nhiễm', 'Không có tác dụng'], 0, 'Cây quang hợp → lọc khí.'),
    Q('Hành vi nào tốt nhất?', ['Đi bộ, xe đạp thay xe máy khi gần', 'Đi xe máy mọi nơi', 'Phá rừng', 'Vứt pin xuống đất'], 0, 'Giảm khí thải.'),
    Q('Pin đã hỏng nên?', ['Bỏ vào nơi thu gom pin đã qua sử dụng', 'Vứt xuống đất', 'Vứt vào nước', 'Đốt'], 0, 'Pin chứa kim loại nặng → cần thu gom đúng.'),
  ]),

  M(30, 'Vai trò của môi trường với con người', [
    Q('Môi trường cung cấp cho con người?', ['Không khí, nước, thức ăn, nguyên liệu', 'Tiền', 'Điện thoại', 'Sách'], 0, 'Mọi nhu cầu cơ bản từ môi trường.'),
    Q('Nếu môi trường ô nhiễm, sức khoẻ con người?', ['Bị ảnh hưởng xấu', 'Tốt hơn', 'Không ảnh hưởng', 'Khoẻ hơn'], 0, 'Ô nhiễm → bệnh tật.'),
    Q('Nước sạch là?', ['Không màu, không mùi, không vị, không có vi khuẩn gây bệnh', 'Có mùi', 'Có màu', 'Có vị mặn'], 0, 'Tiêu chuẩn nước sạch.'),
    Q('Việc xử lý rác giúp?', ['Bảo vệ sức khoẻ và môi trường', 'Tốn kém vô ích', 'Không cần thiết', 'Có hại'], 0, 'Rác xử lý đúng → tránh ô nhiễm.'),
    Q('Cộng đồng cần làm gì cho môi trường?', ['Tuyên truyền, hành động chung tay', 'Không quan tâm', 'Đổ rác', 'Đốt phá'], 0, 'Cộng đồng cùng bảo vệ môi trường.'),
    Q('Một trong các vấn đề môi trường toàn cầu?', ['Biến đổi khí hậu', 'Ăn nhiều rau', 'Đi bộ', 'Trồng cây'], 0, 'Biến đổi khí hậu — thách thức toàn cầu.'),
  ]),

  M(31, 'Sự phụ thuộc lẫn nhau trong tự nhiên', [
    Q('Cây xanh cần gì?', ['Ánh sáng, nước, chất khoáng, không khí', 'Tiền', 'Đồ chơi', 'Sách'], 0, 'Yếu tố sống của cây.'),
    Q('Động vật cần?', ['Không khí, nước, thức ăn', 'Sách', 'Đèn', 'Điện thoại'], 0, 'Yếu tố sống của động vật.'),
    Q('Chuỗi thức ăn ví dụ?', ['Cỏ → bò → người', 'Sỏi → đá → cát', 'Sách → bút → vở', 'Nước → khí → đất'], 0, 'Năng lượng truyền qua chuỗi thức ăn.'),
    Q('Nếu mất một mắt xích trong chuỗi thức ăn?', ['Cả chuỗi bị ảnh hưởng', 'Không ảnh hưởng', 'Tốt hơn', 'Không quan trọng'], 0, 'Mắt xích bị ảnh hưởng → cả chuỗi.'),
    Q('Quan hệ giữa cây và động vật?', ['Cây cung cấp thức ăn, oxi cho động vật', 'Không quan hệ', 'Đối nghịch', 'Tách biệt'], 0, 'Cây — động vật phụ thuộc lẫn nhau.'),
    Q('Đa dạng sinh học là?', ['Sự phong phú của các loài', 'Một loài duy nhất', 'Không quan trọng', 'Chỉ là cây'], 0, 'Đa dạng → hệ sinh thái bền vững.'),
  ]),

  M(32, 'Nước trong đời sống', [
    Q('Nước có ở các thể?', ['Rắn, lỏng, khí', 'Chỉ lỏng', 'Chỉ rắn', 'Chỉ khí'], 0, '3 thể: nước, đá, hơi nước.'),
    Q('Vòng tuần hoàn của nước trong tự nhiên?', ['Bay hơi → ngưng tụ → mưa → chảy', 'Đứng yên', 'Chỉ 1 chiều', 'Không vận động'], 0, 'Vòng tuần hoàn nước.'),
    Q('Nước sạch cần để?', ['Uống, nấu ăn, sinh hoạt', 'Tưới hoa thôi', 'Chỉ rửa xe', 'Chỉ tắm'], 0, 'Nhiều mục đích.'),
    Q('Cách tiết kiệm nước?', ['Khoá vòi khi không dùng, tái sử dụng nước rửa rau', 'Mở vòi cả ngày', 'Để nước chảy tự do', 'Dùng nhiều nước'], 0, 'Hành vi tiết kiệm nước.'),
    Q('Bệnh từ nước bẩn?', ['Tiêu chảy, đau bụng, dịch tả', 'Cao hơn', 'Khoẻ hơn', 'Hết bệnh'], 0, 'Nước bẩn gây nhiều bệnh.'),
    Q('Làm sạch nước có thể bằng?', ['Đun sôi, lọc, dùng máy lọc', 'Khuấy', 'Để bụi rơi', 'Không cần'], 0, 'Đun sôi diệt vi khuẩn.'),
  ]),

  M(33, 'Không khí — sự cháy', [
    Q('Không khí gồm chủ yếu?', ['Nitơ và oxi', 'Cacbon', 'Hidro', 'Bụi'], 0, 'Khí quyển ~ 78% N₂, 21% O₂.'),
    Q('Khí cần cho sự cháy?', ['Oxi', 'Nitơ', 'CO₂', 'Hidro'], 0, 'Cháy cần oxi.'),
    Q('Khí cần cho hô hấp?', ['Oxi', 'CO₂', 'Nitơ', 'Hơi nước'], 0, 'Hít vào lấy oxi, thở ra CO₂.'),
    Q('Khi đậy kín ngọn nến, nến?', ['Tắt vì hết oxi', 'Sáng hơn', 'Cháy mãi', 'Nổ'], 0, 'Hết oxi → nến tắt.'),
    Q('Khói lửa thải ra?', ['CO₂, hơi nước, bụi', 'Oxi', 'Nước sạch', 'Đường'], 0, 'Sản phẩm cháy.'),
    Q('Khi gặp cháy nhỏ, nên?', ['Dùng nước, chăn ướt, bình chữa cháy', 'Bỏ chạy', 'Đứng nhìn', 'Quạt thêm'], 0, 'Dập tắt sớm trước khi lan.'),
  ]),

  M(34, 'Ôn tập cuối cấp — Sinh vật & Môi trường', [
    Q('Cây xanh có vai trò?', ['Lọc khí, cung cấp oxi, làm thực phẩm', 'Không vai trò', 'Có hại', 'Chỉ làm đẹp'], 0, 'Cây quan trọng cho sự sống.'),
    Q('Động vật có ích?', ['Bò sữa, gà, ong', 'Muỗi, chuột phá hoại', 'Sâu phá hoa màu', 'Côn trùng phá nhà'], 0, 'Có lợi cho con người.'),
    Q('Bảo vệ động vật hoang dã giúp?', ['Cân bằng sinh thái', 'Không quan trọng', 'Có hại', 'Lãng phí'], 0, 'Đa dạng sinh học.'),
    Q('Hành vi đúng?', ['Không xả rác bừa, tiết kiệm nước, trồng cây', 'Vứt rác xuống sông', 'Phá rừng', 'Đốt rác'], 0, 'Bảo vệ môi trường.'),
    Q('Trẻ em có thể bảo vệ môi trường bằng?', ['Phân loại rác, tiết kiệm điện, nói "không" với túi ni-lông', 'Không làm gì', 'Đốt giấy', 'Phá đồ'], 0, 'Hành động nhỏ thiết thực.'),
    Q('Trồng cây gây rừng là?', ['Hành động bảo vệ môi trường', 'Lãng phí', 'Vô ích', 'Có hại'], 0, 'Rừng đem lại lợi ích lớn.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp Khoa học 5', [
    Q('Cơ thể sinh ra do?', ['Cha và mẹ', 'Cây', 'Đất', 'Mây'], 0, 'Sinh sản hữu tính.'),
    Q('Năng lượng sạch?', ['Mặt trời, gió, nước', 'Than', 'Dầu mỏ', 'Khí đốt'], 0, 'Năng lượng tái tạo.'),
    Q('Vật dẫn điện?', ['Kim loại', 'Nhựa', 'Cao su', 'Gỗ khô'], 0, 'Kim loại dẫn điện.'),
    Q('Hỗn hợp đồng nhất là?', ['Dung dịch', 'Cát + nước', 'Sỏi + cát', 'Đá + nước'], 0, 'Dung dịch — đồng nhất.'),
    Q('Thú con được nuôi bằng?', ['Sữa mẹ', 'Cỏ', 'Lá', 'Hạt'], 0, 'Thú có vú: sữa mẹ.'),
    Q('Bảo vệ môi trường cần?', ['Mọi người chung tay', 'Một mình chính phủ', 'Chỉ trẻ em', 'Chỉ người lớn'], 0, 'Trách nhiệm chung.'),
  ]),
];

export const P5KH_SCENARIOS = indexBy(P5KH_WEEKS);
