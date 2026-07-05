import type { Metadata } from 'next';
import Lop2GhepVanClient from './lop2-ghep-van-client';

// Trang trò chơi tương tác (ghép âm đầu + vần + dấu thanh). Server component chỉ
// giữ metadata SEO; toàn bộ tương tác nằm trong client component.
export const metadata: Metadata = {
  title: '🔤 Ghép vần · Tiếng Việt Lớp 2 · Tizia',
  description:
    'Trò chơi ghép vần Tiếng Việt lớp 2 — chọn 1 âm đầu + 1 vần + 1 dấu thanh để tạo tiếng đúng theo nghĩa gợi ý.',
};

export default function Lop2GhepVanPage() {
  return <Lop2GhepVanClient />;
}
