import type { Metadata } from 'next';
import BpMeasure from './BpMeasure';

export const metadata: Metadata = {
  title: 'Đo huyết áp · Korotkoff',
  description: 'Mô phỏng đo huyết áp bằng phương pháp Korotkoff: bơm bao đo, xả từ từ, nghe tiếng đập để xác định tâm thu / tâm trương.',
};

export default function BpMeasurePage() {
  return <BpMeasure />;
}
