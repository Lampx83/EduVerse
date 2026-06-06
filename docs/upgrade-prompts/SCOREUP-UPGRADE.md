# ScoreUp Upgrade Prompt — K-12 Curriculum & Write API

> **Cách dùng:** Mở Claude Code tại thư mục dự án **ScoreUp**, paste toàn bộ phần ▼ giữa hai dấu `---PROMPT BEGIN---` / `---PROMPT END---` vào hộp thoại đầu tiên. Claude sẽ tự khảo sát codebase và tự đề xuất kế hoạch trước khi thay đổi.

> **Bối cảnh:** ScoreUp hiện cung cấp 6 endpoint Public API (READ-ONLY) — `/subjects`, `/chapters`, `/questions[/random|/{id}]`. Tizia gọi để lấy quiz. Để Tizia phủ toàn bộ K-12 + mầm non đúng chuẩn GDPT 2018, ScoreUp cần upgrade theo Phase 1 → 3 dưới đây.

---PROMPT BEGIN---

# YÊU CẦU NÂNG CẤP SCOREUP — PHỦ K-12 VIỆT NAM (GDPT 2018)

Hãy đọc codebase ScoreUp hiện tại và đề xuất kế hoạch implement các yêu cầu dưới đây. Nếu phát hiện rủi ro/conflict với schema/API hiện có, hỏi tôi trước khi sửa.

## A. Bối cảnh business

