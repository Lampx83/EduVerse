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
    Q('"Generation gap" nghĩa là?', ['Khoảng cách thu nhập', 'Khoảng cách thế hệ', 'Khoảng cách thành thị-nông thôn', 'Khoảng cách giới tính'], 1, 'Generation gap = khoảng cách giữa các thế hệ.'),
    Q('"Nuclear family" là?', ['Gia đình hạt nhân (cha mẹ + con)', 'Đại gia đình', 'Gia đình ly tán', 'Gia đình đơn thân'], 0, 'Nuclear family = gia đình nhỏ.'),
    Q('"Conservative" mang nghĩa?', ['Bảo thủ', 'Hiện đại', 'Năng động', 'Phóng khoáng'], 0, 'Conservative = bảo thủ, truyền thống.'),
    Q('"Open-minded" nghĩa là?', ['Bí mật', 'Cố chấp', 'Lạnh lùng', 'Cởi mở, dễ chấp nhận ý kiến mới'], 3, 'Open-minded = tư duy mở.'),
    Q('"To respect elders" nghĩa là?', ['Kính trọng người lớn tuổi', 'Tranh cãi với người lớn', 'Phớt lờ ý kiến người lớn', 'Bắt chước'], 0, 'Respect elders = kính trên.'),
    Q('"Conflict" nghĩa là?', ['Mâu thuẫn, xung đột', 'Hoà hợp', 'Đoàn kết', 'Hợp tác'], 0, 'Conflict = xung đột.'),
  ]),

  M(2, 'Unit 1 — Generation Gap · Modal verbs (must, have to, should)', [
    Q('"You ___ wear a uniform at school." (bắt buộc theo nội quy)', ['must', 'may (có lẽ được phép)', 'might (có thể, ít chắc)', 'can (có khả năng)'], 0, 'Must = bắt buộc.'),
    Q('"Children ___ obey their parents." (nên)', ['must not', 'will (chỉ tương lai, không phải lời khuyên)', 'should', 'need not'], 2, 'Should = lời khuyên.'),
    Q('"I ___ get up early tomorrow because of an exam."', ['have to', 'can (có khả năng)', 'might (có thể, ít chắc)', 'may (có lẽ)'], 0, 'Have to = bắt buộc khách quan.'),
    Q('"You ___ smoke here." (cấm)', ['should', 'can (được phép, không phải cấm)', 'must not', 'need not'], 2, 'Must not = cấm.'),
    Q('"He ___ work overtime; the project is delayed."', ['might (có thể, không bắt buộc)', 'may (có lẽ, không bắt buộc)', 'can (có khả năng, không bắt buộc)', 'has to'], 3, 'Has to + V.'),
    Q('"You ___ worry. Everything is fine." (không cần)', ['should', 'must not', 'have to', 'needn\'t'], 3, 'Needn\'t = không cần.'),
  ]),

  M(3, 'Unit 2 — Relationships · Vocabulary', [
    Q('"Romantic relationship" là?', ['Quan hệ công việc', 'Quan hệ bạn bè', 'Quan hệ họ hàng', 'Quan hệ tình cảm yêu đương'], 3, 'Romantic = lãng mạn, yêu đương.'),
    Q('"To get along (with)" nghĩa là?', ['Tránh mặt, xa lánh', 'Cãi nhau', 'Chia tay', 'Hoà thuận với'], 3, 'Get along = hoà hợp.'),
    Q('"Reliable" mang nghĩa?', ['Vô trách nhiệm', 'Đáng tin cậy', 'Khó tin', 'Lười biếng'], 1, 'Reliable = đáng tin.'),
    Q('"Sympathetic" nghĩa là?', ['Đồng cảm', 'Dửng dưng, vô cảm', 'Tức giận', 'Ganh ghét'], 0, 'Sympathetic = thông cảm.'),
    Q('"To break up" nghĩa là?', ['Chia tay (trong tình yêu)', 'Hoà giải', 'Cưới nhau', 'Gặp mặt'], 0, 'Break up = chia tay.'),
    Q('"Long-distance relationship" là?', ['Quan hệ công sở', 'Quan hệ ngắn ngủi', 'Quan hệ gia đình', 'Quan hệ yêu xa'], 3, 'Long-distance = xa cách địa lý.'),
  ]),

  M(4, 'Unit 2 — Relationships · Linking verbs & Cleft sentences', [
    Q('Cleft sentence "It is/was … that …" dùng để?', ['So sánh', 'Đặt câu hỏi', 'Đảo ngữ', 'Nhấn mạnh một thành phần câu'], 3, 'Cleft = câu chẻ nhấn mạnh.'),
    Q('Chọn câu chẻ đúng: "I met Mary at the party."', ['I was Mary that met.', 'It was at Mary that I met.', 'It is Mary who met at the party.', 'It was Mary that I met at the party.'], 3, 'Nhấn mạnh "Mary".'),
    Q('"It was in 2020 ___ they got married."', ['where (chỉ nơi chốn, sai sau time)', 'who (chỉ người, sai sau time)', 'which (chỉ vật, sai sau cleft time)', 'that'], 3, 'Sau cleft + thời gian dùng "that".'),
    Q('"It is John ___ helped me yesterday."', ['which (chỉ vật, sai vì John là người)', 'where (chỉ nơi chốn, sai)', 'who', 'what (không dùng trong cleft chỉ người)'], 2, 'Người → "who" (hoặc "that").'),
    Q('Linking verb (động từ nối) gồm?', ['be, seem, become, look', 'run, jump, eat', 'study, work', 'can, must'], 0, 'Linking verb nối chủ ngữ với bổ ngữ.'),
    Q('"She seems ___ today."', ['happiness', 'happy', 'to happy', 'happily'], 1, 'Sau linking verb dùng tính từ.'),
  ]),

  M(5, 'Unit 3 — Becoming Independent · Vocabulary', [
    Q('"Independent" nghĩa là?', ['Phụ thuộc', 'Bị động', 'Trẻ con', 'Tự lập'], 3, 'Independent = độc lập, tự lập.'),
    Q('"Self-confidence" là?', ['Sự nhút nhát', 'Sự ghen tị', 'Sự lo lắng', 'Sự tự tin'], 3, 'Self-confidence = tự tin.'),
    Q('"Time management" nghĩa là?', ['Quản lý nhân sự', 'Quản lý thời gian', 'Quản lý tiền', 'Quản lý công việc'], 1, 'Time management.'),
    Q('"To make decisions" là?', ['Đưa ra quyết định', 'Phụ thuộc người khác', 'Nghe theo', 'Trì hoãn'], 0, 'Make decisions = ra quyết định.'),
    Q('"Self-reliant" mang nghĩa?', ['Dựa vào người khác', 'Thiếu kỹ năng tự lập', 'Tự lực, dựa vào bản thân', 'Yếu đuối'], 2, 'Self-reliant = tự dựa.'),
    Q('"Life skill" là?', ['Kỹ năng IT', 'Kỹ năng tay nghề', 'Kỹ năng sống', 'Kỹ năng nghề'], 2, 'Life skill = kỹ năng sống.'),
  ]),

  M(6, 'Unit 3 — Becoming Independent · To-infinitive vs Gerund', [
    Q('"I enjoy ___ books." Chọn?', ['reading', 'to read', 'read (nguyên thể, sai sau enjoy)', 'reads (chia ngôi 3, sai sau enjoy)'], 0, 'enjoy + V-ing.'),
    Q('"She decided ___ abroad."', ['studying', 'study (nguyên thể, thiếu to)', 'to study', 'studied'], 2, 'decide + to V.'),
    Q('"He avoids ___ junk food."', ['eat (nguyên thể, sai sau avoid)', 'to eat', 'eating', 'eats (chia ngôi 3, sai sau avoid)'], 2, 'avoid + V-ing.'),
    Q('"I want ___ a doctor."', ['become', 'to become', 'became', 'becoming'], 1, 'want + to V.'),
    Q('"Stop ___! It\'s dangerous." (dừng làm việc đang làm)', ['smoking', 'smoked', 'smoke (nguyên thể, sai sau stop)', 'to smoke'], 0, 'stop + V-ing = dừng đang làm.'),
    Q('"Remember ___ the door before leaving."', ['locked', 'to lock', 'lock (nguyên thể, thiếu to)', 'locking'], 1, 'remember + to V = nhớ làm.'),
  ]),

  M(7, 'Unit 4 — Caring for Those in Need · Vocabulary', [
    Q('"Disadvantaged people" là?', ['Người trung lưu', 'Người có hoàn cảnh khó khăn', 'Người giàu', 'Người nổi tiếng'], 1, 'Disadvantaged = thiệt thòi.'),
    Q('"Volunteer" nghĩa là?', ['Quân nhân, binh sĩ', 'Nhân viên', 'Tình nguyện viên', 'Học sinh'], 2, 'Volunteer = tình nguyện.'),
    Q('"Charity" là?', ['Bệnh viện', 'Trường học', 'Tổ chức từ thiện', 'Công ty'], 2, 'Charity = từ thiện.'),
    Q('"To donate" nghĩa là?', ['Vay tiền', 'Quyên góp', 'Mua sắm', 'Bán hàng'], 1, 'Donate = ủng hộ, hiến tặng.'),
    Q('"Visually impaired" là?', ['Khiếm ngôn (mất khả năng nói)', 'Khiếm thị', 'Khiếm thính', 'Khuyết tật vận động'], 1, 'Visually impaired = mất/giảm thị lực.'),
    Q('"Empathy" nghĩa là?', ['Sự xa lánh', 'Sự đồng cảm', 'Sự thờ ơ', 'Sự ghen ghét'], 1, 'Empathy = đồng cảm.'),
  ]),

  M(8, 'Unit 4 — Caring for Those in Need · Reduced relative clauses', [
    Q('"The man ___ in the corner is my uncle."', ['to sit', 'sitting', 'sat (V2/V3, sai vì cần rút gọn chủ động)', 'sits (chia ngôi 3, sai vì không phải mệnh đề đầy đủ)'], 1, 'Rút gọn chủ động: V-ing.'),
    Q('"The book ___ on the table is mine."', ['lying', 'lie (nguyên thể, sai vì cần rút gọn)', 'lays (chia sai động từ, lay là ngoại động)', 'lain (V3 nội động, sai vì cần chủ động đang xảy ra)'], 0, 'Lying = đang nằm (chủ động).'),
    Q('"The car ___ by my father is new."', ['buying', 'to buy', 'buys (chia ngôi 3, sai vì cần rút gọn bị động)', 'bought'], 3, 'Rút gọn bị động: V3.'),
    Q('"Children ___ in poor areas need help."', ['lived (V2/V3, sai vì cần rút gọn chủ động)', 'live (nguyên thể, sai vì cần V-ing)', 'to live', 'living'], 3, 'Children who live → living.'),
    Q('"The letter ___ yesterday is important."', ['wrote (V2 chủ động, sai vì cần bị động)', 'written', 'writes', 'writing'], 1, 'The letter which was written → written.'),
    Q('Chọn dạng rút gọn của "The girl who is dancing on stage":', ['The girl to dance on stage', 'The girl dancing on stage', 'The girl dance on stage', 'The girl danced on stage'], 1, 'V-ing thay who is V-ing.'),
  ]),

  M(9, 'Unit 5 — Being Part of ASEAN · Vocabulary', [
    Q('"ASEAN" là viết tắt của?', ['Association of Southeast Asian Nations', 'Asian Economic Network', 'American South-East Alliance', 'Association of Eastern Asia'], 0, 'ASEAN = Hiệp hội các quốc gia Đông Nam Á.'),
    Q('"Cooperation" nghĩa là?', ['Sự đối lập', 'Sự hợp tác', 'Sự chia rẽ', 'Sự cạnh tranh'], 1, 'Cooperation = hợp tác.'),
    Q('"Integration" là?', ['Sự cô lập', 'Sự rút lui', 'Sự hội nhập', 'Sự đóng cửa'], 2, 'Integration = hội nhập.'),
    Q('"Diversity" mang nghĩa?', ['Sự nghèo nàn', 'Sự yếu kém', 'Sự đồng nhất', 'Sự đa dạng'], 3, 'Diversity = đa dạng.'),
    Q('ASEAN gồm bao nhiêu nước thành viên (tính đến 2024)?', ['5', '7', '10', '12'], 2, 'ASEAN có 10 nước.'),
    Q('"Sustainable development" là?', ['Phát triển nhanh', 'Phát triển ngắn hạn', 'Phát triển bền vững', 'Phát triển nóng'], 2, 'Sustainable = bền vững.'),
  ]),

  M(10, 'Unit 5 — Being Part of ASEAN · Comparative & Superlative review', [
    Q('"Vietnam is ___ than Singapore in area."', ['large (nguyên cấp, thiếu -er)', 'largest', 'larger', 'more large'], 2, 'Tính từ ngắn + -er.'),
    Q('"Mount Everest is ___ mountain in the world."', ['higher', 'highest', 'the highest', 'high (nguyên cấp, thiếu -est)'], 2, 'Superlative + the.'),
    Q('"Indonesia is ___ populous country in ASEAN."', ['more (so sánh hơn, thiếu the)', 'much (chỉ trạng từ, không tạo so sánh nhất)', 'most (so sánh nhất, thiếu the)', 'the most'], 3, 'Most + adj dài.'),
    Q('"This city is as ___ as Hanoi."', ['busier', 'busy', 'more busy', 'busiest'], 1, 'as + adj + as.'),
    Q('"The more you study, ___ you learn."', ['the more', 'most (so sánh nhất, sai cấu trúc kép)', 'more (so sánh hơn, thiếu the)', 'the most'], 0, 'The more…, the more… (so sánh kép).'),
    Q('"He is not ___ his brother."', ['tallest', 'taller as', 'more tall', 'as tall as'], 3, 'Not as … as.'),
  ]),

  M(11, 'Unit 6 — Global Warming · Vocabulary', [
    Q('"Global warming" là?', ['Sự nóng lên toàn cầu', 'Sự lạnh đi toàn cầu', 'Sự khô hạn', 'Sự ô nhiễm'], 0, 'Global warming = nóng lên toàn cầu.'),
    Q('"Greenhouse gas" là?', ['Khí oxy', 'Khí nitơ', 'Khí nhà kính (CO₂, CH₄…)', 'Khí ozone'], 2, 'Greenhouse gas = khí nhà kính.'),
    Q('"Carbon dioxide" công thức hoá học?', ['CO (carbon monoxide, không phải dioxide)', 'CO₂', 'O₂ (khí oxy, không chứa carbon)', 'H₂O (nước, không có carbon)'], 1, 'Carbon dioxide = CO₂.'),
    Q('"Renewable energy" là?', ['Năng lượng than', 'Năng lượng hạt nhân', 'Năng lượng tái tạo', 'Năng lượng hoá thạch'], 2, 'Renewable = tái tạo (mặt trời, gió…).'),
    Q('"Sea level rise" nghĩa là?', ['Sóng lớn', 'Mực nước biển dâng', 'Mực nước biển giảm', 'Bão biển'], 1, 'Sea level rise = nước biển dâng.'),
    Q('"Deforestation" tác động đến?', ['Tăng cây xanh', 'Giảm CO₂', 'Tăng CO₂, mất đa dạng sinh học', 'Không ảnh hưởng'], 2, 'Phá rừng → tăng CO₂.'),
  ]),

  M(12, 'Unit 6 — Global Warming · Perfect gerund & Perfect participle', [
    Q('"Having finished" là dạng gì?', ['Past participle', 'Present participle', 'Perfect participle (chủ động hoàn thành)', 'Gerund đơn'], 2, 'Having + V3 = perfect participle.'),
    Q('"___ his homework, he went out."', ['Finishing', 'Having finished', 'Finished', 'To finish'], 1, 'Sau khi hoàn thành → having + V3.'),
    Q('"He admitted ___ the money." (đã lấy)', ['having stolen', 'stealing', 'steal (nguyên thể, sai sau admit)', 'to steal'], 0, 'Perfect gerund: having + V3.'),
    Q('"___ many times, he passed the exam." (đã thi nhiều lần)', ['Tried (V2, sai vì không có chủ ngữ)', 'Trying', 'To try', 'Having tried'], 3, 'Having + V3.'),
    Q('Perfect gerund dùng khi hành động V-ing xảy ra?', ['Trước hành động chính', 'Sau hành động chính', 'Tương lai', 'Cùng lúc'], 0, 'Diễn tả việc đã xong trước.'),
    Q('"She regretted ___ him." (đã không tin)', ['not believe', 'not having believed', 'not believing', 'not to believe'], 1, 'Phủ định + perfect gerund.'),
  ]),

  M(13, 'Unit 7 — Further Education · Vocabulary', [
    Q('"Further education" là?', ['Giáo dục tiểu học', 'Giáo dục tiếp theo (sau THPT)', 'Giáo dục đặc biệt', 'Giáo dục mầm non'], 1, 'Further education = học lên cao.'),
    Q('"Vocational training" nghĩa là?', ['Đào tạo phổ thông', 'Đào tạo nghề', 'Đào tạo quân sự', 'Đào tạo từ xa'], 1, 'Vocational = hướng nghiệp/nghề.'),
    Q('"Undergraduate" là?', ['Thạc sĩ', 'Sinh viên đại học chưa tốt nghiệp', 'Tiến sĩ', 'Học sinh THPT'], 1, 'Undergraduate = sinh viên đại học.'),
    Q('"Postgraduate" mang nghĩa?', ['Sau đại học (thạc sĩ, tiến sĩ)', 'Tiểu học', 'Trước đại học', 'Trung học'], 0, 'Postgraduate = học sau ĐH.'),
    Q('"Scholarship" là?', ['Học phí', 'Đồng phục', 'Giáo trình', 'Học bổng'], 3, 'Scholarship = học bổng.'),
    Q('"To enrol in" nghĩa là?', ['Đăng ký vào (khoá học)', 'Vắng mặt', 'Bỏ học', 'Tốt nghiệp'], 0, 'Enrol in = ghi danh.'),
  ]),

  M(14, 'Unit 7 — Further Education · Mixed conditional', [
    Q('Mixed conditional (Loại 3 → 2) dùng để?', ['Quá khứ trái ngược + hiện tại trái ngược', 'Quá khứ thật', 'Hiện tại thật', 'Tương lai có thể'], 0, 'Trộn loại 3 + loại 2.'),
    Q('"If I ___ harder last year, I ___ a better student now."', ['studied / will be', 'had studied / will be', 'had studied / would be', 'study / would be'], 2, 'Had + V3 / would + V (mixed).'),
    Q('"If she ___ the bus, she ___ here now."', ['take / would', 'had taken / would be', 'took / would be', 'takes / will be'], 1, 'Mixed.'),
    Q('"If I ___ rich, I ___ that house last week."', ['am / will buy', 'was / bought', 'were / would have bought', 'were / will buy'], 2, 'Loại 2 → loại 3 mixed (hiện tại trái ngược → quá khứ).'),
    Q('Conditional loại 2 cấu trúc?', ['If + S + V-ed, S + would + V', 'If + S + V, S + will + V', 'If + S + had V3, S + would have V3', 'If + S + V, S + V'], 0, 'Loại 2.'),
    Q('"If I were you, I ___ accept the offer."', ['would have', 'had (sai thì, dùng cho loại 3)', 'will (sai thì, dùng cho loại 1)', 'would'], 3, 'Loại 2.'),
  ]),

  M(15, 'Unit 8 — Our World Heritage Sites · Vocabulary', [
    Q('"World Heritage Site" là?', ['Di sản thế giới', 'Trung tâm thương mại', 'Khu công nghiệp', 'Khu dân cư'], 0, 'Heritage = di sản.'),
    Q('"UNESCO" là tổ chức của?', ['Liên hợp quốc về giáo dục, khoa học, văn hoá', 'Thương mại', 'Y tế thế giới', 'Lao động quốc tế'], 0, 'UNESCO.'),
    Q('"Ha Long Bay" được công nhận là?', ['Khu vui chơi', 'Di sản phi vật thể', 'Di sản thiên nhiên thế giới', 'Khu công nghiệp'], 2, 'Vịnh Hạ Long.'),
    Q('"To preserve" nghĩa là?', ['Thay đổi', 'Bán đi', 'Bảo tồn', 'Phá huỷ'], 2, 'Preserve = giữ gìn.'),
    Q('"Cultural heritage" là?', ['Di sản tự nhiên', 'Di sản chính trị', 'Di sản văn hoá', 'Di sản kinh tế'], 2, 'Cultural = văn hoá.'),
    Q('"Hoi An Ancient Town" thuộc loại di sản?', ['Hỗn hợp', 'Phi vật thể', 'Thiên nhiên', 'Văn hoá'], 3, 'Phố cổ Hội An = di sản văn hoá.'),
  ]),

  M(16, 'Unit 8 — Our World Heritage Sites · Articles (a/an/the)', [
    Q('"___ Mekong River is in Vietnam."', ['Ø (không mạo từ, sai vì tên sông cần the)', 'A (mạo từ không xác định, sai)', 'The', 'An (mạo từ trước nguyên âm, sai)'], 2, 'Tên sông + the.'),
    Q('"She is ___ engineer."', ['an', 'the (xác định, sai vì lần đầu nhắc)', 'Ø (thiếu mạo từ, sai với danh từ đếm được số ít)', 'a (mạo từ trước phụ âm, sai vì engineer bắt đầu nguyên âm)'], 0, 'engineer bắt đầu nguyên âm.'),
    Q('"I want ___ apple."', ['the (xác định, sai vì lần đầu nhắc)', 'Ø (thiếu mạo từ, sai với danh từ đếm được số ít)', 'a (mạo từ trước phụ âm, sai vì apple bắt đầu nguyên âm)', 'an'], 3, 'apple → an.'),
    Q('"___ sun rises in the east."', ['Ø (thiếu mạo từ, sai với sự vật duy nhất)', 'The', 'An (không xác định, sai với sự vật duy nhất)', 'A (không xác định, sai với sự vật duy nhất)'], 1, 'Sự vật duy nhất → the.'),
    Q('"He plays ___ guitar."', ['an (sai vì guitar bắt đầu phụ âm)', 'a (không xác định, sai vì chơi nhạc cụ cần the)', 'the', 'Ø (thiếu mạo từ, sai vì play + the + nhạc cụ)'], 2, 'Play + the + nhạc cụ.'),
    Q('"___ Halong Bay is beautiful."', ['An (sai vì Halong bắt đầu phụ âm)', 'A (mạo từ không xác định, sai với tên riêng)', 'Ø (no article)', 'The (theo quy tắc cũ, không còn dùng hiện đại)'], 2, 'Tên vịnh, hồ ngoại lệ — Halong Bay không "the" (theo cách viết hiện đại).'),
  ]),

  M(17, 'Review HK1 — Vocabulary', [
    Q('"Generation gap" liên quan đến chủ đề?', ['Môi trường', 'Gia đình & thế hệ', 'Giáo dục', 'Du lịch'], 1, 'Unit 1.'),
    Q('"Greenhouse gas" thuộc chủ đề?', ['Văn hoá', 'Môi trường', 'Thể thao', 'Sức khoẻ'], 1, 'Unit 6.'),
    Q('"Undergraduate" thuộc chủ đề?', ['Du lịch', 'Môi trường', 'Thể thao', 'Giáo dục'], 3, 'Unit 7.'),
    Q('"ASEAN" thuộc chủ đề?', ['Khu vực Đông Nam Á', 'Bắc Mỹ', 'Châu Âu', 'Châu Phi'], 0, 'Unit 5.'),
    Q('"Heritage" thuộc chủ đề?', ['Công nghệ', 'Thể thao', 'Y học (medicine, khác chủ đề)', 'Di sản'], 3, 'Unit 8.'),
    Q('"Self-reliant" thuộc chủ đề?', ['Phụ thuộc', 'Tự lập', 'Du lịch', 'Sức khoẻ'], 1, 'Unit 3.'),
  ]),

  M(18, 'Review HK1 — Grammar', [
    Q('Cleft sentence chuẩn: "It was ___ ___ I met yesterday."', ['Mary who/that', 'Mary that', 'Mary where', 'Mary which'], 0, 'Người → who hoặc that.'),
    Q('Reduced relative chủ động dùng?', ['V-ing', 'V (nguyên thể, sai vì cần rút gọn)', 'V3 (dùng cho bị động, không phải chủ động)', 'to V (dùng cho mục đích, không phải rút gọn)'], 0, 'V-ing.'),
    Q('Mixed conditional kết hợp loại?', ['3 và 2', '3 và 1', '1 và 0', '2 và 1'], 0, 'Loại 3 + 2 phổ biến.'),
    Q('Perfect gerund: "He admitted ___ the money."', ['having stolen', 'steal (nguyên thể, sai sau admit)', 'to steal', 'stealing'], 0, 'Having + V3.'),
    Q('Modal "must not" diễn tả?', ['Khả năng', 'Không cần', 'Cấm', 'Có thể'], 2, 'Must not = cấm.'),
    Q('Gerund sau "enjoy" là?', ['V (nguyên thể, sai sau enjoy)', 'V-ing', 'to V (sai vì enjoy không đi với to-inf)', 'V3 (phân từ quá khứ, sai sau enjoy)'], 1, 'enjoy + V-ing.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Cities of the Future · Vocabulary', [
    Q('"Smart city" là?', ['Thành phố cổ', 'Thành phố nhỏ', 'Thành phố nông thôn', 'Thành phố thông minh'], 3, 'Smart city = ứng dụng IoT, AI.'),
    Q('"Skyscraper" nghĩa là?', ['Chung cư cũ', 'Toà nhà chọc trời', 'Biệt thự', 'Nhà cấp bốn'], 1, 'Skyscraper = nhà cao tầng.'),
    Q('"Sustainable" mang nghĩa?', ['Ô nhiễm', 'Tạm thời', 'Bền vững', 'Lãng phí'], 2, 'Sustainable.'),
    Q('"Public transport" là?', ['Giao thông công cộng', 'Tàu thuỷ', 'Xe riêng', 'Máy bay'], 0, 'Public transport.'),
    Q('"Eco-friendly" nghĩa là?', ['Lạc hậu, lỗi thời', 'Hiện đại', 'Thân thiện môi trường', 'Đắt tiền'], 2, 'Eco-friendly = xanh.'),
    Q('"Infrastructure" là?', ['Bộ máy hành chính', 'Hạ tầng', 'Văn hoá', 'Dân số'], 1, 'Infrastructure = cơ sở hạ tầng.'),
  ]),

  M(20, 'Unit 9 — Cities of the Future · Future continuous & Future perfect', [
    Q('"This time next year, I ___ in Australia." (đang làm)', ['study (hiện tại đơn, sai cho tương lai tiếp diễn)', 'will study', 'will be studying', 'am studying'], 2, 'Future continuous: will be V-ing.'),
    Q('"By 2030, robots ___ many human jobs."', ['will replace', 'replace', 'will have replaced', 'replaced'], 2, 'Future perfect: will have + V3.'),
    Q('Future perfect cấu trúc?', ['will + V', 'will be + V-ing', 'will have + V3', 'would + V'], 2, 'Will have + V3.'),
    Q('"At 8pm tomorrow, we ___ dinner."', ['will be having', 'have (hiện tại đơn, sai cho tương lai)', 'will have', 'will had'], 0, 'Future continuous.'),
    Q('"By the time you arrive, I ___ the report."', ['finish', 'will finish', 'finished', 'will have finished'], 3, 'Hoàn tất trước thời điểm tương lai.'),
    Q('"He ___ in this city for 10 years by next month."', ['lived (quá khứ đơn, sai cho tương lai hoàn thành)', 'will live', 'lives (hiện tại đơn, sai cho tương lai hoàn thành)', 'will have lived'], 3, 'Future perfect + for + time.'),
  ]),

  M(21, 'Unit 10 — Healthy Lifestyle · Vocabulary', [
    Q('"Balanced diet" là?', ['Ăn không hạn chế', 'Bỏ bữa', 'Chế độ ăn cân bằng', 'Chế độ ăn kiêng'], 2, 'Balanced diet.'),
    Q('"Obesity" nghĩa là?', ['Béo phì', 'Gầy còm', 'Khoẻ mạnh', 'Trẻ trung'], 0, 'Obesity = béo phì.'),
    Q('"To work out" là?', ['Học bài', 'Đi chơi', 'Tập luyện thể thao', 'Làm việc'], 2, 'Work out = tập gym/tập luyện.'),
    Q('"Mental health" nghĩa là?', ['Bệnh truyền nhiễm', 'Sức khoẻ tinh thần', 'Dinh dưỡng', 'Sức khoẻ thể chất'], 1, 'Mental health.'),
    Q('"Junk food" là?', ['Trái cây', 'Đồ ăn lành mạnh', 'Đồ ăn nhanh, ít dinh dưỡng', 'Đồ ăn chay'], 2, 'Junk food = đồ ăn nhanh kém chất.'),
    Q('"To stay fit" nghĩa là?', ['Lười vận động', 'Tăng cân', 'Bệnh tật', 'Giữ dáng, khoẻ mạnh'], 3, 'Stay fit.'),
  ]),

  M(22, 'Unit 10 — Healthy Lifestyle · Modal perfect (must/might/could have V3)', [
    Q('"Must have + V3" diễn tả?', ['Có thể đã xảy ra', 'Đang xảy ra', 'Không thể đã xảy ra', 'Chắc chắn đã xảy ra'], 3, 'Must have V3 = suy luận chắc chắn.'),
    Q('"He looks tired. He ___ all night." (chắc đã làm)', ['might work', 'must work', 'must have worked', 'could work'], 2, 'Must have + V3.'),
    Q('"She ___ the train; she\'s not here yet." (có lẽ đã lỡ)', ['can miss', 'will miss', 'must miss', 'might have missed'], 3, 'Might have + V3 = có thể.'),
    Q('"You ___ me; I never said that." (không thể đã hiểu sai)', ['must have misunderstood', 'should understand', 'can\'t have understood', 'will understand'], 2, 'Can\'t have + V3 = không thể đã.'),
    Q('"I ___ the keys at home; let me check." (có lẽ đã để)', ['could have left', 'will leave', 'should leave', 'must leave'], 0, 'Could have + V3.'),
    Q('"Should have + V3" mang nghĩa?', ['Đáng lẽ phải làm (mà không làm)', 'Đã làm rồi', 'Sẽ làm', 'Đang làm'], 0, 'Should have V3 = tiếc nuối.'),
  ]),

  M(23, 'Skills — Listening & Reading practice', [
    Q('"Skimming" trong reading là?', ['Đọc kỹ chi tiết', 'Tra từ điển', 'Dịch từng câu', 'Đọc lướt ý chính'], 3, 'Skimming = lướt.'),
    Q('"Scanning" là?', ['Đọc to', 'Đọc lướt', 'Dịch nghĩa từng câu', 'Tìm thông tin cụ thể'], 3, 'Scanning = tìm chi tiết.'),
    Q('Khi nghe IELTS, "gist" là?', ['Ý chính tổng quát', 'Phát âm', 'Ngữ pháp', 'Chi tiết nhỏ'], 0, 'Gist = ý chính.'),
    Q('"Inference" trong reading là?', ['Dịch nghĩa', 'Suy luận ngầm', 'Học vẹt', 'Đọc to'], 1, 'Inference.'),
    Q('"Note-taking" trong listening là?', ['Nghe lại sau', 'Ghi chú từ khoá khi nghe', 'Viết toàn bộ', 'Không ghi'], 1, 'Note-taking.'),
    Q('"Predicting" trước khi nghe giúp?', ['Đoán nội dung sắp nghe', 'Học từ mới', 'Bỏ qua bài', 'Viết essay'], 0, 'Predicting = dự đoán.'),
  ]),

  M(24, 'Inversion (Đảo ngữ) — Hardly, Never, Not until', [
    Q('"Hardly ___ I arrived when the phone rang."', ['was (sai cấu trúc, không dùng be với Hardly)', 'did (sai thì, Hardly đi với quá khứ hoàn thành)', 'had', 'have (hiện tại hoàn thành, sai vì cần had + V3)'], 2, 'Hardly had + S + V3 when…'),
    Q('"Never ___ such a beautiful place."', ['have I seen', 'I have seen', 'I saw (không đảo ngữ, sai sau Never)', 'have seen'], 0, 'Never + đảo ngữ.'),
    Q('"Not until he came ___ the party start."', ['did', 'was (sai cấu trúc, không dùng be sau Not until)', 'had (sai vì sự kiện cùng quá khứ đơn, không hoàn thành)', 'do (hiện tại đơn, sai vì câu chuyện ở quá khứ)'], 0, 'Not until + clause + did + S + V.'),
    Q('"No sooner ___ he arrived than it started raining."', ['have (hiện tại hoàn thành, sai vì cần had + V3)', 'had', 'was (sai cấu trúc, không dùng be với No sooner)', 'did (sai thì, No sooner đi với quá khứ hoàn thành)'], 1, 'No sooner had + S + V3 than…'),
    Q('"Seldom ___ I go to the cinema."', ['am (sai cấu trúc, không dùng be với Seldom)', 'did (sai thì, câu ở hiện tại đơn)', 'have (sai cấu trúc, không dùng hiện tại hoàn thành)', 'do'], 3, 'Seldom/Rarely + do/does/did + S + V.'),
    Q('"Only when she left ___ I realize my mistake."', ['had (sai vì hành động cùng quá khứ đơn, không hoàn thành)', 'do (hiện tại đơn, sai vì câu ở quá khứ)', 'did', 'was (sai cấu trúc, không dùng be sau Only when)'], 2, 'Only when + clause + did + S + V.'),
  ]),

  M(25, 'Phrasal verbs — Daily life & Education', [
    Q('"To put off" nghĩa là?', ['Bắt đầu', 'Tăng tốc', 'Hoãn lại', 'Hoàn thành'], 2, 'Put off = hoãn.'),
    Q('"To look up (a word)" là?', ['Phớt lờ', 'Quên mất nghĩa của từ', 'Nhìn lên', 'Tra (từ điển)'], 3, 'Look up.'),
    Q('"To bring up" có thể mang nghĩa?', ['Nuôi dạy / Nêu vấn đề', 'Mang xuống', 'Bỏ rơi', 'Đuổi đi'], 0, 'Bring up = nuôi dạy.'),
    Q('"To give up" nghĩa là?', ['Nhảy lên', 'Đứng dậy', 'Tặng quà', 'Từ bỏ'], 3, 'Give up.'),
    Q('"To take after" là?', ['Lấy đi', 'Trông coi', 'Giống (về tính cách/ngoại hình)', 'Theo sau'], 2, 'Take after = giống.'),
    Q('"To find out" nghĩa là?', ['Bỏ qua', 'Tìm ra, phát hiện', 'Tìm ngoài', 'Mất đi, đánh rơi'], 1, 'Find out.'),
  ]),

  M(26, 'Pronunciation — Stress patterns & Intonation', [
    Q('Trọng âm từ "photograph" rơi vào?', ['Âm tiết 1', 'Trọng âm đều mọi âm tiết', 'Âm tiết 2', 'Âm tiết 3'], 0, 'PHO-to-graph.'),
    Q('Trọng âm "photography" rơi vào?', ['Âm tiết 2', 'Âm tiết 1', 'Âm tiết 4', 'Âm tiết 3'], 0, 'pho-TO-gra-phy.'),
    Q('Câu trần thuật thường có intonation?', ['Xuống cuối câu', 'Lên xuống thất thường', 'Lên cuối câu', 'Không đổi'], 0, 'Falling intonation.'),
    Q('Câu hỏi Yes/No có intonation?', ['Không đổi', 'Xuống cuối câu', 'Lên cuối câu', 'Lên giữa câu'], 2, 'Rising intonation.'),
    Q('"Record" (n) trọng âm rơi vào?', ['Âm tiết 1', 'Cả hai', 'Trọng âm cuối từ', 'Âm tiết 2'], 0, 'REcord (n).'),
    Q('"Record" (v) trọng âm rơi vào?', ['Âm tiết 1', 'Cả hai', 'Trọng âm đều mọi âm tiết', 'Âm tiết 2'], 3, 'reCORD (v).'),
  ]),

  M(27, 'Writing — Argumentative essay', [
    Q('"Argumentative essay" là?', ['Bài luận tranh luận, đưa lý lẽ', 'Bài kể chuyện', 'Bài mô tả', 'Bài tả người'], 0, 'Argumentative = nghị luận.'),
    Q('Thesis statement nằm ở?', ['Đầu body', 'Cuối conclusion', 'Cuối introduction', 'Giữa body'], 2, 'Thesis = cuối phần mở.'),
    Q('Một "topic sentence" tốt cần?', ['Kết luận', 'Tóm ý chính của body paragraph', 'Đưa ví dụ', 'Trích dẫn'], 1, 'Topic sentence dẫn dắt đoạn.'),
    Q('Linking word "however" dùng để?', ['Liệt kê', 'So sánh', 'Chuyển ý đối lập', 'Kết luận'], 2, 'However = tuy nhiên.'),
    Q('"Counter-argument" là?', ['Lập luận chính', 'Trích dẫn', 'Ví dụ minh hoạ cụ thể', 'Lập luận đối lập'], 3, 'Counter-argument = phản biện.'),
    Q('Số đoạn body tối thiểu của argumentative essay 5 đoạn?', ['1', '2', '5', '3'], 3, '5-paragraph: 1 intro + 3 body + 1 conclusion.'),
  ]),

  M(28, 'Reading — Long passage skills', [
    Q('Khi đọc đoạn văn dài, bước đầu tiên nên?', ['Skim ý chính', 'Tra hết từ mới', 'Bỏ qua tiêu đề', 'Đọc từng từ'], 0, 'Skim trước.'),
    Q('Câu hỏi "main idea" cần?', ['Từ vựng', 'Chi tiết nhỏ', 'Ngữ pháp', 'Ý chính toàn đoạn'], 3, 'Main idea.'),
    Q('"Vocabulary in context" là?', ['Đoán nghĩa từ qua ngữ cảnh', 'Học thuộc', 'Bỏ qua', 'Tra từ điển'], 0, 'Context clue.'),
    Q('Câu hỏi "inference" yêu cầu?', ['Suy luận ý ngầm', 'Dịch sang tiếng mẹ đẻ', 'Tìm chi tiết hiện rõ', 'Đếm từ'], 0, 'Inference = suy luận.'),
    Q('"Reference question" là?', ['Tìm danh từ', 'Tìm trạng từ', 'Tìm đại từ chỉ ai/cái gì', 'Tìm động từ'], 2, 'Reference: đại từ "it/they/this" chỉ về cái gì.'),
    Q('Mẹo loại trừ trong reading: đáp án sai thường?', ['Có ví dụ rõ', 'Sát ý chính', 'Quá tuyệt đối (all, never)', 'Trích nguyên văn'], 2, 'Đáp án tuyệt đối thường bẫy.'),
  ]),

  M(29, 'Speaking — Discussion & Debate', [
    Q('"In my opinion" dùng để?', ['Đặt câu hỏi cho người nghe', 'Phản đối gay gắt', 'Đưa quan điểm cá nhân', 'Đồng ý hoàn toàn'], 2, 'Cụm bày tỏ ý kiến.'),
    Q('"I agree with you to some extent" nghĩa?', ['Đồng ý hoàn toàn', 'Im lặng', 'Đồng ý ở mức độ nào đó', 'Phản đối'], 2, 'To some extent = phần nào.'),
    Q('"On the other hand" dùng?', ['Đưa quan điểm trái chiều', 'Liệt kê', 'Tóm tắt', 'So sánh'], 0, 'Mặt khác.'),
    Q('"What\'s your view on…?" là cách?', ['Hỏi ý kiến', 'Phản đối', 'Đồng ý', 'Đưa ý kiến'], 0, 'Hỏi quan điểm.'),
    Q('"Could you elaborate?" nghĩa?', ['Bạn có thể im lặng?', 'Bạn có thể chuyển chủ đề?', 'Bạn có thể giải thích chi tiết?', 'Bạn có thể lặp lại?'], 2, 'Elaborate = nói rõ hơn.'),
    Q('Khi không đồng ý lịch sự, dùng?', ['No way!', 'I see your point, but…', 'I don\'t care.', 'You\'re wrong!'], 1, 'Phép lịch sự.'),
  ]),

  M(30, 'Reading — Cohesion & Coherence', [
    Q('"Cohesion" trong văn bản là?', ['Ngữ pháp', 'Từ vựng', 'Liên kết câu/đoạn (về ngôn ngữ)', 'Ý chính'], 2, 'Cohesion = liên kết hình thức.'),
    Q('"Coherence" là?', ['Liên kết câu', 'Tổng số từ trong bài', 'Số đoạn', 'Mạch ý logic'], 3, 'Coherence = mạch lạc nội dung.'),
    Q('Connector "therefore" diễn đạt?', ['Kết quả', 'Liệt kê', 'Đối lập', 'So sánh'], 0, 'Therefore = vì vậy.'),
    Q('"Furthermore" dùng để?', ['Đối lập', 'Mở đầu', 'Kết luận', 'Bổ sung ý'], 3, 'Bổ sung.'),
    Q('Đại từ "this/these" thường chỉ về?', ['Người đọc', 'Người nói', 'Ý/đối tượng vừa nhắc trước', 'Tương lai'], 2, 'Reference.'),
    Q('"In conclusion" mở đầu cho?', ['Phần kết luận', 'Phần mở bài', 'Tiêu đề', 'Phần thân'], 0, 'Kết luận.'),
  ]),

  M(31, 'Writing — Letter & Email', [
    Q('Email formal mở đầu bằng?', ['Dear Sir/Madam,', 'Hey, (suồng sã, dùng giữa bạn bè)', 'Hi! (thân mật, không trang trọng)', 'Yo, (lóng, không lịch sự)'], 0, 'Formal greeting.'),
    Q('Kết email trang trọng?', ['Yours faithfully / Yours sincerely', 'Bye (thân mật, không trang trọng)', 'See ya', 'XOXO (thân mật giữa bạn bè, không formal)'], 0, 'Sign-off formal.'),
    Q('"Yours sincerely" dùng khi?', ['Biết tên người nhận', 'Bạn thân', 'Người lạ', 'Không biết tên'], 0, 'Yours sincerely + name.'),
    Q('"Yours faithfully" dùng khi?', ['Không biết tên người nhận', 'Bạn bè', 'Gia đình', 'Biết tên'], 0, 'Sau "Dear Sir/Madam".'),
    Q('Mục đích email "complaint" là?', ['Hẹn gặp', 'Xin việc', 'Giới thiệu', 'Phàn nàn về dịch vụ/sản phẩm'], 3, 'Complaint letter.'),
    Q('Cụm xin lỗi trang trọng?', ['I sincerely apologise for…', 'My bad', 'Sorry!', 'Oops! (thán từ thân mật, không trang trọng)'], 0, 'Formal apology.'),
  ]),

  M(32, 'Vocabulary expansion — Word formation', [
    Q('"Decide" → danh từ?', ['Decidence', 'Deciding', 'Decision', 'Decisional'], 2, 'Decide → decision.'),
    Q('"Happy" → trạng từ?', ['Happyly', 'Happily', 'Hapily', 'Happiness'], 1, 'Happy → happily.'),
    Q('"Care" → tính từ phủ định?', ['Careless', 'Careness', 'Careful', 'Caring'], 0, 'Careless = vô tâm.'),
    Q('"Friend" → tính từ?', ['Friending', 'Friended', 'Friendly', 'Friendship'], 2, 'Friend → friendly.'),
    Q('"Inform" → danh từ?', ['Informing', 'Information', 'Informy', 'Informance'], 1, 'Information.'),
    Q('"Use" → tính từ phủ định?', ['Useful', 'Useless', 'Using (V-ing, không phải tính từ phủ định)', 'Used (V2/V3, không mang nghĩa phủ định)'], 1, 'Useless = vô dụng.'),
  ]),

  M(33, 'Review HK2 — Vocabulary mixed', [
    Q('"Smart city" liên quan unit?', ['Healthy Lifestyle', 'Being Part of ASEAN (Unit 5)', 'Cities of the Future', 'Heritage'], 2, 'Unit 9.'),
    Q('"Obesity" thuộc unit?', ['Being Part of ASEAN (Unit 5)', 'Smart city', 'Heritage', 'Healthy Lifestyle'], 3, 'Unit 10.'),
    Q('"Sustainable" có thể dùng cho?', ['Chỉ giáo dục', 'Chỉ sức khoẻ', 'Chỉ kinh tế', 'Cả thành phố và môi trường'], 3, 'Đa nghĩa cảnh.'),
    Q('"Self-confidence" thuộc chủ đề?', ['Becoming Independent', 'Being Part of ASEAN (Unit 5)', 'Healthy Lifestyle', 'Heritage'], 0, 'Unit 3.'),
    Q('"Generation gap" thuộc unit?', ['Generation Gap', 'Relationships', 'Heritage', 'Smart city'], 0, 'Unit 1.'),
    Q('"Volunteer" liên quan?', ['Healthy lifestyle', 'Smart city', 'Being Part of ASEAN (Unit 5)', 'Caring for those in need'], 3, 'Unit 4.'),
  ]),

  M(34, 'Review HK2 — Grammar mixed', [
    Q('Inversion "Hardly had + S + V3 when…" diễn tả?', ['Câu hỏi', 'Điều kiện', 'So sánh', 'Hai hành động liên tiếp'], 3, 'Hardly… when…'),
    Q('Future perfect cấu trúc?', ['will be V-ing', 'will + V', 'would have V3', 'will have + V3'], 3, 'Will have + V3.'),
    Q('Modal perfect "must have V3" diễn tả?', ['Suy đoán chắc chắn về quá khứ', 'Hiện tại', 'Tương lai', 'Khả năng'], 0, 'Must have V3.'),
    Q('Reduced relative bị động?', ['V-ing (dùng cho rút gọn chủ động)', 'V3', 'V (nguyên thể, sai vì cần phân từ)', 'to V (dùng cho mục đích, không phải bị động)'], 1, 'V3 (past participle).'),
    Q('Cleft sentence nhấn mạnh người?', ['It is + place + where', 'It is + time + when', 'It is/was + thing + which', 'It is/was + person + who/that'], 3, 'It is/was … who/that.'),
    Q('Mixed conditional phổ biến nhất?', ['Loại 0 → 3', 'Loại 2 → 1', 'Loại 3 → 2', 'Loại 1 → 0'], 2, 'Loại 3 → 2.'),
  ]),

  M(35, 'Final Exam Preparation', [
    Q('Tip nhớ vocab dài hạn?', ['Bỏ qua từ khó', 'Học theo chủ đề + dùng đặt câu', 'Học thuộc lòng riêng lẻ', 'Chỉ dịch'], 1, 'Topic + context.'),
    Q('Trong reading IELTS, "True/False/Not Given" yêu cầu?', ['Đếm từ', 'Dịch sang tiếng Việt từng câu', 'Đoán nghĩa từ', 'So sánh ý với bài đọc'], 3, 'TFNG kỹ năng.'),
    Q('Khi viết essay, tránh?', ['Linking words', 'Lặp ý quá nhiều', 'Đa dạng cấu trúc', 'Dẫn chứng'], 1, 'Tránh lặp.'),
    Q('Speaking phần 2 IELTS dài?', ['10 phút', '30 giây', '1–2 phút', '5 phút'], 2, 'Cue card 1-2\'.'),
    Q('Phát âm "ed" cuối từ có?', ['1 cách', '2 cách', '3 cách: /t/ /d/ /ɪd/', '4 cách'], 2, 'walked /t/, played /d/, wanted /ɪd/.'),
    Q('Để cải thiện listening?', ['Không cần luyện', 'Nghe đa dạng nguồn + ghi chú', 'Bỏ phụ đề luôn', 'Chỉ học từ'], 1, 'Practice + variety.'),
  ]),
];

export const H11TA_SCENARIOS = indexBy(H11TA_WEEKS);
