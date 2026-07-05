import type { Metadata } from 'next';
import Link from 'next/link';
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
        <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
          <nav className="container flex items-center gap-5 py-3 text-sm">
            <Link href="/" className="font-semibold text-primary">Tizia · Next</Link>
            <Link href="/leaderboard" className="text-muted-foreground transition-colors hover:text-foreground">Bảng xếp hạng</Link>
            <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">Dashboard</Link>
            <span className="ml-auto text-xs text-muted-foreground">shadcn/ui · Next 16 · React 19</span>
          </nav>
        </header>
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
