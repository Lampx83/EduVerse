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
    Q('"She ___ in Hanoi for ten years before she moved to Saigon."', ['had lived', 'was living', 'has lived (đã sống — sai vì lùi thì)', 'has lived'], 0, 'Quá khứ hoàn thành (had + V3) cho hành động xảy ra trước một mốc quá khứ khác (before she moved).'),
    Q('A person who has achieved great success and is admired is called a(n) ___.', ['celebrity (người nổi tiếng — gần nghĩa nhưng ít trang trọng hơn icon)', 'icon', 'figurehead', 'figure'], 1, 'Icon - người nổi tiếng được nhiều người ngưỡng mộ, có tầm ảnh hưởng văn hoá.'),
    Q('"While I ___ dinner, the lights went out."', ['had cooked', 'have cooked', 'cooked', 'was cooking'], 3, 'Past continuous (was/were V-ing) cho hành động đang diễn ra thì bị một hành động khác chen vào.'),
    Q('"Marie Curie was the first woman ___ the Nobel Prize."', ['who wins (HS nhầm dùng mệnh đề quan hệ)', 'who won (mệnh đề quan hệ thì quá khứ)', 'to win', 'winning'], 2, 'Cấu trúc the first/second/last + N + to V (nguyên thể chỉ mục đích/đặc điểm).'),
    Q('"He ___ as a doctor since he graduated."', ['has been working', 'was working', 'has worked (present perfect đơn, không nhấn liên tục)', 'worked'], 0, 'Present perfect continuous (has been V-ing) cho hành động bắt đầu trong quá khứ và còn tiếp diễn.'),
    Q('Synonym of "perseverance" is ___.', ['patience (kiên nhẫn — gần nghĩa nhưng khác sắc thái)', 'persistence', 'laziness', 'weakness'], 1, 'Perseverance = persistence: sự kiên trì, bền bỉ.'),
  ]),

  M(2, 'Unit 1 — Life Stories (Reported speech basics)', [
    Q('Direct: "I am happy", she said. → Reported: She said (that) ___.', ['she was happy', 'she has been happy', 'she is happy', 'she were happy'], 0, 'Khi đổi sang tường thuật, lùi 1 thì: am/is → was.'),
    Q('"Where do you live?" he asked. → He asked me where ___.', ['did I live', 'I live', 'I lived', 'do I live'], 2, 'Câu hỏi tường thuật: dùng trật tự khẳng định + lùi thì (do you live → I lived).'),
    Q('"Don\'t open the window," she told him. → She told him ___ the window.', ['no opening', 'to not open', 'don\'t open', 'not to open'], 3, 'Mệnh lệnh phủ định tường thuật: told sb NOT TO V.'),
    Q('"Can you help me?" she asked. → She asked if I ___ help her.', ['could', 'would (HS nhầm lùi will sau asked)', 'will (không lùi thì sau asked)', 'can (giữ nguyên modal, không lùi thì)'], 0, 'Yes/no question tường thuật: dùng if/whether + lùi thì can → could.'),
    Q('Reported: "I will call you tomorrow." → He said he ___ call me ___.', ['will/tomorrow', 'would/the next day', 'would/tomorrow', 'will/the next day'], 1, 'Will → would; tomorrow → the next day/the following day.'),
    Q('"I have finished my homework," he said. → He said (that) he ___ his homework.', ['had finished', 'has finished', 'finished', 'finishes'], 0, 'Present perfect → past perfect khi tường thuật.'),
  ]),

  M(3, 'Unit 2 — Urbanisation (Vocabulary + Present perfect)', [
    Q('"The population of this city ___ rapidly in the last decade."', ['grew (quá khứ đơn, sai vì có in the last decade)', 'grows (hiện tại đơn, không khớp khoảng thời gian)', 'has grown', 'is growing'], 2, '"In the last decade" - dấu hiệu present perfect (has/have V3).'),
    Q('"Urbanisation" refers to the process of ___.', ['reducing city populations', 'people moving from rural areas to cities', 'building rural areas', 'people moving from cities to rural areas'], 1, 'Urbanisation = đô thị hoá - dân chuyển từ nông thôn ra thành thị.'),
    Q('A negative effect of urbanisation is ___.', ['overcrowding', 'better education', 'more jobs', 'modern facilities'], 0, 'Overcrowding (quá tải dân số) là hệ quả tiêu cực của đô thị hoá.'),
    Q('"How long ___ you ___ in this neighbourhood?"', ['do/live', 'have/lived', 'did/live', 'are/living'], 1, 'Câu hỏi với "how long" + present perfect (have you lived).'),
    Q('Synonym of "infrastructure" is ___.', ['public facilities', 'population', 'furniture', 'decoration'], 0, 'Infrastructure = các cơ sở vật chất công cộng (đường, điện, nước…).'),
    Q('"The government has ___ new policies to ease traffic congestion."', ['to introduce', 'introduce', 'introducing', 'introduced'], 3, 'Has + V3 (introduced) - present perfect.'),
  ]),

  M(4, 'Unit 2 — Comparatives + Quantifiers', [
    Q('"The traffic in Hanoi is ___ than in my hometown."', ['worst (so sánh nhất, sai cấu trúc than)', 'badder', 'worse', 'more bad'], 2, 'So sánh hơn của "bad" là "worse" (bất quy tắc).'),
    Q('"The more people move to the city, ___."', ['more crowded it becomes', 'the crowded more it becomes', 'the most crowded it becomes', 'the more crowded it becomes'], 3, 'Cấu trúc "The + comp ..., the + comp ...": càng ... càng ...'),
    Q('"There are ___ skyscrapers in Tokyo than in Hanoi."', ['more', 'most (so sánh nhất, sai vì có than)', 'much (dùng cho danh từ không đếm được)', 'many (số nhiều nhưng không phải so sánh hơn)'], 0, 'So sánh hơn của "many": more (skyscrapers - đếm được số nhiều).'),
    Q('"___ pollution in big cities is harmful to health."', ['An (mạo từ trước nguyên âm, sai loại từ)', '∅ (no article)', 'A (mạo từ không xác định, sai loại từ)', 'The (mạo từ xác định, dùng khi cụ thể)'], 1, 'Pollution - danh từ trừu tượng không đếm được, nói chung không cần mạo từ.'),
    Q('"This is ___ city I have ever visited."', ['the modernest', 'the more modern', 'the most modern', 'more modern'], 2, '"Ever" - dấu hiệu so sánh nhất + present perfect.'),
    Q('"There aren\'t ___ green spaces in this district."', ['a lot (cần a lot of trước danh từ)', 'much (dùng cho danh từ không đếm được)', 'many', 'few (chỉ ít, dùng trong câu khẳng định)'], 2, '"Green spaces" - đếm được số nhiều, dùng "many" trong câu phủ định.'),
  ]),

  M(5, 'Unit 3 — The Green Movement (Vocabulary + Passive)', [
    Q('"Trees ___ to absorb carbon dioxide."', ['are planted', 'were planting', 'planting', 'plant (chủ động hiện tại đơn, thiếu chủ thể)'], 0, 'Bị động hiện tại đơn: are/is + V3 (are planted).'),
    Q('"Renewable energy" is energy from sources that ___.', ['are polluting', 'will run out', 'cannot be replaced', 'can be replenished naturally'], 3, 'Renewable - tái tạo được, có thể bổ sung tự nhiên (mặt trời, gió…).'),
    Q('"A lot of waste ___ into the river by factories last year."', ['was dumped', 'is dumped', 'were dumped', 'dumped'], 0, '"Waste" - danh từ không đếm được → was + V3; "last year" → quá khứ.'),
    Q('Synonym of "to reduce" is ___.', ['double', 'expand', 'cut down on', 'increase'], 2, '"Cut down on" = giảm bớt, hạn chế (phrasal verb phổ biến).'),
    Q('"Plastic bags should ___ to protect the environment."', ['to ban', 'be banning (modal + be V-ing, sai chủ động)', 'be banned', 'being banned'], 2, 'Modal + bị động: should + be + V3.'),
    Q('"Recycling" means ___.', ['throwing away rubbish', 'burying waste', 'converting waste into reusable materials', 'burning waste'], 2, 'Recycling - tái chế - biến rác thải thành nguyên liệu sử dụng lại.'),
  ]),

  M(6, 'Unit 3 — Passive in all tenses', [
    Q('"The report ___ by the time you arrive tomorrow."', ['is being finished', 'will have been finished', 'will be finished', 'will finish'], 1, '"By the time" + future → future perfect; bị động: will have been + V3.'),
    Q('"This building ___ since 2010."', ['is used', 'has been used', 'was used (quá khứ đơn bị động, không khớp since)', 'has used'], 1, '"Since" - present perfect; bị động: has been + V3.'),
    Q('"The trees ___ planted right now."', ['are be', 'are being', 'being (thiếu trợ động từ are)', 'are been'], 1, 'Present continuous passive: am/is/are + being + V3.'),
    Q('"The proposal ___ when I came in."', ['was discussed', 'was being discussed', 'is discussed', 'had been discussed'], 1, 'Past continuous passive: was/were + being + V3 - mô tả việc đang diễn ra trong quá khứ.'),
    Q('"They say that he is a great leader." → He ___ to be a great leader.', ['says (chủ động hiện tại đơn, thiếu bị động)', 'is saying', 'is said', 'was said (bị động quá khứ, sai về thời)'], 2, 'Bị động câu "They say that S + V": S + is said + to V (hiện tại).'),
    Q('"Carbon emissions need ___ urgently."', ['reducing', 'be reduced', 'to be reduced', 'to reduce'], 2, '"Need to V" - chủ ngữ chịu tác động → need to be V3 (bị động).'),
  ]),

  M(7, 'Unit 4 — The Mass Media (Vocabulary + Conditionals 1-2)', [
    Q('"If it ___ tomorrow, we will cancel the trip."', ['would rain', 'will rain', 'rains', 'rained'], 2, 'Conditional type 1: If + present simple, ... will + V.'),
    Q('"If I ___ you, I would buy that newspaper."', ['were', 'was (sai số ít quy ước trong điều kiện loại 2)', 'be (động từ nguyên thể, sai dạng)', 'am (hiện tại đơn, không dùng trong if loại 2)'], 0, 'Conditional type 2: If I were you (giả định không thực ở hiện tại).'),
    Q('"Social media" refers to ___.', ['television channels', 'printed newspapers', 'radio stations', 'online platforms for sharing content'], 3, 'Social media - mạng xã hội: nền tảng trực tuyến để chia sẻ nội dung.'),
    Q('Synonym of "broadcast" is ___.', ['censor (kiểm duyệt — liên quan media nhưng khác nghĩa)', 'delete', 'publish (xuất bản — chỉ cho báo in, không phải phát sóng)', 'transmit'], 3, 'Broadcast (phát sóng) = transmit (truyền).'),
    Q('"A ___ is someone who writes news articles for a newspaper."', ['journalist', 'reader', 'publisher', 'editor'], 0, 'Journalist - nhà báo, người viết tin bài.'),
    Q('"If she had a smartphone, she ___ check her email anywhere."', ['could (khả năng, dùng được nhưng nhấn quá ít)', 'would', 'can (hiện tại, sai vì if had → would)', 'will (loại 1, sai vì if had)'], 1, 'Conditional type 2: If + V-ed, ... would + V (giả định không thực hiện tại).'),
  ]),

  M(8, 'Unit 4 — Conditionals 3 + Mixed', [
    Q('"If I ___ harder, I would have passed the exam."', ['study (hiện tại đơn, không khớp loại 3)', 'have studied', 'had studied', 'studied'], 2, 'Type 3: If + had V3, ... would have V3 (giả định trái với quá khứ).'),
    Q('"If she had taken the job, she ___ rich now."', ['would be', 'would have been', 'will be', 'is (hiện tại đơn, sai cấu trúc điều kiện hỗn hợp)'], 0, 'Mixed conditional: If + had V3 (quá khứ), ... would V (hiện tại).'),
    Q('"If I were taller, I ___ a basketball player."', ['am (hiện tại đơn, sai vì if were)', 'would have been', 'will be', 'would be'], 3, 'Type 2: If + V-ed, ... would + V (kết quả ở hiện tại).'),
    Q('"___ I known about the meeting, I would have come."', ['Should', 'Were (đảo ngữ loại 2, sai vì có known V3)', 'If (giữ if thì không đảo ngữ trợ động từ)', 'Had'], 3, 'Đảo ngữ type 3: Had + S + V3, ... (lược bỏ "if").'),
    Q('"___ it not been for her help, I would have failed."', ['Had', 'Were (đảo ngữ loại 2, sai vì có been V3)', 'Should', 'If (giữ if thì không lược had ra đầu)'], 0, 'Đảo ngữ "If it had not been for X" = "Had it not been for X" (nếu không nhờ).'),
    Q('Conditional type 0 expresses ___.', ['future plans', 'imaginary present', 'imaginary past', 'general truths/facts'], 3, 'Type 0: If + present, ... + present - sự thật, quy luật (If you heat water, it boils).'),
  ]),

  M(9, 'Unit 5 — Cultural Identity (Vocabulary + Modal verbs)', [
    Q('"You ___ remove your shoes when entering a Vietnamese house."', ['might (có thể — quá yếu cho phong tục)', 'should', 'can (có khả năng — không phải lời khuyên)', 'need (cần — thiếu to trước remove)'], 1, 'Should - lời khuyên/phong tục lịch sự.'),
    Q('"Cultural identity" refers to ___.', ['religion only', 'sense of belonging to a culture/community', 'national flag only', 'language only'], 1, 'Cultural identity - bản sắc văn hoá: cảm thức thuộc về một nền văn hoá/cộng đồng.'),
    Q('"You ___ be quiet in the library." (obligation)', ['can (có thể — chỉ khả năng, không bắt buộc)', 'could (có thể — quá khứ của can, không bắt buộc)', 'must', 'may (được phép — chỉ sự cho phép)'], 2, 'Must - bắt buộc, quy định.'),
    Q('"He ___ speak five languages fluently."', ['must (chắc chắn — suy đoán, không phải khả năng)', 'will (sẽ — tương lai, không phải khả năng)', 'can', 'should'], 2, 'Can - khả năng.'),
    Q('Synonym of "preserve" is ___.', ['protect', 'preserve nghĩa là sell (bán đi — trái nghĩa)', 'ignore', 'destroy'], 0, 'Preserve = protect (bảo tồn, giữ gìn).'),
    Q('"In some cultures, it is rude ___ during meals."', ['talked loudly', 'talking loudly', 'to talk loudly', 'talk loudly'], 2, 'Cấu trúc "It is + adj + to V".'),
  ]),

  M(10, 'Unit 5 — Modal perfect (must/should/could have V3)', [
    Q('"He looks tired. He ___ all night."', ['must work', 'must have worked', 'must working', 'must to work'], 1, 'Must + have + V3 - suy đoán chắc chắn về quá khứ.'),
    Q('"You ___ told me earlier. Now it\'s too late."', ['should be', 'should have', 'should', 'must have'], 1, 'Should have V3 - đáng lẽ phải làm (nhưng đã không) - hối tiếc/trách móc nhẹ.'),
    Q('"I ___ have left my keys at home; I can\'t find them."', ['should', 'can (HS nhầm dùng can have — sai cấu trúc)', 'might', 'must (chắc chắn đã, quá mạnh khi nói can\'t find)'], 2, 'Might/could/may + have V3 - phỏng đoán không chắc về quá khứ.'),
    Q('"She ___ have known the answer; she didn\'t prepare."', ['might (có thể đã biết — sai vì cô ấy không chuẩn bị)', 'can\'t', 'must (chắc chắn đã biết — trái với didn\'t prepare)', 'should'], 1, 'Can\'t/couldn\'t + have V3 - chắc chắn không xảy ra trong quá khứ.'),
    Q('"You ___ have eaten so much. Now you feel sick."', ['won\'t (will not — sai vì hành động đã xảy ra)', 'shouldn\'t', 'can\'t (không thể đã — sai vì hành động đã xảy ra)', 'must not'], 1, 'Shouldn\'t have V3 - đáng lẽ không nên (đã làm rồi - hối tiếc).'),
    Q('"They ___ have arrived already; the lights are on."', ['must', 'wouldn\'t', 'should', 'can\'t (không thể đã — trái với bằng chứng đèn sáng)'], 0, 'Must have V3 - suy đoán chắc chắn dựa trên bằng chứng (đèn sáng).'),
  ]),

  M(11, 'Unit 6 — Endangered Species (Vocabulary + Relative clauses)', [
    Q('"The Saola is a rare animal ___ lives only in Vietnam and Laos."', ['whose (sở hữu cách, sai vì chủ ngữ)', 'where (trạng ngữ nơi chốn, không thay chủ ngữ)', 'who (dùng cho người, không phải động vật)', 'which'], 3, 'Which - đại từ quan hệ cho vật/động vật làm chủ ngữ.'),
    Q('"Endangered species" are species that ___.', ['are common', 'have recovered', 'are extinct', 'are at risk of extinction'], 3, 'Endangered - có nguy cơ tuyệt chủng (nhưng chưa tuyệt chủng - extinct).'),
    Q('"This is the reserve ___ many rare animals are protected."', ['which (chủ ngữ/tân ngữ vật, không phải trạng ngữ nơi chốn)', 'who (dùng cho người, không phải nơi chốn)', 'where', 'that (không thay được for which/where)'], 2, 'Where - trạng ngữ chỉ nơi chốn.'),
    Q('"The scientist ___ research has saved many species is famous."', ['who (chủ ngữ chỉ người, sai vì cần sở hữu)', 'whom (tân ngữ chỉ người, sai chức năng)', 'whose', 'which (chỉ vật, sai vì là người)'], 2, 'Whose - sở hữu cách dùng cho người (whose research = his research).'),
    Q('"Deforestation" means ___.', ['planting trees', 'protecting forests', 'growing crops', 'cutting down forests'], 3, 'Deforestation - phá rừng, chặt phá rừng.'),
    Q('Defining vs non-defining relative clauses differ in ___.', ['length', 'meaning', 'verb tense (thì động từ — không liên quan đến phân loại mệnh đề)', 'use of commas'], 3, 'Non-defining clause được đặt giữa hai dấu phẩy, defining thì không.'),
  ]),

  M(12, 'Unit 6 — Reduced relative clauses', [
    Q('"The man ___ standing over there is my teacher." (Rút gọn từ "who is standing")', ['is (cần is standing nhưng rút gọn bỏ "who is")', 'standing', 'was (quá khứ, không khớp với hiện tại)', 'to stand'], 1, 'Rút gọn mệnh đề chủ động: bỏ "who/which is" → giữ V-ing.'),
    Q('"The book ___ on the shelf belongs to me." (Rút gọn "which is placed")', ['to place', 'places', 'placed', 'placing'], 2, 'Rút gọn mệnh đề bị động: bỏ "which/who is" → giữ V-ed/V3.'),
    Q('"The candidates ___ for the job will be informed soon."', ['to select', 'select', 'selected', 'selecting'], 2, 'Bị động (được chọn) → V3 (selected).'),
    Q('"The first person ___ this competition will win a prize."', ['winning', 'to win', 'won (quá khứ đơn, sai sau "the first person")', 'wins (hiện tại đơn, sai sau "the first person")'], 1, 'The first/last/only + to V (nguyên thể).'),
    Q('"Animals ___ in the wild are often more aggressive."', ['lived (V3 chỉ dùng cho bị động rút gọn)', 'to live', 'living', 'live (động từ nguyên thể, sai cấu trúc rút gọn)'], 2, 'Chủ động (sống) → V-ing (living).'),
    Q('"There are many things ___ in this museum."', ['to see', 'to seeing', 'seeing', 'seen (V3 bị động, sai vì có nghĩa chủ động "để xem")'], 0, 'To + V chỉ mục đích/đặc điểm sau "things/something".'),
  ]),

  M(13, 'Unit 7 — Artificial Intelligence (Vocabulary + Future tenses)', [
    Q('"By 2030, AI ___ many human tasks."', ['will have replaced', 'replaces', 'is replacing', 'will replace'], 0, '"By + future time" → future perfect (will have + V3).'),
    Q('"Artificial Intelligence" refers to ___.', ['human brains', 'machines that simulate human intelligence', 'only robots', 'natural intelligence'], 1, 'AI - trí tuệ nhân tạo: máy mô phỏng trí thông minh con người.'),
    Q('"At this time next year, I ___ at a tech company."', ['will be working', 'work (hiện tại đơn, không khớp "at this time next year")', 'will work', 'am working'], 0, '"At this time + future" → future continuous (will be V-ing).'),
    Q('"I think robots ___ humans in many jobs soon."', ['replaced', 'replace', 'are replacing', 'will replace'], 3, '"I think + future" → will + V (dự đoán).'),
    Q('Synonym of "automate" is ___.', ['manually do', 'slow down', 'mechanise', 'complicate'], 2, 'Automate (tự động hoá) = mechanise (cơ giới hoá).'),
    Q('"We ___ a new AI system next month."', ['will launch', 'are launching', 'launched', 'launch'], 0, 'Will + V cho kế hoạch tương lai chưa chắc chắn; "are launching" cũng đúng nếu sắp xếp.'),
  ]),

  M(14, 'Unit 7 — Inversion (Hardly, Not until, No sooner)', [
    Q('"Hardly ___ when the phone rang."', ['did I sit', 'I sat (không đảo ngữ sau Hardly)', 'had I sat', 'I had sat'], 2, 'Hardly + had + S + V3 ... when + S + V-ed: vừa mới ... thì ...'),
    Q('"Not until 1986 ___ economic reforms in Vietnam."', ['did ... begin', 'did begin', 'did begin', 'began (không đảo ngữ sau Not until)'], 0, 'Not until + time + did + S + V (đảo ngữ).'),
    Q('"No sooner ___ home than it started to rain."', ['had I arrived', 'I arrived', 'did I arrive', 'I had arrived'], 0, 'No sooner + had + S + V3 ... than + S + V-ed.'),
    Q('"Never ___ such a beautiful sight!"', ['do I see', 'I had seen', 'I have seen', 'have I seen'], 3, 'Never + have + S + V3 (đảo ngữ).'),
    Q('"Only by working hard ___ achieve success."', ['could you', 'can you', 'you can', 'you could'], 1, 'Only by + V-ing + can/could + S + V (đảo ngữ).'),
    Q('"Seldom ___ to the cinema these days."', ['do I go', 'I go (không đảo ngữ sau Seldom)', 'go I (đảo ngữ sai, thiếu trợ động từ do)', 'I do go'], 0, 'Seldom/rarely + do/does + S + V (đảo ngữ).'),
  ]),

  M(15, 'Unit 8 — The World of Work (Vocabulary + Articles)', [
    Q('"She wants to become ___ engineer."', ['the (mạo từ xác định, sai vì engineer chưa xác định)', 'a (mạo từ trước phụ âm, sai vì engineer bắt đầu nguyên âm)', '∅ (no article — sai vì cần mạo từ trước nghề nghiệp số ít)', 'an'], 3, 'An - đứng trước danh từ bắt đầu bằng nguyên âm (engineer).'),
    Q('"___ unemployment rate has risen recently."', ['An (mạo từ trước nguyên âm, sai vì unemployment đọc /ʌn/)', 'The', 'A (sai vì unemployment bắt đầu nguyên âm)', '∅ (no article — sai vì có "rate" xác định)'], 1, 'The - dùng cho đối tượng xác định (tỉ lệ thất nghiệp cụ thể).'),
    Q('A "resume" or "CV" is ___.', ['a document summarising one\'s qualifications', 'a job advertisement', 'a contract', 'a letter of complaint'], 0, 'CV/Resume - tài liệu tóm tắt trình độ, kinh nghiệm xin việc.'),
    Q('"I went to ___ university to study English."', ['∅ (no article — sai vì cần mạo từ trước university số ít)', 'the (mạo từ xác định, sai vì chỉ một trường bất kỳ)', 'an (mạo từ trước nguyên âm, sai vì /j/ là phụ âm)', 'a'], 3, '"University" bắt đầu bằng âm /j/ - phụ âm → dùng "a".'),
    Q('Synonym of "salary" is ___.', ['fee (phí dịch vụ — không phải lương)', 'tip (tiền boa — không phải lương cố định)', 'fine (tiền phạt — trái nghĩa với salary)', 'wage'], 3, 'Salary (lương cố định) ≈ wage (lương theo giờ/tuần).'),
    Q('"___ honesty is the best policy."', ['An (mạo từ trước nguyên âm — sai vì honesty trừu tượng)', '∅', 'The (mạo từ xác định — sai vì nói chung chung)', 'A (mạo từ trước phụ âm — sai vì honesty trừu tượng)'], 1, 'Danh từ trừu tượng nói chung không cần mạo từ.'),
  ]),

  M(16, 'Unit 8 — Phrasal verbs at work', [
    Q('"She has decided to ___ applying for the job."', ['look forward', 'take after', 'go on (tiếp tục — trái nghĩa với decided)', 'give up'], 3, 'Give up - từ bỏ.'),
    Q('"He ___ his father in appearance."', ['takes in', 'takes up', 'takes after', 'takes off'], 2, 'Take after - giống (cha mẹ về ngoại hình/tính cách).'),
    Q('"The interview was ___ until Monday."', ['put up', 'put down', 'put on', 'put off'], 3, 'Put off - hoãn lại.'),
    Q('"Please ___ this form before submitting."', ['fill up', 'fill in', 'both A and C', 'fill out'], 2, 'Fill in/fill out - điền thông tin vào (form).'),
    Q('"He was ___ from the company due to misconduct."', ['laid up', 'laid down', 'laid off', 'laid out'], 2, 'Laid off - bị cho nghỉ việc (thường vì lí do kinh tế); fired - bị sa thải có lỗi.'),
    Q('"I\'m looking ___ to hearing from you."', ['up (HS nhầm với look up — tra cứu)', 'after (HS nhầm với look after — chăm sóc)', 'forward', 'for (HS nhầm với look for — tìm kiếm)'], 2, 'Look forward to + V-ing/N - mong chờ.'),
  ]),

  M(17, 'Unit 9 — Choosing a Career (Cleft sentences)', [
    Q('"It was John ___ helped me with my homework."', ['which (đại từ quan hệ chỉ vật, không phải cleft)', 'where (trạng ngữ nơi chốn, không hợp ngữ cảnh)', 'that', 'what (không dùng trong cleft sau "It was + N")'], 2, 'Cleft "It is/was + N + that + V": who/that cho người.'),
    Q('"It is ___ that motivates me most." (Nhấn mạnh chính tiền bạc)', ['by money', 'money', 'to money', 'for money'], 1, 'It is + nhấn mạnh + that + S V: "money" được nhấn mạnh.'),
    Q('"___ I really want is a stable job."', ['Where (trạng ngữ nơi chốn — không hợp What-cleft)', 'Which (đại từ quan hệ — không mở đầu được cleft)', 'What', 'That (không dùng đầu câu trong cleft này)'], 2, 'What-cleft: What + clause + is/are + thing emphasised.'),
    Q('"It was in 2020 ___ she started her own business."', ['which (đại từ quan hệ vật — không thay cho thời gian trong cleft)', 'that', 'when (HS nhầm vì có thời gian, nhưng cleft chuẩn dùng that)', 'where (chỉ nơi chốn — sai vì là thời gian)'], 1, 'Cleft với thời gian: it was + time + that + ...'),
    Q('"It is teamwork ___ leads to success in this company."', ['where (trạng ngữ nơi chốn — sai vì teamwork không phải nơi)', 'what (không dùng trong It-cleft chuẩn)', 'that', 'who (dành cho người — teamwork không phải người)'], 2, 'It-cleft với "teamwork" (không phải người) → that/which.'),
    Q('"All ___ matters is your effort."', ['that', 'who (dùng cho người — sai vì all chỉ vật)', 'what (không dùng sau all)', 'which (không dùng sau all)'], 0, 'Sau "all" dùng "that" (không dùng "what").'),
  ]),

  M(18, 'Ôn tập HK1 — Mid-term review', [
    Q('"If I ___ enough money, I would buy a new laptop."', ['have (hiện tại đơn — sai cấu trúc if loại 2)', 'had', 'would have', 'will have'], 1, 'Type 2: If + V-ed (had), ... would + V.'),
    Q('"He said he ___ working there since 2018."', ['is (hiện tại đơn — sai vì cần lùi thì sau said)', 'had been', 'has been', 'was (quá khứ đơn — sai vì cần past perfect cho since)'], 1, 'Reported speech: lùi present perfect → past perfect (had been).'),
    Q('"The book ___ now belongs to me." (đang được đọc)', ['reading', 'being read', 'read (V3 — chỉ bị động hoàn thành, không phải đang được đọc)', 'to read'], 1, 'Reduced relative clause bị động liên tục: being + V3.'),
    Q('"She ___ have told him the truth, but she didn\'t."', ['can (có thể — không diễn tả hối tiếc quá khứ)', 'should', 'will (sẽ — tương lai, không hợp ngữ cảnh)', 'must (chắc chắn đã — không phải lời khuyên hối tiếc)'], 1, 'Should have V3 - đáng lẽ phải làm.'),
    Q('"Not only ___ English, but he also speaks French."', ['does he speak', 'he is speaking', 'can he speak', 'he speaks'], 0, 'Not only + đảo ngữ + ..., but ... also: does + S + V.'),
    Q('"Hardly ever ___ to the beach."', ['goes I', 'do I go', 'I go (không đảo ngữ sau Hardly ever)', 'I do go'], 1, 'Hardly ever - trạng từ phủ định → đảo ngữ.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 10 — Lifelong Learning (Gerunds vs infinitives)', [
    Q('"I enjoy ___ books in my free time."', ['reads (hiện tại đơn ngôi thứ ba — sai cấu trúc enjoy)', 'reading', 'read (nguyên thể — sai sau enjoy)', 'to read'], 1, 'Enjoy + V-ing (gerund).'),
    Q('"She decided ___ a foreign language."', ['learn (nguyên thể không to — sai sau decide)', 'to learn', 'learns', 'learning'], 1, 'Decide + to V (infinitive).'),
    Q('"Lifelong learning" means ___.', ['learning only in school', 'continuous learning throughout life', 'learning quickly', 'learning a specific subject'], 1, 'Lifelong learning - học tập suốt đời.'),
    Q('"He stopped ___ when he saw the red light." (mục đích)', ['smoking', 'smoke (nguyên thể không to — sai cấu trúc stop)', 'smoked', 'to smoke'], 3, 'Stop to V - dừng lại để làm gì; stop V-ing - bỏ làm gì.'),
    Q('"I forgot ___ the door this morning." (việc cần làm nhưng quên)', ['lock (nguyên thể không to — sai cấu trúc forget)', 'to lock', 'locked', 'locking'], 1, 'Forget to V - quên (chưa làm); forget V-ing - quên (đã làm).'),
    Q('"It\'s no use ___ over spilt milk."', ['crying', 'to cry', 'cry (nguyên thể — sai sau "It\'s no use")', 'cried (quá khứ đơn — sai sau "It\'s no use")'], 0, 'It\'s no use + V-ing - không ích gì khi làm.'),
  ]),

  M(20, 'Unit 10 — Advanced vocabulary on education', [
    Q('A person who never stops learning is called a ___.', ['illiterate', 'lifelong learner', 'dropout', 'procrastinator'], 1, 'Lifelong learner - người học tập suốt đời.'),
    Q('Synonym of "acquire knowledge" is ___.', ['forget', 'reject', 'lose knowledge', 'gain knowledge'], 3, 'Acquire = gain (đạt được, thu được).'),
    Q('"MOOC" stands for ___.', ['Mass Open Offline Course', 'My Online Open Class', 'Multiple Online Optional Course', 'Massive Open Online Course'], 3, 'MOOC - khoá học mở trực tuyến đại trà (Coursera, edX…).'),
    Q('"To brush up on" something means to ___.', ['start fresh', 'review and improve', 'ignore', 'forget'], 1, 'Brush up on - ôn lại, cải thiện kĩ năng cũ.'),
    Q('"Self-study" means studying ___.', ['online only', 'with a teacher', 'on your own', 'in a group'], 2, 'Self-study - tự học (không có giáo viên trực tiếp).'),
    Q('"He has a thirst ___ knowledge."', ['of (giới từ — HS nhầm với "thirst of" trong tiếng mẹ đẻ)', 'for', 'to (giới từ chỉ hướng — không hợp collocation)', 'about (giới từ chỉ chủ đề — không hợp với thirst)'], 1, 'A thirst FOR knowledge - khao khát kiến thức (collocation).'),
  ]),

  M(21, 'Tenses comprehensive review', [
    Q('"By next year, I ___ here for ten years."', ['will be working', 'will have been working', 'will work', 'will have worked'], 1, 'Will have been V-ing + for + duration: future perfect continuous (đặc biệt với động từ chỉ trạng thái + duration → cũng có thể dùng future perfect).'),
    Q('"While she ___ TV, the phone rang."', ['watches', 'was watching', 'had watched', 'watched'], 1, 'Past continuous (was V-ing) + when/while + past simple.'),
    Q('"I ___ him since we were children."', ['know (hiện tại đơn — sai vì có since)', 'have known', 'am knowing', 'knew (quá khứ đơn — sai vì có since)'], 1, 'Since + duration → present perfect; "know" là động từ trạng thái → không dùng tiếp diễn.'),
    Q('"They ___ for an hour before the bus arrived."', ['were waiting', 'had been waiting', 'waited', 'have been waiting'], 1, 'Past perfect continuous (had been V-ing) cho hành động kéo dài trước một mốc quá khứ.'),
    Q('"Look at those clouds! It ___ rain."', ['will (dự đoán không có bằng chứng — sai)', 'is going to', 'is raining', 'rains (hiện tại đơn — không phù hợp dự đoán)'], 1, 'Be going to - dự đoán dựa trên bằng chứng hiện tại (mây đen).'),
    Q('"The train ___ at 7:30 every morning."', ['is leaving', 'leaves', 'left (quá khứ đơn — sai vì "every morning")', 'will leave'], 1, 'Lịch trình cố định → present simple.'),
  ]),

  M(22, 'Passive voice — all tenses review', [
    Q('"The bridge ___ next year." (sẽ được xây)', ['will be built', 'was built', 'is built', 'will build'], 0, 'Future simple passive: will + be + V3.'),
    Q('"My car ___ at the moment." (đang được sửa)', ['is repairing', 'repaired', 'is being repaired', 'has repaired'], 2, 'Present continuous passive: am/is/are + being + V3.'),
    Q('"The letter ___ by my friend last week."', ['was written', 'was being written', 'wrote (chủ động — sai vì câu là bị động)', 'has been written'], 0, 'Past simple passive: was/were + V3.'),
    Q('"This song ___ by millions of people." (đã được nghe)', ['has been heard', 'has heard', 'heard (chủ động quá khứ — sai vì câu là bị động)', 'is hearing'], 0, 'Present perfect passive: has/have + been + V3.'),
    Q('"People believe that he is innocent." → He ___ to be innocent.', ['believed', 'was believed', 'is believed', 'believes'], 2, 'Mẫu "People believe that S V" → "S is believed to V".'),
    Q('"This work ___ by tomorrow." (sẽ đã được hoàn thành)', ['will be finishing', 'will have been finished', 'was finished', 'will finish'], 1, 'Future perfect passive: will have been + V3.'),
  ]),

  M(23, 'Reported speech — questions + commands', [
    Q('"What time does the meeting start?" → He asked me what time ___.', ['the meeting started', 'the meeting starts', 'does the meeting start', 'did the meeting start'], 0, 'Reported question (Wh): trật tự khẳng định + lùi thì.'),
    Q('"Will you come to my party?" → She asked me if I ___ to her party.', ['came (quá khứ đơn — HS nhầm lùi thì nhưng sai dạng)', 'come (nguyên thể — không lùi thì sau asked)', 'would come', 'will come'], 2, 'Yes/no question reported: if + lùi will → would.'),
    Q('"Please don\'t be late," he said. → He asked us ___ late.', ['to be not', 'don\'t be', 'to not be', 'not to be'], 3, 'Mệnh lệnh phủ định reported: asked sb NOT TO + V.'),
    Q('"Let\'s go for a walk," she said. → She suggested ___ for a walk.', ['that we go', 'to go (HS nhầm cấu trúc suggest + to V)', 'both B and C', 'going (chỉ V-ing, bỏ qua phương án that we go)'], 2, 'Suggest + V-ing hoặc Suggest that S (should) V.'),
    Q('"Did you finish your homework?" → He asked me if I ___ my homework.', ['was finishing', 'finished', 'have finished', 'had finished'], 3, 'Past simple → past perfect khi reported.'),
    Q('"Don\'t touch this!" the teacher shouted. → The teacher told us ___.', ['don\'t touch this', 'not to touch that', 'to not touch that', 'not to touch this'], 1, 'Negative imperative reported: not to V + đổi "this" → "that".'),
  ]),

  M(24, 'Conditionals — all types review', [
    Q('"If you ___ ice, it ___."', ['heat/will melt', 'heat/melts', 'heated/would melt', 'will heat/melts'], 1, 'Type 0 (chân lí khoa học): If + present, ... + present.'),
    Q('"If it rains tomorrow, we ___ the picnic."', ['would cancel', 'will cancel', 'would have cancelled', 'cancel'], 1, 'Type 1: If + present, ... will + V.'),
    Q('"If I ___ a millionaire, I would travel the world."', ['am (hiện tại đơn — sai vì cần if loại 2)', 'will be', 'were', 'was (HS nhầm dùng was cho I trong if loại 2)'], 2, 'Type 2: If + were (thay was sau I/he/she).'),
    Q('"If she ___ harder, she would have passed."', ['had studied', 'studies', 'has studied', 'studied'], 0, 'Type 3: If + had V3, ... would have V3.'),
    Q('"If you had told me earlier, I ___ here now."', ['will be', 'am (hiện tại đơn — sai cấu trúc điều kiện hỗn hợp)', 'would be', 'would have been'], 2, 'Mixed: If + had V3 (past), ... would V (present).'),
    Q('"Were I ___, I would invest in this company." (đảo ngữ type 2)', ['rich is', 'being rich', 'to be rich', 'rich'], 3, 'Đảo ngữ type 2: Were + S + adj/N: nếu là.'),
  ]),

  M(25, 'Modal verbs — present + perfect form', [
    Q('"You ___ smoke here. It\'s prohibited."', ['shouldn\'t', 'needn\'t', 'mustn\'t', 'don\'t have to'], 2, 'Mustn\'t - cấm tuyệt đối.'),
    Q('"You ___ pay; the entrance is free."', ['can\'t (không thể — chỉ khả năng, không phải nghĩa vụ)', 'mustn\'t', 'shouldn\'t', 'don\'t have to'], 3, 'Don\'t have to - không cần (không bắt buộc).'),
    Q('"He ___ have been at home. I saw him at the office."', ['must (chắc chắn đã — trái với bằng chứng nhìn thấy ở văn phòng)', 'should', 'might (có thể đã — quá yếu khi đã có bằng chứng)', 'can\'t'], 3, 'Can\'t have V3 - chắc chắn không (suy đoán phủ định về quá khứ).'),
    Q('"She ___ have left already; her bag is here."', ['must (chắc chắn đã rời đi — trái với bằng chứng túi còn đây)', 'might (có thể đã rời đi — không khớp bằng chứng)', 'should', 'can\'t'], 3, '"Can\'t have left" - không thể đã rời đi (bằng chứng: bag vẫn ở đây).'),
    Q('"They ___ have warned us about the danger!" (hối tiếc)', ['will (sẽ — tương lai, không phải hối tiếc)', 'can (có thể — chỉ khả năng, không phải hối tiếc)', 'should', 'must (chắc chắn đã — không phải hối tiếc/trách móc)'], 2, 'Should have V3 - đáng lẽ phải làm (trách móc).'),
    Q('"He ___ have missed the train; he\'s usually punctual."', ['should', 'can\'t', 'might (có thể đã lỡ — không khớp với "usually punctual")', 'must (chắc chắn đã lỡ — trái với "usually punctual")'], 1, '"Can\'t have missed" - khó tin rằng anh ấy đã lỡ tàu.'),
  ]),

  M(26, 'Inversion + Cleft sentences review', [
    Q('"Rarely ___ such a delicious meal."', ['I have had', 'have I had', 'I had (không đảo ngữ sau Rarely)', 'did I have'], 1, 'Rarely + auxiliary + S + V (đảo ngữ).'),
    Q('"Only when he apologised ___ him."', ['I forgave', 'did I forgive', 'I had forgiven', 'do I forgive'], 1, 'Only + adverbial → đảo ngữ ở mệnh đề chính.'),
    Q('"It was at the party ___ I met her."', ['when (chỉ thời gian — sai vì at the party là nơi chốn)', 'where (trạng ngữ nơi chốn — không dùng trong It-cleft chuẩn)', 'which (đại từ quan hệ — không hợp cleft)', 'that'], 3, 'It-cleft: it was + adverbial + that + clause.'),
    Q('"What I need is ___."', ['to some rest', 'having rest', 'some rest', 'some rest is'], 2, 'What-cleft: What + clause + is + thing emphasised.'),
    Q('"___ such a problem!" (Never have I seen)', ['Never had I seen', 'Never have I seen', 'Never seen I have', 'Never I have seen'], 1, 'Never + have + S + V3 (đảo ngữ).'),
    Q('"Little ___ that he was lying."', ['I had known', 'do I know', 'I knew', 'did I know'], 3, 'Little (= không hề) + đảo ngữ trợ động từ.'),
  ]),

  M(27, 'Relative clauses + reduced clauses review', [
    Q('"The man ___ car was stolen called the police."', ['whom (tân ngữ chỉ người — không thay sở hữu được)', 'that (đại từ quan hệ — không thay sở hữu cách)', 'who (chủ ngữ chỉ người — không phải sở hữu)', 'whose'], 3, 'Whose - sở hữu (his car = whose car).'),
    Q('"The students ___ in the front row are the best."', ['sitting', 'to sit', 'sits (hiện tại đơn — sai trong cấu trúc rút gọn)', 'sat (quá khứ đơn — sai trong cấu trúc rút gọn chủ động)'], 0, 'Rút gọn "who are sitting" → sitting (V-ing chủ động).'),
    Q('"The bridge ___ in 1990 collapsed last week."', ['was built', 'built', 'to build', 'building'], 1, 'Rút gọn "which was built" → built (V3 bị động).'),
    Q('"This is the village ___ I grew up."', ['where', 'which (đại từ quan hệ vật — không chỉ nơi chốn)', 'who (dùng cho người — village không phải người)', 'that (đại từ quan hệ — không thay where trực tiếp)'], 0, 'Where = in which - chỉ nơi chốn.'),
    Q('"London, ___ is the capital of England, is a beautiful city."', ['who (dùng cho người — London là thành phố)', 'where (trạng ngữ nơi chốn — sai vì là chủ ngữ)', 'which', 'that (không dùng trong non-defining có dấu phẩy)'], 2, 'Non-defining clause cho vật → which (không dùng that, có dấu phẩy).'),
    Q('"The reason ___ I came is to see you."', ['that (đại từ quan hệ — không thay cho "for which")', 'where (trạng ngữ nơi chốn — sai vì là lý do)', 'why', 'which (đại từ quan hệ — không thay why trực tiếp)'], 2, 'Why = for which - chỉ lí do.'),
  ]),

  M(28, 'Articles (a/an/the/∅) practice', [
    Q('"___ Eiffel Tower is in Paris."', ['An (mạo từ trước nguyên âm — sai với danh từ riêng)', 'The', 'A (mạo từ trước phụ âm — sai với danh từ riêng)', '∅ (no article — sai vì tháp nổi tiếng cần the)'], 1, 'The - dùng cho danh từ riêng địa danh nổi tiếng (tháp, sông, biển…).'),
    Q('"I had ___ apple and ___ banana for breakfast."', ['a/an (HS đảo thứ tự nguyên âm/phụ âm)', 'a/a (chỉ a — sai với apple nguyên âm)', 'an/a', 'an/an (chỉ an — sai với banana phụ âm)'], 2, 'An + apple (nguyên âm), a + banana (phụ âm).'),
    Q('"___ Mount Everest is the highest mountain."', ['The (mạo từ xác định — HS nhầm với danh từ địa lý có the)', 'A (mạo từ trước phụ âm — sai với danh từ riêng)', '∅', 'An (mạo từ trước nguyên âm — sai với danh từ riêng)'], 2, 'Tên núi đơn lẻ không dùng "the".'),
    Q('"She plays ___ piano very well."', ['an (mạo từ trước nguyên âm — piano bắt đầu phụ âm)', '∅ (no article — sai vì nhạc cụ cần the)', 'the', 'a (mạo từ không xác định — sai với nhạc cụ chơi)'], 2, 'The + nhạc cụ (the piano, the guitar).'),
    Q('"He went to ___ school by bus." (đi học)', ['an (mạo từ trước nguyên âm — sai vì school là phụ âm)', 'the (mạo từ xác định — sai vì go to school chỉ mục đích)', 'a (mạo từ không xác định — sai vì go to school không mạo từ)', '∅'], 3, '"Go to school" - chỉ mục đích học → không mạo từ.'),
    Q('"___ rich should help ___ poor." (giai cấp)', ['An/an (mạo từ trước nguyên âm — sai cấu trúc "the + adj")', 'The/the', '∅/∅ (no article — sai cấu trúc "the + adj")', 'A/a (mạo từ trước phụ âm — sai cấu trúc "the + adj")'], 1, 'The + adj = nhóm người (the rich, the poor, the elderly).'),
  ]),

  M(29, 'Phrasal verbs comprehensive', [
    Q('"I came ___ an interesting article in the newspaper."', ['up (come up — xuất hiện/nảy sinh, không phải gặp tình cờ)', 'across', 'off (come off — rơi ra, không hợp ngữ cảnh)', 'about (come about — xảy ra, không phải gặp tình cờ)'], 1, 'Come across - tình cờ gặp/thấy.'),
    Q('"The meeting was ___ due to bad weather."', ['called off', 'called on', 'called for', 'called up'], 0, 'Call off - huỷ bỏ.'),
    Q('"Please ___ smoking; it\'s bad for your health."', ['give back', 'give away', 'give up', 'give in'], 2, 'Give up - từ bỏ (thói quen).'),
    Q('"We need to ___ our weak points."', ['work in', 'work on', 'work out', 'work at'], 1, 'Work on - cải thiện, làm việc với.'),
    Q('"He always ___ his promises."', ['keeps to', 'keeps up with', 'keeps on', 'keeps in'], 0, 'Keep to - giữ (lời hứa, kế hoạch).'),
    Q('"Please ___ the radio; I can\'t hear."', ['turn off', 'turn down', 'turn on', 'turn up'], 3, 'Turn up - tăng âm lượng; turn on - bật; turn down - giảm.'),
  ]),

  M(30, 'Vocabulary in context — reading practice', [
    Q('"The festival ___ tourists from all over the world."', ['attacks', 'attracts', 'contracts', 'retracts'], 1, 'Attract - thu hút (collocation: attract tourists/attention).'),
    Q('"Her speech had a strong ___ on the audience."', ['infect', 'defect', 'effect', 'affect'], 2, 'Effect (n) - tác động; affect (v) - tác động đến.'),
    Q('"Vietnam has a rich ___ heritage."', ['culture', 'cultural', 'culturally', 'culturalism'], 1, 'Cultural (adj) - văn hoá, bổ nghĩa cho "heritage".'),
    Q('"The new policy will benefit ___ farmers."', ['low-incomes', 'low-income', 'low-incoming', 'low-incomed'], 1, 'Tính từ ghép "low-income" - thu nhập thấp.'),
    Q('"He gave a ___ description of the event."', ['detailed', 'detail', 'details', 'detailing'], 0, 'Detailed (adj) - chi tiết, bổ nghĩa cho description.'),
    Q('"We need to take ___ action to solve this problem."', ['immediately', 'immediating', 'immediate', 'immediacy'], 2, 'Immediate (adj) - ngay lập tức, bổ nghĩa cho "action".'),
  ]),

  M(31, 'Writing — common mistakes', [
    Q('Choose the correct sentence:', ['I look forward to hearing from you.', 'I look forward to hear from you.', 'I look forward hear from you.', 'I look forward hearing from you.'], 0, 'Look forward TO + V-ing (to là giới từ).'),
    Q('"In spite of ___ tired, he kept working."', ['was (HS thiếu chủ ngữ — In spite of không nhận mệnh đề)', 'he was', 'he is (mệnh đề hoàn chỉnh — sai vì In spite of + N/V-ing)', 'being'], 3, 'In spite of + N/V-ing (không phải mệnh đề).'),
    Q('"Although ___, he kept working."', ['tired (tính từ đơn — sai vì Although cần mệnh đề)', 'being tired', 'he was tired', 'he tired'], 2, 'Although + clause (S + V).'),
    Q('Choose correct: "She is good ___ math."', ['on (giới từ vị trí — HS nhầm với "on math")', 'in (giới từ chỉ chuyên ngành — HS nhầm với "good in")', 'for (giới từ chỉ mục đích — không hợp collocation)', 'at'], 3, 'Good AT + skill/subject (collocation).'),
    Q('"He is interested ___ history."', ['at (interested at — HS nhầm với good at)', 'for (interested for — không phải collocation chuẩn)', 'on (interested on — không phải collocation chuẩn)', 'in'], 3, 'Interested IN + topic.'),
    Q('"___ his hard work, he failed the exam."', ['Despite', 'Because of', 'Although', 'Because'], 0, 'Despite + N/V-ing - mặc dù; "his hard work" là danh từ.'),
  ]),

  M(32, 'Listening + Speaking exam practice', [
    Q('Listening tips: To catch keywords, focus on ___.', ['every word', 'intonation only', 'content words (nouns, verbs, adj)', 'function words (a, the)'], 2, 'Tập trung content words mang nghĩa - bỏ qua mạo từ/giới từ nhẹ.'),
    Q('In multiple-choice listening, you should ___ before listening.', ['hurry to answer (vội trả lời — không phải chiến lược tốt)', 'read all questions/options', 'take notes only', 'close eyes'], 1, 'Đọc trước câu hỏi và đáp án giúp định hướng nghe.'),
    Q('When you don\'t understand a word, you should ___.', ['give up', 'keep listening for context', 'stop listening', 'translate every word (dịch từng từ — làm chậm và mất context)'], 1, 'Tiếp tục nghe để bắt context - đừng dừng lại vì 1 từ.'),
    Q('Speaking: to develop your answer, use ___.', ['single words', 'reasons + examples + extensions', 'only "yes/no"', 'silence'], 1, 'Trả lời mở rộng: lí do + ví dụ + liên hệ - tránh "yes/no".'),
    Q('Pronunciation: word stress in "DEVelopment" falls on ___.', ['1st syllable', '2nd syllable', '3rd syllable', '4th syllable'], 1, 'Trọng âm rơi vào âm tiết thứ 2: de-VE-lop-ment.'),
    Q('To sound natural, use ___ correctly.', ['linking words and intonation', 'one tone only', 'only formal vocabulary', 'only past tense'], 0, 'Linking words (firstly, however, therefore…) + intonation phù hợp.'),
  ]),

  M(33, 'Reading comprehension strategies', [
    Q('Skimming means reading ___.', ['every word', 'quickly to get the main idea', 'only the conclusion', 'for specific details'], 1, 'Skimming - đọc nhanh để nắm ý chính.'),
    Q('Scanning means reading ___.', ['for specific information/details', 'word by word', 'quickly for main idea', 'every word'], 0, 'Scanning - tìm thông tin cụ thể (con số, tên riêng…).'),
    Q('When you see "in contrast", expect ___.', ['difference', 'example', 'conclusion', 'similarity'], 0, 'In contrast - dấu hiệu chuyển sang ý đối lập.'),
    Q('"Inference" means ___.', ['reading between the lines', 'summarising', 'stated directly', 'copying'], 0, 'Inference - suy luận, hiểu ý ngầm từ văn bản.'),
    Q('For vocabulary in context, look at ___.', ['title (chỉ tiêu đề — không đủ để đoán từ cụ thể)', 'dictionary only', 'image (hình ảnh — không phải mọi bài đọc đều có)', 'surrounding sentences'], 3, 'Đoán nghĩa từ - dựa vào ngữ cảnh các câu xung quanh.'),
    Q('"Topic sentence" usually appears ___.', ['at the end', 'at the beginning of a paragraph', 'as a title', 'in the middle'], 1, 'Topic sentence (câu chủ đề) thường ở đầu đoạn (paragraph).'),
  ]),

  M(34, 'Final review — practice test 1', [
    Q('"Had I known about the traffic, I ___ earlier."', ['will have left', 'left (quá khứ đơn — sai vì đảo ngữ cần would have V3)', 'would have left', 'would leave'], 2, 'Đảo ngữ type 3: Had + S + V3, ... would have V3.'),
    Q('"By the time she arrives, we ___ dinner."', ['finish', 'will finish', 'finished', 'will have finished'], 3, '"By the time" + present (arrives) → future perfect.'),
    Q('"It was not until 1945 ___ Vietnam ___ independent."', ['that/became', 'that/became', 'when/became', 'when/become'], 0, 'Not until + time + that + S V (cleft, không đảo ngữ trong dạng này).'),
    Q('"___ studying English for 5 years, she can speak fluently."', ['To have', 'Had (đảo ngữ điều kiện — không hợp cấu trúc rút gọn lý do)', 'Having', 'Having been'], 2, 'Having V3 + ... - mệnh đề trạng ngữ rút gọn (since/because).'),
    Q('"Neither ___ nor ___ are responsible." (cấu trúc song hành)', ['he/I', 'him/I (him là tân ngữ — sai vì cần chủ ngữ)', 'he/me (me là tân ngữ — sai vì cần chủ ngữ)', 'him/me'], 0, 'Neither X nor Y + are - cùng dạng chủ ngữ; "he" và "I" cùng là subject.'),
    Q('"The book ___ I bought yesterday is very interesting."', ['that', 'where (trạng ngữ nơi chốn — sai vì là tân ngữ chỉ vật)', 'whose (sở hữu cách — sai vì là tân ngữ trực tiếp)', 'who (dùng cho người — sai vì book là vật)'], 0, 'That/which - đại từ quan hệ cho vật.'),
  ]),

  M(35, 'Final review — practice test 2 + exam strategies', [
    Q('"If only I ___ harder in school!" (regret about past)', ['have studied', 'had studied', 'studied', 'study (hiện tại đơn — sai vì If only cần had V3 cho hối tiếc)'], 1, 'If only + had V3 - tiếc nuối về quá khứ.'),
    Q('"He suggested ___ a meeting next week."', ['to hold', 'hold (nguyên thể — sai vì suggest + V-ing)', 'to holding', 'holding'], 3, 'Suggest + V-ing (gerund).'),
    Q('"The teacher made us ___ the test again."', ['take', 'to take', 'taken (V3 — sai vì make sb + V nguyên thể chủ động)', 'taking'], 0, 'Make sb + V (nguyên thể không "to").'),
    Q('"I would rather you ___ smoke here."', ['wouldn\'t', 'didn\'t', 'don\'t (hiện tại đơn — sai vì would rather cần past simple)', 'won\'t (will not — sai vì would rather cần past simple)'], 1, 'Would rather + S + V-ed (past simple) cho hiện tại/tương lai.'),
    Q('"It\'s high time we ___ home."', ['went', 'go (hiện tại đơn — sai vì It\'s high time cần V-ed)', 'will go', 'have gone'], 0, 'It\'s high time + S + V-ed - đã đến lúc làm gì rồi.'),
    Q('Exam tip: When you finish, you should ___.', ['check answers carefully', 'submit immediately', 'leave early', 'rush to leave (vội rời đi — bỏ qua bước kiểm tra)'], 0, 'Dành 5-10 phút cuối kiểm tra - lỗi chính tả, đáp án bỏ sót.'),
  ]),
];

export const H12TA_SCENARIOS = indexBy(H12TA_WEEKS);
