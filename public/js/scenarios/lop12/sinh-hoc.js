// ============================================================
// Lớp 12 · SINH HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Kết nối tri thức) + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12SINH-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12SINH', 'sinh-hoc', n, title, qs, opts);

export const H12SINH_WEEKS = [
  // ──────────────── HK1 — Di truyền học ────────────────
  M(1, 'DNA và quá trình tái bản DNA', [
    Q('Đơn phân cấu tạo DNA là?', ['Nucleotide (A, T, G, C)', 'Amino acid', 'Ribonucleotide (A, U, G, C)', 'Monosaccharide'], 0, 'DNA gồm 4 loại nucleotide: A, T, G, C.'),
    Q('Liên kết giữa hai mạch DNA là?', ['Liên kết peptide', 'Liên kết hydrogen giữa các base bổ sung (A-T, G-C)', 'Liên kết phosphodiester', 'Liên kết ion'], 1, 'A=T (2 H-bond), G≡C (3 H-bond).'),
    Q('Tái bản DNA theo nguyên tắc?', ['Bảo toàn hoàn toàn', 'Phân tán', 'Bán bảo toàn (semi-conservative)', 'Tổng hợp mới hoàn toàn'], 2, 'Mỗi DNA con có 1 mạch gốc + 1 mạch mới.'),
    Q('Enzyme nào tổng hợp mạch DNA mới?', ['Helicase', 'RNA polymerase', 'Ligase', 'DNA polymerase'], 3, 'DNA polymerase kéo dài mạch theo chiều 5\'→3\'.'),
    Q('Một gene có 2400 nucleotide, số chu kì xoắn?', ['120 (mỗi chu kì 20 nu = 10 cặp)', '100', '240', '60'], 0, '2400 / 20 = 120 chu kì xoắn.'),
    Q('Gene có 3000 nu, A = 600. Số nucleotide loại G?', ['600', '900', '1200', '1500'], 1, 'A+G = 1500 → G = 1500 - 600 = 900.'),
  ]),

  M(2, 'Gene và quá trình truyền đạt thông tin di truyền', [
    Q('Gene là?', ['Một đoạn nhiễm sắc thể', 'Toàn bộ DNA của tế bào', 'Một đoạn DNA mang thông tin mã hoá cho một sản phẩm xác định', 'Một phân tử protein'], 2, 'Gene = đoạn DNA mã hoá polypeptide/RNA.'),
    Q('Phiên mã là quá trình?', ['DNA → DNA', 'Protein → DNA', 'mRNA → protein', 'DNA → mRNA (sử dụng RNA polymerase)'], 3, 'Tổng hợp mRNA từ mạch khuôn DNA.'),
    Q('Dịch mã xảy ra ở?', ['Ribosome ở tế bào chất', 'Nhân tế bào', 'Ti thể duy nhất', 'Lưới nội chất hạt duy nhất'], 0, 'Ribosome đọc mRNA → polypeptide.'),
    Q('Bộ ba mở đầu trên mRNA ở sinh vật nhân thực?', ['UAA', 'AUG (mã hoá methionine)', 'UAG', 'UGA'], 1, 'AUG = Met = mã mở đầu.'),
    Q('Mã di truyền có tính thoái hoá nghĩa là?', ['Một codon mã nhiều aa', 'Không có mã kết thúc', 'Nhiều codon cùng mã hoá một aa (trừ Met, Trp)', 'Mã có 4 base'], 2, 'Tính thoái hoá: nhiều codon → 1 aa.'),
    Q('Gene phiên mã 5 lần, mỗi mRNA dịch mã 4 lần. Số chuỗi polypeptide?', ['9', '4', '5', '20'], 3, '5 × 4 = 20 chuỗi.'),
  ]),

  M(3, 'Điều hoà biểu hiện gene', [
    Q('Operon Lac ở E. coli điều hoà?', ['Chuyển hoá lactose', 'Tổng hợp DNA', 'Tổng hợp tryptophan', 'Hô hấp tế bào'], 0, 'Lac operon = các gene chuyển hoá lactose.'),
    Q('Operon Lac gồm những thành phần?', ['Chỉ vùng vận hành', 'Vùng khởi động P, vận hành O, các gene cấu trúc Z-Y-A', 'Chỉ gene Z', 'Chỉ gene điều hoà R'], 1, 'P + O + Z, Y, A.'),
    Q('Khi không có lactose, operon Lac?', ['Hoạt động mạnh', 'Tự phiên mã liên tục', 'Bị ức chế (protein ức chế bám vào vùng vận hành O)', 'Bị đột biến'], 2, 'Repressor + O → chặn RNA polymerase.'),
    Q('Khi có lactose, điều gì xảy ra?', ['Repressor bám chặt hơn vào O', 'Gene điều hoà chết', 'Operon ngừng hoạt động', 'Lactose (chất cảm ứng) làm biến đổi cấu hình repressor, repressor rời O, operon hoạt động'], 3, 'Lactose là chất cảm ứng.'),
    Q('Điều hoà biểu hiện gene ở sinh vật nhân thực phức tạp hơn vì?', ['Có nhiều cấp độ: trước, trong, sau phiên mã, dịch mã, sau dịch mã', 'Không có nhân', 'Không có ribosome', 'Không có RNA'], 0, 'Nhiều cấp điều hoà.'),
    Q('Ý nghĩa điều hoà gene?', ['Lãng phí năng lượng', 'Đảm bảo gene biểu hiện đúng lúc, đúng nơi, đúng mức', 'Gây đột biến', 'Cản trở sinh trưởng'], 1, 'Tối ưu hoá hoạt động tế bào.'),
  ]),

  M(4, 'Đột biến gene', [
    Q('Đột biến gene là?', ['Thay đổi số NST', 'Tổ hợp lại NST', 'Biến đổi trong cấu trúc gene liên quan đến một hoặc một số cặp nucleotide', 'Mất một NST'], 2, 'Cấp độ phân tử (nucleotide).'),
    Q('Các dạng đột biến điểm gồm?', ['Chuyển đoạn NST', 'Mất đoạn NST', 'Đảo đoạn NST', 'Mất, thêm, thay thế một cặp nucleotide'], 3, '3 dạng cơ bản.'),
    Q('Đột biến thay thế A-T thành G-C làm số liên kết hydrogen?', ['Tăng 1 (A=T có 2 H, G≡C có 3 H)', 'Giảm 1', 'Không đổi', 'Tăng 3'], 0, 'Mất 2 H, thêm 3 H → tăng 1.'),
    Q('Đột biến gây hậu quả lớn nhất thường là?', ['Thay thế đồng nghĩa', 'Mất hoặc thêm 1 cặp nucleotide (dịch khung đọc)', 'Đột biến câm', 'Thay thế cùng codon'], 1, 'Frameshift mutation.'),
    Q('Tác nhân gây đột biến không bao gồm?', ['Tia UV', 'Hoá chất 5-bromouracil', 'Trọng lực Trái đất', 'Virus'], 2, 'Trọng lực không gây đột biến.'),
    Q('Ý nghĩa đột biến gene trong tiến hoá?', ['Vô ích', 'Không di truyền', 'Luôn có hại', 'Là nguồn nguyên liệu sơ cấp cho tiến hoá và chọn giống'], 3, 'Nguyên liệu cho CLTN.'),
  ]),

  M(5, 'Công nghệ di truyền', [
    Q('Công nghệ di truyền là?', ['Tạo, biến đổi và chuyển gene giữa các sinh vật', 'Lai tự nhiên', 'Tách chiết DNA chỉ để nghiên cứu', 'Quan sát NST'], 0, 'Kĩ thuật chuyển gene.'),
    Q('Enzyme cắt giới hạn (restriction enzyme) có chức năng?', ['Nối DNA', 'Cắt DNA tại trình tự nhận biết đặc hiệu', 'Tổng hợp protein', 'Sao chép DNA'], 1, 'Cắt tại site đặc hiệu (palindrome).'),
    Q('Enzyme nối các đoạn DNA là?', ['DNA polymerase', 'Helicase', 'DNA ligase', 'Primase'], 2, 'Ligase nối các đoạn lại.'),
    Q('Vector chuyển gene phổ biến là?', ['NST người', 'Ribosome', 'Ti thể', 'Plasmid của vi khuẩn'], 3, 'Plasmid có khả năng tự nhân đôi độc lập.'),
    Q('Ứng dụng quan trọng của công nghệ DNA tái tổ hợp?', ['Sản xuất insulin tái tổ hợp, hormone tăng trưởng, vaccine…', 'Không có ứng dụng thực tế', 'Chỉ dùng nghiên cứu lý thuyết', 'Chỉ cho động vật'], 0, 'Nhiều ứng dụng y dược.'),
    Q('Cây trồng biến đổi gene (GMO) ví dụ?', ['Lúa thường', 'Ngô Bt kháng sâu, đậu nành kháng thuốc trừ cỏ', 'Cây cảnh tự nhiên', 'Cỏ dại'], 1, 'GMO ứng dụng trong nông nghiệp.'),
  ]),

  M(6, 'Thực hành — Tách chiết DNA', [
    Q('Mục đích thực hành tách chiết DNA?', ['Quan sát hình thái cây', 'Đo nhiệt độ tế bào', 'Thu nhận DNA tinh sạch để quan sát, ứng dụng', 'Đếm tế bào'], 2, 'Tách DNA khỏi protein, lipid.'),
    Q('Nguyên liệu thường dùng tách DNA?', ['Đá khô', 'Sáp ong', 'Nước cất tinh khiết', 'Mô thực vật (đu đủ, chuối, dâu) hoặc niêm mạc miệng'], 3, 'Mô giàu tế bào.'),
    Q('Nước rửa chén / xà phòng có vai trò?', ['Phá vỡ màng tế bào và màng nhân (giải phóng DNA)', 'Tăng độ ngọt', 'Bảo quản DNA', 'Nhuộm DNA'], 0, 'Surfactant phá lipid bilayer.'),
    Q('Cồn lạnh (ethanol) có vai trò?', ['Hoà tan DNA', 'Kết tủa DNA (DNA không tan trong ethanol)', 'Phá DNA', 'Tăng nhiệt độ'], 1, 'DNA kết tủa ở giao diện cồn.'),
    Q('Quan sát DNA trong ống nghiệm thấy?', ['Tinh thể vuông', 'Bột vàng', 'Sợi trắng đục lơ lửng ở lớp cồn', 'Khí thoát ra'], 2, 'Sợi DNA màu trắng.'),
    Q('Lưu ý quan trọng khi thực hành?', ['Đun nóng mạnh', 'Để ngoài nắng', 'Lắc mạnh DNA', 'Giữ lạnh để hạn chế enzyme phân huỷ DNA, thao tác nhẹ nhàng'], 3, 'Lạnh + nhẹ nhàng.'),
  ]),

  M(7, 'Nhiễm sắc thể và sự nhân đôi - phân li', [
    Q('Nhiễm sắc thể (NST) cấu tạo từ?', ['DNA + protein histone (chất nhiễm sắc)', 'Chỉ DNA', 'Chỉ RNA', 'Chỉ protein'], 0, 'NST = nucleoprotein.'),
    Q('Mỗi NST gồm hai cromatid chị em được nối với nhau tại?', ['Đầu mút', 'Tâm động (centromere)', 'Giữa cánh', 'Không có vị trí cố định'], 1, 'Centromere = vị trí gắn thoi vô sắc.'),
    Q('NST nhân đôi xảy ra ở kì nào?', ['Kì đầu', 'Kì giữa', 'Pha S của kì trung gian', 'Kì cuối'], 2, 'Pha S - DNA và NST nhân đôi.'),
    Q('Người có 2n = 46 NST, số NST kép ở kì giữa nguyên phân?', ['23', '24', '92', '46'], 3, 'Kì giữa: 46 NST kép.'),
    Q('Bộ NST đặc trưng của loài là?', ['Số lượng, hình thái, cấu trúc NST đặc trưng cho mỗi loài', 'Tổng số NST không xác định', 'Chỉ NST giới tính', 'Thay đổi theo mùa'], 0, 'Đặc trưng và ổn định.'),
    Q('Ý nghĩa nguyên phân?', ['Giảm số NST', 'Duy trì bộ NST 2n qua các thế hệ tế bào, sinh trưởng và tái sinh', 'Tạo giao tử', 'Tạo biến dị tổ hợp'], 1, 'Nguyên phân: 2n → 2n.'),
  ]),

  M(8, 'Quy luật Mendel - Phân li và phân li độc lập', [
    Q('Mendel thí nghiệm trên đối tượng nào?', ['Ruồi giấm', 'Chuột', 'Đậu Hà Lan (Pisum sativum)', 'Người'], 2, 'Mendel + đậu Hà Lan.'),
    Q('Lai một tính trạng AA × aa, F1 100% Aa cho thấy?', ['Không xác định', 'a trội hơn', 'Đồng trội', 'A trội hoàn toàn so với a'], 3, 'F1 đồng tính trội → A trội.'),
    Q('F1 × F1 (Aa × Aa) → F2 tỉ lệ KH?', ['3 trội : 1 lặn', '1:1', '1:2:1', '9:3:3:1'], 0, 'Phân li 3:1.'),
    Q('Phép lai phân tích là?', ['Hai cá thể đồng tính', 'Cá thể nghi vấn × cá thể đồng hợp lặn', 'Tự thụ phấn', 'Lai 2 cặp tính trạng'], 1, 'Cho lai với aa để xác định KG.'),
    Q('Tỉ lệ KH trong phép lai phân tích AaBb × aabb (phân li độc lập)?', ['9:3:3:1', '3:1', '1:1:1:1', '1:2:1'], 2, '1:1:1:1 - 4 KH bằng nhau.'),
    Q('Cho AaBb × AaBb, tỉ lệ kiểu hình A-bb (trội về A, lặn về B)?', ['9/16', '6/16', '1/16', '3/16'], 3, '3/4 × 1/4 = 3/16.'),
  ]),

  M(9, 'Mở rộng học thuyết Mendel - Tương tác gene và tính đa hiệu', [
    Q('Trội không hoàn toàn cho tỉ lệ KH F2?', ['1:2:1 (3 KH)', '3:1', '9:3:3:1', '1:1'], 0, 'Tỉ lệ KH = KG ở trội không hoàn toàn.'),
    Q('Tương tác bổ sung 9:7 cho thấy?', ['Hai gene tác động độc lập', 'Hai gene cùng quy định một tính trạng (cần cả hai gene trội)', 'Một gene', 'Liên kết gene'], 1, '9:7 = bổ sung.'),
    Q('Tỉ lệ 9:3:4 thuộc dạng tương tác?', ['Bổ sung', 'Cộng gộp', 'Át chế lặn', 'Trội không hoàn toàn'], 2, '9:3:4 - át chế bởi gen lặn.'),
    Q('Tương tác cộng gộp cho?', ['Sự phân li rời rạc', 'Trội hoàn toàn', 'Một tính trạng đơn', 'Sự phân hoá tính trạng theo nhiều mức độ (số lượng) - dải liên tục'], 3, 'Da liễu màu da người = cộng gộp.'),
    Q('Gene đa hiệu là?', ['Một gene tác động lên nhiều tính trạng', 'Một gene mã nhiều RNA', 'Nhiều gene mã 1 RNA', 'Không có ý nghĩa'], 0, 'Một gene → nhiều tính trạng (vd: HbS).'),
    Q('Phép lai AaBb × AaBb cho tỉ lệ KH 9:7 nghĩa là?', ['Phân li độc lập bình thường', 'Tương tác bổ sung — cần cả hai gene trội mới biểu hiện trội', 'Liên kết hoàn toàn', 'Trội không hoàn toàn'], 1, '9:7 = bổ sung.'),
  ]),

  M(10, 'Di truyền liên kết với giới tính', [
    Q('Ở người, NST giới tính là?', ['XX và YY', 'Tất cả là XY', 'Nữ XX, Nam XY', 'Chỉ có XX'], 2, 'Nữ 44A+XX; nam 44A+XY.'),
    Q('Gene quy định bệnh máu khó đông nằm trên NST nào?', ['NST thường', 'Ti thể', 'NST Y', 'NST X (không có alen tương ứng trên Y)'], 3, 'Hemophilia A - gene F8 trên X.'),
    Q('Vì sao nam giới mắc bệnh mù màu nhiều hơn nữ?', ['Gene mù màu lặn trên X, nam chỉ có một X nên chỉ cần 1 alen lặn là biểu hiện', 'Nam khoẻ hơn', 'Gene trội trên Y', 'Do hormone'], 0, 'X-linked recessive.'),
    Q('Mẹ XᴬXᵃ × Bố XᴬY, tỉ lệ con trai bị bệnh (a lặn)?', ['Không có', '1/2 con trai bị', '100%', '1/4 con trai'], 1, 'Trong số con trai: 1/2 XᴬY, 1/2 XᵃY.'),
    Q('Đặc điểm di truyền chéo (X-linked)?', ['Bố truyền cho con trai', 'Mẹ truyền chỉ cho con gái', 'Bố truyền alen X cho con gái, con trai nhận X từ mẹ', 'Không di truyền'], 2, 'X từ bố luôn đi vào con gái.'),
    Q('Bệnh nào KHÔNG do gene trên NST X?', ['Mù màu', 'Máu khó đông', 'Loạn dưỡng cơ Duchenne', 'Bệnh bạch tạng (gene trên NST thường)'], 3, 'Bạch tạng - autosomal recessive.'),
  ]),

  M(11, 'Liên kết gene và hoán vị gene', [
    Q('Liên kết gene hoàn toàn nghĩa là?', ['Các gene trên cùng một NST cùng phân li, không có hoán vị', 'Các gene phân li độc lập', 'Các gene đột biến', 'Gene tự do'], 0, 'Liên kết hoàn toàn = không hoán vị.'),
    Q('Hoán vị gene xảy ra ở kì nào?', ['Kì giữa nguyên phân', 'Kì đầu I giảm phân (trao đổi chéo giữa các NST tương đồng)', 'Kì cuối', 'Kì trung gian'], 1, 'Prophase I - crossing over.'),
    Q('Tần số hoán vị gene tối đa lí thuyết?', ['100%', '25%', '50%', '75%'], 2, 'f tối đa = 50% (khi gene rất xa nhau).'),
    Q('Lai AB/ab × ab/ab, nếu liên kết hoàn toàn, F1 cho?', ['4 loại KH tỉ lệ 1:1:1:1', '1:2:1', '9:3:3:1', '2 loại KH tỉ lệ 1:1 (AB và ab)'], 3, 'Chỉ giao tử AB và ab.'),
    Q('Tần số hoán vị f = 20%, lai AB/ab × ab/ab, tỉ lệ giao tử Ab (hoán vị) từ AB/ab?', ['10%', '20%', '40%', '5%'], 0, 'Giao tử hoán vị mỗi loại = f/2 = 10%.'),
    Q('Ý nghĩa hoán vị gene?', ['Giảm biến dị', 'Tạo nhiều tổ hợp gene mới — nguồn nguyên liệu cho tiến hoá', 'Gây đột biến', 'Phá vỡ bộ NST'], 1, 'Tạo biến dị tổ hợp.'),
  ]),

  M(12, 'Đột biến nhiễm sắc thể - Di truyền y học', [
    Q('Đột biến cấu trúc NST gồm?', ['Chỉ lặp đoạn', 'Chỉ mất đoạn', 'Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn', 'Đa bội'], 2, '4 dạng cơ bản.'),
    Q('Hội chứng Down do?', ['Mất 1 NST 21', 'Mất đoạn NST X', 'Đa bội tam bội', 'Ba NST 21 (thể ba — trisomy 21)'], 3, 'Trisomy 21 (2n+1).'),
    Q('Hội chứng Turner (XO)?', ['Nữ chỉ có 1 NST X (45, X) - không phát triển buồng trứng đầy đủ', 'Nam 47, XXY', 'Nam XYY', 'Nữ XXX'], 0, 'Monosomy X.'),
    Q('Hội chứng Klinefelter?', ['XXX', 'Nam 47, XXY', 'XO', 'Trisomy 13'], 1, 'XXY - nam có thêm NST X.'),
    Q('Thể đa bội phổ biến ở?', ['Người', 'Chỉ động vật bậc cao', 'Thực vật (thường có lợi: quả to, năng suất cao)', 'Vi khuẩn'], 2, 'Đa bội phổ biến ở thực vật.'),
    Q('Phương pháp chẩn đoán trước sinh phát hiện bất thường NST?', ['Đo huyết áp mẹ', 'Xét nghiệm máu thông thường', 'Đo nhiệt độ', 'Sàng lọc huyết thanh, siêu âm + chọc ối, sinh thiết gai nhau làm karyotype'], 3, 'Karyotype phát hiện bất thường NST.'),
  ]),

  M(13, 'Di truyền ngoài nhân (di truyền tế bào chất)', [
    Q('Di truyền ngoài nhân là?', ['Di truyền qua gene ở ti thể, lục lạp (DNA ngoài nhân)', 'Di truyền qua gene trên NST trong nhân', 'Di truyền qua protein', 'Di truyền qua RNA'], 0, 'mtDNA, cpDNA.'),
    Q('Đặc điểm di truyền ti thể?', ['Truyền theo dòng cha', 'Truyền theo dòng mẹ (con nhận ti thể từ tế bào trứng)', 'Trộn đều cả cha mẹ', 'Không di truyền'], 1, 'Maternal inheritance.'),
    Q('Bệnh do đột biến mtDNA biểu hiện?', ['Chỉ ở nam', 'Chỉ ở nữ', 'Cả nam và nữ nhưng chỉ mẹ truyền cho con', 'Không di truyền'], 2, 'Mẹ truyền - cả con trai và gái mắc.'),
    Q('Thí nghiệm Correns trên hoa loa kèn cho thấy?', ['Di truyền độc lập', 'Hoán vị gene', 'Liên kết NST', 'Tính trạng lá đốm di truyền theo mẹ (qua lục lạp)'], 3, 'Maternal inheritance qua cpDNA.'),
    Q('Ti thể có vai trò?', ['Hô hấp tế bào và sản xuất ATP, có DNA riêng', 'Tổng hợp protein duy nhất', 'Bài tiết', 'Lưu trữ chất béo'], 0, 'Powerhouse + có mtDNA.'),
    Q('Vì sao gene ngoài nhân không tuân theo quy luật Mendel?', ['Vì có quá nhiều bản sao', 'Vì DNA ngoài nhân không phân li đều khi nguyên phân/giảm phân, di truyền theo mẹ', 'Vì không có gene', 'Vì không nhân đôi'], 1, 'Phân chia bất đối xứng giữa các tế bào con.'),
  ]),

  M(14, 'Mối quan hệ giữa kiểu gene, môi trường và kiểu hình', [
    Q('Kiểu hình (KH) được hình thành do?', ['Chỉ KG', 'Chỉ MT', 'Tương tác giữa KG và môi trường', 'Ngẫu nhiên'], 2, 'KH = f(KG, MT).'),
    Q('Mức phản ứng là?', ['Số lượng KG', 'Khả năng đột biến', 'Tỉ lệ phân li', 'Tập hợp tất cả KH của một KG trong các điều kiện môi trường khác nhau'], 3, 'KG quy định mức phản ứng.'),
    Q('Tính trạng nào có mức phản ứng RỘNG?', ['Năng suất, sản lượng sữa, chiều cao (tính trạng số lượng)', 'Nhóm máu ABO', 'Màu mắt', 'Hình dạng tóc'], 0, 'Tính trạng số lượng phụ thuộc nhiều vào MT.'),
    Q('Tính trạng nào có mức phản ứng HẸP?', ['Năng suất lúa', 'Nhóm máu, màu mắt (tính trạng chất lượng)', 'Cân nặng', 'Sản lượng sữa'], 1, 'Tính trạng chất lượng ít chịu ảnh hưởng MT.'),
    Q('Hiện tượng thường biến (sự mềm dẻo kiểu hình) là?', ['Biến đổi KG', 'Đột biến', 'Biến đổi KH theo môi trường, không di truyền', 'Hoán vị gene'], 2, 'Phenotypic plasticity.'),
    Q('Ứng dụng trong sản xuất?', ['Bỏ qua MT', 'Chỉ MT', 'Chỉ giống', 'Tạo giống tốt (KG) + tối ưu kĩ thuật canh tác (MT) để đạt năng suất cao'], 3, 'Cần cả giống và kĩ thuật.'),
  ]),

  M(15, 'Thực hành về tương tác kiểu gene và môi trường', [
    Q('Thí nghiệm trồng lúa cùng giống ở các vùng khác nhau cho thấy?', ['Năng suất khác nhau do điều kiện môi trường khác nhau', 'Năng suất luôn giống nhau', 'Không liên quan đến KG', 'Lúa không có mức phản ứng'], 0, 'Cùng KG, MT khác → KH khác.'),
    Q('Để xác định mức phản ứng của một KG cần?', ['Trồng cây trong cùng một MT', 'Trồng nhiều cây có cùng KG ở các MT khác nhau và theo dõi', 'Chỉ tính trung bình', 'Đo một lần'], 1, 'Nhiều cá thể cùng KG × nhiều MT.'),
    Q('Cách nhân nhanh kiểu gene đồng nhất ở thực vật?', ['Lai khác dòng', 'Đột biến', 'Nuôi cấy mô, giâm cành (sinh sản vô tính)', 'Lai phân tích'], 2, 'Sinh sản vô tính giữ nguyên KG.'),
    Q('Cây mọc trong tối có KH?', ['Xanh đậm', 'Tím', 'Bình thường', 'Vàng úa (vì thiếu ánh sáng → diệp lục không tổng hợp được)'], 3, 'Ảnh hưởng MT đến tính trạng KH.'),
    Q('Người sống ở vùng cao có lượng hồng cầu?', ['Tăng (đáp ứng với áp suất oxi thấp)', 'Giảm', 'Không đổi', 'Bằng 0'], 0, 'Mức phản ứng với áp suất oxi.'),
    Q('Hoa cẩm tú cầu (Hydrangea) thay đổi màu theo?', ['Nhiệt độ', 'pH đất (axit → xanh, kiềm → hồng)', 'Ánh sáng', 'Gió'], 1, 'pH ảnh hưởng KH.'),
  ]),

  M(16, 'Di truyền học quần thể', [
    Q('Quần thể là?', ['Một cá thể', 'Nhiều loài chung', 'Tập hợp các cá thể cùng loài, sống trong một khu vực, có khả năng sinh sản tạo thế hệ mới', 'Vô tính'], 2, 'Quần thể cùng loài.'),
    Q('Tần số alen là?', ['Số kiểu hình', 'Số cá thể', 'Số NST', 'Tỉ lệ giao tử mang alen nào đó trong quần thể'], 3, 'Frequency of allele.'),
    Q('Cấu trúc di truyền quần thể tự phối có xu hướng?', ['Giảm dần dị hợp, tăng đồng hợp qua các thế hệ', 'Tăng dị hợp', 'Không đổi', 'Tăng đột biến'], 0, 'Tự phối → đồng hợp tăng.'),
    Q('Định luật Hardy-Weinberg áp dụng cho quần thể?', ['Có chọn lọc mạnh', 'Quần thể ngẫu phối, kích thước lớn, không có đột biến/di nhập/chọn lọc', 'Có đột biến nhiều', 'Có di cư'], 1, '5 điều kiện cân bằng.'),
    Q('Cho quần thể cân bằng với p(A)=0,6; q(a)=0,4. Tỉ lệ KG Aa là?', ['0,36', '0,16', '0,48 (= 2pq)', '0,4'], 2, '2 × 0,6 × 0,4 = 0,48.'),
    Q('Quần thể cân bằng với q² = 0,01 (tỉ lệ KH lặn). Tần số q?', ['0,01', '0,99', '0,5', '0,1'], 3, '√0,01 = 0,1.'),
  ]),

  M(17, 'Ôn tập học kì 1', [
    Q('Gene là?', ['Đoạn DNA mang thông tin mã hoá một sản phẩm xác định', 'Toàn bộ DNA', 'Một NST', 'Một amino acid'], 0, 'Gene = đoạn DNA.'),
    Q('Bộ ba kết thúc trên mRNA?', ['AUG', 'UAA, UAG, UGA', 'GUG', 'CCA'], 1, 'Stop codons.'),
    Q('Lai AaBb × AaBb (PLĐL), tỉ lệ KH 9:3:3:1 xuất hiện khi?', ['Trội không hoàn toàn', 'Liên kết hoàn toàn', 'Trội hoàn toàn và phân li độc lập', 'Hoán vị 50%'], 2, 'Mendel cổ điển.'),
    Q('Nam giới có cặp NST giới tính?', ['XX', 'XXY (bình thường)', 'XO', 'XY'], 3, 'XY chuẩn.'),
    Q('Đột biến gene mất 1 cặp nucleotide gây?', ['Dịch khung đọc — thay đổi toàn bộ aa từ vị trí đột biến', 'Mất 1 aa', 'Không ảnh hưởng', 'Tăng aa'], 0, 'Frameshift.'),
    Q('Quần thể tự phối qua nhiều thế hệ tỉ lệ KG?', ['Tăng dị hợp', 'Tăng đồng hợp, giảm dị hợp', 'Không đổi', 'Cân bằng Hardy-Weinberg'], 1, 'Tự phối → tăng homozygous.'),
  ]),

  M(18, 'Kiểm tra học kì 1', [
    Q('Trong tái bản DNA, mạch khuôn 5\'-3\' được tổng hợp?', ['Liên tục', 'Không sao chép', 'Gián đoạn theo các đoạn Okazaki', 'Bằng RNA'], 2, 'Mạch chậm tổng hợp gián đoạn.'),
    Q('Trên mRNA, codon AUG có chức năng?', ['Kết thúc', 'Không có chức năng', 'Mã hoá Lysine', 'Mở đầu dịch mã, mã hoá Methionine'], 3, 'Start codon.'),
    Q('Tỉ lệ KH ở phép lai AaBb × aabb (PLĐL)?', ['1:1:1:1', '3:1', '9:3:3:1', '1:2:1'], 0, 'Phép lai phân tích PLĐL.'),
    Q('Cá thể có KG AB/ab tạo giao tử AB và ab tỉ lệ bao nhiêu nếu f = 20%?', ['25% mỗi loại', '40% AB, 40% ab, 10% Ab, 10% aB', '50% AB, 50% ab', '100% AB'], 1, 'Giao tử liên kết mỗi loại = (1-f)/2 = 40%; hoán vị = f/2 = 10%.'),
    Q('Bệnh phenylketonuria (PKU) di truyền theo dạng?', ['Trội NST thường', 'Liên kết X trội', 'Lặn NST thường', 'Ti thể'], 2, 'PKU autosomal recessive.'),
    Q('Quần thể có cấu trúc 0,49 AA : 0,42 Aa : 0,09 aa có cân bằng Hardy-Weinberg không?', ['Không cân bằng', 'Lệch cân bằng', 'Chưa đủ dữ liệu', 'Cân bằng (p=0,7; q=0,3; 2pq=0,42; p²=0,49; q²=0,09)'], 3, 'Kiểm tra: 0,49=0,7², 0,42=2(0,7)(0,3), 0,09=0,3² → cân bằng.'),
  ]),

  // ──────────────── HK2 — Tiến hoá và Sinh thái ────────────────
  M(19, 'Bằng chứng tiến hoá', [
    Q('Bằng chứng giải phẫu so sánh thể hiện qua?', ['Cơ quan tương đồng, cơ quan thoái hoá, cơ quan tương tự', 'Hoá thạch', 'Phôi học', 'DNA'], 0, 'Đặc điểm cấu tạo so sánh.'),
    Q('Cơ quan tương đồng là?', ['Cùng chức năng, khác nguồn gốc', 'Cùng nguồn gốc tiến hoá, có thể khác chức năng', 'Không có ý nghĩa', 'Cơ quan vô dụng'], 1, 'Cùng nguồn gốc (homologous).'),
    Q('Cánh chim và cánh bướm là?', ['Cơ quan tương đồng', 'Cơ quan thoái hoá', 'Cơ quan tương tự (cùng chức năng, khác nguồn gốc)', 'Hoá thạch sống'], 2, 'Tương tự = analogous.'),
    Q('Bằng chứng phôi học cho thấy?', ['Phôi khác hoàn toàn', 'Phôi không tiến hoá', 'Phôi không di truyền', 'Phôi của các loài có xương sống có giai đoạn phát triển ban đầu giống nhau'], 3, 'Phôi sớm giống nhau → cùng tổ tiên.'),
    Q('Bằng chứng sinh học phân tử mạnh mẽ nhất là?', ['Sự giống nhau về DNA, protein, mã di truyền của các loài', 'Hình thái', 'Hành vi', 'Tập tính'], 0, 'Mã di truyền chung, trình tự DNA tương đồng.'),
    Q('Hoá thạch cho thấy?', ['Quá trình tạo đá', 'Lịch sử tiến hoá của các loài qua các thời kì địa chất', 'Khí hậu hiện tại', 'Sinh thái học'], 1, 'Hoá thạch = bằng chứng cổ sinh.'),
  ]),

  M(20, 'Học thuyết tiến hoá Lamarck và Darwin', [
    Q('Lamarck cho rằng?', ['Chọn lọc tự nhiên là động lực', 'Đột biến ngẫu nhiên', 'Sự tiến hoá do tác động trực tiếp của môi trường + di truyền tập tính tập nhiễm (cơ quan nào được dùng nhiều thì phát triển)', 'Không có tiến hoá'], 2, 'Lamarck: dùng-phế + di truyền tính tập nhiễm (đã bị phủ nhận).'),
    Q('Darwin xuất bản tác phẩm nổi tiếng nào?', ['Mendel\'s Laws', 'Genetics', 'Sapiens', '"Nguồn gốc các loài" (On the Origin of Species, 1859)'], 3, '"On the Origin of Species" 1859.'),
    Q('Theo Darwin, động lực chính của tiến hoá là?', ['Chọn lọc tự nhiên (sinh vật thích nghi sống sót và sinh sản nhiều hơn)', 'Sử dụng và không sử dụng cơ quan', 'Tác động khí hậu trực tiếp', 'Đột biến điều khiển'], 0, 'Natural Selection - cơ chế chính của Darwin.'),
    Q('Đấu tranh sinh tồn theo Darwin là?', ['Đấu tranh giữa các loài chỉ', 'Cuộc đấu tranh giành nguồn sống (giữa các cá thể cùng loài, khác loài, với môi trường)', 'Không có ý nghĩa', 'Chỉ giữa con đực'], 1, 'Struggle for existence.'),
    Q('Hạn chế của thuyết Darwin?', ['Không có hạn chế', 'Sai về chọn lọc tự nhiên', 'Chưa giải thích được cơ chế di truyền và nguồn gốc biến dị', 'Sai mọi thứ'], 2, 'Darwin chưa biết về gene và đột biến.'),
    Q('Học thuyết tiến hoá tổng hợp hiện đại bổ sung?', ['Bỏ chọn lọc tự nhiên', 'Quay lại Lamarck', 'Chỉ đột biến', 'Tích hợp di truyền học (đột biến, biến dị tổ hợp) + chọn lọc tự nhiên + các nhân tố khác'], 3, 'Modern Synthesis = Darwin + Mendel + Genetics.'),
  ]),

  M(21, 'Học thuyết tiến hoá tổng hợp hiện đại', [
    Q('Đơn vị tiến hoá cơ sở theo tiến hoá tổng hợp?', ['Quần thể (vì quần thể có vốn gene biến đổi qua các thế hệ)', 'Cá thể', 'Tế bào', 'Loài'], 0, 'Quần thể tiến hoá, không phải cá thể.'),
    Q('Nguyên liệu sơ cấp của tiến hoá là?', ['Biến dị tổ hợp', 'Đột biến gene', 'Thường biến', 'Chọn lọc'], 1, 'Đột biến = nguyên liệu sơ cấp.'),
    Q('Nguyên liệu thứ cấp của tiến hoá?', ['Đột biến', 'Thường biến', 'Biến dị tổ hợp (do giao phối tạo ra)', 'Di nhập gene'], 2, 'Tổ hợp qua giao phối.'),
    Q('Nhân tố tiến hoá nào có hướng?', ['Đột biến', 'Di nhập gene', 'Phiêu bạt di truyền', 'Chọn lọc tự nhiên (hướng tích luỹ KG thích nghi)'], 3, 'CLTN có hướng.'),
    Q('Phiêu bạt di truyền (genetic drift) ảnh hưởng mạnh nhất ở?', ['Quần thể nhỏ (yếu tố ngẫu nhiên dễ làm thay đổi tần số alen)', 'Quần thể lớn', 'Quần thể vô tính', 'Quần thể không sinh sản'], 0, 'Drift mạnh ở small populations.'),
    Q('Di nhập gene (gene flow) có vai trò?', ['Cách li quần thể', 'Làm thay đổi tần số alen, hạn chế phân hoá quần thể', 'Không tác động', 'Gây đột biến'], 1, 'Migration → mixing alleles.'),
  ]),

  M(22, 'Quá trình hình thành loài và tiến hoá lớn', [
    Q('Loài sinh học được định nghĩa là?', ['Một cá thể', 'Cùng môi trường', 'Nhóm cá thể có khả năng giao phối tự nhiên với nhau và sinh ra con cái hữu thụ', 'Cùng hình thái'], 2, 'Biological species concept.'),
    Q('Cách li sinh sản gồm các dạng?', ['Chỉ thời gian', 'Chỉ địa lí', 'Chỉ hành vi', 'Cách li trước hợp tử và sau hợp tử'], 3, '2 nhóm chính.'),
    Q('Hình thành loài khác khu (allopatric speciation) bắt đầu bằng?', ['Cách li địa lí, sau đó tích luỹ biến dị → cách li sinh sản', 'Cách li sinh sản', 'Cách li tập tính', 'Đa bội'], 0, 'Cách li địa lí trước.'),
    Q('Hình thành loài cùng khu (sympatric) phổ biến nhờ?', ['Di nhập gene', 'Đa bội hoá ở thực vật, cách li tập tính ở động vật', 'Cách li địa lí', 'Drift'], 1, 'Đa bội hoá là cơ chế chính.'),
    Q('Tiến hoá nhỏ (microevolution) là?', ['Hình thành loài mới', 'Hình thành đơn vị phân loại cao', 'Biến đổi tần số alen, KG trong quần thể qua thời gian', 'Vô tính'], 2, 'Sự thay đổi vốn gene quần thể.'),
    Q('Tiến hoá lớn (macroevolution) bao gồm?', ['Chỉ biến đổi nhỏ', 'Hoán vị', 'Đột biến điểm', 'Hình thành loài mới và các đơn vị phân loại lớn hơn loài (chi, họ, bộ…)'], 3, 'Macroevolution → speciation và above.'),
  ]),

  M(23, 'Môi trường sống và các nhân tố sinh thái', [
    Q('Môi trường sống là?', ['Toàn bộ các yếu tố bao quanh sinh vật, ảnh hưởng đến đời sống sinh vật', 'Chỉ đất', 'Chỉ nước', 'Chỉ không khí'], 0, 'Habitat.'),
    Q('Nhân tố sinh thái chia thành 2 nhóm?', ['Trong và ngoài', 'Sinh học và phi sinh học (vô sinh và hữu sinh)', 'Lớn và nhỏ', 'Mạnh và yếu'], 1, '2 nhóm: abiotic và biotic.'),
    Q('Nhân tố vô sinh gồm?', ['Sinh vật khác', 'Con người', 'Ánh sáng, nhiệt độ, độ ẩm, đất, nước, không khí…', 'Vi khuẩn'], 2, 'Abiotic: physical/chemical.'),
    Q('Giới hạn sinh thái là?', ['Mức tử vong', 'Vô hạn', 'Chỉ giá trị tối ưu', 'Khoảng giá trị xác định một nhân tố sinh thái mà sinh vật có thể tồn tại và phát triển'], 3, 'Tolerance range.'),
    Q('Khoảng cực thuận trong giới hạn sinh thái là?', ['Khoảng giá trị sinh vật phát triển tốt nhất', 'Mức gây chết', 'Giới hạn dưới', 'Giới hạn trên'], 0, 'Optimum range.'),
    Q('Quy luật giới hạn (Shelford) phát biểu rằng?', ['Sinh vật chịu được mọi điều kiện', 'Mỗi nhân tố sinh thái có một giới hạn nhất định, ngoài giới hạn đó sinh vật không tồn tại được', 'Chỉ ánh sáng quan trọng', 'Chỉ nhiệt độ'], 1, 'Shelford\'s law of tolerance.'),
  ]),

  M(24, 'Quần thể sinh vật và các đặc trưng', [
    Q('Quần thể có các đặc trưng cơ bản?', ['Chỉ số lượng', 'Chỉ tuổi', 'Mật độ, tỉ lệ giới tính, cấu trúc tuổi, kiểu phân bố, kích thước, sinh trưởng', 'Chỉ giới tính'], 2, '6 đặc trưng cơ bản.'),
    Q('Mật độ quần thể là?', ['Tổng số cá thể', 'Không có ý nghĩa', 'Tỉ lệ đực-cái', 'Số lượng cá thể trên một đơn vị diện tích hoặc thể tích'], 3, 'Density = cá thể/đơn vị.'),
    Q('Cấu trúc tuổi gồm 3 nhóm?', ['Trước sinh sản, đang sinh sản, sau sinh sản', 'Chỉ trẻ và già', 'Chỉ đực và cái', 'Không có nhóm'], 0, 'Pre-, reproductive, post-reproductive.'),
    Q('Kiểu phân bố ngẫu nhiên xảy ra khi?', ['MT không đồng nhất', 'Điều kiện môi trường đồng nhất, không có cạnh tranh đáng kể giữa các cá thể', 'Cạnh tranh mạnh', 'Hỗ trợ'], 1, 'Random distribution.'),
    Q('Tăng trưởng quần thể theo dạng J biểu thị?', ['Có giới hạn môi trường', 'Suy giảm', 'Tăng trưởng mũ trong điều kiện lí tưởng (không có yếu tố hạn chế)', 'Ổn định'], 2, 'Exponential growth - J-shape.'),
    Q('Tăng trưởng dạng S (logistic) xảy ra khi?', ['Lý tưởng', 'Phát tán', 'Quần thể chết', 'Có sức chứa K của môi trường, tốc độ tăng giảm khi quần thể đến gần K'], 3, 'Logistic growth.'),
  ]),

  M(25, 'Biến động số lượng cá thể quần thể', [
    Q('Biến động số lượng cá thể quần thể là?', ['Tăng hoặc giảm số lượng cá thể theo thời gian', 'Số lượng cá thể không đổi', 'Chỉ giảm', 'Chỉ tăng'], 0, 'Population fluctuation.'),
    Q('Biến động theo chu kì có thể do?', ['Ngẫu nhiên hoàn toàn', 'Chu kì mùa, năm, nhiều năm (vd: thỏ-linh miêu)', 'Tai hoạ', 'Không xác định'], 1, 'Cyclic fluctuations.'),
    Q('Biến động không theo chu kì thường do?', ['Mùa cố định', 'Chu kì sao', 'Tai hoạ, thay đổi đột ngột môi trường, hoạt động con người', 'Cố định'], 2, 'Non-cyclic - random.'),
    Q('Cơ chế điều chỉnh số lượng cá thể quần thể?', ['Không có', 'Chỉ sinh', 'Chỉ chết', 'Cạnh tranh, vật ăn thịt-con mồi, bệnh dịch, di cư - làm số lượng tăng giảm về mức cân bằng'], 3, 'Self-regulation.'),
    Q('Khi mật độ tăng cao quá mức, hiện tượng?', ['Cạnh tranh tăng → tỉ lệ tử tăng, sinh giảm, di cư tăng', 'Tăng sinh sản', 'Không đổi', 'Tăng giới hạn'], 0, 'Density-dependent regulation.'),
    Q('Ý nghĩa của việc nghiên cứu biến động quần thể?', ['Không cần thiết', 'Bảo vệ loài, khai thác hợp lí tài nguyên sinh vật, phòng dịch hại', 'Chỉ học thuộc', 'Chỉ vẽ đồ thị'], 1, 'Ứng dụng quản lí tài nguyên.'),
  ]),

  M(26, 'Quần xã sinh vật và các đặc trưng', [
    Q('Quần xã sinh vật là?', ['Một quần thể', 'Một cá thể', 'Tập hợp các quần thể của các loài khác nhau cùng sống trong một không gian, thời gian', 'Một hệ sinh thái'], 2, 'Community = nhiều quần thể.'),
    Q('Đặc trưng cơ bản của quần xã?', ['Chỉ số loài', 'Chỉ mật độ', 'Chỉ ánh sáng', 'Thành phần loài, độ đa dạng, loài ưu thế, loài đặc trưng, phân bố'], 3, 'Nhiều đặc trưng.'),
    Q('Loài ưu thế trong quần xã là?', ['Loài có vai trò quan trọng, số lượng cá thể nhiều, sinh khối lớn', 'Loài hiếm', 'Loài tuyệt chủng', 'Loài nhỏ nhất'], 0, 'Dominant species.'),
    Q('Loài đặc trưng là?', ['Có ở mọi quần xã', 'Chỉ có ở một quần xã nhất định (vd: cá cóc Tam Đảo ở rừng Tam Đảo)', 'Không có ý nghĩa', 'Loài phổ biến'], 1, 'Characteristic species.'),
    Q('Phân tầng trong rừng nhiệt đới có vai trò?', ['Cản trở', 'Không có ý nghĩa', 'Tăng hiệu quả sử dụng ánh sáng và không gian, giảm cạnh tranh', 'Làm rừng yếu'], 2, 'Stratification → tăng diversity.'),
    Q('Diễn thế sinh thái là?', ['Đột biến quần xã', 'Cháy rừng', 'Phá rừng', 'Quá trình biến đổi tuần tự của quần xã qua các giai đoạn từ trẻ đến trưởng thành'], 3, 'Ecological succession.'),
  ]),

  M(27, 'Quan hệ giữa các loài trong quần xã', [
    Q('Quan hệ hỗ trợ giữa các loài bao gồm?', ['Cộng sinh, hội sinh, hợp tác', 'Cạnh tranh', 'Kí sinh', 'Ăn thịt'], 0, '3 dạng hỗ trợ.'),
    Q('Cộng sinh là?', ['Một bên có lợi', 'Cả hai cùng có lợi và chặt chẽ - không thể sống thiếu nhau', 'Một bên hại', 'Cả hai không lợi'], 1, 'Mutualism (obligate).'),
    Q('Ví dụ về cộng sinh?', ['Cá ép bám cá mập', 'Bọt biển + cá nhỏ', 'Vi khuẩn Rhizobium + cây họ Đậu', 'Hổ và nai'], 2, 'Nốt sần - cố định N.'),
    Q('Hội sinh (commensalism) là?', ['Hai bên có lợi', 'Hai bên hại nhau', 'Cả hai bị hại', 'Một bên có lợi, một bên không lợi và không hại'], 3, '+0 relationship.'),
    Q('Quan hệ đối kháng gồm?', ['Cạnh tranh, kí sinh, ức chế-cảm nhiễm, sinh vật ăn sinh vật khác', 'Cộng sinh', 'Hợp tác', 'Hội sinh'], 0, 'Antagonistic relationships.'),
    Q('Khống chế sinh học là?', ['Tăng dân số mọi loài', 'Hiện tượng số lượng loài này bị khống chế bởi loài khác (vd: chim ăn sâu)', 'Phá huỷ quần xã', 'Cách li sinh sản'], 1, 'Biological control.'),
  ]),

  M(28, 'Hệ sinh thái', [
    Q('Hệ sinh thái là?', ['Chỉ quần thể', 'Chỉ loài', 'Quần xã sinh vật và sinh cảnh (môi trường vô sinh) tương tác với nhau', 'Chỉ vô sinh'], 2, 'Ecosystem = biotic + abiotic.'),
    Q('Hệ sinh thái có các thành phần cấu trúc?', ['Chỉ phân giải', 'Chỉ vô sinh', 'Chỉ tiêu thụ', 'Sinh vật sản xuất, tiêu thụ, phân giải và thành phần vô sinh'], 3, '4 thành phần.'),
    Q('Sinh vật sản xuất là?', ['Thực vật và vi khuẩn quang hợp/hoá tổng hợp (autotroph)', 'Động vật ăn cỏ', 'Phân giải', 'Tiêu thụ bậc cao'], 0, 'Primary producers.'),
    Q('Hệ sinh thái có thể được chia thành?', ['Chỉ trên cạn', 'Hệ sinh thái tự nhiên và nhân tạo (do con người tạo ra)', 'Chỉ dưới nước', 'Chỉ vĩ độ thấp'], 1, 'Natural + anthropogenic.'),
    Q('Hệ sinh thái nông nghiệp khác hệ sinh thái rừng tự nhiên ở?', ['Đa dạng loài cao hơn', 'Không có thực vật', 'Đa dạng thấp, ổn định kém hơn, cần con người duy trì, năng suất sinh học cao', 'Không có sinh vật'], 2, 'Agro-ecosystem.'),
    Q('Ví dụ hệ sinh thái lớn nhất Trái đất?', ['Một ao nhỏ', 'Một loài', 'Một cây', 'Sinh quyển (biosphere) - bao gồm toàn bộ sinh vật và môi trường sống'], 3, 'Biosphere = Earth-level ecosystem.'),
  ]),

  M(29, 'Trao đổi vật chất trong hệ sinh thái', [
    Q('Chuỗi thức ăn là?', ['Dãy các loài có quan hệ dinh dưỡng - mắt xích trước là thức ăn cho mắt xích sau', 'Một loài', 'Mạng lưới phức tạp', 'Không có ý nghĩa'], 0, 'Food chain.'),
    Q('Lưới thức ăn là?', ['Một chuỗi thức ăn', 'Tập hợp nhiều chuỗi thức ăn có mắt xích chung', 'Một loài', 'Một quần thể'], 1, 'Food web.'),
    Q('Bậc dinh dưỡng cao nhất thường là?', ['Thực vật', 'Vi khuẩn phân giải', 'Sinh vật tiêu thụ bậc cao (vật ăn thịt đầu bảng)', 'Đất'], 2, 'Top predator.'),
    Q('Hiệu suất sinh thái giữa các bậc dinh dưỡng khoảng?', ['90%', '100%', '50%', '10% (~10% năng lượng chuyển từ bậc dưới lên bậc trên)'], 3, 'Rule of 10%.'),
    Q('Hình tháp sinh thái có thể có dạng?', ['Hình tháp số lượng, sinh khối, năng lượng', 'Chỉ một dạng', 'Tròn', 'Vuông'], 0, '3 loại ecological pyramid.'),
    Q('Tháp năng lượng luôn có hình dạng?', ['Ngược', 'Tháp xuôi (giảm dần từ thấp lên cao) - năng lượng luôn hao hụt', 'Bằng nhau', 'Ngẫu nhiên'], 1, 'Energy pyramid is always upright.'),
  ]),

  M(30, 'Chu trình sinh địa hoá', [
    Q('Chu trình sinh địa hoá là?', ['Chu trình năng lượng một chiều', 'Một chiều', 'Sự tuần hoàn của các nguyên tố hoá học qua các thành phần hữu sinh và vô sinh của hệ sinh thái', 'Không tuần hoàn'], 2, 'Biogeochemical cycle.'),
    Q('Chu trình carbon, CO₂ vào sinh vật qua?', ['Hô hấp', 'Đốt cháy', 'Bài tiết', 'Quang hợp (thực vật cố định CO₂)'], 3, 'CO₂ + H₂O → C₆H₁₂O₆.'),
    Q('CO₂ trở lại khí quyển qua?', ['Hô hấp, phân giải, đốt cháy nhiên liệu hoá thạch', 'Quang hợp', 'Cố định', 'Lưu giữ vĩnh viễn'], 0, 'Respiration + combustion.'),
    Q('Chu trình nitrogen có giai đoạn nào?', ['Quang hợp', 'Cố định N₂, amon hoá, nitrat hoá, phản nitrat hoá', 'Hô hấp', 'Bài tiết duy nhất'], 1, '4 bước chính.'),
    Q('Chu trình nước có ý nghĩa?', ['Không quan trọng', 'Chỉ trong đất', 'Cung cấp nước cho sinh vật, điều hoà khí hậu', 'Chỉ trong cây'], 2, 'Water cycle - quan trọng cho sự sống.'),
    Q('Hiện tượng "phú dưỡng hoá" trong các thuỷ vực do?', ['Thiếu chất dinh dưỡng', 'Lạnh', 'Khô hạn', 'Dư thừa N, P từ phân bón, nước thải → tảo phát triển bùng phát'], 3, 'Eutrophication.'),
  ]),

  M(31, 'Dòng năng lượng trong hệ sinh thái', [
    Q('Dòng năng lượng trong hệ sinh thái là?', ['Một chiều - từ ánh sáng mặt trời → sinh vật sản xuất → tiêu thụ → mất dưới dạng nhiệt', 'Tuần hoàn', 'Tuần hoàn ngược', 'Không di chuyển'], 0, 'Energy flow is one-way.'),
    Q('Năng lượng vào hệ sinh thái chủ yếu từ?', ['Đất', 'Ánh sáng mặt trời (qua quang hợp)', 'Hô hấp', 'Phân giải'], 1, 'Sun is the source.'),
    Q('Vì sao chuỗi thức ăn thường có giới hạn 4-5 bậc?', ['Không có ý nghĩa', 'Vì sinh vật chết', 'Vì năng lượng giảm mạnh qua mỗi bậc (~90% mất), không đủ cho bậc cao hơn', 'Vì cạnh tranh'], 2, 'Energy loss limits chain length.'),
    Q('Sinh vật sản xuất sử dụng năng lượng ánh sáng để?', ['Bài tiết', 'Cảm ứng', 'Sinh sản trực tiếp', 'Tổng hợp chất hữu cơ qua quang hợp'], 3, 'Photosynthesis.'),
    Q('Năng lượng được "đóng gói" trong?', ['Liên kết hoá học của chất hữu cơ (đường, lipid, protein)', 'Khí O₂', 'Nước', 'Đất'], 0, 'Chemical energy trong organic molecules.'),
    Q('Hiệu suất sinh thái thấp ở mỗi bậc do?', ['Sinh vật ăn ít', 'Hô hấp (mất nhiệt), bài tiết, không tiêu hoá hết, không bắt được con mồi', 'Không có thức ăn', 'Quá nhiều'], 1, 'Multiple losses.'),
  ]),

  M(32, 'Diễn thế sinh thái', [
    Q('Diễn thế sinh thái là?', ['Sự ổn định quần xã', 'Suy thoái nhanh', 'Quá trình biến đổi tuần tự của quần xã qua các giai đoạn theo thời gian', 'Đột biến'], 2, 'Ecological succession.'),
    Q('Diễn thế nguyên sinh bắt đầu từ?', ['Quần xã đã có', 'Rừng nhiệt đới', 'Đất canh tác', 'Môi trường chưa có sinh vật (vd: đá nham thạch mới)'], 3, 'Primary succession.'),
    Q('Diễn thế thứ sinh xảy ra ở?', ['Môi trường đã có quần xã nhưng bị phá huỷ một phần (cháy, chặt phá)', 'Môi trường mới hoàn toàn', 'Đại dương sâu', 'Khí quyển'], 0, 'Secondary succession.'),
    Q('Giai đoạn cuối của diễn thế thường là?', ['Quần xã suy thoái', 'Quần xã đỉnh cực (climax) ổn định, đa dạng cao', 'Sa mạc', 'Đá trống'], 1, 'Climax community.'),
    Q('Nguyên nhân diễn thế?', ['Chỉ bên ngoài', 'Chỉ bên trong', 'Cả nguyên nhân bên ngoài (môi trường) và bên trong (cạnh tranh, hoạt động sinh vật)', 'Không có'], 2, 'Internal + external causes.'),
    Q('Ý nghĩa nghiên cứu diễn thế?', ['Không có ứng dụng', 'Chỉ thống kê', 'Chỉ vẽ tranh', 'Dự đoán quá trình thay đổi quần xã, quản lí, phục hồi và bảo vệ hệ sinh thái'], 3, 'Ứng dụng quản lí.'),
  ]),

  M(33, 'Sinh thái phục hồi, bảo tồn và phát triển bền vững', [
    Q('Sinh thái phục hồi (restoration ecology) là?', ['Khoa học và thực hành phục hồi các hệ sinh thái bị suy thoái về trạng thái gần với tự nhiên', 'Phá huỷ thêm', 'Khai thác mạnh', 'Bỏ mặc'], 0, 'Restoration ecology.'),
    Q('Bảo tồn đa dạng sinh học có thể qua?', ['Khai thác triệt để', 'Bảo tồn nguyên vị (in-situ) và chuyển vị (ex-situ)', 'Không có cách', 'Phá rừng'], 1, '2 phương pháp.'),
    Q('Bảo tồn nguyên vị là?', ['Trong vườn thú', 'Trong phòng thí nghiệm', 'Bảo vệ loài tại nơi cư trú tự nhiên (vườn quốc gia, khu bảo tồn)', 'Trong nhà'], 2, 'In-situ conservation.'),
    Q('Phát triển bền vững nghĩa là?', ['Khai thác hết tài nguyên', 'Chỉ kinh tế', 'Bỏ phát triển', 'Đáp ứng nhu cầu hiện tại mà không làm ảnh hưởng đến nhu cầu của thế hệ tương lai'], 3, 'Sustainable development.'),
    Q('Biện pháp phát triển bền vững?', ['Tiết kiệm tài nguyên, sử dụng năng lượng tái tạo, giảm phát thải, bảo vệ đa dạng sinh học', 'Đốt rừng', 'Sản xuất tối đa', 'Bỏ tái chế'], 0, 'Multiple sustainable practices.'),
    Q('Hiệu ứng nhà kính chủ yếu do?', ['CO₂', 'Khí CO₂, CH₄, N₂O và các khí nhà kính khác tăng nhanh do hoạt động con người', 'O₂', 'N₂'], 1, 'Greenhouse gases.'),
  ]),

  M(34, 'Ôn tập tổng hợp cả năm', [
    Q('Mã di truyền có đặc điểm cơ bản?', ['Mã bốn', 'Mã đơn', 'Mã bộ ba, đặc hiệu, thoái hoá, phổ biến (chung cho hầu hết sinh vật)', 'Khác nhau giữa các loài'], 2, '4 đặc điểm cơ bản.'),
    Q('Bệnh thiếu máu hồng cầu hình liềm là ví dụ về?', ['Bệnh môi trường', 'Đột biến NST', 'Đột biến số lượng', 'Đột biến gene HbS - thay 1 cặp nucleotide → thay Glu thành Val'], 3, 'Point mutation HbS.'),
    Q('Cho quần thể đang cân bằng có 1% người mắc bệnh lặn (q²=0,01). Tỉ lệ người mang gene bệnh dị hợp?', ['18% (= 2pq = 2 × 0,9 × 0,1)', '1%', '50%', '99%'], 0, '2pq = 0,18.'),
    Q('Cơ chế tiến hoá theo thuyết tổng hợp hiện đại không bao gồm?', ['Đột biến', 'Di truyền tính tập nhiễm (Lamarck đã bị bác bỏ)', 'Phiêu bạt di truyền', 'Chọn lọc tự nhiên'], 1, 'Inheritance of acquired characteristics đã bị bác bỏ.'),
    Q('Quan hệ giữa cây nắp ấm và côn trùng?', ['Cộng sinh', 'Hội sinh', 'Sinh vật ăn sinh vật khác (cây ăn thịt côn trùng)', 'Hợp tác'], 2, 'Predation by carnivorous plant.'),
    Q('Hiệu suất sinh thái 10% có nghĩa là?', ['10% sinh vật chết', '10% mất nước', '10% sinh sản', 'Khoảng 10% năng lượng được chuyển từ bậc dinh dưỡng dưới lên bậc trên'], 3, 'Lindeman\'s 10% rule.'),
  ]),

  M(35, 'Tổng ôn - chuẩn bị thi tốt nghiệp THPT', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Sinh học?', ['40 câu trắc nghiệm, 50 phút, 4 mức độ nhận thức', 'Tự luận hoàn toàn', '60 câu trắc nghiệm', 'Vấn đáp'], 0, '40 TN, 50 phút.'),
    Q('Khi giải toán di truyền cần?', ['Đoán', 'Đọc kĩ đề, xác định quy luật, viết sơ đồ lai, tính toán cẩn thận', 'Bỏ qua dữ kiện', 'Chỉ học thuộc'], 1, 'Phương pháp giải.'),
    Q('Bộ ba mã hoá Glycine là?', ['AUG', 'UAA', 'GGN (N là 4 nucleotide bất kì) - mã thoái hoá', 'UGA'], 2, 'Codon GG_ → Gly.'),
    Q('Lai một cặp tính trạng có hoán vị gene tỉ lệ KH 4 loại không bằng 1:1:1:1 nghĩa là?', ['Phân li độc lập', 'Tương tác cộng gộp', 'Đa hiệu', 'Liên kết không hoàn toàn (hoán vị gene)'], 3, 'Crossover causes uneven ratio.'),
    Q('Để bảo vệ đa dạng sinh học cần?', ['Bảo tồn habitat, hạn chế ô nhiễm, sử dụng tài nguyên bền vững, giáo dục cộng đồng', 'Khai thác cạn kiệt', 'Đốt rừng', 'Săn bắn tự do'], 0, 'Multiple conservation strategies.'),
    Q('Lời khuyên khi làm bài thi?', ['Đoán hết', 'Đọc kĩ đề + làm câu dễ trước + soát đáp án + quản lí thời gian', 'Làm câu khó trước', 'Bỏ câu dài'], 1, 'Kĩ năng làm bài.'),
  ]),
];

export const H12SINH_SCENARIOS = indexBy(H12SINH_WEEKS);
