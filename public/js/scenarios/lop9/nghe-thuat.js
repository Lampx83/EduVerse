// ============================================================
// Lớp 9 · NGHỆ THUẬT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018: Âm nhạc (hợp âm 7, thể loại nhạc TG) + Mỹ thuật (lịch sử MT TG, đương đại VN).
// 4–5 câu/tuần · ID prefix: "S9NT-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9NT', 'nghe-thuat', n, title, qs, opts);

export const S9NT_WEEKS = [
  // ───── HK1 — Âm nhạc ─────
  M(1, 'Ôn tập nhạc lý cơ bản — Cao độ, trường độ', [
    Q('7 nốt nhạc cơ bản?', ['Đô-Rê-Mi-Pha-Son-La-Si', 'A-B-C-D', '1-2-3-4', 'X-Y-Z'], 0, 'Hệ Solfège (Do-Re-Mi-Fa-Sol-La-Ti).'),
    Q('Khoảng cách bán cung giữa?', ['Mi–Pha và Si–Đô', 'Đô–Rê', 'Rê–Mi', 'Pha–Son'], 0, 'Trong gam trưởng tự nhiên, bán cung ở vị trí 3-4 và 7-8.'),
    Q('Trường độ là?', ['Độ dài âm thanh', 'Độ cao', 'Độ mạnh', 'Âm sắc'], 0, 'Trường độ = độ dài.'),
    Q('Nốt tròn (whole note) bằng?', ['4 nốt đen', '2 nốt đen', '1 nốt đen', '8 nốt đen'], 0, 'Nốt tròn = 4 phách = 4 đen.'),
  ]),

  M(2, 'Hợp âm — Khái niệm và ký hiệu', [
    Q('Hợp âm là?', ['3 nốt trở lên vang đồng thời', '1 nốt', '2 nốt', 'Không có khái niệm'], 0, 'Hợp âm tối thiểu 3 nốt (triad).'),
    Q('Hợp âm Đô trưởng (C) gồm?', ['Đô – Mi – Son', 'Đô – Pha – La', 'Rê – Pha – La', 'Đô – Rê – Mi'], 0, 'C major: C-E-G.'),
    Q('Hợp âm La thứ (Am) gồm?', ['La – Đô – Mi', 'La – Đô# – Mi', 'La – Rê – Mi', 'La – Pha – Đô'], 0, 'A minor: A-C-E.'),
    Q('Ký hiệu C nghĩa là?', ['Đô trưởng', 'Đô thứ', 'Rê trưởng', 'Đô#'], 0, 'C = Đô trưởng theo ký hiệu Anh – Mỹ.'),
    Q('Ký hiệu Cm nghĩa là?', ['Đô thứ', 'Đô trưởng', 'Rê thứ', 'Đô#'], 0, 'Cm = Đô minor.'),
  ]),

  M(3, 'Hợp âm 7 (chord 7) — Khái niệm', [
    Q('Hợp âm 7 là?', ['Hợp âm 3 + thêm âm 7 (4 nốt)', 'Có 7 nốt', '7 hợp âm', '7 quãng'], 0, 'Hợp âm 7 thêm âm bậc 7 vào hợp âm 3.'),
    Q('C7 (dominant 7) gồm?', ['C – E – G – Bb', 'C – E – G – B', 'C – Eb – G – B', 'C – E – G# – B'], 0, 'C7 dominant: C-E-G-Bb.'),
    Q('Cmaj7 gồm?', ['C – E – G – B', 'C – E – G – Bb', 'C – Eb – G – B', 'C – E – G – C'], 0, 'Cmaj7 (major 7): C-E-G-B.'),
    Q('Cm7 gồm?', ['C – Eb – G – Bb', 'C – E – G – B', 'C – Eb – G – B', 'C – E – G – Bb'], 0, 'Cm7 (minor 7): C-Eb-G-Bb.'),
    Q('Hợp âm 7 dùng nhiều trong?', ['Jazz, blues, pop', 'Chỉ classical', 'Chỉ rock', 'Chỉ EDM'], 0, 'Chord 7 đặc trưng jazz/blues.'),
  ]),

  M(4, 'Dịch giọng (transpose)', [
    Q('Dịch giọng là?', ['Chuyển bản nhạc sang giọng khác để dễ hát/đàn', 'Dịch ngôn ngữ', 'Đổi nhịp', 'Đổi nốt'], 0, 'Transpose giúp phù hợp giọng hát hoặc nhạc cụ.'),
    Q('Dịch giọng từ C lên D là?', ['Tăng tất cả nốt lên 1 cung (whole step)', '1/2 cung', '2 cung', '3 cung'], 0, 'C → D là tăng 1 cung.'),
    Q('Dấu hoá khi dịch giọng?', ['Có thể thay đổi (thêm/bớt thăng giáng)', 'Không thay đổi', 'Mất hết', 'Tuỳ ý'], 0, 'Dịch giọng có thể thay đổi bộ dấu hoá.'),
    Q('Khi dịch giọng, cao độ tương đối?', ['Giữ nguyên (giai điệu nghe vẫn vậy)', 'Thay đổi', 'Mất', 'Tuỳ ý'], 0, 'Bản nhạc dịch giọng vẫn nghe giống nhau, chỉ cao hơn/thấp hơn.'),
  ]),

  M(5, 'Vòng hợp âm cơ bản (chord progression)', [
    Q('Vòng hợp âm phổ biến trong pop?', ['I – V – vi – IV (C – G – Am – F)', 'I – II – III', 'V – I', 'I – I – I'], 0, '"Pop progression" rất phổ biến.'),
    Q('Vòng 12-bar blues?', ['I-I-I-I / IV-IV-I-I / V-IV-I-I', 'I-V-I', 'I-II-III', 'Tuỳ ý'], 0, '12-bar blues là khuôn mẫu kinh điển.'),
    Q('Vai trò hợp âm chủ (tonic)?', ['Tạo cảm giác ổn định, kết thúc', 'Căng thẳng', 'Lưng chừng', 'Tuỳ ý'], 0, 'Hợp âm I (tonic) tạo ổn định.'),
    Q('Vai trò hợp âm bậc V (dominant)?', ['Tạo căng thẳng, dẫn về tonic', 'Ổn định', 'Trầm', 'Tuỳ ý'], 0, 'V → I là cadence kinh điển.'),
  ]),

  M(6, 'Classical (Nhạc cổ điển)', [
    Q('Nhạc cổ điển có nguồn gốc?', ['Phương Tây, từ thời Trung Cổ đến nay', 'Phương Đông', 'Châu Phi', 'Châu Mỹ'], 0, 'Cổ điển phát triển từ truyền thống phương Tây.'),
    Q('Các thời kỳ chính?', ['Baroque, Classical, Romantic, hiện đại', 'Chỉ 1 thời kỳ', 'Cổ + Mới', 'Tuỳ ý'], 0, 'Cổ điển trải qua nhiều thời kỳ.'),
    Q('Nhà soạn nhạc Baroque nổi tiếng?', ['J.S. Bach, Handel, Vivaldi', 'Beethoven', 'Mozart', 'Chopin'], 0, 'Bach, Handel, Vivaldi là Baroque.'),
    Q('Mozart thuộc thời kỳ?', ['Classical (Cổ điển)', 'Baroque', 'Romantic', 'Hiện đại'], 0, 'Mozart (1756–1791) là Classical.'),
    Q('Đặc trưng nhạc cổ điển?', ['Cấu trúc rõ, hoà âm phức, dàn nhạc giao hưởng', 'Đơn giản', 'Phức tạp loạn', 'Tuỳ ý'], 0, 'Cổ điển có cấu trúc và quy luật rõ ràng.'),
  ]),

  M(7, 'Jazz', [
    Q('Jazz có nguồn gốc?', ['New Orleans (Mỹ), đầu thế kỷ 20', 'Châu Âu', 'Châu Á', 'Cổ điển'], 0, 'Jazz ra đời từ cộng đồng người Mỹ gốc Phi tại New Orleans.'),
    Q('Đặc trưng nhạc Jazz?', ['Improvisation (ngẫu hứng), swing, hoà âm phức', 'Cứng nhắc', 'Đơn giản', 'Tuỳ ý'], 0, 'Improvisation là linh hồn của jazz.'),
    Q('Phong cách jazz phổ biến?', ['Bebop, swing, cool jazz, fusion', 'Chỉ 1', 'Không có', 'Tuỳ ý'], 0, 'Jazz có nhiều phong cách phụ.'),
    Q('Nhạc sĩ jazz huyền thoại?', ['Louis Armstrong, Miles Davis, John Coltrane', 'Beethoven', 'Mozart', 'Beatles'], 0, 'Những tên tuổi lớn của jazz.'),
    Q('Nhạc cụ jazz điển hình?', ['Saxophone, piano, double bass, drums, trumpet', 'Chỉ piano', 'Chỉ violin', 'Tuỳ ý'], 0, 'Saxophone là biểu tượng jazz.'),
  ]),

  M(8, 'Pop (Nhạc đại chúng)', [
    Q('Pop viết tắt của?', ['Popular music — nhạc đại chúng', 'Power', 'Pop-up', 'Popcorn'], 0, 'Pop = popular = đại chúng.'),
    Q('Đặc trưng pop?', ['Cấu trúc câu nhạc rõ, dễ nhớ, lặp lại hook', 'Phức tạp', 'Không có cấu trúc', 'Tuỳ ý'], 0, 'Pop có verse-chorus-bridge, hook bắt tai.'),
    Q('Thời kỳ vàng pop?', ['Từ 1960s với The Beatles', 'Từ 1800', 'Từ 2020', 'Cổ đại'], 0, 'Pop hiện đại bùng nổ từ 1960s.'),
    Q('Cấu trúc pop điển hình?', ['Verse – Chorus – Verse – Chorus – Bridge – Chorus', 'Tuỳ ý', 'Verse only', 'Chorus only'], 0, 'Cấu trúc V-C-V-C-B-C phổ biến.'),
    Q('Ca sĩ pop hiện đại?', ['Michael Jackson, Madonna, Taylor Swift, BTS', 'Mozart', 'Bach', 'Beethoven'], 0, 'Pop có nhiều ngôi sao đương đại.'),
  ]),

  M(9, 'Rock', [
    Q('Rock and Roll xuất hiện?', ['1950s ở Mỹ', '1800s', '2000s', '1900'], 0, 'Rock and Roll bùng nổ thập niên 50.'),
    Q('Nhạc cụ rock cơ bản?', ['Guitar điện, bass, trống, vocal', 'Piano cổ điển', 'Violin', 'Tuỳ ý'], 0, 'Bộ "rock band" cơ bản.'),
    Q('Subgenre của rock?', ['Hard rock, metal, punk, alternative, indie', 'Chỉ rock', 'Không có', 'Tuỳ ý'], 0, 'Rock có rất nhiều nhánh.'),
    Q('Ban nhạc rock huyền thoại?', ['The Beatles, Led Zeppelin, Queen, Nirvana', 'Mozart', 'Bach', 'Tuỳ ý'], 0, 'Những ban nhạc rock kinh điển.'),
    Q('Đặc trưng rock?', ['Âm thanh mạnh, nhịp 4/4, năng lượng cao', 'Êm dịu', 'Chậm', 'Tuỳ ý'], 0, 'Rock thường mạnh mẽ, năng lượng.'),
  ]),

  M(10, 'Hip-hop / Rap', [
    Q('Hip-hop ra đời?', ['1970s ở Bronx, New York', '1950s', '2000s', '1900'], 0, 'Hip-hop khởi nguồn từ Bronx thập niên 70.'),
    Q('4 yếu tố của hip-hop?', ['MCing (rap), DJing, breakdance, graffiti', 'Chỉ rap', '3 yếu tố', '5 yếu tố'], 0, '4 trụ cột hip-hop.'),
    Q('Rap là?', ['Đọc lời theo nhịp + vần', 'Hát', 'Hét', 'Đọc thường'], 0, 'Rap = rhythmic + poetry.'),
    Q('Sample là?', ['Trích đoạn ngắn từ bản nhạc khác', 'Hát lại', 'Cover', 'Phối lại'], 0, 'Sampling là kỹ thuật đặc trưng hip-hop.'),
    Q('Rap Việt nổi tiếng?', ['Rap Việt, King of Rap', 'Idol Việt Nam', 'Vietnam Got Talent', 'The Voice'], 0, 'Rap Việt là show làm phổ biến rap tại VN.'),
  ]),

  M(11, 'EDM (Electronic Dance Music)', [
    Q('EDM viết tắt?', ['Electronic Dance Music', 'Easy DJ Mix', 'Electric Drum', 'Tuỳ ý'], 0, 'EDM = Electronic Dance Music.'),
    Q('Đặc trưng EDM?', ['Tạo bằng máy tính/synth, nhịp mạnh để nhảy', 'Acoustic', 'Cổ điển', 'Tuỳ ý'], 0, 'EDM dùng nhiều thiết bị điện tử.'),
    Q('Subgenre EDM?', ['House, Techno, Trance, Dubstep, Future Bass', 'Chỉ House', '2 loại', 'Tuỳ ý'], 0, 'EDM có rất nhiều subgenre.'),
    Q('DJ trong EDM?', ['Người phối + chơi nhạc trực tiếp', 'Ca sĩ', 'Người viết lời', 'Người diễn'], 0, 'DJ = Disc Jockey, vai trò trung tâm trong EDM.'),
    Q('Festival EDM nổi tiếng?', ['Tomorrowland, EDC, Ultra', 'Cannes', 'Berlinale', 'Oscar'], 0, 'Các festival EDM lớn thế giới.'),
  ]),

  M(12, 'Ôn tập + Thực hành âm nhạc', [
    Q('Hợp âm 7 thêm âm?', ['Âm bậc 7 vào hợp âm 3', 'Âm bậc 5', 'Âm bậc 3', 'Tuỳ ý'], 0, 'Chord 7 = triad + 7th.'),
    Q('Vòng hợp âm pop kinh điển?', ['I – V – vi – IV', 'I – II – III', 'V – I', 'Tuỳ ý'], 0, 'Pop progression rất phổ biến.'),
    Q('Jazz đặc trưng?', ['Improvisation + swing', 'Cứng nhắc', 'Đơn giản', 'Tuỳ ý'], 0, 'Improvisation linh hồn jazz.'),
    Q('EDM dùng nhiều?', ['Máy tính + synthesizer', 'Acoustic', 'Cổ điển', 'Tuỳ ý'], 0, 'EDM là nhạc điện tử.'),
    Q('Dịch giọng giúp?', ['Bản nhạc dễ hát/đàn hơn cho giọng/instrument cụ thể', 'Đổi giai điệu', 'Đổi nhịp', 'Tuỳ ý'], 0, 'Transpose giữ giai điệu, đổi cao độ tuyệt đối.'),
  ]),

  M(13, 'Nhạc Việt Nam — Truyền thống và đương đại', [
    Q('Nhạc cụ truyền thống VN?', ['Đàn tranh, đàn bầu, sáo, đàn nguyệt, đàn nhị', 'Piano', 'Guitar điện', 'Tuỳ ý'], 0, 'Việt Nam có kho tàng nhạc cụ truyền thống phong phú.'),
    Q('Nhã nhạc cung đình Huế?', ['Di sản UNESCO 2003', 'Di sản 2020', 'Chưa có', 'Tuỳ ý'], 0, 'Nhã nhạc cung đình Huế là di sản phi vật thể UNESCO.'),
    Q('Ca trù?', ['Di sản UNESCO 2009, cần bảo vệ khẩn cấp', 'Bình thường', 'Chưa có', 'Tuỳ ý'], 0, 'Ca trù được UNESCO ghi danh năm 2009.'),
    Q('V-Pop hiện đại?', ['Sơn Tùng M-TP, Mỹ Tâm, Hà Anh Tuấn, ca sĩ thế hệ Z', 'Cải lương', 'Chèo', 'Tuồng'], 0, 'V-Pop đương đại có nhiều nghệ sĩ nổi tiếng.'),
  ]),

  M(14, 'Kiểm tra giữa HK1', [
    Q('Cmaj7 gồm các nốt?', ['C-E-G-B', 'C-E-G-Bb', 'C-Eb-G-B', 'C-E-G-A'], 0, 'Cmaj7 = C-E-G-B.'),
    Q('Vòng hợp âm pop?', ['I-V-vi-IV', 'I-IV-V', 'I-II-III', 'I-V-I'], 0, 'Pop progression: I-V-vi-IV.'),
    Q('Jazz nguồn gốc?', ['New Orleans, Mỹ', 'London', 'Vienna', 'Paris'], 0, 'Jazz từ New Orleans.'),
    Q('Hip-hop 4 yếu tố?', ['MC, DJ, breakdance, graffiti', '3 yếu tố', '5 yếu tố', 'Chỉ rap'], 0, '4 trụ cột hip-hop.'),
    Q('EDM đặc trưng?', ['Nhạc điện tử, nhịp mạnh', 'Acoustic', 'Cổ điển', 'Tuỳ ý'], 0, 'EDM dùng synth + máy tính.'),
  ]),

  // ───── HK1 cuối + chuyển sang Mỹ thuật ─────
  M(15, 'Mỹ thuật cổ điển — Cổ Hy Lạp – La Mã', [
    Q('Mỹ thuật cổ Hy Lạp đặc trưng?', ['Tỉ lệ hài hoà, đề cao vẻ đẹp con người', 'Trừu tượng', 'Hỗn loạn', 'Tuỳ ý'], 0, 'Hy Lạp cổ đề cao tỉ lệ + vẻ đẹp con người.'),
    Q('Tỉ lệ vàng (golden ratio)?', ['≈ 1,618', '3,14', '2,72', '1,414'], 0, 'Tỉ lệ vàng φ ≈ 1,618 dùng nhiều trong nghệ thuật.'),
    Q('Kiến trúc Hy Lạp gồm 3 thức cột?', ['Doric, Ionic, Corinthian', 'Gothic', 'Baroque', 'Tuỳ ý'], 0, '3 thức cột Hy Lạp cổ.'),
    Q('Đền Parthenon ở?', ['Athens, Hy Lạp', 'Roma', 'Paris', 'Cairo'], 0, 'Parthenon nổi tiếng tại Acropolis, Athens.'),
    Q('Mỹ thuật La Mã thừa kế?', ['Hy Lạp + thêm kiến trúc vòm + bê tông', 'Tự nguyên', 'Khác hoàn toàn', 'Tuỳ ý'], 0, 'La Mã kế thừa Hy Lạp + sáng tạo về kỹ thuật.'),
  ]),

  M(16, 'Mỹ thuật Phục Hưng (Renaissance)', [
    Q('Phục Hưng nghĩa là?', ['Hồi sinh — quay về giá trị cổ Hy-La', 'Cách mạng', 'Cải cách', 'Đột phá'], 0, 'Renaissance = hồi sinh.'),
    Q('Thời kỳ Phục Hưng?', ['Thế kỷ 14–17, bắt đầu ở Ý', 'Thế kỷ 19', 'Thế kỷ 5', 'Tuỳ ý'], 0, 'Phục Hưng từ thế kỷ 14, đỉnh ở thế kỷ 15-16.'),
    Q('Hoạ sĩ Phục Hưng nổi tiếng?', ['Leonardo da Vinci, Michelangelo, Raphael', 'Picasso', 'Van Gogh', 'Monet'], 0, '3 đại danh hoạ Phục Hưng cao trào.'),
    Q('Bức "Mona Lisa" của ai?', ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Van Gogh'], 0, 'Mona Lisa do Da Vinci vẽ, hiện tại Louvre.'),
    Q('Đặc trưng Phục Hưng?', ['Phối cảnh tuyến tính, ánh sáng, giải phẫu', 'Trừu tượng', 'Phẳng', 'Tuỳ ý'], 0, 'Phục Hưng phát triển kỹ thuật vẽ hiện thực.'),
  ]),

  M(17, 'Mỹ thuật Baroque + Rococo', [
    Q('Baroque đặc trưng?', ['Hoành tráng, đối lập sáng-tối mạnh (chiaroscuro)', 'Đơn giản', 'Phẳng', 'Tuỳ ý'], 0, 'Baroque kịch tính, sang trọng.'),
    Q('Hoạ sĩ Baroque nổi tiếng?', ['Caravaggio, Rembrandt, Vermeer', 'Picasso', 'Van Gogh', 'Monet'], 0, '3 đại biểu Baroque.'),
    Q('Rococo đặc trưng?', ['Nhẹ nhàng, trang trí cầu kỳ, màu pastel', 'Hoành tráng', 'Tối', 'Tuỳ ý'], 0, 'Rococo nhẹ nhàng, vui tươi.'),
    Q('Sự khác Baroque vs Rococo?', ['Baroque hoành tráng kịch tính; Rococo nhẹ nhàng trang trí', 'Giống', 'Không khác', 'Tuỳ ý'], 0, 'Rococo là phong cách tiếp nối nhưng nhẹ hơn.'),
  ]),

  M(18, 'Ôn tập học kì I — Âm nhạc + Mỹ thuật', [
    Q('Hợp âm 7 dùng nhiều ở?', ['Jazz, blues, pop', 'Chỉ cổ điển', 'Chỉ rock', 'Tuỳ ý'], 0, 'Chord 7 đặc trưng jazz/blues.'),
    Q('Renaissance phát triển?', ['Phối cảnh, giải phẫu, ánh sáng', 'Trừu tượng', 'Phẳng', 'Tuỳ ý'], 0, 'Phục Hưng cách mạng kỹ thuật vẽ.'),
    Q('Mona Lisa của?', ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Van Gogh'], 0, 'Da Vinci vẽ Mona Lisa.'),
    Q('Baroque đặc trưng?', ['Hoành tráng, chiaroscuro', 'Nhẹ nhàng', 'Phẳng', 'Tuỳ ý'], 0, 'Baroque kịch tính.'),
    Q('Hip-hop ra đời ở?', ['Bronx, New York', 'London', 'Paris', 'Tokyo'], 0, 'Hip-hop từ Bronx.'),
  ]),

  // ───── HK2 — Mỹ thuật + tổng hợp ─────
  M(19, 'Mỹ thuật Ấn tượng (Impressionism)', [
    Q('Ấn tượng xuất hiện?', ['Pháp, cuối thế kỷ 19', 'Ý', 'Hà Lan', 'Đức'], 0, 'Impressionism ở Pháp, 1860s-1880s.'),
    Q('Đặc trưng Ấn tượng?', ['Vẽ ngoài trời, bắt khoảnh khắc ánh sáng + màu', 'Trong xưởng', 'Đen-trắng', 'Tuỳ ý'], 0, 'Plein air + bắt ánh sáng.'),
    Q('Hoạ sĩ Ấn tượng?', ['Monet, Renoir, Degas', 'Da Vinci', 'Michelangelo', 'Picasso'], 0, 'Các hoạ sĩ Ấn tượng nổi tiếng.'),
    Q('Bức "Impression, Sunrise" của?', ['Monet', 'Manet', 'Degas', 'Renoir'], 0, 'Monet vẽ "Impression, Sunrise" — gốc của tên trường phái.'),
    Q('Sau Ấn tượng (Post-Impressionism)?', ['Van Gogh, Cézanne, Gauguin', 'Da Vinci', 'Picasso', 'Tuỳ ý'], 0, 'Hậu Ấn tượng phát triển từ Ấn tượng.'),
  ]),

  M(20, 'Mỹ thuật hiện đại — Lập thể (Cubism)', [
    Q('Cubism do ai sáng lập?', ['Picasso và Braque', 'Van Gogh', 'Monet', 'Da Vinci'], 0, 'Picasso + Braque sáng lập Cubism (1907).'),
    Q('Đặc trưng Cubism?', ['Phân mảnh, nhìn nhiều góc cùng lúc', 'Hiện thực', 'Phẳng', 'Tuỳ ý'], 0, 'Cubism vỡ vụn hình thể + ghép nhiều góc nhìn.'),
    Q('Bức "Demoiselles d\'Avignon" của?', ['Picasso', 'Braque', 'Van Gogh', 'Monet'], 0, 'Picasso, 1907 — khởi đầu Cubism.'),
    Q('Cubism ảnh hưởng đến?', ['Mỹ thuật + thiết kế + kiến trúc hiện đại', 'Chỉ tranh vẽ', 'Chỉ nhạc', 'Tuỳ ý'], 0, 'Cubism mở đường cho nghệ thuật hiện đại.'),
  ]),

  M(21, 'Mỹ thuật hiện đại — Trừu tượng, Siêu thực', [
    Q('Nghệ thuật trừu tượng (Abstract)?', ['Không vẽ hình thực, dùng hình – màu thể hiện cảm xúc/ý tưởng', 'Hiện thực', 'Chân dung', 'Tuỳ ý'], 0, 'Trừu tượng từ chối vẽ hình thực.'),
    Q('Kandinsky nổi tiếng với?', ['Khai sinh trừu tượng', 'Hiện thực', 'Cổ điển', 'Tuỳ ý'], 0, 'Kandinsky tiên phong abstract.'),
    Q('Siêu thực (Surrealism) đặc trưng?', ['Vẽ thế giới mơ, phi lý, tiềm thức', 'Hiện thực', 'Phẳng', 'Tuỳ ý'], 0, 'Surrealism khám phá tiềm thức.'),
    Q('Hoạ sĩ Siêu thực?', ['Salvador Dalí, René Magritte', 'Da Vinci', 'Monet', 'Picasso'], 0, 'Dalí + Magritte là Surrealist nổi tiếng.'),
    Q('Bức "Sự kiên trì của ký ức" (đồng hồ chảy) của?', ['Salvador Dalí', 'Picasso', 'Van Gogh', 'Magritte'], 0, 'Dalí, 1931 — biểu tượng Surrealism.'),
  ]),

  M(22, 'Pop Art', [
    Q('Pop Art xuất hiện?', ['1950s-1960s ở Anh, Mỹ', '1800s', '2000s', '1990'], 0, 'Pop Art bùng nổ thập niên 60.'),
    Q('Đặc trưng Pop Art?', ['Lấy cảm hứng từ văn hoá đại chúng, quảng cáo, truyện tranh', 'Cổ điển', 'Trừu tượng', 'Tuỳ ý'], 0, 'Pop Art = pop culture art.'),
    Q('Andy Warhol nổi tiếng với?', ['Tranh lon súp Campbell, chân dung Marilyn Monroe', 'Mona Lisa', 'Trừu tượng', 'Tuỳ ý'], 0, 'Warhol là biểu tượng Pop Art.'),
    Q('Roy Lichtenstein nổi tiếng?', ['Vẽ phong cách truyện tranh + dots', 'Cổ điển', 'Trừu tượng', 'Tuỳ ý'], 0, 'Lichtenstein đặc trưng phong cách comic.'),
  ]),

  M(23, 'Mỹ thuật Việt Nam — Trường Cao đẳng Mỹ thuật Đông Dương', [
    Q('Trường CĐ Mỹ thuật Đông Dương thành lập?', ['1925, Hà Nội', '1900', '1945', '1954'], 0, 'Thành lập 1925, đặt nền móng mỹ thuật hiện đại VN.'),
    Q('Bộ tứ "Trí – Lân – Vân – Cẩn"?', ['Nguyễn Gia Trí, Nguyễn Tường Lân, Tô Ngọc Vân, Trần Văn Cẩn', 'Tên thường', 'Không có', 'Tuỳ ý'], 0, '4 danh hoạ Đông Dương.'),
    Q('Bộ tứ "Nghiêm – Liên – Sáng – Phái"?', ['Nguyễn Sáng, Bùi Xuân Phái, Dương Bích Liên, Nguyễn Tư Nghiêm', 'Tên thường', 'Không có', 'Tuỳ ý'], 0, '4 danh hoạ thế hệ sau.'),
    Q('Bùi Xuân Phái nổi tiếng với?', ['Tranh phố cổ Hà Nội', 'Phong cảnh', 'Chân dung', 'Tuỳ ý'], 0, '"Phố Phái" là biểu tượng.'),
    Q('Tô Ngọc Vân nổi tiếng?', ['Tranh sơn dầu "Thiếu nữ bên hoa huệ"', 'Phố cổ', 'Trừu tượng', 'Tuỳ ý'], 0, '"Thiếu nữ bên hoa huệ" là tuyệt tác Đông Dương.'),
  ]),

  M(24, 'Mỹ thuật Việt Nam — Đổi mới (1986-nay)', [
    Q('Mỹ thuật VN đổi mới sau 1986?', ['Đa dạng phong cách, tiếp cận quốc tế', 'Khép kín', 'Cổ điển', 'Tuỳ ý'], 0, 'Đổi mới mở cửa nghệ thuật VN.'),
    Q('Họa sĩ đương đại VN nổi tiếng?', ['Lê Phổ, Trần Lưu Hậu, Phạm Lực, Đinh Quân', 'Da Vinci', 'Picasso', 'Tuỳ ý'], 0, 'Nhiều họa sĩ đương đại VN nổi tiếng.'),
    Q('Chất liệu mỹ thuật truyền thống VN?', ['Sơn mài, lụa, khắc gỗ', 'Sơn dầu thuần', 'Tuỳ ý', 'Không có'], 0, 'Sơn mài + lụa là chất liệu đặc sắc VN.'),
    Q('Nghệ thuật đương đại VN có?', ['Sắp đặt (installation), trình diễn (performance), video art', 'Chỉ tranh', 'Chỉ điêu khắc', 'Tuỳ ý'], 0, 'Nghệ thuật đương đại VN đa dạng.'),
  ]),

  M(25, 'Nghệ thuật đương đại — Khái niệm', [
    Q('Nghệ thuật đương đại (contemporary art)?', ['Nghệ thuật từ 1960s đến nay', 'Cổ điển', 'Hiện đại đầu thế kỷ', 'Tuỳ ý'], 0, 'Contemporary art = từ ~1960 đến nay.'),
    Q('Đặc trưng đương đại?', ['Đa dạng phương tiện, khái niệm trên kỹ thuật, phản ánh xã hội', 'Chỉ tranh', 'Chỉ điêu khắc', 'Tuỳ ý'], 0, 'Đương đại đa phương tiện.'),
    Q('Conceptual art?', ['Ý tưởng quan trọng hơn vật phẩm cụ thể', 'Vẽ đẹp', 'Hiện thực', 'Tuỳ ý'], 0, 'Conceptual art coi ý tưởng là chính.'),
    Q('Installation art?', ['Sắp đặt vật thể trong không gian, người xem trải nghiệm', 'Tranh treo', 'Điêu khắc', 'Tuỳ ý'], 0, 'Installation tạo trải nghiệm không gian.'),
    Q('Performance art?', ['Nghệ sĩ dùng cơ thể thực hiện một hành vi nghệ thuật', 'Diễn kịch', 'Hát', 'Tuỳ ý'], 0, 'Performance art biểu diễn nghệ thuật bằng cơ thể.'),
  ]),

  M(26, 'Vẽ tranh thực hành — Phong cảnh + tĩnh vật', [
    Q('Bố cục cơ bản?', ['Tỉ lệ vàng, quy tắc 1/3, cân bằng', 'Tuỳ ý', 'Trung tâm', 'Không có'], 0, 'Bố cục cơ bản giúp tranh hài hoà.'),
    Q('Ánh sáng trong tranh?', ['Xác định hướng + nguồn để tạo khối', 'Tuỳ ý', 'Đều khắp', 'Không quan tâm'], 0, 'Ánh sáng tạo chiều sâu.'),
    Q('Pha màu cơ bản?', ['Tam giác màu: đỏ - vàng - lam', 'Đen - trắng', 'RGB', 'Tuỳ ý'], 0, 'Tam giác màu cổ điển.'),
    Q('Phối cảnh tuyến tính?', ['Đường thẳng hội tụ về điểm tụ', 'Không có quy tắc', 'Phẳng', 'Tuỳ ý'], 0, 'Phối cảnh tạo chiều sâu.'),
  ]),

  M(27, 'Vẽ chân dung', [
    Q('Tỉ lệ khuôn mặt cơ bản?', ['Mắt nằm ở giữa đầu, miệng ở 1/3 dưới mũi-cằm', 'Tuỳ ý', 'Mắt ở trên cùng', 'Không có'], 0, 'Tỉ lệ chuẩn giúp chân dung đẹp.'),
    Q('Khi vẽ chân dung, ánh sáng?', ['Một hướng rõ tạo khối khuôn mặt', 'Đều', 'Tuỳ ý', 'Không quan tâm'], 0, 'Ánh sáng định hướng tạo khối 3D.'),
    Q('Biểu cảm khuôn mặt nằm ở?', ['Mắt + miệng chủ yếu', 'Cằm', 'Tóc', 'Tuỳ ý'], 0, 'Mắt + miệng truyền cảm xúc.'),
    Q('Phối cảnh đầu nghiêng?', ['Chú ý độ rút ngắn (foreshortening)', 'Vẽ phẳng', 'Tuỳ ý', 'Không quan tâm'], 0, 'Foreshortening khi vẽ góc nghiêng.'),
  ]),

  M(28, 'Thiết kế đồ hoạ cơ bản', [
    Q('Nguyên tắc thiết kế cơ bản?', ['Cân bằng, tương phản, nhịp điệu, nhấn mạnh, thống nhất', 'Tuỳ ý', 'Không có', 'Đẹp là đủ'], 0, '5 nguyên tắc cơ bản của design.'),
    Q('Phối màu cơ bản?', ['Đơn sắc, tương đồng, bổ sung, tam giác', 'Tuỳ ý', 'Đen-trắng', 'Không có'], 0, 'Bánh xe màu giúp phối hợp.'),
    Q('Phần mềm thiết kế phổ biến?', ['Photoshop, Illustrator, Figma, Canva', 'Word', 'Excel', 'Notepad'], 0, 'Các phần mềm thiết kế chuyên nghiệp.'),
    Q('Typography là?', ['Nghệ thuật chữ trong thiết kế', 'Vẽ', 'Chụp ảnh', 'Tuỳ ý'], 0, 'Typography rất quan trọng trong design.'),
  ]),

  M(29, 'Sáng tạo nghệ thuật + xã hội', [
    Q('Nghệ thuật phản ánh?', ['Xã hội + cảm xúc cá nhân', 'Chỉ cá nhân', 'Chỉ xã hội', 'Không gì'], 0, 'Nghệ thuật là tấm gương phản ánh xã hội + tâm hồn.'),
    Q('Nghệ thuật cộng đồng?', ['Tác phẩm cho công chúng (mural, tượng công cộng)', 'Riêng tư', 'Bí mật', 'Tuỳ ý'], 0, 'Nghệ thuật công cộng phục vụ cộng đồng.'),
    Q('Bảo tồn di sản nghệ thuật cần?', ['Toàn xã hội + chính sách + giáo dục', 'Mặc kệ', 'Tuỳ ý', 'Chỉ chính phủ'], 0, 'Bảo tồn là trách nhiệm chung.'),
    Q('NFT và nghệ thuật số?', ['Xu hướng mới: nghệ thuật trên blockchain', 'Cổ điển', 'Không có', 'Tuỳ ý'], 0, 'NFT mở ra thị trường nghệ thuật số mới.'),
  ]),

  M(30, 'Âm nhạc + Mỹ thuật giao thoa', [
    Q('Nhạc phim (film score) có vai trò?', ['Tạo cảm xúc + dẫn dắt câu chuyện', 'Vô bổ', 'Phụ', 'Tuỳ ý'], 0, 'Film score quan trọng trong điện ảnh.'),
    Q('Hans Zimmer là?', ['Nhà soạn nhạc phim nổi tiếng', 'Đạo diễn', 'Diễn viên', 'Tuỳ ý'], 0, 'Hans Zimmer sáng tác cho nhiều phim bom tấn.'),
    Q('MV (music video) kết hợp?', ['Nhạc + hình ảnh + biểu diễn', 'Chỉ nhạc', 'Chỉ hình', 'Tuỳ ý'], 0, 'MV kết hợp đa nghệ thuật.'),
    Q('Animation và âm nhạc?', ['Disney/Studio Ghibli kết hợp tuyệt đẹp', 'Không liên quan', 'Đối lập', 'Tuỳ ý'], 0, 'Animation + nhạc tạo trải nghiệm hoàn chỉnh.'),
  ]),

  M(31, 'Nghệ thuật và công nghệ', [
    Q('AI sinh nghệ thuật (AI art)?', ['DALL-E, Midjourney, Stable Diffusion', 'Photoshop', 'Word', 'Tuỳ ý'], 0, 'AI art bùng nổ từ 2022.'),
    Q('VR/AR trong nghệ thuật?', ['Trải nghiệm nghệ thuật ảo, immersive', 'Chỉ game', 'Không liên quan', 'Tuỳ ý'], 0, 'VR/AR mở rộng không gian nghệ thuật.'),
    Q('Generative art?', ['Nghệ thuật do thuật toán tạo', 'Vẽ tay', 'Chỉ AI', 'Tuỳ ý'], 0, 'Generative art có từ trước AI, dùng thuật toán.'),
    Q('Vấn đề đạo đức AI art?', ['Bản quyền dữ liệu huấn luyện, mất việc của họa sĩ', 'Không có', 'Tuỳ ý', 'Vô bổ'], 0, 'AI art có nhiều vấn đề đạo đức.'),
  ]),

  M(32, 'Định hướng nghề nghệ thuật', [
    Q('Nghề liên quan âm nhạc?', ['Ca sĩ, nhà soạn nhạc, sound engineer, music teacher', 'Chỉ ca sĩ', 'Chỉ giáo viên', 'Tuỳ ý'], 0, 'Nhiều nghề trong ngành âm nhạc.'),
    Q('Nghề liên quan mỹ thuật?', ['Họa sĩ, designer, kiến trúc sư, nhiếp ảnh, animator', 'Chỉ họa sĩ', 'Tuỳ ý', 'Không có'], 0, 'Mỹ thuật có nhiều nghề ứng dụng.'),
    Q('Trường ĐH nghệ thuật ở VN?', ['ĐH Mỹ thuật VN, ĐH Mỹ thuật TP.HCM, ĐH Sân khấu - Điện ảnh', 'Chỉ ĐHQG', 'Không có', 'Tuỳ ý'], 0, 'Có nhiều trường nghệ thuật uy tín.'),
    Q('Học nghệ thuật cần?', ['Năng khiếu + đam mê + kiên trì luyện tập', 'Chỉ năng khiếu', 'Chỉ tiền', 'Tuỳ ý'], 0, 'Nghệ thuật cần đa yếu tố.'),
  ]),

  M(33, 'Ôn tập HK2 — Mỹ thuật', [
    Q('Ấn tượng đặc trưng?', ['Vẽ ngoài trời, bắt khoảnh khắc ánh sáng', 'Trong xưởng', 'Đen-trắng', 'Tuỳ ý'], 0, 'Plein air + bắt sáng.'),
    Q('Cubism do?', ['Picasso + Braque', 'Da Vinci', 'Monet', 'Tuỳ ý'], 0, 'Picasso + Braque sáng lập.'),
    Q('Mỹ thuật Đông Dương 1925?', ['Trường CĐ Mỹ thuật Đông Dương, Hà Nội', '2000', '1900', 'Tuỳ ý'], 0, 'Đặt nền móng mỹ thuật hiện đại VN.'),
    Q('Bùi Xuân Phái nổi tiếng?', ['Phố cổ Hà Nội', 'Chân dung', 'Trừu tượng', 'Tuỳ ý'], 0, '"Phố Phái" biểu tượng.'),
    Q('Nghệ thuật đương đại đặc trưng?', ['Đa phương tiện, khái niệm trên kỹ thuật', 'Cổ điển', 'Tuỳ ý', 'Không có'], 0, 'Đương đại đa dạng phương tiện.'),
  ]),

  M(34, 'Tổng kết — Âm nhạc + Mỹ thuật toàn cấp', [
    Q('Hợp âm 7 dùng nhiều ở?', ['Jazz, blues, pop', 'Cổ điển', 'Tuỳ ý', 'EDM'], 0, 'Chord 7 đặc trưng jazz.'),
    Q('Pop đặc trưng?', ['Cấu trúc verse-chorus, hook bắt tai', 'Phức tạp', 'Tuỳ ý', 'Không có'], 0, 'Pop có cấu trúc rõ ràng.'),
    Q('Renaissance đại danh hoạ?', ['Leonardo, Michelangelo, Raphael', 'Picasso', 'Van Gogh', 'Tuỳ ý'], 0, 'Bộ ba Phục Hưng đỉnh cao.'),
    Q('Pop Art biểu tượng?', ['Andy Warhol', 'Da Vinci', 'Picasso', 'Tuỳ ý'], 0, 'Warhol là biểu tượng Pop Art.'),
    Q('Nghệ thuật Việt đặc sắc?', ['Sơn mài, lụa, khắc gỗ', 'Sơn dầu', 'Tuỳ ý', 'Không có'], 0, 'Chất liệu đặc sắc của VN.'),
  ]),

  M(35, 'Sáng tạo cuối năm — Dự án cá nhân', [
    Q('Dự án nghệ thuật cá nhân nên?', ['Chọn chủ đề yêu thích, kết hợp âm nhạc + mỹ thuật + công nghệ', 'Bắt chước', 'Tuỳ ý', 'Không cần ý tưởng'], 0, 'Dự án cá nhân thể hiện cá tính.'),
    Q('Trình bày dự án?', ['Chuẩn bị + thuyết minh ý tưởng + tác phẩm', 'Vô tổ chức', 'Tuỳ ý', 'Không cần'], 0, 'Trình bày rõ ràng + thuyết minh.'),
    Q('Đánh giá nghệ thuật dựa?', ['Sáng tạo, kỹ thuật, ý nghĩa, biểu cảm', 'Chỉ đẹp', 'Tuỳ ý', 'May rủi'], 0, 'Nhiều tiêu chí đánh giá nghệ thuật.'),
    Q('Nghệ thuật suốt đời?', ['Có thể theo đuổi sau lớp 9 dù không học chuyên', 'Phải dừng', 'Chỉ chuyên', 'Tuỳ ý'], 0, 'Nghệ thuật làm phong phú cuộc sống suốt đời.'),
    Q('Giá trị của môn nghệ thuật?', ['Phát triển cảm xúc, sáng tạo, thẩm mỹ', 'Vô bổ', 'Chỉ giải trí', 'Tuỳ ý'], 0, 'Nghệ thuật nuôi dưỡng tâm hồn.'),
  ]),
];

export const S9NT_SCENARIOS = indexBy(S9NT_WEEKS);
