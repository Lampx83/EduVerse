// ============================================================
// EduVerse Engine — Central type definitions (JSDoc)
// ============================================================
// Tất cả schema cho DrugDB, HerbDB, CaseDB, Scenario, Rubric…
// được định nghĩa ở đây để 38 module dùng chung.
//
// Các module mới CHỈ cần:
//   1. Import dữ liệu (drug-db.js, herb-db.js, case-db.js)
//   2. Khai báo Scenario JSON (theo Scenario typedef)
//   3. Engine sẽ tự lo render UI + chấm điểm + ghi học bạ.
// ============================================================

// ─────────────────────────────────────────────────────────────
// DRUG  — đầy đủ cho cả 5 năm Dược
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {Object} DrugForm
 * @property {string} form       - Dạng bào chế: "Viên nén", "Siro", "Bình xịt"…
 * @property {string} strength   - Hàm lượng: "500mg", "125mg/5mL"
 * @property {Route}  route      - Đường dùng
 * @property {string} [vnBrand]  - Biệt dược VN phổ biến nhất ở dạng này
 */

/** @typedef {'PO'|'IV'|'IM'|'SC'|'topical'|'inhalation'|'eye'|'ear'|'nasal'|'sublingual'|'rectal'|'vaginal'|'oromucosal'} Route */

/**
 * @typedef {Object} DrugPK   Thông số Dược động học (cho Năm 3–4)
 * @property {number}   [bioavailability]  - F: 0–1
 * @property {number}   [halfLifeH]        - t½ (giờ)
 * @property {number}   [proteinBinding]   - % gắn protein huyết tương (0–1)
 * @property {number}   [vdLkg]            - Vd (L/kg)
 * @property {number}   [clearanceLh]      - Cl (L/h)
 * @property {string}   [metabolism]       - "Hepatic CYP3A4", "No metabolism"…
 * @property {string[]} [cypInteractions]  - ["CYP3A4 inhibitor", "CYP2C9 substrate"]
 * @property {string}   [elimination]      - "Renal 80%, hepatic 20%"
 * @property {number}   [onsetMin]         - Khởi phát tác dụng (phút)
 * @property {number}   [durationH]        - Thời gian tác dụng (giờ)
 */

/**
 * @typedef {Object} DrugDosing  Liều theo đối tượng (cho Năm 4–5)
 * @property {string} [adult]      - "500mg × 3 lần/ngày × 7 ngày"
 * @property {string} [pediatric]  - "25–50 mg/kg/ngày chia 3"
 * @property {string} [elderly]    - "Giảm 25% liều"
 * @property {string} [renal]      - "CrCl <30: giảm 50%"
 * @property {string} [hepatic]    - "Child-Pugh C: tránh dùng"
 * @property {string} [pregnancy]  - "Tránh dùng tam cá nguyệt 3"
 * @property {string} [maxDaily]   - "Tối đa 3g/ngày"
 */

/**
 * @typedef {Object} DrugSafety  Độc tính + an toàn (cho Năm 3–5)
 * @property {string[]} [contraindications]    - Chống chỉ định tuyệt đối
 * @property {string[]} [warnings]             - Thận trọng
 * @property {string[]} [commonAdverse]        - ADR thường gặp (>1%)
 * @property {string[]} [seriousAdverse]       - ADR nghiêm trọng (cần ngưng thuốc)
 * @property {string[]} [interactionsMajor]    - Danh sách drug ID có tương tác nặng
 * @property {string[]} [interactionsModerate] - Tương tác trung bình
 * @property {'A'|'B'|'C'|'D'|'X'|'N'} [pregnancyCat] - FDA pregnancy category
 * @property {'safe'|'caution'|'avoid'|'unknown'} [lactation]
 */

