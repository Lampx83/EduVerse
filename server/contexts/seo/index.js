// ============================================================
// SEO context — robots.txt, sitemap.xml, public crawlable landing + JSON-LD
// ============================================================
// VẤN ĐỀ kiến trúc: makeAuthGate redirect MỌI trang HTML chưa login về
// /login.html → Googlebot không index được nội dung. Giải pháp: tách lớp
// "trang công khai" (landing/giới thiệu trường) KHÔNG qua gate, có meta +
// Open Graph + JSON-LD đầy đủ → Google index được; bấm "Vào học" mới yêu cầu login.
//
// attachSeo PHẢI được whitelist trong auth.js (PUBLIC_PATH_*). Các route ở đây
// là public theo thiết kế.
// ============================================================

import { listSchools } from '../../db.js';

// Origin tuyệt đối cho sitemap/canonical: ưu tiên env, fallback từ header request.
function originOf(req, basePath = '') {
  const env = process.env.PUBLIC_ORIGIN;
  if (env) return env.replace(/\/$/, '') + basePath;
  const proto = (req.headers['x-forwarded-proto'] || req.protocol || 'http').split(',')[0];
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  return `${proto}://${host}${basePath}`;
}

function xmlEscape(s) {
  return String(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
}
function htmlEscape(s) {
  return String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
}

// Danh mục trang công khai (crawlable). Mở rộng khi có thêm landing.
function publicUrls(origin) {
  const urls = [
    { loc: `${origin}/welcome`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${origin}/login.html`, priority: '0.3', changefreq: 'monthly' },
  ];
  // Mỗi trường → 1 landing công khai /welcome?school=<code> (giới thiệu, SEO theo trường).
  try {
    for (const s of listSchools()) {
      urls.push({ loc: `${origin}/welcome?school=${encodeURIComponent(s.code)}`, priority: '0.8', changefreq: 'weekly' });
    }
  } catch {}
  return urls;
}

// JSON-LD: tổ chức giáo dục + (tuỳ) khoá học. Giúp Google hiện rich snippet.
function jsonLd(origin, school) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: school ? `Tizia · ${school.name}` : 'Tizia',
    url: origin + (school ? `/welcome?school=${school.code}` : '/welcome'),
    description: 'Vũ trụ giáo dục ảo: nhiều trường ảo (Dược, CNTT, Kinh tế, phổ thông) với 2D · 3D · VR · XR · Metaverse · gamification, do AI điều hành.',
    inLanguage: 'vi-VN',
  };
  return JSON.stringify(org);
}

export function attachSeo(r, { basePath = '' } = {}) {
  // robots.txt — cho phép crawl, trỏ sitemap.
  r.get('/robots.txt', (req, res) => {
    const origin = originOf(req, basePath);
    res.type('text/plain').send(
      `User-agent: *\nAllow: /$\nAllow: /welcome\nAllow: /login.html\n` +
      `# Khu vực ứng dụng cần đăng nhập — không index\nDisallow: /api/\nDisallow: /sim/\n` +
      `Sitemap: ${origin}/sitemap.xml\n`
    );
  });

  // sitemap.xml — động từ danh sách trang công khai + landing mỗi trường.
  r.get('/sitemap.xml', (req, res) => {
    const origin = originOf(req, basePath);
    const items = publicUrls(origin).map((u) =>
      `  <url>\n    <loc>${xmlEscape(u.loc)}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    ).join('\n');
    res.type('application/xml').send(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`
    );
  });

  // /welcome — trang công khai (crawlable) giới thiệu nền tảng / 1 trường.
  // Có meta + Open Graph + JSON-LD. CTA "Vào học" mới dẫn tới app (cần login).
  r.get('/welcome', (req, res) => {
    const origin = originOf(req, basePath);
    const code = String(req.query.school || '').trim();
    let school = null;
    if (code) { try { school = listSchools().find((s) => s.code === code) || null; } catch {} }
    const title = school ? `Tizia · ${school.name} — Học tương tác 3D/VR do AI điều hành`
                         : 'Tizia — Vũ trụ giáo dục ảo 3D · VR · AI';
    const desc = 'Nền tảng giáo dục ảo: trường Dược, CNTT, Kinh tế và phổ thông với mô phỏng 2D/3D/VR/XR, gamification, gia sư AI và Ban điều hành AI tự cải tiến theo góp ý người học.';
    const canonical = school ? `${origin}/welcome?school=${school.code}` : `${origin}/welcome`;
    res.type('html').send(`<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${htmlEscape(title)}</title>
<meta name="description" content="${htmlEscape(desc)}" />
<link rel="canonical" href="${htmlEscape(canonical)}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${htmlEscape(title)}" />
<meta property="og:description" content="${htmlEscape(desc)}" />
<meta property="og:url" content="${htmlEscape(canonical)}" />
<meta property="og:locale" content="vi_VN" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json">${jsonLd(origin, school)}</script>
</head>
<body>
<main>
<h1>${htmlEscape(school ? `Tizia · ${school.name}` : 'Tizia — Vũ trụ giáo dục ảo')}</h1>
<p>${htmlEscape(desc)}</p>
<p><a href="${basePath}/login.html?return=${encodeURIComponent(basePath + '/')}">Vào học ngay →</a></p>
<nav><a href="${basePath}/welcome">Trang chủ</a></nav>
</main>
</body>
</html>`);
  });

  console.log('[seo] routes mounted: /robots.txt, /sitemap.xml, /welcome');
}
