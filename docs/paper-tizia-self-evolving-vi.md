# Phần mềm giáo dục tự lớn lên theo nhu cầu người dùng: điểm nghẽn không nằm ở chuyện AI viết được mã, mà ở chuyện kiểm tra nội dung có đúng chuyên môn hay không

### Nghiên cứu trường hợp nền tảng Tizia (giáo dục phổ thông, theo Chương trình GDPT 2018)

> **Bản thảo tiếng Việt — bài nêu quan điểm khoa học (position paper).** Đây là bản để duyệt nội dung trước khi dịch sang tiếng Anh và trình bày theo tạp chí đích.
> Trạng thái: DRAFT v0.2 · Ngày: 2026-06-21

---

## Tóm tắt

Các mô hình ngôn ngữ lớn (LLM) đang làm sống lại một giấc mơ cũ của ngành phần mềm: người dùng chỉ cần nói ra mong muốn bằng lời thường, và phần mềm tự hình thành rồi lớn dần để đáp ứng — thay vì được lập trình cứng một lần rồi đóng gói. Bài này cho rằng đó là một xu hướng có thật, nhưng phải nhìn nó theo nhiều mức độ chín khác nhau. Phần khung tư tưởng và phần "AI sinh ra mã, sinh ra nội dung" đã thật và đang tiến nhanh. Nhưng phần "phần mềm tự tiến hóa mà không cần người" và nhất là phần "kiểm tra xem nội dung AI tạo ra có đúng về chuyên môn không" thì vẫn còn rất sơ khai.

Chúng tôi nối ba mạch nền tảng (Software 3.0; phát triển phần mềm bởi chính người dùng cuối; phần mềm "dễ nhào nặn") với các bằng chứng thực nghiệm gần đây về việc dùng LLM để làm phần mềm. Từ đó rút ra: điểm nghẽn quan trọng nhất bây giờ **không** còn là "AI có viết được mã không" (việc này ngày càng được giải tốt), mà là ba việc khác — (i) hiểu cho đúng người dùng thật sự muốn gì, (ii) kiểm tra nội dung AI sinh ra có đúng về chuyên môn không, và (iii) giữ cho hệ thống không rối loạn khi cứ chắp vá thêm mãi. Trong giáo dục phổ thông, việc (ii) đặc biệt gắt: một đáp án sai không phải lỗi vặt mà là dạy sai cho trẻ; và người học lại là trẻ em.

Chúng tôi giới thiệu Tizia — một nền tảng học tập tiếng Việt bám Chương trình GDPT 2018 — như một ví dụ đang chạy thật. Tizia có hai vòng tự lớn lên: một là vòng "học sinh góp ý → phần mềm được cải tiến" luôn có người duyệt; hai là vòng "AI tự soạn bài tập" được canh bởi một cơ chế đối chiếu nhẹ tên là `reconcile()`. Qua một thí nghiệm trên 122 câu hỏi chuẩn lấy từ chương trình, chúng tôi đo được hai con số: mô hình AI khi không ai canh thì **sai gần 28%** đáp án; sau khi cho `reconcile()` đối chiếu thì độ đúng tăng từ **72,1% lên 82,0%** (tăng gần 10 điểm). Cơ chế này sửa đúng 15 trên 19 lần can thiệp, nhưng vẫn để lọt lỗi và thậm chí làm hỏng 3 câu. Kết quả đó nói lên đúng luận điểm của bài: một bộ kiểm tra rẻ tiền, bám sát chuyên môn giúp ích rất nhiều, nhưng không thay được con người. Bài khép lại bằng một danh sách hướng nghiên cứu cho "phần mềm giáo dục tự tiến hóa" — một chủ đề mà hiện chưa có công trình khoa học nào đặt tên và nghiên cứu bài bản.

**Từ khóa:** phần mềm tự tiến hóa; người dùng cuối tự phát triển phần mềm; Software 3.0; AI soạn nội dung học tập; kiểm tra tính đúng về chuyên môn; con người cùng tham gia; GDPT 2018.

---

## 1. Mở đầu

### 1.1 Bối cảnh và câu hỏi

Mấy năm gần đây có một câu hỏi ngày càng được đặt ra nghiêm túc: phải chăng cách chúng ta làm ra phần mềm đang đổi từ chỗ *lập trình viên viết mã* sang chỗ *người dùng nói ra nhu cầu, còn AI lo phần hiện thực*? Nếu đúng vậy, phần mềm sẽ không còn là một sản phẩm cố định, mà giống một cơ thể sống — **hình thành dần và lớn lên theo mong muốn của người dùng**.

Câu hỏi này không chỉ là chuyện lý thuyết. Câu trả lời quyết định ta nên đầu tư vào đâu, thiết kế hệ thống ra sao, và đặt vai trò con người ở chỗ nào. Bài viết trả lời câu hỏi đó với một lập trường rõ ràng, đồng thời chỉ ra **phần nào của giấc mơ đã thành sự thật, phần nào còn xa** — đặc biệt trong giáo dục phổ thông, nơi một sai sót nhỏ cũng có hậu quả thật.

### 1.2 Luận điểm

Chúng tôi bảo vệ ba ý:

