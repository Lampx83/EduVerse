// ============================================================
// Lớp 10 · GDCD (Giáo dục Kinh tế và Pháp luật) — 35 tuần
// Bám CTGD 2018 (Phần Kinh tế: nền KT - thị trường - thuế - DN; Phần Pháp luật: HTCT, Hiến pháp, pháp luật).
// ID prefix: "H10GDCD-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10GDCD', 'gdcd', n, title, qs, opts);

export const H10GDCD_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Hoạt động kinh tế trong đời sống', [
    Q('Hoạt động kinh tế là?', ['Chỉ sản xuất', 'Chỉ buôn bán', 'Chỉ tiêu dùng', 'Sản xuất - phân phối - trao đổi - tiêu dùng'], 3, 'Hoạt động kinh tế gồm 4 khâu: sản xuất, phân phối, trao đổi, tiêu dùng.'),
    Q('Sản xuất là?', ['Tiêu dùng', 'Phân phối', 'Trao đổi', 'Tạo ra của cải vật chất và dịch vụ'], 3, 'Sản xuất là khâu tạo ra hàng hoá và dịch vụ.'),
    Q('Tiêu dùng là?', ['Vận chuyển', 'Mua bán', 'Sử dụng sản phẩm để thoả mãn nhu cầu', 'Sản xuất'], 2, 'Tiêu dùng là khâu cuối, sử dụng hàng hoá/dịch vụ.'),
    Q('Hoạt động kinh tế có vai trò?', ['Vô dụng', 'Chỉ trang trí', 'Chỉ giải trí', 'Đáp ứng nhu cầu vật chất và tinh thần'], 3, 'Hoạt động kinh tế đáp ứng nhu cầu, duy trì và phát triển xã hội.'),
    Q('Trong sản xuất hàng hoá, cần kết hợp?', ['Sức lao động, tư liệu sản xuất, đối tượng lao động', 'Chỉ nhân công', 'Chỉ máy móc', 'Chỉ tiền'], 0, '3 yếu tố cơ bản: sức lao động, tư liệu sản xuất, đối tượng lao động.'),
    Q('Hàng hoá khác sản phẩm thông thường ở chỗ?', ['Để dùng riêng', 'Không khác', 'Là đồ thừa', 'Được sản xuất để bán/trao đổi'], 3, 'Hàng hoá là sản phẩm được tạo ra để trao đổi/mua bán.'),
  ]),

  M(2, 'Các chủ thể của nền kinh tế', [
    Q('Các chủ thể chính của nền kinh tế Việt Nam?', ['Chỉ hộ gia đình', 'Chỉ nhà nước', 'Nhà nước, doanh nghiệp, hộ gia đình', 'Chỉ doanh nghiệp'], 2, '3 chủ thể chính: Nhà nước, doanh nghiệp, hộ gia đình.'),
    Q('Vai trò của Nhà nước trong nền kinh tế?', ['Chỉ thu thuế', 'Quản lý, điều tiết, hỗ trợ và là chủ thể kinh tế', 'Không tham gia', 'Chỉ cấp giấy phép'], 1, 'Nhà nước quản lý vĩ mô, điều tiết, sở hữu DN nhà nước, cung cấp DV công.'),
    Q('Doanh nghiệp có vai trò?', ['Chỉ làm thiện nguyện', 'Sản xuất hàng hoá, dịch vụ, tạo việc làm', 'Chỉ thu thuế', 'Chỉ chi tiêu'], 1, 'Doanh nghiệp là chủ thể chính sản xuất hàng hoá, tạo việc làm, đóng thuế.'),
    Q('Hộ gia đình trong nền kinh tế?', ['Chỉ sản xuất', 'Không tham gia', 'Chỉ tiêu dùng', 'Vừa tiêu dùng vừa cung cấp lao động và tích luỹ'], 3, 'Hộ gia đình cung cấp sức lao động, tiêu dùng và tích luỹ.'),
    Q('Chủ thể kinh tế nước ngoài bao gồm?', ['Chỉ sinh viên', 'Không tồn tại', 'Chỉ khách du lịch', 'Doanh nghiệp FDI, người lao động nước ngoài'], 3, 'DN FDI và nhà đầu tư nước ngoài cũng là chủ thể trong nền KT mở.'),
    Q('Vai trò của các chủ thể trong nền KT thị trường?', ['Không liên quan', 'Tương tác lẫn nhau theo cung - cầu', 'Đối lập', 'Tách biệt'], 1, 'Các chủ thể tương tác qua thị trường, theo nguyên tắc cung - cầu.'),
  ]),

  M(3, 'Thị trường', [
    Q('Thị trường là?', ['Nơi diễn ra trao đổi mua bán hàng hoá - dịch vụ', 'Chỉ online', 'Chỉ chợ', 'Chỉ siêu thị'], 0, 'Thị trường: nơi diễn ra hoạt động trao đổi mua bán (cả vật lý và ảo).'),
    Q('Các yếu tố cấu thành thị trường?', ['Chỉ hàng', 'Chỉ chợ', 'Người mua, người bán, hàng hoá, giá cả', 'Chỉ tiền'], 2, 'Yếu tố thị trường: chủ thể (mua, bán) + đối tượng (hàng hoá) + giá cả.'),
    Q('Thị trường có chức năng?', ['Chỉ kiếm lời', 'Chỉ giải trí', 'Chỉ trang trí', 'Thông tin, kích thích, điều tiết'], 3, '3 chức năng: thông tin, kích thích sản xuất, điều tiết cung cầu.'),
    Q('Phân loại thị trường theo đối tượng?', ['TT hàng hoá, TT dịch vụ, TT lao động, TT tài chính', 'Chỉ siêu thị', 'Chỉ chợ', 'Chỉ online'], 0, 'Phân loại theo đối tượng: hàng hoá, dịch vụ, lao động, tài chính, BĐS.'),
    Q('Thị trường lao động cung cấp?', ['Hàng hoá', 'Sức lao động', 'Đất đai', 'Vốn tài chính'], 1, 'TT lao động: nơi cung - cầu sức lao động gặp nhau.'),
    Q('Thị trường tài chính bao gồm?', ['Chỉ vàng', 'Tiền tệ, chứng khoán, bảo hiểm', 'Chỉ tiền giấy', 'Chỉ ngân hàng'], 1, 'TT tài chính: tiền tệ (ngân hàng), chứng khoán, bảo hiểm.'),
  ]),

  M(4, 'Cơ chế thị trường', [
    Q('Cơ chế thị trường vận hành dựa trên?', ['Quyết định nhà nước', 'May rủi', 'Tình cảm', 'Cung - cầu - giá cả'], 3, 'Cơ chế TT vận hành tự phát theo quy luật cung - cầu và giá cả.'),
    Q('Quy luật cung cầu chỉ ra?', ['Cầu giảm giá tăng', 'Không liên quan', 'Cung tăng giá tăng', 'Cung tăng giá giảm, cầu tăng giá tăng'], 3, 'Cung tăng (mọi yếu tố khác giữ nguyên) → giá giảm; cầu tăng → giá tăng.'),
    Q('Khi giá tăng cao, người sản xuất thường?', ['Đầu hàng', 'Giảm sản xuất', 'Tăng sản xuất', 'Giữ nguyên mức sản xuất cũ'], 2, 'Giá tăng → lợi nhuận tăng → DN tăng sản xuất (đáp ứng quy luật cung).'),
    Q('Quy luật cạnh tranh trong nền kinh tế thị trường?', ['Chỉ gây thiệt hại', 'Làm thị trường mất ổn định lâu dài', 'Chỉ có lợi cho doanh nghiệp lớn', 'Thúc đẩy DN cải tiến, hạ giá, nâng chất lượng'], 3, 'Cạnh tranh buộc DN cải tiến công nghệ, hạ giá, nâng chất lượng để tồn tại.'),
    Q('Ưu điểm của cơ chế thị trường?', ['Không có rủi ro', 'Tự điều tiết, kích thích sáng tạo, hiệu quả', 'Công bằng tuyệt đối', 'Không có khuyết tật'], 1, 'TT tự điều tiết, kích thích cạnh tranh, hiệu quả phân bổ nguồn lực.'),
    Q('Khuyết tật của cơ chế thị trường?', ['Quá công bằng', 'Tuyệt đối tốt', 'Không có khuyết tật', 'Phân hoá giàu nghèo, độc quyền, ô nhiễm'], 3, 'TT thuần có khuyết tật: bất bình đẳng, độc quyền, ngoại tác (ô nhiễm).'),
  ]),

  M(5, 'Ngân sách nhà nước', [
    Q('Ngân sách nhà nước là?', ['Tiền của vua', 'Tiền doanh nghiệp', 'Tiền cá nhân', 'Toàn bộ thu - chi của Nhà nước trong 1 năm'], 3, 'NSNN là toàn bộ thu, chi của Nhà nước được dự toán và thực hiện trong 1 năm.'),
    Q('NSNN có vai trò?', ['Chỉ chi nhà ở', 'Đảm bảo hoạt động bộ máy NN và DV công', 'Chỉ trả lương', 'Chỉ chi quân sự'], 1, 'NSNN duy trì bộ máy NN, đầu tư công, an sinh xã hội, quốc phòng - an ninh.'),
    Q('Nguồn thu chủ yếu của NSNN?', ['Tự sản xuất', 'Phát hành tiền', 'Vay nợ', 'Thuế, phí, lệ phí'], 3, 'Thuế là nguồn thu chính (>80%); phí và lệ phí bổ sung.'),
    Q('Chi NSNN bao gồm?', ['Chỉ chi lương', 'Chi đầu tư phát triển và chi thường xuyên', 'Chỉ chi đường', 'Chỉ chi quân sự'], 1, 'Chi NSNN: chi thường xuyên (lương, vận hành) + chi đầu tư phát triển.'),
    Q('Cơ quan nào quyết định dự toán NSNN?', ['Chính phủ', 'Toà án', 'Quốc hội', 'Mặt trận tổ quốc'], 2, 'Quốc hội quyết định dự toán và phê chuẩn quyết toán NSNN.'),
    Q('Bội chi NSNN nghĩa là?', ['Cân bằng', 'Chi nhiều hơn thu', 'Không có gì', 'Thu nhiều hơn chi'], 1, 'Bội chi: tổng chi > tổng thu, phần thiếu phải bù bằng vay nợ.'),
  ]),

  M(6, 'Thuế - Khái niệm và vai trò', [
    Q('Thuế là?', ['Tiền vay', 'Quà tặng', 'Khoản nộp bắt buộc của tổ chức, cá nhân cho NN', 'Phí dịch vụ'], 2, 'Thuế là khoản nộp bắt buộc, không hoàn trả trực tiếp, để Nhà nước chi tiêu công.'),
    Q('Vai trò của thuế?', ['Nguồn thu NSNN + điều tiết KT + công bằng xã hội', 'Chỉ trang trí', 'Chỉ tăng thu', 'Chỉ phạt'], 0, '3 vai trò: thu NSNN, điều tiết kinh tế, đảm bảo công bằng xã hội.'),
    Q('Đặc điểm của thuế?', ['Được hoàn lại', 'Có hoàn trả gián tiếp qua phúc lợi', 'Tự nguyện', 'Bắt buộc, không hoàn trả trực tiếp, theo luật'], 3, 'Thuế bắt buộc, không hoàn trả trực tiếp, ban hành theo luật.'),
    Q('Người nộp thuế là?', ['Tổ chức và cá nhân có nghĩa vụ theo luật', 'Chỉ người nước ngoài', 'Chỉ doanh nghiệp', 'Chỉ cá nhân'], 0, 'Mọi tổ chức và cá nhân có nghĩa vụ theo luật đều phải nộp thuế.'),
    Q('Trốn thuế là?', ['Hành vi vi phạm pháp luật', 'Hợp pháp', 'Tốt cho NN', 'Vô hại'], 0, 'Trốn thuế là hành vi vi phạm pháp luật, có thể bị xử lý hình sự.'),
    Q('Hệ thống thuế VN gồm?', ['Chỉ thu thuế', 'Thuế trực thu và gián thu', 'Không chia loại', 'Chỉ thu phí'], 1, 'Thuế trực thu (đánh trực tiếp lên thu nhập); gián thu (đánh qua hàng hoá - GTGT).'),
  ]),

  M(7, 'Thuế Giá trị gia tăng (GTGT)', [
    Q('Thuế GTGT (VAT) đánh vào?', ['Lợi nhuận DN', 'Lương người LĐ', 'Đất đai', 'Giá trị tăng thêm của hàng hoá - dịch vụ'], 3, 'VAT = Value Added Tax — đánh vào phần giá trị tăng thêm.'),
    Q('VAT là loại thuế?', ['Trực thu', 'Lệ phí', 'Thuế trực thu đánh vào doanh nghiệp', 'Gián thu'], 3, 'VAT là thuế gián thu — người tiêu dùng cuối chịu thuế.'),
    Q('Mức thuế suất VAT phổ biến ở VN?', ['100%', '0%', '50%', '10% (thông thường)'], 3, 'Mức thuế GTGT thông thường ở VN là 10%; có 0%, 5% cho một số mặt hàng.'),
    Q('Hàng hoá nào thường được áp dụng VAT 0%?', ['Hàng cao cấp', 'Hàng xuất khẩu', 'Hàng độc quyền', 'Hàng tồn'], 1, 'Hàng xuất khẩu áp VAT 0% để khuyến khích xuất khẩu.'),
    Q('Người tiêu dùng cuối chịu thuế VAT vì?', ['Không ai chịu', 'VAT được tính vào giá bán', 'VAT chỉ DN chịu', 'VAT do DN tự nộp'], 1, 'VAT là gián thu — được cộng vào giá, người tiêu dùng cuối thực sự gánh thuế.'),
    Q('Khi mua hàng, bạn nên?', ['Trả tiền không cần phiếu', 'Trả thấp hơn', 'Lấy hoá đơn để minh bạch', 'Không cần hoá đơn'], 2, 'Hoá đơn giúp minh bạch giao dịch, là quyền lợi và nghĩa vụ của người tiêu dùng.'),
  ]),

  M(8, 'Thuế Thu nhập cá nhân (TNCN)', [
    Q('Thuế TNCN đánh vào?', ['Hàng hoá', 'Đất đai', 'Lợi nhuận DN', 'Thu nhập của cá nhân'], 3, 'Thuế TNCN đánh vào thu nhập từ tiền lương, kinh doanh, đầu tư của cá nhân.'),
    Q('Thuế TNCN là loại?', ['Gián thu', 'Lệ phí', 'Thuế gián thu qua giá hàng hoá', 'Trực thu'], 3, 'TNCN là thuế trực thu — đánh trực tiếp lên thu nhập cá nhân.'),
    Q('Đối tượng nộp thuế TNCN?', ['Cá nhân có thu nhập chịu thuế', 'Chỉ người nước ngoài', 'Mọi cá nhân', 'Chỉ doanh nhân'], 0, 'Cá nhân có thu nhập trên ngưỡng giảm trừ gia cảnh phải nộp thuế TNCN.'),
    Q('Giảm trừ gia cảnh cho người nộp thuế VN hiện?', ['11 triệu/tháng + 4,4 triệu/người phụ thuộc', '20 triệu', '5 triệu', '9 triệu/tháng + 3,6 triệu/người phụ thuộc'], 0, 'Mức giảm trừ: 11 triệu/tháng cho bản thân + 4,4 triệu/người phụ thuộc (2024).'),
    Q('Thuế TNCN sử dụng biểu thuế?', ['Luỹ tiến từng phần', 'Cố định', 'Tuỳ DN', 'Tuỳ tỉnh'], 0, 'TNCN luỹ tiến: thu nhập càng cao thuế suất bậc cao càng cao.'),
    Q('Hồ sơ quyết toán TNCN do?', ['Cá nhân hoặc DN trả thu nhập thực hiện', 'Chỉ cá nhân', 'Tự động', 'Chỉ NN'], 0, 'Cá nhân tự quyết toán hoặc DN trả thu nhập quyết toán hộ.'),
  ]),

  M(9, 'Tiền tệ và lạm phát', [
    Q('Tiền tệ là?', ['Vật ngang giá chung trong trao đổi', 'Hàng hoá đặc biệt do nhà nước phát hành', 'Quần áo', 'Xe hơi'], 0, 'Tiền là vật ngang giá chung, thước đo giá trị, phương tiện trao đổi.'),
    Q('Chức năng cơ bản của tiền?', ['Thước đo giá trị, phương tiện lưu thông và cất trữ', 'Chỉ làm đẹp', 'Vô dụng', 'Chỉ trang trí'], 0, '5 chức năng: thước đo giá trị, lưu thông, cất trữ, thanh toán, tiền tệ thế giới.'),
    Q('Lạm phát là?', ['Mức giá chung tăng kéo dài', 'Mức giá giảm', 'Cung tiền tăng', 'Cung tiền giảm'], 0, 'Lạm phát: mức giá chung tăng và sức mua tiền giảm trong thời gian dài.'),
    Q('Lạm phát thường gây?', ['Sức mua tiền giảm, người nghèo thiệt nhất', 'Sản xuất tốt', 'Hoà bình', 'Giàu lên'], 0, 'Lạm phát làm sức mua giảm, ảnh hưởng nặng tới người thu nhập cố định.'),
    Q('Cơ quan nào kiểm soát lạm phát ở VN?', ['Ngân hàng Nhà nước Việt Nam', 'Toà án', 'Bộ Y tế', 'Bộ Giáo dục'], 0, 'NHNN VN điều hành chính sách tiền tệ, kiểm soát lạm phát.'),
    Q('Tỉ lệ lạm phát mục tiêu của VN?', ['20%', 'Khoảng 4%', '0%', '50%'], 1, 'VN đặt mục tiêu kiểm soát lạm phát quanh 4% hàng năm.'),
  ]),

  M(10, 'Cung cầu và giá cả', [
    Q('Cầu là?', ['Số người cần', 'Mong muốn', 'Số lượng hàng người mua muốn và có khả năng mua tại giá nhất định', 'Nhu cầu chung'], 2, 'Cầu = muốn mua + có khả năng thanh toán tại mức giá nhất định.'),
    Q('Cung là?', ['Lượng nhập', 'Lượng tồn kho', 'Mong bán', 'Lượng hàng người bán muốn và có khả năng bán'], 3, 'Cung = sẵn lòng bán + có khả năng cung cấp.'),
    Q('Quy luật cầu: giá tăng thì?', ['Không đổi', 'Lượng cầu tăng', 'Không xác định', 'Lượng cầu giảm'], 3, 'Giá tăng → lượng cầu giảm (khi yếu tố khác không đổi).'),
    Q('Quy luật cung: giá tăng thì?', ['Lượng cung giảm', 'Tuỳ DN', 'Không đổi', 'Lượng cung tăng'], 3, 'Giá tăng → DN có lợi nhuận → tăng cung.'),
    Q('Khi cung = cầu, giá đạt?', ['Mức thấp nhất', 'Mức cao nhất', 'Mức cân bằng', 'Không xác định'], 2, 'Giá cân bằng (equilibrium) khi cung = cầu.'),
    Q('Khi cầu vượt cung, giá có xu hướng?', ['Sụp đổ', 'Tăng', 'Không đổi', 'Giảm do cạnh tranh giữa người mua'], 1, 'Cầu > cung → giá tăng để cân bằng thị trường.'),
  ]),

  M(11, 'Hợp tác và cạnh tranh', [
    Q('Cạnh tranh trong kinh tế là?', ['Tranh chấp', 'Đua tranh để giành lợi thế trong sản xuất, kinh doanh', 'Đối đầu', 'Đánh nhau'], 1, 'Cạnh tranh là đua tranh giữa các chủ thể KT để tối đa hoá lợi ích.'),
    Q('Cạnh tranh lành mạnh tuân thủ?', ['Pháp luật, đạo đức kinh doanh', 'Lừa đảo', 'Mọi cách', 'Chèn ép'], 0, 'Cạnh tranh lành mạnh: minh bạch, đúng luật, đạo đức.'),
    Q('Cạnh tranh không lành mạnh gồm?', ['Sáng tạo', 'Hàng giả, gian lận, lừa đảo', 'Giảm giá', 'Quảng cáo'], 1, 'Cạnh tranh không lành mạnh: hàng giả, gian lận, vu khống đối thủ.'),
    Q('Hợp tác kinh tế là?', ['Cùng làm việc để đạt lợi ích chung', 'Đối đầu', 'Cạnh tranh', 'Cách ly'], 0, 'Hợp tác: các chủ thể cùng làm việc, chia sẻ lợi ích để cùng phát triển.'),
    Q('Hợp tác giữa các DN có thể qua?', ['Tự phát', 'Hợp đồng, liên doanh, chuỗi cung ứng', 'Chỉ qua sáp nhập và mua lại (M&A)', 'Chỉ cạnh tranh'], 1, 'Hợp tác qua hợp đồng, liên doanh, chuỗi cung ứng, chia sẻ công nghệ.'),
    Q('Cạnh tranh và hợp tác có quan hệ?', ['Đối lập', 'Cùng phá hoại', 'Tồn tại song song, không loại trừ nhau', 'Không liên quan'], 2, 'Doanh nghiệp vừa cạnh tranh vừa hợp tác (coopetition) là chuyện thường.'),
  ]),

  M(12, 'Khái niệm sản xuất kinh doanh', [
    Q('Sản xuất kinh doanh là?', ['Trao đổi', 'Chỉ bán', 'Chỉ sản xuất', 'Tổ chức sản xuất và bán sản phẩm để thu lợi nhuận'], 3, 'SXKD: tổ chức sản xuất + bán sản phẩm → tạo doanh thu và lợi nhuận.'),
    Q('Doanh nghiệp tư nhân là?', ['Hợp tác xã do tập thể xã viên góp vốn', 'Của NN', 'Tập thể', 'DN do 1 cá nhân làm chủ và tự chịu trách nhiệm'], 3, 'DNTN do 1 cá nhân làm chủ, chịu trách nhiệm vô hạn bằng toàn bộ tài sản.'),
    Q('Công ty TNHH là?', ['DN có 1-50 thành viên góp vốn, chịu TN trong phạm vi vốn', 'DN nước ngoài', 'DN cá nhân', 'DN nhà nước'], 0, 'TNHH = trách nhiệm hữu hạn — chỉ chịu trách nhiệm trong phạm vi vốn góp.'),
    Q('Công ty cổ phần có?', ['Vốn chia thành cổ phần, có thể niêm yết', 'Vốn không chia', 'Vốn của NN', 'Vốn của 1 người'], 0, 'CTCP vốn chia thành cổ phần, được phát hành cổ phiếu công khai.'),
    Q('Hợp tác xã là?', ['Tổ chức kinh tế tập thể của xã viên', 'DN nước ngoài', 'DN tư nhân', 'DN nhà nước'], 0, 'HTX là tổ chức kinh tế tập thể do các xã viên tự nguyện thành lập.'),
    Q('Lợi nhuận của DN =?', ['Doanh thu - chi phí', 'Tổng vốn đầu tư ban đầu', 'Doanh thu', 'Chi phí'], 0, 'Lợi nhuận = Doanh thu - Tổng chi phí (gồm chi phí cố định + biến đổi).'),
  ]),

  M(13, 'Văn hoá tiêu dùng', [
    Q('Văn hoá tiêu dùng là?', ['Lãng phí', 'Mua bừa', 'Cách thức và tiêu chí lựa chọn tiêu dùng có chất lượng', 'Tiết kiệm tuyệt đối'], 2, 'VHTD: cách tiêu dùng văn minh, có ý thức, lựa chọn sản phẩm chất lượng và phù hợp.'),
    Q('Tiêu dùng thông minh là?', ['Mua tuỳ hứng', 'Mua sỉ', 'Có kế hoạch, kiểm tra giá - chất lượng', 'Mua đắt'], 2, 'Tiêu dùng thông minh: lập kế hoạch, so sánh giá, đánh giá chất lượng.'),
    Q('Quyền của người tiêu dùng?', ['Chỉ trả tiền', 'Được an toàn, thông tin, lựa chọn, khiếu nại', 'Chỉ mua', 'Không có quyền'], 1, '8 quyền: an toàn, thông tin, lựa chọn, lắng nghe, đại diện, đào tạo, môi trường lành mạnh, khiếu nại.'),
    Q('Khi mua hàng kém chất lượng, người tiêu dùng nên?', ['Khiếu nại nơi bán hoặc cơ quan bảo vệ NTD', 'Bỏ luôn', 'Tự sửa chữa rồi tiếp tục dùng', 'Im lặng'], 0, 'Khiếu nại với người bán, hội bảo vệ NTD hoặc cơ quan quản lý thị trường.'),
    Q('Tiêu dùng bền vững là?', ['Lãng phí', 'Mua đắt', 'Tiết kiệm + bảo vệ môi trường', 'Mua nhiều'], 2, 'Tiêu dùng bền vững: tiết kiệm, ưu tiên sản phẩm thân thiện môi trường.'),
    Q('Hàng giả, hàng nhái gây?', ['Có lợi cho XH', 'Có lợi cho NTD', 'Không vấn đề', 'Thiệt hại NTD và DN làm thật'], 3, 'Hàng giả gây thiệt hại NTD, DN chính hãng, sức khoẻ và kinh tế.'),
  ]),

  M(14, 'Khái niệm hệ thống chính trị Việt Nam', [
    Q('Hệ thống chính trị VN gồm?', ['Chỉ Đảng', 'Toà án', 'Chỉ Nhà nước', 'Đảng Cộng sản, Nhà nước, MTTQ và các đoàn thể'], 3, 'HTCT VN gồm: Đảng, Nhà nước, MTTQ và các tổ chức chính trị - xã hội.'),
    Q('Đảng Cộng sản Việt Nam giữ vai trò?', ['Lãnh đạo Nhà nước và xã hội', 'Xét xử', 'Lập pháp', 'Quản lý kinh tế'], 0, 'ĐCSVN lãnh đạo NN và XH theo Hiến pháp 2013 (Điều 4).'),
    Q('Nhà nước CHXHCN Việt Nam là?', ['Của Đảng', 'Của 1 nhóm', 'Của vua', 'Nhà nước của dân, do dân, vì dân'], 3, 'Hiến pháp 2013: NN VN là nhà nước của Nhân dân, do Nhân dân, vì Nhân dân.'),
    Q('Mặt trận Tổ quốc VN có vai trò?', ['Đại diện và bảo vệ quyền, lợi ích của các tầng lớp Nhân dân', 'Hành pháp', 'Lập pháp', 'Tư pháp'], 0, 'MTTQ tập hợp khối đại đoàn kết toàn dân, đại diện và bảo vệ quyền của Nhân dân.'),
    Q('Các đoàn thể chính trị - xã hội gồm?', ['Chỉ Đoàn', 'Đoàn TNCS, Hội LHPN, Hội Nông dân, Hội Cựu chiến binh, Công đoàn', 'Chỉ Hội PN', 'Chỉ Công đoàn'], 1, '5 tổ chức chính trị - xã hội thành viên MTTQ.'),
    Q('Nguyên tắc hoạt động của HTCT VN?', ['Chuyên chế', 'Chia 3 quyền độc lập', 'Quân chủ', 'Tập trung dân chủ'], 3, 'HTCT VN hoạt động theo nguyên tắc tập trung dân chủ.'),
  ]),

  M(15, 'Cấu trúc Nhà nước CHXHCN Việt Nam', [
    Q('Quốc hội là?', ['Hành pháp', 'Tư pháp', 'Tổ chức chính trị - xã hội', 'Cơ quan quyền lực Nhà nước cao nhất'], 3, 'Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực NN cao nhất.'),
    Q('Quốc hội VN có nhiệm kỳ?', ['4 năm', '5 năm', '10 năm', '3 năm'], 1, 'Quốc hội VN có nhiệm kỳ 5 năm.'),
    Q('Chủ tịch nước là?', ['Đứng đầu Đảng', 'Người đứng đầu Nhà nước, thay mặt Nhà nước về đối nội đối ngoại', 'Đứng đầu CP', 'Đứng đầu Toà'], 1, 'CTN là người đứng đầu NN, thay mặt NN về đối nội, đối ngoại.'),
    Q('Chính phủ là?', ['Liên minh các tổ chức chính trị - xã hội', 'Tư pháp', 'Lập pháp', 'Cơ quan hành chính nhà nước cao nhất'], 3, 'Chính phủ là cơ quan hành chính NN cao nhất, thực hiện quyền hành pháp.'),
    Q('Thủ tướng Chính phủ do?', ['Quốc hội bầu', 'Toàn dân bầu trực tiếp', 'Chủ tịch nước bầu', 'Đảng bổ nhiệm'], 0, 'Quốc hội bầu Thủ tướng theo đề cử của Chủ tịch nước.'),
    Q('Toà án nhân dân tối cao là?', ['Hành pháp', 'Cơ quan xét xử cao nhất', 'Cơ quan kiểm sát hoạt động tư pháp', 'Lập pháp'], 1, 'TANDTC là cơ quan xét xử cao nhất, thực hiện quyền tư pháp.'),
  ]),

  M(16, 'Hệ thống pháp luật Việt Nam', [
    Q('Pháp luật là?', ['Hệ thống quy tắc xử sự bắt buộc do NN ban hành', 'Đạo đức', 'Phong tục', 'Tôn giáo'], 0, 'Pháp luật: hệ thống quy tắc xử sự chung, bắt buộc, được NN bảo đảm thực hiện.'),
    Q('Đặc điểm của pháp luật?', ['Tuỳ nghi', 'Tính quy phạm phổ biến, xác định chặt chẽ, bắt buộc', 'Tự nguyện', 'Linh hoạt'], 1, 'PL có 3 đặc điểm: quy phạm phổ biến, xác định chặt chẽ về hình thức, tính bắt buộc.'),
    Q('Vai trò của pháp luật?', ['Chỉ trừng phạt', 'Vô dụng', 'Phương tiện quản lý XH + bảo vệ quyền công dân', 'Chỉ thu thuế'], 2, 'PL quản lý XH, điều chỉnh quan hệ, bảo vệ quyền lợi hợp pháp.'),
    Q('Pháp luật khác đạo đức ở?', ['Bắt buộc và có chế tài', 'Không khác', 'Đạo đức bắt buộc hơn', 'Đạo đức có chế tài'], 0, 'PL có tính bắt buộc và chế tài cưỡng chế; đạo đức dựa trên tự giác.'),
    Q('Nguồn quan trọng nhất của PL VN?', ['Văn bản quy phạm pháp luật', 'Tập quán', 'Án lệ do TANDTC công bố', 'Lời nói'], 0, 'VN theo hệ thống civil law, nguồn chính là VBQPPL (luật, nghị định, thông tư).'),
    Q('Văn bản có giá trị pháp lý cao nhất là?', ['Hiến pháp', 'Bộ luật', 'Nghị định', 'Thông tư'], 0, 'Hiến pháp là văn bản pháp lý cao nhất, mọi văn bản khác phải tuân thủ.'),
  ]),

  M(17, 'Thực hiện và bảo vệ pháp luật', [
    Q('Thực hiện pháp luật gồm các hình thức?', ['Chỉ phạt', 'Tuân thủ, thi hành, sử dụng, áp dụng', 'Chỉ áp dụng', 'Chỉ tuân thủ'], 1, '4 hình thức thực hiện PL: tuân thủ, thi hành, sử dụng, áp dụng.'),
    Q('Tuân thủ pháp luật là?', ['Không làm điều PL cấm', 'Làm điều PL yêu cầu', 'Sử dụng quyền', 'Áp dụng pháp luật'], 0, 'Tuân thủ: không thực hiện hành vi mà PL cấm.'),
    Q('Vi phạm pháp luật là?', ['Suy nghĩ', 'Hành vi trái pháp luật, có lỗi, xâm hại quan hệ XH', 'Lời nói riêng', 'Hành vi vô tình'], 1, 'VPPL = hành vi trái PL + có lỗi + xâm hại quan hệ XH được PL bảo vệ.'),
    Q('Trách nhiệm pháp lý gồm?', ['Chỉ hành chính', 'Chỉ dân sự', 'Chỉ hình sự', 'Hình sự, hành chính, dân sự, kỷ luật'], 3, '4 loại trách nhiệm pháp lý cơ bản theo loại quan hệ vi phạm.'),
    Q('Tuổi chịu trách nhiệm hình sự đầy đủ?', ['16 tuổi trở lên', '21 tuổi', '14 tuổi', '18 tuổi'], 0, 'Theo BLHS: từ đủ 16 tuổi chịu TNHS đầy đủ; 14-16 chịu một số loại tội nặng.'),
    Q('Học sinh vi phạm PL bị?', ['Phạt nặng', 'Xử lý theo quy định, tuỳ tuổi và mức độ', 'Tha bổng', 'Bỏ qua'], 1, 'Học sinh vi phạm vẫn bị xử lý PL, có thể áp dụng giáo dục thay thế cho người chưa thành niên.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('3 chủ thể chính của nền kinh tế?', ['Chỉ NN', 'Nhà nước, DN, hộ gia đình', 'Chỉ HGĐ', 'Chỉ DN'], 1, '3 chủ thể: NN, DN, hộ gia đình.'),
    Q('Cơ chế thị trường vận hành theo?', ['May rủi', 'Mệnh lệnh', 'Phong tục', 'Cung - cầu - giá cả'], 3, 'TT vận hành theo cung - cầu - giá cả.'),
    Q('Thuế VAT là loại?', ['Gián thu', 'Lệ phí', 'Thuế trực thu đánh vào hàng hoá', 'Trực thu'], 0, 'VAT là thuế gián thu.'),
    Q('Thuế TNCN đánh vào?', ['Thu nhập cá nhân', 'Đất đai', 'Lợi nhuận DN', 'Hàng hoá'], 0, 'TNCN đánh vào thu nhập cá nhân.'),
    Q('Quốc hội VN nhiệm kỳ?', ['5 năm', '4 năm', '10 năm', '3 năm'], 0, 'Quốc hội VN nhiệm kỳ 5 năm.'),
    Q('Hiến pháp là?', ['Nghị định', 'Văn bản pháp lý cao nhất', 'Thông tư', 'Bộ luật'], 1, 'Hiến pháp là văn bản cao nhất.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hiến pháp - Khái quát', [
    Q('Hiến pháp là?', ['Nghị định', 'Luật thông thường', 'Thông tư', 'Luật cơ bản của Nhà nước, có hiệu lực pháp lý cao nhất'], 3, 'Hiến pháp là luật cơ bản, mọi văn bản khác phải tuân thủ.'),
    Q('Hiến pháp hiện hành của VN là?', ['Hiến pháp 2013', 'Hiến pháp 1980', 'Hiến pháp 1992', 'Hiến pháp 1946'], 0, 'Hiến pháp 2013 được Quốc hội thông qua ngày 28/11/2013, hiệu lực 1/1/2014.'),
    Q('VN đã có mấy bản Hiến pháp?', ['5 (1946, 1959, 1980, 1992, 2013)', '10', '3', '7'], 0, '5 bản Hiến pháp: 1946, 1959, 1980, 1992 (sửa 2001), 2013.'),
    Q('Cơ quan có quyền sửa đổi Hiến pháp?', ['Uỷ ban Thường vụ Quốc hội', 'Toà án', 'Chính phủ', 'Quốc hội'], 3, 'Quốc hội có thẩm quyền lập hiến và sửa đổi Hiến pháp.'),
    Q('Để Hiến pháp được thông qua cần?', ['3/4', '100%', 'Ít nhất 2/3 tổng số ĐBQH biểu quyết tán thành', 'Quá bán'], 2, 'Hiến pháp được thông qua khi ít nhất 2/3 tổng số ĐBQH tán thành.'),
    Q('Hiến pháp 2013 có bao nhiêu chương?', ['5', '11 chương', '20', '15'], 1, 'Hiến pháp 2013 có 11 chương và 120 điều.'),
  ]),

  M(20, 'Nội dung Hiến pháp 2013 - Chế độ chính trị', [
    Q('Điều 2 Hiến pháp 2013 khẳng định?', ['Nhà nước quân chủ', 'NN liên bang', 'NN cộng hoà', 'Nhà nước CHXHCN VN là Nhà nước pháp quyền của Nhân dân'], 3, 'Điều 2: NN VN là NN pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.'),
    Q('Quyền lực NN VN là?', ['Phân lập tuyệt đối', 'Tập trung 1 người', 'Tách rời', 'Thống nhất, có phân công và phối hợp giữa các cơ quan'], 3, 'Quyền lực thống nhất, có phân công - phối hợp giữa lập pháp, hành pháp, tư pháp.'),
    Q('Đảng CSVN là?', ['Tổ chức xã hội', 'Lực lượng lãnh đạo NN và XH', 'Cơ quan tư pháp', 'Cơ quan hành pháp'], 1, 'Điều 4 Hiến pháp 2013: ĐCSVN là lực lượng lãnh đạo NN và xã hội.'),
    Q('MTTQ VN là?', ['Cơ sở chính trị của chính quyền nhân dân', 'Tổ chức cá nhân', 'Cơ quan quản lý hành chính cấp xã', 'Cơ quan NN'], 0, 'Điều 9: MTTQ là cơ sở chính trị của chính quyền nhân dân.'),
    Q('Mọi quyền lực NN VN thuộc về?', ['Đảng Cộng sản Việt Nam', 'Nhân dân', 'Quân đội', 'Chủ tịch nước'], 1, 'Quyền lực NN thuộc về Nhân dân, do Nhân dân uỷ quyền.'),
    Q('Quốc kỳ VN có?', ['Nền xanh', 'Nền trắng', '3 màu', 'Nền đỏ, sao vàng 5 cánh'], 3, 'Quốc kỳ VN: nền đỏ, ở giữa có ngôi sao vàng 5 cánh.'),
  ]),

  M(21, 'Quyền và nghĩa vụ cơ bản của công dân', [
    Q('Quyền cơ bản của công dân ghi trong?', ['Luật Hình sự', 'Bộ luật Lao động', 'Hiến pháp', 'Bộ luật Dân sự'], 2, 'Hiến pháp quy định các quyền và nghĩa vụ cơ bản của công dân.'),
    Q('Công dân VN có quyền?', ['Bầu cử từ 16', 'Ứng cử từ 16', 'Bầu cử, ứng cử từ đủ 18/21 tuổi', 'Không có quyền'], 2, 'Công dân từ đủ 18 tuổi có quyền bầu cử, từ đủ 21 tuổi có quyền ứng cử.'),
    Q('Quyền tự do ngôn luận là?', ['Không bị giới hạn', 'Quyền bày tỏ ý kiến trong khuôn khổ PL', 'Nói gì cũng được', 'Chỉ áp dụng với nhà báo, phóng viên'], 1, 'Quyền tự do ngôn luận trong khuôn khổ PL, không xâm hại lợi ích NN và người khác.'),
    Q('Công dân có nghĩa vụ?', ['Chỉ thuế', 'Tuân theo HP và PL, bảo vệ Tổ quốc, đóng thuế', 'Chỉ tham gia bầu cử khi đủ 18 tuổi', 'Chỉ quân sự'], 1, 'Nghĩa vụ: tuân thủ PL, bảo vệ Tổ quốc, thi hành nghĩa vụ quân sự, đóng thuế.'),
    Q('Nghĩa vụ quân sự ở VN với nam giới?', ['Từ đủ 17 đến hết 25 tuổi', 'Từ đủ 18 đến hết 30 tuổi', 'Không bắt buộc', 'Từ đủ 18 đến hết 25 tuổi (có thể tới 27 với người có CĐ-ĐH)'], 3, 'Luật NVQS: nam công dân từ đủ 18 đến hết 25 tuổi.'),
    Q('Quyền học tập của công dân được?', ['Tự túc', 'Trả phí', 'Chỉ áp dụng đến hết bậc tiểu học', 'Bảo đảm bởi NN'], 3, 'Học tập là quyền và nghĩa vụ; NN đảm bảo giáo dục phổ cập.'),
  ]),

  M(22, 'Quyền tự do dân chủ của công dân', [
    Q('Quyền tự do tín ngưỡng, tôn giáo nghĩa là?', ['Chỉ Phật giáo', 'Cấm tôn giáo', 'Tin hoặc không tin theo tôn giáo nào', 'Bắt buộc 1 tôn giáo'], 2, 'CD có quyền tự do tín ngưỡng tôn giáo, không ai bị phân biệt vì lý do này.'),
    Q('Quyền tự do đi lại và cư trú?', ['Bị cấm', 'Chỉ trong tỉnh', 'Đi đâu cũng được', 'Đi lại và chọn nơi cư trú trong nước'], 3, 'CD có quyền tự do đi lại và cư trú trong nước, ra nước ngoài theo PL.'),
    Q('Quyền bất khả xâm phạm về thân thể là?', ['Có thể bắt bất kỳ ai', 'Chỉ với phụ nữ', 'Không ai bị bắt giam tuỳ tiện', 'Không có quyền này'], 2, 'Không ai bị bắt giam khi không có quyết định của TA hoặc VKS, trừ trường hợp phạm tội quả tang.'),
    Q('Bí mật thư tín, điện thoại được?', ['Chỉ NN được mở', 'Mở thoải mái', 'Bảo vệ; không ai được xâm phạm trái PL', 'Tự do truy cập'], 2, 'Bí mật thư tín, điện thoại, viễn thông được PL bảo vệ.'),
    Q('Quyền khiếu nại, tố cáo là?', ['Chỉ cán bộ có', 'Quyền cơ bản của công dân', 'Chỉ doanh nhân', 'Chỉ thực hiện qua đại biểu Quốc hội'], 1, 'Mọi công dân có quyền khiếu nại quyết định hành chính hoặc tố cáo hành vi vi phạm.'),
    Q('Quyền tham gia quản lý NN và XH thể hiện qua?', ['Chỉ bầu cử', 'Chỉ ứng cử', 'Im lặng', 'Bầu cử, ứng cử, kiến nghị, giám sát'], 3, 'Quyền tham gia: bầu cử, ứng cử, đóng góp ý kiến, giám sát, kiến nghị.'),
  ]),

  M(23, 'Quyền và nghĩa vụ về kinh tế của công dân', [
    Q('Quyền sở hữu hợp pháp của công dân?', ['Được PL bảo vệ', 'Tự do tuỳ ý', 'Bị cấm', 'Chỉ với NN'], 0, 'Quyền sở hữu hợp pháp về thu nhập, tài sản được PL bảo vệ.'),
    Q('Công dân có quyền tự do kinh doanh?', ['Chỉ một số', 'Phải xin phép Chính phủ cho mọi ngành', 'Mọi lĩnh vực', 'Trong lĩnh vực mà PL không cấm'], 3, 'Tự do kinh doanh trong các ngành nghề PL không cấm.'),
    Q('Quyền tự do hợp đồng nghĩa là?', ['Tự nguyện giao kết HĐ không trái PL', 'Phải có công chứng mới có hiệu lực', 'Một bên có thể đơn phương thay đổi điều khoản', 'Bị ép buộc'], 0, 'Các bên tự nguyện giao kết hợp đồng, miễn không trái PL và đạo đức XH.'),
    Q('Khi xảy ra tranh chấp kinh tế, công dân?', ['Tự xử lý', 'Có quyền khởi kiện ra Toà án', 'Phải khiếu nại lên Quốc hội trước', 'Chịu thua'], 1, 'Tranh chấp dân sự - kinh tế giải quyết qua thương lượng, hoà giải hoặc khởi kiện.'),
    Q('Nghĩa vụ thuế của công dân?', ['Nộp đầy đủ, kịp thời theo PL', 'Tự quyết', 'Có thì nộp', 'Không cần'], 0, 'Nghĩa vụ nộp thuế đầy đủ và kịp thời theo quy định PL.'),
    Q('Cạnh tranh kinh tế lành mạnh được PL?', ['Chỉ cho phép với doanh nghiệp nhà nước', 'Hạn chế', 'Khuyến khích, bảo vệ', 'Không quan tâm'], 2, 'PL khuyến khích cạnh tranh lành mạnh, chống độc quyền và cạnh tranh không lành mạnh.'),
  ]),

  M(24, 'Bộ luật Dân sự', [
    Q('Bộ luật Dân sự điều chỉnh?', ['Quan hệ hành chính', 'Quan hệ lao động', 'Quan hệ hình sự', 'Quan hệ tài sản và quan hệ nhân thân'], 3, 'BLDS điều chỉnh quan hệ tài sản, quan hệ nhân thân giữa các cá nhân, pháp nhân.'),
    Q('Hợp đồng dân sự cần đảm bảo?', ['Bị ép buộc', 'Tự nguyện, không trái PL và đạo đức', 'Trái PL cũng được', 'Không cần điều kiện'], 1, 'Hợp đồng dân sự phải tự nguyện, không trái PL và đạo đức XH.'),
    Q('Thừa kế theo PL khi?', ['Luôn luôn', 'Khi có di chúc', 'Không có di chúc hoặc di chúc không hợp pháp', 'Không bao giờ'], 2, 'Thừa kế theo PL khi không có di chúc hoặc di chúc không có hiệu lực.'),
    Q('Quyền nhân thân là?', ['Quyền gắn với cá nhân không thể chuyển giao', 'Chứng khoán', 'Tài sản', 'Đất đai'], 0, 'Quyền nhân thân (tên, danh dự, hình ảnh...) gắn với cá nhân, không chuyển nhượng được.'),
    Q('Người chưa đủ 18 tuổi giao dịch dân sự?', ['Bị cấm tuyệt đối', 'Tự do hoàn toàn như người đủ 18 tuổi', 'Không được', 'Có giới hạn, cần người đại diện hợp pháp'], 3, 'Người chưa thành niên cần người đại diện hoặc giám hộ cho các giao dịch lớn.'),
    Q('Bồi thường thiệt hại trong dân sự dựa trên?', ['May rủi', 'Lỗi và thiệt hại thực tế', 'Tài sản', 'Theo mức tối thiểu do địa phương quy định'], 1, 'Trách nhiệm bồi thường = thiệt hại thực tế do hành vi có lỗi gây ra.'),
  ]),

  M(25, 'Luật Hình sự', [
    Q('Bộ luật Hình sự VN hiện hành?', ['BLHS 1999', 'BLHS 2015 (sửa đổi 2017)', 'BLHS 1985', 'BLHS 2010'], 1, 'BLHS 2015 sửa đổi 2017 đang có hiệu lực.'),
    Q('Tội phạm là?', ['Hành vi nguy hiểm cho XH do người có năng lực TNHS thực hiện', 'Lời nói', 'Hành vi nhẹ', 'Suy nghĩ'], 0, 'Tội phạm: hành vi nguy hiểm cho XH, có lỗi, do người có năng lực TNHS thực hiện.'),
    Q('Tuổi chịu trách nhiệm hình sự đầy đủ?', ['21 tuổi', 'Đủ 16 tuổi', '14 tuổi', '18 tuổi'], 1, 'Người đủ 16 tuổi chịu TNHS đầy đủ; 14-16 chịu một số tội nặng.'),
    Q('Hình phạt chính trong BLHS gồm?', ['Chỉ phạt tiền', 'Cảnh cáo, phạt tiền, tù có thời hạn, tù chung thân, tử hình', 'Chỉ tử hình', 'Chỉ tù'], 1, '7 hình phạt chính: cảnh cáo, phạt tiền, cải tạo, trục xuất, tù có thời hạn, chung thân, tử hình.'),
    Q('Người bị tạm giam có quyền?', ['Bị bóc lột', 'Không có quyền', 'Bị tra tấn', 'Bào chữa, gặp luật sư'], 3, 'Người bị tạm giam có quyền bào chữa, gặp luật sư, không bị tra tấn.'),
    Q('Toà án xét xử công khai khi?', ['Tuỳ thẩm phán', 'Tất cả', 'Phần lớn vụ án (trừ một số vụ đặc biệt)', 'Không vụ nào'], 2, 'Nguyên tắc xét xử công khai trừ vụ liên quan bí mật NN, đời tư cá nhân.'),
  ]),

  M(26, 'Luật Hành chính', [
    Q('Vi phạm hành chính là?', ['Hành vi trái PL nhưng chưa đến mức tội phạm', 'Suy nghĩ', 'Hành vi nhẹ', 'Hành vi nặng'], 0, 'VPHC: hành vi trái PL có lỗi nhưng chưa đến mức truy cứu TNHS.'),
    Q('Hình thức xử phạt VPHC chính?', ['Khai trừ', 'Tử hình', 'Phạt tù', 'Cảnh cáo, phạt tiền'], 3, '2 hình thức chính: cảnh cáo và phạt tiền.'),
    Q('Người vi phạm giao thông bị?', ['Tù ngay', 'Tử hình', 'Không bị gì', 'Xử lý hành chính (phạt tiền, tước GPLX)'], 3, 'Vi phạm giao thông thông thường bị xử phạt hành chính.'),
    Q('Cơ quan có thẩm quyền xử phạt VPHC?', ['Viện kiểm sát nhân dân các cấp', 'Công an, UBND, các cơ quan chuyên ngành', 'Quốc hội', 'Toà án'], 1, 'CA, UBND các cấp, các cơ quan chuyên ngành (thuế, môi trường...) có thẩm quyền.'),
    Q('Người chưa đủ 14 tuổi vi phạm hành chính?', ['Bị truy cứu trách nhiệm hình sự', 'Bị cảnh cáo', 'Bị phạt nặng', 'Không bị xử phạt VPHC, áp dụng biện pháp khác'], 3, 'Dưới 14 tuổi không xử phạt VPHC, có thể áp dụng biện pháp giáo dục.'),
    Q('Cưỡng chế thi hành quyết định xử phạt khi?', ['Đã chấp hành', 'Người vi phạm không tự nguyện chấp hành', 'Có khiếu nại', 'Tự nguyện'], 1, 'Cưỡng chế khi người vi phạm không tự nguyện chấp hành quyết định xử phạt.'),
  ]),

  M(27, 'Luật Lao động', [
    Q('Bộ luật Lao động hiện hành?', ['BLLĐ 1995', 'BLLĐ 2019', 'BLLĐ 2007', 'BLLĐ 2012'], 1, 'BLLĐ 2019 có hiệu lực từ 1/1/2021.'),
    Q('Tuổi tối thiểu giao kết hợp đồng lao động?', ['18', '15 tuổi', '20', '13'], 1, 'Người từ đủ 15 tuổi có thể giao kết HĐLĐ (có một số điều kiện cho 13-15).'),
    Q('Người sử dụng lao động phải đảm bảo?', ['Chỉ lương', 'Tiền lương tối thiểu, bảo hiểm xã hội, an toàn LĐ', 'Theo thoả thuận miệng giữa hai bên', 'Chỉ BHXH'], 1, 'NSDLĐ phải đảm bảo lương tối thiểu, BHXH, an toàn vệ sinh lao động.'),
    Q('Lương tối thiểu vùng do?', ['Toà án', 'Chính phủ quy định', 'DN tự quyết', 'NLĐ tự quyết'], 1, 'Chính phủ ban hành mức lương tối thiểu vùng hàng năm.'),
    Q('Thời giờ làm việc bình thường?', ['Không quá 10h/ngày, 50h/tuần', '12h/ngày', 'Không quá 8h/ngày, 48h/tuần', '60h/tuần'], 2, 'Tối đa 8h/ngày, 48h/tuần với LĐ bình thường; khuyến khích 40h/tuần.'),
    Q('Công đoàn cơ sở có vai trò?', ['Chỉ thu phí', 'Bảo vệ quyền lợi NLĐ', 'Vô tác dụng', 'Chỉ tổ chức lễ hội'], 1, 'Công đoàn cơ sở đại diện và bảo vệ quyền lợi hợp pháp của NLĐ.'),
  ]),

  M(28, 'Luật Hôn nhân và Gia đình', [
    Q('Luật HNGĐ hiện hành?', ['2000', '1986', '2010', 'Luật HNGĐ 2014'], 3, 'Luật HNGĐ 2014 có hiệu lực từ 1/1/2015.'),
    Q('Tuổi kết hôn ở VN?', ['Tuỳ theo phong tục địa phương', 'Nam ≥18, nữ ≥18', 'Nam ≥21, nữ ≥20', 'Nam ≥20, nữ ≥18'], 3, 'Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi mới được kết hôn.'),
    Q('Hôn nhân ở VN dựa trên nguyên tắc?', ['Tự nguyện, một vợ một chồng, bình đẳng', 'Phong tục', 'Đa thê', 'Sắp đặt'], 0, 'Hôn nhân: tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng.'),
    Q('Quan hệ tài sản trong gia đình?', ['Tuỳ vợ chồng', 'Toàn riêng', 'Tài sản chung và tài sản riêng được PL công nhận', 'Toàn chung'], 2, 'PL công nhận tài sản chung của vợ chồng và tài sản riêng của mỗi bên.'),
    Q('Khi ly hôn, tài sản chung được?', ['Chia đôi', 'Cho 1 bên', 'Sung công', 'Chia theo nguyên tắc bình đẳng, có xét đến công sức'], 3, 'Tài sản chung chia theo bình đẳng, có xét công sức đóng góp, hoàn cảnh.'),
    Q('Cha mẹ có nghĩa vụ?', ['Chỉ đến 5 tuổi', 'Chỉ đến 18 tuổi', 'Nuôi dạy con cái đến trưởng thành', 'Chỉ đến khi con lấy vợ/chồng'], 2, 'Cha mẹ có nghĩa vụ nuôi dạy con đến tuổi trưởng thành, không phân biệt giới tính.'),
  ]),

  M(29, 'Quyền sở hữu trí tuệ', [
    Q('Sở hữu trí tuệ bao gồm?', ['Đất đai', 'Chỉ thương hiệu', 'Chỉ phát minh', 'Quyền tác giả, sáng chế, nhãn hiệu, kiểu dáng'], 3, 'SHTT: quyền tác giả, quyền liên quan, quyền sở hữu công nghiệp (sáng chế, nhãn hiệu, kiểu dáng).'),
    Q('Quyền tác giả phát sinh khi?', ['Bán đi', 'Tác phẩm được tạo ra dưới hình thức vật chất', 'Đăng ký', 'Công bố'], 1, 'Quyền tác giả phát sinh từ thời điểm tác phẩm được sáng tạo và thể hiện dưới hình thức vật chất.'),
    Q('Vi phạm bản quyền là?', ['Tự sáng tạo', 'Trích dẫn có ghi nguồn', 'Mua hợp lệ', 'Sao chép, sử dụng không xin phép, không trả tiền'], 3, 'Vi phạm bản quyền: sao chép, sử dụng tác phẩm không xin phép, không trả thù lao.'),
    Q('Sáng chế cần đáp ứng?', ['Có giá trị thương mại cao', 'Tính mới, sáng tạo, khả năng áp dụng công nghiệp', 'Được công bố rộng rãi trên truyền thông', 'Có thiết kế đẹp, dễ nhận biết'], 1, '3 điều kiện sáng chế: tính mới, sáng tạo, có thể áp dụng công nghiệp.'),
    Q('Nhãn hiệu được bảo hộ khi?', ['Tự nghĩ ra', 'Sử dụng', 'Gắn trên sản phẩm và bán ra thị trường', 'Đăng ký với cơ quan SHTT (NOIP)'], 3, 'Nhãn hiệu được bảo hộ khi đăng ký với Cục SHTT.'),
    Q('Học sinh có thể làm gì để tôn trọng SHTT?', ['Tải nhiều', 'Trích dẫn nguồn, không tải lậu', 'Sao chép tự do', 'Bán lại'], 1, 'Học sinh: trích dẫn nguồn khi tham khảo, không sao chép và tải lậu.'),
  ]),

  M(30, 'Luật An ninh mạng và bảo vệ dữ liệu cá nhân', [
    Q('Luật An ninh mạng VN có hiệu lực?', ['2010', '2020', 'Từ 1/1/2019', '2015'], 2, 'Luật ANM được Quốc hội thông qua 12/6/2018, hiệu lực 1/1/2019.'),
    Q('Hành vi bị cấm trên không gian mạng?', ['Họp trực tuyến', 'Học online', 'Tuyên truyền chống NN, lừa đảo, xâm phạm quyền riêng tư', 'Đăng ảnh'], 2, 'Cấm: tuyên truyền chống NN, lừa đảo, xâm phạm an toàn thông tin cá nhân.'),
    Q('Dữ liệu cá nhân là?', ['Mã số doanh nghiệp', 'Thông tin công khai trên báo chí', 'Tin tức', 'Thông tin nhận dạng được cá nhân'], 3, 'Dữ liệu cá nhân: tên, địa chỉ, sinh trắc học... nhận dạng được cá nhân.'),
    Q('Khi đăng tin sai sự thật, người vi phạm bị?', ['Khen thưởng', 'Xử phạt hành chính hoặc hình sự tuỳ mức độ', 'Không gì', 'Bỏ qua'], 1, 'Tin sai sự thật có thể bị phạt VPHC hoặc xử lý hình sự nếu nghiêm trọng.'),
    Q('Mật khẩu mạnh nên?', ['Dài, có chữ - số - ký tự đặc biệt', 'Đơn giản', 'Ngày sinh', 'Tên mình'], 0, 'Mật khẩu mạnh: dài ≥8 ký tự, kết hợp chữ hoa, thường, số, ký tự đặc biệt.'),
    Q('Khi nhận tin nhắn lừa đảo, bạn nên?', ['Chuyển tiền', 'Tin tưởng', 'Không cung cấp thông tin, báo cáo', 'Cung cấp OTP'], 2, 'Không cung cấp thông tin cá nhân, OTP; báo cáo cơ quan chức năng.'),
  ]),

  M(31, 'Phòng chống tham nhũng', [
    Q('Tham nhũng là?', ['Cải cách', 'Hành vi lương thiện', 'Cạnh tranh', 'Lợi dụng chức vụ để trục lợi cá nhân'], 3, 'Tham nhũng: lợi dụng chức vụ, quyền hạn để trục lợi cá nhân.'),
    Q('Luật Phòng chống tham nhũng hiện hành?', ['2020', 'Luật PCTN 2018', '2005', '2012'], 1, 'Luật PCTN 2018 có hiệu lực từ 1/7/2019.'),
    Q('Tài sản kê khai bắt buộc với?', ['Học sinh', 'Cán bộ, công chức có chức vụ', 'DN tư nhân', 'Toàn dân'], 1, 'Cán bộ, công chức có chức vụ phải kê khai tài sản, thu nhập.'),
    Q('Hành vi tham nhũng bị?', ['Chỉ kiểm điểm nội bộ cơ quan', 'Bỏ qua', 'Không gì', 'Xử lý hình sự, mất chức, kỷ luật'], 3, 'Tham nhũng bị xử lý hình sự, kỷ luật, bồi hoàn tài sản.'),
    Q('Vai trò của Nhân dân trong PCTN?', ['Giám sát, tố giác', 'Im lặng', 'Bao che', 'Tiếp tay'], 0, 'Nhân dân có quyền và trách nhiệm giám sát, tố giác hành vi tham nhũng.'),
    Q('Hành vi nhận hối lộ bị xử?', ['Phạt nhẹ', 'Cảnh cáo', 'Bỏ qua', 'Hình sự, có thể tù chung thân hoặc tử hình'], 3, 'BLHS quy định tội nhận hối lộ với khung hình phạt nặng, có thể tới tử hình.'),
  ]),

  M(32, 'Bảo vệ Tổ quốc - Quốc phòng và An ninh', [
    Q('Bảo vệ Tổ quốc là?', ['Chỉ NN', 'Chỉ quân đội', 'Quyền và nghĩa vụ thiêng liêng của công dân', 'Chỉ thực hiện khi có chiến tranh'], 2, 'Hiến pháp: bảo vệ Tổ quốc là quyền và nghĩa vụ thiêng liêng, cao quý.'),
    Q('Nghĩa vụ quân sự VN với nam giới?', ['Không bắt buộc', 'Từ đủ 17 đến hết 25 tuổi', 'Từ đủ 21 đến hết 30 tuổi', 'Từ đủ 18 đến hết 25 tuổi (tới 27 với CĐ-ĐH)'], 3, 'Luật NVQS: nam công dân từ đủ 18 đến hết 25 tuổi (gia hạn tới 27 với CĐ-ĐH).'),
    Q('Lực lượng vũ trang VN gồm?', ['Chỉ công an', 'Chỉ quân đội', 'Quân đội nhân dân, Công an nhân dân, Dân quân tự vệ', 'Chỉ dân quân'], 2, '3 thành phần LLVT: QĐND, CAND, Dân quân tự vệ.'),
    Q('An ninh quốc gia bao gồm?', ['Chỉ kinh tế', 'Chỉ chính trị', 'Chỉ quân sự', 'An ninh chính trị, kinh tế, văn hoá, mạng'], 3, 'ANQG đa lĩnh vực: chính trị, kinh tế, văn hoá, mạng, biên giới...'),
    Q('Hành vi xâm phạm an ninh quốc gia?', ['Bị xử lý nghiêm theo BLHS', 'Phạt nhẹ', 'Khen thưởng', 'Bỏ qua'], 0, 'Xâm phạm ANQG bị xử lý nghiêm theo BLHS, có thể tử hình.'),
    Q('Học sinh góp phần bảo vệ Tổ quốc bằng cách?', ['Không quan tâm', 'Học tốt, rèn luyện, tuân thủ PL', 'Bỏ học để đi làm phụ giúp gia đình', 'Im lặng'], 1, 'Học sinh: học tốt, rèn luyện, tuân thủ PL, sẵn sàng thực hiện NVQS.'),
  ]),

  M(33, 'Giáo dục pháp luật và đạo đức công dân', [
    Q('Giáo dục pháp luật giúp?', ['Chỉ tốn thời gian', 'Nâng cao ý thức tuân thủ và sử dụng PL', 'Vô dụng', 'Phá luật'], 1, 'GD PL giúp CD hiểu, tuân thủ và sử dụng PL bảo vệ quyền lợi.'),
    Q('Đạo đức công dân là?', ['Tôn giáo', 'Hệ giá trị, chuẩn mực ứng xử trong XH', 'Quy tắc bắt buộc', 'Phong tục'], 1, 'Đạo đức CD là các giá trị, chuẩn mực ứng xử trong cộng đồng.'),
    Q('Trung thực, liêm chính là?', ['Cứng nhắc', 'Chỉ cần thiết với cán bộ công chức', 'Lạc hậu', 'Phẩm chất đạo đức cốt lõi'], 3, 'Trung thực, liêm chính là phẩm chất đạo đức cốt lõi của công dân tốt.'),
    Q('Học sinh thể hiện trách nhiệm công dân qua?', ['Im lặng', 'Chỉ tập trung học, bỏ qua hoạt động xã hội', 'Học tập, tuân thủ PL, tham gia hoạt động cộng đồng', 'Đứng ngoài'], 2, 'HS thể hiện qua học tập, tuân thủ PL, hoạt động đoàn thể, từ thiện.'),
    Q('Giúp đỡ người yếu thế là?', ['Lãng phí', 'Không nên', 'Hành động đạo đức tích cực', 'Bắt buộc PL'], 2, 'Giúp đỡ người yếu thế là hành động đạo đức tích cực, được khuyến khích.'),
    Q('Tham gia hoạt động tình nguyện giúp?', ['Phát triển nhân cách, kỹ năng', 'Mất thời gian', 'Chỉ làm khi được cộng điểm rèn luyện', 'Tốn tiền'], 0, 'Tình nguyện giúp HS phát triển nhân cách, kỹ năng sống, đóng góp XH.'),
  ]),

  M(34, 'Hội nhập quốc tế và pháp luật', [
    Q('Hội nhập quốc tế đòi hỏi VN?', ['Phản đối luật QT', 'Không quan tâm', 'Cô lập', 'Tuân thủ điều ước quốc tế'], 3, 'VN khi tham gia điều ước QT phải tuân thủ và nội luật hoá.'),
    Q('Quan hệ giữa PL quốc gia và QT?', ['Đối lập', 'Bổ sung và phù hợp với nhau', 'Không liên quan', 'Loại trừ'], 1, 'PL quốc gia phù hợp với điều ước QT mà VN tham gia.'),
    Q('Quyền con người trong PL VN?', ['Bị hạn chế', 'Chỉ ghi nhận trong Hiến pháp, chưa luật hoá', 'Tương thích với chuẩn QT', 'Vượt QT'], 2, 'PL VN bảo đảm các quyền con người phù hợp với chuẩn QT (UDHR).'),
    Q('Khi PL VN và điều ước QT khác nhau?', ['Bỏ cả 2', 'Áp dụng điều ước QT (trong phạm vi cam kết)', 'Áp dụng song song cả hai văn bản', 'Áp dụng PL VN'], 1, 'Theo Luật Điều ước QT 2016, áp dụng điều ước QT khi có khác biệt.'),
    Q('Tổ chức nào giám sát thực hiện quyền con người?', ['Hội đồng Nhân quyền LHQ', 'Diễn đàn Hợp tác Kinh tế châu Á - TBD', 'Liên minh châu Âu', 'Tổ chức Thương mại Thế giới'], 0, 'Hội đồng Nhân quyền LHQ giám sát và đánh giá định kỳ các quốc gia.'),
    Q('Học sinh VN trong hội nhập cần?', ['Chỉ biết VN', 'Biết ngoại ngữ + hiểu văn hoá + tuân thủ PL', 'Chỉ học tiếng Việt', 'Cô lập'], 1, 'HS cần ngoại ngữ, hiểu văn hoá đa quốc gia, vẫn giữ bản sắc Việt và tuân thủ PL.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('3 chủ thể nền kinh tế?', ['Cá nhân, DN, NN', 'NN, dân, Đảng', 'Đảng, DN, dân', 'Nhà nước, DN, hộ gia đình'], 3, '3 chủ thể: NN, DN, hộ gia đình.'),
    Q('Thuế VAT là?', ['Gián thu', 'Lệ phí', 'Thuế gián thu chỉ với hàng nhập khẩu', 'Trực thu'], 0, 'VAT là thuế gián thu.'),
    Q('Hiến pháp 2013 có?', ['5 chương', '15 chương', '100 điều', '11 chương 120 điều'], 3, 'Hiến pháp 2013 có 11 chương, 120 điều.'),
    Q('Tuổi bầu cử ở VN?', ['25', '16', 'Đủ 18 tuổi', '21'], 2, 'CD đủ 18 tuổi có quyền bầu cử.'),
    Q('Bảo vệ Tổ quốc là?', ['Quyền và nghĩa vụ thiêng liêng', 'Chỉ quân đội', 'Chỉ thực hiện khi có lệnh tổng động viên', 'Không bắt buộc'], 0, 'Hiến pháp: bảo vệ TQ là quyền và nghĩa vụ thiêng liêng.'),
    Q('Quyền sở hữu trí tuệ bảo vệ?', ['Cơ thể', 'Tiền bạc', 'Sáng tạo, phát minh, nhãn hiệu', 'Đất đai'], 2, 'SHTT bảo vệ sáng tạo: tác giả, sáng chế, nhãn hiệu, kiểu dáng.'),
  ]),
];

export const H10GDCD_SCENARIOS = indexBy(H10GDCD_WEEKS);
