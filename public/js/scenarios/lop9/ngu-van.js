// ============================================================
// Lớp 9 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 — năm thi vào lớp 10.
// HK1: thơ hiện đại VN giai đoạn 1945–1975 + truyện ngắn hiện đại.
// HK2: thơ trữ tình sau 1975 + nghị luận xã hội + văn bản nhật dụng.
// ID prefix: "S9NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9NV', 'ngu-van', n, title, qs, opts);

export const S9NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Đồng chí — Chính Hữu', [
    Q('"Đồng chí" của Chính Hữu sáng tác năm nào?', ['1948', '1954', '1965', '1947'], 0, 'Bài thơ ra đời năm 1948, sau chiến dịch Việt Bắc thu đông 1947.', [
      'Đúng — 1948, ngay sau chiến dịch Việt Bắc thu đông 1947, khi Chính Hữu cùng đồng đội trải qua gian khổ kháng chiến chống Pháp.',
      'Sai — 1954 là năm chiến thắng Điện Biên Phủ và ký Hiệp định Genève, không phải năm ra đời bài thơ.',
      'Sai — 1965 là giai đoạn kháng chiến chống Mỹ, muộn hơn nhiều so với "Đồng chí".',
      'Sai — 1947 là năm diễn ra chiến dịch Việt Bắc; bài thơ viết ngay sau đó, năm 1948.',
    ]),
    Q('Bài thơ "Đồng chí" thuộc thể thơ?', ['Song thất lục bát', 'Thất ngôn bát cú', 'Tự do', 'Lục bát'], 2, 'Chính Hữu dùng thể tự do, dòng dài ngắn linh hoạt để phù hợp cảm xúc.', [
      'Sai — song thất lục bát có cặp 7-7 rồi 6-8, dùng trong ngâm khúc; "Đồng chí" không theo khuôn này.',
      'Sai — thất ngôn bát cú là thơ Đường luật 8 câu 7 chữ; "Đồng chí" có dòng dài ngắn khác nhau.',
      'Đúng — thể tự do với số chữ mỗi dòng linh hoạt, kể cả câu chỉ 2 tiếng "Đồng chí!", phù hợp mạch cảm xúc.',
      'Sai — lục bát là cặp 6-8 đều đặn; "Đồng chí" không gò vào vần luật lục bát.',
    ]),
    Q('Hình ảnh "Đầu súng trăng treo" có ý nghĩa?', ['Vẻ đẹp lãng mạn và hiện thực hòa quyện trong người lính', 'Nỗi nhớ quê hương', 'Sự khốc liệt của chiến tranh', 'Sự cô đơn của người lính'], 0, 'Đây là hình ảnh biểu tượng: súng (hiện thực, chiến đấu) + trăng (lãng mạn) ⇒ vẻ đẹp tâm hồn người lính.', [
      'Đúng — súng (hiện thực, chiến đấu) hòa với trăng (lãng mạn, thi vị) tạo biểu tượng chất chiến sĩ và thi sĩ trong người lính.',
      'Sai — nỗi nhớ quê hương được gợi ở câu "giếng nước gốc đa…", không phải hình ảnh này.',
      'Sai — sự khốc liệt thể hiện ở "áo rách vai", "chân không giày", còn đây là hình ảnh đẹp, lãng mạn.',
      'Sai — bài thơ ngợi ca tình đồng đội gắn bó, không phải sự cô đơn.',
    ]),
    Q('Hai câu "Quê hương anh nước mặn đồng chua / Làng tôi nghèo đất cày lên sỏi đá" cho thấy?', ['Khung cảnh thiên nhiên', 'Sự xa cách quê hương', 'Sự giàu có của quê', 'Hai người lính cùng xuất thân nông dân nghèo'], 3, 'Cùng xuất thân nông dân nghèo từ những vùng khác nhau ⇒ cơ sở của tình đồng chí.', [
      'Sai — hai câu không nhằm tả cảnh mà nói về nguồn gốc xuất thân của người lính.',
      'Sai — không nói về sự xa cách mà nhấn mạnh điểm chung giữa hai người lính.',
      'Sai — "nước mặn đồng chua", "đất cày lên sỏi đá" là hình ảnh đất nghèo, không phải giàu có.',
      'Đúng — cả hai cùng là nông dân nghèo từ những miền quê khác nhau, đó là cơ sở đầu tiên của tình đồng chí.',
    ]),
    Q('"Đồng chí!" được tách thành 1 câu thơ riêng có tác dụng?', ['Phá vỡ nhịp thơ', 'Không có ý nghĩa đặc biệt', 'Nhấn mạnh sự xa lạ', 'Như tiếng gọi thiêng liêng, là bản lề kết tinh tình cảm'], 3, 'Câu thơ 2 tiếng làm bản lề: khép lại 7 câu lý giải, mở ra hình tượng người đồng chí.', [
      'Sai — câu thơ không phá vỡ mà tạo điểm nhấn, dồn nén cảm xúc đột ngột.',
      'Sai — đây là dụng ý nghệ thuật đặc sắc, không phải vô nghĩa.',
      'Sai — tiếng gọi này thể hiện sự gắn bó thiêng liêng, hoàn toàn trái ngược với xa lạ.',
      'Đúng — câu 2 tiếng làm bản lề: khép lại 7 câu lý giải cơ sở, mở ra phần ca ngợi tình đồng chí.',
    ]),
    Q('Cảm hứng chủ đạo của bài thơ?', ['Niềm vui chiến thắng', 'Tình đồng chí, đồng đội thiêng liêng', 'Tình yêu đôi lứa', 'Tình mẫu tử'], 1, 'Ngợi ca tình đồng chí — cơ sở của sức mạnh kháng chiến.', [
      'Sai — bài thơ viết về gian khổ và tình đồng đội, không phải niềm vui chiến thắng.',
      'Đúng — cả bài ngợi ca tình đồng chí, đồng đội keo sơn, cội nguồn sức mạnh kháng chiến.',
      'Sai — đây là tình cảm giữa những người lính, không phải tình yêu đôi lứa.',
      'Sai — tình mẫu tử không phải chủ đề của "Đồng chí".',
    ]),
  ]),

  M(2, 'Bài thơ về tiểu đội xe không kính — Phạm Tiến Duật', [
    Q('Tác phẩm "Bài thơ về tiểu đội xe không kính" trích từ tập?', ['Việt Bắc', 'Đất nước', 'Vầng trăng quầng lửa', 'Đầu súng trăng treo'], 2, 'Trích từ tập "Vầng trăng quầng lửa" (1970) của Phạm Tiến Duật.', [
      'Sai — "Việt Bắc" là tập thơ nổi tiếng của Tố Hữu, không phải của Phạm Tiến Duật.',
      'Sai — "Đất nước" gợi tên trường ca của Nguyễn Khoa Điềm; không phải xuất xứ bài thơ này.',
      'Đúng — bài thơ trích từ tập "Vầng trăng quầng lửa" (1970) của Phạm Tiến Duật.',
      'Sai — "Đầu súng trăng treo" là tập thơ của Chính Hữu, dễ nhầm vì là câu kết của "Đồng chí".',
    ]),
    Q('Bài thơ viết về người lính ở chiến trường nào?', ['Chống Mỹ, đường Trường Sơn', 'Điện Biên Phủ', 'Chống Pháp', 'Biên giới Tây Nam'], 0, 'Viết về người lính lái xe tải trên đường Trường Sơn thời kháng chiến chống Mỹ.', [
      'Đúng — viết về người lính lái xe trên tuyến đường Trường Sơn thời kháng chiến chống Mỹ.',
      'Sai — Điện Biên Phủ thuộc kháng chiến chống Pháp (1954), không liên quan tiểu đội xe không kính.',
      'Sai — bài thơ thuộc giai đoạn chống Mỹ, không phải chống Pháp.',
      'Sai — chiến tranh biên giới Tây Nam diễn ra cuối thập niên 1970, không phải bối cảnh bài thơ.',
    ]),
    Q('Vì sao xe không có kính?', ['Tác giả tưởng tượng', 'Tiết kiệm vật liệu', 'Bom đạn chiến tranh làm vỡ', 'Vì cũ kỹ'], 2, '"Không có kính không phải vì xe không có kính / Bom giật bom rung kính vỡ đi rồi".', [
      'Sai — đây là chi tiết hiện thực có thật ở chiến trường, không phải tưởng tượng.',
      'Sai — không phải lý do tiết kiệm; nguyên nhân là bom đạn.',
      'Đúng — chính bài thơ nói rõ: "Bom giật bom rung kính vỡ đi rồi".',
      'Sai — không phải vì xe cũ mà do bom đạn chiến tranh làm vỡ kính.',
    ]),
    Q('Giọng điệu chủ đạo của bài thơ?', ['Trang nghiêm, cổ kính', 'Ngang tàng, sôi nổi, lạc quan', 'Bi tráng, thê lương', 'Trầm buồn, da diết'], 1, 'Giọng tự nhiên, ngang tàng, đậm chất lính trẻ — đặc trưng thơ Phạm Tiến Duật.', [
      'Sai — giọng bài thơ trẻ trung, đời thường, không trang nghiêm cổ kính.',
      'Đúng — giọng ngang tàng, sôi nổi, lạc quan, đậm chất lính trẻ là nét đặc trưng của Phạm Tiến Duật.',
      'Sai — bài thơ tươi vui, hóm hỉnh, không bi tráng thê lương.',
      'Sai — không trầm buồn da diết; ngược lại rất phơi phới, tinh nghịch.',
    ]),
    Q('Câu thơ "Chỉ cần trong xe có một trái tim" thể hiện?', ['Ý chí giải phóng miền Nam, tình yêu Tổ quốc', 'Nỗi cô đơn', 'Sự hi sinh', 'Tình yêu đôi lứa'], 0, '"Trái tim" tượng trưng cho ý chí, lòng yêu nước, quyết tâm giải phóng miền Nam.', [
      'Đúng — "trái tim" là hoán dụ chỉ ý chí, lòng yêu nước và quyết tâm giải phóng miền Nam.',
      'Sai — câu thơ thể hiện sức mạnh tinh thần, không phải nỗi cô đơn.',
      'Sai — không nói về sự hi sinh mà nói về động lực, ý chí của người lính.',
      'Sai — "trái tim" ở đây là lòng yêu nước, không phải tình yêu đôi lứa.',
    ]),
    Q('Hình ảnh "xe không kính" có ý nghĩa?', ['Là hình ảnh độc đáo, gắn với hiện thực khốc liệt và làm nổi bật vẻ đẹp người lính', 'Sự sáng tạo nghệ thuật', 'Sự lạc hậu', 'Sự nghèo nàn vật chất'], 0, 'Hình ảnh thực + biểu tượng, làm nổi bật bản lĩnh lái xe trong gian khổ.', [
      'Đúng — vừa là hình ảnh thực vừa là biểu tượng, làm nổi bật bản lĩnh hiên ngang của người lính lái xe.',
      'Sai — đây là cách nói chung chung; câu hỏi cần ý nghĩa gắn với hiện thực và vẻ đẹp người lính.',
      'Sai — không nhằm phản ánh sự lạc hậu mà tô đậm tinh thần người lính trong gian khổ.',
      'Sai — không nhấn mạnh nghèo nàn vật chất mà ca ngợi tư thế ung dung của người lính.',
    ]),
  ]),

  M(3, 'Đoàn thuyền đánh cá — Huy Cận', [
    Q('"Đoàn thuyền đánh cá" sáng tác năm nào?', ['1965', '1948', '1975', '1958'], 3, 'Sáng tác năm 1958, trong chuyến đi thực tế vùng biển Quảng Ninh.', [
      'Sai — 1965 là giai đoạn chống Mỹ; bài thơ ra đời sớm hơn, thời kỳ xây dựng miền Bắc.',
      'Sai — 1948 là năm của "Đồng chí" và kháng chiến chống Pháp, không phải bài thơ này.',
      'Sai — 1975 là năm thống nhất đất nước, muộn hơn nhiều.',
      'Đúng — 1958, sau chuyến đi thực tế vùng biển Quảng Ninh (Hòn Gai, Cẩm Phả) của Huy Cận.',
    ]),
    Q('Bối cảnh xã hội của bài thơ?', ['Đất nước thống nhất', 'Miền Bắc xây dựng CNXH sau 1954', 'Kháng chiến chống Mỹ', 'Kháng chiến chống Pháp'], 1, 'Miền Bắc bước vào thời kỳ xây dựng CNXH, không khí lao động hào hứng.', [
      'Sai — đất nước chưa thống nhất năm 1958; đây mới là thời kỳ xây dựng miền Bắc.',
      'Đúng — miền Bắc sau 1954 bước vào xây dựng CNXH, khí thế lao động hào hứng, làm chủ cuộc đời.',
      'Sai — kháng chiến chống Mỹ bùng nổ ác liệt muộn hơn, từ giữa thập niên 1960.',
      'Sai — kháng chiến chống Pháp đã kết thúc năm 1954, trước khi bài thơ ra đời.',
    ]),
    Q('Hình ảnh "Mặt trời xuống biển như hòn lửa" sử dụng biện pháp tu từ?', ['Ẩn dụ (mặt trời = hòn lửa ngầm)', 'Hoán dụ', 'So sánh', 'Nhân hóa'], 2, 'So sánh mặt trời với hòn lửa.', [
      'Sai — có từ so sánh "như" nên là so sánh chứ không phải ẩn dụ (ẩn dụ giấu vế so sánh).',
      'Sai — hoán dụ lấy bộ phận, dấu hiệu để gọi tên; ở đây không phải vậy.',
      'Đúng — từ "như" cho thấy đây là phép so sánh: mặt trời được ví với hòn lửa.',
      'Sai — nhân hóa gán đặc điểm người cho vật; câu này chỉ so sánh hai sự vật.',
    ]),
    Q('Câu thơ "Thuyền ta lái gió với buồm trăng / Lướt giữa mây cao với biển bằng" thể hiện?', ['Vẻ kì vĩ, tráng lệ của thiên nhiên và tầm vóc con người', 'Sự cô đơn', 'Cảnh hoàng hôn', 'Khó khăn lao động'], 0, 'Bút pháp lãng mạn: con thuyền hòa vào vũ trụ, con người sánh ngang tầm vóc thiên nhiên.', [
      'Đúng — bút pháp lãng mạn phóng đại: con thuyền hòa vào vũ trụ, con người sánh ngang tầm thiên nhiên.',
      'Sai — câu thơ tràn đầy khí thế hào hùng, không gợi sự cô đơn.',
      'Sai — đây là cảnh đánh cá giữa trời biển bao la, không tả riêng hoàng hôn.',
      'Sai — câu thơ tô đậm vẻ làm chủ, hứng khởi chứ không nhấn mạnh khó khăn.',
    ]),
    Q('Bài thơ ngợi ca?', ['Chiến tranh', 'Thiên nhiên và con người lao động trong tư thế làm chủ', 'Nỗi buồn ly biệt', 'Tình yêu đôi lứa'], 1, 'Khúc tráng ca về thiên nhiên và người lao động mới làm chủ biển khơi, làm chủ cuộc đời.', [
      'Sai — bài thơ ca ngợi lao động hòa bình, không viết về chiến tranh.',
      'Đúng — khúc tráng ca về thiên nhiên giàu đẹp và người lao động làm chủ biển khơi, làm chủ cuộc đời.',
      'Sai — cảm hứng bài thơ vui tươi, phơi phới, không phải nỗi buồn ly biệt.',
      'Sai — đây không phải bài thơ tình yêu đôi lứa.',
    ]),
    Q('Bài thơ kết thúc bằng cảnh?', ['Mặt trời đứng bóng', 'Bão biển', 'Đêm tối', 'Bình minh, đoàn thuyền trở về'], 3, 'Khép vòng: hoàng hôn ra khơi → đêm đánh cá → bình minh trở về.', [
      'Sai — bài thơ khép lại lúc bình minh, không phải khi mặt trời đứng bóng (giữa trưa).',
      'Sai — không có cảnh bão biển ở phần kết.',
      'Sai — đêm tối là thời gian đánh cá ở giữa bài, không phải cảnh kết.',
      'Đúng — kết cấu vòng tròn: hoàng hôn ra khơi, đêm đánh cá, bình minh đoàn thuyền trở về.',
    ]),
  ]),

  M(4, 'Bếp lửa — Bằng Việt', [
    Q('"Bếp lửa" sáng tác trong hoàn cảnh nào?', ['Khi tác giả ở chiến trường', 'Khi tác giả ở quê', 'Khi tác giả đang du học ở Liên Xô năm 1963', 'Sau ngày thống nhất'], 2, 'Bằng Việt viết bài này năm 1963 khi đang du học ở Liên Xô, nhớ về bà.', [
      'Sai — Bằng Việt không viết bài này ở chiến trường mà ở nơi đất khách xa quê.',
      'Sai — nỗi nhớ bà mãnh liệt chính vì tác giả đang ở xa, không phải đang ở quê.',
      'Đúng — năm 1963, khi đang là sinh viên du học ở Liên Xô, tác giả nhớ về bà và bếp lửa quê nhà.',
      'Sai — bài thơ viết năm 1963, trước ngày thống nhất 1975 nhiều năm.',
    ]),
    Q('Nhân vật trung tâm của bài thơ?', ['Người em', 'Người bà', 'Người mẹ', 'Người bố'], 1, 'Hình tượng người bà — biểu tượng tình thương, sự tần tảo.', [
      'Sai — bài thơ không xoay quanh người em.',
      'Đúng — hình tượng người bà tần tảo, giàu yêu thương là trung tâm, gắn liền với bếp lửa.',
      'Sai — người chăm sóc cháu bên bếp lửa là bà, không phải mẹ.',
      'Sai — người bố không phải nhân vật trung tâm của bài thơ.',
    ]),
    Q('Hình ảnh "bếp lửa" trong bài có ý nghĩa biểu tượng?', ['Cuộc sống nông thôn', 'Sự nóng nực', 'Tình bà cháu, gia đình, quê hương, đất nước', 'Khó khăn vật chất'], 2, 'Bếp lửa = ngọn lửa tình bà cháu + tình quê hương đất nước thiêng liêng.', [
      'Sai — chỉ dừng ở "cuộc sống nông thôn" là chưa thấy tầng nghĩa biểu tượng sâu xa.',
      'Sai — bếp lửa không tượng trưng cho sự nóng nực mà cho hơi ấm tình thân.',
      'Đúng — bếp lửa là biểu tượng tình bà cháu, tổ ấm gia đình và rộng ra là quê hương, đất nước.',
      'Sai — bếp lửa gợi sự ấm áp, nghĩa tình chứ không phải khó khăn vật chất.',
    ]),
    Q('Câu thơ "Một bếp lửa chờn vờn sương sớm / Một bếp lửa ấp iu nồng đượm" sử dụng phép?', ['Điệp ngữ', 'Hoán dụ', 'Câu hỏi tu từ', 'So sánh'], 0, 'Điệp ngữ "một bếp lửa" gợi hình ảnh đậm sâu trong ký ức.', [
      'Đúng — cụm "một bếp lửa" được lặp lại đầu hai dòng là điệp ngữ, nhấn mạnh hình ảnh trong ký ức.',
      'Sai — không có hiện tượng lấy bộ phận thay toàn thể nên không phải hoán dụ.',
      'Sai — hai câu này không phải câu hỏi tu từ.',
      'Sai — không có từ so sánh hay vế so sánh nào trong hai câu.',
    ]),
    Q('"Ấp iu" trong bài có nghĩa?', ['Tắt ngấm', 'Đốt cháy', 'Nâng niu, chăm chút', 'Lạnh lẽo'], 2, '"Ấp iu" gợi bàn tay khéo léo, kiên nhẫn, đầy tình cảm của bà.', [
      'Sai — "ấp iu" trái nghĩa với tắt ngấm; nó gợi sự gìn giữ ngọn lửa.',
      'Sai — không phải "đốt cháy" mạnh mẽ mà là nâng niu, ấp ủ nhẹ nhàng.',
      'Đúng — "ấp iu" gợi bàn tay khéo léo, kiên nhẫn, nâng niu chăm chút của bà.',
      'Sai — từ này mang sắc thái ấm áp, không phải lạnh lẽo.',
    ]),
    Q('Câu thơ "Ôi kì lạ và thiêng liêng — bếp lửa!" thể hiện?', ['Nỗi sợ hãi', 'Cảm xúc dâng trào khi nhận ra ý nghĩa thiêng liêng của bếp lửa và bà', 'Sự ngạc nhiên thông thường', 'Sự thất vọng'], 1, 'Câu cảm thán chốt lại suy ngẫm: bếp lửa là cội nguồn thiêng liêng.', [
      'Sai — "Ôi" ở đây là cảm xúc trân trọng, xúc động, không phải sợ hãi.',
      'Đúng — câu cảm thán bộc lộ cảm xúc dâng trào khi cháu nhận ra ý nghĩa thiêng liêng của bếp lửa và bà.',
      'Sai — không phải ngạc nhiên thông thường mà là sự thức nhận sâu sắc, đầy thành kính.',
      'Sai — câu thơ thể hiện niềm biết ơn, không phải thất vọng.',
    ]),
  ]),

  M(5, 'Ánh trăng — Nguyễn Duy', [
    Q('"Ánh trăng" sáng tác năm nào?', ['1990', '1975', '1985', '1978'], 3, 'Sáng tác năm 1978, ba năm sau ngày đất nước thống nhất, tại TP.HCM.', [
      'Sai — 1990 muộn hơn nhiều; bài thơ ra đời ngay sau chiến tranh.',
      'Sai — 1975 là năm thống nhất; bài thơ viết ba năm sau đó.',
      'Sai — 1985 không đúng; "Ánh trăng" viết năm 1978.',
      'Đúng — 1978, ba năm sau ngày thống nhất, khi tác giả sống ở TP.HCM giữa tiện nghi đô thị.',
    ]),
    Q('Bài thơ thuộc thể?', ['Bảy chữ', 'Lục bát', 'Năm chữ', 'Thơ tự do, không đếm chữ theo dòng'], 2, 'Thơ năm chữ, các khổ liền mạch như lời tâm sự.', [
      'Sai — mỗi dòng "Ánh trăng" có năm chữ, không phải bảy chữ.',
      'Sai — không phải cặp 6-8 nên không phải lục bát.',
      'Đúng — thơ năm chữ, các khổ liền mạch như một câu chuyện kể, lời tâm sự.',
      'Sai — số chữ mỗi dòng đều đặn (năm chữ) nên không phải thơ tự do.',
    ]),
    Q('Vầng trăng trong bài có ý nghĩa biểu tượng?', ['Quá khứ nghĩa tình, thiên nhiên, đất nước', 'Người yêu', 'Niềm vui', 'Sự cô đơn'], 0, 'Trăng = quá khứ ân tình + thiên nhiên + nhân dân, đất nước.', [
      'Đúng — vầng trăng tượng trưng cho quá khứ ân nghĩa, thiên nhiên và nhân dân, đất nước.',
      'Sai — trăng không tượng trưng cho người yêu trong bài thơ này.',
      'Sai — trăng không chỉ là niềm vui mà là biểu tượng nghĩa tình thủy chung.',
      'Sai — trăng gắn với tình nghĩa gắn bó, không tượng trưng cho cô đơn.',
    ]),
    Q('Tình huống "đèn điện tắt" trong bài có ý nghĩa?', ['Cảnh tối tăm', 'Khoảnh khắc giác ngộ, thức tỉnh lương tâm', 'Tình huống ngẫu nhiên', 'Sự cố kỹ thuật'], 1, 'Mất điện ⇒ gặp lại trăng ⇒ giật mình về sự lãng quên.', [
      'Sai — bóng tối chỉ là cái cớ; ý nghĩa nằm ở sự thức tỉnh khi gặp lại trăng.',
      'Đúng — mất điện khiến con người gặp lại vầng trăng và giật mình thức tỉnh về sự lãng quên quá khứ.',
      'Sai — đây là tình huống có dụng ý nghệ thuật, là bước ngoặt của bài thơ.',
      'Sai — câu hỏi đòi hỏi ý nghĩa biểu tượng, không phải xét về kỹ thuật điện.',
    ]),
    Q('Câu thơ "Ánh trăng im phăng phắc / Đủ cho ta giật mình" thể hiện?', ['Niềm vui đoàn tụ', 'Sự bao dung của trăng và sự ăn năn của người', 'Sự giận dữ', 'Lời trách móc'], 1, 'Trăng im lặng nhưng đủ làm con người giật mình thức tỉnh.', [
      'Sai — không phải niềm vui đoàn tụ mà là sự day dứt, ăn năn.',
      'Đúng — trăng im lặng, bao dung nhưng chính sự im lặng ấy đủ khiến con người giật mình tự vấn, ăn năn.',
      'Sai — trăng không giận dữ; nó "im phăng phắc", lặng lẽ độ lượng.',
      'Sai — trăng không lên tiếng trách móc; chính lương tâm con người tự thức tỉnh.',
    ]),
    Q('Bài thơ là lời nhắc nhở về?', ['Cảnh đẹp', 'Đạo lý "uống nước nhớ nguồn"', 'Chiến tranh', 'Tình yêu đôi lứa'], 1, 'Nhắc nhở thái độ sống với quá khứ ân nghĩa, với nhân dân.', [
      'Sai — bài thơ không dừng ở tả cảnh đẹp mà gửi gắm bài học đạo lý.',
      'Đúng — nhắc nhở thái độ sống thủy chung với quá khứ ân nghĩa, với nhân dân — đạo lý "uống nước nhớ nguồn".',
      'Sai — chiến tranh chỉ là nền ký ức; thông điệp là lẽ sống ân tình.',
      'Sai — đây không phải bài thơ tình yêu đôi lứa.',
    ]),
  ]),

  M(6, 'Làng — Kim Lân', [
    Q('Truyện ngắn "Làng" sáng tác năm nào?', ['1945', '1960', '1948', '1954'], 2, 'Viết năm 1948, thời kỳ đầu kháng chiến chống Pháp.', [
      'Sai — 1945 là năm Cách mạng tháng Tám; truyện viết sau đó, trong kháng chiến.',
      'Sai — 1960 muộn hơn; "Làng" ra đời ở thời kỳ đầu chống Pháp.',
      'Đúng — viết năm 1948, thời kỳ đầu kháng chiến chống Pháp, khi nhân dân đi tản cư.',
      'Sai — 1954 là năm kết thúc kháng chiến chống Pháp, sau khi truyện đã ra đời.',
    ]),
    Q('Nhân vật chính của truyện?', ['Bác Thứ', 'Đứa con út', 'Ông Hai', 'Bà chủ nhà'], 2, 'Ông Hai — người nông dân làng Chợ Dầu phải đi tản cư.', [
      'Sai — bác Thứ chỉ là nhân vật phụ trò chuyện với ông Hai.',
      'Sai — đứa con út xuất hiện trong cảnh ông Hai trò chuyện để giãi bày, không phải nhân vật chính.',
      'Đúng — ông Hai, người nông dân làng Chợ Dầu phải đi tản cư, là nhân vật trung tâm.',
      'Sai — bà chủ nhà nơi tản cư chỉ là nhân vật phụ.',
    ]),
    Q('Tình huống truyện đặc sắc là?', ['Nghe tin làng Chợ Dầu theo Tây', 'Cãi nhau với hàng xóm', 'Mất mùa', 'Đi đánh giặc'], 0, 'Nghe tin làng theo giặc ⇒ đẩy ông Hai vào xung đột nội tâm dữ dội.', [
      'Đúng — tin làng Chợ Dầu theo giặc đẩy ông Hai vào xung đột nội tâm dữ dội, bộc lộ tình yêu làng - yêu nước.',
      'Sai — không có chi tiết cãi nhau với hàng xóm làm tình huống truyện.',
      'Sai — mất mùa không phải tình huống của truyện "Làng".',
      'Sai — ông Hai không trực tiếp đi đánh giặc; ông sống nơi tản cư.',
    ]),
    Q('Tâm trạng ông Hai khi nghe tin làng theo giặc?', ['Đau đớn, xấu hổ, dằn vặt', 'Bình thản', 'Phẫn nộ với cách mạng', 'Vui mừng'], 0, '"Cổ ông lão nghẹn ắng hẳn lại, da mặt tê rân rân" ⇒ đau đớn, tủi hổ.', [
      'Đúng — "cổ nghẹn ắng, da mặt tê rân rân", ông Hai đau đớn, tủi hổ, dằn vặt khôn nguôi.',
      'Sai — ông không hề bình thản mà sững sờ, đau đớn cùng cực.',
      'Sai — ông một lòng theo kháng chiến, không phẫn nộ với cách mạng.',
      'Sai — tin dữ khiến ông đau khổ, hoàn toàn không vui mừng.',
    ]),
    Q('Khi nghe tin cải chính, ông Hai?', ['Vui sướng đi khoe khắp nơi, kể cả nhà bị Tây đốt', 'Im lặng', 'Không tin', 'Tức giận'], 0, 'Vui đến mức khoe cả việc nhà mình bị đốt — chứng tỏ làng không theo giặc.', [
      'Đúng — ông vui sướng đi khoe khắp nơi, khoe cả nhà mình bị Tây đốt vì đó là bằng chứng làng không theo giặc.',
      'Sai — ông không im lặng mà hồ hởi đi báo tin mừng cho mọi người.',
      'Sai — ông tin ngay vì đây là điều ông mong mỏi.',
      'Sai — ông vui mừng tột độ, không hề tức giận.',
    ]),
    Q('Chủ đề tác phẩm?', ['Tình yêu làng quê hòa quyện với tình yêu đất nước, kháng chiến', 'Phong tục Bắc Bộ', 'Tình mẫu tử', 'Cuộc sống nghèo khó'], 0, 'Tình yêu làng nâng lên thành tình yêu nước — bước trưởng thành của người nông dân.', [
      'Đúng — tình yêu làng được nâng lên thành tình yêu nước, đánh dấu bước trưởng thành của người nông dân kháng chiến.',
      'Sai — truyện không nhằm giới thiệu phong tục Bắc Bộ.',
      'Sai — tình mẫu tử không phải chủ đề của "Làng".',
      'Sai — cuộc sống nghèo khó chỉ là bối cảnh, không phải chủ đề chính.',
    ]),
  ]),

  M(7, 'Lặng lẽ Sa Pa — Nguyễn Thành Long', [
    Q('Tác phẩm "Lặng lẽ Sa Pa" ra đời năm?', ['1975', '1965', '1970', '1980'], 2, 'Sáng tác năm 1970 sau chuyến đi thực tế Lào Cai.', [
      'Sai — 1975 là năm thống nhất; truyện viết trước đó.',
      'Sai — 1965 không đúng; truyện ra đời năm 1970.',
      'Đúng — sáng tác năm 1970 sau chuyến đi thực tế Lào Cai của Nguyễn Thành Long.',
      'Sai — 1980 muộn hơn; truyện in trong tập "Giữa trong xanh" (1972).',
    ]),
    Q('Nhân vật chính của truyện?', ['Bác lái xe', 'Cô kỹ sư', 'Ông họa sĩ', 'Anh thanh niên làm khí tượng trên đỉnh Yên Sơn'], 3, 'Anh thanh niên 27 tuổi làm công tác khí tượng kiêm vật lý địa cầu trên đỉnh Yên Sơn 2 600 m.', [
      'Sai — bác lái xe là nhân vật phụ, người đưa câu chuyện đến với người đọc.',
      'Sai — cô kỹ sư chỉ là nhân vật phụ chứng kiến, cảm phục anh thanh niên.',
      'Sai — ông họa sĩ là người quan sát, suy ngẫm, không phải nhân vật trung tâm.',
      'Đúng — anh thanh niên 27 tuổi làm khí tượng kiêm vật lý địa cầu trên đỉnh Yên Sơn 2 600 m là nhân vật chính.',
    ]),
    Q('Hoàn cảnh sống của anh thanh niên?', ['Cô độc trên đỉnh núi cao', 'Đông đúc, vui vẻ', 'Ở nông thôn đồng bằng', 'Trong thành phố'], 0, 'Sống một mình trên đỉnh núi cao 2 600 m, ít người qua lại.', [
      'Đúng — anh sống một mình trên đỉnh Yên Sơn cao 2 600 m, quanh năm vắng người qua lại.',
      'Sai — anh sống cô độc, "thèm người", không phải nơi đông vui.',
      'Sai — anh làm việc trên đỉnh núi cao Sa Pa, không phải đồng bằng.',
      'Sai — anh sống giữa núi rừng heo hút, không phải trong thành phố.',
    ]),
    Q('Điều khiến anh thanh niên không thấy cô đơn?', ['Có nhiều bạn bè', 'Tình yêu công việc và ý thức cống hiến', 'Sống gần thành phố', 'Có TV xem'], 1, 'Anh tìm thấy niềm vui trong công việc: "khi ta làm việc, ta với công việc là đôi".', [
      'Sai — anh sống một mình, không có nhiều bạn bè bên cạnh.',
      'Đúng — tình yêu công việc và ý thức cống hiến giúp anh thấy "ta với công việc là đôi", không còn cô đơn.',
      'Sai — anh sống trên núi cao heo hút, xa thành phố.',
      'Sai — niềm vui của anh đến từ công việc và lý tưởng, không phải tiện nghi giải trí.',
    ]),
    Q('Phong cách kể chuyện của Nguyễn Thành Long?', ['Hài hước, châm biếm', 'Nhẹ nhàng, thấm thía, giàu chất thơ và chất họa', 'Trầm uất, bi quan', 'Bi kịch, dữ dội'], 1, 'Văn chương trữ tình giàu chất thơ, ca ngợi cuộc sống lao động bình dị.', [
      'Sai — văn ông trữ tình, nhẹ nhàng, không thiên về hài hước châm biếm.',
      'Đúng — văn nhẹ nhàng, thấm thía, giàu chất thơ và chất họa, ca ngợi cuộc sống lao động bình dị.',
      'Sai — giọng văn trong sáng, lạc quan, không trầm uất bi quan.',
      'Sai — truyện êm đềm, lắng đọng, không bi kịch dữ dội.',
    ]),
    Q('Tại sao tác giả không đặt tên cho các nhân vật?', ['Vì không quan trọng', 'Lý do văn phong', 'Quên đặt', 'Tô đậm tính chất khái quát — họ là những người lao động vô danh đang âm thầm cống hiến'], 3, 'Tên gọi như "anh thanh niên", "ông họa sĩ", "cô kỹ sư" ⇒ điển hình hóa.', [
      'Sai — đây là dụng ý nghệ thuật, không phải vì nhân vật không quan trọng.',
      'Sai — không đơn thuần là thói quen văn phong mà có ý nghĩa khái quát hóa.',
      'Sai — đây là chủ ý nghệ thuật chứ không phải tác giả quên đặt tên.',
      'Đúng — gọi theo nghề ("anh thanh niên", "ông họa sĩ", "cô kỹ sư") nhằm khái quát hóa lớp người lao động vô danh âm thầm cống hiến.',
    ]),
  ]),

  M(8, 'Chiếc lược ngà — Nguyễn Quang Sáng', [
    Q('"Chiếc lược ngà" sáng tác năm nào?', ['1966', '1970', '1975', '1980'], 0, 'Sáng tác năm 1966 khi tác giả đang ở chiến trường Nam Bộ.', [
      'Đúng — sáng tác năm 1966 khi Nguyễn Quang Sáng đang hoạt động ở chiến trường Nam Bộ.',
      'Sai — 1970 không đúng; truyện ra đời năm 1966.',
      'Sai — 1975 là năm thống nhất, sau khi truyện đã viết.',
      'Sai — 1980 muộn hơn nhiều so với năm sáng tác.',
    ]),
    Q('Hai nhân vật trung tâm là?', ['Ông Sáu và bà nội', 'Ông Sáu và bé Thu', 'Bác Ba và ông Sáu', 'Bé Thu và mẹ'], 1, 'Cha (ông Sáu) và con gái (bé Thu) — hai cha con trong chiến tranh.', [
      'Sai — bà nội chỉ là nhân vật phụ; trục chính là ông Sáu và bé Thu.',
      'Đúng — ông Sáu (cha) và bé Thu (con gái) là hai nhân vật trung tâm của câu chuyện tình phụ tử.',
      'Sai — bác Ba là người kể chuyện, nhân vật phụ.',
      'Sai — mẹ bé Thu không phải nhân vật trung tâm.',
    ]),
    Q('Vì sao bé Thu không nhận ông Sáu là cha?', ['Vì không quen', 'Vì ông Sáu có vết thẹo trên mặt khác với hình chụp', 'Vì ghét', 'Vì sợ người lạ mặc quân phục'], 1, 'Vết thẹo do chiến tranh làm khuôn mặt khác ảnh ⇒ bé Thu không nhận.', [
      'Sai — không phải vì lạ mà vì khuôn mặt cha khác bức ảnh.',
      'Đúng — vết thẹo do chiến tranh khiến mặt ông Sáu khác bức ảnh chụp chung với má, nên bé Thu không nhận.',
      'Sai — bé Thu không ghét cha; ngược lại em rất yêu ba và chỉ trung thành với hình ảnh ba trong ảnh.',
      'Sai — em không nhận vì vết thẹo lạ trên mặt, không phải vì sợ quân phục.',
    ]),
    Q('Khoảnh khắc bé Thu gọi "ba" trong truyện?', ['Khi ăn cơm', 'Khi đi học', 'Khi mới gặp', 'Khi ông Sáu sắp lên đường, bé thu vỡ òa thét lên "Ba…a…a…ba!"'], 3, 'Cảnh chia tay đầy nước mắt — tiếng "ba" muộn màng nhưng cảm động.', [
      'Sai — trong bữa cơm bé Thu còn hắt trứng cá, chưa chịu nhận ba.',
      'Sai — không có cảnh gọi "ba" lúc đi học.',
      'Sai — lúc mới gặp bé Thu sợ hãi bỏ chạy, không nhận ba.',
      'Đúng — đúng lúc ông Sáu sắp lên đường, bé Thu vỡ òa thét "Ba…a…a…ba!" — tiếng gọi muộn màng mà cảm động.',
    ]),
    Q('Chiếc lược ngà do ai làm và dành cho ai?', ['Bác Ba làm', 'Bé Thu làm', 'Bà nội làm', 'Ông Sáu làm từ ngà voi để tặng con gái'], 3, 'Ông Sáu kì công làm chiếc lược ngà tặng con — biểu tượng tình phụ tử.', [
      'Sai — bác Ba chỉ là người trao lại kỷ vật, không phải người làm.',
      'Sai — bé Thu là người được tặng, không phải người làm lược.',
      'Sai — không phải bà nội làm chiếc lược.',
      'Đúng — ông Sáu kì công làm chiếc lược từ ngà voi để tặng con gái — biểu tượng tình phụ tử thiêng liêng.',
    ]),
    Q('Chủ đề tác phẩm?', ['Tình bạn', 'Tình yêu đôi lứa', 'Lao động sản xuất', 'Tình cha con sâu nặng trong cảnh ngộ éo le của chiến tranh'], 3, 'Ca ngợi tình phụ tử thiêng liêng, đau đớn mất mát do chiến tranh.', [
      'Sai — truyện không viết về tình bạn.',
      'Sai — đây không phải chủ đề tình yêu đôi lứa.',
      'Sai — lao động sản xuất không phải chủ đề của truyện.',
      'Đúng — ca ngợi tình cha con sâu nặng, thiêng liêng trong cảnh ngộ éo le, mất mát do chiến tranh.',
    ]),
  ]),

  M(9, 'Các phương châm hội thoại', [
    Q('Phương châm về lượng yêu cầu?', ['Nói ngắn gọn', 'Nói có đủ nội dung, không thừa không thiếu', 'Nói thật', 'Nói lễ phép'], 1, 'Cung cấp đủ thông tin, không thiếu, không thừa.', [
      'Sai — "ngắn gọn, rành mạch" là yêu cầu của phương châm cách thức, không phải về lượng.',
      'Đúng — phương châm về lượng đòi hỏi nội dung đủ, không thiếu cũng không thừa.',
      'Sai — "nói thật, có bằng chứng" thuộc phương châm về chất.',
      'Sai — "nói lễ phép" thuộc phương châm lịch sự.',
    ]),
    Q('Phương châm về chất yêu cầu?', ['Nói rõ ràng', 'Nói có bằng chứng xác đáng, không nói điều mình không tin là đúng', 'Nói lễ phép', 'Nói có nội dung'], 1, 'Không nói điều mình không tin là đúng hoặc không có bằng chứng.', [
      'Sai — "nói rõ ràng" thuộc phương châm cách thức.',
      'Đúng — phương châm về chất đòi hỏi không nói điều mình không tin là đúng hoặc không có bằng chứng.',
      'Sai — "nói lễ phép" thuộc phương châm lịch sự.',
      'Sai — "nói có nội dung, đủ thông tin" thuộc phương châm về lượng.',
    ]),
    Q('Khi nói "Tôi nghe nói…", "Hình như…", người nói tuân thủ phương châm?', ['Phương châm về lượng (đủ thông tin)', 'Cách thức', 'Quan hệ', 'Chất'], 3, 'Báo trước độ tin cậy ⇒ tuân thủ phương châm về chất.', [
      'Sai — không liên quan lượng thông tin nhiều ít mà liên quan độ tin cậy của tin.',
      'Sai — đây không phải vấn đề diễn đạt rõ ràng (cách thức).',
      'Sai — phương châm quan hệ đòi hỏi nói đúng đề tài, không phải vấn đề ở đây.',
      'Đúng — báo trước rằng tin chưa chắc chắn chính là cách tuân thủ phương châm về chất.',
    ]),
    Q('Phương châm cách thức yêu cầu?', ['Nói thật', 'Nói ngắn gọn, rành mạch, tránh mơ hồ', 'Nói có nội dung', 'Nói lễ phép'], 1, 'Trình bày rõ ràng, ngắn gọn, không mơ hồ.', [
      'Sai — "nói thật" thuộc phương châm về chất.',
      'Đúng — phương châm cách thức đòi hỏi nói ngắn gọn, rành mạch, tránh mơ hồ.',
      'Sai — "nói có nội dung, đủ thông tin" thuộc phương châm về lượng.',
      'Sai — "nói lễ phép" thuộc phương châm lịch sự.',
    ]),
    Q('Phương châm lịch sự đòi hỏi?', ['Nói nhiều', 'Nói nhanh', 'Tôn trọng người đối thoại', 'Nói thật to'], 2, 'Tế nhị, tôn trọng đối tượng giao tiếp.', [
      'Sai — nói nhiều có khi vi phạm phương châm về lượng, không phải lịch sự.',
      'Sai — tốc độ nói không phải nội dung của phương châm lịch sự.',
      'Đúng — phương châm lịch sự đòi hỏi tế nhị, tôn trọng người đối thoại.',
      'Sai — âm lượng to nhỏ không phải yêu cầu của phương châm lịch sự.',
    ]),
    Q('Câu "Trâu là một loài gia súc nuôi ở nhà" vi phạm phương châm?', ['Phương châm về chất (nói điều chưa chắc đúng)', 'Quan hệ', 'Lịch sự', 'Lượng (thừa)'], 3, '"Gia súc" đã hàm nghĩa "nuôi ở nhà" ⇒ thừa thông tin.', [
      'Sai — câu vẫn đúng sự thật, không vi phạm phương châm về chất.',
      'Sai — câu vẫn đúng đề tài (nói về trâu), không vi phạm phương châm quan hệ.',
      'Sai — câu không thiếu lịch sự với người nghe.',
      'Đúng — "gia súc" đã bao hàm nghĩa "nuôi ở nhà" nên thông tin bị thừa, vi phạm phương châm về lượng.',
    ]),
  ]),

  M(10, 'Cách dẫn trực tiếp và cách dẫn gián tiếp', [
    Q('Dẫn trực tiếp là?', ['Nhắc lại nguyên văn lời/ý của người khác, đặt trong dấu ngoặc kép', 'Bỏ qua', 'Tóm tắt lại ý', 'Diễn đạt khác đi'], 0, 'Trích nguyên văn, có dấu hai chấm + dấu ngoặc kép.', [
      'Đúng — dẫn trực tiếp là nhắc lại nguyên văn lời/ý người khác, đặt trong dấu ngoặc kép.',
      'Sai — bỏ qua không phải khái niệm dẫn lời.',
      'Sai — tóm tắt, diễn đạt lại theo ý mình là dẫn gián tiếp, không phải trực tiếp.',
      'Sai — diễn đạt khác đi chính là đặc điểm của dẫn gián tiếp.',
    ]),
    Q('Dẫn gián tiếp là?', ['Thuật lại lời/ý theo cách của mình, có thể thay đổi từ ngữ', 'Đặt trong ngoặc kép', 'Hỏi lại', 'Trích nguyên văn'], 0, 'Thuật lại, không cần ngoặc kép, có thể thay đổi đại từ, từ ngữ.', [
      'Đúng — dẫn gián tiếp là thuật lại lời/ý theo cách của mình, có thể thay đổi từ ngữ, không cần ngoặc kép.',
      'Sai — đặt trong ngoặc kép là dấu hiệu của dẫn trực tiếp.',
      'Sai — hỏi lại không phải khái niệm dẫn lời.',
      'Sai — trích nguyên văn là dẫn trực tiếp, không phải gián tiếp.',
    ]),
    Q('Câu nào sử dụng cách dẫn trực tiếp?', ['Mẹ tôi nhắc về việc đi học', 'Mẹ tôi bảo ngày mai tôi đi học sớm', 'Tôi đi học sớm', 'Mẹ tôi nói: "Ngày mai con đi học sớm nhé!"'], 3, 'Có dấu hai chấm + ngoặc kép trích nguyên văn lời mẹ.', [
      'Sai — câu này chỉ thuật lại chung chung, không trích nguyên văn.',
      'Sai — đây là dẫn gián tiếp, không có dấu hai chấm và ngoặc kép.',
      'Sai — câu này không dẫn lời ai cả.',
      'Đúng — có dấu hai chấm và dấu ngoặc kép trích nguyên văn lời của mẹ, đúng cách dẫn trực tiếp.',
    ]),
    Q('Chuyển sang gián tiếp: "Anh hỏi: \'Em có khỏe không?\'" → ?', ['Anh hỏi: em khỏe.', 'Anh hỏi em có khỏe không.', 'Anh nói em khỏe.', 'Em khỏe không?'], 1, 'Bỏ ngoặc kép, đổi đại từ phù hợp, thường thêm "có … không" hoặc "rằng".', [
      'Sai — vẫn còn dấu hai chấm và làm sai nghĩa (biến câu hỏi thành câu khẳng định).',
      'Đúng — bỏ ngoặc kép, giữ nghĩa hỏi bằng cấu trúc "có … không", thuật lại gián tiếp đúng cách.',
      'Sai — đổi "hỏi" thành "nói… khỏe" làm mất sắc thái câu hỏi ban đầu.',
      'Sai — giữ nguyên câu hỏi trực tiếp, chưa chuyển thành lời dẫn gián tiếp.',
    ]),
    Q('Khi dẫn gián tiếp, cần lưu ý?', ['Không cần chính xác', 'Đảm bảo trung thành ý của người nói', 'Chỉ cần ngắn gọn', 'Thay đổi hoàn toàn'], 1, 'Có thể đổi từ nhưng phải trung thành với ý nghĩa gốc.', [
      'Sai — vẫn phải bảo đảm đúng ý người nói, không được tùy tiện.',
      'Đúng — có thể đổi từ ngữ nhưng phải trung thành với ý nghĩa gốc của người nói.',
      'Sai — ngắn gọn chưa đủ; cốt yếu là không làm sai ý.',
      'Sai — thay đổi hoàn toàn sẽ làm sai lệch ý người nói.',
    ]),
    Q('Lời dẫn trực tiếp trong tác phẩm văn học thường dùng để?', ['Trữ tình', 'Trang trí', 'Rút gọn', 'Tăng tính chân thực, sinh động, khắc họa tính cách nhân vật'], 3, 'Giúp người đọc cảm nhận trực tiếp ngữ điệu, tính cách nhân vật.', [
      'Sai — mục đích không chỉ là trữ tình mà là khắc họa nhân vật chân thực.',
      'Sai — lời dẫn trực tiếp có chức năng nghệ thuật, không chỉ để trang trí.',
      'Sai — lời dẫn trực tiếp thường làm câu dài hơn, không nhằm rút gọn.',
      'Đúng — lời dẫn trực tiếp giúp người đọc cảm nhận trực tiếp ngữ điệu, tính cách nhân vật, tăng tính chân thực, sinh động.',
    ]),
  ]),

  M(11, 'Sự phát triển của từ vựng', [
    Q('Từ vựng tiếng Việt phát triển bằng các con đường nào?', ['Chỉ tạo từ mới', 'Chỉ vay mượn', 'Không phát triển', 'Phát triển nghĩa, tạo từ mới, vay mượn'], 3, '3 con đường chính: phát triển nghĩa, tạo từ mới (từ ghép, từ láy), vay mượn.', [
      'Sai — tạo từ mới chỉ là một trong ba con đường, chưa đầy đủ.',
      'Sai — vay mượn chỉ là một con đường, còn phát triển nghĩa và tạo từ mới.',
      'Sai — từ vựng luôn vận động, phát triển theo thời gian.',
      'Đúng — ba con đường chính: phát triển nghĩa của từ, tạo từ mới và vay mượn.',
    ]),
    Q('Từ "chân" trong "chân bàn" so với "chân người" là?', ['Phát triển nghĩa từ nghĩa gốc theo phương thức ẩn dụ', 'Không liên quan', 'Vay mượn', 'Từ Hán-Việt'], 0, 'Từ "chân" mở rộng nghĩa: từ nghĩa gốc (bộ phận cơ thể) → nghĩa chuyển (phần dưới đỡ vật).', [
      'Đúng — "chân bàn" là nghĩa chuyển từ "chân người" theo phương thức ẩn dụ (giống về vị trí, chức năng đỡ phần trên).',
      'Sai — hai nghĩa có liên hệ chặt chẽ qua sự chuyển nghĩa.',
      'Sai — "chân" là từ thuần Việt, không phải từ vay mượn.',
      'Sai — "chân" không phải từ Hán-Việt.',
    ]),
    Q('Từ "internet", "email", "PC" thuộc loại?', ['Từ Hán-Việt', 'Từ vay mượn (từ tiếng Anh)', 'Từ thuần Việt', 'Từ láy'], 1, 'Mượn từ tiếng Anh, biểu thị khái niệm công nghệ mới.', [
      'Sai — đây là từ gốc tiếng Anh, không phải từ Hán-Việt.',
      'Đúng — đều là từ vay mượn từ tiếng Anh, biểu thị các khái niệm công nghệ mới.',
      'Sai — không phải từ thuần Việt mà mượn nguyên từ tiếng Anh.',
      'Sai — đây không phải từ láy.',
    ]),
    Q('Tỷ lệ từ Hán-Việt trong tiếng Việt khoảng?', ['10%', '90%', '60–70%', '30%'], 2, 'Hơn 60% từ vựng có nguồn gốc Hán, hình thành qua nhiều thế kỷ tiếp xúc.', [
      'Sai — tỷ lệ thấp như 10% không đúng; từ Hán-Việt chiếm phần lớn vốn từ.',
      'Sai — 90% là quá cao; còn nhiều từ thuần Việt và vay mượn khác.',
      'Đúng — khoảng 60–70% vốn từ có nguồn gốc Hán, hình thành qua nhiều thế kỷ tiếp xúc văn hóa.',
      'Sai — 30% là quá thấp so với thực tế.',
    ]),
    Q('Từ "smartphone" được tạo theo phương thức?', ['Từ thuần Việt', 'Vay mượn có cải biến', 'Vay mượn nguyên dạng', 'Phát triển nghĩa'], 2, 'Mượn nguyên dạng tiếng Anh, không Việt hóa.', [
      'Sai — đây là từ gốc tiếng Anh, không phải thuần Việt.',
      'Sai — từ này được giữ nguyên dạng, không bị cải biến cách viết.',
      'Đúng — mượn nguyên dạng tiếng Anh, không Việt hóa hình thức.',
      'Sai — đây là từ mượn mới, không phải mở rộng nghĩa của từ có sẵn.',
    ]),
    Q('Từ "kinh tế" trong tiếng Việt là?', ['Từ láy', 'Từ Hán-Việt (kinh thế tế dân)', 'Từ vay mượn từ Anh', 'Từ thuần Việt'], 1, '"Kinh tế" bắt nguồn từ "kinh bang tế thế" trong tiếng Hán cổ.', [
      'Sai — "kinh tế" không phải từ láy (hai tiếng không láy âm, không có quan hệ ngữ âm).',
      'Đúng — "kinh tế" là từ Hán-Việt, bắt nguồn từ "kinh bang tế thế" / "kinh thế tế dân".',
      'Sai — đây là từ gốc Hán, không phải mượn từ tiếng Anh.',
      'Sai — "kinh tế" có nguồn gốc Hán, không phải từ thuần Việt.',
    ]),
  ]),

  M(12, 'Văn bản thuyết minh có yếu tố nghệ thuật', [
    Q('Văn bản thuyết minh là loại văn?', ['Bàn luận', 'Cung cấp tri thức khách quan về sự vật, hiện tượng', 'Bộc lộ cảm xúc', 'Kể chuyện'], 1, 'Mục đích: trình bày, giới thiệu, giải thích để người đọc hiểu rõ đối tượng.', [
      'Sai — bàn luận, thuyết phục là đặc trưng của văn nghị luận.',
      'Đúng — văn thuyết minh cung cấp tri thức khách quan, giúp người đọc hiểu rõ sự vật, hiện tượng.',
      'Sai — bộc lộ cảm xúc là đặc trưng của văn biểu cảm.',
      'Sai — kể chuyện là đặc trưng của văn tự sự.',
    ]),
    Q('Yếu tố nghệ thuật trong văn thuyết minh có vai trò?', ['Làm bài văn sinh động, hấp dẫn hơn nhưng vẫn đảm bảo tính khoa học', 'Thay thế thông tin', 'Không có vai trò', 'Phá vỡ tính khách quan'], 0, 'Kể chuyện, miêu tả, đối thoại… giúp bài văn thu hút mà vẫn chính xác.', [
      'Đúng — kể chuyện, miêu tả, đối thoại… làm bài thuyết minh sinh động, hấp dẫn mà vẫn giữ tính khoa học.',
      'Sai — yếu tố nghệ thuật hỗ trợ chứ không thay thế thông tin tri thức.',
      'Sai — yếu tố nghệ thuật có vai trò làm bài văn cuốn hút hơn.',
      'Sai — nếu lạm dụng mới phá vỡ tính khách quan; dùng đúng mức vẫn giữ tính khoa học.',
    ]),
    Q('Khi thuyết minh về một di tích lịch sử, cần?', ['Chỉ bộc lộ cảm xúc', 'Chỉ kể chuyện', 'Chỉ tả vẻ đẹp', 'Nêu vị trí, lịch sử, kiến trúc, giá trị + có thể kèm câu chuyện liên quan'], 3, 'Kết hợp thông tin xác thực + yếu tố biểu cảm phù hợp.', [
      'Sai — chỉ bộc lộ cảm xúc sẽ thiếu tri thức khách quan về di tích.',
      'Sai — chỉ kể chuyện không cung cấp đủ thông tin thuyết minh.',
      'Sai — chỉ tả vẻ đẹp là thiên về miêu tả, thiếu tri thức về di tích.',
      'Đúng — cần nêu vị trí, lịch sử, kiến trúc, giá trị; có thể kèm câu chuyện để hấp dẫn nhưng vẫn xác thực.',
    ]),
    Q('Văn bản "Hạ Long — đá và nước" sử dụng phương pháp thuyết minh nào nổi bật?', ['Miêu tả + tưởng tượng', 'Liệt kê', 'So sánh', 'Thống kê'], 0, 'Tác giả miêu tả + tưởng tượng để Hạ Long hiện lên sống động, có hồn.', [
      'Đúng — tác giả kết hợp miêu tả và tưởng tượng để Hạ Long hiện lên sống động, có hồn.',
      'Sai — liệt kê không phải nét nổi bật làm nên sức gợi của văn bản này.',
      'Sai — so sánh có dùng nhưng không phải phương pháp nổi bật nhất ở đây.',
      'Sai — văn bản không thiên về thống kê số liệu.',
    ]),
    Q('Yêu cầu của văn thuyết minh là?', ['Chính xác, khách quan, rõ ràng', 'Biểu cảm mạnh', 'Giàu hình ảnh tưởng tượng, ẩn dụ', 'Hư cấu'], 0, 'Đảm bảo tính khoa học là yêu cầu hàng đầu.', [
      'Đúng — văn thuyết minh phải chính xác, khách quan, rõ ràng — đó là tính khoa học hàng đầu.',
      'Sai — biểu cảm mạnh là yêu cầu của văn biểu cảm.',
      'Sai — giàu hình ảnh, ẩn dụ là đặc trưng của văn nghệ thuật, không phải yêu cầu cốt lõi của thuyết minh.',
      'Sai — văn thuyết minh phản ánh sự thật, không hư cấu.',
    ]),
    Q('Phương pháp thuyết minh nào dùng để giới thiệu số liệu cụ thể?', ['Nêu ví dụ', 'Liệt kê', 'Phân loại', 'Dùng số liệu/thống kê'], 3, 'Số liệu tăng độ tin cậy, sức thuyết phục.', [
      'Sai — nêu ví dụ nhằm minh họa, không phải phương pháp đưa số liệu.',
      'Sai — liệt kê là kể ra hàng loạt đặc điểm, không nhất thiết kèm số liệu.',
      'Sai — phân loại là chia đối tượng thành các nhóm, không phải đưa số liệu.',
      'Đúng — dùng số liệu/thống kê là phương pháp giới thiệu con số cụ thể, tăng độ tin cậy và sức thuyết phục.',
    ]),
  ]),

  M(13, 'Văn tự sự kết hợp miêu tả nội tâm', [
    Q('Miêu tả nội tâm trong văn tự sự là?', ['Tả ngoại hình', 'Tả cảnh vật', 'Tái hiện ý nghĩ, cảm xúc, suy tư của nhân vật', 'Kể sự việc'], 2, 'Khắc họa thế giới bên trong nhân vật.', [
      'Sai — tả ngoại hình là miêu tả bên ngoài, không phải nội tâm.',
      'Sai — tả cảnh vật là miêu tả ngoại cảnh, không phải thế giới bên trong nhân vật.',
      'Đúng — miêu tả nội tâm là tái hiện ý nghĩ, cảm xúc, suy tư bên trong nhân vật.',
      'Sai — kể sự việc là thuật lại diễn biến, không phải khắc họa nội tâm.',
    ]),
    Q('Có những cách miêu tả nội tâm nào?', ['Trực tiếp (kể ra suy nghĩ) và gián tiếp (qua hành động, cử chỉ, nét mặt)', 'Không có cách nào', 'Chỉ gián tiếp', 'Chỉ trực tiếp'], 0, 'Trực tiếp: kể thẳng; gián tiếp: ngoại hiện qua hành động.', [
      'Đúng — có hai cách: trực tiếp (kể thẳng ý nghĩ, cảm xúc) và gián tiếp (qua hành động, cử chỉ, nét mặt).',
      'Sai — có những cách miêu tả nội tâm rõ ràng đã được học.',
      'Sai — ngoài gián tiếp còn có cách trực tiếp kể thẳng nội tâm.',
      'Sai — ngoài trực tiếp còn có cách gián tiếp qua hành động, cử chỉ.',
    ]),
    Q('Đoạn "ông Hai vò đầu bứt tai, lẩm bẩm…" trong "Làng" sử dụng cách miêu tả nội tâm?', ['Không miêu tả nội tâm, chỉ kể sự việc', 'Trực tiếp', 'Gián tiếp qua hành động', 'Tả ngoại hình'], 2, 'Miêu tả hành động vò đầu bứt tai ⇒ thể hiện nội tâm rối bời.', [
      'Sai — đoạn này có miêu tả nội tâm thông qua hành động.',
      'Sai — không kể thẳng suy nghĩ mà bộc lộ qua cử chỉ nên không phải trực tiếp.',
      'Đúng — qua hành động "vò đầu bứt tai, lẩm bẩm", tác giả gián tiếp thể hiện nội tâm rối bời của ông Hai.',
      'Sai — đây không phải tả ngoại hình mà bộc lộ tâm trạng qua cử chỉ.',
    ]),
    Q('Miêu tả nội tâm giúp?', ['Không có ích', 'Ngắt mạch truyện', 'Bài văn dài hơn', 'Nhân vật trở nên sống động, có chiều sâu tâm hồn'], 3, 'Nhân vật có "linh hồn", lay động cảm xúc người đọc.', [
      'Sai — miêu tả nội tâm rất có ích trong việc khắc họa nhân vật.',
      'Sai — miêu tả nội tâm hòa vào mạch truyện chứ không ngắt mạch.',
      'Sai — mục đích là khắc họa chiều sâu nhân vật, không phải kéo dài bài văn.',
      'Đúng — miêu tả nội tâm khiến nhân vật sống động, có chiều sâu tâm hồn, lay động người đọc.',
    ]),
    Q('Trong kể chuyện, đoạn độc thoại nội tâm thường?', ['Phải đặt trong ngoặc kép', 'Đặt sau gạch đầu dòng hoặc trong dấu ngoặc kép, có khi không dấu', 'Không cần dấu', 'Đặt trong dấu ngoặc đơn'], 1, 'Tùy phong cách tác giả; phổ biến là gạch đầu dòng hoặc dùng "nghĩ thầm:".', [
      'Sai — không bắt buộc phải đặt trong ngoặc kép; cách trình bày linh hoạt.',
      'Đúng — tùy phong cách tác giả, độc thoại nội tâm có thể đặt sau gạch đầu dòng, trong ngoặc kép, đôi khi không dùng dấu.',
      'Sai — không phải luôn không dùng dấu; cách trình bày đa dạng.',
      'Sai — dấu ngoặc đơn thường dùng cho chú thích, không phải độc thoại nội tâm.',
    ]),
    Q('Yếu tố nội tâm quan trọng nhất với thể loại?', ['Truyện ngắn, tiểu thuyết', 'Báo cáo', 'Văn bản hành chính', 'Thơ lục bát'], 0, 'Truyện hiện đại đặc biệt chú trọng khắc họa nội tâm.', [
      'Đúng — truyện ngắn, tiểu thuyết hiện đại đặc biệt chú trọng khắc họa nội tâm nhân vật.',
      'Sai — báo cáo là văn bản thông tin, không chú trọng nội tâm.',
      'Sai — văn bản hành chính mang tính khuôn mẫu, không miêu tả nội tâm.',
      'Sai — thơ lục bát thiên về trữ tình, nhưng yếu tố nội tâm nhân vật là đặc trưng của truyện hơn cả.',
    ]),
  ]),

  M(14, 'Truyện Kiều — Nguyễn Du (giới thiệu)', [
    Q('"Truyện Kiều" còn có tên gọi nào?', ['Đoạn trường tân thanh', 'Lục Vân Tiên', 'Cung oán ngâm', 'Chinh phụ ngâm'], 0, '"Đoạn trường tân thanh" — "Tiếng kêu mới đứt ruột".', [
      'Đúng — tên chữ Hán của Truyện Kiều là "Đoạn trường tân thanh" (tiếng kêu mới đứt ruột).',
      'Sai — "Lục Vân Tiên" là truyện thơ của Nguyễn Đình Chiểu, không liên quan Truyện Kiều.',
      'Sai — "Cung oán ngâm khúc" là tác phẩm của Nguyễn Gia Thiều.',
      'Sai — "Chinh phụ ngâm" là tác phẩm của Đặng Trần Côn (Đoàn Thị Điểm dịch).',
    ]),
    Q('Tác phẩm gốc của Truyện Kiều là?', ['Kim Vân Kiều truyện (Thanh Tâm Tài Nhân)', 'Tam Quốc Diễn Nghĩa', 'Hồng Lâu Mộng', 'Tây Du Ký'], 0, 'Nguyễn Du sáng tạo từ tiểu thuyết "Kim Vân Kiều truyện" của Thanh Tâm Tài Nhân (TQ).', [
      'Đúng — Nguyễn Du dựa trên cốt truyện "Kim Vân Kiều truyện" của Thanh Tâm Tài Nhân (Trung Quốc) để sáng tạo.',
      'Sai — "Tam Quốc Diễn Nghĩa" của La Quán Trung, không liên quan Truyện Kiều.',
      'Sai — "Hồng Lâu Mộng" của Tào Tuyết Cần, không phải nguồn gốc Truyện Kiều.',
      'Sai — "Tây Du Ký" của Ngô Thừa Ân, không phải tác phẩm gốc.',
    ]),
    Q('Truyện Kiều viết bằng thể thơ?', ['Song thất lục bát', 'Lục bát', 'Thơ tự do, không gò bó vần luật', 'Thất ngôn'], 1, '3 254 câu lục bát.', [
      'Sai — Truyện Kiều không theo thể song thất lục bát.',
      'Đúng — Truyện Kiều gồm 3 254 câu thơ lục bát.',
      'Sai — Truyện Kiều tuân thủ chặt chẽ vần luật lục bát, không phải thơ tự do.',
      'Sai — thất ngôn là thể thơ 7 chữ; Truyện Kiều là lục bát (6-8 chữ).',
    ]),
    Q('Giá trị nội dung lớn nhất của Truyện Kiều?', ['Sử thi', 'Tôn giáo', 'Giá trị hiện thực và nhân đạo sâu sắc', 'Trào phúng'], 2, 'Phê phán xã hội phong kiến + đề cao quyền sống, hạnh phúc con người.', [
      'Sai — Truyện Kiều không phải tác phẩm sử thi.',
      'Sai — giá trị cốt lõi không phải tôn giáo.',
      'Đúng — giá trị hiện thực (phê phán xã hội phong kiến) và nhân đạo (đề cao quyền sống, hạnh phúc con người).',
      'Sai — Truyện Kiều mang cảm hứng nhân đạo bi thương, không phải trào phúng.',
    ]),
    Q('Số phận Thúy Kiều là điển hình cho?', ['Anh hùng dân tộc', 'Người phụ nữ tài hoa, bạc mệnh trong xã hội phong kiến', 'Nông dân', 'Trí thức nho học'], 1, 'Tài sắc vẹn toàn nhưng bị xã hội vùi dập ⇒ chủ đề "hồng nhan bạc mệnh".', [
      'Sai — Thúy Kiều không phải hình tượng anh hùng dân tộc.',
      'Đúng — Kiều tài sắc vẹn toàn nhưng bị xã hội phong kiến vùi dập, điển hình cho "hồng nhan bạc mệnh".',
      'Sai — Kiều xuất thân con nhà nho trung lưu, không phải hình tượng người nông dân.',
      'Sai — Kiều là người phụ nữ tài hoa bạc mệnh, không phải đại diện trí thức nho học.',
    ]),
    Q('Nguyễn Du sống ở thời kỳ nào?', ['Nhà Trần', 'Cuối Lê đầu Nguyễn (cuối 18 - đầu 19)', 'Nhà Tây Sơn xa xưa', 'Đầu nhà Lý'], 1, 'Nguyễn Du (1765–1820), chứng kiến biến động lớn cuối Lê - Tây Sơn - Nguyễn.', [
      'Sai — nhà Trần ở thế kỷ XIII–XIV, quá sớm so với Nguyễn Du.',
      'Đúng — Nguyễn Du (1765–1820) sống cuối Lê - đầu Nguyễn, chứng kiến biến động lớn cuối Lê - Tây Sơn - Nguyễn.',
      'Sai — Nguyễn Du sống vắt qua thời Tây Sơn nhưng đó không phải "xa xưa"; ông là người cùng thời.',
      'Sai — nhà Lý ở thế kỷ XI–XIII, quá sớm.',
    ]),
  ]),

  M(15, 'Chị em Thuý Kiều (trích Truyện Kiều)', [
    Q('Đoạn "Chị em Thuý Kiều" giới thiệu nhân vật nào?', ['Kim Trọng', 'Thúy Vân và Thúy Kiều', 'Từ Hải', 'Mã Giám Sinh'], 1, 'Giới thiệu hai chị em Thúy Vân (em) và Thúy Kiều (chị).', [
      'Sai — Kim Trọng xuất hiện ở đoạn khác (gặp gỡ buổi du xuân), không phải đoạn này.',
      'Đúng — đoạn trích giới thiệu hai chị em Thúy Vân (em) và Thúy Kiều (chị).',
      'Sai — Từ Hải là người anh hùng Kiều gặp về sau, không thuộc đoạn này.',
      'Sai — Mã Giám Sinh là kẻ lừa mua Kiều, xuất hiện ở đoạn khác.',
    ]),
    Q('Câu "Mai cốt cách, tuyết tinh thần" miêu tả?', ['Vẻ đẹp cụ thể của Vân', 'Cảnh thiên nhiên', 'Tâm trạng buồn', 'Vẻ đẹp thanh cao của hai chị em'], 3, 'Khái quát vẻ đẹp tinh thần: cốt cách như mai, tinh thần như tuyết.', [
      'Sai — câu này khái quát chung cho cả hai chị em, không riêng Vân.',
      'Sai — mai, tuyết ở đây là hình ảnh ước lệ tả người, không phải tả cảnh.',
      'Sai — câu không nói về tâm trạng buồn mà ca ngợi vẻ đẹp.',
      'Đúng — khái quát vẻ đẹp thanh cao của hai chị em: cốt cách như mai, tinh thần trong trắng như tuyết.',
    ]),
    Q('Vẻ đẹp Thúy Vân được miêu tả qua các câu?', ['Hồng nhan bạc mệnh', 'Làn thu thủy nét xuân sơn', 'Mai cốt cách', 'Khuôn trăng đầy đặn, nét ngài nở nang…'], 3, '"Khuôn trăng đầy đặn… mây thua nước tóc, tuyết nhường màu da" — đẹp đoan trang phúc hậu.', [
      'Sai — "hồng nhan bạc mệnh" là quan niệm về số phận, không phải câu tả Vân.',
      'Sai — "làn thu thủy nét xuân sơn" là câu tả Thúy Kiều, không phải Vân.',
      'Sai — "mai cốt cách" là câu khái quát chung cả hai chị em.',
      'Đúng — "khuôn trăng đầy đặn, nét ngài nở nang… mây thua nước tóc, tuyết nhường màu da" tả vẻ đoan trang, phúc hậu của Vân.',
    ]),
    Q('Vẻ đẹp Thúy Kiều được miêu tả?', ['Mạnh mẽ', 'Phúc hậu hiền lành', 'Trầm tư', 'Sắc sảo mặn mà hơn, "làn thu thủy nét xuân sơn", có tài thơ ca cầm kỳ'], 3, 'Kiều đẹp sắc sảo + có tài: thơ, vẽ, đàn, hát.', [
      'Sai — vẻ đẹp Kiều là sắc sảo mặn mà, không phải nét mạnh mẽ.',
      'Sai — phúc hậu hiền lành là nét tả Thúy Vân, không phải Kiều.',
      'Sai — "trầm tư" không phải đặc điểm được tả ở Kiều trong đoạn này.',
      'Đúng — Kiều sắc sảo mặn mà, "làn thu thủy nét xuân sơn", lại tài hoa cầm kỳ thi họa vẹn toàn.',
    ]),
    Q('Nghệ thuật chủ đạo trong đoạn này?', ['Châm biếm', 'Ước lệ tượng trưng — lấy thiên nhiên làm chuẩn so sánh', 'Tả thực', 'Phóng đại'], 1, 'Bút pháp ước lệ cổ điển: mai, tuyết, hoa, ngọc, thu thủy, xuân sơn…', [
      'Sai — đoạn ca ngợi vẻ đẹp, không hề châm biếm.',
      'Đúng — bút pháp ước lệ tượng trưng cổ điển: lấy mai, tuyết, hoa, ngọc, thu thủy, xuân sơn làm chuẩn tả người.',
      'Sai — Nguyễn Du dùng ước lệ chứ không tả thực chi tiết.',
      'Sai — phóng đại có thể xuất hiện nhưng không phải nghệ thuật chủ đạo; cốt lõi là ước lệ tượng trưng.',
    ]),
    Q('Câu "Hoa ghen thua thắm, liễu hờn kém xanh" báo hiệu?', ['Cuộc đời Kiều bình yên', 'Tình yêu hạnh phúc', 'Vẻ đẹp tự nhiên', 'Kiều sẽ gặp nhiều sóng gió, đau khổ ("hồng nhan bạc mệnh")'], 3, 'Hoa, liễu phải ghen ⇒ tài sắc của Kiều gây tai họa cho chính nàng.', [
      'Sai — "ghen", "hờn" báo hiệu sóng gió, không phải bình yên.',
      'Sai — câu thơ dự báo bất hạnh, không phải tình yêu hạnh phúc.',
      'Sai — câu không chỉ tả vẻ đẹp mà còn dự báo số phận.',
      'Đúng — hoa ghen, liễu hờn cho thấy thiên nhiên đố kỵ với sắc đẹp Kiều, dự báo cuộc đời sóng gió, "hồng nhan bạc mệnh".',
    ]),
  ]),

  M(16, 'Cảnh ngày xuân (trích Truyện Kiều)', [
    Q('"Cảnh ngày xuân" tả khung cảnh?', ['Ngày hè', 'Tết Nguyên Đán', 'Mùa đông', 'Lễ hội Thanh Minh tháng 3'], 3, 'Cảnh tiết Thanh Minh (tháng 3), chị em Kiều đi du xuân.', [
      'Sai — đoạn tả cảnh mùa xuân tiết Thanh Minh, không phải ngày hè.',
      'Sai — không phải Tết Nguyên Đán mà là tiết Thanh Minh tháng ba.',
      'Sai — cảnh xuân tươi tắn, không phải mùa đông.',
      'Đúng — cảnh tiết Thanh Minh (tháng 3) khi chị em Kiều đi tảo mộ và du xuân.',
    ]),
    Q('Câu "Cỏ non xanh tận chân trời / Cành lê trắng điểm một vài bông hoa" sử dụng?', ['Nhân hóa', 'Nghệ thuật chấm phá hội họa', 'So sánh', 'Phóng đại'], 1, 'Bút pháp chấm phá: nền xanh + điểm trắng ⇒ bức tranh xuân tinh khôi, thanh khiết.', [
      'Sai — câu thơ không gán đặc điểm con người cho vật nên không phải nhân hóa.',
      'Đúng — bút pháp chấm phá hội họa: nền cỏ xanh điểm vài bông lê trắng tạo bức tranh xuân tinh khôi.',
      'Sai — không có từ so sánh và vế so sánh trong câu.',
      'Sai — đây là nét vẽ tinh tế, không phải phóng đại.',
    ]),
    Q('Lễ hội Thanh Minh có hai phần?', ['Lễ Phật + hội chợ', 'Lễ cưới + hội đèn', 'Lễ tảo mộ + hội đạp thanh', 'Lễ tế trời + hội thi thơ'], 2, 'Tảo mộ (sửa sang mồ mả) + đạp thanh (chơi xuân ngoài đồng).', [
      'Sai — không phải lễ Phật và hội chợ.',
      'Sai — không phải lễ cưới và hội đèn.',
      'Đúng — gồm lễ tảo mộ (sửa sang mồ mả) và hội đạp thanh (đi chơi xuân ngoài đồng).',
      'Sai — không phải lễ tế trời và hội thi thơ.',
    ]),
    Q('Cuối đoạn, tâm trạng chị em Kiều?', ['Buồn ngủ', 'Bâng khuâng, man mác buồn khi chiều tà', 'Háo hức về nhà', 'Vui rộn ràng'], 1, '"Tà tà bóng ngả về tây" + "nao nao dòng nước uốn quanh" ⇒ buồn man mác, dự báo điều sắp xảy ra (gặp mộ Đạm Tiên).', [
      'Sai — "buồn ngủ" không phải tâm trạng được gợi trong đoạn.',
      'Đúng — "tà tà bóng ngả về tây", "nao nao dòng nước" gợi nỗi bâng khuâng, man mác buồn lúc chiều tà.',
      'Sai — cảm xúc cuối đoạn lưu luyến, bâng khuâng chứ không phải háo hức về nhà.',
      'Sai — niềm vui rộn ràng là ở giữa hội; cuối đoạn lại lắng xuống buồn man mác.',
    ]),
    Q('Nghệ thuật miêu tả trong đoạn?', ['Tả cảnh thiên nhiên kết hợp tả tâm trạng (tả cảnh ngụ tình)', 'Đối thoại', 'Chỉ tả cảnh', 'Chỉ tả tâm trạng'], 0, 'Cảnh + tình hòa quyện — đặc trưng thơ Nguyễn Du.', [
      'Đúng — đoạn dùng nghệ thuật tả cảnh ngụ tình: cảnh và tình hòa quyện, đặc trưng thơ Nguyễn Du.',
      'Sai — đoạn không xây dựng trên đối thoại nhân vật.',
      'Sai — không chỉ tả cảnh; cảnh còn gợi tâm trạng con người.',
      'Sai — không chỉ tả tâm trạng; tâm trạng được gửi gắm qua cảnh vật.',
    ]),
    Q('Từ "nao nao" trong "nao nao dòng nước uốn quanh" gợi?', ['Cô đơn', 'Vui vẻ', 'Tức giận', 'Cảm giác xôn xao, bâng khuâng'], 3, 'Từ láy gợi tâm trạng man mác, dự cảm.', [
      'Sai — "nao nao" không nghiêng hẳn về cô đơn mà gợi nỗi xao động mơ hồ.',
      'Sai — từ láy này gợi nỗi buồn man mác, không phải vui vẻ.',
      'Sai — "nao nao" không gợi sự tức giận.',
      'Đúng — từ láy "nao nao" gợi cảm giác xôn xao, bâng khuâng, dự cảm điều sắp xảy ra.',
    ]),
  ]),

  M(17, 'Kiều ở lầu Ngưng Bích', [
    Q('"Kiều ở lầu Ngưng Bích" diễn tả tâm trạng Kiều khi nào?', ['Sống cùng Từ Hải', 'Bị Mã Giám Sinh lừa, giam ở lầu Ngưng Bích', 'Vui chơi với gia đình', 'Mới gặp Kim Trọng'], 1, 'Kiều bị Tú Bà giam lỏng ở lầu Ngưng Bích sau khi bị Mã Giám Sinh lừa.', [
      'Sai — Kiều gặp Từ Hải về sau; đoạn này nàng đang bị giam lỏng cô đơn.',
      'Đúng — sau khi bị Mã Giám Sinh lừa, Kiều bị Tú Bà giam lỏng ở lầu Ngưng Bích.',
      'Sai — đoạn này Kiều cô đơn nơi đất khách, không phải vui chơi cùng gia đình.',
      'Sai — cảnh gặp Kim Trọng ở đoạn đầu tác phẩm, không phải đây.',
    ]),
    Q('Cảnh "Trước lầu Ngưng Bích khóa xuân" cho thấy?', ['Niềm vui', 'Sự cô đơn, bị giam cầm tuổi xuân', 'Sự tự do', 'Cảnh đẹp lãng mạn'], 1, '"Khóa xuân" = giam giữ tuổi thanh xuân; gợi không gian giam cầm, cô độc.', [
      'Sai — "khóa xuân" gợi sự giam cầm, không phải niềm vui.',
      'Đúng — "khóa xuân" nghĩa là giam giữ tuổi thanh xuân, gợi không gian giam cầm, cô độc.',
      'Sai — Kiều đang bị giam lỏng, hoàn toàn mất tự do.',
      'Sai — không gian rộng nhưng hoang vắng, gợi cô đơn chứ không lãng mạn.',
    ]),
    Q('Kiều nhớ những ai trong đoạn này?', ['Nhớ Từ Hải', 'Chỉ nhớ Kim Trọng', 'Chỉ nhớ cha mẹ', 'Nhớ Kim Trọng và cha mẹ'], 3, 'Nỗi nhớ kép: Kim Trọng (tình yêu) và cha mẹ (chữ hiếu).', [
      'Sai — Từ Hải chưa xuất hiện ở thời điểm này.',
      'Sai — Kiều không chỉ nhớ Kim Trọng mà còn nhớ cha mẹ.',
      'Sai — Kiều không chỉ nhớ cha mẹ mà còn nhớ Kim Trọng.',
      'Đúng — nỗi nhớ kép: nhớ Kim Trọng (tình yêu) và nhớ cha mẹ (chữ hiếu).',
    ]),
    Q('Vì sao Kiều nhớ Kim Trọng trước, cha mẹ sau?', ['Cha mẹ không quan trọng', 'Tác giả nhầm', 'Vì Kiều giận cha mẹ đã để mình bị bán', 'Phù hợp tâm lý: Kim Trọng là người Kiều đã hứa hôn, có lỗi nhất; cha mẹ Kiều biết Kiều đã bán mình'], 3, 'Tinh tế tâm lý: nỗi day dứt với Kim Trọng nặng hơn vì Kiều thấy có lỗi.', [
      'Sai — Kiều rất hiếu thảo; cha mẹ luôn quan trọng với nàng.',
      'Sai — đây là dụng ý nghệ thuật tinh tế của Nguyễn Du, không phải nhầm lẫn.',
      'Sai — Kiều không giận cha mẹ; chính nàng đã tự nguyện bán mình chuộc cha.',
      'Đúng — phù hợp tâm lý: Kiều day dứt vì lỗi hẹn ước với Kim Trọng nhất, còn với cha mẹ nàng đã làm tròn chữ hiếu khi bán mình.',
    ]),
    Q('Đoạn "Buồn trông cửa bể chiều hôm…" sử dụng nghệ thuật?', ['Liệt kê', 'Phóng đại', 'Hài hước', 'Tả cảnh ngụ tình + điệp ngữ "buồn trông"'], 3, '8 câu cuối lặp "buồn trông" 4 lần ⇒ tâm trạng cô đơn, lo sợ chồng chất.', [
      'Sai — đoạn không đơn thuần liệt kê mà gửi tâm trạng vào cảnh.',
      'Sai — không có yếu tố phóng đại làm nét nghệ thuật chủ đạo.',
      'Sai — đoạn thấm đẫm nỗi buồn, không hề hài hước.',
      'Đúng — tả cảnh ngụ tình kết hợp điệp ngữ "buồn trông" lặp 4 lần, dồn nén tâm trạng cô đơn, lo sợ.',
    ]),
    Q('Hình ảnh "ầm ầm tiếng sóng kêu quanh ghế ngồi" báo hiệu?', ['Tình yêu', 'Niềm vui', 'Tai họa, sóng gió sắp ập đến cuộc đời Kiều', 'Sự bình yên'], 2, 'Sóng dữ dội ⇒ dự báo phong ba cuộc đời sắp đến.', [
      'Sai — tiếng sóng dữ dội không gợi tình yêu.',
      'Sai — hình ảnh này gợi bất an, không phải niềm vui.',
      'Đúng — tiếng sóng "ầm ầm" dữ dội dự báo tai họa, sóng gió sắp ập đến cuộc đời Kiều.',
      'Sai — âm thanh dữ dội báo hiệu bão tố, trái ngược sự bình yên.',
    ]),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('"Đồng chí" và "Bài thơ về tiểu đội xe không kính" cùng viết về?', ['Phụ nữ', 'Nông dân', 'Người lính trong kháng chiến', 'Trí thức'], 2, 'Cùng hình tượng người lính (chống Pháp / chống Mỹ).', [
      'Sai — cả hai bài đều viết về người lính, không phải về phụ nữ.',
      'Sai — nông dân chỉ là xuất thân ở "Đồng chí"; điểm chung là hình tượng người lính.',
      'Đúng — cả hai cùng viết về hình tượng người lính (chống Pháp trong "Đồng chí", chống Mỹ trong bài kia).',
      'Sai — đề tài chung là người lính, không phải trí thức.',
    ]),
    Q('"Bếp lửa" và "Ánh trăng" có điểm chung?', ['Đều viết về chiến tranh', 'Đều tả cảnh hoàng hôn', 'Đều là dòng hồi tưởng, suy ngẫm về quá khứ ân nghĩa', 'Đều thơ lục bát'], 2, 'Cả 2 đều khơi gợi đạo lý nhớ về cội nguồn, quá khứ.', [
      'Sai — chiến tranh chỉ là phông nền; điểm chung là sự hồi tưởng quá khứ ân nghĩa.',
      'Sai — hai bài không cùng tả cảnh hoàng hôn.',
      'Đúng — cả hai đều là dòng hồi tưởng, suy ngẫm về quá khứ ân nghĩa, gợi đạo lý nhớ cội nguồn.',
      'Sai — "Bếp lửa" thiên về thể tám chữ, "Ánh trăng" là năm chữ; không phải lục bát.',
    ]),
    Q('Truyện ngắn "Làng" và "Chiếc lược ngà" có điểm chung?', ['Đều có nhân vật trẻ em', 'Đều buồn', 'Đều cảnh nông thôn', 'Đều xây dựng tình huống truyện độc đáo, khắc họa số phận con người trong chiến tranh'], 3, 'Tình huống truyện độc đáo + chủ đề chiến tranh và con người.', [
      'Sai — không phải cả hai đều xoáy vào nhân vật trẻ em (ông Hai là người lớn).',
      'Sai — sắc thái cảm xúc không phải điểm chung cốt lõi về nghệ thuật.',
      'Sai — bối cảnh không hoàn toàn là nông thôn; điểm chung là cách xây dựng truyện.',
      'Đúng — cả hai đều xây dựng tình huống truyện độc đáo, khắc họa số phận con người trong chiến tranh.',
    ]),
    Q('Phương châm hội thoại quan trọng nhất trong giao tiếp xã giao?', ['Phương châm về lượng (nói đủ, không thừa)', 'Cách thức', 'Phương châm về chất (nói đúng sự thật)', 'Lịch sự'], 3, 'Lịch sự là nền tảng giao tiếp văn hóa.', [
      'Sai — phương châm về lượng quan trọng nhưng không phải nền tảng của giao tiếp xã giao.',
      'Sai — phương châm cách thức bảo đảm rõ ràng, không phải yếu tố hàng đầu trong xã giao.',
      'Sai — phương châm về chất bảo đảm tính trung thực, nhưng xã giao đề cao thái độ lịch sự.',
      'Đúng — trong giao tiếp xã giao, phương châm lịch sự (tế nhị, tôn trọng) là nền tảng quan trọng nhất.',
    ]),
    Q('Thuý Kiều thuộc tác phẩm của?', ['Hồ Xuân Hương', 'Nguyễn Du', 'Đoàn Thị Điểm', 'Nguyễn Trãi'], 1, 'Nguyễn Du là tác giả Truyện Kiều.', [
      'Sai — Hồ Xuân Hương nổi tiếng với thơ Nôm trữ tình, không phải tác giả Truyện Kiều.',
      'Đúng — Thúy Kiều là nhân vật trong Truyện Kiều của Nguyễn Du.',
      'Sai — Đoàn Thị Điểm gắn với bản dịch "Chinh phụ ngâm", không phải Truyện Kiều.',
      'Sai — Nguyễn Trãi là tác giả "Bình Ngô đại cáo", "Quốc âm thi tập", không phải Truyện Kiều.',
    ]),
    Q('Văn bản thuyết minh khác văn miêu tả ở chỗ?', ['Thuyết minh: khách quan, cung cấp tri thức; miêu tả: chủ quan, gợi hình', 'Thuyết minh dài hơn', 'Không khác nhau', 'Miêu tả khoa học hơn'], 0, 'Mục đích khác: thuyết minh ⇒ hiểu; miêu tả ⇒ hình dung, cảm nhận.', [
      'Đúng — thuyết minh khách quan, cung cấp tri thức để hiểu; miêu tả chủ quan, gợi hình để hình dung, cảm nhận.',
      'Sai — độ dài không phải tiêu chí phân biệt hai loại văn.',
      'Sai — hai loại văn khác nhau rõ rệt về mục đích và đặc trưng.',
      'Sai — văn thuyết minh mới đề cao tính khoa học, không phải miêu tả.',
    ]),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bến quê — Nguyễn Minh Châu', [
    Q('"Bến quê" của Nguyễn Minh Châu sáng tác năm?', ['1985', '1995', '1975', '1991'], 0, 'Truyện ngắn in trong tập "Bến quê" (1985).', [
      'Đúng — truyện in trong tập "Bến quê" (1985) của Nguyễn Minh Châu thời kỳ đổi mới.',
      'Sai — 1995 không đúng; tập "Bến quê" ra đời năm 1985.',
      'Sai — 1975 là năm thống nhất, sớm hơn so với sáng tác này.',
      'Sai — 1991 không đúng năm xuất bản tập truyện.',
    ]),
    Q('Nhân vật chính của truyện?', ['Nhĩ — người bệnh nặng đang nằm dưỡng bệnh', 'Ông Hai — người nông dân yêu làng tha thiết', 'Bác sĩ', 'Bà Hai — vợ ông Hai ở nơi tản cư'], 0, 'Nhĩ — người từng đi khắp nơi nhưng cuối đời bị bệnh nằm liệt giường.', [
      'Đúng — Nhĩ, người từng đi khắp nơi nhưng cuối đời bị bệnh nằm liệt giường, là nhân vật chính.',
      'Sai — ông Hai là nhân vật của truyện "Làng" (Kim Lân), không phải "Bến quê".',
      'Sai — bác sĩ không phải nhân vật của truyện này.',
      'Sai — bà Hai thuộc truyện "Làng"; vợ Nhĩ trong "Bến quê" tên là Liên.',
    ]),
    Q('Tình huống truyện nghịch lý là?', ['Nhĩ từng đi khắp thế giới nhưng cuối đời không thể bước qua bến sông quê mình', 'Nhĩ về quê làm ăn', 'Nhĩ bỏ nhà ra đi', 'Nhĩ bị mất trí nhớ'], 0, 'Nghịch lý: đi xa nhiều mà không khám phá ngay điều gần gũi nhất.', [
      'Đúng — nghịch lý: Nhĩ từng đi khắp thế giới nhưng cuối đời không thể tự bước qua bến sông ngay trước nhà.',
      'Sai — không có tình tiết Nhĩ về quê làm ăn.',
      'Sai — Nhĩ không bỏ nhà ra đi; anh đang nằm liệt một chỗ.',
      'Sai — Nhĩ không mất trí nhớ; anh vẫn tỉnh táo và suy ngẫm sâu sắc.',
    ]),
    Q('Hình ảnh "bãi bồi bên kia sông" tượng trưng cho?', ['Sự xa lạ', 'Vẻ đẹp bình dị, gần gũi của quê hương mà ta hay vô tình bỏ quên', 'Đất canh tác', 'Nơi du lịch'], 1, 'Biểu tượng cho vẻ đẹp giản dị, bến đỗ tinh thần con người.', [
      'Sai — bãi bồi gợi sự thân thuộc, không phải xa lạ.',
      'Đúng — bãi bồi bên kia sông tượng trưng cho vẻ đẹp bình dị, gần gũi của quê hương mà con người dễ vô tình bỏ quên.',
      'Sai — không phải nghĩa đen đất canh tác mà là ý nghĩa biểu tượng.',
      'Sai — không phải nơi du lịch mà là biểu tượng bến đỗ tinh thần.',
    ]),
    Q('Thông điệp tác phẩm?', ['Đi nhiều là tốt', 'Hãy trân trọng những giá trị giản dị, gần gũi mà bền vững của quê hương, gia đình', 'Theo đuổi vinh hoa', 'Sống nhanh'], 1, 'Thức tỉnh: con người dễ bỏ qua vẻ đẹp bên cạnh mà chạy theo cái xa vời.', [
      'Sai — truyện không cổ vũ "đi nhiều" mà nhắc trân trọng cái gần gũi.',
      'Đúng — hãy trân trọng những giá trị giản dị, gần gũi mà bền vững của quê hương, gia đình.',
      'Sai — thông điệp ngược lại với việc chạy theo vinh hoa, danh vọng xa vời.',
      'Sai — truyện đề cao sự lắng lại để nhận ra giá trị bên cạnh, không phải sống vội.',
    ]),
    Q('Nghệ thuật đặc sắc của Nguyễn Minh Châu trong "Bến quê"?', ['Hài hước', 'Sử thi', 'Xây dựng tình huống nghịch lý mang tính biểu tượng và triết lý', 'Phóng đại'], 2, 'Tình huống nghịch lý + giàu chất triết lý nhân sinh.', [
      'Sai — truyện không thiên về giọng hài hước.',
      'Sai — đây không phải tác phẩm sử thi.',
      'Đúng — Nguyễn Minh Châu xây dựng tình huống nghịch lý mang tính biểu tượng và triết lý nhân sinh sâu sắc.',
      'Sai — phóng đại không phải nét nghệ thuật chủ đạo của truyện.',
    ]),
  ]),

  M(20, 'Những ngôi sao xa xôi — Lê Minh Khuê', [
    Q('"Những ngôi sao xa xôi" sáng tác năm nào?', ['1975', '1980', '1971', '1965'], 2, 'Sáng tác năm 1971 khi kháng chiến chống Mỹ đang ác liệt.', [
      'Sai — 1975 là năm thống nhất, sau khi truyện đã ra đời.',
      'Sai — 1980 muộn hơn; truyện viết trong thời chiến.',
      'Đúng — sáng tác năm 1971 khi cuộc kháng chiến chống Mỹ đang ác liệt trên tuyến đường Trường Sơn.',
      'Sai — 1965 không đúng năm sáng tác.',
    ]),
    Q('Ba nhân vật nữ trong truyện là?', ['Phương, Lan, Hoa', 'Phương Định, Nho, Thao', 'Hồng, Nho, Thu', 'Định, Thao, Liên'], 1, 'Tổ trinh sát mặt đường: Phương Định, Nho, chị Thao.', [
      'Sai — tên các nhân vật không phải Phương, Lan, Hoa.',
      'Đúng — tổ trinh sát mặt đường gồm Phương Định, Nho và chị Thao.',
      'Sai — không có nhân vật Hồng, Thu trong tổ trinh sát.',
      'Sai — Liên là vợ Nhĩ trong "Bến quê"; tên đúng là Phương Định, Nho, Thao.',
    ]),
    Q('Họ làm công việc gì trên tuyến đường Trường Sơn?', ['Lái xe', 'Phá bom, đo khối lượng đất đá đường bị bom phá', 'Liên lạc', 'Cứu thương cho bộ đội bị thương ngoài mặt trận'], 1, 'Trinh sát + đo, phá bom — nhiệm vụ cực kỳ nguy hiểm.', [
      'Sai — lái xe là công việc người lính trong "Bài thơ về tiểu đội xe không kính".',
      'Đúng — họ trinh sát mặt đường: đo khối lượng đất đá, đếm và phá bom chưa nổ — nhiệm vụ cực nguy hiểm.',
      'Sai — công việc của họ là phá bom, không phải liên lạc.',
      'Sai — họ không làm nhiệm vụ cứu thương mà phá bom mở đường.',
    ]),
    Q('Người kể chuyện trong tác phẩm là?', ['Người dẫn truyện ngôi thứ ba', 'Phương Định (ngôi thứ nhất)', 'Nho (ngôi thứ nhất, người em út tổ trinh sát)', 'Chị Thao'], 1, 'Phương Định kể chuyện ⇒ tạo cảm giác chân thực, trực tiếp.', [
      'Sai — truyện kể theo ngôi thứ nhất, không phải ngôi thứ ba.',
      'Đúng — Phương Định xưng "tôi" kể chuyện, tạo cảm giác chân thực, trực tiếp.',
      'Sai — người kể là Phương Định, không phải Nho.',
      'Sai — người kể là Phương Định, không phải chị Thao.',
    ]),
    Q('Nét đẹp chung của ba cô gái?', ['Lặng lẽ, cam chịu', 'Tài giỏi, kiêu hãnh', 'Dũng cảm, lạc quan, có tâm hồn trong sáng, mơ mộng', 'Mạnh mẽ, lạnh lùng'], 2, 'Vẻ đẹp người con gái Việt Nam thời chiến: dũng cảm + nữ tính, mơ mộng.', [
      'Sai — họ chủ động, lạc quan chứ không cam chịu.',
      'Sai — không phải kiêu hãnh mà hồn nhiên, trong sáng.',
      'Đúng — dũng cảm, lạc quan, tâm hồn trong sáng, mơ mộng — vẻ đẹp người con gái Việt Nam thời chiến.',
      'Sai — họ giàu tình cảm, mơ mộng chứ không lạnh lùng.',
    ]),
    Q('Tên truyện "Những ngôi sao xa xôi" có ý nghĩa biểu tượng?', ['Khoảng cách địa lý', 'Biểu tượng cho vẻ đẹp tâm hồn, lý tưởng và sự bất tử của những cô gái thanh niên xung phong', 'Là ngôi sao thực', 'Khung cảnh đêm'], 1, 'Các cô gái như những vì sao sáng — vẻ đẹp lý tưởng và tinh thần.', [
      'Sai — nhan đề mang nghĩa biểu tượng, không nói về khoảng cách địa lý.',
      'Đúng — "những ngôi sao" tượng trưng cho vẻ đẹp tâm hồn, lý tưởng và sự bất tử của những cô gái thanh niên xung phong.',
      'Sai — không phải ngôi sao theo nghĩa đen vật lý.',
      'Sai — nhan đề không chỉ tả khung cảnh đêm mà mang ý nghĩa biểu tượng.',
    ]),
  ]),

  M(21, 'Mùa xuân nho nhỏ — Thanh Hải', [
    Q('"Mùa xuân nho nhỏ" sáng tác trong hoàn cảnh nào?', ['Mùa hè', 'Tết Nguyên Đán', 'Tháng 11/1980, khi Thanh Hải đang nằm trên giường bệnh', 'Sau ngày thống nhất ngay'], 2, 'Viết một tháng trước khi tác giả qua đời — như lời tâm sự cuối đời.', [
      'Sai — bài thơ viết tháng 11/1980, không phải mùa hè.',
      'Sai — không phải dịp Tết Nguyên Đán; "mùa xuân" ở đây mang nghĩa biểu tượng.',
      'Đúng — viết tháng 11/1980, khi Thanh Hải nằm trên giường bệnh, chỉ một tháng trước khi qua đời.',
      'Sai — bài thơ ra đời năm 1980, không phải ngay sau ngày thống nhất 1975.',
    ]),
    Q('Bài thơ thuộc thể?', ['Năm chữ', 'Bảy chữ', 'Thơ tự do, các dòng không đều chữ', 'Lục bát'], 0, 'Thơ năm chữ, gần với âm hưởng dân ca xứ Huế.', [
      'Đúng — thơ năm chữ, nhịp nhẹ nhàng, gần với âm hưởng dân ca xứ Huế.',
      'Sai — mỗi dòng có năm chữ, không phải bảy chữ.',
      'Sai — số chữ mỗi dòng đều đặn (năm chữ) nên không phải thơ tự do.',
      'Sai — không theo cặp 6-8 nên không phải lục bát.',
    ]),
    Q('Câu "Ta làm con chim hót / Ta làm một cành hoa" thể hiện?', ['Sự cô đơn', 'Khao khát giàu sang', 'Mong ước du lịch', 'Ước nguyện hòa nhập, cống hiến phần nhỏ bé của mình cho cuộc đời'], 3, 'Khát vọng dâng hiến tự nhiên, khiêm nhường nhưng đẹp đẽ.', [
      'Sai — câu thơ tràn đầy khát vọng dâng hiến, không gợi cô đơn.',
      'Sai — ước nguyện ở đây là cống hiến khiêm nhường, không phải giàu sang.',
      'Sai — không nói về mong ước du lịch.',
      'Đúng — ước nguyện hòa nhập và cống hiến phần nhỏ bé của mình cho cuộc đời, cho đất nước.',
    ]),
    Q('"Mùa xuân nho nhỏ" trong bài tượng trưng cho?', ['Sự đóng góp khiêm nhường nhưng quý giá của mỗi cá nhân vào mùa xuân lớn của đất nước', 'Tuổi thơ', 'Tình yêu', 'Mùa xuân thực'], 0, 'Mỗi người là 1 "mùa xuân nho nhỏ" góp vào mùa xuân lớn của dân tộc.', [
      'Đúng — mỗi người là một "mùa xuân nho nhỏ", đóng góp khiêm nhường nhưng quý giá vào mùa xuân lớn của đất nước.',
      'Sai — hình ảnh này không tượng trưng cho tuổi thơ.',
      'Sai — đây là ước nguyện cống hiến, không phải tình yêu đôi lứa.',
      'Sai — "mùa xuân nho nhỏ" mang nghĩa biểu tượng, không phải mùa xuân thực ngoài đời.',
    ]),
    Q('Câu thơ "Dù là tuổi hai mươi / Dù là khi tóc bạc" nhấn mạnh?', ['Sự khác biệt thế hệ', 'Sự cống hiến không phụ thuộc tuổi tác', 'Thời gian trôi nhanh', 'Sự già nua'], 1, 'Dâng hiến cả đời người — từ tuổi trẻ đến khi già.', [
      'Sai — câu thơ không nhấn mạnh sự khác biệt mà sự bền bỉ suốt đời.',
      'Đúng — dù tuổi hai mươi hay khi tóc bạc, con người vẫn cống hiến; sự dâng hiến không phụ thuộc tuổi tác.',
      'Sai — ý nghĩa cốt lõi là cống hiến suốt đời, không phải than thời gian trôi nhanh.',
      'Sai — câu thơ ca ngợi tinh thần cống hiến, không nhấn mạnh sự già nua.',
    ]),
    Q('Khổ thơ cuối "Mùa xuân ta xin hát…" có âm hưởng?', ['Quan họ', 'Cải lương', 'Dân ca Huế (Nam ai, Nam bình)', 'Hành khúc'], 2, 'Mang âm hưởng dân ca xứ Huế — quê hương Thanh Hải.', [
      'Sai — quan họ là dân ca Bắc Ninh, không phải âm hưởng bài thơ này.',
      'Sai — cải lương là loại hình Nam Bộ, không phải âm hưởng khổ cuối.',
      'Đúng — khổ cuối mang âm hưởng dân ca Huế (Nam ai, Nam bình) — quê hương Thanh Hải.',
      'Sai — bài thơ êm dịu, trữ tình, không mang âm hưởng hành khúc.',
    ]),
  ]),

  M(22, 'Viếng lăng Bác — Viễn Phương', [
    Q('"Viếng lăng Bác" sáng tác năm?', ['1969', '1976', '1980', '1975'], 1, 'Năm 1976, sau khi lăng Bác khánh thành, tác giả từ miền Nam ra viếng.', [
      'Sai — 1969 là năm Bác mất, chưa có lăng để vào viếng.',
      'Đúng — năm 1976, sau khi lăng Bác khánh thành, Viễn Phương từ miền Nam ra viếng và viết bài thơ.',
      'Sai — 1980 muộn hơn năm sáng tác.',
      'Sai — 1975 là năm thống nhất; bài thơ viết năm sau, khi lăng đã khánh thành.',
    ]),
    Q('Bài thơ thuộc thể?', ['Năm chữ', 'Bảy chữ (kèm tám chữ)', 'Lục bát', 'Thơ tự do, dòng dài ngắn xen kẽ tự nhiên'], 1, 'Thơ 8 chữ + 7 chữ, đa dạng nhịp.', [
      'Sai — bài thơ không phải thể năm chữ.',
      'Đúng — chủ yếu là thơ tám chữ xen bảy chữ, nhịp trang trọng, thành kính.',
      'Sai — không theo cặp 6-8 nên không phải lục bát.',
      'Sai — số chữ mỗi dòng khá đều (7-8 chữ) chứ không tự do thoải mái.',
    ]),
    Q('Câu "Con ở miền Nam ra thăm lăng Bác" có ý nghĩa?', ['Lời xưng hô con — Bác thể hiện tình cảm gần gũi, ấm áp; "thăm" giảm đau buồn', 'Lời chào', 'Lời từ biệt', 'Lời thông báo'], 0, '"Con" — "Bác" + dùng "thăm" thay "viếng" ⇒ giảm nhẹ nỗi đau mất mát.', [
      'Đúng — cách xưng "con" - "Bác" gợi tình cảm gần gũi, ấm áp; dùng "thăm" thay "viếng" để giảm nhẹ nỗi đau mất mát.',
      'Sai — đây không phải lời chào xã giao thông thường.',
      'Sai — câu thơ mở đầu cuộc viếng, không phải lời từ biệt.',
      'Sai — câu thơ chan chứa cảm xúc, không phải lời thông báo khô khan.',
    ]),
    Q('Hình ảnh "Mặt trời trong lăng rất đỏ" sử dụng?', ['Nhân hóa', 'Hoán dụ', 'So sánh', 'Ẩn dụ — Bác là mặt trời cách mạng'], 3, 'Ẩn dụ "mặt trời" = Bác Hồ — vĩ đại như vầng dương.', [
      'Sai — không gán hành động của người cho vật nên không phải nhân hóa.',
      'Sai — không lấy dấu hiệu/bộ phận để gọi tên nên không phải hoán dụ.',
      'Sai — không có từ so sánh và hai vế so sánh rõ ràng.',
      'Đúng — ẩn dụ: "mặt trời trong lăng" ngầm chỉ Bác Hồ vĩ đại, ấm áp như vầng dương soi đường cách mạng.',
    ]),
    Q('"Ngày ngày dòng người đi trong thương nhớ / Kết tràng hoa dâng bảy mươi chín mùa xuân" gợi?', ['Số mùa xuân thật', 'Số học sinh', 'Tuổi của tác giả', 'Sự kính yêu của nhân dân với Bác (Bác sống 79 tuổi)'], 3, '"79 mùa xuân" = 79 năm cuộc đời Bác; tràng hoa = dòng người tưởng nhớ.', [
      'Sai — "79 mùa xuân" mang nghĩa biểu tượng về cuộc đời Bác, không phải số mùa xuân tả thực.',
      'Sai — không liên quan đến số học sinh.',
      'Sai — "79" là số năm cuộc đời Bác, không phải tuổi tác giả.',
      'Đúng — "79 mùa xuân" ẩn dụ 79 năm cuộc đời Bác; dòng người kết thành tràng hoa thể hiện sự kính yêu vô hạn của nhân dân.',
    ]),
    Q('Khổ thơ cuối thể hiện ước nguyện?', ['Muốn đi du lịch', 'Muốn làm con chim, đóa hoa, cây tre bên lăng Bác', 'Muốn về nhà', 'Muốn xây lăng to'], 1, 'Ước nguyện ở bên Bác mãi mãi để báo đáp ân tình.', [
      'Sai — khổ cuối không nói về du lịch.',
      'Đúng — tác giả ước làm con chim hót, đóa hoa tỏa hương, cây tre trung hiếu để được ở bên Bác mãi mãi.',
      'Sai — ước nguyện là được ở lại bên Bác, không phải muốn về nhà.',
      'Sai — không phải ước nguyện xây lăng mà là khát khao được hóa thân ở bên Bác.',
    ]),
  ]),

  M(23, 'Sang thu — Hữu Thỉnh', [
    Q('"Sang thu" sáng tác năm?', ['1975', '1980', '1977', '1985'], 2, 'Sáng tác cuối năm 1977, thời kỳ đất nước mới thống nhất.', [
      'Sai — 1975 là năm thống nhất; bài thơ viết hai năm sau.',
      'Sai — 1980 không đúng năm sáng tác.',
      'Đúng — sáng tác cuối năm 1977, thời kỳ đất nước mới thống nhất.',
      'Sai — 1985 muộn hơn năm sáng tác.',
    ]),
    Q('Bài thơ tả khoảnh khắc?', ['Đông sang xuân', 'Mùa thu sang đông', 'Cuối hạ — đầu thu', 'Mùa xuân chuyển sang hè'], 2, 'Khoảnh khắc giao mùa hạ — thu, mơ hồ, tinh tế.', [
      'Sai — bài thơ không tả lúc đông sang xuân.',
      'Sai — nhan đề "Sang thu" tả lúc bước vào thu, không phải thu sang đông.',
      'Đúng — bài thơ tả khoảnh khắc giao mùa cuối hạ - đầu thu, mơ hồ và tinh tế.',
      'Sai — không phải lúc xuân chuyển sang hè.',
    ]),
    Q('Tín hiệu đầu tiên báo thu trong bài là?', ['Hương ổi phả vào trong gió se', 'Chim én bay đi', 'Trăng thu sáng', 'Lá vàng rơi'], 0, '"Bỗng nhận ra hương ổi / Phả vào trong gió se" — đặc trưng riêng của thu Bắc Bộ.', [
      'Đúng — "Bỗng nhận ra hương ổi / Phả vào trong gió se" là tín hiệu đầu tiên, rất riêng của thu Bắc Bộ.',
      'Sai — bài thơ không lấy hình ảnh chim én làm tín hiệu thu.',
      'Sai — không phải trăng thu mà là hương ổi báo hiệu.',
      'Sai — hình ảnh quen thuộc "lá vàng rơi" không phải tín hiệu Hữu Thỉnh chọn ở đây.',
    ]),
    Q('Câu "Sương chùng chình qua ngõ / Hình như thu đã về" sử dụng?', ['Phóng đại', 'Nhân hóa "chùng chình" + từ tình thái "hình như"', 'So sánh', 'Ẩn dụ "sương" cho tâm trạng bâng khuâng'], 1, 'Sương được nhân hóa như cố ý nán lại; "hình như" thể hiện sự chưa rõ ràng.', [
      'Sai — câu thơ tinh tế, nhẹ nhàng, không dùng phóng đại.',
      'Đúng — nhân hóa "chùng chình" (sương như cố ý nán lại) kết hợp từ tình thái "hình như" gợi cảm giác mơ hồ.',
      'Sai — không có từ so sánh và vế so sánh.',
      'Sai — "sương" ở đây tả thực rồi nhân hóa, không phải ẩn dụ cho tâm trạng.',
    ]),
    Q('Hình ảnh "Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi" có hàm nghĩa?', ['Tả thực thiên nhiên', 'Cây cối già nua', 'Sấm sét nguy hiểm', 'Suy ngẫm: khi đã trưởng thành, con người vững vàng trước biến động cuộc đời'], 3, 'Hai tầng nghĩa: thiên nhiên (sấm thu ít hơn) + triết lý (người đứng tuổi vững vàng hơn).', [
      'Sai — câu thơ không chỉ tả thực mà còn mang tầng nghĩa triết lý.',
      'Sai — "hàng cây đứng tuổi" là ẩn dụ về con người từng trải, không chỉ nói cây già.',
      'Sai — ý chính không phải sấm nguy hiểm mà là sự vững vàng của con người.',
      'Đúng — hai tầng nghĩa: thiên nhiên (sang thu ít sấm) và triết lý (người từng trải vững vàng trước biến động cuộc đời).',
    ]),
    Q('Đặc điểm nghệ thuật của bài thơ?', ['Hào hùng, mạnh mẽ', 'Bi tráng', 'Hài hước', 'Hình ảnh tinh tế, ngôn ngữ giản dị, giàu sức gợi'], 3, 'Sự tinh tế trong cảm nhận, mang phong vị riêng.', [
      'Sai — bài thơ nhẹ nhàng, lắng đọng, không hào hùng mạnh mẽ.',
      'Sai — bài thơ không mang sắc thái bi tráng.',
      'Sai — bài thơ trầm lắng, suy tư, không hài hước.',
      'Đúng — hình ảnh tinh tế, ngôn ngữ giản dị mà giàu sức gợi, thể hiện cảm nhận tinh tế của tác giả.',
    ]),
  ]),

  M(24, 'Nói với con — Y Phương', [
    Q('"Nói với con" của Y Phương sáng tác năm?', ['1980', '1985', '1990', '1975'], 0, 'Khoảng năm 1980, sau khi tác giả có con.', [
      'Đúng — bài thơ viết khoảng năm 1980, khi tác giả đã có con.',
      'Sai — 1985 không đúng năm sáng tác.',
      'Sai — 1990 muộn hơn năm sáng tác.',
      'Sai — 1975 sớm hơn; bài thơ viết khoảng năm 1980.',
    ]),
    Q('Y Phương là nhà thơ dân tộc nào?', ['Mường, quê Hòa Bình', 'Thái, quê Sơn La', 'Tày', 'H\'Mông'], 2, 'Y Phương là người dân tộc Tày, quê Cao Bằng.', [
      'Sai — Y Phương không phải người Mường.',
      'Sai — Y Phương không phải người Thái.',
      'Đúng — Y Phương là người dân tộc Tày, quê ở Cao Bằng.',
      'Sai — Y Phương không phải người H\'Mông.',
    ]),
    Q('Bài thơ là lời?', ['Anh nói với em', 'Người cha nói với con về cội nguồn, quê hương và "người đồng mình"', 'Mẹ ru con', 'Con nói với cha'], 1, 'Lời tâm tình của người cha truyền cho con tình yêu quê hương, sức sống dân tộc.', [
      'Sai — không phải lời anh nói với em mà là lời cha nói với con.',
      'Đúng — là lời người cha tâm tình với con về cội nguồn, quê hương và "người đồng mình".',
      'Sai — không phải lời mẹ ru con mà là lời người cha dặn dò.',
      'Sai — chủ thể là người cha nói với con, không phải con nói với cha.',
    ]),
    Q('Cụm từ "người đồng mình" trong bài chỉ?', ['Những người cùng quê, cùng dân tộc, sống mộc mạc nghĩa tình', 'Bạn cùng lớp', 'Người ở vùng đồng bằng', 'Người nước ngoài'], 0, '"Người đồng mình" — cách gọi gần gũi của Y Phương để chỉ bà con dân tộc mình.', [
      'Đúng — "người đồng mình" là cách gọi gần gũi chỉ những người cùng quê, cùng dân tộc, sống mộc mạc, nghĩa tình.',
      'Sai — không phải chỉ bạn cùng lớp.',
      'Sai — "người đồng mình" gắn với quê hương miền núi của tác giả, không phải người đồng bằng.',
      'Sai — không phải chỉ người nước ngoài.',
    ]),
    Q('Câu "Người đồng mình thô sơ da thịt / Chẳng mấy ai nhỏ bé đâu con" thể hiện?', ['Tự hào về phẩm chất kiên cường, nghĩa khí của người dân tộc', 'Sự nghèo nàn', 'Sự lạc hậu', 'Vẻ đẹp ngoại hình'], 0, '"Thô sơ da thịt" nhưng "không nhỏ bé" về ý chí, nhân cách.', [
      'Đúng — dù "thô sơ da thịt" nhưng "không nhỏ bé" về ý chí, nhân cách — niềm tự hào về phẩm chất kiên cường, nghĩa khí của người dân tộc.',
      'Sai — câu thơ ca ngợi tầm vóc tinh thần, không nói về sự nghèo nàn.',
      'Sai — không nhằm phản ánh sự lạc hậu mà đề cao ý chí, bản lĩnh.',
      'Sai — câu thơ nói về vẻ đẹp tâm hồn, ý chí, không phải ngoại hình.',
    ]),
    Q('Bài thơ có gì độc đáo trong cách diễn đạt?', ['Thiên về suy luận triết học', 'Cấu trúc rất khái quát', 'Ngôn ngữ mộc mạc, hình ảnh cụ thể đặc trưng tư duy người miền núi', 'Sử dụng nhiều từ Hán Việt'], 2, 'Lối nói riêng của người dân tộc: cụ thể, hình ảnh, mộc mạc nhưng giàu ý nghĩa.', [
      'Sai — bài thơ giàu hình ảnh cụ thể chứ không thiên về suy luận triết học khô khan.',
      'Sai — bài thơ dùng hình ảnh cụ thể, sinh động chứ không khái quát trừu tượng.',
      'Đúng — ngôn ngữ mộc mạc, hình ảnh cụ thể đặc trưng tư duy người miền núi, giản dị mà giàu ý nghĩa.',
      'Sai — bài thơ ít dùng từ Hán Việt, thiên về lời nói mộc mạc của người dân tộc.',
    ]),
  ]),

  M(25, 'Nghị luận xã hội — Tư tưởng đạo lý', [
    Q('Nghị luận về một tư tưởng đạo lý là?', ['Trình bày ý kiến về một quan điểm, đạo lý sống', 'Tả cảnh', 'Kể chuyện', 'Tả người'], 0, 'Bàn luận, phân tích, đánh giá một tư tưởng/quan niệm sống.', [
      'Đúng — là kiểu bài bàn luận, phân tích, đánh giá một quan điểm, đạo lý sống.',
      'Sai — tả cảnh thuộc văn miêu tả.',
      'Sai — kể chuyện thuộc văn tự sự.',
      'Sai — tả người thuộc văn miêu tả.',
    ]),
    Q('Cấu trúc bài nghị luận về tư tưởng đạo lý gồm?', ['Chỉ giải thích', 'Mở - Tả - Kết', 'Mở bài (giới thiệu) - Thân bài (giải thích, phân tích, chứng minh, bình luận) - Kết bài', 'Chỉ kể'], 2, 'Cấu trúc 3 phần với thân bài đầy đủ các thao tác.', [
      'Sai — chỉ giải thích là chưa đủ; cần thêm chứng minh, bình luận.',
      'Sai — "Tả" không phải thao tác của văn nghị luận.',
      'Đúng — gồm mở bài, thân bài (giải thích - phân tích - chứng minh - bình luận) và kết bài.',
      'Sai — kể chuyện thuộc văn tự sự, không phải cấu trúc bài nghị luận.',
    ]),
    Q('Khi bàn về câu "Có chí thì nên", cần làm rõ?', ['Khái niệm "chí", vai trò của ý chí, dẫn chứng người thành công, phản đề người thiếu chí', 'Chỉ ca ngợi', 'Chỉ kể chuyện vui', 'Chỉ phản đối'], 0, 'Đầy đủ: giải thích, chứng minh, bình luận, mở rộng.', [
      'Đúng — cần giải thích khái niệm "chí", vai trò ý chí, dẫn chứng người thành công, mở rộng bằng phản đề người thiếu chí.',
      'Sai — chỉ ca ngợi một chiều thì thiếu giải thích, chứng minh và phản đề.',
      'Sai — kể chuyện vui không phải thao tác nghị luận.',
      'Sai — chỉ phản đối là phiến diện, thiếu các thao tác cần thiết.',
    ]),
    Q('Dẫn chứng tốt cho bài nghị luận xã hội cần?', ['Tiêu biểu, xác thực, mới mẻ, đa dạng', 'Trùng lặp', 'Chung chung, không nêu số liệu cụ thể', 'Lâu đời'], 0, 'Tiêu biểu + xác thực + đa chiều ⇒ tăng sức thuyết phục.', [
      'Đúng — dẫn chứng tốt phải tiêu biểu, xác thực, mới mẻ, đa dạng để tăng sức thuyết phục.',
      'Sai — dẫn chứng trùng lặp làm bài nhàm và kém thuyết phục.',
      'Sai — dẫn chứng chung chung, thiếu cụ thể sẽ làm yếu lập luận.',
      'Sai — "lâu đời" không phải tiêu chí; cần dẫn chứng tiêu biểu, cập nhật.',
    ]),
    Q('Sai lầm thường gặp khi viết NLXH?', ['Lập luận chung chung, thiếu dẫn chứng cụ thể', 'Cấu trúc rõ ràng', 'Lý lẽ chặt chẽ', 'Có dẫn chứng phong phú'], 0, 'Lạm dụng lý thuyết, thiếu dẫn chứng ⇒ bài thiếu sức nặng.', [
      'Đúng — lỗi phổ biến là lập luận chung chung, lạm dụng lý thuyết mà thiếu dẫn chứng cụ thể.',
      'Sai — cấu trúc rõ ràng là ưu điểm, không phải sai lầm.',
      'Sai — lý lẽ chặt chẽ là ưu điểm cần có.',
      'Sai — dẫn chứng phong phú là điểm mạnh, không phải sai lầm.',
    ]),
    Q('Vai trò bài học rút ra trong kết bài?', ['Lặp lại mở bài', 'Không cần', 'Bỏ qua', 'Liên hệ bản thân, rút ra hành động cụ thể'], 3, 'Bài học nhận thức + hành động ⇒ kết bài có giá trị thực tiễn.', [
      'Sai — kết bài không nên lặp y nguyên mở bài.',
      'Sai — bài học nhận thức và hành động là phần quan trọng của kết bài.',
      'Sai — không thể bỏ qua phần liên hệ, rút ra bài học.',
      'Đúng — kết bài cần liên hệ bản thân, rút ra bài học nhận thức và hành động cụ thể, tạo giá trị thực tiễn.',
    ]),
  ]),

  M(26, 'Nghị luận xã hội — Hiện tượng đời sống', [
    Q('Nghị luận về hiện tượng đời sống là?', ['Bộc lộ cảm xúc', 'Kể chuyện', 'Tả cảnh', 'Bàn về một hiện tượng có thật trong xã hội (tốt hoặc xấu)'], 3, 'Hiện tượng cụ thể, có thật, đang được xã hội quan tâm.', [
      'Sai — bộc lộ cảm xúc là đặc trưng văn biểu cảm.',
      'Sai — kể chuyện thuộc văn tự sự.',
      'Sai — tả cảnh thuộc văn miêu tả.',
      'Đúng — là kiểu bài bàn về một hiện tượng có thật trong xã hội (tốt hoặc xấu) đang được quan tâm.',
    ]),
    Q('Các bước phân tích hiện tượng?', ['Chỉ ca ngợi', 'Chỉ kể lại sự việc, không phân tích bản chất', 'Chỉ phê phán', 'Nêu hiện tượng - thực trạng - nguyên nhân - hậu quả/ý nghĩa - giải pháp'], 3, 'Quy trình phân tích đa chiều: bản chất + nguyên nhân + tác động + giải pháp.', [
      'Sai — chỉ ca ngợi là phiến diện, thiếu phân tích nguyên nhân, giải pháp.',
      'Sai — chỉ kể lại sự việc thì thiếu phân tích bản chất.',
      'Sai — chỉ phê phán là một chiều, thiếu các bước phân tích đầy đủ.',
      'Đúng — quy trình đầy đủ: nêu hiện tượng - thực trạng - nguyên nhân - hậu quả/ý nghĩa - giải pháp.',
    ]),
    Q('Khi viết về hiện tượng "ô nhiễm môi trường", cần?', ['Chỉ trách móc', 'Số liệu cụ thể về thực trạng, nêu nguyên nhân chủ quan/khách quan, hậu quả, giải pháp', 'Im lặng', 'Chỉ tả thiên nhiên'], 1, 'Số liệu + phân tích đa chiều ⇒ bài thuyết phục.', [
      'Sai — chỉ trách móc là một chiều, thiếu phân tích và giải pháp.',
      'Đúng — cần số liệu thực trạng, phân tích nguyên nhân chủ quan/khách quan, hậu quả và đề xuất giải pháp.',
      'Sai — im lặng, né tránh không phải cách viết nghị luận.',
      'Sai — chỉ tả thiên nhiên là văn miêu tả, không phải nghị luận hiện tượng.',
    ]),
    Q('Hiện tượng tích cực cần?', ['Bỏ qua', 'Chỉ phê phán', 'Im lặng', 'Ca ngợi + lan tỏa + đề xuất phát huy'], 3, 'Ghi nhận, biểu dương, nhân rộng.', [
      'Sai — hiện tượng tích cực cần được ghi nhận chứ không bỏ qua.',
      'Sai — phê phán không phù hợp với một hiện tượng tốt.',
      'Sai — không nên im lặng trước một hiện tượng đáng biểu dương.',
      'Đúng — với hiện tượng tích cực, cần ca ngợi, lan tỏa và đề xuất giải pháp phát huy, nhân rộng.',
    ]),
    Q('Khi nghị luận về "sống ảo trên mạng xã hội", thái độ phù hợp?', ['Phân tích cả mặt tích cực lẫn tiêu cực, không một chiều', 'Chỉ phản đối hoàn toàn', 'Né tránh', 'Chỉ ủng hộ'], 0, 'Nhìn nhận khách quan, đa chiều — không một chiều cực đoan.', [
      'Đúng — cần nhìn nhận khách quan, phân tích cả mặt tích cực lẫn tiêu cực, không một chiều cực đoan.',
      'Sai — phản đối hoàn toàn là cái nhìn một chiều, phiến diện.',
      'Sai — né tránh không phải thái độ của người viết nghị luận.',
      'Sai — chỉ ủng hộ cũng là cái nhìn một chiều, thiếu khách quan.',
    ]),
    Q('Hiện tượng "bạo lực học đường" cần đề xuất giải pháp?', ['Không có giải pháp', 'Chỉ tuyên truyền', 'Chỉ kỷ luật', 'Từ gia đình, nhà trường, xã hội, bản thân học sinh'], 3, 'Giải pháp toàn diện, đồng bộ từ nhiều phía.', [
      'Sai — vấn đề cần giải pháp, không thể bỏ ngỏ.',
      'Sai — chỉ tuyên truyền là chưa đủ; cần giải pháp đồng bộ.',
      'Sai — chỉ kỷ luật là một phía; cần phối hợp nhiều bên.',
      'Đúng — giải pháp cần toàn diện, đồng bộ từ gia đình, nhà trường, xã hội và bản thân học sinh.',
    ]),
  ]),

  M(27, 'Nghị luận văn học — Phân tích bài thơ', [
    Q('Phân tích bài thơ là?', ['Học thuộc', 'Mổ xẻ làm rõ giá trị nội dung và nghệ thuật của bài thơ', 'Dịch nghĩa', 'Kể lại bài thơ'], 1, 'Làm rõ giá trị (nội dung + nghệ thuật) qua phân tích hình ảnh, ngôn từ, biện pháp.', [
      'Sai — học thuộc không phải là phân tích bài thơ.',
      'Đúng — phân tích là mổ xẻ, làm rõ giá trị nội dung và nghệ thuật qua hình ảnh, ngôn từ, biện pháp tu từ.',
      'Sai — dịch nghĩa chỉ chuyển nghĩa, chưa phải phân tích giá trị.',
      'Sai — kể lại bài thơ thành văn xuôi không phải là phân tích.',
    ]),
    Q('Cấu trúc bài phân tích thơ?', ['Chỉ tả', 'Mở (giới thiệu) - Thân (phân tích theo từng khổ/từng ý) - Kết (đánh giá)', 'Chỉ thân bài', 'Chỉ cảm nhận'], 1, 'Cấu trúc chặt chẽ, có luận điểm rõ ràng.', [
      'Sai — phân tích thơ không phải chỉ tả mà cần lập luận, dẫn chứng.',
      'Đúng — mở bài (giới thiệu) - thân bài (phân tích theo từng khổ/từng ý) - kết bài (đánh giá).',
      'Sai — bài văn cần đủ ba phần, không chỉ có thân bài.',
      'Sai — chỉ cảm nhận chung chung thì thiếu phân tích có luận điểm.',
    ]),
    Q('Khi phân tích thơ, cần chú ý đến?', ['Chỉ tiểu sử tác giả', 'Số câu', 'Hình ảnh, ngôn từ, nhịp điệu, biện pháp tu từ, mạch cảm xúc', 'Chỉ nội dung'], 2, 'Phân tích đầy đủ các yếu tố nghệ thuật.', [
      'Sai — tiểu sử tác giả chỉ là phần phụ trợ, không phải trọng tâm phân tích.',
      'Sai — đếm số câu không phải nội dung phân tích.',
      'Đúng — cần chú ý hình ảnh, ngôn từ, nhịp điệu, biện pháp tu từ và mạch cảm xúc của bài thơ.',
      'Sai — chỉ phân tích nội dung mà bỏ nghệ thuật là phiến diện.',
    ]),
    Q('Khi phân tích "Đồng chí", cần nhấn mạnh?', ['Kể về kháng chiến', 'Tả Chính Hữu', 'Cơ sở tình đồng chí, biểu hiện cụ thể, hình tượng "đầu súng trăng treo"', 'Bình luận chính trị'], 2, 'Bám vào chính bài thơ, làm rõ tư tưởng và nghệ thuật.', [
      'Sai — không sa đà kể lại lịch sử kháng chiến mà phải bám vào bài thơ.',
      'Sai — tả tiểu sử Chính Hữu không phải trọng tâm phân tích bài thơ.',
      'Đúng — cần làm rõ cơ sở tình đồng chí, các biểu hiện cụ thể và hình tượng "đầu súng trăng treo".',
      'Sai — không biến bài phân tích văn học thành bình luận chính trị.',
    ]),
    Q('Nên trích dẫn câu thơ trong bài phân tích?', ['Trích đúng + bình giảng làm rõ giá trị', 'Chỉ trích không bình', 'Trích sai cũng được', 'Không trích'], 0, 'Trích + phân tích, không "đọc thơ".', [
      'Đúng — cần trích dẫn chính xác và bình giảng để làm rõ giá trị, không chỉ "đọc thơ".',
      'Sai — trích mà không bình giảng thì chưa phải phân tích.',
      'Sai — trích sai làm sai lệch, mất tính chính xác và thuyết phục.',
      'Sai — không trích dẫn thì lập luận thiếu căn cứ từ văn bản.',
    ]),
    Q('Kết bài phân tích thơ nên?', ['Lặp lại mở bài', 'Bỏ trống', 'Tóm tắt nội dung', 'Đánh giá khái quát giá trị + nêu ấn tượng/cảm xúc người đọc'], 3, 'Khẳng định giá trị tác phẩm, vị trí trong nền văn học.', [
      'Sai — kết bài không nên lặp y nguyên mở bài.',
      'Sai — không được bỏ trống kết bài.',
      'Sai — chỉ tóm tắt nội dung thì chưa nâng tầm đánh giá.',
      'Đúng — kết bài nên đánh giá khái quát giá trị tác phẩm và nêu ấn tượng, cảm xúc người đọc.',
    ]),
  ]),

  M(28, 'Nghị luận văn học — Phân tích nhân vật', [
    Q('Phân tích nhân vật cần làm rõ?', ['Chỉ tả ngoại hình', 'Chỉ kể lại', 'Đặc điểm (ngoại hình, hành động, lời nói, nội tâm) + ý nghĩa', 'Chỉ đánh giá đạo đức'], 2, 'Phân tích toàn diện các phương diện của nhân vật.', [
      'Sai — chỉ tả ngoại hình là phiến diện, bỏ qua nội tâm và hành động.',
      'Sai — kể lại không phải phân tích.',
      'Đúng — cần làm rõ đặc điểm (ngoại hình, hành động, lời nói, nội tâm) và ý nghĩa của nhân vật.',
      'Sai — chỉ đánh giá đạo đức là một mặt, thiếu phân tích toàn diện.',
    ]),
    Q('Khi phân tích Phương Định ("Những ngôi sao xa xôi"), cần làm rõ?', ['Chỉ tâm lý', 'Chỉ công việc', 'Vẻ đẹp dũng cảm trong chiến đấu + tâm hồn mơ mộng nữ tính', 'Chỉ ngoại hình'], 2, 'Tổng hòa các phẩm chất tạo nên chân dung sống động.', [
      'Sai — chỉ phân tích tâm lý là chưa đủ; cần cả vẻ đẹp trong chiến đấu.',
      'Sai — chỉ nói về công việc thì bỏ qua tâm hồn nữ tính của nhân vật.',
      'Đúng — cần làm rõ vẻ đẹp dũng cảm trong chiến đấu và tâm hồn mơ mộng, nữ tính của Phương Định.',
      'Sai — chỉ tả ngoại hình thì không thấy được phẩm chất nhân vật.',
    ]),
    Q('Khi phân tích ông Hai ("Làng"), trọng tâm là?', ['Tả ngoại hình', 'Cảnh nông thôn', 'Tình yêu làng quê hòa quyện tình yêu kháng chiến qua diễn biến tâm trạng', 'Hoàn cảnh gia đình'], 2, 'Phân tích diễn biến tâm trạng — điểm sáng nghệ thuật.', [
      'Sai — ngoại hình không phải trọng tâm khi phân tích ông Hai.',
      'Sai — cảnh nông thôn chỉ là bối cảnh, không phải trọng tâm.',
      'Đúng — trọng tâm là tình yêu làng hòa quyện tình yêu kháng chiến, thể hiện qua diễn biến tâm trạng nhân vật.',
      'Sai — hoàn cảnh gia đình chỉ là chi tiết phụ trợ.',
    ]),
    Q('Phân tích nhân vật cần trích dẫn?', ['Không cần', 'Lời thầy cô', 'Tác phẩm khác', 'Chi tiết, câu văn, lời thoại tiêu biểu từ tác phẩm'], 3, 'Dẫn chứng từ chính tác phẩm để bảo đảm tính thuyết phục.', [
      'Sai — không trích dẫn thì lập luận thiếu căn cứ.',
      'Sai — lời thầy cô không phải dẫn chứng văn học.',
      'Sai — trích từ tác phẩm khác không làm rõ nhân vật đang phân tích.',
      'Đúng — cần trích chi tiết, câu văn, lời thoại tiêu biểu từ chính tác phẩm để bảo đảm tính thuyết phục.',
    ]),
    Q('Ngoại hình nhân vật trong văn học thường?', ['Chỉ để trang trí, không liên quan tính cách', 'Tách rời tính cách', 'Tả ngẫu nhiên', 'Mang dụng ý nghệ thuật, gắn với tính cách'], 3, 'Ngoại hình là chi tiết có chủ đích, biểu hiện tính cách.', [
      'Sai — ngoại hình không chỉ để trang trí mà có dụng ý nghệ thuật.',
      'Sai — ngoại hình thường gắn liền chứ không tách rời tính cách.',
      'Sai — nhà văn chọn lọc chi tiết ngoại hình có chủ đích, không ngẫu nhiên.',
      'Đúng — ngoại hình nhân vật thường mang dụng ý nghệ thuật, gắn với và biểu hiện tính cách.',
    ]),
    Q('Kết bài phân tích nhân vật nên?', ['Tả ngoại hình lần nữa', 'Lặp lại', 'Đánh giá vai trò nhân vật trong tác phẩm + ý nghĩa với người đọc', 'Bỏ trống'], 2, 'Khẳng định ý nghĩa, sức sống của nhân vật.', [
      'Sai — không cần tả lại ngoại hình ở kết bài.',
      'Sai — kết bài không nên lặp lại nguyên các ý đã viết.',
      'Đúng — kết bài nên đánh giá vai trò nhân vật trong tác phẩm và ý nghĩa của nhân vật với người đọc.',
      'Sai — không được bỏ trống kết bài.',
    ]),
  ]),

  M(29, 'Văn bản nhật dụng — Phong cách Hồ Chí Minh', [
    Q('"Phong cách Hồ Chí Minh" của ai?', ['Trường Chinh', 'Hồ Chí Minh', 'Lê Anh Trà', 'Phạm Văn Đồng'], 2, 'Tác giả Lê Anh Trà.', [
      'Sai — Trường Chinh không phải tác giả văn bản này.',
      'Sai — văn bản viết về Bác Hồ nhưng do người khác viết, không phải Bác tự viết.',
      'Đúng — văn bản "Phong cách Hồ Chí Minh" do Lê Anh Trà viết.',
      'Sai — Phạm Văn Đồng có viết về Bác (như "Đức tính giản dị của Bác Hồ") nhưng không phải tác giả văn bản này.',
    ]),
    Q('Văn bản nhật dụng là?', ['Văn cổ điển', 'Văn bản kịch sân khấu nhiều xung đột', 'Tiểu thuyết', 'Văn bản đề cập đến những vấn đề thiết thực, gần gũi với đời sống hiện nay'], 3, 'Đề tài nóng, gần gũi, mang tính thời sự, giáo dục.', [
      'Sai — văn nhật dụng không phải khái niệm chỉ văn cổ điển.',
      'Sai — kịch sân khấu là một thể loại riêng, không phải định nghĩa văn nhật dụng.',
      'Sai — tiểu thuyết là một thể loại hư cấu, không phải văn nhật dụng.',
      'Đúng — văn bản nhật dụng đề cập những vấn đề thiết thực, gần gũi, mang tính thời sự và giáo dục.',
    ]),
    Q('Phong cách Hồ Chí Minh là sự kết hợp?', ['Vẻ đẹp truyền thống dân tộc và tinh hoa văn hóa nhân loại', 'Hai phong cách phương Tây', 'Truyền thống và hiện đại', 'Đông và Tây cực đoan'], 0, 'Tinh hoa Đông + Tây + dân tộc, hài hòa.', [
      'Đúng — là sự kết hợp hài hòa giữa vẻ đẹp truyền thống dân tộc và tinh hoa văn hóa nhân loại.',
      'Sai — không phải kết hợp hai phong cách phương Tây mà là Đông - Tây và dân tộc.',
      'Sai — cách diễn đạt này chưa nêu đúng cốt lõi vẻ đẹp dân tộc và tinh hoa nhân loại.',
      'Sai — sự kết hợp ở Bác là hài hòa, không hề cực đoan.',
    ]),
    Q('Sự giản dị của Bác thể hiện ở?', ['Lối sống, trang phục, bữa ăn, nơi ở', 'Cách nói', 'Tất cả các đáp án trên', 'Cách viết'], 2, 'Giản dị toàn diện trong cuộc sống thường nhật.', [
      'Sai — đúng nhưng chưa đầy đủ; sự giản dị còn ở cách nói, cách viết.',
      'Sai — đúng một phần; còn lối sống, trang phục, bữa ăn, cách viết.',
      'Đúng — sự giản dị của Bác thể hiện toàn diện: lối sống, trang phục, bữa ăn, nơi ở, cách nói và cách viết.',
      'Sai — đúng một phần; còn nhiều phương diện khác thể hiện sự giản dị.',
    ]),
    Q('Văn bản giúp người đọc?', ['Chỉ biết tiểu sử', 'Cảm phục và học tập tấm gương đạo đức, lối sống của Bác', 'Học ngoại ngữ', 'Học chính trị'], 1, 'Bồi dưỡng nhân cách, lý tưởng sống.', [
      'Sai — văn bản không dừng ở cung cấp tiểu sử mà bồi dưỡng nhân cách.',
      'Đúng — văn bản giúp người đọc cảm phục và học tập tấm gương đạo đức, lối sống của Bác.',
      'Sai — mục đích văn bản không phải dạy ngoại ngữ.',
      'Sai — mục đích chính là bồi dưỡng nhân cách, lý tưởng sống, không phải học chính trị.',
    ]),
    Q('Sự kết hợp Đông - Tây trong phong cách Bác là kết quả của?', ['Du lịch', 'Đọc sách', 'Bẩm sinh', 'Quá trình học tập, lao động, hoạt động cách mạng ở nhiều quốc gia'], 3, 'Bác đã đến nhiều nước, tiếp xúc nhiều nền văn hóa.', [
      'Sai — không phải nhờ du lịch đơn thuần mà nhờ cả quá trình hoạt động cách mạng.',
      'Sai — đọc sách chỉ là một phần; cốt lõi là trải nghiệm thực tiễn ở nhiều nước.',
      'Sai — đây là kết quả của rèn luyện, không phải bẩm sinh.',
      'Đúng — đó là kết quả của quá trình học tập, lao động, hoạt động cách mạng ở nhiều quốc gia, tiếp xúc nhiều nền văn hóa.',
    ]),
  ]),

  M(30, 'Văn bản nhật dụng — Đấu tranh cho một thế giới hòa bình', [
    Q('Tác giả "Đấu tranh cho một thế giới hòa bình" là?', ['A. Chekhov', 'G. Márquez (G. Garcia Marquez)', 'M. Gorki', 'L. Tolstoy'], 1, 'Nhà văn Colombia G. Garcia Marquez — Nobel Văn học 1982.', [
      'Sai — A. Chekhov là nhà văn Nga, không phải tác giả văn bản này.',
      'Đúng — tác giả là G. Garcia Marquez, nhà văn Colombia, Nobel Văn học 1982.',
      'Sai — M. Gorki là nhà văn Nga, không phải tác giả văn bản này.',
      'Sai — L. Tolstoy là đại văn hào Nga, không phải tác giả văn bản này.',
    ]),
    Q('Văn bản viết về vấn đề?', ['Môi trường', 'Giáo dục', 'Kinh tế', 'Hiểm họa chiến tranh hạt nhân và lời kêu gọi hòa bình'], 3, 'Cảnh báo về nguy cơ hủy diệt từ vũ khí hạt nhân.', [
      'Sai — văn bản không bàn về môi trường.',
      'Sai — văn bản không viết về giáo dục.',
      'Sai — kinh tế chỉ được nhắc qua số liệu, không phải vấn đề trung tâm.',
      'Đúng — văn bản cảnh báo hiểm họa chiến tranh hạt nhân và kêu gọi đấu tranh cho hòa bình.',
    ]),
    Q('Tác giả dùng số liệu để chứng minh điều gì?', ['Sự giàu có', 'Sự phát triển', 'Sự nguy hiểm của vũ khí hạt nhân và sự lãng phí khổng lồ tiền của thay vì lo cho con người', 'Sự tiến bộ'], 2, 'Số liệu thuyết phục: chi phí khổng lồ cho vũ khí có thể giải quyết bao vấn đề nhân loại.', [
      'Sai — số liệu không nhằm khoe sự giàu có.',
      'Sai — số liệu không dùng để ca ngợi sự phát triển.',
      'Đúng — số liệu chứng minh sự nguy hiểm của vũ khí hạt nhân và sự lãng phí khổng lồ tiền của lẽ ra nên lo cho con người.',
      'Sai — số liệu không nhằm chứng minh sự tiến bộ mà cảnh báo về hiểm họa.',
    ]),
    Q('Cách lập luận của tác giả?', ['Cảm tính', 'Sơ sài', 'Lan man', 'Chặt chẽ, đầy số liệu, có cảm xúc và sức thuyết phục cao'], 3, 'Kết hợp lý lẽ + số liệu + cảm xúc nhân văn.', [
      'Sai — lập luận dựa trên số liệu xác thực chứ không cảm tính.',
      'Sai — lập luận công phu, dày dặn chứ không sơ sài.',
      'Sai — lập luận mạch lạc, tập trung chứ không lan man.',
      'Đúng — lập luận chặt chẽ, đầy số liệu, kết hợp cảm xúc nhân văn nên sức thuyết phục cao.',
    ]),
    Q('Thông điệp chính của văn bản?', ['Hãy bảo vệ hòa bình, đấu tranh ngăn chặn chiến tranh hạt nhân', 'Tích trữ vũ khí', 'Sống thờ ơ', 'Phát triển vũ khí'], 0, 'Lời kêu gọi nhân loại đoàn kết vì hòa bình.', [
      'Đúng — thông điệp là kêu gọi nhân loại đoàn kết bảo vệ hòa bình, đấu tranh ngăn chặn chiến tranh hạt nhân.',
      'Sai — văn bản phản đối chạy đua vũ trang, không cổ vũ tích trữ vũ khí.',
      'Sai — văn bản kêu gọi hành động, trái ngược với thái độ thờ ơ.',
      'Sai — văn bản phản đối phát triển vũ khí hạt nhân.',
    ]),
    Q('Văn bản có ý nghĩa với thế giới hiện đại?', ['Không còn ý nghĩa', 'Chỉ liên quan thế kỷ trước', 'Lỗi thời', 'Vẫn nóng hổi vì nguy cơ chiến tranh, xung đột chưa hết'], 3, 'Vấn đề vẫn rất thời sự — vũ khí hạt nhân vẫn là mối đe dọa.', [
      'Sai — văn bản vẫn còn nguyên giá trị, không hề mất ý nghĩa.',
      'Sai — vấn đề không chỉ giới hạn ở thế kỷ trước.',
      'Sai — thông điệp hòa bình không bao giờ lỗi thời.',
      'Đúng — văn bản vẫn nóng hổi vì nguy cơ chiến tranh, xung đột và vũ khí hạt nhân vẫn là mối đe dọa.',
    ]),
  ]),

  M(31, 'Ôn tập về thơ', [
    Q('Đặc điểm chung của thơ hiện đại VN giai đoạn 1945-1975?', ['Thơ tình cá nhân', 'Thơ tôn giáo', 'Cảm hứng yêu nước, cách mạng, hình tượng người lính, nhân dân lao động', 'Thơ trào phúng'], 2, 'Khuynh hướng sử thi + cảm hứng lãng mạn cách mạng.', [
      'Sai — giai đoạn này thơ hướng về cộng đồng, không thiên về tình cảm cá nhân.',
      'Sai — thơ tôn giáo không phải đặc điểm chung của giai đoạn này.',
      'Đúng — cảm hứng yêu nước, cách mạng với hình tượng người lính và nhân dân lao động, mang khuynh hướng sử thi và cảm hứng lãng mạn.',
      'Sai — trào phúng không phải đặc điểm chủ đạo của thơ giai đoạn 1945-1975.',
    ]),
    Q('Bài thơ nào sáng tác sau 1975?', ['Đồng chí', 'Sang thu, Mùa xuân nho nhỏ, Ánh trăng', 'Bài thơ về tiểu đội xe không kính', 'Đoàn thuyền đánh cá'], 1, 'Sang thu (1977), Mùa xuân nho nhỏ (1980), Ánh trăng (1978).', [
      'Sai — "Đồng chí" viết năm 1948, trước 1975.',
      'Đúng — Sang thu (1977), Mùa xuân nho nhỏ (1980), Ánh trăng (1978) đều ra đời sau 1975.',
      'Sai — "Bài thơ về tiểu đội xe không kính" viết năm 1969, trước 1975.',
      'Sai — "Đoàn thuyền đánh cá" viết năm 1958, trước 1975.',
    ]),
    Q('Cảm hứng chủ đạo của "Mùa xuân nho nhỏ"?', ['Khát vọng cống hiến', 'Tình yêu đôi lứa', 'Nỗi nhớ quê', 'Sự cô đơn'], 0, 'Cống hiến phần mình cho mùa xuân lớn của đất nước.', [
      'Đúng — cảm hứng chủ đạo là khát vọng cống hiến phần nhỏ bé của mình cho mùa xuân lớn của đất nước.',
      'Sai — bài thơ không viết về tình yêu đôi lứa.',
      'Sai — cảm hứng chính là cống hiến, không phải nỗi nhớ quê.',
      'Sai — bài thơ tràn đầy khát vọng dâng hiến, không gợi sự cô đơn.',
    ]),
    Q('Bài thơ nào thể hiện tình cảm cha con sâu sắc?', ['Bếp lửa', 'Ánh trăng', 'Nói với con', 'Đồng chí'], 2, 'Y Phương — lời cha truyền con tình yêu cội nguồn.', [
      'Sai — "Bếp lửa" thể hiện tình bà cháu, không phải tình cha con.',
      'Sai — "Ánh trăng" nói về đạo lý nhớ quá khứ, không phải tình cha con.',
      'Đúng — "Nói với con" của Y Phương là lời cha truyền cho con tình yêu cội nguồn, quê hương.',
      'Sai — "Đồng chí" viết về tình đồng đội, không phải tình cha con.',
    ]),
    Q('Thể thơ năm chữ xuất hiện trong các bài?', ['Viếng lăng Bác', 'Bếp lửa', 'Đồng chí', 'Mùa xuân nho nhỏ, Ánh trăng, Sang thu'], 3, 'Cả 3 bài đều thể thơ 5 chữ — nhịp nhẹ nhàng, suy ngẫm.', [
      'Sai — "Viếng lăng Bác" chủ yếu là thơ tám chữ xen bảy chữ.',
      'Sai — "Bếp lửa" thiên về thể tám chữ.',
      'Sai — "Đồng chí" là thơ tự do.',
      'Đúng — Mùa xuân nho nhỏ, Ánh trăng, Sang thu đều là thơ năm chữ, nhịp nhẹ nhàng, suy ngẫm.',
    ]),
    Q('Đặc điểm nổi bật của thơ Việt Nam sau 1975?', ['Trào phúng', 'Cổ điển', 'Sử thi hào hùng', 'Cảm hứng đời tư, suy ngẫm, triết lý'], 3, 'Thơ chuyển hướng nội tâm, suy ngẫm sâu sắc về cuộc sống.', [
      'Sai — trào phúng không phải đặc điểm nổi bật của thơ sau 1975.',
      'Sai — thơ sau 1975 hiện đại, không quay về thi pháp cổ điển.',
      'Sai — khuynh hướng sử thi hào hùng là đặc điểm của thơ 1945-1975.',
      'Đúng — thơ sau 1975 chuyển hướng về cảm hứng đời tư, nội tâm, suy ngẫm và triết lý về cuộc sống.',
    ]),
  ]),

  M(32, 'Ôn tập về truyện', [
    Q('Đặc điểm truyện ngắn hiện đại VN?', ['Dài, nhiều nhân vật', 'Có cốt truyện độc đáo, tình huống đặc sắc, khắc họa nội tâm sâu sắc', 'Cổ điển', 'Sử thi'], 1, 'Tinh túy ở tình huống + tâm lý nhân vật.', [
      'Sai — truyện ngắn thường dung lượng nhỏ gọn, ít nhân vật.',
      'Đúng — truyện ngắn hiện đại có cốt truyện độc đáo, tình huống đặc sắc và khắc họa nội tâm sâu sắc.',
      'Sai — "cổ điển" không phải đặc điểm của truyện ngắn hiện đại.',
      'Sai — sử thi là thể loại đồ sộ về cộng đồng, khác với truyện ngắn hiện đại.',
    ]),
    Q('Truyện "Làng" có tình huống độc đáo là?', ['Mất mùa', 'Ông Hai nghe tin làng theo Tây', 'Đám cưới', 'Cãi nhau'], 1, 'Tình huống đẩy nhân vật vào xung đột nội tâm dữ dội.', [
      'Sai — mất mùa không phải tình huống của truyện "Làng".',
      'Đúng — tin làng Chợ Dầu theo Tây đẩy ông Hai vào xung đột nội tâm dữ dội.',
      'Sai — không có tình tiết đám cưới làm tình huống truyện.',
      'Sai — cãi nhau không phải tình huống của truyện.',
    ]),
    Q('Truyện "Lặng lẽ Sa Pa" tỏa sáng vẻ đẹp của?', ['Trí thức', 'Người lao động vô danh âm thầm cống hiến', 'Anh hùng', 'Doanh nhân'], 1, 'Tôn vinh người lao động bình dị nhưng cao cả.', [
      'Sai — truyện không nhằm ngợi ca riêng tầng lớp trí thức.',
      'Đúng — truyện tôn vinh vẻ đẹp của người lao động vô danh, bình dị mà âm thầm cống hiến.',
      'Sai — không phải hình tượng anh hùng theo nghĩa chiến trận.',
      'Sai — truyện không viết về doanh nhân.',
    ]),
    Q('Tình huống nhận cha của bé Thu ("Chiếc lược ngà") xảy ra khi?', ['Lúc ông Sáu chuẩn bị lên đường trở lại chiến trường', 'Khi ăn cơm', 'Lúc mới gặp', 'Khi đi học'], 0, 'Khoảnh khắc cảm động nhất — và là khoảnh khắc cuối cùng.', [
      'Đúng — bé Thu nhận cha đúng lúc ông Sáu chuẩn bị lên đường, khoảnh khắc cảm động và cũng là cuối cùng.',
      'Sai — trong bữa cơm bé Thu còn chưa nhận, thậm chí hắt trứng cá.',
      'Sai — lúc mới gặp bé Thu sợ hãi bỏ chạy.',
      'Sai — không có cảnh nhận cha lúc đi học.',
    ]),
    Q('"Bến quê" mang chủ đề?', ['Tình yêu', 'Sự nghiệp', 'Chiến tranh', 'Triết lý sống — trân trọng giá trị giản dị, gần gũi'], 3, 'Thông điệp về việc thức tỉnh, trân trọng cái bên cạnh.', [
      'Sai — tình yêu không phải chủ đề trung tâm của "Bến quê".',
      'Sai — truyện không bàn về sự nghiệp.',
      'Sai — chiến tranh không phải chủ đề của "Bến quê".',
      'Đúng — chủ đề là triết lý sống: thức tỉnh, trân trọng những giá trị giản dị, gần gũi quanh ta.',
    ]),
    Q('Nhân vật Phương Định trong "Những ngôi sao xa xôi" mang vẻ đẹp?', ['Dũng cảm + nữ tính, mơ mộng', 'Chỉ dũng cảm', 'Lạnh lùng', 'Chỉ mơ mộng'], 0, 'Người con gái Việt Nam thời chiến: vừa anh hùng vừa nữ tính.', [
      'Đúng — Phương Định vừa dũng cảm trong chiến đấu vừa nữ tính, mơ mộng — vẻ đẹp người con gái Việt Nam thời chiến.',
      'Sai — chỉ nói dũng cảm là bỏ qua nét nữ tính, mơ mộng của cô.',
      'Sai — Phương Định giàu tình cảm, hồn nhiên chứ không lạnh lùng.',
      'Sai — chỉ nói mơ mộng là thiếu vẻ đẹp dũng cảm, gan dạ của cô.',
    ]),
  ]),

  M(33, 'Ôn tập tiếng Việt', [
    Q('Khởi ngữ là?', ['Trạng ngữ', 'Bổ ngữ', 'Vị ngữ', 'Thành phần đứng trước chủ ngữ để nêu đề tài được nói đến'], 3, 'Vd: "Quyển sách này, tôi đã đọc rồi" — "quyển sách này" là khởi ngữ.', [
      'Sai — trạng ngữ bổ sung thời gian, nơi chốn, nguyên nhân…, khác khởi ngữ.',
      'Sai — bổ ngữ bổ sung ý nghĩa cho động/tính từ, không phải khởi ngữ.',
      'Sai — vị ngữ nêu hoạt động, trạng thái của chủ ngữ, khác khởi ngữ.',
      'Đúng — khởi ngữ đứng trước chủ ngữ, nêu đề tài được nói đến (vd: "Quyển sách này, tôi đã đọc rồi").',
    ]),
    Q('Thành phần biệt lập tình thái dùng để?', ['Cảm thán', 'Thể hiện cách nhìn của người nói về sự việc (chắc, có lẽ, hình như…)', 'Phụ chú', 'Gọi đáp'], 1, 'Biểu thị độ tin cậy: chắc chắn, có lẽ, có thể…', [
      'Sai — bộc lộ cảm xúc là thành phần cảm thán, không phải tình thái.',
      'Đúng — thành phần tình thái thể hiện cách nhìn của người nói về độ tin cậy sự việc (chắc, có lẽ, hình như…).',
      'Sai — bổ sung chi tiết, giải thích là thành phần phụ chú.',
      'Sai — tạo lập, duy trì quan hệ giao tiếp là thành phần gọi - đáp.',
    ]),
    Q('Phép liên kết nào sử dụng từ ngữ thay thế?', ['Phép liên tưởng', 'Phép thế', 'Phép nối', 'Phép lặp'], 1, 'Vd: dùng "nó", "đó", "cái ấy" thay cho từ đã nêu.', [
      'Sai — phép liên tưởng dùng từ cùng trường nghĩa, không phải từ thay thế.',
      'Đúng — phép thế dùng từ ngữ ("nó", "đó", "cái ấy"…) thay thế cho từ đã nêu để liên kết câu.',
      'Sai — phép nối dùng quan hệ từ, liên từ để nối câu.',
      'Sai — phép lặp lặp lại từ ngữ, không phải thay thế.',
    ]),
    Q('Phép nối sử dụng?', ['Lặp từ', 'Đồng nghĩa', 'Đại từ', 'Quan hệ từ, liên từ để nối câu (vì vậy, do đó, nhưng, và…)'], 3, 'Các từ nối ý: nhưng, tuy nhiên, vì vậy, do đó…', [
      'Sai — lặp lại từ là phép lặp, không phải phép nối.',
      'Sai — dùng từ đồng nghĩa thuộc phép liên kết khác, không phải phép nối.',
      'Sai — dùng đại từ thay thế là phép thế, không phải phép nối.',
      'Đúng — phép nối dùng quan hệ từ, liên từ (vì vậy, do đó, nhưng, và…) để nối các câu.',
    ]),
    Q('Câu "Trời mưa to. Vì vậy, đường rất trơn" sử dụng phép?', ['Nối (qua "vì vậy")', 'Lặp (lặp lại từ "trời" ở câu sau)', 'Liên tưởng', 'Thế (thay "trời mưa" bằng đại từ)'], 0, '"Vì vậy" là từ nối quan hệ nguyên nhân - kết quả.', [
      'Đúng — "vì vậy" là từ nối thể hiện quan hệ nguyên nhân - kết quả giữa hai câu, đó là phép nối.',
      'Sai — câu sau không lặp lại từ "trời" nên không phải phép lặp.',
      'Sai — không dùng từ cùng trường liên tưởng để liên kết.',
      'Sai — không có đại từ thay thế cho "trời mưa" nên không phải phép thế.',
    ]),
    Q('Hàm ý trong giao tiếp là?', ['Nghĩa từ điển', 'Nghĩa mặc định', 'Nghĩa không nói ra trực tiếp mà người nghe phải suy ra', 'Nghĩa hiển ngôn'], 2, 'Hàm ý đối lập với hiển ngôn — ý ngầm cần suy luận.', [
      'Sai — nghĩa từ điển là nghĩa hiển ngôn, không phải hàm ý.',
      'Sai — "nghĩa mặc định" không phải khái niệm hàm ý.',
      'Đúng — hàm ý là phần nghĩa không nói trực tiếp, người nghe phải dựa vào ngữ cảnh để suy ra.',
      'Sai — nghĩa hiển ngôn là nghĩa diễn đạt trực tiếp, đối lập với hàm ý.',
    ]),
  ]),

  M(34, 'Đề ôn thi vào 10 — Đề số 1', [
    Q('Bài thơ "Mùa xuân nho nhỏ" của ai?', ['Hữu Thỉnh', 'Viễn Phương', 'Thanh Hải', 'Y Phương'], 2, 'Thanh Hải sáng tác năm 1980.', [
      'Sai — Hữu Thỉnh là tác giả "Sang thu", không phải "Mùa xuân nho nhỏ".',
      'Sai — Viễn Phương là tác giả "Viếng lăng Bác".',
      'Đúng — "Mùa xuân nho nhỏ" là của Thanh Hải, sáng tác năm 1980.',
      'Sai — Y Phương là tác giả "Nói với con".',
    ]),
    Q('Tác phẩm nào KHÔNG phải của Nguyễn Du?', ['Văn chiêu hồn', 'Truyện Đoạn trường tân thanh', 'Lục Vân Tiên', 'Truyện Kiều'], 2, '"Lục Vân Tiên" của Nguyễn Đình Chiểu, các bài còn lại của Nguyễn Du.', [
      'Sai — "Văn chiêu hồn" (Văn tế thập loại chúng sinh) là của Nguyễn Du.',
      'Sai — "Đoạn trường tân thanh" chính là tên chữ Hán của Truyện Kiều, của Nguyễn Du.',
      'Đúng — "Lục Vân Tiên" là của Nguyễn Đình Chiểu; các tác phẩm còn lại đều của Nguyễn Du.',
      'Sai — "Truyện Kiều" là kiệt tác của Nguyễn Du.',
    ]),
    Q('Hình ảnh "đầu súng trăng treo" trong "Đồng chí" gợi?', ['Bóng tối', 'Tình yêu đôi lứa', 'Sự cô đơn', 'Vẻ đẹp hiện thực và lãng mạn, chất chiến sĩ và thi sĩ trong người lính'], 3, 'Hình ảnh kết tinh đẹp nhất bài thơ.', [
      'Sai — hình ảnh này gợi vẻ đẹp lãng mạn, không phải bóng tối.',
      'Sai — không liên quan đến tình yêu đôi lứa.',
      'Sai — hình ảnh gắn với tình đồng đội bên nhau, không gợi cô đơn.',
      'Đúng — gợi vẻ đẹp hiện thực hòa quyện lãng mạn, chất chiến sĩ và thi sĩ trong người lính.',
    ]),
    Q('Truyện "Chiếc lược ngà" ca ngợi?', ['Tình cha con trong chiến tranh', 'Tình mẹ con', 'Tình thầy trò', 'Tình bạn'], 0, 'Tình phụ tử sâu nặng dù hoàn cảnh éo le.', [
      'Đúng — truyện ca ngợi tình cha con (ông Sáu - bé Thu) sâu nặng, thiêng liêng trong cảnh ngộ éo le của chiến tranh.',
      'Sai — chủ đề là tình cha con, không phải tình mẹ con.',
      'Sai — truyện không viết về tình thầy trò.',
      'Sai — truyện không viết về tình bạn.',
    ]),
    Q('Thành phần biệt lập cảm thán?', ['Này, vâng', 'Có lẽ, hình như', 'Ôi, chao ôi, trời ơi…', 'Vì vậy, nhưng'], 2, 'Bộc lộ cảm xúc trực tiếp.', [
      'Sai — "này", "vâng" là thành phần gọi - đáp, không phải cảm thán.',
      'Sai — "có lẽ", "hình như" là thành phần tình thái.',
      'Đúng — "ôi", "chao ôi", "trời ơi"… là thành phần cảm thán, bộc lộ cảm xúc trực tiếp.',
      'Sai — "vì vậy", "nhưng" là quan hệ từ dùng cho phép nối, không phải cảm thán.',
    ]),
    Q('Phép liên kết "Nó học giỏi. Nó còn ngoan ngoãn" là?', ['Phép lặp (lặp đại từ "Nó")', 'Phép thế', 'Phép nối', 'Liên tưởng'], 0, 'Lặp từ "Nó" để liên kết 2 câu.', [
      'Đúng — hai câu lặp lại đại từ "Nó" để liên kết, đó là phép lặp.',
      'Sai — không có từ ngữ thay thế cho từ đã nêu nên không phải phép thế.',
      'Sai — không dùng quan hệ từ, liên từ để nối nên không phải phép nối.',
      'Sai — không dùng từ cùng trường liên tưởng nên không phải phép liên tưởng.',
    ]),
  ]),

  M(35, 'Đề ôn thi vào 10 — Đề số 2', [
    Q('Bài thơ "Sang thu" tả thời điểm?', ['Cuối thu', 'Cuối hạ — đầu thu', 'Mùa hè', 'Đầu xuân'], 1, 'Khoảnh khắc giao mùa tinh tế.', [
      'Sai — bài thơ tả lúc chớm thu, không phải cuối thu.',
      'Đúng — "Sang thu" tả khoảnh khắc giao mùa cuối hạ - đầu thu tinh tế.',
      'Sai — không phải mùa hè mà là lúc hạ vừa qua, thu vừa tới.',
      'Sai — không phải đầu xuân mà là chớm thu.',
    ]),
    Q('"Người đồng mình thô sơ da thịt / Chẳng mấy ai nhỏ bé đâu con" — Tác giả là?', ['Y Phương', 'Hữu Thỉnh', 'Viễn Phương', 'Thanh Hải'], 0, 'Trích "Nói với con" của Y Phương.', [
      'Đúng — hai câu trích từ "Nói với con" của Y Phương, nhà thơ dân tộc Tày.',
      'Sai — Hữu Thỉnh là tác giả "Sang thu".',
      'Sai — Viễn Phương là tác giả "Viếng lăng Bác".',
      'Sai — Thanh Hải là tác giả "Mùa xuân nho nhỏ".',
    ]),
    Q('Hình tượng "bếp lửa" trong bài thơ cùng tên biểu trưng cho?', ['Sự ấm áp vật chất', 'Tình bạn', 'Tình bà cháu, gia đình, quê hương', 'Nỗi buồn'], 2, 'Bếp lửa = ngọn lửa tình thân và tình yêu cội nguồn.', [
      'Sai — bếp lửa không chỉ là hơi ấm vật chất mà mang ý nghĩa tinh thần sâu xa.',
      'Sai — bếp lửa không biểu trưng cho tình bạn.',
      'Đúng — bếp lửa biểu trưng cho tình bà cháu, tổ ấm gia đình và tình yêu quê hương cội nguồn.',
      'Sai — bếp lửa gợi sự ấm áp, nghĩa tình chứ không phải nỗi buồn.',
    ]),
    Q('"Lặng lẽ Sa Pa" ngợi ca?', ['Tình yêu', 'Sự giàu sang', 'Vẻ đẹp người lao động bình dị', 'Cảnh thiên nhiên'], 2, 'Tôn vinh người lao động vô danh.', [
      'Sai — truyện không nhằm ngợi ca tình yêu đôi lứa.',
      'Sai — truyện không ca ngợi sự giàu sang vật chất.',
      'Đúng — truyện ngợi ca vẻ đẹp của người lao động bình dị, vô danh mà âm thầm cống hiến.',
      'Sai — cảnh thiên nhiên Sa Pa chỉ là phông nền tôn lên con người.',
    ]),
    Q('Để viết bài nghị luận xã hội về "lòng biết ơn", cần?', ['Chỉ trách móc', 'Giải thích - phân tích biểu hiện - dẫn chứng - phản đề - bài học', 'Chỉ kể chuyện', 'Chỉ ca ngợi'], 1, 'Đầy đủ các thao tác lập luận.', [
      'Sai — chỉ trách móc là một chiều, thiếu các thao tác lập luận.',
      'Đúng — cần đủ các thao tác: giải thích - phân tích biểu hiện - dẫn chứng - phản đề - rút ra bài học.',
      'Sai — kể chuyện thuộc văn tự sự, không phải bài nghị luận.',
      'Sai — chỉ ca ngợi một chiều thì thiếu giải thích, dẫn chứng và phản đề.',
    ]),
    Q('Câu hỏi tu từ "Ôi! Còn gì đẹp hơn?" có tác dụng?', ['Hoài nghi', 'Hỏi để có câu trả lời', 'Khẳng định mạnh mẽ giá trị thẩm mỹ, bộc lộ cảm xúc', 'Cãi cọ'], 2, 'Câu hỏi tu từ = khẳng định + biểu cảm.', [
      'Sai — câu hỏi tu từ nhằm khẳng định, không phải bày tỏ hoài nghi.',
      'Sai — câu hỏi tu từ không nhằm tìm câu trả lời mà để nhấn mạnh.',
      'Đúng — câu hỏi tu từ ở đây khẳng định mạnh mẽ giá trị thẩm mỹ và bộc lộ cảm xúc.',
      'Sai — câu hỏi tu từ không nhằm tranh cãi.',
    ]),
  ]),
];

export const S9NV_SCENARIOS = indexBy(S9NV_WEEKS);
