// ============================================================
// Lớp 3 · TỰ NHIÊN & XÃ HỘI — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018: Gia đình · Trường học · Cộng đồng địa phương
// → Thực vật · Động vật · Cơ thể người · Trái Đất – Bầu trời.
// Mở rộng và nâng cao hơn lớp 2 (có hệ tuần hoàn / tiêu hoá cơ bản,
// phương hướng, an toàn điện – lửa – giao thông).
// ID prefix: "P3TNXH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3TNXH', 'tnxh', n, title, qs, opts);

export const P3TNXH_WEEKS = [
  // ──────────────── HK1 — GIA ĐÌNH · TRƯỜNG HỌC · CỘNG ĐỒNG ────────────────
  M(1, 'Họ hàng nội – ngoại', [
    Q('Anh trai của bố em gọi là?', ['Bác (trai)', 'Cậu', 'Chú', 'Dượng'], 0, 'Anh ruột của bố thường gọi là bác (trai).'),
    Q('Em trai của bố em gọi là?', ['Bác', 'Chú', 'Cậu', 'Dượng'], 1, 'Em trai bố gọi là chú.'),
    Q('Em trai của mẹ em gọi là?', ['Chú', 'Bác', 'Cậu', 'Anh'], 2, 'Em trai mẹ gọi là cậu.'),
    Q('Em gái của mẹ em gọi là?', ['Cô', 'Dì', 'Bác gái', 'Mợ'], 1, 'Em gái mẹ gọi là dì.'),
    Q('Bố và mẹ của bố em là?', ['Ông bà nội', 'Ông bà ngoại', 'Bác', 'Cô chú'], 0, 'Bố mẹ của bố = ông bà nội.'),
    Q('Bố và mẹ của mẹ em là?', ['Ông bà nội', 'Ông bà ngoại', 'Cô dì', 'Bác'], 1, 'Bố mẹ của mẹ = ông bà ngoại.'),
  ]),

  M(2, 'Công việc nhà & vai trò các thành viên', [
    Q('Việc nào học sinh lớp 3 có thể làm để giúp gia đình?', ['Quét nhà, gấp quần áo', 'Sửa điện', 'Nấu ăn bằng bếp gas một mình', 'Lái xe máy'], 0, 'Việc nhẹ, an toàn, phù hợp lứa tuổi.'),
    Q('Vai trò chính của bố mẹ trong gia đình là?', ['Làm việc kiếm sống, chăm sóc con cái', 'Chỉ chơi với con', 'Không làm gì', 'Chỉ xem TV'], 0, 'Bố mẹ là trụ cột về kinh tế và nuôi dạy con.'),
    Q('Khi mẹ nấu ăn, em có thể?', ['Phụ nhặt rau, dọn bàn', 'Đứng gần bếp lửa', 'Chạy nhảy quanh bếp', 'Nghịch dao'], 0, 'Phụ việc nhẹ, tránh khu vực nguy hiểm.'),
    Q('Việc nhà nên được chia sẻ giữa?', ['Tất cả thành viên', 'Chỉ mẹ', 'Chỉ con gái', 'Chỉ con trai'], 0, 'Mọi người cùng chia sẻ công việc gia đình.'),
    Q('Sau khi ăn xong, em nên làm gì?', ['Mang bát của mình ra bồn rửa', 'Để nguyên đó', 'Đi chơi ngay', 'Quát mẹ rửa'], 0, 'Tự dọn bát đũa của mình.'),
    Q('Một gia đình hạnh phúc cần?', ['Yêu thương, tôn trọng, chia sẻ', 'Cãi vã thường xuyên', 'Thật giàu', 'Đông người'], 0, 'Tình yêu thương quan trọng nhất.'),
  ]),

  M(3, 'Phòng tránh hoả hoạn ở nhà', [
    Q('Khi đun nấu xong, người lớn cần làm gì?', ['Khoá van gas, tắt bếp', 'Để nguyên đó', 'Mở nắp nồi', 'Để lửa cháy nhỏ'], 0, 'Khoá gas / tắt bếp tránh rò rỉ.'),
    Q('Khi thấy mùi gas trong nhà, em phải?', ['Mở cửa sổ, không bật công tắc điện, báo người lớn', 'Bật quạt cho thoáng', 'Bật bếp xem', 'Đốt nến để khử mùi'], 0, 'Bật công tắc có tia lửa → nổ. Mở cửa cho thoát khí.'),
    Q('Khi quần áo bị cháy, em nên?', ['Dừng – nằm xuống – lăn để dập lửa', 'Chạy thật nhanh', 'Cởi áo ném đi và chạy', 'Hét thật to và đứng yên'], 0, 'Stop – Drop – Roll: nguyên tắc khi áo cháy.'),
    Q('Số điện thoại cứu hoả tại Việt Nam là?', ['113', '114', '115', '116'], 1, '114 = cứu hoả; 113 công an; 115 cấp cứu.'),
    Q('Khi có khói lớn trong phòng, em nên?', ['Cúi thấp người, bò ra ngoài', 'Đứng thẳng, chạy nhanh', 'Trốn vào tủ', 'Mở quạt thật lớn'], 0, 'Khói nóng bay lên trên → bò thấp để có không khí sạch.'),
    Q('Diêm, bật lửa, nến trong nhà em nên?', ['Để xa tầm tay trẻ em', 'Đặt trên bàn ăn', 'Cầm chơi cho vui', 'Đốt thử nhiều lần'], 0, 'Cất xa trẻ nhỏ để tránh hoả hoạn.'),
  ]),

  M(4, 'An toàn điện trong nhà', [
    Q('Khi tay ướt, em có nên chạm vào ổ điện không?', ['Có, không sao', 'Không, rất nguy hiểm', 'Tuỳ ý', 'Chỉ chạm 1 lần'], 1, 'Nước dẫn điện → dễ bị giật.'),
    Q('Khi thấy dây điện bị hở, em phải?', ['Tránh xa và báo người lớn', 'Sờ thử cho biết', 'Quấn lại bằng tay', 'Dùng kéo cắt'], 0, 'Tránh xa, người lớn xử lý.'),
    Q('Khi có người bị điện giật, việc đầu tiên cần làm là?', ['Ngắt cầu dao điện', 'Lao vào kéo người ra ngay', 'Tạt nước vào người đó', 'Hét lớn rồi bỏ chạy'], 0, 'Ngắt nguồn điện trước, rồi mới cấp cứu.'),
    Q('Ổ điện nên đặt ở đâu?', ['Cao, ngoài tầm tay trẻ nhỏ', 'Sát mặt đất', 'Trong bồn nước', 'Giữa lối đi'], 0, 'Tránh trẻ nhỏ chọc tay vào.'),
    Q('Cắm quá nhiều thiết bị vào một ổ điện có thể gây?', ['Quá tải, chập cháy', 'Tiết kiệm điện', 'Sạch hơn', 'Mát hơn'], 0, 'Quá tải → nóng → cháy.'),
    Q('Khi không dùng thiết bị điện, em nên?', ['Rút phích cắm', 'Để cắm cả ngày', 'Đập vỡ phích', 'Đổ nước vào'], 0, 'Rút phích để tiết kiệm và an toàn.'),
  ]),

  M(5, 'Trường học và các phòng chức năng', [
    Q('Phòng nào dành cho học sinh đọc và mượn sách?', ['Phòng y tế', 'Thư viện', 'Phòng bảo vệ', 'Nhà vệ sinh'], 1, 'Thư viện cho mượn sách, đọc sách.'),
    Q('Khi bị sốt, đau bụng ở trường, em đến đâu?', ['Phòng y tế', 'Thư viện', 'Sân thể dục', 'Phòng họp'], 0, 'Phòng y tế chăm sóc khi đau ốm.'),
    Q('Phòng học môn Tin học có gì đặc biệt?', ['Có nhiều máy tính', 'Có giường ngủ', 'Có bể bơi', 'Có bếp ăn'], 0, 'Phòng tin có máy tính cho học sinh.'),
    Q('Sân trường dùng để?', ['Chào cờ, tập thể dục, vui chơi', 'Nấu ăn', 'Trồng lúa', 'Để xe khách'], 0, 'Sân dùng cho hoạt động ngoài trời.'),
    Q('Phòng giáo dục nghệ thuật (nhạc/mỹ thuật) để?', ['Học hát, học vẽ', 'Học toán', 'Nấu ăn', 'Khám bệnh'], 0, 'Phòng nhạc – mỹ thuật phục vụ học nghệ thuật.'),
    Q('Khi vào thư viện, em cần?', ['Giữ trật tự, không ăn uống', 'Nói thật to', 'Chạy nhảy', 'Vẽ vào sách'], 0, 'Thư viện cần yên tĩnh và giữ sách sạch.'),
  ]),

  M(6, 'Vệ sinh trường lớp', [
    Q('Khi thấy rác trong sân trường, em nên?', ['Nhặt bỏ vào thùng rác', 'Đá rác chỗ khác', 'Bỏ mặc', 'Vứt thêm rác'], 0, 'Mỗi học sinh giữ sạch trường.'),
    Q('Rác thải nên được phân loại để?', ['Tái chế, bảo vệ môi trường', 'Đẹp mắt', 'Cho vui', 'Bán được nhiều tiền'], 0, 'Phân loại rác giúp tái chế và giảm ô nhiễm.'),
    Q('Khi đi vệ sinh xong, em phải?', ['Xả nước và rửa tay sạch', 'Đi luôn', 'Tạt nước lung tung', 'Vẽ lên tường'], 0, 'Vệ sinh cá nhân và giữ sạch nhà vệ sinh.'),
    Q('Lớp học sạch giúp em?', ['Học tập tốt, khoẻ mạnh', 'Bị bệnh nhiều hơn', 'Mất tập trung', 'Buồn ngủ'], 0, 'Môi trường sạch sẽ giúp học tốt.'),
    Q('Trực nhật lớp là?', ['Việc của riêng cô giáo', 'Việc thay phiên của học sinh trong lớp', 'Việc của lao công', 'Không cần làm'], 1, 'Học sinh thay phiên trực nhật.'),
    Q('Khi thấy bạn vứt rác bừa bãi, em nên?', ['Nhắc bạn bỏ rác đúng nơi', 'Làm theo bạn', 'Cười nhạo bạn', 'Mách phụ huynh ngay'], 0, 'Nhắc nhở nhẹ nhàng, giúp bạn sửa.'),
  ]),

  M(7, 'An toàn trong trường học', [
    Q('Khi chạy trên cầu thang, em nên?', ['Đi bộ, bám tay vịn', 'Chạy thật nhanh', 'Trượt cầu thang', 'Nhảy 3 bậc một lúc'], 0, 'Đi đứng đàng hoàng để tránh ngã.'),
    Q('Khi chơi trên sân trường, em KHÔNG nên?', ['Xô đẩy, đùa nghịch quá sức', 'Chơi nhẹ nhàng', 'Cùng chơi với bạn', 'Chia lượt với bạn'], 0, 'Tránh đùa nghịch gây tai nạn.'),
    Q('Nếu bị ngã chảy máu nhẹ ở trường, em nên?', ['Đến phòng y tế', 'Tự lấy giẻ lau', 'Bỏ qua', 'Chạy về nhà ngay'], 0, 'Phòng y tế xử lý vết thương.'),
    Q('Khi đi học, em mang gì bên người?', ['Sách vở, đồ dùng học tập', 'Diêm, bật lửa', 'Dao kéo nhọn', 'Pháo'], 0, 'Chỉ mang đồ học, tuyệt đối không mang vật nguy hiểm.'),
    Q('Khi gặp người lạ vào trường, em nên?', ['Báo bảo vệ hoặc thầy cô', 'Đi theo người lạ', 'Nhận quà rồi đi', 'Cho người đó số điện thoại'], 0, 'Báo người lớn trong trường.'),
    Q('Vật dụng sắc nhọn (dao, kéo nhọn) ở lớp:', ['Tuyệt đối không đem theo', 'Đem khoe bạn', 'Mang ra sân chơi', 'Dùng để đùa giỡn'], 0, 'Cấm mang vật sắc nhọn nguy hiểm.'),
  ]),

  M(8, 'Cộng đồng địa phương', [
    Q('Cộng đồng dân cư nơi em ở thường được tổ chức theo?', ['Thôn / xóm / tổ dân phố', 'Lớp học', 'Đội bóng', 'Quán ăn'], 0, 'Đơn vị dân cư nhỏ nhất là thôn / tổ dân phố.'),
    Q('Người đứng đầu thôn / tổ dân phố thường gọi là?', ['Trưởng thôn / tổ trưởng', 'Bác sĩ', 'Hiệu trưởng', 'Cảnh sát'], 0, 'Trưởng thôn / tổ trưởng do dân bầu / cử.'),
    Q('Em là một thành viên của?', ['Gia đình, lớp học và cộng đồng', 'Chỉ gia đình', 'Chỉ lớp học', 'Không thuộc nơi nào'], 0, 'Mỗi người thuộc nhiều cộng đồng khác nhau.'),
    Q('Một cộng đồng văn minh có đặc điểm?', ['Sạch sẽ, an toàn, mọi người yêu thương nhau', 'Bẩn thỉu', 'Cãi vã', 'Trộm cắp'], 0, 'Cộng đồng tốt = an toàn + đoàn kết.'),
    Q('Hành động nào góp phần xây dựng cộng đồng?', ['Giữ vệ sinh chung, giúp đỡ hàng xóm', 'Vứt rác bừa bãi', 'Phá cây xanh', 'Viết bậy lên tường'], 0, 'Hành động nhỏ tích cực xây cộng đồng.'),
    Q('Khi gặp người lớn trong khu phố, em nên?', ['Chào hỏi lễ phép', 'Phớt lờ', 'Trêu chọc', 'Trốn đi'], 0, 'Lễ phép tạo thiện cảm với người lớn.'),
  ]),

  M(9, 'Chợ và siêu thị', [
    Q('Chợ là nơi?', ['Mua bán nhiều loại hàng tươi sống', 'Khám bệnh', 'Dạy học', 'Để xe'], 0, 'Chợ là nơi mua bán hàng hoá.'),
    Q('Siêu thị có đặc điểm?', ['Hàng sắp xếp gọn trên kệ, có quầy thu ngân', 'Hàng bày dưới đất', 'Chỉ bán 1 loại đồ', 'Không có người bán'], 0, 'Siêu thị tự chọn, thanh toán tại quầy.'),
    Q('Khi đi chợ / siêu thị cùng bố mẹ, em nên?', ['Đi cạnh bố mẹ, không tự ý chạy', 'Chạy lung tung', 'Đi một mình về', 'Mở các gói hàng'], 0, 'An toàn và tránh đi lạc.'),
    Q('Khi mua hàng, em cần?', ['Trả đúng tiền và nhận hoá đơn', 'Lấy không trả tiền', 'Đòi giảm rất rẻ', 'Đập phá hàng'], 0, 'Văn minh thương mại.'),
    Q('Trước khi mua thực phẩm, em nên xem?', ['Hạn sử dụng (date)', 'Màu nhãn cho đẹp', 'Bao bì có lấp lánh không', 'Có hình hoạt hình không'], 0, 'Hạn sử dụng đảm bảo an toàn.'),
    Q('Nhận tiền thừa, em nên?', ['Đếm lại và cảm ơn', 'Bỏ túi không nói', 'Đòi thêm', 'Vứt đi'], 0, 'Đếm lại và cảm ơn lịch sự.'),
  ]),

  M(10, 'Cơ quan công cộng địa phương', [
    Q('Uỷ ban Nhân dân (UBND) xã / phường là cơ quan?', ['Quản lý hành chính địa phương', 'Khám bệnh', 'Dạy học', 'Bán hàng'], 0, 'UBND lo việc hành chính của xã / phường.'),
    Q('Khi cần làm giấy khai sinh, gia đình em đến?', ['UBND xã / phường', 'Bưu điện', 'Siêu thị', 'Trạm xăng'], 0, 'UBND cấp giấy khai sinh.'),
    Q('Công viên là nơi?', ['Nghỉ ngơi, vui chơi, hít thở không khí trong lành', 'Nấu ăn', 'Ngủ qua đêm', 'Đốt rác'], 0, 'Công viên phục vụ cộng đồng.'),
    Q('Nhà văn hoá thôn / phường để?', ['Họp dân, sinh hoạt cộng đồng', 'Bán hàng tạp hoá', 'Để xe khách', 'Ở thuê'], 0, 'Nơi sinh hoạt văn hoá chung.'),
    Q('Khi đến cơ quan công cộng, em nên?', ['Giữ trật tự, lịch sự', 'Chạy nhảy hét to', 'Tự ý mở tủ', 'Xả rác'], 0, 'Văn minh nơi công cộng.'),
    Q('Cảnh sát khu vực có nhiệm vụ?', ['Giữ gìn an ninh trật tự ở địa phương', 'Khám bệnh', 'Dạy học', 'Bán rau'], 0, 'Công an khu vực giữ an ninh.'),
  ]),

  M(11, 'Bệnh viện và trạm y tế', [
    Q('Khi bị ốm nhẹ, em đến đâu khám trước?', ['Trạm y tế xã / phường', 'Bệnh viện trung ương', 'Bưu điện', 'Trường học'], 0, 'Trạm y tế khám ban đầu, gần dân.'),
    Q('Khi bệnh nặng cần đến?', ['Bệnh viện tuyến trên', 'Siêu thị', 'Trạm xăng', 'Chợ'], 0, 'Bệnh viện có chuyên khoa sâu hơn.'),
    Q('Người khám bệnh là?', ['Bác sĩ', 'Tài xế', 'Đầu bếp', 'Phi công'], 0, 'Bác sĩ trực tiếp khám và điều trị.'),
    Q('Tiêm phòng vắc-xin giúp em?', ['Phòng tránh nhiều bệnh nguy hiểm', 'Lớn nhanh tức thì', 'Bay được', 'Không cần ăn'], 0, 'Vắc-xin tạo miễn dịch chủ động.'),
    Q('Số điện thoại cấp cứu y tế là?', ['113', '114', '115', '119'], 2, '115 = cấp cứu y tế.'),
    Q('Khi gặp bác sĩ, em nên?', ['Lễ phép, hợp tác', 'Cắn bác sĩ', 'Khóc lóc ầm ĩ', 'Chạy ra ngoài'], 0, 'Hợp tác để được khám tốt.'),
  ]),

  M(12, 'An toàn giao thông – đèn tín hiệu', [
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Đi', 'Dừng lại', 'Chuẩn bị đi', 'Quay đầu'], 1, 'Đèn đỏ = dừng lại.'),
    Q('Đèn giao thông màu xanh nghĩa là?', ['Dừng lại', 'Được đi', 'Chuẩn bị dừng', 'Quay xe'], 1, 'Đèn xanh = được đi.'),
    Q('Đèn giao thông màu vàng nghĩa là?', ['Đi nhanh hơn', 'Đi chậm lại, chuẩn bị dừng', 'Quay đầu', 'Bóp còi'], 1, 'Đèn vàng = chuẩn bị dừng.'),
    Q('Khi qua đường có vạch kẻ trắng, em nên?', ['Đi đúng vạch', 'Đi giữa lòng đường', 'Chạy băng qua', 'Nhắm mắt qua'], 0, 'Vạch kẻ = đường dành cho người đi bộ.'),
    Q('Người đi bộ phải đi ở đâu?', ['Vỉa hè', 'Giữa làn xe', 'Lòng đường', 'Dải phân cách'], 0, 'Vỉa hè là nơi an toàn cho người đi bộ.'),
    Q('Trước khi qua đường, em phải?', ['Nhìn trái – nhìn phải, không có xe mới qua', 'Vừa qua vừa nghe nhạc', 'Nhắm mắt qua', 'Chạy thật nhanh'], 0, 'Quan sát kỹ trước khi qua.'),
  ]),

  M(13, 'An toàn khi ngồi xe', [
    Q('Khi ngồi sau xe máy, em phải?', ['Đội mũ bảo hiểm cài quai chắc chắn', 'Đứng trên xe', 'Thả tay đùa', 'Quay mặt ra sau'], 0, 'Mũ bảo hiểm bảo vệ đầu khi tai nạn.'),
    Q('Khi đi ô tô, em nên?', ['Thắt dây an toàn', 'Mở cửa khi xe chạy', 'Thò đầu ra ngoài', 'Đứng giữa ghế'], 0, 'Dây an toàn giảm chấn thương.'),
    Q('Trẻ nhỏ ngồi trên xe ô tô nên ngồi ở?', ['Ghế sau, có ghế phụ trợ phù hợp', 'Ghế lái', 'Lòng tài xế', 'Cốp xe'], 0, 'Ghế sau an toàn nhất cho trẻ.'),
    Q('Khi xe đang chạy, em KHÔNG nên?', ['Mở cửa, thò tay ra ngoài', 'Ngồi yên', 'Trò chuyện nhỏ', 'Nhìn ra ngoài'], 0, 'Rất nguy hiểm khi thò ra ngoài.'),
    Q('Khi xuống xe buýt / ô tô, em phải?', ['Đợi xe dừng hẳn rồi mới xuống', 'Nhảy xuống khi xe còn chạy', 'Mở cửa khi xe chạy', 'Đẩy người khác xuống trước'], 0, 'Đợi xe dừng để tránh ngã.'),
    Q('Khi đi xe đạp, em cần?', ['Đi đúng làn, đội mũ bảo hiểm', 'Đi ngược chiều', 'Buông cả hai tay', 'Vừa đi vừa nghe điện thoại'], 0, 'Đi đúng luật và bảo vệ bản thân.'),
  ]),

  M(14, 'Phòng tránh đuối nước', [
    Q('Nơi nào dễ xảy ra đuối nước với trẻ em?', ['Ao, hồ, sông, biển không có người lớn', 'Trên giường', 'Ở thư viện', 'Trên ô tô'], 0, 'Nơi có nước sâu là nguy cơ chính.'),
    Q('Trẻ em đi tắm sông, biển phải?', ['Có người lớn đi cùng và biết bơi', 'Đi một mình', 'Đi vào chỗ sâu nhất', 'Nhảy từ cao xuống'], 0, 'Người lớn giám sát + biết bơi.'),
    Q('Trước khi xuống nước bơi, em nên?', ['Khởi động làm nóng cơ thể', 'Ăn no rồi xuống ngay', 'Uống nước lạnh', 'Nhảy thật cao'], 0, 'Khởi động tránh chuột rút.'),
    Q('Khi thấy bạn rơi xuống nước, em nên?', ['Hô to gọi người lớn, ném phao / cành cây cho bạn bám', 'Tự nhảy xuống cứu bạn', 'Chạy đi chỗ khác', 'Cười nhạo'], 0, 'Trẻ em không tự nhảy xuống cứu — gọi người lớn.'),
    Q('Học bơi giúp em?', ['Tự bảo vệ mình khi rơi xuống nước', 'Bay được', 'Lớn nhanh', 'Hết phải tắm'], 0, 'Bơi là kỹ năng sinh tồn quan trọng.'),
    Q('Khi đi qua sông suối có dòng chảy mạnh, em cần?', ['Tránh xa, đi cùng người lớn', 'Lội qua một mình', 'Nhảy qua', 'Bơi qua thử'], 0, 'Dòng chảy mạnh rất nguy hiểm.'),
  ]),

  M(15, 'Phòng tránh xâm hại trẻ em', [
    Q('Quy tắc 5 ngón tay – em có thể ôm hôn?', ['Bố mẹ, ông bà ruột', 'Bất kỳ ai', 'Người lạ trên mạng', 'Người mới gặp lần đầu'], 0, 'Chỉ người thân ruột thịt mới ôm hôn.'),
    Q('Khi người lạ cho quà, em nên?', ['Từ chối lễ phép và nói với bố mẹ', 'Nhận và đi theo', 'Ăn ngay tại chỗ', 'Cho bạn cùng ăn'], 0, 'Không nhận quà người lạ.'),
    Q('Khi ai đó chạm vào "vùng kín" (vùng đồ bơi che) của em, em phải?', ['Hét "Không", chạy đến chỗ an toàn, kể với người lớn tin cậy', 'Im lặng vì sợ', 'Tự dằn vặt', 'Giấu kín'], 0, 'Quy tắc "Hét – Chạy – Kể".'),
    Q('Người lớn nói "đây là bí mật giữa cô/chú và con, không được kể ai":', ['Đó là dấu hiệu xấu, phải kể với bố mẹ', 'Phải giữ bí mật', 'Là chuyện vui', 'Im lặng cho an toàn'], 0, 'Không có bí mật "không kể ai" giữa người lớn và trẻ em.'),
    Q('Khi đi đâu, em phải?', ['Xin phép và báo bố mẹ biết đi đâu, với ai', 'Tự đi không cần nói', 'Lén ra khỏi nhà', 'Để bố mẹ tự tìm'], 0, 'Luôn cho bố mẹ biết hành trình.'),
    Q('Tổng đài bảo vệ trẻ em quốc gia ở Việt Nam là?', ['111', '113', '114', '115'], 0, '111 = tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  M(16, 'Sử dụng tiền hợp lý', [
    Q('Tiền là?', ['Phương tiện để mua – bán hàng hoá', 'Đồ chơi', 'Giấy bỏ đi', 'Thức ăn'], 0, 'Tiền giúp trao đổi hàng hoá.'),
    Q('Khi bố mẹ cho tiền tiêu vặt, em nên?', ['Tiết kiệm, chỉ tiêu khi cần', 'Tiêu hết ngay', 'Đem khoe bạn', 'Đốt cho vui'], 0, 'Tiết kiệm là thói quen tốt.'),
    Q('Để tiết kiệm tiền, em có thể?', ['Bỏ heo đất / nuôi heo đất', 'Mua kẹo mỗi ngày', 'Vứt tiền', 'Cho bạn hết'], 0, 'Heo đất giúp tích luỹ dần dần.'),
    Q('Tiền giả là?', ['Tiền không có giá trị, không nên dùng', 'Tiền thật', 'Đồ chơi an toàn', 'Tiền giảm giá'], 0, 'Dùng tiền giả là vi phạm pháp luật.'),
    Q('Khi nhặt được tiền rơi, em nên?', ['Báo người lớn để trả lại người mất', 'Lấy luôn', 'Vứt đi', 'Đốt đi'], 0, 'Trả lại tiền cho người đánh mất.'),
    Q('Trước khi mua đồ chơi, em nên?', ['Suy nghĩ có thực sự cần không', 'Mua bất cứ thứ gì thấy', 'Đòi mua bằng được', 'Khóc lóc đòi mẹ'], 0, 'Tiêu dùng có suy nghĩ.'),
  ]),

  M(17, 'Sinh hoạt cuối tuần & ngày lễ', [
    Q('Quốc khánh Việt Nam là ngày?', ['2/9', '30/4', '20/11', '1/6'], 0, 'Quốc khánh 2/9/1945.'),
    Q('Ngày Nhà giáo Việt Nam là?', ['20/11', '8/3', '1/6', '20/10'], 0, '20/11 là ngày Nhà giáo Việt Nam.'),
    Q('Ngày Quốc tế Thiếu nhi là?', ['1/6', '20/11', '8/3', '2/9'], 0, '1/6 là ngày Quốc tế Thiếu nhi.'),
    Q('Tết Trung thu vào ngày?', ['Rằm tháng Tám âm lịch', 'Mùng 1 Tết', 'Rằm tháng Giêng', '20/11'], 0, 'Trung thu = 15/8 âm lịch.'),
    Q('Cuối tuần em thường?', ['Nghỉ ngơi, sinh hoạt cùng gia đình', 'Đi học cả ngày', 'Ngủ liên tục 24h', 'Chơi game cả đêm'], 0, 'Cuối tuần là thời gian cho gia đình.'),
    Q('Ngày 30/4 là ngày?', ['Giải phóng miền Nam, thống nhất đất nước', 'Quốc khánh', 'Tết Thiếu nhi', 'Nhà giáo Việt Nam'], 0, '30/4/1975 thống nhất đất nước.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('Bố mẹ của mẹ là?', ['Ông bà nội', 'Ông bà ngoại', 'Cô dì', 'Bác'], 1, 'Bố mẹ của mẹ = ông bà ngoại.'),
    Q('Số điện thoại cứu hoả là?', ['113', '114', '115', '116'], 1, '114 = cứu hoả.'),
    Q('Số điện thoại cấp cứu y tế là?', ['113', '114', '115', '111'], 2, '115 = cấp cứu.'),
    Q('Tổng đài bảo vệ trẻ em là?', ['111', '112', '113', '115'], 0, '111 = tổng đài trẻ em.'),
    Q('Đèn giao thông màu đỏ là?', ['Đi', 'Dừng', 'Chuẩn bị đi', 'Quay đầu'], 1, 'Đèn đỏ = dừng.'),
    Q('Khi đi sông, hồ, biển, em cần?', ['Có người lớn đi cùng', 'Đi một mình', 'Nhảy xuống chỗ sâu', 'Tắm khi trời tối'], 0, 'An toàn dưới nước là quan trọng.'),
    Q('Hành vi đúng khi nhặt được tiền là?', ['Trả lại người mất', 'Giấu đi', 'Vứt đi', 'Tiêu hết ngay'], 0, 'Trung thực là đức tính tốt.'),
    Q('UBND xã / phường là nơi?', ['Quản lý hành chính địa phương', 'Khám bệnh', 'Dạy học', 'Bán hàng'], 0, 'UBND lo việc hành chính.'),
    Q('Quy tắc khi áo bị cháy là?', ['Dừng – nằm – lăn', 'Chạy thật nhanh', 'Hét và đứng yên', 'Nhảy xuống nước nóng'], 0, 'Stop – Drop – Roll.'),
    Q('20/11 là ngày?', ['Quốc khánh', 'Nhà giáo Việt Nam', 'Thiếu nhi', 'Tết Trung thu'], 1, '20/11 = Nhà giáo Việt Nam.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — THỰC VẬT · ĐỘNG VẬT · CƠ THỂ NGƯỜI · TRÁI ĐẤT ────────────────
  M(19, 'Cấu tạo cây xanh: rễ – thân – lá – hoa – quả', [
    Q('Cây xanh có những bộ phận chính nào?', ['Rễ, thân, lá, hoa, quả', 'Rễ, đất, gió', 'Hoa, quả, đá', 'Lá, hạt, không khí'], 0, '5 bộ phận chính của cây có hoa.'),
    Q('Bộ phận nằm dưới đất, hút nước và bám đất là?', ['Rễ', 'Thân', 'Lá', 'Hoa'], 0, 'Rễ hút nước và muối khoáng.'),
    Q('Bộ phận nâng đỡ cây, vận chuyển nước lên lá là?', ['Rễ', 'Thân', 'Lá', 'Quả'], 1, 'Thân nâng đỡ và vận chuyển nước.'),
    Q('Bộ phận quang hợp tạo ra chất dinh dưỡng là?', ['Rễ', 'Lá', 'Quả', 'Hoa'], 1, 'Lá quang hợp nhờ ánh sáng Mặt Trời.'),
    Q('Hoa của cây thường có chức năng?', ['Sinh sản, tạo ra quả', 'Hút nước', 'Vận chuyển', 'Thở'], 0, 'Hoa thụ phấn → tạo quả – hạt.'),
    Q('Bên trong quả thường có?', ['Hạt', 'Đá', 'Lá', 'Rễ'], 0, 'Hạt giúp cây sinh sản đời sau.'),
  ]),

  M(20, 'Các loại rễ và thân cây', [
    Q('Cây có rễ cọc là?', ['Cây cam, cây ổi, cây mít', 'Cây lúa, cây ngô', 'Rêu, nấm', 'Cây dương xỉ'], 0, 'Rễ cọc có rễ chính to ăn sâu.'),
    Q('Cây có rễ chùm là?', ['Cây lúa, cây ngô, cây hành', 'Cây mít, cây xoài', 'Cây bàng', 'Cây lim'], 0, 'Rễ chùm gồm nhiều rễ con bằng nhau.'),
    Q('Cây thân gỗ là?', ['Thân cứng, to, cao', 'Thân mềm, nhỏ', 'Không có thân', 'Sống dưới nước'], 0, 'Cây gỗ: bàng, xoan, lim, mít.'),
    Q('Cây thân thảo là?', ['Thân mềm, vòng đời ngắn (rau, lúa, cỏ)', 'Thân cứng to', 'Thân bằng đá', 'Không có thân'], 0, 'Thân thảo mềm, dễ gãy.'),
    Q('Cây thân leo (dây leo) là?', ['Mướp, bí, trầu không', 'Lúa, ngô', 'Cây bàng', 'Cây mít'], 0, 'Thân leo cần giàn để bám.'),
    Q('Củ khoai lang, củ cà rốt thực chất là?', ['Rễ phình to chứa chất dự trữ', 'Lá biến đổi', 'Hoa', 'Hạt'], 0, 'Khoai lang, cà rốt là rễ củ.'),
  ]),

  M(21, 'Cây cần gì để sống?', [
    Q('Cây cần những yếu tố nào để sống?', ['Nước, ánh sáng, không khí, đất', 'Lửa, đá, kim loại', 'Bóng tối hoàn toàn', 'Không cần gì'], 0, '4 yếu tố cơ bản cho cây sống.'),
    Q('Cây quang hợp cần?', ['Ánh sáng Mặt Trời', 'Bóng tối', 'Lửa', 'Tuyết'], 0, 'Quang hợp cần ánh sáng + nước + CO2.'),
    Q('Nếu thiếu nước, cây sẽ?', ['Héo úa và chết', 'Lớn nhanh hơn', 'Đổi màu xanh đậm', 'Không sao'], 0, 'Nước là yếu tố sống còn của cây.'),
    Q('Cây quang hợp thải ra khí gì có lợi cho người?', ['Khí ôxy', 'Khí cacbonic', 'Khí độc', 'Hơi nước nóng'], 0, 'Cây thải O2 → người và động vật thở.'),
    Q('Trồng cây xanh giúp?', ['Làm sạch không khí, tạo bóng mát', 'Gây ô nhiễm', 'Làm nóng Trái Đất', 'Làm bẩn đất'], 0, 'Cây xanh có nhiều lợi ích.'),
    Q('Để bảo vệ cây xanh, em nên?', ['Không bẻ cành, ngắt hoa, chăm tưới cây', 'Bẻ cành chơi', 'Đốt lá', 'Cào gốc'], 0, 'Bảo vệ cây xanh = bảo vệ môi trường.'),
  ]),

  M(22, 'Phân loại động vật: côn trùng – chim – cá – thú', [
    Q('Côn trùng có đặc điểm?', ['Có 6 chân, cơ thể chia 3 phần (đầu, ngực, bụng)', 'Có 4 chân, có lông', 'Có vảy, có vây', 'Có cánh và lông vũ'], 0, 'Côn trùng: ong, bướm, kiến, châu chấu.'),
    Q('Chim có đặc điểm chung là?', ['Có lông vũ, có cánh, đẻ trứng', 'Có vảy, đẻ con', 'Có vây, sống dưới nước', 'Không có chân'], 0, 'Chim: bồ câu, sẻ, đại bàng.'),
    Q('Cá có đặc điểm chung là?', ['Có vảy, có vây, sống dưới nước, thở bằng mang', 'Có lông, đẻ con', 'Có cánh, biết bay', 'Có 4 chân'], 0, 'Cá: cá chép, cá rô, cá mè.'),
    Q('Thú (động vật có vú) có đặc điểm?', ['Có lông mao, đẻ con, nuôi con bằng sữa mẹ', 'Có vảy, đẻ trứng', 'Có vây, không có chân', 'Có cánh biết bay'], 0, 'Thú: chó, mèo, bò, voi, người.'),
    Q('Con vật nào là côn trùng?', ['Con bướm', 'Con chim', 'Con cá', 'Con chó'], 0, 'Bướm có 6 chân, 2 cặp cánh → côn trùng.'),
    Q('Loài nào KHÔNG phải động vật có vú?', ['Cá voi', 'Chó', 'Bò', 'Cá chép'], 3, 'Cá chép là cá; cá voi tuy sống dưới nước nhưng là thú có vú.'),
  ]),

  M(23, 'Ích lợi và tác hại của động vật', [
    Q('Loài vật nào có ích cho nông nghiệp (giúp thụ phấn)?', ['Con ong', 'Con muỗi', 'Con gián', 'Con chuột phá lúa'], 0, 'Ong hút mật và thụ phấn cho cây.'),
    Q('Loài vật nào truyền bệnh sốt rét, sốt xuất huyết?', ['Muỗi', 'Chim', 'Cá', 'Bò'], 0, 'Muỗi đốt truyền bệnh sốt xuất huyết, sốt rét.'),
    Q('Để phòng tránh muỗi, em nên?', ['Ngủ trong màn (mùng), diệt bọ gậy', 'Mở cửa cho thoáng cả đêm', 'Để nước đọng quanh nhà', 'Bật đèn vàng'], 0, 'Ngủ màn + dọn nơi đọng nước (nơi muỗi đẻ).'),
    Q('Bò cho ta?', ['Sữa, thịt, sức kéo', 'Lông vũ', 'Mật ngọt', 'Tơ tằm'], 0, 'Bò đa năng trong nông nghiệp.'),
    Q('Loài vật nào cho tơ làm lụa?', ['Con tằm', 'Con bò', 'Con voi', 'Con cá'], 0, 'Tằm nhả tơ → dệt lụa.'),
    Q('Để bảo vệ động vật hoang dã, em KHÔNG nên?', ['Mua sừng tê, ngà voi, thịt thú rừng', 'Không phá rừng', 'Báo kiểm lâm khi thấy săn trộm', 'Tuyên truyền bảo vệ'], 0, 'Mua bán động vật hoang dã là vi phạm pháp luật.'),
  ]),

  M(24, 'Môi trường sống của động vật', [
    Q('Cá sống ở môi trường?', ['Dưới nước (sông, hồ, biển)', 'Trên cây', 'Trong sa mạc khô', 'Trên trời'], 0, 'Cá sống dưới nước.'),
    Q('Chim sống ở môi trường?', ['Trên cây, trên không', 'Dưới biển sâu', 'Trong lòng đất', 'Dưới bùn'], 0, 'Chim làm tổ và bay trên không.'),
    Q('Lạc đà sống ở môi trường?', ['Sa mạc', 'Biển sâu', 'Vùng cực', 'Rừng rậm Việt Nam'], 0, 'Lạc đà thích nghi nóng và khô.'),
    Q('Gấu bắc cực sống ở?', ['Vùng cực lạnh giá', 'Sa mạc nóng', 'Rừng nhiệt đới', 'Đáy biển sâu'], 0, 'Gấu bắc cực sống ở Bắc Cực.'),
    Q('Đại bàng làm tổ ở?', ['Trên núi cao, vách đá', 'Dưới nước', 'Trong hang đất', 'Trong tủ quần áo'], 0, 'Đại bàng thường làm tổ trên cao.'),
    Q('Mất rừng làm cho?', ['Nhiều loài động vật mất nơi ở', 'Nhiều thú lớn hơn', 'Đất tốt hơn', 'Trời mát hơn'], 0, 'Phá rừng → mất môi trường sống của thú.'),
  ]),

  M(25, 'Cơ thể người – các cơ quan chính', [
    Q('Cơ quan giúp em thở là?', ['Phổi', 'Tim', 'Dạ dày', 'Gan'], 0, 'Phổi là cơ quan hô hấp.'),
    Q('Cơ quan bơm máu đi nuôi cơ thể là?', ['Tim', 'Phổi', 'Dạ dày', 'Não'], 0, 'Tim co bóp bơm máu.'),
    Q('Cơ quan tiêu hoá chính là?', ['Dạ dày và ruột', 'Phổi', 'Tim', 'Mắt'], 0, 'Dạ dày + ruột tiêu hoá thức ăn.'),
    Q('Cơ quan điều khiển mọi hoạt động (suy nghĩ, vận động) là?', ['Não', 'Phổi', 'Tim', 'Dạ dày'], 0, 'Não là trung tâm điều khiển.'),
    Q('Cơ quan lọc nước tiểu (chất thải) trong máu là?', ['Thận', 'Phổi', 'Tim', 'Gan'], 0, 'Thận lọc máu → tạo nước tiểu.'),
    Q('Để các cơ quan khoẻ mạnh, em cần?', ['Ăn uống đủ chất, ngủ đủ, vận động', 'Nhịn ăn', 'Thức khuya', 'Ngồi cả ngày'], 0, 'Lối sống lành mạnh giúp cơ thể khoẻ.'),
  ]),

  M(26, 'Hệ tuần hoàn cơ bản (tim – mạch máu)', [
    Q('Tim nằm ở?', ['Lồng ngực, lệch trái', 'Bụng dưới', 'Trong đầu', 'Ngoài da'], 0, 'Tim nằm trong lồng ngực, lệch trái.'),
    Q('Tim hoạt động bằng cách?', ['Co bóp liên tục, bơm máu', 'Đứng yên', 'Quay tròn', 'Phát điện'], 0, 'Tim co bóp đều bơm máu khắp cơ thể.'),
    Q('Máu được vận chuyển trong cơ thể qua?', ['Các mạch máu (động mạch, tĩnh mạch)', 'Xương', 'Da', 'Cơ bắp'], 0, 'Mạch máu là đường ống dẫn máu.'),
    Q('Máu mang gì đi nuôi cơ thể?', ['Ôxy và chất dinh dưỡng', 'Chỉ có nước', 'Đá', 'Khí cacbonic'], 0, 'Máu vận chuyển O2 và dinh dưỡng.'),
    Q('Khi em chạy nhanh, tim sẽ?', ['Đập nhanh hơn', 'Đập chậm hơn', 'Ngừng đập', 'Không thay đổi'], 0, 'Vận động → tim đập nhanh hơn.'),
    Q('Để tim khoẻ, em nên?', ['Tập thể dục, ăn uống lành mạnh', 'Hút thuốc lá', 'Ăn nhiều mỡ động vật', 'Ngồi yên cả ngày'], 0, 'Vận động + ăn uống lành mạnh tốt cho tim.'),
  ]),

  M(27, 'Hệ tiêu hoá cơ bản (miệng – dạ dày – ruột)', [
    Q('Đường đi của thức ăn trong cơ thể là?', ['Miệng → thực quản → dạ dày → ruột non → ruột già', 'Mũi → phổi → ruột', 'Tai → mắt → miệng', 'Da → tay → bụng'], 0, 'Tiêu hoá đi từ miệng tới ruột già.'),
    Q('Răng có chức năng?', ['Nhai và nghiền thức ăn', 'Tiêu hoá hết thức ăn', 'Hút máu', 'Thở'], 0, 'Răng nhai nhỏ thức ăn.'),
    Q('Dạ dày có chức năng?', ['Co bóp, tiêu hoá thức ăn', 'Lọc máu', 'Thở', 'Nhìn'], 0, 'Dạ dày co bóp + tiết dịch vị.'),
    Q('Ruột non có chức năng chính là?', ['Hấp thụ chất dinh dưỡng vào máu', 'Bơm máu', 'Hít thở', 'Suy nghĩ'], 0, 'Ruột non hấp thụ dinh dưỡng.'),
    Q('Để tiêu hoá tốt, em nên?', ['Ăn chậm, nhai kỹ, ăn đúng giờ', 'Nuốt vội', 'Vừa ăn vừa chạy', 'Bỏ bữa'], 0, 'Nhai kỹ giảm gánh nặng cho dạ dày.'),
    Q('Để phòng bệnh đường tiêu hoá, em nên?', ['Ăn chín, uống sôi, rửa tay trước khi ăn', 'Uống nước lã', 'Ăn đồ ôi thiu', 'Không rửa tay'], 0, 'Ăn sạch – uống sạch – tay sạch.'),
  ]),

  M(28, 'Ăn uống cân đối – tháp dinh dưỡng', [
    Q('Một bữa ăn cân đối thường có?', ['Cơm + thịt/cá + rau + canh + trái cây', 'Chỉ bánh kẹo', 'Chỉ nước ngọt', 'Chỉ thịt'], 0, 'Cân đối các nhóm dinh dưỡng.'),
    Q('Nhóm thức ăn cung cấp nhiều bột đường (năng lượng) là?', ['Cơm, bánh mì, khoai', 'Thịt, cá', 'Rau, trái cây', 'Sữa'], 0, 'Bột đường là nhóm năng lượng chính.'),
    Q('Thịt, cá, trứng, đậu cung cấp nhiều?', ['Chất đạm', 'Chất béo', 'Vitamin', 'Nước'], 0, 'Đạm giúp cơ thể lớn lên.'),
    Q('Rau và trái cây cung cấp nhiều?', ['Vitamin và chất xơ', 'Dầu mỡ', 'Đường tinh luyện', 'Muối'], 0, 'Rau quả giàu vitamin và xơ.'),
    Q('Nên uống bao nhiêu nước mỗi ngày (trẻ tiểu học)?', ['Khoảng 1.2 – 1.5 lít', '0.1 lít', '5 lít', '0 lít'], 0, 'Trẻ tiểu học cần ~1.2 – 1.5 lít/ngày.'),
    Q('Để khoẻ mạnh, em KHÔNG nên?', ['Ăn quá nhiều bánh kẹo, nước ngọt', 'Ăn rau xanh', 'Uống đủ nước', 'Vận động'], 0, 'Ăn nhiều ngọt → sâu răng, béo phì.'),
  ]),

  M(29, 'Vệ sinh cá nhân & phòng bệnh', [
    Q('Em nên đánh răng?', ['Ít nhất 2 lần/ngày (sáng – tối)', '1 tuần 1 lần', 'Khi đau răng', 'Không cần'], 0, 'Sáng dậy và trước khi ngủ.'),
    Q('Em cần tắm rửa?', ['Hàng ngày, sau khi vận động ra mồ hôi', 'Một tuần 1 lần', 'Khi nhớ ra', 'Không cần tắm'], 0, 'Tắm sạch tránh bệnh ngoài da.'),
    Q('Em cần rửa tay khi?', ['Trước khi ăn, sau khi đi vệ sinh, sau khi chơi', 'Cả tuần 1 lần', 'Khi tay đen kịt mới rửa', 'Không cần'], 0, 'Tay sạch giảm vi khuẩn xâm nhập.'),
    Q('Mặc quần áo bẩn lâu ngày có thể gây?', ['Ngứa, viêm da, hôi', 'Đẹp hơn', 'Khoẻ hơn', 'Không sao'], 0, 'Quần áo bẩn = ổ vi khuẩn.'),
    Q('Khi bị ho, hắt hơi, em nên?', ['Che miệng – mũi bằng khăn / khuỷu tay', 'Hắt thẳng vào bạn', 'Không che gì', 'Hét lớn'], 0, 'Tránh lây bệnh cho người khác.'),
    Q('Tiêm phòng vắc-xin giúp em?', ['Phòng được nhiều bệnh nguy hiểm', 'Lớn nhanh tức thì', 'Bay được', 'Không cần ăn'], 0, 'Vắc-xin tạo miễn dịch chủ động.'),
  ]),

  M(30, 'Trái Đất – hình cầu, các châu lục, đại dương', [
    Q('Trái Đất có hình?', ['Cầu (gần tròn)', 'Vuông', 'Phẳng', 'Tam giác'], 0, 'Trái Đất hình cầu, hơi dẹt ở 2 cực.'),
    Q('Trái Đất quay quanh?', ['Mặt Trời', 'Mặt Trăng', 'Sao Hoả', 'Sao Bắc Đẩu'], 0, 'Trái Đất quay quanh Mặt Trời.'),
    Q('Phần lớn bề mặt Trái Đất là?', ['Nước (biển và đại dương)', 'Đất', 'Băng', 'Lửa'], 0, 'Khoảng 70% bề mặt là nước.'),
    Q('Việt Nam thuộc châu nào?', ['Châu Á', 'Châu Âu', 'Châu Phi', 'Châu Mỹ'], 0, 'Việt Nam ở Đông Nam Á – châu Á.'),
    Q('Đại dương lớn nhất Trái Đất là?', ['Thái Bình Dương', 'Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'], 0, 'Thái Bình Dương lớn nhất.'),
    Q('Quả địa cầu là?', ['Mô hình thu nhỏ của Trái Đất', 'Quả bóng', 'Quả táo to', 'Mặt Trời'], 0, 'Địa cầu mô phỏng Trái Đất.'),
  ]),

  M(31, 'Mặt Trời, Mặt Trăng & các mùa', [
    Q('Mặt Trời mọc ở hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 0, 'Mặt Trời mọc hướng Đông.'),
    Q('Mặt Trời lặn ở hướng?', ['Đông', 'Tây', 'Nam', 'Bắc'], 1, 'Mặt Trời lặn hướng Tây.'),
    Q('Mặt Trăng quay quanh?', ['Trái Đất', 'Mặt Trời', 'Sao Hoả', 'Sao Bắc Đẩu'], 0, 'Mặt Trăng là vệ tinh của Trái Đất.'),
    Q('Một năm thường có mấy mùa ở miền Bắc Việt Nam?', ['4 mùa: xuân – hạ – thu – đông', '2 mùa: mưa – khô', '1 mùa', '12 mùa'], 0, 'Miền Bắc có 4 mùa rõ rệt.'),
    Q('Miền Nam Việt Nam có?', ['2 mùa: mưa và khô', '4 mùa rõ rệt', 'Chỉ mùa lạnh', 'Toàn mùa tuyết'], 0, 'Miền Nam có mùa mưa (5–11) và khô (12–4).'),
    Q('Nguyên nhân có mùa là do?', ['Trái Đất nghiêng và quay quanh Mặt Trời', 'Mặt Trăng to', 'Trời quay', 'Mặt Trời di chuyển quanh Trái Đất'], 0, 'Trục Trái Đất nghiêng + quỹ đạo → có mùa.'),
  ]),

  M(32, 'Phương hướng & la bàn', [
    Q('4 phương hướng chính là?', ['Đông – Tây – Nam – Bắc', 'Trên – Dưới – Trái – Phải', 'Trước – Sau', 'Đỏ – Vàng – Xanh – Tím'], 0, '4 hướng chính.'),
    Q('Đối diện hướng Đông là?', ['Tây', 'Nam', 'Bắc', 'Trên'], 0, 'Đông ↔ Tây đối diện.'),
    Q('Đối diện hướng Nam là?', ['Bắc', 'Đông', 'Tây', 'Trên'], 0, 'Nam ↔ Bắc đối diện.'),
    Q('Dụng cụ giúp xác định phương hướng là?', ['La bàn', 'Thước kẻ', 'Đồng hồ', 'Bút chì'], 0, 'La bàn = kim nam châm chỉ Bắc.'),
    Q('Kim la bàn thường chỉ về hướng?', ['Bắc', 'Nam', 'Đông', 'Tây'], 0, 'Kim nam châm chỉ Bắc.'),
    Q('Khi không có la bàn, em có thể dùng gì để xác định hướng?', ['Vị trí Mặt Trời (mọc Đông, lặn Tây)', 'Cây cối ngẫu nhiên', 'Tiếng chim', 'Mưa'], 0, 'Mặt Trời mọc – lặn là chỉ dẫn tự nhiên.'),
  ]),

  M(33, 'Không khí và nước', [
    Q('Không khí có ở đâu?', ['Khắp xung quanh chúng ta', 'Chỉ trong phổi', 'Chỉ trên trời cao', 'Trong bình kín'], 0, 'Không khí bao quanh Trái Đất.'),
    Q('Không khí gồm các thành phần chính nào?', ['Khí ôxy, ni-tơ, hơi nước, cacbonic', 'Chỉ ôxy', 'Toàn cát bụi', 'Toàn nước'], 0, 'Hỗn hợp khí — chủ yếu nitơ và ôxy.'),
    Q('Khí giúp người và động vật thở là?', ['Khí ôxy', 'Khí ni-tơ', 'Khí cacbonic', 'Khí mêtan'], 0, 'Ôxy duy trì hô hấp.'),
    Q('Nước có vai trò gì với sự sống?', ['Cần cho mọi sinh vật', 'Không quan trọng', 'Chỉ cần cho cá', 'Chỉ để tắm'], 0, 'Nước = sự sống.'),
    Q('Để tiết kiệm nước, em nên?', ['Khoá vòi khi không dùng', 'Mở vòi cả ngày', 'Tắm rất lâu', 'Rửa xe bằng vòi xối'], 0, 'Tiết kiệm nước = bảo vệ môi trường.'),
    Q('Để giữ không khí trong lành, em nên?', ['Trồng cây, không đốt rác', 'Đốt rác bừa bãi', 'Hút thuốc', 'Xả khói nhiều'], 0, 'Trồng cây + giảm khí thải.'),
  ]),

  M(34, 'Đất và bảo vệ môi trường', [
    Q('Đất có vai trò gì với cây xanh?', ['Cung cấp nước và chất dinh dưỡng, giữ cây đứng', 'Làm khô cây', 'Đốt cây', 'Không liên quan'], 0, 'Đất nuôi cây và giữ cây đứng vững.'),
    Q('Đất bị ô nhiễm có thể do?', ['Rác thải, hoá chất, thuốc trừ sâu', 'Trồng cây', 'Tưới nước', 'Quét nhà'], 0, 'Rác và hoá chất gây ô nhiễm đất.'),
    Q('Để bảo vệ môi trường đất, em nên?', ['Phân loại rác, không vứt rác bừa bãi', 'Đổ dầu mỡ ra vườn', 'Đốt nhựa', 'Chôn pin xuống vườn'], 0, 'Bảo vệ đất từ những việc nhỏ.'),
    Q('Việc nào KHÔNG bảo vệ môi trường?', ['Săn bắt động vật hoang dã', 'Trồng cây', 'Tiết kiệm điện nước', 'Phân loại rác'], 0, 'Săn bắt thú hoang là phá hoại tự nhiên.'),
    Q('Rác hữu cơ (vỏ rau, thức ăn thừa) có thể?', ['Ủ làm phân bón cho cây', 'Tan trong nước uống', 'Đốt làm than đá', 'Bán giá cao'], 0, 'Rác hữu cơ ủ phân vi sinh.'),
    Q('Khẩu hiệu môi trường 3R là?', ['Reduce – Reuse – Recycle (Giảm – Tái dùng – Tái chế)', 'Run – Read – Rest', 'Red – Rose – River', 'Rice – Rain – River'], 0, '3R giúp giảm rác thải.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('5 bộ phận chính của cây có hoa là?', ['Rễ – thân – lá – hoa – quả', 'Hoa – đá – đất – nước – gió', 'Lá – mây – mưa – nắng – đêm', 'Cây – cỏ – hoa – lá – đất'], 0, 'Cây có hoa có 5 bộ phận chính.'),
    Q('Cá thở bằng?', ['Mang', 'Phổi', 'Da', 'Cánh'], 0, 'Cá có mang để lấy ôxy từ nước.'),
    Q('Cơ quan bơm máu đi nuôi cơ thể là?', ['Tim', 'Phổi', 'Dạ dày', 'Não'], 0, 'Tim co bóp bơm máu.'),
    Q('Đường tiêu hoá thức ăn bắt đầu từ?', ['Miệng', 'Dạ dày', 'Ruột non', 'Phổi'], 0, 'Miệng nhai → thực quản → dạ dày.'),
    Q('Trái Đất có hình?', ['Cầu', 'Vuông', 'Phẳng', 'Tam giác'], 0, 'Trái Đất hình cầu.'),
    Q('Mặt Trời mọc – lặn ở hướng?', ['Mọc Đông – lặn Tây', 'Mọc Tây – lặn Đông', 'Mọc Bắc – lặn Nam', 'Cố định một chỗ'], 0, 'Đông mọc – Tây lặn.'),
    Q('Để bảo vệ môi trường, em nên?', ['Trồng cây, không xả rác bừa bãi', 'Đốt rác bừa', 'Phá rừng', 'Hút thuốc'], 0, 'Hành động nhỏ – ý nghĩa lớn.'),
    Q('Tổng đài bảo vệ trẻ em là?', ['111', '113', '114', '115'], 0, '111 = tổng đài trẻ em quốc gia.'),
    Q('Để tránh đuối nước, trẻ em phải?', ['Có người lớn đi cùng khi xuống nước', 'Đi một mình ra sông', 'Nhảy vào chỗ sâu', 'Tắm khi trời tối'], 0, 'An toàn nước = có người lớn giám sát.'),
    Q('Để tim mạch khoẻ, em nên?', ['Tập thể dục, ăn uống lành mạnh', 'Ăn nhiều mỡ', 'Thức khuya', 'Ngồi cả ngày'], 0, 'Vận động + dinh dưỡng tốt cho tim.'),
  ], { difficulty: 3 }),
];

export const P3TNXH_SCENARIOS = indexBy(P3TNXH_WEEKS);