1. **Xu hướng là có thật, nhưng phải nhìn theo nhiều mức.** "Người dùng nói nhu cầu → AI dựng → phần mềm lớn lên" là một hướng đi thật, có cả gốc rễ lý thuyết lẫn bằng chứng thực tế. Nhưng càng đi từ "AI viết mã" sang "phần mềm tự tiến hóa không cần người", độ tin cậy càng giảm.
2. **Điểm nghẽn đã dịch chỗ.** Khi AI ngày càng giỏi sinh mã và sinh nội dung, rào cản lớn nhất không còn là *khả năng sinh ra*, mà là *hiểu đúng ý người dùng*, *kiểm tra nội dung có đúng chuyên môn không*, và *giữ hệ thống khỏi rối*.
3. **Giáo dục phổ thông là phép thử khó nhất — và cũng là khoảng trống nghiên cứu rõ nhất.** Ở đây, việc kiểm tra nội dung AI sinh ra có đúng về mặt sư phạm hay không (bám chương trình, đúng đáp án, không gieo hiểu lầm) là điều kiện sống còn. Vậy mà hiện chưa có cách làm tự động nào được kiểm chứng; mọi quy trình đều phải nhờ con người chốt lại.

### 1.3 Đóng góp

- **C1 — Một cách nhìn theo bốn mức** cho xu hướng "phần mềm tự lớn lên theo nhu cầu người dùng", nối ba mạch lý thuyết với bằng chứng mới nhất (Mục 2–3).
- **C2 — Một ví dụ đang chạy thật** (Tizia): mô tả hai vòng tự lớn lên và cơ chế canh `reconcile()`, kèm số liệu hệ thống ở quy mô thử nghiệm (Mục 4).
- **C3 — Một thí nghiệm có số** đo nhu cầu kiểm tra (mô hình sai bao nhiêu) và mức hữu ích của một bộ đối chiếu nhẹ (Mục 5).
- **C4 — Một danh sách hướng nghiên cứu** cho "phần mềm giáo dục tự tiến hóa" và bài toán kiểm tra tính đúng về sư phạm — chỗ trống còn bỏ ngỏ (Mục 6).

---

## 2. Nền tảng và các công trình liên quan

### 2.1 Software 3.0 và "lập trình bằng lời nói"

Karpathy (2025) đưa ra cách gọi **"Software 3.0"**. Nếu Software 1.0 là mã do người viết, Software 2.0 là mạng nơ-ron học từ dữ liệu, thì 3.0 coi LLM như *một loại máy tính kiểu mới mà ta "lập trình" bằng tiếng Anh — tức bằng lời thường*. Hệ quả là ai cũng có thể làm phần mềm, cái mà ông gọi vui là "vibe coding" (lập trình theo cảm hứng, chỉ tả mong muốn rồi để máy lo cú pháp). Đây là một bài nói mang tính tầm nhìn, không qua bình duyệt, nên ta chỉ dùng nó để *đặt vấn đề*, chứ không coi là bằng chứng. Đáng chú ý là chính Karpathy nhấn mạnh giai đoạn này còn rất non ("ta đang ở *thập niên 1960 của LLM*"), rằng LLM "vừa siêu giỏi vừa hay sai", nên cách dùng đúng là *để con người cùng tham gia* — ông ví AI nên là "bộ giáp Iron Man tăng sức cho người", chứ không phải "robot tự hành". Quan điểm này càng củng cố cách đọc "có thật nhưng còn non".

### 2.2 Người dùng cuối tự phát triển phần mềm: gốc rễ học thuật

Ý tưởng để người dùng tự tạo và sửa phần mềm không mới. Lieberman, Paternò, Klann và Wulf (2006) đưa ra định nghĩa kinh điển về **End-User Development** (người dùng cuối tự phát triển phần mềm): *tập hợp các phương pháp và công cụ cho phép người dùng — vốn không phải dân lập trình — tự tạo, sửa hoặc mở rộng một phần mềm*. Quan trọng hơn, các tác giả dự báo rằng mục tiêu của ngành tương tác người–máy sẽ chuyển từ *làm cho phần mềm dễ dùng* sang *làm cho phần mềm dễ sửa đổi*. Lý do: nhu cầu người dùng vốn đa dạng, hay thay đổi và khó nắm bắt, nên nếu cứ chờ qua một chu trình phát triển chuyên nghiệp đầy đủ thì quá chậm và quá tốn — vì thế người dùng cần tự mình *liên tục chỉnh sửa hệ thống cùng nó lớn lên*. Đây chính là cái nền lý thuyết vững nhất cho vòng "người dùng góp ý → cải tiến" của Tizia. (Lưu ý: công trình này có trước thời LLM; cách làm của nó là lập trình bằng ví dụ, bằng hình ảnh, bằng macro — nên ta trích như *gốc lịch sử*, không phải tuyên bố về AI.)

### 2.3 Lập trình kiểu ngôn ngữ tự nhiên: bài toán cũ chưa giải

Pulido-Prieto và Juárez-Martínez (2017, *ACM Computing Surveys*) tổng kết hướng **lập trình kiểu ngôn ngữ tự nhiên** — viết phần mềm bằng câu chữ gần với lời nói, với tham vọng để *văn bản mô tả nhu cầu vừa là bản đặc tả vừa là mã nguồn*. Kết luận của họ: tính đến 2017 *chưa* có ngôn ngữ nào kiểu vậy dựa trên một mô hình rõ ràng; các công cụ chỉ xử lý được một tập câu chữ hạn chế trong từng lĩnh vực hẹp, vì ngôn ngữ tự nhiên quá dễ hiểu nhiều nghĩa. Điều này cho thấy giấc mơ "nói ra là lập trình" là bài toán cũ, lâu nay chưa giải được; LLM nay tiếp cận theo kiểu khác (lời nói là *đầu vào* để mô hình dịch ra mã, chứ bản thân lời nói không phải mã). Nên ta trích như *tiền đề*.

### 2.4 Phần mềm "dễ nhào nặn" và giao diện do AI tự sinh

Hai hướng hiện đại đang làm sống vòng lặp này ở phần giao diện:

