// ============================================================
// Lớp 2 · MĨ THUẬT — Lý thuyết + Ví dụ cho 36 tuần (GDPT 2018)
// Key TRÙNG id quiz: "P2MT-wNN-quiz".
// Nội dung: yếu tố tạo hình, màu cơ bản & pha màu, đậm-nhạt,
// vẽ đề tài, trang trí, xé dán, tranh dân gian Đông Hồ, nặn đất,
// màu nóng – màu lạnh. Lý thuyết hướng dẫn CÁCH LÀM từng bước.
// ============================================================

export const P2MT_LESSONS = {
  // ──────────────── HK1 ────────────────
  'P2MT-w01-quiz': {
    topic: 'Đường thẳng – đường cong',
    intro: 'Các em ơi, mọi bức tranh đều bắt đầu từ những đường nét. Hôm nay cô trò mình làm quen với hai loại đường cơ bản nhất nhé!',
    objectives: [
      'Phân biệt được đường thẳng và đường cong.',
      'Biết dùng mỗi loại đường để vẽ vật phù hợp.',
    ],
    theory: [
      { h: 'Đường thẳng' },
      { p: 'Đường thẳng là đường kẻ thẳng, không gấp khúc. Em đặt thước rồi kéo bút theo cạnh thước là có đường thẳng. Đường thẳng cho cảm giác cứng cáp, chắc chắn.' },
      { ul: ['Dùng đường thẳng vẽ: cạnh bàn, mép bảng, cột nhà, đường chân trời.'] },
      { h: 'Đường cong' },
      { p: 'Đường cong là đường uốn lượn, mềm mại. Em cầm bút và đưa tay nhẹ nhàng theo hình vòng. Đường cong cho cảm giác mềm mại, uyển chuyển.' },
      { ul: ['Dùng đường cong vẽ: thân con rắn, cầu vồng, sóng nước, đám mây.', 'Ngoài ra còn đường gãy khúc (zíc-zắc) gợi tia chớp — mạnh và gấp.'] },
    ],
    examples: [
      { q: 'Vẽ một ngôi nhà có cây bên cạnh, em dùng đường gì?', a: 'Tường và mái nhà vẽ bằng đường thẳng cho chắc chắn. Tán cây và đám mây vẽ bằng đường cong cho mềm mại. Phối hai loại đường, bức tranh sẽ sinh động.' },
      { q: 'Vẽ con sóng biển nên dùng đường nào?', a: 'Dùng đường cong lượn sóng nối tiếp nhau, lên xuống đều đặn, sẽ thấy biển như đang gợn sóng.' },
    ],
  },

  'P2MT-w02-quiz': {
    topic: 'Chấm tạo hình',
    intro: 'Một cái chấm bé xíu cũng vẽ được cả bầu trời sao đấy các em! Hôm nay mình học cách dùng chấm để tạo hình nhé.',
    objectives: [
      'Biết chấm to – nhỏ, thưa – dày tạo cảm giác khác nhau.',
      'Biết dùng nhiều chấm để tạo đường, hình và mảng.',
    ],
    theory: [
      { h: 'Chấm là gì?' },
      { p: 'Chấm là dấu nhỏ em tạo ra khi ấn đầu bút màu hoặc bông tăm xuống giấy. Chấm tròn, nhỏ và rất dễ làm.' },
      { h: 'Chấm tạo nên điều kì diệu' },
      { ul: ['Nhiều chấm xếp thành hàng sẽ thành một đường.', 'Chấm vây quanh sẽ thành một hình.', 'Chấm dày kín tạo mảng đậm; chấm thưa tạo mảng nhẹ, thoáng.'] },
      { p: 'Chấm to – chấm nhỏ xen kẽ giúp tranh có nhịp điệu, sinh động hơn.' },
      { note: 'Dùng đầu bút màu hoặc bông tăm để chấm cho tròn và đều nhé!' },
    ],
    examples: [
      { q: 'Làm sao vẽ bầu trời đầy sao chỉ bằng chấm?', a: 'Tô nền trời màu xanh đậm. Sau đó dùng bút màu trắng hoặc vàng chấm nhiều chấm nhỏ rải khắp trời. Chấm to làm sao sáng, chấm nhỏ làm sao xa.' },
      { q: 'Tạo một quả bóng bằng chấm thế nào?', a: 'Vẽ một vòng tròn, rồi chấm dày các chấm bên trong cho kín mảng. Phần mép chấm thưa hơn để quả bóng trông tròn.' },
    ],
  },

  'P2MT-w03-quiz': {
    topic: 'Phối hợp đường nét cơ bản',
    intro: 'Khi biết kết hợp nhiều loại đường, em sẽ vẽ được cả một bức tranh đẹp! Cùng học cách phối hợp nào.',
    objectives: [
      'Biết kết hợp đường thẳng, đường cong, đường gãy trong một bức tranh.',
      'Chọn đúng loại đường cho từng vật.',
    ],
    theory: [
      { h: 'Vì sao phải phối hợp đường?' },
      { p: 'Nếu chỉ dùng một loại đường, tranh sẽ đơn điệu. Phối hợp nhiều đường giúp tranh phong phú, hấp dẫn.' },
      { h: 'Chọn đường cho từng vật' },
      { ul: ['Mái nhà ngói: hai đường thẳng nghiêng chụm đỉnh.', 'Sóng biển, khói: đường lượn sóng.', 'Núi xa: đường cong nhấp nhô.', 'Mép lá cây: đường cong có răng cưa nhẹ.'] },
      { note: 'Trước khi vẽ, em hãy nghĩ: vật này cứng hay mềm? Cứng dùng đường thẳng, mềm dùng đường cong.' },
    ],
    examples: [
      { q: 'Vẽ cánh đồng lúa và dãy núi xa, em phối hợp đường gì?', a: 'Ruộng lúa dùng các đường ngang thẳng. Dãy núi xa dùng đường cong nhấp nhô. Đường lúa lượn nhẹ ở gần để sinh động.' },
      { q: 'Vẽ một con thuyền trên sông, dùng những đường nào?', a: 'Thân thuyền dùng đường cong; cột buồm dùng đường thẳng đứng; mặt sông dùng đường lượn sóng. Phối ba loại đường là có bức tranh sông nước.' },
    ],
  },

  'P2MT-w04-quiz': {
    topic: 'Màu cơ bản: ĐỎ',
    intro: 'Các em có biết màu đỏ rực rỡ trên lá cờ Tổ quốc không? Hôm nay mình tìm hiểu màu đỏ — một trong ba màu cơ bản.',
    objectives: [
      'Biết đỏ là một trong ba màu cơ bản và thuộc nhóm màu nóng.',
      'Nhận ra vật có màu đỏ và cảm xúc màu đỏ gợi lên.',
    ],
    theory: [
      { h: 'Ba màu cơ bản' },
      { p: 'Có ba màu cơ bản là: đỏ, vàng, xanh lam. Đây là những màu gốc, không pha từ màu nào khác.' },
      { h: 'Màu đỏ' },
      { ul: ['Đỏ là màu nóng, gợi cảm giác ấm áp, mạnh mẽ, vui tươi.', 'Vật màu đỏ: quả cà chua chín, lá cờ Tổ quốc, đèn giao thông.', 'Đèn đỏ nghĩa là dừng lại.'] },
      { note: 'Lá cờ Tổ quốc Việt Nam có nền đỏ, ngôi sao vàng năm cánh ở giữa.' },
    ],
    examples: [
      { q: 'Tô một quả cà chua chín, em dùng màu gì và tô thế nào?', a: 'Dùng màu đỏ. Tô đều từ trong ra, phần được nắng chiếu tô nhạt hơn một chút để quả trông tròn căng.' },
      { q: 'Vẽ lá cờ Tổ quốc, em tô màu thế nào?', a: 'Tô nền hình chữ nhật màu đỏ. Để chừa ngôi sao năm cánh ở giữa rồi tô màu vàng. Vậy là có lá cờ đỏ sao vàng.' },
    ],
  },

  'P2MT-w05-quiz': {
    topic: 'Màu cơ bản: VÀNG',
    intro: 'Màu vàng tươi như nắng ban mai, như bông hoa hướng dương. Cùng cô tìm hiểu màu vàng nhé!',
    objectives: [
      'Biết vàng là màu cơ bản, thuộc nhóm màu nóng, sáng.',
      'Nhận ra vật có màu vàng và cảm xúc màu vàng gợi lên.',
    ],
    theory: [
      { h: 'Màu vàng' },
      { p: 'Vàng là một trong ba màu cơ bản. Vàng là màu nóng, sáng, gợi cảm giác tươi vui, rực rỡ.' },
      { h: 'Vật có màu vàng' },
      { ul: ['Mặt trời, ánh nắng.', 'Quả chuối chín, bông hoa hướng dương.', 'Ngôi sao trên lá cờ Tổ quốc.'] },
      { note: 'Màu vàng đứng cạnh màu đỏ tạo cảm giác ấm áp, rực rỡ như ngày Tết.' },
    ],
    examples: [
      { q: 'Vẽ ông mặt trời buổi sáng, em tô thế nào?', a: 'Vẽ một hình tròn, tô màu vàng. Vẽ thêm các tia nắng tỏa ra bằng đường thẳng ngắn, cũng tô vàng hoặc cam.' },
      { q: 'Tô bông hoa hướng dương, em dùng màu gì?', a: 'Cánh hoa tô màu vàng tươi. Nhụy ở giữa tô màu nâu. Lá và thân tô màu xanh lá. Bông hoa sẽ rực rỡ như nắng.' },
    ],
  },

  'P2MT-w06-quiz': {
    topic: 'Màu cơ bản: XANH (lam)',
    intro: 'Bầu trời và biển cả đều mang màu xanh lam dịu mát. Hôm nay mình học màu cơ bản cuối cùng nhé!',
    objectives: [
      'Biết xanh lam là màu cơ bản, thuộc nhóm màu lạnh.',
      'Nhận ra vật có màu xanh lam và cảm xúc nó gợi lên.',
    ],
    theory: [
      { h: 'Màu xanh lam' },
      { p: 'Xanh lam là một trong ba màu cơ bản. Xanh lam là màu lạnh, gợi cảm giác mát mẻ, dịu dàng, bình yên.' },
      { h: 'Vật có màu xanh lam' },
      { ul: ['Bầu trời ban ngày quang đãng.', 'Nước biển, mặt hồ.', 'Áo đồng phục, balo của nhiều bạn.'] },
      { note: 'Nhớ nhé: tím KHÔNG phải màu cơ bản, vì tím được pha từ đỏ và xanh lam.' },
    ],
    examples: [
      { q: 'Vẽ bầu trời và biển, em tô màu thế nào?', a: 'Phần trên tô màu xanh lam nhạt cho bầu trời. Phần dưới tô màu xanh lam đậm hơn cho biển. Vẽ thêm vài đường lượn sóng cho biển sinh động.' },
      { q: 'Tô mặt hồ phẳng lặng, dùng màu gì?', a: 'Dùng màu xanh lam tô đều. Có thể pha thêm chút xanh lá cho hồ trong veo. Tô vài nét trắng làm ánh sáng phản chiếu.' },
    ],
  },

  'P2MT-w07-quiz': {
    topic: 'Pha màu cơ bản',
    intro: 'Điều kì diệu này: chỉ với ba màu cơ bản, em có thể pha ra rất nhiều màu mới! Cùng làm thí nghiệm pha màu nào.',
    objectives: [
      'Nhớ ba công thức pha màu từ hai màu cơ bản.',
      'Biết pha màu để tô đúng vật.',
    ],
    theory: [
      { h: 'Ba công thức pha màu' },
      { ul: ['Đỏ + Vàng = Cam', 'Đỏ + Xanh lam = Tím', 'Vàng + Xanh lam = Lục (xanh lá)'] },
      { h: 'Cách pha' },
      { p: 'Em lấy hai màu cơ bản, trộn đều trên đĩa pha hoặc tô chồng nhẹ lên nhau. Trộn nhiều màu nào hơn thì màu mới sẽ ngả về màu đó.' },
      { note: 'Cam, tím, lục là màu pha, KHÔNG phải màu cơ bản. Đỏ – vàng – xanh lam mới là màu gốc.' },
    ],
    examples: [
      { q: 'Em muốn tô quả cam nhưng chỉ có đỏ và vàng, làm sao?', a: 'Pha đỏ với vàng sẽ ra màu cam. Cho nhiều vàng hơn thì cam tươi sáng, cho nhiều đỏ hơn thì cam đậm. Lấy màu cam đó tô quả cam.' },
      { q: 'Muốn tô lá cây xanh lá, em pha thế nào?', a: 'Pha vàng với xanh lam sẽ ra màu xanh lá (lục). Cho nhiều vàng hơn ra xanh non, cho nhiều xanh lam hơn ra xanh đậm.' },
    ],
  },

  'P2MT-w08-quiz': {
    topic: 'Đậm – nhạt (sắc độ)',
    intro: 'Vì sao có bức tranh nhìn nổi khối, có chiều sâu? Bí mật nằm ở đậm – nhạt đấy các em!',
    objectives: [
      'Hiểu đậm là tối, nhạt là sáng.',
      'Biết tạo đậm – nhạt và dùng để vẽ xa – gần.',
    ],
    theory: [
      { h: 'Đậm – nhạt là gì?' },
      { p: 'Đậm là phần tô tối, nhiều màu. Nhạt là phần tô sáng, ít màu. Một bức tranh đẹp nên có cả đậm và nhạt.' },
      { h: 'Cách tạo đậm – nhạt' },
      { ul: ['Đậm hơn: ấn bút mạnh, tô chồng nhiều lớp.', 'Nhạt hơn: nhấc bút nhẹ, tô một lớp mỏng.', 'Vật ở xa tô nhạt; vật ở gần tô đậm.'] },
      { note: 'Hai vật cạnh nhau, để tách rõ thì một vật tô đậm, một vật tô nhạt.' },
    ],
    examples: [
      { q: 'Vẽ hai quả táo cạnh nhau cho tách rời rõ ràng, em làm sao?', a: 'Tô một quả màu đỏ đậm, quả kia màu đỏ nhạt hơn. Nhờ khác sắc độ, hai quả tách nhau rõ, không bị dính làm một.' },
      { q: 'Vẽ dãy núi xa và núi gần, tô thế nào?', a: 'Núi ở gần tô màu đậm. Núi ở xa tô màu nhạt hơn. Cách tô này làm bức tranh có chiều sâu, núi như lùi ra xa.' },
    ],
  },

  'P2MT-w09-quiz': {
    topic: 'Hình cơ bản: tam giác – vuông – tròn',
    intro: 'Nhìn quanh xem các em: bánh xe tròn, cửa sổ vuông, mái nhà tam giác. Mọi vật đều có hình cơ bản đấy!',
    objectives: [
      'Nhận biết hình tam giác, hình vuông, hình tròn.',
      'Tìm được vật quen thuộc có dạng từng hình.',
    ],
    theory: [
      { h: 'Ba hình cơ bản' },
      { ul: ['Tam giác: có 3 cạnh, 3 góc.', 'Hình vuông: có 4 cạnh bằng nhau, 4 góc vuông.', 'Hình tròn: đường viền là một đường cong khép kín, không có góc.'] },
      { h: 'Vật quanh em' },
      { ul: ['Mái nhà — tam giác.', 'Cửa sổ, viên gạch — hình vuông.', 'Bánh xe, đồng hồ, mặt trời — hình tròn.'] },
      { note: 'Khi vẽ vật khó, em hãy nghĩ nó gần với hình cơ bản nào, rồi vẽ hình đó trước.' },
    ],
    examples: [
      { q: 'Vẽ một chiếc ô tô bằng các hình cơ bản thế nào?', a: 'Thân xe vẽ bằng hình chữ nhật (gần hình vuông kéo dài). Hai bánh xe vẽ bằng hai hình tròn. Cửa kính có thể vẽ bằng hình vuông nhỏ.' },
      { q: 'Vẽ một ngôi nhà bằng hình cơ bản?', a: 'Tường nhà là hình vuông. Mái nhà là tam giác đặt trên tường. Cửa ra vào là hình chữ nhật đứng. Ô cửa sổ là hình vuông nhỏ.' },
    ],
  },

  'P2MT-w10-quiz': {
    topic: 'Vẽ tự do: NGÔI NHÀ',
    intro: 'Mỗi em đều có một ngôi nhà thân yêu. Hôm nay mình tập vẽ ngôi nhà của mình nhé!',
    objectives: [
      'Vẽ được ngôi nhà có đủ tường, mái, cửa.',
      'Biết thêm cảnh vật xung quanh và tô màu cho sinh động.',
    ],
    theory: [
      { h: 'Các bộ phận ngôi nhà' },
      { ul: ['Tường: hình chữ nhật hoặc vuông.', 'Mái: hình tam giác hoặc hình thang.', 'Cửa ra vào, cửa sổ.'] },
      { h: 'Các bước vẽ' },
      { ul: ['Bước 1: vẽ tường (hình chữ nhật).', 'Bước 2: vẽ mái phía trên.', 'Bước 3: thêm cửa, cửa sổ.', 'Bước 4: thêm cây, hoa, đường đi, ông mặt trời.', 'Bước 5: tô màu có đậm – nhạt.'] },
      { note: 'Khói từ ống khói vẽ bằng đường cong uốn lượn cho mềm mại.' },
    ],
    examples: [
      { q: 'Vẽ ngôi nhà mái ngói đỏ, em tô màu thế nào?', a: 'Mái tô màu đỏ, tường tô màu vàng nhạt, cửa tô màu nâu. Thêm cây xanh bên cạnh và ông mặt trời vàng. Phối đậm – nhạt cho nhà nổi bật.' },
      { q: 'Muốn ngôi nhà trông ấm cúng buổi tối, vẽ thế nào?', a: 'Tô nền trời màu xanh đậm, có chấm sao. Cửa sổ tô màu vàng sáng như có đèn bên trong. Ống khói có làn khói cong nhẹ.' },
    ],
  },

  'P2MT-w11-quiz': {
    topic: 'Vẽ tự do: CÁI CÂY',
    intro: 'Cây xanh cho ta bóng mát và không khí trong lành. Cùng cô vẽ một cái cây thật đẹp nhé!',
    objectives: [
      'Vẽ được cây có đủ thân, cành, lá.',
      'Tô màu phù hợp theo mùa.',
    ],
    theory: [
      { h: 'Các bộ phận cây' },
      { ul: ['Rễ: bám xuống đất.', 'Thân: vẽ bằng hai đường dọc song song, hơi cong.', 'Cành: tỏa ra từ thân.', 'Lá: tán lá là mảng tròn hoặc đám mây.'] },
      { h: 'Tô màu theo mùa' },
      { ul: ['Thân cây: màu nâu.', 'Lá mùa hè: xanh lá.', 'Lá mùa thu: vàng, cam, đỏ.'] },
      { note: 'Cây mọc đứng trên mặt đất, đừng vẽ cây lơ lửng giữa trời nhé!' },
    ],
    examples: [
      { q: 'Vẽ cây bàng mùa hè, em làm thế nào?', a: 'Vẽ thân nâu thẳng đứng, hơi to ở gốc. Vẽ các cành tỏa ra. Tán lá là mảng lớn tô màu xanh lá đậm – nhạt khác nhau cho dày dặn.' },
      { q: 'Vẽ cây mùa thu lá rụng?', a: 'Thân nâu, tán lá tô màu vàng và cam. Vẽ thêm vài chiếc lá đang rơi và lá rụng dưới gốc, tô vàng – đỏ. Bức tranh sẽ rất nên thơ.' },
    ],
  },

  'P2MT-w12-quiz': {
    topic: 'Vẽ tự do: CON VẬT YÊU THÍCH',
    intro: 'Em thích con vật nào nhất nào? Hôm nay mình tập vẽ con vật yêu thích của mình nhé!',
    objectives: [
      'Biết vẽ con vật từ khối lớn đến chi tiết.',
      'Nhận ra và vẽ được đặc điểm riêng của mỗi con vật.',
    ],
    theory: [
      { h: 'Các bước vẽ con vật' },
      { ul: ['Bước 1: vẽ khối lớn — đầu và mình.', 'Bước 2: thêm chân, đuôi.', 'Bước 3: thêm chi tiết — mắt, mũi, miệng, tai.', 'Bước 4: tô màu và vẽ cảnh xung quanh.'] },
      { h: 'Đặc điểm riêng' },
      { ul: ['Thỏ: tai dài.', 'Voi: vòi dài, tai to.', 'Mèo: lông mềm, vẽ bằng nét cong ngắn.'] },
      { note: 'Thêm cây cỏ, mặt trời quanh con vật để bức tranh sinh động hơn.' },
    ],
    examples: [
      { q: 'Vẽ con thỏ đang ăn cà rốt, em làm sao?', a: 'Vẽ đầu tròn và mình bầu dục. Thêm hai tai dài, đuôi tròn nhỏ, mắt và mũi. Vẽ củ cà rốt cam trước mặt thỏ. Tô lông thỏ màu trắng hoặc xám.' },
      { q: 'Vẽ con cá vàng bơi trong bể, tô thế nào?', a: 'Thân cá bầu dục, đuôi hình chữ V. Tô thân màu vàng – cam. Vẽ nền nước xanh lam, thêm vài bọt nước tròn nhỏ và rong xanh.' },
    ],
  },

  'P2MT-w13-quiz': {
    topic: 'Vẽ chân dung GIA ĐÌNH',
    intro: 'Gia đình là nơi ấm áp nhất. Hôm nay mình vẽ bức tranh gia đình thân yêu của em nhé!',
    objectives: [
      'Vẽ được các thành viên gia đình với đặc điểm riêng.',
      'Thể hiện tình cảm ấm áp qua nét mặt và khung cảnh.',
    ],
    theory: [
      { h: 'Khuôn mặt người' },
      { p: 'Khuôn mặt gồm: mắt, mũi, miệng, tai và mái tóc. Miệng cười cong lên cho khuôn mặt vui tươi.' },
      { h: 'Phân biệt các thành viên' },
      { ul: ['Người lớn vẽ cao to hơn, em bé vẽ nhỏ hơn.', 'Khác trang phục, khác kiểu tóc để dễ nhận ra bố, mẹ, ông, bà.', 'Đặt gia đình trong nhà, công viên hoặc sân vườn.'] },
      { note: 'Vẽ nét mặt tươi vui, ấm áp để bức tranh gia đình thật hạnh phúc.' },
    ],
    examples: [
      { q: 'Vẽ gia đình bốn người đang đi công viên, em vẽ thế nào?', a: 'Vẽ bố cao nhất, mẹ thấp hơn, hai anh em nhỏ hơn nữa. Mỗi người khác kiểu tóc, khác màu áo. Thêm cây xanh, ghế đá và ông mặt trời. Mọi người đều mỉm cười.' },
      { q: 'Vẽ cảnh cả nhà ăn cơm tối, làm sao?', a: 'Vẽ bàn ăn ở giữa, các thành viên ngồi quanh. Trên bàn có bát cơm, đĩa thức ăn. Nét mặt mọi người tươi vui, ấm cúng.' },
    ],
  },

  'P2MT-w14-quiz': {
    topic: 'Vẽ trường học của em',
    intro: 'Trường học là ngôi nhà thứ hai của em, nơi có thầy cô và bạn bè. Cùng vẽ trường mình nhé!',
    objectives: [
      'Vẽ được trường học có dãy lớp, sân chơi, cột cờ.',
      'Vẽ thêm các bạn và cây xanh cho sinh động.',
    ],
    theory: [
      { h: 'Trường học có gì?' },
      { ul: ['Dãy phòng học: nhiều hình chữ nhật xếp cạnh, có cửa sổ.', 'Cột cờ treo cờ Tổ quốc.', 'Sân chơi, bồn hoa, cây xanh.'] },
      { h: 'Cách vẽ sinh động' },
      { ul: ['Vẽ dãy lớp trước, rồi cột cờ.', 'Thêm các bạn đang chơi đùa giờ ra chơi.', 'Tô đồng phục cùng tông màu.'] },
      { note: 'Sân trường giờ ra chơi rất đông vui, đừng vẽ sân vắng tanh nhé!' },
    ],
    examples: [
      { q: 'Vẽ giờ ra chơi ở sân trường, em vẽ gì?', a: 'Vẽ dãy lớp học phía sau, cột cờ với lá cờ đỏ sao vàng. Sân trước có các bạn nhảy dây, đá cầu, đuổi bắt. Thêm cây xanh và bồn hoa hai bên.' },
      { q: 'Vẽ buổi chào cờ đầu tuần?', a: 'Vẽ cột cờ ở giữa với lá cờ. Các bạn xếp hàng ngay ngắn theo lớp, mặc đồng phục. Phía sau là dãy phòng học. Tô màu tươi sáng cho không khí trang nghiêm mà vui.' },
    ],
  },

  'P2MT-w15-quiz': {
    topic: 'Trang trí đường viền (lặp họa tiết)',
    intro: 'Mép áo, viền khăn đẹp là nhờ trang trí đường viền. Hôm nay mình học cách lặp họa tiết nhé!',
    objectives: [
      'Hiểu trang trí đường viền là lặp một họa tiết theo dải dài.',
      'Biết sắp xếp họa tiết đều và chọn màu hài hòa.',
    ],
    theory: [
      { h: 'Trang trí đường viền là gì?' },
      { p: 'Là vẽ lặp lại một họa tiết theo một dải dài, ví dụ mép áo, mép khăn, viền đĩa.' },
      { h: 'Nguyên tắc' },
      { ul: ['Họa tiết lặp lại đều đặn.', 'Khoảng cách giữa các họa tiết bằng nhau.', 'Họa tiết nhỏ: hoa, lá, hình học.', 'Màu sắc có quy luật, hài hòa với nền.'] },
      { note: 'Em có thể kẻ hai đường thẳng song song làm khung, rồi vẽ họa tiết đều bên trong.' },
    ],
    examples: [
      { q: 'Trang trí đường viền bằng họa tiết bông hoa, em làm thế nào?', a: 'Kẻ một dải dài. Vẽ một bông hoa, cách một khoảng đều lại vẽ một bông giống hệt. Tất cả bông hoa cùng kích thước, cùng màu. Vậy là có đường viền đẹp.' },
      { q: 'Tạo đường viền xen kẽ hoa và lá thế nào?', a: 'Vẽ theo thứ tự: hoa – lá – hoa – lá lặp lại đều đặn suốt dải. Hoa tô một màu, lá tô màu khác. Khoảng cách đều nhau để đẹp mắt.' },
    ],
  },

  'P2MT-w16-quiz': {
    topic: 'Trang trí hình tròn (đối xứng)',
    intro: 'Chiếc đĩa, mâm tròn được trang trí rất đẹp nhờ phép đối xứng. Cùng học trang trí hình tròn nhé!',
    objectives: [
      'Hiểu trang trí hình tròn theo nguyên tắc đối xứng qua tâm.',
      'Biết đặt họa tiết chính ở giữa, họa tiết phụ xung quanh.',
    ],
    theory: [
      { h: 'Nguyên tắc đối xứng qua tâm' },
      { p: 'Trang trí hình tròn dựa vào phép đối xứng qua tâm. Họa tiết chính nằm chính giữa, họa tiết phụ tỏa đều quanh.' },
      { h: 'Cách làm' },
      { ul: ['Chia hình tròn thành các phần bằng nhau (4, 6 hoặc 8 phần).', 'Vẽ họa tiết giống nhau ở các phần đối xứng.', 'Màu sắc hài hòa, có nhóm chính – phụ.'] },
      { note: 'Đĩa, mâm, mặt đồng hồ đều có dạng hình tròn để trang trí.' },
    ],
    examples: [
      { q: 'Trang trí chiếc đĩa tròn bằng họa tiết hoa, em làm sao?', a: 'Vẽ một bông hoa to ở chính giữa làm họa tiết chính. Chia mép đĩa thành 6 phần đều, mỗi phần vẽ một cánh hoa nhỏ giống nhau. Tô màu hài hòa.' },
      { q: 'Trang trí hình tròn theo 4 phần đối xứng?', a: 'Kẻ hai đường qua tâm chia hình tròn thành 4 phần bằng nhau. Vẽ cùng một họa tiết lá ở cả 4 phần. Họa tiết phản chiếu nhau qua tâm, nhìn rất cân đối.' },
    ],
  },

  'P2MT-w17-quiz': {
    topic: 'Trang trí hình vuông (đối xứng)',
    intro: 'Viên gạch hoa lát nền nhà mình chính là hình vuông được trang trí đối xứng đấy. Cùng học nào!',
    objectives: [
      'Hiểu hình vuông trang trí đối xứng qua nhiều trục.',
      'Biết đặt họa tiết chính ở giữa, 4 góc giống nhau.',
    ],
    theory: [
      { h: 'Trục đối xứng của hình vuông' },
      { p: 'Hình vuông có nhiều trục đối xứng: hai đường chéo và hai đường giữa. Họa tiết hai bên trục giống nhau.' },
      { h: 'Cách sắp xếp' },
      { ul: ['Họa tiết chính đặt ở chính giữa.', '4 góc vẽ họa tiết giống nhau.', 'Họa tiết phụ nhỏ hơn, làm nổi họa tiết chính.', 'Nền và họa tiết có đậm – nhạt khác nhau để nổi bật.'] },
      { note: 'Viên gạch hoa lát nền thường là hình vuông trang trí đối xứng.' },
    ],
    examples: [
      { q: 'Trang trí hình vuông bằng họa tiết hoa lá, em làm thế nào?', a: 'Vẽ một bông hoa to ở giữa. Bốn góc vẽ bốn chiếc lá giống hệt nhau. Nền tô màu nhạt, họa tiết tô màu đậm để nổi bật.' },
      { q: 'Tạo viên gạch hoa hình vuông?', a: 'Vẽ họa tiết chính ở giữa (ví dụ ngôi sao). Bốn góc vẽ bốn họa tiết góc giống nhau. Cạnh giữa thêm họa tiết phụ nhỏ. Tô màu theo quy luật cho cân đối.' },
    ],
  },

  'P2MT-w18-quiz': {
    topic: 'Triển lãm cuối HK1',
    intro: 'Cả học kì qua các em đã học bao điều! Hôm nay mình cùng ôn lại và trưng bày những bức tranh đẹp nhất nhé.',
    objectives: [
      'Ôn lại màu cơ bản, pha màu, đường nét, hình và trang trí.',
      'Biết trưng bày, giới thiệu và nhận xét tranh.',
    ],
    theory: [
      { h: 'Ôn màu sắc' },
      { ul: ['Ba màu cơ bản: đỏ – vàng – xanh lam.', 'Đỏ + vàng = cam; Đỏ + xanh lam = tím; Vàng + xanh lam = lục.', 'Bức tranh cần có đậm – nhạt mới rõ khối.'] },
      { h: 'Ôn đường nét, hình, trang trí' },
      { ul: ['Đường thẳng cứng cáp; đường cong mềm mại.', 'Hình cơ bản: tam giác, vuông, tròn.', 'Đường viền lặp họa tiết đều; hình tròn, hình vuông trang trí đối xứng.'] },
      { h: 'Cách trưng bày tranh' },
      { p: 'Dán tranh ngay ngắn lên bảng. Mỗi bạn giới thiệu tranh của mình, các bạn khác khen điều đẹp và góp ý nhẹ nhàng. Nhớ khen ngợi bạn và giữ gìn tranh sạch sẽ, các em nhé!' },
    ],
    examples: [
      { q: 'Em được phân loại các màu: cam, tím, lục. Chúng được pha từ đâu?', a: 'Cam = đỏ + vàng. Tím = đỏ + xanh lam. Lục (xanh lá) = vàng + xanh lam. Cả ba đều là màu pha, không phải màu cơ bản.' },
      { q: 'Khi trưng bày, em giới thiệu tranh của mình thế nào?', a: 'Em nói: "Đây là bức tranh ngôi nhà của em. Em dùng màu đỏ cho mái, vàng cho tường, và tô đậm – nhạt cho nhà nổi bật." Rồi mời các bạn nhận xét.' },
    ],
  },

  // ──────────────── HK2 ────────────────
  'P2MT-w19-quiz': {
    topic: 'Xé dán giấy: BÔNG HOA',
    intro: 'Không cần bút màu, chỉ với giấy màu và đôi tay khéo, em vẫn tạo được bông hoa đẹp! Cùng học xé dán nhé.',
    objectives: [
      'Hiểu xé dán là xé giấy màu rồi dán lên nền.',
      'Xé và dán được một bông hoa có cánh, nhụy.',
    ],
    theory: [
      { h: 'Xé dán là gì?' },
      { p: 'Xé dán là kĩ thuật tạo hình bằng cách xé giấy màu thành hình, rồi dán lên nền bằng hồ.' },
      { h: 'Các bước xé dán bông hoa' },
      { ul: ['Bước 1: chọn giấy màu tươi cho cánh hoa.', 'Bước 2: xé tay từng cánh hoa dạng bầu dục/giọt nước.', 'Bước 3: xé một chấm tròn làm nhụy, xé lá và cuống màu xanh.', 'Bước 4: dán cánh quanh nhụy, rồi dán lá, cuống.'] },
      { note: 'Mép xé tay hơi gồ ghề, tự nhiên — đó chính là vẻ đẹp riêng của tranh xé dán!' },
    ],
    examples: [
      { q: 'Xé dán bông hoa 5 cánh, em làm thế nào?', a: 'Xé 5 cánh hoa bầu dục màu hồng. Dán xếp quanh thành vòng tròn. Xé một chấm tròn vàng dán vào giữa làm nhụy. Thêm cuống và lá xanh phía dưới.' },
      { q: 'Làm sao để bông hoa nổi bật trên nền?', a: 'Chọn giấy nền màu trầm (xanh đậm hoặc nâu). Cánh hoa dùng giấy màu tươi sáng (đỏ, hồng, vàng). Màu hoa nổi rõ trên nền tối.' },
    ],
  },

  'P2MT-w20-quiz': {
    topic: 'Xé dán giấy: LÁ CÂY',
    intro: 'Chiếc lá nào cũng có hình dáng và màu sắc riêng. Hôm nay mình xé dán những chiếc lá thật đẹp nhé!',
    objectives: [
      'Xé được lá có hình bầu dục, có gân giữa.',
      'Biết chồng nhiều lá tạo độ dày, dùng màu theo tuổi lá.',
    ],
    theory: [
      { h: 'Hình dáng và màu lá' },
      { ul: ['Lá thường bầu dục, có gân giữa.', 'Lá non: xanh non, xanh nhạt.', 'Lá già, lá mùa thu: vàng, cam, đỏ.'] },
      { h: 'Cách xé dán' },
      { ul: ['Xé giấy thành hình bầu dục làm lá.', 'Gân giữa tạo bằng nét vẽ hoặc một dải giấy mỏng dán lên.', 'Dán nhiều lá chồng nhẹ lên nhau cho dày dặn.'] },
      { note: 'Mép lá xé tay trông tự nhiên, mộc mạc hơn cắt bằng kéo.' },
    ],
    examples: [
      { q: 'Xé dán một cành lá nhiều màu, em làm sao?', a: 'Xé vài chiếc lá bầu dục: vài lá xanh, vài lá vàng, vài lá đỏ. Dán chúng chồng nhẹ dọc một cành nâu. Dán dải giấy mỏng làm gân giữa mỗi lá.' },
      { q: 'Tạo thảm lá mùa thu thế nào?', a: 'Xé thật nhiều lá màu vàng, cam, đỏ. Dán chồng lớp phủ kín mặt giấy, lá to lá nhỏ xen kẽ. Cả bức tranh sẽ rực màu mùa thu.' },
    ],
  },

  'P2MT-w21-quiz': {
    topic: 'Xé dán giấy: CON CÁ',
    intro: 'Đàn cá tung tăng dưới nước thật vui mắt. Cùng cô xé dán một chú cá xinh nhé!',
    objectives: [
      'Xé được thân cá, đuôi, vẩy và mắt cá.',
      'Biết dán cá lên nền nước xanh, tạo đàn cá.',
    ],
    theory: [
      { h: 'Hình dáng con cá' },
      { ul: ['Thân cá: bầu dục hoặc hình thoi dài.', 'Đuôi cá: hình tam giác (chữ V).', 'Vẩy cá: các hình cung tròn nhỏ.', 'Mắt cá: một chấm tròn nhỏ.'] },
      { h: 'Cách xé dán' },
      { ul: ['Xé thân cá trước, rồi đuôi, vây.', 'Xé các mảnh nhỏ làm vẩy, dán lên thân.', 'Dán cá lên nền giấy xanh lam làm nước biển.'] },
      { note: 'Muốn có đàn cá, hãy xé nhiều con với kích thước khác nhau nhé!' },
    ],
    examples: [
      { q: 'Xé dán một chú cá vàng, em làm thế nào?', a: 'Xé thân bầu dục màu cam, đuôi chữ V cũng màu cam. Dán thân và đuôi lên nền xanh lam. Dán một chấm tròn đen làm mắt. Xé vài cung nhỏ làm vẩy.' },
      { q: 'Tạo bức tranh đàn cá dưới biển?', a: 'Dán nền xanh lam làm nước. Xé nhiều con cá to nhỏ khác nhau, đủ màu, dán rải khắp tranh. Thêm rong xanh và bọt nước tròn để biển sinh động.' },
    ],
  },

  'P2MT-w22-quiz': {
    topic: '(Tết) Vẽ tranh chủ đề Tết',
    intro: 'Tết đến rồi, nhà nhà rộn ràng hoa đào, bánh chưng! Cùng cô vẽ một bức tranh ngày Tết thật tươi vui nhé.',
    objectives: [
      'Biết các hình ảnh, màu sắc đặc trưng ngày Tết.',
      'Vẽ được tranh Tết có hoa, bánh, gia đình sum vầy.',
    ],
    theory: [
      { h: 'Hình ảnh ngày Tết' },
      { ul: ['Hoa đào hồng (miền Bắc), hoa mai vàng (miền Nam).', 'Bánh chưng, bánh tét.', 'Phong bao lì xì màu đỏ.', 'Gia đình sum vầy bên mâm cỗ.'] },
      { h: 'Màu sắc ngày Tết' },
      { p: 'Màu chủ đạo của Tết là đỏ và vàng — gợi sự ấm áp, may mắn, sung túc.' },
      { note: 'Vẽ tranh Tết nên thật tươi vui, đầm ấm, đừng vẽ cảnh u tối nhé!' },
    ],
    examples: [
      { q: 'Vẽ tranh Tết miền Bắc, em vẽ gì?', a: 'Vẽ cành đào hồng cắm trong bình. Bên cạnh có đĩa bánh chưng xanh. Gia đình ngồi quanh, các em nhận lì xì đỏ. Tô màu đỏ và vàng làm chủ đạo.' },
      { q: 'Vẽ tranh Tết miền Nam thì khác gì?', a: 'Thay cành đào bằng cành mai vàng. Bánh chưng đổi thành bánh tét. Vẫn có lì xì đỏ và không khí sum vầy. Màu vàng của mai làm tranh rực rỡ.' },
    ],
  },

  'P2MT-w23-quiz': {
    topic: 'Tranh dân gian: con GÀ Đông Hồ',
    intro: 'Các em đã thấy bức tranh con gà trống treo ngày Tết chưa? Đó là tranh dân gian Đông Hồ nổi tiếng đấy!',
    objectives: [
      'Biết tranh Đông Hồ là dòng tranh dân gian của Bắc Ninh.',
      'Hiểu ý nghĩa và cách làm tranh con Gà.',
    ],
    theory: [
      { h: 'Tranh Đông Hồ' },
      { ul: ['Là dòng tranh dân gian của tỉnh Bắc Ninh.', 'In trên giấy điệp (giấy quét bột vỏ sò óng ánh).', 'Làm bằng cách khắc ván gỗ rồi in lên giấy.', 'Màu tươi, lấy từ nguyên liệu tự nhiên.'] },
      { h: 'Tranh con Gà' },
      { p: 'Tranh "Gà" tượng trưng cho thịnh vượng, sung túc. Tranh "Gà mẹ con" gợi gia đình đầm ấm, đông con cháu.' },
      { note: 'Người xưa treo tranh gà ngày Tết để cầu mong một năm no ấm, may mắn.' },
    ],
    examples: [
      { q: 'Em hãy mô tả cách vẽ một con gà trống theo tranh Đông Hồ?', a: 'Vẽ mình gà bầu tròn, cổ vươn cao, mào đỏ trên đầu. Đuôi gà cong nhiều màu xòe rộng. Tô màu tươi: thân nâu vàng, đuôi đỏ – xanh – vàng. Dáng gà oai vệ.' },
      { q: 'Tranh "Gà mẹ con" thể hiện điều gì, vẽ thế nào?', a: 'Vẽ gà mẹ to ở giữa, đàn gà con nhỏ vây quanh. Cảnh đầm ấm, đông đúc thể hiện gia đình sung túc. Tô màu tươi sáng theo lối tranh Đông Hồ.' },
    ],
  },

  'P2MT-w24-quiz': {
    topic: 'Tranh dân gian: ĐÁM CƯỚI CHUỘT',
    intro: 'Có một bức tranh dân gian rất vui kể chuyện đám cưới của loài chuột. Cùng cô tìm hiểu nhé!',
    objectives: [
      'Biết "Đám cưới chuột" là tranh Đông Hồ.',
      'Hiểu nội dung, tinh thần hài hước và cách sắp xếp tranh.',
    ],
    theory: [
      { h: 'Bức tranh "Đám cưới chuột"' },
      { ul: ['Là tranh dân gian dòng Đông Hồ.', 'Kể về đoàn rước đám cưới của loài chuột.', 'Ngoài chuột còn có con mèo nhận lễ vật.', 'Mang tinh thần hài hước, phê phán nhẹ nhàng.'] },
      { h: 'Cách sắp xếp' },
      { p: 'Các nhân vật được xếp thành hàng, thành đoàn diễu hành. Màu sắc tươi: đỏ, vàng, xanh nổi bật theo lối Đông Hồ.' },
      { note: 'Để được yên ổn cưới xin, đoàn chuột phải dâng lễ vật cho mèo — thật dí dỏm phải không các em!' },
    ],
    examples: [
      { q: 'Mô tả cách sắp xếp các nhân vật trong tranh "Đám cưới chuột"?', a: 'Các con chuột đi thành một đoàn rước theo hàng ngang. Có chuột thổi kèn, chuột cầm lọng, chuột rước dâu. Một bên có con mèo ngồi nhận lễ vật từ đoàn chuột.' },
      { q: 'Vì sao tranh này khiến người xem mỉm cười?', a: 'Vì tranh kể chuyện ngộ nghĩnh: chuột cưới nhau nhưng phải dâng cá, chim cho mèo để được yên. Tinh thần hài hước, châm biếm nhẹ nhàng làm ai xem cũng vui.' },
    ],
  },

  'P2MT-w25-quiz': {
    topic: 'Tranh dân gian: LỢN ăn cây ráy',
    intro: 'Bức tranh chú lợn béo tròn với xoáy âm-dương trên lưng cũng là tranh Đông Hồ nổi tiếng đấy các em!',
    objectives: [
      'Biết tranh "Lợn ăn cây ráy" là tranh Đông Hồ.',
      'Hiểu ý nghĩa và đặc điểm của tranh.',
    ],
    theory: [
      { h: 'Tranh "Lợn ăn cây ráy"' },
      { ul: ['Là tranh dân gian Đông Hồ (Bắc Ninh).', 'Con lợn béo tốt tượng trưng cho sung túc, no đủ.', 'Trên lưng lợn có xoáy âm-dương đặc trưng.', 'Cây ráy là cây làm thức ăn cho lợn.'] },
      { h: 'Ý nghĩa' },
      { p: 'Người dân treo tranh lợn vào dịp Tết Nguyên Đán để cầu chúc một năm no ấm, sung túc.' },
      { note: 'Tranh dân gian Đông Hồ thường mang lời chúc may mắn, no ấm cho gia đình.' },
    ],
    examples: [
      { q: 'Mô tả cách vẽ chú lợn trong tranh "Lợn ăn cây ráy"?', a: 'Vẽ thân lợn béo tròn, bốn chân ngắn, mõm dài, tai cụp. Trên lưng và mông vẽ hai xoáy âm-dương. Trước mặt lợn vẽ cây ráy. Tô màu nâu hồng tươi.' },
      { q: 'Vì sao người xưa thích treo tranh con lợn ngày Tết?', a: 'Vì con lợn béo tốt tượng trưng cho sự sung túc, no đủ. Treo tranh ngày Tết để cầu mong một năm mới đầy đủ, gia đình ấm no, hạnh phúc.' },
    ],
  },

  'P2MT-w26-quiz': {
    topic: 'Vẽ phong cảnh: MÙA XUÂN',
    intro: 'Mùa xuân về, cây cối đâm chồi, hoa nở khắp nơi. Cùng cô vẽ một bức tranh mùa xuân tươi đẹp nhé!',
    objectives: [
      'Biết đặc trưng và màu sắc của mùa xuân.',
      'Vẽ được phong cảnh mùa xuân sinh động.',
    ],
    theory: [
      { h: 'Mùa xuân có gì?' },
      { ul: ['Hoa đào, hoa mai nở; cây cối đâm chồi nảy lộc.', 'Chim én bay về báo hiệu xuân sang.', 'Bầu trời trong xanh, có mây trắng.'] },
      { h: 'Màu sắc mùa xuân' },
      { p: 'Màu chủ đạo: xanh lá non, hồng, vàng — tươi tắn, tràn đầy sức sống.' },
      { note: 'Người trong tranh xuân thường mặc áo mới, áo dài nhiều màu rực rỡ.' },
    ],
    examples: [
      { q: 'Vẽ phong cảnh làng quê mùa xuân, em vẽ gì?', a: 'Vẽ cây đào hồng nở rộ, cây cối có lá non xanh. Bầu trời xanh có vài chú én bay. Người dân mặc áo mới đi chúc Tết. Tô màu hồng, xanh non, vàng cho tươi tắn.' },
      { q: 'Làm sao cho cây trong tranh "đang vào xuân"?', a: 'Vẽ thân nâu với những chồi non nhú ra. Lá tô màu xanh non nhạt, thêm vài bông hoa nhỏ. Cây như đang bừng sức sống sau mùa đông.' },
    ],
  },

  'P2MT-w27-quiz': {
    topic: 'Vẽ phong cảnh: BÃI BIỂN',
    intro: 'Bãi biển có cát vàng, sóng xanh và nắng ấm. Cùng cô vẽ một bãi biển thật đẹp nhé!',
    objectives: [
      'Biết các yếu tố của bãi biển: cát, nước, sóng, trời.',
      'Vẽ được bãi biển với màu sắc và đường nét phù hợp.',
    ],
    theory: [
      { h: 'Bãi biển có gì?' },
      { ul: ['Cát: màu vàng nhạt hoặc be.', 'Nước biển: xanh lam pha xanh lục.', 'Sóng: vẽ bằng đường lượn cong.', 'Đường chân trời: đường thẳng ngang nơi trời gặp biển.'] },
      { h: 'Thêm cho sinh động' },
      { p: 'Trên bãi biển có thể vẽ thêm: vỏ ốc, chiếc dù, ghế tắm nắng, thuyền buồm xa xa.' },
      { note: 'Phần biển ở xa tô nhạt, biển ở gần tô đậm để có chiều sâu.' },
    ],
    examples: [
      { q: 'Vẽ một bãi biển ngày nắng, em vẽ thế nào?', a: 'Phía trên tô trời xanh nhạt, có ông mặt trời vàng. Giữa là biển xanh lam, vẽ sóng lượn cong. Phía dưới là cát vàng. Thêm chiếc dù sặc sỡ và vài vỏ ốc.' },
      { q: 'Làm sao thể hiện biển có chiều sâu?', a: 'Vẽ đường chân trời thẳng ngang ở xa. Biển gần tô xanh đậm, biển xa tô nhạt dần. Sóng ở gần to và rõ, sóng ở xa nhỏ và mờ.' },
    ],
  },

  'P2MT-w28-quiz': {
    topic: 'Vẽ phong cảnh: ĐỒNG QUÊ – RUỘNG LÚA',
    intro: 'Cánh đồng lúa, lũy tre, con trâu — đó là làng quê Việt Nam thân thương. Cùng cô vẽ nhé!',
    objectives: [
      'Biết các hình ảnh đặc trưng của đồng quê Việt Nam.',
      'Vẽ được ruộng lúa với màu sắc và chiều sâu.',
    ],
    theory: [
      { h: 'Đồng quê Việt Nam' },
      { ul: ['Cánh đồng lúa, lũy tre làng, con trâu.', 'Lúa chín: vàng óng. Lúa non: xanh non.', 'Lũy tre cao, ngọn hơi cong.'] },
      { h: 'Cách vẽ có chiều sâu' },
      { p: 'Ruộng ở gần vẽ to và tô đậm. Ruộng ở xa vẽ nhỏ và tô nhạt. Nhờ vậy cánh đồng như trải dài ra xa.' },
      { note: 'Con trâu là người bạn gắn bó với nhà nông Việt Nam.' },
    ],
    examples: [
      { q: 'Vẽ cánh đồng lúa chín có con trâu, em vẽ gì?', a: 'Vẽ cánh đồng vàng óng trải rộng. Vẽ con trâu đen đang gặm cỏ bên bờ ruộng. Phía xa có lũy tre xanh và dãy núi mờ. Trời xanh, vài cánh cò trắng bay.' },
      { q: 'Làm sao cho cánh đồng trông xa tít tắp?', a: 'Vẽ luống lúa ở gần to, rõ và đậm. Càng xa luống lúa càng nhỏ và nhạt dần. Đến chân trời thì chỉ còn một mảng vàng nhạt. Cánh đồng như chạy dài đến tận chân núi.' },
    ],
  },

  'P2MT-w29-quiz': {
    topic: 'Nặn đất sét: QUẢ',
    intro: 'Hôm nay tay em sẽ thành "phép màu" — nặn đất sét thành những trái cây xinh xinh! Cùng làm nào.',
    objectives: [
      'Biết các bước nặn quả từ đất sét.',
      'Nặn được vài loại quả khác hình dáng.',
    ],
    theory: [
      { h: 'Chuẩn bị đất nặn' },
      { p: 'Bóp đất cho mềm, dẻo trước khi nặn. Đất mềm mới dễ tạo hình.' },
      { h: 'Nặn theo hình dáng quả' },
      { ul: ['Quả cam, quả táo: vê thành hình cầu (tròn).', 'Quả chuối: lăn thành thỏi rồi uốn cong dài.', 'Quả táo: tạo cuống và phần lõm nhẹ trên đỉnh.'] },
      { p: 'Nặn thêm cuống, lá bằng sợi/mảnh đất nhỏ rồi gắn vào quả.' },
      { note: 'Nặn xong, đặt nhẹ nhàng nơi khô ráo để giữ hình.' },
    ],
    examples: [
      { q: 'Nặn một quả cam, em làm các bước thế nào?', a: 'Bóp mềm đất màu cam. Vê tròn thành hình cầu. Ấn nhẹ tạo một chỗ lõm trên đỉnh. Nặn một chiếc lá xanh nhỏ và cuống, gắn vào đỉnh quả.' },
      { q: 'Nặn nải chuối thế nào?', a: 'Lăn đất vàng thành nhiều thỏi nhỏ, uốn mỗi thỏi hơi cong làm một quả chuối. Gắn các quả lại chung một cuống. Vậy là có nải chuối.' },
    ],
  },

  'P2MT-w30-quiz': {
    topic: 'Nặn đất sét: CON VẬT',
    intro: 'Sau khi nặn trái cây, hôm nay mình nặn những con vật ngộ nghĩnh nhé các em!',
    objectives: [
      'Biết nặn con vật từ khối lớn đến chi tiết.',
      'Biết cách gắn các bộ phận và tạo hiệu ứng lông.',
    ],
    theory: [
      { h: 'Các bước nặn con vật' },
      { ul: ['Bước 1: nặn khối lớn — đầu và mình.', 'Bước 2: nặn chân, đuôi, tai rồi gắn vào.', 'Bước 3: gắn hai viên đất nhỏ tròn làm mắt.', 'Bước 4: khía nhẹ tạo hiệu ứng lông.'] },
      { h: 'Mẹo gắn dính' },
      { p: 'Khi gắn chân, tai vào thân: ấn nhẹ và miết mép tiếp giáp cho dính chắc, không bị rời.' },
      { note: 'Thỏ có hai tai dài; voi có vòi dài và tai to — nhớ tạo đặc điểm riêng nhé!' },
    ],
    examples: [
      { q: 'Nặn con thỏ, em làm thế nào?', a: 'Nặn một viên tròn làm đầu, một viên bầu dục làm mình. Gắn hai tai dài, đuôi tròn nhỏ. Gắn hai viên đất nhỏ làm mắt. Khía nhẹ vài đường tạo lông.' },
      { q: 'Nặn con voi cần chú ý gì?', a: 'Nặn mình to, gắn bốn chân trụ. Quan trọng nhất: nặn một thỏi dài uốn cong làm vòi và hai mảng tròn dẹt làm tai to. Miết kĩ mép cho các bộ phận dính chắc.' },
    ],
  },

  'P2MT-w31-quiz': {
    topic: 'Nặn đất sét: ĐỒ VẬT',
    intro: 'Cái cốc, cái đĩa quen thuộc em cũng tự nặn được đấy! Cùng cô nặn đồ vật trong nhà nhé.',
    objectives: [
      'Biết nặn đồ vật dạng khối trụ rỗng, hình tròn dẹt.',
      'Biết làm đồ vật đứng vững và trang trí.',
    ],
    theory: [
      { h: 'Nặn đồ vật theo khối' },
      { ul: ['Cái cốc: tạo khối trụ rỗng (ấn ngón cái xuống giữa khối để tạo lỗ).', 'Cái đĩa: tạo hình tròn dẹt, hơi lõm giữa.', 'Quai cốc: nặn riêng rồi gắn vào.'] },
      { h: 'Cho đồ vật đứng vững' },
      { p: 'Vỗ nhẹ phần đáy cho bằng phẳng thì đồ vật mới đứng vững, không bị nghiêng đổ.' },
      { note: 'Trang trí bằng cách khía họa tiết hoặc gắn miếng đất khác màu lên.' },
    ],
    examples: [
      { q: 'Nặn một cái cốc có quai, em làm thế nào?', a: 'Vê đất thành khối trụ. Ấn ngón cái xuống giữa để tạo lòng cốc rỗng. Vỗ đáy cho phẳng. Nặn một dải nhỏ uốn cong làm quai, gắn vào thành cốc.' },
      { q: 'Nặn cái đĩa và trang trí thế nào?', a: 'Vê tròn rồi ấn dẹt thành đĩa, lõm nhẹ ở giữa. Vỗ đáy cho phẳng. Khía vài đường họa tiết quanh mép, hoặc gắn các chấm đất màu khác cho đẹp.' },
    ],
  },

  'P2MT-w32-quiz': {
    topic: 'Vẽ chủ đề: NGÀY 8/3 – MẸ VÀ CÔ GIÁO',
    intro: 'Ngày 8/3 là ngày của bà, của mẹ, của cô giáo. Cùng cô vẽ bức tranh tặng những người phụ nữ thân yêu nhé!',
    objectives: [
      'Biết ý nghĩa ngày 8/3 — Quốc tế Phụ nữ.',
      'Vẽ được tranh thể hiện tình cảm ấm áp với mẹ, cô giáo, bà.',
    ],
    theory: [
      { h: 'Ngày 8/3' },
      { p: 'Ngày 8/3 là ngày Quốc tế Phụ nữ. Ta dành tình cảm, lời chúc cho bà, mẹ, chị, cô giáo.' },
      { h: 'Vẽ gì cho ngày 8/3?' },
      { ul: ['Hành động: tặng hoa, ôm mẹ, giúp mẹ việc nhà.', 'Hoa hay vẽ: hoa hồng, hoa cúc, hoa hướng dương.', 'Quà: bó hoa, tấm thiệp.'] },
      { note: 'Tô màu tươi sáng, ấm áp để thể hiện tình yêu thương.' },
    ],
    examples: [
      { q: 'Vẽ cảnh em tặng hoa cho mẹ ngày 8/3, em vẽ gì?', a: 'Vẽ em đứng cạnh mẹ, hai tay đưa bó hoa hồng. Mẹ mỉm cười cúi xuống nhận hoa. Phía sau là khung cảnh trong nhà ấm cúng. Tô màu tươi sáng.' },
      { q: 'Vẽ tranh tặng cô giáo nhân ngày 8/3?', a: 'Vẽ cô giáo đứng trên bục giảng, các bạn học sinh tặng cô bó hoa cúc vàng. Trên bảng viết lời chúc. Nét mặt cô và các bạn đều rạng rỡ.' },
    ],
  },

  'P2MT-w33-quiz': {
    topic: 'Vẽ chủ đề: 30/4 – LÁ CỜ HOÀ BÌNH',
    intro: 'Ngày 30/4 là ngày đất nước thống nhất, non sông liền một dải. Cùng cô vẽ lá cờ Tổ quốc và cánh chim hoà bình nhé!',
    objectives: [
      'Biết ý nghĩa ngày 30/4 và đặc điểm lá cờ Tổ quốc.',
      'Vẽ được tranh chủ đề hoà bình, thống nhất.',
    ],
    theory: [
      { h: 'Ngày 30/4' },
      { p: 'Ngày 30/4 là ngày Giải phóng miền Nam, thống nhất đất nước. Cả nước vui mừng, non sông liền một dải.' },
      { h: 'Lá cờ Tổ quốc' },
      { ul: ['Nền màu đỏ.', 'Ngôi sao vàng năm cánh ở chính giữa.', 'Vẽ sao: một cánh hướng thẳng lên trên.'] },
      { note: 'Chim bồ câu trắng là biểu tượng của hoà bình.' },
    ],
    examples: [
      { q: 'Vẽ lá cờ Tổ quốc, em vẽ thế nào?', a: 'Vẽ một hình chữ nhật, tô nền màu đỏ. Vẽ một ngôi sao năm cánh ở chính giữa, một cánh hướng lên trên, rồi tô màu vàng. Vậy là có lá cờ đỏ sao vàng.' },
      { q: 'Vẽ tranh mừng ngày 30/4?', a: 'Vẽ lá cờ Tổ quốc bay phấp phới. Thêm những cánh chim bồ câu trắng bay trên trời xanh. Người dân vui mừng vẫy cờ. Cả bức tranh tràn ngập niềm vui hoà bình.' },
    ],
  },

  'P2MT-w34-quiz': {
    topic: 'Vẽ chủ đề: NGÀY HÈ',
    intro: 'Mùa hè đến với nắng vàng, ve kêu và hoa phượng đỏ rực. Cùng cô vẽ một ngày hè vui tươi nhé!',
    objectives: [
      'Biết đặc trưng và màu sắc của mùa hè.',
      'Vẽ được tranh hoạt động ngày hè sinh động.',
    ],
    theory: [
      { h: 'Mùa hè có gì?' },
      { ul: ['Nắng chói chang, ve kêu, hoa phượng đỏ rực.', 'Bầu trời xanh trong, nắng vàng.', 'Cây cối xanh um, tỏa bóng mát.'] },
      { h: 'Hoạt động ngày hè' },
      { p: 'Trẻ em ngày hè hay đi tắm biển, thả diều, đọc sách, về quê. Mặc áo phông, quần ngắn, đội mũ nón.' },
      { note: 'Hoa phượng đỏ và tiếng ve là dấu hiệu mùa hè đã về.' },
    ],
    examples: [
      { q: 'Vẽ cảnh thả diều ngày hè, em vẽ gì?', a: 'Vẽ các bạn nhỏ đứng trên đồng cỏ thả diều. Những cánh diều nhiều màu bay cao trên trời xanh. Có ông mặt trời vàng và mây trắng. Các bạn mặc áo phông, đội mũ.' },
      { q: 'Vẽ sân trường ngày hè có cây phượng?', a: 'Vẽ cây phượng to nở hoa đỏ rực. Dưới gốc có vài bạn ngồi đọc sách. Bầu trời xanh, nắng vàng. Tô màu đỏ của phượng và xanh của lá làm điểm nhấn.' },
    ],
  },

  'P2MT-w35-quiz': {
    topic: 'Tổng hợp – em là họa sĩ',
    intro: 'Bây giờ em đã biết nhiều điều rồi! Hôm nay mình học cách sắp xếp một bức tranh thật đẹp như một họa sĩ nhỏ nhé.',
    objectives: [
      'Biết bố cục: hình chính nổi bật, hình phụ hỗ trợ.',
      'Biết phối màu và tạo chiều sâu cho tranh.',
    ],
    theory: [
      { h: 'Bố cục bức tranh' },
      { ul: ['Hình chính: vẽ to, ở vị trí nổi bật.', 'Hình phụ: nhỏ hơn, hỗ trợ làm rõ hình chính.', 'Tỉ lệ các vật theo thực tế (người to – kiến nhỏ).'] },
      { h: 'Tô màu và chiều sâu' },
      { ul: ['Phối nhiều màu hài hòa, có đậm – nhạt.', 'Tô gọn, không lem ra ngoài viền.', 'Vật ở xa: nhỏ và nhạt. Vật ở gần: to và đậm.'] },
      { note: 'Vẽ xong, em hãy xem lại, chỉnh sửa và đặt tên cho bức tranh nhé!' },
    ],
    examples: [
      { q: 'Em vẽ tranh "Em chăm sóc cây", sắp xếp bố cục thế nào?', a: 'Hình chính là em đang tưới cây, vẽ to ở giữa. Hình phụ: bồn hoa, hàng rào, ông mặt trời, vẽ nhỏ hơn. Tô màu hài hòa, có đậm – nhạt cho rõ khối.' },
      { q: 'Làm sao để bức tranh có chiều sâu?', a: 'Vật ở gần (như em bé) vẽ to và tô đậm. Vật ở xa (như ngôi nhà, dãy núi) vẽ nhỏ và tô nhạt. Cách này làm bức tranh như có không gian xa – gần.' },
    ],
  },

  'P2MT-w36-quiz': {
    topic: 'Triển lãm cuối năm',
    intro: 'Một năm học Mĩ thuật đã qua, các em đã thành những họa sĩ nhỏ! Hôm nay mình ôn lại tất cả và trưng bày tác phẩm nhé.',
    objectives: [
      'Ôn tập màu sắc, trang trí và tranh dân gian.',
      'Biết trưng bày, giới thiệu và trân trọng tác phẩm.',
    ],
    theory: [
      { h: 'Ôn màu sắc và pha màu' },
      { ul: ['Ba màu cơ bản: đỏ – vàng – xanh lam.', 'Đỏ + vàng = cam; Đỏ + xanh lam = tím; Vàng + xanh lam = lục.', 'Màu nóng: đỏ – cam – vàng. Màu lạnh: xanh – tím – lục.'] },
      { h: 'Ôn trang trí và tranh dân gian' },
      { ul: ['Đường viền lặp họa tiết đều; hình vuông có nhiều trục đối xứng.', 'Tranh dân gian Đông Hồ ở Bắc Ninh, in trên giấy điệp.', 'Tranh Gà (thịnh vượng), Đám cưới chuột (hài hước), Lợn (sung túc).'] },
      { p: 'Trưng bày: chọn bức tranh em thích nhất, dán lên bảng, giới thiệu với các bạn, cùng khen nhau và giữ gìn tác phẩm.' },
      { note: 'Hãy luôn yêu thích vẽ và giữ con mắt biết tìm cái đẹp, các em nhé!' },
    ],
    examples: [
      { q: 'Phân biệt màu nóng và màu lạnh, cho ví dụ?', a: 'Màu nóng gồm đỏ, cam, vàng — gợi cảm giác ấm, dùng vẽ mặt trời, lửa. Màu lạnh gồm xanh, tím, lục — gợi cảm giác mát, dùng vẽ biển, bầu trời.' },
      { q: 'Em chọn một bức tranh để triển lãm, giới thiệu thế nào?', a: 'Em nói tên tranh, vẽ về điều gì, dùng màu gì và vì sao thích nó. Ví dụ: "Bức này tên Mùa hè, em dùng nhiều màu nóng cho hoa phượng và nắng." Rồi mời các bạn nhận xét.' },
    ],
  },
};
