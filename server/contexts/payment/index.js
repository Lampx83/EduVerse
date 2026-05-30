// ============================================================
// Payment context — routes (attachPayment)
// ============================================================
// Chỉ mount khi PAYMENT_ENABLED=1. Cung cấp:
//   POST /api/payment/create-order      — tạo invoice + trả URL VNPay (yêu cầu login)
//   GET  /api/payment/vnpay/return      — browser quay về (chỉ HIỂN THỊ, không chốt đơn)
//   GET  /api/payment/vnpay/ipn         — server↔server, NGUỒN CHÂN LÝ chốt đơn + ghi sổ
//   GET  /api/payment/invoices/:orderRef — tra cứu trạng thái (cho client poll)
//
// Idempotency: IPN ghi webhook_inbox theo (gateway, event_key) UNIQUE → xử lý 1 lần,
// retry của VNPay không tạo bút toán trùng. Ledger ghi qua double-entry cân bằng.
// ============================================================

import './schema.js'; // side-effect: tạo bảng payment khi context được nạp
import { db } from '../../db.js';
import { requireAuth } from '../identity/auth.js';
import {
  buildPaymentUrl, verifyCallback, isSuccessCode, isVnpayConfigured, IPN_RESPONSES,
} from './gateways/vnpay.js';
import { recordPaymentSettled } from './ledger.js';

// ── Data access ──
const insertInvoiceStmt = db.prepare(`
  INSERT INTO invoices (school_id, user_id, order_ref, amount, currency, description, status, gateway, created_at, updated_at)
  VALUES (@school_id, @user_id, @order_ref, @amount, @currency, @description, 'pending', @gateway, @t, @t)
`);
const getInvoiceByRefStmt = db.prepare(`SELECT * FROM invoices WHERE order_ref = ?`);
const markInvoicePaidStmt = db.prepare(`UPDATE invoices SET status = 'paid', paid_at = @t, updated_at = @t WHERE id = @id`);
const markInvoiceFailedStmt = db.prepare(`UPDATE invoices SET status = 'failed', updated_at = @t WHERE id = @id`);
const insertPaymentStmt = db.prepare(`
  INSERT INTO payments (school_id, invoice_id, gateway, gateway_txn_ref, amount, status, response_code, raw_response, created_at)
  VALUES (@school_id, @invoice_id, @gateway, @gateway_txn_ref, @amount, @status, @response_code, @raw_response, @t)
`);
const insertInboxStmt = db.prepare(`
  INSERT INTO webhook_inbox (gateway, event_key, order_ref, payload, signature_valid, processed, received_at)
  VALUES (@gateway, @event_key, @order_ref, @payload, @signature_valid, 0, @t)
`);
const markInboxProcessedStmt = db.prepare(`UPDATE webhook_inbox SET processed = 1, processed_at = @t WHERE gateway = @gateway AND event_key = @event_key`);

let _orderSeq = 0;
function genOrderRef() {
  _orderSeq = (_orderSeq + 1) % 100000;
  return `EDU${Date.now().toString(36).toUpperCase()}${_orderSeq.toString(36).toUpperCase()}`;
}
function clientIp(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || '127.0.0.1';
}

