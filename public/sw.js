/* Tizia Service Worker — offline-first cho mạng yếu / vùng sâu.
 *
 * Chiến lược:
 *   - HTML/navigations  → Network-first, fallback cache → fallback /index.html.
 *   - JS/MJS same-origin → Network-first (cache:'no-cache' để revalidate qua 304),
 *       fallback cache khi offline. LÝ DO: HTML là network-first nên luôn mới; nếu
 *       JS bị phục vụ stale (SWR) thì ES-module import lệch version → "does not
 *       provide an export named X" → trang kẹt "Đang tải nội dung…" (chỉ Ctrl+Shift+R
 *       mới thoát). Network-first cho JS bảo đảm HTML mới luôn ghép JS mới.
 *   - CSS/JSON same-origin → Stale-While-Revalidate, revalidate cache:'no-cache'
 *       (bypass HTTP max-age=86400 nên tự lành sau 1 lần tải, không kẹt 24h).
 *   - Hình ảnh / glTF / GLB / fonts → Cache-first (immutable assets).
 *   - API (/api/*)      → Network-only (KHÔNG cache để không hỏng leaderboard/AI).
 *   - WebSocket (/ws*)  → bypass (browser tự xử lý).
 *
 * Cache shell: precache 1 vòng các trang trọng yếu để mở app vẫn vào được khi
 * offline. Versioning theo SW_VERSION — bump khi đổi shell danh sách.
 */

const SW_VERSION = 'tizia-2026-06-10-js-netfirst-v17';
const SHELL_CACHE = `${SW_VERSION}-shell`;
const RUNTIME_CACHE = `${SW_VERSION}-runtime`;
const IMAGE_CACHE = `${SW_VERSION}-img`;

// Trang trọng yếu — vào được kể cả khi offline ngay lần đầu cài.
const SHELL_URLS = [
  './',
  './index.html',
  './school.html',
  './apps.html',
  './dashboard.html',
  './teacher.html',
  './quiz.html',
  './subject.html',
  './module.html',
  './assets.html',
  './cast.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // best-effort — đừng để 1 url 404 phá nguyên install
    await Promise.allSettled(SHELL_URLS.map(u => cache.add(new Request(u, { cache: 'reload' }))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(k => !k.startsWith(SW_VERSION))
      .map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

function isApi(url) {
  return url.pathname.startsWith('/api/') || url.pathname.includes('/api/');
}
function isWs(url) {
  return url.pathname.startsWith('/ws') || url.pathname.includes('/ws-');
}
function isImage(req) {
  if (req.destination === 'image' || req.destination === 'font') return true;
  const p = new URL(req.url).pathname.toLowerCase();
  return /\.(png|jpg|jpeg|webp|svg|gif|avif|woff2?|ttf|otf|glb|gltf|hdr|exr|mp3|wav|ogg)$/.test(p);
}
function isAsset(req) {
  if (req.destination === 'script' || req.destination === 'style') return true;
  const p = new URL(req.url).pathname.toLowerCase();
  return /\.(js|mjs|css|json)$/.test(p);
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Chỉ xử lý same-origin để không vướng CORS/credentials cross-origin
  if (url.origin !== self.location.origin) return;
  if (isWs(url)) return;
  if (isApi(url)) return; // mặc định để mạng tự đi qua

  // HTML / navigation → Network-first
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(SHELL_CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(req);
        if (cached) return cached;
        const fallback = await caches.match('./index.html');
        return fallback || new Response('Offline', { status: 503, statusText: 'Offline' });
      }
    })());
    return;
  }

  // Image / font / 3D / audio → Cache-first
  if (isImage(req)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.ok) {
          const cache = await caches.open(IMAGE_CACHE);
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch {
        return cached || Response.error();
      }
    })());
    return;
  }

  if (isAsset(req)) {
    const path = url.pathname.toLowerCase();
    // JS / MJS (kể cả ES module) → NETWORK-FIRST. Phải khớp version với HTML
    // (network-first) — nếu phục vụ stale thì import lệch export → SyntaxError →
    // trang trắng. cache:'no-cache' = gửi conditional request, server trả 304 khi
    // không đổi (nhẹ) nhưng KHÔNG bị HTTP disk cache (max-age=86400) giữ bản cũ.
    // Offline → fallback bản trong SW cache.
    const isScript = req.destination === 'script' || /\.(?:js|mjs)$/.test(path);
    if (isScript) {
      event.respondWith((async () => {
        const cache = await caches.open(RUNTIME_CACHE);
        try {
          const fresh = await fetch(req, { cache: 'no-cache' });
          if (fresh && fresh.ok) { cache.put(req, fresh.clone()); return fresh; }
          const cached = await cache.match(req);
          return cached || fresh;   // 5xx mà có cache → dùng cache; không thì trả lỗi gốc
        } catch {
          const cached = await cache.match(req);
          return cached || Response.error();
        }
      })());
      return;
    }
    // CSS / JSON → Stale-While-Revalidate (nhanh), nhưng revalidate cache:'no-cache'
    // để KHÔNG kẹt bản cũ trong HTTP cache 24h → tự lành sau lần tải kế.
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      const cached = await cache.match(req);
      const network = fetch(req, { cache: 'no-cache' }).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await network) || Response.error();
    })());
  }
});

// ── Web Push — nhắc học từ smart-notif (server gửi qua VAPID) ──
self.addEventListener('push', (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch {}
  event.waitUntil(self.registration.showNotification(d.title || 'Tizia', {
    body: d.body || '',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    data: { url: d.url || './' },
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || './', self.location.origin).href;
  event.waitUntil((async () => {
    const wins = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) {
      if (w.url === url && 'focus' in w) return w.focus();
    }
    return clients.openWindow(url);
  })());
});