/**
 * @typedef {Object} Drug   Một thuốc đầy đủ
 *
 * --- Định danh (BẮT BUỘC cho mọi module) ---
 * @property {string}   id            - slug, e.g. "amoxicillin"
 * @property {string}   inn           - INN: "Amoxicillin"
 * @property {string}   nameVN        - Tên VN: "Amoxicilin"
 * @property {string[]} [brandNames]  - ["Augmentin", "Klamentin"]
 * @property {string}   atc           - ATC code: "J01CA04"
 * @property {string}   atcL1         - L1 ATC: "J" — for grouping
 * @property {string}   short         - 4–5 ký tự: "AMOX" (cho game năm 2–3)
 *
 * --- Phân loại (cho Sắp xếp ATC + Dược lý) ---
 * @property {string}   therapeuticClass  - "Kháng sinh" (VN, cho năm 2)
 * @property {string}   pharmClass        - "Penicillin", "ACE inhibitor" (cho năm 3)
 * @property {string}   [mechanism]       - 1 câu cơ chế: "Ức chế tổng hợp peptidoglycan"
 * @property {string}   [target]          - "PBP", "ACE", "5-HT1D"…
 *
 * --- Dạng bào chế ---
 * @property {DrugForm[]} forms  - 1 thuốc có thể có nhiều dạng
 *
 * --- Dược động học (Năm 3–4) ---
 * @property {DrugPK} [pk]
 *
 * --- Chỉ định + liều dùng (Năm 4–5) ---
 * @property {string[]}    indications  - ["Nhiễm khuẩn hô hấp", "Tiết niệu"]
 * @property {DrugDosing}  [dosing]
 *
 * --- An toàn (Năm 3–5) ---
 * @property {DrugSafety} [safety]
 *
 * --- Pháp lý VN (Năm 4–5) ---
 * @property {'OTC'|'Rx'|'C'|'P'|'B'} rxStatus
 *   OTC = không kê đơn · Rx = kê đơn · C = gây nghiện
 *   P = hướng tâm thần · B = thuốc bảng B (kê đơn đặc biệt)
 *
 * --- UI ---
 * @property {string}  color   - hex màu thẻ
 * @property {string}  [icon]  - emoji
 * @property {string}  [imageUrl]
 * @property {string}  [smiles] - SMILES cho hoá dược (Năm 3)
 *
 * --- Backward-compat (kế thừa từ medicines.js cũ) ---
 * @property {string} [dose]        - giữ tương thích, ưu tiên forms[0].strength
 * @property {string} [form]        - giữ tương thích, ưu tiên forms[0].form
 * @property {string} [category]    - alias cho therapeuticClass
 * @property {string} [indication]  - giữ tương thích, ưu tiên indications[0]
 *
 * --- Metadata học tập (Năm theo curriculum) ---
 * @property {number[]} [usedInYears]  - [2,3,4] = thuốc này xuất hiện ở các năm này
 * @property {string[]} [keyPoints]    - 3–5 ý quan trọng SV cần nhớ
 */


// ─────────────────────────────────────────────────────────────
// HERB  — Dược liệu (Năm 2–3)
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {Object} Herb
 * @property {string}   id             - "kim-tien-thao"
 * @property {string}   nameVN         - "Kim tiền thảo"
 * @property {string}   scientificName - "Desmodium styracifolium"
 * @property {string}   family         - "Fabaceae"
 * @property {string[]} [synonyms]     - ["Đồng tiền lông"]
 * @property {string}   partUsed       - BPSD: "Toàn cây trên mặt đất"
 * @property {string[]} activeCompounds - ["flavonoid", "saponin triterpenoid"]
 * @property {string[]} indications    - ["Sỏi thận", "Viêm đường tiết niệu"]
 * @property {string}   [preparation]  - "Sắc 30–50g/ngày"
 * @property {string[]} [contraindications]
 * @property {string}   [habitat]      - "Mọc hoang khắp VN, ưa ẩm"
 * @property {string[]} imageUrls      - URLs ảnh chuẩn (lá, hoa, quả)
 * @property {string}   [smiles]       - SMILES hoạt chất chính
 * @property {string[]} [keyPoints]    - Ý chính SV cần nhớ
 */


