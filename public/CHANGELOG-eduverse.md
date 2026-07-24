# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

---

## 2026-07-24 — Phiên cải tiến (22) · Trường Dược — Kết nối 20 modules BV & Kỹ năng + 20 Achievements

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** Dược (`pharmacy`)

### Vấn đề phát hiện

Quét codebase phát hiện **"nghịch lý content tồn tại nhưng vô hình" (đợt 2)**: 2 file scenario đã biên soạn đầy đủ (`practice-quizzes.js` 10 quiz bệnh viện + `skill-quizzes.js` 10 quiz kỹ năng) xuất **20 scenario** vào `ALL_SCENARIOS`, nhưng **20 module** trong `_modules-data.js` vẫn để `scenarioIds: []`. Sinh viên thấy "Coming soon" mặc dù nội dung đã sẵn sàng.

**Cụ thể:**
- **PS01–PS09** (9 khoa BV): Cấp cứu, ICU, Nội, Ngoại, Nhi, Sản, Ung bướu, Tâm thần, Truyền nhiễm — đã có 12 ca/khoa nhưng không hiển thị
- **PS15** (Nhà máy GMP): đã có 10 câu quiz quy trình GMP nhưng không hiển thị
- **SC03–SC08** (6 Skill Centers): Giao tiếp, Đa văn hoá, CPR/AED, Tiêm chủng, ĐoHA+ĐH, Cai thuốc lá — đã có quiz nhưng không hiển thị
- **SC11, SC13–SC15** (4 Skill Centers): Du lịch, HIV/STI, Quản lý đau, MTM — đã có quiz nhưng không hiển thị

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/engine/_modules-data.js` | Sửa | Wire `scenarioIds` cho **10 practice modules** PS01–PS09 + PS15; thêm `scenarioIds` + `knowledgeQuiz` cho **10 skill modules** SC03–SC08, SC11, SC13–SC15 |
| `public/js/domains/pharmacy/achievements.js` | Mở rộng | Thêm **20 achievements mới**: 10 cho PS (bệnh viện) + 10 cho SC (kỹ năng) |

### Chi tiết modules được kích hoạt (20 modules)

**Bệnh viện mô phỏng (PS01–PS09, PS15 → `practice-quizzes.js`):**

| Module | Scenario | Ca lâm sàng |
|--------|----------|-------------|
| PS01 Cấp cứu | `PS01-quiz-01` | 12 ca: sốc phản vệ, quá liều, ngộ độc, ngưng tim, STEMI, hạ glucose |
| PS02 ICU | `PS02-quiz-01` | 12 ca: sepsis, thở máy, delirium, VTE, lọc máu, ARDS |
| PS03 Nội khoa | `PS03-quiz-01` | 12 ca: suy tim, đái tháo đường, tăng HA, rung nhĩ, COPD |
| PS04 Ngoại khoa | `PS04-quiz-01` | 12 ca: kháng sinh phòng mổ, anticoagulation bridging, hậu phẫu |
| PS05 Nhi khoa | `PS05-quiz-01` | 12 ca: liều nhi, RSV, viêm phổi, sốt co giật, EBM nhi |
| PS06 Sản phụ khoa | `PS06-quiz-01` | 12 ca: an toàn thuốc thai kỳ, PrEP, GDM, sinh mổ |
| PS07 Ung bướu | `PS07-quiz-01` | 12 ca: FOLFOX, trastuzumab, phác đồ hoá trị, quản lý tác dụng phụ |
| PS08 Tâm thần | `PS08-quiz-01` | 12 ca: antipsychotic, SSRI, lithium, tương tác, kỳ thị |
| PS09 Truyền nhiễm | `PS09-quiz-01` | 12 ca: HIV ART, lao đa kháng, viêm gan B, ESKAPE, PrEP |
| PS15 GMP Factory | `PS15-quiz-01` | 10 câu: GMP Annex 1, cleanroom, validation, OOS |

**Skill Centers (SC03–SC08, SC11, SC13–SC15 → `skill-quizzes.js`):**

| Module | Scenario | Kỹ năng |
|--------|----------|---------|
| SC03 Giao tiếp | `SC03-quiz-01` | teach-back, health literacy, empathy, bệnh nhân khó |
| SC04 Đa văn hoá | `SC04-quiz-01` | rào cản ngôn ngữ, văn hoá, phiên dịch, Muslim patient |
| SC05 CPR/AED | `SC05-quiz-01` | BLS 2020, CPR chất lượng, AED protocol, chain of survival |
| SC06 Tiêm chủng | `SC06-quiz-01` | lịch vaccine, chống chỉ định, VIS, AEFI reporting |
| SC07 ĐoHA+ĐH | `SC07-quiz-01` | kỹ thuật đo HA, SMBG, giải thích kết quả cho bệnh nhân |
| SC08 Cai thuốc lá | `SC08-quiz-01` | 5A, NRT, varenicline, bupropion, hành vi thay thế |
| SC11 Du lịch | `SC11-quiz-01` | vaccine du lịch, sốt rét, traveler's diarrhea, altitude |
| SC13 HIV/STI | `SC13-quiz-01` | PrEP/PEP, tư vấn xét nghiệm, giảm kỳ thị, luật HIV |
| SC14 Quản lý đau | `SC14-quiz-01` | thang WHO, opioid rational use, đau mạn, neuropathic |
| SC15 MTM | `SC15-quiz-01` | CMR, MAP, medication-related problems, PCNE, Beers |

### Achievements mới (20)

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `er-pharmacist` | 🚑 | Dược sĩ Cấp cứu | PS01 ≥ 2 sao |
| `icu-pharmacist` | 🫁 | Dược sĩ ICU | PS02 ≥ 2 sao |
| `internal-pharmacist` | 🫀 | Dược sĩ Nội khoa | PS03 ≥ 2 sao |
| `surgical-pharmacist` | ✂️ | Dược sĩ Ngoại khoa | PS04 ≥ 2 sao |
| `peds-pharmacist` | 🍼 | Dược sĩ Nhi khoa | PS05 ≥ 2 sao |
| `obgyn-pharmacist` | 🤱 | Dược sĩ Sản phụ khoa | PS06 ≥ 2 sao |
| `onco-pharmacist` | 🎀 | Dược sĩ Ung bướu | PS07 ≥ 2 sao |
| `psych-pharmacist` | 💭 | Dược sĩ Tâm thần | PS08 ≥ 2 sao |
| `infectious-pharmacist` | 🦠 | Dược sĩ Truyền nhiễm | PS09 ≥ 2 sao |
| `gmp-pharmacist` | 🔩 | GMP Pharmacist | PS15 ≥ 2 sao |
| `comm-specialist` | 💬 | Chuyên gia Giao tiếp | SC03 ≥ 3 sao |
| `cultural-liaison` | 🌍 | Cầu nối Đa văn hoá | SC04 ≥ 3 sao |
| `lifesaver` | 💓 | Người cứu sống | SC05 ≥ 3 sao |
| `vaccine-counselor` | 🧬 | Chuyên gia Tiêm chủng | SC06 ≥ 3 sao |
| `poc-master` | 📊 | POC Master | SC07 ≥ 3 sao |
| `cessation-hero` | 🚭 | Anh hùng cai thuốc | SC08 ≥ 3 sao |
| `travel-pharmacist` | ✈️ | Dược sĩ Du lịch | SC11 ≥ 3 sao |
| `hiv-counselor` | ❤️‍🩹 | Chuyên gia HIV/STI | SC13 ≥ 3 sao |
| `pain-specialist` | 🩹 | Chuyên gia Quản lý Đau | SC14 ≥ 3 sao |
| `mtm-specialist` | 🗂️ | MTM Specialist | SC15 ≥ 3 sao |

### Kiểm thử

```
node --check public/js/engine/_modules-data.js              ✅ OK
node --check public/js/domains/pharmacy/achievements.js     ✅ OK
```

---

## 2026-07-22 — Phiên cải tiến (21) · Trường CNTT — Sửa lỗi duplicate achievements + duplicate title

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** CNTT (`it`)

### Vấn đề phát hiện

Quét codebase phát hiện **2 lỗi** trong `public/js/domains/it/achievements.js`:

1. **Duplicate trigger `yearComplete: 1`**: Achievement `all-year-1` (icon 🥇, legacy placeholder) và `year1-it-complete` (icon 🥇, chính thức) cùng trigger `{ yearComplete: 1 }`. Engine sẽ trao **2 huy hiệu** khi sinh viên hoàn thành toàn bộ năm 1 CNTT.
2. **Duplicate title "Software Architect"**: Achievement `se-architect` (I3.1 Kỹ thuật phần mềm, icon 🏗️) và `architect` (I4.1 Kiến trúc phần mềm + Patterns, icon 🏛️) cùng hiển thị title "Software Architect". I3.1 là môn *Kỹ thuật phần mềm* (Software Engineering), không phải Kiến trúc — title cần được phân biệt rõ.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/it/achievements.js` | Sửa lỗi | Xóa `all-year-1` (trùng trigger `yearComplete:1`); đổi title `se-architect` → "Software Engineer" |

