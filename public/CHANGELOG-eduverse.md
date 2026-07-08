# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

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
