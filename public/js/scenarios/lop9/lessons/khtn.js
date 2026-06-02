// ============================================================
// Lớp 9 · KHOA HỌC TỰ NHIÊN — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Key trùng id quiz: "S9KHTN-wNN-quiz".
// Tích hợp: Vật lý (điện học, quang học) + Hoá học (kim loại, phi kim, hữu cơ) + Sinh (di truyền).
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9KHTN_LESSONS = {
  'S9KHTN-w01-quiz': L(
    'Điện học — Định luật Ohm',
    'Mở đầu năm học với phần điện học — chương quan trọng trong vật lý lớp 9.',
    ['Nắm định luật Ohm.', 'Áp dụng vào bài toán mạch điện đơn giản.'],
    [
      { h: 'Định luật Ohm' },
      { p: 'Cường độ dòng điện I qua dây dẫn tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R: I = U/R.' },
      { ul: ['Đơn vị: I (A), U (V), R (Ω).', '1 Ω = 1 V/A.'] },
      { note: 'Định luật Ohm là nền tảng của điện học một chiều.' },
    ],
    [
      { q: 'U = 12V, R = 4Ω. Tính I.', a: 'I = 12/4 = 3 A.' },
      { q: 'I = 2A, R = 5Ω. Tính U.', a: 'U = IR = 10 V.' },
    ]
  ),

  'S9KHTN-w02-quiz': L(
    'Mạch điện nối tiếp và song song',
    'Hai cách ghép cơ bản của các điện trở trong mạch.',
    ['Phân biệt mạch nối tiếp và song song.', 'Tính điện trở tương đương.'],
    [
      { h: 'Mạch nối tiếp' },
      { ul: ['I không đổi: I = I₁ = I₂ = ...', 'U cộng: U = U₁ + U₂ + ...', 'R cộng: R_tđ = R₁ + R₂ + ...'] },
      { h: 'Mạch song song' },
      { ul: ['U không đổi: U = U₁ = U₂ = ...', 'I cộng: I = I₁ + I₂ + ...', '1/R_tđ = 1/R₁ + 1/R₂ + ...'] },
      { note: 'Hai điện trở song song: R_tđ = R₁R₂/(R₁+R₂).' },
    ],
    [
      { q: 'R₁ = 4Ω, R₂ = 6Ω nối tiếp. R_tđ = ?', a: 'R_tđ = 10 Ω.' },
      { q: 'R₁ = 6Ω, R₂ = 3Ω song song. R_tđ = ?', a: 'R_tđ = 6·3/(6+3) = 2 Ω.' },
    ]
  ),

  'S9KHTN-w03-quiz': L(
    'Công suất điện',
    'Công suất điện cho biết tốc độ tiêu thụ điện năng.',
    ['Nắm công thức tính công suất.', 'Áp dụng vào thiết bị điện thực tế.'],
    [
      { h: 'Công suất điện' },
      { p: 'P = UI = I²R = U²/R. Đơn vị: W (oát).' },
      { ul: ['1 W = 1 V · 1 A', '1 kW = 1000 W', 'Số ghi trên thiết bị (220V - 100W) cho biết công suất ở điện áp định mức.'] },
      { note: 'Bóng đèn 100W tiêu thụ 100J/s khi mắc đúng định mức.' },
    ],
    [
      { q: 'Bóng đèn 220V - 60W. Tính I và R.', a: 'I = P/U = 60/220 ≈ 0,27 A. R = U/I = 220/0,27 ≈ 815 Ω hoặc R = U²/P = 48400/60 ≈ 807 Ω.' },
      { q: 'P = 200W, t = 5h. Tính A.', a: 'A = Pt = 200 · 5 = 1000 Wh = 1 kWh.' },
    ]
  ),

  'S9KHTN-w04-quiz': L(
    'Điện năng — Công của dòng điện',
    'Điện năng = công của dòng điện = năng lượng điện tiêu thụ.',
    ['Tính điện năng tiêu thụ.', 'Hiểu hoá đơn điện gia đình.'],
    [
      { h: 'Công thức' },
      { p: 'A = Pt = UIt = I²Rt = (U²/R)t. Đơn vị: J hoặc kWh.' },
      { ul: ['1 kWh = 3.600.000 J', '1 số điện = 1 kWh'] },
      { note: 'Tiền điện = số kWh × đơn giá (theo bậc thang).' },
    ],
    [
      { q: 'Tủ lạnh 150W chạy 24h. Điện năng?', a: 'A = 150 · 24 / 1000 = 3,6 kWh.' },
      { q: 'Máy lạnh 1000W chạy 8h/ngày × 30 ngày. Điện năng?', a: 'A = 1 · 8 · 30 = 240 kWh.' },
    ]
  ),

  'S9KHTN-w05-quiz': L(
    'Định luật Joule-Lenz — Nhiệt lượng',
    'Khi dòng điện chạy qua dây dẫn, một phần điện năng chuyển thành nhiệt năng.',
    ['Nắm định luật Joule-Lenz.', 'Tính nhiệt lượng toả ra.'],
    [
      { h: 'Định luật Joule-Lenz' },
      { p: 'Q = I²Rt. Đơn vị Q: J.' },
      { ul: ['Q tỉ lệ với I² (nên không tăng dòng điện quá cao trong mạch dân dụng).', 'Q tỉ lệ với R (vì sao dây tóc bóng đèn nóng sáng).', 'Q tỉ lệ với t.'] },
      { note: 'Đây là nguyên lý hoạt động của bàn ủi, lò sưởi, bóng đèn sợi đốt.' },
    ],
    [
      { q: 'I = 2A, R = 10Ω, t = 60s. Tính Q.', a: 'Q = 4 · 10 · 60 = 2400 J.' },
      { q: 'Vì sao dây tóc bóng đèn nóng sáng còn dây nối không?', a: 'Dây tóc có R lớn hơn nhiều, nên Q toả ra lớn → nóng đến nhiệt độ phát sáng.' },
    ]
  ),

  'S9KHTN-w06-quiz': L(
    'Sử dụng điện an toàn và tiết kiệm',
    'An toàn điện là vấn đề quan trọng trong đời sống.',
    ['Hiểu nguy hiểm khi dùng điện.', 'Biết các biện pháp an toàn.'],
    [
      { h: 'Nguy hiểm khi dùng điện' },
      { ul: ['Điện giật (gây tê liệt, ngừng tim).', 'Chập điện gây cháy nổ.', 'Hỏng thiết bị do quá tải.'] },
      { h: 'Biện pháp an toàn' },
      { ul: ['Sử dụng aptomat (CB) bảo vệ quá tải, ngắn mạch.', 'Sử dụng cầu dao chống giật (RCBO) bảo vệ con người.', 'Không chạm vào dây trần, ổ ướt.', 'Nối đất các thiết bị có vỏ kim loại.'] },
      { h: 'Tiết kiệm điện' },
      { ul: ['Dùng bóng LED thay sợi đốt.', 'Tắt thiết bị khi không dùng.', 'Sử dụng thiết bị có nhãn năng lượng cao.'] },
      { note: 'An toàn điện là ưu tiên hàng đầu.' },
    ],
    [
      { q: 'Khi có người bị điện giật, phải làm gì đầu tiên?', a: 'Ngắt nguồn điện trước (CB tổng), sau đó mới tiếp cận nạn nhân để cứu hộ.' },
      { q: 'Vì sao dùng bóng LED tiết kiệm hơn sợi đốt?', a: 'Bóng LED biến điện năng thành ánh sáng hiệu suất cao (~80%), sợi đốt chỉ ~10% (90% là nhiệt).' },
    ]
  ),

  'S9KHTN-w07-quiz': L(
    'Từ trường và nam châm',
    'Bước vào phần điện từ — chương quan trọng kết nối điện và từ.',
    ['Nhận biết từ trường.', 'Hiểu nam châm vĩnh cửu.'],
    [
      { h: 'Nam châm' },
      { p: 'Nam châm có 2 cực: Bắc (N) và Nam (S). Cùng cực đẩy nhau, khác cực hút nhau.' },
      { h: 'Từ trường' },
      { p: 'Khoảng không xung quanh nam châm có khả năng tác dụng lực từ lên kim nam châm khác.' },
      { ul: ['Đường sức từ: đi ra từ cực N, đi vào cực S, là đường khép kín.', 'Mật độ đường sức cho biết độ mạnh từ trường.'] },
      { note: 'Trái Đất là một nam châm khổng lồ với cực Bắc địa lý gần cực Nam từ.' },
    ],
    [
      { q: 'Vì sao kim la bàn luôn chỉ hướng Bắc-Nam?', a: 'Do tương tác với từ trường Trái Đất, kim la bàn (cũng là nam châm) định hướng theo trục Bắc-Nam.' },
      { q: 'Hai nam châm cùng cực N để gần nhau sẽ?', a: 'Đẩy nhau (cùng cực đẩy nhau).' },
    ]
  ),

  'S9KHTN-w08-quiz': L(
    'Từ trường của dòng điện',
    'Dòng điện sinh ra từ trường — phát hiện của Oersted (1820).',
    ['Hiểu mối quan hệ điện-từ.', 'Quy tắc nắm tay phải.'],
    [
      { h: 'Từ trường dòng điện thẳng' },
      { p: 'Dòng điện chạy qua dây thẳng tạo từ trường xung quanh dây, đường sức là các đường tròn đồng tâm.' },
      { h: 'Quy tắc nắm tay phải' },
      { p: 'Nắm tay phải sao cho ngón cái chỉ chiều dòng điện, 4 ngón còn lại chỉ chiều đường sức từ.' },
      { h: 'Ống dây (solenoid)' },
      { p: 'Ống dây mang dòng điện tạo từ trường tương tự nam châm thẳng: 1 đầu là cực N, đầu kia là cực S.' },
      { note: 'Đây là nguyên lý của nam châm điện.' },
    ],
    [
      { q: 'Vì sao dùng nam châm điện thuận tiện hơn nam châm vĩnh cửu?', a: 'Có thể bật/tắt và điều chỉnh độ mạnh bằng cách thay đổi dòng điện.' },
      { q: 'Ứng dụng nam châm điện?', a: 'Cẩu sắt thép, chuông điện, rơ-le, loa, mô-tơ điện.' },
    ]
  ),

  'S9KHTN-w09-quiz': L(
    'Lực điện từ — Quy tắc bàn tay trái',
    'Khi dòng điện đặt trong từ trường, sẽ chịu lực từ — cơ sở của động cơ điện.',
    ['Áp dụng quy tắc bàn tay trái.', 'Hiểu nguyên lý động cơ điện.'],
    [
      { h: 'Lực điện từ' },
      { p: 'Khi dây dẫn mang dòng điện đặt trong từ trường, chịu tác dụng của lực từ.' },
      { h: 'Quy tắc bàn tay trái' },
      { p: 'Đặt bàn tay trái sao cho từ trường xuyên vào lòng bàn tay, 4 ngón theo chiều dòng điện, thì ngón cái duỗi 90° chỉ chiều lực điện từ.' },
      { note: 'Đây là nguyên lý hoạt động của mọi mô-tơ điện một chiều.' },
    ],
    [
      { q: 'Ứng dụng lực điện từ?', a: 'Động cơ điện, loa, máy phát điện (chiều ngược).' },
      { q: 'Vì sao gọi là "động cơ một chiều"?', a: 'Vì dùng dòng điện một chiều (DC); cần bộ chỉnh lưu (cổ góp) để dòng đổi chiều khi cuộn dây quay.' },
    ]
  ),

  'S9KHTN-w10-quiz': L(
    'Hiện tượng cảm ứng điện từ',
    'Hiện tượng do Faraday phát hiện (1831) — cơ sở của máy phát điện.',
    ['Nhận biết hiện tượng cảm ứng điện từ.', 'Hiểu nguyên lý máy phát điện.'],
    [
      { h: 'Cảm ứng điện từ' },
      { p: 'Khi từ thông qua một cuộn dây kín biến thiên, trong cuộn dây xuất hiện dòng điện cảm ứng.' },
      { h: 'Các trường hợp tạo dòng cảm ứng' },
      { ul: ['Đưa nam châm lại gần/ra xa cuộn dây.', 'Quay cuộn dây trong từ trường (máy phát điện).', 'Tăng/giảm dòng điện qua cuộn dây khác đặt gần (máy biến áp).'] },
      { note: 'Mọi máy phát điện đều dựa trên hiện tượng cảm ứng điện từ.' },
    ],
    [
      { q: 'Cách tạo dòng điện trong máy phát điện?', a: 'Quay cuộn dây trong từ trường (hoặc quay nam châm gần cuộn dây) → từ thông biến thiên → tạo dòng cảm ứng.' },
      { q: 'Vì sao xe đạp có đèn không cần pin?', a: 'Có máy phát nhỏ ("đi-na-mô"), bánh xe quay làm nam châm quay, sinh ra dòng điện cảm ứng làm sáng đèn.' },
    ]
  ),

  'S9KHTN-w11-quiz': L(
    'Máy biến áp',
    'Máy biến áp cho phép thay đổi điện áp — thiết bị quan trọng trong truyền tải điện.',
    ['Nắm cấu tạo và nguyên lý máy biến áp.', 'Tính tỉ số biến áp.'],
    [
      { h: 'Cấu tạo' },
      { ul: ['Lõi sắt từ (làm từ thép kỹ thuật).', 'Hai cuộn dây: sơ cấp (N₁ vòng) và thứ cấp (N₂ vòng).'] },
      { h: 'Công thức' },
      { p: 'U₁/U₂ = N₁/N₂. Nếu N₂ > N₁: máy tăng áp; nếu N₂ < N₁: máy giảm áp.' },
      { note: 'Máy biến áp chỉ hoạt động với điện xoay chiều (AC); không hoạt động với DC.' },
    ],
    [
      { q: 'N₁ = 1000, N₂ = 100, U₁ = 220V. Tính U₂.', a: 'U₂ = U₁ · N₂/N₁ = 220 · 100/1000 = 22V.' },
      { q: 'Vì sao truyền tải điện đi xa cần điện áp cao?', a: 'Để giảm hao phí trên đường dây (P_hp = I²R, mà I = P/U → P_hp = P²R/U², tăng U sẽ giảm hao phí).' },
    ]
  ),

  'S9KHTN-w12-quiz': L(
    'Ánh sáng — Khúc xạ',
    'Khi ánh sáng đi qua mặt phân cách giữa 2 môi trường, tia sáng bị gãy khúc.',
    ['Hiểu định luật khúc xạ.', 'Vận dụng vào hiện tượng tự nhiên.'],
    [
      { h: 'Hiện tượng khúc xạ' },
      { p: 'Tia sáng bị gãy khúc khi truyền từ môi trường này sang môi trường khác.' },
      { h: 'Định luật khúc xạ' },
      { p: 'sin i / sin r = n (chiết suất tương đối).' },
      { ul: ['Đi từ môi trường loãng sang đặc (kk → nước): tia gãy gần pháp tuyến (r < i).', 'Đi từ đặc sang loãng (nước → kk): tia gãy xa pháp tuyến (r > i).'] },
      { note: 'Khi nhìn vào bể nước, vật ở dưới nhìn như cạn hơn thực tế do khúc xạ.' },
    ],
    [
      { q: 'Vì sao chiếc đũa cắm vào cốc nước trông như gãy?', a: 'Do hiện tượng khúc xạ ánh sáng từ nước qua không khí.' },
      { q: 'Tia sáng truyền từ không khí vào nước với i = 30°. Khi đó r > hay < 30°?', a: 'r < 30° (vì n_nước > n_kk, tia gãy gần pháp tuyến).' },
    ]
  ),

  'S9KHTN-w13-quiz': L(
    'Thấu kính hội tụ và phân kỳ',
    'Thấu kính là quang cụ quan trọng — cơ sở của kính, máy ảnh, kính hiển vi.',
    ['Phân biệt thấu kính hội tụ và phân kỳ.', 'Vẽ đường truyền tia sáng.'],
    [
      { h: 'Thấu kính hội tụ' },
      { ul: ['Lồi ở giữa, rìa mỏng.', 'Tiêu cự f > 0.', 'Tập trung chùm tia song song về tiêu điểm F.'] },
      { h: 'Thấu kính phân kỳ' },
      { ul: ['Lõm ở giữa, rìa dày.', 'Tiêu cự f < 0.', 'Làm chùm tia song song phân kỳ (kéo dài thì gặp nhau ở F\' ảo).'] },
      { h: 'Tia đặc biệt qua thấu kính hội tụ' },
      { ul: ['Tia qua O thì truyền thẳng.', 'Tia song song trục chính → đi qua F.', 'Tia qua F → song song trục chính.'] },
      { note: 'Vẽ ảnh bằng cách dùng ít nhất 2 trong 3 tia đặc biệt.' },
    ],
    [
      { q: 'Thấu kính hội tụ có tiêu cự 10cm. Vật đặt cách 30cm. Ảnh ở đâu?', a: 'Vật ở xa hơn 2f = 20cm nên ảnh thật, ngược chiều, nhỏ hơn vật. Tính: 1/d + 1/d\' = 1/f → 1/30 + 1/d\' = 1/10 → d\' = 15cm.' },
      { q: 'Ứng dụng thấu kính hội tụ?', a: 'Kính viễn, máy ảnh, kính lúp, kính hiển vi.' },
    ]
  ),

  'S9KHTN-w14-quiz': L(
    'Mắt và các tật của mắt',
    'Mắt là một quang cụ tự nhiên — quan trọng cho cuộc sống.',
    ['Hiểu cấu tạo mắt và các tật.', 'Biết cách khắc phục tật.'],
    [
      { h: 'Cấu tạo mắt' },
      { ul: ['Giác mạc, thuỷ tinh thể (đóng vai trò thấu kính hội tụ).', 'Võng mạc (màn ảnh).', 'Cơ thể mi giúp điều tiết tiêu cự.'] },
      { h: 'Các tật phổ biến' },
      { ul: ['Cận thị: ảnh hội tụ trước võng mạc; nhìn gần rõ, xa mờ; sửa bằng kính phân kỳ.', 'Viễn thị: ảnh hội tụ sau võng mạc; nhìn xa rõ, gần mờ; sửa bằng kính hội tụ.', 'Lão thị: do tuổi tác, sửa bằng kính hội tụ.', 'Loạn thị: do giác mạc không đều, sửa bằng kính loạn thị.'] },
      { note: 'Cận thị ở học sinh ngày càng tăng do nhìn màn hình quá nhiều.' },
    ],
    [
      { q: 'Cận thị sửa bằng kính nào?', a: 'Kính phân kỳ (tiêu cự âm).' },
      { q: 'Bảo vệ mắt cần làm gì?', a: 'Đọc đủ ánh sáng, không xem màn hình quá lâu, ngồi đúng tư thế, ăn đủ vitamin A.' },
    ]
  ),

  'S9KHTN-w15-quiz': L(
    'Kim loại — Tính chất chung',
    'Kim loại là vật liệu quan trọng nhất trong công nghiệp.',
    ['Nắm tính chất vật lý chung của kim loại.', 'Hiểu tính chất hoá học.'],
    [
      { h: 'Tính chất vật lý' },
      { ul: ['Dẫn điện, dẫn nhiệt tốt.', 'Có ánh kim.', 'Dẻo, có thể dát mỏng và kéo sợi.', 'Trạng thái rắn ở nhiệt độ thường (trừ Hg lỏng).'] },
      { h: 'Tính chất hoá học' },
      { ul: ['Tác dụng với phi kim (O₂, Cl₂...).', 'Tác dụng với axit (HCl, H₂SO₄ loãng) tạo muối + H₂.', 'Tác dụng với muối (theo dãy hoạt động hoá học).'] },
      { note: 'Dãy hoạt động: K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au.' },
    ],
    [
      { q: 'Vì sao Zn tác dụng được với HCl nhưng Cu không?', a: 'Zn đứng trước H trong dãy hoạt động nên đẩy được H ra; Cu đứng sau H nên không phản ứng.' },
      { q: 'PT khi Mg + HCl?', a: 'Mg + 2HCl → MgCl₂ + H₂↑.' },
    ]
  ),

  'S9KHTN-w16-quiz': L(
    'Dãy hoạt động hoá học của kim loại',
    'Dãy hoạt động xác định tính khử của các kim loại — quan trọng để dự đoán phản ứng.',
    ['Học thuộc dãy hoạt động.', 'Vận dụng dự đoán phản ứng.'],
    [
      { h: 'Dãy hoạt động hoá học' },
      { p: 'K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au.' },
      { h: 'Quy luật phản ứng' },
      { ul: ['Kim loại đứng trước H đẩy H ra khỏi axit (H₂SO₄, HCl loãng).', 'Kim loại đứng trước (mạnh hơn) đẩy kim loại đứng sau ra khỏi dung dịch muối của nó.'] },
      { note: 'Mẹo nhớ: "Khi Nào Cần Mua Áo Záp Sắt Nhớ Sang Phố Hỏi Cửa hàng Áo Phi Âu".' },
    ],
    [
      { q: 'Fe + CuSO₄ → ?', a: 'Fe + CuSO₄ → FeSO₄ + Cu (Fe đứng trước Cu nên đẩy Cu ra).' },
      { q: 'Cu + ZnSO₄ → ?', a: 'Không phản ứng (Cu đứng sau Zn).' },
    ]
  ),

  'S9KHTN-w17-quiz': L(
    'Nhôm và Sắt',
    'Hai kim loại phổ biến nhất — sắt là kim loại của nền văn minh, nhôm là kim loại của hàng không.',
    ['Hiểu tính chất + ứng dụng của Al và Fe.', 'Biết cách sản xuất.'],
    [
      { h: 'Nhôm (Al)' },
      { ul: ['Nhẹ, dẫn điện-nhiệt tốt, không gỉ (do lớp Al₂O₃ bảo vệ).', 'Sản xuất từ quặng bauxite bằng điện phân nóng chảy.', 'Ứng dụng: đồ dùng nhà bếp, máy bay, xây dựng.'] },
      { h: 'Sắt (Fe)' },
      { ul: ['Bền, cứng, dễ gia công.', 'Bị gỉ trong không khí ẩm (Fe₂O₃·nH₂O).', 'Sản xuất bằng lò cao từ quặng hematite (Fe₂O₃) + than cốc.', 'Ứng dụng: xây dựng, cơ khí, sản xuất thép.'] },
      { note: 'Thép là hợp kim Fe-C (0,01% - 2% C), nhiều ứng dụng.' },
    ],
    [
      { q: 'Vì sao đồ nhôm không bị gỉ?', a: 'Bề mặt Al phản ứng với O₂ tạo lớp Al₂O₃ mỏng, bền, bảo vệ kim loại bên trong.' },
      { q: 'Phản ứng tạo gỉ sắt?', a: 'Fe + O₂ + H₂O → Fe₂O₃·nH₂O (gỉ sắt, màu nâu đỏ).' },
    ]
  ),

  'S9KHTN-w18-quiz': L(
    'Ôn tập HK1',
    'Tổng hợp kiến thức vật lý điện + hoá học kim loại HK1.',
    ['Hệ thống các công thức cơ bản.', 'Giải bài tập tổng hợp.'],
    [
      { h: 'Trọng tâm ôn tập' },
      { ul: ['Định luật Ohm + công thức công suất.', 'Mạch nối tiếp + song song.', 'Cảm ứng điện từ, máy biến áp.', 'Quang học: thấu kính, mắt.', 'Tính chất kim loại + dãy hoạt động.'] },
      { note: 'Khoa học tự nhiên trong đề thi vào 10 có thể là môn thứ 4 (Hà Nội chọn ngẫu nhiên).' },
    ],
    [
      { q: '3 điện trở R₁=2Ω, R₂=3Ω, R₃=6Ω ghép song song. R_tđ?', a: '1/R = 1/2+1/3+1/6 = 1 ⇒ R = 1Ω.' },
      { q: 'Cu nhúng vào FeSO₄ có phản ứng?', a: 'Không (Cu đứng sau Fe).' },
    ]
  ),

  'S9KHTN-w19-quiz': L(
    'Phi kim — Tính chất chung',
    'Bước vào HK2 với phi kim — đa dạng tính chất hơn kim loại.',
    ['Hiểu tính chất phi kim.', 'Biết các phi kim phổ biến.'],
    [
      { h: 'Tính chất chung' },
      { ul: ['Không dẫn điện (trừ than chì).', 'Trạng thái đa dạng: rắn (S, P, C), lỏng (Br₂), khí (O₂, Cl₂, N₂).', 'Phản ứng với kim loại tạo muối.', 'Phản ứng với H₂ tạo hợp chất khí.'] },
      { h: 'Phi kim phổ biến' },
      { ul: ['Clo (Cl₂): khí vàng lục, độc, dùng tẩy trắng, khử trùng.', 'Cacbon (C): than, kim cương, graphite.', 'Lưu huỳnh (S): rắn vàng, sản xuất H₂SO₄.'] },
      { note: 'Phi kim đứng bên phải bảng tuần hoàn.' },
    ],
    [
      { q: 'Cl₂ + 2Na → ?', a: '2NaCl (muối ăn).' },
      { q: 'Vì sao Cl₂ độc?', a: 'Cl₂ tác dụng với nước trong cơ thể tạo HCl + HClO, gây tổn thương đường hô hấp.' },
    ]
  ),

  'S9KHTN-w20-quiz': L(
    'Cacbon và hợp chất',
    'Cacbon là nguyên tố nền tảng của hoá học hữu cơ.',
    ['Hiểu các dạng thù hình của C.', 'Hợp chất quan trọng: CO, CO₂.'],
    [
      { h: 'Dạng thù hình' },
      { ul: ['Kim cương: cứng nhất, không dẫn điện, dùng làm trang sức, mũi khoan.', 'Than chì (graphite): mềm, dẫn điện, dùng làm điện cực, bút chì.', 'Cacbon vô định hình: than đá, than gỗ, dùng làm nhiên liệu.'] },
      { h: 'Hợp chất quan trọng' },
      { ul: ['CO: khí không màu, không mùi, rất độc (gây ngộ độc khí than).', 'CO₂: khí gây hiệu ứng nhà kính, không cháy, dập lửa được.'] },
      { note: 'Đốt than trong phòng kín gây ngộ độc CO, có thể tử vong.' },
    ],
    [
      { q: 'Vì sao kim cương rất cứng?', a: 'Cấu trúc 3D với liên kết C-C cộng hoá trị bền chặt.' },
      { q: 'CO₂ gây hiệu ứng nhà kính, hậu quả?', a: 'Trái Đất nóng lên → biến đổi khí hậu, băng tan, nước biển dâng.' },
    ]
  ),

  'S9KHTN-w21-quiz': L(
    'Hợp chất hữu cơ — Mở đầu',
    'Bước vào hoá học hữu cơ — nghiên cứu hợp chất của carbon.',
    ['Hiểu khái niệm hợp chất hữu cơ.', 'Phân loại các nhóm chất chính.'],
    [
      { h: 'Hợp chất hữu cơ' },
      { p: 'Hầu hết hợp chất của C (trừ CO, CO₂, muối cacbonat, axit cacbonic).' },
      { h: 'Đặc điểm' },
      { ul: ['Liên kết chủ yếu là cộng hoá trị.', 'Đa số dễ cháy, ít tan trong nước, tan trong dung môi hữu cơ.', 'Có thể có đồng phân (cùng CTPT, khác cấu tạo).'] },
      { h: 'Phân loại' },
      { ul: ['Hydrocarbon: chỉ có C và H (CH₄, C₂H₆, C₆H₆...).', 'Dẫn xuất: có thêm O, N, halogen (rượu, axit, este...).'] },
      { note: 'Hoá học hữu cơ là cơ sở của cuộc sống (DNA, protein, lipid).' },
    ],
    [
      { q: 'CO₂ có phải hợp chất hữu cơ không?', a: 'Không, mặc dù có C nhưng được xếp vào hợp chất vô cơ.' },
      { q: 'Vì sao có đồng phân?', a: 'Cùng số nguyên tử nhưng cách sắp xếp khác nhau → tính chất khác nhau.' },
    ]
  ),

  'S9KHTN-w22-quiz': L(
    'Methane (CH₄) và Ethane',
    'Methane là khí thiên nhiên — nhiên liệu quan trọng.',
    ['Nắm cấu tạo và tính chất CH₄.', 'Hiểu phản ứng cháy + thế.'],
    [
      { h: 'Methane CH₄' },
      { ul: ['Cấu tạo tứ diện, 1C liên kết 4H.', 'Khí không màu, không mùi, nhẹ hơn không khí.', 'Có trong khí thiên nhiên, khí biogas.'] },
      { h: 'Tính chất hoá học' },
      { ul: ['Phản ứng cháy: CH₄ + 2O₂ → CO₂ + 2H₂O (toả nhiệt).', 'Phản ứng thế với Cl₂: CH₄ + Cl₂ → CH₃Cl + HCl (cần ánh sáng).'] },
      { note: 'Khi đun bếp gas, có khí methane (chủ yếu) cháy tạo nhiệt.' },
    ],
    [
      { q: 'PT cháy của CH₄?', a: 'CH₄ + 2O₂ → CO₂ + 2H₂O.' },
      { q: 'Vì sao biogas là năng lượng tái tạo?', a: 'Sản xuất từ chất thải hữu cơ (phân, rác), có thể tái tạo liên tục.' },
    ]
  ),

  'S9KHTN-w23-quiz': L(
    'Ethylene (C₂H₄) và Acetylene (C₂H₂)',
    'Hydrocarbon không no — có liên kết đôi/ba, phản ứng đa dạng hơn.',
    ['Hiểu phản ứng cộng đặc trưng.', 'Biết ứng dụng quan trọng.'],
    [
      { h: 'Ethylene C₂H₄' },
      { ul: ['Có 1 liên kết đôi C=C.', 'Phản ứng cộng: C₂H₄ + Br₂ → C₂H₄Br₂ (làm mất màu nước brom).', 'Phản ứng trùng hợp: tạo polyethylene (PE) — túi nhựa.'] },
      { h: 'Acetylene C₂H₂' },
      { ul: ['Có 1 liên kết ba C≡C.', 'Dùng để hàn cắt kim loại (đèn xì oxy-acetylene).', 'Phản ứng cộng nước → CH₃CHO (sản xuất giấm).'] },
      { note: 'Sự khác biệt no/không no: no chỉ có phản ứng thế; không no có cả thế và cộng.' },
    ],
    [
      { q: 'Vì sao ethylene làm mất màu nước Br₂?', a: 'Br₂ cộng vào liên kết đôi C=C: C₂H₄ + Br₂ → C₂H₄Br₂.' },
      { q: 'Ứng dụng C₂H₂?', a: 'Hàn cắt kim loại (nhiệt độ ngọn lửa lên ~3000°C), sản xuất nhựa, dung môi.' },
    ]
  ),

  'S9KHTN-w24-quiz': L(
    'Benzen và dầu mỏ',
    'Benzen là hợp chất thơm cơ bản — quan trọng trong công nghiệp.',
    ['Hiểu cấu tạo benzen.', 'Hiểu vai trò dầu mỏ.'],
    [
      { h: 'Benzen C₆H₆' },
      { ul: ['Vòng 6 cạnh, mỗi C liên kết 1H.', 'Có 3 liên kết đôi xen kẽ (cộng hưởng).', 'Chất lỏng không màu, mùi đặc trưng, độc.', 'Dùng làm dung môi, nguyên liệu sản xuất nhựa, thuốc.'] },
      { h: 'Dầu mỏ' },
      { ul: ['Hỗn hợp hydrocarbon (chủ yếu).', 'Chưng cất phân đoạn → xăng, dầu hoả, dầu nhờn, asphalt.', 'Nguồn năng lượng chính của thế kỷ 20.'] },
      { note: 'Dầu mỏ không tái tạo; cần chuyển sang năng lượng sạch.' },
    ],
    [
      { q: 'Vì sao benzen có cấu trúc đặc biệt?', a: '3 liên kết đôi xen kẽ trong vòng 6 cạnh, electron pi bị "phân bố đều" — tính thơm.' },
      { q: 'Tại sao dầu mỏ là vấn đề môi trường?', a: 'Đốt dầu thải CO₂ gây hiệu ứng nhà kính; tràn dầu gây ô nhiễm biển.' },
    ]
  ),

  'S9KHTN-w25-quiz': L(
    'Rượu ethylic (C₂H₅OH)',
    'Rượu ethylic — hợp chất hữu cơ phổ biến trong đời sống.',
    ['Hiểu cấu tạo và tính chất ethanol.', 'Tác hại của lạm dụng rượu.'],
    [
      { h: 'Cấu tạo + tính chất' },
      { ul: ['CTCT: CH₃-CH₂-OH (có nhóm -OH).', 'Chất lỏng không màu, mùi đặc trưng, tan vô hạn trong nước.', 'Phản ứng cháy: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.', 'Phản ứng với Na: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑.'] },
      { h: 'Sản xuất + ứng dụng' },
      { ul: ['Sản xuất bằng lên men đường (rượu vang, bia).', 'Dùng làm dung môi, nhiên liệu, sát khuẩn.', 'Cồn y tế: 70% ethanol.'] },
      { note: 'Lạm dụng rượu gây hại gan, thần kinh, mất an toàn giao thông.' },
    ],
    [
      { q: 'Vì sao cồn 70% sát khuẩn tốt hơn 90%?', a: 'Cồn 70% thẩm thấu qua màng vi khuẩn tốt hơn (90% làm protein đông tụ quá nhanh, không xuyên qua).' },
      { q: 'Tác hại của lái xe khi say rượu?', a: 'Giảm phản xạ, mất kiểm soát → tai nạn giao thông; bị pháp luật xử nghiêm.' },
    ]
  ),

  'S9KHTN-w26-quiz': L(
    'Axit axetic (CH₃COOH) và chất béo',
    'Axit axetic là thành phần chính của giấm; chất béo là nguồn dinh dưỡng quan trọng.',
    ['Hiểu tính chất axit hữu cơ.', 'Phân biệt este, chất béo.'],
    [
      { h: 'Axit axetic CH₃COOH' },
      { ul: ['Có nhóm -COOH.', 'Chất lỏng không màu, vị chua, có trong giấm ăn (5-8%).', 'Tính axit yếu: làm quỳ đỏ, phản ứng với kim loại, oxit bazơ, bazơ, muối cacbonat.', 'Phản ứng este hoá với rượu: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.'] },
      { h: 'Chất béo' },
      { ul: ['Este của glycerol với axit béo.', 'Có trong dầu thực vật, mỡ động vật.', 'Là nguồn năng lượng quan trọng (9 kcal/g).'] },
      { note: 'Chất béo không thể thiếu nhưng ăn quá nhiều gây béo phì, tim mạch.' },
    ],
    [
      { q: 'PT giấm tác dụng với baking soda (NaHCO₃)?', a: 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑ (sủi bọt).' },
      { q: 'Lợi ích chất béo?', a: 'Cung cấp năng lượng, hấp thụ vitamin tan trong dầu (A, D, E, K), cấu tạo màng tế bào.' },
    ]
  ),

  'S9KHTN-w27-quiz': L(
    'Glucose và saccharose — Carbohydrate',
    'Carbohydrate là nguồn năng lượng chính cho cơ thể.',
    ['Phân biệt monosaccharide, disaccharide.', 'Hiểu vai trò sinh học.'],
    [
      { h: 'Glucose C₆H₁₂O₆' },
      { ul: ['Monosaccharide (đường đơn).', 'Có trong nho chín, máu người (đường huyết).', 'Là nguồn năng lượng trực tiếp cho tế bào (hô hấp).'] },
      { h: 'Saccharose C₁₂H₂₂O₁₁' },
      { ul: ['Disaccharide (đường đôi), do glucose + fructose tạo thành.', 'Có trong mía, củ cải đường (đường ăn).', 'Khi tiêu hoá, bị thuỷ phân thành đường đơn.'] },
      { h: 'Polysaccharide' },
      { ul: ['Tinh bột (gạo, khoai), cellulose (sợi rau, gỗ).', 'Khi tiêu hoá → glucose.'] },
      { note: 'Người tiểu đường cần kiểm soát lượng đường tinh để giữ đường huyết ổn định.' },
    ],
    [
      { q: 'Vì sao ăn cơm cũng cho đường huyết?', a: 'Tinh bột trong cơm bị tiêu hoá → glucose → vào máu.' },
      { q: 'Vai trò cellulose với cơ thể?', a: 'Người không tiêu hoá được cellulose nhưng nó là chất xơ giúp tiêu hoá tốt.' },
    ]
  ),

  'S9KHTN-w28-quiz': L(
    'Protein và polyme',
    'Protein là cơ sở của sự sống; polyme là vật liệu thời đại mới.',
    ['Hiểu cấu trúc protein.', 'Phân biệt các polyme tổng hợp.'],
    [
      { h: 'Protein' },
      { ul: ['Polyme tự nhiên từ amino acid.', 'Có trong thịt, cá, trứng, sữa, đậu.', 'Vai trò: cấu trúc cơ thể, enzym, kháng thể, hormone.'] },
      { h: 'Polyme tổng hợp' },
      { ul: ['PE (polyethylene): túi nilon.', 'PVC (polyvinyl clorua): ống nước, dây điện.', 'PS (polystyrene): xốp.', 'Nylon, polyester: sợi tổng hợp.'] },
      { note: 'Vấn đề rác thải nhựa: phân huỷ chậm (~500 năm), ô nhiễm môi trường — cần giảm dùng nhựa 1 lần.' },
    ],
    [
      { q: 'Tại sao protein quan trọng cho HS đang lớn?', a: 'Cần để xây dựng cơ, xương, sinh trưởng.' },
      { q: 'Giải pháp giảm rác thải nhựa?', a: 'Dùng túi vải, mang chai nước riêng, hạn chế đồ nhựa 1 lần, tái chế.' },
    ]
  ),

  'S9KHTN-w29-quiz': L(
    'Di truyền — Mendel và quy luật phân ly',
    'Mendel — cha đẻ của di truyền học, người phát hiện các quy luật di truyền cơ bản.',
    ['Hiểu các thí nghiệm Mendel.', 'Nắm quy luật phân ly.'],
    [
      { h: 'Mendel và đậu Hà Lan' },
      { p: 'Mendel (1822-1884) thí nghiệm trên đậu Hà Lan, phát hiện ra các quy luật di truyền cơ bản.' },
      { h: 'Quy luật phân ly' },
      { ul: ['Mỗi tính trạng do 1 cặp gen quy định, gen của bố và mẹ tách ra ngẫu nhiên vào giao tử.', 'F1 lai 2 dòng thuần chủng đối lập → đồng tính trội.', 'F2 (F1 × F1) → 3 trội : 1 lặn.'] },
      { h: 'Kiểu gen + kiểu hình' },
      { ul: ['Đồng hợp tử: AA hoặc aa.', 'Dị hợp tử: Aa.', 'Trội: A > a, kiểu gen Aa và AA đều biểu hiện kiểu hình A.'] },
      { note: 'Mendel là nền tảng của di truyền học hiện đại.' },
    ],
    [
      { q: 'F1: Aa × Aa → tỉ lệ F2?', a: '1 AA : 2 Aa : 1 aa (1/4 AA, 2/4 Aa, 1/4 aa); kiểu hình 3 trội : 1 lặn.' },
      { q: 'Tại sao Mendel chọn đậu Hà Lan?', a: 'Dễ trồng, sinh sản nhanh, có nhiều tính trạng đối lập rõ ràng.' },
    ]
  ),

  'S9KHTN-w30-quiz': L(
    'Cấu trúc DNA và sao mã',
    'DNA — phân tử mang thông tin di truyền, là cơ sở của sự sống.',
    ['Hiểu cấu trúc xoắn kép của DNA.', 'Hiểu cơ chế sao chép.'],
    [
      { h: 'Cấu trúc DNA' },
      { ul: ['Xoắn kép (Watson-Crick, 1953).', 'Gồm 4 nucleotide: A, T, G, C.', 'Cặp base: A-T (2 liên kết H), G-C (3 liên kết H).'] },
      { h: 'Sao chép DNA' },
      { p: 'DNA tự nhân đôi: 2 mạch tách ra, mỗi mạch làm khuôn tổng hợp mạch mới → 2 DNA con giống nhau và giống mẹ.' },
      { note: 'Watson và Crick nhận Nobel Y học 1962 nhờ phát hiện cấu trúc DNA.' },
    ],
    [
      { q: 'Nếu một mạch là ATCGAT, mạch còn lại?', a: 'TAGCTA (theo nguyên tắc bổ sung).' },
      { q: 'Tại sao DNA xoắn kép quan trọng?', a: 'Cấu trúc bền vững + dễ sao chép + bảo vệ thông tin di truyền.' },
    ]
  ),

  'S9KHTN-w31-quiz': L(
    'Gen, mã di truyền, dịch mã',
    'Từ gen → protein qua hai bước: phiên mã (DNA → RNA) và dịch mã (RNA → protein).',
    ['Hiểu khái niệm gen và mã di truyền.', 'Quá trình phiên mã và dịch mã.'],
    [
      { h: 'Gen' },
      { p: 'Đoạn DNA mang thông tin di truyền quy định 1 protein.' },
      { h: 'Mã di truyền' },
      { ul: ['Mã bộ ba: 3 nucleotide → 1 axit amin.', '64 mã (4³), nhưng chỉ 20 amino acid → mã thoái hoá (nhiều mã cùng amino acid).', 'Mã chung cho hầu hết sinh vật.'] },
      { h: 'Phiên mã + Dịch mã' },
      { ul: ['Phiên mã: DNA → mRNA (trong nhân).', 'Dịch mã: mRNA → protein (tại ribosome).'] },
      { note: 'Đột biến gen có thể thay đổi protein, dẫn đến bệnh di truyền.' },
    ],
    [
      { q: 'Tại sao mã thoái hoá có lợi?', a: 'Giảm tác hại của đột biến: nhiều đột biến không thay đổi amino acid → protein vẫn bình thường.' },
      { q: 'Đột biến gen có thể gây bệnh nào?', a: 'Bệnh hồng cầu hình liềm, bệnh máu khó đông, một số bệnh ung thư.' },
    ]
  ),

  'S9KHTN-w32-quiz': L(
    'Di truyền học người + Bệnh di truyền',
    'Áp dụng di truyền học vào con người — hiểu bệnh và phòng tránh.',
    ['Biết các bệnh di truyền phổ biến.', 'Hiểu nguyên tắc tư vấn di truyền.'],
    [
      { h: 'Bệnh di truyền phổ biến' },
      { ul: ['Bệnh máu khó đông (hemophilia): X-linked recessive.', 'Mù màu: X-linked recessive (nam dễ bị hơn).', 'Hội chứng Down: 3 NST 21.', 'Phenylketonuria (PKU): rối loạn chuyển hoá.'] },
      { h: 'Phòng tránh' },
      { ul: ['Tư vấn di truyền trước khi có con.', 'Sàng lọc trước sinh.', 'Không kết hôn cận huyết (tăng nguy cơ bệnh lặn).'] },
      { note: 'Hiểu di truyền giúp ra quyết định sáng suốt về sức khoẻ.' },
    ],
    [
      { q: 'Tại sao mù màu nam nhiều hơn nữ?', a: 'Gen mù màu nằm trên X (lặn); nam chỉ có 1 X nên cần 1 gen lặn là biểu hiện; nữ có 2 X cần cả 2 gen lặn.' },
      { q: 'Vì sao cấm kết hôn cận huyết?', a: 'Tăng nguy cơ con sinh ra mang bệnh di truyền lặn (cùng dòng họ thường mang gen lặn giống nhau).' },
    ]
  ),

  'S9KHTN-w33-quiz': L(
    'Tiến hoá — Darwin và chọn lọc tự nhiên',
    'Thuyết tiến hoá của Darwin — một trong những khám phá vĩ đại nhất.',
    ['Hiểu cơ chế chọn lọc tự nhiên.', 'Bằng chứng tiến hoá.'],
    [
      { h: 'Darwin và "Nguồn gốc các loài" (1859)' },
      { p: 'Charles Darwin đề xuất thuyết tiến hoá qua chọn lọc tự nhiên.' },
      { h: 'Cơ chế' },
      { ul: ['Biến dị di truyền trong quần thể.', 'Áp lực chọn lọc (môi trường, kẻ thù).', 'Cá thể thích nghi tốt → sống sót, sinh sản → truyền gen.', 'Qua nhiều thế hệ → loài thay đổi.'] },
      { h: 'Bằng chứng' },
      { ul: ['Hoá thạch.', 'So sánh giải phẫu (cánh dơi, tay người).', 'Sinh học phân tử (DNA, protein).'] },
      { note: 'Tiến hoá đã được xác nhận bằng nhiều nguồn bằng chứng độc lập.' },
    ],
    [
      { q: 'Vì sao kháng sinh dần mất tác dụng?', a: 'Vi khuẩn chọn lọc: cá thể có gen kháng sinh sống sót, sinh sản nhiều → quần thể kháng sinh.' },
      { q: 'Vì sao bướm đêm Anh đổi màu thời cách mạng công nghiệp?', a: 'Khói than làm vỏ cây đen → bướm sẫm màu nguỵ trang tốt hơn → sống sót nhiều hơn.' },
    ]
  ),

  'S9KHTN-w34-quiz': L(
    'Ôn tập KHTN — Tổng hợp',
    'Tổng hợp 3 phân môn vật lý, hoá học, sinh học.',
    ['Hệ thống kiến thức 3 môn.', 'Vận dụng giải bài tổng hợp.'],
    [
      { h: 'Trọng tâm ôn' },
      { ul: ['Vật lý: điện học (Ohm, công suất, cảm ứng), quang học (thấu kính, mắt).', 'Hoá học: kim loại + dãy hoạt động, hữu cơ cơ bản.', 'Sinh học: di truyền, DNA, tiến hoá.'] },
      { note: 'KHTN có thể là môn thi thứ 4 vào 10. Nắm chắc kiến thức cơ bản là chìa khoá.' },
    ],
    [
      { q: 'Tại sao biến đổi khí hậu liên quan đến hoá học?', a: 'CO₂ và các khí nhà kính (CH₄, N₂O...) làm Trái Đất nóng lên.' },
      { q: 'DNA chứa thông tin di truyền như thế nào?', a: 'Trình tự 4 nucleotide A, T, G, C tạo thành mã di truyền quy định protein.' },
    ]
  ),

  'S9KHTN-w35-quiz': L(
    'Đề ôn thi vào 10 — KHTN',
    'Đề thi thử cuối cùng — chuẩn bị tâm lý cho kỳ thi.',
    ['Làm đề thi thử.', 'Tự đánh giá năng lực.'],
    [
      { h: 'Chuẩn bị thi' },
      { ul: ['Ôn lại sai lầm từ các đề trước.', 'Ngủ đủ giấc trước thi.', 'Mang đủ dụng cụ.', 'Bình tĩnh, tự tin.'] },
      { note: 'KHTN trong đề thi vào 10 thường tích hợp 3 phân môn. Đọc kỹ đề + phân bổ thời gian hợp lý. Chúc các em thi tốt!' },
    ],
    [
      { q: 'Mẹo làm bài KHTN tổng hợp?', a: 'Đọc lướt toàn đề trước. Làm câu dễ trước, câu khó để sau. Tận dụng kiến thức liên môn.' },
      { q: 'Khi gặp câu không biết?', a: 'Loại trừ đáp án rõ ràng sai trước. Sau đó đoán có cơ sở. Không bỏ trống.' },
    ]
  ),
};
