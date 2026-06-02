// ============================================================
// Lớp 9 · TIẾNG ANH — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Key trùng id quiz: "S9TA-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9TA_LESSONS = {
  'S9TA-w01-quiz': L(
    'Local Environment — Vocabulary',
    'Year 9 opens with the theme of local environment — places, crafts and customs in our community.',
    ['Learn vocabulary about local crafts and places.', 'Use new words in context.'],
    [
      { h: 'Key Vocabulary' },
      { ul: ['craft village (n) — làng nghề', 'artisan (n) — nghệ nhân', 'preserve (v) — giữ gìn', 'heritage (n) — di sản', 'traditional (adj) — truyền thống'] },
      { h: 'Common Verbs' },
      { ul: ['carve, weave, embroider, mould — khắc, dệt, thêu, nặn'] },
      { note: 'These words appear frequently in reading passages about Vietnam.' },
    ],
    [
      { q: 'Translate: "Bat Trang is a famous pottery village."', a: 'Bat Trang is a famous pottery (craft) village.' },
      { q: 'What is an "artisan"?', a: 'A person who is skilled at making things by hand, especially in traditional crafts.' },
    ]
  ),

  'S9TA-w02-quiz': L(
    'Phrasal Verbs',
    'Phrasal verbs (verb + particle) are essential for spoken and written English. They often appear in exams.',
    ['Identify common phrasal verbs.', 'Use them correctly in sentences.'],
    [
      { h: 'Common Phrasal Verbs' },
      { ul: ['turn on/off — bật/tắt', 'set up — thiết lập, thành lập', 'pass down — truyền lại', 'get on/off — lên/xuống xe', 'look after — chăm sóc'] },
      { note: 'Separable vs. inseparable: "Turn the light on" / "Turn it on" (separable); "Look after the kids" (inseparable).' },
    ],
    [
      { q: 'Choose: She "looks after" / "looks for" her younger brother.', a: '"Looks after" — takes care of him.' },
      { q: 'Use "set up" in a sentence.', a: 'The artisans set up a workshop to teach young people.' },
    ]
  ),

  'S9TA-w03-quiz': L(
    'Complex Sentences with Adverbial Clauses',
    'Adverbial clauses (time, reason, condition...) make your writing more sophisticated.',
    ['Form and use adverbial clauses.', 'Choose the right conjunction.'],
    [
      { h: 'Common Conjunctions' },
      { ul: ['Time: when, while, before, after, as soon as.', 'Reason: because, since, as.', 'Condition: if, unless.', 'Contrast: although, though, even though.', 'Purpose: so that, in order that.'] },
      { note: 'Comma rule: place a comma when the adverbial clause comes first ("When I arrived, ...").' },
    ],
    [
      { q: 'Combine: "She studied hard. She passed the exam."', a: 'Because she studied hard, she passed the exam.' },
      { q: 'Combine using "although": "It was cold. We went out."', a: 'Although it was cold, we went out.' },
    ]
  ),

  'S9TA-w04-quiz': L(
    'City Life — Reading Skills',
    'Reading comprehension is a major part of the entrance exam. Practice scanning, skimming and inferring.',
    ['Apply reading strategies.', 'Answer different question types.'],
    [
      { h: 'Reading Strategies' },
      { ul: ['Skimming: read fast for the main idea.', 'Scanning: find specific information.', 'Inferring: understand meaning beyond the text.', 'Vocabulary in context: guess word meaning from surrounding text.'] },
      { note: 'Always read the questions before reading the text — saves time.' },
    ],
    [
      { q: 'Strategy for "What is the main idea?"', a: 'Skimming — focus on the first and last paragraphs and topic sentences.' },
      { q: 'Strategy for "What date / who / how many"?', a: 'Scanning — look for specific keywords (numbers, proper nouns).' },
    ]
  ),

  'S9TA-w05-quiz': L(
    'Phrasal Verbs (cont.) + City Life',
    'More phrasal verbs related to city living and daily activities.',
    ['Use phrasal verbs about daily life.', 'Describe city living.'],
    [
      { h: 'City-Life Phrasal Verbs' },
      { ul: ['put up with — chịu đựng', 'cut down on — giảm bớt', 'come up with — nảy ra ý tưởng', 'run out of — hết, cạn'] },
      { note: 'Many phrasal verbs have 3 parts: "look forward to", "put up with", "run out of".' },
    ],
    [
      { q: 'Choose: I can\'t "put up with" / "put up to" this noise!', a: '"Put up with" — tolerate / endure.' },
      { q: 'Sentence with "cut down on"?', a: 'We should cut down on plastic to protect the environment.' },
    ]
  ),

  'S9TA-w06-quiz': L(
    'Comparison of Adjectives + Quantifiers',
    'Comparing things accurately is a key skill — comparative and superlative forms.',
    ['Form comparatives and superlatives correctly.', 'Use quantifiers.'],
    [
      { h: 'Comparison Forms' },
      { ul: ['Short adj: -er / -est (big → bigger, biggest).', 'Long adj: more / most (beautiful → more beautiful, the most beautiful).', 'Irregular: good → better → best; bad → worse → worst.'] },
      { h: 'Quantifiers' },
      { ul: ['many + countable; much + uncountable.', 'a few / few + countable; a little / little + uncountable.', 'a lot of / lots of — both.'] },
      { note: '"Few" = not many (negative); "a few" = some (positive).' },
    ],
    [
      { q: 'Comparative of "happy"?', a: 'Happier (short, ending in -y).' },
      { q: 'Choose: "I have ___ time today." (a little / a few)', a: '"A little" — time is uncountable.' },
    ]
  ),

  'S9TA-w07-quiz': L(
    'Life in the Past — Past Simple + Used to',
    'Talk about past habits and contrast past with present.',
    ['Use "used to" correctly.', 'Compare with Past Simple.'],
    [
      { h: 'Used to' },
      { p: 'Form: "used to + V (bare infinitive)" — describes past habits no longer true.' },
      { ul: ['Affirmative: She used to play tennis.', 'Negative: She didn\'t use to play tennis.', 'Question: Did she use to play tennis?'] },
      { note: '"Used to" only describes past habits. For present habits, use Simple Present + frequency adverbs.' },
    ],
    [
      { q: 'Make a sentence: I / not / drink coffee / as a child.', a: 'I didn\'t use to drink coffee as a child.' },
      { q: 'Difference: "I used to live in HN" vs "I live in HN"?', a: 'First: past habit, no longer live there. Second: present, still live there.' },
    ]
  ),

  'S9TA-w08-quiz': L(
    'Wishes — Subjunctive Mood',
    'Express wishes about present and past — crucial structure for entrance exam.',
    ['Use "wish" with present and past tenses.', 'Understand the subjunctive mood.'],
    [
      { h: 'Wish + Past Simple (present wish)' },
      { p: 'I wish I + V (Past Simple) — wish about present.' },
      { ul: ['I wish I had more time. (= I don\'t have more time)', 'I wish she were here. (= she isn\'t here)'] },
      { h: 'Wish + Past Perfect (past regret)' },
      { p: 'I wish I + had + V3 — regret about past.' },
      { ul: ['I wish I had studied harder. (= I didn\'t study harder)'] },
      { note: 'Note: "were" is used for all subjects in formal English ("If I were", "I wish I were").' },
    ],
    [
      { q: 'I want to be rich now. (use wish)', a: 'I wish I were rich.' },
      { q: 'I am sorry I didn\'t bring my umbrella.', a: 'I wish I had brought my umbrella.' },
    ]
  ),

  'S9TA-w09-quiz': L(
    'Teen Stress and Pressure — Vocabulary',
    'Learn vocabulary to discuss teenage problems and solutions.',
    ['Learn key vocabulary about stress.', 'Express feelings and solutions.'],
    [
      { h: 'Vocabulary' },
      { ul: ['stress (n) — căng thẳng', 'pressure (n) — áp lực', 'anxiety (n) — lo lắng', 'cope with (v) — đối phó', 'overcome (v) — vượt qua', 'self-confidence (n) — tự tin'] },
      { note: 'These words appear in many essays and discussion topics.' },
    ],
    [
      { q: 'Translate: "I need to learn how to cope with stress."', a: 'Tôi cần học cách đối phó với căng thẳng.' },
      { q: 'Synonym of "anxiety"?', a: 'Worry, nervousness, unease.' },
    ]
  ),

  'S9TA-w10-quiz': L(
    'Reported Speech — Statements',
    'Reported speech is one of the most important and frequently tested grammar topics.',
    ['Transform direct to reported speech.', 'Apply tense backshift.'],
    [
      { h: 'Tense Backshift' },
      { ul: ['Present Simple → Past Simple', 'Present Continuous → Past Continuous', 'Past Simple → Past Perfect', 'Present Perfect → Past Perfect', 'will → would', 'can → could'] },
      { h: 'Pronoun & Time Reference Changes' },
      { ul: ['I → he/she; you → I/me; today → that day; tomorrow → the next day; here → there'] },
      { note: 'Verb: "He said (that)..." or "He told me (that)...".' },
    ],
    [
      { q: 'Report: He said: "I am tired."', a: 'He said (that) he was tired.' },
      { q: 'Report: She said: "I will come tomorrow."', a: 'She said (that) she would come the next day.' },
    ]
  ),

  'S9TA-w11-quiz': L(
    'Reported Speech — Questions',
    'Transform questions into reported form — requires both backshift and word order change.',
    ['Report yes/no questions and wh-questions.', 'Change word order correctly.'],
    [
      { h: 'Yes/No Questions' },
      { p: 'Use "if" or "whether"; change to statement word order.' },
      { ul: ['"Do you like coffee?" → He asked if I liked coffee.'] },
      { h: 'Wh-Questions' },
      { p: 'Use the wh-word; change to statement word order.' },
      { ul: ['"Where do you live?" → He asked where I lived.'] },
      { note: 'No question mark in reported questions; no "do/does/did" auxiliary in reported form.' },
    ],
    [
      { q: 'Report: She asked: "Are you coming?"', a: 'She asked if I was coming.' },
      { q: 'Report: He asked: "What time is it?"', a: 'He asked what time it was.' },
    ]
  ),

  'S9TA-w12-quiz': L(
    'Lifelong Learning + Modal Verbs',
    'Modal verbs express ability, necessity, possibility, permission.',
    ['Use the main modals correctly.', 'Distinguish similar meanings.'],
    [
      { h: 'Main Modals' },
      { ul: ['can/could — ability, permission', 'must/have to — necessity', 'should/ought to — advice', 'may/might — possibility', 'will/would — future, polite request'] },
      { h: 'Common Mistakes' },
      { ul: ['Modal + bare infinitive (no "to"): She can speak English (NOT "to speak").', 'No "s" with 3rd person: He can swim (NOT "cans").'] },
      { note: '"Must" = personal obligation; "have to" = external obligation.' },
    ],
    [
      { q: 'Choose: You ___ wear a uniform at school. (must / can)', a: 'Must — obligation by rule.' },
      { q: 'Choose: "It ___ rain tomorrow." (might / must)', a: 'Might — possibility.' },
    ]
  ),

  'S9TA-w13-quiz': L(
    'Tourism — Vocabulary + Reading',
    'Vocabulary about tourism — a popular essay theme.',
    ['Learn travel-related vocabulary.', 'Discuss tourism pros and cons.'],
    [
      { h: 'Tourism Vocabulary' },
      { ul: ['accommodation (n) — chỗ ở', 'sightseeing (n) — tham quan', 'destination (n) — điểm đến', 'attraction (n) — điểm tham quan', 'eco-tourism (n) — du lịch sinh thái', 'package tour (n) — tour trọn gói'] },
      { note: 'Tourism is a frequent essay topic — be ready with ideas.' },
    ],
    [
      { q: 'What is "eco-tourism"?', a: 'Tourism that focuses on natural environments and conservation.' },
      { q: 'Translate: "Vietnam has many attractive tourist destinations."', a: 'Việt Nam có nhiều điểm đến du lịch hấp dẫn.' },
    ]
  ),

  'S9TA-w14-quiz': L(
    'Mid-term Review — Grammar Summary',
    'Mid-semester review of all major grammar points.',
    ['Review main grammar topics.', 'Practice combined skills.'],
    [
      { h: 'Key Grammar Topics' },
      { ul: ['Tenses: present simple, past simple, present perfect, past continuous.', 'Adverbial clauses.', 'Comparison.', '"Used to" / "wish" / reported speech.', 'Modal verbs.'] },
      { note: 'Practice every topic; identify weak areas to focus on.' },
    ],
    [
      { q: 'Complete: "If I had time, I ___ help you." (will / would)', a: 'Would — conditional type 2.' },
      { q: 'Comparative: "Hanoi is ___ Da Nang." (bigger than / more big than)', a: 'Bigger than — "big" is a short adjective.' },
    ]
  ),

  'S9TA-w15-quiz': L(
    'Vietnam — Around the World',
    'Vocabulary about Vietnamese culture, geography, and history.',
    ['Learn vocabulary about Vietnam.', 'Talk about Vietnamese culture.'],
    [
      { h: 'Vocabulary' },
      { ul: ['heritage (n) — di sản', 'pagoda (n) — chùa', 'temple (n) — đền', 'festival (n) — lễ hội', 'ethnic group (n) — dân tộc', 'specialty (n) — đặc sản'] },
      { note: 'Vietnam-themed texts are common in reading passages.' },
    ],
    [
      { q: 'Vietnam has ___ ethnic groups.', a: '54 ethnic groups (Kinh and 53 ethnic minorities).' },
      { q: 'Name 2 UNESCO heritages of Vietnam.', a: 'Ha Long Bay, Hoi An Ancient Town, Hue Imperial City, My Son Sanctuary, Phong Nha-Ke Bang... (many options).' },
    ]
  ),

  'S9TA-w16-quiz': L(
    'Passive Voice',
    'Passive voice is fundamental — used when the doer is unknown or unimportant.',
    ['Form passive voice in all main tenses.', 'Choose active vs passive appropriately.'],
    [
      { h: 'Formation' },
      { p: 'Subject + be + V3/V-ed (+ by + agent).' },
      { ul: ['Present: is/are + V3 — "The letter is written by him."', 'Past: was/were + V3 — "The letter was written by him."', 'Present Perfect: has/have been + V3.', 'Modal: modal + be + V3 — "It must be done."'] },
      { note: 'Use passive when the action is more important than the doer.' },
    ],
    [
      { q: 'Passive: They built this house in 1990.', a: 'This house was built in 1990 (by them).' },
      { q: 'Passive: She has finished the project.', a: 'The project has been finished (by her).' },
    ]
  ),

  'S9TA-w17-quiz': L(
    'Conditional Sentences — Type 1, 2, 3',
    'Conditionals are heavily tested in the entrance exam.',
    ['Form and use the 3 main conditional types.', 'Distinguish their meanings.'],
    [
      { h: 'Three Main Types' },
      { ul: ['Type 1 (real future): If + Present Simple, will + V. "If it rains, I will stay home."', 'Type 2 (unreal present): If + Past Simple, would + V. "If I had money, I would buy it."', 'Type 3 (unreal past): If + Past Perfect, would have + V3. "If I had studied, I would have passed."'] },
      { h: 'Mixed Conditionals' },
      { p: '"If I had studied medicine, I would be a doctor now." (past condition → present result)' },
      { note: 'Comma needed when the "if" clause comes first.' },
    ],
    [
      { q: 'Fill in: "If I ___ you, I would tell the truth." (am/were)', a: 'Were — Type 2 (use "were" for all subjects).' },
      { q: 'Type 3: "If I had known, I ___ (call) you."', a: 'Would have called.' },
    ]
  ),

  'S9TA-w18-quiz': L(
    'First Semester Review',
    'Comprehensive review of all topics from semester 1.',
    ['Synthesize all major topics.', 'Identify weaknesses for next semester.'],
    [
      { h: 'HK1 Summary' },
      { ul: ['Themes: local environment, city life, life in the past, teen problems, lifelong learning, tourism, Vietnam.', 'Grammar: adverbial clauses, comparison, "used to", "wish", reported speech, modals, passive voice, conditionals.'] },
      { note: 'Strong vocabulary + grammar foundation will help in HK2 + entrance exam.' },
    ],
    [
      { q: 'Common mistake with reported speech?', a: 'Forgetting tense backshift, or not changing time/place references.' },
      { q: 'Which conditional for "I wish I had known"?', a: 'This is a "wish" structure, similar to Type 3 conditional (past regret).' },
    ]
  ),

  'S9TA-w19-quiz': L(
    'English in the World — Reading',
    'English as a global language — its history and importance.',
    ['Read longer passages about language.', 'Understand main and supporting ideas.'],
    [
      { h: 'Key Ideas' },
      { ul: ['English is spoken by ~1.5 billion people worldwide.', 'It is the lingua franca of business, science, internet.', 'Many varieties: British, American, Australian, Indian English.'] },
      { note: 'Mastering English opens many doors — academically and professionally.' },
    ],
    [
      { q: 'What is "lingua franca"?', a: 'A common language used by people who speak different native languages.' },
      { q: 'Why learn English?', a: 'Access to global knowledge, career opportunities, international communication.' },
    ]
  ),

  'S9TA-w20-quiz': L(
    'Career Choice — Vocabulary',
    'Vocabulary about jobs, skills, and career paths.',
    ['Learn vocabulary about careers.', 'Discuss career options.'],
    [
      { h: 'Career Vocabulary' },
      { ul: ['career (n) — sự nghiệp', 'profession (n) — nghề chuyên môn', 'occupation (n) — nghề nghiệp', 'qualification (n) — bằng cấp', 'skill (n) — kỹ năng', 'experience (n) — kinh nghiệm'] },
      { h: 'Common Professions' },
      { ul: ['engineer, doctor, teacher, lawyer, scientist, programmer, designer, accountant'] },
      { note: 'Be ready to discuss your future career in writing/speaking sections.' },
    ],
    [
      { q: 'Difference: "career" vs "job"?', a: 'Career = long-term professional journey; Job = a specific position.' },
      { q: 'Translate: "I want to be a software engineer."', a: 'Tôi muốn trở thành kỹ sư phần mềm.' },
    ]
  ),

  'S9TA-w21-quiz': L(
    'Reported Speech — Commands and Requests',
    'Report commands, requests, and advice using infinitive structure.',
    ['Report imperative sentences.', 'Use appropriate reporting verbs.'],
    [
      { h: 'Structure' },
      { p: 'S + told/asked/advised + O + (not) + to + V.' },
      { ul: ['"Sit down," she said. → She told him to sit down.', '"Please help me," he said. → He asked her to help him.', '"Don\'t go!" she said. → She told him not to go.'] },
      { h: 'Reporting Verbs' },
      { ul: ['told (commands)', 'asked (requests)', 'advised (advice)', 'warned (warnings)', 'reminded (reminders)'] },
      { note: 'Choose the right reporting verb based on the speaker\'s intent.' },
    ],
    [
      { q: 'Report: "Please open the window," he said.', a: 'He asked me to open the window.' },
      { q: 'Report: "You should study harder," she said.', a: 'She advised me to study harder.' },
    ]
  ),

  'S9TA-w22-quiz': L(
    'Relative Clauses',
    'Relative clauses describe nouns — essential for combining sentences.',
    ['Use "who", "which", "that", "whose", "whom".', 'Distinguish defining vs non-defining clauses.'],
    [
      { h: 'Relative Pronouns' },
      { ul: ['who — for people (subject)', 'whom — for people (object, formal)', 'which — for things/animals', 'that — for both (defining clauses only)', 'whose — possession'] },
      { h: 'Defining vs Non-Defining' },
      { ul: ['Defining: essential info, no commas. "The girl who lives next door is nice."', 'Non-defining: extra info, with commas. "My sister, who lives in HN, is a teacher."'] },
      { note: '"That" cannot be used in non-defining clauses.' },
    ],
    [
      { q: 'Combine: "This is the book. I bought it yesterday."', a: 'This is the book (that/which) I bought yesterday.' },
      { q: 'Fill in: "She is the woman ___ husband is a doctor."', a: 'Whose — possession.' },
    ]
  ),

  'S9TA-w23-quiz': L(
    'Natural Disasters — Vocabulary',
    'Vocabulary about disasters and climate change — global issues.',
    ['Learn disaster-related vocabulary.', 'Discuss environmental issues.'],
    [
      { h: 'Disasters & Climate' },
      { ul: ['flood (n/v) — lũ lụt', 'drought (n) — hạn hán', 'earthquake (n) — động đất', 'typhoon (n) — bão', 'climate change (n) — biến đổi khí hậu', 'global warming (n) — sự nóng lên toàn cầu'] },
      { note: 'Vietnam is one of the countries most affected by climate change.' },
    ],
    [
      { q: 'What is "global warming"?', a: 'The long-term rise in Earth\'s average temperature, caused mainly by human activities.' },
      { q: 'Translate: "Vietnam often suffers from floods and typhoons."', a: 'Việt Nam thường chịu ảnh hưởng của lũ lụt và bão.' },
    ]
  ),

  'S9TA-w24-quiz': L(
    'Linking Words and Connectors',
    'Connectors make your writing flow smoothly and logically.',
    ['Use connectors correctly.', 'Improve writing coherence.'],
    [
      { h: 'Categories of Connectors' },
      { ul: ['Addition: and, also, in addition, furthermore, moreover.', 'Contrast: but, however, although, nevertheless, on the other hand.', 'Reason: because, since, as, due to.', 'Result: so, therefore, thus, as a result, consequently.', 'Example: for example, for instance, such as.'] },
      { note: 'Vary your connectors to avoid repetition — important in writing exams.' },
    ],
    [
      { q: 'Choose: "She was tired, ___ she went home." (because / so)', a: 'So — expressing result.' },
      { q: 'Connector for example?', a: 'For example, for instance, such as.' },
    ]
  ),

  'S9TA-w25-quiz': L(
    'Adjective and Adverb Formation',
    'Form adjectives and adverbs from nouns/verbs — vocabulary expansion.',
    ['Form adjectives with suffixes.', 'Form adverbs with -ly.'],
    [
      { h: 'Adjective Suffixes' },
      { ul: ['-ful: helpful, useful, careful', '-less: useless, careless, hopeless', '-ous: famous, dangerous, curious', '-able: comfortable, suitable', '-ive: active, creative, attractive'] },
      { h: 'Adverbs' },
      { ul: ['Most: adj + ly (quick → quickly).', 'Adj ending in -y: y → ily (happy → happily).', 'Adj ending in -le: -le → -ly (simple → simply).', 'Irregular: good → well, fast → fast.'] },
      { note: 'Adverbs typically modify verbs; adjectives modify nouns.' },
    ],
    [
      { q: 'Adverb of "careful"?', a: 'Carefully.' },
      { q: 'Adjective from "child"?', a: 'Childish (negative) or childlike (positive).' },
    ]
  ),

  'S9TA-w26-quiz': L(
    'Writing — Email and Formal Letter',
    'Practice writing emails — formal and informal styles.',
    ['Format an email correctly.', 'Use appropriate tone.'],
    [
      { h: 'Email Structure' },
      { ul: ['Greeting: "Dear Mr./Ms. ___," (formal); "Hi ___," (informal).', 'Opening: "I am writing to..." / "Just writing to say..."', 'Body: clear paragraphs, one topic each.', 'Closing: "I look forward to..." / "Hope to hear from you soon."', 'Sign-off: "Yours sincerely," / "Best regards," / "Cheers,"'] },
      { note: 'Formal: no contractions, full forms. Informal: contractions OK, casual tone.' },
    ],
    [
      { q: 'Formal greeting?', a: 'Dear Mr./Ms. [Last name], or Dear Sir/Madam.' },
      { q: 'Sign-off for informal email?', a: 'Best wishes, Cheers, Love, See you soon.' },
    ]
  ),

  'S9TA-w27-quiz': L(
    'Writing — Discursive Essay',
    'Argumentative/discursive essays present and discuss an issue.',
    ['Structure a discursive essay.', 'Present pros and cons effectively.'],
    [
      { h: 'Essay Structure' },
      { ul: ['Introduction: thesis statement.', 'Body 1: arguments FOR + examples.', 'Body 2: arguments AGAINST + examples.', 'Conclusion: balanced summary + personal opinion.'] },
      { h: 'Useful Phrases' },
      { ul: ['On the one hand... On the other hand...', 'In contrast / However...', 'In conclusion / To sum up...'] },
      { note: 'Aim for ~150-200 words at this level. Use a variety of structures.' },
    ],
    [
      { q: 'Phrase for adding an idea?', a: 'Furthermore, In addition, Moreover, Also.' },
      { q: 'Phrase for concluding?', a: 'In conclusion, To sum up, All in all, In summary.' },
    ]
  ),

  'S9TA-w28-quiz': L(
    'Tense Review — All Major Tenses',
    'Consolidate all major English tenses — essential for the exam.',
    ['Identify tense from time markers.', 'Use the correct tense in context.'],
    [
      { h: 'Major Tenses' },
      { ul: ['Present Simple: routine, facts. (every day, usually)', 'Present Continuous: now, around now. (now, currently)', 'Past Simple: completed action. (yesterday, last week)', 'Past Continuous: ongoing past action. (while, as)', 'Present Perfect: connecting past to now. (since, for, already, yet)', 'Past Perfect: action before another past action. (had + V3)', 'Future Simple: predictions, promises. (will + V)', 'Be going to: planned future. (am/is/are going to + V)'] },
      { note: 'Time markers are the strongest clue for tense.' },
    ],
    [
      { q: 'Tense for: "I have lived here for 5 years."', a: 'Present Perfect — action continuing to now.' },
      { q: 'Tense for: "I was studying when she called."', a: 'Past Continuous (was studying) + Past Simple (called) — interrupted action.' },
    ]
  ),

  'S9TA-w29-quiz': L(
    'Cloze Test Strategy',
    'Cloze tests (fill-in-the-blank) test vocabulary, grammar, and reading.',
    ['Apply cloze test strategies.', 'Use context clues.'],
    [
      { h: 'Strategies' },
      { ul: ['Read the entire passage first to get the gist.', 'Identify what type of word fits (noun, verb, adjective, conjunction).', 'Use grammar rules: tense, subject-verb agreement.', 'Use context clues from surrounding sentences.', 'After filling in, read through again to check.'] },
      { note: 'Common test points: tenses, prepositions, articles, collocations.' },
    ],
    [
      { q: 'Sentence: "She is interested ___ music." Preposition?', a: 'In — collocation "interested in".' },
      { q: '"He is good ___ English." (preposition)', a: 'At — "good at" something.' },
    ]
  ),

  'S9TA-w30-quiz': L(
    'Sentence Transformation',
    'Sentence transformation tests grammatical flexibility — common in entrance exams.',
    ['Transform sentences while keeping the meaning.', 'Master different transformation patterns.'],
    [
      { h: 'Common Transformations' },
      { ul: ['Active ↔ Passive', 'Direct ↔ Reported speech', 'Conditional types', 'Although/though ↔ despite/in spite of', '"It is + adj + that..." ↔ "Adj + to + V"', '"Too...to" ↔ "so...that"'] },
      { note: 'Always check that the new sentence has the same meaning.' },
    ],
    [
      { q: 'Transform: "Although it was cold, we went out." → Despite ___', a: 'Despite the cold (weather), we went out.' },
      { q: '"He is too young to drive." → "He is so..."', a: 'He is so young that he can\'t drive.' },
    ]
  ),

  'S9TA-w31-quiz': L(
    'Exam Practice Test 1',
    'Mock test 1 — full simulation of the entrance exam.',
    ['Complete a full mock test.', 'Time yourself appropriately.'],
    [
      { h: 'Exam Structure (Hanoi)' },
      { ul: ['Phonetics: 4-5 questions on pronunciation and stress.', 'Grammar/Vocabulary multiple choice: ~10-15 questions.', 'Reading comprehension: 1-2 passages.', 'Cloze test: 1 passage with 5-10 blanks.', 'Writing: sentence transformation + short paragraph.'] },
      { note: 'Time: 60-90 minutes. Plan ~1 minute per multiple choice.' },
    ],
    [
      { q: 'Time management tip?', a: 'Do easier questions first; mark hard ones to revisit.' },
      { q: 'Reading comprehension tip?', a: 'Read questions first, then scan/skim the passage.' },
    ]
  ),

  'S9TA-w32-quiz': L(
    'Exam Practice Test 2 + Phonetics Review',
    'Mock test 2 with focus on pronunciation and stress.',
    ['Practice phonetics.', 'Review stress patterns.'],
    [
      { h: 'Stress Rules' },
      { ul: ['2-syllable nouns/adjectives: usually 1st syllable stressed.', '2-syllable verbs: usually 2nd syllable stressed.', '-tion, -sion, -ic: stress on syllable before.', '-ee, -eer, -ese: stress on the suffix.'] },
      { h: 'Pronunciation' },
      { ul: ['Plural -s: /s/, /z/, /ɪz/ depending on previous sound.', 'Past -ed: /t/, /d/, /ɪd/ depending on previous sound.'] },
      { note: 'Listen to native speakers; practice with dictionary phonetic symbols.' },
    ],
    [
      { q: 'Stress in "education"?', a: '/ˌɛdʒuˈkeɪʃən/ — stress on third syllable (before -tion).' },
      { q: 'Pronunciation of "asked" -ed?', a: '/t/ — after voiceless /k/ sound.' },
    ]
  ),

  'S9TA-w33-quiz': L(
    'Exam Practice Test 3 + Common Mistakes',
    'Mock test 3 with focus on avoiding common errors.',
    ['Identify common errors.', 'Apply error-correction techniques.'],
    [
      { h: 'Common Mistakes' },
      { ul: ['Wrong tense after time markers.', 'Subject-verb agreement.', 'Misuse of prepositions.', 'Article use (a/an/the).', 'Word form (noun/verb/adj/adv).', 'Confusion between similar words (much/many, few/little).'] },
      { note: 'Keep a personal error log — review before exams.' },
    ],
    [
      { q: 'Correct: "He don\'t like coffee."', a: '"He doesn\'t like coffee." — 3rd person singular needs "doesn\'t".' },
      { q: 'Correct: "I went to home."', a: '"I went home." — no preposition before "home".' },
    ]
  ),

  'S9TA-w34-quiz': L(
    'Final Review — Vocabulary List',
    'Final vocabulary review — themes and word families.',
    ['Review vocabulary by theme.', 'Memorize word families.'],
    [
      { h: 'Key Themes' },
      { ul: ['Environment & sustainability', 'Education & learning', 'Technology', 'Health & well-being', 'Travel & tourism', 'Career & work', 'Vietnam & culture'] },
      { h: 'Word Families' },
      { p: 'Learn word families together: educate (v), education (n), educational (adj), educationally (adv).' },
      { note: 'Word families show up in cloze tests and word-form exercises.' },
    ],
    [
      { q: 'Family of "create"?', a: 'Create (v), creation (n), creator (n), creative (adj), creatively (adv).' },
      { q: 'Family of "succeed"?', a: 'Succeed (v), success (n), successful (adj), successfully (adv).' },
    ]
  ),

  'S9TA-w35-quiz': L(
    'Final Exam Preparation',
    'Final tips and tricks for the entrance exam day.',
    ['Prepare mentally.', 'Use exam tactics.'],
    [
      { h: 'Day Before' },
      { ul: ['Review key grammar quickly.', 'Get a good night\'s sleep.', 'Prepare materials (pen, ID, calculator if allowed).'] },
      { h: 'Exam Day' },
      { ul: ['Arrive 30 min early.', 'Read all instructions carefully.', 'Manage time: ~1 min per question.', 'Don\'t leave any blank — guess if needed.', 'Review answers if time allows.'] },
      { note: 'You\'ve worked hard all year — trust yourself. Good luck!' },
    ],
    [
      { q: 'What if I don\'t know an answer?', a: 'Eliminate clearly wrong options first, then make an educated guess.' },
      { q: 'Should I leave answers blank?', a: 'No — there\'s usually no penalty for guessing on MCQ.' },
    ]
  ),
};
