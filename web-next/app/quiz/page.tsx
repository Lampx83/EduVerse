import type { Metadata } from 'next';
import QuizClient from './quiz-client';

// Trang quiz tương tác (timer + chấm điểm ở client). Server component chỉ giữ
// metadata SEO; toàn bộ tương tác + nạp câu hỏi nằm trong client component.
export const metadata: Metadata = {
  title: 'Tizia · Quiz nhanh',
  description: 'Nhìn tên thuốc → chọn đúng nhóm điều trị · 10 câu / lượt.',
};

export default function QuizPage() {
  return <QuizClient />;
}
