// ============================================================
// Lớp 7 · KHOA HỌC TỰ NHIÊN — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK KHTN 7 (KNTT/CTST/Cánh Diều): Hóa — Vật lí — Sinh.
// ID prefix: "S7KHTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7KHTN', 'khtn', n, title, qs, opts);

export const S7KHTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Mở đầu — Phương pháp và kĩ năng học tập KHTN', [
    Q('KHTN nghiên cứu về?', ['Các đối tượng và hiện tượng của thế giới tự nhiên', 'Lịch sử loài người', 'Văn học nghệ thuật', 'Pháp luật'], 0, 'Khoa học tự nhiên.'),
    Q('Bước đầu tiên trong phương pháp tìm hiểu tự nhiên là?', ['Quan sát, đặt câu hỏi', 'Thí nghiệm', 'Kết luận', 'Báo cáo'], 0, 'Quan sát → đặt vấn đề → giả thuyết → thí nghiệm → kết luận.'),
    Q('Giả thuyết khoa học là?', ['Câu hỏi tu từ', 'Kết luận chắc chắn', 'Ý kiến vô căn cứ', 'Dự đoán có cơ sở để kiểm chứng'], 3, 'Giả thuyết cần kiểm chứng.'),
    Q('Thí nghiệm có vai trò?', ['Kiểm chứng giả thuyết', 'Thay sách giáo khoa', 'Trang trí', 'Làm bài tập'], 0, 'Cốt lõi PP khoa học.'),
    Q('Khi làm thí nghiệm hoá học, cần?', ['Đeo kính bảo hộ, găng tay khi cần', 'Ngửi gần miệng ống', 'Mặc đồ thoải mái không bảo hộ', 'Nếm hoá chất để biết'], 0, 'An toàn là ưu tiên.'),
    Q('Đơn vị đo độ dài trong hệ SI?', ['Mét (m)', 'Centimet (cm)', 'Kilômét (km)', 'Lít (L)'], 0, 'Đơn vị chuẩn của SI.'),
  ]),

  M(2, 'Nguyên tử — Cấu tạo', [
    Q('Nguyên tử gồm?', ['Hạt nhân và lớp vỏ electron', 'Chỉ neutron', 'Chỉ electron', 'Chỉ proton'], 0, 'Cấu trúc cơ bản.'),
    Q('Hạt nhân gồm?', ['Chỉ proton', 'Proton và electron', 'Neutron và electron', 'Proton và neutron'], 3, 'Hai loại hạt: p và n.'),
    Q('Electron mang điện tích?', ['Âm', 'Cả âm và dương', 'Không mang điện', 'Dương (+1)'], 0, 'e mang điện tích −1.'),
    Q('Proton mang điện tích?', ['Dương', 'Trung tính', 'Âm (−1)', 'Trung hoà điện'], 0, 'p mang điện tích +1.'),
    Q('Neutron mang điện tích?', ['Không', 'Âm (−1)', 'Dương (+1)', 'Cả dương và âm'], 0, 'n trung hoà điện.'),
    Q('Số proton = số electron trong nguyên tử trung hoà về?', ['Năng lượng', 'Thể tích', 'Điện tích', 'Khối lượng'], 2, 'Trung hoà điện ⇒ p = e.'),
  ]),

  M(3, 'Mô hình nguyên tử — Số khối, kí hiệu', [
    Q('Số khối A của nguyên tử = ?', ['e + n (electron + neutron)', 'p + n', 'p + e (proton + electron)', 'p − n (proton trừ neutron)'], 1, 'A = số proton + số neutron.'),
    Q('Số hiệu nguyên tử Z = ?', ['Số khối', 'Số neutron', 'Số electron lớp ngoài', 'Số proton'], 3, 'Z = p (cũng = e khi trung hoà).'),
    Q('Nguyên tử C có Z = 6. Số electron là?', ['6', '14', '12', '8'], 0, 'Số e = Z = 6.'),
    Q('Đồng vị là các nguyên tử cùng?', ['Khác cả A và Z', 'Cùng A, khác Z', 'Cùng Z, khác A', 'Cùng cả A và Z'], 2, 'Đồng vị: cùng số p, khác số n.'),
    Q('Mô hình Bo (Bohr) mô tả electron?', ['Rời khỏi nguyên tử', 'Trộn vào hạt nhân', 'Đứng yên', 'Chuyển động trên các quỹ đạo (lớp) xác định'], 3, 'Quỹ đạo Bo.'),
    Q('Lớp electron ngoài cùng quyết định?', ['Tính chất hoá học', 'Khối lượng', 'Trạng thái', 'Màu sắc'], 0, 'Liên kết hoá học phụ thuộc lớp ngoài.'),
  ]),

  M(4, 'Nguyên tố hoá học — Bảng tuần hoàn (giới thiệu)', [
    Q('Nguyên tố hoá học là?', ['Tập hợp các phân tử', 'Tập hợp các hợp chất', 'Tập hợp các nguyên tử cùng số proton', 'Tập hợp các chất khác nhau'], 2, 'Cùng Z = cùng nguyên tố.'),
    Q('Kí hiệu hoá học của Hydro?', ['H', 'Hy (viết tắt của Hydro)', 'He (kí hiệu của Heli)', 'Hi (viết tắt từ Hydrogen)'], 0, 'Hydrogen → H.'),
    Q('Kí hiệu của Oxi?', ['Ox (viết tắt của Oxi)', 'O', 'O₂ (công thức khí oxi)', 'Oy (kí hiệu Oxygen)'], 1, 'Oxygen → O.'),
    Q('Hiện nay có khoảng bao nhiêu nguyên tố hoá học đã biết?', ['Khoảng 118', 'Khoảng 200', 'Khoảng 50', 'Khoảng 30'], 0, '~118 nguyên tố trong BTH hiện đại.'),
    Q('Bảng tuần hoàn do ai đề xuất?', ['Einstein', 'Darwin', 'Newton', 'Mendeleev'], 3, 'Đ.I. Mendeleev (1869).'),
    Q('Nguyên tố ở cùng một nhóm có?', ['Tính chất hoá học tương tự', 'Cùng số khối', 'Cùng khối lượng riêng', 'Cùng màu sắc'], 0, 'Do cùng số e lớp ngoài.'),
  ]),

  M(5, 'Bảng tuần hoàn các nguyên tố — Cấu trúc', [
    Q('Bảng tuần hoàn gồm các hàng gọi là?', ['Chu kì', 'Nhóm nguyên tố', 'Lớp electron', 'Phân nhóm chính'], 0, 'Hàng ngang = chu kì.'),
    Q('Bảng tuần hoàn có các cột gọi là?', ['Nhóm', 'Lớp electron', 'Phân lớp', 'Chu kì'], 0, 'Cột dọc = nhóm.'),
    Q('Số chu kì trong BTH hiện đại?', ['5', '8', '10', '7'], 3, 'Có 7 chu kì.'),
    Q('Nguyên tố trong cùng chu kì có cùng?', ['Số electron lớp ngoài cùng', 'Số khối', 'Khối lượng', 'Số lớp electron'], 3, 'Cùng số lớp e.'),
    Q('Nguyên tố nhóm IA gồm?', ['Halogen', 'Kim loại chuyển tiếp', 'Khí hiếm', 'Kim loại kiềm'], 3, 'Li, Na, K…'),
    Q('Nhóm VIIIA là nhóm?', ['Kim loại', 'Khí hiếm', 'Kim loại kiềm', 'Halogen'], 1, 'He, Ne, Ar…'),
  ]),

  M(6, 'Phân tử — Đơn chất, hợp chất', [
    Q('Phân tử là?', ['Một hạt electron', 'Hạt đại diện cho chất, thể hiện đầy đủ tính chất hoá học của chất', 'Một hạt proton', 'Một nguyên tử'], 1, 'Đơn vị nhỏ nhất mang tính chất hoá học của chất.'),
    Q('Đơn chất là chất tạo bởi?', ['Một nguyên tố', 'Hai nguyên tố trở lên', 'Tất cả nguyên tố', 'Hai nguyên tố cùng hoá trị'], 0, 'Đơn chất: 1 nguyên tố.'),
    Q('Hợp chất là chất tạo bởi?', ['Một nguyên tố', 'Hai hay nhiều nguyên tố', 'Chỉ kim loại', 'Chỉ phi kim'], 1, 'Hai nguyên tố trở lên kết hợp.'),
    Q('Nước H₂O là?', ['Đơn chất', 'Hợp chất', 'Hỗn hợp', 'Nguyên tố'], 1, 'Gồm H và O ⇒ hợp chất.'),
    Q('Khí O₂ là?', ['Đơn chất', 'Hợp chất', 'Nguyên tố', 'Hỗn hợp'], 0, 'Chỉ gồm O ⇒ đơn chất.'),
    Q('Trong CO₂, có mấy loại nguyên tố?', ['2', '1', '4', '3'], 0, 'C và O ⇒ 2 nguyên tố.'),
  ]),

  M(7, 'Liên kết hoá học sơ đẳng', [
    Q('Liên kết ion hình thành giữa?', ['Kim loại điển hình và phi kim điển hình', 'Khí hiếm với khí hiếm', 'Hai phi kim', 'Hai kim loại'], 0, 'Cho — nhận electron.'),
    Q('Liên kết cộng hoá trị hình thành giữa?', ['Kim loại và phi kim', 'Khí hiếm', 'Hai kim loại', 'Các phi kim'], 3, 'Dùng chung electron.'),
    Q('NaCl là hợp chất liên kết?', ['Cộng hoá trị', 'Kim loại', 'Ion', 'Liên kết hiđro'], 2, 'Na cho 1 e, Cl nhận 1 e.'),
    Q('H₂O có liên kết?', ['Kim loại', 'Tinh thể', 'Liên kết ion', 'Cộng hoá trị'], 3, 'H và O đều phi kim ⇒ cộng hoá trị.'),
    Q('Mục đích của liên kết hoá học?', ['Tăng khối lượng', 'Đạt cấu hình bền giống khí hiếm', 'Phát quang', 'Đổi màu sắc'], 1, 'Quy tắc octet.'),
    Q('Khí hiếm khó tạo liên kết vì?', ['Trong suốt', 'Có lớp electron ngoài cùng đã bão hoà', 'Khối lượng quá nhỏ', 'Quá nặng'], 1, '8 e lớp ngoài (trừ He là 2).'),
  ]),

  M(8, 'Hoá trị — Công thức hoá học', [
    Q('Hoá trị của H trong các hợp chất thường là?', ['Hoá trị IV', 'I', 'Hoá trị III', 'Hoá trị II'], 1, 'H luôn hoá trị I (trừ hydrua kim loại).'),
    Q('Hoá trị của O trong nước là?', ['Hoá trị I', 'Hoá trị IV', 'II', 'Hoá trị III'], 2, 'O hoá trị II trong hầu hết hợp chất.'),
    Q('Công thức hoá học của khí Oxi?', ['O (nguyên tử oxi)', 'OH (gốc hydroxide)', 'O₂', 'O₃ (khí ozon)'], 2, 'Đơn chất khí: O₂.'),
    Q('Công thức của Cacbon đioxit?', ['CO₂', 'CO (cacbon monooxit)', 'C₂O (công thức sai)', 'CO₃ (gốc cacbonat)'], 0, 'CO₂.'),
    Q('Quy tắc hoá trị: a·x = b·y nghĩa là?', ['Tích chỉ số và hoá trị của hai nguyên tố bằng nhau', 'Tổng chỉ số bằng tổng hoá trị', 'Hiệu chỉ số bằng hoá trị', 'Không liên quan'], 0, 'Quy tắc cân bằng hoá trị.'),
    Q('Trong CaCO₃, Ca có hoá trị?', ['II', 'Hoá trị I', 'Hoá trị III', 'Hoá trị IV'], 0, 'Ca thuộc nhóm IIA, hoá trị II.'),
  ]),

  M(9, 'Phản ứng hoá học — Định luật bảo toàn khối lượng', [
    Q('Phản ứng hoá học là?', ['Tan trong nước', 'Biến đổi trạng thái', 'Quá trình biến đổi chất này thành chất khác', 'Biến đổi hình dạng'], 2, 'Bản chất là phá vỡ và tạo liên kết mới.'),
    Q('Trong phản ứng, các nguyên tử được?', ['Đổi loại', 'Bảo toàn (số lượng không đổi)', 'Mất đi', 'Tạo mới'], 1, 'Định luật bảo toàn nguyên tố.'),
    Q('Định luật bảo toàn khối lượng phát biểu?', ['Khối lượng giảm', 'Khối lượng tăng', 'Khối lượng không liên quan', 'Tổng khối lượng các chất tham gia = tổng khối lượng các chất tạo thành'], 3, 'Lavoisier 1789.'),
    Q('Cho biết 2H₂ + O₂ → 2H₂O. Tỉ lệ mol giữa H₂ và O₂?', ['1:1', '1:2', '2:2', '2:1'], 3, 'Hệ số 2 và 1 ⇒ 2:1.'),
    Q('Dấu hiệu của phản ứng hoá học?', ['Có chất mới xuất hiện (đổi màu, kết tủa, khí, nhiệt…)', 'Chỉ thay đổi nhiệt độ', 'Không có dấu hiệu', 'Chỉ đổi mùi'], 0, 'Quan sát chất mới.'),
    Q('Nếu m₁ + m₂ → m₃ + m₄, theo định luật bảo toàn khối lượng?', ['m₁ + m₂ = m₃ + m₄', 'm₁ = m₃', 'm₂ = m₄', 'm₁ + m₃ = m₂ + m₄'], 0, 'Tổng = tổng.'),
  ]),

  M(10, 'Tốc độ — Khái niệm và đơn vị', [
    Q('Tốc độ là đại lượng cho biết?', ['Nhiệt độ', 'Lực tác dụng', 'Mức độ nhanh hay chậm của chuyển động', 'Khối lượng vật'], 2, 'Định nghĩa tốc độ.'),
    Q('Công thức tính tốc độ?', ['v = s + t', 'v = t/s', 'v = s·t', 'v = s/t'], 3, 'Tốc độ = quãng đường / thời gian.'),
    Q('Đơn vị tốc độ trong SI?', ['m/s', 'm/h (mét/giờ)', 'cm/s (centimet/giây)', 'km/h (kilômét/giờ)'], 0, 'Hệ SI: mét/giây.'),
    Q('Đổi 36 km/h sang m/s?', ['36 m/s', '100 m/s', '10 m/s', '3,6 m/s'], 2, '36 ÷ 3,6 = 10.'),
    Q('Quãng đường s = ?', ['v·t', 't/v (thời gian chia tốc độ)', 'v + t (tốc độ cộng thời gian)', 'v/t (tốc độ chia thời gian)'], 0, 's = v · t.'),
    Q('Một xe đi 60 km trong 2 giờ, tốc độ trung bình?', ['15 km/h', '30 km/h', '60 km/h', '120 km/h'], 1, 'v = 60/2 = 30.'),
  ]),

  M(11, 'Đồ thị quãng đường — thời gian', [
    Q('Trên đồ thị (s,t), trục hoành thường là?', ['Thời gian t', 'Quãng đường s', 'Khối lượng', 'Tốc độ v'], 0, 'Trục x = t.'),
    Q('Đường biểu diễn s theo t của chuyển động đều có dạng?', ['Đường cong', 'Parabol', 'Đường tròn', 'Đường thẳng đi qua O'], 3, 's = vt là hàm bậc nhất.'),
    Q('Độ dốc đồ thị s-t cho biết?', ['Nhiệt độ', 'Khối lượng', 'Tốc độ', 'Quãng đường đi được'], 2, 'Hệ số góc = tốc độ.'),
    Q('Hai vật chuyển động đều, vật nào có đồ thị dốc hơn thì?', ['Đi chậm hơn', 'Cùng tốc độ', 'Đi nhanh hơn', 'Đứng yên'], 2, 'Dốc hơn ⇒ v lớn hơn.'),
    Q('Đồ thị nằm ngang (s không đổi theo t) nghĩa là?', ['Vật tăng tốc', 'Vật chuyển động đều', 'Vật giảm tốc', 'Vật đứng yên'], 3, 's không đổi ⇒ không đi.'),
    Q('Khi t = 0 và đồ thị đi qua gốc O, lúc đầu vật ở?', ['Đã chuyển động lâu', 'Vị trí gốc (s=0)', 'Không xác định', 'Cách gốc 1 m'], 1, 'Qua O ⇒ s₀ = 0.'),
  ]),

  M(12, 'Âm thanh — Nguồn âm và sự truyền âm', [
    Q('Nguồn âm là?', ['Vật phát ra âm thanh', 'Tai người', 'Không khí', 'Vật nghe được âm thanh'], 0, 'Định nghĩa nguồn âm.'),
    Q('Nguồn âm chung có đặc điểm?', ['Toả nhiệt', 'Phát ánh sáng', 'Đang dao động', 'Đứng yên'], 2, 'Dao động sinh ra âm.'),
    Q('Âm truyền được trong môi trường?', ['Chân không', 'Chỉ lỏng', 'Rắn, lỏng, khí', 'Chỉ khí'], 2, 'Không truyền trong chân không.'),
    Q('Trong môi trường nào âm truyền nhanh nhất?', ['Rắn', 'Chân không', 'Môi trường lỏng', 'Môi trường khí'], 0, 'v_rắn > v_lỏng > v_khí.'),
    Q('Sóng âm là sóng?', ['Hấp dẫn', 'Ánh sáng', 'Cơ học', 'Điện từ'], 2, 'Truyền nhờ dao động phần tử môi trường.'),
    Q('Đơn vị của tần số?', ['giây (s)', 'mét (m)', 'Hertz (Hz)', 'Decibel (dB)'], 2, 'Hz = số dao động/giây.'),
  ]),

  M(13, 'Độ to, độ cao của âm', [
    Q('Độ to của âm phụ thuộc?', ['Tần số', 'Khối lượng nguồn', 'Biên độ dao động', 'Vận tốc truyền'], 2, 'Biên độ lớn ⇒ âm to.'),
    Q('Độ cao của âm phụ thuộc?', ['Khoảng cách', 'Biên độ', 'Tần số dao động', 'Áp suất'], 2, 'Tần số càng cao, âm càng cao.'),
    Q('Đơn vị độ to của âm?', ['Decibel (dB)', 'Hertz (Hz)', 'Pascal (Pa)', 'mét/giây (m/s)'], 0, 'Decibel = đơn vị mức cường độ âm.'),
    Q('Tai người nghe được tần số trong khoảng?', ['1 – 5 Hz', '100 000 Hz trở lên', '0 – 10 Hz', '16 Hz – 20 000 Hz'], 3, 'Ngưỡng nghe của tai người.'),
    Q('Siêu âm là âm có tần số?', ['Dưới 16 Hz', 'Trong 100 Hz', 'Trên 20 000 Hz', '500 Hz'], 2, '> 20 kHz.'),
    Q('Hạ âm là âm có tần số?', ['Dưới 16 Hz', '100 Hz', 'Trên 20 000 Hz', '1 000 Hz'], 0, '< 16 Hz.'),
  ]),

  M(14, 'Ánh sáng — Định luật phản xạ', [
    Q('Ánh sáng truyền theo đường?', ['Thẳng trong môi trường đồng tính, trong suốt', 'Cong khi gặp vật cản', 'Ngẫu nhiên', 'Đường tròn'], 0, 'Định luật truyền thẳng ánh sáng.'),
    Q('Trong định luật phản xạ, góc tới = ?', ['Góc phản xạ', 'Bằng 90°', 'Góc tới gấp đôi', 'Góc khúc xạ'], 0, 'i = i\'.'),
    Q('Tia tới, tia phản xạ và pháp tuyến nằm?', ['Trong cùng một mặt phẳng', 'Trên trục y', 'Trên ba mặt phẳng khác nhau', 'Trên trục x'], 0, 'Định luật phản xạ.'),
    Q('Pháp tuyến tại điểm tới là?', ['Đường nằm ngang', 'Đường thẳng đi qua nguồn sáng', 'Đường tia tới', 'Đường vuông góc với mặt phản xạ tại điểm tới'], 3, 'Định nghĩa pháp tuyến.'),
    Q('Bóng tối là vùng?', ['Hoàn toàn không nhận được ánh sáng từ nguồn', 'Sáng yếu', 'Có cả ánh sáng và bóng', 'Phản chiếu ánh sáng'], 0, 'Phía sau vật chắn sáng.'),
    Q('Bóng nửa tối hình thành khi?', ['Vật chắn rất nhỏ', 'Không có vật chắn', 'Nguồn sáng có kích thước (không là điểm)', 'Nguồn sáng là điểm'], 2, 'Một phần ánh sáng vẫn tới được.'),
  ]),

  M(15, 'Ảnh của vật qua gương phẳng', [
    Q('Ảnh tạo bởi gương phẳng là?', ['Ảnh ảo, đối xứng, kích thước bằng vật', 'Ảnh ảo, lớn hơn vật', 'Ảnh thật, ngược chiều', 'Ảnh thật, nhỏ hơn vật'], 0, 'Đặc điểm ảnh gương phẳng.'),
    Q('Khoảng cách từ ảnh đến gương so với vật?', ['Nhỏ hơn', 'Gấp đôi', 'Bằng nhau', 'Lớn hơn'], 2, 'Đối xứng qua gương.'),
    Q('Ảnh trong gương phẳng có thể hứng được trên màn?', ['Có khi sáng', 'Có (ảnh thật)', 'Tuỳ vật', 'Không (ảnh ảo)'], 3, 'Ảnh ảo không hứng được.'),
    Q('Khi đứng trước gương phẳng giơ tay phải, ảnh giơ?', ['Cả hai tay', 'Không thấy tay', 'Tay phải', 'Tay trái (ngược trái-phải)'], 3, 'Đặc trưng ảnh gương.'),
    Q('Để vẽ ảnh qua gương phẳng, dùng phép?', ['Tịnh tiến', 'Đối xứng qua gương', 'Co giãn', 'Quay 90°'], 1, 'Phép đối xứng trục.'),
    Q('Ứng dụng gương phẳng?', ['Hội tụ ánh sáng mặt trời', 'Khúc xạ', 'Soi gương, kính chiếu hậu, kính tiềm vọng', 'Phân tách màu'], 2, 'Phản xạ ánh sáng.'),
  ]),

  M(16, 'Từ trường — Nam châm', [
    Q('Mỗi nam châm có?', ['Hai cực: Bắc (N) và Nam (S)', 'Bốn cực', 'Ba cực', 'Một cực'], 0, 'Lưỡng cực từ.'),
    Q('Hai cực cùng tên (N-N hoặc S-S) sẽ?', ['Không tương tác', 'Đẩy nhau', 'Tan ra', 'Hút nhau'], 1, 'Cùng dấu đẩy.'),
    Q('Hai cực khác tên (N-S) sẽ?', ['Không tương tác', 'Trộn lẫn', 'Đẩy nhau', 'Hút nhau'], 3, 'Khác dấu hút.'),
    Q('Từ trường là?', ['Vùng có nhiệt độ cao', 'Vùng có ánh sáng', 'Vùng không gian xung quanh nam châm hoặc dòng điện, có lực từ tác dụng lên kim nam châm', 'Vùng tích điện'], 2, 'Định nghĩa từ trường.'),
    Q('Trái Đất có từ trường?', ['Không, chỉ có trọng lực', 'Chỉ ở xích đạo', 'Có', 'Chỉ ở Bắc Cực'], 2, 'Từ trường Trái Đất → la bàn hoạt động.'),
    Q('Cực Bắc địa lí Trái Đất gần?', ['Cực Nam từ', 'Không có cực từ', 'Cả hai cực', 'Cực Bắc từ'], 0, 'Cực Bắc địa lí ≈ cực S từ ⇒ hút cực N kim la bàn.'),
  ]),

  M(17, 'Đường sức từ — La bàn', [
    Q('Đường sức từ ở ngoài nam châm có chiều?', ['Không có chiều', 'Hỗn loạn', 'Đi ra từ cực Nam', 'Đi ra từ cực Bắc, đi vào cực Nam'], 3, 'Quy ước.'),
    Q('Tại mỗi điểm trong từ trường, kim nam châm nhỏ đặt cân bằng chỉ hướng?', ['Vuông góc đường sức', 'Bất kì', 'Lên cao', 'Tiếp tuyến đường sức từ'], 3, 'Tiếp tuyến với đường sức.'),
    Q('Nam châm điện gồm?', ['Hai miếng sắt', 'Chỉ pin', 'Cuộn dây có dòng điện và lõi sắt non', 'Đồng và nhôm'], 2, 'Cuộn dây + lõi sắt non.'),
    Q('Cách tăng từ trường của nam châm điện?', ['Tăng cường độ dòng điện và số vòng dây', 'Giảm dòng điện', 'Bỏ lõi sắt', 'Hạ nhiệt độ tới 0'], 0, 'B ∝ NI.'),
    Q('La bàn dùng để?', ['Đo thời gian', 'Đo khối lượng', 'Đo nhiệt độ', 'Xác định phương hướng'], 3, 'Dụng cụ định hướng.'),
    Q('Kim la bàn luôn chỉ?', ['Hướng Tây', 'Hướng Đông', 'Bất kì', 'Hướng Bắc - Nam địa từ'], 3, 'Do từ trường Trái Đất.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Trong nguyên tử, hạt nhân gồm?', ['Electron', 'Chỉ proton', 'Proton và neutron', 'Chỉ neutron'], 2, 'p + n.'),
    Q('NaCl được hình thành bởi liên kết?', ['Kim loại', 'Liên kết hiđro', 'Cộng hoá trị', 'Ion'], 3, 'Na cho 1e, Cl nhận 1e.'),
    Q('Định luật bảo toàn khối lượng phát biểu rằng?', ['Khối lượng không liên quan', 'Tổng m chất phản ứng = tổng m chất sản phẩm', 'Khối lượng tăng', 'Khối lượng giảm'], 1, 'Lavoisier.'),
    Q('Tốc độ trung bình của xe đi 100 km trong 2 giờ?', ['100 km/h', '200 km/h', '50 km/h', '25 km/h'], 2, 'v = s/t = 50.'),
    Q('Âm truyền được trong?', ['Rắn, lỏng, khí', 'Chỉ rắn', 'Chỉ khí', 'Chỉ chân không'], 0, 'Cần môi trường vật chất.'),
    Q('Ảnh qua gương phẳng là?', ['Ảnh ảo, đối xứng, bằng vật', 'Ảnh thật, ngược chiều', 'Ảnh ảo, nhỏ hơn', 'Ảnh thật, lớn hơn'], 0, 'Đặc trưng gương phẳng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Dòng điện và mạch điện đơn giản', [
    Q('Dòng điện là?', ['Dòng nước trong dây', 'Dòng các hạt mang điện chuyển động có hướng', 'Dòng ánh sáng', 'Dòng nhiệt'], 1, 'Định nghĩa cơ bản.'),
    Q('Chiều quy ước dòng điện?', ['Từ cực dương qua dây dẫn đến cực âm của nguồn', 'Từ cực âm sang dương bên ngoài nguồn', 'Từ âm sang dương', 'Ngẫu nhiên'], 0, 'Quy ước cổ điển.'),
    Q('Đơn vị cường độ dòng điện?', ['Vôn (V)', 'Ôm (Ω)', 'Oát (W)', 'Ampe (A)'], 3, 'A.'),
    Q('Dụng cụ đo cường độ dòng điện?', ['Cân', 'Ôm kế', 'Ampe kế', 'Vôn kế'], 2, 'Mắc nối tiếp trong mạch.'),
    Q('Đơn vị hiệu điện thế?', ['Vôn (V)', 'Ampe (A)', 'Joule (J)', 'Hertz (Hz)'], 0, 'V.'),
    Q('Vôn kế được mắc?', ['Trong ổ cắm', 'Nối tiếp với nguồn điện', 'Nối tiếp', 'Song song với phần mạch cần đo'], 3, 'Song song với linh kiện.'),
  ]),

  M(20, 'Điện trở — Định luật Ôm', [
    Q('Điện trở của vật cản trở?', ['Âm thanh', 'Dòng điện chạy qua', 'Ánh sáng', 'Nhiệt độ'], 1, 'Cản trở dòng điện.'),
    Q('Đơn vị điện trở?', ['Watt (W)', 'Ôm (Ω)', 'Ampe (A)', 'Vôn (V)'], 1, 'Ω = V/A.'),
    Q('Công thức định luật Ôm?', ['U = I/R', 'I = U·R', 'I = U/R', 'R = U·I'], 2, 'I = U/R.'),
    Q('Khi U tăng (R không đổi) thì I?', ['Giảm theo tỉ lệ với U', 'Không đổi', 'Bằng 0', 'Tăng'], 3, 'I tỉ lệ thuận với U.'),
    Q('Khi R tăng (U không đổi) thì I?', ['Không đổi', 'Giảm', 'Tăng theo tỉ lệ với R', 'Bằng 0'], 1, 'I tỉ lệ nghịch với R.'),
    Q('Mạch có U = 12V, R = 4Ω. I = ?', ['4A', '3A', '8A', '6A'], 1, 'I = 12/4 = 3.'),
  ]),

  M(21, 'Trao đổi chất ở thực vật — Quang hợp', [
    Q('Quang hợp ở thực vật xảy ra chủ yếu ở?', ['Hoa và quả', 'Rễ cọc', 'Lá', 'Thân non'], 2, 'Tế bào chứa lục lạp ở lá.'),
    Q('Nguyên liệu của quang hợp?', ['Đạm và lân', 'Muối khoáng và CO₂', 'Nước và CO₂', 'Glucose và O₂'], 2, 'H₂O + CO₂.'),
    Q('Sản phẩm của quang hợp?', ['CO₂ và H₂O', 'Tinh bột và đạm', 'Glucose và O₂', 'Muối và H₂'], 2, 'C₆H₁₂O₆ + O₂.'),
    Q('Năng lượng cần cho quang hợp lấy từ?', ['Nhiệt độ thấp', 'Ánh sáng mặt trời', 'Gió và không khí', 'Khoáng chất trong đất'], 1, 'Quang năng → hoá năng.'),
    Q('Chất diệp lục có vai trò?', ['Hô hấp', 'Hấp thụ nước', 'Hấp thụ ánh sáng để quang hợp', 'Vận chuyển'], 2, 'Sắc tố chlorophyll.'),
    Q('Phương trình tổng quát của quang hợp?', ['C + O₂ → CO₂', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', '2H₂O → 2H₂ + O₂', '2H₂ + O₂ → 2H₂O'], 1, 'Phương trình quang hợp.'),
  ]),

  M(22, 'Nghỉ Tết — Đọc thêm về cây cảnh ngày Tết', [
    Q('Cây mai vàng nở vào dịp Tết do?', ['Tuốt lá đúng thời điểm + thời tiết', 'Phơi nắng', 'Tưới nhiều', 'Bón hoá chất'], 0, 'Người trồng tuốt lá để kích hoa.'),
    Q('Quang hợp cần ánh sáng nên cây nên đặt?', ['Trong tủ kín', 'Nơi có ánh sáng phù hợp', 'Bóng tối hoàn toàn', 'Dưới nước'], 1, 'Có ánh sáng để quang hợp.'),
    Q('Bánh chưng có nguyên liệu chính?', ['Gạo nếp, đậu xanh, thịt lợn, lá dong', 'Gạo tẻ, muối', 'Khoai, nước', 'Bột mì, đường, sữa'], 0, 'Bánh chưng truyền thống.'),
    Q('Nước trong cây vận chuyển theo?', ['Không vận chuyển', 'Mạch gỗ (xylem)', 'Khoang tế bào', 'Mạch rây (phloem)'], 1, 'Xylem dẫn nước.'),
    Q('Sản phẩm của hô hấp là?', ['Tinh bột', 'Glucose và O₂', 'O₂ và glucose', 'CO₂ và H₂O'], 3, 'Hô hấp ngược quang hợp.'),
    Q('Quang hợp xảy ra khi nào?', ['Khi khô', 'Khi có ánh sáng', 'Khi tối', 'Khi lạnh'], 1, 'Cần quang năng.'),
  ]),

  M(23, 'Hô hấp tế bào ở thực vật', [
    Q('Hô hấp tế bào là?', ['Quá trình phân giải chất hữu cơ giải phóng năng lượng', 'Tổng hợp chất hữu cơ', 'Vận chuyển nước', 'Hấp thụ ánh sáng'], 0, 'Ngược với quang hợp.'),
    Q('Nguyên liệu của hô hấp tế bào?', ['Muối khoáng', 'CO₂ và nước', 'Glucose và O₂', 'CO₂ và H₂O'], 2, 'C₆H₁₂O₆ + O₂.'),
    Q('Sản phẩm của hô hấp tế bào?', ['Tinh bột', 'Đạm và lân', 'Glucose và O₂', 'CO₂, H₂O và năng lượng (ATP)'], 3, 'Ngược quang hợp.'),
    Q('Hô hấp xảy ra ở?', ['Chỉ rễ', 'Chỉ lá', 'Mọi tế bào sống', 'Chỉ hoa'], 2, 'Mọi tế bào đều cần năng lượng.'),
    Q('Quang hợp và hô hấp có quan hệ?', ['Ngược chiều, bổ sung nhau', 'Cùng chiều', 'Không liên quan', 'Loại trừ nhau hoàn toàn'], 0, 'Chu trình carbon - oxy.'),
    Q('Phương trình hô hấp tế bào?', ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C + O₂ → CO₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + năng lượng', '2H₂O → 2H₂ + O₂'], 2, 'Tổng quát.'),
  ]),

  M(24, 'Trao đổi nước và muối khoáng ở thực vật', [
    Q('Rễ cây hấp thụ nước và muối khoáng chủ yếu qua?', ['Khí khổng ở lá', 'Cánh hoa', 'Lông hút', 'Vỏ cây'], 2, 'Tế bào lông hút.'),
    Q('Mạch gỗ (xylem) vận chuyển?', ['Nước và muối khoáng từ rễ lên lá', 'Chất hữu cơ từ lá đi nuôi cây', 'Năng lượng', 'Khí oxy'], 0, 'Vận chuyển một chiều: lên.'),
    Q('Mạch rây (phloem) vận chuyển?', ['Khí CO₂ từ rễ lên lá', 'Chất hữu cơ từ lá đi nuôi các bộ phận', 'Muối khoáng', 'Nước từ rễ'], 1, 'Hai chiều, chủ yếu xuống.'),
    Q('Sự thoát hơi nước qua?', ['Vỏ thân', 'Khí khổng ở lá', 'Lông hút ở rễ', 'Cánh hoa và đài hoa'], 1, 'Khí khổng (lỗ trên biểu bì lá).'),
    Q('Vai trò của thoát hơi nước?', ['Không có vai trò', 'Hút nước lên, làm mát cây, trao đổi khí', 'Làm cây héo', 'Giúp ra hoa'], 1, 'Quan trọng với sinh lí cây.'),
    Q('Yếu tố ảnh hưởng đến thoát hơi nước?', ['Màu lá', 'Giờ tưới', 'Loại đất', 'Ánh sáng, nhiệt độ, độ ẩm, gió'], 3, 'Điều kiện môi trường.'),
  ]),

  M(25, 'Trao đổi chất và năng lượng ở động vật — Hệ tiêu hoá', [
    Q('Hệ tiêu hoá ở người gồm?', ['Tim mạch', 'Phổi và đường hô hấp', 'Ống tiêu hoá và các tuyến tiêu hoá', 'Thận và bàng quang'], 2, 'Ống + tuyến.'),
    Q('Ống tiêu hoá gồm thứ tự?', ['Miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn', 'Dạ dày → miệng → ruột', 'Miệng → ruột → dạ dày', 'Ruột → dạ dày → miệng'], 0, 'Thứ tự cơ bản.'),
    Q('Tiêu hoá hoá học chủ yếu xảy ra ở?', ['Khoang miệng', 'Ruột non', 'Thực quản', 'Hậu môn'], 1, 'Ruột non có nhiều enzyme.'),
    Q('Hấp thụ chất dinh dưỡng chủ yếu ở?', ['Khoang miệng', 'Ruột già', 'Ruột non', 'Dạ dày'], 2, 'Lông ruột hấp thụ.'),
    Q('Tuyến tiêu hoá lớn nhất là?', ['Tuyến tụy', 'Gan', 'Tuyến dạ dày', 'Tuyến nước bọt'], 1, 'Gan tiết mật.'),
    Q('Vai trò của ruột già?', ['Hấp thụ nước và muối khoáng, tạo phân', 'Hấp thụ glucose', 'Tiêu hoá tinh bột', 'Tiết enzyme'], 0, 'Chức năng cuối ống tiêu hoá.'),
  ]),

  M(26, 'Hô hấp ở động vật', [
    Q('Hệ hô hấp ở người gồm?', ['Đường dẫn khí và phổi', 'Thận và bàng quang', 'Tim và mạch máu', 'Dạ dày và ruột'], 0, 'Đường khí + phổi.'),
    Q('Đường dẫn khí gồm?', ['Da → cơ', 'Mũi → họng → thanh quản → khí quản → phế quản', 'Miệng → ruột', 'Tim → phổi'], 1, 'Thứ tự đường khí.'),
    Q('Trao đổi khí ở phổi diễn ra ở?', ['Phế quản', 'Thanh quản', 'Phế nang', 'Khí quản'], 2, 'Phế nang nơi O₂ và CO₂ trao đổi.'),
    Q('Trong quá trình hít vào, cơ hoành?', ['Hạ xuống', 'Nâng lên', 'Bị xoắn', 'Không thay đổi'], 0, 'Mở rộng thể tích lồng ngực.'),
    Q('Khí thải ra khi thở chứa nhiều?', ['N₂ (~78%)', 'CO₂', 'O₂ (~21%)', 'Hơi nước duy nhất'], 1, 'Sản phẩm hô hấp.'),
    Q('Khí hít vào chứa nhiều?', ['CO (cacbon monooxit)', 'Khí hiếm', 'O₂ (~21%)', 'CO₂ (~21%)'], 2, 'Không khí ~21% O₂.'),
  ]),

  M(27, 'Tuần hoàn ở động vật (giới thiệu)', [
    Q('Hệ tuần hoàn ở người gồm?', ['Phổi và phế quản', 'Tim và hệ mạch máu', 'Dạ dày', 'Thận và bàng quang'], 1, 'Tim + mạch.'),
    Q('Máu vận chuyển từ tim đi qua?', ['Bạch huyết', 'Động mạch', 'Mao mạch chỉ', 'Tĩnh mạch'], 1, 'Động mạch xa tim.'),
    Q('Máu về tim qua?', ['Tĩnh mạch', 'Mao mạch', 'Động mạch', 'Bạch huyết'], 0, 'Tĩnh mạch về tim.'),
    Q('Trao đổi chất giữa máu và mô diễn ra ở?', ['Tĩnh mạch lớn', 'Tâm thất trái', 'Mao mạch', 'Động mạch lớn'], 2, 'Mao mạch nhỏ, thành mỏng.'),
    Q('Tim người có bao nhiêu ngăn?', ['5 ngăn', '4 ngăn', '2 ngăn', '3 ngăn'], 1, '2 tâm nhĩ + 2 tâm thất.'),
    Q('Vòng tuần hoàn nhỏ đi qua?', ['Toàn thân', 'Thận và bàng quang', 'Gan và mật', 'Phổi'], 3, 'Tim phải → phổi → tim trái.'),
  ]),

  M(28, 'Cảm ứng ở thực vật', [
    Q('Cảm ứng ở sinh vật là?', ['Hô hấp', 'Phản ứng của sinh vật trước kích thích từ môi trường', 'Quang hợp', 'Sinh sản'], 1, 'Phản ứng thích nghi.'),
    Q('Hướng sáng (phototropism) là?', ['Không phản ứng', 'Tránh ánh sáng', 'Ngẫu nhiên', 'Sinh trưởng hướng về phía ánh sáng'], 3, 'Ngọn cây cong về phía sáng.'),
    Q('Hướng đất (gravitropism) ở rễ?', ['Rễ mọc lên trời', 'Rễ mọc ngang theo mặt đất', 'Không xác định', 'Rễ mọc xuống đất'], 3, 'Phản ứng dương với trọng lực.'),
    Q('Cây nhạy cảm với chạm như cây trinh nữ thuộc?', ['Cảm ứng chậm', 'Cảm ứng nhanh', 'Không cảm ứng', 'Cảm ứng nhiệt'], 1, 'Lá cụp lại khi chạm.'),
    Q('Hướng tiếp xúc giúp cây?', ['Tránh ánh sáng', 'Leo, bám vào giá thể', 'Rụng lá', 'Ra hoa'], 1, 'Cây leo, dây cuốn.'),
    Q('Vai trò của cảm ứng?', ['Phát quang', 'Đổi màu', 'Tăng khối lượng', 'Giúp sinh vật thích nghi với môi trường'], 3, 'Tồn tại và phát triển.'),
  ]),

  M(29, 'Cảm ứng ở động vật (giới thiệu)', [
    Q('Hệ thần kinh ở động vật bậc cao gồm?', ['Trung ương (não, tủy sống) và ngoại biên', 'Chỉ dây thần kinh', 'Chỉ não', 'Chỉ tủy sống'], 0, 'Cấu trúc tổng quát.'),
    Q('Phản xạ là?', ['Hô hấp', 'Phản ứng hoá học', 'Phản ứng của cơ thể qua hệ thần kinh', 'Hành vi học được'], 2, 'Cơ chế thần kinh.'),
    Q('Phản xạ không điều kiện là?', ['Phản xạ bẩm sinh, di truyền', 'Tự ý thức', 'Học được sau sinh', 'Tự nguyện'], 0, 'Có sẵn từ sinh.'),
    Q('Phản xạ có điều kiện là?', ['Tự nhiên', 'Bẩm sinh', 'Hình thành trong đời sống nhờ học tập', 'Di truyền'], 2, 'Pavlov với chuông và chó.'),
    Q('Cung phản xạ gồm?', ['Chỉ tủy sống', 'Cơ quan thụ cảm → dây thần kinh hướng tâm → trung ương → ly tâm → cơ quan đáp ứng', 'Chỉ cảm giác', 'Chỉ não bộ'], 1, 'Đường đi của xung thần kinh.'),
    Q('Vai trò của phản xạ?', ['Tăng cân', 'Đổi màu da', 'Tự tổng hợp glucose', 'Giúp cơ thể thích nghi nhanh với môi trường'], 3, 'Phản ứng nhanh.'),
  ]),

  M(30, 'Sinh trưởng và phát triển ở thực vật', [
    Q('Sinh trưởng là?', ['Sự sinh sản', 'Sự tăng kích thước và khối lượng của cơ thể', 'Sự biến đổi chất', 'Sự hô hấp'], 1, 'Tăng về lượng.'),
    Q('Phát triển là?', ['Quang hợp', 'Hấp thụ nước', 'Tăng khối lượng', 'Sự biến đổi hình thái và chức năng'], 3, 'Biến đổi về chất.'),
    Q('Mô phân sinh ở thực vật giúp?', ['Hô hấp', 'Vận chuyển', 'Tăng trưởng (chiều cao, chiều dày)', 'Quang hợp'], 2, 'Tế bào liên tục phân chia.'),
    Q('Mô phân sinh đỉnh ở?', ['Phiến lá trưởng thành', 'Vỏ quả chín', 'Ngọn thân và đầu rễ', 'Cánh hoa'], 2, 'Giúp cây dài ra.'),
    Q('Yếu tố ảnh hưởng đến sinh trưởng, phát triển ở thực vật?', ['Tuổi cây mẹ', 'Ánh sáng, nhiệt độ, nước, dinh dưỡng', 'Loại chậu', 'Màu sắc đất'], 1, 'Các yếu tố môi trường.'),
    Q('Hooc-môn thực vật ảnh hưởng đến?', ['Mùi vị', 'Trọng lượng quả duy nhất', 'Màu hoa duy nhất', 'Sự sinh trưởng và phát triển'], 3, 'Auxin, gibberellin, cytokinin…'),
  ]),

  M(31, 'Sinh sản ở thực vật', [
    Q('Sinh sản ở thực vật có?', ['Chỉ hữu tính', 'Không sinh sản', 'Chỉ vô tính', 'Sinh sản vô tính và hữu tính'], 3, 'Hai hình thức.'),
    Q('Sinh sản vô tính ở thực vật KHÔNG có sự tham gia của?', ['Tế bào sinh dưỡng', 'Mô phân sinh', 'Tế bào sinh dục', 'Cơ quan dinh dưỡng'], 2, 'Không cần giao tử.'),
    Q('Giâm cành là hình thức?', ['Sinh sản vô tính', 'Sinh sản hữu tính', 'Hô hấp', 'Quang hợp'], 0, 'Từ cành mọc thành cây mới.'),
    Q('Sinh sản hữu tính ở thực vật có hoa gồm?', ['Chỉ chiết', 'Chỉ trồng cây', 'Chỉ giâm', 'Thụ phấn → thụ tinh → tạo hạt và quả'], 3, 'Quá trình sinh sản hữu tính.'),
    Q('Thụ phấn là?', ['Nảy mầm', 'Hạt phấn chuyển tới đầu nhuỵ', 'Thụ tinh', 'Hô hấp'], 1, 'Pollination.'),
    Q('Quả được hình thành từ?', ['Hạt phấn', 'Bầu nhuỵ phát triển sau thụ tinh', 'Rễ phình to sau khi ra hoa', 'Lá đài'], 1, 'Bầu nhuỵ → quả.'),
  ]),

  M(32, 'Sinh sản ở động vật (giới thiệu)', [
    Q('Sinh sản vô tính ở động vật thường gặp ở?', ['Mèo và các loài thú', 'Động vật bậc thấp (thuỷ tức, sao biển…)', 'Người và linh trưởng', 'Chó và các loài thú nuôi'], 1, 'Nảy chồi, phân đôi…'),
    Q('Sinh sản hữu tính ở động vật cần?', ['Giao tử đực và giao tử cái kết hợp', 'Nảy chồi', 'Không cần giao tử', 'Chỉ một cá thể'], 0, 'Tinh trùng + trứng → hợp tử.'),
    Q('Đẻ trứng gặp ở?', ['Người và các loài thú', 'Chim, bò sát, lưỡng cư, cá', 'Chỉ động vật cạn', 'Thú có vú nói chung'], 1, 'Đẻ trứng phổ biến.'),
    Q('Đẻ con gặp ở?', ['Chim và các loài bay', 'Cá và lưỡng cư', 'Bò sát', 'Thú (gồm cả người)'], 3, 'Mang thai trong cơ thể mẹ.'),
    Q('Ưu điểm sinh sản hữu tính?', ['Đời con giống hệt mẹ', 'Đa dạng di truyền, thích nghi tốt', 'Nhanh, nhiều', 'Không cần bạn tình'], 1, 'Tổ hợp gen tăng đa dạng.'),
    Q('Nhược điểm sinh sản vô tính?', ['Đời con giống hệt mẹ, ít đa dạng', 'Tốn năng lượng', 'Tốc độ chậm', 'Cần hai cá thể'], 0, 'Thiếu đa dạng di truyền.'),
  ]),

  M(33, 'Cơ thể sinh vật là một thể thống nhất', [
    Q('Các hệ cơ quan trong cơ thể có mối quan hệ?', ['Phối hợp chặt chẽ, thống nhất', 'Không liên quan', 'Hoạt động độc lập', 'Cạnh tranh nhau'], 0, 'Phối hợp đảm bảo sự sống.'),
    Q('Hệ tuần hoàn vận chuyển?', ['Chất dinh dưỡng, O₂, CO₂, hooc-môn…', 'Chỉ O₂', 'Chỉ máu', 'Chỉ CO₂'], 0, 'Đa chức năng.'),
    Q('Hệ thần kinh và hệ nội tiết phối hợp để?', ['Chỉ thải', 'Chỉ tiêu hoá', 'Chỉ vận động', 'Điều khiển và điều hoà hoạt động cơ thể'], 3, 'Hai hệ điều hoà.'),
    Q('Nếu một hệ cơ quan bị rối loạn, các hệ khác?', ['Bị ảnh hưởng', 'Không quan tâm', 'Tốt hơn', 'Hoạt động bình thường'], 0, 'Tính thống nhất.'),
    Q('Cơ thể sinh vật là?', ['Hệ kín', 'Hệ tĩnh', 'Một hệ thống mở, thường xuyên trao đổi chất và năng lượng với môi trường', 'Không liên hệ môi trường'], 2, 'Hệ thống mở.'),
    Q('Tự điều hoà của cơ thể giúp?', ['Duy trì nội môi ổn định', 'Tăng cân', 'Tăng tuổi thọ vô hạn', 'Chống mọi bệnh'], 0, 'Homeostasis.'),
  ]),

  M(34, 'Ôn tập Hoá — Vật lí HK2', [
    Q('Định luật Ôm: I = ?', ['R/U (điện trở chia hiệu điện thế)', 'U + R (hiệu điện thế cộng điện trở)', 'U·R (hiệu điện thế nhân điện trở)', 'U/R'], 3, 'I = U/R.'),
    Q('U = 6V, R = 2Ω. I = ?', ['3A', '2A', '12A', '6A'], 0, '6/2 = 3.'),
    Q('Tốc độ là gì?', ['Đại lượng đo lực tác dụng', 'Năng lượng', 'Đại lượng đo mức độ nhanh/chậm', 'Khối lượng'], 2, 'v = s/t.'),
    Q('Liên kết trong H₂O là?', ['Kim loại', 'Liên kết kim loại', 'Liên kết ion', 'Cộng hoá trị'], 3, 'Phi kim + phi kim.'),
    Q('Hai cực cùng tên của nam châm sẽ?', ['Hút nhau mạnh', 'Đẩy nhau', 'Hút nhau', 'Không tương tác'], 1, 'Cùng dấu → đẩy.'),
    Q('Phương trình tổng quát quang hợp?', ['6O₂ + glucose → CO₂ + H₂O', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'CO₂ → C + O', '2H₂ + O₂ → 2H₂O'], 1, 'Quang hợp.'),
  ]),

  M(35, 'Kiểm tra học kì II — Tổng hợp cả năm', [
    Q('Cấu tạo nguyên tử gồm?', ['Chỉ neutron', 'Chỉ proton', 'Hạt nhân và lớp vỏ electron', 'Chỉ electron'], 2, 'Cơ bản.'),
    Q('Tốc độ trung bình xe đi 90 km trong 1,5 giờ?', ['45 km/h', '90 km/h', '135 km/h', '60 km/h'], 3, 'v = 90/1,5 = 60.'),
    Q('Âm KHÔNG truyền qua môi trường nào?', ['Chất lỏng (nước)', 'Chất khí (không khí)', 'Chân không', 'Chất rắn (sắt, gỗ)'], 2, 'Chân không không có vật chất.'),
    Q('Định luật phản xạ ánh sáng: góc tới ?', ['Vuông góc', 'Bằng nửa', 'Gấp đôi', 'Bằng góc phản xạ'], 3, 'i = i\'.'),
    Q('Lá cây thực hiện quá trình nào dưới ánh sáng?', ['Quang hợp', 'Thoát hơi nước duy nhất', 'Vận chuyển', 'Hô hấp duy nhất'], 0, 'Khi có ánh sáng.'),
    Q('Sinh sản hữu tính có ưu điểm?', ['Không cần bạn tình', 'Nhanh và nhiều', 'Đa dạng di truyền', 'Đời con giống hệt mẹ'], 2, 'Đa dạng → thích nghi.'),
  ]),
];

export const S7KHTN_SCENARIOS = indexBy(S7KHTN_WEEKS);
