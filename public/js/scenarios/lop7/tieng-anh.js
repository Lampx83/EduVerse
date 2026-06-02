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
    Q('"Hobby" means?', ['An activity you do for pleasure', 'A job', 'A school subject', 'A meal'], 0, 'Hobby = sở thích, làm vì niềm vui.'),
    Q('Which is a hobby?', ['Collecting stamps', 'Going to school', 'Eating breakfast', 'Sleeping at night'], 0, 'Collecting stamps là sở thích phổ biến.'),
    Q('"I ___ playing chess." → fill in.', ['enjoy', 'enjoys', 'enjoyed', 'enjoying'], 0, 'Present simple: I/you/we/they + V.'),
    Q('"He ___ photos in his free time." (take)', ['take', 'takes', 'took', 'is taking'], 1, 'He/She/It → V + s.'),
    Q('"Mountain climbing" is what kind of hobby?', ['Outdoor', 'Indoor', 'Cooking', 'Reading'], 0, 'Leo núi ngoài trời.'),
    Q('"What hobby do you have?" — Best answer?', ['I like dancing.', 'I am ten years old.', 'I have two pens.', 'I live in Hanoi.'], 0, 'Sở thích: like + V-ing.'),
  ]),

  M(2, 'Unit 1 — Present simple vs Present continuous', [
    Q('Present simple is used for?', ['Habits and routines', 'Actions happening right now', 'Future plans', 'Finished actions yesterday'], 0, 'Thói quen, sự thật.'),
    Q('Present continuous form is?', ['am/is/are + V-ing', 'V + ed', 'will + V', 'have + V3'], 0, 'be + V-ing.'),
    Q('"Look! She ___ a beautiful song." (sing)', ['sings', 'sing', 'is singing', 'sang'], 2, '"Look!" → đang xảy ra.'),
    Q('"My father ___ to work by bus every day." (go)', ['go', 'goes', 'is going', 'went'], 1, '"every day" → present simple, ngôi 3 +s.'),
    Q('Time marker for present continuous?', ['now, at the moment, look!', 'every day', 'yesterday', 'last week'], 0, 'Tín hiệu hiện tại tiếp diễn.'),
    Q('"I ___ a book now." (read)', ['read', 'reads', 'am reading', 'was reading'], 2, '"now" → present continuous.'),
  ]),

  M(3, 'Unit 2 — Health (Vocabulary)', [
    Q('"Toothache" means pain in?', ['Tooth', 'Stomach', 'Head', 'Back'], 0, 'Tooth + ache = đau răng.'),
    Q('Which is healthy food?', ['Vegetables and fruits', 'Sweets', 'Fast food', 'Soft drinks'], 0, 'Rau và trái cây là healthy.'),
    Q('"I have a ___." (đau đầu)', ['headache', 'stomach', 'cough', 'flu'], 0, 'Headache = đau đầu.'),
    Q('"You should drink more ___ every day."', ['water', 'coffee', 'cola', 'beer'], 0, 'Lời khuyên sức khoẻ phổ biến.'),
    Q('Should + V là cấu trúc?', ['Giving advice', 'Asking permission', 'Giving order', 'Future tense'], 0, 'Should = nên (khuyên).'),
    Q('"You ___ go to bed early." → khuyên đi ngủ sớm.', ['should', 'shouldn\'t', 'will', 'won\'t'], 0, 'Should = nên.'),
  ]),

  M(4, 'Unit 2 — Modal verbs: should / shouldn\'t / must / mustn\'t', [
    Q('"You ___ eat too much sugar." (không nên)', ['should', 'shouldn\'t', 'must', 'can'], 1, 'Shouldn\'t = không nên.'),
    Q('"Students ___ wear uniforms at school." (bắt buộc)', ['should', 'must', 'can', 'may'], 1, 'Must = bắt buộc.'),
    Q('"You ___ smoke here." (cấm)', ['must', 'mustn\'t', 'should', 'shouldn\'t'], 1, 'Mustn\'t = cấm tuyệt đối.'),
    Q('"___ I open the window?" (xin phép)', ['May', 'Must', 'Should', 'Will'], 0, 'May = xin phép lịch sự.'),
    Q('After modal verbs, we use?', ['bare infinitive (V)', 'V-ing', 'V + ed', 'to + V'], 0, 'Modal + V nguyên thể không to.'),
    Q('"He can ___ English well." (speak)', ['speak', 'speaks', 'speaking', 'to speak'], 0, 'Can + V.'),
  ]),

  M(5, 'Unit 3 — Community Service', [
    Q('"Community service" means?', ['Volunteer work to help the community', 'Going to a café', 'Watching TV', 'Doing homework'], 0, 'Hoạt động tình nguyện.'),
    Q('Which is a community service activity?', ['Cleaning the beach', 'Eating dinner', 'Playing video games', 'Reading a novel'], 0, 'Dọn bãi biển.'),
    Q('"Volunteer" (n) means?', ['A person who works without payment', 'A teacher', 'A doctor', 'A student'], 0, 'Tình nguyện viên.'),
    Q('"We ___ books to poor children last month." (give) — past simple', ['give', 'gave', 'are giving', 'will give'], 1, 'Past simple với "last month".'),
    Q('"They ___ trees in the park yesterday." (plant)', ['plant', 'plants', 'planted', 'planting'], 2, 'Yesterday → past simple, plant + ed.'),
    Q('Past simple of irregular verb "go" is?', ['goed', 'went', 'gone', 'going'], 1, 'go → went.'),
  ]),

  M(6, 'Unit 3 — Past simple (regular & irregular verbs)', [
    Q('Past simple of "play" is?', ['playd', 'played', 'plaied', 'plays'], 1, 'Regular: + ed.'),
    Q('Past simple of "study" is?', ['studyed', 'studied', 'studyd', 'studs'], 1, 'y → i + ed: studied.'),
    Q('Past simple of "see" is?', ['seed', 'saw', 'seen', 'sees'], 1, 'Irregular: see → saw.'),
    Q('Negative form: "She ___ help me." (không giúp)', ['didn\'t', 'doesn\'t', 'isn\'t', 'wasn\'t'], 0, 'Did + not + V.'),
    Q('Question: "___ they go to school yesterday?"', ['Do', 'Does', 'Did', 'Are'], 2, 'Past → Did + S + V?'),
    Q('Time markers for past simple?', ['yesterday, last week, ago, in 2020', 'now, today', 'tomorrow, next week', 'usually'], 0, 'Dấu hiệu quá khứ.'),
  ]),

  M(7, 'Unit 4 — Music and Arts', [
    Q('Which is a musical instrument?', ['Guitar', 'Pencil', 'Book', 'Plate'], 0, 'Guitar = đàn ghi-ta.'),
    Q('"Painting" (n) is a kind of?', ['Visual art', 'Music', 'Dance', 'Sport'], 0, 'Hội hoạ thuộc nghệ thuật thị giác.'),
    Q('"I ___ to music every evening." (listen)', ['listen', 'listens', 'listening', 'listened'], 0, 'I + V (present simple).'),
    Q('"Symphony" relates to?', ['Classical music', 'Pop music', 'Rock music', 'Sport'], 0, 'Giao hưởng = cổ điển.'),
    Q('"He can ___ the piano very well." (play)', ['play', 'plays', 'playing', 'to play'], 0, 'Modal can + V.'),
    Q('"Folk song" means?', ['Traditional song of the people', 'Modern dance', 'Classical concert', 'Rap music'], 0, 'Dân ca = folk song.'),
  ]),

  M(8, 'Unit 4 — Comparative and Superlative adjectives', [
    Q('Comparative form of "tall"?', ['more tall', 'taller', 'tallest', 'tallor'], 1, 'Adj ngắn + er.'),
    Q('Superlative form of "good"?', ['gooder', 'goodest', 'best', 'better'], 2, 'Bất quy tắc: good → better → best.'),
    Q('Comparative of "beautiful"?', ['beautifuller', 'more beautiful', 'beautifulest', 'beautiful more'], 1, 'Adj dài: more + adj.'),
    Q('"Mai is ___ than Lan." (young)', ['young', 'younger', 'youngest', 'more young'], 1, 'So sánh hơn: adj + er + than.'),
    Q('"This is ___ song in the album." (good)', ['better', 'the best', 'good', 'goodest'], 1, 'Bất quy tắc + the (so sánh nhất).'),
    Q('Structure of superlative for short adjectives?', ['the + adj + est', 'the most + adj', 'adj + er', 'adj + est'], 0, 'The + adj + est.'),
  ]),

  M(9, 'Unit 5 — Vietnamese Food and Drink', [
    Q('"Phở" is what kind of food?', ['Vietnamese noodle soup', 'Sandwich', 'Pizza', 'Salad'], 0, 'Phở là món truyền thống Việt.'),
    Q('Which is a Vietnamese drink?', ['Sugarcane juice (nước mía)', 'Coca-Cola', 'Coffee from Brazil', 'Tea from England'], 0, 'Nước mía rất phổ biến ở VN.'),
    Q('"How ___ rice do you need?" (uncountable noun)', ['many', 'much', 'few', 'some'], 1, '"Rice" không đếm được → much.'),
    Q('"How ___ apples are there?" (countable plural)', ['much', 'many', 'a', 'an'], 1, 'Đếm được số nhiều → many.'),
    Q('Quantifier "a little" goes with?', ['Uncountable nouns', 'Countable plural', 'Countable singular', 'Verbs'], 0, '"A little" + UC noun.'),
    Q('"A few" goes with?', ['Countable plural', 'Uncountable', 'Singular', 'Verb'], 0, '"A few" + đếm được số nhiều.'),
  ]),

  M(10, 'Unit 5 — Imperatives & Recipe instructions', [
    Q('Imperative form starts with?', ['Bare verb (V)', 'To + V', 'V-ing', 'V + ed'], 0, 'Mệnh lệnh: Open the book!'),
    Q('"___ the door, please." (mở)', ['Opening', 'To open', 'Open', 'Opens'], 2, 'Imperative + please cho lịch sự.'),
    Q('Negative imperative?', ['Don\'t + V', 'Not + V', 'No + V', 'Doesn\'t + V'], 0, 'Don\'t open the door!'),
    Q('"First, ___ the rice." (rửa)', ['wash', 'washes', 'washing', 'washed'], 0, 'Imperative trong recipe.'),
    Q('"Then ___ the meat for 30 minutes." (chiên)', ['fry', 'fries', 'frying', 'fried'], 0, 'Recipe step → imperative.'),
    Q('Sequence words for recipes?', ['First, then, next, finally', 'And, or, but', 'Because, so', 'If, when'], 0, 'Từ chỉ thứ tự.'),
  ]),

  M(11, 'Unit 6 — The First University in Vietnam', [
    Q('"The first university in Vietnam" is?', ['Văn Miếu – Quốc Tử Giám', 'Hanoi University', 'Hue University', 'Saigon University'], 0, 'Quốc Tử Giám thành lập 1076.'),
    Q('"Văn Miếu" was built to honor?', ['Confucius and scholars', 'Buddha', 'Kings only', 'Soldiers'], 0, 'Thờ Khổng Tử và các bậc hiền tài.'),
    Q('Past simple of "build"?', ['builded', 'built', 'build', 'bilt'], 1, 'Irregular: build → built.'),
    Q('"It ___ in 1070." (build, passive)', ['built', 'was built', 'is built', 'building'], 1, 'Bị động quá khứ: was/were + V3.'),
    Q('Passive voice present simple form?', ['am/is/are + V3', 'was/were + V3', 'will be + V3', 'have/has been + V3'], 0, 'Hiện tại đơn bị động.'),
    Q('"Doctors ___ by people." (admire) — present passive', ['admire', 'are admired', 'admires', 'is admired'], 1, 'Doctors số nhiều → are + V3.'),
  ]),

  M(12, 'Unit 6 — Passive voice (present simple)', [
    Q('Active: "People speak English everywhere." → Passive?', ['English is spoken everywhere.', 'English speaks everywhere.', 'English are spoken everywhere.', 'English was spoken everywhere.'], 0, 'Be + V3.'),
    Q('Passive of "She writes a letter"?', ['A letter is written by her.', 'A letter was written by her.', 'A letter writes by her.', 'A letter are written by her.'], 0, 'Singular → is + written.'),
    Q('"The cake ___ by Mai every Sunday." (make)', ['makes', 'is made', 'was made', 'making'], 1, 'Every Sunday → present simple passive.'),
    Q('In passive, the agent is introduced by?', ['by', 'with', 'from', 'of'], 0, 'By + agent.'),
    Q('When to use passive?', ['When the action is more important than the doer', 'When asking questions', 'When ordering', 'In imperatives'], 0, 'Nhấn vào hành động/đối tượng.'),
    Q('"Vietnamese ___ in Vietnam." (speak)', ['speaks', 'is speaking', 'is spoken', 'was spoken'], 2, 'Tiếng Việt được nói ở VN.'),
  ]),

  M(13, 'Unit 7 — Traffic (Vocabulary & signs)', [
    Q('A red traffic light means?', ['Stop', 'Go', 'Slow down', 'Turn left'], 0, 'Đèn đỏ = dừng.'),
    Q('"Pedestrian" means?', ['A person walking on the street', 'A driver', 'A passenger', 'A policeman'], 0, 'Người đi bộ.'),
    Q('You should walk on the ___ when crossing the street.', ['zebra crossing', 'highway', 'park', 'pavement'], 0, 'Vạch sang đường.'),
    Q('"Helmet" must be worn when riding a?', ['Motorbike', 'Boat', 'Train', 'Plane'], 0, 'Đội mũ bảo hiểm khi đi xe máy.'),
    Q('"No parking" sign means?', ['Don\'t park here', 'Park here', 'Slow down', 'Stop'], 0, 'Cấm đỗ xe.'),
    Q('Used to + V means?', ['A past habit that no longer happens', 'A future plan', 'A present habit', 'A finished action yesterday'], 0, 'Đã từng có thói quen trong quá khứ.'),
  ]),

  M(14, 'Unit 7 — "It takes (sb) (time) to V"', [
    Q('"It takes me 20 minutes to ___ to school." (go)', ['go', 'goes', 'going', 'went'], 0, 'It takes + sb + time + to + V.'),
    Q('"How long ___ it take you to do homework?"', ['do', 'does', 'is', 'are'], 1, 'It takes → does it take.'),
    Q('"It takes my mother an hour to cook dinner." → câu hỏi how long?', ['How long does it take your mother to cook dinner?', 'How long do it take your mother to cook?', 'How long is it take?', 'How long was it take?'], 0, 'Form: How long does + S + take to V.'),
    Q('Distance question: "How ___ is it from your house to school?"', ['far', 'long', 'much', 'many'], 0, 'How far → khoảng cách.'),
    Q('"It is about 2 ___ from my house to the city." (km)', ['kilometres', 'kilometre', 'kilo', 'metre'], 0, 'Số nhiều của km.'),
    Q('Means of transport: "I go to school ___ bike."', ['by', 'on', 'in', 'with'], 0, 'By + phương tiện (by bike, by bus).'),
  ]),

  M(15, 'Unit 8 — Films (Movies)', [
    Q('A "thriller" is a film that?', ['Makes you feel excited and tense', 'Makes you laugh', 'Teaches you science', 'Tells a love story only'], 0, 'Phim ly kì.'),
    Q('"Comedy" makes you?', ['Laugh', 'Cry', 'Scared', 'Sleepy'], 0, 'Hài kịch.'),
    Q('"Cartoon" is a film for?', ['Children mostly', 'Only adults', 'Old people', 'Animals'], 0, 'Phim hoạt hình.'),
    Q('"The film is so boring!" — boring means?', ['Not interesting', 'Very funny', 'Very sad', 'Very long'], 0, 'Chán = boring.'),
    Q('"The acting was excellent." → excellent means?', ['Very good', 'Bad', 'Average', 'Strange'], 0, 'Xuất sắc.'),
    Q('"I have ___ that film three times." (see)', ['see', 'saw', 'seen', 'seeing'], 2, 'Present perfect: have + seen.'),
  ]),

  M(16, 'Unit 8 — Although / However / Connectors', [
    Q('"___ it rained heavily, we went out." (mặc dù)', ['Because', 'Although', 'So', 'And'], 1, 'Although + clause = mặc dù.'),
    Q('"He is very smart. ___, he failed the test."', ['However', 'And', 'Because', 'So'], 0, 'However = tuy nhiên (đầu câu mới).'),
    Q('"___ of the rain, we cancelled the trip." (vì)', ['Because', 'Because of', 'Although', 'But'], 1, 'Because of + noun.'),
    Q('"Because" is followed by?', ['A clause (S + V)', 'A noun phrase', 'An adjective', 'An adverb'], 0, 'Because + S + V.'),
    Q('"___ being tired, she kept working." (mặc dù)', ['Although', 'Despite', 'Because', 'However'], 1, 'Despite/In spite of + N/V-ing.'),
    Q('"The film was long, ___ it was interesting."', ['so', 'but', 'because', 'or'], 1, 'But = nhưng (tương phản nhẹ).'),
  ]),

  M(17, 'Review HK1 — Tenses overview', [
    Q('"I ___ TV every evening." (present simple)', ['watch', 'watches', 'am watching', 'watched'], 0, 'I + V.'),
    Q('"She ___ to music now." (present continuous)', ['listens', 'is listening', 'listened', 'listen'], 1, 'Now → V-ing.'),
    Q('"They ___ Hanoi last summer." (visit)', ['visit', 'visits', 'visited', 'are visiting'], 2, 'Last summer → past simple.'),
    Q('"My brother ___ the guitar very well." (play)', ['play', 'plays', 'is playing', 'played'], 1, 'Habit + 3rd person.'),
    Q('Passive: "Rice ___ in Vietnam." (grow)', ['grows', 'is grown', 'was grown', 'grew'], 1, 'Hiện tại đơn bị động.'),
    Q('Choose the best: "___ I help you?"', ['May', 'Must', 'Should', 'Will'], 0, 'May = xin phép giúp đỡ lịch sự.'),
  ]),

  M(18, 'Final exam HK1 — Mixed', [
    Q('Comparative of "happy"?', ['happier', 'more happy', 'happiest', 'happyer'], 0, 'Adj 2 âm tiết kết thúc -y → -ier.'),
    Q('"Don\'t ___ here!" (smoke)', ['smoke', 'smokes', 'smoking', 'smoked'], 0, 'Don\'t + V.'),
    Q('"How ___ sugar do we need?" (uncountable)', ['many', 'much', 'few', 'any'], 1, 'Much + UC.'),
    Q('Past of "buy"?', ['buyed', 'bought', 'buyed', 'buys'], 1, 'Irregular: bought.'),
    Q('"My school ___ in 1995." (build, passive)', ['was built', 'is built', 'built', 'is building'], 0, 'Passive past simple.'),
    Q('"___ she play tennis?" (does she chơi quần vợt không)', ['Do', 'Does', 'Is', 'Did'], 1, 'Present simple, ngôi 3 → Does + S + V.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Festivals around the World', [
    Q('"Christmas" is celebrated on?', ['December 25th', 'January 1st', 'February 14th', 'October 31st'], 0, 'Lễ Giáng Sinh 25/12.'),
    Q('"Lunar New Year" in Vietnam is called?', ['Tet', 'Mid-Autumn', 'Hung Kings', 'National Day'], 0, 'Tết Nguyên đán.'),
    Q('"Halloween" is associated with?', ['Pumpkins and costumes', 'Christmas tree', 'Easter eggs', 'Lanterns'], 0, 'Bí ngô và trang phục ma quỷ.'),
    Q('"Mid-Autumn Festival" in Vietnam is for?', ['Children', 'Soldiers', 'Farmers only', 'Doctors'], 0, 'Tết Trung Thu cho thiếu nhi.'),
    Q('"Lantern" (n) means?', ['Đèn lồng', 'Cái mũ', 'Quả bóng', 'Cái trống'], 0, 'Đèn lồng — Trung Thu.'),
    Q('Adverbs of manner often end in?', ['-ly', '-ed', '-ing', '-er'], 0, 'Quick → quickly.'),
  ]),

  M(20, 'Unit 9 — Adverbs of manner', [
    Q('Adverb form of "quick"?', ['quick', 'quickly', 'quicker', 'quickness'], 1, 'Adj + ly.'),
    Q('"She sings ___." (beautiful)', ['beautiful', 'beautifully', 'beauty', 'more beautiful'], 1, 'Adv of manner.'),
    Q('Irregular adverb of "good" is?', ['goodly', 'well', 'better', 'best'], 1, 'good → well.'),
    Q('"He runs very ___." (fast)', ['fastly', 'fast', 'faster', 'fastest'], 1, '"Fast" vừa là adj vừa là adv.'),
    Q('Position of adverb of manner is usually?', ['After the main verb / after object', 'Before the subject', 'At the beginning', 'Before the verb always'], 0, 'Sau V hoặc sau tân ngữ.'),
    Q('"They worked ___." (chăm chỉ)', ['hard', 'hardly', 'harder', 'hardest'], 0, 'Hard = chăm chỉ; hardly = hầu như không.'),
  ]),

  M(21, 'Unit 10 — Sources of Energy', [
    Q('Renewable energy includes?', ['Solar, wind, water', 'Coal, oil, gas', 'Wood, paper', 'Plastic'], 0, 'Năng lượng tái tạo.'),
    Q('Non-renewable energy?', ['Coal and oil', 'Solar', 'Wind', 'Water'], 0, 'Hoá thạch không tái tạo.'),
    Q('"Solar energy" comes from?', ['The sun', 'The wind', 'Water', 'Coal'], 0, 'Năng lượng mặt trời.'),
    Q('Future simple form?', ['will + V', 'going to + V', 'am/is/are + V-ing', 'have + V3'], 0, 'Will + bare V.'),
    Q('"Tomorrow, I ___ visit my grandparents."', ['will', 'am', 'do', 'did'], 0, 'Tomorrow → will.'),
    Q('"They ___ run out of oil in the future." (might)', ['might', 'mighting', 'mights', 'to might'], 0, 'Might + V (có thể).'),
  ]),

  M(22, 'Nghỉ Tết — Light review', [
    Q('"Tet" is celebrated in?', ['Vietnam', 'France', 'England', 'Japan'], 0, 'Tết Việt Nam.'),
    Q('"Happy New Year!" means?', ['Chúc mừng năm mới!', 'Chào buổi sáng!', 'Cảm ơn!', 'Tạm biệt!'], 0, 'Lời chúc đầu năm.'),
    Q('Past of "see"?', ['seed', 'saw', 'seen', 'sees'], 1, 'Irregular.'),
    Q('Adverb of "slow"?', ['slowly', 'slowless', 'slowy', 'slowness'], 0, 'Slow → slowly.'),
    Q('Comparative of "big"?', ['biger', 'bigger', 'more big', 'bigest'], 1, 'Phụ âm + nguyên âm + phụ âm: gấp đôi phụ âm cuối + er.'),
    Q('"I ___ very tired now." (be)', ['am', 'is', 'are', 'be'], 0, 'I + am.'),
  ]),

  M(23, 'Unit 10 — Future simple (will / won\'t)', [
    Q('"I think it ___ rain tomorrow." (will)', ['will', 'won\'t', 'is', 'do'], 0, 'Will + V.'),
    Q('Negative of "will" is?', ['won\'t (will not)', 'don\'t', 'doesn\'t', 'didn\'t'], 0, 'Will not = won\'t.'),
    Q('Question: "___ they come to the party?"', ['Will', 'Do', 'Are', 'Did'], 0, 'Will + S + V?'),
    Q('Future time markers?', ['tomorrow, next week, in 2050', 'yesterday, last year', 'now, at the moment', 'every day'], 0, 'Dấu hiệu tương lai.'),
    Q('"By 2050, robots ___ many jobs." (do)', ['do', 'did', 'will do', 'are doing'], 2, '"By 2050" → tương lai.'),
    Q('"I ___ help you with your homework." (offer)', ['will', 'am', 'do', 'did'], 0, 'Offer = will.'),
  ]),

  M(24, 'Unit 11 — Travelling in the Future', [
    Q('"Means of transport" includes?', ['Cars, bikes, trains, planes', 'Houses, schools', 'Food, drink', 'Pets'], 0, 'Phương tiện đi lại.'),
    Q('"Driverless car" means?', ['A car without a driver', 'A car for one person', 'A small car', 'An old car'], 0, 'Xe tự lái.'),
    Q('"In the future, people ___ to Mars." (travel)', ['travel', 'will travel', 'travelled', 'are travelling'], 1, 'Future simple.'),
    Q('"Hyperloop" is a fast?', ['Transport tube system', 'Plane', 'Boat', 'Bicycle'], 0, 'Hệ thống đường ống tốc độ cao.'),
    Q('"Eco-friendly" vehicles are?', ['Good for the environment', 'Expensive', 'Old', 'Big'], 0, 'Thân thiện môi trường.'),
    Q('Future plan with "be going to" structure?', ['am/is/are + going to + V', 'will + V', 'have + V3', 'V + ed'], 0, 'Be + going to + V.'),
  ]),

  M(25, 'Unit 11 — Going to + V for future plans', [
    Q('"I ___ visit my uncle this weekend." (going to)', ['am going to', 'is going to', 'are going to', 'will going to'], 0, 'I am going to + V.'),
    Q('"She ___ travel to Japan next month."', ['am going to', 'is going to', 'are going to', 'will going to'], 1, 'She → is.'),
    Q('Negative: "We ___ stay home."', ['aren\'t going to', 'isn\'t going to', 'don\'t going to', 'won\'t going to'], 0, 'We are not = aren\'t.'),
    Q('Question: "___ you going to study tonight?"', ['Are', 'Is', 'Do', 'Will'], 0, 'Are + S + going to + V?'),
    Q('"Be going to" expresses?', ['Plans or intentions', 'Habits', 'Past events', 'Permission'], 0, 'Kế hoạch/dự định.'),
    Q('"Look at those clouds! It ___ rain." (going to)', ['is going to', 'will', 'goes to', 'is go to'], 0, 'Dấu hiệu hiện tại → going to (prediction with evidence).'),
  ]),

  M(26, 'Unit 12 — An Overcrowded World', [
    Q('"Overcrowded" means?', ['Too many people in a place', 'Empty', 'Quiet', 'Comfortable'], 0, 'Quá đông đúc.'),
    Q('Effects of overpopulation include?', ['Pollution, lack of housing, traffic jams', 'Better life only', 'More forests', 'More fresh water'], 0, 'Tác động tiêu cực.'),
    Q('"Megacity" is a city with?', ['More than 10 million people', 'Less than 1 million', 'About 100,000 people', '50,000 people'], 0, 'Siêu đô thị.'),
    Q('"___ ever been to a big city?" (Have you)', ['Have you', 'Did you', 'Do you', 'Are you'], 0, 'Present perfect: Have + S + V3.'),
    Q('Present perfect form?', ['have/has + V3', 'will + V', 'am/is/are + V-ing', 'was/were + V3'], 0, 'Have + V3.'),
    Q('"She ___ in this city for 5 years." (live)', ['lives', 'lived', 'has lived', 'is living'], 2, 'For 5 years → present perfect.'),
  ]),

  M(27, 'Unit 12 — Present perfect', [
    Q('Present perfect of "go"?', ['have went', 'have gone', 'have goed', 'have going'], 1, 'go → gone (V3).'),
    Q('"I ___ this film twice." (see)', ['saw', 'see', 'have seen', 'am seeing'], 2, 'Twice → present perfect (kinh nghiệm).'),
    Q('Time markers for present perfect?', ['ever, never, just, already, yet, since, for', 'yesterday, ago', 'tomorrow, next week', 'now'], 0, 'Đặc trưng present perfect.'),
    Q('"He has ___ his homework." (finish)', ['finish', 'finished', 'finishing', 'finishes'], 1, 'Has + V3.'),
    Q('"___ you ever ___ to Hue?" (be)', ['Have / been', 'Did / be', 'Do / be', 'Are / been'], 0, 'Have + S + ever + been.'),
    Q('Negative: "I ___ him for years." (not see)', ['haven\'t seen', 'didn\'t see', 'don\'t see', 'am not seeing'], 0, 'Haven\'t + V3.'),
  ]),

  M(28, 'Conditional Type 1 (real future)', [
    Q('Conditional type 1 form?', ['If + S + V (present), S + will + V', 'If + S + V2, S + would + V', 'If + S + had + V3, S + would have + V3', 'If + S + V-ing'], 0, 'Real condition: if + present, will + V.'),
    Q('"If it ___ tomorrow, we will stay home." (rain)', ['rains', 'rain', 'will rain', 'rained'], 0, 'If clause = present simple.'),
    Q('"If you study hard, you ___ pass the test." (will)', ['will', 'would', 'have', 'are'], 0, 'Main clause = will + V.'),
    Q('"If she ___ early, she will catch the bus." (leave)', ['leaves', 'leave', 'left', 'will leave'], 0, 'Ngôi 3 → leaves.'),
    Q('We use conditional type 1 for?', ['Real or possible situations in the future', 'Past unreal', 'Present unreal', 'Impossible situations'], 0, 'Tình huống có khả năng xảy ra.'),
    Q('"If we don\'t save energy, we ___ run out of it." (will)', ['will', 'won\'t', 'would', 'wouldn\'t'], 0, 'Hậu quả tương lai.'),
  ]),

  M(29, 'Vocabulary review — Environment & Society', [
    Q('"Pollution" means?', ['Sự ô nhiễm', 'Sự sạch sẽ', 'Khí trời', 'Mặt trời'], 0, 'Ô nhiễm.'),
    Q('"Recycle" means?', ['Tái chế', 'Bỏ rác', 'Đốt rác', 'Mua mới'], 0, 'Re + cycle.'),
    Q('"Reduce" means?', ['Giảm', 'Tăng', 'Đổi', 'Trộn'], 0, 'Reduce = giảm.'),
    Q('"Reuse" means?', ['Tái sử dụng', 'Mua lại', 'Bán', 'Cho đi'], 0, 'Re + use.'),
    Q('"Plant trees" helps?', ['Reduce pollution and CO2', 'Increase traffic', 'Make noise', 'Waste water'], 0, 'Trồng cây tốt cho môi trường.'),
    Q('"Save water" means?', ['Tiết kiệm nước', 'Lưu nước', 'Đổ nước', 'Mua nước'], 0, 'Save = tiết kiệm.'),
  ]),

  M(30, 'Reading skill — Identifying main idea & details', [
    Q('When skimming a text, you should?', ['Read quickly for the main idea', 'Read every word slowly', 'Translate every sentence', 'Memorize the whole text'], 0, 'Skim = đọc lướt.'),
    Q('Scanning is used for?', ['Finding specific information (names, dates, numbers)', 'Translating word by word', 'Counting words', 'Reading for pleasure'], 0, 'Scan = quét tìm chi tiết.'),
    Q('A topic sentence often appears?', ['At the beginning of a paragraph', 'Always at the end', 'In the middle only', 'In every sentence'], 0, 'Câu chủ đề thường đầu đoạn.'),
    Q('Context clues help you?', ['Guess meanings of unknown words', 'Translate exactly', 'Pronounce correctly', 'Count syllables'], 0, 'Đoán nghĩa qua ngữ cảnh.'),
    Q('Before reading, you should?', ['Look at title, pictures, headings', 'Translate the whole text', 'Read the last paragraph first', 'Skip the title'], 0, 'Pre-reading strategy.'),
    Q('After reading, you should?', ['Summarize the main idea', 'Forget it immediately', 'Translate again', 'Read aloud once more only'], 0, 'Củng cố hiểu.'),
  ]),

  M(31, 'Writing skill — Paragraph organization', [
    Q('A good paragraph has?', ['One main idea with supporting details', 'Many unrelated ideas', 'Only questions', 'Only commands'], 0, 'Một ý chính + chi tiết hỗ trợ.'),
    Q('A topic sentence states?', ['The main idea of the paragraph', 'A question', 'A joke', 'An order'], 0, 'Câu chủ đề.'),
    Q('Supporting sentences provide?', ['Examples, reasons, details', 'Unrelated information', 'New topics', 'Translations'], 0, 'Phát triển ý chủ đề.'),
    Q('Concluding sentence does what?', ['Restates the main idea or gives a final thought', 'Introduces a new topic', 'Asks an unrelated question', 'Repeats the topic sentence exactly'], 0, 'Kết câu chủ đề.'),
    Q('Linking words include?', ['First, then, finally, however', 'Apple, orange, banana', 'Run, jump, swim', 'Big, small, tall'], 0, 'Từ nối.'),
    Q('Before writing, you should?', ['Brainstorm and outline', 'Start immediately without planning', 'Copy from a friend', 'Skip the topic'], 0, 'Lập dàn ý trước.'),
  ]),

  M(32, 'Speaking — Giving opinions & agreeing/disagreeing', [
    Q('To give an opinion, you can say?', ['"I think…"', '"Yes / No only"', '"Hello!"', '"Thank you!"'], 0, '"I think…", "In my opinion…".'),
    Q('To agree, you say?', ['"I agree" / "That\'s right"', '"I don\'t think so"', '"No way"', '"Sorry"'], 0, 'Đồng tình.'),
    Q('To disagree politely?', ['"I see your point, but…"', '"You are wrong!"', '"No, no, no!"', '"Stop!"'], 0, 'Bất đồng lịch sự.'),
    Q('To ask for opinion?', ['"What do you think?"', '"Where are you?"', '"How old are you?"', '"What time is it?"'], 0, 'Hỏi quan điểm.'),
    Q('When speaking, eye contact is?', ['Important and polite', 'Rude', 'Unnecessary', 'Forbidden'], 0, 'Giao tiếp mắt là lịch sự.'),
    Q('To buy time while thinking, say?', ['"Well…", "Let me think…"', '"Goodbye!"', '"Hello!"', '"Thank you!"'], 0, 'Filler phrases.'),
  ]),

  M(33, 'Listening — Predicting & note-taking', [
    Q('Before listening, you should?', ['Read questions and predict answers', 'Close your eyes', 'Translate the title', 'Sleep'], 0, 'Dự đoán nội dung.'),
    Q('Key words help you?', ['Focus on important information', 'Confuse you', 'Slow you down', 'Distract you'], 0, 'Tập trung từ khoá.'),
    Q('When taking notes, use?', ['Abbreviations and symbols', 'Full sentences', 'Pictures only', 'No words'], 0, 'Viết tắt nhanh.'),
    Q('If you don\'t understand a word, you should?', ['Keep listening for context', 'Stop completely', 'Translate every word', 'Cry'], 0, 'Đoán qua ngữ cảnh.'),
    Q('After listening, you should?', ['Check your answers and reflect', 'Forget immediately', 'Listen again forever', 'Throw notes away'], 0, 'Kiểm tra và phản hồi.'),
    Q('Listening for gist means?', ['Listening for the general idea', 'Listening for every detail', 'Memorizing every word', 'Counting words'], 0, 'Hiểu ý chính.'),
  ]),

  M(34, 'Grammar review — All tenses', [
    Q('"She ___ tennis every Sunday." (play)', ['plays', 'is playing', 'played', 'has played'], 0, 'Habit → present simple, 3rd → plays.'),
    Q('"They ___ a film right now." (watch)', ['watch', 'are watching', 'watched', 'will watch'], 1, 'Right now → present continuous.'),
    Q('"We ___ to Da Nang last summer." (go)', ['go', 'went', 'have gone', 'are going'], 1, 'Last summer → past simple.'),
    Q('"I ___ never ___ to Japan." (be)', ['have / been', 'did / be', 'do / be', 'will / be'], 0, 'Never → present perfect.'),
    Q('"Tomorrow, I ___ a new car." (buy, plan)', ['will buy', 'am going to buy', 'bought', 'am buying'], 1, 'Plan → going to.'),
    Q('"If you study hard, you ___ pass." (cond. 1)', ['will', 'would', 'have', 'are'], 0, 'Cond. 1: if + present, will + V.'),
  ]),

  M(35, 'Final exam HK2 — Mixed', [
    Q('Choose the correct passive: "English ___ in many countries."', ['speaks', 'is spoken', 'was spoken', 'spoke'], 1, 'Present passive.'),
    Q('Conditional: "If it rains, we ___ stay home."', ['will', 'would', 'have', 'do'], 0, 'Cond. 1.'),
    Q('"I have ___ him since 2020." (know)', ['know', 'knew', 'known', 'knowing'], 2, 'Present perfect: known.'),
    Q('"They ___ to the party last night." (go)', ['go', 'went', 'have gone', 'going'], 1, 'Last night → past.'),
    Q('"___ you ___ to England?" (ever / be)', ['Have / been', 'Did / be', 'Do / be', 'Are / been'], 0, 'Ever → present perfect.'),
    Q('Comparative of "interesting"?', ['interestinger', 'more interesting', 'most interesting', 'interestingest'], 1, 'Adj dài → more.'),
  ]),
];

export const S7TA_SCENARIOS = indexBy(S7TA_WEEKS);
