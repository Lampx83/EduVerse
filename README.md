# 💊 PharmacySIM

Hệ thống mô phỏng đào tạo kỹ năng **xếp thuốc theo nhóm điều trị** cho sinh viên Dược.
Hỗ trợ **MediaPipe Hand Tracking** (pinch ngón tay qua webcam) hoặc **chuột/touch** —
sinh viên mở thùng thuốc, kéo từng hộp lên đúng ô kệ. Backend lưu mọi lượt chơi
vào SQLite và xuất analytics cho giảng viên.

## 🎮 Các phiên bản đã có

| Phiên bản | URL | Mô tả |
|---|---|---|
| **2D Arcade** | `/2d-arcade.html` | Canvas 2D side-view, mở thùng → thuốc spring out → kéo lên kệ. Score + combo + timer + particle + SFX. MediaPipe hoặc chuột. |
| **3D Realistic** | `/3d-shelf.html` | Three.js scene 3D, thùng carton mở được, snap-to-slot, hover-halo xanh/đỏ + SFX. Hỗ trợ **WebXR hand tracking native** (Quest/Vision Pro), MediaPipe, chuột. Có welcome-card kiểu Unity + hover label hiện tên/dose/category khi rê chuột vào hộp thuốc. |
| **🌐 Metaverse** | `/metaverse.html` | Phòng dược 3D **realtime multiplayer** (WebSocket). Bạn thấy avatar người khác chuyển động, cùng xếp thuốc lên kệ. Hand tracking hoặc mouse. Có welcome-card + hover label. |
| **🧪 Phòng bào chế** | `/compounding-lab.html` | Mô phỏng pha chế **5 đơn thuốc** (Siro Paracetamol, Dung dịch VitC, Hỗn dịch Smecta, Cồn Iod, Siro ho thảo dược). PBR lighting + glass refraction, cân điện tử LCD số thật, fume hood, pipette stand, gloves box, sink+faucet, GMP poster. Pour stream animation. **Multiplayer realtime** (WebSocket `/ws-lab`): thấy cursor + tiến độ của bạn cùng lớp, có chat. |
| **🧠 Quiz nhanh** | `/quiz.html` | 10 câu multiple-choice, 15s/câu, streak bonus. Không cần webcam. |
| **📊 Dashboard Giảng viên** | `/dashboard.html` | Stats + histogram + top 10 + ma trận nhầm lẫn + export CSV (cho cả 4 mode) |
| Landing | `/` | Set tên SV, chọn độ khó, xem huy hiệu đã mở khóa, leaderboard nhanh |

## 🎯 Độ khó (chọn ở trang chính)

| Mức | Số loại thuốc | Thời gian (2D) |
|---|---|---|
| Dễ | 4 | 60s |
| Vừa | 6 | 90s |
| Khó | 8 | 120s |

Catalog gồm 8 loại: Amoxicillin (Kháng sinh), Aspirin (Tim mạch), Smecta (Tiêu hóa),
Paracetamol (Giảm đau), Vitamin C, Loratadin (Chống dị ứng), Ventolin (Hô hấp),
Omeprazol (Dạ dày). Mỗi round random N loại từ catalog.

## ✨ Tính năng đầy đủ

### Gameplay
- ✅ Mở thùng carton (animation flap mở 4 nắp như thùng thật)
- ✅ Pinch ngón cái + trỏ để cầm hộp (MediaPipe Hand Tracking)
- ✅ **Mouse / Touch fallback** — chơi không cần webcam
- ✅ Snap-to-slot khi nhả gần ô đúng phân loại
- ✅ Hover-slot highlight (3D): xanh = đúng nhóm, đỏ = sai
- ✅ Combo multiplier + timer + particle (2D Arcade)
- ✅ Lift medicine animation khi reveal khỏi carton (3D)

### Backend & Analytics
- ✅ SQLite lưu mọi lượt chơi với details JSON
- ✅ Leaderboard top 10 mỗi version trên trang chính
- ✅ Dashboard giảng viên: histogram, ma trận nhầm lẫn, top 10, recent
- ✅ Export CSV (Excel-compatible UTF-8 BOM)
- ✅ Stats API: total, avg, perfect count, best score

### Offline-friendly
- ✅ MediaPipe bundle local từ `node_modules/@mediapipe/tasks-vision`
- ✅ Model `hand_landmarker.task` self-hosted ở `public/models/`
- ✅ Three.js từ unpkg CDN (vẫn cần internet — TODO bundle local)
- ✅ Không phụ thuộc jsdelivr/googleapis lúc runtime

