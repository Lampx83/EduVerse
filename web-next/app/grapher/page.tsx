import type { Metadata } from 'next';
import GrapherClient from './grapher-client';

export const metadata: Metadata = {
  title: '📈 Đồ thị hàm số · Tizia',
  description: 'Kéo hệ số, xem đồ thị hàm bậc nhất / bậc hai / lượng giác đổi ngay trên canvas — kèm phần củng cố.',
};

export default function GrapherPage() {
  return <GrapherClient />;
}