- **Phần mềm dễ nhào nặn** (malleable software — Ink & Switch, 2025; Litt, 2023): chủ trương trả lại cho người dùng quyền tự nắn chỉnh công cụ của mình. Có một ý rất quan trọng với bài này: *chỉ riêng việc AI sinh ra mã thôi thì chưa đủ*. Rào cản thật nằm ở chỗ phần mềm ngày nay đa phần là hộp đóng, và các công cụ AI hiện nay *thường đẻ ra ứng dụng mới tách rời* thay vì cho người dùng sửa và ghép nối những công cụ họ đang có. (Đây là bài luận của một nhóm nghiên cứu, không bình duyệt — dùng để *đặt vấn đề*.)
- **Giao diện do AI tự sinh** (hệ "Jelly", CHI 2025; Cao và cộng sự): một hệ *đã qua bình duyệt* làm đúng vòng "người dùng nói → AI dựng giao diện → người dùng chỉnh tiếp". LLM đọc lời người dùng rồi dựng ra giao diện; người dùng không rành kỹ thuật vẫn chỉnh được bằng lời thường. Thử nghiệm với 8 người dùng (131 lượt chỉnh) cho thấy *làm được nhưng chưa mượt*: hệ vẫn mắc lỗi (hiểu ngược quan hệ, sinh thừa, hoặc lời người dùng thiếu thông tin cần hỏi lại). Đây là bằng chứng đã bình duyệt và gần với sản phẩm thật nhất.

### 2.5 Dùng LLM để làm phần mềm

- **Tổng quan đã bình duyệt:** Hou và cộng sự (2024, *ACM TOSEM*) gom 395 công trình về dùng LLM cho kỹ nghệ phần mềm (2017–2024), xác nhận đây là lĩnh vực lớn và lớn nhanh — phần "AI sinh mã" mà cả xu hướng dựa vào là có thật và đang chín dần. Một chi tiết quan trọng cho khoảng trống của bài: khâu *tìm hiểu yêu cầu* chỉ chiếm khoảng 3,9% số nghiên cứu, khâu *thiết kế* khoảng 0,92% — tức việc *hiểu và đặc tả ý người dùng* bị bỏ ngỏ nhất.
- **Tác tử tự chủ (chưa bình duyệt):** nhiều khảo sát (vd arXiv 2408.02479) cho thấy các "tác tử" AI nay đã tự sửa lỗi, tự dọn mã, tự sinh ca kiểm thử cùng lớn với mã nguồn — tức "AI tự phát triển phần mềm" là việc đang nhen nhóm.
- **Mức trần độ tin cậy:** với những việc khó, nhiều tệp, kiểu doanh nghiệp (bộ thử SWE-Bench Pro, arXiv 2509.16941), các tác tử mạnh nhất chỉ giải được dưới khoảng 25% (theo phiên bản mô hình tại thời điểm báo cáo), và *35,9% số lần thất bại là do "giải sai" về mặt logic/thuật toán* chứ không phải lỗi cú pháp — tức điểm nghẽn là *hiểu đúng và làm đúng*, giống y "đúng sư phạm" trong giáo dục. (Con số tuyệt đối phụ thuộc phiên bản mô hình; không nên suy rộng thành đặc tính của "tác tử AI" nói chung.)
- **Giới hạn từ bản chất:** Xu và cộng sự (2024, arXiv 2401.11817) chứng minh bằng toán rằng *AI bịa (hallucination) là không thể xóa sạch* — mọi lớp mô hình kiểu này đều sẽ bịa ở một số đầu vào. Đây là lý do nền tảng nhất để cần một *lớp kiểm tra* nằm ngoài mô hình.
- **Có con người thì khác hẳn:** Zhang và cộng sự (2024, arXiv 2401.01062) báo cáo một khung làm phần mềm bằng LLM đạt 75,2% khi *có người tham gia*, so với chỉ 24,1% khi *không có* (lưu ý: dùng GPT-3.5, bài toán nhỏ ~240 dòng, một nhóm — chiều hướng đúng nhưng mức chênh có thể bị thổi phồng so với mô hình năm 2026).

### 2.6 Giáo dục: chất lượng nội dung AI soạn và khoảng trống kiểm tra

Giới nghiên cứu giáo dục đã ghi nhận *vấn đề*, nhưng chưa có *lời giải tự động*:

- **Chất lượng nội dung AI soạn (đã bình duyệt):** Al Faraby, Romadhony và Adiwijaya (2024, *Computers and Education: Artificial Intelligence*) ghi nhận LLM hay kéo theo kiến thức ngoài lề khiến *câu hỏi soạn ra bị bịa*, và chất lượng *tụt dần khi soạn càng nhiều câu*. Gorgun và Bulut (2025, *Educational Measurement: Issues and Practice*) thử dùng chính LLM làm *bộ lọc kiểm tra* câu hỏi sinh tự động. Một nghiên cứu khác về sinh câu hỏi cho các môn STEM (2024, *C&E:AI*) đo độ đúng của câu hỏi do GPT soạn. Phân tích gộp về câu hỏi trắc nghiệm trong đào tạo y khoa (*PLOS One*, 2026) đặt *độ chính xác* làm tiêu chí chất lượng hàng đầu.
- **Kiểm tra tính đúng về sư phạm (chủ yếu là bản chưa bình duyệt):** Hu và cộng sự (2024, *IEEE TLT*) sinh *giáo án* kèm thang chấm. Các quy trình bám chương trình (COGENT, arXiv 2506.09367; LearnLens, arXiv 2507.04295; sinh câu hỏi bám chương trình bằng kỹ thuật truy hồi RAG) đều **quy về việc nhờ chuyên gia làm cổng duyệt cuối**.
- **Đạo đức và rủi ro cho học sinh phổ thông (đã bình duyệt):** Nguyen và cộng sự (2024, *Technology, Pedagogy and Education*) tổng quan đạo đức dùng AI ở phổ thông, nêu "phù hợp sư phạm" và "quyền trẻ em" là những nguyên tắc riêng của bậc học này nhưng còn ít được làm rõ.