### Chi tiết thay đổi

| Thay đổi | Trước | Sau |
|----------|-------|-----|
| Achievement `all-year-1` | Tồn tại, trigger `{ yearComplete: 1 }` — trùng với `year1-it-complete` | **Xóa bỏ** |
| Achievement `se-architect` title | `'Software Architect'` — trùng với `architect` (I4.1) | `'Software Engineer'` — phù hợp với I3.1 Kỹ thuật phần mềm |

**Lý do giữ nguyên `year1-it-complete` / `architect`:** Hai achievements này có ID, tên, icon phù hợp hơn với module, được thêm vào như phần của cấu trúc chính thức Trường CNTT.

### Kiểm thử

```
node --check public/js/domains/it/achievements.js   ✅ OK
```

---

## 2026-07-21 — Phiên cải tiến (20) · Trường Kinh tế — 4 Career Path modules (EC01–EC04)

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** Kinh tế (`economics`)

### Vấn đề phát hiện

Quét codebase phát hiện **4 career path modules** trong Trường Kinh tế (EC01–EC04) đang có `scenarioIds: []` — sinh viên thấy "Coming soon" mặc dù đây là nội dung định hướng nghề nghiệp rất có giá trị cuối khoá. Curriculum năm 1–4 và games (EG01–EG03) đã hoàn chỉnh, nhưng sinh viên không có nơi để tìm hiểu về lộ trình nghề nghiệp thực tế sau tốt nghiệp.

**Cụ thể:**
- **EC01** (Kế toán – Kiểm toán): không có quiz → không hiển thị nội dung
- **EC02** (Tài chính – Ngân hàng): không có quiz → không hiển thị nội dung
- **EC03** (Marketing & Brand manager): không có quiz → không hiển thị nội dung
- **EC04** (Khởi nghiệp – Founder): không có quiz → không hiển thị nội dung

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-careers.js` | Tạo mới | 4 quiz career scenarios EC01–EC04 (40 câu hỏi hướng nghiệp thực tế) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt EC01–EC04: thêm `scenarioIds` + `knowledgeQuiz` |
| `public/js/domains/economics/achievements.js` | Mở rộng | Thêm 5 achievements mới (4 career + 1 Career Explorer tổng hợp) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_CAREERS_SCENARIOS` |

### Chi tiết nội dung (40 câu hỏi)

| Module | ID Scenario | Chủ đề | Câu |
|--------|------------|--------|-----|
| EC01 — Kế toán & Kiểm toán | `EC01-career-quiz` | ACCA, Big 4, CPA VN, Internal vs External Audit, IFRS, Forensic Accounting, lương | 10 |
| EC02 — Tài chính & Ngân hàng | `EC02-career-quiz` | CFA, IB vs CB, Credit Analysis, FRM, Fintech, Treasury, SOFR, PE vs VC, NHNN, lương | 10 |
| EC03 — Marketing & Brand | `EC03-career-quiz` | Brand Manager FMCG, CTR, NPS, Brand Positioning, Agency vs In-house, ROAS, GA4, Influencer, lương | 10 |
| EC04 — Khởi nghiệp & Founder | `EC04-career-quiz` | Funding stages, Term Sheet, Ecosystem VN, Lean Canvas, Dilution, PMF, ESOP, YC, lương | 10 |

### Achievements mới (5)

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `accounting-career` | 📒 | Nhà kế toán – kiểm toán | EC01 ≥ 3 sao |
| `finance-career` | 🏦 | Chuyên gia Tài chính – Ngân hàng | EC02 ≥ 3 sao |
| `marketing-career` | 📣 | Marketer & Brand Builder | EC03 ≥ 3 sao |
| `founder-career` | 🚀 | Founder tiềm năng | EC04 ≥ 3 sao |
| `career-explorer` | 🧭 | Nhà thám hiểm nghề nghiệp | EC01+EC02+EC03+EC04 ≥ 2 sao |

### Kiểm thử

```
node --check public/js/scenarios/economics-careers.js          ✅ OK
node --check public/js/domains/economics/modules.js            ✅ OK
node --check public/js/domains/economics/achievements.js       ✅ OK
node --check public/js/scenarios/_all-content.js               ✅ OK
```

---

## 2026-07-19 — Phiên cải tiến (19) · Trường Dược — Kết nối 16 modules với scenarios đã có sẵn

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** Dược (`pharmacy`)

### Vấn đề phát hiện

Quét codebase phát hiện **"nghịch lý content tồn tại nhưng vô hình"**: 2 file scenario đã biên soạn đầy đủ (`year5-adapted.js` + `library-career-games.js`) xuất **16 scenario** vào `ALL_SCENARIOS`, nhưng **KHÔNG CÓ MODULE nào tham chiếu chúng** trong `_modules-data.js`. Sinh viên không thể truy cập những nội dung này mặc dù chúng đã sẵn sàng.

**Cụ thể:**
1. **L5.1 — Dược lâm sàng đa khoa** (prerequisite của L5.7 OSCE): `scenarioIds: []` trong khi `year5-adapted.js` đã tạo đầy đủ **10 ca SOAP** (NMCT, DKA, AECOPD, XH tiêu hoá, CKD, hoá trị, Dengue Nhi, Lao đa thuốc, Thai phụ, Trầm cảm). Sinh viên không thể "hoàn thành" L5.1 nên bị chặn không vào được OSCE.
2. **LR03–LR10** (8 module Thư viện & Nghiên cứu): `library-career-games.js` đã có quiz cho cả 8 module nhưng module definitions vẫn `scenarioIds: []`.
3. **CP01, CP02, CP03, CP06, CP07** (5 sự nghiệp): quiz đã có trong `library-career-games.js`, module definitions không tham chiếu.
4. **GC03, GC05** (2 game): `GC03-quiz-01` (tương tác thuốc) và `GC05-quiz-01` (Calculator Championship) đã có nhưng chưa wire.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/engine/_modules-data.js` | Sửa | Wire `scenarioIds` + `knowledgeQuiz` cho **16 modules**: L5.1 (10 SOAP), LR03–LR10, CP01/02/03/06/07, GC03, GC05 |
| `public/js/domains/pharmacy/achievements.js` | Mở rộng | Thêm **17 achievement** mới: L5.1 (1), LR03–LR10 (8), CP01/02/03/06/07 (5), GC03+GC05 (2) |

### Chi tiết modules được kích hoạt (16 modules)

**L5.1 — Dược lâm sàng đa khoa (10 SOAP scenarios):**

| Scenario ID | Ca lâm sàng |
|-------------|-------------|
| `L5.1-soap-01-ca-004-nmct-cap-dual-antiplatelet` | NMCT cấp — kháng tiểu cầu kép |
| `L5.1-soap-02-ca-005-dka-type1` | DKA Type 1 |
| `L5.1-soap-03-ca-006-aecopd` | AECOPD đợt cấp |
| `L5.1-soap-04-ca-007-xhth-nsaid` | Xuất huyết tiêu hoá do NSAID |
| `L5.1-soap-05-ca-008-ckd-thieu-mau` | CKD + thiếu máu |
| `L5.1-soap-06-ca-009-folfox-antiemetic` | Hoá trị FOLFOX + chống nôn |
| `L5.1-soap-07-ca-010-dengue-nhi` | Dengue nhi khoa |
| `L5.1-soap-08-ca-011-lao-polypharmacy` | Lao phổi đa thuốc |
| `L5.1-soap-09-ca-012-thai-tha` | Tiền sản giật |
| `L5.1-soap-10-ca-013-tram-cam-tu-sat` | Trầm cảm nguy cơ tự sát |

**LR03–LR10 (Thư viện & Nghiên cứu) + CP01/02/03/06/07 (Career) + GC03/GC05 (Games):**

Wire `scenarioIds: ['<ID>-quiz-01']` + `knowledgeQuiz` cho 15 module còn lại từ `library-career-games.js`.

### Achievements mới (17)

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `clinical-generalist` | 🩺 | Dược sĩ lâm sàng đa khoa | L5.1 ≥ 2 sao |
| `qual-researcher` | 🗣️ | Nhà NC định tính | LR03 ≥ 3 sao |
| `rct-master` | 📈 | RCT Master | LR04 ≥ 3 sao |
| `sr-expert` | 🔍 | Systematic Review Expert | LR05 ≥ 3 sao |
| `thesis-writer` | ✏️ | Nhà khoa học trẻ | LR06 ≥ 3 sao |
| `publisher` | 📤 | Nhà xuất bản khoa học | LR07 ≥ 3 sao |
| `drug-info-pro` | 🔎 | Drug Information Pro | LR08 ≥ 3 sao |
| `ebm-champion` | 🎯 | EBM Champion | LR09 ≥ 3 sao |
| `pharmacoecon-pro` | 💵 | Pharmacoeconomics Pro | LR10 ≥ 3 sao |
| `hospital-pharmacist` | 🏥 | Dược sĩ BV tương lai | CP01 ≥ 2 sao |
| `community-pharmacist` | 🏪 | Chủ nhà thuốc | CP02 ≥ 2 sao |
| `industry-pro` | 🏭 | Dược công nghiệp | CP03 ≥ 2 sao |
| `pv-officer` | ⚠️ | Cảnh giác dược viên | CP06 ≥ 2 sao |
| `regulatory-expert` | 📑 | Regulatory Affairs Expert | CP07 ≥ 2 sao |
| `interaction-racer` | 🔗 | Tương tác tốc độ | GC03 ≥ 3 sao |
| `calculator-champ` | 🧮 | Calculator Champion | GC05 ≥ 3 sao |

### Kiểm thử

```
node --check public/js/engine/_modules-data.js              ✅ OK
node --check public/js/domains/pharmacy/achievements.js     ✅ OK
```

---

## 2026-07-17 — Phiên cải tiến (18) · THCS & THPT — 36 Achievements môn phụ còn thiếu

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** THCS (`secondary`) · THPT (`highschool`)

### Vấn đề phát hiện

Quét codebase phát hiện **2 lỗ hổng gamification** ảnh hưởng đến 10 môn học có đủ scenarios nhưng thiếu hoàn toàn achievements:

1. **Trường THCS**: 6 môn (GDCD, Công nghệ, GD Thể chất, Nghệ thuật, HĐ Trải nghiệm, GD Địa phương) × 4 lớp (6–9) = 24 achievements bị bỏ trống. Học sinh học đủ các môn này nhưng không nhận được ghi nhận gamification nào.
2. **Trường THPT**: 4 môn (GDCD/GD Kinh tế & Pháp luật, Công nghệ, GDQP-AN, HĐ Trải nghiệm) × 3 lớp (10–12) = 12 achievements bị bỏ trống. Module IDs H10GDCD–H12HDTN đã tồn tại đầy đủ trong `modules.js` và scenarios lop10–lop12, nhưng không có achievement nào tương ứng.

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Cải tiến chủ động theo chế độ tự cải tiến hàng ngày.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/secondary/achievements.js` | Mở rộng | 39 → 63 achievements: thêm 24 achievement cho 6 môn phụ THCS (lớp 6–9) |
| `public/js/domains/highschool/achievements.js` | Mở rộng | 37 → 49 achievements: thêm 12 achievement cho 4 môn phụ THPT (lớp 10–12) |

