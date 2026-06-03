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
    Q('Anh trai của bố em gọi là?', ['Bác (trai)', 'Cậu (em trai của mẹ)', 'Chú (em trai của bố)', 'Dượng (chồng của cô hoặc dì)'], 0, 'Anh ruột của bố thường gọi là bác (trai).'),
    Q('Em trai của bố em gọi là?', ['Cậu (em trai của mẹ)', 'Bác (anh trai của bố)', 'Chú', 'Dượng (chồng của dì)'], 2, 'Em trai bố gọi là chú.'),
    Q('Em trai của mẹ em gọi là?', ['Cậu', 'Bác (anh trai của bố)', 'Chú (em trai của bố)', 'Anh (con cùng bố mẹ, lớn hơn em)'], 0, 'Em trai mẹ gọi là cậu.'),
    Q('Em gái của mẹ em gọi là?', ['Bác gái', 'Mợ (vợ của cậu)', 'Dì', 'Cô (em gái của bố)'], 2, 'Em gái mẹ gọi là dì.'),
    Q('Bố và mẹ của bố em là?', ['Ông bà nội', 'Bác (anh trai của bố)', 'Ông bà ngoại', 'Cô chú'], 0, 'Bố mẹ của bố = ông bà nội.'),
    Q('Bố và mẹ của mẹ em là?', ['Cô dì (em gái của bố và của mẹ)', 'Bác (anh trai của bố hoặc của mẹ)', 'Ông bà nội', 'Ông bà ngoại'], 3, 'Bố mẹ của mẹ = ông bà ngoại.'),
  ]),

  M(2, 'Công việc nhà & vai trò các thành viên', [
    Q('Việc nào học sinh lớp 3 có thể làm để giúp gia đình?', ['Sửa điện', 'Quét nhà, gấp quần áo', 'Lái xe máy', 'Nấu ăn bằng bếp gas một mình'], 1, 'Việc nhẹ, an toàn, phù hợp lứa tuổi.'),
    Q('Vai trò chính của bố mẹ trong gia đình là?', ['Làm việc kiếm sống, chăm sóc con cái', 'Chỉ chơi với con', 'Chỉ xem TV', 'Chỉ ngủ cả ngày, không quan tâm con'], 0, 'Bố mẹ là trụ cột về kinh tế và nuôi dạy con.'),
    Q('Khi mẹ nấu ăn, em có thể?', ['Đứng gần bếp lửa', 'Chạy nhảy quanh bếp', 'Phụ nhặt rau, dọn bàn', 'Nghịch dao'], 2, 'Phụ việc nhẹ, tránh khu vực nguy hiểm.'),
    Q('Việc nhà nên được chia sẻ giữa?', ['Chỉ con gái', 'Chỉ mẹ', 'Chỉ con trai', 'Tất cả thành viên'], 3, 'Mọi người cùng chia sẻ công việc gia đình.'),
    Q('Sau khi ăn xong, em nên làm gì?', ['Mang bát của mình ra bồn rửa', 'Quát mẹ rửa', 'Để nguyên đó', 'Đi chơi ngay'], 0, 'Tự dọn bát đũa của mình.'),
    Q('Một gia đình hạnh phúc cần?', ['Cãi vã thường xuyên', 'Yêu thương, tôn trọng, chia sẻ', 'Đông người', 'Thật giàu'], 1, 'Tình yêu thương quan trọng nhất.'),
  ]),

  M(3, 'Phòng tránh hoả hoạn ở nhà', [
    Q('Khi đun nấu xong, người lớn cần làm gì?', ['Mở nắp nồi', 'Để nguyên đó', 'Để lửa cháy nhỏ', 'Khoá van gas, tắt bếp'], 3, 'Khoá gas / tắt bếp tránh rò rỉ.'),
    Q('Khi thấy mùi gas trong nhà, em phải?', ['Đốt nến để khử mùi', 'Bật quạt cho thoáng', 'Mở cửa sổ, không bật công tắc điện, báo người lớn', 'Bật bếp xem'], 2, 'Bật công tắc có tia lửa → nổ. Mở cửa cho thoát khí.'),
    Q('Khi quần áo bị cháy, em nên?', ['Cởi áo ném đi và chạy', 'Hét thật to và đứng yên', 'Dừng – nằm xuống – lăn để dập lửa', 'Chạy thật nhanh'], 2, 'Stop – Drop – Roll: nguyên tắc khi áo cháy.'),
    Q('Số điện thoại cứu hoả tại Việt Nam là?', ['113', '116', '115', '114'], 3, '114 = cứu hoả; 113 công an; 115 cấp cứu.'),
    Q('Khi có khói lớn trong phòng, em nên?', ['Đứng thẳng, chạy nhanh', 'Cúi thấp người, bò ra ngoài', 'Trốn vào tủ', 'Mở quạt thật lớn'], 1, 'Khói nóng bay lên trên → bò thấp để có không khí sạch.'),
    Q('Diêm, bật lửa, nến trong nhà em nên?', ['Đặt trên bàn ăn', 'Đốt thử nhiều lần', 'Cầm chơi cho vui', 'Để xa tầm tay trẻ em'], 3, 'Cất xa trẻ nhỏ để tránh hoả hoạn.'),
  ]),

  M(4, 'An toàn điện trong nhà', [
    Q('Khi tay ướt, em có nên chạm vào ổ điện không?', ['Không, rất nguy hiểm', 'Chỉ chạm 1 lần', 'Có, không sao', 'Tuỳ ý chạm nếu ổ điện khô'], 0, 'Nước dẫn điện → dễ bị giật.'),
    Q('Khi thấy dây điện bị hở, em phải?', ['Dùng kéo cắt', 'Quấn lại bằng tay', 'Tránh xa và báo người lớn', 'Sờ thử cho biết'], 2, 'Tránh xa, người lớn xử lý.'),
    Q('Khi có người bị điện giật, việc đầu tiên cần làm là?', ['Ngắt cầu dao điện', 'Hét lớn rồi bỏ chạy', 'Lao vào kéo người ra ngay', 'Tạt nước vào người đó'], 0, 'Ngắt nguồn điện trước, rồi mới cấp cứu.'),
    Q('Ổ điện nên đặt ở đâu?', ['Sát mặt đất', 'Giữa lối đi', 'Cao, ngoài tầm tay trẻ nhỏ', 'Trong bồn nước'], 2, 'Tránh trẻ nhỏ chọc tay vào.'),
    Q('Cắm quá nhiều thiết bị vào một ổ điện có thể gây?', ['Sạch hơn', 'Tiết kiệm điện', 'Quá tải, chập cháy', 'Mát hơn'], 2, 'Quá tải → nóng → cháy.'),
    Q('Khi không dùng thiết bị điện, em nên?', ['Rút phích cắm', 'Để cắm cả ngày', 'Đổ nước vào', 'Đập vỡ phích'], 0, 'Rút phích để tiết kiệm và an toàn.'),
  ]),

  M(5, 'Trường học và các phòng chức năng', [
    Q('Phòng nào dành cho học sinh đọc và mượn sách?', ['Phòng y tế', 'Nhà vệ sinh', 'Phòng bảo vệ', 'Thư viện'], 3, 'Thư viện cho mượn sách, đọc sách.'),
    Q('Khi bị sốt, đau bụng ở trường, em đến đâu?', ['Phòng y tế', 'Sân thể dục', 'Phòng họp', 'Thư viện'], 0, 'Phòng y tế chăm sóc khi đau ốm.'),
    Q('Phòng học môn Tin học có gì đặc biệt?', ['Có bếp ăn', 'Có bể bơi', 'Có giường ngủ', 'Có nhiều máy tính'], 3, 'Phòng tin có máy tính cho học sinh.'),
    Q('Sân trường dùng để?', ['Trồng lúa', 'Chào cờ, tập thể dục, vui chơi', 'Nấu ăn', 'Để xe khách'], 1, 'Sân dùng cho hoạt động ngoài trời.'),
    Q('Phòng giáo dục nghệ thuật (nhạc/mỹ thuật) để?', ['Nấu ăn', 'Học hát, học vẽ', 'Khám bệnh', 'Học toán'], 1, 'Phòng nhạc – mỹ thuật phục vụ học nghệ thuật.'),
    Q('Khi vào thư viện, em cần?', ['Nói thật to', 'Vẽ vào sách', 'Chạy nhảy', 'Giữ trật tự, không ăn uống'], 3, 'Thư viện cần yên tĩnh và giữ sách sạch.'),
  ]),

  M(6, 'Vệ sinh trường lớp', [
    Q('Khi thấy rác trong sân trường, em nên?', ['Nhặt bỏ vào thùng rác', 'Vứt thêm rác', 'Bỏ mặc', 'Đá rác chỗ khác'], 0, 'Mỗi học sinh giữ sạch trường.'),
    Q('Rác thải nên được phân loại để?', ['Tái chế, bảo vệ môi trường', 'Đẹp mắt', 'Cho vui', 'Bán được nhiều tiền'], 0, 'Phân loại rác giúp tái chế và giảm ô nhiễm.'),
    Q('Khi đi vệ sinh xong, em phải?', ['Đi luôn', 'Tạt nước lung tung', 'Vẽ lên tường', 'Xả nước và rửa tay sạch'], 3, 'Vệ sinh cá nhân và giữ sạch nhà vệ sinh.'),
    Q('Lớp học sạch giúp em?', ['Mất tập trung', 'Học tập tốt, khoẻ mạnh', 'Bị bệnh nhiều hơn', 'Buồn ngủ'], 1, 'Môi trường sạch sẽ giúp học tốt.'),
    Q('Trực nhật lớp là?', ['Việc của lao công', 'Việc thay phiên của học sinh trong lớp', 'Không cần làm', 'Việc của riêng cô giáo'], 1, 'Học sinh thay phiên trực nhật.'),
    Q('Khi thấy bạn vứt rác bừa bãi, em nên?', ['Nhắc bạn bỏ rác đúng nơi', 'Mách phụ huynh ngay', 'Cười nhạo bạn', 'Làm theo bạn'], 0, 'Nhắc nhở nhẹ nhàng, giúp bạn sửa.'),
  ]),

  M(7, 'An toàn trong trường học', [
    Q('Khi chạy trên cầu thang, em nên?', ['Chạy thật nhanh', 'Nhảy 3 bậc một lúc', 'Đi bộ, bám tay vịn', 'Trượt cầu thang'], 2, 'Đi đứng đàng hoàng để tránh ngã.'),
    Q('Khi chơi trên sân trường, em KHÔNG nên?', ['Chơi nhẹ nhàng', 'Chia lượt với bạn', 'Xô đẩy, đùa nghịch quá sức', 'Cùng chơi với bạn'], 2, 'Tránh đùa nghịch gây tai nạn.'),
    Q('Nếu bị ngã chảy máu nhẹ ở trường, em nên?', ['Đến phòng y tế', 'Tự lấy giẻ lau', 'Chạy về nhà ngay', 'Bỏ qua'], 0, 'Phòng y tế xử lý vết thương.'),
    Q('Khi đi học, em mang gì bên người?', ['Dao kéo nhọn', 'Sách vở, đồ dùng học tập', 'Pháo nổ để chơi cùng bạn', 'Diêm, bật lửa'], 1, 'Chỉ mang đồ học, tuyệt đối không mang vật nguy hiểm.'),
    Q('Khi gặp người lạ vào trường, em nên?', ['Đi theo người lạ', 'Cho người đó số điện thoại', 'Báo bảo vệ hoặc thầy cô', 'Nhận quà rồi đi'], 2, 'Báo người lớn trong trường.'),
    Q('Vật dụng sắc nhọn (dao, kéo nhọn) ở lớp:', ['Đem khoe bạn', 'Dùng để đùa giỡn', 'Tuyệt đối không đem theo', 'Mang ra sân chơi'], 2, 'Cấm mang vật sắc nhọn nguy hiểm.'),
  ]),

  M(8, 'Cộng đồng địa phương', [
    Q('Cộng đồng dân cư nơi em ở thường được tổ chức theo?', ['Quán ăn', 'Thôn / xóm / tổ dân phố', 'Lớp học', 'Đội bóng'], 1, 'Đơn vị dân cư nhỏ nhất là thôn / tổ dân phố.'),
    Q('Người đứng đầu thôn / tổ dân phố thường gọi là?', ['Bác sĩ', 'Trưởng thôn / tổ trưởng', 'Cảnh sát', 'Hiệu trưởng'], 1, 'Trưởng thôn / tổ trưởng do dân bầu / cử.'),
    Q('Em là một thành viên của?', ['Không thuộc nơi nào', 'Chỉ gia đình', 'Chỉ lớp học', 'Gia đình, lớp học và cộng đồng'], 3, 'Mỗi người thuộc nhiều cộng đồng khác nhau.'),
    Q('Một cộng đồng văn minh có đặc điểm?', ['Cãi vã', 'Trộm cắp', 'Bẩn thỉu', 'Sạch sẽ, an toàn, mọi người yêu thương nhau'], 3, 'Cộng đồng tốt = an toàn + đoàn kết.'),
    Q('Hành động nào góp phần xây dựng cộng đồng?', ['Vứt rác bừa bãi', 'Phá cây xanh', 'Viết bậy lên tường', 'Giữ vệ sinh chung, giúp đỡ hàng xóm'], 3, 'Hành động nhỏ tích cực xây cộng đồng.'),
    Q('Khi gặp người lớn trong khu phố, em nên?', ['Phớt lờ', 'Trêu chọc', 'Chào hỏi lễ phép', 'Trốn đi'], 2, 'Lễ phép tạo thiện cảm với người lớn.'),
  ]),

  M(9, 'Chợ và siêu thị', [
    Q('Chợ là nơi?', ['Dạy học', 'Khám bệnh', 'Nơi gửi xe ô tô, xe máy', 'Mua bán nhiều loại hàng tươi sống'], 3, 'Chợ là nơi mua bán hàng hoá.'),
    Q('Siêu thị có đặc điểm?', ['Chỉ bán 1 loại đồ', 'Hàng sắp xếp gọn trên kệ, có quầy thu ngân', 'Không có người bán', 'Hàng bày dưới đất'], 1, 'Siêu thị tự chọn, thanh toán tại quầy.'),
    Q('Khi đi chợ / siêu thị cùng bố mẹ, em nên?', ['Đi một mình về', 'Đi cạnh bố mẹ, không tự ý chạy', 'Mở các gói hàng', 'Chạy lung tung'], 1, 'An toàn và tránh đi lạc.'),
    Q('Khi mua hàng, em cần?', ['Đòi giảm rất rẻ', 'Đập phá hàng', 'Lấy không trả tiền', 'Trả đúng tiền và nhận hoá đơn'], 3, 'Văn minh thương mại.'),
    Q('Trước khi mua thực phẩm, em nên xem?', ['Bao bì có lấp lánh không', 'Màu nhãn cho đẹp', 'Có hình hoạt hình không', 'Hạn sử dụng (date)'], 3, 'Hạn sử dụng đảm bảo an toàn.'),
    Q('Nhận tiền thừa, em nên?', ['Đòi thêm', 'Bỏ túi không nói', 'Vứt đi', 'Đếm lại và cảm ơn'], 3, 'Đếm lại và cảm ơn lịch sự.'),
  ]),

  M(10, 'Cơ quan công cộng địa phương', [
    Q('Uỷ ban Nhân dân (UBND) xã / phường là cơ quan?', ['Quản lý hành chính địa phương', 'Khám bệnh', 'Bán hàng', 'Dạy học'], 0, 'UBND lo việc hành chính của xã / phường.'),
    Q('Khi cần làm giấy khai sinh, gia đình em đến?', ['Siêu thị', 'UBND xã / phường', 'Bưu điện', 'Trạm xăng'], 1, 'UBND cấp giấy khai sinh.'),
    Q('Công viên là nơi?', ['Đốt rác', 'Nghỉ ngơi, vui chơi, hít thở không khí trong lành', 'Ngủ qua đêm', 'Nấu ăn'], 1, 'Công viên phục vụ cộng đồng.'),
    Q('Nhà văn hoá thôn / phường để?', ['Bán hàng tạp hoá', 'Họp dân, sinh hoạt cộng đồng', 'Ở thuê', 'Để xe khách'], 1, 'Nơi sinh hoạt văn hoá chung.'),
    Q('Khi đến cơ quan công cộng, em nên?', ['Xả rác', 'Tự ý mở tủ', 'Giữ trật tự, lịch sự', 'Chạy nhảy hét to'], 2, 'Văn minh nơi công cộng.'),
    Q('Cảnh sát khu vực có nhiệm vụ?', ['Dạy học', 'Khám bệnh', 'Giữ gìn an ninh trật tự ở địa phương', 'Bán rau'], 2, 'Công an khu vực giữ an ninh.'),
  ]),

  M(11, 'Bệnh viện và trạm y tế', [
    Q('Khi bị ốm nhẹ, em đến đâu khám trước?', ['Trường học', 'Trạm y tế xã / phường', 'Bệnh viện trung ương', 'Bưu điện'], 1, 'Trạm y tế khám ban đầu, gần dân.'),
    Q('Khi bệnh nặng cần đến?', ['Siêu thị', 'Trạm xăng', 'Bệnh viện tuyến trên', 'Nhà thuốc tây mua thuốc giảm đau'], 2, 'Bệnh viện có chuyên khoa sâu hơn.'),
    Q('Người khám bệnh là?', ['Phi công', 'Đầu bếp', 'Bác sĩ', 'Tài xế'], 2, 'Bác sĩ trực tiếp khám và điều trị.'),
    Q('Tiêm phòng vắc-xin giúp em?', ['Bay được', 'Không cần ăn', 'Phòng tránh nhiều bệnh nguy hiểm', 'Lớn nhanh tức thì'], 2, 'Vắc-xin tạo miễn dịch chủ động.'),
    Q('Số điện thoại cấp cứu y tế là?', ['115', '119', '114', '113'], 0, '115 = cấp cứu y tế.'),
    Q('Khi gặp bác sĩ, em nên?', ['Khóc lóc ầm ĩ', 'Lễ phép, hợp tác', 'Cắn bác sĩ', 'Chạy ra ngoài'], 1, 'Hợp tác để được khám tốt.'),
  ]),

  M(12, 'An toàn giao thông – đèn tín hiệu', [
    Q('Đèn giao thông màu đỏ nghĩa là?', ['Chuẩn bị đi', 'Đi nhanh qua ngã tư', 'Quay đầu', 'Dừng lại'], 3, 'Đèn đỏ = dừng lại.'),
    Q('Đèn giao thông màu xanh nghĩa là?', ['Dừng lại', 'Được đi', 'Chuẩn bị dừng', 'Quay xe'], 1, 'Đèn xanh = được đi.'),
    Q('Đèn giao thông màu vàng nghĩa là?', ['Đi chậm lại, chuẩn bị dừng', 'Quay đầu', 'Bóp còi', 'Đi nhanh hơn'], 0, 'Đèn vàng = chuẩn bị dừng.'),
    Q('Khi qua đường có vạch kẻ trắng, em nên?', ['Chạy băng qua', 'Nhắm mắt qua', 'Đi đúng vạch', 'Đi giữa lòng đường'], 2, 'Vạch kẻ = đường dành cho người đi bộ.'),
    Q('Người đi bộ phải đi ở đâu?', ['Giữa làn xe', 'Lòng đường', 'Vỉa hè', 'Dải phân cách'], 2, 'Vỉa hè là nơi an toàn cho người đi bộ.'),
    Q('Trước khi qua đường, em phải?', ['Chạy thật nhanh', 'Vừa qua vừa nghe nhạc', 'Nhìn trái – nhìn phải, không có xe mới qua', 'Nhắm mắt qua'], 2, 'Quan sát kỹ trước khi qua.'),
  ]),

  M(13, 'An toàn khi ngồi xe', [
    Q('Khi ngồi sau xe máy, em phải?', ['Quay mặt ra sau', 'Đứng trên xe', 'Thả tay đùa', 'Đội mũ bảo hiểm cài quai chắc chắn'], 3, 'Mũ bảo hiểm bảo vệ đầu khi tai nạn.'),
    Q('Khi đi ô tô, em nên?', ['Đứng giữa ghế', 'Thò đầu ra ngoài', 'Thắt dây an toàn', 'Mở cửa khi xe chạy'], 2, 'Dây an toàn giảm chấn thương.'),
    Q('Trẻ nhỏ ngồi trên xe ô tô nên ngồi ở?', ['Cốp xe', 'Ghế lái', 'Lòng tài xế', 'Ghế sau, có ghế phụ trợ phù hợp'], 3, 'Ghế sau an toàn nhất cho trẻ.'),
    Q('Khi xe đang chạy, em KHÔNG nên?', ['Ngồi yên', 'Nhìn ra ngoài', 'Trò chuyện nhỏ', 'Mở cửa, thò tay ra ngoài'], 3, 'Rất nguy hiểm khi thò ra ngoài.'),
    Q('Khi xuống xe buýt / ô tô, em phải?', ['Nhảy xuống khi xe còn chạy', 'Đợi xe dừng hẳn rồi mới xuống', 'Mở cửa khi xe chạy', 'Đẩy người khác xuống trước'], 1, 'Đợi xe dừng để tránh ngã.'),
    Q('Khi đi xe đạp, em cần?', ['Buông cả hai tay', 'Vừa đi vừa nghe điện thoại', 'Đi đúng làn, đội mũ bảo hiểm', 'Đi ngược chiều'], 2, 'Đi đúng luật và bảo vệ bản thân.'),
  ]),

  M(14, 'Phòng tránh đuối nước', [
    Q('Nơi nào dễ xảy ra đuối nước với trẻ em?', ['Ao, hồ, sông, biển không có người lớn', 'Ở thư viện', 'Trên giường', 'Trên ô tô'], 0, 'Nơi có nước sâu là nguy cơ chính.'),
    Q('Trẻ em đi tắm sông, biển phải?', ['Đi một mình', 'Đi vào chỗ sâu nhất', 'Nhảy từ cao xuống', 'Có người lớn đi cùng và biết bơi'], 3, 'Người lớn giám sát + biết bơi.'),
    Q('Trước khi xuống nước bơi, em nên?', ['Nhảy thật cao', 'Khởi động làm nóng cơ thể', 'Uống nước lạnh', 'Ăn no rồi xuống ngay'], 1, 'Khởi động tránh chuột rút.'),
    Q('Khi thấy bạn rơi xuống nước, em nên?', ['Chạy đi chỗ khác', 'Tự nhảy xuống cứu bạn', 'Cười nhạo', 'Hô to gọi người lớn, ném phao / cành cây cho bạn bám'], 3, 'Trẻ em không tự nhảy xuống cứu — gọi người lớn.'),
    Q('Học bơi giúp em?', ['Bay được', 'Hết phải tắm', 'Lớn nhanh', 'Tự bảo vệ mình khi rơi xuống nước'], 3, 'Bơi là kỹ năng sinh tồn quan trọng.'),
    Q('Khi đi qua sông suối có dòng chảy mạnh, em cần?', ['Tránh xa, đi cùng người lớn', 'Bơi qua thử', 'Lội qua một mình', 'Nhảy qua'], 0, 'Dòng chảy mạnh rất nguy hiểm.'),
  ]),

  M(15, 'Phòng tránh xâm hại trẻ em', [
    Q('Quy tắc 5 ngón tay – em có thể ôm hôn?', ['Bất kỳ ai', 'Bố mẹ, ông bà ruột', 'Người lạ trên mạng', 'Người mới gặp lần đầu'], 1, 'Chỉ người thân ruột thịt mới ôm hôn.'),
    Q('Khi người lạ cho quà, em nên?', ['Từ chối lễ phép và nói với bố mẹ', 'Cho bạn cùng ăn', 'Nhận và đi theo', 'Ăn ngay tại chỗ'], 0, 'Không nhận quà người lạ.'),
    Q('Khi ai đó chạm vào "vùng kín" (vùng đồ bơi che) của em, em phải?', ['Tự dằn vặt', 'Giấu kín', 'Im lặng vì sợ', 'Hét "Không", chạy đến chỗ an toàn, kể với người lớn tin cậy'], 3, 'Quy tắc "Hét – Chạy – Kể".'),
    Q('Người lớn nói "đây là bí mật giữa cô/chú và con, không được kể ai":', ['Im lặng cho an toàn', 'Đó là dấu hiệu xấu, phải kể với bố mẹ', 'Là chuyện vui', 'Phải giữ bí mật'], 1, 'Không có bí mật "không kể ai" giữa người lớn và trẻ em.'),
    Q('Khi đi đâu, em phải?', ['Xin phép và báo bố mẹ biết đi đâu, với ai', 'Để bố mẹ tự tìm', 'Tự đi không cần nói', 'Lén ra khỏi nhà'], 0, 'Luôn cho bố mẹ biết hành trình.'),
    Q('Tổng đài bảo vệ trẻ em quốc gia ở Việt Nam là?', ['111', '115', '114', '113'], 0, '111 = tổng đài quốc gia bảo vệ trẻ em.'),
  ]),

  M(16, 'Sử dụng tiền hợp lý', [
    Q('Tiền là?', ['Thức ăn', 'Đồ chơi', 'Giấy bỏ đi', 'Phương tiện để mua – bán hàng hoá'], 3, 'Tiền giúp trao đổi hàng hoá.'),
    Q('Khi bố mẹ cho tiền tiêu vặt, em nên?', ['Tiêu hết ngay', 'Đem khoe bạn', 'Đốt cho vui', 'Tiết kiệm, chỉ tiêu khi cần'], 3, 'Tiết kiệm là thói quen tốt.'),
    Q('Để tiết kiệm tiền, em có thể?', ['Mua kẹo mỗi ngày', 'Vứt tiền', 'Cho bạn hết', 'Bỏ heo đất / nuôi heo đất'], 3, 'Heo đất giúp tích luỹ dần dần.'),
    Q('Tiền giả là?', ['Tiền không có giá trị, không nên dùng', 'Đồ chơi an toàn', 'Tiền giảm giá', 'Tiền thật'], 0, 'Dùng tiền giả là vi phạm pháp luật.'),
    Q('Khi nhặt được tiền rơi, em nên?', ['Đốt đi', 'Lấy luôn', 'Vứt đi', 'Báo người lớn để trả lại người mất'], 3, 'Trả lại tiền cho người đánh mất.'),
    Q('Trước khi mua đồ chơi, em nên?', ['Khóc lóc đòi mẹ', 'Suy nghĩ có thực sự cần không', 'Đòi mua bằng được', 'Mua bất cứ thứ gì thấy'], 1, 'Tiêu dùng có suy nghĩ.'),
  ]),

  M(17, 'Sinh hoạt cuối tuần & ngày lễ', [
    Q('Quốc khánh Việt Nam là ngày?', ['30/4', '2/9', '1/6', '20/11'], 1, 'Quốc khánh 2/9/1945.'),
    Q('Ngày Nhà giáo Việt Nam là?', ['8/3', '1/6', '20/10', '20/11'], 3, '20/11 là ngày Nhà giáo Việt Nam.'),
    Q('Ngày Quốc tế Thiếu nhi là?', ['20/11', '2/9', '8/3', '1/6'], 3, '1/6 là ngày Quốc tế Thiếu nhi.'),
    Q('Tết Trung thu vào ngày?', ['20/11', 'Mùng 1 Tết', 'Rằm tháng Tám âm lịch', 'Rằm tháng Giêng'], 2, 'Trung thu = 15/8 âm lịch.'),
    Q('Cuối tuần em thường?', ['Nghỉ ngơi, sinh hoạt cùng gia đình', 'Ngủ liên tục 24h', 'Chơi game cả đêm', 'Đi học cả ngày'], 0, 'Cuối tuần là thời gian cho gia đình.'),
    Q('Ngày 30/4 là ngày?', ['Nhà giáo Việt Nam', 'Giải phóng miền Nam, thống nhất đất nước', 'Quốc khánh', 'Tết Thiếu nhi'], 1, '30/4/1975 thống nhất đất nước.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('Bố mẹ của mẹ là?', ['Bác (anh trai của bố)', 'Ông bà nội', 'Ông bà ngoại', 'Cô dì (em gái bố và em gái mẹ)'], 2, 'Bố mẹ của mẹ = ông bà ngoại.'),
    Q('Số điện thoại cứu hoả là?', ['115', '114', '113', '116'], 1, '114 = cứu hoả.'),
    Q('Số điện thoại cấp cứu y tế là?', ['115', '111', '114', '113'], 0, '115 = cấp cứu.'),
    Q('Tổng đài bảo vệ trẻ em là?', ['115', '112', '113', '111'], 3, '111 = tổng đài trẻ em.'),
    Q('Đèn giao thông màu đỏ là?', ['Đi tiếp với tốc độ chậm', 'Chuẩn bị đi', 'Dừng', 'Quay đầu'], 2, 'Đèn đỏ = dừng.'),
    Q('Khi đi sông, hồ, biển, em cần?', ['Nhảy xuống chỗ sâu', 'Tắm khi trời tối', 'Có người lớn đi cùng', 'Đi một mình'], 2, 'An toàn dưới nước là quan trọng.'),
    Q('Hành vi đúng khi nhặt được tiền là?', ['Giấu đi', 'Vứt đi', 'Tiêu hết ngay', 'Trả lại người mất'], 3, 'Trung thực là đức tính tốt.'),
    Q('UBND xã / phường là nơi?', ['Dạy học', 'Quản lý hành chính địa phương', 'Khám bệnh', 'Bán hàng'], 1, 'UBND lo việc hành chính.'),
    Q('Quy tắc khi áo bị cháy là?', ['Dừng – nằm – lăn', 'Hét và đứng yên', 'Chạy thật nhanh', 'Nhảy xuống nước nóng'], 0, 'Stop – Drop – Roll.'),
    Q('20/11 là ngày?', ['Nhà giáo Việt Nam', 'Quốc khánh', 'Tết Trung thu', 'Thiếu nhi'], 0, '20/11 = Nhà giáo Việt Nam.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 — THỰC VẬT · ĐỘNG VẬT · CƠ THỂ NGƯỜI · TRÁI ĐẤT ────────────────
  M(19, 'Cấu tạo cây xanh: rễ – thân – lá – hoa – quả', [
    Q('Cây xanh có những bộ phận chính nào?', ['Hoa, quả, đá', 'Rễ, thân, lá, hoa, quả', 'Rễ, đất, gió', 'Lá, hạt, không khí'], 1, '5 bộ phận chính của cây có hoa.'),
    Q('Bộ phận nằm dưới đất, hút nước và bám đất là?', ['Thân (nâng đỡ cây)', 'Hoa (tạo quả, hạt)', 'Lá (quang hợp tạo dinh dưỡng)', 'Rễ'], 3, 'Rễ hút nước và muối khoáng.'),
    Q('Bộ phận nâng đỡ cây, vận chuyển nước lên lá là?', ['Lá (nơi quang hợp)', 'Quả (chứa hạt)', 'Rễ (hút nước dưới đất)', 'Thân'], 3, 'Thân nâng đỡ và vận chuyển nước.'),
    Q('Bộ phận quang hợp tạo ra chất dinh dưỡng là?', ['Hoa (cơ quan sinh sản)', 'Lá', 'Rễ (hút nước và muối khoáng)', 'Quả (bảo vệ và chứa hạt)'], 1, 'Lá quang hợp nhờ ánh sáng Mặt Trời.'),
    Q('Hoa của cây thường có chức năng?', ['Sinh sản, tạo ra quả', 'Quang hợp tạo dinh dưỡng', 'Vận chuyển', 'Hút nước'], 0, 'Hoa thụ phấn → tạo quả – hạt.'),
    Q('Bên trong quả thường có?', ['Lá non mọc bên trong', 'Rễ nhỏ phát triển', 'Đá cuội nhỏ làm chắc quả', 'Hạt'], 3, 'Hạt giúp cây sinh sản đời sau.'),
  ]),

  M(20, 'Các loại rễ và thân cây', [
    Q('Cây có rễ cọc là?', ['Cây cam, cây ổi, cây mít', 'Rêu, nấm', 'Cây dương xỉ', 'Cây lúa, cây ngô'], 0, 'Rễ cọc có rễ chính to ăn sâu.'),
    Q('Cây có rễ chùm là?', ['Cây bàng', 'Cây lim', 'Cây mít, cây xoài', 'Cây lúa, cây ngô, cây hành'], 3, 'Rễ chùm gồm nhiều rễ con bằng nhau.'),
    Q('Cây thân gỗ là?', ['Thân mềm, nhỏ', 'Không có thân', 'Thân cứng, to, cao', 'Sống dưới nước'], 2, 'Cây gỗ: bàng, xoan, lim, mít.'),
    Q('Cây thân thảo là?', ['Không có thân', 'Thân mềm, vòng đời ngắn (rau, lúa, cỏ)', 'Thân bằng đá', 'Thân cứng to'], 1, 'Thân thảo mềm, dễ gãy.'),
    Q('Cây thân leo (dây leo) là?', ['Cây bàng', 'Lúa, ngô', 'Cây mít', 'Mướp, bí, trầu không'], 3, 'Thân leo cần giàn để bám.'),
    Q('Củ khoai lang, củ cà rốt thực chất là?', ['Hạt nảy mầm thành cây con', 'Hoa biến đổi tích trữ tinh bột', 'Lá biến đổi', 'Rễ phình to chứa chất dự trữ'], 3, 'Khoai lang, cà rốt là rễ củ.'),
  ]),

  M(21, 'Cây cần gì để sống?', [
    Q('Cây cần những yếu tố nào để sống?', ['Lửa, đá, kim loại', 'Không cần gì', 'Bóng tối hoàn toàn', 'Nước, ánh sáng, không khí, đất'], 3, '4 yếu tố cơ bản cho cây sống.'),
    Q('Cây quang hợp cần?', ['Lửa để sưởi ấm thân cây', 'Bóng tối', 'Tuyết phủ giúp cây tươi xanh', 'Ánh sáng Mặt Trời'], 3, 'Quang hợp cần ánh sáng + nước + CO2.'),
    Q('Nếu thiếu nước, cây sẽ?', ['Lớn nhanh hơn', 'Đổi màu xanh đậm', 'Héo úa và chết', 'Không sao'], 2, 'Nước là yếu tố sống còn của cây.'),
    Q('Cây quang hợp thải ra khí gì có lợi cho người?', ['Khí ôxy', 'Khí độc', 'Khí cacbonic', 'Hơi nước nóng'], 0, 'Cây thải O2 → người và động vật thở.'),
    Q('Trồng cây xanh giúp?', ['Làm bẩn đất', 'Làm sạch không khí, tạo bóng mát', 'Gây ô nhiễm', 'Làm nóng Trái Đất'], 1, 'Cây xanh có nhiều lợi ích.'),
    Q('Để bảo vệ cây xanh, em nên?', ['Bẻ cành chơi', 'Đốt lá', 'Không bẻ cành, ngắt hoa, chăm tưới cây', 'Cào gốc'], 2, 'Bảo vệ cây xanh = bảo vệ môi trường.'),
  ]),

  M(22, 'Phân loại động vật: côn trùng – chim – cá – thú', [
    Q('Côn trùng có đặc điểm?', ['Có 4 chân, có lông', 'Có vảy, có vây', 'Có cánh và lông vũ', 'Có 6 chân, cơ thể chia 3 phần (đầu, ngực, bụng)'], 3, 'Côn trùng: ong, bướm, kiến, châu chấu.'),
    Q('Chim có đặc điểm chung là?', ['Có vây, sống dưới nước', 'Không có chân', 'Có vảy, đẻ con', 'Có lông vũ, có cánh, đẻ trứng'], 3, 'Chim: bồ câu, sẻ, đại bàng.'),
    Q('Cá có đặc điểm chung là?', ['Có cánh, biết bay', 'Có 4 chân', 'Có vảy, có vây, sống dưới nước, thở bằng mang', 'Có lông, đẻ con'], 2, 'Cá: cá chép, cá rô, cá mè.'),
    Q('Thú (động vật có vú) có đặc điểm?', ['Có vây, không có chân', 'Có cánh biết bay', 'Có lông mao, đẻ con, nuôi con bằng sữa mẹ', 'Có vảy, đẻ trứng'], 2, 'Thú: chó, mèo, bò, voi, người.'),
    Q('Con vật nào là côn trùng?', ['Con chim', 'Con bướm', 'Con cá', 'Con chó'], 1, 'Bướm có 6 chân, 2 cặp cánh → côn trùng.'),
    Q('Loài nào KHÔNG phải động vật có vú?', ['Bò (đẻ con, cho sữa)', 'Cá chép', 'Cá voi', 'Chó (đẻ con, có lông mao)'], 1, 'Cá chép là cá; cá voi tuy sống dưới nước nhưng là thú có vú.'),
  ]),

  M(23, 'Ích lợi và tác hại của động vật', [
    Q('Loài vật nào có ích cho nông nghiệp (giúp thụ phấn)?', ['Con gián', 'Con chuột phá lúa', 'Con ong', 'Con muỗi'], 2, 'Ong hút mật và thụ phấn cho cây.'),
    Q('Loài vật nào truyền bệnh sốt rét, sốt xuất huyết?', ['Muỗi', 'Cá rô đồng sống ở ao hồ', 'Bò vàng nuôi trong chuồng', 'Chim sẻ làm tổ trên cây'], 0, 'Muỗi đốt truyền bệnh sốt xuất huyết, sốt rét.'),
    Q('Để phòng tránh muỗi, em nên?', ['Ngủ trong màn (mùng), diệt bọ gậy', 'Bật đèn vàng', 'Mở cửa cho thoáng cả đêm', 'Để nước đọng quanh nhà'], 0, 'Ngủ màn + dọn nơi đọng nước (nơi muỗi đẻ).'),
    Q('Bò cho ta?', ['Tơ tằm', 'Lông vũ', 'Mật ngọt', 'Sữa, thịt, sức kéo'], 3, 'Bò đa năng trong nông nghiệp.'),
    Q('Loài vật nào cho tơ làm lụa?', ['Con bò', 'Con tằm', 'Con voi', 'Con cá'], 1, 'Tằm nhả tơ → dệt lụa.'),
    Q('Để bảo vệ động vật hoang dã, em KHÔNG nên?', ['Mua sừng tê, ngà voi, thịt thú rừng', 'Tuyên truyền bảo vệ', 'Không phá rừng', 'Báo kiểm lâm khi thấy săn trộm'], 0, 'Mua bán động vật hoang dã là vi phạm pháp luật.'),
  ]),

  M(24, 'Môi trường sống của động vật', [
    Q('Cá sống ở môi trường?', ['Trong sa mạc khô', 'Trên cây', 'Trên trời', 'Dưới nước (sông, hồ, biển)'], 3, 'Cá sống dưới nước.'),
    Q('Chim sống ở môi trường?', ['Dưới biển sâu', 'Dưới bùn', 'Trên cây, trên không', 'Trong lòng đất'], 2, 'Chim làm tổ và bay trên không.'),
    Q('Lạc đà sống ở môi trường?', ['Sa mạc', 'Rừng rậm Việt Nam', 'Biển sâu', 'Vùng cực'], 0, 'Lạc đà thích nghi nóng và khô.'),
    Q('Gấu bắc cực sống ở?', ['Rừng nhiệt đới', 'Sa mạc nóng', 'Vùng cực lạnh giá', 'Đáy biển sâu'], 2, 'Gấu bắc cực sống ở Bắc Cực.'),
    Q('Đại bàng làm tổ ở?', ['Trong hang đất', 'Trong tủ quần áo', 'Trên núi cao, vách đá', 'Dưới nước'], 2, 'Đại bàng thường làm tổ trên cao.'),
    Q('Mất rừng làm cho?', ['Trời mát hơn', 'Nhiều loài động vật mất nơi ở', 'Nhiều thú lớn hơn', 'Đất tốt hơn'], 1, 'Phá rừng → mất môi trường sống của thú.'),
  ]),

  M(25, 'Cơ thể người – các cơ quan chính', [
    Q('Cơ quan giúp em thở là?', ['Tim (bơm máu đi nuôi cơ thể)', 'Gan (lọc độc, chuyển hoá)', 'Dạ dày', 'Phổi'], 3, 'Phổi là cơ quan hô hấp.'),
    Q('Cơ quan bơm máu đi nuôi cơ thể là?', ['Tim', 'Phổi (giúp cơ thể hô hấp)', 'Não (điều khiển hoạt động)', 'Dạ dày'], 0, 'Tim co bóp bơm máu.'),
    Q('Cơ quan tiêu hoá chính là?', ['Dạ dày và ruột', 'Mắt (giúp nhìn sự vật)', 'Phổi (giúp hô hấp)', 'Tim (bơm máu đi nuôi cơ thể)'], 0, 'Dạ dày + ruột tiêu hoá thức ăn.'),
    Q('Cơ quan điều khiển mọi hoạt động (suy nghĩ, vận động) là?', ['Não', 'Tim (bơm máu đi nuôi cơ thể)', 'Dạ dày', 'Phổi (trao đổi khí ôxy)'], 0, 'Não là trung tâm điều khiển.'),
    Q('Cơ quan lọc nước tiểu (chất thải) trong máu là?', ['Thận', 'Tim (bơm máu)', 'Phổi (lấy ôxy từ không khí)', 'Gan (chuyển hoá chất dinh dưỡng)'], 0, 'Thận lọc máu → tạo nước tiểu.'),
    Q('Để các cơ quan khoẻ mạnh, em cần?', ['Thức khuya', 'Nhịn ăn', 'Ăn uống đủ chất, ngủ đủ, vận động', 'Ngồi cả ngày'], 2, 'Lối sống lành mạnh giúp cơ thể khoẻ.'),
  ]),

  M(26, 'Hệ tuần hoàn cơ bản (tim – mạch máu)', [
    Q('Tim nằm ở?', ['Lồng ngực, lệch trái', 'Trong đầu', 'Ngoài da', 'Bụng dưới'], 0, 'Tim nằm trong lồng ngực, lệch trái.'),
    Q('Tim hoạt động bằng cách?', ['Đứng yên', 'Phát điện', 'Co bóp liên tục, bơm máu', 'Quay tròn'], 2, 'Tim co bóp đều bơm máu khắp cơ thể.'),
    Q('Máu được vận chuyển trong cơ thể qua?', ['Các mạch máu (động mạch, tĩnh mạch)', 'Xương (khung nâng đỡ cơ thể)', 'Da (bao bọc bên ngoài cơ thể)', 'Cơ bắp'], 0, 'Mạch máu là đường ống dẫn máu.'),
    Q('Máu mang gì đi nuôi cơ thể?', ['Ôxy và chất dinh dưỡng', 'Chỉ có nước', 'Khí cacbonic', 'Bụi bẩn và vi khuẩn có hại'], 0, 'Máu vận chuyển O2 và dinh dưỡng.'),
    Q('Khi em chạy nhanh, tim sẽ?', ['Không thay đổi', 'Đập chậm hơn', 'Đập nhanh hơn', 'Ngừng đập'], 2, 'Vận động → tim đập nhanh hơn.'),
    Q('Để tim khoẻ, em nên?', ['Tập thể dục, ăn uống lành mạnh', 'Hút thuốc lá', 'Ngồi yên cả ngày', 'Ăn nhiều mỡ động vật'], 0, 'Vận động + ăn uống lành mạnh tốt cho tim.'),
  ]),

  M(27, 'Hệ tiêu hoá cơ bản (miệng – dạ dày – ruột)', [
    Q('Đường đi của thức ăn trong cơ thể là?', ['Da → tay → bụng', 'Tai → mắt → miệng', 'Miệng → thực quản → dạ dày → ruột non → ruột già', 'Mũi → phổi → ruột'], 2, 'Tiêu hoá đi từ miệng tới ruột già.'),
    Q('Răng có chức năng?', ['Hút máu', 'Nhai và nghiền thức ăn', 'Giúp cơ thể hô hấp lấy ôxy', 'Tiêu hoá hết thức ăn'], 1, 'Răng nhai nhỏ thức ăn.'),
    Q('Dạ dày có chức năng?', ['Lấy ôxy cho cơ thể', 'Lọc máu', 'Giúp mắt nhìn rõ vật', 'Co bóp, tiêu hoá thức ăn'], 3, 'Dạ dày co bóp + tiết dịch vị.'),
    Q('Ruột non có chức năng chính là?', ['Bơm máu', 'Suy nghĩ', 'Hấp thụ chất dinh dưỡng vào máu', 'Hít thở'], 2, 'Ruột non hấp thụ dinh dưỡng.'),
    Q('Để tiêu hoá tốt, em nên?', ['Nuốt vội', 'Bỏ bữa', 'Ăn chậm, nhai kỹ, ăn đúng giờ', 'Vừa ăn vừa chạy'], 2, 'Nhai kỹ giảm gánh nặng cho dạ dày.'),
    Q('Để phòng bệnh đường tiêu hoá, em nên?', ['Uống nước lã', 'Không rửa tay', 'Ăn chín, uống sôi, rửa tay trước khi ăn', 'Ăn đồ ôi thiu'], 2, 'Ăn sạch – uống sạch – tay sạch.'),
  ]),

  M(28, 'Ăn uống cân đối – tháp dinh dưỡng', [
    Q('Một bữa ăn cân đối thường có?', ['Chỉ nước ngọt', 'Chỉ thịt', 'Cơm + thịt/cá + rau + canh + trái cây', 'Chỉ bánh kẹo'], 2, 'Cân đối các nhóm dinh dưỡng.'),
    Q('Nhóm thức ăn cung cấp nhiều bột đường (năng lượng) là?', ['Thịt, cá', 'Rau, trái cây', 'Sữa và sữa chua các loại', 'Cơm, bánh mì, khoai'], 3, 'Bột đường là nhóm năng lượng chính.'),
    Q('Thịt, cá, trứng, đậu cung cấp nhiều?', ['Vitamin', 'Chất đạm', 'Chất béo', 'Nước lọc và nước khoáng'], 1, 'Đạm giúp cơ thể lớn lên.'),
    Q('Rau và trái cây cung cấp nhiều?', ['Vitamin và chất xơ', 'Muối và gia vị mặn', 'Đường tinh luyện', 'Dầu mỡ'], 0, 'Rau quả giàu vitamin và xơ.'),
    Q('Nên uống bao nhiêu nước mỗi ngày (trẻ tiểu học)?', ['0.1 lít', 'Khoảng 1.2 – 1.5 lít', '5 lít', '0 lít'], 1, 'Trẻ tiểu học cần ~1.2 – 1.5 lít/ngày.'),
    Q('Để khoẻ mạnh, em KHÔNG nên?', ['Vận động', 'Ăn quá nhiều bánh kẹo, nước ngọt', 'Uống đủ nước', 'Ăn rau xanh'], 1, 'Ăn nhiều ngọt → sâu răng, béo phì.'),
  ]),

  M(29, 'Vệ sinh cá nhân & phòng bệnh', [
    Q('Em nên đánh răng?', ['Không cần', 'Ít nhất 2 lần/ngày (sáng – tối)', 'Khi đau răng', '1 tuần 1 lần'], 1, 'Sáng dậy và trước khi ngủ.'),
    Q('Em cần tắm rửa?', ['Khi nhớ ra', 'Một tuần 1 lần', 'Không cần tắm', 'Hàng ngày, sau khi vận động ra mồ hôi'], 3, 'Tắm sạch tránh bệnh ngoài da.'),
    Q('Em cần rửa tay khi?', ['Khi tay đen kịt mới rửa', 'Không cần', 'Trước khi ăn, sau khi đi vệ sinh, sau khi chơi', 'Cả tuần 1 lần'], 2, 'Tay sạch giảm vi khuẩn xâm nhập.'),
    Q('Mặc quần áo bẩn lâu ngày có thể gây?', ['Khoẻ hơn', 'Ngứa, viêm da, hôi', 'Không sao', 'Đẹp hơn'], 1, 'Quần áo bẩn = ổ vi khuẩn.'),
    Q('Khi bị ho, hắt hơi, em nên?', ['Hắt thẳng vào bạn', 'Không che gì', 'Che miệng – mũi bằng khăn / khuỷu tay', 'Hét lớn'], 2, 'Tránh lây bệnh cho người khác.'),
    Q('Tiêm phòng vắc-xin giúp em?', ['Bay được', 'Phòng được nhiều bệnh nguy hiểm', 'Lớn nhanh tức thì', 'Không cần ăn'], 1, 'Vắc-xin tạo miễn dịch chủ động.'),
  ]),

  M(30, 'Trái Đất – hình cầu, các châu lục, đại dương', [
    Q('Trái Đất có hình?', ['Tam giác', 'Cầu (gần tròn)', 'Hình hộp vuông như chiếc thùng', 'Phẳng như mặt bàn rộng'], 1, 'Trái Đất hình cầu, hơi dẹt ở 2 cực.'),
    Q('Trái Đất quay quanh?', ['Sao Hoả', 'Sao Bắc Đẩu', 'Mặt Trăng', 'Mặt Trời'], 3, 'Trái Đất quay quanh Mặt Trời.'),
    Q('Phần lớn bề mặt Trái Đất là?', ['Đất liền (lục địa và đảo)', 'Lửa nóng phun lên từ núi lửa', 'Băng tuyết ở hai cực', 'Nước (biển và đại dương)'], 3, 'Khoảng 70% bề mặt là nước.'),
    Q('Việt Nam thuộc châu nào?', ['Châu Phi', 'Châu Mỹ', 'Châu Á', 'Châu Âu'], 2, 'Việt Nam ở Đông Nam Á – châu Á.'),
    Q('Đại dương lớn nhất Trái Đất là?', ['Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương', 'Thái Bình Dương'], 3, 'Thái Bình Dương lớn nhất.'),
    Q('Quả địa cầu là?', ['Mặt Trời', 'Mô hình thu nhỏ của Trái Đất', 'Quả táo to', 'Quả bóng'], 1, 'Địa cầu mô phỏng Trái Đất.'),
  ]),

  M(31, 'Mặt Trời, Mặt Trăng & các mùa', [
    Q('Mặt Trời mọc ở hướng?', ['Đông', 'Nam (đối diện hướng Bắc)', 'Bắc (nơi kim la bàn chỉ về)', 'Tây (nơi Mặt Trời lặn)'], 0, 'Mặt Trời mọc hướng Đông.'),
    Q('Mặt Trời lặn ở hướng?', ['Đông (nơi Mặt Trời mọc)', 'Nam (đối diện hướng Bắc)', 'Bắc (kim la bàn chỉ về)', 'Tây'], 3, 'Mặt Trời lặn hướng Tây.'),
    Q('Mặt Trăng quay quanh?', ['Sao Bắc Đẩu', 'Mặt Trời', 'Sao Hoả', 'Trái Đất'], 3, 'Mặt Trăng là vệ tinh của Trái Đất.'),
    Q('Một năm thường có mấy mùa ở miền Bắc Việt Nam?', ['2 mùa: mưa – khô', '1 mùa', '4 mùa: xuân – hạ – thu – đông', '12 mùa'], 2, 'Miền Bắc có 4 mùa rõ rệt.'),
    Q('Miền Nam Việt Nam có?', ['Chỉ mùa lạnh', '2 mùa: mưa và khô', '4 mùa rõ rệt', 'Toàn mùa tuyết'], 1, 'Miền Nam có mùa mưa (5–11) và khô (12–4).'),
    Q('Nguyên nhân có mùa là do?', ['Mặt Trăng to', 'Mặt Trời di chuyển quanh Trái Đất', 'Trời quay', 'Trái Đất nghiêng và quay quanh Mặt Trời'], 3, 'Trục Trái Đất nghiêng + quỹ đạo → có mùa.'),
  ]),

  M(32, 'Phương hướng & la bàn', [
    Q('4 phương hướng chính là?', ['Đỏ – Vàng – Xanh – Tím', 'Đông – Tây – Nam – Bắc', 'Trước – Sau', 'Trên – Dưới – Trái – Phải'], 1, '4 hướng chính.'),
    Q('Đối diện hướng Đông là?', ['Bắc (vuông góc với hướng Đông)', 'Trên (phía bầu trời)', 'Nam (vuông góc với hướng Đông)', 'Tây'], 3, 'Đông ↔ Tây đối diện.'),
    Q('Đối diện hướng Nam là?', ['Tây (vuông góc với hướng Nam)', 'Trên (phía bầu trời)', 'Bắc', 'Đông (vuông góc với hướng Nam)'], 2, 'Nam ↔ Bắc đối diện.'),
    Q('Dụng cụ giúp xác định phương hướng là?', ['Đồng hồ', 'La bàn', 'Thước kẻ', 'Bút chì'], 1, 'La bàn = kim nam châm chỉ Bắc.'),
    Q('Kim la bàn thường chỉ về hướng?', ['Bắc', 'Đông (nơi Mặt Trời mọc)', 'Nam (đối diện hướng Bắc)', 'Tây (nơi Mặt Trời lặn)'], 0, 'Kim nam châm chỉ Bắc.'),
    Q('Khi không có la bàn, em có thể dùng gì để xác định hướng?', ['Hướng gió mưa thổi tới', 'Vị trí Mặt Trời (mọc Đông, lặn Tây)', 'Cây cối ngẫu nhiên', 'Tiếng chim'], 1, 'Mặt Trời mọc – lặn là chỉ dẫn tự nhiên.'),
  ]),

  M(33, 'Không khí và nước', [
    Q('Không khí có ở đâu?', ['Trong bình kín', 'Chỉ trong phổi', 'Chỉ trên trời cao', 'Khắp xung quanh chúng ta'], 3, 'Không khí bao quanh Trái Đất.'),
    Q('Không khí gồm các thành phần chính nào?', ['Toàn nước', 'Khí ôxy, ni-tơ, hơi nước, cacbonic', 'Chỉ ôxy', 'Toàn cát bụi'], 1, 'Hỗn hợp khí — chủ yếu nitơ và ôxy.'),
    Q('Khí giúp người và động vật thở là?', ['Khí mêtan', 'Khí ni-tơ', 'Khí cacbonic', 'Khí ôxy'], 3, 'Ôxy duy trì hô hấp.'),
    Q('Nước có vai trò gì với sự sống?', ['Chỉ cần khi trời nóng bức', 'Cần cho mọi sinh vật', 'Chỉ để tắm', 'Chỉ cần cho cá'], 1, 'Nước = sự sống.'),
    Q('Để tiết kiệm nước, em nên?', ['Khoá vòi khi không dùng', 'Tắm rất lâu', 'Mở vòi cả ngày', 'Rửa xe bằng vòi xối'], 0, 'Tiết kiệm nước = bảo vệ môi trường.'),
    Q('Để giữ không khí trong lành, em nên?', ['Đốt rác bừa bãi', 'Hút thuốc', 'Xả khói nhiều', 'Trồng cây, không đốt rác'], 3, 'Trồng cây + giảm khí thải.'),
  ]),

  M(34, 'Đất và bảo vệ môi trường', [
    Q('Đất có vai trò gì với cây xanh?', ['Không liên quan', 'Cung cấp nước và chất dinh dưỡng, giữ cây đứng', 'Đốt cây', 'Làm khô cây'], 1, 'Đất nuôi cây và giữ cây đứng vững.'),
    Q('Đất bị ô nhiễm có thể do?', ['Rác thải, hoá chất, thuốc trừ sâu', 'Tưới nước', 'Quét nhà', 'Trồng cây'], 0, 'Rác và hoá chất gây ô nhiễm đất.'),
    Q('Để bảo vệ môi trường đất, em nên?', ['Đốt nhựa', 'Đổ dầu mỡ ra vườn', 'Chôn pin xuống vườn', 'Phân loại rác, không vứt rác bừa bãi'], 3, 'Bảo vệ đất từ những việc nhỏ.'),
    Q('Việc nào KHÔNG bảo vệ môi trường?', ['Săn bắt động vật hoang dã', 'Phân loại rác', 'Tiết kiệm điện nước', 'Trồng cây'], 0, 'Săn bắt thú hoang là phá hoại tự nhiên.'),
    Q('Rác hữu cơ (vỏ rau, thức ăn thừa) có thể?', ['Ủ làm phân bón cho cây', 'Đốt làm than đá', 'Tan trong nước uống', 'Bán giá cao'], 0, 'Rác hữu cơ ủ phân vi sinh.'),
    Q('Khẩu hiệu môi trường 3R là?', ['Run – Read – Rest', 'Rice – Rain – River', 'Reduce – Reuse – Recycle (Giảm – Tái dùng – Tái chế)', 'Red – Rose – River'], 2, '3R giúp giảm rác thải.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('5 bộ phận chính của cây có hoa là?', ['Cây – cỏ – hoa – lá – đất', 'Hoa – đá – đất – nước – gió', 'Lá – mây – mưa – nắng – đêm', 'Rễ – thân – lá – hoa – quả'], 3, 'Cây có hoa có 5 bộ phận chính.'),
    Q('Cá thở bằng?', ['Mang', 'Cánh (như chim bay trên trời)', 'Da (trao đổi khí qua bề mặt)', 'Phổi (như người và thú)'], 0, 'Cá có mang để lấy ôxy từ nước.'),
    Q('Cơ quan bơm máu đi nuôi cơ thể là?', ['Dạ dày', 'Não (điều khiển hoạt động cơ thể)', 'Phổi (giúp hô hấp lấy ôxy)', 'Tim'], 3, 'Tim co bóp bơm máu.'),
    Q('Đường tiêu hoá thức ăn bắt đầu từ?', ['Miệng', 'Ruột non', 'Phổi (cơ quan hô hấp lấy ôxy)', 'Dạ dày'], 0, 'Miệng nhai → thực quản → dạ dày.'),
    Q('Trái Đất có hình?', ['Phẳng như mặt bàn rộng', 'Tam giác', 'Hộp vuông như chiếc thùng', 'Cầu'], 3, 'Trái Đất hình cầu.'),
    Q('Mặt Trời mọc – lặn ở hướng?', ['Mọc Đông – lặn Tây', 'Mọc Bắc – lặn Nam', 'Mọc Tây – lặn Đông', 'Cố định một chỗ'], 0, 'Đông mọc – Tây lặn.'),
    Q('Để bảo vệ môi trường, em nên?', ['Phá rừng', 'Đốt rác bừa', 'Hút thuốc', 'Trồng cây, không xả rác bừa bãi'], 3, 'Hành động nhỏ – ý nghĩa lớn.'),
    Q('Tổng đài bảo vệ trẻ em là?', ['115', '113', '114', '111'], 3, '111 = tổng đài trẻ em quốc gia.'),
    Q('Để tránh đuối nước, trẻ em phải?', ['Tắm khi trời tối', 'Nhảy vào chỗ sâu', 'Có người lớn đi cùng khi xuống nước', 'Đi một mình ra sông'], 2, 'An toàn nước = có người lớn giám sát.'),
    Q('Để tim mạch khoẻ, em nên?', ['Ngồi cả ngày', 'Tập thể dục, ăn uống lành mạnh', 'Thức khuya', 'Ăn nhiều mỡ'], 1, 'Vận động + dinh dưỡng tốt cho tim.'),
  ], { difficulty: 3 }),
];

export const P3TNXH_SCENARIOS = indexBy(P3TNXH_WEEKS);
