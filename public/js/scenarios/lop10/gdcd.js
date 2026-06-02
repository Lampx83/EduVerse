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
    Q('Hoạt động kinh tế là?', ['Sản xuất - phân phối - trao đổi - tiêu dùng','Chỉ tiêu dùng','Chỉ sản xuất','Chỉ buôn bán'], 0, 'Hoạt động kinh tế gồm 4 khâu: sản xuất, phân phối, trao đổi, tiêu dùng.'),
    Q('Sản xuất là?', ['Tạo ra của cải vật chất và dịch vụ','Tiêu dùng','Trao đổi','Phân phối'], 0, 'Sản xuất là khâu tạo ra hàng hoá và dịch vụ.'),
    Q('Tiêu dùng là?', ['Sử dụng sản phẩm để thoả mãn nhu cầu','Sản xuất','Mua bán','Vận chuyển'], 0, 'Tiêu dùng là khâu cuối, sử dụng hàng hoá/dịch vụ.'),
    Q('Hoạt động kinh tế có vai trò?', ['Đáp ứng nhu cầu vật chất và tinh thần','Chỉ giải trí','Chỉ trang trí','Vô dụng'], 0, 'Hoạt động kinh tế đáp ứng nhu cầu, duy trì và phát triển xã hội.'),
    Q('Trong sản xuất hàng hoá, cần kết hợp?', ['Sức lao động, tư liệu sản xuất, đối tượng lao động','Chỉ tiền','Chỉ máy móc','Chỉ nhân công'], 0, '3 yếu tố cơ bản: sức lao động, tư liệu sản xuất, đối tượng lao động.'),
    Q('Hàng hoá khác sản phẩm thông thường ở chỗ?', ['Được sản xuất để bán/trao đổi','Để dùng riêng','Là đồ thừa','Không khác'], 0, 'Hàng hoá là sản phẩm được tạo ra để trao đổi/mua bán.'),
  ]),

  M(2, 'Các chủ thể của nền kinh tế', [
    Q('Các chủ thể chính của nền kinh tế Việt Nam?', ['Nhà nước, doanh nghiệp, hộ gia đình','Chỉ nhà nước','Chỉ doanh nghiệp','Chỉ hộ gia đình'], 0, '3 chủ thể chính: Nhà nước, doanh nghiệp, hộ gia đình.'),
    Q('Vai trò của Nhà nước trong nền kinh tế?', ['Quản lý, điều tiết, hỗ trợ và là chủ thể kinh tế','Không tham gia','Chỉ thu thuế','Chỉ cấp giấy phép'], 0, 'Nhà nước quản lý vĩ mô, điều tiết, sở hữu DN nhà nước, cung cấp DV công.'),
    Q('Doanh nghiệp có vai trò?', ['Sản xuất hàng hoá, dịch vụ, tạo việc làm','Chỉ thu thuế','Chỉ chi tiêu','Chỉ làm thiện nguyện'], 0, 'Doanh nghiệp là chủ thể chính sản xuất hàng hoá, tạo việc làm, đóng thuế.'),
    Q('Hộ gia đình trong nền kinh tế?', ['Vừa tiêu dùng vừa cung cấp lao động và tích luỹ','Chỉ tiêu dùng','Chỉ sản xuất','Không tham gia'], 0, 'Hộ gia đình cung cấp sức lao động, tiêu dùng và tích luỹ.'),
    Q('Chủ thể kinh tế nước ngoài bao gồm?', ['Doanh nghiệp FDI, người lao động nước ngoài','Chỉ khách du lịch','Chỉ sinh viên','Không tồn tại'], 0, 'DN FDI và nhà đầu tư nước ngoài cũng là chủ thể trong nền KT mở.'),
    Q('Vai trò của các chủ thể trong nền KT thị trường?', ['Tương tác lẫn nhau theo cung - cầu','Đối lập','Không liên quan','Tách biệt'], 0, 'Các chủ thể tương tác qua thị trường, theo nguyên tắc cung - cầu.'),
  ]),

  M(3, 'Thị trường', [
    Q('Thị trường là?', ['Nơi diễn ra trao đổi mua bán hàng hoá - dịch vụ','Chỉ chợ','Chỉ siêu thị','Chỉ online'], 0, 'Thị trường: nơi diễn ra hoạt động trao đổi mua bán (cả vật lý và ảo).'),
    Q('Các yếu tố cấu thành thị trường?', ['Người mua, người bán, hàng hoá, giá cả','Chỉ tiền','Chỉ hàng','Chỉ chợ'], 0, 'Yếu tố thị trường: chủ thể (mua, bán) + đối tượng (hàng hoá) + giá cả.'),
    Q('Thị trường có chức năng?', ['Thông tin, kích thích, điều tiết','Chỉ kiếm lời','Chỉ giải trí','Chỉ trang trí'], 0, '3 chức năng: thông tin, kích thích sản xuất, điều tiết cung cầu.'),
    Q('Phân loại thị trường theo đối tượng?', ['TT hàng hoá, TT dịch vụ, TT lao động, TT tài chính','Chỉ chợ','Chỉ siêu thị','Chỉ online'], 0, 'Phân loại theo đối tượng: hàng hoá, dịch vụ, lao động, tài chính, BĐS.'),
    Q('Thị trường lao động cung cấp?', ['Sức lao động','Hàng hoá','Tiền','Đất đai'], 0, 'TT lao động: nơi cung - cầu sức lao động gặp nhau.'),
    Q('Thị trường tài chính bao gồm?', ['Tiền tệ, chứng khoán, bảo hiểm','Chỉ tiền giấy','Chỉ vàng','Chỉ ngân hàng'], 0, 'TT tài chính: tiền tệ (ngân hàng), chứng khoán, bảo hiểm.'),
  ]),

  M(4, 'Cơ chế thị trường', [
    Q('Cơ chế thị trường vận hành dựa trên?', ['Cung - cầu - giá cả','Quyết định nhà nước','May rủi','Tình cảm'], 0, 'Cơ chế TT vận hành tự phát theo quy luật cung - cầu và giá cả.'),
    Q('Quy luật cung cầu chỉ ra?', ['Cung tăng giá giảm, cầu tăng giá tăng','Cung tăng giá tăng','Cầu giảm giá tăng','Không liên quan'], 0, 'Cung tăng (mọi yếu tố khác giữ nguyên) → giá giảm; cầu tăng → giá tăng.'),
    Q('Khi giá tăng cao, người sản xuất thường?', ['Tăng sản xuất','Giảm sản xuất','Ngừng','Đầu hàng'], 0, 'Giá tăng → lợi nhuận tăng → DN tăng sản xuất (đáp ứng quy luật cung).'),
    Q('Quy luật cạnh tranh trong nền kinh tế thị trường?', ['Thúc đẩy DN cải tiến, hạ giá, nâng chất lượng','Phá hoại','Vô ích','Chỉ gây thiệt hại'], 0, 'Cạnh tranh buộc DN cải tiến công nghệ, hạ giá, nâng chất lượng để tồn tại.'),
    Q('Ưu điểm của cơ chế thị trường?', ['Tự điều tiết, kích thích sáng tạo, hiệu quả','Công bằng tuyệt đối','Không có khuyết tật','Không có rủi ro'], 0, 'TT tự điều tiết, kích thích cạnh tranh, hiệu quả phân bổ nguồn lực.'),
    Q('Khuyết tật của cơ chế thị trường?', ['Phân hoá giàu nghèo, độc quyền, ô nhiễm','Không có khuyết tật','Quá công bằng','Tuyệt đối tốt'], 0, 'TT thuần có khuyết tật: bất bình đẳng, độc quyền, ngoại tác (ô nhiễm).'),
  ]),

  M(5, 'Ngân sách nhà nước', [
    Q('Ngân sách nhà nước là?', ['Toàn bộ thu - chi của Nhà nước trong 1 năm','Tiền của vua','Tiền cá nhân','Tiền doanh nghiệp'], 0, 'NSNN là toàn bộ thu, chi của Nhà nước được dự toán và thực hiện trong 1 năm.'),
    Q('NSNN có vai trò?', ['Đảm bảo hoạt động bộ máy NN và DV công','Chỉ trả lương','Chỉ chi quân sự','Chỉ chi nhà ở'], 0, 'NSNN duy trì bộ máy NN, đầu tư công, an sinh xã hội, quốc phòng - an ninh.'),
    Q('Nguồn thu chủ yếu của NSNN?', ['Thuế, phí, lệ phí','Vay nợ','Phát hành tiền','Tự sản xuất'], 0, 'Thuế là nguồn thu chính (>80%); phí và lệ phí bổ sung.'),
    Q('Chi NSNN bao gồm?', ['Chi đầu tư phát triển và chi thường xuyên','Chỉ chi lương','Chỉ chi đường','Chỉ chi quân sự'], 0, 'Chi NSNN: chi thường xuyên (lương, vận hành) + chi đầu tư phát triển.'),
    Q('Cơ quan nào quyết định dự toán NSNN?', ['Quốc hội','Chính phủ','Toà án','Mặt trận tổ quốc'], 0, 'Quốc hội quyết định dự toán và phê chuẩn quyết toán NSNN.'),
    Q('Bội chi NSNN nghĩa là?', ['Chi nhiều hơn thu','Thu nhiều hơn chi','Cân bằng','Không có gì'], 0, 'Bội chi: tổng chi > tổng thu, phần thiếu phải bù bằng vay nợ.'),
  ]),

  M(6, 'Thuế - Khái niệm và vai trò', [
    Q('Thuế là?', ['Khoản nộp bắt buộc của tổ chức, cá nhân cho NN','Quà tặng','Tiền vay','Phí dịch vụ'], 0, 'Thuế là khoản nộp bắt buộc, không hoàn trả trực tiếp, để Nhà nước chi tiêu công.'),
    Q('Vai trò của thuế?', ['Nguồn thu NSNN + điều tiết KT + công bằng xã hội','Chỉ tăng thu','Chỉ phạt','Chỉ trang trí'], 0, '3 vai trò: thu NSNN, điều tiết kinh tế, đảm bảo công bằng xã hội.'),
    Q('Đặc điểm của thuế?', ['Bắt buộc, không hoàn trả trực tiếp, theo luật','Tự nguyện','Được hoàn lại','Tuỳ ý'], 0, 'Thuế bắt buộc, không hoàn trả trực tiếp, ban hành theo luật.'),
    Q('Người nộp thuế là?', ['Tổ chức và cá nhân có nghĩa vụ theo luật','Chỉ doanh nghiệp','Chỉ cá nhân','Chỉ người nước ngoài'], 0, 'Mọi tổ chức và cá nhân có nghĩa vụ theo luật đều phải nộp thuế.'),
    Q('Trốn thuế là?', ['Hành vi vi phạm pháp luật','Hợp pháp','Tốt cho NN','Vô hại'], 0, 'Trốn thuế là hành vi vi phạm pháp luật, có thể bị xử lý hình sự.'),
    Q('Hệ thống thuế VN gồm?', ['Thuế trực thu và gián thu','Chỉ thu thuế','Chỉ thu phí','Không chia loại'], 0, 'Thuế trực thu (đánh trực tiếp lên thu nhập); gián thu (đánh qua hàng hoá - GTGT).'),
  ]),

  M(7, 'Thuế Giá trị gia tăng (GTGT)', [
    Q('Thuế GTGT (VAT) đánh vào?', ['Giá trị tăng thêm của hàng hoá - dịch vụ','Lợi nhuận DN','Lương người LĐ','Đất đai'], 0, 'VAT = Value Added Tax — đánh vào phần giá trị tăng thêm.'),
    Q('VAT là loại thuế?', ['Gián thu','Trực thu','Phí','Lệ phí'], 0, 'VAT là thuế gián thu — người tiêu dùng cuối chịu thuế.'),
    Q('Mức thuế suất VAT phổ biến ở VN?', ['10% (thông thường)','50%','100%','0%'], 0, 'Mức thuế GTGT thông thường ở VN là 10%; có 0%, 5% cho một số mặt hàng.'),
    Q('Hàng hoá nào thường được áp dụng VAT 0%?', ['Hàng xuất khẩu','Hàng cao cấp','Hàng độc quyền','Hàng tồn'], 0, 'Hàng xuất khẩu áp VAT 0% để khuyến khích xuất khẩu.'),
    Q('Người tiêu dùng cuối chịu thuế VAT vì?', ['VAT được tính vào giá bán','VAT do DN tự nộp','VAT chỉ DN chịu','Không ai chịu'], 0, 'VAT là gián thu — được cộng vào giá, người tiêu dùng cuối thực sự gánh thuế.'),
    Q('Khi mua hàng, bạn nên?', ['Lấy hoá đơn để minh bạch','Không cần hoá đơn','Trả tiền không cần phiếu','Trả thấp hơn'], 0, 'Hoá đơn giúp minh bạch giao dịch, là quyền lợi và nghĩa vụ của người tiêu dùng.'),
  ]),

  M(8, 'Thuế Thu nhập cá nhân (TNCN)', [
    Q('Thuế TNCN đánh vào?', ['Thu nhập của cá nhân','Lợi nhuận DN','Hàng hoá','Đất đai'], 0, 'Thuế TNCN đánh vào thu nhập từ tiền lương, kinh doanh, đầu tư của cá nhân.'),
    Q('Thuế TNCN là loại?', ['Trực thu','Gián thu','Phí','Lệ phí'], 0, 'TNCN là thuế trực thu — đánh trực tiếp lên thu nhập cá nhân.'),
    Q('Đối tượng nộp thuế TNCN?', ['Cá nhân có thu nhập chịu thuế','Mọi cá nhân','Chỉ doanh nhân','Chỉ người nước ngoài'], 0, 'Cá nhân có thu nhập trên ngưỡng giảm trừ gia cảnh phải nộp thuế TNCN.'),
    Q('Giảm trừ gia cảnh cho người nộp thuế VN hiện?', ['11 triệu/tháng + 4,4 triệu/người phụ thuộc','5 triệu','20 triệu','Không có'], 0, 'Mức giảm trừ: 11 triệu/tháng cho bản thân + 4,4 triệu/người phụ thuộc (2024).'),
    Q('Thuế TNCN sử dụng biểu thuế?', ['Luỹ tiến từng phần','Cố định','Tuỳ DN','Tuỳ tỉnh'], 0, 'TNCN luỹ tiến: thu nhập càng cao thuế suất bậc cao càng cao.'),
    Q('Hồ sơ quyết toán TNCN do?', ['Cá nhân hoặc DN trả thu nhập thực hiện','Chỉ cá nhân','Chỉ NN','Tự động'], 0, 'Cá nhân tự quyết toán hoặc DN trả thu nhập quyết toán hộ.'),
  ]),

  M(9, 'Tiền tệ và lạm phát', [
    Q('Tiền tệ là?', ['Vật ngang giá chung trong trao đổi','Đồ ăn','Quần áo','Xe hơi'], 0, 'Tiền là vật ngang giá chung, thước đo giá trị, phương tiện trao đổi.'),
    Q('Chức năng cơ bản của tiền?', ['Thước đo giá trị, phương tiện lưu thông và cất trữ','Chỉ làm đẹp','Chỉ trang trí','Vô dụng'], 0, '5 chức năng: thước đo giá trị, lưu thông, cất trữ, thanh toán, tiền tệ thế giới.'),
    Q('Lạm phát là?', ['Mức giá chung tăng kéo dài','Mức giá giảm','Cung tiền tăng','Cung tiền giảm'], 0, 'Lạm phát: mức giá chung tăng và sức mua tiền giảm trong thời gian dài.'),
    Q('Lạm phát thường gây?', ['Sức mua tiền giảm, người nghèo thiệt nhất','Giàu lên','Hoà bình','Sản xuất tốt'], 0, 'Lạm phát làm sức mua giảm, ảnh hưởng nặng tới người thu nhập cố định.'),
    Q('Cơ quan nào kiểm soát lạm phát ở VN?', ['Ngân hàng Nhà nước Việt Nam','Bộ Giáo dục','Bộ Y tế','Toà án'], 0, 'NHNN VN điều hành chính sách tiền tệ, kiểm soát lạm phát.'),
    Q('Tỉ lệ lạm phát mục tiêu của VN?', ['Khoảng 4%','20%','50%','0%'], 0, 'VN đặt mục tiêu kiểm soát lạm phát quanh 4% hàng năm.'),
  ]),

  M(10, 'Cung cầu và giá cả', [
    Q('Cầu là?', ['Số lượng hàng người mua muốn và có khả năng mua tại giá nhất định','Số người cần','Mong muốn','Nhu cầu chung'], 0, 'Cầu = muốn mua + có khả năng thanh toán tại mức giá nhất định.'),
    Q('Cung là?', ['Lượng hàng người bán muốn và có khả năng bán','Mong bán','Lượng tồn kho','Lượng nhập'], 0, 'Cung = sẵn lòng bán + có khả năng cung cấp.'),
    Q('Quy luật cầu: giá tăng thì?', ['Lượng cầu giảm','Lượng cầu tăng','Không đổi','Không xác định'], 0, 'Giá tăng → lượng cầu giảm (khi yếu tố khác không đổi).'),
    Q('Quy luật cung: giá tăng thì?', ['Lượng cung tăng','Lượng cung giảm','Không đổi','Tuỳ DN'], 0, 'Giá tăng → DN có lợi nhuận → tăng cung.'),
    Q('Khi cung = cầu, giá đạt?', ['Mức cân bằng','Mức cao nhất','Mức thấp nhất','Không xác định'], 0, 'Giá cân bằng (equilibrium) khi cung = cầu.'),
    Q('Khi cầu vượt cung, giá có xu hướng?', ['Tăng','Giảm','Không đổi','Sụp đổ'], 0, 'Cầu > cung → giá tăng để cân bằng thị trường.'),
  ]),

  M(11, 'Hợp tác và cạnh tranh', [
    Q('Cạnh tranh trong kinh tế là?', ['Đua tranh để giành lợi thế trong sản xuất, kinh doanh','Đối đầu','Tranh chấp','Đánh nhau'], 0, 'Cạnh tranh là đua tranh giữa các chủ thể KT để tối đa hoá lợi ích.'),
    Q('Cạnh tranh lành mạnh tuân thủ?', ['Pháp luật, đạo đức kinh doanh','Mọi cách','Lừa đảo','Chèn ép'], 0, 'Cạnh tranh lành mạnh: minh bạch, đúng luật, đạo đức.'),
    Q('Cạnh tranh không lành mạnh gồm?', ['Hàng giả, gian lận, lừa đảo','Sáng tạo','Giảm giá','Quảng cáo'], 0, 'Cạnh tranh không lành mạnh: hàng giả, gian lận, vu khống đối thủ.'),
    Q('Hợp tác kinh tế là?', ['Cùng làm việc để đạt lợi ích chung','Cạnh tranh','Đối đầu','Cách ly'], 0, 'Hợp tác: các chủ thể cùng làm việc, chia sẻ lợi ích để cùng phát triển.'),
    Q('Hợp tác giữa các DN có thể qua?', ['Hợp đồng, liên doanh, chuỗi cung ứng','Chỉ cạnh tranh','Không có','Tự phát'], 0, 'Hợp tác qua hợp đồng, liên doanh, chuỗi cung ứng, chia sẻ công nghệ.'),
    Q('Cạnh tranh và hợp tác có quan hệ?', ['Tồn tại song song, không loại trừ nhau','Đối lập','Không liên quan','Cùng phá hoại'], 0, 'Doanh nghiệp vừa cạnh tranh vừa hợp tác (coopetition) là chuyện thường.'),
  ]),

  M(12, 'Khái niệm sản xuất kinh doanh', [
    Q('Sản xuất kinh doanh là?', ['Tổ chức sản xuất và bán sản phẩm để thu lợi nhuận','Chỉ sản xuất','Chỉ bán','Trao đổi'], 0, 'SXKD: tổ chức sản xuất + bán sản phẩm → tạo doanh thu và lợi nhuận.'),
    Q('Doanh nghiệp tư nhân là?', ['DN do 1 cá nhân làm chủ và tự chịu trách nhiệm','Của NN','Tập thể','HTX'], 0, 'DNTN do 1 cá nhân làm chủ, chịu trách nhiệm vô hạn bằng toàn bộ tài sản.'),
    Q('Công ty TNHH là?', ['DN có 1-50 thành viên góp vốn, chịu TN trong phạm vi vốn','DN cá nhân','DN nhà nước','DN nước ngoài'], 0, 'TNHH = trách nhiệm hữu hạn — chỉ chịu trách nhiệm trong phạm vi vốn góp.'),
    Q('Công ty cổ phần có?', ['Vốn chia thành cổ phần, có thể niêm yết','Vốn của 1 người','Vốn của NN','Vốn không chia'], 0, 'CTCP vốn chia thành cổ phần, được phát hành cổ phiếu công khai.'),
    Q('Hợp tác xã là?', ['Tổ chức kinh tế tập thể của xã viên','DN tư nhân','DN nhà nước','DN nước ngoài'], 0, 'HTX là tổ chức kinh tế tập thể do các xã viên tự nguyện thành lập.'),
    Q('Lợi nhuận của DN =?', ['Doanh thu - chi phí','Doanh thu','Chi phí','Vốn'], 0, 'Lợi nhuận = Doanh thu - Tổng chi phí (gồm chi phí cố định + biến đổi).'),
  ]),

  M(13, 'Văn hoá tiêu dùng', [
    Q('Văn hoá tiêu dùng là?', ['Cách thức và tiêu chí lựa chọn tiêu dùng có chất lượng','Mua bừa','Tiết kiệm tuyệt đối','Lãng phí'], 0, 'VHTD: cách tiêu dùng văn minh, có ý thức, lựa chọn sản phẩm chất lượng và phù hợp.'),
    Q('Tiêu dùng thông minh là?', ['Có kế hoạch, kiểm tra giá - chất lượng','Mua tuỳ hứng','Mua đắt','Mua sỉ'], 0, 'Tiêu dùng thông minh: lập kế hoạch, so sánh giá, đánh giá chất lượng.'),
    Q('Quyền của người tiêu dùng?', ['Được an toàn, thông tin, lựa chọn, khiếu nại','Chỉ mua','Chỉ trả tiền','Không có quyền'], 0, '8 quyền: an toàn, thông tin, lựa chọn, lắng nghe, đại diện, đào tạo, môi trường lành mạnh, khiếu nại.'),
    Q('Khi mua hàng kém chất lượng, người tiêu dùng nên?', ['Khiếu nại nơi bán hoặc cơ quan bảo vệ NTD','Im lặng','Bỏ luôn','Phá hoại'], 0, 'Khiếu nại với người bán, hội bảo vệ NTD hoặc cơ quan quản lý thị trường.'),
    Q('Tiêu dùng bền vững là?', ['Tiết kiệm + bảo vệ môi trường','Mua nhiều','Mua đắt','Lãng phí'], 0, 'Tiêu dùng bền vững: tiết kiệm, ưu tiên sản phẩm thân thiện môi trường.'),
    Q('Hàng giả, hàng nhái gây?', ['Thiệt hại NTD và DN làm thật','Có lợi cho NTD','Có lợi cho XH','Không vấn đề'], 0, 'Hàng giả gây thiệt hại NTD, DN chính hãng, sức khoẻ và kinh tế.'),
  ]),

  M(14, 'Khái niệm hệ thống chính trị Việt Nam', [
    Q('Hệ thống chính trị VN gồm?', ['Đảng Cộng sản, Nhà nước, MTTQ và các đoàn thể','Chỉ Nhà nước','Chỉ Đảng','Toà án'], 0, 'HTCT VN gồm: Đảng, Nhà nước, MTTQ và các tổ chức chính trị - xã hội.'),
    Q('Đảng Cộng sản Việt Nam giữ vai trò?', ['Lãnh đạo Nhà nước và xã hội','Quản lý kinh tế','Xét xử','Lập pháp'], 0, 'ĐCSVN lãnh đạo NN và XH theo Hiến pháp 2013 (Điều 4).'),
    Q('Nhà nước CHXHCN Việt Nam là?', ['Nhà nước của dân, do dân, vì dân','Của vua','Của Đảng','Của 1 nhóm'], 0, 'Hiến pháp 2013: NN VN là nhà nước của Nhân dân, do Nhân dân, vì Nhân dân.'),
    Q('Mặt trận Tổ quốc VN có vai trò?', ['Đại diện và bảo vệ quyền, lợi ích của các tầng lớp Nhân dân','Lập pháp','Hành pháp','Tư pháp'], 0, 'MTTQ tập hợp khối đại đoàn kết toàn dân, đại diện và bảo vệ quyền của Nhân dân.'),
    Q('Các đoàn thể chính trị - xã hội gồm?', ['Đoàn TNCS, Hội LHPN, Hội Nông dân, Hội Cựu chiến binh, Công đoàn','Chỉ Đoàn','Chỉ Hội PN','Chỉ Công đoàn'], 0, '5 tổ chức chính trị - xã hội thành viên MTTQ.'),
    Q('Nguyên tắc hoạt động của HTCT VN?', ['Tập trung dân chủ','Chia 3 quyền độc lập','Chuyên chế','Quân chủ'], 0, 'HTCT VN hoạt động theo nguyên tắc tập trung dân chủ.'),
  ]),

  M(15, 'Cấu trúc Nhà nước CHXHCN Việt Nam', [
    Q('Quốc hội là?', ['Cơ quan quyền lực Nhà nước cao nhất','Hành pháp','Tư pháp','MTTQ'], 0, 'Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực NN cao nhất.'),
    Q('Quốc hội VN có nhiệm kỳ?', ['5 năm','3 năm','4 năm','10 năm'], 0, 'Quốc hội VN có nhiệm kỳ 5 năm.'),
    Q('Chủ tịch nước là?', ['Người đứng đầu Nhà nước, thay mặt Nhà nước về đối nội đối ngoại','Đứng đầu Đảng','Đứng đầu CP','Đứng đầu Toà'], 0, 'CTN là người đứng đầu NN, thay mặt NN về đối nội, đối ngoại.'),
    Q('Chính phủ là?', ['Cơ quan hành chính nhà nước cao nhất','Lập pháp','Tư pháp','MTTQ'], 0, 'Chính phủ là cơ quan hành chính NN cao nhất, thực hiện quyền hành pháp.'),
    Q('Thủ tướng Chính phủ do?', ['Quốc hội bầu','Chủ tịch nước bầu','Đảng bổ nhiệm','Toàn dân bầu trực tiếp'], 0, 'Quốc hội bầu Thủ tướng theo đề cử của Chủ tịch nước.'),
    Q('Toà án nhân dân tối cao là?', ['Cơ quan xét xử cao nhất','Lập pháp','Hành pháp','MTTQ'], 0, 'TANDTC là cơ quan xét xử cao nhất, thực hiện quyền tư pháp.'),
  ]),

  M(16, 'Hệ thống pháp luật Việt Nam', [
    Q('Pháp luật là?', ['Hệ thống quy tắc xử sự bắt buộc do NN ban hành','Đạo đức','Phong tục','Tôn giáo'], 0, 'Pháp luật: hệ thống quy tắc xử sự chung, bắt buộc, được NN bảo đảm thực hiện.'),
    Q('Đặc điểm của pháp luật?', ['Tính quy phạm phổ biến, xác định chặt chẽ, bắt buộc','Tự nguyện','Linh hoạt','Tuỳ nghi'], 0, 'PL có 3 đặc điểm: quy phạm phổ biến, xác định chặt chẽ về hình thức, tính bắt buộc.'),
    Q('Vai trò của pháp luật?', ['Phương tiện quản lý XH + bảo vệ quyền công dân','Chỉ trừng phạt','Chỉ thu thuế','Vô dụng'], 0, 'PL quản lý XH, điều chỉnh quan hệ, bảo vệ quyền lợi hợp pháp.'),
    Q('Pháp luật khác đạo đức ở?', ['Bắt buộc và có chế tài','Không khác','Đạo đức bắt buộc hơn','Đạo đức có chế tài'], 0, 'PL có tính bắt buộc và chế tài cưỡng chế; đạo đức dựa trên tự giác.'),
    Q('Nguồn quan trọng nhất của PL VN?', ['Văn bản quy phạm pháp luật','Tập quán','Án lệ','Lời nói'], 0, 'VN theo hệ thống civil law, nguồn chính là VBQPPL (luật, nghị định, thông tư).'),
    Q('Văn bản có giá trị pháp lý cao nhất là?', ['Hiến pháp','Bộ luật','Nghị định','Thông tư'], 0, 'Hiến pháp là văn bản pháp lý cao nhất, mọi văn bản khác phải tuân thủ.'),
  ]),

  M(17, 'Thực hiện và bảo vệ pháp luật', [
    Q('Thực hiện pháp luật gồm các hình thức?', ['Tuân thủ, thi hành, sử dụng, áp dụng','Chỉ tuân thủ','Chỉ áp dụng','Chỉ phạt'], 0, '4 hình thức thực hiện PL: tuân thủ, thi hành, sử dụng, áp dụng.'),
    Q('Tuân thủ pháp luật là?', ['Không làm điều PL cấm','Làm điều PL yêu cầu','Sử dụng quyền','Áp dụng pháp luật'], 0, 'Tuân thủ: không thực hiện hành vi mà PL cấm.'),
    Q('Vi phạm pháp luật là?', ['Hành vi trái pháp luật, có lỗi, xâm hại quan hệ XH','Hành vi vô tình','Suy nghĩ','Lời nói riêng'], 0, 'VPPL = hành vi trái PL + có lỗi + xâm hại quan hệ XH được PL bảo vệ.'),
    Q('Trách nhiệm pháp lý gồm?', ['Hình sự, hành chính, dân sự, kỷ luật','Chỉ hình sự','Chỉ hành chính','Chỉ dân sự'], 0, '4 loại trách nhiệm pháp lý cơ bản theo loại quan hệ vi phạm.'),
    Q('Tuổi chịu trách nhiệm hình sự đầy đủ?', ['16 tuổi trở lên','14 tuổi','18 tuổi','21 tuổi'], 0, 'Theo BLHS: từ đủ 16 tuổi chịu TNHS đầy đủ; 14-16 chịu một số loại tội nặng.'),
    Q('Học sinh vi phạm PL bị?', ['Xử lý theo quy định, tuỳ tuổi và mức độ','Bỏ qua','Phạt nặng','Tha bổng'], 0, 'Học sinh vi phạm vẫn bị xử lý PL, có thể áp dụng giáo dục thay thế cho người chưa thành niên.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('3 chủ thể chính của nền kinh tế?', ['Nhà nước, DN, hộ gia đình','Chỉ DN','Chỉ NN','Chỉ HGĐ'], 0, '3 chủ thể: NN, DN, hộ gia đình.'),
    Q('Cơ chế thị trường vận hành theo?', ['Cung - cầu - giá cả','Mệnh lệnh','May rủi','Phong tục'], 0, 'TT vận hành theo cung - cầu - giá cả.'),
    Q('Thuế VAT là loại?', ['Gián thu','Trực thu','Phí','Lệ phí'], 0, 'VAT là thuế gián thu.'),
    Q('Thuế TNCN đánh vào?', ['Thu nhập cá nhân','Lợi nhuận DN','Hàng hoá','Đất đai'], 0, 'TNCN đánh vào thu nhập cá nhân.'),
    Q('Quốc hội VN nhiệm kỳ?', ['5 năm','3 năm','4 năm','10 năm'], 0, 'Quốc hội VN nhiệm kỳ 5 năm.'),
    Q('Hiến pháp là?', ['Văn bản pháp lý cao nhất','Bộ luật','Nghị định','Thông tư'], 0, 'Hiến pháp là văn bản cao nhất.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Hiến pháp - Khái quát', [
    Q('Hiến pháp là?', ['Luật cơ bản của Nhà nước, có hiệu lực pháp lý cao nhất','Luật thông thường','Nghị định','Thông tư'], 0, 'Hiến pháp là luật cơ bản, mọi văn bản khác phải tuân thủ.'),
    Q('Hiến pháp hiện hành của VN là?', ['Hiến pháp 2013','Hiến pháp 1992','Hiến pháp 1980','Hiến pháp 1946'], 0, 'Hiến pháp 2013 được Quốc hội thông qua ngày 28/11/2013, hiệu lực 1/1/2014.'),
    Q('VN đã có mấy bản Hiến pháp?', ['5 (1946, 1959, 1980, 1992, 2013)','3','7','10'], 0, '5 bản Hiến pháp: 1946, 1959, 1980, 1992 (sửa 2001), 2013.'),
    Q('Cơ quan có quyền sửa đổi Hiến pháp?', ['Quốc hội','Chính phủ','Toà án','MTTQ'], 0, 'Quốc hội có thẩm quyền lập hiến và sửa đổi Hiến pháp.'),
    Q('Để Hiến pháp được thông qua cần?', ['Ít nhất 2/3 tổng số ĐBQH biểu quyết tán thành','Quá bán','3/4','100%'], 0, 'Hiến pháp được thông qua khi ít nhất 2/3 tổng số ĐBQH tán thành.'),
    Q('Hiến pháp 2013 có bao nhiêu chương?', ['11 chương','5','15','20'], 0, 'Hiến pháp 2013 có 11 chương và 120 điều.'),
  ]),

  M(20, 'Nội dung Hiến pháp 2013 - Chế độ chính trị', [
    Q('Điều 2 Hiến pháp 2013 khẳng định?', ['Nhà nước CHXHCN VN là Nhà nước pháp quyền của Nhân dân','Nhà nước quân chủ','NN cộng hoà','NN liên bang'], 0, 'Điều 2: NN VN là NN pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.'),
    Q('Quyền lực NN VN là?', ['Thống nhất, có phân công và phối hợp giữa các cơ quan','Phân lập tuyệt đối','Tập trung 1 người','Tách rời'], 0, 'Quyền lực thống nhất, có phân công - phối hợp giữa lập pháp, hành pháp, tư pháp.'),
    Q('Đảng CSVN là?', ['Lực lượng lãnh đạo NN và XH','Cơ quan hành pháp','Cơ quan tư pháp','Tổ chức xã hội'], 0, 'Điều 4 Hiến pháp 2013: ĐCSVN là lực lượng lãnh đạo NN và xã hội.'),
    Q('MTTQ VN là?', ['Cơ sở chính trị của chính quyền nhân dân','Cơ quan NN','Tổ chức cá nhân','DN'], 0, 'Điều 9: MTTQ là cơ sở chính trị của chính quyền nhân dân.'),
    Q('Mọi quyền lực NN VN thuộc về?', ['Nhân dân','Vua','Đảng','Quân đội'], 0, 'Quyền lực NN thuộc về Nhân dân, do Nhân dân uỷ quyền.'),
    Q('Quốc kỳ VN có?', ['Nền đỏ, sao vàng 5 cánh','Nền xanh','3 màu','Nền trắng'], 0, 'Quốc kỳ VN: nền đỏ, ở giữa có ngôi sao vàng 5 cánh.'),
  ]),

  M(21, 'Quyền và nghĩa vụ cơ bản của công dân', [
    Q('Quyền cơ bản của công dân ghi trong?', ['Hiến pháp','Bộ luật Lao động','Bộ luật Dân sự','Luật Hình sự'], 0, 'Hiến pháp quy định các quyền và nghĩa vụ cơ bản của công dân.'),
    Q('Công dân VN có quyền?', ['Bầu cử, ứng cử từ đủ 18/21 tuổi','Bầu cử từ 16','Ứng cử từ 16','Không có quyền'], 0, 'Công dân từ đủ 18 tuổi có quyền bầu cử, từ đủ 21 tuổi có quyền ứng cử.'),
    Q('Quyền tự do ngôn luận là?', ['Quyền bày tỏ ý kiến trong khuôn khổ PL','Nói gì cũng được','Không bị giới hạn','Không có'], 0, 'Quyền tự do ngôn luận trong khuôn khổ PL, không xâm hại lợi ích NN và người khác.'),
    Q('Công dân có nghĩa vụ?', ['Tuân theo HP và PL, bảo vệ Tổ quốc, đóng thuế','Chỉ thuế','Chỉ quân sự','Không có'], 0, 'Nghĩa vụ: tuân thủ PL, bảo vệ Tổ quốc, thi hành nghĩa vụ quân sự, đóng thuế.'),
    Q('Nghĩa vụ quân sự ở VN với nam giới?', ['Từ đủ 18 đến hết 25 tuổi (có thể tới 27 với người có CĐ-ĐH)','Từ 16','Từ 30','Không bắt buộc'], 0, 'Luật NVQS: nam công dân từ đủ 18 đến hết 25 tuổi.'),
    Q('Quyền học tập của công dân được?', ['Bảo đảm bởi NN','Tự túc','Trả phí','Không có'], 0, 'Học tập là quyền và nghĩa vụ; NN đảm bảo giáo dục phổ cập.'),
  ]),

  M(22, 'Quyền tự do dân chủ của công dân', [
    Q('Quyền tự do tín ngưỡng, tôn giáo nghĩa là?', ['Tin hoặc không tin theo tôn giáo nào','Bắt buộc 1 tôn giáo','Cấm tôn giáo','Chỉ Phật giáo'], 0, 'CD có quyền tự do tín ngưỡng tôn giáo, không ai bị phân biệt vì lý do này.'),
    Q('Quyền tự do đi lại và cư trú?', ['Đi lại và chọn nơi cư trú trong nước','Đi đâu cũng được','Bị cấm','Chỉ trong tỉnh'], 0, 'CD có quyền tự do đi lại và cư trú trong nước, ra nước ngoài theo PL.'),
    Q('Quyền bất khả xâm phạm về thân thể là?', ['Không ai bị bắt giam tuỳ tiện','Có thể bắt bất kỳ ai','Chỉ với phụ nữ','Không có quyền này'], 0, 'Không ai bị bắt giam khi không có quyết định của TA hoặc VKS, trừ trường hợp phạm tội quả tang.'),
    Q('Bí mật thư tín, điện thoại được?', ['Bảo vệ; không ai được xâm phạm trái PL','Mở thoải mái','Chỉ NN được mở','Tự do truy cập'], 0, 'Bí mật thư tín, điện thoại, viễn thông được PL bảo vệ.'),
    Q('Quyền khiếu nại, tố cáo là?', ['Quyền cơ bản của công dân','Chỉ cán bộ có','Chỉ doanh nhân','Không có'], 0, 'Mọi công dân có quyền khiếu nại quyết định hành chính hoặc tố cáo hành vi vi phạm.'),
    Q('Quyền tham gia quản lý NN và XH thể hiện qua?', ['Bầu cử, ứng cử, kiến nghị, giám sát','Chỉ bầu cử','Chỉ ứng cử','Im lặng'], 0, 'Quyền tham gia: bầu cử, ứng cử, đóng góp ý kiến, giám sát, kiến nghị.'),
  ]),

  M(23, 'Quyền và nghĩa vụ về kinh tế của công dân', [
    Q('Quyền sở hữu hợp pháp của công dân?', ['Được PL bảo vệ','Bị cấm','Tự do tuỳ ý','Chỉ với NN'], 0, 'Quyền sở hữu hợp pháp về thu nhập, tài sản được PL bảo vệ.'),
    Q('Công dân có quyền tự do kinh doanh?', ['Trong lĩnh vực mà PL không cấm','Mọi lĩnh vực','Chỉ một số','Không có'], 0, 'Tự do kinh doanh trong các ngành nghề PL không cấm.'),
    Q('Quyền tự do hợp đồng nghĩa là?', ['Tự nguyện giao kết HĐ không trái PL','Tự ý','Bị ép buộc','Không có'], 0, 'Các bên tự nguyện giao kết hợp đồng, miễn không trái PL và đạo đức XH.'),
    Q('Khi xảy ra tranh chấp kinh tế, công dân?', ['Có quyền khởi kiện ra Toà án','Tự xử lý','Chịu thua','Phá hoại'], 0, 'Tranh chấp dân sự - kinh tế giải quyết qua thương lượng, hoà giải hoặc khởi kiện.'),
    Q('Nghĩa vụ thuế của công dân?', ['Nộp đầy đủ, kịp thời theo PL','Có thì nộp','Không cần','Tự quyết'], 0, 'Nghĩa vụ nộp thuế đầy đủ và kịp thời theo quy định PL.'),
    Q('Cạnh tranh kinh tế lành mạnh được PL?', ['Khuyến khích, bảo vệ','Cấm','Hạn chế','Không quan tâm'], 0, 'PL khuyến khích cạnh tranh lành mạnh, chống độc quyền và cạnh tranh không lành mạnh.'),
  ]),

  M(24, 'Bộ luật Dân sự', [
    Q('Bộ luật Dân sự điều chỉnh?', ['Quan hệ tài sản và quan hệ nhân thân','Quan hệ hình sự','Quan hệ hành chính','Quan hệ lao động'], 0, 'BLDS điều chỉnh quan hệ tài sản, quan hệ nhân thân giữa các cá nhân, pháp nhân.'),
    Q('Hợp đồng dân sự cần đảm bảo?', ['Tự nguyện, không trái PL và đạo đức','Bị ép buộc','Trái PL cũng được','Không cần điều kiện'], 0, 'Hợp đồng dân sự phải tự nguyện, không trái PL và đạo đức XH.'),
    Q('Thừa kế theo PL khi?', ['Không có di chúc hoặc di chúc không hợp pháp','Luôn luôn','Khi có di chúc','Không bao giờ'], 0, 'Thừa kế theo PL khi không có di chúc hoặc di chúc không có hiệu lực.'),
    Q('Quyền nhân thân là?', ['Quyền gắn với cá nhân không thể chuyển giao','Tài sản','Chứng khoán','Đất đai'], 0, 'Quyền nhân thân (tên, danh dự, hình ảnh...) gắn với cá nhân, không chuyển nhượng được.'),
    Q('Người chưa đủ 18 tuổi giao dịch dân sự?', ['Có giới hạn, cần người đại diện hợp pháp','Tự do','Không được','Bị cấm tuyệt đối'], 0, 'Người chưa thành niên cần người đại diện hoặc giám hộ cho các giao dịch lớn.'),
    Q('Bồi thường thiệt hại trong dân sự dựa trên?', ['Lỗi và thiệt hại thực tế','May rủi','Tài sản','Tuỳ ý'], 0, 'Trách nhiệm bồi thường = thiệt hại thực tế do hành vi có lỗi gây ra.'),
  ]),

  M(25, 'Luật Hình sự', [
    Q('Bộ luật Hình sự VN hiện hành?', ['BLHS 2015 (sửa đổi 2017)','BLHS 1985','BLHS 1999','BLHS 2010'], 0, 'BLHS 2015 sửa đổi 2017 đang có hiệu lực.'),
    Q('Tội phạm là?', ['Hành vi nguy hiểm cho XH do người có năng lực TNHS thực hiện','Hành vi nhẹ','Suy nghĩ','Lời nói'], 0, 'Tội phạm: hành vi nguy hiểm cho XH, có lỗi, do người có năng lực TNHS thực hiện.'),
    Q('Tuổi chịu trách nhiệm hình sự đầy đủ?', ['Đủ 16 tuổi','14 tuổi','18 tuổi','21 tuổi'], 0, 'Người đủ 16 tuổi chịu TNHS đầy đủ; 14-16 chịu một số tội nặng.'),
    Q('Hình phạt chính trong BLHS gồm?', ['Cảnh cáo, phạt tiền, tù có thời hạn, tù chung thân, tử hình','Chỉ tù','Chỉ phạt tiền','Chỉ tử hình'], 0, '7 hình phạt chính: cảnh cáo, phạt tiền, cải tạo, trục xuất, tù có thời hạn, chung thân, tử hình.'),
    Q('Người bị tạm giam có quyền?', ['Bào chữa, gặp luật sư','Không có quyền','Bị bóc lột','Bị tra tấn'], 0, 'Người bị tạm giam có quyền bào chữa, gặp luật sư, không bị tra tấn.'),
    Q('Toà án xét xử công khai khi?', ['Phần lớn vụ án (trừ một số vụ đặc biệt)','Tất cả','Không vụ nào','Tuỳ thẩm phán'], 0, 'Nguyên tắc xét xử công khai trừ vụ liên quan bí mật NN, đời tư cá nhân.'),
  ]),

  M(26, 'Luật Hành chính', [
    Q('Vi phạm hành chính là?', ['Hành vi trái PL nhưng chưa đến mức tội phạm','Hành vi nặng','Hành vi nhẹ','Suy nghĩ'], 0, 'VPHC: hành vi trái PL có lỗi nhưng chưa đến mức truy cứu TNHS.'),
    Q('Hình thức xử phạt VPHC chính?', ['Cảnh cáo, phạt tiền','Phạt tù','Tử hình','Khai trừ'], 0, '2 hình thức chính: cảnh cáo và phạt tiền.'),
    Q('Người vi phạm giao thông bị?', ['Xử lý hành chính (phạt tiền, tước GPLX)','Tù ngay','Tử hình','Không bị gì'], 0, 'Vi phạm giao thông thông thường bị xử phạt hành chính.'),
    Q('Cơ quan có thẩm quyền xử phạt VPHC?', ['Công an, UBND, các cơ quan chuyên ngành','Toà án','Quốc hội','MTTQ'], 0, 'CA, UBND các cấp, các cơ quan chuyên ngành (thuế, môi trường...) có thẩm quyền.'),
    Q('Người chưa đủ 14 tuổi vi phạm hành chính?', ['Không bị xử phạt VPHC, áp dụng biện pháp khác','Bị phạt nặng','Bị tù','Bị cảnh cáo'], 0, 'Dưới 14 tuổi không xử phạt VPHC, có thể áp dụng biện pháp giáo dục.'),
    Q('Cưỡng chế thi hành quyết định xử phạt khi?', ['Người vi phạm không tự nguyện chấp hành','Tự nguyện','Đã chấp hành','Có khiếu nại'], 0, 'Cưỡng chế khi người vi phạm không tự nguyện chấp hành quyết định xử phạt.'),
  ]),

  M(27, 'Luật Lao động', [
    Q('Bộ luật Lao động hiện hành?', ['BLLĐ 2019','BLLĐ 1995','BLLĐ 2012','BLLĐ 2007'], 0, 'BLLĐ 2019 có hiệu lực từ 1/1/2021.'),
    Q('Tuổi tối thiểu giao kết hợp đồng lao động?', ['15 tuổi','13','18','20'], 0, 'Người từ đủ 15 tuổi có thể giao kết HĐLĐ (có một số điều kiện cho 13-15).'),
    Q('Người sử dụng lao động phải đảm bảo?', ['Tiền lương tối thiểu, bảo hiểm xã hội, an toàn LĐ','Chỉ lương','Chỉ BHXH','Tuỳ ý'], 0, 'NSDLĐ phải đảm bảo lương tối thiểu, BHXH, an toàn vệ sinh lao động.'),
    Q('Lương tối thiểu vùng do?', ['Chính phủ quy định','DN tự quyết','NLĐ tự quyết','Toà án'], 0, 'Chính phủ ban hành mức lương tối thiểu vùng hàng năm.'),
    Q('Thời giờ làm việc bình thường?', ['Không quá 8h/ngày, 48h/tuần','12h/ngày','60h/tuần','Tuỳ ý'], 0, 'Tối đa 8h/ngày, 48h/tuần với LĐ bình thường; khuyến khích 40h/tuần.'),
    Q('Công đoàn cơ sở có vai trò?', ['Bảo vệ quyền lợi NLĐ','Chỉ tổ chức lễ hội','Chỉ thu phí','Vô tác dụng'], 0, 'Công đoàn cơ sở đại diện và bảo vệ quyền lợi hợp pháp của NLĐ.'),
  ]),

  M(28, 'Luật Hôn nhân và Gia đình', [
    Q('Luật HNGĐ hiện hành?', ['Luật HNGĐ 2014','1986','2000','2010'], 0, 'Luật HNGĐ 2014 có hiệu lực từ 1/1/2015.'),
    Q('Tuổi kết hôn ở VN?', ['Nam ≥20, nữ ≥18','Nam ≥18, nữ ≥18','Nam ≥21, nữ ≥20','Tuỳ ý'], 0, 'Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi mới được kết hôn.'),
    Q('Hôn nhân ở VN dựa trên nguyên tắc?', ['Tự nguyện, một vợ một chồng, bình đẳng','Sắp đặt','Đa thê','Phong tục'], 0, 'Hôn nhân: tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng.'),
    Q('Quan hệ tài sản trong gia đình?', ['Tài sản chung và tài sản riêng được PL công nhận','Toàn chung','Toàn riêng','Tuỳ vợ chồng'], 0, 'PL công nhận tài sản chung của vợ chồng và tài sản riêng của mỗi bên.'),
    Q('Khi ly hôn, tài sản chung được?', ['Chia theo nguyên tắc bình đẳng, có xét đến công sức','Chia đôi','Cho 1 bên','Sung công'], 0, 'Tài sản chung chia theo bình đẳng, có xét công sức đóng góp, hoàn cảnh.'),
    Q('Cha mẹ có nghĩa vụ?', ['Nuôi dạy con cái đến trưởng thành','Chỉ đến 5 tuổi','Chỉ đến 18 tuổi','Không có'], 0, 'Cha mẹ có nghĩa vụ nuôi dạy con đến tuổi trưởng thành, không phân biệt giới tính.'),
  ]),

  M(29, 'Quyền sở hữu trí tuệ', [
    Q('Sở hữu trí tuệ bao gồm?', ['Quyền tác giả, sáng chế, nhãn hiệu, kiểu dáng','Chỉ phát minh','Chỉ thương hiệu','Đất đai'], 0, 'SHTT: quyền tác giả, quyền liên quan, quyền sở hữu công nghiệp (sáng chế, nhãn hiệu, kiểu dáng).'),
    Q('Quyền tác giả phát sinh khi?', ['Tác phẩm được tạo ra dưới hình thức vật chất','Đăng ký','Công bố','Bán đi'], 0, 'Quyền tác giả phát sinh từ thời điểm tác phẩm được sáng tạo và thể hiện dưới hình thức vật chất.'),
    Q('Vi phạm bản quyền là?', ['Sao chép, sử dụng không xin phép, không trả tiền','Mua hợp lệ','Tự sáng tạo','Trích dẫn có ghi nguồn'], 0, 'Vi phạm bản quyền: sao chép, sử dụng tác phẩm không xin phép, không trả thù lao.'),
    Q('Sáng chế cần đáp ứng?', ['Tính mới, sáng tạo, khả năng áp dụng công nghiệp','Đẹp','Đắt','Lớn'], 0, '3 điều kiện sáng chế: tính mới, sáng tạo, có thể áp dụng công nghiệp.'),
    Q('Nhãn hiệu được bảo hộ khi?', ['Đăng ký với cơ quan SHTT (NOIP)','Tự nghĩ ra','In ra','Sử dụng'], 0, 'Nhãn hiệu được bảo hộ khi đăng ký với Cục SHTT.'),
    Q('Học sinh có thể làm gì để tôn trọng SHTT?', ['Trích dẫn nguồn, không tải lậu','Sao chép tự do','Tải nhiều','Bán lại'], 0, 'Học sinh: trích dẫn nguồn khi tham khảo, không sao chép và tải lậu.'),
  ]),

  M(30, 'Luật An ninh mạng và bảo vệ dữ liệu cá nhân', [
    Q('Luật An ninh mạng VN có hiệu lực?', ['Từ 1/1/2019','2015','2020','2010'], 0, 'Luật ANM được Quốc hội thông qua 12/6/2018, hiệu lực 1/1/2019.'),
    Q('Hành vi bị cấm trên không gian mạng?', ['Tuyên truyền chống NN, lừa đảo, xâm phạm quyền riêng tư','Đăng ảnh','Học online','Họp trực tuyến'], 0, 'Cấm: tuyên truyền chống NN, lừa đảo, xâm phạm an toàn thông tin cá nhân.'),
    Q('Dữ liệu cá nhân là?', ['Thông tin nhận dạng được cá nhân','Tin tức','Sách','Phim'], 0, 'Dữ liệu cá nhân: tên, địa chỉ, sinh trắc học... nhận dạng được cá nhân.'),
    Q('Khi đăng tin sai sự thật, người vi phạm bị?', ['Xử phạt hành chính hoặc hình sự tuỳ mức độ','Khen thưởng','Bỏ qua','Không gì'], 0, 'Tin sai sự thật có thể bị phạt VPHC hoặc xử lý hình sự nếu nghiêm trọng.'),
    Q('Mật khẩu mạnh nên?', ['Dài, có chữ - số - ký tự đặc biệt','Ngày sinh','Tên mình','Đơn giản'], 0, 'Mật khẩu mạnh: dài ≥8 ký tự, kết hợp chữ hoa, thường, số, ký tự đặc biệt.'),
    Q('Khi nhận tin nhắn lừa đảo, bạn nên?', ['Không cung cấp thông tin, báo cáo','Chuyển tiền','Cung cấp OTP','Tin tưởng'], 0, 'Không cung cấp thông tin cá nhân, OTP; báo cáo cơ quan chức năng.'),
  ]),

  M(31, 'Phòng chống tham nhũng', [
    Q('Tham nhũng là?', ['Lợi dụng chức vụ để trục lợi cá nhân','Hành vi lương thiện','Cạnh tranh','Cải cách'], 0, 'Tham nhũng: lợi dụng chức vụ, quyền hạn để trục lợi cá nhân.'),
    Q('Luật Phòng chống tham nhũng hiện hành?', ['Luật PCTN 2018','2005','2012','2020'], 0, 'Luật PCTN 2018 có hiệu lực từ 1/7/2019.'),
    Q('Tài sản kê khai bắt buộc với?', ['Cán bộ, công chức có chức vụ','Toàn dân','DN tư nhân','Học sinh'], 0, 'Cán bộ, công chức có chức vụ phải kê khai tài sản, thu nhập.'),
    Q('Hành vi tham nhũng bị?', ['Xử lý hình sự, mất chức, kỷ luật','Khen','Bỏ qua','Không gì'], 0, 'Tham nhũng bị xử lý hình sự, kỷ luật, bồi hoàn tài sản.'),
    Q('Vai trò của Nhân dân trong PCTN?', ['Giám sát, tố giác','Im lặng','Tiếp tay','Bao che'], 0, 'Nhân dân có quyền và trách nhiệm giám sát, tố giác hành vi tham nhũng.'),
    Q('Hành vi nhận hối lộ bị xử?', ['Hình sự, có thể tù chung thân hoặc tử hình','Phạt nhẹ','Cảnh cáo','Bỏ qua'], 0, 'BLHS quy định tội nhận hối lộ với khung hình phạt nặng, có thể tới tử hình.'),
  ]),

  M(32, 'Bảo vệ Tổ quốc - Quốc phòng và An ninh', [
    Q('Bảo vệ Tổ quốc là?', ['Quyền và nghĩa vụ thiêng liêng của công dân','Chỉ quân đội','Chỉ NN','Tuỳ ý'], 0, 'Hiến pháp: bảo vệ Tổ quốc là quyền và nghĩa vụ thiêng liêng, cao quý.'),
    Q('Nghĩa vụ quân sự VN với nam giới?', ['Từ đủ 18 đến hết 25 tuổi (tới 27 với CĐ-ĐH)','Từ 16','Từ 30','Không bắt buộc'], 0, 'Luật NVQS: nam công dân từ đủ 18 đến hết 25 tuổi (gia hạn tới 27 với CĐ-ĐH).'),
    Q('Lực lượng vũ trang VN gồm?', ['Quân đội nhân dân, Công an nhân dân, Dân quân tự vệ','Chỉ quân đội','Chỉ công an','Chỉ dân quân'], 0, '3 thành phần LLVT: QĐND, CAND, Dân quân tự vệ.'),
    Q('An ninh quốc gia bao gồm?', ['An ninh chính trị, kinh tế, văn hoá, mạng','Chỉ quân sự','Chỉ chính trị','Chỉ kinh tế'], 0, 'ANQG đa lĩnh vực: chính trị, kinh tế, văn hoá, mạng, biên giới...'),
    Q('Hành vi xâm phạm an ninh quốc gia?', ['Bị xử lý nghiêm theo BLHS','Bỏ qua','Phạt nhẹ','Khen thưởng'], 0, 'Xâm phạm ANQG bị xử lý nghiêm theo BLHS, có thể tử hình.'),
    Q('Học sinh góp phần bảo vệ Tổ quốc bằng cách?', ['Học tốt, rèn luyện, tuân thủ PL','Phá hoại','Im lặng','Không quan tâm'], 0, 'Học sinh: học tốt, rèn luyện, tuân thủ PL, sẵn sàng thực hiện NVQS.'),
  ]),

  M(33, 'Giáo dục pháp luật và đạo đức công dân', [
    Q('Giáo dục pháp luật giúp?', ['Nâng cao ý thức tuân thủ và sử dụng PL','Phá luật','Chỉ tốn thời gian','Vô dụng'], 0, 'GD PL giúp CD hiểu, tuân thủ và sử dụng PL bảo vệ quyền lợi.'),
    Q('Đạo đức công dân là?', ['Hệ giá trị, chuẩn mực ứng xử trong XH','Quy tắc bắt buộc','Tôn giáo','Phong tục'], 0, 'Đạo đức CD là các giá trị, chuẩn mực ứng xử trong cộng đồng.'),
    Q('Trung thực, liêm chính là?', ['Phẩm chất đạo đức cốt lõi','Vô ích','Cứng nhắc','Lạc hậu'], 0, 'Trung thực, liêm chính là phẩm chất đạo đức cốt lõi của công dân tốt.'),
    Q('Học sinh thể hiện trách nhiệm công dân qua?', ['Học tập, tuân thủ PL, tham gia hoạt động cộng đồng','Im lặng','Phá hoại','Đứng ngoài'], 0, 'HS thể hiện qua học tập, tuân thủ PL, hoạt động đoàn thể, từ thiện.'),
    Q('Giúp đỡ người yếu thế là?', ['Hành động đạo đức tích cực','Lãng phí','Không nên','Bắt buộc PL'], 0, 'Giúp đỡ người yếu thế là hành động đạo đức tích cực, được khuyến khích.'),
    Q('Tham gia hoạt động tình nguyện giúp?', ['Phát triển nhân cách, kỹ năng','Mất thời gian','Vô ích','Tốn tiền'], 0, 'Tình nguyện giúp HS phát triển nhân cách, kỹ năng sống, đóng góp XH.'),
  ]),

  M(34, 'Hội nhập quốc tế và pháp luật', [
    Q('Hội nhập quốc tế đòi hỏi VN?', ['Tuân thủ điều ước quốc tế','Cô lập','Phản đối luật QT','Không quan tâm'], 0, 'VN khi tham gia điều ước QT phải tuân thủ và nội luật hoá.'),
    Q('Quan hệ giữa PL quốc gia và QT?', ['Bổ sung và phù hợp với nhau','Đối lập','Loại trừ','Không liên quan'], 0, 'PL quốc gia phù hợp với điều ước QT mà VN tham gia.'),
    Q('Quyền con người trong PL VN?', ['Tương thích với chuẩn QT','Bị hạn chế','Vượt QT','Không có'], 0, 'PL VN bảo đảm các quyền con người phù hợp với chuẩn QT (UDHR).'),
    Q('Khi PL VN và điều ước QT khác nhau?', ['Áp dụng điều ước QT (trong phạm vi cam kết)','Áp dụng PL VN','Bỏ cả 2','Tuỳ ý'], 0, 'Theo Luật Điều ước QT 2016, áp dụng điều ước QT khi có khác biệt.'),
    Q('Tổ chức nào giám sát thực hiện quyền con người?', ['Hội đồng Nhân quyền LHQ','WTO','APEC','EU'], 0, 'Hội đồng Nhân quyền LHQ giám sát và đánh giá định kỳ các quốc gia.'),
    Q('Học sinh VN trong hội nhập cần?', ['Biết ngoại ngữ + hiểu văn hoá + tuân thủ PL','Chỉ học tiếng Việt','Chỉ biết VN','Cô lập'], 0, 'HS cần ngoại ngữ, hiểu văn hoá đa quốc gia, vẫn giữ bản sắc Việt và tuân thủ PL.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('3 chủ thể nền kinh tế?', ['Nhà nước, DN, hộ gia đình','Đảng, DN, dân','NN, dân, Đảng','Cá nhân, DN, NN'], 0, '3 chủ thể: NN, DN, hộ gia đình.'),
    Q('Thuế VAT là?', ['Gián thu','Trực thu','Phí','Lệ phí'], 0, 'VAT là thuế gián thu.'),
    Q('Hiến pháp 2013 có?', ['11 chương 120 điều','5 chương','15 chương','100 điều'], 0, 'Hiến pháp 2013 có 11 chương, 120 điều.'),
    Q('Tuổi bầu cử ở VN?', ['Đủ 18 tuổi','16','21','25'], 0, 'CD đủ 18 tuổi có quyền bầu cử.'),
    Q('Bảo vệ Tổ quốc là?', ['Quyền và nghĩa vụ thiêng liêng','Tuỳ ý','Chỉ quân đội','Không bắt buộc'], 0, 'Hiến pháp: bảo vệ TQ là quyền và nghĩa vụ thiêng liêng.'),
    Q('Quyền sở hữu trí tuệ bảo vệ?', ['Sáng tạo, phát minh, nhãn hiệu','Đất đai','Tiền bạc','Cơ thể'], 0, 'SHTT bảo vệ sáng tạo: tác giả, sáng chế, nhãn hiệu, kiểu dáng.'),
  ]),
];

export const H10GDCD_SCENARIOS = indexBy(H10GDCD_WEEKS);
