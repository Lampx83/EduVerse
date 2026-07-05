import type { Metadata } from 'next';
import PediatricDose from './PediatricDose';

export const metadata: Metadata = {
  title: 'Máy tính liều Nhi · Pediatric Dosing',
  description:
    'Tính liều siro nhi khoa theo cân nặng: liều mg/kg, thể tích cần hút, giới hạn tối đa/ngày, kèm quiz tự kiểm luyện tính nhanh.',
};

export default function PediatricDosePage() {
  return <PediatricDose />;
}
