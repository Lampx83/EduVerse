import type { Metadata } from 'next';
import DoChuGhepVanClient from './do-chu-ghep-van-client';

// Trang trò chơi tương tác (kéo thả client). Server component chỉ giữ metadata
// SEO; toàn bộ tương tác nằm trong client component.
export const metadata: Metadata = {
  title: '🔤 Đố Chữ Ghép Vần · Tizia',
  description:
    'Trò chơi ghép âm tiết Tiếng Việt — kéo các chữ cái vào ô để tạo từ theo nghĩa được gợi ý. Dành cho lớp 1-3.',
};

export default function DoChuGhepVanPage() {
  return <DoChuGhepVanClient />;
}
