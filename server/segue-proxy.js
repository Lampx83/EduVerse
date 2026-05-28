// ============================================================
// SEGUE proxy — reverse-proxy the embedded Pharmacy-AI app
// ============================================================
// Pharmacy-AI is a separate Next.js process (React Three Fiber + SEGUE
// scoring) bundled under pharmacy-ai/. It listens on its own port and owns
// the "/segue" path via Next's basePath. This middleware forwards every
// /segue/* request (pages, /segue/_next/* assets, /segue/api/* routes) to it
// so the whole thing is reachable on EduVerse's single origin/port.
//
// Mounted on the Express app BEFORE express.json() so POST bodies
// (chat / action / score) stream through untouched.
//
// Env:
//   SEGUE_TARGET — upstream Next.js origin (default http://127.0.0.1:3100)
// ============================================================

import http from 'node:http';

const TARGET = (process.env.SEGUE_TARGET || 'http://127.0.0.1:3100').replace(/\/+$/, '');
const { hostname, port } = new URL(TARGET);

console.log(`[segue] proxy → ${TARGET}`);

/**
 * Attach the SEGUE reverse proxy to an Express app.
 * @param {import('express').Express} app
 * @param {string} mountPath  e.g. "/segue" (or "<BASE_PATH>/segue")
 */
export function attachSegueProxy(app, mountPath) {
  app.use(mountPath, (req, res) => {
    const proxyReq = http.request(
      {
        hostname,
        port: port || 80,
        method: req.method,
        // Forward the ORIGINAL url (keeps the /segue prefix) so Next's
        // basePath keeps matching. Express would otherwise strip mountPath.
        path: req.originalUrl,
        headers: { ...req.headers, host: `${hostname}:${port}` },
      },
      (proxyRes) => {
        res.writeHead(proxyRes.statusCode || 502, proxyRes.headers);
        proxyRes.pipe(res);
      }
    );
    proxyReq.on('error', (err) => {
      if (res.headersSent) return res.destroy();
      res.status(502).type('html').send(segueDownPage(err));
    });
    req.pipe(proxyReq);
  });
}

function segueDownPage(err) {
  return `<!doctype html><html lang="vi"><meta charset="utf-8">
<title>Mô phỏng SEGUE chưa sẵn sàng</title>
<body style="font-family:system-ui,sans-serif;background:#0f172a;color:#fff;padding:48px;line-height:1.7;max-width:680px;margin:auto">
  <h1 style="color:#fbbf24">🗣️ Mô phỏng SEGUE chưa chạy</h1>
  <p>Tiến trình Pharmacy-AI (Next.js) tại <code>${TARGET}</code> không phản hồi.</p>
  <p>Khởi động bằng: <code>npm run segue:start</code> — hoặc kiểm tra tiến trình/container <code>segue</code>.</p>
  <p style="opacity:.55;font-size:13px">Chi tiết: ${String((err && err.message) || err)}</p>
  <p><a style="color:#fbbf24" href="../school.html?domain=pharmacy">← Quay lại Trường Dược</a></p>
</body></html>`;
}
