// ============================================================
// Domain loader — chọn trường nào sẽ hiển thị
// ============================================================
// Quy ước: URL param `?domain=pharmacy` (mặc định 'pharmacy').
//
// Hai khái niệm tách biệt:
//   - DOMAIN_REGISTRY: các trường ĐÃ MỞ (có folder + được phép vào).
//   - DOMAIN_META:     toàn bộ trường hiển thị trên selector (kể cả khoá).
//
// `status`:
//   'ready'   = mở, nội dung đầy đủ
//   'preview' = mở, mới có skeleton (quiz auto-stub)
//   'locked'  = hiển thị nhưng chưa cho vào (🔒 Sắp mở)
//
// Mở 1 trường đang khoá: tạo folder `domains/<id>/`, thêm vào
// DOMAIN_REGISTRY, đổi status trong DOMAIN_META → 'ready'/'preview'.
// ============================================================

import { KEYS, lsGet, lsSet } from './storage.js';

// Chỉ những trường ở đây mới VÀO được. Trường khoá KHÔNG đăng ký.
const DOMAIN_REGISTRY = {
  pharmacy:  () => import('../domains/pharmacy/index.js'),
  it:        () => import('../domains/it/index.js'),
  // economics đã có skeleton nhưng đang KHOÁ — chưa đăng ký:
  // economics: () => import('../domains/economics/index.js'),
};

/**
 * Metadata cho school selector. Trường `status: 'locked'` chỉ hiển thị,
 * không vào được. moduleCount = 0 hoặc bỏ trống cho trường chưa dựng.
 */
