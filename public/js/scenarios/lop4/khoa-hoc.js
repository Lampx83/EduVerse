// ============================================================
// Lớp 4 · KHOA HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018: Nước · Không khí · Ánh sáng · Nhiệt · Âm thanh ·
//                    Thực vật · Động vật · Con người & sức khoẻ · Môi trường.
// ID prefix: "P4KH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P4KH', 'khoa-hoc', n, title, qs, opts);

export const P4KH_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Nước — tính chất', [
    Q('Nước trong tự nhiên có tính chất nào?', ['Trong suốt, không màu, không mùi, không vị', 'Có màu xanh', 'Có hình dạng cố định', 'Có vị ngọt'], 0, 'Nước nguyên chất trong suốt, không màu, không mùi, không vị.'),
    Q('Nước có hình dạng như thế nào?', ['Hình tròn', 'Hình vuông', 'Theo hình vật đựng', 'Cố định'], 2, 'Nước (chất lỏng) không có hình dạng nhất định, lấy hình của vật chứa.'),
    Q('Nước có chảy được không?', ['Chỉ chảy ngang', 'Chỉ chảy lên cao', 'Có, chảy từ cao xuống thấp', 'Không, đứng yên'], 2, 'Nước chảy từ nơi cao xuống nơi thấp.'),
    Q('Khi đổ nước vào cốc thuỷ tinh, ta thấy?', ['Nước nổ', 'Có thể nhìn xuyên qua nước', 'Nước biến mất', 'Cốc đổi màu'], 1, 'Nước trong suốt nên ta nhìn xuyên qua được.'),
    Q('Nước có thể hoà tan được chất nào sau đây?', ['Muối ăn', 'Cát mịn (lắng xuống đáy cốc)', 'Dầu ăn', 'Sỏi nhỏ (chìm trong nước)'], 0, 'Muối, đường tan trong nước; cát, dầu, sỏi không.'),
    Q('Tại sao nước không có vị?', ['Vì nước ngọt', 'Vì nước đông', 'Vì nước nguyên chất không chứa chất tạo vị', 'Vì nước nóng'], 2, 'Nước nguyên chất là vô vị; vị có là do tạp chất hoà tan.'),
  ]),

  M(2, 'Ba thể của nước', [
    Q('Nước tồn tại ở mấy thể?', ['1', '3', '2', '4'], 1, 'Ba thể: rắn (đá), lỏng (nước), khí (hơi).'),
    Q('Nước ở thể rắn gọi là?', ['Mây (hơi nước ngưng tụ trên cao)', 'Nước đá', 'Hơi nước', 'Sương (giọt nước nhỏ ban đêm)'], 1, 'Nước đá là nước ở thể rắn.'),
    Q('Khi đun sôi, nước chuyển thành?', ['Muối kết tinh dưới đáy nồi', 'Hơi nước', 'Đá tan ra (khi đun nóng)', 'Bọt khí ô-xi thoát ra'], 1, 'Đun sôi → nước bay hơi thành hơi nước.'),
    Q('Khi để nước trong tủ lạnh dưới 0°C, nước trở thành?', ['Đá (rắn)', 'Hơi nước', 'Sôi (khi đạt 100°C)', 'Bốc hơi'], 0, 'Dưới 0°C, nước đông đặc thành đá.'),
    Q('Hơi nước thuộc thể?', ['Khí', 'Đặc (thể đặc hơn lỏng)', 'Rắn (như nước đá)', 'Lỏng (như nước thường)'], 0, 'Hơi nước là thể khí, không nhìn thấy bằng mắt thường.'),
    Q('Quá trình "nước → hơi" gọi là?', ['Tan chảy', 'Đông đặc', 'Bay hơi', 'Ngưng tụ'], 2, 'Bay hơi: lỏng → khí.'),
  ]),

  M(3, 'Vòng tuần hoàn của nước', [
    Q('Vòng tuần hoàn của nước trong tự nhiên gồm các giai đoạn chính:', ['Sôi – đông', 'Đông đặc – tan chảy', 'Chảy – ngấm', 'Bay hơi – ngưng tụ – mưa'], 3, 'Bay hơi → ngưng tụ thành mây → mưa rơi xuống đất.'),
    Q('Mây hình thành do?', ['Khói bụi', 'Ánh sáng', 'Hơi nước ngưng tụ', 'Gió thổi'], 2, 'Hơi nước gặp lạnh ngưng tụ thành các giọt nước nhỏ tạo mây.'),
    Q('Quá trình "hơi → giọt nước" gọi là?', ['Ngưng tụ', 'Sôi (lỏng → khí khi đun nóng)', 'Đông đặc', 'Bay hơi'], 0, 'Ngưng tụ: khí → lỏng.'),
    Q('Năng lượng chính làm nước bay hơi là?', ['Gió mạnh', 'Mặt trăng', 'Mặt trời', 'Đất (hấp thụ nước mưa)'], 2, 'Nhiệt từ Mặt Trời làm nước bay hơi.'),
    Q('Nước mưa rơi xuống đất rồi đi đâu?', ['Bốc hơi hoàn toàn', 'Ngấm vào đất / chảy ra sông biển', 'Biến mất', 'Đông đặc'], 1, 'Nước mưa ngấm xuống đất hoặc chảy theo sông, suối ra biển.'),
    Q('Vòng tuần hoàn nước rất quan trọng vì?', ['Làm Trái Đất lạnh', 'Cung cấp nước ngọt cho sự sống', 'Không có tác dụng', 'Tạo gió'], 1, 'Vòng tuần hoàn duy trì nguồn nước cho sự sống.'),
  ]),

  M(4, 'Nước cần cho sự sống', [
    Q('Cơ thể người chứa khoảng bao nhiêu % nước?', ['99%', '70%', '10%', '30%'], 1, 'Cơ thể người trưởng thành chứa khoảng 70% nước.'),
    Q('Sinh vật nào KHÔNG cần nước?', ['Con người', 'Động vật', 'Không có (đều cần)', 'Cây xanh'], 2, 'Mọi sinh vật đều cần nước để sống.'),
    Q('Mỗi ngày em nên uống khoảng?', ['0,5 lít', '1,5 – 2 lít', '10 lít', '5 lít'], 1, 'Khuyến nghị 1,5–2 lít nước/ngày cho học sinh tiểu học (tuỳ tuổi).'),
    Q('Nước được dùng trong sinh hoạt để?', ['Uống, nấu ăn, tắm rửa, giặt giũ', 'Chỉ để tắm', 'Chỉ để tưới cây', 'Chỉ để uống'], 0, 'Nước phục vụ nhiều hoạt động sinh hoạt.'),
    Q('Trong nông nghiệp, nước dùng để?', ['Đốt rác', 'Trang trí', 'Sưởi ấm', 'Tưới cây, nuôi thuỷ sản'], 3, 'Nước tưới cây, nuôi cá tôm, chăn nuôi.'),
    Q('Thiếu nước cây sẽ?', ['Héo, chết', 'Đổi màu xanh hơn', 'Lớn nhanh', 'Tươi tốt'], 0, 'Thiếu nước cây héo và chết.'),
  ]),

  M(5, 'Ô nhiễm nước & bảo vệ nguồn nước', [
    Q('Nguyên nhân chính gây ô nhiễm nước?', ['Rác và nước thải xả bừa bãi', 'Ánh nắng', 'Mưa lớn cuốn trôi đất', 'Gió thổi mạnh trên mặt nước'], 0, 'Rác thải, nước thải sinh hoạt và công nghiệp gây ô nhiễm.'),
    Q('Nước bẩn có hại như thế nào?', ['Làm cây xanh', 'Gây bệnh đường ruột, dịch bệnh', 'Làm trời mát', 'Không sao'], 1, 'Nước bẩn truyền bệnh tiêu chảy, tả, lị...'),
    Q('Cách nào KHÔNG bảo vệ nguồn nước?', ['Trồng cây quanh nguồn nước', 'Tiết kiệm nước', 'Không vứt rác xuống ao hồ', 'Xả nước thải chưa xử lý ra sông'], 3, 'Xả thải chưa xử lý làm ô nhiễm — KHÔNG nên.'),
    Q('Để có nước sạch uống, cần?', ['Uống thẳng nước sông', 'Để qua đêm', 'Đun sôi hoặc lọc trước khi uống', 'Phơi nắng'], 2, 'Nên đun sôi hoặc lọc để diệt vi khuẩn.'),
    Q('Hành động nào tiết kiệm nước?', ['Tắm rất lâu', 'Khoá vòi khi không dùng', 'Để vòi chảy khi đánh răng', 'Rửa xe bằng vòi xịt liên tục'], 1, 'Khoá vòi khi không dùng để tiết kiệm nước.'),
    Q('Hồ ao bị "phú dưỡng" (nhiều tảo) thường do?', ['Mưa nhiều', 'Quá nhiều ánh sáng', 'Nước thải nhiều chất dinh dưỡng', 'Có nhiều cá'], 2, 'Nước thải chứa nhiều đạm/lân làm tảo phát triển mạnh.'),
  ]),

  M(6, 'Không khí — tính chất', [
    Q('Không khí có ở đâu?', ['Khắp nơi quanh ta', 'Chỉ dưới đất', 'Chỉ trên cao', 'Chỉ trong phòng'], 0, 'Không khí có mặt khắp nơi xung quanh chúng ta.'),
    Q('Không khí có tính chất gì?', ['Có hình vuông', 'Không màu, không mùi, trong suốt', 'Có màu đỏ', 'Có mùi thơm'], 1, 'Không khí trong suốt, không màu, không mùi, không vị.'),
    Q('Không khí có hình dạng?', ['Theo hình vật chứa', 'Hình cầu', 'Cố định', 'Hình tam giác'], 0, 'Không khí (chất khí) chiếm hình dạng vật chứa.'),
    Q('Để chứng minh không khí có thật, ta có thể?', ['Quạt vào mặt và cảm thấy gió', 'Nhìn lên trời', 'Nghe radio', 'Đo nhiệt độ'], 0, 'Cảm nhận gió hoặc thấy bóng bay phồng → có không khí.'),
    Q('Không khí có chiếm chỗ không?', ['Có (như khi thổi bóng bay căng lên)', 'Không (vì không nhìn thấy được)', 'Chỉ trong nước', 'Chỉ trong đất'], 0, 'Không khí chiếm chỗ — bóng bay căng do không khí bên trong.'),
    Q('Không khí có thể nén được không?', ['Chỉ khi nóng', 'Chỉ khi lạnh', 'Có (như bơm xe đạp)', 'Không (vì không khí không có hình dạng)'], 2, 'Không khí nén lại được — ví dụ bơm xe đạp.'),
  ]),

  M(7, 'Thành phần không khí', [
    Q('Khí nào chiếm tỉ lệ lớn nhất trong không khí?', ['Hơi nước', 'Ni-tơ', 'Ô-xi (~21%, cần cho sự thở)', 'Các-bô-níc'], 1, 'Ni-tơ (~78%) chiếm tỉ lệ lớn nhất.'),
    Q('Khí nào cần cho sự thở của con người và động vật?', ['Ni-tơ (chiếm tỉ lệ lớn nhất)', 'Ô-xi', 'Các-bô-níc', 'Khí trơ'], 1, 'Ô-xi (~21%) duy trì sự sống.'),
    Q('Khí nào cây xanh hấp thụ để quang hợp?', ['Ô-xi (cây hấp thụ để hô hấp)', 'Các-bô-níc', 'Hi-đrô', 'Ni-tơ (chiếm phần lớn không khí)'], 1, 'Cây xanh hấp thụ CO₂ và nhả O₂.'),
    Q('Khí nào duy trì sự cháy?', ['Các-bô-níc', 'Ô-xi', 'Ni-tơ (chiếm 78% không khí)', 'Hơi nước'], 1, 'Ô-xi duy trì sự cháy.'),
    Q('Hoạt động nào tăng CO₂ trong không khí?', ['Đốt nhiên liệu (xăng, than)', 'Trồng cây', 'Quang hợp', 'Tưới nước'], 0, 'Đốt nhiên liệu thải ra nhiều CO₂.'),
    Q('Khi cây đèn dầu cháy, nó "tiêu thụ" khí gì?', ['Ô-xi', 'CO₂ (khí thoát ra sau khi cháy)', 'Ni-tơ (chiếm phần lớn không khí)', 'Hơi nước'], 0, 'Sự cháy tiêu thụ ô-xi và toả nhiệt.'),
  ]),

  M(8, 'Gió — không khí chuyển động', [
    Q('Gió là gì?', ['Ánh sáng', 'Hơi nước bay', 'Không khí đứng yên', 'Không khí chuyển động'], 3, 'Gió là không khí chuyển động.'),
    Q('Gió hình thành chủ yếu do?', ['Ngôi sao', 'Mặt trăng', 'Trời lạnh', 'Sự chênh lệch nhiệt độ giữa các vùng'], 3, 'Chênh lệch nhiệt độ → chênh lệch áp suất → gió thổi.'),
    Q('Cấp gió nào mạnh nhất gây thiệt hại lớn?', ['Gió nhẹ', 'Gió bão', 'Gió vừa', 'Lặng gió'], 1, 'Bão (cấp ≥8) gây thiệt hại nặng.'),
    Q('Lợi ích của gió:', ['Làm nóng', 'Không có ích', 'Chỉ gây hại', 'Phát điện gió, thổi cánh buồm, làm mát'], 3, 'Gió giúp phát điện, đẩy thuyền buồm, làm mát…'),
    Q('Khi có bão, em nên?', ['Ở trong nhà, tránh xa cửa kính, cây to', 'Ra ngoài chơi', 'Đi tắm sông', 'Trèo cây xem'], 0, 'Trú ẩn an toàn trong nhà.'),
    Q('Diều bay được nhờ?', ['Mưa (làm diều ướt và nặng)', 'Tay người (không cần gió)', 'Mặt trời', 'Sức gió'], 3, 'Sức gió đẩy diều bay lên cao.'),
  ]),

  M(9, 'Bảo vệ bầu không khí', [
    Q('Nguyên nhân chính làm ô nhiễm không khí?', ['Mưa (cuốn theo bụi xuống đất)', 'Sông biển', 'Khói bụi từ phương tiện, nhà máy, rác', 'Cây xanh'], 2, 'Khói xe, khói nhà máy, đốt rác… là nguồn ô nhiễm chính.'),
    Q('Hít phải không khí ô nhiễm có thể bị?', ['Tăng chiều cao', 'Bệnh hô hấp, dị ứng', 'Sáng mắt', 'Khoẻ hơn'], 1, 'Ô nhiễm gây ho, viêm phổi, hen suyễn…'),
    Q('Cách bảo vệ bầu không khí trong lành?', ['Phá rừng', 'Hút thuốc nhiều', 'Trồng cây, dùng xe đạp/đi bộ, hạn chế đốt', 'Đốt rác bừa bãi'], 2, 'Trồng cây, đi xe đạp, không đốt rác.'),
    Q('Cây xanh giúp không khí như thế nào?', ['Thải khói', 'Không tác dụng', 'Hút nước', 'Hút bụi, nhả O₂'], 3, 'Cây xanh hấp thụ CO₂, bụi và nhả O₂.'),
    Q('Khi đi đường có nhiều khói bụi, em nên?', ['Chạy nhanh', 'Hít thật sâu', 'Đeo khẩu trang', 'Nín thở mãi'], 2, 'Khẩu trang giúp lọc bụi.'),
    Q('Hành động "thân thiện môi trường" là?', ['Đốt nhựa', 'Phân loại và tái chế rác', 'Vứt rác xuống sông', 'Phun thuốc bừa'], 1, 'Phân loại + tái chế giảm ô nhiễm.'),
  ]),

  M(10, 'Ánh sáng — nguồn sáng', [
    Q('Nguồn sáng tự nhiên lớn nhất là?', ['Mặt trời', 'Bóng đèn', 'Mặt trăng', 'Đèn pin'], 0, 'Mặt Trời là nguồn sáng tự nhiên chính.'),
    Q('Mặt Trăng có phát sáng không?', ['Phát sáng nhờ sao', 'Có, tự phát sáng', 'Phát sáng ban ngày', 'Không, phản chiếu ánh sáng Mặt Trời'], 3, 'Trăng không tự phát sáng mà phản chiếu ánh nắng.'),
    Q('Nguồn sáng nhân tạo là?', ['Mặt Trời', 'Đom đóm', 'Bóng đèn, đèn pin, nến', 'Sao (nguồn sáng tự nhiên trên trời)'], 2, 'Đèn, nến do con người làm ra → nguồn sáng nhân tạo.'),
    Q('Ánh sáng truyền theo đường?', ['Đường gãy khúc', 'Đường tròn', 'Đường thẳng', 'Đường cong'], 2, 'Ánh sáng truyền theo đường thẳng trong môi trường đồng nhất.'),
    Q('Vật nào sau đây phát sáng?', ['Bóng đèn đang bật', 'Tấm gương', 'Tờ giấy trắng', 'Cái cốc'], 0, 'Chỉ bóng đèn đang bật là nguồn sáng (tự phát).'),
    Q('Vật nào "phản chiếu" ánh sáng tốt?', ['Gương phẳng', 'Đất sét', 'Vải đen', 'Than (màu đen, hút ánh sáng)'], 0, 'Gương phẳng phản chiếu ánh sáng rất tốt.'),
  ]),

  M(11, 'Bóng tối & vật cản sáng', [
    Q('Bóng tối xuất hiện khi?', ['Có vật cản ánh sáng', 'Trời mưa', 'Trời nhiều nắng', 'Có ánh sáng đầy đủ'], 0, 'Khi ánh sáng bị vật cản chặn → có bóng tối phía sau.'),
    Q('Vật cho ánh sáng đi qua hoàn toàn gọi là?', ['Vật phát sáng', 'Vật chắn sáng', 'Vật mờ', 'Vật trong suốt'], 3, 'Trong suốt: thuỷ tinh, nước sạch…'),
    Q('Vật KHÔNG cho ánh sáng đi qua gọi là?', ['Mờ (cho một phần ánh sáng qua)', 'Phát sáng', 'Trong suốt', 'Chắn sáng / không trong suốt'], 3, 'Vật chắn sáng: gỗ, kim loại đặc, sách dày…'),
    Q('Bóng của vật trên mặt đất to hay nhỏ tuỳ vào?', ['Trọng lượng', 'Vị trí nguồn sáng', 'Màu của vật', 'Tên gọi'], 1, 'Nguồn sáng ở các vị trí khác nhau → bóng có kích thước, hướng khác.'),
    Q('Vào trưa, bóng người trên đất thường?', ['Quay ngược', 'Dài hơn buổi sáng', 'Rất dài', 'Ngắn nhất'], 3, 'Mặt Trời gần thẳng đứng → bóng ngắn nhất.'),
    Q('Ban đêm trong phòng không bật đèn, ta?', ['Thấy nhờ âm thanh', 'Vẫn thấy rõ', 'Không thấy gì (tối)', 'Thấy nhờ mùi'], 2, 'Không có ánh sáng → mắt không nhìn được.'),
  ]),

  M(12, 'Mắt nhìn thấy vật khi nào', [
    Q('Mắt nhìn thấy vật khi?', ['Vật có mùi', 'Vật phát ra âm thanh', 'Vật chuyển động', 'Vật phát ra hoặc phản chiếu ánh sáng đến mắt'], 3, 'Ánh sáng từ vật đến mắt → ta nhìn thấy.'),
    Q('Ta nhìn thấy cuốn sách trên bàn vì?', ['Sách có mùi', 'Sách phát sáng', 'Sách phản chiếu ánh sáng đèn/Mặt Trời vào mắt', 'Sách phát âm'], 2, 'Sách không tự phát sáng — nó phản chiếu ánh sáng.'),
    Q('Trong bóng tối hoàn toàn, ta?', ['Nhìn nhờ tai', 'Nhìn được màu trắng', 'Không nhìn thấy gì', 'Vẫn nhìn rõ'], 2, 'Không có ánh sáng → không nhìn được.'),
    Q('Để học bài tốt, ánh sáng cần?', ['Vừa đủ, không chói', 'Quá tối', 'Nhấp nháy', 'Quá chói'], 0, 'Ánh sáng đủ và êm dịu bảo vệ mắt.'),
    Q('Khi đọc sách, đèn nên đặt?', ['Phía trước hoặc bên không thuận tay', 'Sau lưng (lưng che)', 'Dưới gầm bàn', 'Trên đầu gây chói'], 0, 'Đặt đèn không tạo bóng tay lên trang sách.'),
    Q('Đeo kính giúp người cận thị vì?', ['Làm tối căn phòng', 'Tạo bóng tối', 'Hội tụ ánh sáng đúng vào võng mạc', 'Tăng âm thanh'], 2, 'Kính cận điều chỉnh đường đi của ánh sáng vào mắt.'),
  ]),

  M(13, 'Nhiệt — vật nóng vật lạnh', [
    Q('Đơn vị đo nhiệt độ thường dùng ở Việt Nam là?', ['kg (đơn vị đo khối lượng)', '°C (độ C)', '°F (độ F)', 'lít (đơn vị đo thể tích)'], 1, 'Việt Nam dùng độ C (Celsius).'),
    Q('Dụng cụ đo nhiệt độ gọi là?', ['Cân (dụng cụ đo khối lượng)', 'Thước (dụng cụ đo độ dài)', 'Nhiệt kế', 'Đồng hồ'], 2, 'Nhiệt kế đo nhiệt độ.'),
    Q('Nhiệt độ cơ thể người bình thường khoảng?', ['50°C', '100°C', '25°C', '37°C'], 3, '~37°C là nhiệt độ cơ thể bình thường.'),
    Q('Nước sôi ở áp suất thường có nhiệt độ?', ['200°C', '0°C', '100°C', '50°C'], 2, 'Nước sôi ở 100°C ở áp suất thường.'),
    Q('Nước đông đá ở nhiệt độ?', ['0°C', '100°C', '4°C', '10°C'], 0, 'Nước đông đặc ở 0°C.'),
    Q('Vật càng nóng thì nhiệt độ?', ['Càng thấp', 'Không đổi', 'Bằng 0', 'Càng cao'], 3, 'Càng nóng → nhiệt độ càng cao.'),
  ]),

  M(14, 'Truyền nhiệt', [
    Q('Nhiệt truyền từ vật?', ['Cùng nhiệt độ', 'Không truyền được', 'Lạnh sang nóng', 'Nóng sang lạnh'], 3, 'Nhiệt luôn truyền từ vật nóng hơn sang vật lạnh hơn.'),
    Q('Khi đặt thìa kim loại vào cốc nước nóng, cán thìa?', ['Đông đá', 'Đổi màu', 'Vẫn lạnh', 'Cũng nóng dần lên'], 3, 'Kim loại dẫn nhiệt tốt → cán thìa nóng theo.'),
    Q('Vật nào dẫn nhiệt tốt?', ['Kim loại', 'Nhựa (cán xoong hay làm bằng nhựa)', 'Vải (giữ ấm cho cơ thể)', 'Gỗ (cán dao cán muôi bằng gỗ)'], 0, 'Kim loại (đồng, nhôm, sắt…) dẫn nhiệt tốt.'),
    Q('Vật nào dẫn nhiệt kém (cách nhiệt)?', ['Gỗ, nhựa, vải', 'Đồng (dùng làm dây điện, nồi)', 'Sắt (dùng làm chảo, dao)', 'Nhôm (dùng làm xoong, ấm đun)'], 0, 'Gỗ, nhựa, vải là chất cách nhiệt.'),
    Q('Tay cầm nồi thường bọc nhựa/gỗ vì?', ['Để đẹp', 'Cho nhẹ', 'Cho rẻ', 'Để cách nhiệt, không nóng tay'], 3, 'Cách nhiệt giúp tay không bị bỏng.'),
    Q('Áo len giữ ấm vào mùa đông vì?', ['Áo cản nhiệt từ cơ thể thoát ra ngoài', 'Áo dẫn lạnh', 'Áo phản chiếu sáng', 'Áo phát nhiệt'], 0, 'Sợi len chứa không khí — cách nhiệt giúp giữ ấm.'),
  ]),

  M(15, 'Nguồn nhiệt & an toàn', [
    Q('Nguồn nhiệt lớn nhất với Trái Đất là?', ['Mặt Trăng', 'Sao Hoả', 'Mặt Trời', 'Ngọn lửa'], 2, 'Mặt Trời là nguồn nhiệt khổng lồ cho Trái Đất.'),
    Q('Nguồn nhiệt trong nhà bếp gồm?', ['Tủ quần áo', 'Tủ lạnh', 'Quạt (làm mát, không sinh nhiệt nấu)', 'Bếp ga, bếp điện, lò vi sóng'], 3, 'Bếp ga/điện/lò vi sóng cung cấp nhiệt nấu nướng.'),
    Q('Khi nấu ăn, em KHÔNG nên?', ['Tắt bếp sau khi dùng', 'Mặc tạp dề', 'Để trẻ nhỏ nghịch bếp đang cháy', 'Cẩn thận khi cầm nồi nóng'], 2, 'Không để trẻ nhỏ nghịch lửa/bếp — rất nguy hiểm.'),
    Q('Khi bị bỏng nhẹ, sơ cứu đúng là?', ['Bôi kem đánh răng', 'Chà xát mạnh', 'Ngâm chỗ bỏng vào nước mát sạch ~15 phút', 'Bôi nước mắm'], 2, 'Ngâm/xả nước mát giúp giảm nhiệt và đau.'),
    Q('Mặt Trời cung cấp nhiệt giúp:', ['Cây quang hợp, nước bốc hơi, sưởi ấm Trái Đất', 'Sinh ra gió ngược', 'Đông cứng nước', 'Không có tác dụng'], 0, 'Mặt Trời cung cấp năng lượng cho hầu hết quá trình tự nhiên.'),
    Q('Khi có cháy nhỏ trong nhà, em nên?', ['Bỏ chạy đi chơi', 'Tự dập + báo người lớn, gọi 114', 'Đổ xăng vào', 'Quay video'], 1, 'Báo người lớn và gọi 114 (cứu hoả).'),
  ]),

  M(16, 'Âm thanh — nguồn âm', [
    Q('Âm thanh do đâu phát ra?', ['Nhiệt độ', 'Ánh sáng', 'Vật rung động', 'Vật đứng yên'], 2, 'Khi vật rung động → phát ra âm.'),
    Q('Khi gõ trống, vật rung là?', ['Không khí xa trống', 'Cái dùi', 'Tay người', 'Mặt trống'], 3, 'Mặt trống rung động phát ra âm thanh.'),
    Q('Âm thanh truyền được trong?', ['Chân không', 'Chất rắn, lỏng và khí', 'Chỉ chất khí', 'Chỉ chất rắn'], 1, 'Âm thanh truyền trong rắn, lỏng, khí; KHÔNG truyền trong chân không.'),
    Q('Âm thanh truyền nhanh nhất trong?', ['Chất khí', 'Chất lỏng', 'Chất rắn', 'Chân không'], 2, 'Vận tốc âm: rắn > lỏng > khí.'),
    Q('Ta nghe được âm thanh nhờ?', ['Tai', 'Lưỡi (cơ quan nếm vị)', 'Mũi (cơ quan ngửi mùi)', 'Mắt (cơ quan nhìn)'], 0, 'Tai là cơ quan thu nhận âm thanh.'),
    Q('"Đàn ghi-ta" phát âm do?', ['Đàn lạnh đi', 'Đàn nóng lên', 'Đàn phát sáng', 'Dây đàn rung'], 3, 'Dây đàn rung tạo âm thanh.'),
  ]),

  M(17, 'Bảo vệ tai & chống tiếng ồn', [
    Q('Tiếng ồn quá lớn có hại như thế nào?', ['Tăng thính giác', 'Khoẻ tai hơn', 'Không sao', 'Đau tai, giảm thính lực, mất tập trung'], 3, 'Tiếng ồn kéo dài gây hại thính giác.'),
    Q('Hành động bảo vệ tai:', ['Bịt tai mãi mãi', 'Không nghe nhạc lớn, vệ sinh tai nhẹ nhàng', 'Ngoáy tai sâu bằng vật cứng', 'Bôi dầu vào tai'], 1, 'Tránh âm thanh quá to và vệ sinh nhẹ nhàng.'),
    Q('Khi đi qua công trường nhiều tiếng ồn, em có thể?', ['Đứng lại lâu', 'Ghé sát máy khoan', 'Hét to hơn', 'Bịt tai hoặc đi nhanh qua'], 3, 'Tránh xa nguồn ồn hoặc bịt tai bảo vệ.'),
    Q('Để giảm tiếng ồn trong nhà, có thể?', ['Đập tường', 'Đặt nhiều quạt', 'Mở loa to', 'Đóng cửa, dùng rèm, thảm hút âm'], 3, 'Vật mềm (rèm, thảm) hấp thụ âm tốt.'),
    Q('Âm thanh em yêu thích thường là?', ['Còi xe inh ỏi', 'Tiếng đập phá', 'Tiếng máy khoan', 'Tiếng nhạc êm dịu, tiếng chim hót'], 3, 'Âm thanh dịu giúp thư giãn.'),
    Q('Nghe nhạc bằng tai nghe nên?', ['Đeo 24/24', 'Cho người khác đeo cùng', 'Vặn vừa, nghỉ giải lao', 'Mở rất to liên tục'], 2, 'Âm lượng vừa phải và nghỉ ngơi để bảo vệ tai.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Nước có ___ thể chính trong tự nhiên.', ['1', '3', '2', '4'], 1, '3 thể: rắn, lỏng, khí.'),
    Q('Khí cần cho sự thở là?', ['CO₂ (khí cây cần để quang hợp)', 'Ô-xi', 'Ni-tơ (chiếm 78% không khí)', 'Hi-đrô'], 1, 'Ô-xi duy trì sự sống.'),
    Q('Gió là?', ['Hơi nước nóng', 'Không khí đứng yên', 'Không khí chuyển động', 'Ánh sáng'], 2, 'Gió = không khí chuyển động.'),
    Q('Vật dẫn nhiệt tốt là?', ['Gỗ (làm cán dao, ấm dùng được lâu)', 'Vải (giữ ấm cho tay)', 'Nhôm', 'Nhựa (làm tay cầm chống nóng)'], 2, 'Kim loại dẫn nhiệt tốt.'),
    Q('Nước sôi ở?', ['0°C', '37°C', '100°C', '200°C'], 2, '100°C ở áp suất thường.'),
    Q('Âm thanh truyền nhanh nhất trong?', ['Khí (truyền trong không khí khi nói)', 'Rắn', 'Lỏng (truyền trong nước cho cá nghe)', 'Chân không'], 1, 'Vận tốc lớn nhất trong chất rắn.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Thực vật cần gì để sống', [
    Q('Thực vật cần gì để sống?', ['Chỉ đất', 'Chỉ nước', 'Chỉ ánh sáng', 'Nước, ánh sáng, không khí, chất khoáng'], 3, 'Cây cần nước, ánh sáng, không khí, dinh dưỡng.'),
    Q('Cây hút nước và muối khoáng từ?', ['Lá (nơi quang hợp tạo chất hữu cơ)', 'Hạt (cơ quan sinh sản, mọc cây mới)', 'Hoa (cơ quan sinh sản của cây)', 'Rễ qua đất'], 3, 'Rễ hút nước và khoáng từ đất.'),
    Q('Lá cây "thở" trao đổi khí qua các lỗ nhỏ gọi là?', ['Gân lá', 'Mạch dẫn (vận chuyển nước)', 'Khí khổng', 'Cuống lá (nối lá với cành)'], 2, 'Khí khổng nằm trên bề mặt lá.'),
    Q('Nếu thiếu ánh sáng lâu ngày, cây?', ['Tươi tốt hơn', 'Lớn nhanh', 'Đổi loài', 'Vàng úa, còi cọc, chết'], 3, 'Thiếu sáng → quang hợp kém → cây yếu.'),
    Q('Trồng cây trong chậu cần?', ['Để chỗ tối', 'Đất khô tuyệt đối', 'Không cần đất', 'Tưới nước hợp lý, có ánh sáng'], 3, 'Cây chậu vẫn cần đủ nước, sáng và đất tốt.'),
    Q('Cây ___ là cây sống trong nước.', ['phi lao', 'thông (mọc ở vùng núi cao mát)', 'xương rồng', 'bèo, sen, súng'], 3, 'Bèo, sen, súng là cây thuỷ sinh.'),
  ]),

  M(20, 'Quang hợp cơ bản', [
    Q('Quá trình "cây xanh dùng ánh sáng để tạo ra chất nuôi cây" gọi là?', ['Hô hấp', 'Quang hợp', 'Tiêu hoá', 'Bay hơi'], 1, 'Quang hợp xảy ra ở lá xanh, có ánh sáng.'),
    Q('Quang hợp cần?', ['Tiếng ồn', 'Bóng tối', 'Nhiệt cao', 'Ánh sáng, nước, CO₂'], 3, 'Nguyên liệu: nước + CO₂ + ánh sáng.'),
    Q('Sản phẩm quang hợp nhả ra là?', ['Khói (chất thải khi cháy)', 'CO₂ (cây hấp thụ chứ không nhả)', 'Bụi (lá lọc bụi từ không khí)', 'O₂ (ô-xi)'], 3, 'Cây nhả ô-xi — có lợi cho con người, động vật.'),
    Q('Quang hợp xảy ra chủ yếu ở?', ['Hoa (cơ quan sinh sản, ít diệp lục)', 'Hạt (nơi dự trữ chất dinh dưỡng)', 'Rễ (ở dưới đất, không có ánh sáng)', 'Lá xanh'], 3, 'Lá có diệp lục → nơi quang hợp chính.'),
    Q('Chất xanh trong lá gọi là?', ['Sắt (chất khoáng cần cho máu)', 'Đường (sản phẩm của quang hợp)', 'Muối (chất khoáng cây hút từ đất)', 'Diệp lục (chất diệp)'], 3, 'Diệp lục giúp hấp thụ ánh sáng để quang hợp.'),
    Q('Vì sao trồng nhiều cây xanh giúp không khí trong lành?', ['Cây toả khói', 'Cây hút âm', 'Cây hấp thụ CO₂, nhả O₂', 'Cây phát sáng'], 2, 'Cây xanh là "lá phổi" của môi trường.'),
  ]),

  M(21, 'Động vật cần gì để sống', [
    Q('Động vật cần gì để sống?', ['Chỉ ánh sáng', 'Thức ăn, nước, không khí, nơi ở', 'Chỉ tiếng động', 'Chỉ nước'], 1, 'Động vật cần đủ thức ăn, nước, khí thở, môi trường sống.'),
    Q('Động vật thở khí gì?', ['Hơi nước', 'CO₂ (khí thải khi thở ra)', 'Ni-tơ (chiếm phần lớn không khí)', 'Ô-xi'], 3, 'Hô hấp lấy O₂, thải CO₂.'),
    Q('Cá thở bằng?', ['Da (cách giun đất hô hấp)', 'Mũi (cơ quan thở của người)', 'Mang', 'Phổi (cơ quan thở của động vật trên cạn)'], 2, 'Cá thở bằng mang, lấy ô-xi hoà tan trong nước.'),
    Q('Loài nào thở bằng phổi?', ['Ếch (khi trưởng thành)', 'Trai (động vật thân mềm sống ở nước)', 'Tôm (thở bằng mang dưới nước)', 'Cá chép'], 0, 'Ếch trưởng thành thở bằng phổi và da.'),
    Q('Chim bay được nhờ?', ['Đuôi cá', 'Vẩy (giúp cá bơi, không giúp bay)', 'Mang (giúp thở dưới nước)', 'Lông và cánh'], 3, 'Chim có lông vũ + cánh thích nghi với bay.'),
    Q('Động vật ngủ đông là để?', ['Lột xác', 'Tiết kiệm năng lượng khi thiếu thức ăn', 'Học tập', 'Đẹp lông'], 1, 'Gấu, sóc… ngủ đông để vượt mùa khan thức ăn.'),
  ]),

  M(22, 'Chuỗi thức ăn', [
    Q('"Chuỗi thức ăn" mô tả?', ['Sinh vật này ăn sinh vật kia theo trình tự', 'Cách nấu ăn', 'Hàng quán', 'Bữa cơm'], 0, 'Mắt xích: cỏ → hươu → hổ.'),
    Q('Sinh vật bắt đầu chuỗi thức ăn thường là?', ['Cây xanh (sinh vật sản xuất)', 'Vi khuẩn', 'Con người', 'Động vật ăn thịt'], 0, 'Cây xanh tự tạo chất hữu cơ → khởi đầu chuỗi.'),
    Q('Trong chuỗi: Cỏ → Sâu → Chim → ?, sinh vật nào ăn chim?', ['Cỏ (sinh vật mở đầu chuỗi)', 'Sâu (ăn cỏ, bị chim ăn)', 'Diều hâu / Rắn', 'Đất (môi trường, không phải sinh vật)'], 2, 'Sinh vật ăn thịt bậc cao như diều hâu, rắn.'),
    Q('Sinh vật "ăn thực vật" gọi là?', ['Sản xuất', 'Ăn thịt', 'Phân huỷ', 'Ăn cỏ (ăn thực vật)'], 3, 'Trâu, bò, hươu… ăn thực vật.'),
    Q('Sinh vật phân huỷ (vi khuẩn, nấm) đóng vai trò?', ['Trang trí', 'Săn mồi', 'Phát sáng', 'Phân huỷ xác sinh vật trả chất cho đất'], 3, 'Phân huỷ giúp khép kín vòng vật chất.'),
    Q('Nếu hổ bị tuyệt chủng trong rừng, hươu nai có thể?', ['Tăng quá nhiều, phá rừng', 'Đổi loài', 'Bay đi', 'Giảm mạnh'], 0, 'Thiếu kẻ săn mồi → quần thể con mồi tăng quá mức.'),
  ]),

  M(23, 'Con người — dinh dưỡng', [
    Q('Bốn nhóm chất dinh dưỡng chính:', ['Đá, đất, nước, khí', 'Vàng, bạc, đồng, sắt', 'Hoa, lá, cành, rễ', 'Chất bột, đạm, béo, vitamin & khoáng'], 3, '4 nhóm: bột-đường, đạm, béo, vitamin & khoáng chất.'),
    Q('Cơm, bánh mì, khoai cung cấp chủ yếu?', ['Khoáng chất', 'Vitamin', 'Đạm (có nhiều trong thịt cá trứng)', 'Chất bột - đường'], 3, 'Cơm, bánh mì, khoai = nguồn tinh bột.'),
    Q('Thịt, cá, trứng, đậu cung cấp chủ yếu?', ['Đạm', 'Nước (có trong hầu hết thức ăn)', 'Béo (có nhiều trong dầu, mỡ, bơ)', 'Đường (có nhiều trong bánh kẹo)'], 0, 'Chất đạm cần cho xây dựng cơ thể.'),
    Q('Dầu, mỡ, bơ cung cấp chủ yếu?', ['Khoáng', 'Béo', 'Vitamin', 'Đạm (có nhiều trong thịt, cá, trứng)'], 1, 'Chất béo cho năng lượng.'),
    Q('Rau xanh, hoa quả giàu?', ['Tinh bột tuyệt đối', 'Đạm (có nhiều trong thịt cá đậu)', 'Vitamin và chất xơ', 'Béo (có nhiều trong dầu mỡ bơ)'], 2, 'Rau quả cung cấp vitamin + chất xơ.'),
    Q('Ăn uống "cân đối" nghĩa là?', ['Ăn rất nhiều một món', 'Bỏ rau', 'Chỉ ăn thịt', 'Đủ 4 nhóm chất + đa dạng'], 3, 'Cân đối = đủ nhóm chất, đa dạng món.'),
  ]),

  M(24, 'Vitamin & chất khoáng', [
    Q('Vitamin A có nhiều trong?', ['Nước lọc', 'Cà rốt, gấc, rau xanh đậm', 'Muối (chứa khoáng natri)', 'Đường (cho năng lượng nhanh)'], 1, 'Cà rốt, gấc giàu beta-caroten → vitamin A.'),
    Q('Vitamin A giúp?', ['Sáng mắt', 'Chắc răng', 'Mọc tóc', 'Đỏ má (do hồng cầu dưới da)'], 0, 'Vitamin A giúp mắt sáng, niêm mạc khoẻ.'),
    Q('Vitamin C có nhiều trong?', ['Bơ (giàu chất béo)', 'Cam, chanh, ổi', 'Đường (cho năng lượng nhanh)', 'Muối (chứa khoáng natri)'], 1, 'Trái cây họ cam, ổi rất giàu vitamin C.'),
    Q('Vitamin D giúp?', ['Mọc tóc', 'Đỏ má (do tuần hoàn máu dưới da)', 'Hấp thụ canxi, chắc xương', 'Đen tóc'], 2, 'Vitamin D giúp xương chắc, hấp thụ canxi.'),
    Q('Canxi có nhiều trong?', ['Nước lọc', 'Dầu ăn', 'Đường (cho năng lượng nhanh)', 'Sữa, tôm, cua, cá nhỏ'], 3, 'Sữa và hải sản nhỏ giàu canxi.'),
    Q('Sắt có nhiều trong?', ['Mì gói', 'Đường trắng', 'Thịt đỏ, rau lá xanh đậm', 'Bơ (giàu chất béo, ít sắt)'], 2, 'Thịt đỏ, gan, rau xanh đậm giàu sắt — ngừa thiếu máu.'),
  ]),

  M(25, 'An toàn thực phẩm', [
    Q('Thực phẩm an toàn cần?', ['Quá hạn cũng được', 'Bẩn cũng được', 'Có nấm mốc', 'Tươi sạch, rõ nguồn gốc, hạn dùng'], 3, 'Tươi sạch, đúng hạn, nguồn gốc rõ ràng.'),
    Q('Trước khi ăn, em nên?', ['Không cần rửa', 'Rửa tay bằng xà phòng', 'Để nguyên tay bẩn', 'Lau tay vào áo'], 1, 'Rửa tay diệt vi khuẩn — phòng bệnh.'),
    Q('Rau ăn sống cần được?', ['Phơi nắng cháy', 'Rửa sạch nhiều lần dưới vòi', 'Để bẩn', 'Đốt cháy lá trên bếp'], 1, 'Rửa sạch rau quả trước khi ăn.'),
    Q('Thức ăn ôi thiu KHÔNG nên ăn vì?', ['Tăng cân', 'Ngon hơn', 'Gây ngộ độc, đau bụng', 'Bổ dưỡng'], 2, 'Ngộ độc thực phẩm — nguy hiểm.'),
    Q('Sữa, thịt sống nên bảo quản ở?', ['Ngoài nắng', 'Bếp (cạnh bếp ấm)', 'Tủ lạnh', 'Trên cây'], 2, 'Tủ lạnh giữ thực phẩm tươi lâu.'),
    Q('Sau khi đi vệ sinh, em phải?', ['Đi chơi tiếp', 'Không cần làm gì', 'Ăn ngay', 'Rửa tay với xà phòng'], 3, 'Rửa tay bằng xà phòng — phòng bệnh đường ruột.'),
  ]),

  M(26, 'Phòng tránh bệnh', [
    Q('Tiêm chủng để?', ['Cao lớn', 'Đẹp da', 'Đen tóc', 'Phòng các bệnh truyền nhiễm'], 3, 'Vắc-xin tạo miễn dịch, phòng bệnh.'),
    Q('Bệnh nào do thiếu vitamin A?', ['Quáng gà, khô mắt', 'Tiểu đường', 'Còi xương', 'Bướu cổ'], 0, 'Thiếu vitamin A → khô mắt, quáng gà.'),
    Q('Bệnh nào do thiếu vitamin D / canxi?', ['Còi xương', 'Sốt xuất huyết', 'Quáng gà', 'Cảm cúm'], 0, 'Thiếu vitamin D/canxi → còi xương ở trẻ.'),
    Q('Để phòng cảm cúm, nên?', ['Không ngủ', 'Ướt mưa lâu', 'Giữ ấm, rửa tay, đeo khẩu trang khi ốm', 'Bỏ ăn (để không lây cho ai)'], 2, 'Giữ ấm + vệ sinh giúp phòng cúm.'),
    Q('Bệnh sốt xuất huyết lây qua?', ['Không khí', 'Muỗi vằn đốt', 'Ăn cơm', 'Bắt tay'], 1, 'Muỗi vằn (Aedes) truyền sốt xuất huyết.'),
    Q('Cách phòng muỗi tại nhà:', ['Đậy nắp lu, ngủ màn, diệt bọ gậy', 'Mở cửa đêm', 'Để nước đọng', 'Trồng nhiều ao tù'], 0, 'Diệt nguồn nước đọng, ngủ màn để phòng muỗi.'),
  ]),

  M(27, 'Vận động & nghỉ ngơi', [
    Q('Tập thể dục đều đặn giúp?', ['Buồn ngủ', 'Béo phì', 'Khoẻ mạnh, dẻo dai', 'Yếu đi'], 2, 'Vận động giúp cơ thể khoẻ mạnh.'),
    Q('Học sinh nên ngủ mỗi đêm khoảng?', ['9–11 giờ', '2 giờ', '3–4 giờ', '14 giờ'], 0, 'HS tiểu học cần ngủ 9–11 giờ/đêm.'),
    Q('Ngồi học đúng tư thế giúp?', ['Mỏi mắt nhanh', 'Cong lưng', 'Đau lưng', 'Tránh vẹo cột sống và cận thị'], 3, 'Tư thế đúng bảo vệ cột sống và mắt.'),
    Q('Khoảng cách mắt - sách khi đọc nên là?', ['2 m', '1 m', '25–30 cm', '10 cm'], 2, '25–30 cm bảo vệ mắt khỏi cận thị.'),
    Q('Sau 30–45 phút học, nên?', ['Nhìn điện thoại', 'Nằm xuống đất', 'Học tiếp luôn', 'Nghỉ vài phút, nhìn xa, vận động nhẹ'], 3, 'Nghỉ ngắn giúp mắt và não phục hồi.'),
    Q('Hoạt động ngoài trời (ánh nắng vừa) giúp?', ['Nóng đầu', 'Không có lợi', 'Tổng hợp vitamin D', 'Mất nước hoàn toàn'], 2, 'Nắng sớm giúp da tạo vitamin D.'),
  ]),

  M(28, 'Tiêu hoá thức ăn', [
    Q('Cơ quan nào bắt đầu tiêu hoá thức ăn?', ['Dạ dày', 'Ruột non', 'Gan (tiết mật giúp tiêu mỡ)', 'Miệng'], 3, 'Tiêu hoá bắt đầu ở miệng nhờ nhai và nước bọt.'),
    Q('Nhai kỹ giúp?', ['Tiêu hoá tốt hơn', 'Đói nhanh', 'Mệt mỏi', 'Đau răng'], 0, 'Nhai kỹ giúp dạ dày bớt việc và hấp thu tốt.'),
    Q('Thức ăn sau khi nuốt đi xuống đâu?', ['Não (qua dây thần kinh)', 'Tim (qua mạch máu)', 'Phổi (qua ống khí quản)', 'Dạ dày qua thực quản'], 3, 'Thức ăn → thực quản → dạ dày.'),
    Q('Nơi hấp thụ chất dinh dưỡng chính là?', ['Ruột non', 'Dạ dày', 'Ruột già', 'Thận (lọc máu tạo nước tiểu)'], 0, 'Ruột non hấp thụ dinh dưỡng.'),
    Q('Chất thải rắn được thải ra qua?', ['Miệng (chỉ nhận thức ăn vào)', 'Tai (cơ quan nghe)', 'Hậu môn', 'Mũi (cơ quan thở và ngửi)'], 2, 'Phân được đào thải qua hậu môn.'),
    Q('Để hệ tiêu hoá khoẻ, KHÔNG nên?', ['Uống đủ nước', 'Ăn nhiều rau', 'Ăn vội, ăn quá no, đồ ôi thiu', 'Nhai kỹ'], 2, 'Ăn vội, ăn quá no, đồ thiu có hại tiêu hoá.'),
  ]),

  M(29, 'Hô hấp', [
    Q('Cơ quan hô hấp chính của người là?', ['Phổi', 'Gan (tiết mật, lọc chất độc)', 'Thận (lọc máu, tạo nước tiểu)', 'Tim (bơm máu khắp cơ thể)'], 0, 'Phổi đảm nhiệm trao đổi khí.'),
    Q('Khi hít vào, ta lấy khí?', ['Hơi nước', 'CO₂ (khí thải khi thở ra)', 'Khí trơ', 'O₂'], 3, 'Hít vào lấy ô-xi.'),
    Q('Khi thở ra, ta thải khí?', ['Hi-đrô', 'CO₂ (và hơi nước)', 'Ni-tơ (chiếm phần lớn không khí)', 'O₂ (khí lấy vào khi hít)'], 1, 'Thở ra thải CO₂ và hơi nước.'),
    Q('Để phổi khoẻ, em nên?', ['Tập thể dục, hít thở sâu, ở nơi trong lành', 'Ngủ trong khói', 'Không vận động', 'Hít khói thuốc'], 0, 'Không khí trong lành + vận động → phổi khoẻ.'),
    Q('Hút thuốc lá gây hại?', ['Đẹp phổi', 'Sáng mắt', 'Ung thư phổi, bệnh hô hấp', 'Tăng chiều cao'], 2, 'Thuốc lá có hại nặng nề cho phổi.'),
    Q('Khi cảm cúm, nên đeo khẩu trang vì?', ['Đỡ đói', 'Nóng người', 'Tránh lây cho người khác', 'Cho đẹp'], 2, 'Khẩu trang ngăn giọt bắn — giảm lây.'),
  ]),

  M(30, 'Tuần hoàn — tim & máu', [
    Q('Cơ quan bơm máu trong cơ thể là?', ['Tim', 'Não (điều khiển cơ thể)', 'Gan (lọc chất độc trong máu)', 'Phổi (trao đổi khí với không khí)'], 0, 'Tim co bóp bơm máu khắp cơ thể.'),
    Q('Máu mang gì đến các tế bào?', ['Chỉ CO₂', 'Chỉ khói và bụi từ ngoài vào', 'Chỉ nước', 'Ô-xi và chất dinh dưỡng'], 3, 'Máu vận chuyển O₂ và dinh dưỡng.'),
    Q('Nhịp tim người lúc nghỉ khoảng?', ['5 lần/phút', '300 lần/phút', '10 lần/phút', '60–100 lần/phút'], 3, 'Trung bình 60–100 nhịp/phút khi nghỉ.'),
    Q('Khi chạy nhanh, tim đập?', ['Ngừng (để nghỉ lấy sức)', 'Không đổi', 'Nhanh hơn', 'Chậm hơn'], 2, 'Vận động → tim đập nhanh để cấp O₂.'),
    Q('Để tim khoẻ, nên?', ['Ăn nhiều mỡ', 'Hút thuốc', 'Tập thể dục đều, ăn ít muối-đường, ngủ đủ', 'Ngồi yên cả ngày'], 2, 'Lối sống lành mạnh giúp tim khoẻ.'),
    Q('Máu chảy trong các ống gọi là?', ['Niệu quản', 'Khí quản', 'Thực quản', 'Mạch máu'], 3, 'Mạch máu (động mạch, tĩnh mạch, mao mạch).'),
  ]),

  M(31, 'Môi trường & rác thải', [
    Q('"Môi trường" gồm?', ['Chỉ con người', 'Chỉ ô tô', 'Không khí, nước, đất, sinh vật xung quanh', 'Chỉ ngôi nhà'], 2, 'Môi trường bao gồm tất cả những gì xung quanh ta.'),
    Q('Loại rác nào KHÔNG phân huỷ trong tự nhiên?', ['Cơm thừa', 'Túi ni-lông, chai nhựa', 'Lá cây', 'Vỏ trái cây'], 1, 'Nhựa, ni-lông cần hàng trăm năm để phân huỷ.'),
    Q('Phân loại rác giúp?', ['Mất thời gian vô ích', 'Hôi hơn', 'Khó dọn hơn', 'Dễ tái chế, giảm ô nhiễm'], 3, 'Phân loại giúp tái chế và xử lý hiệu quả.'),
    Q('Rác hữu cơ (vỏ rau, lá) có thể?', ['Ủ làm phân bón', 'Chôn sâu mãi', 'Ném ra sông', 'Đốt thoải mái'], 0, 'Ủ phân hữu cơ cho cây trồng.'),
    Q('Việc nên làm với chai nhựa cũ:', ['Vứt xuống sông', 'Chôn dưới đất', 'Tái chế hoặc gom bán phế liệu', 'Đốt cháy'], 2, 'Tái chế giúp giảm rác.'),
    Q('Đốt nhựa thải ra?', ['Khí độc hại', 'Khí ô-xi', 'Khí thơm', 'Nước sạch'], 0, 'Đốt nhựa sinh khí độc — ô nhiễm không khí.'),
  ]),

  M(32, 'Tái chế — 3R', [
    Q('"3R" trong môi trường gồm?', ['Rain – River – Rock', 'Read – Run – Rest', 'Reduce – Reuse – Recycle', 'Red – Round – Real'], 2, '3R = Giảm – Tái sử dụng – Tái chế.'),
    Q('"Reduce" nghĩa là?', ['Tái chế', 'Vứt bỏ', 'Tái sử dụng', 'Giảm sử dụng'], 3, 'Reduce = giảm tiêu thụ.'),
    Q('"Reuse" nghĩa là?', ['Chôn xuống đất cho phân huỷ', 'Vứt đi', 'Đốt để khỏi chiếm chỗ', 'Dùng lại nhiều lần'], 3, 'Reuse = dùng lại đồ còn tốt.'),
    Q('"Recycle" nghĩa là?', ['Bán giấy', 'Chôn lấp rác xuống đất', 'Tái chế thành sản phẩm mới', 'Đốt rác để giảm khối lượng'], 2, 'Recycle = tái chế.'),
    Q('Hành động "Reduce" là?', ['Đốt rác', 'Mang túi vải đi chợ thay túi ni-lông mới', 'Vứt bừa', 'Dùng nhiều túi mới'], 1, 'Túi vải dùng nhiều lần — giảm rác nhựa.'),
    Q('Pin cũ nên?', ['Chôn dưới sân', 'Vứt thùng rác chung', 'Gom riêng tới điểm thu pin', 'Đốt cho cháy hết vỏ pin'], 2, 'Pin chứa kim loại nặng — phải xử lý riêng.'),
  ]),

  M(33, 'Tiết kiệm điện - nước', [
    Q('Cách tiết kiệm điện ở nhà:', ['Tắt thiết bị khi không dùng', 'Để TV chế độ chờ liên tục', 'Mở tủ lạnh lâu', 'Bật đèn 24/24'], 0, 'Tắt khi không dùng — quy tắc số 1.'),
    Q('Bóng đèn nào tiết kiệm điện hơn?', ['Đèn sợi đốt', 'Đèn dầu', 'Đèn nến', 'Đèn LED'], 3, 'LED tiêu thụ ít điện và bền lâu.'),
    Q('Khi đánh răng, em nên?', ['Để vòi chảy liên tục', 'Mở 2 vòi cùng lúc', 'Khoá vòi khi không dùng', 'Mở mạnh vòi'], 2, 'Khoá vòi tiết kiệm hàng lít nước/lần.'),
    Q('Nước vo gạo có thể dùng?', ['Đổ đi (lãng phí nguồn nước)', 'Uống ngay', 'Tưới cây', 'Đốt cùng rác hữu cơ'], 2, 'Nước vo gạo tưới cây rất tốt.'),
    Q('Mở cửa sổ ban ngày giúp?', ['Tăng điện', 'Hỏng tường', 'Tốn nước', 'Tận dụng ánh sáng tự nhiên, tiết kiệm đèn'], 3, 'Tận dụng nắng → ít cần bật đèn.'),
    Q('Tiết kiệm điện - nước có lợi vì?', ['Không tác dụng', 'Hết nước nhanh', 'Tốn tiền hơn', 'Giảm chi phí + bảo vệ tài nguyên'], 3, 'Vừa tiết kiệm tiền vừa bảo vệ môi trường.'),
  ]),

  M(34, 'Bảo vệ động - thực vật quý', [
    Q('Việc làm bảo vệ rừng:', ['Săn bắt thú', 'Chặt cây bừa', 'Trồng cây, không đốt rừng, báo lâm tặc', 'Đốt rừng làm nương'], 2, 'Trồng + bảo vệ rừng là việc cần thiết.'),
    Q('Sinh vật quý hiếm cần được?', ['Bán đi', 'Nuôi nhốt làm cảnh', 'Săn bắt', 'Bảo vệ, ghi vào Sách Đỏ'], 3, 'Sách Đỏ ghi danh loài cần bảo vệ.'),
    Q('Hành động đúng với động vật hoang dã:', ['Ăn thịt', 'Chụp ảnh selfie ép buộc', 'Mua làm thú cưng', 'Không săn bắt, không mua bán'], 3, 'Không săn bắt, mua bán động vật hoang dã.'),
    Q('Rừng có vai trò?', ['Giữ nước, chống xói mòn, cho gỗ và O₂', 'Phá đất', 'Gây lũ lụt', 'Không có ích'], 0, 'Rừng là "lá phổi xanh" và bảo vệ đất.'),
    Q('Hậu quả của phá rừng:', ['Mát hơn', 'Đẹp cảnh', 'Tăng O₂', 'Lũ lụt, sạt lở, mất loài'], 3, 'Phá rừng → lũ lụt, sạt lở, mất đa dạng sinh học.'),
    Q('Việc đốt rừng làm nương rẫy KHÔNG nên vì?', ['Tốt cho cây', 'Có lợi', 'Gây cháy lớn, ô nhiễm, mất rừng', 'Nhanh có đất'], 2, 'Đốt rừng gây nhiều hệ luỵ nghiêm trọng.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Khí cây xanh thải ra trong quang hợp:', ['Ni-tơ (chiếm 78% không khí)', 'Hi-đrô', 'CO₂ (khí cây hấp thụ vào)', 'O₂'], 3, 'Cây nhả ô-xi khi quang hợp.'),
    Q('Mắt nhìn được nhờ?', ['Vị (cảm nhận qua lưỡi)', 'Ánh sáng vào mắt', 'Âm thanh', 'Mùi (cảm nhận qua mũi)'], 1, 'Ánh sáng phản chiếu/từ vật vào mắt.'),
    Q('Vật cách nhiệt tốt:', ['Đồng (kim loại dẫn nhiệt tốt)', 'Nhôm (kim loại dẫn nhiệt tốt)', 'Gỗ, vải', 'Sắt (kim loại dẫn nhiệt tốt)'], 2, 'Gỗ, vải, nhựa cách nhiệt.'),
    Q('Chuỗi thức ăn bắt đầu thường là?', ['Cá mập', 'Hổ (động vật ăn thịt bậc cao)', 'Diều hâu', 'Cỏ (cây xanh)'], 3, 'Cây xanh khởi đầu chuỗi.'),
    Q('"3R" gồm:', ['Real – Round – Red', 'Rain – River – Rock', 'Reduce – Reuse – Recycle', 'Run – Read – Rest'], 2, 'Giảm – Tái dùng – Tái chế.'),
    Q('Để phòng sốt xuất huyết:', ['Mở cửa đêm', 'Để nước đọng', 'Diệt bọ gậy, ngủ màn, đậy nắp lu', 'Trồng ao tù'], 2, 'Diệt nguồn nước đọng + ngủ màn.'),
  ], { difficulty: 3 }),
];

export const P4KH_SCENARIOS = indexBy(P4KH_WEEKS);
