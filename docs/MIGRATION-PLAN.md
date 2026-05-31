# Tizia — Kế hoạch Migration 4 Phase

> **Phương châm:** KHÔNG rewrite, migrate từng "trần" gặp phải.
> Mỗi phase deploy độc lập, có rollback path, có exit criteria rõ ràng.
> Xem kiến trúc đích ở [ARCHITECTURE.md](ARCHITECTURE.md), hạ tầng ở [INFRA.md](INFRA.md).

---

## Tổng quan

| Phase | Tên | Trigger | Man-day | Risk | Trạng thái |
|---|---|---|---|---|---|
| **0** | Foundation refactor | NGAY | 3-5 | Low | Đang làm |
| **1** | Postgres + Payment + IdP | Pilot trường thứ 2 / payment go-live | 25-35 | Medium | Pending |
| **2** | Scale-out + Analytics | ~1k DAU sustained | 20-30 | Medium | Pending |
| **3** | Enterprise + HA | SLA 99.9% / khách trả tiền lớn | 30-50 | High | Pending |
| **Tổng** | | | **~80-120 man-day** | | |

Với 1-2 dev fulltime → kế hoạch ~3-6 tháng từ Phase 0 đến Phase 3.

---

## Phase 0 — Foundation refactor

**Mục tiêu:** sạch nhà, đặt foundation cho mọi thứ sau, KHÔNG phá gì.

### Exit criteria
- [x] Repo clean (4 commit gọn từ dirty tree)
- [x] Baseline server boots OK
- [ ] Docs (`ARCHITECTURE`, `MIGRATION-PLAN`, `INFRA`) đầy đủ
- [ ] Schema có `schools` table + `school_id` mọi entity table (additive)
- [ ] AI usage quota table + middleware (rate limit per-tenant)
- [ ] PoC bounded-context: 1 context (identity) đã move sang `server/contexts/`
- [ ] Smoke test pass sau changes

### Checklist code
- [x] Commit 1: bỏ pharmacy-ai/ legacy + chuyển SEGUE proxy → app-proxy chung
- [x] Commit 2: feat(auth) — login local + SSO Google/MS/GitHub
- [x] Commit 3: refactor(auth) — tách auth-header component
- [x] Commit 4: feat — nội dung mới Lớp 2 + IT lab + campus THPT
- [ ] Commit 5: docs Phase 0 (ARCHITECTURE, MIGRATION-PLAN, INFRA)
- [ ] Commit 6: schema `schools` + `school_id` migration
- [ ] Commit 7: AI usage quota infrastructure
- [ ] Commit 8: refactor PoC `server/auth.js` → `server/contexts/identity/`

### Rollback
Mỗi commit nhỏ, độc lập. `git revert <sha>` nếu lỗi. Không có DB migration phá huỷ data hiện có (schema chỉ ADD column với DEFAULT).

---

## Phase 1 — Postgres + Payment + IdP

**Trigger:** chuẩn bị onboard trường thứ 2 / payment go-live / đăng ký khách enterprise đầu tiên.

**Man-day:** 25-35.

### Exit criteria
- [ ] Postgres production primary đã chạy, SQLite chỉ còn dev
- [ ] Postgres RLS enforce tenant isolation, verify bằng integration test
- [ ] VNPay payment flow end-to-end (charge + webhook + reconciliation)
- [ ] E-invoice tự sinh khi B2B charge thành công
- [ ] Keycloak self-host, ít nhất 1 trường ĐH login qua SSO
- [ ] Doppler/Infisical: 0 secret trong git, 0 secret trong container image
- [ ] Webhook Inbox + Outbox patterns hoạt động

### Checklist
- [ ] **Refactor đầy đủ** `server/` → 8 bounded contexts (`server/contexts/<name>/`)
- [ ] Tạo `server/core/db.js` interface — current = SQLite, sẵn sàng swap Postgres
- [ ] **Migration SQLite → Postgres**:
  - [ ] Script dump SQLite → SQL Postgres compat
  - [ ] Drizzle hoặc raw SQL migration files versioned
  - [ ] Dry run trên staging với production-like data
  - [ ] Cutover plan + rollback script (snapshot SQLite trước)