### Multiplayer + công nghệ mới
- 🌐 **WebSocket** (ws) — Metaverse phòng chung, sync cursor 20Hz + medicine state
- 🥽 **WebXR Hand Tracking API** — Quest 2/3, Vision Pro có hand tracking native
- 🔊 **WebAudio API** — sound effects synth (beep/ding/buzzer/perfect arpeggio)
- 🎁 **Achievements / Badges** — 7 huy hiệu auto-unlock theo milestone
  (first-play, perfect-1, perfect-5, speed-demon, all-modes, hard-perfect, metaverse-host)

## 🚀 Chạy local

Yêu cầu: Node.js ≥ 20.

```bash
npm install            # cài cả better-sqlite3 và @mediapipe/tasks-vision
npm start              # production → http://localhost:8041
# hoặc
npm run dev            # node --watch, tự reload khi sửa server/
```

> ⚠️ MediaPipe webcam cần mở qua `http://localhost` hoặc `https://`, **không phải `file://`**.
> Nếu không có webcam, chọn "🖱️ Chơi bằng chuột" trong 2D Arcade.

## 🐳 Docker

```bash
docker compose up --build -d
# → http://localhost:8041
```

Dữ liệu SQLite lưu trong named volume `pharmacysim-data` (mount tại `/data`).

## 📦 Deploy qua Portainer (Stack from Git)

1. Portainer → **Stacks** → **+ Add stack** → name: `pharmacysim`
2. Build method: **Repository**
3. Điền:
   - **Repository URL**: `https://github.com/Lampx83/PharmacySIM.git`
   - **Repository reference**: `refs/heads/main`
   - **Compose path**: `docker-compose.yml`
   - **Authentication**: bật + điền GitHub PAT (scope `repo`) nếu private
4. Bật **Automatic updates** (tùy chọn) → poll 5–15 phút để auto-redeploy
5. **Deploy the stack**

Mở `http://<host>:8041` sau khi container UP.

### Lưu ý production
- **HTTPS BẮT BUỘC nếu cần webcam**: MediaPipe `getUserMedia` **chỉ chạy trên HTTPS hoặc localhost**.
  Truy cập qua HTTP IP LAN (vd `http://192.168.x.x:8041`) sẽ tự fallback sang **chế độ chuột/touch**.
  3 cách bật HTTPS:

  **(a) Cloudflare Tunnel** — đơn giản nhất, public HTTPS URL miễn phí:
  ```bash
  sudo dpkg -i cloudflared.deb                            # Ubuntu/Debian
  cloudflared tunnel --url http://localhost:8041          # in ra https://xxx.trycloudflare.com
  ```

  **(b) Caddy + Let's Encrypt** (cần domain trỏ về server):
  ```bash
  DOMAIN=sim.example.com ACME_EMAIL=you@email.com \
    docker compose -f docker-compose.yml -f docker-compose.tls.yml up -d
  ```

  **(c) Caddy + mkcert** (LAN nội bộ, mỗi máy SV phải trust root CA):
  ```bash
  sudo apt install -y libnss3-tools mkcert caddy
  mkcert -install
  mkcert 192.168.1.50 localhost
  # sửa Caddyfile dùng các cert vừa tạo, rồi caddy run
  ```
- **Backup volume**: 
  ```bash
  docker run --rm -v pharmacysim_pharmacysim-data:/data -v $PWD:/backup alpine \
    tar czf /backup/pharmacy-backup.tar.gz /data
  ```
- **Đổi port host**: sửa `8041:8041` → `<host_port>:8041` trong compose, KHÔNG đổi
  `PORT` env (app trong container vẫn nghe 8041).

## 🧬 Cấu trúc

```
PharmacySIM/
├── package.json
├── Dockerfile               # multi-stage node:20-alpine, builds better-sqlite3
├── docker-compose.yml       # exposes 8041 + named volume cho /data
├── server/
│   ├── index.js             # Express + /api/* + /vendor/mediapipe static
│   └── db.js                # SQLite — attempts + leaderboard + histogram + confusion
└── public/
    ├── index.html           # Landing + difficulty + leaderboard
    ├── dashboard.html       # Teacher analytics dashboard
    ├── 2d-arcade.html       # Canvas 2D game (MediaPipe + mouse)
    ├── 3d-shelf.html        # Three.js 3D game (MediaPipe + mouse + WebXR)
    ├── models/
    │   └── hand_landmarker.task  # MediaPipe model (~7.5MB, self-hosted)
    └── js/
        ├── api.js           # playerName + submitAttempt + leaderboard fetch
        └── medicines.js     # Shared catalog 8 + difficulty + pickRoundMedicines
```

