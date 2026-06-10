# Migrate content học sang DB (curriculum_content)

Trước đây toàn bộ content học (đề quiz + lý thuyết tuần) **hardcode trong
`public/js/scenarios/lop*/*.js`** và FE import trực tiếp. Đã migrate sang DB để
sửa nóng + admin CRUD mà không cần deploy lại.

## Kiến trúc mới

```
File JS scenario (nguồn gốc, versioned git)
        │  seed-curriculum.mjs (đọc ALL_SCENARIOS)
        ▼
curriculum_content (DB)  ──►  /api/curriculum/module/:id, /:id  ──►  FE primeModuleFromDB()
        ▲                                                                   │ ghi đè ALL_SCENARIOS[id]
        │  admin sửa (source='admin')                                       ▼
admin-curriculum.html  ──►  PUT /api/curriculum/:id              getScenariosForModule() (sync)
```

- **`server/contexts/curriculum/index.js`** — bảng `curriculum_content`
  (id, subject, year_level, semester, week, kind, title, body JSON, source,
  active). API đọc public, PUT/POST/DELETE `requireAdmin`.
- **`server/scripts/seed-curriculum.mjs`** — nạp 4963 scenario từ JS vào DB.
  Idempotent; **không đè** bản `source='admin'` (giữ sửa tay).
- **FE** `public/js/scenarios/index.js` → `primeModuleFromDB(moduleId)`: fetch DB
  rồi ghi đè `ALL_SCENARIOS[id]`. Best-effort — API lỗi/chưa seed → dùng bản JS
  bundled (app không bao giờ vỡ). `module.html` gọi trước khi render.
- **Admin UI** `public/admin-curriculum.html` (link từ tab dashboard
  "✏️ Sửa nội dung").

## `source` (nguồn bản ghi)
- `seed` — sinh từ file JS. Re-seed ghi đè được.
- `admin` — sửa tay qua UI. Re-seed **KHÔNG** đè.
- `ai` — (tương lai) AI sinh thêm lúc chạy.

## Seed lần đầu / cập nhật content gốc

Sau khi sửa file JS scenario (thêm môn, sửa đề), chạy seed để đẩy vào DB:

```bash
# Local
node server/scripts/seed-curriculum.mjs --dry   # xem trước, không ghi
node server/scripts/seed-curriculum.mjs          # seed thật
```

### Trên PROD (theo quy ước: mọi DB work trên prod)
```bash
ssh tizia-prod
docker exec <container_tizia> node server/scripts/seed-curriculum.mjs
```
> ⚠️ Nên `tizia-backup-now.sh pre-curriculum-seed` trước khi seed lần đầu.
> Re-seed an toàn với bản admin (không đè), nhưng vẫn nên backup.

## Khôi phục 1 bài về bản gốc (gỡ sửa tay)
```sql
DELETE FROM curriculum_content WHERE id = 'H10TOAN-w01-quiz';
-- rồi chạy lại seed-curriculum.mjs → bản gốc từ JS được nạp lại
```

## Lưu ý
- JS bundle **vẫn được tải** (import giữ nguyên làm fallback). Win hiện tại là
  **sửa nóng**, chưa phải giảm bundle size. Bước sau có thể lazy-load để bỏ JS.
- Câu quiz lỗi (vd `H12HOA-w33`) giờ sửa được qua UI mà không cần deploy.
