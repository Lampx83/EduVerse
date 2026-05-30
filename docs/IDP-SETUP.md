# EduVerse — Identity Provider (Keycloak + SSO) Setup

> **Phase 1.** Gom mọi cách đăng nhập (local, Google, Microsoft Entra/Azure AD,
> SAML của ĐH) về **một** IdP trung tâm là **Keycloak**. EduVerse chỉ tin Keycloak
> qua OIDC — không tự quản lý từng provider nữa.
> Artifact: [deploy/keycloak/](../deploy/keycloak/). Kiến trúc: [ARCHITECTURE.md](ARCHITECTURE.md) §6.

---

## 1. Vì sao Keycloak (thay vì giữ oauth.js tự quản)

Hiện tại [server/contexts/identity/oauth.js](../server/contexts/identity/oauth.js) tự xử lý từng provider (Google/MS/GitHub). Ổn cho 1 trường, nhưng với **phổ thông + 3 ĐH** mỗi nơi 1 hệ thống đăng nhập (Google Workspace, Microsoft 365, SAML nội bộ) thì:

| Tự quản (hiện tại) | Keycloak broker (Phase 1) |
|---|---|
| Mỗi provider = code riêng trong oauth.js | Thêm provider = cấu hình UI, 0 code |
| SAML phải tự code (khó) | SAML built-in |
| Không có self-service reset/MFA | Có sẵn MFA, reset, brute-force protection |
| Session tự quản trong SQLite | SSO session chuẩn OIDC, logout toàn cục |
| Map email domain → trường: thủ công | Identity Provider Mapper |

EduVerse vẫn giữ `oauth.js` cho giai đoạn chuyển tiếp; Phase 1 thêm **1 provider OIDC duy nhất = Keycloak**, các provider khác chuyển vào Keycloak.

## 2. Kiến trúc luồng

```
SV/GV ── trình duyệt ──► EduVerse (eduverse-web OIDC client)
                              │  redirect /api/auth/oidc → Keycloak
                              ▼
                         Keycloak (realm eduverse)
                          ├── local users (migrate từ bảng users)
                          ├── Google (Google for Education)
                          ├── Microsoft Entra ID (3 ĐH dùng M365)
                          └── SAML 2.0 (ĐH có hệ thống cũ)
                              │  trả OIDC id_token + roles + group(school)
                              ▼
                         EduVerse map: group → school_id, role claim → role
```

## 3. Triển khai (Server #3)

```bash
# 1. Tạo DB + user cho Keycloak trên Postgres Server #2
psql -h 10.0.0.11 -U postgres -c "CREATE DATABASE keycloak;"
psql -h 10.0.0.11 -U postgres -c "CREATE ROLE keycloak LOGIN PASSWORD '<secret>';"
psql -h 10.0.0.11 -U postgres -c "GRANT ALL ON DATABASE keycloak TO keycloak;"

# 2. Secrets (Doppler/Infisical inject, KHÔNG hardcode)
export KC_DB_PASSWORD=...  KC_ADMIN_PASSWORD=...  KC_HOSTNAME=https://id.eduverse.vn

# 3. Khởi động Keycloak (tự import realm template)
cd deploy/keycloak
docker compose -f docker-compose.keycloak.yml up -d

# 4. Caddy (Server #1) reverse-proxy: id.eduverse.vn → 10.0.0.x:8080 (TLS)
```

## 4. Cấu hình realm

Dùng template [realm-eduverse.example.json](../deploy/keycloak/realm-eduverse.example.json) (tự import qua `--import-realm`) rồi chỉnh trong Admin Console:

1. **Client `eduverse-web`**: confidential, lấy `client_secret` → đặt vào secrets EduVerse (`OIDC_CLIENT_SECRET`).
2. **redirectUris**: thêm đúng domain production + `limio.vn/ps` (deploy sau prefix).
3. **Identity Providers**:
   - **Google**: tạo OAuth client ở Google Cloud Console, paste id/secret.
   - **Microsoft Entra**: đăng ký App ở Azure Portal, lấy `TENANT_ID`, client id/secret. Với multi-tenant (3 ĐH khác tenant) dùng `organizations` hoặc `common` endpoint.
   - **SAML**: import metadata XML của ĐH.
4. **Mappers — email domain → school_id**:
   - Identity Provider Mapper: `*@neu.edu.vn` → group `/neu` → attribute `school_code=neu`.
   - EduVerse khi nhận id_token đọc claim `groups`/`school_code` → `resolveSchoolByEmail` hoặc map trực tiếp.

## 5. Tích hợp phía EduVerse (code Phase 1)

Thêm 1 OIDC provider "keycloak" vào [oauth.js](../server/contexts/identity/oauth.js) (đã có khung Authorization Code + PKCE):

```js
// Phase 1: thêm provider keycloak vào buildProviders()
if (process.env.OIDC_ISSUER && process.env.OIDC_CLIENT_ID) {
  list.push({
    id: 'keycloak', label: 'Tài khoản trường', color: '#1f6feb',
    client_id: process.env.OIDC_CLIENT_ID,
    client_secret: process.env.OIDC_CLIENT_SECRET,
    authorize_url: `${process.env.OIDC_ISSUER}/protocol/openid-connect/auth`,
    token_url:     `${process.env.OIDC_ISSUER}/protocol/openid-connect/token`,
    userinfo_url:  `${process.env.OIDC_ISSUER}/protocol/openid-connect/userinfo`,
    scope: 'openid profile email',
    // map claim → record, gồm school_id từ group
    profile: (u) => ({ subject: u.sub, email: u.email, display_name: u.name, school_hint: u.school_code }),
  });
}
```

Khi tạo user từ SSO: gọi `resolveSchoolByEmail(email)` (đã có ở [db.js](../server/db.js)) hoặc `school_hint` để gán `school_id`, fallback 1.

## 6. Migrate user hiện tại sang Keycloak

Bảng `users` hiện có scrypt hash — Keycloak KHÔNG đọc được scrypt trực tiếp.

**2 cách:**
- **(Khuyến nghị) Lazy migration**: giữ local login ở EduVerse song song. User SSO mới → Keycloak. User cũ tiếp tục login local, lần đầu được mời "liên kết tài khoản trường". Không ép migrate hàng loạt.
- **Bulk import**: export `users` → Keycloak `partialImport` với `credentials` type `password-hash`. Cần custom hash provider cho scrypt (viết SPI Java) — chỉ làm nếu bắt buộc.

## 7. Checklist go-live IdP

- [ ] Keycloak chạy với DB Postgres (KHÔNG H2), backup cùng pgBackRest
- [ ] TLS qua Caddy, `KC_HOSTNAME` đúng domain
- [ ] Admin password đổi khỏi bootstrap, bật MFA cho admin
- [ ] Client secret EduVerse trong secrets manager (không git)
- [ ] Test login từng provider: local, Google, Entra, SAML (nếu có)
- [ ] Test email domain → school_id mapping đúng
- [ ] Test global logout (SLO)
- [ ] Brute-force detection bật
- [ ] Rate limit `/realms/*/protocol/openid-connect/token`

## 8. Anchors

- Compose: [deploy/keycloak/docker-compose.keycloak.yml](../deploy/keycloak/docker-compose.keycloak.yml)
- Realm template: [deploy/keycloak/realm-eduverse.example.json](../deploy/keycloak/realm-eduverse.example.json)
- OAuth hiện tại: [server/contexts/identity/oauth.js](../server/contexts/identity/oauth.js)
- Tenant resolve: `resolveSchoolByEmail` trong [server/db.js](../server/db.js)
