# EduVerse — CLAUDE.md

Tài liệu này định nghĩa hành vi của **Ban điều hành AI** (AI board) khi chạy phiên cải tiến hàng ngày. Claude Code đọc file này làm ngữ cảnh chính.

---

## Kiến trúc codebase

- **Frontend tĩnh + Node/Express** (xem `server/`). Không dùng framework FE.
- **Dữ liệu từng trường**: `public/js/domains/<id>/` — `modules.js`, `subjects.js`, `achievements.js`, `experiences.js`, `index.js`.
- **Scenario học tập**: `public/js/scenarios/*.js` — quiz, lab, game, skill.
- **Engine**: `public/js/engine/` — domain-agnostic, KHÔNG sửa.
- **Trường đang mở**: `pharmacy` (nhiều nội dung), `it` (skeleton mới).

---

## Quy trình phiên cải tiến hàng ngày

### Bước 1 — Đọc hộp thư yêu cầu (local)

Đọc file `ai-board/inbox.json`. Đây là nguồn yêu cầu duy nhất — không gọi bất kỳ API production nào.

```
items[].status: 'pending' | 'done' | 'skipped'
items[].id: string
items[].domain: 'pharmacy' | 'it' | ...
items[].type: 'game' | 'theory' | 'lab' | 'skill' | 'other'
items[].title: string
items[].detail: string (tuỳ chọn)
items[].votes: number
```

Lọc items có `status === 'pending'`, sắp theo `votes` giảm dần, cùng votes thì cũ trước (`created_at` tăng dần).

**Nếu không có item pending** → chạy chế độ chủ động (xem Bước 1b).

### Bước 1b — Chế độ chủ động (khi inbox rỗng)

Quét codebase tìm khoảng trống nội dung:
- Module nào có `experiences[]` rỗng hoặc ít hơn 3 entry?
- Trường `it` thiếu scenario nào so với `pharmacy`?
- Achievement nào chưa có điều kiện rõ ràng?

Chọn 1–2 khoảng trống nhỏ, rủi ro thấp để lấp.

### Bước 2 — Chọn việc cần làm

Chọn 1–3 yêu cầu/khoảng trống:
- Ưu tiên: nhiều votes, cũ nhất, rủi ro thấp.
- Chỉ làm: thêm nội dung/dữ liệu (quiz scenario, achievement, experiences entry, mô tả module).
- Tránh: viết lại engine, thay đổi schema DB, sửa server/, Dockerfile, CI.

### Bước 3 — Triển khai

Chỉ sửa các file trong:
- `public/js/scenarios/*.js`
- `public/js/domains/<id>/*.js`
- `public/CHANGELOG-eduverse.md` (tạo nếu chưa có)
- `ai-board/inbox.json` (cập nhật status sau xử lý)

Tuân theo quy ước file hiện có. Tiếng Việt chuẩn chuyên môn.

### Bước 4 — Kiểm tra cú pháp

```bash
node --check <file>   # cho MỌI file .js đã sửa
```

Không để lỗi cú pháp. Schema scenario: `id` có prefix `moduleId-`, có `kind`, `questions`/`choices`/`answer` hợp lệ.

### Bước 5 — Ghi changelog

Thêm 1 mục vào `public/CHANGELOG-eduverse.md`:
- Ngày, trường, item ID đã xử lý (hoặc "chế độ chủ động"), tóm tắt thay đổi.

### Bước 6 — Commit & PR

```bash
git checkout -b ai-board/YYYY-MM-DD
git add <các file đã sửa>
git commit -m "🏛️ Ban điều hành AI — cải tiến YYYY-MM-DD"
```

Mở PR bằng GitHub MCP tools (mcp__github__create_pull_request):
- Tiêu đề: `🏛️ Ban điều hành AI — cải tiến YYYY-MM-DD`
- Body: liệt kê item đã xử lý (ID + tiêu đề), file đã thay đổi, kết quả `node --check`.
- KHÔNG commit thẳng vào `main`. KHÔNG force-push.

### Bước 7 — Cập nhật inbox

Sau khi PR được tạo, cập nhật `ai-board/inbox.json`: set `status → 'done'`, thêm `pr_url` và `processed_at` cho các item đã xử lý. Commit thêm vào nhánh hiện tại.

### Bước 8 — Nếu không làm gì

Nếu inbox rỗng VÀ không tìm được khoảng trống nội dung nào: ghi 1 dòng kết luận, KHÔNG tạo PR rỗng.

---

## Ràng buộc tuyệt đối

- KHÔNG gọi bất kỳ URL production nào (không `curl`, không `fetch` tới server ngoài).
- KHÔNG sửa `server/`, `Dockerfile`, `docker-compose*.yml`, `.github/workflows/`, `public/js/engine/`.
- KHÔNG bịa dữ liệu yêu cầu — chỉ làm việc từ `ai-board/inbox.json` hoặc khoảng trống thực tế trong codebase.
- Giữ PR nhỏ, dễ review.

---

## Định dạng item trong inbox.json

```json
{
  "id": "req-001",
  "domain": "pharmacy",
  "type": "theory",
  "title": "Thêm quiz về dược động học",
  "detail": "Sinh viên muốn thêm câu hỏi về các thông số AUC, Cmax, Tmax",
  "votes": 5,
  "created_at": "2026-06-20T08:00:00Z",
  "status": "pending"
}
```

Sau khi xử lý, AI board thêm:
```json
{
  "status": "done",
  "pr_url": "https://github.com/lampx83/eduverse/pull/42",
  "processed_at": "2026-06-25T03:00:00Z"
}
```
