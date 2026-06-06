// ============================================================
// Lớp 11 · ĐỊA LÍ — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGDPT 2018 — bộ Kết nối tri thức (Phần 1: KT-XH thế giới;
//   Phần 2: Địa lí khu vực và quốc gia — Mỹ La-tinh, EU, ĐNA, Tây Nam Á,
//   Hoa Kỳ, LB Nga, Nhật Bản, Trung Quốc, Australia, CH Nam Phi).
// ID prefix: "H11DIA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11DIA', 'dia-ly', n, title, qs, opts);

export const H11DIA_WEEKS = [
  // ──────────────── HK1 ────────────────
  // Phần 1: Một số vấn đề kinh tế – xã hội thế giới
  M(1, 'Bài 1 — Sự khác biệt về trình độ phát triển kinh tế – xã hội', [
    Q('Hiện nay, các quốc gia trên thế giới được phân chia thành hai nhóm chính dựa vào trình độ phát triển kinh tế – xã hội là?', ['Nhóm châu Âu và châu Á', 'Nhóm phương Bắc và phương Nam thuần địa lí', 'Nhóm nước phát triển và nhóm nước đang phát triển', 'Nhóm tư bản và nhóm xã hội chủ nghĩa'], 2, 'Phát triển vs đang phát triển.'),
    Q('Tiêu chí phân biệt nước phát triển và đang phát triển KHÔNG bao gồm?', ['Diện tích lãnh thổ', 'GNI/người', 'Cơ cấu kinh tế', 'Chỉ số HDI'], 0, 'Diện tích không phải tiêu chí.'),
    Q('Đặc trưng kinh tế nổi bật của nhóm nước phát triển?', ['Nông nghiệp chiếm tỉ trọng lớn', 'Công nghiệp nhẹ là chủ đạo tuyệt đối', 'Chủ yếu khai thác tài nguyên thô', 'Dịch vụ chiếm tỉ trọng cao trong cơ cấu GDP'], 3, 'Dịch vụ chiếm ưu thế.'),
    Q('Đặc điểm xã hội thường gặp ở nước đang phát triển?', ['Tỉ lệ mù chữ rất thấp ở hầu hết các nước', 'Tuổi thọ trung bình thấp hơn, HDI thấp hoặc trung bình', 'HDI rất cao đồng đều', 'Tuổi thọ rất cao'], 1, 'HDI thấp/trung bình.'),
    Q('Khoảng cách phát triển giữa hai nhóm nước có xu hướng?', ['Đã được xoá bỏ hoàn toàn', 'Ngày càng gia tăng tuyệt đối ở tất cả các khía cạnh', 'Không thay đổi suốt thế kỷ XX–XXI', 'Vẫn còn lớn nhưng ngày càng được rút ngắn ở một số khía cạnh'], 3, 'Khoảng cách lớn nhưng đang dần thu hẹp.'),
    Q('Vì sao cần phân chia thế giới thành nước phát triển và đang phát triển?', ['Để phân biệt đối xử', 'Để cô lập các nước nghèo', 'Không có lí do thực tiễn', 'Để có chính sách hợp tác và hỗ trợ phù hợp'], 3, 'Hợp tác và hỗ trợ.'),
  ]),

  M(2, 'Bài 2 — Toàn cầu hoá và khu vực hoá kinh tế', [
    Q('Toàn cầu hoá kinh tế là quá trình?', ['Liên kết các nền kinh tế thế giới ngày càng chặt chẽ', 'Cô lập các nền kinh tế', 'Đóng cửa biên giới', 'Chỉ giao thương trong khu vực'], 0, 'Liên kết toàn cầu.'),
    Q('Biểu hiện rõ nét của toàn cầu hoá KHÔNG phải là?', ['Vai trò các công ty xuyên quốc gia gia tăng', 'Tăng cường tự cấp tự túc của quốc gia', 'Thương mại quốc tế phát triển nhanh', 'Đầu tư nước ngoài tăng'], 1, 'Toàn cầu hoá ngược với tự cấp tự túc.'),
    Q('Tổ chức kinh tế toàn cầu lớn nhất hiện nay?', ['OPEC', 'WTO', 'ASEAN', 'EU'], 1, 'WTO – Tổ chức Thương mại Thế giới.'),
    Q('Khu vực hoá kinh tế là?', ['Chỉ trao đổi văn hoá', 'Sự liên kết kinh tế giữa các nước trong một khu vực địa lí', 'Mở cửa cho toàn thế giới như nhau', 'Tự cô lập'], 1, 'Liên kết khu vực.'),
    Q('Hệ quả tích cực của toàn cầu hoá đối với nước đang phát triển?', ['Có cơ hội tiếp cận vốn, công nghệ, thị trường', 'Mất hoàn toàn chủ quyền', 'Không có lợi ích nào', 'Buộc phải nông nghiệp lạc hậu'], 0, 'Cơ hội phát triển.'),
    Q('Hệ quả tiêu cực của toàn cầu hoá?', ['Xoá bỏ mọi vấn đề xã hội', 'Đồng đều thu nhập thế giới', 'Không có rủi ro', 'Gia tăng cạnh tranh, nguy cơ phụ thuộc, khoảng cách giàu nghèo'], 3, 'Cạnh tranh + phân hoá.'),
  ]),

  M(3, 'Bài 3 — Thực hành: Tìm hiểu về cơ hội và thách thức của toàn cầu hoá', [
    Q('Đối với nước đang phát triển, cơ hội lớn từ toàn cầu hoá là?', ['Mất thị trường quốc tế', 'Trở về tự cung tự cấp', 'Tiếp cận vốn FDI, công nghệ, kinh nghiệm quản lí', 'Cô lập hoàn toàn'], 2, 'FDI + công nghệ.'),
    Q('Thách thức lớn từ toàn cầu hoá với nước đang phát triển?', ['Không có thách thức', 'Bị nước phát triển từ chối hợp tác', 'Mất quyền tham gia tổ chức quốc tế', 'Cạnh tranh khốc liệt, nguy cơ tụt hậu công nghệ, phụ thuộc bên ngoài'], 3, 'Cạnh tranh + phụ thuộc.'),
    Q('Để tận dụng cơ hội từ toàn cầu hoá, nước đang phát triển cần?', ['Cấm xuất nhập khẩu', 'Hạn chế giáo dục', 'Nâng cao chất lượng nguồn nhân lực và đổi mới công nghệ', 'Đóng cửa biên giới'], 2, 'Nhân lực + công nghệ.'),
    Q('Tổ chức nào hỗ trợ tài chính cho các nước đang phát triển?', ['Ngân hàng Thế giới (WB), IMF', 'NATO', 'WHO duy nhất', 'UNESCO duy nhất'], 0, 'WB + IMF.'),
    Q('Việt Nam tham gia WTO năm?', ['2005', '2007', '2010', '2001'], 1, '11/2007.'),
    Q('Ý nghĩa của hội nhập kinh tế quốc tế với Việt Nam?', ['Không có ý nghĩa', 'Mở rộng thị trường, thu hút đầu tư, thúc đẩy đổi mới', 'Cô lập kinh tế', 'Mất chủ quyền'], 1, 'Mở rộng cơ hội.'),
  ]),

  M(4, 'Bài 4 — Một số tổ chức quốc tế và khu vực; an ninh toàn cầu', [
    Q('Liên hợp quốc (UN) thành lập năm?', ['1955', '1991', '1919', '1945'], 3, 'LHQ thành lập 24/10/1945.'),
    Q('Trụ sở chính của Liên hợp quốc đặt tại?', ['Vienna', 'Geneva', 'New York', 'Paris'], 2, 'New York, Hoa Kỳ.'),
    Q('Tổ chức Thương mại Thế giới (WTO) thành lập năm?', ['1995', '2007', '1945', '1967'], 0, 'WTO 1995, kế tục GATT.'),
    Q('IMF có nhiệm vụ chính?', ['Bảo vệ di sản văn hoá', 'Hỗ trợ ổn định tiền tệ quốc tế và cán cân thanh toán', 'Triển khai vaccine', 'Quản lí an ninh quân sự'], 1, 'Quỹ Tiền tệ Quốc tế.'),
    Q('Vấn đề an ninh toàn cầu hiện nay KHÔNG bao gồm?', ['An ninh lương thực', 'An ninh năng lượng', 'An ninh mạng', 'Cạnh tranh không gian vũ trụ giữa các hành tinh'], 3, '"Giữa các hành tinh" là vô lí.'),
    Q('Để giải quyết các vấn đề an ninh toàn cầu, các quốc gia cần?', ['Hợp tác đa phương trên cơ sở luật pháp quốc tế', 'Hành động đơn phương', 'Cô lập nhau', 'Bỏ mặc'], 0, 'Hợp tác đa phương.'),
  ]),

  M(5, 'Bài 5 — Thực hành: Viết báo cáo về nền kinh tế tri thức', [
    Q('Kinh tế tri thức là nền kinh tế?', ['Dựa chủ yếu vào tri thức và công nghệ cao', 'Dựa hoàn toàn vào tài nguyên thô', 'Dựa vào nông nghiệp truyền thống', 'Dựa vào sức cơ bắp'], 0, 'Knowledge economy.'),
    Q('Đặc trưng của kinh tế tri thức?', ['Dịch vụ và công nghệ cao chiếm tỉ trọng lớn trong GDP', 'Nông nghiệp chiếm ưu thế tuyệt đối', 'Khai khoáng là chủ đạo', 'Tự cung tự cấp'], 0, 'Dịch vụ + công nghệ.'),
    Q('Yếu tố cốt lõi của kinh tế tri thức?', ['Tài nguyên dồi dào', 'Đất rộng người đông', 'Tiền mặt nhiều', 'Nguồn nhân lực chất lượng cao và đổi mới sáng tạo'], 3, 'Nhân lực + sáng tạo.'),
    Q('Quốc gia tiêu biểu của nền kinh tế tri thức?', ['Hoa Kỳ, Nhật Bản, Hàn Quốc, một số nước EU', 'Các nước nghèo nhất thế giới', 'Các quốc gia thuần nông', 'Các nước không có giáo dục'], 0, 'Các nước phát triển.'),
    Q('Cơ hội cho Việt Nam phát triển kinh tế tri thức?', ['Không có kết nối internet', 'Không có giáo dục đại học', 'Dân số trẻ, nhanh chóng tiếp cận công nghệ mới', 'Dân số già hoàn toàn'], 2, 'Dân số trẻ + tiếp cận CNTT.'),
    Q('Thách thức cho VN khi phát triển kinh tế tri thức?', ['Không có thách thức', 'Chất lượng nguồn nhân lực và hạ tầng công nghệ còn hạn chế', 'Quá thừa chuyên gia', 'Đã hoàn thiện'], 1, 'Nhân lực + hạ tầng.'),
  ]),

  // Phần 2: Mỹ La-tinh
  M(6, 'Bài 6 — Vị trí địa lí, điều kiện tự nhiên và dân cư của khu vực Mỹ La-tinh', [
    Q('Khu vực Mỹ La-tinh bao gồm các quốc gia ở?', ['Bắc Mỹ và Canada', 'Châu Phi', 'Châu Á', 'Trung và Nam Mỹ cùng vùng Ca-ri-bê'], 3, 'Trung + Nam Mỹ + Caribbean.'),
    Q('Đặc điểm khí hậu chủ yếu của Mỹ La-tinh?', ['Khí hậu băng giá hoàn toàn', 'Khô hạn toàn bộ', 'Ôn đới lạnh toàn bộ', 'Khí hậu nóng ẩm, phân hoá đa dạng'], 3, 'Nóng ẩm, đa dạng.'),
    Q('Tài nguyên thiên nhiên nổi bật của Mỹ La-tinh?', ['Cực kì nghèo nàn', 'Chỉ có sa mạc', 'Chỉ có băng tuyết', 'Khoáng sản, rừng A-ma-dôn, đồng bằng phù sa'], 3, 'Phong phú: dầu, đồng, sắt, rừng.'),
    Q('Đặc điểm dân cư Mỹ La-tinh?', ['Đa dạng về tộc người, tỉ lệ đô thị hoá cao', 'Đồng nhất hoàn toàn', 'Dân số rất thưa thớt', 'Tỉ lệ đô thị hoá thấp nhất thế giới'], 0, 'Đa dạng + đô thị hoá cao.'),
    Q('Vấn đề xã hội nổi cộm của Mỹ La-tinh?', ['Thiếu đô thị', 'Dân số quá ít', 'Không có vấn đề xã hội', 'Bất bình đẳng thu nhập và đô thị hoá tự phát'], 3, 'Bất bình đẳng + đô thị tự phát.'),
    Q('Ngôn ngữ chính thức của hầu hết các nước Mỹ La-tinh?', ['Tiếng Đức', 'Tiếng Tây Ban Nha và Bồ Đào Nha', 'Tiếng Anh', 'Tiếng Pháp'], 1, 'Do thuộc địa Tây Ban Nha/Bồ.'),
  ]),

  M(7, 'Bài 7 — Tình hình kinh tế Mỹ La-tinh', [
    Q('Đặc điểm chung kinh tế Mỹ La-tinh?', ['Đều là nước nghèo nhất thế giới', 'Phát triển không đều, một số nước đạt mức trung bình – cao', 'Đồng đều toàn khu vực', 'Đều là nước phát triển'], 1, 'Không đồng đều.'),
    Q('Nền kinh tế nào lớn nhất Mỹ La-tinh?', ['Cô-lôm-bi-a', 'Pê-ru', 'Pa-na-ma', 'Bra-xin'], 3, 'Bra-xin lớn nhất.'),
    Q('Ngành dịch vụ chiếm tỉ trọng?', ['Bằng 0%', 'Lớn trong cơ cấu GDP của hầu hết các nước Mỹ La-tinh', 'Không đáng kể', 'Chỉ ở vùng nông thôn'], 1, 'Dịch vụ chiếm tỉ trọng cao.'),
    Q('Vấn đề lớn của kinh tế Mỹ La-tinh?', ['Không có nông nghiệp', 'Đã hết khoáng sản', 'Nợ nước ngoài cao, lệ thuộc xuất khẩu nguyên liệu', 'Quá ít hàng xuất khẩu'], 2, 'Nợ + phụ thuộc nguyên liệu.'),
    Q('Tổ chức khu vực kinh tế ở Mỹ La-tinh?', ['Mercosur', 'EU', 'ASEAN', 'NAFTA cũ là của Bắc Mỹ'], 0, 'Mercosur 1991.'),
    Q('Triển vọng kinh tế Mỹ La-tinh phụ thuộc vào?', ['Cô lập với thế giới', 'Khôi phục chế độ thuộc địa', 'Đa dạng hoá cơ cấu kinh tế và hội nhập', 'Quay về tự cung tự cấp'], 2, 'Đa dạng hoá + hội nhập.'),
  ]),

  M(8, 'Bài 8 — Thực hành: Viết báo cáo về kinh tế Mỹ La-tinh', [
    Q('Bra-xin nổi tiếng về sản xuất?', ['Không có nông nghiệp', 'Cà phê, đậu nành, mía đường', 'Lúa mì duy nhất', 'Lúa nước duy nhất'], 1, 'Nông sản xuất khẩu lớn.'),
    Q('Chi-lê có thế mạnh khoáng sản?', ['Kim cương duy nhất', 'Bạch kim duy nhất', 'Đồng (lớn nhất thế giới)', 'Vàng nhiều hơn cả'], 2, 'Chi-lê – cường quốc đồng.'),
    Q('Cuba có thế mạnh truyền thống?', ['Sản xuất máy bay', 'Tàu vũ trụ', 'Mía đường', 'Sản xuất ô tô'], 2, 'Cuba nổi tiếng mía đường.'),
    Q('Vê-nê-xu-ê-la có thế mạnh?', ['Dầu mỏ', 'Lúa gạo', 'Cao su', 'Cá hồi'], 0, 'Dầu khí lớn.'),
    Q('Ác-hen-ti-na có thế mạnh nông nghiệp?', ['Trồng lúa nước', 'Trồng cà phê chính', 'Đồng cỏ Pam-pa – chăn nuôi bò và trồng lúa mì', 'Trồng cao su'], 2, 'Pam-pa nông nghiệp.'),
    Q('Một thách thức chung của các nền kinh tế Mỹ La-tinh?', ['Lạm phát cao, bất ổn chính trị, bất bình đẳng', 'Quá ổn định', 'Không có thách thức', 'Dư thừa lao động chất lượng cao'], 0, 'Lạm phát + bất ổn.'),
  ]),

  // EU
  M(9, 'Bài 9 — Liên minh châu Âu (EU) — Vị thế và mục tiêu', [
    Q('Liên minh châu Âu (EU) ra đời từ?', ['Liên hợp quốc', 'NATO', 'OPEC', 'Cộng đồng than – thép châu Âu (1951)'], 3, 'ECSC 1951.'),
    Q('Hiệp ước Ma-xtrích thành lập EU năm?', ['1993', '2004', '1957', '1991'], 0, 'Ký 1992, hiệu lực 1993.'),
    Q('Số thành viên EU hiện nay (sau Brexit)?', ['28', '25', '30', '27'], 3, '27 thành viên.'),
    Q('Đồng tiền chung của EU?', ['Đồng Yên', 'Đồng Euro', 'Đồng Đô la Mỹ', 'Đồng Bảng Anh'], 1, 'Euro từ 1999 (tiền giấy 2002).'),
    Q('Mục tiêu của EU?', ['Xây dựng liên minh kinh tế, chính trị, an ninh và xã hội', 'Liên minh quân sự thuần tuý', 'Liên minh thuộc địa', 'Tổ chức tôn giáo'], 0, 'Liên minh toàn diện.'),
    Q('EU là trung tâm kinh tế?', ['Không đáng kể', 'Đang phát triển', 'Hàng đầu thế giới (cùng Hoa Kỳ, Trung Quốc)', 'Yếu nhất thế giới'], 2, 'Trung tâm kinh tế lớn.'),
  ]),

  M(10, 'Bài 10 — Kinh tế của EU', [
    Q('EU có thị trường?', ['Thị trường chung – tự do lưu thông hàng hoá, dịch vụ, vốn, lao động', 'Đóng cửa', 'Tự cung tự cấp', 'Cấm nhập khẩu'], 0, 'Bốn tự do.'),
    Q('Cơ cấu kinh tế của EU đặc trưng?', ['Không có dịch vụ', 'Khai khoáng chiếm ưu thế', 'Dịch vụ và công nghiệp công nghệ cao chiếm tỉ trọng lớn', 'Nông nghiệp chiếm 70%'], 2, 'Dịch vụ + công nghệ cao.'),
    Q('EU là một trong những?', ['Bạn hàng thương mại lớn nhất thế giới', 'Khu vực ít giao thương', 'Cô lập', 'Đóng cửa thị trường'], 0, 'Bạn hàng lớn.'),
    Q('Chính sách nông nghiệp chung của EU (CAP) nhằm?', ['Tăng nhập khẩu lương thực hoàn toàn', 'Không có chính sách', 'Bảo đảm an ninh lương thực và thu nhập cho nông dân', 'Bỏ nông nghiệp'], 2, 'CAP – chính sách trọng yếu.'),
    Q('EU dẫn đầu thế giới về?', ['Năng lượng tái tạo và bảo vệ môi trường', 'Khai khoáng thô', 'Tài nguyên dầu mỏ', 'Sản xuất nông sản giá rẻ'], 0, 'Năng lượng sạch + môi trường.'),
    Q('Vấn đề khó khăn của kinh tế EU?', ['Quá nhiều thành viên mới', 'Già hoá dân số, chênh lệch giữa các thành viên, Brexit', 'Dân số quá trẻ', 'Đồng đều tuyệt đối'], 1, 'Già hoá + chênh lệch.'),
  ]),

  M(11, 'Bài 11 — Thực hành: Viết báo cáo về sự phát triển công nghiệp của EU', [
    Q('Công nghiệp EU nổi bật ở các ngành?', ['Khai thác than thuần tuý', 'Dệt may giá rẻ là chủ đạo', 'Chỉ chế biến nông sản', 'Ô tô, hàng không vũ trụ, hoá chất, điện tử'], 3, 'Công nghệ cao.'),
    Q('Ngành hàng không vũ trụ EU tiêu biểu nhờ tập đoàn?', ['Lockheed', 'COMAC', 'Airbus', 'Boeing'], 2, 'Airbus của EU.'),
    Q('Công nghiệp ô tô EU mạnh ở quốc gia?', ['Mal-ta duy nhất', 'Đức, Pháp, I-ta-li-a', 'Hy Lạp duy nhất', 'Bồ Đào Nha duy nhất'], 1, 'Đức – ngành ô tô lớn.'),
    Q('EU có ưu thế gì để phát triển công nghiệp công nghệ cao?', ['Nguồn nhân lực chất lượng cao, vốn lớn, KH-CN tiên tiến', 'Tài nguyên rẻ vô tận', 'Lao động giá rẻ duy nhất', 'Đất đai rộng nhất'], 0, 'Nhân lực + KHCN.'),
    Q('Thách thức của công nghiệp EU?', ['Cạnh tranh từ châu Á, già hoá lao động, chi phí cao', 'Không có cạnh tranh', 'Quá thừa lao động trẻ', 'Tài nguyên dồi dào không giới hạn'], 0, 'Cạnh tranh + chi phí cao.'),
    Q('Định hướng công nghiệp EU?', ['Khai thác tài nguyên thô tối đa', 'Bỏ công nghiệp', 'Chuyển đổi xanh và số (green & digital)', 'Quay về công nghiệp nặng cũ'], 2, 'Xanh + số hoá.'),
  ]),

  // Đông Nam Á
  M(12, 'Bài 12 — Đông Nam Á: vị trí, điều kiện tự nhiên và dân cư', [
    Q('Đông Nam Á gồm bao nhiêu quốc gia?', ['9', '12', '11', '10'], 2, '11 nước (gồm Đông Ti-mo).'),
    Q('Đông Nam Á chia thành hai khu vực địa lí?', ['Đông và Tây ĐNA', 'Bắc và Nam ĐNA', 'Trung và Cận ĐNA', 'ĐNA lục địa và ĐNA hải đảo'], 3, 'Lục địa + hải đảo.'),
    Q('Khí hậu chủ đạo ở ĐNA?', ['Sa mạc hoàn toàn', 'Nhiệt đới gió mùa và xích đạo', 'Hàn đới', 'Ôn đới lục địa'], 1, 'Nhiệt đới + xích đạo.'),
    Q('Tài nguyên nổi bật của ĐNA?', ['Khoáng sản, rừng, biển, đất phù sa', 'Băng tuyết', 'Sa mạc cát', 'Núi lửa toàn bộ'], 0, 'Tài nguyên đa dạng.'),
    Q('Dân cư ĐNA?', ['Đồng nhất một dân tộc', 'Rất thưa thớt', 'Đông và trẻ, đa dân tộc', 'Già và ít'], 2, 'Đông + đa dạng.'),
    Q('Hệ quả của vị trí địa lí ĐNA?', ['Bị cô lập hoàn toàn', 'Không có giá trị giao thương', 'Tách rời thế giới', 'Là cầu nối giữa châu Á và châu Đại Dương, giữa Thái Bình Dương và Ấn Độ Dương'], 3, 'Cầu nối chiến lược.'),
  ]),

  M(13, 'Bài 13 — Kinh tế Đông Nam Á', [
    Q('Cơ cấu kinh tế các nước ĐNA đang chuyển dịch theo hướng?', ['Tăng tỉ trọng công nghiệp và dịch vụ, giảm nông nghiệp', 'Tăng nông nghiệp giảm dịch vụ', 'Giữ nguyên cơ cấu cũ', 'Bỏ nông nghiệp tức thì'], 0, 'CNH-HĐH.'),
    Q('Nông nghiệp ĐNA nổi bật về?', ['Lê, táo ôn đới', 'Lúa nước, cao su, cà phê, dầu cọ', 'Lúa mì', 'Củ cải đường'], 1, 'Cây nhiệt đới.'),
    Q('Nước xuất khẩu gạo lớn ở ĐNA?', ['Việt Nam, Thái Lan', 'Mi-an-ma duy nhất', 'Bru-nây duy nhất', 'Xin-ga-po duy nhất'], 0, 'VN + Thái Lan.'),
    Q('Công nghiệp ĐNA phát triển mạnh ở?', ['Khai thác urani', 'Lắp ráp điện tử, dệt may, chế biến thực phẩm', 'Công nghiệp vũ trụ cao cấp', 'Sản xuất tàu ngầm hạt nhân'], 1, 'Công nghiệp nhẹ + lắp ráp.'),
    Q('Ngành dịch vụ tăng trưởng nhanh ở ĐNA?', ['Săn bắn', 'Du lịch, tài chính – ngân hàng, vận tải biển', 'Khai khoáng', 'Trồng trọt truyền thống'], 1, 'Dịch vụ phát triển.'),
    Q('Triển vọng kinh tế ĐNA phụ thuộc vào?', ['Cô lập thế giới', 'Bỏ giáo dục', 'Hội nhập sâu rộng và chuyển đổi số', 'Quay về tự cấp tự túc'], 2, 'Hội nhập + số hoá.'),
  ]),

  M(14, 'Bài 14 — Thực hành: Tìm hiểu hoạt động kinh tế đối ngoại của ĐNA và ASEAN', [
    Q('ASEAN thành lập năm?', ['1995', '1945', '1955', '1967'], 3, '8/8/1967 tại Băng-cốc.'),
    Q('Mục tiêu của ASEAN?', ['Hoà bình, ổn định, hợp tác và phát triển', 'Liên minh quân sự đối đầu', 'Tổ chức tôn giáo', 'Liên minh thuộc địa'], 0, 'Hợp tác phát triển.'),
    Q('Cộng đồng ASEAN gồm 3 trụ cột?', ['Quân sự – kinh tế – tôn giáo', 'Văn hoá – thể thao – nông nghiệp', 'Y tế – giáo dục – du lịch', 'Chính trị – an ninh, kinh tế, văn hoá – xã hội'], 3, 'Ba trụ cột.'),
    Q('Việt Nam gia nhập ASEAN năm?', ['2007', '1986', '1991', '1995'], 3, '28/7/1995.'),
    Q('Khu vực mậu dịch tự do ASEAN viết tắt là?', ['AFTA', 'AEC tiền thân', 'CAFTA', 'TPP'], 0, 'AFTA 1992.'),
    Q('Đối tác lớn của ASEAN?', ['Chỉ Hoa Kỳ', 'Không có đối tác lớn', 'Trung Quốc, Hoa Kỳ, Nhật Bản, EU, Hàn Quốc, Ấn Độ', 'Chỉ Trung Quốc'], 2, 'Đa đối tác.'),
  ]),

  // Tây Nam Á
  M(15, 'Bài 15 — Khu vực Tây Nam Á: vị trí, tự nhiên, dân cư', [
    Q('Tây Nam Á tiếp giáp các châu lục?', ['Châu Đại Dương', 'Châu Á, châu Phi và châu Âu', 'Chỉ châu Á', 'Châu Mỹ'], 1, 'Ngã ba ba châu.'),
    Q('Khí hậu Tây Nam Á chủ yếu?', ['Nhiệt đới ẩm gió mùa', 'Khô hạn, nhiệt đới sa mạc', 'Lạnh ẩm quanh năm', 'Băng giá'], 1, 'Khô hạn, sa mạc nhiều.'),
    Q('Tài nguyên nổi bật của Tây Nam Á?', ['Dầu mỏ và khí tự nhiên (chiếm khoảng nửa trữ lượng thế giới)', 'Rừng nguyên sinh dày đặc', 'Cá biển dồi dào duy nhất', 'Không có tài nguyên'], 0, 'Trung tâm dầu khí thế giới.'),
    Q('Dân cư Tây Nam Á?', ['Chủ yếu theo Phật giáo', 'Chủ yếu theo Thiên Chúa giáo', 'Không theo tôn giáo nào', 'Chủ yếu theo đạo Hồi (Islam), tỉ lệ đô thị hoá khá cao'], 3, 'Islam là tôn giáo chính.'),
    Q('Vấn đề xã hội nổi cộm ở Tây Nam Á?', ['Xung đột sắc tộc, tôn giáo, tranh chấp lãnh thổ', 'Hoàn toàn ổn định', 'Không có xung đột', 'Chỉ có thiên tai'], 0, 'Khu vực bất ổn.'),
    Q('Vị trí địa lí Tây Nam Á có tầm quan trọng?', ['Không có giá trị', 'Bị cô lập', 'Chỉ là vùng đệm nhỏ', 'Án ngữ tuyến hàng hải từ châu Á sang châu Âu qua kênh Xuy-ê'], 3, 'Tuyến hàng hải chiến lược.'),
  ]),

  M(16, 'Bài 16 — Kinh tế Tây Nam Á', [
    Q('Đặc trưng kinh tế nổi bật của Tây Nam Á?', ['Công nghiệp ô tô', 'Nông nghiệp lúa nước', 'Sản xuất chip bán dẫn', 'Khai thác và xuất khẩu dầu khí'], 3, 'Dầu khí là chủ đạo.'),
    Q('Tổ chức xuất khẩu dầu mỏ thế giới mà nhiều nước Tây Nam Á tham gia?', ['WTO', 'NATO', 'EU', 'OPEC'], 3, 'OPEC.'),
    Q('Nước có trữ lượng dầu mỏ lớn ở Tây Nam Á?', ['Ả-rập Xê-út, I-ran, I-rắc, UAE, Cô-oét', 'Mông Cổ', 'Băng-la-đét', 'Nê-pan'], 0, 'Vùng vịnh Péc-xích.'),
    Q('Kinh tế Tây Nam Á phụ thuộc lớn vào?', ['Nông nghiệp lúa nước', 'Công nghiệp luyện kim', 'Giá dầu thế giới', 'Du lịch trượt tuyết'], 2, 'Phụ thuộc giá dầu.'),
    Q('Định hướng đa dạng hoá kinh tế Tây Nam Á?', ['Phát triển du lịch, tài chính, công nghệ (vd UAE, Ả-rập Xê-út)', 'Quay về du mục thuần tuý', 'Đóng cửa nền kinh tế', 'Bỏ dầu mỏ ngay lập tức'], 0, 'Đa dạng hoá.'),
    Q('Vấn đề khó khăn của kinh tế Tây Nam Á?', ['Quá thừa nước ngọt', 'Hoàn toàn ổn định', 'Không có khó khăn', 'Bất ổn chính trị, xung đột, khan hiếm nước ngọt'], 3, 'Xung đột + thiếu nước.'),
  ]),

  M(17, 'Bài 17 — Thực hành: Viết báo cáo về vấn đề dầu khí của khu vực Tây Nam Á', [
    Q('Tây Nam Á chiếm khoảng?', ['10% trữ lượng', '5% trữ lượng', '90% trữ lượng', 'Một nửa trữ lượng dầu mỏ thế giới'], 3, 'Khoảng 1/2 trữ lượng.'),
    Q('Eo biển Hooc-mu-zơ quan trọng vì?', ['Không có giá trị', 'Là tuyến xuất khẩu dầu khí từ vịnh Péc-xích ra thế giới', 'Là tuyến du lịch trượt tuyết', 'Là tuyến tàu phá băng'], 1, 'Tuyến dầu chiến lược.'),
    Q('Kênh đào Xuy-ê (Suez) thuộc nước nào nối Tây Nam Á với châu Âu?', ['Hy Lạp', 'I-ta-li-a', 'Ai Cập', 'Tây Ban Nha'], 2, 'Suez của Ai Cập.'),
    Q('Tác động của dầu khí đến kinh tế khu vực?', ['Chỉ tích cực', 'Chỉ tiêu cực', 'Thu nhập lớn nhưng dễ tổn thương khi giá biến động', 'Không có tác động'], 2, 'Hai mặt.'),
    Q('Một số nước đã xây dựng quỹ đầu tư quốc gia (SWF) lớn?', ['Pa-le-xtin', 'Li-băng', 'UAE, Ả-rập Xê-út, Cô-oét', 'Y-ê-men, Xy-ri'], 2, 'SWF Trung Đông.'),
    Q('Trách nhiệm các nước với năng lượng và môi trường?', ['Khai thác không giới hạn', 'Bỏ khai thác hoàn toàn ngay', 'Không quan tâm môi trường', 'Cân bằng khai thác dầu khí với chuyển đổi năng lượng sạch'], 3, 'Khai thác + năng lượng sạch.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Biểu hiện rõ của toàn cầu hoá kinh tế?', ['Mọi nước đóng cửa', 'Bỏ thị trường tài chính', 'Thương mại quốc tế và đầu tư xuyên quốc gia tăng mạnh', 'Tự cấp tự túc tăng'], 2, 'Thương mại + đầu tư.'),
    Q('Khu vực có nhiều tổ chức quốc tế nhất?', ['Châu Đại Dương', 'Bắc Cực', 'Sa mạc Sahara', 'Châu Âu (EU, OECD…)'], 3, 'Châu Âu.'),
    Q('Mỹ La-tinh có thế mạnh chung về?', ['Khai thác than chiếm 90%', 'Tài nguyên thiên nhiên dồi dào', 'Công nghiệp vũ trụ', 'Nông nghiệp ôn đới'], 1, 'Tài nguyên thiên nhiên.'),
    Q('Đông Nam Á có vị trí?', ['Bị cô lập', 'Không quan trọng', 'Chỉ phục vụ giao thông nội địa', 'Cầu nối hai đại dương và hai châu lục'], 3, 'Cầu nối chiến lược.'),
    Q('Tây Nam Á có nguồn lực chính?', ['Năng lượng gió ngoài khơi', 'Năng lượng hạt nhân', 'Cá biển', 'Dầu mỏ và khí tự nhiên'], 3, 'Dầu khí.'),
    Q('Liên minh châu Âu (EU) hiện có?', ['15 thành viên', '27 thành viên (sau Brexit)', '28 thành viên', '20 thành viên'], 1, '27 sau Brexit.'),
  ]),

  // ──────────────── HK2 ────────────────
  // Hoa Kỳ
  M(19, 'Bài 18 — Hoa Kỳ: vị trí địa lí, điều kiện tự nhiên và dân cư', [
    Q('Hoa Kỳ là quốc gia có diện tích?', ['Nhỏ nhất nhóm G7', 'Tương đương Bra-xin', 'Lớn thứ 3 thế giới', 'Lớn nhất thế giới'], 2, 'Khoảng 9,8 triệu km² – top 3.'),
    Q('Hoa Kỳ tiếp giáp hai đại dương?', ['Ấn Độ Dương và Đại Tây Dương', 'Thái Bình Dương và Bắc Băng Dương', 'Đại Tây Dương và Thái Bình Dương', 'Bắc Băng Dương và Ấn Độ Dương'], 2, 'ĐTD + TBD.'),
    Q('Khí hậu Hoa Kỳ phân hoá?', ['Đa dạng từ ôn đới đến nhiệt đới, có vùng hàn đới và sa mạc', 'Chỉ một kiểu khí hậu', 'Chỉ nhiệt đới', 'Chỉ ôn đới'], 0, 'Phân hoá đa dạng.'),
    Q('Tài nguyên nổi bật của Hoa Kỳ?', ['Chỉ có gỗ', 'Không có khoáng sản', 'Khoáng sản phong phú, đất nông nghiệp lớn, năng lượng dồi dào', 'Nghèo tài nguyên'], 2, 'Tài nguyên đa dạng.'),
    Q('Dân số Hoa Kỳ?', ['Già hoá nghiêm trọng nhất thế giới', 'Rất thưa thớt', 'Đông, đa sắc tộc, nhập cư là nguồn quan trọng', 'Đồng nhất một sắc tộc'], 2, 'Đa sắc tộc + nhập cư.'),
    Q('Tỉ lệ đô thị hoá ở Hoa Kỳ?', ['Không xác định', 'Rất cao (trên 80%)', 'Thấp dưới 30%', 'Khoảng 50%'], 1, 'Đô thị hoá rất cao.'),
  ]),

  M(20, 'Bài 19 — Kinh tế Hoa Kỳ', [
    Q('Hoa Kỳ là nền kinh tế?', ['Bằng Việt Nam', 'Hàng đầu thế giới về quy mô GDP danh nghĩa', 'Yếu nhất', 'Đang phát triển'], 1, 'GDP danh nghĩa lớn nhất.'),
    Q('Cơ cấu kinh tế Hoa Kỳ?', ['Dịch vụ chiếm tỉ trọng rất cao (>75%) trong GDP', 'Nông nghiệp 70%', 'Công nghiệp 90%', 'Khai khoáng chủ đạo'], 0, 'Dịch vụ chiếm ưu thế.'),
    Q('Nông nghiệp Hoa Kỳ?', ['Lạc hậu', 'Tự cấp tự túc', 'Không xuất khẩu', 'Sản xuất hàng đầu thế giới về ngô, đậu nành, thịt bò'], 3, 'Cường quốc nông nghiệp.'),
    Q('Công nghiệp Hoa Kỳ mạnh ở?', ['Dệt may giá rẻ', 'Khai thác than thủ công', 'Chỉ chế biến thực phẩm', 'Công nghệ cao, hàng không vũ trụ, dược phẩm, điện tử'], 3, 'Công nghệ cao.'),
    Q('Đồng tiền của Hoa Kỳ?', ['Đô la Mỹ (USD) – đồng tiền dự trữ chủ yếu của thế giới', 'Đồng Euro', 'Đồng Bảng Anh', 'Đồng Nhân dân tệ'], 0, 'USD.'),
    Q('Vai trò của Hoa Kỳ trong kinh tế thế giới?', ['Không ảnh hưởng', 'Chỉ tiêu thụ trong nước', 'Cô lập', 'Trung tâm tài chính, công nghệ, thị trường tiêu dùng lớn'], 3, 'Trung tâm kinh tế thế giới.'),
  ]),

  M(21, 'Bài 20 — Thực hành: Tìm hiểu kinh tế Hoa Kỳ qua tư liệu', [
    Q('Trung tâm tài chính lớn của Hoa Kỳ?', ['Niu Or-le-ăng (chỉ du lịch)', 'New York (Phố Uôn)', 'Đa-lát (chỉ năng lượng)', 'Phoenix (chỉ sa mạc)'], 1, 'Phố Wall, NYSE.'),
    Q('Thung lũng Silicon thuộc bang nào?', ['Ca-li-pho-ni-a', 'Tếch-dát', 'Phlo-ri-đa', 'Nê-vada'], 0, 'California.'),
    Q('Ngành công nghiệp ô tô Hoa Kỳ tập trung ở?', ['A-la-xca', 'Vùng Hồ Lớn (Detroit)', 'Phlo-ri-đa', 'Ha-oai'], 1, 'Detroit – đô thị ô tô.'),
    Q('Sản phẩm xuất khẩu chủ lực của Hoa Kỳ?', ['Khai khoáng thô', 'Chỉ dầu thô', 'Máy bay, phần mềm, dược phẩm, nông sản', 'Dệt may giá rẻ'], 2, 'Hàng giá trị cao.'),
    Q('Đối tác thương mại lớn của Hoa Kỳ?', ['Đông Ti-mo duy nhất', 'Pa-le-xtin duy nhất', 'Trung Quốc, EU, Mê-hi-cô, Ca-na-đa', 'Mông Cổ duy nhất'], 2, 'Đa đối tác.'),
    Q('Khó khăn của kinh tế Hoa Kỳ hiện nay?', ['Đồng đều tuyệt đối', 'Chênh lệch giàu nghèo, thâm hụt thương mại, cạnh tranh từ Trung Quốc', 'Không có khó khăn', 'Quá thừa tài nguyên'], 1, 'Bất bình đẳng + cạnh tranh.'),
  ]),

  // LB Nga
  M(22, 'Bài 21 — Liên bang Nga: vị trí, tự nhiên, dân cư', [
    Q('Liên bang Nga là quốc gia có diện tích?', ['Lớn nhất thế giới', 'Thứ 2 thế giới', 'Thứ 5 thế giới', 'Thứ 10 thế giới'], 0, 'Khoảng 17 triệu km².'),
    Q('Nga nằm chủ yếu ở?', ['Châu Phi', 'Đông Âu và Bắc Á', 'Tây Âu duy nhất', 'Đông Nam Á'], 1, 'Trải dài Á – Âu.'),
    Q('Khí hậu chủ đạo của Nga?', ['Ôn đới và cận cực, có vùng hàn đới', 'Nhiệt đới', 'Xích đạo', 'Cận xích đạo'], 0, 'Ôn đới + lạnh.'),
    Q('Tài nguyên nổi bật của Nga?', ['Rất nghèo tài nguyên', 'Chỉ có cát', 'Không có rừng', 'Dầu khí, than, kim loại, rừng tai-ga'], 3, 'Tài nguyên dồi dào.'),
    Q('Dân số Nga có đặc điểm?', ['Rất thưa, không có vấn đề', 'Đông nhưng già hoá, tỉ lệ tăng tự nhiên thấp', 'Trẻ và tăng nhanh', 'Đông đảo dưới 20 tuổi'], 1, 'Già hoá.'),
    Q('Vùng nào của Nga giàu dầu khí nhất?', ['Mát-xcơ-va', 'Tây Xi-bia', 'Đồng bằng Đông Âu', 'Vùng Viễn Đông duy nhất'], 1, 'Tây Siberia.'),
  ]),

  M(23, 'Bài 22 — Kinh tế Liên bang Nga', [
    Q('Liên bang Nga là cường quốc về?', ['Sản xuất cà phê', 'Năng lượng và quốc phòng', 'Sản xuất chip bán dẫn', 'Du lịch sa mạc'], 1, 'Dầu khí + vũ khí.'),
    Q('Ngành công nghiệp truyền thống của Nga?', ['Dệt may giá rẻ duy nhất', 'Chế biến nông sản nhiệt đới', 'Sản xuất ô tô là chủ đạo tuyệt đối', 'Khai khoáng, luyện kim, cơ khí, hoá chất'], 3, 'Công nghiệp nặng.'),
    Q('Nông nghiệp Nga?', ['Lúa nước', 'Mía đường', 'Sản xuất nhiều lúa mì, lúa mạch, chăn nuôi', 'Cao su và cà phê'], 2, 'Cây ôn đới + lúa mì.'),
    Q('Dịch vụ ở Nga?', ['Chỉ ở Mát-xcơ-va duy nhất', 'Phát triển nhưng chưa bằng các nước phát triển hàng đầu', 'Vượt trội nhất thế giới', 'Không có dịch vụ'], 1, 'Đang phát triển.'),
    Q('Quan hệ kinh tế Nga – Việt Nam?', ['Đối tác chiến lược toàn diện, hợp tác năng lượng và quốc phòng', 'Không có quan hệ', 'Mới chỉ là đối tác thương mại nhỏ', 'Đối đầu'], 0, 'Đối tác chiến lược toàn diện.'),
    Q('Khó khăn của kinh tế Nga?', ['Quá phát triển công nghệ', 'Đã đa dạng hoàn toàn', 'Không có khó khăn', 'Phụ thuộc xuất khẩu năng lượng, cấm vận quốc tế'], 3, 'Phụ thuộc dầu + cấm vận.'),
  ]),

  // Nhật Bản
  M(24, 'Bài 23 — Nhật Bản: vị trí, tự nhiên, dân cư', [
    Q('Nhật Bản là quốc đảo nằm ở?', ['Đông Á, Tây Thái Bình Dương', 'Đông Nam Á', 'Trung Á', 'Nam Á'], 0, 'Đông Á, đảo.'),
    Q('Nhật Bản gồm bao nhiêu đảo lớn?', ['6 đảo lớn', '10 đảo lớn', '4 đảo lớn (Honshu, Hokkaido, Kyushu, Shikoku)', '2 đảo'], 2, '4 đảo chính.'),
    Q('Đặc điểm địa hình Nhật Bản?', ['Đồng bằng rộng', 'Toàn cao nguyên', 'Toàn sa mạc', 'Núi nhiều, đồng bằng ven biển hẹp'], 3, 'Núi nhiều, đồng bằng nhỏ.'),
    Q('Khó khăn lớn về tự nhiên của Nhật Bản?', ['Động đất, núi lửa, sóng thần', 'Bão tuyết toàn năm', 'Hạn hán kéo dài hàng năm', 'Lốc xoáy sa mạc'], 0, 'Thiên tai địa chất.'),
    Q('Dân số Nhật Bản có đặc điểm?', ['Đông đảo dưới 15 tuổi', 'Rất thưa thớt', 'Già hoá nhanh, tỉ lệ sinh thấp', 'Trẻ và tăng nhanh'], 2, 'Già hoá.'),
    Q('Tài nguyên thiên nhiên của Nhật Bản?', ['Tự cấp tự túc về dầu', 'Rất nghèo khoáng sản, phải nhập khẩu', 'Cực kì giàu khoáng sản', 'Đa dạng vô hạn'], 1, 'Nghèo tài nguyên.'),
  ]),

  M(25, 'Bài 24 — Kinh tế Nhật Bản', [
    Q('Nhật Bản là nền kinh tế?', ['Yếu nhất G7', 'Đang phát triển', 'Lớn thứ 3 thế giới (đo theo GDP danh nghĩa)', 'Lớn nhất thế giới'], 2, 'Top 3 thế giới.'),
    Q('Công nghiệp Nhật Bản mạnh ở?', ['Dệt may giá rẻ', 'Chế biến cao su sơ chế', 'Ô tô, điện tử, robot, đóng tàu', 'Khai khoáng thô'], 2, 'Công nghiệp công nghệ cao.'),
    Q('Một số tập đoàn công nghệ – ô tô lớn của Nhật?', ['Samsung, LG', 'Volkswagen, BMW', 'Toyota, Honda, Sony, Panasonic', 'Boeing, Ford'], 2, 'Toyota, Sony…'),
    Q('Nông nghiệp Nhật Bản?', ['Lạc hậu', 'Thâm canh, năng suất cao nhưng quy mô nhỏ', 'Quy mô lớn, quảng canh', 'Tự cấp hoàn toàn lương thực'], 1, 'Thâm canh + năng suất cao.'),
    Q('Dịch vụ ở Nhật Bản?', ['Chỉ có ngân hàng', 'Lạc hậu', 'Phát triển cao, tài chính – thương mại – du lịch mạnh', 'Không phát triển'], 2, 'Dịch vụ đa dạng.'),
    Q('Khó khăn lớn của kinh tế Nhật Bản?', ['Tăng trưởng chậm, già hoá dân số, thiếu lao động', 'Quá thừa dân số trẻ', 'Tài nguyên dồi dào dư thừa', 'Không có khó khăn'], 0, 'Già hoá + tăng trưởng chậm.'),
  ]),

  M(26, 'Bài 25 — Thực hành: Viết báo cáo về hoạt động ngoại thương của Nhật Bản', [
    Q('Đặc điểm ngoại thương Nhật Bản?', ['Xuất siêu các mặt hàng công nghệ cao, nhập nguyên liệu và năng lượng', 'Nhập siêu toàn diện', 'Tự cấp tự túc, không buôn bán', 'Chỉ xuất khẩu nông sản'], 0, 'Xuất hàng công nghệ cao.'),
    Q('Đối tác thương mại lớn của Nhật?', ['Trung Quốc, Hoa Kỳ, EU, ASEAN', 'Chỉ Bắc Triều Tiên', 'Chỉ Mông Cổ', 'Chỉ một số nước châu Phi'], 0, 'Đa đối tác.'),
    Q('Cảng biển lớn của Nhật Bản?', ['Cảng ở Bắc Cực', 'Yokohama, Kobe, Tokyo, Nagoya', 'Cảng nội địa duy nhất', 'Cảng trong sa mạc'], 1, 'Cảng biển lớn.'),
    Q('Nhật Bản và Việt Nam là?', ['Quan hệ chỉ về văn hoá', 'Đối tác chiến lược toàn diện', 'Không có quan hệ', 'Đối đầu thương mại'], 1, 'Quan hệ chiến lược toàn diện.'),
    Q('ODA của Nhật Bản dành cho Việt Nam chủ yếu hỗ trợ?', ['Đóng cửa biên giới', 'Phát triển hạ tầng và đào tạo nhân lực', 'Mua vũ khí hạt nhân', 'Xoá nông nghiệp'], 1, 'Hạ tầng + nhân lực.'),
    Q('Triển vọng kinh tế Nhật Bản dựa vào?', ['Đổi mới sáng tạo, công nghệ xanh và số hoá', 'Quay về sản xuất giản đơn', 'Bỏ công nghệ cao', 'Cô lập thế giới'], 0, 'Sáng tạo + xanh + số.'),
  ]),

  // Trung Quốc
  M(27, 'Bài 26 — Trung Quốc: vị trí, tự nhiên, dân cư', [
    Q('Trung Quốc là quốc gia có diện tích?', ['Lớn thứ 4 thế giới', 'Nhỏ nhất châu Á', 'Lớn nhất thế giới', 'Tương đương VN'], 0, 'Khoảng 9,6 triệu km², top 4.'),
    Q('Trung Quốc tiếp giáp bao nhiêu nước?', ['14 nước', '5 nước', '20 nước', '3 nước'], 0, 'Tiếp giáp 14 nước.'),
    Q('Địa hình miền Tây Trung Quốc?', ['Núi và cao nguyên đồ sộ (Hi-ma-lay-a, Tây Tạng)', 'Đồng bằng', 'Sa mạc duy nhất', 'Vùng trũng dưới mực biển'], 0, 'Núi + cao nguyên.'),
    Q('Địa hình miền Đông Trung Quốc?', ['Đồng bằng châu thổ rộng (Hoa Bắc, Hoa Trung)', 'Cao nguyên cao 5000m', 'Sa mạc', 'Băng giá'], 0, 'Đồng bằng phù sa.'),
    Q('Dân số Trung Quốc?', ['Rất ít', 'Đồng nhất một dân tộc Hán hoàn toàn 100%', 'Toàn người di cư mới', 'Đông nhất hoặc nhì thế giới, nhưng đang già hoá'], 3, 'Khoảng 1,4 tỉ.'),
    Q('Trung Quốc có bao nhiêu dân tộc chính thức?', ['10 dân tộc', '500 dân tộc', '56 dân tộc, người Hán chiếm khoảng 91%', '1 dân tộc duy nhất'], 2, '56 dân tộc.'),
  ]),

  M(28, 'Bài 27 — Kinh tế Trung Quốc', [
    Q('Trung Quốc hiện là nền kinh tế?', ['Đang nghèo nhất', 'Lớn thứ 2 thế giới (theo GDP danh nghĩa)', 'Lớn nhất thế giới', 'Yếu nhất châu Á'], 1, 'Top 2 thế giới.'),
    Q('Cải cách mở cửa của Trung Quốc bắt đầu từ?', ['1949', '1991', '2001', '1978 dưới sự lãnh đạo của Đặng Tiểu Bình'], 3, 'Cuối 1978.'),
    Q('Đặc khu kinh tế đầu tiên của Trung Quốc?', ['Quảng Châu', 'Thâm Quyến', 'Bắc Kinh', 'Thượng Hải'], 1, 'Thâm Quyến – mở cửa đầu.'),
    Q('Cơ cấu kinh tế Trung Quốc?', ['Công nghiệp 100%', 'Khai khoáng chiếm 70%', 'Dịch vụ và công nghiệp đều có tỉ trọng lớn, nông nghiệp đang giảm', 'Nông nghiệp 80%'], 2, 'Đa ngành, công nghiệp + dịch vụ mạnh.'),
    Q('Trung Quốc là công xưởng của thế giới ở các ngành?', ['Sản xuất tàu vũ trụ liên hành tinh', 'Du lịch sa mạc', 'Điện tử, dệt may, lắp ráp', 'Hàng không vũ trụ thế hệ mới duy nhất'], 2, 'Công xưởng thế giới.'),
    Q('Vấn đề lớn của kinh tế Trung Quốc?', ['Không có vấn đề', 'Quá đồng đều', 'Dân số quá trẻ', 'Chênh lệch giàu nghèo, ô nhiễm môi trường, già hoá'], 3, 'Bất bình đẳng + ô nhiễm.'),
  ]),

  M(29, 'Bài 28 — Thực hành: Viết báo cáo về Sáng kiến Vành đai – Con đường', [
    Q('Sáng kiến "Vành đai và Con đường" (BRI) do nước nào đề xướng năm 2013?', ['Ấn Độ', 'Trung Quốc', 'Nga', 'Hoa Kỳ'], 1, 'Tập Cận Bình 2013.'),
    Q('BRI gồm hai trục chính?', ['Đại Tây Dương và Bắc Băng Dương', 'Vành đai kinh tế con đường tơ lụa và Con đường tơ lụa trên biển thế kỉ 21', 'Vành đai vũ trụ và con đường mặt trăng', 'Bắc và Nam Cực'], 1, 'Hai trục bộ + biển.'),
    Q('BRI hướng tới?', ['Triệt tiêu thương mại quốc tế', 'Khôi phục chế độ phong kiến', 'Tăng cường kết nối hạ tầng, thương mại, đầu tư xuyên lục địa', 'Cô lập Trung Quốc'], 2, 'Kết nối hạ tầng.'),
    Q('Lo ngại đối với BRI từ một số quốc gia?', ['BRI quá hiền lành', 'Không liên quan kinh tế', 'BRI quá nhỏ bé', 'Bẫy nợ và ảnh hưởng chính trị'], 3, 'Bẫy nợ, ảnh hưởng.'),
    Q('Việt Nam và Trung Quốc?', ['Đối tác hợp tác chiến lược toàn diện', 'Không có quan hệ', 'Đối đầu hoàn toàn', 'Quan hệ chỉ là du lịch'], 0, 'Đối tác chiến lược toàn diện.'),
    Q('Ý nghĩa BRI với khu vực?', ['Chỉ tiêu cực hoàn toàn', 'Chỉ tích cực hoàn toàn', 'Cơ hội đầu tư hạ tầng, đồng thời cần thận trọng về bền vững tài chính', 'Không có ý nghĩa'], 2, 'Cơ hội + thận trọng.'),
  ]),

  // Australia
  M(30, 'Bài 29 — Australia (Ô-xtrây-li-a)', [
    Q('Australia nằm ở?', ['Châu Phi', 'Châu Âu', 'Châu Đại Dương, Nam bán cầu', 'Bắc bán cầu'], 2, 'Nam bán cầu.'),
    Q('Diện tích Australia?', ['Lớn thứ 6 thế giới', 'Nhỏ nhất thế giới', 'Lớn nhất thế giới', 'Tương đương Việt Nam'], 0, 'Khoảng 7,7 triệu km², top 6.'),
    Q('Khí hậu Australia chủ yếu?', ['Băng giá', 'Cực ẩm', 'Nhiệt đới và cận nhiệt khô; vùng giữa là hoang mạc rộng lớn', 'Hàn đới'], 2, 'Khô hạn nhiều.'),
    Q('Tài nguyên nổi bật của Australia?', ['Chỉ có đá núi lửa', 'Không có khoáng sản', 'Quặng sắt, than, dầu khí, đồng cỏ chăn nuôi', 'Nghèo tài nguyên'], 2, 'Cường quốc khoáng sản.'),
    Q('Australia là cường quốc về?', ['Sản xuất tàu vũ trụ', 'Khai thác than thủ công', 'Xuất khẩu khoáng sản, nông sản và dịch vụ giáo dục', 'Sản xuất ô tô giá rẻ'], 2, 'Khoáng sản + nông sản + giáo dục.'),
    Q('Dân cư Australia tập trung chủ yếu ở?', ['Vùng sa mạc trung tâm', 'Bắc cực', 'Tây Australia hoang mạc', 'Ven biển phía Đông và Đông Nam'], 3, 'Vùng ven biển.'),
  ]),

  // CH Nam Phi
  M(31, 'Bài 30 — Cộng hoà Nam Phi: tự nhiên và dân cư', [
    Q('Cộng hoà Nam Phi nằm ở?', ['Cực Nam châu Phi', 'Bắc Phi', 'Trung Phi', 'Đông Phi'], 0, 'Cực Nam châu Phi.'),
    Q('Khí hậu chủ yếu của Nam Phi?', ['Cận nhiệt khô và bán hoang mạc, có vùng địa trung hải', 'Hàn đới', 'Băng giá', 'Cực ẩm xích đạo'], 0, 'Cận nhiệt + khô.'),
    Q('Tài nguyên nổi bật của Nam Phi?', ['Rất nghèo tài nguyên', 'Chỉ có cát', 'Không có khoáng sản', 'Vàng, kim cương, bạch kim, than'], 3, 'Cường quốc kim loại quý.'),
    Q('Dân cư Nam Phi?', ['Không có người da đen', 'Toàn người nhập cư mới', 'Đa sắc tộc, từng trải qua chế độ A-pa-thai (phân biệt chủng tộc)', 'Đồng nhất một sắc tộc'], 2, 'Đa sắc tộc, từng có Apartheid.'),
    Q('Chế độ A-pa-thai (Apartheid) bị xoá bỏ ở Nam Phi vào năm?', ['1995', '2000', '2010', '1991'], 3, 'Đầu thập niên 1990.'),
    Q('Tổng thống da đen đầu tiên của Nam Phi?', ['Mu-ga-bê', 'Nê-ru', 'Hô-xê Mu-hi-ca', 'Nen-xơn Man-đê-la'], 3, 'Mandela – Tổng thống 1994.'),
  ]),

  M(32, 'Bài 31 — Kinh tế Cộng hoà Nam Phi', [
    Q('Kinh tế Nam Phi được coi là?', ['Tương đương Hoa Kỳ', 'Một trong những nền kinh tế phát triển nhất châu Phi', 'Yếu nhất châu Phi', 'Bằng EU'], 1, 'Đầu tàu châu Phi.'),
    Q('Ngành kinh tế quan trọng của Nam Phi?', ['Chỉ nông nghiệp lúa nước', 'Chỉ chăn nuôi du mục', 'Không có ngành nào nổi bật', 'Khai khoáng (vàng, kim cương), công nghiệp chế biến, dịch vụ'], 3, 'Khai khoáng + chế biến.'),
    Q('Nam Phi là thành viên của tổ chức kinh tế quốc tế?', ['ASEAN', 'BRICS', 'NATO', 'EU'], 1, 'BRICS từ 2010.'),
    Q('Một thách thức của kinh tế Nam Phi?', ['Quá thừa việc làm', 'Tỉ lệ thất nghiệp 0%', 'Đồng đều tuyệt đối', 'Tỉ lệ thất nghiệp cao và bất bình đẳng thu nhập'], 3, 'Thất nghiệp + bất bình đẳng.'),
    Q('Định hướng phát triển kinh tế Nam Phi?', ['Bỏ giáo dục', 'Đa dạng hoá, đầu tư công nghệ và năng lượng tái tạo', 'Quay về khai khoáng thuần tuý', 'Đóng cửa kinh tế'], 1, 'Đa dạng hoá + công nghệ.'),
    Q('Quan hệ kinh tế giữa Việt Nam và Nam Phi?', ['Đang được tăng cường, có hợp tác thương mại và giáo dục', 'Hoàn toàn không có', 'Đối đầu', 'Chỉ về quân sự'], 0, 'Đang phát triển.'),
  ]),

  M(33, 'Tổng ôn — Địa lí khu vực và quốc gia (Phần 2)', [
    Q('Khu vực có nền kinh tế lớn thứ 2 thế giới (theo quốc gia)?', ['Pê-ru (Mỹ La-tinh)', 'Trung Quốc (Đông Á)', 'In-đô-nê-xi-a (ĐNA)', 'Ai Cập (Bắc Phi)'], 1, 'Trung Quốc thứ 2.'),
    Q('EU và Hoa Kỳ có vai trò?', ['Quá nhỏ bé', 'Trung tâm kinh tế – tài chính lớn của thế giới', 'Không có vai trò', 'Chỉ trao đổi nội bộ'], 1, 'Trung tâm kinh tế thế giới.'),
    Q('Nhật Bản là quốc gia?', ['Khoáng sản dồi dào', 'Nghèo tài nguyên nhưng có công nghệ cao', 'Giàu tài nguyên nhất thế giới', 'Tự cấp dầu mỏ'], 1, 'Nghèo TN + công nghệ cao.'),
    Q('Tây Nam Á có vai trò kinh tế?', ['Cung ứng phần lớn cà phê thế giới', 'Cung ứng phần lớn thiết bị điện tử', 'Cung ứng phần lớn dầu mỏ cho thế giới', 'Cung ứng phần lớn lúa gạo thế giới'], 2, 'Dầu mỏ chính.'),
    Q('Australia nổi tiếng về?', ['Xuất khẩu khoáng sản và len, thịt cừu', 'Sản xuất ô tô giá rẻ', 'Sản xuất chip bán dẫn', 'Trồng cao su'], 0, 'Khoáng sản + len.'),
    Q('Nam Phi là cường quốc châu Phi nhờ?', ['Nông nghiệp lúa nước', 'Sản xuất chip bán dẫn', 'Du lịch trượt tuyết', 'Khai khoáng quy mô lớn và công nghiệp chế biến'], 3, 'Khai khoáng + chế biến.'),
  ]),

  M(34, 'Tổng ôn — Vấn đề toàn cầu và liên kết khu vực', [
    Q('Toàn cầu hoá đem lại cơ hội cho VN?', ['Đóng cửa', 'Tự cấp tự túc', 'Mất chủ quyền', 'Mở rộng thị trường, thu hút vốn, công nghệ'], 3, 'Cơ hội phát triển.'),
    Q('Tổ chức ASEAN có vai trò?', ['Tổ chức thể thao', 'Tăng cường hợp tác và hội nhập ở khu vực ĐNA', 'Liên minh quân sự đối đầu', 'Tổ chức tôn giáo'], 1, 'Hợp tác khu vực.'),
    Q('Liên minh kinh tế lớn nhất hiện nay?', ['BRICS', 'AU', 'Liên minh châu Âu (EU)', 'ASEAN'], 2, 'EU – liên minh sâu nhất.'),
    Q('Các vấn đề an ninh phi truyền thống gồm?', ['Xâm lược lãnh thổ duy nhất', 'Không có vấn đề', 'Biến đổi khí hậu, an ninh mạng, dịch bệnh', 'Chiến tranh quy ước duy nhất'], 2, 'An ninh phi truyền thống.'),
    Q('Quan hệ đối ngoại của Việt Nam hiện nay?', ['Bỏ ngoại giao', 'Đa phương, đa dạng hoá, hội nhập sâu rộng', 'Đóng cửa', 'Chỉ với một nước'], 1, 'Đa phương hoá.'),
    Q('Cách ứng phó với biến đổi khí hậu cho mọi quốc gia?', ['Bỏ mặc', 'Tăng phát thải tối đa', 'Không liên quan kinh tế', 'Hợp tác quốc tế, giảm phát thải, năng lượng tái tạo'], 3, 'Hợp tác giảm phát thải.'),
  ]),

  M(35, 'Thi học kỳ II — Tổng ôn cả năm Địa lí 11', [
    Q('Nhóm nước phát triển có đặc trưng?', ['Nông nghiệp chiếm 80%', 'HDI thấp', 'Tự cấp tự túc', 'HDI cao, GNI/người cao, dịch vụ chiếm tỉ trọng lớn'], 3, 'Đặc trưng nước phát triển.'),
    Q('EU thành lập sau khi ký Hiệp ước Ma-xtrích năm?', ['1993', '1995', '1999', '1991'], 0, 'Có hiệu lực 1993.'),
    Q('Trung Quốc bắt đầu cải cách mở cửa từ?', ['1991', '2001', 'Cuối 1978', '1949'], 2, '1978.'),
    Q('Tây Nam Á chiếm khoảng nửa trữ lượng?', ['Lúa mì thế giới', 'Dầu mỏ thế giới', 'Khí mê-tan trên Mặt Trăng', 'Nước ngọt thế giới'], 1, 'Dầu mỏ.'),
    Q('Nhật Bản nổi tiếng về?', ['Trồng cao su', 'Ô tô, điện tử, robot, đóng tàu', 'Khai thác than thủ công', 'Sản xuất tàu vũ trụ liên hành tinh'], 1, 'Công nghệ cao.'),
    Q('Australia có thế mạnh xuất khẩu?', ['Dệt may giá rẻ', 'Du lịch trượt tuyết duy nhất', 'Khoáng sản, nông sản, dịch vụ giáo dục', 'Sản xuất chip duy nhất'], 2, 'Khoáng + nông sản + giáo dục.'),
  ]),
];

export const H11DIA_SCENARIOS = indexBy(H11DIA_WEEKS);
