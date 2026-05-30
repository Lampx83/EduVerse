# EduVerse — Payment (VNPay) Setup & Flow

> **Phase 1, OFF mặc định.** Bật bằng `PAYMENT_ENABLED=1`. Khi tắt: KHÔNG có
> bảng payment, KHÔNG có route — runtime hiện tại không đổi.
> Code: [server/contexts/payment/](../server/contexts/payment/).

---

## 1. Nguyên tắc bất di bất dịch

1. **KHÔNG bao giờ chạm thẻ** (PAN/CVV) — VNPay hosted page xử lý. EduVerse chỉ tạo đơn + nhận kết quả.
2. **IPN là nguồn chân lý**, KHÔNG phải Return URL. User đóng tab không được làm hỏng đơn.
3. **Idempotency** trên IPN: bảng `webhook_inbox` UNIQUE(gateway, event_key) → retry của VNPay không ghi sổ trùng.
4. **Internal ledger double-entry**: mọi tiền vào/ra ghi `ledger_entries` cân bằng. Đối soát hàng ngày với VNPay, KHÔNG tin mỗi số trên cổng.
5. **Refund + chargeback** là first-class (bảng `refunds`, helper `recordRefund`).

## 2. Cấu hình

```bash
PAYMENT_ENABLED=1
VNPAY_TMN_CODE=<mã merchant>           # VNPay cấp
VNPAY_HASH_SECRET=<secret ký>          # secrets manager, KHÔNG git
VNPAY_PAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html   # sandbox; prod đổi domain
VNPAY_RETURN_URL=https://eduverse.vn/api/payment/vnpay/return
```

Đăng ký sandbox: https://sandbox.vnpayment.vn/devreg → lấy TMN_CODE + HASH_SECRET + thẻ test.

## 3. Luồng thanh toán

```
SV ──► POST /api/payment/create-order {amount, description}   (cần đăng nhập)
         │  tạo invoice (status=pending), build URL ký HMAC-SHA512
         ▼
       { payUrl } ──► trình duyệt redirect sang VNPay hosted page
                          │  SV nhập thẻ / quét QR
          ┌───────────────┴────────────────┐
          ▼                                 ▼
   Return URL (browser)              IPN (server↔server)  ◄── NGUỒN CHÂN LÝ
   GET /api/payment/vnpay/return     GET /api/payment/vnpay/ipn
   - verify chữ ký                   - verify chữ ký (sai → RspCode 97)
   - CHỈ hiển thị "đang xác nhận"    - tìm invoice (không thấy → 01)
   - KHÔNG chốt đơn                  - check amount (lệch → 04)
                                     - idempotency inbox (trùng → 02)
                                     - ghi payments + chốt invoice=paid
                                     - recordPaymentSettled → ledger
                                     - RspCode 00
```

## 4. Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| POST | `/api/payment/create-order` | login | Tạo đơn, trả `payUrl` |
| GET | `/api/payment/vnpay/return` | public¹ | Browser quay về — chỉ hiển thị |
| GET | `/api/payment/vnpay/ipn` | public¹ | VNPay→server, chốt đơn + ghi sổ |
| GET | `/api/payment/invoices/:orderRef` | login | Tra cứu trạng thái (client poll) |

¹ "public" = không cần cookie, nhưng xác thực bằng **chữ ký HMAC** (whitelist `/api/payment/vnpay/` trong [auth.js](../server/contexts/identity/auth.js)). Chữ ký sai → từ chối.

## 5. Sổ cái (double-entry)

Mỗi giao dịch ghi nhóm bút toán cân bằng (`SUM(amount_signed)=0`). Ví dụ thu 50.000đ trường 2:

| account | amount_signed | nghĩa |
|---|---|---|
| `gateway:vnpay` | +50000 | tài sản (tiền ở cổng) tăng |
| `revenue:school:2` | −50000 | doanh thu trường 2 tăng |

Hoàn tiền đảo chiều. `getBalance(account)` / `getSchoolBalances(school_id)` để xem số dư. Bút toán không cân bằng → `postTransaction` throw, không ghi gì ([ledger.js](../server/contexts/payment/ledger.js)).

## 6. Đã test (scaffold)

✅ VNPay sign/verify round-trip · tamper detection (đổi amount → chữ ký sai)
✅ create-order → URL sandbox thật · IPN #1=00 · IPN #2=02 (idempotency) · tampered=97
✅ invoice→paid · ledger cân bằng · webhook_inbox processed
✅ PAYMENT_ENABLED off → 0 bảng, 0 route, 0 regression

## 7. Checklist go-live (CHƯA làm — Phase 1 thật)

- [ ] **Reconciliation cron**: đối soát ledger ↔ VNPay hằng ngày, alert lệch
- [ ] **E-invoice** (TT 78/2021): tích hợp Misa/VNPT eInvoice, tự phát hành khi `paid`
- [ ] **Refund flow UI** + API gọi VNPay refund (hiện chỉ có ledger helper)
- [ ] **Thêm cổng**: MoMo, ZaloPay (cùng interface adapter)
- [ ] **PCI-DSS SAQ-A** self-assessment (dùng hosted page → scope tối thiểu)
- [ ] **Nghị định 13**: consent lưu thông tin giao dịch, flow xóa
- [ ] **Webhook retry/alert**: nếu IPN không tới sau N phút → cảnh báo
- [ ] **Idempotency cho create-order** (tránh double-submit tạo 2 invoice)
- [ ] **Rate limit** create-order per user
- [ ] Test với **thẻ test thật** trên sandbox + môi trường staging
- [ ] **Số tiền lớn**: review thủ công > ngưỡng

## 8. ⚠️ Cảnh báo pháp lý

PCI-DSS + Nghị định 13 KHÔNG phải "best practice" — là **bắt buộc pháp lý ở VN**.
Cần review compliance riêng TRƯỚC khi mở payment cho user thật. Scaffold này mới
là kỹ thuật, chưa phải "được phép thu tiền".

## 9. Anchors

- Routes: [server/contexts/payment/index.js](../server/contexts/payment/index.js)
- VNPay adapter: [server/contexts/payment/gateways/vnpay.js](../server/contexts/payment/gateways/vnpay.js)
- Ledger: [server/contexts/payment/ledger.js](../server/contexts/payment/ledger.js)
- Schema: [server/contexts/payment/schema.js](../server/contexts/payment/schema.js)
