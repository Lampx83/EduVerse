import type { Metadata } from 'next';
import Leaderboard from './leaderboard';

export const metadata: Metadata = {
  title: '🏆 Bảng Phong Thần · Tizia',
  description:
    'Bảng xếp hạng cao thủ Tizia — top học sinh giỏi nhất theo tuần, tháng, mọi thời gian.',
};

// Server Component: chỉ dựng khung tĩnh (hero + link) cho SEO; toàn bộ dữ liệu
// leaderboard được gộp client-side qua nhiều version giống trang gốc.
export default function BangPhongThanPage() {
  return <Leaderboard />;
}