export function attachPayment(r, { basePath = '' } = {}) {
  // ── Tạo đơn + lấy URL thanh toán ──
  r.post('/api/payment/create-order', requireAuth, (req, res) => {
    if (!isVnpayConfigured()) {
      return res.status(503).json({ error: 'payment_unconfigured', detail: 'VNPay chưa cấu hình TMN_CODE/HASH_SECRET' });
    }
    const amount = Math.round(Number(req.body?.amount));
    const description = String(req.body?.description || '').slice(0, 200);
    if (!Number.isFinite(amount) || amount < 1000) {
      return res.status(400).json({ error: 'invalid_amount', detail: 'amount tối thiểu 1000 VND' });
    }
    const school_id = req.user.school_id || 1;
    const order_ref = genOrderRef();
    const now = Date.now();
    insertInvoiceStmt.run({
      school_id, user_id: req.user.id, order_ref, amount, currency: 'VND',
      description: description || `Thanh toán EduVerse`, gateway: 'vnpay', t: now,
    });
    try {
      const { url } = buildPaymentUrl({
        orderRef: order_ref, amount,
        orderInfo: description || `Thanh toan don ${order_ref}`,
        ipAddr: clientIp(req),
      });
      res.json({ ok: true, orderRef: order_ref, amount, payUrl: url });
    } catch (e) {
      res.status(500).json({ error: 'build_url_failed', detail: String(e.message) });
    }
  });

  // ── IPN: server-to-server, chốt đơn (nguồn chân lý) ──
  r.get('/api/payment/vnpay/ipn', (req, res) => {
    const q = req.query || {};
    const v = verifyCallback(q);
    const now = Date.now();
    const event_key = `${v.orderRef}:${v.gatewayTxnNo || q.vnp_TransactionNo || ''}:${v.responseCode}`;

    if (!v.valid) {
      try { insertInboxStmt.run({ gateway: 'vnpay', event_key, order_ref: v.orderRef, payload: JSON.stringify(q), signature_valid: 0, t: now }); } catch {}
      return res.json(IPN_RESPONSES.invalidSig);
    }

    const invoice = getInvoiceByRefStmt.get(v.orderRef);
    if (!invoice) return res.json(IPN_RESPONSES.orderNotFound);
    if (Math.round(invoice.amount) !== Math.round(v.amount)) return res.json(IPN_RESPONSES.amountInvalid);

    // Idempotency: nếu đã ghi inbox event này → đã xử lý, trả alreadyConfirmed.
    try {
      insertInboxStmt.run({ gateway: 'vnpay', event_key, order_ref: v.orderRef, payload: JSON.stringify(q), signature_valid: 1, t: now });
    } catch (e) {
      // UNIQUE(gateway, event_key) vi phạm → retry trùng, coi như đã confirm.
      return res.json(IPN_RESPONSES.alreadyConfirmed);
    }

    // Đơn đã chốt trước đó (qua event khác) → không ghi sổ lần nữa.
    if (invoice.status === 'paid') {
      markInboxProcessedStmt.run({ gateway: 'vnpay', event_key, t: now });
      return res.json(IPN_RESPONSES.alreadyConfirmed);
    }

    const success = isSuccessCode(v.responseCode);
    const tx = db.transaction(() => {
      insertPaymentStmt.run({
        school_id: invoice.school_id, invoice_id: invoice.id, gateway: 'vnpay',
        gateway_txn_ref: v.gatewayTxnNo || null, amount: v.amount,
        status: success ? 'success' : 'failed', response_code: v.responseCode,
        raw_response: JSON.stringify(q), t: now,
      });
      if (success) {
        markInvoicePaidStmt.run({ id: invoice.id, t: now });
        recordPaymentSettled({ school_id: invoice.school_id, gateway: 'vnpay', amount: v.amount, invoice_id: invoice.id });
      } else {
        markInvoiceFailedStmt.run({ id: invoice.id, t: now });
      }
      markInboxProcessedStmt.run({ gateway: 'vnpay', event_key, t: now });
    });
    tx();

    return res.json(IPN_RESPONSES.success);
  });

  // ── Return URL: browser quay về — CHỈ hiển thị, KHÔNG chốt đơn ──
  r.get('/api/payment/vnpay/return', (req, res) => {
    const v = verifyCallback(req.query || {});
    if (!v.valid) {
      return res.status(400).json({ ok: false, error: 'invalid_signature' });
    }
    const invoice = getInvoiceByRefStmt.get(v.orderRef);
    const success = isSuccessCode(v.responseCode);
    res.json({
      ok: true,
      orderRef: v.orderRef,
      success,
      responseCode: v.responseCode,
      // Trạng thái CHÍNH THỨC lấy từ invoice (do IPN cập nhật), không từ return URL.
      invoiceStatus: invoice?.status || 'unknown',
      note: 'Trạng thái cuối cùng được xác nhận qua IPN (server-to-server).',
    });
  });

  // ── Tra cứu trạng thái đơn (cho client poll sau khi quay về) ──
  r.get('/api/payment/invoices/:orderRef', requireAuth, (req, res) => {
    const invoice = getInvoiceByRefStmt.get(String(req.params.orderRef));
    if (!invoice) return res.status(404).json({ error: 'not_found' });
    // Chỉ chủ đơn (hoặc cùng trường + teacher) xem được — đơn giản: chủ đơn.
    if (invoice.user_id !== req.user.id && req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'forbidden' });
    }
    res.json({
      orderRef: invoice.order_ref, amount: invoice.amount, currency: invoice.currency,
      status: invoice.status, description: invoice.description,
      created_at: invoice.created_at, paid_at: invoice.paid_at,
    });
  });

  console.log('[payment] routes mounted: /api/payment/* (vnpay)');
}