// ─────────────────────────────────────────────────────────────
// CLINICAL CASE  — Ca lâm sàng (Năm 4–5)
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {Object} CasePatient
 * @property {string}  id          - "ca-001"
 * @property {string}  initials    - "N.V.A"
 * @property {number}  ageYears
 * @property {'M'|'F'} sex
 * @property {number}  [weightKg]
 * @property {number}  [heightCm]
 * @property {string[]} [allergies]
 * @property {string[]} [comorbidities] - ["ĐTĐ type 2", "Suy thận giai đoạn 3"]
 * @property {string[]} [currentMeds]   - drug IDs
 * @property {Object}  [labs]       - { eGFR: 35, ALT: 80, K: 5.2, ... }
 * @property {string}  [pregnancy]  - "Không", "Đang mang thai 28 tuần"
 */

/**
 * @typedef {Object} CasePrescription
 * @property {string} drugId
 * @property {string} dose       - "500mg"
 * @property {string} route      - "PO"
 * @property {string} frequency  - "× 3/ngày"
 * @property {string} duration   - "7 ngày"
 * @property {string} [note]
 */

/**
 * @typedef {Object} DRP  Drug-Related Problem cần SV phát hiện
 * @property {'dose-high'|'dose-low'|'contraindication'|'interaction'|'duplicate'|'allergy'|'adherence'|'monitoring'|'no-indication'|'untreated'} type
 * @property {string} description  - "Liều amoxicillin chưa giảm theo eGFR 35"
 * @property {string} [drugId]
 * @property {string} resolution   - Hướng xử trí mong đợi
 * @property {1|2|3} severity      - 1 nhẹ → 3 nguy hiểm
 */

/**
 * @typedef {Object} ClinicalCase
 * @property {string}              id
 * @property {string}              title         - "Ca 5 · Người đái tháo đường nhập viện vì hạ đường huyết"
 * @property {string}              chiefComplaint
 * @property {string}              history       - HPI dạng tự sự
 * @property {CasePatient}         patient
 * @property {CasePrescription[]}  prescriptions - Đơn hiện tại
 * @property {DRP[]}               drps          - Vấn đề SV cần phát hiện
 * @property {Object}              soapRubric    - Rubric chấm SOAP
 * @property {string[]}            soapRubric.subjective
 * @property {string[]}            soapRubric.objective
 * @property {string[]}            soapRubric.assessment
 * @property {string[]}            soapRubric.plan
 * @property {string[]}            keyLearningPoints
 * @property {('cardio'|'endo'|'respi'|'gi'|'neuro'|'onco'|'infect'|'renal'|'pedi'|'geri'|'obgyn'|'psy')[]} specialties
 * @property {number} difficulty   - 1–5
 * @property {number[]} [usedInYears] - [4, 5]
 */


// ─────────────────────────────────────────────────────────────
// SCENARIO  — Định nghĩa game/bài tập (JSON-driven)
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {'quiz'|'drag-match'|'arrange'|'compound-lab'|'soap-write'|'patient-roleplay'|'identification'|'calculator'|'structure-draw'|'titration'|'osce-station'} ScenarioKind
 *
 * Mỗi kind tương ứng với một renderer trong ScenarioEngine.
 * Module mới chỉ cần khai báo JSON theo kind phù hợp.
 */

