// ============================================================
// Lớp 6 — Lịch sử và Địa lí (GDPT 2018, tích hợp)
// HK1 (T1–18): phần LỊCH SỬ
// HK2 (T19–36): phần ĐỊA LÍ
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6LSDL', 'lich-su-dia', n, title, qs, opts);

export const S6LSDL_WEEKS = [
  // ===== HK1 — LỊCH SỬ =====
  M(1, 'Vì sao phải học Lịch sử? Cách tính thời gian', [
    Q('Lịch sử là gì?', ['Sách giáo khoa của con người', 'Những gì đã diễn ra trong quá khứ', 'Chuyện cổ tích dân gian', 'Những dự đoán về tương lai'], 1, 'Lịch sử là tất cả những gì đã diễn ra trong quá khứ.'),
    Q('Học lịch sử giúp chúng ta điều gì quan trọng nhất?', ['Biết về cội nguồn, rút bài học, hướng tới tương lai', 'Trở thành nhà khảo cổ', 'Học thuộc nhiều ngày tháng', 'Tránh phải học môn khác'], 0, 'Học lịch sử giúp hiểu cội nguồn và rút bài học cho hiện tại.'),
    Q('Lịch âm dựa vào chu kỳ chuyển động của thiên thể nào?', ['Sao Hỏa quanh Mặt Trời', 'Mặt Trăng quanh Trái Đất', 'Mặt Trời quanh Trái Đất', 'Trái Đất quanh Mặt Trời'], 1, 'Âm lịch tính theo chu kỳ Mặt Trăng quanh Trái Đất (~29,5 ngày/tháng).'),
    Q('Dương lịch (công lịch) dựa vào chuyển động nào?', ['Mặt Trăng quanh Trái Đất', 'Trục Trái Đất tự quay', 'Trái Đất quanh Mặt Trời', 'Sao Kim quanh Mặt Trời'], 2, 'Dương lịch dựa vào chu kỳ Trái Đất quanh Mặt Trời (~365,25 ngày).'),
    Q('1 thế kỉ bằng bao nhiêu năm?', ['10 năm', '100 năm', '50 năm', '1000 năm'], 1, '1 thế kỉ = 100 năm; 1 thiên niên kỉ = 1000 năm.'),
    Q('Năm 179 TCN cách năm 2024 bao nhiêu năm?', ['2203 năm', '2024 năm', '1845 năm', '179 năm'], 0, '179 + 2024 = 2203 năm (cộng vì hai mốc nằm hai phía Công nguyên).'),
  ]),

  M(2, 'Nguồn sử liệu — dựa vào đâu để biết về quá khứ?', [
    Q('Đâu là tư liệu hiện vật?', ['Lời kể của ông bà', 'Trống đồng Đông Sơn', 'Truyện Thánh Gióng', 'Sách "Đại Việt sử ký toàn thư"'], 1, 'Trống đồng là hiện vật khảo cổ — tư liệu hiện vật.'),
    Q('Truyền thuyết "Sơn Tinh — Thủy Tinh" thuộc loại tư liệu nào?', ['Tư liệu gốc', 'Tư liệu truyền miệng', 'Tư liệu chữ viết', 'Tư liệu hiện vật'], 1, 'Truyền thuyết, ca dao… là tư liệu truyền miệng.'),
    Q('"Đại Việt sử ký toàn thư" thuộc loại tư liệu nào?', ['Hiện vật', 'Chữ viết', 'Truyền miệng', 'Tranh ảnh hiện đại'], 1, 'Sách sử do người xưa viết là tư liệu chữ viết.'),
    Q('Tư liệu gốc là gì?', ['Tư liệu được chép lại nhiều lần', 'Tư liệu của nhà nghiên cứu hiện nay', 'Tư liệu cung cấp thông tin đầu tiên, trực tiếp về sự kiện', 'Tư liệu dịch sang tiếng nước ngoài'], 2, 'Tư liệu gốc là tư liệu trực tiếp, đầu tiên ghi lại sự kiện.'),
    Q('Ngành khoa học nào chuyên khai quật, nghiên cứu hiện vật cổ?', ['Sinh học', 'Thiên văn học', 'Khảo cổ học', 'Toán học'], 2, 'Khảo cổ học nghiên cứu di tích, di vật của người xưa.'),
    Q('Để xác định tuổi của hiện vật, người ta thường dùng phương pháp nào?', ['Dựa vào tin đồn', 'Hỏi người già nhất làng', 'Đo lượng cacbon phóng xạ (C14)', 'Đếm số trang sách'], 2, 'Phương pháp đồng vị cacbon C14 xác định niên đại hiện vật hữu cơ.'),
  ]),

  M(3, 'Nguồn gốc loài người — Người tinh khôn ở Việt Nam', [
    Q('Người tối cổ tiến hóa thành Người tinh khôn cách đây khoảng bao lâu?', ['50 năm', 'Khoảng 150 000 năm', '1 triệu năm', '10 năm'], 1, 'Người tinh khôn (Homo sapiens) xuất hiện cách đây khoảng 150 000 năm.'),
    Q('Di chỉ răng Người tối cổ ở Việt Nam được tìm thấy ở đâu?', ['Núi Bà Đen', 'Hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn)', 'Vịnh Hạ Long', 'Phố cổ Hội An'], 1, 'Răng hóa thạch Người tối cổ được phát hiện ở Thẩm Khuyên, Thẩm Hai (Lạng Sơn).'),
    Q('Di chỉ văn hóa Sơn Vi, Hòa Bình, Bắc Sơn thuộc về thời kỳ nào?', ['Người tinh khôn (đồ đá mới)', 'Thời nhà Nguyễn', 'Thời Bắc thuộc', 'Thời đại đồ sắt'], 0, 'Đó là các nền văn hóa của Người tinh khôn thời đồ đá ở Việt Nam.'),
    Q('Đặc điểm khác biệt rõ rệt của Người tinh khôn so với Người tối cổ?', ['Cao hơn nhiều', 'Không biết đi', 'Hình dáng và cấu tạo cơ thể gần giống người hiện đại', 'Có cánh'], 2, 'Người tinh khôn có hình dáng, bộ não gần như người hiện đại.'),
    Q('Người tối cổ sống chủ yếu bằng cách nào?', ['Đi máy bay', 'Trồng lúa nước', 'Săn bắt và hái lượm', 'Làm công nghiệp'], 2, 'Người tối cổ chưa biết trồng trọt, sống nhờ săn bắt — hái lượm.'),
    Q('Công cụ chủ yếu của Người tối cổ làm bằng chất liệu gì?', ['Đồng thau đúc khuôn', 'Gỗ vót nhọn có tay cầm', 'Sắt rèn nung đỏ', 'Đá ghè đẽo thô sơ'], 3, 'Công cụ chủ yếu là đá ghè đẽo — thời đại đồ đá cũ.'),
  ]),

  M(4, 'Xã hội nguyên thủy', [
    Q('Tổ chức xã hội đầu tiên của Người tối cổ gọi là gì?', ['Công xã thị tộc mẫu hệ', 'Nhà nước', 'Làng xã', 'Bầy người nguyên thủy'], 3, 'Người tối cổ sống thành bầy người nguyên thủy.'),
    Q('Công xã thị tộc là tổ chức xã hội của ai?', ['Vua chúa', 'Người tối cổ', 'Quý tộc phong kiến', 'Người tinh khôn'], 3, 'Người tinh khôn sống thành thị tộc — bộ lạc.'),
    Q('Vì sao trong thị tộc mẫu hệ người phụ nữ giữ vai trò quan trọng?', ['Phụ nữ giỏi săn voi', 'Phụ nữ là vua', 'Phụ nữ biết chữ trước', 'Phụ nữ chủ yếu hái lượm, lo việc gia đình ổn định hơn'], 3, 'Hái lượm cho nguồn thức ăn ổn định hơn săn bắt nên phụ nữ giữ vai trò chính.'),
    Q('Một bộ lạc gồm những gì?', ['Một quốc gia', 'Một gia đình', 'Nhiều thị tộc cùng huyết thống/cư trú gần nhau', 'Một dòng họ vua'], 2, 'Bộ lạc là tập hợp nhiều thị tộc có quan hệ họ hàng, cư trú gần.'),
    Q('Khi xã hội nguyên thủy tan rã, điều gì xuất hiện?', ['Tư hữu và phân hóa giàu — nghèo', 'Công xã nguyên thủy mạnh hơn', 'Mọi người ngày càng bình đẳng', 'Loài người tuyệt chủng'], 0, 'Khi có dư thừa của cải xuất hiện tư hữu, phân hóa giai cấp.'),
    Q('Cuộc sống của Người tinh khôn so với Người tối cổ?', ['Sống dưới nước', 'Tiến bộ hơn: nhà cửa, lửa, trồng trọt sơ khai', 'Lạc hậu hơn', 'Giống hệt nhau'], 1, 'Người tinh khôn biết dựng nhà, giữ lửa, bắt đầu trồng trọt — chăn nuôi.'),
  ]),

  M(5, 'Sự chuyển biến — phát hiện kim loại', [
    Q('Loại kim loại đầu tiên con người biết sử dụng là gì?', ['Sắt', 'Thiếc nguyên chất', 'Vàng tinh khiết', 'Đồng'], 3, 'Đồng (đỏ rồi hợp kim đồng thau) là kim loại sớm nhất được dùng.'),
    Q('Việc sử dụng công cụ kim loại đem lại hệ quả gì?', ['Năng suất tăng, dư thừa của cải, phân hóa xã hội', 'Năng suất giảm', 'Không ai làm việc nữa', 'Mọi người nghèo hơn'], 0, 'Công cụ kim loại làm năng suất tăng, dẫn tới tư hữu — phân hóa.'),
    Q('Trống đồng Đông Sơn được làm chủ yếu bằng kim loại nào?', ['Đồng thau (hợp kim đồng — thiếc)', 'Đồng đỏ nguyên chất', 'Sắt nguyên chất', 'Hợp kim đồng — chì'], 0, 'Trống đồng được đúc bằng đồng thau.'),
    Q('Khi sắt xuất hiện thay đồng, điều gì xảy ra?', ['Mọi người ngừng làm ruộng', 'Khai phá đất đai mạnh hơn, nông nghiệp phát triển', 'Loài người trở lại đồ đá', 'Không có gì thay đổi'], 1, 'Công cụ sắt sắc bén hơn, khai phá đất nhanh hơn — nông nghiệp phát triển.'),
    Q('Sự xuất hiện kim loại là cơ sở dẫn tới điều gì lớn lao trong lịch sử?', ['Sự tuyệt chủng của loài người', 'Sự biến mất của lửa', 'Sự ra đời của nhà nước đầu tiên', 'Sự ngừng phát triển'], 2, 'Dư thừa của cải → phân hóa giai cấp → nhà nước ra đời.'),
    Q('Ở Việt Nam, văn hóa nào tiêu biểu cho thời đại đồ đồng?', ['Văn hóa Óc Eo (đồ đá)', 'Văn hóa Đông Sơn', 'Văn hóa Hòa Bình', 'Văn hóa Sa Huỳnh đồ đá'], 1, 'Văn hóa Đông Sơn tiêu biểu cho thời đại đồ đồng ở Việt Nam.'),
  ]),

  M(6, 'Ai Cập cổ đại', [
    Q('Ai Cập cổ đại hình thành ven dòng sông lớn nào?', ['Sông Nin (Nile)', 'Sông Mê Công', 'Sông Hằng', 'Sông Hoàng Hà'], 0, 'Nền văn minh Ai Cập gắn với sông Nin.'),
    Q('Vị vua tối cao ở Ai Cập cổ đại được gọi là gì?', ['Tổng thống', 'Thiên tử', 'Hoàng đế', 'Pha-ra-ông (Pharaoh)'], 3, 'Vua Ai Cập gọi là Pha-ra-ông, được coi như con của thần Mặt Trời.'),
    Q('Chữ viết của người Ai Cập cổ đại có dạng nào?', ['Chữ Latinh', 'Chữ tượng hình (chữ tượng hình)', 'Chữ Hán', 'Chữ Quốc ngữ'], 1, 'Người Ai Cập dùng chữ tượng hình khắc trên đá, papyrus.'),
    Q('Công trình tiêu biểu của Ai Cập cổ đại là gì?', ['Đấu trường Cô-li-dê', 'Tháp Eiffel', 'Kim tự tháp', 'Vạn Lý Trường Thành'], 2, 'Kim tự tháp Giza là biểu tượng văn minh Ai Cập.'),
    Q('Người Ai Cập viết chữ trên chất liệu phổ biến nào?', ['Giấy papyrus', 'Thẻ tre khắc chữ', 'Lụa dệt mịn', 'Đất sét'], 0, 'Papyrus là loại "giấy" làm từ cây sậy Ai Cập.'),
    Q('Lũ lụt sông Nin đem lại điều gì cho Ai Cập?', ['Hạn hán kéo dài', 'Sa mạc hóa', 'Băng giá', 'Phù sa màu mỡ cho nông nghiệp'], 3, 'Lũ sông Nin để lại phù sa, giúp nông nghiệp phát triển.'),
  ]),

  M(7, 'Lưỡng Hà cổ đại', [
    Q('"Lưỡng Hà" nghĩa là vùng đất nằm giữa hai con sông nào?', ['Ti-grơ và Ơ-phrát', 'Nin và Hồng Hà', 'Hằng và Mê Công', 'Vô-lga và Đa-nuýp'], 0, 'Lưỡng Hà = vùng giữa sông Tigris và Euphrates (Tây Á).'),
    Q('Người Su-me (Sumer) phát minh ra loại chữ viết nào?', ['Chữ hình nêm (hình đinh)', 'Chữ tượng hình Ai Cập', 'Chữ Hán', 'Chữ Quốc ngữ'], 0, 'Người Lưỡng Hà tạo chữ hình nêm khắc trên đất sét.'),
    Q('Bộ luật cổ nổi tiếng nào thuộc về Lưỡng Hà?', ['Bộ luật Mã Nã Pô Lê Ông', 'Bộ luật Ha-mu-ra-bi', 'Bộ luật Hồng Đức', 'Bộ luật Gia Long'], 1, 'Bộ luật Hammurabi là bộ luật thành văn cổ nhất còn lưu giữ tương đối nguyên vẹn.'),
    Q('Người Lưỡng Hà có thành tựu toán học nổi bật nào?', ['Phát minh số 0', 'Chỉ biết phép cộng', 'Đếm bằng máy tính', 'Hệ đếm 60 (cơ sở của đo thời gian, góc)'], 3, 'Hệ đếm 60 của Lưỡng Hà là cơ sở chia giờ, phút, độ ngày nay.'),
    Q('Lưỡng Hà cổ đại thuộc khu vực địa lí nào ngày nay?', ['Đông Á', 'Bắc Phi', 'Nam Mỹ', 'Vùng Tây Á (chủ yếu là Iraq)'], 3, 'Lưỡng Hà nằm chủ yếu trên lãnh thổ Iraq hiện nay.'),
    Q('Vườn treo Ba-bi-lon là công trình thuộc nền văn minh nào?', ['Lưỡng Hà', 'La Mã', 'Ai Cập', 'Trung Quốc'], 0, 'Vườn treo Babylon là kỳ quan của Lưỡng Hà cổ đại.'),
  ]),

  M(8, 'Ấn Độ cổ đại', [
    Q('Hai dòng sông lớn gắn với văn minh Ấn Độ cổ đại?', ['Sông Ấn và sông Hằng', 'Sông Mê Công và sông Đà', 'Sông Nin và sông Ti-grơ', 'Sông Hoàng Hà và Trường Giang'], 0, 'Văn minh Ấn Độ hình thành bên sông Ấn (Indus) và sông Hằng (Ganges).'),
    Q('Tôn giáo nào ra đời sớm ở Ấn Độ và phổ biến đến Việt Nam?', ['Đạo Cao Đài', 'Hồi giáo', 'Do Thái giáo', 'Phật giáo'], 3, 'Phật giáo ra đời ở Ấn Độ thế kỉ VI TCN, sau truyền tới VN.'),
    Q('Người sáng lập Phật giáo là ai?', ['Lão Tử', 'Khổng Tử', 'Thái tử Xi-đác-ta Gô-ta-ma (Đức Phật)', 'Mác-cô Pô-lô'], 2, 'Đức Phật Thích Ca (Siddhartha Gautama) sáng lập Phật giáo.'),
    Q('Chế độ phân biệt đẳng cấp khắt khe ở Ấn Độ cổ gọi là gì?', ['Chế độ dân chủ', 'Chế độ đẳng cấp Vác-na (Varna/Caste)', 'Chế độ tư bản', 'Chế độ phong kiến'], 1, 'Chế độ đẳng cấp Varna chia xã hội thành 4 đẳng cấp chính.'),
    Q('Người Ấn Độ cổ đại có đóng góp lớn nào cho toán học?', ['Phát minh ra chữ số (gồm số 0)', 'Hệ đếm 60', 'Phát minh ra máy tính bỏ túi', 'Phép đếm bằng que'], 0, 'Người Ấn Độ sáng tạo hệ chữ số (gồm số 0) — sau gọi là chữ số "Ả-rập".'),
    Q('Sử thi nổi tiếng của Ấn Độ cổ đại là?', ['I-li-át và Ô-đi-xê', 'Ra-ma-y-a-na và Ma-ha-bha-ra-ta', 'Tây du ký', 'Tam quốc diễn nghĩa'], 1, 'Ramayana và Mahabharata là hai sử thi vĩ đại của Ấn Độ.'),
  ]),

  M(9, 'Trung Quốc cổ đại — thời Tần', [
    Q('Vương triều nào thống nhất Trung Quốc lần đầu tiên năm 221 TCN?', ['Nhà Minh', 'Nhà Tần', 'Nhà Hán', 'Nhà Đường'], 1, 'Tần Thủy Hoàng thống nhất Trung Quốc năm 221 TCN.'),
    Q('Vị vua đầu tiên xưng "Hoàng đế" ở Trung Quốc là?', ['Đường Thái Tông', 'Hán Cao Tổ', 'Càn Long', 'Tần Thủy Hoàng'], 3, 'Doanh Chính tự xưng Tần Thủy Hoàng — Hoàng đế đầu tiên.'),
    Q('Công trình lớn nào được xây dựng từ thời Tần để chống du mục phương Bắc?', ['Vườn treo Ba-bi-lon', 'Kim tự tháp', 'Vạn Lý Trường Thành', 'Đấu trường Cô-li-dê'], 2, 'Tần Thủy Hoàng cho nối các đoạn thành thành Vạn Lý Trường Thành.'),
    Q('Hai con sông lớn gắn với văn minh Trung Quốc cổ đại?', ['Ấn và Hằng', 'Mê Công và Đà', 'Hoàng Hà và Trường Giang', 'Nin và Hồng Hà'], 2, 'Văn minh Trung Hoa hình thành bên Hoàng Hà và Trường Giang.'),
    Q('Vào năm 179 TCN, nước Âu Lạc của ta bị xâm lược bởi ai?', ['Quân Mông Cổ', 'Triệu Đà (nhà Triệu)', 'Nhà Tần', 'Nhà Đường'], 1, 'Năm 179 TCN, Triệu Đà thôn tính Âu Lạc.'),
    Q('Vị vua nào nổi tiếng tàn bạo trong việc "đốt sách, chôn nho"?', ['Càn Long', 'Tần Thủy Hoàng', 'Khổng Tử', 'Hán Vũ Đế'], 1, 'Tần Thủy Hoàng ra lệnh đốt sách, chôn nhà nho.'),
  ]),

  M(10, 'Trung Quốc cổ đại — thời Hán', [
    Q('Nhà Hán do ai sáng lập?', ['Tần Thủy Hoàng', 'Tôn Tử', 'Khổng Tử', 'Lưu Bang (Hán Cao Tổ)'], 3, 'Lưu Bang sáng lập nhà Hán năm 202 TCN.'),
    Q('Con đường tơ lụa nối Trung Quốc với khu vực nào?', ['Châu Úc', 'Nam Mỹ', 'Trung Á, Tây Á tới Địa Trung Hải', 'Bắc Cực'], 2, 'Con đường tơ lụa nối Trung Quốc qua Trung Á tới châu Âu.'),
    Q('Học thuyết tư tưởng nào được nhà Hán sử dụng làm tư tưởng chính thống?', ['Hồi giáo', 'Phật giáo', 'Nho giáo', 'Đạo giáo'], 2, 'Hán Vũ Đế "bãi truất bách gia, độc tôn Nho thuật".'),
    Q('Phát minh nào của Trung Quốc cổ đại ảnh hưởng đến văn hóa thế giới?', ['Điện thoại di động', 'Bóng đèn điện', 'Máy bay', 'Giấy, la bàn, thuốc súng, kĩ thuật in'], 3, '"Tứ đại phát minh": giấy, la bàn, thuốc súng, kĩ thuật in.'),
    Q('Thời nhà Hán, người Việt ta đang ở trong giai đoạn nào?', ['Thời Pháp thuộc', 'Thời Đại Việt độc lập', 'Thời Bắc thuộc lần thứ nhất', 'Thời nhà Lý'], 2, 'Thế kỉ I — III, người Việt chịu ách Bắc thuộc dưới nhà Hán.'),
    Q('Nhân vật nào thời Đông Hán nổi tiếng với chính sách đàn áp ở Giao Chỉ, dẫn đến khởi nghĩa Hai Bà Trưng?', ['Tô Định', 'Cao Biền', 'Triệu Đà', 'Mã Viện'], 0, 'Thái thú Tô Định tàn bạo là nguyên nhân trực tiếp khởi nghĩa Hai Bà Trưng (40).'),
  ]),

  M(11, 'Hy Lạp cổ đại', [
    Q('Hy Lạp cổ đại nằm ở khu vực biển nào?', ['Biển Đỏ', 'Địa Trung Hải', 'Bắc Băng Dương', 'Biển Đông'], 1, 'Hy Lạp ở Nam Âu, bên bờ Địa Trung Hải.'),
    Q('Hình thức tổ chức nhà nước đặc trưng của Hy Lạp cổ là?', ['Nhà nước thành bang (po-li-tơ)', 'Đế chế khổng lồ', 'Vương quốc thống nhất', 'Liên bang hiện đại'], 0, 'Hy Lạp gồm nhiều thành bang (polis): A-ten, Xpác-ta…'),
    Q('Thành bang nào của Hy Lạp được coi là quê hương nền dân chủ?', ['Ba-bi-lon', 'Rô-ma (Rome)', 'Xpác-ta (Sparta)', 'A-ten (Athens)'], 3, 'A-ten là quê hương của nền dân chủ cổ điển.'),
    Q('Nhà toán học Hy Lạp nổi tiếng với định lý về tam giác vuông là?', ['Pa-xcan', 'Niu-tơn', 'Anh-xtanh', 'Pi-ta-go (Pythagoras)'], 3, 'Định lý Pythagoras: a² + b² = c² trong tam giác vuông.'),
    Q('Hai bản trường ca nổi tiếng của Hô-me-rơ là?', ['Truyện Kiều', 'I-li-át và Ô-đi-xê', 'Ra-ma-y-a-na và Ma-ha-bha-ra-ta', 'Tam quốc diễn nghĩa'], 1, 'Hô-me-rơ sáng tác hai trường ca Iliad và Odyssey.'),
    Q('Đại hội thể thao Olympic ra đời ở đâu?', ['Hy Lạp cổ đại', 'La Mã cổ đại', 'Ai Cập cổ đại', 'Trung Quốc cổ đại'], 0, 'Olympic bắt nguồn từ Hy Lạp cổ đại (776 TCN).'),
  ]),

  M(12, 'La Mã cổ đại', [
    Q('La Mã cổ đại có nguồn gốc trên bán đảo nào?', ['Bán đảo Triều Tiên', 'Bán đảo Ả Rập', 'Bán đảo I-ta-li-a', 'Bán đảo Đông Dương'], 2, 'La Mã hình thành trên bán đảo Italia, ven Địa Trung Hải.'),
    Q('Người đứng đầu Đế quốc La Mã được gọi là?', ['Hoàng đế (Imperator)', 'Su-tan', 'Pha-ra-ông', 'Thiên tử'], 0, 'Đứng đầu Đế chế La Mã là Hoàng đế.'),
    Q('Công trình kiến trúc nổi tiếng của La Mã dùng cho đấu sĩ?', ['Đấu trường Cô-li-dê (Colosseum)', 'Vạn Lý Trường Thành', 'Đền Pác-tê-nông', 'Kim tự tháp'], 0, 'Colosseum là đấu trường nổi tiếng của La Mã.'),
    Q('Hệ chữ cái nào do La Mã hoàn thiện, đến nay vẫn dùng phổ biến?', ['Chữ Ả Rập', 'Chữ La-tinh', 'Chữ Hán', 'Chữ Ki-rin'], 1, 'Bảng chữ Latinh là cơ sở của nhiều ngôn ngữ châu Âu hiện nay.'),
    Q('Hệ thống mạng nào nổi tiếng đến nỗi có câu "mọi con đường đều dẫn về ..."?', ['Hà Nội', 'Rô-ma', 'Bắc Kinh', 'A-ten (Athens)'], 1, '"Mọi con đường đều dẫn về Rô-ma" — hệ thống đường bộ La Mã.'),
    Q('Tôn giáo nào ra đời trong lòng La Mã và sau trở thành quốc giáo?', ['Đạo Hin-đu', 'Ki-tô giáo (Cơ Đốc)', 'Hồi giáo', 'Phật giáo'], 1, 'Ki-tô giáo ra đời ở Pa-le-xtin, sau lan ra và thành quốc giáo La Mã.'),
  ]),

  M(13, 'Nhà nước Văn Lang', [
    Q('Nhà nước Văn Lang ra đời vào khoảng thời gian nào?', ['Năm 938', 'Thế kỉ XX', 'Khoảng thế kỉ VII TCN', 'Thế kỉ X'], 2, 'Nhà nước Văn Lang ra đời khoảng thế kỉ VII TCN.'),
    Q('Người đứng đầu nhà nước Văn Lang là?', ['An Dương Vương', 'Ngô Quyền', 'Lạc tướng', 'Hùng Vương'], 3, 'Vua Văn Lang gọi là Hùng Vương.'),
    Q('Kinh đô của nước Văn Lang đặt ở đâu?', ['Hoa Lư (Ninh Bình)', 'Cổ Loa (Hà Nội)', 'Mê Linh (Hà Nội)', 'Phong Châu (Phú Thọ)'], 3, 'Kinh đô Văn Lang ở Phong Châu, nay thuộc Phú Thọ.'),
    Q('Văn Lang chia thành 15 đơn vị hành chính lớn gọi là gì?', ['Chiềng', 'Lạc', 'Bộ', 'Mường'], 2, 'Cả nước chia thành 15 bộ, đứng đầu mỗi bộ là Lạc tướng.'),
    Q('Tầng lớp giúp việc cho vua ở các bộ là?', ['Tể tướng, Thượng thư', 'Lạc tướng, Bồ chính', 'Quan Khâm sai', 'Tổng thống'], 1, 'Lạc tướng đứng đầu bộ; dưới làng là Bồ chính.'),
    Q('Cư dân Văn Lang sống chủ yếu bằng nghề gì?', ['Săn voi', 'Chăn cừu du mục', 'Buôn bán nô lệ', 'Trồng lúa nước'], 3, 'Cư dân Văn Lang là cư dân nông nghiệp lúa nước.'),
  ]),

  M(14, 'Nhà nước Âu Lạc', [
    Q('Ai là người sáng lập nước Âu Lạc?', ['Triệu Đà', 'Triệu Quang Phục', 'Hùng Vương thứ 18', 'Thục Phán (An Dương Vương)'], 3, 'Thục Phán đánh quân Tần, lập nước Âu Lạc, xưng An Dương Vương.'),
    Q('Nước Âu Lạc ra đời năm bao nhiêu?', ['Năm 40', 'Năm 938', 'Năm 179 TCN', 'Năm 208 TCN'], 3, 'Nước Âu Lạc ra đời khoảng năm 208 TCN.'),
    Q('Kinh đô của Âu Lạc đặt ở đâu?', ['Cổ Loa (Đông Anh, Hà Nội)', 'Phong Châu', 'Hoa Lư', 'Mê Linh'], 0, 'An Dương Vương dời đô về Cổ Loa.'),
    Q('Loại vũ khí nổi tiếng được sản xuất nhiều ở Cổ Loa là?', ['Lưỡi cày sắt', 'Mũi tên đồng', 'Kiếm thép', 'Súng thần công'], 1, 'Khảo cổ Cổ Loa tìm thấy hàng vạn mũi tên đồng (nỏ Liên Châu).'),
    Q('Âu Lạc rơi vào tay Triệu Đà vào năm nào?', ['208 TCN', '179 TCN', '938', '40'], 1, 'Năm 179 TCN, Triệu Đà thôn tính Âu Lạc — mở đầu Bắc thuộc.'),
    Q('Câu chuyện "Nỏ thần" gắn với nhân vật nào?', ['Lý Bí — Triệu Quang Phục', 'An Dương Vương — Mỵ Châu — Trọng Thủy', 'Hai Bà Trưng', 'Hùng Vương — Lang Liêu'], 1, 'Truyền thuyết An Dương Vương — Mỵ Châu — Trọng Thủy gắn với nỏ thần.'),
  ]),

  M(15, 'Văn hóa Đông Sơn', [
    Q('Văn hóa Đông Sơn được phát hiện đầu tiên ở đâu?', ['Phú Thọ', 'Làng Đông Sơn (Thanh Hóa)', 'Nghệ An', 'Hà Nội'], 1, 'Năm 1924, di chỉ Đông Sơn (Thanh Hóa) được phát hiện.'),
    Q('Hiện vật tiêu biểu nhất của văn hóa Đông Sơn là?', ['Lư hương', 'Trống đồng', 'Tháp đất nung', 'Tượng Phật'], 1, 'Trống đồng Đông Sơn là biểu tượng văn minh sông Hồng.'),
    Q('Trống đồng Ngọc Lũ thuộc loại nào?', ['Trống đồng nhà Lý', 'Trống đồng hiện đại', 'Trống đồng Bắc Thuộc', 'Trống đồng Đông Sơn (loại I Heger)'], 3, 'Trống Ngọc Lũ là một trong những trống đồng Đông Sơn đẹp nhất.'),
    Q('Hoa văn trên trống đồng Đông Sơn phản ánh điều gì?', ['Sinh hoạt — tín ngưỡng cư dân lúa nước', 'Bay vào vũ trụ', 'Săn bắt cá voi', 'Cuộc sống du mục'], 0, 'Hoa văn trống đồng ghi lại nhà sàn, giã gạo, lễ hội, mặt trời…'),
    Q('Văn hóa Đông Sơn là cơ sở vật chất — kỹ thuật cho nhà nước nào?', ['Đại Việt', 'Đại Nam', 'Champa', 'Văn Lang — Âu Lạc'], 3, 'Đông Sơn là cơ sở của nhà nước Văn Lang — Âu Lạc.'),
    Q('Vật liệu chính làm trống đồng là?', ['Đồng thau', 'Đồng đỏ nguyên chất', 'Hợp kim đồng — sắt', 'Đất nung'], 0, 'Trống đồng được đúc bằng đồng thau (đồng — thiếc — chì).'),
  ]),

  M(16, 'Bắc thuộc và khởi nghĩa Hai Bà Trưng — Bà Triệu', [
    Q('Thời Bắc thuộc kéo dài khoảng bao lâu?', ['10 năm', '100 năm', '500 năm', 'Hơn 1000 năm'], 3, 'Bắc thuộc kéo dài hơn 1000 năm (179 TCN — 938).'),
    Q('Khởi nghĩa Hai Bà Trưng nổ ra năm nào?', ['Năm 542', 'Năm 248', 'Năm 40', 'Năm 938'], 2, 'Khởi nghĩa Hai Bà Trưng năm 40 tại Hát Môn (Mê Linh).'),
    Q('Trưng Trắc, Trưng Nhị khởi nghĩa chống ách đô hộ của triều đại nào?', ['Nhà Đường', 'Nhà Tống', 'Nhà Tần', 'Đông Hán'], 3, 'Hai Bà Trưng khởi nghĩa chống ách đô hộ nhà Đông Hán.'),
    Q('Câu nói "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ..." là của ai?', ['Mai Thúc Loan', 'Trưng Nhị', 'Bà Triệu (Triệu Thị Trinh)', 'Trưng Trắc'], 2, 'Đó là tuyên ngôn nổi tiếng của Bà Triệu (khởi nghĩa năm 248).'),
    Q('Sau khi thắng quân Hán, Trưng Trắc làm gì?', ['Xưng vương, đóng đô Mê Linh', 'Quy phục nhà Hán', 'Đầu hàng', 'Lên ngôi Hoàng đế'], 0, 'Trưng Trắc xưng vương, đóng đô ở Mê Linh.'),
    Q('Tướng nhà Hán nào được phái sang đàn áp khởi nghĩa Hai Bà Trưng?', ['Tô Định', 'Lư Hán', 'Cao Biền', 'Mã Viện'], 3, 'Năm 42, Mã Viện được cử sang đàn áp khởi nghĩa Hai Bà Trưng.'),
  ]),

  M(17, 'Lý Bí, Mai Thúc Loan, Phùng Hưng — kết thúc Bắc thuộc', [
    Q('Lý Bí khởi nghĩa thắng lợi, lập nên nhà nước nào (năm 544)?', ['Vạn Xuân', 'Việt Nam Dân chủ Cộng hòa', 'Đại Cồ Việt', 'Đại Việt'], 0, 'Năm 544, Lý Bí lập nước Vạn Xuân, xưng Lý Nam Đế.'),
    Q('Sau Lý Bí, ai tiếp tục lãnh đạo cuộc kháng chiến chống Lương?', ['Mai Thúc Loan', 'Phùng Hưng', 'Ngô Quyền', 'Triệu Quang Phục (Triệu Việt Vương)'], 3, 'Triệu Quang Phục kế tục, đánh bại quân Lương ở đầm Dạ Trạch.'),
    Q('Mai Thúc Loan khởi nghĩa chống ách đô hộ của triều đại nào?', ['Nhà Đường', 'Nhà Hán', 'Nhà Tần', 'Nhà Tống'], 0, 'Khởi nghĩa Mai Thúc Loan (713 — 722) chống nhà Đường.'),
    Q('Mai Thúc Loan xưng đế lấy hiệu là gì?', ['Bố Cái Đại Vương', 'Mai Hắc Đế', 'Lý Nam Đế', 'Triệu Việt Vương'], 1, 'Mai Thúc Loan xưng Mai Hắc Đế ("vua đen").'),
    Q('Phùng Hưng được nhân dân tôn xưng là?', ['Ngô Vương', 'Mai Hắc Đế', 'Lý Nam Đế', 'Bố Cái Đại Vương'], 3, 'Phùng Hưng được tôn là Bố Cái Đại Vương (cha mẹ của dân).'),
    Q('Trận đánh năm 938 trên sông Bạch Đằng do ai chỉ huy chấm dứt Bắc thuộc?', ['Lý Thường Kiệt', 'Quang Trung', 'Lê Lợi', 'Ngô Quyền'], 3, 'Năm 938, Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng.'),
  ]),

  M(18, 'Ôn tập Lịch sử HK1', [
    Q('Sự kiện đánh dấu kết thúc thời kì Bắc thuộc?', ['Lý Bí lập Vạn Xuân 544', 'Khởi nghĩa Hai Bà Trưng 40', 'Chiến thắng Bạch Đằng 938', 'Triệu Đà chiếm Âu Lạc 179 TCN'], 2, 'Chiến thắng Bạch Đằng 938 chấm dứt hơn 1000 năm Bắc thuộc.'),
    Q('Sắp xếp theo thứ tự thời gian: A. Văn Lang  B. Âu Lạc  C. Vạn Xuân', ['A → C → B', 'C → B → A', 'A → B → C', 'B → A → C'], 2, 'Văn Lang (VII TCN) → Âu Lạc (208 TCN) → Vạn Xuân (544).'),
    Q('Hai sông quan trọng của văn minh Trung Quốc cổ?', ['Hoàng Hà — Trường Giang', 'Ấn — Hằng', 'Nin — Hồng Hà', 'Ti-grơ — Ơ-phrát'], 0, 'Hoàng Hà — Trường Giang gắn với văn minh Trung Hoa.'),
    Q('Đẳng cấp Vác-na thuộc nền văn minh nào?', ['Lưỡng Hà', 'Trung Quốc cổ đại', 'Ai Cập', 'Ấn Độ'], 3, 'Chế độ đẳng cấp Varna đặc trưng cho Ấn Độ cổ đại.'),
    Q('Trống đồng Đông Sơn được làm bằng?', ['Đồng đỏ nguyên chất', 'Đất nung', 'Hợp kim đồng — bạc', 'Đồng thau'], 3, 'Trống đồng Đông Sơn được đúc bằng đồng thau.'),
    Q('Cuộc khởi nghĩa nào xảy ra sớm nhất trong các lựa chọn dưới đây?', ['Hai Bà Trưng (40)', 'Mai Thúc Loan (713)', 'Bà Triệu (248)', 'Lý Bí (542)'], 0, 'Khởi nghĩa Hai Bà Trưng năm 40 sớm nhất.'),
    Q('Bộ máy nhà nước Văn Lang gồm bao nhiêu bộ?', ['7 bộ', '12 bộ', '63 bộ', '15 bộ'], 3, 'Văn Lang chia thành 15 bộ.'),
  ]),

  // ===== HK2 — ĐỊA LÍ =====
  M(19, 'Hệ thống kinh — vĩ tuyến, tọa độ địa lí', [
    Q('Vĩ tuyến gốc (xích đạo) có vĩ độ bằng bao nhiêu?', ['23°27′', '180°', '90°', '0°'], 3, 'Xích đạo là vĩ tuyến 0°, chia Trái Đất thành 2 bán cầu Bắc — Nam.'),
    Q('Kinh tuyến gốc đi qua đài thiên văn nào?', ['Grin-uých (London, Anh)', 'Pa-ri (Pháp)', 'Washington (Mỹ)', 'Tokyo (Nhật)'], 0, 'Kinh tuyến gốc 0° đi qua đài thiên văn Greenwich, London.'),
    Q('Trên Trái Đất có tổng bao nhiêu kinh tuyến nếu mỗi kinh tuyến cách nhau 1°?', ['720', '180', '360', '90'], 2, 'Trái Đất có 360 kinh tuyến (mỗi cái cách nhau 1°).'),
    Q('Có tổng bao nhiêu vĩ tuyến (mỗi cái cách nhau 1°), không kể xích đạo?', ['90', '360', '720', '180'], 3, 'Có 180 vĩ tuyến (90° Bắc + 90° Nam), không kể xích đạo là 0°.'),
    Q('Tọa độ địa lí của một điểm gồm những gì?', ['Diện tích và chu vi', 'Chiều dài và chiều rộng', 'Kinh độ và vĩ độ', 'Độ cao và độ sâu'], 2, 'Tọa độ địa lí = (kinh độ; vĩ độ) của điểm đó.'),
    Q('Việt Nam nằm chủ yếu trong nửa cầu nào?', ['Nam — Tây', 'Bắc bán cầu và Đông bán cầu', 'Nam — Đông', 'Bắc — Tây'], 1, 'Việt Nam ở Bắc bán cầu (vĩ độ Bắc) và Đông bán cầu (kinh độ Đông).'),
  ]),

  M(20, 'Bản đồ — các yếu tố cơ bản', [
    Q('Bản đồ là gì?', ['Bức tranh vẽ phong cảnh', 'Hình vẽ thu nhỏ một phần hay toàn bộ bề mặt Trái Đất lên mặt phẳng', 'Bức ảnh chụp từ vũ trụ', 'Quyển sách địa lí'], 1, 'Bản đồ là hình vẽ thu nhỏ bề mặt Trái Đất lên mặt phẳng theo tỉ lệ.'),
    Q('Yếu tố nào bắt buộc phải có trên bản đồ?', ['Tên tác giả', 'Ngày tháng năm sinh', 'Số trang sách', 'Tỉ lệ, kí hiệu, phương hướng'], 3, 'Tỉ lệ, kí hiệu và phương hướng là 3 yếu tố bắt buộc.'),
    Q('Bản chú giải dùng để làm gì?', ['Đánh số trang', 'Ghi tên tác giả', 'Trang trí cho đẹp', 'Giải thích các kí hiệu trên bản đồ'], 3, 'Bản chú giải giải thích nội dung của các kí hiệu.'),
    Q('Để đo khoảng cách thực tế giữa hai điểm trên bản đồ, ta dựa vào?', ['Màu sắc bản đồ', 'Đường biên giới', 'Tỉ lệ bản đồ', 'Cảm tính'], 2, 'Khoảng cách thực = khoảng cách trên bản đồ × mẫu số tỉ lệ.'),
    Q('Bản đồ giáo khoa thường có loại tỉ lệ nào?', ['Không có tỉ lệ', 'Tỉ lệ nhỏ và trung bình', 'Tỉ lệ 1:1', 'Tỉ lệ rất lớn (1:200)'], 1, 'Bản đồ SGK thường tỉ lệ nhỏ/trung bình để thể hiện vùng rộng.'),
    Q('Để biết hướng trên bản đồ, ta dựa vào yếu tố nào?', ['Tác giả bản đồ', 'Màu của giấy', 'Mũi tên chỉ hướng Bắc hoặc các đường kinh — vĩ tuyến', 'Kích thước bản đồ'], 2, 'Phương hướng dựa vào mũi tên Bắc hoặc các đường kinh — vĩ tuyến.'),
  ]),

  M(21, 'Tỉ lệ bản đồ', [
    Q('Tỉ lệ bản đồ 1 : 100 000 nghĩa là gì?', ['1 cm trên bản đồ ứng với 100 000 cm (1 km) ngoài thực tế', 'Tỉ lệ chỉ để trang trí', 'Bản đồ to gấp 100 000 lần', '1 m ứng với 100 000 m'], 0, 'Cứ 1 cm bản đồ ứng với 100 000 cm = 1 km thực tế.'),
    Q('Trong các tỉ lệ sau, tỉ lệ nào LỚN nhất?', ['1 : 1000', '1 : 10 000 000', '1 : 1 000 000', '1 : 100 000'], 0, 'Mẫu số càng nhỏ → tỉ lệ càng lớn → bản đồ càng chi tiết.'),
    Q('Bản đồ 1 : 200 000, hai điểm cách 5 cm. Khoảng cách thực là?', ['100 km', '100 m', '1 km', '10 km'], 3, '5 cm × 200 000 = 1 000 000 cm = 10 km.'),
    Q('Bản đồ tỉ lệ 1 : 5 000 000, hai thành phố cách 6 cm. Khoảng cách thực?', ['300 km', '3 km', '30 km', '3000 km'], 0, '6 × 5 000 000 = 30 000 000 cm = 300 km.'),
    Q('Tỉ lệ thước (thước tỉ lệ) khác tỉ lệ số ở điểm nào?', ['Có chữ "1:" ở đầu', 'Không có đơn vị', 'Thể hiện bằng đoạn thẳng có chia khoảng', 'Chỉ dùng cho địa cầu'], 2, 'Tỉ lệ thước = đoạn thẳng có khắc khoảng, mỗi khoảng ứng với km thực.'),
    Q('Để có bản đồ chi tiết một xã/phường, người ta dùng?', ['Tỉ lệ rất nhỏ (1:50 000 000)', 'Không cần tỉ lệ', 'Tỉ lệ 1:1 000 000', 'Tỉ lệ lớn (1:5000, 1:10 000)'], 3, 'Khu vực nhỏ cần tỉ lệ lớn để thể hiện chi tiết.'),
  ]),

  M(22, 'Phương hướng — kí hiệu bản đồ', [
    Q('Trên bản đồ thông thường, hướng nào ở trên?', ['Đông', 'Tây', 'Nam', 'Bắc'], 3, 'Quy ước: hướng Bắc ở phía trên bản đồ.'),
    Q('Bốn hướng chính của la bàn là?', ['Đông Bắc — Tây Nam', 'Trái — Phải — Trên — Dưới', 'Bắc — Nam — Đông — Tây', 'Đông Nam — Tây Bắc'], 2, 'Bốn hướng chính: Bắc (N), Nam (S), Đông (E), Tây (W).'),
    Q('Kí hiệu bản đồ thường gồm những loại nào?', ['Chỉ có chữ', 'Kí hiệu điểm, đường, diện tích', 'Không phân loại', 'Chỉ có màu'], 1, '3 loại kí hiệu: điểm, đường, diện tích.'),
    Q('Đường giao thông trên bản đồ thường thể hiện bằng?', ['Kí hiệu đường (đường nét)', 'Kí hiệu diện tích', 'Số La Mã', 'Kí hiệu điểm'], 0, 'Đường (sông, đường giao thông) là kí hiệu đường.'),
    Q('Diện tích rừng trên bản đồ thường thể hiện bằng?', ['Mũi tên', 'Chữ in', 'Kí hiệu diện tích (màu nền/hoa văn)', 'Chấm tròn'], 2, 'Diện tích rừng dùng kí hiệu diện tích (màu xanh lá, hoa văn).'),
    Q('Đường đồng mức nối các điểm có đặc điểm gì?', ['Cùng nhiệt độ', 'Cùng độ cao', 'Cùng dân số', 'Cùng lượng mưa'], 1, 'Đường đồng mức nối các điểm có cùng độ cao tuyệt đối.'),
  ]),

  M(23, 'Trái Đất trong hệ Mặt Trời', [
    Q('Hệ Mặt Trời có bao nhiêu hành tinh?', ['12 hành tinh', '7 hành tinh', '8 hành tinh', '9 hành tinh'], 2, 'Hệ Mặt Trời hiện được công nhận 8 hành tinh.'),
    Q('Trái Đất là hành tinh thứ mấy tính từ Mặt Trời?', ['Thứ 4 (sau Sao Hỏa)', 'Thứ 3', 'Thứ 2 (sau Sao Thủy)', 'Thứ 5 (sau Sao Mộc)'], 1, 'Trái Đất là hành tinh thứ 3 tính từ Mặt Trời.'),
    Q('Vệ tinh tự nhiên của Trái Đất là?', ['Sao Kim', 'Sao Hỏa', 'Sao Thổ', 'Mặt Trăng'], 3, 'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất.'),
    Q('Hành tinh nào gần Mặt Trời nhất?', ['Trái Đất', 'Sao Thủy', 'Sao Kim', 'Sao Hỏa'], 1, 'Sao Thủy (Mercury) là hành tinh gần Mặt Trời nhất.'),
    Q('Khoảng cách trung bình từ Trái Đất đến Mặt Trời là?', ['~150 triệu km', '~1 tỉ km', '~1 triệu km', '~150 nghìn km'], 0, '1 đơn vị thiên văn (AU) ≈ 150 triệu km.'),
    Q('Mặt Trời là gì?', ['Một hành tinh', 'Một ngôi sao', 'Một thiên hà', 'Một vệ tinh'], 1, 'Mặt Trời là ngôi sao trung tâm hệ Mặt Trời.'),
  ]),

  M(24, 'Hình dạng — kích thước Trái Đất', [
    Q('Trái Đất có hình dạng gì?', ['Hình tam giác', 'Hình tròn phẳng', 'Hình cầu (hơi dẹt ở hai cực)', 'Hình lập phương'], 2, 'Trái Đất gần hình cầu, hơi dẹt ở hai cực.'),
    Q('Bán kính trung bình của Trái Đất khoảng bao nhiêu?', ['~6371 km', '~637 km', '~371 km', '~63 710 km'], 0, 'Bán kính trung bình Trái Đất ~6371 km.'),
    Q('Chu vi xích đạo của Trái Đất khoảng?', ['~4000 km', '~400 000 km', '~400 km', '~40 000 km'], 3, 'Chu vi xích đạo Trái Đất khoảng 40 075 km.'),
    Q('Diện tích bề mặt Trái Đất khoảng?', ['~510 triệu km²', '~5 tỉ km²', '~5 triệu km²', '~51 nghìn km²'], 0, 'Diện tích bề mặt Trái Đất ~510 triệu km².'),
    Q('Tỉ lệ giữa đại dương và lục địa trên Trái Đất?', ['Đại dương ~71%, lục địa ~29%', 'Đại dương 29%, lục địa 71%', 'Đại dương 50%, lục địa 50%', 'Đại dương 100%'], 0, 'Khoảng 71% bề mặt là đại dương, 29% là lục địa.'),
    Q('Bằng chứng nào KHÔNG chứng minh Trái Đất hình cầu?', ['Tàu xa biến mất phần thân trước', 'Bóng Trái Đất khi nguyệt thực có dạng vòng cung', 'Ảnh chụp từ vệ tinh', 'Đường chân trời thẳng tuyệt đối'], 3, 'Đường chân trời không thẳng tuyệt đối; ngược lại, nó cong nhẹ.'),
  ]),

  M(25, 'Chuyển động tự quay quanh trục — ngày và đêm', [
    Q('Trái Đất tự quay quanh trục theo hướng nào?', ['Từ Tây sang Đông', 'Từ Nam lên Bắc', 'Từ Đông sang Tây', 'Từ Bắc xuống Nam'], 0, 'Trái Đất tự quay từ Tây sang Đông.'),
    Q('Trái Đất tự quay một vòng hết bao lâu?', ['~365 ngày', '~12 giờ', '~24 giờ', '~30 ngày'], 2, 'Một vòng tự quay = 1 ngày đêm ≈ 24 giờ.'),
    Q('Hệ quả của chuyển động tự quay là?', ['Các mùa trong năm', 'Hiện tượng nguyệt thực', 'Hiện tượng ngày — đêm luân phiên', 'Sự nóng lên toàn cầu'], 2, 'Tự quay tạo ngày — đêm luân phiên.'),
    Q('Bề mặt Trái Đất được chia thành bao nhiêu múi giờ?', ['24 múi giờ', '12 múi giờ', '60 múi giờ', '180 múi giờ'], 0, '24 múi giờ, mỗi múi rộng 15° kinh tuyến.'),
    Q('Việt Nam thuộc múi giờ thứ mấy (UTC)?', ['UTC+5', 'UTC+7', 'UTC+8', 'UTC+6'], 1, 'Việt Nam thuộc múi giờ UTC+7.'),
    Q('Khi Hà Nội 12 giờ trưa, London (UTC+0) là mấy giờ?', ['12 giờ trưa', '5 giờ sáng', '19 giờ tối', '7 giờ tối'], 1, 'London cách Hà Nội 7 tiếng → 12 - 7 = 5 giờ sáng.'),
  ]),

  M(26, 'Chuyển động quanh Mặt Trời — các mùa', [
    Q('Trái Đất quay quanh Mặt Trời một vòng hết bao lâu?', ['~28 ngày', '~365 ngày 6 giờ (1 năm)', '~24 giờ', '~1000 ngày'], 1, 'Một năm thiên văn ~365,25 ngày.'),
    Q('Trục Trái Đất nghiêng so với mặt phẳng quỹ đạo một góc?', ['0°', '~66°33′ (nghiêng 23°27′ so với pháp tuyến)', '90°', '45°'], 1, 'Trục Trái Đất nghiêng 23°27′ so với pháp tuyến quỹ đạo.'),
    Q('Hệ quả chính của chuyển động quanh Mặt Trời + trục nghiêng là?', ['Nguyệt thực', 'Các mùa trong năm', 'Ngày và đêm', 'Triều cường'], 1, 'Trục nghiêng + quay quanh Mặt Trời → các mùa.'),
    Q('Mùa hạ ở bán cầu Bắc tương ứng với mùa nào ở bán cầu Nam?', ['Mùa xuân', 'Mùa hạ', 'Mùa thu', 'Mùa đông'], 3, 'Hai bán cầu trái mùa do trục nghiêng.'),
    Q('Ngày 22/6 (Hạ chí) ở bán cầu Bắc có đặc điểm?', ['Ngày = đêm', 'Không có ánh nắng', 'Đêm dài nhất', 'Ngày dài nhất, đêm ngắn nhất'], 3, 'Hạ chí: ngày dài nhất ở bán cầu Bắc.'),
    Q('Ngày Xuân phân và Thu phân (21/3 và 23/9) đặc điểm?', ['Không có Mặt Trời', 'Ngày dài hơn đêm', 'Ngày dài bằng đêm ở mọi nơi', 'Đêm dài hơn ngày'], 2, 'Hai ngày phân điểm: ngày = đêm khắp Trái Đất.'),
  ]),

  M(27, 'Cấu tạo bên trong của Trái Đất', [
    Q('Trái Đất có cấu tạo gồm mấy lớp?', ['3 lớp: vỏ, manti, nhân', '1 lớp duy nhất', '2 lớp: vỏ và nhân', '5 lớp'], 0, 'Trái Đất gồm 3 lớp: vỏ (lớp ngoài), manti, nhân.'),
    Q('Lớp mỏng nhất nhưng quan trọng cho sự sống là?', ['Nhân ngoài', 'Nhân trong', 'Lớp manti', 'Lớp vỏ Trái Đất'], 3, 'Vỏ Trái Đất mỏng nhất (5–70 km) nhưng là nơi loài người sinh sống.'),
    Q('Lớp nhân Trái Đất chủ yếu cấu tạo bởi kim loại nào?', ['Đồng và nhôm', 'Silic và oxi', 'Vàng và bạc', 'Sắt và niken'], 3, 'Nhân Trái Đất chủ yếu là sắt — niken.'),
    Q('Lớp vỏ Trái Đất bao gồm?', ['Chỉ có vỏ đại dương', 'Chỉ có vỏ lục địa', 'Vỏ lục địa và vỏ đại dương', 'Vỏ băng và vỏ nước'], 2, 'Vỏ Trái Đất gồm vỏ lục địa (granit) và vỏ đại dương (bazan).'),
    Q('Lớp manti chiếm khoảng bao nhiêu thể tích Trái Đất?', ['~15% (lớp vỏ)', '~45% (gần một nửa)', '~80%', '~95% (gần như toàn bộ)'], 2, 'Manti là lớp dày nhất, chiếm ~80% thể tích Trái Đất.'),
    Q('Mảng kiến tạo là gì?', ['Đảo lớn nhỏ trên biển', 'Lớp băng ở hai cực', 'Các tảng đá nổi trên đại dương', 'Các mảng vỏ Trái Đất trượt trên manti dẻo'], 3, 'Vỏ Trái Đất bị chia thành các mảng kiến tạo trượt trên manti.'),
  ]),

  M(28, 'Núi lửa, động đất', [
    Q('Núi lửa là hiện tượng gì?', ['Mac-ma từ trong lòng Trái Đất phun trào ra ngoài', 'Lốc xoáy', 'Sấm chớp trên trời', 'Sao băng rơi xuống'], 0, 'Núi lửa là sự phun trào của magma qua miệng núi lửa.'),
    Q('Lò mac-ma nằm ở lớp nào của Trái Đất?', ['Vũ trụ', 'Nhân trong', 'Khí quyển', 'Manti trên (nông) và một phần vỏ'], 3, 'Magma sinh ra ở manti trên và bể magma trong vỏ.'),
    Q('Vùng có nhiều núi lửa, động đất nhất trên thế giới là?', ['Sa mạc Sa-ha-ra', 'Vành đai lửa Thái Bình Dương', 'Vùng Bắc Cực', 'Châu Nam Cực'], 1, '"Vành đai lửa" Thái Bình Dương tập trung ~75% núi lửa, ~90% động đất.'),
    Q('Động đất chủ yếu do nguyên nhân gì?', ['Sao chổi va chạm', 'Gió thổi mạnh', 'Sự dịch chuyển của các mảng kiến tạo', 'Mưa lớn kéo dài'], 2, 'Các mảng kiến tạo va chạm, trượt → động đất.'),
    Q('Thang đo độ lớn của động đất phổ biến là?', ['Thang Mo-xơ', 'Thang Beaufort', 'Thang Rích-te (Richter)', 'Thang Celsius'], 2, 'Độ lớn động đất đo bằng thang Richter (hoặc moment magnitude).'),
    Q('Khi động đất xảy ra, hành động đúng là?', ['Đứng cạnh cửa kính', 'Núp dưới bàn chắc chắn, tránh xa cửa kính', 'Đi thang máy', 'Nhảy từ tầng cao xuống'], 1, 'Núp dưới vật chắc chắn, tránh kính, không dùng thang máy.'),
  ]),

  M(29, 'Các dạng địa hình chính', [
    Q('Địa hình nào có độ cao tuyệt đối trên 500 m và sườn dốc?', ['Cao nguyên', 'Đồi (cao 200–500 m, sườn thoải)', 'Núi', 'Đồng bằng'], 2, 'Núi: cao > 500 m, sườn dốc, đỉnh nhọn.'),
    Q('Đồng bằng có đặc điểm gì?', ['Sườn rất dốc', 'Đỉnh nhọn', 'Tương đối bằng phẳng, độ cao thấp (< 200 m)', 'Độ cao > 2000 m'], 2, 'Đồng bằng: bề mặt bằng phẳng, độ cao thấp.'),
    Q('Cao nguyên khác đồng bằng ở điểm nào?', ['Có nhiều núi lửa', 'Bề mặt tương đối bằng nhưng độ cao lớn hơn (> 500 m), có sườn dốc', 'Hoàn toàn giống nhau', 'Luôn có băng'], 1, 'Cao nguyên: bề mặt bằng nhưng cao > 500 m, có sườn dốc rõ.'),
    Q('Đồng bằng sông Hồng và sông Cửu Long thuộc loại đồng bằng nào?', ['Đồng bằng băng hà', 'Đồng bằng châu thổ (do phù sa sông bồi đắp)', 'Đồng bằng cao nguyên', 'Đồng bằng núi lửa'], 1, 'Cả hai đều là đồng bằng châu thổ do phù sa sông bồi đắp.'),
    Q('Đỉnh núi cao nhất thế giới là?', ['Đỉnh Ê-vơ-rét (Everest) ~8848 m', 'Đỉnh K2 (Pakistan) ~8611 m', 'Phú Sĩ', 'Phan-xi-păng'], 0, 'Đỉnh Everest (Himalaya) cao 8848,86 m.'),
    Q('Đỉnh núi cao nhất Việt Nam là?', ['Tam Đảo', 'Phan-xi-păng (3143 m)', 'Bạch Mã', 'Lang Bian'], 1, 'Phan-xi-păng cao 3143 m — "nóc nhà Đông Dương".'),
  ]),

  M(30, 'Khoáng sản', [
    Q('Khoáng sản là gì?', ['Tích tụ vật chất tự nhiên trong vỏ Trái Đất, con người khai thác sử dụng', 'Vật phẩm nhân tạo', 'Cây trồng', 'Đồ trang trí'], 0, 'Khoáng sản là tích tụ vật chất tự nhiên có giá trị sử dụng.'),
    Q('Khoáng sản được chia thành mấy nhóm chính theo công dụng?', ['10 nhóm', '5 nhóm', '2 nhóm', '3 nhóm: năng lượng, kim loại, phi kim loại'], 3, '3 nhóm: nhiên liệu (năng lượng), kim loại, phi kim loại.'),
    Q('Than đá, dầu mỏ, khí tự nhiên thuộc nhóm?', ['Phi kim loại', 'Kim loại', 'Quặng quý', 'Khoáng sản năng lượng (nhiên liệu)'], 3, 'Than, dầu, khí thuộc nhóm năng lượng — nhiên liệu hóa thạch.'),
    Q('Sắt, đồng, nhôm, bô-xít thuộc nhóm khoáng sản nào?', ['Kim loại', 'Đá quý', 'Năng lượng', 'Phi kim loại'], 0, 'Sắt, đồng, nhôm, bô-xít là khoáng sản kim loại.'),
    Q('Khoáng sản nào KHÔNG thuộc nhóm phi kim loại?', ['Đá vôi', 'Cao lanh', 'Quặng sắt', 'Đá hoa cương'], 2, 'Quặng sắt là khoáng sản kim loại; đá vôi/hoa cương/cao lanh là phi kim loại.'),
    Q('Khoáng sản có đặc điểm gì cần lưu ý khi khai thác?', ['Hữu hạn, phải khai thác hợp lí, tiết kiệm', 'Không cần bảo vệ', 'Vô hạn, dùng thoải mái', 'Tái tạo nhanh trong vài ngày'], 0, 'Khoáng sản là tài nguyên không tái tạo nhanh → cần khai thác hợp lí.'),
  ]),

  M(31, 'Khí quyển — các tầng khí quyển', [
    Q('Khí quyển là gì?', ['Lớp nước trên Trái Đất', 'Lớp không khí bao quanh Trái Đất', 'Lớp đất ngoài cùng', 'Lớp mac-ma'], 1, 'Khí quyển = lớp không khí bao quanh Trái Đất.'),
    Q('Khí quyển có vai trò gì với sự sống?', ['Cung cấp ô-xi, bảo vệ khỏi tia vũ trụ, điều hòa nhiệt độ', 'Làm Trái Đất nặng hơn', 'Không có vai trò gì', 'Chỉ để bay diều'], 0, 'Khí quyển cấp ô-xi, chắn tia tử ngoại, giữ nhiệt cho Trái Đất.'),
    Q('Tầng nào của khí quyển chứa hầu hết hơi nước, mây, mưa?', ['Tầng đối lưu', 'Tầng giữa', 'Tầng bình lưu', 'Tầng nhiệt'], 0, 'Tầng đối lưu (0–~16 km) chứa ~90% khối lượng khí và là nơi sinh thời tiết.'),
    Q('Tầng ô-zôn nằm chủ yếu ở tầng nào?', ['Tầng nhiệt', 'Tầng ngoài', 'Tầng bình lưu', 'Tầng đối lưu'], 2, 'Lớp ô-zôn nằm trong tầng bình lưu, hấp thụ tia tử ngoại.'),
    Q('Thành phần chính của không khí gần mặt đất là?', ['Hi-đrô và Hê-li', 'CO₂ và hơi nước', 'Ni-tơ (~78%) và Ô-xi (~21%)', 'Khí trơ'], 2, 'Không khí gồm chủ yếu N₂ (78%) và O₂ (21%).'),
    Q('Hiện tượng "thủng tầng ô-zôn" có nguyên nhân chính từ?', ['Các khí CFC do con người thải ra', 'Núi lửa phun', 'Mặt Trời nguội đi', 'Mưa axit'], 0, 'Khí CFC (tủ lạnh, bình xịt cũ) phá hủy tầng ô-zôn.'),
  ]),

  M(32, 'Thời tiết — khí hậu — các đới khí hậu', [
    Q('Thời tiết khác khí hậu ở điểm nào?', ['Thời tiết chỉ ban đêm', 'Khí hậu chỉ ở mùa hè', 'Thời tiết là trạng thái khí quyển ngắn hạn; khí hậu là quy luật dài hạn nhiều năm', 'Hoàn toàn giống nhau'], 2, 'Thời tiết: trạng thái nhất thời; khí hậu: quy luật trung bình nhiều năm.'),
    Q('Trên Trái Đất có mấy đới khí hậu chính?', ['12 đới', '3 đới', '7 đới', '5 đới (1 nhiệt đới, 2 ôn đới, 2 hàn đới)'], 3, '5 đới chính: nhiệt đới, 2 ôn đới, 2 hàn đới.'),
    Q('Việt Nam nằm chủ yếu trong đới khí hậu nào?', ['Nhiệt đới gió mùa', 'Ôn đới', 'Hàn đới', 'Cận cực'], 0, 'Việt Nam thuộc đới nhiệt đới (gió mùa châu Á).'),
    Q('Đới hàn đới nằm ở vĩ độ nào?', ['Từ chí tuyến đến vòng cực', 'Từ vòng cực đến cực (66°33′ — 90°)', 'Từ xích đạo đến chí tuyến', 'Chỉ ở xích đạo'], 1, 'Hàn đới: từ vòng cực (66°33′) đến cực (90°).'),
    Q('Yếu tố nào KHÔNG phải của thời tiết?', ['Nhiệt độ', 'Hướng gió', 'Tuổi của con người', 'Lượng mưa'], 2, 'Tuổi người không phải yếu tố khí tượng.'),
    Q('Dụng cụ đo lượng mưa gọi là?', ['Ẩm kế (đo độ ẩm không khí)', 'Vũ kế', 'Nhiệt kế', 'Phong vũ biểu'], 1, 'Vũ kế (rain gauge) đo lượng mưa; nhiệt kế đo nhiệt độ.'),
  ]),

  M(33, 'Thủy quyển — đại dương, sông hồ', [
    Q('Đại bộ phận nước trên Trái Đất là?', ['Nước băng tuyết', 'Nước ngầm', 'Nước ngọt sông hồ', 'Nước mặn ở đại dương (~97%)'], 3, '~97% nước Trái Đất là nước mặn đại dương.'),
    Q('Trên Trái Đất có mấy đại dương lớn (theo phân loại mới)?', ['3 đại dương', '5 đại dương', '4 đại dương', '7 đại dương'], 1, '5 đại dương: Thái Bình Dương, Đại Tây Dương, Ấn Độ Dương, Bắc Băng Dương, Nam Đại Dương.'),
    Q('Đại dương rộng nhất thế giới là?', ['Ấn Độ Dương', 'Thái Bình Dương', 'Bắc Băng Dương', 'Đại Tây Dương'], 1, 'Thái Bình Dương rộng ~165 triệu km², lớn nhất.'),
    Q('Sông dài nhất Việt Nam (phần chảy trong nước) là?', ['Sông Mê Công', 'Sông Hồng', 'Sông Đà', 'Sông Đồng Nai'], 3, 'Sông Đồng Nai dài nhất chảy hoàn toàn trong VN; nếu kể nguồn ngoài, sông Mê Công/Hồng đều rất dài.'),
    Q('Hồ tự nhiên lớn nhất Việt Nam là?', ['Hồ Hoà Bình', 'Hồ Hoàn Kiếm', 'Hồ Ba Bể (Bắc Kạn)', 'Hồ Tây'], 2, 'Hồ Ba Bể là hồ tự nhiên trên núi lớn nhất Việt Nam.'),
    Q('Vòng tuần hoàn nước gồm các giai đoạn chính nào?', ['Bốc hơi — ngưng tụ — mưa — chảy/ngấm', 'Chỉ có mưa', 'Chỉ có bốc hơi', 'Đóng băng vĩnh viễn'], 0, 'Tuần hoàn nước: bốc hơi → ngưng tụ → mưa → chảy/ngấm → bốc hơi.'),
  ]),

  M(34, 'Đất — các nhân tố hình thành đất', [
    Q('Đất (thổ nhưỡng) được hình thành chủ yếu từ?', ['Chỉ từ phân bón', 'Đá mẹ bị phong hóa kết hợp sinh vật, khí hậu, thời gian', 'Từ nước biển', 'Từ rác thải nhựa'], 1, 'Đất hình thành từ đá mẹ + khí hậu + sinh vật + địa hình + thời gian + con người.'),
    Q('Nhân tố nào KHÔNG tham gia hình thành đất?', ['Ánh trăng ban đêm', 'Sinh vật', 'Sóng âm', 'Khí hậu'], 2, 'Sóng âm không phải nhân tố hình thành đất.'),
    Q('Đất nào màu mỡ nhất, thường ở đồng bằng châu thổ?', ['Đất phù sa', 'Đất cát biển', 'Đất xám bạc màu', 'Đất feralit đồi núi'], 0, 'Đất phù sa do sông bồi, rất màu mỡ.'),
    Q('Đất feralit phổ biến ở khu vực nào?', ['Vùng cực', 'Vùng đồi núi nhiệt đới ẩm', 'Sa mạc', 'Đáy biển'], 1, 'Đất feralit hình thành ở vùng nhiệt đới ẩm trên đồi núi.'),
    Q('Sinh vật có vai trò gì trong hình thành đất?', ['Cung cấp mùn hữu cơ, làm tơi xốp đất', 'Không có vai trò', 'Làm đất cứng lại', 'Phá hủy đất hoàn toàn'], 0, 'Sinh vật phân hủy → mùn → tăng độ phì cho đất.'),
    Q('Để giữ độ phì cho đất, người nông dân nên?', ['Bỏ hoang lâu năm trên dốc', 'Phun thuốc trừ sâu liên tục', 'Bón phân hợp lí, luân canh, trồng cây phủ', 'Đốt rừng làm rẫy'], 2, 'Bón phân hợp lí, luân canh, trồng cây che phủ giúp đất bền vững.'),
  ]),

  M(35, 'Sinh vật — đa dạng sinh học', [
    Q('Sinh quyển là gì?', ['Lớp đất canh tác', 'Toàn bộ sinh vật và môi trường sống của chúng trên Trái Đất', 'Khí ô-xi trong khí quyển', 'Chỉ rừng nhiệt đới'], 1, 'Sinh quyển bao gồm toàn bộ sinh vật + môi trường sống của chúng.'),
    Q('Rừng nhiệt đới ẩm có đặc điểm gì?', ['Cây thấp lè tè như sa mạc', 'Chỉ có cây thông', 'Đa dạng sinh học cao, nhiều tầng tán', 'Không có động vật'], 2, 'Rừng nhiệt đới ẩm nhiều tầng tán, đa dạng loài bậc nhất.'),
    Q('Đới có sinh vật nghèo nàn nhất là?', ['Đới hàn đới (cực)', 'Đới xích đạo', 'Đới ôn đới', 'Đới nhiệt đới'], 0, 'Hàn đới lạnh giá → sinh vật rất nghèo nàn.'),
    Q('Sa mạc có ít sinh vật chủ yếu do?', ['Quá lạnh', 'Khô hạn, thiếu nước', 'Áp suất quá cao', 'Quá nhiều ô-xi'], 1, 'Sa mạc khô hạn → ít sinh vật chịu được.'),
    Q('Đa dạng sinh học là gì?', ['Chỉ là vườn thú', 'Chỉ là nhiều cây xanh', 'Chỉ là nhiều cá', 'Sự phong phú về loài, gen, hệ sinh thái'], 3, 'Đa dạng sinh học = đa dạng loài + gen + hệ sinh thái.'),
    Q('Nguyên nhân chính làm suy giảm đa dạng sinh học hiện nay?', ['Sao chổi rơi mỗi ngày', 'Núi lửa phun liên tục', 'Mặt Trời tắt', 'Hoạt động của con người (phá rừng, săn bắt, ô nhiễm)'], 3, 'Con người là nguyên nhân chính: phá rừng, săn bắt, ô nhiễm.'),
  ]),

  M(36, 'Con người và thiên nhiên — bảo vệ môi trường', [
    Q('Môi trường tự nhiên cung cấp cho con người những gì?', ['Chỉ điện thoại', 'Chỉ phim ảnh', 'Chỉ tiền bạc', 'Tài nguyên, không gian sống, dịch vụ sinh thái'], 3, 'Thiên nhiên cung cấp tài nguyên, không gian sống, dịch vụ sinh thái.'),
    Q('Hoạt động nào của con người gây hại cho môi trường?', ['Trồng cây xanh', 'Đốt rừng, xả rác bừa bãi, dùng nhiên liệu hóa thạch quá mức', 'Tiết kiệm nước', 'Phân loại rác'], 1, 'Đốt rừng, xả rác, đốt nhiên liệu hóa thạch gây ô nhiễm — biến đổi khí hậu.'),
    Q('Biến đổi khí hậu toàn cầu do nguyên nhân chính nào?', ['Mặt Trời lạnh đi', 'Trái Đất ngừng quay', 'Sao Hỏa va vào', 'Khí nhà kính (CO₂, mê-tan) tăng do hoạt động của con người'], 3, 'Khí nhà kính tăng → giữ nhiệt → Trái Đất nóng lên.'),
    Q('Hệ quả của biến đổi khí hậu KHÔNG bao gồm?', ['Băng tan, nước biển dâng', 'Mặt Trời chiếu sáng đều hơn ban đêm', 'Thời tiết cực đoan tăng', 'Sa mạc hóa'], 1, 'Mặt Trời chiếu vào ban đêm không phải hệ quả của BĐKH.'),
    Q('Để bảo vệ môi trường, HS có thể làm gì?', ['Xả rác ra sông', 'Tiết kiệm điện nước, phân loại rác, trồng cây, đi xe đạp/đi bộ', 'Đốt rác nhựa tại nhà', 'Bật điều hòa cả ngày khi ra ngoài'], 1, 'Tiết kiệm, phân loại rác, trồng cây, dùng phương tiện xanh.'),
    Q('Phát triển bền vững nghĩa là gì?', ['Không phát triển gì cả', 'Phát triển đáp ứng hiện tại nhưng không tổn hại cho thế hệ tương lai', 'Chỉ giữ nguyên rừng nguyên sinh', 'Khai thác tối đa hôm nay'], 1, 'Phát triển bền vững: hài hòa kinh tế — xã hội — môi trường, không tổn hại tương lai.'),
    Q('Việt Nam cam kết tại COP26 đạt mức phát thải ròng bằng 0 vào năm nào?', ['Năm 2050', 'Năm 2100', 'Năm 2030', 'Năm 2025'], 0, 'Việt Nam cam kết net-zero phát thải vào năm 2050 tại COP26.'),
  ]),
];

export const S6LSDL_SCENARIOS = indexBy(S6LSDL_WEEKS);
