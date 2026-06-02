// ============================================================
// Lớp 8 · KHTN — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Hoá - Lý - Sinh tích hợp. Key TRÙNG id quiz: "S8KHTN-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8KHTN_LESSONS = {
  'S8KHTN-w01-quiz': L(
    'Phản ứng hoá học — Khái niệm',
    'Mở đầu Hoá học lớp 8 với phản ứng hoá học — biến đổi cốt lõi của Hoá.',
    ['Hiểu khái niệm phản ứng hoá học.', 'Phân biệt biến đổi vật lý và hoá học.', 'Nhận biết dấu hiệu phản ứng.'],
    [
      { h: 'Phản ứng hoá học' },
      { p: 'Phản ứng hoá học là quá trình biến đổi chất này thành chất khác. Chất tham gia gọi là chất phản ứng; chất sinh ra gọi là sản phẩm.' },
      { h: 'Phân biệt với biến đổi vật lý' },
      { ul: ['Biến đổi vật lý: thay đổi trạng thái, hình dạng, không sinh chất mới (đun nước sôi, nghiền nát đá).', 'Biến đổi hoá học: sinh chất mới (đốt giấy → tro + khí).'] },
      { h: 'Dấu hiệu nhận biết' },
      { ul: ['Thay đổi màu sắc.', 'Có khí thoát ra (sủi bọt).', 'Có kết tủa hình thành.', 'Có toả nhiệt hoặc hấp thu nhiệt.', 'Có ánh sáng phát ra.'] },
    ],
    [
      { q: 'Đốt magie cháy sáng tạo MgO. Đây là biến đổi gì?', a: 'Biến đổi hoá học — sinh chất mới (MgO) và có ánh sáng.' },
      { q: 'Nước đá tan thành nước lỏng là biến đổi gì?', a: 'Biến đổi vật lý — chỉ thay đổi trạng thái, vẫn là H₂O.' },
    ]
  ),

  'S8KHTN-w02-quiz': L(
    'Phương trình hoá học — Cân bằng',
    'Phương trình hoá học là cách biểu diễn phản ứng — cần cân bằng nguyên tử mỗi nguyên tố.',
    ['Viết phương trình hoá học.', 'Cân bằng phương trình.', 'Hiểu định luật bảo toàn khối lượng.'],
    [
      { h: 'Phương trình hoá học' },
      { p: 'Phương trình hoá học biểu diễn phản ứng bằng công thức hoá học. VD: 2H₂ + O₂ → 2H₂O.' },
      { h: 'Định luật bảo toàn khối lượng (Lavoisier)' },
      { p: 'Trong phản ứng hoá học, tổng khối lượng các chất phản ứng = tổng khối lượng các chất sản phẩm. Do đó phương trình phải cân bằng số nguyên tử mỗi nguyên tố.' },
      { h: 'Cách cân bằng' },
      { ul: ['Bước 1: Viết sơ đồ phản ứng (công thức).', 'Bước 2: Đếm số nguyên tử mỗi nguyên tố ở 2 vế.', 'Bước 3: Đặt hệ số phù hợp để cân bằng (không thay đổi chỉ số).'] },
    ],
    [
      { q: 'Cân bằng: H₂ + O₂ → H₂O.', a: '2H₂ + O₂ → 2H₂O.' },
      { q: 'Cân bằng: Fe + O₂ → Fe₂O₃.', a: '4Fe + 3O₂ → 2Fe₂O₃.' },
    ]
  ),

  'S8KHTN-w03-quiz': L(
    'Mol — Khối lượng mol',
    'Mol là đại lượng đo lượng chất ở mức nguyên tử/phân tử.',
    ['Hiểu khái niệm mol.', 'Tính khối lượng mol.', 'Chuyển đổi mol ↔ khối lượng.'],
    [
      { h: 'Khái niệm mol' },
      { p: '1 mol = lượng chất chứa 6,022 × 10²³ hạt (số Avogadro). Đây là cầu nối giữa thế giới hạt vi mô và khối lượng vĩ mô.' },
      { h: 'Khối lượng mol (M)' },
      { p: 'Khối lượng mol M là khối lượng của 1 mol nguyên tử/phân tử, đơn vị g/mol. M của 1 chất = nguyên tử khối/phân tử khối.' },
      { ul: ['M(H) = 1 g/mol; M(O) = 16 g/mol.', 'M(H₂O) = 2·1 + 16 = 18 g/mol.', 'M(NaCl) = 23 + 35,5 = 58,5 g/mol.'] },
      { h: 'Công thức' },
      { p: 'n = m/M  (n: số mol, m: khối lượng (g), M: khối lượng mol (g/mol)).' },
    ],
    [
      { q: 'Tính số mol của 36g H₂O.', a: 'M(H₂O) = 18 g/mol. n = 36/18 = 2 mol.' },
      { q: '0,5 mol NaCl nặng bao nhiêu g?', a: 'M(NaCl) = 58,5. m = 0,5·58,5 = 29,25 g.' },
    ]
  ),

  'S8KHTN-w04-quiz': L(
    'Tính theo phương trình hoá học',
    'Sau khi biết mol, ta áp dụng để tính khối lượng/thể tích chất tham gia/sản phẩm.',
    ['Lập phương trình.', 'Tính số mol chất đã biết.', 'Suy ra mol và khối lượng chất khác.'],
    [
      { h: 'Các bước tính' },
      { ul: ['Bước 1: Viết và cân bằng phương trình.', 'Bước 2: Tính số mol chất đã biết (n = m/M).', 'Bước 3: Theo tỉ lệ phương trình, suy ra mol chất cần tìm.', 'Bước 4: Tính khối lượng (m = n·M) hoặc thể tích khí ở đktc (V = n·22,4).'] },
      { note: 'Ở đktc (0°C, 1 atm), 1 mol khí chiếm 22,4 lít.' },
    ],
    [
      { q: 'Đốt 5,6g Fe trong O₂ dư. Tính m(Fe₂O₃) tạo thành.', a: 'n(Fe) = 5,6/56 = 0,1 mol. PT: 4Fe+3O₂→2Fe₂O₃. n(Fe₂O₃) = 0,1/2 = 0,05 mol. m = 0,05·160 = 8 g.' },
      { q: 'V O₂ (đktc) cần để đốt hết 4g H₂?', a: 'n(H₂) = 4/2 = 2 mol. 2H₂+O₂→2H₂O. n(O₂)=1 mol. V=22,4 L.' },
    ]
  ),

  'S8KHTN-w05-quiz': L(
    'Dung dịch — Nồng độ phần trăm',
    'Dung dịch là hỗn hợp đồng nhất — học cách tính nồng độ phần trăm (C%).',
    ['Hiểu chất tan, dung môi, dung dịch.', 'Công thức C%.', 'Bài tập áp dụng.'],
    [
      { h: 'Dung dịch' },
      { p: 'Dung dịch = hỗn hợp đồng nhất gồm chất tan + dung môi. VD: nước muối (NaCl tan trong H₂O).' },
      { h: 'Nồng độ phần trăm (C%)' },
      { p: 'C% = (m_tan / m_dd) × 100% — phần trăm khối lượng chất tan trong dung dịch.' },
      { p: 'm_dd = m_tan + m_dung_môi.' },
    ],
    [
      { q: 'Hoà 10g muối vào 90g nước. Tính C%.', a: 'm_dd = 100g. C% = 10/100·100% = 10%.' },
      { q: 'Dung dịch 200g có C% = 5%. Tính m chất tan.', a: 'm = 200·5/100 = 10g.' },
    ]
  ),

  'S8KHTN-w06-quiz': L(
    'Nồng độ mol — Áp dụng',
    'Nồng độ mol đo số mol chất tan trong 1 lít dung dịch.',
    ['Công thức C_M.', 'Bài tập tính C_M.', 'Pha loãng dung dịch.'],
    [
      { h: 'Nồng độ mol (C_M)' },
      { p: 'C_M = n_tan / V_dd  (mol/L). Đơn vị: M (mol/L).' },
      { h: 'Pha loãng dung dịch' },
      { p: 'Khi pha loãng (thêm nước), số mol chất tan không đổi: C₁·V₁ = C₂·V₂.' },
    ],
    [
      { q: 'Hoà 0,5 mol NaOH vào nước được 2 L dd. Tính C_M.', a: 'C_M = 0,5/2 = 0,25 M.' },
      { q: 'Pha loãng 100mL dd HCl 2M → 500mL. C_M mới?', a: '2·0,1 = C₂·0,5 ⇒ C₂ = 0,4 M.' },
    ]
  ),

  'S8KHTN-w07-quiz': L(
    'Acid (axit) — Tính chất hoá học',
    'Acid là nhóm chất hoá học quan trọng — học các tính chất chính.',
    ['Khái niệm acid.', 'Tính chất chung của acid.', 'Một số acid tiêu biểu.'],
    [
      { h: 'Khái niệm Acid' },
      { p: 'Acid (Axit) là hợp chất khi tan trong nước phân ly cho ion H⁺. Công thức chung: HₓA (vd HCl, H₂SO₄, HNO₃).' },
      { h: 'Tính chất hoá học' },
      { ul: ['Làm đỏ quỳ tím.', 'Tác dụng với kim loại → muối + H₂↑ (vd Zn + 2HCl → ZnCl₂ + H₂).', 'Tác dụng với base → muối + nước (trung hoà).', 'Tác dụng với oxit base → muối + nước.', 'Tác dụng với muối → muối mới + acid mới (đk: sản phẩm có ↓, ↑, hoặc acid yếu hơn).'] },
    ],
    [
      { q: 'Viết PT: Zn + HCl.', a: 'Zn + 2HCl → ZnCl₂ + H₂↑.' },
      { q: 'Acid mạnh điển hình?', a: 'HCl, H₂SO₄, HNO₃, HBr…' },
    ]
  ),

  'S8KHTN-w08-quiz': L(
    'Bazơ (base) — Tính chất',
    'Base là nhóm chất ngược lại với acid.',
    ['Khái niệm base.', 'Tính chất chung.', 'Phản ứng trung hoà.'],
    [
      { h: 'Khái niệm Base' },
      { p: 'Base (Bazơ) là hợp chất khi tan trong nước phân ly cho ion OH⁻. Công thức chung: M(OH)ₓ. VD: NaOH, KOH, Ca(OH)₂.' },
      { h: 'Tính chất hoá học' },
      { ul: ['Làm xanh quỳ tím (acid: đỏ).', 'Tác dụng với acid → muối + nước (trung hoà).', 'Tác dụng với oxit acid → muối + nước.', 'Base không tan bị nhiệt phân.'] },
      { p: 'Phản ứng trung hoà: HCl + NaOH → NaCl + H₂O.' },
    ],
    [
      { q: 'Viết PT: NaOH + HCl.', a: 'NaOH + HCl → NaCl + H₂O.' },
      { q: 'Quỳ tím nhúng vào dd NaOH thì?', a: 'Chuyển màu xanh.' },
    ]
  ),

  'S8KHTN-w09-quiz': L(
    'Muối — Tính chất, ứng dụng',
    'Muối là sản phẩm phổ biến của phản ứng trung hoà.',
    ['Khái niệm muối.', 'Tính chất hoá học.', 'Ứng dụng muối trong đời sống.'],
    [
      { h: 'Khái niệm Muối' },
      { p: 'Muối là hợp chất gồm gốc kim loại (M) và gốc acid (A). Công thức chung: MA. VD: NaCl, KNO₃, CuSO₄.' },
      { h: 'Tính chất' },
      { ul: ['Tác dụng với acid → muối mới + acid mới (đk).', 'Tác dụng với base → muối mới + base mới (đk).', 'Tác dụng với muối khác → 2 muối mới (đk).', 'Một số muối bị nhiệt phân.'] },
      { h: 'Ứng dụng' },
      { ul: ['NaCl — muối ăn, công nghiệp.', 'CaCO₃ — đá vôi xi măng.', 'Na₂CO₃ — thuỷ tinh, xà phòng.', 'NH₄NO₃ — phân bón.'] },
    ],
    [
      { q: 'PT: NaCl + AgNO₃ → ?', a: 'NaCl + AgNO₃ → NaNO₃ + AgCl↓ (kết tủa trắng).' },
      { q: 'Muối nào làm thuỷ tinh?', a: 'Na₂CO₃ (xút).' },
    ]
  ),

  'S8KHTN-w10-quiz': L(
    'Kim loại — Tính chất chung',
    'Kim loại là nhóm nguyên tố lớn, có tính chất đặc trưng.',
    ['Tính chất vật lý kim loại.', 'Tính chất hoá học.', 'Dãy hoạt động hoá học.'],
    [
      { h: 'Tính chất vật lý' },
      { ul: ['Ánh kim, dẫn điện, dẫn nhiệt tốt.', 'Dẻo, dễ dát mỏng.', 'Hầu hết rắn ở nhiệt độ thường (trừ Hg lỏng).'] },
      { h: 'Tính chất hoá học' },
      { ul: ['Tác dụng với phi kim → oxit, muối.', 'Tác dụng với acid → muối + H₂↑.', 'Tác dụng với muối: kim loại mạnh đẩy kim loại yếu khỏi dd muối.'] },
      { h: 'Dãy hoạt động hoá học' },
      { p: 'K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Hg, Ag, Au — giảm dần độ hoạt động.' },
    ],
    [
      { q: 'PT: Fe + CuSO₄ → ?', a: 'Fe + CuSO₄ → FeSO₄ + Cu (Fe đẩy Cu khỏi muối).' },
      { q: 'Kim loại nào trong dãy hoạt động yếu nhất?', a: 'Au (vàng) — kim loại quý nhất.' },
    ]
  ),

  'S8KHTN-w11-quiz': L(
    'Phi kim — Một số phi kim quan trọng',
    'Phi kim đối lập với kim loại — có nhiều ứng dụng quan trọng.',
    ['Tính chất chung phi kim.', 'Một số phi kim quan trọng.', 'Ứng dụng.'],
    [
      { h: 'Tính chất chung' },
      { p: 'Phi kim không dẫn điện, dẫn nhiệt kém (trừ C graphite); có thể ở 3 trạng thái (S rắn, Br₂ lỏng, O₂ khí).' },
      { h: 'Một số phi kim' },
      { ul: ['Oxi (O₂): duy trì hô hấp, đốt cháy.', 'Cacbon (C): than, kim cương, graphite.', 'Lưu huỳnh (S): axit sunfuric, lưu hoá cao su.', 'Clo (Cl₂): khử trùng nước, sản xuất nhựa.', 'Silicon (Si): chip điện tử.'] },
    ],
    [
      { q: 'Oxi có vai trò gì?', a: 'Duy trì sự cháy và hô hấp của sinh vật.' },
      { q: 'Phi kim nào dùng làm chip điện tử?', a: 'Silicon (Si).' },
    ]
  ),

  'S8KHTN-w12-quiz': L(
    'Lực — Khái niệm và biểu diễn',
    'Bắt đầu Vật lý lớp 8 với lực — đại lượng quan trọng cơ học.',
    ['Khái niệm lực.', 'Biểu diễn lực bằng vector.', 'Các loại lực.'],
    [
      { h: 'Lực' },
      { p: 'Lực là đại lượng vector, đặc trưng cho tương tác giữa các vật, có thể làm vật biến đổi chuyển động hoặc biến dạng. Đơn vị: Newton (N).' },
      { h: 'Biểu diễn lực' },
      { p: 'Lực biểu diễn bằng mũi tên (vector) với 3 yếu tố: điểm đặt, phương-chiều, độ lớn.' },
      { h: 'Các loại lực' },
      { ul: ['Lực hấp dẫn (trọng lực).', 'Lực đàn hồi (lò xo).', 'Lực ma sát (cản trở chuyển động).', 'Lực điện, lực từ.'] },
    ],
    [
      { q: 'Đơn vị của lực là?', a: 'Newton (N).' },
      { q: '3 yếu tố của vector lực?', a: 'Điểm đặt, phương-chiều, độ lớn.' },
    ]
  ),

  'S8KHTN-w13-quiz': L(
    'Áp suất — Áp suất chất rắn, lỏng, khí',
    'Áp suất đo lực tác dụng trên đơn vị diện tích.',
    ['Công thức áp suất.', 'Áp suất chất rắn, lỏng, khí.', 'Định luật Pascal.'],
    [
      { h: 'Áp suất (p)' },
      { p: 'p = F/S  (đơn vị Pa = N/m²). F là lực ép vuông góc, S là diện tích bị ép.' },
      { h: 'Áp suất chất lỏng' },
      { p: 'Áp suất tại điểm trong chất lỏng: p = ρ·g·h (ρ: khối lượng riêng, g: 10 N/kg, h: độ sâu).' },
      { h: 'Áp suất khí quyển' },
      { p: '≈ 101 325 Pa = 1 atm ≈ 760 mmHg ở mực nước biển.' },
    ],
    [
      { q: 'Áp suất tại đáy hồ sâu 5m (ρ=1000 kg/m³)?', a: 'p = 1000·10·5 = 50 000 Pa.' },
      { q: 'Vì sao đi giày cao gót lún sâu hơn?', a: 'Diện tích tiếp xúc nhỏ → áp suất lớn (p = F/S).' },
    ]
  ),

  'S8KHTN-w14-quiz': L(
    'Đòn bẩy — Máy cơ đơn giản',
    'Đòn bẩy giúp ta thực hiện công việc với lực nhỏ hơn.',
    ['Cấu tạo đòn bẩy.', 'Quy tắc cân bằng đòn bẩy.', 'Ứng dụng trong đời sống.'],
    [
      { h: 'Đòn bẩy' },
      { p: 'Đòn bẩy có 3 yếu tố: điểm tựa O, điểm tác dụng lực F (cánh tay đòn d₁), điểm tác dụng tải P (cánh tay đòn d₂).' },
      { h: 'Quy tắc cân bằng' },
      { p: 'F · d₁ = P · d₂. Nếu d₁ > d₂ → F < P (lợi về lực, thiệt về đường đi).' },
      { h: 'Ứng dụng' },
      { ul: ['Bập bênh, cờ-lê, kéo, búa nhổ đinh, xe rùa.'] },
    ],
    [
      { q: 'Đòn bẩy có d₁=2m, d₂=0,5m. Để nâng P=200N, cần F?', a: 'F = P·d₂/d₁ = 200·0,5/2 = 50 N.' },
      { q: 'Vì sao mở nắp chai bằng đồ khui dễ hơn tay?', a: 'Đồ khui là đòn bẩy có d₁ lớn — tạo lực lớn hơn nhiều so với tay tác động.' },
    ]
  ),

  'S8KHTN-w15-quiz': L(
    'Công và năng lượng',
    'Công và năng lượng — hai khái niệm gắn bó.',
    ['Công thức tính công.', 'Khái niệm năng lượng.', 'Đơn vị joule.'],
    [
      { h: 'Công cơ học' },
      { p: 'A = F·s  (F: lực N, s: quãng đường m). Đơn vị: Joule (J) = N·m.' },
      { p: 'Lực không sinh công khi vật không chuyển động hoặc lực vuông góc chuyển động.' },
      { h: 'Năng lượng' },
      { p: 'Năng lượng là đại lượng đặc trưng cho khả năng sinh công. Đơn vị: Joule. Các dạng: động năng, thế năng, nhiệt năng, điện năng…' },
    ],
    [
      { q: 'Tính công khi đẩy hộp 50N đi 10m.', a: 'A = 50·10 = 500 J.' },
      { q: 'Cầm yên hộp nặng có sinh công không?', a: 'Không — vì vật không di chuyển (s=0).' },
    ]
  ),

  'S8KHTN-w16-quiz': L(
    'Định luật bảo toàn năng lượng',
    'Định luật bảo toàn năng lượng là 1 trong các định luật quan trọng nhất Vật lý.',
    ['Phát biểu định luật.', 'Sự chuyển hoá năng lượng.', 'Ứng dụng.'],
    [
      { h: 'Định luật bảo toàn năng lượng' },
      { p: 'Năng lượng không tự sinh ra cũng không tự mất đi, mà chỉ chuyển từ dạng này sang dạng khác hoặc từ vật này sang vật khác.' },
      { h: 'Chuyển hoá năng lượng' },
      { ul: ['Pin: hoá năng → điện năng.', 'Bóng đèn: điện năng → quang năng + nhiệt năng.', 'Quả bóng rơi: thế năng → động năng → nhiệt năng (khi va đất).', 'Cối xay gió: cơ năng gió → điện năng.'] },
    ],
    [
      { q: 'Bóng đèn LED chuyển năng lượng gì?', a: 'Điện năng → quang năng (chính) + nhiệt năng (ít).' },
      { q: 'Vì sao không có "động cơ vĩnh cửu"?', a: 'Vi phạm định luật bảo toàn năng lượng — không thể tạo năng lượng từ hư vô.' },
    ]
  ),

  'S8KHTN-w17-quiz': L(
    'Sinh học — Khái quát cơ thể người',
    'Bắt đầu Sinh học với khái quát cơ thể người.',
    ['Các cấp tổ chức cơ thể.', '11 hệ cơ quan chính.', 'Mối quan hệ giữa các hệ.'],
    [
      { h: 'Các cấp tổ chức' },
      { p: 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.' },
      { h: '11 hệ cơ quan' },
      { ul: ['Hệ vận động (xương, cơ).', 'Hệ tuần hoàn (tim, mạch).', 'Hệ hô hấp.', 'Hệ tiêu hoá.', 'Hệ bài tiết.', 'Hệ thần kinh.', 'Hệ nội tiết.', 'Hệ sinh dục.', 'Hệ miễn dịch.', 'Hệ giác quan.', 'Hệ vỏ (da).'] },
      { note: 'Các hệ cơ quan phối hợp chặt chẽ để duy trì sự sống.' },
    ],
    [
      { q: 'Cấp tổ chức cao nhất là?', a: 'Cơ thể.' },
      { q: '11 hệ cơ quan phối hợp để?', a: 'Duy trì sự sống và hoạt động bình thường của cơ thể.' },
    ]
  ),

  'S8KHTN-w18-quiz': L(
    'Ôn tập HK1',
    'Tổng hợp Hoá - Lý - Sinh HK1.',
    ['Ôn Hoá: phản ứng, mol, dung dịch, acid-base-muối.', 'Ôn Lý: lực, áp suất, công, bảo toàn năng lượng.', 'Ôn Sinh: cấp tổ chức cơ thể.'],
    [
      { h: 'Tổng kết HK1' },
      { ul: ['Hoá: phản ứng hoá học + cân bằng PT, mol + tính toán, dung dịch (C%, CM), acid/base/muối/kim loại/phi kim.', 'Lý: lực, áp suất, đòn bẩy, công, năng lượng, bảo toàn năng lượng.', 'Sinh: cơ thể người 5 cấp tổ chức, 11 hệ cơ quan.'] },
    ],
    [
      { q: 'Tính mol của 22g CO₂.', a: 'M(CO₂)=44. n = 22/44 = 0,5 mol.' },
      { q: 'Định luật bảo toàn năng lượng phát biểu?', a: 'Năng lượng không tự sinh ra, không tự mất đi, chỉ chuyển từ dạng này sang dạng khác.' },
    ]
  ),

  'S8KHTN-w19-quiz': L(
    'Hệ vận động — Xương và khớp',
    'HK2 mở đầu với hệ vận động — phần xương và khớp.',
    ['Cấu tạo bộ xương.', 'Các loại khớp.', 'Vai trò hệ xương.'],
    [
      { h: 'Bộ xương người' },
      { p: 'Có ~206 xương, chia 3 phần: xương đầu, xương thân (cột sống + lồng ngực), xương chi.' },
      { h: 'Các loại khớp' },
      { ul: ['Khớp động: cử động nhiều (khớp vai, hông, gối, khuỷu).', 'Khớp bán động: cử động ít (giữa các đốt sống).', 'Khớp bất động: không cử động (xương sọ).'] },
      { h: 'Vai trò xương' },
      { ul: ['Nâng đỡ cơ thể.', 'Bảo vệ nội tạng.', 'Là chỗ bám cho cơ.', 'Sản xuất tế bào máu (tuỷ xương).'] },
    ],
    [
      { q: 'Người trưởng thành có khoảng bao nhiêu xương?', a: '206 xương.' },
      { q: 'Khớp gối là loại khớp nào?', a: 'Khớp động (cử động nhiều).' },
    ]
  ),

  'S8KHTN-w20-quiz': L(
    'Hệ vận động — Cơ',
    'Cơ là phần thứ 2 của hệ vận động — tạo ra chuyển động.',
    ['3 loại cơ.', 'Cấu tạo cơ vân.', 'Hoạt động co cơ.'],
    [
      { h: '3 loại cơ' },
      { ul: ['Cơ vân: bám vào xương, co theo ý muốn, tạo chuyển động.', 'Cơ trơn: trong nội tạng, co không theo ý muốn (ruột, mạch máu).', 'Cơ tim: chỉ có ở tim, co tự động liên tục.'] },
      { h: 'Cơ vân' },
      { p: 'Cơ vân = bó các sợi cơ. Mỗi sợi cơ chứa nhiều tơ cơ. Co cơ là kết quả các tơ cơ trượt lên nhau.' },
      { note: 'Cơ vân + xương tạo nên cơ chế đòn bẩy giúp ta vận động.' },
    ],
    [
      { q: '3 loại cơ là?', a: 'Cơ vân, cơ trơn, cơ tim.' },
      { q: 'Loại cơ nào co theo ý muốn?', a: 'Cơ vân.' },
    ]
  ),

  'S8KHTN-w21-quiz': L(
    'Hệ tuần hoàn — Tim và mạch máu',
    'Hệ tuần hoàn vận chuyển máu, oxy, chất dinh dưỡng khắp cơ thể.',
    ['Cấu tạo tim.', 'Hệ thống mạch máu.', 'Vòng tuần hoàn.'],
    [
      { h: 'Tim' },
      { p: 'Tim có 4 ngăn: 2 tâm nhĩ trên (trái, phải), 2 tâm thất dưới (trái, phải). Tim bơm máu nhờ co bóp tự động.' },
      { h: 'Mạch máu' },
      { ul: ['Động mạch: máu từ tim đi (thường mang máu giàu O₂).', 'Tĩnh mạch: máu về tim (thường mang máu giàu CO₂).', 'Mao mạch: nối động mạch và tĩnh mạch, trao đổi chất với tế bào.'] },
      { h: '2 vòng tuần hoàn' },
      { ul: ['Vòng nhỏ (phổi): tim phải → phổi → tim trái (oxy hoá máu).', 'Vòng lớn (cơ thể): tim trái → cơ thể → tim phải (cung cấp O₂ + chất dinh dưỡng).'] },
    ],
    [
      { q: 'Tim người có bao nhiêu ngăn?', a: '4 ngăn (2 nhĩ + 2 thất).' },
      { q: 'Động mạch chủ chứa máu loại gì?', a: 'Máu giàu O₂ (đỏ tươi), đi từ tim trái khắp cơ thể.' },
    ]
  ),

  'S8KHTN-w22-quiz': L(
    'Hệ tuần hoàn — Nhóm máu, miễn dịch',
    'Nhóm máu ABO và Rh; hệ miễn dịch bảo vệ cơ thể.',
    ['4 nhóm máu ABO.', 'Nhóm Rh.', 'Hệ miễn dịch.'],
    [
      { h: 'Nhóm máu ABO' },
      { ul: ['Nhóm A: có kháng nguyên A.', 'Nhóm B: có kháng nguyên B.', 'Nhóm AB: có cả A và B — nhận máu tất cả nhóm.', 'Nhóm O: không có kháng nguyên — cho được tất cả nhóm.'] },
      { p: 'Nguyên tắc truyền máu: máu cho không có kháng nguyên mà máu nhận có kháng thể.' },
      { h: 'Hệ miễn dịch' },
      { p: 'Bảo vệ cơ thể khỏi vi khuẩn, virus. Gồm bạch cầu, kháng thể, hệ thống lympho.' },
    ],
    [
      { q: 'Nhóm máu nào "cho vạn năng"?', a: 'Nhóm O (không có kháng nguyên A, B).' },
      { q: 'Nhóm máu nào "nhận vạn năng"?', a: 'Nhóm AB (không có kháng thể).' },
    ]
  ),

  'S8KHTN-w23-quiz': L(
    'Hệ hô hấp',
    'Hệ hô hấp đưa O₂ vào, thải CO₂ ra.',
    ['Cấu tạo hệ hô hấp.', 'Quá trình hô hấp.', 'Trao đổi khí.'],
    [
      { h: 'Cấu tạo hệ hô hấp' },
      { ul: ['Mũi → họng → thanh quản → khí quản → phế quản → phế nang (trong phổi).'] },
      { h: 'Quá trình hô hấp' },
      { ul: ['Hít vào: cơ hoành hạ, lồng ngực mở rộng, không khí vào.', 'Thở ra: cơ hoành nâng, lồng ngực thu, không khí ra.'] },
      { h: 'Trao đổi khí' },
      { p: 'Tại phế nang: O₂ từ không khí → máu; CO₂ từ máu → ra ngoài. Tại tế bào: O₂ → tế bào sản xuất năng lượng; CO₂ → máu.' },
    ],
    [
      { q: 'Nơi trao đổi khí giữa máu và không khí?', a: 'Phế nang trong phổi.' },
      { q: 'Khi hít vào, cơ hoành làm gì?', a: 'Cơ hoành hạ xuống làm lồng ngực mở rộng → không khí vào.' },
    ]
  ),

  'S8KHTN-w24-quiz': L(
    'Hệ tiêu hoá',
    'Hệ tiêu hoá biến thức ăn thành chất dinh dưỡng cho cơ thể.',
    ['Các cơ quan tiêu hoá.', 'Quá trình tiêu hoá.', 'Hấp thu chất dinh dưỡng.'],
    [
      { h: 'Các cơ quan' },
      { ul: ['Miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn.', 'Tuyến phụ: tuyến nước bọt, gan, tuỵ.'] },
      { h: 'Quá trình tiêu hoá' },
      { ul: ['Cơ học: răng nghiền, dạ dày-ruột co bóp.', 'Hoá học: enzyme phân giải thức ăn thành chất đơn giản (đường, axit amin, axit béo).'] },
      { h: 'Hấp thu' },
      { p: 'Hấp thu chủ yếu ở ruột non, qua các nhung mao đi vào máu.' },
    ],
    [
      { q: 'Nơi hấp thu chính các chất dinh dưỡng?', a: 'Ruột non (có nhiều nhung mao tăng diện tích hấp thu).' },
      { q: 'Vai trò enzyme tiêu hoá?', a: 'Phân giải thức ăn phức tạp thành chất đơn giản dễ hấp thu.' },
    ]
  ),

  'S8KHTN-w25-quiz': L(
    'Hệ bài tiết',
    'Hệ bài tiết loại bỏ chất thải khỏi cơ thể.',
    ['Cấu tạo hệ bài tiết.', 'Chức năng thận.', 'Bảo vệ thận.'],
    [
      { h: 'Hệ bài tiết' },
      { p: '2 thận → ống dẫn nước tiểu → bàng quang → niệu đạo. Mỗi thận có ~1 triệu nephron lọc máu.' },
      { h: 'Chức năng thận' },
      { ul: ['Lọc máu, loại bỏ chất độc/dư thừa.', 'Điều hoà nước và muối khoáng.', 'Điều hoà huyết áp.'] },
      { h: 'Bảo vệ thận' },
      { ul: ['Uống đủ nước (~2 L/ngày).', 'Không ăn quá mặn.', 'Vệ sinh đường tiết niệu.', 'Khám sức khoẻ định kỳ.'] },
    ],
    [
      { q: 'Cấu trúc lọc cơ bản của thận?', a: 'Nephron (~1 triệu/thận).' },
      { q: 'Vì sao cần uống đủ nước?', a: 'Giúp thận lọc tốt và đào thải chất độc — tránh sỏi thận.' },
    ]
  ),

  'S8KHTN-w26-quiz': L(
    'Hệ thần kinh — Cấu tạo',
    'Hệ thần kinh điều khiển hoạt động cơ thể.',
    ['Cấu tạo hệ thần kinh.', 'Não và tuỷ sống.', 'Tế bào thần kinh.'],
    [
      { h: 'Cấu tạo' },
      { ul: ['Hệ TK trung ương: não + tuỷ sống.', 'Hệ TK ngoại biên: dây thần kinh.'] },
      { h: 'Não' },
      { p: 'Não gồm 3 phần chính: đại não (suy nghĩ, trí nhớ), tiểu não (phối hợp vận động), thân não (chức năng sống cơ bản: tim, hô hấp).' },
      { h: 'Tế bào thần kinh (nơron)' },
      { p: 'Nơron gồm thân, sợi nhánh (dẫn xung vào), sợi trục (dẫn xung ra). Truyền tín hiệu giữa nơron qua synapse.' },
    ],
    [
      { q: 'Bộ phận nào điều khiển nhịp tim?', a: 'Thân não.' },
      { q: 'Bộ phận nào lưu giữ trí nhớ?', a: 'Đại não.' },
    ]
  ),

  'S8KHTN-w27-quiz': L(
    'Các giác quan — Mắt và tai',
    'Hai giác quan chính: thị giác (mắt) và thính giác (tai).',
    ['Cấu tạo mắt.', 'Cấu tạo tai.', 'Cơ chế nhìn và nghe.'],
    [
      { h: 'Mắt' },
      { ul: ['Giác mạc, thuỷ tinh thể, võng mạc.', 'Võng mạc có 2 loại tế bào: tế bào nón (màu sắc), tế bào que (sáng tối).'] },
      { h: 'Tai' },
      { ul: ['Tai ngoài: vành tai, ống tai.', 'Tai giữa: màng nhĩ + 3 xương con.', 'Tai trong: ốc tai (nghe) + ống bán nguyệt (thăng bằng).'] },
      { note: 'Tai trong còn có vai trò giữ thăng bằng — vì sao ta bị chóng mặt khi xoay.' },
    ],
    [
      { q: 'Tế bào nào trên võng mạc cảm nhận màu sắc?', a: 'Tế bào nón.' },
      { q: 'Bộ phận nào của tai giúp giữ thăng bằng?', a: 'Ống bán nguyệt (tai trong).' },
    ]
  ),

  'S8KHTN-w28-quiz': L(
    'Các giác quan — Mũi, lưỡi, da',
    'Ba giác quan: khứu giác (mũi), vị giác (lưỡi), xúc giác (da).',
    ['Mũi - khứu giác.', 'Lưỡi - 5 vị cơ bản.', 'Da - 5 loại cảm giác.'],
    [
      { h: 'Mũi (Khứu giác)' },
      { p: 'Tế bào khứu giác ở niêm mạc mũi nhận biết các hoá chất bay trong không khí — phân biệt hàng ngàn mùi.' },
      { h: 'Lưỡi (Vị giác)' },
      { p: '5 vị cơ bản: ngọt, chua, mặn, đắng, umami (vị ngon đặc trưng).' },
      { h: 'Da (Xúc giác)' },
      { p: 'Cảm nhận 5 loại: nóng, lạnh, đau, áp lực (chạm), rung.' },
    ],
    [
      { q: '5 vị cơ bản trên lưỡi?', a: 'Ngọt, chua, mặn, đắng, umami.' },
      { q: 'Da cảm nhận những gì?', a: 'Nóng, lạnh, đau, áp lực, rung.' },
    ]
  ),

  'S8KHTN-w29-quiz': L(
    'Hệ nội tiết',
    'Hệ nội tiết điều khiển cơ thể qua hormone.',
    ['Tuyến nội tiết chính.', 'Hormone và chức năng.', 'Bệnh thường gặp.'],
    [
      { h: 'Các tuyến nội tiết' },
      { ul: ['Tuyến yên (đầu): tiết hormone tăng trưởng và điều khiển các tuyến khác.', 'Tuyến giáp (cổ): điều khiển trao đổi chất.', 'Tuyến thượng thận: tiết adrenaline (phản ứng stress).', 'Tuỵ: tiết insulin điều hoà đường huyết.', 'Tuyến sinh dục: estrogen (nữ), testosterone (nam).'] },
      { h: 'Bệnh thường gặp' },
      { ul: ['Bệnh tiểu đường (đái tháo đường) — thiếu insulin.', 'Bướu cổ — thiếu iốt.'] },
    ],
    [
      { q: 'Tuyến nào tiết insulin?', a: 'Tuỵ.' },
      { q: 'Thiếu iốt gây bệnh gì?', a: 'Bướu cổ.' },
    ]
  ),

  'S8KHTN-w30-quiz': L(
    'Hệ sinh dục — Sinh sản người',
    'Hệ sinh dục đảm bảo duy trì giống loài.',
    ['Cấu tạo hệ sinh dục.', 'Tuổi dậy thì.', 'Bảo vệ sức khoẻ sinh sản.'],
    [
      { h: 'Hệ sinh dục' },
      { ul: ['Nam: tinh hoàn (sinh tinh trùng), dương vật.', 'Nữ: buồng trứng (sinh trứng), tử cung (mang thai).'] },
      { h: 'Tuổi dậy thì' },
      { p: 'Tuổi dậy thì: nữ 10-15, nam 12-16. Cơ thể biến đổi: kinh nguyệt (nữ), giọng trầm + lông mặt (nam). Đây là giai đoạn quan trọng cần chăm sóc đặc biệt.' },
      { h: 'Bảo vệ sức khoẻ sinh sản' },
      { ul: ['Vệ sinh cá nhân.', 'Không quan hệ tình dục sớm.', 'Hiểu biết về sức khoẻ sinh sản.'] },
    ],
    [
      { q: 'Tuổi dậy thì ở nữ thường bắt đầu?', a: '10-15 tuổi.' },
      { q: 'Tinh hoàn có chức năng?', a: 'Sản xuất tinh trùng và hormone testosterone.' },
    ]
  ),

  'S8KHTN-w31-quiz': L(
    'Cơ thể người — Bệnh và phòng bệnh',
    'Các bệnh thường gặp và cách phòng tránh.',
    ['Bệnh truyền nhiễm.', 'Bệnh không truyền nhiễm.', 'Lối sống lành mạnh.'],
    [
      { h: 'Bệnh truyền nhiễm' },
      { p: 'Do vi khuẩn, virus, ký sinh trùng gây ra. VD: cảm cúm, sởi, sốt xuất huyết, COVID-19.' },
      { p: 'Phòng: tiêm vaccine, vệ sinh tay, ăn chín uống sôi, đeo khẩu trang khi cần.' },
      { h: 'Bệnh không truyền nhiễm' },
      { p: 'Do lối sống không lành mạnh, di truyền. VD: tim mạch, tiểu đường, ung thư.' },
      { p: 'Phòng: ăn cân bằng, tập thể dục, không hút thuốc, giảm stress, khám định kỳ.' },
    ],
    [
      { q: 'COVID-19 thuộc loại bệnh nào?', a: 'Bệnh truyền nhiễm do virus SARS-CoV-2.' },
      { q: 'Cách phòng bệnh tim mạch?', a: 'Ăn ít muối-mỡ, tập thể dục, không hút thuốc, giảm stress.' },
    ]
  ),

  'S8KHTN-w32-quiz': L(
    'Ôn tập Hoá học',
    'Tổng hợp Hoá học lớp 8.',
    ['Phản ứng + cân bằng.', 'Mol + tính toán.', 'Acid, base, muối, kim loại.'],
    [
      { h: 'Tổng kết Hoá' },
      { ul: ['Phản ứng hoá học: dấu hiệu, cân bằng PT.', 'Mol: n = m/M; V = n·22,4 (đktc).', 'Dung dịch: C% = m_tan/m_dd·100; CM = n/V.', 'Acid/Base/Muối: tính chất + PT.', 'Kim loại + phi kim.'] },
    ],
    [
      { q: 'Tính m(NaCl) trong 200g dd NaCl 5%.', a: 'm = 200·5/100 = 10g.' },
      { q: 'PT trung hoà HCl + NaOH.', a: 'HCl + NaOH → NaCl + H₂O.' },
    ]
  ),

  'S8KHTN-w33-quiz': L(
    'Ôn tập Vật lý',
    'Tổng hợp Vật lý lớp 8.',
    ['Lực + áp suất.', 'Công + năng lượng.', 'Bảo toàn năng lượng.'],
    [
      { h: 'Tổng kết Lý' },
      { ul: ['Lực: F (N), biểu diễn vector.', 'Áp suất: p = F/S.', 'Áp suất lỏng: p = ρgh.', 'Đòn bẩy: F·d₁ = P·d₂.', 'Công: A = F·s.', 'Bảo toàn năng lượng.'] },
    ],
    [
      { q: 'Tính p tại đáy bể sâu 2m (ρ=1000 kg/m³).', a: 'p = 1000·10·2 = 20 000 Pa.' },
      { q: 'Đẩy hộp 100N đi 5m. Công?', a: 'A = 500 J.' },
    ]
  ),

  'S8KHTN-w34-quiz': L(
    'Ôn tập Sinh học cơ thể người',
    'Tổng hợp Sinh học HK2.',
    ['11 hệ cơ quan.', 'Cấu tạo và chức năng.', 'Bảo vệ sức khoẻ.'],
    [
      { h: 'Tổng kết Sinh' },
      { ul: ['Hệ vận động: xương + cơ.', 'Hệ tuần hoàn: tim + mạch + nhóm máu.', 'Hệ hô hấp + tiêu hoá + bài tiết.', 'Hệ thần kinh + giác quan + nội tiết + sinh dục.'] },
    ],
    [
      { q: 'Người trưởng thành có bao nhiêu xương?', a: '~206.' },
      { q: 'Nhóm máu "cho vạn năng"?', a: 'O.' },
    ]
  ),

  'S8KHTN-w35-quiz': L(
    'Ôn tập cuối năm',
    'Tổng kết KHTN 8 — chuẩn bị thi cuối năm.',
    ['Tổng kết Hoá - Lý - Sinh.', 'Bài tập tổng hợp.', 'Tự đánh giá.'],
    [
      { h: 'Tổng kết KHTN 8' },
      { ul: ['Hoá: phản ứng, mol, dung dịch, acid/base/muối, kim loại/phi kim.', 'Lý: lực, áp suất, công, bảo toàn năng lượng.', 'Sinh: cơ thể người + 11 hệ cơ quan.'] },
      { note: 'Học tổng hợp, liên hệ thực tế để hiểu sâu.' },
    ],
    [
      { q: 'Cân bằng: Al + O₂ → Al₂O₃.', a: '4Al + 3O₂ → 2Al₂O₃.' },
      { q: 'Tim có mấy ngăn?', a: '4 ngăn (2 nhĩ + 2 thất).' },
    ]
  ),
};
