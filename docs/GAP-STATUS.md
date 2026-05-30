# EduVerse — Trạng thái 8 yêu cầu (gap status)

> Ánh xạ 8 yêu cầu anh đề xuất → trạng thái thực tế trong code, sau các đợt
> Phase 0 + Phase 1 (scaffold) + Phase 1-real (tenant/AI/SEO).
> 🟢 chạy thật & verify · 🟡 một phần/scaffold · 🔴 chưa có · ⚪ kế hoạch (docs).

| # | Yêu cầu | Trước | Sau | Bằng chứng |
|---|---|---|---|---|
| 1 | Multi-tenant (30k MAU, nhiều trường) | 🔴 trang trí | 🟢 **enforce runtime** | Test 2 trường: leaderboard/requests/attempts cô lập; SSO email domain → school. Postgres RLS verify trên PG16. |
| 2 | Thanh toán | 🟡 | 🟡 scaffold | VNPay HMAC + ledger + IPN idempotency verify thật (OFF mặc định). Cần reconciliation/e-invoice. |
| 3 | Nhiều API tích hợp | 🟡 | 🟡 | Proxy 4 app + webhook inbox (payment). Cần outbox + adapter generic. |
| 4 | SEO tốt | 🔴 | 🟢 **foundation** | /robots.txt + /sitemap.xml động + /welcome crawlable (OG + JSON-LD), ngoài auth gate; app vẫn gated. |
| 5 | Mô hình KD lợi nhuận cao | 🟡 | 🟡 | AI cost quota + token log per-tenant. Cần funnel analytics (PostHog) + billing/subscription. |
| 6 | Data cực lớn | 🟡 | 🟡 | Thiết kế 4-tier (Postgres/PostHog/MinIO). Cần pipeline event (Phase 2). |
| 7 | AI Agent tự quyết định | 🔴 | 🟢 **decision + audit** | reviewAndDecideRequest: approve/reject/defer/priority + guardrail + ai_decisions audit trail. Verify end-to-end (rule fallback khi Ollama offline). |
| 8 | 3D/2D/XR/VR | 🟢 | 🟢 | Three.js + WebXR sẵn có. |

## Đã làm trong đợt này (Phase 1-real)

### #1 Multi-tenancy enforce ở runtime
- `server/contexts/identity/tenant.js`: middleware `attachTenant` → `req.schoolId`
  (từ `user.school_id`, rồi host→domain, fallback 1).
- Writes stamp `school_id` (attempts, classes, requests); reads lọc theo
  `school_id` (leaderboard, stats, histogram, recent, classes, requests).
- Register phân giải tenant: `schoolCode` → email domain (`resolveSchoolByEmail`) → 1.
- Bug đã sửa: `getCurrentUser` thiếu `school_id` (session) → isolation fail → fixed.
- **Verify**: 2 trường (NEU/HUST) — mỗi trường chỉ thấy data của mình. ✅

### #7 AI Agent decision engine + audit
- `server/contexts/ai-agent/decisions.js`: ra quyết định có cấu trúc
  (action/reason/public_note/priority/confidence), guardrail (reject confidence
  thấp → defer), audit trail bảng `ai_decisions`, áp vào status request.
- `AI_DECISION_AUTO_APPLY=0` → AI chỉ đề xuất, người duyệt.
- Routes: `GET /api/requests/:id/decisions`, `GET /api/ai-decisions`.
- **Verify**: submit request → quyết định logged + status applied + audit đọc được. ✅

### #4 SEO foundation
- `server/contexts/seo/index.js`: `/robots.txt`, `/sitemap.xml` (động theo trường),
  `/welcome` (landing công khai crawlable: title/description/OG/JSON-LD
  EducationalOrganization). Whitelist ngoài auth gate.
- Giải quyết lỗ hổng: auth gate trước đây redirect Googlebot → login.
- **Verify**: robots/sitemap/welcome 200 không cần login; sitemap XML valid;
  app home vẫn 302 gated. ✅

## Còn lại (ưu tiên Phase 1-real tiếp / Phase 2)

| Ưu tiên | Việc | Yêu cầu |
|---|---|---|
| Cao | Postgres cutover thật + `SET app.current_school_id` mỗi request (RLS enforce DB) | #1, #6 |
| Cao | Payment go-live: reconciliation cron + e-invoice + refund API + PCI/NĐ13 | #2 |
| Cao | Per-tenant AI cost dashboard + budget cap cứng (khi thêm cloud LLM) | #5 |
| TB | PostHog self-host: funnel `vào trường → thử → đăng ký → trả tiền` | #5 |
| TB | Subscription/gói học (billing) trên nền payment | #5 |
| TB | Webhook outbox + adapter generic cho 3rd-party API | #3 |
| TB | Event pipeline (app → PostHog/MinIO) | #6 |
| Thấp | Per-page meta/JSON-LD cho từng module + lazy-load Three.js (CWV) | #4 |
| Thấp | WebRTC SFU (LiveKit) cho VR voice nhiều người | #8 |

## Anchors
- Kiến trúc: [ARCHITECTURE.md](ARCHITECTURE.md) · Migration: [MIGRATION-PLAN.md](MIGRATION-PLAN.md)
- Payment: [PAYMENT.md](PAYMENT.md) · IdP: [IDP-SETUP.md](IDP-SETUP.md) · SEO: [SEO.md](SEO.md)
