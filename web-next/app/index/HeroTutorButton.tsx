'use client';

import styles from './index.module.css';

declare global {
  interface Window { EduTutor?: { open?: () => void } }
}

// Nút "Hỏi AI Tutor" — mở trợ lý AI nổi (tutor-floating.js gắn window.EduTutor).
// Trong web-next chưa nhúng widget đó → guard optional-chaining như trang gốc.
export default function HeroTutorButton() {
  return (
    <button
      type="button"
      className={`${styles.cta} ${styles.ctaGhost}`}
      onClick={() => window.EduTutor?.open?.()}
    >
      Hỏi AI Tutor
    </button>
  );
}
