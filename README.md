# 💊 PharmacySIM

Hệ thống mô phỏng đào tạo kỹ năng **xếp thuốc theo nhóm điều trị** cho sinh viên Dược.
Hỗ trợ điều khiển bằng **MediaPipe Hand Tracking** (webcam) — sinh viên pinch ngón tay
để cầm, kéo, thả từng hộp thuốc lên đúng ô kệ. Backend lưu mọi lượt chơi vào SQLite
và xếp hạng theo điểm.

## 🎮 Các phiên bản

| Phiên bản | Mô tả | Trạng thái |
|---|---|---|
| **2D Arcade** (`/2d-arcade.html`) | Canvas 2D, mở thùng → thuốc spring out → kéo lên kệ. Score + combo + timer | ✓ Sẵn sàng |
| **3D Realistic** (`/3d-shelf.html`) | Three.js scene 3D, snap-to-slot, chấm điểm từng hộp, hỗ trợ WebXR | ✓ Sẵn sàng |
| VR Hand Tracking | WebXR native cho Quest/Vision Pro | 📅 Sắp có |
| 2D Mouse/Touch | Không cần webcam, cho tablet/lớp học | 📅 Sắp có |
| Dashboard Giảng viên | Analytics, export CSV | 📅 Sắp có |
| Multiplayer Race | 2 SV thi đua realtime | 📅 Sắp có |

## 🚀 Chạy local

Yêu cầu: Node.js ≥ 20.

```bash
npm install
npm start            # production mode → http://localhost:8041
# hoặc
npm run dev          # node --watch, tự reload khi sửa server/
```

Mở [http://localhost:8041](http://localhost:8041) → chọn phiên bản → cấp quyền webcam.

> ⚠️ **Phải mở qua `http://localhost`** (không phải `file://`) vì trình duyệt chặn
> `getUserMedia` ở file scheme.

## 🐳 Chạy bằng Docker

```bash
docker compose up --build -d
# → http://localhost:8041
```

Dữ liệu SQLite lưu trong named volume `pharmacysim-data` (mount tại `/data` trong container).

## 📦 Deploy qua Portainer (Stack from Git)

1. Mở **Portainer** → menu **Stacks** → **Add stack**.
2. Đặt tên stack: `pharmacysim`.
3. Build method: chọn **Repository**.
4. Điền:
   - **Repository URL**: `https://github.com/Lampx83/PharmacySIM.git`
   - **Repository reference**: `refs/heads/main`
   - **Compose path**: `docker-compose.yml`
   - **Authentication**: nếu repo private → bật và điền PAT GitHub có quyền `repo`.
5. (Tuỳ chọn) Bật **Automatic updates** → poll mỗi 5–15 phút để auto-redeploy khi
   có commit mới trên `main`.
6. Bấm **Deploy the stack**.

Sau khi container `pharmacysim` lên, mở `http://<host-portainer>:8041`.

### Cấu hình bổ sung trong Portainer

- **Port mapping**: stack expose `8041:8041`. Nếu muốn port khác trên host
  (ví dụ host dùng 80), sửa lại trong file compose hoặc đặt qua reverse proxy
  (Traefik / Nginx) — KHÔNG đổi `PORT` env (app trong container vẫn nghe 8041).
- **Volume**: dữ liệu nằm trong volume `pharmacysim-data`. Backup bằng cách
  `docker run --rm -v pharmacysim-data:/data -v $PWD:/backup alpine \
   tar czf /backup/pharmacy-backup.tar.gz /data`.
- **HTTPS**: webcam (MediaPipe getUserMedia) yêu cầu HTTPS khi truy cập từ máy
  khác. Đặt sau Traefik/Caddy/Nginx với certbot để có cert Let's Encrypt.

## 🧬 Cấu trúc

```
PharmacySIM/
├── package.json
├── Dockerfile
├── docker-compose.yml
├── server/
│   ├── index.js       # Express, port 8041, serves public/ + /api/*
│   └── db.js          # better-sqlite3 — attempts table + queries
└── public/
    ├── index.html     # Landing page + leaderboard
    ├── 2d-arcade.html # Canvas 2D game
    ├── 3d-shelf.html  # Three.js 3D game
    └── js/
        └── api.js     # Shared client: playerName + submitAttempt + leaderboard
```

## 🔌 API

| Method | Path | Mô tả |
|---|---|---|
| `GET`  | `/api/health` | Health check (Docker HEALTHCHECK dùng) |
| `POST` | `/api/attempts` | Body: `{version, playerName?, score, correct, total, durationMs?, details?}` |
| `GET`  | `/api/leaderboard?version=2d-arcade&limit=10` | Top điểm theo version |
| `GET`  | `/api/stats?version=2d-arcade` | Tổng lượt, điểm TB, số perfect |
| `GET`  | `/api/recent?limit=20` | 20 lượt chơi gần nhất |

`version` hợp lệ: `2d-arcade`, `3d-shelf`.

## ⚙️ Biến môi trường

| Tên | Mặc định | Mô tả |
|---|---|---|
| `PORT` | `8041` | Cổng HTTP của Express |
| `HOST` | `0.0.0.0` | Bind address |
| `DATA_DIR` | `./data` (host) hoặc `/data` (Docker) | Thư mục chứa file SQLite |

## 📊 Truy vấn dữ liệu trực tiếp

File `pharmacy.db` là SQLite chuẩn, có thể mở bằng DB Browser, DBeaver, hay CLI:

```bash
# Trong Docker
docker exec -it pharmacysim sh
sqlite3 /data/pharmacy.db "SELECT version, player_name, score FROM attempts ORDER BY score DESC LIMIT 10;"
```
