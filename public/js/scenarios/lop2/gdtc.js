// ============================================================
// Lớp 2 · GDTC — 36 tuần (HK1: 1–18 · HK2: 19–36 · T22 nghỉ Tết — trò chơi dân gian)
// Bám CT GDPT 2018: Đội hình đội ngũ, Bài TD PTC, Đi-chạy-nhảy,
// Ném-bắt bóng, Tâng cầu, Trò chơi vận động, An toàn tập luyện.
// ID prefix: "P2GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2GDTC', 'gdtc', n, title, qs, opts);

export const P2GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Đứng nghiêm, đứng nghỉ', [
    Q('Khẩu lệnh "Nghiêm!" yêu cầu em làm gì?', [
      'Đứng thẳng, hai tay duỗi áp sát thân, mắt nhìn thẳng',
      'Ngồi xuống nghỉ ngơi',
      'Chạy về chỗ',
      'Quay sang phải'
    ], 0, 'Tư thế nghiêm: thân thẳng, hai gót khép, mũi bàn chân mở chữ V, mắt nhìn thẳng.'),
    Q('Khi nghe "Nghỉ!" thì chân nào được nhún chùng?', [
      'Cả hai chân',
      'Chân trái chùng, chân phải làm trụ',
      'Chân phải chùng, chân trái làm trụ',
      'Không chân nào chùng'
    ], 1, 'Đứng nghỉ: chân trái hơi chùng, trọng tâm dồn về chân phải.'),
    Q('Khi đứng nghiêm, hai bàn chân tạo thành hình gì?', [
      'Chữ V (mở khoảng 45°)',
      'Chữ T',
      'Song song',
      'Vuông góc'
    ], 0, 'Hai gót sát nhau, mũi chân mở ra thành chữ V.'),
    Q('Mắt nhìn về đâu khi đứng nghiêm?', [
      'Nhìn xuống đất',
      'Nhìn lên trời',
      'Nhìn thẳng phía trước',
      'Nhắm lại'
    ], 2, 'Nhìn thẳng phía trước để giữ tư thế ngay ngắn.'),
    Q('Khẩu lệnh đứng nghiêm là dự lệnh hay động lệnh?', [
      'Dự lệnh',
      'Động lệnh',
      'Cả hai',
      'Không phải khẩu lệnh'
    ], 1, '"Nghiêm!" là động lệnh — hô xong là thực hiện ngay.'),
    Q('Tư thế đứng nghiêm giúp ích gì?', [
      'Giúp giữ trật tự, ngay ngắn khi tập trung',
      'Giúp chạy nhanh',
      'Giúp ăn no',
      'Không có ích gì'
    ], 0, 'Đứng nghiêm rèn nề nếp, kỷ luật và tư thế đẹp.'),
  ]),

  M(2, 'Tập hợp hàng dọc, dóng hàng', [
    Q('Khẩu lệnh tập hợp hàng dọc là?', [
      '"Thành 1 hàng dọc — Tập hợp!"',
      '"Thành 1 hàng ngang — Tập hợp!"',
      '"Giải tán!"',
      '"Nghỉ!"'
    ], 0, 'Khẩu lệnh quy chuẩn cho hàng dọc.'),
    Q('Khi tập hợp hàng dọc, bạn tổ trưởng đứng ở đâu?', [
      'Đứng đầu hàng',
      'Đứng cuối hàng',
      'Đứng giữa hàng',
      'Đứng ngoài hàng'
    ], 0, 'Tổ trưởng làm chuẩn, đứng đầu hàng.'),
    Q('"Dóng hàng" nghĩa là gì?', [
      'Chỉnh hàng cho thẳng, đều khoảng cách',
      'Chạy quanh sân',
      'Ngồi xuống nghỉ',
      'Vỗ tay'
    ], 0, 'Dóng hàng = chỉnh thẳng và đều giữa các bạn.'),
    Q('Khi dóng hàng dọc, em nhìn theo ai để giữ thẳng?', [
      'Nhìn gáy bạn phía trước',
      'Nhìn bạn bên trái',
      'Nhìn lên trời',
      'Nhìn xuống đất'
    ], 0, 'Hàng dọc: nhìn gáy bạn phía trước để thẳng hàng.'),
    Q('Khoảng cách giữa hai bạn trong hàng dọc thường là?', [
      'Một cánh tay đưa thẳng',
      'Sát vào nhau',
      'Cách 5 mét',
      'Tùy thích'
    ], 0, 'Một cánh tay thẳng để đủ khoảng cách an toàn.'),
    Q('Hành động nào KHÔNG đúng khi đang tập hợp?', [
      'Đùa nghịch, xô đẩy bạn',
      'Đứng nhanh vào vị trí',
      'Im lặng nghe khẩu lệnh',
      'Giữ tư thế nghiêm'
    ], 0, 'Đùa nghịch dễ ngã, mất trật tự — không được phép.'),
  ]),

  M(3, 'Tập hợp hàng ngang, dóng hàng', [
    Q('Khẩu lệnh tập hợp hàng ngang là?', [
      '"Thành 1 hàng ngang — Tập hợp!"',
      '"Thành 1 hàng dọc — Tập hợp!"',
      '"Chạy đều!"',
      '"Đứng nghỉ!"'
    ], 0, 'Khẩu lệnh chuẩn cho hàng ngang.'),
    Q('Khi dóng hàng ngang, em quay đầu sang phía nào?', [
      'Sang phải, nhìn vai bạn bên phải',
      'Quay lưng',
      'Nhìn lên',
      'Nhìn xuống'
    ], 0, 'Hàng ngang: quay nhẹ sang phải nhìn vai bạn để dóng thẳng.'),
    Q('Trong hàng ngang, bạn cao đứng ở đâu?', [
      'Đứng đầu bên phải hàng',
      'Đứng giữa',
      'Đứng cuối bên trái',
      'Đứng ngoài hàng'
    ], 0, 'Bạn cao nhất đứng đầu (bên phải) làm chuẩn.'),
    Q('Khoảng cách giữa hai bạn trong hàng ngang là?', [
      'Một khuỷu tay chống hông',
      'Sát người',
      'Cách 3 mét',
      'Tùy ý'
    ], 0, 'Chống hông một khuỷu tay để đều khoảng cách.'),
    Q('Khẩu lệnh "Thôi!" trong dóng hàng có nghĩa là?', [
      'Dừng động tác dóng, đứng nghiêm',
      'Tan hàng',
      'Bắt đầu chạy',
      'Ngồi xuống'
    ], 0, '"Thôi!" — kết thúc dóng, trở về tư thế nghiêm.'),
    Q('Hàng ngang thường dùng để làm gì?', [
      'Tập bài thể dục phát triển chung',
      'Chạy đua',
      'Ngủ trưa',
      'Ăn cơm'
    ], 0, 'Hàng ngang giúp cô giáo quan sát cả lớp khi tập bài TD.'),
  ]),

  M(4, 'Bài TD PTC — Động tác vươn thở', [
    Q('Động tác vươn thở tập đầu tiên trong bài TD vì sao?', [
      'Để hít thở sâu, làm nóng cơ thể',
      'Vì khó nhất',
      'Vì vui nhất',
      'Vì ngắn nhất'
    ], 0, 'Vươn thở giúp khởi động hô hấp, đưa nhịp thở vào tập.'),
    Q('Khi hít vào trong động tác vươn thở, em đưa tay thế nào?', [
      'Đưa hai tay lên cao, ngẩng đầu',
      'Hạ tay xuống thấp',
      'Khoanh tay',
      'Vung tay sang ngang'
    ], 0, 'Đưa tay lên cao mở lồng ngực để hít vào sâu.'),
    Q('Khi thở ra, em làm gì?', [
      'Hạ tay xuống và thở ra bằng miệng',
      'Nín thở',
      'Hét lên',
      'Nhảy lên'
    ], 0, 'Hạ tay nhẹ nhàng, thở ra từ từ.'),
    Q('Hít thở sâu giúp cơ thể như thế nào?', [
      'Đưa nhiều ô-xi vào phổi, khoẻ hơn',
      'No bụng',
      'Buồn ngủ',
      'Đau đầu'
    ], 0, 'Hít sâu cung cấp ô-xi cho máu và cơ bắp.'),
    Q('Nhịp đếm của bài TD lớp 2 thường là?', [
      '2 × 8 nhịp',
      '1 × 5 nhịp',
      '10 × 10 nhịp',
      'Không đếm'
    ], 0, 'Mỗi động tác lớp 2 thường tập 2 lần × 8 nhịp.'),
  ]),

  M(5, 'Động tác tay', [
    Q('Khi tập động tác tay, em thường đưa tay theo hướng nào?', [
      'Lên cao, sang ngang, ra trước',
      'Chỉ đưa xuống đất',
      'Chỉ khoanh tay',
      'Chỉ nắm chặt'
    ], 0, 'Tay vận động qua nhiều hướng để giãn cơ.'),
    Q('Bàn tay khi tập tay thường ở trạng thái?', [
      'Mở rộng, các ngón duỗi thẳng',
      'Nắm chặt như đấm',
      'Cong queo',
      'Tuỳ thích'
    ], 0, 'Bàn tay mở, các ngón duỗi để tư thế đẹp.'),
    Q('Động tác tay giúp phát triển nhóm cơ nào?', [
      'Cơ vai, cơ tay',
      'Cơ chân',
      'Cơ bụng',
      'Cơ mặt'
    ], 0, 'Chủ yếu rèn cơ vai và cơ tay.'),
    Q('Khi đưa tay sang ngang, em chú ý điều gì?', [
      'Hai tay ngang vai, lòng bàn tay úp',
      'Tay cao hơn đầu',
      'Tay chạm đất',
      'Bắt chéo trước ngực'
    ], 0, 'Đưa ngang đúng tầm vai để đẹp và an toàn.'),
    Q('Tập tay đúng kỹ thuật KHÔNG nên?', [
      'Đưa tay giật mạnh, không kiểm soát',
      'Đưa nhẹ nhàng, đúng nhịp',
      'Mắt nhìn thẳng',
      'Hít thở đều'
    ], 0, 'Giật mạnh dễ trật khớp vai.'),
    Q('Tư thế chuẩn bị động tác tay là?', [
      'Đứng nghiêm, hai tay xuôi',
      'Ngồi xếp bằng',
      'Quỳ gối',
      'Nằm sấp'
    ], 0, 'Bắt đầu từ tư thế đứng nghiêm.'),
  ]),

  M(6, 'Động tác chân', [
    Q('Động tác chân thường có nhịp khuỵu gối, vì sao?', [
      'Rèn cơ đùi, cơ chân',
      'Để nghỉ ngơi',
      'Để ngồi xuống',
      'Để chạy nhanh'
    ], 0, 'Khuỵu gối tăng sức cho cơ đùi.'),
    Q('Khi khuỵu gối, lưng em nên thế nào?', [
      'Giữ thẳng, không cúi gập',
      'Cúi gập sâu',
      'Cong về sau',
      'Vặn sang ngang'
    ], 0, 'Lưng thẳng để bảo vệ cột sống.'),
    Q('Hai bàn chân khi khuỵu gối nên?', [
      'Cả bàn chân chạm đất',
      'Kiễng mũi',
      'Nhấc cả hai chân',
      'Đứng một chân'
    ], 0, 'Bàn chân chạm đất giữ thăng bằng.'),
    Q('Đầu gối khi khuỵu KHÔNG nên?', [
      'Vượt quá mũi bàn chân',
      'Hướng cùng mũi chân',
      'Hơi chùng',
      'Mở rộng vừa phải'
    ], 0, 'Gối vượt mũi chân dễ đau khớp.'),
    Q('Tập động tác chân tốt giúp em?', [
      'Chạy, nhảy khoẻ hơn',
      'Viết chữ đẹp',
      'Hát hay',
      'Vẽ giỏi'
    ], 0, 'Cơ chân khoẻ là nền tảng vận động.'),
    Q('Trước khi tập chân, nên?', [
      'Khởi động xoay cổ chân, đầu gối',
      'Ăn no',
      'Uống thật nhiều nước',
      'Ngồi yên 10 phút'
    ], 0, 'Khởi động khớp giúp tránh chấn thương.'),
  ]),

  M(7, 'Động tác lườn', [
    Q('Động tác lườn tập phần nào của cơ thể?', [
      'Hai bên sườn (lườn)',
      'Bàn chân',
      'Cổ tay',
      'Đầu gối'
    ], 0, 'Lườn = hai bên sườn, từ nách xuống hông.'),
    Q('Khi nghiêng người sang trái, tay phải làm gì?', [
      'Đưa lên cao theo người, kéo căng sườn phải',
      'Buông thõng',
      'Chống hông',
      'Vỗ tay'
    ], 0, 'Tay phía đối diện đưa lên cao tạo lực kéo.'),
    Q('Nghiêng lườn đúng KHÔNG được?', [
      'Cúi gập về trước hoặc ngả ra sau',
      'Nghiêng đúng sang phải/trái',
      'Hít thở đều',
      'Giữ chân trụ vững'
    ], 0, 'Nghiêng lườn phải đúng sang bên — không cúi hay ngả.'),
    Q('Hai chân khi tập lườn nên?', [
      'Đứng vững, rộng bằng vai',
      'Nhón cả hai chân',
      'Bắt chéo nhau',
      'Co một chân'
    ], 0, 'Chân rộng bằng vai để vững thăng bằng.'),
    Q('Lợi ích của động tác lườn?', [
      'Mềm dẻo cơ thân, eo gọn',
      'To chân',
      'Cao thêm 10 cm',
      'Hết đói'
    ], 0, 'Giúp cơ thân và eo dẻo dai.'),
  ]),

  M(8, 'Động tác bụng', [
    Q('Động tác bụng thường có nhịp gì?', [
      'Cúi gập người về trước, tay chạm mũi chân',
      'Nhảy lên cao',
      'Ngồi xổm',
      'Vỗ tay'
    ], 0, 'Cúi gập người là nhịp chính của động tác bụng.'),
    Q('Khi cúi gập, đầu gối em nên?', [
      'Giữ thẳng (không khoá quá cứng)',
      'Khuỵu sâu',
      'Bắt chéo',
      'Co lên'
    ], 0, 'Đầu gối thẳng giúp kéo căng cơ lưng-sau đùi.'),
    Q('Nếu chưa chạm được mũi chân, em nên?', [
      'Cố hết sức, đến mức có thể',
      'Bỏ tập',
      'Khóc',
      'Đè lưng bạn'
    ], 0, 'Tập đến mức có thể, dần sẽ dẻo hơn.'),
    Q('Khi cúi gập, em thở thế nào?', [
      'Thở ra khi cúi xuống, hít vào khi đứng lên',
      'Nín thở',
      'La hét',
      'Há to miệng'
    ], 0, 'Phối hợp thở đúng giúp động tác mượt mà.'),
    Q('Động tác bụng giúp phần nào khoẻ hơn?', [
      'Cơ bụng và cơ lưng',
      'Cơ mắt',
      'Cơ má',
      'Cơ tai'
    ], 0, 'Tăng sức cho cơ thân giữa.'),
    Q('Trước khi tập bụng KHÔNG nên?', [
      'Ăn quá no',
      'Khởi động nhẹ',
      'Uống ngụm nước nhỏ',
      'Đứng nghiêm'
    ], 0, 'No bụng tập sẽ khó chịu, dễ buồn nôn.'),
  ]),

  M(9, 'Động tác toàn thân (phối hợp 5 động tác)', [
    Q('Bài TD PTC lớp 2 cơ bản gồm bao nhiêu động tác chính?', [
      '5 động tác',
      '2 động tác',
      '10 động tác',
      '20 động tác'
    ], 0, 'Vươn thở, tay, chân, lườn, bụng (toàn thân) là cấu trúc chuẩn.'),
    Q('Thứ tự đúng khi tập bài thể dục là?', [
      'Vươn thở → Tay → Chân → Lườn → Bụng',
      'Bụng → Tay → Chân → Vươn thở → Lườn',
      'Tay → Bụng → Vươn thở → Lườn → Chân',
      'Tuỳ thích'
    ], 0, 'Thứ tự từ khởi động (vươn thở) đến nhóm cơ lớn.'),
    Q('Phối hợp toàn thân yêu cầu điều gì?', [
      'Đúng nhịp, đúng tư thế, đồng đều cả lớp',
      'Càng nhanh càng tốt',
      'Tự sáng tạo nhịp',
      'Im lặng tuyệt đối'
    ], 0, 'Đồng đều, đúng nhịp là quan trọng nhất.'),
    Q('Khi cô giáo đếm "1-2-3-4", em đáp lại nhịp nào?', [
      'Tập đúng theo từng nhịp đếm',
      'Đếm to thay cô',
      'Im lặng và không tập',
      'Đứng nhìn'
    ], 0, 'Thực hiện đúng nhịp cô đếm.'),
    Q('Nếu em quên động tác, em nên?', [
      'Nhìn theo bạn bên cạnh và làm theo',
      'Đứng yên giữa hàng',
      'Bỏ ra ngoài',
      'Khóc'
    ], 0, 'Quan sát bạn để theo nhịp lớp.'),
    Q('Tập bài TD đều đặn mỗi ngày giúp?', [
      'Khoẻ mạnh, dẻo dai, học tốt hơn',
      'Buồn ngủ',
      'Hay quên',
      'Lười học'
    ], 0, 'Vận động đều giúp cơ thể và trí óc đều phát triển.'),
  ]),

  M(10, 'Đi đều theo nhịp', [
    Q('Đi đều khác đi thường ở điểm nào?', [
      'Có nhịp đếm, đánh tay đều, đặt chân theo nhịp',
      'Đi rất nhanh',
      'Đi rất chậm',
      'Đi giật lùi'
    ], 0, 'Đi đều có nhịp, có đánh tay phối hợp.'),
    Q('Khi đi đều, chân trái và tay nào đi cùng nhịp?', [
      'Chân trái — tay phải',
      'Chân trái — tay trái',
      'Cả hai tay cùng đưa',
      'Không đánh tay'
    ], 0, 'Chân và tay đối diện cùng đưa lên (giao nhau).'),
    Q('Khẩu lệnh "Đi đều — bước!" thì bước chân nào trước?', [
      'Chân trái',
      'Chân phải',
      'Cả hai chân',
      'Tuỳ ý'
    ], 0, 'Quy ước đi đều luôn bước chân trái trước.'),
    Q('Mắt nhìn về đâu khi đi đều?', [
      'Nhìn thẳng phía trước',
      'Cúi nhìn chân',
      'Ngẩng nhìn trời',
      'Liếc sang ngang'
    ], 0, 'Nhìn thẳng giữ tư thế và hướng.'),
    Q('Khẩu lệnh dừng khi đang đi đều là?', [
      '"Đứng lại — đứng!"',
      '"Chạy nhanh!"',
      '"Ngồi xuống!"',
      '"Giải tán!"'
    ], 0, 'Đứng lại — đứng là khẩu lệnh chuẩn.'),
    Q('Đi đều thường dùng trong dịp nào?', [
      'Lễ chào cờ, diễu hành',
      'Ăn cơm',
      'Ngủ trưa',
      'Học Toán'
    ], 0, 'Dùng trong nghi lễ, đội hình tập trung.'),
  ]),

  M(11, 'Đi và chạy nhẹ nhàng', [
    Q('Chạy nhẹ nhàng nghĩa là?', [
      'Tiếp đất bằng nửa trước bàn chân, người thả lỏng',
      'Đập gót thật mạnh',
      'Vừa chạy vừa la',
      'Chạy thật nhanh hết sức'
    ], 0, 'Tiếp đất nửa trước bàn chân — êm và đỡ chấn động.'),
    Q('Khi chạy nhẹ nhàng, tay em làm gì?', [
      'Co khuỷu, đánh tay tự nhiên trước-sau',
      'Khoanh trước ngực',
      'Vung sang hai bên',
      'Để thõng cứng đờ'
    ], 0, 'Đánh tay trước-sau giúp giữ thăng bằng.'),
    Q('Mục đích của bài đi-chạy nhẹ nhàng?', [
      'Khởi động và tăng sức bền',
      'Học hát',
      'Làm bài tập',
      'Học vẽ'
    ], 0, 'Đây là bài rèn sức bền và khởi động.'),
    Q('Nếu mệt khi chạy, em nên?', [
      'Chuyển sang đi bộ, hít thở sâu',
      'Ngồi sụp xuống ngay',
      'Cố chạy nhanh hơn',
      'Nín thở'
    ], 0, 'Hạ tốc độ rồi mới dừng để cơ thể thích nghi.'),
    Q('Hơi thở khi chạy nhẹ nên?', [
      'Nhịp nhàng, hít mũi-thở miệng',
      'Nín thở',
      'Thở dốc thật to',
      'Há miệng cười'
    ], 0, 'Hít mũi, thở miệng đều giúp đỡ mệt.'),
  ]),

  M(12, 'Chạy nhanh cự ly 15–20 m', [
    Q('Tư thế xuất phát chạy nhanh ở lớp 2 là?', [
      'Xuất phát cao (đứng, chân trước-sau)',
      'Nằm sấp',
      'Ngồi xổm',
      'Ngồi xếp bằng'
    ], 0, 'Lớp 2 dùng xuất phát cao đơn giản.'),
    Q('Khi chạy nhanh, em chạy thế nào?', [
      'Hết sức về đích, mắt nhìn đích',
      'Nhìn xuống chân',
      'Liếc sang bạn bên cạnh',
      'Đi bộ chậm rãi'
    ], 0, 'Tập trung nhìn đích, dồn sức.'),
    Q('Khi qua vạch đích, em nên?', [
      'Tiếp tục chạy chậm dần rồi dừng',
      'Dừng phắt tại vạch',
      'Ngồi bệt xuống ngay',
      'Quay đầu chạy ngược'
    ], 0, 'Chạy chậm dần để tránh ngã và chấn thương.'),
    Q('Trước khi chạy nhanh, em PHẢI?', [
      'Khởi động kỹ',
      'Ăn thật no',
      'Uống nước đá',
      'Cởi giày'
    ], 0, 'Khởi động giúp tránh đau cơ, chuột rút.'),
    Q('Cự ly chạy nhanh lớp 2 thường là?', [
      '15–20 mét',
      '1 ki-lô-mét',
      '100 mét',
      '500 mét'
    ], 0, 'Phù hợp sức học sinh lớp 2.'),
    Q('Trên đường chạy KHÔNG nên?', [
      'Cắt ngang, va vào bạn bên cạnh',
      'Chạy đúng làn của mình',
      'Hô cổ vũ bạn',
      'Tập trung về phía đích'
    ], 0, 'Cắt ngang gây tai nạn.'),
  ]),

  M(13, 'Bật xa tại chỗ', [
    Q('Bật xa tại chỗ dùng lực bật của?', [
      'Cả hai chân',
      'Chỉ một chân trái',
      'Chỉ một chân phải',
      'Lực của tay'
    ], 0, 'Bật xa tại chỗ là bật hai chân.'),
    Q('Trước khi bật, em làm gì?', [
      'Khuỵu gối, đánh tay ra sau lấy đà',
      'Đứng nghiêm bất động',
      'Quỳ xuống',
      'Nằm sấp'
    ], 0, 'Khuỵu gối + đánh tay để lấy đà.'),
    Q('Khi tiếp đất sau khi bật, em?', [
      'Tiếp bằng nửa trước bàn chân rồi cả bàn, khuỵu gối nhẹ để giảm chấn',
      'Đập gót thật mạnh',
      'Ngã ngửa ra sau',
      'Chống tay xuống đất'
    ], 0, 'Tiếp đất đúng giúp tránh chấn thương.'),
    Q('Khi tiếp đất, gối nên?', [
      'Hơi khuỵu để giảm chấn động',
      'Duỗi thẳng cứng',
      'Bắt chéo nhau',
      'Co cao lên'
    ], 0, 'Khuỵu gối hấp thụ lực.'),
    Q('Nơi tập bật xa an toàn là?', [
      'Sân mềm/đệm/cát, bằng phẳng',
      'Sàn bê-tông trơn',
      'Bờ ao',
      'Mặt đường có xe'
    ], 0, 'Mặt mềm và bằng giúp an toàn.'),
    Q('Lợi ích của bật xa?', [
      'Tăng sức bật và sức mạnh chân',
      'Tăng chiều dài tóc',
      'Tăng cân',
      'Tăng trí nhớ tức thì'
    ], 0, 'Phát triển sức mạnh chi dưới.'),
  ]),

  M(14, 'Trò chơi: Mèo đuổi chuột', [
    Q('Trong trò "Mèo đuổi chuột", các bạn còn lại đứng làm gì?', [
      'Nắm tay nhau thành vòng tròn, giơ cao tạo "hang"',
      'Ngồi xuống',
      'Chạy theo mèo',
      'Đứng nghiêm'
    ], 0, 'Vòng tròn tạo "hang" để chuột chui qua.'),
    Q('"Mèo" làm gì?', [
      'Đuổi bắt "chuột"',
      'Đứng yên',
      'Chui hang',
      'Ngồi xem'
    ], 0, 'Mèo là người đuổi.'),
    Q('"Chuột" thắng khi nào?', [
      'Chạy về vị trí xuất phát mà không bị mèo bắt',
      'Bị mèo bắt',
      'Khóc to',
      'Ngã xuống đất'
    ], 0, 'Về đích an toàn là thắng.'),
    Q('Khi chơi, em KHÔNG nên?', [
      'Xô đẩy, ngáng chân bạn',
      'Hát bài đồng dao của trò chơi',
      'Giữ vòng tròn đều',
      'Cười vui'
    ], 0, 'Xô đẩy dễ ngã, gây tai nạn.'),
    Q('Trò "Mèo đuổi chuột" rèn kỹ năng nào?', [
      'Phản xạ, nhanh nhẹn, khéo léo',
      'Học toán',
      'Tập viết',
      'Học vẽ'
    ], 0, 'Phát triển phản xạ và sức nhanh.'),
  ]),

  M(15, 'Trò chơi: Nhanh lên bạn ơi', [
    Q('Trò "Nhanh lên bạn ơi" thường chia thành mấy đội?', [
      'Hai đội thi đua',
      'Một đội',
      'Bốn đội',
      'Không chia đội'
    ], 0, 'Hai đội thi tiếp sức.'),
    Q('Cách chơi tiếp sức là?', [
      'Bạn trước chạy về đập tay bạn sau, bạn sau mới được xuất phát',
      'Cả đội chạy cùng lúc',
      'Một mình chạy cả lượt',
      'Ngồi đợi hết giờ'
    ], 0, 'Đập tay/chạm tay rồi bạn sau mới chạy.'),
    Q('Đội thắng là đội?', [
      'Hoàn thành lượt chạy của cả đội nhanh nhất, đúng luật',
      'Hét to nhất',
      'Đông người nhất',
      'Mặc áo đẹp nhất'
    ], 0, 'Nhanh và đúng luật mới thắng.'),
    Q('Khi cổ vũ bạn, em nên?', [
      'Hô "Nhanh lên bạn ơi!" với tinh thần tích cực',
      'Chê bai bạn chậm',
      'Ném đồ vào sân',
      'Cãi nhau với đội kia'
    ], 0, 'Cổ vũ tích cực, không chê bai.'),
    Q('Trò chơi này rèn?', [
      'Sức nhanh và tinh thần đồng đội',
      'Khả năng viết',
      'Khả năng vẽ',
      'Khả năng hát'
    ], 0, 'Nhanh + đồng đội.'),
  ]),

  M(16, 'Trò chơi: Chim về tổ', [
    Q('Trong trò "Chim về tổ", "tổ" là?', [
      'Vòng tròn nhỏ được vẽ trên sân',
      'Cái cây',
      'Mái nhà',
      'Bàn ghế'
    ], 0, 'Tổ là các vòng tròn vẽ trên sân.'),
    Q('Số "tổ" thường ít hơn số "chim" mấy?', [
      'Ít hơn 1 (để 1 bạn không có tổ)',
      'Bằng số chim',
      'Gấp đôi số chim',
      'Không có tổ nào'
    ], 0, 'Ít hơn 1 — tạo bạn bị "loại" mỗi lượt.'),
    Q('Khẩu lệnh "Chim về tổ!" thì em làm gì?', [
      'Chạy thật nhanh vào một tổ trống',
      'Đứng yên',
      'Hét lên',
      'Ngồi xuống'
    ], 0, 'Phải nhanh chân vào tổ.'),
    Q('Bạn không tìm được tổ sẽ?', [
      'Bị "loại" tạm, ra ngoài chờ lượt sau',
      'Được thưởng quà',
      'Khóc cho đến hết giờ',
      'Bị phạt thật nặng'
    ], 0, 'Tạm dừng chơi, không bị phạt.'),
    Q('Khi tranh tổ, em PHẢI?', [
      'Không xô đẩy bạn ngã',
      'Đẩy bạn ra khỏi tổ',
      'Cấu véo bạn',
      'Đá tổ'
    ], 0, 'Chơi văn minh, không gây nguy hiểm.'),
    Q('Trò "Chim về tổ" rèn?', [
      'Phản xạ và nhanh nhẹn',
      'Đọc thơ',
      'Vẽ tranh',
      'Học toán'
    ], 0, 'Phát triển phản xạ.'),
  ]),

  M(17, 'Khởi động và hồi tĩnh', [
    Q('Vì sao phải khởi động trước khi tập?', [
      'Làm nóng cơ, tránh chấn thương',
      'Để mệt sớm',
      'Để hết đói',
      'Để dài chân'
    ], 0, 'Khởi động tăng nhiệt cơ, dẻo khớp.'),
    Q('Khởi động thường gồm?', [
      'Xoay khớp + chạy nhẹ + giãn cơ',
      'Ngồi ăn',
      'Ngủ',
      'Đứng nhìn'
    ], 0, 'Xoay khớp + chạy nhẹ + giãn cơ là chuẩn.'),
    Q('Hồi tĩnh sau khi tập là?', [
      'Đi chậm, hít thở sâu, thả lỏng cơ',
      'Chạy thật nhanh thêm 1 vòng',
      'Ngồi sụp xuống ngay',
      'Uống thật nhiều nước lạnh một lúc'
    ], 0, 'Hồi tĩnh giảm dần nhịp tim.'),
    Q('Sau khi tập xong rất nóng, em uống nước thế nào?', [
      'Uống từng ngụm nhỏ, nước mát vừa',
      'Tu thật nhanh nước đá',
      'Không uống cả ngày',
      'Uống nước có ga thật nhiều'
    ], 0, 'Uống chậm để cơ thể hấp thụ.'),
    Q('Bỏ qua khởi động có thể gây?', [
      'Chuột rút, đau cơ, trật khớp',
      'Cao thêm',
      'Học giỏi hơn',
      'No bụng'
    ], 0, 'Không khởi động dễ chấn thương.'),
    Q('Sau giờ học GDTC, em nên?', [
      'Lau mồ hôi, thay áo ướt nếu có',
      'Nằm xuống sàn lạnh',
      'Cởi áo ra giữa sân',
      'Đứng dưới quạt mạnh khi đang đẫm mồ hôi'
    ], 0, 'Lau khô và thay áo tránh cảm.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khẩu lệnh tập hợp hàng dọc đúng là?', [
      '"Thành 1 hàng dọc — Tập hợp!"',
      '"Hàng dọc!"',
      '"Đứng dậy!"',
      '"Tan!"'
    ], 0, 'Khẩu lệnh chuẩn.'),
    Q('Bài TD PTC lớp 2 có những động tác chính?', [
      'Vươn thở, tay, chân, lườn, bụng (toàn thân)',
      'Múa, hát, vẽ, đọc, viết',
      'Chỉ động tác tay',
      'Chỉ động tác chân'
    ], 0, '5 nhóm động tác cơ bản.'),
    Q('Khi đi đều, chân trái cùng nhịp với tay?', [
      'Tay phải',
      'Tay trái',
      'Cả hai tay',
      'Không tay nào'
    ], 0, 'Tay-chân chéo nhau.'),
    Q('Trước khi chạy nhanh PHẢI?', [
      'Khởi động',
      'Ăn no',
      'Cởi giày',
      'Uống đá'
    ], 0, 'Khởi động kỹ.'),
    Q('Khi tiếp đất sau bật xa, em?', [
      'Khuỵu gối nhẹ, tiếp nửa trước bàn chân',
      'Đập gót mạnh',
      'Ngã ngửa',
      'Chống tay'
    ], 0, 'Kỹ thuật tiếp đất an toàn.'),
    Q('Trong trò "Mèo đuổi chuột", các bạn còn lại?', [
      'Nắm tay tạo vòng tròn làm hang',
      'Đuổi cùng mèo',
      'Ngồi xem',
      'Chạy lung tung'
    ], 0, 'Tạo hang cho chuột chui.'),
    Q('Hồi tĩnh sau tập là?', [
      'Đi chậm, thở sâu, thả lỏng',
      'Chạy thêm',
      'Ngồi sụp ngay',
      'Uống đá lạnh'
    ], 0, 'Giảm dần nhịp tim.'),
    Q('Khi đứng nghiêm, hai bàn chân tạo hình?', [
      'Chữ V',
      'Chữ T',
      'Song song',
      'Chéo nhau'
    ], 0, 'Mũi chân mở thành chữ V.'),
    Q('Nếu mệt khi chạy bền, em nên?', [
      'Đi bộ, hít sâu, không dừng đột ngột',
      'Ngồi sụp xuống',
      'Cố chạy nhanh hơn',
      'Nín thở'
    ], 0, 'Giảm tốc từ từ.'),
    Q('Hành vi nào KHÔNG đúng trong giờ GDTC?', [
      'Xô đẩy, đùa nghịch khi tập',
      'Nghe khẩu lệnh nghiêm túc',
      'Khởi động đầy đủ',
      'Mặc trang phục thể thao'
    ], 0, 'Xô đẩy gây tai nạn.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Nhảy dây cá nhân (chuẩn bị)', [
    Q('Dây nhảy phù hợp khi đứng giữa dây, hai tay cầm hai đầu thì?', [
      'Hai tay ngang nách (vừa người)',
      'Quá ngắn chỉ đến gối',
      'Quá dài kéo lê đất',
      'Tuỳ ý'
    ], 0, 'Dây vừa: tay cầm đến ngang nách khi đứng giữa dây.'),
    Q('Tư thế chuẩn bị nhảy dây là?', [
      'Hai chân chụm hoặc chếch nhẹ, tay cầm cán dây, dây sau gót',
      'Nằm sấp',
      'Ngồi xổm',
      'Quỳ xuống'
    ], 0, 'Bắt đầu từ tư thế đứng, dây sau gót.'),
    Q('Khi quay dây, em dùng phần nào của tay là chính?', [
      'Cổ tay',
      'Cả cánh tay vung mạnh',
      'Vai vung tròn',
      'Hai ngón tay cái'
    ], 0, 'Cổ tay quay nhỏ giúp nhịp đều và đỡ mỏi.'),
    Q('Vì sao chọn nơi tập thoáng để nhảy dây?', [
      'Tránh va vào người và đồ vật xung quanh',
      'Để mọi người nhìn',
      'Cho mát',
      'Cho có gió'
    ], 0, 'An toàn cho mình và cho bạn.'),
    Q('Giày nhảy dây nên là?', [
      'Giày thể thao có đế êm, vừa chân',
      'Dép xỏ ngón',
      'Đi chân đất trên bê-tông',
      'Giày cao gót'
    ], 0, 'Đế êm giảm chấn động.'),
  ]),

  M(20, 'Nhảy dây — bật chụm hai chân', [
    Q('Khi nhảy chụm hai chân, em bật bằng?', [
      'Cả hai chân, dùng nửa trước bàn chân',
      'Một chân',
      'Cả bàn chân nện mạnh',
      'Đầu gối'
    ], 0, 'Bật bằng nửa trước bàn chân giúp êm.'),
    Q('Nhịp nhảy chụm là?', [
      'Dây qua chân thì bật, đều đặn',
      'Bật trước, dây quay sau',
      'Vứt dây ra rồi nhảy',
      'Đứng yên, dây tự quay'
    ], 0, 'Phối hợp nhịp quay dây và bật.'),
    Q('Khi tiếp đất, gối em nên?', [
      'Hơi khuỵu để giảm chấn',
      'Cứng đờ',
      'Bắt chéo',
      'Co cao'
    ], 0, 'Khuỵu nhẹ để êm.'),
    Q('Nếu vướng dây, em nên?', [
      'Dừng lại, sửa dây rồi tập lại',
      'Cố nhảy bừa',
      'Quăng dây sang bạn',
      'Khóc'
    ], 0, 'Vướng thì dừng, sửa và tiếp tục.'),
    Q('Nhảy dây giúp em phát triển?', [
      'Sức bật, sức bền, phối hợp tay-chân',
      'Khả năng vẽ',
      'Khả năng viết',
      'Khả năng đọc'
    ], 0, 'Phát triển toàn diện vận động.'),
    Q('Khi tập theo nhóm, khoảng cách giữa các bạn?', [
      'Đủ rộng để dây không quật vào người khác',
      'Sát nhau',
      'Đứng trong vòng tròn nhỏ',
      'Không quan trọng'
    ], 0, 'Giữ khoảng cách an toàn.'),
  ]),

  M(21, 'Tâng cầu — chuẩn bị, cầm cầu đúng', [
    Q('Quả cầu đá chân (cầu lông gà) gồm phần nào?', [
      'Đế cầu (cao su/nhựa) và túm lông',
      'Chỉ có nhựa',
      'Chỉ có lông',
      'Bằng giấy'
    ], 0, 'Cấu tạo: đế nặng + túm lông để bay ổn định.'),
    Q('Khi chuẩn bị tâng, em cầm cầu ở phần nào?', [
      'Cầm phần lông, đế hướng xuống',
      'Cầm phần đế, lông hướng xuống',
      'Bóp dập cầu',
      'Cầm bằng miệng'
    ], 0, 'Cầm phần lông để cầu rơi đế xuống — đá đúng.'),
    Q('Tư thế đứng chuẩn bị tâng cầu?', [
      'Đứng chân trước-chân sau, hơi khuỵu, trọng tâm thấp',
      'Đứng thẳng hai chân chụm',
      'Ngồi xổm',
      'Quỳ một chân'
    ], 0, 'Thế chân trước-sau giữ thăng bằng tốt.'),
    Q('Trước khi tâng, em thả cầu hay tung cầu?', [
      'Thả nhẹ cầu rơi xuống trước mu bàn chân',
      'Ném cầu thật mạnh xuống đất',
      'Ném lên trời',
      'Đặt cầu xuống đất'
    ], 0, 'Thả nhẹ để dễ đón.'),
    Q('Mắt em nhìn đâu khi tâng?', [
      'Nhìn theo cầu',
      'Nhìn ra xa',
      'Nhắm lại',
      'Nhìn xuống chân'
    ], 0, 'Theo dõi cầu để đón đúng nhịp.'),
  ]),

  M(22, 'Tết — Trò chơi dân gian ngày Tết', [
    Q('Trò chơi dân gian nào thường có ở ngày Tết?', [
      'Kéo co, đẩy gậy, nhảy bao bố, ô ăn quan',
      'Đá bóng chuyên nghiệp',
      'Đua xe máy',
      'Chơi điện tử'
    ], 0, 'Đây là các trò dân gian phổ biến.'),
    Q('Trò "Kéo co" cần dụng cụ gì?', [
      'Một sợi dây thừng chắc, có dấu giữa',
      'Quả bóng',
      'Cây gậy ngắn',
      'Chiếc dù'
    ], 0, 'Dây thừng có vạch giữa để xác định thắng-thua.'),
    Q('Trong "Đẩy gậy", hai người làm gì?', [
      'Cùng cầm hai đầu một cây gậy, đẩy đối phương ra khỏi vòng',
      'Đánh gậy vào người nhau',
      'Ném gậy lên trời',
      'Đốt gậy'
    ], 0, 'Đẩy gậy là môn dân tộc — đẩy ra khỏi vòng quy định.'),
    Q('Ý nghĩa của trò chơi dân gian ngày Tết?', [
      'Giữ gìn bản sắc văn hoá, gắn kết cộng đồng',
      'Khoe của',
      'Chỉ để giết thời gian',
      'Cãi nhau cho vui'
    ], 0, 'Văn hoá truyền thống và đoàn kết.'),
    Q('Khi chơi trò dân gian, em cần?', [
      'Tôn trọng luật chơi, an toàn, không tranh cãi',
      'Ăn gian',
      'Cãi nhau với bạn',
      'Bỏ về giữa chừng'
    ], 0, 'Chơi văn minh, an toàn.'),
    Q('Ngày Tết, ăn nhiều bánh kẹo mà ít vận động sẽ?', [
      'Dễ tăng cân, mệt mỏi',
      'Khoẻ hơn',
      'Cao thêm',
      'Học giỏi hơn'
    ], 0, 'Cần vận động cân bằng dinh dưỡng.'),
  ]),

  M(23, 'Tâng cầu bằng đùi/bàn chân', [
    Q('Tâng cầu bằng đùi, em chạm cầu ở vị trí nào của đùi?', [
      'Mặt trên đùi, gần giữa',
      'Đầu gối',
      'Mặt sau đùi',
      'Cổ chân'
    ], 0, 'Mặt trên giữa đùi cho cầu bay thẳng.'),
    Q('Khi tâng bằng đùi, đùi nâng cao thế nào?', [
      'Nâng vừa phải, đùi gần song song mặt đất',
      'Nâng cao quá vai',
      'Hạ xuống dưới gối',
      'Bắt chéo'
    ], 0, 'Đùi ngang để mặt tiếp xúc phẳng.'),
    Q('Tâng cầu bằng mu bàn chân, mu là?', [
      'Mặt trên bàn chân',
      'Mặt dưới (lòng bàn chân)',
      'Gót chân',
      'Đầu ngón chân'
    ], 0, 'Mu = mặt trên bàn chân.'),
    Q('Khi tâng bằng mu, cổ chân em?', [
      'Khoá nhẹ, mu nằm ngang khi chạm cầu',
      'Buông lỏng hoàn toàn',
      'Bẻ vẹo',
      'Co quắp'
    ], 0, 'Khoá cổ chân để mặt tiếp xúc ổn định.'),
    Q('Lực tâng nên?', [
      'Vừa phải để cầu bay lên ngang hông',
      'Càng mạnh càng tốt',
      'Càng nhẹ càng tốt',
      'Không cần lực'
    ], 0, 'Cầu bay ngang hông tiện đón lượt sau.'),
    Q('Tâng cầu giúp phát triển?', [
      'Khéo léo, thăng bằng, phối hợp mắt-chân',
      'Trí nhớ chữ',
      'Khả năng đọc nhanh',
      'Khả năng vẽ'
    ], 0, 'Phối hợp và khéo léo.'),
  ]),

  M(24, 'Tâng cầu di chuyển', [
    Q('Khi tâng cầu di chuyển, em phối hợp?', [
      'Mắt nhìn cầu + chân bước nhỏ + tay giữ thăng bằng',
      'Nhắm mắt + chạy thẳng',
      'Chỉ dùng tay',
      'Đứng yên một chỗ'
    ], 0, 'Phải kết hợp nhiều bộ phận.'),
    Q('Bước chân khi di chuyển tâng cầu là?', [
      'Bước nhỏ, nhanh, linh hoạt',
      'Bước dài, chậm',
      'Nhảy chụm',
      'Bò'
    ], 0, 'Bước nhỏ để dễ điều chỉnh.'),
    Q('Khi cầu rơi xa, em nên?', [
      'Bước nhanh tới, nâng chân đón',
      'Đứng yên nhìn',
      'Quay đầu đi',
      'Ném dép theo'
    ], 0, 'Phải nhanh chân đón cầu.'),
    Q('Nếu bị mất thăng bằng, em?', [
      'Dừng lại, lấy lại tư thế, tâng tiếp',
      'Ngã ra sàn',
      'Khóc',
      'Đẩy bạn để giữ thăng bằng'
    ], 0, 'Dừng nhịp rồi tiếp tục.'),
    Q('Khi chơi nhóm, các bạn?', [
      'Đứng cách nhau đủ xa để không va vào nhau',
      'Đứng sát nhau',
      'Đứng đối diện sát mặt',
      'Đè lên người nhau'
    ], 0, 'Khoảng cách an toàn.'),
  ]),

  M(25, 'Ném bóng nhỏ — tư thế cơ bản', [
    Q('Bóng ném ở bài này là?', [
      'Bóng nhỏ (~ 150g), vừa tay',
      'Bóng đá tiêu chuẩn',
      'Bóng rổ',
      'Bóng chuyền'
    ], 0, 'Bóng nhỏ phù hợp lứa tuổi.'),
    Q('Tư thế chuẩn bị ném bóng nhỏ là?', [
      'Chân trước-chân sau, người hơi nghiêng phía tay ném',
      'Đứng chụm hai chân, người thẳng',
      'Ngồi xổm',
      'Quỳ một chân'
    ], 0, 'Chân trước-sau ổn định và tạo lực.'),
    Q('Tay cầm bóng nên?', [
      'Cầm chắc bằng các ngón, không siết quá chặt',
      'Cầm bằng đầu ngón cái',
      'Cầm bằng hai tay đan vào nhau',
      'Bóp dập bóng'
    ], 0, 'Cầm chắc nhưng thoải mái.'),
    Q('Khi ném, cánh tay đưa từ đâu đến đâu?', [
      'Từ sau ra trước, qua đầu',
      'Từ trước ra sau',
      'Vung ngang',
      'Đẩy thẳng từ bụng'
    ], 0, 'Vung qua đầu để có lực và đường bóng đẹp.'),
    Q('Hướng ném an toàn là?', [
      'Theo hiệu lệnh, đúng hướng đích, không hướng vào bạn',
      'Hướng vào lớp',
      'Hướng vào bạn đối diện',
      'Hướng vào cửa kính'
    ], 0, 'Tuân thủ hướng đã quy định.'),
  ]),

  M(26, 'Ném bóng xa', [
    Q('Để ném xa hơn, em cần?', [
      'Phối hợp lực chân + xoay thân + vung tay',
      'Chỉ vung tay',
      'Chỉ dùng cổ tay',
      'Nín thở mà ném'
    ], 0, 'Lực toàn thân — không chỉ tay.'),
    Q('Góc ném bóng để bay xa thường khoảng?', [
      'Chếch lên cao (~ 45°)',
      'Thẳng đứng lên trời',
      'Sát mặt đất',
      'Hướng xuống đất'
    ], 0, 'Khoảng 45° cho khoảng cách xa nhất.'),
    Q('Sau khi ném, chân sau theo lực sẽ?', [
      'Bước lên một bước theo đà',
      'Đứng yên cứng đờ',
      'Nhảy sang ngang',
      'Quay lại đi lùi'
    ], 0, 'Bước theo đà giữ thăng bằng.'),
    Q('Khi cô giáo nói "Thôi!", em?', [
      'Dừng ném ngay, đợi hiệu lệnh nhặt bóng',
      'Tiếp tục ném thêm',
      'Chạy ra nhặt ngay',
      'Ném thêm thật mạnh'
    ], 0, 'Tuân theo hiệu lệnh để tránh tai nạn.'),
    Q('Khi nhặt bóng, em đi theo hướng?', [
      'Theo lệnh cô, đi hàng ngang ra nhặt',
      'Chạy lung tung',
      'Cướp bóng của bạn',
      'Ném ngược lại ngay'
    ], 0, 'Đi có trật tự.'),
    Q('Lợi ích của bài ném bóng xa?', [
      'Tăng sức mạnh tay, vai, thân',
      'Học chữ nhanh',
      'Học hát hay',
      'Học vẽ'
    ], 0, 'Phát triển nhóm cơ trên.'),
  ]),

  M(27, 'Ném bóng trúng đích', [
    Q('Ném trúng đích chú trọng?', [
      'Sự chính xác — đường ngắm + lực vừa đủ',
      'Lực thật mạnh',
      'Ném thật cao',
      'Ném càng xa càng tốt'
    ], 0, 'Chính xác quan trọng hơn mạnh.'),
    Q('Đích ngắm thường là?', [
      'Vòng tròn vẽ trên tường hoặc thùng/giỏ',
      'Cửa sổ kính',
      'Mặt bạn',
      'Mái nhà'
    ], 0, 'Đích an toàn được quy định.'),
    Q('Trước khi ném, em nên?', [
      'Hít thở, nhắm thật kỹ rồi mới ném',
      'Ném ngay không nhắm',
      'Nhắm mắt',
      'Vừa chạy vừa ném loạn'
    ], 0, 'Tập trung và ngắm cẩn thận.'),
    Q('Nếu trượt đích, em nên?', [
      'Bình tĩnh điều chỉnh lực và hướng ở lượt sau',
      'Bực bội đập bóng',
      'Chê bai bản thân',
      'Bỏ ra ngoài'
    ], 0, 'Rút kinh nghiệm — điều chỉnh.'),
    Q('Trò ném trúng đích rèn?', [
      'Tính chính xác, kiên nhẫn',
      'Khả năng la hét',
      'Khả năng cãi nhau',
      'Khả năng chạy nhanh'
    ], 0, 'Chính xác + kiên nhẫn.'),
  ]),

  M(28, 'Bắt bóng hai tay', [
    Q('Tư thế bắt bóng hai tay là?', [
      'Hai tay đưa ra trước, mở ngón, mắt nhìn bóng',
      'Đứng nghiêm, tay xuôi',
      'Khoanh tay',
      'Giơ một tay'
    ], 0, 'Hai tay đón sẵn, nhìn theo bóng.'),
    Q('Khi bóng đến, hai tay em làm gì?', [
      'Kéo nhẹ về phía thân để giảm lực',
      'Cứng đờ chặn',
      'Tránh sang ngang',
      'Bỏ tay ra sau'
    ], 0, 'Kéo nhẹ về thân giảm chấn.'),
    Q('Bàn tay khi bắt bóng nên?', [
      'Mở rộng, các ngón hơi cong như cái rổ',
      'Nắm chặt thành đấm',
      'Bắt chéo',
      'Ngửa lòng bàn tay phẳng'
    ], 0, 'Tay tạo hình rổ ôm bóng.'),
    Q('Nếu bóng đến quá nhanh và cao, em?', [
      'Tránh sang bên thay vì cố bắt bằng mặt',
      'Lao đầu vào đón',
      'Đứng yên cho bóng đập vào người',
      'Cãi nhau với người ném'
    ], 0, 'An toàn cho bản thân là trên hết.'),
    Q('Lợi ích của bắt bóng?', [
      'Tăng phản xạ tay và phối hợp mắt-tay',
      'Tăng chiều cao 5 cm',
      'Tăng cân',
      'Tăng tóc dài'
    ], 0, 'Phản xạ + phối hợp.'),
    Q('Khi tập theo cặp, khoảng cách hai bạn?', [
      'Phù hợp với lực ném và sức bắt (gần ở mức cơ bản)',
      'Càng xa càng tốt',
      'Sát mặt nhau',
      'Quay lưng nhau'
    ], 0, 'Khoảng cách hợp lý để an toàn.'),
  ]),

  M(29, 'Trò chơi: Kéo co (luật chơi, an toàn)', [
    Q('Vạch ranh giới thắng trong kéo co được xác định bởi?', [
      'Vạch giữa dây và vạch giới hạn trên sân',
      'Tiếng hô của khán giả',
      'Cô giáo đoán',
      'Đội cao to hơn'
    ], 0, 'Có vạch quy định rõ trên sân.'),
    Q('Đội thắng kéo co là đội?', [
      'Kéo được vạch giữa dây qua vạch của đội mình',
      'Có người to nhất',
      'La hét to nhất',
      'Đông người hơn'
    ], 0, 'Kéo qua vạch là thắng.'),
    Q('Vị trí tay khi cầm dây?', [
      'Hai tay nắm chắc dây, không quấn vào cổ tay',
      'Quấn dây quanh cổ tay',
      'Quấn quanh cổ',
      'Cầm bằng răng'
    ], 0, 'Tuyệt đối không quấn vào cơ thể — nguy hiểm.'),
    Q('Tư thế kéo co an toàn?', [
      'Ngả thân về sau, chân trước khuỵu, chân sau làm trụ',
      'Đứng thẳng cứng',
      'Quay lưng lại dây',
      'Ngồi xuống đất'
    ], 0, 'Ngả thân hợp lý để dồn lực.'),
    Q('Khi một bên đột nhiên buông dây?', [
      'Đội kia có thể ngã — rất nguy hiểm; không được buông',
      'Không sao',
      'Đội kia thắng',
      'Phải vỗ tay'
    ], 0, 'Buông dây gây ngã tập thể — không được làm.'),
    Q('Tinh thần khi chơi kéo co?', [
      'Đoàn kết, đồng đội, fair-play',
      'Cãi nhau',
      'Đổ lỗi cho nhau',
      'Bỏ cuộc giữa chừng'
    ], 0, 'Đồng đội là yếu tố quyết định.'),
  ]),

  M(30, 'Trò chơi: Nhảy bao bố', [
    Q('Trong "Nhảy bao bố", em đứng thế nào?', [
      'Hai chân đặt trong bao, hai tay giữ miệng bao',
      'Đứng ngoài bao',
      'Trùm bao lên đầu',
      'Quàng bao quanh cổ'
    ], 0, 'Chân trong bao, tay giữ miệng bao.'),
    Q('Cách di chuyển là?', [
      'Bật chụm hai chân, tiến về trước',
      'Đi từng bước như bình thường',
      'Bò bằng tay',
      'Quay tròn'
    ], 0, 'Bật chụm như nhảy con thỏ.'),
    Q('Nếu ngã trong khi nhảy, em?', [
      'Đứng dậy, tiếp tục thi đấu',
      'Khóc',
      'Bỏ cuộc',
      'Ngồi luôn ở đó'
    ], 0, 'Bình tĩnh đứng dậy.'),
    Q('Bao nên là?', [
      'Bao vải thoáng, vừa kích cỡ chân',
      'Bao nylon trơn',
      'Bao có vật nhọn bên trong',
      'Bao quá to lê đất'
    ], 0, 'Bao vải an toàn, vừa kích cỡ.'),
    Q('Trò "Nhảy bao bố" rèn?', [
      'Sức bật, sự khéo léo và thăng bằng',
      'Khả năng vẽ',
      'Khả năng đọc',
      'Khả năng viết'
    ], 0, 'Sức bật + khéo léo + thăng bằng.'),
  ]),

  M(31, 'Trò chơi: Rồng rắn lên mây', [
    Q('Trong "Rồng rắn lên mây", người dẫn đầu gọi là?', [
      'Đầu rồng (đầu rắn)',
      'Thầy thuốc',
      'Đuôi rồng',
      'Thợ săn'
    ], 0, 'Người đứng đầu hàng là đầu rồng.'),
    Q('Đầu rồng có nhiệm vụ?', [
      'Bảo vệ đuôi rồng khỏi bị "thầy thuốc" bắt',
      'Bắt đuôi rồng',
      'Ngồi yên',
      'Hát thật to'
    ], 0, 'Đầu rồng dang tay che, bảo vệ đuôi.'),
    Q('Các bạn sau đầu rồng làm gì?', [
      'Nắm áo/vai bạn phía trước, di chuyển theo đầu',
      'Chạy mỗi người một hướng',
      'Đứng yên',
      'Bỏ về'
    ], 0, 'Bám chặt thành chuỗi.'),
    Q('Bài đồng dao "Rồng rắn lên mây" mang đặc trưng?', [
      'Trò chơi dân gian Việt Nam',
      'Trò chơi quốc tế',
      'Trò chơi trên máy tính',
      'Bài hát nước ngoài'
    ], 0, 'Trò dân gian VN, kèm đồng dao.'),
    Q('Khi chơi, em PHẢI?', [
      'Không kéo áo bạn mạnh đến rách, không kéo ngã',
      'Kéo thật mạnh áo bạn',
      'Đánh bạn',
      'La mắng nhau'
    ], 0, 'Chơi nhẹ nhàng, an toàn.'),
  ]),

  M(32, 'Chạy nhanh cự ly 30 m', [
    Q('Cự ly chạy nhanh 30 m yêu cầu gì?', [
      'Bứt tốc nhanh và duy trì tốc độ đến đích',
      'Đi bộ thư giãn',
      'Chạy zigzag',
      'Chạy lùi'
    ], 0, 'Bứt tốc + duy trì là yếu tố cốt lõi.'),
    Q('Vung tay khi chạy nhanh?', [
      'Co khuỷu ~ 90°, đánh tay mạnh trước-sau',
      'Vung ngang sang hai bên',
      'Khoanh tay',
      'Để thõng cứng đờ'
    ], 0, 'Đánh tay đúng tăng tốc độ.'),
    Q('Khi cô giáo phát lệnh "Sẵn sàng... Chạy!", em?', [
      'Chờ nghe rõ "Chạy!" rồi xuất phát',
      'Xuất phát trước khi nghe "Chạy!"',
      'Không xuất phát',
      'Ngồi xuống'
    ], 0, 'Chạy đúng tín hiệu — không cướp lệnh.'),
    Q('Nếu em vấp ngã giữa đường?', [
      'Bình tĩnh đứng dậy chạy tiếp nếu không bị đau',
      'Ngồi khóc tại chỗ',
      'Bỏ về chỗ',
      'Quay lại đầu chạy lại'
    ], 0, 'Đứng dậy nếu an toàn.'),
    Q('Sau khi đích, em làm gì?', [
      'Đi bộ chậm để hồi tĩnh, hít thở sâu',
      'Ngồi sụp ngay',
      'Uống đá lạnh',
      'Chạy thêm 1 vòng'
    ], 0, 'Hồi tĩnh đúng cách.'),
    Q('So với 15-20 m, cự ly 30 m yêu cầu thêm?', [
      'Sức bền tốc độ',
      'Chỉ sức bật',
      'Chỉ sức mạnh tay',
      'Tốc độ chậm hơn'
    ], 0, '30 m đòi hỏi duy trì tốc độ lâu hơn.'),
  ]),

  M(33, 'Ôn tập 5 động tác bài thể dục', [
    Q('Động tác đầu tiên của bài TD lớp 2 là?', [
      'Vươn thở',
      'Bụng',
      'Lườn',
      'Toàn thân'
    ], 0, 'Vươn thở khởi đầu.'),
    Q('Động tác tay chú trọng cơ?', [
      'Cơ vai, cơ tay',
      'Cơ chân',
      'Cơ mắt',
      'Cơ má'
    ], 0, 'Vai và tay.'),
    Q('Khi tập động tác chân, lưng nên?', [
      'Giữ thẳng',
      'Cúi gập sâu',
      'Cong ngược',
      'Vặn ngang'
    ], 0, 'Thẳng để bảo vệ cột sống.'),
    Q('Động tác lườn rèn phần?', [
      'Hai bên sườn',
      'Đầu gối',
      'Mắt cá chân',
      'Cổ tay'
    ], 0, 'Hai bên sườn (lườn).'),
    Q('Động tác bụng giúp cơ nào?', [
      'Cơ bụng và lưng',
      'Cơ mặt',
      'Cơ tai',
      'Cơ ngón chân'
    ], 0, 'Cơ thân giữa.'),
    Q('Mỗi động tác tập bao nhiêu nhịp ở lớp 2?', [
      '2 × 8 nhịp',
      '1 × 4 nhịp',
      '5 × 10 nhịp',
      '10 × 20 nhịp'
    ], 0, '2 lần 8 nhịp.'),
  ]),

  M(34, 'An toàn khi tập luyện (nắng, mưa)', [
    Q('Khi nắng to, em nên?', [
      'Đội mũ, tập trong bóng mát nếu được; uống nước đầy đủ',
      'Cởi áo, đứng giữa nắng',
      'Tập thật lâu giữa trưa',
      'Không uống nước cả buổi'
    ], 0, 'Bảo vệ khỏi say nắng.'),
    Q('Trời mưa to, sân trơn ướt, em?', [
      'Vào tập trong nhà đa năng, không tập ngoài sân trơn',
      'Vẫn chạy trên sân trơn',
      'Tập kéo co trên đất sình',
      'Cởi giày chạy chân đất trong mưa'
    ], 0, 'Sân trơn dễ ngã.'),
    Q('Đang tập mà thấy chóng mặt, em PHẢI?', [
      'Báo cô giáo và ngồi nghỉ trong bóng mát',
      'Cố tập tiếp',
      'Im lặng đi về một mình',
      'Chạy thật nhanh'
    ], 0, 'Báo cô giáo ngay.'),
    Q('Trang phục GDTC phù hợp?', [
      'Quần áo thể thao thoáng, giày thể thao',
      'Áo dài, váy ngắn',
      'Dép xỏ ngón',
      'Mặc áo khoác dày khi trời nóng'
    ], 0, 'Trang phục thoáng, an toàn.'),
    Q('Trước giờ học GDTC, em KHÔNG nên?', [
      'Ăn quá no',
      'Đi vệ sinh',
      'Uống ngụm nước',
      'Khởi động nhẹ'
    ], 0, 'No quá dễ buồn nôn khi vận động.'),
    Q('Khi bị bạn va vào và đau, em?', [
      'Báo cô giáo, không tự ý đánh lại',
      'Đánh lại bạn',
      'Cãi nhau to',
      'Bỏ về'
    ], 0, 'Báo cô để xử lý đúng cách.'),
  ]),

  M(35, 'Hồi tưởng kĩ năng cả năm', [
    Q('Kỹ năng nào sau đây đã học ở lớp 2?', [
      'Tâng cầu, bật xa, ném bóng, nhảy dây',
      'Đua mô-tô',
      'Lặn biển',
      'Trượt tuyết'
    ], 0, 'Đây là các kỹ năng chính của lớp 2.'),
    Q('Đội hình đội ngũ lớp 2 gồm?', [
      'Nghiêm-nghỉ, tập hợp hàng dọc/ngang, dóng hàng, đi đều',
      'Diễu binh quốc khánh',
      'Đội hình bóng đá 11 người',
      'Đội hình duyệt binh quân đội'
    ], 0, 'Các nội dung phù hợp lớp 2.'),
    Q('Trò chơi dân gian đã học?', [
      'Mèo đuổi chuột, Chim về tổ, Kéo co, Nhảy bao bố, Rồng rắn',
      'Cờ vua quốc tế',
      'Bida',
      'Bowling'
    ], 0, 'Các trò dân gian/vận động cơ bản.'),
    Q('Quy tắc bất biến trong GDTC?', [
      'Khởi động — Tập — Hồi tĩnh',
      'Chỉ Tập, bỏ khởi động',
      'Chỉ Khởi động, bỏ tập',
      'Tùy ý làm gì cũng được'
    ], 0, 'Quy trình 3 bước.'),
    Q('Tinh thần khi tham gia GDTC?', [
      'Tích cực, đoàn kết, an toàn, tôn trọng luật chơi',
      'Đi trễ về sớm',
      'Cãi nhau với bạn',
      'Phá hỏng dụng cụ'
    ], 0, 'Giá trị cốt lõi của môn học.'),
    Q('Vì sao cần học GDTC?', [
      'Phát triển thể chất, trí tuệ, ý chí và đạo đức',
      'Để được nghỉ học môn khác',
      'Để xem phim',
      'Để ăn quà'
    ], 0, '"Khoẻ để học, khoẻ để sống".'),
  ]),

  M(36, 'Kiểm tra cuối năm', [
    Q('Khẩu lệnh "Nghiêm!" yêu cầu tư thế?', [
      'Đứng thẳng, hai gót khép chữ V, mắt nhìn thẳng',
      'Ngồi xếp bằng',
      'Chạy về chỗ',
      'Khoanh tay lên đầu'
    ], 0, 'Tư thế chuẩn.'),
    Q('Khi đi đều, chân trái cùng tay?', [
      'Tay phải',
      'Tay trái',
      'Hai tay',
      'Không tay nào'
    ], 0, 'Tay-chân chéo.'),
    Q('Tâng cầu, em cầm cầu ở phần?', [
      'Lông, đế hướng xuống',
      'Đế, lông hướng xuống',
      'Bóp dập cầu',
      'Cầm bằng miệng'
    ], 0, 'Cầm phần lông.'),
    Q('Khi bắt bóng, hai bàn tay?', [
      'Mở như rổ, kéo nhẹ về thân khi bóng đến',
      'Nắm chặt thành đấm',
      'Khoanh trước ngực',
      'Bắt chéo'
    ], 0, 'Tạo hình rổ, giảm chấn.'),
    Q('Ném bóng xa, góc ném tốt?', [
      'Khoảng 45° chếch lên',
      'Thẳng đứng',
      'Hướng xuống đất',
      'Sát mặt đất'
    ], 0, '45° đem lại tầm xa.'),
    Q('Bật xa tại chỗ — tiếp đất?', [
      'Nửa trước bàn chân, khuỵu gối nhẹ',
      'Đập gót thật mạnh',
      'Chống tay xuống đất',
      'Ngã ngửa ra sau'
    ], 0, 'Tiếp đất an toàn.'),
    Q('Trò "Mèo đuổi chuột", các bạn ngoài làm gì?', [
      'Nắm tay tạo vòng tròn làm hang',
      'Chạy đuổi cùng mèo',
      'Ngồi xem',
      'Bỏ về'
    ], 0, 'Tạo hang.'),
    Q('Kéo co — sai lầm nguy hiểm là?', [
      'Quấn dây quanh cổ tay/cổ',
      'Nắm chắc dây bằng hai tay',
      'Ngả thân ra sau',
      'Đoàn kết kéo cùng nhịp'
    ], 0, 'Quấn dây gây thương tích nặng.'),
    Q('Nhảy bao bố di chuyển bằng cách?', [
      'Bật chụm hai chân',
      'Đi từng bước',
      'Bò bằng tay',
      'Quay tròn tại chỗ'
    ], 0, 'Bật chụm.'),
    Q('Đang tập GDTC mà chóng mặt thì?', [
      'Báo cô giáo, ngồi nghỉ trong bóng mát',
      'Cố tập tiếp',
      'Im lặng bỏ về một mình',
      'Chạy thật nhanh cho đỡ chóng'
    ], 0, 'Báo cô để được hỗ trợ.'),
  ], { difficulty: 3 }),
];

export const P2GDTC_SCENARIOS = indexBy(P2GDTC_WEEKS);
