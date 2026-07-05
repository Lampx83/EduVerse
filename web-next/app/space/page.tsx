import type { Metadata } from 'next';
import SpaceMount from './SpaceMount';

// Trang "Không gian khám phá" (space) — bộ nội dung + phòng trải nghiệm + quiz
// SRS cá nhân hoá, tất cả LẤY TỪ DB qua API (/api/content/space-sets,
// /api/skills/*, /api/curriculum/*). Server component chỉ giữ metadata SEO;
// toàn bộ tương tác (modal, canvas game, audio, quiz) nằm trong client mount.
// Tiêu đề thực (emoji + tên trường) được wrap client cập nhật theo ?b=&?domain=.
export const metadata: Metadata = {
  title: 'Không gian · Tizia',
  description:
    'Không gian khám phá theo trường: phòng trải nghiệm, hoạt động thực hành và quiz củng cố kiến thức cá nhân hoá.',
};

export default function SpacePage() {
  return <SpaceMount />;
}