- [ ] **Postgres RLS policy** theo `school_id` + integration test
- [ ] **`server/contexts/payment/`**:
  - [ ] Schema: `invoices`, `payments`, `refunds`, `ledger_entries`, `webhook_inbox`
  - [ ] VNPay adapter: redirect + IPN webhook + signature verify
  - [ ] MoMo adapter
  - [ ] Internal ledger double-entry
  - [ ] Reconciliation cron hàng ngày
- [ ] **E-invoice**: Misa hoặc VNPT eInvoice API integration
- [ ] **Keycloak self-host** trên Server #3:
  - [ ] Broker SSO Google + Azure AD + SAML (cho ĐH có hệ thống cũ)
  - [ ] User federation từ LDAP nếu cần
  - [ ] Migrate user hiện tại từ `users` table → Keycloak realm
- [ ] **Secrets management** (Doppler hoặc Infisical self-host):
  - [ ] Lấy mọi `process.env.*` ra ngoài `.env` của container
  - [ ] Rotate keys schedule
- [ ] **Webhook Inbox + Outbox pattern**:
  - [ ] Bảng `inbox_events` (idempotency)
  - [ ] Bảng `outbox_events` + worker push
- [ ] **Postgres backup**: pgBackRest nightly → Server #4 + offsite encrypted

### Risk
- **Postgres cutover lỗi** → snapshot SQLite + rollback script đầy đủ + window cutover ngoài giờ học
- **Payment integration sai signature** → test sandbox 2 tuần trước go-live, dry-run reconciliation
- **Keycloak migration mất session user** → user phải đăng nhập lại 1 lần, thông báo trước

---

## Phase 2 — Scale-out + Analytics

**Trigger:** ~1k DAU sustained, hoặc bắt đầu chạy A/B test pricing/UX.

**Man-day:** 20-30.

### Exit criteria
- [ ] 2-3 Node instance chạy đồng thời, sticky WS qua Caddy
- [ ] Redis cluster handle session + queue + WS pub/sub
- [ ] BullMQ workers chạy AI Agent durable workflow
- [ ] PostHog dashboard có funnel + retention + A/B exposure
- [ ] Grafana dashboard cho HTTP latency, DB pool, queue depth
- [ ] Per-tenant AI usage cap enforce + alert
- [ ] MinIO offload `/public/models/*.glb`

### Checklist
- [ ] **Redis cluster** trên Server #1 (session + BullMQ + WS pub/sub adapter)
- [ ] **Multi-instance Node app**: 2-3 process behind Caddy sticky session
- [ ] **AI Agent durable workflow** với BullMQ:
  - [ ] State machine cho task chạy lâu (>30s)
  - [ ] Retry policy + dead-letter queue
  - [ ] Resume khi worker crash
- [ ] **Per-tenant AI cost cap** enforce hard limit, alert 80%
- [ ] **MinIO self-host** trên Server #1:
  - [ ] Bucket structure: `tizia/{school_id}/models/`, `tizia/{school_id}/user-uploads/`
  - [ ] Offload `/public/models/*.glb` (lift từ Node static)
  - [ ] Presigned URL cho user upload
- [ ] **PostHog self-host** trên Server #3:
  - [ ] SDK trong frontend track funnel event
  - [ ] Feature flag + A/B testing
  - [ ] Session replay (option, đắt storage)
- [ ] **Grafana + Loki + Prometheus** trên Server #3:
  - [ ] Pino structured log → Loki
  - [ ] `prom-client` metrics → Prometheus
  - [ ] Dashboard: HTTP latency p50/p95/p99, DB pool, queue depth, AI tokens
- [ ] **Sentry self-host** trên Server #3
- [ ] **Metabase** trỏ Postgres replica + PostHog ClickHouse
- [ ] **CDN Cloudflare** free cho static (JS, CSS, GLB)
- [ ] **SEO** (làm song song, không block):
  - [ ] Per-page meta + Open Graph unique
  - [ ] JSON-LD `Course`, `EducationalOrganization`
  - [ ] `GET /sitemap.xml` động
  - [ ] Lazy-load Three.js (chỉ khi vào game)
- [ ] **Per-tenant quota dashboard** cho admin trường

### Risk
- **WS sticky session sai** → user mất state mid-game. Test kỹ với 2 instance trước go-live.
- **BullMQ + Redis crash** → mất job. Persist queue config + DLQ.
- **PostHog ngốn RAM** → bắt đầu sample 10% nếu volume lớn.