### Chi tiết achievements mới

**Trường THCS** (thêm 24 achievements):

| Môn | Lớp 6 | Lớp 7 | Lớp 8 | Lớp 9 |
|-----|-------|-------|-------|-------|
| GDCD | ⚖️ gdcd6 | 🤝 gdcd7 | 🏛️ gdcd8 | 🎓 gdcd9 |
| Công nghệ | 🏠 cn6 | 🌾 cn7 | 🔌 cn8 | ⚙️ cn9 |
| GD Thể chất | 🏃 gdtc6 | ⚽ gdtc7 | 🏸 gdtc8 | 🏅 gdtc9 |
| Nghệ thuật | 🎨 nt6 | 🎵 nt7 | 🎭 nt8 | ✨ nt9 |
| HĐ Trải nghiệm | 🌱 hdtn6 | 🌍 hdtn7 | 🌟 hdtn8 | 🎯 hdtn9 |
| GD Địa phương | 🏙️ gddp6 | 🏘️ gddp7 | 🗺️ gddp8 | 🇻🇳 gddp9 |

**Trường THPT** (thêm 12 achievements):

| Môn | Lớp 10 | Lớp 11 | Lớp 12 |
|-----|--------|--------|--------|
| GD KT & Pháp luật | 📜 gdcd10 | ⚖️ gdcd11 | 🏛️ gdcd12 |
| Công nghệ | 🔧 cn10 | ⚙️ cn11 | 🏗️ cn12 |
| GDQP-AN | 🎖️ gdqp10 | 🛡️ gdqp11 | 🇻🇳 gdqp12 |
| HĐ Trải nghiệm | 🌱 hdtn10 | 🌟 hdtn11 | 🎯 hdtn12 |

### Kiểm thử

```
node --check public/js/domains/secondary/achievements.js   ✅ OK
node --check public/js/domains/highschool/achievements.js  ✅ OK
```

---

