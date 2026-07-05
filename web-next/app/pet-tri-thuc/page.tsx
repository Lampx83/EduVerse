import type { Metadata } from 'next';
import PetClient from './pet-client';

export const metadata: Metadata = {
  title: '🐣 Pet Tri Thức · Tizia',
  description:
    'Nuôi Tiziamon — sinh vật ảo lớn lên theo kiến thức của em. Trả lời quiz để cho ăn, học, chơi cùng pet!',
};

export default function PetTriThucPage() {
  return <PetClient />;
}