---

## Phase 3 — Enterprise + HA

**Trigger:** SLA 99.9% commit / khách trả tiền lớn / >10k DAU sustained.

**Man-day:** 30-50.

### Exit criteria
- [ ] Postgres HA: primary + standby + auto-failover (Patroni)
- [ ] RPO < 1h, RTO < 4h được verify qua DR drill
- [ ] WebRTC SFU chạy ổn cho VR voice 10+ người chung phòng
- [ ] Audit log immutable trên S3 Object Lock
- [ ] Penetration test pass, compliance audit Nghị định 13 pass

### Checklist
- [ ] **Postgres HA**: Patroni + 3-node cluster (auto leader election, failover <30s)
- [ ] **WebRTC SFU** (LiveKit self-host):
  - [ ] Server riêng / cluster cho media
  - [ ] Integrate với WS room hiện tại (room state qua WS, voice qua SFU)
  - [ ] Test 10+ user chung phòng VR
- [ ] **Audit log immutable**:
  - [ ] MinIO Object Lock (WORM mode) hoặc S3 compliance mode
  - [ ] Log mọi action có legal/compliance impact
  - [ ] Retention policy theo Nghị định 13
- [ ] **GDPR/NĐ13 deletion pipeline**:
  - [ ] Soft delete + tombstone tự động propagate qua Postgres → PostHog → MinIO archive
  - [ ] SLA xóa <72h khi user yêu cầu
  - [ ] Dashboard cho admin theo dõi yêu cầu xóa
- [ ] **Vector DB tách** (nếu cần): pgvector → Qdrant khi >10M embeddings
- [ ] **ClickHouse cluster riêng** (nếu PostHog single-node không đủ)
- [ ] **Data residency confirm**: tất cả storage trong VN, không dùng cloud ngoài VN cho PII
- [ ] **Disaster recovery drill** quarterly:
  - [ ] Kill primary DB, đo failover time
  - [ ] Restore từ offsite backup, đo restore time
  - [ ] Tabletop exercise cho team
- [ ] **Penetration test** (vendor ngoài):
  - [ ] OWASP top 10
  - [ ] Cookie + session
  - [ ] OAuth flow + token leak
  - [ ] SQL injection / XSS / CSRF
- [ ] **Compliance audit**:
  - [ ] PCI-DSS (nếu xử lý card thật, không phải hosted)
  - [ ] Nghị định 13 self-assessment
- [ ] **Multi-region** (option): Cloudflare đã sẵn, thêm secondary site nếu cần

### Risk
- **Failover sai → split-brain** → Patroni + DCS (etcd/Consul) cấu hình kỹ
- **VR voice nghẽn** → bandwidth + codec test trước
- **Pen test phát hiện CVE chưa fix** → có budget cho retest

---

## Risk register (chung)

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Postgres cutover lỗi mất data | Low | High | Snapshot SQLite + dry run + rollback script |
| AI cost runaway (nếu chuyển cloud LLM) | Medium | High | Per-tenant cap NGAY từ Phase 0 |
| Webhook payment duplicate | Medium | High | Idempotency key bắt buộc, inbox table |
| Compliance NĐ13 vi phạm | Medium | Very High | Consent + deletion flow build-in từ Phase 1 |
| VR session storage cost bùng | Low | High | Opt-in recording, không default |
| Sticky WS lỗi khi scale-out | Medium | Medium | Test 2 instance kỹ trước Phase 2 go-live |
| Keycloak migration mất user | Low | High | Migrate batch, verify count, rollback path |

## Quyết định KHÔNG làm (cố ý tiết kiệm)

- ❌ K8s — Docker Compose + systemd đủ cho 3-4 box
- ❌ Microservices đầy đủ — bounded contexts trong cùng monorepo
- ❌ Snowflake / BigQuery — PostHog self-host đủ
- ❌ Kafka / Redpanda — Postgres LISTEN/NOTIFY + BullMQ đủ
- ❌ Cloudflare R2 cho assets — MinIO self-host trên server có sẵn
- ❌ Multi-region — thêm khi có khách ngoài VN

## Anchors

- Kiến trúc đích: [ARCHITECTURE.md](ARCHITECTURE.md)
- Hạ tầng on-prem: [INFRA.md](INFRA.md)
