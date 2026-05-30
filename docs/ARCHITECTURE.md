# EduVerse — Kiến trúc đích

> **Phục vụ:** ~30,000 MAU / 1,000 concurrent (peak 2,000) / 100GB DB-năm
> cho các trường phổ thông + 3 đại học.
> **Hạ tầng:** cluster 4-server on-premise (~1 tỷ VND). Xem [INFRA.md](INFRA.md).

---

## 0. Stack chính xác (framework vs thư viện vs vanilla)

Để không hiểu nhầm "không framework": EduVerse **CÓ** dùng framework ở backend —
là loại **micro**, không phải frameworkless.

| Tầng | Thành phần | Phân loại |
|---|---|---|
| Backend | **Express** | **Framework** (micro — điều phối request→route→middleware) |
| Backend | better-sqlite3, ws | Thư viện (ta gọi nó) |
| Frontend | HTML/CSS/JS thuần | **Vanilla** (KHÔNG UI framework: không React/Vue/Angular) |
| Frontend | Three.js, MediaPipe, importmap | Thư viện / native trình duyệt |

→ **Micro-framework (Express) ở backend + vanilla ở frontend.** Chủ đích KHÔNG dùng
framework **nặng/opinionated** (NestJS/Next.js/Django) — xem [NO-FRAMEWORK-REVIEW.md](NO-FRAMEWORK-REVIEW.md)
để biết vì sao giữ Express + đã vá những thứ framework nặng "tặng kèm" (CSRF, rate-limit, headers).

## 1. Nguyên tắc thiết kế

1. **Right-size, not big-tech.** 30k MAU là mid-size SaaS — KHÔNG cần ClickHouse cluster, Kafka, K8s.
2. **Single origin, multi-tenant.** Mọi trường share cùng infra qua `school_id` + Postgres RLS.
3. **Vanilla FE, embed-friendly.** HTML + Three.js + importmap; mỗi module 1 file độc lập (SEO win).
4. **Self-host first, cloud where it matters.** Tận dụng server đã có; chỉ CDN/WAF thuê ngoài (Cloudflare free).
5. **Compliance first.** Nghị định 13/2023 + e-invoice TT 78/2021 build-in từ Phase 1.

## 2. Layered diagram

```
┌─────────────────────────────────────────────────────────────┐
│  EDGE      Cloudflare (CDN free + WAF + DDoS + cache GLB)  │
├─────────────────────────────────────────────────────────────┤
│  GATEWAY   Caddy (TLS + sticky-WS + BASE_PATH + ratelimit) │
├─────────────────────────────────────────────────────────────┤
│  APP       Web/SSR · Realtime · AI Agent · Payment ·       │
│            Workers · Webhook In · Integrations (4 app)     │
├─────────────────────────────────────────────────────────────┤
│  DATA                                                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Postgres │ │  Redis   │ │  MinIO   │ │ PostHog  │       │
│  │ HOT OLTP │ │ cache    │ │ S3 self  │ │ WARM     │       │
│  │ + RLS    │ │ queue    │ │ assets   │ │ analytics│       │
│  │ +pgvector│ │ pub/sub  │ │ +backup  │ │ +A/B     │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
├─────────────────────────────────────────────────────────────┤
│  PLATFORM  Keycloak (IdP + SSO Azure AD) · Doppler        │
│            (secrets) · Grafana+Loki+Prom · Sentry          │
└─────────────────────────────────────────────────────────────┘
```

## 3. Phân lớp dữ liệu

| Tier | Tech | Mục đích | Volume kỳ vọng |
|---|---|---|---|
| **HOT** | Postgres 16 + pgvector | OLTP, current state, semantic search | <100GB |
| **WARM** | PostHog (ClickHouse embedded) | Analytics, event funnel, A/B, replay | TB-range |
| **COLD** | MinIO + Parquet | Archive event, audit log, media | TB-PB |
| **CACHE** | Redis 7 | Session, BullMQ queue, WS pub/sub | GB |

**Quy tắc vàng:** mỗi byte có ÍT NHẤT 1 home. Dùng CDC (pg_logical) hoặc app-level event publish để stream Postgres → PostHog/MinIO, KHÔNG dual-write thủ công.