export const DOMAIN_META = [
  // ───────── ĐANG MỞ ─────────
  { id: 'pharmacy', name: 'Trường Dược',                  shortName: 'Dược',    icon: '💊',
    tagline: '5 năm · 102 module · Hoá hữu cơ → OSCE · hỗ trợ 2D/3D/VR/Metaverse',
    accent: '#fbbf24', status: 'ready',   moduleCount: 102 },
  { id: 'it', name: 'Trường Công nghệ thông tin',          shortName: 'CNTT',    icon: '💻',
    tagline: '4 năm · Cử nhân CNTT · Python → ML · CTF · Hackathon · Cloud',
    accent: '#22c55e', status: 'preview', moduleCount: 35 },

  // ───────── ĐANG KHOÁ (Sắp mở) ─────────
  // Phổ thông (K-12)
  { id: 'primary', name: 'Trường Tiểu học',                shortName: 'Tiểu học', icon: '🎒',
    tagline: 'Lớp 1–5 · Toán · Tiếng Việt · Tự nhiên & Xã hội · Tiếng Anh · kỹ năng sống',
    accent: '#f59e0b', status: 'locked' },
  { id: 'secondary', name: 'Trường Trung học cơ sở',       shortName: 'THCS', icon: '📐',
    tagline: 'Lớp 6–9 · Toán · Văn · Anh · Lý · Hoá · Sinh · Sử · Địa · Tin học',
    accent: '#10b981', status: 'locked' },
  { id: 'highschool', name: 'Trường Trung học phổ thông',  shortName: 'THPT', icon: '🏫',
    tagline: 'Lớp 10–12 · phân ban KHTN/KHXH · luyện thi tốt nghiệp THPT & ĐH',
    accent: '#6366f1', status: 'locked' },
  // Cao đẳng / Đại học chuyên ngành
  { id: 'economics', name: 'Trường Kinh tế',               shortName: 'Kinh tế', icon: '📉',
    tagline: 'Kinh tế Vi mô/Vĩ mô · Kinh tế lượng · chính sách công',
    accent: '#0ea5e9', status: 'locked' },
  { id: 'business', name: 'Trường Kinh doanh',             shortName: 'Kinh doanh', icon: '📈',
    tagline: 'Quản trị · Marketing · Khởi nghiệp · Chiến lược · vận hành doanh nghiệp',
    accent: '#f97316', status: 'locked' },
  { id: 'finance', name: 'Trường Tài chính – Ngân hàng',   shortName: 'Tài chính', icon: '🏦',
    tagline: 'Tài chính DN · Đầu tư · Ngân hàng · TTCK · FinTech',
    accent: '#16a34a', status: 'locked' },
  { id: 'medicine', name: 'Trường Y',                      shortName: 'Y',       icon: '⚕️',
    tagline: 'Y đa khoa · Giải phẫu · Nội/Ngoại/Sản/Nhi · lâm sàng · OSCE',
    accent: '#ef4444', status: 'locked' },
  { id: 'nursing', name: 'Trường Điều dưỡng',              shortName: 'Điều dưỡng', icon: '🩺',
    tagline: 'Chăm sóc · kỹ thuật điều dưỡng · cấp cứu · quản lý ca bệnh',
    accent: '#ec4899', status: 'locked' },
  { id: 'law', name: 'Trường Luật',                        shortName: 'Luật',    icon: '⚖️',
    tagline: 'Luật dân sự · hình sự · kinh tế · quốc tế · tranh tụng mô phỏng',
    accent: '#64748b', status: 'locked' },
  { id: 'education', name: 'Trường Sư phạm',               shortName: 'Sư phạm', icon: '🎓',
    tagline: 'Khoa học giáo dục · phương pháp giảng dạy · thực tập sư phạm',
    accent: '#a855f7', status: 'locked' },
  { id: 'engineering', name: 'Trường Kỹ thuật – Công nghệ', shortName: 'Kỹ thuật', icon: '⚙️',
    tagline: 'Cơ khí · Điện – Điện tử · Tự động hoá · Robot · CAD/CAM',
    accent: '#0891b2', status: 'locked' },
  { id: 'architecture', name: 'Trường Kiến trúc – Xây dựng', shortName: 'Kiến trúc', icon: '🏛️',
    tagline: 'Thiết kế kiến trúc · kết cấu · BIM · quy hoạch đô thị',
    accent: '#d97706', status: 'locked' },
  { id: 'languages', name: 'Trường Ngoại ngữ',            shortName: 'Ngoại ngữ', icon: '🗣️',
    tagline: 'Anh · Trung · Nhật · Hàn · biên phiên dịch · giao tiếp',
    accent: '#3b82f6', status: 'locked' },
  { id: 'agriculture', name: 'Trường Nông nghiệp',         shortName: 'Nông nghiệp', icon: '🌾',
    tagline: 'Trồng trọt · chăn nuôi · thú y · công nghệ thực phẩm',
    accent: '#84cc16', status: 'locked' },
  { id: 'tourism', name: 'Trường Du lịch – Khách sạn',     shortName: 'Du lịch', icon: '🏖️',
    tagline: 'Quản trị khách sạn · lữ hành · sự kiện · ẩm thực',
    accent: '#14b8a6', status: 'locked' },
  { id: 'arts', name: 'Trường Mỹ thuật – Thiết kế',        shortName: 'Mỹ thuật', icon: '🎨',
    tagline: 'Đồ hoạ · UX/UI · thời trang · nội thất · multimedia',
    accent: '#f472b6', status: 'locked' },
  { id: 'media', name: 'Trường Báo chí – Truyền thông',    shortName: 'Truyền thông', icon: '📰',
    tagline: 'Báo chí · PR · quảng cáo · sản xuất nội dung số',
    accent: '#fb7185', status: 'locked' },
  { id: 'social-sciences', name: 'Trường Khoa học Xã hội & Nhân văn', shortName: 'KHXH&NV', icon: '📚',
    tagline: 'Tâm lý · xã hội học · lịch sử · triết học · công tác xã hội',
    accent: '#8b5cf6', status: 'locked' },
  { id: 'natural-sciences', name: 'Trường Khoa học Tự nhiên', shortName: 'KHTN', icon: '🔬',
    tagline: 'Toán · Lý · Hoá · Sinh · Khoa học dữ liệu',
    accent: '#0ea5e9', status: 'locked' },
  { id: 'logistics', name: 'Trường Logistics – Chuỗi cung ứng', shortName: 'Logistics', icon: '🚚',
    tagline: 'Quản lý kho · vận tải · xuất nhập khẩu · tối ưu chuỗi',
    accent: '#eab308', status: 'locked' },
  { id: 'public-admin', name: 'Trường Quản trị Nhà nước',  shortName: 'Hành chính', icon: '🏢',
    tagline: 'Hành chính công · chính sách · quản lý đô thị · e-government',
    accent: '#94a3b8', status: 'locked' },
];

/** True nếu trường được phép vào (đã đăng ký + không khoá). */
export function isDomainOpen(id) {
  const meta = DOMAIN_META.find(d => d.id === id);
  return !!DOMAIN_REGISTRY[id] && meta?.status !== 'locked';
}

/** Active domain ID (đọc từ URL hoặc localStorage). Trường khoá → fallback pharmacy. */
export function getActiveDomainId() {
  const params = new URLSearchParams(location.search);
  const fromUrl = params.get('domain');
  if (fromUrl && isDomainOpen(fromUrl)) {
    lsSet(KEYS.ACTIVE_DOMAIN, fromUrl);
    return fromUrl;
  }
  const saved = lsGet(KEYS.ACTIVE_DOMAIN);
  if (saved && isDomainOpen(saved)) return saved;
  return 'pharmacy';
}

/** Load active domain bundle (MODULES, SUBJECTS, DOMAIN config, ACHIEVEMENTS). */
export async function loadActiveDomain() {
  const id = getActiveDomainId();
  const loader = DOMAIN_REGISTRY[id];
  if (!loader) throw new Error(`Unknown domain: ${id}`);
  return await loader();
}

/** List all registered (openable) domains. */
export function listDomains() {
  return Object.keys(DOMAIN_REGISTRY);
}
