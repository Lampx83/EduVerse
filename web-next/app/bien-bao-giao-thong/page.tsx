import type { Metadata } from 'next';
import SignsMount from './SignsMount';

export const metadata: Metadata = {
  title: '🚸 Biển báo Giao thông · Tizia',
  description:
    'Học và đố biển báo giao thông Việt Nam: cấm, nguy hiểm, hiệu lệnh, chỉ dẫn. SVG vẽ tay, không cần ảnh.',
};

// Server Component: khung SEO tĩnh (tiêu đề) render sẵn. Phần tương tác (học/đố
// vui, lọc nhóm, modal chi tiết, đếm điểm) nằm trong SignsMount ('use client'),
// tái dùng script vanilla qua public/legacy/bien-bao-giao-thong.js.
export default function BienBaoGiaoThong() {
  return (
    <div className="flex flex-col items-center gap-[18px] py-2">
      <h1 className="m-0 text-[22px] font-semibold">🚸 Biển báo Giao thông Việt Nam</h1>
      <SignsMount />
    </div>
  );
}
