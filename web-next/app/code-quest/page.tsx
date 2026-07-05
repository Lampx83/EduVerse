import type { Metadata } from 'next';
import GameClient from './game-client';

export const metadata: Metadata = {
  title: '🤖 Code Quest · Tizia',
  description: 'Học lập trình kéo thả: giải puzzle bằng các khối lệnh, dành cho học sinh lớp 3 đến lớp 9.',
};

// Server Component chỉ lo SEO (title/description). Toàn bộ game kéo-thả +
// canvas robot là tương tác client → nằm trong GameClient ('use client').
// Game hoàn toàn client-side (localStorage cho điểm tốt nhất), không gọi API.
export default function CodeQuest() {
  return <GameClient />;
}