## 4. 8 Bounded Contexts

| Context | Bảng chính | Path | Trách nhiệm |
|---|---|---|---|
| **Identity & Tenancy** | `schools`, `users`, `sessions`, `oauth_identities` | `server/contexts/identity/` | Auth, SSO, multi-tenant |
| **Catalog** | `lessons`, `scenarios`, `modules` | `server/contexts/catalog/` | Học liệu, kịch bản, module |
| **Learning** | `attempts`, `achievements`, `progress` | `server/contexts/learning/` | Lượt làm bài, huy hiệu, tiến độ |
| **Community** | `requests`, `votes` | `server/contexts/community/` | Inbox góp ý "Ban điều hành AI" |
| **AI Agent** | `ai_runs`, `ai_token_usage`, `ai_decisions` | `server/contexts/ai-agent/` | Workflow durable, audit, cost cap |
| **Payment** | `invoices`, `payments`, `refunds`, `ledger_entries` | `server/contexts/payment/` | VNPay/MoMo/ZaloPay + e-invoice |
| **Realtime** | `rooms`, `presence` | `server/contexts/realtime/` | WS game state, voice SFU (Phase 3) |
| **Integration Hub** | `webhook_inbox`, `outbox_events` | `server/contexts/integration/` | 4 app anh em, webhook 3rd-party |

**Quy tắc:** mọi cross-context giao tiếp qua **API/event**, KHÔNG share table trực tiếp. Mỗi context có thể extract thành microservice sau (Phase 3) mà không sửa caller.

## 5. Multi-tenancy

- **Model:** Shared DB + `school_id INTEGER NOT NULL` trên mọi bảng entity + **Postgres RLS** (Phase 1).
- **Default school:** `id=1 'eduverse-default'` để legacy data có chỗ.
- **Tenant assignment:**
  - SSO: email domain → school (auto map, vd `*@neu.edu.vn` → NEU)
  - Local register: dropdown chọn trường + verify class-code
- **Isolation enforce 2 lớp:**
  1. App-level: mọi prepared statement bắt buộc `WHERE school_id = $1`
  2. DB-level: Postgres RLS policy theo `current_setting('app.current_school_id')`

## 6. Identity & SSO

| Method | Khi nào dùng | Trạng thái |
|---|---|---|
| Local (scrypt + cookie session) | Học sinh phổ thông, fallback | ✅ Đã có ([server/auth.js](../server/auth.js)) |
| OAuth: Google | Trường có Google Workspace | ✅ Đã có ([server/oauth.js](../server/oauth.js)) |
| OAuth: Microsoft Entra (Azure AD) | 3 ĐH thường có Microsoft 365 | ✅ Đã có |
| OAuth: GitHub | Khoa CNTT (dev, code review) | ✅ Đã có |
| SAML 2.0 | ĐH có hệ thống cũ (Phase 1) | ⏳ Roadmap |
| Keycloak broker | Phase 1 — unify 3 ĐH | ⏳ Phase 1 |

## 7. AI Agent layer

- **Hiện tại:** Ollama on-prem (`qwen2.5:14b-instruct-ctx16k`) — miễn phí token, có giới hạn throughput phần cứng.
- **Quota model:**
  - Track `(school_id, user_id, provider, model, tokens, cost_usd_micros, created_at)` mọi call
  - Cap **request/min per user** + **tokens/day per school** (configurable)
  - Block khi vượt → trả 429 + log alert
- **Audit trail bắt buộc:** input, prompt version, model, output, ai duyệt cuối (nếu có).
- **Workflow durable** (Phase 2): BullMQ + state table cho Agent task chạy lâu (>30s) — fail-safe, resumable.
- **Tương lai (Phase 3+):** có thể thêm cloud LLM (Claude/GPT) cho task khó; schema cost-tracking đã ready.

## 8. Realtime

- **Hiện tại:** WebSocket (`ws`) cho game state, leaderboard live, classroom presence.
- **Sticky session:** Caddy upstream theo IP hash → 1 user luôn về 1 Node instance (cần khi scale-out).
- **Phase 3:** WebRTC SFU (LiveKit self-host) cho VR voice nhiều người chung phòng — giữ WS cho game state, SFU cho media.

