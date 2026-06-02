// ============================================================
// Lớp 12 · TIẾNG ANH (Global Success) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 + ôn thi tốt nghiệp THPT (tenses, passive, reported, conditionals,
// modals perfect, inversion, cleft, relatives, reduced, articles, phrasal verbs).
// ID prefix: "H12TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12TA', 'tieng-anh', n, title, qs, opts);

export const H12TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Unit 1 — Life Stories (Vocabulary + Past tenses)', [
    Q('"She ___ in Hanoi for ten years before she moved to Saigon."', ['lived','had lived','has lived','was living'], 1, 'Quá khứ hoàn thành (had + V3) cho hành động xảy ra trước một mốc quá khứ khác (before she moved).'),
    Q('A person who has achieved great success and is admired is called a(n) ___.', ['icon','idol','figure','figurehead'], 0, 'Icon - người nổi tiếng được nhiều người ngưỡng mộ, có tầm ảnh hưởng văn hoá.'),
    Q('"While I ___ dinner, the lights went out."', ['cooked','was cooking','had cooked','have cooked'], 1, 'Past continuous (was/were V-ing) cho hành động đang diễn ra thì bị một hành động khác chen vào.'),
    Q('"Marie Curie was the first woman ___ the Nobel Prize."', ['won','winning','to win','wins'], 2, 'Cấu trúc the first/second/last + N + to V (nguyên thể chỉ mục đích/đặc điểm).'),
    Q('"He ___ as a doctor since he graduated."', ['works','has been working','worked','was working'], 1, 'Present perfect continuous (has been V-ing) cho hành động bắt đầu trong quá khứ và còn tiếp diễn.'),
    Q('Synonym of "perseverance" is ___.', ['laziness','persistence','weakness','luck'], 1, 'Perseverance = persistence: sự kiên trì, bền bỉ.'),
  ]),

  M(2, 'Unit 1 — Life Stories (Reported speech basics)', [
    Q('Direct: "I am happy", she said. → Reported: She said (that) ___.', ['she is happy','she was happy','she were happy','she has been happy'], 1, 'Khi đổi sang tường thuật, lùi 1 thì: am/is → was.'),
    Q('"Where do you live?" he asked. → He asked me where ___.', ['do I live','I live','I lived','did I live'], 2, 'Câu hỏi tường thuật: dùng trật tự khẳng định + lùi thì (do you live → I lived).'),
    Q('"Don\'t open the window," she told him. → She told him ___ the window.', ['not to open','to not open','don\'t open','no opening'], 0, 'Mệnh lệnh phủ định tường thuật: told sb NOT TO V.'),
    Q('"Can you help me?" she asked. → She asked if I ___ help her.', ['can','could','will','would'], 1, 'Yes/no question tường thuật: dùng if/whether + lùi thì can → could.'),
    Q('Reported: "I will call you tomorrow." → He said he ___ call me ___.', ['will/tomorrow','would/the next day','would/tomorrow','will/the next day'], 1, 'Will → would; tomorrow → the next day/the following day.'),
    Q('"I have finished my homework," he said. → He said (that) he ___ his homework.', ['finished','has finished','had finished','finishes'], 2, 'Present perfect → past perfect khi tường thuật.'),
  ]),

  M(3, 'Unit 2 — Urbanisation (Vocabulary + Present perfect)', [
    Q('"The population of this city ___ rapidly in the last decade."', ['grew','has grown','grows','is growing'], 1, '"In the last decade" - dấu hiệu present perfect (has/have V3).'),
    Q('"Urbanisation" refers to the process of ___.', ['people moving from cities to rural areas','people moving from rural areas to cities','building rural areas','reducing city populations'], 1, 'Urbanisation = đô thị hoá - dân chuyển từ nông thôn ra thành thị.'),
    Q('A negative effect of urbanisation is ___.', ['better education','overcrowding','more jobs','modern facilities'], 1, 'Overcrowding (quá tải dân số) là hệ quả tiêu cực của đô thị hoá.'),
    Q('"How long ___ you ___ in this neighbourhood?"', ['have/lived','do/live','did/live','are/living'], 0, 'Câu hỏi với "how long" + present perfect (have you lived).'),
    Q('Synonym of "infrastructure" is ___.', ['decoration','public facilities','furniture','population'], 1, 'Infrastructure = các cơ sở vật chất công cộng (đường, điện, nước…).'),
    Q('"The government has ___ new policies to ease traffic congestion."', ['introduced','introduce','introducing','to introduce'], 0, 'Has + V3 (introduced) - present perfect.'),
  ]),

  M(4, 'Unit 2 — Comparatives + Quantifiers', [
    Q('"The traffic in Hanoi is ___ than in my hometown."', ['worse','worst','more bad','badder'], 0, 'So sánh hơn của "bad" là "worse" (bất quy tắc).'),
    Q('"The more people move to the city, ___."', ['the more crowded it becomes','the crowded more it becomes','more crowded it becomes','the most crowded it becomes'], 0, 'Cấu trúc "The + comp ..., the + comp ...": càng ... càng ...'),
    Q('"There are ___ skyscrapers in Tokyo than in Hanoi."', ['much','many','more','most'], 2, 'So sánh hơn của "many": more (skyscrapers - đếm được số nhiều).'),
    Q('"___ pollution in big cities is harmful to health."', ['A','An','The','∅ (no article)'], 3, 'Pollution - danh từ trừu tượng không đếm được, nói chung không cần mạo từ.'),
    Q('"This is ___ city I have ever visited."', ['the more modern','the modernest','the most modern','more modern'], 2, '"Ever" - dấu hiệu so sánh nhất + present perfect.'),
    Q('"There aren\'t ___ green spaces in this district."', ['much','many','a lot','few'], 1, '"Green spaces" - đếm được số nhiều, dùng "many" trong câu phủ định.'),
  ]),

  M(5, 'Unit 3 — The Green Movement (Vocabulary + Passive)', [
    Q('"Trees ___ to absorb carbon dioxide."', ['plant','are planted','planting','were planting'], 1, 'Bị động hiện tại đơn: are/is + V3 (are planted).'),
    Q('"Renewable energy" is energy from sources that ___.', ['will run out','cannot be replaced','can be replenished naturally','are polluting'], 2, 'Renewable - tái tạo được, có thể bổ sung tự nhiên (mặt trời, gió…).'),
    Q('"A lot of waste ___ into the river by factories last year."', ['was dumped','were dumped','dumped','is dumped'], 0, '"Waste" - danh từ không đếm được → was + V3; "last year" → quá khứ.'),
    Q('Synonym of "to reduce" is ___.', ['increase','cut down on','expand','double'], 1, '"Cut down on" = giảm bớt, hạn chế (phrasal verb phổ biến).'),
    Q('"Plastic bags should ___ to protect the environment."', ['be banned','being banned','ban','to ban'], 0, 'Modal + bị động: should + be + V3.'),
    Q('"Recycling" means ___.', ['throwing away rubbish','converting waste into reusable materials','burning waste','burying waste'], 1, 'Recycling - tái chế - biến rác thải thành nguyên liệu sử dụng lại.'),
  ]),

  M(6, 'Unit 3 — Passive in all tenses', [
    Q('"The report ___ by the time you arrive tomorrow."', ['will be finished','will have been finished','is being finished','will finish'], 1, '"By the time" + future → future perfect; bị động: will have been + V3.'),
    Q('"This building ___ since 2010."', ['has been used','has used','used','is used'], 0, '"Since" - present perfect; bị động: has been + V3.'),
    Q('"The trees ___ planted right now."', ['are being','are been','being','are be'], 0, 'Present continuous passive: am/is/are + being + V3.'),
    Q('"The proposal ___ when I came in."', ['was being discussed','was discussed','had been discussed','is discussed'], 0, 'Past continuous passive: was/were + being + V3 - mô tả việc đang diễn ra trong quá khứ.'),
    Q('"They say that he is a great leader." → He ___ to be a great leader.', ['is said','says','is saying','said'], 0, 'Bị động câu "They say that S + V": S + is said + to V (hiện tại).'),
    Q('"Carbon emissions need ___ urgently."', ['to reduce','to be reduced','reducing','be reduced'], 1, '"Need to V" - chủ ngữ chịu tác động → need to be V3 (bị động).'),
  ]),

  M(7, 'Unit 4 — The Mass Media (Vocabulary + Conditionals 1-2)', [
    Q('"If it ___ tomorrow, we will cancel the trip."', ['rains','will rain','rained','would rain'], 0, 'Conditional type 1: If + present simple, ... will + V.'),
    Q('"If I ___ you, I would buy that newspaper."', ['am','were','was','be'], 1, 'Conditional type 2: If I were you (giả định không thực ở hiện tại).'),
    Q('"Social media" refers to ___.', ['printed newspapers','online platforms for sharing content','radio stations','television channels'], 1, 'Social media - mạng xã hội: nền tảng trực tuyến để chia sẻ nội dung.'),
    Q('Synonym of "broadcast" is ___.', ['print','transmit','hide','delete'], 1, 'Broadcast (phát sóng) = transmit (truyền).'),
    Q('"A ___ is someone who writes news articles for a newspaper."', ['editor','journalist','reader','publisher'], 1, 'Journalist - nhà báo, người viết tin bài.'),
    Q('"If she had a smartphone, she ___ check her email anywhere."', ['can','could','will','would'], 3, 'Conditional type 2: If + V-ed, ... would + V (giả định không thực hiện tại).'),
  ]),

  M(8, 'Unit 4 — Conditionals 3 + Mixed', [
    Q('"If I ___ harder, I would have passed the exam."', ['studied','had studied','have studied','study'], 1, 'Type 3: If + had V3, ... would have V3 (giả định trái với quá khứ).'),
    Q('"If she had taken the job, she ___ rich now."', ['would be','would have been','will be','is'], 0, 'Mixed conditional: If + had V3 (quá khứ), ... would V (hiện tại).'),
    Q('"If I were taller, I ___ a basketball player."', ['would have been','would be','will be','am'], 1, 'Type 2: If + V-ed, ... would + V (kết quả ở hiện tại).'),
    Q('"___ I known about the meeting, I would have come."', ['If','Had','Should','Were'], 1, 'Đảo ngữ type 3: Had + S + V3, ... (lược bỏ "if").'),
    Q('"___ it not been for her help, I would have failed."', ['If','Had','Were','Should'], 1, 'Đảo ngữ "If it had not been for X" = "Had it not been for X" (nếu không nhờ).'),
    Q('Conditional type 0 expresses ___.', ['imaginary present','imaginary past','general truths/facts','future plans'], 2, 'Type 0: If + present, ... + present - sự thật, quy luật (If you heat water, it boils).'),
  ]),

  M(9, 'Unit 5 — Cultural Identity (Vocabulary + Modal verbs)', [
    Q('"You ___ remove your shoes when entering a Vietnamese house."', ['should','can','might','need'], 0, 'Should - lời khuyên/phong tục lịch sự.'),
    Q('"Cultural identity" refers to ___.', ['national flag only','sense of belonging to a culture/community','language only','religion only'], 1, 'Cultural identity - bản sắc văn hoá: cảm thức thuộc về một nền văn hoá/cộng đồng.'),
    Q('"You ___ be quiet in the library." (obligation)', ['must','can','may','could'], 0, 'Must - bắt buộc, quy định.'),
    Q('"He ___ speak five languages fluently."', ['can','must','should','will'], 0, 'Can - khả năng.'),
    Q('Synonym of "preserve" is ___.', ['destroy','protect','ignore','sell'], 1, 'Preserve = protect (bảo tồn, giữ gìn).'),
    Q('"In some cultures, it is rude ___ during meals."', ['to talk loudly','talk loudly','talking loudly','talked loudly'], 0, 'Cấu trúc "It is + adj + to V".'),
  ]),

  M(10, 'Unit 5 — Modal perfect (must/should/could have V3)', [
    Q('"He looks tired. He ___ all night."', ['must work','must have worked','must working','must to work'], 1, 'Must + have + V3 - suy đoán chắc chắn về quá khứ.'),
    Q('"You ___ told me earlier. Now it\'s too late."', ['should','should have','should be','must have'], 1, 'Should have V3 - đáng lẽ phải làm (nhưng đã không) - hối tiếc/trách móc nhẹ.'),
    Q('"I ___ have left my keys at home; I can\'t find them."', ['must','should','can','might'], 3, 'Might/could/may + have V3 - phỏng đoán không chắc về quá khứ.'),
    Q('"She ___ have known the answer; she didn\'t prepare."', ['must','can\'t','should','might'], 1, 'Can\'t/couldn\'t + have V3 - chắc chắn không xảy ra trong quá khứ.'),
    Q('"You ___ have eaten so much. Now you feel sick."', ['shouldn\'t','must not','can\'t','won\'t'], 0, 'Shouldn\'t have V3 - đáng lẽ không nên (đã làm rồi - hối tiếc).'),
    Q('"They ___ have arrived already; the lights are on."', ['must','should','can\'t','wouldn\'t'], 0, 'Must have V3 - suy đoán chắc chắn dựa trên bằng chứng (đèn sáng).'),
  ]),

  M(11, 'Unit 6 — Endangered Species (Vocabulary + Relative clauses)', [
    Q('"The Saola is a rare animal ___ lives only in Vietnam and Laos."', ['who','which','where','whose'], 1, 'Which - đại từ quan hệ cho vật/động vật làm chủ ngữ.'),
    Q('"Endangered species" are species that ___.', ['are extinct','are at risk of extinction','have recovered','are common'], 1, 'Endangered - có nguy cơ tuyệt chủng (nhưng chưa tuyệt chủng - extinct).'),
    Q('"This is the reserve ___ many rare animals are protected."', ['which','that','where','who'], 2, 'Where - trạng ngữ chỉ nơi chốn.'),
    Q('"The scientist ___ research has saved many species is famous."', ['who','whom','whose','which'], 2, 'Whose - sở hữu cách dùng cho người (whose research = his research).'),
    Q('"Deforestation" means ___.', ['planting trees','cutting down forests','protecting forests','growing crops'], 1, 'Deforestation - phá rừng, chặt phá rừng.'),
    Q('Defining vs non-defining relative clauses differ in ___.', ['use of commas','length','tense','meaning'], 0, 'Non-defining clause được đặt giữa hai dấu phẩy, defining thì không.'),
  ]),

  M(12, 'Unit 6 — Reduced relative clauses', [
    Q('"The man ___ standing over there is my teacher." (Rút gọn từ "who is standing")', ['is','was','to stand','standing'], 3, 'Rút gọn mệnh đề chủ động: bỏ "who/which is" → giữ V-ing.'),
    Q('"The book ___ on the shelf belongs to me." (Rút gọn "which is placed")', ['placed','placing','to place','places'], 0, 'Rút gọn mệnh đề bị động: bỏ "which/who is" → giữ V-ed/V3.'),
    Q('"The candidates ___ for the job will be informed soon."', ['selecting','selected','to select','select'], 1, 'Bị động (được chọn) → V3 (selected).'),
    Q('"The first person ___ this competition will win a prize."', ['winning','won','to win','wins'], 2, 'The first/last/only + to V (nguyên thể).'),
    Q('"Animals ___ in the wild are often more aggressive."', ['lived','living','to live','live'], 1, 'Chủ động (sống) → V-ing (living).'),
    Q('"There are many things ___ in this museum."', ['seeing','to see','seen','to seeing'], 1, 'To + V chỉ mục đích/đặc điểm sau "things/something".'),
  ]),

  M(13, 'Unit 7 — Artificial Intelligence (Vocabulary + Future tenses)', [
    Q('"By 2030, AI ___ many human tasks."', ['will replace','will have replaced','replaces','is replacing'], 1, '"By + future time" → future perfect (will have + V3).'),
    Q('"Artificial Intelligence" refers to ___.', ['machines that simulate human intelligence','only robots','natural intelligence','human brains'], 0, 'AI - trí tuệ nhân tạo: máy mô phỏng trí thông minh con người.'),
    Q('"At this time next year, I ___ at a tech company."', ['will work','will be working','work','am working'], 1, '"At this time + future" → future continuous (will be V-ing).'),
    Q('"I think robots ___ humans in many jobs soon."', ['replace','will replace','are replacing','replaced'], 1, '"I think + future" → will + V (dự đoán).'),
    Q('Synonym of "automate" is ___.', ['manually do','mechanise','slow down','complicate'], 1, 'Automate (tự động hoá) = mechanise (cơ giới hoá).'),
    Q('"We ___ a new AI system next month."', ['launch','will launch','are launching','launched'], 1, 'Will + V cho kế hoạch tương lai chưa chắc chắn; "are launching" cũng đúng nếu sắp xếp.'),
  ]),

  M(14, 'Unit 7 — Inversion (Hardly, Not until, No sooner)', [
    Q('"Hardly ___ when the phone rang."', ['I had sat','had I sat','I sat','did I sit'], 1, 'Hardly + had + S + V3 ... when + S + V-ed: vừa mới ... thì ...'),
    Q('"Not until 1986 ___ economic reforms in Vietnam."', ['did begin','did begin','began','did ... begin'], 3, 'Not until + time + did + S + V (đảo ngữ).'),
    Q('"No sooner ___ home than it started to rain."', ['had I arrived','I had arrived','I arrived','did I arrive'], 0, 'No sooner + had + S + V3 ... than + S + V-ed.'),
    Q('"Never ___ such a beautiful sight!"', ['I have seen','have I seen','I had seen','do I see'], 1, 'Never + have + S + V3 (đảo ngữ).'),
    Q('"Only by working hard ___ achieve success."', ['you can','can you','you could','could you'], 1, 'Only by + V-ing + can/could + S + V (đảo ngữ).'),
    Q('"Seldom ___ to the cinema these days."', ['I go','do I go','go I','I do go'], 1, 'Seldom/rarely + do/does + S + V (đảo ngữ).'),
  ]),

  M(15, 'Unit 8 — The World of Work (Vocabulary + Articles)', [
    Q('"She wants to become ___ engineer."', ['a','an','the','∅'], 1, 'An - đứng trước danh từ bắt đầu bằng nguyên âm (engineer).'),
    Q('"___ unemployment rate has risen recently."', ['A','An','The','∅'], 2, 'The - dùng cho đối tượng xác định (tỉ lệ thất nghiệp cụ thể).'),
    Q('A "resume" or "CV" is ___.', ['a letter of complaint','a document summarising one\'s qualifications','a job advertisement','a contract'], 1, 'CV/Resume - tài liệu tóm tắt trình độ, kinh nghiệm xin việc.'),
    Q('"I went to ___ university to study English."', ['a','an','the','∅'], 0, '"University" bắt đầu bằng âm /j/ - phụ âm → dùng "a".'),
    Q('Synonym of "salary" is ___.', ['fee','wage','tip','fine'], 1, 'Salary (lương cố định) ≈ wage (lương theo giờ/tuần).'),
    Q('"___ honesty is the best policy."', ['A','An','The','∅'], 3, 'Danh từ trừu tượng nói chung không cần mạo từ.'),
  ]),

  M(16, 'Unit 8 — Phrasal verbs at work', [
    Q('"She has decided to ___ applying for the job."', ['look forward','give up','go on','take after'], 1, 'Give up - từ bỏ.'),
    Q('"He ___ his father in appearance."', ['takes after','takes off','takes up','takes in'], 0, 'Take after - giống (cha mẹ về ngoại hình/tính cách).'),
    Q('"The interview was ___ until Monday."', ['put off','put on','put up','put down'], 0, 'Put off - hoãn lại.'),
    Q('"Please ___ this form before submitting."', ['fill in','fill up','fill out','both A and C'], 3, 'Fill in/fill out - điền thông tin vào (form).'),
    Q('"He was ___ from the company due to misconduct."', ['laid off','laid out','laid up','laid down'], 0, 'Laid off - bị cho nghỉ việc (thường vì lí do kinh tế); fired - bị sa thải có lỗi.'),
    Q('"I\'m looking ___ to hearing from you."', ['for','after','forward','up'], 2, 'Look forward to + V-ing/N - mong chờ.'),
  ]),

  M(17, 'Unit 9 — Choosing a Career (Cleft sentences)', [
    Q('"It was John ___ helped me with my homework."', ['that','what','which','where'], 0, 'Cleft "It is/was + N + that + V": who/that cho người.'),
    Q('"It is ___ that motivates me most." (Nhấn mạnh chính tiền bạc)', ['by money','for money','money','to money'], 2, 'It is + nhấn mạnh + that + S V: "money" được nhấn mạnh.'),
    Q('"___ I really want is a stable job."', ['That','What','Which','Where'], 1, 'What-cleft: What + clause + is/are + thing emphasised.'),
    Q('"It was in 2020 ___ she started her own business."', ['that','when','which','where'], 0, 'Cleft với thời gian: it was + time + that + ...'),
    Q('"It is teamwork ___ leads to success in this company."', ['who','that','where','what'], 1, 'It-cleft với "teamwork" (không phải người) → that/which.'),
    Q('"All ___ matters is your effort."', ['that','what','which','who'], 0, 'Sau "all" dùng "that" (không dùng "what").'),
  ]),

  M(18, 'Ôn tập HK1 — Mid-term review', [
    Q('"If I ___ enough money, I would buy a new laptop."', ['have','had','will have','would have'], 1, 'Type 2: If + V-ed (had), ... would + V.'),
    Q('"He said he ___ working there since 2018."', ['has been','had been','was','is'], 1, 'Reported speech: lùi present perfect → past perfect (had been).'),
    Q('"The book ___ now belongs to me." (đang được đọc)', ['being read','read','reading','to read'], 0, 'Reduced relative clause bị động liên tục: being + V3.'),
    Q('"She ___ have told him the truth, but she didn\'t."', ['must','should','can','will'], 1, 'Should have V3 - đáng lẽ phải làm.'),
    Q('"Not only ___ English, but he also speaks French."', ['he speaks','does he speak','he is speaking','can he speak'], 1, 'Not only + đảo ngữ + ..., but ... also: does + S + V.'),
    Q('"Hardly ever ___ to the beach."', ['I go','do I go','I do go','goes I'], 1, 'Hardly ever - trạng từ phủ định → đảo ngữ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 10 — Lifelong Learning (Gerunds vs infinitives)', [
    Q('"I enjoy ___ books in my free time."', ['read','to read','reading','reads'], 2, 'Enjoy + V-ing (gerund).'),
    Q('"She decided ___ a foreign language."', ['learn','to learn','learning','learns'], 1, 'Decide + to V (infinitive).'),
    Q('"Lifelong learning" means ___.', ['learning only in school','continuous learning throughout life','learning a specific subject','learning quickly'], 1, 'Lifelong learning - học tập suốt đời.'),
    Q('"He stopped ___ when he saw the red light." (mục đích)', ['smoking','to smoke','smoke','smoked'], 1, 'Stop to V - dừng lại để làm gì; stop V-ing - bỏ làm gì.'),
    Q('"I forgot ___ the door this morning." (việc cần làm nhưng quên)', ['locking','to lock','lock','locked'], 1, 'Forget to V - quên (chưa làm); forget V-ing - quên (đã làm).'),
    Q('"It\'s no use ___ over spilt milk."', ['cry','to cry','crying','cried'], 2, 'It\'s no use + V-ing - không ích gì khi làm.'),
  ]),

  M(20, 'Unit 10 — Advanced vocabulary on education', [
    Q('A person who never stops learning is called a ___.', ['lifelong learner','dropout','illiterate','procrastinator'], 0, 'Lifelong learner - người học tập suốt đời.'),
    Q('Synonym of "acquire knowledge" is ___.', ['gain knowledge','lose knowledge','forget','reject'], 0, 'Acquire = gain (đạt được, thu được).'),
    Q('"MOOC" stands for ___.', ['Massive Open Online Course','My Online Open Class','Multiple Online Optional Course','Mass Open Offline Course'], 0, 'MOOC - khoá học mở trực tuyến đại trà (Coursera, edX…).'),
    Q('"To brush up on" something means to ___.', ['ignore','review and improve','forget','start fresh'], 1, 'Brush up on - ôn lại, cải thiện kĩ năng cũ.'),
    Q('"Self-study" means studying ___.', ['with a teacher','on your own','in a group','online only'], 1, 'Self-study - tự học (không có giáo viên trực tiếp).'),
    Q('"He has a thirst ___ knowledge."', ['for','of','about','to'], 0, 'A thirst FOR knowledge - khao khát kiến thức (collocation).'),
  ]),

  M(21, 'Tenses comprehensive review', [
    Q('"By next year, I ___ here for ten years."', ['will work','will be working','will have worked','will have been working'], 3, 'Will have been V-ing + for + duration: future perfect continuous (đặc biệt với động từ chỉ trạng thái + duration → cũng có thể dùng future perfect).'),
    Q('"While she ___ TV, the phone rang."', ['watched','was watching','had watched','watches'], 1, 'Past continuous (was V-ing) + when/while + past simple.'),
    Q('"I ___ him since we were children."', ['know','have known','am knowing','knew'], 1, 'Since + duration → present perfect; "know" là động từ trạng thái → không dùng tiếp diễn.'),
    Q('"They ___ for an hour before the bus arrived."', ['had been waiting','were waiting','have been waiting','waited'], 0, 'Past perfect continuous (had been V-ing) cho hành động kéo dài trước một mốc quá khứ.'),
    Q('"Look at those clouds! It ___ rain."', ['will','is going to','rains','is raining'], 1, 'Be going to - dự đoán dựa trên bằng chứng hiện tại (mây đen).'),
    Q('"The train ___ at 7:30 every morning."', ['leaves','is leaving','will leave','left'], 0, 'Lịch trình cố định → present simple.'),
  ]),

  M(22, 'Passive voice — all tenses review', [
    Q('"The bridge ___ next year." (sẽ được xây)', ['will build','will be built','is built','was built'], 1, 'Future simple passive: will + be + V3.'),
    Q('"My car ___ at the moment." (đang được sửa)', ['is repairing','is being repaired','repaired','has repaired'], 1, 'Present continuous passive: am/is/are + being + V3.'),
    Q('"The letter ___ by my friend last week."', ['was written','was being written','has been written','wrote'], 0, 'Past simple passive: was/were + V3.'),
    Q('"This song ___ by millions of people." (đã được nghe)', ['has heard','has been heard','heard','is hearing'], 1, 'Present perfect passive: has/have + been + V3.'),
    Q('"People believe that he is innocent." → He ___ to be innocent.', ['is believed','believes','believed','was believed'], 0, 'Mẫu "People believe that S V" → "S is believed to V".'),
    Q('"This work ___ by tomorrow." (sẽ đã được hoàn thành)', ['will finish','will have been finished','was finished','will be finishing'], 1, 'Future perfect passive: will have been + V3.'),
  ]),

  M(23, 'Reported speech — questions + commands', [
    Q('"What time does the meeting start?" → He asked me what time ___.', ['the meeting started','does the meeting start','the meeting starts','did the meeting start'], 0, 'Reported question (Wh): trật tự khẳng định + lùi thì.'),
    Q('"Will you come to my party?" → She asked me if I ___ to her party.', ['will come','would come','came','come'], 1, 'Yes/no question reported: if + lùi will → would.'),
    Q('"Please don\'t be late," he said. → He asked us ___ late.', ['don\'t be','to not be','not to be','to be not'], 2, 'Mệnh lệnh phủ định reported: asked sb NOT TO + V.'),
    Q('"Let\'s go for a walk," she said. → She suggested ___ for a walk.', ['to go','going','that we go','both B and C'], 3, 'Suggest + V-ing hoặc Suggest that S (should) V.'),
    Q('"Did you finish your homework?" → He asked me if I ___ my homework.', ['finished','had finished','have finished','was finishing'], 1, 'Past simple → past perfect khi reported.'),
    Q('"Don\'t touch this!" the teacher shouted. → The teacher told us ___.', ['don\'t touch this','to not touch that','not to touch this','not to touch that'], 3, 'Negative imperative reported: not to V + đổi "this" → "that".'),
  ]),

  M(24, 'Conditionals — all types review', [
    Q('"If you ___ ice, it ___."', ['heat/melts','heated/would melt','heat/will melt','will heat/melts'], 0, 'Type 0 (chân lí khoa học): If + present, ... + present.'),
    Q('"If it rains tomorrow, we ___ the picnic."', ['cancel','will cancel','would cancel','would have cancelled'], 1, 'Type 1: If + present, ... will + V.'),
    Q('"If I ___ a millionaire, I would travel the world."', ['am','was','were','will be'], 2, 'Type 2: If + were (thay was sau I/he/she).'),
    Q('"If she ___ harder, she would have passed."', ['studied','had studied','has studied','studies'], 1, 'Type 3: If + had V3, ... would have V3.'),
    Q('"If you had told me earlier, I ___ here now."', ['would be','would have been','will be','am'], 0, 'Mixed: If + had V3 (past), ... would V (present).'),
    Q('"Were I ___, I would invest in this company." (đảo ngữ type 2)', ['rich','to be rich','being rich','rich is'], 0, 'Đảo ngữ type 2: Were + S + adj/N: nếu là.'),
  ]),

  M(25, 'Modal verbs — present + perfect form', [
    Q('"You ___ smoke here. It\'s prohibited."', ['mustn\'t','needn\'t','don\'t have to','shouldn\'t'], 0, 'Mustn\'t - cấm tuyệt đối.'),
    Q('"You ___ pay; the entrance is free."', ['mustn\'t','don\'t have to','can\'t','shouldn\'t'], 1, 'Don\'t have to - không cần (không bắt buộc).'),
    Q('"He ___ have been at home. I saw him at the office."', ['must','can\'t','should','might'], 1, 'Can\'t have V3 - chắc chắn không (suy đoán phủ định về quá khứ).'),
    Q('"She ___ have left already; her bag is here."', ['must','can\'t','should','might'], 1, '"Can\'t have left" - không thể đã rời đi (bằng chứng: bag vẫn ở đây).'),
    Q('"They ___ have warned us about the danger!" (hối tiếc)', ['must','can','should','will'], 2, 'Should have V3 - đáng lẽ phải làm (trách móc).'),
    Q('"He ___ have missed the train; he\'s usually punctual."', ['must','can\'t','should','might'], 1, '"Can\'t have missed" - khó tin rằng anh ấy đã lỡ tàu.'),
  ]),

  M(26, 'Inversion + Cleft sentences review', [
    Q('"Rarely ___ such a delicious meal."', ['I have had','have I had','I had','did I have'], 1, 'Rarely + auxiliary + S + V (đảo ngữ).'),
    Q('"Only when he apologised ___ him."', ['I forgave','did I forgive','I had forgiven','do I forgive'], 1, 'Only + adverbial → đảo ngữ ở mệnh đề chính.'),
    Q('"It was at the party ___ I met her."', ['that','where','when','which'], 0, 'It-cleft: it was + adverbial + that + clause.'),
    Q('"What I need is ___."', ['some rest','to some rest','some rest is','having rest'], 0, 'What-cleft: What + clause + is + thing emphasised.'),
    Q('"___ such a problem!" (Never have I seen)', ['Never I have seen','Never have I seen','Never seen I have','Never had I seen'], 1, 'Never + have + S + V3 (đảo ngữ).'),
    Q('"Little ___ that he was lying."', ['I knew','did I know','I had known','do I know'], 1, 'Little (= không hề) + đảo ngữ trợ động từ.'),
  ]),

  M(27, 'Relative clauses + reduced clauses review', [
    Q('"The man ___ car was stolen called the police."', ['who','whom','whose','that'], 2, 'Whose - sở hữu (his car = whose car).'),
    Q('"The students ___ in the front row are the best."', ['sitting','sat','to sit','sits'], 0, 'Rút gọn "who are sitting" → sitting (V-ing chủ động).'),
    Q('"The bridge ___ in 1990 collapsed last week."', ['built','building','to build','was built'], 0, 'Rút gọn "which was built" → built (V3 bị động).'),
    Q('"This is the village ___ I grew up."', ['which','that','where','who'], 2, 'Where = in which - chỉ nơi chốn.'),
    Q('"London, ___ is the capital of England, is a beautiful city."', ['which','that','where','who'], 0, 'Non-defining clause cho vật → which (không dùng that, có dấu phẩy).'),
    Q('"The reason ___ I came is to see you."', ['which','why','where','that'], 1, 'Why = for which - chỉ lí do.'),
  ]),

  M(28, 'Articles (a/an/the/∅) practice', [
    Q('"___ Eiffel Tower is in Paris."', ['A','An','The','∅'], 2, 'The - dùng cho danh từ riêng địa danh nổi tiếng (tháp, sông, biển…).'),
    Q('"I had ___ apple and ___ banana for breakfast."', ['a/a','an/a','an/an','a/an'], 1, 'An + apple (nguyên âm), a + banana (phụ âm).'),
    Q('"___ Mount Everest is the highest mountain."', ['A','The','∅','An'], 2, 'Tên núi đơn lẻ không dùng "the".'),
    Q('"She plays ___ piano very well."', ['a','an','the','∅'], 2, 'The + nhạc cụ (the piano, the guitar).'),
    Q('"He went to ___ school by bus." (đi học)', ['a','an','the','∅'], 3, '"Go to school" - chỉ mục đích học → không mạo từ.'),
    Q('"___ rich should help ___ poor." (giai cấp)', ['A/a','An/an','The/the','∅/∅'], 2, 'The + adj = nhóm người (the rich, the poor, the elderly).'),
  ]),

  M(29, 'Phrasal verbs comprehensive', [
    Q('"I came ___ an interesting article in the newspaper."', ['across','about','off','up'], 0, 'Come across - tình cờ gặp/thấy.'),
    Q('"The meeting was ___ due to bad weather."', ['called off','called on','called up','called for'], 0, 'Call off - huỷ bỏ.'),
    Q('"Please ___ smoking; it\'s bad for your health."', ['give up','give in','give away','give back'], 0, 'Give up - từ bỏ (thói quen).'),
    Q('"We need to ___ our weak points."', ['work out','work on','work at','work in'], 1, 'Work on - cải thiện, làm việc với.'),
    Q('"He always ___ his promises."', ['keeps to','keeps on','keeps up with','keeps in'], 0, 'Keep to - giữ (lời hứa, kế hoạch).'),
    Q('"Please ___ the radio; I can\'t hear."', ['turn on','turn up','turn down','turn off'], 1, 'Turn up - tăng âm lượng; turn on - bật; turn down - giảm.'),
  ]),

  M(30, 'Vocabulary in context — reading practice', [
    Q('"The festival ___ tourists from all over the world."', ['attacks','attracts','retracts','contracts'], 1, 'Attract - thu hút (collocation: attract tourists/attention).'),
    Q('"Her speech had a strong ___ on the audience."', ['affect','effect','infect','defect'], 1, 'Effect (n) - tác động; affect (v) - tác động đến.'),
    Q('"Vietnam has a rich ___ heritage."', ['culture','cultural','culturally','culturalism'], 1, 'Cultural (adj) - văn hoá, bổ nghĩa cho "heritage".'),
    Q('"The new policy will benefit ___ farmers."', ['low-income','low-incomed','low-incoming','low-incomes'], 0, 'Tính từ ghép "low-income" - thu nhập thấp.'),
    Q('"He gave a ___ description of the event."', ['detail','detailed','details','detailing'], 1, 'Detailed (adj) - chi tiết, bổ nghĩa cho description.'),
    Q('"We need to take ___ action to solve this problem."', ['immediate','immediately','immediacy','immediating'], 0, 'Immediate (adj) - ngay lập tức, bổ nghĩa cho "action".'),
  ]),

  M(31, 'Writing — common mistakes', [
    Q('Choose the correct sentence:', ['I look forward to hear from you.','I look forward to hearing from you.','I look forward hearing from you.','I look forward hear from you.'], 1, 'Look forward TO + V-ing (to là giới từ).'),
    Q('"In spite of ___ tired, he kept working."', ['he was','being','he is','was'], 1, 'In spite of + N/V-ing (không phải mệnh đề).'),
    Q('"Although ___, he kept working."', ['being tired','tired','he was tired','he tired'], 2, 'Although + clause (S + V).'),
    Q('Choose correct: "She is good ___ math."', ['in','at','on','for'], 1, 'Good AT + skill/subject (collocation).'),
    Q('"He is interested ___ history."', ['in','at','on','for'], 0, 'Interested IN + topic.'),
    Q('"___ his hard work, he failed the exam."', ['Despite','Although','Because','Because of'], 0, 'Despite + N/V-ing - mặc dù; "his hard work" là danh từ.'),
  ]),

  M(32, 'Listening + Speaking exam practice', [
    Q('Listening tips: To catch keywords, focus on ___.', ['every word','content words (nouns, verbs, adj)','function words (a, the)','intonation only'], 1, 'Tập trung content words mang nghĩa - bỏ qua mạo từ/giới từ nhẹ.'),
    Q('In multiple-choice listening, you should ___ before listening.', ['close eyes','read all questions/options','sleep','take notes only'], 1, 'Đọc trước câu hỏi và đáp án giúp định hướng nghe.'),
    Q('When you don\'t understand a word, you should ___.', ['stop listening','keep listening for context','panic','give up'], 1, 'Tiếp tục nghe để bắt context - đừng dừng lại vì 1 từ.'),
    Q('Speaking: to develop your answer, use ___.', ['only "yes/no"','reasons + examples + extensions','silence','single words'], 1, 'Trả lời mở rộng: lí do + ví dụ + liên hệ - tránh "yes/no".'),
    Q('Pronunciation: word stress in "DEVelopment" falls on ___.', ['1st syllable','2nd syllable','3rd syllable','4th syllable'], 1, 'Trọng âm rơi vào âm tiết thứ 2: de-VE-lop-ment.'),
    Q('To sound natural, use ___ correctly.', ['only formal vocabulary','linking words and intonation','one tone only','only past tense'], 1, 'Linking words (firstly, however, therefore…) + intonation phù hợp.'),
  ]),

  M(33, 'Reading comprehension strategies', [
    Q('Skimming means reading ___.', ['every word','quickly to get the main idea','for specific details','only the conclusion'], 1, 'Skimming - đọc nhanh để nắm ý chính.'),
    Q('Scanning means reading ___.', ['every word','quickly for main idea','for specific information/details','word by word'], 2, 'Scanning - tìm thông tin cụ thể (con số, tên riêng…).'),
    Q('When you see "in contrast", expect ___.', ['similarity','difference','example','conclusion'], 1, 'In contrast - dấu hiệu chuyển sang ý đối lập.'),
    Q('"Inference" means ___.', ['stated directly','reading between the lines','copying','summarising'], 1, 'Inference - suy luận, hiểu ý ngầm từ văn bản.'),
    Q('For vocabulary in context, look at ___.', ['dictionary only','surrounding sentences','title','image'], 1, 'Đoán nghĩa từ - dựa vào ngữ cảnh các câu xung quanh.'),
    Q('"Topic sentence" usually appears ___.', ['at the end','at the beginning of a paragraph','in the middle','as a title'], 1, 'Topic sentence (câu chủ đề) thường ở đầu đoạn (paragraph).'),
  ]),

  M(34, 'Final review — practice test 1', [
    Q('"Had I known about the traffic, I ___ earlier."', ['would have left','would leave','will have left','left'], 0, 'Đảo ngữ type 3: Had + S + V3, ... would have V3.'),
    Q('"By the time she arrives, we ___ dinner."', ['will finish','will have finished','finish','finished'], 1, '"By the time" + present (arrives) → future perfect.'),
    Q('"It was not until 1945 ___ Vietnam ___ independent."', ['that/became','when/became','that/became','when/become'], 0, 'Not until + time + that + S V (cleft, không đảo ngữ trong dạng này).'),
    Q('"___ studying English for 5 years, she can speak fluently."', ['Having','Had','Having been','To have'], 0, 'Having V3 + ... - mệnh đề trạng ngữ rút gọn (since/because).'),
    Q('"Neither ___ nor ___ are responsible." (cấu trúc song hành)', ['he/I','he/me','him/I','him/me'], 0, 'Neither X nor Y + are - cùng dạng chủ ngữ; "he" và "I" cùng là subject.'),
    Q('"The book ___ I bought yesterday is very interesting."', ['who','whose','that','where'], 2, 'That/which - đại từ quan hệ cho vật.'),
  ]),

  M(35, 'Final review — practice test 2 + exam strategies', [
    Q('"If only I ___ harder in school!" (regret about past)', ['studied','had studied','have studied','study'], 1, 'If only + had V3 - tiếc nuối về quá khứ.'),
    Q('"He suggested ___ a meeting next week."', ['hold','to hold','holding','to holding'], 2, 'Suggest + V-ing (gerund).'),
    Q('"The teacher made us ___ the test again."', ['take','to take','taking','taken'], 0, 'Make sb + V (nguyên thể không "to").'),
    Q('"I would rather you ___ smoke here."', ['don\'t','didn\'t','wouldn\'t','won\'t'], 1, 'Would rather + S + V-ed (past simple) cho hiện tại/tương lai.'),
    Q('"It\'s high time we ___ home."', ['go','went','have gone','will go'], 1, 'It\'s high time + S + V-ed - đã đến lúc làm gì rồi.'),
    Q('Exam tip: When you finish, you should ___.', ['submit immediately','check answers carefully','sleep','leave early'], 1, 'Dành 5-10 phút cuối kiểm tra - lỗi chính tả, đáp án bỏ sót.'),
  ]),
];

export const H12TA_SCENARIOS = indexBy(H12TA_WEEKS);
