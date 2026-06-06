// ============================================================
// Trường Mầm non — Module list (Mầm/Chồi/Lá) theo TT 51/2020
// ============================================================
// 5 LĨNH VỰC PHÁT TRIỂN × 3 độ tuổi = 15 module track. Mỗi track phủ 35 tuần
// hoạt động theo chủ đề năm học (trường mầm non, bản thân, gia đình, nghề,
// động vật, Tết, thực vật, giao thông, nước, quê hương …).
//
// Module gốc N1/N2/N3 GIỮ NGUYÊN — đã có scenarios N{1,2,3}-w01…w36 tích hợp
// Toán + Nhận biết + Vận động cơ bản. Các module mới của các lĩnh vực còn
// thiếu đặt scenarios `…đang biên soạn`, sẽ migrate sang ScoreUp Phase 1 sau.
// ============================================================

const _stub = (id, title, yl, subject, stars, prereq, description) => ({
  category: 'curriculum', id, title, yearLevel: yl, subject,
  scenarioIds: [`${id}-w01`], knowledgeQuiz: `${id}-quiz`,
  minStarsToUnlock: stars, ...(prereq ? { prerequisites: [prereq] } : {}),
  description, status: 'in-progress',
});

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ───────── Lĩnh vực 2 — Phát triển nhận thức (đã có content) ─────────
  // N1/N2/N3 hiện tại đang gom tổng "36 tuần + Làm quen Toán" — vẫn để dưới
  // môn `lam-quen-toan` (alias) để mọi scenario N{1,2,3}-w01…w36 hoạt động.
  { category: 'curriculum', id: 'N1', title: 'Mầm (3 tuổi) · 36 tuần + Làm quen Toán', yearLevel: 1, subject: 'lam-quen-toan',
    scenarioIds: ['N1-quiz', 'N1-match', 'N1-w01'], knowledgeQuiz: 'N1-quiz', minStarsToUnlock: 0,
    description: '36 tuần chủ đề (trường mầm non, bản thân, gia đình, nghề, động vật, Tết, thực vật, giao thông, nước, quê hương) + Đếm 1–5, nhận biết màu.' },
  { category: 'curriculum', id: 'N2', title: 'Chồi (4 tuổi) · 36 tuần + Hình khối', yearLevel: 2, subject: 'lam-quen-toan',
    scenarioIds: ['N2-quiz', 'N2-match', 'N2-w01'], knowledgeQuiz: 'N2-quiz', minStarsToUnlock: 0, prerequisites: ['N1'],
    description: '36 tuần chủ đề (nâng cấp Mầm) + Đếm tới 10, hình tròn/vuông/tam giác, từ vựng phong phú.' },
  { category: 'curriculum', id: 'N3', title: 'Lá (5 tuổi) · 36 tuần + Sẵn sàng vào lớp 1', yearLevel: 3, subject: 'lam-quen-toan',
    scenarioIds: ['N3-quiz', 'N3-match', 'N3-w01'], knowledgeQuiz: 'N3-quiz', minStarsToUnlock: 0, prerequisites: ['N2'],
    description: '36 tuần chủ đề + So sánh nhiều/ít, đếm tới 20, cộng-trừ trong 5, hình khối 3D đơn giản.' },

  // ───────── Lĩnh vực 1 — Phát triển thể chất ─────────
  _stub('N1-TC', 'Mầm · Phát triển thể chất', 1, 'the-chat', 0, null,
    'Vận động thô (chạy, bật, bò, leo) · vận động tinh (xé/dán, xếp khối) · ăn ngủ vệ sinh đúng giờ · phòng chống tai nạn cơ bản. (Đang biên soạn).'),
  _stub('N2-TC', 'Chồi · Phát triển thể chất', 2, 'the-chat', 0, 'N1-TC',
    'Đi thăng bằng · ném trúng đích · phối hợp tay-mắt · tự phục vụ bản thân · nhận biết nhóm thực phẩm tốt. (Đang biên soạn).'),
  _stub('N3-TC', 'Lá · Phát triển thể chất', 3, 'the-chat', 0, 'N2-TC',
    'Đi/chạy có đổi hướng · nhảy dây · bóng đá mini · cầm bút đúng cách (chuẩn bị viết) · an toàn giao thông cơ bản. (Đang biên soạn).'),

  // ───────── Lĩnh vực 3 — Phát triển ngôn ngữ ─────────
  _stub('N1-NN', 'Mầm · Phát triển ngôn ngữ', 1, 'ngon-ngu', 0, null,
    'Nghe – nói (đọc thơ, kể chuyện theo tranh) · từ vựng đồ vật quen thuộc · giao tiếp gia đình. (Đang biên soạn).'),
  _stub('N2-NN', 'Chồi · Phát triển ngôn ngữ', 2, 'ngon-ngu', 0, 'N1-NN',
    'Kể chuyện sáng tạo · đặt câu hỏi · đoán nội dung qua tranh · làm quen âm chữ cái. (Đang biên soạn).'),
  _stub('N3-NN', 'Lá · Phát triển ngôn ngữ', 3, 'ngon-ngu', 0, 'N2-NN',
    'Làm quen 29 chữ cái Tiếng Việt · viết chữ rỗng · đọc thuộc thơ ngắn · kể lại chuyện theo nhân vật. (Đang biên soạn).'),

  // ───────── Lĩnh vực 4 — Phát triển TC-XH ─────────
  _stub('N1-TX', 'Mầm · Phát triển tình cảm – xã hội', 1, 'tinh-cam-xh', 0, null,
    'Nhận biết cảm xúc cơ bản · chào hỏi người lớn · chơi cùng bạn · cảm ơn – xin lỗi. (Đang biên soạn).'),
  _stub('N2-TX', 'Chồi · Phát triển tình cảm – xã hội', 2, 'tinh-cam-xh', 0, 'N1-TX',
    'Chia sẻ đồ chơi · hợp tác nhóm nhỏ · thể hiện tình cảm với gia đình · tự kiềm chế khi giận. (Đang biên soạn).'),
  _stub('N3-TX', 'Lá · Phát triển tình cảm – xã hội', 3, 'tinh-cam-xh', 0, 'N2-TX',
    'Làm việc theo nhóm · giải quyết xung đột đơn giản · biết tự hào về văn hoá VN · sẵn sàng đi lớp 1. (Đang biên soạn).'),

  // ───────── Lĩnh vực 5 — Phát triển thẩm mỹ ─────────
  _stub('N1-TM', 'Mầm · Phát triển thẩm mỹ', 1, 'tham-my', 0, null,
    'Hát theo nhạc · nhảy theo nhịp đơn giản · tô màu lớn · nặn đất nặn theo mẫu. (Đang biên soạn).'),
  _stub('N2-TM', 'Chồi · Phát triển thẩm mỹ', 2, 'tham-my', 0, 'N1-TM',
    'Vẽ tự do theo chủ đề · gấp giấy đơn giản · hát solo và đồng thanh · phân biệt nhanh-chậm-vui-buồn. (Đang biên soạn).'),
  _stub('N3-TM', 'Lá · Phát triển thẩm mỹ', 3, 'tham-my', 0, 'N2-TM',
    'Vẽ – cắt – xé – dán theo ý tưởng riêng · biểu diễn văn nghệ · cảm nhận âm nhạc dân ca VN. (Đang biên soạn).'),
];
