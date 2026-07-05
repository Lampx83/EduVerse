import type { Metadata } from 'next';
import BaoSoHocClient from './bao-so-hoc-client';

// Trang trò chơi tương tác (game loop client). Server component chỉ để giữ
// metadata SEO; toàn bộ tương tác nằm trong client component.
export const metadata: Metadata = {
  title: '⛈️ Bão Số Học · Tizia',
  description:
    'Phép tính rơi xuống như mưa — chọn đáp án nhanh trước khi chạm đất. Trò chơi luyện tính nhẩm vui nhộn.',
};

export default function BaoSoHocPage() {
  return <BaoSoHocClient />;
}
