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
    Q('Bước đầu tiên trong phương pháp tìm hiểu tự nhiên là?', ['Quan sát, đặt câu hỏi', 'Kết luận', 'Thí nghiệm', 'Báo cáo'], 0, 'Quan sát → đặt vấn đề → giả thuyết → thí nghiệm → kết luận.'),
    Q('Giả thuyết khoa học là?', ['Dự đoán có cơ sở để kiểm chứng', 'Kết luận chắc chắn', 'Ý kiến vô căn cứ', 'Câu hỏi tu từ'], 0, 'Giả thuyết cần kiểm chứng.'),
    Q('Thí nghiệm có vai trò?', ['Kiểm chứng giả thuyết', 'Trang trí', 'Thay sách giáo khoa', 'Làm bài tập'], 0, 'Cốt lõi PP khoa học.'),
    Q('Khi làm thí nghiệm hoá học, cần?', ['Đeo kính bảo hộ, găng tay khi cần', 'Mặc đồ thoải mái không bảo hộ', 'Nếm hoá chất để biết', 'Ngửi gần miệng ống'], 0, 'An toàn là ưu tiên.'),
    Q('Đơn vị đo độ dài trong hệ SI?', ['Mét (m)', 'Centimet (cm)', 'Inch', 'Lít (L)'], 0, 'Đơn vị chuẩn của SI.'),
  ]),

  M(2, 'Nguyên tử — Cấu tạo', [
    Q('Nguyên tử gồm?', ['Hạt nhân và lớp vỏ electron', 'Chỉ proton', 'Chỉ electron', 'Chỉ neutron'], 0, 'Cấu trúc cơ bản.'),
    Q('Hạt nhân gồm?', ['Proton và neutron', 'Proton và electron', 'Neutron và electron', 'Chỉ proton'], 0, 'Hai loại hạt: p và n.'),
    Q('Electron mang điện tích?', ['Âm', 'Dương', 'Không mang điện', 'Cả âm và dương'], 0, 'e mang điện tích −1.'),
    Q('Proton mang điện tích?', ['Dương', 'Âm', 'Không', 'Trung tính'], 0, 'p mang điện tích +1.'),
    Q('Neutron mang điện tích?', ['Không', 'Dương', 'Âm', 'Cả dương và âm'], 0, 'n trung hoà điện.'),
    Q('Số proton = số electron trong nguyên tử trung hoà về?', ['Khối lượng', 'Điện tích', 'Thể tích', 'Năng lượng'], 1, 'Trung hoà điện ⇒ p = e.'),
  ]),

  M(3, 'Mô hình nguyên tử — Số khối, kí hiệu', [
    Q('Số khối A của nguyên tử = ?', ['p + n', 'p + e', 'e + n', 'p × n'], 0, 'A = số proton + số neutron.'),
    Q('Số hiệu nguyên tử Z = ?', ['Số proton', 'Số neutron', 'Số electron lớp ngoài', 'Số khối'], 0, 'Z = p (cũng = e khi trung hoà).'),
    Q('Nguyên tử C có Z = 6. Số electron là?', ['6', '12', '14', '8'], 0, 'Số e = Z = 6.'),
    Q('Đồng vị là các nguyên tử cùng?', ['Cùng Z, khác A', 'Cùng A, khác Z', 'Cùng cả A và Z', 'Khác cả A và Z'], 0, 'Đồng vị: cùng số p, khác số n.'),
    Q('Mô hình Bo (Bohr) mô tả electron?', ['Chuyển động trên các quỹ đạo (lớp) xác định', 'Đứng yên', 'Trộn vào hạt nhân', 'Rời khỏi nguyên tử'], 0, 'Quỹ đạo Bo.'),
    Q('Lớp electron ngoài cùng quyết định?', ['Tính chất hoá học', 'Khối lượng', 'Màu sắc', 'Trạng thái'], 0, 'Liên kết hoá học phụ thuộc lớp ngoài.'),
  ]),

  M(4, 'Nguyên tố hoá học — Bảng tuần hoàn (giới thiệu)', [
    Q('Nguyên tố hoá học là?', ['Tập hợp các nguyên tử cùng số proton', 'Tập hợp các chất khác nhau', 'Tập hợp các hợp chất', 'Tập hợp các phân tử'], 0, 'Cùng Z = cùng nguyên tố.'),
    Q('Kí hiệu hoá học của Hydro?', ['H', 'He', 'Hy', 'Hd'], 0, 'Hydrogen → H.'),
    Q('Kí hiệu của Oxi?', ['O', 'Ox', 'Os', 'On'], 0, 'Oxygen → O.'),
    Q('Hiện nay có khoảng bao nhiêu nguyên tố hoá học đã biết?', ['Khoảng 118', 'Khoảng 50', 'Khoảng 200', 'Khoảng 30'], 0, '~118 nguyên tố trong BTH hiện đại.'),
    Q('Bảng tuần hoàn do ai đề xuất?', ['Mendeleev', 'Newton', 'Einstein', 'Darwin'], 0, 'Đ.I. Mendeleev (1869).'),
    Q('Nguyên tố ở cùng một nhóm có?', ['Tính chất hoá học tương tự', 'Cùng số khối', 'Cùng màu sắc', 'Cùng khối lượng riêng'], 0, 'Do cùng số e lớp ngoài.'),
  ]),

  M(5, 'Bảng tuần hoàn các nguyên tố — Cấu trúc', [
    Q('Bảng tuần hoàn gồm các hàng gọi là?', ['Chu kì', 'Nhóm', 'Cột', 'Bậc'], 0, 'Hàng ngang = chu kì.'),
    Q('Bảng tuần hoàn có các cột gọi là?', ['Nhóm', 'Chu kì', 'Lớp', 'Cấp'], 0, 'Cột dọc = nhóm.'),
    Q('Số chu kì trong BTH hiện đại?', ['7', '8', '5', '10'], 0, 'Có 7 chu kì.'),
    Q('Nguyên tố trong cùng chu kì có cùng?', ['Số lớp electron', 'Số electron lớp ngoài cùng', 'Số khối', 'Khối lượng'], 0, 'Cùng số lớp e.'),
    Q('Nguyên tố nhóm IA gồm?', ['Kim loại kiềm', 'Khí hiếm', 'Halogen', 'Kim loại chuyển tiếp'], 0, 'Li, Na, K…'),
    Q('Nhóm VIIIA là nhóm?', ['Khí hiếm', 'Kim loại kiềm', 'Halogen', 'Kim loại'], 0, 'He, Ne, Ar…'),
  ]),

  M(6, 'Phân tử — Đơn chất, hợp chất', [
    Q('Phân tử là?', ['Hạt đại diện cho chất, thể hiện đầy đủ tính chất hoá học của chất', 'Một nguyên tử', 'Một hạt electron', 'Một hạt proton'], 0, 'Đơn vị nhỏ nhất mang tính chất hoá học của chất.'),
    Q('Đơn chất là chất tạo bởi?', ['Một nguyên tố', 'Hai nguyên tố trở lên', 'Tất cả nguyên tố', 'Ion'], 0, 'Đơn chất: 1 nguyên tố.'),
    Q('Hợp chất là chất tạo bởi?', ['Hai hay nhiều nguyên tố', 'Một nguyên tố', 'Chỉ kim loại', 'Chỉ phi kim'], 0, 'Hai nguyên tố trở lên kết hợp.'),
    Q('Nước H₂O là?', ['Hợp chất', 'Đơn chất', 'Hỗn hợp', 'Nguyên tố'], 0, 'Gồm H và O ⇒ hợp chất.'),
    Q('Khí O₂ là?', ['Đơn chất', 'Hợp chất', 'Hỗn hợp', 'Nguyên tố'], 0, 'Chỉ gồm O ⇒ đơn chất.'),
    Q('Trong CO₂, có mấy loại nguyên tố?', ['1', '2', '3', '4'], 1, 'C và O ⇒ 2 nguyên tố.'),
  ]),

  M(7, 'Liên kết hoá học sơ đẳng', [
    Q('Liên kết ion hình thành giữa?', ['Kim loại điển hình và phi kim điển hình', 'Hai phi kim', 'Hai kim loại', 'Khí hiếm với khí hiếm'], 0, 'Cho — nhận electron.'),
    Q('Liên kết cộng hoá trị hình thành giữa?', ['Các phi kim', 'Kim loại và phi kim', 'Hai kim loại', 'Khí hiếm'], 0, 'Dùng chung electron.'),
    Q('NaCl là hợp chất liên kết?', ['Ion', 'Cộng hoá trị', 'Kim loại', 'Hiđro'], 0, 'Na cho 1 e, Cl nhận 1 e.'),
    Q('H₂O có liên kết?', ['Cộng hoá trị', 'Ion', 'Kim loại', 'Tinh thể'], 0, 'H và O đều phi kim ⇒ cộng hoá trị.'),
    Q('Mục đích của liên kết hoá học?', ['Đạt cấu hình bền giống khí hiếm', 'Tăng khối lượng', 'Đổi màu sắc', 'Phát quang'], 0, 'Quy tắc octet.'),
    Q('Khí hiếm khó tạo liên kết vì?', ['Có lớp electron ngoài cùng đã bão hoà', 'Khối lượng quá nhỏ', 'Quá nặng', 'Trong suốt'], 0, '8 e lớp ngoài (trừ He là 2).'),
  ]),

  M(8, 'Hoá trị — Công thức hoá học', [
    Q('Hoá trị của H trong các hợp chất thường là?', ['I', 'II', 'III', 'IV'], 0, 'H luôn hoá trị I (trừ hydrua kim loại).'),
    Q('Hoá trị của O trong nước là?', ['II', 'I', 'III', 'IV'], 0, 'O hoá trị II trong hầu hết hợp chất.'),
    Q('Công thức hoá học của khí Oxi?', ['O₂', 'O', 'O₃', 'OH'], 0, 'Đơn chất khí: O₂.'),
    Q('Công thức của Cacbon đioxit?', ['CO', 'CO₂', 'C₂O', 'C₂O₂'], 1, 'CO₂.'),
    Q('Quy tắc hoá trị: a·x = b·y nghĩa là?', ['Tích chỉ số và hoá trị của hai nguyên tố bằng nhau', 'Tổng chỉ số bằng tổng hoá trị', 'Hiệu chỉ số bằng hoá trị', 'Không liên quan'], 0, 'Quy tắc cân bằng hoá trị.'),
    Q('Trong CaCO₃, Ca có hoá trị?', ['II', 'I', 'III', 'IV'], 0, 'Ca thuộc nhóm IIA, hoá trị II.'),
  ]),

  M(9, 'Phản ứng hoá học — Định luật bảo toàn khối lượng', [
    Q('Phản ứng hoá học là?', ['Quá trình biến đổi chất này thành chất khác', 'Biến đổi trạng thái', 'Biến đổi hình dạng', 'Tan trong nước'], 0, 'Bản chất là phá vỡ và tạo liên kết mới.'),
    Q('Trong phản ứng, các nguyên tử được?', ['Bảo toàn (số lượng không đổi)', 'Mất đi', 'Tạo mới', 'Đổi loại'], 0, 'Định luật bảo toàn nguyên tố.'),
    Q('Định luật bảo toàn khối lượng phát biểu?', ['Tổng khối lượng các chất tham gia = tổng khối lượng các chất tạo thành', 'Khối lượng tăng', 'Khối lượng giảm', 'Khối lượng không liên quan'], 0, 'Lavoisier 1789.'),
    Q('Cho biết 2H₂ + O₂ → 2H₂O. Tỉ lệ mol giữa H₂ và O₂?', ['1:2', '2:1', '1:1', '2:2'], 1, 'Hệ số 2 và 1 ⇒ 2:1.'),
    Q('Dấu hiệu của phản ứng hoá học?', ['Có chất mới xuất hiện (đổi màu, kết tủa, khí, nhiệt…)', 'Chỉ thay đổi nhiệt độ', 'Chỉ đổi mùi', 'Không có dấu hiệu'], 0, 'Quan sát chất mới.'),
    Q('Nếu m₁ + m₂ → m₃ + m₄, theo định luật bảo toàn khối lượng?', ['m₁ + m₂ = m₃ + m₄', 'm₁ = m₃', 'm₂ = m₄', 'm₁ + m₃ = m₂ + m₄'], 0, 'Tổng = tổng.'),
  ]),

  M(10, 'Tốc độ — Khái niệm và đơn vị', [
    Q('Tốc độ là đại lượng cho biết?', ['Mức độ nhanh hay chậm của chuyển động', 'Khối lượng vật', 'Lực tác dụng', 'Nhiệt độ'], 0, 'Định nghĩa tốc độ.'),
    Q('Công thức tính tốc độ?', ['v = s/t', 'v = s·t', 'v = t/s', 'v = s + t'], 0, 'Tốc độ = quãng đường / thời gian.'),
    Q('Đơn vị tốc độ trong SI?', ['m/s', 'km/h', 'cm/s', 'm/h'], 0, 'Hệ SI: mét/giây.'),
    Q('Đổi 36 km/h sang m/s?', ['10 m/s', '36 m/s', '100 m/s', '3,6 m/s'], 0, '36 ÷ 3,6 = 10.'),
    Q('Quãng đường s = ?', ['v·t', 'v/t', 't/v', 'v + t'], 0, 's = v · t.'),
    Q('Một xe đi 60 km trong 2 giờ, tốc độ trung bình?', ['30 km/h', '60 km/h', '120 km/h', '15 km/h'], 0, 'v = 60/2 = 30.'),
  ]),

  M(11, 'Đồ thị quãng đường — thời gian', [
    Q('Trên đồ thị (s,t), trục hoành thường là?', ['Thời gian t', 'Quãng đường s', 'Tốc độ v', 'Khối lượng'], 0, 'Trục x = t.'),
    Q('Đường biểu diễn s theo t của chuyển động đều có dạng?', ['Đường thẳng đi qua O', 'Đường cong', 'Đường tròn', 'Parabol'], 0, 's = vt là hàm bậc nhất.'),
    Q('Độ dốc đồ thị s-t cho biết?', ['Tốc độ', 'Khối lượng', 'Nhiệt độ', 'Lực'], 0, 'Hệ số góc = tốc độ.'),
    Q('Hai vật chuyển động đều, vật nào có đồ thị dốc hơn thì?', ['Đi nhanh hơn', 'Đi chậm hơn', 'Cùng tốc độ', 'Đứng yên'], 0, 'Dốc hơn ⇒ v lớn hơn.'),
    Q('Đồ thị nằm ngang (s không đổi theo t) nghĩa là?', ['Vật đứng yên', 'Vật chuyển động đều', 'Vật tăng tốc', 'Vật giảm tốc'], 0, 's không đổi ⇒ không đi.'),
    Q('Khi t = 0 và đồ thị đi qua gốc O, lúc đầu vật ở?', ['Vị trí gốc (s=0)', 'Cách gốc 1 m', 'Không xác định', 'Đã chuyển động lâu'], 0, 'Qua O ⇒ s₀ = 0.'),
  ]),

  M(12, 'Âm thanh — Nguồn âm và sự truyền âm', [
    Q('Nguồn âm là?', ['Vật phát ra âm thanh', 'Vật nghe được âm thanh', 'Không khí', 'Tai người'], 0, 'Định nghĩa nguồn âm.'),
    Q('Nguồn âm chung có đặc điểm?', ['Đang dao động', 'Đứng yên', 'Phát ánh sáng', 'Toả nhiệt'], 0, 'Dao động sinh ra âm.'),
    Q('Âm truyền được trong môi trường?', ['Rắn, lỏng, khí', 'Chỉ khí', 'Chỉ lỏng', 'Chân không'], 0, 'Không truyền trong chân không.'),
    Q('Trong môi trường nào âm truyền nhanh nhất?', ['Rắn', 'Lỏng', 'Khí', 'Chân không'], 0, 'v_rắn > v_lỏng > v_khí.'),
    Q('Sóng âm là sóng?', ['Cơ học', 'Điện từ', 'Ánh sáng', 'Hấp dẫn'], 0, 'Truyền nhờ dao động phần tử môi trường.'),
    Q('Đơn vị của tần số?', ['Hertz (Hz)', 'mét (m)', 'giây (s)', 'kg'], 0, 'Hz = số dao động/giây.'),
  ]),

  M(13, 'Độ to, độ cao của âm', [
    Q('Độ to của âm phụ thuộc?', ['Biên độ dao động', 'Tần số', 'Vận tốc truyền', 'Khối lượng nguồn'], 0, 'Biên độ lớn ⇒ âm to.'),
    Q('Độ cao của âm phụ thuộc?', ['Tần số dao động', 'Biên độ', 'Khoảng cách', 'Áp suất'], 0, 'Tần số càng cao, âm càng cao.'),
    Q('Đơn vị độ to của âm?', ['Decibel (dB)', 'Hz', 'm/s', 'Pa'], 0, 'Decibel = đơn vị mức cường độ âm.'),
    Q('Tai người nghe được tần số trong khoảng?', ['16 Hz – 20 000 Hz', '0 – 10 Hz', '100 000 Hz trở lên', '1 – 5 Hz'], 0, 'Ngưỡng nghe của tai người.'),
    Q('Siêu âm là âm có tần số?', ['Trên 20 000 Hz', 'Dưới 16 Hz', 'Trong 100 Hz', '500 Hz'], 0, '> 20 kHz.'),
    Q('Hạ âm là âm có tần số?', ['Dưới 16 Hz', 'Trên 20 000 Hz', '100 Hz', '1 000 Hz'], 0, '< 16 Hz.'),
  ]),

  M(14, 'Ánh sáng — Định luật phản xạ', [
    Q('Ánh sáng truyền theo đường?', ['Thẳng trong môi trường đồng tính, trong suốt', 'Cong', 'Ngẫu nhiên', 'Đường tròn'], 0, 'Định luật truyền thẳng ánh sáng.'),
    Q('Trong định luật phản xạ, góc tới = ?', ['Góc phản xạ', 'Góc khúc xạ', 'Góc tới gấp đôi', 'Bằng 90°'], 0, 'i = i\'.'),
    Q('Tia tới, tia phản xạ và pháp tuyến nằm?', ['Trong cùng một mặt phẳng', 'Trên ba mặt phẳng khác nhau', 'Trên trục x', 'Trên trục y'], 0, 'Định luật phản xạ.'),
    Q('Pháp tuyến tại điểm tới là?', ['Đường vuông góc với mặt phản xạ tại điểm tới', 'Đường thẳng đi qua nguồn sáng', 'Đường nằm ngang', 'Đường tia tới'], 0, 'Định nghĩa pháp tuyến.'),
    Q('Bóng tối là vùng?', ['Hoàn toàn không nhận được ánh sáng từ nguồn', 'Sáng yếu', 'Có cả ánh sáng và bóng', 'Phản chiếu ánh sáng'], 0, 'Phía sau vật chắn sáng.'),
    Q('Bóng nửa tối hình thành khi?', ['Nguồn sáng có kích thước (không là điểm)', 'Nguồn sáng là điểm', 'Vật chắn rất nhỏ', 'Không có vật chắn'], 0, 'Một phần ánh sáng vẫn tới được.'),
  ]),

  M(15, 'Ảnh của vật qua gương phẳng', [
    Q('Ảnh tạo bởi gương phẳng là?', ['Ảnh ảo, đối xứng, kích thước bằng vật', 'Ảnh thật, ngược chiều', 'Ảnh ảo, lớn hơn vật', 'Ảnh thật, nhỏ hơn vật'], 0, 'Đặc điểm ảnh gương phẳng.'),
    Q('Khoảng cách từ ảnh đến gương so với vật?', ['Bằng nhau', 'Lớn hơn', 'Nhỏ hơn', 'Gấp đôi'], 0, 'Đối xứng qua gương.'),
    Q('Ảnh trong gương phẳng có thể hứng được trên màn?', ['Không (ảnh ảo)', 'Có (ảnh thật)', 'Có khi sáng', 'Tuỳ vật'], 0, 'Ảnh ảo không hứng được.'),
    Q('Khi đứng trước gương phẳng giơ tay phải, ảnh giơ?', ['Tay trái (ngược trái-phải)', 'Tay phải', 'Cả hai tay', 'Không thấy tay'], 0, 'Đặc trưng ảnh gương.'),
    Q('Để vẽ ảnh qua gương phẳng, dùng phép?', ['Đối xứng qua gương', 'Quay 90°', 'Tịnh tiến', 'Co giãn'], 0, 'Phép đối xứng trục.'),
    Q('Ứng dụng gương phẳng?', ['Soi gương, kính chiếu hậu, kính tiềm vọng', 'Hội tụ ánh sáng mặt trời', 'Khúc xạ', 'Phân tách màu'], 0, 'Phản xạ ánh sáng.'),
  ]),

  M(16, 'Từ trường — Nam châm', [
    Q('Mỗi nam châm có?', ['Hai cực: Bắc (N) và Nam (S)', 'Một cực', 'Ba cực', 'Bốn cực'], 0, 'Lưỡng cực từ.'),
    Q('Hai cực cùng tên (N-N hoặc S-S) sẽ?', ['Đẩy nhau', 'Hút nhau', 'Không tương tác', 'Tan ra'], 0, 'Cùng dấu đẩy.'),
    Q('Hai cực khác tên (N-S) sẽ?', ['Hút nhau', 'Đẩy nhau', 'Không tương tác', 'Trộn lẫn'], 0, 'Khác dấu hút.'),
    Q('Từ trường là?', ['Vùng không gian xung quanh nam châm hoặc dòng điện, có lực từ tác dụng lên kim nam châm', 'Vùng có nhiệt độ cao', 'Vùng tích điện', 'Vùng có ánh sáng'], 0, 'Định nghĩa từ trường.'),
    Q('Trái Đất có từ trường?', ['Có', 'Không', 'Chỉ ở Bắc Cực', 'Chỉ ở xích đạo'], 0, 'Từ trường Trái Đất → la bàn hoạt động.'),
    Q('Cực Bắc địa lí Trái Đất gần?', ['Cực Nam từ', 'Cực Bắc từ', 'Không có cực từ', 'Cả hai cực'], 0, 'Cực Bắc địa lí ≈ cực S từ ⇒ hút cực N kim la bàn.'),
  ]),

  M(17, 'Đường sức từ — La bàn', [
    Q('Đường sức từ ở ngoài nam châm có chiều?', ['Đi ra từ cực Bắc, đi vào cực Nam', 'Đi ra từ cực Nam', 'Hỗn loạn', 'Không có chiều'], 0, 'Quy ước.'),
    Q('Tại mỗi điểm trong từ trường, kim nam châm nhỏ đặt cân bằng chỉ hướng?', ['Tiếp tuyến đường sức từ', 'Vuông góc đường sức', 'Bất kì', 'Lên cao'], 0, 'Tiếp tuyến với đường sức.'),
    Q('Nam châm điện gồm?', ['Cuộn dây có dòng điện và lõi sắt non', 'Hai miếng sắt', 'Đồng và nhôm', 'Chỉ pin'], 0, 'Cuộn dây + lõi sắt non.'),
    Q('Cách tăng từ trường của nam châm điện?', ['Tăng cường độ dòng điện và số vòng dây', 'Giảm dòng điện', 'Bỏ lõi sắt', 'Hạ nhiệt độ tới 0'], 0, 'B ∝ NI.'),
    Q('La bàn dùng để?', ['Xác định phương hướng', 'Đo nhiệt độ', 'Đo khối lượng', 'Đo thời gian'], 0, 'Dụng cụ định hướng.'),
    Q('Kim la bàn luôn chỉ?', ['Hướng Bắc - Nam địa từ', 'Hướng Đông', 'Hướng Tây', 'Bất kì'], 0, 'Do từ trường Trái Đất.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Trong nguyên tử, hạt nhân gồm?', ['Proton và neutron', 'Electron', 'Chỉ proton', 'Chỉ neutron'], 0, 'p + n.'),
    Q('NaCl được hình thành bởi liên kết?', ['Ion', 'Cộng hoá trị', 'Kim loại', 'Hiđro'], 0, 'Na cho 1e, Cl nhận 1e.'),
    Q('Định luật bảo toàn khối lượng phát biểu rằng?', ['Tổng m chất phản ứng = tổng m chất sản phẩm', 'Khối lượng tăng', 'Khối lượng giảm', 'Khối lượng không liên quan'], 0, 'Lavoisier.'),
    Q('Tốc độ trung bình của xe đi 100 km trong 2 giờ?', ['50 km/h', '100 km/h', '200 km/h', '25 km/h'], 0, 'v = s/t = 50.'),
    Q('Âm truyền được trong?', ['Rắn, lỏng, khí', 'Chỉ khí', 'Chỉ chân không', 'Chỉ rắn'], 0, 'Cần môi trường vật chất.'),
    Q('Ảnh qua gương phẳng là?', ['Ảnh ảo, đối xứng, bằng vật', 'Ảnh thật, lớn hơn', 'Ảnh thật, ngược chiều', 'Ảnh ảo, nhỏ hơn'], 0, 'Đặc trưng gương phẳng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Dòng điện và mạch điện đơn giản', [
    Q('Dòng điện là?', ['Dòng các hạt mang điện chuyển động có hướng', 'Dòng nước trong dây', 'Dòng nhiệt', 'Dòng ánh sáng'], 0, 'Định nghĩa cơ bản.'),
    Q('Chiều quy ước dòng điện?', ['Từ cực dương qua dây dẫn đến cực âm của nguồn', 'Từ âm sang dương', 'Tuỳ ý', 'Ngẫu nhiên'], 0, 'Quy ước cổ điển.'),
    Q('Đơn vị cường độ dòng điện?', ['Ampe (A)', 'Vôn (V)', 'Ôm (Ω)', 'Oát (W)'], 0, 'A.'),
    Q('Dụng cụ đo cường độ dòng điện?', ['Ampe kế', 'Vôn kế', 'Ôm kế', 'Cân'], 0, 'Mắc nối tiếp trong mạch.'),
    Q('Đơn vị hiệu điện thế?', ['Vôn (V)', 'Ampe', 'Hertz', 'Joule'], 0, 'V.'),
    Q('Vôn kế được mắc?', ['Song song với phần mạch cần đo', 'Nối tiếp', 'Tuỳ ý', 'Trong ổ cắm'], 0, 'Song song với linh kiện.'),
  ]),

  M(20, 'Điện trở — Định luật Ôm', [
    Q('Điện trở của vật cản trở?', ['Dòng điện chạy qua', 'Ánh sáng', 'Âm thanh', 'Nhiệt độ'], 0, 'Cản trở dòng điện.'),
    Q('Đơn vị điện trở?', ['Ôm (Ω)', 'Vôn', 'Ampe', 'Watt'], 0, 'Ω = V/A.'),
    Q('Công thức định luật Ôm?', ['I = U/R', 'U = I/R', 'R = U·I', 'I = U·R'], 0, 'I = U/R.'),
    Q('Khi U tăng (R không đổi) thì I?', ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'], 0, 'I tỉ lệ thuận với U.'),
    Q('Khi R tăng (U không đổi) thì I?', ['Giảm', 'Tăng', 'Không đổi', 'Bằng 0'], 0, 'I tỉ lệ nghịch với R.'),
    Q('Mạch có U = 12V, R = 4Ω. I = ?', ['3A', '4A', '6A', '8A'], 0, 'I = 12/4 = 3.'),
  ]),

  M(21, 'Trao đổi chất ở thực vật — Quang hợp', [
    Q('Quang hợp ở thực vật xảy ra chủ yếu ở?', ['Lá', 'Rễ', 'Thân', 'Hoa'], 0, 'Tế bào chứa lục lạp ở lá.'),
    Q('Nguyên liệu của quang hợp?', ['Nước và CO₂', 'Glucose và O₂', 'Đạm và lân', 'Muối khoáng và CO₂'], 0, 'H₂O + CO₂.'),
    Q('Sản phẩm của quang hợp?', ['Glucose và O₂', 'CO₂ và H₂O', 'Tinh bột và đạm', 'Muối và H₂'], 0, 'C₆H₁₂O₆ + O₂.'),
    Q('Năng lượng cần cho quang hợp lấy từ?', ['Ánh sáng mặt trời', 'Nhiệt độ thấp', 'Đất', 'Gió'], 0, 'Quang năng → hoá năng.'),
    Q('Chất diệp lục có vai trò?', ['Hấp thụ ánh sáng để quang hợp', 'Hấp thụ nước', 'Hô hấp', 'Vận chuyển'], 0, 'Sắc tố chlorophyll.'),
    Q('Phương trình tổng quát của quang hợp?', ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', '2H₂ + O₂ → 2H₂O', 'C + O₂ → CO₂', '2H₂O → 2H₂ + O₂'], 0, 'Phương trình quang hợp.'),
  ]),

  M(22, 'Nghỉ Tết — Đọc thêm về cây cảnh ngày Tết', [
    Q('Cây mai vàng nở vào dịp Tết do?', ['Tuốt lá đúng thời điểm + thời tiết', 'Tưới nhiều', 'Phơi nắng', 'Bón hoá chất'], 0, 'Người trồng tuốt lá để kích hoa.'),
    Q('Quang hợp cần ánh sáng nên cây nên đặt?', ['Nơi có ánh sáng phù hợp', 'Bóng tối hoàn toàn', 'Trong tủ kín', 'Dưới nước'], 0, 'Có ánh sáng để quang hợp.'),
    Q('Bánh chưng có nguyên liệu chính?', ['Gạo nếp, đậu xanh, thịt lợn, lá dong', 'Bột mì, đường, sữa', 'Gạo tẻ, muối', 'Khoai, nước'], 0, 'Bánh chưng truyền thống.'),
    Q('Nước trong cây vận chuyển theo?', ['Mạch gỗ (xylem)', 'Mạch rây (phloem)', 'Khoang tế bào', 'Không vận chuyển'], 0, 'Xylem dẫn nước.'),
    Q('Sản phẩm của hô hấp là?', ['CO₂ và H₂O', 'O₂ và glucose', 'Tinh bột', 'Đạm'], 0, 'Hô hấp ngược quang hợp.'),
    Q('Quang hợp xảy ra khi nào?', ['Khi có ánh sáng', 'Khi tối', 'Khi lạnh', 'Khi khô'], 0, 'Cần quang năng.'),
  ]),

  M(23, 'Hô hấp tế bào ở thực vật', [
    Q('Hô hấp tế bào là?', ['Quá trình phân giải chất hữu cơ giải phóng năng lượng', 'Tổng hợp chất hữu cơ', 'Vận chuyển nước', 'Hấp thụ ánh sáng'], 0, 'Ngược với quang hợp.'),
    Q('Nguyên liệu của hô hấp tế bào?', ['Glucose và O₂', 'CO₂ và H₂O', 'Đạm', 'Muối khoáng'], 0, 'C₆H₁₂O₆ + O₂.'),
    Q('Sản phẩm của hô hấp tế bào?', ['CO₂, H₂O và năng lượng (ATP)', 'Glucose và O₂', 'Tinh bột', 'Đạm và lân'], 0, 'Ngược quang hợp.'),
    Q('Hô hấp xảy ra ở?', ['Mọi tế bào sống', 'Chỉ lá', 'Chỉ rễ', 'Chỉ hoa'], 0, 'Mọi tế bào đều cần năng lượng.'),
    Q('Quang hợp và hô hấp có quan hệ?', ['Ngược chiều, bổ sung nhau', 'Cùng chiều', 'Không liên quan', 'Loại trừ nhau hoàn toàn'], 0, 'Chu trình carbon - oxy.'),
    Q('Phương trình hô hấp tế bào?', ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + năng lượng', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', '2H₂O → 2H₂ + O₂', 'C + O₂ → CO₂'], 0, 'Tổng quát.'),
  ]),

  M(24, 'Trao đổi nước và muối khoáng ở thực vật', [
    Q('Rễ cây hấp thụ nước và muối khoáng chủ yếu qua?', ['Lông hút', 'Vỏ cây', 'Lá', 'Hoa'], 0, 'Tế bào lông hút.'),
    Q('Mạch gỗ (xylem) vận chuyển?', ['Nước và muối khoáng từ rễ lên lá', 'Chất hữu cơ từ lá đi nuôi cây', 'Khí oxy', 'Năng lượng'], 0, 'Vận chuyển một chiều: lên.'),
    Q('Mạch rây (phloem) vận chuyển?', ['Chất hữu cơ từ lá đi nuôi các bộ phận', 'Nước từ rễ', 'Muối khoáng', 'CO₂'], 0, 'Hai chiều, chủ yếu xuống.'),
    Q('Sự thoát hơi nước qua?', ['Khí khổng ở lá', 'Rễ', 'Vỏ thân', 'Hoa'], 0, 'Khí khổng (lỗ trên biểu bì lá).'),
    Q('Vai trò của thoát hơi nước?', ['Hút nước lên, làm mát cây, trao đổi khí', 'Làm cây héo', 'Không có vai trò', 'Giúp ra hoa'], 0, 'Quan trọng với sinh lí cây.'),
    Q('Yếu tố ảnh hưởng đến thoát hơi nước?', ['Ánh sáng, nhiệt độ, độ ẩm, gió', 'Màu lá', 'Loại đất', 'Giờ tưới'], 0, 'Điều kiện môi trường.'),
  ]),

  M(25, 'Trao đổi chất và năng lượng ở động vật — Hệ tiêu hoá', [
    Q('Hệ tiêu hoá ở người gồm?', ['Ống tiêu hoá và các tuyến tiêu hoá', 'Tim mạch', 'Phổi', 'Thận'], 0, 'Ống + tuyến.'),
    Q('Ống tiêu hoá gồm thứ tự?', ['Miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn', 'Dạ dày → miệng → ruột', 'Miệng → ruột → dạ dày', 'Ruột → dạ dày → miệng'], 0, 'Thứ tự cơ bản.'),
    Q('Tiêu hoá hoá học chủ yếu xảy ra ở?', ['Ruột non', 'Miệng', 'Hậu môn', 'Thực quản'], 0, 'Ruột non có nhiều enzyme.'),
    Q('Hấp thụ chất dinh dưỡng chủ yếu ở?', ['Ruột non', 'Dạ dày', 'Ruột già', 'Miệng'], 0, 'Lông ruột hấp thụ.'),
    Q('Tuyến tiêu hoá lớn nhất là?', ['Gan', 'Tụy', 'Tuyến nước bọt', 'Tuyến dạ dày'], 0, 'Gan tiết mật.'),
    Q('Vai trò của ruột già?', ['Hấp thụ nước và muối khoáng, tạo phân', 'Tiêu hoá tinh bột', 'Hấp thụ glucose', 'Tiết enzyme'], 0, 'Chức năng cuối ống tiêu hoá.'),
  ]),

  M(26, 'Hô hấp ở động vật', [
    Q('Hệ hô hấp ở người gồm?', ['Đường dẫn khí và phổi', 'Dạ dày và ruột', 'Tim và mạch máu', 'Thận và bàng quang'], 0, 'Đường khí + phổi.'),
    Q('Đường dẫn khí gồm?', ['Mũi → họng → thanh quản → khí quản → phế quản', 'Miệng → ruột', 'Da → cơ', 'Tim → phổi'], 0, 'Thứ tự đường khí.'),
    Q('Trao đổi khí ở phổi diễn ra ở?', ['Phế nang', 'Khí quản', 'Phế quản', 'Họng'], 0, 'Phế nang nơi O₂ và CO₂ trao đổi.'),
    Q('Trong quá trình hít vào, cơ hoành?', ['Hạ xuống', 'Nâng lên', 'Không thay đổi', 'Bị xoắn'], 0, 'Mở rộng thể tích lồng ngực.'),
    Q('Khí thải ra khi thở chứa nhiều?', ['CO₂', 'O₂', 'N₂', 'Hơi nước duy nhất'], 0, 'Sản phẩm hô hấp.'),
    Q('Khí hít vào chứa nhiều?', ['O₂ (~21%)', 'CO₂', 'CO', 'Khí hiếm'], 0, 'Không khí ~21% O₂.'),
  ]),

  M(27, 'Tuần hoàn ở động vật (giới thiệu)', [
    Q('Hệ tuần hoàn ở người gồm?', ['Tim và hệ mạch máu', 'Dạ dày', 'Phổi', 'Thận'], 0, 'Tim + mạch.'),
    Q('Máu vận chuyển từ tim đi qua?', ['Động mạch', 'Tĩnh mạch', 'Mao mạch chỉ', 'Bạch huyết'], 0, 'Động mạch xa tim.'),
    Q('Máu về tim qua?', ['Tĩnh mạch', 'Động mạch', 'Mao mạch', 'Bạch huyết'], 0, 'Tĩnh mạch về tim.'),
    Q('Trao đổi chất giữa máu và mô diễn ra ở?', ['Mao mạch', 'Động mạch lớn', 'Tĩnh mạch lớn', 'Tim'], 0, 'Mao mạch nhỏ, thành mỏng.'),
    Q('Tim người có bao nhiêu ngăn?', ['4 ngăn', '2 ngăn', '3 ngăn', '5 ngăn'], 0, '2 tâm nhĩ + 2 tâm thất.'),
    Q('Vòng tuần hoàn nhỏ đi qua?', ['Phổi', 'Toàn thân', 'Gan', 'Thận'], 0, 'Tim phải → phổi → tim trái.'),
  ]),

  M(28, 'Cảm ứng ở thực vật', [
    Q('Cảm ứng ở sinh vật là?', ['Phản ứng của sinh vật trước kích thích từ môi trường', 'Hô hấp', 'Quang hợp', 'Sinh sản'], 0, 'Phản ứng thích nghi.'),
    Q('Hướng sáng (phototropism) là?', ['Sinh trưởng hướng về phía ánh sáng', 'Tránh ánh sáng', 'Ngẫu nhiên', 'Không phản ứng'], 0, 'Ngọn cây cong về phía sáng.'),
    Q('Hướng đất (gravitropism) ở rễ?', ['Rễ mọc xuống đất', 'Rễ mọc lên trời', 'Ngang', 'Không xác định'], 0, 'Phản ứng dương với trọng lực.'),
    Q('Cây nhạy cảm với chạm như cây trinh nữ thuộc?', ['Cảm ứng nhanh', 'Cảm ứng chậm', 'Không cảm ứng', 'Cảm ứng nhiệt'], 0, 'Lá cụp lại khi chạm.'),
    Q('Hướng tiếp xúc giúp cây?', ['Leo, bám vào giá thể', 'Tránh ánh sáng', 'Rụng lá', 'Ra hoa'], 0, 'Cây leo, dây cuốn.'),
    Q('Vai trò của cảm ứng?', ['Giúp sinh vật thích nghi với môi trường', 'Tăng khối lượng', 'Đổi màu', 'Phát quang'], 0, 'Tồn tại và phát triển.'),
  ]),

  M(29, 'Cảm ứng ở động vật (giới thiệu)', [
    Q('Hệ thần kinh ở động vật bậc cao gồm?', ['Trung ương (não, tủy sống) và ngoại biên', 'Chỉ não', 'Chỉ tủy sống', 'Chỉ dây thần kinh'], 0, 'Cấu trúc tổng quát.'),
    Q('Phản xạ là?', ['Phản ứng của cơ thể qua hệ thần kinh', 'Hành vi học được', 'Phản ứng hoá học', 'Hô hấp'], 0, 'Cơ chế thần kinh.'),
    Q('Phản xạ không điều kiện là?', ['Phản xạ bẩm sinh, di truyền', 'Học được sau sinh', 'Tự nguyện', 'Tự ý thức'], 0, 'Có sẵn từ sinh.'),
    Q('Phản xạ có điều kiện là?', ['Hình thành trong đời sống nhờ học tập', 'Bẩm sinh', 'Di truyền', 'Tự nhiên'], 0, 'Pavlov với chuông và chó.'),
    Q('Cung phản xạ gồm?', ['Cơ quan thụ cảm → dây thần kinh hướng tâm → trung ương → ly tâm → cơ quan đáp ứng', 'Chỉ não bộ', 'Chỉ tủy sống', 'Chỉ cảm giác'], 0, 'Đường đi của xung thần kinh.'),
    Q('Vai trò của phản xạ?', ['Giúp cơ thể thích nghi nhanh với môi trường', 'Tăng cân', 'Đổi màu da', 'Tự tổng hợp glucose'], 0, 'Phản ứng nhanh.'),
  ]),

  M(30, 'Sinh trưởng và phát triển ở thực vật', [
    Q('Sinh trưởng là?', ['Sự tăng kích thước và khối lượng của cơ thể', 'Sự biến đổi chất', 'Sự sinh sản', 'Sự hô hấp'], 0, 'Tăng về lượng.'),
    Q('Phát triển là?', ['Sự biến đổi hình thái và chức năng', 'Tăng khối lượng', 'Hấp thụ nước', 'Quang hợp'], 0, 'Biến đổi về chất.'),
    Q('Mô phân sinh ở thực vật giúp?', ['Tăng trưởng (chiều cao, chiều dày)', 'Quang hợp', 'Hô hấp', 'Vận chuyển'], 0, 'Tế bào liên tục phân chia.'),
    Q('Mô phân sinh đỉnh ở?', ['Ngọn thân và đầu rễ', 'Lá', 'Hoa', 'Quả'], 0, 'Giúp cây dài ra.'),
    Q('Yếu tố ảnh hưởng đến sinh trưởng, phát triển ở thực vật?', ['Ánh sáng, nhiệt độ, nước, dinh dưỡng', 'Màu sắc đất', 'Tuổi cây mẹ', 'Loại chậu'], 0, 'Các yếu tố môi trường.'),
    Q('Hooc-môn thực vật ảnh hưởng đến?', ['Sự sinh trưởng và phát triển', 'Màu hoa duy nhất', 'Mùi vị', 'Trọng lượng quả duy nhất'], 0, 'Auxin, gibberellin, cytokinin…'),
  ]),

  M(31, 'Sinh sản ở thực vật', [
    Q('Sinh sản ở thực vật có?', ['Sinh sản vô tính và hữu tính', 'Chỉ vô tính', 'Chỉ hữu tính', 'Không sinh sản'], 0, 'Hai hình thức.'),
    Q('Sinh sản vô tính ở thực vật KHÔNG có sự tham gia của?', ['Tế bào sinh dục', 'Tế bào sinh dưỡng', 'Mô phân sinh', 'Cơ quan dinh dưỡng'], 0, 'Không cần giao tử.'),
    Q('Giâm cành là hình thức?', ['Sinh sản vô tính', 'Sinh sản hữu tính', 'Hô hấp', 'Quang hợp'], 0, 'Từ cành mọc thành cây mới.'),
    Q('Sinh sản hữu tính ở thực vật có hoa gồm?', ['Thụ phấn → thụ tinh → tạo hạt và quả', 'Chỉ trồng cây', 'Chỉ giâm', 'Chỉ chiết'], 0, 'Quá trình sinh sản hữu tính.'),
    Q('Thụ phấn là?', ['Hạt phấn chuyển tới đầu nhuỵ', 'Thụ tinh', 'Nảy mầm', 'Hô hấp'], 0, 'Pollination.'),
    Q('Quả được hình thành từ?', ['Bầu nhuỵ phát triển sau thụ tinh', 'Hạt phấn', 'Lá đài', 'Rễ'], 0, 'Bầu nhuỵ → quả.'),
  ]),

  M(32, 'Sinh sản ở động vật (giới thiệu)', [
    Q('Sinh sản vô tính ở động vật thường gặp ở?', ['Động vật bậc thấp (thuỷ tức, sao biển…)', 'Người', 'Chó', 'Mèo'], 0, 'Nảy chồi, phân đôi…'),
    Q('Sinh sản hữu tính ở động vật cần?', ['Giao tử đực và giao tử cái kết hợp', 'Chỉ một cá thể', 'Không cần giao tử', 'Nảy chồi'], 0, 'Tinh trùng + trứng → hợp tử.'),
    Q('Đẻ trứng gặp ở?', ['Chim, bò sát, lưỡng cư, cá', 'Thú', 'Người', 'Chỉ động vật cạn'], 0, 'Đẻ trứng phổ biến.'),
    Q('Đẻ con gặp ở?', ['Thú (gồm cả người)', 'Cá', 'Chim', 'Bò sát'], 0, 'Mang thai trong cơ thể mẹ.'),
    Q('Ưu điểm sinh sản hữu tính?', ['Đa dạng di truyền, thích nghi tốt', 'Nhanh, nhiều', 'Không cần bạn tình', 'Đời con giống hệt mẹ'], 0, 'Tổ hợp gen tăng đa dạng.'),
    Q('Nhược điểm sinh sản vô tính?', ['Đời con giống hệt mẹ, ít đa dạng', 'Tốc độ chậm', 'Cần hai cá thể', 'Tốn năng lượng'], 0, 'Thiếu đa dạng di truyền.'),
  ]),

  M(33, 'Cơ thể sinh vật là một thể thống nhất', [
    Q('Các hệ cơ quan trong cơ thể có mối quan hệ?', ['Phối hợp chặt chẽ, thống nhất', 'Hoạt động độc lập', 'Cạnh tranh nhau', 'Không liên quan'], 0, 'Phối hợp đảm bảo sự sống.'),
    Q('Hệ tuần hoàn vận chuyển?', ['Chất dinh dưỡng, O₂, CO₂, hooc-môn…', 'Chỉ máu', 'Chỉ O₂', 'Chỉ CO₂'], 0, 'Đa chức năng.'),
    Q('Hệ thần kinh và hệ nội tiết phối hợp để?', ['Điều khiển và điều hoà hoạt động cơ thể', 'Chỉ tiêu hoá', 'Chỉ thải', 'Chỉ vận động'], 0, 'Hai hệ điều hoà.'),
    Q('Nếu một hệ cơ quan bị rối loạn, các hệ khác?', ['Bị ảnh hưởng', 'Hoạt động bình thường', 'Tốt hơn', 'Không quan tâm'], 0, 'Tính thống nhất.'),
    Q('Cơ thể sinh vật là?', ['Một hệ thống mở, thường xuyên trao đổi chất và năng lượng với môi trường', 'Hệ kín', 'Không liên hệ môi trường', 'Hệ tĩnh'], 0, 'Hệ thống mở.'),
    Q('Tự điều hoà của cơ thể giúp?', ['Duy trì nội môi ổn định', 'Tăng cân', 'Tăng tuổi thọ vô hạn', 'Chống mọi bệnh'], 0, 'Homeostasis.'),
  ]),

  M(34, 'Ôn tập Hoá — Vật lí HK2', [
    Q('Định luật Ôm: I = ?', ['U/R', 'U·R', 'R/U', 'U + R'], 0, 'I = U/R.'),
    Q('U = 6V, R = 2Ω. I = ?', ['3A', '6A', '12A', '2A'], 0, '6/2 = 3.'),
    Q('Tốc độ là gì?', ['Đại lượng đo mức độ nhanh/chậm', 'Khối lượng', 'Lực', 'Năng lượng'], 0, 'v = s/t.'),
    Q('Liên kết trong H₂O là?', ['Cộng hoá trị', 'Ion', 'Kim loại', 'Hiđro'], 0, 'Phi kim + phi kim.'),
    Q('Hai cực cùng tên của nam châm sẽ?', ['Đẩy nhau', 'Hút nhau', 'Không tương tác', 'Tan'], 0, 'Cùng dấu → đẩy.'),
    Q('Phương trình tổng quát quang hợp?', ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', '6O₂ + glucose → CO₂ + H₂O', 'CO₂ → C + O', '2H₂ + O₂ → 2H₂O'], 0, 'Quang hợp.'),
  ]),

  M(35, 'Kiểm tra học kì II — Tổng hợp cả năm', [
    Q('Cấu tạo nguyên tử gồm?', ['Hạt nhân và lớp vỏ electron', 'Chỉ proton', 'Chỉ neutron', 'Chỉ electron'], 0, 'Cơ bản.'),
    Q('Tốc độ trung bình xe đi 90 km trong 1,5 giờ?', ['60 km/h', '90 km/h', '45 km/h', '135 km/h'], 0, 'v = 90/1,5 = 60.'),
    Q('Âm KHÔNG truyền qua môi trường nào?', ['Chân không', 'Rắn', 'Lỏng', 'Khí'], 0, 'Chân không không có vật chất.'),
    Q('Định luật phản xạ ánh sáng: góc tới ?', ['Bằng góc phản xạ', 'Gấp đôi', 'Bằng nửa', 'Vuông góc'], 0, 'i = i\'.'),
    Q('Lá cây thực hiện quá trình nào dưới ánh sáng?', ['Quang hợp', 'Hô hấp duy nhất', 'Thoát hơi nước duy nhất', 'Vận chuyển'], 0, 'Khi có ánh sáng.'),
    Q('Sinh sản hữu tính có ưu điểm?', ['Đa dạng di truyền', 'Nhanh và nhiều', 'Không cần bạn tình', 'Đời con giống hệt mẹ'], 0, 'Đa dạng → thích nghi.'),
  ]),
];

export const S7KHTN_SCENARIOS = indexBy(S7KHTN_WEEKS);
