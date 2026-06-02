// ============================================================
// Lớp 8 · TIẾNG ANH — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Key TRÙNG id quiz: "S8TA-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8TA_LESSONS = {
  'S8TA-w01-quiz': L(
    'Unit 1 — Leisure Activities (Vocabulary)',
    'Welcome to Grade 8 English! Tuần này các em học từ vựng về các hoạt động giải trí (leisure activities).',
    ['Học từ vựng leisure activities.', 'Nói về sở thích giải trí của mình.', 'Đọc đoạn văn về hoạt động giải trí.'],
    [
      { h: 'Leisure Activities Vocabulary' },
      { p: 'Leisure activities = các hoạt động làm trong thời gian rảnh. Một số từ phổ biến:' },
      { ul: ['hang out (with friends) — đi chơi với bạn', 'do crafts — làm đồ thủ công', 'play board games — chơi cờ bàn', 'listen to music — nghe nhạc', 'go for a walk — đi dạo', 'watch movies — xem phim'] },
      { h: 'Useful Expressions' },
      { ul: ['What do you do in your free time? — Bạn làm gì lúc rảnh?', 'I usually... — Tôi thường…', 'I love/like... — Tôi yêu/thích…', "I'm interested in... — Tôi quan tâm đến…"] },
    ],
    [
      { q: 'Translate: "I usually hang out with my friends on weekends."', a: 'Tôi thường đi chơi với bạn vào cuối tuần.' },
      { q: 'Khi rảnh, em làm gì? (English)', a: 'In my free time, I like reading books and playing badminton.' },
    ]
  ),

  'S8TA-w02-quiz': L(
    'Unit 1 — Verbs of liking + V-ing/to-V',
    'Sau từ vựng, học cách dùng động từ chỉ sự thích/ghét + V-ing hoặc to-V.',
    ['Biết các động từ + V-ing.', 'Biết các động từ + to-V.', 'Đặt câu chính xác.'],
    [
      { h: 'Verb + V-ing' },
      { p: 'Một số động từ luôn theo sau bởi V-ing: enjoy, love, like, hate, dislike, fancy, avoid, finish, mind, suggest…' },
      { ul: ['I enjoy reading. — Tôi thích đọc.', 'She loves swimming. — Cô ấy yêu bơi lội.', 'They dislike waiting. — Họ ghét chờ đợi.'] },
      { h: 'Verb + to-V' },
      { p: 'Một số động từ theo sau bởi to-V: want, decide, hope, plan, expect, need, would like…' },
      { ul: ['I want to learn English. — Tôi muốn học tiếng Anh.', 'She decided to go home. — Cô ấy quyết định về nhà.'] },
      { note: 'Một số động từ dùng được cả 2 nghĩa khác nhau: like reading (sở thích) vs like to read (lựa chọn).' },
    ],
    [
      { q: 'Complete: "She enjoys ___ (swim) in the sea."', a: 'swimming (V-ing sau enjoy).' },
      { q: 'Complete: "I want ___ (be) a doctor."', a: 'to be (to-V sau want).' },
    ]
  ),

  'S8TA-w03-quiz': L(
    'Unit 2 — Life in the Countryside',
    'Từ vựng về cuộc sống ở nông thôn (life in the countryside).',
    ['Học từ vựng về nông thôn và thành phố.', 'So sánh nông thôn và thành thị.', 'Đọc đoạn văn về cuộc sống nông thôn.'],
    [
      { h: 'Countryside Vocabulary' },
      { ul: ['countryside — nông thôn', 'farm — trang trại', 'cattle — gia súc', 'crops — vụ mùa', 'harvest — thu hoạch', 'peaceful — yên bình', 'fresh air — không khí trong lành', 'scenery — phong cảnh'] },
      { h: 'City Vocabulary' },
      { ul: ['urban — đô thị', 'skyscraper — toà nhà chọc trời', 'traffic jam — tắc đường', 'pollution — ô nhiễm', 'crowded — đông đúc', 'modern — hiện đại'] },
    ],
    [
      { q: 'Translate: "Life in the countryside is peaceful but slower than in the city."', a: 'Cuộc sống ở nông thôn yên bình nhưng chậm hơn ở thành phố.' },
      { q: '3 ưu điểm của nông thôn (English)?', a: 'Fresh air, peaceful atmosphere, beautiful scenery.' },
    ]
  ),

  'S8TA-w04-quiz': L(
    'Unit 2 — Comparative forms of adverbs',
    'Cách so sánh hơn của trạng từ.',
    ['Cấu trúc so sánh hơn với trạng từ.', 'Phân biệt với so sánh hơn của tính từ.', 'Đặt câu so sánh.'],
    [
      { h: 'Comparative of Adverbs' },
      { p: 'Cấu trúc: S + V + adverb-er/more adverb + than + S' },
      { ul: ['Trạng từ 1 âm tiết: thêm -er. VD: fast → faster, hard → harder.', 'Trạng từ kết thúc bằng -ly: more + adverb. VD: carefully → more carefully, slowly → more slowly.', 'Một số bất quy tắc: well → better, badly → worse, far → farther/further.'] },
      { p: 'VD: He runs faster than me. She speaks more clearly than him.' },
    ],
    [
      { q: 'Compare: "She speaks English ___ (clearly) than her brother."', a: 'more clearly (clearly là -ly nên dùng more).' },
      { q: 'Compare: "He drives ___ (carefully) than I do."', a: 'more carefully.' },
    ]
  ),

  'S8TA-w05-quiz': L(
    'Unit 3 — Peoples of Vietnam',
    'Từ vựng về các dân tộc Việt Nam.',
    ['Học từ vựng về dân tộc.', 'Mô tả văn hoá dân tộc.', 'Tự hào về văn hoá VN.'],
    [
      { h: 'Ethnic Groups Vocabulary' },
      { ul: ['ethnic group — dân tộc', 'minority — thiểu số', 'majority — đa số', 'tradition — truyền thống', 'custom — phong tục', 'costume — trang phục truyền thống', 'language — ngôn ngữ', 'festival — lễ hội'] },
      { p: 'Việt Nam có 54 dân tộc, trong đó dân tộc Kinh (Việt) chiếm đa số.' },
    ],
    [
      { q: 'Translate: "Vietnam has 54 ethnic groups with their own cultures."', a: 'Việt Nam có 54 dân tộc với nền văn hoá riêng.' },
      { q: 'How many ethnic groups in Vietnam?', a: 'There are 54 ethnic groups in Vietnam.' },
    ]
  ),

  'S8TA-w06-quiz': L(
    'Unit 3 — Questions: how many / how much',
    'Phân biệt how many (đếm được) và how much (không đếm được).',
    ['Biết khi nào dùng how many/much.', 'Đặt câu hỏi đúng.', 'Trả lời với số lượng.'],
    [
      { h: 'How many vs How much' },
      { ul: ['How many + N đếm được số nhiều: How many books do you have?', 'How much + N không đếm được: How much water do you drink?'] },
      { p: 'N đếm được: book, apple, person, group… N không đếm được: water, sugar, money, music, information…' },
      { note: 'Money là không đếm được trong tiếng Anh, nên dùng how much.' },
    ],
    [
      { q: 'Choose: How (many/much) ___ rice do you eat?', a: 'much (rice không đếm được).' },
      { q: 'Choose: How (many/much) ___ books are there?', a: 'many (books đếm được).' },
    ]
  ),

  'S8TA-w07-quiz': L(
    'Unit 4 — Our Customs and Traditions',
    'Từ vựng về phong tục và truyền thống.',
    ['Học từ vựng customs/traditions.', 'Nói về truyền thống VN.', 'Phân biệt customs và traditions.'],
    [
      { h: 'Customs & Traditions' },
      { ul: ['custom — phong tục (do, habit)', 'tradition — truyền thống (passed down generations)', 'ritual — nghi lễ', 'ceremony — lễ', 'celebrate — tổ chức kỷ niệm', 'honor — tôn vinh', 'ancestor — tổ tiên'] },
      { p: 'VD truyền thống VN: Tết Nguyên Đán (Lunar New Year), worshipping ancestors, eating banh chung at Tet…' },
    ],
    [
      { q: 'Translate: "On Tet, Vietnamese people often visit their relatives."', a: 'Vào Tết, người Việt thường đến thăm họ hàng.' },
      { q: 'Name a Vietnamese tradition in English.', a: 'Worshipping ancestors / Eating banh chung at Tet.' },
    ]
  ),

  'S8TA-w08-quiz': L(
    'Unit 4 — should / shouldn\'t',
    'Modal verb should: lời khuyên.',
    ['Hiểu cách dùng should.', 'Cho lời khuyên.', 'Câu phủ định, nghi vấn.'],
    [
      { h: 'Should + V (bare)' },
      { p: 'Should = nên (lời khuyên). Theo sau bởi động từ nguyên thể (không có to).' },
      { ul: ['Khẳng định: You should study hard.', "Phủ định: You shouldn't (= should not) be late.", 'Nghi vấn: Should I call her?'] },
      { note: 'Should là modal verb (động từ khuyết thiếu) — không dùng to sau should.' },
    ],
    [
      { q: 'Translate: "You shouldn\'t talk during the test."', a: 'Em không nên nói chuyện trong giờ kiểm tra.' },
      { q: 'Give advice (use should): "I have a cold."', a: 'You should drink hot tea and rest.' },
    ]
  ),

  'S8TA-w09-quiz': L(
    'Unit 5 — Festivals in Vietnam',
    'Từ vựng về các lễ hội Việt Nam.',
    ['Học từ vựng festivals.', 'Mô tả lễ hội.', 'Tự hào về văn hoá lễ hội VN.'],
    [
      { h: 'Festival Vocabulary' },
      { ul: ['festival — lễ hội', 'celebrate — tổ chức kỷ niệm', 'firework — pháo hoa', 'parade — diễu hành', 'lantern — đèn lồng', 'dragon dance — múa rồng', 'lion dance — múa lân', 'mooncake — bánh trung thu'] },
      { p: 'VD lễ hội VN: Tet (Lunar New Year), Mid-Autumn Festival (Tết Trung thu), Hung Kings Festival (Giỗ Tổ)…' },
    ],
    [
      { q: 'Translate: "Tet is the most important festival in Vietnam."', a: 'Tết là lễ hội quan trọng nhất ở Việt Nam.' },
      { q: 'Name 3 Vietnamese festivals (English)?', a: 'Tet (Lunar New Year), Mid-Autumn Festival, Hung Kings Festival.' },
    ]
  ),

  'S8TA-w10-quiz': L(
    'Unit 5 — Simple past + used to',
    'Quá khứ đơn và used to (đã từng).',
    ['Ôn lại quá khứ đơn.', 'Hiểu used to.', 'Phân biệt used to vs simple past.'],
    [
      { h: 'Simple Past' },
      { p: 'Diễn tả hành động đã xảy ra và kết thúc trong quá khứ. V-ed (động từ thường) hoặc V₂ (bất quy tắc).' },
      { ul: ['I visited my grandparents last week.', 'She went to school yesterday.'] },
      { h: 'Used to + V (bare)' },
      { p: 'Diễn tả thói quen hoặc tình trạng trong quá khứ (không còn nữa).' },
      { ul: ['I used to play football when I was young. — Tôi đã từng đá bóng khi còn nhỏ (giờ không nữa).', 'There used to be a school here. — Trước đây có một trường học ở đây.'] },
    ],
    [
      { q: 'Translate: "She used to live in Hanoi."', a: 'Cô ấy đã từng sống ở Hà Nội (giờ không sống ở đó nữa).' },
      { q: 'Past simple: "I (visit) ___ Hue last summer."', a: 'visited.' },
    ]
  ),

  'S8TA-w11-quiz': L(
    'Unit 6 — Folk Tales',
    'Từ vựng về truyện dân gian (folk tales).',
    ['Học từ vựng folk tales.', 'Đọc truyện dân gian bằng tiếng Anh.', 'Hiểu nội dung và bài học.'],
    [
      { h: 'Folk Tales Vocabulary' },
      { ul: ['folk tale — truyện dân gian', 'character — nhân vật', 'hero/heroine — anh hùng/nữ anh hùng', 'villain — nhân vật phản diện', 'magic — phép thuật', 'kingdom — vương quốc', 'wise — khôn ngoan', 'cruel — tàn nhẫn'] },
      { p: 'VD truyện dân gian VN: Tam Cám (Tam and Cam), Sơn Tinh - Thuỷ Tinh, Thạch Sanh…' },
    ],
    [
      { q: 'Translate: "Folk tales often teach moral lessons."', a: 'Truyện dân gian thường dạy bài học đạo đức.' },
      { q: 'Name a Vietnamese folk tale in English.', a: 'The story of Tam and Cam.' },
    ]
  ),

  'S8TA-w12-quiz': L(
    'Unit 6 — Past simple vs past continuous',
    'Phân biệt quá khứ đơn và quá khứ tiếp diễn.',
    ['Cấu trúc past continuous.', 'Khi nào dùng past continuous.', 'Kết hợp 2 thì.'],
    [
      { h: 'Past Continuous' },
      { p: 'Cấu trúc: was/were + V-ing. Diễn tả hành động đang xảy ra tại thời điểm trong quá khứ.' },
      { ul: ['I was studying at 8 PM yesterday. — 8 giờ tối qua tôi đang học.', 'They were playing while it was raining. — Họ đang chơi trong khi trời mưa.'] },
      { h: 'Past Simple vs Past Continuous' },
      { p: 'When + past simple = hành động ngắn xen vào hành động dài (past continuous). VD: "When she called, I was cooking dinner." (Khi cô ấy gọi, tôi đang nấu cơm tối).' },
    ],
    [
      { q: 'Translate: "I was reading when my phone rang."', a: 'Tôi đang đọc sách thì điện thoại reo.' },
      { q: 'Complete: "When I (arrive) ___, they (have) ___ dinner."', a: 'arrived, were having.' },
    ]
  ),

  'S8TA-w13-quiz': L(
    'Unit 7 — Pollution',
    'Từ vựng về ô nhiễm môi trường.',
    ['Học từ vựng pollution.', 'Nguyên nhân và hậu quả ô nhiễm.', 'Giải pháp bảo vệ môi trường.'],
    [
      { h: 'Pollution Vocabulary' },
      { ul: ['pollution — ô nhiễm', 'air pollution — ô nhiễm không khí', 'water pollution — ô nhiễm nước', 'noise pollution — ô nhiễm tiếng ồn', 'litter — rác', 'recycle — tái chế', 'reduce — giảm', 'reuse — tái sử dụng', 'environment — môi trường'] },
      { p: 'Quy tắc 3R: Reduce, Reuse, Recycle.' },
    ],
    [
      { q: 'Translate: "Air pollution causes many health problems."', a: 'Ô nhiễm không khí gây ra nhiều vấn đề sức khoẻ.' },
      { q: 'How can we reduce pollution?', a: 'We can recycle, use less plastic, and use public transport.' },
    ]
  ),

  'S8TA-w14-quiz': L(
    'Unit 7 — Conditional sentence type 1',
    'Câu điều kiện loại 1 — tương lai có thật.',
    ['Cấu trúc câu điều kiện loại 1.', 'Khi nào dùng.', 'Đặt câu chính xác.'],
    [
      { h: 'Conditional Type 1' },
      { p: 'Cấu trúc: If + S + V(present simple), S + will + V(bare).' },
      { p: 'Diễn tả điều kiện có thể xảy ra trong tương lai và kết quả.' },
      { ul: ['If it rains, I will stay at home.', "If you study hard, you'll pass the exam.", "If we don't recycle, the environment will be polluted."] },
      { note: 'Mệnh đề if dùng PRESENT SIMPLE (không dùng will trong if-clause).' },
    ],
    [
      { q: 'Translate: "If you study hard, you will pass the exam."', a: 'Nếu em học chăm chỉ, em sẽ vượt qua kỳ thi.' },
      { q: 'Complete: "If we (not protect) ___ trees, the air (be) ___ more polluted."', a: "don't protect, will be." },
    ]
  ),

  'S8TA-w15-quiz': L(
    'Unit 8 — English Speaking Countries',
    'Từ vựng về các nước nói tiếng Anh.',
    ['Học từ vựng về các nước.', 'Mô tả văn hoá các nước.', 'Hiểu sự đa dạng tiếng Anh.'],
    [
      { h: 'English Speaking Countries' },
      { ul: ['the UK (United Kingdom) — Vương quốc Anh', 'the US (United States) — Hoa Kỳ', 'Canada — Canada', 'Australia — Úc', 'New Zealand — New Zealand', 'India — Ấn Độ (nói tiếng Anh phổ biến)'] },
      { p: 'Mỗi nước có giọng tiếng Anh khác nhau: British English vs American English có nhiều khác biệt.' },
    ],
    [
      { q: 'Translate: "London is the capital of the UK."', a: 'Luân Đôn là thủ đô của Vương quốc Anh.' },
      { q: 'Name 3 English speaking countries.', a: 'The UK, the US, Canada / Australia.' },
    ]
  ),

  'S8TA-w16-quiz': L(
    'Unit 8 — Articles a / an / the',
    'Mạo từ a, an, the — vấn đề quan trọng và khó.',
    ['Phân biệt a, an, the.', 'Khi nào dùng a/an, khi nào dùng the.', 'Không dùng mạo từ.'],
    [
      { h: 'A / An (Indefinite Articles)' },
      { p: 'A trước phụ âm; An trước nguyên âm. Dùng với danh từ đếm được số ít, đề cập lần đầu.' },
      { ul: ['a book, a teacher, a university (u đọc như y)', 'an apple, an hour (h câm)'] },
      { h: 'The (Definite Article)' },
      { ul: ['Đề cập lần thứ 2 trở đi.', 'Duy nhất: the sun, the moon, the world.', 'Trước số thứ tự: the first, the second.', 'Trước highest: the most…, the best…'] },
      { h: 'No Article' },
      { ul: ['Danh từ chung chung: I love music.', 'Tên người, tên quốc gia (đa số).'] },
    ],
    [
      { q: 'Choose: "I saw (a/an) ___ elephant at the zoo."', a: 'an (elephant bắt đầu bằng nguyên âm).' },
      { q: 'Choose: "(A/An/The) ___ Sun rises in the east."', a: 'The (duy nhất).' },
    ]
  ),

  'S8TA-w17-quiz': L(
    'Unit 8 — Speaking practice: introducing places',
    'Thực hành nói: giới thiệu địa danh.',
    ['Cấu trúc giới thiệu địa danh.', 'Từ vựng mô tả nơi chốn.', 'Tự tin nói tiếng Anh.'],
    [
      { h: 'Structures' },
      { ul: ['... is located in...', '... is famous for...', "... is one of the most... in ...", "It's a great place to..."] },
      { p: 'VD: "Hanoi is the capital of Vietnam. It is famous for its old quarter, lakes, and delicious food."' },
    ],
    [
      { q: 'Introduce your hometown briefly (English).', a: 'My hometown is Hanoi. It is the capital of Vietnam, famous for the Old Quarter and Hoan Kiem Lake.' },
      { q: 'Translate: "Hue is famous for its ancient citadel."', a: 'Huế nổi tiếng với thành cổ.' },
    ]
  ),

  'S8TA-w18-quiz': L(
    'Review HK1',
    'Tổng hợp kiến thức HK1.',
    ['Ôn từ vựng các unit 1-8.', 'Ôn ngữ pháp chính.', 'Kỹ năng đọc + nghe.'],
    [
      { h: 'Vocabulary Topics' },
      { ul: ['Leisure activities, countryside vs city, ethnic groups, customs, festivals, folk tales, pollution, English speaking countries.'] },
      { h: 'Grammar' },
      { ul: ['V-ing vs to-V after verbs.', 'Comparative of adverbs.', 'How many/much.', 'should/shouldn\'t.', 'Past simple, past continuous, used to.', 'Conditional type 1.', 'Articles.'] },
    ],
    [
      { q: 'Should I (study/studying/to study) ___ harder?', a: 'study (sau modal verb).' },
      { q: 'If it (rain) ___ tomorrow, we (cancel) ___ the trip.', a: 'rains, will cancel.' },
    ]
  ),

  'S8TA-w19-quiz': L(
    'Unit 9 — Natural Disasters',
    'Từ vựng về thiên tai.',
    ['Học từ vựng natural disasters.', 'Mô tả các loại thiên tai.', 'Biện pháp phòng tránh.'],
    [
      { h: 'Disaster Vocabulary' },
      { ul: ['earthquake — động đất', 'flood — lũ lụt', 'tsunami — sóng thần', 'storm/typhoon — bão', 'volcanic eruption — núi lửa phun', 'drought — hạn hán', 'landslide — lở đất', 'evacuate — sơ tán'] },
    ],
    [
      { q: 'Translate: "Floods often happen in central Vietnam."', a: 'Lũ lụt thường xảy ra ở miền Trung Việt Nam.' },
      { q: 'What should we do before a typhoon?', a: 'We should prepare food, water, and stay indoors.' },
    ]
  ),

  'S8TA-w20-quiz': L(
    'Unit 9 — Past continuous (recap)',
    'Ôn lại quá khứ tiếp diễn.',
    ['Củng cố past continuous.', 'Sử dụng trong ngữ cảnh thiên tai.', 'Đặt câu phức hợp.'],
    [
      { h: 'Past Continuous (Review)' },
      { p: 'was/were + V-ing. Diễn tả hành động đang xảy ra tại 1 thời điểm trong quá khứ, thường kết hợp với past simple để mô tả tình huống bị gián đoạn.' },
      { ul: ['I was sleeping when the earthquake started.', 'They were watching TV when the storm hit the city.'] },
    ],
    [
      { q: 'Complete: "When the flood (come) ___, people (run) ___ to higher ground."', a: 'came, were running.' },
      { q: 'Translate: "I was walking home when the storm started."', a: 'Tôi đang đi bộ về nhà thì cơn bão bắt đầu.' },
    ]
  ),

  'S8TA-w21-quiz': L(
    'Unit 10 — Communication',
    'Từ vựng về giao tiếp.',
    ['Học từ vựng communication.', 'Các hình thức giao tiếp.', 'Tầm quan trọng của giao tiếp.'],
    [
      { h: 'Communication Vocabulary' },
      { ul: ['communication — giao tiếp', 'verbal — bằng lời nói', 'non-verbal — phi ngôn từ (cử chỉ, biểu cảm)', 'body language — ngôn ngữ cơ thể', 'social media — mạng xã hội', 'video call — gọi video'] },
    ],
    [
      { q: 'Translate: "Body language is an important part of communication."', a: 'Ngôn ngữ cơ thể là một phần quan trọng của giao tiếp.' },
      { q: 'Name 3 forms of communication.', a: 'Verbal, non-verbal, written.' },
    ]
  ),

  'S8TA-w22-quiz': L(
    'Unit 10 — Future continuous & passive voice (intro)',
    'Tương lai tiếp diễn và mở đầu câu bị động.',
    ['Cấu trúc future continuous.', 'Cấu trúc cơ bản câu bị động.', 'Khi nào dùng.'],
    [
      { h: 'Future Continuous' },
      { p: 'will be + V-ing. Diễn tả hành động đang xảy ra tại 1 thời điểm trong tương lai.' },
      { ul: ['This time tomorrow, I will be flying to London.', "At 8 PM tonight, we'll be having dinner."] },
      { h: 'Passive Voice (Introduction)' },
      { p: 'Cấu trúc cơ bản: S + be + V₃/ed (+ by + agent).' },
      { ul: ['Active: People speak English worldwide.', 'Passive: English is spoken worldwide.'] },
    ],
    [
      { q: 'Translate: "By 7 PM, we will be having dinner."', a: 'Đến 7 giờ tối, chúng tôi sẽ đang ăn tối.' },
      { q: 'Change to passive: "Vietnamese people speak Vietnamese."', a: 'Vietnamese is spoken by Vietnamese people.' },
    ]
  ),

  'S8TA-w23-quiz': L(
    'Unit 11 — Science and Technology',
    'Từ vựng về khoa học và công nghệ.',
    ['Học từ vựng science/technology.', 'Nói về phát minh.', 'Lợi ích và rủi ro công nghệ.'],
    [
      { h: 'Science & Tech Vocabulary' },
      { ul: ['invention — phát minh', 'inventor — nhà phát minh', 'technology — công nghệ', 'device — thiết bị', 'innovate — đổi mới', 'discovery — khám phá', 'artificial intelligence (AI) — trí tuệ nhân tạo', 'robot — robot'] },
    ],
    [
      { q: 'Translate: "AI is changing many industries."', a: 'Trí tuệ nhân tạo đang thay đổi nhiều ngành công nghiệp.' },
      { q: 'Name 2 important inventions.', a: 'The internet, the smartphone / electricity.' },
    ]
  ),

  'S8TA-w24-quiz': L(
    'Unit 11 — Reported speech (basic statements)',
    'Câu tường thuật cơ bản — chuyển từ trực tiếp sang gián tiếp.',
    ['Quy tắc lùi thì.', 'Đổi đại từ.', 'Cấu trúc câu tường thuật.'],
    [
      { h: 'Reported Speech (Statements)' },
      { p: 'Tense backshift (lùi thì):' },
      { ul: ['present simple → past simple', 'present continuous → past continuous', 'will → would', 'can → could'] },
      { p: 'VD: He said "I am happy." → He said (that) he was happy.' },
      { ul: ['Đổi đại từ: I → he/she; my → his/her…', 'Đổi từ chỉ thời gian: today → that day, tomorrow → the next day.'] },
    ],
    [
      { q: 'Report: She said, "I love English."', a: 'She said (that) she loved English.' },
      { q: 'Report: He said, "I will help you."', a: 'He said (that) he would help me.' },
    ]
  ),

  'S8TA-w25-quiz': L(
    'Unit 12 — Life on Other Planets',
    'Từ vựng về cuộc sống trên các hành tinh khác.',
    ['Học từ vựng space.', 'Sự tồn tại của sự sống.', 'Khám phá vũ trụ.'],
    [
      { h: 'Space Vocabulary' },
      { ul: ['planet — hành tinh', 'galaxy — thiên hà', 'universe — vũ trụ', 'alien — người ngoài hành tinh', 'astronaut — phi hành gia', 'spacecraft — tàu vũ trụ', 'discover — khám phá', 'extraterrestrial — ngoài Trái Đất'] },
    ],
    [
      { q: 'Translate: "Mars is the fourth planet from the Sun."', a: 'Sao Hoả là hành tinh thứ tư từ Mặt Trời.' },
      { q: 'Do you believe in aliens?', a: 'Yes, I think there might be life on other planets / No, I don\'t.' },
    ]
  ),

  'S8TA-w26-quiz': L(
    'Unit 12 — Modal verbs: may / might',
    'May và might — khả năng, sự cho phép.',
    ['Phân biệt may và might.', 'Diễn tả khả năng.', 'Đặt câu chính xác.'],
    [
      { h: 'May / Might' },
      { p: 'May/Might + V(bare) — diễn tả khả năng (perhaps). Might thường ít chắc chắn hơn may.' },
      { ul: ['It may rain tomorrow. — Có thể mai mưa.', 'There might be life on Mars. — Có thể có sự sống trên Sao Hoả (ít chắc chắn).'] },
      { p: 'May cũng dùng xin phép lịch sự: "May I come in?"' },
    ],
    [
      { q: 'Translate: "There might be life on Mars."', a: 'Có thể có sự sống trên Sao Hoả.' },
      { q: 'Make a sentence with may (possibility).', a: 'It may snow this winter in the mountains.' },
    ]
  ),

  'S8TA-w27-quiz': L(
    'Unit 7–12 — Vocabulary review',
    'Ôn từ vựng các unit 7-12.',
    ['Ôn từ vựng pollution, communication, science, space.', 'Liên hệ từ vựng vào ngữ cảnh.', 'Mở rộng từ vựng.'],
    [
      { h: 'Topics' },
      { ul: ['Pollution: pollution, recycle, environment…', 'Communication: verbal, body language, social media…', 'Science/Tech: invention, AI, robot…', 'Space: planet, galaxy, alien, astronaut…'] },
      { note: 'Học từ vựng theo chủ đề + câu mẫu để dễ nhớ và dùng.' },
    ],
    [
      { q: 'Translate: "Recycling helps protect the environment."', a: 'Tái chế giúp bảo vệ môi trường.' },
      { q: 'What is AI?', a: 'AI (artificial intelligence) is the intelligence of machines.' },
    ]
  ),

  'S8TA-w28-quiz': L(
    'Grammar — Comparatives review (intermediate)',
    'Ôn lại so sánh ở mức cao hơn.',
    ['Comparatives & superlatives.', 'As... as.', 'The more... the more...'],
    [
      { h: 'Review Comparison' },
      { ul: ['Comparative: -er/more...than. VD: faster, more carefully.', 'Superlative: the -est/the most. VD: the fastest, the most beautiful.', 'Equality: as ... as. VD: She is as tall as her brother.', 'Double comparative: The more you practice, the better you get.'] },
    ],
    [
      { q: 'Form superlative: "Mt. Everest is (high) ___ mountain in the world."', a: 'the highest.' },
      { q: 'Translate: "The harder you study, the more you learn."', a: 'Bạn càng học chăm chỉ, bạn càng học được nhiều.' },
    ]
  ),

  'S8TA-w29-quiz': L(
    'Grammar — Passive voice (simple tenses)',
    'Câu bị động ở các thì đơn giản.',
    ['Câu bị động present simple.', 'Câu bị động past simple.', 'Câu bị động future simple.'],
    [
      { h: 'Passive Voice in Simple Tenses' },
      { ul: ['Present: S + am/is/are + V₃/ed. VD: English is taught in schools.', 'Past: S + was/were + V₃/ed. VD: The cake was made by my mom.', 'Future: S + will be + V₃/ed. VD: The project will be finished tomorrow.'] },
      { note: 'Câu bị động dùng khi chủ thể không quan trọng hoặc không rõ.' },
    ],
    [
      { q: 'Change to passive: "They built this house in 1990."', a: 'This house was built in 1990.' },
      { q: 'Change to passive: "Many people speak Spanish in South America."', a: 'Spanish is spoken by many people in South America.' },
    ]
  ),

  'S8TA-w30-quiz': L(
    'Reading & Vocabulary — Festivals',
    'Đọc đoạn văn về các lễ hội thế giới.',
    ['Mở rộng từ vựng festivals.', 'Kỹ năng đọc hiểu.', 'Biết các lễ hội nổi tiếng thế giới.'],
    [
      { h: 'World Festivals' },
      { ul: ['Christmas (25/12) — Lễ Giáng sinh', 'New Year (1/1) — Tết Tây', 'Halloween (31/10) — Lễ hoá trang', 'Easter — Lễ Phục sinh', 'Carnival (Brazil)', 'Diwali (India) — Lễ hội ánh sáng'] },
    ],
    [
      { q: 'When is Christmas?', a: 'Christmas is on December 25th.' },
      { q: 'What is Halloween?', a: "Halloween is a festival on October 31st when people dress up in costumes." },
    ]
  ),

  'S8TA-w31-quiz': L(
    'Speaking — Giving opinions',
    'Kỹ năng nói: đưa ra ý kiến.',
    ['Cấu trúc đưa ý kiến.', 'Đồng ý/không đồng ý lịch sự.', 'Tham gia thảo luận.'],
    [
      { h: 'Giving Opinions' },
      { ul: ['I think... / I believe...', "In my opinion, ...", 'It seems to me that...', "From my point of view, ..."] },
      { h: 'Agreeing / Disagreeing' },
      { ul: ['Agreeing: "I agree with you. / That\'s a good point."', 'Disagreeing politely: "I see your point, but... / I\'m not sure about that."'] },
    ],
    [
      { q: 'Give your opinion: "Should students wear uniforms?"', a: 'In my opinion, students should wear uniforms because it shows equality.' },
      { q: 'Disagree politely with: "Watching TV is a waste of time."', a: "I see your point, but I think some TV programs are educational." },
    ]
  ),

  'S8TA-w32-quiz': L(
    'Writing — Email & Paragraph',
    'Kỹ năng viết: email và đoạn văn.',
    ['Cấu trúc email cơ bản.', 'Cấu trúc đoạn văn.', 'Viết rõ ràng, mạch lạc.'],
    [
      { h: 'Email Structure' },
      { ul: ['Subject: ngắn gọn, rõ ràng.', 'Greeting: Dear..., Hi...', 'Body: nội dung chính, rõ ràng.', 'Closing: Best regards, Sincerely yours...', 'Signature: tên của bạn.'] },
      { h: 'Paragraph Structure' },
      { ul: ['Topic sentence: câu chủ đề.', 'Supporting sentences: 2-3 câu hỗ trợ với ví dụ.', 'Concluding sentence: câu kết luận.'] },
    ],
    [
      { q: 'Write an opening email greeting.', a: 'Dear Tom, / Hi Mary,' },
      { q: 'Topic sentence for "My hobby"?', a: 'I have many hobbies, but my favorite is reading books.' },
    ]
  ),

  'S8TA-w33-quiz': L(
    'Listening — Numbers, dates, prices',
    'Kỹ năng nghe: số, ngày tháng, giá cả.',
    ['Nghe số và phân biệt.', 'Nghe ngày tháng theo cấu trúc tiếng Anh.', 'Nghe giá tiền.'],
    [
      { h: 'Numbers' },
      { ul: ['Phân biệt: thirteen (13) vs thirty (30) — chú ý trọng âm.', 'Số lớn: 1,000 = one thousand; 1,000,000 = one million.'] },
      { h: 'Dates' },
      { p: 'British: 25/12/2024 = 25th December 2024. American: 12/25/2024 = December 25, 2024.' },
      { h: 'Prices' },
      { p: '$5.99 = five dollars ninety-nine cents (hoặc five dollars and ninety-nine cents).' },
    ],
    [
      { q: 'Write: "The book costs five dollars and ninety-nine cents."', a: '$5.99.' },
      { q: 'Write the date: "March 15, 2024" (British style)?', a: '15th March 2024 / 15/03/2024.' },
    ]
  ),

  'S8TA-w34-quiz': L(
    'Grammar review — Tenses',
    'Ôn tập các thì đã học.',
    ['Phân biệt simple present, simple past, simple future.', 'Phân biệt continuous tenses.', 'Sử dụng phù hợp ngữ cảnh.'],
    [
      { h: 'Tenses Summary' },
      { ul: ['Simple present: V/Vs (sự thật, thói quen). VD: She loves music.', 'Simple past: V₂/ed (quá khứ kết thúc). VD: I visited Hue last year.', 'Simple future: will + V (tương lai). VD: I will travel next month.', 'Present continuous: am/is/are + V-ing (đang xảy ra). VD: I am studying.', 'Past continuous: was/were + V-ing.', 'Future continuous: will be + V-ing.'] },
    ],
    [
      { q: 'Tense: "She is studying English now."', a: 'Present continuous.' },
      { q: 'Tense: "By 5 PM tomorrow, I will be flying to Paris."', a: 'Future continuous.' },
    ]
  ),

  'S8TA-w35-quiz': L(
    'Review HK2 — Final',
    'Tổng hợp kiến thức cả năm tiếng Anh 8.',
    ['Tổng hợp từ vựng.', 'Tổng hợp ngữ pháp.', 'Kỹ năng tổng hợp.'],
    [
      { h: 'Final Review' },
      { ul: ['12 units: leisure, countryside, ethnic, customs, festivals, folk tales, pollution, English countries, disasters, communication, sci-tech, space.', 'Grammar: V-ing/to-V, comparatives, conditionals, passive, modals, reported speech, all tenses.', 'Skills: reading, listening, speaking, writing — đầy đủ 4 kỹ năng.'] },
      { note: 'Đọc nhiều tiếng Anh, nghe nhạc/podcast, nói chuyện với bạn bè — duy trì hằng ngày.' },
    ],
    [
      { q: 'Vietnamese has how many ethnic groups?', a: '54 ethnic groups.' },
      { q: 'Conditional: "If you (study) ___, you (pass) ___."', a: 'study, will pass (conditional type 1).' },
    ]
  ),
};
