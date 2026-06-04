// ============================================================
// Codelab contest → problem slugs mapping (Tizia-side)
// ============================================================
// Lý do tồn tại: endpoint `GET /contests/{slug}` của Codelab hiện chưa handle
// system principal (X-API-Key) đúng — controller crash khi userToken undefined.
// Fix Codelab cần redeploy backend; trong khi chờ, Tizia tự giữ mapping ở đây
// để route `/api/codelab/problems?contest=<slug>` còn phục vụ được.
//
// Khi anh add/remove bài cho 1 contest trên Codelab, nhớ cập nhật file này
// rồi rebuild Tizia image (hoặc soft-reload qua restart). Đây là technical
// debt, sẽ gỡ khi Codelab fix bug.
//
// Slug Codelab format: `<name-slugified>-<24-char-mongoid>`.
// ============================================================

/** @type {Record<string, { name: string, mongoId: string, problems: string[] }>} */
export const TIZIA_CONTESTS = {
  // I1.1 — Nhập môn lập trình (Python cơ bản)
  '325049': {
    name: 'Tizia IT I1.1 — Python nhập môn',
    mongoId: '6a203931ffc447eb0afd1301',
    problems: [
      'python-tong-hai-so-nguyen-6a1efb5f960890d3442732bb',
      'python-bon-phep-toan-6a1efb5f960890d3442732c1',
      'python-dien-tich-hinh-tron-6a1efb5f960890d3442732cd',
      'python-mo-phong-den-giao-thong-6a1ef6bf7f52fd69e4728fbd',
      'python-xep-loai-diem-voi-guard-6a1ef6e53eaf60c52cc097cf',
      'python-can-giua-chuoi-voi-ky-tu-dem-6a1f0793c12a86d18f3ee8e4',
    ],
  },
  // I2.1 — Cấu trúc dữ liệu & Giải thuật (Python)
  '255760': {
    name: 'Tizia IT I2.1 — CTDL & Giải thuật',
    mongoId: '6a203931ffc447eb0afd1307',
    problems: [
      'python-sap-xep-noi-bot-6a17cb6a97c519818f973d20',
      'python-uoc-chung-lon-nhat-6a17cb6a97c519818f973d11',
      'python-tinh-giai-thua-n-bang-de-quy-6a1f0b1892d7ee802e546033',
      'python-sinh-tap-con-cua-1-n-6a1f0b1892d7ee802e54602d',
      'python-tron-hai-mang-da-sap-xep-6a1f0bd48b3cd5f66701b989',
      'python-dao-nguoc-chuoi-tai-cho-6a1f0bd48b3cd5f66701b977',
    ],
  },
  // Code Race — 5 bài giải nhanh
  '511768': {
    name: 'Tizia IT — Code Race 5 phút',
    mongoId: '6a203931ffc447eb0afd130d',
    problems: [
      'python-tong-hai-so-nguyen-6a1efb5f960890d3442732bb',
      'python-dao-nguoc-chuoi-tai-cho-6a1f0bd48b3cd5f66701b977',
      'python-two-sum-tren-mang-da-sap-xep-6a1f0bd48b3cd5f66701b971',
      'python-so-fibonacci-thu-n-dp-bottom-up-6a1f0af33942df0553e780de',
      'python-leo-cau-thang-dem-cach-6a1f0af33942df0553e780e4',
    ],
  },
};

/** Trả về list slug của bài trong contest; mảng rỗng nếu không biết. */
export function getContestProblemSlugs(contestSlug) {
  return TIZIA_CONTESTS[contestSlug]?.problems || [];
}

/** Trả về tên hiển thị của contest. */
export function getContestName(contestSlug) {
  return TIZIA_CONTESTS[contestSlug]?.name || null;
}

/** Có biết về contest này không? */
export function hasContestMapping(contestSlug) {
  return contestSlug in TIZIA_CONTESTS;
}

/** Resolve slug số → Mongo _id. Codelab POST /submissions yêu cầu contestId là MongoId. */
export function getContestMongoId(contestSlug) {
  return TIZIA_CONTESTS[contestSlug]?.mongoId || null;
}
