import type { Metadata } from 'next';
import CipherCtfClient from './it-cipher-ctf-client';

// Trang tương tác client (bàn làm việc mật mã + thử thách CTF). Server component
// chỉ giữ metadata SEO; toàn bộ tương tác nằm trong client component.
export const metadata: Metadata = {
  title: '🔒 Mật mã & CTF · Trường CNTT · Tizia',
  description: 'Bàn làm việc mã Caesar & Atbash, phân tích tần suất chữ cái và thử thách bắt cờ (CTF) mật mã cổ điển.',
};

export default function CipherCtfPage() {
  return <CipherCtfClient />;
}