**Tóm lại từ phần điểm tài liệu:** các *mảnh vấn đề* riêng lẻ đã có công trình bình duyệt, nhưng (1) **"phần mềm giáo dục tự tiến hóa" chưa được đặt tên và nghiên cứu như một khái niệm** trong giới khoa học, và (2) **chưa có cách tự động nào được kiểm chứng** để xác nhận nội dung AI soạn có đúng về sư phạm không (bám chương trình + đúng đáp án + không gieo hiểu lầm) — mọi con đường đáng tin đều kết thúc ở con người. Chính chỗ trống này là nơi bài viết đặt đóng góp.

---

## 3. Bốn mức độ chín và sự dịch chỗ của điểm nghẽn

Chúng tôi đề nghị nhìn xu hướng này theo **bốn mức**, độ chín giảm dần:

| Mức | Là gì | Độ chín | Bằng chứng |
|---|---|---|---|
| **M1 — Khung tư tưởng** | Lời nói trở thành cách "lập trình" | Đã định hình | Software 3.0; người dùng cuối tự làm; lập trình kiểu lời nói |
| **M2 — AI sinh mã, sinh nội dung** | AI tạo mã, giao diện, bài học từ lời mô tả | Thật, chín nhanh | Tổng quan 395 bài (TOSEM); giao diện AI tự sinh (CHI'25) |
| **M3 — Tự tiến hóa không cần người** | AI tự mở rộng tính năng theo nhu cầu khi đang chạy | Đang nhen nhóm, chưa đáng tin | Khảo sát tác tử; SWE-Bench Pro <25% việc khó |
| **M4 — Kiểm tra đúng chuyên môn + giữ trật tự** | Bảo đảm đúng *theo lĩnh vực* + không để rối | Gần như chưa giải | AI bịa không xóa được; thiếu bộ kiểm tra sư phạm |

**Ba chỗ trống** xuyên suốt mức M3–M4, là nơi một bài quan điểm có thể đóng góp:

- **T1 — Hiểu đúng ý người dùng.** Đây là khâu ít được nghiên cứu nhất (chỉ ~3,9%). Lời mong muốn mơ hồ của người dùng phải được dịch thành yêu cầu rõ ràng, kiểm tra được.
- **T2 — Sửa và ghép nối, không chỉ đẻ mới.** Công cụ AI hiện nay hay đẻ ra ứng dụng tách rời thay vì cho người dùng nắn chỉnh và ghép nối công cụ sẵn có trên cùng một kho dữ liệu. *Một nền tảng tự sở hữu toàn bộ hệ thống* (như Tizia) tránh được rào cản này và biến nó thành bài toán dễ kiểm soát hơn — một *biến thể* đáng đặt tên.
- **T3 — Kiểm tra đúng chuyên môn và giữ trật tự.** Vì AI bịa là điều không xóa được và vai trò con người là quyết định, ta cần (a) một bộ kiểm tra bám sát lĩnh vực và (b) cách giữ cho hệ thống không thành "mớ hỗn độn" khi tính năng cứ chắp thêm theo từng góp ý. Trong giáo dục, (a) chính là *kiểm tra tính đúng về sư phạm*.

---

## 4. Nghiên cứu trường hợp: Tizia

> *Nói rõ về phạm vi:* Tizia đang ở **giai đoạn thử nghiệm**; số người dùng còn ít. Vì vậy phần này có giá trị như một *minh chứng rằng kiến trúc đó chạy được trên thực tế*, kèm dữ liệu thử nghiệm, **chứ không** phải một nghiên cứu trên quy mô lớn. Bằng chứng định lượng chính nằm ở phép đo độc lập với số người dùng (Mục 5).

### 4.1 Tổng quan nền tảng

Tizia là nền tảng học tập tiếng Việt bám Chương trình GDPT 2018, phủ từ Mầm non đến lớp 12, kèm vài lĩnh vực nghề (Dược, Công nghệ thông tin, Lái xe). Toàn bộ nội dung học nằm trong bảng `curriculum_content`:

- **4.963 học liệu** đang dùng, **81 môn**, trải khắp lớp 0–12.
- **27.443 câu hỏi** (trong 4.892 học liệu có câu hỏi) và **4.696 học liệu có phần lý thuyết**.
- Chia theo cấp: tiểu học 1.739 · trung học cơ sở 1.716 · trung học phổ thông 1.260 · Dược 134 · Mầm non 114.
- **Tất cả đều do con người soạn và duyệt** (đánh dấu `source = seed`) — đây là *kho tri thức chuẩn*, đóng vai trò "đáp án gốc" cho thí nghiệm ở Mục 5. Trong số đó có **3.783 câu thuần số** (chỗ mà cơ chế `reconcile()` áp dụng được).

Hai vòng tự lớn lên chạy *quanh* cái kho chuẩn này.

### 4.2 Vòng 1 — "Học sinh góp ý → phần mềm được cải tiến" (luôn có người duyệt)

Học sinh gửi mong muốn bằng lời ngay trong ứng dụng; mỗi mong muốn là một dòng trong bảng `requests` (gồm lĩnh vực, loại, tiêu đề, nội dung, số lượt ủng hộ, trạng thái, ghi chú trả lời). Vòng đời của một góp ý: `chờ xử lý → đang xem xét → xong | từ chối`, kèm thông báo gửi lại cho người góp ý (bảng `notifications`).

**Cách quản lý lai — và chính cách quản lý cũng đã tự đổi mới.** Khi học sinh gửi góp ý, hệ thống chỉ *ghi nhận* (giữ trạng thái "chờ xử lý") và báo chuông, chứ không tự quyết. Việc *ra quyết định* (duyệt / từ chối / hoãn / ưu tiên) do một "Ban điều hành AI" đảm nhận, rồi ghi lại vào bảng lưu vết `ai_decisions` (có cột ghi rõ quyết định do ai đưa ra — AI, luật, hay người — kèm độ tự tin, lý do, lời nhắn công khai). Điều đáng nói — và nó minh họa đúng luận điểm bài này — là **bản thân khâu quản lý cũng đã tự đổi mới**: ban đầu nó dùng mô hình chạy tại chỗ `qwen2.5:14b` để duyệt góp ý, nhưng mô hình này *không đủ tin cậy để duyệt*, nên (ngày 21/6/2026) được nâng lên một mô hình mạnh hơn (Claude Opus) chạy theo quy trình có người giám sát, đặt bên ngoài hệ thống. Nói cách khác, đến cả khâu *quyết định nên làm gì tiếp theo* cũng vấp đúng bức tường "độ tin cậy theo lĩnh vực" mà bài này nói tới, và cách giải vẫn là *dùng mô hình mạnh hơn + giữ con người trong cuộc*, chứ không phải giao khoán hết cho máy.

**Số liệu giai đoạn thử nghiệm (từ cơ sở dữ liệu đang chạy):**
- **25 góp ý**, trong đó: *xong* 17 · *đang xem xét* 6 · *từ chối* 2.
- Theo lĩnh vực: Công nghệ thông tin 8 · trường học 8 · lái xe 5 · trung học phổ thông 2 · tiểu học 1 · trung học cơ sở 1.
- **52 lượt quyết định**: **AI 10** (hoãn 6, ưu tiên 4) · **luật 15** (hoãn) · **người 27** (duyệt 25, từ chối 2).
- Độ tự tin của các quyết định AI trung bình **0,80** (từ 0,70 đến 0,95), trong đó **4 quyết định** dưới 0,75 (những ca khó phân định nhất). *Lưu ý: dữ liệu trải qua đợt đổi mô hình nói trên.*
- **28 thông báo** gửi lại cho học sinh → vòng được *khép kín*.

Điểm cốt lõi: **quyết định cuối cùng vẫn ở con người** (27/52); AI chỉ phân loại và đề xuất ưu tiên. Đây chính là một cách làm cụ thể của tinh thần "để con người cùng tham gia" nói ở Mục 2.1.

**Vài ví dụ thật (trích nguyên, có rút gọn):**
- *Làm có chọn lọc:* góp ý #1 "nâng cấp khu vực trường" → câu trả lời liệt kê đúng những phần đáng làm đã làm xong, và giải thích phần bị cắt do nội dung gửi lên bị giới hạn ký tự.
- *Từ chối có lý do kỹ thuật:* góp ý #4 "thêm người qua lại cho bản đồ sinh động" → **bị từ chối** vì "hoạt ảnh chạy liên tục sẽ rất nặng máy trên máy tính bảng và máy đời cũ mà nhiều em đang dùng". (Đây cũng là cách giữ hệ thống khỏi phình nặng.)
- *Tìm lỗi, giữ an toàn dữ liệu:* góp ý #5 "đang làm bài thì bị tụt về cấp 1" → câu trả lời xác nhận "điểm của em trên máy chủ vẫn nguyên (đáng ra là cấp 22), đây chỉ là lỗi *hiển thị tạm* do màn hình vẽ trước khi kịp đồng bộ".
- *Tránh làm trùng:* góp ý #10 (bộ câu hỏi lý thuyết lái xe) → nhận ra trùng với một góp ý bên Trường Lái xe đã xử lý.
- *Ưu tiên theo số đông:* góp ý #9 "lồng học mà chơi vào bài" được **14 lượt ủng hộ** — tín hiệu để ưu tiên do chính người dùng bình chọn.

### 4.3 Vòng 2 — "AI tự soạn bài tập" và cơ chế canh `reconcile()`

Khi học sinh muốn luyện thêm, hàm `handlePracticeMore` gọi mô hình `qwen2.5:14b` soạn câu hỏi mới *bám chủ đề tuần học theo GDPT 2018*. Vì mô hình 14B "tính đúng trong lời giải nhưng đôi khi lại chỉ sai vào đáp án", hệ thống có một bộ kiểm tra nhẹ:

```js
// server/ai.js — reconcile(): tự sửa lại đáp án khi nó mâu thuẫn với chính lời giải
const reconcile = (choices, answer, explanation) => {
  const nums = String(explanation).match(/-?\d+(?:[.,]\d+)?/g);
  if (!nums) return answer;
  const last = nums[nums.length - 1].replace(',', '.');      // con số kết luận cuối trong lời giải
  const norm = c => String(c).replace(/\s/g, '').replace(',', '.');
  const hits = choices.map((c, i) => norm(c) === last ? i : -1).filter(i => i >= 0);
  return hits.length === 1 ? hits[0] : answer;                // CHỈ sửa khi khớp DUY NHẤT (cho an toàn)
};
```

Cách làm: lấy con số kết luận cuối cùng *trong chính lời giải của mô hình*; nếu nó trùng *đúng một* lựa chọn thì chỉnh đáp án cho khớp; nếu trùng không lựa chọn nào hoặc trùng nhiều lựa chọn thì *để nguyên* (thà bỏ sót còn hơn sửa bậy). Đây là hình thức tối giản của vòng *sinh ra rồi kiểm lại* nói ở Mục 2; và nó là một bộ kiểm tra **bám sát lĩnh vực** (số học), chứ không phải kiểm cú pháp chung chung. `reconcile()` chạy *trước khi lưu*, nên kho bài tập do AI soạn luôn ở trạng thái đã được chỉnh.

Mục 5 đo trực tiếp hai điều: (a) khi không ai canh, mô hình sai đáp án bao nhiêu ngay trên chương trình; và (b) `reconcile()` cứu được bao nhiêu, có làm hỏng gì không.

---

## 5. Thí nghiệm: đo nhu cầu kiểm tra và mức hữu ích của `reconcile()`

### 5.1 Cách làm

Để đo hai điều — *mô hình sai bao nhiêu khi không ai canh* và *`reconcile()` giúp được bao nhiêu* — chúng tôi cho *chính mô hình soạn bài* (`qwen2.5:14b`, nhiệt độ 0,2) **giải lại** một mẫu câu hỏi *chuẩn* lấy từ kho `curriculum_content`. Mỗi câu chỉ đưa *đề và bốn lựa chọn* (giấu đáp án); mô hình trả về đáp án kèm lời giải — *đúng kiểu nó vẫn tạo khi soạn đề*. Sau đó cho `reconcile()` đối chiếu, rồi so cả hai (trước và sau khi chỉnh) với đáp án chuẩn.

- **Mẫu:** 122 câu thuần số, **lấy đều theo lớp** (mỗi lớp tối đa 10 câu, lớp 1–12), từ kho chuẩn do con người soạn. Gọi mô hình *tuần tự*, nhiệt độ 0,2; 122/122 lượt đều chạy được.
- **Các chỉ số:**
  - *Độ đúng thô* = tỉ lệ đáp án mô hình trùng đáp án chuẩn → cho thấy nhu cầu kiểm tra.
  - *Độ đúng sau khi chỉnh* = tỉ lệ đáp án sau `reconcile()` trùng đáp án chuẩn → mức hữu ích thật.
  - *Tỉ lệ tự mâu thuẫn* = số lần `reconcile()` đổi đáp án → mô hình tự cãi lại chính nó (đáp án chỉ một đằng, lời giải tính một nẻo).
  - *Phân tích chỉnh sửa*: sửa SAI→ĐÚNG (cứu được) · sửa ĐÚNG→SAI (làm hỏng) · SAI→SAI (vô ích).

### 5.2 Kết quả

**Bảng 1 — Tổng hợp (122 câu).**

| Chỉ số | Giá trị |
|---|---|
| Độ đúng **thô** (mô hình, không ai canh) | **72,1%** (88/122) — *sai 27,9% (34/122)* |
| Độ đúng **sau `reconcile()`** | **82,0%** (100/122) |
| Mức tăng | **+9,8 điểm** (tăng khoảng 13,6% so với ban đầu) |
| Tỉ lệ **tự mâu thuẫn** (reconcile đổi đáp án) | 15,6% (19/122) |
| — trong đó sửa **SAI→ĐÚNG** (cứu được) | **15** |
| — sửa **ĐÚNG→SAI** (làm hỏng) | 3 |
| — SAI→SAI (vô ích) | 1 |
| **Tỉ lệ chỉnh có lợi** (sửa đúng / tổng số lần sửa) | **78,9%** (15/19) |

**Càng lên lớp cao, mô hình càng hay sai.** Xét độ đúng thô theo lớp: lớp 1–3 và lớp 5, 10 quanh mức 0,7–0,9; nhưng **lớp 8 chỉ 0,50** và **lớp 12 chỉ 0,40**. Sau khi `reconcile()` đối chiếu, một số lớp cải thiện rõ (lớp 3: 0,70→1,00; lớp 6: 0,70→0,90; lớp 11: 0,70→0,90).

**Vài ví dụ thật (trích nguyên).**

*`reconcile()` cứu được* — mô hình tính đúng trong lời giải nhưng lại chỉ sai đáp án, bộ kiểm tra đọc con số kết luận rồi sửa lại:
- *"Lan có 24 nhãn vở, mẹ cho thêm 18. Lan có?"* — lời giải: "24 + 18 = **42**"; mô hình chọn "32" (sai) → `reconcile` thấy "42" → **sửa về đúng**.
- *"63 : 7 = ?"* — lời giải "= **9**"; mô hình chọn "7" → `reconcile` → **"9" đúng**.

*Kiểu sai nguy hiểm — mô hình tự phủ nhận đáp án đúng của chính mình* (và `reconcile()` cũng chịu):
- *"3 + 5 = ?"* — lời giải ghi: *"3 + 5 = 8 **nhưng đáp án đúng trong các lựa chọn là '7'**, ở vị trí 0"*. Mô hình tính đúng (ra 8) rồi **tự bịa lý do để chọn '7' sai**; vì câu kết thúc bằng "vị trí 0", `reconcile` bám vào số cuối là "0", không khớp lựa chọn nào → đành để nguyên đáp án sai.
- *"5 + 234 + 95 + 66 = ?"* — lời giải cộng đúng từng bước ra **400**, rồi lại viết *"kết quả cuối cùng là **410** (có thể do sai sót nhỏ)"*; `reconcile` bám vào "410" → đi theo đáp án sai.

### 5.3 Bàn luận

Ba điều rút ra, đều củng cố thẳng luận điểm của bài.

**(1) Nhu cầu kiểm tra là có thật và đo được.** Một mô hình soạn bài không ai canh thì **sai gần 28%** đáp án *ngay trên chương trình do con người soạn* — và càng lên lớp cao càng sai (lớp 12 sai 40%). Nếu để vòng "AI tự soạn bài" chạy mà *không* có lớp kiểm tra, đây chính là tỉ lệ lỗi sẽ được "dạy" cho học sinh. Con số này biến câu nói chung chung "AI có thể bịa" thành một con số cụ thể, gắn với từng lĩnh vực.

**(2) Một bộ kiểm tra bám lĩnh vực giúp ích rõ rệt — nhưng chưa đủ.** `reconcile()` chỉ là vài dòng, không gọi thêm mô hình nào, vậy mà nâng độ đúng thêm **gần 10 điểm**, với **78,9%** số lần chỉnh là có lợi. Điều đó cho thấy *kiểm tra đúng chuyên môn, dù rẻ tiền, vẫn tạo khác biệt lớn*. Nhưng nó **không xóa hết lỗi**: vẫn còn 22 câu sai sau khi chỉnh, và bản thân bộ kiểm tra còn **làm hỏng 3 câu**. Điều này khớp với kết quả lý thuyết rằng *AI bịa là điều không xóa được* (Mục 2.5): không một mẹo đơn giản nào lấp kín được khoảng trống.

**(3) Kiểu sai của mô hình cho thấy vì sao bắt buộc phải có con người.** Đáng chú ý nhất là kiểu *tính đúng rồi tự phủ nhận*: mô hình cộng ra 8 hay 400 chính xác, rồi **tự bịa lý do "chắc do gõ nhầm"** để chọn một đáp án sai cho "khớp" với lựa chọn nó tưởng là đúng. Đây là kiểu sai nguy hiểm nhất trong giáo dục — *trông như có lập luận, có giải thích tự tin, nhưng kết luận sai* — và là kiểu mà một bộ kiểm tra dựa trên sự nhất quán về bản chất **không bắt được**, vì chính con số kết luận cuối đã bị mô hình làm hỏng. Nó cho thấy việc giữ con người trong vòng không phải một lựa chọn thận trọng tùy ý, mà là *hệ quả tất yếu* từ giới hạn của mô hình.

**Tóm lại:** thí nghiệm vẽ đúng hình dáng luận điểm — *sinh ra* thì rẻ và mạnh, còn *kiểm tra đúng chuyên môn* mới là phần quyết định chất lượng; và đây là một dải liên tục (mẹo bám lĩnh vực → bộ kiểm tra mạnh hơn → chuyên gia là người), chứ không phải một cái công tắc bật/tắt.

---

## 6. Khoảng trống nghiên cứu và các hướng đi

Từ phần điểm tài liệu (Mục 2) và ví dụ thực tế (Mục 4–5), chúng tôi nêu các hướng nghiên cứu cho **"phần mềm giáo dục tự tiến hóa"** — một chủ đề hiện *chưa* được giới khoa học đặt tên và nghiên cứu bài bản:

- **Hướng 1 — Tự động kiểm tra tính đúng về sư phạm.** Vượt khỏi `reconcile()` (mới chỉ làm được với câu số học): làm sao xác minh nội dung AI soạn có *bám chương trình*, *đúng đáp án*, *không gieo hiểu lầm*? Các cách khả dĩ: truy hồi bám chuẩn chương trình, đối chiếu đáp án, và cổng duyệt của chuyên gia có chọn lọc. Cần bằng chứng so sánh xem cách nào hiệu quả tới đâu.
- **Hướng 2 — Biến thể "tự sở hữu toàn bộ hệ thống".** Khi nền tảng làm chủ trọn hệ thống (như Tizia), rào cản "không sửa được công cụ sẵn có" (Mục 3, chỗ trống T2) được hóa giải ra sao? Liệu "tự tiến hóa do chủ nền tảng điều phối" có phải một hướng nhỏ dễ kiểm soát hơn, đáng đặt tên riêng?
- **Hướng 3 — Giữ cho hệ thống khỏi rối.** Cách nào ngăn một phần mềm cứ chắp thêm theo góp ý trở thành "mớ hỗn độn"? (Chưa nguồn nào đưa ra một khung quản lý đã kiểm chứng cho việc cứ bồi đắp tính năng theo từng lời góp ý.)
- **Hướng 4 — Con người nên đứng ở đâu trong vòng, với bậc phổ thông.** Vì AI bịa là điều không xóa được và người học là trẻ em (chịu lỗi rất kém), con người nên chốt ở khâu nào, và *ai chịu trách nhiệm* khi phần mềm tự tiến hóa dạy sai một điều gì đó?

---

## 7. Hạn chế

- **Quy mô thử nghiệm.** Số liệu người dùng (13 tài khoản, 18 lượt làm bài, 25 góp ý) còn nhỏ; các con số ở vòng góp ý chỉ mang tính *minh họa kiến trúc*, không suy rộng thống kê.
- **Một nền tảng, một ngôn ngữ.** Chỉ một ví dụ (Tizia, tiếng Việt, GDPT 2018) nên khó khái quát.
- **`reconcile()` còn hẹp.** Mới làm với câu thuần số và chỉ bắt *mâu thuẫn nội tại*; chưa phủ câu định tính, đọc hiểu, suy luận nhiều bước.
- **Phụ thuộc phiên bản mô hình.** Kết quả gắn với `qwen2.5:14b`; mô hình mạnh hơn có thể đổi mức độ (nhưng khó đổi chiều) của hiệu ứng.
- **Nguồn tầm nhìn chưa bình duyệt.** Software 3.0 và "phần mềm dễ nhào nặn" là bài nói / bài luận — chỉ dùng để đặt vấn đề, không phải bằng chứng.
- **Khoảng trống giáo dục suy ra từ "không tìm thấy".** Sau khi tìm có chủ đích vẫn không thấy công trình bình duyệt trực tiếp; đây là tín hiệu mạnh về một chỗ trống, nhưng chưa phải bằng chứng tuyệt đối.

---

## 8. Kết luận

"Người dùng nói nhu cầu → AI dựng → phần mềm lớn lên" là một hướng đi có thật, có gốc rễ lý thuyết và bằng chứng thực tế. Nhưng giá trị của một lập trường nằm ở chỗ nó chỉ đúng *ở đâu*: phần AI sinh mã, sinh nội dung đang được giải nhanh, còn điểm nghẽn đã dịch sang *hiểu đúng ý người dùng*, *kiểm tra nội dung có đúng chuyên môn không*, và *giữ cho hệ thống khỏi rối*. Trong giáo dục phổ thông, kiểm tra tính đúng về sư phạm là điều kiện sống còn và cũng là chỗ trống nghiên cứu rõ nhất. Tizia cho thấy một ví dụ đang chạy thật: hai vòng tự lớn lên đều có người duyệt, cùng một bộ kiểm tra bám lĩnh vực tối giản. Thí nghiệm của chúng tôi đo được vì sao cần bộ kiểm tra đó — và vì sao nó chưa đủ. Phần thắng trong hướng đi này không thuộc về "ai để AI tự làm hết", mà thuộc về "ai dựng được lớp kiểm tra và nền tri thức chuyên môn bao quanh AI".

---

## Tài liệu tham khảo (chọn lọc, đã kiểm chứng)

> Ký hiệu nguồn: **[BD]** = đã bình duyệt; **[bản thảo]** = bản chưa bình duyệt (arXiv…); **[bài nói/luận]** = bài nói hoặc bài luận không bình duyệt.

1. **[bài nói/luận]** Karpathy, A. (2025). *Software Is Changing (Again)* ("Software 3.0"). Bài nói tại Y Combinator AI Startup School, 6/2025.
2. **[BD]** Lieberman, H., Paternò, F., Klann, M., & Wulf, V. (2006). End-User Development: An Emerging Paradigm. Trong *End-User Development* (HCI Series, tập 9). Springer. DOI 10.1007/1-4020-5386-X_1.
3. **[BD]** Pulido-Prieto, O., & Juárez-Martínez, U. (2017). A Survey of Naturalistic Programming Technologies. *ACM Computing Surveys*, 50(5). DOI 10.1145/3109481.
4. **[BD]** Cao, Y., và cộng sự (2025). Generative and Malleable User Interfaces with Generative and Evolving Task-Driven Data Model. *CHI 2025*. DOI 10.1145/3706598.3713285. (arXiv 2503.04084)
5. **[bài nói/luận]** Ink & Switch — Litt, G., Horowitz, J., van Hardenberg, P., & Matthews, T. (2025). *Malleable Software: Restoring User Agency in a World of Locked-Down Apps.*
6. **[bài nói/luận]** Litt, G. (2023). *Malleable software in the age of LLMs.*
7. **[BD]** Hou, X., Zhao, Y., Liu, Y., Yang, Z., và cộng sự (2024). Large Language Models for Software Engineering: A Systematic Literature Review. *ACM TOSEM* 33(8). DOI 10.1145/3695988. (arXiv 2308.10620)
8. **[bản thảo]** (2024). LLM-based agents for software engineering: A survey. arXiv 2408.02479.
9. **[bản thảo]** Scale AI (2025). *SWE-Bench Pro.* arXiv 2509.16941.
10. **[bản thảo]** Xu, Z., và cộng sự (2024). *Hallucination is Inevitable: An Innate Limitation of Large Language Models.* arXiv 2401.11817.
11. **[bản thảo]** Zhang, R., và cộng sự (2024). *Experimenting a New Programming Practice with LLMs (AISD).* arXiv 2401.01062.
12. **[bản thảo]** Yehudai, A., và cộng sự (2025). *A Survey on Evaluation of LLM-based Agents.* arXiv 2503.16416.
13. **[BD]** Al Faraby, S., Romadhony, A., & Adiwijaya (2024). Analysis of LLMs for educational question classification and generation. *Computers and Education: Artificial Intelligence*, 7. DOI 10.1016/j.caeai.2024.100298.
14. **[BD]** Gorgun, G., & Bulut, O. (2025). Instruction-Tuned LLMs for Quality Control in Automatic Item Generation: A Feasibility Study. *Educational Measurement: Issues and Practice*, 44, 96–107. DOI 10.1111/emip.12663.
15. **[BD]** Hu, B., và cộng sự (2024). Teaching Plan Generation and Evaluation With GPT-4. *IEEE Transactions on Learning Technologies*, 17, 1471–1485. DOI 10.1109/TLT.2024.3384765.
16. **[BD]** Nguyen, A., và cộng sự (2024). The ethics of using AI in K-12 education: a systematic literature review. *Technology, Pedagogy and Education.* DOI 10.1080/1475939X.2024.2428601.
17. **[BD]** (2026). Use of LLMs in generating MCQs for health professions education: systematic review + network meta-analysis. *PLOS One.* DOI 10.1371/journal.pone.0340277.
18. **[bản thảo]** Liu, Z., và cộng sự (2025). *COGENT: Curriculum-oriented Framework for Generating Grade-appropriate Educational Content.* arXiv 2506.09367.
19. **[bản thảo]** (2025). *LearnLens: LLM-Enabled Personalised, Curriculum-Grounded Feedback with Educators in the Loop.* arXiv 2507.04295.
20. **[bản thảo]** Shimmei, M., và cộng sự (2025). *Tell Me Who Your Students Are…* arXiv 2505.05815.

---

> **Phụ lục dữ liệu (sẽ bổ sung):** các câu truy vấn cơ sở dữ liệu (chỉ đọc) cho số liệu Mục 4; mã thí nghiệm Mục 5; bảng kết quả đầy đủ theo lớp.
