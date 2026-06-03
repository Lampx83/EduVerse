// ============================================================
// Lớp 10 · SINH HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Sinh 10: Sinh học tế bào — Vi sinh vật & Virus).
// ID prefix: "H10SINH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10SINH', 'sinh-hoc', n, title, qs, opts);

export const H10SINH_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Giới thiệu chương trình Sinh học 10', [
    Q('Sinh học là khoa học nghiên cứu về?', ['Sự sống và sinh vật', 'Khoáng sản', 'Hành tinh', 'Vật chất vô cơ'], 0, 'Sinh học (Biology) nghiên cứu sự sống và các sinh vật.'),
    Q('Cấp tổ chức sống nhỏ nhất có đầy đủ đặc trưng sự sống là?', ['Phân tử', 'Cơ quan', 'Mô liên kết', 'Tế bào'], 3, 'Tế bào là đơn vị cấu trúc và chức năng cơ bản của sự sống.'),
    Q('Đặc trưng nào KHÔNG phải của thế giới sống?', ['Phản ứng với kích thích', 'Sinh trưởng - sinh sản', 'Nóng chảy ở nhiệt độ cao', 'Trao đổi chất'], 2, 'Nóng chảy là tính chất vật lý của vật chất vô sinh.'),
    Q('Hệ thống phân loại 5 giới KHÔNG bao gồm giới nào?', ['Nguyên sinh', 'Khởi sinh', 'Giới Nấm men và nấm mốc', 'Khoáng vật'], 3, 'Khoáng vật không thuộc giới sinh vật.'),
    Q('Phương pháp quan sát trong sinh học cần?', ['Bỏ qua chi tiết', 'Dụng cụ phù hợp + ghi chép trung thực', 'Đoán mò', 'Sao chép'], 1, 'Quan sát khoa học yêu cầu dụng cụ và ghi chép chính xác.'),
    Q('An toàn phòng thí nghiệm sinh học cần?', ['Vứt mẫu bừa bãi', 'Đeo găng + kính bảo hộ', 'Không cần gì', 'Ăn uống trong phòng'], 1, 'Phải mang bảo hộ và xử lý mẫu đúng cách.'),
  ]),

  M(2, 'Các cấp tổ chức của thế giới sống', [
    Q('Thứ tự đúng từ nhỏ đến lớn các cấp tổ chức sống?', ['Mô → Tế bào → Cơ thể', 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', 'Cơ quan → Tế bào → Mô', 'Cơ thể → Mô → Tế bào'], 1, 'Cấp sống đi từ tế bào → mô → cơ quan → hệ cơ quan → cơ thể → quần thể → quần xã → hệ sinh thái → sinh quyển.'),
    Q('Cấp tổ chức cao nhất của sự sống là?', ['Cơ thể', 'Quần thể', 'Quần xã', 'Sinh quyển'], 3, 'Sinh quyển bao gồm toàn bộ sinh vật trên Trái Đất.'),
    Q('Quần thể là?', ['Tập hợp cá thể khác loài', 'Một tế bào', 'Tập hợp cá thể cùng loài, cùng khu vực', 'Một cá thể'], 2, 'Quần thể là tập hợp cá thể cùng loài, cùng không gian sống.'),
    Q('Quần xã khác quần thể ở chỗ?', ['Chỉ một loài', 'Gồm nhiều loài cùng chung sống', 'Là vô cơ', 'Không có sinh vật'], 1, 'Quần xã có nhiều quần thể của các loài khác nhau cùng chung sống.'),
    Q('Hệ sinh thái bao gồm?', ['Quần xã + môi trường vô sinh', 'Chỉ thực vật', 'Chỉ vô cơ', 'Chỉ sinh vật'], 0, 'Hệ sinh thái = quần xã sinh vật + sinh cảnh (yếu tố vô sinh).'),
    Q('Đặc tính nổi trội của một cấp tổ chức sống thể hiện rõ nhất khi?', ['Khi tách rời từng phân tử riêng lẻ', 'Tương tác với các bộ phận khác', 'Tách rời', 'Bất động'], 1, 'Đặc tính nổi trội xuất hiện khi các thành phần tương tác với nhau.'),
  ]),

  M(3, 'Thành phần hoá học của tế bào — Nước', [
    Q('Nguyên tố nào chiếm tỉ lệ lớn nhất trong cơ thể sống?', ['C (Cacbon) — bộ khung hữu cơ', 'O', 'H (Hydro) — có trong nước và chất hữu cơ', 'N (Nitơ) — thành phần của protein và ADN'], 1, 'Oxy ~65% khối lượng cơ thể do nước H₂O chiếm đa số.'),
    Q('Nhóm 4 nguyên tố chủ yếu của sự sống là?', ['Na, K, Ca, Mg', 'Fe, Cu, Zn, Mn', 'C, H, O, N', 'P, S, Cl, Si'], 2, 'C, H, O, N là 4 nguyên tố chính cấu tạo hợp chất hữu cơ của tế bào.'),
    Q('Nước chiếm bao nhiêu % khối lượng cơ thể người trưởng thành?', ['~10% — chỉ chiếm lượng nhỏ', '~95% — gần như toàn bộ cơ thể', '~60-70%', '~30% — chiếm khoảng một phần ba'], 2, 'Nước chiếm khoảng 60-70% khối lượng cơ thể người trưởng thành.'),
    Q('Liên kết giữa H và O trong phân tử nước là?', ['Kim loại', 'Cộng hoá trị có cực', 'Liên kết ion giữa H⁺ và O²⁻', 'Liên kết hydro giữa nguyên tử H và O'], 1, 'O - H là liên kết cộng hoá trị có cực, làm phân tử nước phân cực.'),
    Q('Đặc tính phân cực của nước giúp?', ['Hoà tan nhiều chất', 'Đông cứng', 'Bốc cháy', 'Phát quang'], 0, 'Nước phân cực nên là dung môi tốt cho nhiều chất phân cực và ion.'),
    Q('Vai trò chính của nước đối với tế bào?', ['Không cần', 'Chỉ tạo màu', 'Chỉ làm đẹp', 'Dung môi + tham gia phản ứng + điều hoà nhiệt'], 3, 'Nước là dung môi, tham gia phản ứng hoá sinh, điều hoà thân nhiệt.'),
  ]),

  M(4, 'Cacbohydrat và Lipid', [
    Q('Cacbohydrat đơn vị nhỏ nhất là?', ['Đường đôi', 'Đường đơn (monosaccharide)', 'Tinh bột', 'Polysaccharide'], 1, 'Monosaccharide như glucose, fructose là đơn phân của cacbohydrat.'),
    Q('Glucose có công thức?', ['C₁₂H₂₂O₁₁', 'C₅H₁₀O₅ (đường 5C pentose)', 'C₆H₁₂O₆', 'C₁₂H₂₄O₁₂ (đường đôi)'], 2, 'Glucose: C₆H₁₂O₆ — đường đơn 6 cacbon.'),
    Q('Tinh bột và glycogen là?', ['Monosaccharide', 'Lipid dự trữ năng lượng dưới da', 'Protein', 'Polysaccharide dự trữ'], 3, 'Tinh bột (thực vật) và glycogen (động vật) là polysaccharide dự trữ năng lượng.'),
    Q('Lipid khác cacbohydrat ở điểm?', ['Hoà tan trong nước', 'Chứa N', 'Chứa P', 'Kỵ nước'], 3, 'Lipid kỵ nước (không tan trong nước), tan trong dung môi hữu cơ.'),
    Q('Photpholipid là thành phần chính của?', ['Màng sinh chất', 'Nhân con (nucleolus) trong nhân', 'Ribosome', 'Thành tế bào'], 0, 'Photpholipid tạo lớp kép cấu trúc cơ bản của màng sinh chất.'),
    Q('Vai trò của lipid trong cơ thể?', ['Chỉ phản ứng', 'Chỉ tạo mùi', 'Dự trữ năng lượng + cấu trúc màng + hormone', 'Chỉ tạo màu'], 2, 'Lipid là kho năng lượng, thành phần màng và một số hormone (steroid).'),
  ]),

  M(5, 'Protein', [
    Q('Đơn phân của protein là?', ['Axit amin', 'Nucleotide', 'Glycerol', 'Glucose'], 0, 'Protein cấu tạo từ 20 loại axit amin liên kết peptide.'),
    Q('Liên kết giữa các axit amin trong protein là?', ['Kim loại', 'Peptide', 'Liên kết ion giữa nhóm -COO⁻ và -NH₃⁺', 'Liên kết hydro giữa các nhóm bên'], 1, 'Liên kết peptide (-CO-NH-) nối các axit amin thành chuỗi polypeptide.'),
    Q('Cấu trúc bậc 1 của protein là?', ['Trình tự axit amin', 'Xoắn α', 'Khối cầu', 'Gấp nếp β giữa các đoạn polypeptide'], 0, 'Bậc 1 là trình tự các axit amin trong chuỗi polypeptide.'),
    Q('Cấu trúc bậc 2 thường gặp gồm?', ['Sợi đôi', 'Xoắn α và phiến gấp β', 'Khối cầu', 'Chuỗi thẳng'], 1, 'Bậc 2: xoắn alpha và phiến beta nhờ liên kết hidro.'),
    Q('Khi đun nóng, protein bị?', ['Đông đá', 'Biến tính', 'Phát quang', 'Tăng khối lượng'], 1, 'Nhiệt độ cao phá vỡ liên kết yếu khiến protein biến tính, mất chức năng.'),
    Q('Chức năng chính của protein KHÔNG bao gồm?', ['Lưu trữ thông tin di truyền', 'Cấu trúc', 'Xúc tác (enzyme)', 'Vận chuyển'], 0, 'Lưu trữ thông tin di truyền là nhiệm vụ của ADN, không phải protein.'),
  ]),

  M(6, 'Axit nucleic — ADN và ARN', [
    Q('Đơn phân của axit nucleic là?', ['Glucose', 'Nucleotide', 'Axit amin', 'Phospholipid của màng tế bào'], 1, 'Nucleotide gồm bazơ nitơ + đường 5C + nhóm phosphate.'),
    Q('ADN có cấu trúc?', ['Mạch đơn', 'Mạch kép xoắn', 'Khối cầu', 'Vòng tròn'], 1, 'ADN là chuỗi xoắn kép (double helix) theo mô hình Watson-Crick.'),
    Q('Bazơ nitơ trong ADN gồm?', ['A, T, G, U', 'A, U, G, T', 'A, U, G, X', 'A, T, G, X'], 3, 'ADN: A-T-G-X (X còn gọi là C - cytosine).'),
    Q('ARN khác ADN ở chỗ?', ['Không có bazơ', 'Mạch đơn, chứa U thay T', 'Chứa T', 'Mạch kép'], 1, 'ARN là chuỗi đơn, dùng Uracil (U) thay cho Thymine (T).'),
    Q('Nguyên tắc bổ sung trong ADN?', ['A - A, T - T', 'A - G, T - X', 'A - X, T - G', 'A - T, G - X'], 3, 'A bắt cặp T (2 liên kết H), G bắt cặp X (3 liên kết H).'),
    Q('mARN có vai trò?', ['Chống đông', 'Truyền thông tin di truyền từ ADN ra ribosome', 'Cấu trúc', 'Dự trữ'], 1, 'mARN sao chép thông tin từ ADN, mang ra ribosome để tổng hợp protein.'),
  ]),

  M(7, 'Tế bào nhân sơ', [
    Q('Tế bào nhân sơ điển hình là?', ['Tế bào động vật', 'Nấm men', 'Vi khuẩn', 'Tế bào thực vật'], 2, 'Vi khuẩn (bacteria) là sinh vật có tế bào nhân sơ (prokaryote).'),
    Q('Đặc điểm nào ĐÚNG với tế bào nhân sơ?', ['Có lục lạp', 'Chưa có nhân hoàn chỉnh', 'Có nhân kép', 'Có ti thể'], 1, 'Tế bào nhân sơ chưa có màng nhân; ADN nằm trong vùng nhân.'),
    Q('Tế bào nhân sơ KHÔNG có cấu trúc nào?', ['Ribosome', 'Tế bào chất', 'Bào quan có màng', 'Màng sinh chất'], 2, 'Không có ti thể, lục lạp, bộ Golgi, lưới nội chất.'),
    Q('Thành tế bào vi khuẩn chủ yếu cấu tạo từ?', ['Lipid kép như màng sinh chất', 'Kitin như vỏ ngoài côn trùng', 'Peptidoglycan', 'Cellulose'], 2, 'Thành vi khuẩn gồm peptidoglycan (murein).'),
    Q('Roi (flagellum) ở vi khuẩn dùng để?', ['Sinh sản', 'Tiêu hoá', 'Tổng hợp protein', 'Di chuyển'], 3, 'Roi giúp vi khuẩn vận động trong môi trường lỏng.'),
    Q('Kích thước trung bình tế bào nhân sơ?', ['1 mm', '1-5 μm', '1 cm', '100 μm'], 1, 'Tế bào nhân sơ thường 1-5 μm, nhỏ hơn nhiều so với nhân thực.'),
  ]),

  M(8, 'Tế bào nhân thực — Tổng quan', [
    Q('Tế bào nhân thực có?', ['Nhân hoàn chỉnh có màng', 'Không có màng', 'Chỉ ribosome', 'Vùng nhân'], 0, 'Tế bào nhân thực có nhân được bao bọc bởi màng nhân (kép).'),
    Q('Sinh vật nào sau đây KHÔNG phải nhân thực?', ['Cây lúa', 'Nấm men', 'Vi khuẩn lao', 'Người trưởng thành'], 2, 'Vi khuẩn (Mycobacterium tuberculosis) là nhân sơ.'),
    Q('Tế bào thực vật khác động vật ở chỗ có?', ['Thành cellulose, lục lạp, không bào lớn', 'Roi và lông bơi để di chuyển', 'Tinh bột bên ngoài', 'Lớp mỡ dự trữ dưới màng tế bào'], 0, 'Tế bào thực vật có thành cellulose, lục lạp và không bào trung tâm lớn.'),
    Q('Bào quan nào tổng hợp protein?', ['Ti thể', 'Ribosome', 'Lục lạp', 'Nhân con'], 1, 'Ribosome là nơi dịch mã - tổng hợp protein.'),
    Q('Bào quan có hệ thống màng đôi gồm?', ['Ti thể và lục lạp', 'Lysosome', 'Bộ Golgi', 'Ribosome'], 0, 'Ti thể và lục lạp đều có màng kép (giả thuyết nội cộng sinh).'),
    Q('Kích thước tế bào nhân thực thường?', ['1 cm', '0.1 μm', '10-100 μm', '1 mm'], 2, 'Tế bào nhân thực thường lớn hơn nhân sơ, khoảng 10-100 μm.'),
  ]),

  M(9, 'Nhân tế bào và Ribosome', [
    Q('Nhân tế bào chứa?', ['Chỉ ARN', 'ADN', 'Chỉ protein', 'Chỉ chứa lipid và carbohydrate'], 1, 'Nhân chứa phần lớn ADN của tế bào, quyết định thông tin di truyền.'),
    Q('Màng nhân là?', ['Màng đơn kín', 'Không có màng', '3 lớp', 'Màng kép có lỗ'], 3, 'Màng nhân là màng kép, có các lỗ nhân cho vật chất qua lại.'),
    Q('Nhân con (nucleolus) là nơi?', ['Phân giải', 'Tổng hợp rARN và ribosome', 'Hô hấp', 'Quang hợp'], 1, 'Nhân con tổng hợp rARN và lắp ráp tiểu đơn vị ribosome.'),
    Q('Chất nhiễm sắc (chromatin) gồm?', ['Lipid và phospholipid màng nhân', 'Chỉ ADN', 'ADN + protein histone', 'Chỉ ARN'], 2, 'Chromatin = ADN + protein histone, đóng xoắn thành nhiễm sắc thể khi phân bào.'),
    Q('Ribosome KHÔNG có ở?', ['Tế bào động vật', 'Hồng cầu trưởng thành (người)', 'Vi khuẩn', 'Tế bào thực vật'], 1, 'Hồng cầu trưởng thành của người mất nhân và ribosome.'),
    Q('Ribosome gồm 2 tiểu đơn vị cấu tạo từ?', ['rARN và protein', 'ADN và protein histone', 'Đường ribose và nhóm phosphate', 'Phospholipid kép và cholesterol'], 0, 'Ribosome cấu tạo từ rARN và protein, hợp thành 2 tiểu đơn vị (lớn và bé).'),
  ]),

  M(10, 'Ti thể và Lục lạp', [
    Q('Ti thể được gọi là?', ['Nhà máy điện của tế bào', 'Kho lưu trữ', 'Cơ quan vận động', 'Bộ não'], 0, 'Ti thể sản xuất ATP — năng lượng chính của tế bào.'),
    Q('Ti thể có cấu trúc?', ['Vô định hình', 'Màng kép + chất nền + crista', 'Màng đơn', 'Không có màng'], 1, 'Ti thể có màng ngoài trơn, màng trong gấp nếp tạo crista, chất nền matrix.'),
    Q('Lục lạp có ở?', ['Tế bào động vật', 'Nấm men và nấm mốc', 'Vi khuẩn', 'Tế bào thực vật và tảo'], 3, 'Lục lạp chỉ có ở thực vật và một số sinh vật quang hợp.'),
    Q('Sắc tố chính trong lục lạp là?', ['Carotene', 'Hemoglobin', 'Diệp lục (chlorophyll)', 'Melanin'], 2, 'Diệp lục hấp thu ánh sáng cho quang hợp.'),
    Q('Quá trình quang hợp diễn ra tại?', ['Ribosome', 'Ti thể', 'Nhân tế bào (chứa ADN điều khiển)', 'Lục lạp'], 3, 'Quang hợp diễn ra trên màng thylakoid và trong stroma của lục lạp.'),
    Q('Giả thuyết nội cộng sinh giải thích?', ['Ti thể và lục lạp xuất phát từ vi khuẩn nguyên thuỷ', 'Sinh sản vô tính', 'Tế bào tự sinh', 'Không có ý nghĩa'], 0, 'Giả thuyết Margulis: ti thể, lục lạp vốn là vi khuẩn được tế bào tổ tiên "nuốt" và cộng sinh.'),
  ]),

  M(11, 'Lưới nội chất và Bộ Golgi', [
    Q('Lưới nội chất hạt khác lưới nội chất trơn ở chỗ?', ['Không có màng', 'Có sắc tố', 'Có ribosome bám', 'Có ADN'], 2, 'Lưới nội chất hạt có ribosome bám trên màng — tổng hợp protein.'),
    Q('Lưới nội chất trơn có chức năng?', ['Quang hợp', 'Phân giải', 'Tổng hợp protein', 'Tổng hợp lipid + khử độc'], 3, 'Lưới trơn tổng hợp lipid, chuyển hoá đường, khử độc (gan).'),
    Q('Bộ Golgi (thể Golgi) có vai trò?', ['Lưu trữ', 'Hô hấp', 'Đóng gói và phân phối sản phẩm', 'Quang hợp'], 2, 'Bộ Golgi xử lý, đóng gói protein, lipid và phân phối tới các đích.'),
    Q('Túi tiết (vesicle) di chuyển từ?', ['Nhân → ti thể', 'Lưới nội chất → Golgi → màng sinh chất', 'Lục lạp → ribosome', 'Màng → nhân'], 1, 'Đường đi của túi tiết theo dòng chế tiết: ER → Golgi → màng/ngoại bào.'),
    Q('Lysosome có chức năng?', ['Tiêu hoá nội bào', 'Hô hấp', 'Quang hợp', 'Tổng hợp protein'], 0, 'Lysosome chứa enzyme thuỷ phân, tiêu hoá các bào quan cũ, vật lạ.'),
    Q('Không bào trung tâm ở tế bào thực vật có vai trò?', ['Vận động', 'Phân bào', 'Duy trì áp suất thẩm thấu, dự trữ', 'Quang hợp'], 2, 'Không bào lớn tạo áp suất trương, dự trữ nước và chất.'),
  ]),

  M(12, 'Màng sinh chất', [
    Q('Màng sinh chất có cấu trúc?', ['Rắn chắc', 'Không có gì', 'Khảm động (lipid kép + protein)', 'Lưới sợi'], 2, 'Mô hình khảm động Singer-Nicolson: lớp kép photpholipid + protein khảm.'),
    Q('Lớp kép photpholipid có đặc điểm?', ['Ngược lại', 'Toàn phân cực', 'Toàn kỵ nước', 'Đầu phân cực hướng ra ngoài, đuôi kỵ nước hướng vào trong'], 3, 'Đầu phân cực hướng nước, đuôi kỵ nước quay vào nhau.'),
    Q('Cholesterol trong màng động vật có vai trò?', ['Phá huỷ', 'Tạo lỗ', 'Tăng độ ổn định và linh động vừa phải', 'Mang điện'], 2, 'Cholesterol điều chỉnh độ linh động và ổn định màng.'),
    Q('Protein xuyên màng có thể hoạt động như?', ['Chỉ trang trí', 'Vô tác dụng', 'Kênh, bơm, thụ thể', 'Chỉ chứa nước'], 2, 'Protein màng làm kênh ion, bơm chủ động, thụ thể tín hiệu, vận chuyển.'),
    Q('Glycoprotein trên màng có vai trò?', ['Nhận dạng tế bào', 'Quang hợp', 'Sinh sản', 'Vận động'], 0, 'Glycoprotein (gồm chuỗi đường) giúp các tế bào nhận biết nhau.'),
    Q('Tính chất quan trọng của màng sinh chất?', ['Không thấm gì', 'Khô cứng', 'Thấm mọi chất', 'Bán thấm (chọn lọc)'], 3, 'Màng có tính thấm chọn lọc, kiểm soát chất ra vào tế bào.'),
  ]),

  M(13, 'Vận chuyển thụ động qua màng', [
    Q('Khuếch tán là?', ['Cần ATP', 'Cần protein', 'Ngược chiều gradient', 'Chất di chuyển từ nơi nồng độ cao → thấp'], 3, 'Khuếch tán: phân tử đi xuôi chiều gradient, không tốn ATP.'),
    Q('Thẩm thấu là khuếch tán của?', ['Protein', 'Khí O₂ và CO₂ qua màng', 'Đường glucose qua kênh protein', 'Nước qua màng bán thấm'], 3, 'Thẩm thấu là sự khuếch tán của nước qua màng bán thấm.'),
    Q('Khi tế bào trong môi trường ưu trương, nước sẽ?', ['Đứng yên', 'Bốc hơi', 'Đi vào tế bào', 'Đi ra khỏi tế bào'], 3, 'Môi trường ưu trương nồng độ chất tan cao hơn → nước thoát ra ngoài → tế bào co.'),
    Q('Môi trường nhược trương khiến hồng cầu?', ['Bình thường', 'Trương lên và có thể vỡ', 'Đông cứng', 'Co lại'], 1, 'Môi trường nhược trương → nước tràn vào → hồng cầu phình và vỡ (tan huyết).'),
    Q('Khuếch tán dễ (facilitated diffusion) cần?', ['Áp suất cao', 'Protein kênh hoặc mang', 'Endocytosis', 'Bơm ATP'], 1, 'Khuếch tán dễ thuận chiều gradient, qua kênh/protein mang, không cần ATP.'),
    Q('Đặc điểm chung của vận chuyển thụ động?', ['Tốn ATP', 'Không tốn năng lượng ATP', 'Ngược gradient', 'Cần endocytosis'], 1, 'Vận chuyển thụ động đi xuôi gradient, không tốn ATP.'),
  ]),

  M(14, 'Vận chuyển chủ động và xuất nhập bào', [
    Q('Vận chuyển chủ động là?', ['Không cần protein', 'Khuếch tán tự do không cần kênh', 'Đi ngược chiều gradient, cần ATP', 'Đi xuôi gradient'], 2, 'Vận chuyển chủ động đi ngược chiều gradient nồng độ, tốn ATP.'),
    Q('Ví dụ bơm chủ động là?', ['Thẩm thấu', 'Ngấm muối', 'Khuếch tán O₂', 'Bơm Na⁺/K⁺'], 3, 'Bơm Na⁺/K⁺-ATPase đẩy 3 Na⁺ ra, 2 K⁺ vào, tốn 1 ATP.'),
    Q('Nhập bào (endocytosis) gồm?', ['Quang hợp', 'Chỉ tiết', 'Thực bào và ẩm bào', 'Chỉ thực bào'], 2, 'Endocytosis: phagocytosis (ăn các hạt rắn) và pinocytosis (uống chất lỏng).'),
    Q('Thực bào điển hình ở?', ['Vi khuẩn', 'Tế bào lá', 'Hồng cầu', 'Bạch cầu'], 3, 'Bạch cầu thực bào vi khuẩn, bảo vệ cơ thể.'),
    Q('Xuất bào (exocytosis) là?', ['Phân chia', 'Đưa chất từ ngoài vào', 'Hô hấp', 'Đưa chất từ trong ra ngoài tế bào qua túi'], 3, 'Túi tiết hoà vào màng sinh chất, đẩy chất ra ngoài.'),
    Q('Vận chuyển nào KHÔNG cần protein màng?', ['Khuếch tán dễ', 'Khuếch tán đơn của O₂, CO₂', 'Bơm Na/K', 'Nhập bào'], 1, 'Phân tử nhỏ không cực như O₂, CO₂ khuếch tán trực tiếp qua lớp lipid kép.'),
  ]),

  M(15, 'Trao đổi chất và năng lượng — ATP', [
    Q('ATP là viết tắt của?', ['Adenosine triphosphate', 'Amino triphosphate', 'Adenine triphosphate', 'Acid triphosphate'], 0, 'ATP = Adenosine triphosphate — đồng tiền năng lượng của tế bào.'),
    Q('ATP giải phóng năng lượng khi?', ['Tổng hợp', 'Đông cứng', 'Lưu trữ', 'Thuỷ phân liên kết phosphate cuối'], 3, 'ATP → ADP + Pi giải phóng năng lượng cho hoạt động sống.'),
    Q('ATP được tạo ra chủ yếu ở?', ['Lục lạp duy nhất', 'Ribosome', 'Ti thể (qua hô hấp tế bào)', 'Nhân tế bào (nơi chứa ADN)'], 2, 'Hô hấp tế bào trong ti thể tạo phần lớn ATP cho tế bào nhân thực.'),
    Q('Năng lượng dùng cho hoạt động sống chủ yếu lấy từ?', ['Phân giải chất hữu cơ (hô hấp)', 'Quang hợp ở mọi sinh vật', 'Áp suất khí quyển', 'Nhiệt môi trường'], 0, 'Hô hấp tế bào phân giải glucose để tạo ATP.'),
    Q('Trao đổi chất gồm 2 quá trình ngược nhau là?', ['Đồng hoá và dị hoá', 'Hô hấp và quang hợp', 'Sinh trưởng và phát triển', 'Sinh sản và phân chia'], 0, 'Đồng hoá: tổng hợp chất; Dị hoá: phân giải chất.'),
    Q('Phương trình đốt cháy glucose hoàn toàn?', ['C₆H₁₂O₆ → 6CO₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + năng lượng', 'H₂O → O₂', '6CO₂ → C₆H₁₂O₆'], 1, 'Hô hấp hiếu khí: oxy hoá hoàn toàn glucose tạo CO₂, H₂O và ATP.'),
  ]),

  M(16, 'Enzyme', [
    Q('Enzyme có bản chất chủ yếu là?', ['Axit nucleic', 'Protein', 'Cacbohydrat', 'Lipid kép có hoạt tính sinh học'], 1, 'Đa số enzyme là protein, một số là ARN (ribozyme).'),
    Q('Enzyme hoạt động bằng cách?', ['Phá vỡ cơ chất', 'Giảm năng lượng hoạt hoá', 'Tăng năng lượng hoạt hoá', 'Không ảnh hưởng'], 1, 'Enzyme xúc tác bằng cách hạ năng lượng hoạt hoá, tăng tốc phản ứng.'),
    Q('Tính đặc hiệu của enzyme thể hiện qua?', ['Vị trí ngẫu nhiên', 'Trung tâm hoạt động khớp với cơ chất', 'Toàn bộ enzyme', 'Khả năng tạo phản ứng ở mọi nhiệt độ'], 1, 'Trung tâm hoạt động có cấu hình khớp riêng với từng cơ chất.'),
    Q('Yếu tố nào ảnh hưởng hoạt tính enzyme?', ['Nhiệt độ, pH, nồng độ cơ chất', 'Chỉ trọng lực', 'Chỉ áp suất', 'Chỉ ánh sáng'], 0, 'Nhiệt, pH, nồng độ cơ chất và chất ức chế đều ảnh hưởng tới enzyme.'),
    Q('Nhiệt độ tối ưu enzyme người khoảng?', ['0°C', '100°C', '-10°C', '37°C'], 3, 'Đa số enzyme người hoạt động tốt nhất quanh 37°C.'),
    Q('Ức chế cạnh tranh là?', ['Tăng nhiệt', 'Chất giống cơ chất chiếm trung tâm hoạt động', 'Bám ngoài enzyme', 'Phá huỷ enzyme'], 1, 'Chất ức chế cạnh tranh tranh giành vị trí gắn cơ chất.'),
  ]),

  M(17, 'Hô hấp tế bào', [
    Q('Hô hấp tế bào là quá trình?', ['Hấp thu nước', 'Tổng hợp chất hữu cơ', 'Phân giải chất hữu cơ → ATP', 'Tạo ánh sáng'], 2, 'Hô hấp tế bào oxy hoá chất hữu cơ thành CO₂ và H₂O, giải phóng ATP.'),
    Q('Hô hấp hiếu khí gồm các giai đoạn?', ['Chỉ glycolysis', 'Chỉ quang hợp', 'Chỉ Krebs', 'Đường phân → chu trình Krebs → chuỗi vận chuyển electron'], 3, 'Giai đoạn: đường phân (bào tương) → Krebs + chuỗi e⁻ (ti thể).'),
    Q('Đường phân (glycolysis) diễn ra ở?', ['Nhân tế bào (chứa nhiễm sắc thể)', 'Ti thể', 'Lục lạp', 'Bào tương (cytosol)'], 3, 'Glycolysis xảy ra trong bào tương, không cần oxy.'),
    Q('Chu trình Krebs diễn ra ở?', ['Bào tương', 'Chất nền ti thể (matrix)', 'Màng ngoài ti thể', 'Lưới nội chất'], 1, 'Chu trình Krebs (citric acid cycle) xảy ra ở matrix ti thể.'),
    Q('Chuỗi vận chuyển electron tạo nhiều ATP nhất, ở?', ['Chất nền (matrix) ti thể', 'Màng ngoài', 'Màng trong ti thể', 'Bào tương'], 2, 'Chuỗi vận chuyển e⁻ và ATP-synthase nằm trên màng trong ti thể.'),
    Q('Hô hấp hiếu khí 1 glucose tạo khoảng?', ['30-32 ATP', '0 ATP', '2 ATP', '100 ATP'], 0, 'Hô hấp hiếu khí 1 phân tử glucose tạo khoảng 30-32 ATP (tổng).'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Đơn vị cơ bản của sự sống là?', ['Phân tử', 'Nguyên tử', 'Tế bào', 'Cơ quan'], 2, 'Tế bào là đơn vị nhỏ nhất có đầy đủ đặc tính sự sống.'),
    Q('4 nguyên tố chính của sự sống?', ['C, H, O, N', 'Na, K, Ca, Cl', 'Si, P, S, Cl', 'Fe, Cu, Zn, Mn'], 0, 'C, H, O, N tạo nên đại phân tử hữu cơ.'),
    Q('Bào quan tạo ATP chính ở tế bào nhân thực?', ['Ribosome', 'Nhân tế bào (chứa ADN)', 'Ti thể', 'Lục lạp'], 2, 'Ti thể là nơi diễn ra Krebs và chuỗi e⁻ tạo ATP.'),
    Q('Tế bào thực vật khác động vật chủ yếu nhờ?', ['Roi và lông bơi vận động', 'Nhung mao', 'Lông nhung hấp thụ chất', 'Thành cellulose, lục lạp, không bào lớn'], 3, 'Thành tế bào, lục lạp và không bào trung tâm là đặc trưng tế bào thực vật.'),
    Q('Vận chuyển ngược gradient cần?', ['Chỉ áp suất', 'Không cần gì', 'Chỉ nhiệt độ', 'ATP'], 3, 'Vận chuyển chủ động ngược gradient luôn cần ATP.'),
    Q('Enzyme bị ảnh hưởng bởi?', ['Không gì', 'Chỉ ánh sáng', 'Nhiệt độ, pH, chất ức chế', 'Chỉ trọng lực'], 2, 'Hoạt tính enzyme phụ thuộc nhiều yếu tố môi trường.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Quang hợp ở thực vật', [
    Q('Quang hợp là quá trình?', ['Tổng hợp chất hữu cơ từ CO₂ và H₂O nhờ ánh sáng', 'Phân giải chất hữu cơ', 'Bài tiết', 'Hô hấp'], 0, 'Quang hợp dùng ánh sáng để tổng hợp glucose từ CO₂ và H₂O.'),
    Q('Phương trình tổng quát quang hợp?', ['C₆H₁₂O₆ → 6CO₂', 'H₂O → O₂', 'CO₂ → C', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂'], 3, 'Quang hợp hiếu khí: 6CO₂ + 6H₂O + ánh sáng → C₆H₁₂O₆ + 6O₂.'),
    Q('Quang hợp gồm 2 pha?', ['Hấp thu và bài tiết', 'Đường phân và Krebs', 'Pha sáng và pha tối', 'Co và giãn'], 2, 'Pha sáng (thylakoid) và pha tối/Calvin (stroma).'),
    Q('Pha sáng diễn ra ở?', ['Ti thể', 'Bào tương', 'Màng thylakoid của lục lạp', 'Chất nền stroma của lục lạp'], 2, 'Pha sáng xảy ra trên màng thylakoid trong lục lạp.'),
    Q('Sản phẩm pha sáng là?', ['Nước và CO₂ (sản phẩm cuối)', 'Glucose', 'CO₂ và glucose dự trữ', 'ATP, NADPH, O₂'], 3, 'Pha sáng tạo ATP, NADPH (dùng cho pha tối) và O₂ (thải ra).'),
    Q('Pha tối (chu trình Calvin) cố định?', ['CO₂ thành đường', 'O₂ thành nước', 'Ánh sáng', 'N₂ thành amin'], 0, 'Calvin cycle dùng ATP, NADPH để khử CO₂ thành G3P → glucose.'),
  ]),

  M(20, 'Chu kỳ tế bào — Nguyên phân (phần 1)', [
    Q('Chu kỳ tế bào gồm?', ['Chỉ phân chia', 'Chỉ nghỉ', 'Chỉ chết', 'Kì trung gian + nguyên phân'], 3, 'Cycle gồm interphase (G1-S-G2) + mitosis (M).'),
    Q('Pha S của kì trung gian diễn ra?', ['Phân chia', 'Hô hấp', 'Tổng hợp lipid', 'Sao chép ADN'], 3, 'Pha S (Synthesis): ADN được nhân đôi.'),
    Q('Nguyên phân chia thành mấy kì?', ['6 kì', '2 kì', '4 kì', '10 kì'], 2, 'Nguyên phân: kì đầu, kì giữa, kì sau, kì cuối.'),
    Q('Ở kì giữa, nhiễm sắc thể?', ['Tan rã', 'Xếp 1 hàng ở mặt phẳng xích đạo', 'Xếp 2 hàng', 'Phân tán'], 1, 'Kì giữa NST kép xếp 1 hàng tại mặt phẳng xích đạo.'),
    Q('Ở kì sau, NST?', ['Nhân đôi', 'Tách nhau và đi về 2 cực', 'Tan biến', 'Đứng yên'], 1, 'Kì sau (anaphase): 2 cromatit tách nhau, mỗi cromatit đi về 1 cực.'),
    Q('Kết quả 1 lần nguyên phân từ 1 tế bào mẹ?', ['1 tế bào', '4 tế bào', '8 tế bào', '2 tế bào con giống mẹ về bộ NST'], 3, 'Nguyên phân: 1 tế bào → 2 tế bào con giống hệt mẹ (2n).'),
  ]),

  M(21, 'Nguyên phân (phần 2) — Ý nghĩa', [
    Q('Nguyên phân duy trì?', ['Bộ NST 2n qua các thế hệ tế bào', 'Đột biến', 'Sinh sản hữu tính', 'Số lượng giảm dần'], 0, 'Nguyên phân giữ ổn định bộ NST 2n trong cơ thể đa bào.'),
    Q('Nguyên phân giúp cơ thể?', ['Sinh sản hữu tính', 'Đột biến', 'Già đi', 'Sinh trưởng, tái sinh, thay tế bào chết'], 3, 'Nguyên phân giúp lớn lên, hàn vết thương, thay thế tế bào già.'),
    Q('Ở sinh vật đơn bào, nguyên phân là?', ['Trao đổi chất', 'Sinh sản hữu tính', 'Hô hấp', 'Hình thức sinh sản vô tính'], 3, 'Sinh sản vô tính ở amip, vi khuẩn (phân đôi tương tự).'),
    Q('Rối loạn chu kỳ tế bào có thể dẫn tới?', ['Sinh sản', 'Ung thư', 'Sinh trưởng đều', 'Bất tử lành tính'], 1, 'Mất kiểm soát chu kỳ tế bào là cơ chế phát sinh ung thư.'),
    Q('Kiểm soát chu kỳ tế bào ở các điểm?', ['Mọi lúc', 'Chỉ 1 điểm', 'G1/S, G2/M, mặt phẳng xích đạo', 'Chỉ ở pha M khi phân chia tế bào'], 2, 'Các checkpoint kiểm soát ADN, môi trường và thoi vô sắc.'),
    Q('Cytokinesis ở tế bào động vật xảy ra nhờ?', ['Phân đôi nhân', 'Tạo vách phenpragmoplast', 'Eo thắt do vi sợi', 'Tế bào chết'], 2, 'Tế bào động vật thắt eo nhờ vòng actin/myosin.'),
  ]),

  M(22, 'Giảm phân (phần 1)', [
    Q('Giảm phân xảy ra ở?', ['Mọi tế bào', 'Tế bào soma', 'Hồng cầu', 'Tế bào sinh dục chín'], 3, 'Giảm phân diễn ra ở tế bào sinh dục (sinh tinh, sinh trứng).'),
    Q('Giảm phân gồm?', ['3 lần', '4 lần', '1 lần', '2 lần phân bào liên tiếp'], 3, 'Giảm phân I và giảm phân II (chỉ 1 lần nhân đôi ADN trước GP I).'),
    Q('Kết quả giảm phân từ 1 tế bào mẹ 2n?', ['2 tế bào 2n', '4 tế bào con n', '1 tế bào 4n', '8 tế bào n'], 1, 'Một tế bào 2n qua giảm phân tạo 4 tế bào n (đơn bội).'),
    Q('Giảm phân I là?', ['Phân chia nguyên nhiễm', 'Phân nhân con', 'Phân chia giảm nhiễm (2n → n)', 'Phân đôi'], 2, 'GP I là phân chia giảm nhiễm: 2n cặp NST tương đồng tách nhau.'),
    Q('Trao đổi chéo (crossing-over) xảy ra ở?', ['Kì đầu giảm phân I', 'Kì sau giảm phân II', 'Kì trung gian', 'Kì cuối'], 0, 'Crossing-over xảy ra giữa các NST tương đồng ở kì đầu GP I.'),
    Q('Giảm phân II giống?', ['Quang hợp', 'Nguyên phân (chia cromatit)', 'Hô hấp', 'Giảm phân I'], 1, 'GP II tách cromatit như nguyên phân, cho 2 tế bào n từ 1 tế bào n.'),
  ]),

  M(23, 'Giảm phân (phần 2) — Ý nghĩa', [
    Q('Giảm phân kết hợp với thụ tinh tạo ra?', ['Vô sinh', 'Sinh sản vô tính', 'Bản sao y hệt', 'Sự đa dạng di truyền'], 3, 'Trao đổi chéo, phân ly độc lập và thụ tinh tạo đa dạng di truyền.'),
    Q('Phân ly độc lập của các cặp NST xảy ra ở?', ['Hô hấp', 'Kì sau giảm phân I', 'Kì trung gian', 'Kì đầu'], 1, 'Các cặp NST tương đồng phân ly độc lập về 2 cực ở kì sau GP I.'),
    Q('Thụ tinh giữa giao tử n và n tạo ra?', ['Hợp tử 2n', 'Tế bào sinh dưỡng', 'Hợp tử 3n', 'Hợp tử n'], 0, 'Thụ tinh khôi phục bộ 2n trong hợp tử.'),
    Q('Sinh sản hữu tính tạo nhiều biến dị hơn vô tính vì?', ['Có giảm phân + thụ tinh', 'Không có gì', 'Đột biến nhiều', 'Ít tốn ATP'], 0, 'Giảm phân và thụ tinh tổ hợp gen tạo đa dạng di truyền.'),
    Q('Nếu giảm phân không bình thường có thể tạo?', ['Bệnh truyền nhiễm', 'Tế bào bất tử', 'Sinh sản', 'Đột biến số lượng NST'], 3, 'Rối loạn giảm phân tạo giao tử thừa/thiếu NST, gây hội chứng Down, Turner...'),
    Q('Ở người, bộ NST 2n =', ['44', '48', '46', '23'], 2, 'Người có 2n = 46 NST (23 cặp).'),
  ]),

  M(24, 'Công nghệ tế bào', [
    Q('Công nghệ tế bào là?', ['Hô hấp', 'Sinh sản tự nhiên', 'Vận động', 'Ứng dụng nuôi cấy mô, tế bào để tạo sản phẩm'], 3, 'Công nghệ tế bào dùng nuôi cấy tế bào/mô để nhân giống, tạo dòng.'),
    Q('Nuôi cấy mô thực vật KHÔNG dùng để?', ['Bảo tồn nguồn gen', 'Đốt rừng', 'Tạo cây sạch bệnh', 'Nhân giống nhanh'], 1, 'Nuôi cấy mô giúp nhân nhanh giống, không gây phá rừng.'),
    Q('Nhân bản vô tính động vật nổi tiếng là?', ['Gà (gia cầm thí nghiệm phổ biến)', 'Bò sữa nhân bản đầu tiên', 'Cừu Dolly', 'Lợn nhân bản phục vụ y học'], 2, 'Cừu Dolly (1996) là động vật nhân bản đầu tiên từ tế bào trưởng thành.'),
    Q('Tế bào gốc (stem cell) có khả năng?', ['Biệt hoá thành nhiều loại tế bào', 'Không phân chia', 'Chỉ phân chia 1 lần', 'Chỉ chết'], 0, 'Tế bào gốc có khả năng tự đổi mới và biệt hoá thành các loại tế bào khác.'),
    Q('Ứng dụng tế bào gốc trong y học để?', ['Tăng cân', 'Chữa bệnh thoái hoá, ghép mô', 'Tạo nhựa', 'Tăng chiều cao bằng nhiệt'], 1, 'Tế bào gốc dùng trong điều trị bệnh máu, thoái hoá thần kinh, ghép mô.'),
    Q('Tế bào gốc phôi khác tế bào gốc trưởng thành ở?', ['Không phân chia', 'Chỉ chia 1 lần', 'Không khác', 'Khả năng biệt hoá rộng hơn'], 3, 'Stem cell phôi là pluripotent — biệt hoá rộng; trưởng thành chỉ multipotent.'),
  ]),

  M(25, 'Vi sinh vật — Khái niệm chung', [
    Q('Vi sinh vật là?', ['Vô tri', 'Sinh vật nhỏ, thường phải quan sát qua kính hiển vi', 'Sinh vật lớn', 'Chỉ vi khuẩn'], 1, 'Vi sinh vật: vi khuẩn, virus, nấm men, tảo đơn bào, nguyên sinh động vật.'),
    Q('Đặc điểm chung của vi sinh vật?', ['Kích thước nhỏ, sinh trưởng nhanh, phân bố rộng', 'Chỉ ở rừng', 'Chỉ ở biển', 'Không sinh sản'], 0, 'Vi sinh vật nhỏ, sinh sản nhanh, sống ở hầu hết môi trường.'),
    Q('Vi sinh vật KHÔNG bao gồm?', ['Virus (chưa có cấu tạo tế bào)', 'Vi khuẩn', 'Cá voi', 'Nấm men'], 2, 'Cá voi là động vật lớn, không phải vi sinh vật.'),
    Q('Vi sinh vật quang tự dưỡng dùng?', ['Chất hữu cơ', 'Chỉ nhiệt', 'Ánh sáng làm năng lượng, CO₂ làm carbon', 'Khí methan'], 2, 'Quang tự dưỡng: dùng ánh sáng + CO₂ (vd vi khuẩn lam).'),
    Q('Vi sinh vật hoá dị dưỡng dùng?', ['Chất hữu cơ làm năng lượng và carbon', 'Chỉ nước', 'Đá vô cơ', 'Ánh sáng'], 0, 'Hoá dị dưỡng: lấy năng lượng và C từ chất hữu cơ.'),
    Q('Phương pháp nghiên cứu vi sinh vật chủ yếu?', ['Nuôi cấy trên môi trường vô trùng', 'Quan sát mắt thường', 'Ngửi mùi', 'Sờ tay'], 0, 'Nuôi cấy trên môi trường vô trùng + soi kính hiển vi.'),
  ]),

  M(26, 'Sinh trưởng của vi sinh vật', [
    Q('Sinh trưởng của vi khuẩn được hiểu là?', ['Hô hấp', 'Tăng kích thước cá thể', 'Bài tiết', 'Tăng số lượng tế bào'], 3, 'Vi khuẩn sinh trưởng = tăng số lượng tế bào qua phân đôi.'),
    Q('Trong nuôi cấy không liên tục, đường cong sinh trưởng có?', ['1 pha', 'Không có pha', '4 pha (tiềm phát, lũy thừa, ổn định, suy vong)', '7 pha'], 2, '4 pha: lag, log, stationary, death.'),
    Q('Pha luỹ thừa (log) đặc trưng bởi?', ['Đứng yên', 'Suy vong', 'Chỉ thở', 'Tốc độ sinh sản cực đại'], 3, 'Pha log: vi khuẩn phân chia rất nhanh, số lượng tăng theo hàm mũ.'),
    Q('Pha ổn định xảy ra do?', ['Cạn dinh dưỡng, chất độc tích lũy', 'Thiếu nước duy nhất', 'Ánh sáng mặt trời', 'Nhiệt cao'], 0, 'Ổn định khi sinh = chết do tài nguyên cạn và chất thải tích lũy.'),
    Q('Trong nuôi cấy liên tục, vi sinh vật được?', ['Đông lạnh', 'Bỏ đói', 'Sấy khô', 'Cung cấp dinh dưỡng và loại chất thải liên tục'], 3, 'Nuôi cấy liên tục giữ vi sinh vật ở pha log lâu dài.'),
    Q('Thời gian thế hệ là?', ['Thời gian chết', 'Tuổi thọ', 'Thời gian số lượng tế bào tăng gấp đôi', 'Chu kỳ ngày-đêm'], 2, 'Generation time = thời gian để quần thể vi khuẩn nhân đôi.'),
  ]),

  M(27, 'Các yếu tố ảnh hưởng đến sinh trưởng vi sinh vật', [
    Q('Yếu tố hoá học ảnh hưởng vi sinh vật gồm?', ['Dinh dưỡng, pH, chất ức chế', 'Chỉ âm thanh', 'Chỉ điện', 'Chỉ trọng lực'], 0, 'Dinh dưỡng C, N, P, S; pH; chất ức chế là yếu tố hoá học.'),
    Q('Theo nhiệt độ, vi sinh vật ưa ấm (mesophile) thích?', ['60°C trở lên', '-10°C', '20-45°C', '100°C'], 2, 'Mesophile thích 20-45°C; đa số vi khuẩn gây bệnh thuộc nhóm này.'),
    Q('Vi sinh vật ưa nóng (thermophile) sống ở?', ['Băng tuyết', 'Đáy đại dương lạnh', 'Nước thường', 'Suối nước nóng, >50°C'], 3, 'Thermophile sống ở suối nước nóng, có thể tới 80°C+.'),
    Q('pH thích hợp cho phần lớn vi khuẩn?', ['pH 1 — môi trường acid mạnh như dạ dày', 'pH 14 — môi trường kiềm rất mạnh', 'Trung tính 6-8', 'pH 3 luôn'], 2, 'Đa số vi khuẩn ưa trung tính; nấm men/mốc ưa hơi acid.'),
    Q('Chất kháng sinh (antibiotic) tác động lên vi khuẩn bằng cách?', ['Ức chế tổng hợp thành tế bào, protein, ADN', 'Sinh sản', 'Tạo ATP', 'Tăng dinh dưỡng'], 0, 'Kháng sinh phá vỡ thành (penicillin), tổng hợp protein (streptomycin)...'),
    Q('Khử trùng bằng nhiệt cao thường dùng?', ['Nhiệt độ phòng', 'Nồi hấp 121°C', 'Đông lạnh', 'Tủ lạnh'], 1, 'Nồi hấp autoclave 121°C, 1 atm tiêu diệt mọi vi sinh vật.'),
  ]),

  M(28, 'Ứng dụng vi sinh vật trong đời sống', [
    Q('Lên men lactic dùng làm?', ['Bia rượu', 'Nước ngọt', 'Mì sợi', 'Sữa chua, dưa muối'], 3, 'Vi khuẩn lactic chuyển hoá đường thành acid lactic — làm sữa chua, dưa.'),
    Q('Lên men ethanol dùng?', ['Vi khuẩn lactic', 'Nấm men Saccharomyces', 'Nấm mốc', 'Vi tảo Spirulina nuôi hồ nước'], 1, 'Nấm men Saccharomyces cerevisiae lên men đường thành ethanol + CO₂.'),
    Q('Sản xuất giấm dùng?', ['Vi khuẩn acetic', 'Tảo lam', 'Virus phage lên men giấm', 'Nấm men'], 0, 'Vi khuẩn Acetobacter oxy hoá ethanol thành acid acetic (giấm).'),
    Q('Kháng sinh penicillin thu được từ?', ['Tảo lam Spirulina', 'Động vật', 'Vi khuẩn', 'Nấm Penicillium'], 3, 'Fleming (1928) phát hiện penicillin từ nấm Penicillium.'),
    Q('Vi sinh vật xử lý nước thải bằng cách?', ['Bốc hơi', 'Đông lạnh', 'Phân giải chất hữu cơ', 'Tạo bùn cứng'], 2, 'Vi sinh vật phân huỷ chất hữu cơ thành CO₂ và sinh khối.'),
    Q('Sản xuất thuốc trừ sâu sinh học sử dụng?', ['Glyphosate', 'Vi khuẩn Bacillus thuringiensis (Bt)', 'DDT (thuốc hoá học clo hữu cơ)', 'Atrazine'], 1, 'Bt tiết độc tố diệt sâu, an toàn với người và môi trường hơn hoá chất.'),
  ]),

  M(29, 'Virus — Khái niệm và đặc điểm', [
    Q('Virus có cấu tạo gồm?', ['Vỏ protein + lõi axit nucleic', 'Chỉ protein', 'Tế bào hoàn chỉnh', 'Chỉ ADN'], 0, 'Virus đơn giản: capsid (vỏ protein) + lõi ADN hoặc ARN.'),
    Q('Virus là dạng sống đặc biệt vì?', ['Không có cấu tạo tế bào, kí sinh nội bào bắt buộc', 'Có ti thể', 'Sinh sản như vi khuẩn', 'Sống tự do'], 0, 'Virus không phải tế bào, chỉ nhân lên trong tế bào chủ.'),
    Q('Lõi virus chứa?', ['Protein', 'Cả ADN và ARN cùng lúc', 'ADN hoặc ARN (không có cả hai)', 'Phospholipid kép như màng tế bào'], 2, 'Mỗi virus chỉ có 1 loại axit nucleic: ADN hoặc ARN.'),
    Q('Một số virus có thêm vỏ ngoài gọi là?', ['Thành peptidoglycan như vi khuẩn', 'Capsid', 'Envelope (vỏ lipid)', 'Vách cellulose như tế bào thực vật'], 2, 'Một số virus có vỏ ngoài lipid lấy từ màng tế bào chủ.'),
    Q('Virus chỉ nhân lên được khi?', ['Đặt trên môi trường nuôi cấy', 'Ngoài không khí', 'Xâm nhập vào tế bào sống', 'Trong tủ lạnh'], 2, 'Virus là kí sinh nội bào bắt buộc, không nhân lên ngoài tế bào sống.'),
    Q('Ai khám phá virus đầu tiên?', ['Darwin', 'Newton', 'Mendel', 'Ivanovsky (1892)'], 3, 'Ivanovsky phát hiện tác nhân nhỏ hơn vi khuẩn ở cây thuốc lá.'),
  ]),

  M(30, 'Chu trình nhân lên của virus', [
    Q('Chu trình nhân lên virus gồm các bước?', ['Chỉ bám', 'Chỉ thoát', 'Chỉ nhân đôi', 'Bám → xâm nhập → tổng hợp → lắp ráp → giải phóng'], 3, '5 giai đoạn: bám, xâm nhập, tổng hợp, lắp ráp, phóng thích.'),
    Q('Virus bám vào tế bào nhờ?', ['Tự chui qua', 'Bám ngẫu nhiên', 'Thụ thể đặc hiệu trên màng tế bào chủ', 'Lực hút'], 2, 'Gai virus khớp với thụ thể đặc hiệu của tế bào chủ.'),
    Q('Tính đặc hiệu của virus dựa vào?', ['Màu sắc', 'Kích thước', 'Tương khớp gai - thụ thể', 'Nhiệt độ'], 2, 'Sự khớp giữa gai virus và thụ thể tế bào quy định loại tế bào nhiễm được.'),
    Q('Chu trình tan (lytic) khác chu trình tiềm tan (lysogenic) ở?', ['Không lây lan', 'Không khác', 'Tan phá tế bào ngay, không gài ADN', 'Chỉ ở virus thực vật'], 2, 'Lytic: phá tế bào nhanh; Lysogenic: gài genome vào ADN chủ, tiềm ẩn.'),
    Q('HIV thuộc loại virus?', ['Virus thực vật', 'Retrovirus (ARN, có enzyme phiên mã ngược)', 'Vi khuẩn', 'Bacteriophage'], 1, 'HIV là retrovirus ARN, dùng reverse transcriptase tạo cDNA gài vào genome người.'),
    Q('Bacteriophage là virus?', ['Trên động vật', 'Trên thực vật', 'Trên nấm', 'Kí sinh trên vi khuẩn'], 3, 'Bacteriophage là virus tấn công vi khuẩn — dùng nhiều trong nghiên cứu.'),
  ]),

  M(31, 'Bệnh do virus và phòng chống', [
    Q('Bệnh do virus ở người KHÔNG bao gồm?', ['COVID-19', 'Lao phổi', 'Sởi (do virus Measles)', 'Cúm mùa (do virus Influenza)'], 1, 'Lao do vi khuẩn Mycobacterium tuberculosis, không phải virus.'),
    Q('HIV/AIDS lây qua đường?', ['Tiếp xúc thông thường', 'Nước uống', 'Máu, tình dục, mẹ con', 'Không khí'], 2, 'HIV không lây qua tiếp xúc thông thường, chỉ qua dịch cơ thể.'),
    Q('Phòng bệnh virus tốt nhất bằng?', ['Cảm cúm', 'Vitamin C', 'Vắc-xin', 'Kháng sinh'], 2, 'Vắc-xin là biện pháp phòng bệnh virus hiệu quả nhất.'),
    Q('Vắc-xin hoạt động bằng cách?', ['Diệt virus trực tiếp', 'Kích thích hệ miễn dịch tạo kháng thể', 'Cho hormone', 'Cho ADN'], 1, 'Vắc-xin chứa kháng nguyên giúp cơ thể "tập dượt" miễn dịch.'),
    Q('SARS-CoV-2 thuộc nhóm virus?', ['Nấm gây bệnh nấm phổi', 'Tảo lam đơn bào trong nước', 'Vi khuẩn', 'Coronavirus (ARN)'], 3, 'SARS-CoV-2 là coronavirus ARN có vỏ ngoài, gây COVID-19.'),
    Q('Cách phòng bệnh hô hấp do virus hiệu quả?', ['Phơi nắng cả ngày', 'Uống nước nóng', 'Ăn cay', 'Đeo khẩu trang + rửa tay + tiêm vắc-xin'], 3, 'Khẩu trang, vệ sinh và vắc-xin là các biện pháp phòng dịch chính.'),
  ]),

  M(32, 'Ứng dụng virus và miễn dịch', [
    Q('Virus được ứng dụng trong?', ['Chỉ gây bệnh', 'Không có ứng dụng', 'Làm thực phẩm', 'Sản xuất vắc-xin, liệu pháp gen, kiểm soát côn trùng'], 3, 'Virus dùng trong vắc-xin sống giảm độc lực, liệu pháp gen, sinh học phân tử.'),
    Q('Liệu pháp gen là?', ['Tiêm vitamin', 'Đưa gen lành vào tế bào để chữa bệnh', 'Cấy ghép tạng', 'Châm cứu'], 1, 'Gene therapy dùng virus làm vector để chuyển gen điều trị vào tế bào.'),
    Q('Hệ miễn dịch không đặc hiệu gồm?', ['Tế bào T', 'Tế bào B', 'Kháng thể', 'Da, niêm mạc, thực bào'], 3, 'Hàng rào không đặc hiệu: da, niêm mạc, dịch tiết, bạch cầu thực bào.'),
    Q('Miễn dịch đặc hiệu chủ yếu dựa vào?', ['Niêm mạc', 'Hàng rào da và lớp sừng bảo vệ', 'Mồ hôi', 'Tế bào lympho B và T'], 3, 'Lympho B tạo kháng thể; lympho T tiêu diệt tế bào nhiễm.'),
    Q('Kháng thể là?', ['Protein nhận diện và bám đặc hiệu kháng nguyên', 'Đường glucose mang dấu hiệu nhận diện', 'Đoạn ADN ghi nhớ kháng nguyên', 'Lipid bao quanh tế bào miễn dịch'], 0, 'Kháng thể (immunoglobulin) là protein đặc hiệu với từng kháng nguyên.'),
    Q('Trí nhớ miễn dịch giúp?', ['Tăng cân', 'Giảm bệnh', 'Phản ứng nhanh và mạnh hơn khi gặp lại kháng nguyên', 'Quên kháng nguyên'], 2, 'Tế bào nhớ giúp đáp ứng nhanh hơn lần nhiễm sau — cơ sở của vắc-xin.'),
  ]),

  M(33, 'Bệnh truyền nhiễm và an toàn sinh học', [
    Q('Bệnh truyền nhiễm là?', ['Bệnh do thiếu hụt vitamin', 'Bệnh di truyền', 'Bệnh do vi sinh vật gây ra và lây lan', 'Bệnh chấn thương'], 2, 'Bệnh truyền nhiễm do vi sinh vật (vi khuẩn, virus, nấm, ký sinh trùng).'),
    Q('Đường lây truyền KHÔNG bao gồm?', ['Tiêu hoá', 'Không khí', 'Tiếp xúc', 'Di truyền qua gen'], 3, 'Bệnh truyền nhiễm lây qua đường ngoài, không phải qua gen di truyền.'),
    Q('5K phòng dịch là?', ['Khẩu trang - Khử khuẩn - Khoảng cách - Không tụ tập - Khai báo y tế', '5 loại vitamin', '5 vùng', '5 mức nhiệt'], 0, 'Bộ Y tế VN khuyến nghị 5K phòng COVID-19.'),
    Q('An toàn sinh học (biosafety) là?', ['Trang điểm', 'Bảo vệ thực vật', 'Tăng năng suất', 'Biện pháp bảo vệ con người và môi trường khỏi tác nhân sinh học nguy hiểm'], 3, 'Biosafety bảo vệ con người, môi trường khỏi tác nhân vi sinh nguy hiểm.'),
    Q('Phòng thí nghiệm vi sinh cần?', ['Ăn uống tự do', 'Không cần khử trùng', 'Tủ an toàn sinh học, đồ bảo hộ', 'Mở cửa thông thoáng'], 2, 'BSC, găng tay, áo blouse và khử trùng là yêu cầu cơ bản.'),
    Q('Khi đổ mẫu vi sinh ra bàn cần?', ['Khử trùng ngay bằng chất sát khuẩn', 'Lau bằng khăn ướt', 'Hong khô', 'Bỏ qua'], 0, 'Phải khử trùng ngay bằng cồn 70% hoặc chloramine để diệt khuẩn.'),
  ]),

  M(34, 'Sinh học và xã hội', [
    Q('Đạo đức sinh học (bioethics) đặt vấn đề gì với kỹ thuật chỉnh sửa gen?', ['Tăng tốc độ', 'Tăng năng suất', 'Tính an toàn, công bằng, tôn trọng con người', 'Tăng giá thành'], 2, 'Bioethics xét tới an toàn, đồng thuận, công bằng khi chỉnh sửa gen.'),
    Q('GMO là?', ['Phân bón', 'Côn trùng', 'Hoá chất', 'Sinh vật biến đổi gen'], 3, 'GMO = Genetically Modified Organism — sinh vật biến đổi gen.'),
    Q('Ưu điểm cây trồng GMO?', ['Luôn hại sức khoẻ', 'Năng suất cao, chống sâu bệnh', 'Không đẻ hạt', 'Chỉ trồng được ở sa mạc'], 1, 'GMO có thể tăng năng suất, kháng sâu bệnh, chịu hạn.'),
    Q('Nguyên tắc nghiên cứu khoa học cần?', ['Bịa số liệu', 'Trung thực, khách quan, có đạo đức', 'Bí mật mọi thứ', 'Giấu kết quả'], 1, 'Trung thực và đạo đức là yêu cầu cốt lõi của nghiên cứu khoa học.'),
    Q('Phát triển bền vững trong sinh học cần?', ['Săn bắn', 'Khai thác cạn kiệt', 'Phá rừng', 'Bảo tồn đa dạng sinh học + sử dụng tài nguyên hợp lý'], 3, 'Phát triển bền vững cân bằng sinh thái, kinh tế và xã hội.'),
    Q('Nghề nghiệp liên quan sinh học có thể là?', ['Bác sĩ, nhà nông học, công nghệ sinh học', 'Kiến trúc sư', 'Lái xe', 'Kế toán'], 0, 'Sinh học mở ra y dược, nông nghiệp, môi trường, công nghệ sinh học.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Đơn vị cấu trúc và chức năng của sự sống là?', ['Phân tử', 'Sinh quyển', 'Tế bào', 'Cơ thể'], 2, 'Tế bào là đơn vị cơ bản của mọi sinh vật.'),
    Q('Bào quan tạo ATP chính ở tế bào nhân thực?', ['Lưới nội chất', 'Lục lạp', 'Ti thể', 'Nhân tế bào (chứa ADN)'], 2, 'Ti thể tiến hành hô hấp, tạo phần lớn ATP.'),
    Q('Quang hợp tạo ra?', ['ADN và protein dự trữ', 'CO₂ và nước', 'Protein', 'Glucose và O₂'], 3, 'Quang hợp tổng hợp glucose từ CO₂ và H₂O, giải phóng O₂.'),
    Q('Giảm phân tạo ra?', ['Giao tử n', 'Tế bào 2n', 'Tế bào 4n', 'Tế bào không nhân'], 0, 'Giảm phân tạo giao tử đơn bội (n) từ tế bào lưỡng bội (2n).'),
    Q('Virus khác vi khuẩn ở chỗ?', ['Sống tự do', 'Có nhân', 'Có ti thể', 'Không có cấu tạo tế bào'], 3, 'Virus không có cấu tạo tế bào, phải kí sinh nội bào bắt buộc.'),
    Q('Phòng bệnh do virus tốt nhất bằng?', ['Kháng sinh', 'Vắc-xin', 'Vitamin', 'Phơi nắng'], 1, 'Vắc-xin là biện pháp hiệu quả nhất với virus.'),
  ]),
];

export const H10SINH_SCENARIOS = indexBy(H10SINH_WEEKS);
