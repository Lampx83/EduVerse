# Codelab Upgrade Prompt — K-12 Programming Track

> **Cách dùng:** Mở Claude Code tại thư mục dự án **Codelab**, paste toàn bộ phần ▼ giữa hai dấu `---PROMPT BEGIN---` / `---PROMPT END---`.

> **Bối cảnh:** Codelab hiện cung cấp môi trường chạy code (judge + sandbox) cho Tizia. Tizia gọi qua `X-API-Key` + `externalUserRef "tizia:user:<id>"`, rate 300 req / 60s, webhook `submission.completed` HMAC. Phù hợp cho ngành CNTT đại học. **Để phủ K-12 cần upgrade nội dung theo độ tuổi**: block-based cho TH, Python cơ bản cho THCS, đa ngôn ngữ cho THPT.

---PROMPT BEGIN---

# YÊU CẦU NÂNG CẤP CODELAB — TRACK LẬP TRÌNH K-12 VIỆT NAM

Hãy khảo sát codebase Codelab hiện tại và đề xuất kế hoạch implement. Tizia sẽ là consumer chính của track mới này.

## A. Bối cảnh business

Codelab đang dùng cho sinh viên CNTT đại học. Tizia cần mở rộng cho **K-12 Việt Nam** theo môn:

| Cấp | Lớp | Môn liên quan lập trình | Track Codelab cần |
|---|---|---|---|
| Tiểu học | L3 | Tin học & Công nghệ (35 tiết/năm) | Block-based (Scratch-like) |
| Tiểu học | L4-L5 | Tin học & Công nghệ (35 tiết/năm) | Block-based nâng cao + giới thiệu text |
| THCS | L6-L7 | Tin học (35 tiết/năm) | Python cơ bản (turtle, console) |
| THCS | L8-L9 | Tin học (35 tiết/năm) | Python algorithms cơ bản |
| THPT | L10-L12 | Tin học tự chọn (70 tiết/năm) | Python + JS + C++ algorithms |
| ĐH CNTT | 4 năm | (đã có) | Giữ nguyên |

Mỗi tuần học cần **≥ 3-5 bài tập** chạy được + auto-grade.

## B. Phase 1 — Track + Age-group schema

Mở rộng data model:

```
track (k12-block / k12-python / k12-multi / he-cntt)
↓
age_group (preschool / primary / secondary / highschool / he)
↓
grade (1..12 / freshman..)
↓
unit (đơn vị học, gắn week_no của Tizia curriculum)
↓
problem (1 bài tập)
↓
testcase (input → expected output) + judge config (time/memory limit theo age)
```

Yêu cầu:

1. Thêm bảng `tracks`: `id, code, name, age_group, supported_languages (json: ['python','js','blocks'])`.
2. Thêm bảng `units`: `id, track_id, sequence, week_no, name, learning_objectives`.
3. Bổ sung `problems.unit_id`, `problems.age_group`, `problems.difficulty (1..5)`, `problems.estimated_minutes`, `problems.scaffolding_level` (full-template / partial / blank).
4. Bổ sung `problems.starter_code` per language + `problems.solution_code` (admin-only).
5. Test cases hỗ trợ `hidden` (chỉ run, không show) — tránh HS L3 thấy expected output rồi paste.

## C. Phase 2 — Block-based runtime (cho Tiểu học)

K-12 Tiểu học **không gõ code chữ**. Cần:

1. Tích hợp **Blockly** (Google) hoặc tương đương vào Codelab.
2. Block library theo độ tuổi:
   - L3 (8-9 tuổi): Movement (di chuyển nhân vật), Repeat, If-else cơ bản, Math đơn giản.
   - L4-L5 (9-11 tuổi): + Variables, Functions, Lists đơn giản, Event handlers.
3. Blocks → Python (auto-transpile) → judge cùng pipeline với Python text.
4. UI render block trong iframe Codelab; Tizia chỉ embed iframe + nhận `submission.completed` webhook như cũ.
5. Output trực quan: canvas 2D (turtle/sprite) bên cạnh code area cho HS xem chương trình chạy.

## D. Phase 3 — Python turtle/console (cho THCS)

THCS gõ code chữ Python. Cần:

1. Sandbox Python với pre-import `turtle`, `random`, `math` mặc định.
2. Output console + canvas turtle song song.
3. Time limit thoải mái hơn ĐH (10s thay vì 2s) để cho phép animation.
4. Memory limit giảm (64MB thay vì 256MB) — bài tập đơn giản.
5. **Hint system**: HS click "Gợi ý" sẽ thấy 1 hint per problem, click "Gợi ý nữa" → hint chi tiết hơn (3 levels). Hint do giáo viên soạn, lưu trong `problems.hints[]`.