## 🔌 API

| Method | Path | Mô tả |
|---|---|---|
| `GET`  | `/api/health` | Health check (Docker HEALTHCHECK) |
| `POST` | `/api/attempts` | `{version, playerName?, score, correct, total, durationMs?, details?}` |
| `GET`  | `/api/leaderboard?version=&limit=10` | Top điểm theo version |
| `GET`  | `/api/stats?version=` | Tổng lượt, TB, perfect, best |
| `GET`  | `/api/histogram?version=` | Phổ điểm bucket 10đ |
| `GET`  | `/api/confusion?version=` | Ma trận nhóm thực → nhóm SV đặt |
| `GET`  | `/api/recent?limit=20` | Lượt chơi gần nhất |
| `GET`  | `/api/export.csv` | Tải toàn bộ lượt chơi dạng CSV (UTF-8 BOM) |
| `GET`  | `/api/badges` | Danh sách tất cả huy hiệu (icon + label + desc) |
| `GET`  | `/api/achievements?player=` | Huy hiệu đã mở khóa của 1 SV |
| `WS`   | `/ws` | WebSocket multiplayer cho Metaverse |
| `WS`   | `/ws-lab` | WebSocket multiplayer cho Phòng bào chế (cursor + step progress + chat) |

`version` hợp lệ: `2d-arcade`, `3d-shelf`, `metaverse`, `quiz`, `time-attack`, `compounding-lab`.

### WebSocket protocol (`/ws`)
Client → Server: `{type:'join'|'cursor'|'grab'|'move'|'release'|'snap'|'reset'|'open-carton', ...}`<br>
Server → Client: `{type:'welcome'|'join'|'leave'|'cursor'|'grab'|'medpos'|'release'|'snap'|'reset', ...}`

## ⚙️ Biến môi trường

| Tên | Mặc định | Mô tả |
|---|---|---|
| `PORT` | `8041` | Cổng HTTP |
| `HOST` | `0.0.0.0` | Bind address |
| `DATA_DIR` | `./data` (host) hoặc `/data` (Docker) | Thư mục chứa SQLite |
| `BASE_PATH` | `` (rỗng) | Path prefix khi deploy dưới sub-path (vd `/ps` cho `limio.vn/ps`). Tất cả routes + WebSocket được mount dưới prefix này. |

## 🌐 Deploy dưới sub-path (vd `https://limio.vn/ps`)

Hai cách:

### A. Cloudflare Tunnel + Subdomain (đơn giản, không cần `BASE_PATH`)

Trỏ `ps.limio.vn` → server qua Cloudflare Named Tunnel. Xem [cloudflared-config.example.yml](cloudflared-config.example.yml).

### B. Path-based `limio.vn/ps` (cần `BASE_PATH=/ps`)

**Với Cloudflare Tunnel** (không strip path):
```yaml
# ~/.cloudflared/config.yml
ingress:
  - hostname: limio.vn
    path: ^/ps(/.*)?$
    service: http://localhost:8041
  - service: http_status:404
```
Đồng thời chạy app với `BASE_PATH=/ps`:
```bash
BASE_PATH=/ps docker compose up -d
```

**Với Caddy** (auto Let's Encrypt, có strip path option):
- Xem [Caddyfile](Caddyfile) Pattern 2
- Hoặc dùng `handle_path /ps/*` để strip prefix (không cần BASE_PATH)

## 📊 Truy vấn dữ liệu trực tiếp

```bash
# Trong Docker
docker exec -it pharmacysim sh
sqlite3 /data/pharmacy.db \
  "SELECT version, player_name, score, correct||'/'||total AS r FROM attempts ORDER BY score DESC LIMIT 10;"

# Hoặc tải CSV
curl -O http://localhost:8041/api/export.csv
```

## 📅 Roadmap

- [x] ~~VR Hand Tracking native~~ ✅ (3D shelf)
- [x] ~~Multiplayer realtime~~ ✅ (Metaverse via WebSocket)
- [x] ~~Sound effects~~ ✅ (WebAudio synth)
- [x] ~~Quiz mode~~ ✅
- [x] ~~Achievements~~ ✅
- [ ] Time Attack — escalating survival mode
- [ ] Voice control (Web Speech API)
- [ ] Bundle Three.js + WebXR local
- [ ] Auth + class/group management (SV ↔ giảng viên)
- [ ] AR mode (WebXR `immersive-ar` cho điện thoại)
