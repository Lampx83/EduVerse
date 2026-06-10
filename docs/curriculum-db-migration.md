# Migrate content học sang DB (curriculum_content)

Trước đây toàn bộ content học (đề quiz + lý thuyết tuần) **hardcode trong
`public/js/scenarios/lop*/*.js`** và FE import trực tiếp. Đã migrate sang DB để
sửa nóng + admin CRUD mà không cần deploy lại.

## 2 kho content trong DB
- **`curriculum_content`** — scenario tuần học (quiz + lý thuyết). Seed:
  `seed-curriculum.mjs`. API `/api/curriculum/*`.
- **`content_datasets`** (collection, item_key, body) — MỌI data heterogeneous
  khác. Seed: `seed-content.mjs`. API `/api/content/:collection`. Collections:
  history-characters, patient-cases, math2-topics, math6-topics, negotiation,
  osce-exam, math6-chapters, drug-catalog (180 thuốc), lab-recipes, lab-reagents,
  provinces (63 tỉnh), pronunciation. Nguồn seed ở `public/js/scenarios/_data/`
  (+ vài file gốc còn vai khác như lab-recipes, secondary-math6-lessons).
  → File `*-vn.js`/loader giờ logic-only fetch DB; trang `await loadXxx()`.

⚠️ **Deploy phải seed CẢ HAI** trên prod: `seed-curriculum.mjs` + `seed-content.mjs`
(không còn fallback JS cho data đã migrate).

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

## Tiến độ (Phase)
- **2** ✅ bảng + API + seed script.
- **3** ✅ FE prime per-module từ DB (fallback JS).
- **4** ✅ admin UI sửa nóng (admin-curriculum.html).
- **5a** ✅ cột domain+grade tuyệt đối + API `/grade/:domain/:grade`.
- **5b** ✅ space.html pool đọc API (bỏ `import(lopN)`).
- **5d** ✅ `scenarios/index.js` **logic-only** — bỏ ~30 import content. Bulk
  content (4963 scenario, ~19MB) **không còn bundle**; browser nạp qua API
  per-module. Nguồn seed gốc tách sang `_all-content.js` (chỉ seed script import).

### Còn lại (KHÔNG bắt buộc — content chuyên biệt theo mini-app, KHÁC bulk)
Các trang sau import file data RIÊNG (không phải scenario chuẩn, không nằm trong
curriculum_content). Mỗi cái là cấu trúc dữ liệu riêng của 1 mini-app → muốn đưa
vào DB phải thiết kế schema riêng từng loại:
- `patient-sim.html` → patient-cases-vn.js (ca lâm sàng)
- `history-vn.html` → history-characters-vn.js (nhân vật lịch sử)
- `math-fun.html` → math2-fun.js, math6-quest.js (chủ đề game toán)
- `subject.html` → secondary-math6-lessons.js (MATH6_CHAPTERS)
- `GC07-osce-championship.html` → year5.js (L57_OSCE_EXAM)
- `L3-3-tuong-tac.html` → L3.3-…js (demo tương tác thuốc)

Bulk **curriculum** (quiz + lý thuyết tuần K-12 + Dược) đã ở DB. Mini-app data
trên là phạm vi migrate riêng nếu cần.

## Lưu ý
- Sau Phase 5d: browser **không tải 19MB content** nữa — nạp per-module/grade từ
  DB. File JS content còn trong repo nhưng chỉ là **nguồn seed**, không trang FE
  nào import (trừ mini-app chuyên biệt ở trên).
- Câu quiz lỗi (vd `H12HOA-w33`) giờ sửa được qua UI mà không cần deploy.
- **CHƯA seed prod** — phải chạy seed-curriculum.mjs trên prod thì FE prod mới
  đọc DB. Chưa seed → API trả rỗng → FE… **lưu ý**: sau 5d KHÔNG còn fallback JS
  cho bulk, nên **BẮT BUỘC seed prod trước khi deploy** Phase 5, nếu không content
  K-12 sẽ trống trên prod. (module.html primeModuleFromDB rỗng → getScenariosForModule
  trả [] → stub.) Xem cảnh báo này kỹ khi go-live.