/**
 * @typedef {Object} ScenarioMeta  Phần chung cho mọi scenario
 * @property {string} id            - "L3.3-tuong-tac-01"
 * @property {string} title         - "Đơn 3 thuốc tim mạch"
 * @property {string} [description]
 * @property {ScenarioKind} kind
 * @property {number} [yearLevel]   - 1–5 (chương trình Dược)
 * @property {string} [subject]     - "duoc-ly" | "duoc-lam-sang" | …
 * @property {number} [difficulty]  - 1–5
 * @property {number} [timeLimitS]  - thời gian (giây, 0 = không giới hạn)
 * @property {string[]} [skillsTrained] - ["drug-interaction", "atc-classification"]
 * @property {string[]} [prerequisites] - scenario IDs phải pass trước
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'quiz',
 *   questions: Array<{
 *     stem: string,
 *     image?: string,
 *     choices: string[],
 *     answer: number,
 *     explanation?: string,
 *     drugRef?: string  // ID thuốc liên quan (cho cross-link)
 *   }>
 * }} QuizScenario
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'drag-match',
 *   leftItems: Array<{id:string,label:string,drugRef?:string}>,
 *   rightItems: Array<{id:string,label:string}>,
 *   correctPairs: Array<[string,string]>  // [leftId, rightId]
 * }} DragMatchScenario
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'compound-lab',
 *   recipe: import('./types').Recipe   // dùng schema lab-recipes.js hiện có
 * }} CompoundLabScenario
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'soap-write',
 *   caseId: string,        // ID trong CaseDB
 *   rubric: 'subjective'|'objective'|'assessment'|'plan'|'all',
 *   aiTutor: true          // bắt buộc dùng Claude để chấm
 * }} SoapWriteScenario
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'patient-roleplay',
 *   caseId: string,
 *   patientPersona: string,   // tả tính cách BN cho Claude
 *   maxTurns: number,
 *   evaluationRubric: string[] // các tiêu chí Claude cần chấm
 * }} PatientRoleplayScenario
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'identification',
 *   targets: Array<{id:string, herbRef?:string, drugRef?:string, image:string}>,
 *   mode: 'photo' | 'ar-camera' | 'microscope'
 * }} IdentificationScenario
 */

/**
 * @typedef {ScenarioMeta & {
 *   kind: 'calculator',
 *   formula: 'cockcroft-gault'|'mg-per-kg'|'bsa-mosteller'|'auc-trapezoidal'|'custom',
 *   inputs: Array<{name:string,label:string,unit:string,validator?:string}>,
 *   target: number,
 *   tolerance: number,
 *   showFormula: boolean
 * }} CalculatorScenario
 */

/**
 * @typedef {QuizScenario|DragMatchScenario|CompoundLabScenario|SoapWriteScenario|PatientRoleplayScenario|IdentificationScenario|CalculatorScenario} Scenario
 */


// ─────────────────────────────────────────────────────────────
// RUBRIC + ASSESSMENT
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {Object} RubricItem
 * @property {string} criterion  - "Liều amoxicillin theo eGFR"
 * @property {number} weight     - trọng số (tổng 1.0)
 * @property {string} [hint]
 */

/**
 * @typedef {Object} AssessmentResult
 * @property {string}  scenarioId
 * @property {string}  playerName
 * @property {string}  [classCode]
 * @property {number}  score          - 0–100
 * @property {0|1|2|3} stars
 * @property {number}  durationMs
 * @property {Array<{criterion:string,score:number,feedback:string}>} rubricBreakdown
 * @property {Object}  [details]      - data tự do per scenario kind
 * @property {number}  timestamp
 */


// ─────────────────────────────────────────────────────────────
// LEARNING PATH  — Lộ trình 5 năm (đa-ngành)
// ─────────────────────────────────────────────────────────────

/**
 * @typedef {'2d'|'3d'|'vr'|'xr'|'ar'|'meta'|'native'|'quiz'} ExperienceModeKind
 *
 * - quiz   = lớp kiến thức (mọi module đều có)
 * - 2d     = Canvas/HTML 2D
 * - 3d     = Three.js / Babylon (desktop browser)
 * - vr     = WebXR VR mode (Quest, Vision Pro browser)
 * - xr     = WebXR mixed reality (passthrough)
 * - ar     = AR camera-based (placeholder cho future)
 * - meta   = Multiplayer / metaverse
 * - native = APK / app native (Unity, etc.)
 */

/**
 * @typedef {Object} ExperienceMode  Một phiên bản trải nghiệm của module.
 * @property {ExperienceModeKind} mode
 * @property {string}   label    - "3D Realistic", "VR / XR Web"
 * @property {string}   tech     - "Three.js · WebGL"
 * @property {string}   icon     - emoji (🥽 🕹️ 📱 🌐 🎨 📦 🧠)
 * @property {string}   url      - relative URL hoặc full URL (target=_blank nếu external)
 * @property {string}   [desc]   - mô tả ngắn
 * @property {string[]} [specs]  - ["ok:Mobile mượt", "bad:Không VR"]
 * @property {'ready'|'soon'|'external'} [status] - default 'ready'
 */

