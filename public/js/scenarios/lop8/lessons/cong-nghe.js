// ============================================================
// Lớp 8 · CÔNG NGHỆ — Lý thuyết 35 tuần (GDPT 2018)
// Key: "S8CN-wNN-quiz".
// ============================================================

export const S8CN_LESSONS = {
  'S8CN-w01-quiz': {
    topic: 'Vai trò của vẽ kĩ thuật trong sản xuất và đời sống',
    intro: 'Vẽ kĩ thuật là "ngôn ngữ" chung của ngành kĩ thuật, giúp người thiết kế truyền đạt ý tưởng chính xác cho người chế tạo.',
    objectives: [
      'Hiểu khái niệm vẽ kĩ thuật.',
      'Nêu được vai trò trong sản xuất và đời sống.',
      'Phân biệt bản vẽ kĩ thuật với hình ảnh thông thường.',
    ],
    theory: [
      { h: 'Vẽ kĩ thuật là gì?' },
      { p: 'Là ngôn ngữ dùng hình vẽ, kí hiệu để biểu diễn hình dạng, kích thước, vật liệu của vật thể theo các quy tắc thống nhất.' },
      { h: 'Vai trò trong sản xuất' },
      { ul: [
        'Người thiết kế dùng bản vẽ để diễn đạt ý tưởng.',
        'Người chế tạo, lắp ráp căn cứ bản vẽ để gia công sản phẩm.',
        'Người sử dụng đọc bản vẽ để biết cách dùng, bảo dưỡng.',
      ] },
      { h: 'Vai trò trong đời sống' },
      { p: 'Bản vẽ nhà giúp thợ xây dựng đúng ý gia chủ; bản vẽ điện giúp lắp đặt an toàn; bản đồ giao thông giúp đi đúng đường.' },
      { note: 'Bản vẽ kĩ thuật khác ảnh chụp ở chỗ nó tuân theo quy ước chuẩn quốc tế (ISO).' },
    ],
    examples: [
      { q: 'Vì sao thợ xây cần bản vẽ nhà?', a: 'Để biết kích thước, vị trí phòng, vật liệu, cách lắp đặt đường điện–nước. Không có bản vẽ thì xây không chính xác.' },
      { q: 'Bản vẽ kĩ thuật khác bức ảnh ở điểm nào?', a: 'Bản vẽ tuân quy ước (hình chiếu, tỉ lệ, kí hiệu); ảnh chỉ thể hiện hình ảnh ở 1 góc nhìn, không có thông tin kĩ thuật chính xác.' },
    ],
  },

  'S8CN-w02-quiz': {
    topic: 'Hình chiếu — Khái niệm và phương pháp',
    intro: 'Hình chiếu là cách biểu diễn vật thể 3 chiều lên mặt phẳng. Đây là cơ sở của mọi bản vẽ kĩ thuật.',
    objectives: [
      'Hiểu khái niệm hình chiếu.',
      'Phân biệt phép chiếu vuông góc, song song, xuyên tâm.',
      'Biết phép chiếu vuông góc dùng trong bản vẽ kĩ thuật.',
    ],
    theory: [
      { h: 'Hình chiếu là gì?' },
      { p: 'Là hình nhận được trên mặt phẳng chiếu khi chiếu vật thể qua các tia chiếu lên mặt phẳng đó.' },
      { h: 'Các phép chiếu' },
      { ul: [
        'Phép chiếu xuyên tâm: tia chiếu đồng quy 1 điểm (ảnh phối cảnh).',
        'Phép chiếu song song: tia chiếu song song nhau.',
        'Phép chiếu vuông góc: tia chiếu vuông góc mặt phẳng chiếu.',
      ] },
      { h: 'Ứng dụng' },
      { p: 'Bản vẽ kĩ thuật dùng phép chiếu vuông góc vì cho hình ảnh chính xác về kích thước.' },
      { note: 'Bóng nắng buổi trưa là hình chiếu vuông góc của vật xuống mặt đất.' },
    ],
    examples: [
      { q: 'Vì sao bản vẽ kĩ thuật dùng phép chiếu vuông góc?', a: 'Vì tia chiếu vuông góc cho hình giữ nguyên kích thước thật, dễ đo và gia công.' },
      { q: 'Bóng người dưới đèn pha là phép chiếu gì?', a: 'Phép chiếu xuyên tâm — vì tia sáng phát ra từ 1 điểm (bóng đèn).' },
    ],
  },

  'S8CN-w03-quiz': {
    topic: 'Ba mặt phẳng chiếu — Hình chiếu đứng, bằng, cạnh',
    intro: 'Để biểu diễn đầy đủ vật thể, ta dùng 3 mặt phẳng chiếu vuông góc — cho 3 hình chiếu chính.',
    objectives: [
      'Nêu được tên 3 mặt phẳng chiếu và 3 hình chiếu.',
      'Hiểu vị trí của mỗi hình chiếu trên bản vẽ.',
      'Biết đọc và vẽ 3 hình chiếu đơn giản.',
    ],
    theory: [
      { h: '3 mặt phẳng chiếu' },
      { ul: [
        'Mặt phẳng đứng (P1) — phía sau vật thể.',
        'Mặt phẳng bằng (P2) — phía dưới vật thể.',
        'Mặt phẳng cạnh (P3) — bên phải vật thể.',
      ] },
      { h: '3 hình chiếu' },
      { ul: [
        'Hình chiếu đứng (nhìn từ trước).',
        'Hình chiếu bằng (nhìn từ trên xuống).',
        'Hình chiếu cạnh (nhìn từ trái sang).',
      ] },
      { h: 'Vị trí trên bản vẽ' },
      { p: 'Hình chiếu đứng ở giữa, hình chiếu bằng ở dưới, hình chiếu cạnh ở bên phải hình chiếu đứng (theo TCVN/ISO E).' },
      { note: 'Học vẽ 3 hình chiếu là kĩ năng cốt lõi của vẽ kĩ thuật.' },
    ],
    examples: [
      { q: 'Hình chiếu đứng là hình thu được khi nhìn vật thể từ đâu?', a: 'Nhìn từ trước (phía mặt phẳng đứng P1).' },
      { q: 'Vẽ 3 hình chiếu của hình hộp chữ nhật 3×2×1 cm.', a: 'Hình chiếu đứng: chữ nhật 3×1. Hình chiếu bằng: 3×2. Hình chiếu cạnh: 2×1.' },
    ],
  },

  'S8CN-w04-quiz': {
    topic: 'Hình chiếu các khối hình học cơ bản',
    intro: 'Mọi vật thể đều có thể coi là tổ hợp các khối hình học cơ bản: hộp, lăng trụ, chóp, trụ, cầu.',
    objectives: [
      'Vẽ được 3 hình chiếu của các khối đa diện.',
      'Hiểu cách biểu diễn khối lăng trụ, chóp.',
      'Liên hệ vật thể thật.',
    ],
    theory: [
      { h: 'Khối đa diện' },
      { ul: [
        'Hộp chữ nhật: 3 hình chiếu là 3 hình chữ nhật.',
        'Lăng trụ tam giác: hình chiếu đứng/cạnh là chữ nhật, hình chiếu bằng là tam giác.',
        'Hình chóp: hình chiếu đứng/cạnh là tam giác, hình chiếu bằng là đa giác đáy.',
      ] },
      { h: 'Cách vẽ' },
      { p: 'Xác định trục, vẽ hình chiếu đứng trước, dùng đường gióng để vẽ các hình chiếu còn lại đảm bảo kích thước tương ứng.' },
      { h: 'Liên hệ thực tế' },
      { ul: [
        'Hộp xà phòng — hộp chữ nhật.',
        'Mái nhà — lăng trụ tam giác.',
        'Kim tự tháp — hình chóp.',
      ] },
      { note: 'Đường gióng giúp đảm bảo kích thước thống nhất giữa các hình chiếu.' },
    ],
    examples: [
      { q: 'Hình chiếu bằng của lăng trụ tam giác (đặt đứng) là hình gì?', a: 'Một hình tam giác (đáy lăng trụ).' },
      { q: 'Vẽ 3 hình chiếu của 1 kim tự tháp đáy vuông.', a: 'Đứng: tam giác cân. Bằng: hình vuông với 2 đường chéo (đỉnh chóp). Cạnh: tam giác cân.' },
    ],
  },

  'S8CN-w05-quiz': {
    topic: 'Bản vẽ các khối tròn xoay',
    intro: 'Khối tròn xoay tạo bởi 1 hình phẳng quay quanh trục. Ví dụ: trụ, nón, cầu — gặp nhiều trong thực tế.',
    objectives: [
      'Hiểu khối tròn xoay là gì.',
      'Vẽ được 3 hình chiếu của trụ, nón, cầu.',
      'Nhận biết khối tròn xoay từ vật thật.',
    ],
    theory: [
      { h: 'Khối tròn xoay' },
      { ul: [
        'Hình trụ: hình chữ nhật quay quanh 1 cạnh.',
        'Hình nón: tam giác vuông quay quanh 1 cạnh góc vuông.',
        'Hình cầu: nửa hình tròn quay quanh đường kính.',
      ] },
      { h: 'Hình chiếu' },
      { ul: [
        'Hình trụ: đứng = chữ nhật, bằng = hình tròn.',
        'Hình nón: đứng = tam giác, bằng = hình tròn có chấm tâm.',
        'Hình cầu: cả 3 hình chiếu đều là hình tròn.',
      ] },
      { h: 'Vật thật' },
      { p: 'Cốc nước (trụ), nón lá (nón), quả bóng (cầu), bình hoa (kết hợp nhiều khối tròn).' },
      { note: 'Khối tròn xoay luôn có 1 trục đối xứng — trục quay.' },
    ],
    examples: [
      { q: 'Quả bóng đá có 3 hình chiếu thế nào?', a: 'Cả 3 hình chiếu đều là hình tròn cùng đường kính (vì là hình cầu).' },
      { q: 'Cốc thuỷ tinh hình trụ có hình chiếu bằng là gì?', a: 'Hình tròn (đáy cốc).' },
    ],
  },

  'S8CN-w06-quiz': {
    topic: 'Khái niệm về bản vẽ kĩ thuật — Hình cắt',
    intro: 'Khi vật có cấu trúc bên trong phức tạp, ta dùng hình cắt — "mổ" vật thể để nhìn rõ phần ẩn.',
    objectives: [
      'Hiểu khái niệm bản vẽ kĩ thuật.',
      'Hiểu hình cắt là gì và vì sao cần.',
      'Nhận biết kí hiệu vật liệu trên mặt cắt.',
    ],
    theory: [
      { h: 'Bản vẽ kĩ thuật' },
      { p: 'Là tài liệu kĩ thuật chứa các hình biểu diễn, kích thước, yêu cầu kĩ thuật của vật thể — dùng trong thiết kế và chế tạo.' },
      { h: 'Hình cắt' },
      { p: 'Là hình biểu diễn phần vật thể còn lại sau khi tưởng tượng cắt bỏ phần ở giữa người quan sát và mặt phẳng cắt.' },
      { h: 'Kí hiệu vật liệu trên mặt cắt' },
      { ul: [
        'Kim loại: nét gạch chéo song song nghiêng 45°.',
        'Phi kim (gỗ, nhựa): các nét khác nhau theo TCVN.',
      ] },
      { note: 'Hình cắt giúp lộ phần lỗ, rãnh, ren bên trong vật thể.' },
    ],
    examples: [
      { q: 'Vì sao cần dùng hình cắt khi vẽ ổ trục?', a: 'Vì lỗ bên trong ổ trục không nhìn thấy từ ngoài; cắt ra mới biểu diễn được lỗ và kích thước chính xác.' },
      { q: 'Trên mặt cắt thấy nét gạch chéo 45° — vật liệu gì?', a: 'Kim loại.' },
    ],
  },

  'S8CN-w07-quiz': {
    topic: 'Bản vẽ chi tiết',
    intro: 'Bản vẽ chi tiết thể hiện đầy đủ một chi tiết máy: hình dạng, kích thước, vật liệu, yêu cầu kĩ thuật.',
    objectives: [
      'Hiểu nội dung bản vẽ chi tiết.',
      'Biết các phần của khung tên.',
      'Đọc được bản vẽ chi tiết đơn giản.',
    ],
    theory: [
      { h: '4 nội dung chính' },
      { ul: [
        'Hình biểu diễn (hình chiếu, hình cắt).',
        'Kích thước.',
        'Yêu cầu kĩ thuật (độ nhẵn bề mặt, dung sai).',
        'Khung tên.',
      ] },
      { h: 'Khung tên' },
      { p: 'Chứa thông tin: tên chi tiết, vật liệu, tỉ lệ, người vẽ, ngày vẽ, kiểm tra.' },
      { h: 'Cách đọc' },
      { ul: [
        'Đọc khung tên để biết tên và vật liệu.',
        'Đọc hình biểu diễn để hình dung hình dạng.',
        'Đọc kích thước.',
        'Đọc yêu cầu kĩ thuật.',
      ] },
      { note: 'Khung tên ở góc dưới bên phải bản vẽ.' },
    ],
    examples: [
      { q: 'Khung tên gồm những thông tin gì?', a: 'Tên chi tiết, vật liệu, tỉ lệ, người vẽ/kiểm tra, ngày tháng, kí số bản vẽ.' },
      { q: 'Đọc bản vẽ "Bulông M10×30" — em hiểu gì?', a: 'Bulông có ren M10 (đường kính 10mm), chiều dài 30mm.' },
    ],
  },

  'S8CN-w08-quiz': {
    topic: 'Biểu diễn ren — Quy ước vẽ ren',
    intro: 'Ren được dùng để ghép nối các chi tiết. Vì ren rất khó vẽ thật, người ta dùng quy ước đơn giản.',
    objectives: [
      'Hiểu thế nào là ren ngoài, ren trong.',
      'Biết quy ước vẽ ren.',
      'Đọc được kí hiệu ren.',
    ],
    theory: [
      { h: 'Ren là gì?' },
      { p: 'Ren là cấu tạo xoắn quanh trụ. Có ren ngoài (trên bulông) và ren trong (trong đai ốc, lỗ).' },
      { h: 'Quy ước vẽ ren' },
      { ul: [
        'Đường đỉnh ren: nét liền đậm.',
        'Đường chân ren: nét liền mảnh.',
        'Vòng tròn chân ren: vẽ hở 1/4.',
      ] },
      { h: 'Kí hiệu' },
      { p: 'Kí hiệu "M10" — ren hệ Mét, đường kính ngoài 10mm; "Tr20×4" — ren thang.' },
      { note: 'Đại đa số bulông gia dụng dùng ren hệ Mét (M).' },
    ],
    examples: [
      { q: 'Bulông M8 nghĩa là gì?', a: 'Ren hệ Mét, đường kính ngoài 8mm.' },
      { q: 'Đường đỉnh ren được vẽ bằng nét gì?', a: 'Nét liền đậm.' },
    ],
  },

  'S8CN-w09-quiz': {
    topic: 'Bản vẽ lắp',
    intro: 'Bản vẽ lắp thể hiện hình dạng và vị trí tương quan của các chi tiết trong một sản phẩm.',
    objectives: [
      'Hiểu nội dung bản vẽ lắp.',
      'Phân biệt bản vẽ chi tiết và bản vẽ lắp.',
      'Đọc được bản vẽ lắp đơn giản.',
    ],
    theory: [
      { h: 'Nội dung bản vẽ lắp' },
      { ul: [
        'Hình biểu diễn nhóm chi tiết.',
        'Kích thước lắp đặt và bao.',
        'Bảng kê các chi tiết.',
        'Khung tên.',
      ] },
      { h: 'Phân biệt với bản vẽ chi tiết' },
      { p: 'Bản vẽ chi tiết — 1 chi tiết, có đầy đủ kích thước gia công. Bản vẽ lắp — nhiều chi tiết lắp với nhau, chỉ ghi kích thước lắp.' },
      { h: 'Cách đọc' },
      { ul: [
        'Đọc khung tên.',
        'Đọc bảng kê để biết các chi tiết.',
        'Đọc hình biểu diễn để hiểu cách lắp.',
      ] },
      { note: 'Mỗi chi tiết trên bản vẽ lắp có 1 số thứ tự khớp với bảng kê.' },
    ],
    examples: [
      { q: 'Bản vẽ lắp khác bản vẽ chi tiết ở điểm nào?', a: 'Bản vẽ lắp thể hiện nhiều chi tiết ghép với nhau; bản vẽ chi tiết chỉ 1 chi tiết, đầy đủ kích thước gia công.' },
      { q: 'Bảng kê dùng để làm gì?', a: 'Liệt kê tên, số lượng, vật liệu của từng chi tiết trong sản phẩm.' },
    ],
  },

  'S8CN-w10-quiz': {
    topic: 'Bản vẽ nhà',
    intro: 'Bản vẽ nhà là tài liệu để xây dựng. Bao gồm mặt bằng, mặt đứng, mặt cắt.',
    objectives: [
      'Hiểu nội dung bản vẽ nhà.',
      'Phân biệt mặt bằng, mặt đứng, mặt cắt.',
      'Đọc được bản vẽ nhà đơn giản.',
    ],
    theory: [
      { h: '3 hình biểu diễn chính' },
      { ul: [
        'Mặt bằng: nhìn từ trên xuống (sau khi cắt ngang qua cửa).',
        'Mặt đứng: nhìn từ phía trước (mặt tiền).',
        'Mặt cắt: cắt dọc/ngang để thấy chiều cao, tầng.',
      ] },
      { h: 'Kí hiệu thường gặp' },
      { ul: [
        'Cửa đi, cửa sổ — có kí hiệu riêng.',
        'Cầu thang — bậc + hướng đi.',
        'Thiết bị vệ sinh, bếp.',
      ] },
      { h: 'Kích thước' },
      { p: 'Kích thước nhà thường tính theo mm. Diện tích phòng tính m².' },
      { note: 'Bản vẽ nhà giúp gia chủ "hình dung" nhà trước khi xây.' },
    ],
    examples: [
      { q: 'Mặt bằng nhà cho biết điều gì?', a: 'Cách bố trí phòng, kích thước phòng, vị trí cửa, thiết bị (nhìn từ trên xuống).' },
      { q: 'Mặt đứng cho biết gì?', a: 'Hình dáng mặt tiền: cửa, mái, cửa sổ, trang trí.' },
    ],
  },

  'S8CN-w11-quiz': {
    topic: 'Vật liệu cơ khí',
    intro: 'Vật liệu cơ khí gồm vật liệu kim loại và phi kim loại — là nguyên liệu để gia công các chi tiết máy.',
    objectives: [
      'Phân loại được vật liệu cơ khí.',
      'Nêu tính chất cơ bản.',
      'Liên hệ vật dụng thực tế.',
    ],
    theory: [
      { h: 'Phân loại' },
      { ul: [
        'Kim loại đen: gang, thép.',
        'Kim loại màu: đồng, nhôm và hợp kim.',
        'Phi kim loại: chất dẻo, cao su.',
      ] },
      { h: 'Tính chất' },
      { ul: [
        'Cơ tính: độ bền, độ cứng, độ dẻo.',
        'Lí tính: nhiệt độ nóng chảy, tính dẫn điện, dẫn nhiệt.',
        'Hoá tính: tính chống ăn mòn.',
        'Tính công nghệ: dễ gia công cắt gọt, đúc, hàn.',
      ] },
      { h: 'Ứng dụng' },
      { p: 'Thép — khung nhà, máy móc; nhôm — vỏ máy bay, đồ gia dụng; nhựa — vỏ thiết bị điện tử.' },
      { note: 'Vật liệu mới (composite, carbon fiber) ngày càng quan trọng trong công nghiệp.' },
    ],
    examples: [
      { q: 'Vì sao nồi gia đình hay làm bằng nhôm?', a: 'Nhôm dẫn nhiệt tốt, nhẹ, không bị gỉ — phù hợp nấu nướng.' },
      { q: 'Khung xe đạp thường làm bằng vật liệu gì?', a: 'Thép, hợp kim nhôm, carbon — tuỳ loại và giá.' },
    ],
  },

  'S8CN-w12-quiz': {
    topic: 'Dụng cụ cơ khí — Đo, vạch dấu',
    intro: 'Đo và vạch dấu là 2 bước đầu tiên trong gia công cơ khí. Đo chính xác mới gia công chính xác.',
    objectives: [
      'Biết các dụng cụ đo cơ khí thường dùng.',
      'Hiểu cách dùng thước cặp (caliper).',
      'Biết các dụng cụ vạch dấu.',
    ],
    theory: [
      { h: 'Dụng cụ đo' },
      { ul: [
        'Thước lá: đo kích thước thẳng, độ chính xác mm.',
        'Thước cặp (caliper): đo trong, ngoài, sâu; độ chính xác 0.1mm hoặc 0.02mm.',
        'Pan-me (micrometer): độ chính xác 0.01mm.',
        'Thước đo góc: đo góc.',
      ] },
      { h: 'Dụng cụ vạch dấu' },
      { ul: [
        'Mũi vạch: đánh dấu trên kim loại.',
        'Compa vạch: vẽ vòng tròn.',
        'Búa nhỏ + mũi đột: đánh dấu vị trí khoan.',
      ] },
      { h: 'Lưu ý' },
      { p: 'Đo xong kiểm tra lại. Vạch dấu cẩn thận vì sai 1 ly đi 1 dặm.' },
      { note: 'Thước cặp số (digital) hiện đại đọc trực tiếp số mm.' },
    ],
    examples: [
      { q: 'Đo đường kính trong của ống bằng dụng cụ gì?', a: 'Dùng thước cặp (caliper), với đầu đo trong.' },
      { q: 'Vì sao trước khi cưa kim loại cần vạch dấu?', a: 'Để đường cưa thẳng, đúng kích thước, tránh lãng phí vật liệu.' },
    ],
  },

  'S8CN-w13-quiz': {
    topic: 'Dụng cụ tháo lắp và kẹp chặt',
    intro: 'Dụng cụ tháo lắp giúp ghép hoặc tháo các chi tiết bằng ren. Dụng cụ kẹp giữ vật khi gia công.',
    objectives: [
      'Biết các loại cờ-lê, mỏ-lết, tua-vít.',
      'Biết các loại kìm và ê-tô.',
      'Sử dụng đúng dụng cụ với từng công việc.',
    ],
    theory: [
      { h: 'Dụng cụ tháo lắp' },
      { ul: [
        'Cờ-lê (wrench): cố định, dùng cho ốc/đai cỡ chuẩn.',
        'Mỏ-lết (adjustable wrench): điều chỉnh được kích thước.',
        'Tua-vít (screwdriver): dẹt, 4 cạnh (Phillips).',
      ] },
      { h: 'Dụng cụ kẹp chặt' },
      { ul: [
        'Kìm: kẹp dây, cắt dây.',
        'Ê-tô (vise): bàn kẹp giữ vật khi cưa, dũa.',
      ] },
      { h: 'Lưu ý an toàn' },
      { p: 'Dùng cờ-lê đúng cỡ tránh trượt; ê-tô siết vừa phải tránh biến dạng vật.' },
      { note: 'Tua-vít hỏng dùng vít 4 cạnh thì rất khó tháo — chọn đúng loại từ đầu.' },
    ],
    examples: [
      { q: 'Tháo đai ốc 14mm dùng dụng cụ nào?', a: 'Cờ-lê 14mm (cố định) hoặc mỏ-lết điều chỉnh về 14mm.' },
      { q: 'Khi cưa kim loại cần dùng gì để giữ vật?', a: 'Ê-tô — kẹp chắc vật lên bàn nguội rồi mới cưa.' },
    ],
  },

  'S8CN-w14-quiz': {
    topic: 'Cưa và dũa kim loại',
    intro: 'Cưa và dũa là 2 phương pháp gia công tay cơ bản — dùng khi không có máy hoặc khối lượng nhỏ.',
    objectives: [
      'Hiểu cách dùng cưa tay.',
      'Hiểu cách dùng dũa.',
      'Biết quy trình an toàn.',
    ],
    theory: [
      { h: 'Cưa kim loại' },
      { ul: [
        'Cưa tay có khung cưa và lưỡi cưa.',
        'Đẩy về phía trước thì cắt, kéo về thì nhả tay.',
        'Lắp lưỡi cưa: răng quay về phía trước.',
      ] },
      { h: 'Dũa kim loại' },
      { ul: [
        'Dũa thô (răng to) – làm phẳng nhanh.',
        'Dũa tinh (răng nhỏ) – làm nhẵn bề mặt.',
        'Đẩy đi: cắt; kéo về: nhả lực.',
      ] },
      { h: 'An toàn' },
      { ul: [
        'Đeo kính bảo hộ.',
        'Kẹp vật chắc bằng ê-tô.',
        'Không dùng dũa không có cán.',
      ] },
      { note: 'Tay phải cầm chuôi, tay trái áp vào đầu dũa để giữ phẳng.' },
    ],
    examples: [
      { q: 'Lưỡi cưa lắp ngược thì sao?', a: 'Răng cưa hướng về phía mình, đẩy đi sẽ không cắt được. Phải lắp lại đúng chiều.' },
      { q: 'Dũa thô và tinh khác nhau thế nào?', a: 'Dũa thô răng to, cắt nhanh nhưng để lại bề mặt nhám. Dũa tinh răng nhỏ, làm nhẵn bề mặt.' },
    ],
  },

  'S8CN-w15-quiz': {
    topic: 'Khoan kim loại',
    intro: 'Khoan là phương pháp tạo lỗ tròn trên vật liệu bằng mũi khoan quay nhanh.',
    objectives: [
      'Hiểu cấu tạo mũi khoan.',
      'Biết quy trình khoan an toàn.',
      'Hiểu các loại khoan (tay, máy).',
    ],
    theory: [
      { h: 'Cấu tạo mũi khoan' },
      { p: 'Mũi khoan có lưỡi cắt ở đầu, rãnh xoắn để thoát phoi. Đường kính mũi quyết định đường kính lỗ.' },
      { h: 'Các loại khoan' },
      { ul: [
        'Khoan tay (hand drill): quay tay, dùng cho lỗ nhỏ.',
        'Khoan điện cầm tay: tiện và nhanh.',
        'Khoan đứng (drill press): chính xác, lỗ lớn.',
      ] },
      { h: 'Quy trình khoan' },
      { ul: [
        'Vạch dấu vị trí.',
        'Đột lỗ định tâm.',
        'Kẹp vật bằng ê-tô.',
        'Bật khoan, từ từ ấn xuống.',
      ] },
      { note: 'Phải đeo kính bảo hộ và tuyệt đối không cầm vật bằng tay khi khoan máy.' },
    ],
    examples: [
      { q: 'Vì sao trước khi khoan cần đột lỗ định tâm?', a: 'Để mũi khoan không bị trượt, đảm bảo lỗ khoan đúng vị trí.' },
      { q: 'Khoan kim loại đặt trên ê-tô được không?', a: 'Được — và phải đặt trên ê-tô để giữ vật chắc, an toàn.' },
    ],
  },

  'S8CN-w16-quiz': {
    topic: 'Mối ghép cố định và mối ghép động',
    intro: 'Mối ghép nối các chi tiết với nhau. Có mối ghép cố định (không cử động) và mối ghép động (có chuyển động tương đối).',
    objectives: [
      'Phân biệt mối ghép cố định và mối ghép động.',
      'Biết các loại mối ghép phổ biến.',
      'Liên hệ thực tế.',
    ],
    theory: [
      { h: 'Mối ghép cố định' },
      { ul: [
        'Tháo được: ren, then, chốt.',
        'Không tháo được: hàn, đinh tán, dán keo.',
      ] },
      { h: 'Mối ghép động' },
      { ul: [
        'Khớp tịnh tiến: pittông trong xi-lanh.',
        'Khớp quay: trục bánh xe, bản lề.',
        'Khớp cầu: cần điều khiển.',
      ] },
      { h: 'Ứng dụng' },
      { p: 'Mối ghép cố định để giữ chặt; mối ghép động cho phép chuyển động cần thiết của máy.' },
      { note: 'Hộp số ôtô là tập hợp rất nhiều mối ghép động phức tạp.' },
    ],
    examples: [
      { q: 'Bản lề cửa là mối ghép gì?', a: 'Mối ghép động — khớp quay, cho cửa mở/đóng.' },
      { q: 'Hàn 2 thanh sắt là mối ghép gì?', a: 'Mối ghép cố định không tháo được.' },
    ],
  },

  'S8CN-w17-quiz': {
    topic: 'Truyền chuyển động — Cơ cấu đai, bánh răng, xích',
    intro: 'Cơ cấu truyền chuyển động đưa chuyển động từ động cơ tới bộ phận làm việc, đồng thời có thể đổi tốc độ.',
    objectives: [
      'Phân biệt 3 cơ cấu: đai, bánh răng, xích.',
      'Hiểu tỉ số truyền.',
      'Liên hệ thực tế.',
    ],
    theory: [
      { h: 'Cơ cấu đai (belt)' },
      { p: 'Hai bánh đai nối nhau bằng dây đai. Đơn giản, êm, nhưng có thể trượt.' },
      { h: 'Cơ cấu bánh răng (gear)' },
      { p: 'Hai bánh răng ăn khớp. Chính xác, không trượt, truyền lực lớn.' },
      { h: 'Cơ cấu xích (chain)' },
      { p: 'Hai đĩa xích nối bằng xích. Dùng cho khoảng cách trục lớn (xe đạp, xe máy).' },
      { h: 'Tỉ số truyền' },
      { p: 'i = n1/n2 = D2/D1 (đai/xích) hoặc Z2/Z1 (bánh răng). Bánh dẫn lớn — bánh bị dẫn quay nhanh hơn.' },
      { note: 'Xe đạp dùng xích vì khoảng cách trục lớn và cần truyền lực chính xác.' },
    ],
    examples: [
      { q: 'Tỉ số truyền giữa bánh răng 20 và 40 răng là bao nhiêu?', a: 'i = Z2/Z1 = 40/20 = 2 (bánh bị dẫn quay chậm gấp đôi bánh dẫn).' },
      { q: 'Xe đạp đĩa lớn xích đĩa nhỏ — đi nhanh hay chậm?', a: 'Nhanh — đĩa sau nhỏ quay nhanh nên bánh xe quay nhanh, tốc độ cao nhưng cần lực đạp lớn.' },
    ],
  },

  'S8CN-w18-quiz': {
    topic: 'Ôn tập học kì I',
    intro: 'Ôn tập tổng hợp 17 tuần đầu: vẽ kĩ thuật và phần đầu cơ khí.',
    objectives: [
      'Hệ thống kiến thức HK1.',
      'Vận dụng vào bài tập đọc bản vẽ.',
      'Chuẩn bị kiểm tra.',
    ],
    theory: [
      { h: 'Phần vẽ kĩ thuật' },
      { ul: [
        'Hình chiếu vuông góc — 3 hình chiếu.',
        'Hình chiếu các khối hình học.',
        'Hình cắt, bản vẽ chi tiết, bản vẽ lắp, bản vẽ nhà.',
        'Quy ước vẽ ren.',
      ] },
      { h: 'Phần cơ khí' },
      { ul: [
        'Vật liệu cơ khí.',
        'Dụng cụ đo, vạch dấu, tháo lắp.',
        'Cưa, dũa, khoan.',
        'Mối ghép cố định và động.',
        'Truyền chuyển động: đai, bánh răng, xích.',
      ] },
      { note: 'Luyện đọc bản vẽ và làm bài tập tính tỉ số truyền.' },
    ],
    examples: [
      { q: 'Sắp xếp 3 hình chiếu trên bản vẽ (TCVN).', a: 'Đứng giữa, bằng ở dưới đứng, cạnh ở bên phải đứng.' },
      { q: 'Tỉ số truyền i=3 nghĩa là gì?', a: 'Bánh dẫn quay 3 vòng thì bánh bị dẫn quay 1 vòng.' },
    ],
  },

  'S8CN-w19-quiz': {
    topic: 'Vai trò của điện năng trong sản xuất và đời sống',
    intro: 'Điện năng là dạng năng lượng quan trọng nhất hiện đại — vận hành mọi máy móc và đời sống.',
    objectives: [
      'Hiểu vai trò điện năng.',
      'Biết các nguồn sản xuất điện.',
      'Có ý thức tiết kiệm.',
    ],
    theory: [
      { h: 'Vai trò' },
      { ul: [
        'Sản xuất: chạy máy móc, dây chuyền.',
        'Sinh hoạt: thắp sáng, nấu ăn, giải trí.',
        'Giao thông: tàu điện, xe điện.',
        'Y tế, giáo dục, truyền thông.',
      ] },
      { h: 'Sản xuất điện năng' },
      { ul: [
        'Thuỷ điện (sông).',
        'Nhiệt điện (than, dầu, khí).',
        'Điện hạt nhân.',
        'Năng lượng tái tạo: mặt trời, gió.',
      ] },
      { h: 'Truyền tải' },
      { p: 'Điện sản xuất → đường dây cao thế → trạm biến áp → hộ tiêu thụ.' },
      { note: 'Việt Nam đang phát triển mạnh điện mặt trời và điện gió.' },
    ],
    examples: [
      { q: 'Vì sao điện được truyền tải ở điện áp cao?', a: 'Để giảm tổn hao do toả nhiệt trên đường dây dài.' },
      { q: 'Kể 3 nguồn điện tái tạo.', a: 'Mặt trời, gió, thuỷ triều/sóng biển.' },
    ],
  },

  'S8CN-w20-quiz': {
    topic: 'An toàn điện',
    intro: 'Điện rất hữu ích nhưng cũng rất nguy hiểm — hiểu nguyên tắc an toàn để bảo vệ bản thân và gia đình.',
    objectives: [
      'Nêu được nguyên nhân tai nạn điện.',
      'Biết biện pháp an toàn.',
      'Biết sơ cứu khi bị điện giật.',
    ],
    theory: [
      { h: 'Nguyên nhân tai nạn điện' },
      { ul: [
        'Chạm vào dây có điện do hỏng vỏ cách điện.',
        'Vi phạm khoảng cách an toàn với đường dây cao áp.',
        'Sử dụng đồ điện hỏng, ẩm ướt.',
      ] },
      { h: 'Biện pháp an toàn' },
      { ul: [
        'Không tự ý sửa điện khi chưa có chuyên môn.',
        'Tay khô, đứng trên vật cách điện khi tiếp xúc.',
        'Dùng aptomat (CB) chống dòng dò.',
        'Ngắt điện trước khi sửa chữa.',
      ] },
      { h: 'Sơ cứu khi điện giật' },
      { ul: [
        'NGẮT NGUỒN trước (cầu dao, aptomat).',
        'Không dùng tay không kéo nạn nhân.',
        'Đặt nạn nhân nằm thoáng, hô hấp nhân tạo nếu cần.',
        'Gọi 115.',
      ] },
      { note: 'Dòng điện 0.05A đã có thể gây tử vong.' },
    ],
    examples: [
      { q: 'Thấy người bị điện giật, việc đầu tiên cần làm là gì?', a: 'Ngắt nguồn điện (đóng cầu dao). Không lao vào kéo bằng tay không.' },
      { q: 'Tay ướt có nên cầm phích cắm?', a: 'Tuyệt đối không. Nước dẫn điện, dễ bị giật.' },
    ],
  },

  'S8CN-w21-quiz': {
    topic: 'Dụng cụ bảo vệ an toàn điện và sơ cứu nạn nhân bị điện giật',
    intro: 'Để làm việc với điện an toàn, cần có dụng cụ chuyên dụng và biết kĩ năng sơ cứu.',
    objectives: [
      'Biết các dụng cụ bảo vệ an toàn điện.',
      'Hiểu nguyên tắc và kĩ thuật sơ cứu điện giật.',
      'Thực hành (mô phỏng) hô hấp nhân tạo.',
    ],
    theory: [
      { h: 'Dụng cụ bảo vệ' },
      { ul: [
        'Găng tay cao su cách điện.',
        'Ủng cao su, thảm cao su.',
        'Kìm có cán cách điện, tua-vít cách điện.',
        'Bút thử điện.',
      ] },
      { h: 'Sơ cứu — quy trình' },
      { ul: [
        'Ngắt nguồn điện.',
        'Tách nạn nhân khỏi nguồn (dùng vật khô, cách điện).',
        'Đặt nằm nghiêng, kiểm tra thở, mạch.',
        'Hô hấp nhân tạo + ép tim ngoài lồng ngực nếu ngừng tim.',
        'Gọi cấp cứu 115.',
      ] },
      { h: 'Lưu ý' },
      { p: 'Không được dùng tay không, không được tưới nước nếu chưa ngắt điện.' },
      { note: 'Hô hấp nhân tạo: 30 lần ép tim + 2 lần thổi ngạt, lặp lại đến khi nạn nhân thở.' },
    ],
    examples: [
      { q: 'Dụng cụ nào dùng để kiểm tra có điện hay không?', a: 'Bút thử điện — đèn sáng nếu có điện.' },
      { q: 'Tách nạn nhân khỏi nguồn nên dùng gì?', a: 'Vật khô, cách điện: gậy gỗ khô, dép cao su, vải khô dày.' },
    ],
  },

  'S8CN-w22-quiz': {
    topic: 'Vật liệu kĩ thuật điện',
    intro: 'Vật liệu điện gồm 3 nhóm: dẫn điện, cách điện và dẫn từ — mỗi loại có công dụng khác nhau.',
    objectives: [
      'Phân loại được vật liệu điện.',
      'Nêu tính chất và ứng dụng.',
      'Liên hệ thiết bị thực tế.',
    ],
    theory: [
      { h: 'Vật liệu dẫn điện' },
      { p: 'Điện trở suất nhỏ. Dùng làm dây dẫn, đường dây.' },
      { ul: [
        'Đồng: dẫn điện tốt, mềm — dùng cho dây trong nhà.',
        'Nhôm: nhẹ, rẻ — dùng cho đường dây tải điện.',
      ] },
      { h: 'Vật liệu cách điện' },
      { p: 'Điện trở suất rất lớn. Dùng làm vỏ bọc dây, đế ổ cắm, vỏ thiết bị.' },
      { ul: ['Nhựa, cao su, sứ, thuỷ tinh, gỗ khô.'] },
      { h: 'Vật liệu dẫn từ' },
      { p: 'Cho từ thông đi qua dễ. Dùng làm lõi máy biến áp, động cơ điện. Ví dụ: thép kĩ thuật điện.' },
      { note: 'Một dây điện thường gồm: lõi đồng (dẫn) + vỏ nhựa (cách điện).' },
    ],
    examples: [
      { q: 'Vì sao dây tải điện cao thế hay làm bằng nhôm?', a: 'Nhôm nhẹ, rẻ, dẫn điện đủ tốt — tiết kiệm khối lượng cột.' },
      { q: 'Vỏ bọc dây điện làm bằng vật liệu gì?', a: 'Cách điện: nhựa PVC, cao su.' },
    ],
  },

  'S8CN-w23-quiz': {
    topic: 'Đồ dùng điện — Phân loại',
    intro: 'Đồ dùng điện được phân loại theo nguyên lý chuyển hoá năng lượng: điện-nhiệt, điện-quang, điện-cơ.',
    objectives: [
      'Phân loại đồ dùng điện theo nguyên lý.',
      'Nêu ví dụ mỗi nhóm.',
      'Hiểu sơ lược nguyên lý.',
    ],
    theory: [
      { h: '3 nhóm chính' },
      { ul: [
        'Điện – Nhiệt: bàn là, nồi cơm, ấm điện, lò vi sóng.',
        'Điện – Quang: bóng đèn các loại.',
        'Điện – Cơ: quạt, máy bơm, máy xay, động cơ.',
      ] },
      { h: 'Nguyên lý' },
      { ul: [
        'Điện – Nhiệt: dòng qua dây điện trở toả nhiệt.',
        'Điện – Quang: sợi đốt nóng sáng (sợi đốt), hoặc phóng điện trong khí (huỳnh quang/LED).',
        'Điện – Cơ: dòng điện qua cuộn dây sinh từ trường làm trục quay.',
      ] },
      { h: 'Nhãn năng lượng' },
      { p: 'Đồ dùng điện ngày nay có nhãn ngôi sao — càng nhiều sao càng tiết kiệm điện.' },
      { note: 'Một số đồ dùng kết hợp nhiều nguyên lý: máy sấy tóc (điện-cơ + điện-nhiệt).' },
    ],
    examples: [
      { q: 'Quạt điện thuộc nhóm nào?', a: 'Điện – Cơ (động cơ điện làm cánh quạt quay).' },
      { q: 'Bóng đèn LED thuộc nhóm nào?', a: 'Điện – Quang.' },
    ],
  },

  'S8CN-w24-quiz': {
    topic: 'Đồ dùng điện loại điện-nhiệt — Bàn là, nồi cơm',
    intro: 'Đồ dùng điện-nhiệt biến điện thành nhiệt bằng dây điện trở. Bàn là và nồi cơm là 2 ví dụ phổ biến.',
    objectives: [
      'Hiểu nguyên lý điện-nhiệt.',
      'Biết cấu tạo bàn là, nồi cơm.',
      'Biết cách sử dụng và bảo quản an toàn.',
    ],
    theory: [
      { h: 'Nguyên lý' },
      { p: 'Dòng điện qua dây điện trở (nichrome) làm nóng dây. Nhiệt truyền cho vật cần làm nóng.' },
      { h: 'Bàn là' },
      { ul: [
        'Dây điện trở dẹp dán dưới đế nhôm.',
        'Rơ-le nhiệt để khống chế nhiệt độ.',
        'Núm điều chỉnh theo loại vải.',
      ] },
      { h: 'Nồi cơm điện' },
      { ul: [
        'Mâm nhiệt ở đáy.',
        'Rơ-le tự ngắt khi cơm chín (nhiệt độ cảm biến).',
        'Chế độ giữ ấm.',
      ] },
      { note: 'Đồ điện-nhiệt thường công suất lớn — không cắm chung ổ với nhiều thiết bị khác.' },
    ],
    examples: [
      { q: 'Tại sao nồi cơm tự chuyển sang chế độ giữ ấm?', a: 'Rơ-le cảm nhận nhiệt độ vượt 100°C (nước đã bay hơi hết) thì ngắt mâm nhiệt chính, chuyển sang sợi đốt giữ ấm.' },
      { q: 'Bàn là công suất 1000W cắm chung ổ với máy điều hoà có nên không?', a: 'Không nên — tổng công suất lớn dễ gây quá tải, chập điện.' },
    ],
  },

  'S8CN-w25-quiz': {
    topic: 'Đồ dùng điện loại điện-quang — Bóng đèn sợi đốt và huỳnh quang',
    intro: 'Bóng đèn biến điện thành ánh sáng. Có 3 loại chính: sợi đốt, huỳnh quang, LED — hiệu suất rất khác nhau.',
    objectives: [
      'Hiểu nguyên lý mỗi loại bóng đèn.',
      'So sánh hiệu suất, tuổi thọ.',
      'Chọn bóng đèn phù hợp.',
    ],
    theory: [
      { h: 'Bóng sợi đốt' },
      { p: 'Sợi vôn-fram trong bóng chân không, dòng điện đốt nóng đến phát sáng. Hiệu suất thấp (chỉ 5%), nóng nhiều, tuổi thọ 1000 giờ.' },
      { h: 'Bóng huỳnh quang (tuýp)' },
      { p: 'Phóng điện trong hơi thuỷ ngân tạo tia UV, lớp bột huỳnh quang chuyển thành ánh sáng. Hiệu suất ~25%, tuổi thọ 8000 giờ.' },
      { h: 'Bóng LED' },
      { p: 'Diode phát sáng trực tiếp. Hiệu suất cao nhất (~50%), tuổi thọ 25000–50000 giờ.' },
      { h: 'So sánh' },
      { ul: [
        'Sáng/W: LED > Huỳnh quang > Sợi đốt.',
        'Giá ban đầu: LED > HQ > Sợi đốt.',
        'Tổng chi phí dài hạn: LED rẻ nhất.',
      ] },
      { note: 'Bóng sợi đốt hầu như không còn được sản xuất do tiêu hao điện lớn.' },
    ],
    examples: [
      { q: 'Vì sao LED phổ biến hơn sợi đốt?', a: 'Tiết kiệm điện, tuổi thọ dài, không nóng — tổng chi phí thấp hơn nhiều.' },
      { q: 'Bóng huỳnh quang hỏng có nên vứt thường?', a: 'Không. Có chứa thuỷ ngân nên cần thu gom riêng theo quy định.' },
    ],
  },

  'S8CN-w26-quiz': {
    topic: 'Đồ dùng điện loại điện-cơ — Quạt điện, máy bơm',
    intro: 'Đồ dùng điện-cơ dùng động cơ điện để tạo chuyển động cơ học. Quạt, máy bơm, máy xay là ví dụ.',
    objectives: [
      'Hiểu nguyên lý động cơ điện.',
      'Biết cấu tạo quạt và máy bơm.',
      'Biết bảo quản và xử lý sự cố nhỏ.',
    ],
    theory: [
      { h: 'Nguyên lý động cơ điện' },
      { p: 'Dòng điện qua cuộn dây sinh từ trường, tác dụng với nam châm làm rotor quay.' },
      { h: 'Quạt điện' },
      { ul: [
        'Stator (cuộn dây cố định).',
        'Rotor (cánh quạt + trục quay).',
        'Tụ điện khởi động.',
        'Hộp số: chuyển tốc độ.',
      ] },
      { h: 'Máy bơm nước' },
      { ul: [
        'Động cơ điện + cánh bơm.',
        'Hút và đẩy nước theo nguyên lý ly tâm.',
      ] },
      { h: 'Bảo dưỡng' },
      { ul: [
        'Tra dầu trục, vệ sinh cánh.',
        'Kiểm tra dây dẫn, công tắc.',
      ] },
      { note: 'Máy bơm chạy khô (không có nước) có thể cháy mô tơ.' },
    ],
    examples: [
      { q: 'Quạt chạy yếu, có thể do nguyên nhân nào?', a: 'Tụ điện yếu, trục bị khô dầu, cánh quạt bám bụi nhiều.' },
      { q: 'Máy bơm không hút được nước có thể do gì?', a: 'Mất chân không, hỏng cánh bơm, nguồn điện yếu, hoặc bơm chạy khô.' },
    ],
  },

  'S8CN-w27-quiz': {
    topic: 'Máy biến áp 1 pha',
    intro: 'Máy biến áp tăng hoặc giảm điện áp xoay chiều mà không đổi tần số — thiết yếu cho truyền tải và sử dụng điện.',
    objectives: [
      'Hiểu cấu tạo máy biến áp.',
      'Hiểu nguyên lý tăng/giảm áp.',
      'Tính toán đơn giản.',
    ],
    theory: [
      { h: 'Cấu tạo' },
      { ul: [
        'Lõi thép kĩ thuật điện (dẫn từ).',
        'Cuộn dây sơ cấp (N1).',
        'Cuộn dây thứ cấp (N2).',
      ] },
      { h: 'Nguyên lý' },
      { p: 'Dòng xoay chiều ở sơ cấp tạo từ thông biến thiên qua lõi thép, cảm ứng sinh điện áp ở thứ cấp.' },
      { h: 'Công thức' },
      { p: 'U1/U2 = N1/N2. N2 > N1 — tăng áp. N2 < N1 — giảm áp.' },
      { note: 'Máy biến áp chỉ làm việc với điện xoay chiều (AC).' },
    ],
    examples: [
      { q: 'Sơ cấp 220V, 1100 vòng. Thứ cấp 110V cần bao nhiêu vòng?', a: 'N2 = N1 × U2/U1 = 1100 × 110/220 = 550 vòng.' },
      { q: 'Máy biến áp có dùng được với pin (DC) không?', a: 'Không — pin cho dòng 1 chiều, không tạo từ thông biến thiên, không cảm ứng được.' },
    ],
  },

  'S8CN-w28-quiz': {
    topic: 'Đặc điểm mạng điện trong nhà',
    intro: 'Mạng điện trong nhà cấp điện cho thiết bị. Hiểu đặc điểm giúp sử dụng an toàn và hiệu quả.',
    objectives: [
      'Nêu được đặc điểm mạng điện trong nhà.',
      'Phân biệt các phần của mạng.',
      'Hiểu yêu cầu cơ bản.',
    ],
    theory: [
      { h: 'Đặc điểm' },
      { ul: [
        'Cấp điện áp 220V/50Hz (Việt Nam).',
        'Đồ dùng nối song song.',
        'Mỗi đồ dùng có công suất riêng.',
        'Có thiết bị bảo vệ (cầu chì, aptomat).',
      ] },
      { h: 'Các phần của mạng' },
      { ul: [
        'Mạch chính: từ công tơ vào nhà.',
        'Mạch nhánh: chia ra các phòng.',
        'Thiết bị đóng cắt, bảo vệ.',
        'Đồ dùng điện.',
      ] },
      { h: 'Yêu cầu' },
      { ul: [
        'An toàn cho người và thiết bị.',
        'Bền, dễ sử dụng và sửa chữa.',
        'Đảm bảo phù hợp công suất tải.',
      ] },
      { note: 'Tổng công suất các thiết bị không vượt công suất cho phép của dây dẫn.' },
    ],
    examples: [
      { q: 'Mạng điện VN dùng điện áp bao nhiêu?', a: '220V, tần số 50Hz.' },
      { q: 'Các đồ dùng điện trong nhà nối thế nào?', a: 'Nối song song — mỗi đồ vẫn có 220V; bật/tắt độc lập.' },
    ],
  },

  'S8CN-w29-quiz': {
    topic: 'Thiết bị đóng-cắt và lấy điện',
    intro: 'Thiết bị đóng-cắt điều khiển dòng điện; thiết bị lấy điện cấp điện cho đồ dùng di động.',
    objectives: [
      'Biết các thiết bị đóng-cắt.',
      'Biết các thiết bị lấy điện.',
      'Sử dụng đúng cách.',
    ],
    theory: [
      { h: 'Thiết bị đóng-cắt' },
      { ul: [
        'Công tắc: 1 chiều, 2 chiều.',
        'Cầu dao: ngắt mạch tổng.',
        'Aptomat (CB): tự ngắt khi quá tải.',
      ] },
      { h: 'Thiết bị lấy điện' },
      { ul: [
        'Ổ cắm điện (2 chấu, 3 chấu).',
        'Phích cắm.',
      ] },
      { h: 'Yêu cầu' },
      { p: 'Lắp đặt đúng kĩ thuật, đảm bảo dòng định mức phù hợp với tải. Ổ cắm có chấu tiếp đất an toàn hơn.' },
      { note: 'Công tắc đặt phía dây pha, không phải dây trung tính.' },
    ],
    examples: [
      { q: 'Khi tắt công tắc đèn, dòng điện bị cắt ở đâu?', a: 'Tại tiếp điểm công tắc — mạch hở, dòng không qua.' },
      { q: 'Ổ cắm 3 chấu khác 2 chấu ở điểm nào?', a: 'Có thêm chấu tiếp đất giúp an toàn — nếu thiết bị bị rò điện, dòng đi xuống đất qua chấu này.' },
    ],
  },

  'S8CN-w30-quiz': {
    topic: 'Thiết bị bảo vệ — Cầu chì, CB chống dòng dò (RCBO)',
    intro: 'Thiết bị bảo vệ ngắt mạch khi có sự cố — bảo vệ thiết bị và tính mạng con người.',
    objectives: [
      'Hiểu nguyên lý cầu chì.',
      'Hiểu nguyên lý RCBO/RCD chống dòng dò.',
      'Biết chọn thiết bị bảo vệ phù hợp.',
    ],
    theory: [
      { h: 'Cầu chì' },
      { p: 'Dây chảy nóng đứt khi dòng vượt định mức (ngắn mạch). Cần thay khi đã đứt.' },
      { h: 'Aptomat (CB/MCB)' },
      { p: 'Tự ngắt khi quá tải. Có thể bật lại sau khi sửa lỗi.' },
      { h: 'RCBO / RCD chống dòng dò' },
      { ul: [
        'So sánh dòng đi và về.',
        'Nếu chênh lệch (do rò xuống đất / vào người) thì ngắt mạch trong < 30ms.',
        'Bảo vệ tính mạng — bắt buộc cho phòng tắm, máy nước nóng.',
      ] },
      { note: 'Lắp RCBO cho máy nước nóng là yêu cầu an toàn quan trọng nhất trong nhà.' },
    ],
    examples: [
      { q: 'Vì sao RCBO ngắt nhanh hơn cầu chì khi điện rò vào người?', a: 'RCBO phát hiện dòng dò rất nhỏ (30mA) trong vài chục ms, đủ ngắt trước khi gây tử vong.' },
      { q: 'Máy nước nóng có cần RCBO không?', a: 'Cần bắt buộc — vì có nước, rủi ro điện rò sang cơ thể rất cao.' },
    ],
  },

  'S8CN-w31-quiz': {
    topic: 'Sơ đồ điện — Sơ đồ nguyên lý và sơ đồ lắp đặt',
    intro: 'Sơ đồ điện biểu diễn mạng điện bằng kí hiệu chuẩn — có 2 dạng phục vụ 2 mục đích khác nhau.',
    objectives: [
      'Phân biệt sơ đồ nguyên lý và sơ đồ lắp đặt.',
      'Biết các kí hiệu cơ bản.',
      'Đọc được sơ đồ đơn giản.',
    ],
    theory: [
      { h: 'Sơ đồ nguyên lý' },
      { p: 'Chỉ nêu mối liên hệ điện giữa các phần tử, không tính vị trí thật. Dùng để hiểu nguyên lý hoạt động.' },
      { h: 'Sơ đồ lắp đặt' },
      { p: 'Thể hiện vị trí lắp đặt thực tế của các thiết bị trên mặt bằng. Dùng khi thi công.' },
      { h: 'Kí hiệu cơ bản' },
      { ul: [
        'Công tắc, ổ cắm, bóng đèn, aptomat, cầu chì.',
        'Đường dây pha (L), trung tính (N), tiếp đất (PE).',
      ] },
      { note: 'Khi thi công cần cả 2 sơ đồ: nguyên lý để hiểu, lắp đặt để biết vị trí.' },
    ],
    examples: [
      { q: 'Sơ đồ nào dùng khi cần biết "ở đâu lắp công tắc"?', a: 'Sơ đồ lắp đặt.' },
      { q: 'Sơ đồ nào dùng để hiểu "công tắc điều khiển đèn nào"?', a: 'Sơ đồ nguyên lý.' },
    ],
  },

  'S8CN-w32-quiz': {
    topic: 'Thiết kế mạch điện đơn giản — 1 công tắc điều khiển 1 bóng đèn',
    intro: 'Mạch điện cơ bản nhất: 1 công tắc đóng/ngắt 1 bóng đèn. Hiểu nó là bước đầu để thiết kế mạch phức tạp hơn.',
    objectives: [
      'Vẽ sơ đồ nguyên lý mạch 1 công tắc 1 bóng.',
      'Vẽ sơ đồ lắp đặt.',
      'Liệt kê vật tư cần thiết.',
    ],
    theory: [
      { h: 'Sơ đồ nguyên lý' },
      { p: 'Dây pha (L) → cầu chì/CB → công tắc → bóng đèn → dây trung tính (N).' },
      { h: 'Sơ đồ lắp đặt' },
      { p: 'Bóng đèn lắp giữa trần; công tắc đặt sát cửa, cao 1.2m; dây đi trong ống nhựa âm tường.' },
      { h: 'Vật tư' },
      { ul: [
        'Dây điện 1.5mm² (1 cuộn).',
        'Bóng đèn LED + đui đèn.',
        'Công tắc 1 chiều.',
        'CB nhánh 6A (nếu cần).',
        'Ống luồn dây, băng dính.',
      ] },
      { note: 'Mạch đơn giản nhưng phải đảm bảo công tắc lắp ở dây pha.' },
    ],
    examples: [
      { q: 'Trong mạch 1 công tắc 1 bóng, công tắc nên lắp ở dây pha hay trung tính?', a: 'Dây pha — để khi tắt, đèn không còn điện áp nguy hiểm.' },
      { q: 'Bóng đèn 60W cần dây tiết diện bao nhiêu?', a: 'Dây 1.5mm² là đủ — chịu được khoảng 16A (~3500W).' },
    ],
  },

  'S8CN-w33-quiz': {
    topic: 'Sử dụng hợp lý và tiết kiệm điện năng',
    intro: 'Tiết kiệm điện là tiết kiệm tài nguyên, tiền bạc và bảo vệ môi trường. Hộ gia đình có nhiều cách tiết kiệm hiệu quả.',
    objectives: [
      'Hiểu giờ cao điểm và lợi ích tránh giờ cao.',
      'Biện pháp tiết kiệm điện thực tế.',
      'Có ý thức tiết kiệm.',
    ],
    theory: [
      { h: 'Vì sao phải tiết kiệm?' },
      { ul: [
        'Giảm chi phí gia đình.',
        'Giảm phát thải khí nhà kính.',
        'Bảo đảm an ninh năng lượng.',
      ] },
      { h: 'Giờ cao điểm' },
      { p: 'Thường 17:00–20:00 — nhu cầu lớn, áp lực lên lưới. Giá điện sản xuất giờ cao điểm cao hơn.' },
      { h: 'Biện pháp gia đình' },
      { ul: [
        'Dùng đèn LED thay sợi đốt.',
        'Tắt đèn, quạt khi rời phòng.',
        'Đặt điều hoà 26°C, đóng kín cửa.',
        'Tắt nguồn TV, máy tính khi không dùng (không để chờ).',
        'Dùng máy giặt/máy rửa bát khi đầy.',
      ] },
      { note: 'Chế độ standby vẫn ngốn điện — rút phích sau khi sạc.' },
    ],
    examples: [
      { q: 'Vì sao nên đặt điều hoà 26°C thay vì 20°C?', a: 'Mỗi 1°C tăng tiết kiệm 5-7% điện; 26°C đủ mát mà giảm hoá đơn đáng kể.' },
      { q: 'Sạc điện thoại xong cần làm gì?', a: 'Rút phích sạc — vẫn còn ngốn lượng nhỏ điện ở chế độ chờ.' },
    ],
  },

  'S8CN-w34-quiz': {
    topic: 'Tính toán tiêu thụ điện năng trong gia đình',
    intro: 'Hiểu cách tính điện năng giúp em biết hoá đơn từ đâu mà có và cách giảm.',
    objectives: [
      'Hiểu đơn vị đo: kWh.',
      'Tính được điện năng tiêu thụ của thiết bị.',
      'Tính hoá đơn đơn giản.',
    ],
    theory: [
      { h: 'Công thức' },
      { p: 'A = P × t. A: điện năng (kWh), P: công suất (kW), t: thời gian (giờ).' },
      { h: 'Đơn vị kWh (số điện)' },
      { p: '1 kWh là điện năng tiêu thụ trong 1 giờ của thiết bị có công suất 1 kW.' },
      { h: 'Hoá đơn EVN' },
      { p: 'Tính theo bậc thang. Dùng càng nhiều giá càng cao. Số điện đo bằng công-tơ.' },
      { note: 'Trên nhãn thiết bị thường ghi công suất (W) — chia 1000 để ra kW.' },
    ],
    examples: [
      { q: 'Bóng đèn 100W bật 5h tốn bao nhiêu kWh?', a: 'A = 0.1kW × 5h = 0.5 kWh.' },
      { q: 'Điều hoà 1500W chạy 8h mỗi đêm, 30 ngày tốn bao nhiêu kWh?', a: 'A = 1.5 × 8 × 30 = 360 kWh.' },
    ],
  },

  'S8CN-w35-quiz': {
    topic: 'Ôn tập cuối năm',
    intro: 'Tổng kết toàn bộ chương trình Công nghệ 8 — vẽ kĩ thuật, cơ khí và điện.',
    objectives: [
      'Hệ thống 3 phần chính.',
      'Vận dụng vào bài tập tổng hợp.',
      'Chuẩn bị bước vào lớp 9.',
    ],
    theory: [
      { h: 'Vẽ kĩ thuật' },
      { ul: ['Hình chiếu, hình cắt, bản vẽ chi tiết/lắp/nhà, ren.'] },
      { h: 'Cơ khí' },
      { ul: ['Vật liệu, dụng cụ, gia công cưa-dũa-khoan, mối ghép, truyền chuyển động.'] },
      { h: 'Điện' },
      { ul: [
        'Vai trò điện, an toàn điện, vật liệu điện.',
        'Đồ dùng điện 3 loại, máy biến áp.',
        'Mạng điện trong nhà, thiết bị, sơ đồ điện.',
        'Tiết kiệm và tính tiêu thụ điện năng.',
      ] },
      { note: 'Lớp 9 sẽ học sâu hơn về điện và thực hành lắp mạch.' },
    ],
    examples: [
      { q: 'Liệt kê 3 nội dung lớn của Công nghệ 8.', a: 'Vẽ kĩ thuật; Cơ khí; Điện.' },
      { q: 'Quạt 75W chạy 24h tốn bao nhiêu kWh?', a: '0.075 × 24 = 1.8 kWh.' },
    ],
  },
};
