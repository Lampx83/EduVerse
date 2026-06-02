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
    Q('"Household chores" có nghĩa là?', ['Việc nhà','Bài tập về nhà','Tiền tiêu','Người thân'], 0, 'Household chores = công việc gia đình.'),
    Q('"Breadwinner" trong gia đình là?', ['Người kiếm tiền chính','Người nội trợ','Người con','Hàng xóm'], 0, 'Breadwinner = trụ cột tài chính.'),
    Q('"To do the laundry" nghĩa là?', ['Giặt giũ','Rửa bát','Quét nhà','Nấu cơm'], 0, 'Laundry = đồ giặt.'),
    Q('"Nuclear family" gồm?', ['Cha mẹ và con cái','Đại gia đình 3 thế hệ','Một mình','Họ hàng xa'], 0, 'Nuclear = gia đình hạt nhân nhỏ.'),
    Q('"Extended family" là?', ['Đại gia đình nhiều thế hệ','Gia đình ly tán','Bạn thân','Một mình'], 0, 'Extended family = đại gia đình.'),
    Q('Chọn từ phù hợp: "She always ___ the dishes after dinner."', ['does','makes','goes','plays'], 0, 'Collocation: do the dishes (rửa bát).'),
  ]),

  M(2, 'Unit 1 — Family Life · Present simple vs Present continuous', [
    Q('"My mother ___ dinner every evening." Chọn?', ['cooks','is cooking','cook','cooked'], 0, '"Every evening" → present simple.'),
    Q('"Look! The baby ___."', ['is crying','cries','cry','cried'], 0, '"Look!" → đang xảy ra → continuous.'),
    Q('"He always ___ his bike to school."', ['rides','is riding','ride','rode'], 0, 'Thói quen → simple.'),
    Q('"I ___ TV at the moment."', ['am watching','watch','watches','watched'], 0, '"At the moment" → continuous.'),
    Q('Dấu hiệu của present simple?', ['always, usually, often','now, at the moment','last week, ago','since, for'], 0, 'Trạng từ tần suất.'),
    Q('Chia: "She ___ (study) every night."', ['studies','study','is studying','studied'], 0, 'Ngôi 3 số ít + study → studies.'),
  ]),

  M(3, 'Unit 2 — Humans and the Environment · Vocabulary', [
    Q('"Pollution" nghĩa là?', ['Ô nhiễm','Bảo tồn','Khí hậu','Năng lượng'], 0, 'Pollution = sự ô nhiễm.'),
    Q('"Deforestation" là?', ['Phá rừng','Trồng rừng','Cháy rừng','Khu bảo tồn'], 0, 'Deforestation = sự phá rừng.'),
    Q('"To recycle" nghĩa là?', ['Tái chế','Vứt bỏ','Tái sử dụng','Mua mới'], 0, 'Recycle = tái chế.'),
    Q('"Carbon footprint" là?', ['Dấu chân carbon (lượng khí thải)','Vết chân lớn','Chân ghế','Đầm lầy'], 0, 'Carbon footprint = chỉ số CO₂ phát thải.'),
    Q('"Endangered species" nghĩa là?', ['Loài có nguy cơ tuyệt chủng','Loài mới','Loài thường','Loài quý hiếm bình thường'], 0, 'Endangered = đang bị đe doạ.'),
    Q('Hành động bảo vệ môi trường: ___ plastic bags.', ['reduce','increase','buy','sell'], 0, 'Reduce, reuse, recycle — 3Rs.'),
  ]),

  M(4, 'Unit 2 — Humans and the Environment · Comparative & Superlative', [
    Q('"This city is ___ than the other."', ['more polluted','polluteder','most polluted','pollute'], 0, 'Tính từ dài: more + adj + than.'),
    Q('"The Amazon is ___ rainforest in the world."', ['the largest','larger','large','more large'], 0, 'So sánh nhất: the largest.'),
    Q('"Climate change is getting ___ ___."', ['worse and worse','bad and bad','more bad','baddest'], 0, 'Cấu trúc tăng tiến: comparative + and + comparative.'),
    Q('"This air is ___ than yesterday."', ['cleaner','more clean','cleanest','clean'], 0, 'Adj ngắn 1 âm: + er.'),
    Q('"The more trees we plant, the ___ air we have."', ['cleaner','more clean','cleanest','clean'], 0, 'Cấu trúc "the + comparative, the + comparative".'),
    Q('"Recycling is ___ than burning waste."', ['better','gooder','best','well'], 0, 'Good → better → the best.'),
  ]),

  M(5, 'Unit 3 — Music · Vocabulary', [
    Q('"Composer" nghĩa là?', ['Người sáng tác nhạc','Ca sĩ','Nhạc cụ','Khán giả'], 0, 'Composer = nhà soạn nhạc.'),
    Q('"Lyrics" là?', ['Lời bài hát','Giai điệu','Nhạc cụ','Album'], 0, 'Lyrics = lời ca khúc.'),
    Q('"To release an album" nghĩa là?', ['Phát hành album','Mua album','Nghe album','Sửa album'], 0, 'Release = phát hành.'),
    Q('"Concert" là?', ['Buổi hoà nhạc','Phòng thu','Ban nhạc','Bài hát'], 0, 'Concert = buổi biểu diễn nhạc.'),
    Q('"Audience" nghĩa là?', ['Khán giả','Diễn viên','Đạo diễn','Nhạc cụ'], 0, 'Audience = người xem/nghe.'),
    Q('Thể loại nào KHÔNG phải genre nhạc?', ['Cinema','Pop','Rock','Jazz'], 0, 'Cinema là điện ảnh, không phải thể loại nhạc.'),
  ]),

  M(6, 'Unit 3 — Music · Past Simple vs Past Continuous', [
    Q('"I ___ TV when she called me."', ['was watching','watched','watch','am watching'], 0, 'Hành động đang xảy ra (continuous) bị cắt ngang (simple).'),
    Q('"She ___ to Hanoi last summer."', ['went','was going','goes','has gone'], 0, '"Last summer" → past simple.'),
    Q('"While I ___ dinner, the phone rang."', ['was cooking','cooked','cook','is cooking'], 0, 'Hành động kéo dài trong quá khứ → continuous.'),
    Q('"They ___ at the concert last night."', ['were singing','sang','sing','are singing'], 0, '"Last night" + đang diễn ra → continuous.'),
    Q('Dạng quá khứ của "buy"?', ['bought','buyed','buys','buying'], 0, 'Bất quy tắc: buy → bought.'),
    Q('Dạng quá khứ của "sing"?', ['sang','sung','sings','singed'], 0, 'Sing → sang → sung.'),
  ]),

  M(7, 'Unit 4 — For a Better Community · Vocabulary', [
    Q('"Volunteer" nghĩa là?', ['Tình nguyện viên','Khách','Học sinh','Giáo viên'], 0, 'Volunteer = người tình nguyện.'),
    Q('"Charity" là?', ['Tổ chức từ thiện','Công ty','Trường học','Bệnh viện'], 0, 'Charity = từ thiện.'),
    Q('"Donate" nghĩa là?', ['Quyên góp','Bán','Mua','Mượn'], 0, 'Donate = cho/quyên góp.'),
    Q('"Community service" là?', ['Phục vụ cộng đồng','Dịch vụ khách hàng','Dịch vụ trả phí','Hỗ trợ kỹ thuật'], 0, 'Hoạt động cộng đồng.'),
    Q('"Disadvantaged children" là?', ['Trẻ em kém may mắn','Trẻ em giàu','Trẻ em chăm','Trẻ em mới sinh'], 0, 'Disadvantaged = thiệt thòi.'),
    Q('"Fundraising" nghĩa là?', ['Gây quỹ','Tiết kiệm','Đầu tư','Cho vay'], 0, 'Fundraising = hoạt động gây quỹ.'),
  ]),

  M(8, 'Unit 4 — Past Simple & Present Perfect', [
    Q('"I ___ in Hanoi for 5 years."', ['have lived','lived','live','am living'], 0, 'Khoảng thời gian kéo dài đến hiện tại → present perfect.'),
    Q('"She ___ to Paris last year."', ['went','has gone','goes','go'], 0, '"Last year" → past simple.'),
    Q('Dấu hiệu của present perfect?', ['since, for, already, just, yet','ago, last','tomorrow','now'], 0, 'Trạng từ đặc trưng PP.'),
    Q('"I ___ ___ this book yet."', ['haven\'t read','don\'t read','didn\'t read','am not reading'], 0, '"Yet" trong câu phủ định → present perfect.'),
    Q('"He ___ to London twice."', ['has been','was','went','goes'], 0, 'Kinh nghiệm cuộc đời → present perfect.'),
    Q('Quá khứ phân từ của "see"?', ['seen','saw','sees','seeing'], 0, 'See → saw → seen.'),
  ]),

  M(9, 'Unit 5 — Inventions · Vocabulary', [
    Q('"Invention" nghĩa là?', ['Phát minh','Khám phá','Sản phẩm','Bản quyền'], 0, 'Invention = phát minh.'),
    Q('"Innovate" là?', ['Đổi mới','Sao chép','Bán','Sửa chữa'], 0, 'Innovate = cách tân.'),
    Q('Phân biệt "invent" và "discover"?', ['Invent: tạo cái mới; Discover: tìm ra cái sẵn có','Như nhau','Ngược lại nghĩa','Không liên quan'], 0, 'Invent = sáng chế, Discover = phát hiện.'),
    Q('"Patent" là?', ['Bằng sáng chế','Bằng tốt nghiệp','Bằng lái','Thư'], 0, 'Patent = quyền sở hữu phát minh.'),
    Q('"Smartphone" được phát minh dựa trên?', ['Phone + computer','Phone','Computer','TV'], 0, 'Smartphone kết hợp điện thoại và máy tính.'),
    Q('"Artificial Intelligence" (AI) là?', ['Trí tuệ nhân tạo','Trí tuệ tự nhiên','Robot','Mạng xã hội'], 0, 'AI = trí tuệ nhân tạo.'),
  ]),

  M(10, 'Unit 5 — Inventions · Passive Voice', [
    Q('"The telephone ___ by Bell."', ['was invented','invented','invents','is inventing'], 0, 'Bị động quá khứ: was + V3.'),
    Q('"English ___ all over the world."', ['is spoken','speaks','was spoken','spoke'], 0, 'Bị động hiện tại: is/am/are + V3.'),
    Q('Đổi sang bị động: "They build a new school."', ['A new school is built (by them).','A new school was built.','A new school builds.','A new school has built.'], 0, 'Hiện tại đơn → is/am/are + V3.'),
    Q('"The Mona Lisa ___ by Leonardo da Vinci."', ['was painted','painted','paints','is painting'], 0, 'Bị động quá khứ.'),
    Q('"This book ___ in 1990."', ['was written','wrote','writes','is written'], 0, 'Quá khứ bị động.'),
    Q('"Letters ___ by postmen every day."', ['are delivered','deliver','delivered','is delivered'], 0, 'Hiện tại bị động số nhiều.'),
  ]),

  M(11, 'Unit 6 — Gender Equality · Vocabulary', [
    Q('"Gender equality" nghĩa là?', ['Bình đẳng giới','Sự phân biệt','Bạo lực','Hôn nhân'], 0, 'Gender equality = bình đẳng giới.'),
    Q('"Discrimination" là?', ['Sự phân biệt đối xử','Sự khen ngợi','Sự ủng hộ','Sự hợp tác'], 0, 'Discrimination = phân biệt đối xử.'),
    Q('"Stereotype" nghĩa là?', ['Định kiến','Sự thật','Tin tức','Sự kiện'], 0, 'Stereotype = khuôn mẫu, định kiến.'),
    Q('"Women\'s rights" là?', ['Quyền phụ nữ','Quyền nam giới','Quyền trẻ em','Quyền chung'], 0, 'Quyền của nữ giới.'),
    Q('"To empower women" nghĩa là?', ['Trao quyền cho phụ nữ','Hạn chế phụ nữ','Bỏ quên phụ nữ','Buộc phụ nữ'], 0, 'Empower = trao quyền, nâng cao vị thế.'),
    Q('Câu nào thể hiện bình đẳng giới?', ['Both men and women have equal rights.','Women should stay home.','Only men can be leaders.','Boys are smarter than girls.'], 0, 'Thể hiện sự bình đẳng.'),
  ]),

  M(12, 'Unit 6 — Modal Verbs (must, have to, should, ought to)', [
    Q('"You ___ wear a helmet when riding a motorbike." (bắt buộc theo luật)', ['must','can','may','could'], 0, 'Must = bắt buộc.'),
    Q('Phân biệt "must" và "have to"?', ['Must: bắt buộc nội tại; Have to: bắt buộc ngoại tại','Như nhau','Ngược nghĩa','Không liên quan'], 0, 'Must do bản thân thấy cần; have to do hoàn cảnh.'),
    Q('"You ___ smoke in the hospital." (cấm)', ['mustn\'t','don\'t have to','shouldn\'t','can\'t'], 0, 'Mustn\'t = bị cấm.'),
    Q('"I ___ get up early tomorrow."', ['have to','must to','musts','have'], 0, 'Have to + V nguyên.'),
    Q('"You ___ study harder for the exam." (lời khuyên)', ['should','must','can','will'], 0, 'Should = nên (lời khuyên).'),
    Q('"You ___ apologize to her." (nên — formal)', ['ought to','must to','can to','will to'], 0, 'Ought to + V nguyên = nên.'),
  ]),

  M(13, 'Unit 7 — Viet Nam and International Organisations · Vocabulary', [
    Q('"International organisation" là?', ['Tổ chức quốc tế','Công ty trong nước','Hội từ thiện','Câu lạc bộ'], 0, 'Tổ chức cấp quốc tế (UN, ASEAN…).'),
    Q('"ASEAN" gồm bao nhiêu nước?', ['10','5','7','15'], 0, '10 thành viên (Brunei, Cambodia, Indonesia,…).'),
    Q('UN viết tắt cho?', ['United Nations','Union of Nations','United Network','Universal Nations'], 0, 'United Nations = Liên Hợp Quốc.'),
    Q('UNESCO là tổ chức về?', ['Giáo dục, Khoa học và Văn hoá','Y tế','Quân sự','Kinh tế'], 0, 'UN Educational, Scientific, Cultural Organization.'),
    Q('"Member state" là?', ['Quốc gia thành viên','Bang','Vùng lãnh thổ','Khách'], 0, 'Member state = thành viên chính thức.'),
    Q('"Cooperation" nghĩa là?', ['Sự hợp tác','Sự đối đầu','Sự cạnh tranh','Sự độc lập'], 0, 'Cooperation = hợp tác.'),
  ]),

  M(14, 'Unit 7 — Reported Speech (statements)', [
    Q('Đổi sang gián tiếp: "She said, ‘I am happy.’"', ['She said (that) she was happy.','She said she is happy.','She said she will be happy.','She said she be happy.'], 0, 'Lùi thì: am → was.'),
    Q('"He said, ‘I will come tomorrow.’" → ?', ['He said (that) he would come the next day.','He said he will come tomorrow.','He said he came tomorrow.','He said he comes tomorrow.'], 0, 'Will → would, tomorrow → the next day.'),
    Q('Lùi thì present simple → ?', ['past simple','past continuous','present perfect','future'], 0, 'Present simple → past simple.'),
    Q('"now" trong gián tiếp đổi thành?', ['then','tomorrow','yesterday','today'], 0, 'now → then.'),
    Q('"this" trong gián tiếp đổi thành?', ['that','those','these','those one'], 0, 'this → that.'),
    Q('"She said, ‘I have finished.’" → ?', ['She said she had finished.','She said she has finished.','She said she finishes.','She said she finished.'], 0, 'Present perfect → past perfect.'),
  ]),

  M(15, 'Unit 8 — New Ways to Learn · Vocabulary', [
    Q('"E-learning" là?', ['Học trực tuyến','Học truyền thống','Học nhóm','Học tại trường'], 0, 'E-learning = học qua mạng/điện tử.'),
    Q('"MOOC" viết tắt cho?', ['Massive Open Online Course','Many Open Online Class','Mobile Online Class','Modern Online Course'], 0, 'Khoá học mở trực tuyến đại trà.'),
    Q('"Digital device" là?', ['Thiết bị kỹ thuật số','Sách','Bảng đen','Phấn'], 0, 'Smartphone, máy tính,…'),
    Q('"Online platform" là?', ['Nền tảng trực tuyến','Sân khấu','Sàn nhảy','Bệ phóng'], 0, 'Platform = nền tảng.'),
    Q('"Self-study" nghĩa là?', ['Tự học','Học nhóm','Học gia sư','Học trên lớp'], 0, 'Self-study = tự học.'),
    Q('"Interactive" là?', ['Có tính tương tác','Im lặng','Cá nhân','Bị động'], 0, 'Interactive = tương tác.'),
  ]),

  M(16, 'Unit 8 — Conditional Sentences Type 1 & 2', [
    Q('Type 1: "If it ___ tomorrow, we will stay home."', ['rains','rained','will rain','is raining'], 0, 'If + S + V_s/es, S + will + V.'),
    Q('Type 2: "If I ___ rich, I would travel the world."', ['were','am','was','will be'], 0, 'If + S + V_quá khứ (were với mọi ngôi), S + would + V.'),
    Q('"If you study hard, you ___ the exam."', ['will pass','would pass','pass','passed'], 0, 'Type 1 → will + V.'),
    Q('"If I had wings, I ___ fly to you."', ['would','will','can','could'], 0, 'Type 2 → would + V.'),
    Q('Type 1 dùng cho?', ['Điều kiện có thật ở tương lai','Điều kiện không có thật ở hiện tại','Quá khứ','Mệnh lệnh'], 0, 'Type 1 = điều có khả năng xảy ra.'),
    Q('Type 2 dùng cho?', ['Điều giả định trái với hiện tại','Điều có thật','Quá khứ','Mệnh lệnh'], 0, 'Type 2 = không có thật ở hiện tại.'),
  ]),

  M(17, 'Unit 9 — Protecting the Environment · Vocabulary', [
    Q('"Greenhouse effect" là?', ['Hiệu ứng nhà kính','Nhà kính trồng cây','Nhà xanh','Vườn hoa'], 0, 'Hiệu ứng nhà kính làm Trái đất nóng lên.'),
    Q('"Global warming" là?', ['Sự nóng lên toàn cầu','Sự lạnh đi','Thời tiết','Mùa hè'], 0, 'Global warming = trái đất nóng lên.'),
    Q('"Renewable energy" là?', ['Năng lượng tái tạo','Năng lượng hoá thạch','Năng lượng hạt nhân','Năng lượng cũ'], 0, 'Solar, wind, hydro,… là năng lượng tái tạo.'),
    Q('"Solar power" là?', ['Năng lượng mặt trời','Năng lượng gió','Thuỷ điện','Hạt nhân'], 0, 'Solar = mặt trời.'),
    Q('"Conservation" nghĩa là?', ['Sự bảo tồn','Sự phá huỷ','Sự ô nhiễm','Sự xây dựng'], 0, 'Conservation = bảo tồn (môi trường, loài,…).'),
    Q('"Eco-friendly" là?', ['Thân thiện môi trường','Đắt tiền','Khó dùng','Cao cấp'], 0, 'Eco-friendly = thân thiện với môi trường.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Thì present simple chia với ngôi 3 số ít?', ['Thêm -s/-es','Thêm -ed','Thêm -ing','Giữ nguyên'], 0, 'He, she, it + V_s/es.'),
    Q('Câu bị động: "They built this bridge in 1990." → ?', ['This bridge was built in 1990.','This bridge built in 1990.','This bridge is built in 1990.','This bridge has built in 1990.'], 0, 'Quá khứ bị động: was/were + V3.'),
    Q('Reported: "He said, ‘I am tired.’" → ?', ['He said he was tired.','He said he is tired.','He said he tired.','He said he be tired.'], 0, 'Lùi thì: am → was.'),
    Q('Type 2 conditional: "If I ___ a bird…"', ['were','am','was','will be'], 0, 'Were dùng với mọi ngôi trong type 2.'),
    Q('Must vs Should: lời khuyên dùng?', ['should','must','have to','can'], 0, 'Should = nên.'),
    Q('"Renewable" energy gồm?', ['solar, wind, hydro','coal, oil, gas','nuclear','wood'], 0, 'Năng lượng tái tạo từ thiên nhiên.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Conditional Type 3 & Mixed Conditional', [
    Q('Type 3: "If I ___ harder, I would have passed."', ['had studied','studied','study','will study'], 0, 'If + S + had + V3, S + would have + V3.'),
    Q('"If she had told me, I ___ helped her."', ['would have','will have','would','had'], 0, 'Type 3: would have + V3.'),
    Q('Type 3 nói về?', ['Điều giả định trái với quá khứ','Tương lai có thật','Hiện tại có thật','Hiện tại không có thật'], 0, 'Sự việc đã qua không thể thay đổi.'),
    Q('Mixed: "If I had studied medicine, I ___ a doctor now."', ['would be','would have been','will be','am'], 0, 'Điều kiện quá khứ + kết quả hiện tại: had + V3 / would + V.'),
    Q('"If you hadn\'t helped me, I ___ failed."', ['would have','will have','would','had'], 0, 'Type 3 phủ định trong if.'),
    Q('Dấu hiệu type 3 là?', ['had + V3 trong mệnh đề if','V_s trong mệnh đề if','Will trong mệnh đề if','V_ing trong if'], 0, 'Past perfect trong if.'),
  ]),

  M(20, 'Unit 10 — Ecotourism · Vocabulary', [
    Q('"Ecotourism" là?', ['Du lịch sinh thái','Du lịch giá rẻ','Du lịch sang trọng','Du lịch quân sự'], 0, 'Eco + tourism = du lịch sinh thái.'),
    Q('"Sustainable" nghĩa là?', ['Bền vững','Tạm thời','Đắt đỏ','Nhanh chóng'], 0, 'Sustainable = bền vững.'),
    Q('"Biodiversity" là?', ['Đa dạng sinh học','Hoá học','Vật lý','Toán học'], 0, 'Bio + diversity = đa dạng các loài sống.'),
    Q('"Wildlife" là?', ['Động thực vật hoang dã','Thú nuôi','Nông sản','Vườn cây'], 0, 'Wildlife = sinh vật hoang dã.'),
    Q('"Habitat" nghĩa là?', ['Môi trường sống','Người dân','Nhà ở người','Đường phố'], 0, 'Habitat = nơi cư trú của loài.'),
    Q('"To preserve" là?', ['Bảo tồn, giữ gìn','Phá hủy','Ô nhiễm','Bán'], 0, 'Preserve = giữ gìn nguyên trạng.'),
  ]),

  M(21, 'Unit 10 — Gerunds and Infinitives', [
    Q('"I enjoy ___ books."', ['reading','to read','read','reads'], 0, 'Enjoy + V-ing.'),
    Q('"She wants ___ a doctor."', ['to be','being','be','to being'], 0, 'Want + to V.'),
    Q('"He suggested ___ a movie."', ['watching','to watch','watch','watched'], 0, 'Suggest + V-ing.'),
    Q('"I hope ___ you soon."', ['to see','seeing','see','sees'], 0, 'Hope + to V.'),
    Q('"Stop ___!" (đừng nói chuyện nữa)', ['talking','to talk','talk','talks'], 0, 'Stop V-ing = dừng việc đang làm.'),
    Q('"He decided ___ abroad."', ['to study','studying','study','studied'], 0, 'Decide + to V.'),
  ]),

  M(22, 'Reported Speech — Questions & Commands', [
    Q('Yes/No question: "She asked, ‘Do you like coffee?’" → ?', ['She asked if I liked coffee.','She asked do I like coffee.','She asked I like coffee.','She asked if did I like coffee.'], 0, 'Dùng if/whether + S + V (lùi thì).'),
    Q('WH-question: "He asked, ‘Where do you live?’" → ?', ['He asked where I lived.','He asked where do I live.','He asked where I live.','He asked where did I live.'], 0, 'Giữ từ để hỏi + S + V (không có trợ động từ).'),
    Q('Command: "He said, ‘Open the door!’" → ?', ['He told me to open the door.','He told me open the door.','He said open the door.','He said me to open.'], 0, 'Told + O + to V.'),
    Q('Negative command: "She said, ‘Don\'t shout!’" → ?', ['She told me not to shout.','She told me don\'t shout.','She said not shout.','She told to not shout.'], 0, 'Not + to V.'),
    Q('"asked" thường dùng cho?', ['Câu hỏi','Câu khẳng định','Câu cảm thán','Câu mệnh lệnh'], 0, 'Ask dùng cho câu hỏi trong gián tiếp.'),
    Q('Lùi thì past simple → ?', ['past perfect','present perfect','past continuous','past simple'], 0, 'Past simple → past perfect.'),
  ]),

  M(23, 'Relative Clauses — Defining vs Non-defining', [
    Q('"The man ___ is wearing glasses is my uncle."', ['who','which','whose','where'], 0, 'Who: chỉ người (chủ ngữ).'),
    Q('"The book ___ I bought is interesting."', ['which/that','who','whose','where'], 0, 'Which/that: chỉ vật.'),
    Q('"The girl ___ mother is a doctor is my friend."', ['whose','who','which','where'], 0, 'Whose: chỉ sở hữu.'),
    Q('Mệnh đề quan hệ không xác định cần?', ['Dấu phẩy','Không dấu','Dấu chấm','Dấu ngoặc'], 0, 'Non-defining clause có dấu phẩy bao quanh.'),
    Q('"My father, ___ is 50, works in a bank." Chọn?', ['who','that','whose','which'], 0, 'Non-defining + người → who (không dùng that).'),
    Q('"The school ___ I studied is in Hanoi."', ['where','which','who','whose'], 0, 'Where: chỉ nơi chốn.'),
  ]),

  M(24, 'Articles — A, An, The', [
    Q('"I have ___ apple."', ['an','a','the','no article'], 0, 'Apple bắt đầu bằng nguyên âm → an.'),
    Q('"___ sun rises in the east."', ['The','A','An','—'], 0, 'Sun là duy nhất → the.'),
    Q('"She is ___ honest person."', ['an','a','the','—'], 0, '"H" câm, đọc /ɒnɪst/ → an.'),
    Q('"I like ___ music."', ['—','a','an','the'], 0, 'Music chung chung → không article.'),
    Q('"___ Eiffel Tower is in Paris."', ['The','A','An','—'], 0, 'Tên công trình nổi tiếng → the.'),
    Q('"He plays ___ guitar."', ['the','a','an','—'], 0, 'Chơi nhạc cụ → the.'),
  ]),

  M(25, 'Tenses Review — All Major Tenses', [
    Q('"I ___ to school every day."', ['go','am going','went','have gone'], 0, '"Every day" → present simple.'),
    Q('"He ___ TV when I called."', ['was watching','watched','watches','is watching'], 0, 'Hành động đang diễn ra trong quá khứ.'),
    Q('"By next year, she ___ here for 10 years."', ['will have lived','will live','has lived','lived'], 0, 'Future perfect: by + thời gian tương lai.'),
    Q('"I ___ this book before."', ['have read','read','am reading','was reading'], 0, '"Before" + kinh nghiệm → present perfect.'),
    Q('"They ___ for 2 hours when I arrived."', ['had been waiting','waited','have waited','wait'], 0, 'Past perfect continuous: hành động kéo dài đến mốc quá khứ.'),
    Q('"Tomorrow at this time, I ___ a test."', ['will be taking','will take','take','am taking'], 0, 'Future continuous: hành động đang xảy ra tại thời điểm tương lai cụ thể.'),
  ]),

  M(26, 'Comparison Structures', [
    Q('"She is ___ as her sister."', ['as tall','taller','more tall','tallest'], 0, 'As + adj + as = bằng.'),
    Q('"This is ___ book I\'ve ever read."', ['the best','best','better','well'], 0, 'So sánh nhất + ever V3.'),
    Q('"The more you practise, ___ you become."', ['the better','better','best','more better'], 0, 'Cấu trúc "the + comparative, the + comparative".'),
    Q('"He runs ___ than I do."', ['faster','more fast','fastest','fast'], 0, 'Adj 1 âm + er = faster.'),
    Q('"This problem is ___ that one."', ['less difficult than','less difficult as','lesser','little'], 0, 'Less + adj + than.'),
    Q('"Of the three boys, Tom is ___."', ['the youngest','younger','young','more young'], 0, 'So sánh nhất với "of the three".'),
  ]),

  M(27, 'Passive Voice — All Tenses', [
    Q('Hiện tại đơn bị động: is/am/are + ?', ['V3/Ved (past participle)','V-ing','V nguyên','V_s'], 0, 'Be + past participle.'),
    Q('"This house ___ in 2010." (was built / built)', ['was built','built','is built','has built'], 0, 'Quá khứ bị động: was + V3.'),
    Q('Present perfect passive: has/have been + ?', ['V3','V-ing','V nguyên','V_s'], 0, 'Have/has been + past participle.'),
    Q('"The book ___ by him." (đã được viết)', ['has been written','wrote','writes','is writing'], 0, 'Present perfect bị động.'),
    Q('Future bị động: will be + ?', ['V3','V-ing','V','V_s'], 0, 'Will be + past participle.'),
    Q('Modal bị động: must/can/should + ?', ['be + V3','V-ing','V nguyên','V_s'], 0, 'Modal + be + V3.'),
  ]),

  M(28, 'Modal Verbs — All Types (can, could, may, might)', [
    Q('"___ I borrow your pen?" (lịch sự)', ['May','Can','Must','Will'], 0, 'May lịch sự nhất.'),
    Q('"She ___ swim very well." (khả năng)', ['can','must','should','will'], 0, 'Can = có thể.'),
    Q('"It ___ rain tomorrow." (có thể)', ['might','must','should','will'], 0, 'Might = có thể/có khả năng.'),
    Q('"You ___ have told me!" (trách)', ['could','can','must','should'], 0, 'Could have + V3 = đáng lẽ đã có thể.'),
    Q('"He ___ be home now." (có thể đang)', ['may','can','will','must'], 0, 'May/might = có thể.'),
    Q('"You ___ be tired after a long trip." (chắc hẳn)', ['must','can','may','should'], 0, 'Must = chắc hẳn (suy đoán chắc chắn).'),
  ]),

  M(29, 'Vocabulary Review — All Units', [
    Q('"Recycle" = ?', ['Tái chế','Vứt bỏ','Mua','Bán'], 0, 'Re-cycle = tái chế.'),
    Q('"Volunteer" = ?', ['Tình nguyện viên','Học sinh','Khách','Bác sĩ'], 0, 'Volunteer = TNV.'),
    Q('"Composer" = ?', ['Nhà soạn nhạc','Ca sĩ','Đạo diễn','Nhạc công'], 0, 'Composer = nhà soạn nhạc.'),
    Q('"Invention" = ?', ['Phát minh','Khám phá','Sản phẩm','Quyền'], 0, 'Invent = sáng chế.'),
    Q('"Equality" = ?', ['Sự bình đẳng','Sự khác biệt','Sự đối lập','Sự giống nhau'], 0, 'Equality = bình đẳng.'),
    Q('"Renewable" = ?', ['Tái tạo','Một lần','Cũ','Hết hạn'], 0, 'Renewable = có thể tái tạo.'),
  ]),

  M(30, 'Reading Skills — Practice', [
    Q('Để tìm ý chính của đoạn văn, đọc?', ['Câu chủ đề (thường đầu/cuối đoạn)','Toàn bộ chậm','Bỏ qua','Đọc câu cuối'], 0, 'Câu chủ đề (topic sentence) chứa ý chính.'),
    Q('"Skimming" là?', ['Đọc lướt nhanh để nắm ý chính','Đọc kỹ chi tiết','Học thuộc','Phân tích từ'], 0, 'Skimming = lướt tìm ý chính.'),
    Q('"Scanning" là?', ['Tìm thông tin cụ thể nhanh','Đọc thư giãn','Đọc lướt','Đọc lại'], 0, 'Scanning = tìm chi tiết (số liệu, tên,…).'),
    Q('Khi gặp từ mới, nên?', ['Đoán nghĩa qua ngữ cảnh','Tra ngay từ điển','Bỏ qua','Học thuộc'], 0, 'Đoán theo ngữ cảnh trước khi tra.'),
    Q('Câu chủ đề thường nằm ở?', ['Đầu đoạn (thông thường)','Giữa','Cuối','Không cố định'], 0, 'Hay gặp ở đầu đoạn (deductive).'),
    Q('"Inference" trong reading là?', ['Suy luận ý ngầm','Đọc to','Học vẹt','Dịch nghĩa'], 0, 'Inference = suy luận từ ngữ cảnh.'),
  ]),

  M(31, 'Writing Skills — Essay structure', [
    Q('Một bài essay gồm?', ['Introduction + Body + Conclusion','Chỉ Body','Mở + Kết','Đoạn duy nhất'], 0, '3 phần cơ bản.'),
    Q('Topic sentence của đoạn body?', ['Câu chủ đề thể hiện ý chính của đoạn','Câu cuối','Câu giữa','Không cần'], 0, 'Topic sentence dẫn dắt ý cả đoạn.'),
    Q('"Thesis statement" là?', ['Luận điểm trung tâm của bài essay','Tên','Tiêu đề','Đoạn cuối'], 0, 'Thesis = luận đề chính trong introduction.'),
    Q('Linking words như "however, therefore, moreover" dùng để?', ['Nối ý mạch lạc','Trang trí','Làm dài','Vần điệu'], 0, 'Connectors giúp logic văn bản.'),
    Q('Conclusion cần?', ['Tóm tắt ý chính + restated thesis','Thêm ý mới','Đặt câu hỏi mở','Tả cảnh'], 0, 'Tổng kết + nhắc lại luận điểm.'),
    Q('Trong writing, "draft" là?', ['Bản nháp','Bản chính','Bản dịch','Bản in'], 0, 'Draft = bản nháp đầu.'),
  ]),

  M(32, 'Listening & Speaking Skills', [
    Q('Khi luyện nghe, nên?', ['Nghe nhiều lần, đọc transcript','Bỏ qua','Học một câu duy nhất','Chỉ đọc'], 0, 'Nghe + transcript hiệu quả.'),
    Q('Để nói tiếng Anh tốt, cần?', ['Luyện phát âm + tự tin nói','Im lặng','Học ngữ pháp duy nhất','Đọc'], 0, 'Phát âm + nói nhiều.'),
    Q('"Pronunciation" là?', ['Phát âm','Từ vựng','Ngữ pháp','Chính tả'], 0, 'Pronunciation = sự phát âm.'),
    Q('"Fluency" là?', ['Sự lưu loát','Sự chính xác','Sự nhanh','Sự chậm'], 0, 'Fluency = nói trôi chảy.'),
    Q('"Intonation" là?', ['Ngữ điệu','Phát âm','Trọng âm','Chính tả'], 0, 'Intonation = lên xuống giọng.'),
    Q('Khi nói, dùng "fillers" như "um, well, you know" để?', ['Có thời gian suy nghĩ','Giữ im lặng','Trang trí','Khoe'], 0, 'Fillers giúp duy trì lưu loát.'),
  ]),

  M(33, 'Grammar Review — All Major Points', [
    Q('Present perfect dấu hiệu?', ['since, for, just, already, yet','ago, last','tomorrow','now'], 0, 'Trạng từ đặc trưng.'),
    Q('Câu bị động cần?', ['Be + past participle','Will + V','Have + V','Be + V-ing'], 0, 'Công thức bị động.'),
    Q('Reported speech: "now" → ?', ['then','tomorrow','yesterday','today'], 0, 'Đổi trạng từ.'),
    Q('Type 2 conditional: "If I were…"', ['Were dùng cho mọi ngôi','Was cho I/he/she','Were cho they','Không có were'], 0, 'Were dùng cho tất cả ngôi trong type 2.'),
    Q('Mệnh đề quan hệ có phẩy là?', ['Non-defining','Defining','Hỗn hợp','Không có'], 0, 'Non-defining có dấu phẩy.'),
    Q('Modal "should" dùng để?', ['Khuyên','Bắt buộc','Cấm','Cho phép'], 0, 'Should = nên (lời khuyên).'),
  ]),

  M(34, 'Practice Test 1 — End of Year', [
    Q('"She ___ in Hanoi since 2010."', ['has lived','lived','is living','lives'], 0, 'Since → present perfect.'),
    Q('"The thief ___ by the police yesterday."', ['was caught','caught','catches','is caught'], 0, 'Quá khứ bị động.'),
    Q('"If I ___ you, I would study harder."', ['were','am','was','will be'], 0, 'Type 2: were với mọi ngôi.'),
    Q('"He asked me what time ___."', ['it was','it is','is it','was it'], 0, 'Indirect question: WH + S + V.'),
    Q('"The book ___ I read was great."', ['that/which','who','whose','where'], 0, 'Vật → that/which.'),
    Q('"___ pollute the environment is wrong."', ['To','For','In','At'], 0, 'To + V nguyên ở đầu câu = chủ ngữ.'),
  ]),

  M(35, 'Practice Test 2 — Final Review', [
    Q('"Where ___ you born?"', ['were','was','are','is'], 0, 'Bị động quá khứ + you → were.'),
    Q('"I wish I ___ more time."', ['had','have','will have','has'], 0, 'Wish + past simple = ước hiện tại.'),
    Q('"Tom is ___ student in his class."', ['the most intelligent','more intelligent','most intelligent','intelligent'], 0, 'So sánh nhất với adj dài: the most + adj.'),
    Q('"He ___ his homework before his mother came home."', ['had done','did','has done','was doing'], 0, 'Past perfect cho hành động trước past simple.'),
    Q('"I look forward to ___ you soon."', ['seeing','see','to see','saw'], 0, 'Look forward to + V-ing.'),
    Q('Synonyms of "happy"?', ['glad, joyful, cheerful','sad, angry','tired, bored','sick, weak'], 0, 'Các từ đồng nghĩa của happy.'),
  ]),
];

export const H10TA_SCENARIOS = indexBy(H10TA_WEEKS);
