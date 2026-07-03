# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

---

## 2026-07-03 — Phiên cải tiến (7) · Trường Kinh tế — Year 3 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa kết nối trong môi trường này).

**Trường:** Trường Kinh tế (`economics`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện 7 module Năm 3 Trường Kinh tế (E3.1–E3.7) đều là skeleton với `scenarioIds: []` và không có `knowledgeQuiz`. Năm 1 & Năm 2 đã hoàn chỉnh (phiên 2026-06-27 và 2026-06-28). Ưu tiên bổ sung Year 3 để sinh viên năm 3 ngành Kinh tế có đủ nội dung học chuyên ngành sâu.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year3.js` | Tạo mới | 7 quiz scenarios E3.1–E3.7 (70 câu hỏi, đầy đủ explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E3.1–E3.7: bổ sung `scenarioIds` + `knowledgeQuiz` |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 8 achievement Year 3 mới (7 module + 1 hoàn thành Năm 3) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_YEAR3_SCENARIOS` |

### Chi tiết nội dung (70 câu hỏi)

**`E3.1-econometrics-quiz`** (10 câu) — Kinh tế lượng:
OLS và tối thiểu hoá bình phương phần dư, hệ số R², đa cộng tuyến (VIF), kiểm định Breusch-Pagan (heteroscedasticity), Durbin-Watson (autocorrelation), biến giả (dummy variable), ưu điểm panel data, biến công cụ (IV/2SLS), kiểm định t-statistic, nhân quả Granger.

**`E3.2-corporate-finance-quiz`** (10 câu) — Tài chính doanh nghiệp:
Quyết định NPV, công thức WACC, định lý Modigliani-Miller, beta CAPM, chính sách cổ tức không liên quan, đòn bẩy tài chính, so sánh IRR vs NPV, định giá DCF, tấm chắn thuế lãi vay, Pecking Order Theory.

**`E3.3-management-accounting-quiz`** (10 câu) — Kế toán quản trị:
Break-even point, ABC costing, phân tích biến động (variance analysis), chi phí chìm (sunk cost), standard costing, contribution margin, transfer pricing, Balanced Scorecard (4 perspectives), chi phí cơ hội, flexible vs static budget.

**`E3.4-financial-analysis-quiz`** (10 câu) — Phân tích tài chính:
Quick ratio, phân tích DuPont (3 nhân tố), inventory turnover, P/E ratio, EBITDA và ứng dụng, Altman Z-score, FCFF, D/E ratio, EVA (Economic Value Added), comparable company analysis (trading multiples).

**`E3.5-digital-marketing-quiz`** (10 câu) — Marketing số & E-commerce:
SEO vs SEM, conversion rate, phễu AIDA, CLV, A/B testing, email marketing ROI, marketplace pros/cons, Google Analytics 4 event-based, retargeting, CTR và các chỉ số Google Ads.

**`E3.6-supply-chain-quiz`** (10 câu) — Quản trị chuỗi cung ứng:
EOQ formula, bullwhip effect, JIT (Just-In-Time), VMI (Vendor Managed Inventory), Incoterms 2020, S&OP process, Lean manufacturing (7 wastes), 3PL vs 4PL, moving average forecasting, OTIF KPI.

**`E3.7-international-business-quiz`** (10 câu) — Kinh doanh quốc tế:
Lợi thế so sánh Ricardo, FDI vs portfolio investment, Kim cương Porter, rủi ro tỷ giá (3 loại), phương thức thâm nhập thị trường (entry modes), nguyên tắc WTO, OLI theory (Dunning), EVFTA, J-curve effect, Power Distance Hofstede.

### Achievement mới (8)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `econometrics-pro` | 📐 | Kinh tế lượng Pro | E3.1 ≥ 3 sao |
| `corp-finance-ace` | 🏛️ | Tài chính DN Ace | E3.2 ≥ 3 sao |
| `mgmt-accountant` | 🗂️ | Kế toán Quản trị | E3.3 ≥ 3 sao |
| `financial-analyst` | 🔍 | Financial Analyst | E3.4 ≥ 3 sao |
| `digital-marketer` | 📲 | Digital Marketer | E3.5 ≥ 3 sao |
| `supply-chain-pro` | 🚚 | Supply Chain Pro | E3.6 ≥ 3 sao |
| `global-business` | 🌏 | Global Business | E3.7 ≥ 3 sao |
| `all-year-3-econ` | 🥉 | Tốt nghiệp Năm 3 Kinh tế | Năm 3 hoàn chỉnh (E3.1–E3.7) |

### Kiểm thử

```
node --check public/js/scenarios/economics-year3.js           ✅ OK
node --check public/js/domains/economics/modules.js           ✅ OK
node --check public/js/domains/economics/achievements.js      ✅ OK
node --check public/js/scenarios/_all-content.js              ✅ OK
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

### Chi tiết nội dung (80 câu hỏi)

**`I3.1-se-quiz`** (10 câu) — Kỹ thuật phần mềm:
Agile Scrum Sprint, Waterfall vs Agile, Unit Testing pyramid, UML Use Case, SRS Functional/Non-Functional, SOLID Open-Closed Principle, Code Review, Git merge conflict, Continuous Integration, TDD Red-Green-Refactor.

**`I3.2-sad-quiz`** (10 câu) — Phân tích & Thiết kế hệ thống:
Microservices vs Monolithic, Singleton Pattern (GoF), REST PATCH vs PUT, Observer Pattern, Database 3NF, CAP Theorem, Load Balancer, DDD Bounded Context, Cache-Aside strategy, API Gateway.

**`I3.3-ai-quiz`** (10 câu) — Trí tuệ nhân tạo:
A* vs Dijkstra (heuristic), Minimax + Alpha-Beta, Propositional Logic implication, NLP tokenization, Expert System components, Turing Test, CSP (constraint satisfaction), STRIPS planning, Naive Bayes spam filter, RL vs Supervised Learning.

**`I3.4-ml-quiz`** (10 câu) — Machine Learning:
Overfitting/Underfitting bias-variance, K-Means unsupervised, Vanishing gradient ReLU vs Sigmoid, K-Fold Cross-Validation, Precision/Recall/F1-score, Gradient Descent formula, Transfer Learning fine-tuning, Feature Scaling, Random Forest ensemble, CNN architecture.

**`I3.5-fullstack-quiz`** (10 câu) — Web Full-stack (Node + React):
Node.js Event Loop single-thread, React useEffect hook, JWT payload security, Prop drilling + Context, SQL Injection Prepared Statements, React Virtual DOM reconciliation, Express middleware chain, WebSocket vs HTTP, Docker containers, Next.js SSR/SSG.

**`I3.6-mobile-quiz`** (10 câu) — Mobile Dev (Android/iOS):
React Native vs Native, Android Activity Lifecycle onPause, Swift Optionals nil safety, FCM push notification flow, Battery drain causes, Jetpack Compose declarative UI, Deep Links universal links, ASO vs SEO, Retrofit annotations, Monkey Testing.

**`I3.7-devops-quiz`** (10 câu) — DevOps & Cloud:
Kubernetes vs Docker Compose orchestration, Terraform IaC, AWS S3 object storage, Blue-Green Deployment, Observability 3 pillars (Logs/Metrics/Traces), GitHub Actions triggers, Serverless Lambda use cases, Rate Limiting algorithms, DR RPO/RTO, Container security least privilege.

**`I3.8-security-quiz`** (10 câu) — An toàn thông tin:
Asymmetric encryption public/private key, OWASP Top 10 Broken Access Control #1, XSS types + CSP defense, TLS Handshake ECDHE, Password hashing bcrypt/Argon2, MitM attack + HSTS defense, Pentest Reconnaissance phase, SQL Injection Union-based, MFA 3 factors, Social Engineering phishing.

### Achievement mới (9)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `se-architect` | 🏗️ | Software Architect | I3.1 ≥ 3 sao |
| `system-designer` | 📐 | System Designer | I3.2 ≥ 3 sao |
| `ai-scientist` | 🧠 | AI Scientist | I3.3 ≥ 3 sao |
| `ai-master` | 🤖 | AI Master | I3.4 ≥ 3 sao |
| `fullstack` | 🌐 | Full-stack Dev | I3.5 ≥ 3 sao |
| `mobile-dev` | 📱 | Mobile Developer | I3.6 ≥ 3 sao |
| `devops-pro` | ⚙️ | DevOps Pro | I3.7 ≥ 3 sao |
| `hacker` | 🚩 | Hacker | I3.8 ≥ 3 sao |
| `year3-it-complete` | 🥉 | Tốt nghiệp Năm 3 CNTT | Năm 3 hoàn chỉnh (I3.1–I3.8) |

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

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện 32/37 module Trường CNTT còn là skeleton. Năm 1 đã hoàn chỉnh (phiên 2026-06-27). Ưu tiên bổ sung Year 2 (5 module cơ sở ngành) để sinh viên năm 2 có nội dung học: Cấu trúc dữ liệu & Giải thuật, OOP Java, SQL, Mạng máy tính, Thiết kế Web.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year2.js` | Tạo mới | 5 quiz scenarios I2.1–I2.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I2.1–I2.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 6 achievement Year 2 mới (5 module + 1 hoàn thành Năm 2) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR2_SCENARIOS` |

### Chi tiết nội dung (50 câu hỏi)

**`I2.1-dsa-quiz`** (10 câu) — Cấu trúc dữ liệu & Giải thuật:
Big-O notation, Stack (LIFO/FIFO), Linked List vs Array, BST search complexity, Hash Table O(1), Merge Sort O(n log n), BFS (Queue) vs DFS (Stack), Bubble Sort, Complete Binary Tree, Quick Sort space complexity.

**`I2.2-oop-java-quiz`** (10 câu) — Lập trình hướng đối tượng Java:
4 pillars OOP (A PIE), extends (kế thừa đơn), Runtime Polymorphism / dynamic dispatch, Abstract class vs Interface, finally block, ArrayList vs Array, Encapsulation (private + getter/setter), Static method, HashMap hashCode/equals, super().

**`I2.3-sql-quiz`** (10 câu) — Cơ sở dữ liệu SQL:
HAVING vs WHERE, INNER JOIN vs LEFT JOIN, Primary Key, 1NF normalization, INDEX B-Tree, ACID Consistency, DELETE vs TRUNCATE, GROUP BY + HAVING, Subquery (AVG), Foreign Key Constraint.

**`I2.4-networking-quiz`** (10 câu) — Mạng máy tính:
OSI 7 tầng + Layer 3 routing, TCP vs UDP (reliable vs fast), DNS (phonebook Internet), HTTP status codes (404), Subnet mask /24, HTTPS (TLS/SSL), Router vs Switch, DHCP, TCP 3-way handshake (SYN-SYN/ACK-ACK), Port numbers.

**`I2.5-web-quiz`** (10 câu) — Thiết kế Web:
HTML5 Semantic tags, CSS Box Model, Flexbox justify-content, Media Query (max-width), DOM, let vs var (block scope), addEventListener, Fetch API (AJAX), CSS Specificity, Arrow function (lexical this).

### Achievement mới (6)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `java-ninja` | ☕ | Java Ninja | I2.2 ≥ 3 sao |
| `sql-hero` | 🗄️ | SQL Hero | I2.3 ≥ 3 sao |
| `network-engineer` | 🌐 | Network Engineer | I2.4 ≥ 3 sao |
| `web-crafter` | 🎨 | Web Crafter | I2.5 ≥ 3 sao |
| `algorithmist` | 🌳 | Algorithmist | I2.1 ≥ 3 sao (đã có sẵn, nay có scenario) |
| `year2-it-complete` | 🥈 | Tốt nghiệp Năm 2 CNTT | Năm 2 hoàn chỉnh |

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

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện 22/27 module Trường Kinh tế vẫn là skeleton với `scenarioIds: []`. Năm 1 đã hoàn chỉnh (phiên 1+2 ngày 2026-06-27). Ưu tiên bổ sung Year 2 (5 module cơ sở ngành) để sinh viên năm 2 có nội dung học ngay.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year2.js` | Tạo mới | 5 quiz scenarios E2.1–E2.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E2.1–E2.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ skeleton |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 6 achievement Year 2 mới (5 module + 1 hoàn thành Năm 2) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_YEAR2_SCENARIOS` |

### Chi tiết nội dung (50 câu hỏi)

**`E2.1-macro-quiz`** (10 câu) — Kinh tế Vĩ mô 1:
GDP phương pháp chi tiêu (C+I+G+NX), dịch chuyển đường AD, số nhân tài khoá, lạm phát cầu kéo vs chi phí đẩy, đường Phillips ngắn hạn, chính sách tài khoá mở rộng, công cụ tiền tệ, phân loại thất nghiệp, mô hình Solow tăng trưởng dài hạn, tài khoản vãng lai.

**`E2.2-statistics-quiz`** (10 câu) — Thống kê cho kinh tế:
Mean vs median (phân phối lệch), độ lệch chuẩn, quy tắc 68-95-99.7, kiểm định giả thuyết H₀, sai lầm Type I/II, hệ số tương quan Pearson, hồi quy tuyến tính đơn (slope), khoảng tin cậy 95%, Định lý giới hạn trung tâm, hệ số R².

**`E2.3-money-quiz`** (10 câu) — Tài chính – Tiền tệ:
Ba chức năng tiền tệ, M1 vs M2, số nhân tiền tệ (1/r), tác động tăng lãi suất tái cấp vốn, nghịch chiều giá trái phiếu–lãi suất, phương trình Fisher, hiện giá PV, tác động VND mất giá, phương trình MV=PQ, cơ chế tạo tiền ngân hàng.

**`E2.4-management-quiz`** (10 câu) — Quản trị học đại cương:
POLC framework, phân tích SWOT, tháp nhu cầu Maslow, Taylor và Scientific Management, cơ cấu tổ chức ma trận, span of control, phong cách lãnh đạo dân chủ, MBO–Management by Objectives, lý thuyết hai nhân tố Herzberg, quy trình kiểm soát quản trị.

**`E2.5-marketing-quiz`** (10 câu) — Marketing căn bản:
Marketing mix 4P, quy trình STP, phân khúc nhân khẩu học, chu kỳ sống sản phẩm–giai đoạn bão hoà, chiến lược skimming vs penetration, kênh phân phối trực tiếp, 5 giai đoạn quyết định mua, BCG matrix–Cash Cow, định vị thương hiệu, content marketing vs quảng cáo truyền thống.

### Achievement mới (6)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `macro-master` | 🏦 | Macro Master | E2.1 ≥ 3 sao |
| `stats-pro` | 📊 | Chuyên gia Thống kê | E2.2 ≥ 3 sao |
| `finance-guru` | 💰 | Tài chính – Tiền tệ Pro | E2.3 ≥ 3 sao |
| `mgmt-leader` | 🧭 | Nhà Quản trị Xuất sắc | E2.4 ≥ 3 sao |
| `marketing-star` | 📣 | Marketing Star | E2.5 ≥ 3 sao |
| `all-year-2-econ` | 🥈 | Tốt nghiệp Năm 2 Kinh tế | Năm 2 hoàn chỉnh |

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

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện toàn bộ 23 module curriculum Trường CNTT đều là skeleton với `scenarioIds: []`. Ưu tiên bổ sung Year 1 (5 module đại cương) để sinh viên năm 1 có nội dung học ngay.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year1.js` | Tạo mới | 5 quiz scenarios I1.1–I1.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I1.1–I1.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/experiences.js` | Sửa | Mở rộng từ 6 → 14 entries; Year 1 có Codelab + ScoreUp |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 6 achievement Year 1 mới (5 module + 1 hoàn thành Năm 1) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR1_SCENARIOS` |
