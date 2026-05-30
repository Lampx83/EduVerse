# EduVerse — Hạ tầng on-premise (4 server, ~1 tỷ VND)

> **Phục vụ:** 30k MAU / 1k concurrent (peak 2k) / 100GB DB-năm
> Phục vụ các trường phổ thông + 3 đại học, deploy trong VN.
> Xem kiến trúc tổng quan ở [ARCHITECTURE.md](ARCHITECTURE.md).

---

## 1. Phân bổ server (~1 tỷ VND)

| # | Vai trò | Spec đề xuất | Cost ước (VND) |
|---|---|---|---|
| **1** | **App + Redis + MinIO + Caddy** | 32 core / 128GB RAM / 2TB NVMe RAID-1 + 10GbE | ~250-300tr |
| **2** | **Postgres primary** | 32 core / 128GB RAM / 4TB NVMe RAID-10 + 10GbE | ~250-300tr |
| **3** | **Analytics + Obs + IdP** | 16 core / 64GB RAM / 2TB NVMe + 1GbE | ~120-180tr |
| **4** | **Postgres standby + backup repo** | 32 core / 128GB RAM / 4TB NVMe RAID-10 | ~250-300tr |
| - | Switch 10GbE 24-port + UPS 3kVA + spare HDD 8TB ×2 | - | ~50-80tr |
| **Tổng** | | | **~920tr – 1.16 tỷ** |

**Brand đề xuất:** Dell PowerEdge R7625 / HPE ProLiant DL385 Gen11 / Supermicro AS-2125HS — chọn 1 vendor để đồng nhất.

## 2. Network topology

```
                    [Internet]
                         │
                 ┌───────▼────────┐
                 │  Cloudflare    │  CDN free + WAF + DDoS
                 │  (free tier)   │  cache GLB/static
                 └───────┬────────┘
                         │ HTTPS 443
                 ┌───────▼─────────┐
                 │   Server #1     │  Caddy:443
                 │   10.0.0.10     │  → Node :8041 (x4 worker)
                 │  App + Cache    │  + Redis :6379 + MinIO :9000
                 └───┬─────────────┘
                     │ private LAN 10.0.0.0/24, 10GbE
       ┌─────────────┼─────────────┐──────────────┐
       │             │             │              │
   ┌───▼───┐    ┌────▼───┐    ┌────▼────┐    ┌───▼───┐
   │ #2    │    │  #3    │    │  #4     │    │ Switch │
   │ PG    │    │  Obs   │    │  PG     │    │ + UPS  │
   │primary│←───┤        │    │ standby │    │        │
   │:5432  │    │ Posthog│    │:5432    │    │        │
   │       │    │ Grafana│    │ +backup │    │        │
   │       │    │ Keycloak│   │  repo   │    │        │
   └───────┘    └────────┘    └─────────┘    └────────┘
```

**Firewall:** chỉ Server #1 expose :443 ra Internet. Server #2/#3/#4 chỉ accept 10.0.0.0/24.

## 3. Phần mềm trên mỗi server