ScoreUp đang được Tizia (vũ trụ giáo dục ảo, https://tizia.vn) tiêu thụ qua Public API. Tizia cần dữ liệu quiz phủ **toàn bộ K-12 + mầm non Việt Nam** theo Chương trình Giáo dục Phổ thông 2018 (Thông tư 32/2018, Thông tư 13/2022 sửa môn THPT, Thông tư 51/2020 cho mầm non):

| Cấp | Lớp | Số môn | Tuần/năm |
|---|---|---|---|
| Mầm non | N1-N3 (3-5 tuổi) | 5 lĩnh vực phát triển + ngoại ngữ | 35 |
| Tiểu học | L1-L2 | 7 (TV, Toán, Đạo đức, TN-XH, GDTC, Nghệ thuật, HĐTN) + Anh tự chọn | 35 |
| Tiểu học | L3 | 8 (thêm Ngoại ngữ 1, Tin học & CN) | 35 |
| Tiểu học | L4-L5 | 11 (thêm LS-ĐL, Khoa học; bỏ TN-XH) | 35 |
| THCS | L6-L9 | 12 (KHTN tích hợp, LS-ĐL tích hợp) | 35 |
| THPT | L10-L12 | 8 bắt buộc + 4/9 tự chọn (Lịch sử BẮT BUỘC theo TT 13/2022) | 35 |

Mỗi `subject × grade × week_no` cần **≥ 10 câu hỏi** đa dạng độ khó để hỗ trợ adaptive learning (IRT theta) bên Tizia.

## B. Phase 1 — Curriculum mapping schema

Mở rộng data model hiện tại (subjects/chapters/questions) để hỗ trợ 3 chiều mapping:

```
grade_level (mầm non / tiểu học / THCS / THPT / ĐH)
↓
grade (preschool / 1..12 / freshman..senior)
↓
subject (math, vietnamese, english, science, history, geography, ...)
↓
week_no (1..35 cho K-12, 1..36 cho ĐH theo học kỳ)
↓
chapter (bài học cụ thể trong tuần)
↓
question (multiple-choice, true-false, fill-blank, ordering, matching)
```

Yêu cầu cụ thể:

1. Thêm bảng `curriculum_map` (hoặc tương đương): `id, grade_level, grade, subject_code, week_no, chapter_id, learning_objectives (text), bloom_level (1-6)`.
2. Bổ sung field `subjects.grade_level`, `subjects.grade`, `subjects.curriculum_version` (mặc định `'gdpt-2018'`).
3. Bổ sung field `chapters.week_no` (1..36 nullable), `chapters.sequence` (1..N), `chapters.required` (bool — môn bắt buộc/tự chọn).
4. Bổ sung field `questions.difficulty` (1..5), `questions.bloom_level` (1..6), `questions.question_type` (enum: single_choice, multi_choice, true_false, fill_blank, ordering, matching, short_answer).
5. Migration phải **back-compatible** với data hiện tại — không break Tizia Public API đang chạy.

## C. Phase 2 — Public Write API cho content publishing

Hiện tại API chỉ READ. Cần thêm **scoped write API** với 2 API key levels:

- `sk_scoreup_public_*` (read-only, đang dùng) — giữ nguyên 60 req/phút.
- `sk_scoreup_publisher_*` (write, mới) — 30 req/phút, scope theo `publisher_id`. Publisher chỉ ghi được chapters/questions thuộc subjects mình quản lý.

Endpoint cần thêm:

```
POST   /api/internal/subjects                  # tạo subject
PATCH  /api/internal/subjects/:id              # update meta
POST   /api/internal/chapters                  # tạo chapter (gắn subject + week)
PATCH  /api/internal/chapters/:id
DELETE /api/internal/chapters/:id              # soft-delete

POST   /api/internal/questions                 # 1 câu
POST   /api/internal/questions/bulk            # batch ≤ 200 câu
PATCH  /api/internal/questions/:id
DELETE /api/internal/questions/:id

POST   /api/internal/curriculum-map/import     # import 1 grade × subject (1 lần ≤ 35 tuần)
GET    /api/internal/curriculum-map/coverage   # báo cáo % tuần đã có data
```

Validation:
- Question stem 10..500 ký tự, ≥ 2 choice, 1 đúng (single) hoặc ≥ 1 đúng (multi).
- Bulk insert: trả về `created[]`, `skipped[]` (duplicate fingerprint), `errors[]` từng dòng.
- Idempotency: header `Idempotency-Key` cho POST bulk.

## D. Phase 3 — Admin UI (web) để biên soạn nội dung

Mục đích: **non-dev giáo viên** có thể vào ScoreUp Admin để biên soạn câu hỏi, không phải qua API. UI cần:

1. **Cây curriculum**: Mầm non / Tiểu học / THCS / THPT → từng lớp → môn → tuần 1..35 → bài → câu hỏi.
2. **Bulk import wizard**: upload CSV/Excel theo template `grade,subject,week_no,question_stem,answer_a,answer_b,answer_c,answer_d,correct,difficulty,bloom`. Preview → validate → confirm.
3. **Coverage dashboard**: bảng heatmap `grade × subject × week` cho biết tuần nào đã đủ ≥ 10 câu, tuần nào còn thiếu.
4. **Question Quality**: cho phép review 2 người + workflow `draft → review → published`. Chỉ status `published` mới phát ra Public API.
5. **Author attribution**: track `created_by_teacher_id`, `reviewed_by_teacher_id` (cho việc thanh toán nhuận bút sau này).

## E. Phase 4 — Mở rộng Public Read API cho Tizia

Bổ sung 4 endpoint mới (vẫn read-only, `sk_scoreup_public_*`):

```
GET /api/public/curriculum/:grade_level                  # list grades + subjects
GET /api/public/curriculum/:grade_level/:grade           # list subjects + tổng tuần
GET /api/public/curriculum/:grade/:subject_code          # list 35 tuần + status (có data/chưa)
GET /api/public/curriculum/:grade/:subject_code/week/:n  # questions cho tuần đó (paginated)
```

Mỗi response gắn `X-Curriculum-Version: gdpt-2018-2022` để Tizia biết version data.

## F. Phase 5 — Seed dataset gốc

Nội dung là phần khó nhất. Approach đề xuất:

1. **Seed Mầm non + Tiểu học L1-L2 trước** (đơn giản nhất, ít môn): 7-8 môn × 35 tuần × 10 câu ≈ 2,000 câu. Có thể auto-gen từ rubric (chia "tuần 1-5 luyện chữ → tuần 6-10 ghép vần → ..." theo từng môn).
2. **Mời 5-10 giáo viên** soạn THCS/THPT (môn chuyên môn cao) — dùng Admin UI.
3. **Pipeline AI-assisted**: cho phép author dùng GPT/Claude generate draft theo prompt template chuẩn (input: grade + subject + week + learning objective → output: 10 câu hỏi structured JSON). Người duyệt sau.

Output Phase 5: dataset ban đầu ≥ **5,000 câu hỏi**, phủ ưu tiên Mầm non + Tiểu học + Toán/Văn/Anh THCS-THPT.

## G. Tích hợp với Tizia (đã có)

ScoreUp giữ contract API hiện tại + thêm các endpoint mới ở Phase 4. Tizia sẽ:
- Gọi `/api/public/curriculum/...` để lấy quiz theo `grade × subject × week`.
- Tự chấm điểm + lưu attempt trong DB Tizia (không phụ thuộc ScoreUp).
- Không gọi write API (Tizia là consumer, không publish).

---

# CÁCH LÀM VIỆC

1. Đọc codebase ScoreUp + report cho tôi: schema hiện tại, endpoint hiện có, framework (Express/NestJS/Fastify?).
2. Đề xuất plan tách Phase 1 thành các PR nhỏ (migration, model, validation, test).
3. Hỏi tôi confirm trước khi sửa breaking change.
4. Implement Phase 1 trước (schema + back-compat migration). Phase 2-5 sẽ ra prompt riêng sau.
5. Test coverage ≥ 70% cho code mới. Có unit test cho validation + integration test cho API.

---PROMPT END---

## Tham khảo: Tizia hiện gọi ScoreUp như sau

```js
// server-side proxy trong Tizia
const url = `${SCOREUP_BASE_URL}/api/public/subjects`;
const res = await fetch(url, { headers: { 'X-API-Key': SCOREUP_API_KEY }});
```

Khi Phase 4 xong, Tizia sẽ chuyển sang gọi `/api/public/curriculum/...` thay cho tổ chức theo `subjects/chapters` riêng lẻ.
