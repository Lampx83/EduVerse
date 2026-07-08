import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Tizia — Vũ trụ giáo dục ảo', template: '%s · Tizia' },
  description:
    'Tizia — nền tảng học tập đa cấp Dược · CNTT · Kinh tế · phổ thông theo GDPT 2018. Bản Next.js (pilot).',
  metadataBase: new URL('http://localhost:3200'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // class="dark" → Tizia mặc định theme tối (tokens ở globals.css .dark)
    <html lang="vi" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteHeader />
        <main className="w-full px-4 py-6 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
