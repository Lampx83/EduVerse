import type { Metadata } from 'next';
import AiQuizGenClient from './AiQuizGenClient';

export const metadata: Metadata = {
  title: '🤖 AI Quiz Generator · Tizia',
  description:
    'Sinh quest trắc nghiệm bằng AI — chỉ cần nhập chủ đề + lớp. Xem trước, chỉnh sửa, đăng vào marketplace.',
};

export default function AiQuizGenPage() {
  return <AiQuizGenClient />;
}
