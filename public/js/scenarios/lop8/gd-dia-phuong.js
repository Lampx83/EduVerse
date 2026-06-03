// ============================================================
// Lớp 8 · GIÁO DỤC ĐỊA PHƯƠNG (HÀ NỘI) — 35 tuần
// Lịch sử HN cận đại, văn hoá HN, làng nghề, đô thị thông minh.
// ID prefix: "S8GDDP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8GDDP', 'gd-dia-phuong', n, title, qs, opts);

export const S8GDDP_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Hà Nội trước năm 1873 — Thành Hà Nội thời Nguyễn', [
    Q('Trước khi Pháp xâm chiếm, HN có tên?', ['Thăng Long, sau đổi Hà Nội thời Minh Mạng (1831)', 'Hà Nội từ đầu', 'Hoa Lư', 'Sài Gòn'], 0, 'Thăng Long (1010), đổi Hà Nội năm 1831 thời Minh Mạng — "nội: trong đất, hà: sông".'),
    Q('Thành HN thời Nguyễn được xây?', ['Bằng tre', 'Theo kiểu Vauban (Pháp), gọn hơn Thăng Long cũ', 'Không có thành', 'Theo Trung Quốc'], 1, 'Thành HN (1805) xây kiểu Vauban (Pháp), nhỏ gọn hơn Hoàng thành Thăng Long.'),
    Q('Vị trí thành HN cũ?', ['Đông Anh', 'Khu vực Hoàng thành Thăng Long hiện nay', 'Long Biên', 'Hồ Tây'], 1, 'Thành HN nay nằm trong khu vực Hoàng thành Thăng Long (di sản UNESCO).'),
    Q('Tổng đốc HN trước 1873?', ['Nguyễn Tri Phương', 'Hoàng Diệu', 'Phan Đình Phùng', 'Nguyễn Văn Tường'], 0, 'Nguyễn Tri Phương là Tổng đốc HN khi Pháp tấn công lần 1 (1873).'),
    Q('Kinh tế HN trước 1873?', ['Chỉ nông nghiệp', 'Chỉ chiến tranh', 'Thủ công nghiệp + thương mại (36 phố phường)', 'Hiện đại'], 2, 'HN có truyền thống thủ công + thương mại với 36 phố phường (Hàng…)'),
  ]),

  M(2, 'Pháp xâm chiếm Hà Nội lần 1 (1873) — Nguyễn Tri Phương', [
    Q('Pháp tấn công HN lần 1 năm?', ['1885', '1882', '1873', '1858'], 2, 'Pháp đánh chiếm HN lần 1 năm 1873 (Francis Garnier).'),
    Q('Người chỉ huy quân Pháp?', ['Charner', 'Bonard', 'Francis Garnier', 'Henri Rivière'], 2, 'Francis Garnier (Đại uý hải quân) chỉ huy đánh chiếm HN 1873.'),
    Q('Pháp dùng bao nhiêu quân tấn công?', ['10 000 quân', '~180 lính + tàu chiến', '50 000', '~5 000 lính bộ binh + pháo binh'], 1, 'Garnier chỉ có ~180 lính Pháp + 1 tàu chiến nhưng dám tấn công HN.'),
    Q('Nguyễn Tri Phương khi thành thất thủ đã?', ['Bỏ chạy', 'Tự sát ngay', 'Bị thương nặng, tuyệt thực mà mất', 'Đầu hàng'], 2, 'Nguyễn Tri Phương bị thương, bị Pháp bắt, tuyệt thực tự sát để giữ khí tiết.'),
    Q('Sau khi mất HN, hiệp ước nào?', ['Hác-măng 1883', 'Giáp Tuất 1874 — VN nhường thêm quyền cho Pháp', 'Pa-tơ-nốt 1884', 'Nhâm Tuất 1862'], 1, 'Hiệp ước Giáp Tuất (15/3/1874): VN nhường nhiều quyền lợi cho Pháp ở Bắc Kì.'),
  ]),

  M(3, 'Pháp xâm chiếm Hà Nội lần 2 (1882) — Hoàng Diệu', [
    Q('Pháp tấn công HN lần 2 năm?', ['1858', '1873', '1882', '1885'], 2, 'Pháp đánh chiếm HN lần 2 năm 1882 (Henri Rivière).'),
    Q('Người chỉ huy quân Pháp lần này?', ['De Lattre', 'Courbet', 'Henri Rivière', 'Francis Garnier'], 2, 'Đại tá Henri Rivière chỉ huy quân Pháp đánh HN lần 2.'),
    Q('Tổng đốc HN khi đó?', ['Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Phan Đình Phùng', 'Hoàng Diệu'], 3, 'Hoàng Diệu (1828–1882) là Tổng đốc HN bảo vệ thành.'),
    Q('Hoàng Diệu hành động thế nào khi thành mất?', ['Bỏ chạy', 'Đầu hàng', 'Cộng tác Pháp', 'Thắt cổ tự sát giữ khí tiết tại Võ Miếu'], 3, 'Hoàng Diệu sau khi thành thất thủ đã thắt cổ tự sát tại Võ Miếu để giữ tiết tháo.'),
    Q('Ý nghĩa cái chết Hoàng Diệu?', ['Chỉ là tai nạn cá nhân, không có ý nghĩa lịch sử', 'Biểu tượng kiên trung, không khuất phục', 'Hèn nhát', 'Chỉ là sự kiện địa phương, ít người biết đến'], 1, 'Cái chết của Hoàng Diệu là biểu tượng tinh thần kiên trung, bất khuất.'),
  ]),

  M(4, 'Hà Nội thời Pháp thuộc — Quy hoạch thuộc địa', [
    Q('Pháp biến HN thành?', ['Trung tâm hành chính Bắc Kỳ và Liên bang Đông Dương', 'Khu nông nghiệp', 'Cảng thuần', 'Thủ đô'], 0, 'HN: trung tâm hành chính Bắc Kỳ (Tonkin) và Liên bang Đông Dương từ 1902.'),
    Q('Khu phố Pháp được quy hoạch ở?', ['Phía bắc', 'Phía nam hồ Hoàn Kiếm (khu Ba Đình, Hoàn Kiếm hiện nay)', 'Long Biên', 'Hà Đông'], 1, 'Khu phố Pháp được quy hoạch ở phía nam hồ Hoàn Kiếm — kiểu đại lộ, biệt thự.'),
    Q('36 phố phường thuộc khu?', ['Phố Pháp', 'Hà Đông', 'Khu phố cổ — phía bắc hồ Hoàn Kiếm', 'Tây Hồ'], 2, '36 phố phường = phố cổ Hà Nội ở phía bắc hồ Hoàn Kiếm.'),
    Q('Kiến trúc Pháp tiêu biểu?', ['Văn Miếu', 'Lăng Vua', 'Nhà hát Lớn, Phủ Toàn quyền (Phủ Chủ tịch), cầu Long Biên', 'Chùa Một Cột'], 2, 'Kiến trúc Pháp: Nhà hát Lớn (1911), Phủ Toàn quyền, Cầu Long Biên (1902)…'),
    Q('Đô thị HN cuối thế kỉ XIX có gì mới?', ['Đèn dầu', 'Điện, nước máy, xe điện', 'Không có gì', 'Chỉ ngựa'], 1, 'Pháp đưa vào: điện (1900), nước máy, xe điện (1900) — hiện đại hoá đô thị.'),
  ]),

  M(5, 'Cầu Long Biên — Biểu tượng kiến trúc Pháp', [
    Q('Cầu Long Biên xây dựng?', ['1945', '1920', '1900-1950', '1898–1902, do hãng Daydé & Pillé (Pháp) thiết kế'], 3, 'Cầu Long Biên xây 1898-1902, Daydé & Pillé (Pháp) thiết kế.'),
    Q('Tên ban đầu của cầu?', ['Cầu Sông Hồng', 'Cầu Hà Nội', 'Cầu Doumer (Paul Doumer — toàn quyền Đông Dương)', 'Cầu Long Biên'], 2, 'Tên gốc: Pont Doumer (cầu Doumer), đổi tên sau 1945.'),
    Q('Cầu Long Biên dài?', ['~2290m, là cầu thép dài nhất Đông Dương khi xây xong', '500m', '100m', '5000m'], 0, 'Cầu Long Biên dài 2290m, lúc xây là cầu thép dài nhất Đông Dương.'),
    Q('Cầu Long Biên thời chiến tranh?', ['Tự nhiên hỏng', 'Không bị bom', 'Bị Mỹ ném bom nhiều lần (1965–1972), được nối lại nhiều lần', 'Bị Pháp phá'], 2, 'Cầu Long Biên là mục tiêu chiến lược, bị Mỹ ném bom nặng nề 1965–1972.'),
    Q('Ý nghĩa Cầu Long Biên hiện nay?', ['Di sản kiến trúc, biểu tượng HN, gắn lịch sử dân tộc', 'Chỉ giao thông', 'Sắp phá bỏ', 'Chỉ là cây cầu sắt cũ kỹ chờ thay thế'], 0, 'Cầu Long Biên: di sản kiến trúc + biểu tượng HN + chứng nhân lịch sử (Pháp thuộc, KCN, chống Mỹ).'),
  ]),

  M(6, 'Nhà hát Lớn Hà Nội', [
    Q('Nhà hát Lớn HN xây?', ['1990', '1901–1911, kiến trúc Pháp', '1945', '1800'], 1, 'Nhà hát Lớn HN xây 1901-1911, kiến trúc Pháp tân cổ điển.'),
    Q('Mô hình của Nhà hát Lớn?', ['Mô phỏng Opéra Garnier (Paris)', 'VN truyền thống', 'Trung Quốc', 'Kiến trúc Gothic châu Âu thời Trung cổ'], 0, 'Mô phỏng Opéra Garnier (Paris) — nhà hát opera nổi tiếng nhất thế giới.'),
    Q('Sức chứa Nhà hát Lớn?', ['10', '100', '5000', '~600 ghế (đã sửa lại)'], 3, '~600 ghế sau khi sửa chữa.'),
    Q('Sự kiện quan trọng tại Nhà hát Lớn?', ['Quốc hội đầu tiên VN họp 1946', 'Cách mạng Tháng Tám', 'Thành lập Hội Nhà văn', 'Đại hội Đảng'], 0, 'Quốc hội Khoá I VN khai mạc tại Nhà hát Lớn ngày 2/3/1946.'),
    Q('Ý nghĩa kiến trúc Nhà hát Lớn?', ['Công trình hành chính thời Pháp thuộc', 'Biểu tượng văn hoá nghệ thuật HN', 'Lạc hậu', 'Sắp phá bỏ'], 1, 'Nhà hát Lớn: biểu tượng nghệ thuật, văn hoá HN; trung tâm biểu diễn classic.'),
  ]),

  M(7, 'Phong trào yêu nước đầu XX tại Hà Nội — Đông Du', [
    Q('Phong trào Đông Du (1905-1908) khởi xướng bởi?', ['Hồ Chí Minh', 'Nguyễn Thái Học', 'Phan Bội Châu', 'Phan Châu Trinh'], 2, 'Phan Bội Châu (1867-1940) khởi xướng phong trào Đông Du, đưa thanh niên VN sang Nhật học.'),
    Q('Mục đích Đông Du?', ['Định cư', 'Buôn bán', 'Đi du lịch', 'Đưa thanh niên sang Nhật học, chuẩn bị giành độc lập'], 3, 'Đông Du: đưa thanh niên sang Nhật học để chuẩn bị lực lượng giành độc lập.'),
    Q('HN trong phong trào Đông Du?', ['Trung lập', 'Phản đối', 'Không tham gia', 'Là một trong các trung tâm tuyển chọn, vận động'], 3, 'HN là một trong các trung tâm vận động đưa thanh niên Đông Du.'),
    Q('Số thanh niên Đông Du?', ['1', '10', '~200 người', '10 000'], 2, '~200 thanh niên VN sang Nhật học theo phong trào Đông Du.'),
    Q('Phong trào kết thúc vì?', ['Thắng lợi', 'Thanh niên không học được', 'Pháp-Nhật thoả thuận trục xuất, 1909', 'Tự kết thúc'], 2, 'Pháp ký với Nhật, Nhật trục xuất thanh niên VN (1909), kết thúc Đông Du.'),
  ]),

  M(8, 'Đông Kinh Nghĩa Thục tại Hà Nội (1907)', [
    Q('Đông Kinh Nghĩa Thục thành lập?', ['1900 tại Sài Gòn', '1907 tại Hà Nội (phố Hàng Đào)', '1885', '1920'], 1, 'Đông Kinh Nghĩa Thục (3/1907) tại phố Hàng Đào, HN — Đông Kinh = HN, Nghĩa Thục = trường nghĩa.'),
    Q('Người sáng lập?', ['Lương Văn Can, Nguyễn Quyền và các nhà yêu nước', 'Phan Bội Châu', 'Hồ Chí Minh', 'Nguyễn Thái Học'], 0, 'Lương Văn Can, Nguyễn Quyền, Đào Nguyên Phổ, Hoàng Tăng Bí… sáng lập.'),
    Q('Mục đích?', ['Tuyên truyền Pháp', 'Chỉ dạy nông nghiệp', 'Dạy chữ Hán', 'Dạy chữ Quốc ngữ, kiến thức mới, đề cao tinh thần yêu nước'], 3, 'Đông Kinh Nghĩa Thục: dạy chữ Quốc ngữ, kiến thức khoa học, tinh thần yêu nước, cải cách XH.'),
    Q('Đông Kinh Nghĩa Thục bị?', ['Pháp giải tán cuối 1907', 'Tự đóng', 'Phát triển mạnh', 'Trở thành đại học'], 0, 'Pháp lo sợ ảnh hưởng nên đóng cửa cuối 1907, bắt giam các nhà sáng lập.'),
    Q('Ý nghĩa lịch sử?', ['Không có ý nghĩa', 'Thất bại hoàn toàn', 'Chỉ địa phương', 'Mở đầu phong trào canh tân giáo dục, văn hoá VN'], 3, 'Đông Kinh Nghĩa Thục là mở đầu phong trào canh tân giáo dục, văn hoá theo hướng mới ở VN.'),
  ]),

  M(9, 'Phong trào duy tân tại Hà Nội — Phan Châu Trinh', [
    Q('Phan Châu Trinh (1872-1926) chủ trương?', ['Trung lập', 'Bạo động', 'Phục cổ', '"Khai dân trí, chấn dân khí, hậu dân sinh" — cải cách ôn hoà'], 3, 'Phan Châu Trinh: 3 chủ trương "Khai dân trí, chấn dân khí, hậu dân sinh".'),
    Q('Phương pháp Phan Châu Trinh?', ['Bí mật', 'Khởi nghĩa', 'Ôn hoà, dựa Pháp để duy tân', 'Vũ trang'], 2, 'PCT chủ trương ôn hoà, dựa Pháp để cải cách dân trí, không dùng vũ lực.'),
    Q('Khác biệt PCT và PBC?', ['PCT: ôn hoà duy tân; PBC: bạo động Đông Du', 'PCT bạo động', 'Giống nhau', 'PBC ôn hoà'], 0, 'PCT: ôn hoà duy tân, dựa Pháp; PBC: bạo động vũ trang, Đông Du sang Nhật.'),
    Q('Ảnh hưởng PCT đến HN?', ['Truyền cảm hứng phong trào duy tân, cải cách văn hoá', 'Bị cấm hoàn toàn', 'Không ảnh hưởng', 'Tiêu cực'], 0, 'PCT truyền cảm hứng nhiều phong trào cải cách văn hoá-giáo dục ở HN và toàn quốc.'),
    Q('Lễ tang Phan Châu Trinh (1926) tại?', ['Sài Gòn, sau lan rộng cả nước, gồm HN', 'Hà Nội, do gia đình tổ chức tại quê cha', 'Huế, nơi ông từng làm quan triều Nguyễn', 'Hải Phòng'], 0, 'Lễ tang PCT (1926) ở SG, lan rộng cả nước thành phong trào yêu nước lớn.'),
  ]),

  M(10, 'Vụ Hà thành đầu độc (1908)', [
    Q('Vụ Hà thành đầu độc xảy ra năm?', ['1885', '1908', '1907', '1920'], 1, 'Vụ Hà thành đầu độc xảy ra ngày 27/6/1908.'),
    Q('Mục đích vụ đầu độc?', ['Cướp tài sản', 'Trả thù cá nhân', 'Vô tình', 'Đánh úp lính Pháp đồn HN, kết hợp khởi nghĩa Yên Thế'], 3, 'Vụ Hà thành đầu độc: kế hoạch đánh úp lính Pháp đồn HN, phối hợp khởi nghĩa Yên Thế.'),
    Q('Người chỉ huy?', ['Hoàng Diệu', 'Vua Hàm Nghi', 'Đầu bếp Việt trong đồn binh Pháp, liên kết Đề Thám', 'Phan Bội Châu'], 2, 'Đầu bếp Việt trong đồn lính Pháp được Đề Thám liên kết, lên kế hoạch đầu độc thức ăn.'),
    Q('Phương pháp?', ['Bao vây', 'Đầu độc thức ăn của lính Pháp', 'Tấn công trực diện', 'Đánh bom'], 1, 'Đầu độc bằng bã hoa hòe trong thức ăn lính Pháp.'),
    Q('Kết quả vụ Hà thành đầu độc?', ['Pháp bỏ HN', 'Không có ai chết', 'Thất bại, nhiều người bị tử hình', 'Thắng lợi'], 2, 'Kế hoạch bị lộ, Pháp phát hiện, nhiều người bị bắt và tử hình. Khởi nghĩa thất bại.'),
  ]),

  M(11, 'Khu phố cổ Hà Nội — 36 phố phường', [
    Q('36 phố phường HN có từ?', ['Sau 1945', 'Thời Pháp thuộc', 'Thời Lý-Trần, phát triển mạnh thời Lê-Nguyễn', '2000'], 2, '36 phố phường có từ thời Lý-Trần, phát triển mạnh thời Lê-Nguyễn (XVII-XIX).'),
    Q('Tên các phố bắt đầu bằng?', ['Tên các vị vua triều Lý — Trần', 'Tên hoa', 'Tên người', '"Hàng" + sản phẩm bán (Hàng Mã, Hàng Đào…)'], 3, 'Tên phố cổ HN: "Hàng" + sản phẩm chính (Hàng Mã, Hàng Đào, Hàng Đồng, Hàng Bạc…).'),
    Q('Phố Hàng Đào nổi tiếng về?', ['Bán hoa đào', 'Vải, lụa, áo (đào = đỏ, màu của vải nhuộm)', 'Tên người', 'Đào quả'], 1, 'Hàng Đào: phố bán vải nhuộm đỏ (đào). Trung tâm thương mại lụa-vải xưa.'),
    Q('Phố Hàng Bạc nổi tiếng về?', ['Nghề kim hoàn, đúc bạc', 'Ngân hàng', 'Bán bạc', 'Trang sức nhập'], 0, 'Hàng Bạc: nghề kim hoàn truyền thống, đúc bạc, làm trang sức.'),
    Q('Phố cổ HN có đặc trưng kiến trúc?', ['Nhà cao tầng', 'Nhà sàn gỗ một tầng kiểu dân tộc', 'Nhà ống dài, có sân trong, cao 2-3 tầng', 'Biệt thự lớn'], 2, 'Nhà phố cổ: dạng "ống" dài hẹp (do thuế tính theo mặt tiền), 2-3 tầng, có sân trong.'),
  ]),

  M(12, 'Văn hoá Hà Nội — Thạch Lam và "Hà Nội 36 phố phường"', [
    Q('Thạch Lam (1910–1942) là?', ['Chính trị gia', 'Họa sĩ', 'Nhà văn nhóm Tự Lực Văn Đoàn', 'Nhạc sĩ'], 2, 'Thạch Lam: nhà văn, em ruột Nhất Linh và Hoàng Đạo, nhóm Tự Lực Văn Đoàn.'),
    Q('"Hà Nội 36 phố phường" của Thạch Lam?', ['Tiểu thuyết tình yêu', 'Tập ký sự về phố cổ, ẩm thực, văn hoá HN', 'Tập thơ', 'Hồi ký chiến tranh'], 1, '"Hà Nội 36 phố phường" (1943) — tập ký sự nổi tiếng về phố cổ, ẩm thực, văn hoá HN.'),
    Q('Phong cách văn Thạch Lam?', ['Nhẹ nhàng, tinh tế, đầy cảm xúc', 'Mạnh mẽ', 'Khô khan', 'Hung hãn'], 0, 'Thạch Lam: văn nhẹ nhàng, tinh tế, lãng mạn, đầy cảm xúc về HN xưa.'),
    Q('Đặc sản HN qua bút Thạch Lam?', ['Bánh đậu xanh', 'Phở, bún chả, cốm Vòng, chả cá Lã Vọng, kem que', 'Hủ tiếu', 'Bún bò Huế'], 1, 'Thạch Lam viết về phở, bún chả, cốm Vòng, chả cá Lã Vọng… đặc sản HN.'),
    Q('Ý nghĩa tác phẩm?', ['Lưu giữ ký ức văn hoá HN xưa, gợi tình yêu HN', 'Chỉ là sách hướng dẫn du lịch HN', 'Phản ánh sai lệch đời sống thị dân HN', 'Sai lịch sử'], 0, '"36 phố phường" là tài liệu vô giá lưu ký ức văn hoá HN cuối thời Pháp.'),
  ]),

  M(13, 'Văn hoá Hà Nội — Nguyễn Tuân và "Vang bóng một thời"', [
    Q('Nguyễn Tuân (1910–1987) là?', ['Chính trị gia', 'Họa sĩ', 'Nhà văn, nhà tuỳ bút bậc thầy VN', 'Nhạc sĩ'], 2, 'Nguyễn Tuân: nhà văn lừng danh, bậc thầy tuỳ bút (essay) của VN.'),
    Q('"Vang bóng một thời" (1940) là?', ['Tiểu thuyết', 'Tập truyện ngắn về thú chơi tao nhã của trí thức xưa', 'Hồi ký', 'Tập thơ trữ tình về Hà Nội'], 1, '"Vang bóng một thời" — tập truyện ngắn ca ngợi thú chơi tao nhã (uống trà, ngâm thơ, chơi cây…) của các nhà nho.'),
    Q('Phong cách Nguyễn Tuân?', ['Sao chép', 'Đơn giản', 'Khô khan', 'Tài hoa, độc đáo, ngôn ngữ tinh tế, am tường'], 3, 'Nguyễn Tuân: phong cách tài hoa, độc đáo, ngôn từ tinh tế, am tường nhiều lĩnh vực.'),
    Q('Tác phẩm khác của Nguyễn Tuân?', ['Tắt đèn', 'Người lái đò sông Đà, Sông Đà, Chùa Đàn', 'Chí Phèo', 'Lão Hạc'], 1, '"Người lái đò sông Đà", "Sông Đà", "Chùa Đàn" — các tuỳ bút nổi tiếng của Nguyễn Tuân.'),
    Q('Đóng góp Nguyễn Tuân với HN?', ['Chủ yếu viết về nông thôn, ít liên quan HN', 'Lưu giữ văn hoá tinh thần HN xưa, làm phong phú văn học VN', 'Tiêu cực', 'Không liên quan HN'], 1, 'Nguyễn Tuân lưu giữ tinh hoa văn hoá HN xưa, là cây bút tuỳ bút bậc thầy của VHVN hiện đại.'),
  ]),

  M(14, 'Làng nghề truyền thống Hà Nội — Lụa Vạn Phúc', [
    Q('Làng lụa Vạn Phúc thuộc?', ['Quận Ba Đình', 'Đông Anh', 'Quận Hà Đông, HN — có lịch sử >1000 năm', 'Sóc Sơn'], 2, 'Làng lụa Vạn Phúc (Hà Đông, HN) — làng nghề lụa nổi tiếng >1000 năm.'),
    Q('Đặc sản Vạn Phúc?', ['Lụa Hà Đông (Hà Đông silk)', 'Gốm sứ cao cấp', 'Đồ chạm khắc bạc', 'Bánh tráng'], 0, 'Lụa Hà Đông (Vạn Phúc silk) nổi tiếng trong và ngoài nước.'),
    Q('Quy trình dệt lụa truyền thống?', ['Nuôi tằm → kéo tơ → dệt → nhuộm', 'Nhập tơ', 'Chỉ nhuộm', 'Chỉ dệt'], 0, 'Quy trình hoàn chỉnh: nuôi tằm → quay tơ → dệt vải → nhuộm/in hoa.'),
    Q('Đặc trưng lụa Vạn Phúc?', ['Dày, thô, ít hoa văn', 'Mềm, mượt, hoa văn truyền thống, bền', 'Không có hoa văn', 'Cứng, dễ phai màu khi giặt'], 1, 'Lụa Vạn Phúc: mềm mượt, hoa văn cổ truyền (hoa, chim, rồng…), bền màu.'),
    Q('Thách thức làng nghề ngày nay?', ['Phát triển mạnh', 'Không có vấn đề', 'Cạnh tranh hàng nhập, mất truyền nghề thế hệ trẻ', 'Dễ dàng'], 2, 'Làng nghề gặp khó: cạnh tranh hàng nhập rẻ, thanh niên không học nghề, chi phí cao.'),
  ]),

  M(15, 'Làng nghề truyền thống — Gốm Bát Tràng', [
    Q('Làng gốm Bát Tràng thuộc?', ['Huyện Gia Lâm, HN — bên sông Hồng', 'Tây Hồ', 'Hoài Đức', 'Long Biên'], 0, 'Làng gốm Bát Tràng ở Gia Lâm, HN — bên sông Hồng.'),
    Q('Lịch sử Bát Tràng?', ['Thế kỷ XIX', 'Mới phát triển từ thế kỷ XX', 'Sau 1945', 'Có từ thời Lý (XI), nay đã ~1000 năm'], 3, 'Bát Tràng có truyền thống ~1000 năm, từ thời Lý — Trần.'),
    Q('Đặc sản Bát Tràng?', ['Gốm sứ men trắng, xanh lam, hoạ tiết tinh tế', 'Kim loại', 'Lụa tơ tằm dệt thủ công', 'Đồ mộc chạm khắc tinh xảo'], 0, 'Bát Tràng nổi tiếng: gốm sứ men trắng, hoa lam (xanh dương), hoạ tiết tinh tế.'),
    Q('Quy trình làm gốm?', ['Mua bán', 'Chỉ nung', 'Lọc đất → tạo hình → tráng men → nung', 'Chỉ tạo hình'], 2, 'Quy trình: lọc đất sét → tạo hình (bàn xoay) → phơi → tráng men → nung (~1300°C).'),
    Q('Bát Tràng hôm nay?', ['Chỉ làm cổ', 'Chỉ làm hiện đại', 'Bỏ nghề', 'Vừa giữ truyền thống vừa hiện đại hoá, du lịch'], 3, 'Bát Tràng: giữ nghề truyền thống + hiện đại hoá + phát triển du lịch trải nghiệm.'),
  ]),

  M(16, 'Làng nghề truyền thống — Đúc đồng Ngũ Xã', [
    Q('Làng Ngũ Xã thuộc?', ['Long Biên', 'Sóc Sơn', 'Phường Trúc Bạch, Ba Đình, HN', 'Hà Đông'], 2, 'Làng Ngũ Xã ở phường Trúc Bạch, Ba Đình, ven hồ Trúc Bạch.'),
    Q('Nghề truyền thống Ngũ Xã?', ['Gốm sứ men ngọc', 'Đúc đồng (chuông, tượng, đỉnh)', 'Bánh cốm và mứt sen truyền thống', 'Dệt lụa tơ tằm cao cấp'], 1, 'Ngũ Xã chuyên đúc đồng: chuông chùa, tượng Phật, đỉnh thờ…'),
    Q('Lịch sử Ngũ Xã?', ['Sau 1945', 'Từ thời Lê, ~thế kỷ XVII', 'Thời Pháp', 'Thời Nguyễn, ~thế kỷ XIX'], 1, 'Làng Ngũ Xã có lịch sử ~thế kỷ XVII (thời Lê), do 5 xã hợp lại nên có tên Ngũ Xã.'),
    Q('Tượng đồng nổi tiếng?', ['Tượng Trần Hưng Đạo', 'Tượng A-di-đà chùa Thần Quang (4m, 14 tấn)', 'Tượng Lý Thái Tổ ven Hồ Gươm', 'Tượng Bác Hồ'], 1, 'Tượng Phật A-di-đà chùa Thần Quang (Ngũ Xã) cao 4m, nặng 14 tấn — kiệt tác đúc đồng VN.'),
    Q('Hiện trạng làng nghề?', ['Phát triển mạnh', 'Số thợ ít, cần bảo tồn', 'Hiện đại hoá hoàn toàn', 'Bỏ nghề hoàn toàn'], 1, 'Số nghệ nhân Ngũ Xã ngày càng ít, cần bảo tồn để giữ nghề truyền thống.'),
  ]),

  M(17, 'Nông nghiệp đô thị tại Hà Nội', [
    Q('Nông nghiệp đô thị (urban agriculture) là?', ['Du lịch', 'Nông thôn xa', 'Công nghiệp', 'Trồng cây-rau-hoa trong đô thị'], 3, 'Urban agriculture: trồng cây/rau/hoa trong và quanh đô thị.'),
    Q('HN có làng nghề trồng?', ['Chỉ rau', 'Chỉ trồng cây cảnh trong chậu', 'Hoa Tây Hồ, đào Nhật Tân, quất Tứ Liên', 'Chỉ lúa'], 2, 'HN nổi tiếng: làng hoa Tây Hồ, đào Nhật Tân (Tết), quất cảnh Tứ Liên.'),
    Q('Lợi ích nông nghiệp đô thị?', ['Lãng phí đất', 'Cung cấp thực phẩm tươi, làm xanh đô thị, du lịch', 'Không hiệu quả kinh tế bằng nhập khẩu', 'Tốn nước'], 1, 'Lợi ích: thực phẩm tươi, xanh đô thị (giảm nhiệt, CO2), du lịch sinh thái.'),
    Q('Thách thức?', ['Đô thị hoá, mất đất, ô nhiễm', 'Quá nhiều đất', 'Dễ dàng', 'Không thách thức'], 0, 'Thách thức: đô thị hoá lấn đất nông nghiệp, ô nhiễm không khí-đất-nước.'),
    Q('Đào Nhật Tân nổi tiếng vào?', ['Mùa thu, dịp Trung thu', 'Tết Trung thu', 'Tết Nguyên Đán', 'Tết Tây'], 2, 'Đào Nhật Tân (Tây Hồ, HN) nổi tiếng dịp Tết Nguyên Đán — biểu tượng Tết HN.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Pháp đánh HN lần 1?', ['1885', '1882', '1873 (Garnier)', '1858'], 2, 'Garnier.'),
    Q('Tổng đốc HN khi mất 1882?', ['Tôn Thất Thuyết', 'Phan Đình Phùng', 'Hoàng Diệu', 'Nguyễn Tri Phương'], 2, 'Hoàng Diệu tuẫn tiết.'),
    Q('Cầu Long Biên xây?', ['1900', '1882', '1898-1902', '1945'], 2, 'Pont Doumer.'),
    Q('Thạch Lam viết tác phẩm?', ['Hà Nội 36 phố phường', 'Vang bóng một thời', 'Thương nhớ mười hai', 'Tắt đèn'], 0, 'Ký sự HN.'),
    Q('Làng lụa nổi tiếng HN?', ['Vạn Phúc', 'Bát Tràng', 'Ngũ Xã', 'Nhật Tân'], 0, 'Hà Đông.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Phong trào Cần Vương tại Hà Nội và Bắc Bộ', [
    Q('Phong trào Cần Vương (1885-1896) do?', ['Tôn Thất Thuyết và vua Hàm Nghi khởi xướng', 'Phan Bội Châu', 'Hồ Chí Minh', 'Nguyễn Tri Phương'], 0, 'Cần Vương: Tôn Thất Thuyết soạn chiếu, vua Hàm Nghi ban (13/7/1885).'),
    Q('Ý nghĩa "Cần Vương"?', ['Trung lập', 'Phò vua, cứu nước', 'Phế vua', 'Theo Pháp'], 1, 'Cần Vương = "phò vua cứu nước" — kêu gọi toàn dân chống Pháp giành lại độc lập.'),
    Q('Phạm vi phong trào?', ['Chỉ Nam Bộ', 'Toàn quốc, nhất là Trung-Bắc Bộ', 'Chỉ HN', 'Chỉ Huế'], 1, 'Cần Vương lan rộng toàn quốc nhưng mạnh nhất ở Trung-Bắc Bộ.'),
    Q('Khởi nghĩa Cần Vương lớn nhất Bắc Bộ?', ['Yên Thế', 'Đông Du', 'Bãi Sậy (Hưng Yên), Ba Đình (Thanh Hoá)', 'Khởi nghĩa Phan Bội Châu'], 2, 'Bắc Bộ: Bãi Sậy (Nguyễn Thiện Thuật, 1883-1892), Ba Đình (Đinh Công Tráng, 1886-1887).'),
    Q('Phong trào Cần Vương kết thúc?', ['1885', '1945', '1900', '1896, khi Phan Đình Phùng mất'], 3, 'Cần Vương kết thúc ~1896 khi khởi nghĩa Hương Khê (Phan Đình Phùng) bị dập tắt.'),
  ]),

  M(20, 'Khởi nghĩa Yên Thế (1884-1913) — Đề Thám', [
    Q('Khởi nghĩa Yên Thế (Bắc Giang) do?', ['Hoàng Hoa Thám (Đề Thám)', 'Phan Đình Phùng', 'Nguyễn Tri Phương', 'Tôn Thất Thuyết'], 0, 'Hoàng Hoa Thám (Đề Thám) — "hùm thiêng Yên Thế" — lãnh đạo khởi nghĩa.'),
    Q('Thời gian khởi nghĩa?', ['1884-1913 (29 năm — dài nhất chống Pháp)', '50 năm', '5 năm', '10 năm'], 0, '29 năm là cuộc kháng chiến chống Pháp dài nhất trong lịch sử cận đại VN.'),
    Q('Đề Thám có quan hệ với HN?', ['Không liên quan', 'Đánh HN', 'Từng kéo quân về đóng tại nội thành HN', 'Liên kết với vụ Hà thành đầu độc (1908)'], 3, 'Đề Thám liên kết với vụ Hà thành đầu độc 1908 — kế hoạch phối hợp khởi nghĩa.'),
    Q('Tính chất khởi nghĩa Yên Thế?', ['Quân chính quy', 'Khởi nghĩa nông dân tự phát, sau liên kết Cần Vương', 'Tôn giáo', 'Phong kiến'], 1, 'Khởi nghĩa nông dân tự phát từ Yên Thế (Bắc Giang), sau liên kết phong trào yêu nước.'),
    Q('Đề Thám hy sinh?', ['1913, do bị phản bội', '1908', '1900', '1885'], 0, 'Đề Thám bị phản bội và sát hại năm 1913, kết thúc khởi nghĩa Yên Thế.'),
  ]),

  M(21, 'Chính sách khai thác thuộc địa Pháp tại HN (1897-1914)', [
    Q('Pháp khai thác thuộc địa lần 1?', ['1897-1914', '1945-1954', '1882-1885', '1858-1873'], 0, 'Khai thác thuộc địa lần 1: 1897-1914 (toàn quyền Paul Doumer khởi xướng).'),
    Q('Mục đích khai thác thuộc địa?', ['Phát triển VN', 'Trung lập', 'Bóc lột tài nguyên, thị trường, nhân công cho Pháp', 'Hỗ trợ VN'], 2, 'Mục đích duy nhất: bóc lột tài nguyên, biến VN thành thị trường và nguồn nhân công cho Pháp.'),
    Q('Tại HN, Pháp đầu tư?', ['Xí nghiệp lớn', 'Bệnh viện đẳng cấp', 'Hạ tầng giao thông (đường, cầu, xe lửa), điện, nước', 'Trường đại học'], 2, 'Pháp đầu tư hạ tầng (cầu, đường, xe lửa, điện) để phục vụ khai thác — không phải phát triển VN.'),
    Q('Công nghiệp Pháp tại HN?', ['Đóng tàu', 'Cơ khí nặng', 'Vũ khí', 'Chế biến (rượu, thuốc lá, dệt)'], 3, 'Pháp tập trung công nghiệp nhẹ chế biến — không cho VN làm công nghiệp nặng.'),
    Q('Hậu quả khai thác thuộc địa?', ['Phát triển hiện đại', 'VN trở thành nước nông nghiệp lạc hậu, phụ thuộc Pháp', 'Độc lập', 'Hạnh phúc'], 1, 'VN trở thành nước nông nghiệp lạc hậu, phụ thuộc Pháp về kinh tế-chính trị.'),
  ]),

  M(22, 'Nguyễn Tất Thành ra đi tìm đường cứu nước', [
    Q('Nguyễn Tất Thành (1890-1969) sinh tại?', ['Nghệ An, từng học tại HN', 'Huế, trong cung đình triều Nguyễn', 'Sài Gòn', 'Hà Nội, tại phố Hàng Đào'], 0, 'Nguyễn Tất Thành sinh tại Nghệ An (Nam Đàn), học một thời gian tại HN.'),
    Q('Người ra đi tìm đường cứu nước?', ['19/8/1945', '7/5/1954', '5/6/1911 từ bến Nhà Rồng (SG)', '2/9/1945'], 2, '5/6/1911: Nguyễn Tất Thành rời bến Nhà Rồng (Sài Gòn) trên tàu Amiral Latouche-Tréville.'),
    Q('Đến Pháp năm?', ['1941', '1930', '1920', '1911'], 3, '1911 đến Marseille (Pháp), bắt đầu hành trình tìm đường cứu nước.'),
    Q('Trở thành thành viên ĐCS Pháp?', ['1930', '1911', '1920 tại Đại hội Tours', '1945'], 2, '12/1920 tại Đại hội Tours, Nguyễn Ái Quốc tham gia sáng lập ĐCS Pháp — bước ngoặt đến với CN Mác-Lê.'),
    Q('Người trở về VN trực tiếp lãnh đạo?', ['1945', '1941 — về Pác Bó (Cao Bằng)', '1911', '1920'], 1, '1941: HCM về Pác Bó (Cao Bằng), trực tiếp lãnh đạo CMVN.'),
  ]),

  M(23, 'Văn hoá Hà Nội — Ẩm thực truyền thống', [
    Q('Phở HN có nguồn gốc?', ['Cuối XIX - đầu XX, có thể từ Nam Định', 'Trung Quốc', 'Pháp du nhập vào đầu thế kỷ XX', 'Sau 1975'], 0, 'Phở: ra đời cuối XIX - đầu XX, có giả thuyết từ Nam Định, phát triển mạnh ở HN.'),
    Q('Phở HN đặc trưng?', ['Nước dùng ngọt đậm, bánh phở dày', 'Vị cay nồng, thêm nhiều ớt sa tế', 'Đậm đà', 'Nước trong, thanh, bánh phở mềm, gia vị tinh tế'], 3, 'Phở HN: nước dùng trong, vị thanh; phở SG nước đậm, ngọt hơn.'),
    Q('Bún chả HN gồm?', ['Bún + bò', 'Bún + cá', 'Bún + chả nướng + nước chấm + rau sống', 'Bún + đậu'], 2, 'Bún chả: chả nướng (lợn) + nước mắm pha + bún + rau sống — đặc sản HN.'),
    Q('Cốm Vòng (làng Vòng, HN) làm từ?', ['Bột ngô nếp giã mịn', 'Nếp dẻo', 'Lúa non, mùa thu', 'Gạo tẻ'], 2, 'Cốm Vòng: làm từ lúa non vào mùa thu HN — biểu tượng văn hoá HN.'),
    Q('Chả cá Lã Vọng nổi tiếng từ?', ['Thế kỷ XIX, phố Chả Cá HN', 'Sau 1975', 'Pháp đem vào', 'Du nhập từ Trung Quốc thế kỷ XX'], 0, 'Chả cá Lã Vọng: gia đình họ Đoàn, phố Chả Cá (HN) từ thế kỷ XIX.'),
  ]),

  M(24, 'Hà Nội thời Cách mạng tháng Tám (1945)', [
    Q('Cách mạng tháng Tám 1945 ở HN?', ['Khởi nghĩa 19/8/1945 — giành chính quyền', '2/9/1945', '30/4/1975', '7/5/1954'], 0, '19/8/1945: Tổng khởi nghĩa giành chính quyền tại HN — bước ngoặt CMTT.'),
    Q('Người lãnh đạo khởi nghĩa HN?', ['Đại tướng Võ Nguyên Giáp chỉ huy trực tiếp', 'Võ Nguyên Giáp', 'Trường Chinh', 'Uỷ ban Khởi nghĩa do Nguyễn Khang chỉ huy'], 3, 'UB Khởi nghĩa HN do Nguyễn Khang phụ trách trực tiếp.'),
    Q('Mít-tinh ngày 19/8 ở?', ['Hồ Tây', 'Đông Anh', 'Quảng trường Nhà hát Lớn HN', 'Ba Đình'], 2, 'Mít-tinh khổng lồ ngày 19/8/1945 ở Quảng trường Nhà hát Lớn.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập?', ['19/8/1945', '30/4/1975', '2/9/1945 tại Quảng trường Ba Đình HN', '7/5/1954'], 2, '2/9/1945: Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước VNDCCH.'),
    Q('Ý nghĩa CMTT?', ['Đánh đổ chế độ thuộc địa, thành lập nước VNDCCH', 'Không có ý nghĩa', 'Chỉ địa phương', 'Thất bại'], 0, 'CMTT 1945: đánh đổ thuộc địa Pháp + phát xít Nhật, thành lập nước VNDCCH đầu tiên ĐNÁ.'),
  ]),

  M(25, 'Hà Nội trong kháng chiến chống Pháp (1946-1954)', [
    Q('Toàn quốc kháng chiến bắt đầu?', ['2/9/1945', '19/8/1945', '19/12/1946 tại HN', '7/5/1954'], 2, '19/12/1946: HCM ra lời kêu gọi Toàn quốc kháng chiến — bắt đầu KCC Pháp 9 năm.'),
    Q('Trung đoàn Thủ đô?', ['Trung đoàn 1', 'Trung đoàn 102, chiến đấu giữ HN ~60 ngày đêm', 'Tự vệ thành Hoàng Diệu', 'Quân Pháp'], 1, 'Trung đoàn Thủ đô (102) chiến đấu giữ HN 60 ngày đêm (19/12/1946 - 17/2/1947).'),
    Q('Câu khẩu hiệu nổi tiếng?', ['"Tự do hay là chết"', '"Đoàn kết"', '"Hoà bình"', '"Quyết tử để Tổ quốc quyết sinh"'], 3, '"Quyết tử để Tổ quốc quyết sinh" — Trung đoàn Thủ đô.'),
    Q('Sau 60 ngày, Trung đoàn?', ['Bị tiêu diệt', 'Rút ra ngoài bảo toàn lực lượng', 'Tiếp tục cố thủ giữ nội thành HN', 'Đầu hàng'], 1, 'Sau 60 ngày, Trung đoàn rút ra ngoại thành theo kế hoạch, bảo toàn lực lượng cho KC lâu dài.'),
    Q('HN giải phóng?', ['7/5/1954', '30/4/1975', '2/9/1945', '10/10/1954'], 3, '10/10/1954: Đoàn quân tiến vào HN — Ngày giải phóng Thủ đô.'),
  ]),

  M(26, 'Hà Nội trong kháng chiến chống Mỹ — Điện Biên Phủ trên không 1972', [
    Q('Điện Biên Phủ trên không (1972)?', ['30/4/1975', '7/5/1954', '12 ngày đêm B52 Mỹ ném bom HN', '2/9/1945'], 2, '12 ngày đêm (18-29/12/1972): Mỹ dùng B52 ném bom HN — "Linebacker II".'),
    Q('Khu vực bị ném bom nặng?', ['Long Biên', 'Tây Hồ', 'Phố Khâm Thiên, BV Bạch Mai, Yên Viên', 'Hoàn Kiếm'], 2, 'Khâm Thiên (~280 người thiệt mạng), BV Bạch Mai bị tàn phá nặng.'),
    Q('Số B52 bị bắn hạ?', ['34 B52 (chiến thắng vang dội)', '0', '100', '5'], 0, 'VN bắn hạ 34 chiếc B52 — "thần tượng bất bại" của không quân Mỹ.'),
    Q('Kết quả?', ['Mỹ thắng', 'Mỹ buộc ký Hiệp định Paris 27/1/1973', 'Tiếp tục chiến tranh', 'Hai bên ngừng bắn, giữ nguyên hiện trạng'], 1, 'Sau ĐBP trên không, Mỹ buộc ký Hiệp định Paris (27/1/1973), rút quân khỏi VN.'),
    Q('Ý nghĩa?', ['Chỉ là một trận đánh nhỏ ở ngoại thành HN', 'Thất bại', 'Chỉ địa phương', 'Đỉnh cao thắng lợi không quân, ngoại giao VN trong KC chống Mỹ'], 3, 'ĐBP trên không: thắng lợi quân sự + ngoại giao, buộc Mỹ ký Hiệp định Paris, rút quân.'),
  ]),

  M(27, 'Hà Nội — Thủ đô anh hùng', [
    Q('HN được phong "Thủ đô anh hùng"?', ['Mới đề xuất', '"Thành phố vì hoà bình" do UNESCO trao', 'Có — danh hiệu cao quý của Đảng và NN', 'Đang xét'], 2, 'HN được phong "Thủ đô anh hùng" (1999), "Thành phố vì hoà bình" (UNESCO 1999).'),
    Q('UNESCO công nhận HN?', ['Thành phố vì hoà bình (1999)', 'Di sản tự nhiên', 'Không công nhận', 'Di sản hỗn hợp'], 0, 'UNESCO 1999 công nhận HN là "Thành phố vì hoà bình" — vinh dự lớn.'),
    Q('Đặc trưng HN qua lịch sử?', ['Phục tùng', 'Kiên cường chống ngoại xâm, văn hiến', 'Tự do tuyệt đối', 'Hèn nhát'], 1, 'HN qua nhiều thời kỳ: chống xâm lược, giữ vai trò trung tâm chính trị-văn hoá-giáo dục.'),
    Q('HN ngày nay là?', ['Thành phố trực thuộc TƯ', 'Khu tự trị', 'Thủ đô nước CHXHCN VN', 'Đặc khu kinh tế trực thuộc Chính phủ'], 2, 'HN: Thủ đô nước CHXHCN VN (1976 sau thống nhất), thành phố loại đặc biệt.'),
    Q('Diện tích HN sau mở rộng 2008?', ['~500 km²', '~10000 km²', '~3344 km² (gấp 3 lần trước)', '~1000 km²'], 2, 'HN sáp nhập Hà Tây + 1 phần Vĩnh Phúc, Hoà Bình (8/2008) → ~3344 km².'),
  ]),

  M(28, 'Văn miếu - Quốc tử giám', [
    Q('Văn Miếu - Quốc tử giám xây?', ['1500', '1010', '1070 (thời Lý Thánh Tông)', '1800'], 2, 'Văn Miếu xây năm 1070, Quốc tử giám 1076 — trường đại học đầu tiên VN.'),
    Q('Văn Miếu thờ ai?', ['Mẫu Liễu Hạnh và Tam phủ', 'Khổng Tử và các bậc tiên hiền nho học', 'Phật Thích Ca và các vị Bồ Tát', 'Lão Tử'], 1, 'Văn Miếu thờ Khổng Tử và các bậc đại nho.'),
    Q('Quốc tử giám có chức năng?', ['Trường thi Hương cho các sĩ tử Bắc Kỳ', 'Trường đại học đầu tiên VN, đào tạo quan lại', 'Thư viện thuần', 'Đền thờ tổ tiên hoàng tộc nhà Lý'], 1, 'Quốc tử giám: trường ĐH đầu tiên VN, đào tạo con em vua quan và nhân tài.'),
    Q('Bia tiến sĩ có?', ['10 bia', '1000 bia', '82 bia khắc tên 1304 tiến sĩ qua các khoa thi 1442-1779', '100 bia'], 2, '82 bia tiến sĩ khắc tên 1304 vị (1442-1779) — Di sản tư liệu UNESCO 2010.'),
    Q('Ý nghĩa Văn Miếu hôm nay?', ['Chỉ là di tích cổ ít được quan tâm', 'Biểu tượng giáo dục, văn hoá HN; điểm du lịch', 'Bỏ hoang', 'Sắp phá'], 1, 'Văn Miếu: biểu tượng giáo dục-văn hoá HN, di tích quốc gia đặc biệt, điểm du lịch.'),
  ]),

  M(29, 'Hà Nội — Đô thị thông minh (Smart City)', [
    Q('Đô thị thông minh (smart city) là?', ['Đô thị nông thôn', 'Đô thị cũ', 'Đô thị ứng dụng công nghệ để nâng chất lượng sống', 'Đô thị giàu'], 2, 'Smart city: ứng dụng IoT, AI, big data… để cải thiện chất lượng dịch vụ và đời sống.'),
    Q('HN có dự án smart city?', ['Chỉ ý tưởng', 'Có — đang xây smart city Đông Anh, tích hợp công nghệ Nhật', 'Hà Đông', 'Chỉ áp dụng wifi công cộng tại phố cổ'], 1, 'HN đang xây Smart City Đông Anh (~272 ha) — hợp tác Sumitomo (Nhật) và BRG.'),
    Q('Ứng dụng smart city ở HN?', ['Chỉ giải trí', 'Chỉ áp dụng tại các toà nhà chính phủ', 'Giao thông thông minh, dịch vụ công online, camera an ninh, IoT', 'Chỉ wifi'], 2, 'HN: hệ thống giao thông thông minh, dịch vụ công online (eGov), camera AI, IoT đô thị…'),
    Q('Lợi ích smart city?', ['Tăng ùn tắc', 'Làm tăng chi phí dịch vụ công cho người dân', 'Tốn điện', 'Giảm ùn tắc, tiết kiệm năng lượng, dịch vụ tốt hơn'], 3, 'Smart city: giảm ùn tắc (giao thông thông minh), tiết kiệm năng lượng (smart grid), dịch vụ công tốt.'),
    Q('Thách thức smart city HN?', ['Đầu tư lớn, quyền riêng tư, đào tạo nhân lực', 'Không thách thức', 'Quá dễ', 'Hoàn thành rồi'], 0, 'Thách thức: vốn đầu tư rất lớn + bảo vệ quyền riêng tư + đào tạo nhân lực IT.'),
  ]),

  M(30, 'Quy hoạch và phát triển đô thị HN', [
    Q('Quy hoạch chung HN đến 2030?', ['Chỉ phố cổ', 'Giữ nguyên', 'Mở rộng, hiện đại nhưng giữ phố cổ', 'Phá phố cổ'], 2, 'QH HN đến 2030: phát triển mở rộng (vành đai), hiện đại nhưng bảo tồn phố cổ và hồ.'),
    Q('Vành đai HN?', ['Vành đai 1, 2, 2.5, 3, 3.5, 4 — phân cấp giao thông', '10 vành', '1 vành', 'Chỉ có vành đai 2 và vành đai 3'], 0, 'HN có nhiều vành đai (1-4) để phân cấp giao thông và giảm tải trung tâm.'),
    Q('Metro HN?', ['Đã có tuyến 2A (Cát Linh-Hà Đông, 2021), nhiều tuyến đang xây', 'Chưa có', 'Đã có 10 tuyến', 'Chỉ 1 tuyến'], 0, 'Metro HN: tuyến 2A Cát Linh-Hà Đông (vận hành 11/2021), tuyến 3 Nhổn-Ga HN đang xây.'),
    Q('Đô thị vệ tinh HN?', ['Sài Gòn', 'Chỉ có 2 đô thị Hoà Lạc và Sóc Sơn', 'Hoà Lạc, Sóc Sơn, Sơn Tây, Xuân Mai, Phú Xuyên', 'Hải Phòng và Bắc Ninh'], 2, 'HN có 5 đô thị vệ tinh trong quy hoạch (Hoà Lạc lớn nhất với ĐHQG, công nghệ cao).'),
    Q('Bảo tồn di sản trong phát triển?', ['Chỉ bảo tồn', 'Phá hết để xây mới', 'Không liên quan', 'Hài hoà phát triển và bảo tồn (phố cổ, hồ Hoàn Kiếm)'], 3, 'HN cần cân bằng: phát triển mới (vành đai, metro, smart city) + bảo tồn di sản (phố cổ, hồ, di tích).'),
  ]),

  M(31, 'Bảo vệ môi trường tại Hà Nội', [
    Q('Vấn đề môi trường HN?', ['Quá sạch', 'Ô nhiễm không khí (PM2.5), nước, rác thải', 'Chỉ tiếng ồn', 'Không có vấn đề'], 1, 'HN: ô nhiễm không khí cao (mùa đông PM2.5 vượt chuẩn), ô nhiễm nước sông Tô Lịch, rác thải.'),
    Q('PM2.5 là?', ['Vô hại', 'Khí CO2 thải ra từ xe máy', 'Bụi siêu mịn ≤2.5μm — gây hại sức khoẻ', 'Bụi to'], 2, 'PM2.5: bụi siêu mịn (≤2.5 micromet) đi vào phổi → bệnh hô hấp, tim mạch, ung thư.'),
    Q('Giải pháp giảm ô nhiễm không khí?', ['Phá rừng', 'Tăng xe', 'Chờ gió mùa đông bắc thổi sạch bụi', 'Giảm xe cá nhân, tăng metro/xe buýt, xe điện'], 3, 'Giải pháp: phương tiện công cộng + xe điện + cây xanh + đóng các xí nghiệp gây ô nhiễm.'),
    Q('Sông Tô Lịch hiện?', ['Nước trong, có thể tắm và câu cá', 'Đã khôi phục', 'Đã lấp', 'Ô nhiễm nặng, đang được làm sạch'], 3, 'Sông Tô Lịch ô nhiễm nặng do nước thải; nhiều dự án thử nghiệm làm sạch (Nhật, Hàn).'),
    Q('HS có thể đóng góp?', ['Không cần', 'Đi xe buýt, không xả rác, trồng cây, tuyên truyền', 'Tăng xe cá nhân', 'Vô can'], 1, 'HS: đi xe buýt/đạp, không xả rác, trồng cây, tuyên truyền gia đình & bạn bè.'),
  ]),

  M(32, 'Du lịch Hà Nội — Di sản và trải nghiệm', [
    Q('Di sản UNESCO tại HN?', ['Vịnh Hạ Long', 'Hoàng thành Thăng Long, Bia tiến sĩ Văn Miếu', 'Mỹ Sơn', 'Phong Nha'], 1, 'HN có 2 di sản UNESCO: Hoàng thành Thăng Long (2010 - di sản văn hoá), 82 bia tiến sĩ (2010 - di sản tư liệu).'),
    Q('Điểm du lịch nổi tiếng?', ['Hồ Hoàn Kiếm, phố cổ, Văn Miếu, Lăng Bác, Chùa Một Cột', 'Chỉ hồ Hoàn Kiếm', 'Chỉ phố cổ', 'Chỉ Văn Miếu'], 0, 'HN có nhiều điểm: Hồ Hoàn Kiếm, phố cổ, Văn Miếu, Lăng Bác, Chùa Một Cột, hồ Tây…'),
    Q('Phố đi bộ Hồ Gươm?', ['Suốt tuần', 'Mở 24/7 nhưng vẫn cho xe máy đi', 'Hoạt động cuối tuần, không xe cộ', 'Chỉ ngày lễ'], 2, 'Phố đi bộ quanh Hồ Gươm hoạt động cuối tuần (tối thứ 6 đến chủ nhật).'),
    Q('Du lịch HN cần?', ['Khoe khoang', 'Chỉ chụp ảnh check-in mà không tìm hiểu', 'Hiểu lịch sử, văn hoá, tôn trọng di tích', 'Vô tâm'], 2, 'Du lịch văn hoá: hiểu lịch sử + tôn trọng di tích + ứng xử văn minh.'),
    Q('Đóng góp của du lịch HN?', ['Chỉ đóng góp dưới 1% GRDP của HN', '~10% GRDP, tạo nhiều việc làm', 'Không đáng kể', 'Gây hại'], 1, 'Du lịch HN ~10% GRDP, tạo hàng trăm nghìn việc làm, quảng bá hình ảnh VN.'),
  ]),

  M(33, 'Văn hoá HN ngày nay — Giới trẻ và sáng tạo', [
    Q('Giới trẻ HN ngày nay?', ['Chỉ Tây hoá', 'Vô bản sắc', 'Năng động, hiện đại nhưng vẫn yêu văn hoá truyền thống', 'Chỉ truyền thống'], 2, 'Giới trẻ HN: kết hợp hiện đại + giữ gìn truyền thống (lễ hội, áo dài, ẩm thực).'),
    Q('Phong trào sáng tạo trẻ?', ['Chỉ tập trung học truyền thống', 'Khởi nghiệp công nghệ, nghệ thuật đường phố, fashion', 'Chỉ học', 'Sao chép'], 1, 'HN: khởi nghiệp công nghệ, nghệ thuật đường phố (graffiti, hiphop), fashion VN…'),
    Q('Áo dài HN?', ['Chỉ mặc trong các nghi lễ cung đình xưa', 'Không liên quan HN', 'Quốc phục, mặc dịp lễ, Tết, sự kiện', 'Chỉ phụ nữ già'], 2, 'Áo dài: quốc phục VN, mặc dịp lễ Tết, sự kiện trang trọng — biểu tượng văn hoá HN.'),
    Q('Lễ hội truyền thống HN?', ['Bỏ hết', 'Chỉ Tết', 'Hội Gióng, hội Đống Đa, hội chùa Hương', 'Chỉ còn duy nhất hội Đền Hùng'], 2, 'HN nhiều lễ hội: Gióng (UNESCO), Đống Đa, chùa Hương, Cổ Loa…'),
    Q('Cân bằng hội nhập và bản sắc?', ['Sùng ngoại', 'Đóng cửa', 'Bài ngoại', 'Tiếp thu tinh hoa + giữ gìn bản sắc dân tộc'], 3, 'Hội nhập đúng cách: tiếp thu tinh hoa thế giới + giữ gìn bản sắc văn hoá VN.'),
  ]),

  M(34, 'Trách nhiệm công dân HN — Xây dựng Thủ đô', [
    Q('Trách nhiệm HS HN?', ['Chỉ học', 'Chỉ chơi', 'Vô can', 'Học tốt, góp phần xây Thủ đô văn minh, hiện đại'], 3, 'HS HN: học tốt + sống văn minh + góp phần xây Thủ đô đẹp, hiện đại.'),
    Q('Hành động văn minh đô thị?', ['Không vứt rác, xếp hàng, không ồn ào, giúp người già', 'Vứt rác', 'La hét', 'Chen lấn'], 0, 'Văn minh đô thị: không xả rác, xếp hàng, giúp người yếu thế, ứng xử lịch sự.'),
    Q('Tham gia hoạt động xã hội?', ['CLB, tình nguyện, phong trào trường lớp', 'Chỉ làm khi bắt buộc', 'Khoe khoang', 'Không tham gia'], 0, 'Tham gia tích cực: CLB, tình nguyện, phong trào → rèn kỹ năng + đóng góp cộng đồng.'),
    Q('Tự hào về HN?', ['Sao chép', 'Chỉ hình thức', 'Không cần', 'Hiểu lịch sử, văn hoá, giới thiệu với bạn bè quốc tế'], 3, 'Tự hào HN: hiểu lịch sử-văn hoá, giới thiệu với bạn bè trong và ngoài nước.'),
    Q('Tầm nhìn HN đến 2030-2045?', ['Tự do tuyệt đối', 'Lạc hậu', 'Đóng cửa', 'Thủ đô xanh, văn hiến, văn minh, hiện đại'], 3, 'Tầm nhìn HN: Thủ đô xanh, văn hiến, văn minh, hiện đại — kết hợp truyền thống + hiện đại.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Pháp đánh HN lần 2 (1882) tổng đốc?', ['Hoàng Diệu', 'Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Đề Thám'], 0, '1882.'),
    Q('Đông Kinh Nghĩa Thục thành lập?', ['1907', '1885', '1908', '1900'], 0, 'HN, phố Hàng Đào.'),
    Q('Vụ Hà thành đầu độc?', ['1908', '1907', '1885', '1873'], 0, 'Liên kết Đề Thám.'),
    Q('Tác phẩm "Vang bóng một thời"?', ['Nam Cao', 'Nguyễn Tuân', 'Ngô Tất Tố', 'Thạch Lam'], 1, '1940.'),
    Q('Bia tiến sĩ Văn Miếu có?', ['82 bia', '1000', '10', '100'], 0, 'Di sản tư liệu UNESCO 2010.'),
  ]),
];

export const S8GDDP_SCENARIOS = indexBy(S8GDDP_WEEKS);
