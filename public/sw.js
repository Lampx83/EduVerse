/* Tizia Service Worker — offline-first cho mạng yếu / vùng sâu.
 *
 * Chiến lược:
 *   - HTML/navigations  → Network-first, fallback cache → fallback /index.html.
 *   - JS/CSS/JSON same-origin → Stale-While-Revalidate (nhanh + tự cập nhật ngầm).
 *   - Hình ảnh / glTF / GLB / fonts → Cache-first (immutable assets).
 *   - API (/api/*)      → Network-only (KHÔNG cache để không hỏng leaderboard/AI).
 *   - WebSocket (/ws*)  → bypass (browser tự xử lý).
 *
 * Cache shell: precache 1 vòng các trang trọng yếu để mở app vẫn vào được khi
 * offline. Versioning theo SW_VERSION — bump khi đổi shell danh sách.
 */

const SW_VERSION = 'tizia-2026-06-02-quicklinks-7minigames';
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

  // JS / CSS / JSON → Stale-While-Revalidate
  if (isAsset(req)) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      const cached = await cache.match(req);
      const network = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await network) || Response.error();
    })());
  }
});
