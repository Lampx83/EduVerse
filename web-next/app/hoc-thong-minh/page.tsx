import type { Metadata } from 'next';
import HocThongMinhClient from './HocThongMinhClient';

export const metadata: Metadata = {
  title: '🧠 Học thông minh · Tizia',
  description:
    'Học theo lộ trình AI — Tizia chọn câu hỏi phù hợp độ khó cho em (adaptive IRT) + đề xuất kỹ năng kế tiếp dựa trên knowledge graph.',
};

export default function HocThongMinhPage() {
  return <HocThongMinhClient />;
}
