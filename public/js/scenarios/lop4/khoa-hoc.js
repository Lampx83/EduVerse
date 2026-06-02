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
    Q('Nước trong tự nhiên có tính chất nào?', ['Có hình dạng cố định', 'Trong suốt, không màu, không mùi, không vị', 'Có màu xanh', 'Có vị ngọt'], 1, 'Nước nguyên chất trong suốt, không màu, không mùi, không vị.'),
    Q('Nước có hình dạng như thế nào?', ['Hình tròn', 'Hình vuông', 'Theo hình vật đựng', 'Cố định'], 2, 'Nước (chất lỏng) không có hình dạng nhất định, lấy hình của vật chứa.'),
    Q('Nước có chảy được không?', ['Không, đứng yên', 'Có, chảy từ cao xuống thấp', 'Chỉ chảy ngang', 'Chỉ chảy lên cao'], 1, 'Nước chảy từ nơi cao xuống nơi thấp.'),
    Q('Khi đổ nước vào cốc thuỷ tinh, ta thấy?', ['Cốc đổi màu', 'Có thể nhìn xuyên qua nước', 'Nước biến mất', 'Nước nổ'], 1, 'Nước trong suốt nên ta nhìn xuyên qua được.'),
    Q('Nước có thể hoà tan được chất nào sau đây?', ['Cát', 'Dầu ăn', 'Muối ăn', 'Sỏi'], 2, 'Muối, đường tan trong nước; cát, dầu, sỏi không.'),
    Q('Tại sao nước không có vị?', ['Vì nước ngọt', 'Vì nước nguyên chất không chứa chất tạo vị', 'Vì nước nóng', 'Vì nước đông'], 1, 'Nước nguyên chất là vô vị; vị có là do tạp chất hoà tan.'),
  ]),

  M(2, 'Ba thể của nước', [
    Q('Nước tồn tại ở mấy thể?', ['1', '2', '3', '4'], 2, 'Ba thể: rắn (đá), lỏng (nước), khí (hơi).'),
    Q('Nước ở thể rắn gọi là?', ['Hơi nước', 'Mây', 'Nước đá', 'Sương'], 2, 'Nước đá là nước ở thể rắn.'),
    Q('Khi đun sôi, nước chuyển thành?', ['Đá', 'Hơi nước', 'Sữa', 'Đường'], 1, 'Đun sôi → nước bay hơi thành hơi nước.'),
    Q('Khi để nước trong tủ lạnh dưới 0°C, nước trở thành?', ['Hơi nước', 'Đá (rắn)', 'Bốc hơi', 'Sôi'], 1, 'Dưới 0°C, nước đông đặc thành đá.'),
    Q('Hơi nước thuộc thể?', ['Rắn', 'Lỏng', 'Khí', 'Đặc'], 2, 'Hơi nước là thể khí, không nhìn thấy bằng mắt thường.'),
    Q('Quá trình "nước → hơi" gọi là?', ['Bay hơi', 'Đông đặc', 'Ngưng tụ', 'Tan chảy'], 0, 'Bay hơi: lỏng → khí.'),
  ]),

  M(3, 'Vòng tuần hoàn của nước', [
    Q('Vòng tuần hoàn của nước trong tự nhiên gồm các giai đoạn chính:', ['Bay hơi – ngưng tụ – mưa', 'Đông đặc – tan chảy', 'Sôi – đông', 'Chảy – ngấm'], 0, 'Bay hơi → ngưng tụ thành mây → mưa rơi xuống đất.'),
    Q('Mây hình thành do?', ['Hơi nước ngưng tụ', 'Khói bụi', 'Gió thổi', 'Ánh sáng'], 0, 'Hơi nước gặp lạnh ngưng tụ thành các giọt nước nhỏ tạo mây.'),
    Q('Quá trình "hơi → giọt nước" gọi là?', ['Bay hơi', 'Ngưng tụ', 'Đông đặc', 'Sôi'], 1, 'Ngưng tụ: khí → lỏng.'),
    Q('Năng lượng chính làm nước bay hơi là?', ['Mặt trăng', 'Mặt trời', 'Gió mạnh', 'Đất'], 1, 'Nhiệt từ Mặt Trời làm nước bay hơi.'),
    Q('Nước mưa rơi xuống đất rồi đi đâu?', ['Bốc hơi hoàn toàn', 'Ngấm vào đất / chảy ra sông biển', 'Biến mất', 'Đông đặc'], 1, 'Nước mưa ngấm xuống đất hoặc chảy theo sông, suối ra biển.'),
    Q('Vòng tuần hoàn nước rất quan trọng vì?', ['Tạo gió', 'Cung cấp nước ngọt cho sự sống', 'Làm Trái Đất lạnh', 'Không có tác dụng'], 1, 'Vòng tuần hoàn duy trì nguồn nước cho sự sống.'),
  ]),

  M(4, 'Nước cần cho sự sống', [
    Q('Cơ thể người chứa khoảng bao nhiêu % nước?', ['10%', '30%', '70%', '99%'], 2, 'Cơ thể người trưởng thành chứa khoảng 70% nước.'),
    Q('Sinh vật nào KHÔNG cần nước?', ['Cây xanh', 'Con người', 'Động vật', 'Không có (đều cần)'], 3, 'Mọi sinh vật đều cần nước để sống.'),
    Q('Mỗi ngày em nên uống khoảng?', ['0,5 lít', '1,5 – 2 lít', '5 lít', '10 lít'], 1, 'Khuyến nghị 1,5–2 lít nước/ngày cho học sinh tiểu học (tuỳ tuổi).'),
    Q('Nước được dùng trong sinh hoạt để?', ['Chỉ để uống', 'Uống, nấu ăn, tắm rửa, giặt giũ', 'Chỉ để tắm', 'Chỉ để tưới cây'], 1, 'Nước phục vụ nhiều hoạt động sinh hoạt.'),
    Q('Trong nông nghiệp, nước dùng để?', ['Đốt rác', 'Tưới cây, nuôi thuỷ sản', 'Trang trí', 'Sưởi ấm'], 1, 'Nước tưới cây, nuôi cá tôm, chăn nuôi.'),
    Q('Thiếu nước cây sẽ?', ['Tươi tốt', 'Héo, chết', 'Lớn nhanh', 'Đổi màu xanh hơn'], 1, 'Thiếu nước cây héo và chết.'),
  ]),

  M(5, 'Ô nhiễm nước & bảo vệ nguồn nước', [
    Q('Nguyên nhân chính gây ô nhiễm nước?', ['Mưa', 'Rác và nước thải xả bừa bãi', 'Ánh nắng', 'Gió'], 1, 'Rác thải, nước thải sinh hoạt và công nghiệp gây ô nhiễm.'),
    Q('Nước bẩn có hại như thế nào?', ['Không sao', 'Gây bệnh đường ruột, dịch bệnh', 'Làm cây xanh', 'Làm trời mát'], 1, 'Nước bẩn truyền bệnh tiêu chảy, tả, lị...'),
    Q('Cách nào KHÔNG bảo vệ nguồn nước?', ['Không vứt rác xuống ao hồ', 'Xả nước thải chưa xử lý ra sông', 'Trồng cây quanh nguồn nước', 'Tiết kiệm nước'], 1, 'Xả thải chưa xử lý làm ô nhiễm — KHÔNG nên.'),
    Q('Để có nước sạch uống, cần?', ['Uống thẳng nước sông', 'Đun sôi hoặc lọc trước khi uống', 'Phơi nắng', 'Để qua đêm'], 1, 'Nên đun sôi hoặc lọc để diệt vi khuẩn.'),
    Q('Hành động nào tiết kiệm nước?', ['Để vòi chảy khi đánh răng', 'Khoá vòi khi không dùng', 'Tắm rất lâu', 'Rửa xe bằng vòi xịt liên tục'], 1, 'Khoá vòi khi không dùng để tiết kiệm nước.'),
    Q('Hồ ao bị "phú dưỡng" (nhiều tảo) thường do?', ['Quá nhiều ánh sáng', 'Nước thải nhiều chất dinh dưỡng', 'Có nhiều cá', 'Mưa nhiều'], 1, 'Nước thải chứa nhiều đạm/lân làm tảo phát triển mạnh.'),
  ]),

  M(6, 'Không khí — tính chất', [
    Q('Không khí có ở đâu?', ['Chỉ trong phòng', 'Khắp nơi quanh ta', 'Chỉ trên cao', 'Chỉ dưới đất'], 1, 'Không khí có mặt khắp nơi xung quanh chúng ta.'),
    Q('Không khí có tính chất gì?', ['Có màu đỏ', 'Không màu, không mùi, trong suốt', 'Có mùi thơm', 'Có hình vuông'], 1, 'Không khí trong suốt, không màu, không mùi, không vị.'),
    Q('Không khí có hình dạng?', ['Hình cầu', 'Cố định', 'Theo hình vật chứa', 'Hình tam giác'], 2, 'Không khí (chất khí) chiếm hình dạng vật chứa.'),
    Q('Để chứng minh không khí có thật, ta có thể?', ['Nghe radio', 'Quạt vào mặt và cảm thấy gió', 'Nhìn lên trời', 'Đo nhiệt độ'], 1, 'Cảm nhận gió hoặc thấy bóng bay phồng → có không khí.'),
    Q('Không khí có chiếm chỗ không?', ['Không', 'Có (như khi thổi bóng bay căng lên)', 'Chỉ trong nước', 'Chỉ trong đất'], 1, 'Không khí chiếm chỗ — bóng bay căng do không khí bên trong.'),
    Q('Không khí có thể nén được không?', ['Không', 'Có (như bơm xe đạp)', 'Chỉ khi nóng', 'Chỉ khi lạnh'], 1, 'Không khí nén lại được — ví dụ bơm xe đạp.'),
  ]),

  M(7, 'Thành phần không khí', [
    Q('Khí nào chiếm tỉ lệ lớn nhất trong không khí?', ['Ô-xi', 'Ni-tơ', 'Các-bô-níc', 'Hơi nước'], 1, 'Ni-tơ (~78%) chiếm tỉ lệ lớn nhất.'),
    Q('Khí nào cần cho sự thở của con người và động vật?', ['Ni-tơ', 'Ô-xi', 'Các-bô-níc', 'Khí trơ'], 1, 'Ô-xi (~21%) duy trì sự sống.'),
    Q('Khí nào cây xanh hấp thụ để quang hợp?', ['Ô-xi', 'Ni-tơ', 'Các-bô-níc', 'Hi-đrô'], 2, 'Cây xanh hấp thụ CO₂ và nhả O₂.'),
    Q('Khí nào duy trì sự cháy?', ['Ni-tơ', 'Ô-xi', 'Các-bô-níc', 'Hơi nước'], 1, 'Ô-xi duy trì sự cháy.'),
    Q('Hoạt động nào tăng CO₂ trong không khí?', ['Trồng cây', 'Đốt nhiên liệu (xăng, than)', 'Quang hợp', 'Tưới nước'], 1, 'Đốt nhiên liệu thải ra nhiều CO₂.'),
    Q('Khi cây đèn dầu cháy, nó "tiêu thụ" khí gì?', ['CO₂', 'Ô-xi', 'Hơi nước', 'Ni-tơ'], 1, 'Sự cháy tiêu thụ ô-xi và toả nhiệt.'),
  ]),

  M(8, 'Gió — không khí chuyển động', [
    Q('Gió là gì?', ['Không khí đứng yên', 'Không khí chuyển động', 'Hơi nước bay', 'Ánh sáng'], 1, 'Gió là không khí chuyển động.'),
    Q('Gió hình thành chủ yếu do?', ['Trời lạnh', 'Sự chênh lệch nhiệt độ giữa các vùng', 'Mặt trăng', 'Ngôi sao'], 1, 'Chênh lệch nhiệt độ → chênh lệch áp suất → gió thổi.'),
    Q('Cấp gió nào mạnh nhất gây thiệt hại lớn?', ['Gió nhẹ', 'Gió vừa', 'Gió bão', 'Lặng gió'], 2, 'Bão (cấp ≥8) gây thiệt hại nặng.'),
    Q('Lợi ích của gió:', ['Chỉ gây hại', 'Phát điện gió, thổi cánh buồm, làm mát', 'Không có ích', 'Làm nóng'], 1, 'Gió giúp phát điện, đẩy thuyền buồm, làm mát…'),
    Q('Khi có bão, em nên?', ['Ra ngoài chơi', 'Ở trong nhà, tránh xa cửa kính, cây to', 'Trèo cây xem', 'Đi tắm sông'], 1, 'Trú ẩn an toàn trong nhà.'),
    Q('Diều bay được nhờ?', ['Mặt trời', 'Sức gió', 'Mưa', 'Tay người (không cần gió)'], 1, 'Sức gió đẩy diều bay lên cao.'),
  ]),

  M(9, 'Bảo vệ bầu không khí', [
    Q('Nguyên nhân chính làm ô nhiễm không khí?', ['Cây xanh', 'Khói bụi từ phương tiện, nhà máy, rác', 'Mưa', 'Sông biển'], 1, 'Khói xe, khói nhà máy, đốt rác… là nguồn ô nhiễm chính.'),
    Q('Hít phải không khí ô nhiễm có thể bị?', ['Khoẻ hơn', 'Bệnh hô hấp, dị ứng', 'Tăng chiều cao', 'Sáng mắt'], 1, 'Ô nhiễm gây ho, viêm phổi, hen suyễn…'),
    Q('Cách bảo vệ bầu không khí trong lành?', ['Đốt rác bừa bãi', 'Trồng cây, dùng xe đạp/đi bộ, hạn chế đốt', 'Hút thuốc nhiều', 'Phá rừng'], 1, 'Trồng cây, đi xe đạp, không đốt rác.'),
    Q('Cây xanh giúp không khí như thế nào?', ['Hút bụi, nhả O₂', 'Thải khói', 'Hút nước', 'Không tác dụng'], 0, 'Cây xanh hấp thụ CO₂, bụi và nhả O₂.'),
    Q('Khi đi đường có nhiều khói bụi, em nên?', ['Nín thở mãi', 'Đeo khẩu trang', 'Hít thật sâu', 'Chạy nhanh'], 1, 'Khẩu trang giúp lọc bụi.'),
    Q('Hành động "thân thiện môi trường" là?', ['Vứt rác xuống sông', 'Phân loại và tái chế rác', 'Đốt nhựa', 'Phun thuốc bừa'], 1, 'Phân loại + tái chế giảm ô nhiễm.'),
  ]),

  M(10, 'Ánh sáng — nguồn sáng', [
    Q('Nguồn sáng tự nhiên lớn nhất là?', ['Đèn pin', 'Mặt trời', 'Mặt trăng', 'Bóng đèn'], 1, 'Mặt Trời là nguồn sáng tự nhiên chính.'),
    Q('Mặt Trăng có phát sáng không?', ['Có, tự phát sáng', 'Không, phản chiếu ánh sáng Mặt Trời', 'Phát sáng ban ngày', 'Phát sáng nhờ sao'], 1, 'Trăng không tự phát sáng mà phản chiếu ánh nắng.'),
    Q('Nguồn sáng nhân tạo là?', ['Mặt Trời', 'Bóng đèn, đèn pin, nến', 'Sao', 'Đom đóm'], 1, 'Đèn, nến do con người làm ra → nguồn sáng nhân tạo.'),
    Q('Ánh sáng truyền theo đường?', ['Đường cong', 'Đường thẳng', 'Đường gãy khúc', 'Đường tròn'], 1, 'Ánh sáng truyền theo đường thẳng trong môi trường đồng nhất.'),
    Q('Vật nào sau đây phát sáng?', ['Tờ giấy trắng', 'Bóng đèn đang bật', 'Tấm gương', 'Cái cốc'], 1, 'Chỉ bóng đèn đang bật là nguồn sáng (tự phát).'),
    Q('Vật nào "phản chiếu" ánh sáng tốt?', ['Vải đen', 'Gương phẳng', 'Đất sét', 'Than'], 1, 'Gương phẳng phản chiếu ánh sáng rất tốt.'),
  ]),

  M(11, 'Bóng tối & vật cản sáng', [
    Q('Bóng tối xuất hiện khi?', ['Có ánh sáng đầy đủ', 'Có vật cản ánh sáng', 'Trời nhiều nắng', 'Trời mưa'], 1, 'Khi ánh sáng bị vật cản chặn → có bóng tối phía sau.'),
    Q('Vật cho ánh sáng đi qua hoàn toàn gọi là?', ['Vật trong suốt', 'Vật chắn sáng', 'Vật mờ', 'Vật phát sáng'], 0, 'Trong suốt: thuỷ tinh, nước sạch…'),
    Q('Vật KHÔNG cho ánh sáng đi qua gọi là?', ['Trong suốt', 'Mờ', 'Chắn sáng / không trong suốt', 'Phát sáng'], 2, 'Vật chắn sáng: gỗ, kim loại đặc, sách dày…'),
    Q('Bóng của vật trên mặt đất to hay nhỏ tuỳ vào?', ['Màu của vật', 'Vị trí nguồn sáng', 'Trọng lượng', 'Tên gọi'], 1, 'Nguồn sáng ở các vị trí khác nhau → bóng có kích thước, hướng khác.'),
    Q('Vào trưa, bóng người trên đất thường?', ['Rất dài', 'Ngắn nhất', 'Không có', 'Quay ngược'], 1, 'Mặt Trời gần thẳng đứng → bóng ngắn nhất.'),
    Q('Ban đêm trong phòng không bật đèn, ta?', ['Vẫn thấy rõ', 'Không thấy gì (tối)', 'Thấy nhờ âm thanh', 'Thấy nhờ mùi'], 1, 'Không có ánh sáng → mắt không nhìn được.'),
  ]),

  M(12, 'Mắt nhìn thấy vật khi nào', [
    Q('Mắt nhìn thấy vật khi?', ['Vật phát ra hoặc phản chiếu ánh sáng đến mắt', 'Vật phát ra âm thanh', 'Vật có mùi', 'Vật chuyển động'], 0, 'Ánh sáng từ vật đến mắt → ta nhìn thấy.'),
    Q('Ta nhìn thấy cuốn sách trên bàn vì?', ['Sách phát sáng', 'Sách phản chiếu ánh sáng đèn/Mặt Trời vào mắt', 'Sách có mùi', 'Sách phát âm'], 1, 'Sách không tự phát sáng — nó phản chiếu ánh sáng.'),
    Q('Trong bóng tối hoàn toàn, ta?', ['Vẫn nhìn rõ', 'Không nhìn thấy gì', 'Nhìn được màu trắng', 'Nhìn nhờ tai'], 1, 'Không có ánh sáng → không nhìn được.'),
    Q('Để học bài tốt, ánh sáng cần?', ['Quá tối', 'Vừa đủ, không chói', 'Quá chói', 'Nhấp nháy'], 1, 'Ánh sáng đủ và êm dịu bảo vệ mắt.'),
    Q('Khi đọc sách, đèn nên đặt?', ['Sau lưng (lưng che)', 'Phía trước hoặc bên không thuận tay', 'Trên đầu gây chói', 'Dưới gầm bàn'], 1, 'Đặt đèn không tạo bóng tay lên trang sách.'),
    Q('Đeo kính giúp người cận thị vì?', ['Tạo bóng tối', 'Hội tụ ánh sáng đúng vào võng mạc', 'Làm tối căn phòng', 'Tăng âm thanh'], 1, 'Kính cận điều chỉnh đường đi của ánh sáng vào mắt.'),
  ]),

  M(13, 'Nhiệt — vật nóng vật lạnh', [
    Q('Đơn vị đo nhiệt độ thường dùng ở Việt Nam là?', ['°F (độ F)', '°C (độ C)', 'kg', 'lít'], 1, 'Việt Nam dùng độ C (Celsius).'),
    Q('Dụng cụ đo nhiệt độ gọi là?', ['Thước', 'Nhiệt kế', 'Đồng hồ', 'Cân'], 1, 'Nhiệt kế đo nhiệt độ.'),
    Q('Nhiệt độ cơ thể người bình thường khoảng?', ['25°C', '37°C', '50°C', '100°C'], 1, '~37°C là nhiệt độ cơ thể bình thường.'),
    Q('Nước sôi ở áp suất thường có nhiệt độ?', ['0°C', '50°C', '100°C', '200°C'], 2, 'Nước sôi ở 100°C ở áp suất thường.'),
    Q('Nước đông đá ở nhiệt độ?', ['0°C', '4°C', '10°C', '100°C'], 0, 'Nước đông đặc ở 0°C.'),
    Q('Vật càng nóng thì nhiệt độ?', ['Càng thấp', 'Càng cao', 'Không đổi', 'Bằng 0'], 1, 'Càng nóng → nhiệt độ càng cao.'),
  ]),

  M(14, 'Truyền nhiệt', [
    Q('Nhiệt truyền từ vật?', ['Lạnh sang nóng', 'Nóng sang lạnh', 'Cùng nhiệt độ', 'Không truyền được'], 1, 'Nhiệt luôn truyền từ vật nóng hơn sang vật lạnh hơn.'),
    Q('Khi đặt thìa kim loại vào cốc nước nóng, cán thìa?', ['Vẫn lạnh', 'Cũng nóng dần lên', 'Đông đá', 'Đổi màu'], 1, 'Kim loại dẫn nhiệt tốt → cán thìa nóng theo.'),
    Q('Vật nào dẫn nhiệt tốt?', ['Gỗ', 'Nhựa', 'Kim loại', 'Vải'], 2, 'Kim loại (đồng, nhôm, sắt…) dẫn nhiệt tốt.'),
    Q('Vật nào dẫn nhiệt kém (cách nhiệt)?', ['Sắt', 'Nhôm', 'Gỗ, nhựa, vải', 'Đồng'], 2, 'Gỗ, nhựa, vải là chất cách nhiệt.'),
    Q('Tay cầm nồi thường bọc nhựa/gỗ vì?', ['Để đẹp', 'Để cách nhiệt, không nóng tay', 'Cho rẻ', 'Cho nhẹ'], 1, 'Cách nhiệt giúp tay không bị bỏng.'),
    Q('Áo len giữ ấm vào mùa đông vì?', ['Áo phát nhiệt', 'Áo cản nhiệt từ cơ thể thoát ra ngoài', 'Áo dẫn lạnh', 'Áo phản chiếu sáng'], 1, 'Sợi len chứa không khí — cách nhiệt giúp giữ ấm.'),
  ]),

  M(15, 'Nguồn nhiệt & an toàn', [
    Q('Nguồn nhiệt lớn nhất với Trái Đất là?', ['Mặt Trăng', 'Mặt Trời', 'Sao Hoả', 'Ngọn lửa'], 1, 'Mặt Trời là nguồn nhiệt khổng lồ cho Trái Đất.'),
    Q('Nguồn nhiệt trong nhà bếp gồm?', ['Tủ lạnh', 'Bếp ga, bếp điện, lò vi sóng', 'Quạt', 'Tủ quần áo'], 1, 'Bếp ga/điện/lò vi sóng cung cấp nhiệt nấu nướng.'),
    Q('Khi nấu ăn, em KHÔNG nên?', ['Cẩn thận khi cầm nồi nóng', 'Để trẻ nhỏ nghịch bếp đang cháy', 'Tắt bếp sau khi dùng', 'Mặc tạp dề'], 1, 'Không để trẻ nhỏ nghịch lửa/bếp — rất nguy hiểm.'),
    Q('Khi bị bỏng nhẹ, sơ cứu đúng là?', ['Bôi kem đánh răng', 'Ngâm chỗ bỏng vào nước mát sạch ~15 phút', 'Chà xát mạnh', 'Bôi nước mắm'], 1, 'Ngâm/xả nước mát giúp giảm nhiệt và đau.'),
    Q('Mặt Trời cung cấp nhiệt giúp:', ['Cây quang hợp, nước bốc hơi, sưởi ấm Trái Đất', 'Sinh ra gió ngược', 'Đông cứng nước', 'Không có tác dụng'], 0, 'Mặt Trời cung cấp năng lượng cho hầu hết quá trình tự nhiên.'),
    Q('Khi có cháy nhỏ trong nhà, em nên?', ['Tự dập + báo người lớn, gọi 114', 'Bỏ chạy đi chơi', 'Đổ xăng vào', 'Quay video'], 0, 'Báo người lớn và gọi 114 (cứu hoả).'),
  ]),

  M(16, 'Âm thanh — nguồn âm', [
    Q('Âm thanh do đâu phát ra?', ['Vật đứng yên', 'Vật rung động', 'Ánh sáng', 'Nhiệt độ'], 1, 'Khi vật rung động → phát ra âm.'),
    Q('Khi gõ trống, vật rung là?', ['Cái dùi', 'Mặt trống', 'Không khí xa trống', 'Tay người'], 1, 'Mặt trống rung động phát ra âm thanh.'),
    Q('Âm thanh truyền được trong?', ['Chỉ chất khí', 'Chất rắn, lỏng và khí', 'Chân không', 'Chỉ chất rắn'], 1, 'Âm thanh truyền trong rắn, lỏng, khí; KHÔNG truyền trong chân không.'),
    Q('Âm thanh truyền nhanh nhất trong?', ['Chất khí', 'Chất lỏng', 'Chất rắn', 'Chân không'], 2, 'Vận tốc âm: rắn > lỏng > khí.'),
    Q('Ta nghe được âm thanh nhờ?', ['Mắt', 'Tai', 'Mũi', 'Lưỡi'], 1, 'Tai là cơ quan thu nhận âm thanh.'),
    Q('"Đàn ghi-ta" phát âm do?', ['Dây đàn rung', 'Đàn nóng lên', 'Đàn phát sáng', 'Đàn lạnh đi'], 0, 'Dây đàn rung tạo âm thanh.'),
  ]),

  M(17, 'Bảo vệ tai & chống tiếng ồn', [
    Q('Tiếng ồn quá lớn có hại như thế nào?', ['Tăng thính giác', 'Đau tai, giảm thính lực, mất tập trung', 'Khoẻ tai hơn', 'Không sao'], 1, 'Tiếng ồn kéo dài gây hại thính giác.'),
    Q('Hành động bảo vệ tai:', ['Ngoáy tai sâu bằng vật cứng', 'Không nghe nhạc lớn, vệ sinh tai nhẹ nhàng', 'Bịt tai mãi mãi', 'Bôi dầu vào tai'], 1, 'Tránh âm thanh quá to và vệ sinh nhẹ nhàng.'),
    Q('Khi đi qua công trường nhiều tiếng ồn, em có thể?', ['Hét to hơn', 'Bịt tai hoặc đi nhanh qua', 'Đứng lại lâu', 'Ghé sát máy khoan'], 1, 'Tránh xa nguồn ồn hoặc bịt tai bảo vệ.'),
    Q('Để giảm tiếng ồn trong nhà, có thể?', ['Đập tường', 'Đóng cửa, dùng rèm, thảm hút âm', 'Mở loa to', 'Đặt nhiều quạt'], 1, 'Vật mềm (rèm, thảm) hấp thụ âm tốt.'),
    Q('Âm thanh em yêu thích thường là?', ['Còi xe inh ỏi', 'Tiếng máy khoan', 'Tiếng nhạc êm dịu, tiếng chim hót', 'Tiếng đập phá'], 2, 'Âm thanh dịu giúp thư giãn.'),
    Q('Nghe nhạc bằng tai nghe nên?', ['Mở rất to liên tục', 'Vặn vừa, nghỉ giải lao', 'Đeo 24/24', 'Cho người khác đeo cùng'], 1, 'Âm lượng vừa phải và nghỉ ngơi để bảo vệ tai.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Nước có ___ thể chính trong tự nhiên.', ['1', '2', '3', '4'], 2, '3 thể: rắn, lỏng, khí.'),
    Q('Khí cần cho sự thở là?', ['Ni-tơ', 'Ô-xi', 'CO₂', 'Hi-đrô'], 1, 'Ô-xi duy trì sự sống.'),
    Q('Gió là?', ['Không khí đứng yên', 'Không khí chuyển động', 'Hơi nước nóng', 'Ánh sáng'], 1, 'Gió = không khí chuyển động.'),
    Q('Vật dẫn nhiệt tốt là?', ['Gỗ', 'Vải', 'Nhôm', 'Nhựa'], 2, 'Kim loại dẫn nhiệt tốt.'),
    Q('Nước sôi ở?', ['0°C', '37°C', '100°C', '200°C'], 2, '100°C ở áp suất thường.'),
    Q('Âm thanh truyền nhanh nhất trong?', ['Khí', 'Lỏng', 'Rắn', 'Chân không'], 2, 'Vận tốc lớn nhất trong chất rắn.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Thực vật cần gì để sống', [
    Q('Thực vật cần gì để sống?', ['Chỉ nước', 'Nước, ánh sáng, không khí, chất khoáng', 'Chỉ ánh sáng', 'Chỉ đất'], 1, 'Cây cần nước, ánh sáng, không khí, dinh dưỡng.'),
    Q('Cây hút nước và muối khoáng từ?', ['Lá', 'Rễ qua đất', 'Hoa', 'Hạt'], 1, 'Rễ hút nước và khoáng từ đất.'),
    Q('Lá cây "thở" trao đổi khí qua các lỗ nhỏ gọi là?', ['Mạch', 'Khí khổng', 'Gân lá', 'Cuống'], 1, 'Khí khổng nằm trên bề mặt lá.'),
    Q('Nếu thiếu ánh sáng lâu ngày, cây?', ['Tươi tốt hơn', 'Vàng úa, còi cọc, chết', 'Lớn nhanh', 'Đổi loài'], 1, 'Thiếu sáng → quang hợp kém → cây yếu.'),
    Q('Trồng cây trong chậu cần?', ['Đất khô tuyệt đối', 'Tưới nước hợp lý, có ánh sáng', 'Để chỗ tối', 'Không cần đất'], 1, 'Cây chậu vẫn cần đủ nước, sáng và đất tốt.'),
    Q('Cây ___ là cây sống trong nước.', ['xương rồng', 'bèo, sen, súng', 'thông', 'phi lao'], 1, 'Bèo, sen, súng là cây thuỷ sinh.'),
  ]),

  M(20, 'Quang hợp cơ bản', [
    Q('Quá trình "cây xanh dùng ánh sáng để tạo ra chất nuôi cây" gọi là?', ['Hô hấp', 'Quang hợp', 'Tiêu hoá', 'Bay hơi'], 1, 'Quang hợp xảy ra ở lá xanh, có ánh sáng.'),
    Q('Quang hợp cần?', ['Bóng tối', 'Ánh sáng, nước, CO₂', 'Tiếng ồn', 'Nhiệt cao'], 1, 'Nguyên liệu: nước + CO₂ + ánh sáng.'),
    Q('Sản phẩm quang hợp nhả ra là?', ['CO₂', 'O₂ (ô-xi)', 'Khói', 'Bụi'], 1, 'Cây nhả ô-xi — có lợi cho con người, động vật.'),
    Q('Quang hợp xảy ra chủ yếu ở?', ['Rễ', 'Lá xanh', 'Hoa', 'Hạt'], 1, 'Lá có diệp lục → nơi quang hợp chính.'),
    Q('Chất xanh trong lá gọi là?', ['Sắt', 'Diệp lục (chất diệp)', 'Đường', 'Muối'], 1, 'Diệp lục giúp hấp thụ ánh sáng để quang hợp.'),
    Q('Vì sao trồng nhiều cây xanh giúp không khí trong lành?', ['Cây toả khói', 'Cây hấp thụ CO₂, nhả O₂', 'Cây hút âm', 'Cây phát sáng'], 1, 'Cây xanh là "lá phổi" của môi trường.'),
  ]),

  M(21, 'Động vật cần gì để sống', [
    Q('Động vật cần gì để sống?', ['Chỉ nước', 'Thức ăn, nước, không khí, nơi ở', 'Chỉ ánh sáng', 'Chỉ tiếng động'], 1, 'Động vật cần đủ thức ăn, nước, khí thở, môi trường sống.'),
    Q('Động vật thở khí gì?', ['CO₂', 'Ô-xi', 'Ni-tơ', 'Hơi nước'], 1, 'Hô hấp lấy O₂, thải CO₂.'),
    Q('Cá thở bằng?', ['Phổi', 'Mang', 'Da', 'Mũi'], 1, 'Cá thở bằng mang, lấy ô-xi hoà tan trong nước.'),
    Q('Loài nào thở bằng phổi?', ['Cá chép', 'Ếch (khi trưởng thành)', 'Tôm', 'Trai'], 1, 'Ếch trưởng thành thở bằng phổi và da.'),
    Q('Chim bay được nhờ?', ['Lông và cánh', 'Vẩy', 'Mang', 'Đuôi cá'], 0, 'Chim có lông vũ + cánh thích nghi với bay.'),
    Q('Động vật ngủ đông là để?', ['Đẹp lông', 'Tiết kiệm năng lượng khi thiếu thức ăn', 'Học tập', 'Lột xác'], 1, 'Gấu, sóc… ngủ đông để vượt mùa khan thức ăn.'),
  ]),

  M(22, 'Chuỗi thức ăn', [
    Q('"Chuỗi thức ăn" mô tả?', ['Cách nấu ăn', 'Sinh vật này ăn sinh vật kia theo trình tự', 'Hàng quán', 'Bữa cơm'], 1, 'Mắt xích: cỏ → hươu → hổ.'),
    Q('Sinh vật bắt đầu chuỗi thức ăn thường là?', ['Động vật ăn thịt', 'Cây xanh (sinh vật sản xuất)', 'Vi khuẩn', 'Con người'], 1, 'Cây xanh tự tạo chất hữu cơ → khởi đầu chuỗi.'),
    Q('Trong chuỗi: Cỏ → Sâu → Chim → ?, sinh vật nào ăn chim?', ['Sâu', 'Cỏ', 'Diều hâu / Rắn', 'Đất'], 2, 'Sinh vật ăn thịt bậc cao như diều hâu, rắn.'),
    Q('Sinh vật "ăn thực vật" gọi là?', ['Ăn thịt', 'Ăn cỏ (ăn thực vật)', 'Phân huỷ', 'Sản xuất'], 1, 'Trâu, bò, hươu… ăn thực vật.'),
    Q('Sinh vật phân huỷ (vi khuẩn, nấm) đóng vai trò?', ['Trang trí', 'Phân huỷ xác sinh vật trả chất cho đất', 'Săn mồi', 'Phát sáng'], 1, 'Phân huỷ giúp khép kín vòng vật chất.'),
    Q('Nếu hổ bị tuyệt chủng trong rừng, hươu nai có thể?', ['Giảm mạnh', 'Tăng quá nhiều, phá rừng', 'Đổi loài', 'Bay đi'], 1, 'Thiếu kẻ săn mồi → quần thể con mồi tăng quá mức.'),
  ]),

  M(23, 'Con người — dinh dưỡng', [
    Q('Bốn nhóm chất dinh dưỡng chính:', ['Chất bột, đạm, béo, vitamin & khoáng', 'Đá, đất, nước, khí', 'Vàng, bạc, đồng, sắt', 'Hoa, lá, cành, rễ'], 0, '4 nhóm: bột-đường, đạm, béo, vitamin & khoáng chất.'),
    Q('Cơm, bánh mì, khoai cung cấp chủ yếu?', ['Chất bột - đường', 'Đạm', 'Vitamin', 'Khoáng chất'], 0, 'Cơm, bánh mì, khoai = nguồn tinh bột.'),
    Q('Thịt, cá, trứng, đậu cung cấp chủ yếu?', ['Đường', 'Đạm', 'Béo', 'Nước'], 1, 'Chất đạm cần cho xây dựng cơ thể.'),
    Q('Dầu, mỡ, bơ cung cấp chủ yếu?', ['Vitamin', 'Béo', 'Đạm', 'Khoáng'], 1, 'Chất béo cho năng lượng.'),
    Q('Rau xanh, hoa quả giàu?', ['Đạm', 'Béo', 'Vitamin và chất xơ', 'Tinh bột tuyệt đối'], 2, 'Rau quả cung cấp vitamin + chất xơ.'),
    Q('Ăn uống "cân đối" nghĩa là?', ['Chỉ ăn thịt', 'Đủ 4 nhóm chất + đa dạng', 'Bỏ rau', 'Ăn rất nhiều một món'], 1, 'Cân đối = đủ nhóm chất, đa dạng món.'),
  ]),

  M(24, 'Vitamin & chất khoáng', [
    Q('Vitamin A có nhiều trong?', ['Cà rốt, gấc, rau xanh đậm', 'Đường', 'Muối', 'Nước lọc'], 0, 'Cà rốt, gấc giàu beta-caroten → vitamin A.'),
    Q('Vitamin A giúp?', ['Sáng mắt', 'Chắc răng', 'Mọc tóc', 'Đỏ má'], 0, 'Vitamin A giúp mắt sáng, niêm mạc khoẻ.'),
    Q('Vitamin C có nhiều trong?', ['Cam, chanh, ổi', 'Bơ', 'Đường', 'Muối'], 0, 'Trái cây họ cam, ổi rất giàu vitamin C.'),
    Q('Vitamin D giúp?', ['Mọc tóc', 'Hấp thụ canxi, chắc xương', 'Đỏ má', 'Đen tóc'], 1, 'Vitamin D giúp xương chắc, hấp thụ canxi.'),
    Q('Canxi có nhiều trong?', ['Sữa, tôm, cua, cá nhỏ', 'Đường', 'Dầu ăn', 'Nước lọc'], 0, 'Sữa và hải sản nhỏ giàu canxi.'),
    Q('Sắt có nhiều trong?', ['Thịt đỏ, rau lá xanh đậm', 'Đường trắng', 'Bơ', 'Mì gói'], 0, 'Thịt đỏ, gan, rau xanh đậm giàu sắt — ngừa thiếu máu.'),
  ]),

  M(25, 'An toàn thực phẩm', [
    Q('Thực phẩm an toàn cần?', ['Tươi sạch, rõ nguồn gốc, hạn dùng', 'Quá hạn cũng được', 'Có nấm mốc', 'Bẩn cũng được'], 0, 'Tươi sạch, đúng hạn, nguồn gốc rõ ràng.'),
    Q('Trước khi ăn, em nên?', ['Để nguyên tay bẩn', 'Rửa tay bằng xà phòng', 'Lau tay vào áo', 'Không cần rửa'], 1, 'Rửa tay diệt vi khuẩn — phòng bệnh.'),
    Q('Rau ăn sống cần được?', ['Để bẩn', 'Rửa sạch nhiều lần dưới vòi', 'Phơi nắng cháy', 'Đốt'], 1, 'Rửa sạch rau quả trước khi ăn.'),
    Q('Thức ăn ôi thiu KHÔNG nên ăn vì?', ['Ngon hơn', 'Gây ngộ độc, đau bụng', 'Bổ dưỡng', 'Tăng cân'], 1, 'Ngộ độc thực phẩm — nguy hiểm.'),
    Q('Sữa, thịt sống nên bảo quản ở?', ['Ngoài nắng', 'Tủ lạnh', 'Bếp', 'Trên cây'], 1, 'Tủ lạnh giữ thực phẩm tươi lâu.'),
    Q('Sau khi đi vệ sinh, em phải?', ['Đi chơi tiếp', 'Rửa tay với xà phòng', 'Ăn ngay', 'Không cần làm gì'], 1, 'Rửa tay bằng xà phòng — phòng bệnh đường ruột.'),
  ]),

  M(26, 'Phòng tránh bệnh', [
    Q('Tiêm chủng để?', ['Đẹp da', 'Phòng các bệnh truyền nhiễm', 'Cao lớn', 'Đen tóc'], 1, 'Vắc-xin tạo miễn dịch, phòng bệnh.'),
    Q('Bệnh nào do thiếu vitamin A?', ['Quáng gà, khô mắt', 'Còi xương', 'Bướu cổ', 'Tiểu đường'], 0, 'Thiếu vitamin A → khô mắt, quáng gà.'),
    Q('Bệnh nào do thiếu vitamin D / canxi?', ['Còi xương', 'Quáng gà', 'Cảm cúm', 'Sốt xuất huyết'], 0, 'Thiếu vitamin D/canxi → còi xương ở trẻ.'),
    Q('Để phòng cảm cúm, nên?', ['Giữ ấm, rửa tay, đeo khẩu trang khi ốm', 'Ướt mưa lâu', 'Bỏ ăn', 'Không ngủ'], 0, 'Giữ ấm + vệ sinh giúp phòng cúm.'),
    Q('Bệnh sốt xuất huyết lây qua?', ['Không khí', 'Muỗi vằn đốt', 'Bắt tay', 'Ăn cơm'], 1, 'Muỗi vằn (Aedes) truyền sốt xuất huyết.'),
    Q('Cách phòng muỗi tại nhà:', ['Để nước đọng', 'Đậy nắp lu, ngủ màn, diệt bọ gậy', 'Trồng nhiều ao tù', 'Mở cửa đêm'], 1, 'Diệt nguồn nước đọng, ngủ màn để phòng muỗi.'),
  ]),

  M(27, 'Vận động & nghỉ ngơi', [
    Q('Tập thể dục đều đặn giúp?', ['Yếu đi', 'Khoẻ mạnh, dẻo dai', 'Béo phì', 'Buồn ngủ'], 1, 'Vận động giúp cơ thể khoẻ mạnh.'),
    Q('Học sinh nên ngủ mỗi đêm khoảng?', ['3–4 giờ', '9–11 giờ', '14 giờ', '2 giờ'], 1, 'HS tiểu học cần ngủ 9–11 giờ/đêm.'),
    Q('Ngồi học đúng tư thế giúp?', ['Cong lưng', 'Tránh vẹo cột sống và cận thị', 'Đau lưng', 'Mỏi mắt nhanh'], 1, 'Tư thế đúng bảo vệ cột sống và mắt.'),
    Q('Khoảng cách mắt - sách khi đọc nên là?', ['10 cm', '25–30 cm', '1 m', '2 m'], 1, '25–30 cm bảo vệ mắt khỏi cận thị.'),
    Q('Sau 30–45 phút học, nên?', ['Học tiếp luôn', 'Nghỉ vài phút, nhìn xa, vận động nhẹ', 'Nhìn điện thoại', 'Nằm xuống đất'], 1, 'Nghỉ ngắn giúp mắt và não phục hồi.'),
    Q('Hoạt động ngoài trời (ánh nắng vừa) giúp?', ['Tổng hợp vitamin D', 'Nóng đầu', 'Mất nước hoàn toàn', 'Không có lợi'], 0, 'Nắng sớm giúp da tạo vitamin D.'),
  ]),

  M(28, 'Tiêu hoá thức ăn', [
    Q('Cơ quan nào bắt đầu tiêu hoá thức ăn?', ['Dạ dày', 'Miệng', 'Ruột non', 'Gan'], 1, 'Tiêu hoá bắt đầu ở miệng nhờ nhai và nước bọt.'),
    Q('Nhai kỹ giúp?', ['Đau răng', 'Tiêu hoá tốt hơn', 'Đói nhanh', 'Mệt mỏi'], 1, 'Nhai kỹ giúp dạ dày bớt việc và hấp thu tốt.'),
    Q('Thức ăn sau khi nuốt đi xuống đâu?', ['Phổi', 'Dạ dày qua thực quản', 'Tim', 'Não'], 1, 'Thức ăn → thực quản → dạ dày.'),
    Q('Nơi hấp thụ chất dinh dưỡng chính là?', ['Dạ dày', 'Ruột non', 'Ruột già', 'Thận'], 1, 'Ruột non hấp thụ dinh dưỡng.'),
    Q('Chất thải rắn được thải ra qua?', ['Mũi', 'Hậu môn', 'Miệng', 'Tai'], 1, 'Phân được đào thải qua hậu môn.'),
    Q('Để hệ tiêu hoá khoẻ, KHÔNG nên?', ['Ăn nhiều rau', 'Ăn vội, ăn quá no, đồ ôi thiu', 'Uống đủ nước', 'Nhai kỹ'], 1, 'Ăn vội, ăn quá no, đồ thiu có hại tiêu hoá.'),
  ]),

  M(29, 'Hô hấp', [
    Q('Cơ quan hô hấp chính của người là?', ['Tim', 'Phổi', 'Gan', 'Thận'], 1, 'Phổi đảm nhiệm trao đổi khí.'),
    Q('Khi hít vào, ta lấy khí?', ['CO₂', 'O₂', 'Hơi nước', 'Khí trơ'], 1, 'Hít vào lấy ô-xi.'),
    Q('Khi thở ra, ta thải khí?', ['O₂', 'CO₂ (và hơi nước)', 'Ni-tơ', 'Hi-đrô'], 1, 'Thở ra thải CO₂ và hơi nước.'),
    Q('Để phổi khoẻ, em nên?', ['Hít khói thuốc', 'Tập thể dục, hít thở sâu, ở nơi trong lành', 'Ngủ trong khói', 'Không vận động'], 1, 'Không khí trong lành + vận động → phổi khoẻ.'),
    Q('Hút thuốc lá gây hại?', ['Đẹp phổi', 'Ung thư phổi, bệnh hô hấp', 'Tăng chiều cao', 'Sáng mắt'], 1, 'Thuốc lá có hại nặng nề cho phổi.'),
    Q('Khi cảm cúm, nên đeo khẩu trang vì?', ['Cho đẹp', 'Tránh lây cho người khác', 'Đỡ đói', 'Nóng người'], 1, 'Khẩu trang ngăn giọt bắn — giảm lây.'),
  ]),

  M(30, 'Tuần hoàn — tim & máu', [
    Q('Cơ quan bơm máu trong cơ thể là?', ['Phổi', 'Tim', 'Gan', 'Não'], 1, 'Tim co bóp bơm máu khắp cơ thể.'),
    Q('Máu mang gì đến các tế bào?', ['Chỉ nước', 'Ô-xi và chất dinh dưỡng', 'Khói', 'Chỉ CO₂'], 1, 'Máu vận chuyển O₂ và dinh dưỡng.'),
    Q('Nhịp tim người lúc nghỉ khoảng?', ['10 lần/phút', '60–100 lần/phút', '300 lần/phút', '5 lần/phút'], 1, 'Trung bình 60–100 nhịp/phút khi nghỉ.'),
    Q('Khi chạy nhanh, tim đập?', ['Chậm hơn', 'Nhanh hơn', 'Ngừng', 'Không đổi'], 1, 'Vận động → tim đập nhanh để cấp O₂.'),
    Q('Để tim khoẻ, nên?', ['Ngồi yên cả ngày', 'Tập thể dục đều, ăn ít muối-đường, ngủ đủ', 'Ăn nhiều mỡ', 'Hút thuốc'], 1, 'Lối sống lành mạnh giúp tim khoẻ.'),
    Q('Máu chảy trong các ống gọi là?', ['Khí quản', 'Mạch máu', 'Thực quản', 'Niệu quản'], 1, 'Mạch máu (động mạch, tĩnh mạch, mao mạch).'),
  ]),

  M(31, 'Môi trường & rác thải', [
    Q('"Môi trường" gồm?', ['Chỉ con người', 'Không khí, nước, đất, sinh vật xung quanh', 'Chỉ ô tô', 'Chỉ ngôi nhà'], 1, 'Môi trường bao gồm tất cả những gì xung quanh ta.'),
    Q('Loại rác nào KHÔNG phân huỷ trong tự nhiên?', ['Lá cây', 'Vỏ trái cây', 'Túi ni-lông, chai nhựa', 'Cơm thừa'], 2, 'Nhựa, ni-lông cần hàng trăm năm để phân huỷ.'),
    Q('Phân loại rác giúp?', ['Khó dọn hơn', 'Dễ tái chế, giảm ô nhiễm', 'Mất thời gian vô ích', 'Hôi hơn'], 1, 'Phân loại giúp tái chế và xử lý hiệu quả.'),
    Q('Rác hữu cơ (vỏ rau, lá) có thể?', ['Đốt thoải mái', 'Ủ làm phân bón', 'Chôn sâu mãi', 'Ném ra sông'], 1, 'Ủ phân hữu cơ cho cây trồng.'),
    Q('Việc nên làm với chai nhựa cũ:', ['Vứt xuống sông', 'Tái chế hoặc gom bán phế liệu', 'Đốt cháy', 'Chôn dưới đất'], 1, 'Tái chế giúp giảm rác.'),
    Q('Đốt nhựa thải ra?', ['Khí thơm', 'Khí độc hại', 'Khí ô-xi', 'Nước sạch'], 1, 'Đốt nhựa sinh khí độc — ô nhiễm không khí.'),
  ]),

  M(32, 'Tái chế — 3R', [
    Q('"3R" trong môi trường gồm?', ['Read – Run – Rest', 'Reduce – Reuse – Recycle', 'Red – Round – Real', 'Rain – River – Rock'], 1, '3R = Giảm – Tái sử dụng – Tái chế.'),
    Q('"Reduce" nghĩa là?', ['Tái chế', 'Giảm sử dụng', 'Tái sử dụng', 'Vứt bỏ'], 1, 'Reduce = giảm tiêu thụ.'),
    Q('"Reuse" nghĩa là?', ['Vứt đi', 'Dùng lại nhiều lần', 'Đốt', 'Chôn'], 1, 'Reuse = dùng lại đồ còn tốt.'),
    Q('"Recycle" nghĩa là?', ['Đốt', 'Tái chế thành sản phẩm mới', 'Chôn', 'Bán giấy'], 1, 'Recycle = tái chế.'),
    Q('Hành động "Reduce" là?', ['Mang túi vải đi chợ thay túi ni-lông mới', 'Dùng nhiều túi mới', 'Đốt rác', 'Vứt bừa'], 0, 'Túi vải dùng nhiều lần — giảm rác nhựa.'),
    Q('Pin cũ nên?', ['Vứt thùng rác chung', 'Gom riêng tới điểm thu pin', 'Chôn dưới sân', 'Đốt'], 1, 'Pin chứa kim loại nặng — phải xử lý riêng.'),
  ]),

  M(33, 'Tiết kiệm điện - nước', [
    Q('Cách tiết kiệm điện ở nhà:', ['Bật đèn 24/24', 'Tắt thiết bị khi không dùng', 'Mở tủ lạnh lâu', 'Để TV chế độ chờ liên tục'], 1, 'Tắt khi không dùng — quy tắc số 1.'),
    Q('Bóng đèn nào tiết kiệm điện hơn?', ['Đèn sợi đốt', 'Đèn LED', 'Đèn dầu', 'Đèn nến'], 1, 'LED tiêu thụ ít điện và bền lâu.'),
    Q('Khi đánh răng, em nên?', ['Để vòi chảy liên tục', 'Khoá vòi khi không dùng', 'Mở mạnh vòi', 'Mở 2 vòi cùng lúc'], 1, 'Khoá vòi tiết kiệm hàng lít nước/lần.'),
    Q('Nước vo gạo có thể dùng?', ['Đổ đi', 'Tưới cây', 'Đốt', 'Uống ngay'], 1, 'Nước vo gạo tưới cây rất tốt.'),
    Q('Mở cửa sổ ban ngày giúp?', ['Tăng điện', 'Tận dụng ánh sáng tự nhiên, tiết kiệm đèn', 'Tốn nước', 'Hỏng tường'], 1, 'Tận dụng nắng → ít cần bật đèn.'),
    Q('Tiết kiệm điện - nước có lợi vì?', ['Tốn tiền hơn', 'Giảm chi phí + bảo vệ tài nguyên', 'Hết nước nhanh', 'Không tác dụng'], 1, 'Vừa tiết kiệm tiền vừa bảo vệ môi trường.'),
  ]),

  M(34, 'Bảo vệ động - thực vật quý', [
    Q('Việc làm bảo vệ rừng:', ['Chặt cây bừa', 'Trồng cây, không đốt rừng, báo lâm tặc', 'Đốt rừng làm nương', 'Săn bắt thú'], 1, 'Trồng + bảo vệ rừng là việc cần thiết.'),
    Q('Sinh vật quý hiếm cần được?', ['Săn bắt', 'Bảo vệ, ghi vào Sách Đỏ', 'Nuôi nhốt làm cảnh', 'Bán đi'], 1, 'Sách Đỏ ghi danh loài cần bảo vệ.'),
    Q('Hành động đúng với động vật hoang dã:', ['Mua làm thú cưng', 'Không săn bắt, không mua bán', 'Ăn thịt', 'Chụp ảnh selfie ép buộc'], 1, 'Không săn bắt, mua bán động vật hoang dã.'),
    Q('Rừng có vai trò?', ['Gây lũ lụt', 'Giữ nước, chống xói mòn, cho gỗ và O₂', 'Phá đất', 'Không có ích'], 1, 'Rừng là "lá phổi xanh" và bảo vệ đất.'),
    Q('Hậu quả của phá rừng:', ['Mát hơn', 'Lũ lụt, sạt lở, mất loài', 'Đẹp cảnh', 'Tăng O₂'], 1, 'Phá rừng → lũ lụt, sạt lở, mất đa dạng sinh học.'),
    Q('Việc đốt rừng làm nương rẫy KHÔNG nên vì?', ['Nhanh có đất', 'Gây cháy lớn, ô nhiễm, mất rừng', 'Tốt cho cây', 'Có lợi'], 1, 'Đốt rừng gây nhiều hệ luỵ nghiêm trọng.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Khí cây xanh thải ra trong quang hợp:', ['CO₂', 'O₂', 'Ni-tơ', 'Hi-đrô'], 1, 'Cây nhả ô-xi khi quang hợp.'),
    Q('Mắt nhìn được nhờ?', ['Mùi', 'Ánh sáng vào mắt', 'Âm thanh', 'Vị'], 1, 'Ánh sáng phản chiếu/từ vật vào mắt.'),
    Q('Vật cách nhiệt tốt:', ['Sắt', 'Nhôm', 'Gỗ, vải', 'Đồng'], 2, 'Gỗ, vải, nhựa cách nhiệt.'),
    Q('Chuỗi thức ăn bắt đầu thường là?', ['Hổ', 'Cỏ (cây xanh)', 'Diều hâu', 'Cá mập'], 1, 'Cây xanh khởi đầu chuỗi.'),
    Q('"3R" gồm:', ['Run – Read – Rest', 'Reduce – Reuse – Recycle', 'Real – Round – Red', 'Rain – River – Rock'], 1, 'Giảm – Tái dùng – Tái chế.'),
    Q('Để phòng sốt xuất huyết:', ['Để nước đọng', 'Diệt bọ gậy, ngủ màn, đậy nắp lu', 'Mở cửa đêm', 'Trồng ao tù'], 1, 'Diệt nguồn nước đọng + ngủ màn.'),
  ], { difficulty: 3 }),
];

export const P4KH_SCENARIOS = indexBy(P4KH_WEEKS);
