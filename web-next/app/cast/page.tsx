import type { Metadata } from 'next';
import CastView from './CastView';

export const metadata: Metadata = {
  title: 'Cast trình chiếu',
  description: 'Chiếu nội dung Tizia lên máy chiếu lớp — view sạch, không nút điều khiển, có mã phòng và đồng hồ.',
};

// Toàn bộ hành vi (đọc query, iframe, timer, picker) là client-side y như bản gốc.
export default function CastPage() {
  return <CastView />;
}
