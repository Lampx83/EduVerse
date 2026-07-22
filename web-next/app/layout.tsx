import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import RouteThemeGuard from '@/components/RouteThemeGuard';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Tizia — Vũ trụ giáo dục ảo', template: '%s · Tizia' },
  description:
    'Tizia — nền tảng học tập đa cấp Dược · CNTT · Kinh tế · phổ thông theo GDPT 2018. Bản Next.js (pilot).',
  metadataBase: new URL('http://localhost:3200'),
};

// Chạy TRƯỚC khi paint để chống nhấp nháy: quyết định nền sáng/tối ngay.
// Quy tắc (khớp lib/theme-routes.ts + RouteThemeGuard):
//   • Trang trong allowlist "đọc" → theo lựa chọn 'tizia-theme' (system|light|dark)
//   • MỌI trang khác → ép nền TỐI (app vốn dark-only, tránh chữ trắng/nền trắng)
// ⚠️ Danh sách regex dưới đây phải khớp LIGHT_THEME_ROUTES ở lib/theme-routes.ts.
const themeInit = `(function(){try{var p=(location.pathname||'/').replace(/\\/+$/,'')||'/';var lightOK=/^\\/(index\\.html)?$/.test(p)||/^\\/(kham-pha|pricing|league|leaderboard|login|register|complete-profile|dashboard|nang-luc|marketplace|school)(\\/|$)/.test(p);var t=localStorage.getItem('tizia-theme')||'system';var ud=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var d=lightOK?ud:true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Class `dark` do inline script bên dưới quyết định theo lựa chọn người dùng
    // (sáng / tối / theo hệ thống). suppressHydrationWarning vì script đổi class
    // trước khi React hydrate.
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <RouteThemeGuard />
        <SiteHeader />
        <main className="w-full px-4 py-6 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
