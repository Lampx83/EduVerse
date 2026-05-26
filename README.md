# 💊 PharmacySIM

Hệ thống mô phỏng đào tạo kỹ năng **xếp thuốc theo nhóm điều trị** cho sinh viên Dược.
Hỗ trợ **MediaPipe Hand Tracking** (pinch ngón tay qua webcam) hoặc **chuột/touch** —
sinh viên mở thùng thuốc, kéo từng hộp lên đúng ô kệ. Backend lưu mọi lượt chơi
vào SQLite và xuất analytics cho giảng viên.

## 🎮 Các phiên bản đã có

| Phiên bản | URL | Mô tả |
|---|---|---|
| **2D Arcade** | `/2d-arcade.html` | Canvas 2D side-view, mở thùng → thuốc spring out → kéo lên kệ. Score + combo + timer + particle effects. Hỗ trợ webcam (MediaPipe) hoặc chuột. |
| **3D Realistic** | `/3d-shelf.html` | Three.js scene 3D, thùng carton mở được, snap-to-slot, ô đúng glow xanh / sai glow đỏ. Hỗ trợ webcam, chuột, và WebXR. |
| **Dashboard Giảng viên** | `/dashboard.html` | Stats + histogram + leaderboard + ma trận nhầm lẫn + export CSV |
| Landing | `/` | Trang chính: chọn version, set tên SV, chọn độ khó, xem leaderboard nhanh |

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
- **HTTPS**: MediaPipe `getUserMedia` cần HTTPS khi truy cập từ máy khác → đặt sau
  Traefik/Caddy/Nginx có cert Let's Encrypt.
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

`version` hợp lệ: `2d-arcade`, `3d-shelf`.

## ⚙️ Biến môi trường

| Tên | Mặc định | Mô tả |
|---|---|---|
| `PORT` | `8041` | Cổng HTTP |
| `HOST` | `0.0.0.0` | Bind address |
| `DATA_DIR` | `./data` (host) hoặc `/data` (Docker) | Thư mục chứa SQLite |

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

- [ ] VR Hand Tracking native (WebXR cho Quest / Vision Pro)
- [ ] Multiplayer Race (2 SV thi đua realtime qua WebSocket)
- [ ] Sound effects (beep on grab, ding on correct, fail buzzer)
- [ ] Bundle Three.js + WebXR local (giảm phụ thuộc unpkg)
- [ ] Auth + class/group management (SV ↔ giảng viên)
