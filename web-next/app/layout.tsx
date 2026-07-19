import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Tizia — Vũ trụ giáo dục ảo', template: '%s · Tizia' },
  description:
    'Tizia — nền tảng học tập đa cấp Dược · CNTT · Kinh tế · phổ thông theo GDPT 2018. Bản Next.js (pilot).',
  metadataBase: new URL('http://localhost:3200'),
};

// Chạy TRƯỚC khi paint để chống nhấp nháy: đọc lựa chọn theme đã lưu
// ('tizia-theme' = system|light|dark) và áp class `dark` lên <html> ngay.
// Mặc định 'system' → bám prefers-color-scheme của máy. Đồng bộ với ThemeToggle.
const themeInit = `(function(){try{var t=localStorage.getItem('tizia-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

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
        <SiteHeader />
        <main className="w-full px-4 py-6 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
