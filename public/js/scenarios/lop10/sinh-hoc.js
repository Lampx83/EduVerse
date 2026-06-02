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
    Q('Sinh học là khoa học nghiên cứu về?', ['Vật chất vô cơ','Sự sống và sinh vật','Hành tinh','Khoáng sản'], 1, 'Sinh học (Biology) nghiên cứu sự sống và các sinh vật.'),
    Q('Cấp tổ chức sống nhỏ nhất có đầy đủ đặc trưng sự sống là?', ['Phân tử','Tế bào','Mô','Cơ quan'], 1, 'Tế bào là đơn vị cấu trúc và chức năng cơ bản của sự sống.'),
    Q('Đặc trưng nào KHÔNG phải của thế giới sống?', ['Trao đổi chất','Sinh trưởng - sinh sản','Phản ứng với kích thích','Nóng chảy ở nhiệt độ cao'], 3, 'Nóng chảy là tính chất vật lý của vật chất vô sinh.'),
    Q('Hệ thống phân loại 5 giới KHÔNG bao gồm giới nào?', ['Khởi sinh','Nguyên sinh','Nấm','Khoáng vật'], 3, 'Khoáng vật không thuộc giới sinh vật.'),
    Q('Phương pháp quan sát trong sinh học cần?', ['Dụng cụ phù hợp + ghi chép trung thực','Đoán mò','Sao chép','Bỏ qua chi tiết'], 0, 'Quan sát khoa học yêu cầu dụng cụ và ghi chép chính xác.'),
    Q('An toàn phòng thí nghiệm sinh học cần?', ['Đeo găng + kính bảo hộ','Ăn uống trong phòng','Vứt mẫu bừa bãi','Không cần gì'], 0, 'Phải mang bảo hộ và xử lý mẫu đúng cách.'),
  ]),

  M(2, 'Các cấp tổ chức của thế giới sống', [
    Q('Thứ tự đúng từ nhỏ đến lớn các cấp tổ chức sống?', ['Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể','Mô → Tế bào → Cơ thể','Cơ thể → Mô → Tế bào','Cơ quan → Tế bào → Mô'], 0, 'Cấp sống đi từ tế bào → mô → cơ quan → hệ cơ quan → cơ thể → quần thể → quần xã → hệ sinh thái → sinh quyển.'),
    Q('Cấp tổ chức cao nhất của sự sống là?', ['Cơ thể','Quần thể','Quần xã','Sinh quyển'], 3, 'Sinh quyển bao gồm toàn bộ sinh vật trên Trái Đất.'),
    Q('Quần thể là?', ['Tập hợp cá thể cùng loài, cùng khu vực','Tập hợp cá thể khác loài','Một cá thể','Một tế bào'], 0, 'Quần thể là tập hợp cá thể cùng loài, cùng không gian sống.'),
    Q('Quần xã khác quần thể ở chỗ?', ['Gồm nhiều loài cùng chung sống','Chỉ một loài','Không có sinh vật','Là vô cơ'], 0, 'Quần xã có nhiều quần thể của các loài khác nhau cùng chung sống.'),
    Q('Hệ sinh thái bao gồm?', ['Quần xã + môi trường vô sinh','Chỉ sinh vật','Chỉ vô cơ','Chỉ thực vật'], 0, 'Hệ sinh thái = quần xã sinh vật + sinh cảnh (yếu tố vô sinh).'),
    Q('Đặc tính nổi trội của một cấp tổ chức sống thể hiện rõ nhất khi?', ['Tách rời','Tương tác với các bộ phận khác','Bất động','Chết'], 1, 'Đặc tính nổi trội xuất hiện khi các thành phần tương tác với nhau.'),
  ]),

  M(3, 'Thành phần hoá học của tế bào — Nước', [
    Q('Nguyên tố nào chiếm tỉ lệ lớn nhất trong cơ thể sống?', ['C','H','O','N'], 2, 'Oxy ~65% khối lượng cơ thể do nước H₂O chiếm đa số.'),
    Q('Nhóm 4 nguyên tố chủ yếu của sự sống là?', ['C, H, O, N','Na, K, Ca, Mg','Fe, Cu, Zn, Mn','P, S, Cl, Si'], 0, 'C, H, O, N là 4 nguyên tố chính cấu tạo hợp chất hữu cơ của tế bào.'),
    Q('Nước chiếm bao nhiêu % khối lượng cơ thể người trưởng thành?', ['~10%','~30%','~60-70%','~95%'], 2, 'Nước chiếm khoảng 60-70% khối lượng cơ thể người trưởng thành.'),
    Q('Liên kết giữa H và O trong phân tử nước là?', ['Cộng hoá trị có cực','Ion','Kim loại','Hidro'], 0, 'O - H là liên kết cộng hoá trị có cực, làm phân tử nước phân cực.'),
    Q('Đặc tính phân cực của nước giúp?', ['Hoà tan nhiều chất','Đông cứng','Bốc cháy','Phát quang'], 0, 'Nước phân cực nên là dung môi tốt cho nhiều chất phân cực và ion.'),
    Q('Vai trò chính của nước đối với tế bào?', ['Dung môi + tham gia phản ứng + điều hoà nhiệt','Chỉ làm đẹp','Chỉ tạo màu','Không cần'], 0, 'Nước là dung môi, tham gia phản ứng hoá sinh, điều hoà thân nhiệt.'),
  ]),

  M(4, 'Cacbohydrat và Lipid', [
    Q('Cacbohydrat đơn vị nhỏ nhất là?', ['Đường đơn (monosaccharide)','Đường đôi','Polysaccharide','Tinh bột'], 0, 'Monosaccharide như glucose, fructose là đơn phân của cacbohydrat.'),
    Q('Glucose có công thức?', ['C₆H₁₂O₆','C₁₂H₂₂O₁₁','CH₄','H₂O'], 0, 'Glucose: C₆H₁₂O₆ — đường đơn 6 cacbon.'),
    Q('Tinh bột và glycogen là?', ['Polysaccharide dự trữ','Monosaccharide','Protein','Lipid'], 0, 'Tinh bột (thực vật) và glycogen (động vật) là polysaccharide dự trữ năng lượng.'),
    Q('Lipid khác cacbohydrat ở điểm?', ['Kỵ nước','Hoà tan trong nước','Chứa N','Chứa P'], 0, 'Lipid kỵ nước (không tan trong nước), tan trong dung môi hữu cơ.'),
    Q('Photpholipid là thành phần chính của?', ['Màng sinh chất','Thành tế bào','Nhân','Ribosome'], 0, 'Photpholipid tạo lớp kép cấu trúc cơ bản của màng sinh chất.'),
    Q('Vai trò của lipid trong cơ thể?', ['Dự trữ năng lượng + cấu trúc màng + hormone','Chỉ tạo màu','Chỉ tạo mùi','Chỉ phản ứng'], 0, 'Lipid là kho năng lượng, thành phần màng và một số hormone (steroid).'),
  ]),

  M(5, 'Protein', [
    Q('Đơn phân của protein là?', ['Axit amin','Glucose','Nucleotide','Glycerol'], 0, 'Protein cấu tạo từ 20 loại axit amin liên kết peptide.'),
    Q('Liên kết giữa các axit amin trong protein là?', ['Peptide','Ion','Kim loại','Hydro'], 0, 'Liên kết peptide (-CO-NH-) nối các axit amin thành chuỗi polypeptide.'),
    Q('Cấu trúc bậc 1 của protein là?', ['Trình tự axit amin','Xoắn α','Gấp β','Khối cầu'], 0, 'Bậc 1 là trình tự các axit amin trong chuỗi polypeptide.'),
    Q('Cấu trúc bậc 2 thường gặp gồm?', ['Xoắn α và phiến gấp β','Chuỗi thẳng','Khối cầu','Sợi đôi'], 0, 'Bậc 2: xoắn alpha và phiến beta nhờ liên kết hidro.'),
    Q('Khi đun nóng, protein bị?', ['Biến tính','Tăng khối lượng','Phát quang','Đông đá'], 0, 'Nhiệt độ cao phá vỡ liên kết yếu khiến protein biến tính, mất chức năng.'),
    Q('Chức năng chính của protein KHÔNG bao gồm?', ['Xúc tác (enzyme)','Vận chuyển','Cấu trúc','Lưu trữ thông tin di truyền'], 3, 'Lưu trữ thông tin di truyền là nhiệm vụ của ADN, không phải protein.'),
  ]),

  M(6, 'Axit nucleic — ADN và ARN', [
    Q('Đơn phân của axit nucleic là?', ['Nucleotide','Axit amin','Glucose','Lipid'], 0, 'Nucleotide gồm bazơ nitơ + đường 5C + nhóm phosphate.'),
    Q('ADN có cấu trúc?', ['Mạch kép xoắn','Mạch đơn','Vòng tròn','Khối cầu'], 0, 'ADN là chuỗi xoắn kép (double helix) theo mô hình Watson-Crick.'),
    Q('Bazơ nitơ trong ADN gồm?', ['A, T, G, X','A, U, G, X','A, T, G, U','A, U, G, T'], 0, 'ADN: A-T-G-X (X còn gọi là C - cytosine).'),
    Q('ARN khác ADN ở chỗ?', ['Mạch đơn, chứa U thay T','Mạch kép','Chứa T','Không có bazơ'], 0, 'ARN là chuỗi đơn, dùng Uracil (U) thay cho Thymine (T).'),
    Q('Nguyên tắc bổ sung trong ADN?', ['A - T, G - X','A - G, T - X','A - X, T - G','A - A, T - T'], 0, 'A bắt cặp T (2 liên kết H), G bắt cặp X (3 liên kết H).'),
    Q('mARN có vai trò?', ['Truyền thông tin di truyền từ ADN ra ribosome','Cấu trúc','Dự trữ','Chống đông'], 0, 'mARN sao chép thông tin từ ADN, mang ra ribosome để tổng hợp protein.'),
  ]),

  M(7, 'Tế bào nhân sơ', [
    Q('Tế bào nhân sơ điển hình là?', ['Vi khuẩn','Tế bào động vật','Tế bào thực vật','Nấm men'], 0, 'Vi khuẩn (bacteria) là sinh vật có tế bào nhân sơ (prokaryote).'),
    Q('Đặc điểm nào ĐÚNG với tế bào nhân sơ?', ['Chưa có nhân hoàn chỉnh','Có nhân kép','Có ti thể','Có lục lạp'], 0, 'Tế bào nhân sơ chưa có màng nhân; ADN nằm trong vùng nhân.'),
    Q('Tế bào nhân sơ KHÔNG có cấu trúc nào?', ['Bào quan có màng','Ribosome','Màng sinh chất','Tế bào chất'], 0, 'Không có ti thể, lục lạp, bộ Golgi, lưới nội chất.'),
    Q('Thành tế bào vi khuẩn chủ yếu cấu tạo từ?', ['Peptidoglycan','Cellulose','Kitin','Lipid'], 0, 'Thành vi khuẩn gồm peptidoglycan (murein).'),
    Q('Roi (flagellum) ở vi khuẩn dùng để?', ['Di chuyển','Tổng hợp protein','Sinh sản','Tiêu hoá'], 0, 'Roi giúp vi khuẩn vận động trong môi trường lỏng.'),
    Q('Kích thước trung bình tế bào nhân sơ?', ['1-5 μm','100 μm','1 mm','1 cm'], 0, 'Tế bào nhân sơ thường 1-5 μm, nhỏ hơn nhiều so với nhân thực.'),
  ]),

  M(8, 'Tế bào nhân thực — Tổng quan', [
    Q('Tế bào nhân thực có?', ['Nhân hoàn chỉnh có màng','Không có màng','Vùng nhân','Chỉ ribosome'], 0, 'Tế bào nhân thực có nhân được bao bọc bởi màng nhân (kép).'),
    Q('Sinh vật nào sau đây KHÔNG phải nhân thực?', ['Vi khuẩn lao','Cây lúa','Nấm men','Người'], 0, 'Vi khuẩn (Mycobacterium tuberculosis) là nhân sơ.'),
    Q('Tế bào thực vật khác động vật ở chỗ có?', ['Thành cellulose, lục lạp, không bào lớn','Roi','Mỡ','Tinh bột bên ngoài'], 0, 'Tế bào thực vật có thành cellulose, lục lạp và không bào trung tâm lớn.'),
    Q('Bào quan nào tổng hợp protein?', ['Ribosome','Ti thể','Lục lạp','Nhân con'], 0, 'Ribosome là nơi dịch mã - tổng hợp protein.'),
    Q('Bào quan có hệ thống màng đôi gồm?', ['Ti thể và lục lạp','Lysosome','Ribosome','Bộ Golgi'], 0, 'Ti thể và lục lạp đều có màng kép (giả thuyết nội cộng sinh).'),
    Q('Kích thước tế bào nhân thực thường?', ['10-100 μm','0.1 μm','1 mm','1 cm'], 0, 'Tế bào nhân thực thường lớn hơn nhân sơ, khoảng 10-100 μm.'),
  ]),

  M(9, 'Nhân tế bào và Ribosome', [
    Q('Nhân tế bào chứa?', ['ADN','Chỉ ARN','Chỉ protein','Lipid'], 0, 'Nhân chứa phần lớn ADN của tế bào, quyết định thông tin di truyền.'),
    Q('Màng nhân là?', ['Màng kép có lỗ','Màng đơn kín','Không có màng','3 lớp'], 0, 'Màng nhân là màng kép, có các lỗ nhân cho vật chất qua lại.'),
    Q('Nhân con (nucleolus) là nơi?', ['Tổng hợp rARN và ribosome','Phân giải','Hô hấp','Quang hợp'], 0, 'Nhân con tổng hợp rARN và lắp ráp tiểu đơn vị ribosome.'),
    Q('Chất nhiễm sắc (chromatin) gồm?', ['ADN + protein histone','Chỉ ADN','Chỉ ARN','Lipid'], 0, 'Chromatin = ADN + protein histone, đóng xoắn thành nhiễm sắc thể khi phân bào.'),
    Q('Ribosome KHÔNG có ở?', ['Vi khuẩn','Tế bào thực vật','Tế bào động vật','Hồng cầu trưởng thành (người)'], 3, 'Hồng cầu trưởng thành của người mất nhân và ribosome.'),
    Q('Ribosome gồm 2 tiểu đơn vị cấu tạo từ?', ['rARN và protein','ADN','Lipid','Đường'], 0, 'Ribosome cấu tạo từ rARN và protein, hợp thành 2 tiểu đơn vị (lớn và bé).'),
  ]),

  M(10, 'Ti thể và Lục lạp', [
    Q('Ti thể được gọi là?', ['Nhà máy điện của tế bào','Kho lưu trữ','Bộ não','Cơ quan vận động'], 0, 'Ti thể sản xuất ATP — năng lượng chính của tế bào.'),
    Q('Ti thể có cấu trúc?', ['Màng kép + chất nền + crista','Màng đơn','Không có màng','Vô định hình'], 0, 'Ti thể có màng ngoài trơn, màng trong gấp nếp tạo crista, chất nền matrix.'),
    Q('Lục lạp có ở?', ['Tế bào thực vật và tảo','Tế bào động vật','Vi khuẩn','Nấm'], 0, 'Lục lạp chỉ có ở thực vật và một số sinh vật quang hợp.'),
    Q('Sắc tố chính trong lục lạp là?', ['Diệp lục (chlorophyll)','Melanin','Carotene','Hemoglobin'], 0, 'Diệp lục hấp thu ánh sáng cho quang hợp.'),
    Q('Quá trình quang hợp diễn ra tại?', ['Lục lạp','Ti thể','Nhân','Ribosome'], 0, 'Quang hợp diễn ra trên màng thylakoid và trong stroma của lục lạp.'),
    Q('Giả thuyết nội cộng sinh giải thích?', ['Ti thể và lục lạp xuất phát từ vi khuẩn nguyên thuỷ','Tế bào tự sinh','Sinh sản vô tính','Không có ý nghĩa'], 0, 'Giả thuyết Margulis: ti thể, lục lạp vốn là vi khuẩn được tế bào tổ tiên "nuốt" và cộng sinh.'),
  ]),

  M(11, 'Lưới nội chất và Bộ Golgi', [
    Q('Lưới nội chất hạt khác lưới nội chất trơn ở chỗ?', ['Có ribosome bám','Có ADN','Có sắc tố','Không có màng'], 0, 'Lưới nội chất hạt có ribosome bám trên màng — tổng hợp protein.'),
    Q('Lưới nội chất trơn có chức năng?', ['Tổng hợp lipid + khử độc','Tổng hợp protein','Quang hợp','Phân giải'], 0, 'Lưới trơn tổng hợp lipid, chuyển hoá đường, khử độc (gan).'),
    Q('Bộ Golgi (thể Golgi) có vai trò?', ['Đóng gói và phân phối sản phẩm','Hô hấp','Quang hợp','Lưu trữ'], 0, 'Bộ Golgi xử lý, đóng gói protein, lipid và phân phối tới các đích.'),
    Q('Túi tiết (vesicle) di chuyển từ?', ['Lưới nội chất → Golgi → màng sinh chất','Nhân → ti thể','Lục lạp → ribosome','Màng → nhân'], 0, 'Đường đi của túi tiết theo dòng chế tiết: ER → Golgi → màng/ngoại bào.'),
    Q('Lysosome có chức năng?', ['Tiêu hoá nội bào','Tổng hợp protein','Quang hợp','Hô hấp'], 0, 'Lysosome chứa enzyme thuỷ phân, tiêu hoá các bào quan cũ, vật lạ.'),
    Q('Không bào trung tâm ở tế bào thực vật có vai trò?', ['Duy trì áp suất thẩm thấu, dự trữ','Quang hợp','Vận động','Phân bào'], 0, 'Không bào lớn tạo áp suất trương, dự trữ nước và chất.'),
  ]),

  M(12, 'Màng sinh chất', [
    Q('Màng sinh chất có cấu trúc?', ['Khảm động (lipid kép + protein)','Lưới sợi','Rắn chắc','Không có gì'], 0, 'Mô hình khảm động Singer-Nicolson: lớp kép photpholipid + protein khảm.'),
    Q('Lớp kép photpholipid có đặc điểm?', ['Đầu phân cực hướng ra ngoài, đuôi kỵ nước hướng vào trong','Ngược lại','Toàn phân cực','Toàn kỵ nước'], 0, 'Đầu phân cực hướng nước, đuôi kỵ nước quay vào nhau.'),
    Q('Cholesterol trong màng động vật có vai trò?', ['Tăng độ ổn định và linh động vừa phải','Phá huỷ','Tạo lỗ','Mang điện'], 0, 'Cholesterol điều chỉnh độ linh động và ổn định màng.'),
    Q('Protein xuyên màng có thể hoạt động như?', ['Kênh, bơm, thụ thể','Chỉ trang trí','Chỉ chứa nước','Vô tác dụng'], 0, 'Protein màng làm kênh ion, bơm chủ động, thụ thể tín hiệu, vận chuyển.'),
    Q('Glycoprotein trên màng có vai trò?', ['Nhận dạng tế bào','Vận động','Sinh sản','Quang hợp'], 0, 'Glycoprotein (gồm chuỗi đường) giúp các tế bào nhận biết nhau.'),
    Q('Tính chất quan trọng của màng sinh chất?', ['Bán thấm (chọn lọc)','Không thấm gì','Thấm mọi chất','Khô cứng'], 0, 'Màng có tính thấm chọn lọc, kiểm soát chất ra vào tế bào.'),
  ]),

  M(13, 'Vận chuyển thụ động qua màng', [
    Q('Khuếch tán là?', ['Chất di chuyển từ nơi nồng độ cao → thấp','Ngược chiều gradient','Cần ATP','Cần protein'], 0, 'Khuếch tán: phân tử đi xuôi chiều gradient, không tốn ATP.'),
    Q('Thẩm thấu là khuếch tán của?', ['Nước qua màng bán thấm','Đường','Protein','Khí'], 0, 'Thẩm thấu là sự khuếch tán của nước qua màng bán thấm.'),
    Q('Khi tế bào trong môi trường ưu trương, nước sẽ?', ['Đi ra khỏi tế bào','Đi vào tế bào','Đứng yên','Bốc hơi'], 0, 'Môi trường ưu trương nồng độ chất tan cao hơn → nước thoát ra ngoài → tế bào co.'),
    Q('Môi trường nhược trương khiến hồng cầu?', ['Trương lên và có thể vỡ','Co lại','Bình thường','Đông cứng'], 0, 'Môi trường nhược trương → nước tràn vào → hồng cầu phình và vỡ (tan huyết).'),
    Q('Khuếch tán dễ (facilitated diffusion) cần?', ['Protein kênh hoặc mang','Bơm ATP','Endocytosis','Áp suất cao'], 0, 'Khuếch tán dễ thuận chiều gradient, qua kênh/protein mang, không cần ATP.'),
    Q('Đặc điểm chung của vận chuyển thụ động?', ['Không tốn năng lượng ATP','Tốn ATP','Ngược gradient','Cần endocytosis'], 0, 'Vận chuyển thụ động đi xuôi gradient, không tốn ATP.'),
  ]),

  M(14, 'Vận chuyển chủ động và xuất nhập bào', [
    Q('Vận chuyển chủ động là?', ['Đi ngược chiều gradient, cần ATP','Đi xuôi gradient','Tự do','Không cần protein'], 0, 'Vận chuyển chủ động đi ngược chiều gradient nồng độ, tốn ATP.'),
    Q('Ví dụ bơm chủ động là?', ['Bơm Na⁺/K⁺','Khuếch tán O₂','Thẩm thấu','Ngấm muối'], 0, 'Bơm Na⁺/K⁺-ATPase đẩy 3 Na⁺ ra, 2 K⁺ vào, tốn 1 ATP.'),
    Q('Nhập bào (endocytosis) gồm?', ['Thực bào và ẩm bào','Chỉ thực bào','Chỉ tiết','Quang hợp'], 0, 'Endocytosis: phagocytosis (ăn các hạt rắn) và pinocytosis (uống chất lỏng).'),
    Q('Thực bào điển hình ở?', ['Bạch cầu','Hồng cầu','Tế bào lá','Vi khuẩn'], 0, 'Bạch cầu thực bào vi khuẩn, bảo vệ cơ thể.'),
    Q('Xuất bào (exocytosis) là?', ['Đưa chất từ trong ra ngoài tế bào qua túi','Đưa chất từ ngoài vào','Phân chia','Hô hấp'], 0, 'Túi tiết hoà vào màng sinh chất, đẩy chất ra ngoài.'),
    Q('Vận chuyển nào KHÔNG cần protein màng?', ['Khuếch tán đơn của O₂, CO₂','Bơm Na/K','Khuếch tán dễ','Nhập bào'], 0, 'Phân tử nhỏ không cực như O₂, CO₂ khuếch tán trực tiếp qua lớp lipid kép.'),
  ]),

  M(15, 'Trao đổi chất và năng lượng — ATP', [
    Q('ATP là viết tắt của?', ['Adenosine triphosphate','Adenine triphosphate','Acid triphosphate','Amino triphosphate'], 0, 'ATP = Adenosine triphosphate — đồng tiền năng lượng của tế bào.'),
    Q('ATP giải phóng năng lượng khi?', ['Thuỷ phân liên kết phosphate cuối','Tổng hợp','Lưu trữ','Đông cứng'], 0, 'ATP → ADP + Pi giải phóng năng lượng cho hoạt động sống.'),
    Q('ATP được tạo ra chủ yếu ở?', ['Ti thể (qua hô hấp tế bào)','Lục lạp duy nhất','Nhân','Ribosome'], 0, 'Hô hấp tế bào trong ti thể tạo phần lớn ATP cho tế bào nhân thực.'),
    Q('Năng lượng dùng cho hoạt động sống chủ yếu lấy từ?', ['Phân giải chất hữu cơ (hô hấp)','Quang hợp ở mọi sinh vật','Nhiệt môi trường','Áp suất khí quyển'], 0, 'Hô hấp tế bào phân giải glucose để tạo ATP.'),
    Q('Trao đổi chất gồm 2 quá trình ngược nhau là?', ['Đồng hoá và dị hoá','Hô hấp và quang hợp','Sinh sản và phân chia','Sinh trưởng và phát triển'], 0, 'Đồng hoá: tổng hợp chất; Dị hoá: phân giải chất.'),
    Q('Phương trình đốt cháy glucose hoàn toàn?', ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + năng lượng','C₆H₁₂O₆ → 6CO₂','6CO₂ → C₆H₁₂O₆','H₂O → O₂'], 0, 'Hô hấp hiếu khí: oxy hoá hoàn toàn glucose tạo CO₂, H₂O và ATP.'),
  ]),

  M(16, 'Enzyme', [
    Q('Enzyme có bản chất chủ yếu là?', ['Protein','Lipid','Cacbohydrat','Axit nucleic'], 0, 'Đa số enzyme là protein, một số là ARN (ribozyme).'),
    Q('Enzyme hoạt động bằng cách?', ['Giảm năng lượng hoạt hoá','Tăng năng lượng hoạt hoá','Phá vỡ cơ chất','Không ảnh hưởng'], 0, 'Enzyme xúc tác bằng cách hạ năng lượng hoạt hoá, tăng tốc phản ứng.'),
    Q('Tính đặc hiệu của enzyme thể hiện qua?', ['Trung tâm hoạt động khớp với cơ chất','Toàn bộ enzyme','Vị trí ngẫu nhiên','Không có'], 0, 'Trung tâm hoạt động có cấu hình khớp riêng với từng cơ chất.'),
    Q('Yếu tố nào ảnh hưởng hoạt tính enzyme?', ['Nhiệt độ, pH, nồng độ cơ chất','Chỉ ánh sáng','Chỉ áp suất','Chỉ trọng lực'], 0, 'Nhiệt, pH, nồng độ cơ chất và chất ức chế đều ảnh hưởng tới enzyme.'),
    Q('Nhiệt độ tối ưu enzyme người khoảng?', ['37°C','0°C','100°C','-10°C'], 0, 'Đa số enzyme người hoạt động tốt nhất quanh 37°C.'),
    Q('Ức chế cạnh tranh là?', ['Chất giống cơ chất chiếm trung tâm hoạt động','Bám ngoài enzyme','Phá huỷ enzyme','Tăng nhiệt'], 0, 'Chất ức chế cạnh tranh tranh giành vị trí gắn cơ chất.'),
  ]),

  M(17, 'Hô hấp tế bào', [
    Q('Hô hấp tế bào là quá trình?', ['Phân giải chất hữu cơ → ATP','Tổng hợp chất hữu cơ','Tạo ánh sáng','Hấp thu nước'], 0, 'Hô hấp tế bào oxy hoá chất hữu cơ thành CO₂ và H₂O, giải phóng ATP.'),
    Q('Hô hấp hiếu khí gồm các giai đoạn?', ['Đường phân → chu trình Krebs → chuỗi vận chuyển electron','Chỉ Krebs','Chỉ quang hợp','Chỉ glycolysis'], 0, 'Giai đoạn: đường phân (bào tương) → Krebs + chuỗi e⁻ (ti thể).'),
    Q('Đường phân (glycolysis) diễn ra ở?', ['Bào tương (cytosol)','Ti thể','Nhân','Lục lạp'], 0, 'Glycolysis xảy ra trong bào tương, không cần oxy.'),
    Q('Chu trình Krebs diễn ra ở?', ['Chất nền ti thể (matrix)','Bào tương','Nhân','Lưới nội chất'], 0, 'Chu trình Krebs (citric acid cycle) xảy ra ở matrix ti thể.'),
    Q('Chuỗi vận chuyển electron tạo nhiều ATP nhất, ở?', ['Màng trong ti thể','Bào tương','Nhân','Màng ngoài'], 0, 'Chuỗi vận chuyển e⁻ và ATP-synthase nằm trên màng trong ti thể.'),
    Q('Hô hấp hiếu khí 1 glucose tạo khoảng?', ['30-32 ATP','2 ATP','100 ATP','0 ATP'], 0, 'Hô hấp hiếu khí 1 phân tử glucose tạo khoảng 30-32 ATP (tổng).'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Đơn vị cơ bản của sự sống là?', ['Tế bào','Nguyên tử','Phân tử','Cơ quan'], 0, 'Tế bào là đơn vị nhỏ nhất có đầy đủ đặc tính sự sống.'),
    Q('4 nguyên tố chính của sự sống?', ['C, H, O, N','Fe, Cu, Zn, Mn','Na, K, Ca, Cl','Si, P, S, Cl'], 0, 'C, H, O, N tạo nên đại phân tử hữu cơ.'),
    Q('Bào quan tạo ATP chính ở tế bào nhân thực?', ['Ti thể','Lục lạp','Nhân','Ribosome'], 0, 'Ti thể là nơi diễn ra Krebs và chuỗi e⁻ tạo ATP.'),
    Q('Tế bào thực vật khác động vật chủ yếu nhờ?', ['Thành cellulose, lục lạp, không bào lớn','Roi','Lông','Nhung mao'], 0, 'Thành tế bào, lục lạp và không bào trung tâm là đặc trưng tế bào thực vật.'),
    Q('Vận chuyển ngược gradient cần?', ['ATP','Không cần gì','Chỉ áp suất','Chỉ nhiệt độ'], 0, 'Vận chuyển chủ động ngược gradient luôn cần ATP.'),
    Q('Enzyme bị ảnh hưởng bởi?', ['Nhiệt độ, pH, chất ức chế','Chỉ trọng lực','Chỉ ánh sáng','Không gì'], 0, 'Hoạt tính enzyme phụ thuộc nhiều yếu tố môi trường.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Quang hợp ở thực vật', [
    Q('Quang hợp là quá trình?', ['Tổng hợp chất hữu cơ từ CO₂ và H₂O nhờ ánh sáng','Phân giải chất hữu cơ','Hô hấp','Bài tiết'], 0, 'Quang hợp dùng ánh sáng để tổng hợp glucose từ CO₂ và H₂O.'),
    Q('Phương trình tổng quát quang hợp?', ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂','C₆H₁₂O₆ → 6CO₂','H₂O → O₂','CO₂ → C'], 0, 'Quang hợp hiếu khí: 6CO₂ + 6H₂O + ánh sáng → C₆H₁₂O₆ + 6O₂.'),
    Q('Quang hợp gồm 2 pha?', ['Pha sáng và pha tối','Đường phân và Krebs','Hấp thu và bài tiết','Co và giãn'], 0, 'Pha sáng (thylakoid) và pha tối/Calvin (stroma).'),
    Q('Pha sáng diễn ra ở?', ['Màng thylakoid của lục lạp','Bào tương','Ti thể','Nhân'], 0, 'Pha sáng xảy ra trên màng thylakoid trong lục lạp.'),
    Q('Sản phẩm pha sáng là?', ['ATP, NADPH, O₂','Glucose','CO₂','Nước'], 0, 'Pha sáng tạo ATP, NADPH (dùng cho pha tối) và O₂ (thải ra).'),
    Q('Pha tối (chu trình Calvin) cố định?', ['CO₂ thành đường','O₂ thành nước','N₂ thành amin','Ánh sáng'], 0, 'Calvin cycle dùng ATP, NADPH để khử CO₂ thành G3P → glucose.'),
  ]),

  M(20, 'Chu kỳ tế bào — Nguyên phân (phần 1)', [
    Q('Chu kỳ tế bào gồm?', ['Kì trung gian + nguyên phân','Chỉ phân chia','Chỉ nghỉ','Chỉ chết'], 0, 'Cycle gồm interphase (G1-S-G2) + mitosis (M).'),
    Q('Pha S của kì trung gian diễn ra?', ['Sao chép ADN','Phân chia','Hô hấp','Tổng hợp lipid'], 0, 'Pha S (Synthesis): ADN được nhân đôi.'),
    Q('Nguyên phân chia thành mấy kì?', ['4 kì','2 kì','6 kì','10 kì'], 0, 'Nguyên phân: kì đầu, kì giữa, kì sau, kì cuối.'),
    Q('Ở kì giữa, nhiễm sắc thể?', ['Xếp 1 hàng ở mặt phẳng xích đạo','Xếp 2 hàng','Phân tán','Tan rã'], 0, 'Kì giữa NST kép xếp 1 hàng tại mặt phẳng xích đạo.'),
    Q('Ở kì sau, NST?', ['Tách nhau và đi về 2 cực','Đứng yên','Nhân đôi','Tan biến'], 0, 'Kì sau (anaphase): 2 cromatit tách nhau, mỗi cromatit đi về 1 cực.'),
    Q('Kết quả 1 lần nguyên phân từ 1 tế bào mẹ?', ['2 tế bào con giống mẹ về bộ NST','4 tế bào','1 tế bào','8 tế bào'], 0, 'Nguyên phân: 1 tế bào → 2 tế bào con giống hệt mẹ (2n).'),
  ]),

  M(21, 'Nguyên phân (phần 2) — Ý nghĩa', [
    Q('Nguyên phân duy trì?', ['Bộ NST 2n qua các thế hệ tế bào','Số lượng giảm dần','Đột biến','Sinh sản hữu tính'], 0, 'Nguyên phân giữ ổn định bộ NST 2n trong cơ thể đa bào.'),
    Q('Nguyên phân giúp cơ thể?', ['Sinh trưởng, tái sinh, thay tế bào chết','Sinh sản hữu tính','Đột biến','Già đi'], 0, 'Nguyên phân giúp lớn lên, hàn vết thương, thay thế tế bào già.'),
    Q('Ở sinh vật đơn bào, nguyên phân là?', ['Hình thức sinh sản vô tính','Sinh sản hữu tính','Trao đổi chất','Hô hấp'], 0, 'Sinh sản vô tính ở amip, vi khuẩn (phân đôi tương tự).'),
    Q('Rối loạn chu kỳ tế bào có thể dẫn tới?', ['Ung thư','Sinh sản','Sinh trưởng đều','Bất tử lành tính'], 0, 'Mất kiểm soát chu kỳ tế bào là cơ chế phát sinh ung thư.'),
    Q('Kiểm soát chu kỳ tế bào ở các điểm?', ['G1/S, G2/M, mặt phẳng xích đạo','Chỉ 1 điểm','Không có','Mọi lúc'], 0, 'Các checkpoint kiểm soát ADN, môi trường và thoi vô sắc.'),
    Q('Cytokinesis ở tế bào động vật xảy ra nhờ?', ['Eo thắt do vi sợi','Tạo vách phenpragmoplast','Phân đôi nhân','Tế bào chết'], 0, 'Tế bào động vật thắt eo nhờ vòng actin/myosin.'),
  ]),

  M(22, 'Giảm phân (phần 1)', [
    Q('Giảm phân xảy ra ở?', ['Tế bào sinh dục chín','Tế bào soma','Mọi tế bào','Hồng cầu'], 0, 'Giảm phân diễn ra ở tế bào sinh dục (sinh tinh, sinh trứng).'),
    Q('Giảm phân gồm?', ['2 lần phân bào liên tiếp','1 lần','3 lần','4 lần'], 0, 'Giảm phân I và giảm phân II (chỉ 1 lần nhân đôi ADN trước GP I).'),
    Q('Kết quả giảm phân từ 1 tế bào mẹ 2n?', ['4 tế bào con n','2 tế bào 2n','1 tế bào 4n','8 tế bào n'], 0, 'Một tế bào 2n qua giảm phân tạo 4 tế bào n (đơn bội).'),
    Q('Giảm phân I là?', ['Phân chia giảm nhiễm (2n → n)','Phân chia nguyên nhiễm','Phân đôi','Phân nhân con'], 0, 'GP I là phân chia giảm nhiễm: 2n cặp NST tương đồng tách nhau.'),
    Q('Trao đổi chéo (crossing-over) xảy ra ở?', ['Kì đầu giảm phân I','Kì sau giảm phân II','Kì cuối','Kì trung gian'], 0, 'Crossing-over xảy ra giữa các NST tương đồng ở kì đầu GP I.'),
    Q('Giảm phân II giống?', ['Nguyên phân (chia cromatit)','Giảm phân I','Hô hấp','Quang hợp'], 0, 'GP II tách cromatit như nguyên phân, cho 2 tế bào n từ 1 tế bào n.'),
  ]),

  M(23, 'Giảm phân (phần 2) — Ý nghĩa', [
    Q('Giảm phân kết hợp với thụ tinh tạo ra?', ['Sự đa dạng di truyền','Bản sao y hệt','Sinh sản vô tính','Vô sinh'], 0, 'Trao đổi chéo, phân ly độc lập và thụ tinh tạo đa dạng di truyền.'),
    Q('Phân ly độc lập của các cặp NST xảy ra ở?', ['Kì sau giảm phân I','Kì đầu','Kì trung gian','Hô hấp'], 0, 'Các cặp NST tương đồng phân ly độc lập về 2 cực ở kì sau GP I.'),
    Q('Thụ tinh giữa giao tử n và n tạo ra?', ['Hợp tử 2n','Hợp tử n','Hợp tử 3n','Tế bào sinh dưỡng'], 0, 'Thụ tinh khôi phục bộ 2n trong hợp tử.'),
    Q('Sinh sản hữu tính tạo nhiều biến dị hơn vô tính vì?', ['Có giảm phân + thụ tinh','Không có gì','Ít tốn ATP','Đột biến nhiều'], 0, 'Giảm phân và thụ tinh tổ hợp gen tạo đa dạng di truyền.'),
    Q('Nếu giảm phân không bình thường có thể tạo?', ['Đột biến số lượng NST','Tế bào bất tử','Sinh sản','Bệnh truyền nhiễm'], 0, 'Rối loạn giảm phân tạo giao tử thừa/thiếu NST, gây hội chứng Down, Turner...'),
    Q('Ở người, bộ NST 2n =', ['46','23','48','44'], 0, 'Người có 2n = 46 NST (23 cặp).'),
  ]),

  M(24, 'Công nghệ tế bào', [
    Q('Công nghệ tế bào là?', ['Ứng dụng nuôi cấy mô, tế bào để tạo sản phẩm','Sinh sản tự nhiên','Hô hấp','Vận động'], 0, 'Công nghệ tế bào dùng nuôi cấy tế bào/mô để nhân giống, tạo dòng.'),
    Q('Nuôi cấy mô thực vật KHÔNG dùng để?', ['Đốt rừng','Nhân giống nhanh','Tạo cây sạch bệnh','Bảo tồn nguồn gen'], 0, 'Nuôi cấy mô giúp nhân nhanh giống, không gây phá rừng.'),
    Q('Nhân bản vô tính động vật nổi tiếng là?', ['Cừu Dolly','Bò','Lợn','Gà'], 0, 'Cừu Dolly (1996) là động vật nhân bản đầu tiên từ tế bào trưởng thành.'),
    Q('Tế bào gốc (stem cell) có khả năng?', ['Biệt hoá thành nhiều loại tế bào','Chỉ chết','Chỉ phân chia 1 lần','Không phân chia'], 0, 'Tế bào gốc có khả năng tự đổi mới và biệt hoá thành các loại tế bào khác.'),
    Q('Ứng dụng tế bào gốc trong y học để?', ['Chữa bệnh thoái hoá, ghép mô','Tăng cân','Tăng chiều cao bằng nhiệt','Tạo nhựa'], 0, 'Tế bào gốc dùng trong điều trị bệnh máu, thoái hoá thần kinh, ghép mô.'),
    Q('Tế bào gốc phôi khác tế bào gốc trưởng thành ở?', ['Khả năng biệt hoá rộng hơn','Không khác','Chỉ chia 1 lần','Không phân chia'], 0, 'Stem cell phôi là pluripotent — biệt hoá rộng; trưởng thành chỉ multipotent.'),
  ]),

  M(25, 'Vi sinh vật — Khái niệm chung', [
    Q('Vi sinh vật là?', ['Sinh vật nhỏ, thường phải quan sát qua kính hiển vi','Sinh vật lớn','Vô tri','Chỉ vi khuẩn'], 0, 'Vi sinh vật: vi khuẩn, virus, nấm men, tảo đơn bào, nguyên sinh động vật.'),
    Q('Đặc điểm chung của vi sinh vật?', ['Kích thước nhỏ, sinh trưởng nhanh, phân bố rộng','Chỉ ở biển','Chỉ ở rừng','Không sinh sản'], 0, 'Vi sinh vật nhỏ, sinh sản nhanh, sống ở hầu hết môi trường.'),
    Q('Vi sinh vật KHÔNG bao gồm?', ['Cá voi','Vi khuẩn','Nấm men','Virus'], 0, 'Cá voi là động vật lớn, không phải vi sinh vật.'),
    Q('Vi sinh vật quang tự dưỡng dùng?', ['Ánh sáng làm năng lượng, CO₂ làm carbon','Chất hữu cơ','Khí methan','Chỉ nhiệt'], 0, 'Quang tự dưỡng: dùng ánh sáng + CO₂ (vd vi khuẩn lam).'),
    Q('Vi sinh vật hoá dị dưỡng dùng?', ['Chất hữu cơ làm năng lượng và carbon','Ánh sáng','Đá vô cơ','Chỉ nước'], 0, 'Hoá dị dưỡng: lấy năng lượng và C từ chất hữu cơ.'),
    Q('Phương pháp nghiên cứu vi sinh vật chủ yếu?', ['Nuôi cấy trên môi trường vô trùng','Quan sát mắt thường','Ngửi mùi','Sờ tay'], 0, 'Nuôi cấy trên môi trường vô trùng + soi kính hiển vi.'),
  ]),

  M(26, 'Sinh trưởng của vi sinh vật', [
    Q('Sinh trưởng của vi khuẩn được hiểu là?', ['Tăng số lượng tế bào','Tăng kích thước cá thể','Bài tiết','Hô hấp'], 0, 'Vi khuẩn sinh trưởng = tăng số lượng tế bào qua phân đôi.'),
    Q('Trong nuôi cấy không liên tục, đường cong sinh trưởng có?', ['4 pha (tiềm phát, lũy thừa, ổn định, suy vong)','1 pha','7 pha','Không có pha'], 0, '4 pha: lag, log, stationary, death.'),
    Q('Pha luỹ thừa (log) đặc trưng bởi?', ['Tốc độ sinh sản cực đại','Đứng yên','Suy vong','Chỉ thở'], 0, 'Pha log: vi khuẩn phân chia rất nhanh, số lượng tăng theo hàm mũ.'),
    Q('Pha ổn định xảy ra do?', ['Cạn dinh dưỡng, chất độc tích lũy','Ánh sáng mặt trời','Thiếu nước duy nhất','Nhiệt cao'], 0, 'Ổn định khi sinh = chết do tài nguyên cạn và chất thải tích lũy.'),
    Q('Trong nuôi cấy liên tục, vi sinh vật được?', ['Cung cấp dinh dưỡng và loại chất thải liên tục','Bỏ đói','Sấy khô','Đông lạnh'], 0, 'Nuôi cấy liên tục giữ vi sinh vật ở pha log lâu dài.'),
    Q('Thời gian thế hệ là?', ['Thời gian số lượng tế bào tăng gấp đôi','Tuổi thọ','Thời gian chết','Chu kỳ ngày-đêm'], 0, 'Generation time = thời gian để quần thể vi khuẩn nhân đôi.'),
  ]),

  M(27, 'Các yếu tố ảnh hưởng đến sinh trưởng vi sinh vật', [
    Q('Yếu tố hoá học ảnh hưởng vi sinh vật gồm?', ['Dinh dưỡng, pH, chất ức chế','Chỉ trọng lực','Chỉ âm thanh','Chỉ điện'], 0, 'Dinh dưỡng C, N, P, S; pH; chất ức chế là yếu tố hoá học.'),
    Q('Theo nhiệt độ, vi sinh vật ưa ấm (mesophile) thích?', ['20-45°C','-10°C','100°C','60°C trở lên'], 0, 'Mesophile thích 20-45°C; đa số vi khuẩn gây bệnh thuộc nhóm này.'),
    Q('Vi sinh vật ưa nóng (thermophile) sống ở?', ['Suối nước nóng, >50°C','Băng tuyết','Đáy đại dương lạnh','Nước thường'], 0, 'Thermophile sống ở suối nước nóng, có thể tới 80°C+.'),
    Q('pH thích hợp cho phần lớn vi khuẩn?', ['Trung tính 6-8','pH 1','pH 14','pH 3 luôn'], 0, 'Đa số vi khuẩn ưa trung tính; nấm men/mốc ưa hơi acid.'),
    Q('Chất kháng sinh (antibiotic) tác động lên vi khuẩn bằng cách?', ['Ức chế tổng hợp thành tế bào, protein, ADN','Tăng dinh dưỡng','Tạo ATP','Sinh sản'], 0, 'Kháng sinh phá vỡ thành (penicillin), tổng hợp protein (streptomycin)...'),
    Q('Khử trùng bằng nhiệt cao thường dùng?', ['Nồi hấp 121°C','Tủ lạnh','Nhiệt độ phòng','Đông lạnh'], 0, 'Nồi hấp autoclave 121°C, 1 atm tiêu diệt mọi vi sinh vật.'),
  ]),

  M(28, 'Ứng dụng vi sinh vật trong đời sống', [
    Q('Lên men lactic dùng làm?', ['Sữa chua, dưa muối','Bia rượu','Mì sợi','Nước ngọt'], 0, 'Vi khuẩn lactic chuyển hoá đường thành acid lactic — làm sữa chua, dưa.'),
    Q('Lên men ethanol dùng?', ['Nấm men Saccharomyces','Vi khuẩn lactic','Tảo','Nấm mốc'], 0, 'Nấm men Saccharomyces cerevisiae lên men đường thành ethanol + CO₂.'),
    Q('Sản xuất giấm dùng?', ['Vi khuẩn acetic','Nấm men','Tảo lam','Virus'], 0, 'Vi khuẩn Acetobacter oxy hoá ethanol thành acid acetic (giấm).'),
    Q('Kháng sinh penicillin thu được từ?', ['Nấm Penicillium','Vi khuẩn','Tảo','Động vật'], 0, 'Fleming (1928) phát hiện penicillin từ nấm Penicillium.'),
    Q('Vi sinh vật xử lý nước thải bằng cách?', ['Phân giải chất hữu cơ','Tạo bùn cứng','Bốc hơi','Đông lạnh'], 0, 'Vi sinh vật phân huỷ chất hữu cơ thành CO₂ và sinh khối.'),
    Q('Sản xuất thuốc trừ sâu sinh học sử dụng?', ['Vi khuẩn Bacillus thuringiensis (Bt)','Glyphosate','DDT','Atrazine'], 0, 'Bt tiết độc tố diệt sâu, an toàn với người và môi trường hơn hoá chất.'),
  ]),

  M(29, 'Virus — Khái niệm và đặc điểm', [
    Q('Virus có cấu tạo gồm?', ['Vỏ protein + lõi axit nucleic','Tế bào hoàn chỉnh','Chỉ ADN','Chỉ protein'], 0, 'Virus đơn giản: capsid (vỏ protein) + lõi ADN hoặc ARN.'),
    Q('Virus là dạng sống đặc biệt vì?', ['Không có cấu tạo tế bào, kí sinh nội bào bắt buộc','Sống tự do','Sinh sản như vi khuẩn','Có ti thể'], 0, 'Virus không phải tế bào, chỉ nhân lên trong tế bào chủ.'),
    Q('Lõi virus chứa?', ['ADN hoặc ARN (không có cả hai)','Cả ADN và ARN cùng lúc','Protein','Lipid'], 0, 'Mỗi virus chỉ có 1 loại axit nucleic: ADN hoặc ARN.'),
    Q('Một số virus có thêm vỏ ngoài gọi là?', ['Envelope (vỏ lipid)','Capsid','Thành','Vách'], 0, 'Một số virus có vỏ ngoài lipid lấy từ màng tế bào chủ.'),
    Q('Virus chỉ nhân lên được khi?', ['Xâm nhập vào tế bào sống','Đặt trên môi trường nuôi cấy','Ngoài không khí','Trong tủ lạnh'], 0, 'Virus là kí sinh nội bào bắt buộc, không nhân lên ngoài tế bào sống.'),
    Q('Ai khám phá virus đầu tiên?', ['Ivanovsky (1892)','Mendel','Newton','Darwin'], 0, 'Ivanovsky phát hiện tác nhân nhỏ hơn vi khuẩn ở cây thuốc lá.'),
  ]),

  M(30, 'Chu trình nhân lên của virus', [
    Q('Chu trình nhân lên virus gồm các bước?', ['Bám → xâm nhập → tổng hợp → lắp ráp → giải phóng','Chỉ nhân đôi','Chỉ bám','Chỉ thoát'], 0, '5 giai đoạn: bám, xâm nhập, tổng hợp, lắp ráp, phóng thích.'),
    Q('Virus bám vào tế bào nhờ?', ['Thụ thể đặc hiệu trên màng tế bào chủ','Bám ngẫu nhiên','Lực hút','Tự chui qua'], 0, 'Gai virus khớp với thụ thể đặc hiệu của tế bào chủ.'),
    Q('Tính đặc hiệu của virus dựa vào?', ['Tương khớp gai - thụ thể','Kích thước','Màu sắc','Nhiệt độ'], 0, 'Sự khớp giữa gai virus và thụ thể tế bào quy định loại tế bào nhiễm được.'),
    Q('Chu trình tan (lytic) khác chu trình tiềm tan (lysogenic) ở?', ['Tan phá tế bào ngay, không gài ADN','Không khác','Chỉ ở virus thực vật','Không lây lan'], 0, 'Lytic: phá tế bào nhanh; Lysogenic: gài genome vào ADN chủ, tiềm ẩn.'),
    Q('HIV thuộc loại virus?', ['Retrovirus (ARN, có enzyme phiên mã ngược)','Bacteriophage','Virus thực vật','Vi khuẩn'], 0, 'HIV là retrovirus ARN, dùng reverse transcriptase tạo cDNA gài vào genome người.'),
    Q('Bacteriophage là virus?', ['Kí sinh trên vi khuẩn','Trên thực vật','Trên động vật','Trên nấm'], 0, 'Bacteriophage là virus tấn công vi khuẩn — dùng nhiều trong nghiên cứu.'),
  ]),

  M(31, 'Bệnh do virus và phòng chống', [
    Q('Bệnh do virus ở người KHÔNG bao gồm?', ['Lao phổi','Cúm','COVID-19','Sởi'], 0, 'Lao do vi khuẩn Mycobacterium tuberculosis, không phải virus.'),
    Q('HIV/AIDS lây qua đường?', ['Máu, tình dục, mẹ con','Không khí','Nước uống','Tiếp xúc thông thường'], 0, 'HIV không lây qua tiếp xúc thông thường, chỉ qua dịch cơ thể.'),
    Q('Phòng bệnh virus tốt nhất bằng?', ['Vắc-xin','Kháng sinh','Vitamin C','Cảm cúm'], 0, 'Vắc-xin là biện pháp phòng bệnh virus hiệu quả nhất.'),
    Q('Vắc-xin hoạt động bằng cách?', ['Kích thích hệ miễn dịch tạo kháng thể','Diệt virus trực tiếp','Cho ADN','Cho hormone'], 0, 'Vắc-xin chứa kháng nguyên giúp cơ thể "tập dượt" miễn dịch.'),
    Q('SARS-CoV-2 thuộc nhóm virus?', ['Coronavirus (ARN)','Vi khuẩn','Nấm','Tảo'], 0, 'SARS-CoV-2 là coronavirus ARN có vỏ ngoài, gây COVID-19.'),
    Q('Cách phòng bệnh hô hấp do virus hiệu quả?', ['Đeo khẩu trang + rửa tay + tiêm vắc-xin','Uống nước nóng','Phơi nắng cả ngày','Ăn cay'], 0, 'Khẩu trang, vệ sinh và vắc-xin là các biện pháp phòng dịch chính.'),
  ]),

  M(32, 'Ứng dụng virus và miễn dịch', [
    Q('Virus được ứng dụng trong?', ['Sản xuất vắc-xin, liệu pháp gen, kiểm soát côn trùng','Chỉ gây bệnh','Không có ứng dụng','Làm thực phẩm'], 0, 'Virus dùng trong vắc-xin sống giảm độc lực, liệu pháp gen, sinh học phân tử.'),
    Q('Liệu pháp gen là?', ['Đưa gen lành vào tế bào để chữa bệnh','Cấy ghép tạng','Tiêm vitamin','Châm cứu'], 0, 'Gene therapy dùng virus làm vector để chuyển gen điều trị vào tế bào.'),
    Q('Hệ miễn dịch không đặc hiệu gồm?', ['Da, niêm mạc, thực bào','Kháng thể','Tế bào B','Tế bào T'], 0, 'Hàng rào không đặc hiệu: da, niêm mạc, dịch tiết, bạch cầu thực bào.'),
    Q('Miễn dịch đặc hiệu chủ yếu dựa vào?', ['Tế bào lympho B và T','Da','Niêm mạc','Mồ hôi'], 0, 'Lympho B tạo kháng thể; lympho T tiêu diệt tế bào nhiễm.'),
    Q('Kháng thể là?', ['Protein nhận diện và bám đặc hiệu kháng nguyên','Lipid','Đường','ADN'], 0, 'Kháng thể (immunoglobulin) là protein đặc hiệu với từng kháng nguyên.'),
    Q('Trí nhớ miễn dịch giúp?', ['Phản ứng nhanh và mạnh hơn khi gặp lại kháng nguyên','Quên kháng nguyên','Tăng cân','Giảm bệnh'], 0, 'Tế bào nhớ giúp đáp ứng nhanh hơn lần nhiễm sau — cơ sở của vắc-xin.'),
  ]),

  M(33, 'Bệnh truyền nhiễm và an toàn sinh học', [
    Q('Bệnh truyền nhiễm là?', ['Bệnh do vi sinh vật gây ra và lây lan','Bệnh di truyền','Bệnh do thiếu hụt vitamin','Bệnh chấn thương'], 0, 'Bệnh truyền nhiễm do vi sinh vật (vi khuẩn, virus, nấm, ký sinh trùng).'),
    Q('Đường lây truyền KHÔNG bao gồm?', ['Di truyền qua gen','Không khí','Tiêu hoá','Tiếp xúc'], 0, 'Bệnh truyền nhiễm lây qua đường ngoài, không phải qua gen di truyền.'),
    Q('5K phòng dịch là?', ['Khẩu trang - Khử khuẩn - Khoảng cách - Không tụ tập - Khai báo y tế','5 loại vitamin','5 mức nhiệt','5 vùng'], 0, 'Bộ Y tế VN khuyến nghị 5K phòng COVID-19.'),
    Q('An toàn sinh học (biosafety) là?', ['Biện pháp bảo vệ con người và môi trường khỏi tác nhân sinh học nguy hiểm','Bảo vệ thực vật','Tăng năng suất','Trang điểm'], 0, 'Biosafety bảo vệ con người, môi trường khỏi tác nhân vi sinh nguy hiểm.'),
    Q('Phòng thí nghiệm vi sinh cần?', ['Tủ an toàn sinh học, đồ bảo hộ','Mở cửa thông thoáng','Ăn uống tự do','Không cần khử trùng'], 0, 'BSC, găng tay, áo blouse và khử trùng là yêu cầu cơ bản.'),
    Q('Khi đổ mẫu vi sinh ra bàn cần?', ['Khử trùng ngay bằng chất sát khuẩn','Lau bằng khăn ướt','Bỏ qua','Hong khô'], 0, 'Phải khử trùng ngay bằng cồn 70% hoặc chloramine để diệt khuẩn.'),
  ]),

  M(34, 'Sinh học và xã hội', [
    Q('Đạo đức sinh học (bioethics) đặt vấn đề gì với kỹ thuật chỉnh sửa gen?', ['Tính an toàn, công bằng, tôn trọng con người','Tăng năng suất','Tăng giá thành','Tăng tốc độ'], 0, 'Bioethics xét tới an toàn, đồng thuận, công bằng khi chỉnh sửa gen.'),
    Q('GMO là?', ['Sinh vật biến đổi gen','Hoá chất','Phân bón','Côn trùng'], 0, 'GMO = Genetically Modified Organism — sinh vật biến đổi gen.'),
    Q('Ưu điểm cây trồng GMO?', ['Năng suất cao, chống sâu bệnh','Luôn hại sức khoẻ','Không đẻ hạt','Chỉ trồng được ở sa mạc'], 0, 'GMO có thể tăng năng suất, kháng sâu bệnh, chịu hạn.'),
    Q('Nguyên tắc nghiên cứu khoa học cần?', ['Trung thực, khách quan, có đạo đức','Bí mật mọi thứ','Giấu kết quả','Bịa số liệu'], 0, 'Trung thực và đạo đức là yêu cầu cốt lõi của nghiên cứu khoa học.'),
    Q('Phát triển bền vững trong sinh học cần?', ['Bảo tồn đa dạng sinh học + sử dụng tài nguyên hợp lý','Khai thác cạn kiệt','Phá rừng','Săn bắn'], 0, 'Phát triển bền vững cân bằng sinh thái, kinh tế và xã hội.'),
    Q('Nghề nghiệp liên quan sinh học có thể là?', ['Bác sĩ, nhà nông học, công nghệ sinh học','Kế toán','Lái xe','Kiến trúc sư'], 0, 'Sinh học mở ra y dược, nông nghiệp, môi trường, công nghệ sinh học.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Đơn vị cấu trúc và chức năng của sự sống là?', ['Tế bào','Phân tử','Cơ thể','Sinh quyển'], 0, 'Tế bào là đơn vị cơ bản của mọi sinh vật.'),
    Q('Bào quan tạo ATP chính ở tế bào nhân thực?', ['Ti thể','Lục lạp','Nhân','Lưới nội chất'], 0, 'Ti thể tiến hành hô hấp, tạo phần lớn ATP.'),
    Q('Quang hợp tạo ra?', ['Glucose và O₂','CO₂ và nước','Protein','ADN'], 0, 'Quang hợp tổng hợp glucose từ CO₂ và H₂O, giải phóng O₂.'),
    Q('Giảm phân tạo ra?', ['Giao tử n','Tế bào 2n','Tế bào 4n','Tế bào không nhân'], 0, 'Giảm phân tạo giao tử đơn bội (n) từ tế bào lưỡng bội (2n).'),
    Q('Virus khác vi khuẩn ở chỗ?', ['Không có cấu tạo tế bào','Có nhân','Sống tự do','Có ti thể'], 0, 'Virus không có cấu tạo tế bào, phải kí sinh nội bào bắt buộc.'),
    Q('Phòng bệnh do virus tốt nhất bằng?', ['Vắc-xin','Kháng sinh','Vitamin','Phơi nắng'], 0, 'Vắc-xin là biện pháp hiệu quả nhất với virus.'),
  ]),
];

export const H10SINH_SCENARIOS = indexBy(H10SINH_WEEKS);