## 9. Payment (Phase 1)

- **Service riêng** (`server/contexts/payment/`) — schema riêng, có thể extract microservice sau.
- **Gateways VN:** VNPay (primary), MoMo, ZaloPay, OnePay. Stripe chỉ option cho khách nước ngoài.
- **E-invoice:** Misa/VNPT eInvoice integration (bắt buộc B2B theo TT 78/2021).
- **Internal ledger** double-entry: `charge → school_credit | student_balance`. Daily reconciliation cron match gateway.
- **Webhook là source of truth** (KHÔNG phải redirect URL). Bảng `webhook_inbox` + idempotency key bắt buộc.
- **Refund + chargeback** là first-class flow.

## 10. Observability

| Layer | Tool | Mục đích |
|---|---|---|
| Logs | **Pino** structured → **Loki** + Grafana | Search log per-school, per-request_id |
| Metrics | **prom-client** (Node) → **Prometheus** + Grafana | HTTP latency, DB pool, queue depth |
| Traces | **OpenTelemetry** (Phase 2) | Distributed trace AI Agent workflow |
| Errors | **Sentry** self-host | Unhandled exception, slow query alert |
| Events | **PostHog** self-host | User funnel, retention, A/B exposure |
| BI | **Metabase** đọc Postgres replica + PostHog CH | Dashboard cho non-tech |

## 11. SEO

Vanilla HTML server-rendered = đã thắng SPA. Cần thêm (Phase 2):
- Per-page meta + Open Graph unique cho từng module/trường/lesson
- JSON-LD `Course`, `EducationalOrganization`, `LearningResource`
- `GET /sitemap.xml` động từ DB
- Lazy-load Three.js (chỉ tải khi vào game thật)
- CDN Cloudflare cho `/public/models/*.glb` (free tier đủ)

## 12. Compliance VN

- **Nghị định 13/2023/NĐ-CP** (dữ liệu cá nhân):
  - Consent flow khi đăng ký + flow xóa data trong 72h khi yêu cầu
  - Đặc biệt nghiêm với học sinh <18 tuổi (cần consent cha mẹ)
- **TT 78/2021/TT-BTC** (hoá đơn điện tử): doanh nghiệp gần như bắt buộc dùng e-invoice từ 7/2022
- **Data residency:** server on-prem ở VN — confirm OK. MinIO local OK.

## 13. Quyết định KHÔNG làm (anti-architecture)

| ❌ Tránh | Lý do |
|---|---|
| K8s | 3-4 box → Docker Compose + systemd đủ, giảm ops complexity |
| Microservices đầy đủ | Bounded contexts trong cùng monorepo, extract khi có lý do thực |
| Snowflake / BigQuery | PostHog self-host (ClickHouse embed) đủ cho 30k MAU |
| Kafka / Redpanda | Postgres LISTEN/NOTIFY + BullMQ đơn giản gấp 10 lần |
| Cloudflare R2 (assets) | MinIO self-host trên server có sẵn, free |
| Multi-region | Chưa cần, thêm sau nếu có khách ngoài VN |
| React / Vue / Next | Vanilla HTML thắng SEO + đơn giản hơn cho ed-tech |
| Cloud LLM mặc định | Ollama on-prem miễn phí + privacy tốt cho giáo dục y dược |

## 14. File path anchors

- Entry: [server/index.js](../server/index.js)
- DB: [server/db.js](../server/db.js) (→ `server/core/db.js` sau Phase 1 refactor)
- Identity: [server/auth.js](../server/auth.js), [server/oauth.js](../server/oauth.js)
- AI: [server/ai.js](../server/ai.js), [server/orchestration.js](../server/orchestration.js)
- Realtime: [server/room.js](../server/room.js)
- Integrations: [server/app-proxy.js](../server/app-proxy.js)
- Frontend modules: `public/<module>.html` + `public/js/<module>.js`
- Sibling apps config: [public/js/integrations.js](../public/js/integrations.js)
