// ============================================================
// VNPay gateway adapter (pay.vnpay.vn) — version 2.1.0
// ============================================================
// Triển khai chữ ký HMAC-SHA512 theo đúng mẫu chính thức của VNPay:
//   1. Gom tham số vnp_* (bỏ vnp_SecureHash, vnp_SecureHashType)
//   2. encodeURIComponent khoá + giá trị, %20 → '+'
//   3. Sắp xếp khoá tăng dần, nối "k=v" bằng '&' → signData
//   4. HMAC-SHA512(signData, vnp_HashSecret) → hex = vnp_SecureHash
//
// verifySignature dùng CHUNG cho Return URL (browser quay về) và IPN (server↔server).
// IPN là nguồn chân lý cho trạng thái đơn — KHÔNG tin Return URL (user có thể đóng tab).
//
// Env:
//   VNPAY_TMN_CODE     — mã website merchant
//   VNPAY_HASH_SECRET  — secret ký (KHÔNG commit, đặt trong secrets manager)
//   VNPAY_PAY_URL      — mặc định sandbox https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
//   VNPAY_RETURN_URL   — URL EduVerse nhận callback browser
// ============================================================

import { createHmac } from 'node:crypto';

const PAY_URL = process.env.VNPAY_PAY_URL || 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
const TMN_CODE = process.env.VNPAY_TMN_CODE || '';
const HASH_SECRET = process.env.VNPAY_HASH_SECRET || '';
const RETURN_URL = process.env.VNPAY_RETURN_URL || '';

export function isVnpayConfigured() {
  return Boolean(TMN_CODE && HASH_SECRET);
}

// encode theo đúng VNPay: encodeURIComponent rồi %20 → '+'
function enc(v) {
  return encodeURIComponent(String(v)).replace(/%20/g, '+');
}

// Dựng signData từ params (đã loại field chữ ký). Khoá sắp tăng dần.
function buildSignData(params) {
  const keys = Object.keys(params)
    .filter((k) => k !== 'vnp_SecureHash' && k !== 'vnp_SecureHashType')
    .filter((k) => params[k] !== undefined && params[k] !== null && params[k] !== '')
    .sort();
  return keys.map((k) => `${enc(k)}=${enc(params[k])}`).join('&');
}

function sign(signData, secret = HASH_SECRET) {
  return createHmac('sha512', secret).update(Buffer.from(signData, 'utf-8')).digest('hex');
}

// Định dạng ngày yyyyMMddHHmmss theo giờ VN (GMT+7) — VNPay yêu cầu.
export function formatVnpDate(date = new Date()) {
  const vn = new Date(date.getTime() + 7 * 3600 * 1000); // shift sang +7, format theo UTC field
  const p = (n) => String(n).padStart(2, '0');
  return (
    vn.getUTCFullYear().toString() +
    p(vn.getUTCMonth() + 1) +
    p(vn.getUTCDate()) +
    p(vn.getUTCHours()) +
    p(vn.getUTCMinutes()) +
    p(vn.getUTCSeconds())
  );
}

/**
 * Tạo URL redirect sang VNPay.
 * @param {Object} p
 * @param {string} p.orderRef   - mã đơn nội bộ (vnp_TxnRef) — duy nhất
 * @param {number} p.amount     - VND nguyên (sẽ ×100 cho cổng)
 * @param {string} p.orderInfo  - mô tả đơn
 * @param {string} p.ipAddr     - IP người dùng
 * @param {string} [p.bankCode] - chọn ngân hàng sẵn (optional)
 * @param {string} [p.locale='vn']
 * @param {Date}   [p.createDate=new Date()]
 * @param {string} [p.returnUrl=RETURN_URL]
 * @returns {{ url:string, signData:string, secureHash:string }}
 */
export function buildPaymentUrl({ orderRef, amount, orderInfo, ipAddr, bankCode, locale = 'vn', createDate = new Date(), returnUrl }) {
  if (!isVnpayConfigured()) throw new Error('VNPay chưa cấu hình (VNPAY_TMN_CODE / VNPAY_HASH_SECRET)');
  const params = {
    vnp_Version: '2.1.0',
    vnp_Command: 'pay',
    vnp_TmnCode: TMN_CODE,
    vnp_Locale: locale,
    vnp_CurrCode: 'VND',
    vnp_TxnRef: String(orderRef),
    vnp_OrderInfo: String(orderInfo || `Thanh toan don ${orderRef}`),
    vnp_OrderType: 'other',
    vnp_Amount: Math.round(Number(amount) * 100), // VNPay tính theo đơn vị ×100
    vnp_ReturnUrl: returnUrl || RETURN_URL,
    vnp_IpAddr: String(ipAddr || '127.0.0.1'),
    vnp_CreateDate: formatVnpDate(createDate),
  };
  if (bankCode) params.vnp_BankCode = bankCode;

  const signData = buildSignData(params);
  const secureHash = sign(signData);
  params.vnp_SecureHash = secureHash;

  // Query cuối cùng giữ NGUYÊN thứ tự đã ký (sort) + append chữ ký.
  const query = buildSignData(params) + `&vnp_SecureHash=${secureHash}`;
  return { url: `${PAY_URL}?${query}`, signData, secureHash };
}

/**
 * Xác minh chữ ký callback (Return URL hoặc IPN). Dùng cho cả hai.
 * @param {Object} query - object các tham số vnp_* nhận được
 * @returns {{ valid:boolean, responseCode:string, orderRef:string, amount:number, txnRef:string, gatewayTxnNo:string }}
 */
export function verifyCallback(query) {
  const received = String(query.vnp_SecureHash || '');
  const signData = buildSignData(query);
  const expected = sign(signData);
  const valid = received.length > 0 && received.toLowerCase() === expected.toLowerCase();
  return {
    valid,
    responseCode: String(query.vnp_ResponseCode ?? ''),
    orderRef: String(query.vnp_TxnRef ?? ''),
    amount: Number(query.vnp_Amount ?? 0) / 100, // đổi lại VND nguyên
    txnRef: String(query.vnp_TxnRef ?? ''),
    gatewayTxnNo: String(query.vnp_TransactionNo ?? ''),
  };
}

// IPN cần trả đúng format VNPay mong đợi để cổng ngừng retry.
export const IPN_RESPONSES = {
  success:        { RspCode: '00', Message: 'Confirm Success' },
  invalidSig:     { RspCode: '97', Message: 'Invalid Checksum' },
  orderNotFound:  { RspCode: '01', Message: 'Order not Found' },
  amountInvalid:  { RspCode: '04', Message: 'Invalid Amount' },
  alreadyConfirmed:{ RspCode: '02', Message: 'Order already confirmed' },
  unknownError:   { RspCode: '99', Message: 'Unknown error' },
};

// '00' = giao dịch thành công theo bảng mã VNPay.
export function isSuccessCode(responseCode) {
  return String(responseCode) === '00';
}
