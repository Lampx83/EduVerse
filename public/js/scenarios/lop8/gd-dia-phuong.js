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
    Q('Trước khi Pháp xâm chiếm, HN có tên?', ['Thăng Long, sau đổi Hà Nội thời Minh Mạng (1831)', 'Hà Nội từ đầu', 'Sài Gòn', 'Hoa Lư'], 0, 'Thăng Long (1010), đổi Hà Nội năm 1831 thời Minh Mạng — "nội: trong đất, hà: sông".'),
    Q('Thành HN thời Nguyễn được xây?', ['Theo kiểu Vauban (Pháp), gọn hơn Thăng Long cũ', 'Theo Trung Quốc', 'Bằng tre', 'Không có thành'], 0, 'Thành HN (1805) xây kiểu Vauban (Pháp), nhỏ gọn hơn Hoàng thành Thăng Long.'),
    Q('Vị trí thành HN cũ?', ['Khu vực Hoàng thành Thăng Long hiện nay', 'Hồ Tây', 'Long Biên', 'Đông Anh'], 0, 'Thành HN nay nằm trong khu vực Hoàng thành Thăng Long (di sản UNESCO).'),
    Q('Tổng đốc HN trước 1873?', ['Nguyễn Tri Phương', 'Hoàng Diệu', 'Nguyễn Văn Tường', 'Phan Đình Phùng'], 0, 'Nguyễn Tri Phương là Tổng đốc HN khi Pháp tấn công lần 1 (1873).'),
    Q('Kinh tế HN trước 1873?', ['Thủ công nghiệp + thương mại (36 phố phường)', 'Chỉ nông nghiệp', 'Chỉ chiến tranh', 'Hiện đại'], 0, 'HN có truyền thống thủ công + thương mại với 36 phố phường (Hàng…)'),
  ]),

  M(2, 'Pháp xâm chiếm Hà Nội lần 1 (1873) — Nguyễn Tri Phương', [
    Q('Pháp tấn công HN lần 1 năm?', ['1873', '1858', '1882', '1885'], 0, 'Pháp đánh chiếm HN lần 1 năm 1873 (Francis Garnier).'),
    Q('Người chỉ huy quân Pháp?', ['Francis Garnier', 'Henri Rivière', 'Bonard', 'Charner'], 0, 'Francis Garnier (Đại uý hải quân) chỉ huy đánh chiếm HN 1873.'),
    Q('Pháp dùng bao nhiêu quân tấn công?', ['~180 lính + tàu chiến', '10 000 quân', '50 000', 'Không có'], 0, 'Garnier chỉ có ~180 lính Pháp + 1 tàu chiến nhưng dám tấn công HN.'),
    Q('Nguyễn Tri Phương khi thành thất thủ đã?', ['Bị thương nặng, tuyệt thực mà mất', 'Đầu hàng', 'Bỏ chạy', 'Tự sát ngay'], 0, 'Nguyễn Tri Phương bị thương, bị Pháp bắt, tuyệt thực tự sát để giữ khí tiết.'),
    Q('Sau khi mất HN, hiệp ước nào?', ['Giáp Tuất 1874 — VN nhường thêm quyền cho Pháp', 'Nhâm Tuất 1862', 'Hác-măng 1883', 'Pa-tơ-nốt 1884'], 0, 'Hiệp ước Giáp Tuất (15/3/1874): VN nhường nhiều quyền lợi cho Pháp ở Bắc Kì.'),
  ]),

  M(3, 'Pháp xâm chiếm Hà Nội lần 2 (1882) — Hoàng Diệu', [
    Q('Pháp tấn công HN lần 2 năm?', ['1882', '1873', '1858', '1885'], 0, 'Pháp đánh chiếm HN lần 2 năm 1882 (Henri Rivière).'),
    Q('Người chỉ huy quân Pháp lần này?', ['Henri Rivière', 'Francis Garnier', 'Courbet', 'De Lattre'], 0, 'Đại tá Henri Rivière chỉ huy quân Pháp đánh HN lần 2.'),
    Q('Tổng đốc HN khi đó?', ['Hoàng Diệu', 'Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Phan Đình Phùng'], 0, 'Hoàng Diệu (1828–1882) là Tổng đốc HN bảo vệ thành.'),
    Q('Hoàng Diệu hành động thế nào khi thành mất?', ['Thắt cổ tự sát giữ khí tiết tại Võ Miếu', 'Bỏ chạy', 'Đầu hàng', 'Cộng tác Pháp'], 0, 'Hoàng Diệu sau khi thành thất thủ đã thắt cổ tự sát tại Võ Miếu để giữ tiết tháo.'),
    Q('Ý nghĩa cái chết Hoàng Diệu?', ['Biểu tượng kiên trung, không khuất phục', 'Hèn nhát', 'Vô ích', 'Không quan trọng'], 0, 'Cái chết của Hoàng Diệu là biểu tượng tinh thần kiên trung, bất khuất.'),
  ]),

  M(4, 'Hà Nội thời Pháp thuộc — Quy hoạch thuộc địa', [
    Q('Pháp biến HN thành?', ['Trung tâm hành chính Bắc Kỳ và Liên bang Đông Dương', 'Thủ đô', 'Cảng thuần', 'Khu nông nghiệp'], 0, 'HN: trung tâm hành chính Bắc Kỳ (Tonkin) và Liên bang Đông Dương từ 1902.'),
    Q('Khu phố Pháp được quy hoạch ở?', ['Phía nam hồ Hoàn Kiếm (khu Ba Đình, Hoàn Kiếm hiện nay)', 'Phía bắc', 'Long Biên', 'Hà Đông'], 0, 'Khu phố Pháp được quy hoạch ở phía nam hồ Hoàn Kiếm — kiểu đại lộ, biệt thự.'),
    Q('36 phố phường thuộc khu?', ['Khu phố cổ — phía bắc hồ Hoàn Kiếm', 'Phố Pháp', 'Hà Đông', 'Tây Hồ'], 0, '36 phố phường = phố cổ Hà Nội ở phía bắc hồ Hoàn Kiếm.'),
    Q('Kiến trúc Pháp tiêu biểu?', ['Nhà hát Lớn, Phủ Toàn quyền (Phủ Chủ tịch), cầu Long Biên', 'Chùa Một Cột', 'Văn Miếu', 'Lăng Vua'], 0, 'Kiến trúc Pháp: Nhà hát Lớn (1911), Phủ Toàn quyền, Cầu Long Biên (1902)…'),
    Q('Đô thị HN cuối thế kỉ XIX có gì mới?', ['Điện, nước máy, xe điện', 'Không có gì', 'Chỉ ngựa', 'Đèn dầu'], 0, 'Pháp đưa vào: điện (1900), nước máy, xe điện (1900) — hiện đại hoá đô thị.'),
  ]),

  M(5, 'Cầu Long Biên — Biểu tượng kiến trúc Pháp', [
    Q('Cầu Long Biên xây dựng?', ['1898–1902, do hãng Daydé & Pillé (Pháp) thiết kế', '1900-1950', '1945', '1920'], 0, 'Cầu Long Biên xây 1898-1902, Daydé & Pillé (Pháp) thiết kế.'),
    Q('Tên ban đầu của cầu?', ['Cầu Doumer (Paul Doumer — toàn quyền Đông Dương)', 'Cầu Long Biên', 'Cầu Hà Nội', 'Cầu Sông Hồng'], 0, 'Tên gốc: Pont Doumer (cầu Doumer), đổi tên sau 1945.'),
    Q('Cầu Long Biên dài?', ['~2290m, là cầu thép dài nhất Đông Dương khi xây xong', '500m', '5000m', '100m'], 0, 'Cầu Long Biên dài 2290m, lúc xây là cầu thép dài nhất Đông Dương.'),
    Q('Cầu Long Biên thời chiến tranh?', ['Bị Mỹ ném bom nhiều lần (1965–1972), được nối lại nhiều lần', 'Không bị bom', 'Bị Pháp phá', 'Tự nhiên hỏng'], 0, 'Cầu Long Biên là mục tiêu chiến lược, bị Mỹ ném bom nặng nề 1965–1972.'),
    Q('Ý nghĩa Cầu Long Biên hiện nay?', ['Di sản kiến trúc, biểu tượng HN, gắn lịch sử dân tộc', 'Vô nghĩa', 'Chỉ giao thông', 'Sắp phá bỏ'], 0, 'Cầu Long Biên: di sản kiến trúc + biểu tượng HN + chứng nhân lịch sử (Pháp thuộc, KCN, chống Mỹ).'),
  ]),

  M(6, 'Nhà hát Lớn Hà Nội', [
    Q('Nhà hát Lớn HN xây?', ['1901–1911, kiến trúc Pháp', '1800', '1945', '1990'], 0, 'Nhà hát Lớn HN xây 1901-1911, kiến trúc Pháp tân cổ điển.'),
    Q('Mô hình của Nhà hát Lớn?', ['Mô phỏng Opéra Garnier (Paris)', 'Tự do', 'Trung Quốc', 'VN truyền thống'], 0, 'Mô phỏng Opéra Garnier (Paris) — nhà hát opera nổi tiếng nhất thế giới.'),
    Q('Sức chứa Nhà hát Lớn?', ['~600 ghế (đã sửa lại)', '5000', '10', '100'], 0, '~600 ghế sau khi sửa chữa.'),
    Q('Sự kiện quan trọng tại Nhà hát Lớn?', ['Quốc hội đầu tiên VN họp 1946', 'Đại hội Đảng', 'Cách mạng Tháng Tám', 'Thành lập Hội Nhà văn'], 0, 'Quốc hội Khoá I VN khai mạc tại Nhà hát Lớn ngày 2/3/1946.'),
    Q('Ý nghĩa kiến trúc Nhà hát Lớn?', ['Biểu tượng văn hoá nghệ thuật HN', 'Vô nghĩa', 'Lạc hậu', 'Sắp phá bỏ'], 0, 'Nhà hát Lớn: biểu tượng nghệ thuật, văn hoá HN; trung tâm biểu diễn classic.'),
  ]),

  M(7, 'Phong trào yêu nước đầu XX tại Hà Nội — Đông Du', [
    Q('Phong trào Đông Du (1905-1908) khởi xướng bởi?', ['Phan Bội Châu', 'Phan Châu Trinh', 'Nguyễn Thái Học', 'Hồ Chí Minh'], 0, 'Phan Bội Châu (1867-1940) khởi xướng phong trào Đông Du, đưa thanh niên VN sang Nhật học.'),
    Q('Mục đích Đông Du?', ['Đưa thanh niên sang Nhật học, chuẩn bị giành độc lập', 'Đi du lịch', 'Định cư', 'Buôn bán'], 0, 'Đông Du: đưa thanh niên sang Nhật học để chuẩn bị lực lượng giành độc lập.'),
    Q('HN trong phong trào Đông Du?', ['Là một trong các trung tâm tuyển chọn, vận động', 'Không tham gia', 'Phản đối', 'Trung lập'], 0, 'HN là một trong các trung tâm vận động đưa thanh niên Đông Du.'),
    Q('Số thanh niên Đông Du?', ['~200 người', '10', '10 000', '1'], 0, '~200 thanh niên VN sang Nhật học theo phong trào Đông Du.'),
    Q('Phong trào kết thúc vì?', ['Pháp-Nhật thoả thuận trục xuất, 1909', 'Tự kết thúc', 'Thắng lợi', 'Thanh niên không học được'], 0, 'Pháp ký với Nhật, Nhật trục xuất thanh niên VN (1909), kết thúc Đông Du.'),
  ]),

  M(8, 'Đông Kinh Nghĩa Thục tại Hà Nội (1907)', [
    Q('Đông Kinh Nghĩa Thục thành lập?', ['1907 tại Hà Nội (phố Hàng Đào)', '1900 tại Sài Gòn', '1920', '1885'], 0, 'Đông Kinh Nghĩa Thục (3/1907) tại phố Hàng Đào, HN — Đông Kinh = HN, Nghĩa Thục = trường nghĩa.'),
    Q('Người sáng lập?', ['Lương Văn Can, Nguyễn Quyền và các nhà yêu nước', 'Phan Bội Châu', 'Hồ Chí Minh', 'Nguyễn Thái Học'], 0, 'Lương Văn Can, Nguyễn Quyền, Đào Nguyên Phổ, Hoàng Tăng Bí… sáng lập.'),
    Q('Mục đích?', ['Dạy chữ Quốc ngữ, kiến thức mới, đề cao tinh thần yêu nước', 'Dạy chữ Hán', 'Chỉ dạy nông nghiệp', 'Tuyên truyền Pháp'], 0, 'Đông Kinh Nghĩa Thục: dạy chữ Quốc ngữ, kiến thức khoa học, tinh thần yêu nước, cải cách XH.'),
    Q('Đông Kinh Nghĩa Thục bị?', ['Pháp giải tán cuối 1907', 'Tự đóng', 'Phát triển mạnh', 'Trở thành đại học'], 0, 'Pháp lo sợ ảnh hưởng nên đóng cửa cuối 1907, bắt giam các nhà sáng lập.'),
    Q('Ý nghĩa lịch sử?', ['Mở đầu phong trào canh tân giáo dục, văn hoá VN', 'Không có ý nghĩa', 'Chỉ địa phương', 'Thất bại hoàn toàn'], 0, 'Đông Kinh Nghĩa Thục là mở đầu phong trào canh tân giáo dục, văn hoá theo hướng mới ở VN.'),
  ]),

  M(9, 'Phong trào duy tân tại Hà Nội — Phan Châu Trinh', [
    Q('Phan Châu Trinh (1872-1926) chủ trương?', ['"Khai dân trí, chấn dân khí, hậu dân sinh" — cải cách ôn hoà', 'Bạo động', 'Trung lập', 'Phục cổ'], 0, 'Phan Châu Trinh: 3 chủ trương "Khai dân trí, chấn dân khí, hậu dân sinh".'),
    Q('Phương pháp Phan Châu Trinh?', ['Ôn hoà, dựa Pháp để duy tân', 'Vũ trang', 'Khởi nghĩa', 'Bí mật'], 0, 'PCT chủ trương ôn hoà, dựa Pháp để cải cách dân trí, không dùng vũ lực.'),
    Q('Khác biệt PCT và PBC?', ['PCT: ôn hoà duy tân; PBC: bạo động Đông Du', 'Giống nhau', 'PCT bạo động', 'PBC ôn hoà'], 0, 'PCT: ôn hoà duy tân, dựa Pháp; PBC: bạo động vũ trang, Đông Du sang Nhật.'),
    Q('Ảnh hưởng PCT đến HN?', ['Truyền cảm hứng phong trào duy tân, cải cách văn hoá', 'Không ảnh hưởng', 'Tiêu cực', 'Bị cấm hoàn toàn'], 0, 'PCT truyền cảm hứng nhiều phong trào cải cách văn hoá-giáo dục ở HN và toàn quốc.'),
    Q('Lễ tang Phan Châu Trinh (1926) tại?', ['Sài Gòn, sau lan rộng cả nước, gồm HN', 'HN', 'Huế', 'Hải Phòng'], 0, 'Lễ tang PCT (1926) ở SG, lan rộng cả nước thành phong trào yêu nước lớn.'),
  ]),

  M(10, 'Vụ Hà thành đầu độc (1908)', [
    Q('Vụ Hà thành đầu độc xảy ra năm?', ['1908', '1885', '1907', '1920'], 0, 'Vụ Hà thành đầu độc xảy ra ngày 27/6/1908.'),
    Q('Mục đích vụ đầu độc?', ['Đánh úp lính Pháp đồn HN, kết hợp khởi nghĩa Yên Thế', 'Trả thù cá nhân', 'Vô tình', 'Cướp tài sản'], 0, 'Vụ Hà thành đầu độc: kế hoạch đánh úp lính Pháp đồn HN, phối hợp khởi nghĩa Yên Thế.'),
    Q('Người chỉ huy?', ['Đầu bếp Việt trong đồn binh Pháp, liên kết Đề Thám', 'Vua Hàm Nghi', 'Phan Bội Châu', 'Hoàng Diệu'], 0, 'Đầu bếp Việt trong đồn lính Pháp được Đề Thám liên kết, lên kế hoạch đầu độc thức ăn.'),
    Q('Phương pháp?', ['Đầu độc thức ăn của lính Pháp', 'Tấn công trực diện', 'Bao vây', 'Đánh bom'], 0, 'Đầu độc bằng bã hoa hòe trong thức ăn lính Pháp.'),
    Q('Kết quả vụ Hà thành đầu độc?', ['Thất bại, nhiều người bị tử hình', 'Thắng lợi', 'Pháp bỏ HN', 'Không có ai chết'], 0, 'Kế hoạch bị lộ, Pháp phát hiện, nhiều người bị bắt và tử hình. Khởi nghĩa thất bại.'),
  ]),

  M(11, 'Khu phố cổ Hà Nội — 36 phố phường', [
    Q('36 phố phường HN có từ?', ['Thời Lý-Trần, phát triển mạnh thời Lê-Nguyễn', 'Thời Pháp thuộc', 'Sau 1945', '2000'], 0, '36 phố phường có từ thời Lý-Trần, phát triển mạnh thời Lê-Nguyễn (XVII-XIX).'),
    Q('Tên các phố bắt đầu bằng?', ['"Hàng" + sản phẩm bán (Hàng Mã, Hàng Đào…)', 'Tên người', 'Số', 'Tên hoa'], 0, 'Tên phố cổ HN: "Hàng" + sản phẩm chính (Hàng Mã, Hàng Đào, Hàng Đồng, Hàng Bạc…).'),
    Q('Phố Hàng Đào nổi tiếng về?', ['Vải, lụa, áo (đào = đỏ, màu của vải nhuộm)', 'Bán hoa đào', 'Đào quả', 'Tên người'], 0, 'Hàng Đào: phố bán vải nhuộm đỏ (đào). Trung tâm thương mại lụa-vải xưa.'),
    Q('Phố Hàng Bạc nổi tiếng về?', ['Nghề kim hoàn, đúc bạc', 'Bán bạc', 'Ngân hàng', 'Trang sức nhập'], 0, 'Hàng Bạc: nghề kim hoàn truyền thống, đúc bạc, làm trang sức.'),
    Q('Phố cổ HN có đặc trưng kiến trúc?', ['Nhà ống dài, có sân trong, cao 2-3 tầng', 'Biệt thự lớn', 'Nhà cao tầng', 'Lều'], 0, 'Nhà phố cổ: dạng "ống" dài hẹp (do thuế tính theo mặt tiền), 2-3 tầng, có sân trong.'),
  ]),

  M(12, 'Văn hoá Hà Nội — Thạch Lam và "Hà Nội 36 phố phường"', [
    Q('Thạch Lam (1910–1942) là?', ['Nhà văn nhóm Tự Lực Văn Đoàn', 'Họa sĩ', 'Nhạc sĩ', 'Chính trị gia'], 0, 'Thạch Lam: nhà văn, em ruột Nhất Linh và Hoàng Đạo, nhóm Tự Lực Văn Đoàn.'),
    Q('"Hà Nội 36 phố phường" của Thạch Lam?', ['Tập ký sự về phố cổ, ẩm thực, văn hoá HN', 'Tiểu thuyết tình yêu', 'Hồi ký chiến tranh', 'Tập thơ'], 0, '"Hà Nội 36 phố phường" (1943) — tập ký sự nổi tiếng về phố cổ, ẩm thực, văn hoá HN.'),
    Q('Phong cách văn Thạch Lam?', ['Nhẹ nhàng, tinh tế, đầy cảm xúc', 'Mạnh mẽ', 'Hung hãn', 'Khô khan'], 0, 'Thạch Lam: văn nhẹ nhàng, tinh tế, lãng mạn, đầy cảm xúc về HN xưa.'),
    Q('Đặc sản HN qua bút Thạch Lam?', ['Phở, bún chả, cốm Vòng, chả cá Lã Vọng, kem que', 'Bánh đậu xanh', 'Bún bò Huế', 'Hủ tiếu'], 0, 'Thạch Lam viết về phở, bún chả, cốm Vòng, chả cá Lã Vọng… đặc sản HN.'),
    Q('Ý nghĩa tác phẩm?', ['Lưu giữ ký ức văn hoá HN xưa, gợi tình yêu HN', 'Vô nghĩa', 'Sai lịch sử', 'Không quan trọng'], 0, '"36 phố phường" là tài liệu vô giá lưu ký ức văn hoá HN cuối thời Pháp.'),
  ]),

  M(13, 'Văn hoá Hà Nội — Nguyễn Tuân và "Vang bóng một thời"', [
    Q('Nguyễn Tuân (1910–1987) là?', ['Nhà văn, nhà tuỳ bút bậc thầy VN', 'Họa sĩ', 'Nhạc sĩ', 'Chính trị gia'], 0, 'Nguyễn Tuân: nhà văn lừng danh, bậc thầy tuỳ bút (essay) của VN.'),
    Q('"Vang bóng một thời" (1940) là?', ['Tập truyện ngắn về thú chơi tao nhã của trí thức xưa', 'Hồi ký', 'Tiểu thuyết', 'Thơ'], 0, '"Vang bóng một thời" — tập truyện ngắn ca ngợi thú chơi tao nhã (uống trà, ngâm thơ, chơi cây…) của các nhà nho.'),
    Q('Phong cách Nguyễn Tuân?', ['Tài hoa, độc đáo, ngôn ngữ tinh tế, am tường', 'Khô khan', 'Sao chép', 'Đơn giản'], 0, 'Nguyễn Tuân: phong cách tài hoa, độc đáo, ngôn từ tinh tế, am tường nhiều lĩnh vực.'),
    Q('Tác phẩm khác của Nguyễn Tuân?', ['Người lái đò sông Đà, Sông Đà, Chùa Đàn', 'Số đỏ', 'Tắt đèn', 'Lão Hạc'], 0, '"Người lái đò sông Đà", "Sông Đà", "Chùa Đàn" — các tuỳ bút nổi tiếng của Nguyễn Tuân.'),
    Q('Đóng góp Nguyễn Tuân với HN?', ['Lưu giữ văn hoá tinh thần HN xưa, làm phong phú văn học VN', 'Không liên quan HN', 'Tiêu cực', 'Vô nghĩa'], 0, 'Nguyễn Tuân lưu giữ tinh hoa văn hoá HN xưa, là cây bút tuỳ bút bậc thầy của VHVN hiện đại.'),
  ]),

  M(14, 'Làng nghề truyền thống Hà Nội — Lụa Vạn Phúc', [
    Q('Làng lụa Vạn Phúc thuộc?', ['Quận Hà Đông, HN — có lịch sử >1000 năm', 'Quận Ba Đình', 'Đông Anh', 'Sóc Sơn'], 0, 'Làng lụa Vạn Phúc (Hà Đông, HN) — làng nghề lụa nổi tiếng >1000 năm.'),
    Q('Đặc sản Vạn Phúc?', ['Lụa Hà Đông (Hà Đông silk)', 'Bánh tráng', 'Đồng', 'Sứ'], 0, 'Lụa Hà Đông (Vạn Phúc silk) nổi tiếng trong và ngoài nước.'),
    Q('Quy trình dệt lụa truyền thống?', ['Nuôi tằm → kéo tơ → dệt → nhuộm', 'Chỉ dệt', 'Nhập tơ', 'Chỉ nhuộm'], 0, 'Quy trình hoàn chỉnh: nuôi tằm → quay tơ → dệt vải → nhuộm/in hoa.'),
    Q('Đặc trưng lụa Vạn Phúc?', ['Mềm, mượt, hoa văn truyền thống, bền', 'Cứng', 'Thô', 'Không có hoa văn'], 0, 'Lụa Vạn Phúc: mềm mượt, hoa văn cổ truyền (hoa, chim, rồng…), bền màu.'),
    Q('Thách thức làng nghề ngày nay?', ['Cạnh tranh hàng nhập, mất truyền nghề thế hệ trẻ', 'Phát triển mạnh', 'Không có vấn đề', 'Dễ dàng'], 0, 'Làng nghề gặp khó: cạnh tranh hàng nhập rẻ, thanh niên không học nghề, chi phí cao.'),
  ]),

  M(15, 'Làng nghề truyền thống — Gốm Bát Tràng', [
    Q('Làng gốm Bát Tràng thuộc?', ['Huyện Gia Lâm, HN — bên sông Hồng', 'Tây Hồ', 'Long Biên', 'Hoài Đức'], 0, 'Làng gốm Bát Tràng ở Gia Lâm, HN — bên sông Hồng.'),
    Q('Lịch sử Bát Tràng?', ['Có từ thời Lý (XI), nay đã ~1000 năm', 'Thế kỷ XIX', 'Sau 1945', 'Mới'], 0, 'Bát Tràng có truyền thống ~1000 năm, từ thời Lý — Trần.'),
    Q('Đặc sản Bát Tràng?', ['Gốm sứ men trắng, xanh lam, hoạ tiết tinh tế', 'Gỗ', 'Vải', 'Kim loại'], 0, 'Bát Tràng nổi tiếng: gốm sứ men trắng, hoa lam (xanh dương), hoạ tiết tinh tế.'),
    Q('Quy trình làm gốm?', ['Lọc đất → tạo hình → tráng men → nung', 'Chỉ nung', 'Chỉ tạo hình', 'Mua bán'], 0, 'Quy trình: lọc đất sét → tạo hình (bàn xoay) → phơi → tráng men → nung (~1300°C).'),
    Q('Bát Tràng hôm nay?', ['Vừa giữ truyền thống vừa hiện đại hoá, du lịch', 'Bỏ nghề', 'Chỉ làm hiện đại', 'Chỉ làm cổ'], 0, 'Bát Tràng: giữ nghề truyền thống + hiện đại hoá + phát triển du lịch trải nghiệm.'),
  ]),

  M(16, 'Làng nghề truyền thống — Đúc đồng Ngũ Xã', [
    Q('Làng Ngũ Xã thuộc?', ['Phường Trúc Bạch, Ba Đình, HN', 'Hà Đông', 'Long Biên', 'Sóc Sơn'], 0, 'Làng Ngũ Xã ở phường Trúc Bạch, Ba Đình, ven hồ Trúc Bạch.'),
    Q('Nghề truyền thống Ngũ Xã?', ['Đúc đồng (chuông, tượng, đỉnh)', 'Gốm', 'Lụa', 'Bánh'], 0, 'Ngũ Xã chuyên đúc đồng: chuông chùa, tượng Phật, đỉnh thờ…'),
    Q('Lịch sử Ngũ Xã?', ['Từ thời Lê, ~thế kỷ XVII', 'Mới', 'Thời Pháp', 'Sau 1945'], 0, 'Làng Ngũ Xã có lịch sử ~thế kỷ XVII (thời Lê), do 5 xã hợp lại nên có tên Ngũ Xã.'),
    Q('Tượng đồng nổi tiếng?', ['Tượng A-di-đà chùa Thần Quang (4m, 14 tấn)', 'Tượng Bác Hồ', 'Tượng Trần Hưng Đạo', 'Không có'], 0, 'Tượng Phật A-di-đà chùa Thần Quang (Ngũ Xã) cao 4m, nặng 14 tấn — kiệt tác đúc đồng VN.'),
    Q('Hiện trạng làng nghề?', ['Số thợ ít, cần bảo tồn', 'Phát triển mạnh', 'Bỏ nghề hoàn toàn', 'Hiện đại hoá hoàn toàn'], 0, 'Số nghệ nhân Ngũ Xã ngày càng ít, cần bảo tồn để giữ nghề truyền thống.'),
  ]),

  M(17, 'Nông nghiệp đô thị tại Hà Nội', [
    Q('Nông nghiệp đô thị (urban agriculture) là?', ['Trồng cây-rau-hoa trong đô thị', 'Nông thôn xa', 'Công nghiệp', 'Du lịch'], 0, 'Urban agriculture: trồng cây/rau/hoa trong và quanh đô thị.'),
    Q('HN có làng nghề trồng?', ['Hoa Tây Hồ, đào Nhật Tân, quất Tứ Liên', 'Chỉ lúa', 'Không có', 'Chỉ rau'], 0, 'HN nổi tiếng: làng hoa Tây Hồ, đào Nhật Tân (Tết), quất cảnh Tứ Liên.'),
    Q('Lợi ích nông nghiệp đô thị?', ['Cung cấp thực phẩm tươi, làm xanh đô thị, du lịch', 'Vô ích', 'Lãng phí đất', 'Tốn nước'], 0, 'Lợi ích: thực phẩm tươi, xanh đô thị (giảm nhiệt, CO2), du lịch sinh thái.'),
    Q('Thách thức?', ['Đô thị hoá, mất đất, ô nhiễm', 'Không thách thức', 'Quá nhiều đất', 'Dễ dàng'], 0, 'Thách thức: đô thị hoá lấn đất nông nghiệp, ô nhiễm không khí-đất-nước.'),
    Q('Đào Nhật Tân nổi tiếng vào?', ['Tết Nguyên Đán', 'Tết Trung thu', 'Hè', 'Tết Tây'], 0, 'Đào Nhật Tân (Tây Hồ, HN) nổi tiếng dịp Tết Nguyên Đán — biểu tượng Tết HN.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('Pháp đánh HN lần 1?', ['1873 (Garnier)', '1882', '1858', '1885'], 0, 'Garnier.'),
    Q('Tổng đốc HN khi mất 1882?', ['Hoàng Diệu', 'Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Phan Đình Phùng'], 0, 'Hoàng Diệu tuẫn tiết.'),
    Q('Cầu Long Biên xây?', ['1898-1902', '1945', '1900', '1882'], 0, 'Pont Doumer.'),
    Q('Thạch Lam viết tác phẩm?', ['Hà Nội 36 phố phường', 'Vang bóng một thời', 'Số đỏ', 'Tắt đèn'], 0, 'Ký sự HN.'),
    Q('Làng lụa nổi tiếng HN?', ['Vạn Phúc', 'Bát Tràng', 'Ngũ Xã', 'Nhật Tân'], 0, 'Hà Đông.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Phong trào Cần Vương tại Hà Nội và Bắc Bộ', [
    Q('Phong trào Cần Vương (1885-1896) do?', ['Tôn Thất Thuyết và vua Hàm Nghi khởi xướng', 'Phan Bội Châu', 'Hồ Chí Minh', 'Nguyễn Tri Phương'], 0, 'Cần Vương: Tôn Thất Thuyết soạn chiếu, vua Hàm Nghi ban (13/7/1885).'),
    Q('Ý nghĩa "Cần Vương"?', ['Phò vua, cứu nước', 'Phế vua', 'Trung lập', 'Theo Pháp'], 0, 'Cần Vương = "phò vua cứu nước" — kêu gọi toàn dân chống Pháp giành lại độc lập.'),
    Q('Phạm vi phong trào?', ['Toàn quốc, nhất là Trung-Bắc Bộ', 'Chỉ Nam Bộ', 'Chỉ HN', 'Chỉ Huế'], 0, 'Cần Vương lan rộng toàn quốc nhưng mạnh nhất ở Trung-Bắc Bộ.'),
    Q('Khởi nghĩa Cần Vương lớn nhất Bắc Bộ?', ['Bãi Sậy (Hưng Yên), Ba Đình (Thanh Hoá)', 'Yên Thế', 'Khởi nghĩa Phan Bội Châu', 'Đông Du'], 0, 'Bắc Bộ: Bãi Sậy (Nguyễn Thiện Thuật, 1883-1892), Ba Đình (Đinh Công Tráng, 1886-1887).'),
    Q('Phong trào Cần Vương kết thúc?', ['1896, khi Phan Đình Phùng mất', '1885', '1900', '1945'], 0, 'Cần Vương kết thúc ~1896 khi khởi nghĩa Hương Khê (Phan Đình Phùng) bị dập tắt.'),
  ]),

  M(20, 'Khởi nghĩa Yên Thế (1884-1913) — Đề Thám', [
    Q('Khởi nghĩa Yên Thế (Bắc Giang) do?', ['Hoàng Hoa Thám (Đề Thám)', 'Phan Đình Phùng', 'Tôn Thất Thuyết', 'Nguyễn Tri Phương'], 0, 'Hoàng Hoa Thám (Đề Thám) — "hùm thiêng Yên Thế" — lãnh đạo khởi nghĩa.'),
    Q('Thời gian khởi nghĩa?', ['1884-1913 (29 năm — dài nhất chống Pháp)', '5 năm', '10 năm', '50 năm'], 0, '29 năm là cuộc kháng chiến chống Pháp dài nhất trong lịch sử cận đại VN.'),
    Q('Đề Thám có quan hệ với HN?', ['Liên kết với vụ Hà thành đầu độc (1908)', 'Không liên quan', 'Đánh HN', 'Ở HN'], 0, 'Đề Thám liên kết với vụ Hà thành đầu độc 1908 — kế hoạch phối hợp khởi nghĩa.'),
    Q('Tính chất khởi nghĩa Yên Thế?', ['Khởi nghĩa nông dân tự phát, sau liên kết Cần Vương', 'Phong kiến', 'Tôn giáo', 'Quân chính quy'], 0, 'Khởi nghĩa nông dân tự phát từ Yên Thế (Bắc Giang), sau liên kết phong trào yêu nước.'),
    Q('Đề Thám hy sinh?', ['1913, do bị phản bội', '1900', '1908', '1885'], 0, 'Đề Thám bị phản bội và sát hại năm 1913, kết thúc khởi nghĩa Yên Thế.'),
  ]),

  M(21, 'Chính sách khai thác thuộc địa Pháp tại HN (1897-1914)', [
    Q('Pháp khai thác thuộc địa lần 1?', ['1897-1914', '1858-1873', '1945-1954', '1882-1885'], 0, 'Khai thác thuộc địa lần 1: 1897-1914 (toàn quyền Paul Doumer khởi xướng).'),
    Q('Mục đích khai thác thuộc địa?', ['Bóc lột tài nguyên, thị trường, nhân công cho Pháp', 'Phát triển VN', 'Hỗ trợ VN', 'Trung lập'], 0, 'Mục đích duy nhất: bóc lột tài nguyên, biến VN thành thị trường và nguồn nhân công cho Pháp.'),
    Q('Tại HN, Pháp đầu tư?', ['Hạ tầng giao thông (đường, cầu, xe lửa), điện, nước', 'Xí nghiệp lớn', 'Trường đại học', 'Bệnh viện đẳng cấp'], 0, 'Pháp đầu tư hạ tầng (cầu, đường, xe lửa, điện) để phục vụ khai thác — không phải phát triển VN.'),
    Q('Công nghiệp Pháp tại HN?', ['Chế biến (rượu, thuốc lá, dệt)', 'Cơ khí nặng', 'Đóng tàu', 'Vũ khí'], 0, 'Pháp tập trung công nghiệp nhẹ chế biến — không cho VN làm công nghiệp nặng.'),
    Q('Hậu quả khai thác thuộc địa?', ['VN trở thành nước nông nghiệp lạc hậu, phụ thuộc Pháp', 'Phát triển hiện đại', 'Độc lập', 'Hạnh phúc'], 0, 'VN trở thành nước nông nghiệp lạc hậu, phụ thuộc Pháp về kinh tế-chính trị.'),
  ]),

  M(22, 'Nguyễn Tất Thành ra đi tìm đường cứu nước', [
    Q('Nguyễn Tất Thành (1890-1969) sinh tại?', ['Nghệ An, từng học tại HN', 'HN', 'Huế', 'Sài Gòn'], 0, 'Nguyễn Tất Thành sinh tại Nghệ An (Nam Đàn), học một thời gian tại HN.'),
    Q('Người ra đi tìm đường cứu nước?', ['5/6/1911 từ bến Nhà Rồng (SG)', '2/9/1945', '19/8/1945', '7/5/1954'], 0, '5/6/1911: Nguyễn Tất Thành rời bến Nhà Rồng (Sài Gòn) trên tàu Amiral Latouche-Tréville.'),
    Q('Đến Pháp năm?', ['1911', '1920', '1930', '1941'], 0, '1911 đến Marseille (Pháp), bắt đầu hành trình tìm đường cứu nước.'),
    Q('Trở thành thành viên ĐCS Pháp?', ['1920 tại Đại hội Tours', '1911', '1930', '1945'], 0, '12/1920 tại Đại hội Tours, Nguyễn Ái Quốc tham gia sáng lập ĐCS Pháp — bước ngoặt đến với CN Mác-Lê.'),
    Q('Người trở về VN trực tiếp lãnh đạo?', ['1941 — về Pác Bó (Cao Bằng)', '1911', '1920', '1945'], 0, '1941: HCM về Pác Bó (Cao Bằng), trực tiếp lãnh đạo CMVN.'),
  ]),

  M(23, 'Văn hoá Hà Nội — Ẩm thực truyền thống', [
    Q('Phở HN có nguồn gốc?', ['Cuối XIX - đầu XX, có thể từ Nam Định', 'Trung Quốc', 'Pháp', 'Sau 1975'], 0, 'Phở: ra đời cuối XIX - đầu XX, có giả thuyết từ Nam Định, phát triển mạnh ở HN.'),
    Q('Phở HN đặc trưng?', ['Nước trong, thanh, bánh phở mềm, gia vị tinh tế', 'Đậm đà', 'Cay', 'Ngọt'], 0, 'Phở HN: nước dùng trong, vị thanh; phở SG nước đậm, ngọt hơn.'),
    Q('Bún chả HN gồm?', ['Bún + chả nướng + nước chấm + rau sống', 'Bún + bò', 'Bún + cá', 'Bún + đậu'], 0, 'Bún chả: chả nướng (lợn) + nước mắm pha + bún + rau sống — đặc sản HN.'),
    Q('Cốm Vòng (làng Vòng, HN) làm từ?', ['Lúa non, mùa thu', 'Nếp dẻo', 'Gạo tẻ', 'Bắp'], 0, 'Cốm Vòng: làm từ lúa non vào mùa thu HN — biểu tượng văn hoá HN.'),
    Q('Chả cá Lã Vọng nổi tiếng từ?', ['Thế kỷ XIX, phố Chả Cá HN', 'Pháp đem vào', 'Mới', 'Sau 1975'], 0, 'Chả cá Lã Vọng: gia đình họ Đoàn, phố Chả Cá (HN) từ thế kỷ XIX.'),
  ]),

  M(24, 'Hà Nội thời Cách mạng tháng Tám (1945)', [
    Q('Cách mạng tháng Tám 1945 ở HN?', ['Khởi nghĩa 19/8/1945 — giành chính quyền', '2/9/1945', '7/5/1954', '30/4/1975'], 0, '19/8/1945: Tổng khởi nghĩa giành chính quyền tại HN — bước ngoặt CMTT.'),
    Q('Người lãnh đạo khởi nghĩa HN?', ['Uỷ ban Khởi nghĩa do Nguyễn Khang chỉ huy', 'HCM', 'Võ Nguyên Giáp', 'Trường Chinh'], 0, 'UB Khởi nghĩa HN do Nguyễn Khang phụ trách trực tiếp.'),
    Q('Mít-tinh ngày 19/8 ở?', ['Quảng trường Nhà hát Lớn HN', 'Ba Đình', 'Hồ Tây', 'Đông Anh'], 0, 'Mít-tinh khổng lồ ngày 19/8/1945 ở Quảng trường Nhà hát Lớn.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập?', ['2/9/1945 tại Quảng trường Ba Đình HN', '19/8/1945', '7/5/1954', '30/4/1975'], 0, '2/9/1945: Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước VNDCCH.'),
    Q('Ý nghĩa CMTT?', ['Đánh đổ chế độ thuộc địa, thành lập nước VNDCCH', 'Không có ý nghĩa', 'Chỉ địa phương', 'Thất bại'], 0, 'CMTT 1945: đánh đổ thuộc địa Pháp + phát xít Nhật, thành lập nước VNDCCH đầu tiên ĐNÁ.'),
  ]),

  M(25, 'Hà Nội trong kháng chiến chống Pháp (1946-1954)', [
    Q('Toàn quốc kháng chiến bắt đầu?', ['19/12/1946 tại HN', '2/9/1945', '7/5/1954', '19/8/1945'], 0, '19/12/1946: HCM ra lời kêu gọi Toàn quốc kháng chiến — bắt đầu KCC Pháp 9 năm.'),
    Q('Trung đoàn Thủ đô?', ['Trung đoàn 102, chiến đấu giữ HN ~60 ngày đêm', 'Trung đoàn 1', 'Tự vệ', 'Quân Pháp'], 0, 'Trung đoàn Thủ đô (102) chiến đấu giữ HN 60 ngày đêm (19/12/1946 - 17/2/1947).'),
    Q('Câu khẩu hiệu nổi tiếng?', ['"Quyết tử để Tổ quốc quyết sinh"', '"Tự do hay là chết"', '"Đoàn kết"', '"Hoà bình"'], 0, '"Quyết tử để Tổ quốc quyết sinh" — Trung đoàn Thủ đô.'),
    Q('Sau 60 ngày, Trung đoàn?', ['Rút ra ngoài bảo toàn lực lượng', 'Đầu hàng', 'Bị tiêu diệt', 'Ở lại'], 0, 'Sau 60 ngày, Trung đoàn rút ra ngoại thành theo kế hoạch, bảo toàn lực lượng cho KC lâu dài.'),
    Q('HN giải phóng?', ['10/10/1954', '7/5/1954', '2/9/1945', '30/4/1975'], 0, '10/10/1954: Đoàn quân tiến vào HN — Ngày giải phóng Thủ đô.'),
  ]),

  M(26, 'Hà Nội trong kháng chiến chống Mỹ — Điện Biên Phủ trên không 1972', [
    Q('Điện Biên Phủ trên không (1972)?', ['12 ngày đêm B52 Mỹ ném bom HN', '7/5/1954', '30/4/1975', '2/9/1945'], 0, '12 ngày đêm (18-29/12/1972): Mỹ dùng B52 ném bom HN — "Linebacker II".'),
    Q('Khu vực bị ném bom nặng?', ['Phố Khâm Thiên, BV Bạch Mai, Yên Viên', 'Tây Hồ', 'Hoàn Kiếm', 'Long Biên'], 0, 'Khâm Thiên (~280 người thiệt mạng), BV Bạch Mai bị tàn phá nặng.'),
    Q('Số B52 bị bắn hạ?', ['34 B52 (chiến thắng vang dội)', '0', '100', '5'], 0, 'VN bắn hạ 34 chiếc B52 — "thần tượng bất bại" của không quân Mỹ.'),
    Q('Kết quả?', ['Mỹ buộc ký Hiệp định Paris 27/1/1973', 'Mỹ thắng', 'Hoà', 'Tiếp tục chiến tranh'], 0, 'Sau ĐBP trên không, Mỹ buộc ký Hiệp định Paris (27/1/1973), rút quân khỏi VN.'),
    Q('Ý nghĩa?', ['Đỉnh cao thắng lợi không quân, ngoại giao VN trong KC chống Mỹ', 'Không quan trọng', 'Chỉ địa phương', 'Thất bại'], 0, 'ĐBP trên không: thắng lợi quân sự + ngoại giao, buộc Mỹ ký Hiệp định Paris, rút quân.'),
  ]),

  M(27, 'Hà Nội — Thủ đô anh hùng', [
    Q('HN được phong "Thủ đô anh hùng"?', ['Có — danh hiệu cao quý của Đảng và NN', 'Không', 'Mới đề xuất', 'Đang xét'], 0, 'HN được phong "Thủ đô anh hùng" (1999), "Thành phố vì hoà bình" (UNESCO 1999).'),
    Q('UNESCO công nhận HN?', ['Thành phố vì hoà bình (1999)', 'Di sản tự nhiên', 'Di sản hỗn hợp', 'Không công nhận'], 0, 'UNESCO 1999 công nhận HN là "Thành phố vì hoà bình" — vinh dự lớn.'),
    Q('Đặc trưng HN qua lịch sử?', ['Kiên cường chống ngoại xâm, văn hiến', 'Hèn nhát', 'Tự do tuyệt đối', 'Phục tùng'], 0, 'HN qua nhiều thời kỳ: chống xâm lược, giữ vai trò trung tâm chính trị-văn hoá-giáo dục.'),
    Q('HN ngày nay là?', ['Thủ đô nước CHXHCN VN', 'Thành phố trực thuộc TƯ', 'Tỉnh', 'Khu tự trị'], 0, 'HN: Thủ đô nước CHXHCN VN (1976 sau thống nhất), thành phố loại đặc biệt.'),
    Q('Diện tích HN sau mở rộng 2008?', ['~3344 km² (gấp 3 lần trước)', '~1000 km²', '~10000 km²', '~500 km²'], 0, 'HN sáp nhập Hà Tây + 1 phần Vĩnh Phúc, Hoà Bình (8/2008) → ~3344 km².'),
  ]),

  M(28, 'Văn miếu - Quốc tử giám', [
    Q('Văn Miếu - Quốc tử giám xây?', ['1070 (thời Lý Thánh Tông)', '1010', '1500', '1800'], 0, 'Văn Miếu xây năm 1070, Quốc tử giám 1076 — trường đại học đầu tiên VN.'),
    Q('Văn Miếu thờ ai?', ['Khổng Tử và các bậc tiên hiền nho học', 'Phật', 'Lão Tử', 'Mẫu'], 0, 'Văn Miếu thờ Khổng Tử và các bậc đại nho.'),
    Q('Quốc tử giám có chức năng?', ['Trường đại học đầu tiên VN, đào tạo quan lại', 'Chợ', 'Đền', 'Thư viện thuần'], 0, 'Quốc tử giám: trường ĐH đầu tiên VN, đào tạo con em vua quan và nhân tài.'),
    Q('Bia tiến sĩ có?', ['82 bia khắc tên 1304 tiến sĩ qua các khoa thi 1442-1779', '100 bia', '10 bia', '1000 bia'], 0, '82 bia tiến sĩ khắc tên 1304 vị (1442-1779) — Di sản tư liệu UNESCO 2010.'),
    Q('Ý nghĩa Văn Miếu hôm nay?', ['Biểu tượng giáo dục, văn hoá HN; điểm du lịch', 'Bỏ hoang', 'Không quan trọng', 'Sắp phá'], 0, 'Văn Miếu: biểu tượng giáo dục-văn hoá HN, di tích quốc gia đặc biệt, điểm du lịch.'),
  ]),

  M(29, 'Hà Nội — Đô thị thông minh (Smart City)', [
    Q('Đô thị thông minh (smart city) là?', ['Đô thị ứng dụng công nghệ để nâng chất lượng sống', 'Đô thị giàu', 'Đô thị cũ', 'Đô thị nông thôn'], 0, 'Smart city: ứng dụng IoT, AI, big data… để cải thiện chất lượng dịch vụ và đời sống.'),
    Q('HN có dự án smart city?', ['Có — đang xây smart city Đông Anh, tích hợp công nghệ Nhật', 'Không', 'Chỉ ý tưởng', 'Hà Đông'], 0, 'HN đang xây Smart City Đông Anh (~272 ha) — hợp tác Sumitomo (Nhật) và BRG.'),
    Q('Ứng dụng smart city ở HN?', ['Giao thông thông minh, dịch vụ công online, camera an ninh, IoT', 'Không có', 'Chỉ giải trí', 'Chỉ wifi'], 0, 'HN: hệ thống giao thông thông minh, dịch vụ công online (eGov), camera AI, IoT đô thị…'),
    Q('Lợi ích smart city?', ['Giảm ùn tắc, tiết kiệm năng lượng, dịch vụ tốt hơn', 'Tăng ùn tắc', 'Tốn điện', 'Vô ích'], 0, 'Smart city: giảm ùn tắc (giao thông thông minh), tiết kiệm năng lượng (smart grid), dịch vụ công tốt.'),
    Q('Thách thức smart city HN?', ['Đầu tư lớn, quyền riêng tư, đào tạo nhân lực', 'Không thách thức', 'Quá dễ', 'Hoàn thành rồi'], 0, 'Thách thức: vốn đầu tư rất lớn + bảo vệ quyền riêng tư + đào tạo nhân lực IT.'),
  ]),

  M(30, 'Quy hoạch và phát triển đô thị HN', [
    Q('Quy hoạch chung HN đến 2030?', ['Mở rộng, hiện đại nhưng giữ phố cổ', 'Phá phố cổ', 'Giữ nguyên', 'Chỉ phố cổ'], 0, 'QH HN đến 2030: phát triển mở rộng (vành đai), hiện đại nhưng bảo tồn phố cổ và hồ.'),
    Q('Vành đai HN?', ['Vành đai 1, 2, 2.5, 3, 3.5, 4 — phân cấp giao thông', '1 vành', '10 vành', 'Không có'], 0, 'HN có nhiều vành đai (1-4) để phân cấp giao thông và giảm tải trung tâm.'),
    Q('Metro HN?', ['Đã có tuyến 2A (Cát Linh-Hà Đông, 2021), nhiều tuyến đang xây', 'Chưa có', 'Chỉ 1 tuyến', 'Đã có 10 tuyến'], 0, 'Metro HN: tuyến 2A Cát Linh-Hà Đông (vận hành 11/2021), tuyến 3 Nhổn-Ga HN đang xây.'),
    Q('Đô thị vệ tinh HN?', ['Hoà Lạc, Sóc Sơn, Sơn Tây, Xuân Mai, Phú Xuyên', 'Không có', 'Chỉ 1', 'Sài Gòn'], 0, 'HN có 5 đô thị vệ tinh trong quy hoạch (Hoà Lạc lớn nhất với ĐHQG, công nghệ cao).'),
    Q('Bảo tồn di sản trong phát triển?', ['Hài hoà phát triển và bảo tồn (phố cổ, hồ Hoàn Kiếm)', 'Phá hết để xây mới', 'Chỉ bảo tồn', 'Không liên quan'], 0, 'HN cần cân bằng: phát triển mới (vành đai, metro, smart city) + bảo tồn di sản (phố cổ, hồ, di tích).'),
  ]),

  M(31, 'Bảo vệ môi trường tại Hà Nội', [
    Q('Vấn đề môi trường HN?', ['Ô nhiễm không khí (PM2.5), nước, rác thải', 'Không có vấn đề', 'Quá sạch', 'Chỉ tiếng ồn'], 0, 'HN: ô nhiễm không khí cao (mùa đông PM2.5 vượt chuẩn), ô nhiễm nước sông Tô Lịch, rác thải.'),
    Q('PM2.5 là?', ['Bụi siêu mịn ≤2.5μm — gây hại sức khoẻ', 'Bụi to', 'Khí', 'Vô hại'], 0, 'PM2.5: bụi siêu mịn (≤2.5 micromet) đi vào phổi → bệnh hô hấp, tim mạch, ung thư.'),
    Q('Giải pháp giảm ô nhiễm không khí?', ['Giảm xe cá nhân, tăng metro/xe buýt, xe điện', 'Tăng xe', 'Phá rừng', 'Không làm gì'], 0, 'Giải pháp: phương tiện công cộng + xe điện + cây xanh + đóng các xí nghiệp gây ô nhiễm.'),
    Q('Sông Tô Lịch hiện?', ['Ô nhiễm nặng, đang được làm sạch', 'Sạch', 'Đã khôi phục', 'Đã lấp'], 0, 'Sông Tô Lịch ô nhiễm nặng do nước thải; nhiều dự án thử nghiệm làm sạch (Nhật, Hàn).'),
    Q('HS có thể đóng góp?', ['Đi xe buýt, không xả rác, trồng cây, tuyên truyền', 'Vô can', 'Không cần', 'Tăng xe cá nhân'], 0, 'HS: đi xe buýt/đạp, không xả rác, trồng cây, tuyên truyền gia đình & bạn bè.'),
  ]),

  M(32, 'Du lịch Hà Nội — Di sản và trải nghiệm', [
    Q('Di sản UNESCO tại HN?', ['Hoàng thành Thăng Long, Bia tiến sĩ Văn Miếu', 'Vịnh Hạ Long', 'Phong Nha', 'Mỹ Sơn'], 0, 'HN có 2 di sản UNESCO: Hoàng thành Thăng Long (2010 - di sản văn hoá), 82 bia tiến sĩ (2010 - di sản tư liệu).'),
    Q('Điểm du lịch nổi tiếng?', ['Hồ Hoàn Kiếm, phố cổ, Văn Miếu, Lăng Bác, Chùa Một Cột', 'Chỉ hồ Hoàn Kiếm', 'Chỉ phố cổ', 'Chỉ Văn Miếu'], 0, 'HN có nhiều điểm: Hồ Hoàn Kiếm, phố cổ, Văn Miếu, Lăng Bác, Chùa Một Cột, hồ Tây…'),
    Q('Phố đi bộ Hồ Gươm?', ['Hoạt động cuối tuần, không xe cộ', 'Suốt tuần', 'Không có', 'Chỉ ngày lễ'], 0, 'Phố đi bộ quanh Hồ Gươm hoạt động cuối tuần (tối thứ 6 đến chủ nhật).'),
    Q('Du lịch HN cần?', ['Hiểu lịch sử, văn hoá, tôn trọng di tích', 'Vô tâm', 'Phá hoại', 'Khoe khoang'], 0, 'Du lịch văn hoá: hiểu lịch sử + tôn trọng di tích + ứng xử văn minh.'),
    Q('Đóng góp của du lịch HN?', ['~10% GRDP, tạo nhiều việc làm', 'Không đáng kể', 'Gây hại', 'Vô ích'], 0, 'Du lịch HN ~10% GRDP, tạo hàng trăm nghìn việc làm, quảng bá hình ảnh VN.'),
  ]),

  M(33, 'Văn hoá HN ngày nay — Giới trẻ và sáng tạo', [
    Q('Giới trẻ HN ngày nay?', ['Năng động, hiện đại nhưng vẫn yêu văn hoá truyền thống', 'Chỉ Tây hoá', 'Chỉ truyền thống', 'Vô bản sắc'], 0, 'Giới trẻ HN: kết hợp hiện đại + giữ gìn truyền thống (lễ hội, áo dài, ẩm thực).'),
    Q('Phong trào sáng tạo trẻ?', ['Khởi nghiệp công nghệ, nghệ thuật đường phố, fashion', 'Không có', 'Chỉ học', 'Sao chép'], 0, 'HN: khởi nghiệp công nghệ, nghệ thuật đường phố (graffiti, hiphop), fashion VN…'),
    Q('Áo dài HN?', ['Quốc phục, mặc dịp lễ, Tết, sự kiện', 'Bị bỏ', 'Chỉ phụ nữ già', 'Không liên quan HN'], 0, 'Áo dài: quốc phục VN, mặc dịp lễ Tết, sự kiện trang trọng — biểu tượng văn hoá HN.'),
    Q('Lễ hội truyền thống HN?', ['Hội Gióng, hội Đống Đa, hội chùa Hương', 'Không có', 'Bỏ hết', 'Chỉ Tết'], 0, 'HN nhiều lễ hội: Gióng (UNESCO), Đống Đa, chùa Hương, Cổ Loa…'),
    Q('Cân bằng hội nhập và bản sắc?', ['Tiếp thu tinh hoa + giữ gìn bản sắc dân tộc', 'Sùng ngoại', 'Bài ngoại', 'Đóng cửa'], 0, 'Hội nhập đúng cách: tiếp thu tinh hoa thế giới + giữ gìn bản sắc văn hoá VN.'),
  ]),

  M(34, 'Trách nhiệm công dân HN — Xây dựng Thủ đô', [
    Q('Trách nhiệm HS HN?', ['Học tốt, góp phần xây Thủ đô văn minh, hiện đại', 'Vô can', 'Chỉ học', 'Chỉ chơi'], 0, 'HS HN: học tốt + sống văn minh + góp phần xây Thủ đô đẹp, hiện đại.'),
    Q('Hành động văn minh đô thị?', ['Không vứt rác, xếp hàng, không ồn ào, giúp người già', 'Vứt rác', 'Chen lấn', 'La hét'], 0, 'Văn minh đô thị: không xả rác, xếp hàng, giúp người yếu thế, ứng xử lịch sự.'),
    Q('Tham gia hoạt động xã hội?', ['CLB, tình nguyện, phong trào trường lớp', 'Không tham gia', 'Chỉ làm khi bắt buộc', 'Khoe khoang'], 0, 'Tham gia tích cực: CLB, tình nguyện, phong trào → rèn kỹ năng + đóng góp cộng đồng.'),
    Q('Tự hào về HN?', ['Hiểu lịch sử, văn hoá, giới thiệu với bạn bè quốc tế', 'Không cần', 'Chỉ hình thức', 'Sao chép'], 0, 'Tự hào HN: hiểu lịch sử-văn hoá, giới thiệu với bạn bè trong và ngoài nước.'),
    Q('Tầm nhìn HN đến 2030-2045?', ['Thủ đô xanh, văn hiến, văn minh, hiện đại', 'Lạc hậu', 'Tự do tuyệt đối', 'Đóng cửa'], 0, 'Tầm nhìn HN: Thủ đô xanh, văn hiến, văn minh, hiện đại — kết hợp truyền thống + hiện đại.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Pháp đánh HN lần 2 (1882) tổng đốc?', ['Hoàng Diệu', 'Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Đề Thám'], 0, '1882.'),
    Q('Đông Kinh Nghĩa Thục thành lập?', ['1907', '1900', '1885', '1908'], 0, 'HN, phố Hàng Đào.'),
    Q('Vụ Hà thành đầu độc?', ['1908', '1907', '1885', '1873'], 0, 'Liên kết Đề Thám.'),
    Q('Tác phẩm "Vang bóng một thời"?', ['Nguyễn Tuân', 'Thạch Lam', 'Nam Cao', 'Ngô Tất Tố'], 0, '1940.'),
    Q('Bia tiến sĩ Văn Miếu có?', ['82 bia', '100', '10', '1000'], 0, 'Di sản tư liệu UNESCO 2010.'),
  ]),
];

export const S8GDDP_SCENARIOS = indexBy(S8GDDP_WEEKS);
