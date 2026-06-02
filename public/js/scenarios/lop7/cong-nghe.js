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
    Q('Trồng trọt là?', ['Hoạt động nông nghiệp gieo trồng cây để thu sản phẩm', 'Đánh bắt cá', 'Nuôi gia súc', 'Khai thác khoáng sản'], 0, 'Trồng trọt là hoạt động trồng cây để có sản phẩm.'),
    Q('Vai trò của trồng trọt?', ['Cung cấp lương thực, thực phẩm, nguyên liệu cho công nghiệp, xuất khẩu', 'Chỉ để làm đẹp', 'Không có vai trò gì', 'Chỉ phục vụ chăn nuôi'], 0, 'Trồng trọt cung cấp nhiều loại sản phẩm thiết yếu.'),
    Q('Lúa, ngô, khoai, sắn thuộc nhóm cây?', ['Cây lương thực', 'Cây ăn quả', 'Cây công nghiệp', 'Cây rau'], 0, 'Lúa, ngô, khoai, sắn là cây lương thực.'),
    Q('Cà phê, cao su, hồ tiêu, điều thuộc nhóm?', ['Cây công nghiệp', 'Cây lương thực', 'Cây rau', 'Cây cảnh'], 0, 'Cà phê, cao su, tiêu, điều là cây công nghiệp.'),
    Q('Việt Nam là một trong những nước xuất khẩu hàng đầu thế giới về?', ['Gạo, cà phê, hạt điều, hồ tiêu', 'Lúa mì', 'Ngô', 'Cao lương'], 0, 'Việt Nam xuất khẩu mạnh gạo, cà phê, điều, tiêu.'),
  ]),

  M(2, 'Các nhóm cây trồng phổ biến', [
    Q('Cây rau xanh thuộc nhóm cây?', ['Cây thực phẩm', 'Cây lương thực', 'Cây công nghiệp', 'Cây cảnh'], 0, 'Rau xanh là cây thực phẩm.'),
    Q('Cây cam, xoài, nhãn thuộc nhóm?', ['Cây ăn quả', 'Cây lương thực', 'Cây công nghiệp', 'Cây hoa'], 0, 'Cam, xoài, nhãn là cây ăn quả.'),
    Q('Cây hoa hồng, hoa cúc thuộc nhóm?', ['Cây hoa, cây cảnh', 'Cây lương thực', 'Cây công nghiệp', 'Cây thuốc'], 0, 'Hoa hồng, cúc là cây hoa, cây cảnh.'),
    Q('Cây nhân sâm, đinh lăng, atiso thuộc nhóm?', ['Cây dược liệu', 'Cây cảnh', 'Cây lương thực', 'Cây gỗ'], 0, 'Cây có tác dụng làm thuốc — cây dược liệu.'),
    Q('Cây keo, bạch đàn, thông trồng nhằm?', ['Lấy gỗ và phủ xanh đồi trọc', 'Lấy quả ăn', 'Lấy rau', 'Làm cảnh'], 0, 'Keo, bạch đàn là cây lâm nghiệp lấy gỗ.'),
  ]),

  M(3, 'Đất trồng và thành phần của đất', [
    Q('Đất trồng là gì?', ['Lớp bề mặt tơi xốp của vỏ Trái Đất nơi cây sinh trưởng', 'Lớp đá cứng', 'Lớp nước', 'Lớp khí'], 0, 'Đất là lớp tơi xốp bề mặt vỏ Trái Đất.'),
    Q('Đất trồng có vai trò gì với cây?', ['Cung cấp nước, dinh dưỡng, không khí và giữ cây đứng vững', 'Chỉ giữ cây', 'Chỉ cấp nước', 'Không có vai trò'], 0, 'Đất cấp nước, dinh dưỡng, không khí và giữ cây.'),
    Q('Đất trồng gồm những thành phần chính?', ['Phần khoáng, phần hữu cơ, nước và không khí', 'Chỉ cát', 'Chỉ nước', 'Chỉ đá'], 0, 'Đất gồm khoáng, hữu cơ, nước, không khí.'),
    Q('Mùn trong đất hình thành từ?', ['Xác sinh vật bị phân huỷ', 'Đá nguyên chất', 'Phân bón nhân tạo', 'Nước mưa'], 0, 'Mùn là sản phẩm phân huỷ xác sinh vật.'),
    Q('Đất nào tơi xốp, giàu mùn nhất?', ['Đất phù sa', 'Đất sét', 'Đất cát', 'Đất đá'], 0, 'Đất phù sa giàu mùn, tơi xốp.'),
  ]),

  M(4, 'Các loại đất trồng phổ biến', [
    Q('Đất cát có đặc điểm?', ['Hạt to, thoát nước nhanh, nghèo dinh dưỡng', 'Hạt mịn, giữ nước', 'Giàu mùn', 'Rất tơi xốp'], 0, 'Đất cát thoát nước nhanh và nghèo dinh dưỡng.'),
    Q('Đất sét có đặc điểm?', ['Hạt mịn, giữ nước tốt nhưng dễ bị bí', 'Thoát nước nhanh', 'Tơi xốp', 'Giàu mùn'], 0, 'Đất sét giữ nước nhưng dễ bí khí.'),
    Q('Đất thịt là?', ['Hỗn hợp cát, sét, mùn — phù hợp trồng trọt', 'Đất chỉ có cát', 'Đất chỉ có sét', 'Đất khô cằn'], 0, 'Đất thịt cân bằng nên phù hợp trồng trọt.'),
    Q('Đất feralit phổ biến ở?', ['Đồi núi nhiệt đới ẩm', 'Đồng bằng', 'Vùng cực', 'Sa mạc'], 0, 'Đất feralit có ở vùng đồi núi nhiệt đới.'),
    Q('Đất nhiễm phèn có đặc điểm?', ['Có lượng phèn cao, độ pH thấp', 'Trung tính', 'Giàu dinh dưỡng', 'Rất tốt cho cây'], 0, 'Đất phèn có pH thấp, cần cải tạo.'),
  ]),

  M(5, 'Cải tạo và bảo vệ đất', [
    Q('Vì sao cần cải tạo đất?', ['Để tăng độ phì cho cây sinh trưởng tốt', 'Không cần thiết', 'Để giảm năng suất', 'Để làm chết cây'], 0, 'Cải tạo đất giúp tăng năng suất cây trồng.'),
    Q('Biện pháp cải tạo đất chua?', ['Bón vôi', 'Bón thêm phân chua', 'Đốt đất', 'Phơi khô'], 0, 'Bón vôi giúp giảm độ chua của đất.'),
    Q('Biện pháp giữ độ phì của đất?', ['Luân canh, bón phân hữu cơ, trồng cây che phủ', 'Đốt rẫy', 'Bỏ hoang lâu', 'Phun thuốc trừ sâu'], 0, 'Luân canh và bón hữu cơ giúp giữ độ phì.'),
    Q('Cày xới đất nhằm?', ['Làm đất tơi xốp, thoáng khí, diệt cỏ dại', 'Làm cứng đất', 'Làm khô đất', 'Đẩy nước đi'], 0, 'Cày xới giúp đất tơi xốp và diệt cỏ.'),
    Q('Tác hại của xói mòn đất?', ['Mất lớp đất màu mỡ, giảm năng suất', 'Tăng năng suất', 'Tốt cho cây', 'Không ảnh hưởng'], 0, 'Xói mòn làm mất lớp đất màu mỡ.'),
  ]),

  M(6, 'Phân bón — vai trò và phân loại', [
    Q('Phân bón là?', ['Vật chất cung cấp dinh dưỡng cho cây trồng', 'Thuốc trừ sâu', 'Đất', 'Nước'], 0, 'Phân bón cấp dinh dưỡng cho cây.'),
    Q('Có mấy loại phân bón chính?', ['3: phân hữu cơ, phân vô cơ, phân vi sinh', '2 loại', '5 loại', '1 loại'], 0, 'Phân hữu cơ, vô cơ, vi sinh là 3 nhóm chính.'),
    Q('Phân hữu cơ gồm?', ['Phân chuồng, phân xanh, phân bắc, phân rác', 'Đạm, lân, kali', 'Nước muối', 'Tro than'], 0, 'Phân chuồng, xanh, bắc, rác là phân hữu cơ.'),
    Q('Phân vô cơ chủ yếu gồm?', ['Đạm (N), lân (P), kali (K)', 'Phân chuồng', 'Phân xanh', 'Phân vi sinh'], 0, 'Phân vô cơ chính: N, P, K.'),
    Q('Phân vi sinh là?', ['Phân chứa các vi sinh vật có ích cho đất và cây', 'Phân hoá học', 'Phân động vật', 'Phân lá'], 0, 'Phân vi sinh chứa vi sinh vật có ích.'),
  ]),

  M(7, 'Sử dụng phân bón hợp lý', [
    Q('Phân hữu cơ có ưu điểm gì?', ['Cải tạo đất, an toàn, bền lâu', 'Tan nhanh, mất sạch', 'Gây ô nhiễm', 'Đắt tiền nhất'], 0, 'Phân hữu cơ cải tạo đất và an toàn.'),
    Q('Phân vô cơ có nhược điểm?', ['Dễ làm chai đất nếu lạm dụng', 'Tốt cho đất', 'Cải tạo đất', 'Không nhược điểm'], 0, 'Lạm dụng phân vô cơ làm chai đất.'),
    Q('Cách bón phân lót?', ['Bón vào đất trước khi gieo trồng', 'Bón khi cây đã lớn', 'Phun lên lá', 'Bón khi thu hoạch'], 0, 'Bón lót thực hiện trước khi gieo trồng.'),
    Q('Bón thúc là?', ['Bón trong thời gian cây sinh trưởng', 'Bón trước khi gieo', 'Bón sau khi thu hoạch', 'Bón vào nước'], 0, 'Bón thúc bổ sung dinh dưỡng khi cây đang phát triển.'),
    Q('Bón phân quá nhiều sẽ?', ['Gây ô nhiễm, cây phát triển không cân đối, lãng phí', 'Cây phát triển tốt hơn', 'Tăng năng suất', 'Không ảnh hưởng'], 0, 'Bón quá nhiều gây hại cho cây và đất.'),
  ]),

  M(8, 'Giống cây trồng', [
    Q('Giống cây trồng có vai trò?', ['Quyết định năng suất, chất lượng sản phẩm', 'Không quan trọng', 'Chỉ là phụ', 'Chỉ ảnh hưởng màu sắc'], 0, 'Giống quyết định năng suất và chất lượng.'),
    Q('Phương pháp tạo giống truyền thống?', ['Chọn lọc, lai tạo', 'Biến đổi gen', 'Nhân bản vô tính', 'Cấy mô'], 0, 'Chọn lọc và lai tạo là phương pháp truyền thống.'),
    Q('Phương pháp tạo giống hiện đại?', ['Nuôi cấy mô, biến đổi gen', 'Chọn lọc đơn giản', 'Để cây tự thụ phấn', 'Không can thiệp'], 0, 'Nuôi cấy mô, biến đổi gen là kỹ thuật hiện đại.'),
    Q('Hạt giống tốt cần có đặc điểm?', ['Sạch, đồng đều, tỉ lệ nảy mầm cao', 'Lép, mốc', 'Lẫn tạp', 'Bẩn'], 0, 'Hạt giống tốt phải sạch và nảy mầm cao.'),
    Q('Bảo quản hạt giống đúng cách?', ['Khô ráo, mát, kín, tránh sâu mọt', 'Để ẩm', 'Để dưới nắng gay gắt', 'Để hở miệng bao'], 0, 'Khô ráo, mát, kín, tránh sâu mọt.'),
  ]),

  M(9, 'Kỹ thuật làm đất và gieo trồng', [
    Q('Mục đích làm đất?', ['Tạo độ tơi xốp, thoáng, diệt cỏ và sâu bệnh', 'Làm đất cứng', 'Khô đất', 'Làm đất bí'], 0, 'Làm đất giúp tơi xốp và diệt cỏ.'),
    Q('Các công việc làm đất chính?', ['Cày, bừa, đập đất, lên luống', 'Chỉ cày', 'Chỉ tưới nước', 'Chỉ phun thuốc'], 0, 'Cày — bừa — đập — lên luống là các bước cơ bản.'),
    Q('Có mấy cách gieo trồng?', ['3: gieo vãi, gieo theo hàng, gieo theo hốc', '1 cách', '5 cách', '10 cách'], 0, '3 cách: vãi, theo hàng, theo hốc.'),
    Q('Trồng cây bằng cây giống (cấy) phù hợp với?', ['Cây con đã ươm sẵn (rau, lúa, cà chua...)', 'Cây gieo bằng hạt thẳng', 'Cây không cần trồng', 'Cỏ dại'], 0, 'Cấy phù hợp với cây con đã ươm sẵn.'),
    Q('Thời vụ gieo trồng phụ thuộc vào?', ['Loại cây, khí hậu và đất đai', 'Tâm trạng người trồng', 'Giá thị trường', 'Không có cơ sở'], 0, 'Thời vụ tuỳ loại cây và điều kiện tự nhiên.'),
  ]),

  M(10, 'Chăm sóc cây trồng', [
    Q('Các công việc chăm sóc cây trồng chính?', ['Tỉa, dặm, làm cỏ, vun xới, tưới tiêu, bón thúc', 'Chỉ tưới nước', 'Chỉ phun thuốc', 'Chỉ thu hoạch'], 0, 'Có nhiều công việc chăm sóc cây trồng.'),
    Q('Tỉa cây nhằm?', ['Loại bỏ cây yếu, sâu bệnh, để cây tốt phát triển', 'Diệt hết cây', 'Tăng số cây trong hốc', 'Không có tác dụng'], 0, 'Tỉa giúp cây tốt phát triển tốt hơn.'),
    Q('Dặm cây là?', ['Trồng bù vào chỗ cây chết để đảm bảo mật độ', 'Loại bỏ cây', 'Cắt ngọn', 'Bón phân'], 0, 'Dặm = trồng thêm vào chỗ trống.'),
    Q('Tưới nước cho cây nên thực hiện?', ['Sáng sớm hoặc chiều mát', 'Giữa trưa nắng gắt', 'Đêm khuya lạnh', 'Khi mưa to'], 0, 'Tưới khi mát giúp giảm bốc hơi.'),
    Q('Vun xới gốc cây để?', ['Đất tơi xốp quanh gốc, rễ phát triển tốt', 'Cây chết nhanh', 'Đất cứng hơn', 'Diệt cây'], 0, 'Vun xới giúp đất quanh gốc tơi xốp.'),
  ]),

  M(11, 'Phòng trừ sâu bệnh hại cây trồng', [
    Q('Sâu bệnh gây tác hại?', ['Giảm năng suất, chất lượng nông sản', 'Tăng năng suất', 'Không ảnh hưởng', 'Tốt cho cây'], 0, 'Sâu bệnh làm giảm năng suất và chất lượng.'),
    Q('Nguyên tắc "4 đúng" trong dùng thuốc bảo vệ thực vật?', ['Đúng thuốc — đúng lúc — đúng liều — đúng cách', 'Bừa bãi', 'Tuỳ thích', 'Càng nhiều càng tốt'], 0, '"4 đúng" là quy tắc dùng thuốc BVTV an toàn.'),
    Q('Biện pháp phòng sâu bệnh tự nhiên?', ['Luân canh, vệ sinh ruộng vườn, dùng giống kháng sâu bệnh', 'Phun thuốc liên tục', 'Bỏ hoang đất', 'Phá hết cây'], 0, 'Biện pháp canh tác là cách phòng tự nhiên.'),
    Q('Biện pháp sinh học chống sâu bệnh?', ['Dùng thiên địch, vi sinh có ích', 'Dùng thuốc hoá học', 'Đốt cây', 'Phun nước nhiều'], 0, 'Sinh học = dùng thiên địch, vi sinh.'),
    Q('Khi phun thuốc BVTV cần?', ['Đeo khẩu trang, găng tay, kính bảo hộ; phun xuôi gió', 'Không bảo hộ', 'Phun ngược gió', 'Phun gần nguồn nước'], 0, 'Bảo hộ và phun xuôi gió là quy tắc an toàn.'),
  ]),

  M(12, 'Thu hoạch, bảo quản và chế biến nông sản', [
    Q('Yêu cầu thu hoạch?', ['Đúng độ chín, đúng thời điểm, gọn nhẹ, ít hư hỏng', 'Càng sớm càng tốt', 'Để lâu trên cây', 'Bừa bãi'], 0, 'Thu hoạch đúng lúc đảm bảo chất lượng.'),
    Q('Các phương pháp bảo quản nông sản?', ['Phơi khô, sấy, đông lạnh, đóng hộp, hút chân không', 'Để ngoài trời', 'Để ẩm', 'Vứt bừa'], 0, 'Có nhiều phương pháp bảo quản nông sản.'),
    Q('Bảo quản lúa khô đúng cách?', ['Phơi/sấy khô, đóng bao, để nơi khô thoáng, tránh ẩm', 'Để ẩm', 'Đổ đống ngoài trời', 'Đậy kín mục nát'], 0, 'Khô và thoáng là điều kiện bảo quản tốt.'),
    Q('Chế biến nông sản nhằm?', ['Tăng giá trị, kéo dài thời gian bảo quản, đa dạng sản phẩm', 'Giảm giá trị', 'Phá huỷ sản phẩm', 'Không có ích'], 0, 'Chế biến tăng giá trị và kéo dài bảo quản.'),
    Q('Sản phẩm chế biến từ lúa?', ['Gạo, bún, phở, bánh tráng, bia, rượu', 'Cà phê', 'Trứng', 'Sữa'], 0, 'Lúa được chế biến thành nhiều sản phẩm.'),
  ]),

  M(13, 'Trồng cây rừng và bảo vệ rừng', [
    Q('Vai trò của rừng?', ['Điều hoà khí hậu, giữ đất, cấp gỗ, bảo tồn đa dạng sinh học', 'Không có vai trò', 'Chỉ làm cảnh', 'Cản trở phát triển'], 0, 'Rừng có nhiều vai trò quan trọng.'),
    Q('Vì sao cần trồng cây gây rừng?', ['Phục hồi diện tích rừng đã mất, chống xói mòn', 'Để có nhiều gỗ thôi', 'Không cần thiết', 'Để chiếm đất'], 0, 'Trồng cây gây rừng phục hồi và bảo vệ môi trường.'),
    Q('Thời vụ trồng cây rừng ở miền Bắc?', ['Mùa xuân và mùa thu', 'Mùa hạ nắng nóng', 'Mùa đông giá rét', 'Bất kì lúc nào'], 0, 'Xuân và thu là thời vụ trồng rừng phù hợp ở Bắc.'),
    Q('Hành vi nào BẢO VỆ rừng?', ['Trồng cây, ngăn chặn chặt phá, phòng chống cháy rừng', 'Đốt rừng làm rẫy', 'Săn bắt động vật quý', 'Khai thác trái phép'], 0, 'Trồng cây, ngăn chặn chặt phá là bảo vệ rừng.'),
    Q('Cháy rừng gây tác hại?', ['Mất rừng, gây ô nhiễm, mất đa dạng sinh học', 'Tạo đất mới', 'Tốt cho rừng', 'Không tác hại'], 0, 'Cháy rừng gây hậu quả nghiêm trọng.'),
  ]),

  M(14, 'Ôn tập chương 1 — Trồng trọt', [
    Q('Thành phần chính của đất gồm?', ['Khoáng, hữu cơ, nước, không khí', 'Chỉ cát', 'Chỉ nước', 'Chỉ khoáng'], 0, 'Đất gồm 4 thành phần chính.'),
    Q('3 nhóm phân bón chính?', ['Hữu cơ, vô cơ, vi sinh', 'Đạm, lân, kali', 'Phân chuồng, phân xanh', 'Phân lá'], 0, 'Hữu cơ, vô cơ, vi sinh là 3 nhóm chính.'),
    Q('Nguyên tắc dùng thuốc BVTV?', ['4 đúng: thuốc, lúc, liều, cách', 'Càng nhiều càng tốt', 'Bừa bãi', 'Không cần quy tắc'], 0, '"4 đúng" là nguyên tắc cơ bản.'),
    Q('Mục đích làm đất?', ['Tơi xốp, thoáng, diệt cỏ và sâu', 'Làm đất cứng', 'Khô đất', 'Không có'], 0, 'Làm đất tạo điều kiện cho cây phát triển.'),
    Q('Bảo vệ rừng KHÔNG bao gồm?', ['Đốt rừng làm rẫy', 'Trồng cây', 'Phòng cháy', 'Ngăn chặn chặt phá'], 0, 'Đốt rừng làm rẫy là hành vi phá hoại rừng.'),
  ]),

  // ════════════════ CHƯƠNG 2 — CHĂN NUÔI (T15–25) ════════════════
  M(15, 'Vai trò của chăn nuôi', [
    Q('Chăn nuôi là?', ['Nuôi dưỡng vật nuôi để lấy sản phẩm', 'Trồng cây', 'Khai thác cá', 'Khai thác rừng'], 0, 'Chăn nuôi là nuôi vật nuôi lấy sản phẩm.'),
    Q('Vai trò của chăn nuôi?', ['Cấp thực phẩm, sức kéo, phân bón và nguyên liệu', 'Chỉ làm cảnh', 'Không có vai trò', 'Phá hoại môi trường'], 0, 'Chăn nuôi cấp thực phẩm và nhiều sản phẩm.'),
    Q('Sản phẩm chính của chăn nuôi?', ['Thịt, trứng, sữa, lông, da', 'Gỗ', 'Rau', 'Hạt'], 0, 'Thịt, trứng, sữa, lông, da là sản phẩm chăn nuôi.'),
    Q('Vật nuôi nào cấp sữa phổ biến ở VN?', ['Bò sữa', 'Gà', 'Chó', 'Mèo'], 0, 'Bò sữa là vật nuôi cấp sữa chính.'),
    Q('Trâu, bò ở nông thôn VN dùng làm gì?', ['Sức kéo cày bừa và lấy thịt', 'Chỉ làm cảnh', 'Cấp trứng', 'Cấp sữa duy nhất'], 0, 'Trâu, bò cấp sức kéo và thịt.'),
  ]),

  M(16, 'Phân loại vật nuôi', [
    Q('Gia súc gồm?', ['Trâu, bò, lợn, dê, ngựa', 'Gà, vịt', 'Cá', 'Ong'], 0, 'Gia súc là vật nuôi có 4 chân lớn.'),
    Q('Gia cầm gồm?', ['Gà, vịt, ngan, ngỗng', 'Lợn, bò', 'Cá, tôm', 'Ong, bướm'], 0, 'Gia cầm là vật nuôi 2 chân có cánh.'),
    Q('Vật nuôi đặc sản ở VN?', ['Gà Đông Tảo, lợn Mán, bò vàng', 'Bò Hà Lan', 'Lợn Yorkshire', 'Gà công nghiệp'], 0, 'Gà Đông Tảo, lợn Mán là vật nuôi đặc sản.'),
    Q('Vật nuôi lấy lông?', ['Cừu, dê, thỏ angora', 'Lợn', 'Cá', 'Tôm'], 0, 'Cừu, thỏ là vật nuôi lấy lông.'),
    Q('Ong mật được nuôi để?', ['Lấy mật ong và sáp ong', 'Lấy thịt', 'Lấy trứng', 'Lấy sữa'], 0, 'Ong cho mật và sáp.'),
  ]),

  M(17, 'Chọn giống vật nuôi', [
    Q('Giống vật nuôi quyết định?', ['Năng suất, chất lượng sản phẩm', 'Không có ý nghĩa', 'Chỉ ảnh hưởng màu lông', 'Chỉ ảnh hưởng kích cỡ'], 0, 'Giống quyết định năng suất và chất lượng.'),
    Q('Chọn giống vật nuôi tốt dựa vào?', ['Ngoại hình, năng suất, khả năng sinh sản và sức khoẻ', 'Chỉ ngoại hình', 'Chỉ giá rẻ', 'Tuỳ ý'], 0, 'Nhiều tiêu chí khi chọn giống vật nuôi.'),
    Q('Phương pháp nhân giống thuần chủng?', ['Cho giao phối giữa vật nuôi cùng giống', 'Lai khác giống', 'Tạo giống bằng máy', 'Không có'], 0, 'Thuần chủng = giao phối cùng giống.'),
    Q('Phương pháp lai giống?', ['Cho giao phối giữa các giống khác nhau để tạo con lai tốt', 'Giao phối cùng giống', 'Nhân bản vô tính', 'Lai cận huyết'], 0, 'Lai khác giống tạo con lai có ưu thế.'),
    Q('Vì sao cần chọn giống cẩn thận?', ['Để đảm bảo năng suất và chất lượng đàn', 'Để khoe khoang', 'Để mất tiền', 'Không cần thiết'], 0, 'Chọn giống tốt đảm bảo hiệu quả chăn nuôi.'),
  ]),

  M(18, 'Ôn tập học kì 1', [
    Q('Trồng trọt cung cấp?', ['Lương thực, thực phẩm, nguyên liệu', 'Thịt sữa', 'Cá tôm', 'Khoáng sản'], 0, 'Trồng trọt cấp lương thực, thực phẩm, nguyên liệu.'),
    Q('Đất phù sa là đất?', ['Giàu mùn, tơi xốp, rất tốt cho trồng trọt', 'Cát khô', 'Sét cứng', 'Đá cứng'], 0, 'Đất phù sa giàu mùn.'),
    Q('Phân hữu cơ?', ['Phân chuồng, phân xanh, phân bắc', 'Đạm — lân — kali', 'Vi sinh', 'Hóa học'], 0, 'Phân hữu cơ gồm chuồng, xanh, bắc.'),
    Q('Chăn nuôi cấp?', ['Thịt, trứng, sữa, sức kéo', 'Gỗ, rau, hạt', 'Khoáng sản', 'Không có gì'], 0, 'Chăn nuôi cấp sản phẩm động vật.'),
    Q('Gia cầm gồm?', ['Gà, vịt, ngan, ngỗng', 'Lợn, bò', 'Trâu, dê', 'Cá, tôm'], 0, 'Gia cầm là loại 2 chân có cánh.'),
  ]),

  M(19, 'Thức ăn vật nuôi', [
    Q('Thức ăn vật nuôi là?', ['Sản phẩm cấp cho vật nuôi để duy trì sự sống và sinh trưởng', 'Đất', 'Nước biển', 'Đá'], 0, 'Thức ăn cấp năng lượng và dinh dưỡng.'),
    Q('Các loại thức ăn vật nuôi?', ['Thức ăn thực vật, động vật, khoáng và thức ăn hỗn hợp', 'Chỉ rau', 'Chỉ thịt', 'Chỉ cám'], 0, 'Có nhiều loại thức ăn cho vật nuôi.'),
    Q('Thức ăn xanh cho trâu bò là?', ['Cỏ tươi, rau xanh, ngọn mía', 'Cám gạo', 'Thịt', 'Bột cá'], 0, 'Trâu bò ăn cỏ tươi và rau xanh.'),
    Q('Thức ăn tinh là?', ['Có nhiều bột đường, đạm (cám, ngô, đỗ tương)', 'Toàn nước', 'Cỏ khô', 'Rau tươi'], 0, 'Thức ăn tinh giàu năng lượng và đạm.'),
    Q('Thức ăn hỗn hợp công nghiệp có ưu điểm?', ['Cân bằng dinh dưỡng, tiện dùng, năng suất cao', 'Mất cân bằng', 'Khó dùng', 'Giảm năng suất'], 0, 'Thức ăn công nghiệp cân bằng và tiện lợi.'),
  ]),

  M(20, 'Chế biến và bảo quản thức ăn vật nuôi', [
    Q('Mục đích chế biến thức ăn vật nuôi?', ['Tăng giá trị dinh dưỡng, dễ tiêu, ngon miệng', 'Giảm dinh dưỡng', 'Làm hỏng', 'Không có'], 0, 'Chế biến giúp tăng giá trị thức ăn.'),
    Q('Phương pháp chế biến cơ học?', ['Cắt, nghiền, băm nhỏ', 'Ủ chua', 'Nấu chín', 'Lên men'], 0, 'Cơ học: cắt, nghiền, băm.'),
    Q('Phương pháp ủ chua dùng cho?', ['Thức ăn xanh (cỏ, ngọn mía) bảo quản lâu', 'Cám gạo', 'Bột cá', 'Đá'], 0, 'Ủ chua phù hợp với thức ăn xanh.'),
    Q('Bảo quản thức ăn vật nuôi cần?', ['Khô ráo, thoáng mát, tránh mốc và mọt', 'Ẩm thấp', 'Phơi nắng gắt', 'Đậy kín hoàn toàn'], 0, 'Khô và thoáng tránh mốc mọt.'),
    Q('Thức ăn bị mốc cho vật nuôi ăn sẽ?', ['Gây bệnh, ảnh hưởng sức khoẻ và năng suất', 'Tốt cho vật nuôi', 'Không sao', 'Tăng cân nhanh'], 0, 'Thức ăn mốc rất nguy hiểm cho vật nuôi.'),
  ]),

  M(21, 'Chuồng nuôi và vệ sinh chuồng trại', [
    Q('Chuồng nuôi cần?', ['Khô ráo, thoáng, mát mùa hè, ấm mùa đông', 'Ẩm thấp', 'Tối tăm', 'Chật chội'], 0, 'Chuồng cần đảm bảo điều kiện sống tốt.'),
    Q('Hướng chuồng tốt thường?', ['Hướng đông nam, tránh gió bắc, đón nắng sáng', 'Hướng tây bắc', 'Đối diện gió', 'Hướng bất kì'], 0, 'Hướng đông nam tốt cho chuồng.'),
    Q('Vệ sinh chuồng trại nhằm?', ['Phòng bệnh, tăng năng suất, bảo vệ môi trường', 'Tăng dịch bệnh', 'Phá hoại vật nuôi', 'Không cần thiết'], 0, 'Vệ sinh giúp phòng bệnh cho vật nuôi.'),
    Q('Tần suất vệ sinh chuồng?', ['Hàng ngày dọn phân, định kì khử trùng', 'Một năm một lần', 'Không cần', 'Khi có dịch mới làm'], 0, 'Vệ sinh thường xuyên là cần thiết.'),
    Q('Phân vật nuôi thu được dùng để?', ['Bón cây trồng (phân hữu cơ)', 'Vứt bỏ', 'Đổ ra sông', 'Đốt hết'], 0, 'Phân vật nuôi là phân hữu cơ quý.'),
  ]),

  M(22, 'Chăm sóc vật nuôi', [
    Q('Chăm sóc vật nuôi gồm?', ['Cho ăn uống, vệ sinh, kiểm tra sức khoẻ thường xuyên', 'Chỉ cho ăn', 'Chỉ uống', 'Bỏ mặc'], 0, 'Chăm sóc gồm nhiều khâu.'),
    Q('Vật nuôi con (sơ sinh) cần?', ['Bú sữa đầu, giữ ấm, vệ sinh', 'Cho ăn cỏ ngay', 'Để ngoài trời', 'Tách mẹ lập tức'], 0, 'Con sơ sinh cần sữa đầu và giữ ấm.'),
    Q('Vật nuôi cái sinh sản cần?', ['Chế độ ăn đặc biệt, theo dõi sức khoẻ', 'Đối xử như con khác', 'Cho ăn ít', 'Không cần chăm'], 0, 'Vật nuôi mang thai cần chăm sóc đặc biệt.'),
    Q('Cho vật nuôi uống nước cần?', ['Đủ và sạch hàng ngày', 'Uống nước bẩn', 'Hạn chế', 'Không cần'], 0, 'Nước sạch và đủ là rất quan trọng.'),
    Q('Quan sát vật nuôi để?', ['Phát hiện sớm bệnh và bất thường', 'Không cần', 'Chỉ khi có dịch', 'Khi chuẩn bị bán'], 0, 'Quan sát thường xuyên phát hiện bệnh sớm.'),
  ]),

  M(23, 'Phòng và trị bệnh cho vật nuôi', [
    Q('Phòng bệnh tốt hơn?', ['Trị bệnh', 'Không cần phòng', 'Đợi bị bệnh', 'Tuỳ may rủi'], 0, '"Phòng bệnh hơn chữa bệnh".'),
    Q('Biện pháp phòng bệnh cơ bản?', ['Tiêm vắc-xin, vệ sinh chuồng, ăn uống sạch', 'Để mặc', 'Cho ăn bẩn', 'Không tiêm gì'], 0, 'Vắc-xin và vệ sinh là cốt lõi phòng bệnh.'),
    Q('Vắc-xin có tác dụng?', ['Tạo miễn dịch chủ động chống bệnh', 'Gây bệnh', 'Không có tác dụng', 'Diệt vật nuôi'], 0, 'Vắc-xin giúp tạo miễn dịch chống bệnh.'),
    Q('Khi vật nuôi bị bệnh cần?', ['Cách ly, báo thú y, điều trị kịp thời', 'Để chung đàn', 'Không xử lý', 'Bán ngay'], 0, 'Cách ly và báo thú y khi vật nuôi bệnh.'),
    Q('Bệnh truyền nhiễm nguy hiểm ở gia cầm?', ['Cúm gia cầm (H5N1)', 'Cảm cúm thường', 'Đau bụng', 'Không có'], 0, 'H5N1 rất nguy hiểm với gia cầm và người.'),
  ]),

  M(24, 'Bảo vệ môi trường trong chăn nuôi', [
    Q('Vấn đề môi trường trong chăn nuôi?', ['Mùi hôi, nước thải, khí thải gây ô nhiễm', 'Không có vấn đề', 'Cải thiện môi trường', 'Tốt cho không khí'], 0, 'Chăn nuôi gây ô nhiễm nếu không quản lý tốt.'),
    Q('Biện pháp xử lý chất thải chăn nuôi?', ['Hầm biogas, ủ phân hữu cơ, hồ sinh học', 'Đổ ra sông', 'Vứt bừa', 'Đốt hết'], 0, 'Hầm biogas và ủ phân là biện pháp đúng.'),
    Q('Hầm biogas cho vật gì?', ['Tạo khí gas đun nấu từ phân và nước thải', 'Sản xuất điện', 'Tạo nước sạch', 'Nuôi cá'], 0, 'Biogas tận dụng chất thải để tạo gas.'),
    Q('Vì sao cần bảo vệ môi trường chăn nuôi?', ['Đảm bảo sức khoẻ cộng đồng và phát triển bền vững', 'Để khoe', 'Không cần', 'Tốn tiền vô ích'], 0, 'Bảo vệ môi trường là yêu cầu bền vững.'),
  ]),

  M(25, 'Ôn tập chương 2 — Chăn nuôi', [
    Q('Sản phẩm chăn nuôi chính?', ['Thịt, trứng, sữa', 'Gỗ, rau', 'Cá, tôm', 'Khoáng sản'], 0, 'Thịt, trứng, sữa là sản phẩm chăn nuôi.'),
    Q('Thức ăn tinh là?', ['Cám, ngô, đỗ tương — giàu năng lượng', 'Cỏ tươi', 'Rau', 'Nước'], 0, 'Tinh = giàu năng lượng/đạm.'),
    Q('Phương pháp ủ chua dùng cho?', ['Thức ăn xanh', 'Cám', 'Bột cá', 'Đá khoáng'], 0, 'Ủ chua bảo quản thức ăn xanh.'),
    Q('Phòng bệnh cho vật nuôi cần?', ['Vắc-xin, vệ sinh, dinh dưỡng tốt', 'Không cần', 'Đợi bệnh', 'Bỏ mặc'], 0, 'Vắc-xin và vệ sinh là chính.'),
    Q('Xử lý chất thải chăn nuôi?', ['Hầm biogas, ủ phân', 'Đổ sông', 'Vứt bừa', 'Đốt hết'], 0, 'Hầm biogas và ủ phân là cách đúng.'),
  ]),

  // ════════════════ CHƯƠNG 3 — THUỶ SẢN (T26–34) ════════════════
  M(26, 'Vai trò của thuỷ sản', [
    Q('Thuỷ sản là?', ['Các sinh vật sống trong nước được con người nuôi/khai thác', 'Cây trên cạn', 'Đá dưới sông', 'Tảo độc'], 0, 'Thuỷ sản là sinh vật nước (cá, tôm, cua, hải sản).'),
    Q('Vai trò của thuỷ sản?', ['Cấp thực phẩm giàu đạm, xuất khẩu, tạo việc làm', 'Không có vai trò', 'Phá hoại môi trường', 'Cản trở phát triển'], 0, 'Thuỷ sản cấp đạm và là ngành xuất khẩu lớn.'),
    Q('Việt Nam là nước có thế mạnh về?', ['Nuôi trồng và xuất khẩu thuỷ sản', 'Lúa mì', 'Cao lương', 'Khoai tây'], 0, 'VN là cường quốc thuỷ sản, xuất khẩu mạnh.'),
    Q('Mặt hàng thuỷ sản xuất khẩu chủ lực của VN?', ['Tôm, cá tra, cá basa, cá ngừ', 'Cao lương', 'Lúa mì', 'Bột mì'], 0, 'Tôm, cá tra, cá basa là chủ lực.'),
    Q('Có mấy loại hình nuôi thuỷ sản?', ['Nước ngọt, nước mặn, nước lợ', '1 loại', '5 loại', '10 loại'], 0, 'Nuôi nước ngọt, nước mặn, nước lợ là 3 loại chính.'),
  ]),

  M(27, 'Các loại thuỷ sản nuôi phổ biến', [
    Q('Cá nước ngọt nuôi phổ biến ở VN?', ['Cá chép, mè, trôi, trắm, rô phi, cá tra', 'Cá ngừ', 'Cá thu', 'Cá hồi'], 0, 'Cá chép, mè, trôi, trắm là cá nước ngọt phổ biến.'),
    Q('Cá nước mặn (biển) nuôi phổ biến?', ['Cá ngừ, cá vược, cá mú', 'Cá rô phi', 'Cá chép', 'Cá mè'], 0, 'Cá ngừ, cá vược, cá mú nuôi nước mặn.'),
    Q('Tôm nuôi phổ biến ở VN?', ['Tôm sú, tôm thẻ chân trắng, tôm càng xanh', 'Tôm hùm Đại Tây Dương', 'Cá voi', 'Mực'], 0, 'Tôm sú, tôm thẻ, càng xanh là chính.'),
    Q('Cá tra nuôi nhiều ở đâu?', ['Đồng bằng sông Cửu Long', 'Tây Bắc', 'Tây Nguyên', 'Bắc Cực'], 0, 'Cá tra nuôi chủ yếu ở ĐBSCL.'),
    Q('Cá rô phi có đặc điểm gì nổi bật?', ['Dễ nuôi, ăn tạp, sinh sản nhanh', 'Khó nuôi', 'Chỉ ăn thịt', 'Sinh sản chậm'], 0, 'Cá rô phi dễ nuôi và sinh sản nhanh.'),
  ]),

  M(28, 'Môi trường nuôi thuỷ sản', [
    Q('Yêu cầu chất lượng nước nuôi thuỷ sản?', ['Sạch, đủ oxy, pH phù hợp, nhiệt độ ổn định', 'Bẩn', 'Có hoá chất', 'Đục ngầu'], 0, 'Nước sạch là yêu cầu cốt lõi.'),
    Q('pH thích hợp cho ao nuôi cá nước ngọt?', ['Khoảng 6,5–8,5', '0–2', '12–14', '15'], 0, 'pH 6,5–8,5 là phù hợp cho cá nước ngọt.'),
    Q('Oxy hoà tan trong nước cần?', ['Đủ để cá hô hấp (>4 mg/L)', '0 mg/L', '20 mg/L', 'Bất kì'], 0, 'Cá cần oxy hoà tan >4 mg/L.'),
    Q('Nguồn nước nuôi tốt nhất là?', ['Nước sông, hồ, giếng đã qua xử lý', 'Nước thải', 'Nước hoá chất', 'Nước nhiễm phèn nặng'], 0, 'Nước tự nhiên đã xử lý là tốt nhất.'),
    Q('Khi cá nổi đầu lên mặt nước nhiều có thể do?', ['Thiếu oxy', 'Cá no quá', 'Cá ngủ', 'Cá khoẻ'], 0, 'Cá nổi đầu thường do thiếu oxy.'),
  ]),

  M(29, 'Thức ăn cho thuỷ sản', [
    Q('Thức ăn cho cá gồm?', ['Thức ăn tự nhiên (tảo, sinh vật phù du) và thức ăn nhân tạo (cám viên)', 'Chỉ cỏ', 'Chỉ thịt', 'Chỉ đá'], 0, 'Cá ăn cả thức ăn tự nhiên và nhân tạo.'),
    Q('Thức ăn tự nhiên có nguồn gốc?', ['Sinh vật phù du, tảo, mùn bã', 'Cám công nghiệp', 'Bột cá', 'Bột thịt'], 0, 'Thức ăn tự nhiên có sẵn trong ao.'),
    Q('Thức ăn công nghiệp có ưu điểm?', ['Cân bằng dinh dưỡng, tăng trưởng nhanh', 'Mất cân bằng', 'Khó dùng', 'Không hiệu quả'], 0, 'Thức ăn công nghiệp giúp cá tăng trưởng nhanh.'),
    Q('Cho ăn cá đúng cách?', ['Đúng giờ, đúng lượng, theo dõi cá ăn', 'Vứt bừa', 'Cho nhiều một lần', 'Bỏ đói'], 0, 'Đúng giờ đúng lượng giúp cá phát triển tốt.'),
    Q('Thức ăn dư thừa trong ao sẽ?', ['Làm ô nhiễm nước, gây bệnh cho cá', 'Cá ăn hết', 'Không ảnh hưởng', 'Tốt cho cá'], 0, 'Thức ăn dư làm ô nhiễm nước.'),
  ]),

  M(30, 'Phương pháp nuôi thuỷ sản', [
    Q('Có mấy phương pháp nuôi cá phổ biến?', ['Ao, lồng bè, đăng quầng, ruộng', '1 phương pháp', '10 phương pháp', '20 phương pháp'], 0, 'Nhiều phương pháp nuôi cá khác nhau.'),
    Q('Nuôi cá trong ao đất phù hợp?', ['Nuôi cá nước ngọt thông thường', 'Cá biển sâu', 'Tôm hùm', 'Cá voi'], 0, 'Ao đất phù hợp cá nước ngọt.'),
    Q('Nuôi cá lồng bè phù hợp?', ['Sông, hồ, biển có dòng chảy', 'Ao tù', 'Sa mạc', 'Trên núi cao'], 0, 'Lồng bè đặt nơi nước chảy nhẹ.'),
    Q('Nuôi tôm thẻ chân trắng cần?', ['Ao đất với hệ thống quạt nước cung cấp oxy', 'Không cần oxy', 'Ao nước ngọt sâu', 'Trên cạn'], 0, 'Tôm thẻ cần ao có quạt nước cấp oxy.'),
    Q('Nuôi cá kết hợp với trồng lúa (cá — lúa) có ưu điểm?', ['Tăng thu nhập, cải tạo đất', 'Giảm thu nhập', 'Phá ruộng', 'Không có lợi'], 0, 'Mô hình cá — lúa giúp tăng thu nhập.'),
  ]),

  M(31, 'Phòng bệnh cho thuỷ sản', [
    Q('Phòng bệnh cá quan trọng vì?', ['Khi cá bị bệnh khó chữa, dễ chết hàng loạt', 'Cá không bao giờ bệnh', 'Cá tự khỏi', 'Không quan trọng'], 0, 'Phòng bệnh quan trọng vì khó trị khi đã bệnh.'),
    Q('Biện pháp phòng bệnh cá?', ['Giữ nước sạch, ăn vừa đủ, chọn giống khoẻ', 'Cho ăn bẩn', 'Nuôi mật độ cao', 'Không vệ sinh'], 0, 'Vệ sinh và dinh dưỡng tốt là phòng bệnh chính.'),
    Q('Trước khi thả cá giống vào ao cần?', ['Tắm cá bằng nước muối loãng để diệt mầm bệnh', 'Thả thẳng vào', 'Để cá nhịn đói', 'Đổ thuốc trừ sâu'], 0, 'Tắm muối loãng là cách phòng bệnh khi thả giống.'),
    Q('Khi phát hiện cá chết bất thường cần?', ['Vớt ra, xử lý môi trường, tìm nguyên nhân', 'Để mặc', 'Cho ăn nhiều thêm', 'Không xử lý'], 0, 'Xử lý kịp thời để tránh lây lan.'),
    Q('Mật độ thả cá quá dày dễ?', ['Gây thiếu oxy, dễ bệnh, chậm lớn', 'Cá khoẻ hơn', 'Tăng năng suất', 'Không ảnh hưởng'], 0, 'Mật độ dày làm cá thiếu oxy và dễ bệnh.'),
  ]),

  M(32, 'Thu hoạch và bảo quản thuỷ sản', [
    Q('Thời điểm thu hoạch cá?', ['Khi đạt trọng lượng thương phẩm', 'Ngay khi thả', 'Khi cá chết', 'Bất kì lúc nào'], 0, 'Thu hoạch khi cá đủ trọng lượng thương phẩm.'),
    Q('Phương pháp thu hoạch cá ao?', ['Tháo nước hoặc kéo lưới', 'Bơm hết nước biển', 'Đào ao', 'Đập phá'], 0, 'Tháo nước hoặc kéo lưới là cách phổ biến.'),
    Q('Bảo quản cá tươi đúng cách?', ['Ướp lạnh hoặc ướp đá ngay sau thu hoạch', 'Để ngoài trời', 'Phơi nắng', 'Để nơi ẩm'], 0, 'Ướp lạnh giữ cá tươi.'),
    Q('Chế biến cá có thể là?', ['Cá khô, nước mắm, cá hộp, surimi', 'Vứt bỏ', 'Đốt hết', 'Để hỏng'], 0, 'Có nhiều cách chế biến cá.'),
    Q('Nước mắm là sản phẩm chế biến từ?', ['Cá tươi ủ với muối', 'Tôm sống', 'Cá khô nghiền', 'Đường mía'], 0, 'Nước mắm = cá tươi + muối + ủ lâu.'),
  ]),

  M(33, 'An toàn vệ sinh thực phẩm thuỷ sản', [
    Q('An toàn vệ sinh thuỷ sản nghĩa là?', ['Sản phẩm không nhiễm vi khuẩn, hoá chất độc hại', 'Có chất bảo quản', 'Có thuốc', 'Bẩn'], 0, 'ATVSTP = không độc hại cho người dùng.'),
    Q('Sản phẩm thuỷ sản cần đạt tiêu chuẩn?', ['VietGAP, GlobalGAP, HACCP', 'Không cần', 'Tuỳ ý', 'Càng bẩn càng tốt'], 0, 'VietGAP, GlobalGAP, HACCP là tiêu chuẩn.'),
    Q('Để có thuỷ sản sạch, người nuôi cần?', ['Không dùng chất cấm, kiểm soát thức ăn — môi trường', 'Dùng nhiều thuốc kháng sinh', 'Dùng chất tăng trọng cấm', 'Mặc kệ'], 0, 'Không dùng chất cấm là điều kiện tiên quyết.'),
    Q('Bảo vệ môi trường nuôi thuỷ sản bằng cách?', ['Xử lý nước thải, không xả bừa, dùng chế phẩm sinh học', 'Xả thẳng ra biển', 'Đổ hoá chất', 'Không xử lý'], 0, 'Xử lý nước thải bảo vệ môi trường.'),
    Q('Khai thác thuỷ sản tự nhiên cần?', ['Đúng quy định, không dùng chất nổ — xung điện', 'Dùng mìn cho nhanh', 'Đánh bắt cá nhỏ', 'Không cần luật'], 0, 'Khai thác hợp lý bảo vệ nguồn lợi.'),
  ]),

  M(34, 'Ôn tập chương 3 — Thuỷ sản', [
    Q('Cá nước ngọt phổ biến?', ['Cá chép, mè, trôi, trắm, rô phi', 'Cá ngừ', 'Cá thu', 'Cá hồi'], 0, 'Cá chép, mè, trôi, trắm là cá nước ngọt.'),
    Q('pH ao nuôi cá ngọt phù hợp?', ['6,5–8,5', '0–2', '12–14', '15'], 0, 'pH 6,5–8,5 phù hợp.'),
    Q('Tôm thẻ cần?', ['Quạt nước cấp oxy', 'Không cần oxy', 'Nước tù đọng', 'Sa mạc'], 0, 'Tôm thẻ cần quạt nước cấp oxy.'),
    Q('Thức ăn dư thừa trong ao gây?', ['Ô nhiễm và bệnh cho cá', 'Cá khoẻ hơn', 'Không tác hại', 'Tăng giá cá'], 0, 'Thức ăn dư gây ô nhiễm.'),
    Q('Khai thác cá bằng chất nổ — xung điện?', ['Vi phạm pháp luật, huỷ hoại nguồn lợi', 'Hợp pháp', 'Được khuyến khích', 'Tốt cho môi trường'], 0, 'Đánh bắt huỷ diệt bị cấm.'),
  ]),

  M(35, 'Tổng ôn cả năm', [
    Q('Trồng trọt cấp?', ['Lương thực, thực phẩm, nguyên liệu', 'Thịt sữa', 'Cá tôm', 'Khoáng'], 0, 'Trồng trọt cấp lương thực, thực phẩm.'),
    Q('3 loại phân bón chính?', ['Hữu cơ, vô cơ, vi sinh', 'Đạm, lân, kali', 'Chuồng, xanh, bắc', 'Lá, gốc, rễ'], 0, 'Hữu cơ — vô cơ — vi sinh.'),
    Q('Chăn nuôi cấp?', ['Thịt, trứng, sữa, sức kéo', 'Gỗ, rau', 'Cá tôm', 'Khoáng'], 0, 'Chăn nuôi cấp sản phẩm động vật.'),
    Q('Phòng bệnh vật nuôi bằng?', ['Vắc-xin, vệ sinh, dinh dưỡng tốt', 'Mặc kệ', 'Đợi bệnh', 'Cho ăn bẩn'], 0, 'Vắc-xin và vệ sinh là cốt lõi.'),
    Q('Thuỷ sản là?', ['Sinh vật nước được nuôi/khai thác', 'Cây trên cạn', 'Khoáng sản', 'Đá'], 0, 'Thuỷ sản = sinh vật nước.'),
  ]),
];

export const S7CN_SCENARIOS = indexBy(S7CN_WEEKS);