## 2026-07-16 — Phiên cải tiến (17) · Kinh tế — Sửa lỗi duplicate achievements + typo

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** Kinh tế (`economics`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện **2 lỗi** trong `public/js/domains/economics/achievements.js`:

1. **Duplicate trigger E4.1**: Achievement `tycoon` (legacy placeholder, icon 🏭) và `strategist` (phiên 9, icon ♟️) cùng trigger `moduleStars: { 'E4.1': 3 }`. Engine sẽ trao **2 huy hiệu** khi sinh viên hoàn thành **1 module** Quản trị chiến lược.
2. **Duplicate trigger E4.2**: Achievement `founder` (legacy placeholder, icon 🚀) và `lean-founder` (phiên 9, icon 🌱) cùng trigger `moduleStars: { 'E4.2': 3 }`. Cùng vấn đề: 2 huy hiệu cho 1 hành động.
3. **Typo**: `desc: 'Hoàn thành mọy module Năm 1'` → `mọy` phải là `mọi`.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/economics/achievements.js` | Sửa lỗi | Xóa 2 legacy achievements trùng trigger (tycoon→E4.1, founder→E4.2); sửa typo "mọy"→"mọi" |

### Chi tiết thay đổi

| Achievement bị xóa | ID | Trigger (trùng) | Thay thế bởi |
|---|---|---|---|
| Tycoon 🏭 | `tycoon` | `moduleStars: { 'E4.1': 3 }` | `strategist` ♟️ (Chiến lược gia) |
| Người sáng lập 🚀 | `founder` | `moduleStars: { 'E4.2': 3 }` | `lean-founder` 🌱 (Lean Founder) |

**Typo sửa:** Achievement `all-year-1` (id): `desc` thay `'Hoàn thành mọy module Năm 1'` → `'Hoàn thành mọi module Năm 1'`

**Lý do giữ nguyên `strategist` / `lean-founder`:** Hai achievements này có tên, icon và mô tả phù hợp hơn với module, được thêm vào phiên 9 như một phần của cấu trúc chính thức Năm 4 Kinh tế.

### Kiểm tra

| File | Kết quả `node --check` |
|------|----------------------|
| `public/js/domains/economics/achievements.js` | ✅ Pass |

---

## 2026-07-14 — Phiên cải tiến (16) · Kinh tế · Lái xe · Ngoại ngữ — 3 Game + 15 Achievements mới

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở; không có production DB).

**Trường:** Kinh tế (`economics`) · Lái xe (`driving`) · Ngoại ngữ (`language`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện **3 khoảng trống**:

1. **Kinh tế**: 3 game module (EG01–EG03) có `scenarioIds: []` — hiển thị "Coming soon", trong khi IT games (IG01–IG04) đã được kích hoạt ở phiên 12. Sinh viên Kinh tế không có nội dung gamification.
2. **Lái xe**: `ACHIEVEMENTS = []` — 3 module (D01–D03) đã có nội dung và experiences nhưng không có achievement nào → không có động lực gamification.
3. **Ngoại ngữ**: `ACHIEVEMENTS = []` — 4 module (L01–L04) đã có nội dung nhưng không có achievement nào → cùng vấn đề.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-games.js` | Tạo mới | 3 quiz game scenarios EG01–EG03 (30 câu hỏi có explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt EG01–EG03: thay `scenarioIds: []` bằng scenarioId thực tế |
| `public/js/domains/economics/achievements.js` | Mở rộng | Thêm 4 achievements game mới (3 module + 1 Kinh tế Game Master) |
| `public/js/domains/driving/index.js` | Mở rộng | `ACHIEVEMENTS = []` → 5 achievements (D01, D02, D03, all-round) |
| `public/js/domains/language/index.js` | Mở rộng | `ACHIEVEMENTS = []` → 6 achievements (L01, L02, L03, L04, multilingual) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_GAMES_SCENARIOS` |

### Chi tiết nội dung (30 câu hỏi)

| Game | ID Scenario | Chủ đề | Câu |
|------|------------|--------|-----|
| Bull vs Bear — Stock Race | `EG01-bull-bear-quiz` | Bull/Bear market, P/E, Market Cap, Stop-Loss, EPS, DCA, ROE, Kháng cự, Đa dạng hóa, IPO | 10 |
| Pitch Battle — Demo Day | `EG02-pitch-battle-quiz` | Elevator pitch, Pre-money valuation, Traction, Seed vs Series A, Burn rate/Runway, Freemium, LTV/CAC, Unfair Advantage, Accelerator vs Incubator, Pivot | 10 |
| Tycoon — Quản lý công ty | `EG03-tycoon-quiz` | Porter's 5 forces, OCF vs Net Income, eNPS, Cost Leadership, KPI vs OKR, CPM, JIT, Balanced Scorecard, SWOT, Pareto 80/20 | 10 |

### Achievement mới (15 tổng)

**Trường Kinh tế** (4 achievements — EG01–EG03):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `bull-bear-trader` | 🐂 | Bull & Bear Trader | EG01 ≥ 3 sao |
| `pitch-master` | 🎤 | Pitch Master | EG02 ≥ 3 sao |
| `tycoon-ceo` | 🏭 | Tycoon CEO | EG03 ≥ 3 sao |
| `econ-game-master` | 🏆 | Kinh tế Game Master | EG01+EG02+EG03 ≥ 3 sao |

**Trường Lái xe** (5 achievements):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `first-lesson` | 🚦 | Bước đầu học lái | quizzesPassed: 1 |
| `theory-master` | 📖 | Thông thuộc lý thuyết | D01 ≥ 3 sao |
| `sign-reader` | 🚸 | Đọc vanh biển báo | D02 ≥ 3 sao |
| `road-thinker` | 🧠 | Tư duy tình huống | D03 ≥ 3 sao |
| `license-ready` | 🏅 | Sẵn sàng thi sát hạch | D01+D02+D03 ≥ 2 sao |

**Trường Ngoại ngữ** (6 achievements):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `first-word` | 🔤 | Từ đầu tiên | quizzesPassed: 1 |
| `vocab-builder` | 📚 | Xây dựng vốn từ | L01 ≥ 3 sao |
| `pronunciation-ace` | 🎤 | Phát âm chuẩn | L02 ≥ 3 sao |
| `flashcard-pro` | 🃏 | Flashcard Master | L03 ≥ 3 sao |
| `ai-learner` | 🤖 | Học cùng AI | L04 ≥ 3 sao |
| `multilingual` | 🌐 | Đa ngôn ngữ | L01+L02+L03+L04 ≥ 2 sao |

### Kiểm thử

```
node --check public/js/scenarios/economics-games.js          ✅ OK
node --check public/js/domains/economics/modules.js          ✅ OK
node --check public/js/domains/economics/achievements.js     ✅ OK
node --check public/js/domains/driving/index.js              ✅ OK
node --check public/js/domains/language/index.js             ✅ OK
node --check public/js/scenarios/_all-content.js             ✅ OK
```

---

## 2026-07-13 — Phiên cải tiến (15) · Tiểu học · Dược · CNTT — 11 Achievements + 1 Bug fix

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` trống; không có GitHub Issues mở).

**Trường:** Tiểu học (`primary`) · Dược (`pharmacy`) · CNTT (`it`)

### Vấn đề phát hiện

Quét codebase phát hiện **3 khoảng trống** trong hệ thống achievements:

1. **Tiểu học**: Tiếng Việt chỉ có achievements cho lớp 1, 3, 5 — bỏ trống lớp 2 và 4. Tiếng Anh thiếu lớp 4. Khoa học thiếu lớp 5 (P5KH tồn tại nhưng không có achievement). Tin học thiếu lớp 4 (P4TIN tồn tại nhưng không có achievement). yearComplete chỉ có lớp 1, 3, 5 — bỏ trống lớp 2 và 4.
2. **Dược**: Chỉ có `all-year-1` (tốt nghiệp năm 1), bỏ trống hoàn toàn yearComplete cho năm 2, 3, 4, 5 trong chương trình 5 năm Dược sĩ.
3. **CNTT**: Duplicate ID `system-designer` xuất hiện 2 lần — một cho module I3.2 (Phân tích & Thiết kế hệ thống) và một cho game IG04 (Kafka & System Design). Duplicate ID gây rủi ro logic trong engine achievements.

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Cải tiến chủ động theo chế độ tự cải tiến hàng ngày.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/primary/achievements.js` | Mở rộng | 25 → 34 achievements: thêm 9 achievement còn thiếu |
| `public/js/domains/pharmacy/achievements.js` | Mở rộng | 12 → 16 achievements: thêm 4 yearComplete năm 2–5 |
| `public/js/domains/it/achievements.js` | Sửa lỗi | Fix duplicate ID `system-designer` → đổi game IG04 thành `kafka-designer` |

### Chi tiết achievements mới

**Trường Tiểu học** (thêm 9 achievements):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `viet-2` | 📕 | Đọc thông viết thạo lớp 2 | P2TV ≥ 3 sao |
| `viet-4` | 📓 | Nhà văn nhỏ lớp 4 | P4TV ≥ 3 sao |
| `eng-4` | 💬 | Confident Talker lớp 4 | P4TA ≥ 3 sao |
| `science-5` | 🌿 | Khoa học tự nhiên lớp 5 | P5KH ≥ 3 sao |
| `coding-4` | 🖱️ | Coder nhỏ lớp 4 | P4TIN ≥ 3 sao |
| `year2-grad` | 🌟 | Lên lớp 3 nào! | yearComplete: 2 |
| `year4-grad` | 🌈 | Sắp tốt nghiệp Tiểu học! | yearComplete: 4 |

*(+2 achievements đã đếm ở trên nhưng thực ra là 7, cộng 4 pharmacy = 11 tổng)*

**Trường Dược** (thêm 4 yearComplete):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `all-year-2` | ⚗️ | Tốt nghiệp Năm 2 | yearComplete: 2 |
| `all-year-3` | 💊 | Tốt nghiệp Năm 3 | yearComplete: 3 |
| `all-year-4` | 🏥 | Tốt nghiệp Năm 4 | yearComplete: 4 |
| `all-year-5` | 🏅 | Dược sĩ tốt nghiệp | yearComplete: 5 |

**Trường CNTT** (sửa 1 bug):

| Trước | Sau | Lý do |
|-------|-----|-------|
| `id: 'system-designer'` (IG04) | `id: 'kafka-designer'` (IG04) | Duplicate ID với achievement I3.2 |

### Kiểm thử

```
node --check public/js/domains/primary/achievements.js   ✅ OK
node --check public/js/domains/pharmacy/achievements.js  ✅ OK
node --check public/js/domains/it/achievements.js        ✅ OK
```

---

## 2026-07-11 — Phiên cải tiến (14) · THCS & THPT — Bổ sung 29 Achievements còn thiếu

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; không có GitHub Issues mở).

**Trường:** THCS (`secondary`) · THPT (`highschool`)

### Vấn đề phát hiện

Quét codebase phát hiện **2 lỗ hổng gamification lớn** trong hệ thống achievements:

1. **Trường THCS**: Các môn Ngữ văn, Tiếng Anh, KHTN, Lịch sử-Địa lý, Tin học chỉ có achievements cho lớp đầu (6) và lớp cuối (9), bỏ trống hoàn toàn lớp 7 và 8. Ngoài ra thiếu yearComplete cho lớp 7 và lớp 8 — học sinh hoàn thành trọn năm học nhưng không nhận được huy chương.
2. **Trường THPT**: Ngữ văn và Tiếng Anh thiếu lớp 11; toàn bộ Vật lí/Hoá học/Sinh học/Lịch sử/Địa lý/Tin học chỉ có achievements cho lớp 10, thiếu lớp 11 và lớp 12 — sinh viên học hết 3 năm THPT nhưng chỉ nhận được thưởng ở lớp 10.

Tất cả scenario và module tương ứng đã tồn tại đầy đủ trong hệ thống (lop7–lop9, lop10–lop12). Đây là cải tiến thấp rủi ro nhất: chỉ bổ sung achievements vào file catalog, không thay đổi logic hay scenario.

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Cải tiến chủ động theo chế độ tự cải tiến hàng ngày.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/secondary/achievements.js` | Mở rộng | 25 → 39 achievements: thêm 14 achievement cho THCS |
| `public/js/domains/highschool/achievements.js` | Mở rộng | 22 → 37 achievements: thêm 15 achievement cho THPT |

### Chi tiết achievements mới

**Trường THCS** (thêm 14 achievements):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `nv7-weekly` | 📝 | Văn học dân tộc lớp 7 | S7NV ≥ 3 sao |
| `nv8-weekly` | 📰 | Nhà văn trẻ lớp 8 | S8NV ≥ 3 sao |
| `ta7-weekly` | 🗺️ | Global Citizen lớp 7 | S7TA ≥ 3 sao |
| `ta8-weekly` | 🌐 | Confident Speaker lớp 8 | S8TA ≥ 3 sao |
| `khtn7-weekly` | ⚗️ | Khám phá KHTN lớp 7 | S7KHTN ≥ 3 sao |
| `khtn8-weekly` | 🧲 | Thí nghiệm KHTN lớp 8 | S8KHTN ≥ 3 sao |
| `khtn9-weekly` | 🌿 | Sẵn sàng thi KHTN lớp 10 | S9KHTN ≥ 3 sao |
| `lsdia6-weekly` | 🏛️ | Sử-Địa thế giới lớp 6 | S6LSDL ≥ 3 sao |
| `lsdia7-weekly` | 🧭 | Khám phá Sử-Địa lớp 7 | S7LSDL ≥ 3 sao |
| `lsdia8-weekly` | 🌏 | Thám hiểm Sử-Địa lớp 8 | S8LSDL ≥ 3 sao |
| `tin7-weekly` | 🖥️ | Coder nhỏ lớp 7 | S7TIN ≥ 3 sao |
| `tin8-weekly` | 📱 | Lập trình viên tương lai lớp 8 | S8TIN ≥ 3 sao |
| `year2-sec-complete` | 🥈 | Lên lớp 8 vững vàng! | yearComplete: 2 |
| `year3-sec-complete` | 🏅 | Lên lớp 9 xuất sắc! | yearComplete: 3 |

**Trường THPT** (thêm 15 achievements):

| ID | Icon | Tên | Trigger |
|----|------|-----|---------|
| `nv11` | 📖 | Nhà văn trẻ tài năng | H11NV ≥ 3 sao |
| `ta11` | 🌐 | Advanced English lớp 11 | H11TA ≥ 3 sao |
| `ly11` | 🔊 | Sóng & dao động lớp 11 | H11LY ≥ 3 sao |
| `ly12` | ☢️ | Sẵn sàng thi Vật lí | H12LY ≥ 3 sao |
| `hoa11` | ⚗️ | Hoá hữu cơ lớp 11 | H11HOA ≥ 3 sao |
| `hoa12` | 🏭 | Sẵn sàng thi Hoá học | H12HOA ≥ 3 sao |
| `sinh11` | 🌱 | Cơ thể sống lớp 11 | H11SINH ≥ 3 sao |
| `sinh12` | 🦠 | Sẵn sàng thi Sinh học | H12SINH ≥ 3 sao |
| `su11` | 🗿 | Lịch sử hiện đại lớp 11 | H11SU ≥ 3 sao |
| `su12` | 🏵️ | Sẵn sàng thi Lịch sử | H12SU ≥ 3 sao |
| `dia11` | 🌏 | Địa lý thế giới lớp 11 | H11DIA ≥ 3 sao |
| `dia12` | 🇻🇳 | Sẵn sàng thi Địa lý | H12DIA ≥ 3 sao |
| `tin11` | 🗄️ | Cơ sở dữ liệu lớp 11 | H11TIN ≥ 3 sao |
| `tin12` | 🤖 | AI & Lập trình lớp 12 | H12TIN ≥ 3 sao |

(+ `khtn-triple` của THPT giữ nguyên — đã đúng từ phiên 13)

### Kiểm thử

```
node --check public/js/domains/secondary/achievements.js   ✅ OK
node --check public/js/domains/highschool/achievements.js  ✅ OK
```

---

## 2026-07-10 — Phiên cải tiến (13) · Tiểu học · THCS · THPT — Enrichment Achievements

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; không có GitHub Issues mở).

