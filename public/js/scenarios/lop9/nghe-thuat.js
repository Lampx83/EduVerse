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
    Q('7 nốt nhạc cơ bản?', ['1-2-3-4', 'Đô-Rê-Mi-Pha-Son-La-Si', 'A-B-C-D', 'Đồ-Rế-Mí-Phà-Són-Lả-Sí (sai dấu thanh)'], 1, 'Hệ Solfège (Do-Re-Mi-Fa-Sol-La-Ti).'),
    Q('Khoảng cách bán cung giữa?', ['Đô–Rê (đây là 1 cung nguyên)', 'Rê–Mi (cũng là 1 cung nguyên)', 'Pha–Son', 'Mi–Pha và Si–Đô'], 3, 'Trong gam trưởng tự nhiên, bán cung ở vị trí 3-4 và 7-8.'),
    Q('Trường độ là?', ['Độ mạnh', 'Độ dài âm thanh', 'Âm sắc', 'Độ cao'], 1, 'Trường độ = độ dài.'),
    Q('Nốt tròn (whole note) bằng?', ['2 nốt đen', '4 nốt đen', '1 nốt đen', '8 nốt đen'], 1, 'Nốt tròn = 4 phách = 4 đen.'),
  ]),

  M(2, 'Hợp âm — Khái niệm và ký hiệu', [
    Q('Hợp âm là?', ['Không có khái niệm', '3 nốt trở lên vang đồng thời', '1 nốt', '2 nốt'], 1, 'Hợp âm tối thiểu 3 nốt (triad).'),
    Q('Hợp âm Đô trưởng (C) gồm?', ['Đô – Pha – La', 'Rê – Pha – La', 'Đô – Rê – Mi', 'Đô – Mi – Son'], 3, 'C major: C-E-G.'),
    Q('Hợp âm La thứ (Am) gồm?', ['La – Đô# – Mi', 'La – Pha – Đô', 'La – Rê – Mi', 'La – Đô – Mi'], 3, 'A minor: A-C-E.'),
    Q('Ký hiệu C nghĩa là?', ['Đô thứ', 'Đô trưởng', 'Đô thăng (C#)', 'Rê trưởng'], 1, 'C = Đô trưởng theo ký hiệu Anh – Mỹ.'),
    Q('Ký hiệu Cm nghĩa là?', ['Đô thứ', 'Đô giáng (Db)', 'Đô trưởng', 'Rê thứ'], 0, 'Cm = Đô minor.'),
  ]),

  M(3, 'Hợp âm 7 (chord 7) — Khái niệm', [
    Q('Hợp âm 7 là?', ['Hợp âm 3 + thêm âm 7 (4 nốt)', '7 quãng', '7 hợp âm', 'Có 7 nốt'], 0, 'Hợp âm 7 thêm âm bậc 7 vào hợp âm 3.'),
    Q('C7 (dominant 7) gồm?', ['C – Eb – G – B', 'C – E – G – B', 'C – E – G – Bb', 'C – E – G# – B'], 2, 'C7 dominant: C-E-G-Bb.'),
    Q('Cmaj7 gồm?', ['C – E – G – Bb', 'C – E – G – B', 'C – Eb – G – B', 'C – E – G – C'], 1, 'Cmaj7 (major 7): C-E-G-B.'),
    Q('Cm7 gồm?', ['C – Eb – G – Bb', 'C – Eb – G – B', 'C – E – G – B', 'C – E – G – Bb'], 0, 'Cm7 (minor 7): C-Eb-G-Bb.'),
    Q('Hợp âm 7 dùng nhiều trong?', ['Chỉ rock', 'Chỉ classical', 'Chỉ EDM', 'Jazz, blues, pop'], 3, 'Chord 7 đặc trưng jazz/blues.'),
  ]),

  M(4, 'Dịch giọng (transpose)', [
    Q('Dịch giọng là?', ['Dịch ngôn ngữ', 'Đổi nhịp', 'Đổi nốt', 'Chuyển bản nhạc sang giọng khác để dễ hát/đàn'], 3, 'Transpose giúp phù hợp giọng hát hoặc nhạc cụ.'),
    Q('Dịch giọng từ C lên D là?', ['1/2 cung', 'Tăng tất cả nốt lên 1 cung (whole step)', '3 cung', '2 cung'], 1, 'C → D là tăng 1 cung.'),
    Q('Dấu hoá khi dịch giọng?', ['Mất hết', 'Không thay đổi', 'Có thể thay đổi (thêm/bớt thăng giáng)', 'Tăng gấp đôi số dấu hoá'], 2, 'Dịch giọng có thể thay đổi bộ dấu hoá.'),
    Q('Khi dịch giọng, cao độ tương đối?', ['Đảo ngược thứ tự nốt', 'Giữ nguyên (giai điệu nghe vẫn vậy)', 'Mất giai điệu gốc, phải viết lại', 'Thay đổi'], 1, 'Bản nhạc dịch giọng vẫn nghe giống nhau, chỉ cao hơn/thấp hơn.'),
  ]),

  M(5, 'Vòng hợp âm cơ bản (chord progression)', [
    Q('Vòng hợp âm phổ biến trong pop?', ['V – I (chỉ là cadence kết, không phải vòng)', 'I – II – III', 'I – I – I', 'I – V – vi – IV (C – G – Am – F)'], 3, '"Pop progression" rất phổ biến.'),
    Q('Vòng 12-bar blues?', ['I-IV-V trong 4 ô nhịp', 'I-I-I-I / IV-IV-I-I / V-IV-I-I', 'I-V-I lặp lại 12 lần', 'I-II-III'], 1, '12-bar blues là khuôn mẫu kinh điển.'),
    Q('Vai trò hợp âm chủ (tonic)?', ['Tạo nghi vấn, chờ giải quyết', 'Lưng chừng', 'Tạo cảm giác ổn định, kết thúc', 'Căng thẳng'], 2, 'Hợp âm I (tonic) tạo ổn định.'),
    Q('Vai trò hợp âm bậc V (dominant)?', ['Ổn định', 'Tạo căng thẳng, dẫn về tonic', 'Êm dịu, dùng làm hợp âm mở đầu', 'Trung tính, không có chức năng rõ'], 1, 'V → I là cadence kinh điển.'),
  ]),

  M(6, 'Classical (Nhạc cổ điển)', [
    Q('Nhạc cổ điển có nguồn gốc?', ['Phương Tây, từ thời Trung Cổ đến nay', 'Châu Mỹ', 'Phương Đông', 'Châu Phi'], 0, 'Cổ điển phát triển từ truyền thống phương Tây.'),
    Q('Các thời kỳ chính?', ['Chỉ Trung cổ và Phục Hưng', 'Baroque, Classical, Romantic, hiện đại', 'Chỉ 1 thời kỳ', 'Cổ + Mới'], 1, 'Cổ điển trải qua nhiều thời kỳ.'),
    Q('Nhà soạn nhạc Baroque nổi tiếng?', ['Beethoven', 'Chopin', 'Mozart', 'J.S. Bach, Handel, Vivaldi'], 3, 'Bach, Handel, Vivaldi là Baroque.'),
    Q('Mozart thuộc thời kỳ?', ['Baroque', 'Classical (Cổ điển)', 'Romantic', 'Hiện đại'], 1, 'Mozart (1756–1791) là Classical.'),
    Q('Đặc trưng nhạc cổ điển?', ['Hoàn toàn ngẫu hứng, không quy luật', 'Đơn giản', 'Cấu trúc rõ, hoà âm phức, dàn nhạc giao hưởng', 'Phức tạp loạn'], 2, 'Cổ điển có cấu trúc và quy luật rõ ràng.'),
  ]),

  M(7, 'Jazz', [
    Q('Jazz có nguồn gốc?', ['Châu Âu', 'New Orleans (Mỹ), đầu thế kỷ 20', 'Châu Á', 'Cổ điển'], 1, 'Jazz ra đời từ cộng đồng người Mỹ gốc Phi tại New Orleans.'),
    Q('Đặc trưng nhạc Jazz?', ['Cứng nhắc', 'Cấu trúc verse-chorus chặt chẽ', 'Improvisation (ngẫu hứng), swing, hoà âm phức', 'Đơn giản'], 2, 'Improvisation là linh hồn của jazz.'),
    Q('Phong cách jazz phổ biến?', ['Chỉ có swing và cool jazz', 'Bebop, swing, cool jazz, fusion', 'Trance, House, Dubstep', 'Hard rock, metal, punk'], 1, 'Jazz có nhiều phong cách phụ.'),
    Q('Nhạc sĩ jazz huyền thoại?', ['Louis Armstrong, Miles Davis, John Coltrane', 'Beatles', 'Mozart', 'Beethoven'], 0, 'Những tên tuổi lớn của jazz.'),
    Q('Nhạc cụ jazz điển hình?', ['Guitar điện và trống điện tử', 'Chỉ violin', 'Chỉ piano', 'Saxophone, piano, double bass, drums, trumpet'], 3, 'Saxophone là biểu tượng jazz.'),
  ]),

  M(8, 'Pop (Nhạc đại chúng)', [
    Q('Pop viết tắt của?', ['Popcorn', 'Popular music — nhạc đại chúng', 'Pop-up', 'Power music — nhạc mạnh'], 1, 'Pop = popular = đại chúng.'),
    Q('Đặc trưng pop?', ['Ngẫu hứng tự do, không cấu trúc', 'Cấu trúc câu nhạc rõ, dễ nhớ, lặp lại hook', 'Không có cấu trúc', 'Phức tạp'], 1, 'Pop có verse-chorus-bridge, hook bắt tai.'),
    Q('Thời kỳ vàng pop?', ['Từ 2020', 'Cổ đại', 'Từ 1960s với The Beatles', 'Từ 1800'], 2, 'Pop hiện đại bùng nổ từ 1960s.'),
    Q('Cấu trúc pop điển hình?', ['Verse only', 'Verse – Chorus – Verse – Chorus – Bridge – Chorus', 'Chorus only', 'Intro – Solo – Intro – Solo'], 1, 'Cấu trúc V-C-V-C-B-C phổ biến.'),
    Q('Ca sĩ pop hiện đại?', ['Mozart', 'Michael Jackson, Madonna, Taylor Swift, BTS', 'Vivaldi', 'Beethoven'], 1, 'Pop có nhiều ngôi sao đương đại.'),
  ]),

  M(9, 'Rock', [
    Q('Rock and Roll xuất hiện?', ['1900', '2000s', '1950s ở Mỹ', '1800s'], 2, 'Rock and Roll bùng nổ thập niên 50.'),
    Q('Nhạc cụ rock cơ bản?', ['Guitar điện, bass, trống, vocal', 'Piano cổ điển', 'Violin', 'Đàn tranh, đàn bầu, sáo trúc'], 0, 'Bộ "rock band" cơ bản.'),
    Q('Subgenre của rock?', ['Bebop, cool jazz, fusion', 'Chỉ rock', 'Chỉ có classic rock duy nhất', 'Hard rock, metal, punk, alternative, indie'], 3, 'Rock có rất nhiều nhánh.'),
    Q('Ban nhạc rock huyền thoại?', ['The Beatles, Led Zeppelin, Queen, Nirvana', 'ABBA, Boney M, Modern Talking', 'Mozart', 'BTS, Blackpink, Twice'], 0, 'Những ban nhạc rock kinh điển.'),
    Q('Đặc trưng rock?', ['Âm thanh mạnh, nhịp 4/4, năng lượng cao', 'Nhịp 3/4 chậm, giai điệu nhẹ', 'Êm dịu', 'Acoustic, không khuếch đại'], 0, 'Rock thường mạnh mẽ, năng lượng.'),
  ]),

  M(10, 'Hip-hop / Rap', [
    Q('Hip-hop ra đời?', ['2000s', '1900', '1950s', '1970s ở Bronx, New York'], 3, 'Hip-hop khởi nguồn từ Bronx thập niên 70.'),
    Q('4 yếu tố của hip-hop?', ['MCing (rap), DJing, breakdance, graffiti', '3 yếu tố', '5 yếu tố', 'Chỉ rap'], 0, '4 trụ cột hip-hop.'),
    Q('Rap là?', ['Đọc thường', 'Đọc lời theo nhịp + vần', 'Hát có giai điệu cao thấp rõ', 'Đọc nhanh không cần vần điệu'], 1, 'Rap = rhythmic + poetry.'),
    Q('Sample là?', ['Trích đoạn ngắn từ bản nhạc khác', 'Hát lại toàn bộ bài gốc', 'Hát lại', 'Phối lại'], 0, 'Sampling là kỹ thuật đặc trưng hip-hop.'),
    Q('Rap Việt nổi tiếng?', ['Idol Việt Nam', 'Vietnam Got Talent', 'Rap Việt, King of Rap', 'The Voice'], 2, 'Rap Việt là show làm phổ biến rap tại VN.'),
  ]),

  M(11, 'EDM (Electronic Dance Music)', [
    Q('EDM viết tắt?', ['Electronic Dance Music', 'Extended Dance Mix', 'Easy DJ Mix', 'Electric Drum'], 0, 'EDM = Electronic Dance Music.'),
    Q('Đặc trưng EDM?', ['Acoustic', 'Tạo bằng máy tính/synth, nhịp mạnh để nhảy', 'Chỉ dùng nhạc cụ acoustic mộc', 'Cổ điển'], 1, 'EDM dùng nhiều thiết bị điện tử.'),
    Q('Subgenre EDM?', ['2 loại', 'Chỉ House', 'Chỉ Trance và Techno', 'House, Techno, Trance, Dubstep, Future Bass'], 3, 'EDM có rất nhiều subgenre.'),
    Q('DJ trong EDM?', ['Người viết lời', 'Người phối + chơi nhạc trực tiếp', 'Người chỉ huy dàn nhạc giao hưởng', 'Người diễn'], 1, 'DJ = Disc Jockey, vai trò trung tâm trong EDM.'),
    Q('Festival EDM nổi tiếng?', ['Tomorrowland, EDC, Ultra', 'Liên hoan phim Cannes', 'Berlinale', 'Cannes'], 0, 'Các festival EDM lớn thế giới.'),
  ]),

  M(12, 'Ôn tập + Thực hành âm nhạc', [
    Q('Hợp âm 7 thêm âm?', ['Âm bậc 3', 'Âm bậc 5', 'Âm bậc 2 vào hợp âm 3', 'Âm bậc 7 vào hợp âm 3'], 3, 'Chord 7 = triad + 7th.'),
    Q('Vòng hợp âm pop kinh điển?', ['I – V – vi – IV', 'V – I (chỉ cadence kết)', 'ii – V – I (kiểu jazz)', 'I – II – III'], 0, 'Pop progression rất phổ biến.'),
    Q('Jazz đặc trưng?', ['Cấu trúc verse-chorus rõ ràng', 'Improvisation + swing', 'Cứng nhắc', 'Đơn giản'], 1, 'Improvisation linh hồn jazz.'),
    Q('EDM dùng nhiều?', ['Cổ điển', 'Dàn nhạc giao hưởng acoustic', 'Máy tính + synthesizer', 'Acoustic'], 2, 'EDM là nhạc điện tử.'),
    Q('Dịch giọng giúp?', ['Đổi giai điệu cho mới lạ hơn', 'Bản nhạc dễ hát/đàn hơn cho giọng/instrument cụ thể', 'Đổi giai điệu', 'Đổi nhịp'], 1, 'Transpose giữ giai điệu, đổi cao độ tuyệt đối.'),
  ]),

  M(13, 'Nhạc Việt Nam — Truyền thống và đương đại', [
    Q('Nhạc cụ truyền thống VN?', ['Guitar acoustic, harmonica', 'Đàn tranh, đàn bầu, sáo, đàn nguyệt, đàn nhị', 'Guitar điện', 'Saxophone, trumpet, double bass'], 1, 'Việt Nam có kho tàng nhạc cụ truyền thống phong phú.'),
    Q('Nhã nhạc cung đình Huế?', ['Chưa có', 'Di sản UNESCO 2003', 'Di sản 2020', 'Di sản vật thể UNESCO 1993'], 1, 'Nhã nhạc cung đình Huế là di sản phi vật thể UNESCO.'),
    Q('Ca trù?', ['Bình thường', 'Di sản UNESCO 2009, cần bảo vệ khẩn cấp', 'Chưa có', 'Di sản vật thể UNESCO 2009'], 1, 'Ca trù được UNESCO ghi danh năm 2009.'),
    Q('V-Pop hiện đại?', ['Quan họ Bắc Ninh', 'Cải lương', 'Sơn Tùng M-TP, Mỹ Tâm, Hà Anh Tuấn, ca sĩ thế hệ Z', 'Cải lương Nam Bộ'], 2, 'V-Pop đương đại có nhiều nghệ sĩ nổi tiếng.'),
  ]),

  M(14, 'Kiểm tra giữa HK1', [
    Q('Cmaj7 gồm các nốt?', ['C-E-G-B', 'C-Eb-G-B', 'C-E-G-A', 'C-E-G-Bb'], 0, 'Cmaj7 = C-E-G-B.'),
    Q('Vòng hợp âm pop?', ['I-IV-V-I (cadence đầy đủ)', 'I-V-vi-IV', 'I-IV-V', 'I-II-III'], 1, 'Pop progression: I-V-vi-IV.'),
    Q('Jazz nguồn gốc?', ['London', 'New York, Mỹ', 'New Orleans, Mỹ', 'Vienna'], 2, 'Jazz từ New Orleans.'),
    Q('Hip-hop 4 yếu tố?', ['3 yếu tố', '5 yếu tố', 'Chỉ rap', 'MC, DJ, breakdance, graffiti'], 3, '4 trụ cột hip-hop.'),
    Q('EDM đặc trưng?', ['Dàn nhạc giao hưởng cổ điển', 'Acoustic', 'Nhạc điện tử, nhịp mạnh', 'Cổ điển'], 2, 'EDM dùng synth + máy tính.'),
  ]),

  // ───── HK1 cuối + chuyển sang Mỹ thuật ─────
  M(15, 'Mỹ thuật cổ điển — Cổ Hy Lạp – La Mã', [
    Q('Mỹ thuật cổ Hy Lạp đặc trưng?', ['Trừu tượng', 'Phối cảnh đa điểm, méo mó', 'Tỉ lệ hài hoà, đề cao vẻ đẹp con người', 'Hỗn loạn'], 2, 'Hy Lạp cổ đề cao tỉ lệ + vẻ đẹp con người.'),
    Q('Tỉ lệ vàng (golden ratio)?', ['2,72', '1,414', '≈ 1,618', '3,14'], 2, 'Tỉ lệ vàng φ ≈ 1,618 dùng nhiều trong nghệ thuật.'),
    Q('Kiến trúc Hy Lạp gồm 3 thức cột?', ['Tuscan, Composite, Solomonic', 'Doric, Ionic, Corinthian', 'Baroque', 'Gothic'], 1, '3 thức cột Hy Lạp cổ.'),
    Q('Đền Parthenon ở?', ['Roma, Ý', 'Paris, Pháp', 'Athens, Hy Lạp', 'Cairo, Ai Cập'], 2, 'Parthenon nổi tiếng tại Acropolis, Athens.'),
    Q('Mỹ thuật La Mã thừa kế?', ['Phong cách Ai Cập cổ + Mesopotamia', 'Tự nguyên', 'Hy Lạp + thêm kiến trúc vòm + bê tông', 'Khác hoàn toàn'], 2, 'La Mã kế thừa Hy Lạp + sáng tạo về kỹ thuật.'),
  ]),

  M(16, 'Mỹ thuật Phục Hưng (Renaissance)', [
    Q('Phục Hưng nghĩa là?', ['Cải cách', 'Đột phá', 'Hồi sinh — quay về giá trị cổ Hy-La', 'Cách mạng'], 2, 'Renaissance = hồi sinh.'),
    Q('Thời kỳ Phục Hưng?', ['Thế kỷ 5', 'Thế kỷ 8–10, bắt đầu ở Pháp', 'Thế kỷ 19', 'Thế kỷ 14–17, bắt đầu ở Ý'], 3, 'Phục Hưng từ thế kỷ 14, đỉnh ở thế kỷ 15-16.'),
    Q('Hoạ sĩ Phục Hưng nổi tiếng?', ['Leonardo da Vinci, Michelangelo, Raphael', 'Van Gogh', 'Caravaggio', 'Picasso'], 0, '3 đại danh hoạ Phục Hưng cao trào.'),
    Q('Bức "Mona Lisa" của ai?', ['Van Gogh', 'Michelangelo', 'Raphael', 'Leonardo da Vinci'], 3, 'Mona Lisa do Da Vinci vẽ, hiện tại Louvre.'),
    Q('Đặc trưng Phục Hưng?', ['Phẳng, không có chiều sâu', 'Trừu tượng', 'Phối cảnh tuyến tính, ánh sáng, giải phẫu', 'Phong cách Gothic kéo dài'], 2, 'Phục Hưng phát triển kỹ thuật vẽ hiện thực.'),
  ]),

  M(17, 'Mỹ thuật Baroque + Rococo', [
    Q('Baroque đặc trưng?', ['Đơn giản', 'Hoành tráng, đối lập sáng-tối mạnh (chiaroscuro)', 'Phẳng, ít tương phản sáng tối', 'Nhẹ nhàng pastel như Rococo'], 1, 'Baroque kịch tính, sang trọng.'),
    Q('Hoạ sĩ Baroque nổi tiếng?', ['Van Gogh', 'Caravaggio, Rembrandt, Vermeer', 'Leonardo da Vinci', 'Picasso'], 1, '3 đại biểu Baroque.'),
    Q('Rococo đặc trưng?', ['Nhẹ nhàng, trang trí cầu kỳ, màu pastel', 'Tối, nặng, kịch tính như Baroque', 'Đậm tương phản chiaroscuro', 'Hoành tráng'], 0, 'Rococo nhẹ nhàng, vui tươi.'),
    Q('Sự khác Baroque vs Rococo?', ['Không khác', 'Cả hai cùng dùng màu pastel', 'Cả hai cùng nhấn chiaroscuro', 'Baroque hoành tráng kịch tính; Rococo nhẹ nhàng trang trí'], 3, 'Rococo là phong cách tiếp nối nhưng nhẹ hơn.'),
  ]),

  M(18, 'Ôn tập học kì I — Âm nhạc + Mỹ thuật', [
    Q('Hợp âm 7 dùng nhiều ở?', ['Chỉ dùng trong nhạc thính phòng', 'Chỉ rock', 'Jazz, blues, pop', 'Chỉ cổ điển'], 2, 'Chord 7 đặc trưng jazz/blues.'),
    Q('Renaissance phát triển?', ['Trừu tượng', 'Trừu tượng hình học', 'Phối cảnh, giải phẫu, ánh sáng', 'Vẽ phẳng kiểu biểu tượng'], 2, 'Phục Hưng cách mạng kỹ thuật vẽ.'),
    Q('Mona Lisa của?', ['Raphael', 'Leonardo da Vinci', 'Michelangelo', 'Van Gogh'], 1, 'Da Vinci vẽ Mona Lisa.'),
    Q('Baroque đặc trưng?', ['Nhẹ nhàng', 'Phẳng, đơn giản như Trung cổ', 'Hoành tráng, chiaroscuro', 'Tươi sáng pastel như Rococo'], 2, 'Baroque kịch tính.'),
    Q('Hip-hop ra đời ở?', ['Los Angeles, Mỹ', 'Bronx, New York', 'Chicago, Mỹ', 'London'], 1, 'Hip-hop từ Bronx.'),
  ]),

  // ───── HK2 — Mỹ thuật + tổng hợp ─────
  M(19, 'Mỹ thuật Ấn tượng (Impressionism)', [
    Q('Ấn tượng xuất hiện?', ['Hà Lan', 'Pháp, cuối thế kỷ 19', 'Ý, đầu thế kỷ 19', 'Đức, đầu thế kỷ 20'], 1, 'Impressionism ở Pháp, 1860s-1880s.'),
    Q('Đặc trưng Ấn tượng?', ['Vẽ trong xưởng dưới ánh đèn dầu', 'Trong xưởng', 'Vẽ ngoài trời, bắt khoảnh khắc ánh sáng + màu', 'Đen-trắng'], 2, 'Plein air + bắt ánh sáng.'),
    Q('Hoạ sĩ Ấn tượng?', ['Michelangelo', 'Picasso', 'Da Vinci', 'Monet, Renoir, Degas'], 3, 'Các hoạ sĩ Ấn tượng nổi tiếng.'),
    Q('Bức "Impression, Sunrise" của?', ['Renoir', 'Manet', 'Monet', 'Degas'], 2, 'Monet vẽ "Impression, Sunrise" — gốc của tên trường phái.'),
    Q('Sau Ấn tượng (Post-Impressionism)?', ['Van Gogh, Cézanne, Gauguin', 'Picasso', 'Da Vinci', 'Renoir, Manet, Degas'], 0, 'Hậu Ấn tượng phát triển từ Ấn tượng.'),
  ]),

  M(20, 'Mỹ thuật hiện đại — Lập thể (Cubism)', [
    Q('Cubism do ai sáng lập?', ['Picasso và Braque', 'Van Gogh', 'Claude Monet', 'Da Vinci'], 0, 'Picasso + Braque sáng lập Cubism (1907).'),
    Q('Đặc trưng Cubism?', ['Bắt khoảnh khắc ánh sáng ngoài trời', 'Hiện thực', 'Vẽ phẳng theo phong cách Ai Cập cổ', 'Phân mảnh, nhìn nhiều góc cùng lúc'], 3, 'Cubism vỡ vụn hình thể + ghép nhiều góc nhìn.'),
    Q('Bức "Demoiselles d\'Avignon" của?', ['Braque', 'Picasso', 'Van Gogh', 'Cézanne'], 1, 'Picasso, 1907 — khởi đầu Cubism.'),
    Q('Cubism ảnh hưởng đến?', ['Chỉ tranh vẽ', 'Mỹ thuật + thiết kế + kiến trúc hiện đại', 'Chỉ điêu khắc đương đại', 'Chỉ nhạc'], 1, 'Cubism mở đường cho nghệ thuật hiện đại.'),
  ]),

  M(21, 'Mỹ thuật hiện đại — Trừu tượng, Siêu thực', [
    Q('Nghệ thuật trừu tượng (Abstract)?', ['Không vẽ hình thực, dùng hình – màu thể hiện cảm xúc/ý tưởng', 'Sao chép chính xác như nhiếp ảnh', 'Hiện thực', 'Chân dung'], 0, 'Trừu tượng từ chối vẽ hình thực.'),
    Q('Kandinsky nổi tiếng với?', ['Tranh phong cảnh hiện thực', 'Hiện thực', 'Cổ điển', 'Khai sinh trừu tượng'], 3, 'Kandinsky tiên phong abstract.'),
    Q('Siêu thực (Surrealism) đặc trưng?', ['Hiện thực', 'Vẽ chân dung tả thực chính xác', 'Phong cảnh ngoài trời ấn tượng', 'Vẽ thế giới mơ, phi lý, tiềm thức'], 3, 'Surrealism khám phá tiềm thức.'),
    Q('Hoạ sĩ Siêu thực?', ['Da Vinci', 'Claude Monet', 'Salvador Dalí, René Magritte', 'Picasso'], 2, 'Dalí + Magritte là Surrealist nổi tiếng.'),
    Q('Bức "Sự kiên trì của ký ức" (đồng hồ chảy) của?', ['Salvador Dalí', 'Picasso', 'Magritte', 'Van Gogh'], 0, 'Dalí, 1931 — biểu tượng Surrealism.'),
  ]),

  M(22, 'Pop Art', [
    Q('Pop Art xuất hiện?', ['1950s-1960s ở Anh, Mỹ', '1800s', '1990', '2000s'], 0, 'Pop Art bùng nổ thập niên 60.'),
    Q('Đặc trưng Pop Art?', ['Trừu tượng', 'Lấy cảm hứng từ văn hoá đại chúng, quảng cáo, truyện tranh', 'Cổ điển', 'Vẽ thế giới trong mơ và tiềm thức'], 1, 'Pop Art = pop culture art.'),
    Q('Andy Warhol nổi tiếng với?', ['Tranh phong cảnh thiên nhiên Mỹ', 'Tranh lon súp Campbell, chân dung Marilyn Monroe', 'Trừu tượng', 'Mona Lisa'], 1, 'Warhol là biểu tượng Pop Art.'),
    Q('Roy Lichtenstein nổi tiếng?', ['Sắp đặt vật thể tìm thấy', 'Cổ điển', 'Vẽ phong cách truyện tranh + dots', 'Trừu tượng'], 2, 'Lichtenstein đặc trưng phong cách comic.'),
  ]),

  M(23, 'Mỹ thuật Việt Nam — Trường Cao đẳng Mỹ thuật Đông Dương', [
    Q('Trường CĐ Mỹ thuật Đông Dương thành lập?', ['1945', '1900', '1925, Hà Nội', '1954'], 2, 'Thành lập 1925, đặt nền móng mỹ thuật hiện đại VN.'),
    Q('Bộ tứ "Trí – Lân – Vân – Cẩn"?', ['Tô Ngọc Vân, Nguyễn Sáng, Bùi Xuân Phái, Dương Bích Liên', 'Nguyễn Phan Chánh, Lê Phổ, Vũ Cao Đàm, Mai Trung Thứ', 'Tên thường', 'Nguyễn Gia Trí, Nguyễn Tường Lân, Tô Ngọc Vân, Trần Văn Cẩn'], 3, '4 danh hoạ Đông Dương.'),
    Q('Bộ tứ "Nghiêm – Liên – Sáng – Phái"?', ['Nguyễn Gia Trí, Nguyễn Tường Lân, Tô Ngọc Vân, Trần Văn Cẩn', 'Lê Phổ, Mai Trung Thứ, Vũ Cao Đàm, Lê Thị Lựu', 'Nguyễn Sáng, Bùi Xuân Phái, Dương Bích Liên, Nguyễn Tư Nghiêm', 'Tên thường'], 2, '4 danh hoạ thế hệ sau.'),
    Q('Bùi Xuân Phái nổi tiếng với?', ['Phong cảnh', 'Tranh sơn mài đề tài chiến tranh', 'Chân dung', 'Tranh phố cổ Hà Nội'], 3, '"Phố Phái" là biểu tượng.'),
    Q('Tô Ngọc Vân nổi tiếng?', ['Phố cổ', 'Tranh lụa làng quê Bắc Bộ', 'Trừu tượng', 'Tranh sơn dầu "Thiếu nữ bên hoa huệ"'], 3, '"Thiếu nữ bên hoa huệ" là tuyệt tác Đông Dương.'),
  ]),

  M(24, 'Mỹ thuật Việt Nam — Đổi mới (1986-nay)', [
    Q('Mỹ thuật VN đổi mới sau 1986?', ['Cổ điển', 'Chỉ tập trung tranh tuyên truyền', 'Khép kín', 'Đa dạng phong cách, tiếp cận quốc tế'], 3, 'Đổi mới mở cửa nghệ thuật VN.'),
    Q('Họa sĩ đương đại VN nổi tiếng?', ['Tô Ngọc Vân, Trần Văn Cẩn (thời Đông Dương)', 'Lê Phổ, Trần Lưu Hậu, Phạm Lực, Đinh Quân', 'Picasso', 'Da Vinci'], 1, 'Nhiều họa sĩ đương đại VN nổi tiếng.'),
    Q('Chất liệu mỹ thuật truyền thống VN?', ['Acrylic, màu nước, chì than', 'Sơn mài, lụa, khắc gỗ', 'Sơn dầu thuần', 'Chỉ có sơn dầu nhập từ Pháp'], 1, 'Sơn mài + lụa là chất liệu đặc sắc VN.'),
    Q('Nghệ thuật đương đại VN có?', ['Chỉ tranh', 'Chỉ tranh sơn dầu khổ lớn', 'Sắp đặt (installation), trình diễn (performance), video art', 'Chỉ điêu khắc'], 2, 'Nghệ thuật đương đại VN đa dạng.'),
  ]),

  M(25, 'Nghệ thuật đương đại — Khái niệm', [
    Q('Nghệ thuật đương đại (contemporary art)?', ['Nghệ thuật từ 1960s đến nay', 'Cổ điển', 'Nghệ thuật từ thời Phục Hưng', 'Hiện đại đầu thế kỷ'], 0, 'Contemporary art = từ ~1960 đến nay.'),
    Q('Đặc trưng đương đại?', ['Chỉ tranh', 'Chỉ tranh sơn dầu truyền thống', 'Chỉ điêu khắc', 'Đa dạng phương tiện, khái niệm trên kỹ thuật, phản ánh xã hội'], 3, 'Đương đại đa phương tiện.'),
    Q('Conceptual art?', ['Ý tưởng quan trọng hơn vật phẩm cụ thể', 'Kỹ thuật vẽ tả thực quan trọng nhất', 'Vẽ đẹp', 'Hiện thực'], 0, 'Conceptual art coi ý tưởng là chính.'),
    Q('Installation art?', ['Tranh treo tường khổ lớn', 'Sắp đặt vật thể trong không gian, người xem trải nghiệm', 'Tranh treo', 'Điêu khắc'], 1, 'Installation tạo trải nghiệm không gian.'),
    Q('Performance art?', ['Hát trên sân khấu opera', 'Diễn xuất theo kịch bản viết sẵn', 'Nghệ sĩ dùng cơ thể thực hiện một hành vi nghệ thuật', 'Diễn kịch'], 2, 'Performance art biểu diễn nghệ thuật bằng cơ thể.'),
  ]),

  M(26, 'Vẽ tranh thực hành — Phong cảnh + tĩnh vật', [
    Q('Bố cục cơ bản?', ['Đặt đối tượng ngay góc trái dưới', 'Trung tâm', 'Đặt đối tượng tràn ra mép tranh', 'Tỉ lệ vàng, quy tắc 1/3, cân bằng'], 3, 'Bố cục cơ bản giúp tranh hài hoà.'),
    Q('Ánh sáng trong tranh?', ['Không quan tâm', 'Đều khắp', 'Sao chép từ ảnh chụp gốc', 'Xác định hướng + nguồn để tạo khối'], 3, 'Ánh sáng tạo chiều sâu.'),
    Q('Pha màu cơ bản?', ['Bốn màu: đỏ - vàng - lam - lục', 'Đen - trắng', 'Tam giác màu: đỏ - vàng - lam', 'CMYK trong in ấn'], 2, 'Tam giác màu cổ điển.'),
    Q('Phối cảnh tuyến tính?', ['Đường thẳng hội tụ về điểm tụ', 'Vẽ các đường song song không gặp', 'Không có quy tắc', 'Vẽ không có chiều sâu kiểu Ai Cập'], 0, 'Phối cảnh tạo chiều sâu.'),
  ]),

  M(27, 'Vẽ chân dung', [
    Q('Tỉ lệ khuôn mặt cơ bản?', ['Mắt nằm ở giữa đầu, miệng ở 1/3 dưới mũi-cằm', 'Mắt nằm sát đỉnh đầu, miệng giữa mặt', 'Mắt và miệng cùng nằm 1/2 trên', 'Mắt ở trên cùng'], 0, 'Tỉ lệ chuẩn giúp chân dung đẹp.'),
    Q('Khi vẽ chân dung, ánh sáng?', ['Một hướng rõ tạo khối khuôn mặt', 'Ánh sáng đều từ mọi hướng', 'Ánh sáng từ phía sau, không tạo bóng', 'Không quan tâm'], 0, 'Ánh sáng định hướng tạo khối 3D.'),
    Q('Biểu cảm khuôn mặt nằm ở?', ['Kiểu tóc', 'Mắt + miệng chủ yếu', 'Cằm và xương hàm', 'Tai và trán'], 1, 'Mắt + miệng truyền cảm xúc.'),
    Q('Phối cảnh đầu nghiêng?', ['Vẽ đầy đủ chi tiết như góc chính diện', 'Không quan tâm', 'Chú ý độ rút ngắn (foreshortening)', 'Vẽ phẳng'], 2, 'Foreshortening khi vẽ góc nghiêng.'),
  ]),

  M(28, 'Thiết kế đồ hoạ cơ bản', [
    Q('Nguyên tắc thiết kế cơ bản?', ['Đối xứng, đồng nhất màu, tĩnh', 'Đẹp là đủ', 'Phong phú, ngẫu nhiên, không quy luật', 'Cân bằng, tương phản, nhịp điệu, nhấn mạnh, thống nhất'], 3, '5 nguyên tắc cơ bản của design.'),
    Q('Phối màu cơ bản?', ['Đơn sắc, tương đồng, bổ sung, tam giác', 'Phối ngẫu nhiên theo cảm xúc', 'Chỉ dùng RGB như màn hình', 'Đen-trắng'], 0, 'Bánh xe màu giúp phối hợp.'),
    Q('Phần mềm thiết kế phổ biến?', ['Excel, Power BI để vẽ biểu đồ', 'Word, Google Docs', 'Notepad', 'Photoshop, Illustrator, Figma, Canva'], 3, 'Các phần mềm thiết kế chuyên nghiệp.'),
    Q('Typography là?', ['Bố cục tranh phong cảnh', 'Nghệ thuật chữ trong thiết kế', 'Pha trộn màu sơn dầu', 'Chụp ảnh'], 1, 'Typography rất quan trọng trong design.'),
  ]),

  M(29, 'Sáng tạo nghệ thuật + xã hội', [
    Q('Nghệ thuật phản ánh?', ['Không gì', 'Chỉ cá nhân', 'Xã hội + cảm xúc cá nhân', 'Chỉ xã hội'], 2, 'Nghệ thuật là tấm gương phản ánh xã hội + tâm hồn.'),
    Q('Nghệ thuật cộng đồng?', ['Tác phẩm trưng bày trong gallery riêng', 'Tác phẩm cho công chúng (mural, tượng công cộng)', 'Bí mật', 'Riêng tư'], 1, 'Nghệ thuật công cộng phục vụ cộng đồng.'),
    Q('Bảo tồn di sản nghệ thuật cần?', ['Mặc kệ', 'Chỉ chính phủ', 'Toàn xã hội + chính sách + giáo dục', 'Chỉ giới sưu tầm và bảo tàng'], 2, 'Bảo tồn là trách nhiệm chung.'),
    Q('NFT và nghệ thuật số?', ['Xu hướng mới: nghệ thuật trên blockchain', 'Chỉ là tranh số hoá thông thường', 'Cổ điển', 'Phong cách hậu hiện đại'], 0, 'NFT mở ra thị trường nghệ thuật số mới.'),
  ]),

  M(30, 'Âm nhạc + Mỹ thuật giao thoa', [
    Q('Nhạc phim (film score) có vai trò?', ['Chỉ tạo tiếng động nền', 'Lấp khoảng lặng giữa các cảnh', 'Tạo cảm xúc + dẫn dắt câu chuyện', 'Quảng cáo cho phim'], 2, 'Film score quan trọng trong điện ảnh.'),
    Q('Hans Zimmer là?', ['Nhà soạn nhạc phim nổi tiếng', 'Diễn viên', 'Ca sĩ opera người Đức', 'Đạo diễn'], 0, 'Hans Zimmer sáng tác cho nhiều phim bom tấn.'),
    Q('MV (music video) kết hợp?', ['Karaoke có lyrics chạy', 'Chỉ nhạc', 'Chỉ hình', 'Nhạc + hình ảnh + biểu diễn'], 3, 'MV kết hợp đa nghệ thuật.'),
    Q('Animation và âm nhạc?', ['Đối lập', 'Disney/Studio Ghibli kết hợp tuyệt đẹp', 'Hoạt hình thường không có nhạc nền', 'Không liên quan'], 1, 'Animation + nhạc tạo trải nghiệm hoàn chỉnh.'),
  ]),

  M(31, 'Nghệ thuật và công nghệ', [
    Q('AI sinh nghệ thuật (AI art)?', ['Microsoft Word', 'Phần mềm chỉnh sửa ảnh thông thường', 'DALL-E, Midjourney, Stable Diffusion', 'Photoshop'], 2, 'AI art bùng nổ từ 2022.'),
    Q('VR/AR trong nghệ thuật?', ['Chỉ game', 'Không liên quan', 'Chỉ dùng để xem phim 3D', 'Trải nghiệm nghệ thuật ảo, immersive'], 3, 'VR/AR mở rộng không gian nghệ thuật.'),
    Q('Generative art?', ['Nghệ thuật do nhiều người cùng vẽ', 'Vẽ tay', 'Chỉ AI', 'Nghệ thuật do thuật toán tạo'], 3, 'Generative art có từ trước AI, dùng thuật toán.'),
    Q('Vấn đề đạo đức AI art?', ['Khó in ra giấy chất lượng cao', 'Không có vấn đề đạo đức gì', 'Chỉ vẽ chậm hơn người', 'Bản quyền dữ liệu huấn luyện, mất việc của họa sĩ'], 3, 'AI art có nhiều vấn đề đạo đức.'),
  ]),

  M(32, 'Định hướng nghề nghệ thuật', [
    Q('Nghề liên quan âm nhạc?', ['Ca sĩ, nhà soạn nhạc, sound engineer, music teacher', 'Chỉ giáo viên', 'Chỉ ca sĩ', 'Chỉ ca sĩ và nhạc sĩ sáng tác'], 0, 'Nhiều nghề trong ngành âm nhạc.'),
    Q('Nghề liên quan mỹ thuật?', ['Họa sĩ, designer, kiến trúc sư, nhiếp ảnh, animator', 'Chỉ giáo viên dạy vẽ', 'Chỉ họa sĩ', 'Chỉ thợ làm khung tranh'], 0, 'Mỹ thuật có nhiều nghề ứng dụng.'),
    Q('Trường ĐH nghệ thuật ở VN?', ['ĐH Mỹ thuật VN, ĐH Mỹ thuật TP.HCM, ĐH Sân khấu - Điện ảnh', 'Chỉ Học viện Âm nhạc Quốc gia', 'Chỉ ĐHQG', 'Chỉ ĐH Bách khoa Hà Nội'], 0, 'Có nhiều trường nghệ thuật uy tín.'),
    Q('Học nghệ thuật cần?', ['Chỉ năng khiếu bẩm sinh', 'Chỉ năng khiếu', 'Chỉ tiền', 'Năng khiếu + đam mê + kiên trì luyện tập'], 3, 'Nghệ thuật cần đa yếu tố.'),
  ]),

  M(33, 'Ôn tập HK2 — Mỹ thuật', [
    Q('Ấn tượng đặc trưng?', ['Vẽ theo trí nhớ trong xưởng', 'Trong xưởng', 'Đen-trắng', 'Vẽ ngoài trời, bắt khoảnh khắc ánh sáng'], 3, 'Plein air + bắt sáng.'),
    Q('Cubism do?', ['Da Vinci', 'Salvador Dalí', 'Picasso + Braque', 'Claude Monet'], 2, 'Picasso + Braque sáng lập.'),
    Q('Mỹ thuật Đông Dương 1925?', ['Trường CĐ Mỹ thuật Đông Dương, Hà Nội', '1900', 'Trường Mỹ thuật Đông Dương ở Sài Gòn', '2000'], 0, 'Đặt nền móng mỹ thuật hiện đại VN.'),
    Q('Bùi Xuân Phái nổi tiếng?', ['Phố cổ Hà Nội', 'Chân dung', 'Trừu tượng', 'Tranh thiếu nữ và hoa huệ'], 0, '"Phố Phái" biểu tượng.'),
    Q('Nghệ thuật đương đại đặc trưng?', ['Cổ điển', 'Chỉ vẽ sơn dầu truyền thống', 'Đa phương tiện, khái niệm trên kỹ thuật', 'Phong cách cố định, không thay đổi'], 2, 'Đương đại đa dạng phương tiện.'),
  ]),

  M(34, 'Tổng kết — Âm nhạc + Mỹ thuật toàn cấp', [
    Q('Hợp âm 7 dùng nhiều ở?', ['Jazz, blues, pop', 'Nhạc giao hưởng cổ điển', 'Cổ điển', 'Trance và Techno EDM'], 0, 'Chord 7 đặc trưng jazz.'),
    Q('Pop đặc trưng?', ['Phức tạp', 'Hoà âm phức tạp như jazz', 'Cấu trúc verse-chorus, hook bắt tai', 'Ngẫu hứng tự do không lặp'], 2, 'Pop có cấu trúc rõ ràng.'),
    Q('Renaissance đại danh hoạ?', ['Van Gogh', 'Caravaggio, Rembrandt, Vermeer', 'Picasso', 'Leonardo, Michelangelo, Raphael'], 3, 'Bộ ba Phục Hưng đỉnh cao.'),
    Q('Pop Art biểu tượng?', ['Da Vinci', 'Andy Warhol', 'Roy Lichtenstein (cùng trào lưu nhưng khác biểu tượng)', 'Picasso'], 1, 'Warhol là biểu tượng Pop Art.'),
    Q('Nghệ thuật Việt đặc sắc?', ['Sơn dầu', 'Tranh acrylic và màu nước', 'Tranh sơn dầu kiểu Pháp', 'Sơn mài, lụa, khắc gỗ'], 3, 'Chất liệu đặc sắc của VN.'),
  ]),

  M(35, 'Sáng tạo cuối năm — Dự án cá nhân', [
    Q('Dự án nghệ thuật cá nhân nên?', ['Bắt chước', 'Không cần ý tưởng', 'Chọn chủ đề yêu thích, kết hợp âm nhạc + mỹ thuật + công nghệ', 'Sao chép tác phẩm có sẵn cho an toàn'], 2, 'Dự án cá nhân thể hiện cá tính.'),
    Q('Trình bày dự án?', ['Để tác phẩm im lặng tự nói', 'Chuẩn bị + thuyết minh ý tưởng + tác phẩm', 'Vô tổ chức', 'Không cần'], 1, 'Trình bày rõ ràng + thuyết minh.'),
    Q('Đánh giá nghệ thuật dựa?', ['Chỉ đẹp', 'Chỉ giá bán ngoài thị trường', 'May rủi', 'Sáng tạo, kỹ thuật, ý nghĩa, biểu cảm'], 3, 'Nhiều tiêu chí đánh giá nghệ thuật.'),
    Q('Nghệ thuật suốt đời?', ['Chỉ chuyên', 'Có thể theo đuổi sau lớp 9 dù không học chuyên', 'Chỉ học chuyên mới có giá trị', 'Phải dừng'], 1, 'Nghệ thuật làm phong phú cuộc sống suốt đời.'),
    Q('Giá trị của môn nghệ thuật?', ['Chỉ dạy kỹ năng vẽ và chơi nhạc', 'Không có giá trị thực tế', 'Phát triển cảm xúc, sáng tạo, thẩm mỹ', 'Chỉ giải trí'], 2, 'Nghệ thuật nuôi dưỡng tâm hồn.'),
  ]),
];

export const S9NT_SCENARIOS = indexBy(S9NT_WEEKS);
