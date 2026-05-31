# Tizia — "Không dùng framework" có vấn đề gì không?

> Câu hỏi: Tizia dùng **Express thuần + better-sqlite3 + vanilla JS** (không Nest/
> Next/Fastify, không ORM, không validation lib). Ở quy mô 30k MAU thì có sao không?
> **Kết luận ngắn: KHÔNG cần đổi sang framework nặng. Nhưng "thiếu kỷ luật framework"
> đã tạo ra vài rủi ro THẬT — vá bằng vài middleware mỏng, không cần rewrite.**

---

## 1. Express đã là framework (mỏng) — giữ là đúng

| Tiêu chí | Express thuần | Nest/Next | Đánh giá |
|---|---|---|---|
| Tốc độ dev ed-tech | Cao | Trung bình (boilerplate) | Giữ Express |
| SSR + SEO | HTML thuần thắng | Next phức tạp hơn | Giữ |
| Học/onboard dev mới | Dễ | Dốc | Giữ |
| Hiệu năng | Tốt (better-sqlite3 sync nhanh) | Tương đương | Giữ |
| Build pipeline | Không cần | Bắt buộc | Giữ |

→ Đổi sang Nest/Next **không** giải quyết vấn đề thật, chỉ thêm phức tạp. Giữ Express.

## 2. Rủi ro THẬT do thiếu kỷ luật (cần vá)

| # | Vấn đề | Hệ quả ở scale | Vá (không cần framework) |
|---|---|---|---|
| R1 | **`index.js` god-file** (~40 route 1 file) | Merge conflict liên tục (đã xảy ra khi user + Claude sửa song song), khó điều hướng | **Context pattern** (đang làm) + registry khi `index.js` ổn định — xem §3 |
| R2 | **Không có lớp validation** (mỗi route tự `String(x).slice()`) | Bug input/security rải rác, không nhất quán | Helper `validate()` nhỏ (hoặc `zod` — 1 dep gọn) |
| R3 | **Migration kiểu `try{ALTER}catch{}`** | Không version, không rollback, dễ lệch giữa máy | **Migration runner** versioned (SQL files + bảng `schema_migrations`) |
| R4 | 🔴 **Cookie auth KHÔNG có CSRF token** | **Lỗ hổng CSRF** — site khác có thể POST thay user | **CSRF double-submit token** (đã vá — xem `contexts/security`) |
| R5 | 🔴 **Không rate limit** | DoS / brute-force login / spam AI | **Rate limiter** in-memory (đã vá) |
| R6 | 🔴 **Thiếu security headers** | XSS/clickjacking/MIME-sniff | **Security headers** middleware (đã vá) |
| R7 | Raw SQL (không ORM) | — | **KHÔNG phải vấn đề.** Raw SQL nhanh + tường minh. Giữ. |
| R8 | Không OpenAPI/contract | Khó cho client/đối tác | Sinh OpenAPI từ registry (sau, nếu cần) |

**R4–R6 là bảo mật, ưu tiên cao** — chính là những thứ một framework "tặng kèm" mà
ta đang thiếu. Đã vá trong đợt này bằng `server/contexts/security/` (mỏng, không lib ngoài).

## 3. Đã vá đợt này

### Security middleware (`server/contexts/security/`)
- **Rate limit** (R5): in-memory sliding window theo IP + theo route nhạy cảm
  (login/register/AI). Vượt → 429. Cấu hình qua env.
- **Security headers** (R6): `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`, CSP cơ bản (nới cho importmap/unpkg three.js).
- **CSRF** (R4): double-submit cookie token. Cấp token ở `/api/csrf`, client gửi lại
  qua header `X-CSRF-Token`; verify cho POST/PUT/DELETE dùng cookie auth. Webhook
  (chữ ký HMAC) + Bearer được miễn.

### Context pattern + registry đề xuất (R1)
Đã tách dần sang `server/contexts/<x>/` (identity, payment, ai-agent, seo, analytics,
billing, integration, security, admin). Khi `index.js` ổn định, gom mount vào 1 registry:

```js
// server/contexts/registry.js (đề xuất — adopt khi index.js hết bị sửa song song)
export function mountContexts(r, app, { basePath, publicDir }) {
  attachSecurity(r); attachAnalytics(r); attachBilling(r);
  attachIntegration(r); attachAdmin(r); /* ... */
}
// index.js: thay 20 dòng attach* bằng → mountContexts(r, app, { basePath: BASE_PATH, publicDir: PUBLIC_DIR });
```
→ hết god-file + hết merge-conflict khi thêm context. (Chưa ship file để tránh phân kỳ
với `index.js` đang được sửa.)

## 4. CHƯA vá (kỷ luật, làm dần — không gấp)

- **R2 validation lib**: cân nhắc `zod` khi API nhiều hơn. Hiện helper thủ công đủ.
- **R3 migration runner**: cần khi cutover Postgres (Phase 1) — gắn với
  `migrations/postgres/`. Sẽ thêm bảng `schema_migrations` + runner.
- **R8 OpenAPI**: khi mở API cho đối tác.

## 5. Khi NÀO mới cân nhắc framework nặng?

| Tín hiệu | Cân nhắc |
|---|---|
| Team > 8 dev, cần convention cứng | NestJS (DI, module, guard) |
| Cần SSR React phức tạp + SEO động nhiều | Next.js cho 1 phần FE marketing |
| API cực nhiều + cần type-safe e2e | tRPC / Fastify + TypeBox |

Hiện Tizia **chưa chạm** ngưỡng nào. Express + context pattern + middleware vá là đủ
tới ~vài chục nghìn DAU.

## 6. Anchors
- Security: [server/contexts/security/index.js](../server/contexts/security/index.js)
- Registry: [server/contexts/registry.js](../server/contexts/registry.js)
- Kiến trúc: [ARCHITECTURE.md](ARCHITECTURE.md) · Trạng thái: [GAP-STATUS.md](GAP-STATUS.md)
