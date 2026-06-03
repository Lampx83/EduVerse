// ============================================================
// Lớp 7 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK Global Success 7 — 12 units + grammar review.
// ID prefix: "S7TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7TA', 'tieng-anh', n, title, qs, opts);

export const S7TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Unit 1 — My Hobbies (Vocabulary)', [
    Q('"Hobby" means?', ['A meal', 'A daily duty (Một nhiệm vụ hằng ngày)', 'A school subject', 'An activity you do for pleasure'], 3, 'Hobby = sở thích, làm vì niềm vui.'),
    Q('Which is a hobby?', ['Eating breakfast', 'Sleeping at night', 'Collecting stamps', 'Going to school'], 2, 'Collecting stamps là sở thích phổ biến.'),
    Q('"I ___ playing chess." → fill in.', ['enjoyed', 'enjoy', 'enjoying', 'enjoys'], 1, 'Present simple: I/you/we/they + V.'),
    Q('"He ___ photos in his free time." (take)', ['take (dùng cho I/you/we/they)', 'takes', 'taking (thiếu trợ động từ be)', 'is taking'], 1, 'He/She/It → V + s.'),
    Q('"Mountain climbing" is what kind of hobby?', ['Outdoor', 'Reading', 'Cooking', 'Indoor'], 0, 'Leo núi ngoài trời.'),
    Q('"What hobby do you have?" — Best answer?', ['I like dancing.', 'I have two pens.', 'I live in Hanoi.', 'I am ten years old.'], 0, 'Sở thích: like + V-ing.'),
  ]),

  M(2, 'Unit 1 — Present simple vs Present continuous', [
    Q('Present simple is used for?', ['Habits and routines', 'Future plans', 'Finished actions yesterday', 'Actions happening right now'], 0, 'Thói quen, sự thật.'),
    Q('Present continuous form is?', ['will + V', 'V + ed', 'am/is/are + V-ing', 'have + V3'], 2, 'be + V-ing.'),
    Q('"Look! She ___ a beautiful song." (sing)', ['sing (thiếu -s ở ngôi 3)', 'sings (hiện tại đơn, không hợp với Look!)', 'is singing', 'sang (quá khứ đơn, không hợp với Look!)'], 2, '"Look!" → đang xảy ra.'),
    Q('"My father ___ to work by bus every day." (go)', ['go (thiếu -es ở ngôi 3)', 'goes to (sai cấu trúc)', 'goes', 'is going'], 2, '"every day" → present simple, ngôi 3 +s.'),
    Q('Time marker for present continuous?', ['last week', 'every day', 'now, at the moment, look!', 'yesterday'], 2, 'Tín hiệu hiện tại tiếp diễn.'),
    Q('"I ___ a book now." (read)', ['am reading', 'reads (hiện tại đơn, không hợp now)', 'was reading', 'read (hiện tại đơn ngôi I, không hợp now)'], 0, '"now" → present continuous.'),
  ]),

  M(3, 'Unit 2 — Health (Vocabulary)', [
    Q('"Toothache" means pain in?', ['Stomach', 'Eye (Mắt — eyeache không tự nhiên)', 'Tooth', 'Ear (Tai — đó là earache)'], 2, 'Tooth + ache = đau răng.'),
    Q('Which is healthy food?', ['Sweets', 'Fast food', 'Soft drinks', 'Vegetables and fruits'], 3, 'Rau và trái cây là healthy.'),
    Q('"I have a ___." (đau đầu)', ['stomach', 'stomachache (đau bụng, không phải đau đầu)', 'headache', 'toothache (đau răng, không phải đau đầu)'], 2, 'Headache = đau đầu.'),
    Q('"You should drink more ___ every day."', ['water', 'soda (nước ngọt có ga, không tốt cho sức khỏe)', 'energy drinks (nước tăng lực, không nên uống nhiều)', 'coffee'], 0, 'Lời khuyên sức khoẻ phổ biến.'),
    Q('Should + V là cấu trúc?', ['Asking permission', 'Future tense', 'Giving order', 'Giving advice'], 3, 'Should = nên (khuyên).'),
    Q('"You ___ go to bed early." → khuyên đi ngủ sớm.', ['won\'t (sẽ không — phủ định tương lai)', 'shouldn\'t', 'should', 'will (sẽ — chỉ tương lai, không phải lời khuyên)'], 2, 'Should = nên.'),
  ]),

  M(4, 'Unit 2 — Modal verbs: should / shouldn\'t / must / mustn\'t', [
    Q('"You ___ eat too much sugar." (không nên)', ['should', 'can (có thể — chỉ khả năng, không phải lời khuyên)', 'shouldn\'t', 'must (bắt buộc — quá mạnh so với \'không nên\')'], 2, 'Shouldn\'t = không nên.'),
    Q('"Students ___ wear uniforms at school." (bắt buộc)', ['should', 'may (có thể — xin phép, không phải bắt buộc)', 'must', 'can (có thể — chỉ khả năng, không phải bắt buộc)'], 2, 'Must = bắt buộc.'),
    Q('"You ___ smoke here." (cấm)', ['shouldn\'t', 'must (bắt buộc làm, ngược nghĩa với \'cấm\')', 'should', 'mustn\'t'], 3, 'Mustn\'t = cấm tuyệt đối.'),
    Q('"___ I open the window?" (xin phép)', ['Should', 'Must (bắt buộc — không hợp lời xin phép)', 'Will (sẽ — diễn tả tương lai, không xin phép)', 'May'], 3, 'May = xin phép lịch sự.'),
    Q('After modal verbs, we use?', ['to + V', 'bare infinitive (V)', 'V-ing (dạng tiếp diễn, sai sau modal)', 'V + ed'], 1, 'Modal + V nguyên thể không to.'),
    Q('"He can ___ English well." (speak)', ['speaking', 'speak', 'speaks', 'to speak'], 1, 'Can + V.'),
  ]),

  M(5, 'Unit 3 — Community Service', [
    Q('"Community service" means?', ['Watching TV', 'Volunteer work to help the community', 'Doing homework', 'Going to a café'], 1, 'Hoạt động tình nguyện.'),
    Q('Which is a community service activity?', ['Eating dinner', 'Reading a novel', 'Playing video games', 'Cleaning the beach'], 3, 'Dọn bãi biển.'),
    Q('"Volunteer" (n) means?', ['A student', 'A teacher', 'A doctor', 'A person who works without payment'], 3, 'Tình nguyện viên.'),
    Q('"We ___ books to poor children last month." (give) — past simple', ['are giving', 'will give', 'give (hiện tại đơn, sai vì có \'last month\')', 'gave'], 3, 'Past simple với "last month".'),
    Q('"They ___ trees in the park yesterday." (plant)', ['plant (hiện tại đơn, sai vì có \'yesterday\')', 'planting', 'planted', 'plants'], 2, 'Yesterday → past simple, plant + ed.'),
    Q('Past simple of irregular verb "go" is?', ['goed (sai vì go là bất quy tắc)', 'going (V-ing, không phải quá khứ)', 'gone (quá khứ phân từ, không phải V2)', 'went'], 3, 'go → went.'),
  ]),

  M(6, 'Unit 3 — Past simple (regular & irregular verbs)', [
    Q('Past simple of "play" is?', ['plays (hiện tại đơn ngôi 3)', 'plaied', 'playing (V-ing, không phải quá khứ)', 'played'], 3, 'Regular: + ed.'),
    Q('Past simple of "study" is?', ['studyed (sai chính tả, không đổi y → i)', 'studyed', 'studyd', 'studied'], 3, 'y → i + ed: studied.'),
    Q('Past simple of "see" is?', ['saw', 'seen (quá khứ phân từ V3, không phải V2)', 'sees (hiện tại đơn ngôi 3)', 'saws (không phải dạng đúng của see)'], 0, 'Irregular: see → saw.'),
    Q('Negative form: "She ___ help me." (không giúp)', ['doesn\'t', 'didn\'t', 'wasn\'t', 'isn\'t (be hiện tại, sai vì cần phủ định quá khứ)'], 1, 'Did + not + V.'),
    Q('Question: "___ they go to school yesterday?"', ['Does (hiện tại đơn ngôi 3, sai thì)', 'Are (be hiện tại, sai cấu trúc và thì)', 'Did', 'Do (hiện tại đơn, sai vì \'yesterday\')'], 2, 'Past → Did + S + V?'),
    Q('Time markers for past simple?', ['yesterday, last week, ago, in 2020', 'now, today', 'usually', 'tomorrow, next week'], 0, 'Dấu hiệu quá khứ.'),
  ]),

  M(7, 'Unit 4 — Music and Arts', [
    Q('Which is a musical instrument?', ['Drum sticks (que đánh trống — không phải nhạc cụ)', 'Microphone stand (giá micro — phụ kiện, không phải nhạc cụ)', 'Pencil', 'Guitar'], 3, 'Guitar = đàn ghi-ta.'),
    Q('"Painting" (n) is a kind of?', ['Performing art (nghệ thuật biểu diễn)', 'Folk craft (nghề thủ công dân gian)', 'Literature (văn học)', 'Visual art'], 3, 'Hội hoạ thuộc nghệ thuật thị giác.'),
    Q('"I ___ to music every evening." (listen)', ['listens', 'listen', 'listening', 'listened'], 1, 'I + V (present simple).'),
    Q('"Symphony" relates to?', ['Folk dance (múa dân gian — không phải symphony)', 'Rock music', 'Classical music', 'Pop music'], 2, 'Giao hưởng = cổ điển.'),
    Q('"He can ___ the piano very well." (play)', ['to play', 'plays (hiện tại đơn ngôi 3, không dùng sau can)', 'play', 'playing'], 2, 'Modal can + V.'),
    Q('"Folk song" means?', ['Rap music', 'Traditional song of the people', 'Classical concert', 'Modern dance'], 1, 'Dân ca = folk song.'),
  ]),

  M(8, 'Unit 4 — Comparative and Superlative adjectives', [
    Q('Comparative form of "tall"?', ['taller', 'more tall', 'tallor', 'tallest'], 0, 'Adj ngắn + er.'),
    Q('Superlative form of "good"?', ['best', 'better', 'goodest', 'gooder'], 0, 'Bất quy tắc: good → better → best.'),
    Q('Comparative of "beautiful"?', ['beautifuller', 'more beautiful', 'beautifulest', 'beautiful more'], 1, 'Adj dài: more + adj.'),
    Q('"Mai is ___ than Lan." (young)', ['youngest', 'younger', 'more young', 'young (dạng nguyên, thiếu -er + than)'], 1, 'So sánh hơn: adj + er + than.'),
    Q('"This is ___ song in the album." (good)', ['goodest', 'good (dạng nguyên, không phải so sánh nhất)', 'better', 'the best'], 3, 'Bất quy tắc + the (so sánh nhất).'),
    Q('Structure of superlative for short adjectives?', ['adj + er', 'the most + adj', 'the + adj + est', 'adj + est'], 2, 'The + adj + est.'),
  ]),

  M(9, 'Unit 5 — Vietnamese Food and Drink', [
    Q('"Phở" is what kind of food?', ['Italian pizza (Bánh pizza Ý)', 'Vietnamese noodle soup', 'Sandwich', 'Vegetable salad (Sa-lát rau)'], 1, 'Phở là món truyền thống Việt.'),
    Q('Which is a Vietnamese drink?', ['Coffee from Brazil', 'Sugarcane juice (nước mía)', 'Tea from England', 'Coca-Cola'], 1, 'Nước mía rất phổ biến ở VN.'),
    Q('"How ___ rice do you need?" (uncountable noun)', ['few (dùng với danh từ đếm được số nhiều)', 'many (dùng với danh từ đếm được số nhiều)', 'some (dùng trong câu khẳng định, không phải hỏi \'how\')', 'much'], 3, '"Rice" không đếm được → much.'),
    Q('"How ___ apples are there?" (countable plural)', ['much (dùng với danh từ không đếm được)', 'an (mạo từ, không hợp \'how\')', 'many', 'a (mạo từ, không hợp \'how\' với số nhiều)'], 2, 'Đếm được số nhiều → many.'),
    Q('Quantifier "a little" goes with?', ['Countable singular', 'Adjectives (tính từ, không đi với \'a little\')', 'Uncountable nouns', 'Countable plural'], 2, '"A little" + UC noun.'),
    Q('"A few" goes with?', ['Countable plural', 'Uncountable', 'Singular', 'Adjective (tính từ, không đi với \'a few\')'], 0, '"A few" + đếm được số nhiều.'),
  ]),

  M(10, 'Unit 5 — Imperatives & Recipe instructions', [
    Q('Imperative form starts with?', ['V-ing (dạng -ing dùng cho danh động từ)', 'Bare verb (V)', 'V + ed', 'To + V'], 1, 'Mệnh lệnh: Open the book!'),
    Q('"___ the door, please." (mở)', ['Opens (hiện tại đơn ngôi 3, không phải mệnh lệnh)', 'Opening', 'Open', 'To open'], 2, 'Imperative + please cho lịch sự.'),
    Q('Negative imperative?', ['No + V', 'Not + V', 'Don\'t + V', 'Doesn\'t + V'], 2, 'Don\'t open the door!'),
    Q('"First, ___ the rice." (rửa)', ['washes', 'washing', 'wash', 'washed'], 2, 'Imperative trong recipe.'),
    Q('"Then ___ the meat for 30 minutes." (chiên)', ['fries (hiện tại đơn ngôi 3, không phải mệnh lệnh)', 'fried (quá khứ, không phải mệnh lệnh)', 'fry', 'frying'], 2, 'Recipe step → imperative.'),
    Q('Sequence words for recipes?', ['First, then, next, finally', 'If, when', 'Because, so', 'And, or, but'], 0, 'Từ chỉ thứ tự.'),
  ]),

  M(11, 'Unit 6 — The First University in Vietnam', [
    Q('"The first university in Vietnam" is?', ['Hanoi University', 'Văn Miếu – Quốc Tử Giám', 'Saigon University', 'Hue University'], 1, 'Quốc Tử Giám thành lập 1076.'),
    Q('"Văn Miếu" was built to honor?', ['Kings only', 'Buddha', 'Soldiers', 'Confucius and scholars'], 3, 'Thờ Khổng Tử và các bậc hiền tài.'),
    Q('Past simple of "build"?', ['build (nguyên mẫu, không phải V2)', 'builded', 'built', 'builts (không phải dạng đúng của build)'], 2, 'Irregular: build → built.'),
    Q('"It ___ in 1070." (build, passive)', ['is built', 'built (V2, thiếu trợ động từ bị động)', 'building', 'was built'], 3, 'Bị động quá khứ: was/were + V3.'),
    Q('Passive voice present simple form?', ['will be + V3', 'was/were + V3', 'have/has been + V3', 'am/is/are + V3'], 3, 'Hiện tại đơn bị động.'),
    Q('"Doctors ___ by people." (admire) — present passive', ['admires', 'admire', 'are admired', 'is admired'], 2, 'Doctors số nhiều → are + V3.'),
  ]),

  M(12, 'Unit 6 — Passive voice (present simple)', [
    Q('Active: "People speak English everywhere." → Passive?', ['English are spoken everywhere.', 'English is spoken everywhere.', 'English speaks everywhere.', 'English was spoken everywhere.'], 1, 'Be + V3.'),
    Q('Passive of "She writes a letter"?', ['A letter are written by her.', 'A letter writes by her.', 'A letter was written by her.', 'A letter is written by her.'], 3, 'Singular → is + written.'),
    Q('"The cake ___ by Mai every Sunday." (make)', ['was made', 'making', 'makes (chủ động, không phải bị động)', 'is made'], 3, 'Every Sunday → present simple passive.'),
    Q('In passive, the agent is introduced by?', ['of (giới từ sở hữu, không giới thiệu tác nhân)', 'from (chỉ nguồn gốc, không phải tác nhân)', 'by', 'with (chỉ công cụ, không phải tác nhân)'], 2, 'By + agent.'),
    Q('When to use passive?', ['In imperatives', 'When ordering', 'When asking questions', 'When the action is more important than the doer'], 3, 'Nhấn vào hành động/đối tượng.'),
    Q('"Vietnamese ___ in Vietnam." (speak)', ['is speaking', 'was spoken', 'is spoken', 'speaks'], 2, 'Tiếng Việt được nói ở VN.'),
  ]),

  M(13, 'Unit 7 — Traffic (Vocabulary & signs)', [
    Q('A red traffic light means?', ['Stop', 'Slow down', 'Go (đèn xanh, không phải đèn đỏ)', 'Turn left'], 0, 'Đèn đỏ = dừng.'),
    Q('"Pedestrian" means?', ['A passenger', 'A person walking on the street', 'A policeman', 'A driver'], 1, 'Người đi bộ.'),
    Q('You should walk on the ___ when crossing the street.', ['road (lòng đường — nguy hiểm cho người đi bộ)', 'zebra crossing', 'pavement', 'highway'], 1, 'Vạch sang đường.'),
    Q('"Helmet" must be worn when riding a?', ['Motorbike', 'Plane (máy bay — không yêu cầu helmet)', 'Boat (thuyền — không bắt buộc helmet)', 'Train (tàu hỏa — không cần helmet)'], 0, 'Đội mũ bảo hiểm khi đi xe máy.'),
    Q('"No parking" sign means?', ['Don\'t park here', 'You can\'t stop here (Không được dừng tại đây)', 'Slow down', 'Park here'], 0, 'Cấm đỗ xe.'),
    Q('Used to + V means?', ['A future plan', 'A finished action yesterday', 'A past habit that no longer happens', 'A present habit'], 2, 'Đã từng có thói quen trong quá khứ.'),
  ]),

  M(14, 'Unit 7 — "It takes (sb) (time) to V"', [
    Q('"It takes me 20 minutes to ___ to school." (go)', ['going (V-ing, sai cấu trúc \'to V\')', 'goes (hiện tại đơn ngôi 3)', 'go', 'went (quá khứ, sai vì cần \'to + V\')'], 2, 'It takes + sb + time + to + V.'),
    Q('"How long ___ it take you to do homework?"', ['is (be, không dùng cho động từ thường \'take\')', 'does', 'are (be số nhiều, sai với \'it\')', 'do (trợ động từ, sai vì it cần does)'], 1, 'It takes → does it take.'),
    Q('"It takes my mother an hour to cook dinner." → câu hỏi how long?', ['How long is it take?', 'How long was it take?', 'How long does it take your mother to cook dinner?', 'How long do it take your mother to cook?'], 2, 'Form: How long does + S + take to V.'),
    Q('Distance question: "How ___ is it from your house to school?"', ['long (How long → hỏi thời gian/độ dài)', 'much (How much → hỏi giá/lượng)', 'many (How many → hỏi số lượng đếm được)', 'far'], 3, 'How far → khoảng cách.'),
    Q('"It is about 2 ___ from my house to the city." (km)', ['metre (số ít, thiếu -s)', 'kilo (viết tắt không trang trọng, thiếu metre)', 'kilometre', 'kilometres'], 3, 'Số nhiều của km.'),
    Q('Means of transport: "I go to school ___ bike."', ['in (dùng cho xe có khoang kín, không dùng cho bike)', 'on (dùng cho phương tiện cụ thể có \'a\': on a bike)', 'by', 'with (chỉ đi cùng ai, không phải phương tiện)'], 2, 'By + phương tiện (by bike, by bus).'),
  ]),

  M(15, 'Unit 8 — Films (Movies)', [
    Q('A "thriller" is a film that?', ['Makes you laugh', 'Makes you feel excited and tense', 'Tells a love story only', 'Teaches you science'], 1, 'Phim ly kì.'),
    Q('"Comedy" makes you?', ['Cry (Khóc — đó là phim buồn/drama)', 'Laugh', 'Scared', 'Sleepy'], 1, 'Hài kịch.'),
    Q('"Cartoon" is a film for?', ['Only adults', 'Old people', 'Animals', 'Children mostly'], 3, 'Phim hoạt hình.'),
    Q('"The film is so boring!" — boring means?', ['Very sad', 'Very funny', 'Very long', 'Not interesting'], 3, 'Chán = boring.'),
    Q('"The acting was excellent." → excellent means?', ['Average', 'Very good', 'Boring (Chán — ngược nghĩa)', 'Strange'], 1, 'Xuất sắc.'),
    Q('"I have ___ that film three times." (see)', ['seeing', 'see (nguyên mẫu, sai sau \'have\')', 'saw (V2 quá khứ, sai sau \'have\')', 'seen'], 3, 'Present perfect: have + seen.'),
  ]),

  M(16, 'Unit 8 — Although / However / Connectors', [
    Q('"___ it rained heavily, we went out." (mặc dù)', ['Although', 'So (Vì vậy — chỉ kết quả)', 'And (Và — chỉ nối thêm, không tương phản)', 'Because'], 0, 'Although + clause = mặc dù.'),
    Q('"He is very smart. ___, he failed the test."', ['So (Vì vậy — chỉ kết quả, không tương phản)', 'However', 'Because', 'And (Và — chỉ nối thêm)'], 1, 'However = tuy nhiên (đầu câu mới).'),
    Q('"___ of the rain, we cancelled the trip." (vì)', ['But (Nhưng — liên từ tương phản, không đi với \'of\')', 'Because', 'Although', 'Because of'], 3, 'Because of + noun.'),
    Q('"Because" is followed by?', ['An adjective', 'A clause (S + V)', 'A noun phrase', 'An adverb'], 1, 'Because + S + V.'),
    Q('"___ being tired, she kept working." (mặc dù)', ['However', 'Because', 'Despite', 'Although'], 2, 'Despite/In spite of + N/V-ing.'),
    Q('"The film was long, ___ it was interesting."', ['so (vì vậy — chỉ kết quả, không tương phản)', 'but', 'because', 'or (hoặc — chỉ lựa chọn)'], 1, 'But = nhưng (tương phản nhẹ).'),
  ]),

  M(17, 'Review HK1 — Tenses overview', [
    Q('"I ___ TV every evening." (present simple)', ['am watching', 'watch', 'watches', 'watched'], 1, 'I + V.'),
    Q('"She ___ to music now." (present continuous)', ['listens', 'listened', 'is listening', 'listen'], 2, 'Now → V-ing.'),
    Q('"They ___ Hanoi last summer." (visit)', ['visit (hiện tại đơn, sai vì có \'last summer\')', 'visited', 'visits', 'are visiting'], 1, 'Last summer → past simple.'),
    Q('"My brother ___ the guitar very well." (play)', ['played', 'play (thiếu -s ở ngôi 3 số ít)', 'plays', 'is playing'], 2, 'Habit + 3rd person.'),
    Q('Passive: "Rice ___ in Vietnam." (grow)', ['grew (quá khứ chủ động, không phải bị động)', 'grows (chủ động, không phải bị động)', 'was grown', 'is grown'], 3, 'Hiện tại đơn bị động.'),
    Q('Choose the best: "___ I help you?"', ['Will (sẽ — diễn tả tương lai, không lịch sự bằng May)', 'May', 'Should', 'Must (phải — quá bắt buộc, không lịch sự)'], 1, 'May = xin phép giúp đỡ lịch sự.'),
  ]),

  M(18, 'Final exam HK1 — Mixed', [
    Q('Comparative of "happy"?', ['happyer', 'happier', 'more happy', 'happiest'], 1, 'Adj 2 âm tiết kết thúc -y → -ier.'),
    Q('"Don\'t ___ here!" (smoke)', ['smokes', 'smoke', 'smoking', 'smoked'], 1, 'Don\'t + V.'),
    Q('"How ___ sugar do we need?" (uncountable)', ['few (dùng với danh từ đếm được số nhiều)', 'much', 'many (dùng với danh từ đếm được số nhiều)', 'any (dùng trong câu hỏi yes/no, không hỏi lượng)'], 1, 'Much + UC.'),
    Q('Past of "buy"?', ['buyed (sai chính tả, buy là bất quy tắc)', 'buys (hiện tại đơn ngôi 3)', 'buyt (sai chính tả, không phải dạng đúng)', 'bought'], 3, 'Irregular: bought.'),
    Q('"My school ___ in 1995." (build, passive)', ['was built', 'is building', 'built (V2 chủ động, thiếu trợ động từ be)', 'is built'], 0, 'Passive past simple.'),
    Q('"___ she play tennis?" (does she chơi quần vợt không)', ['Does', 'Do (hiện tại đơn, sai vì ngôi 3 cần Does)', 'Did (quá khứ đơn, không phải hiện tại)', 'Is (be, không dùng cho động từ thường \'play\')'], 0, 'Present simple, ngôi 3 → Does + S + V.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Festivals around the World', [
    Q('"Christmas" is celebrated on?', ['January 1st', 'December 25th', 'October 31st', 'February 14th'], 1, 'Lễ Giáng Sinh 25/12.'),
    Q('"Lunar New Year" in Vietnam is called?', ['Mid-Autumn', 'Hung Kings', 'National Day', 'Tet'], 3, 'Tết Nguyên đán.'),
    Q('"Halloween" is associated with?', ['Christmas tree', 'Easter eggs', 'Pumpkins and costumes', 'Lanterns'], 2, 'Bí ngô và trang phục ma quỷ.'),
    Q('"Mid-Autumn Festival" in Vietnam is for?', ['Farmers only', 'Soldiers', 'Children', 'Doctors'], 2, 'Tết Trung Thu cho thiếu nhi.'),
    Q('"Lantern" (n) means?', ['Quả bóng', 'Đèn lồng', 'Cái mũ', 'Cái trống'], 1, 'Đèn lồng — Trung Thu.'),
    Q('Adverbs of manner often end in?', ['-ing', '-er', '-ed', '-ly'], 3, 'Quick → quickly.'),
  ]),

  M(20, 'Unit 9 — Adverbs of manner', [
    Q('Adverb form of "quick"?', ['quick (tính từ, không phải trạng từ)', 'quicker', 'quickness', 'quickly'], 3, 'Adj + ly.'),
    Q('"She sings ___." (beautiful)', ['beautifully', 'beautiful', 'beauty', 'more beautiful'], 0, 'Adv of manner.'),
    Q('Irregular adverb of "good" is?', ['best (so sánh nhất, không phải trạng từ thường)', 'better', 'goodly', 'well'], 3, 'good → well.'),
    Q('"He runs very ___." (fast)', ['fastly', 'fast', 'faster', 'fastest'], 1, '"Fast" vừa là adj vừa là adv.'),
    Q('Position of adverb of manner is usually?', ['Before the verb always', 'At the beginning', 'Before the subject', 'After the main verb / after object'], 3, 'Sau V hoặc sau tân ngữ.'),
    Q('"They worked ___." (chăm chỉ)', ['hard', 'harder', 'hardly', 'hardest'], 0, 'Hard = chăm chỉ; hardly = hầu như không.'),
  ]),

  M(21, 'Unit 10 — Sources of Energy', [
    Q('Renewable energy includes?', ['Plastic', 'Solar, wind, water', 'Coal, oil, gas', 'Wood, paper'], 1, 'Năng lượng tái tạo.'),
    Q('Non-renewable energy?', ['Water (Thủy điện — tái tạo)', 'Solar (Năng lượng mặt trời — tái tạo)', 'Coal and oil', 'Wind (Năng lượng gió — tái tạo)'], 2, 'Hoá thạch không tái tạo.'),
    Q('"Solar energy" comes from?', ['Coal (Than đá — đó là năng lượng hóa thạch)', 'Water (Nước — đó là thủy điện)', 'The sun', 'The wind'], 2, 'Năng lượng mặt trời.'),
    Q('Future simple form?', ['am/is/are + V-ing', 'going to + V', 'have + V3', 'will + V'], 3, 'Will + bare V.'),
    Q('"Tomorrow, I ___ visit my grandparents."', ['do (trợ động từ hiện tại, không phải tương lai)', 'will', 'did (quá khứ, ngược với \'Tomorrow\')', 'am (be, không phải tương lai đơn)'], 1, 'Tomorrow → will.'),
    Q('"They ___ run out of oil in the future." (might)', ['mighting', 'might', 'mights', 'to might'], 1, 'Might + V (có thể).'),
  ]),

  M(22, 'Nghỉ Tết — Light review', [
    Q('"Tet" is celebrated in?', ['Vietnam', 'China (Trung Quốc — họ có Lunar New Year riêng)', 'England', 'France'], 0, 'Tết Việt Nam.'),
    Q('"Happy New Year!" means?', ['Cảm ơn!', 'Chúc mừng năm mới!', 'Tạm biệt!', 'Chào buổi sáng!'], 1, 'Lời chúc đầu năm.'),
    Q('Past of "see"?', ['saw', 'sees (hiện tại đơn ngôi 3)', 'seen (quá khứ phân từ V3)', 'seed (sai vì see là bất quy tắc)'], 0, 'Irregular.'),
    Q('Adverb of "slow"?', ['slowless', 'slowness', 'slowily (sai chính tả, thừa chữ i)', 'slowly'], 3, 'Slow → slowly.'),
    Q('Comparative of "big"?', ['biger (sai vì thiếu gấp đôi phụ âm cuối)', 'more big', 'bigger', 'bigest'], 2, 'Phụ âm + nguyên âm + phụ âm: gấp đôi phụ âm cuối + er.'),
    Q('"I ___ very tired now." (be)', ['am', 'be (nguyên mẫu, chưa chia)', 'is (dùng cho he/she/it)', 'are (dùng cho you/we/they)'], 0, 'I + am.'),
  ]),

  M(23, 'Unit 10 — Future simple (will / won\'t)', [
    Q('"I think it ___ rain tomorrow." (will)', ['do (trợ động từ hiện tại, không phải tương lai)', 'won\'t (sẽ không — ngược nghĩa với dự đoán có mưa)', 'is (be, không phải tương lai đơn)', 'will'], 3, 'Will + V.'),
    Q('Negative of "will" is?', ['don\'t (phủ định hiện tại đơn, không phải tương lai)', 'doesn\'t', 'won\'t (will not)', 'didn\'t'], 2, 'Will not = won\'t.'),
    Q('Question: "___ they come to the party?"', ['Do (hiện tại đơn, không phải tương lai)', 'Will', 'Are (be hiện tại, không phải tương lai đơn)', 'Did (quá khứ đơn, không phải tương lai)'], 1, 'Will + S + V?'),
    Q('Future time markers?', ['every day', 'tomorrow, next week, in 2050', 'now, at the moment', 'yesterday, last year'], 1, 'Dấu hiệu tương lai.'),
    Q('"By 2050, robots ___ many jobs." (do)', ['are doing', 'did (quá khứ, sai vì \'By 2050\' là tương lai)', 'do (hiện tại đơn, sai vì \'By 2050\' là tương lai)', 'will do'], 3, '"By 2050" → tương lai.'),
    Q('"I ___ help you with your homework." (offer)', ['will', 'did (quá khứ, không phải lời đề nghị tương lai)', 'do (hiện tại đơn, không phải đề nghị tương lai)', 'am (be, không dùng với \'help\')'], 0, 'Offer = will.'),
  ]),

  M(24, 'Unit 11 — Travelling in the Future', [
    Q('"Means of transport" includes?', ['Food, drink', 'Houses, schools', 'Cars, bikes, trains, planes', 'Books, pens, rulers (Sách, bút, thước — đồ học tập)'], 2, 'Phương tiện đi lại.'),
    Q('"Driverless car" means?', ['A car for one person', 'A small car', 'A car without a driver', 'An old car'], 2, 'Xe tự lái.'),
    Q('"In the future, people ___ to Mars." (travel)', ['will travel', 'are travelling', 'travelled', 'travel'], 0, 'Future simple.'),
    Q('"Hyperloop" is a fast?', ['Transport tube system', 'Boat (Thuyền — phương tiện chậm trên nước)', 'Bicycle', 'Plane (Máy bay — phương tiện hàng không)'], 0, 'Hệ thống đường ống tốc độ cao.'),
    Q('"Eco-friendly" vehicles are?', ['Polluting (Gây ô nhiễm — ngược nghĩa)', 'Expensive', 'Good for the environment', 'Heavy (Nặng — không liên quan môi trường)'], 2, 'Thân thiện môi trường.'),
    Q('Future plan with "be going to" structure?', ['have + V3', 'will + V', 'am/is/are + going to + V', 'V + ed'], 2, 'Be + going to + V.'),
  ]),

  M(25, 'Unit 11 — Going to + V for future plans', [
    Q('"I ___ visit my uncle this weekend." (going to)', ['are going to', 'will going to', 'is going to', 'am going to'], 3, 'I am going to + V.'),
    Q('"She ___ travel to Japan next month."', ['is going to', 'will going to', 'are going to', 'am going to'], 0, 'She → is.'),
    Q('Negative: "We ___ stay home."', ['don\'t going to', 'aren\'t going to', 'won\'t going to', 'isn\'t going to'], 1, 'We are not = aren\'t.'),
    Q('Question: "___ you going to study tonight?"', ['Will (tương lai đơn với V, không kèm going to)', 'Is (be số ít, sai với \'you\')', 'Are', 'Do (trợ động từ, không dùng với \'going to\')'], 2, 'Are + S + going to + V?'),
    Q('"Be going to" expresses?', ['Past events', 'Plans or intentions', 'Habits', 'Permission'], 1, 'Kế hoạch/dự định.'),
    Q('"Look at those clouds! It ___ rain." (going to)', ['is going to', 'is go to', 'goes to', 'will (dự đoán không bằng chứng, ở đây có dấu hiệu rõ)'], 0, 'Dấu hiệu hiện tại → going to (prediction with evidence).'),
  ]),

  M(26, 'Unit 12 — An Overcrowded World', [
    Q('"Overcrowded" means?', ['Too many people in a place', 'Comfortable', 'Peaceful (Yên bình — ngược nghĩa)', 'Spacious (Rộng rãi — ngược nghĩa)'], 0, 'Quá đông đúc.'),
    Q('Effects of overpopulation include?', ['More fresh water', 'Better life only', 'Pollution, lack of housing, traffic jams', 'More forests'], 2, 'Tác động tiêu cực.'),
    Q('"Megacity" is a city with?', ['Less than 1 million', 'About 100,000 people', '50,000 people', 'More than 10 million people'], 3, 'Siêu đô thị.'),
    Q('"___ ever been to a big city?" (Have you)', ['Do you', 'Are you', 'Have you', 'Did you'], 2, 'Present perfect: Have + S + V3.'),
    Q('Present perfect form?', ['have/has + V3', 'am/is/are + V-ing', 'was/were + V3', 'will + V'], 0, 'Have + V3.'),
    Q('"She ___ in this city for 5 years." (live)', ['lived (quá khứ đơn, không hợp \'for 5 years\' tới hiện tại)', 'has lived', 'lives (hiện tại đơn, không diễn tả quãng thời gian kéo dài)', 'is living'], 1, 'For 5 years → present perfect.'),
  ]),

  M(27, 'Unit 12 — Present perfect', [
    Q('Present perfect of "go"?', ['have goed', 'have gone', 'have went', 'have going'], 1, 'go → gone (V3).'),
    Q('"I ___ this film twice." (see)', ['have seen', 'am seeing', 'saw (quá khứ đơn, không diễn tả kinh nghiệm)', 'see (hiện tại đơn, không kèm số lần kinh nghiệm)'], 0, 'Twice → present perfect (kinh nghiệm).'),
    Q('Time markers for present perfect?', ['yesterday, ago', 'now (dùng cho hiện tại tiếp diễn)', 'ever, never, just, already, yet, since, for', 'tomorrow, next week'], 2, 'Đặc trưng present perfect.'),
    Q('"He has ___ his homework." (finish)', ['finishing', 'finishes', 'finish', 'finished'], 3, 'Has + V3.'),
    Q('"___ you ever ___ to Hue?" (be)', ['Did / be', 'Are / been', 'Have / been', 'Do / be'], 2, 'Have + S + ever + been.'),
    Q('Negative: "I ___ him for years." (not see)', ['am not seeing', 'don\'t see', 'haven\'t seen', 'didn\'t see'], 2, 'Haven\'t + V3.'),
  ]),

  M(28, 'Conditional Type 1 (real future)', [
    Q('Conditional type 1 form?', ['If + S + V-ing', 'If + S + had + V3, S + would have + V3', 'If + S + V2, S + would + V', 'If + S + V (present), S + will + V'], 3, 'Real condition: if + present, will + V.'),
    Q('"If it ___ tomorrow, we will stay home." (rain)', ['rained', 'will rain', 'rains', 'rain (thiếu -s ở ngôi 3 số ít \'it\')'], 2, 'If clause = present simple.'),
    Q('"If you study hard, you ___ pass the test." (will)', ['would (loại 2, không phải loại 1 thực tế)', 'will', 'are (be, không phải tương lai đơn)', 'have (trợ động từ hoàn thành, sai cấu trúc)'], 1, 'Main clause = will + V.'),
    Q('"If she ___ early, she will catch the bus." (leave)', ['will leave', 'leaves', 'leave (thiếu -s ở ngôi 3 số ít)', 'left (quá khứ đơn, không phải cond. 1)'], 1, 'Ngôi 3 → leaves.'),
    Q('We use conditional type 1 for?', ['Present unreal', 'Past unreal', 'Real or possible situations in the future', 'Impossible situations'], 2, 'Tình huống có khả năng xảy ra.'),
    Q('"If we don\'t save energy, we ___ run out of it." (will)', ['wouldn\'t', 'won\'t (sẽ không — ngược nghĩa với hậu quả \'cạn kiệt\')', 'will', 'would (loại 2, không phải loại 1 thực tế)'], 2, 'Hậu quả tương lai.'),
  ]),

  M(29, 'Vocabulary review — Environment & Society', [
    Q('"Pollution" means?', ['Khí trời', 'Sự sạch sẽ', 'Sự ô nhiễm', 'Mặt trời'], 2, 'Ô nhiễm.'),
    Q('"Recycle" means?', ['Mua mới', 'Đốt rác', 'Tái chế', 'Bỏ rác'], 2, 'Re + cycle.'),
    Q('"Reduce" means?', ['Tái chế (đó là recycle)', 'Tái sử dụng (đó là reuse)', 'Giảm', 'Sản xuất (đó là produce)'], 2, 'Reduce = giảm.'),
    Q('"Reuse" means?', ['Tái sử dụng', 'Tái chế (đó là recycle, không phải reuse)', 'Mua lại', 'Cho đi'], 0, 'Re + use.'),
    Q('"Plant trees" helps?', ['Reduce pollution and CO2', 'Increase traffic', 'Make noise', 'Waste water'], 0, 'Trồng cây tốt cho môi trường.'),
    Q('"Save water" means?', ['Đổ nước', 'Lưu nước', 'Tiết kiệm nước', 'Mua nước'], 2, 'Save = tiết kiệm.'),
  ]),

  M(30, 'Reading skill — Identifying main idea & details', [
    Q('When skimming a text, you should?', ['Memorize the whole text', 'Translate every sentence', 'Read every word slowly', 'Read quickly for the main idea'], 3, 'Skim = đọc lướt.'),
    Q('Scanning is used for?', ['Counting words', 'Reading for pleasure', 'Finding specific information (names, dates, numbers)', 'Translating word by word'], 2, 'Scan = quét tìm chi tiết.'),
    Q('A topic sentence often appears?', ['At the beginning of a paragraph', 'In every sentence', 'Always at the end', 'In the middle only'], 0, 'Câu chủ đề thường đầu đoạn.'),
    Q('Context clues help you?', ['Translate exactly', 'Guess meanings of unknown words', 'Count syllables', 'Pronounce correctly'], 1, 'Đoán nghĩa qua ngữ cảnh.'),
    Q('Before reading, you should?', ['Translate the whole text', 'Skip the title', 'Read the last paragraph first', 'Look at title, pictures, headings'], 3, 'Pre-reading strategy.'),
    Q('After reading, you should?', ['Read aloud once more only', 'Forget it immediately', 'Summarize the main idea', 'Translate again'], 2, 'Củng cố hiểu.'),
  ]),

  M(31, 'Writing skill — Paragraph organization', [
    Q('A good paragraph has?', ['Only questions', 'Many unrelated ideas', 'One main idea with supporting details', 'Only commands'], 2, 'Một ý chính + chi tiết hỗ trợ.'),
    Q('A topic sentence states?', ['A question', 'A joke', 'An order', 'The main idea of the paragraph'], 3, 'Câu chủ đề.'),
    Q('Supporting sentences provide?', ['Examples, reasons, details', 'New topics', 'Translations', 'Unrelated information'], 0, 'Phát triển ý chủ đề.'),
    Q('Concluding sentence does what?', ['Introduces a new topic', 'Asks an unrelated question', 'Repeats the topic sentence exactly', 'Restates the main idea or gives a final thought'], 3, 'Kết câu chủ đề.'),
    Q('Linking words include?', ['Apple, orange, banana', 'Big, small, tall', 'First, then, finally, however', 'Run, jump, swim'], 2, 'Từ nối.'),
    Q('Before writing, you should?', ['Copy from a friend', 'Start immediately without planning', 'Skip the topic', 'Brainstorm and outline'], 3, 'Lập dàn ý trước.'),
  ]),

  M(32, 'Speaking — Giving opinions & agreeing/disagreeing', [
    Q('To give an opinion, you can say?', ['"Hello!"', '"I think…"', '"Thank you!"', '"Yes / No only"'], 1, '"I think…", "In my opinion…".'),
    Q('To agree, you say?', ['"I agree" / "That\'s right"', '"Sorry"', '"I don\'t think so"', '"No way"'], 0, 'Đồng tình.'),
    Q('To disagree politely?', ['"You are wrong!"', '"No, no, no!"', '"I see your point, but…"', '"Stop!"'], 2, 'Bất đồng lịch sự.'),
    Q('To ask for opinion?', ['"What do you think?"', '"How old are you?"', '"What time is it?"', '"Where are you?"'], 0, 'Hỏi quan điểm.'),
    Q('When speaking, eye contact is?', ['Important and polite', 'Aggressive (Hung hăng — gây khó chịu)', 'Unnecessary', 'Forbidden'], 0, 'Giao tiếp mắt là lịch sự.'),
    Q('To buy time while thinking, say?', ['"Goodbye!"', '"Well…", "Let me think…"', '"Hello!"', '"Thank you!"'], 1, 'Filler phrases.'),
  ]),

  M(33, 'Listening — Predicting & note-taking', [
    Q('Before listening, you should?', ['Read questions and predict answers', 'Translate the title', 'Memorise the whole script (Học thuộc toàn bộ kịch bản)', 'Close your eyes'], 0, 'Dự đoán nội dung.'),
    Q('Key words help you?', ['Confuse you', 'Slow you down', 'Distract you', 'Focus on important information'], 3, 'Tập trung từ khoá.'),
    Q('When taking notes, use?', ['Pictures only', 'Full sentences', 'Abbreviations and symbols', 'No words'], 2, 'Viết tắt nhanh.'),
    Q('If you don\'t understand a word, you should?', ['Write down every word (Viết lại mọi từ — không kịp)', 'Stop completely', 'Translate every word', 'Keep listening for context'], 3, 'Đoán qua ngữ cảnh.'),
    Q('After listening, you should?', ['Listen again forever', 'Throw notes away', 'Check your answers and reflect', 'Forget immediately'], 2, 'Kiểm tra và phản hồi.'),
    Q('Listening for gist means?', ['Listening for the general idea', 'Memorizing every word', 'Listening for every detail', 'Counting words'], 0, 'Hiểu ý chính.'),
  ]),

  M(34, 'Grammar review — All tenses', [
    Q('"She ___ tennis every Sunday." (play)', ['is playing', 'played', 'has played', 'plays'], 3, 'Habit → present simple, 3rd → plays.'),
    Q('"They ___ a film right now." (watch)', ['are watching', 'watched', 'will watch', 'watch (hiện tại đơn, không hợp \'right now\')'], 0, 'Right now → present continuous.'),
    Q('"We ___ to Da Nang last summer." (go)', ['have gone', 'go (hiện tại đơn, sai vì có \'last summer\')', 'went', 'are going'], 2, 'Last summer → past simple.'),
    Q('"I ___ never ___ to Japan." (be)', ['will / be', 'do / be', 'have / been', 'did / be'], 2, 'Never → present perfect.'),
    Q('"Tomorrow, I ___ a new car." (buy, plan)', ['will buy', 'bought', 'am buying', 'am going to buy'], 3, 'Plan → going to.'),
    Q('"If you study hard, you ___ pass." (cond. 1)', ['have (trợ động từ hoàn thành, sai cấu trúc)', 'would (loại 2, không phải loại 1)', 'are (be, không phải tương lai đơn)', 'will'], 3, 'Cond. 1: if + present, will + V.'),
  ]),

  M(35, 'Final exam HK2 — Mixed', [
    Q('Choose the correct passive: "English ___ in many countries."', ['speaks', 'is spoken', 'spoke (quá khứ chủ động, không phải bị động hiện tại)', 'was spoken'], 1, 'Present passive.'),
    Q('Conditional: "If it rains, we ___ stay home."', ['do (trợ động từ hiện tại, không phải tương lai)', 'would (loại 2, không phải loại 1 thực tế)', 'will', 'have (trợ động từ hoàn thành, sai cấu trúc)'], 2, 'Cond. 1.'),
    Q('"I have ___ him since 2020." (know)', ['knowing', 'know (nguyên mẫu, sai sau \'have\')', 'knew (quá khứ đơn V2, sai sau \'have\')', 'known'], 3, 'Present perfect: known.'),
    Q('"They ___ to the party last night." (go)', ['have gone', 'go (hiện tại đơn, sai vì có \'last night\')', 'went', 'going (V-ing, thiếu trợ động từ)'], 2, 'Last night → past.'),
    Q('"___ you ___ to England?" (ever / be)', ['Are / been', 'Have / been', 'Do / be', 'Did / be'], 1, 'Ever → present perfect.'),
    Q('Comparative of "interesting"?', ['more interesting', 'interestinger', 'interestingest', 'most interesting'], 0, 'Adj dài → more.'),
  ]),
];

export const S7TA_SCENARIOS = indexBy(S7TA_WEEKS);
