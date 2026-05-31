# Google Analytics 4 cho Tizia

Tài liệu hướng dẫn tạo property GA4 và kết nối vào Tizia. Một lần thiết lập, mọi trang hub tự động đo.

## 1. Tạo GA4 property + Measurement ID

1. Vào https://analytics.google.com → đăng nhập bằng Google account dùng cho Tizia.
2. ⚙️ **Admin** (góc trái dưới) → cột **Account** → **Create** → **Account** (nếu chưa có).
   - Account name: `Tizia` (hoặc tên công ty).
3. Cột **Property** → **Create** → **Property**.
   - Property name: `Tizia Hub`
   - Reporting time zone: `(GMT+07:00) Bangkok, Hanoi, Jakarta`
   - Currency: `Vietnamese Dong (₫)`
4. Business details / objectives → chọn `Other` + `Examine user behavior`.
5. **Data collection** → chọn nền tảng **Web**.
   - Website URL: `https://tizia.vn` (hoặc domain thật).
   - Stream name: `Tizia Web`.
   - Để mặc định **Enhanced measurement** ON (đo scroll, outbound, search…).
6. Sau khi tạo xong, panel **Web stream details** hiện ra.
   - **Measurement ID** ở góc phải trên (format `G-XXXXXXXXXX`) → copy.

## 2. Tạo Measurement Protocol API secret (cho server-side event)

Cùng panel **Web stream details** vừa mở ở bước 1.6:

1. Cuộn xuống mục **Measurement Protocol API secrets** → **Create**.
2. Nickname: `tizia-server`.
3. Copy **Secret value** ngay (chỉ hiện 1 lần).

## 3. Điền vào Tizia

Tạo file `.env` ở root project (copy từ `.env.example` nếu chưa có):

```bash
cp .env.example .env
```

Sửa 2 dòng:

```env
GA_MEASUREMENT_ID=G-XXXXXXXXXX
GA_API_SECRET=abc123...
```

Khởi động lại server:

```bash
# dev
npm run dev

# docker
docker compose restart
```

Mở bất kỳ trang nào của Tizia → mở **DevTools → Network** → lọc `gtag` → thấy request đến `googletagmanager.com/gtag/js?id=G-...`. Vào **GA4 → Reports → Realtime** → thấy user "1 in last 30 min".

## 4. Bảng event Tizia tự bắn

| Event | Nguồn | Trigger | Params |
|---|---|---|---|
| `page_view` | gtag auto | Mọi pageload | (mặc định GA4) |
| `login` | client `auth.js` | Login thành công | `method`, `role` |
| `sign_up` | client `auth.js` | Register thành công | `method`, `role` |
| `logout` | client `auth.js` | Bấm Đăng xuất | — |
| `school_enter` | client `school.html` | Vào trang trường | `domain` |
| `campus_building_click` | client `school.html` | Bấm toà nhà trên bản đồ | `domain`, `building` |
| `app_launch` | client `apps.html` | Mở app anh em | `app_id`, `app_name` |
| `app_grid_view` | client `apps.html` | Xem grid app | `count` |
| `lesson_start` | client `weekly-lesson.js` | Mở 1 tuần học | `week_id`, `subject`, `grade` |
| `lesson_quiz_open` | client `weekly-lesson.js` | Bấm "Làm bài kiểm tra" | `week_id`, `subject`, `question_count` |
| `consent_grant` | client `consent-banner.js` | User đồng ý cookie | `source` |
| `quiz_submit` | **server** `/api/attempts` | Nộp bài có điểm | `version`, `score`, `correct`, `total`, `accuracy`, `is_perfect`, `duration_ms` |
| `badge_unlock` | **server** `/api/attempts` | Unlock huy hiệu | `badge_id`, `badge_label` |
| `ai_chat` | **server** `/api/ai/*` | Gọi 1 endpoint AI | `endpoint`, `model`, `prompt_tokens`, `completion_tokens`, `duration_ms`, `status` |

Mọi event đều có user properties: `school_id`, `school_code`, `role`, `plan`, `is_guest` để segment trong GA4.

## 5. Consent Mode v2

Tizia mặc định DENIED cho `analytics_storage` + `ad_storage` (theo Consent Mode v2 — Google chuẩn EU/EEA). Banner cookie xin đồng ý lần đầu vào.

- User chọn **Đồng ý tất cả** → consent granted → gtag bắn full event + cookie `_ga` được set.
- User chọn **Chỉ cần thiết** → consent denied → gtag chỉ bắn "ping" ẩn danh (consent signal), không cookie phân tích.
- Cookie quyết định lưu 180 ngày trong `tizia_consent`. Đổi lại bất kỳ lúc nào qua nút 🛡️ góc dưới phải.

## 6. Kiểm thử nhanh (DebugView)

1. Cài extension **Google Analytics Debugger** cho Chrome → bật.
2. Mở Tizia, đồng ý cookie.
3. GA4 → Admin → **DebugView** → thấy event realtime kèm params.

Hoặc bật server-side debug:

```env
GA_DEBUG=1
```

Server console sẽ log mỗi event Measurement Protocol gửi đi + response của Google.

## 7. Funnel khuyến nghị

GA4 → **Explore** → **Funnel exploration** → tạo funnel:

1. `page_view` (page_location chứa `/login`)
2. `login`
3. `school_enter`
4. `lesson_start`
5. `quiz_submit`
6. `badge_unlock`

→ Đo % học sinh từ login đến hoàn thành tuần học đầu tiên.

## 8. Bảo mật & riêng tư

- **IP anonymization** đã bật (`anonymize_ip: true`).
- **Non-personalized ads** đã bật cho mọi server event (`non_personalized_ads: true`).
- KHÔNG truyền PII (tên, email, số điện thoại) qua params hay user_properties. `user_id` là số nguyên nội bộ.
- Trẻ em <13 (mầm non + tiểu học): banner xin consent vẫn áp dụng; nếu phụ huynh chọn "Chỉ cần thiết" → không có dữ liệu phân tích cá nhân nào về máy con.
