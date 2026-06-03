// ============================================================
// Lớp 2 · ÂM NHẠC — 36 tuần (HK1: 1–18 · HK2: 19–36 · T22 chủ đề Tết)
// Bám Chương trình GDPT 2018 môn Âm nhạc (1 tiết/tuần).
// ID prefix: "P2AN-wNN-quiz"
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2AN', 'am-nhac', n, title, qs, opts);

export const P2AN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Quốc ca Việt Nam', [
    Q('Quốc ca Việt Nam có tên gốc là gì?', ['Lên đàng', 'Tiến quân ca', 'Hành quân xa', 'Diệt phát xít'], 1, 'Quốc ca Việt Nam là bài "Tiến quân ca".'),
    Q('Ai là tác giả của Quốc ca Việt Nam?', ['Văn Cao', 'Hoàng Vân', 'Phạm Tuyên', 'Trịnh Công Sơn'], 0, 'Nhạc sĩ Văn Cao sáng tác "Tiến quân ca" năm 1944.'),
    Q('Khi hát Quốc ca, em phải có tư thế thế nào?', ['Nằm xuống', 'Ngồi tự do', 'Vừa hát vừa chạy', 'Đứng nghiêm, mắt hướng cờ'], 3, 'Phải đứng nghiêm trang, mắt hướng về Quốc kỳ.'),
    Q('Quốc ca thường được hát vào dịp nào ở trường?', ['Giờ ăn trưa', 'Lễ chào cờ đầu tuần', 'Giờ ra chơi', 'Giờ ngủ trưa'], 1, 'Lễ chào cờ thứ Hai đầu tuần là dịp hát Quốc ca.'),
    Q('Khi hát Quốc ca em có được cười đùa không?', ['Không, phải trang nghiêm', 'Chỉ cười nhẹ', 'Có, để vui', 'Tuỳ thích'], 0, 'Hát Quốc ca cần thái độ trang nghiêm, tôn kính.'),
    Q('Lá cờ Tổ quốc Việt Nam có màu gì?', ['Xanh – trắng', 'Vàng – đen', 'Trắng – xanh', 'Đỏ sao vàng'], 3, 'Quốc kỳ Việt Nam nền đỏ, ngôi sao vàng năm cánh ở giữa.'),
  ]),

  M(2, 'Bài hát "Em yêu trường em" (Hoàng Vân)', [
    Q('Bài hát "Em yêu trường em" do nhạc sĩ nào sáng tác?', ['Phạm Tuyên', 'Hoàng Vân', 'Văn Cao', 'Lưu Hữu Phước'], 1, 'Nhạc sĩ Hoàng Vân là tác giả bài "Em yêu trường em".'),
    Q('Bài hát "Em yêu trường em" nói về tình cảm với?', ['Mái trường, thầy cô, bạn bè', 'Chú bộ đội', 'Quê hương xa', 'Ông bà'], 0, 'Bài hát thể hiện tình yêu mái trường, thầy cô và bạn bè.'),
    Q('Câu hát mở đầu bài là "Em yêu …"?', ['trường em', 'lớp em', 'cô giáo', 'thầy em'], 0, '"Em yêu trường em, với bao bạn thân…"'),
    Q('Khi hát bài này em nên có cảm xúc thế nào?', ['Vui tươi, trìu mến', 'Giận dữ', 'Sợ hãi', 'Buồn bã'], 0, 'Bài hát có giai điệu vui tươi, đầm ấm.'),
    Q('Nhạc sĩ Hoàng Vân nổi tiếng vì sáng tác cho ai?', ['Thiếu nhi và cách mạng', 'Chỉ ca khúc tình yêu', 'Người lớn tuổi', 'Chỉ nhạc nước ngoài'], 0, 'Hoàng Vân nhiều ca khúc thiếu nhi và nhạc cách mạng nổi tiếng.'),
    Q('Mái trường trong bài hát là nơi để em làm gì?', ['Xem ti vi cả ngày', 'Chơi điện tử', 'Học tập, vui chơi cùng bạn', 'Đi mua đồ'], 2, 'Trường là nơi em học tập, vui chơi cùng bạn bè.'),
  ]),

  M(3, 'Hát "Em yêu trường em" + vỗ tay theo phách', [
    Q('Vỗ tay theo phách nghĩa là?', ['Vỗ lúc nào cũng được', 'Không vỗ gì cả', 'Vỗ đều theo nhịp đập của bài', 'Vỗ thật to bất kỳ'], 2, 'Vỗ tay theo phách là vỗ đều theo từng phách của bài hát.'),
    Q('Khi hát kết hợp vỗ tay, hai tay phải?', ['Vẫy lên cao', 'Không cử động', 'Vỗ vào nhau đều, nhẹ nhàng', 'Đập mạnh xuống bàn'], 2, 'Hai bàn tay vỗ nhẹ, đều theo phách.'),
    Q('Tốc độ vỗ tay so với giai điệu nên?', ['Lúc nhanh lúc chậm tuỳ thích', 'Càng nhanh càng tốt', 'Đều, khớp với phách bài hát', 'Càng chậm càng tốt'], 2, 'Vỗ tay phải đều và khớp với phách của bài.'),
    Q('Khi cả lớp cùng hát, em cần lưu ý điều gì?', ['Hát hoà giọng cùng bạn', 'Hát theo ý riêng', 'Hát to át bạn', 'Im lặng không hát'], 0, 'Hát đồng đều, hoà giọng cùng cả lớp.'),
    Q('Vỗ tay theo phách giúp em điều gì?', ['Hát sai nhịp', 'Quên lời bài hát', 'Cảm nhận nhịp phách, hát đúng nhịp', 'Mỏi tay'], 2, 'Giúp cảm nhận nhịp phách và giữ nhịp khi hát.'),
    Q('Khi biểu diễn nhóm bài này, em nên?', ['Tươi cười, hướng về khán giả', 'Quay lưng về khán giả', 'Nhắm mắt', 'Cúi gằm mặt xuống'], 0, 'Biểu diễn cần tươi tắn, tự tin, hướng về khán giả.'),
  ]),

  M(4, 'Phân biệt âm thanh to – nhỏ', [
    Q('Tiếng trống đánh mạnh sẽ nghe?', ['Cao và trong', 'To', 'Im lặng', 'Nhỏ và êm'], 1, 'Đánh mạnh thì âm thanh to (cường độ lớn).'),
    Q('Khi nói thì thầm, âm thanh nghe thế nào?', ['Rất to', 'Vang khắp nơi', 'Cao vút', 'Nhỏ'], 3, 'Thì thầm là âm thanh nhỏ.'),
    Q('Trong âm nhạc, to – nhỏ gọi là?', ['Trường độ', 'Nhịp độ', 'Cao độ', 'Cường độ'], 3, 'To – nhỏ là cường độ của âm thanh.'),
    Q('Tiếng sấm thường là âm thanh?', ['Không có âm', 'Nhỏ như tiếng thì thầm', 'To', 'Rất nhẹ'], 2, 'Tiếng sấm là âm thanh rất to.'),
    Q('Tiếng lá rơi thường là âm thanh?', ['To như tiếng trống', 'Nhỏ, nhẹ', 'Vang dội', 'Chói tai'], 1, 'Tiếng lá rơi rất nhỏ và nhẹ.'),
    Q('Khi hát ru em bé, ta hát?', ['Nhỏ, êm dịu', 'Hét lên', 'Rất to', 'Không hát'], 0, 'Hát ru cần nhỏ, êm dịu để bé ngủ.'),
  ]),

  M(5, 'Bài hát "Thật là hay" (Hoàng Lân)', [
    Q('Bài "Thật là hay" do nhạc sĩ nào sáng tác?', ['Phạm Tuyên', 'Hoàng Vân', 'Văn Cao', 'Hoàng Lân'], 3, 'Nhạc sĩ Hoàng Lân là tác giả bài "Thật là hay".'),
    Q('Bài "Thật là hay" miêu tả tiếng hót của con vật nào?', ['Chim', 'Gà trống gáy sáng', 'Chó sủa giữ nhà', 'Mèo kêu meo meo'], 0, '"Nghe véo von trong vòm cây, hoạ mi với chim oanh…" — các loài chim.'),
    Q('Câu hát "Nghe véo von…" tả âm thanh của?', ['Tiếng người', 'Tiếng trống', 'Còi xe', 'Tiếng chim hót'], 3, 'Véo von là tiếng chim hót.'),
    Q('Giai điệu bài "Thật là hay" có tính chất?', ['Vui tươi, trong sáng', 'Hùng tráng dữ dội', 'Buồn, chậm', 'Bi thương'], 0, 'Bài có giai điệu vui tươi, trong sáng.'),
    Q('Nhạc sĩ Hoàng Lân là anh em sinh đôi với?', ['Hoàng Long', 'Hoàng Vân', 'Hoàng Hiệp', 'Hoàng Cầm'], 0, 'Hoàng Long – Hoàng Lân là cặp anh em sinh đôi nổi tiếng nhạc thiếu nhi.'),
    Q('Khi hát bài này em nên thể hiện?', ['Vẻ buồn bã', 'Vẻ mệt mỏi', 'Vẻ tức giận', 'Sự vui tươi, yêu thiên nhiên'], 3, 'Bài thể hiện niềm vui và tình yêu thiên nhiên.'),
  ]),

  M(6, 'Phân biệt âm thanh cao – thấp', [
    Q('Tiếng chim hót so với tiếng trống lớn thường?', ['Không nghe được', 'Cao hơn', 'Bằng nhau', 'Thấp hơn'], 1, 'Chim hót có cao độ cao hơn tiếng trống lớn.'),
    Q('Trong âm nhạc, cao – thấp gọi là?', ['Cao độ', 'Trường độ', 'Cường độ', 'Sắc độ'], 0, 'Cao – thấp là cao độ.'),
    Q('Tiếng voi rống thường là âm?', ['Thấp, trầm', 'Im lặng', 'Cao và lảnh lót', 'Cao vút'], 0, 'Tiếng voi rống rất trầm (thấp).'),
    Q('Giọng nữ thường cao hơn hay thấp hơn giọng nam?', ['Bằng nhau', 'Không so sánh được', 'Cao hơn', 'Thấp hơn'], 2, 'Thông thường giọng nữ cao hơn giọng nam.'),
    Q('Đàn piano càng sang bên phải, âm thanh càng?', ['Càng to', 'Càng nhỏ', 'Càng thấp', 'Càng cao'], 3, 'Phía bên phải piano là các nốt cao.'),
    Q('Nốt Đô – Mi – Son thì nốt nào cao nhất?', ['Bằng nhau', 'Nốt Mi', 'Nốt Đô', 'Son'], 3, 'Trong 3 nốt này, Son là cao nhất.'),
  ]),

  M(7, 'Bài hát "Xòe hoa" (Dân ca Thái)', [
    Q('Bài "Xòe hoa" là dân ca dân tộc nào?', ['Khmer', 'Thái', 'Mông', 'Kinh'], 1, '"Xòe hoa" là dân ca của dân tộc Thái.'),
    Q('"Xòe" trong văn hoá Thái là?', ['Một nhạc cụ', 'Một món ăn', 'Một bài thơ', 'Một điệu múa truyền thống'], 3, 'Xòe là điệu múa truyền thống của người Thái.'),
    Q('Trong bài có nhắc đến những âm thanh nào?', ['Tiếng máy bay', 'Tiếng tàu hoả', 'Tiếng còi xe', 'Tiếng chiêng, tiếng khèn'], 3, '"Bùng boong bính boong" — tiếng chiêng, khèn của người Thái.'),
    Q('Người Thái sống chủ yếu ở vùng nào?', ['Miền núi Tây Bắc', 'Hải đảo', 'Đồng bằng sông Cửu Long', 'Biển miền Trung'], 0, 'Dân tộc Thái sống chủ yếu ở Tây Bắc Việt Nam.'),
    Q('Bài "Xòe hoa" có tính chất giai điệu?', ['Bi thương', 'Vui tươi, rộn ràng', 'Trầm, chậm rãi', 'Buồn bã'], 1, 'Giai điệu vui tươi, rộn ràng kiểu nhạc lễ hội.'),
    Q('Khi hát "Xòe hoa" có thể kết hợp?', ['Nhảy dây', 'Chạy quanh', 'Ngồi yên', 'Múa nhẹ theo nhịp xòe'], 3, 'Có thể kết hợp động tác múa xòe nhẹ nhàng.'),
  ]),

  M(8, 'Phân biệt âm dài – ngắn (trường độ)', [
    Q('Trong âm nhạc, dài – ngắn gọi là?', ['Cao độ', 'Trường độ', 'Cường độ', 'Tốc độ'], 1, 'Dài – ngắn là trường độ của âm thanh.'),
    Q('Tiếng còi tàu kéo dài là âm?', ['Ngắn, gọn', 'Dài', 'Cao, lảnh lót', 'Không có âm'], 1, 'Còi tàu kéo dài là âm thanh dài.'),
    Q('Tiếng vỗ tay "bốp" một cái là âm?', ['Dài, kéo lê', 'Thấp, trầm', 'Ngắn', 'Cao, vang xa'], 2, 'Vỗ tay "bốp" gọn là âm thanh ngắn.'),
    Q('Khi hát ngân dài cuối câu, ta nên?', ['Hét lên', 'Giữ hơi để ngân đủ', 'Ngắt liền', 'Im lặng'], 1, 'Phải giữ hơi để ngân đủ trường độ.'),
    Q('Nốt nhạc có giá trị dài nhất trong các nốt em học là?', ['Nốt trắng', 'Nốt đen', 'Nốt móc đơn', 'Nốt tròn'], 3, 'Nốt tròn dài nhất (4 phách).'),
    Q('Khi gõ thanh phách "cộc – cộc – cộc" đều đều là các âm?', ['Không có âm', 'Ngắn và bằng nhau', 'Dài bằng nhau', 'Khác nhau hoàn toàn'], 1, 'Các tiếng gõ ngắn, đều, bằng nhau về trường độ.'),
  ]),

  M(9, 'Bài hát "Múa vui" (Lưu Hữu Phước)', [
    Q('Bài "Múa vui" do nhạc sĩ nào sáng tác?', ['Văn Cao', 'Phạm Tuyên', 'Lưu Hữu Phước', 'Hoàng Vân'], 2, 'Nhạc sĩ Lưu Hữu Phước là tác giả "Múa vui".'),
    Q('Câu hát mở đầu bài là "Cùng nhau múa …"?', ['xung quanh vòng', 'với mẹ', 'thật là hay', 'dưới trăng'], 0, '"Cùng nhau múa xung quanh vòng, cùng nhau múa cùng vui…"'),
    Q('Khi hát bài này có thể kết hợp?', ['Nằm xuống', 'Ngồi im', 'Múa vòng tròn', 'Chạy nhảy lung tung'], 2, 'Bài thường được hát kèm múa vòng tròn.'),
    Q('Tính chất bài "Múa vui" là?', ['Bi thương', 'Trầm hùng', 'Buồn, chậm', 'Vui, nhịp nhàng'], 3, 'Bài có giai điệu vui, nhịp nhàng phù hợp múa tập thể.'),
    Q('Nhạc sĩ Lưu Hữu Phước còn nổi tiếng với bài?', ['Em yêu trường em', 'Tiến quân ca', 'Lên đàng / Giải phóng miền Nam', 'Mái trường mến yêu'], 2, 'Lưu Hữu Phước là tác giả "Lên đàng", "Giải phóng miền Nam"…'),
    Q('Khi múa vòng tròn em cần?', ['Đẩy bạn ngã', 'Đi tự do', 'Nắm tay bạn, đi đều', 'Chạy ra ngoài'], 2, 'Nắm tay bạn, đi đều theo vòng tròn để múa đẹp.'),
  ]),

  M(10, 'Vỗ tay theo nhịp 2/4', [
    Q('Nhịp 2/4 có mấy phách trong một ô nhịp?', ['3 phách', '4 phách', '1 phách', '2 phách'], 3, 'Nhịp 2/4 có 2 phách trong 1 ô nhịp.'),
    Q('Trong nhịp 2/4, phách nào là phách mạnh?', ['Phách 1', 'Cả hai', 'Phách nghỉ', 'Phách 2'], 0, 'Phách 1 mạnh, phách 2 nhẹ.'),
    Q('Vỗ tay theo nhịp 2/4 thường vỗ?', ['3 cái như nhau', '1 mạnh – 1 nhẹ', '4 cái liền nhau', '2 mạnh – 2 nhẹ'], 1, 'Một cái mạnh (phách 1), một cái nhẹ (phách 2), lặp lại.'),
    Q('Bài "Thật là hay" được viết ở nhịp?', ['3/4', '6/8', '4/4', '2/4'], 3, 'Nhiều bài hát thiếu nhi viết ở nhịp 2/4.'),
    Q('Khi đếm nhịp 2/4, ta đếm thế nào?', ['1 – 2, 1 – 2', '1 – 2 – 3 – 4', '1 – 2 – 3 – 4 – 5', '1 – 2 – 3, 1 – 2 – 3'], 0, 'Đếm 1 – 2 lặp lại.'),
    Q('Phách mạnh trong nhịp 2/4 thường rơi vào?', ['Giữa ô nhịp', 'Đầu ô nhịp', 'Cuối ô nhịp', 'Không có quy luật'], 1, 'Phách mạnh luôn ở đầu ô nhịp.'),
  ]),

  M(11, 'Bài hát "Chúc mừng sinh nhật"', [
    Q('Bài "Chúc mừng sinh nhật" thường hát vào dịp?', ['Tết Trung thu', 'Lễ chào cờ', 'Sinh nhật', 'Tết Nguyên đán'], 2, 'Bài hát chúc mừng người được mừng sinh nhật.'),
    Q('Khi hát chúc sinh nhật bạn, em nên?', ['Buồn rầu', 'Tươi vui, thân ái', 'Cau mày', 'Trêu chọc bạn'], 1, 'Hát vui vẻ, thân ái để bạn vui.'),
    Q('Người được mừng sinh nhật thường?', ['Bỏ chạy ra ngoài', 'Đứng im không nói', 'Thổi nến và ước', 'Khóc to'], 2, 'Thổi nến trên bánh và ước điều ước.'),
    Q('Khi tặng quà sinh nhật bạn, em nói?', ['Xin chào!', 'Mặc kệ', 'Tạm biệt!', 'Chúc mừng sinh nhật bạn!'], 3, 'Lời chúc lịch sự, ấm áp.'),
    Q('Bài "Happy Birthday" tiếng Việt thường có câu?', ['Tạm biệt nhé', 'Mừng năm mới', 'Chúc mừng sinh nhật', 'Chào buổi sáng'], 2, '"Mừng ngày sinh nhật… chúc mừng sinh nhật…"'),
    Q('Cảm xúc khi hát bài này nên là?', ['Hồi hộp lo sợ', 'Tức giận', 'Vui vẻ, ấm áp', 'Buồn ngủ'], 2, 'Vui vẻ, ấm áp dành cho người thân/bạn.'),
  ]),

  M(12, 'Nhạc cụ: Thanh phách', [
    Q('Thanh phách thường được làm bằng?', ['Giấy mỏng', 'Nhựa mềm', 'Đồng đặc', 'Tre hoặc gỗ'], 3, 'Thanh phách làm bằng tre hoặc gỗ cứng.'),
    Q('Thanh phách phát ra âm thanh khi?', ['Gõ hai thanh vào nhau', 'Thổi vào', 'Bóp mạnh', 'Kéo dây'], 0, 'Gõ hai thanh vào nhau để tạo tiếng.'),
    Q('Cầm thanh phách đúng cách là?', ['Cầm bằng chân', 'Hai thanh trong một tay', 'Một thanh ở mỗi tay', 'Để trên bàn'], 2, 'Mỗi tay cầm một thanh, đưa lại gõ vào nhau.'),
    Q('Tiếng thanh phách thuộc loại âm?', ['Rất to dội', 'Không có âm', 'Trầm sâu', 'Cao, trong'], 3, 'Tiếng thanh phách trong, ngắn, gọn.'),
    Q('Thanh phách dùng để?', ['Trang trí', 'Gõ giữ nhịp khi hát', 'Nấu ăn', 'Quét nhà'], 1, 'Dùng để giữ nhịp, đệm cho bài hát.'),
    Q('Khi gõ thanh phách, em nên gõ?', ['Tùy hứng', 'Đều, vừa phải theo nhịp', 'Mạnh hết sức', 'Rất nhỏ không ai nghe'], 1, 'Gõ đều, vừa phải, đúng nhịp.'),
  ]),

  M(13, 'Bài hát "Cộc cách tùng cheng"', [
    Q('"Cộc cách tùng cheng" mô phỏng âm thanh của?', ['Tiếng mưa', 'Các nhạc cụ gõ', 'Tiếng xe', 'Các con vật'], 1, 'Bài liệt kê tiếng các nhạc cụ gõ: sênh, thanh la, mõ, trống…'),
    Q('"Cộc" trong bài là tiếng của nhạc cụ nào?', ['Đàn dây', 'Sáo trúc', 'Mõ / sênh', 'Trống lớn'], 2, '"Cộc" mô phỏng tiếng mõ hoặc sênh tiền.'),
    Q('"Tùng" là tiếng của nhạc cụ nào?', ['Sáo trúc', 'Trống', 'Đàn tranh', 'Kèn lá'], 1, '"Tùng" mô phỏng tiếng trống.'),
    Q('"Cheng" gợi tiếng nhạc cụ?', ['Thanh la / chũm choẹ', 'Sáo trúc', 'Đàn bầu', 'Mõ gỗ'], 0, '"Cheng" là tiếng kim loại của thanh la, chũm choẹ.'),
    Q('Bài hát giúp em làm gì?', ['Học nấu ăn', 'Học toán', 'Quên nhạc cụ', 'Nhận biết âm sắc một số nhạc cụ gõ'], 3, 'Giúp nhận biết âm sắc nhạc cụ gõ qua từ tượng thanh.'),
    Q('Khi hát bài này có thể kết hợp?', ['Gõ thanh phách, trống nhỏ', 'Vẽ tranh', 'Đếm tiền', 'Đứng im lặng nghe'], 0, 'Kết hợp gõ thanh phách, trống nhỏ minh hoạ rất hợp.'),
  ]),

  M(14, 'Nhạc cụ: Trống nhỏ', [
    Q('Trống nhỏ phát ra âm khi?', ['Đặt im', 'Thổi vào', 'Gõ bằng dùi vào mặt trống', 'Kéo dây'], 2, 'Dùng dùi gõ vào mặt trống để tạo âm.'),
    Q('Mặt trống thường được làm bằng?', ['Giấy mỏng', 'Da hoặc nhựa căng', 'Kim loại đặc', 'Tre đan'], 1, 'Mặt trống thường là da căng (hoặc nhựa).'),
    Q('Âm thanh của trống nhỏ thuộc loại?', ['Đanh, gọn, vang vừa', 'Trong, cao vút', 'Êm dịu kéo dài', 'Không có âm'], 0, 'Trống nhỏ có tiếng đanh, gọn.'),
    Q('Khi gõ trống cần?', ['Đập càng mạnh càng tốt', 'Đập nhẹ tới mức không nghe', 'Không gõ', 'Vừa sức, đúng nhịp'], 3, 'Đánh vừa sức và đúng nhịp.'),
    Q('Trống nhỏ thường dùng để?', ['Giữ nhịp, đệm hát', 'Trang trí treo tường', 'Làm bánh', 'Tưới cây'], 0, 'Trống nhỏ dùng giữ nhịp, đệm cho bài hát.'),
    Q('Khi cầm dùi trống nên?', ['Ném đi', 'Nắm chặt cứng', 'Cầm ngược', 'Cầm nhẹ, linh hoạt cổ tay'], 3, 'Cầm nhẹ, cổ tay linh hoạt mới gõ hay.'),
  ]),

  M(15, 'Bài hát "Chiến sĩ tí hon"', [
    Q('Bài "Chiến sĩ tí hon" có hình ảnh các bạn nhỏ làm gì?', ['Đi chơi công viên', 'Đi học', 'Đóng vai chiến sĩ, bước đều', 'Đi ngủ'], 2, 'Các bạn nhỏ giả làm chiến sĩ, bước đều, vác súng giấy.'),
    Q('Tính chất bài hát "Chiến sĩ tí hon"?', ['Êm dịu ru ngủ', 'Buồn bã', 'Trữ tình sâu lắng', 'Khoẻ khoắn, hành khúc'], 3, 'Bài có tính chất hành khúc, khoẻ khoắn.'),
    Q('Bước đi theo nhạc hành khúc phải?', ['Lê chân', 'Nhảy lò cò', 'Đều, dứt khoát', 'Lúc nhanh lúc chậm'], 2, 'Bước đều, dứt khoát theo phách mạnh.'),
    Q('Phách mạnh trong hành khúc thường rơi vào?', ['Cuối bài', 'Chân phải bước đầu', 'Lúc nghỉ', 'Đầu mỗi câu hát'], 1, 'Phách mạnh thường khớp với bước chân đầu.'),
    Q('Khi hát bài này nên kết hợp?', ['Bước đều tại chỗ', 'Nằm yên', 'Ngồi yên một chỗ', 'Quay tròn'], 0, 'Bước đều tại chỗ hợp với hành khúc.'),
    Q('Bài hát giáo dục em điều gì?', ['Không quan tâm', 'Lười biếng', 'Sợ hãi', 'Yêu chú bộ đội, tinh thần kỷ luật'], 3, 'Khơi tình yêu chú bộ đội và tinh thần kỷ luật.'),
  ]),

  M(16, 'Nghe nhạc: Dân ca các vùng miền', [
    Q('Dân ca quan họ nổi tiếng ở vùng nào?', ['Huế (miền Trung)', 'Bắc Ninh (miền Bắc)', 'Tây Nguyên', 'Nam Bộ'], 1, 'Quan họ Bắc Ninh là di sản miền Bắc.'),
    Q('Hò Huế, Lý Huế là dân ca vùng nào?', ['Miền Bắc', 'Miền Trung', 'Tây Bắc', 'Miền Nam'], 1, 'Hò Huế, Lý Huế thuộc miền Trung.'),
    Q('"Lý cây bông", "Lý ngựa ô" là dân ca?', ['Nam Bộ', 'Trung Bộ', 'Tây Nguyên', 'Bắc Bộ'], 0, 'Các bài Lý nổi tiếng là dân ca Nam Bộ.'),
    Q('Dân ca là gì?', ['Bài hát của nhân dân, truyền miệng qua nhiều đời', 'Nhạc nước ngoài', 'Bài hát do một nhạc sĩ nổi tiếng viết riêng', 'Nhạc điện tử'], 0, 'Dân ca là bài hát do nhân dân sáng tác, truyền miệng.'),
    Q('Khi nghe dân ca, thái độ nên?', ['Tôn trọng, lắng nghe cảm nhận', 'Cười nhạo', 'Bịt tai', 'Bỏ ra ngoài'], 0, 'Trân trọng vốn âm nhạc dân tộc.'),
    Q('Học dân ca giúp em?', ['Quên quê hương', 'Hiểu và yêu văn hoá dân tộc', 'Sợ truyền thống', 'Không có lợi ích'], 1, 'Hiểu thêm văn hoá, yêu quê hương đất nước.'),
  ]),

  M(17, 'Vận động cơ thể theo nhạc', [
    Q('Vận động cơ thể theo nhạc nghĩa là?', ['Đứng yên', 'Nói chuyện riêng', 'Ăn quà', 'Làm động tác theo nhịp – giai điệu'], 3, 'Dùng cơ thể (tay, chân, đầu…) chuyển động theo nhạc.'),
    Q('Khi nhạc nhanh, động tác nên?', ['Ngồi xuống', 'Đứng im', 'Chậm rãi', 'Nhanh, gọn'], 3, 'Động tác khớp tốc độ nhạc.'),
    Q('Khi nhạc nhẹ nhàng, em nên?', ['Đập mạnh', 'Động tác mềm mại, uyển chuyển', 'Đứng nghiêm', 'Hét lên'], 1, 'Nhạc êm thì động tác mềm.'),
    Q('Trước khi vận động cần?', ['Không cần gì', 'Ăn no căng', 'Cởi giày', 'Khởi động nhẹ, đứng đúng tư thế'], 3, 'Khởi động và đứng đúng tư thế để an toàn.'),
    Q('Vận động theo nhạc giúp em?', ['Mệt mỏi hơn', 'Cảm nhận âm nhạc tốt hơn, vui khoẻ', 'Không có ích', 'Buồn ngủ'], 1, 'Phát triển cảm thụ âm nhạc và sức khoẻ.'),
    Q('Khi vận động trong nhóm cần?', ['Va vào bạn', 'Giữ khoảng cách, phối hợp', 'Tự ý chạy ra', 'Đẩy bạn ngã'], 1, 'Giữ khoảng cách an toàn và phối hợp đẹp.'),
  ]),

  M(18, 'Ôn tập – Biểu diễn cuối Học kì 1', [
    Q('Tác giả "Em yêu trường em" là?', ['Hoàng Lân', 'Văn Cao', 'Hoàng Vân', 'Lưu Hữu Phước'], 2, 'Nhạc sĩ Hoàng Vân.'),
    Q('Tác giả "Thật là hay" là?', ['Hoàng Lân', 'Trịnh Công Sơn', 'Phạm Tuyên', 'Hoàng Vân'], 0, 'Nhạc sĩ Hoàng Lân.'),
    Q('"Xòe hoa" là dân ca dân tộc?', ['Tày', 'Thái', 'Kinh', 'Mông'], 1, 'Dân ca Thái.'),
    Q('"Múa vui" do nhạc sĩ nào sáng tác?', ['Phạm Tuyên', 'Văn Cao', 'Lưu Hữu Phước', 'Hoàng Vân'], 2, 'Nhạc sĩ Lưu Hữu Phước.'),
    Q('Quốc ca Việt Nam tên là?', ['Giải phóng miền Nam', 'Tiến quân ca', 'Lên đàng', 'Diệt phát xít'], 1, 'Tên gốc: Tiến quân ca – Văn Cao.'),
    Q('To – nhỏ trong âm nhạc gọi là?', ['Cao độ', 'Cường độ', 'Trường độ', 'Tốc độ'], 1, 'Cường độ.'),
    Q('Cao – thấp trong âm nhạc gọi là?', ['Cao độ', 'Trường độ', 'Sắc thái', 'Cường độ'], 0, 'Cao độ.'),
    Q('Dài – ngắn trong âm nhạc gọi là?', ['Cường độ', 'Tốc độ', 'Trường độ', 'Cao độ'], 2, 'Trường độ.'),
    Q('Nhịp 2/4 có mấy phách trong 1 ô nhịp?', ['1', '2', '4', '3'], 1, '2 phách.'),
    Q('Khi biểu diễn em nên?', ['Cúi mặt, run rẩy', 'Quay lưng', 'Im lặng', 'Tươi cười, tự tin'], 3, 'Biểu diễn cần tự tin, tươi tắn.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Bài hát "Trên con đường đến trường" (Ngô Mạnh Thu)', [
    Q('Bài "Trên con đường đến trường" do nhạc sĩ nào sáng tác?', ['Hoàng Vân', 'Ngô Mạnh Thu', 'Phạm Tuyên', 'Lưu Hữu Phước'], 1, 'Nhạc sĩ Ngô Mạnh Thu là tác giả bài này.'),
    Q('Bài hát nói về điều gì?', ['Đi tắm biển', 'Niềm vui em đến trường mỗi sáng', 'Đi câu cá', 'Đi chợ'], 1, 'Bài kể về niềm vui em đến trường mỗi sáng.'),
    Q('Trên đường đến trường em thường gặp?', ['Biển lớn', 'Cây xanh, bạn bè, chim hót', 'Sa mạc', 'Chỉ ô tô'], 1, 'Cảnh đường đến trường: cây xanh, bạn bè, chim hót.'),
    Q('Cảm xúc bài hát?', ['Vui tươi, trong sáng', 'Buồn, da diết', 'Tức giận', 'Sợ hãi'], 0, 'Vui tươi, trong sáng phù hợp em nhỏ đi học.'),
    Q('Đi học em cần?', ['Bỏ học', 'Đi trễ', 'Chuẩn bị đầy đủ, đúng giờ', 'Mang đồ chơi'], 2, 'Đi học đầy đủ, đúng giờ, có chuẩn bị.'),
    Q('Khi hát bài này nên kết hợp?', ['Bước nhẹ hoặc vẫy tay theo nhịp', 'Quay lưng', 'Đập bàn mạnh', 'Ngồi yên'], 0, 'Vận động nhẹ theo nhịp cho sinh động.'),
  ]),

  M(20, 'Tiết tấu cơ bản (đen – đen – móc đôi)', [
    Q('Tiết tấu là gì?', ['Cách trang trí', 'Sự sắp xếp các âm thanh dài – ngắn theo nhịp', 'Độ to nhỏ', 'Độ cao thấp'], 1, 'Tiết tấu là chuỗi âm thanh dài – ngắn theo nhịp.'),
    Q('Nốt đen có giá trị mấy phách?', ['4 phách', '1 phách', 'Nửa phách', '2 phách'], 1, 'Nốt đen = 1 phách.'),
    Q('Hai nốt móc đơn dính nhau (móc đôi) bằng mấy phách?', ['1 phách', '4 phách', 'Nửa phách', '2 phách'], 0, 'Hai móc đơn = 1 phách (mỗi móc = nửa phách).'),
    Q('Đọc tiết tấu "đen – đen – móc đôi – đen" ta gõ?', ['ta ta ta ta ta', 'ta – ti – ta – ti', 'ta – ta – ti ti – ta', 'ti ti ti ti'], 2, 'Đen đọc "ta", móc đôi đọc "ti ti".'),
    Q('Tiết tấu giúp ta?', ['Hát to', 'Hát đều, đúng nhịp', 'Hát sai nhịp', 'Quên bài'], 1, 'Tiết tấu chuẩn giúp hát đều, đúng nhịp.'),
    Q('Khi gõ tiết tấu, em nên?', ['Gõ tuỳ hứng', 'Không gõ', 'Gõ to nhất có thể', 'Gõ đều, vừa phải'], 3, 'Gõ đều, vừa phải, đúng tiết tấu.'),
  ]),

  M(21, 'Bài hát "Hoa lá mùa xuân"', [
    Q('Bài "Hoa lá mùa xuân" nói về mùa nào?', ['Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'], 0, 'Bài về mùa xuân, hoa lá đua nở.'),
    Q('Mùa xuân ở Việt Nam thường có?', ['Trời ấm, hoa nở, chim hót', 'Tuyết rơi nhiều', 'Bão lụt liên tục', 'Nắng gắt nhất'], 0, 'Mùa xuân ấm áp, cây cối đâm chồi nảy lộc.'),
    Q('Tính chất giai điệu bài hát?', ['U sầu, da diết', 'Tươi vui, rộn ràng', 'Dữ dội', 'Buồn bã'], 1, 'Giai điệu tươi vui, rộn ràng.'),
    Q('Mùa xuân có ngày lễ lớn nào của Việt Nam?', ['Ngày nhà giáo', 'Quốc khánh', 'Tết Nguyên đán', 'Trung thu'], 2, 'Tết Nguyên đán rơi vào đầu xuân.'),
    Q('Khi hát bài này em nên?', ['Tươi cười, hân hoan', 'Mặt buồn', 'Cau có', 'Im lặng không cười'], 0, 'Mùa xuân vui, hát tươi cười.'),
    Q('Hoa nào tượng trưng cho Tết miền Bắc?', ['Hoa cúc trắng', 'Hoa hồng', 'Hoa đào', 'Hoa mai'], 2, 'Miền Bắc có hoa đào, miền Nam có hoa mai.'),
  ]),

  M(22, 'Tết — Bài hát "Sắp đến Tết rồi" & nhạc cụ ngày Tết', [
    Q('"Sắp đến Tết rồi" nói về?', ['Tết Trung thu', 'Ngày 8/3', 'Lễ Quốc khánh', 'Tết Nguyên đán đang đến gần'], 3, 'Bài hát mô tả không khí Tết Nguyên đán sắp đến.'),
    Q('"Sắp đến Tết rồi, đến trường rất vui…" — bạn nhỏ cảm thấy?', ['Sợ hãi', 'Buồn, lưu luyến', 'Rất vui, háo hức', 'Mệt mỏi'], 2, 'Trẻ em háo hức vì sắp Tết, được nghỉ và mặc đồ mới.'),
    Q('Nhạc cụ nào hay vang lên trong dịp Tết – lễ hội Việt?', ['Đàn organ điện', 'Đàn piano', 'Trống, chiêng', 'Kèn saxophone'], 2, 'Trống, chiêng vang trong lễ hội Tết.'),
    Q('Múa lân ngày Tết thường có nhạc cụ gì đệm?', ['Đàn violin', 'Sáo recorder', 'Trống, chũm choẹ', 'Đàn ghita'], 2, 'Trống và chũm choẹ rộn ràng đệm múa lân.'),
    Q('Người ta thường chúc Tết câu nào?', ['Tạm biệt!', 'Cảm ơn!', 'Chào buổi sáng!', 'Chúc mừng năm mới!'], 3, '"Chúc mừng năm mới!" là câu chúc Tết quen thuộc.'),
    Q('Trẻ em ngày Tết được người lớn tặng?', ['Bài tập về nhà', 'Đồ ăn thừa', 'Lì xì (tiền mừng tuổi)', 'Sách giáo khoa'], 2, 'Trẻ em được mừng tuổi (lì xì) trong dịp Tết.'),
    Q('Khi hát bài Tết em nên thể hiện?', ['Buồn ngủ', 'Tức giận', 'Trầm buồn, da diết', 'Vui tươi, rộn ràng'], 3, 'Bài hát Tết cần vui tươi, rộn ràng.'),
    Q('Hoạt động âm nhạc nào quen với Tết Việt?', ['Không có gì', 'Đánh trống hội, hát quan họ, múa lân', 'Hát rap nước ngoài', 'Nhạc thiền'], 1, 'Trống hội, hát quan họ, múa lân… đậm chất Tết.'),
  ]),

  M(23, 'Bài hát "Chú chim nhỏ dễ thương" (dân ca Pháp, lời Việt)', [
    Q('Bài "Chú chim nhỏ dễ thương" có xuất xứ?', ['Nhạc Trung Quốc', 'Dân ca Pháp, lời Việt', 'Dân ca Việt Nam', 'Nhạc Mỹ'], 1, 'Là dân ca Pháp được đặt lời Việt cho thiếu nhi.'),
    Q('Nhân vật chính trong bài là?', ['Chú mèo', 'Chú voi', 'Chú chim nhỏ', 'Chú gà'], 2, '"Chú chim nhỏ dễ thương…"'),
    Q('Tính chất bài hát?', ['Nhẹ nhàng, dễ thương', 'Buồn rầu', 'Dữ dội', 'Hùng tráng'], 0, 'Giai điệu nhẹ nhàng, đáng yêu.'),
    Q('Khi hát em nên?', ['Hát nhẹ, tình cảm', 'Hét lên', 'Nói chứ không hát', 'Hát to dữ'], 0, 'Bài đáng yêu nên hát nhẹ, tình cảm.'),
    Q('Học bài hát của nước ngoài giúp em?', ['Sợ ngoại ngữ', 'Không có ích', 'Quên Việt Nam', 'Hiểu thêm về văn hoá thế giới'], 3, 'Mở rộng hiểu biết về âm nhạc các nước.'),
    Q('Loài chim trong bài giúp ta nhớ phải?', ['Đuổi đánh chim', 'Săn bắn', 'Bắt nhốt chim', 'Yêu thương, bảo vệ loài vật'], 3, 'Yêu quý, bảo vệ loài chim và thiên nhiên.'),
  ]),

  M(24, 'Đọc nhạc: Nốt Đô', [
    Q('Trên khuông nhạc khoá Son, nốt Đô (Đô 1) nằm ở?', ['Dòng kẻ phụ dưới khuông', 'Trên dòng kẻ thứ 5', 'Trên cùng', 'Khe thứ 4'], 0, 'Đô 1 ở dòng kẻ phụ phía dưới khuông nhạc.'),
    Q('Khi đọc nhạc, ta đọc "Đô" thay vì gì?', ['Nốt Son', 'Nốt La', 'Nốt Mi', 'Đô'], 3, 'Đọc đúng tên nốt là "Đô".'),
    Q('Trên đàn phím, nốt Đô là phím trắng nằm?', ['Giữa 3 phím đen', 'Bên phải cụm 2 phím đen', 'Bên trái cụm 2 phím đen', 'Phím đen ngoài cùng'], 2, 'Đô là phím trắng ngay bên trái cụm 2 phím đen.'),
    Q('Trong các nốt Đô – Rê – Mi, nốt thấp nhất là?', ['Nốt Rê', 'Nốt Mi', 'Bằng nhau', 'Đô'], 3, 'Đô thấp nhất trong 3 nốt.'),
    Q('Đọc nhạc giúp em?', ['Không có lợi ích', 'Hát sai lời', 'Quên bài hát', 'Hát đúng cao độ và biết nốt'], 3, 'Hỗ trợ hát đúng cao độ, biết tên nốt.'),
    Q('Khi đọc nhạc cần?', ['Hét to', 'Đọc đại', 'Im lặng', 'Đọc rõ tên nốt, đúng cao độ'], 3, 'Phải rõ tên nốt và đúng cao độ.'),
  ]),

  M(25, 'Đọc nhạc: Nốt Rê – Mi', [
    Q('Thứ tự cao độ tăng dần là?', ['Đô – Rê – Mi', 'Mi – Rê – Đô', 'Mi – Đô – Rê', 'Rê – Đô – Mi'], 0, 'Đô < Rê < Mi.'),
    Q('Trên khuông Son, nốt Mi 1 nằm ở?', ['Khe thứ 4', 'Dòng kẻ thứ 5', 'Dòng kẻ thứ 1 (dưới cùng)', 'Ngoài khuông'], 2, 'Mi 1 ở dòng kẻ thứ nhất (dưới cùng).'),
    Q('Trên khuông Son, nốt Rê 1 nằm ở?', ['Dòng kẻ thứ 5', 'Dưới dòng kẻ thứ 1', 'Khe thứ 3', 'Trên khuông'], 1, 'Rê 1 ở khe phụ dưới dòng kẻ 1 (giữa Đô và Mi).'),
    Q('Đọc nhạc "Đô – Rê – Mi" lên cao dần ta thấy?', ['Không phân biệt', 'Càng trầm', 'Bằng nhau', 'Càng cao'], 3, 'Đi từ Đô lên Mi là đi lên cao dần.'),
    Q('Khi đọc "Đô – Rê – Mi" với đàn, ta bấm phím?', ['3 phím trắng liền nhau', 'Phím đen', 'Cùng một phím', 'Cách quãng'], 0, 'Đô – Rê – Mi là 3 phím trắng liền nhau.'),
    Q('Nốt Rê đứng giữa hai nốt?', ['Đô và Mi', 'Son và La', 'La và Si', 'Mi và Pha'], 0, 'Đô – Rê – Mi, Rê ở giữa Đô và Mi.'),
  ]),

  M(26, 'Đọc nhạc: Nốt Pha – Son', [
    Q('Sau nốt Mi là nốt?', ['Nốt La', 'Nốt Rê', 'Pha', 'Nốt Đô'], 2, 'Thứ tự: Đô – Rê – Mi – Pha – Son – La – Si.'),
    Q('Sau nốt Pha là nốt?', ['Nốt Mi', 'Nốt La', 'Son', 'Nốt Đô'], 2, 'Mi – Pha – Son.'),
    Q('Đọc dãy "Đô – Rê – Mi – Pha – Son" là?', ['Đi xuống dần', 'Bằng nhau', 'Lộn xộn', 'Đi lên dần'], 3, '5 nốt liên tiếp đi lên dần.'),
    Q('Khoá Son đặt ở đầu khuông nhạc dùng để?', ['Trang trí', 'Xác định vị trí nốt Son', 'Báo nghỉ', 'Cho đẹp'], 1, 'Khoá Son chỉ ra vị trí nốt Son trên khuông.'),
    Q('Trên khuông Son, nốt Son 1 nằm ở?', ['Khe trên cùng', 'Dòng kẻ thứ 2', 'Dưới khuông', 'Dòng kẻ thứ 5'], 1, 'Son 1 ở dòng kẻ thứ 2 (đường khoá Son uốn quanh).'),
    Q('Đọc nhạc kết hợp với?', ['Im lặng tuyệt đối', 'Vỗ tay hoặc gõ phách giữ nhịp', 'Ăn quà', 'Chạy nhảy'], 1, 'Kết hợp vỗ tay/gõ phách giúp đọc đúng nhịp.'),
  ]),

  M(27, 'Bài hát "Chim chích bông"', [
    Q('Bài "Chim chích bông" miêu tả con vật nào?', ['Chích bông', 'Cò trắng', 'Chim sẻ nâu', 'Chim cú'], 0, 'Chim chích bông – loài chim nhỏ có ích.'),
    Q('Chim chích bông trong bài giúp con người làm gì?', ['Phá hoại mùa màng', 'Bắt sâu giúp nhà nông', 'Cãi nhau', 'Đốt nhà'], 1, 'Chim chích bông chuyên bắt sâu bảo vệ mùa màng.'),
    Q('Tính chất bài hát?', ['Dữ tợn', 'Hùng tráng', 'Buồn bã', 'Vui tươi, nhí nhảnh'], 3, 'Giai điệu vui tươi, nhí nhảnh.'),
    Q('Qua bài hát em học được điều gì?', ['Săn bắn chim', 'Phá tổ chim', 'Ghét chim', 'Yêu quý, bảo vệ loài chim có ích'], 3, 'Yêu quý, bảo vệ chim có ích.'),
    Q('Khi hát bài này có thể kết hợp?', ['Đứng nghiêm', 'Bắt chước động tác chim bay', 'Nằm ngủ', 'Quay lưng'], 1, 'Có thể vận động nhẹ giống chim bay.'),
    Q('Chim chích bông là chim nhỏ, kêu?', ['Không kêu', 'Lích chích, líu lo', 'Gầm vang', 'Trầm như voi'], 1, 'Tiếng kêu lích chích, líu lo nên gọi chích bông.'),
  ]),

  M(28, 'Nhịp 2/4 — phân biệt phách mạnh – nhẹ', [
    Q('Trong nhịp 2/4, phách 1 là phách?', ['Mạnh', 'Phách nhẹ', 'Mạnh vừa', 'Vừa mạnh vừa nhẹ'], 0, 'Phách 1 luôn là phách mạnh.'),
    Q('Phách 2 trong nhịp 2/4 là?', ['Mạnh vừa', 'Nhẹ', 'Vắng', 'Rất mạnh'], 1, 'Phách 2 là phách nhẹ.'),
    Q('Đếm 2/4 ta đếm?', ['1 – 1 – 1 – 1', '2 – 4 – 6 – 8', '1 – 2 – 3 – 4', '1 – 2, 1 – 2'], 3, 'Lặp lại 1 – 2, 1 – 2…'),
    Q('Khi đệm trống nhịp 2/4 đơn giản, "Tùng – cắc" là?', ['Mạnh – nhẹ', 'Nhẹ – mạnh', 'Cả hai mạnh', 'Cả hai nhẹ'], 0, '"Tùng" (mạnh) – "cắc" (nhẹ).'),
    Q('Phách mạnh thường rơi vào?', ['Giữa ô nhịp', 'Cuối ô nhịp', 'Bên ngoài', 'Đầu ô nhịp'], 3, 'Đầu mỗi ô nhịp là phách mạnh.'),
    Q('Phân biệt mạnh – nhẹ giúp em?', ['Hát đúng nhịp, có sức sống', 'Hát sai nhịp', 'Không có ích', 'Hát đều như máy'], 0, 'Tạo sức sống và hát đúng nhịp.'),
  ]),

  M(29, 'Bài hát "Bắc kim thang" (dân ca Nam Bộ)', [
    Q('"Bắc kim thang" là dân ca vùng nào?', ['Tây Bắc', 'Nam Bộ', 'Bắc Bộ', 'Trung Bộ'], 1, 'Dân ca Nam Bộ.'),
    Q('Bài "Bắc kim thang" thường được dùng làm?', ['Bài hành khúc', 'Hát chèo', 'Đồng dao, bài hát chơi của trẻ con', 'Hát ru'], 2, 'Là đồng dao – bài chơi của trẻ Nam Bộ.'),
    Q('"Bắc kim thang cà lang bí rợ…" gợi không khí?', ['Buồn bã', 'Vui nhộn, hài hước', 'Trang nghiêm', 'Bi thương'], 1, 'Vui nhộn, hài hước kiểu đồng dao.'),
    Q('Dân ca Nam Bộ thường có nhịp điệu?', ['Chậm rãi nặng nề', 'Cứng nhắc', 'Không có nhịp', 'Nhẹ nhàng, mềm mại'], 3, 'Dân ca Nam Bộ mềm mại, uyển chuyển.'),
    Q('Khi hát "Bắc kim thang" có thể?', ['Chơi trò chơi dân gian kết hợp', 'Im lặng nhìn nhau', 'Đứng im một chỗ', 'Đọc sách'], 0, 'Trẻ em thường vừa hát vừa chơi trò.'),
    Q('Học dân ca Nam Bộ giúp em?', ['Quên miền Nam', 'Biết và yêu văn hoá miền Nam', 'Khó hát', 'Không có lợi'], 1, 'Hiểu, yêu văn hoá miền Nam.'),
  ]),

  M(30, 'Phân biệt giọng nam – giọng nữ', [
    Q('Giọng nam thường?', ['Bằng giọng nữ', 'Không có âm', 'Trầm hơn giọng nữ', 'Cao hơn giọng nữ'], 2, 'Giọng nam trầm hơn giọng nữ.'),
    Q('Giọng nữ thường?', ['Cao hơn giọng nam', 'Trầm hơn giọng nam', 'Bằng nhau', 'Không phân biệt'], 0, 'Giọng nữ cao hơn giọng nam.'),
    Q('Khi hát đồng ca có cả nam và nữ, ta nghe?', ['Lộn xộn', 'Không có gì', 'Một giọng duy nhất', 'Nhiều màu giọng phong phú'], 3, 'Hợp ca nam – nữ có màu giọng phong phú.'),
    Q('Em bé trai khi nhỏ giọng thuộc?', ['Giọng nam trầm', 'Không có giọng', 'Gần với giọng nữ (cao)', 'Không xác định'], 2, 'Bé trai chưa vỡ giọng nên giọng còn cao.'),
    Q('Khi hát theo nhóm, em nên?', ['Hát khác bài', 'Im lặng', 'Hát to át bạn', 'Hát hoà, lắng nghe bạn'], 3, 'Hoà giọng cùng nhóm.'),
    Q('Để biết giọng nam – nữ, ta cần?', ['Nhìn quần áo', 'Lắng nghe và so sánh cao độ', 'Đoán bừa', 'Hỏi tên'], 1, 'Nghe cao độ là cách phân biệt chính xác.'),
  ]),

  M(31, 'Bài hát "Cá vàng bơi"', [
    Q('Bài "Cá vàng bơi" miêu tả con vật nào?', ['Cá sấu', 'Cá voi', 'Cá heo', 'Cá vàng'], 3, 'Cá vàng – loài cá cảnh nhỏ.'),
    Q('Cá vàng trong bài bơi ở đâu?', ['Trong bể nước', 'Trong tủ lạnh', 'Trên đường', 'Trên cây'], 0, 'Cá vàng bơi trong bể nước.'),
    Q('Tính chất bài hát?', ['Hùng tráng', 'Giận dữ', 'Vui tươi, nhí nhảnh', 'Buồn, da diết'], 2, 'Vui tươi, nhí nhảnh phù hợp tuổi nhỏ.'),
    Q('Cá vàng giúp con người điều gì?', ['Cày ruộng', 'Trang trí bể, mang niềm vui', 'Trông nhà', 'Đi học'], 1, 'Làm cảnh, mang niềm vui và thẩm mỹ.'),
    Q('Khi hát có thể mô phỏng?', ['Hét to', 'Đập bàn', 'Cào cấu nhau', 'Cá bơi bằng tay'], 3, 'Có thể làm động tác tay như cá bơi.'),
    Q('Qua bài học em học được?', ['Bỏ đói cá', 'Đổ bể cá', 'Đánh đập cá', 'Yêu thương động vật, chăm sóc thú nuôi'], 3, 'Yêu thương, chăm sóc vật nuôi.'),
  ]),

  M(32, 'Nhạc cụ dân tộc: Mõ, Song loan', [
    Q('Mõ là nhạc cụ làm bằng?', ['Đồng đúc', 'Nhựa cứng', 'Gỗ rỗng ruột', 'Da căng'], 2, 'Mõ làm bằng gỗ, bên trong rỗng để cộng hưởng.'),
    Q('Mõ phát ra âm thanh?', ['Cao vút', 'Rền vang dài', 'Không có âm', 'Đục, chắc, khô'], 3, 'Tiếng mõ đục, chắc, khô gọn.'),
    Q('Song loan thường dùng trong nhạc nào?', ['Đờn ca tài tử, cải lương', 'Nhạc điện tử', 'Pop quốc tế', 'Nhạc giao hưởng'], 0, 'Song loan giữ nhịp trong đờn ca tài tử, cải lương Nam Bộ.'),
    Q('Song loan dùng để?', ['Nấu ăn', 'Giữ nhịp (báo nhịp)', 'Trang điểm', 'Tưới cây'], 1, 'Song loan dùng để báo nhịp (nhịp song loan).'),
    Q('Cả mõ và song loan đều thuộc nhóm nhạc cụ?', ['Bộ dây', 'Gõ', 'Điện tử', 'Bộ hơi'], 1, 'Cả hai đều thuộc bộ gõ.'),
    Q('Học nhạc cụ dân tộc giúp em?', ['Trân trọng văn hoá Việt Nam', 'Quên truyền thống', 'Khó học', 'Không có ích'], 0, 'Hiểu và yêu vốn văn hoá dân tộc.'),
  ]),

  M(33, 'Bài hát "Bài ca đi học" (Phan Trần Bảng)', [
    Q('Bài "Bài ca đi học" do nhạc sĩ nào sáng tác?', ['Phạm Tuyên', 'Văn Cao', 'Hoàng Vân', 'Phan Trần Bảng'], 3, 'Nhạc sĩ Phan Trần Bảng.'),
    Q('Bài hát nói về?', ['Đi du lịch', 'Đi mua sắm', 'Đi câu cá', 'Niềm vui đi học của em nhỏ'], 3, 'Niềm vui và háo hức đi học.'),
    Q('Câu hát quen thuộc trong bài là "Bình minh dâng …"?', ['lên ôm đời em yêu', 'núi cao chập chùng', 'mãi mãi nắng vàng', 'sóng biển êm đềm'], 0, '"Bình minh dâng lên ôm đời em yêu…"'),
    Q('Tính chất bài hát?', ['Dữ dội', 'Buồn bã', 'Trong sáng, hân hoan', 'Bi thương'], 2, 'Trong sáng, hân hoan kiểu hành khúc đi học.'),
    Q('Khi hát bài này em nên?', ['Mệt mỏi gục đầu', 'Cau có', 'Tươi tỉnh, đầy năng lượng', 'Im lặng'], 2, 'Thể hiện sự háo hức, vui đến trường.'),
    Q('Bài giáo dục em điều gì?', ['Yêu trường, ham học', 'Bỏ học', 'Lười học', 'Ghét bạn'], 0, 'Yêu trường, yêu việc học.'),
  ]),

  M(34, 'Biểu diễn nhóm – kỹ năng phối hợp', [
    Q('Khi biểu diễn nhóm cần?', ['Hát to át bạn', 'Mạnh ai nấy làm', 'Đứng quay lưng nhau', 'Phối hợp ăn ý, cùng nhịp'], 3, 'Phối hợp ăn ý là chìa khoá biểu diễn nhóm.'),
    Q('Trước khi biểu diễn nhóm nên?', ['Cùng tập luyện và thống nhất', 'Cãi nhau', 'Không tập gì', 'Ai làm việc nấy'], 0, 'Tập luyện chung và thống nhất phần ai làm gì.'),
    Q('Khi bạn quên lời, em nên?', ['Bỏ ra ngoài', 'Cười nhạo bạn', 'Đẩy bạn ra', 'Hát giúp, nhắc nhẹ'], 3, 'Hỗ trợ bạn nhẹ nhàng để nhóm hoàn thành.'),
    Q('Tư thế khi biểu diễn nên?', ['Cúi gằm', 'Ngồi xổm', 'Đứng thẳng, tươi cười, mắt nhìn khán giả', 'Quay lưng'], 2, 'Đứng thẳng, tươi cười, mắt hướng khán giả.'),
    Q('Khi nhận lời khen, em nên?', ['Im lặng cúi đầu', 'Kiêu ngạo', 'Cảm ơn, lịch sự', 'Khoe khoang'], 2, 'Cảm ơn, khiêm tốn và lịch sự.'),
    Q('Sau khi biểu diễn xong, cả nhóm nên?', ['Cùng cúi chào khán giả', 'Bỏ lại nhạc cụ', 'Chạy đi luôn', 'Cãi nhau'], 0, 'Cùng cúi chào để cảm ơn khán giả.'),
  ]),

  M(35, 'Bài hát tổng kết: "Tạm biệt lớp Hai"', [
    Q('Bài hát "Tạm biệt lớp Hai" thường hát vào dịp?', ['Tết Nguyên đán', 'Cuối năm học, lên lớp 3', 'Đầu năm học', 'Tết Trung thu'], 1, 'Cuối năm học để chia tay lớp 2.'),
    Q('Cảm xúc khi hát bài tạm biệt nên là?', ['Hân hoan xen chút lưu luyến', 'Tức giận', 'Hờ hững', 'Vui mừng vì không học nữa'], 0, 'Lưu luyến nhưng háo hức vì lên lớp mới.'),
    Q('Sang năm em lên lớp mấy?', ['Lớp 2 lần nữa', 'Lớp 3', 'Lớp 4', 'Mẫu giáo'], 1, 'Sau lớp 2 là lớp 3.'),
    Q('Khi tạm biệt thầy cô, bạn bè em nên?', ['Khóc oà liên tục', 'Bỏ về không chào', 'Cảm ơn, chúc tốt đẹp', 'Cãi nhau'], 2, 'Lời cảm ơn, chúc nhau những điều tốt đẹp.'),
    Q('Hè đến em nên?', ['Ôn nhẹ, nghỉ ngơi, đọc sách, học kỹ năng', 'Không làm gì cả', 'Quên hết kiến thức', 'Lười suốt hè'], 0, 'Nghỉ ngơi hợp lý và ôn nhẹ.'),
    Q('Hát bài tạm biệt giúp em?', ['Sợ học', 'Ghi nhớ kỷ niệm năm học', 'Quên trường lớp', 'Buồn ngủ'], 1, 'Ghi nhớ kỷ niệm và tình thầy trò, bạn bè.'),
  ]),

  M(36, 'Biểu diễn tổng kết cuối năm', [
    Q('Quốc ca Việt Nam tên là?', ['Lên đàng', 'Giải phóng miền Nam', 'Tiến quân ca', 'Diệt phát xít'], 2, 'Tiến quân ca – Văn Cao.'),
    Q('Tác giả "Em yêu trường em"?', ['Hoàng Lân', 'Lưu Hữu Phước', 'Hoàng Vân', 'Phạm Tuyên'], 2, 'Nhạc sĩ Hoàng Vân.'),
    Q('Tác giả "Múa vui"?', ['Hoàng Vân', 'Phan Trần Bảng', 'Lưu Hữu Phước', 'Hoàng Lân'], 2, 'Nhạc sĩ Lưu Hữu Phước.'),
    Q('Tác giả "Bài ca đi học"?', ['Phan Trần Bảng', 'Văn Cao', 'Hoàng Vân', 'Phạm Tuyên'], 0, 'Nhạc sĩ Phan Trần Bảng.'),
    Q('"Xòe hoa" là dân ca của dân tộc?', ['Mông', 'Thái', 'Khmer', 'Kinh'], 1, 'Dân ca Thái.'),
    Q('"Bắc kim thang" là dân ca vùng?', ['Trung Bộ', 'Bắc Bộ', 'Tây Bắc', 'Nam Bộ'], 3, 'Dân ca Nam Bộ.'),
    Q('Trong nhịp 2/4, phách mạnh ở vị trí?', ['Phách 1', 'Phách 2', 'Giữa hai phách', 'Cả hai'], 0, 'Phách 1 là phách mạnh.'),
    Q('Thứ tự nốt nhạc tăng dần đúng là?', ['Son – Pha – Mi – Rê – Đô', 'Mi – Đô – Son – Rê – Pha', 'Đô – Rê – Mi – Pha – Son', 'Pha – Son – Đô – Rê – Mi'], 2, 'Đô < Rê < Mi < Pha < Son.'),
    Q('Cao độ là phân biệt?', ['Sáng – tối', 'To – nhỏ', 'Cao – thấp', 'Dài – ngắn'], 2, 'Cao độ = cao – thấp.'),
    Q('Khi biểu diễn cuối năm, em nên?', ['Tự tin, tươi cười, biết ơn thầy cô bạn bè', 'Quay lưng', 'Run sợ, cúi gằm', 'Lờ khán giả'], 0, 'Tự tin, biết ơn người đã dạy dỗ và bạn bè.'),
  ], { difficulty: 3 }),
];

export const P2AN_SCENARIOS = indexBy(P2AN_WEEKS);