## E. Phase 4 — Multi-language (cho THPT + ĐH)

Giữ pipeline hiện tại cho ĐH, mở rộng cho THPT:
- THPT tự chọn ngôn ngữ: Python (mặc định), JS, C++.
- THPT problems gắn `difficulty 3-5` (Olympic Tin học cấp trường/QG có thể level 5).

## F. Phase 5 — Public API mới cho Tizia

Bổ sung endpoint dưới `X-API-Key` (read scope cho non-user, user scope khi gắn `externalUserRef`):

```
GET  /api/public/tracks                      # list tất cả track
GET  /api/public/tracks/:code/units          # list unit theo track
GET  /api/public/tracks/:code/units/:n       # detail 1 unit + problem list
GET  /api/public/problems/:id                # detail problem (stem, starter, language list, hints public)
POST /api/public/problems/:id/submissions    # submit code → run + judge
GET  /api/public/problems/:id/submissions/:sid  # status submission
POST /api/public/problems/:id/run            # run code không lưu (debug)
```

Webhook `submission.completed` giữ nguyên — Tizia đã ăn webhook này (xem `reference_codelab_api.md` của Tizia).

## G. Phase 6 — Bộ problem khởi đầu

Nội dung khó. Approach:

1. **L3-L5 Block**: 5 problem/tuần × 35 tuần × 3 lớp ≈ 525 problems. Có thể clone Code.org Hour of Code Việt hoá.
2. **L6-L9 Python**: 5 problem/tuần × 35 tuần × 4 lớp ≈ 700 problems. Lấy từ Tin học SGK Cánh Diều/KNTT/CTST + sách bồi dưỡng.
3. **L10-L12 Python/JS/C++**: 3 problem/tuần × 35 tuần × 3 lớp ≈ 315 problems. Từ đề thi học sinh giỏi Tin học cấp trường.
4. **AI-assisted**: prompt template để giáo viên gen draft problem (input: grade + week + topic → output: stem + 5 testcases + starter + solution).
5. **Author UI** trong Codelab Admin: form soạn problem, preview test, publish.

Mục tiêu Phase 6: **≥ 800 problems** phủ hết tuần học K-12 Tin học.

## H. Tích hợp với Tizia (đã có)

Tizia gọi Codelab như sau (giữ nguyên):

```js
// Tizia gửi user code
POST /api/public/problems/:id/submissions
Headers: X-API-Key: ck_codelab_...
Body: { externalUserRef: "tizia:user:42", language: "python", source: "..." }
```

Webhook về Tizia khi `submission.completed`:

```
POST https://tizia.vn/api/webhooks/codelab
HMAC-SHA256 signature trong header X-Codelab-Signature
Body: { externalUserRef, problem_id, status: "accepted"|"wrong"|"tle"|"compile_error", ... }
```

Tizia tự cộng XP/coin khi `accepted` lần đầu.

## I. Yêu cầu phi chức năng

1. **Latency**: judge ≤ 3s cho block/Python đơn giản; ≤ 10s cho C++ optimization.
2. **Concurrency**: ≥ 50 submissions song song không degrade.
3. **An toàn sandbox**: container isolation (Docker/Firecracker), no network, no file system ngoài /tmp.
4. **Cost**: Block/Python K-12 free (Tizia FREE plan); C++ optimization có thể tính meter cho PRO plan.

---

# CÁCH LÀM VIỆC

1. Đọc codebase Codelab + report: stack (Node/Python/Go?), judge engine (custom/Judge0?), language support hiện tại.
2. Đề xuất tách Phase 1 thành PR nhỏ (schema migration, tracks model, problem CRUD).
3. Hỏi tôi confirm trước Phase 2 (Blockly tích hợp — quyết định build vs embed).
4. Implement Phase 1 → 2 → 3 theo thứ tự. Phase 4-6 ra prompt riêng.
5. Test coverage ≥ 70%. Có e2e test: submit code Block → transpile → judge → webhook.

---PROMPT END---

## Tham khảo

- Tizia có sẵn page `/it-code-lab.html`, `/lap-trinh-game.html`, `/it-algo-viz.html`, `/it-cipher-ctf.html` — sẽ migrate sang gọi Codelab API mới khi Phase 5 ready.
- Hook tích hợp Tizia: `server/contexts/integrations/codelab.js` (nếu chưa có sẽ tạo trong Phase 5 Tizia side).
- API spec hiện có: rate 300/60s, HMAC webhook, externalUserRef format `tizia:user:<id>`.
