import type { Metadata } from 'next';
import GhepChuCaiClient from './ghep-chu-cai-client';

// Trang trò chơi tương tác (nhận diện chữ cái, client). Server component chỉ giữ
// metadata SEO; toàn bộ tương tác nằm trong client component.
export const metadata: Metadata = {
  title: '🔤 Ghép Chữ Cái · Tizia',
  description:
    'Bé tap đúng chữ cái cô đưa ra. Trò chơi nhận diện bảng chữ cái A-Á-Â cho 3-5 tuổi.',
};

export default function GhepChuCaiPage() {
  return <GhepChuCaiClient />;
}
