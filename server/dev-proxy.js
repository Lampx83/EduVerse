// Dev proxy: chạy localhost:8041 nhưng mọi API/auth/app động đẩy thẳng sang
// https://tizia.vn — dùng để chỉnh sửa FE trong public/ và thấy ngay data
// (DB + session + AI) của prod. KHÔNG dùng cho prod, KHÔNG đụng tới
// data/tizia.db local. Chạy: `npm run dev:prod`.
//
// Nguyên tắc proxy:
//   - file tồn tại trong public/ hoặc node_modules/@mediapipe/tasks-vision/
//     → serve trực tiếp từ máy local (hot-reload nhanh).
//   - mọi request còn lại (bao gồm /api/*, /auth/*, /scoreup/*, /codelab/*,
//     …) → đẩy qua HTTPS tới PROD_ORIGIN. Cookie session được rewrite để
//     sống trên localhost (xoá Domain, xoá Secure).
//
// HẠN CHẾ đã biết:
//   - WebSocket (/ws cho metaverse room) chưa proxy → tính năng đa người
//     chơi sẽ không chạy trên localhost.
//   - OAuth (Google/Microsoft) đăng ký redirect_uri ở tizia.vn → callback
//     sẽ về tizia.vn chứ không về localhost. Hãy login bằng username/pw
//     hoặc đăng nhập sẵn ở tizia.vn rồi copy cookie.

import express from 'express';
import http from 'node:http';
import https from 'node:https';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
const MEDIAPIPE_DIR = path.resolve(ROOT_DIR, 'node_modules', '@mediapipe', 'tasks-vision');

const PORT = Number(process.env.PORT) || 8041;
const HOST = process.env.HOST || '127.0.0.1';
const PROD_ORIGIN = process.env.PROD_ORIGIN || 'https://tizia.vn';
const prodUrl = new URL(PROD_ORIGIN);
const PROD_HOST = prodUrl.hostname;
const PROD_PORT = prodUrl.port ? Number(prodUrl.port) : (prodUrl.protocol === 'https:' ? 443 : 80);
const PROD_PROTO = prodUrl.protocol;

const app = express();

// ── Static local trước (FE), miss → next() → proxy ──
app.use('/vendor/mediapipe', express.static(MEDIAPIPE_DIR, {
  fallthrough: true, maxAge: '1y', immutable: true,
}));
app.use(express.static(PUBLIC_DIR, { extensions: ['html'], fallthrough: true }));

// ── Proxy mọi request còn lại sang prod ──
const proxyClient = PROD_PROTO === 'https:' ? https : http;

function rewriteSetCookie(arr, localOrigin) {
  return arr.map((c) => c
    .replace(/;\s*Domain=[^;]+/ig, '')        // bỏ Domain=tizia.vn để cookie nhận trên localhost
    .replace(/;\s*Secure/ig, '')               // localhost http → không Secure
    .replace(/;\s*SameSite=None/ig, '; SameSite=Lax')
  );
}

function rewriteLocation(loc, localOrigin) {
  if (!loc) return loc;
  // tuyệt đối về prod → chuyển thành relative để client tự ráp localhost
  if (loc.startsWith(PROD_ORIGIN)) return loc.slice(PROD_ORIGIN.length) || '/';
  return loc;
}

app.use((req, res) => {
  const localOrigin = `http://${req.headers.host}`;
  const upHeaders = { ...req.headers, host: PROD_HOST };
  // Tránh phải gỡ nén khi rewrite — yêu cầu plain để đỡ phải đụng body.
  delete upHeaders['accept-encoding'];
  // Trỏ Origin/Referer về prod để CSRF/security check ở backend không từ chối.
  if (upHeaders.origin) upHeaders.origin = PROD_ORIGIN;
  if (upHeaders.referer) {
    upHeaders.referer = upHeaders.referer.replace(localOrigin, PROD_ORIGIN);
  }
  // X-Forwarded-* để backend log/IP đúng nguồn dev.
  upHeaders['x-forwarded-host'] = req.headers.host;
  upHeaders['x-forwarded-proto'] = 'http';
  upHeaders['x-forwarded-for'] = req.socket.remoteAddress || '';

  const upReq = proxyClient.request({
    host: PROD_HOST,
    port: PROD_PORT,
    method: req.method,
    path: req.originalUrl,
    headers: upHeaders,
    servername: PROD_HOST,         // SNI cho TLS
  }, (upRes) => {
    const headers = { ...upRes.headers };
    if (headers['set-cookie']) {
      headers['set-cookie'] = rewriteSetCookie(headers['set-cookie'], localOrigin);
    }
    if (headers.location) {
      headers.location = rewriteLocation(headers.location, localOrigin);
    }
    // HSTS không phù hợp ở localhost http → bỏ.
    delete headers['strict-transport-security'];
    res.writeHead(upRes.statusCode || 502, upRes.statusMessage, headers);
    upRes.pipe(res);
  });

  upReq.on('error', (err) => {
    console.error(`[dev-proxy] upstream error ${req.method} ${req.originalUrl}: ${err.message}`);
    if (!res.headersSent) res.status(502);
    res.end(`Dev proxy → ${PROD_ORIGIN} lỗi: ${err.message}`);
  });

  req.pipe(upReq);
});

http.createServer(app).listen(PORT, HOST, () => {
  console.log(`[dev-proxy] http://${HOST}:${PORT}`);
  console.log(`[dev-proxy]   static  → ${PUBLIC_DIR}`);
  console.log(`[dev-proxy]   dynamic → ${PROD_ORIGIN}`);
  console.log(`[dev-proxy] FE edit trong public/ sẽ thấy ngay; API/DB/session đều của prod.`);
});
