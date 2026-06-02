// ============================================================
// Lớp 11 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Tiếng Anh 11 — Global Success).
// ID prefix: "H11TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11TA', 'tieng-anh', n, title, qs, opts);

export const H11TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Unit 1 — Generation Gap · Vocabulary', [
    Q('"Generation gap" nghĩa là?', ['Khoảng cách thế hệ','Khoảng cách thu nhập','Khoảng cách thành thị-nông thôn','Khoảng cách giới tính'], 0, 'Generation gap = khoảng cách giữa các thế hệ.'),
    Q('"Nuclear family" là?', ['Gia đình hạt nhân (cha mẹ + con)','Đại gia đình','Gia đình ly tán','Gia đình đơn thân'], 0, 'Nuclear family = gia đình nhỏ.'),
    Q('"Conservative" mang nghĩa?', ['Bảo thủ','Phóng khoáng','Hiện đại','Năng động'], 0, 'Conservative = bảo thủ, truyền thống.'),
    Q('"Open-minded" nghĩa là?', ['Cởi mở, dễ chấp nhận ý kiến mới','Cố chấp','Lạnh lùng','Bí mật'], 0, 'Open-minded = tư duy mở.'),
    Q('"To respect elders" nghĩa là?', ['Kính trọng người lớn tuổi','Tranh cãi với người lớn','Lờ đi','Bắt chước'], 0, 'Respect elders = kính trên.'),
    Q('"Conflict" nghĩa là?', ['Mâu thuẫn, xung đột','Hoà hợp','Đoàn kết','Hợp tác'], 0, 'Conflict = xung đột.'),
  ]),

  M(2, 'Unit 1 — Generation Gap · Modal verbs (must, have to, should)', [
    Q('"You ___ wear a uniform at school." (bắt buộc theo nội quy)', ['must','can','may','might'], 0, 'Must = bắt buộc.'),
    Q('"Children ___ obey their parents." (nên)', ['should','must not','need not','will'], 0, 'Should = lời khuyên.'),
    Q('"I ___ get up early tomorrow because of an exam."', ['have to','can','may','might'], 0, 'Have to = bắt buộc khách quan.'),
    Q('"You ___ smoke here." (cấm)', ['must not','need not','should','can'], 0, 'Must not = cấm.'),
    Q('"He ___ work overtime; the project is delayed."', ['has to','can','may','might'], 0, 'Has to + V.'),
    Q('"You ___ worry. Everything is fine." (không cần)', ['needn\'t','must not','should','have to'], 0, 'Needn\'t = không cần.'),
  ]),

  M(3, 'Unit 2 — Relationships · Vocabulary', [
    Q('"Romantic relationship" là?', ['Quan hệ tình cảm yêu đương','Quan hệ công việc','Quan hệ họ hàng','Quan hệ bạn bè'], 0, 'Romantic = lãng mạn, yêu đương.'),
    Q('"To get along (with)" nghĩa là?', ['Hoà thuận với','Cãi nhau','Chia tay','Lờ đi'], 0, 'Get along = hoà hợp.'),
    Q('"Reliable" mang nghĩa?', ['Đáng tin cậy','Khó tin','Lười biếng','Vô trách nhiệm'], 0, 'Reliable = đáng tin.'),
    Q('"Sympathetic" nghĩa là?', ['Đồng cảm','Tức giận','Thờ ơ','Ganh ghét'], 0, 'Sympathetic = thông cảm.'),
    Q('"To break up" nghĩa là?', ['Chia tay (trong tình yêu)','Hoà giải','Cưới nhau','Gặp mặt'], 0, 'Break up = chia tay.'),
    Q('"Long-distance relationship" là?', ['Quan hệ yêu xa','Quan hệ ngắn ngủi','Quan hệ công sở','Quan hệ gia đình'], 0, 'Long-distance = xa cách địa lý.'),
  ]),

  M(4, 'Unit 2 — Relationships · Linking verbs & Cleft sentences', [
    Q('Cleft sentence "It is/was … that …" dùng để?', ['Nhấn mạnh một thành phần câu','Đặt câu hỏi','So sánh','Đảo ngữ'], 0, 'Cleft = câu chẻ nhấn mạnh.'),
    Q('Chọn câu chẻ đúng: "I met Mary at the party."', ['It was Mary that I met at the party.','It is Mary who met at the party.','It was at Mary that I met.','I was Mary that met.'], 0, 'Nhấn mạnh "Mary".'),
    Q('"It was in 2020 ___ they got married."', ['that','who','which','where'], 0, 'Sau cleft + thời gian dùng "that".'),
    Q('"It is John ___ helped me yesterday."', ['who','which','where','what'], 0, 'Người → "who" (hoặc "that").'),
    Q('Linking verb (động từ nối) gồm?', ['be, seem, become, look','run, jump, eat','study, work','can, must'], 0, 'Linking verb nối chủ ngữ với bổ ngữ.'),
    Q('"She seems ___ today."', ['happy','happily','to happy','happiness'], 0, 'Sau linking verb dùng tính từ.'),
  ]),

  M(5, 'Unit 3 — Becoming Independent · Vocabulary', [
    Q('"Independent" nghĩa là?', ['Tự lập','Phụ thuộc','Bị động','Trẻ con'], 0, 'Independent = độc lập, tự lập.'),
    Q('"Self-confidence" là?', ['Sự tự tin','Sự nhút nhát','Sự lo lắng','Sự ghen tị'], 0, 'Self-confidence = tự tin.'),
    Q('"Time management" nghĩa là?', ['Quản lý thời gian','Quản lý tiền','Quản lý công việc','Quản lý nhân sự'], 0, 'Time management.'),
    Q('"To make decisions" là?', ['Đưa ra quyết định','Trì hoãn','Phụ thuộc người khác','Nghe theo'], 0, 'Make decisions = ra quyết định.'),
    Q('"Self-reliant" mang nghĩa?', ['Tự lực, dựa vào bản thân','Dựa vào người khác','Lười','Yếu đuối'], 0, 'Self-reliant = tự dựa.'),
    Q('"Life skill" là?', ['Kỹ năng sống','Kỹ năng nghề','Kỹ năng tay nghề','Kỹ năng IT'], 0, 'Life skill = kỹ năng sống.'),
  ]),

  M(6, 'Unit 3 — Becoming Independent · To-infinitive vs Gerund', [
    Q('"I enjoy ___ books." Chọn?', ['reading','to read','read','reads'], 0, 'enjoy + V-ing.'),
    Q('"She decided ___ abroad."', ['to study','studying','study','studied'], 0, 'decide + to V.'),
    Q('"He avoids ___ junk food."', ['eating','to eat','eat','eats'], 0, 'avoid + V-ing.'),
    Q('"I want ___ a doctor."', ['to become','becoming','become','became'], 0, 'want + to V.'),
    Q('"Stop ___! It\'s dangerous." (dừng làm việc đang làm)', ['smoking','to smoke','smoke','smoked'], 0, 'stop + V-ing = dừng đang làm.'),
    Q('"Remember ___ the door before leaving."', ['to lock','locking','lock','locked'], 0, 'remember + to V = nhớ làm.'),
  ]),

  M(7, 'Unit 4 — Caring for Those in Need · Vocabulary', [
    Q('"Disadvantaged people" là?', ['Người có hoàn cảnh khó khăn','Người giàu','Người trung lưu','Người nổi tiếng'], 0, 'Disadvantaged = thiệt thòi.'),
    Q('"Volunteer" nghĩa là?', ['Tình nguyện viên','Nhân viên','Lính','Học sinh'], 0, 'Volunteer = tình nguyện.'),
    Q('"Charity" là?', ['Tổ chức từ thiện','Bệnh viện','Trường học','Công ty'], 0, 'Charity = từ thiện.'),
    Q('"To donate" nghĩa là?', ['Quyên góp','Vay tiền','Bán hàng','Mua sắm'], 0, 'Donate = ủng hộ, hiến tặng.'),
    Q('"Visually impaired" là?', ['Khiếm thị','Khiếm thính','Liệt','Câm'], 0, 'Visually impaired = mất/giảm thị lực.'),
    Q('"Empathy" nghĩa là?', ['Sự đồng cảm','Sự ghen ghét','Sự xa lánh','Sự thờ ơ'], 0, 'Empathy = đồng cảm.'),
  ]),

  M(8, 'Unit 4 — Caring for Those in Need · Reduced relative clauses', [
    Q('"The man ___ in the corner is my uncle."', ['sitting','sat','sits','to sit'], 0, 'Rút gọn chủ động: V-ing.'),
    Q('"The book ___ on the table is mine."', ['lying','lain','lays','lie'], 0, 'Lying = đang nằm (chủ động).'),
    Q('"The car ___ by my father is new."', ['bought','buying','buys','to buy'], 0, 'Rút gọn bị động: V3.'),
    Q('"Children ___ in poor areas need help."', ['living','live','lived','to live'], 0, 'Children who live → living.'),
    Q('"The letter ___ yesterday is important."', ['written','writing','wrote','writes'], 0, 'The letter which was written → written.'),
    Q('Chọn dạng rút gọn của "The girl who is dancing on stage":', ['The girl dancing on stage','The girl danced on stage','The girl dance on stage','The girl to dance on stage'], 0, 'V-ing thay who is V-ing.'),
  ]),

  M(9, 'Unit 5 — Being Part of ASEAN · Vocabulary', [
    Q('"ASEAN" là viết tắt của?', ['Association of Southeast Asian Nations','Asian Economic Network','American South-East Alliance','Association of Eastern Asia'], 0, 'ASEAN = Hiệp hội các quốc gia Đông Nam Á.'),
    Q('"Cooperation" nghĩa là?', ['Sự hợp tác','Sự cạnh tranh','Sự chia rẽ','Sự đối lập'], 0, 'Cooperation = hợp tác.'),
    Q('"Integration" là?', ['Sự hội nhập','Sự cô lập','Sự rút lui','Sự đóng cửa'], 0, 'Integration = hội nhập.'),
    Q('"Diversity" mang nghĩa?', ['Sự đa dạng','Sự đồng nhất','Sự nghèo nàn','Sự yếu kém'], 0, 'Diversity = đa dạng.'),
    Q('ASEAN gồm bao nhiêu nước thành viên (tính đến 2024)?', ['10','5','7','12'], 0, 'ASEAN có 10 nước.'),
    Q('"Sustainable development" là?', ['Phát triển bền vững','Phát triển nhanh','Phát triển nóng','Phát triển ngắn hạn'], 0, 'Sustainable = bền vững.'),
  ]),

  M(10, 'Unit 5 — Being Part of ASEAN · Comparative & Superlative review', [
    Q('"Vietnam is ___ than Singapore in area."', ['larger','more large','largest','large'], 0, 'Tính từ ngắn + -er.'),
    Q('"Mount Everest is ___ mountain in the world."', ['the highest','higher','high','highest'], 0, 'Superlative + the.'),
    Q('"Indonesia is ___ populous country in ASEAN."', ['the most','more','most','much'], 0, 'Most + adj dài.'),
    Q('"This city is as ___ as Hanoi."', ['busy','busier','busiest','more busy'], 0, 'as + adj + as.'),
    Q('"The more you study, ___ you learn."', ['the more','the most','more','most'], 0, 'The more…, the more… (so sánh kép).'),
    Q('"He is not ___ his brother."', ['as tall as','tallest','more tall','taller as'], 0, 'Not as … as.'),
  ]),

  M(11, 'Unit 6 — Global Warming · Vocabulary', [
    Q('"Global warming" là?', ['Sự nóng lên toàn cầu','Sự lạnh đi toàn cầu','Sự ô nhiễm','Sự khô hạn'], 0, 'Global warming = nóng lên toàn cầu.'),
    Q('"Greenhouse gas" là?', ['Khí nhà kính (CO₂, CH₄…)','Khí oxy','Khí nitơ','Khí ozone'], 0, 'Greenhouse gas = khí nhà kính.'),
    Q('"Carbon dioxide" công thức hoá học?', ['CO₂','CO','O₂','H₂O'], 0, 'Carbon dioxide = CO₂.'),
    Q('"Renewable energy" là?', ['Năng lượng tái tạo','Năng lượng hoá thạch','Năng lượng hạt nhân','Năng lượng than'], 0, 'Renewable = tái tạo (mặt trời, gió…).'),
    Q('"Sea level rise" nghĩa là?', ['Mực nước biển dâng','Mực nước biển giảm','Sóng lớn','Bão biển'], 0, 'Sea level rise = nước biển dâng.'),
    Q('"Deforestation" tác động đến?', ['Tăng CO₂, mất đa dạng sinh học','Giảm CO₂','Tăng cây xanh','Không ảnh hưởng'], 0, 'Phá rừng → tăng CO₂.'),
  ]),

  M(12, 'Unit 6 — Global Warming · Perfect gerund & Perfect participle', [
    Q('"Having finished" là dạng gì?', ['Perfect participle (chủ động hoàn thành)','Gerund đơn','Past participle','Present participle'], 0, 'Having + V3 = perfect participle.'),
    Q('"___ his homework, he went out."', ['Having finished','Finishing','Finished','To finish'], 0, 'Sau khi hoàn thành → having + V3.'),
    Q('"He admitted ___ the money." (đã lấy)', ['having stolen','stealing','to steal','steal'], 0, 'Perfect gerund: having + V3.'),
    Q('"___ many times, he passed the exam." (đã thi nhiều lần)', ['Having tried','Trying','To try','Tried'], 0, 'Having + V3.'),
    Q('Perfect gerund dùng khi hành động V-ing xảy ra?', ['Trước hành động chính','Cùng lúc','Sau hành động chính','Tương lai'], 0, 'Diễn tả việc đã xong trước.'),
    Q('"She regretted ___ him." (đã không tin)', ['not having believed','not believing','not to believe','not believe'], 0, 'Phủ định + perfect gerund.'),
  ]),

  M(13, 'Unit 7 — Further Education · Vocabulary', [
    Q('"Further education" là?', ['Giáo dục tiếp theo (sau THPT)','Giáo dục tiểu học','Giáo dục mầm non','Giáo dục đặc biệt'], 0, 'Further education = học lên cao.'),
    Q('"Vocational training" nghĩa là?', ['Đào tạo nghề','Đào tạo phổ thông','Đào tạo quân sự','Đào tạo từ xa'], 0, 'Vocational = hướng nghiệp/nghề.'),
    Q('"Undergraduate" là?', ['Sinh viên đại học chưa tốt nghiệp','Học sinh THPT','Thạc sĩ','Tiến sĩ'], 0, 'Undergraduate = sinh viên đại học.'),
    Q('"Postgraduate" mang nghĩa?', ['Sau đại học (thạc sĩ, tiến sĩ)','Trước đại học','Trung học','Tiểu học'], 0, 'Postgraduate = học sau ĐH.'),
    Q('"Scholarship" là?', ['Học bổng','Học phí','Đồng phục','Giáo trình'], 0, 'Scholarship = học bổng.'),
    Q('"To enrol in" nghĩa là?', ['Đăng ký vào (khoá học)','Bỏ học','Tốt nghiệp','Vắng mặt'], 0, 'Enrol in = ghi danh.'),
  ]),

  M(14, 'Unit 7 — Further Education · Mixed conditional', [
    Q('Mixed conditional (Loại 3 → 2) dùng để?', ['Quá khứ trái ngược + hiện tại trái ngược','Tương lai có thể','Hiện tại thật','Quá khứ thật'], 0, 'Trộn loại 3 + loại 2.'),
    Q('"If I ___ harder last year, I ___ a better student now."', ['had studied / would be','studied / will be','study / would be','had studied / will be'], 0, 'Had + V3 / would + V (mixed).'),
    Q('"If she ___ the bus, she ___ here now."', ['had taken / would be','took / would be','takes / will be','take / would'], 0, 'Mixed.'),
    Q('"If I ___ rich, I ___ that house last week."', ['were / would have bought','am / will buy','was / bought','were / will buy'], 0, 'Loại 2 → loại 3 mixed (hiện tại trái ngược → quá khứ).'),
    Q('Conditional loại 2 cấu trúc?', ['If + S + V-ed, S + would + V','If + S + V, S + will + V','If + S + had V3, S + would have V3','If + S + V, S + V'], 0, 'Loại 2.'),
    Q('"If I were you, I ___ accept the offer."', ['would','will','would have','had'], 0, 'Loại 2.'),
  ]),

  M(15, 'Unit 8 — Our World Heritage Sites · Vocabulary', [
    Q('"World Heritage Site" là?', ['Di sản thế giới','Khu công nghiệp','Trung tâm thương mại','Khu dân cư'], 0, 'Heritage = di sản.'),
    Q('"UNESCO" là tổ chức của?', ['Liên hợp quốc về giáo dục, khoa học, văn hoá','Y tế thế giới','Lao động quốc tế','Thương mại'], 0, 'UNESCO.'),
    Q('"Ha Long Bay" được công nhận là?', ['Di sản thiên nhiên thế giới','Di sản phi vật thể','Khu vui chơi','Khu công nghiệp'], 0, 'Vịnh Hạ Long.'),
    Q('"To preserve" nghĩa là?', ['Bảo tồn','Phá huỷ','Thay đổi','Bán đi'], 0, 'Preserve = giữ gìn.'),
    Q('"Cultural heritage" là?', ['Di sản văn hoá','Di sản tự nhiên','Di sản kinh tế','Di sản chính trị'], 0, 'Cultural = văn hoá.'),
    Q('"Hoi An Ancient Town" thuộc loại di sản?', ['Văn hoá','Thiên nhiên','Hỗn hợp','Phi vật thể'], 0, 'Phố cổ Hội An = di sản văn hoá.'),
  ]),

  M(16, 'Unit 8 — Our World Heritage Sites · Articles (a/an/the)', [
    Q('"___ Mekong River is in Vietnam."', ['The','A','An','Ø'], 0, 'Tên sông + the.'),
    Q('"She is ___ engineer."', ['an','a','the','Ø'], 0, 'engineer bắt đầu nguyên âm.'),
    Q('"I want ___ apple."', ['an','a','the','Ø'], 0, 'apple → an.'),
    Q('"___ sun rises in the east."', ['The','A','An','Ø'], 0, 'Sự vật duy nhất → the.'),
    Q('"He plays ___ guitar."', ['the','a','an','Ø'], 0, 'Play + the + nhạc cụ.'),
    Q('"___ Halong Bay is beautiful."', ['Ø (no article)','The','A','An'], 0, 'Tên vịnh, hồ ngoại lệ — Halong Bay không "the" (theo cách viết hiện đại).'),
  ]),

  M(17, 'Review HK1 — Vocabulary', [
    Q('"Generation gap" liên quan đến chủ đề?', ['Gia đình & thế hệ','Môi trường','Du lịch','Giáo dục'], 0, 'Unit 1.'),
    Q('"Greenhouse gas" thuộc chủ đề?', ['Môi trường','Sức khoẻ','Văn hoá','Thể thao'], 0, 'Unit 6.'),
    Q('"Undergraduate" thuộc chủ đề?', ['Giáo dục','Môi trường','Thể thao','Du lịch'], 0, 'Unit 7.'),
    Q('"ASEAN" thuộc chủ đề?', ['Khu vực Đông Nam Á','Châu Âu','Châu Phi','Bắc Mỹ'], 0, 'Unit 5.'),
    Q('"Heritage" thuộc chủ đề?', ['Di sản','Công nghệ','Y học','Thể thao'], 0, 'Unit 8.'),
    Q('"Self-reliant" thuộc chủ đề?', ['Tự lập','Phụ thuộc','Du lịch','Sức khoẻ'], 0, 'Unit 3.'),
  ]),

  M(18, 'Review HK1 — Grammar', [
    Q('Cleft sentence chuẩn: "It was ___ ___ I met yesterday."', ['Mary that','Mary which','Mary where','Mary who/that'], 3, 'Người → who hoặc that.'),
    Q('Reduced relative chủ động dùng?', ['V-ing','V3','to V','V'], 0, 'V-ing.'),
    Q('Mixed conditional kết hợp loại?', ['3 và 2','2 và 1','1 và 0','3 và 1'], 0, 'Loại 3 + 2 phổ biến.'),
    Q('Perfect gerund: "He admitted ___ the money."', ['having stolen','stealing','to steal','steal'], 0, 'Having + V3.'),
    Q('Modal "must not" diễn tả?', ['Cấm','Không cần','Có thể','Khả năng'], 0, 'Must not = cấm.'),
    Q('Gerund sau "enjoy" là?', ['V-ing','to V','V','V3'], 0, 'enjoy + V-ing.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Cities of the Future · Vocabulary', [
    Q('"Smart city" là?', ['Thành phố thông minh','Thành phố nhỏ','Thành phố cổ','Thành phố nông thôn'], 0, 'Smart city = ứng dụng IoT, AI.'),
    Q('"Skyscraper" nghĩa là?', ['Toà nhà chọc trời','Nhà cấp bốn','Biệt thự','Chung cư cũ'], 0, 'Skyscraper = nhà cao tầng.'),
    Q('"Sustainable" mang nghĩa?', ['Bền vững','Tạm thời','Lãng phí','Ô nhiễm'], 0, 'Sustainable.'),
    Q('"Public transport" là?', ['Giao thông công cộng','Xe riêng','Máy bay','Tàu thuỷ'], 0, 'Public transport.'),
    Q('"Eco-friendly" nghĩa là?', ['Thân thiện môi trường','Đắt tiền','Hiện đại','Cũ kỹ'], 0, 'Eco-friendly = xanh.'),
    Q('"Infrastructure" là?', ['Hạ tầng','Bộ máy hành chính','Dân số','Văn hoá'], 0, 'Infrastructure = cơ sở hạ tầng.'),
  ]),

  M(20, 'Unit 9 — Cities of the Future · Future continuous & Future perfect', [
    Q('"This time next year, I ___ in Australia." (đang làm)', ['will be studying','will study','study','am studying'], 0, 'Future continuous: will be V-ing.'),
    Q('"By 2030, robots ___ many human jobs."', ['will have replaced','will replace','replace','replaced'], 0, 'Future perfect: will have + V3.'),
    Q('Future perfect cấu trúc?', ['will have + V3','will be + V-ing','will + V','would + V'], 0, 'Will have + V3.'),
    Q('"At 8pm tomorrow, we ___ dinner."', ['will be having','will have','have','will had'], 0, 'Future continuous.'),
    Q('"By the time you arrive, I ___ the report."', ['will have finished','will finish','finish','finished'], 0, 'Hoàn tất trước thời điểm tương lai.'),
    Q('"He ___ in this city for 10 years by next month."', ['will have lived','will live','lives','lived'], 0, 'Future perfect + for + time.'),
  ]),

  M(21, 'Unit 10 — Healthy Lifestyle · Vocabulary', [
    Q('"Balanced diet" là?', ['Chế độ ăn cân bằng','Chế độ ăn kiêng','Ăn không hạn chế','Bỏ bữa'], 0, 'Balanced diet.'),
    Q('"Obesity" nghĩa là?', ['Béo phì','Gầy còm','Khoẻ mạnh','Trẻ trung'], 0, 'Obesity = béo phì.'),
    Q('"To work out" là?', ['Tập luyện thể thao','Làm việc','Học bài','Đi chơi'], 0, 'Work out = tập gym/tập luyện.'),
    Q('"Mental health" nghĩa là?', ['Sức khoẻ tinh thần','Sức khoẻ thể chất','Bệnh truyền nhiễm','Dinh dưỡng'], 0, 'Mental health.'),
    Q('"Junk food" là?', ['Đồ ăn nhanh, ít dinh dưỡng','Đồ ăn lành mạnh','Đồ ăn chay','Trái cây'], 0, 'Junk food = đồ ăn nhanh kém chất.'),
    Q('"To stay fit" nghĩa là?', ['Giữ dáng, khoẻ mạnh','Tăng cân','Lười vận động','Bệnh tật'], 0, 'Stay fit.'),
  ]),

  M(22, 'Unit 10 — Healthy Lifestyle · Modal perfect (must/might/could have V3)', [
    Q('"Must have + V3" diễn tả?', ['Chắc chắn đã xảy ra','Có thể đã xảy ra','Không thể đã xảy ra','Đang xảy ra'], 0, 'Must have V3 = suy luận chắc chắn.'),
    Q('"He looks tired. He ___ all night." (chắc đã làm)', ['must have worked','might work','could work','must work'], 0, 'Must have + V3.'),
    Q('"She ___ the train; she\'s not here yet." (có lẽ đã lỡ)', ['might have missed','must miss','can miss','will miss'], 0, 'Might have + V3 = có thể.'),
    Q('"You ___ me; I never said that." (không thể đã hiểu sai)', ['must have misunderstood','can\'t have understood','should understand','will understand'], 1, 'Can\'t have + V3 = không thể đã.'),
    Q('"I ___ the keys at home; let me check." (có lẽ đã để)', ['could have left','must leave','should leave','will leave'], 0, 'Could have + V3.'),
    Q('"Should have + V3" mang nghĩa?', ['Đáng lẽ phải làm (mà không làm)','Đã làm rồi','Sẽ làm','Đang làm'], 0, 'Should have V3 = tiếc nuối.'),
  ]),

  M(23, 'Skills — Listening & Reading practice', [
    Q('"Skimming" trong reading là?', ['Đọc lướt ý chính','Đọc kỹ chi tiết','Tra từ điển','Dịch từng câu'], 0, 'Skimming = lướt.'),
    Q('"Scanning" là?', ['Tìm thông tin cụ thể','Đọc lướt','Đọc to','Dịch'], 0, 'Scanning = tìm chi tiết.'),
    Q('Khi nghe IELTS, "gist" là?', ['Ý chính tổng quát','Chi tiết nhỏ','Ngữ pháp','Phát âm'], 0, 'Gist = ý chính.'),
    Q('"Inference" trong reading là?', ['Suy luận ngầm','Đọc to','Học vẹt','Dịch nghĩa'], 0, 'Inference.'),
    Q('"Note-taking" trong listening là?', ['Ghi chú từ khoá khi nghe','Viết toàn bộ','Không ghi','Nghe lại sau'], 0, 'Note-taking.'),
    Q('"Predicting" trước khi nghe giúp?', ['Đoán nội dung sắp nghe','Bỏ qua bài','Học từ mới','Viết essay'], 0, 'Predicting = dự đoán.'),
  ]),

  M(24, 'Inversion (Đảo ngữ) — Hardly, Never, Not until', [
    Q('"Hardly ___ I arrived when the phone rang."', ['had','have','did','was'], 0, 'Hardly had + S + V3 when…'),
    Q('"Never ___ such a beautiful place."', ['have I seen','I have seen','I saw','have seen'], 0, 'Never + đảo ngữ.'),
    Q('"Not until he came ___ the party start."', ['did','do','was','had'], 0, 'Not until + clause + did + S + V.'),
    Q('"No sooner ___ he arrived than it started raining."', ['had','have','did','was'], 0, 'No sooner had + S + V3 than…'),
    Q('"Seldom ___ I go to the cinema."', ['do','am','have','did'], 0, 'Seldom/Rarely + do/does/did + S + V.'),
    Q('"Only when she left ___ I realize my mistake."', ['did','do','was','had'], 0, 'Only when + clause + did + S + V.'),
  ]),

  M(25, 'Phrasal verbs — Daily life & Education', [
    Q('"To put off" nghĩa là?', ['Hoãn lại','Hoàn thành','Bắt đầu','Tăng tốc'], 0, 'Put off = hoãn.'),
    Q('"To look up (a word)" là?', ['Tra (từ điển)','Nhìn lên','Quên','Phớt lờ'], 0, 'Look up.'),
    Q('"To bring up" có thể mang nghĩa?', ['Nuôi dạy / Nêu vấn đề','Mang xuống','Bỏ rơi','Đuổi đi'], 0, 'Bring up = nuôi dạy.'),
    Q('"To give up" nghĩa là?', ['Từ bỏ','Tặng quà','Đứng dậy','Nhảy lên'], 0, 'Give up.'),
    Q('"To take after" là?', ['Giống (về tính cách/ngoại hình)','Theo sau','Lấy đi','Trông coi'], 0, 'Take after = giống.'),
    Q('"To find out" nghĩa là?', ['Tìm ra, phát hiện','Tìm ngoài','Mất','Bỏ qua'], 0, 'Find out.'),
  ]),

  M(26, 'Pronunciation — Stress patterns & Intonation', [
    Q('Trọng âm từ "photograph" rơi vào?', ['Âm tiết 1','Âm tiết 2','Âm tiết 3','Không có'], 0, 'PHO-to-graph.'),
    Q('Trọng âm "photography" rơi vào?', ['Âm tiết 2','Âm tiết 1','Âm tiết 3','Âm tiết 4'], 0, 'pho-TO-gra-phy.'),
    Q('Câu trần thuật thường có intonation?', ['Xuống cuối câu','Lên cuối câu','Không đổi','Lên xuống thất thường'], 0, 'Falling intonation.'),
    Q('Câu hỏi Yes/No có intonation?', ['Lên cuối câu','Xuống cuối câu','Không đổi','Lên giữa câu'], 0, 'Rising intonation.'),
    Q('"Record" (n) trọng âm rơi vào?', ['Âm tiết 1','Âm tiết 2','Cả hai','Không có'], 0, 'REcord (n).'),
    Q('"Record" (v) trọng âm rơi vào?', ['Âm tiết 2','Âm tiết 1','Cả hai','Không có'], 0, 'reCORD (v).'),
  ]),

  M(27, 'Writing — Argumentative essay', [
    Q('"Argumentative essay" là?', ['Bài luận tranh luận, đưa lý lẽ','Bài kể chuyện','Bài tả người','Bài mô tả'], 0, 'Argumentative = nghị luận.'),
    Q('Thesis statement nằm ở?', ['Cuối introduction','Cuối conclusion','Đầu body','Giữa body'], 0, 'Thesis = cuối phần mở.'),
    Q('Một "topic sentence" tốt cần?', ['Tóm ý chính của body paragraph','Đưa ví dụ','Trích dẫn','Kết luận'], 0, 'Topic sentence dẫn dắt đoạn.'),
    Q('Linking word "however" dùng để?', ['Chuyển ý đối lập','Liệt kê','So sánh','Kết luận'], 0, 'However = tuy nhiên.'),
    Q('"Counter-argument" là?', ['Lập luận đối lập','Lập luận chính','Ví dụ','Trích dẫn'], 0, 'Counter-argument = phản biện.'),
    Q('Số đoạn body tối thiểu của argumentative essay 5 đoạn?', ['3','1','2','5'], 0, '5-paragraph: 1 intro + 3 body + 1 conclusion.'),
  ]),

  M(28, 'Reading — Long passage skills', [
    Q('Khi đọc đoạn văn dài, bước đầu tiên nên?', ['Skim ý chính','Đọc từng từ','Tra hết từ mới','Bỏ qua tiêu đề'], 0, 'Skim trước.'),
    Q('Câu hỏi "main idea" cần?', ['Ý chính toàn đoạn','Chi tiết nhỏ','Từ vựng','Ngữ pháp'], 0, 'Main idea.'),
    Q('"Vocabulary in context" là?', ['Đoán nghĩa từ qua ngữ cảnh','Tra từ điển','Học thuộc','Bỏ qua'], 0, 'Context clue.'),
    Q('Câu hỏi "inference" yêu cầu?', ['Suy luận ý ngầm','Tìm chi tiết hiện rõ','Đếm từ','Dịch'], 0, 'Inference = suy luận.'),
    Q('"Reference question" là?', ['Tìm đại từ chỉ ai/cái gì','Tìm động từ','Tìm danh từ','Tìm trạng từ'], 0, 'Reference: đại từ "it/they/this" chỉ về cái gì.'),
    Q('Mẹo loại trừ trong reading: đáp án sai thường?', ['Quá tuyệt đối (all, never)','Có ví dụ rõ','Trích nguyên văn','Sát ý chính'], 0, 'Đáp án tuyệt đối thường bẫy.'),
  ]),

  M(29, 'Speaking — Discussion & Debate', [
    Q('"In my opinion" dùng để?', ['Đưa quan điểm cá nhân','Hỏi','Phản đối gay gắt','Đồng ý hoàn toàn'], 0, 'Cụm bày tỏ ý kiến.'),
    Q('"I agree with you to some extent" nghĩa?', ['Đồng ý ở mức độ nào đó','Đồng ý hoàn toàn','Phản đối','Im lặng'], 0, 'To some extent = phần nào.'),
    Q('"On the other hand" dùng?', ['Đưa quan điểm trái chiều','Liệt kê','So sánh','Tóm tắt'], 0, 'Mặt khác.'),
    Q('"What\'s your view on…?" là cách?', ['Hỏi ý kiến','Đưa ý kiến','Phản đối','Đồng ý'], 0, 'Hỏi quan điểm.'),
    Q('"Could you elaborate?" nghĩa?', ['Bạn có thể giải thích chi tiết?','Bạn có thể im lặng?','Bạn có thể lặp lại?','Bạn có thể chuyển chủ đề?'], 0, 'Elaborate = nói rõ hơn.'),
    Q('Khi không đồng ý lịch sự, dùng?', ['I see your point, but…','You\'re wrong!','No way!','I don\'t care.'], 0, 'Phép lịch sự.'),
  ]),

  M(30, 'Reading — Cohesion & Coherence', [
    Q('"Cohesion" trong văn bản là?', ['Liên kết câu/đoạn (về ngôn ngữ)','Ý chính','Từ vựng','Ngữ pháp'], 0, 'Cohesion = liên kết hình thức.'),
    Q('"Coherence" là?', ['Mạch ý logic','Liên kết câu','Số từ','Số đoạn'], 0, 'Coherence = mạch lạc nội dung.'),
    Q('Connector "therefore" diễn đạt?', ['Kết quả','Đối lập','Liệt kê','So sánh'], 0, 'Therefore = vì vậy.'),
    Q('"Furthermore" dùng để?', ['Bổ sung ý','Đối lập','Kết luận','Mở đầu'], 0, 'Bổ sung.'),
    Q('Đại từ "this/these" thường chỉ về?', ['Ý/đối tượng vừa nhắc trước','Tương lai','Người nói','Người đọc'], 0, 'Reference.'),
    Q('"In conclusion" mở đầu cho?', ['Phần kết luận','Phần thân','Phần mở bài','Tiêu đề'], 0, 'Kết luận.'),
  ]),

  M(31, 'Writing — Letter & Email', [
    Q('Email formal mở đầu bằng?', ['Dear Sir/Madam,','Hi!','Hey,','Yo,'], 0, 'Formal greeting.'),
    Q('Kết email trang trọng?', ['Yours faithfully / Yours sincerely','Bye','See ya','XOXO'], 0, 'Sign-off formal.'),
    Q('"Yours sincerely" dùng khi?', ['Biết tên người nhận','Không biết tên','Bạn thân','Người lạ'], 0, 'Yours sincerely + name.'),
    Q('"Yours faithfully" dùng khi?', ['Không biết tên người nhận','Biết tên','Bạn bè','Gia đình'], 0, 'Sau "Dear Sir/Madam".'),
    Q('Mục đích email "complaint" là?', ['Phàn nàn về dịch vụ/sản phẩm','Giới thiệu','Xin việc','Hẹn gặp'], 0, 'Complaint letter.'),
    Q('Cụm xin lỗi trang trọng?', ['I sincerely apologise for…','Sorry!','Oops!','My bad'], 0, 'Formal apology.'),
  ]),

  M(32, 'Vocabulary expansion — Word formation', [
    Q('"Decide" → danh từ?', ['Decision','Deciding','Decidence','Decisional'], 0, 'Decide → decision.'),
    Q('"Happy" → trạng từ?', ['Happily','Happyly','Hapily','Happiness'], 0, 'Happy → happily.'),
    Q('"Care" → tính từ phủ định?', ['Careless','Careful','Careness','Caring'], 0, 'Careless = vô tâm.'),
    Q('"Friend" → tính từ?', ['Friendly','Friending','Friendship','Friended'], 0, 'Friend → friendly.'),
    Q('"Inform" → danh từ?', ['Information','Informing','Informance','Informy'], 0, 'Information.'),
    Q('"Use" → tính từ phủ định?', ['Useless','Useful','Using','Used'], 0, 'Useless = vô dụng.'),
  ]),

  M(33, 'Review HK2 — Vocabulary mixed', [
    Q('"Smart city" liên quan unit?', ['Cities of the Future','Healthy Lifestyle','Heritage','ASEAN'], 0, 'Unit 9.'),
    Q('"Obesity" thuộc unit?', ['Healthy Lifestyle','Smart city','Heritage','ASEAN'], 0, 'Unit 10.'),
    Q('"Sustainable" có thể dùng cho?', ['Cả thành phố và môi trường','Chỉ giáo dục','Chỉ sức khoẻ','Chỉ kinh tế'], 0, 'Đa nghĩa cảnh.'),
    Q('"Self-confidence" thuộc chủ đề?', ['Becoming Independent','Healthy Lifestyle','Heritage','ASEAN'], 0, 'Unit 3.'),
    Q('"Generation gap" thuộc unit?', ['Generation Gap','Relationships','Heritage','Smart city'], 0, 'Unit 1.'),
    Q('"Volunteer" liên quan?', ['Caring for those in need','Smart city','Healthy lifestyle','ASEAN'], 0, 'Unit 4.'),
  ]),

  M(34, 'Review HK2 — Grammar mixed', [
    Q('Inversion "Hardly had + S + V3 when…" diễn tả?', ['Hai hành động liên tiếp','Điều kiện','So sánh','Câu hỏi'], 0, 'Hardly… when…'),
    Q('Future perfect cấu trúc?', ['will have + V3','will be V-ing','will + V','would have V3'], 0, 'Will have + V3.'),
    Q('Modal perfect "must have V3" diễn tả?', ['Suy đoán chắc chắn về quá khứ','Tương lai','Hiện tại','Khả năng'], 0, 'Must have V3.'),
    Q('Reduced relative bị động?', ['V3','V-ing','to V','V'], 0, 'V3 (past participle).'),
    Q('Cleft sentence nhấn mạnh người?', ['It is/was + person + who/that','It is/was + thing + which','It is + place + where','It is + time + when'], 0, 'It is/was … who/that.'),
    Q('Mixed conditional phổ biến nhất?', ['Loại 3 → 2','Loại 2 → 1','Loại 1 → 0','Loại 0 → 3'], 0, 'Loại 3 → 2.'),
  ]),

  M(35, 'Final Exam Preparation', [
    Q('Tip nhớ vocab dài hạn?', ['Học theo chủ đề + dùng đặt câu','Học thuộc lòng riêng lẻ','Chỉ dịch','Bỏ qua từ khó'], 0, 'Topic + context.'),
    Q('Trong reading IELTS, "True/False/Not Given" yêu cầu?', ['So sánh ý với bài đọc','Đoán nghĩa từ','Dịch','Đếm từ'], 0, 'TFNG kỹ năng.'),
    Q('Khi viết essay, tránh?', ['Lặp ý quá nhiều','Đa dạng cấu trúc','Linking words','Dẫn chứng'], 0, 'Tránh lặp.'),
    Q('Speaking phần 2 IELTS dài?', ['1–2 phút','30 giây','5 phút','10 phút'], 0, 'Cue card 1-2\'.'),
    Q('Phát âm "ed" cuối từ có?', ['3 cách: /t/ /d/ /ɪd/','1 cách','2 cách','4 cách'], 0, 'walked /t/, played /d/, wanted /ɪd/.'),
    Q('Để cải thiện listening?', ['Nghe đa dạng nguồn + ghi chú','Chỉ học từ','Bỏ phụ đề luôn','Không cần luyện'], 0, 'Practice + variety.'),
  ]),
];

export const H11TA_SCENARIOS = indexBy(H11TA_WEEKS);
