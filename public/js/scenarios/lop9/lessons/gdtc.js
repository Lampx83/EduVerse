// ============================================================
// Lớp 9 · GIÁO DỤC THỂ CHẤT — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Key trùng id quiz: "S9GDTC-wNN-quiz".
// Văn phong nghiêm túc, đúng chuẩn cấp THCS cuối cấp.
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9GDTC_LESSONS = {
  'S9GDTC-w01-quiz': L(
    'Khởi động và an toàn thể thao',
    'Năm cuối cấp, các em sẽ tập cường độ cao hơn để chuẩn bị bài kiểm tra thể lực vào 10. Bài mở đầu củng cố nguyên tắc an toàn — không thể bỏ qua.',
    ['Hiểu nguyên tắc khởi động – tập – hồi tĩnh.', 'Biết sơ cứu cơ bản khi gặp chấn thương thể thao.', 'Nhận biết dấu hiệu tập quá sức.'],
    [
      { h: 'Quy trình một buổi tập an toàn' },
      { ul: [
        'Khởi động chung 5–10 phút: chạy nhẹ + xoay khớp từ cổ xuống cổ chân.',
        'Khởi động chuyên môn: làm chậm các động tác sắp tập (chạy nâng cao đùi, đập tay, đá nhẹ…).',
        'Tập chính: theo giáo án + đúng kỹ thuật.',
        'Hồi tĩnh 5 phút: đi bộ + giãn cơ tĩnh, hít thở sâu.',
      ] },
      { h: 'Sơ cứu RICE — chấn thương cơ khớp' },
      { p: 'Rest (nghỉ), Ice (chườm đá 15–20 phút), Compression (băng ép), Elevation (nâng cao chi). Áp dụng trong 48 giờ đầu chấn thương — bong gân, căng cơ.' },
      { note: 'Chấn thương nặng (gãy xương, choáng, đau dữ dội) phải đến cơ sở y tế ngay, không tự xử.' },
    ],
    [
      { q: 'Bạn bị bong gân cổ chân khi chạy. Em sơ cứu thế nào?', a: 'Đỡ bạn ngồi xuống — Rest. Chườm đá 15 phút — Ice. Băng ép quanh cổ chân — Compression. Kê chân cao — Elevation. Báo thầy/cô và đưa bạn đi y tế nếu sưng to.' },
      { q: 'Dấu hiệu tập quá sức?', a: 'Mệt kéo dài, đau cơ dai dẳng, mất ngủ, chán ăn. Phải giảm khối lượng và nghỉ thêm để hồi phục.' },
    ]
  ),

  'S9GDTC-w02-quiz': L(
    'Chạy bền — Kỹ thuật chạy 800m–1500m',
    'Chạy bền là nội dung kiểm tra thể lực vào 10 ở nhiều địa phương. Kỹ thuật đúng giúp tiết kiệm sức và hoàn thành cự ly tốt.',
    ['Nắm tư thế chạy bền hiệu quả.', 'Biết cách điều hoà nhịp thở.', 'Xử lý được tình huống xóc bụng.'],
    [
      { h: 'Tư thế chạy bền chuẩn' },
      { ul: [
        'Thân hơi nghiêng trước 5–10 độ — không ngả ra sau.',
        'Vai thả lỏng, tay vung tự nhiên, khuỷu gập 90 độ.',
        'Bàn chân tiếp đất giữa bàn — không bằng gót đột ngột.',
      ] },
      { h: 'Nhịp thở' },
      { p: 'Hít vào bằng mũi 2 nhịp – thở ra bằng miệng 2 nhịp. Khi mệt có thể chuyển 3-2 hoặc 2-1. Quan trọng nhất là đều và sâu.' },
      { h: 'Khi bị xóc bụng' },
      { p: 'Giảm tốc, thở chậm sâu, dùng tay ấn nhẹ vùng đau, có thể uốn nhẹ thân về phía đau. Không dừng đột ngột.' },
      { note: 'Cự ly 800m–1500m thuộc chạy bền trung bình — cần aerobic + chiến thuật pacing.' },
    ],
    [
      { q: 'Chạy 800m mà mới 400m đã thở hổn hển. Em điều chỉnh thế nào?', a: 'Giảm tốc 10–15%, ổn định nhịp thở 2-2, vung tay nhẹ hơn. Khi nhịp tim trở về thì tăng nhẹ trở lại. Bài học: pacing đầu trận phải hợp lý.' },
      { q: 'Bị xóc bụng giữa lúc chạy 1500m?', a: 'Giảm tốc xuống 60–70% sức, thở chậm sâu 4 nhịp/4 nhịp, dùng ngón tay ấn vùng đau 3–5 giây. Khoảng 100–200m sẽ hết — KHÔNG dừng hẳn.' },
    ]
  ),

  'S9GDTC-w03-quiz': L(
    'Chạy bền — Bài tập sức bền',
    'Để chạy bền tiến bộ phải tập đúng phương pháp. Bài này giới thiệu 3 phương pháp chính.',
    ['Phân biệt được continuous, fartlek, interval.', 'Biết áp dụng nguyên tắc tăng tiến dần.'],
    [
      { h: 'Ba phương pháp tập sức bền' },
      { ul: [
        'Continuous (chạy đều): 20–40 phút ở cường độ vừa — phát triển nền aerobic.',
        'Fartlek (biến tốc): xen kẽ nhanh chậm theo cảm giác — vui và linh hoạt.',
        'Interval (ngắt quãng): chạy nhanh 200–400m + nghỉ 1–2 phút × 6–8 lần — tăng VO₂max.',
      ] },
      { h: 'Nguyên tắc tăng tiến (progressive overload)' },
      { p: 'Mỗi tuần tăng 5–10% cự ly hoặc tốc độ. Không nhảy vọt. Cứ 4 tuần nên có 1 tuần "deload" — giảm 30–40% khối lượng để hồi phục.' },
      { note: '3–5 buổi/tuần là tối ưu cho HS lớp 9; ít hơn không hiệu quả, nhiều hơn dễ quá tải.' },
    ],
    [
      { q: 'Em đang chạy đều 2km mỗi buổi 3 lần/tuần. Muốn cải thiện thành tích 800m.', a: 'Giữ 1 buổi chạy đều dài (cardio nền) + thêm 1 buổi interval (8 × 200m nhanh + nghỉ 90 giây) + 1 buổi sức mạnh chân (squat, lunge, bật cóc). Sau 4 tuần đo lại thành tích.' },
      { q: 'Tuần nào cũng tăng cự ly thì có vấn đề gì?', a: 'Cơ thể không kịp hồi phục — chấn thương + plateau. Cần 4 tuần tăng tiến rồi 1 tuần giảm tải để siêu hồi phục.' },
    ]
  ),

  'S9GDTC-w04-quiz': L(
    'Đá cầu — Kỹ thuật cơ bản',
    'Đá cầu là môn thi đấu chính thức tại SEA Games — Việt Nam là cường quốc. Kỹ thuật cơ bản gồm 3 lối đá.',
    ['Nắm 3 kỹ thuật đá cơ bản.', 'Biết kích thước sân + lưới.', 'Nhớ quy tắc phán đoán cầu.'],
    [
      { h: 'Ba kỹ thuật đá cầu cơ bản' },
      { ul: [
        'Đá mu bàn chân: tiếp xúc cầu bằng mu — dùng để đá xa, đá tấn công.',
        'Đá má trong: tiếp xúc bằng phần trong bàn chân — điều khiển hướng tốt.',
        'Đá má ngoài: tiếp xúc bằng phần ngoài — đá chéo lừa đối thủ.',
      ] },
      { h: 'Sân đá cầu chuẩn' },
      { p: 'Sân đơn: 11,88m × 6,1m. Sân đôi: cùng dài × 6,1m. Lưới nam 1,5m; lưới nữ 1,4m.' },
      { h: 'Mắt theo dõi cầu' },
      { p: 'Mắt nhìn cầu liên tục từ khi đối thủ đá đến khi cầu chạm chân mình. Phán đoán điểm rơi sớm để di chuyển kịp.' },
      { note: 'Đá cầu vào SEA Games chính thức từ 2003 — Việt Nam dẫn đầu nhiều kỳ.' },
    ],
    [
      { q: 'Cầu bay cao gần lưới, em đá kiểu nào?', a: 'Mu bàn chân — đá xuống mạnh để tấn công, hoặc má trong nhẹ thả sát lưới (drop).' },
      { q: 'Đá má ngoài có lợi gì?', a: 'Đá chéo bất ngờ, đối thủ khó đoán hướng. Phù hợp khi đối thủ đứng lệch một bên.' },
    ]
  ),

  'S9GDTC-w05-quiz': L(
    'Đá cầu — Thi đấu đơn',
    'Tổ chức trận đấu đơn cần hiểu luật và chiến thuật cá nhân.',
    ['Nắm luật thi đấu đơn cơ bản.', 'Biết chiến thuật đá cầu đơn.'],
    [
      { h: 'Luật thi đấu đơn' },
      { ul: [
        'Bốc thăm chọn bên hoặc quyền phát đầu trận.',
        'Set tới 21 điểm, chênh 2 điểm.',
        'Trận thắng 2/3 set.',
        'Cầu chạm đất, ra ngoài, chạm 2 lần liền = mất điểm.',
      ] },
      { h: 'Chiến thuật đơn' },
      { p: 'Đá cầu đơn cần tổng hợp: tốc độ di chuyển, sức bền, phán đoán + đa dạng cú đá. Tấn công vào góc trống của đối thủ; phòng thủ giữ cầu cao + xa.' },
      { note: 'Người chiến thắng là người buộc đối thủ vào nhịp chơi của mình.' },
    ],
    [
      { q: 'Đối thủ rất nhanh chân nhưng yếu sức. Chiến thuật?', a: 'Kéo dài rally, đẩy bóng xa đường biên hai bên để buộc đối thủ chạy nhiều. Khi đối thủ mệt, dứt điểm bằng cú smash.' },
      { q: 'Khi nào nên phát mạnh?', a: 'Đối thủ chưa sẵn sàng, gió thuận, hoặc cần tạo bất ngờ giành điểm break.' },
    ]
  ),

  'S9GDTC-w06-quiz': L(
    'Đá cầu — Thi đấu đôi',
    'Đá cầu đôi đòi hỏi phối hợp ăn ý — không chỉ giỏi cá nhân.',
    ['Hiểu vị trí và phân vai trong đôi.', 'Biết cách giao tiếp trong trận.'],
    [
      { h: 'Hai chiến thuật vị trí' },
      { ul: [
        'Trước–sau: 1 người tấn công lưới, 1 người phòng thủ sau.',
        'Trái–phải: chia đôi sân, mỗi người phụ trách một nửa.',
      ] },
      { h: 'Giao tiếp trong trận' },
      { p: 'Gọi "Tôi!" khi quyết định đỡ; "Bạn!" khi nhường. Ra hiệu trước phát cầu. Động viên đồng đội sau mỗi điểm — dù thắng hay thua.' },
      { h: 'Phân vai trí khi cầu sang sân' },
      { p: 'Người gần cầu hơn đá — đồng đội yểm trợ hậu sân. Không cùng lao vào tránh va chạm.' },
      { note: 'Phối hợp đôi tốt = thắng 50% trận đấu, kỹ thuật cá nhân chỉ 50% còn lại.' },
    ],
    [
      { q: 'Cầu rơi giữa em và đồng đội — cả hai cùng dừng?', a: 'Sai. Phải có người gọi "Tôi!" rõ ràng. Nếu không hô, người gần hơn (thường người sau) chủ động đỡ; người kia lùi yểm trợ.' },
      { q: 'Phối hợp đôi mới ghép — khó ăn ý. Khắc phục?', a: 'Tập riêng 2 buổi/tuần — chỉ tập phối hợp di chuyển + giao tiếp + tin tưởng nhau. Sau 4 tuần sẽ ăn ý.' },
    ]
  ),

  'S9GDTC-w07-quiz': L(
    'Cầu lông — Kỹ thuật đôi nâng cao',
    'Cầu lông đôi là môn HS thường chơi. Lớp 9 học chiến thuật tấn công – phòng thủ chuyên sâu.',
    ['Phân biệt đội hình tấn công và phòng thủ.', 'Hiểu các cú đánh nâng cao.'],
    [
      { h: 'Đội hình cầu lông đôi' },
      { ul: [
        'Tấn công: trước–sau (người trước chặn lưới, người sau đập).',
        'Phòng thủ: ngang (mỗi người chia đôi sân, đỡ cú đập đối phương).',
        'Linh hoạt chuyển đổi theo tình huống.',
      ] },
      { h: 'Các cú đánh nâng cao' },
      { ul: [
        'Smash (đập): tấn công mạnh khi cầu cao + đối thủ xa.',
        'Drop (thả cầu sát lưới): khi đối thủ đứng sau.',
        'Clear (đẩy cao xa): khi cần thời gian phòng thủ.',
        'Net play (cầu sát lưới): cổ tay khéo, đưa cầu chạm sát lưới.',
      ] },
      { note: 'Sân đôi rộng 6,1m × 13,4m — rộng hơn sân đơn 5,18m × 13,4m.' },
    ],
    [
      { q: 'Đối phương đập mạnh xuống sân — đội em phòng thủ thế nào?', a: 'Chuyển ngay sang đội hình ngang, mỗi người chia đôi sân. Cố gắng đỡ cầu cao lên giữa sân để có thời gian quay lại tấn công.' },
      { q: 'Khi nào dùng drop?', a: 'Khi đối thủ đứng phía sau hoặc đang lùi — drop sát lưới buộc họ phải lao lên, mất thăng bằng cho cú tiếp theo.' },
    ]
  ),

  'S9GDTC-w08-quiz': L(
    'Bóng chuyền — Đập bóng',
    'Đập bóng (spike) là cú tấn công chính trong bóng chuyền — quyết định điểm số.',
    ['Nắm 4 giai đoạn của cú đập.', 'Biết tiếp đất an toàn.'],
    [
      { h: 'Bốn giai đoạn đập bóng' },
      { ul: [
        'Lấy đà: 3 bước (chân nghịch – chân thuận – chân nghịch nhảy).',
        'Bật nhảy: 2 chân đồng thời, tay vung mạnh hỗ trợ nhảy cao.',
        'Tiếp xúc bóng: tay duỗi thẳng trên đỉnh đầu, cổ tay roi nhanh xuống.',
        'Tiếp đất: 2 chân, đầu gối chùng để giảm chấn.',
      ] },
      { h: 'Lực đập từ chuỗi động học toàn thân' },
      { p: 'Chân đẩy → hông xoay → vai vung → cánh tay vung → cổ tay roi. Lực truyền theo chuỗi, không chỉ dùng tay.' },
      { note: 'Tiếp đất 1 chân là sai — dễ bong gân cổ chân hoặc chấn thương đầu gối.' },
    ],
    [
      { q: 'Em đập bóng vào lưới liên tục — vì sao?', a: 'Tiếp xúc bóng quá sớm (chưa đến điểm cao nhất) hoặc cổ tay không roi xuống. Khắc phục: chờ bóng cao hơn, dùng cổ tay đánh nhanh xuống.' },
      { q: 'Sau khi đập, đau gối — nguyên nhân?', a: 'Tiếp đất cứng chân không chùng gối. Phải tiếp đất bằng nửa trước bàn chân + chùng gối ~30 độ để hấp thụ lực.' },
    ]
  ),

  'S9GDTC-w09-quiz': L(
    'Bóng chuyền — Chắn lưới (block)',
    'Block là kỹ thuật phòng thủ tại lưới — chặn cú đập đối phương ngay khi vừa qua lưới.',
    ['Hiểu vị trí và kỹ thuật chắn.', 'Biết phân biệt single và double block.'],
    [
      { h: 'Quy tắc chắn lưới' },
      { ul: [
        'Chỉ vị trí hàng trên (3 vị trí trước) được chắn.',
        'Nhảy thẳng đứng, không nhảy chéo.',
        '2 tay vươn cao qua lưới (không chạm lưới).',
        'Mặt sấp xuống sân đối phương — không ngửa ra sau.',
      ] },
      { h: 'Single vs Double block' },
      { p: 'Single = 1 người chắn. Double = 2 người chắn cạnh nhau — phủ kín diện tích lưới, hiệu quả hơn nhưng để hở sân nhiều hơn.' },
      { note: 'Chạm lưới khi nhảy = mất điểm trực tiếp. Tập trung kỹ thuật bật thẳng.' },
    ],
    [
      { q: 'Khi nào dùng double block?', a: 'Khi đối thủ có attacker mạnh — 2 người chắn để bịt kín hướng đập chính. Người thứ 3 phía sau lo phần sân hở.' },
      { q: 'Em hay bị chạm lưới khi chắn — sửa thế nào?', a: 'Đứng cách lưới 20–30cm trước khi bật. Nhảy thẳng đứng không lao về trước. Khi xuống thì rút tay về thân trước khi lưới chạm.' },
    ]
  ),

  'S9GDTC-w10-quiz': L(
    'Bóng rổ — Ném 3 điểm',
    'Ném 3 điểm là kỹ thuật quan trọng nhất của bóng rổ hiện đại. Lớp 9 học BEEF.',
    ['Nắm nguyên tắc BEEF.', 'Hiểu cách bóng xoáy (backspin).'],
    [
      { h: 'Nguyên tắc BEEF' },
      { ul: [
        'B – Balance: tư thế cân bằng, chân rộng bằng vai.',
        'E – Eyes: mắt nhìn rổ (cụ thể là vành trước).',
        'E – Elbow: khuỷu tay thẳng dưới bóng, hình chữ L 90 độ.',
        'F – Follow-through: vẫy cổ tay sau khi bóng rời.',
      ] },
      { h: 'Backspin (xoáy ngược)' },
      { p: 'Cổ tay vẫy nhanh tạo backspin — bóng xoay ngược chiều bay. Khi chạm vành, backspin giúp "bounce in" nhiều hơn.' },
      { h: 'Vạch 3 điểm' },
      { p: 'FIBA: 6,75m từ tâm rổ. NBA: 7,24m. Cấp THCS thường dùng vạch FIBA.' },
      { note: 'Lực từ chân – thân – tay phối hợp. Người mới hay chỉ dùng tay nên bóng yếu, không tới rổ.' },
    ],
    [
      { q: 'Bóng em ném luôn ngắn — không tới rổ?', a: 'Thiếu lực chân. Tập squat + nhảy. Khi ném, gập gối sâu hơn, đẩy lực từ chân lên tay. Không ráng dùng tay đơn thuần.' },
      { q: 'Bóng có xoáy ngược có ý nghĩa gì thực tế?', a: 'Khi chạm vành sẽ "lăn vào" nhiều hơn — tăng % ghi điểm. Cú ném không xoáy thường bật ra ngoài.' },
    ]
  ),

  'S9GDTC-w11-quiz': L(
    'Bóng rổ — Phòng thủ và tấn công',
    'Bóng rổ có 2 hệ phòng thủ chính và chiến thuật tấn công kinh điển.',
    ['Phân biệt man-to-man và zone.', 'Hiểu pick and roll.'],
    [
      { h: 'Hai hệ phòng thủ' },
      { ul: [
        'Man-to-man: mỗi người kèm 1 đối thủ cố định — phù hợp đối thủ kỹ thuật trung bình.',
        'Zone (khu vực): mỗi người phụ trách 1 vùng sân — phù hợp khi đối thủ có 1–2 siêu sao.',
      ] },
      { h: 'Pick and roll — chiến thuật tấn công kinh điển' },
      { p: 'Người chắn (pick) đứng chặn đường người phòng thủ; người cầm bóng vòng qua chắn; người chắn "roll" (lăn) tới rổ nhận bóng. Đơn giản nhưng cực hiệu quả.' },
      { h: 'Lỗi cá nhân' },
      { p: 'Phạm lỗi với đối thủ (đẩy, chặn không hợp lệ, đánh tay). 5 lỗi cá nhân/người → bị truất quyền thi đấu (NBA: 6 lỗi).' },
      { note: 'Phòng thủ tốt = tấn công tốt. Cướp bóng → fast-break ghi điểm dễ nhất.' },
    ],
    [
      { q: 'Đội em phòng thủ man-to-man nhưng đối thủ có 1 siêu sao — đổi sao?', a: 'Đổi sang zone — đặc biệt 2-3 zone (2 người trước, 3 người sau). Bịt hướng đột phá của siêu sao, buộc họ ném xa.' },
      { q: 'Pick and roll thường thất bại ở bước nào?', a: 'Người chắn không chắn đủ chắc → đối phương phòng thủ luồn qua được. Hoặc người cầm bóng không vòng đủ sát — đối thủ vẫn theo kịp.' },
    ]
  ),

  'S9GDTC-w12-quiz': L(
    'Bóng đá — Sút phạt',
    'Sút phạt là kỹ năng quyết định điểm trong bóng đá hiện đại — từ đá phạt trực tiếp tới penalty.',
    ['Nắm luật đá phạt trực tiếp + penalty.', 'Biết kỹ thuật đá cong.'],
    [
      { h: 'Đá phạt trực tiếp' },
      { ul: [
        'Cấp phạt khi có lỗi nghiêm trọng (vào người, handball trong vòng).',
        'Hàng rào cách bóng tối thiểu 9,15m (10 yards).',
        'Bóng phải đứng yên trước khi đá.',
      ] },
      { h: 'Kỹ thuật đá cong (curve)' },
      { p: 'Đá bằng mu trong bàn chân, tiếp xúc lệch tâm bóng tạo xoáy. Bóng bay cong vòng qua hàng rào — vào góc xa thủ môn.' },
      { h: 'Penalty 11m' },
      { p: 'Đá phạt trực tiếp tại chấm 11m, không hàng rào — chỉ thủ môn cản. Người đá định hướng trước, không nhìn thủ môn khi chuẩn bị đá.' },
      { note: 'Tâm lý chiếm 70% — bình tĩnh và quyết đoán là chìa khoá penalty.' },
    ],
    [
      { q: 'Hàng rào cao, đá thẳng không vào — em chọn kiểu nào?', a: 'Đá cong (curve) bằng mu trong — bóng vòng qua hàng rào vào góc xa. Hoặc đá đập đất phía dưới chân hàng rào.' },
      { q: 'Sút penalty hay run — khắc phục thế nào?', a: 'Định hướng đá vào 1 góc TRƯỚC khi đặt bóng. Hít sâu, không nhìn thủ môn. Sút dứt khoát — đắn đo là hỏng.' },
    ]
  ),

  'S9GDTC-w13-quiz': L(
    'Bóng đá — Phòng thủ và tấn công cơ bản',
    'Bóng đá hiện đại đề cao phối hợp tập thể — không phải solo.',
    ['Hiểu phòng thủ cá nhân + đồng đội.', 'Nắm luật việt vị và thẻ phạt.'],
    [
      { h: 'Phòng thủ' },
      { ul: [
        'Cá nhân: bám sát đối thủ, chặn đường chuyền, đoán bóng để cướp.',
        'Đồng đội: bọc lót cho nhau, dồn ép vào sườn sân.',
      ] },
      { h: 'Tấn công phối hợp' },
      { p: 'Chuyền – chạy chỗ – mở khoảng trống. Bóng đá hiện đại là di chuyển nhiều hơn là kỹ thuật cá nhân. Người không có bóng phải chạy chỗ liên tục.' },
      { h: 'Luật việt vị' },
      { p: 'Cầu thủ tấn công đứng dưới hậu vệ cuối khi đồng đội chuyền bóng = việt vị, mất quyền nhận bóng. Bảo vệ tính công bằng.' },
      { h: 'Thẻ phạt' },
      { ul: ['Vàng: cảnh cáo.', 'Đỏ: truất quyền thi đấu.', '2 vàng = đỏ.'] },
      { note: 'Bóng đá VN cần học phối hợp ngắn nhanh — không nên đá xa bóng dài như xưa.' },
    ],
    [
      { q: 'Em hay bị thẻ vàng vì vào bóng muộn — khắc phục?', a: 'Tập timing — vào bóng khi đối thủ đang chạm bóng, không phải sau khi đã chuyền đi. Tập trượt bóng (slide tackle) đúng kỹ thuật.' },
      { q: 'Bị bắt việt vị liên tục — sửa thế nào?', a: 'Luôn quan sát hậu vệ cuối cùng. Chỉ bứt phá khi bóng đã rời chân đồng đội. Tập "lùi xuống nhận bóng" thay vì "đứng cao".' },
    ]
  ),

  'S9GDTC-w14-quiz': L(
    'Ôn tập + Kiểm tra giữa HK1',
    'Tổng hợp kiến thức đã học trong HK1 — kỹ thuật cơ bản 6 môn thể thao.',
    ['Hệ thống hoá kiến thức.', 'Tự đánh giá khả năng của bản thân.'],
    [
      { h: 'Bảng kiểm tra kiến thức' },
      { ul: [
        'Khởi động – hồi tĩnh: BẮT BUỘC trước/sau mọi buổi tập.',
        'Chạy bền: aerobic + nhịp thở đều + pacing.',
        'Đá cầu: 3 kỹ thuật cơ bản (mu, má trong, má ngoài).',
        'Bóng chuyền: đập bóng + chắn lưới + tiếp đất an toàn.',
        'Bóng rổ: BEEF cho ném 3 điểm + man-to-man/zone.',
        'Bóng đá: sút phạt + việt vị + thẻ phạt.',
      ] },
      { h: 'Tiêu chí kiểm tra giữa kì' },
      { p: 'Đánh giá kỹ thuật (60%) + thể lực (30%) + thái độ (10%). Tham gia tích cực, đúng kỹ thuật, biết tự sửa.' },
      { note: 'Đừng học gạo lý thuyết — phải biết áp dụng vào thực tế trận đấu.' },
    ],
    [
      { q: 'Đề bài: "Phân biệt single block và double block bóng chuyền."', a: 'Single = 1 người chắn; double = 2 người chắn cạnh nhau. Double hiệu quả hơn nhờ phủ kín diện tích lưới nhưng để hở sân nhiều hơn. Dùng khi đối phương có attacker mạnh.' },
      { q: 'Đề bài: "BEEF trong ném 3 điểm là gì?"', a: 'B-Balance (cân bằng), E-Eyes (mắt nhìn rổ), E-Elbow (khuỷu thẳng), F-Follow-through (vẫy cổ tay). 4 nguyên tắc cơ bản của cú ném chuẩn.' },
    ]
  ),

  'S9GDTC-w15-quiz': L(
    'Võ thuật — Vovinam giới thiệu',
    'Vovinam – Việt Võ Đạo là môn võ thuần Việt do sáng tổ Nguyễn Lộc khai sáng năm 1938 tại Hà Nội.',
    ['Hiểu lịch sử và triết lý Vovinam.', 'Nhận biết đặc trưng kỹ thuật.'],
    [
      { h: 'Lịch sử' },
      { p: 'Sáng tổ Nguyễn Lộc (1912–1960) khai sáng Vovinam năm 1938 tại Hà Nội — tinh hoa võ Việt + tiếp thu hợp lý võ ngoại quốc. Hiện có mặt tại hơn 60 quốc gia.' },
      { h: 'Triết lý "Cương nhu phối triển"' },
      { p: 'Cương (cứng, mạnh) + Nhu (mềm, dẻo) phối hợp. Khi đối thủ cương thì mình nhu, khi đối thủ nhu thì mình cương. Linh hoạt theo tình huống.' },
      { h: 'Đặc trưng kỹ thuật' },
      { ul: [
        'Đòn chân tấn công (đá bay, đòn chân tấn công 1–21).',
        'Đòn tay phối hợp (đấm, chặt, gạt).',
        'Đòn vật, khoá (thắng đối thủ không gây thương).',
      ] },
      { note: 'Lễ tiết: chào sư phụ, chào đồng môn, kính trên nhường dưới — võ đạo coi trọng đạo đức.' },
    ],
    [
      { q: '"Cương nhu phối triển" thực tế là gì?', a: 'Khi đối thủ dùng lực mạnh đẩy mình, mình không chống cứng mà nương theo lực (nhu) rồi phản đòn (cương). Như nước chảy đá thì mềm, nhưng chảy mạnh thì xói được đá.' },
      { q: 'Vì sao Vovinam bắt buộc lễ tiết?', a: 'Võ đạo không chỉ là kỹ thuật mà còn là đạo đức. Người luyện võ mà kiêu ngạo, thiếu lễ phép sẽ dùng võ sai mục đích. Lễ tiết rèn nhân cách.' },
    ]
  ),

  'S9GDTC-w16-quiz': L(
    'Võ thuật — Vovinam bài quyền nhập môn',
    'Bài quyền nhập môn là chuỗi động tác cơ bản dành cho người mới — học để thuộc tấn pháp + đòn tay-chân.',
    ['Nắm 4 tấn pháp cơ bản.', 'Biết yếu tố luyện quyền.'],
    [
      { h: 'Bốn tấn pháp cơ bản' },
      { ul: [
        'Trung bình tấn: 2 chân rộng bằng vai, đầu gối chùng, thân thẳng — tấn nền tảng.',
        'Đinh tấn: 1 chân trước chùng, 1 chân sau thẳng — tấn tấn công.',
        'Hạc tấn: đứng 1 chân, chân kia co lên — tấn linh hoạt.',
        'Quỳ tấn: 1 gối chạm đất, tấn thấp tránh đòn.',
      ] },
      { h: 'Bốn yếu tố luyện quyền' },
      { p: 'Tập trung tinh thần + Chính xác động tác + Có lực + Đúng nhịp. Người mới hay sai ở chính xác và lực — luyện chậm rãi đến khi thuộc rồi mới tăng tốc.' },
      { note: 'Bài quyền nhập môn là "ngữ pháp" của Vovinam — không thuộc thì không học sâu hơn được.' },
    ],
    [
      { q: 'Em tập trung bình tấn 5 phút thì đùi đau — bình thường không?', a: 'Bình thường — đùi trước phải làm việc giữ thân. Tăng dần thời gian: tuần 1 giữ 2 phút, tuần 2 giữ 3 phút… Đến tuần 4 giữ được 10 phút mới đủ nền.' },
      { q: 'Quyền em đánh nhanh nhưng không có lực?', a: 'Vì đánh "rỗng" — không truyền lực từ chân lên. Phải đánh chậm trước, cảm nhận lực từ tấn → hông → vai → tay. Khi đã đúng mới tăng tốc.' },
    ]
  ),

  'S9GDTC-w17-quiz': L(
    'Võ thuật — Karatedo',
    'Karatedo là môn võ Okinawa (Nhật Bản) phổ biến toàn cầu, hiện là môn Olympic.',
    ['Hiểu lịch sử và triết lý Karatedo.', 'Nắm 4 nhóm kỹ thuật cơ bản.'],
    [
      { h: 'Lịch sử' },
      { p: 'Karate phát triển từ Okinawa (Nhật Bản) — kết hợp võ bản địa Te và Kung Fu Trung Hoa. "Karate" nghĩa là "Không thủ" (tay không), "Karatedo" = đạo dùng tay không. Funakoshi Gichin (1868–1957) đưa Karate ra toàn thế giới.' },
      { h: 'Bốn nhóm kỹ thuật' },
      { ul: [
        'Tsuki: đấm — đấm thẳng (oi-tsuki), đấm móc (kagi-tsuki).',
        'Keri: đá — đá thẳng (mae-geri), đá vòng (mawashi-geri), đá hậu (ushiro-geri).',
        'Uke: đỡ — đỡ trên (jodan-uke), đỡ giữa (chudan-uke), đỡ dưới (gedan-barai).',
        'Kata: quyền — chuỗi kỹ thuật tổ hợp.',
      ] },
      { h: 'Đai và triết lý' },
      { p: 'Đai: trắng → vàng → cam → xanh → tím → nâu → đen (1–10 dan). Triết lý: "Karate ni sente nashi" — Karate không đánh trước, chỉ phòng vệ.' },
      { note: 'Karate là môn Olympic chính thức từ 2020 (Tokyo). Việt Nam có nhiều VĐV thành tích cao.' },
    ],
    [
      { q: '"Karate ni sente nashi" thực tế là gì?', a: 'Không đánh người trước, chỉ phản công khi bị tấn công. Người luyện Karate phải kiềm chế — không gây sự, không bạo lực vô cớ. Đó là đạo đức võ sĩ.' },
      { q: 'Em đai trắng — bao lâu lên đai vàng?', a: 'Trung bình 3–6 tháng tập đều (2–3 buổi/tuần). Phải thi: kỹ thuật cơ bản + 1 kata đơn giản + sparring nhẹ. Quan trọng là thuộc và đúng — không phải nhanh.' },
    ]
  ),

  'S9GDTC-w18-quiz': L(
    'Ôn tập học kì I',
    'Tổng kết HK1 — chuẩn bị thi kiểm tra cuối kì.',
    ['Hệ thống hoá kiến thức 18 tuần.', 'Đánh giá tiến bộ cá nhân.'],
    [
      { h: 'Các chủ đề chính HK1' },
      { ul: [
        'Khởi động – hồi tĩnh – sơ cứu RICE.',
        'Chạy bền: kỹ thuật + nhịp thở + 3 phương pháp tập.',
        'Đá cầu: 3 kỹ thuật cơ bản + thi đấu đơn/đôi.',
        'Cầu lông: đội hình đôi tấn công – phòng thủ.',
        'Bóng chuyền: đập bóng + chắn lưới.',
        'Bóng rổ: BEEF + man-to-man/zone + pick and roll.',
        'Bóng đá: sút phạt + việt vị + thẻ phạt.',
        'Võ thuật: Vovinam (cương nhu phối triển) + Karatedo (4 nhóm kỹ thuật).',
      ] },
      { h: 'Đánh giá cá nhân' },
      { p: 'Em tự chấm 0–10 cho từng môn: kỹ thuật, thể lực, hiểu luật. Môn yếu nhất sẽ là trọng tâm tập luyện HK2.' },
      { note: 'Mục tiêu HK2: vượt qua bài kiểm tra thể lực vào 10 + giữ thói quen tập đều suốt đời.' },
    ],
    [
      { q: 'Em tự chấm: chạy bền 6/10, đá cầu 8/10, bóng rổ 5/10 — kế hoạch?', a: 'Tập trung bóng rổ 3 buổi/tuần (BEEF + dribble). Duy trì chạy bền 2 buổi/tuần. Đá cầu chỉ 1 buổi (giữ phong độ). HK2 đo lại — kỳ vọng bóng rổ lên 7/10.' },
      { q: 'Triết lý xuyên suốt HK1?', a: 'An toàn trước thành tích — kỹ thuật đúng — tập đều và tăng tiến. Thể thao là cuộc chơi cả đời, không phải ép ngắn hạn.' },
    ]
  ),

  'S9GDTC-w19-quiz': L(
    'Bơi sải — Kỹ thuật cơ bản',
    'Bơi sải (freestyle) là kiểu bơi nhanh nhất — kỹ năng sống thiết yếu, đặc biệt với HS Việt Nam.',
    ['Nắm 4 yếu tố kỹ thuật.', 'Biết hô hấp đồng bộ.'],
    [
      { h: 'Bốn yếu tố kỹ thuật bơi sải' },
      { ul: [
        'Tư thế thân: thẳng, sát mặt nước, không nhô lên cao — giảm cản nước.',
        'Tay: vung luân phiên trên đầu — vào nước bằng đầu ngón, kéo qua thân, đẩy nước về sau.',
        'Chân: flutter kick — đập nhanh đều, gối hơi gập, cổ chân thả lỏng.',
        'Đầu: úp xuống nước, mắt nhìn đáy bể — chỉ ngẩng lên khi hít.',
      ] },
      { h: 'Hô hấp' },
      { p: 'Quay đầu sang ngang khi tay cùng bên vung qua đầu — hít vào nhanh. Quay đầu úp xuống — thở ra dưới nước. Không ngẩng đầu thẳng (sai!).' },
      { note: 'Người mới hay bị "trầm" do nâng đầu cao + đập chân chậm. Tập thả lỏng và đập đều.' },
    ],
    [
      { q: 'Em bơi sải mệt nhanh — chưa được 25m đã hết hơi?', a: 'Có thể do thở sai — hít ngắn thở dài. Hoặc tư thế đầu cao gây cản. Thử: úp đầu sâu hơn, thở ra dài dưới nước, hít ngắn 1 nhịp khi quay đầu.' },
      { q: 'Vì sao bơi sải nhanh nhất?', a: 'Vì có pha kéo nước liên tục (2 tay luân phiên) — không có pha trượt như bơi ếch. Mặt khác tư thế thân ngang giảm tối đa cản nước.' },
    ]
  ),

  'S9GDTC-w20-quiz': L(
    'Bơi ếch — Kỹ thuật cơ bản',
    'Bơi ếch (breaststroke) là kiểu bơi chậm nhất nhưng ít tốn sức — phù hợp bơi đường dài, cứu hộ.',
    ['Hiểu chu kỳ động tác tay-chân.', 'Biết hô hấp đồng bộ.'],
    [
      { h: 'Chu kỳ động tác bơi ếch' },
      { ul: [
        'Tay duỗi thẳng trước — chân duỗi thẳng sau (pha trượt).',
        'Tay tách ra ngoài + đẩy nước về sau — đầu nhô lên hít vào.',
        'Tay co về ngực — chân co gối + xoay bàn chân ra ngoài.',
        'Tay duỗi thẳng + chân đạp ếch về sau — về tư thế ban đầu.',
      ] },
      { h: 'Kỹ thuật đạp ếch (frog kick)' },
      { p: 'Co gối + xoay bàn chân ra ngoài → đạp mạnh ra sau theo vòng cung. Hai chân khép lại cuối nhịp tạo lực đẩy.' },
      { h: 'Hô hấp' },
      { p: 'Đầu nhô lên hít vào khi tay đẩy nước về sau. Úp đầu thở ra trong pha trượt.' },
      { note: 'Bơi ếch chậm hơn sải do có pha trượt và động tác đối xứng — không liên tục kéo nước.' },
    ],
    [
      { q: 'Em bơi ếch không tiến tới nhanh — sai ở đâu?', a: 'Có thể đạp chân sai — không xoay bàn chân ra ngoài thì lực đẩy yếu. Hoặc không có pha trượt — cứ co duỗi liên tục. Sửa: đạp xong DUỖI THẲNG 1 giây trước khi co lại.' },
      { q: 'Bơi ếch phù hợp khi nào?', a: 'Bơi đường dài (vì ít tốn sức), bơi đầu ngẩng (quan sát xung quanh), bơi cứu hộ (đẩy nạn nhân về bờ). Cũng phù hợp khi mệt sau khi bơi sải.' },
    ]
  ),

  'S9GDTC-w21-quiz': L(
    'An toàn dưới nước',
    'Đuối nước là nguyên nhân tử vong hàng đầu ở trẻ em VN. Lớp 9 phải nắm quy tắc an toàn cứng.',
    ['Biết kiểm tra an toàn trước khi xuống nước.', 'Xử lý được chuột rút và cứu hộ.'],
    [
      { h: 'Trước khi xuống nước' },
      { ul: [
        'Khởi động kỹ 10 phút — đặc biệt cổ chân, cổ tay, gáy.',
        'Không xuống khi đói lả hoặc ăn quá no (chờ 1–2 giờ sau ăn).',
        'Kiểm tra độ sâu — không nhảy đầu xuống nước nông.',
        'Có cứu hộ hoặc người lớn quan sát.',
      ] },
      { h: 'Xử lý chuột rút dưới nước' },
      { p: 'Bình tĩnh — KHÔNG hoảng loạn. Nổi ngửa, bóp cơ bị rút (bắp chân: kéo bàn chân về thân; cổ tay: gập bàn tay). Sau 30 giây thường hết — bơi vào bờ chậm rãi.' },
      { h: 'Cứu người đuối nước' },
      { ul: [
        'Gọi to để báo người lớn / 115.',
        'Ném phao, áo, dây cho nạn nhân — KHÔNG tự lao xuống nếu không được huấn luyện.',
        'Nếu phải vào nước, tiếp cận từ phía sau, đỡ cằm nạn nhân.',
        'Lên bờ: kiểm tra hô hấp, ép tim ngoài lồng ngực nếu ngừng tim.',
      ] },
      { note: 'Nguyên tắc vàng: TỰ BẢO VỆ trước khi cứu người khác — nhiều ca cứu hộ bị nạn nhân kéo theo.' },
    ],
    [
      { q: 'Bạn em chới với giữa hồ — em chỉ biết bơi cơ bản. Em làm gì?', a: 'TUYỆT ĐỐI KHÔNG lao xuống. Hô to gọi cứu hộ + người lớn. Tìm phao / cây sào / áo dài / dây — ném tới bạn. Nếu không có, chạy gọi 115. Tự lao xuống là tự sát.' },
      { q: 'Em bị chuột rút bắp chân khi đang bơi giữa hồ?', a: 'Bình tĩnh nổi ngửa — không hoảng. Dùng tay kéo bàn chân về thân, bóp mạnh bắp chân. Sau 30 giây thường hết. Sau đó bơi chậm vào bờ, nghỉ ngơi.' },
    ]
  ),

  'S9GDTC-w22-quiz': L(
    'Đá cầu — Thi đấu nâng cao',
    'Lớp 9 thi đấu đá cầu nâng cao — chiến thuật và kỹ thuật phối hợp.',
    ['Biết cú tấn công nâng cao.', 'Nắm chiến thuật trong trận đôi.'],
    [
      { h: 'Cú tấn công nâng cao' },
      { ul: [
        'Đá quét (sweep kick): chân quét ngang đầu — mạnh, hiểm, khó đỡ.',
        'Đá mu cao + xa: tấn công khi cầu ở giữa sân, đẩy đối thủ về sâu.',
        'Đá lừa: giả vờ đá hướng A, đổi hướng B ở phút cuối.',
      ] },
      { h: 'Phòng thủ' },
      { p: 'Đỡ cầu cao lên trên (defensive lob) để có thời gian phục hồi vị trí. Không cố đập trả ngay khi mất thăng bằng.' },
      { h: 'Chiến thuật trận đôi' },
      { p: 'Phân vai rõ: 1 người chuyên tấn công (cú mạnh), 1 người chuyên phòng thủ + chuyền cầu. Đổi vai khi cầu sang sân mình bên trái/phải.' },
      { note: 'Đá cầu Việt Nam dẫn đầu SEA Games — môn thể thao Việt nên tự hào.' },
    ],
    [
      { q: 'Em đập cầu xuống mạnh nhưng đối thủ vẫn đỡ được — vì sao?', a: 'Có thể đập ngay điểm dễ phán đoán (giữa sân). Phải đập vào góc trống — phối hợp với cú lừa hướng. Hoặc đập + drop xen kẽ để đối thủ rối nhịp.' },
      { q: 'Đôi em tan vỡ vì đồng đội yếu — khắc phục thế nào?', a: 'Em làm vai phòng thủ + chuyền cầu cao chính xác cho đồng đội tấn công. Không trách mắng — động viên là chìa khoá. Tập riêng cùng đồng đội 2 buổi/tuần để nâng phối hợp.' },
    ]
  ),

  'S9GDTC-w23-quiz': L(
    'Cầu lông — Chiến thuật đôi',
    'Cầu lông đôi đòi hỏi chiến thuật + phối hợp ăn ý — không chỉ kỹ thuật cá nhân.',
    ['Phân biệt đội hình tấn công/phòng thủ.', 'Biết các cú đánh lừa (deception).'],
    [
      { h: 'Chuyển đổi đội hình' },
      { ul: [
        'Tấn công: trước–sau. Người trước chặn lưới, người sau đập.',
        'Phòng thủ: ngang. Mỗi người chia đôi sân.',
        'Chuyển đổi nhanh khi tình huống thay đổi — đây là khó nhất của đôi.',
      ] },
      { h: 'Khi nào tấn công' },
      { p: 'Đối thủ ở thế phòng thủ + cầu cao gần lưới — đập mạnh hoặc drop sát lưới. Tấn công sai thời điểm = mất quyền chủ động.' },
      { h: 'Đánh lừa (deception)' },
      { p: 'Smash + drop nâng cao: vung tay như smash → giảm lực ở phút cuối → drop sát lưới. Đối thủ đã lùi sâu sẽ không kịp lên.' },
      { note: 'Sự kiện cầu lông VN: Vietnam Open (BWF Super 100), SEA Games, ASIAD. Nguyễn Tiến Minh là VĐV cầu lông số 1 VN.' },
    ],
    [
      { q: 'Đối thủ smash mạnh xuống — đội em phòng thủ thế nào?', a: 'Chuyển ngay sang đội hình ngang. Người gần đỡ — cố đánh cao lên giữa sân để có thời gian phục hồi đội hình. Không cố trả mạnh.' },
      { q: 'Khi nào dùng smash + drop deception?', a: 'Khi đối thủ đã quen với smash thật của mình — đã lùi sâu để đỡ. Lúc đó giả vờ smash → drop sát lưới, đối thủ không kịp lên = mất điểm.' },
    ]
  ),

  'S9GDTC-w24-quiz': L(
    'Bóng chuyền — Phối hợp đội',
    'Bóng chuyền 6 người/sân — đòi hỏi phối hợp ăn ý giữa các vị trí.',
    ['Hiểu vai trò libero + setter.', 'Nắm luật cơ bản.'],
    [
      { h: 'Sáu vị trí bóng chuyền' },
      { ul: [
        'Setter (chuyền 2): "nhạc trưởng" — chuyền bóng cho attacker tấn công.',
        'Outside hitter (đập biên): attacker chính ở 2 biên.',
        'Middle blocker (chắn giữa): chuyên chắn lưới + tấn công nhanh giữa.',
        'Opposite (đối diện): attacker bên phải.',
        'Libero: chuyên phòng thủ — mặc áo khác màu, không được phát/đập.',
      ] },
      { h: 'Luật cơ bản' },
      { ul: [
        '6 người/sân.',
        'Set tới 25 điểm, chênh 2 (set 5 cuối tới 15).',
        'Trận thắng 3/5 set.',
        'Mỗi đội tối đa 3 lần chạm bóng trước khi qua lưới.',
      ] },
      { h: 'Cú phát mạnh' },
      { p: 'Jump serve: chạy đà + nhảy + đập như spike từ vạch phát. Mạnh nhưng khó kiểm soát.' },
      { note: 'Vai trò setter là quan trọng nhất — quyết định nhịp tấn công của cả đội.' },
    ],
    [
      { q: 'Tại sao libero mặc áo khác màu?', a: 'Để trọng tài và đội đối phương dễ nhận biết — libero có luật riêng (không được phát, không tấn công trên lưới, có thể vào ra liên tục). Khác màu = không nhầm với attacker.' },
      { q: 'Đội em yếu phòng thủ — bổ sung gì?', a: 'Đầu tư cho libero và 2 người hậu vệ (back row). Tập đỡ búa (dig) — quỳ thấp, hai tay đan, đỡ bằng cẳng tay. Phòng thủ tốt → mới có cơ hội phản công.' },
    ]
  ),

  'S9GDTC-w25-quiz': L(
    'Bóng rổ — Thi đấu',
    'Hiểu luật thi đấu bóng rổ + cách tính điểm.',
    ['Nắm luật cơ bản FIBA.', 'Hiểu cách tính 1, 2, 3 điểm.'],
    [
      { h: 'Luật cơ bản FIBA' },
      { ul: [
        '5 người/sân — mỗi đội.',
        '4 hiệp × 10 phút (NBA: 4 × 12 phút).',
        'Bóng phải qua nửa sân đối phương trong 8 giây.',
        '24 giây phải dứt điểm — đồng hồ shot clock.',
        '5 lỗi cá nhân = bị truất quyền (NBA: 6 lỗi).',
      ] },
      { h: 'Tính điểm' },
      { ul: [
        '1 điểm: ném phạt (free throw) — cấp khi bị phạm lỗi.',
        '2 điểm: ném trong vạch 3 điểm.',
        '3 điểm: ném ngoài vạch 3 điểm (6,75m FIBA).',
      ] },
      { h: 'Lỗi phổ biến' },
      { ul: [
        'Travel: chạy quá 2 bước không dribble.',
        'Double dribble: dribble lại sau khi đã ôm bóng.',
        '3 giây: đứng trong khu cấm địa quá 3 giây.',
      ] },
      { note: 'Bóng rổ là môn Olympic — VN có giải VBA chuyên nghiệp từ 2016.' },
    ],
    [
      { q: 'Em bị phạm lỗi trong lúc ném 3 điểm — được mấy quả phạt?', a: '3 quả phạt — tương ứng giá trị cú ném (nếu không vào). Nếu cú ném vào + bị phạm lỗi = 3 điểm + 1 quả phạt thưởng.' },
      { q: 'Đội em hay bị thổi travel — sửa thế nào?', a: 'Tập kỹ pivot — dùng 1 chân làm trục xoay. Sau khi nhận bóng, đặt 1 chân làm trục, chân kia di chuyển tự do. Không nhấc chân trục lên trước khi dribble.' },
    ]
  ),

  'S9GDTC-w26-quiz': L(
    'Bóng đá — Thi đấu chiến thuật',
    'Bóng đá hiện đại có nhiều đội hình — phải hiểu để phối hợp.',
    ['Phân biệt 3 đội hình phổ biến.', 'Nắm luật trận đấu.'],
    [
      { h: 'Ba đội hình phổ biến' },
      { ul: [
        '4-4-2: 4 hậu vệ + 4 tiền vệ + 2 tiền đạo. Cân bằng, dễ tổ chức.',
        '4-3-3: 4 hậu vệ + 3 tiền vệ + 3 tiền đạo. Tấn công mạnh.',
        '3-5-2: 3 hậu vệ + 5 tiền vệ (2 wingback) + 2 tiền đạo. Linh hoạt.',
      ] },
      { h: 'Luật trận đấu' },
      { ul: [
        '11 người/sân (kể thủ môn).',
        '90 phút chính thức + bù giờ (2 hiệp × 45 phút).',
        'Giải đấu loại trực tiếp: hoà → hiệp phụ 30 phút → penalty.',
        '3 quyền thay người chính thức (FIFA cho phép 5 sau COVID).',
      ] },
      { h: 'Nguyên tắc chiến thuật' },
      { p: 'Phòng thủ chặt → cướp bóng → phản công nhanh. Hoặc kiểm soát bóng (possession) → tạo cơ hội. Tuỳ tài năng đội bóng mà chọn lối chơi.' },
      { note: 'VN U22 chiến thắng SEA Games 30 và 31 — minh chứng bóng đá VN có thể vươn tầm khu vực.' },
    ],
    [
      { q: 'Đội em yếu cá nhân nhưng có thể lực tốt — chọn lối chơi nào?', a: 'Pressing (gây sức ép) toàn sân — cướp bóng từ phần sân đối phương. Tận dụng thể lực dồn ép họ phạm sai lầm. Đội hình 4-4-2 hoặc 4-3-3 phù hợp.' },
      { q: 'Tại sao 4-3-3 mạnh tấn công?', a: 'Có 3 tiền đạo (2 cánh + 1 trung phong) — luôn đông quân ở phần sân đối phương. Tiền vệ 3 người đủ chuyển bóng. Nhưng phải có hậu vệ cánh khoẻ vì 2 cánh hở.' },
    ]
  ),

  'S9GDTC-w27-quiz': L(
    'Thể chất — Sức mạnh và linh hoạt',
    'Sức mạnh và linh hoạt là 2 tố chất nền tảng — bổ trợ mọi môn thể thao.',
    ['Nắm phương pháp tập sức mạnh.', 'Hiểu nguyên tắc giãn cơ.'],
    [
      { h: 'Tập sức mạnh' },
      { ul: [
        'Bodyweight (trọng lượng cơ thể): chống đẩy, gập bụng, squat, plank, kéo xà.',
        'Tạ: dumbbell, barbell — phải có người hướng dẫn.',
        'Resistance band (dây kháng lực): an toàn, đa dạng.',
        'Lớp 9 nên tập 60–70% bodyweight + 30% tạ nhẹ (nếu có).',
      ] },
      { h: 'Tập linh hoạt' },
      { ul: [
        'Giãn cơ tĩnh: giữ tư thế 20–30 giây/động tác — sau buổi tập.',
        'Giãn cơ động: di chuyển + giãn cơ — trước buổi tập.',
        'Yoga / Pilates: tăng linh hoạt + cân bằng + sức mạnh lõi.',
      ] },
      { h: 'Nguyên tắc tập an toàn' },
      { p: 'Khởi động → tập chính → hồi tĩnh. Tăng tiến dần 5–10%/tuần. Lắng nghe cơ thể — đau xương khớp phải dừng.' },
      { note: 'Sức mạnh không phải "cơ to" — là khả năng tạo lực. Linh hoạt cũng quan trọng không kém.' },
    ],
    [
      { q: 'Em muốn cao thêm — có nên tập tạ nặng?', a: 'Lớp 9 (14–15 tuổi) còn đang tăng trưởng, tập tạ NHẸ với kỹ thuật đúng là OK. Tập tạ NẶNG quá mức có thể ảnh hưởng sụn tăng trưởng. Ưu tiên bodyweight + tạ nhẹ kỹ thuật chuẩn.' },
      { q: 'Em không linh hoạt — cứng người. Sửa thế nào?', a: 'Giãn cơ tĩnh mỗi tối 15 phút trước khi ngủ — yoga cơ bản. Sau 4 tuần sẽ thấy khác biệt rõ. Linh hoạt là tố chất tập được, không phải "trời cho".' },
    ]
  ),

  'S9GDTC-w28-quiz': L(
    'Dinh dưỡng cho người tập thể thao',
    'Tập đúng + ăn đúng = tiến bộ. Dinh dưỡng quyết định 50% kết quả tập luyện.',
    ['Hiểu 3 nhóm dinh dưỡng chính.', 'Biết ăn uống quanh buổi tập.'],
    [
      { h: 'Ba nhóm dinh dưỡng chính' },
      { ul: [
        'Carbohydrate (tinh bột): năng lượng chính — cơm, mì, bánh mì, khoai. 50–60% năng lượng/ngày.',
        'Protein (chất đạm): xây và phục hồi cơ — thịt, cá, trứng, đậu. 15–20%/ngày.',
        'Chất béo: hormone + hấp thụ vitamin — dầu thực vật, cá hồi, hạt. 20–30%/ngày.',
      ] },
      { h: 'Ăn uống quanh buổi tập' },
      { ul: [
        'Trước tập 1 giờ: ăn nhẹ dễ tiêu — chuối, bánh mì, sữa chua.',
        'Trong tập: uống nước đều, từng ngụm nhỏ.',
        'Sau tập 30–60 phút (cửa sổ vàng): ăn carb + protein — cơm + thịt, sữa + trái cây.',
      ] },
      { h: 'Nước' },
      { p: 'Cơ thể 60% là nước. Mất 2% nước = giảm 10% hiệu suất. HS tập thể thao nên uống 2–3 lít/ngày, nhiều hơn nếu trời nóng.' },
      { note: 'Không có "thực phẩm thần kỳ" — đa dạng + đủ lượng + đúng thời điểm là chìa khoá.' },
    ],
    [
      { q: 'Em tập gym tăng cơ — nên ăn protein bao nhiêu?', a: 'HS 14–15 tuổi tập thể thao: khoảng 1,2–1,5g protein/kg cân nặng/ngày. Nặng 50kg → 60–75g/ngày. Ăn đa dạng: trứng, thịt nạc, cá, đậu nành, sữa. Không cần whey nếu ăn đủ.' },
      { q: 'Sau buổi tập rất đói — nên ăn gì?', a: 'Cửa sổ vàng 30–60 phút sau tập. Ăn carb + protein theo tỉ lệ 3:1 hoặc 4:1. Ví dụ: 1 bát cơm + thịt gà + rau. Hoặc bánh mì kẹp trứng + sữa. Tránh đồ ngọt nhiều đường.' },
    ]
  ),

  'S9GDTC-w29-quiz': L(
    'Bệnh và chấn thương — Phòng tránh',
    'Phòng chấn thương > chữa. Lớp 9 phải biết cách phòng + sơ cứu cơ bản.',
    ['Nắm chấn thương phổ biến.', 'Thực hành được sơ cứu RICE.'],
    [
      { h: 'Chấn thương phổ biến' },
      { ul: [
        'Bong gân: dây chằng giãn quá mức — cổ chân, cổ tay.',
        'Căng cơ: cơ bị kéo căng quá — đùi, bắp chuối.',
        'Trật khớp: khớp lệch khỏi vị trí — vai, ngón tay.',
        'Gãy xương: ít gặp nhưng nguy hiểm — cần y tế ngay.',
      ] },
      { h: 'Sơ cứu RICE chi tiết' },
      { ul: [
        'R-Rest: nghỉ ngay, không cố tiếp tục.',
        'I-Ice: chườm đá 15–20 phút mỗi 2 giờ trong 48 giờ đầu (qua khăn — không chườm trực tiếp).',
        'C-Compression: băng ép bằng băng thun — không quá chặt (kiểm tra đầu ngón tím).',
        'E-Elevation: nâng chi cao hơn tim — giảm sưng.',
      ] },
      { h: 'Phòng chấn thương' },
      { ul: [
        'Khởi động kỹ.',
        'Tăng tiến dần — không nhảy vọt khối lượng.',
        'Đúng kỹ thuật — sai kỹ thuật = chấn thương.',
        'Đủ hồi phục — ngủ 8 tiếng, ăn đủ.',
      ] },
      { note: 'Chấn thương nặng (đau dữ dội, biến dạng, mất cảm giác) phải đến y tế NGAY — không tự xử.' },
    ],
    [
      { q: 'Em bong gân cổ chân lúc đá bóng — RICE thế nào?', a: 'R: ngồi xuống nghỉ ngay. I: chườm đá 20 phút (qua khăn). C: băng thun ép quanh cổ chân (không chặt quá). E: kê chân lên ghế, cao hơn tim. Sáng hôm sau vẫn sưng đau thì đi khám.' },
      { q: 'Bạn em ngã sai khớp vai — em sơ cứu thế nào?', a: 'KHÔNG cố nắn lại — gây tổn thương nặng hơn. Cố định bằng khăn quàng (đai vải), đỡ tay sát thân. Đưa bạn đến cơ sở y tế ngay. Trên đường: chườm đá nếu có.' },
    ]
  ),

  'S9GDTC-w30-quiz': L(
    'Đạo đức trong thể thao',
    'Fair play (chơi đẹp) là tinh thần thể thao cao đẹp — không chỉ thắng mà còn cách thắng.',
    ['Hiểu fair play.', 'Nhận biết hành vi sai trái.'],
    [
      { h: 'Fair play — Chơi đẹp' },
      { ul: [
        'Trung thực — không gian lận.',
        'Tôn trọng luật — không phạm lỗi cố ý.',
        'Tôn trọng đối thủ — không khiêu khích, không xúc phạm.',
        'Tôn trọng trọng tài — không cãi cọ.',
      ] },
      { h: 'Doping — Dùng chất cấm' },
      { p: 'Sử dụng chất tăng cường (steroid, EPO…) để cải thiện thành tích. Vi phạm đạo đức + luật pháp + tổn hại sức khoẻ lâu dài. Mọi giải đấu lớn đều kiểm tra doping.' },
      { h: 'Khi thắng và khi thua' },
      { ul: [
        'Thắng: khiêm tốn, bắt tay đối thủ, không khoe khoang.',
        'Thua: chấp nhận, rút kinh nghiệm, không đổ lỗi.',
      ] },
      { note: 'Câu nói: "Người thắng đáng kính trọng, người thua đáng học hỏi" — đó là tinh thần thể thao.' },
    ],
    [
      { q: 'Em thắng trận quan trọng — ăn mừng sao cho fair play?', a: 'Chia vui với đồng đội + huấn luyện viên. Bắt tay/ôm đối thủ — cám ơn họ vì trận đấu hay. Tránh khiêu khích, ăn mừng quá lố trước mặt đối thủ. Cảm ơn trọng tài + khán giả.' },
      { q: 'Doping có hại thật sự không?', a: 'Có — rất nặng. Steroid: phá gan, tim, hormone, vô sinh. EPO: tăng máu đặc, dễ đột quỵ. Nhiều VĐV chết trẻ vì doping. Chưa kể: nếu bị phát hiện = cấm thi đấu suốt đời, mất tất cả danh hiệu.' },
    ]
  ),

  'S9GDTC-w31-quiz': L(
    'Luyện sức bền — Chạy 1500m',
    'Chạy 1500m là nội dung kiểm tra thể lực vào 10 tại nhiều địa phương — phải chuẩn bị kỹ.',
    ['Nắm chiến thuật pacing.', 'Lập kế hoạch tập luyện cá nhân.'],
    [
      { h: 'Chiến thuật pacing 1500m' },
      { ul: [
        '300m đầu: khởi động + ổn định nhịp (60–70% sức).',
        '300–1200m: giữ nhịp đều (70–80% sức).',
        '1200–1500m cuối: tăng tốc — dồn sức "kick" về đích.',
      ] },
      { h: 'Kế hoạch tập 8 tuần' },
      { ul: [
        'Tuần 1–2: 3 buổi/tuần — chạy đều 1500m × 1 (đo thời gian) + chạy nhẹ 2km.',
        'Tuần 3–4: thêm interval (8 × 200m + nghỉ 90s).',
        'Tuần 5–6: tempo run (1500m ở 85% sức).',
        'Tuần 7: giảm tải 50% (tapering).',
        'Tuần 8: kiểm tra thực — phấn đấu cải thiện 5–10%.',
      ] },
      { h: 'Trang phục + nước' },
      { p: 'Quần áo thoáng hút mồ hôi, giày chạy chuyên dụng. Uống 200–300ml trước chạy 30 phút. Trong chạy 1500m không cần uống nếu đủ trước.' },
      { note: 'Thành tích mục tiêu HS lớp 9 (nam): 6–7 phút; (nữ): 7–8 phút. Tốt hơn càng có lợi.' },
    ],
    [
      { q: 'Em chạy 1500m mất 8 phút — muốn xuống 6:30?', a: 'Lộ trình 8 tuần như giáo án trên + chú trọng interval (tăng tốc độ) + giảm cân nếu thừa cân. Mỗi tuần đo lại — kỳ vọng giảm 15–20 giây/tuần. Có thể chạm 6:30 sau 2 tháng nỗ lực.' },
      { q: 'Pacing sai — em hay bứt phá ngay từ đầu rồi đuối?', a: 'Lỗi phổ biến. Khắc phục: đeo đồng hồ, đặt mục tiêu tốc độ cho mỗi 300m. Tập với bạn pacing tốt — chạy theo bạn 1000m đầu rồi tăng tốc cuối.' },
    ]
  ),

  'S9GDTC-w32-quiz': L(
    'Tổ chức trận đấu nhỏ',
    'Tổ chức trận đấu cần kỹ năng lãnh đạo, công bằng và tinh thần thể thao.',
    ['Hiểu cấu trúc một trận đấu.', 'Biết vai trò đội trưởng và trọng tài.'],
    [
      { h: 'Cấu trúc trận đấu giao hữu' },
      { ul: [
        'Trước trận: bốc thăm chọn bên, kiểm tra sân/dụng cụ, khởi động chung.',
        'Trong trận: trọng tài điều khiển, đội tuân thủ luật.',
        'Sau trận: bắt tay đối thủ, cảm ơn trọng tài, dọn dẹp.',
      ] },
      { h: 'Vai trò đội trưởng' },
      { ul: [
        'Dẫn dắt đội về tinh thần — động viên khi thua, kiềm chế khi thắng.',
        'Giao tiếp với trọng tài — duy nhất được phép trao đổi chính thức.',
        'Phân công vị trí + thay người.',
      ] },
      { h: 'Vai trò trọng tài' },
      { p: 'Công bằng (không thiên vị). Hiểu luật (không thổi sai). Quyết đoán (không do dự). Khi có tranh chấp, quyết định trọng tài là cuối cùng — phải tôn trọng.' },
      { note: 'Trận đấu lành mạnh là trận thầy/cô tự hào về cả 2 đội — dù ai thắng.' },
    ],
    [
      { q: 'Em làm đội trưởng — đồng đội tranh cãi với trọng tài. Em làm gì?', a: 'Lập tức tiến tới — đẩy đồng đội về phía sau. Em tự xin lỗi trọng tài thay đồng đội. Nói riêng với đồng đội: "Tôn trọng trọng tài — chúng ta vẫn còn cơ hội ghi điểm". Bình tĩnh là phẩm chất đội trưởng.' },
      { q: 'Em làm trọng tài — không chắc lỗi xảy ra hay không. Quyết thế nào?', a: 'Tin vào quan sát ban đầu của mình — không do dự. Nếu thật sự không thấy rõ, thổi "không lỗi" (lợi đội tấn công). Sau trận có thể xem video phản hồi để rút kinh nghiệm. KHÔNG đổi quyết định giữa trận.' },
    ]
  ),

  'S9GDTC-w33-quiz': L(
    'Ôn tập HK2',
    'Tổng hợp kiến thức HK2 — bơi, đá cầu nâng cao, bóng các loại, võ thuật, dinh dưỡng, đạo đức.',
    ['Hệ thống hoá HK2.', 'Chuẩn bị kiểm tra cuối kì.'],
    [
      { h: 'Các chủ đề HK2' },
      { ul: [
        'Bơi sải + bơi ếch — kỹ thuật và an toàn dưới nước.',
        'Đá cầu nâng cao — tấn công + chiến thuật đôi.',
        'Cầu lông đôi — chuyển đổi đội hình + deception.',
        'Bóng chuyền — 6 vị trí + libero + setter.',
        'Bóng rổ — luật + tính điểm + lỗi cá nhân.',
        'Bóng đá — 3 đội hình + luật trận.',
        'Sức mạnh + linh hoạt + dinh dưỡng + phòng chấn thương.',
        'Đạo đức thể thao — fair play, không doping.',
      ] },
      { h: 'Tổng kết cấp 2' },
      { p: 'Lớp 9 là năm cuối cấp 2 — chốt kiến thức 4 năm. Lên cấp 3 sẽ chuyên sâu hơn, đặc biệt GDQP-An. Giữ thói quen vận động đều = sức khoẻ cả đời.' },
      { note: 'Bài kiểm tra cuối kì: kết hợp lý thuyết (20%) + kỹ thuật thực hành (50%) + thể lực (30%).' },
    ],
    [
      { q: 'Tóm tắt 3 nguyên tắc xuyên suốt GDTC THCS?', a: '(1) An toàn trước thành tích — khởi động, hồi tĩnh, đúng kỹ thuật. (2) Tăng tiến dần — không nhảy vọt. (3) Đa dạng — nhiều môn để phát triển toàn diện. Ba điều này theo em cả đời.' },
      { q: 'Lên lớp 10 sẽ học gì khác?', a: 'GDQP-An (Giáo dục Quốc phòng-An ninh) là môn mới — học điều lệnh đội ngũ, lý thuyết AK, an ninh quốc gia. GDTC vẫn có nhưng tập trung môn tự chọn theo sở thích.' },
    ]
  ),

  'S9GDTC-w34-quiz': L(
    'Thể chất suốt đời — Kế hoạch cá nhân',
    'Mục tiêu cao nhất của GDTC: rèn thói quen vận động cho cả đời — không chỉ học sinh.',
    ['Hiểu lợi ích lâu dài của vận động.', 'Lập được kế hoạch cá nhân.'],
    [
      { h: 'Lợi ích vận động suốt đời' },
      { ul: [
        'Giảm 30–40% nguy cơ bệnh tim mạch, tiểu đường type 2, béo phì.',
        'Giảm trầm cảm, lo âu — endorphin tự nhiên.',
        'Tăng tuổi thọ trung bình 3–5 năm.',
        'Tinh thần minh mẫn lâu dài — phòng chống Alzheimer.',
      ] },
      { h: 'Khuyến nghị WHO' },
      { p: 'Người 5–17 tuổi: ≥ 60 phút hoạt động trung bình–mạnh/ngày. Người 18–64 tuổi: ≥ 150 phút trung bình hoặc 75 phút mạnh/tuần.' },
      { h: 'Kế hoạch cá nhân SMART' },
      { p: 'S-cụ thể (môn gì), M-đo được (bao nhiêu phút), A-khả thi (phù hợp lịch học), R-có ý nghĩa (vì mục tiêu sức khoẻ), T-có thời hạn (3 tháng đầu thử).' },
      { note: 'Yếu tố duy trì lâu dài: chọn môn YÊU THÍCH + có bạn cùng tập + tăng tiến dần. Ép buộc sẽ bỏ.' },
    ],
    [
      { q: 'Em lười tập — làm sao duy trì?', a: 'Bắt đầu nhỏ: 10 phút/ngày môn yêu thích (đạp xe, đi bộ nhanh). Tăng dần lên 30 phút sau 1 tháng. Tìm bạn cùng tập — chịu trách nhiệm với nhau. Đặt mục tiêu cụ thể (chạy 5km sau 3 tháng).' },
      { q: 'Lên cấp 3 bận học — có nên bỏ tập?', a: 'TUYỆT ĐỐI KHÔNG. Tập thể dục giúp não tỉnh táo — học hiệu quả hơn. 30 phút/ngày là đủ — đi bộ, đạp xe đến trường, leo cầu thang thay thang máy. Lười tập = học kém.' },
    ]
  ),

  'S9GDTC-w35-quiz': L(
    'Tổng kết — Kiểm tra cuối kì',
    'Bài cuối cấp 2 — tổng hợp tất cả + định hướng cấp 3.',
    ['Hệ thống hoá toàn bộ chương trình.', 'Định hướng tập luyện sau lớp 9.'],
    [
      { h: 'Triết lý xuyên suốt GDTC THCS' },
      { ul: [
        'An toàn > Thành tích.',
        'Kỹ thuật đúng > Sức mạnh.',
        'Đều đặn > Bùng nổ.',
        'Đa dạng > Chuyên sâu (ở tuổi HS).',
        'Fair play > Chiến thắng bằng mọi giá.',
      ] },
      { h: 'Định hướng cấp 3' },
      { p: 'Cấp 3 sẽ có thêm GDQP-An (mới hoàn toàn) + GDTC chuyên sâu môn tự chọn. Nên chọn môn yêu thích để tập sâu — vẫn duy trì đa dạng cardio + sức mạnh + linh hoạt.' },
      { h: 'Lời cuối cấp 2' },
      { p: 'Thể thao không phải để thi đua mà để rèn sức khoẻ + ý chí + tinh thần đồng đội. Người chiến thắng cuối cùng là người duy trì được thói quen vận động suốt đời — chứ không phải người tập hùng hục rồi bỏ.' },
      { note: 'Sức khoẻ là tài sản quý nhất — không tiền nào mua được. Hãy đầu tư mỗi ngày.' },
    ],
    [
      { q: '3 thông điệp cấp 2 em sẽ mang sang cấp 3?', a: '(1) Khởi động – hồi tĩnh là BẮT BUỘC. (2) Sơ cứu RICE khi chấn thương cơ khớp. (3) ≥ 60 phút vận động/ngày + ngủ đủ + ăn cân bằng = công thức khoẻ mạnh. Ba điều này theo em suốt đời.' },
      { q: 'Lời cảm ơn?', a: 'Cảm ơn các thầy/cô GDTC đã rèn cho chúng em không chỉ kỹ thuật mà cả tinh thần fair play, kỷ luật và sức bền. Chúng em sẽ giữ gìn thói quen vận động đều suốt đời. Hẹn gặp lại ở các trận giao hữu cấp 3!' },
    ]
  ),
};