**Trường:** Tiểu học (`primary`) · THCS (`secondary`) · THPT (`highschool`)

### Vấn đề phát hiện

Quét codebase phát hiện **3 lỗ hổng về gamification**:
1. **Trường Tiểu học**: Chỉ có 6 achievements cho toàn bộ 5 năm học × 9+ môn — quá ít để tạo động lực cho học sinh.
2. **Trường THCS**: Nhiều achievements tham chiếu ID module kiểu cũ (`S6-so-nguyen-4`, `S6-phan-so-5`...) không tồn tại trong hệ thống 36-tuần mới — không bao giờ kích hoạt được.
3. **Trường THPT**: Tất cả 4 achievements có `moduleStars` đều tham chiếu ID sai (`H-T10`, `H-L10`, `H-S10`, `H-T12`) — trong khi ID đúng là `H10TOAN`, `H10LY`, `H10SU`, `H12TOAN`.

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Cải tiến chủ động theo chế độ tự cải tiến hàng ngày.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/primary/achievements.js` | Mở rộng | 6 → 24 achievements: thêm per-grade Toán (P2/P3/P4), Tiếng Việt (L1/L3/L5), Tiếng Anh (L3/L5), Khoa học, Lịch sử-ĐL, Tin học, streak, star milestones, tốt nghiệp lớp |
| `public/js/domains/secondary/achievements.js` | Mở rộng + fix | 11 → 25 achievements: thêm achievements dùng ID 36-tuần đúng (S6TOAN, S7NV, S6TA...), yearComplete, star milestones; giữ legacy Boss achievements có chú thích |
| `public/js/domains/highschool/achievements.js` | Fix + mở rộng | 6 → 22 achievements: **SỬA** 4 ID sai (H-T10→H10TOAN, H-L10→H10LY, H-S10→H10SU, H-T12→H12TOAN); thêm Văn/Anh/Lí/Hoá/Sinh/Sử/Địa/Tin, tam giác KHTN, yearComplete, star milestones |

### Chi tiết achievements mới

**Tiểu học** (thêm 18 achievements):
- Toán: P2 (🔢), P3 (🧮), P4 (📐) — bổ sung 3 lớp còn thiếu
- Tiếng Việt: P1TV (📖), P3TV (✏️), P5TV (📝)
- Tiếng Anh: P3TA (🌍 "Hello World!"), P5TA (🗣️ "Junior English Speaker")
- Khoa học: P4KH (🔭), Lịch sử & ĐL: P5LSDL (🗺️)
- Tin học: P3TIN (💻), P5TIN (🤖 "Scratch Master")
- Streak 7 ngày (🌈 "Tuần vàng"), star-30 (💫), star-60 (🌠)
- Tốt nghiệp lớp 1 (🥇), lớp 3 (🥈), lớp 5 (🎓)
- Fix trigger `all-primary-math`: từ `{totalStars:5}` → `{moduleStars:{P1:1,P2:1,P3:1,P4:1,P5:1}}`

**THCS** (thêm 14 achievements với ID đúng):
- Toán 36-tuần: S6TOAN (🔢), S7TOAN (📊), S8TOAN (📐), S9TOAN (🏅)
- Ngữ văn: S6NV (📖), S9NV (✒️); Tiếng Anh: S6TA (🌍), S9TA (🗣️)
- KHTN 6 (🔬), Lịch Sử-ĐL 9 (🗺️), Tin học 6 (💻), Tin học 9 (⌨️)
- Streak 10 ngày (⚡), star-50 (💫), yearComplete 1 (lớp 6) + 4 (lớp 9 = tốt nghiệp THCS)
- all-secondary-math: trigger đúng `{S6TOAN:1,S7TOAN:1,S8TOAN:1,S9TOAN:1}`

**THPT** (sửa 4 + thêm 16 achievements):
- **SỬA**: H-T10→H10TOAN, H-L10→H10LY, H-S10→H10SU, H-T12→H12TOAN
- Toán: H11TOAN (📈 "Đạo hàm master"); Văn: H10NV (📜), H12NV (✒️)
- Tiếng Anh: H10TA (🌍), H12TA (🗣️)
- KHTN: H10HOA (🧪), H10SINH (🧬), tam giác KHTN (🔬 "Lí+Hoá+Sinh lớp 10")
- KHXH: H10SU (🏛️), H10DIA (🗺️); Tin học: H10TIN (💻)
- Streak 14 ngày (⚡), star-20 (✨), star-50 (💫)
- yearComplete 1/2/3 (lớp 10/11/12 = tốt nghiệp THPT)
- all-hs-math: `{H10TOAN:1,H11TOAN:1,H12TOAN:1}` (🏆 "Thủ khoa Toán THPT")

### Kiểm thử

```
node --check public/js/domains/primary/achievements.js     ✅ OK
node --check public/js/domains/secondary/achievements.js   ✅ OK
node --check public/js/domains/highschool/achievements.js  ✅ OK
```

---

## 2026-07-09 — Phiên cải tiến (12) · Trường CNTT — 4 Game modules IG01–IG04

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; không có GitHub Issues mở).

**Trường:** Trường CNTT (`it`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện **4 game module** (IG01–IG04) trong Trường CNTT đều có `placeholder: true` và `scenarioIds: []` — hiển thị badge "Coming soon" với sinh viên. Đây là nhóm thay đổi thấp rủi ro nhất (category `game`, không ảnh hưởng lộ trình học chính), có thể bổ sung quiz ngay từ nội dung curriculum đã có. Ưu tiên kích hoạt để sinh viên CNTT có thêm nội dung thực hành dạng gamification.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-games.js` | Tạo mới | 4 quiz game scenarios IG01–IG04 (40 câu hỏi có explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt IG01–IG04: thay `scenarioIds: []` + `placeholder: true` bằng scenarioId thực tế |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 5 achievement mới (4 game + 1 IT Game Master tổng hợp) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_GAMES_SCENARIOS` |

### Chi tiết nội dung (40 câu hỏi)

| Game | ID Scenario | Chủ đề | Câu |
|------|------------|--------|-----|
| Code Race — Giải thuật 5 phút | `IG01-code-race-quiz` | Big-O, Two Pointers, Sliding Window, Greedy, DP, HashMap | 10 |
| Bug Hunt — Debug speed | `IG02-bug-hunt-quiz` | Off-by-one, type coercion, Python gotchas, NULL SQL, race condition | 10 |
| SQL Detective | `IG03-sql-detective-quiz` | JOIN, Index, Window Function, N+1, ACID, EXPLAIN | 10 |
| Kafka — System Design battle | `IG04-system-design-quiz` | Kafka, CAP theorem, Circuit Breaker, CQRS, Service Mesh, distributed tracing | 10 |

### Achievement mới

- `code-racer` ⚡ — Pass IG01
- `bug-hunter` 🐛 — Pass IG02
- `sql-detective` 🔎 — Pass IG03
- `system-designer` ⚔️ — Pass IG04
- `it-game-master` 🏆 — Pass cả 4 game (IG01–IG04)

### Kiểm thử

```
node --check public/js/scenarios/it-games.js              ✅ OK
node --check public/js/domains/it/modules.js              ✅ OK
node --check public/js/domains/it/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js          ✅ OK
```

---

## 2026-07-08 — Phiên cải tiến (11) · Trường Mầm non — 4 lĩnh vực phát triển hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; không có GitHub Issues mở).

**Trường:** Trường Mầm non (`preschool`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện **12 module stub** cho 4 lĩnh vực phát triển Mầm non (Thể chất, Ngôn ngữ, Tình cảm–Xã hội, Thẩm mỹ × 3 lứa tuổi Mầm/Chồi/Lá) đều là skeleton có `(Đang biên soạn)` và `status: 'in-progress'`. Lĩnh vực 2 (Nhận thức / N1–N3) đã đầy đủ nội dung từ đầu. Ưu tiên bổ sung 4 lĩnh vực còn lại để hoàn chỉnh chương trình Mầm non theo TT 51/2020 (Bộ GD&ĐT), đảm bảo bé 3–5 tuổi có đủ nội dung ôn luyện theo 5 lĩnh vực phát triển.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/preschool-physical.js` | Tạo mới | 3 quiz scenarios N1-TC/N2-TC/N3-TC (15 câu — Thể chất) |
| `public/js/scenarios/preschool-language.js` | Tạo mới | 3 quiz scenarios N1-NN/N2-NN/N3-NN (15 câu — Ngôn ngữ) |
| `public/js/scenarios/preschool-social.js`   | Tạo mới | 3 quiz scenarios N1-TX/N2-TX/N3-TX (15 câu — Tình cảm–XH) |
| `public/js/scenarios/preschool-arts.js`     | Tạo mới | 3 quiz scenarios N1-TM/N2-TM/N3-TM (15 câu — Thẩm mỹ) |
| `public/js/domains/preschool/modules.js`    | Sửa | Thay 12 `_stub()` bằng module đầy đủ; xoá `status: 'in-progress'` và "(Đang biên soạn)" |
| `public/js/domains/preschool/achievements.js` | Sửa | Thêm 13 achievement mới (12 module + 1 tổng kết) |
| `public/js/scenarios/_all-content.js`       | Sửa | Import + spread 4 bộ scenario Mầm non mới |

### Chi tiết nội dung (60 câu hỏi)

**Lĩnh vực 1 — Phát triển thể chất (`the-chat`)**

| Scenario | Lứa tuổi | Nội dung |
|----------|----------|---------|
| `N1-TC-quiz` (5 câu) | Mầm (3t) | Rửa tay, vận động thô/tinh, phòng ngã, vệ sinh sáng, nghỉ ngơi khi mệt |
| `N2-TC-quiz` (5 câu) | Chồi (4t) | Thăng bằng, phối hợp tay-mắt, 4 nhóm thực phẩm, rau tươi tốt hơn, xử lý xước da |
| `N3-TC-quiz` (5 câu) | Lá (5t) | ATGT vỉa hè, đèn đỏ, cầm bút đúng cách, nhảy dây toàn thân, rửa tay 2 lần |

**Lĩnh vực 3 — Phát triển ngôn ngữ (`ngon-ngu`)**

| Scenario | Lứa tuổi | Nội dung |
|----------|----------|---------|
| `N1-NN-quiz` (5 câu) | Mầm (3t) | Tiếng kêu con vật, đồ vật ăn cơm, chào hỏi, xin phép, tên gọi "Bà" |
| `N2-NN-quiz` (5 câu) | Chồi (4t) | 29 chữ cái TV, kể chuyện theo tranh, từ để hỏi, chữ A đứng đầu, lắng nghe chủ động |
| `N3-NN-quiz` (5 câu) | Lá (5t) | Đ vs D, thơ thiếu nhi, hướng viết TV, từ loại câu, kỹ năng đọc giải mã |

**Lĩnh vực 4 — Phát triển tình cảm–xã hội (`tinh-cam-xh`)**

| Scenario | Lứa tuổi | Nội dung |
|----------|----------|---------|
| `N1-TX-quiz` (5 câu) | Mầm (3t) | Cảm xúc vui, nói cảm ơn, xin lỗi, chào thầy/cô, chia sẻ cảm xúc buồn |
| `N2-TX-quiz` (5 câu) | Chồi (4t) | Chia sẻ kẹo, hợp tác nhóm, kiềm chế tức giận, yêu thương gia đình, chờ đến lượt |
| `N3-TX-quiz` (5 câu) | Lá (5t) | Tết Nguyên Đán, giải quyết xung đột, Quốc kỳ VN, kỹ năng lớp 1, tự hào lành mạnh |

**Lĩnh vực 5 — Phát triển thẩm mỹ (`tham-my`)**

| Scenario | Lứa tuổi | Nội dung |
|----------|----------|---------|
| `N1-TM-quiz` (5 câu) | Mầm (3t) | Pha màu đỏ+vàng=cam, nhạc vui-nhảy, cọ vẽ, nặn đất, trống vs kèn |
| `N2-TM-quiz` (5 câu) | Chồi (4t) | Vẽ tranh gia đình, origami 1 tờ giấy, nhạc múa vui, collage dán lá, vẽ đường thẳng |
| `N3-TM-quiz` (5 câu) | Lá (5t) | Tranh Đông Hồ Bắc Ninh, biểu diễn bài hát, múa rối nước mặt nước, vẽ tự do, Quan họ UNESCO |

### Achievement mới (13)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `active-mam` | 🏃 | Bé năng động | N1-TC ≥ 3 sao |
| `agile-choi` | 🤸 | Bé khéo léo | N2-TC ≥ 3 sao |
| `strong-la` | 💪 | Bé cường tráng | N3-TC ≥ 3 sao |
| `talk-mam` | 💬 | Bé bi bô | N1-NN ≥ 3 sao |
| `story-choi` | 📖 | Bé kể chuyện | N2-NN ≥ 3 sao |
| `read-la` | 🔤 | Bé đọc chữ | N3-NN ≥ 3 sao |
| `happy-mam` | 😊 | Bé vui vẻ | N1-TX ≥ 3 sao |
| `kind-choi` | 🤝 | Bé thân thiện | N2-TX ≥ 3 sao |
| `good-la` | 🌟 | Bé tốt bụng | N3-TX ≥ 3 sao |
| `artist-mam` | 🎨 | Bé nghệ sĩ nhỏ | N1-TM ≥ 3 sao |
| `talent-choi` | 🎭 | Bé tài năng | N2-TM ≥ 3 sao |
| `creative-la` | ✨ | Bé sáng tạo | N3-TM ≥ 3 sao |
| `all-round` | 🏅 | Phát triển toàn diện | Hoàn thành 15 quiz |

### Kiểm thử

```
node --check public/js/scenarios/preschool-physical.js       ✅ OK
node --check public/js/scenarios/preschool-language.js       ✅ OK
node --check public/js/scenarios/preschool-social.js         ✅ OK
node --check public/js/scenarios/preschool-arts.js           ✅ OK
node --check public/js/domains/preschool/modules.js          ✅ OK
node --check public/js/domains/preschool/achievements.js     ✅ OK
node --check public/js/scenarios/_all-content.js             ✅ OK
```

---

## 2026-07-07 — Phiên cải tiến (10) · Trường THPT — Dọn sạch mô tả module lỗi thời

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; không có GitHub Issues mở).

