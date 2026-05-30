# EduVerse — Chiến lược SEO

> Mục tiêu: Google index được nội dung giới thiệu (trường, khoá học) để thu hút
> người học, trong khi khu vực ứng dụng (game, mô phỏng) vẫn yêu cầu đăng nhập.
> Code: [server/contexts/seo/](../server/contexts/seo/).

---

## 1. Vấn đề gốc: auth gate chặn crawler

`makeAuthGate` redirect MỌI trang HTML chưa login về `/login.html`. Hệ quả:
Googlebot (không có cookie) bị đẩy về login → **chỉ index được trang login**,
toàn bộ nội dung vô hình với search engine. Đây là lỗi SEO nghiêm trọng cho một
nền tảng muốn "SEO tốt".

## 2. Giải pháp: tách lớp công khai (public) khỏi lớp ứng dụng (gated)

| Lớp | Ví dụ | Auth | SEO |
|---|---|---|---|
| **Công khai** (crawlable) | `/welcome`, `/welcome?school=neu`, `/robots.txt`, `/sitemap.xml` | Không | Có meta + OG + JSON-LD |
| **Ứng dụng** (gated) | `/` (app home), game, `/sim/*`, `/api/*` | Cần login | `Disallow` trong robots |

Whitelist các route công khai trong `auth.js` (`PUBLIC_PATH_EXACT`). CTA "Vào học"
trên `/welcome` mới dẫn tới app (kích hoạt login).

## 3. Đã triển khai

- **`/robots.txt`**: cho phép crawl trang công khai, `Disallow: /api/ /sim/`, trỏ sitemap.
- **`/sitemap.xml`**: động — liệt kê `/welcome` + landing mỗi trường (`/welcome?school=<code>`)
  từ bảng `schools`. Tự cập nhật khi thêm trường.
- **`/welcome`**: trang landing công khai. Có:
  - `<title>` + `<meta name=description>` riêng theo trường
  - Open Graph (`og:title/description/url/locale`) cho social share
  - **JSON-LD** `EducationalOrganization` → rich snippet Google
  - `<link rel=canonical>` chống trùng lặp
  - CTA "Vào học ngay" → login

## 4. Cấu hình

```bash
PUBLIC_ORIGIN=https://eduverse.vn   # origin tuyệt đối cho canonical/sitemap
                                     # (nếu trống → suy từ header request)
```

## 5. Việc tiếp theo (tăng SEO)

- [ ] **Per-page meta cho từng module**: mỗi game/lesson có 1 trang mô tả công khai
      (text + screenshot) — Google không render Three.js, nên SEO trang mô tả, không SEO canvas.
- [ ] **JSON-LD `Course`** cho từng khoá/môn (rich result khoá học).
- [ ] **Lazy-load Three.js**: chỉ tải khi vào game → cải thiện LCP/Core Web Vitals.
- [ ] **CDN Cloudflare** cho `/public/models/*.glb` (giảm tải + tăng tốc).
- [ ] **Sitemap index** khi >50k URL (chia nhiều sitemap).
- [ ] **hreflang** nếu thêm tiếng Anh (Viện AEP, khách quốc tế).
- [ ] **Pre-render** trang landing (đã là server-rendered HTML thuần → ổn).

## 6. Kiểm thử

```bash
curl -s http://localhost:8041/robots.txt
curl -s http://localhost:8041/sitemap.xml | xmllint --noout -   # well-formed?
curl -s "http://localhost:8041/welcome?school=neu" | grep -E "og:title|ld\+json|<title>"
# Google Rich Results Test: dán URL /welcome để kiểm tra JSON-LD.
```

## Anchors
- Code: [server/contexts/seo/index.js](../server/contexts/seo/index.js)
- Auth whitelist: [server/contexts/identity/auth.js](../server/contexts/identity/auth.js)
- Trạng thái tổng: [GAP-STATUS.md](GAP-STATUS.md)