### Server #1 — App tier
- **OS:** Ubuntu 24.04 LTS (server)
- **Container runtime:** Docker + Docker Compose v2
- **Reverse proxy:** Caddy 2.x (TLS Let's Encrypt qua Cloudflare DNS-01)
- **App:** Node 20 LTS, cluster mode 4-8 worker
- **Cache:** Redis 7 (persistent AOF, RDB snapshot mỗi 5 phút)
- **Object storage:** MinIO `RELEASE.2024.x` (single-node multi-drive)
- **Monitoring agent:** `node_exporter` + `cadvisor` (Prometheus scrape target)
- **System hardening:** UFW + fail2ban + unattended-upgrades

### Server #2 — Postgres primary
- **OS:** Ubuntu 24.04 LTS
- **Database:** Postgres 16 + `pgvector` extension
- **Backup tool:** pgBackRest (incremental mỗi 4h, full hàng tuần)
- **Observability:** `pg_stat_statements`, `pg_stat_monitor`, `postgres_exporter`
- **Tuning:** `shared_buffers=32GB`, `effective_cache_size=96GB`, `work_mem=64MB`, `wal_level=replica`
- **Replication:** streaming primary → Server #4 standby

### Server #3 — Analytics + Observability + IdP
- **OS:** Ubuntu 24.04 LTS
- **Containers** (Docker Compose):
  - **PostHog** self-host (ClickHouse + Kafka mini embedded) — analytics, A/B, replay
  - **Grafana** + **Loki** + **Prometheus** + **Promtail** — log/metric/dashboard
  - **Sentry** self-host — error tracking
  - **Metabase** — BI dashboard cho non-tech
  - **Keycloak** single-node (DB pointing tới Server #2 Postgres) — IdP + SSO broker
- **RAM allocation:** PostHog ~24GB, Sentry ~8GB, Grafana stack ~8GB, Keycloak ~4GB, headroom ~20GB

### Server #4 — Postgres standby + backup repository
- **OS:** Ubuntu 24.04 LTS
- **Postgres:** streaming replica (hot standby) — đọc-only, sẵn sàng promote
- **pgBackRest repository:** nhận incremental từ Server #2
- **Offsite sync:** nightly rsync → cloud (B2/R2/GCS) encrypted với `age`
- **Failover:** thủ công Phase 1, tự động (Patroni) Phase 3

## 4. Install outline

```bash
# ────────── All servers: baseline ──────────
apt update && apt upgrade -y
apt install -y curl wget vim ufw fail2ban unattended-upgrades chrony
systemctl enable --now chrony

# SSH key-only
sed -i 's/^#PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd

# UFW: chỉ allow 22 từ LAN
ufw allow 22/tcp from 10.0.0.0/24
ufw enable

# ────────── Server #1: App ──────────
curl -fsSL https://get.docker.com | sh
ufw allow 80,443/tcp
mkdir -p /opt/eduverse && cd /opt/eduverse
# git clone <repo> .
# docker compose up -d  (Caddy + Node + Redis + MinIO)

# ────────── Server #2: Postgres primary ──────────
apt install -y postgresql-16 postgresql-16-pgvector pgbackrest
# Edit /etc/postgresql/16/main/postgresql.conf:
#   shared_buffers = 32GB
#   effective_cache_size = 96GB
#   wal_level = replica
#   max_wal_senders = 5
#   archive_mode = on
#   archive_command = 'pgbackrest --stanza=eduverse archive-push %p'
# Edit pg_hba.conf: allow replica từ 10.0.0.14 (Server #4)
systemctl restart postgresql

# ────────── Server #3: Analytics stack ──────────
curl -fsSL https://get.docker.com | sh
mkdir -p /opt/obs && cd /opt/obs
# Tạo docker-compose.yml: posthog + grafana + loki + prometheus + sentry + keycloak + metabase
# docker compose up -d

# ────────── Server #4: PG standby + backup ──────────
apt install -y postgresql-16 pgbackrest
# pg_basebackup từ Server #2:
sudo -u postgres pg_basebackup -h 10.0.0.11 -D /var/lib/postgresql/16/main -U replicator -P -R
# Tạo standby.signal, primary_conninfo trong postgresql.auto.conf
systemctl restart postgresql
```

## 5. Backup strategy

| Data | Tần suất | Target | Retention | Encrypt |
|---|---|---|---|---|
| Postgres WAL | Liên tục | Server #4 pgBackRest | 30 ngày | Yes |
| Postgres full | Hàng tuần | Server #4 | 90 ngày | Yes |
| Postgres → offsite | Hàng ngày | Cloud (B2/R2/GCS) | 1 năm | Yes (`age`) |
| MinIO assets | Hàng ngày | Server #4 mirror + offsite | 90 ngày | Yes |
| Redis AOF | Liên tục | Local SSD | 7 ngày | No (cache) |
| Config (compose, Caddy) | Theo commit | Git repo + Server #4 | mãi mãi | Yes |
| App logs (Loki) | Liên tục | Server #3, archive Server #4 | 90 ngày local, 1 năm archive | Yes |

## 6. Monitoring & Alerting

### Uptime
- **External:** UptimeRobot free tier ping `https://<domain>/api/health` mỗi 30s từ 5 location
- **Internal:** Caddy health check tới Node, Node check Redis + Postgres on startup

### Grafana alert rules (qua Telegram + email)
| Alert | Trigger | Severity |
|---|---|---|
| App CPU >85% trong 5 phút | Node CPU usage | High |
| Postgres replication lag >30s | `pg_stat_replication` | High |
| Postgres slow query >2s | `pg_stat_statements` | Medium |
| Disk usage >80% (bất kỳ server) | `node_filesystem_avail` | High |
| 5xx rate >1% trong 1 phút | Caddy access log → Loki | Critical |
| Redis memory >80% | `redis_memory_used_bytes` | Medium |
| BullMQ queue depth >1000 | `prom-client` gauge | Medium |
| MinIO disk usage >75% | `minio_disk_used` | Medium |

### Sentry alerts
- Mọi unhandled exception → Slack/Telegram
- Performance regression (p95 latency tăng 2x) → email

## 7. Security baseline

- [ ] UFW + fail2ban trên mọi server
- [ ] SSH key-only, disable password login
- [ ] Postgres bind 10.0.0.0/24 only, KHÔNG public
- [ ] Caddy TLS 1.3 only, HSTS preload, OCSP stapling
- [ ] Cloudflare WAF rules (SQL injection, XSS, bot)
- [ ] Secret management: Doppler/Infisical (Phase 1) — 0 secret trong git
- [ ] Audit log SSH access → Loki
- [ ] Backup encrypted (`age` hoặc gpg) trước khi gửi offsite
- [ ] OS unattended-upgrades cho security patch
- [ ] Network segmentation: chỉ Server #1 có route ra Internet outbound (qua egress proxy)

## 8. Disaster Recovery

| Scenario | Recovery procedure | RTO mục tiêu | RPO mục tiêu |
|---|---|---|---|
| Server #1 (app) die | Spin up app stack trên Server #3 (có headroom), restore Redis từ snapshot | 2h | 5 phút |
| Server #2 (PG primary) die | Promote Server #4 → primary, app reconnect; rebuild standby mới | 30 phút | <1 phút |
| Cả Server #2 + #4 die | Restore từ offsite backup encrypted | 8h | 24h |
| MinIO corrupt | Restore từ Server #4 mirror | 4h | 24h |
| Cloudflare down | DNS bypass: A record trực tiếp IP Server #1 | 1h | 0 |
| Power outage cả phòng máy | UPS giữ 30 phút cho graceful shutdown, sau đó cold restart khi có điện | 2-4h | <30s |

**DR drill:** quarterly tabletop + annual real drill (kill primary, đo failover, restore).

## 9. Scaling triggers

| Metric | Threshold | Hành động |
|---|---|---|
| App CPU sustained >70% trong 1 tuần | Caddy log + Prometheus | Thêm Node worker hoặc App server thứ 2 |
| Postgres slow query >500ms (top 10) | pg_stat_statements weekly report | Index, query rewrite, hoặc upgrade RAM |
| Redis memory >80% | Redis info | Tăng maxmemory hoặc shard |
| MinIO disk >75% | MinIO admin | Thêm disk hoặc archive cold → cloud Glacier |
| Concurrent WS >1500 sustained | Prometheus gauge | Thêm WS instance + sticky LB |
| AI inference queue >100 | BullMQ stats | Scale Ollama GPU hoặc throttle per-tenant |

## 10. Cost vận hành ước tính (sau khi mua server)

| Khoản | Cost/tháng (VND) |
|---|---|
| Điện 4 server + UPS + switch (~600W liên tục) | ~1.5-2tr |
| Internet leased line 100Mbps + IP tĩnh | ~3-5tr |
| Cloudflare (free tier) | 0 |
| Offsite backup B2/R2 (~500GB) | ~250k |
| Domain + DNS + email | ~200k |
| Monitoring SaaS bổ sung (UptimeRobot free, Sentry self-host) | 0 |
| Misa eInvoice (Phase 1, theo gói) | ~500k-1tr |
| **Tổng ước tính** | **~6-9tr/tháng** |

So với cloud full (AWS/GCP) cho 30k MAU = ~$3-5k/month (~75-125tr/tháng) → on-prem **tiết kiệm ~10-20x** sau khi mua server, ROI ~6-12 tháng.

## 11. Roadmap nâng cấp hạ tầng

- **Phase 1:** không cần thêm server, tận dụng 4 box hiện có
- **Phase 2:** có thể thêm RAM Server #3 nếu PostHog ngốn (option: +64GB ~30tr)
- **Phase 3:**
  - Thêm Server #5 cho WebRTC SFU (LiveKit) nếu VR voice nhiều người: ~150tr
  - Thêm GPU cho Ollama (RTX 4090 / A100) nếu AI workload tăng: ~50-300tr
  - Có thể di chuyển 1 phần sang colocation (DC chuyên nghiệp) nếu uptime requirement cao

## 12. Anchors

- Kiến trúc tổng quan: [ARCHITECTURE.md](ARCHITECTURE.md)
- Migration plan chi tiết: [MIGRATION-PLAN.md](MIGRATION-PLAN.md)