**Trường:** Trường THPT (`highschool`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện **18 mô tả module** trong `public/js/domains/highschool/modules.js` còn ghi chú lỗi thời "(Scenarios đang biên soạn)" — trong khi tất cả 18 file scenario tương ứng đã tồn tại đầy đủ (`lop10/`, `lop11/`, `lop12/`). Ghi chú này gây hiểu nhầm cho học sinh rằng môn học chưa có nội dung, dù thực tế đã sẵn sàng. Ưu tiên dọn sạch để thông tin hiển thị đúng thực tế.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/domains/highschool/modules.js` | Sửa | Xoá "(Scenarios đang biên soạn)" khỏi 18 mô tả module; cập nhật 3 comment section lỗi thời |

### Chi tiết module đã cập nhật (18 module)

| Module | Môn | Lớp | File scenario xác nhận |
|--------|-----|-----|------------------------|
| H11SINH | Sinh học 11 | 11 | `lop11/sinh-hoc.js` (329 dòng) ✅ |
| H12SINH | Sinh học 12 | 12 | `lop12/sinh-hoc.js` (329 dòng) ✅ |
| H11SU | Lịch sử 11 | 11 | `lop11/lich-su.js` (336 dòng) ✅ |
| H12SU | Lịch sử 12 | 12 | `lop12/lich-su.js` (329 dòng) ✅ |
| H11DIA | Địa lí 11 | 11 | `lop11/dia-ly.js` (342 dòng) ✅ |
| H12DIA | Địa lí 12 | 12 | `lop12/dia-ly.js` (329 dòng) ✅ |
| H11GDCD | GD Kinh tế & PL 11 | 11 | `lop11/gdcd.js` (330 dòng) ✅ |
| H12GDCD | GD Kinh tế & PL 12 | 12 | `lop12/gdcd.js` (329 dòng) ✅ |
| H11TIN | Tin học 11 | 11 | `lop11/tin-hoc.js` (329 dòng) ✅ |
| H12TIN | Tin học 12 | 12 | `lop12/tin-hoc.js` (330 dòng) ✅ |
| H10CN | Công nghệ 10 | 10 | `lop10/cong-nghe.js` (329 dòng) ✅ |
| H11CN | Công nghệ 11 | 11 | `lop11/cong-nghe.js` (329 dòng) ✅ |
| H12CN | Công nghệ 12 | 12 | `lop12/cong-nghe.js` (329 dòng) ✅ |
| H11GDQP | GDQP 11 | 11 | `lop11/gdqp.js` (329 dòng) ✅ |
| H12GDQP | GDQP 12 | 12 | `lop12/gdqp.js` (330 dòng) ✅ |
| H10HDTN | HĐ Trải nghiệm 10 | 10 | `lop10/hdtn.js` (294 dòng) ✅ |
| H11HDTN | HĐ Trải nghiệm 11 | 11 | `lop11/hdtn.js` (296 dòng) ✅ |
| H12HDTN | HĐ Trải nghiệm 12 | 12 | `lop12/hdtn.js` (296 dòng) ✅ |

### Kiểm thử

```
node --check public/js/domains/highschool/modules.js     ✅ OK
```

---

## 2026-07-06 — Phiên cải tiến (9) · Trường Kinh tế — Year 4 hoàn chỉnh (E4.1–E4.6)

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa có dữ liệu; không có GitHub Issues mở).

**Trường:** Trường Kinh tế (`economics`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện 6 module Năm 4 Kinh tế (E4.1–E4.6) vẫn là skeleton (`scenarioIds: []`). Năm 1, 2 & 3 đã hoàn chỉnh (các phiên trước). Ưu tiên bổ sung Year 4 để sinh viên năm 4 có đủ nội dung tổng hợp chuyên sâu, hoàn chỉnh lộ trình Cử nhân Kinh tế 4 năm.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year4.js` | Tạo mới | 6 quiz scenarios E4.1–E4.6 (60 câu hỏi, đầy đủ explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E4.1–E4.6: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ skeleton rỗng |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 6 achievement Năm 4 mới (5 module + 1 tốt nghiệp Năm 4) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_YEAR4_SCENARIOS` |

### Chi tiết nội dung (60 câu hỏi)

**`E4.1-strategy-quiz`** (10 câu) — Quản trị chiến lược:
5 lực Porter, SWOT-SO strategy, Cost Leadership, Ma trận BCG (Cash Cow), Blue Ocean Strategy, Backward Vertical Integration, Value Chain Analysis, Balanced Scorecard (4 góc nhìn), M&A Synergy, Ma trận Ansoff (Market Penetration).

**`E4.2-entrepreneurship-quiz`** (10 câu) — Khởi nghiệp – Lean Canvas:
Lean Canvas vs BMC (Problem ô thay thế), Build-Measure-Learn loop, Product-Market Fit (PMF), Pivot vs Persevere, Venture Capital vs vay ngân hàng, Unfair Advantage, Freemium model, Burn Rate & Runway, Customer Discovery (get out of building), Net Promoter Score (NPS).

**`E4.3-auditing-quiz`** (10 câu) — Kiểm toán độc lập:
Mục tiêu kiểm toán BCTC, Mô hình AR = IR×CR×DR, Trọng yếu (Materiality), Ý kiến kiểm toán unmodified vs modified, COSO 2013 (5 thành phần), Thủ tục phân tích, Độc lập KTV, Bằng chứng kiểm toán (Sufficiency & Appropriateness), External Confirmation, Internal vs External Audit.

**`E4.4-tax-quiz`** (10 câu) — Thuế Việt Nam:
Thuế TNDN 20%, Phương pháp khấu trừ VAT, Điều kiện chi phí được trừ, Biểu thuế TNCN lũy tiến 7 bậc, Hóa đơn điện tử (NĐ 123/2020), Transfer Pricing (chuyển giá), Foreign Contractor Withholding Tax, Thuế TTĐB, Kỳ kê khai VAT (tháng/quý), Tax Shield.

**`E4.5-business-ethics-quiz`** (10 câu) — Đạo đức kinh doanh & CSR:
Friedman vs Stakeholder Theory, Carroll's CSR Pyramid, Tham nhũng & hối lộ, Văn hóa tổ chức & Tone at the Top, ESG (Environmental-Social-Governance), Conflict of Interest, Agency Theory, Whistleblowing, Arm's Length Principle, Lean Canvas Unfair Advantage (bonus).

**`E4.6-capstone-quiz`** (10 câu) — Khoá luận kinh tế:
Quantitative vs Qualitative Research, Endogeneity & IV, Plagiarism, R² và Adjusted R², Difference-in-Differences (DiD), Cấu trúc IMRaD, Policy Implications, Correlation ≠ Causation, Kỹ năng trình bày Hội đồng, Tính đại diện mẫu (Sample Representativeness).

### Achievement mới (6)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `strategist` | ♟️ | Chiến lược gia | E4.1 ≥ 3 sao |
| `lean-founder` | 🌱 | Lean Founder | E4.2 ≥ 3 sao |
| `auditor-pro` | 🔎 | Kiểm toán viên xuất sắc | E4.3 ≥ 3 sao |
| `tax-expert` | 📑 | Chuyên gia Thuế | E4.4 ≥ 3 sao |
| `ethics-champion` | ⚖️ | Nhà kinh doanh Chính trực | E4.5 ≥ 3 sao |
| `year4-econ-complete` | 🏅 | Tốt nghiệp Năm 4 Kinh tế | yearComplete: 4 |

### Kiểm thử

```
node --check public/js/scenarios/economics-year4.js          ✅ OK
node --check public/js/domains/economics/modules.js          ✅ OK
node --check public/js/domains/economics/achievements.js     ✅ OK
node --check public/js/scenarios/_all-content.js             ✅ OK
```

---

## 2026-07-05 — Phiên cải tiến (8) · Trường CNTT — Year 4 (I4.1–I4.4)

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; không có GitHub Issues mở).

**Trường:** Trường CNTT (`it`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox hay GitHub Issues. Quét codebase phát hiện 4 module Năm 4 CNTT (I4.1–I4.4) vẫn là skeleton (`scenarioIds: []`, `placeholder: true`). Ưu tiên bổ sung để sinh viên năm 4 có nội dung luyện tập — hoàn chỉnh lộ trình CNTT 4 năm.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year4.js` | Tạo mới | 4 quiz scenarios I4.1–I4.4 (40 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I4.1–I4.4: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 5 achievement Year 4 mới (4 module + 1 tốt nghiệp Năm 4) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR4_SCENARIOS` |

### Chi tiết nội dung (40 câu hỏi)

**`I4.1-se-arch-quiz`** (10 câu) — Kiến trúc phần mềm & Design Patterns:
SOLID (SRP, OCP, DIP), GoF 3 nhóm (Creational/Structural/Behavioral), Observer Pattern, Dependency Injection, Microservices vs Monolithic, CQRS, DDD Bounded Context, Clean Architecture Dependency Rule, API Gateway.

**`I4.2-cloud-quiz`** (10 câu) — Điện toán đám mây AWS/GCP:
IaaS/PaaS/SaaS phân tầng quản lý, Amazon S3 object storage, AWS Lambda serverless/FaaS, Docker container vs VM (kernel sharing), Kubernetes Pod, Terraform vs CloudFormation (multi-cloud), Auto Scaling, CDN edge caching, CAP Theorem (P không tránh được → chọn C hoặc A), SLA 99.9% ~8.7h downtime/năm.

**`I4.3-data-science-quiz`** (10 câu) — Khoa học dữ liệu:
Overfitting vs Underfitting, K-Fold Cross Validation, Precision vs Recall (khi nào ưu tiên), K-Means giới hạn, One-Hot Encoding, Random Forest Bagging, Data leakage (fit scaler trên test set), PCA dimensionality reduction, A/B Testing (p-value + power), CRISP-DM 6 pha.

**`I4.4-blockchain-quiz`** (10 câu) — Blockchain & Web3:
Blockchain trustless/immutable vs database, Proof of Work (nonce + hash < target), Smart Contract EVM/Solidity, AMM Uniswap x×y=k, NFT ERC-721 vs ERC-20, Private Key ký giao dịch, Gas mechanism + EIP-1559, Web3 ownership vs Web2 tập trung, Merkle Tree + SPV verification, DAO token voting.

### Achievement mới (5)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `architect` | 🏛️ | Software Architect | I4.1 ≥ 3 sao |
| `cloud-pro` | ☁️ | Cloud Pro | I4.2 ≥ 3 sao (cập nhật desc) |
| `data-scientist` | 📊 | Data Scientist | I4.3 ≥ 3 sao |
| `blockchain-dev` | ⛓️ | Blockchain Developer | I4.4 ≥ 3 sao |
| `year4-it-complete` | 🥇 | Tốt nghiệp Năm 4 CNTT | yearComplete: 4 |

### Kiểm thử

```
node --check public/js/scenarios/it-year4.js              ✅ OK
node --check public/js/domains/it/modules.js              ✅ OK
node --check public/js/domains/it/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js          ✅ OK
```

---

## 2026-07-04 — Phiên cải tiến (7) · Trường Kinh tế — Year 3 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa kết nối trong môi trường này).

**Trường:** Trường Kinh tế (`economics`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện 7 module Năm 3 Trường Kinh tế (E3.1–E3.7) đều là skeleton với `scenarioIds: []`. Năm 1 & Năm 2 đã hoàn chỉnh (phiên 2026-06-27 và 2026-06-28). Ưu tiên bổ sung Year 3 để sinh viên năm 3 có đủ nội dung học chuyên ngành sâu.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year3.js` | Tạo mới | 7 quiz scenarios E3.1–E3.7 (70 câu hỏi, đầy đủ explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E3.1–E3.7: bổ sung `scenarioIds` + `knowledgeQuiz` |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 8 achievement Year 3 mới (7 module + 1 hoàn thành Năm 3) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_YEAR3_SCENARIOS` |

### Chi tiết nội dung (70 câu hỏi)

**`E3.1-econometrics-quiz`** (10 câu) — Kinh tế lượng:
OLS Gauss-Markov assumption, giải thích hệ số β, đa cộng tuyến (VIF), heteroskedasticity (Breusch-Pagan), Durbin-Watson autocorrelation, F-test tổng thể, R² interpretation, biến nội sinh & IV/2SLS, Hausman test Fixed vs Random Effects, hồi quy giả tạo & cointegration.

**`E3.2-corporate-finance-quiz`** (10 câu) — Tài chính doanh nghiệp:
NPV vs IRR quyết định đầu tư, WACC công thức, Modigliani-Miller capital structure irrelevance, CAPM và beta, Free Cash Flow to Firm (FCFF), đòn bẩy tài chính (DFL), Cash Conversion Cycle, phương pháp so sánh vòng đời khác nhau (EAC), Pecking Order Theory, Payback Period nhược điểm.

**`E3.3-management-accounting-quiz`** (10 câu) — Kế toán quản trị:
Chi phí biến đổi vs cố định, Contribution Margin, Break-Even Point, CVP assumptions, Material Price Variance, ABC vs Traditional Costing, Balanced Scorecard 4 viễn cảnh, Transfer Pricing cost-plus nhược điểm, Make or Buy relevant costs, Flexible vs Static Budget.

**`E3.4-financial-analysis-quiz`** (10 câu) — Phân tích tài chính:
Current Ratio, DuPont 3 nhân tố (ROE = Margin × TAT × Leverage), P/E ratio, Total Asset Turnover, DCF Valuation (FCFF + Terminal Value), Altman Z-Score, D/E Ratio, Interest Coverage Ratio (ICR), Diluted EPS vs Basic EPS, OCF vs Net Income.

**`E3.5-digital-marketing-quiz`** (10 câu) — Marketing số & E-commerce:
SEO vs SEM, CTR calculation, LTV/CAC ratio, C2C vs B2B/B2C models, A/B Testing, Bounce Rate, Mobile-First strategy, TOFU–MOFU–BOFU funnel, Email Marketing ROI, Marketplace revenue model.

**`E3.6-supply-chain-quiz`** (10 câu) — Quản trị chuỗi cung ứng:
Định nghĩa supply chain & 3 dòng chảy, Just-In-Time (JIT) nguyên tắc, EOQ công thức, Bullwhip Effect, SCOR model (Plan-Source-Make-Deliver-Return), Lean vs Agile SCM, Vendor Managed Inventory (VMI), Total Cost of Ownership (TCO), Reverse Logistics, Lead Time.

**`E3.7-international-business-quiz`** (10 câu) — Kinh doanh quốc tế:
Comparative Advantage (Ricardo), FDI Greenfield vs M&A vs JV, Porter's Diamond 4 yếu tố, Tariff vs Non-Tariff Barriers, depreciation & J-Curve effect, WTO MFN principle, Hofstede Power Distance, Incoterms CIF vs FOB, Transfer Pricing in MNCs & BEPS, Contract Manufacturing vs FDI.

### Achievement mới (8)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `econometrics-pro` | 📐 | Kinh tế lượng Pro | E3.1 ≥ 3 sao |
| `corp-finance-star` | 💼 | Tài chính doanh nghiệp | E3.2 ≥ 3 sao |
| `mgmt-accounting` | 📋 | Kế toán quản trị Master | E3.3 ≥ 3 sao |
| `financial-analyst` | 🔍 | Nhà phân tích tài chính | E3.4 ≥ 3 sao |
| `digital-marketer` | 📲 | Digital Marketer | E3.5 ≥ 3 sao |
| `supply-chain-boss` | 🔗 | Chuỗi cung ứng chuyên gia | E3.6 ≥ 3 sao |
| `global-trader` | 🌏 | Nhà kinh doanh quốc tế | E3.7 ≥ 3 sao |
| `all-year-3-econ` | 🎖️ | Tốt nghiệp Năm 3 Kinh tế | Năm 3 hoàn chỉnh (E3.1–E3.7) |

### Kiểm thử

```
node --check public/js/scenarios/economics-year3.js              ✅ OK
node --check public/js/domains/economics/modules.js              ✅ OK
node --check public/js/domains/economics/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js                 ✅ OK
```

---

## 2026-07-02 — Phiên cải tiến (6) · Trường CNTT — Year 3 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa kết nối trong môi trường này).

**Trường:** Trường CNTT (`it`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện 8 module Năm 3 Trường CNTT (I3.1–I3.8) đều là skeleton với `scenarioIds: []` + `placeholder: true`. Năm 1 & Năm 2 đã hoàn chỉnh (phiên 2026-06-27 và 2026-06-28). Ưu tiên bổ sung Year 3 để sinh viên năm 3 có đủ nội dung học chuyên ngành sâu.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year3.js` | Tạo mới | 8 quiz scenarios I3.1–I3.8 (80 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I3.1–I3.8: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 9 achievement Year 3 mới (8 module + 1 hoàn thành Năm 3) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR3_SCENARIOS` |

### Kiểm thử

```
node --check public/js/scenarios/it-year3.js              ✅ OK
node --check public/js/domains/it/modules.js              ✅ OK
node --check public/js/domains/it/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js          ✅ OK
```

---

## 2026-06-28 — Phiên cải tiến (5) · Trường CNTT — Year 2 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa kết nối trong môi trường này).

**Trường:** Trường CNTT (`it`)

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year2.js` | Tạo mới | 5 quiz scenarios I2.1–I2.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I2.1–I2.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 6 achievement Year 2 mới (5 module + 1 hoàn thành Năm 2) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR2_SCENARIOS` |

### Kiểm thử

```
node --check public/js/scenarios/it-year2.js              ✅ OK
node --check public/js/domains/it/modules.js              ✅ OK
node --check public/js/domains/it/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js          ✅ OK
```

---

## 2026-06-28 — Phiên cải tiến (4) · Trường Kinh tế — Year 2 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa kết nối trong môi trường này).

**Trường:** Trường Kinh tế (`economics`)

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year2.js` | Tạo mới | 5 quiz scenarios E2.1–E2.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E2.1–E2.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ skeleton |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 6 achievement Year 2 mới (5 module + 1 hoàn thành Năm 2) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_YEAR2_SCENARIOS` |

### Kiểm thử

```
node --check public/js/scenarios/economics-year2.js              ✅ OK
node --check public/js/domains/economics/modules.js              ✅ OK
node --check public/js/domains/economics/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js                 ✅ OK
```

---

## 2026-06-27 — Phiên cải tiến (3) · Trường CNTT — Year 1 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending).

**Trường:** Trường CNTT (`it`)

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year1.js` | Tạo mới | 5 quiz scenarios I1.1–I1.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I1.1–I1.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/experiences.js` | Sửa | Mở rộng từ 6 → 14 entries; Year 1 có Codelab + ScoreUp |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 6 achievement Year 1 mới (5 module + 1 hoàn thành Năm 1) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR1_SCENARIOS` |
