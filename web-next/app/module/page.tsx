import type { Metadata } from 'next';
import ScenarioMount from './ScenarioMount';

// Server Component: khung SEO tĩnh cho module hub. Tiêu đề/subtitle/metadata
// module thực tế được đặt động ở client (theo ?module= + domain đang hoạt động
// qua public/legacy/module.js) — giữ nguyên hành vi bản public/module.html gốc.
export const metadata: Metadata = {
  title: 'Module · Tizia',
  description:
    'Module hub Tizia — chọn bài theo 3 nhóm Thực hành, Lý thuyết và Luyện kỹ năng; dispatch quiz, role-play và lab tương ứng cấp học.',
};

export default function ModulePage() {
  return (
    <div className="w-full">
      <ScenarioMount />
    </div>
  );
}
