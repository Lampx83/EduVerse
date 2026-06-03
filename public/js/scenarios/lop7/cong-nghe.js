// ============================================================
// Lớp 7 · CÔNG NGHỆ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Công nghệ Lớp 7:
//   Chương 1 — Trồng trọt (đất, phân bón, kĩ thuật canh tác, sâu bệnh, thu hoạch)
//   Chương 2 — Chăn nuôi (vật nuôi, thức ăn, chuồng trại, phòng dịch)
//   Chương 3 — Thuỷ sản (nuôi cá nước ngọt, lồng bè, an toàn vệ sinh)
// 4–5 câu/tuần · ID prefix: "S7CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7CN', 'cong-nghe', n, title, qs, opts);

export const S7CN_WEEKS = [
  // ════════════════ CHƯƠNG 1 — TRỒNG TRỌT (T1–14) ════════════════
  M(1, 'Vai trò của trồng trọt', [
    Q('Trồng trọt là?', ['Nuôi gia súc', 'Đánh bắt cá', 'Khai thác khoáng sản', 'Hoạt động nông nghiệp gieo trồng cây để thu sản phẩm'], 3, 'Trồng trọt là hoạt động trồng cây để có sản phẩm.'),
    Q('Vai trò của trồng trọt?', ['Chỉ phục vụ chăn nuôi', 'Không có vai trò gì', 'Cung cấp lương thực, thực phẩm, nguyên liệu cho công nghiệp, xuất khẩu', 'Chỉ để làm đẹp'], 2, 'Trồng trọt cung cấp nhiều loại sản phẩm thiết yếu.'),
    Q('Lúa, ngô, khoai, sắn thuộc nhóm cây?', ['Cây công nghiệp', 'Cây rau', 'Cây ăn quả', 'Cây lương thực'], 3, 'Lúa, ngô, khoai, sắn là cây lương thực.'),
    Q('Cà phê, cao su, hồ tiêu, điều thuộc nhóm?', ['Cây rau', 'Cây công nghiệp', 'Cây cảnh', 'Cây lương thực'], 1, 'Cà phê, cao su, tiêu, điều là cây công nghiệp.'),
    Q('Việt Nam là một trong những nước xuất khẩu hàng đầu thế giới về?', ['Cao lương', 'Gạo, cà phê, hạt điều, hồ tiêu', 'Lúa mạch và yến mạch', 'Lúa mì'], 1, 'Việt Nam xuất khẩu mạnh gạo, cà phê, điều, tiêu.'),
  ]),

  M(2, 'Các nhóm cây trồng phổ biến', [
    Q('Cây rau xanh thuộc nhóm cây?', ['Cây công nghiệp', 'Cây cảnh', 'Cây lương thực', 'Cây thực phẩm'], 3, 'Rau xanh là cây thực phẩm.'),
    Q('Cây cam, xoài, nhãn thuộc nhóm?', ['Cây ăn quả', 'Cây công nghiệp', 'Cây hoa', 'Cây lương thực'], 0, 'Cam, xoài, nhãn là cây ăn quả.'),
    Q('Cây hoa hồng, hoa cúc thuộc nhóm?', ['Cây công nghiệp', 'Cây hoa, cây cảnh', 'Cây lương thực', 'Cây thuốc'], 1, 'Hoa hồng, cúc là cây hoa, cây cảnh.'),
    Q('Cây nhân sâm, đinh lăng, atiso thuộc nhóm?', ['Cây cảnh', 'Cây lương thực', 'Cây gỗ', 'Cây dược liệu'], 3, 'Cây có tác dụng làm thuốc — cây dược liệu.'),
    Q('Cây keo, bạch đàn, thông trồng nhằm?', ['Lấy rau', 'Làm cảnh', 'Lấy gỗ và phủ xanh đồi trọc', 'Lấy quả ăn'], 2, 'Keo, bạch đàn là cây lâm nghiệp lấy gỗ.'),
  ]),

  M(3, 'Đất trồng và thành phần của đất', [
    Q('Đất trồng là gì?', ['Lớp đá cứng', 'Lớp nước', 'Lớp bề mặt tơi xốp của vỏ Trái Đất nơi cây sinh trưởng', 'Lớp khí'], 2, 'Đất là lớp tơi xốp bề mặt vỏ Trái Đất.'),
    Q('Đất trồng có vai trò gì với cây?', ['Không có vai trò', 'Cung cấp nước, dinh dưỡng, không khí và giữ cây đứng vững', 'Chỉ cấp nước', 'Chỉ giữ cây'], 1, 'Đất cấp nước, dinh dưỡng, không khí và giữ cây.'),
    Q('Đất trồng gồm những thành phần chính?', ['Chỉ nước', 'Chỉ đá', 'Phần khoáng, phần hữu cơ, nước và không khí', 'Chỉ cát'], 2, 'Đất gồm khoáng, hữu cơ, nước, không khí.'),
    Q('Mùn trong đất hình thành từ?', ['Nước mưa', 'Đá nguyên chất', 'Xác sinh vật bị phân huỷ', 'Phân bón nhân tạo'], 2, 'Mùn là sản phẩm phân huỷ xác sinh vật.'),
    Q('Đất nào tơi xốp, giàu mùn nhất?', ['Đất phù sa', 'Đất cát', 'Đất đá', 'Đất sét'], 0, 'Đất phù sa giàu mùn, tơi xốp.'),
  ]),

  M(4, 'Các loại đất trồng phổ biến', [
    Q('Đất cát có đặc điểm?', ['Hạt to, thoát nước nhanh, nghèo dinh dưỡng', 'Rất tơi xốp', 'Giàu mùn', 'Hạt mịn, giữ nước'], 0, 'Đất cát thoát nước nhanh và nghèo dinh dưỡng.'),
    Q('Đất sét có đặc điểm?', ['Hạt mịn, giữ nước tốt nhưng dễ bị bí', 'Tơi xốp', 'Giàu mùn', 'Thoát nước nhanh'], 0, 'Đất sét giữ nước nhưng dễ bí khí.'),
    Q('Đất thịt là?', ['Đất khô cằn', 'Đất chỉ có cát', 'Đất chỉ có sét', 'Hỗn hợp cát, sét, mùn — phù hợp trồng trọt'], 3, 'Đất thịt cân bằng nên phù hợp trồng trọt.'),
    Q('Đất feralit phổ biến ở?', ['Đồng bằng', 'Sa mạc', 'Vùng cực', 'Đồi núi nhiệt đới ẩm'], 3, 'Đất feralit có ở vùng đồi núi nhiệt đới.'),
    Q('Đất nhiễm phèn có đặc điểm?', ['Rất tốt cho cây', 'Giàu dinh dưỡng', 'Trung tính', 'Có lượng phèn cao, độ pH thấp'], 3, 'Đất phèn có pH thấp, cần cải tạo.'),
  ]),

  M(5, 'Cải tạo và bảo vệ đất', [
    Q('Vì sao cần cải tạo đất?', ['Không cần thiết', 'Để tăng độ phì cho cây sinh trưởng tốt', 'Để giảm năng suất', 'Để làm chết cây'], 1, 'Cải tạo đất giúp tăng năng suất cây trồng.'),
    Q('Biện pháp cải tạo đất chua?', ['Phơi khô', 'Bón vôi', 'Bón thêm phân chua', 'Đốt đất'], 1, 'Bón vôi giúp giảm độ chua của đất.'),
    Q('Biện pháp giữ độ phì của đất?', ['Bỏ hoang lâu', 'Đốt rẫy', 'Luân canh, bón phân hữu cơ, trồng cây che phủ', 'Phun thuốc trừ sâu'], 2, 'Luân canh và bón hữu cơ giúp giữ độ phì.'),
    Q('Cày xới đất nhằm?', ['Làm cứng đất', 'Đẩy nước đi', 'Làm khô đất', 'Làm đất tơi xốp, thoáng khí, diệt cỏ dại'], 3, 'Cày xới giúp đất tơi xốp và diệt cỏ.'),
    Q('Tác hại của xói mòn đất?', ['Tăng năng suất', 'Tốt cho cây', 'Không ảnh hưởng', 'Mất lớp đất màu mỡ, giảm năng suất'], 3, 'Xói mòn làm mất lớp đất màu mỡ.'),
  ]),

  M(6, 'Phân bón — vai trò và phân loại', [
    Q('Phân bón là?', ['Hạt giống đã qua xử lý', 'Vật chất cung cấp dinh dưỡng cho cây trồng', 'Thuốc kích thích sinh trưởng cây', 'Thuốc trừ sâu'], 1, 'Phân bón cấp dinh dưỡng cho cây.'),
    Q('Có mấy loại phân bón chính?', ['3: phân hữu cơ, phân vô cơ, phân vi sinh', '2 loại', '1 loại', '5 loại'], 0, 'Phân hữu cơ, vô cơ, vi sinh là 3 nhóm chính.'),
    Q('Phân hữu cơ gồm?', ['Nước muối', 'Đạm, lân, kali', 'Tro than', 'Phân chuồng, phân xanh, phân bắc, phân rác'], 3, 'Phân chuồng, xanh, bắc, rác là phân hữu cơ.'),
    Q('Phân vô cơ chủ yếu gồm?', ['Đạm (N), lân (P), kali (K)', 'Phân xanh', 'Phân vi sinh', 'Phân chuồng'], 0, 'Phân vô cơ chính: N, P, K.'),
    Q('Phân vi sinh là?', ['Phân chứa các vi sinh vật có ích cho đất và cây', 'Phân động vật', 'Phân lá', 'Phân hoá học'], 0, 'Phân vi sinh chứa vi sinh vật có ích.'),
  ]),

  M(7, 'Sử dụng phân bón hợp lý', [
    Q('Phân hữu cơ có ưu điểm gì?', ['Gây ô nhiễm', 'Tan nhanh, mất sạch', 'Đắt tiền nhất', 'Cải tạo đất, an toàn, bền lâu'], 3, 'Phân hữu cơ cải tạo đất và an toàn.'),
    Q('Phân vô cơ có nhược điểm?', ['Tốt cho đất', 'Không nhược điểm', 'Cải tạo đất', 'Dễ làm chai đất nếu lạm dụng'], 3, 'Lạm dụng phân vô cơ làm chai đất.'),
    Q('Cách bón phân lót?', ['Bón khi thu hoạch', 'Bón vào đất trước khi gieo trồng', 'Phun lên lá', 'Bón khi cây đã lớn'], 1, 'Bón lót thực hiện trước khi gieo trồng.'),
    Q('Bón thúc là?', ['Bón vào nước', 'Bón sau khi thu hoạch', 'Bón trước khi gieo', 'Bón trong thời gian cây sinh trưởng'], 3, 'Bón thúc bổ sung dinh dưỡng khi cây đang phát triển.'),
    Q('Bón phân quá nhiều sẽ?', ['Không ảnh hưởng', 'Gây ô nhiễm, cây phát triển không cân đối, lãng phí', 'Cây phát triển tốt hơn', 'Tăng năng suất'], 1, 'Bón quá nhiều gây hại cho cây và đất.'),
  ]),

  M(8, 'Giống cây trồng', [
    Q('Giống cây trồng có vai trò?', ['Quyết định năng suất, chất lượng sản phẩm', 'Chỉ ảnh hưởng màu sắc', 'Chỉ là phụ', 'Chỉ ảnh hưởng đến thời gian thu hoạch'], 0, 'Giống quyết định năng suất và chất lượng.'),
    Q('Phương pháp tạo giống truyền thống?', ['Nhân bản vô tính', 'Biến đổi gen', 'Chọn lọc, lai tạo', 'Cấy mô'], 2, 'Chọn lọc và lai tạo là phương pháp truyền thống.'),
    Q('Phương pháp tạo giống hiện đại?', ['Chọn lọc đơn giản', 'Nuôi cấy mô, biến đổi gen', 'Không can thiệp', 'Để cây tự thụ phấn'], 1, 'Nuôi cấy mô, biến đổi gen là kỹ thuật hiện đại.'),
    Q('Hạt giống tốt cần có đặc điểm?', ['Kích thước hạt càng to càng tốt, không cần chọn lọc', 'Lép, mốc', 'Sạch, đồng đều, tỉ lệ nảy mầm cao', 'Lẫn tạp'], 2, 'Hạt giống tốt phải sạch và nảy mầm cao.'),
    Q('Bảo quản hạt giống đúng cách?', ['Để hở miệng bao', 'Khô ráo, mát, kín, tránh sâu mọt', 'Để nơi ẩm để hạt giữ độ tươi', 'Để dưới nắng gay gắt'], 1, 'Khô ráo, mát, kín, tránh sâu mọt.'),
  ]),

  M(9, 'Kỹ thuật làm đất và gieo trồng', [
    Q('Mục đích làm đất?', ['Khô đất', 'Làm đất bí', 'Tạo độ tơi xốp, thoáng, diệt cỏ và sâu bệnh', 'Làm đất cứng'], 2, 'Làm đất giúp tơi xốp và diệt cỏ.'),
    Q('Các công việc làm đất chính?', ['Chỉ cày', 'Chỉ phun thuốc', 'Chỉ tưới nước', 'Cày, bừa, đập đất, lên luống'], 3, 'Cày — bừa — đập — lên luống là các bước cơ bản.'),
    Q('Có mấy cách gieo trồng?', ['10 cách', '3: gieo vãi, gieo theo hàng, gieo theo hốc', '5 cách', '1 cách'], 1, '3 cách: vãi, theo hàng, theo hốc.'),
    Q('Trồng cây bằng cây giống (cấy) phù hợp với?', ['Cây gieo bằng hạt thẳng', 'Cây con đã ươm sẵn (rau, lúa, cà chua...)', 'Cỏ dại', 'Cây không cần trồng'], 1, 'Cấy phù hợp với cây con đã ươm sẵn.'),
    Q('Thời vụ gieo trồng phụ thuộc vào?', ['Tâm trạng người trồng', 'Giá thị trường', 'Không có cơ sở', 'Loại cây, khí hậu và đất đai'], 3, 'Thời vụ tuỳ loại cây và điều kiện tự nhiên.'),
  ]),

  M(10, 'Chăm sóc cây trồng', [
    Q('Các công việc chăm sóc cây trồng chính?', ['Tỉa, dặm, làm cỏ, vun xới, tưới tiêu, bón thúc', 'Chỉ tưới nước', 'Chỉ thu hoạch', 'Chỉ phun thuốc'], 0, 'Có nhiều công việc chăm sóc cây trồng.'),
    Q('Tỉa cây nhằm?', ['Tăng số cây trong hốc', 'Diệt hết cây', 'Không có tác dụng', 'Loại bỏ cây yếu, sâu bệnh, để cây tốt phát triển'], 3, 'Tỉa giúp cây tốt phát triển tốt hơn.'),
    Q('Dặm cây là?', ['Trồng bù vào chỗ cây chết để đảm bảo mật độ', 'Cắt ngọn', 'Loại bỏ cây', 'Bón phân'], 0, 'Dặm = trồng thêm vào chỗ trống.'),
    Q('Tưới nước cho cây nên thực hiện?', ['Giữa trưa nắng gắt', 'Sáng sớm hoặc chiều mát', 'Khi mưa to', 'Đêm khuya lạnh'], 1, 'Tưới khi mát giúp giảm bốc hơi.'),
    Q('Vun xới gốc cây để?', ['Đất cứng hơn', 'Đất tơi xốp quanh gốc, rễ phát triển tốt', 'Diệt cây', 'Cây chết nhanh'], 1, 'Vun xới giúp đất quanh gốc tơi xốp.'),
  ]),

  M(11, 'Phòng trừ sâu bệnh hại cây trồng', [
    Q('Sâu bệnh gây tác hại?', ['Tăng năng suất', 'Tốt cho cây', 'Giảm năng suất, chất lượng nông sản', 'Không ảnh hưởng'], 2, 'Sâu bệnh làm giảm năng suất và chất lượng.'),
    Q('Nguyên tắc "4 đúng" trong dùng thuốc bảo vệ thực vật?', ['Tuỳ thích', 'Bừa bãi', 'Càng nhiều càng tốt', 'Đúng thuốc — đúng lúc — đúng liều — đúng cách'], 3, '"4 đúng" là quy tắc dùng thuốc BVTV an toàn.'),
    Q('Biện pháp phòng sâu bệnh tự nhiên?', ['Bỏ hoang đất', 'Phun thuốc liên tục', 'Luân canh, vệ sinh ruộng vườn, dùng giống kháng sâu bệnh', 'Phá hết cây'], 2, 'Biện pháp canh tác là cách phòng tự nhiên.'),
    Q('Biện pháp sinh học chống sâu bệnh?', ['Dùng thiên địch, vi sinh có ích', 'Đốt cây', 'Phun nước nhiều', 'Dùng thuốc hoá học'], 0, 'Sinh học = dùng thiên địch, vi sinh.'),
    Q('Khi phun thuốc BVTV cần?', ['Đeo khẩu trang, găng tay, kính bảo hộ; phun xuôi gió', 'Phun gần nguồn nước', 'Không bảo hộ', 'Phun ngược gió'], 0, 'Bảo hộ và phun xuôi gió là quy tắc an toàn.'),
  ]),

  M(12, 'Thu hoạch, bảo quản và chế biến nông sản', [
    Q('Yêu cầu thu hoạch?', ['Để lâu trên cây', 'Bừa bãi', 'Càng sớm càng tốt', 'Đúng độ chín, đúng thời điểm, gọn nhẹ, ít hư hỏng'], 3, 'Thu hoạch đúng lúc đảm bảo chất lượng.'),
    Q('Các phương pháp bảo quản nông sản?', ['Phơi khô, sấy, đông lạnh, đóng hộp, hút chân không', 'Vứt bừa', 'Ngâm trong nước muối nhạt nhiều ngày', 'Để ngoài trời'], 0, 'Có nhiều phương pháp bảo quản nông sản.'),
    Q('Bảo quản lúa khô đúng cách?', ['Đổ lúa vào bao ni-lông kín khi còn ẩm', 'Phơi/sấy khô, đóng bao, để nơi khô thoáng, tránh ẩm', 'Đổ đống ngoài trời', 'Đậy kín mục nát'], 1, 'Khô và thoáng là điều kiện bảo quản tốt.'),
    Q('Chế biến nông sản nhằm?', ['Không có ích', 'Tăng giá trị, kéo dài thời gian bảo quản, đa dạng sản phẩm', 'Giảm giá trị', 'Phá huỷ sản phẩm'], 1, 'Chế biến tăng giá trị và kéo dài bảo quản.'),
    Q('Sản phẩm chế biến từ lúa?', ['Cà phê', 'Gạo, bún, phở, bánh tráng, bia, rượu', 'Đường mía và mật rỉ', 'Dầu thực vật ép từ hạt'], 1, 'Lúa được chế biến thành nhiều sản phẩm.'),
  ]),

  M(13, 'Trồng cây rừng và bảo vệ rừng', [
    Q('Vai trò của rừng?', ['Điều hoà khí hậu, giữ đất, cấp gỗ, bảo tồn đa dạng sinh học', 'Cản trở phát triển', 'Chỉ làm cảnh', 'Không có vai trò'], 0, 'Rừng có nhiều vai trò quan trọng.'),
    Q('Vì sao cần trồng cây gây rừng?', ['Không cần thiết', 'Để có nhiều gỗ thôi', 'Phục hồi diện tích rừng đã mất, chống xói mòn', 'Để chiếm đất'], 2, 'Trồng cây gây rừng phục hồi và bảo vệ môi trường.'),
    Q('Thời vụ trồng cây rừng ở miền Bắc?', ['Bất kì lúc nào', 'Mùa xuân và mùa thu', 'Mùa đông giá rét', 'Mùa hạ nắng nóng'], 1, 'Xuân và thu là thời vụ trồng rừng phù hợp ở Bắc.'),
    Q('Hành vi nào BẢO VỆ rừng?', ['Trồng cây, ngăn chặn chặt phá, phòng chống cháy rừng', 'Đốt rừng làm rẫy', 'Săn bắt động vật quý', 'Khai thác trái phép'], 0, 'Trồng cây, ngăn chặn chặt phá là bảo vệ rừng.'),
    Q('Cháy rừng gây tác hại?', ['Tạo đất mới', 'Tốt cho rừng', 'Không tác hại', 'Mất rừng, gây ô nhiễm, mất đa dạng sinh học'], 3, 'Cháy rừng gây hậu quả nghiêm trọng.'),
  ]),

  M(14, 'Ôn tập chương 1 — Trồng trọt', [
    Q('Thành phần chính của đất gồm?', ['Khoáng, hữu cơ, nước, không khí', 'Chỉ nước', 'Chỉ cát', 'Chỉ khoáng'], 0, 'Đất gồm 4 thành phần chính.'),
    Q('3 nhóm phân bón chính?', ['Phân chuồng, phân xanh', 'Phân lá', 'Đạm, lân, kali', 'Hữu cơ, vô cơ, vi sinh'], 3, 'Hữu cơ, vô cơ, vi sinh là 3 nhóm chính.'),
    Q('Nguyên tắc dùng thuốc BVTV?', ['Không cần quy tắc', '4 đúng: thuốc, lúc, liều, cách', 'Bừa bãi', 'Càng nhiều càng tốt'], 1, '"4 đúng" là nguyên tắc cơ bản.'),
    Q('Mục đích làm đất?', ['Chỉ để cho đẹp mắt ruộng đồng', 'Khô đất', 'Tơi xốp, thoáng, diệt cỏ và sâu', 'Làm đất cứng'], 2, 'Làm đất tạo điều kiện cho cây phát triển.'),
    Q('Bảo vệ rừng KHÔNG bao gồm?', ['Phòng cháy', 'Đốt rừng làm rẫy', 'Ngăn chặn chặt phá', 'Trồng cây'], 1, 'Đốt rừng làm rẫy là hành vi phá hoại rừng.'),
  ]),

  // ════════════════ CHƯƠNG 2 — CHĂN NUÔI (T15–25) ════════════════
  M(15, 'Vai trò của chăn nuôi', [
    Q('Chăn nuôi là?', ['Khai thác rừng', 'Nuôi dưỡng vật nuôi để lấy sản phẩm', 'Trồng cây', 'Khai thác cá'], 1, 'Chăn nuôi là nuôi vật nuôi lấy sản phẩm.'),
    Q('Vai trò của chăn nuôi?', ['Chỉ làm cảnh', 'Cấp thực phẩm, sức kéo, phân bón và nguyên liệu', 'Không có vai trò', 'Phá hoại môi trường'], 1, 'Chăn nuôi cấp thực phẩm và nhiều sản phẩm.'),
    Q('Sản phẩm chính của chăn nuôi?', ['Phân chuồng và rơm rạ', 'Hạt giống cây trồng', 'Rau xanh và củ quả', 'Thịt, trứng, sữa, lông, da'], 3, 'Thịt, trứng, sữa, lông, da là sản phẩm chăn nuôi.'),
    Q('Vật nuôi nào cấp sữa phổ biến ở VN?', ['Gà ri', 'Lợn nái', 'Bò sữa', 'Trâu cày'], 2, 'Bò sữa là vật nuôi cấp sữa chính.'),
    Q('Trâu, bò ở nông thôn VN dùng làm gì?', ['Cấp sữa duy nhất', 'Cấp trứng', 'Chỉ làm cảnh', 'Sức kéo cày bừa và lấy thịt'], 3, 'Trâu, bò cấp sức kéo và thịt.'),
  ]),

  M(16, 'Phân loại vật nuôi', [
    Q('Gia súc gồm?', ['Cá chép, cá trắm, cá rô phi', 'Ong mật, tằm dâu', 'Trâu, bò, lợn, dê, ngựa', 'Gà, vịt'], 2, 'Gia súc là vật nuôi có 4 chân lớn.'),
    Q('Gia cầm gồm?', ['Ong, bướm', 'Gà, vịt, ngan, ngỗng', 'Lợn, bò', 'Cá, tôm'], 1, 'Gia cầm là vật nuôi 2 chân có cánh.'),
    Q('Vật nuôi đặc sản ở VN?', ['Gà công nghiệp', 'Lợn Yorkshire', 'Bò Hà Lan', 'Gà Đông Tảo, lợn Mán, bò vàng'], 3, 'Gà Đông Tảo, lợn Mán là vật nuôi đặc sản.'),
    Q('Vật nuôi lấy lông?', ['Cừu, dê, thỏ angora', 'Cá tra và cá basa', 'Tôm sú và tôm thẻ', 'Lợn ỉ và lợn móng cái'], 0, 'Cừu, thỏ là vật nuôi lấy lông.'),
    Q('Ong mật được nuôi để?', ['Lấy trứng', 'Lấy mật ong và sáp ong', 'Lấy sữa', 'Lấy thịt'], 1, 'Ong cho mật và sáp.'),
  ]),

  M(17, 'Chọn giống vật nuôi', [
    Q('Giống vật nuôi quyết định?', ['Chỉ ảnh hưởng màu lông', 'Không có ý nghĩa', 'Chỉ ảnh hưởng kích cỡ', 'Năng suất, chất lượng sản phẩm'], 3, 'Giống quyết định năng suất và chất lượng.'),
    Q('Chọn giống vật nuôi tốt dựa vào?', ['Ngoại hình, năng suất, khả năng sinh sản và sức khoẻ', 'Chỉ giá rẻ', 'Dựa vào số lượng con trong đàn', 'Chỉ ngoại hình'], 0, 'Nhiều tiêu chí khi chọn giống vật nuôi.'),
    Q('Phương pháp nhân giống thuần chủng?', ['Lai khác giống', 'Lai giữa hai giống khác loài', 'Tạo giống bằng máy', 'Cho giao phối giữa vật nuôi cùng giống'], 3, 'Thuần chủng = giao phối cùng giống.'),
    Q('Phương pháp lai giống?', ['Nhân bản vô tính', 'Cho giao phối giữa các giống khác nhau để tạo con lai tốt', 'Lai cận huyết', 'Giao phối cùng giống'], 1, 'Lai khác giống tạo con lai có ưu thế.'),
    Q('Vì sao cần chọn giống cẩn thận?', ['Để mất tiền', 'Không cần thiết', 'Để đảm bảo năng suất và chất lượng đàn', 'Để khoe khoang'], 2, 'Chọn giống tốt đảm bảo hiệu quả chăn nuôi.'),
  ]),

  M(18, 'Ôn tập học kì 1', [
    Q('Trồng trọt cung cấp?', ['Khoáng sản', 'Lương thực, thực phẩm, nguyên liệu', 'Cá tôm', 'Thịt sữa'], 1, 'Trồng trọt cấp lương thực, thực phẩm, nguyên liệu.'),
    Q('Đất phù sa là đất?', ['Cát khô', 'Đá cứng', 'Sét cứng', 'Giàu mùn, tơi xốp, rất tốt cho trồng trọt'], 3, 'Đất phù sa giàu mùn.'),
    Q('Phân hữu cơ?', ['Phân chuồng, phân xanh, phân bắc', 'Hóa học', 'Đạm — lân — kali', 'Vi sinh'], 0, 'Phân hữu cơ gồm chuồng, xanh, bắc.'),
    Q('Chăn nuôi cấp?', ['Khoáng sản', 'Thịt, trứng, sữa, sức kéo', 'Gỗ, rau, hạt', 'Không có gì'], 1, 'Chăn nuôi cấp sản phẩm động vật.'),
    Q('Gia cầm gồm?', ['Lợn, bò', 'Cá, tôm', 'Trâu, dê', 'Gà, vịt, ngan, ngỗng'], 3, 'Gia cầm là loại 2 chân có cánh.'),
  ]),

  M(19, 'Thức ăn vật nuôi', [
    Q('Thức ăn vật nuôi là?', ['Chất độn chuồng giữ ấm cho vật nuôi', 'Sản phẩm cấp cho vật nuôi để duy trì sự sống và sinh trưởng', 'Nước biển', 'Thuốc thú y phòng bệnh định kỳ'], 1, 'Thức ăn cấp năng lượng và dinh dưỡng.'),
    Q('Các loại thức ăn vật nuôi?', ['Thức ăn thực vật, động vật, khoáng và thức ăn hỗn hợp', 'Chỉ thịt', 'Chỉ rau', 'Chỉ cám'], 0, 'Có nhiều loại thức ăn cho vật nuôi.'),
    Q('Thức ăn xanh cho trâu bò là?', ['Cỏ tươi, rau xanh, ngọn mía', 'Cám gạo', 'Bột cá và khô đậu tương', 'Bột cá'], 0, 'Trâu bò ăn cỏ tươi và rau xanh.'),
    Q('Thức ăn tinh là?', ['Toàn nước', 'Có nhiều bột đường, đạm (cám, ngô, đỗ tương)', 'Rau tươi', 'Cỏ khô'], 1, 'Thức ăn tinh giàu năng lượng và đạm.'),
    Q('Thức ăn hỗn hợp công nghiệp có ưu điểm?', ['Giảm năng suất', 'Khó dùng', 'Mất cân bằng', 'Cân bằng dinh dưỡng, tiện dùng, năng suất cao'], 3, 'Thức ăn công nghiệp cân bằng và tiện lợi.'),
  ]),

  M(20, 'Chế biến và bảo quản thức ăn vật nuôi', [
    Q('Mục đích chế biến thức ăn vật nuôi?', ['Để bảo quản thức ăn lâu hơn, không cần dinh dưỡng', 'Tăng giá trị dinh dưỡng, dễ tiêu, ngon miệng', 'Giảm dinh dưỡng', 'Làm hỏng'], 1, 'Chế biến giúp tăng giá trị thức ăn.'),
    Q('Phương pháp chế biến cơ học?', ['Nấu chín', 'Cắt, nghiền, băm nhỏ', 'Ủ chua', 'Lên men'], 1, 'Cơ học: cắt, nghiền, băm.'),
    Q('Phương pháp ủ chua dùng cho?', ['Thức ăn xanh (cỏ, ngọn mía) bảo quản lâu', 'Cám gạo', 'Cám gạo và bột ngô khô', 'Bột cá'], 0, 'Ủ chua phù hợp với thức ăn xanh.'),
    Q('Bảo quản thức ăn vật nuôi cần?', ['Phơi nắng gắt', 'Khô ráo, thoáng mát, tránh mốc và mọt', 'Ẩm thấp', 'Đậy kín hoàn toàn'], 1, 'Khô và thoáng tránh mốc mọt.'),
    Q('Thức ăn bị mốc cho vật nuôi ăn sẽ?', ['Không sao', 'Tốt cho vật nuôi', 'Tăng cân nhanh', 'Gây bệnh, ảnh hưởng sức khoẻ và năng suất'], 3, 'Thức ăn mốc rất nguy hiểm cho vật nuôi.'),
  ]),

  M(21, 'Chuồng nuôi và vệ sinh chuồng trại', [
    Q('Chuồng nuôi cần?', ['Chật chội', 'Ẩm thấp', 'Khô ráo, thoáng, mát mùa hè, ấm mùa đông', 'Tối tăm'], 2, 'Chuồng cần đảm bảo điều kiện sống tốt.'),
    Q('Hướng chuồng tốt thường?', ['Hướng đông nam, tránh gió bắc, đón nắng sáng', 'Hướng tây bắc', 'Đối diện gió', 'Hướng bất kì'], 0, 'Hướng đông nam tốt cho chuồng.'),
    Q('Vệ sinh chuồng trại nhằm?', ['Không cần thiết', 'Tăng dịch bệnh', 'Phòng bệnh, tăng năng suất, bảo vệ môi trường', 'Phá hoại vật nuôi'], 2, 'Vệ sinh giúp phòng bệnh cho vật nuôi.'),
    Q('Tần suất vệ sinh chuồng?', ['Không cần', 'Khi có dịch mới làm', 'Hàng ngày dọn phân, định kì khử trùng', 'Một năm một lần'], 2, 'Vệ sinh thường xuyên là cần thiết.'),
    Q('Phân vật nuôi thu được dùng để?', ['Vứt bỏ', 'Bón cây trồng (phân hữu cơ)', 'Đốt hết', 'Đổ ra sông'], 1, 'Phân vật nuôi là phân hữu cơ quý.'),
  ]),

  M(22, 'Chăm sóc vật nuôi', [
    Q('Chăm sóc vật nuôi gồm?', ['Chỉ uống', 'Cho ăn uống, vệ sinh, kiểm tra sức khoẻ thường xuyên', 'Chỉ cho ăn', 'Bỏ mặc'], 1, 'Chăm sóc gồm nhiều khâu.'),
    Q('Vật nuôi con (sơ sinh) cần?', ['Tách mẹ lập tức', 'Cho ăn cỏ ngay', 'Bú sữa đầu, giữ ấm, vệ sinh', 'Để ngoài trời'], 2, 'Con sơ sinh cần sữa đầu và giữ ấm.'),
    Q('Vật nuôi cái sinh sản cần?', ['Chế độ ăn đặc biệt, theo dõi sức khoẻ', 'Cho ăn ít', 'Đối xử như con khác', 'Không cần chăm'], 0, 'Vật nuôi mang thai cần chăm sóc đặc biệt.'),
    Q('Cho vật nuôi uống nước cần?', ['Không cần', 'Đủ và sạch hàng ngày', 'Hạn chế', 'Uống nước bẩn'], 1, 'Nước sạch và đủ là rất quan trọng.'),
    Q('Quan sát vật nuôi để?', ['Phát hiện sớm bệnh và bất thường', 'Khi chuẩn bị bán', 'Chỉ khi có dịch', 'Không cần'], 0, 'Quan sát thường xuyên phát hiện bệnh sớm.'),
  ]),

  M(23, 'Phòng và trị bệnh cho vật nuôi', [
    Q('Phòng bệnh tốt hơn?', ['Tuỳ may rủi', 'Không cần phòng', 'Trị bệnh', 'Đợi bị bệnh'], 2, '"Phòng bệnh hơn chữa bệnh".'),
    Q('Biện pháp phòng bệnh cơ bản?', ['Tiêm vắc-xin, vệ sinh chuồng, ăn uống sạch', 'Không tiêm gì', 'Để mặc', 'Cho ăn bẩn'], 0, 'Vắc-xin và vệ sinh là cốt lõi phòng bệnh.'),
    Q('Vắc-xin có tác dụng?', ['Tạo miễn dịch chủ động chống bệnh', 'Gây bệnh', 'Diệt vật nuôi', 'Không có tác dụng'], 0, 'Vắc-xin giúp tạo miễn dịch chống bệnh.'),
    Q('Khi vật nuôi bị bệnh cần?', ['Cách ly, báo thú y, điều trị kịp thời', 'Không xử lý', 'Bán ngay', 'Để chung đàn'], 0, 'Cách ly và báo thú y khi vật nuôi bệnh.'),
    Q('Bệnh truyền nhiễm nguy hiểm ở gia cầm?', ['Cúm gia cầm (H5N1)', 'Cảm cúm thường', 'Đau bụng', 'Bệnh tụ huyết trùng ở trâu bò'], 0, 'H5N1 rất nguy hiểm với gia cầm và người.'),
  ]),

  M(24, 'Bảo vệ môi trường trong chăn nuôi', [
    Q('Vấn đề môi trường trong chăn nuôi?', ['Cải thiện môi trường', 'Mùi hôi, nước thải, khí thải gây ô nhiễm', 'Tốt cho không khí', 'Không có vấn đề'], 1, 'Chăn nuôi gây ô nhiễm nếu không quản lý tốt.'),
    Q('Biện pháp xử lý chất thải chăn nuôi?', ['Hầm biogas, ủ phân hữu cơ, hồ sinh học', 'Đốt hết', 'Vứt bừa', 'Đổ ra sông'], 0, 'Hầm biogas và ủ phân là biện pháp đúng.'),
    Q('Hầm biogas cho vật gì?', ['Tạo khí gas đun nấu từ phân và nước thải', 'Tạo nước sạch', 'Nuôi cá', 'Sản xuất điện'], 0, 'Biogas tận dụng chất thải để tạo gas.'),
    Q('Vì sao cần bảo vệ môi trường chăn nuôi?', ['Đảm bảo sức khoẻ cộng đồng và phát triển bền vững', 'Tốn tiền vô ích', 'Để khoe', 'Không cần'], 0, 'Bảo vệ môi trường là yêu cầu bền vững.'),
  ]),

  M(25, 'Ôn tập chương 2 — Chăn nuôi', [
    Q('Sản phẩm chăn nuôi chính?', ['Thịt, trứng, sữa', 'Khoáng sản', 'Cá, tôm', 'Gỗ, rau'], 0, 'Thịt, trứng, sữa là sản phẩm chăn nuôi.'),
    Q('Thức ăn tinh là?', ['Muối khoáng bổ sung vi lượng', 'Cỏ tươi', 'Rơm rạ phơi khô làm chất độn', 'Cám, ngô, đỗ tương — giàu năng lượng'], 3, 'Tinh = giàu năng lượng/đạm.'),
    Q('Phương pháp ủ chua dùng cho?', ['Đá khoáng', 'Thức ăn xanh', 'Bột ngô và cám gạo khô', 'Bột cá'], 1, 'Ủ chua bảo quản thức ăn xanh.'),
    Q('Phòng bệnh cho vật nuôi cần?', ['Đợi bệnh', 'Không cần', 'Vắc-xin, vệ sinh, dinh dưỡng tốt', 'Bỏ mặc'], 2, 'Vắc-xin và vệ sinh là chính.'),
    Q('Xử lý chất thải chăn nuôi?', ['Đốt hết', 'Hầm biogas, ủ phân', 'Đổ sông', 'Vứt bừa'], 1, 'Hầm biogas và ủ phân là cách đúng.'),
  ]),

  // ════════════════ CHƯƠNG 3 — THUỶ SẢN (T26–34) ════════════════
  M(26, 'Vai trò của thuỷ sản', [
    Q('Thuỷ sản là?', ['Tảo độc', 'Các sinh vật sống trong nước được con người nuôi/khai thác', 'Đá dưới sông', 'Cây trên cạn'], 1, 'Thuỷ sản là sinh vật nước (cá, tôm, cua, hải sản).'),
    Q('Vai trò của thuỷ sản?', ['Phá hoại môi trường', 'Cản trở phát triển', 'Cấp thực phẩm giàu đạm, xuất khẩu, tạo việc làm', 'Không có vai trò'], 2, 'Thuỷ sản cấp đạm và là ngành xuất khẩu lớn.'),
    Q('Việt Nam là nước có thế mạnh về?', ['Lúa mì', 'Khoai tây', 'Nuôi trồng và xuất khẩu thuỷ sản', 'Cao lương'], 2, 'VN là cường quốc thuỷ sản, xuất khẩu mạnh.'),
    Q('Mặt hàng thuỷ sản xuất khẩu chủ lực của VN?', ['Bột mì', 'Cao lương', 'Tôm, cá tra, cá basa, cá ngừ', 'Lúa mì'], 2, 'Tôm, cá tra, cá basa là chủ lực.'),
    Q('Có mấy loại hình nuôi thuỷ sản?', ['10 loại', 'Nước ngọt, nước mặn, nước lợ', '1 loại', '5 loại'], 1, 'Nuôi nước ngọt, nước mặn, nước lợ là 3 loại chính.'),
  ]),

  M(27, 'Các loại thuỷ sản nuôi phổ biến', [
    Q('Cá nước ngọt nuôi phổ biến ở VN?', ['Cá ngừ', 'Cá hồi', 'Cá chép, mè, trôi, trắm, rô phi, cá tra', 'Cá thu'], 2, 'Cá chép, mè, trôi, trắm là cá nước ngọt phổ biến.'),
    Q('Cá nước mặn (biển) nuôi phổ biến?', ['Cá trắm cỏ', 'Cá rô phi', 'Cá ngừ, cá vược, cá mú', 'Cá chép'], 2, 'Cá ngừ, cá vược, cá mú nuôi nước mặn.'),
    Q('Tôm nuôi phổ biến ở VN?', ['Tôm sú, tôm thẻ chân trắng, tôm càng xanh', 'Tôm hùm baby và cua đồng', 'Tôm hùm Đại Tây Dương', 'Cá voi'], 0, 'Tôm sú, tôm thẻ, càng xanh là chính.'),
    Q('Cá tra nuôi nhiều ở đâu?', ['Tây Bắc', 'Đồng bằng sông Cửu Long', 'Tây Nguyên', 'Bắc Cực'], 1, 'Cá tra nuôi chủ yếu ở ĐBSCL.'),
    Q('Cá rô phi có đặc điểm gì nổi bật?', ['Sinh sản chậm', 'Chỉ ăn thịt', 'Dễ nuôi, ăn tạp, sinh sản nhanh', 'Khó nuôi'], 2, 'Cá rô phi dễ nuôi và sinh sản nhanh.'),
  ]),

  M(28, 'Môi trường nuôi thuỷ sản', [
    Q('Yêu cầu chất lượng nước nuôi thuỷ sản?', ['Đục ngầu', 'Sạch, đủ oxy, pH phù hợp, nhiệt độ ổn định', 'Có hoá chất', 'Nước có nhiều phù sa và chất hữu cơ phân huỷ'], 1, 'Nước sạch là yêu cầu cốt lõi.'),
    Q('pH thích hợp cho ao nuôi cá nước ngọt?', ['12–14', 'Khoảng 6,5–8,5', '15', '0–2'], 1, 'pH 6,5–8,5 là phù hợp cho cá nước ngọt.'),
    Q('Oxy hoà tan trong nước cần?', ['Bất kì', '0 mg/L', '20 mg/L', 'Đủ để cá hô hấp (>4 mg/L)'], 3, 'Cá cần oxy hoà tan >4 mg/L.'),
    Q('Nguồn nước nuôi tốt nhất là?', ['Nước hoá chất', 'Nước sông, hồ, giếng đã qua xử lý', 'Nước nhiễm phèn nặng', 'Nước thải'], 1, 'Nước tự nhiên đã xử lý là tốt nhất.'),
    Q('Khi cá nổi đầu lên mặt nước nhiều có thể do?', ['Cá ngủ', 'Thiếu oxy', 'Cá khoẻ', 'Cá no quá'], 1, 'Cá nổi đầu thường do thiếu oxy.'),
  ]),

  M(29, 'Thức ăn cho thuỷ sản', [
    Q('Thức ăn cho cá gồm?', ['Thức ăn tự nhiên (tảo, sinh vật phù du) và thức ăn nhân tạo (cám viên)', 'Chỉ cỏ', 'Chỉ đá', 'Chỉ thịt'], 0, 'Cá ăn cả thức ăn tự nhiên và nhân tạo.'),
    Q('Thức ăn tự nhiên có nguồn gốc?', ['Bột thịt', 'Sinh vật phù du, tảo, mùn bã', 'Cám công nghiệp', 'Bột cá'], 1, 'Thức ăn tự nhiên có sẵn trong ao.'),
    Q('Thức ăn công nghiệp có ưu điểm?', ['Mất cân bằng', 'Không hiệu quả', 'Cân bằng dinh dưỡng, tăng trưởng nhanh', 'Khó dùng'], 2, 'Thức ăn công nghiệp giúp cá tăng trưởng nhanh.'),
    Q('Cho ăn cá đúng cách?', ['Vứt bừa', 'Đúng giờ, đúng lượng, theo dõi cá ăn', 'Bỏ đói', 'Cho nhiều một lần'], 1, 'Đúng giờ đúng lượng giúp cá phát triển tốt.'),
    Q('Thức ăn dư thừa trong ao sẽ?', ['Tốt cho cá', 'Không ảnh hưởng', 'Làm ô nhiễm nước, gây bệnh cho cá', 'Cá ăn hết'], 2, 'Thức ăn dư làm ô nhiễm nước.'),
  ]),

  M(30, 'Phương pháp nuôi thuỷ sản', [
    Q('Có mấy phương pháp nuôi cá phổ biến?', ['20 phương pháp', '10 phương pháp', '1 phương pháp', 'Ao, lồng bè, đăng quầng, ruộng'], 3, 'Nhiều phương pháp nuôi cá khác nhau.'),
    Q('Nuôi cá trong ao đất phù hợp?', ['Nuôi cá nước ngọt thông thường', 'Cá voi', 'Cá biển sâu', 'Tôm hùm'], 0, 'Ao đất phù hợp cá nước ngọt.'),
    Q('Nuôi cá lồng bè phù hợp?', ['Trên núi cao', 'Sa mạc', 'Sông, hồ, biển có dòng chảy', 'Ao nhỏ nước tù không lưu thông'], 2, 'Lồng bè đặt nơi nước chảy nhẹ.'),
    Q('Nuôi tôm thẻ chân trắng cần?', ['Trên cạn', 'Ao đất với hệ thống quạt nước cung cấp oxy', 'Không cần oxy', 'Ao nước ngọt sâu'], 1, 'Tôm thẻ cần ao có quạt nước cấp oxy.'),
    Q('Nuôi cá kết hợp với trồng lúa (cá — lúa) có ưu điểm?', ['Tăng thu nhập, cải tạo đất', 'Không có lợi', 'Giảm thu nhập', 'Phá ruộng'], 0, 'Mô hình cá — lúa giúp tăng thu nhập.'),
  ]),

  M(31, 'Phòng bệnh cho thuỷ sản', [
    Q('Phòng bệnh cá quan trọng vì?', ['Khi cá bị bệnh khó chữa, dễ chết hàng loạt', 'Chỉ cần thay nước khi cá có dấu hiệu bệnh', 'Cá không bao giờ bệnh', 'Cá tự khỏi'], 0, 'Phòng bệnh quan trọng vì khó trị khi đã bệnh.'),
    Q('Biện pháp phòng bệnh cá?', ['Không vệ sinh', 'Cho ăn bẩn', 'Giữ nước sạch, ăn vừa đủ, chọn giống khoẻ', 'Nuôi mật độ cao'], 2, 'Vệ sinh và dinh dưỡng tốt là phòng bệnh chính.'),
    Q('Trước khi thả cá giống vào ao cần?', ['Để cá nhịn đói', 'Tắm cá bằng nước muối loãng để diệt mầm bệnh', 'Đổ thuốc trừ sâu', 'Thả thẳng vào'], 1, 'Tắm muối loãng là cách phòng bệnh khi thả giống.'),
    Q('Khi phát hiện cá chết bất thường cần?', ['Để mặc', 'Không xử lý', 'Cho ăn nhiều thêm', 'Vớt ra, xử lý môi trường, tìm nguyên nhân'], 3, 'Xử lý kịp thời để tránh lây lan.'),
    Q('Mật độ thả cá quá dày dễ?', ['Gây thiếu oxy, dễ bệnh, chậm lớn', 'Cá khoẻ hơn', 'Tăng năng suất', 'Không ảnh hưởng'], 0, 'Mật độ dày làm cá thiếu oxy và dễ bệnh.'),
  ]),

  M(32, 'Thu hoạch và bảo quản thuỷ sản', [
    Q('Thời điểm thu hoạch cá?', ['Bất kì lúc nào', 'Khi cá chết', 'Ngay khi thả', 'Khi đạt trọng lượng thương phẩm'], 3, 'Thu hoạch khi cá đủ trọng lượng thương phẩm.'),
    Q('Phương pháp thu hoạch cá ao?', ['Đào ao', 'Bơm hết nước biển', 'Tháo nước hoặc kéo lưới', 'Đập phá'], 2, 'Tháo nước hoặc kéo lưới là cách phổ biến.'),
    Q('Bảo quản cá tươi đúng cách?', ['Ướp lạnh hoặc ướp đá ngay sau thu hoạch', 'Để ngoài trời', 'Phơi nắng', 'Để nơi ẩm'], 0, 'Ướp lạnh giữ cá tươi.'),
    Q('Chế biến cá có thể là?', ['Cá khô, nước mắm, cá hộp, surimi', 'Đốt hết', 'Để hỏng', 'Vứt bỏ'], 0, 'Có nhiều cách chế biến cá.'),
    Q('Nước mắm là sản phẩm chế biến từ?', ['Tôm sống', 'Cá khô nghiền', 'Cá tươi ủ với muối', 'Đường mía'], 2, 'Nước mắm = cá tươi + muối + ủ lâu.'),
  ]),

  M(33, 'An toàn vệ sinh thực phẩm thuỷ sản', [
    Q('An toàn vệ sinh thuỷ sản nghĩa là?', ['Sản phẩm có dư lượng kháng sinh thấp dưới ngưỡng', 'Sản phẩm không nhiễm vi khuẩn, hoá chất độc hại', 'Có chất bảo quản', 'Có thuốc'], 1, 'ATVSTP = không độc hại cho người dùng.'),
    Q('Sản phẩm thuỷ sản cần đạt tiêu chuẩn?', ['Chỉ cần đạt cảm quan tươi ngon', 'Càng bẩn càng tốt', 'Không cần', 'VietGAP, GlobalGAP, HACCP'], 3, 'VietGAP, GlobalGAP, HACCP là tiêu chuẩn.'),
    Q('Để có thuỷ sản sạch, người nuôi cần?', ['Không dùng chất cấm, kiểm soát thức ăn — môi trường', 'Mặc kệ', 'Dùng nhiều thuốc kháng sinh', 'Dùng chất tăng trọng cấm'], 0, 'Không dùng chất cấm là điều kiện tiên quyết.'),
    Q('Bảo vệ môi trường nuôi thuỷ sản bằng cách?', ['Xả thẳng ra biển', 'Không xử lý', 'Xử lý nước thải, không xả bừa, dùng chế phẩm sinh học', 'Đổ hoá chất'], 2, 'Xử lý nước thải bảo vệ môi trường.'),
    Q('Khai thác thuỷ sản tự nhiên cần?', ['Đúng quy định, không dùng chất nổ — xung điện', 'Dùng mìn cho nhanh', 'Đánh bắt cá nhỏ', 'Không cần luật'], 0, 'Khai thác hợp lý bảo vệ nguồn lợi.'),
  ]),

  M(34, 'Ôn tập chương 3 — Thuỷ sản', [
    Q('Cá nước ngọt phổ biến?', ['Cá thu', 'Cá ngừ', 'Cá chép, mè, trôi, trắm, rô phi', 'Cá hồi'], 2, 'Cá chép, mè, trôi, trắm là cá nước ngọt.'),
    Q('pH ao nuôi cá ngọt phù hợp?', ['0–2', '12–14', '15', '6,5–8,5'], 3, 'pH 6,5–8,5 phù hợp.'),
    Q('Tôm thẻ cần?', ['Quạt nước cấp oxy', 'Nước tù đọng', 'Sa mạc', 'Không cần oxy'], 0, 'Tôm thẻ cần quạt nước cấp oxy.'),
    Q('Thức ăn dư thừa trong ao gây?', ['Cá khoẻ hơn', 'Ô nhiễm và bệnh cho cá', 'Không tác hại', 'Tăng giá cá'], 1, 'Thức ăn dư gây ô nhiễm.'),
    Q('Khai thác cá bằng chất nổ — xung điện?', ['Tốt cho môi trường', 'Được khuyến khích', 'Vi phạm pháp luật, huỷ hoại nguồn lợi', 'Hợp pháp'], 2, 'Đánh bắt huỷ diệt bị cấm.'),
  ]),

  M(35, 'Tổng ôn cả năm', [
    Q('Trồng trọt cấp?', ['Thịt sữa', 'Khoáng', 'Cá tôm', 'Lương thực, thực phẩm, nguyên liệu'], 3, 'Trồng trọt cấp lương thực, thực phẩm.'),
    Q('3 loại phân bón chính?', ['Hữu cơ, vô cơ, vi sinh', 'Chuồng, xanh, bắc', 'Đạm, lân, kali', 'Lá, gốc, rễ'], 0, 'Hữu cơ — vô cơ — vi sinh.'),
    Q('Chăn nuôi cấp?', ['Gỗ, rau', 'Khoáng', 'Thịt, trứng, sữa, sức kéo', 'Cá tôm'], 2, 'Chăn nuôi cấp sản phẩm động vật.'),
    Q('Phòng bệnh vật nuôi bằng?', ['Vắc-xin, vệ sinh, dinh dưỡng tốt', 'Mặc kệ', 'Cho ăn bẩn', 'Đợi bệnh'], 0, 'Vắc-xin và vệ sinh là cốt lõi.'),
    Q('Thuỷ sản là?', ['Cây trên cạn', 'Sinh vật nước được nuôi/khai thác', 'Khoáng sản', 'Rong rêu mọc hoang ven biển'], 1, 'Thuỷ sản = sinh vật nước.'),
  ]),
];

export const S7CN_SCENARIOS = indexBy(S7CN_WEEKS);
