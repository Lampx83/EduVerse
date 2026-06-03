// ============================================================
// Lớp 10 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Tiếng Anh 10 — Global Success).
// ID prefix: "H10TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10TA', 'tieng-anh', n, title, qs, opts);

export const H10TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Unit 1 — Family Life · Vocabulary', [
    Q('"Household chores" có nghĩa là?', ['Người thân', 'Bài tập về nhà', 'Việc nhà', 'Tiền tiêu'], 2, 'Household chores = công việc gia đình.'),
    Q('"Breadwinner" trong gia đình là?', ['Hàng xóm', 'Người con', 'Người kiếm tiền chính', 'Người nội trợ'], 2, 'Breadwinner = trụ cột tài chính.'),
    Q('"To do the laundry" nghĩa là?', ['Giặt giũ', 'Quét nhà', 'Nấu cơm', 'Rửa bát'], 0, 'Laundry = đồ giặt.'),
    Q('"Nuclear family" gồm?', ['Họ hàng xa', 'Cha mẹ và con cái', 'Một mình', 'Đại gia đình 3 thế hệ'], 1, 'Nuclear = gia đình hạt nhân nhỏ.'),
    Q('"Extended family" là?', ['Đại gia đình nhiều thế hệ', 'Bạn thân', 'Gia đình ly tán', 'Một mình'], 0, 'Extended family = đại gia đình.'),
    Q('Chọn từ phù hợp: "She always ___ the dishes after dinner."', ['does', 'washes (rửa - dễ chọn sai vì cùng nghĩa rửa)', 'makes (làm - lẫn với make dinner)', 'takes (cầm - nhầm collocation)'], 0, 'Collocation: do the dishes (rửa bát).'),
  ]),

  M(2, 'Unit 1 — Family Life · Present simple vs Present continuous', [
    Q('"My mother ___ dinner every evening." Chọn?', ['cooks', 'cooked', 'is cook (sai dạng động từ)', 'is cooking'], 0, '"Every evening" → present simple.'),
    Q('"Look! The baby ___."', ['cried (quá khứ - sai vì Look! ở hiện tại)', 'cries (HTĐ - chỉ thói quen, không hợp \'Look!\')', 'cry (V nguyên - thiếu trợ động từ)', 'is crying'], 3, '"Look!" → đang xảy ra → continuous.'),
    Q('"He always ___ his bike to school."', ['rides', 'rode (quá khứ - không hợp \'always\')', 'ride (sai chia ngôi 3 số ít)', 'is riding'], 0, 'Thói quen → simple.'),
    Q('"I ___ TV at the moment."', ['watched', 'watch (V nguyên - thiếu trợ động từ be)', 'am watching', 'watches'], 2, '"At the moment" → continuous.'),
    Q('Dấu hiệu của present simple?', ['now, at the moment', 'last week, ago', 'since, for', 'always, usually, often'], 3, 'Trạng từ tần suất.'),
    Q('Chia: "She ___ (study) every night."', ['studies', 'study (sai chia ngôi 3 số ít)', 'studied', 'is studying'], 0, 'Ngôi 3 số ít + study → studies.'),
  ]),

  M(3, 'Unit 2 — Humans and the Environment · Vocabulary', [
    Q('"Pollution" nghĩa là?', ['Ô nhiễm', 'Năng lượng', 'Khí hậu', 'Bảo tồn'], 0, 'Pollution = sự ô nhiễm.'),
    Q('"Deforestation" là?', ['Cháy rừng', 'Phá rừng', 'Khu bảo tồn', 'Trồng rừng'], 1, 'Deforestation = sự phá rừng.'),
    Q('"To recycle" nghĩa là?', ['Mua mới', 'Tái chế', 'Vứt bỏ', 'Tái sử dụng'], 1, 'Recycle = tái chế.'),
    Q('"Carbon footprint" là?', ['Dấu chân carbon (lượng khí thải)', 'Đầm lầy', 'Vết chân lớn', 'Chân ghế'], 0, 'Carbon footprint = chỉ số CO₂ phát thải.'),
    Q('"Endangered species" nghĩa là?', ['Loài thường', 'Loài mới', 'Loài có nguy cơ tuyệt chủng', 'Loài quý hiếm bình thường'], 2, 'Endangered = đang bị đe doạ.'),
    Q('Hành động bảo vệ môi trường: ___ plastic bags.', ['buy more (mua thêm - ngược với bảo vệ môi trường)', 'produce (sản xuất - làm tăng rác nhựa)', 'increase', 'reduce'], 3, 'Reduce, reuse, recycle — 3Rs.'),
  ]),

  M(4, 'Unit 2 — Humans and the Environment · Comparative & Superlative', [
    Q('"This city is ___ than the other."', ['most polluted', 'more polluted', 'pollute', 'polluteder'], 1, 'Tính từ dài: more + adj + than.'),
    Q('"The Amazon is ___ rainforest in the world."', ['more large', 'the largest', 'largest (thiếu mạo từ \'the\' trước so sánh nhất)', 'larger'], 1, 'So sánh nhất: the largest.'),
    Q('"Climate change is getting ___ ___."', ['more bad', 'bad and bad', 'baddest', 'worse and worse'], 3, 'Cấu trúc tăng tiến: comparative + and + comparative.'),
    Q('"This air is ___ than yesterday."', ['cleanest', 'cleaner', 'more clean', 'more cleaner (sai - kép hai dạng so sánh)'], 1, 'Adj ngắn 1 âm: + er.'),
    Q('"The more trees we plant, the ___ air we have."', ['the cleaner (thừa \'the\' trong vế thứ hai)', 'cleanest', 'more clean', 'cleaner'], 3, 'Cấu trúc "the + comparative, the + comparative".'),
    Q('"Recycling is ___ than burning waste."', ['the better (thừa \'the\' - đây là so sánh hơn)', 'better', 'more good (sai - good là tính từ bất quy tắc)', 'gooder'], 1, 'Good → better → the best.'),
  ]),

  M(5, 'Unit 3 — Music · Vocabulary', [
    Q('"Composer" nghĩa là?', ['Người sáng tác nhạc', 'Nhạc cụ', 'Khán giả', 'Nhạc trưởng (conductor - hay nhầm với composer)'], 0, 'Composer = nhà soạn nhạc.'),
    Q('"Lyrics" là?', ['Tuyển tập bài hát (album - dễ nhầm khái niệm)', 'Giai điệu', 'Nhạc cụ', 'Lời bài hát'], 3, 'Lyrics = lời ca khúc.'),
    Q('"To release an album" nghĩa là?', ['Mua album', 'Sửa album', 'Nghe album', 'Phát hành album'], 3, 'Release = phát hành.'),
    Q('"Concert" là?', ['Ban nhạc', 'Phòng thu', 'Bài hát', 'Buổi hoà nhạc'], 3, 'Concert = buổi biểu diễn nhạc.'),
    Q('"Audience" nghĩa là?', ['Đạo diễn', 'Diễn viên', 'Nhạc cụ', 'Khán giả'], 3, 'Audience = người xem/nghe.'),
    Q('Thể loại nào KHÔNG phải genre nhạc?', ['Jazz (là thể loại nhạc, đáp án này SAI nhãn)', 'Rock (là thể loại nhạc, đáp án này SAI nhãn)', 'Cinema', 'Pop (là thể loại nhạc, đáp án này SAI nhãn)'], 2, 'Cinema là điện ảnh, không phải thể loại nhạc.'),
  ]),

  M(6, 'Unit 3 — Music · Past Simple vs Past Continuous', [
    Q('"I ___ TV when she called me."', ['am watching', 'watch (V nguyên - thiếu trợ động từ was)', 'watched', 'was watching'], 3, 'Hành động đang xảy ra (continuous) bị cắt ngang (simple).'),
    Q('"She ___ to Hanoi last summer."', ['has gone', 'goes (HTĐ - không hợp với \'last summer\')', 'was going', 'went'], 3, '"Last summer" → past simple.'),
    Q('"While I ___ dinner, the phone rang."', ['cook (V nguyên - thiếu trợ động từ was)', 'was cooking', 'is cooking', 'cooked'], 1, 'Hành động kéo dài trong quá khứ → continuous.'),
    Q('"They ___ at the concert last night."', ['sing (V nguyên - không hợp \'last night\')', 'sang (QKĐ - không nhấn mạnh đang diễn ra)', 'are singing', 'were singing'], 3, '"Last night" + đang diễn ra → continuous.'),
    Q('Dạng quá khứ của "buy"?', ['buyed (sai - buy là bất quy tắc, không +ed)', 'bought', 'buys (HTĐ ngôi 3 - không phải quá khứ)', 'buying'], 1, 'Bất quy tắc: buy → bought.'),
    Q('Dạng quá khứ của "sing"?', ['sang', 'sings (HTĐ ngôi 3 - không phải quá khứ)', 'singed', 'sung (là V3 - không dùng cho quá khứ đơn)'], 0, 'Sing → sang → sung.'),
  ]),

  M(7, 'Unit 4 — For a Better Community · Vocabulary', [
    Q('"Volunteer" nghĩa là?', ['Học sinh', 'Tình nguyện viên', 'Du khách (tourist - dễ nhầm với volunteer)', 'Giáo viên'], 1, 'Volunteer = người tình nguyện.'),
    Q('"Charity" là?', ['Trường học', 'Tổ chức từ thiện', 'Công ty', 'Bệnh viện'], 1, 'Charity = từ thiện.'),
    Q('"Donate" nghĩa là?', ['Quyên góp', 'Mua hàng (purchase - ngược nghĩa)', 'Bán hàng (sell - khác hoàn toàn)', 'Vay mượn (borrow - dễ nhầm vì cùng giao dịch)'], 0, 'Donate = cho/quyên góp.'),
    Q('"Community service" là?', ['Dịch vụ khách hàng', 'Dịch vụ trả phí', 'Phục vụ cộng đồng', 'Hỗ trợ kỹ thuật'], 2, 'Hoạt động cộng đồng.'),
    Q('"Disadvantaged children" là?', ['Trẻ em mới sinh', 'Trẻ em chăm', 'Trẻ em giàu', 'Trẻ em kém may mắn'], 3, 'Disadvantaged = thiệt thòi.'),
    Q('"Fundraising" nghĩa là?', ['Đầu tư', 'Tiết kiệm', 'Cho vay', 'Gây quỹ'], 3, 'Fundraising = hoạt động gây quỹ.'),
  ]),

  M(8, 'Unit 4 — Past Simple & Present Perfect', [
    Q('"I ___ in Hanoi for 5 years."', ['lived (QKĐ - không diễn tả kéo dài tới hiện tại)', 'live (HTĐ - không có \'for 5 years\')', 'have lived', 'am living'], 2, 'Khoảng thời gian kéo dài đến hiện tại → present perfect.'),
    Q('"She ___ to Paris last year."', ['went', 'has gone', 'goes (HTĐ ngôi 3 - không hợp \'last year\')', 'go (V nguyên - sai chia ngôi)'], 0, '"Last year" → past simple.'),
    Q('Dấu hiệu của present perfect?', ['now, at the moment (dấu hiệu của HTTD)', 'ago, last', 'tomorrow', 'since, for, already, just, yet'], 3, 'Trạng từ đặc trưng PP.'),
    Q('"I ___ ___ this book yet."', ['am not reading', 'haven\'t read', 'didn\'t read', 'don\'t read'], 1, '"Yet" trong câu phủ định → present perfect.'),
    Q('"He ___ to London twice."', ['was (QKĐ - không nói được \'twice\' tới giờ)', 'went (QKĐ - không diễn tả kinh nghiệm cuộc đời)', 'has been', 'goes (HTĐ - không phù hợp với \'twice\')'], 2, 'Kinh nghiệm cuộc đời → present perfect.'),
    Q('Quá khứ phân từ của "see"?', ['seen', 'saw (là quá khứ đơn V2, không phải V3)', 'sees (HTĐ ngôi 3 - không phải V3)', 'seeing'], 0, 'See → saw → seen.'),
  ]),

  M(9, 'Unit 5 — Inventions · Vocabulary', [
    Q('"Invention" nghĩa là?', ['Bản quyền', 'Phát minh', 'Sản phẩm', 'Khám phá'], 1, 'Invention = phát minh.'),
    Q('"Innovate" là?', ['Đổi mới', 'Sao chép', 'Phát minh (invent - nghĩa gần nhưng khác)', 'Sửa chữa'], 0, 'Innovate = cách tân.'),
    Q('Phân biệt "invent" và "discover"?', ['Không liên quan', 'Invent: tạo cái mới; Discover: tìm ra cái sẵn có', 'Ngược lại nghĩa', 'Như nhau'], 1, 'Invent = sáng chế, Discover = phát hiện.'),
    Q('"Patent" là?', ['Giấy phép kinh doanh (license - dễ nhầm với patent)', 'Bằng tốt nghiệp', 'Bằng sáng chế', 'Bằng lái'], 2, 'Patent = quyền sở hữu phát minh.'),
    Q('"Smartphone" được phát minh dựa trên?', ['Phone + computer', 'TV + internet (sai - không phải bản chất)', 'Computer', 'Phone + camera (camera chỉ là phụ kiện)'], 0, 'Smartphone kết hợp điện thoại và máy tính.'),
    Q('"Artificial Intelligence" (AI) là?', ['Trí tuệ nhân tạo', 'Trí tuệ tự nhiên', 'Người máy có cảm xúc (sai - đây chỉ là loại robot)', 'Mạng xã hội'], 0, 'AI = trí tuệ nhân tạo.'),
  ]),

  M(10, 'Unit 5 — Inventions · Passive Voice', [
    Q('"The telephone ___ by Bell."', ['invents', 'is inventing', 'invented', 'was invented'], 3, 'Bị động quá khứ: was + V3.'),
    Q('"English ___ all over the world."', ['speaks', 'was spoken', 'is spoken', 'spoke (QKĐ chủ động - không phải bị động)'], 2, 'Bị động hiện tại: is/am/are + V3.'),
    Q('Đổi sang bị động: "They build a new school."', ['A new school has built.', 'A new school builds.', 'A new school is built (by them).', 'A new school was built.'], 2, 'Hiện tại đơn → is/am/are + V3.'),
    Q('"The Mona Lisa ___ by Leonardo da Vinci."', ['was painted', 'painted', 'paints', 'is painting'], 0, 'Bị động quá khứ.'),
    Q('"This book ___ in 1990."', ['wrote (QKĐ chủ động - không phải bị động)', 'was written', 'writes', 'is written'], 1, 'Quá khứ bị động.'),
    Q('"Letters ___ by postmen every day."', ['delivered', 'is delivered', 'deliver', 'are delivered'], 3, 'Hiện tại bị động số nhiều.'),
  ]),

  M(11, 'Unit 6 — Gender Equality · Vocabulary', [
    Q('"Gender equality" nghĩa là?', ['Bạo lực', 'Sự phân biệt', 'Bình đẳng giới', 'Hôn nhân'], 2, 'Gender equality = bình đẳng giới.'),
    Q('"Discrimination" là?', ['Sự hợp tác', 'Sự phân biệt đối xử', 'Sự ủng hộ', 'Sự khen ngợi'], 1, 'Discrimination = phân biệt đối xử.'),
    Q('"Stereotype" nghĩa là?', ['Định kiến', 'Tin tức', 'Sự thật', 'Sự kiện'], 0, 'Stereotype = khuôn mẫu, định kiến.'),
    Q('"Women\'s rights" là?', ['Quyền nam giới', 'Quyền trẻ em', 'Quyền chung', 'Quyền phụ nữ'], 3, 'Quyền của nữ giới.'),
    Q('"To empower women" nghĩa là?', ['Buộc phụ nữ', 'Trao quyền cho phụ nữ', 'Hạn chế phụ nữ', 'Bỏ quên phụ nữ'], 1, 'Empower = trao quyền, nâng cao vị thế.'),
    Q('Câu nào thể hiện bình đẳng giới?', ['Women should stay home.', 'Only men can be leaders.', 'Both men and women have equal rights.', 'Boys are smarter than girls.'], 2, 'Thể hiện sự bình đẳng.'),
  ]),

  M(12, 'Unit 6 — Modal Verbs (must, have to, should, ought to)', [
    Q('"You ___ wear a helmet when riding a motorbike." (bắt buộc theo luật)', ['must', 'can (có khả năng - không phải bắt buộc)', 'could (có thể - lời khuyên nhẹ, không phải luật)', 'may (có lẽ/được phép - không bắt buộc)'], 0, 'Must = bắt buộc.'),
    Q('Phân biệt "must" và "have to"?', ['Ngược nghĩa', 'Không liên quan', 'Như nhau', 'Must: bắt buộc nội tại; Have to: bắt buộc ngoại tại'], 3, 'Must do bản thân thấy cần; have to do hoàn cảnh.'),
    Q('"You ___ smoke in the hospital." (cấm)', ['mustn\'t', 'shouldn\'t', 'can\'t (không thể - chỉ khả năng, không phải cấm)', 'don\'t have to'], 0, 'Mustn\'t = bị cấm.'),
    Q('"I ___ get up early tomorrow."', ['have (thiếu \'to\' - sai cấu trúc have to)', 'musts (sai - must là modal, không thêm s)', 'have to', 'must to'], 2, 'Have to + V nguyên.'),
    Q('"You ___ study harder for the exam." (lời khuyên)', ['will (sẽ - chỉ tương lai, không phải lời khuyên)', 'must (bắt buộc - quá mạnh cho lời khuyên)', 'should', 'can (có thể - chỉ khả năng, không phải khuyên)'], 2, 'Should = nên (lời khuyên).'),
    Q('"You ___ apologize to her." (nên — formal)', ['must to', 'can to', 'ought to', 'will to'], 2, 'Ought to + V nguyên = nên.'),
  ]),

  M(13, 'Unit 7 — Viet Nam and International Organisations · Vocabulary', [
    Q('"International organisation" là?', ['Tổ chức quốc tế', 'Câu lạc bộ', 'Công ty trong nước', 'Hội từ thiện'], 0, 'Tổ chức cấp quốc tế (UN, ASEAN…).'),
    Q('"ASEAN" gồm bao nhiêu nước?', ['5', '10', '7', '15'], 1, '10 thành viên (Brunei, Cambodia, Indonesia,…).'),
    Q('UN viết tắt cho?', ['United Network', 'United Nations', 'Union of Nations', 'Universal Nations'], 1, 'United Nations = Liên Hợp Quốc.'),
    Q('UNESCO là tổ chức về?', ['Kinh tế', 'Giáo dục, Khoa học và Văn hoá', 'Y tế thế giới (đó là WHO, không phải UNESCO)', 'Quân sự'], 1, 'UN Educational, Scientific, Cultural Organization.'),
    Q('"Member state" là?', ['Tiểu bang (state - dễ nhầm do từ \'state\')', 'Vùng lãnh thổ', 'Quốc gia thành viên', 'Quan sát viên (observer - không phải thành viên chính thức)'], 2, 'Member state = thành viên chính thức.'),
    Q('"Cooperation" nghĩa là?', ['Sự độc lập', 'Sự đối đầu', 'Sự hợp tác', 'Sự cạnh tranh'], 2, 'Cooperation = hợp tác.'),
  ]),

  M(14, 'Unit 7 — Reported Speech (statements)', [
    Q('Đổi sang gián tiếp: "She said, ‘I am happy.’"', ['She said she be happy.', 'She said she is happy.', 'She said she will be happy.', 'She said (that) she was happy.'], 3, 'Lùi thì: am → was.'),
    Q('"He said, ‘I will come tomorrow.’" → ?', ['He said he comes tomorrow.', 'He said he will come tomorrow.', 'He said he came tomorrow.', 'He said (that) he would come the next day.'], 3, 'Will → would, tomorrow → the next day.'),
    Q('Lùi thì present simple → ?', ['past continuous', 'future', 'past simple', 'present perfect'], 2, 'Present simple → past simple.'),
    Q('"now" trong gián tiếp đổi thành?', ['that day (đổi cho \'today\', không phải \'now\')', 'yesterday', 'then', 'tomorrow'], 2, 'now → then.'),
    Q('"this" trong gián tiếp đổi thành?', ['that', 'those (số nhiều - \'this\' số ít đổi thành \'that\')', 'those one', 'these (số nhiều, hiện tại - sai cả hai)'], 0, 'this → that.'),
    Q('"She said, ‘I have finished.’" → ?', ['She said she finishes.', 'She said she has finished.', 'She said she finished.', 'She said she had finished.'], 3, 'Present perfect → past perfect.'),
  ]),

  M(15, 'Unit 8 — New Ways to Learn · Vocabulary', [
    Q('"E-learning" là?', ['Học trực tuyến', 'Học truyền thống', 'Học nhóm', 'Học tại trường'], 0, 'E-learning = học qua mạng/điện tử.'),
    Q('"MOOC" viết tắt cho?', ['Massive Open Online Course', 'Mobile Online Class', 'Many Open Online Class', 'Modern Online Course'], 0, 'Khoá học mở trực tuyến đại trà.'),
    Q('"Digital device" là?', ['Bảng đen', 'Vở ghi (notebook - dùng để học nhưng không phải digital)', 'Thiết bị kỹ thuật số', 'Thước kẻ (ruler - dụng cụ học truyền thống)'], 2, 'Smartphone, máy tính,…'),
    Q('"Online platform" là?', ['Nền tảng trực tuyến', 'Bệ phóng', 'Sân khấu', 'Sàn nhảy'], 0, 'Platform = nền tảng.'),
    Q('"Self-study" nghĩa là?', ['Tự học', 'Học trên lớp', 'Học nhóm', 'Học gia sư'], 0, 'Self-study = tự học.'),
    Q('"Interactive" là?', ['Bị động', 'Im lặng', 'Cá nhân', 'Có tính tương tác'], 3, 'Interactive = tương tác.'),
  ]),

  M(16, 'Unit 8 — Conditional Sentences Type 1 & 2', [
    Q('Type 1: "If it ___ tomorrow, we will stay home."', ['will rain', 'is raining', 'rains', 'rained'], 2, 'If + S + V_s/es, S + will + V.'),
    Q('Type 2: "If I ___ rich, I would travel the world."', ['were', 'was (đúng văn nói, nhưng Type 2 chuẩn dùng were)', 'will be', 'am (HTĐ - không phải điều kiện không có thật)'], 0, 'If + S + V_quá khứ (were với mọi ngôi), S + would + V.'),
    Q('"If you study hard, you ___ the exam."', ['will pass', 'passed', 'would pass', 'pass (V nguyên - thiếu trợ động từ will)'], 0, 'Type 1 → will + V.'),
    Q('"If I had wings, I ___ fly to you."', ['will (sẽ - dùng cho Type 1, không phải Type 2)', 'can (có thể - không phải dạng quá khứ của modal)', 'would', 'could (có thể đã - nhấn khả năng, không tự nhiên ở đây)'], 2, 'Type 2 → would + V.'),
    Q('Type 1 dùng cho?', ['Điều kiện không có thật ở hiện tại', 'Mệnh lệnh', 'Quá khứ', 'Điều kiện có thật ở tương lai'], 3, 'Type 1 = điều có khả năng xảy ra.'),
    Q('Type 2 dùng cho?', ['Mệnh lệnh', 'Điều có thật', 'Quá khứ', 'Điều giả định trái với hiện tại'], 3, 'Type 2 = không có thật ở hiện tại.'),
  ]),

  M(17, 'Unit 9 — Protecting the Environment · Vocabulary', [
    Q('"Greenhouse effect" là?', ['Nhà xanh', 'Hiệu ứng nhà kính', 'Vườn hoa', 'Nhà kính trồng cây'], 1, 'Hiệu ứng nhà kính làm Trái đất nóng lên.'),
    Q('"Global warming" là?', ['Sự nóng lên toàn cầu', 'Mùa hè', 'Sự lạnh đi', 'Thời tiết'], 0, 'Global warming = trái đất nóng lên.'),
    Q('"Renewable energy" là?', ['Năng lượng cũ', 'Năng lượng hoá thạch', 'Năng lượng hạt nhân', 'Năng lượng tái tạo'], 3, 'Solar, wind, hydro,… là năng lượng tái tạo.'),
    Q('"Solar power" là?', ['Thuỷ điện', 'Năng lượng mặt trời', 'Hạt nhân', 'Năng lượng gió'], 1, 'Solar = mặt trời.'),
    Q('"Conservation" nghĩa là?', ['Sự ô nhiễm', 'Sự phá huỷ', 'Sự bảo tồn', 'Sự xây dựng'], 2, 'Conservation = bảo tồn (môi trường, loài,…).'),
    Q('"Eco-friendly" là?', ['Thân thiện môi trường', 'Cao cấp', 'Đắt tiền', 'Khó dùng'], 0, 'Eco-friendly = thân thiện với môi trường.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Thì present simple chia với ngôi 3 số ít?', ['Giữ nguyên', 'Thêm -ing', 'Thêm -s/-es', 'Thêm -ed'], 2, 'He, she, it + V_s/es.'),
    Q('Câu bị động: "They built this bridge in 1990." → ?', ['This bridge was built in 1990.', 'This bridge built in 1990.', 'This bridge is built in 1990.', 'This bridge has built in 1990.'], 0, 'Quá khứ bị động: was/were + V3.'),
    Q('Reported: "He said, ‘I am tired.’" → ?', ['He said he be tired.', 'He said he was tired.', 'He said he is tired.', 'He said he tired.'], 1, 'Lùi thì: am → was.'),
    Q('Type 2 conditional: "If I ___ a bird…"', ['am (HTĐ - không phải điều kiện không thực)', 'was (văn nói chấp nhận, nhưng chuẩn Type 2 là were)', 'will be', 'were'], 3, 'Were dùng với mọi ngôi trong type 2.'),
    Q('Must vs Should: lời khuyên dùng?', ['have to', 'must (bắt buộc - mạnh hơn lời khuyên)', 'should', 'can (có thể - chỉ khả năng, không khuyên)'], 2, 'Should = nên.'),
    Q('"Renewable" energy gồm?', ['wood, biomass (gỗ - có tái tạo nhưng không phải ví dụ chuẩn)', 'coal, oil, gas', 'nuclear', 'solar, wind, hydro'], 3, 'Năng lượng tái tạo từ thiên nhiên.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Conditional Type 3 & Mixed Conditional', [
    Q('Type 3: "If I ___ harder, I would have passed."', ['studied', 'will study', 'had studied', 'study (V nguyên - không phải Type 3)'], 2, 'If + S + had + V3, S + would have + V3.'),
    Q('"If she had told me, I ___ helped her."', ['will have', 'would have', 'would (Type 2 - không hợp với \'had told\')', 'had (đã - thiếu \'have\' phía sau)'], 1, 'Type 3: would have + V3.'),
    Q('Type 3 nói về?', ['Điều giả định trái với quá khứ', 'Hiện tại có thật', 'Tương lai có thật', 'Hiện tại không có thật'], 0, 'Sự việc đã qua không thể thay đổi.'),
    Q('Mixed: "If I had studied medicine, I ___ a doctor now."', ['would be', 'will be', 'am (HTĐ - không phải dạng điều kiện)', 'would have been'], 0, 'Điều kiện quá khứ + kết quả hiện tại: had + V3 / would + V.'),
    Q('"If you hadn\'t helped me, I ___ failed."', ['had (đã - thiếu \'have\' và sai dạng)', 'will have', 'would (Type 2 - không hợp với \'hadn\'t helped\')', 'would have'], 3, 'Type 3 phủ định trong if.'),
    Q('Dấu hiệu type 3 là?', ['had + V3 trong mệnh đề if', 'Will trong mệnh đề if', 'V_ing trong if', 'V_s trong mệnh đề if'], 0, 'Past perfect trong if.'),
  ]),

  M(20, 'Unit 10 — Ecotourism · Vocabulary', [
    Q('"Ecotourism" là?', ['Du lịch sang trọng', 'Du lịch sinh thái', 'Du lịch giá rẻ', 'Du lịch quân sự'], 1, 'Eco + tourism = du lịch sinh thái.'),
    Q('"Sustainable" nghĩa là?', ['Nhanh chóng', 'Bền vững', 'Tạm thời', 'Đắt đỏ'], 1, 'Sustainable = bền vững.'),
    Q('"Biodiversity" là?', ['Toán học', 'Hoá học', 'Vật lý', 'Đa dạng sinh học'], 3, 'Bio + diversity = đa dạng các loài sống.'),
    Q('"Wildlife" là?', ['Vườn cây', 'Nông sản', 'Thú nuôi', 'Động thực vật hoang dã'], 3, 'Wildlife = sinh vật hoang dã.'),
    Q('"Habitat" nghĩa là?', ['Môi trường sống', 'Người dân', 'Đường phố', 'Nhà ở người'], 0, 'Habitat = nơi cư trú của loài.'),
    Q('"To preserve" là?', ['Phá hủy', 'Khai thác (exploit - ngược nghĩa với bảo tồn)', 'Bảo tồn, giữ gìn', 'Ô nhiễm'], 2, 'Preserve = giữ gìn nguyên trạng.'),
  ]),

  M(21, 'Unit 10 — Gerunds and Infinitives', [
    Q('"I enjoy ___ books."', ['read (V nguyên - enjoy luôn theo V-ing)', 'reads (HTĐ ngôi 3 - sai cấu trúc)', 'to read', 'reading'], 3, 'Enjoy + V-ing.'),
    Q('"She wants ___ a doctor."', ['be (V nguyên - thiếu \'to\' sau want)', 'being (V-ing - want không theo V-ing)', 'to being', 'to be'], 3, 'Want + to V.'),
    Q('"He suggested ___ a movie."', ['watched', 'watching', 'watch (V nguyên - suggest không theo V nguyên)', 'to watch'], 1, 'Suggest + V-ing.'),
    Q('"I hope ___ you soon."', ['sees (HTĐ ngôi 3 - không hợp sau hope)', 'to see', 'see (V nguyên - thiếu \'to\')', 'seeing'], 1, 'Hope + to V.'),
    Q('"Stop ___!" (đừng nói chuyện nữa)', ['talking', 'talk (V nguyên - Stop theo V-ing để dừng)', 'to talk', 'talks (HTĐ ngôi 3 - sai cấu trúc)'], 0, 'Stop V-ing = dừng việc đang làm.'),
    Q('"He decided ___ abroad."', ['to study', 'studying', 'studied', 'study (V nguyên - decide cần \'to\')'], 0, 'Decide + to V.'),
  ]),

  M(22, 'Reported Speech — Questions & Commands', [
    Q('Yes/No question: "She asked, ‘Do you like coffee?’" → ?', ['She asked I like coffee.', 'She asked if I liked coffee.', 'She asked do I like coffee.', 'She asked if did I like coffee.'], 1, 'Dùng if/whether + S + V (lùi thì).'),
    Q('WH-question: "He asked, ‘Where do you live?’" → ?', ['He asked where do I live.', 'He asked where I live.', 'He asked where I lived.', 'He asked where did I live.'], 2, 'Giữ từ để hỏi + S + V (không có trợ động từ).'),
    Q('Command: "He said, ‘Open the door!’" → ?', ['He told me open the door.', 'He said me to open.', 'He said open the door.', 'He told me to open the door.'], 3, 'Told + O + to V.'),
    Q('Negative command: "She said, ‘Don\'t shout!’" → ?', ['She told me don\'t shout.', 'She told to not shout.', 'She told me not to shout.', 'She said not shout.'], 2, 'Not + to V.'),
    Q('"asked" thường dùng cho?', ['Câu cảm thán', 'Câu hỏi', 'Câu mệnh lệnh', 'Câu khẳng định'], 1, 'Ask dùng cho câu hỏi trong gián tiếp.'),
    Q('Lùi thì past simple → ?', ['past continuous', 'present perfect', 'past simple', 'past perfect'], 3, 'Past simple → past perfect.'),
  ]),

  M(23, 'Relative Clauses — Defining vs Non-defining', [
    Q('"The man ___ is wearing glasses is my uncle."', ['which (dùng cho vật, không cho người)', 'whose (sở hữu - không phải chủ ngữ)', 'where (nơi chốn - không phải người)', 'who'], 3, 'Who: chỉ người (chủ ngữ).'),
    Q('"The book ___ I bought is interesting."', ['which/that', 'whose (sở hữu - không phải tân ngữ vật)', 'who (chỉ người - sách là vật)', 'where (nơi chốn - sách không phải nơi)'], 0, 'Which/that: chỉ vật.'),
    Q('"The girl ___ mother is a doctor is my friend."', ['whose', 'who (chủ ngữ người - không thể hiện sở hữu)', 'which (vật - không phải sở hữu)', 'where (nơi chốn - không chỉ sở hữu)'], 0, 'Whose: chỉ sở hữu.'),
    Q('Mệnh đề quan hệ không xác định cần?', ['Không dấu', 'Dấu phẩy', 'Dấu chấm', 'Dấu ngoặc'], 1, 'Non-defining clause có dấu phẩy bao quanh.'),
    Q('"My father, ___ is 50, works in a bank." Chọn?', ['which (vật - cha không phải vật)', 'that (không dùng trong non-defining)', 'who', 'whose (sở hữu - không hợp ngữ cảnh)'], 2, 'Non-defining + người → who (không dùng that).'),
    Q('"The school ___ I studied is in Hanoi."', ['where', 'whose (sở hữu - không phải nơi chốn)', 'which (vật - cần giới từ in phía sau)', 'who (người - không phải nơi)'], 0, 'Where: chỉ nơi chốn.'),
  ]),

  M(24, 'Articles — A, An, The', [
    Q('"I have ___ apple."', ['the (xác định - apple ở đây không xác định)', 'no article', 'a (đứng trước phụ âm - apple bắt đầu nguyên âm)', 'an'], 3, 'Apple bắt đầu bằng nguyên âm → an.'),
    Q('"___ sun rises in the east."', ['An (đứng trước nguyên âm - sun bắt đầu phụ âm)', 'The', 'A (không xác định - sun là duy nhất)', '— (cần mạo từ vì sun là vật duy nhất)'], 1, 'Sun là duy nhất → the.'),
    Q('"She is ___ honest person."', ['— (thiếu mạo từ - cần \'an\' trước honest)', 'an', 'the (xác định - đây là giới thiệu chung)', 'a (đứng trước phụ âm - honest có h câm)'], 1, '"H" câm, đọc /ɒnɪst/ → an.'),
    Q('"I like ___ music."', ['the (xác định - music ở đây nói chung)', 'an (đếm được - music là danh từ không đếm được)', '—', 'a (đếm được - music không đếm được)'], 2, 'Music chung chung → không article.'),
    Q('"___ Eiffel Tower is in Paris."', ['— (không mạo từ - công trình nổi tiếng cần \'the\')', 'An (không xác định - tên riêng cần \'the\')', 'A (không xác định - tên riêng cần \'the\')', 'The'], 3, 'Tên công trình nổi tiếng → the.'),
    Q('"He plays ___ guitar."', ['a (không xác định - nhạc cụ chuẩn dùng \'the\')', 'an (đứng trước nguyên âm - guitar bắt đầu phụ âm)', 'the', '— (cần \'the\' khi chơi nhạc cụ)'], 2, 'Chơi nhạc cụ → the.'),
  ]),

  M(25, 'Tenses Review — All Major Tenses', [
    Q('"I ___ to school every day."', ['am going', 'go', 'went (QKĐ - không hợp \'every day\')', 'have gone'], 1, '"Every day" → present simple.'),
    Q('"He ___ TV when I called."', ['watched', 'watches', 'was watching', 'is watching'], 2, 'Hành động đang diễn ra trong quá khứ.'),
    Q('"By next year, she ___ here for 10 years."', ['lived (QKĐ - không hợp \'by next year\')', 'will live', 'will have lived', 'has lived'], 2, 'Future perfect: by + thời gian tương lai.'),
    Q('"I ___ this book before."', ['am reading', 'have read', 'was reading', 'read (QKĐ - không hợp \'before\' chỉ kinh nghiệm)'], 1, '"Before" + kinh nghiệm → present perfect.'),
    Q('"They ___ for 2 hours when I arrived."', ['wait (V nguyên - không hợp \'2 hours when I arrived\')', 'had been waiting', 'have waited', 'waited'], 1, 'Past perfect continuous: hành động kéo dài đến mốc quá khứ.'),
    Q('"Tomorrow at this time, I ___ a test."', ['am taking', 'take (V nguyên - thiếu trợ động từ tương lai)', 'will take', 'will be taking'], 3, 'Future continuous: hành động đang xảy ra tại thời điểm tương lai cụ thể.'),
  ]),

  M(26, 'Comparison Structures', [
    Q('"She is ___ as her sister."', ['taller', 'as tall', 'tallest', 'more tall'], 1, 'As + adj + as = bằng.'),
    Q('"This is ___ book I\'ve ever read."', ['best (thiếu \'the\' trước so sánh nhất)', 'better', 'well (trạng từ - không phải so sánh nhất)', 'the best'], 3, 'So sánh nhất + ever V3.'),
    Q('"The more you practise, ___ you become."', ['the better', 'better', 'best (so sánh nhất - không hợp cấu trúc đôi)', 'more better'], 0, 'Cấu trúc "the + comparative, the + comparative".'),
    Q('"He runs ___ than I do."', ['more fast', 'fast (nguyên cấp - thiếu hậu tố er)', 'fastest', 'faster'], 3, 'Adj 1 âm + er = faster.'),
    Q('"This problem is ___ that one."', ['less difficult as', 'less difficult than', 'little', 'lesser'], 1, 'Less + adj + than.'),
    Q('"Of the three boys, Tom is ___."', ['the youngest', 'young (nguyên cấp - cần so sánh nhất với \'of the three\')', 'more young', 'younger'], 0, 'So sánh nhất với "of the three".'),
  ]),

  M(27, 'Passive Voice — All Tenses', [
    Q('Hiện tại đơn bị động: is/am/are + ?', ['V_s (ngôi 3 số ít - bị động cần V3)', 'V-ing (dạng hiện tại tiếp diễn chủ động)', 'V3/Ved (past participle)', 'V nguyên'], 2, 'Be + past participle.'),
    Q('"This house ___ in 2010." (was built / built)', ['has built', 'built (V3 không có \'was\' - thiếu trợ động từ)', 'was built', 'is built'], 2, 'Quá khứ bị động: was + V3.'),
    Q('Present perfect passive: has/have been + ?', ['V3', 'V nguyên', 'V-ing (dạng tiếp diễn - không phải bị động hoàn thành)', 'V_s (ngôi 3 số ít - bị động cần V3)'], 0, 'Have/has been + past participle.'),
    Q('"The book ___ by him." (đã được viết)', ['is writing', 'writes', 'has been written', 'wrote (QKĐ chủ động - không phải hiện tại hoàn thành bị động)'], 2, 'Present perfect bị động.'),
    Q('Future bị động: will be + ?', ['V-ing (tiếp diễn chủ động - không phải bị động)', 'V3', 'V_s (ngôi 3 số ít - bị động cần V3)', 'V nguyên (chủ động - không phải bị động)'], 1, 'Will be + past participle.'),
    Q('Modal bị động: must/can/should + ?', ['V-ing (tiếp diễn chủ động - không phải bị động)', 'be + V3', 'being + V3 (sai - đây là dạng tiếp diễn bị động)', 'V nguyên'], 1, 'Modal + be + V3.'),
  ]),

  M(28, 'Modal Verbs — All Types (can, could, may, might)', [
    Q('"___ I borrow your pen?" (lịch sự)', ['May', 'Will (sẽ - chỉ tương lai, không lịch sự bằng May)', 'Must (bắt buộc - không lịch sự khi xin phép)', 'Can (có thể - lịch sự nhưng May trang trọng hơn)'], 0, 'May lịch sự nhất.'),
    Q('"She ___ swim very well." (khả năng)', ['can', 'must (bắt buộc - không phải khả năng)', 'should', 'will (sẽ - chỉ tương lai, không phải khả năng)'], 0, 'Can = có thể.'),
    Q('"It ___ rain tomorrow." (có thể)', ['will (chắc chắn sẽ - mạnh hơn \'có thể\')', 'might', 'should', 'must (chắc hẳn - quá chắc chắn cho dự báo)'], 1, 'Might = có thể/có khả năng.'),
    Q('"You ___ have told me!" (trách)', ['should', 'could', 'can (hiện tại - không nói được việc đã qua)', 'must (bắt buộc - không hợp ngữ cảnh trách)'], 1, 'Could have + V3 = đáng lẽ đã có thể.'),
    Q('"He ___ be home now." (có thể đang)', ['will (chắc chắn - quá mạnh cho suy đoán)', 'can (khả năng - không dùng cho suy đoán hiện tại)', 'may', 'must (chắc hẳn - quá chắc cho \'có thể đang\')'], 2, 'May/might = có thể.'),
    Q('"You ___ be tired after a long trip." (chắc hẳn)', ['must', 'can (có thể - chỉ khả năng, không phải suy đoán chắc)', 'should', 'may (có lẽ - suy đoán nhẹ, không chắc chắn)'], 0, 'Must = chắc hẳn (suy đoán chắc chắn).'),
  ]),

  M(29, 'Vocabulary Review — All Units', [
    Q('"Recycle" = ?', ['Sản xuất (produce - ngược nghĩa tái chế)', 'Tái chế', 'Sử dụng lại (reuse - khái niệm gần nhưng khác)', 'Vứt bỏ'], 1, 'Re-cycle = tái chế.'),
    Q('"Volunteer" = ?', ['Khách mời (guest - dễ nhầm vì v gần âm)', 'Tình nguyện viên', 'Học sinh', 'Bác sĩ'], 1, 'Volunteer = TNV.'),
    Q('"Composer" = ?', ['Ca sĩ (singer - dễ nhầm vì cùng lĩnh vực)', 'Đạo diễn', 'Nhà soạn nhạc', 'Nhạc công'], 2, 'Composer = nhà soạn nhạc.'),
    Q('"Invention" = ?', ['Phát minh', 'Quyền sáng chế (patent - kết quả của phát minh)', 'Khám phá', 'Sản phẩm'], 0, 'Invent = sáng chế.'),
    Q('"Equality" = ?', ['Sự đối lập', 'Sự bình đẳng', 'Sự khác biệt', 'Sự giống nhau'], 1, 'Equality = bình đẳng.'),
    Q('"Renewable" = ?', ['Một lần', 'Hết hạn', 'Không tái sử dụng (non-reusable - khái niệm ngược)', 'Tái tạo'], 3, 'Renewable = có thể tái tạo.'),
  ]),

  M(30, 'Reading Skills — Practice', [
    Q('Để tìm ý chính của đoạn văn, đọc?', ['Đọc câu cuối', 'Câu chủ đề (thường đầu/cuối đoạn)', 'Bỏ qua', 'Toàn bộ chậm'], 1, 'Câu chủ đề (topic sentence) chứa ý chính.'),
    Q('"Skimming" là?', ['Học thuộc', 'Phân tích từ', 'Đọc lướt nhanh để nắm ý chính', 'Đọc kỹ chi tiết'], 2, 'Skimming = lướt tìm ý chính.'),
    Q('"Scanning" là?', ['Đọc lại', 'Đọc lướt', 'Tìm thông tin cụ thể nhanh', 'Đọc thư giãn'], 2, 'Scanning = tìm chi tiết (số liệu, tên,…).'),
    Q('Khi gặp từ mới, nên?', ['Bỏ qua', 'Học thuộc', 'Tra ngay từ điển', 'Đoán nghĩa qua ngữ cảnh'], 3, 'Đoán theo ngữ cảnh trước khi tra.'),
    Q('Câu chủ đề thường nằm ở?', ['Giữa đoạn (inductive - kết luận ở cuối phổ biến hơn)', 'Cuối đoạn (inductive - có nhưng không phổ biến bằng đầu)', 'Đầu đoạn (thông thường)', 'Không cố định'], 2, 'Hay gặp ở đầu đoạn (deductive).'),
    Q('"Inference" trong reading là?', ['Học vẹt', 'Đọc to', 'Dịch nghĩa', 'Suy luận ý ngầm'], 3, 'Inference = suy luận từ ngữ cảnh.'),
  ]),

  M(31, 'Writing Skills — Essay structure', [
    Q('Một bài essay gồm?', ['Đoạn duy nhất', 'Introduction + Body + Conclusion', 'Chỉ Body', 'Mở + Kết'], 1, '3 phần cơ bản.'),
    Q('Topic sentence của đoạn body?', ['Câu chủ đề thể hiện ý chính của đoạn', 'Câu giữa', 'Không cần', 'Câu cuối'], 0, 'Topic sentence dẫn dắt ý cả đoạn.'),
    Q('"Thesis statement" là?', ['Tiêu đề', 'Đoạn cuối', 'Tên tác giả (author name - không phải luận điểm)', 'Luận điểm trung tâm của bài essay'], 3, 'Thesis = luận đề chính trong introduction.'),
    Q('Linking words như "however, therefore, moreover" dùng để?', ['Trang trí', 'Làm dài', 'Vần điệu', 'Nối ý mạch lạc'], 3, 'Connectors giúp logic văn bản.'),
    Q('Conclusion cần?', ['Tóm tắt ý chính + restated thesis', 'Thêm ý mới', 'Đặt câu hỏi mở', 'Tả cảnh'], 0, 'Tổng kết + nhắc lại luận điểm.'),
    Q('Trong writing, "draft" là?', ['Bản nháp', 'Bản in', 'Bản dịch', 'Bản chính'], 0, 'Draft = bản nháp đầu.'),
  ]),

  M(32, 'Listening & Speaking Skills', [
    Q('Khi luyện nghe, nên?', ['Học một câu duy nhất', 'Nghe nhiều lần, đọc transcript', 'Bỏ qua', 'Chỉ đọc'], 1, 'Nghe + transcript hiệu quả.'),
    Q('Để nói tiếng Anh tốt, cần?', ['Học ngữ pháp duy nhất', 'Im lặng', 'Chỉ đọc nhiều (reading - giúp nhưng không đủ để nói tốt)', 'Luyện phát âm + tự tin nói'], 3, 'Phát âm + nói nhiều.'),
    Q('"Pronunciation" là?', ['Chính tả', 'Từ vựng', 'Phát âm', 'Ngữ pháp'], 2, 'Pronunciation = sự phát âm.'),
    Q('"Fluency" là?', ['Sự chậm', 'Sự chính xác', 'Sự nhanh', 'Sự lưu loát'], 3, 'Fluency = nói trôi chảy.'),
    Q('"Intonation" là?', ['Chính tả', 'Trọng âm', 'Ngữ điệu', 'Phát âm'], 2, 'Intonation = lên xuống giọng.'),
    Q('Khi nói, dùng "fillers" như "um, well, you know" để?', ['Có thời gian suy nghĩ', 'Giữ im lặng', 'Trang trí', 'Tỏ ra thông thái (sai - fillers thực ra cho thấy đang suy nghĩ)'], 0, 'Fillers giúp duy trì lưu loát.'),
  ]),

  M(33, 'Grammar Review — All Major Points', [
    Q('Present perfect dấu hiệu?', ['since, for, just, already, yet', 'ago, last', 'now, at the moment (dấu hiệu HTTD, không phải HTHT)', 'tomorrow'], 0, 'Trạng từ đặc trưng.'),
    Q('Câu bị động cần?', ['Be + past participle', 'Will + V', 'Be + V-ing', 'Have + V'], 0, 'Công thức bị động.'),
    Q('Reported speech: "now" → ?', ['then', 'yesterday', 'tomorrow', 'that day (đổi cho \'today\', không phải \'now\')'], 0, 'Đổi trạng từ.'),
    Q('Type 2 conditional: "If I were…"', ['Were cho they', 'Were dùng cho mọi ngôi', 'Was cho I/he/she', 'Không có were'], 1, 'Were dùng cho tất cả ngôi trong type 2.'),
    Q('Mệnh đề quan hệ có phẩy là?', ['Mệnh đề trạng ngữ (adverbial clause - khái niệm khác)', 'Hỗn hợp', 'Defining', 'Non-defining'], 3, 'Non-defining có dấu phẩy.'),
    Q('Modal "should" dùng để?', ['Bắt buộc', 'Cấm đoán (mustn\'t dùng cho cấm, không phải should)', 'Khuyên', 'Cho phép'], 2, 'Should = nên (lời khuyên).'),
  ]),

  M(34, 'Practice Test 1 — End of Year', [
    Q('"She ___ in Hanoi since 2010."', ['lived (QKĐ - không hợp \'since 2010\' tới hiện tại)', 'lives (HTĐ - không diễn tả khoảng kéo dài)', 'has lived', 'is living'], 2, 'Since → present perfect.'),
    Q('"The thief ___ by the police yesterday."', ['caught', 'was caught', 'catches', 'is caught'], 1, 'Quá khứ bị động.'),
    Q('"If I ___ you, I would study harder."', ['will be', 'am (HTĐ - không phải điều kiện không thực)', 'was (văn nói được, nhưng chuẩn Type 2 là were)', 'were'], 3, 'Type 2: were với mọi ngôi.'),
    Q('"He asked me what time ___."', ['was it', 'it is (HTĐ - sai vì câu chính ở quá khứ)', 'is it (đảo ngữ - sai cấu trúc câu gián tiếp)', 'it was'], 3, 'Indirect question: WH + S + V.'),
    Q('"The book ___ I read was great."', ['where (nơi chốn - không phù hợp với \'book\')', 'that/which', 'who (người - book là vật)', 'whose (sở hữu - không phù hợp tân ngữ vật)'], 1, 'Vật → that/which.'),
    Q('"___ pollute the environment is wrong."', ['To', 'In (giới từ - không tạo được chủ ngữ động từ nguyên)', 'For (giới từ - tạo cụm V-ing, không V nguyên)', 'At (giới từ - không hợp với động từ nguyên)'], 0, 'To + V nguyên ở đầu câu = chủ ngữ.'),
  ]),

  M(35, 'Practice Test 2 — Final Review', [
    Q('"Where ___ you born?"', ['was (QKĐ ngôi 1/3 - \'you\' luôn dùng were)', 'were', 'are (HTĐ - không phải quá khứ \'born\')', 'is (HTĐ ngôi 3 - không hợp \'you\')'], 1, 'Bị động quá khứ + you → were.'),
    Q('"I wish I ___ more time."', ['will have', 'has (HTĐ ngôi 3 - sau wish cần quá khứ)', 'have (HTĐ - sau wish cần quá khứ đơn)', 'had'], 3, 'Wish + past simple = ước hiện tại.'),
    Q('"Tom is ___ student in his class."', ['the most intelligent', 'most intelligent', 'intelligent', 'more intelligent'], 0, 'So sánh nhất với adj dài: the most + adj.'),
    Q('"He ___ his homework before his mother came home."', ['did (QKĐ - không thể hiện trước hành động \'came\')', 'had done', 'was doing', 'has done'], 1, 'Past perfect cho hành động trước past simple.'),
    Q('"I look forward to ___ you soon."', ['saw (QKĐ - không hợp sau \'to\' của cụm cố định)', 'seeing', 'to see', 'see (V nguyên - look forward to + V-ing)'], 1, 'Look forward to + V-ing.'),
    Q('Synonyms of "happy"?', ['sick, weak', 'tired, bored', 'glad, joyful, cheerful', 'sad, angry'], 2, 'Các từ đồng nghĩa của happy.'),
  ]),
];

export const H10TA_SCENARIOS = indexBy(H10TA_WEEKS);