/**
 * @typedef {Object} CourseModule
 *
 * --- Lõi (bắt buộc) ---
 * @property {string}   id               - "L3.3" | "PS11" | "SC02" …
 * @property {string}   title
 * @property {ModuleCategory} category   - 'curriculum'|'practice'|…
 * @property {string}   subject
 * @property {string[]} scenarioIds      - 0–N engine scenario IDs
 * @property {number}   minStarsToUnlock - tổng sao prereq tối thiểu
 *
 * --- Optional cũ ---
 * @property {number}   [yearLevel]       - 1–5 (chỉ curriculum)
 * @property {string[]} [prerequisites]   - module IDs phải pass trước
 * @property {boolean}  [hasCertificate]
 * @property {string}   [icon]
 *
 * --- Mở rộng v2 (tổng quát, đa-ngành) ---
 * @property {string}            [description]      - 1-2 câu mô tả
 * @property {1|2|3|4|5}         [difficulty]
 * @property {number}            [estimatedMinutes]
 * @property {string[]}          [tags]
 * @property {number}            [rewardCoin]       - coin nhận khi pass (mặc định stars*10)
 * @property {string}            [knowledgeQuiz]    - scenario ID quiz mặc định; nếu thiếu sẽ auto-stub
 * @property {ExperienceMode[]}  [experiences]      - các phiên bản trải nghiệm
 * @property {{ row:number, col:number }} [nodePos] - vị trí trong subway-map
 *
 * --- @typedef {'curriculum'|'practice'|'skill'|'library'|'career'|'game'} ModuleCategory ---
 */

// ─────────────────────────────────────────────────────────────
// DOMAIN  — Cấu hình cho từng ngành (Dược, Y, CNTT, …)
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {Object} DomainConfig
 * @property {string}  id              - 'pharmacy' | 'medicine' | 'it' …
 * @property {string}  name            - "Trường Dược"
 * @property {string}  shortName       - "Dược"
 * @property {string}  icon            - emoji
 * @property {number}  yearsTotal      - Số năm chính quy (5 cho Dược)
 * @property {string[]} yearLabels     - ["Năm 1 — HỌC", "Năm 2 — TẬP", …]
 * @property {string}  [tagline]
 */


// ─────────────────────────────────────────────────────────────
// WALLET + ACHIEVEMENTS — Gamification
// ─────────────────────────────────────────────────────────────
/**
 * @typedef {Object} Wallet
 * @property {number}   coins         - Pharma-coin tích luỹ
 * @property {number}   streak        - Số ngày liên tiếp truy cập
 * @property {string}   lastVisitDay  - "YYYY-MM-DD" (local time)
 * @property {string[]} achievements  - Các achievement.id đã unlock
 * @property {number}   [vrSessions]  - đếm số lần mở VR/XR mode
 * @property {number}   [metaSessions] - đếm số lần vào Metaverse
 */

/**
 * @typedef {Object} AchievementTrigger
 *   Mọi key đều optional; achievement unlock khi MỌI key thoả mãn.
 * @property {number} [quizzesPassed]      - tổng số quiz pass ≥
 * @property {number} [modulesIn1Day]      - module pass trong cùng 1 ngày ≥
 * @property {number} [streak]             - streak ≥
 * @property {number} [totalStars]
 * @property {Object<string, number>} [moduleStars] - { 'L3.6': 3 } → L3.6 phải đạt ≥3 sao
 * @property {number} [vrSessions]
 * @property {number} [metaverseVisit]
 * @property {number} [yearComplete]       - hoàn thành mọi module của năm X
 */

/**
 * @typedef {Object} Achievement
 * @property {string} id
 * @property {string} icon
 * @property {string} title
 * @property {string} desc
 * @property {AchievementTrigger} trigger
 */

export const _typedef_only = true; // marker — file này chỉ chứa JSDoc
